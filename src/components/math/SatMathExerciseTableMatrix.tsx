import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Table as TableIcon,
  TrendingUp,
  CheckCircle2,
  XCircle,
  AlertCircle,
  Lightbulb,
  ChevronDown,
  ChevronUp,
  Eye,
  Filter,
  Sparkles,
  HelpCircle,
  BookOpen
} from 'lucide-react';
import { FullSatMathChapter, MathExerciseGroup, MathExerciseQuestion } from '../../data/satMathConcepts';
import { SatMathGraph } from './SatMathGraph';
import { formatMathText } from '../../utils/mathFormatter';
import { FormattedMathExplanation, cleanMathInlineMarkdown } from './SatMathConceptRenderer';

interface SatMathExerciseTableMatrixProps {
  chapter: FullSatMathChapter;
  selectedExerciseNumber?: number;
  userSelectedAnswers: Record<string, number>;
  onSelectAnswer: (qId: string, choiceIdx: number) => void;
}

export const SatMathExerciseTableMatrix: React.FC<SatMathExerciseTableMatrixProps> = ({
  chapter,
  selectedExerciseNumber,
  userSelectedAnswers,
  onSelectAnswer
}) => {
  const [expandedQuestionId, setExpandedQuestionId] = useState<string | null>(null);
  const [filterType, setFilterType] = useState<'all' | 'with-visuals' | 'unsolved' | 'incorrect'>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Collect questions from selected exercise or all exercises
  const activeQuestions: (MathExerciseQuestion & { exerciseNum: number })[] = [];
  chapter.exerciseGroups.forEach((eg) => {
    if (!selectedExerciseNumber || eg.exerciseNumber === selectedExerciseNumber) {
      eg.questions.forEach((q) => {
        activeQuestions.push({
          ...q,
          exerciseNum: eg.exerciseNumber
        });
      });
    }
  });

  const filteredQuestions = activeQuestions.filter((q) => {
    const selected = userSelectedAnswers[q.id];
    const isSubmitted = selected !== undefined;
    const isCorrect = selected === q.correctIndex;

    if (filterType === 'with-visuals' && !q.diagram && !q.diagrams && !q.table && !q.tables) {
      return false;
    }
    if (filterType === 'unsolved' && isSubmitted) {
      return false;
    }
    if (filterType === 'incorrect' && (!isSubmitted || isCorrect)) {
      return false;
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      return (
        q.question.toLowerCase().includes(query) ||
        q.explanation.toLowerCase().includes(query) ||
        q.correctAnswerText.toLowerCase().includes(query) ||
        `q${q.number}`.includes(query)
      );
    }
    return true;
  });

  const toggleExpand = (qId: string) => {
    setExpandedQuestionId((prev) => (prev === qId ? null : qId));
  };

  return (
    <div id="sat-math-exercise-table-matrix" className="space-y-4">
      {/* FILTER & SEARCH TOOLBAR */}
      <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-2xs flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-1.5">
          <button
            onClick={() => setFilterType('all')}
            className={`px-3 py-1.5 rounded-xl text-xs font-black transition-all cursor-pointer ${
              filterType === 'all'
                ? 'bg-black text-white shadow-xs'
                : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
            }`}
          >
            All Exercise Questions ({activeQuestions.length})
          </button>
          <button
            onClick={() => setFilterType('with-visuals')}
            className={`px-3 py-1.5 rounded-xl text-xs font-black transition-all cursor-pointer inline-flex items-center gap-1.5 ${
              filterType === 'with-visuals'
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
            }`}
          >
            <TrendingUp className="w-3.5 h-3.5" />
            <span>Has Graphs/Tables ({activeQuestions.filter((q) => q.diagram || q.diagrams || q.table || q.tables).length})</span>
          </button>
          <button
            onClick={() => setFilterType('unsolved')}
            className={`px-3 py-1.5 rounded-xl text-xs font-black transition-all cursor-pointer ${
              filterType === 'unsolved'
                ? 'bg-amber-600 text-white shadow-xs'
                : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
            }`}
          >
            Unanswered ({activeQuestions.filter((q) => userSelectedAnswers[q.id] === undefined).length})
          </button>
          <button
            onClick={() => setFilterType('incorrect')}
            className={`px-3 py-1.5 rounded-xl text-xs font-black transition-all cursor-pointer ${
              filterType === 'incorrect'
                ? 'bg-rose-600 text-white shadow-xs'
                : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
            }`}
          >
            Needs Review ({activeQuestions.filter((q) => userSelectedAnswers[q.id] !== undefined && userSelectedAnswers[q.id] !== q.correctIndex).length})
          </button>
        </div>

        <div className="w-full sm:w-60">
          <input
            type="text"
            placeholder="Search problems & answers..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-3 py-1.5 text-xs rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:border-black font-medium"
          />
        </div>
      </div>

      {/* STRUCTURED TABLE VIEW */}
      <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-xs">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-slate-100/90 border-b border-slate-200 text-slate-900">
                <th className="p-3.5 font-extrabold uppercase text-[10px] tracking-wider w-16 text-center">
                  #
                </th>
                <th className="p-3.5 font-extrabold uppercase text-[10px] tracking-wider min-w-[280px]">
                  Exercise Question & Prompt
                </th>
                <th className="p-3.5 font-extrabold uppercase text-[10px] tracking-wider w-36 text-center">
                  Visuals
                </th>
                <th className="p-3.5 font-extrabold uppercase text-[10px] tracking-wider min-w-[200px]">
                  Answer Choices & Interactive Solve
                </th>
                <th className="p-3.5 font-extrabold uppercase text-[10px] tracking-wider w-28 text-center">
                  Status
                </th>
                <th className="p-3.5 font-extrabold uppercase text-[10px] tracking-wider w-24 text-center">
                  Solution
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredQuestions.map((q) => {
                const selected = userSelectedAnswers[q.id];
                const isSubmitted = selected !== undefined;
                const isCorrect = selected === q.correctIndex;
                const isExpanded = expandedQuestionId === q.id;

                const hasGraph = !!(q.diagram || (q.diagrams && q.diagrams.length > 0));
                const hasTable = !!(q.table || (q.tables && q.tables.length > 0));

                return (
                  <React.Fragment key={q.id}>
                    <tr
                      className={`transition-colors ${
                        isExpanded
                          ? 'bg-slate-50'
                          : isSubmitted
                          ? isCorrect
                            ? 'bg-emerald-50/20 hover:bg-emerald-50/40'
                            : 'bg-rose-50/20 hover:bg-rose-50/40'
                          : 'bg-white hover:bg-slate-50/70'
                      }`}
                    >
                      {/* QUESTION NUMBER */}
                      <td className="p-3.5 text-center align-top">
                        <span className="w-7 h-7 rounded-lg bg-black text-white font-black text-xs inline-flex items-center justify-center">
                          {q.number}
                        </span>
                        <div className="text-[9px] font-bold text-slate-400 mt-1">
                          Ex {q.exerciseNum}
                        </div>
                      </td>

                      {/* QUESTION PROMPT */}
                      <td className="p-3.5 align-top space-y-2">
                        <div className="font-extrabold text-slate-950 text-xs sm:text-sm leading-relaxed">
                          {cleanMathInlineMarkdown(q.question)}
                        </div>

                        {/* MINI INLINE VISUAL THUMBNAIL IF HAS GRAPH / TABLE */}
                        {q.diagram && (
                          <div className="mt-2 max-w-sm border border-slate-200 rounded-xl overflow-hidden bg-slate-50 p-2">
                            <span className="text-[10px] font-black uppercase text-indigo-700 block mb-1">
                              📈 Question Diagram:
                            </span>
                            <SatMathGraph diagram={q.diagram} />
                          </div>
                        )}

                        {q.table && (
                          <div className="mt-2 max-w-sm border border-slate-200 rounded-xl overflow-hidden bg-white shadow-2xs">
                            <div className="bg-slate-100 px-3 py-1 font-black text-[11px] text-slate-900 border-b border-slate-200 flex items-center gap-1.5">
                              <TableIcon className="w-3 h-3 text-black" />
                              <span>{formatMathText(q.table.title)}</span>
                            </div>
                            <table className="w-full text-left text-[11px] border-collapse">
                              <thead>
                                <tr className="bg-slate-50 border-b border-slate-200">
                                  {q.table.headers.map((h, hIdx) => (
                                    <th key={hIdx} className="p-2 font-black text-slate-900">
                                      {formatMathText(h)}
                                    </th>
                                  ))}
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-slate-100">
                                {q.table.rows.map((r, rIdx) => (
                                  <tr key={rIdx}>
                                    {r.map((c, cIdx) => (
                                      <td key={cIdx} className="p-2 font-medium text-slate-700">
                                        {formatMathText(c)}
                                      </td>
                                    ))}
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        )}
                      </td>

                      {/* VISUAL BADGES */}
                      <td className="p-3.5 align-top text-center">
                        <div className="flex flex-col gap-1 items-center">
                          {hasGraph && (
                            <span className="px-2 py-0.5 rounded-md bg-blue-50 border border-blue-200 text-blue-700 text-[10px] font-extrabold flex items-center gap-1">
                              <TrendingUp className="w-3 h-3" />
                              <span>Graph</span>
                            </span>
                          )}
                          {hasTable && (
                            <span className="px-2 py-0.5 rounded-md bg-amber-50 border border-amber-200 text-amber-800 text-[10px] font-extrabold flex items-center gap-1">
                              <TableIcon className="w-3 h-3" />
                              <span>Table</span>
                            </span>
                          )}
                          {!hasGraph && !hasTable && (
                            <span className="text-[10px] text-slate-400 font-semibold">
                              Pure Algebra
                            </span>
                          )}
                        </div>
                      </td>

                      {/* INTERACTIVE OPTIONS */}
                      <td className="p-3.5 align-top">
                        <div className="space-y-1.5">
                          {q.options.map((opt, optIdx) => {
                            const isThisSelected = selected === optIdx;
                            const isThisCorrect = optIdx === q.correctIndex;

                            let optClasses =
                              'bg-white border-slate-200 text-slate-800 hover:bg-slate-100';

                            if (isSubmitted) {
                              if (isThisCorrect) {
                                optClasses =
                                  'bg-emerald-500 text-white border-emerald-600 font-black shadow-2xs';
                              } else if (isThisSelected) {
                                optClasses =
                                  'bg-rose-500 text-white border-rose-600 font-black shadow-2xs';
                              } else {
                                optClasses = 'bg-slate-50 text-slate-400 border-slate-200 opacity-60';
                              }
                            }

                            return (
                              <button
                                key={optIdx}
                                onClick={() => onSelectAnswer(q.id, optIdx)}
                                className={`w-full px-2.5 py-1.5 rounded-lg border text-left text-xs transition-all flex items-center justify-between gap-1.5 cursor-pointer font-medium ${optClasses}`}
                              >
                                <div className="flex items-center gap-1.5 truncate">
                                  <span className="font-bold text-[10px] text-slate-500 shrink-0">
                                    {String.fromCharCode(65 + optIdx)}.
                                  </span>
                                  <span className="truncate">{cleanMathInlineMarkdown(opt)}</span>
                                </div>
                                {isSubmitted && isThisCorrect && (
                                  <CheckCircle2 className="w-3.5 h-3.5 text-white shrink-0" />
                                )}
                                {isSubmitted && isThisSelected && !isThisCorrect && (
                                  <XCircle className="w-3.5 h-3.5 text-white shrink-0" />
                                )}
                              </button>
                            );
                          })}
                        </div>
                      </td>

                      {/* STATUS BADGE */}
                      <td className="p-3.5 align-top text-center">
                        {isSubmitted ? (
                          isCorrect ? (
                            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 font-extrabold text-[11px] border border-emerald-300">
                              <CheckCircle2 className="w-3.5 h-3.5" />
                              Correct
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-rose-100 text-rose-800 font-extrabold text-[11px] border border-rose-300">
                              <AlertCircle className="w-3.5 h-3.5" />
                              Incorrect
                            </span>
                          )
                        ) : (
                          <span className="inline-block px-2.5 py-1 rounded-full bg-slate-100 text-slate-500 font-bold text-[10px]">
                            Unsolved
                          </span>
                        )}
                      </td>

                      {/* STEP-BY-STEP EXPLANATION TOGGLE */}
                      <td className="p-3.5 align-top text-center">
                        <button
                          onClick={() => toggleExpand(q.id)}
                          className={`px-2.5 py-1.5 rounded-xl border text-[11px] font-black transition-all cursor-pointer inline-flex items-center gap-1 ${
                            isExpanded
                              ? 'bg-black text-white border-black shadow-xs'
                              : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-200'
                          }`}
                        >
                          <span>{isExpanded ? 'Hide' : 'Proof'}</span>
                          {isExpanded ? (
                            <ChevronUp className="w-3.5 h-3.5" />
                          ) : (
                            <ChevronDown className="w-3.5 h-3.5" />
                          )}
                        </button>
                      </td>
                    </tr>

                    {/* EXPANDED PROOF ROW */}
                    {isExpanded && (
                      <tr className="bg-amber-50/40 border-b border-amber-200">
                        <td colSpan={6} className="p-4 sm:p-6">
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="bg-white border border-amber-200 rounded-2xl p-4 sm:p-5 space-y-3 shadow-sm"
                          >
                            <div className="flex items-center justify-between border-b border-amber-100 pb-2">
                              <div className="flex items-center gap-2">
                                <span className="p-1 rounded-lg bg-amber-100 text-amber-900 font-black text-xs">
                                  <Lightbulb className="w-4 h-4" />
                                </span>
                                <span className="font-black text-xs uppercase tracking-wider text-slate-900">
                                  Step-by-Step Mathematical Proof • Correct Answer: {q.correctAnswerText}
                                </span>
                              </div>
                              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                                Exercise {q.exerciseNum} • #{q.number}
                              </span>
                            </div>

                            <div className="pt-1">
                              <FormattedMathExplanation text={q.explanation} />
                            </div>
                          </motion.div>
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
