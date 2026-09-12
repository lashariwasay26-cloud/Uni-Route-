import { EssayDraft, EssayType, BuilderStage } from '../types';
import { supabase, isSupabaseConfigured } from './supabase';

const DRAFTS_KEY = 'uniroute_essay_drafts_v1';

export function calculateDraftProgress(draft: Partial<EssayDraft>): number {
  let score = 0;
  if (draft.prompt && draft.prompt.trim().length > 5) score += 25;
  if (draft.brainstormAnswers && draft.brainstormAnswers.some(b => b.answer.trim().length > 10)) score += 25;
  if (draft.draftText && draft.draftText.trim().split(/\s+/).length >= 50) score += 25;
  if (draft.lastAnalysis || draft.currentStage === 'review') score += 25;
  return Math.min(100, Math.max(10, score));
}

export function getSavedDrafts(): EssayDraft[] {
  try {
    const raw = localStorage.getItem(DRAFTS_KEY);
    if (!raw) return [];
    const parsed: EssayDraft[] = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];

    // Filter out untouched/empty placeholder drafts
    const validDrafts = parsed.filter(d => {
      const hasText = Boolean(d.draftText && d.draftText.trim().length > 0);
      const hasBrainstorm = Boolean(
        d.brainstormAnswers && d.brainstormAnswers.some(b => b.answer && b.answer.trim().length > 0)
      );
      const hasAnalysis = Boolean(d.lastAnalysis);

      // Only count as saved draft if user wrote draft text, answered brainstorm questions, or ran AI analysis
      return hasText || hasBrainstorm || hasAnalysis;
    });

    // Clean up local storage if empty placeholder drafts were present
    if (validDrafts.length !== parsed.length) {
      try {
        localStorage.setItem(DRAFTS_KEY, JSON.stringify(validDrafts));
      } catch (e) {
        // Ignore write error
      }
    }

    return validDrafts;
  } catch (err) {
    console.error('Error reading saved drafts from localStorage:', err);
    return [];
  }
}

export function getDraftById(id: string): EssayDraft | null {
  const drafts = getSavedDrafts();
  return drafts.find(d => d.id === id) || null;
}

export interface SaveDraftOptions {
  notifyToast?: boolean;
  toastTitle?: string;
  toastMessage?: string;
  isAutosave?: boolean;
}

export function saveDraftToStorage(
  partial: Partial<EssayDraft> & { id: string },
  options: SaveDraftOptions = { notifyToast: true }
): EssayDraft {
  const drafts = getSavedDrafts();
  const index = drafts.findIndex(d => d.id === partial.id);

  const existing = index !== -1 ? drafts[index] : null;
  const now = new Date().toISOString();

  const updated: EssayDraft = {
    id: partial.id,
    title: partial.title || existing?.title || 'Untitled Essay',
    essayType: partial.essayType || existing?.essayType || 'Common App Essay',
    prompt: partial.prompt !== undefined ? partial.prompt : (existing?.prompt || ''),
    wordLimit: partial.wordLimit || existing?.wordLimit || 650,
    brainstormAnswers: partial.brainstormAnswers || existing?.brainstormAnswers || [],
    draftText: partial.draftText !== undefined ? partial.draftText : (existing?.draftText || ''),
    currentStage: partial.currentStage || existing?.currentStage || 'prompt',
    progressPercent: calculateDraftProgress({ ...existing, ...partial }),
    createdAt: existing?.createdAt || now,
    updatedAt: now,
    lastAnalysis: partial.lastAnalysis || existing?.lastAnalysis,
  };

  if (index !== -1) {
    drafts[index] = updated;
  } else {
    drafts.unshift(updated);
  }

  try {
    localStorage.setItem(DRAFTS_KEY, JSON.stringify(drafts));

    // Dispatch toast event if notification is enabled
    if (options.notifyToast !== false && typeof window !== 'undefined') {
      const wordCount = updated.draftText.trim()
        ? updated.draftText.trim().split(/\s+/).filter(Boolean).length
        : 0;

      window.dispatchEvent(
        new CustomEvent('essay-draft-saved', {
          detail: {
            title: options.toastTitle || (options.isAutosave ? 'Draft Autosaved' : 'Draft Saved to Local Storage'),
            message: options.toastMessage,
            draftTitle: updated.title,
            wordCount,
            timestamp: new Date(),
            type: options.isAutosave ? 'autosave' : 'save',
            draft: updated,
          },
        })
      );
    }
  } catch (err) {
    console.error('Error writing drafts to localStorage:', err);
  }

  // Optional background Supabase sync if configured
  if (isSupabaseConfigured() && supabase) {
    Promise.resolve(supabase.from('essays').upsert({
      id: updated.id,
      title: updated.title,
      essay_type: updated.essayType,
      prompt: updated.prompt,
      word_limit: updated.wordLimit,
      brainstorm_data: updated.brainstormAnswers,
      draft_text: updated.draftText,
      current_stage: updated.currentStage,
      updated_at: updated.updatedAt
    })).then(({ error }) => {
      if (error) console.warn('Supabase background draft sync error:', error.message);
    }).catch(() => {});
  }

  return updated;
}

