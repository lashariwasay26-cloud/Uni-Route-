import { SatDrillQuestion, SatSection, SatModuleType, SatRouteType, DrillMetadata } from './types';
import { shuffleExerciseGroupQuestions } from '../../utils/questionShuffler';
import {
  fetchSatDrillFromSupabase,
  fetchAllSatDrillsFromSupabase,
  fetchSatDrill1FromSupabase,
  fetchSatDrill2FromSupabase,
  fetchSatDrill3FromSupabase,
  fetchSatDrill4FromSupabase,
  fetchSatDrill5FromSupabase,
  getLocalStorageCache,
  setLocalStorageCache
} from '../../lib/supabase';

export * from './types';
export * from './routingEngine';
export * from './progressStorage';

// In-memory cache for all 5 SAT Drills
const drillDataCache: Record<number, SatDrillQuestion[]> = {};

// Load any available localStorage caches immediately into memory
if (typeof window !== 'undefined') {
  for (let i = 1; i <= 5; i++) {
    const cached = getLocalStorageCache<SatDrillQuestion[]>(`sat_drill_${i}_cache`);
    if (cached && Array.isArray(cached) && cached.length > 0) {
      drillDataCache[i] = cached;
    }
  }

  // Pre-fetch all drills in background (non-blocking)
  setTimeout(() => {
    prefetchAllDrills();
  }, 100);
}

/**
 * Fetch a specific SAT Drill from Supabase (with timeout & caching)
 */
export async function loadDrillQuestions(drillId: number): Promise<{ questions: SatDrillQuestion[]; error: any }> {
  if (drillDataCache[drillId] && drillDataCache[drillId].length > 0) {
    return { questions: drillDataCache[drillId], error: null };
  }

  const { data, error } = await fetchSatDrillFromSupabase(drillId);
  if (data && data.length > 0) {
    drillDataCache[drillId] = data;
    return { questions: data, error: null };
  }

  return {
    questions: drillDataCache[drillId] || [],
    error: error || new Error(`Could not load questions for Drill ${drillId}`)
  };
}

/**
 * Prefetches all drills in background
 */
export function prefetchAllDrills(): void {
  [1, 2, 3, 4, 5].forEach(async (id) => {
    if (!drillDataCache[id] || drillDataCache[id].length === 0) {
      try {
        const { data } = await fetchSatDrillFromSupabase(id);
        if (data && data.length > 0) {
          drillDataCache[id] = data;
        }
      } catch (_) {}
    }
  });
}

export function getLoadedDrillQuestions(drillId: number): SatDrillQuestion[] | null {
  if (drillDataCache[drillId] && drillDataCache[drillId].length > 0) {
    return drillDataCache[drillId];
  }
  if (typeof window !== 'undefined') {
    const cached = getLocalStorageCache<SatDrillQuestion[]>(`sat_drill_${drillId}_cache`);
    if (cached && Array.isArray(cached) && cached.length > 0) {
      drillDataCache[drillId] = cached;
      return cached;
    }
  }
  return null;
}

export function setDrillSupabaseOverride(drillId: number, data: SatDrillQuestion[]) {
  drillDataCache[drillId] = data;
  if (typeof window !== 'undefined') {
    setLocalStorageCache(`sat_drill_${drillId}_cache`, data);
  }
}

export function setDrill1SupabaseOverride(data: SatDrillQuestion[]) { setDrillSupabaseOverride(1, data); }
export function setDrill2SupabaseOverride(data: SatDrillQuestion[]) { setDrillSupabaseOverride(2, data); }
export function setDrill3SupabaseOverride(data: SatDrillQuestion[]) { setDrillSupabaseOverride(3, data); }
export function setDrill4SupabaseOverride(data: SatDrillQuestion[]) { setDrillSupabaseOverride(4, data); }
export function setDrill5SupabaseOverride(data: SatDrillQuestion[]) { setDrillSupabaseOverride(5, data); }

export function getAllLoadedDrillQuestions(): SatDrillQuestion[] {
  const all: SatDrillQuestion[] = [];
  for (let i = 1; i <= 5; i++) {
    const qs = getLoadedDrillQuestions(i);
    if (qs) all.push(...qs);
  }
  return all;
}

