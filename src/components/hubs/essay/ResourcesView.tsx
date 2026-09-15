import React, { useState } from 'react';
import {
  ArrowLeft,
  BookOpen,
  Search,
  CheckCircle2,
  FileText,
  Lightbulb,
  AlertTriangle,
  Sparkles,
  Zap,
  ChevronRight,
  Clock,
  LayoutGrid,
  BookMarked,
  ArrowUpRight
} from 'lucide-react';

interface ResourcesViewProps {
  initialArticleId?: string;
  onBackToHub: () => void;
  onStartWriting?: () => void;
}

export const ResourcesView: React.FC<ResourcesViewProps> = ({
  initialArticleId,
  onBackToHub,
  onStartWriting,
}) => {
  // If an initial article ID is given or selected, view that article expanded.
  // Otherwise default to the selected article ID.
  const [activeArticleId, setActiveArticleId] = useState<string>(initialArticleId || 'finding-story');
  const [viewMode, setViewMode] = useState<'detail' | 'grid'>('detail');
  const [searchTerm, setSearchTerm] = useState('');

  const articles = [
    {
      id: 'finding-story',
      title: 'Finding Your Story',
      category: 'Ideation & Brainstorming',
      readTime: '6 min deep dive',
      summary: 'Learn how to identify meaningful personal experiences that highlight intellectual curiosity, character growth, and core values.',
      proTip: 'A small, specific moment told with deep reflection always beats a massive life event told superficially.',
      content: [
        {
          heading: '1. The Admissions Lens: What Officers Actually Look For',
          text: 'Top universities receive tens of thousands of applicants with near-perfect grades and test scores. Admissions officers do not use your personal statement to measure your achievements—that is what your transcript and activities section are for. Instead, they use it to answer three critical questions: How do you think when faced with ambiguity? Are you genuinely curious? What kind of classmate will you be in dorms and seminar rooms?',
        },
        {
          heading: '2. The "Shift Moment" Framework',
          text: 'The most compelling essays center on a "moment of shift"—a specific time when your understanding of yourself, a problem, a value, or another person changed fundamentally. Look for moments where your initial assumption turned out to be wrong, or where you had to adapt after an unexpected setback.',
        },
        {
          heading: '3. Before & After: Transforming a Generic Topic',
          exampleWeak: 'Weak Pitch: "I won 1st place at the regional science fair after working hard for six months."',
          exampleStrong: 'Transformative Story: "When my 3D-printed robotics sensor failed two hours before judging, I had to abandon my prepared script, explain the hardware flaw directly to the judges, and discover why unexpected error data taught me more than a working prototype."',
          text: 'Notice how the transformative story focuses on problem-solving, intellectual honesty, and emotional maturity rather than bragging about the trophy.',
        },
        {
          heading: '4. The "So What?" Test Exercise',
          text: 'For every topic idea you brainstorm, apply the "So What?" test. Ask yourself: Why does this experience matter to the person I am today? If an experience didn’t change your actions, choices, or perspective in a lasting way, pick a different memory.',
        },
      ],
      actionChecklist: [
        'List 3 times you failed or got confused and how you responded.',
        'Identify 2 topics you could talk about for hours without getting tired.',
        'Ask a close friend: "What is a story about me that best shows who I am?"',
      ],
    },
    {
      id: 'essay-structure',
      title: 'Essay Structure & Narrative Arc',
      category: 'Drafting & Organization',
      readTime: '7 min deep dive',
      summary: 'Master the structural architecture of persuasive storytelling—from the active hook to deep reflection and forward-looking closure.',
      proTip: 'Aim for a 40/60 split: 40% describing the context and challenge, and 60% exploring your reflection, realization, and growth.',
      content: [
        {
          heading: '1. The 650-Word Proportional Anatomy',
          text: 'A well-balanced Common App or supplemental essay follows a clear proportional structure: 15% Hook & Scene Setting (engaging entry into action or thought), 35% Narrative Core (the problem or challenge encountered), 35% Deep Reflection (internal shift and intellectual processing), and 15% Forward Application (how this evolved mindset shapes your current pursuits).',
        },
        {
          heading: '2. Crafting an Active Hook (Without Clichés)',
          text: 'Never open your essay with a dictionary definition ("Webster defines leadership as..."), a generic quote, or a sweeping rhetorical question. Instead, open in media res—drop the reader directly into a specific scene, decision point, or curious observation.',
        },
        {
          heading: '3. The "Show, Don\'t Tell" Paragraph Transformation',
          exampleWeak: 'Telling: "I was very passionate about computer science and spent many hours practicing coding."',
          exampleStrong: 'Showing: "At 2:00 AM, my desk was littered with empty tea mugs and six handwritten logic diagrams as I traced a persistent memory leak across 200 lines of C++ code."',
          text: 'Concrete details ground the reader in your reality and make your passion undeniable.',
        },
        {
          heading: '4. The Grounded Forward-Looking Conclusion',
          text: 'Avoid ending with grand, unrealistic promises like "And that is how I plan to change the world." Instead, end by connecting your internal growth to how you approach challenges, relationships, or learning today.',
        },
      ],
      actionChecklist: [
        'Check if your first sentence starts with action or a unique thought.',
        'Ensure the middle section answers "What did I realize?" not just "What happened?"',
        'Verify your word count matches the university requirements.',
      ],
    },
    {
      id: 'common-mistakes',
      title: 'Common Essay Mistakes to Avoid',
      category: 'Editing & Revision',
      readTime: '6 min deep dive',
      summary: 'Identify and eliminate the top admissions red flags that weaken personal statement impact.',
      proTip: 'If you remove your name from your essay and drop it on a school floor, a classmate should be able to identify it as yours immediately.',
      content: [
        {
          heading: '1. The Resume Dump Trap',
          text: 'Trying to summarize five different extracurricular achievements in one essay creates a superficial bulleted list. The personal statement is not a resume in paragraph form—choose one core narrative or theme and explore it deeply.',
        },
        {
          heading: '2. The "Hero Complex" vs. Intellectual Humility',
          text: 'Admissions committees value curiosity, humility, and self-awareness. Avoid framing your story as if you single-handedly solved a massive community issue or taught everyone around you. Highlight what you learned from others.',
        },
        {
          heading: '3. Thesaurus Overload (The Artificial Voice)',
          text: 'Overusing obscure vocabulary words breaks natural reading flow and signals insecurity. Write with precision, clarity, and the natural voice of an articulate high school senior.',
        },
        {
          heading: '4. Trauma Exploitation Without Growth',
          text: 'While sharing personal challenges can be powerful, the focus must always be on your resilience, reflection, and proactive response—not solely on the difficulty of the hardship itself.',
        },
      ],
      actionChecklist: [
        'Run the "Name Removal Test" to verify distinct voice.',
        'Eliminate unnecessary adjectives and filler words.',
        'Check that every paragraph reveals something new about your character.',
      ],
    },
    {
      id: 'own-voice',
      title: 'Writing With Your Own Voice',
      category: 'Style & Authenticity',
      readTime: '5 min deep dive',
      summary: 'Cultivate a natural, memorable, and conversational narrative tone that sounds like your authentic self.',
      proTip: 'Read your draft out loud at normal speaking speed. Any phrase that feels awkward when spoken needs to be simplified.',
      content: [
        {
          heading: '1. The "Read Aloud" Authenticity Test',
          text: 'When you read your essay out loud, notice where you stumble, run out of breath, or feel embarrassed. Stiff, overly formal sentences instantly stand out. Replace them with clear, direct phrasing that reflects how you naturally explain ideas.',
        },
        {
          heading: '2. Anchoring with Specific Sensory Details',
          text: 'Specificity creates intimacy and credibility. Instead of mentioning "a musical instrument", specify "my scratched 1970s acoustic guitar." Specific names, places, and objects make your writing memorable.',
        },
        {
          heading: '3. Embracing Vulnerability and Honest Doubts',
          text: 'Authenticity shines when you admit what you didn’t know at first, what confused you, or how your initial strategy failed. Showing the journey of learning builds trust with the reader.',
        },
        {
          heading: '4. Maintaining Consistent Tone Across Paragraphs',
          text: 'Ensure your voice remains steady throughout the piece. Don\'t start with a humorous tone in paragraph one and shift to an overly formal academic report in paragraph two.',
        },
      ],
      actionChecklist: [
        'Record yourself reading the draft aloud and listen for natural rhythm.',
        'Replace generic words ("stuff", "things", "good") with concrete nouns and active verbs.',
        'Ensure your ending feels earned and honest.',
      ],
    },
  ];

  const currentArticle = articles.find((a) => a.id === activeArticleId) || articles[0];

  const filteredArticles = articles.filter(
    (a) =>
      a.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      a.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelectArticle = (id: string) => {
    setActiveArticleId(id);
    setViewMode('detail');
  };

  return (
    <div className="max-w-5xl mx-auto space-y-4 sm:space-y-6 py-2 sm:py-4 animate-in fade-in-50">
      {/* Top Navigation Bar */}
      <div className="grid grid-cols-2 sm:flex sm:items-center sm:justify-between gap-2 pb-2.5 border-b border-slate-200/80">
        <div className="flex items-center gap-2 col-span-2 sm:col-span-1 w-full sm:w-auto">
          <button
            onClick={onBackToHub}
            className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3 h-9 rounded-xl bg-white border border-slate-200 shadow-xs text-[11px] sm:text-xs font-bold text-slate-700 hover:text-indigo-600 hover:bg-slate-50 transition-all cursor-pointer whitespace-nowrap"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
            <span>Back to Hub</span>
          </button>

          {viewMode === 'detail' && (
            <button
              onClick={() => setViewMode('grid')}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3 h-9 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-[11px] sm:text-xs font-bold transition-all cursor-pointer whitespace-nowrap"
            >
              <LayoutGrid className="w-3.5 h-3.5 text-slate-500 shrink-0" />
              <span>Browse Guides</span>
            </button>
          )}
        </div>

        {onStartWriting && (
          <button
            onClick={onStartWriting}
            className="col-span-2 sm:col-span-1 inline-flex items-center justify-center gap-1.5 px-4 h-9 rounded-xl bg-slate-900 hover:bg-black text-white font-bold text-[11px] sm:text-xs shadow-md transition-all cursor-pointer active:scale-95 whitespace-nowrap"
          >
            <span>Start Writing Draft</span>
            <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
          </button>
        )}
      </div>

      {/* VIEW MODE 1: GRID / ALL GUIDES SELECTOR */}
      {viewMode === 'grid' ? (
        <div className="space-y-4 sm:space-y-6">
          <div>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-950 tracking-tight">
              Essay Strategy & Writing Guides
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Select a guide below for an expanded, step-by-step analysis and practical writing frameworks.
            </p>
          </div>

          <div className="relative max-w-md">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search guide topics..."
              className="w-full bg-white border border-slate-200 rounded-xl pl-9 pr-4 py-2 text-xs text-slate-950 placeholder-slate-400 focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/20 transition-all shadow-xs h-9"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
            {filteredArticles.map((art) => (
              <div
                key={art.id}
                onClick={() => handleSelectArticle(art.id)}
                className="bg-white border border-slate-200/80 hover:border-indigo-500/80 rounded-xl sm:rounded-[24px] p-4 sm:p-6 shadow-[0_2px_15px_rgba(0,0,0,0.02)] sm:shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-md transition-all cursor-pointer flex flex-col justify-between group space-y-3 sm:space-y-4"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] sm:text-[10px] font-extrabold uppercase tracking-wider text-indigo-700 bg-indigo-50 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md sm:rounded-lg">
                      {art.category}
                    </span>
                    <span className="text-[10px] sm:text-[11px] font-semibold text-slate-400 flex items-center gap-1">
                      <Clock className="w-3 h-3 text-indigo-500" />
                      {art.readTime}
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-950 group-hover:text-indigo-600 transition-colors">
                    {art.title}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {art.summary}
                  </p>
                </div>

                <div className="pt-2.5 border-t border-slate-100 flex items-center justify-between text-[11px] sm:text-xs font-bold text-indigo-600 group-hover:translate-x-1 transition-transform">
                  <span>Read Detailed Analysis</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        /* VIEW MODE 2: EXPANDED DETAILED ANALYSIS VIEW (Clean, No Duplicate Stacked Cards) */
        <div className="space-y-4 sm:space-y-6">
          {/* Quick Topic Tabs Bar for 1-Click Switching (Replaces the vertical stack) */}
          <div className="bg-slate-100/80 p-1 rounded-xl sm:rounded-2xl flex items-center gap-1 overflow-x-auto no-scrollbar">
            {articles.map((art) => {
              const isActive = art.id === activeArticleId;
              return (
                <button
                  key={art.id}
                  onClick={() => setActiveArticleId(art.id)}
                  className={`px-2.5 py-1.5 sm:px-3.5 sm:py-2 rounded-lg sm:rounded-xl text-[10px] sm:text-xs font-bold transition-all whitespace-nowrap cursor-pointer shrink-0 ${
                    isActive
                      ? 'bg-white text-indigo-700 shadow-xs'
                      : 'text-slate-600 hover:text-slate-950 hover:bg-white/50'
                  }`}
                >
                  {art.title}
                </button>
              );
            })}
          </div>

          {/* Expanded Article Body Container */}
          <div className="bg-white border border-slate-200/80 rounded-xl sm:rounded-[28px] p-4 sm:p-8 space-y-6 sm:space-y-8 shadow-[0_2px_15px_rgba(0,0,0,0.02)] sm:shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
            {/* Header Header */}
            <div className="space-y-3 pb-4 sm:pb-6 border-b border-slate-100">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-[9px] sm:text-xs font-extrabold uppercase tracking-wider text-indigo-700 bg-indigo-50 px-2 py-0.5 sm:px-3 sm:py-1 rounded-md sm:rounded-xl border border-indigo-100">
                  {currentArticle.category}
                </span>
                <span className="text-[10px] sm:text-xs font-semibold text-slate-500 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-indigo-600" />
                  {currentArticle.readTime}
                </span>
              </div>

              <h1 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-950 tracking-tight leading-tight">
                {currentArticle.title}
              </h1>

              <p className="text-slate-600 text-xs sm:text-base leading-relaxed italic bg-slate-50 p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-slate-200/80">
                "{currentArticle.summary}"
              </p>
            </div>

            {/* Pro Tip Box */}
            {currentArticle.proTip && (
              <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-amber-50/80 border border-amber-200/80 flex items-start gap-2.5 sm:gap-3">
                <Lightbulb className="w-4 h-4 sm:w-5 sm:h-5 text-amber-600 shrink-0 mt-0.5" />
                <div className="text-xs text-amber-950 leading-relaxed">
                  <span className="font-extrabold block mb-0.5 text-amber-900 uppercase tracking-wider text-[10px]">
                    Admissions Pro Tip
                  </span>
                  {currentArticle.proTip}
                </div>
              </div>
            )}

            {/* Detailed Content Sections */}
            <div className="space-y-6 sm:space-y-8">
              {currentArticle.content.map((sec, idx) => (
                <div key={idx} className="space-y-2 sm:space-y-3">
                  <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-950 flex items-center gap-2">
                    <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-md sm:rounded-lg bg-indigo-100 text-indigo-700 text-[10px] sm:text-xs font-black flex items-center justify-center shrink-0">
                      {idx + 1}
                    </span>
                    <span>{sec.heading.replace(/^\d+\.\s*/, '')}</span>
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed pl-7 sm:pl-8">
                    {sec.text}
                  </p>

                  {/* Optional Example Box */}
                  {(sec.exampleWeak || sec.exampleStrong) && (
                    <div className="ml-7 sm:ml-8 my-2 sm:my-3 grid grid-cols-1 md:grid-cols-2 gap-2.5 sm:gap-3 text-[11px] sm:text-xs">
                      {sec.exampleWeak && (
                        <div className="p-3 sm:p-3.5 rounded-lg sm:rounded-xl bg-rose-50/80 border border-rose-200/80 space-y-1">
                          <span className="font-extrabold text-rose-800 uppercase text-[9px] sm:text-[10px] block">
                            Weak Approach
                          </span>
                          <p className="text-rose-950 italic">{sec.exampleWeak.replace(/^Weak Pitch:\s*/, '')}</p>
                        </div>
                      )}
                      {sec.exampleStrong && (
                        <div className="p-3 sm:p-3.5 rounded-lg sm:rounded-xl bg-emerald-50/80 border border-emerald-200/80 space-y-1">
                          <span className="font-extrabold text-emerald-800 uppercase text-[9px] sm:text-[10px] block">
                            Transformative Approach
                          </span>
                          <p className="text-emerald-950 font-medium">{sec.exampleStrong.replace(/^(Transformative Story|Showing):\s*/, '')}</p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Action Checklist Box */}
            {currentArticle.actionChecklist && (
              <div className="p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-indigo-50/60 border border-indigo-100 space-y-2.5 sm:space-y-3">
                <h4 className="text-[10px] sm:text-xs font-extrabold text-indigo-950 uppercase tracking-wider flex items-center gap-1.5 sm:gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-indigo-600" />
                  <span>Actionable Writing Exercise</span>
                </h4>
                <ul className="space-y-1.5 sm:space-y-2 text-[11px] sm:text-xs text-slate-700">
                  {currentArticle.actionChecklist.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 shrink-0 mt-1.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Bottom Call to Action */}
            <div className="p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-gradient-to-r from-indigo-900 to-indigo-950 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 shadow-md">
              <div className="space-y-1">
                <span className="text-[10px] sm:text-xs font-bold text-indigo-200 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-indigo-300" />
                  Apply This Strategy Now
                </span>
                <p className="text-[11px] sm:text-xs text-indigo-100 font-medium">
                  Put these principles into action using our guided brainstorm and draft builder.
                </p>
              </div>

              {onStartWriting && (
                <button
                  onClick={onStartWriting}
                  className="w-full sm:w-auto inline-flex items-center justify-center px-4 h-9.5 rounded-lg sm:rounded-xl bg-white text-indigo-950 font-bold text-[11px] sm:text-xs hover:bg-indigo-50 transition-colors cursor-pointer shrink-0 shadow-xs active:scale-95"
                >
                  Open Essay Builder →
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
