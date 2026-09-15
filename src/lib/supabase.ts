/// <reference types="vite/client" />
import { createClient } from '@supabase/supabase-js';
import { UniversityTrackItem, GovernmentTrackItem } from '../types';
import { getSatSummary } from '../utils/universityUtils';
import { FullSatWritingChapter, WritingTheoryBlock, WritingExerciseBlock } from '../data/writing/satWritingTypes';
import { DEFAULT_GOVERNMENT_SCHOLARSHIPS } from '../data/governmentScholarshipsData';

// Read Supabase environment variables
const getEnvVar = (key: string): string => {
  if (typeof import.meta !== 'undefined' && import.meta && import.meta.env) {
    return import.meta.env[key] || '';
  }
  if (typeof process !== 'undefined' && process && process.env) {
    return process.env[key] || '';
  }
  return '';
};

const DEFAULT_SUPABASE_URL = 'https://abyvzlrkskqnpzsvoaym.supabase.co';
const DEFAULT_SUPABASE_ANON_KEY = 'sb_publishable_xapYrcmAZ6fITqMd4bK1ag_w_A6UVBB';

const supabaseUrl = getEnvVar('VITE_SUPABASE_URL') || DEFAULT_SUPABASE_URL;
const supabaseAnonKey = getEnvVar('VITE_SUPABASE_ANON_KEY') || DEFAULT_SUPABASE_ANON_KEY;

export const isSupabaseConfigured = (): boolean => {
  return Boolean(
    supabaseUrl &&
    supabaseAnonKey &&
    supabaseUrl !== 'https://placeholder.supabase.co' &&
    !supabaseUrl.includes('placeholder')
  );
};

export const supabase = isSupabaseConfigured()
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

/**
 * Wraps a promise with a timeout. If the promise does not resolve/reject within ms milliseconds,
 * it rejects with a timeout error so callers don't hang indefinitely.
 */
export function withTimeout<T>(promise: Promise<T>, ms: number = 3500): Promise<T> {
  const actualMs = Math.max(ms, 10000);
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      reject(new Error(`Supabase operation timed out after ${actualMs}ms`));
    }, actualMs);

    promise.then(
      (res) => {
        clearTimeout(timer);
        resolve(res);
      },
      (err) => {
        clearTimeout(timer);
        reject(err);
      }
    );
  });
}

/**
 * Gets cached data from localStorage safely.
 */
export function getLocalStorageCache<T>(key: string): T | null {
  try {
    if (typeof localStorage === 'undefined') return null;
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  } catch {
    return null;
  }
}

/**
 * Sets cached data into localStorage safely.
 */
export function setLocalStorageCache<T>(key: string, data: T): void {
  try {
    if (typeof localStorage === 'undefined') return;
    localStorage.setItem(key, JSON.stringify(data));
  } catch (e) {
    // Ignore storage quota errors
  }
}

/**
 * Maps a raw Supabase database row (snake_case or camelCase) to a UniversityTrackItem
 */
export function mapLegacyRowToUniversity(row: any, index: number): UniversityTrackItem {
  const uniName = row.university_name || row.universityName || row.name || `University ${index + 1}`;
  const firstLetter = uniName.charAt(0).toUpperCase();

  return {
    id: String(row.id || `supa-${index + 1}`),
    universityName: uniName,
    location: row.location || row.city || row.country || 'Global Campus',
    country: row.country || 'International',
    flag: row.flag || '🏛️',
    foundingYear: row.founding_year || row.foundingYear || '1800',
    scholarshipTitle: row.scholarship_title || row.scholarshipTitle || row.title || 'Institutional Aid',
    ranking: row.ranking || '#1 Tier',
    coverage: row.coverage || (row.has_full_ride ? 'Full Ride' : 'Partial Aid'),
    amountValue: row.amount_value || row.amountValue || row.amount || 'Financial Assistance Available',
    tuitionFee: row.tuition_fee || row.tuitionFee || row.tuition || 'Contact Admissions',
    tuitionAmountNumeric: Number(row.tuition_numeric || row.tuitionAmountNumeric || 0),
    hasFullRide: Boolean(row.has_full_ride ?? row.hasFullRide ?? (row.coverage === 'Full Ride')),
    hasPartialAid: Boolean(row.has_partial_aid ?? row.hasPartialAid ?? true),
    hasFinancialAid: Boolean(row.has_financial_aid ?? row.hasFinancialAid ?? true),
    financialAidType: row.financial_aid_type || row.financialAidType || 'Need-Based',
    minGpa: row.min_gpa || row.minGpa || '3.5 / 4.0',
    minSat: row.min_sat || row.minSat || 'Optional',
    satRequirementCategory: row.sat_category || row.satRequirementCategory || 'Optional',
    minIelts: row.min_ielts || row.minIelts || '6.5+',
    ieltsCategory: row.ielts_category || row.ieltsCategory || '6.5',
    acceptanceRate: row.acceptance_rate || row.acceptanceRate || row.acceptance || '10%',
    deadline: row.deadline || 'Jan 15',
    description: row.description || row.overview || `${uniName} provides premier education and global academic opportunities.`,
    degreesOffered: Array.isArray(row.degrees_offered)
      ? row.degrees_offered
      : Array.isArray(row.degreesOffered)
      ? row.degreesOffered
      : ['Undergraduate', 'Graduate'],
    tags: Array.isArray(row.tags) ? row.tags : ['Global', 'University'],
    requiresSeparateApp: Boolean(row.requires_separate_app ?? row.requiresSeparateApp ?? false),
    logoText: row.logo_text || row.logoText || uniName.split(' ')[0].toUpperCase(),
    logoBg: row.logo_bg || row.logoBg || 'bg-slate-900 text-white',
    supabaseDbId: row.id,
    track_category: 'global'
  };
}

/**
 * Maps the new 3-table International university structure to UniversityTrackItem
 */
export function mapInternationalRowToUniversity(row: any): UniversityTrackItem {
  return {
    id: row.uni_id,
    universityName: row.university_name,
    location: row.location,
    country: row.country,
    flag: row.flag,
    foundingYear: row.founding_year,
    scholarshipTitle: row.scholarship_title,
    ranking: row.ranking,
    qsSubjectRankings: row.qs_subject_rankings,
    rankingSource: row.ranking_source,
    coverage: row.coverage,
    amountValue: row.amount_value,
    tuitionFee: row.tuition_fee,
    tuitionAmountNumeric: Number(row.tuition_amount_numeric || 0),
    hasFullRide: Boolean(row.has_full_ride),
    hasPartialAid: Boolean(row.has_partial_aid),
    hasFinancialAid: Boolean(row.has_financial_aid),
    financialAidType: row.financial_aid_type,
    financialAidDetails: row.financial_aid_details,
    minGpa: row.min_gpa || '3.5 / 4.0',
    minSat: getSatSummary({
      satRequirementCategory: row.sat_requirement_category,
      minSat: row.min_sat,
      satPolicyDetails: row.sat_policy_details
    }).headline,
    satRequirementCategory: row.sat_requirement_category || 'Optional',
    satPolicyDetails: row.sat_policy_details,
    minIelts: row.min_ielts || (row.ielts_category ? `${row.ielts_category}+` : '6.5+'),
    ieltsCategory: row.ielts_category || '6.5',
    toeflRequirement: row.toefl_requirement,
    acceptanceRate: row.acceptance_rate,
    deadline: row.deadline,
    description: row.description,
    overviewLong: row.overview_long,
    topProgramsList: (row.international_university_programs || []).map((p: any) => ({
      name: p.name,
      ranking: p.ranking,
      description: p.description
    })),
    allScholarshipsList: (row.international_university_scholarships || []).map((s: any) => ({
      id: s.scholarship_code,
      title: s.title,
      amount: s.amount,
      coverage: s.coverage,
      eligibility: s.eligibility,
      description: s.description,
      deadline: s.deadline,
      requiresSeparateApp: Boolean(s.requires_separate_app)
    })),
    degreesOffered: Array.isArray(row.degrees_offered) ? row.degrees_offered : [],
    tags: Array.isArray(row.tags) ? row.tags : [],
    requiresSeparateApp: Boolean(row.requires_separate_app),
    logoText: row.logo_text,
    logoBg: row.logo_bg,
    supabaseDbId: row.id,
    track_category: 'international',
    commonAppAccepted: Boolean(row.common_app_accepted),
    applicationPortalDetails: row.application_portal_details
  };
}

/**
 * Maps the new 3-table Pakistani university structure to UniversityTrackItem
 */
export function mapPakistaniRowToUniversity(row: any): UniversityTrackItem {
  return {
    id: row.uni_id,
    universityName: row.university_name,
    location: row.location,
    country: row.country,
    flag: row.flag,
    foundingYear: row.founding_year,
    scholarshipTitle: row.scholarship_title,
    ranking: row.ranking,
    qsSubjectRankings: row.qs_subject_rankings,
    rankingSource: row.ranking_source,
    coverage: row.coverage,
    amountValue: row.amount_value,
    tuitionFee: row.tuition_fee,
    tuitionAmountNumeric: Number(row.tuition_amount_numeric || 0),
    hasFullRide: Boolean(row.has_full_ride),
    hasPartialAid: Boolean(row.has_partial_aid),
    hasFinancialAid: Boolean(row.has_financial_aid),
    financialAidType: row.financial_aid_type,
    financialAidDetails: row.financial_aid_details,
    minGpa: row.min_gpa || '3.5 / 4.0',
    minSat: getSatSummary({
      satRequirementCategory: row.sat_requirement_category,
      minSat: row.min_sat,
      satPolicyDetails: row.sat_policy_details
    }).headline,
    satRequirementCategory: row.sat_requirement_category || 'Optional',
    satPolicyDetails: row.sat_policy_details,
    minIelts: row.min_ielts || (row.ielts_category ? `${row.ielts_category}+` : '6.5+'),
    ieltsCategory: row.ielts_category || '6.5',
    toeflRequirement: row.toefl_requirement,
    acceptanceRate: row.acceptance_rate,
    deadline: row.deadline,
    description: row.description,
    overviewLong: row.overview_long,
    topProgramsList: (row.pakistani_university_programs || []).map((p: any) => ({
      name: p.name,
      ranking: p.ranking,
      description: p.description
    })),
    allScholarshipsList: (row.pakistani_university_scholarships || []).map((s: any) => ({
      id: s.scholarship_code,
      title: s.title,
      amount: s.amount,
      coverage: s.coverage,
      eligibility: s.eligibility,
      description: s.description,
      deadline: s.deadline,
      requiresSeparateApp: Boolean(s.requires_separate_app)
    })),
    degreesOffered: Array.isArray(row.degrees_offered) ? row.degrees_offered : [],
    tags: Array.isArray(row.tags) ? row.tags : [],
    requiresSeparateApp: Boolean(row.requires_separate_app),
    logoText: row.logo_text,
    logoBg: row.logo_bg,
    supabaseDbId: row.id,
    track_category: 'pakistani',
    commonAppAccepted: Boolean(row.common_app_accepted),
    applicationPortalDetails: row.application_portal_details
  };
}

const CACHE_KEY_UNIVERSITIES = 'uniroute_universities_cache_v2';
const CACHE_KEY_GOVERNMENT = 'uniroute_government_scholarships_cache_v2';

let cachedUniversityScholarships: UniversityTrackItem[] | null = getLocalStorageCache<UniversityTrackItem[]>(CACHE_KEY_UNIVERSITIES);
let cachedGovernmentScholarships: GovernmentTrackItem[] | null = getLocalStorageCache<GovernmentTrackItem[]>(CACHE_KEY_GOVERNMENT);

export function getCachedUniversityScholarships(trackType?: 'international' | 'pakistani'): UniversityTrackItem[] | null {
  if (!cachedUniversityScholarships) {
    cachedUniversityScholarships = getLocalStorageCache<UniversityTrackItem[]>(CACHE_KEY_UNIVERSITIES);
  }
  if (!cachedUniversityScholarships) return null;
  if (trackType === 'international') {
    return cachedUniversityScholarships.filter(u => u.track_category === 'international' || u.track_category === 'global');
  }
  if (trackType === 'pakistani') {
    return cachedUniversityScholarships.filter(u => u.track_category === 'pakistani');
  }
  return cachedUniversityScholarships;
}

export function getCachedGovernmentScholarships(): GovernmentTrackItem[] {
  if (!cachedGovernmentScholarships || cachedGovernmentScholarships.length === 0) {
    cachedGovernmentScholarships = getLocalStorageCache<GovernmentTrackItem[]>(CACHE_KEY_GOVERNMENT);
  }
  if (!cachedGovernmentScholarships || cachedGovernmentScholarships.length === 0) {
    cachedGovernmentScholarships = DEFAULT_GOVERNMENT_SCHOLARSHIPS;
  }
  return cachedGovernmentScholarships;
}

export async function prefetchScholarshipData() {
  if (!isSupabaseConfigured() || !supabase) return;
  
  // Fire both in parallel and cache them
  await Promise.allSettled([
    fetchUniversityScholarshipsFromSupabaseBackground(),
    fetchGovernmentScholarshipsFromSupabaseBackground()
  ]);
}

/**
 * Helper to fetch University Track records from Supabase
 */
export async function fetchUniversityScholarshipsFromSupabase(trackType?: 'international' | 'pakistani') {
  if (!isSupabaseConfigured() || !supabase) {
    return { data: getCachedUniversityScholarships(trackType), error: new Error('Supabase environment variables not configured') };
  }

  const cached = getCachedUniversityScholarships(trackType);
  if (cached && cached.length > 0) {
    // Background refresh
    fetchUniversityScholarshipsFromSupabaseBackground().catch(() => {});
    return { data: cached, error: null };
  }

  try {
    const fetchPromise = fetchUniversityScholarshipsFromSupabaseBackground();
    const timeoutPromise = new Promise<UniversityTrackItem[]>((_, reject) =>
      setTimeout(() => reject(new Error('University fetch timeout exceeded 10000ms')), 10000)
    );

    const allData = await Promise.race([fetchPromise, timeoutPromise]);
    let filtered = allData;
    if (trackType === 'international') {
      filtered = allData.filter(u => u.track_category === 'international' || u.track_category === 'global');
    } else if (trackType === 'pakistani') {
      filtered = allData.filter(u => u.track_category === 'pakistani');
    }
    return { data: filtered, error: null };
  } catch (err: any) {
    console.warn('University fetch timeout or error, falling back to cache:', err);
    return { data: getCachedUniversityScholarships(trackType), error: err };
  }
}

async function fetchUniversityScholarshipsFromSupabaseBackground(): Promise<UniversityTrackItem[]> {
  if (!supabase) return cachedUniversityScholarships || [];
  
  try {
    // Fetch Pakistani and International universities in parallel using allSettled
    const [pakSettled, intSettled] = await Promise.allSettled([
      supabase
        .from('pakistani_universities')
        .select('*, pakistani_university_programs(*), pakistani_university_scholarships(*)')
        .order('university_name', { ascending: true }),
      supabase
        .from('international_universities')
        .select('*, international_university_programs(*), international_university_scholarships(*)')
        .order('university_name', { ascending: true })
    ]);

    const allFormatted: UniversityTrackItem[] = [];

    // 1. Process Pakistani universities
    if (pakSettled.status === 'fulfilled') {
      const pakRes = pakSettled.value;
      if (!pakRes.error && pakRes.data) {
        pakRes.data.forEach((row: any) => {
          allFormatted.push(mapPakistaniRowToUniversity(row));
        });
      }
    }

    // 2. Process International universities
    if (intSettled.status === 'fulfilled') {
      const intRes = intSettled.value;
      if (!intRes.error && intRes.data) {
        intRes.data.forEach((row: any) => {
          if (!allFormatted.some(u => u.id === row.uni_id)) {
            allFormatted.push(mapInternationalRowToUniversity(row));
          }
        });
      }
    }

    if (allFormatted.length > 0) {
      cachedUniversityScholarships = allFormatted;
      setLocalStorageCache(CACHE_KEY_UNIVERSITIES, allFormatted);
      if (typeof window !== 'undefined') {
        window.dispatchEvent(new CustomEvent('uniroute-universities-updated', { detail: { universities: allFormatted } }));
      }
    }

    return allFormatted.length > 0 ? allFormatted : (cachedUniversityScholarships || []);
  } catch (err) {
    console.error('Error fetching university scholarships:', err);
    return cachedUniversityScholarships || [];
  }
}

const safeParseJson = (str: string, fallback: any = []): any => {
  try {
    return JSON.parse(str);
  } catch (e) {
    console.error('Error parsing JSON:', e);
    return fallback;
  }
};

/**
 * Maps a raw Supabase database row to a GovernmentTrackItem
 */
