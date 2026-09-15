import React, { useState, useEffect, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { saveSatPracticeProgress } from '../../lib/userStorage';
import { shuffleExerciseGroupQuestions } from '../../utils/questionShuffler';
import { fetchSatMathChapter1FromSupabase, fetchSatMathChapter2FromSupabase, fetchSatMathChapter3FromSupabase, fetchSatMathChapter4FromSupabase, fetchSatMathChapter5FromSupabase, fetchSatMathChapter6FromSupabase, fetchSatMathChapter7FromSupabase, fetchSatMathChapter8FromSupabase, fetchSatMathChapter9FromSupabase, fetchSatMathChapter10FromSupabase, fetchSatMathChapter11FromSupabase, isSupabaseConfigured } from '../../lib/supabase';
import { InteractivePageLoader } from '../InteractivePageLoader';
import {
  Calculator,
  BookOpen,
  CheckCircle2,
  XCircle,
  Lightbulb,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  Table as TableIcon,
  Target,
  RefreshCw,
  Award,
  ListOrdered,
  Layers,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  ChevronRight,
  AlertCircle,
  TrendingUp,
  Sliders,
  Grid,
  Eye
} from 'lucide-react';
import { FULL_SAT_MATH_BOOK } from '../../data/satMathBook';
import { FullSatMathChapter, MathExerciseGroup, MathExerciseQuestion } from '../../data/satMathConcepts';
import { SatMathGraph } from './SatMathGraph';
import { SatMathInteractiveGraphLab } from './SatMathInteractiveGraphLab';
import { SatMathVisualGallery } from './SatMathVisualGallery';
import { SatMathExerciseTableMatrix } from './SatMathExerciseTableMatrix';
import { SatMathTransformationMockAtlas } from './SatMathTransformationMockAtlas';
import { SatMathExponentialMockAtlas } from './SatMathExponentialMockAtlas';
import { formatMathText } from '../../utils/mathFormatter';
import { SatCalculatorView } from './SatCalculatorView';
import {
  FormattedMathConceptText,
  FormattedMathExplanation,
  cleanMathInlineMarkdown,
  cleanMathSymbols
} from './SatMathConceptRenderer';

interface SatMathSectionExplorerProps {
  user?: { email: string; id: string } | null;
  onOpenAuth?: (message?: string) => void;
}

export const SatMathSectionExplorer: React.FC<SatMathSectionExplorerProps> = ({ user, onOpenAuth }) => {
  const scrollPosRef = useRef<number>(0);
  const lastSelectedChapterIdRef = useRef<string | null>(null);
  const [selectedChapterId, setSelectedChapterId] = useState<string | null>(null);
  const [activeMainTab, setActiveMainTab] = useState<'theory' | 'exercises' | 'visual-studio'>('theory');
  const [visualSubTab, setVisualSubTab] = useState<'gallery' | 'interactive'>('gallery');
  const [selectedExerciseTab, setSelectedExerciseTab] = useState<number>(1);
  const [exerciseViewMode, setExerciseViewMode] = useState<'cards' | 'table'>('cards');
  const [activeQuestionIndex, setActiveQuestionIndex] = useState<number>(0);

  useEffect(() => {
    setActiveQuestionIndex(0);
  }, [selectedExerciseTab, selectedChapterId, activeMainTab]);

  const [userSelectedAnswers, setUserSelectedAnswers] = useState<Record<string, number>>(() => {
    try {
      const saved = localStorage.getItem('sat_math_answers');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  useEffect(() => {
    if (selectedChapterId) {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }
  }, [selectedChapterId, activeMainTab]);

  useEffect(() => {
    try {
      localStorage.setItem('sat_math_answers', JSON.stringify(userSelectedAnswers));
      saveSatPracticeProgress('math', userSelectedAnswers).catch(() => {});
    } catch (e) {
      console.error(e);
    }
  }, [userSelectedAnswers]);
  const [showOnlyIncorrect, setShowOnlyIncorrect] = useState<boolean>(false);
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);

  const [currentChapterData, setCurrentChapterData] = useState<FullSatMathChapter | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!selectedChapterId) {
      setIsLoading(false);
      setCurrentChapterData(null);
      return;
    }

    let isMounted = true;
    setIsLoading(true);
    setCurrentChapterData(null);

    const startTime = Date.now();
    const MIN_LOAD_TIME = 500;

    const finishLoading = () => {
      if (!isMounted) return;
      const elapsed = Date.now() - startTime;
      const remaining = Math.max(0, MIN_LOAD_TIME - elapsed);
      setTimeout(() => {
        if (isMounted) {
          setIsLoading(false);
        }
      }, remaining);
    };

    if (!isSupabaseConfigured()) {
      finishLoading();
      return () => {
        isMounted = false;
      };
    }

    // Safety timeout: Ensure loading finishes within 5 seconds even if Supabase stalls
    const timeoutTimer = setTimeout(() => {
      if (isMounted) {
        finishLoading();
      }
    }, 5000);

    const chapterFetchMap: Record<string, () => Promise<{ data: FullSatMathChapter | null; error: any }>> = {
      'exponents-and-radicals': fetchSatMathChapter1FromSupabase,
      'linear-expressions': fetchSatMathChapter2FromSupabase,
      'equations-and-systems': fetchSatMathChapter3FromSupabase,
      'functions-and-quadratics': fetchSatMathChapter4FromSupabase,
      'ch5': fetchSatMathChapter5FromSupabase,
      'inequalities': fetchSatMathChapter6FromSupabase,
      'geometry-and-trigonometry': fetchSatMathChapter7FromSupabase,
      'linear-and-exponential-growth': fetchSatMathChapter8FromSupabase,
      'ch9': fetchSatMathChapter9FromSupabase,
      'sat-ch10-statistics': fetchSatMathChapter10FromSupabase,
      'sat-math-ch11-advanced': fetchSatMathChapter11FromSupabase,
    };

    const fetchFunc = chapterFetchMap[selectedChapterId];
    if (!fetchFunc) {
      clearTimeout(timeoutTimer);
      finishLoading();
      return () => {
        isMounted = false;
      };
    }

    fetchFunc()
      .then(({ data }) => {
        if (isMounted && data) {
          setCurrentChapterData(data);
        }
      })
      .catch((err) => {
        console.error(`Failed to fetch ${selectedChapterId} from Supabase:`, err);
      })
      .finally(() => {
        clearTimeout(timeoutTimer);
        finishLoading();
      });

    return () => {
      isMounted = false;
      clearTimeout(timeoutTimer);
    };
  }, [selectedChapterId]);

  // Restore scroll position when leaving a math chapter back to math chapters list
  useEffect(() => {
    if (!selectedChapterId && lastSelectedChapterIdRef.current) {
      const targetPos = scrollPosRef.current;
      window.scrollTo({ top: targetPos, left: 0, behavior: 'instant' });
    }
  }, [selectedChapterId]);

  const currentChapter: FullSatMathChapter | undefined = useMemo(() => {
    return currentChapterData || FULL_SAT_MATH_BOOK.find((ch) => ch.id === selectedChapterId);
  }, [selectedChapterId, currentChapterData]);

  const currentExerciseGroupRaw: MathExerciseGroup | undefined = currentChapter?.exerciseGroups.find(
    (eg) => eg.exerciseNumber === selectedExerciseTab
  );

  const currentExerciseGroup: MathExerciseGroup | undefined = useMemo(() => {
    if (!currentExerciseGroupRaw) return undefined;
    return {
      ...currentExerciseGroupRaw,
      questions: shuffleExerciseGroupQuestions(currentExerciseGroupRaw.questions)
    };
  }, [currentExerciseGroupRaw]);

  const handleSelectAnswer = (qId: string, choiceIdx: number) => {
    // Freemium Limit Check: Non-logged-in users get a maximum of 5 free practice questions
    if (!user) {
      const isNew = userSelectedAnswers[qId] === undefined;
      if (isNew) {
        const freeQuestionsCount = parseInt(localStorage.getItem('uniroute_free_questions_count') || '0', 10);
        if (freeQuestionsCount >= 5) {
          onOpenAuth?.(
            'You have completed your 5 free SAT practice questions! Sign up for a free account to unlock thousands of expert practice drills, real-time detailed explanations, and full mock tests.'
          );
          return;
        }
        localStorage.setItem('uniroute_free_questions_count', (freeQuestionsCount + 1).toString());
      }
    }

    setUserSelectedAnswers((prev) => ({ ...prev, [qId]: choiceIdx }));
  };

  const handleResetCurrentExercise = () => {
    if (!currentExerciseGroup) return;
    setUserSelectedAnswers((prev) => {
      const next = { ...prev };
      currentExerciseGroup.questions.forEach((q) => {
        delete next[q.id];
      });
      return next;
    });
  };

  // Calculate overall and exercise statistics
  const stats = useMemo(() => {
    const totalChapterQuestions = currentChapter
      ? (currentChapter.exerciseGroups || []).reduce((acc, eg) => acc + (eg.questions || []).length, 0)
      : 0;

    const totalAnswered = currentChapter
      ? Object.keys(userSelectedAnswers).filter((k) =>
          (currentChapter.exerciseGroups || []).some((eg) => (eg.questions || []).some((q) => q.id === k))
        ).length
      : 0;

    const totalCorrect = currentChapter
      ? Object.entries(userSelectedAnswers).filter(([k, val]) => {
          const q = (currentChapter.exerciseGroups || []).flatMap((eg) => eg.questions || []).find((item) => item.id === k);
          return q && q.correctIndex === val;
        }).length
      : 0;

    const groupAnswered = currentExerciseGroup
      ? (currentExerciseGroup.questions || []).filter((q) => userSelectedAnswers[q.id] !== undefined).length
      : 0;

    const groupCorrect = currentExerciseGroup
      ? currentExerciseGroup.questions.filter((q) => userSelectedAnswers[q.id] === q.correctIndex).length
      : 0;

    return { totalChapterQuestions, totalAnswered, totalCorrect, groupAnswered, groupCorrect };
  }, [currentChapter, currentExerciseGroup, userSelectedAnswers]);
  
  const { totalChapterQuestions, totalAnswered, totalCorrect, groupAnswered, groupCorrect } = stats;

  const isCurrentlyLoading = isLoading || (selectedChapterId !== null && !currentChapterData);

  return (
    <div id="sat-math-section-explorer" className="space-y-6 text-slate-900 min-h-[600px] relative overflow-x-hidden w-full">
      {!selectedChapterId ? (
        <motion.div
          key="math-list"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.15 }}
          className="space-y-6"
        >
            {/* Simple Clean Header */}
            <div className="border-b border-slate-200 pb-2.5">
              <h2 className="text-xl sm:text-2xl font-black text-slate-950 tracking-tight">
                Available Math Chapters
              </h2>
            </div>

          {/* White Topic Cards Grid - STRICTLY TWO PER ROW ON ALL SCREENS (grid-cols-2) */}
          <div className="grid grid-cols-2 gap-2.5 sm:gap-4">
            {FULL_SAT_MATH_BOOK.map((chapter) => {
              const totalQuestions = chapter.exerciseGroups.reduce(
                (acc, eg) => acc + eg.questions.length,
                0
              );

              return (
                <button
                  key={chapter.id}
                  id={`math-card-${chapter.id}`}
                  onClick={() => {
                    scrollPosRef.current = window.scrollY || document.documentElement.scrollTop || 0;
                    lastSelectedChapterIdRef.current = chapter.id;
                    setIsLoading(true);
                    setSelectedChapterId(chapter.id);
                    setActiveMainTab('theory');
                    setSelectedExerciseTab(1);
                    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
                  }}
                  className="bg-white hover:bg-slate-50 border-2 border-slate-200 hover:border-slate-400 rounded-2xl p-3.5 sm:p-5 text-left transition-all duration-200 cursor-pointer flex flex-col justify-between space-y-3 group relative overflow-hidden shadow-xs hover:shadow-md"
                >
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center justify-between gap-1">
                      <span className="px-2.5 py-0.5 rounded-full bg-white border border-slate-200 text-slate-800 text-[9px] sm:text-[10px] font-black uppercase tracking-wider">
                        Ch. {chapter.chapterNumber}
                      </span>
                    </div>

                    <h3 className="text-xs sm:text-lg font-black text-slate-950 group-hover:text-slate-800 transition-colors tracking-tight line-clamp-2 leading-tight">
                      {chapter.chapterTitle}
                    </h3>

                    <p className="text-[10px] sm:text-xs text-slate-500 leading-snug font-medium line-clamp-2">
                      {chapter.introduction}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[10px] sm:text-xs font-black text-slate-800 group-hover:text-zinc-800">
                    <span className="flex items-center gap-1">
                      <BookOpen className="w-3.5 h-3.5 text-slate-800" />
                      <span>Open Page</span>
                    </span>
                    <div className="p-1.5 rounded-lg bg-slate-100 border border-slate-200 text-slate-800 transition-all group-hover:bg-slate-200">
                      <ChevronRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </motion.div>
        ) : (
          <motion.div
            key={`math-chapter-${selectedChapterId}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.15 }}
            className="space-y-6 relative min-h-[500px]"
          >
            {isCurrentlyLoading || !currentChapter ? (
              <div className="w-full min-h-[500px] flex items-center justify-center py-12">
                <InteractivePageLoader
                  title="Loading Math Chapter"
                  subtitle="Assembling curriculum modules, structured analytics, and interactive practice questions..."
                />
              </div>
            ) : (
              <>
                {/* Top Bar: Back to Topics Button */}
                <div className="flex items-center justify-between bg-white border border-slate-200/90 p-3 sm:p-4 rounded-2xl shadow-xs">
                  <button
                    onClick={() => setSelectedChapterId(null)}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-white border border-slate-200/90 shadow-xs text-xs font-bold text-slate-700 hover:text-indigo-600 hover:bg-slate-50 transition-all cursor-pointer"
                  >
                    <ArrowLeft className="w-4 h-4 text-indigo-600" />
                    <span>Back to All Math Topics</span>
                  </button>

                  <span className="text-xs font-extrabold text-indigo-700 bg-indigo-50 uppercase tracking-wider px-3.5 py-1 rounded-full border border-indigo-200/80 shadow-2xs">
                    Chapter {currentChapter.chapterNumber} of {FULL_SAT_MATH_BOOK.length}
                  </span>
                </div>

                {/* CHAPTER SELECTOR & INSPIRATIONAL BANNER */}
                <div className="bg-white border border-slate-200/90 rounded-3xl p-5 sm:p-7 shadow-xs space-y-5">
            {/* Chapter Selection Pills (Removed because we use the Back button now, but kept for Mastery stats) */}
            <div className="flex flex-wrap items-center justify-end gap-3 border-b border-slate-100 pb-4">
              <div className="flex items-center gap-2 text-xs font-bold">
                <span className="text-slate-500">Mastery:</span>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 font-extrabold">
                  {totalCorrect}/{totalChapterQuestions} Solved ({Math.round((totalCorrect / (totalChapterQuestions || 1)) * 100)}%)
                </span>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-[10px] font-black uppercase tracking-wider">
                  Chapter {currentChapter.chapterNumber} • Uni Route Advanced SAT Math
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight flex items-center gap-2.5">
                <Calculator className="w-7 h-7 text-slate-800 shrink-0" />
                <span>Chapter {currentChapter.chapterNumber}: {currentChapter.chapterTitle}</span>
              </h1>
              {currentChapter.quote && (
                <p className="text-xs sm:text-sm font-semibold italic text-slate-600 bg-slate-50 p-3 rounded-xl border border-slate-200/70">
                  "{currentChapter.quote}"
                </p>
              )}
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium whitespace-pre-line">
                {currentChapter.introduction}
              </p>
            </div>
          </div>

      {/* STICKY TOP QUICK-TOGGLE BAR: THEORY vs EXERCISES vs VISUAL LAB vs GRAPH STUDIO */}
      <div className="sticky top-2 z-20 bg-white border border-slate-200 p-2 rounded-2xl shadow-sm flex flex-wrap items-center justify-between gap-2">
        <div className="flex flex-wrap items-center gap-1.5 w-full sm:w-auto">
          <button
            onClick={() => setActiveMainTab('theory')}
            className={`flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-xl text-xs font-black transition-all cursor-pointer ${
              activeMainTab === 'theory'
                ? 'bg-slate-800 text-white shadow-xs'
                : 'bg-slate-100 hover:bg-slate-200/80 text-slate-700'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>1. Core Theory & Worked Examples</span>
          </button>

          <button
            onClick={() => setActiveMainTab('exercises')}
            className={`flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-xl text-xs font-black transition-all cursor-pointer ${
              activeMainTab === 'exercises'
                ? 'bg-slate-800 text-white shadow-xs'
                : 'bg-slate-100 hover:bg-slate-200/80 text-slate-700'
            }`}
          >
            <Target className="w-4 h-4" />
            <span>2. Practice Exercises ({totalChapterQuestions} Qs)</span>
          </button>

          <button
            onClick={() => setActiveMainTab('visual-studio')}
            className={`flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-xl text-xs font-black transition-all cursor-pointer ${
              activeMainTab === 'visual-studio'
                ? 'bg-black text-white shadow-xs'
                : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200'
            }`}
          >
            <TrendingUp className="w-4 h-4" />
            <span>3. Visual Lab & Interactive Graph Studio</span>
          </button>
        </div>

        {activeMainTab === 'exercises' && (
          <div className="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-end">
            {/* View Mode Toggle: Cards vs Table */}
            <div className="inline-flex rounded-xl bg-slate-100 p-1 border border-slate-200">
              <button
                onClick={() => setExerciseViewMode('cards')}
                className={`px-2.5 py-1 rounded-lg text-[11px] font-black transition-all cursor-pointer inline-flex items-center gap-1 ${
                  exerciseViewMode === 'cards'
                    ? 'bg-white text-slate-900 shadow-2xs'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                <Grid className="w-3.5 h-3.5" />
                <span>Card View</span>
              </button>
              <button
                onClick={() => setExerciseViewMode('table')}
                className={`px-2.5 py-1 rounded-lg text-[11px] font-black transition-all cursor-pointer inline-flex items-center gap-1 ${
                  exerciseViewMode === 'table'
                    ? 'bg-white text-slate-900 shadow-2xs'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                <TableIcon className="w-3.5 h-3.5" />
                <span>Table Matrix</span>
              </button>
            </div>

            <button
              onClick={handleResetCurrentExercise}
              className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-[11px] font-bold transition-all cursor-pointer"
            >
              <RefreshCw className="w-3 h-3" />
              <span>Reset</span>
            </button>
          </div>
        )}
      </div>

      {/* CONTENT AREA WITH LIGHTWEIGHT TOGGLE */}
      <div className="relative overflow-x-hidden w-full">
        <div className={activeMainTab === 'theory' ? 'block' : 'hidden'}>
          <motion.div
            key="theory"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="space-y-6"
          >
          {/* Quick Jump to Exercises Action Card */}
          <div className="bg-emerald-50/80 border border-emerald-200 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="text-xs font-extrabold text-emerald-950 uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-emerald-600" />
                <span>Practice & Master These Concepts</span>
              </div>
              <p className="text-xs text-emerald-800 font-medium">
                Put your knowledge into action with {totalChapterQuestions} curated practice questions featuring step-by-step solutions, interactive diagrams, and instant feedback.
              </p>
            </div>
            <button
              onClick={() => {
                setActiveMainTab('exercises');
                setSelectedExerciseTab(1);
              }}
              className="px-4 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold shrink-0 transition-all shadow-xs cursor-pointer inline-flex items-center gap-1.5"
            >
              <span>Start Practice Questions</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Detailed Theory Sections */}
          <div className="space-y-6">
            {currentChapter.sections.map((sec, sIdx) => (
              <div
                key={sIdx}
                className="bg-white border border-slate-200 rounded-3xl p-5 sm:p-7 shadow-xs space-y-4"
              >
                <div className="border-b border-slate-100 pb-3">
                  <h3 className="text-base sm:text-xl font-black text-slate-950 tracking-tight flex items-center gap-2">
                    <span className="w-6 h-6 rounded-lg bg-slate-800 text-white text-xs font-black flex items-center justify-center">
                      {sIdx + 1}
                    </span>
                    <span>{formatMathText(sec.sectionTitle)}</span>
                  </h3>
                </div>

                {/* Section Full Text */}
                <div className="pt-1">
                  <FormattedMathConceptText text={sec.fullText} />
                </div>

                {/* Section Diagrams / Graphs */}
                {sec.diagrams && sec.diagrams.length > 0 && (
                  <div className="py-2 space-y-4">
                    {sec.diagrams.map((diag, dIdx) => (
                      <SatMathGraph key={dIdx} diagram={diag} />
                    ))}
                  </div>
                )}

                {/* Bullet Points */}
                {sec.bulletPoints && sec.bulletPoints.length > 0 && (
                  <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-4 sm:p-5 space-y-3 shadow-2xs">
                    <div className="text-xs font-black uppercase tracking-wider text-slate-950 flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-indigo-600 shrink-0" />
                      <span>Key Strategy Takeaways & Rules</span>
                    </div>
                    <div className="space-y-2">
                      {sec.bulletPoints.map((bp, bIdx) => (
                        <div key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-900 leading-relaxed font-medium p-3 rounded-xl bg-white border border-slate-200/70 shadow-2xs">
                          <span className="w-5 h-5 rounded-md bg-indigo-50 border border-indigo-200 text-indigo-900 text-[10px] font-black flex items-center justify-center shrink-0 mt-0.5">
                            {bIdx + 1}
                          </span>
                          <div className="flex-1">{cleanMathInlineMarkdown(bp)}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Tables */}
                {sec.tables && sec.tables.length > 0 && (
                  <div className="space-y-4 pt-2">
                    {sec.tables.map((table, tIdx) => (
                      <div
                        key={tIdx}
                        className="border border-slate-200 rounded-2xl overflow-hidden shadow-2xs"
                      >
                        <div className="bg-slate-100/90 px-4 py-2.5 font-black text-xs text-slate-900 border-b border-slate-200 flex items-center gap-2">
                          <TableIcon className="w-3.5 h-3.5 text-slate-800" />
                          <span>{table.title}</span>
                        </div>
                        <div className="overflow-x-auto">
                          <table className="w-full text-left text-xs border-collapse">
                            <thead>
                              <tr className="bg-slate-50 border-b border-slate-200">
                                {table.headers.map((h, hIdx) => (
                                  <th
                                    key={hIdx}
                                    className="p-3 font-extrabold text-slate-950 uppercase text-[10px] tracking-wider"
                                  >
                                    {formatMathText(h)}
                                  </th>
                                ))}
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                              {table.rows.map((row, rIdx) => (
                                <tr
                                  key={rIdx}
                                  className={rIdx % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}
                                >
                                  {row.map((cell, cIdx) => (
                                    <td
                                      key={cIdx}
                                      className={`p-3 text-slate-700 font-medium ${
                                        cIdx === 1 ? 'font-mono text-indigo-700 font-bold' : ''
                                      }`}
                                    >
                                      {formatMathText(cell)}
                                    </td>
                                  ))}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Function Transformation Visual Mock Graphs Atlas for Chapter 4 */}
                {currentChapter.chapterNumber === 4 && sec.sectionTitle.toLowerCase().includes('transformation') && (
                  <div className="pt-3">
                    <SatMathTransformationMockAtlas />
                  </div>
                )}

                {/* Exponential Functions & Graph Conditions Mock Atlas for Chapter 8 */}
                {currentChapter.chapterNumber === 8 && sec.sectionTitle.toLowerCase().includes('graph conditions') && (
                  <div className="pt-3">
                    <SatMathExponentialMockAtlas />
                  </div>
                )}

                {/* Worked Examples in this Section */}
                {sec.examples && sec.examples.length > 0 && (
                  <div className="space-y-4 pt-3">
                    <div className="text-xs font-black uppercase tracking-wider text-slate-900 flex items-center gap-1.5">
                      <Calculator className="w-4 h-4 text-slate-800" />
                      <span>Worked-Out Step-by-Step Examples</span>
                    </div>

                    {sec.examples.map((ex, exIdx) => {
                      const exKey = `worked-${sIdx}-${exIdx}`;
                      const selected = userSelectedAnswers[exKey];
                      const hasSubmitted = selected !== undefined;
                      const isCorrect = selected === ex.correctIndex;

                      return (
                        <div
                          key={exIdx}
                          className="bg-amber-50/60 border-2 border-amber-300 rounded-3xl p-5 sm:p-6 space-y-4 shadow-2xs"
                        >
                          <div className="flex items-center justify-between flex-wrap gap-2 border-b border-amber-200/80 pb-2.5">
                            <span className="text-xs font-black text-amber-950 uppercase tracking-wider flex items-center gap-2">
                              <Calculator className="w-4 h-4 text-amber-700 shrink-0" />
                              <span>{formatMathText(ex.title)}</span>
                            </span>
                            <span className="text-[10px] font-black px-2.5 py-0.5 rounded-full bg-amber-200 text-amber-950 border border-amber-300 uppercase tracking-wider">
                              Yellow Card Example
                            </span>
                          </div>

                          <p className="text-xs sm:text-sm font-extrabold text-slate-950 leading-relaxed">
                            {cleanMathInlineMarkdown(ex.question)}
                          </p>

                          {/* Worked Example Graph */}
                          {ex.diagram && <SatMathGraph diagram={ex.diagram} />}
                          {ex.diagrams && ex.diagrams.map((d, dIdx) => (
                            <SatMathGraph key={dIdx} diagram={d} />
                          ))}

                          {/* Worked Example Table */}
                          {ex.table && (
                            <div className="border border-amber-200 rounded-xl overflow-hidden bg-white shadow-2xs my-2">
                              <div className="bg-amber-100/70 px-3 py-1.5 font-black text-[11px] text-amber-950 border-b border-amber-200 flex items-center gap-1.5">
                                <TableIcon className="w-3 h-3 text-amber-800" />
                                <span>{formatMathText(ex.table.title)}</span>
                              </div>
                              <table className="w-full text-left text-xs border-collapse">
                                <thead>
                                  <tr className="bg-amber-50/50 border-b border-amber-200">
                                    {ex.table.headers.map((h, hIdx) => (
                                      <th key={hIdx} className="p-2 font-black text-amber-950 text-[10px] uppercase">
                                        {formatMathText(h)}
                                      </th>
                                    ))}
                                  </tr>
                                </thead>
                                <tbody className="divide-y divide-amber-100">
                                  {ex.table.rows.map((row, rIdx) => (
                                    <tr key={rIdx}>
                                      {row.map((cell, cIdx) => (
                                        <td key={cIdx} className="p-2 text-slate-800 font-medium">
                                          {formatMathText(cell)}
                                        </td>
                                      ))}
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          )}

                          {ex.options && (
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                              {ex.options.map((opt, oIdx) => {
                                const isThisSelected = selected === oIdx;
                                const isThisCorrect = oIdx === ex.correctIndex;

                                let btnStyle =
                                  'bg-white border-slate-200 text-slate-800 hover:bg-amber-100/50';
                                if (hasSubmitted) {
                                  if (isThisCorrect) {
                                    btnStyle = 'bg-emerald-500 text-white border-emerald-600 font-bold';
                                  } else if (isThisSelected) {
                                    btnStyle = 'bg-rose-500 text-white border-rose-600 font-bold';
                                  } else {
                                    btnStyle = 'bg-slate-100 text-slate-400 border-slate-200';
                                  }
                                }

                                return (
                                  <button
                                    key={oIdx}
                                    onClick={() => handleSelectAnswer(exKey, oIdx)}
                                    className={`p-3.5 rounded-xl border text-xs sm:text-sm text-left transition-all font-medium flex flex-col justify-between gap-2 cursor-pointer ${btnStyle}`}
                                  >
                                    <div className="flex items-center justify-between w-full">
                                      <div className="flex items-center gap-2">
                                        <span className="w-5 h-5 rounded-md bg-slate-100 text-slate-800 font-black text-[11px] flex items-center justify-center border border-slate-300 shrink-0">
                                          {String.fromCharCode(65 + oIdx)}
                                        </span>
                                        <span>{cleanMathInlineMarkdown(opt)}</span>
                                      </div>
                                      {hasSubmitted && isThisCorrect && (
                                        <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
                                      )}
                                      {hasSubmitted && isThisSelected && !isThisCorrect && (
                                        <XCircle className="w-4 h-4 text-white shrink-0" />
                                      )}
                                    </div>

                                    {ex.optionTables && ex.optionTables[oIdx] && (
                                      <div className="w-full mt-1.5 overflow-hidden rounded-lg border border-slate-300 bg-white text-slate-900 shadow-2xs">
                                        <table className="w-full text-center text-xs">
                                          <thead>
                                            <tr className="bg-slate-100 border-b border-slate-300">
                                              {ex.optionTables[oIdx].headers.map((h, hI) => (
                                                <th key={hI} className="px-2 py-1 font-bold text-[10px] text-slate-800 uppercase">{h}</th>
                                              ))}
                                            </tr>
                                          </thead>
                                          <tbody>
                                            {ex.optionTables[oIdx].rows.map((r, rI) => (
                                              <tr key={rI} className="border-b border-slate-200 last:border-0">
                                                {r.map((c, cI) => (
                                                  <td key={cI} className="px-2 py-1 font-semibold text-slate-700 text-xs">{c}</td>
                                                ))}
                                              </tr>
                                            ))}
                                          </tbody>
                                        </table>
                                      </div>
                                    )}
                                  </button>
                                );
                              })}
                            </div>
                          )}

                          {/* Step-by-Step Breakdown Accordion/Card */}
                          <div className="mt-3 p-4 sm:p-5 rounded-2xl bg-white border-2 border-amber-300/80 text-xs sm:text-sm leading-relaxed space-y-3 shadow-2xs">
                            <div className="font-black text-amber-950 flex items-center gap-2 text-xs uppercase tracking-wider border-b border-amber-200/60 pb-2">
                              <Lightbulb className="w-4 h-4 text-amber-600 shrink-0" />
                              <span>Step-by-Step Solution & Mathematical Proof</span>
                            </div>
                            <FormattedMathExplanation text={ex.explanation} />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            ))}
          </div>
          </motion.div>
        </div>

        <div className={activeMainTab === 'exercises' ? 'block' : 'hidden'}>
          <motion.div
            key="exercises"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="space-y-6"
          >
          {/* EXERCISE GROUP TABS */}
          <div className="flex overflow-x-auto gap-2 pb-1 scrollbar-thin">
            {currentChapter.exerciseGroups.map((eg) => {
              const answeredInGroup = eg.questions.filter(
                (q) => userSelectedAnswers[q.id] !== undefined
              ).length;
              const correctInGroup = eg.questions.filter(
                (q) => userSelectedAnswers[q.id] === q.correctIndex
              ).length;

              const isSelected = selectedExerciseTab === eg.exerciseNumber;

              return (
                <button
                  key={eg.exerciseNumber}
                  onClick={() => setSelectedExerciseTab(eg.exerciseNumber)}
                  className={`px-4 py-2.5 rounded-2xl border text-xs font-black whitespace-nowrap transition-all cursor-pointer flex flex-col items-start gap-0.5 shrink-0 ${
                    isSelected
                      ? 'bg-slate-800 border-slate-800 text-white shadow-xs'
                      : 'bg-white border-slate-200 hover:bg-slate-50 text-slate-700'
                  }`}
                >
                  <div className="flex items-center gap-1.5">
                    <span>Exercise {eg.exerciseNumber}</span>
                    <span
                      className={`text-[9px] px-1.5 py-0.2 rounded-full font-bold ${
                        isSelected
                          ? 'bg-zinc-800 text-white'
                          : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      {eg.questions.length} Qs
                    </span>
                  </div>
                  <span
                    className={`text-[10px] font-semibold ${
                      isSelected ? 'text-zinc-300' : 'text-slate-400'
                    }`}
                  >
                    {correctInGroup}/{eg.questions.length} Correct
                  </span>
                </button>
              );
            })}
          </div>

          {/* CURRENT EXERCISE GROUP BANNER */}
          {currentExerciseGroup && (
            <div className="bg-white border border-slate-200 rounded-3xl p-5 sm:p-6 shadow-xs space-y-2">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-slate-800 text-white text-xs font-black uppercase tracking-wider">
                    Exercise {currentExerciseGroup.exerciseNumber} of {currentChapter.exerciseGroups.length}
                  </span>
                  <span className="text-xs font-bold text-slate-600">
                    {currentExerciseGroup.questions.length} Problems
                  </span>
                </div>

                <div className="flex items-center gap-2 text-xs font-bold">
                  <span className="text-slate-500">Progress:</span>
                  <span className="text-slate-950 font-black">
                    {groupAnswered}/{currentExerciseGroup.questions.length} Answered
                  </span>
                </div>
              </div>

              <h2 className="text-lg sm:text-xl font-black text-slate-950 tracking-tight">
                {currentExerciseGroup.title}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                {currentExerciseGroup.description}
              </p>
            </div>
          )}

          {/* SUB-VIEW 1: CARD MODE */}
          {exerciseViewMode === 'cards' && currentExerciseGroup && (() => {
            const q = currentExerciseGroup.questions[activeQuestionIndex];
            if (!q) return null;

            const selectedChoice = userSelectedAnswers[q.id];
            const isSubmitted = selectedChoice !== undefined;
            const isCorrect = selectedChoice === q.correctIndex;

            // Calculate answered progress for the ribbon
            const groupAnswered = currentExerciseGroup.questions.filter((item) => userSelectedAnswers[item.id] !== undefined).length;

            return (
              <div className="space-y-6">
                {/* QUESTION SELECTION NAVIGATION RIBBON */}
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 flex flex-col md:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-3 w-full md:w-auto overflow-x-auto py-1 scrollbar-none">
                    <span className="text-xs font-black uppercase text-slate-500 whitespace-nowrap">Go to:</span>
                    <div className="flex gap-1.5">
                      {currentExerciseGroup.questions.map((item, idx) => {
                        const isSelected = activeQuestionIndex === idx;
                        const isAnswered = userSelectedAnswers[item.id] !== undefined;
                        return (
                          <button
                            key={item.id}
                            onClick={() => setActiveQuestionIndex(idx)}
                            className={`w-8 h-8 rounded-xl border text-xs font-black transition-all cursor-pointer flex items-center justify-center shrink-0 ${
                              isSelected
                                ? 'bg-indigo-600 border-indigo-600 text-white shadow-xs ring-2 ring-indigo-500/25'
                                : isAnswered
                                ? 'bg-emerald-50 border-emerald-300 text-emerald-800 font-bold'
                                : 'bg-white border-slate-200 hover:bg-slate-100 text-slate-700'
                            }`}
                          >
                            {idx + 1}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Ribbon Progress Indicator */}
                  <div className="flex items-center gap-3 w-full md:w-auto shrink-0 justify-between md:justify-end">
                    <div className="bg-slate-200 w-24 md:w-32 h-2 rounded-full overflow-hidden">
                      <div
                        className="bg-indigo-600 h-full transition-all duration-300"
                        style={{
                          width: `${(groupAnswered / currentExerciseGroup.questions.length) * 100}%`,
                        }}
                      />
                    </div>
                    <span className="text-xs font-bold text-slate-600 whitespace-nowrap">
                      {groupAnswered}/{currentExerciseGroup.questions.length} Solved
                    </span>
                  </div>
                </div>

                {/* SINGLE ACTIVE QUESTION CONTAINER */}
                <div
                  key="active-question-container"
                  className={`bg-white border-2 rounded-2xl p-4 sm:p-6 transition-colors duration-150 space-y-4 shadow-xs ${
                    isSubmitted
                      ? isCorrect
                        ? 'border-emerald-300 bg-emerald-50/20'
                        : 'border-rose-300 bg-rose-50/20'
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  {/* Question Number & Status Badge */}
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2 font-black text-slate-900">
                      <span className="w-6 h-6 rounded-lg bg-slate-800 text-white text-xs flex items-center justify-center font-black">
                        {q.number}
                      </span>
                      <span>Question {activeQuestionIndex + 1} of {currentExerciseGroup.questions.length}</span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setIsCalculatorOpen(true);
                        }}
                        className="ml-2 px-2.5 py-1 rounded-lg bg-indigo-50 hover:bg-indigo-100 text-indigo-700 text-[10px] font-black border border-indigo-200 flex items-center gap-1 cursor-pointer transition-colors"
                      >
                        <Calculator className="w-3.5 h-3.5 text-indigo-600" />
                        <span>Calculator</span>
                      </button>
                    </div>

                    {isSubmitted ? (
                      isCorrect ? (
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-extrabold text-[11px] border border-emerald-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                          Correct
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-rose-100 text-rose-800 font-extrabold text-[11px] border border-rose-300">
                          <AlertCircle className="w-3.5 h-3.5 text-rose-600" />
                          Incorrect
                        </span>
                      )
                    ) : (
                      <span className="text-[11px] text-slate-400 font-semibold">
                        Click an option below
                      </span>
                    )}
                  </div>

                  {/* Question Text */}
                  <p className="text-xs sm:text-base font-extrabold text-slate-950 leading-relaxed">
                    {cleanMathInlineMarkdown(q.question)}
                  </p>

                  {/* Question Graph / Diagram */}
                  {q.diagram && <SatMathGraph diagram={q.diagram} isSubmitted={isSubmitted} />}
                  {q.diagrams && q.diagrams.map((d, dIdx) => (
                    <SatMathGraph key={dIdx} diagram={d} isSubmitted={isSubmitted} />
                  ))}

                  {/* Question Data Table */}
                  {q.table && (
                    <div className="border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-2xs">
                      <div className="bg-slate-100 px-3.5 py-2 font-black text-xs text-slate-900 border-b border-slate-200 flex items-center gap-1.5">
                        <TableIcon className="w-3.5 h-3.5 text-slate-800" />
                        <span>{formatMathText(q.table.title)}</span>
                      </div>
                      <table className="w-full text-left text-xs border-collapse">
                        <thead>
                          <tr className="bg-slate-50 border-b border-slate-200">
                            {q.table.headers.map((h, hIdx) => (
                              <th key={hIdx} className="p-2.5 font-black text-slate-900 text-[10px] uppercase">
                                {formatMathText(h)}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                          {q.table.rows.map((r, rIdx) => (
                            <tr key={rIdx} className={rIdx % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}>
                              {r.map((c, cIdx) => (
                                <td key={cIdx} className="p-2.5 font-medium text-slate-700">
                                  {formatMathText(c)}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                  {q.tables && q.tables.map((tbl, tIdx) => (
                    <div key={tIdx} className="border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-2xs">
                      <div className="bg-slate-100 px-3.5 py-2 font-black text-xs text-slate-900 border-b border-slate-200 flex items-center gap-1.5">
                        <TableIcon className="w-3.5 h-3.5 text-slate-800" />
                        <span>{formatMathText(tbl.title)}</span>
                      </div>
                      <table className="w-full text-left text-xs border-collapse">
                        <thead>
                          <tr className="bg-slate-50 border-b border-slate-200">
                            {tbl.headers.map((h, hIdx) => (
                              <th key={hIdx} className="p-2.5 font-black text-slate-900 text-[10px] uppercase">
                                {formatMathText(h)}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                          {tbl.rows.map((r, rIdx) => (
                            <tr key={rIdx} className={rIdx % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}>
                              {r.map((c, cIdx) => (
                                <td key={cIdx} className="p-2.5 font-medium text-slate-700">
                                  {formatMathText(c)}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ))}

                  {/* Interactive Options Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                    {q.options.map((opt, optIdx) => {
                      const isThisSelected = selectedChoice === optIdx;
                      const isThisCorrect = optIdx === q.correctIndex;

                      let btnClasses =
                        'bg-white border-slate-200 text-slate-800 hover:bg-slate-50 hover:border-slate-400';

                      if (isSubmitted) {
                        if (isThisCorrect) {
                          btnClasses =
                            'bg-emerald-500 text-white border-emerald-600 font-bold shadow-xs';
                        } else if (isThisSelected) {
                          btnClasses =
                            'bg-rose-500 text-white border-rose-600 font-bold shadow-xs';
                        } else {
                          btnClasses =
                            'bg-slate-100 text-slate-400 border-slate-200 opacity-60';
                        }
                      }

                      return (
                        <button
                          key={optIdx}
                          onClick={() => handleSelectAnswer(q.id, optIdx)}
                          className={`p-3.5 rounded-xl border text-xs sm:text-sm text-left transition-all font-medium flex flex-col justify-between gap-2 cursor-pointer ${btnClasses}`}
                        >
                          <div className="flex items-center justify-between w-full">
                            <div className="flex items-center gap-2">
                              <span className={`w-5 h-5 rounded-md bg-slate-100 text-slate-800 font-black text-[11px] flex items-center justify-center border border-slate-300 shrink-0 ${isSubmitted && (isThisCorrect || isThisSelected) ? 'bg-white/20 text-white border-white/20' : ''}`}>
                                {String.fromCharCode(65 + optIdx)}
                              </span>
                              <span>{cleanMathInlineMarkdown(opt)}</span>
                            </div>
                            {isSubmitted && isThisCorrect && (
                              <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
                            )}
                            {isSubmitted && isThisSelected && !isThisCorrect && (
                              <XCircle className="w-4 h-4 text-white shrink-0" />
                            )}
                          </div>

                          {q.optionTables && q.optionTables[optIdx] && (
                            <div className="w-full mt-1.5 overflow-hidden rounded-lg border border-slate-300 bg-white text-slate-900 shadow-2xs">
                              <table className="w-full text-center text-xs">
                                <thead>
                                  <tr className="bg-slate-100 border-b border-slate-300">
                                    {q.optionTables[optIdx].headers.map((h, hI) => (
                                      <th key={hI} className="px-2 py-1 font-bold text-[10px] text-slate-800 uppercase">{h}</th>
                                    ))}
                                  </tr>
                                </thead>
                                <tbody>
                                  {q.optionTables[optIdx].rows.map((r, rI) => (
                                    <tr key={rI} className="border-b border-slate-200 last:border-0">
                                      {r.map((c, cI) => (
                                        <td key={cI} className="px-2 py-1 font-semibold text-slate-700 text-xs">{c}</td>
                                      ))}
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          )}
                        </button>
                      );
                    })}
                  </div>

                  {/* Step-by-Step Mathematical Explanation */}
                  {isSubmitted && (
                    <motion.div
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`p-4 sm:p-5 rounded-2xl border-2 text-xs sm:text-sm leading-relaxed space-y-3 shadow-2xs ${
                        isCorrect
                          ? 'bg-emerald-50/90 text-emerald-950 border-emerald-300'
                          : 'bg-rose-50/90 text-rose-950 border-rose-300'
                      }`}
                    >
                      <div className="font-black flex items-center gap-2 text-xs uppercase tracking-wider border-b border-current/20 pb-2">
                        <Lightbulb className="w-4 h-4 shrink-0" />
                        <span>
                          {isCorrect ? 'Correct! Detailed Mathematical Solution & Proof:' : 'Solution & Mathematical Proof Breakdown:'}
                        </span>
                      </div>
                      <FormattedMathExplanation text={q.explanation} />
                    </motion.div>
                  )}

                  {/* PREVIOUS / NEXT STEP BUTTONS */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <button
                      disabled={activeQuestionIndex === 0}
                      onClick={() => setActiveQuestionIndex((prev) => Math.max(0, prev - 1))}
                      className={`px-4 py-2.5 rounded-xl border text-xs font-black transition-all inline-flex items-center gap-1.5 ${
                        activeQuestionIndex === 0
                          ? 'bg-slate-50 border-slate-200 text-slate-300 cursor-not-allowed'
                          : 'bg-white border-slate-200 hover:bg-slate-50 text-slate-700 cursor-pointer'
                      }`}
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>Previous</span>
                    </button>

                    <div className="text-xs font-black text-slate-400">
                      Question {activeQuestionIndex + 1} of {currentExerciseGroup.questions.length}
                    </div>

                    <button
                      disabled={activeQuestionIndex === currentExerciseGroup.questions.length - 1}
                      onClick={() => setActiveQuestionIndex((prev) => Math.min(currentExerciseGroup.questions.length - 1, prev + 1))}
                      className={`px-4 py-2.5 rounded-xl border text-xs font-black transition-all inline-flex items-center gap-1.5 ${
                        activeQuestionIndex === currentExerciseGroup.questions.length - 1
                          ? 'bg-slate-50 border-slate-200 text-slate-300 cursor-not-allowed'
                          : 'bg-white border-slate-200 hover:bg-slate-50 text-slate-700 cursor-pointer'
                      }`}
                    >
                      <span>Next</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
              </div>
            </div>
            );
          })()}
        </motion.div>

        {/* SUB-VIEW 2: TABLE MATRIX MODE */}
        {exerciseViewMode === 'table' && currentExerciseGroup && (
          <SatMathExerciseTableMatrix
            chapter={currentChapter}
            selectedExerciseNumber={selectedExerciseTab}
            userSelectedAnswers={userSelectedAnswers}
            onSelectAnswer={handleSelectAnswer}
          />
        )}
      </div>

      <div className={activeMainTab === 'visual-studio' ? 'block' : 'hidden'}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={activeMainTab === 'visual-studio' ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.12, ease: "easeOut" }}
          className="space-y-6"
        >
          {/* SUB-VIEW TOGGLE SWITCHER */}
          <div className="bg-white border border-slate-200 rounded-2xl p-2.5 shadow-2xs flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => setVisualSubTab('gallery')}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-black transition-all cursor-pointer ${
                  visualSubTab === 'gallery'
                    ? 'bg-slate-800 text-white shadow-xs'
                    : 'bg-white border border-slate-200 hover:bg-slate-50 text-slate-700'
                }`}
              >
                <TrendingUp className="w-4 h-4" />
                <span>Chapter Graphs & Tables Gallery</span>
              </button>

              <button
                onClick={() => setVisualSubTab('interactive')}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-black transition-all cursor-pointer ${
                  visualSubTab === 'interactive'
                    ? 'bg-slate-800 text-white shadow-xs'
                    : 'bg-white border border-slate-200 hover:bg-slate-50 text-slate-700'
                }`}
              >
                <Sliders className="w-4 h-4" />
                <span>Interactive Live Graph Studio</span>
              </button>
            </div>

            <span className="text-[11px] font-bold text-slate-500 px-2 hidden sm:inline">
              {visualSubTab === 'gallery'
                ? 'Coordinate graphs, function curves, and analytical tables'
                : 'Real-time parametric solvers & Desmos-style equations'}
            </span>
          </div>

          {visualSubTab === 'gallery' ? (
            <SatMathVisualGallery
              chapter={currentChapter}
              onSelectExercise={(exNum) => {
                setSelectedExerciseTab(exNum);
                setActiveMainTab('exercises');
              }}
            />
          ) : (
            <SatMathInteractiveGraphLab
              initialTopic={
                currentChapter.chapterNumber === 8
                  ? 'growth'
                  : currentChapter.chapterNumber === 4
                  ? 'quadratics'
                  : 'systems'
              }
            />
          )}
            </motion.div>
          </div>
        </div>
              </>
            )}
          </motion.div>
        )}
      <AnimatePresence>
        {isCalculatorOpen && (
          <SatCalculatorView onClose={() => setIsCalculatorOpen(false)} />
        )}
      </AnimatePresence>
    </div>
  );
};

