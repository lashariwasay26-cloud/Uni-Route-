import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Sparkles,
  Play,
  Clock,
  Zap,
  Target,
  CheckCircle2,
  Award,
  RotateCcw,
  Trash2,
  FileText,
  TrendingUp,
  Bookmark
} from 'lucide-react';
import {
  DRILL_METADATA_LIST,
  getAllActiveDrillSessions,
  getCompletedDrillHistory,
  getLatestDrillResult,
  getBestDrillScore,
  clearActiveDrillSession,
  clearSingleDrillProgress,
  clearAllDrillProgress,
  setDrill1SupabaseOverride,
  setDrill2SupabaseOverride,
  setDrill3SupabaseOverride,
  setDrill4SupabaseOverride,
  setDrill5SupabaseOverride
} from '../../data/satDrills';
import { fetchSatDrill1FromSupabase, fetchSatDrill2FromSupabase, fetchSatDrill3FromSupabase, fetchSatDrill4FromSupabase, fetchSatDrill5FromSupabase } from '../../lib/supabase';
import { SatDrillSession } from './SatDrillSession';
import { SatDrillResults } from './SatDrillResults';
import { ModuleSessionResult, DrillActiveSessionSave, FullDrillResult } from '../../data/satDrills/types';

export const SatDrillsHub: React.FC = () => {
  const [activeDrillId, setActiveDrillId] = useState<number | null>(null);

  // Active saved sessions & history state
  const [activeSessions, setActiveSessions] = useState<Record<number, DrillActiveSessionSave>>({});
  const [completedHistory, setCompletedHistory] = useState<FullDrillResult[]>([]);
  const [isResetConfirmOpen, setIsResetConfirmOpen] = useState(false);

  // Reload progress data from localStorage
  const refreshProgress = () => {
    setActiveSessions(getAllActiveDrillSessions());
    setCompletedHistory(getCompletedDrillHistory());
  };

  useEffect(() => {
    refreshProgress();
    // Prefetch Drills from Supabase
    fetchSatDrill1FromSupabase().then(({ data }) => {
      if (data && data.length > 0) {
        setDrill1SupabaseOverride(data);
      }
    }).catch(() => {});

    fetchSatDrill2FromSupabase().then(({ data }) => {
      if (data && data.length > 0) {
        setDrill2SupabaseOverride(data);
      }
    }).catch(() => {});

    fetchSatDrill3FromSupabase().then(({ data }) => {
      if (data && data.length > 0) {
        setDrill3SupabaseOverride(data);
      }
    }).catch(() => {});

    fetchSatDrill4FromSupabase().then(({ data }) => {
      if (data && data.length > 0) {
        setDrill4SupabaseOverride(data);
      }
    }).catch(() => {});

    fetchSatDrill5FromSupabase().then(({ data }) => {
      if (data && data.length > 0) {
        setDrill5SupabaseOverride(data);
      }
    }).catch(() => {});
  }, [activeDrillId]);

  // Test session state
  const [completedDrillResult, setCompletedDrillResult] = useState<{
    drillId: number;
    rwM1: ModuleSessionResult;
    rwM2: ModuleSessionResult;
    mathM1: ModuleSessionResult;
    mathM2: ModuleSessionResult;
    estimatedRwScore: number;
    estimatedMathScore: number;
  } | null>(null);

  // Handlers for clearing progress
  const handleResetSingleDrill = (e: React.MouseEvent, drillId: number) => {
    e.stopPropagation();
    clearSingleDrillProgress(drillId);
    refreshProgress();
  };

  const handleResetAllProgress = () => {
    clearAllDrillProgress();
    refreshProgress();
    setIsResetConfirmOpen(false);
  };

  // Handler to open past results report
  const handleViewPastResults = (drillId: number) => {
    const latest = getLatestDrillResult(drillId);
    if (latest) {
      setCompletedDrillResult({
        drillId: latest.drillId,
        rwM1: latest.rwModule1,
        rwM2: latest.rwModule2,
        mathM1: latest.mathModule1,
        mathM2: latest.mathModule2,
        estimatedRwScore: latest.estimatedRwScore,
        estimatedMathScore: latest.estimatedMathScore,
      });
    }
  };

  // Active Test Session Mode
  if (activeDrillId !== null) {
    return (
      <SatDrillSession
        drillId={activeDrillId}
        onExit={() => {
          setActiveDrillId(null);
          refreshProgress();
        }}
        onComplete={(rwM1, rwM2, mathM1, mathM2, estRw, estMath) => {
          setCompletedDrillResult({
            drillId: activeDrillId,
            rwM1,
            rwM2,
            mathM1,
            mathM2,
            estimatedRwScore: estRw,
            estimatedMathScore: estMath,
          });
          setActiveDrillId(null);
          refreshProgress();
        }}
      />
    );
  }

  // Active Results Mode
  if (completedDrillResult !== null) {
    return (
      <SatDrillResults
        drillId={completedDrillResult.drillId}
        rwM1={completedDrillResult.rwM1}
        rwM2={completedDrillResult.rwM2}
        mathM1={completedDrillResult.mathM1}
        mathM2={completedDrillResult.mathM2}
        estimatedRwScore={completedDrillResult.estimatedRwScore}
        estimatedMathScore={completedDrillResult.estimatedMathScore}
        onRetake={() => {
          const id = completedDrillResult.drillId;
          setCompletedDrillResult(null);
          clearActiveDrillSession(id);
          setActiveDrillId(id);
        }}
        onBackToHub={() => {
          setCompletedDrillResult(null);
          refreshProgress();
        }}
      />
    );
  }

  // Aggregate stats across all drills
  const completedDrillIds = Array.from(new Set(completedHistory.map((h) => h.drillId)));
  const highestOverallScore = completedHistory.length > 0 
    ? Math.max(...completedHistory.map((h) => h.estimatedTotalScore)) 
    : null;
  const inProgressCount = Object.keys(activeSessions).length;

  return (
    <div className="space-y-6 w-full font-sans text-slate-900">
      {/* Clean Top Header Banner with Overall Progress Metrics */}
      <div className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-7 shadow-xs space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200/80 text-indigo-700 text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
            <span>Digital SAT Adaptive Practice Drills</span>
          </div>
          
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-slate-600 bg-slate-100 px-3 py-1 rounded-full border border-slate-200/60">
              5 Full-Length Adaptive Tests
            </span>
            {(completedHistory.length > 0 || inProgressCount > 0) && (
              <button
                onClick={() => setIsResetConfirmOpen(true)}
                className="px-3 py-1 rounded-full text-xs font-bold text-slate-500 hover:text-rose-600 hover:bg-rose-50 border border-slate-200/70 transition-colors flex items-center gap-1.5 cursor-pointer"
                title="Reset All Saved Progress"
              >
                <Trash2 className="w-3 h-3" />
                <span>Reset Progress</span>
              </button>
            )}
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1.5 max-w-2xl">
            <h1 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
              Master the Digital SAT with Adaptive Precision
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Take complete 2-module adaptive practice drills. Your answers and timer are continuously saved, so you can exit and resume anytime without losing progress.
            </p>
          </div>

          {/* Quick Metrics Capsule */}
          <div className="flex items-center gap-3 w-full md:w-auto shrink-0">
            <div className="flex-1 md:flex-none p-3.5 sm:p-4 rounded-2xl bg-slate-50 border border-slate-200/80 text-center min-w-[110px]">
              <span className="text-[10px] uppercase font-bold text-slate-500 block">Completed</span>
              <span className="text-lg sm:text-xl font-black text-slate-900 block mt-0.5">
                {completedDrillIds.length} / 5
              </span>
            </div>

            <div className="flex-1 md:flex-none p-3.5 sm:p-4 rounded-2xl bg-indigo-50/70 border border-indigo-200/80 text-center min-w-[120px]">
              <span className="text-[10px] uppercase font-bold text-indigo-700 block">Peak Score</span>
              <span className="text-lg sm:text-xl font-black text-indigo-950 block mt-0.5">
                {highestOverallScore !== null ? `${highestOverallScore}` : '—'}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Drills Cards List */}
      <div className="grid grid-cols-1 gap-4">
        {DRILL_METADATA_LIST.map((drill) => {
          const activeSession = activeSessions[drill.id];
          const bestScore = getBestDrillScore(drill.id);
          const latestResult = getLatestDrillResult(drill.id);
          const hasActiveProgress = !!activeSession;
          const hasCompleted = !!latestResult;

          // Count answered questions in active session
          const answeredCount = activeSession ? Object.keys(activeSession.responses || {}).length : 0;

          return (
            <div
              key={drill.id}
              className={`bg-white border rounded-2xl p-5 sm:p-6 shadow-xs transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 ${
                hasActiveProgress
                  ? 'border-indigo-300 ring-1 ring-indigo-500/20'
                  : hasCompleted
                  ? 'border-emerald-300/80'
                  : 'border-slate-200/90 hover:border-slate-300'
              }`}
            >
              <div className="space-y-2 max-w-xl">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700 text-[11px] font-bold">
                    Drill #{drill.id}
                  </span>
                  
                  {hasActiveProgress && (
                    <span className="px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-800 border border-amber-300 text-[11px] font-bold flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                      In Progress ({activeSession.currentSection} • {activeSession.currentModule})
                    </span>
                  )}

                  {hasCompleted && !hasActiveProgress && (
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-300 text-[11px] font-bold flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                      Completed • Best: {bestScore} / 1600
                    </span>
                  )}

                  <span className="text-xs font-bold text-slate-500 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    ~{drill.estimatedTimeMinutes} mins
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900">{drill.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{drill.description}</p>

                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 pt-1 text-[11px] font-semibold text-slate-500">
                  <span>{drill.totalQuestions} Questions total</span>
                  <span>•</span>
                  <span>{drill.rwQuestionsCount} Reading & Writing</span>
                  <span>•</span>
                  <span>{drill.mathQuestionsCount} Math</span>
                  {hasActiveProgress && (
                    <>
                      <span>•</span>
                      <span className="text-indigo-600 font-bold">{answeredCount} questions answered</span>
                    </>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="w-full sm:w-auto shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-100 flex flex-wrap items-center justify-end gap-2">
                {hasCompleted && (
                  <button
                    onClick={() => handleViewPastResults(drill.id)}
                    className="px-4 py-2.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 text-xs font-bold flex items-center gap-1.5 shadow-2xs transition-all cursor-pointer"
                  >
                    <FileText className="w-3.5 h-3.5 text-indigo-600" />
                    <span>View Last Report</span>
                  </button>
                )}

                {hasActiveProgress ? (
                  <div className="flex items-center gap-2 w-full sm:w-auto">
                    <button
                      onClick={(e) => handleResetSingleDrill(e, drill.id)}
                      className="p-2.5 rounded-xl text-slate-400 hover:text-rose-600 hover:bg-rose-50 border border-slate-200/80 transition-colors cursor-pointer"
                      title="Discard in-progress session"
                    >
                      <RotateCcw className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setActiveDrillId(drill.id)}
                      className="flex-1 sm:flex-none px-6 py-3 rounded-xl bg-slate-950 hover:bg-black text-white text-xs font-bold flex items-center justify-center gap-2 shadow-sm hover:shadow-md transition-all cursor-pointer"
                    >
                      <span>Resume Practice Drill #{drill.id}</span>
                      <Play className="w-4 h-4 fill-current text-amber-400" />
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => {
                      clearActiveDrillSession(drill.id);
                      setActiveDrillId(drill.id);
                    }}
                    className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-950 hover:bg-black text-white text-xs font-bold flex items-center justify-center gap-2 shadow-sm hover:shadow-md transition-all cursor-pointer"
                  >
                    <span>{hasCompleted ? `Retake Drill #${drill.id}` : `Start Practice Drill #${drill.id}`}</span>
                    <Play className="w-4 h-4 fill-current" />
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Reset Confirmation Modal */}
      <AnimatePresence>
        {isResetConfirmOpen && (
          <div className="fixed inset-0 z-50 bg-slate-950/40 backdrop-blur-xs flex items-center justify-center p-4">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white border border-slate-200 rounded-3xl max-w-sm w-full p-6 text-center space-y-4 shadow-2xl text-slate-900"
            >
              <div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-600 border border-rose-200 flex items-center justify-center mx-auto">
                <Trash2 className="w-6 h-6" />
              </div>

              <div>
                <h3 className="text-base font-black text-slate-950 mb-1">Reset All Drill Progress?</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  This will clear all in-progress saved sessions and test score histories across all 5 SAT drills.
                </p>
              </div>

              <div className="flex gap-2 pt-2">
                <button
                  onClick={() => setIsResetConfirmOpen(false)}
                  className="flex-1 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-colors cursor-pointer border border-slate-200"
                >
                  Cancel
                </button>
                <button
                  onClick={handleResetAllProgress}
                  className="flex-1 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs transition-colors cursor-pointer shadow-xs"
                >
                  Reset Everything
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};