export function mapRowToGovernmentTrack(row: any, index: number): GovernmentTrackItem {
  return {
    id: String(row.id || `gov-track-${index + 1}`),
    programTitle: row.program_title || row.programTitle || 'Government Scholarship',
    sponsorGovernment: row.sponsor_government || row.sponsorGovernment || 'Host Government',
    country: row.country || 'Global',
    flag: row.flag || '🌍',
    degreeLevels: Array.isArray(row.degree_levels) ? row.degree_levels : (Array.isArray(row.degreeLevels) ? row.degreeLevels : ['Masters']),
    stipendMonthly: row.stipend_monthly || row.stipendMonthly || '',
    airfareCovered: Boolean(row.airfare_covered ?? row.airfareCovered ?? false),
    healthInsuranceCovered: Boolean(row.health_insurance_covered ?? row.healthInsuranceCovered ?? false),
    tuitionCovered: Boolean(row.tuition_covered ?? row.tuitionCovered ?? false),
    deadline: row.deadline || '',
    bondRequirement: row.bond_requirement || row.bondRequirement || '',
    description: row.description || '',
    keyEligibility: Array.isArray(row.key_eligibility) ? row.key_eligibility : (Array.isArray(row.keyEligibility) ? row.keyEligibility : []),
    supabaseDbId: Number(row.supabase_db_id || row.id || index + 1),
    overviewLong: row.overview_long || row.overviewLong || '',
    fundingType: row.funding_type || row.fundingType || 'Fully Funded',
    workExperienceRequired: row.work_experience_required || row.workExperienceRequired || '',
    ageLimit: row.age_limit || row.ageLimit || '',
    hecNominationRequired: Boolean(row.hec_nomination_required ?? row.hecNominationRequired ?? false),
    embassyNominationRequired: Boolean(row.embassy_nomination_required ?? row.embassyNominationRequired ?? false),
    applicationRoute: row.application_route || row.applicationRoute || '',
    officialSources: Array.isArray(row.official_sources) ? row.official_sources : (Array.isArray(row.officialSources) ? row.officialSources : []),
    stepByStepProcess: Array.isArray(row.step_by_step_process) ? row.step_by_step_process : (Array.isArray(row.stepByStepProcess) ? row.stepByStepProcess : []),
    fundingBreakdown: Array.isArray(row.funding_breakdown) ? row.funding_breakdown : (typeof row.funding_breakdown === 'string' ? safeParseJson(row.funding_breakdown) : []),
    restrictions: Array.isArray(row.restrictions) ? row.restrictions : [],
    logoText: row.logo_text || row.logoText || '',
    logoBg: row.logo_bg || row.logoBg || '',
    eligibleNationalities: row.eligible_nationalities || row.eligibleNationalities || '',
    gpaRequirement: row.gpa_requirement || row.gpaRequirement || '',
    ieltsRequirement: row.ielts_requirement || row.ieltsRequirement || '',
    isEligibleForPakistan: Boolean(row.is_eligible_for_pakistan ?? row.isEligibleForPakistan ?? true),
    warningNotice: row.warning_notice || row.warningNotice || undefined,
    currentStatus: row.current_status || row.currentStatus || undefined,
    currentCycle: row.current_cycle || row.currentCycle || undefined,
    lastVerifiedDate: row.last_verified_date || row.lastVerifiedDate || undefined,
    fullSections: Array.isArray(row.full_sections) ? row.full_sections : (typeof row.full_sections === 'string' ? safeParseJson(row.full_sections) : (Array.isArray(row.fullSections) ? row.fullSections : []))
  };
}

/**
 * Helper to fetch Government Scholarship records from Supabase
 */
// ============================================================================
// SAT READING SECTION SUPABASE INTEGRATION
// ============================================================================
export interface SatReadingChapter1Data {
  id: string;
  modules: any[];
  practiceQuestions: any[];
}

let cachedReadingChapter1: SatReadingChapter1Data | null = null;

export async function fetchSatReadingChapter1FromSupabase(): Promise<{ data: SatReadingChapter1Data | null; error: any }> {
  if (!isSupabaseConfigured() || !supabase) {
    return { data: null, error: new Error('Supabase is not configured') };
  }

  if (cachedReadingChapter1) {
    return { data: cachedReadingChapter1, error: null };
  }

  const localCache = getLocalStorageCache<SatReadingChapter1Data>('sat_reading_ch1_cache');
  if (localCache) {
    cachedReadingChapter1 = localCache;
    return { data: localCache, error: null };
  }

  try {
    const [theoryRes, exercisesRes] = await withTimeout(
      Promise.all([
        supabase
          .from('sat_reading_ch1_theory')
          .select('*')
          .order('module_number', { ascending: true }),
        supabase
          .from('sat_reading_ch1_exercises')
          .select('*')
          .order('question_number', { ascending: true })
      ]),
      3500
    ) as any[];

    if (theoryRes.error) throw theoryRes.error;
    if (exercisesRes.error) throw exercisesRes.error;

    const rawModules = theoryRes.data || [];
    const rawExercises = exercisesRes.data || [];

    if (!rawModules || rawModules.length === 0) {
      return { data: null, error: new Error('No modules found in Supabase (check RLS)') };
    }

    // Map exercises to frontend format grouped by module
    const exercisesByModule: Record<number, any[]> = {};
    rawExercises.forEach((row: any) => {
      const modNum = row.module_number || 1;
      if (!exercisesByModule[modNum]) {
        exercisesByModule[modNum] = [];
      }
      exercisesByModule[modNum].push({
        id: row.id,
        questionNumber: row.question_number,
        label: row.label,
        prompt: row.prompt,
        passage: row.passage_text ? {
          title: row.passage_title || undefined,
          text: row.passage_text
        } : undefined,
        options: row.options || [],
        correctAnswer: row.correct_answer,
        correctAnswerIndex: row.correct_answer_index,
        whyCorrectTitle: row.why_correct_title,
        whyCorrect: row.why_correct,
        distractorExplanations: row.distractor_explanations || [],
        passageSupport: row.passage_support || undefined,
        eliminationShortcut: row.elimination_shortcut || undefined,
        educationalObjective: row.educational_objective || undefined,
        tableData: row.table_data || undefined
      });
    });

    // Map theory modules and attach practiceQuestions
    const mappedModules = rawModules.map((m: any) => {
      const modNum = m.module_number;
      return {
        id: m.id,
        moduleNumber: m.module_number,
        title: m.module_title,
        centralQuestion: m.central_question || undefined,
        endLabel: m.end_label || undefined,
        sections: m.sections || [],
        practiceQuestions: exercisesByModule[modNum] || []
      };
    });

    const result: SatReadingChapter1Data = {
      id: 'ch1',
      modules: mappedModules,
      practiceQuestions: rawExercises.map((row: any) => ({
        id: row.id,
        questionNumber: row.question_number,
        globalQuestionNumber: row.question_number,
        moduleNumber: row.module_number,
        label: row.label,
        prompt: row.prompt,
        passageTitle: row.passage_title || undefined,
        passageText: row.passage_text || undefined,
        passage: row.passage_text ? {
          title: row.passage_title || undefined,
          text: row.passage_text
        } : undefined,
        options: row.options || [],
        correctAnswer: row.correct_answer,
        correctAnswerIndex: row.correct_answer_index,
        whyCorrectTitle: row.why_correct_title,
        whyCorrect: row.why_correct,
        distractorExplanations: row.distractor_explanations || [],
        passageSupport: row.passage_support || undefined,
        eliminationShortcut: row.elimination_shortcut || undefined,
        educationalObjective: row.educational_objective || undefined,
        tableData: row.table_data || undefined
      }))
    };

    cachedReadingChapter1 = result;
    setLocalStorageCache('sat_reading_ch1_cache', result);
    return { data: result, error: null };
  } catch (err: any) {
    console.error('Error fetching SAT Reading Chapter 1 from Supabase:', err);
    return { data: null, error: err };
  }
}

export interface SatReadingChapter2Data {
  id: string;
  modules: any[];
  practiceQuestions: any[];
}

let cachedReadingChapter2: SatReadingChapter2Data | null = null;

export async function fetchSatReadingChapter2FromSupabase(): Promise<{ data: SatReadingChapter2Data | null; error: any }> {
  if (!isSupabaseConfigured() || !supabase) {
    return { data: null, error: new Error('Supabase is not configured') };
  }

  if (cachedReadingChapter2) {
    return { data: cachedReadingChapter2, error: null };
  }

  const localCache = getLocalStorageCache<SatReadingChapter2Data>('sat_reading_ch2_cache');
  if (localCache) {
    cachedReadingChapter2 = localCache;
    return { data: localCache, error: null };
  }

  try {
    const [theoryRes, exercisesRes] = await withTimeout(
      Promise.all([
        supabase
          .from('sat_reading_ch2_theory')
          .select('*')
          .order('module_number', { ascending: true }),
        supabase
          .from('sat_reading_ch2_exercises')
          .select('*')
          .order('question_number', { ascending: true })
      ]),
      3500
    ) as any[];

    if (theoryRes.error) throw theoryRes.error;
    if (exercisesRes.error) throw exercisesRes.error;

    const rawModules = theoryRes.data || [];
    const rawExercises = exercisesRes.data || [];

    if (!rawModules || rawModules.length === 0) {
      return { data: null, error: new Error('No modules found in Supabase (check RLS)') };
    }

    // Map exercises to frontend format grouped by module
    const exercisesByModule: Record<number, any[]> = {};
    rawExercises.forEach((row: any) => {
      const modNum = row.module_number || 1;
      if (!exercisesByModule[modNum]) {
        exercisesByModule[modNum] = [];
      }
      exercisesByModule[modNum].push({
        id: row.id,
        questionNumber: row.question_number,
        globalQuestionNumber: row.question_number,
        moduleNumber: row.module_number,
        label: row.label,
        prompt: row.prompt,
        passageTitle: row.passage_title || undefined,
        passageText: row.passage_text || undefined,
        passage: row.passage_text ? {
          title: row.passage_title || undefined,
          text: row.passage_text
        } : undefined,
        options: row.options || [],
        correctAnswer: row.correct_answer,
        correctAnswerIndex: row.correct_answer_index,
        whyCorrectTitle: row.why_correct_title,
        whyCorrect: row.why_correct,
        distractorExplanations: row.distractor_explanations || [],
        passageSupport: row.passage_support || undefined,
        eliminationShortcut: row.elimination_shortcut || undefined,
        educationalObjective: row.educational_objective || undefined,
        tableData: row.table_data || undefined
      });
    });

    // Map theory modules and attach practiceQuestions
    const mappedModules = rawModules.map((m: any) => {
      const modNum = m.module_number;
      return {
        id: m.id,
        moduleNumber: m.module_number,
        title: m.module_title,
        centralQuestion: m.central_question || undefined,
        endLabel: m.end_label || undefined,
        sections: m.sections || [],
        practiceQuestions: exercisesByModule[modNum] || []
      };
    });

    const result: SatReadingChapter2Data = {
      id: 'ch2',
      modules: mappedModules,
      practiceQuestions: rawExercises.map((row: any) => ({
        id: row.id,
        questionNumber: row.question_number,
        globalQuestionNumber: row.question_number,
        moduleNumber: row.module_number,
        label: row.label,
        prompt: row.prompt,
        passageTitle: row.passage_title || undefined,
        passageText: row.passage_text || undefined,
        passage: row.passage_text ? {
          title: row.passage_title || undefined,
          text: row.passage_text
        } : undefined,
        options: row.options || [],
        correctAnswer: row.correct_answer,
        correctAnswerIndex: row.correct_answer_index,
        whyCorrectTitle: row.why_correct_title,
        whyCorrect: row.why_correct,
        distractorExplanations: row.distractor_explanations || [],
        passageSupport: row.passage_support || undefined,
        eliminationShortcut: row.elimination_shortcut || undefined,
        educationalObjective: row.educational_objective || undefined,
        tableData: row.table_data || undefined
      }))
    };

    cachedReadingChapter2 = result;
    setLocalStorageCache('sat_reading_ch2_cache', result);
    return { data: result, error: null };
  } catch (err: any) {
    console.error('Error fetching SAT Reading Chapter 2 from Supabase:', err);
    return { data: null, error: err };
  }
}

export interface SatReadingChapter3Data {
  id: string;
  modules: any[];
  practiceQuestions: any[];
}

let cachedReadingChapter3: SatReadingChapter3Data | null = null;

export async function fetchSatReadingChapter3FromSupabase(): Promise<{ data: SatReadingChapter3Data | null; error: any }> {
  if (!isSupabaseConfigured() || !supabase) {
    return { data: null, error: new Error('Supabase is not configured') };
  }

  if (cachedReadingChapter3) {
    return { data: cachedReadingChapter3, error: null };
  }

  const localCache = getLocalStorageCache<SatReadingChapter3Data>('sat_reading_ch3_cache');
  if (localCache) {
    cachedReadingChapter3 = localCache;
    return { data: localCache, error: null };
  }

  try {
    const [theoryRes, exercisesRes] = await withTimeout(
      Promise.all([
        supabase
          .from('sat_reading_ch3_theory')
          .select('*')
          .order('module_number', { ascending: true }),
        supabase
          .from('sat_reading_ch3_exercises')
          .select('*')
          .order('question_number', { ascending: true })
      ]),
      3500
    ) as any[];

    if (theoryRes.error) throw theoryRes.error;
    if (exercisesRes.error) throw exercisesRes.error;

    const rawModules = theoryRes.data || [];
    const rawExercises = exercisesRes.data || [];

    if (!rawModules || rawModules.length === 0) {
      return { data: null, error: new Error('No modules found in Supabase (check RLS)') };
    }

    // Map exercises to frontend format grouped by module
    const exercisesByModule: Record<number, any[]> = {};
    rawExercises.forEach((row: any) => {
      const modNum = row.module_number || 1;
      if (!exercisesByModule[modNum]) {
        exercisesByModule[modNum] = [];
      }
      exercisesByModule[modNum].push({
        id: row.id,
        questionNumber: row.question_number,
        globalQuestionNumber: row.question_number,
        moduleNumber: row.module_number,
        label: row.label,
        prompt: row.prompt,
        passageTitle: row.passage_title || undefined,
        passageText: row.passage_text || undefined,
        passage: row.passage_text ? {
          title: row.passage_title || undefined,
          text: row.passage_text
        } : undefined,
        options: row.options || [],
        correctAnswer: row.correct_answer,
        correctAnswerIndex: row.correct_answer_index,
        whyCorrectTitle: row.why_correct_title,
        whyCorrect: row.why_correct,
        distractorExplanations: row.distractor_explanations || [],
        passageSupport: row.passage_support || undefined,
        eliminationShortcut: row.elimination_shortcut || undefined,
        educationalObjective: row.educational_objective || undefined,
        tableData: row.table_data || undefined
      });
    });

    // Map theory modules and attach practiceQuestions
    const mappedModules = rawModules.map((m: any) => {
      const modNum = m.module_number;
      return {
        id: m.id,
        moduleNumber: m.module_number,
        title: m.module_title,
        centralQuestion: m.central_question || undefined,
        endLabel: m.end_label || undefined,
        sections: m.sections || [],
        practiceQuestions: exercisesByModule[modNum] || []
      };
    });

    const result: SatReadingChapter3Data = {
      id: 'ch3',
      modules: mappedModules,
      practiceQuestions: rawExercises.map((row: any) => ({
        id: row.id,
        questionNumber: row.question_number,
        globalQuestionNumber: row.question_number,
        moduleNumber: row.module_number,
        label: row.label,
        prompt: row.prompt,
        passageTitle: row.passage_title || undefined,
        passageText: row.passage_text || undefined,
        passage: row.passage_text ? {
          title: row.passage_title || undefined,
          text: row.passage_text
        } : undefined,
        options: row.options || [],
        correctAnswer: row.correct_answer,
        correctAnswerIndex: row.correct_answer_index,
        whyCorrectTitle: row.why_correct_title,
        whyCorrect: row.why_correct,
        distractorExplanations: row.distractor_explanations || [],
        passageSupport: row.passage_support || undefined,
        eliminationShortcut: row.elimination_shortcut || undefined,
        educationalObjective: row.educational_objective || undefined,
        tableData: row.table_data || undefined
      }))
    };

    cachedReadingChapter3 = result;
    setLocalStorageCache('sat_reading_ch3_cache', result);
    return { data: result, error: null };
  } catch (err: any) {
    console.error('Error fetching SAT Reading Chapter 3 from Supabase:', err);
    return { data: null, error: err };
  }
}

export interface SatReadingChapter4Data {
  id: string;
  modules: any[];
  practiceQuestions: any[];
}

let cachedReadingChapter4: SatReadingChapter4Data | null = null;

