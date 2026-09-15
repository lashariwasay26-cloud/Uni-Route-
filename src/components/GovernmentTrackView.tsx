import React, { useState, useMemo, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft, Search, GraduationCap, Calendar, FileText, 
  CheckCircle2, DollarSign, Plane, Heart, Award, ShieldCheck, Clock,
  ArrowRight, ExternalLink, Building2, Sparkles, Scale, ChevronDown
} from 'lucide-react';
import { GovernmentTrackItem } from '../types';
import { GovernmentProfile } from './GovernmentProfile';
import { isSupabaseConfigured, fetchGovernmentScholarshipsFromSupabase, getCachedGovernmentScholarships } from '../lib/supabase';
import { InteractivePageLoader } from './InteractivePageLoader';

import { isPublicGovernmentScholarship } from '../config/previewAccess';

interface GovernmentTrackViewProps {
  onBackToTracks: () => void;
  user?: { email: string; id: string } | null;
  onRequestAuth?: (pendingAction?: any, message?: string) => void;
  pendingScholarshipId?: string;
}

const OCEANIA_COUNTRIES = new Set(['Australia', 'New Zealand']);
const AMERICAS_COUNTRIES = new Set(['United States', 'Canada', 'Mexico', 'Colombia']);
const ASIAN_COUNTRIES = new Set([
  'Japan', 'China', 'South Korea', 'Taiwan', 'Singapore', 'Indonesia',
  'Malaysia', 'Thailand', 'Brunei Darussalam', 'Saudi Arabia', 'Qatar', 'Kuwait', 'Oman'
]);
const AFRICAN_COUNTRIES = new Set(['Egypt', 'Morocco', 'South Africa']);

