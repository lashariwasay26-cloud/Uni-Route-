import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpenCheck, CheckCircle2, XCircle, Calculator, Sparkles, HelpCircle, BookOpen, ChevronRight, ArrowLeft, Target, ChevronDown, ChevronUp, X, Grid, Layers, Compass, TrendingUp, Sliders } from 'lucide-react';
import { SAT_QUESTIONS, SAT_FLASHCARDS, SAT_FORMULAS } from '../../data/satData';
import { SatQuestion, SatFlashcard } from '../../types';
import { SatReadingSectionExplorer } from '../reading/SatReadingSectionExplorer';
import { SatWritingSectionExplorer } from '../writing/SatWritingSectionExplorer';
import { SatMathSectionExplorer } from '../math/SatMathSectionExplorer';
import { SatMathStatisticsChapter } from '../math/SatMathStatisticsChapter';
import { SatDrillsHub } from '../satDrills/SatDrillsHub';
import { SatCalculatorView } from '../math/SatCalculatorView';

interface SatPreparationHubProps {
  initialCategory?: 'reading' | 'writing' | 'math' | 'drills' | 'stats' | 'calculator';
  onBackToHome?: () => void;
}

export type MainCategory = 'reading' | 'writing' | 'math' | 'drills' | 'stats' | 'calculator';

