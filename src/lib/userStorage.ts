import { supabase, isSupabaseConfigured } from './supabase';
import { ProfileAnalysisInput, ProfileAnalysisResult } from '../types';

export interface UserProfile {
  id: string;
  email: string;
  full_name?: string;
  role: 'Student' | 'Counselor' | 'Teacher' | 'Admin';
  preferences?: Record<string, any>;
  created_at?: string;
  updated_at?: string;
}

export interface SatPracticeProgress {
  reading_answers: Record<string, number>;
  writing_answers: Record<string, number>;
  math_answers: Record<string, number>;
  calculator_state?: Record<string, any>;
}

const LOCAL_BOOKMARKS_KEY = 'uniroute_saved_universities_v1';
const LOCAL_READING_KEY = 'sat_reading_answers';
const LOCAL_WRITING_KEY = 'sat_writing_answers';
const LOCAL_MATH_KEY = 'sat_math_answers';

/**
 * Get the currently authenticated user's ID and Email from Supabase (or offline fallback)
 */
export async function getCurrentUser(): Promise<{ id: string; email: string } | null> {
  if (isSupabaseConfigured() && supabase) {
    try {
      const { data: { session }, error } = await supabase.auth.getSession();
      if (error || !session?.user) return null;
      return {
        id: session.user.id,
        email: session.user.email || '',
      };
    } catch (e) {
      console.error('Error fetching Supabase session user:', e);
      return null;
    }
  }

  // Offline sandbox session fallback
  try {
    const raw = localStorage.getItem('mock_user_session');
    if (!raw) return null;
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

// ----------------------------------------------------------------------
// 1. USER PROFILES
// ----------------------------------------------------------------------

export async function fetchUserProfile(userId: string): Promise<UserProfile | null> {
  if (!isSupabaseConfigured() || !supabase) {
    return null;
  }

  try {
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', userId)
      .maybeSingle();

    if (error) {
      console.warn('Error fetching user profile from Supabase:', error.message);
      return null;
    }

    return data as UserProfile | null;
  } catch (err) {
    console.error('Exception fetching profile:', err);
    return null;
  }
}

export async function upsertUserProfile(profile: {
  id: string;
  email?: string;
  full_name?: string;
  role?: string;
  preferences?: Record<string, any>;
}): Promise<boolean> {
  if (!isSupabaseConfigured() || !supabase) {
    return false;
  }

  try {
    const { error } = await supabase.from('profiles').upsert({
      id: profile.id,
      email: profile.email,
      full_name: profile.full_name,
      role: profile.role || 'Student',
      preferences: profile.preferences || {},
      updated_at: new Date().toISOString(),
    });

    if (error) {
      console.warn('Error upserting profile in Supabase:', error.message);
      return false;
    }
    return true;
  } catch (err) {
    console.error('Exception saving profile:', err);
    return false;
  }
}

// ----------------------------------------------------------------------
// 2. SAVED / BOOKMARKED UNIVERSITIES
// ----------------------------------------------------------------------

export function getLocalBookmarkedIds(): Set<string> {
  try {
    const raw = localStorage.getItem(LOCAL_BOOKMARKS_KEY);
    if (!raw) return new Set<string>();
    const arr: string[] = JSON.parse(raw);
    return new Set<string>(Array.isArray(arr) ? arr : []);
  } catch {
    return new Set<string>();
  }
}

export function saveLocalBookmarkedIds(ids: Set<string>): void {
  try {
    localStorage.setItem(LOCAL_BOOKMARKS_KEY, JSON.stringify(Array.from(ids)));
  } catch (e) {
    console.error('Failed to save bookmarks to localStorage', e);
  }
}

export async function fetchSavedUniversityIds(userId?: string): Promise<Set<string>> {
  const user = userId ? { id: userId } : await getCurrentUser();
  if (!user || !isSupabaseConfigured() || !supabase) {
    return getLocalBookmarkedIds();
  }

  try {
    const { data, error } = await supabase
      .from('saved_universities')
      .select('university_id')
      .eq('user_id', user.id);

    if (error) {
      console.warn('Error fetching saved universities from Supabase:', error.message);
      return getLocalBookmarkedIds();
    }

    if (data) {
      const remoteIds = new Set<string>(data.map((r: any) => String(r.university_id)));
      saveLocalBookmarkedIds(remoteIds);
      return remoteIds;
    }
  } catch (e) {
    console.error('Exception in fetchSavedUniversityIds:', e);
  }

  return getLocalBookmarkedIds();
}

export async function toggleUniversityBookmark(
  uniId: string,
  uniName?: string,
  country?: string
): Promise<{ isBookmarked: boolean; allIds: Set<string> }> {
  const current = getLocalBookmarkedIds();
  const exists = current.has(uniId);
  const user = await getCurrentUser();

  if (exists) {
    current.delete(uniId);
  } else {
    current.add(uniId);
  }

  // Update local storage immediately for responsive UI
  saveLocalBookmarkedIds(current);

  // Sync to Supabase if authenticated
  if (user && isSupabaseConfigured() && supabase) {
    try {
      if (exists) {
        const { error } = await supabase
          .from('saved_universities')
          .delete()
          .eq('user_id', user.id)
          .eq('university_id', uniId);
        if (error) console.warn('Supabase bookmark delete error:', error.message);
      } else {
        const { error } = await supabase.from('saved_universities').upsert({
          user_id: user.id,
          university_id: uniId,
          university_name: uniName || null,
          country: country || null,
        }, { onConflict: 'user_id,university_id' });
        if (error) console.warn('Supabase bookmark upsert error:', error.message);
      }
    } catch (err) {
      console.warn('Supabase bookmark toggle error:', err);
    }
  }

  // Notify listeners
  if (typeof window !== 'undefined') {
    window.dispatchEvent(
      new CustomEvent('uniroute-bookmarks-updated', {
        detail: { bookmarkedIds: Array.from(current), toggledId: uniId, isBookmarked: !exists },
      })
    );
  }

  return { isBookmarked: !exists, allIds: current };
}

// ----------------------------------------------------------------------
// 3. SAT PRACTICE PROGRESS & SECTION ANSWERS
// ----------------------------------------------------------------------

export async function loadSatPracticeProgress(userId?: string): Promise<SatPracticeProgress> {
  const localProgress: SatPracticeProgress = {
    reading_answers: {},
    writing_answers: {},
    math_answers: {},
  };

  try {
    const r = localStorage.getItem(LOCAL_READING_KEY);
    if (r) localProgress.reading_answers = JSON.parse(r);
  } catch {}
  try {
    const w = localStorage.getItem(LOCAL_WRITING_KEY);
    if (w) localProgress.writing_answers = JSON.parse(w);
  } catch {}
  try {
    const m = localStorage.getItem(LOCAL_MATH_KEY);
    if (m) localProgress.math_answers = JSON.parse(m);
  } catch {}

  const user = userId ? { id: userId } : await getCurrentUser();
  if (!user || !isSupabaseConfigured() || !supabase) {
    return localProgress;
  }

  try {
    const { data, error } = await supabase
      .from('sat_practice_progress')
      .select('*')
      .eq('user_id', user.id)
      .maybeSingle();

    if (!error && data) {
      const merged: SatPracticeProgress = {
        reading_answers: { ...localProgress.reading_answers, ...(data.reading_answers || {}) },
        writing_answers: { ...localProgress.writing_answers, ...(data.writing_answers || {}) },
        math_answers: { ...localProgress.math_answers, ...(data.math_answers || {}) },
      };

      // Keep local storage synchronized
      localStorage.setItem(LOCAL_READING_KEY, JSON.stringify(merged.reading_answers));
      localStorage.setItem(LOCAL_WRITING_KEY, JSON.stringify(merged.writing_answers));
      localStorage.setItem(LOCAL_MATH_KEY, JSON.stringify(merged.math_answers));
      return merged;
    }
  } catch (err) {
    console.error('Failed to load SAT practice progress from Supabase:', err);
  }

  return localProgress;
}

export async function saveSatSectionAnswer(
  section: 'reading' | 'writing' | 'math',
  questionId: string,
  answerIndex: number
): Promise<void> {
  const key =
    section === 'reading'
      ? LOCAL_READING_KEY
      : section === 'writing'
      ? LOCAL_WRITING_KEY
      : LOCAL_MATH_KEY;

  let currentMap: Record<string, number> = {};
  try {
    const raw = localStorage.getItem(key);
    if (raw) currentMap = JSON.parse(raw);
  } catch {}

  currentMap[questionId] = answerIndex;
  try {
    localStorage.setItem(key, JSON.stringify(currentMap));
  } catch {}

  // Sync to Supabase in background
  const user = await getCurrentUser();
  if (user && isSupabaseConfigured() && supabase) {
    const reading = JSON.parse(localStorage.getItem(LOCAL_READING_KEY) || '{}');
    const writing = JSON.parse(localStorage.getItem(LOCAL_WRITING_KEY) || '{}');
    const math = JSON.parse(localStorage.getItem(LOCAL_MATH_KEY) || '{}');

    supabase
      .from('sat_practice_progress')
      .upsert({
        user_id: user.id,
        reading_answers: reading,
        writing_answers: writing,
        math_answers: math,
        updated_at: new Date().toISOString(),
      }, { onConflict: 'user_id' })
      .then(
        ({ error }) => {
          if (error) console.warn('Supabase sat practice update failed:', error.message);
        },
        () => {}
      );
  }
}

export async function resetAllSatProgress(userId?: string): Promise<void> {
  try {
    localStorage.removeItem(LOCAL_READING_KEY);
    localStorage.removeItem(LOCAL_WRITING_KEY);
    localStorage.removeItem(LOCAL_MATH_KEY);
  } catch {}

  const user = userId ? { id: userId } : await getCurrentUser();
  if (user && isSupabaseConfigured() && supabase) {
    try {
      await supabase.from('sat_practice_progress').upsert({
        user_id: user.id,
        reading_answers: {},
        writing_answers: {},
        math_answers: {},
        updated_at: new Date().toISOString(),
      });
    } catch (e) {
      console.warn('Error resetting SAT progress in Supabase:', e);
    }
  }
}

// ----------------------------------------------------------------------
// 4. AI ADMISSIONS PROFILE ANALYSES
// ----------------------------------------------------------------------

export async function fetchLatestProfileAnalysis(
  userId?: string
): Promise<{ profileInput: ProfileAnalysisInput; analysisResult: ProfileAnalysisResult } | null> {
  const user = userId ? { id: userId } : await getCurrentUser();
  if (!user || !isSupabaseConfigured() || !supabase) {
    return null;
  }

  try {
    const { data, error } = await supabase
      .from('profile_analyses')
      .select('*')
      .eq('user_id', user.id)
      .order('created_at', { ascending: false })
      .limit(1)
      .maybeSingle();

    if (error || !data) return null;

    return {
      profileInput: data.profile_input as ProfileAnalysisInput,
      analysisResult: data.analysis_result as ProfileAnalysisResult,
    };
  } catch (err) {
    console.warn('Error fetching latest profile analysis:', err);
    return null;
  }
}

export async function saveProfileAnalysisToSupabase(
  profileInput: ProfileAnalysisInput,
  analysisResult: ProfileAnalysisResult
): Promise<void> {
  const user = await getCurrentUser();
  if (!user || !isSupabaseConfigured() || !supabase) {
    return;
  }

  try {
    const ratingScore = typeof analysisResult.ratingScore === 'number' ? analysisResult.ratingScore : null;
    const overallRating = analysisResult.overallRating || null;

    const { error } = await supabase.from('profile_analyses').insert({
      user_id: user.id,
      profile_input: profileInput,
      analysis_result: analysisResult,
      rating_score: ratingScore,
      overall_rating: overallRating,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    });

    if (error) {
      console.warn('Supabase profile analysis save error:', error.message);
    }
  } catch (err) {
    console.error('Exception saving profile analysis to Supabase:', err);
  }
}

// Aliases for convenience
export const saveProfileAnalysis = saveProfileAnalysisToSupabase;
export const getLatestProfileAnalysis = fetchLatestProfileAnalysis;

export async function saveSatPracticeProgress(
  section: 'reading' | 'writing' | 'math',
  answers: Record<string, number>
): Promise<void> {
  const key =
    section === 'reading'
      ? LOCAL_READING_KEY
      : section === 'writing'
      ? LOCAL_WRITING_KEY
      : LOCAL_MATH_KEY;

  try {
    localStorage.setItem(key, JSON.stringify(answers));
  } catch {}

  const user = await getCurrentUser();
  if (user && isSupabaseConfigured() && supabase) {
    const reading = JSON.parse(localStorage.getItem(LOCAL_READING_KEY) || '{}');
    const writing = JSON.parse(localStorage.getItem(LOCAL_WRITING_KEY) || '{}');
    const math = JSON.parse(localStorage.getItem(LOCAL_MATH_KEY) || '{}');

    supabase
      .from('sat_practice_progress')
      .upsert({
        user_id: user.id,
        reading_answers: reading,
        writing_answers: writing,
        math_answers: math,
        updated_at: new Date().toISOString(),
      }, { onConflict: 'user_id' })
      .then(
        ({ error }) => {
          if (error) console.warn('Supabase sat practice update failed:', error.message);
        },
        () => {}
      );
  }
}
