import {
  DrillActiveSessionSave,
  FullDrillResult,
  ModuleSessionResult
} from './types';
import { supabase, isSupabaseConfigured } from '../../lib/supabase';
import { getCurrentUser } from '../../lib/userStorage';

const ACTIVE_SESSIONS_STORAGE_KEY = 'sat_drills_active_sessions_v1';
const RESULTS_HISTORY_STORAGE_KEY = 'sat_drills_history_v1';

/**
 * Retrieve all active (in-progress) drill sessions from local cache
 */
export function getAllActiveDrillSessions(): Record<number, DrillActiveSessionSave> {
  try {
    const raw = localStorage.getItem(ACTIVE_SESSIONS_STORAGE_KEY);
    if (!raw) return {};
    return JSON.parse(raw) || {};
  } catch (e) {
    console.error('Failed to load active drill sessions from localStorage', e);
    return {};
  }
}

/**
 * Get active session for a specific drill
 */
export function getActiveDrillSession(drillId: number): DrillActiveSessionSave | null {
  const sessions = getAllActiveDrillSessions();
  return sessions[drillId] || null;
}

/**
 * Save or update active session for a specific drill
 */
export function saveActiveDrillSession(session: DrillActiveSessionSave): void {
  try {
    const sessions = getAllActiveDrillSessions();
    sessions[session.drillId] = {
      ...session,
      lastUpdated: new Date().toISOString()
    };
    localStorage.setItem(ACTIVE_SESSIONS_STORAGE_KEY, JSON.stringify(sessions));

    // Sync to Supabase in background if authenticated
    if (isSupabaseConfigured() && supabase) {
      getCurrentUser().then((user) => {
        if (!user) return;
        supabase
          .from('sat_drill_sessions')
          .upsert({
            user_id: user.id,
            drill_id: session.drillId,
            session_data: session,
            updated_at: new Date().toISOString()
          })
          .then(
            ({ error }) => {
              if (error) console.warn('Supabase drill session upsert error:', error.message);
            },
            () => {}
          );
      });
    }
  } catch (e) {
    console.error('Failed to save active drill session to localStorage', e);
  }
}

/**
 * Clear active session for a specific drill (e.g. on test completion or reset)
 */
export function clearActiveDrillSession(drillId: number): void {
  try {
    const sessions = getAllActiveDrillSessions();
    if (sessions[drillId]) {
      delete sessions[drillId];
      localStorage.setItem(ACTIVE_SESSIONS_STORAGE_KEY, JSON.stringify(sessions));
    }

    if (isSupabaseConfigured() && supabase) {
      getCurrentUser().then((user) => {
        if (!user) return;
        supabase
          .from('sat_drill_sessions')
          .delete()
          .eq('user_id', user.id)
          .eq('drill_id', drillId)
          .then(
            () => {},
            () => {}
          );
      });
    }
  } catch (e) {
    console.error('Failed to clear active drill session', e);
  }
}

/**
 * Retrieve all completed drill test result records
 */
export function getCompletedDrillHistory(drillId?: number): FullDrillResult[] {
  try {
    const raw = localStorage.getItem(RESULTS_HISTORY_STORAGE_KEY);
    if (!raw) return [];
    const history: FullDrillResult[] = JSON.parse(raw) || [];
    if (drillId !== undefined) {
      return history.filter((h) => h.drillId === drillId);
    }
    return history;
  } catch (e) {
    console.error('Failed to load completed drill history', e);
    return [];
  }
}

/**
 * Save a completed drill result
 */
export function saveCompletedDrillResult(result: FullDrillResult): void {
  try {
    const history = getCompletedDrillHistory();
    // Add new result to beginning of history list
    const updated = [result, ...history];
    localStorage.setItem(RESULTS_HISTORY_STORAGE_KEY, JSON.stringify(updated));
    // Clear the active session since it's now completed
    clearActiveDrillSession(result.drillId);

    // Sync to Supabase in background
    if (isSupabaseConfigured() && supabase) {
      getCurrentUser().then((user) => {
        if (!user) return;

        const totalCorrect =
          (result.rwModule1?.totalCorrect || 0) +
          (result.rwModule2?.totalCorrect || 0) +
          (result.mathModule1?.totalCorrect || 0) +
          (result.mathModule2?.totalCorrect || 0);

        const totalQuestions =
          (result.rwModule1?.totalQuestions || 0) +
          (result.rwModule2?.totalQuestions || 0) +
          (result.mathModule1?.totalQuestions || 0) +
          (result.mathModule2?.totalQuestions || 0);

        const totalAnswered =
          Object.keys(result.rwModule1?.responses || {}).length +
          Object.keys(result.rwModule2?.responses || {}).length +
          Object.keys(result.mathModule1?.responses || {}).length +
          Object.keys(result.mathModule2?.responses || {}).length;

        const accuracyPercentage =
          totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0;

        supabase
          .from('sat_drill_results')
          .insert({
            user_id: user.id,
            drill_id: result.drillId,
            drill_title: `Practice Drill #${result.drillId}`,
            estimated_total_score: result.estimatedTotalScore,
            total_correct: totalCorrect,
            total_answered: totalAnswered,
            total_questions: totalQuestions,
            accuracy_percentage: accuracyPercentage,
            result_data: result,
            completed_at: result.completedAt || new Date().toISOString()
          })
          .then(
            ({ error }) => {
              if (error) console.warn('Supabase drill result insert error:', error.message);
            },
            () => {}
          );
      });
    }
  } catch (e) {
    console.error('Failed to save completed drill result', e);
  }
}


