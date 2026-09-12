import {
  DrillActiveSessionSave,
  FullDrillResult,
  ModuleSessionResult
} from './types';

const ACTIVE_SESSIONS_STORAGE_KEY = 'sat_drills_active_sessions_v1';
const RESULTS_HISTORY_STORAGE_KEY = 'sat_drills_history_v1';

/**
 * Retrieve all active (in-progress) drill sessions
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
  } catch (e) {
    console.error('Failed to save completed drill result', e);
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
  } catch (e) {
    console.error(`Failed to clear progress for drill #${drillId}`, e);
  }
}
