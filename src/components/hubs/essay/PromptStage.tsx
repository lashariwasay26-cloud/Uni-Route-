import React from 'react';
import { ArrowRight, Lightbulb, FileText } from 'lucide-react';
import { EssayType } from '../../../types';

interface PromptStageProps {
  prompt: string;
  setPrompt: (value: string) => void;
  essayType: EssayType;
  setEssayType: (type: EssayType) => void;
  wordLimit: number;
  setWordLimit: (limit: number) => void;
  onContinue: () => void;
}

export const PromptStage: React.FC<PromptStageProps> = ({
  prompt,
  setPrompt,
  essayType,
  setEssayType,
  wordLimit,
  setWordLimit,
  onContinue,
}) => {
  const essayTypes: EssayType[] = [
    'Common App Essay',
    'Supplemental Essays',
    'Scholarship Essays',
    'Personal Statement',
    'Why This University?',
    'Why This Major?',
    'Other',
  ];

  return (
    <div id="prompt-stage" className="max-w-3xl mx-auto space-y-6 sm:space-y-8 animate-in fade-in-50">
      <div>
        <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
          What are you writing about?
        </h2>
        <p className="text-slate-600 text-sm mt-1">
          Start with the exact prompt you're answering.
        </p>
      </div>

      <div className="bg-white border border-slate-200/80 rounded-[28px] p-6 sm:p-8 space-y-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
        {/* Prompt Textarea */}
        <div className="space-y-2">
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
            Essay Prompt
          </label>
          <textarea
            id="textarea-prompt-input"
            rows={5}
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Paste your essay prompt here..."
            className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 text-sm text-slate-950 placeholder-slate-400 focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/20 transition-all font-sans leading-relaxed resize-y"
          />
        </div>

        {/* Dropdown & Word Limit Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
              Essay Type
            </label>
            <select
              id="select-essay-type"
              value={essayType}
              onChange={(e) => setEssayType(e.target.value as EssayType)}
              className="w-full bg-slate-50 border border-slate-200 text-slate-950 rounded-2xl p-3 text-xs font-semibold focus:outline-none focus:border-indigo-600 transition-all"
            >
              {essayTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
              Word Limit
            </label>
            <div className="relative">
              <input
                id="input-word-limit"
                type="number"
                min={50}
                max={3000}
                step={50}
                value={wordLimit}
                onChange={(e) => setWordLimit(Number(e.target.value) || 650)}
                className="w-full bg-slate-50 border border-slate-200 text-slate-950 rounded-2xl p-3 text-xs font-semibold focus:outline-none focus:border-indigo-600 transition-all"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] font-bold text-slate-400 uppercase">
                words max
              </span>
            </div>
            <p className="text-[11px] text-slate-500 font-medium">
              Maximum: {wordLimit} words
            </p>
          </div>
        </div>

        {/* Prompt Guidance Box */}
        <div className="p-4 rounded-2xl bg-indigo-50/80 border border-indigo-200/80 flex items-start gap-3">
          <Lightbulb className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
          <div className="text-xs text-indigo-950 leading-relaxed">
            <span className="font-bold block mb-0.5 text-indigo-900">Prompt Tip</span>
            Paste the exact wording of the prompt whenever possible. Small differences in wording can change what an essay needs to answer.
          </div>
        </div>
      </div>

      {/* Bottom Actions */}
      <div className="flex items-center justify-end pt-2">
        <button
          id="btn-continue-brainstorm"
          onClick={onContinue}
          className="px-6 py-3.5 rounded-2xl bg-slate-900 hover:bg-black text-white font-bold text-sm shadow-md transition-all flex items-center gap-2 cursor-pointer active:scale-95"
        >
          <span>Continue to Brainstorm</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