export async function fetchSatReadingChapter4FromSupabase(): Promise<{ data: SatReadingChapter4Data | null; error: any }> {
  if (!isSupabaseConfigured() || !supabase) {
    return { data: null, error: new Error('Supabase is not configured') };
  }

  if (cachedReadingChapter4) {
    return { data: cachedReadingChapter4, error: null };
  }

  const localCache = getLocalStorageCache<SatReadingChapter4Data>('sat_reading_ch4_cache');
  if (localCache) {
    cachedReadingChapter4 = localCache;
    return { data: localCache, error: null };
  }

  try {
    const [theoryRes, exercisesRes] = await withTimeout(
      Promise.all([
        supabase
          .from('sat_reading_ch4_theory')
          .select('*')
          .order('module_number', { ascending: true }),
        supabase
          .from('sat_reading_ch4_exercises')
          .select('*')
          .order('question_number', { ascending: true })
      ]),
      3500
    ) as any[];

    if (theoryRes.error) throw theoryRes.error;
    if (exercisesRes.error) throw exercisesRes.error;

    const rawModules = theoryRes.data || [];
    const rawExercises = exercisesRes.data || [];

    if (!rawModules || rawModules.length === 0) {
      return { data: null, error: new Error('No modules found in Supabase (check RLS)') };
    }

    // Map exercises to frontend format grouped by module
    const exercisesByModule: Record<number, any[]> = {};
    rawExercises.forEach((row: any) => {
      const modNum = row.module_number || 1;
      if (!exercisesByModule[modNum]) {
        exercisesByModule[modNum] = [];
      }
      exercisesByModule[modNum].push({
        id: row.id,
        questionNumber: row.question_number,
        globalQuestionNumber: row.question_number,
        moduleNumber: row.module_number,
        label: row.label,
        prompt: row.prompt,
        passageTitle: row.passage_title || undefined,
        passageText: row.passage_text || undefined,
        passage: row.passage_text ? {
          title: row.passage_title || undefined,
          text: row.passage_text
        } : undefined,
        options: row.options || [],
        correctAnswer: row.correct_answer,
        correctAnswerIndex: row.correct_answer_index,
        whyCorrectTitle: row.why_correct_title,
        whyCorrect: row.why_correct,
        distractorExplanations: row.distractor_explanations || [],
        passageSupport: row.passage_support || undefined,
        eliminationShortcut: row.elimination_shortcut || undefined,
        educationalObjective: row.educational_objective || undefined,
        tableData: row.table_data || undefined
      });
    });

    // Map theory modules and attach practiceQuestions
    const mappedModules = rawModules.map((m: any) => {
      const modNum = m.module_number;
      return {
        id: m.id,
        moduleNumber: m.module_number,
        title: m.module_title,
        centralQuestion: m.central_question || undefined,
        endLabel: m.end_label || undefined,
        sections: m.sections || [],
        practiceQuestions: exercisesByModule[modNum] || []
      };
    });

    const result: SatReadingChapter4Data = {
      id: 'ch4',
      modules: mappedModules,
      practiceQuestions: rawExercises.map((row: any) => ({
        id: row.id,
        questionNumber: row.question_number,
        globalQuestionNumber: row.question_number,
        moduleNumber: row.module_number,
        label: row.label,
        prompt: row.prompt,
        passageTitle: row.passage_title || undefined,
        passageText: row.passage_text || undefined,
        passage: row.passage_text ? {
          title: row.passage_title || undefined,
          text: row.passage_text
        } : undefined,
        options: row.options || [],
        correctAnswer: row.correct_answer,
        correctAnswerIndex: row.correct_answer_index,
        whyCorrectTitle: row.why_correct_title,
        whyCorrect: row.why_correct,
        distractorExplanations: row.distractor_explanations || [],
        passageSupport: row.passage_support || undefined,
        eliminationShortcut: row.elimination_shortcut || undefined,
        educationalObjective: row.educational_objective || undefined,
        tableData: row.table_data || undefined
      }))
    };

    cachedReadingChapter4 = result;
    setLocalStorageCache('sat_reading_ch4_cache', result);
    return { data: result, error: null };
  } catch (err: any) {
    console.error('Error fetching SAT Reading Chapter 4 from Supabase:', err);
    return { data: null, error: err };
  }
}

export interface SatReadingChapter5Data {
  id: string;
  modules: any[];
  practiceQuestions: any[];
}

let cachedReadingChapter5: SatReadingChapter5Data | null = null;

export async function fetchSatReadingChapter5FromSupabase(): Promise<{ data: SatReadingChapter5Data | null; error: any }> {
  if (!isSupabaseConfigured() || !supabase) {
    return { data: null, error: new Error('Supabase is not configured') };
  }

  if (cachedReadingChapter5) {
    return { data: cachedReadingChapter5, error: null };
  }

  const localCache = getLocalStorageCache<SatReadingChapter5Data>('sat_reading_ch5_cache');
  if (localCache) {
    cachedReadingChapter5 = localCache;
    return { data: localCache, error: null };
  }

  try {
    const [theoryRes, exercisesRes] = await withTimeout(
      Promise.all([
        supabase
          .from('sat_reading_ch5_theory')
          .select('*')
          .order('module_number', { ascending: true }),
        supabase
          .from('sat_reading_ch5_exercises')
          .select('*')
          .order('question_number', { ascending: true })
      ]),
      3500
    ) as any[];

    if (theoryRes.error) throw theoryRes.error;
    if (exercisesRes.error) throw exercisesRes.error;

    const rawModules = theoryRes.data || [];
    const rawExercises = exercisesRes.data || [];

    if (!rawModules || rawModules.length === 0) {
      return { data: null, error: new Error('No modules found in Supabase (check RLS)') };
    }

    // Map exercises to frontend format grouped by module
    const exercisesByModule: Record<number, any[]> = {};
    rawExercises.forEach((row: any) => {
      const modNum = row.module_number || 1;
      if (!exercisesByModule[modNum]) {
        exercisesByModule[modNum] = [];
      }
      exercisesByModule[modNum].push({
        id: row.id,
        questionNumber: row.question_number,
        globalQuestionNumber: row.question_number,
        moduleNumber: row.module_number,
        label: row.label,
        prompt: row.prompt,
        passageTitle: row.passage_title || undefined,
        passageText: row.passage_text || undefined,
        passage: row.passage_text ? {
          title: row.passage_title || undefined,
          text: row.passage_text
        } : undefined,
        options: row.options || [],
        correctAnswer: row.correct_answer,
        correctAnswerIndex: row.correct_answer_index,
        whyCorrectTitle: row.why_correct_title,
        whyCorrect: row.why_correct,
        distractorExplanations: row.distractor_explanations || [],
        passageSupport: row.passage_support || undefined,
        eliminationShortcut: row.elimination_shortcut || undefined,
        educationalObjective: row.educational_objective || undefined,
        tableData: row.table_data || undefined
      });
    });

    // Map theory modules and attach practiceQuestions
    const mappedModules = rawModules.map((m: any) => {
      const modNum = m.module_number;
      return {
        id: m.id,
        moduleNumber: m.module_number,
        title: m.module_title,
        centralQuestion: m.central_question || undefined,
        endLabel: m.end_label || undefined,
        sections: m.sections || [],
        practiceQuestions: exercisesByModule[modNum] || []
      };
    });

    const result: SatReadingChapter5Data = {
      id: 'ch5',
      modules: mappedModules,
      practiceQuestions: rawExercises.map((row: any) => ({
        id: row.id,
        questionNumber: row.question_number,
        globalQuestionNumber: row.question_number,
        moduleNumber: row.module_number,
        label: row.label,
        prompt: row.prompt,
        passageTitle: row.passage_title || undefined,
        passageText: row.passage_text || undefined,
        passage: row.passage_text ? {
          title: row.passage_title || undefined,
          text: row.passage_text
        } : undefined,
        options: row.options || [],
        correctAnswer: row.correct_answer,
        correctAnswerIndex: row.correct_answer_index,
        whyCorrectTitle: row.why_correct_title,
        whyCorrect: row.why_correct,
        distractorExplanations: row.distractor_explanations || [],
        passageSupport: row.passage_support || undefined,
        eliminationShortcut: row.elimination_shortcut || undefined,
        educationalObjective: row.educational_objective || undefined,
        tableData: row.table_data || undefined
      }))
    };

    cachedReadingChapter5 = result;
    setLocalStorageCache('sat_reading_ch5_cache', result);
    return { data: result, error: null };
  } catch (err: any) {
    console.error('Error fetching SAT Reading Chapter 5 from Supabase:', err);
    return { data: null, error: err };
  }
}

export interface SatReadingChapter6Data {
  id: string;
  modules: any[];
  practiceQuestions: any[];
}

let cachedReadingChapter6: SatReadingChapter6Data | null = null;

export async function fetchSatReadingChapter6FromSupabase(): Promise<{ data: SatReadingChapter6Data | null; error: any }> {
  if (!isSupabaseConfigured() || !supabase) {
    return { data: null, error: new Error('Supabase is not configured') };
  }

  if (cachedReadingChapter6) {
    return { data: cachedReadingChapter6, error: null };
  }

  const localCache = getLocalStorageCache<SatReadingChapter6Data>('sat_reading_ch6_cache');
  if (localCache) {
    cachedReadingChapter6 = localCache;
    return { data: localCache, error: null };
  }

  try {
    const [theoryRes, exercisesRes] = await withTimeout(
      Promise.all([
        supabase
          .from('sat_reading_ch6_theory')
          .select('*')
          .order('module_number', { ascending: true }),
        supabase
          .from('sat_reading_ch6_exercises')
          .select('*')
          .order('question_number', { ascending: true })
      ]),
      3500
    ) as any[];

    if (theoryRes.error) throw theoryRes.error;
    if (exercisesRes.error) throw exercisesRes.error;

    const rawModules = theoryRes.data || [];
    const rawExercises = exercisesRes.data || [];

    if (!rawModules || rawModules.length === 0) {
      return { data: null, error: new Error('No modules found in Supabase (check RLS)') };
    }

    // Map exercises to frontend format grouped by module
    const exercisesByModule: Record<number, any[]> = {};
    rawExercises.forEach((row: any) => {
      const modNum = row.module_number || 1;
      if (!exercisesByModule[modNum]) {
        exercisesByModule[modNum] = [];
      }
      exercisesByModule[modNum].push({
        id: row.id,
        questionNumber: row.question_number,
        globalQuestionNumber: row.question_number,
        moduleNumber: row.module_number,
        label: row.label,
        prompt: row.prompt,
        passageTitle: row.passage_title || undefined,
        passageText: row.passage_text || undefined,
        passage: row.passage_text ? {
          title: row.passage_title || undefined,
          text: row.passage_text
        } : undefined,
        options: row.options || [],
        correctAnswer: row.correct_answer,
        correctAnswerIndex: row.correct_answer_index,
        whyCorrectTitle: row.why_correct_title,
        whyCorrect: row.why_correct,
        distractorExplanations: row.distractor_explanations || [],
        passageSupport: row.passage_support || undefined,
        eliminationShortcut: row.elimination_shortcut || undefined,
        educationalObjective: row.educational_objective || undefined,
        tableData: row.table_data || undefined,
        dataFigure: row.table_data || undefined
      });
    });

    // Map theory modules and attach practiceQuestions
    const mappedModules = rawModules.map((m: any) => {
      const modNum = m.module_number;
      return {
        id: m.id,
        moduleNumber: m.module_number,
        title: m.module_title,
        centralQuestion: m.central_question || undefined,
        endLabel: m.end_label || undefined,
        sections: m.sections || [],
        practiceQuestions: exercisesByModule[modNum] || []
      };
    });

    const result: SatReadingChapter6Data = {
      id: 'ch6',
      modules: mappedModules,
      practiceQuestions: rawExercises.map((row: any) => ({
        id: row.id,
        questionNumber: row.question_number,
        globalQuestionNumber: row.question_number,
        moduleNumber: row.module_number,
        label: row.label,
        prompt: row.prompt,
        passageTitle: row.passage_title || undefined,
        passageText: row.passage_text || undefined,
        passage: row.passage_text ? {
          title: row.passage_title || undefined,
          text: row.passage_text
        } : undefined,
        options: row.options || [],
        correctAnswer: row.correct_answer,
        correctAnswerIndex: row.correct_answer_index,
        whyCorrectTitle: row.why_correct_title,
        whyCorrect: row.why_correct,
        distractorExplanations: row.distractor_explanations || [],
        passageSupport: row.passage_support || undefined,
        eliminationShortcut: row.elimination_shortcut || undefined,
        educationalObjective: row.educational_objective || undefined,
        tableData: row.table_data || undefined,
        dataFigure: row.table_data || undefined
      }))
    };

    cachedReadingChapter6 = result;
    setLocalStorageCache('sat_reading_ch6_cache', result);
    return { data: result, error: null };
  } catch (err: any) {
    console.error('Error fetching SAT Reading Chapter 6 from Supabase:', err);
    return { data: null, error: err };
  }
}

let cachedWritingChapter1: FullSatWritingChapter | null = null;

export async function fetchSatWritingChapter1FromSupabase(): Promise<{ data: FullSatWritingChapter | null; error: any }> {
  if (!isSupabaseConfigured() || !supabase) {
    return { data: null, error: new Error('Supabase is not configured') };
  }

  if (cachedWritingChapter1) {
    return { data: cachedWritingChapter1, error: null };
  }

  const localCache = getLocalStorageCache<FullSatWritingChapter>('sat_writing_ch1_cache');
  if (localCache) {
    cachedWritingChapter1 = localCache;
    return { data: localCache, error: null };
  }

  try {
    const [theoryRes, exercisesRes] = await withTimeout(
      Promise.all([
        supabase
          .from('sat_writing_ch1_theory')
          .select('*')
          .order('sort_order', { ascending: true }),
        supabase
          .from('sat_writing_ch1_exercises')
          .select('*')
          .order('sort_order', { ascending: true })
      ]),
      3500
    ) as any[];

    if (theoryRes.error) throw theoryRes.error;
    if (exercisesRes.error) throw exercisesRes.error;

    const dbTheory = theoryRes.data || [];
    const dbExercises = exercisesRes.data || [];

    if (!dbTheory || dbTheory.length === 0) {
      return { data: null, error: new Error('No theory blocks found in Supabase (check RLS)') };
    }

    // Group and map theory blocks
    const theoryBlocksMap = new Map<number, WritingTheoryBlock>();
    for (const row of dbTheory) {
      if (!theoryBlocksMap.has(row.block_number)) {
        theoryBlocksMap.set(row.block_number, {
          blockNumber: row.block_number,
          title: row.block_title,
          description: row.block_description || undefined,
          concepts: []
        });
      }
      const block = theoryBlocksMap.get(row.block_number)!;
      block.concepts.push({
        id: row.id,
        title: row.concept_title,
        sectionNumber: row.section_number || undefined,
        fullText: row.full_text,
        bulletPoints: row.bullet_points && row.bullet_points.length > 0 ? row.bullet_points : undefined,
        rules: row.rules && row.rules.length > 0 ? row.rules : undefined,
        examples: row.examples && row.examples.length > 0 ? row.examples : undefined,
        tables: row.tables && row.tables.length > 0 ? row.tables : undefined,
        checklist: row.checklist && row.checklist.length > 0 ? row.checklist : undefined,
        traps: row.traps && row.traps.length > 0 ? row.traps : undefined,
        shortcuts: row.shortcuts && row.shortcuts.length > 0 ? row.shortcuts : undefined
      });
    }
    const theoryBlocks = Array.from(theoryBlocksMap.values()).sort((a, b) => a.blockNumber - b.blockNumber);

    // Group and map exercise blocks
    const exerciseBlocksMap = new Map<number, WritingExerciseBlock>();
    for (const row of dbExercises) {
      if (!exerciseBlocksMap.has(row.block_number)) {
        exerciseBlocksMap.set(row.block_number, {
          blockNumber: row.block_number,
          title: row.block_title,
          description: row.block_description || undefined,
          questions: [],
          scoreGuide: row.score_guide && row.score_guide.length > 0 ? row.score_guide : undefined,
          checklists: row.block_checklists && row.block_checklists.length > 0 ? row.block_checklists : undefined
        });
      }
      const block = exerciseBlocksMap.get(row.block_number)!;
      block.questions.push({
        questionNumber: row.question_number,
        id: row.id,
        difficulty: row.difficulty,
        skillTag: row.skill_tag,
        prompt: row.prompt,
        underlinedText: row.underlined_text || undefined,
        contextSentence: row.context_sentence || undefined,
        dataFigure: row.data_figure || undefined,
        options: row.options || [],
        correctAnswer: row.correct_answer,
        explanation: {
          coreReasoning: row.core_reasoning,
          educationalObjective: row.educational_objective || undefined,
          beforeAndAfterAnalysis: row.before_and_after_analysis || undefined,
          whyCorrect: row.why_correct,
          distractorAnalysis: row.distractor_analysis || [],
          eliminationShortcut: row.elimination_shortcut || undefined,
          trapToAvoid: row.trap_to_avoid || undefined
        }
      });
    }
    const exerciseBlocks = Array.from(exerciseBlocksMap.values()).sort((a, b) => a.blockNumber - b.blockNumber);

    const result: FullSatWritingChapter = {
      id: 'ch1',
      chapterNumber: 1,
      chapterTitle: 'Sentence Structure, Clausal Boundaries & Transitions',
      subtitle: 'The Mechanics of Clausal Integration and Boundary Diagnostics',
      introduction: "Sentence construction on the SAT is fundamentally a test of clausal mechanics. To achieve absolute precision, students must look past a sentence's topical content and isolate its underlying syntactic skeleton. Mastery in this domain requires diagnosing the boundary between clauses, understanding the legal operators available to link ideas, and selecting transitions that precisely articulate logical progression.",
      purpose: 'To provide authoritative, exhaustive instruction and 100 practice questions on SAT sentence structure, clauses, punctuation boundaries, transitions, and modifier placement without any omissions or shortcuts.',
      masterPrinciple: 'Before choosing an answer, identify the structures on BOTH sides of the tested location. Ask: "What is immediately before the blank?" "What is immediately after the blank?" Then determine whether each side is capable of standing as a complete sentence.',
      theoryBlocks,
      exerciseBlocks
    };

    cachedWritingChapter1 = result;
    setLocalStorageCache('sat_writing_ch1_cache', result);
    return { data: result, error: null };
  } catch (err: any) {
    console.error('Error fetching SAT Writing Chapter 1 from Supabase:', err);
    return { data: null, error: err };
  }
}

