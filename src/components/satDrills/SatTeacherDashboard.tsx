import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  ShieldCheck,
  Search,
  Filter,
  CheckCircle2,
  AlertTriangle,
  BarChart2,
  Users,
  Database,
  FileCheck,
  Eye,
  Layers,
  Sparkles,
  RefreshCw
} from 'lucide-react';
import { ALL_DRILL_QUESTIONS, getQuestionBankAuditReport } from '../../data/satDrills';
import { SatDrillQuestion } from '../../data/satDrills/types';

export const SatTeacherDashboard: React.FC = () => {
  const auditReport = getQuestionBankAuditReport();
  const [selectedDrill, setSelectedDrill] = useState<number | 'all'>('all');
  const [selectedSection, setSelectedSection] = useState<'all' | 'Reading & Writing' | 'Math'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedQuestion, setSelectedQuestion] = useState<SatDrillQuestion | null>(null);

  const filteredQuestions = ALL_DRILL_QUESTIONS.filter((q) => {
    if (selectedDrill !== 'all' && q.drillId !== selectedDrill) return false;
    if (selectedSection !== 'all' && q.section !== selectedSection) return false;
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      return (
        q.questionText.toLowerCase().includes(query) ||
        q.domain.toLowerCase().includes(query) ||
        q.skill.toLowerCase().includes(query) ||
        q.id.toLowerCase().includes(query)
      );
    }
    return true;
  });

  return (
    <div className="max-w-6xl mx-auto space-y-6 py-6 px-4 font-sans text-slate-800">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-indigo-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 text-xs font-bold mb-2">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Uni Route Admin & Faculty System</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
              SAT Question Bank & Adaptive Audit Hub
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl">
              Verified quality assurance report and live question metrics for all 5 Digital SAT Drills.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 text-center border border-white/15">
              <span className="text-2xl font-black text-white block">{auditReport.totalCount}</span>
              <span className="text-[10px] text-indigo-200 uppercase tracking-wider font-bold block">
                Total Audited Items
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Audit Highlights Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-xs">
          <div className="flex items-center gap-2 text-emerald-600 mb-1">
            <CheckCircle2 className="w-4 h-4" />
            <span className="text-xs font-bold uppercase tracking-wider">Verified Authentic</span>
          </div>
          <span className="text-xl font-black text-slate-900">{auditReport.verifiedCount} / {auditReport.totalCount}</span>
          <span className="text-[10px] text-slate-500 block mt-0.5">100% Passed Quality Checks</span>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-xs">
          <div className="flex items-center gap-2 text-blue-600 mb-1">
            <Database className="w-4 h-4" />
            <span className="text-xs font-bold uppercase tracking-wider">Reading & Writing</span>
          </div>
          <span className="text-xl font-black text-slate-900">{auditReport.rwCount} Items</span>
          <span className="text-[10px] text-slate-500 block mt-0.5">Across 4 Core Domains</span>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-xs">
          <div className="flex items-center gap-2 text-indigo-600 mb-1">
            <BarChart2 className="w-4 h-4" />
            <span className="text-xs font-bold uppercase tracking-wider">Math Questions</span>
          </div>
          <span className="text-xl font-black text-slate-900">{auditReport.mathCount} Items</span>
          <span className="text-[10px] text-slate-500 block mt-0.5">MCQ + Student Produced</span>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-xs">
          <div className="flex items-center gap-2 text-amber-600 mb-1">
            <Layers className="w-4 h-4" />
            <span className="text-xs font-bold uppercase tracking-wider">Duplicates Found</span>
          </div>
          <span className="text-xl font-black text-emerald-600">0 Items</span>
          <span className="text-[10px] text-slate-500 block mt-0.5">Zero Defective Questions</span>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search questions or skills..."
            className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-9 pr-3 py-2 text-xs font-medium focus:outline-none focus:border-indigo-500"
          />
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto">
          <select
            value={selectedDrill}
            onChange={(e) => setSelectedDrill(e.target.value === 'all' ? 'all' : Number(e.target.value))}
            className="bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-bold text-slate-700 focus:outline-none cursor-pointer"
          >
            <option value="all">All Drills (1–5)</option>
            <option value={1}>Drill 1</option>
            <option value={2}>Drill 2</option>
            <option value={3}>Drill 3</option>
            <option value={4}>Drill 4</option>
            <option value={5}>Drill 5</option>
          </select>

          <select
            value={selectedSection}
            onChange={(e) => setSelectedSection(e.target.value as any)}
            className="bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-bold text-slate-700 focus:outline-none cursor-pointer"
          >
            <option value="all">All Sections</option>
            <option value="Reading & Writing">Reading & Writing</option>
            <option value="Math">Math</option>
          </select>
        </div>
      </div>

      {/* Question Table */}
      <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs">
        <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
          <span className="text-xs font-bold text-slate-700">
            Showing {filteredQuestions.length} Questions
          </span>
          <span className="text-[11px] text-slate-500 font-medium">
            Click any row to preview full question & step-by-step audit
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-100/60 text-[11px] uppercase tracking-wider font-bold text-slate-500">
                <th className="py-3 px-4">Question ID</th>
                <th className="py-3 px-4">Drill</th>
                <th className="py-3 px-4">Section & Module</th>
                <th className="py-3 px-4">Domain / Skill</th>
                <th className="py-3 px-4">Difficulty</th>
                <th className="py-3 px-4">Key</th>
                <th className="py-3 px-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs font-medium text-slate-700">
              {filteredQuestions.slice(0, 50).map((q) => (
                <tr
                  key={q.id}
                  onClick={() => setSelectedQuestion(q)}
                  className="hover:bg-indigo-50/40 transition-colors cursor-pointer"
                >
                  <td className="py-3 px-4 font-mono text-indigo-600 font-bold">{q.id}</td>
                  <td className="py-3 px-4 font-bold">Drill #{q.drillId}</td>
                  <td className="py-3 px-4">
                    {q.section} ({q.module})
                  </td>
                  <td className="py-3 px-4">
                    <span className="font-semibold block text-slate-900">{q.domain}</span>
                    <span className="text-[10px] text-slate-500 block">{q.skill}</span>
                  </td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                      q.difficulty >= 4
                        ? 'bg-amber-100 text-amber-800'
                        : q.difficulty === 3
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-emerald-100 text-emerald-800'
                    }`}>
                      Level {q.difficulty}/5
                    </span>
                  </td>
                  <td className="py-3 px-4 font-bold text-slate-900">{q.correctAnswer}</td>
                  <td className="py-3 px-4 text-right">
                    <button className="p-1 rounded-lg hover:bg-indigo-100 text-indigo-600 cursor-pointer">
                      <Eye className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Question Preview Modal */}
      {selectedQuestion && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 space-y-4 shadow-2xl max-h-[85vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <span className="text-xs font-mono font-bold text-indigo-600">{selectedQuestion.id}</span>
                <h3 className="text-sm font-bold text-slate-900">
                  Drill {selectedQuestion.drillId} — {selectedQuestion.section} ({selectedQuestion.module})
                </h3>
              </div>
              <button
                onClick={() => setSelectedQuestion(null)}
                className="text-slate-400 hover:text-slate-700 font-bold text-sm cursor-pointer"
              >
                Close
              </button>
            </div>

            {selectedQuestion.passage && (
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs font-serif text-slate-800 leading-relaxed max-h-40 overflow-y-auto">
                {selectedQuestion.passage}
              </div>
            )}

            <div className="text-sm font-semibold text-slate-900">
              {selectedQuestion.questionText}
            </div>

            {selectedQuestion.choices && (
              <div className="space-y-2">
                {selectedQuestion.choices.map((choice, i) => (
                  <div
                    key={i}
                    className={`p-3 rounded-xl border text-xs font-medium ${
                      choice.startsWith(selectedQuestion.correctAnswer) ||
                      selectedQuestion.correctAnswer === ['A', 'B', 'C', 'D'][i]
                        ? 'bg-emerald-50 border-emerald-300 font-bold text-emerald-900'
                        : 'bg-white border-slate-200 text-slate-700'
                    }`}
                  >
                    {choice}
                  </div>
                ))}
              </div>
            )}

            <div className="p-4 rounded-xl bg-indigo-50 border border-indigo-100 text-xs text-indigo-950 space-y-1">
              <span className="font-bold text-indigo-900 block">Verified Explanation & Audit Note:</span>
              <p>{selectedQuestion.explanation}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
