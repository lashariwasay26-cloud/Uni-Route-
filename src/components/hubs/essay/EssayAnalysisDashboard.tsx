import React, { useState } from 'react';
import {
  Sparkles,
  CheckCircle2,
  AlertTriangle,
  FileText,
  Download,
  Copy,
  Check,
  RefreshCw,
  ArrowLeft,
  ChevronDown,
  ChevronUp,
  Save,
  ShieldCheck,
  Zap,
  Target,
  BookOpen,
  Sliders,
  CheckSquare,
  Square
} from 'lucide-react';
import { StructuredEssayAnalysis, PriorityImprovement, EssayCategoryFeedback, ParagraphReviewItem } from '../../../types';

interface EssayAnalysisDashboardProps {
  essayText: string;
  prompt: string;
  wordLimit: number;
  analysis: StructuredEssayAnalysis | null;
  isAnalyzing: boolean;
  analysisError: string | null;
  onAnalyze: () => void;
  onBackToDraft: () => void;
  onSave: () => void;
}

export const EssayAnalysisDashboard: React.FC<EssayAnalysisDashboardProps> = ({
  essayText,
  prompt,
  wordLimit,
  analysis,
  isAnalyzing,
  analysisError,
  onAnalyze,
  onBackToDraft,
  onSave,
}) => {
  const [copied, setCopied] = useState(false);
  const [checklist, setChecklist] = useState([
    { id: 'chk-1', label: 'Does my essay directly answer every part of the prompt?', checked: true },
    { id: 'chk-2', label: 'Have I included specific, concrete examples rather than general claims?', checked: true },
    { id: 'chk-3', label: 'Does the reflection explain WHY this experience mattered to me?', checked: false },
    { id: 'chk-4', label: 'Is the tone natural, authentic, and genuinely in my own voice?', checked: true },
    { id: 'chk-5', label: 'Does the opening hook engage the reader without being melodramatic?', checked: false },
    { id: 'chk-6', label: 'Have I proofread carefully for typos, word count limits, and paragraph breaks?', checked: false },
  ]);

  const [expandedParagraphs, setExpandedParagraphs] = useState<Record<number, boolean>>({ 1: true });

  const wordCount = essayText.trim() ? essayText.trim().split(/\s+/).length : 0;
  const paragraphCount = essayText.trim() ? essayText.trim().split(/\n\s*\n/).filter(Boolean).length : 0;

  const handleToggleChecklist = (id: string) => {
    setChecklist((prev) =>
      prev.map((item) => (item.id === id ? { ...item, checked: !item.checked } : item))
    );
  };

  const handleExportText = () => {
    const element = document.createElement('a');
    const file = new Blob([essayText], { type: 'text/plain;charset=utf-8' });
    element.href = URL.createObjectURL(file);
    element.download = `essay_draft_${Date.now()}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const handleCopyText = () => {
    navigator.clipboard.writeText(essayText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const toggleParagraph = (num: number) => {
    setExpandedParagraphs((prev) => ({ ...prev, [num]: !prev[num] }));
  };

  const getStatusBadge = (status: 'Strong' | 'Good' | 'Needs Attention' | string) => {
    switch (status) {
      case 'Strong':
        return (
          <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300 text-[10px] font-bold">
            Strong
          </span>
        );
      case 'Good':
        return (
          <span className="px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 border border-blue-300 text-[10px] font-bold">
            Good
          </span>
        );
      case 'Needs Attention':
        return (
          <span className="px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800 border border-amber-300 text-[10px] font-bold">
            Needs Attention
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <div id="essay-analysis-dashboard" className="space-y-8 animate-in fade-in-50 max-w-5xl mx-auto">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
            Review Your Essay
          </h2>
          <p className="text-slate-600 text-sm mt-0.5">
            See how your draft is working before you submit it.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onBackToDraft}
            className="px-4 py-2 rounded-xl border border-slate-200 bg-white text-slate-700 text-xs font-bold transition-colors flex items-center gap-1.5 cursor-pointer hover:bg-slate-50"
          >
            <ArrowLeft className="w-4 h-4 text-indigo-600" />
            <span>Edit Draft</span>
          </button>

          <button
            id="btn-trigger-ai-analysis"
            disabled={isAnalyzing || wordCount < 20}
            onClick={onAnalyze}
            className="px-5 py-2 rounded-xl bg-slate-900 hover:bg-black disabled:opacity-50 text-white font-bold text-xs shadow-md transition-all flex items-center gap-2 cursor-pointer"
          >
            {isAnalyzing ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin" />
                <span>Analyzing essay...</span>
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4" />
                <span>{analysis ? 'Analyze Again' : 'Analyze Essay'}</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* ESSAY SNAPSHOT BANNER */}
      <div className="bg-white border border-slate-200/80 rounded-[28px] p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] space-y-4">
        <h3 className="text-sm font-extrabold uppercase tracking-wider text-slate-500 flex items-center gap-2">
          <FileText className="w-4 h-4 text-indigo-600" />
          <span>Essay Snapshot</span>
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-1">
          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80">
            <span className="text-[11px] font-semibold text-slate-500 block">Word Count</span>
            <span className={`text-xl font-black ${wordCount > wordLimit ? 'text-amber-600' : 'text-slate-950'}`}>
              {wordCount} <span className="text-xs font-normal text-slate-400">/ {wordLimit}</span>
            </span>
          </div>

          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80">
            <span className="text-[11px] font-semibold text-slate-500 block">Paragraphs</span>
            <span className="text-xl font-black text-slate-950">
              {paragraphCount}
            </span>
          </div>

          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80">
            <span className="text-[11px] font-semibold text-slate-500 block">Prompt Alignment</span>
            <div className="mt-1">
              {getStatusBadge(analysis?.promptAlignmentStatus || 'Good')}
            </div>
          </div>

          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80">
            <span className="text-[11px] font-semibold text-slate-500 block">Overall Status</span>
            <span className="text-xs font-bold text-indigo-700 mt-1 block">
              {analysis ? 'Analysis Complete' : 'Ready for AI Evaluation'}
            </span>
          </div>
        </div>
      </div>

      {/* ERROR NOTICE IF ANY */}
      {analysisError && (
        <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-800 text-xs">
          {analysisError}
        </div>
      )}

      {/* LOADING STATE */}
      {isAnalyzing && (
        <div className="py-16 text-center space-y-4 bg-white border border-slate-200/80 rounded-[28px] p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
          <RefreshCw className="w-10 h-10 text-indigo-600 animate-spin mx-auto" />
          <div>
            <h3 className="text-lg font-bold text-slate-950">Analyzing your essay...</h3>
            <p className="text-xs text-slate-500 mt-1 max-w-md mx-auto">
              Evaluating narrative structure, specific details, prompt alignment, reflection, and authentic tone.
            </p>
          </div>
        </div>
      )}

      {/* DETAILED STRUCTURED ANALYSIS RESULTS */}
      {analysis && !isAnalyzing && (
        <div className="space-y-8">
          
          {/* 1. CATEGORY EVALUATION CARDS GRID */}
          <div className="space-y-4">
            <h3 className="text-lg font-extrabold text-slate-950 tracking-tight flex items-center gap-2">
              <Sliders className="w-5 h-5 text-indigo-600" />
              <span>Core Category Evaluation</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {(analysis.categories || []).map((cat) => (
                <div
                  key={cat.category}
                  className="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-xs space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-sm text-slate-950">{cat.category}</h4>
                    {getStatusBadge(cat.status)}
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed font-medium">
                    {cat.summary}
                  </p>

                  <div className="space-y-1.5 pt-2 border-t border-slate-100 text-[11px]">
                    <div>
                      <span className="font-bold text-emerald-700">What Works:</span>{' '}
                      <span className="text-slate-600">{cat.whatWorks}</span>
                    </div>
                    <div>
                      <span className="font-bold text-amber-700">Suggested Focus:</span>{' '}
                      <span className="text-slate-600">{cat.suggestedImprovement}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 2. WHAT'S WORKING & PRIORITY IMPROVEMENTS */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Strengths Card */}
            <div className="md:col-span-5 bg-white border border-slate-200/80 rounded-[28px] p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] space-y-4">
              <h3 className="text-base font-bold text-slate-950 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                <span>What's Working Well</span>
              </h3>
              <ul className="space-y-2.5 text-xs text-slate-700">
                {(analysis.mainStrengths || analysis.strengths || []).map((str, idx) => (
                  <li key={idx} className="flex items-start gap-2 bg-emerald-50/80 p-3 rounded-xl border border-emerald-100">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{str}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Priority Improvements Card */}
            <div className="md:col-span-7 bg-white border border-slate-200/80 rounded-[28px] p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] space-y-4">
              <h3 className="text-base font-bold text-slate-950 flex items-center gap-2">
                <Zap className="w-5 h-5 text-amber-500" />
                <span>What To Improve First</span>
              </h3>

              <div className="space-y-3">
                {(analysis.priorityImprovements || []).map((item, idx) => (
                  <div
                    key={item.id || idx}
                    className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200/80 space-y-2 text-xs"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-amber-950 text-sm">
                        {item.issue}
                      </span>
                      <button
                        onClick={onBackToDraft}
                        className="text-[10px] font-bold px-2.5 py-1 rounded-lg bg-amber-600 text-white hover:bg-amber-700 transition-colors cursor-pointer"
                      >
                        Work on this
                      </button>
                    </div>

                    <p className="text-slate-700 leading-relaxed">
                      <strong>Why it matters:</strong> {item.whyItMatters}
                    </p>

                    <div className="p-2.5 rounded-xl bg-white border border-amber-200 text-slate-800">
                      <strong>Try this:</strong> {item.tryThis}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 3. PARAGRAPH BY PARAGRAPH REVIEW */}
          {(analysis.paragraphReviews || []).length > 0 && (
            <div className="bg-white border border-slate-200/80 rounded-[28px] p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] space-y-4">
              <h3 className="text-base font-bold text-slate-950 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-indigo-600" />
                <span>Paragraph-by-Paragraph Breakdown</span>
              </h3>

              <div className="space-y-3">
                {analysis.paragraphReviews.map((para) => {
                  const isOpen = expandedParagraphs[para.paragraphNumber] ?? true;
                  return (
                    <div
                      key={para.paragraphNumber}
                      className="border border-slate-200 rounded-2xl overflow-hidden text-xs"
                    >
                      <button
                        onClick={() => toggleParagraph(para.paragraphNumber)}
                        className="w-full bg-slate-50 p-3.5 flex items-center justify-between text-left font-bold text-slate-950 hover:bg-slate-100 transition-colors cursor-pointer"
                      >
                        <span className="flex items-center gap-2">
                          <span className="w-6 h-6 rounded-lg bg-indigo-100 text-indigo-700 flex items-center justify-center text-[11px] font-extrabold">
                            P{para.paragraphNumber}
                          </span>
                          <span>{para.purposeLabel}</span>
                        </span>
                        {isOpen ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
                      </button>

                      {isOpen && (
                        <div className="p-4 space-y-3 bg-white border-t border-slate-100">
                          <p className="italic text-slate-600 bg-slate-50 p-3 rounded-xl border border-slate-100">
                            "{para.textSnippet}"
                          </p>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                            <div className="p-3 rounded-xl bg-emerald-50/80 border border-emerald-100 text-emerald-950">
                              <span className="font-bold block mb-1 text-emerald-800">What Works:</span>
                              {para.works}
                            </div>
                            <div className="p-3 rounded-xl bg-indigo-50/80 border border-indigo-100 text-indigo-950">
                              <span className="font-bold block mb-1 text-indigo-900">Consider Revising:</span>
                              {para.consider}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* 4. BEFORE YOU SUBMIT MANUAL CHECKLIST */}
          <div className="bg-white border border-slate-200/80 rounded-[28px] p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] space-y-4">
            <h3 className="text-base font-bold text-slate-950 flex items-center gap-2">
              <CheckSquare className="w-5 h-5 text-indigo-600" />
              <span>Before You Submit Checklist</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {checklist.map((chk) => (
                <div
                  key={chk.id}
                  onClick={() => handleToggleChecklist(chk.id)}
                  className={`p-3.5 rounded-2xl border transition-all flex items-start gap-3 cursor-pointer ${
                    chk.checked
                      ? 'bg-slate-50 border-slate-300 text-slate-950'
                      : 'bg-white border-slate-200 text-slate-500'
                  }`}
                >
                  <button className="mt-0.5 text-indigo-600">
                    {chk.checked ? <CheckSquare className="w-4 h-4 text-emerald-600" /> : <Square className="w-4 h-4 text-slate-400" />}
                  </button>
                  <span className={`leading-relaxed font-semibold ${chk.checked ? 'line-through opacity-80' : ''}`}>
                    {chk.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ACTIONS BAR */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-200">
            <button
              onClick={onBackToDraft}
              className="px-5 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-800 text-xs font-bold transition-colors flex items-center gap-2 cursor-pointer hover:bg-slate-50"
            >
              <ArrowLeft className="w-4 h-4 text-indigo-600" />
              <span>Continue Editing</span>
            </button>

            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={handleCopyText}
                className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? 'Copied' : 'Copy Text'}</span>
              </button>

              <button
                onClick={handleExportText}
                className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <Download className="w-4 h-4 text-indigo-600" />
                <span>Export Essay (.txt)</span>
              </button>

              <button
                onClick={onSave}
                className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-black text-white text-xs font-bold shadow-md transition-all flex items-center gap-2 cursor-pointer"
              >
                <Save className="w-4 h-4" />
                <span>Save Final State</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
