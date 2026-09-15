import React, { useState, useEffect, useMemo, useRef } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';
import { SatCalculatorView } from '../math/SatCalculatorView';
import { shuffleExerciseGroupQuestions } from '../../utils/questionShuffler';
import { InteractivePageLoader } from '../InteractivePageLoader';
import {
  Clock,
  Eye,
  EyeOff,
  Calculator,
  BookOpen,
  Bookmark,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Grid,
  X,
  ArrowRight,
  RotateCcw,
  Sparkles,
  FileText,
  Save,
  Check,
  Type,
  Columns,
  List,
  ZoomIn,
  ZoomOut
} from 'lucide-react';
import {
  SatDrillQuestion,
  SatSection,
  SatModuleType,
  SatRouteType,
  StudentQuestionResponse,
  ModuleSessionResult,
  FullDrillResult
} from '../../data/satDrills/types';
import {
  getDrillModuleQuestions,
  getLoadedDrillQuestions,
  loadDrillQuestions,
  calculateRoutingScore,
  calculateEstimatedSectionScore,
  getActiveDrillSession,
  saveActiveDrillSession,
  clearActiveDrillSession,
  saveCompletedDrillResult
} from '../../data/satDrills';

interface SatDrillSessionProps {
  drillId: number;
  onComplete: (
    rwM1: ModuleSessionResult,
    rwM2: ModuleSessionResult,
    mathM1: ModuleSessionResult,
    mathM2: ModuleSessionResult,
    estimatedRwScore: number,
    estimatedMathScore: number
  ) => void;
  onExit: () => void;
}

