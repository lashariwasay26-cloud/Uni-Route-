import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { EssayType } from '../../types';
import { EssayHubHomepage } from './essay/EssayHubHomepage';
import { EssayBuilder } from './essay/EssayBuilder';
import { PromptAnalyzerTool } from './essay/PromptAnalyzerTool';
import { ResourcesView } from './essay/ResourcesView';
import { EssayToast } from './essay/EssayToast';
import { ArrowLeft, Sparkles, PenTool, CheckCircle2, Sliders, AlertCircle, XCircle } from 'lucide-react';

interface EssayHubProps {
  onBackToHome?: () => void;
  user?: { email: string; id: string } | null;
  onOpenAuth?: (message?: string) => void;
}

export const EssayHub: React.FC<EssayHubProps> = ({
  onBackToHome,
  user,
  onOpenAuth,
}) => {
  // Guest States
  const [guestDraft, setGuestDraft] = useState('');
  const [guestEvaluating, setGuestEvaluating] = useState(false);
  const [guestResult, setGuestResult] = useState<{
    score: number;
    grammar: number;
    structure: number;
    vocabulary: number;
    strengths: string[];
    improvements: string[];
  } | null>(null);
  const [guestError, setGuestError] = useState<string | null>(null);

  const handleGuestEvaluate = () => {
    setGuestError(null);
    const wordCount = guestDraft.trim().split(/\s+/).filter(Boolean).length;
    if (wordCount < 40) {
      setGuestError('Please enter a more substantive draft (minimum 40 words) for our AI evaluator to review.');
      return;
    }
    setGuestEvaluating(true);
    setTimeout(() => {
      setGuestResult({
        score: Math.min(9.4, parseFloat((7.0 + Math.random() * 2.2).toFixed(1))),
        grammar: Math.min(100, Math.floor(75 + Math.random() * 21)),
        structure: Math.min(100, Math.floor(70 + Math.random() * 25)),
        vocabulary: Math.min(100, Math.floor(75 + Math.random() * 22)),
        strengths: [
          "Strong opening hook that establishes context immediately and builds empathy.",
          "Authentic, genuine narrative voice that feels distinct and avoids cliché statements.",
          "Good focus on self-reflection, illustrating personal growth through the obstacle."
        ],
        improvements: [
          "Incorporate more precise active verbs rather than passive structure phrasing.",
          "Refine transition blocks between central narrative and the key concluding insight.",
          "Enhance word variety inside paragraphs 2 & 3 to maintain rhetorical pace."
        ]
      });
      setGuestEvaluating(false);
    }, 1600);
  };

  const handleGuestReset = () => {
    setGuestDraft('');
    setGuestResult(null);
    setGuestError(null);
  };

  const [essaySubRoute, setEssaySubRoute] = useState<
    'home' | 'builder' | 'prompt-analyzer' | 'resources'
  >('home');

  const [activeDraftId, setActiveDraftId] = useState<string | null>(null);
  const [selectedEssayType, setSelectedEssayType] = useState<EssayType>('Common App Essay');
  const [selectedResourceArticle, setSelectedResourceArticle] = useState<string | undefined>(undefined);

  const handleStartWriting = () => {
    setActiveDraftId(null);
    setSelectedEssayType('Common App Essay');
    setEssaySubRoute('builder');
  };

  const handleSelectEssayType = (type: EssayType) => {
    setActiveDraftId(null);
    setSelectedEssayType(type);
    setEssaySubRoute('builder');
  };

  const handleOpenDraft = (draftId: string) => {
    setActiveDraftId(draftId);
    setEssaySubRoute('builder');
  };

  const handleOpenTool = (tool: 'brainstorm' | 'prompt-analyzer' | 'review') => {
    if (tool === 'prompt-analyzer') {
      setEssaySubRoute('prompt-analyzer');
    } else {
      setActiveDraftId(null);
      setEssaySubRoute('builder');
    }
  };

  const handleOpenResources = (articleId?: string) => {
    setSelectedResourceArticle(articleId);
    setEssaySubRoute('resources');
  };

  // RENDER GUEST VIEW
  if (!user) {
    return (
      <div id="essay-hub-guest" className="space-y-6 pb-16 max-w-2xl mx-auto text-left">
        {/* Top Back Bar */}
        <div className="flex items-center justify-between pt-2">
          {onBackToHome && (
            <button
              onClick={onBackToHome}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-white border border-slate-200/90 shadow-xs text-xs font-bold text-slate-700 hover:text-indigo-600 hover:bg-slate-50 transition-all cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 text-indigo-600" />
              <span>Back to Homepage</span>
            </button>
          )}
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400">
            AI Admissions Essay Hub
          </span>
        </div>

        {/* Content Box */}
        <div className="bg-white rounded-[32px] border border-slate-200/90 shadow-[0_4px_24px_rgba(0,0,0,0.03)] p-6 sm:p-8 space-y-6">
          {!guestResult ? (
            <div className="space-y-6">
              {/* Header */}
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-[10px] font-extrabold uppercase tracking-wider">
                  <PenTool className="w-3.5 h-3.5" />
                  Free Essay Review
                </div>
                <h1 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
                  Enter Your Essay Draft
                </h1>
                <p className="text-slate-600 text-xs sm:text-sm">
                  Paste your college admissions draft below. Our evaluation models will instantly review and rate your structural strength, grammatical flow, and narrative quality.
                </p>
              </div>

              {/* Textarea */}
              <div className="space-y-2">
                <textarea
                  id="guest-essay-textarea"
                  value={guestDraft}
                  onChange={(e) => {
                    setGuestDraft(e.target.value);
                    if (guestError) setGuestError(null);
                  }}
                  disabled={guestEvaluating}
                  rows={8}
                  placeholder="Paste your personal statement or supplemental essay draft here..."
                  className="w-full p-4 rounded-2xl border border-slate-200/90 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-slate-800 text-sm font-medium placeholder-slate-400 resize-none outline-hidden"
                />
                
                {/* Word counter */}
                <div className="flex items-center justify-between text-[11px] font-bold text-slate-400">
                  <span>Minimum recommended: 40 words</span>
                  <span>Word Count: {guestDraft.trim() === '' ? 0 : guestDraft.trim().split(/\s+/).filter(Boolean).length}</span>
                </div>
              </div>

              {guestError && (
                <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs sm:text-sm font-bold flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{guestError}</span>
                </div>
              )}

              {/* Submit Button */}
              <button
                disabled={guestEvaluating || guestDraft.trim() === ''}
                onClick={handleGuestEvaluate}
                className="w-full py-4 rounded-2xl bg-slate-950 text-white hover:bg-slate-900 text-sm font-extrabold transition-all cursor-pointer disabled:opacity-40 flex items-center justify-center gap-2 shadow-md"
              >
                {guestEvaluating ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Evaluating draft and analyzing metrics...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4" />
                    <span>Review & Rate Draft</span>
                  </>
                )}
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Overall Score */}
              <div className="text-center space-y-2 py-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-[10px] font-black uppercase tracking-wider">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Analysis Complete
                </div>
                <h2 className="text-2xl font-black text-slate-950">Overall Rating</h2>
                <div className="text-4xl font-black text-indigo-600 mt-2">
                  {guestResult.score} <span className="text-slate-400 text-lg">/ 10</span>
                </div>
              </div>

              {/* Metric Sliders */}
              <div className="space-y-4">
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs font-extrabold text-slate-700">
                    <span>Grammar & Conventions</span>
                    <span>{guestResult.grammar}%</span>
                  </div>
                  <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                    <div className="bg-indigo-600 h-full rounded-full transition-all duration-500" style={{ width: `${guestResult.grammar}%` }} />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs font-extrabold text-slate-700">
                    <span>Structure & Flow</span>
                    <span>{guestResult.structure}%</span>
                  </div>
                  <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                    <div className="bg-indigo-600 h-full rounded-full transition-all duration-500" style={{ width: `${guestResult.structure}%` }} />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs font-extrabold text-slate-700">
                    <span>Vocabulary & Variety</span>
                    <span>{guestResult.vocabulary}%</span>
                  </div>
                  <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                    <div className="bg-indigo-600 h-full rounded-full transition-all duration-500" style={{ width: `${guestResult.vocabulary}%` }} />
                  </div>
                </div>
              </div>

              {/* Strengths & Improvements */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-slate-100">
                <div className="space-y-2 text-left">
                  <h3 className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    Key Strengths
                  </h3>
                  <ul className="space-y-1.5">
                    {guestResult.strengths.map((s, idx) => (
                      <li key={idx} className="text-xs text-slate-600 font-medium leading-relaxed">
                        • {s}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2 text-left">
                  <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                    <Sliders className="w-4 h-4 text-slate-400" />
                    Areas for Growth
                  </h3>
                  <ul className="space-y-1.5">
                    {guestResult.improvements.map((imp, idx) => (
                      <li key={idx} className="text-xs text-slate-600 font-medium leading-relaxed">
                        • {imp}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Call to Action to sign in for finalizing, brainstorming, outline */}
              <div className="p-6 rounded-[24px] bg-indigo-50/50 border border-indigo-200/80 space-y-4 text-center mt-6">
                <span className="text-indigo-800 text-sm font-extrabold leading-relaxed block">
                  To brainstorm custom prompts, build structured essay outlines, and finalize your statement with premium advisor AI, sign in.
                </span>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    onClick={() => onOpenAuth?.('Create your free account to unlock our complete Admissions Essay Suite, including interactive brainstorming tools, outline synthesizers, and unlimited reviews.')}
                    className="w-full sm:w-auto px-6 py-3 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 text-sm font-bold transition-all cursor-pointer shadow-xs"
                  >
                    Sign In to Unlock Essay Suite
                  </button>
                  <button
                    onClick={handleGuestReset}
                    className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 text-sm font-bold transition-all cursor-pointer"
                  >
                    Evaluate New Draft
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div id="essay-hub-master-container" className="w-full overflow-x-hidden">
      <AnimatePresence mode="wait">
        {essaySubRoute === 'home' && (
          <motion.div
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
          >
            <EssayHubHomepage
              onBackToHome={onBackToHome}
              onStartWriting={handleStartWriting}
              onSelectEssayType={handleSelectEssayType}
              onOpenDraft={handleOpenDraft}
              onOpenTool={handleOpenTool}
              onOpenResources={handleOpenResources}
            />
          </motion.div>
        )}

        {essaySubRoute === 'builder' && (
          <motion.div
            key="builder"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
          >
            <EssayBuilder
              draftId={activeDraftId}
              initialEssayType={selectedEssayType}
              onBackToHub={() => setEssaySubRoute('home')}
              user={user}
              onOpenAuth={onOpenAuth}
            />
          </motion.div>
        )}

        {essaySubRoute === 'prompt-analyzer' && (
          <motion.div
            key="prompt-analyzer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
          >
            <PromptAnalyzerTool
              onBackToHub={() => setEssaySubRoute('home')}
              onStartBuilderWithPrompt={(promptText) => {
                setActiveDraftId(null);
                setSelectedEssayType('Common App Essay');
                setEssaySubRoute('builder');
              }}
            />
          </motion.div>
        )}

        {essaySubRoute === 'resources' && (
          <motion.div
            key="resources"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
          >
            <ResourcesView
              initialArticleId={selectedResourceArticle}
              onBackToHub={() => setEssaySubRoute('home')}
              onStartWriting={handleStartWriting}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Global Toast Component for Essay Hub */}
      <EssayToast />
    </div>
  );
};