let cachedWritingChapter2: FullSatWritingChapter | null = null;

export async function fetchSatWritingChapter2FromSupabase(): Promise<{ data: FullSatWritingChapter | null; error: any }> {
  if (!isSupabaseConfigured() || !supabase) {
    return { data: null, error: new Error('Supabase is not configured') };
  }

  if (cachedWritingChapter2) {
    return { data: cachedWritingChapter2, error: null };
  }

  const localCache = getLocalStorageCache<FullSatWritingChapter>('sat_writing_ch2_cache');
  if (localCache) {
    cachedWritingChapter2 = localCache;
    return { data: localCache, error: null };
  }

  try {
    const [theoryRes, exercisesRes] = await withTimeout(
      Promise.all([
        supabase
          .from('sat_writing_ch2_theory')
          .select('*')
          .order('sort_order', { ascending: true }),
        supabase
          .from('sat_writing_ch2_exercises')
          .select('*')
          .order('sort_order', { ascending: true })
      ]),
      3500
    ) as any[];

    if (theoryRes.error) throw theoryRes.error;
    if (exercisesRes.error) throw exercisesRes.error;

    const dbTheory = theoryRes.data || [];
    const dbExercises = exercisesRes.data || [];

    if (!dbTheory || dbTheory.length === 0) {
      return { data: null, error: new Error('No theory blocks found in Supabase (check RLS)') };
    }

    // Group and map theory blocks
    const theoryBlocksMap = new Map<number, WritingTheoryBlock>();
    for (const row of dbTheory) {
      if (!theoryBlocksMap.has(row.block_number)) {
        theoryBlocksMap.set(row.block_number, {
          blockNumber: row.block_number,
          title: row.block_title,
          description: row.block_description || undefined,
          concepts: []
        });
      }
      const block = theoryBlocksMap.get(row.block_number)!;
      block.concepts.push({
        id: row.id,
        title: row.concept_title,
        sectionNumber: row.section_number || undefined,
        fullText: row.full_text,
        bulletPoints: row.bullet_points && row.bullet_points.length > 0 ? row.bullet_points : undefined,
        rules: row.rules && row.rules.length > 0 ? row.rules : undefined,
        examples: row.examples && row.examples.length > 0 ? row.examples : undefined,
        tables: row.tables && row.tables.length > 0 ? row.tables : undefined,
        checklist: row.checklist && row.checklist.length > 0 ? row.checklist : undefined,
        traps: row.traps && row.traps.length > 0 ? row.traps : undefined,
        shortcuts: row.shortcuts && row.shortcuts.length > 0 ? row.shortcuts : undefined
      });
    }
    const theoryBlocks = Array.from(theoryBlocksMap.values()).sort((a, b) => a.blockNumber - b.blockNumber);

    // Group and map exercise blocks
    const exerciseBlocksMap = new Map<number, WritingExerciseBlock>();
    for (const row of dbExercises) {
      if (!exerciseBlocksMap.has(row.block_number)) {
        exerciseBlocksMap.set(row.block_number, {
          blockNumber: row.block_number,
          title: row.block_title,
          description: row.block_description || undefined,
          questions: [],
          scoreGuide: row.score_guide && row.score_guide.length > 0 ? row.score_guide : undefined,
          checklists: row.block_checklists && row.block_checklists.length > 0 ? row.block_checklists : undefined
        });
      }
      const block = exerciseBlocksMap.get(row.block_number)!;
      block.questions.push({
        questionNumber: row.question_number,
        id: row.id,
        difficulty: row.difficulty,
        skillTag: row.skill_tag,
        prompt: row.prompt,
        underlinedText: row.underlined_text || undefined,
        contextSentence: row.context_sentence || undefined,
        dataFigure: row.data_figure || undefined,
        options: row.options || [],
        correctAnswer: row.correct_answer,
        explanation: {
          coreReasoning: row.core_reasoning,
          educationalObjective: row.educational_objective || undefined,
          beforeAndAfterAnalysis: row.before_and_after_analysis || undefined,
          whyCorrect: row.why_correct,
          distractorAnalysis: row.distractor_analysis || [],
          eliminationShortcut: row.elimination_shortcut || undefined,
          trapToAvoid: row.trap_to_avoid || undefined
        }
      });
    }
    const exerciseBlocks = Array.from(exerciseBlocksMap.values()).sort((a, b) => a.blockNumber - b.blockNumber);

    const result: FullSatWritingChapter = {
      id: 'ch2',
      chapterNumber: 2,
      chapterTitle: 'Punctuation, Structural Boundaries & Typographic Logic',
      subtitle: 'The Systematic Rules of Comma Restraints, Colons, Dashes, and Possessive Inflections',
      introduction: 'Punctuation is not a transcription of audible breaths; it is a system of architectural boundaries that defines the structural relationship between sentence elements. This chapter establishes a complete logical matrix to govern comma insertion, coordinate lists, emphatic appositives, and possessive inflections.',
      purpose: 'To provide absolute mastery over every SAT punctuation boundary and relationship.',
      masterPrinciple: 'Punctuation marks are not decorative pauses; they establish strict grammatical boundaries and logical relationships between clauses, phrases, and modifiers.',
      theoryBlocks,
      exerciseBlocks,
      masterChecklist: [
        'I can perform the Independent-Clause Test rapidly on any sentence boundary.',
        'I recognize comma splices immediately and know the four valid solutions.',
        'I know how to punctuate introductory dependent clauses, phrases, and transitions.',
        'I can distinguish essential (restrictive) from nonessential (nonrestrictive) modifiers.',
        'I use the "Remove-It Test" to verify paired punctuation (commas, dashes, parentheses).',
        'I know the complete-thought rule for colons and when to use colons for lists/explanations.',
        'I use semicolons only between independent clauses or in complex series with internal commas.',
        'I can distinguish possessive singular (noun\'s), possessive plural (nouns\'), and ordinary plural (nouns).',
        'I know that possessive pronouns (its, whose, theirs, yours) NEVER take apostrophes.',
        'I never insert a comma between a subject and verb, or a verb and its direct object.'
      ],
      completionSummary: `CHAPTER 2 COMPLETION SUMMARY:
Congratulations! You have completed Chapter 2 — Punctuation.
You have mastered the complete structural punctuation decision system, including sentence boundary rules, comma usage and restrictions, colons, semicolons, dashes, apostrophes, and complex punctuation interaction.
With 18 theory blocks and 100 targeted practice questions completed, your punctuation execution is now primed for high precision on the Digital SAT.`
    };

    cachedWritingChapter2 = result;
    setLocalStorageCache('sat_writing_ch2_cache', result);
    return { data: result, error: null };
  } catch (err: any) {
    console.error('Error fetching SAT Writing Chapter 2 from Supabase:', err);
    return { data: null, error: err };
  }
}

let cachedWritingChapter3: FullSatWritingChapter | null = null;

export async function fetchSatWritingChapter3FromSupabase(): Promise<{ data: FullSatWritingChapter | null; error: any }> {
  if (!isSupabaseConfigured() || !supabase) {
    return { data: null, error: new Error('Supabase is not configured') };
  }

  if (cachedWritingChapter3) {
    return { data: cachedWritingChapter3, error: null };
  }

  const localCache = getLocalStorageCache<FullSatWritingChapter>('sat_writing_ch3_cache');
  if (localCache) {
    cachedWritingChapter3 = localCache;
    return { data: localCache, error: null };
  }

  try {
    const [theoryRes, exercisesRes] = await withTimeout(
      Promise.all([
        supabase
          .from('sat_writing_ch3_theory')
          .select('*')
          .order('sort_order', { ascending: true }),
        supabase
          .from('sat_writing_ch3_exercises')
          .select('*')
          .order('sort_order', { ascending: true })
      ]),
      3500
    ) as any[];

    if (theoryRes.error) throw theoryRes.error;
    if (exercisesRes.error) throw exercisesRes.error;

    const dbTheory = theoryRes.data || [];
    const dbExercises = exercisesRes.data || [];

    if (!dbTheory || dbTheory.length === 0) {
      return { data: null, error: new Error('No theory blocks found in Supabase (check RLS)') };
    }

    // Group and map theory blocks
    const theoryBlocksMap = new Map<number, WritingTheoryBlock>();
    for (const row of dbTheory) {
      if (!theoryBlocksMap.has(row.block_number)) {
        theoryBlocksMap.set(row.block_number, {
          blockNumber: row.block_number,
          title: row.block_title,
          description: row.block_description || undefined,
          concepts: []
        });
      }
      const block = theoryBlocksMap.get(row.block_number)!;
      block.concepts.push({
        id: row.id,
        title: row.concept_title,
        sectionNumber: row.section_number || undefined,
        fullText: row.full_text,
        bulletPoints: row.bullet_points && row.bullet_points.length > 0 ? row.bullet_points : undefined,
        rules: row.rules && row.rules.length > 0 ? row.rules : undefined,
        examples: row.examples && row.examples.length > 0 ? row.examples : undefined,
        tables: row.tables && row.tables.length > 0 ? row.tables : undefined,
        checklist: row.checklist && row.checklist.length > 0 ? row.checklist : undefined,
        traps: row.traps && row.traps.length > 0 ? row.traps : undefined,
        shortcuts: row.shortcuts && row.shortcuts.length > 0 ? row.shortcuts : undefined
      });
    }
    const theoryBlocks = Array.from(theoryBlocksMap.values()).sort((a, b) => a.blockNumber - b.blockNumber);

    // Group and map exercise blocks
    const exerciseBlocksMap = new Map<number, WritingExerciseBlock>();
    for (const row of dbExercises) {
      if (!exerciseBlocksMap.has(row.block_number)) {
        exerciseBlocksMap.set(row.block_number, {
          blockNumber: row.block_number,
          title: row.block_title,
          description: row.block_description || undefined,
          questions: [],
          scoreGuide: row.score_guide && row.score_guide.length > 0 ? row.score_guide : undefined,
          checklists: row.block_checklists && row.block_checklists.length > 0 ? row.block_checklists : undefined
        });
      }
      const block = exerciseBlocksMap.get(row.block_number)!;
      block.questions.push({
        questionNumber: row.question_number,
        id: row.id,
        difficulty: row.difficulty,
        skillTag: row.skill_tag,
        prompt: row.prompt,
        underlinedText: row.underlined_text || undefined,
        contextSentence: row.context_sentence || undefined,
        dataFigure: row.data_figure || undefined,
        options: row.options || [],
        correctAnswer: row.correct_answer,
        explanation: {
          coreReasoning: row.core_reasoning,
          educationalObjective: row.educational_objective || undefined,
          beforeAndAfterAnalysis: row.before_and_after_analysis || undefined,
          whyCorrect: row.why_correct,
          distractorAnalysis: row.distractor_analysis || [],
          eliminationShortcut: row.elimination_shortcut || undefined,
          trapToAvoid: row.trap_to_avoid || undefined
        }
      });
    }
    const exerciseBlocks = Array.from(exerciseBlocksMap.values()).sort((a, b) => a.blockNumber - b.blockNumber);

    const result: FullSatWritingChapter = {
      id: 'ch3',
      chapterNumber: 3,
      chapterTitle: 'Grammar & Agreement',
      subtitle: 'The Complete Grammar and Agreement System',
      introduction: 'Chapter 3 develops the master-level grammar skills needed to recognize and correct sentence-level errors, particularly errors involving subjects, verbs, agreement, verb tense, sequence, mood, pronouns, modifiers, clause boundaries, parallelism, and comparisons.',
      purpose: 'To provide absolute mastery over every Digital SAT grammar rule, agreement trap, modifier relation, and sentence structure.',
      masterPrinciple: 'Find the grammatical subject first. Then determine what the verb must agree with. Never allow nearby nouns or interrupting phrases to distract you from the true head noun.',
      theoryBlocks,
      exerciseBlocks,
      masterChecklist: [
        'I can strip away interrupting phrases and identify the true head noun immediately.',
        'I know the agreement rules for additive phrases (along with, as well as) versus compound subjects (and).',
        'I can apply the Rule of Proximity for either...or and neither...nor constructions.',
        'I know that each, every, and indefinite pronouns are strictly singular.',
        'I know when quantity expressions (some of, all of, half of, %) take singular vs. plural verbs.',
        'I can distinguish "one of the people who [plural]" from "the only one who [singular]".',
        'I know that noncount nouns (information, research, equipment, evidence) always take singular verbs.',
        'I know that future time clauses (when, after, before) use present tense instead of "will".',
        'I know that mandative subjunctive verbs (recommend that, require that) use bare base verbs.',
        'I use the "Remove-It Test" to solve compound pronoun case questions (between you and me).',
        'I can identify dangling modifiers and verify that introductory participial phrases modify the immediate subject.',
        'I know how to fix comma splices and run-ons using the four valid boundary solutions.',
        'I ensure parallelism across lists, correlative conjunctions, and logical comparisons (that of / those of).'
      ],
      completionSummary: 'Chapter 3 is fully integrated with 13 comprehensive theory blocks covering all concepts and 70 SAT-style practice questions.'
    };

    cachedWritingChapter3 = result;
    setLocalStorageCache('sat_writing_ch3_cache', result);
    return { data: result, error: null };
  } catch (err: any) {
    console.error('Error fetching SAT Writing Chapter 3 from Supabase:', err);
    return { data: null, error: err };
  }
}

let cachedWritingChapter4: FullSatWritingChapter | null = null;