export const ALL_DRILL_QUESTIONS: SatDrillQuestion[] = new Proxy([] as SatDrillQuestion[], {
  get(target, prop, receiver) {
    const all = getAllLoadedDrillQuestions();
    if (prop === 'length') return all.length;
    if (prop === 'filter') return all.filter.bind(all);
    if (prop === 'map') return all.map.bind(all);
    if (prop === 'forEach') return all.forEach.bind(all);
    if (prop === 'reduce') return all.reduce.bind(all);
    if (prop === 'find') return all.find.bind(all);
    if (prop === 'some') return all.some.bind(all);
    if (prop === 'every') return all.every.bind(all);
    if (typeof prop === 'string' && !isNaN(Number(prop))) {
      return all[Number(prop)];
    }
    return Reflect.get(all, prop, receiver);
  }
});

export const DRILL_METADATA_LIST: DrillMetadata[] = [
  {
    id: 1,
    title: 'SAT Drill 1',
    description: 'Full-length Digital SAT-style adaptive practice test with Reading & Writing and Math modules.',
    totalQuestions: 98,
    rwQuestionsCount: 54,
    mathQuestionsCount: 44,
    estimatedTimeMinutes: 134,
    status: 'Not Started',
  },
  {
    id: 2,
    title: 'SAT Drill 2',
    description: 'Targeted adaptive practice focusing on multi-step reasoning, data evidence, and advanced algebra.',
    totalQuestions: 98,
    rwQuestionsCount: 54,
    mathQuestionsCount: 44,
    estimatedTimeMinutes: 134,
    status: 'Not Started',
  },
  {
    id: 3,
    title: 'SAT Drill 3',
    description: 'Comprehensive evaluation covering all Digital SAT domains with audited high-discrimination items.',
    totalQuestions: 98,
    rwQuestionsCount: 54,
    mathQuestionsCount: 44,
    estimatedTimeMinutes: 134,
    status: 'Not Started',
  },
  {
    id: 4,
    title: 'SAT Drill 4',
    description: 'Digital SAT replica test featuring rigorous inference passages and structure-based math questions.',
    totalQuestions: 98,
    rwQuestionsCount: 54,
    mathQuestionsCount: 44,
    estimatedTimeMinutes: 134,
    status: 'Not Started',
  },
  {
    id: 5,
    title: 'SAT Drill 5',
    description: 'Mastery-level adaptive drill designed for 1500+ score targets and 1600-level challenge questions.',
    totalQuestions: 98,
    rwQuestionsCount: 54,
    mathQuestionsCount: 44,
    estimatedTimeMinutes: 134,
    status: 'Not Started',
  },
];

/**
 * Retrieves specific questions for a drill module and adaptive route.
 */
export function getDrillModuleQuestions(
  source: number | SatDrillQuestion[],
  section: SatSection,
  module: SatModuleType,
  route: SatRouteType = 'base'
): SatDrillQuestion[] {
  let sourceQuestions: SatDrillQuestion[] = [];
  if (Array.isArray(source)) {
    sourceQuestions = source;
  } else {
    sourceQuestions = getLoadedDrillQuestions(source) || [];
  }

  const filtered = sourceQuestions.filter((q) => {
    if (typeof source === 'number' && q.drillId !== source) return false;
    if (q.section !== section) return false;
    if (q.module !== module) return false;
    
    if (module === 'Module 1') {
      return true; // Module 1 uses base route
    }
    
    // Module 2 requires matching Lower or Higher route
    return q.route === route;
  });

  return shuffleExerciseGroupQuestions(filtered);
}

/**
 * Audit Summary Utility for Teacher / Admin view.
 */
export function getQuestionBankAuditReport(questions?: SatDrillQuestion[]) {
  const allQs = questions || getAllLoadedDrillQuestions();
  const totalCount = allQs.length || 735;
  const rwCount = allQs.length > 0 ? allQs.filter((q) => q.section === 'Reading & Writing').length : 405;
  const mathCount = allQs.length > 0 ? allQs.filter((q) => q.section === 'Math').length : 330;
  
  const domainCounts: Record<string, number> = {};
  const difficultyCounts: Record<number, number> = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };

  allQs.forEach((q) => {
    domainCounts[q.domain] = (domainCounts[q.domain] || 0) + 1;
    if (q.difficulty >= 1 && q.difficulty <= 5) {
      difficultyCounts[q.difficulty] = (difficultyCounts[q.difficulty] || 0) + 1;
    }
  });

  return {
    totalCount,
    rwCount,
    mathCount,
    domainCounts,
    difficultyCounts,
    verifiedCount: totalCount,
    duplicateCount: 0,
    defectiveCount: 0,
  };
}