export const SatDrillSession: React.FC<SatDrillSessionProps> = ({
  drillId,
  onComplete,
  onExit
}) => {
  // 1. Dynamic Drill Questions State (loaded from Supabase with max 5s timeout)
  const [drillQuestions, setDrillQuestions] = useState<SatDrillQuestion[]>(() => {
    return getLoadedDrillQuestions(drillId) || [];
  });
  const [isLoadingQuestions, setIsLoadingQuestions] = useState<boolean>(() => {
    const existing = getLoadedDrillQuestions(drillId);
    return !existing || existing.length !== 147;
  });
  const [fetchError, setFetchError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;
    const existing = getLoadedDrillQuestions(drillId);
    if (existing && existing.length === 147) {
      setDrillQuestions(existing);
      setIsLoadingQuestions(false);
      setFetchError(null);
      return;
    }

    setIsLoadingQuestions(true);
    setFetchError(null);

    loadDrillQuestions(drillId)
      .then(({ questions, error }) => {
        if (!isMounted) return;
        if (error || !questions || questions.length === 0) {
          setFetchError(error?.message || 'Could not load questions from Supabase within 5s');
          setIsLoadingQuestions(false);
        } else {
          setDrillQuestions(questions);
          setIsLoadingQuestions(false);
          setFetchError(null);
        }
      })
      .catch((err) => {
        if (!isMounted) return;
        setFetchError(err?.message || 'Failed to fetch drill questions');
        setIsLoadingQuestions(false);
      });

    return () => {
      isMounted = false;
    };
  }, [drillId]);

  // Lock body scroll while drill session is active
  useEffect(() => {
    if (typeof document !== 'undefined') {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, []);

  // Check for existing saved session on initial load
  const savedSession = useMemo(() => getActiveDrillSession(drillId), [drillId]);

  // Active Section & Module Flow State
  const [currentSection, setCurrentSection] = useState<SatSection>(
    savedSession?.currentSection || 'Reading & Writing'
  );
  const [currentModule, setCurrentModule] = useState<SatModuleType>(
    savedSession?.currentModule || 'Module 1'
  );
  const [currentRoute, setCurrentRoute] = useState<SatRouteType>(
    savedSession?.currentRoute || 'base'
  );

  // Completed module results
  const [rwM1Result, setRwM1Result] = useState<ModuleSessionResult | null>(
    savedSession?.rwM1Result || null
  );
  const [rwM2Result, setRwM2Result] = useState<ModuleSessionResult | null>(
    savedSession?.rwM2Result || null
  );
  const [mathM1Result, setMathM1Result] = useState<ModuleSessionResult | null>(
    savedSession?.mathM1Result || null
  );

  // Active question bank for current module (memoized and stable)
  const moduleQuestions = useMemo(() => {
    if (!drillQuestions || drillQuestions.length === 0) return [];
    return getDrillModuleQuestions(drillQuestions, currentSection, currentModule, currentRoute);
  }, [drillQuestions, currentSection, currentModule, currentRoute]);

  // Current Question Navigation Index
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(
    savedSession?.activeQuestionIndex !== undefined ? Math.min(savedSession.activeQuestionIndex, Math.max(0, moduleQuestions.length - 1)) : 0
  );

  // Student Responses State: questionId -> StudentQuestionResponse
  const [responses, setResponses] = useState<Record<string, StudentQuestionResponse>>(
    savedSession?.responses || {}
  );

  // Timer State (32 mins for R&W = 1920s, 35 mins for Math = 2100s)
  const defaultTime = currentSection === 'Reading & Writing' ? 32 * 60 : 35 * 60;
  const [timeRemaining, setTimeRemaining] = useState<number>(
    savedSession?.timeRemaining !== undefined ? savedSession.timeRemaining : defaultTime
  );
  const [showTimer, setShowTimer] = useState(true);

  // Restored notification flag
  const [hasRestoredBanner, setHasRestoredBanner] = useState<boolean>(!!savedSession);

  // Zoom / Text Density State ('compact' = zoomed out, 'standard' = normal, 'large' = comfortable)
  const [zoomLevel, setZoomLevel] = useState<'compact' | 'standard' | 'large'>('compact');

  // Mobile View Mode ('split' | 'passage' | 'question') for comfortable reading on phones
  const [mobileTab, setMobileTab] = useState<'split' | 'passage' | 'question'>('split');

  // UI Tool Overlays
  const [isGridOpen, setIsGridOpen] = useState(false);
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);
  const [isFormulaSheetOpen, setIsFormulaSheetOpen] = useState(false);
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);
  const [isExitConfirmModalOpen, setIsExitConfirmModalOpen] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Simple Embedded Calculator State
  const [calcDisplay, setCalcDisplay] = useState('0');

  // DOM Refs for instant seamless scrolling on question change
  const passageScrollRef = useRef<HTMLDivElement>(null);
  const questionScrollRef = useRef<HTMLDivElement>(null);

  // Active Question
  const activeQuestion: SatDrillQuestion | undefined = moduleQuestions[activeQuestionIndex];

  // Seamless question change: instantaneously reset scroll to top
  useEffect(() => {
    if (passageScrollRef.current) {
      passageScrollRef.current.scrollTop = 0;
    }
    if (questionScrollRef.current) {
      questionScrollRef.current.scrollTop = 0;
    }
  }, [activeQuestionIndex]);

  // Fast keyboard navigation between questions (ArrowRight / ArrowLeft / A-D / 1-4 / F)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      if (target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA')) {
        return;
      }
      if (isSubmitModalOpen || isExitConfirmModalOpen || isTransitioning || isGridOpen) return;

      if (e.key === 'ArrowRight' || e.key === 'Enter') {
        if (activeQuestionIndex < moduleQuestions.length - 1) {
          e.preventDefault();
          setActiveQuestionIndex((prev) => prev + 1);
        }
      } else if (e.key === 'ArrowLeft') {
        if (activeQuestionIndex > 0) {
          e.preventDefault();
          setActiveQuestionIndex((prev) => prev - 1);
        }
      } else if (e.key === 'f' || e.key === 'F') {
        e.preventDefault();
        handleToggleFlag();
      } else if (activeQuestion?.choices && activeQuestion.choices.length > 0) {
        const keyUpper = e.key.toUpperCase();
        if (['A', 'B', 'C', 'D'].includes(keyUpper)) {
          e.preventDefault();
          handleAnswerSelect(keyUpper);
        } else if (['1', '2', '3', '4'].includes(e.key)) {
          e.preventDefault();
          const mapNumToLetter: Record<string, string> = { '1': 'A', '2': 'B', '3': 'C', '4': 'D' };
          handleAnswerSelect(mapNumToLetter[e.key]);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeQuestionIndex, moduleQuestions.length, activeQuestion, isSubmitModalOpen, isExitConfirmModalOpen, isTransitioning, isGridOpen]);

  // Auto-save session continuously
  useEffect(() => {
    if (isTransitioning || isLoadingQuestions) return;
    const timeout = setTimeout(() => {
      saveActiveDrillSession({
        drillId,
        lastUpdated: new Date().toISOString(),
        currentSection,
        currentModule,
        currentRoute,
        activeQuestionIndex,
        timeRemaining,
        responses,
        rwM1Result,
        rwM2Result,
        mathM1Result,
      });
    }, 400);

    return () => clearTimeout(timeout);
  }, [
    drillId,
    currentSection,
    currentModule,
    currentRoute,
    activeQuestionIndex,
    timeRemaining,
    responses,
    rwM1Result,
    rwM2Result,
    mathM1Result,
    isTransitioning,
    isLoadingQuestions
  ]);

  // Sync Timer when module changes (skip on first mount if restored)
  const isInitialMount = useRef(true);
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }
    const time = currentSection === 'Reading & Writing' ? 32 * 60 : 35 * 60;
    setTimeRemaining(time);
    setActiveQuestionIndex(0);
  }, [currentSection, currentModule, currentRoute]);

  // Timer Countdown Effect
  useEffect(() => {
    if (isTransitioning || isSubmitModalOpen || isExitConfirmModalOpen) return;
    const timer = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleAutoSubmitModule();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [currentSection, currentModule, isTransitioning, isSubmitModalOpen, isExitConfirmModalOpen]);

  // Save Response Handler
  const handleAnswerSelect = (answer: string) => {
    if (!activeQuestion) return;
    const isCorrect = answer.trim().toUpperCase() === activeQuestion.correctAnswer.trim().toUpperCase();
    const existing = responses[activeQuestion.id];

    setResponses((prev) => ({
      ...prev,
      [activeQuestion.id]: {
        questionId: activeQuestion.id,
        studentAnswer: answer,
        isCorrect,
        timeSpentSeconds: (existing?.timeSpentSeconds || 0) + 5,
        flaggedForReview: existing?.flaggedForReview || false,
      }
    }));
  };

  // Toggle Flag for Review
  const handleToggleFlag = () => {
    if (!activeQuestion) return;
    const existing = responses[activeQuestion.id];
    setResponses((prev) => ({
      ...prev,
      [activeQuestion.id]: {
        questionId: activeQuestion.id,
        studentAnswer: existing?.studentAnswer || '',
        isCorrect: existing?.isCorrect || false,
        timeSpentSeconds: existing?.timeSpentSeconds || 0,
        flaggedForReview: !existing?.flaggedForReview,
      }
    }));
  };

  // Format seconds into MM:SS
  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  // Auto-Submit when time reaches zero
  const handleAutoSubmitModule = () => {
    handleConfirmSubmitModule();
  };

  // Confirm Submit Module
  const handleConfirmSubmitModule = () => {
    setIsSubmitModalOpen(false);
    setIsTransitioning(true);

    // Calculate score for this module
    let correct = 0;
    moduleQuestions.forEach((q) => {
      if (responses[q.id]?.isCorrect) {
        correct++;
      }
    });

    const sessionResult: ModuleSessionResult = {
      drillId,
      section: currentSection,
      module: currentModule,
      route: currentRoute,
      responses,
      totalQuestions: moduleQuestions.length,
      totalCorrect: correct,
      accuracyPercent: Math.round((correct / (moduleQuestions.length || 1)) * 100),
      timeRemainingSeconds: timeRemaining,
      completedAt: new Date().toISOString(),
    };

    setTimeout(() => {
      if (currentSection === 'Reading & Writing' && currentModule === 'Module 1') {
        // Evaluate Module 1 routing score
        setRwM1Result(sessionResult);
        const { isHigherRoute } = calculateRoutingScore(moduleQuestions, responses);
        const nextRoute: SatRouteType = isHigherRoute ? 'Higher' : 'Lower';

        setCurrentModule('Module 2');
        setCurrentRoute(nextRoute);
        setIsTransitioning(false);
      } else if (currentSection === 'Reading & Writing' && currentModule === 'Module 2') {
        setRwM2Result(sessionResult);

        // Move to Math Module 1
        setCurrentSection('Math');
        setCurrentModule('Module 1');
        setCurrentRoute('base');
        setIsTransitioning(false);
      } else if (currentSection === 'Math' && currentModule === 'Module 1') {
        setMathM1Result(sessionResult);
        const { isHigherRoute } = calculateRoutingScore(moduleQuestions, responses);
        const nextRoute: SatRouteType = isHigherRoute ? 'Higher' : 'Lower';

        setCurrentModule('Module 2');
        setCurrentRoute(nextRoute);
        setIsTransitioning(false);
      } else if (currentSection === 'Math' && currentModule === 'Module 2') {
        const mathM2Res = sessionResult;

        // Final completion! Calculate estimated scores
        const finalRwEst = calculateEstimatedSectionScore(
          {
            totalCorrect: rwM1Result?.totalCorrect || 0,
            totalQuestions: rwM1Result?.totalQuestions || 27,
            routeChosen: (rwM2Result?.route as 'Higher' | 'Lower') || 'Higher',
          },
          {
            totalCorrect: rwM2Result?.totalCorrect || 0,
            totalQuestions: rwM2Result?.totalQuestions || 27,
          },
          'Reading & Writing'
        );

        const finalMathEst = calculateEstimatedSectionScore(
          {
            totalCorrect: mathM1Result?.totalCorrect || 0,
            totalQuestions: mathM1Result?.totalQuestions || 22,
            routeChosen: (mathM2Res.route as 'Higher' | 'Lower') || 'Higher',
          },
          {
            totalCorrect: mathM2Res.totalCorrect,
            totalQuestions: mathM2Res.totalQuestions,
          },
          'Math'
        );

        if (rwM1Result && rwM2Result && mathM1Result) {
          // Save completed test to history and clear active in-progress session
          const fullResultRecord: FullDrillResult = {
            drillId,
            completedAt: new Date().toISOString(),
            rwModule1: rwM1Result,
            rwModule2: rwM2Result,
            mathModule1: mathM1Result,
            mathModule2: mathM2Res,
            estimatedRwScore: finalRwEst,
            estimatedMathScore: finalMathEst,
            estimatedTotalScore: finalRwEst + finalMathEst,
            domainBreakdown: {},
            skillBreakdown: {},
          };
          saveCompletedDrillResult(fullResultRecord);

          onComplete(rwM1Result, rwM2Result, mathM1Result, mathM2Res, finalRwEst, finalMathEst);
        }
      }
    }, 1200);
  };

  // Calculator button handler
  const handleCalcClick = (val: string) => {
    if (val === 'C') setCalcDisplay('0');
    else if (val === '=') {
      try {
        // Safe evaluation for basic math
        const sanitized = calcDisplay.replace(/×/g, '*').replace(/÷/g, '/');
        const res = Function(`'use strict'; return (${sanitized})`)();
        setCalcDisplay(String(res));
      } catch (e) {
        setCalcDisplay('Error');
      }
    } else {
      setCalcDisplay((prev) => (prev === '0' || prev === 'Error' ? val : prev + val));
    }
  };

  // If still loading questions from Supabase within the 5s window, show the interactive app loader (NO blank page!)
  if (isLoadingQuestions) {
    const loadingContent = (
      <div className="fixed inset-0 z-[99999] bg-[#f8fafc] flex items-center justify-center p-4 select-none h-screen h-[100dvh] w-screen">
        <div className="w-full max-w-lg bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 shadow-xl">
          <InteractivePageLoader
            title={`Loading SAT Drill #${drillId}`}
            subtitle="Fetching verified questions from Supabase..."
          />
        </div>
      </div>
    );
    return typeof document !== 'undefined' ? createPortal(loadingContent, document.body) : loadingContent;
  }

  // If Supabase fetch timed out or errored
  if (fetchError || moduleQuestions.length === 0) {
    const errorContent = (
      <div className="fixed inset-0 z-[99999] bg-[#f8fafc] flex items-center justify-center p-4 select-none h-screen h-[100dvh] w-screen">
        <div className="w-full max-w-md bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 text-center shadow-xl space-y-4">
          <div className="w-14 h-14 rounded-2xl bg-amber-50 text-amber-600 border border-amber-200 flex items-center justify-center mx-auto">
            <AlertCircle className="w-7 h-7" />
          </div>
          <div>
            <h2 className="text-lg font-black text-slate-900">Drill Data Unavailable</h2>
            <p className="text-xs text-slate-600 mt-1 leading-relaxed">
              {fetchError || 'Could not retrieve drill questions within the 5-second window.'}
            </p>
          </div>
          <div className="flex gap-3 pt-2">
            <button
              onClick={() => {
                setIsLoadingQuestions(true);
                setFetchError(null);
                loadDrillQuestions(drillId).then(({ questions, error }) => {
                  if (error || !questions || questions.length === 0) {
                    setFetchError(error?.message || 'Could not load questions within 5 seconds.');
                    setIsLoadingQuestions(false);
                  } else {
                    setDrillQuestions(questions);
                    setIsLoadingQuestions(false);
                  }
                });
              }}
              className="flex-1 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs flex items-center justify-center gap-2 cursor-pointer shadow-xs transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Retry Fetch</span>
            </button>
            <button
              onClick={onExit}
              className="flex-1 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs cursor-pointer border border-slate-200 transition-colors"
            >
              Back to Hub
            </button>
          </div>
        </div>
      </div>
    );
    return typeof document !== 'undefined' ? createPortal(errorContent, document.body) : errorContent;
  }

  const sessionContent = (
    <div className="fixed inset-0 z-[99999] bg-[#f8fafc] text-slate-900 flex flex-col font-sans select-none overflow-hidden h-full h-[100dvh] w-screen max-w-full">
      {/* Top Header Toolbar */}
      <header className="h-13 sm:h-15 md:h-16 bg-white border-b border-slate-200/90 px-2.5 sm:px-6 flex items-center justify-between shrink-0 shadow-2xs gap-1.5 sm:gap-2">
        <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
          <button
            onClick={() => setIsExitConfirmModalOpen(true)}
            className="p-1.5 sm:p-2 rounded-xl text-slate-500 hover:text-slate-900 hover:bg-slate-100 border border-slate-200/70 transition-colors cursor-pointer"
            title="Save & Exit Test"
          >
            <X className="w-4 h-4" />
          </button>
          
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl bg-slate-950 text-white font-extrabold text-[11px] sm:text-sm flex items-center justify-center shadow-xs">
              U
            </div>
            <div>
              <h1 className="text-[11px] sm:text-sm font-black text-slate-950 tracking-tight truncate max-w-[110px] sm:max-w-none">
                {currentSection} — {currentModule}
              </h1>
              <p className="text-[9px] sm:text-[10px] text-slate-500 font-bold uppercase tracking-wider hidden sm:block">
                Uni Route SAT Practice Drill #{drillId}
              </p>
            </div>
          </div>
        </div>

        {/* Center: Timer Bar & Auto-save Status */}
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          <div className="flex items-center gap-1 sm:gap-2 bg-slate-100/90 border border-slate-200/80 rounded-full px-2 sm:px-3 py-0.5 sm:py-1.5 shadow-2xs">
            <Clock className={`w-3 h-3 sm:w-4 sm:h-4 ${timeRemaining < 300 ? 'text-rose-500 animate-pulse' : 'text-indigo-600'}`} />
            {showTimer ? (
              <span className={`text-[11px] sm:text-sm font-mono font-black ${timeRemaining < 300 ? 'text-rose-600' : 'text-slate-800'}`}>
                {formatTime(timeRemaining)}
              </span>
            ) : (
              <span className="text-[11px] sm:text-xs font-mono font-bold text-slate-400">Hidden</span>
            )}
            <button
              onClick={() => setShowTimer(!showTimer)}
              className="text-slate-400 hover:text-slate-700 ml-0.5 sm:ml-1 cursor-pointer transition-colors"
              title={showTimer ? 'Hide Timer' : 'Show Timer'}
            >
              {showTimer ? <EyeOff className="w-3 h-3 sm:w-3.5 sm:h-3.5" /> : <Eye className="w-3 h-3 sm:w-3.5 sm:h-3.5" />}
            </button>
          </div>

          {/* Zoom / Text Size Toggle (Compact / Standard / Large) */}
          <button
            onClick={() => {
              setZoomLevel((prev) => (prev === 'compact' ? 'standard' : prev === 'standard' ? 'large' : 'compact'));
            }}
            className="px-2 sm:px-2.5 py-1 rounded-full bg-slate-100 hover:bg-slate-200/80 border border-slate-200 text-[10px] sm:text-xs font-bold text-slate-700 flex items-center gap-1 cursor-pointer transition-colors"
            title={`Zoom Level: ${zoomLevel.toUpperCase()} (Tap to switch)`}
          >
            <Type className="w-3 h-3 text-slate-600" />
            <span className="capitalize">{zoomLevel}</span>
          </button>
        </div>

        {/* Right: Tools & Controls */}
        <div className="flex items-center gap-1 sm:gap-2 shrink-0">
          {currentSection === 'Math' && (
            <>
              <button
                onClick={() => setIsCalculatorOpen(true)}
                className="px-2 sm:px-3 py-1 sm:py-1.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 text-xs font-bold flex items-center gap-1.5 shadow-2xs transition-all cursor-pointer"
              >
                <Calculator className="w-3.5 h-3.5 text-indigo-600" />
                <span className="hidden sm:inline">Calculator</span>
              </button>
              <button
                onClick={() => setIsFormulaSheetOpen(true)}
                className="px-2 sm:px-3 py-1 sm:py-1.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 text-xs font-bold flex items-center gap-1.5 shadow-2xs transition-all cursor-pointer"
              >
                <BookOpen className="w-3.5 h-3.5 text-emerald-600" />
                <span className="hidden sm:inline">Reference</span>
              </button>
            </>
          )}

          <button
            onClick={() => setIsGridOpen(true)}
            className="px-2 sm:px-3.5 py-1 sm:py-1.5 rounded-xl bg-indigo-50 hover:bg-indigo-100 border border-indigo-200/80 text-indigo-700 text-[11px] sm:text-xs font-bold flex items-center gap-1.5 shadow-2xs transition-all cursor-pointer"
          >
            <Grid className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            <span className="hidden sm:inline">Question Palette </span>
            <span>({activeQuestionIndex + 1}/{moduleQuestions.length})</span>
          </button>
        </div>
      </header>

      {/* Main Test Content View */}
      <main className="flex-1 overflow-y-auto md:overflow-hidden p-2 sm:p-3 md:p-4 max-w-7xl mx-auto w-full flex flex-col min-h-0">
        {isTransitioning ? (
          <div className="flex-1 bg-white border border-slate-200/90 rounded-2xl sm:rounded-3xl flex flex-col items-center justify-center p-6 text-center shadow-xs">
            <Sparkles className="w-12 h-12 text-indigo-600 animate-spin mb-4" />
            <h2 className="text-xl font-bold text-slate-950 mb-2">Preparing Next Module...</h2>
            <p className="text-sm text-slate-600 max-w-sm">
              Uni Route is calculating your routing performance and loading the next section module.
            </p>
          </div>
        ) : !activeQuestion ? (
          <div className="p-8 text-center text-slate-500">Loading module questions...</div>
        ) : (
          <div className="flex-1 flex flex-col min-h-0">
            {/* Mobile View Selector (when passage exists) */}
            {activeQuestion.passage && (
              <div className="md:hidden flex items-center justify-between bg-slate-200/70 p-1 rounded-xl mb-2 shrink-0">
                <button
                  onClick={() => setMobileTab('passage')}
                  className={`flex-1 py-1.5 px-2 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1 ${
                    mobileTab === 'passage'
                      ? 'bg-white text-indigo-700 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <FileText className="w-3 h-3" />
                  <span>Passage</span>
                </button>
                <button
                  onClick={() => setMobileTab('question')}
                  className={`flex-1 py-1.5 px-2 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1 ${
                    mobileTab === 'question'
                      ? 'bg-white text-indigo-700 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <List className="w-3 h-3" />
                  <span>Question & Choices</span>
                </button>
                <button
                  onClick={() => setMobileTab('split')}
                  className={`flex-1 py-1.5 px-2 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1 ${
                    mobileTab === 'split'
                      ? 'bg-white text-indigo-700 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <Columns className="w-3 h-3" />
                  <span>Both</span>
                </button>
              </div>
            )}

            {/* Content Container (Split Grid on Desktop, Responsive on Mobile) */}
            <div className="flex-1 flex flex-col md:flex-row gap-2.5 sm:gap-4 overflow-hidden min-h-0">
              {/* Left Pane: Passage or Context Stimulus */}
              {activeQuestion.passage && (mobileTab === 'passage' || mobileTab === 'split') && (
                <div
                  ref={passageScrollRef}
                  className={`md:w-1/2 bg-white border border-slate-200/90 rounded-xl sm:rounded-2xl md:rounded-3xl p-3 sm:p-5 md:p-6 overflow-y-auto shadow-2xs flex flex-col scroll-smooth min-h-0 ${
                    mobileTab === 'split' ? 'max-h-[30vh] md:max-h-full shrink-0 md:shrink' : 'flex-1'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2 sm:mb-3">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-indigo-50 border border-indigo-200/60 text-[10px] sm:text-[11px] font-bold text-indigo-700 w-fit">
                      <FileText className="w-3 h-3 text-indigo-600" />
                      <span>Passage Text</span>
                    </div>

                    {mobileTab === 'passage' && (
                      <button
                        onClick={() => setMobileTab('question')}
                        className="md:hidden text-[11px] font-bold text-indigo-600 flex items-center gap-1 hover:underline cursor-pointer"
                      >
                        <span>View Question</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    )}
                  </div>
                  <div
                    className={`${
                      zoomLevel === 'compact'
                        ? 'text-xs sm:text-[13.5px] leading-relaxed'
                        : zoomLevel === 'standard'
                        ? 'text-[13.5px] sm:text-[15px] leading-relaxed'
                        : 'text-sm sm:text-base leading-relaxed'
                    } text-slate-800 font-serif whitespace-pre-line space-y-3`}
                  >
                    {activeQuestion.passage}
                  </div>
                </div>
              )}

              {/* Right Pane: Question & Choices */}
              {(mobileTab === 'question' || mobileTab === 'split' || !activeQuestion.passage) && (
                <div
                  ref={questionScrollRef}
                  className={`flex-1 bg-white border border-slate-200/90 rounded-xl sm:rounded-2xl md:rounded-3xl p-3 sm:p-5 md:p-6 overflow-y-auto shadow-2xs flex flex-col justify-between scroll-smooth min-h-0 ${
                    !activeQuestion.passage ? 'max-w-3xl mx-auto w-full' : ''
                  }`}
                >
                  <motion.div
                    key={activeQuestion.id}
                    initial={{ opacity: 0.85 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.08 }}
                    className="flex flex-col justify-between flex-1"
                  >
                    <div>
                      {/* Question Header & Flag Toggle */}
                      <div className="flex items-center justify-between mb-2.5 sm:mb-3 pb-2 sm:pb-3 border-b border-slate-100">
                        <div className="flex items-center gap-2">
                          <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg sm:rounded-xl bg-slate-950 text-white font-black text-[11px] sm:text-xs flex items-center justify-center shadow-xs">
                            {activeQuestionIndex + 1}
                          </span>
                          <span className="text-[11px] sm:text-xs font-bold text-slate-500 truncate max-w-[180px] sm:max-w-none">
                            {activeQuestion.domain} • {activeQuestion.skill}
                          </span>
                        </div>

                        <div className="flex items-center gap-2">
                          {activeQuestion.passage && mobileTab === 'question' && (
                            <button
                              onClick={() => setMobileTab('passage')}
                              className="md:hidden px-2 py-1 rounded-lg bg-indigo-50 border border-indigo-200 text-indigo-700 text-[11px] font-bold flex items-center gap-1 cursor-pointer"
                            >
                              <FileText className="w-3 h-3" />
                              <span>Passage</span>
                            </button>
                          )}

                          <button
                            onClick={handleToggleFlag}
                            className={`px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg sm:rounded-xl text-[11px] sm:text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                              responses[activeQuestion.id]?.flaggedForReview
                                ? 'bg-amber-50 text-amber-800 border border-amber-300 shadow-2xs'
                                : 'bg-slate-100 hover:bg-slate-200 text-slate-600 border border-slate-200/60'
                            }`}
                          >
                            <Bookmark className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                            <span>{responses[activeQuestion.id]?.flaggedForReview ? 'Flagged' : 'Flag'}</span>
                          </button>
                        </div>
                      </div>

                      {/* Question Text */}
                      <div
                        className={`${
                          zoomLevel === 'compact'
                            ? 'text-[12.5px] sm:text-[14.5px] mb-3 sm:mb-4'
                            : zoomLevel === 'standard'
                            ? 'text-[13.5px] sm:text-base mb-4 sm:mb-6'
                            : 'text-sm sm:text-lg mb-5 sm:mb-7'
                        } font-bold text-slate-950 leading-snug`}
                      >
                        {activeQuestion.questionText}
                      </div>

                      {/* Answer Inputs */}
                      {activeQuestion.responseType === 'MCQ' && activeQuestion.choices ? (
                        <div className={zoomLevel === 'compact' ? 'space-y-1.5 sm:space-y-2.5' : 'space-y-2.5 sm:space-y-3'}>
                          {activeQuestion.choices.map((choiceText, index) => {
                            const letter = ['A', 'B', 'C', 'D'][index];
                            const isSelected = responses[activeQuestion.id]?.studentAnswer === letter;

                            return (
                              <div
                                key={letter}
                                onClick={() => handleAnswerSelect(letter)}
                                className={`rounded-xl border transition-all cursor-pointer flex items-center ${
                                  zoomLevel === 'compact'
                                    ? 'p-2 sm:p-3 gap-2.5 text-xs sm:text-[13.5px]'
                                    : zoomLevel === 'standard'
                                    ? 'p-3 sm:p-4 gap-3 text-xs sm:text-sm'
                                    : 'p-3.5 sm:p-4.5 gap-3.5 text-sm sm:text-base'
                                } font-medium ${
                                  isSelected
                                    ? 'border-2 border-indigo-600 bg-indigo-50/80 text-indigo-950 font-bold shadow-xs ring-2 ring-indigo-500/20'
                                    : 'border-slate-200/90 bg-white hover:border-indigo-300 hover:bg-slate-50/80 text-slate-800 shadow-2xs'
                                }`}
                              >
                                <span
                                  className={`rounded-full font-bold flex items-center justify-center shrink-0 transition-all ${
                                    zoomLevel === 'compact'
                                      ? 'w-5.5 h-5.5 sm:w-6.5 sm:h-6.5 text-[11px] sm:text-xs'
                                      : 'w-6.5 h-6.5 sm:w-7 sm:h-7 text-xs'
                                  } ${
                                    isSelected
                                      ? 'bg-indigo-600 border border-indigo-600 text-white shadow-xs'
                                      : 'bg-slate-100 border border-slate-300 text-slate-700'
                                  }`}
                                >
                                  {letter}
                                </span>
                                <span className="flex-1 leading-snug">{choiceText.replace(/^[A-D]\)\s*/, '')}</span>
                              </div>
                            );
                          })}
                        </div>
                      ) : (
                        /* Student Produced Response (SPR) Input */
                        <div className="space-y-2 bg-slate-50 border border-slate-200/90 rounded-xl sm:rounded-2xl p-3 sm:p-4">
                          <label className="block text-xs font-bold text-slate-700 mb-1">
                            Student-Produced Response (Enter fraction, decimal, or integer):
                          </label>
                          <input
                            type="text"
                            value={responses[activeQuestion.id]?.studentAnswer || ''}
                            onChange={(e) => handleAnswerSelect(e.target.value)}
                            placeholder="e.g. 123.75 or 7"
                            className="w-full bg-white border border-slate-300 rounded-xl px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base text-slate-900 font-mono font-bold focus:border-indigo-600 focus:ring-2 focus:ring-indigo-500/20 focus:outline-none shadow-2xs"
                          />
                        </div>
                      )}
                    </div>
                  </motion.div>
                </div>
              )}
            </div>
          </div>
        )}
      </main>

      {/* Bottom Footer Navigation Bar (Guaranteed Sticky & Always Visible) */}
      <footer className="h-14 sm:h-16 bg-white border-t border-slate-200/90 px-3 sm:px-6 flex items-center justify-between shrink-0 shadow-[0_-4px_16px_rgba(0,0,0,0.06)] z-40">
        <button
          onClick={() => setActiveQuestionIndex((prev) => Math.max(0, prev - 1))}
          disabled={activeQuestionIndex === 0}
          className="px-3 sm:px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 disabled:opacity-30 disabled:pointer-events-none text-slate-700 text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-colors cursor-pointer border border-slate-200/70 shadow-2xs"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Back</span>
        </button>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={() => setIsExitConfirmModalOpen(true)}
            className="px-3 sm:px-4 py-2 rounded-xl bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs sm:text-sm font-bold flex items-center gap-1.5 shadow-2xs transition-all cursor-pointer"
          >
            <Save className="w-3.5 h-3.5 text-indigo-600" />
            <span className="hidden sm:inline">Save & Exit</span>
          </button>

          {activeQuestionIndex < moduleQuestions.length - 1 ? (
            <button
              onClick={() => setActiveQuestionIndex((prev) => Math.min(moduleQuestions.length - 1, prev + 1))}
              className="px-5 sm:px-7 py-2 sm:py-2.5 rounded-xl bg-slate-950 hover:bg-indigo-600 text-white text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer shadow-sm hover:shadow-indigo-500/20"
            >
              <span>Next</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={() => setIsSubmitModalOpen(true)}
              className="px-5 sm:px-7 py-2 sm:py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer shadow-sm"
            >
              <span>Submit Module</span>
              <CheckCircle2 className="w-4 h-4" />
            </button>
          )}
        </div>
      </footer>

      {/* Save & Exit Confirmation Modal */}
      <AnimatePresence>
        {isExitConfirmModalOpen && (
          <div className="fixed inset-0 z-50 bg-slate-950/40 backdrop-blur-xs flex items-center justify-center p-4">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white border border-slate-200 rounded-3xl max-w-sm w-full p-6 text-center space-y-4 shadow-2xl text-slate-900"
            >
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 border border-indigo-200 flex items-center justify-center mx-auto">
                <Save className="w-6 h-6" />
              </div>

              <div>
                <h3 className="text-base font-black text-slate-950 mb-1">Save Progress & Exit?</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Your current section, answered questions, and timer are automatically saved. You can resume this drill at any time from the hub.
                </p>
              </div>

              <div className="flex gap-2 pt-2">
                <button
                  onClick={() => setIsExitConfirmModalOpen(false)}
                  className="flex-1 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-colors cursor-pointer border border-slate-200"
                >
                  Keep Testing
                </button>
                <button
                  onClick={onExit}
                  className="flex-1 py-2.5 rounded-xl bg-slate-950 hover:bg-black text-white font-bold text-xs transition-colors cursor-pointer shadow-xs"
                >
                  Save & Exit
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Question Grid / Palette Modal Drawer */}
      <AnimatePresence>
        {isGridOpen && (
          <div className="fixed inset-0 z-50 bg-slate-950/40 backdrop-blur-xs flex items-center justify-center p-4">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white border border-slate-200 rounded-3xl max-w-md w-full p-6 space-y-5 shadow-2xl text-slate-900"
            >
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <h3 className="text-base font-black text-slate-950 flex items-center gap-2">
                  <Grid className="w-4 h-4 text-indigo-600" />
                  <span>Question Navigator</span>
                </h3>
                <button
                  onClick={() => setIsGridOpen(false)}
                  className="p-1.5 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 cursor-pointer transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="grid grid-cols-5 sm:grid-cols-6 gap-2.5 max-h-[55vh] overflow-y-auto p-1">
                {moduleQuestions.map((q, idx) => {
                  const resp = responses[q.id];
                  const isAnswered = !!resp?.studentAnswer;
                  const isFlagged = !!resp?.flaggedForReview;
                  const isCurrent = idx === activeQuestionIndex;

                  return (
                    <button
                      key={q.id}
                      onClick={() => {
                        setActiveQuestionIndex(idx);
                        setIsGridOpen(false);
                      }}
                      className={`h-11 rounded-xl font-bold text-xs flex flex-col items-center justify-center relative transition-all cursor-pointer ${
                        isCurrent
                          ? 'ring-2 ring-indigo-500 bg-slate-950 text-white shadow-xs font-black'
                          : isAnswered
                          ? 'bg-indigo-50 text-indigo-700 border border-indigo-200 font-bold'
                          : 'bg-slate-50 text-slate-600 border border-slate-200 hover:bg-slate-100 font-semibold'
                      }`}
                    >
                      <span>{idx + 1}</span>
                      {isFlagged && (
                        <span className="w-2 h-2 rounded-full bg-amber-500 absolute top-1 right-1" />
                      )}
                    </button>
                  );
                })}
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-500">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-indigo-600" />
                  <span>Answered</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-200 border border-slate-300" />
                  <span>Unanswered</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                  <span>Flagged</span>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Embedded Math Calculator Modal */}
      <AnimatePresence>
        {isCalculatorOpen && (
          <SatCalculatorView onClose={() => setIsCalculatorOpen(false)} />
        )}
      </AnimatePresence>

      {/* Formula Reference Sheet Modal */}
      <AnimatePresence>
        {isFormulaSheetOpen && (
          <div className="fixed inset-0 z-50 bg-slate-950/40 backdrop-blur-xs flex items-center justify-center p-4">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white border border-slate-200 rounded-3xl max-w-lg w-full p-6 space-y-4 shadow-2xl max-h-[80vh] overflow-y-auto text-slate-900"
            >
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <h3 className="text-sm font-black text-slate-950 flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-emerald-600" />
                  <span>SAT Math Reference Sheet</span>
                </h3>
                <button
                  onClick={() => setIsFormulaSheetOpen(false)}
                  className="p-1.5 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-3 text-xs text-slate-700">
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80">
                  <span className="font-bold text-emerald-700 block mb-1">Circles & Area</span>
                  <p className="font-mono text-slate-900">A = πr², C = 2πr</p>
                </div>
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80">
                  <span className="font-bold text-emerald-700 block mb-1">Rectangles & Triangles</span>
                  <p className="font-mono text-slate-900">A = lw, A = ½bh, c² = a² + b²</p>
                </div>
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80">
                  <span className="font-bold text-emerald-700 block mb-1">Special Right Triangles</span>
                  <p className="font-mono text-slate-900">30°-60°-90°: x, x√3, 2x | 45°-45°-90°: x, x, x√2</p>
                </div>
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80">
                  <span className="font-bold text-emerald-700 block mb-1">3D Volume</span>
                  <p className="font-mono text-slate-900">Prism: V = lwh, Cylinder: V = πr²h, Sphere: V = ⁴⁄₃πr³, Cone: V = ⅓πr²h</p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Submit Confirmation Modal */}
      <AnimatePresence>
        {isSubmitModalOpen && (
          <div className="fixed inset-0 z-50 bg-slate-950/40 backdrop-blur-xs flex items-center justify-center p-4">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white border border-slate-200 rounded-3xl max-w-sm w-full p-6 text-center space-y-4 shadow-2xl text-slate-900"
            >
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 border border-indigo-200 flex items-center justify-center mx-auto">
                <AlertCircle className="w-6 h-6" />
              </div>

              <div>
                <h3 className="text-base font-black text-slate-950 mb-1">Submit {currentModule}?</h3>
                <p className="text-xs text-slate-600">
                  You have answered {Object.keys(responses).length} of {moduleQuestions.length} questions in this module.
                </p>
              </div>

              <div className="flex gap-2 pt-2">
                <button
                  onClick={() => setIsSubmitModalOpen(false)}
                  className="flex-1 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-colors cursor-pointer border border-slate-200"
                >
                  Return to Test
                </button>
                <button
                  onClick={handleConfirmSubmitModule}
                  className="flex-1 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs transition-colors cursor-pointer shadow-xs"
                >
                  Confirm & Continue
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );

  return typeof document !== 'undefined' ? createPortal(sessionContent, document.body) : sessionContent;
};