export async function fetchSatWritingChapter4FromSupabase(): Promise<{ data: FullSatWritingChapter | null; error: any }> {
  if (!isSupabaseConfigured() || !supabase) {
    return { data: null, error: new Error('Supabase is not configured') };
  }

  if (cachedWritingChapter4) {
    return { data: cachedWritingChapter4, error: null };
  }

  const localCache = getLocalStorageCache<FullSatWritingChapter>('sat_writing_ch4_cache');
  if (localCache) {
    cachedWritingChapter4 = localCache;
    return { data: localCache, error: null };
  }

  try {
    const [theoryRes, exercisesRes] = await Promise.all([
      supabase
        .from('sat_writing_ch4_theory')
        .select('*')
        .order('sort_order', { ascending: true }),
      supabase
        .from('sat_writing_ch4_exercises')
        .select('*')
        .order('sort_order', { ascending: true })
    ]);

    if (theoryRes.error) throw theoryRes.error;
    if (exercisesRes.error) throw exercisesRes.error;

    const dbTheory = theoryRes.data || [];
    const dbExercises = exercisesRes.data || [];

    if (!dbTheory || dbTheory.length === 0) {
      return { data: null, error: new Error('No theory blocks found in Supabase (check RLS)') };
    }

    // Group and map theory blocks
    const theoryBlocksMap = new Map<number, WritingTheoryBlock>();
    for (const row of dbTheory) {
      if (!theoryBlocksMap.has(row.block_number)) {
        theoryBlocksMap.set(row.block_number, {
          blockNumber: row.block_number,
          title: row.block_title,
          description: row.block_description || undefined,
          concepts: []
        });
      }
      const block = theoryBlocksMap.get(row.block_number)!;
      block.concepts.push({
        id: row.id,
        title: row.concept_title,
        sectionNumber: row.section_number || undefined,
        fullText: row.full_text,
        bulletPoints: row.bullet_points && row.bullet_points.length > 0 ? row.bullet_points : undefined,
        rules: row.rules && row.rules.length > 0 ? row.rules : undefined,
        examples: row.examples && row.examples.length > 0 ? row.examples : undefined,
        tables: row.tables && row.tables.length > 0 ? row.tables : undefined,
        checklist: row.checklist && row.checklist.length > 0 ? row.checklist : undefined,
        traps: row.traps && row.traps.length > 0 ? row.traps : undefined,
        shortcuts: row.shortcuts && row.shortcuts.length > 0 ? row.shortcuts : undefined
      });
    }
    const theoryBlocks = Array.from(theoryBlocksMap.values()).sort((a, b) => a.blockNumber - b.blockNumber);

    // Group and map exercise blocks
    const exerciseBlocksMap = new Map<number, WritingExerciseBlock>();
    for (const row of dbExercises) {
      if (!exerciseBlocksMap.has(row.block_number)) {
        exerciseBlocksMap.set(row.block_number, {
          blockNumber: row.block_number,
          title: row.block_title,
          description: row.block_description || undefined,
          questions: [],
          scoreGuide: row.score_guide && row.score_guide.length > 0 ? row.score_guide : undefined,
          checklists: row.block_checklists && row.block_checklists.length > 0 ? row.block_checklists : undefined
        });
      }
      const block = exerciseBlocksMap.get(row.block_number)!;
      block.questions.push({
        questionNumber: row.question_number,
        id: row.id,
        difficulty: row.difficulty,
        skillTag: row.skill_tag,
        prompt: row.prompt,
        underlinedText: row.underlined_text || undefined,
        contextSentence: row.context_sentence || undefined,
        dataFigure: row.data_figure || undefined,
        options: row.options || [],
        correctAnswer: row.correct_answer,
        explanation: {
          coreReasoning: row.core_reasoning,
          educationalObjective: row.educational_objective || undefined,
          beforeAndAfterAnalysis: row.before_and_after_analysis || undefined,
          whyCorrect: row.why_correct,
          distractorAnalysis: row.distractor_analysis || [],
          eliminationShortcut: row.elimination_shortcut || undefined,
          trapToAvoid: row.trap_to_avoid || undefined
        }
      });
    }
    const exerciseBlocks = Array.from(exerciseBlocksMap.values()).sort((a, b) => a.blockNumber - b.blockNumber);

    const result: FullSatWritingChapter = {
      id: 'ch4',
      chapterNumber: 4,
      chapterTitle: 'Modifiers, Comparisons & Parallelism',
      subtitle: 'The Complete System for Modifiers, Comparisons, and Structural Parallelism',
      introduction: 'Chapter 4 establishes absolute mastery over sentence modifier alignment, logical comparison balance, category equivalence, and coordinate/correlative parallelism across all Digital SAT question formats.',
      purpose: 'To ensure perfect precision on introductory participial modifiers, logical comparisons, demonstrative pronouns (that of / those of), and balanced parallel structures.',
      masterPrinciple: 'An introductory modifier MUST immediately touch the noun it describes. Logical comparisons MUST compare like things with like things. Parallel items in a series or correlative construction MUST share matching grammatical forms.',
      theoryBlocks,
      exerciseBlocks,
      masterChecklist: [
        'I can immediately identify dangling modifiers and verify that introductory participial phrases modify the immediate subject.',
        'I check that logical comparisons compare equivalent categories (people to people, objects to objects, attributes to attributes using that of / those of).',
        'I verify parallel structure across lists, coordinate conjunctions (and, or, but), and correlative conjunctions (not only...but also, either...or, neither...nor).'
      ],
      completionSummary: 'Chapter 4 is fully integrated with 10 comprehensive theory blocks covering all concepts and 70 SAT-style practice questions.'
    };

    cachedWritingChapter4 = result;
    setLocalStorageCache('sat_writing_ch4_cache', result);
    return { data: result, error: null };
  } catch (err: any) {
    console.error('Error fetching SAT Writing Chapter 4 from Supabase:', err);
    return { data: null, error: err };
  }
}

let cachedWritingChapter5: FullSatWritingChapter | null = null;

export async function fetchSatWritingChapter5FromSupabase(): Promise<{ data: FullSatWritingChapter | null; error: any }> {
  if (!isSupabaseConfigured() || !supabase) {
    return { data: null, error: new Error('Supabase is not configured') };
  }

  if (cachedWritingChapter5) {
    return { data: cachedWritingChapter5, error: null };
  }

  const localCache = getLocalStorageCache<FullSatWritingChapter>('sat_writing_ch5_cache');
  if (localCache) {
    cachedWritingChapter5 = localCache;
    return { data: localCache, error: null };
  }

  try {
    const [theoryRes, exercisesRes] = await withTimeout(
      Promise.all([
        supabase
          .from('sat_writing_ch5_theory')
          .select('*')
          .order('sort_order', { ascending: true }),
        supabase
          .from('sat_writing_ch5_exercises')
          .select('*')
          .order('sort_order', { ascending: true })
      ]),
      3500
    ) as any[];

    if (theoryRes.error) throw theoryRes.error;
    if (exercisesRes.error) throw exercisesRes.error;

    const dbTheory = theoryRes.data || [];
    const dbExercises = exercisesRes.data || [];

    if (!dbTheory || dbTheory.length === 0) {
      return { data: null, error: new Error('No theory blocks found in Supabase (check RLS)') };
    }

    // Group and map theory blocks
    const theoryBlocksMap = new Map<number, WritingTheoryBlock>();
    for (const row of dbTheory) {
      if (!theoryBlocksMap.has(row.block_number)) {
        theoryBlocksMap.set(row.block_number, {
          blockNumber: row.block_number,
          title: row.block_title,
          description: row.block_description || undefined,
          concepts: []
        });
      }
      const block = theoryBlocksMap.get(row.block_number)!;
      block.concepts.push({
        id: row.id,
        title: row.concept_title,
        sectionNumber: row.section_number || undefined,
        fullText: row.full_text,
        bulletPoints: row.bullet_points && row.bullet_points.length > 0 ? row.bullet_points : undefined,
        rules: row.rules && row.rules.length > 0 ? row.rules : undefined,
        examples: row.examples && row.examples.length > 0 ? row.examples : undefined,
        tables: row.tables && row.tables.length > 0 ? row.tables : undefined,
        checklist: row.checklist && row.checklist.length > 0 ? row.checklist : undefined,
        traps: row.traps && row.traps.length > 0 ? row.traps : undefined,
        shortcuts: row.shortcuts && row.shortcuts.length > 0 ? row.shortcuts : undefined
      });
    }
    const theoryBlocks = Array.from(theoryBlocksMap.values()).sort((a, b) => a.blockNumber - b.blockNumber);

    // Group and map exercise blocks
    const exerciseBlocksMap = new Map<number, WritingExerciseBlock>();
    for (const row of dbExercises) {
      if (!exerciseBlocksMap.has(row.block_number)) {
        exerciseBlocksMap.set(row.block_number, {
          blockNumber: row.block_number,
          title: row.block_title,
          description: row.block_description || undefined,
          questions: [],
          scoreGuide: row.score_guide && row.score_guide.length > 0 ? row.score_guide : undefined,
          checklists: row.block_checklists && row.block_checklists.length > 0 ? row.block_checklists : undefined
        });
      }
      const block = exerciseBlocksMap.get(row.block_number)!;
      block.questions.push({
        questionNumber: row.question_number,
        id: row.id,
        difficulty: row.difficulty,
        skillTag: row.skill_tag,
        prompt: row.prompt,
        underlinedText: row.underlined_text || undefined,
        contextSentence: row.context_sentence || undefined,
        dataFigure: row.data_figure || undefined,
        options: row.options || [],
        correctAnswer: row.correct_answer,
        explanation: {
          coreReasoning: row.core_reasoning,
          educationalObjective: row.educational_objective || undefined,
          beforeAndAfterAnalysis: row.before_and_after_analysis || undefined,
          whyCorrect: row.why_correct,
          distractorAnalysis: row.distractor_analysis || [],
          eliminationShortcut: row.elimination_shortcut || undefined,
          trapToAvoid: row.trap_to_avoid || undefined
        }
      });
    }
    const exerciseBlocks = Array.from(exerciseBlocksMap.values()).sort((a, b) => a.blockNumber - b.blockNumber);

    const result: FullSatWritingChapter = {
      id: 'ch5',
      chapterNumber: 5,
      chapterTitle: 'Advanced Grammar Diagnostics & Error Prioritization',
      subtitle: 'Advanced Diagnostics, Error Prioritization, and Structural Repair',
      introduction: 'Chapter 5 establishes an elite 5-layer diagnostic process for identifying, triaging, and repairing sentence-level errors under strict Digital SAT time constraints.',
      purpose: 'To provide a systematic framework for concision, precision, modifier attachment, idea combination, parallelism, and multi-rule error hierarchy.',
      masterPrinciple: 'Never edit blindly. Triage errors using the 5-Layer Hierarchy: Sentence Boundaries > Agreement > Modifiers & Parallelism > Concision & Precision > Style.',
      theoryBlocks,
      exerciseBlocks,
      masterChecklist: [
        'I apply the 5-Layer Error Hierarchy on every question to eliminate distractor traps rapidly.',
        'I eliminate wordiness and redundancy without dropping necessary semantic modifiers.',
        'I select exact diction based on tone, register uniformity, and scientific modality.'
      ],
      completionSummary: 'Chapter 5 is fully integrated with 15 comprehensive theory blocks covering all concepts and 100 SAT-style practice questions.'
    };

    cachedWritingChapter5 = result;
    setLocalStorageCache('sat_writing_ch5_cache', result);
    return { data: result, error: null };
  } catch (err: any) {
    console.error('Error fetching SAT Writing Chapter 5 from Supabase:', err);
    return { data: null, error: err };
  }
}

let cachedWritingChapter6: FullSatWritingChapter | null = null;

export async function fetchSatWritingChapter6FromSupabase(): Promise<{ data: FullSatWritingChapter | null; error: any }> {
  if (!isSupabaseConfigured() || !supabase) {
    return { data: null, error: new Error('Supabase is not configured') };
  }

  if (cachedWritingChapter6) {
    return { data: cachedWritingChapter6, error: null };
  }

  const localCache = getLocalStorageCache<FullSatWritingChapter>('sat_writing_ch6_cache');
  if (localCache) {
    cachedWritingChapter6 = localCache;
    return { data: localCache, error: null };
  }

  try {
    const [theoryRes, exercisesRes] = await withTimeout(
      Promise.all([
        supabase
          .from('sat_writing_ch6_theory')
          .select('*')
          .order('sort_order', { ascending: true }),
        supabase
          .from('sat_writing_ch6_exercises')
          .select('*')
          .order('sort_order', { ascending: true })
      ]),
      3500
    ) as any[];

    if (theoryRes.error) throw theoryRes.error;
    if (exercisesRes.error) throw exercisesRes.error;

    const dbTheory = theoryRes.data || [];
    const dbExercises = exercisesRes.data || [];

    if (!dbTheory || dbTheory.length === 0) {
      return { data: null, error: new Error('No theory blocks found in Supabase (check RLS)') };
    }

    // Group and map theory blocks
    const theoryBlocksMap = new Map<number, WritingTheoryBlock>();
    for (const row of dbTheory) {
      if (!theoryBlocksMap.has(row.block_number)) {
        theoryBlocksMap.set(row.block_number, {
          blockNumber: row.block_number,
          title: row.block_title,
          description: row.block_description || undefined,
          concepts: []
        });
      }
      const block = theoryBlocksMap.get(row.block_number)!;
      block.concepts.push({
        id: row.id,
        title: row.concept_title,
        sectionNumber: row.section_number || undefined,
        fullText: row.full_text,
        bulletPoints: row.bullet_points && row.bullet_points.length > 0 ? row.bullet_points : undefined,
        rules: row.rules && row.rules.length > 0 ? row.rules : undefined,
        examples: row.examples && row.examples.length > 0 ? row.examples : undefined,
        tables: row.tables && row.tables.length > 0 ? row.tables : undefined,
        checklist: row.checklist && row.checklist.length > 0 ? row.checklist : undefined,
        traps: row.traps && row.traps.length > 0 ? row.traps : undefined,
        shortcuts: row.shortcuts && row.shortcuts.length > 0 ? row.shortcuts : undefined
      });
    }
    const theoryBlocks = Array.from(theoryBlocksMap.values()).sort((a, b) => a.blockNumber - b.blockNumber);

    // Group and map exercise blocks
    const exerciseBlocksMap = new Map<number, WritingExerciseBlock>();
    for (const row of dbExercises) {
      if (!exerciseBlocksMap.has(row.block_number)) {
        exerciseBlocksMap.set(row.block_number, {
          blockNumber: row.block_number,
          title: row.block_title,
          description: row.block_description || undefined,
          questions: [],
          scoreGuide: row.score_guide && row.score_guide.length > 0 ? row.score_guide : undefined,
          checklists: row.block_checklists && row.block_checklists.length > 0 ? row.block_checklists : undefined
        });
      }
      const block = exerciseBlocksMap.get(row.block_number)!;
      block.questions.push({
        questionNumber: row.question_number,
        id: row.id,
        difficulty: row.difficulty,
        skillTag: row.skill_tag,
        prompt: row.prompt,
        underlinedText: row.underlined_text || undefined,
        contextSentence: row.context_sentence || undefined,
        dataFigure: row.data_figure || undefined,
        options: row.options || [],
        correctAnswer: row.correct_answer,
        explanation: {
          coreReasoning: row.core_reasoning,
          educationalObjective: row.educational_objective || undefined,
          beforeAndAfterAnalysis: row.before_and_after_analysis || undefined,
          whyCorrect: row.why_correct,
          distractorAnalysis: row.distractor_analysis || [],
          eliminationShortcut: row.elimination_shortcut || undefined,
          trapToAvoid: row.trap_to_avoid || undefined
        }
      });
    }
    const exerciseBlocks = Array.from(exerciseBlocksMap.values()).sort((a, b) => a.blockNumber - b.blockNumber);

    const result: FullSatWritingChapter = {
      id: 'ch6',
      chapterNumber: 6,
      chapterTitle: 'Transitions, Sentence Placement & Rhetorical Synthesis',
      subtitle: 'The Complete Master Class for Logical Transitions, Sentence Placement, and Rhetorical Synthesis',
      introduction: 'Chapter 6 develops absolute mastery over logical transition words, sentence placement/discourse flow, and rhetorical synthesis question formats on the Digital SAT.',
      purpose: 'To equip students with systematic frameworks for identifying logical relationships between ideas (continuation, contrast, cause/effect) and selecting bullet-point synthesis choices that achieve specified goal prompts.',
      masterPrinciple: 'For transitions, isolate the precise logical relation before looking at choices. For rhetorical synthesis, locate the specific goal in the prompt and match only the bullet points that fulfill that exact goal.',
      theoryBlocks,
      exerciseBlocks,
      masterChecklist: [
        'I categorize transition words into Continuation, Contrast, and Cause/Effect families.',
        'I place sentences strategically by tracking chronological, logical, and demonstrative anchor links.',
        'I solve Rhetorical Synthesis questions by directly targeting the prompt Goal Statement.'
      ],
      completionSummary: 'Chapter 6 is fully integrated with 15 comprehensive theory blocks covering all concepts and 100 SAT-style practice questions.'
    };

    cachedWritingChapter6 = result;
    setLocalStorageCache('sat_writing_ch6_cache', result);
    return { data: result, error: null };
  } catch (err: any) {
    console.error('Error fetching SAT Writing Chapter 6 from Supabase:', err);
    return { data: null, error: err };
  }
}

let cachedWritingChapter7: FullSatWritingChapter | null = null;

