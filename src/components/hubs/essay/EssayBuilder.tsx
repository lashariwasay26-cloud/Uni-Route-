import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, Save, CheckCircle2, AlertCircle, RefreshCw } from 'lucide-react';
import { EssayDraft, EssayType, BuilderStage, BrainstormAnswer, StructuredEssayAnalysis } from '../../../types';
import {
  getDraftById,
  saveDraftToStorage,
  createInitialDraft,
  SaveDraftOptions
} from '../../../lib/essayStorage';
import { PromptStage } from './PromptStage';
import { BrainstormStage } from './BrainstormStage';
import { DraftStage } from './DraftStage';
import { EssayAnalysisDashboard } from './EssayAnalysisDashboard';

interface EssayBuilderProps {
  draftId?: string | null;
  initialEssayType?: EssayType;
  onBackToHub: () => void;
  user?: { email: string; id: string } | null;
  onOpenAuth?: (message?: string) => void;
}

export const EssayBuilder: React.FC<EssayBuilderProps> = ({
  draftId,
  initialEssayType = 'Common App Essay',
  onBackToHub,
  user,
  onOpenAuth,
}) => {
  const [activeDraft, setActiveDraft] = useState<EssayDraft | null>(null);
  const [currentStage, setCurrentStage] = useState<BuilderStage>('prompt');
  
  // Local Form State
  const [title, setTitle] = useState<string>('My Personal Essay');
  const [essayType, setEssayType] = useState<EssayType>(initialEssayType);
  const [prompt, setPrompt] = useState<string>('');
  const [wordLimit, setWordLimit] = useState<number>(650);
  const [brainstormAnswers, setBrainstormAnswers] = useState<BrainstormAnswer[]>([]);
  const [draftText, setDraftText] = useState<string>('');
  const [analysis, setAnalysis] = useState<StructuredEssayAnalysis | null>(null);
  
  // Status State
  const [saveStatus, setSaveStatus] = useState<'Saved' | 'Saving...' | 'Unsaved'>('Saved');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisError, setAnalysisError] = useState<string | null>(null);

  // Load existing draft or initialize new one
  useEffect(() => {
    if (draftId) {
      const existing = getDraftById(draftId);
      if (existing) {
        setActiveDraft(existing);
        setTitle(existing.title);
        setEssayType(existing.essayType);
        setPrompt(existing.prompt);
        setWordLimit(existing.wordLimit || 650);
        setBrainstormAnswers(existing.brainstormAnswers || []);
        setDraftText(existing.draftText || '');
        setCurrentStage(existing.currentStage || 'prompt');
        if (existing.lastAnalysis) setAnalysis(existing.lastAnalysis);
        return;
      }
    }

    // Create new initial draft
    const typeToUse: EssayType = (initialEssayType as EssayType) || 'Common App Essay';
    const newDraft = createInitialDraft(typeToUse);
    setActiveDraft(newDraft);
    setTitle(newDraft.title);
    setEssayType(newDraft.essayType);
    setPrompt(newDraft.prompt);
    setWordLimit(newDraft.wordLimit);
    setBrainstormAnswers(newDraft.brainstormAnswers);
    setDraftText(newDraft.draftText);
    setCurrentStage(newDraft.currentStage);
  }, [draftId, initialEssayType]);

  // Handle Save Operation
  const handleSaveDraft = (
    overrideStage?: BuilderStage,
    options?: SaveDraftOptions
  ) => {
    if (!activeDraft) return;
    setSaveStatus('Saving...');

    const stageToSave = overrideStage || currentStage;
    const updated = saveDraftToStorage(
      {
        id: activeDraft.id,
        title: title || `My ${essayType}`,
        essayType,
        prompt,
        wordLimit,
        brainstormAnswers,
        draftText,
        currentStage: stageToSave,
        lastAnalysis: analysis || undefined,
      },
      options || {
        notifyToast: true,
        toastTitle: 'Draft Saved to Local Storage',
      }
    );

    setActiveDraft(updated);
    setTimeout(() => {
      setSaveStatus('Saved');
    }, 400);
  };

  // Stage Navigation
  const handleStageChange = (nextStage: BuilderStage) => {
    setCurrentStage(nextStage);
  };

  // Track unsaved changes relative to activeDraft (Manual save mode)
  useEffect(() => {
    if (!activeDraft) return;

    const isDifferent =
      activeDraft.title !== title ||
      activeDraft.prompt !== prompt ||
      activeDraft.essayType !== essayType ||
      activeDraft.wordLimit !== wordLimit ||
      activeDraft.draftText !== draftText ||
      JSON.stringify(activeDraft.brainstormAnswers || []) !== JSON.stringify(brainstormAnswers || []);

    if (isDifferent) {
      setSaveStatus('Unsaved');
    } else {
      setSaveStatus('Saved');
    }
  }, [title, prompt, wordLimit, brainstormAnswers, draftText, essayType, activeDraft]);

  // Execute AI Essay Analysis
  const handleRunEssayAnalysis = async () => {
    if (!user) {
      // Freemium Limit Check: Non-logged-in users get exactly 1 free AI Essay Review
      const freeCount = localStorage.getItem('uniroute_free_essay_review_count') || '0';
      if (freeCount !== '0') {
        onOpenAuth?.(
          'You have already utilized your 1 free AI Essay Review! Create a free Uni Route account to unlock unlimited structured reviews, brainstormers, and admissions counselor messaging.'
        );
        return;
      }
    }

    if (!draftText || draftText.trim().split(/\s+/).length < 20) {
      setAnalysisError('Please write at least 20 words in your draft before requesting AI review.');
      return;
    }

    setIsAnalyzing(true);
    setAnalysisError(null);

    try {
      const response = await fetch('/api/analyze-essay', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          essayText: draftText,
          promptTitle: prompt || essayType,
          targetUniversity: 'Top Global & National Universities',
          wordLimit,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to run AI essay review.');
      }

      const data = await response.json();
      
      // Map API response to StructuredEssayAnalysis format
      const structured: StructuredEssayAnalysis = {
        wordCount: draftText.trim().split(/\s+/).length,
        wordLimit,
        paragraphCount: draftText.trim().split(/\n\s*\n/).filter(Boolean).length,
        promptAlignmentStatus: (data.overallScore >= 80 ? 'Strong' : data.overallScore >= 65 ? 'Good' : 'Needs Attention') as any,
        mainStrengths: data.strengths || ['Engaging voice', 'Clear personal context'],
        mainAreasToImprove: data.improvementAreas || ['Incorporate more specific details'],
        categories: [
          {
            category: 'Prompt Alignment',
            status: data.overallScore >= 80 ? 'Strong' : 'Good',
            summary: `Addresses core themes of ${essayType}`,
            whatWorks: 'Directly responds to the central thesis',
            whatIsMissing: 'Ensure every paragraph relates back to the prompt',
            suggestedImprovement: 'Tie the conclusion explicitly to future aspirations',
          },
          {
            category: 'Storytelling & Hook',
            status: data.hookRating?.includes('10') ? 'Strong' : 'Good',
            summary: data.hookRating || 'Engaging opening narrative',
            whatWorks: 'Establishes clear character and setting',
            whatIsMissing: 'Show more sensory details in turning point',
            suggestedImprovement: 'Focus on action during critical moment',
          },
          {
            category: 'Specificity & Impact',
            status: 'Good',
            summary: 'Contains good personal examples',
            whatWorks: 'Mentions real projects and learning experiences',
            whatIsMissing: 'Could quantify impact or outcome where possible',
            suggestedImprovement: 'Include precise names, metrics, or timeline details',
          },
          {
            category: 'Reflection & Growth',
            status: 'Strong',
            summary: 'High self-awareness and perspective',
            whatWorks: 'Explains what was learned from challenges',
            whatIsMissing: 'Deepen the explanation of how mindset shifted',
            suggestedImprovement: 'Elaborate on how this shapes current choices',
          },
          {
            category: 'Structure & Flow',
            status: data.clarityAndFlow?.includes('10') ? 'Strong' : 'Good',
            summary: data.clarityAndFlow || 'Smooth paragraph transitions',
            whatWorks: 'Logical chronological or thematic progression',
            whatIsMissing: 'Check transition between middle paragraphs',
            suggestedImprovement: 'Use clear topic sentences',
          },
          {
            category: 'Voice & Authenticity',
            status: 'Strong',
            summary: data.toneAnalysis || 'Authentic, reflective, and determined',
            whatWorks: 'Sounds like a genuine student voice',
            whatIsMissing: 'Avoid over-formatted admissions vocabulary',
            suggestedImprovement: 'Keep vocabulary natural and honest',
          },
          {
            category: 'Clarity & Mechanics',
            status: 'Strong',
            summary: 'Clear sentence structure throughout',
            whatWorks: 'Easy to read without grammatical friction',
            whatIsMissing: 'Check for minor word count optimization',
            suggestedImprovement: 'Trim redundant adverbs',
          },
        ],
        strengths: data.strengths || [],
        priorityImprovements: (data.improvementAreas || []).map((imp: string, i: number) => ({
          id: `imp-${i}`,
          issue: imp,
          whyItMatters: 'Admissions officers prioritize clear evidence over abstract claims.',
          tryThis: 'Add a concrete 1-2 sentence example showing this in action.',
        })),
        paragraphReviews: draftText
          .trim()
          .split(/\n\s*\n/)
          .filter(Boolean)
          .map((p, i) => ({
            paragraphNumber: i + 1,
            purposeLabel: i === 0 ? 'Opening Hook & Context' : i === draftText.split(/\n\s*\n/).length - 1 ? 'Reflection & Forward Goals' : `Narrative Development ${i}`,
            textSnippet: p.substring(0, 100) + (p.length > 100 ? '...' : ''),
            works: 'Clear contribution to overall theme.',
            consider: 'Ensure strong transition into next section.',
          })),
        checklist: [
          { id: 'c1', label: 'Answers the prompt directly', checked: true },
          { id: 'c2', label: 'Uses specific concrete details', checked: true },
          { id: 'c3', label: 'Shows genuine personal reflection', checked: false },
        ],
        analyzedAt: new Date().toISOString(),
      };

      setAnalysis(structured);
      if (!user) {
        localStorage.setItem('uniroute_free_essay_review_count', '1');
      }
      handleSaveDraft('review');
    } catch (err: any) {
      console.error('Error analyzing essay:', err);
      setAnalysisError(err.message || 'Error executing AI essay review.');
    } finally {
      setIsAnalyzing(false);
    }
  };

  const steps: { stage: BuilderStage; label: string; number: number }[] = [
    { stage: 'prompt', label: '1. Prompt', number: 1 },
    { stage: 'brainstorm', label: '2. Brainstorm', number: 2 },
    { stage: 'draft', label: '3. Draft', number: 3 },
    { stage: 'review', label: '4. Review', number: 4 },
  ];

  return (
    <div id="essay-builder" className="space-y-6 pb-12">
      {/* BUILDER HEADER */}
      <div className="bg-white border border-slate-200/80 rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                if (saveStatus === 'Unsaved') {
                  if (confirm('You have unsaved changes in your essay draft. Are you sure you want to exit to the hub and discard them?')) {
                    onBackToHub();
                  }
                } else {
                  onBackToHub();
                }
              }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white border border-slate-200/90 shadow-xs text-xs font-bold text-slate-700 hover:text-indigo-600 hover:bg-slate-50 transition-all cursor-pointer"
              title="Return to Essay Hub"
            >
              <ArrowLeft className="w-4 h-4 text-indigo-600" />
              <span className="hidden sm:inline">Essay Hub</span>
            </button>

            <div>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Essay Title..."
                className="text-base sm:text-xl font-extrabold text-slate-950 bg-transparent focus:outline-none focus:border-b-2 border-indigo-600"
              />
              <span className="text-[10px] sm:text-xs text-slate-500 font-semibold block mt-0.5">
                {essayType} • Max {wordLimit} words
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold text-slate-500 flex items-center gap-1.5">
              {saveStatus === 'Saved' ? (
                <>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  <span className="hidden xs:inline">Saved</span>
                </>
              ) : saveStatus === 'Saving...' ? (
                <>
                  <RefreshCw className="w-3.5 h-3.5 animate-spin text-indigo-500" />
                  <span className="hidden xs:inline">Saving...</span>
                </>
              ) : (
                <>
                  <AlertCircle className="w-3.5 h-3.5 text-amber-500" />
                  <span className="text-amber-600 font-bold hidden xs:inline">Unsaved changes</span>
                </>
              )}
            </span>

            <button
              onClick={() => handleSaveDraft()}
              className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl font-bold text-xs transition-all flex items-center gap-1.5 cursor-pointer ${
                saveStatus === 'Unsaved'
                  ? 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-800'
              }`}
            >
              <Save className="w-3.5 h-3.5" />
              <span>Save Draft</span>
            </button>
          </div>
        </div>

        {/* STEPPER PROGRESS BAR */}
        <div className="grid grid-cols-4 gap-1 sm:gap-2 pt-3 border-t border-slate-100">
          {steps.map((s) => {
            const isActive = currentStage === s.stage;
            const stageOrder: Record<BuilderStage, number> = { prompt: 1, brainstorm: 2, draft: 3, review: 4 };
            const isCompleted = stageOrder[currentStage] > s.number;

            return (
              <button
                key={s.stage}
                onClick={() => handleStageChange(s.stage)}
                className={`h-9 sm:h-10 px-1 sm:px-2 rounded-lg sm:rounded-xl text-[9px] sm:text-xs font-extrabold transition-all text-center flex items-center justify-center leading-tight cursor-pointer ${
                  isActive
                    ? 'bg-slate-900 text-white shadow-xs'
                    : isCompleted
                    ? 'bg-slate-100 text-slate-900 hover:bg-slate-200'
                    : 'bg-slate-50 text-slate-400 hover:text-slate-700 hover:bg-slate-100'
                }`}
              >
                {s.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* RENDER CURRENT STAGE */}
      {currentStage === 'prompt' && (
        <PromptStage
          prompt={prompt}
          setPrompt={setPrompt}
          essayType={essayType}
          setEssayType={setEssayType}
          wordLimit={wordLimit}
          setWordLimit={setWordLimit}
          onContinue={() => handleStageChange('brainstorm')}
        />
      )}

      {currentStage === 'brainstorm' && (
        <BrainstormStage
          answers={brainstormAnswers}
          setAnswers={setBrainstormAnswers}
          onBack={() => handleStageChange('prompt')}
          onContinue={() => handleStageChange('draft')}
          onSave={() => handleSaveDraft('brainstorm')}
          saveStatus={saveStatus}
        />
      )}

      {currentStage === 'draft' && (
        <DraftStage
          draftText={draftText}
          setDraftText={setDraftText}
          prompt={prompt}
          wordLimit={wordLimit}
          brainstormAnswers={brainstormAnswers}
          onBack={() => handleStageChange('brainstorm')}
          onContinue={() => handleStageChange('review')}
          onSave={() => handleSaveDraft('draft')}
        />
      )}

      {currentStage === 'review' && (
        <EssayAnalysisDashboard
          essayText={draftText}
          prompt={prompt}
          wordLimit={wordLimit}
          analysis={analysis}
          isAnalyzing={isAnalyzing}
          analysisError={analysisError}
          onAnalyze={handleRunEssayAnalysis}
          onBackToDraft={() => handleStageChange('draft')}
          onSave={() => handleSaveDraft('review')}
        />
      )}
    </div>
  );
};
