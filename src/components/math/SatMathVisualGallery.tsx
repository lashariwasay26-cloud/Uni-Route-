import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Table as TableIcon,
  TrendingUp,
  Sliders,
  CheckCircle2,
  Sparkles,
  Layers,
  Filter,
  Eye,
  ArrowRight,
  Calculator,
  Compass,
  Info
} from 'lucide-react';
import { FullSatMathChapter, MathDiagramSpec, MathTableData, MathExerciseQuestion, MathWorkedExample } from '../../data/satMathConcepts';
import { SatMathGraph } from './SatMathGraph';
import { formatMathText } from '../../utils/mathFormatter';

interface SatMathVisualGalleryProps {
  chapter: FullSatMathChapter;
  onSelectExercise?: (exerciseNum: number, questionId?: string) => void;
}

type VisualFilter = 'all' | 'graphs' | 'tables' | 'examples' | 'exercises';

export const SatMathVisualGallery: React.FC<SatMathVisualGalleryProps> = ({
  chapter,
  onSelectExercise
}) => {
  const [activeFilter, setActiveFilter] = useState<VisualFilter>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedItemForModal, setSelectedItemForModal] = useState<{
    title: string;
    description: string;
    diagram?: MathDiagramSpec;
    table?: MathTableData;
    explanation?: string;
    source: string;
  } | null>(null);

  // Collect all diagrams and tables across theory, worked examples, and exercises
  const allVisuals: {
    id: string;
    type: 'graph' | 'table';
    source: 'theory' | 'example' | 'exercise';
    sourceTitle: string;
    title: string;
    description: string;
    diagram?: MathDiagramSpec;
    table?: MathTableData;
    question?: string;
    options?: string[];
    correctAnswer?: string;
    explanation?: string;
    exerciseNumber?: number;
    questionNumber?: number;
  }[] = [];

  // 1. Collect from theory sections
  chapter.sections.forEach((sec, sIdx) => {
    if (sec.diagrams) {
      sec.diagrams.forEach((diag, dIdx) => {
        allVisuals.push({
          id: `sec-${sIdx}-diag-${dIdx}`,
          type: 'graph',
          source: 'theory',
          sourceTitle: `Section ${sIdx + 1}: ${sec.sectionTitle}`,
          title: diag.title || `Section Diagram: ${sec.sectionTitle}`,
          description: diag.caption || 'Theoretical coordinate geometry diagram for this core concept.',
          diagram: diag
        });
      });
    }

    if (sec.tables) {
      sec.tables.forEach((tbl, tIdx) => {
        allVisuals.push({
          id: `sec-${sIdx}-tbl-${tIdx}`,
          type: 'table',
          source: 'theory',
          sourceTitle: `Section ${sIdx + 1}: ${sec.sectionTitle}`,
          title: tbl.title || `Concept Rules Table`,
          description: `Structured analytical table summarizing rules, patterns, and algebraic formulas.`,
          table: tbl
        });
      });
    }

    if (sec.examples) {
      sec.examples.forEach((ex, exIdx) => {
        if (ex.diagram) {
          allVisuals.push({
            id: `sec-${sIdx}-ex-${exIdx}-diag`,
            type: 'graph',
            source: 'example',
            sourceTitle: ex.title,
            title: ex.diagram.title || `Example Graph: ${ex.title}`,
            description: ex.question,
            diagram: ex.diagram,
            question: ex.question,
            options: ex.options,
            correctAnswer: ex.correctAnswer,
            explanation: ex.explanation
          });
        }
        if (ex.diagrams) {
          ex.diagrams.forEach((d, dIdx) => {
            allVisuals.push({
              id: `sec-${sIdx}-ex-${exIdx}-diags-${dIdx}`,
              type: 'graph',
              source: 'example',
              sourceTitle: ex.title,
              title: d.title || `Example Graph ${dIdx + 1}`,
              description: ex.question,
              diagram: d,
              question: ex.question,
              options: ex.options,
              correctAnswer: ex.correctAnswer,
              explanation: ex.explanation
            });
          });
        }
        if (ex.table) {
          allVisuals.push({
            id: `sec-${sIdx}-ex-${exIdx}-tbl`,
            type: 'table',
            source: 'example',
            sourceTitle: ex.title,
            title: ex.table.title || `Example Data Table: ${ex.title}`,
            description: ex.question,
            table: ex.table,
            question: ex.question,
            options: ex.options,
            correctAnswer: ex.correctAnswer,
            explanation: ex.explanation
          });
        }
        if (ex.tables) {
          ex.tables.forEach((t, tIdx) => {
            allVisuals.push({
              id: `sec-${sIdx}-ex-${exIdx}-tbls-${tIdx}`,
              type: 'table',
              source: 'example',
              sourceTitle: ex.title,
              title: t.title || `Example Data Table ${tIdx + 1}`,
              description: ex.question,
              table: t,
              question: ex.question,
              options: ex.options,
              correctAnswer: ex.correctAnswer,
              explanation: ex.explanation
            });
          });
        }
      });
    }
  });

  // 2. Collect from exercises
  chapter.exerciseGroups.forEach((eg) => {
    eg.questions.forEach((q) => {
      if (q.diagram) {
        allVisuals.push({
          id: `ex-${eg.exerciseNumber}-q-${q.number}-diag`,
          type: 'graph',
          source: 'exercise',
          sourceTitle: `Exercise ${eg.exerciseNumber} • Question #${q.number}`,
          title: q.diagram.title || `Exercise Question #${q.number} Coordinate Graph`,
          description: q.question,
          diagram: q.diagram,
          question: q.question,
          options: q.options,
          correctAnswer: q.correctAnswerText,
          explanation: q.explanation,
          exerciseNumber: eg.exerciseNumber,
          questionNumber: q.number
        });
      }
      if (q.diagrams) {
        q.diagrams.forEach((d, dIdx) => {
          allVisuals.push({
            id: `ex-${eg.exerciseNumber}-q-${q.number}-diags-${dIdx}`,
            type: 'graph',
            source: 'exercise',
            sourceTitle: `Exercise ${eg.exerciseNumber} • Question #${q.number}`,
            title: d.title || `Exercise Question #${q.number} Diagram ${dIdx + 1}`,
            description: q.question,
            diagram: d,
            question: q.question,
            options: q.options,
            correctAnswer: q.correctAnswerText,
            explanation: q.explanation,
            exerciseNumber: eg.exerciseNumber,
            questionNumber: q.number
          });
        });
      }
      if (q.table) {
        allVisuals.push({
          id: `ex-${eg.exerciseNumber}-q-${q.number}-tbl`,
          type: 'table',
          source: 'exercise',
          sourceTitle: `Exercise ${eg.exerciseNumber} • Question #${q.number}`,
          title: q.table.title || `Exercise Question #${q.number} Data Table`,
          description: q.question,
          table: q.table,
          question: q.question,
          options: q.options,
          correctAnswer: q.correctAnswerText,
          explanation: q.explanation,
          exerciseNumber: eg.exerciseNumber,
          questionNumber: q.number
        });
      }
      if (q.tables) {
        q.tables.forEach((t, tIdx) => {
          allVisuals.push({
            id: `ex-${eg.exerciseNumber}-q-${q.number}-tbls-${tIdx}`,
            type: 'table',
            source: 'exercise',
            sourceTitle: `Exercise ${eg.exerciseNumber} • Question #${q.number}`,
            title: t.title || `Exercise Question #${q.number} Table ${tIdx + 1}`,
            description: q.question,
            table: t,
            question: q.question,
            options: q.options,
            correctAnswer: q.correctAnswerText,
            explanation: q.explanation,
            exerciseNumber: eg.exerciseNumber,
            questionNumber: q.number
          });
        });
      }
    });
  });

  // Filter visuals
  const filteredVisuals = allVisuals.filter((item) => {
    if (activeFilter === 'graphs' && item.type !== 'graph') return false;
    if (activeFilter === 'tables' && item.type !== 'table') return false;
    if (activeFilter === 'examples' && item.source !== 'example') return false;
    if (activeFilter === 'exercises' && item.source !== 'exercise') return false;

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      return (
        item.title.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.sourceTitle.toLowerCase().includes(q)
      );
    }
    return true;
  });

  const totalGraphs = allVisuals.filter((v) => v.type === 'graph').length;
  const totalTables = allVisuals.filter((v) => v.type === 'table').length;

  return (
    <div id="sat-math-visual-gallery" className="space-y-6">
      {/* HEADER HERO */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-7 shadow-xs space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-xl bg-black text-white flex items-center justify-center font-black shadow-xs">
              <TrendingUp className="w-5 h-5" />
            </span>
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-950 tracking-tight">
                Visual Lab: Graphs & Tables
              </h2>
              <p className="text-xs text-slate-500 font-semibold">
                Chapter {chapter.chapterNumber} • {chapter.chapterTitle}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs font-black">
            <span className="px-3 py-1.5 rounded-xl bg-slate-100 border border-slate-200 text-slate-800 flex items-center gap-1.5">
              <TrendingUp className="w-4 h-4" />
              <span>{totalGraphs} Coordinate Graphs</span>
            </span>
            <span className="px-3 py-1.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-800 flex items-center gap-1.5">
              <TableIcon className="w-4 h-4" />
              <span>{totalTables} Data & Rule Tables</span>
            </span>
          </div>
        </div>

        {/* CONTROLS: FILTER TABS & SEARCH */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-1.5">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3 py-1.5 rounded-xl text-xs font-black transition-all cursor-pointer ${
                activeFilter === 'all'
                  ? 'bg-black text-white shadow-xs'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              All Visuals ({allVisuals.length})
            </button>
            <button
              onClick={() => setActiveFilter('graphs')}
              className={`px-3 py-1.5 rounded-xl text-xs font-black transition-all cursor-pointer inline-flex items-center gap-1.5 ${
                activeFilter === 'graphs'
                  ? 'bg-black text-white shadow-xs'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              <TrendingUp className="w-3.5 h-3.5" />
              <span>Graphs Only ({totalGraphs})</span>
            </button>
            <button
              onClick={() => setActiveFilter('tables')}
              className={`px-3 py-1.5 rounded-xl text-xs font-black transition-all cursor-pointer inline-flex items-center gap-1.5 ${
                activeFilter === 'tables'
                  ? 'bg-amber-600 text-white shadow-xs'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              <TableIcon className="w-3.5 h-3.5" />
              <span>Tables Only ({totalTables})</span>
            </button>
            <button
              onClick={() => setActiveFilter('exercises')}
              className={`px-3 py-1.5 rounded-xl text-xs font-black transition-all cursor-pointer inline-flex items-center gap-1.5 ${
                activeFilter === 'exercises'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>In Practice Exercises ({allVisuals.filter((v) => v.source === 'exercise').length})</span>
            </button>
            <button
              onClick={() => setActiveFilter('examples')}
              className={`px-3 py-1.5 rounded-xl text-xs font-black transition-all cursor-pointer inline-flex items-center gap-1.5 ${
                activeFilter === 'examples'
                  ? 'bg-purple-600 text-white shadow-xs'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>In Worked Examples ({allVisuals.filter((v) => v.source === 'example').length})</span>
            </button>
          </div>

          <div className="w-full sm:w-64">
            <input
              type="text"
              placeholder="Search graphs, tables, equations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-3.5 py-1.5 text-xs rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:border-indigo-600 font-medium"
            />
          </div>
        </div>
      </div>

      {/* VISUALS GRID */}
      {filteredVisuals.length === 0 ? (
        <div className="bg-white border border-slate-200 rounded-3xl p-10 text-center space-y-3">
          <Info className="w-10 h-10 text-slate-400 mx-auto" />
          <h3 className="text-base font-black text-slate-900">No visuals match your filter</h3>
          <p className="text-xs text-slate-500 max-w-md mx-auto">
            Try clearing the search query or switching to "All Visuals" to explore the complete set of diagrams and data tables for Chapter {chapter.chapterNumber}.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredVisuals.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-slate-200 rounded-3xl p-5 sm:p-6 shadow-xs flex flex-col justify-between space-y-4 hover:border-indigo-300 transition-all"
            >
              <div className="space-y-3">
                {/* Visual Header Badge */}
                <div className="flex items-center justify-between">
                  <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider ${
                    item.source === 'exercise'
                      ? 'bg-emerald-100 text-emerald-900 border border-emerald-300'
                      : item.source === 'example'
                      ? 'bg-purple-100 text-purple-900 border border-purple-300'
                      : 'bg-indigo-100 text-indigo-900 border border-indigo-300'
                  }`}>
                    {formatMathText(item.sourceTitle)}
                  </span>

                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-extrabold flex items-center gap-1 ${
                    item.type === 'graph'
                      ? 'bg-blue-50 text-blue-700 border border-blue-200'
                      : 'bg-amber-50 text-amber-700 border border-amber-200'
                  }`}>
                    {item.type === 'graph' ? <TrendingUp className="w-3 h-3" /> : <TableIcon className="w-3 h-3" />}
                    <span>{item.type === 'graph' ? 'Coordinate Graph' : 'Data Table'}</span>
                  </span>
                </div>

                <h3 className="text-base font-black text-slate-950 tracking-tight">
                  {formatMathText(item.title)}
                </h3>

                {item.description && (
                  <p className="text-xs text-slate-600 font-medium leading-relaxed">
                    {formatMathText(item.description)}
                  </p>
                )}

                {/* GRAPH RENDERING */}
                {item.diagram && (
                  <div className="pt-2">
                    <SatMathGraph diagram={item.diagram} />
                  </div>
                )}

                {/* TABLE RENDERING */}
                {item.table && (
                  <div className="border border-slate-200 rounded-2xl overflow-hidden shadow-2xs pt-1">
                    <div className="bg-slate-100/90 px-4 py-2 font-black text-xs text-slate-900 border-b border-slate-200 flex items-center gap-2">
                      <TableIcon className="w-3.5 h-3.5 text-black" />
                      <span>{formatMathText(item.table.title)}</span>
                    </div>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-xs border-collapse">
                        <thead>
                          <tr className="bg-slate-50 border-b border-slate-200">
                            {item.table.headers.map((h, hIdx) => (
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
                          {item.table.rows.map((row, rIdx) => (
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
                )}

                {/* OPTIONS & ANSWER REVEAL (IF APPLICABLE) */}
                {item.options && item.options.length > 0 && (
                  <div className="pt-2 space-y-2">
                    <span className="text-[11px] font-black uppercase tracking-wider text-slate-400">
                      Answer Choices:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                      {item.options.map((opt, oIdx) => (
                        <div
                          key={oIdx}
                          className="px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-800"
                        >
                          {opt}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* ACTION FOOTER */}
              <div className="border-t border-slate-100 pt-3 flex items-center justify-between text-xs">
                {item.source === 'exercise' && item.exerciseNumber && onSelectExercise ? (
                  <button
                    onClick={() => onSelectExercise(item.exerciseNumber!)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold transition-all cursor-pointer shadow-xs"
                  >
                    <span>Solve in Exercise {item.exerciseNumber}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <span className="text-slate-400 font-bold text-[11px]">
                    Verified Uni Route Advanced Math Visual
                  </span>
                )}

                {item.explanation && (
                  <button
                    onClick={() =>
                      setSelectedItemForModal({
                        title: item.title,
                        description: item.description,
                        diagram: item.diagram,
                        table: item.table,
                        explanation: item.explanation,
                        source: item.sourceTitle
                      })
                    }
                    className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold transition-all cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Solution Proof</span>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* POPUP MODAL FOR DEEP STEP-BY-STEP EXPLANATION */}
      {selectedItemForModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-7 space-y-4 max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200"
          >
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-indigo-600">
                  {formatMathText(selectedItemForModal.source)}
                </span>
                <h3 className="text-lg font-black text-slate-950">
                  {formatMathText(selectedItemForModal.title)}
                </h3>
              </div>
              <button
                onClick={() => setSelectedItemForModal(null)}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-700 font-black cursor-pointer"
              >
                ✕
              </button>
            </div>

            {selectedItemForModal.diagram && (
              <SatMathGraph diagram={selectedItemForModal.diagram} />
            )}

            {selectedItemForModal.table && (
              <div className="border border-slate-200 rounded-2xl overflow-hidden shadow-2xs">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200">
                      {selectedItemForModal.table.headers.map((h, hIdx) => (
                        <th key={hIdx} className="p-3 font-extrabold text-slate-950 uppercase text-[10px]">
                          {formatMathText(h)}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {selectedItemForModal.table.rows.map((row, rIdx) => (
                      <tr key={rIdx} className={rIdx % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}>
                        {row.map((cell, cIdx) => (
                          <td key={cIdx} className="p-3 text-slate-700 font-medium">
                            {formatMathText(cell)}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 space-y-2">
              <div className="text-xs font-black text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span>Detailed Mathematical Solution & Analysis</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium whitespace-pre-line">
                {formatMathText(selectedItemForModal.explanation)}
              </p>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setSelectedItemForModal(null)}
                className="px-5 py-2 rounded-xl bg-black text-white text-xs font-black hover:bg-slate-800 transition-all cursor-pointer"
              >
                Close Visual Proof
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};