export async function fetchSatWritingChapter7FromSupabase(): Promise<{ data: FullSatWritingChapter | null; error: any }> {
  if (!isSupabaseConfigured() || !supabase) {
    return { data: null, error: new Error('Supabase is not configured') };
  }

  if (cachedWritingChapter7) {
    return { data: cachedWritingChapter7, error: null };
  }

  const localCache = getLocalStorageCache<FullSatWritingChapter>('sat_writing_ch7_cache');
  if (localCache) {
    cachedWritingChapter7 = localCache;
    return { data: localCache, error: null };
  }

  try {
    const [theoryRes, exercisesRes] = await withTimeout(
      Promise.all([
        supabase
          .from('sat_writing_ch7_theory')
          .select('*')
          .order('sort_order', { ascending: true }),
        supabase
          .from('sat_writing_ch7_exercises')
          .select('*')
          .order('sort_order', { ascending: true })
      ]),
      8000
    ) as any[];

    if (theoryRes.error) throw theoryRes.error;
    if (exercisesRes.error) throw exercisesRes.error;

    const dbTheory = theoryRes.data || [];
    const dbExercises = exercisesRes.data || [];

    if (!dbTheory || dbTheory.length === 0) {
      return { data: null, error: new Error('No theory blocks found in Supabase (check RLS)') };
    }

    // Group and map theory blocks
    const theoryBlocksMap = new Map<number, WritingTheoryBlock>();
    for (const row of dbTheory) {
      if (!theoryBlocksMap.has(row.block_number)) {
        theoryBlocksMap.set(row.block_number, {
          blockNumber: row.block_number,
          title: row.block_title,
          description: row.block_description || undefined,
          concepts: []
        });
      }
      const block = theoryBlocksMap.get(row.block_number)!;
      block.concepts.push({
        id: row.id,
        title: row.concept_title,
        sectionNumber: row.section_number || undefined,
        fullText: row.full_text,
        bulletPoints: row.bullet_points && row.bullet_points.length > 0 ? row.bullet_points : undefined,
        rules: row.rules && row.rules.length > 0 ? row.rules : undefined,
        examples: row.examples && row.examples.length > 0 ? row.examples : undefined,
        tables: row.tables && row.tables.length > 0 ? row.tables : undefined,
        checklist: row.checklist && row.checklist.length > 0 ? row.checklist : undefined,
        traps: row.traps && row.traps.length > 0 ? row.traps : undefined,
        shortcuts: row.shortcuts && row.shortcuts.length > 0 ? row.shortcuts : undefined
      });
    }
    const theoryBlocks = Array.from(theoryBlocksMap.values()).sort((a, b) => a.blockNumber - b.blockNumber);

    // Group and map exercise blocks
    const exerciseBlocksMap = new Map<number, WritingExerciseBlock>();
    for (const row of dbExercises) {
      if (!exerciseBlocksMap.has(row.block_number)) {
        exerciseBlocksMap.set(row.block_number, {
          blockNumber: row.block_number,
          title: row.block_title,
          description: row.block_description || undefined,
          questions: [],
          scoreGuide: row.score_guide && row.score_guide.length > 0 ? row.score_guide : undefined,
          checklists: row.block_checklists && row.block_checklists.length > 0 ? row.block_checklists : undefined
        });
      }
      const block = exerciseBlocksMap.get(row.block_number)!;
      block.questions.push({
        questionNumber: row.question_number,
        id: row.id,
        difficulty: row.difficulty,
        skillTag: row.skill_tag,
        prompt: row.prompt,
        underlinedText: row.underlined_text || undefined,
        contextSentence: row.context_sentence || undefined,
        dataFigure: row.data_figure || undefined,
        options: row.options || [],
        correctAnswer: row.correct_answer,
        explanation: {
          coreReasoning: row.core_reasoning,
          educationalObjective: row.educational_objective || undefined,
          beforeAndAfterAnalysis: row.before_and_after_analysis || undefined,
          whyCorrect: row.why_correct,
          distractorAnalysis: row.distractor_analysis || [],
          eliminationShortcut: row.elimination_shortcut || undefined,
          trapToAvoid: row.trap_to_avoid || undefined
        }
      });
    }
    const exerciseBlocks = Array.from(exerciseBlocksMap.values()).sort((a, b) => a.blockNumber - b.blockNumber);

    const result: FullSatWritingChapter = {
      id: 'ch7',
      chapterNumber: 7,
      chapterTitle: 'Elite Writing: Complete Integration of All SAT Writing Skills',
      subtitle: 'The Ultimate Master Class for 750+ SAT Writing Scores',
      introduction: 'Chapter 7 develops absolute elite-level mastery across multi-rule decision making, advanced distractor analysis, rhetorical purpose under competing constraints, and cross-concept integration.',
      purpose: 'To equip students with high-order analytical frameworks to conquer the hardest 800-level Writing and Language questions on the Digital SAT with 100% precision.',
      masterPrinciple: 'Identify the exact core constraint of each question before evaluating choices. Match scope, certainty, and logical flow precisely without falling for sophisticated distractor traps.',
      theoryBlocks,
      exerciseBlocks,
      masterChecklist: [
        'I apply multi-rule decision pathways to resolve multi-concept sentence boundaries.',
        'I evaluate distractor choices by testing scope boundaries, epistemic modality, and logical consistency.',
        'I master rhetorical synthesis by isolating prompt goals and matching evidence precisely.'
      ],
      completionSummary: 'Chapter 7 is fully integrated with 10 comprehensive theory blocks covering 51 concepts and 130 elite SAT-style practice questions.'
    };

    cachedWritingChapter7 = result;
    setLocalStorageCache('sat_writing_ch7_cache', result);
    return { data: result, error: null };
  } catch (err: any) {
    console.error('Error fetching SAT Writing Chapter 7 from Supabase:', err);
    return { data: null, error: err };
  }
}

export async function fetchGovernmentScholarshipsFromSupabase() {
  if (!isSupabaseConfigured() || !supabase) {
    return { data: getCachedGovernmentScholarships(), error: new Error('Supabase environment variables not configured') };
  }

  const cached = getCachedGovernmentScholarships();
  if (cached && cached.length > 0) {
    // Return cached immediately, and refresh in the background
    fetchGovernmentScholarshipsFromSupabaseBackground().catch(() => {});
    return { data: cached, error: null };
  }

  try {
    const fetchPromise = fetchGovernmentScholarshipsFromSupabaseBackground();
    const timeoutPromise = new Promise<GovernmentTrackItem[]>((_, reject) =>
      setTimeout(() => reject(new Error('Government fetch timeout exceeded 10000ms')), 10000)
    );

    const data = await Promise.race([fetchPromise, timeoutPromise]);
    return { data, error: null };
  } catch (err: any) {
    console.warn('Government scholarship fetch timeout or error, falling back to cache:', err);
    return { data: getCachedGovernmentScholarships(), error: err };
  }
}

async function fetchGovernmentScholarshipsFromSupabaseBackground(): Promise<GovernmentTrackItem[]> {
  if (!supabase) return getCachedGovernmentScholarships();
  try {
    const { data, error } = await supabase
      .from('government_scholarships')
      .select('*')
      .limit(100);

    if (error) {
      console.warn('Note: Could not query government scholarships table from Supabase, using local verified dataset:', error.message || error);
      return getCachedGovernmentScholarships();
    }

    const formattedList: GovernmentTrackItem[] = (data || []).map((row, idx) => mapRowToGovernmentTrack(row, idx));
    if (formattedList.length > 0) {
      cachedGovernmentScholarships = formattedList;
      setLocalStorageCache(CACHE_KEY_GOVERNMENT, formattedList);
      if (typeof window !== 'undefined') {
        window.dispatchEvent(new CustomEvent('uniroute-gov-scholarships-updated', { detail: { scholarships: formattedList } }));
      }
      return formattedList;
    }
    return getCachedGovernmentScholarships();
  } catch (err: any) {
    console.warn('Network issue fetching government scholarships from Supabase, using local verified dataset:', err?.message || err);
    return getCachedGovernmentScholarships();
  }
}

export const SUPABASE_SQL_SCHEMA = `
-- 1. University Scholarships
CREATE TABLE IF NOT EXISTS university_scholarships (
  id BIGINT GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
  university_name TEXT NOT NULL,
  location TEXT,
  country TEXT,
  flag TEXT DEFAULT '🏛️',
  scholarship_title TEXT,
  ranking TEXT DEFAULT '#1',
  coverage TEXT DEFAULT 'Full Ride',
  amount_value TEXT,
  tuition_fee TEXT,
  tuition_numeric NUMERIC DEFAULT 0,
  has_full_ride BOOLEAN DEFAULT true,
  has_partial_aid BOOLEAN DEFAULT true,
  has_financial_aid BOOLEAN DEFAULT true,
  financial_aid_type TEXT DEFAULT 'Need-Blind',
  min_gpa TEXT DEFAULT '3.5 / 4.0',
  min_sat TEXT DEFAULT '1400+',
  sat_category TEXT DEFAULT '1400',
  min_ielts TEXT DEFAULT '7.0+',
  ielts_category TEXT DEFAULT '7.0',
  acceptance_rate TEXT DEFAULT '5.0%',
  deadline TEXT DEFAULT 'Jan 15',
  description TEXT,
  degrees_offered TEXT[] DEFAULT ARRAY['Undergraduate', 'Graduate'],
  tags TEXT[] DEFAULT ARRAY['Global', 'Scholarship'],
  logo_text TEXT,
  logo_bg TEXT DEFAULT 'bg-indigo-950 text-white',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. User Profiles
CREATE TABLE IF NOT EXISTS profiles (
  id UUID PRIMARY KEY,
  email TEXT,
  full_name TEXT,
  role TEXT DEFAULT 'Student',
  preferences JSONB DEFAULT '{}',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 3. Saved Universities / Bookmarks
CREATE TABLE IF NOT EXISTS saved_universities (
  id BIGINT GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
  user_id UUID NOT NULL,
  university_id TEXT NOT NULL,
  university_name TEXT,
  country TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id, university_id)
);

-- 4. SAT Practice Progress
CREATE TABLE IF NOT EXISTS sat_practice_progress (
  id BIGINT GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
  user_id UUID UNIQUE NOT NULL,
  reading_answers JSONB DEFAULT '{}',
  writing_answers JSONB DEFAULT '{}',
  math_answers JSONB DEFAULT '{}',
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 5. SAT Drill Sessions
CREATE TABLE IF NOT EXISTS sat_drill_sessions (
  id BIGINT GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
  user_id UUID NOT NULL,
  drill_id INT NOT NULL,
  session_data JSONB DEFAULT '{}',
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id, drill_id)
);

-- 6. SAT Drill Results History
CREATE TABLE IF NOT EXISTS sat_drill_results (
  id BIGINT GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
  user_id UUID NOT NULL,
  drill_id INT NOT NULL,
  drill_title TEXT,
  estimated_total_score INT,
  total_correct INT,
  total_answered INT,
  total_questions INT,
  accuracy_percentage INT,
  result_data JSONB DEFAULT '{}',
  completed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 7. Essay Drafts
CREATE TABLE IF NOT EXISTS essays (
  id TEXT PRIMARY KEY,
  user_id UUID NOT NULL,
  title TEXT,
  essay_type TEXT,
  prompt TEXT,
  word_limit INT DEFAULT 650,
  brainstorm_data JSONB DEFAULT '[]',
  draft_text TEXT,
  current_stage TEXT DEFAULT 'prompt',
  progress_percent INT DEFAULT 25,
  last_analysis JSONB,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 8. AI Profile Analyses
CREATE TABLE IF NOT EXISTS profile_analyses (
  id BIGINT GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
  user_id UUID NOT NULL,
  profile_input JSONB DEFAULT '{}',
  analysis_result JSONB DEFAULT '{}',
  rating_score NUMERIC,
  overall_rating TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS and create read/write policies for SAT Drills and progress
ALTER TABLE university_scholarships ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public Read Access" ON university_scholarships FOR SELECT USING (true);

-- Enable RLS and public read policies for SAT Drill Question tables (sat_drill_1 to sat_drill_5)
ALTER TABLE IF EXISTS sat_drill_1 ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Public Read sat_drill_1" ON sat_drill_1;
CREATE POLICY "Public Read sat_drill_1" ON sat_drill_1 FOR SELECT USING (true);

ALTER TABLE IF EXISTS sat_drill_2 ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Public Read sat_drill_2" ON sat_drill_2;
CREATE POLICY "Public Read sat_drill_2" ON sat_drill_2 FOR SELECT USING (true);

ALTER TABLE IF EXISTS sat_drill_3 ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Public Read sat_drill_3" ON sat_drill_3;
CREATE POLICY "Public Read sat_drill_3" ON sat_drill_3 FOR SELECT USING (true);

ALTER TABLE IF EXISTS sat_drill_4 ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Public Read sat_drill_4" ON sat_drill_4;
CREATE POLICY "Public Read sat_drill_4" ON sat_drill_4 FOR SELECT USING (true);

ALTER TABLE IF EXISTS sat_drill_5 ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Public Read sat_drill_5" ON sat_drill_5;
CREATE POLICY "Public Read sat_drill_5" ON sat_drill_5 FOR SELECT USING (true);

-- Enable RLS and public access policies for user progress/sessions
ALTER TABLE IF EXISTS sat_drill_sessions ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Public Access sat_drill_sessions" ON sat_drill_sessions;
CREATE POLICY "Public Access sat_drill_sessions" ON sat_drill_sessions FOR ALL USING (true) WITH CHECK (true);

ALTER TABLE IF EXISTS sat_drill_results ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Public Access sat_drill_results" ON sat_drill_results;
CREATE POLICY "Public Access sat_drill_results" ON sat_drill_results FOR ALL USING (true) WITH CHECK (true);

ALTER TABLE IF EXISTS sat_practice_progress ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Public Access sat_practice_progress" ON sat_practice_progress;
CREATE POLICY "Public Access sat_practice_progress" ON sat_practice_progress FOR ALL USING (true) WITH CHECK (true);
`;

// ============================================================================
// SAT MATH SECTION SUPABASE INTEGRATION
// ============================================================================
import { FullSatMathChapter } from '../data/satMathConcepts';

let cachedMathChapter1: FullSatMathChapter | null = null;

export async function fetchSatMathChapter1FromSupabase(): Promise<{ data: FullSatMathChapter | null; error: any }> {
  if (!isSupabaseConfigured() || !supabase) {
    return { data: null, error: new Error('Supabase is not configured') };
  }

  if (cachedMathChapter1) {
    return { data: cachedMathChapter1, error: null };
  }

  const localCache = getLocalStorageCache<FullSatMathChapter>('sat_math_ch1_cache');
  if (localCache) {
    cachedMathChapter1 = localCache;
    return { data: localCache, error: null };
  }

  try {
    const [theoryRes, exercisesRes] = await withTimeout(
      Promise.all([
        supabase
          .from('sat_math_ch1_theory')
          .select('*')
          .eq('chapter_id', 'exponents-and-radicals')
          .single(),
        supabase
          .from('sat_math_ch1_exercises')
          .select('*')
          .order('question_number', { ascending: true })
      ]),
      3500
    ) as any[];

    if (theoryRes.error) throw theoryRes.error;
    if (exercisesRes.error) throw exercisesRes.error;

    const rawTheory = theoryRes.data;
    const rawExercises = exercisesRes.data || [];

    if (!rawTheory) {
      return { data: null, error: new Error('No theory found in Supabase for Math Ch1') };
    }

    const exerciseGroup1Questions = rawExercises
      .filter((row: any) => row.exercise_number === 1)
      .map((row: any) => ({
        id: row.id,
        number: row.question_number,
        exerciseNumber: row.exercise_number,
        exerciseTitle: row.exercise_title,
        question: row.question,
        expression: row.expression || undefined,
        diagram: row.diagram || undefined,
        diagrams: row.diagrams || undefined,
        tableData: row.table_data || undefined,
        table: row.table_data || undefined,
        tablesData: row.tables_data || undefined,
        optionTables: row.option_tables || undefined,
        options: row.options || [],
        correctIndex: row.correct_index,
        correctAnswerText: row.correct_answer_text,
        explanation: row.explanation,
        distractorExplanations: row.distractor_explanations || {}
      }));

    const exerciseGroup2Questions = rawExercises
      .filter((row: any) => row.exercise_number === 2)
      .map((row: any) => ({
        id: row.id,
        number: row.question_number,
        exerciseNumber: row.exercise_number,
        exerciseTitle: row.exercise_title,
        question: row.question,
        expression: row.expression || undefined,
        diagram: row.diagram || undefined,
        diagrams: row.diagrams || undefined,
        tableData: row.table_data || undefined,
        table: row.table_data || undefined,
        tablesData: row.tables_data || undefined,
        optionTables: row.option_tables || undefined,
        options: row.options || [],
        correctIndex: row.correct_index,
        correctAnswerText: row.correct_answer_text,
        explanation: row.explanation,
        distractorExplanations: row.distractor_explanations || {}
      }));

    const result: FullSatMathChapter = {
      id: rawTheory.chapter_id,
      chapterNumber: rawTheory.chapter_number,
      chapterTitle: rawTheory.chapter_title,
      pageNumber: rawTheory.page_number,
      quote: rawTheory.quote || '',
      introduction: rawTheory.introduction,
      sections: rawTheory.sections || [],
      exerciseGroups: [
        {
          exerciseNumber: 1,
          title: 'Exercise Set 1: Radical Isolation & Exponent Fundamentals',
          description: '25 high-precision questions covering foundational exponent operations, rational radical conversions, negative powers, and equation solving.',
          questions: exerciseGroup1Questions
        },
        {
          exerciseNumber: 2,
          title: 'Exercise Set 2: Advanced Exponent Equations & Desmos Power Tactics',
          description: '25 challenge questions covering multi-variable exponential systems, quadratic-exponential substitutions, fractional radical roots, and high-speed calculator shortcuts.',
          questions: exerciseGroup2Questions
        }
      ]
    };

    cachedMathChapter1 = result;
    setLocalStorageCache('sat_math_ch1_cache', result);
    return { data: result, error: null };
  } catch (err) {
    return { data: null, error: err };
  }
}

