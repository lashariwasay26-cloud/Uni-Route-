import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Award,
  BarChart3,
  CheckCircle2,
  XCircle,
  HelpCircle,
  RotateCcw,
  ArrowLeft,
  ChevronDown,
  ChevronUp,
  Target,
  Sparkles,
  BookOpen,
  FileText
} from 'lucide-react';
import {
  ModuleSessionResult,
  SatDrillQuestion
} from '../../data/satDrills/types';
import { ALL_DRILL_QUESTIONS } from '../../data/satDrills';

interface SatDrillResultsProps {
  drillId: number;
  rwM1: ModuleSessionResult;
  rwM2: ModuleSessionResult;
  mathM1: ModuleSessionResult;
  mathM2: ModuleSessionResult;
  estimatedRwScore: number;
  estimatedMathScore: number;
  onRetake: () => void;
  onBackToHub: () => void;
}

export const SatDrillResults: React.FC<SatDrillResultsProps> = ({
  drillId,
  rwM1,
  rwM2,
  mathM1,
  mathM2,
  estimatedRwScore,
  estimatedMathScore,
  onRetake,
  onBackToHub
}) => {
  const [activeTab, setActiveTab] = useState<'summary' | 'review'>('summary');
  const [reviewFilter, setReviewFilter] = useState<'all' | 'incorrect' | 'correct'>('all');
  const [expandedQuestionId, setExpandedQuestionId] = useState<string | null>(null);

  const totalEstimatedScore = estimatedRwScore + estimatedMathScore;

  // Aggregate questions across all 4 modules for this drill
  const allAttemptedQuestions = ALL_DRILL_QUESTIONS.filter(
    (q) =>
      q.drillId === drillId &&
      ((q.section === 'Reading & Writing' && q.module === 'Module 1') ||
       (q.section === 'Reading & Writing' && q.module === 'Module 2' && q.route === rwM2.route) ||
       (q.section === 'Math' && q.module === 'Module 1') ||
       (q.section === 'Math' && q.module === 'Module 2' && q.route === mathM2.route))
  );

  // Map responses
  const getResponseForQuestion = (q: SatDrillQuestion) => {
    if (q.section === 'Reading & Writing') {
      return q.module === 'Module 1' ? rwM1.responses[q.id] : rwM2.responses[q.id];
    } else {
      return q.module === 'Module 1' ? mathM1.responses[q.id] : mathM2.responses[q.id];
    }
  };

  const filteredReviewQuestions = allAttemptedQuestions.filter((q) => {
    const resp = getResponseForQuestion(q);
    if (reviewFilter === 'correct') return resp?.isCorrect;
    if (reviewFilter === 'incorrect') return !resp?.isCorrect;
    return true;
  });

  return (
    <div className="max-w-4xl mx-auto space-y-6 py-6 px-4">
      {/* Top Header Bar */}
      <div className="flex items-center justify-between border-b border-slate-200 pb-4">
        <button
          onClick={onBackToHub}
          className="px-3.5 py-2 rounded-xl bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-bold flex items-center gap-2 shadow-xs transition-all cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to SAT Drills</span>
        </button>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setActiveTab('summary')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'summary'
                ? 'bg-slate-900 text-white shadow-md'
                : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
            }`}
          >
            Performance Summary
          </button>
          <button
            onClick={() => setActiveTab('review')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'review'
                ? 'bg-slate-900 text-white shadow-md'
                : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
            }`}
          >
            Question Review ({allAttemptedQuestions.length})
          </button>
        </div>
      </div>

      {activeTab === 'summary' ? (
        <div className="space-y-6">
          {/* Main Score Hero Card */}
          <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 text-xs font-bold mb-3">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Uni Route Practice Drill #{drillId} Completed</span>
                </div>
                <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                  Estimated SAT Practice Score
                </h1>
                <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-md">
                  Uni Route SAT Practice estimate based on adaptive difficulty weighting and item accuracy.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 text-center min-w-[180px]">
                <span className="text-4xl sm:text-5xl font-black text-white block tracking-tight">
                  {totalEstimatedScore}
                </span>
                <span className="text-[11px] uppercase tracking-wider font-bold text-indigo-200 mt-1 block">
                  Out of 1600
                </span>
              </div>
            </div>

            {/* Score Breakdown Pills */}
            <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-white/10">
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <span className="text-xs font-semibold text-slate-300 block">Reading & Writing</span>
                <span className="text-2xl font-black text-white mt-1 block">{estimatedRwScore} / 800</span>
                <span className="text-[10px] text-indigo-300 mt-0.5 block">
                  Adaptive Route: {rwM2.route === 'Higher' ? 'Advanced' : 'Standard'}
                </span>
              </div>

              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <span className="text-xs font-semibold text-slate-300 block">Math</span>
                <span className="text-2xl font-black text-white mt-1 block">{estimatedMathScore} / 800</span>
                <span className="text-[10px] text-blue-300 mt-0.5 block">
                  Adaptive Route: {mathM2.route === 'Higher' ? 'Advanced' : 'Standard'}
                </span>
              </div>
            </div>
          </div>

          {/* Module Accuracy Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white border border-slate-200/90 rounded-2xl p-5 shadow-xs">
              <h3 className="text-sm font-bold text-slate-900 mb-3 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-indigo-600" />
                <span>Reading & Writing Modules</span>
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs p-3 rounded-xl bg-slate-50">
                  <span className="font-semibold text-slate-700">Module 1 (Base)</span>
                  <span className="font-bold text-slate-900">{rwM1.totalCorrect} / {rwM1.totalQuestions} ({rwM1.accuracyPercent}%)</span>
                </div>
                <div className="flex items-center justify-between text-xs p-3 rounded-xl bg-slate-50">
                  <span className="font-semibold text-slate-700">Module 2 (Adaptive)</span>
                  <span className="font-bold text-slate-900">{rwM2.totalCorrect} / {rwM2.totalQuestions} ({rwM2.accuracyPercent}%)</span>
                </div>
              </div>
            </div>

            <div className="bg-white border border-slate-200/90 rounded-2xl p-5 shadow-xs">
              <h3 className="text-sm font-bold text-slate-900 mb-3 flex items-center gap-2">
                <BarChart3 className="w-4 h-4 text-blue-600" />
                <span>Math Modules</span>
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs p-3 rounded-xl bg-slate-50">
                  <span className="font-semibold text-slate-700">Module 1 (Base)</span>
                  <span className="font-bold text-slate-900">{mathM1.totalCorrect} / {mathM1.totalQuestions} ({mathM1.accuracyPercent}%)</span>
                </div>
                <div className="flex items-center justify-between text-xs p-3 rounded-xl bg-slate-50">
                  <span className="font-semibold text-slate-700">Module 2 (Adaptive)</span>
                  <span className="font-bold text-slate-900">{mathM2.totalCorrect} / {mathM2.totalQuestions} ({mathM2.accuracyPercent}%)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-between pt-4">
            <button
              onClick={onRetake}
              className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-black text-white text-xs font-bold flex items-center gap-2 shadow-sm transition-all cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Retake Drill #{drillId}</span>
            </button>

            <button
              onClick={() => setActiveTab('review')}
              className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold flex items-center gap-2 shadow-sm transition-all cursor-pointer"
            >
              <span>Review All Explanations</span>
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        </div>
      ) : (
        /* Question Review Tab */
        <div className="space-y-4">
          {/* Filters */}
          <div className="flex items-center gap-2 bg-white p-2 rounded-2xl border border-slate-200 shadow-xs">
            {(['all', 'incorrect', 'correct'] as const).map((filter) => (
              <button
                key={filter}
                onClick={() => setReviewFilter(filter)}
                className={`flex-1 py-1.5 rounded-xl text-xs font-bold capitalize transition-all cursor-pointer ${
                  reviewFilter === filter
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Question Review List */}
          <div className="space-y-3">
            {filteredReviewQuestions.map((q) => {
              const resp = getResponseForQuestion(q);
              const isExpanded = expandedQuestionId === q.id;

              return (
                <div
                  key={q.id}
                  className="bg-white border border-slate-200/90 rounded-2xl overflow-hidden shadow-xs transition-all"
                >
                  <div
                    onClick={() => setExpandedQuestionId(isExpanded ? null : q.id)}
                    className="p-4 flex items-center justify-between cursor-pointer hover:bg-slate-50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      {resp?.isCorrect ? (
                        <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                      ) : (
                        <XCircle className="w-5 h-5 text-rose-500 shrink-0" />
                      )}
                      <div>
                        <span className="text-xs font-bold text-slate-900 block">
                          {q.section} • {q.module} — Q{q.questionNumber}
                        </span>
                        <span className="text-[11px] text-slate-500 font-medium">
                          {q.domain} • {q.skill}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${
                        resp?.isCorrect ? 'bg-emerald-50 text-emerald-700' : 'bg-rose-50 text-rose-700'
                      }`}>
                        Your Answer: {resp?.studentAnswer || 'Unanswered'}
                      </span>
                      {isExpanded ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
                    </div>
                  </div>

                  {/* Expanded Details */}
                  {isExpanded && (
                    <div className="p-5 border-t border-slate-100 bg-slate-50/50 space-y-4">
                      {q.passage && (
                        <div className="p-4 rounded-xl bg-white border border-slate-200/80 text-xs font-serif text-slate-800 leading-relaxed max-h-48 overflow-y-auto">
                          {q.passage}
                        </div>
                      )}

                      <div className="text-xs sm:text-sm font-semibold text-slate-900">
                        {q.questionText}
                      </div>

                      {q.responseType === 'MCQ' && q.choices && (
                        <div className="space-y-2">
                          {q.choices.map((choiceText, idx) => {
                            const letter = ['A', 'B', 'C', 'D'][idx];
                            const isUserChoice = resp?.studentAnswer === letter;
                            const isCorrectChoice = q.correctAnswer === letter;

                            return (
                              <div
                                key={letter}
                                className={`p-3 rounded-xl border text-xs font-medium flex items-center justify-between ${
                                  isCorrectChoice
                                    ? 'bg-emerald-50/80 border-emerald-300 text-emerald-950 font-bold'
                                    : isUserChoice
                                    ? 'bg-rose-50/80 border-rose-300 text-rose-950'
                                    : 'bg-white border-slate-200 text-slate-700'
                                }`}
                              >
                                <span>{choiceText}</span>
                                {isCorrectChoice && (
                                  <span className="text-[10px] font-bold bg-emerald-200/60 text-emerald-800 px-2 py-0.5 rounded-md">
                                    Correct Answer
                                  </span>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      )}

                      <div className="p-4 rounded-xl bg-indigo-50/80 border border-indigo-100 text-xs text-indigo-950 space-y-1">
                        <span className="font-bold block text-indigo-900">Step-by-Step Explanation:</span>
                        <p className="leading-relaxed">{q.explanation}</p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
