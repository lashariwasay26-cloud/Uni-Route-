import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, X, ChevronRight, Target, RotateCcw, Award, BarChart3 } from 'lucide-react';
import { loadSatPracticeProgress, resetAllSatProgress } from '../lib/userStorage';
import { clearAllDrillProgress } from '../data/satDrills';

interface SatLandingViewProps {
  onBackToHome: () => void;
  onSelectIntro: () => void;
  onSelectLearning: (category?: 'reading' | 'writing' | 'math' | 'drills' | 'stats') => void;
}

export const SatLandingView: React.FC<SatLandingViewProps> = ({
  onBackToHome,
  onSelectIntro,
  onSelectLearning,
}) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [progressStats, setProgressStats] = useState(() => {
    const readingTotal = 345;
    const writingTotal = 670;
    const mathTotal = 705;
    const totalQsCount = readingTotal + writingTotal + mathTotal;

    let readingAnsweredCount = 0;
    let writingAnsweredCount = 0;
    let mathAnsweredCount = 0;

    try {
      const rSaved = localStorage.getItem('sat_reading_answers');
      if (rSaved) readingAnsweredCount = Object.keys(JSON.parse(rSaved)).length;
    } catch {}
    try {
      const wSaved = localStorage.getItem('sat_writing_answers');
      if (wSaved) writingAnsweredCount = Object.keys(JSON.parse(wSaved)).length;
    } catch {}
    try {
      const mSaved = localStorage.getItem('sat_math_answers');
      if (mSaved) mathAnsweredCount = Object.keys(JSON.parse(mSaved)).length;
    } catch {}

    const totalAnsweredCount = readingAnsweredCount + writingAnsweredCount + mathAnsweredCount;
    const overallPct = totalQsCount > 0 ? Math.round((totalAnsweredCount / totalQsCount) * 100) : 0;

    return {
      reading: {
        total: readingTotal,
        answered: readingAnsweredCount,
        correct: 0,
        pct: readingTotal > 0 ? Math.round((readingAnsweredCount / readingTotal) * 100) : 0,
      },
      writing: {
        total: writingTotal,
        answered: writingAnsweredCount,
        correct: 0,
        pct: writingTotal > 0 ? Math.round((writingAnsweredCount / writingTotal) * 100) : 0,
      },
      math: {
        total: mathTotal,
        answered: mathAnsweredCount,
        correct: 0,
        pct: mathTotal > 0 ? Math.round((mathAnsweredCount / mathTotal) * 100) : 0,
      },
      overall: {
        total: totalQsCount,
        answered: totalAnsweredCount,
        correct: 0,
        pct: overallPct,
        accuracy: 0,
      }
    };
  });

  const refreshStats = useCallback(() => {
    const readingTotal = 345;
    const writingTotal = 670;
    const mathTotal = 705;
    const totalQsCount = readingTotal + writingTotal + mathTotal;

    let readingAnsweredCount = 0;
    let writingAnsweredCount = 0;
    let mathAnsweredCount = 0;

    try {
      const rSaved = localStorage.getItem('sat_reading_answers');
      if (rSaved) readingAnsweredCount = Object.keys(JSON.parse(rSaved)).length;
    } catch {}
    try {
      const wSaved = localStorage.getItem('sat_writing_answers');
      if (wSaved) writingAnsweredCount = Object.keys(JSON.parse(wSaved)).length;
    } catch {}
    try {
      const mSaved = localStorage.getItem('sat_math_answers');
      if (mSaved) mathAnsweredCount = Object.keys(JSON.parse(mSaved)).length;
    } catch {}

    const totalAnsweredCount = readingAnsweredCount + writingAnsweredCount + mathAnsweredCount;
    const overallPct = totalQsCount > 0 ? Math.round((totalAnsweredCount / totalQsCount) * 100) : 0;

    setProgressStats({
      reading: {
        total: readingTotal,
        answered: readingAnsweredCount,
        correct: 0,
        pct: readingTotal > 0 ? Math.round((readingAnsweredCount / readingTotal) * 100) : 0,
      },
      writing: {
        total: writingTotal,
        answered: writingAnsweredCount,
        correct: 0,
        pct: writingTotal > 0 ? Math.round((writingAnsweredCount / writingTotal) * 100) : 0,
      },
      math: {
        total: mathTotal,
        answered: mathAnsweredCount,
        correct: 0,
        pct: mathTotal > 0 ? Math.round((mathAnsweredCount / mathTotal) * 100) : 0,
      },
      overall: {
        total: totalQsCount,
        answered: totalAnsweredCount,
        correct: 0,
        pct: overallPct,
        accuracy: 0,
      }
    });
  }, []);

  useEffect(() => {
    // Sync with Supabase on mount
    loadSatPracticeProgress().then(() => {
      refreshStats();
    });

    const handleAuthChange = () => {
      loadSatPracticeProgress().then(() => {
        refreshStats();
      });
    };

    window.addEventListener('uniroute-auth-change', handleAuthChange);
    return () => {
      window.removeEventListener('uniroute-auth-change', handleAuthChange);
    };
  }, [refreshStats]);

  const handleSelectOption = (category: 'reading' | 'writing' | 'math' | 'drills' | 'stats') => {
    setIsPopupOpen(false);
    onSelectLearning(category);
  };

  const handleResetProgress = async () => {
    // Reset local state instantly without tearing down or remounting DOM
    const readingTotal = 345;
    const writingTotal = 670;
    const mathTotal = 705;
    const totalQsCount = readingTotal + writingTotal + mathTotal;

    setProgressStats({
      reading: { total: readingTotal, answered: 0, correct: 0, pct: 0 },
      writing: { total: writingTotal, answered: 0, correct: 0, pct: 0 },
      math: { total: mathTotal, answered: 0, correct: 0, pct: 0 },
      overall: { total: totalQsCount, answered: 0, correct: 0, pct: 0, accuracy: 0 }
    });

    // Clear underlying storage (localStorage + Supabase background sync)
    await resetAllSatProgress();
    clearAllDrillProgress();
  };

  return (
    <div className="min-h-[75vh] flex flex-col justify-between py-3 sm:py-6 relative">
      {/* Back Button & Top Navigation */}
      <div className="flex items-center justify-between mb-2">
        <button
          onClick={onBackToHome}
          className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-slate-200/90 shadow-xs text-xs font-bold text-slate-700 hover:text-indigo-600 hover:bg-slate-50 transition-all cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 text-indigo-600" />
          <span>Back to Homepage</span>
        </button>

        <span className="text-xs font-extrabold uppercase tracking-widest text-slate-400 ml-auto">
          DIGITAL SAT PREPARATION
        </span>
      </div>

      {/* Main Centered Content */}
      <div className="my-auto max-w-3xl mx-auto w-full text-center py-4 sm:py-6">
        {/* Soft Ambient Background Glow */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 sm:w-96 h-72 sm:h-96 pointer-events-none -z-10 max-w-full"
          style={{
            background: 'radial-gradient(circle, rgba(165, 180, 252, 0.2) 0%, rgba(216, 180, 254, 0.1) 40%, rgba(255, 255, 255, 0) 100%)'
          }}
        />

        {/* Eyebrow Tag */}
        <div className="inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full bg-white border border-slate-200/80 shadow-[0_2px_12px_rgba(0,0,0,0.04)] text-[10px] sm:text-[11px] font-extrabold tracking-[0.2em] text-slate-600 uppercase mb-4">
          <span className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse" />
          DIGITAL SAT PREPARATION
        </div>

        {/* Headline */}
        <h1 className="text-2xl sm:text-4xl font-black text-slate-950 tracking-tight leading-tight mb-2">
          Select Your SAT Route
        </h1>
        <p className="text-slate-600 text-xs sm:text-base max-w-md mx-auto mb-6 sm:mb-8">
          Learn the official College Board Digital SAT format or jump right into practice drills.
        </p>

        {/* Progress Tracker Card */}
        <div className="max-w-2xl mx-auto mb-10 text-left bg-white border border-slate-200/90 rounded-[24px] p-5 sm:p-6 shadow-[0_4px_20px_rgba(0,0,0,0.02)] space-y-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="p-2 bg-indigo-50 text-indigo-600 rounded-xl">
                <BarChart3 className="w-5 h-5 text-indigo-600" />
              </div>
              <div>
                <h3 className="text-sm font-black text-slate-950 tracking-tight">Your SAT Prep Progress</h3>
                <p className="text-[10px] text-slate-400 font-medium">Calculated in real-time from your active practice drills</p>
              </div>
            </div>

            {progressStats.overall.answered > 0 && (
              <button
                onClick={handleResetProgress}
                className="inline-flex items-center gap-1 text-[10px] font-bold text-slate-400 hover:text-rose-600 transition-colors bg-slate-50 hover:bg-rose-50 px-2.5 py-1.5 rounded-lg cursor-pointer"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Reset History</span>
              </button>
            )}
          </div>

          {/* Highlight Stats Dashboard */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-center bg-slate-50/50 p-4 sm:p-5 rounded-2xl border border-slate-100">
            {/* Left: Combined Circle/Ring */}
            <div className="md:col-span-5 flex items-center gap-4 md:border-r md:border-slate-200/60 md:pr-4">
              {/* Dynamic Ring */}
              <div className="relative w-16 h-16 shrink-0 flex items-center justify-center">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 80 80">
                  {/* Background Ring */}
                  <circle
                    cx="40"
                    cy="40"
                    r="32"
                    className="stroke-slate-200 fill-none"
                    strokeWidth="6"
                  />
                  {/* Active Ring */}
                  <circle
                    cx="40"
                    cy="40"
                    r="32"
                    className="stroke-indigo-600 fill-none transition-all duration-500 ease-out"
                    strokeWidth="6"
                    strokeDasharray={`${2 * Math.PI * 32}`}
                    strokeDashoffset={`${2 * Math.PI * 32 * (1 - progressStats.overall.pct / 100)}`}
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute flex flex-col items-center justify-center">
                  <span className="text-sm sm:text-base font-black text-slate-950 tracking-tight leading-none">
                    {progressStats.overall.pct}%
                  </span>
                  <span className="text-[7px] text-slate-400 font-bold uppercase tracking-wider mt-0.5 leading-none">Done</span>
                </div>
              </div>

              <div className="space-y-0.5 text-left">
                <div className="text-[9px] font-bold text-slate-400 uppercase tracking-widest leading-none">Overall Progress</div>
                <div className="text-lg font-black text-slate-950 tracking-tight leading-none">
                  {progressStats.overall.answered} <span className="text-xs text-slate-400 font-bold">/ {progressStats.overall.total} Qs</span>
                </div>
                <div className="flex items-center gap-1 mt-1 text-[10px] font-extrabold text-slate-500 leading-none">
                  {progressStats.overall.answered > 0 ? (
                    <>
                      <Award className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                      <span className="text-indigo-600 font-black">Keep it up!</span>
                    </>
                  ) : (
                    <span className="text-slate-400 font-medium">No drills started</span>
                  )}
                </div>
              </div>
            </div>

            {/* Right: Individual Subject Bars */}
            <div className="md:col-span-7 space-y-3">
              {/* Subject 1: Reading */}
              <div className="space-y-1">
                <div className="flex items-center justify-between text-[11px] font-bold text-slate-700 leading-none">
                  <span className="flex items-center gap-1">
                    <span className="text-xs">📖</span>
                    <span>1. Reading</span>
                  </span>
                  <span className="text-slate-500 text-[10px]">
                    {progressStats.reading.answered}/{progressStats.reading.total} Qs ({progressStats.reading.pct}%)
                  </span>
                </div>
                <div className="w-full h-1.5 bg-slate-200/60 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-indigo-500 rounded-full transition-all duration-500 ease-out"
                    style={{ width: `${progressStats.reading.pct}%` }}
                  />
                </div>
              </div>

              {/* Subject 2: Writing */}
              <div className="space-y-1">
                <div className="flex items-center justify-between text-[11px] font-bold text-slate-700 leading-none">
                  <span className="flex items-center gap-1">
                    <span className="text-xs">✍️</span>
                    <span>2. Writing</span>
                  </span>
                  <span className="text-slate-500 text-[10px]">
                    {progressStats.writing.answered}/{progressStats.writing.total} Qs ({progressStats.writing.pct}%)
                  </span>
                </div>
                <div className="w-full h-1.5 bg-slate-200/60 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-sky-500 rounded-full transition-all duration-500 ease-out"
                    style={{ width: `${progressStats.writing.pct}%` }}
                  />
                </div>
              </div>

              {/* Subject 3: Math */}
              <div className="space-y-1">
                <div className="flex items-center justify-between text-[11px] font-bold text-slate-700 leading-none">
                  <span className="flex items-center gap-1">
                    <span className="text-xs">📐</span>
                    <span>3. Math</span>
                  </span>
                  <span className="text-slate-500 text-[10px]">
                    {progressStats.math.answered}/{progressStats.math.total} Qs ({progressStats.math.pct}%)
                  </span>
                </div>
                <div className="w-full h-1.5 bg-slate-200/60 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-emerald-500 rounded-full transition-all duration-500 ease-out"
                    style={{ width: `${progressStats.math.pct}%` }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Motivation / Status Banner */}
          <div className="flex items-start gap-2 p-3 rounded-xl bg-indigo-50/40 border border-indigo-100/60 text-xs text-slate-600">
            <span className="text-base leading-none select-none">💡</span>
            <p className="leading-relaxed text-[11px] font-medium">
              {progressStats.overall.pct === 0 ? (
                <span>Your metrics are ready! Click <strong>"Start Learning"</strong> below and complete any chapter exercise to record your progress.</span>
              ) : progressStats.overall.pct < 100 ? (
                <span>Keep it up! You've solved <strong>{progressStats.overall.answered} questions</strong>. Focus on high-accuracy retention to maximize your predicted SAT score.</span>
              ) : (
                <span>Incredible! You have completed 100% of the entire SAT training curriculum! Keep practicing to secure your perfect 1600.</span>
              )}
            </p>
          </div>
        </div>

        {/* Two Options */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6 max-w-2xl mx-auto">
          {/* Option 1: Introduction to SAT */}
          <div
            onClick={onSelectIntro}
            className="bg-white text-slate-900 border border-slate-200/80 rounded-xl sm:rounded-[28px] p-3.5 sm:p-6 shadow-xs hover:shadow-lg hover:border-indigo-600 hover:bg-[#4338ca] hover:text-white cursor-pointer transition-all duration-150 flex flex-col items-center justify-center text-center min-h-0 sm:min-h-[200px] group relative overflow-hidden"
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-indigo-50 group-hover:bg-white/20 flex items-center justify-center mb-2 sm:mb-2.5 text-xl sm:text-2xl transition-all shadow-xs">
              📖
            </div>
            <span className="text-xs sm:text-lg font-extrabold text-slate-950 group-hover:text-white tracking-tight transition-colors">
              Introduction to SAT
            </span>
            <span className="text-[10px] sm:text-xs text-slate-500 group-hover:text-indigo-200 transition-colors mt-0.5 sm:mt-1 font-medium">
              Format, Modules & Scoring Guide
            </span>
          </div>

          {/* Option 2: Start Learning - Opens Popup Modal */}
          <div
            onClick={() => setIsPopupOpen(true)}
            className="bg-white text-slate-900 border border-slate-200/80 rounded-xl sm:rounded-[28px] p-3.5 sm:p-6 shadow-xs hover:shadow-lg hover:border-indigo-600 hover:bg-[#4338ca] hover:text-white cursor-pointer transition-all duration-150 flex flex-col items-center justify-center text-center min-h-0 sm:min-h-[200px] group relative overflow-hidden"
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-amber-50 group-hover:bg-white/20 flex items-center justify-center mb-2 sm:mb-2.5 text-xl sm:text-2xl transition-all shadow-xs">
              🚀
            </div>
            <span className="text-xs sm:text-lg font-extrabold text-slate-950 group-hover:text-white tracking-tight transition-colors">
              Start Learning
            </span>
            <span className="text-[10px] sm:text-xs text-slate-500 group-hover:text-indigo-200 transition-colors mt-0.5 sm:mt-1 font-medium">
              Practice Drills, Flashcards & Tools
            </span>
          </div>
        </div>
      </div>

      {/* Footer note */}
      <div className="text-center text-xs text-slate-400">
        College Board Digital SAT Aligned • Free Practice
      </div>

      {/* POPUP MODAL WITH ONLY 4 OPTIONS */}
      <AnimatePresence>
        {isPopupOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsPopupOpen(false)}
              className="absolute inset-0 bg-slate-900/60"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="bg-white border border-slate-200 rounded-2xl sm:rounded-[32px] max-w-2xl w-full p-4 sm:p-8 shadow-2xl relative z-10 space-y-4 sm:space-y-6 overflow-hidden max-h-[85vh] overflow-y-auto"
            >
              {/* Close Icon */}
              <button
                onClick={() => setIsPopupOpen(false)}
                className="absolute top-4 right-4 sm:top-6 sm:right-6 p-1.5 sm:p-2 rounded-full bg-slate-100 text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-all cursor-pointer"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              {/* Modal Header */}
              <div className="space-y-1 sm:space-y-2 pr-6 text-left">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-[10px] font-black uppercase tracking-wider">
                  <Target className="w-3 h-3 text-indigo-600" />
                  Digital SAT Core Modules
                </div>
                <h2 className="text-xl sm:text-3xl font-black text-slate-950 tracking-tight">
                  Select Learning Option
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Choose one of the official Digital SAT modules below to launch your practice session.
                </p>
              </div>

              {/* OPTIONS IN A GRID */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 pt-1 sm:pt-2">
                {/* OPTION 1: READING */}
                <button
                  onClick={() => handleSelectOption('reading')}
                  className="p-3 sm:p-5 rounded-xl sm:rounded-2xl bg-white border border-slate-200/90 hover:border-indigo-600 hover:bg-indigo-50/40 hover:shadow-lg transition-all cursor-pointer text-left flex flex-col justify-between min-h-0 sm:min-h-[160px] group relative overflow-hidden"
                >
                  <div>
                    <div className="flex items-center justify-between mb-1.5 sm:mb-2.5">
                      <span className="text-xl sm:text-2xl">📖</span>
                      <span className="px-2 py-0.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-[9px] sm:text-[10px] font-black uppercase tracking-wider">
                        6 Chapters
                      </span>
                    </div>
                    <h3 className="text-sm sm:text-base font-extrabold text-slate-950 group-hover:text-indigo-900 tracking-tight">
                      1. Reading
                    </h3>
                    <p className="text-[11px] sm:text-xs text-slate-600 mt-0.5 leading-relaxed line-clamp-2 sm:line-clamp-none">
                      Main idea, claims, structure, inference, evidence & vocabulary in context.
                    </p>
                  </div>
                  <div className="mt-2 sm:mt-3 flex items-center justify-between text-xs font-bold text-indigo-600 group-hover:text-indigo-700">
                    <span>Start Reading</span>
                    <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </button>

                {/* OPTION 2: WRITING */}
                <button
                  onClick={() => handleSelectOption('writing')}
                  className="p-3 sm:p-5 rounded-xl sm:rounded-2xl bg-white border border-slate-200/90 hover:border-indigo-600 hover:bg-indigo-50/40 hover:shadow-lg transition-all cursor-pointer text-left flex flex-col justify-between min-h-0 sm:min-h-[160px] group relative overflow-hidden"
                >
                  <div>
                    <div className="flex items-center justify-between mb-1.5 sm:mb-2.5">
                      <span className="text-xl sm:text-2xl">✍️</span>
                      <span className="px-2 py-0.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-[9px] sm:text-[10px] font-black uppercase tracking-wider">
                        7 Chapters
                      </span>
                    </div>
                    <h3 className="text-sm sm:text-base font-extrabold text-slate-950 group-hover:text-indigo-900 tracking-tight">
                      2. Writing
                    </h3>
                    <p className="text-[11px] sm:text-xs text-slate-600 mt-0.5 leading-relaxed line-clamp-2 sm:line-clamp-none">
                      Standard English conventions, punctuation, sentence clauses & transitions.
                    </p>
                  </div>
                  <div className="mt-2 sm:mt-3 flex items-center justify-between text-xs font-bold text-indigo-600 group-hover:text-indigo-700">
                    <span>Start Writing</span>
                    <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </button>

                {/* OPTION 3: MATH */}
                <button
                  onClick={() => handleSelectOption('math')}
                  className="p-3 sm:p-5 rounded-xl sm:rounded-2xl bg-white border border-slate-200/90 hover:border-indigo-600 hover:bg-indigo-50/40 hover:shadow-lg transition-all cursor-pointer text-left flex flex-col justify-between min-h-0 sm:min-h-[160px] group relative overflow-hidden"
                >
                  <div>
                    <div className="flex items-center justify-between mb-1.5 sm:mb-2.5">
                      <span className="text-xl sm:text-2xl">📐</span>
                      <span className="px-2 py-0.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-[9px] sm:text-[10px] font-black uppercase tracking-wider">
                        11 Chapters
                      </span>
                    </div>
                    <h3 className="text-sm sm:text-base font-extrabold text-slate-950 group-hover:text-indigo-900 tracking-tight">
                      3. Math
                    </h3>
                    <p className="text-[11px] sm:text-xs text-slate-600 mt-0.5 leading-relaxed line-clamp-2 sm:line-clamp-none">
                      Algebra, Advanced Math, Problem Solving & Geometry with step-by-step solutions.
                    </p>
                  </div>
                  <div className="mt-2 sm:mt-3 flex items-center justify-between text-xs font-bold text-indigo-600 group-hover:text-indigo-700">
                    <span>Start Math</span>
                    <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </button>

                {/* OPTION 4: DRILLS */}
                <button
                  onClick={() => handleSelectOption('drills')}
                  className="p-3 sm:p-5 rounded-xl sm:rounded-2xl bg-white border border-slate-200/90 hover:border-indigo-600 hover:bg-indigo-50/40 hover:shadow-lg transition-all cursor-pointer text-left flex flex-col justify-between min-h-0 sm:min-h-[160px] group relative overflow-hidden"
                >
                  <div>
                    <div className="flex items-center justify-between mb-1.5 sm:mb-2.5">
                      <span className="text-xl sm:text-2xl">⚡</span>
                      <span className="px-2 py-0.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-[9px] sm:text-[10px] font-black uppercase">
                        Full Practice
                      </span>
                    </div>
                    <h3 className="text-sm sm:text-base font-extrabold text-slate-950 group-hover:text-indigo-900 tracking-tight">
                      4. Drills
                    </h3>
                    <p className="text-[11px] sm:text-xs text-slate-600 mt-0.5 leading-relaxed line-clamp-2 sm:line-clamp-none">
                      Timed mixed speed drills, 400-1600 Score Predictor & Vocab Flashcards.
                    </p>
                  </div>
                  <div className="mt-2 sm:mt-3 flex items-center justify-between text-xs font-bold text-indigo-600 group-hover:text-indigo-700">
                    <span>Start Speed Drills</span>
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