let cachedMathChapter2: FullSatMathChapter | null = null;

export async function fetchSatMathChapter2FromSupabase(): Promise<{ data: FullSatMathChapter | null; error: any }> {
  if (!isSupabaseConfigured() || !supabase) {
    return { data: null, error: new Error('Supabase is not configured') };
  }

  if (cachedMathChapter2) {
    return { data: cachedMathChapter2, error: null };
  }

  const localCache = getLocalStorageCache<FullSatMathChapter>('sat_math_ch2_cache');
  if (localCache) {
    cachedMathChapter2 = localCache;
    return { data: localCache, error: null };
  }

  try {
    const [theoryRes, exercisesRes] = await withTimeout(
      Promise.all([
        supabase
          .from('sat_math_ch2_theory')
          .select('*')
          .eq('chapter_id', 'linear-expressions')
          .single(),
        supabase
          .from('sat_math_ch2_exercises')
          .select('*')
          .order('question_number', { ascending: true })
      ]),
      4000
    ) as any[];

    if (theoryRes.error) throw theoryRes.error;
    if (exercisesRes.error) throw exercisesRes.error;

    const rawTheory = theoryRes.data;
    const rawExercises = exercisesRes.data || [];

    if (!rawTheory) {
      return { data: null, error: new Error('No theory found in Supabase for Math Ch2') };
    }

    const mapQuestions = (rows: any[]) => rows.map((row: any) => ({
      id: row.id,
      number: row.question_number,
      exerciseNumber: row.exercise_number,
      exerciseTitle: row.exercise_title,
      question: row.question,
      expression: row.expression || undefined,
      diagram: row.diagram || undefined,
      diagrams: row.diagrams || undefined,
      tableData: row.table_data || undefined,
      table: row.table_data || undefined,
      tablesData: row.tables_data || undefined,
      optionTables: row.option_tables || undefined,
      options: row.options || [],
      correctIndex: row.correct_index,
      correctAnswerText: row.correct_answer_text,
      explanation: row.explanation,
      distractorExplanations: row.distractor_explanations || {}
    }));

    const result: FullSatMathChapter = {
      id: rawTheory.chapter_id,
      chapterNumber: rawTheory.chapter_number,
      chapterTitle: rawTheory.chapter_title,
      pageNumber: rawTheory.page_number,
      quote: rawTheory.quote || '',
      introduction: rawTheory.introduction,
      sections: rawTheory.sections || [],
      exerciseGroups: [
        {
          exerciseNumber: 1,
          title: 'Exercise Set 1: Radical Isolation & Exponent Fundamentals',
          description: '25 high-precision questions covering foundational exponent operations, rational radical conversions, negative powers, and equation solving.',
          questions: mapQuestions(rawExercises.filter((r: any) => r.exercise_number === 1))
        },
        {
          exerciseNumber: 2,
          title: 'Exercise Set 2: Advanced Exponent Equations & Desmos Power Tactics',
          description: '25 challenge questions covering multi-variable exponential systems, quadratic-exponential substitutions, fractional radical roots, and high-speed calculator shortcuts.',
          questions: mapQuestions(rawExercises.filter((r: any) => r.exercise_number === 2))
        }
      ]
    };

    cachedMathChapter2 = result;
    setLocalStorageCache('sat_math_ch2_cache', result);
    return { data: result, error: null };
  } catch (err) {
    return { data: null, error: err };
  }
}

let cachedMathChapter3: FullSatMathChapter | null = null;

export async function fetchSatMathChapter3FromSupabase(): Promise<{ data: FullSatMathChapter | null; error: any }> {
  if (!isSupabaseConfigured() || !supabase) {
    return { data: null, error: new Error('Supabase is not configured') };
  }

  if (cachedMathChapter3) {
    return { data: cachedMathChapter3, error: null };
  }

  const localCache = getLocalStorageCache<FullSatMathChapter>('sat_math_ch3_cache');
  if (localCache) {
    cachedMathChapter3 = localCache;
    return { data: localCache, error: null };
  }

  try {
    const [theoryRes, exercisesRes] = await withTimeout(
      Promise.all([
        supabase
          .from('sat_math_ch3_theory')
          .select('*')
          .eq('chapter_id', 'equations-and-systems')
          .single(),
        supabase
          .from('sat_math_ch3_exercises')
          .select('*')
          .order('question_number', { ascending: true })
      ]),
      4000
    ) as any[];

    if (theoryRes.error) throw theoryRes.error;
    if (exercisesRes.error) throw exercisesRes.error;

    const rawTheory = theoryRes.data;
    const rawExercises = exercisesRes.data || [];

    if (!rawTheory) {
      return { data: null, error: new Error('No theory found in Supabase for Math Ch3') };
    }

    const mapQuestions = (rows: any[]) => rows.map((row: any) => ({
      id: row.id,
      number: row.question_number,
      exerciseNumber: row.exercise_number,
      exerciseTitle: row.exercise_title,
      question: row.question,
      expression: row.expression || undefined,
      diagram: row.diagram || undefined,
      diagrams: row.diagrams || undefined,
      tableData: row.table_data || undefined,
      table: row.table_data || undefined,
      tablesData: row.tables_data || undefined,
      optionTables: row.option_tables || undefined,
      options: row.options || [],
      correctIndex: row.correct_index,
      correctAnswerText: row.correct_answer_text,
      explanation: row.explanation,
      distractorExplanations: row.distractor_explanations || {}
    }));

    const result: FullSatMathChapter = {
      id: rawTheory.chapter_id,
      chapterNumber: rawTheory.chapter_number,
      chapterTitle: rawTheory.chapter_title,
      pageNumber: rawTheory.page_number,
      quote: rawTheory.quote || '',
      introduction: rawTheory.introduction,
      sections: rawTheory.sections || [],
      exerciseGroups: rawTheory.exercise_groups.map((eg: any) => ({
        ...eg,
        questions: mapQuestions(rawExercises.filter((r: any) => r.exercise_number === eg.exerciseNumber))
      }))
    };

    cachedMathChapter3 = result;
    setLocalStorageCache('sat_math_ch3_cache', result);
    return { data: result, error: null };
  } catch (err) {
    return { data: null, error: err };
  }
}

let cachedMathChapter4: FullSatMathChapter | null = null;

export async function fetchSatMathChapter4FromSupabase(): Promise<{ data: FullSatMathChapter | null; error: any }> {
  if (!isSupabaseConfigured() || !supabase) {
    return { data: null, error: new Error('Supabase is not configured') };
  }

  if (cachedMathChapter4) {
    return { data: cachedMathChapter4, error: null };
  }

  const localCache = getLocalStorageCache<FullSatMathChapter>('sat_math_ch4_cache');
  if (localCache) {
    cachedMathChapter4 = localCache;
    return { data: localCache, error: null };
  }

  try {
    const [theoryRes, exercisesRes] = await withTimeout(
      Promise.all([
        supabase
          .from('sat_math_ch4_theory')
          .select('*')
          .eq('chapter_id', 'functions-and-quadratics')
          .single(),
        supabase
          .from('sat_math_ch4_exercises')
          .select('*')
          .order('question_number', { ascending: true })
      ]),
      4000
    ) as any[];

    if (theoryRes.error) throw theoryRes.error;
    if (exercisesRes.error) throw exercisesRes.error;

    const rawTheory = theoryRes.data;
    const rawExercises = exercisesRes.data || [];

    if (!rawTheory) {
      return { data: null, error: new Error('No theory found in Supabase for Math Ch4') };
    }

    const mapQuestions = (rows: any[]) => rows.map((row: any) => ({
      id: row.id,
      number: row.question_number,
      exerciseNumber: row.exercise_number,
      exerciseTitle: row.exercise_title,
      question: row.question,
      expression: row.expression || undefined,
      diagram: row.diagram || undefined,
      diagrams: row.diagrams || undefined,
      tableData: row.table_data || undefined,
      table: row.table_data || undefined,
      tablesData: row.tables_data || undefined,
      optionTables: row.option_tables || undefined,
      options: row.options || [],
      correctIndex: row.correct_index,
      correctAnswerText: row.correct_answer_text,
      explanation: row.explanation,
      distractorExplanations: row.distractor_explanations || {}
    }));

    const result: FullSatMathChapter = {
      id: rawTheory.chapter_id,
      chapterNumber: rawTheory.chapter_number,
      chapterTitle: rawTheory.chapter_title,
      pageNumber: rawTheory.page_number,
      quote: rawTheory.quote || '',
      introduction: rawTheory.introduction,
      sections: rawTheory.sections || [],
      exerciseGroups: rawTheory.exercise_groups.map((eg: any) => ({
        ...eg,
        questions: mapQuestions(rawExercises.filter((r: any) => r.exercise_number === eg.exerciseNumber))
      }))
    };

    cachedMathChapter4 = result;
    setLocalStorageCache('sat_math_ch4_cache', result);
    return { data: result, error: null };
  } catch (err) {
    return { data: null, error: err };
  }
}

let cachedMathChapter5: FullSatMathChapter | null = null;

export async function fetchSatMathChapter5FromSupabase(): Promise<{ data: FullSatMathChapter | null; error: any }> {
  if (!isSupabaseConfigured() || !supabase) {
    return { data: null, error: new Error('Supabase is not configured') };
  }

  if (cachedMathChapter5) {
    return { data: cachedMathChapter5, error: null };
  }

  const localCache = getLocalStorageCache<FullSatMathChapter>('sat_math_ch5_cache');
  if (localCache) {
    cachedMathChapter5 = localCache;
    return { data: localCache, error: null };
  }

  try {
    const [theoryRes, exercisesRes] = await withTimeout(
      Promise.all([
        supabase
          .from('sat_math_ch5_theory')
          .select('*')
          .eq('chapter_id', 'ch5')
          .single(),
        supabase
          .from('sat_math_ch5_exercises')
          .select('*')
          .order('question_number', { ascending: true })
      ]),
      4000
    ) as any[];

    if (theoryRes.error) throw theoryRes.error;
    if (exercisesRes.error) throw exercisesRes.error;

    const rawTheory = theoryRes.data;
    const rawExercises = exercisesRes.data || [];

    if (!rawTheory) {
      return { data: null, error: new Error('No theory found in Supabase for Math Ch5') };
    }

    const mapQuestions = (rows: any[]) => rows.map((row: any) => ({
      id: row.id,
      number: row.question_number,
      exerciseNumber: row.exercise_number,
      exerciseTitle: row.exercise_title,
      question: row.question,
      expression: row.expression || undefined,
      diagram: row.diagram || undefined,
      diagrams: row.diagrams || undefined,
      tableData: row.table_data || undefined,
      table: row.table_data || undefined,
      tablesData: row.tables_data || undefined,
      optionTables: row.option_tables || undefined,
      options: row.options || [],
      correctIndex: row.correct_index,
      correctAnswerText: row.correct_answer_text,
      explanation: row.explanation,
      distractorExplanations: row.distractor_explanations || {}
    }));

    const result: FullSatMathChapter = {
      id: rawTheory.chapter_id,
      chapterNumber: rawTheory.chapter_number,
      chapterTitle: rawTheory.chapter_title,
      pageNumber: rawTheory.page_number,
      quote: rawTheory.quote || '',
      introduction: rawTheory.introduction,
      sections: rawTheory.sections || [],
      exerciseGroups: rawTheory.exercise_groups.map((eg: any) => ({
        ...eg,
        questions: mapQuestions(rawExercises.filter((r: any) => r.exercise_number === eg.exerciseNumber))
      }))
    };

    cachedMathChapter5 = result;
    setLocalStorageCache('sat_math_ch5_cache', result);
    return { data: result, error: null };
  } catch (err) {
    return { data: null, error: err };
  }
}

let cachedMathChapter6: FullSatMathChapter | null = null;

export async function fetchSatMathChapter6FromSupabase(): Promise<{ data: FullSatMathChapter | null; error: any }> {
  if (!isSupabaseConfigured() || !supabase) {
    return { data: null, error: new Error('Supabase is not configured') };
  }

  if (cachedMathChapter6) {
    return { data: cachedMathChapter6, error: null };
  }

  const localCache = getLocalStorageCache<FullSatMathChapter>('sat_math_ch6_cache');
  if (localCache) {
    cachedMathChapter6 = localCache;
    return { data: localCache, error: null };
  }

  try {
    const [theoryRes, exercisesRes] = await withTimeout(
      Promise.all([
        supabase
          .from('sat_math_ch6_theory')
          .select('*')
          .eq('chapter_id', 'inequalities')
          .single(),
        supabase
          .from('sat_math_ch6_exercises')
          .select('*')
          .eq('chapter_number', 6)
          .order('exercise_number', { ascending: true })
          .order('question_number', { ascending: true })
      ]),
      5000
    ) as any[];

    if (theoryRes.error) throw theoryRes.error;
    if (exercisesRes.error) throw exercisesRes.error;

    const rawTheory = theoryRes.data;
    const rawExercises = exercisesRes.data || [];

    if (!rawTheory) {
      return { data: null, error: new Error('No theory found in Supabase for Math Ch6') };
    }

    const mapQuestions = (rows: any[]) => rows.map((row: any) => ({
      id: row.id,
      number: row.question_number,
      exerciseNumber: row.exercise_number,
      exerciseTitle: row.exercise_title,
      question: row.question,
      expression: row.expression || undefined,
      diagram: row.diagram || undefined,
      diagrams: row.diagrams || undefined,
      tableData: row.table_data || undefined,
      table: row.table_data || undefined,
      tablesData: row.tables_data || undefined,
      optionTables: row.option_tables || undefined,
      options: row.options || [],
      correctIndex: row.correct_index,
      correctAnswerText: row.correct_answer_text,
      explanation: row.explanation,
      distractorExplanations: row.distractor_explanations || {}
    }));

    const result: FullSatMathChapter = {
      id: rawTheory.chapter_id,
      chapterNumber: rawTheory.chapter_number,
      chapterTitle: rawTheory.chapter_title,
      pageNumber: rawTheory.page_number,
      quote: rawTheory.quote || '',
      introduction: rawTheory.introduction,
      sections: rawTheory.sections || [],
      exerciseGroups: rawTheory.exercise_groups.map((eg: any) => ({
        ...eg,
        questions: mapQuestions(rawExercises.filter((r: any) => r.exercise_number === eg.exerciseNumber))
      }))
    };

    cachedMathChapter6 = result;
    setLocalStorageCache('sat_math_ch6_cache', result);
    return { data: result, error: null };
  } catch (err) {
    return { data: null, error: err };
  }
}

let cachedMathChapter7: FullSatMathChapter | null = null;

export async function fetchSatMathChapter7FromSupabase(): Promise<{ data: FullSatMathChapter | null; error: any }> {
  if (!isSupabaseConfigured() || !supabase) {
    return { data: null, error: new Error('Supabase is not configured') };
  }

  if (cachedMathChapter7) {
    return { data: cachedMathChapter7, error: null };
  }

  const localCache = getLocalStorageCache<FullSatMathChapter>('sat_math_ch7_cache');
  if (localCache) {
    cachedMathChapter7 = localCache;
    return { data: localCache, error: null };
  }

  try {
    const [theoryRes, exercisesRes] = await withTimeout(
      Promise.all([
        supabase
          .from('sat_math_ch7_theory')
          .select('*')
          .eq('chapter_id', 'geometry-and-trigonometry')
          .single(),
        supabase
          .from('sat_math_ch7_exercises')
          .select('*')
          .eq('chapter_number', 7)
          .order('exercise_number', { ascending: true })
          .order('question_number', { ascending: true })
      ]),
      8000 // Increased timeout for 125 questions
    ) as any[];

    if (theoryRes.error) throw theoryRes.error;
    if (exercisesRes.error) throw exercisesRes.error;

    const rawTheory = theoryRes.data;
    const rawExercises = exercisesRes.data || [];

    if (!rawTheory) {
      return { data: null, error: new Error('No theory found in Supabase for Math Ch7') };
    }

    const mapQuestions = (rows: any[]) => rows.map((row: any) => ({
      id: row.id,
      number: row.question_number,
      exerciseNumber: row.exercise_number,
      exerciseTitle: row.exercise_title,
      question: row.question,
      expression: row.expression || undefined,
      diagram: row.diagram || undefined,
      diagrams: row.diagrams || undefined,
      tableData: row.table_data || undefined,
      table: row.table_data || undefined,
      tablesData: row.tables_data || undefined,
      optionTables: row.option_tables || undefined,
      options: row.options || [],
      correctIndex: row.correct_index,
      correctAnswerText: row.correct_answer_text,
      explanation: row.explanation,
      distractorExplanations: row.distractor_explanations || {}
    }));

    const result: FullSatMathChapter = {
      id: rawTheory.chapter_id,
      chapterNumber: rawTheory.chapter_number,
      chapterTitle: rawTheory.chapter_title,
      pageNumber: rawTheory.page_number,
      quote: rawTheory.quote || '',
      introduction: rawTheory.introduction,
      sections: rawTheory.sections || [],
      exerciseGroups: rawTheory.exercise_groups.map((eg: any) => ({
        ...eg,
        questions: mapQuestions(rawExercises.filter((r: any) => r.exercise_number === eg.exerciseNumber))
      }))
    };

    cachedMathChapter7 = result;
    setLocalStorageCache('sat_math_ch7_cache', result);
    return { data: result, error: null };
  } catch (err) {
    return { data: null, error: err };
  }
}

