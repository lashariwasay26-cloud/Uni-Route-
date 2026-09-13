import React, { useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Save,
  RotateCcw,
  Sparkles,
  CheckCircle2,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Lightbulb,
  FileText,
  AlertCircle,
  Menu,
  X
} from 'lucide-react';
import { BrainstormAnswer, BuilderStage } from '../../../types';

interface DraftStageProps {
  draftText: string;
  setDraftText: (text: string) => void;
  prompt: string;
  wordLimit: number;
  brainstormAnswers: BrainstormAnswer[];
  onBack: () => void;
  onContinue: () => void;
  onSave: () => void;
  onAiAssist?: (type: 'brainstorm' | 'explain' | 'paragraph' | 'structure') => void;
}

export const DraftStage: React.FC<DraftStageProps> = ({
  draftText,
  setDraftText,
  prompt,
  wordLimit,
  brainstormAnswers,
  onBack,
  onContinue,
  onSave,
  onAiAssist,
}) => {
  const [showMobileDrawer, setShowMobileDrawer] = useState(false);
  const [showWritingTips, setShowWritingTips] = useState(true);
  const [showBrainstormSidebar, setShowBrainstormSidebar] = useState(true);
  const [aiAssistActive, setAiAssistActive] = useState<string | null>(null);

  const wordCount = draftText.trim() ? draftText.trim().split(/\s+/).length : 0;
  const charCount = draftText.length;
  const isOverLimit = wordCount > wordLimit;

  const handleClear = () => {
    if (draftText && confirm('Are you sure you want to clear your current draft text?')) {
      setDraftText('');
    }
  };

  const handleAiTrigger = (type: 'brainstorm' | 'explain' | 'paragraph' | 'structure') => {
    setAiAssistActive(type);
    if (onAiAssist) onAiAssist(type);
  };

  return (
    <div id="draft-stage" className="space-y-6 animate-in fade-in-50">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
            Write Your Essay
          </h2>
          <p className="text-slate-600 text-sm mt-0.5">
            Use your ideas as a starting point. Your voice should remain your own.
          </p>
        </div>

        {/* Mobile Toggle Drawer Button */}
        <button
          onClick={() => setShowMobileDrawer(true)}
          className="lg:hidden px-3.5 py-2 rounded-xl bg-slate-100 text-slate-700 font-semibold text-xs flex items-center gap-2 cursor-pointer hover:bg-slate-200"
        >
          <Lightbulb className="w-4 h-4 text-amber-500" />
          <span>View Ideas & Tips</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* MAIN EDITOR COLUMN */}
        <div className="lg:col-span-8 space-y-4">
          <div className="bg-white border border-slate-200/80 rounded-[28px] p-5 sm:p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] space-y-4">
            {/* Word Count Header Bar */}
            <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-100 text-xs">
              <div className="flex items-center gap-3">
                <span className="font-bold text-slate-700">
                  Word Count:
                </span>
                <span
                  className={`font-extrabold px-2.5 py-0.5 rounded-full ${
                    isOverLimit
                      ? 'bg-amber-100 text-amber-800 border border-amber-300'
                      : 'bg-slate-100 text-slate-800'
                  }`}
                >
                  {wordCount} / {wordLimit} words
                </span>
                <span className="text-slate-400 font-medium">({charCount} characters)</span>
              </div>

              {isOverLimit && (
                <div className="flex items-center gap-1.5 text-amber-600 font-bold text-[11px]">
                  <AlertCircle className="w-4 h-4" />
                  <span>Exceeds word limit by {wordCount - wordLimit} words</span>
                </div>
              )}
            </div>

            {/* Essay Draft Textarea */}
            <textarea
              id="textarea-essay-draft-editor"
              rows={18}
              value={draftText}
              onChange={(e) => setDraftText(e.target.value)}
              placeholder="Start writing here..."
              className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-5 text-sm sm:text-base leading-relaxed text-slate-950 placeholder-slate-400 focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/20 font-sans transition-all resize-y"
            />

            {/* Quick Actions Bar */}
            <div className="flex items-center justify-between pt-1 text-xs">
              <button
                onClick={handleClear}
                className="text-slate-400 hover:text-rose-600 transition-colors flex items-center gap-1 font-semibold cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Clear Draft</span>
              </button>

              <p className="text-slate-500 text-[11px] font-semibold flex items-center gap-1.5">
                <Save className="w-3.5 h-3.5 text-indigo-600" />
                <span>Manual save required • Click 'Save Draft' to persist changes</span>
              </p>
            </div>
          </div>

          {/* Bottom Control Bar */}
          <div className="flex items-center justify-between pt-2">
            <button
              onClick={onBack}
              className="px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 text-xs font-bold transition-colors flex items-center gap-2 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 text-indigo-600" />
              <span>Back to Brainstorm</span>
            </button>

            <div className="flex items-center gap-3">
              <button
                onClick={onSave}
                className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <Save className="w-4 h-4 text-slate-500" />
                <span>Save Draft</span>
              </button>

              <button
                id="btn-continue-to-review"
                onClick={onContinue}
                className="px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-black text-white font-bold text-xs shadow-md transition-all flex items-center gap-2 cursor-pointer active:scale-95"
              >
                <span>Continue to Review</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* SIDEBAR (DESKTOP) */}
        <div className="hidden lg:block lg:col-span-4 space-y-4">
          {/* Prompt Snippet Box */}
          <div className="bg-white border border-slate-200/80 rounded-2xl p-4 space-y-2 shadow-xs">
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-indigo-700">
              Active Prompt
            </span>
            <p className="text-xs text-slate-700 italic line-clamp-3">
              "{prompt || 'No prompt specified.'}"
            </p>
          </div>

          {/* Brainstorm Responses Accordion */}
          <div className="bg-white border border-slate-200/80 rounded-2xl p-4 space-y-3 shadow-xs">
            <button
              onClick={() => setShowBrainstormSidebar(!showBrainstormSidebar)}
              className="w-full flex items-center justify-between text-xs font-bold text-slate-950"
            >
              <span className="flex items-center gap-2">
                <Lightbulb className="w-4 h-4 text-amber-500" />
                <span>Your Brainstorm Ideas</span>
              </span>
              {showBrainstormSidebar ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>

            {showBrainstormSidebar && (
              <div className="space-y-3 pt-2 text-xs border-t border-slate-100 max-h-64 overflow-y-auto pr-1">
                {brainstormAnswers.filter((b) => b.answer.trim().length > 0).length > 0 ? (
                  brainstormAnswers
                    .filter((b) => b.answer.trim().length > 0)
                    .map((item) => (
                      <div key={item.id} className="bg-slate-50 p-3 rounded-xl border border-slate-200/80 space-y-1">
                        <span className="font-bold text-indigo-700 block text-[11px]">
                          {item.question}
                        </span>
                        <p className="text-slate-600 text-[11px] leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    ))
                ) : (
                  <p className="text-slate-400 text-[11px] italic">
                    No brainstorm notes added yet. Click "Back to Brainstorm" to outline your thoughts.
                  </p>
                )}
              </div>
            )}
          </div>

          {/* Writing Tips Collapsible */}
          <div className="bg-white border border-slate-200/80 rounded-2xl p-4 space-y-3 shadow-xs">
            <button
              onClick={() => setShowWritingTips(!showWritingTips)}
              className="w-full flex items-center justify-between text-xs font-bold text-slate-950"
            >
              <span className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-indigo-600" />
                <span>Writing Strategy Tips</span>
              </span>
              {showWritingTips ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>

            {showWritingTips && (
              <ul className="space-y-2 text-xs text-slate-600 pt-2 border-t border-slate-100">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Be Specific:</strong> Ground your story in real details and concrete actions.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Show Meaningful Moments:</strong> Focus on moments of decision or realization.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Explain Why It Mattered:</strong> Reflection is more important than plot.</span>
                </li>
              </ul>
            )}
          </div>

          {/* AI Assistance Options */}
          <div className="bg-gradient-to-br from-indigo-900 to-indigo-950 rounded-2xl p-4 text-white space-y-3 shadow-md border border-indigo-800/50">
            <div className="flex items-center gap-2 text-xs font-bold text-indigo-200">
              <Sparkles className="w-4 h-4 text-indigo-300" />
              <span>AI Writing Coach</span>
            </div>
            <div className="grid grid-cols-1 gap-2 text-xs">
              <button
                onClick={() => handleAiTrigger('brainstorm')}
                className="p-2.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-indigo-100 text-left font-semibold transition-colors cursor-pointer"
              >
                💡 Need ideas for next paragraph
              </button>
              <button
                onClick={() => handleAiTrigger('structure')}
                className="p-2.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-indigo-100 text-left font-semibold transition-colors cursor-pointer"
              >
                📐 Check narrative flow
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE DRAWER */}
      {showMobileDrawer && (
        <div className="fixed inset-0 z-50 bg-slate-950/60 flex justify-end lg:hidden">
          <div className="w-full max-w-xs bg-white h-full p-6 space-y-6 overflow-y-auto animate-in slide-in-from-right">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <h3 className="font-bold text-sm text-slate-950">Writing Ideas & Tips</h3>
              <button onClick={() => setShowMobileDrawer(false)} className="p-1 rounded-lg text-slate-400">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 text-xs">
              <div className="space-y-1">
                <span className="font-bold text-indigo-700 uppercase text-[10px]">Active Prompt</span>
                <p className="text-slate-700 italic">"{prompt}"</p>
              </div>

              <div className="space-y-2">
                <span className="font-bold text-slate-950">Brainstorm Notes</span>
                {brainstormAnswers.map((item) => (
                  <div key={item.id} className="p-2.5 bg-slate-100 rounded-xl space-y-1">
                    <span className="font-bold text-indigo-700 text-[11px] block">{item.question}</span>
                    <p className="text-slate-600 text-[11px]">{item.answer || 'No note added.'}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