/**
 * Fetch and merge user's drill history and active sessions from Supabase
 */
export async function syncDrillDataFromSupabase(userId?: string): Promise<void> {
  const user = userId ? { id: userId } : await getCurrentUser();
  if (!user || !isSupabaseConfigured() || !supabase) return;

  try {
    // 1. Fetch active sessions
    const { data: sessionsData, error: sessionsError } = await supabase
      .from('sat_drill_sessions')
      .select('drill_id, session_data')
      .eq('user_id', user.id);

    if (!sessionsError && sessionsData && sessionsData.length > 0) {
      const activeSessions = getAllActiveDrillSessions();
      sessionsData.forEach((row: any) => {
        if (row.session_data) {
          activeSessions[row.drill_id] = row.session_data as DrillActiveSessionSave;
        }
      });
      localStorage.setItem(ACTIVE_SESSIONS_STORAGE_KEY, JSON.stringify(activeSessions));
    }

    // 2. Fetch completed results history
    const { data: resultsData, error: resultsError } = await supabase
      .from('sat_drill_results')
      .select('result_data, completed_at')
      .eq('user_id', user.id)
      .order('completed_at', { ascending: false });

    if (!resultsError && resultsData && resultsData.length > 0) {
      const remoteResults: FullDrillResult[] = resultsData
        .map((r: any) => r.result_data as FullDrillResult)
        .filter(Boolean);

      const localHistory = getCompletedDrillHistory();
      // Deduplicate by completedAt + drillId
      const seen = new Set<string>();
      const combined: FullDrillResult[] = [];

      [...remoteResults, ...localHistory].forEach((item) => {
        const key = `${item.drillId}-${item.completedAt}`;
        if (!seen.has(key)) {
          seen.add(key);
          combined.push(item);
        }
      });

      localStorage.setItem(RESULTS_HISTORY_STORAGE_KEY, JSON.stringify(combined));
    }
  } catch (err) {
    console.error('Exception in syncDrillDataFromSupabase:', err);
  }
}

/**
 * Get the latest completed result for a drill
 */
export function getLatestDrillResult(drillId: number): FullDrillResult | null {
  const history = getCompletedDrillHistory(drillId);
  return history.length > 0 ? history[0] : null;
}

/**
 * Get highest estimated total score for a drill
 */
export function getBestDrillScore(drillId: number): number | null {
  const history = getCompletedDrillHistory(drillId);
  if (history.length === 0) return null;
  return Math.max(...history.map((h) => h.estimatedTotalScore));
}

/**
 * Clear all progress across all drills (both active and completed history)
 */
export function clearAllDrillProgress(): void {
  try {
    localStorage.removeItem(ACTIVE_SESSIONS_STORAGE_KEY);
    localStorage.removeItem(RESULTS_HISTORY_STORAGE_KEY);

    if (isSupabaseConfigured() && supabase) {
      getCurrentUser().then((user) => {
        if (!user) return;
        Promise.all([
          Promise.resolve(supabase.from('sat_drill_sessions').delete().eq('user_id', user.id)),
          Promise.resolve(supabase.from('sat_drill_results').delete().eq('user_id', user.id))
        ]).catch(() => {});
      });
    }
  } catch (e) {
    console.error('Failed to clear all drill progress', e);
  }
}

/**
 * Clear progress for a specific drill (both active and history)
 */
export function clearSingleDrillProgress(drillId: number): void {
  try {
    clearActiveDrillSession(drillId);
    const history = getCompletedDrillHistory();
    const filtered = history.filter((h) => h.drillId !== drillId);
    localStorage.setItem(RESULTS_HISTORY_STORAGE_KEY, JSON.stringify(filtered));

    if (isSupabaseConfigured() && supabase) {
      getCurrentUser().then((user) => {
        if (!user) return;
        supabase
          .from('sat_drill_results')
          .delete()
          .eq('user_id', user.id)
          .eq('drill_id', drillId)
          .then(
            () => {},
            () => {}
          );
      });
    }
  } catch (e) {
    console.error(`Failed to clear progress for drill #${drillId}`, e);
  }
}