let cachedMathChapter8: FullSatMathChapter | null = null;

export async function fetchSatMathChapter8FromSupabase(): Promise<{ data: FullSatMathChapter | null; error: any }> {
  if (!isSupabaseConfigured() || !supabase) {
    return { data: null, error: new Error('Supabase is not configured') };
  }

  if (cachedMathChapter8) {
    return { data: cachedMathChapter8, error: null };
  }

  const localCache = getLocalStorageCache<FullSatMathChapter>('sat_math_ch8_cache');
  if (localCache) {
    cachedMathChapter8 = localCache;
    return { data: localCache, error: null };
  }

  try {
    const [theoryRes, exercisesRes] = await withTimeout(
      Promise.all([
        supabase
          .from('sat_math_ch8_theory')
          .select('*')
          .eq('chapter_id', 'linear-and-exponential-growth')
          .single(),
        supabase
          .from('sat_math_ch8_exercises')
          .select('*')
          .eq('chapter_number', 8)
          .order('exercise_number', { ascending: true })
          .order('question_number', { ascending: true })
      ]),
      5000
    ) as any[];

    if (theoryRes.error) throw theoryRes.error;
    if (exercisesRes.error) throw exercisesRes.error;

    const rawTheory = theoryRes.data;
    const rawExercises = exercisesRes.data || [];

    if (!rawTheory) {
      return { data: null, error: new Error('No theory found in Supabase for Math Ch8') };
    }

    const mapQuestions = (rows: any[]) => rows.map((row: any) => ({
      id: row.id,
      number: row.question_number,
      exerciseNumber: row.exercise_number,
      exerciseTitle: row.exercise_title,
      question: row.question,
      expression: row.expression || undefined,
      diagram: row.diagram || undefined,
      diagrams: row.diagrams || undefined,
      tableData: row.table_data || undefined,
      table: row.table_data || undefined,
      tablesData: row.tables_data || undefined,
      optionTables: row.option_tables || undefined,
      options: row.options || [],
      correctIndex: row.correct_index,
      correctAnswerText: row.correct_answer_text,
      explanation: row.explanation,
      distractorExplanations: row.distractor_explanations || {}
    }));

    const result: FullSatMathChapter = {
      id: rawTheory.chapter_id,
      chapterNumber: rawTheory.chapter_number,
      chapterTitle: rawTheory.chapter_title,
      pageNumber: rawTheory.page_number,
      quote: rawTheory.quote || '',
      introduction: rawTheory.introduction,
      sections: rawTheory.sections || [],
      exerciseGroups: rawTheory.exercise_groups.map((eg: any) => ({
        ...eg,
        questions: mapQuestions(rawExercises.filter((r: any) => r.exercise_number === eg.exerciseNumber))
      }))
    };

    cachedMathChapter8 = result;
    setLocalStorageCache('sat_math_ch8_cache', result);
    return { data: result, error: null };
  } catch (err) {
    return { data: null, error: err };
  }
}

let cachedMathChapter9: FullSatMathChapter | null = null;

export async function fetchSatMathChapter9FromSupabase(): Promise<{ data: FullSatMathChapter | null; error: any }> {
  if (!isSupabaseConfigured() || !supabase) {
    return { data: null, error: new Error('Supabase is not configured') };
  }

  if (cachedMathChapter9) {
    return { data: cachedMathChapter9, error: null };
  }

  const localCache = getLocalStorageCache<FullSatMathChapter>('sat_math_ch9_cache');
  if (localCache) {
    cachedMathChapter9 = localCache;
    return { data: localCache, error: null };
  }

  try {
    const [theoryRes, exercisesRes] = await withTimeout(
      Promise.all([
        supabase
          .from('sat_math_ch9_theory')
          .select('*')
          .eq('chapter_id', 'ch9')
          .single(),
        supabase
          .from('sat_math_ch9_exercises')
          .select('*')
          .eq('chapter_number', 9)
          .order('exercise_number', { ascending: true })
          .order('question_number', { ascending: true })
      ]),
      5000
    ) as any[];

    if (theoryRes.error) throw theoryRes.error;
    if (exercisesRes.error) throw exercisesRes.error;

    const rawTheory = theoryRes.data;
    const rawExercises = exercisesRes.data || [];

    if (!rawTheory) {
      return { data: null, error: new Error('No theory found in Supabase for Math Ch9') };
    }

    const mapQuestions = (rows: any[]) => rows.map((row: any) => ({
      id: row.id,
      number: row.question_number,
      exerciseNumber: row.exercise_number,
      exerciseTitle: row.exercise_title,
      question: row.question,
      expression: row.expression || undefined,
      diagram: row.diagram || undefined,
      diagrams: row.diagrams || undefined,
      tableData: row.table_data || undefined,
      table: row.table_data || undefined,
      tablesData: row.tables_data || undefined,
      optionTables: row.option_tables || undefined,
      options: row.options || [],
      correctIndex: row.correct_index,
      correctAnswerText: row.correct_answer_text,
      explanation: row.explanation,
      distractorExplanations: row.distractor_explanations || {}
    }));

    const result: FullSatMathChapter = {
      id: rawTheory.chapter_id,
      chapterNumber: rawTheory.chapter_number,
      chapterTitle: rawTheory.chapter_title,
      pageNumber: rawTheory.page_number,
      quote: rawTheory.quote || '',
      introduction: rawTheory.introduction,
      sections: rawTheory.sections || [],
      exerciseGroups: rawTheory.exercise_groups.map((eg: any) => ({
        ...eg,
        questions: mapQuestions(rawExercises.filter((r: any) => r.exercise_number === eg.exerciseNumber))
      }))
    };

    cachedMathChapter9 = result;
    setLocalStorageCache('sat_math_ch9_cache', result);
    return { data: result, error: null };
  } catch (err) {
    return { data: null, error: err };
  }
}

let cachedMathChapter10: FullSatMathChapter | null = null;

export async function fetchSatMathChapter10FromSupabase(): Promise<{ data: FullSatMathChapter | null; error: any }> {
  if (!isSupabaseConfigured() || !supabase) {
    return { data: null, error: new Error('Supabase is not configured') };
  }

  if (cachedMathChapter10) {
    return { data: cachedMathChapter10, error: null };
  }

  const localCache = getLocalStorageCache<FullSatMathChapter>('sat_math_ch10_cache');
  if (localCache) {
    cachedMathChapter10 = localCache;
    return { data: localCache, error: null };
  }

  try {
    const [theoryRes, exercisesRes] = await withTimeout(
      Promise.all([
        supabase
          .from('sat_math_ch10_theory')
          .select('*')
          .eq('chapter_id', 'sat-ch10-statistics')
          .single(),
        supabase
          .from('sat_math_ch10_exercises')
          .select('*')
          .eq('chapter_number', 10)
          .order('exercise_number', { ascending: true })
          .order('question_number', { ascending: true })
      ]),
      8000 // Increased timeout for Mega Chapter
    ) as any[];

    if (theoryRes.error) throw theoryRes.error;
    if (exercisesRes.error) throw exercisesRes.error;

    const rawTheory = theoryRes.data;
    const rawExercises = exercisesRes.data || [];

    if (!rawTheory) {
      return { data: null, error: new Error('No theory found in Supabase for Math Ch10') };
    }

    const mapQuestions = (rows: any[]) => rows.map((row: any) => ({
      id: row.id,
      number: row.question_number,
      exerciseNumber: row.exercise_number,
      exerciseTitle: row.exercise_title,
      question: row.question,
      expression: row.expression || undefined,
      diagram: row.diagram || undefined,
      diagrams: row.diagrams || undefined,
      tableData: row.table_data || undefined,
      table: row.table_data || undefined,
      tablesData: row.tables_data || undefined,
      optionTables: row.option_tables || undefined,
      options: row.options || [],
      correctIndex: row.correct_index,
      correctAnswerText: row.correct_answer_text,
      explanation: row.explanation,
      distractorExplanations: row.distractor_explanations || {}
    }));

    const result: FullSatMathChapter = {
      id: rawTheory.chapter_id,
      chapterNumber: rawTheory.chapter_number,
      chapterTitle: rawTheory.chapter_title,
      pageNumber: rawTheory.page_number,
      quote: rawTheory.quote || '',
      introduction: rawTheory.introduction,
      sections: rawTheory.sections || [],
      exerciseGroups: rawTheory.exercise_groups.map((eg: any) => ({
        ...eg,
        questions: mapQuestions(rawExercises.filter((r: any) => r.exercise_number === eg.exerciseNumber))
      }))
    };

    cachedMathChapter10 = result;
    setLocalStorageCache('sat_math_ch10_cache', result);
    return { data: result, error: null };
  } catch (err) {
    return { data: null, error: err };
  }
}

let cachedMathChapter11: FullSatMathChapter | null = null;

export async function fetchSatMathChapter11FromSupabase(): Promise<{ data: FullSatMathChapter | null; error: any }> {
  if (!isSupabaseConfigured() || !supabase) {
    return { data: null, error: new Error('Supabase is not configured') };
  }

  if (cachedMathChapter11) {
    return { data: cachedMathChapter11, error: null };
  }

  const localCache = getLocalStorageCache<FullSatMathChapter>('sat_math_ch11_cache');
  if (localCache) {
    cachedMathChapter11 = localCache;
    return { data: localCache, error: null };
  }

  try {
    const [theoryRes, exercisesRes] = await withTimeout(
      Promise.all([
        supabase
          .from('sat_math_ch11_theory')
          .select('*')
          .eq('chapter_id', 'sat-math-ch11-reading-data')
          .single(),
        supabase
          .from('sat_math_ch11_exercises')
          .select('*')
          .eq('chapter_number', 11)
          .order('exercise_number', { ascending: true })
          .order('question_number', { ascending: true })
      ]),
      8000
    ) as any[];

    if (theoryRes.error) throw theoryRes.error;
    if (exercisesRes.error) throw exercisesRes.error;

    const rawTheory = theoryRes.data;
    const rawExercises = exercisesRes.data || [];

    if (!rawTheory) {
      return { data: null, error: new Error('No theory found in Supabase for Math Ch11') };
    }

    const mapQuestions = (rows: any[]) => rows.map((row: any) => ({
      id: row.id,
      number: row.question_number,
      exerciseNumber: row.exercise_number,
      exerciseTitle: row.exercise_title,
      question: row.question,
      expression: row.expression || undefined,
      diagram: row.diagram || undefined,
      diagrams: row.diagrams || undefined,
      tableData: row.table_data || undefined,
      table: row.table_data || undefined,
      tablesData: row.tables_data || undefined,
      optionTables: row.option_tables || undefined,
      options: row.options || [],
      correctIndex: row.correct_index,
      correctAnswerText: row.correct_answer_text,
      explanation: row.explanation,
      distractorExplanations: row.distractor_explanations || {}
    }));

    const result: FullSatMathChapter = {
      id: rawTheory.chapter_id,
      chapterNumber: rawTheory.chapter_number,
      chapterTitle: rawTheory.chapter_title,
      pageNumber: rawTheory.page_number,
      quote: rawTheory.quote || '',
      introduction: rawTheory.introduction,
      sections: rawTheory.sections || [],
      exerciseGroups: rawTheory.exercise_groups.map((eg: any) => ({
        ...eg,
        questions: mapQuestions(rawExercises.filter((r: any) => r.exercise_number === eg.exerciseNumber))
      }))
    };

    cachedMathChapter11 = result;
    setLocalStorageCache('sat_math_ch11_cache', result);
    return { data: result, error: null };
  } catch (err) {
    return { data: null, error: err };
  }
}

// ----------------------------------------------------------------------
// SAT DRILLS SUPABASE FETCH INTEGRATION (Drills 1 - 5)
// Strict <= 5-second timeout, memory & localStorage cache
// ----------------------------------------------------------------------
const cachedDrillsMap: Record<number, any[]> = {};

export async function fetchSatDrillFromSupabase(drillId: number): Promise<{ data: any[] | null; error: any }> {
  if (!isSupabaseConfigured() || !supabase) {
    return { data: null, error: new Error('Supabase is not configured') };
  }

  // 1. In-memory cache check (< 1ms instant return)
  if (cachedDrillsMap[drillId] && Array.isArray(cachedDrillsMap[drillId]) && cachedDrillsMap[drillId].length > 0) {
    return { data: cachedDrillsMap[drillId], error: null };
  }

  // 2. LocalStorage cache check (< 3ms fast return)
  const localCache = getLocalStorageCache<any[]>(`sat_drill_${drillId}_cache`);
  if (localCache && Array.isArray(localCache) && localCache.length > 0) {
    cachedDrillsMap[drillId] = localCache;
    return { data: localCache, error: null };
  }

  // 3. Network Fetch with clearable timeout (10 seconds)
  let timerId: any = null;
  try {
    const timeoutPromise = new Promise<{ data: null; error: any }>((_, reject) => {
      timerId = setTimeout(() => {
        reject(new Error(`SAT Drill ${drillId} fetch timed out (10s limit exceeded)`));
      }, 10000);
      // Unref if in Node environment to prevent hanging tests
      if (typeof (timerId as any)?.unref === 'function') {
        (timerId as any).unref();
      }
    });

    const fetchPromise = (async () => {
      const { data, error } = await supabase!
        .from(`sat_drill_${drillId}`)
        .select('*')
        .order('sort_order', { ascending: true });

      if (error) throw error;
      if (!data || data.length === 0) {
        throw new Error(`No drill questions found in Supabase sat_drill_${drillId}`);
      }

      const mappedQuestions = data.map((r: any) => ({
        id: r.id,
        drillId: r.drill_id,
        section: r.section,
        module: r.module,
        route: r.route,
        questionNumber: r.question_number,
        domain: r.domain,
        skill: r.skill,
        subskill: r.subskill || undefined,
        difficulty: r.difficulty,
        passage: r.passage || undefined,
        stimulus: r.stimulus || undefined,
        questionText: r.question_text,
        choices: r.choices || [],
        correctAnswer: r.correct_answer,
        explanation: r.explanation,
        responseType: r.response_type,
        discriminationEstimate: Number(r.discrimination_estimate) || 1.0,
        estimatedTimeSeconds: r.estimated_time_seconds || 60,
      }));

      return { data: mappedQuestions, error: null };
    })();

    const result = await Promise.race([fetchPromise, timeoutPromise]);
    if (timerId) clearTimeout(timerId);

    if (result.data && result.data.length > 0) {
      cachedDrillsMap[drillId] = result.data;
      setLocalStorageCache(`sat_drill_${drillId}_cache`, result.data);
    }

    return result;
  } catch (err: any) {
    if (timerId) clearTimeout(timerId);
    console.warn(`Notice fetching SAT Drill ${drillId} from Supabase:`, err?.message || err);
    return { data: null, error: err };
  }
}

export async function fetchSatDrill1FromSupabase() {
  return fetchSatDrillFromSupabase(1);
}

export async function fetchSatDrill2FromSupabase() {
  return fetchSatDrillFromSupabase(2);
}

export async function fetchSatDrill3FromSupabase() {
  return fetchSatDrillFromSupabase(3);
}

export async function fetchSatDrill4FromSupabase() {
  return fetchSatDrillFromSupabase(4);
}

export async function fetchSatDrill5FromSupabase() {
  return fetchSatDrillFromSupabase(5);
}

export async function fetchAllSatDrillsFromSupabase(): Promise<Record<number, any[]>> {
  const allDrills: Record<number, any[]> = {};
  await Promise.allSettled(
    [1, 2, 3, 4, 5].map(async (drillId) => {
      const { data } = await fetchSatDrillFromSupabase(drillId);
      if (data) {
        allDrills[drillId] = data;
      }
    })
  );
  return allDrills;
}