export const GovernmentTrackView: React.FC<GovernmentTrackViewProps> = ({
  onBackToTracks,
  user = null,
  onRequestAuth,
  pendingScholarshipId,
}) => {
  const scrollPositionRef = useRef<number>(0);
  const lastSelectedGovIdRef = useRef<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDegree, setSelectedDegree] = useState<string>('All');
  const [selectedRegion, setSelectedRegion] = useState<'All' | 'Americas' | 'Asia' | 'Europe' | 'Oceania' | 'Africa'>('All');
  const [selectedScholarship, setSelectedScholarship] = useState<GovernmentTrackItem | null>(null);
  const [visibleCount, setVisibleCount] = useState<number>(10);

  // Dynamic scholarships state (Synchronously read from memory cache or empty fallback)
  const [scholarships, setScholarships] = useState<GovernmentTrackItem[]>(() => {
    return getCachedGovernmentScholarships() || [];
  });
  const [isSupabaseLive, setIsSupabaseLive] = useState(() => {
    const cached = getCachedGovernmentScholarships();
    return Boolean(cached && cached.length > 0);
  });
  const [isSyncing, setIsSyncing] = useState(false);

  // Load from Supabase if configured
  useEffect(() => {
    let isMounted = true;
    let timerId: any = null;

    async function loadSupabaseGovData() {
      const cached = getCachedGovernmentScholarships();
      if (cached && cached.length > 0) {
        setScholarships(cached);
        setIsSupabaseLive(true);
        setIsSyncing(false);
        return;
      }

      setIsSyncing(true);

      // Hard 7-second max limit timer so user NEVER gets stuck infinitely
      timerId = setTimeout(() => {
        if (isMounted) {
          setIsSyncing(false);
        }
      }, 7000);

      if (!isSupabaseConfigured()) {
        setIsSupabaseLive(false);
        setIsSyncing(false);
        if (timerId) clearTimeout(timerId);
        return;
      }

      const { data, error } = await fetchGovernmentScholarshipsFromSupabase();
      if (isMounted) {
        if (timerId) clearTimeout(timerId);
        setIsSyncing(false);
        if (!error && data && data.length > 0) {
          setScholarships(data);
          setIsSupabaseLive(true);
        } else {
          setIsSupabaseLive(false);
        }
      }
    }

    loadSupabaseGovData();
    return () => {
      isMounted = false;
      if (timerId) clearTimeout(timerId);
    };
  }, []);

  // Auto open pending scholarship after auth
  useEffect(() => {
    if (pendingScholarshipId && !selectedScholarship) {
      const item = scholarships.find((s) => s.id === pendingScholarshipId);
      if (item) {
        setSelectedScholarship(item);
      }
    }
  }, [pendingScholarshipId, scholarships, selectedScholarship]);

  const handleSelectScholarship = (item: GovernmentTrackItem) => {
    if (!user && !isPublicGovernmentScholarship(item.id)) {
      if (onRequestAuth) {
        onRequestAuth(
          { view: 'scholarship', scholarshipId: item.id },
          `Accessing the official dossier for ${item.programTitle} requires a free account.`
        );
      }
      return;
    }
    scrollPositionRef.current = window.scrollY || document.documentElement.scrollTop || 0;
    lastSelectedGovIdRef.current = item.id;
    setSelectedScholarship(item);
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  };

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  // Restore scroll position or scroll into view of selected government scholarship card
  useEffect(() => {
    if (!selectedScholarship && lastSelectedGovIdRef.current) {
      const targetId = lastSelectedGovIdRef.current;
      const targetPos = scrollPositionRef.current;

      const restoreGovScroll = () => {
        const cardEl = document.getElementById(`gov-card-${targetId}`);
        if (cardEl) {
          cardEl.scrollIntoView({ block: 'center', behavior: 'instant' });
        } else {
          window.scrollTo({ top: targetPos, left: 0, behavior: 'instant' });
        }
      };

      restoreGovScroll();
      const timer = setTimeout(restoreGovScroll, 30);
      return () => clearTimeout(timer);
    }
  }, [selectedScholarship]);

  const regionCounts = useMemo(() => {
    let oceania = 0;
    let americas = 0;
    let asia = 0;
    let europe = 0;
    let africa = 0;
    scholarships.forEach(item => {
      if (OCEANIA_COUNTRIES.has(item.country)) oceania++;
      else if (AMERICAS_COUNTRIES.has(item.country)) americas++;
      else if (ASIAN_COUNTRIES.has(item.country)) asia++;
      else if (AFRICAN_COUNTRIES.has(item.country)) africa++;
      else europe++;
    });
    return { all: scholarships.length, oceania, americas, asia, europe, africa };
  }, [scholarships]);

  // Extract unique degree levels for filtering
  const allDegrees = ['All', 'Undergraduate', 'Masters', 'PhD', 'Other / Special'];

  // Filter scholarships based on query, selected degree, and region
  const filteredScholarships = useMemo(() => {
    const result = scholarships.filter(item => {
      const matchesSearch = 
        item.programTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.sponsorGovernment.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesDegree = selectedDegree === 'All' || item.degreeLevels.some(lvl => {
        const lowerLvl = lvl.toLowerCase();
        const isUndergrad = lowerLvl.includes('undergrad') || lowerLvl.includes('bachelor') || lowerLvl.includes('baccalaureate');
        const isMasters = lowerLvl.includes('master');
        const isPhD = lowerLvl.includes('phd') || lowerLvl.includes('doctor');

        if (selectedDegree === 'Undergraduate') return isUndergrad;
        if (selectedDegree === 'Masters') return isMasters;
        if (selectedDegree === 'PhD') return isPhD;
        
        // 'Other / Special'
        return !isUndergrad && !isMasters && !isPhD;
      });

      const isOceania = OCEANIA_COUNTRIES.has(item.country);
      const isAmericas = AMERICAS_COUNTRIES.has(item.country);
      const isAsia = ASIAN_COUNTRIES.has(item.country);
      const isAfrica = AFRICAN_COUNTRIES.has(item.country);
      const isEurope = !isOceania && !isAmericas && !isAsia && !isAfrica;

      const matchesRegion = 
        selectedRegion === 'All' ||
        (selectedRegion === 'Oceania' && isOceania) ||
        (selectedRegion === 'Americas' && isAmericas) ||
        (selectedRegion === 'Asia' && isAsia) ||
        (selectedRegion === 'Europe' && isEurope) ||
        (selectedRegion === 'Africa' && isAfrica);

      return matchesSearch && matchesDegree && matchesRegion;
    });
    return result;
  }, [searchQuery, selectedDegree, selectedRegion, scholarships]);

  // Reset pagination limit on filter change
  React.useEffect(() => {
    setVisibleCount(10);
  }, [searchQuery, selectedDegree, selectedRegion]);

  const visibleScholarships = useMemo(() => {
    return filteredScholarships.slice(0, visibleCount);
  }, [filteredScholarships, visibleCount]);

  const showGovLoaderOverlay = isSyncing && (scholarships.length === 0);

  return (
    <div className="relative overflow-x-hidden w-full min-h-[500px]">
      <AnimatePresence>
        {showGovLoaderOverlay && (
          <motion.div
            key="gov-loader-overlay"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="absolute inset-0 z-30 bg-slate-50 flex flex-col items-center justify-center min-h-[500px] rounded-2xl"
          >
            <InteractivePageLoader
              title="Loading Government Scholarships Track"
              subtitle="Searching government-funded grants, international bilateral scholarships, and public awards..."
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div className={showGovLoaderOverlay ? "opacity-0 pointer-events-none" : "opacity-100 transition-opacity duration-200"}>
        <AnimatePresence initial={false}>
          {!selectedScholarship ? (
            <motion.div
              key="gov-list"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="py-4 sm:py-8 max-w-5xl mx-auto px-1 sm:px-4"
            >
      
      {/* Header & Back Action */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-200/80">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <button
              onClick={onBackToTracks}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-all cursor-pointer"
            >
              ← Back to Track Options
            </button>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-[10px] font-extrabold uppercase tracking-wider text-indigo-700">
              GOVERNMENT & BILATERAL TRACK
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-950 tracking-tight flex items-center gap-3">
            <span>Government-Sponsored Scholarships</span>
          </h1>
          <p className="text-slate-600 text-xs sm:text-sm mt-1">
            Comprehensive, 100% verbatim official dossiers for premier state grants. Every clause, timeline, allowance figure, and Pakistani routing rule verified directly against official ministry statutes.
          </p>
        </div>
      </div>

      {/* Search and Filters Segment */}
      <div className="bg-white border border-slate-200/80 rounded-3xl p-4 sm:p-6 shadow-xs mb-8 sm:mb-10 space-y-4">
        
        {/* Region Tabs */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 pb-3 border-b border-slate-100">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 w-full lg:w-auto min-w-0">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider shrink-0">Region:</span>
            <div className="flex items-center p-1 rounded-xl bg-slate-100 border border-slate-200/60 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden whitespace-nowrap w-full">
              <button
                onClick={() => setSelectedRegion('All')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all shrink-0 cursor-pointer ${
                  selectedRegion === 'All'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                All ({regionCounts.all})
              </button>
              <button
                onClick={() => setSelectedRegion('Americas')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all shrink-0 cursor-pointer ${
                  selectedRegion === 'Americas'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Americas ({regionCounts.americas})
              </button>
              <button
                onClick={() => setSelectedRegion('Asia')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all shrink-0 cursor-pointer ${
                  selectedRegion === 'Asia'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Asia & ME ({regionCounts.asia})
              </button>
              <button
                onClick={() => setSelectedRegion('Europe')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all shrink-0 cursor-pointer ${
                  selectedRegion === 'Europe'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Europe ({regionCounts.europe})
              </button>
              <button
                onClick={() => setSelectedRegion('Oceania')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all shrink-0 cursor-pointer ${
                  selectedRegion === 'Oceania'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Oceania ({regionCounts.oceania})
              </button>
              <button
                onClick={() => setSelectedRegion('Africa')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all shrink-0 cursor-pointer ${
                  selectedRegion === 'Africa'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Africa ({regionCounts.africa})
              </button>
            </div>
          </div>

          <div className="text-xs text-slate-500 font-medium shrink-0 self-start lg:self-auto">
            Showing <strong className="text-slate-900 font-bold">{filteredScholarships.length}</strong> opportunities
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-4 items-stretch lg:items-center">
          
          {/* Search Box */}
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-400" />
            <input
              type="text"
              placeholder="Search title, government, or country..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-sm placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:bg-white transition-all"
            />
          </div>

          {/* Filter Chips Container */}
          <div className="flex flex-wrap items-center gap-1.5 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden whitespace-nowrap w-full lg:w-auto">
            <span className="text-xs font-bold text-slate-400 mr-2 uppercase tracking-wider shrink-0">Level:</span>
            {allDegrees.map(deg => (
              <button
                key={deg}
                onClick={() => setSelectedDegree(deg)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all shrink-0 cursor-pointer ${
                  selectedDegree === deg
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
                }`}
              >
                {deg}
              </button>
            ))}
          </div>

        </div>
      </div>

      {/* Scholarships Grid (Executive 2-Column Presentation) */}
      {filteredScholarships.length === 0 ? (
        <div className="text-center py-16 bg-white border border-slate-200/80 rounded-3xl max-w-xl mx-auto px-6">
          <GraduationCap className="w-12 h-12 text-slate-300 mx-auto mb-4" />
          <h3 className="text-base font-bold text-slate-950">No opportunities found</h3>
          <p className="text-slate-500 text-sm mt-1">
            Try adjusting your search terms or filter settings.
          </p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {visibleScholarships.map(item => {
              const totalSections = item.fullSections?.length || 0;

              return (
                <div
                  key={item.id}
                  id={`gov-card-${item.id}`}
                  className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 shadow-xs hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 flex flex-col justify-between group hover:border-indigo-300"
                >
                  <div>
                    
                    {/* Top Bar: Country Flag & Status */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                      <div className="flex items-center gap-3">
                        <span className="text-3xl p-2 rounded-2xl bg-slate-50 border border-slate-100 shrink-0">
                          {item.flag}
                        </span>
                        <div>
                          <span className="text-[10px] font-extrabold uppercase tracking-widest text-indigo-600 block leading-none">
                            {item.sponsorGovernment}
                          </span>
                          <span className="text-xs text-slate-500 font-semibold mt-1 block">
                            Host Nation: {item.country}
                          </span>
                        </div>
                      </div>

                      <div className="flex flex-row sm:flex-col items-center sm:items-end gap-1.5 flex-wrap">
                        {item.currentStatus && (
                          <span className={`px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider border shrink-0 ${
                            item.currentStatus.includes('OPEN')
                              ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                              : 'bg-amber-50 text-amber-800 border-amber-200'
                          }`}>
                            {item.currentStatus}
                          </span>
                        )}
                        {totalSections > 0 && (
                          <span className="px-2.5 py-0.5 rounded-full bg-indigo-50 text-[10px] font-extrabold text-indigo-700 tracking-wider border border-indigo-100 shrink-0">
                            {totalSections} Pillars Verified
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Program Title */}
                    <h2 className="text-lg sm:text-2xl font-black text-slate-950 tracking-tight leading-snug mb-3 group-hover:text-indigo-600 transition-colors">
                      {item.programTitle}
                    </h2>

                    {/* Description */}
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                      {item.description}
                    </p>

                    {/* Financial Package Banner */}
                    <div className="p-4 bg-slate-50/80 rounded-2xl border border-slate-100 mb-6 space-y-2">
                      <div className="flex items-center justify-between text-xs gap-2">
                        <span className="text-slate-400 font-semibold uppercase tracking-wider text-[10px] shrink-0">
                          FINANCIAL PACKAGE
                        </span>
                        <span className="font-black text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-100 text-[10px] sm:text-[11px] truncate">
                          {item.fundingType || 'Fully Funded'}
                        </span>
                      </div>
                      <div className="text-xs font-bold text-slate-800 flex items-start sm:items-center gap-1.5">
                        <DollarSign className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5 sm:mt-0" />
                        <span className="leading-snug">{item.stipendMonthly}</span>
                      </div>
                      <div className="text-[10px] sm:text-[11px] text-slate-500 flex flex-wrap items-center gap-1.5 sm:gap-2 pt-2 border-t border-slate-100/85">
                        <span className={item.tuitionCovered ? 'text-slate-700 font-medium' : 'text-slate-400'}>
                          {item.tuitionCovered ? '✓ Tuition' : 'Tuition Variable'}
                        </span>
                        <span>•</span>
                        <span className={item.airfareCovered ? 'text-slate-700 font-medium' : 'text-slate-400'}>
                          {item.airfareCovered ? '✓ Airfare' : 'Airfare Variable'}
                        </span>
                        <span>•</span>
                        <span className={item.healthInsuranceCovered ? 'text-slate-700 font-medium' : 'text-slate-400'}>
                          {item.healthInsuranceCovered ? '✓ Health Ins' : 'Ins Variable'}
                        </span>
                      </div>
                    </div>

                    {/* Key Highlights Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 text-xs">
                      <div className="p-3 rounded-xl bg-slate-50/50 border border-slate-100">
                        <span className="text-[10px] font-bold text-slate-400 block uppercase">Work Experience</span>
                        <strong className="text-slate-900 font-bold block mt-0.5 truncate" title={item.workExperienceRequired}>
                          {item.workExperienceRequired}
                        </strong>
                      </div>

                      <div className="p-3 rounded-xl bg-slate-50/50 border border-slate-100">
                        <span className="text-[10px] font-bold text-slate-400 block uppercase">Application Route</span>
                        <strong className="text-slate-900 font-bold block mt-0.5 truncate" title={item.applicationRoute}>
                          {item.applicationRoute}
                        </strong>
                      </div>

                      <div className="p-3 rounded-xl bg-slate-50/50 border border-slate-100">
                        <span className="text-[10px] font-bold text-slate-400 block uppercase">HEC Nomination</span>
                        <strong className="text-slate-900 font-bold block mt-0.5 truncate" title={item.hecNominationRequired ? 'Mandatory (HEC Portal)' : 'Direct / Not Required'}>
                          {item.hecNominationRequired ? 'Mandatory' : 'Direct'}
                        </strong>
                      </div>

                      <div className="p-3 rounded-xl bg-slate-50/50 border border-slate-100">
                        <span className="text-[10px] font-bold text-slate-400 block uppercase">Return Obligation</span>
                        <strong className="text-slate-900 font-bold block mt-0.5 truncate" title={item.bondRequirement}>
                          {item.bondRequirement}
                        </strong>
                      </div>
                    </div>

                  </div>

                  {/* Footer Action Bar */}
                  <div className="pt-5 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="flex items-center gap-2 text-slate-500 text-xs font-semibold">
                      <Calendar className="w-4 h-4 text-slate-400" />
                      <span>Deadline: <strong className="text-slate-800 font-bold">{item.deadline.split(' (')[0]}</strong></span>
                    </div>

                    <button
                      onClick={() => handleSelectScholarship(item)}
                      className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-indigo-600 text-white text-xs font-bold transition-all shadow-xs group-hover:bg-indigo-600 cursor-pointer"
                    >
                      <span>Open Official Dossier</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {filteredScholarships.length > visibleCount && (
            <div className="text-center pt-8">
              <button
                onClick={() => setVisibleCount(prev => prev + 10)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-white border border-slate-200/90 hover:border-indigo-600 hover:bg-indigo-50/40 text-slate-800 hover:text-indigo-700 text-xs font-bold transition-all shadow-xs cursor-pointer"
              >
                <span>Show More Government Scholarships ({filteredScholarships.length - visibleCount} remaining)</span>
                <ChevronDown className="w-4 h-4 text-indigo-600" />
              </button>
            </div>
          )}
        </>
      )}
    </motion.div>
    ) : (
          <motion.div
            key={`gov-profile-${selectedScholarship.id}`}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            <GovernmentProfile
              scholarship={selectedScholarship}
              onBack={() => setSelectedScholarship(null)}
            />
          </motion.div>
        )}
      </AnimatePresence>
      </div>
    </div>
  );
};