export const SatPreparationHub: React.FC<SatPreparationHubProps> = ({
  initialCategory = 'reading',
  onBackToHome,
}) => {
  const [activeCategory, setActiveCategory] = useState<MainCategory>(initialCategory);
  const [isOptionPopupOpen, setIsOptionPopupOpen] = useState(false);

  // Sync if initialCategory prop changes
  useEffect(() => {
    setActiveCategory(initialCategory);
  }, [initialCategory]);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [activeCategory]);

  // Practice / Quiz State
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [answeredCount, setAnsweredCount] = useState(0);

  // Sub-tools for Drills
  const [drillsSubView, setDrillsSubView] = useState<'quiz' | 'calculator' | 'flashcards'>('quiz');

  // Flashcards State
  const [currentFlashcardIndex, setCurrentFlashcardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  // SAT Score Predictor State
  const [rwScore, setRwScore] = useState<number>(680);
  const [mathScore, setMathScore] = useState<number>(720);

  // Filter questions based on activeCategory (memoized to eliminate rendering delay)
  const filteredQuestions = useMemo((): SatQuestion[] => {
    if (activeCategory === 'reading') {
      return SAT_QUESTIONS.filter((q) => q.section === 'Reading' || q.section === 'Reading & Writing');
    }
    if (activeCategory === 'writing') {
      return SAT_QUESTIONS.filter((q) => q.section === 'Writing' || q.section === 'Reading & Writing');
    }
    // Drills -> All questions / mixed
    return SAT_QUESTIONS;
  }, [activeCategory]);
  const safeQuestionIndex = currentQuestionIndex % (filteredQuestions.length || 1);
  const currentQuestion: SatQuestion | undefined = filteredQuestions[safeQuestionIndex];
  const currentFlashcard: SatFlashcard = SAT_FLASHCARDS[currentFlashcardIndex % SAT_FLASHCARDS.length];

  const handleSelectCategoryFromModal = (category: MainCategory) => {
    setActiveCategory(category);
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setIsAnswerSubmitted(false);
    setIsOptionPopupOpen(false);
  };

  const handleOptionSelect = (index: number) => {
    if (isAnswerSubmitted) return;
    setSelectedOption(index);
  };

  const handleSubmitAnswer = () => {
    if (selectedOption === null || isAnswerSubmitted || !currentQuestion) return;
    setIsAnswerSubmitted(true);
    setAnsweredCount((prev) => prev + 1);
    if (selectedOption === currentQuestion.correctIndex) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    setSelectedOption(null);
    setIsAnswerSubmitted(false);
    setCurrentQuestionIndex((prev) => (prev + 1) % (filteredQuestions.length || 1));
  };

  const totalScore = rwScore + mathScore;
  const getPercentile = (total: number) => {
    if (total >= 1500) return 'Top 1% (99th Percentile - Ivy League Target)';
    if (total >= 1400) return 'Top 5% (95th Percentile - Top 30 Universities)';
    if (total >= 1300) return 'Top 15% (85th Percentile - Strong Global Target)';
    if (total >= 1200) return 'Top 25% (75th Percentile - Competitive Merit)';
    return 'Good Baseline Score - Focus on Writing or Math Drills';
  };

  return (
    <div id="sat-prep-hub" className="space-y-6 pb-16 max-w-4xl mx-auto">
      {/* Top Bar: Back Button & Module Selector Popup Launcher */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
        {onBackToHome ? (
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-white border border-slate-200/90 shadow-xs text-xs font-bold text-slate-700 hover:text-indigo-600 hover:bg-slate-50 transition-all cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 text-indigo-600" />
            <span>Back to SAT Route</span>
          </button>
        ) : <div />}

        <div className="flex items-center gap-2">
          {/* Current Active Category Pill */}
          <span className="px-3.5 py-2 rounded-2xl bg-indigo-50 border border-indigo-200/80 text-indigo-700 text-xs font-extrabold uppercase tracking-wider flex items-center gap-1.5 shadow-2xs">
            {activeCategory === 'reading' && '📖 1. Reading'}
            {activeCategory === 'writing' && '✍️ 2. Writing'}
            {activeCategory === 'math' && '📐 3. Math'}
            {activeCategory === 'drills' && '⚡ 4. Drills'}
            {activeCategory === 'stats' && '📊 5. Advanced Stats'}
            {activeCategory === 'calculator' && '🧮 5. SAT Calculator'}
          </span>

          {/* Popup Modal Launcher Button */}
          <button
            onClick={() => setIsOptionPopupOpen(true)}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-white hover:bg-indigo-50 border border-slate-200/90 hover:border-indigo-300 text-slate-800 hover:text-indigo-700 text-xs font-bold transition-all cursor-pointer shadow-xs"
          >
            <Grid className="w-4 h-4 text-indigo-600" />
            <span>Switch Option</span>
          </button>
        </div>
      </div>

      {/* ANIMATED WRAPPER FOR CATEGORIES */}
      <div className="relative overflow-x-hidden w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, x: 15 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -15 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className="w-full space-y-6"
          >
            {/* READING SECTION EXPLORER */}
            {activeCategory === 'reading' && (
              <SatReadingSectionExplorer />
            )}

            {/* WRITING SECTION EXPLORER */}
            {activeCategory === 'writing' && (
              <SatWritingSectionExplorer />
            )}

            {/* MATH SECTION EXPLORER */}
            {activeCategory === 'math' && (
              <SatMathSectionExplorer />
            )}

            {/* ADVANCED STATISTICS HANDBOOK & LAB */}
            {activeCategory === 'stats' && (
              <SatMathStatisticsChapter />
            )}

            {/* SAT ADAPTIVE DRILLS SYSTEM */}
            {activeCategory === 'drills' && (
              <SatDrillsHub />
            )}

            {/* SAT INTEGRATED CALCULATOR */}
            {activeCategory === 'calculator' && (
              <SatCalculatorView inline={true} />
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* POPUP MODAL WITH THE 4 OPTIONS */}
      <AnimatePresence>
        {isOptionPopupOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOptionPopupOpen(false)}
              className="absolute inset-0"
            />

            {/* Dialog Content */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="bg-white border border-slate-200 rounded-[32px] max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative z-10 space-y-6 overflow-hidden max-h-[90vh] overflow-y-auto"
            >
              {/* Close Icon */}
              <button
                onClick={() => setIsOptionPopupOpen(false)}
                className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-all cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="space-y-2 pr-8 text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-[11px] font-black uppercase tracking-wider">
                  <Target className="w-3.5 h-3.5 text-indigo-600" />
                  Digital SAT Core Modules
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
                  Select Learning Option
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Choose one of the 4 official learning options below to switch your practice session.
                </p>
              </div>

              {/* OPTIONS IN A GRID */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 pt-2">
                {/* OPTION 1: READING */}
                <button
                  onClick={() => handleSelectCategoryFromModal('reading')}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer text-left flex flex-col justify-between min-h-[160px] group relative overflow-hidden ${
                    activeCategory === 'reading'
                      ? 'bg-blue-50/30 border-blue-600 ring-2 ring-blue-600/20 shadow-md'
                      : 'bg-white border-slate-200/90 hover:border-blue-600 hover:bg-blue-50/20 hover:shadow-lg'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2.5">
                      <span className="text-2xl">📖</span>
                      <span className="px-2.5 py-0.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-[10px] font-black uppercase tracking-wider">
                        6 Chapters
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <h3 className="text-base font-extrabold tracking-tight text-slate-950 group-hover:text-blue-900">
                        1. Reading
                      </h3>
                      {activeCategory === 'reading' && (
                        <span className="w-3 h-3 rounded-full bg-blue-600 ring-4 ring-blue-100 flex-shrink-0 animate-pulse" title="Selected" />
                      )}
                    </div>
                    <p className="text-xs mt-1 leading-relaxed text-slate-600">
                      Main idea, claims, structure, inference, evidence & vocabulary in context.
                    </p>
                  </div>
                  <div className="mt-3 flex items-center justify-between text-xs font-bold text-indigo-600 group-hover:text-indigo-700">
                    <span className="flex items-center gap-1.5">
                      {activeCategory === 'reading' && (
                        <span className="w-2 h-2 rounded-full bg-blue-600" />
                      )}
                      {activeCategory === 'reading' ? 'Active Module' : 'Select Reading'}
                    </span>
                    <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </button>

                {/* OPTION 2: WRITING */}
                <button
                  onClick={() => handleSelectCategoryFromModal('writing')}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer text-left flex flex-col justify-between min-h-[160px] group relative overflow-hidden ${
                    activeCategory === 'writing'
                      ? 'bg-blue-50/30 border-blue-600 ring-2 ring-blue-600/20 shadow-md'
                      : 'bg-white border-slate-200/90 hover:border-blue-600 hover:bg-blue-50/20 hover:shadow-lg'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2.5">
                      <span className="text-2xl">✍️</span>
                      <span className="px-2.5 py-0.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-[10px] font-black uppercase tracking-wider">
                        7 Chapters
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <h3 className="text-base font-extrabold tracking-tight text-slate-950 group-hover:text-blue-900">
                        2. Writing
                      </h3>
                      {activeCategory === 'writing' && (
                        <span className="w-3 h-3 rounded-full bg-blue-600 ring-4 ring-blue-100 flex-shrink-0 animate-pulse" title="Selected" />
                      )}
                    </div>
                    <p className="text-xs mt-1 leading-relaxed text-slate-600">
                      Standard English conventions, punctuation, sentence clauses & transitions.
                    </p>
                  </div>
                  <div className="mt-3 flex items-center justify-between text-xs font-bold text-indigo-600 group-hover:text-indigo-700">
                    <span className="flex items-center gap-1.5">
                      {activeCategory === 'writing' && (
                        <span className="w-2 h-2 rounded-full bg-blue-600" />
                      )}
                      {activeCategory === 'writing' ? 'Active Module' : 'Select Writing'}
                    </span>
                    <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </button>

                {/* OPTION 3: MATH */}
                <button
                  onClick={() => handleSelectCategoryFromModal('math')}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer text-left flex flex-col justify-between min-h-[160px] group relative overflow-hidden ${
                    activeCategory === 'math'
                      ? 'bg-blue-50/30 border-blue-600 ring-2 ring-blue-600/20 shadow-md'
                      : 'bg-white border-slate-200/90 hover:border-blue-600 hover:bg-blue-50/20 hover:shadow-lg'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2.5">
                      <span className="text-2xl">📐</span>
                      <span className="px-2.5 py-0.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-[10px] font-black uppercase tracking-wider">
                        11 Chapters
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <h3 className="text-base font-extrabold tracking-tight text-slate-950 group-hover:text-blue-900">
                        3. Math
                      </h3>
                      {activeCategory === 'math' && (
                        <span className="w-3 h-3 rounded-full bg-blue-600 ring-4 ring-blue-100 flex-shrink-0 animate-pulse" title="Selected" />
                      )}
                    </div>
                    <p className="text-xs mt-1 leading-relaxed text-slate-600">
                      Algebra, Advanced Math, Problem Solving & Geometry with step-by-step solutions.
                    </p>
                  </div>
                  <div className="mt-3 flex items-center justify-between text-xs font-bold text-indigo-600 group-hover:text-indigo-700">
                    <span className="flex items-center gap-1.5">
                      {activeCategory === 'math' && (
                        <span className="w-2 h-2 rounded-full bg-blue-600" />
                      )}
                      {activeCategory === 'math' ? 'Active Module' : 'Select Math'}
                    </span>
                    <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </button>

                {/* OPTION 4: DRILLS */}
                <button
                  onClick={() => handleSelectCategoryFromModal('drills')}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer text-left flex flex-col justify-between min-h-[160px] group relative overflow-hidden ${
                    activeCategory === 'drills'
                      ? 'bg-blue-50/30 border-blue-600 ring-2 ring-blue-600/20 shadow-md'
                      : 'bg-white border-slate-200/90 hover:border-blue-600 hover:bg-blue-50/20 hover:shadow-lg'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2.5">
                      <span className="text-2xl">⚡</span>
                      <span className="px-2.5 py-0.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-[10px] font-black uppercase">
                        Full Practice
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <h3 className="text-base font-extrabold tracking-tight text-slate-950 group-hover:text-blue-900">
                        4. Drills
                      </h3>
                      {activeCategory === 'drills' && (
                        <span className="w-3 h-3 rounded-full bg-blue-600 ring-4 ring-blue-100 flex-shrink-0 animate-pulse" title="Selected" />
                      )}
                    </div>
                    <p className="text-xs mt-1 leading-relaxed text-slate-600">
                      Timed mixed speed drills, 400-1600 Score Predictor & Vocab Flashcards.
                    </p>
                  </div>
                  <div className="mt-3 flex items-center justify-between text-xs font-bold text-indigo-600 group-hover:text-indigo-700">
                    <span className="flex items-center gap-1.5">
                      {activeCategory === 'drills' && (
                        <span className="w-2 h-2 rounded-full bg-blue-600" />
                      )}
                      {activeCategory === 'drills' ? 'Active Module' : 'Select Speed Drills'}
                    </span>
                    <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </button>

                {/* OPTION 5: CALCULATOR */}
                <button
                  onClick={() => handleSelectCategoryFromModal('calculator')}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer text-left flex flex-col justify-between min-h-[160px] group relative overflow-hidden ${
                    activeCategory === 'calculator'
                      ? 'bg-blue-50/30 border-blue-600 ring-2 ring-blue-600/20 shadow-md'
                      : 'bg-white border-slate-200/90 hover:border-blue-600 hover:bg-blue-50/20 hover:shadow-lg'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2.5">
                      <span className="text-2xl">🧮</span>
                      <span className="px-2.5 py-0.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-[10px] font-black uppercase">
                        SUITE
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <h3 className="text-base font-extrabold tracking-tight text-slate-950 group-hover:text-blue-900">
                        5. Calculator
                      </h3>
                      {activeCategory === 'calculator' && (
                        <span className="w-3 h-3 rounded-full bg-blue-600 ring-4 ring-blue-100 flex-shrink-0 animate-pulse" title="Selected" />
                      )}
                    </div>
                    <p className="text-xs mt-1 leading-relaxed text-slate-600">
                      High-precision scientific calculator optimized for SAT math problems.
                    </p>
                  </div>
                  <div className="mt-3 flex items-center justify-between text-xs font-bold text-indigo-600 group-hover:text-indigo-700">
                    <span className="flex items-center gap-1.5">
                      {activeCategory === 'calculator' && (
                        <span className="w-2 h-2 rounded-full bg-blue-600" />
                      )}
                      {activeCategory === 'calculator' ? 'Active Module' : 'Select Calculator'}
                    </span>
                    <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
