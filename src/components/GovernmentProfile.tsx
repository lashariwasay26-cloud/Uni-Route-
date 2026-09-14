import React, { useState, useEffect, useMemo } from 'react';
import {
  ArrowLeft,
  ExternalLink,
  Search,
  ChevronDown,
  ChevronUp,
  Copy,
  Check,
  Globe,
  Coins,
  ShieldCheck,
  Languages,
  Send,
  FileCheck,
  Calendar,
  AlertCircle
} from 'lucide-react';
import { GovernmentTrackItem } from '../types';
import { ExecutiveSectionRenderer } from './government/ExecutiveSectionRenderer';

export interface GovernmentProfileProps {
  scholarship: GovernmentTrackItem;
  onBack: () => void;
}

const getSectionIcon = (num: number) => {
  switch (num) {
    case 1: return <Globe className="w-4 h-4 text-blue-600" />;
    case 2: return <Coins className="w-4 h-4 text-emerald-600" />;
    case 3: return <ShieldCheck className="w-4 h-4 text-amber-600" />;
    case 4: return <Languages className="w-4 h-4 text-purple-600" />;
    case 5: return <Send className="w-4 h-4 text-indigo-600" />;
    case 6: return <FileCheck className="w-4 h-4 text-teal-600" />;
    case 7: return <Calendar className="w-4 h-4 text-rose-600" />;
    default: return null;
  }
};

