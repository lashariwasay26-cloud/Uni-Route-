import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Sparkles, GraduationCap, BookOpen, ShieldCheck } from 'lucide-react';

interface FaqItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'Scholarships',
    question: 'How do I find fully funded scholarships matching my country & grade?',
    answer: 'Uni Route provides a curated directory of over 10,000+ global and national grants including Fulbright, Chevening, DAAD, and HEC Pakistan scholarships. You can filter by degree level (Bachelors, Masters, PhD), location, and deadline.',
  },
  {
    id: 'faq-2',
    category: 'SAT Prep',
    question: 'Is the SAT Preparation material updated for the new Digital SAT format?',
    answer: 'Yes! All practice tests, target score calculators, and high-yield flashcard decks are 100% aligned with College Board’s Digital SAT Reading & Writing and Math module standards.',
  },
  {
    id: 'faq-3',
    category: 'Pakistani Grants',
    question: 'Which Pakistani universities & financial aid programs are supported?',
    answer: 'We cover national programs including HEC Overseas & Indigenous PhD, Ehsaas Undergraduate Scholarship, PEEF, LUMS NOP, NUST NEED-based aid, and IBA National Talent Hunt Program with eligibility calculators.',
  },
  {
    id: 'faq-4',
    category: 'AI Counselor',
    question: 'How does the Gemini AI Profile Counselor analyze my university chances?',
    answer: 'The AI Counselor evaluates your GPA, standardized test scores (SAT/IELTS), extracurricular achievements, and intended major against historical admissions thresholds to group universities into Reach, Target, and Safety tiers.',
  },
  {
    id: 'faq-5',
    category: 'Common App Essay',
    question: 'Can I get feedback on my Common Application essay draft?',
    answer: 'Yes, the Essay Hub offers an interactive workshop with real accepted Ivy League sample essays, hook strength indicators, word count trackers, and instant structural feedback.',
  },
];

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq-section" className="mt-12 pt-8 border-t border-slate-200/60 max-w-2xl mx-auto px-4">
      {/* Section Header */}
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100/80 text-indigo-700 text-[11px] font-bold mb-2">
          <HelpCircle className="w-3 h-3" />
          Got Questions?
        </div>
        <h2 className="text-xl sm:text-2xl font-extrabold text-slate-950 tracking-tight">
          Frequently Asked Questions
        </h2>
        <p className="mt-1 text-xs text-slate-500 max-w-sm mx-auto">
          Quick answers about Uni Route, university admissions, and scholarship applications.
        </p>
      </div>

      {/* Accordion FAQ List - Sleeker, smaller cards */}
      <div className="space-y-2">
        {FAQS.map((faq) => {
          const isOpen = openId === faq.id;
          return (
            <div
              key={faq.id}
              className="bg-white border border-slate-200/80 rounded-xl overflow-hidden transition-all shadow-[0_2px_6px_rgba(0,0,0,0.02)] hover:border-slate-300"
            >
              <button
                onClick={() => toggleFaq(faq.id)}
                className="w-full text-left px-4 py-3 flex items-center justify-between gap-3 font-bold text-xs sm:text-sm text-slate-900 focus:outline-none cursor-pointer"
              >
                <span className="flex items-center gap-2">
                  <span className="text-indigo-600 font-extrabold text-[10px] px-1.5 py-0.5 rounded bg-indigo-50 border border-indigo-100/80 shrink-0">
                    {faq.category}
                  </span>
                  <span className="line-clamp-1">{faq.question}</span>
                </span>
                <ChevronDown
                  className={`w-3.5 h-3.5 text-slate-400 shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 text-indigo-600' : ''
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-4 pb-3.5 pt-1 text-xs text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