export function deleteDraftFromStorage(id: string): boolean {
  try {
    const drafts = getSavedDrafts();
    const filtered = drafts.filter(d => d.id !== id);
    localStorage.setItem(DRAFTS_KEY, JSON.stringify(filtered));

    if (isSupabaseConfigured() && supabase) {
      Promise.resolve(supabase.from('essays').delete().eq('id', id)).then(() => {}).catch(() => {});
    }
    return true;
  } catch (err) {
    console.error('Error deleting draft from localStorage:', err);
    return false;
  }
}

export function duplicateDraftInStorage(id: string): EssayDraft | null {
  const original = getDraftById(id);
  if (!original) return null;

  const newId = `essay-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`;
  const duplicate: EssayDraft = {
    ...original,
    id: newId,
    title: `${original.title} (Copy)`,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  saveDraftToStorage(duplicate, {
    notifyToast: true,
    toastTitle: 'Draft Duplicated',
    toastMessage: `Created copy "${duplicate.title}" in local storage`,
  });
  return duplicate;
}

export function createInitialDraft(essayType: EssayType = 'Common App Essay', customPrompt: string = ''): EssayDraft {
  const newId = `essay-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`;
  
  const defaultPrompts: Record<EssayType, string> = {
    'Common App Essay': 'Some students have a background, identity, interest, or talent that is so meaningful they believe their application would be incomplete without it. If this sounds like you, then please share your story.',
    'Supplemental Essays': 'Describe a key extracurricular activity or work experience that has shaped your perspective.',
    'Scholarship Essays': 'Explain how receiving this scholarship will enable you to achieve your academic and community leadership goals.',
    'Personal Statement': 'Outline your academic journey, major intellectual achievements, and your long-term aspirations.',
    'Why This University?': 'Why are you drawn to this specific university, and how will its academic programs support your future goals?',
    'Why This Major?': 'What experiences or questions sparked your passion for your chosen major, and why do you want to study it deeply?',
    'Other': customPrompt || 'Paste your essay prompt here...'
  };

  const initialDraft: EssayDraft = {
    id: newId,
    title: `My ${essayType}`,
    essayType,
    prompt: customPrompt || defaultPrompts[essayType] || '',
    wordLimit: 650,
    brainstormAnswers: [
      { id: 'q1', question: 'What experience has changed the way you think?', answer: '' },
      { id: 'q2', question: 'What challenge, mistake, or obstacle taught you something important?', answer: '' },
      { id: 'q3', question: 'What are you deeply curious about?', answer: '' },
      { id: 'q4', question: 'What moment would you remember years from now?', answer: '' },
      { id: 'q5', question: 'What do you want an admissions reader to understand about you that your grades cannot show?', answer: '' },
    ],
    draftText: '',
    currentStage: 'prompt',
    progressPercent: 25,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  return initialDraft;
}

export function clearAllDraftsFromStorage(): void {
  try {
    localStorage.removeItem(DRAFTS_KEY);
  } catch (e) {
    console.error('Failed to clear drafts from storage:', e);
  }
}
