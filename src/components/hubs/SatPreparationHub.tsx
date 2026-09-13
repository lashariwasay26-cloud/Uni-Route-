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
  user?: { email: string; id: string } | null;
  onOpenAuth?: (message?: string) => void;
}

export type MainCategory = 'reading' | 'writing' | 'math' | 'drills' | 'stats' | 'calculator';

export const SatPreparationHub: React.FC<SatPreparationHubProps> = ({
  initialCategory = 'reading',
  onBackToHome,
  user,
  onOpenAuth,
}) => {
  // Guest Diagnostic Quiz State
  const [diagIndex, setDiagIndex] = useState(0);
  const [diagSelected, setDiagSelected] = useState<number | null>(null);
  const [diagSubmitted, setDiagSubmitted] = useState(false);
  const [diagScore, setDiagScore] = useState(0);
  const [diagReadingCorrect, setDiagReadingCorrect] = useState(0);
  const [diagWritingCorrect, setDiagWritingCorrect] = useState(0);
  const [diagMathCorrect, setDiagMathCorrect] = useState(0);
  const [diagCompleted, setDiagCompleted] = useState(false);

  const diagnosticQuestions = useMemo(() => {
    // Balanced set of 10 questions: 4 Reading, 3 Writing, 3 Math
    const reading = SAT_QUESTIONS.filter(q => q.section === 'Reading' || q.id.startsWith('r-')).slice(0, 4);
    const writing = SAT_QUESTIONS.filter(q => q.section === 'Writing' || q.id.startsWith('w-')).slice(0, 3);
    const math = SAT_QUESTIONS.filter(q => q.section === 'Math' || q.id.startsWith('m-') || !['Reading', 'Writing', 'Reading & Writing'].includes(q.section)).slice(0, 3);
    return [...reading, ...writing, ...math].slice(0, 10);
  }, []);

  const currentDiagQuestion = diagnosticQuestions[diagIndex];

  const handleDiagOptionSelect = (idx: number) => {
    if (diagSubmitted) return;
    setDiagSelected(idx);
  };

  const handleDiagSubmit = () => {
    if (diagSelected === null || diagSubmitted || !currentDiagQuestion) return;
    setDiagSubmitted(true);
    const isCorrect = diagSelected === currentDiagQuestion.correctIndex;
    if (isCorrect) {
      setDiagScore(prev => prev + 1);
      if (currentDiagQuestion.section === 'Reading') {
        setDiagReadingCorrect(prev => prev + 1);
      } else if (currentDiagQuestion.section === 'Writing') {
        setDiagWritingCorrect(prev => prev + 1);
      } else {
        setDiagMathCorrect(prev => prev + 1);
      }
    }
  };

  const handleDiagNext = () => {
    if (diagIndex < 9) {
      setDiagIndex(prev => prev + 1);
      setDiagSelected(null);
      setDiagSubmitted(false);
    } else {
      setDiagCompleted(true);
    }
  };

  const handleDiagReset = () => {
    setDiagIndex(0);
    setDiagSelected(null);
    setDiagSubmitted(false);
    setDiagScore(0);
    setDiagReadingCorrect(0);
    setDiagWritingCorrect(0);
    setDiagMathCorrect(0);
    setDiagCompleted(false);
  };

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

    // Freemium Limit Check: Non-logged-in users get a maximum of 5 free practice questions
    if (!user) {
      const freeQuestionsCount = parseInt(localStorage.getItem('uniroute_free_questions_count') || '0', 10);
      if (freeQuestionsCount >= 5) {
        onOpenAuth?.(
          'You have completed your 5 free SAT practice questions! Sign up for a free account to unlock thousands of expert practice drills, real-time detailed explanations, and full mock tests.'
        );
        return;
      }
      localStorage.setItem('uniroute_free_questions_count', (freeQuestionsCount + 1).toString());
    }

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

  // RENDER GUEST DIAGNOSTIC QUIZ
  if (!user) {
    return (
      <div id="sat-prep-hub-guest" className="space-y-6 pb-16 max-w-2xl mx-auto text-left">
        {/* Top Back Bar */}
        <div className="flex items-center justify-between pt-2">
          {onBackToHome && (
            <button
              onClick={onBackToHome}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-white border border-slate-200/90 shadow-xs text-xs font-bold text-slate-700 hover:text-indigo-600 hover:bg-slate-50 transition-all cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 text-indigo-600" />
              <span>Back to SAT Route</span>
            </button>
          )}
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400">
            SAT Diagnostic Evaluator
          </span>
        </div>

        {!diagCompleted ? (
          <div className="bg-white rounded-[32px] border border-slate-200/90 shadow-[0_4px_24px_rgba(0,0,0,0.03)] p-6 sm:p-8 space-y-6">
            {/* Header / Tracker */}
            <div className="flex items-center justify-between">
              <span className="px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-extrabold">
                Question {diagIndex + 1} of 10
              </span>
              <span className="text-xs font-bold text-slate-500">
                Section: {currentDiagQuestion?.section}
              </span>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
              <div
                className="bg-indigo-600 h-full transition-all duration-300"
                style={{ width: `${(diagIndex / 10) * 100}%` }}
              />
            </div>

            {/* Question Text */}
            <div className="space-y-4">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                {currentDiagQuestion?.topic} ({currentDiagQuestion?.difficulty} Difficulty)
              </span>
              <p className="text-slate-900 font-extrabold text-base leading-relaxed whitespace-pre-line">
                {currentDiagQuestion?.question}
              </p>
            </div>

            {/* Options */}
            <div className="grid grid-cols-1 gap-3 pt-2">
              {currentDiagQuestion?.options.map((option, idx) => {
                const isSelected = diagSelected === idx;
                const isCorrect = idx === currentDiagQuestion.correctIndex;
                let optionStyle = "border-slate-200/90 hover:border-slate-300 hover:bg-slate-50 text-slate-800";
                
                if (diagSubmitted) {
                  if (isCorrect) {
                    optionStyle = "bg-emerald-50 border-emerald-500 text-emerald-900 shadow-xs";
                  } else if (isSelected) {
                    optionStyle = "bg-rose-50 border-rose-500 text-rose-900 shadow-xs";
                  } else {
                    optionStyle = "border-slate-100 opacity-60 text-slate-400";
                  }
                } else if (isSelected) {
                  optionStyle = "bg-indigo-50 border-indigo-600 text-indigo-950 ring-2 ring-indigo-600/20";
                }

                return (
                  <button
                    key={idx}
                    disabled={diagSubmitted}
                    onClick={() => handleDiagOptionSelect(idx)}
                    className={`p-4 rounded-xl border text-left text-sm font-bold transition-all cursor-pointer flex items-center justify-between ${optionStyle}`}
                  >
                    <span>{option}</span>
                    {diagSubmitted && isCorrect && <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 ml-2" />}
                    {diagSubmitted && isSelected && !isCorrect && <XCircle className="w-4 h-4 text-rose-600 shrink-0 ml-2" />}
                  </button>
                );
              })}
            </div>

            {/* Submit / Next Button */}
            <div className="pt-4 border-t border-slate-100 flex items-center justify-end gap-3">
              {!diagSubmitted ? (
                <button
                  disabled={diagSelected === null}
                  onClick={handleDiagSubmit}
                  className="px-6 py-3 rounded-xl bg-slate-950 text-white hover:bg-slate-900 text-sm font-bold cursor-pointer transition-colors disabled:opacity-40"
                >
                  Submit Answer
                </button>
              ) : (
                <button
                  onClick={handleDiagNext}
                  className="px-6 py-3 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 text-sm font-bold cursor-pointer transition-colors"
                >
                  {diagIndex === 9 ? 'Finish Quiz' : 'Next Question'}
                </button>
              )}
            </div>

            {/* Explanation box */}
            {diagSubmitted && (
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 text-xs sm:text-sm text-slate-600 leading-relaxed mt-4">
                <span className="font-bold text-slate-900 block mb-1">Explanation:</span>
                {currentDiagQuestion?.explanation}
              </div>
            )}
          </div>
        ) : (
          <div className="bg-white rounded-[32px] border border-slate-200/90 shadow-[0_4px_24px_rgba(0,0,0,0.03)] p-6 sm:p-8 space-y-8 text-center">
            {/* Celebration header */}
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-[10px] font-black uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                Diagnostic Complete
              </div>
              <h2 className="text-3xl font-black text-slate-950 tracking-tight">
                Your Predicted SAT Score
              </h2>
              <p className="text-slate-600 text-sm max-w-md mx-auto">
                Based on your diagnostic answers across reading, standard English conventions, and geometry, we have formulated your projected score.
              </p>
            </div>

            {/* Giant Score Circle */}
            <div className="relative w-48 h-48 mx-auto flex flex-col items-center justify-center rounded-full bg-slate-950 text-white shadow-xl">
              <span className="text-[10px] font-black tracking-widest text-indigo-400 uppercase">
                ESTIMATED SCORE
              </span>
              <span className="text-5xl font-black mt-1">
                {400 + (diagScore * 120)}
              </span>
              <span className="text-[10px] text-slate-400 font-bold mt-1">
                Range: 400 - 1600
              </span>
            </div>

            {/* Score Breakdown Row */}
            <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 text-left">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                  READING & WRITING
                </span>
                <span className="text-xl font-black text-slate-950 block mt-1">
                  {Math.min(800, 200 + ((diagReadingCorrect + diagWritingCorrect) * 85))} / 800
                </span>
                <span className="text-[10px] text-slate-500 font-semibold mt-0.5 block">
                  Correct: {diagReadingCorrect + diagWritingCorrect} of 7 questions
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 text-left">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                  MATHEMATICS
                </span>
                <span className="text-xl font-black text-slate-950 block mt-1">
                  {Math.min(800, 200 + (diagMathCorrect * 200))} / 800
                </span>
                <span className="text-[10px] text-slate-500 font-semibold mt-0.5 block">
                  Correct: {diagMathCorrect} of 3 questions
                </span>
              </div>
            </div>

            {/* Premium Gated Call to Action Box */}
            <div className="p-6 rounded-[24px] bg-indigo-50/50 border border-indigo-200/80 space-y-4 max-w-lg mx-auto">
              <span className="text-indigo-800 text-sm font-extrabold leading-relaxed block">
                For complete SAT guidance, practice drills, and up to 3,000 questions in the question bank, sign in.
              </span>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={() => onOpenAuth?.('Create your free Uni Route account to unlock our entire digital question bank of 3,000+ questions, adaptive math/reading matrices, and comprehensive mock tests.')}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 text-sm font-bold transition-all cursor-pointer shadow-sm"
                >
                  Sign In to Unlock 3,000+ Questions
                </button>
                <button
                  onClick={handleDiagReset}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 text-sm font-bold transition-all cursor-pointer"
                >
                  Retake Diagnostic Quiz
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

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
              <SatReadingSectionExplorer user={user} onOpenAuth={onOpenAuth} />
            )}

            {/* WRITING SECTION EXPLORER */}
            {activeCategory === 'writing' && (
              <SatWritingSectionExplorer user={user} onOpenAuth={onOpenAuth} />
            )}

            {/* MATH SECTION EXPLORER */}
            {activeCategory === 'math' && (
              <SatMathSectionExplorer user={user} onOpenAuth={onOpenAuth} />
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
