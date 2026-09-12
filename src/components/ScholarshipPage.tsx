import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Building2, Landmark, ArrowLeft, ArrowRight } from 'lucide-react';
import { UniversityListView } from './UniversityListView';
import { GovernmentTrackView } from './GovernmentTrackView';

interface ScholarshipPageProps {
  onBackToHome: () => void;
}

export const ScholarshipPage: React.FC<ScholarshipPageProps> = ({ onBackToHome }) => {
  const [subView, setSubView] = useState<'selection' | 'university' | 'government'>('selection');

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [subView]);

  return (
    <div className="relative overflow-x-hidden">
      <AnimatePresence mode="wait">
        {subView === 'selection' && (
          <motion.div
            key="selection"
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -12 }}
            transition={{ duration: 0.1, ease: "easeOut" }}
          >
            {/* 1. Track Selection Screen */}
            <div className="py-10 sm:py-16 max-w-4xl mx-auto px-4 sm:px-6">
              
              {/* Top Navigation Row */}
              <div className="flex items-center justify-between mb-10">
                <button
                  onClick={onBackToHome}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-white border border-slate-200/90 shadow-sm text-xs font-bold text-slate-700 hover:text-indigo-600 hover:bg-slate-50 transition-all cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back to Homepage</span>
                </button>

                <span className="text-xs font-extrabold uppercase tracking-widest text-slate-400">
                  SCHOLARSHIP TRACKS
                </span>
              </div>

              {/* Main Page Title Header */}
              <div className="text-center max-w-xl mx-auto mb-12 sm:mb-16">
                <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-white border border-slate-200/80 shadow-[0_2px_10px_rgba(0,0,0,0.04)] text-[11px] font-extrabold tracking-[0.2em] text-slate-500 uppercase mb-4">
                  SELECT YOUR PATH
                </div>
                <h1 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight leading-tight">
                  Choose Your Track
                </h1>
                <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
                  Select between university-specific admissions & aid or government-sponsored scholarship programs.
                </p>
              </div>

              {/* 2 Prominent Academic Track Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                
                {/* Card 1: University Track */}
                <div
                  onClick={() => setSubView('university')}
                  className="bg-white text-slate-900 border border-slate-200/90 rounded-[28px] p-8 sm:p-10 shadow-[0_4px_25px_rgba(0,0,0,0.04)] hover:bg-slate-950 hover:text-white active:bg-slate-900 hover:border-slate-900 hover:shadow-xl cursor-pointer hover:-translate-y-1 active:scale-[0.99] transition-all duration-150 flex flex-col justify-between min-h-[380px] sm:min-h-[420px] relative overflow-hidden group"
                >
                  <div className="absolute top-0 right-0 w-36 h-36 bg-slate-500/5 rounded-full pointer-events-none group-hover:bg-white/10" />

                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-slate-950 text-white flex items-center justify-center mb-8 shadow-md transition-colors group-hover:bg-white/20">
                      <Building2 className="w-7 h-7 text-white" />
                    </div>
                    <div className="inline-block text-[11px] font-extrabold tracking-widest text-slate-900 group-hover:text-slate-200 uppercase mb-2 transition-colors">
                      INSTITUTIONAL ADMISSIONS
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-950 group-hover:text-white mb-4 transition-colors">
                      University Track
                    </h2>
                    <p className="text-slate-600 group-hover:text-slate-200 text-sm sm:text-base leading-relaxed font-normal transition-colors">
                      Compare worldwide universities, explore degree requirements, find institutional merit scholarships, and evaluate your best academic match.
                    </p>
                  </div>

                  <div className="pt-8 border-t border-slate-100 group-hover:border-white/20 flex items-center justify-between text-xs font-bold text-slate-700 group-hover:text-white transition-colors">
                    <span className="text-sm">Explore Universities</span>
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>

                {/* Card 2: Government Track */}
                <div
                  onClick={() => setSubView('government')}
                  className="bg-white text-slate-900 border border-slate-200/90 rounded-[28px] p-8 sm:p-10 shadow-[0_4px_25px_rgba(0,0,0,0.04)] hover:bg-slate-950 hover:text-white active:bg-slate-900 hover:border-slate-900 hover:shadow-xl cursor-pointer hover:-translate-y-1 active:scale-[0.99] transition-all duration-150 flex flex-col justify-between min-h-[380px] sm:min-h-[420px] relative overflow-hidden group"
                >
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-slate-950 text-white flex items-center justify-center mb-8 shadow-md transition-colors group-hover:bg-white/20">
                      <Landmark className="w-7 h-7 text-white" />
                    </div>
                    <div className="inline-block text-[11px] font-extrabold tracking-widest text-slate-500 group-hover:text-slate-400 uppercase mb-2 transition-colors">
                      STATE & NATIONAL FUNDING
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-950 group-hover:text-white mb-4 transition-colors">
                      Government Track
                    </h2>
                    <p className="text-slate-600 group-hover:text-slate-200 text-sm sm:text-base leading-relaxed font-normal transition-colors">
                      Explore official government scholarships, national grants, fully funded bilateral sponsorships, and public higher education funding.
                    </p>
                  </div>

                  <div className="pt-8 border-t border-slate-100 group-hover:border-white/20 flex items-center justify-between text-xs font-bold text-slate-700 group-hover:text-white transition-colors">
                    <span className="text-sm">Explore Government Grants</span>
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>

              </div>
            </div>
          </motion.div>
        )}

        {subView === 'university' && (
          <motion.div
            key="university"
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -12 }}
            transition={{ duration: 0.1, ease: "easeOut" }}
          >
            <UniversityListView
              onBackToTracks={() => setSubView('selection')}
            />
          </motion.div>
        )}

        {subView === 'government' && (
          <motion.div
            key="government"
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -12 }}
            transition={{ duration: 0.1, ease: "easeOut" }}
          >
            <GovernmentTrackView
              onBackToTracks={() => setSubView('selection')}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