export const GovernmentProfile: React.FC<GovernmentProfileProps> = ({ scholarship, onBack }) => {
  const [sectionFilter, setSectionFilter] = useState('');
  const [expandedSections, setExpandedSections] = useState<Set<number>>(new Set([1, 2]));
  const [copiedSectionNumber, setCopiedSectionNumber] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    setExpandedSections(new Set([1, 2]));
    setSectionFilter('');
  }, [scholarship]);

  const toggleSection = (secNum: number) => {
    setExpandedSections(prev => {
      const next = new Set(prev);
      if (next.has(secNum)) next.delete(secNum);
      else next.add(secNum);
      return next;
    });
  };

  const expandAll = () => {
    if (scholarship.fullSections) {
      setExpandedSections(new Set(scholarship.fullSections.map(s => s.number)));
    }
  };

  const collapseAll = () => {
    setExpandedSections(new Set());
  };

  const handleCopySection = (secNum: number, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedSectionNumber(secNum);
    setTimeout(() => setCopiedSectionNumber(null), 2000);
  };

  const totalSectionsCount = scholarship.fullSections?.length || 0;

  const filteredSections = useMemo(() => {
    if (!scholarship.fullSections) return [];
    if (!sectionFilter.trim()) return scholarship.fullSections;
    const q = sectionFilter.toLowerCase();
    return scholarship.fullSections.filter(s =>
      s.title.toLowerCase().includes(q) ||
      s.content.toLowerCase().includes(q) ||
      s.number.toString().includes(q)
    );
  }, [scholarship.fullSections, sectionFilter]);

  const officialSearchUrl = `https://google.com/search?q=${encodeURIComponent(scholarship.programTitle + ' official application portal')}`;

  return (
    <div className="min-h-screen bg-slate-50/70 text-slate-900 pb-20">
      
      {/* 1. CLEAN TOP NAVIGATION */}
      <nav className="sticky top-0 z-40 bg-white border-b border-slate-200/80 px-4 sm:px-8 py-3 shadow-xs">
        <div className="max-w-4xl mx-auto flex items-center justify-between gap-4">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-all cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Scholarships</span>
          </button>

          <div className="flex items-center gap-2">
            <span className="hidden sm:inline-block text-xs font-medium text-slate-500">
              {scholarship.country} • {scholarship.sponsorGovernment}
            </span>
            <a
              href={officialSearchUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold transition-all shadow-xs cursor-pointer"
            >
              <span>Official Website</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 pt-6 sm:pt-8">
        
        {/* 2. REFINED CLEAN HEADER */}
        <header className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-2xs mb-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-5 border-b border-slate-100">
            <div>
              <div className="flex items-center gap-2 text-xs font-medium text-slate-500 mb-1.5">
                <span>{scholarship.sponsorGovernment}</span>
                <span>•</span>
                <span>Host: {scholarship.country}</span>
              </div>
              <h1 className="text-xl sm:text-3xl font-bold text-slate-950 tracking-tight">
                {scholarship.programTitle}
              </h1>
            </div>

            {/* Status Badges */}
            <div className="flex flex-wrap items-center gap-2">
              {scholarship.currentStatus && (
                <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wide border ${
                  scholarship.currentStatus.includes('OPEN')
                    ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                    : 'bg-amber-50 text-amber-800 border-amber-200'
                }`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${
                    scholarship.currentStatus.includes('OPEN') ? 'bg-emerald-500 animate-pulse' : 'bg-amber-500'
                  }`} />
                  {scholarship.currentStatus}
                </span>
              )}
              {scholarship.currentCycle && (
                <span className="px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-600 text-xs font-medium">
                  Cycle: {scholarship.currentCycle}
                </span>
              )}
            </div>
          </div>

          {/* Quick Summary Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-5 text-xs">
            <div>
              <span className="text-[11px] font-medium text-slate-400 uppercase tracking-wider block mb-1">
                Deadline
              </span>
              <strong className="text-slate-800 font-semibold block text-xs sm:text-sm">
                {scholarship.deadline.split(' (')[0]}
              </strong>
            </div>

            <div>
              <span className="text-[11px] font-medium text-slate-400 uppercase tracking-wider block mb-1">
                Coverage
              </span>
              <strong className="text-slate-800 font-semibold block text-xs sm:text-sm">
                100% Fully Funded
              </strong>
            </div>

            <div>
              <span className="text-[11px] font-medium text-slate-400 uppercase tracking-wider block mb-1">
                Monthly Stipend
              </span>
              <strong className="text-slate-800 font-semibold block text-xs sm:text-sm">
                {scholarship.stipendMonthly}
              </strong>
            </div>

            <div>
              <span className="text-[11px] font-medium text-slate-400 uppercase tracking-wider block mb-1">
                Pakistani Route
              </span>
              <strong className="text-slate-800 font-semibold block text-xs sm:text-sm">
                {scholarship.hecNominationRequired ? 'CSC + HEC Dual Portal' : 'Direct Online Portal'}
              </strong>
            </div>
          </div>
        </header>

        {/* 3. DOSSIER SECTIONS CONTAINER */}
        <div className="space-y-3">
          
          {/* Search & Quick Controls */}
          <div className="bg-white rounded-2xl p-3.5 sm:p-4 border border-slate-200/90 shadow-2xs flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search pillars (e.g. Coverage, Eligibility, Route, Documents, Timeline)..."
                value={sectionFilter}
                onChange={(e) => setSectionFilter(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-xs placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:bg-white transition-all font-normal"
              />
              {sectionFilter && (
                <button
                  onClick={() => setSectionFilter('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-400 hover:text-slate-600 cursor-pointer"
                >
                  Clear
                </button>
              )}
            </div>

            <div className="flex items-center gap-2 shrink-0 w-full sm:w-auto">
              <button
                onClick={expandAll}
                className="flex-1 sm:flex-initial text-center px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-all cursor-pointer"
              >
                Expand All
              </button>
              <button
                onClick={collapseAll}
                className="flex-1 sm:flex-initial text-center px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-all cursor-pointer"
              >
                Collapse All
              </button>
            </div>
          </div>

          {/* Clean Sections Accordion */}
          <div className="space-y-2.5">
            {filteredSections.map((sec) => {
              const isExpanded = expandedSections.has(sec.number);
              const isCopied = copiedSectionNumber === sec.number;

              return (
                <section
                  key={`${sec.number}-${sec.title}`}
                  id={`sec-${sec.number}`}
                  className="bg-white rounded-2xl border border-slate-200/90 shadow-2xs overflow-hidden transition-all"
                >
                  {/* Section Header */}
                  <div
                    onClick={() => toggleSection(sec.number)}
                    className="p-3.5 sm:p-4 flex items-center justify-between gap-3 cursor-pointer select-none hover:bg-slate-50/60 transition-colors"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-7 h-7 rounded-lg bg-slate-100 flex items-center justify-center shrink-0 border border-slate-200/60">
                        {getSectionIcon(sec.number)}
                      </div>

                      <div className="min-w-0">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                          Pillar 0{sec.number}
                        </span>
                        <h2 className={`text-xs sm:text-sm tracking-tight transition-colors truncate ${
                          isExpanded ? 'text-slate-950 font-bold' : 'text-slate-800 font-semibold'
                        }`}>
                          {sec.title}
                        </h2>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 shrink-0">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleCopySection(sec.number, `Section ${sec.number}: ${sec.title}\n\n${sec.content}`);
                        }}
                        title="Copy section"
                        className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-all cursor-pointer"
                      >
                        {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                      </button>
                      {isExpanded ? (
                        <ChevronUp className="w-4 h-4 text-slate-400" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-slate-400" />
                      )}
                    </div>
                  </div>

                  {/* Section Content When Expanded */}
                  {isExpanded && (
                    <div className="px-4 sm:px-6 pb-4 pt-2 border-t border-slate-100 bg-white">
                      <ExecutiveSectionRenderer content={sec.content} />
                    </div>
                  )}
                </section>
              );
            })}

            {filteredSections.length === 0 && (
              <div className="text-center py-10 bg-white rounded-2xl border border-slate-200 px-4 text-slate-400 text-xs font-medium">
                No sections match "{sectionFilter}".
              </div>
            )}
          </div>

          {/* IMPORTANT NOTE FOR OFFICIAL DEADLINES & SOURCES */}
          <div className="mt-8 bg-amber-50/90 border border-amber-200/90 rounded-2xl p-5 sm:p-6 text-slate-900 shadow-2xs space-y-3">
            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-amber-800">
              <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
              <span>Important Note</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
              For official deadlines, eligibility criteria, and application details, please check directly from official sources and portals.
            </p>
            <div className="pt-2 border-t border-amber-200/60 flex items-center justify-between">
              <a
                href={officialSearchUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-900 hover:text-amber-700 hover:underline transition-all cursor-pointer"
              >
                <span>Verify on Official Portal</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

      </main>

    </div>
  );
};
