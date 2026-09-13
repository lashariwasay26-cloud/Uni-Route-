import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import {
  FileText,
  PenTool,
  Layers,
  Award,
  UserCheck,
  Building2,
  GraduationCap,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  BookOpen,
  Plus,
  Trash2,
  Copy,
  Clock,
  CheckCircle2,
  MoreVertical,
  HelpCircle,
  Lightbulb,
  Search,
  BookMarked,
  ArrowUpDown
} from 'lucide-react';
import { EssayType, EssayDraft } from '../../../types';
import { getSavedDrafts, deleteDraftFromStorage, duplicateDraftInStorage, clearAllDraftsFromStorage } from '../../../lib/essayStorage';

interface EssayHubHomepageProps {
  onBackToHome?: () => void;
  onStartWriting: () => void;
  onSelectEssayType: (type: EssayType) => void;
  onOpenDraft: (draftId: string) => void;
  onOpenTool: (tool: 'brainstorm' | 'prompt-analyzer' | 'review') => void;
  onOpenResources: (articleId?: string) => void;
}

export const EssayHubHomepage: React.FC<EssayHubHomepageProps> = ({
  onBackToHome,
  onStartWriting,
  onSelectEssayType,
  onOpenDraft,
  onOpenTool,
  onOpenResources,
}) => {
  const [drafts, setDrafts] = useState<EssayDraft[]>([]);
  const [filterType, setFilterType] = useState<string>('All');
  const [sortBy, setSortBy] = useState<'recent' | 'az'>('recent');
  const [draftToDelete, setDraftToDelete] = useState<EssayDraft | null>(null);
  const [activeMenuId, setActiveMenuId] = useState<string | null>(null);

  useEffect(() => {
    setDrafts(getSavedDrafts());
  }, []);

  const reloadDrafts = () => {
    setDrafts(getSavedDrafts());
  };

  const handleDeleteConfirm = () => {
    if (draftToDelete) {
      deleteDraftFromStorage(draftToDelete.id);
      setDraftToDelete(null);
      reloadDrafts();
    }
  };

  const handleClearAllDrafts = () => {
    if (confirm('Are you sure you want to clear all saved drafts?')) {
      clearAllDraftsFromStorage();
      reloadDrafts();
    }
  };

  const handleDuplicate = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveMenuId(null);
    duplicateDraftInStorage(id);
    reloadDrafts();
  };

  const essayTypeCards = [
    {
      type: 'Common App Essay' as EssayType,
      title: 'Common App Essay',
      icon: <PenTool className="w-5 h-5 text-indigo-600" />,
      description: 'Build a personal essay that reveals your experiences, character, and perspective.',
      badge: 'Primary Statement',
    },
    {
      type: 'Supplemental Essays' as EssayType,
      title: 'Supplemental Essays',
      icon: <Layers className="w-5 h-5 text-purple-600" />,
      description: 'Work through university-specific prompts such as Why Us?, community, diversity, and extracurricular questions.',
      badge: 'University Specific',
    },
    {
      type: 'Scholarship Essays' as EssayType,
      title: 'Scholarship Essays',
      icon: <Award className="w-5 h-5 text-amber-600" />,
      description: 'Develop compelling essays for scholarship and financial-aid applications.',
      badge: 'Financial Aid',
    },
    {
      type: 'Personal Statement' as EssayType,
      title: 'Personal Statement',
      icon: <UserCheck className="w-5 h-5 text-emerald-600" />,
      description: 'Shape your academic and personal journey into a focused personal statement.',
      badge: 'Grad / General',
    },
    {
      type: 'Why This University?' as EssayType,
      title: 'Why This University?',
      icon: <Building2 className="w-5 h-5 text-cyan-600" />,
      description: 'Learn how to connect your goals and experiences with a university\'s opportunities.',
      badge: 'Fit & Mission',
    },
    {
      type: 'Why This Major?' as EssayType,
      title: 'Why This Major?',
      icon: <GraduationCap className="w-5 h-5 text-blue-600" />,
      description: 'Explain what drives your academic interests and why you want to pursue your chosen field.',
      badge: 'Intellectual Spark',
    },
  ];

  const resourceCards = [
    {
      id: 'finding-story',
      title: 'Finding Your Story',
      description: 'Learn how to identify meaningful experiences from your life that capture who you are.',
      icon: <Lightbulb className="w-5 h-5 text-amber-500" />,
    },
    {
      id: 'essay-structure',
      title: 'Essay Structure',
      description: 'Understand how strong application essays are organized for maximum narrative flow.',
      icon: <FileText className="w-5 h-5 text-indigo-500" />,
    },
    {
      id: 'common-mistakes',
      title: 'Common Essay Mistakes',
      description: 'Avoid vague writing, unnecessary clichés, repetition, and weak reflection.',
      icon: <HelpCircle className="w-5 h-5 text-rose-500" />,
    },
    {
      id: 'own-voice',
      title: 'Writing With Your Own Voice',
      description: 'Keep your essay personal, specific, authentic, and genuinely yours.',
      icon: <Sparkles className="w-5 h-5 text-emerald-500" />,
    },
  ];

  const filteredDrafts = drafts
    .filter((d) => {
      if (filterType === 'All') return true;
      return d.essayType === filterType;
    })
    .sort((a, b) => {
      if (sortBy === 'az') {
        const titleA = (a.title || a.essayType || '').toLowerCase();
        const titleB = (b.title || b.essayType || '').toLowerCase();
        return titleA.localeCompare(titleB);
      }
      const timeA = new Date(a.updatedAt || a.createdAt || 0).getTime();
      const timeB = new Date(b.updatedAt || b.createdAt || 0).getTime();
      return timeB - timeA;
    });

  return (
    <div id="essay-hub-homepage" className="space-y-6 sm:space-y-12 py-2 sm:py-4">
      
      {/* 1. TOP NAVIGATION ROW (Matching ScholarshipPage & SatLandingView) */}
      <div className="flex items-center justify-between mb-2">
        {onBackToHome && (
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-slate-200/90 shadow-xs text-xs font-bold text-slate-700 hover:text-indigo-600 hover:bg-slate-50 transition-all cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 text-indigo-600" />
            <span>Back to Homepage</span>
          </button>
        )}

        <span className="text-xs font-extrabold uppercase tracking-widest text-slate-400 ml-auto">
          ESSAY HUB & BUILDER
        </span>
      </div>

      {/* 2. CENTERED HERO SECTION (Matching Uni Route Header Style) */}
      <div className="text-center max-w-2xl mx-auto py-2 sm:py-4">
        {/* Eyebrow Tag */}
        <div className="inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full bg-white border border-slate-200/80 shadow-[0_2px_12px_rgba(0,0,0,0.04)] text-[10px] sm:text-[11px] font-extrabold tracking-[0.2em] text-slate-600 uppercase mb-3">
          <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
          ESSAY HUB & APPLICATION BUILDER
        </div>

        {/* Headline */}
        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-tight mb-3">
          Your Story.{' '}
          <span className="bg-gradient-to-r from-indigo-600 via-indigo-700 to-purple-600 bg-clip-text text-transparent">
            Your Application.
          </span>
        </h1>

        {/* Description */}
        <p className="text-slate-600 text-xs sm:text-base md:text-lg max-w-xl mx-auto leading-relaxed">
          Turn your unique experiences, ideas, and goals into authentic application essays that stand out.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 mt-8">
          <button
            id="btn-hero-start-writing"
            onClick={onStartWriting}
            className="px-6 py-3.5 rounded-2xl bg-slate-950 hover:bg-slate-900 text-white font-bold text-sm transition-all shadow-md hover:shadow-lg flex items-center gap-2 cursor-pointer active:scale-[0.98]"
          >
            <PenTool className="w-4 h-4" />
            <span>Start Writing Essay</span>
          </button>

          <a
            href="#essay-types-section"
            className="px-6 py-3.5 rounded-2xl bg-white border border-slate-200/90 text-slate-700 hover:bg-slate-50 font-bold text-sm transition-all shadow-xs flex items-center gap-2 cursor-pointer"
          >
            <span>Explore Essay Types</span>
            <ArrowRight className="w-4 h-4 text-slate-400" />
          </a>
        </div>
      </div>

      {/* 3. ESSAY TYPE SECTION */}
      <section id="essay-types-section" className="space-y-6 scroll-mt-24">
        <div className="text-center sm:text-left">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
            What are you writing?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-1">
            Choose an essay type to get the right guidance for your application.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {essayTypeCards.map((card) => (
            <motion.div
              key={card.type}
              whileHover={{ scale: 1.02, y: -4 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onSelectEssayType(card.type)}
              className="bg-white text-slate-900 border border-slate-200/80 rounded-[28px] p-6 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:bg-[#4338ca] hover:text-white active:bg-[#3730a3] hover:border-[#4338ca] hover:shadow-xl cursor-pointer transition-all flex flex-col justify-between min-h-[220px] group relative overflow-hidden"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-11 h-11 rounded-2xl bg-slate-100 group-hover:bg-white/20 flex items-center justify-center transition-all shadow-xs">
                    {card.icon}
                  </div>
                  <span className="text-[10px] font-extrabold px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 group-hover:bg-white/20 group-hover:text-white transition-colors">
                    {card.badge}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-extrabold text-slate-950 group-hover:text-white transition-colors tracking-tight">
                  {card.title}
                </h3>

                <p className="text-xs text-slate-500 group-hover:text-indigo-100 transition-colors leading-relaxed font-medium">
                  {card.description}
                </p>
              </div>

              <div className="pt-4 mt-2 border-t border-slate-100 group-hover:border-white/20 flex items-center justify-between text-xs font-bold text-indigo-600 group-hover:text-white transition-colors">
                <span>Start Writing</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. QUICK START SECTION */}
      <section className="bg-white border border-slate-200/80 rounded-[28px] p-6 sm:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] space-y-6">
        <div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-950 tracking-tight">
            Start with an idea
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm mt-1">
            Not sure what to write? Use our built-in guided tools.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Quick Card 1 */}
          <div className="bg-[#f6f8fc] border border-slate-200/80 rounded-2xl p-5 flex flex-col justify-between space-y-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-indigo-700 font-extrabold text-sm">
                <Lightbulb className="w-4 h-4 text-indigo-600" />
                <span>Find Your Story</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                Discover experiences that could become meaningful essay topics.
              </p>
            </div>
            <button
              onClick={() => onOpenTool('brainstorm')}
              className="w-full py-2.5 rounded-xl bg-white border border-slate-200 text-indigo-700 hover:bg-indigo-600 hover:text-white text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
            >
              <span>Brainstorm</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Quick Card 2 */}
          <div className="bg-[#f6f8fc] border border-slate-200/80 rounded-2xl p-5 flex flex-col justify-between space-y-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-purple-700 font-extrabold text-sm">
                <Search className="w-4 h-4 text-purple-600" />
                <span>Understand Your Prompt</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                Break down what an application prompt is really asking.
              </p>
            </div>
            <button
              onClick={() => onOpenTool('prompt-analyzer')}
              className="w-full py-2.5 rounded-xl bg-white border border-slate-200 text-purple-700 hover:bg-purple-600 hover:text-white text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
            >
              <span>Analyze Prompt</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Quick Card 3 */}
          <div className="bg-[#f6f8fc] border border-slate-200/80 rounded-2xl p-5 flex flex-col justify-between space-y-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-emerald-700 font-extrabold text-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Improve Your Draft</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                Get feedback on clarity, structure, storytelling, and authenticity.
              </p>
            </div>
            <button
              onClick={() => onOpenTool('review')}
              className="w-full py-2.5 rounded-xl bg-white border border-slate-200 text-emerald-700 hover:bg-emerald-600 hover:text-white text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
            >
              <span>Review Essay</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* 5. MY DRAFTS SECTION */}
      <section className="space-y-6 animate-in fade-in-50">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-3">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
                My Saved Drafts
              </h2>
              {drafts.length > 0 && (
                <button
                  onClick={handleClearAllDrafts}
                  className="text-[11px] font-bold text-slate-400 hover:text-rose-600 transition-colors underline cursor-pointer"
                  title="Clear all drafts"
                >
                  Clear All
                </button>
              )}
            </div>
            <p className="text-slate-600 text-sm mt-0.5">
              Continue writing where you left off.
            </p>
          </div>

          {drafts.length > 0 && (
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 max-w-full">
                {['All', 'Common App Essay', 'Supplemental Essays', 'Scholarship Essays', 'Personal Statement'].map((type) => (
                  <button
                    key={type}
                    onClick={() => setFilterType(type)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-colors whitespace-nowrap cursor-pointer ${
                      filterType === type
                        ? 'bg-slate-950 text-white shadow-xs'
                        : 'bg-white border border-slate-200 text-slate-600 hover:text-slate-950 hover:bg-slate-50'
                    }`}
                  >
                    {type === 'Common App Essay' ? 'Common App' : type}
                  </button>
                ))}
              </div>

              {/* SORTING DROPDOWN */}
              <div className="flex items-center gap-2 bg-white border border-slate-200 rounded-xl px-3 py-1.5 shadow-xs shrink-0">
                <ArrowUpDown className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                <span className="text-xs font-bold text-slate-500 whitespace-nowrap hidden sm:inline">Sort:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as 'recent' | 'az')}
                  className="bg-transparent text-xs font-bold text-slate-900 focus:outline-none cursor-pointer pr-1"
                >
                  <option value="recent">Most Recent</option>
                  <option value="az">A-Z</option>
                </select>
              </div>
            </div>
          )}
        </div>

        {/* DRAFTS LIST OR EMPTY PLACEHOLDER STATE */}
        {drafts.length === 0 ? (
          /* EMPTY STATE WHEN USER HAS NO SAVED DRAFTS */
          <div className="bg-white border border-dashed border-slate-300 rounded-[28px] p-8 sm:p-12 text-center max-w-xl mx-auto space-y-4 shadow-xs">
            <div className="w-14 h-14 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mx-auto shadow-xs">
              <BookMarked className="w-7 h-7" />
            </div>

            <div>
              <h3 className="text-lg font-bold text-slate-950">
                Your saved drafts will appear here
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-md mx-auto leading-relaxed">
                Start your first essay and save it here so you can continue anytime.
              </p>
            </div>

            <button
              onClick={onStartWriting}
              className="px-5 py-2.5 rounded-xl bg-slate-950 hover:bg-slate-900 text-white font-bold text-xs shadow-md transition-all inline-flex items-center gap-2 cursor-pointer active:scale-95"
            >
              <Plus className="w-4 h-4" />
              <span>Start Your First Essay</span>
            </button>
          </div>
        ) : filteredDrafts.length > 0 ? (
          /* REAL SAVED DRAFT CARDS */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredDrafts.map((draft) => {
              const words = draft.draftText.trim() ? draft.draftText.trim().split(/\s+/).length : 0;
              const formattedDate = new Date(draft.updatedAt).toLocaleDateString(undefined, {
                month: 'short',
                day: 'numeric',
              });

              return (
                <div
                  key={draft.id}
                  onClick={() => onOpenDraft(draft.id)}
                  className="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-xs hover:shadow-md transition-all flex flex-col justify-between cursor-pointer group relative"
                >
                  <div className="space-y-3">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <span className="text-[10px] font-extrabold uppercase tracking-wider text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded-md">
                          {draft.essayType}
                        </span>
                        <h3 className="text-base font-extrabold text-slate-950 mt-1.5 group-hover:text-indigo-600 transition-colors line-clamp-1">
                          {draft.title}
                        </h3>
                      </div>

                      {/* Dropdown Options */}
                      <div className="relative">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveMenuId(activeMenuId === draft.id ? null : draft.id);
                          }}
                          className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
                          title="Draft Options"
                        >
                          <MoreVertical className="w-4 h-4" />
                        </button>

                        {activeMenuId === draft.id && (
                          <div
                            onClick={(e) => e.stopPropagation()}
                            className="absolute right-0 top-8 z-20 w-40 bg-white border border-slate-200 rounded-xl shadow-lg p-1 text-xs font-semibold space-y-0.5 animate-in fade-in-50 zoom-in-95"
                          >
                            <button
                              onClick={(e) => handleDuplicate(draft.id, e)}
                              className="w-full text-left px-2.5 py-1.5 rounded-lg hover:bg-slate-50 flex items-center gap-2 text-slate-700"
                            >
                              <Copy className="w-3.5 h-3.5 text-slate-500" />
                              <span>Duplicate</span>
                            </button>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setActiveMenuId(null);
                                setDraftToDelete(draft);
                              }}
                              className="w-full text-left px-2.5 py-1.5 rounded-lg hover:bg-rose-50 flex items-center gap-2 text-rose-600"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                              <span>Delete</span>
                            </button>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-xs text-slate-500">
                      <span className="flex items-center gap-1 font-medium">
                        <Clock className="w-3.5 h-3.5" /> {formattedDate}
                      </span>
                      <span className="font-bold text-slate-700">
                        {words} / {draft.wordLimit} words
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="space-y-1">
                      <div className="flex justify-between text-[11px] font-bold text-slate-500">
                        <span>Progress</span>
                        <span>{draft.progressPercent}%</span>
                      </div>
                      <div className="w-full h-1.5 rounded-full bg-slate-100 overflow-hidden">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"
                          style={{ width: `${draft.progressPercent}%` }}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 mt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-indigo-600">
                    <span>Continue Writing</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* EMPTY FILTERED STATE */
          <div className="bg-white border border-slate-200/80 rounded-2xl p-6 text-center space-y-2">
            <p className="text-xs text-slate-600 font-medium">
              No saved drafts match the selected "{filterType}" category filter.
            </p>
            <button
              onClick={() => setFilterType('All')}
              className="text-xs font-bold text-indigo-600 hover:text-indigo-700 underline cursor-pointer"
            >
              Show All Saved Drafts
            </button>
          </div>
        )}
      </section>

      {/* 6. ESSAY RESOURCES */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
            Essay Resources & Guides
          </h2>
          <p className="text-slate-600 text-sm mt-0.5">
            Practical guidance for every stage of your application writing.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {resourceCards.map((res) => (
            <div
              key={res.id}
              onClick={() => onOpenResources(res.id)}
              className="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-xs hover:shadow-md transition-all flex flex-col justify-between cursor-pointer group hover:border-indigo-500"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center">
                  {res.icon}
                </div>
                <h3 className="font-bold text-sm text-slate-950 group-hover:text-indigo-600 transition-colors">
                  {res.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  {res.description}
                </p>
              </div>

              <div className="pt-4 mt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-indigo-600 group-hover:translate-x-1 transition-transform">
                <span>Read Guide</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* DELETE CONFIRMATION MODAL */}
      {draftToDelete && (
        <div className="fixed inset-0 z-50 bg-slate-950/60 flex items-center justify-center p-4">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 max-w-sm w-full space-y-4 shadow-2xl animate-in zoom-in-95">
            <h3 className="text-lg font-bold text-slate-950">
              Delete this draft?
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              This will permanently remove "{draftToDelete.title}". This action cannot be undone.
            </p>
            <div className="flex items-center justify-end gap-2 pt-2">
              <button
                onClick={() => setDraftToDelete(null)}
                className="px-4 py-2 rounded-xl bg-slate-100 text-slate-700 font-semibold text-xs hover:bg-slate-200 cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={handleDeleteConfirm}
                className="px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-semibold text-xs shadow-xs cursor-pointer"
              >
                Delete Draft
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
