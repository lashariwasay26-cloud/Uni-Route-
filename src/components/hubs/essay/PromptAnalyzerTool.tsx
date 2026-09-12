import React, { useState } from 'react';
import { Search, Sparkles, ArrowLeft, RefreshCw, Lightbulb, AlertTriangle, Target, CheckCircle2 } from 'lucide-react';

interface PromptAnalyzerToolProps {
  onBackToHub: () => void;
  onStartBuilderWithPrompt?: (promptText: string) => void;
}

export const PromptAnalyzerTool: React.FC<PromptAnalyzerToolProps> = ({
  onBackToHub,
  onStartBuilderWithPrompt,
}) => {
  const [promptInput, setPromptInput] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysis, setAnalysis] = useState<{
    coreQuestion: string;
    whatToShow: string[];
    whatToAvoid: string[];
    strategicAngles: { title: string; idea: string }[];
  } | null>(null);

  const handleAnalyzePrompt = async () => {
    if (!promptInput.trim()) return;
    setIsAnalyzing(true);

    try {
      const res = await fetch('/api/analyze-prompt', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ promptText: promptInput }),
      });

      if (res.ok) {
        const data = await res.json();
        setAnalysis(data);
      } else {
        throw new Error('API request failed');
      }
    } catch {
      // Local fallback generator for prompt analysis
      setAnalysis({
        coreQuestion: 'The admissions committee wants to see your capacity for growth, intellectual curiosity, and how your core values translate into action.',
        whatToShow: [
          'A specific moment of realization or decision',
          'Evidence of active reflection rather than passive observation',
          'How this experience influences your future goals or character',
        ],
        whatToAvoid: [
          'Summarizing a list of achievements already present on your resume',
          'Generic statements like "it made me realize anything is possible"',
          'Focusing 90% of the essay on another person or event rather than yourself',
        ],
        strategicAngles: [
          {
            title: 'The Intellectual Pivot',
            idea: 'Focus on a time a belief or hypothesis you held was challenged, and how you altered your thinking.',
          },
          {
            title: 'The Unsung Initiative',
            idea: 'Detail a small-scale community or personal project where you took ownership without expecting recognition.',
          },
          {
            title: 'The Growth Catalyst',
            idea: 'Reflect on a setback or mistake, emphasizing the precise adjustments you made afterward.',
          },
        ],
      });
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 py-4 animate-in fade-in-50">
      <div className="flex items-center justify-between mb-2">
        <button
          onClick={onBackToHub}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-white border border-slate-200/90 shadow-xs text-xs font-bold text-slate-700 hover:text-indigo-600 hover:bg-slate-50 transition-all cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 text-indigo-600" />
          <span>Back to Essay Hub</span>
        </button>
      </div>

      <div>
        <h1 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
          Understand Your Prompt
        </h1>
        <p className="text-slate-600 text-xs sm:text-sm mt-0.5">
          Break down what an application prompt is really asking before you write.
        </p>
      </div>

      <div className="bg-white border border-slate-200/80 rounded-[28px] p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] space-y-4">
        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
          Enter University Prompt
        </label>
        <textarea
          rows={4}
          value={promptInput}
          onChange={(e) => setPromptInput(e.target.value)}
          placeholder="Paste prompt text here (e.g., 'Describe a topic, idea, or concept you find so engaging that it makes you lose all track of time...')"
          className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 text-sm text-slate-950 placeholder-slate-400 focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/20 font-sans transition-all"
        />

        <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
          <div className="flex gap-2">
            <button
              onClick={() =>
                setPromptInput(
                  'Describe a topic, idea, or concept you find so engaging that it makes you lose all track of time. Why does it captivate you? What or who do you turn to when you want to learn more?'
                )
              }
              className="text-[11px] font-bold text-indigo-700 bg-indigo-50 px-3 py-1.5 rounded-lg hover:bg-indigo-100 transition-colors cursor-pointer"
            >
              Sample Common App
            </button>
            <button
              onClick={() =>
                setPromptInput(
                  'Why are you interested in attending our university? How will our specific academic programs, faculty, and campus community help you fulfill your goals?'
                )
              }
              className="text-[11px] font-bold text-purple-700 bg-purple-50 px-3 py-1.5 rounded-lg hover:bg-purple-100 transition-colors cursor-pointer"
            >
              Sample Supplemental
            </button>
          </div>

          <button
            onClick={handleAnalyzePrompt}
            disabled={isAnalyzing || !promptInput.trim()}
            className="px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-black disabled:opacity-50 text-white font-bold text-xs shadow-md transition-all flex items-center gap-2 cursor-pointer active:scale-95"
          >
            {isAnalyzing ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin" />
                <span>Deconstructing...</span>
              </>
            ) : (
              <>
                <Search className="w-4 h-4" />
                <span>Analyze Prompt</span>
              </>
            )}
          </button>
        </div>
      </div>

      {analysis && (
        <div className="space-y-6">
          {/* Core Question */}
          <div className="bg-gradient-to-r from-indigo-900 to-indigo-950 border border-indigo-800/50 rounded-[28px] p-6 text-white space-y-2 shadow-md">
            <span className="text-xs font-extrabold uppercase tracking-wider text-indigo-300 flex items-center gap-1.5">
              <Target className="w-4 h-4" /> What They Are Really Asking
            </span>
            <p className="text-sm sm:text-base font-semibold leading-relaxed text-indigo-100">
              {analysis.coreQuestion}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* What to show */}
            <div className="bg-white border border-slate-200/80 rounded-[28px] p-6 space-y-3 shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
              <h3 className="font-bold text-slate-950 text-sm flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> What To Demonstrate
              </h3>
              <ul className="space-y-2 text-xs text-slate-700">
                {analysis.whatToShow.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 shrink-0 mt-1.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* What to avoid */}
            <div className="bg-white border border-slate-200/80 rounded-[28px] p-6 space-y-3 shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
              <h3 className="font-bold text-slate-950 text-sm flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-rose-600" /> Common Traps To Avoid
              </h3>
              <ul className="space-y-2 text-xs text-slate-700">
                {analysis.whatToAvoid.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-600 shrink-0 mt-1.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Strategic Angles */}
          <div className="bg-white border border-slate-200/80 rounded-[28px] p-6 space-y-4 shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
            <h3 className="font-bold text-slate-950 text-sm flex items-center gap-2">
              <Lightbulb className="w-4 h-4 text-amber-500" /> Strategic Directions You Could Take
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {analysis.strategicAngles.map((angle, i) => (
                <div key={i} className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2 text-xs">
                  <span className="font-bold text-indigo-700 block">{angle.title}</span>
                  <p className="text-slate-600 leading-relaxed">{angle.idea}</p>
                </div>
              ))}
            </div>

            {onStartBuilderWithPrompt && (
              <div className="pt-2 text-right">
                <button
                  onClick={() => onStartBuilderWithPrompt(promptInput)}
                  className="px-6 py-2.5 rounded-xl bg-slate-900 text-white font-bold text-xs shadow-md hover:bg-black transition-colors cursor-pointer active:scale-95"
                >
                  Start Writing With This Prompt →
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
