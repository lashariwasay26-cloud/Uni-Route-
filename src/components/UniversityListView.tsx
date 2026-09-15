import React, { useState, useMemo, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Search,
  Filter,
  GraduationCap,
  Sparkles,
  CheckCircle2,
  DollarSign,
  Award,
  Globe,
  X,
  BookOpen,
  ArrowRight,
  Bookmark,
  ExternalLink,
  ChevronDown,
  RotateCcw,
  Check,
  Database,
  RefreshCw,
  Copy,
  Info
} from 'lucide-react';
import { UniversityTrackItem } from '../types';
import { UniversityProfile } from './UniversityProfile';
import { isPublicInternationalUniversity } from '../config/previewAccess';
import { getUniversityLogo, getSatSummary } from '../utils/universityUtils';
import {
  fetchUniversityScholarshipsFromSupabase,
  isSupabaseConfigured,
  SUPABASE_SQL_SCHEMA,
  getCachedUniversityScholarships
} from '../lib/supabase';
import {
  getLocalBookmarkedIds,
  fetchSavedUniversityIds,
  toggleUniversityBookmark
} from '../lib/userStorage';
import { SavedUniversitiesModal } from './SavedUniversitiesModal';

import { InteractivePageLoader } from './InteractivePageLoader';

interface UniversityListViewProps {
  onBackToTracks: () => void;
  initialUniversities?: UniversityTrackItem[];
  title?: string;
  description?: string;
  user?: { email: string; id: string } | null;
  onRequestAuth?: (pendingAction?: any, message?: string) => void;
  pendingUniId?: string;
}

export const UniversityListView: React.FC<UniversityListViewProps> = ({ 
  onBackToTracks,
  title = "University Track Directory",
  description = "Explore world-renowned institutions, admission acceptance rates, financial aid policies, and test requirements.",
  user = null,
  onRequestAuth,
  pendingUniId,
}) => {
  // Master universities state (Synchronously read from memory cache or empty fallback filtered by track)
  const [universities, setUniversities] = useState<UniversityTrackItem[]>(() => {
    const trackType = title.toLowerCase().includes('pakistani') ? 'pakistani' : 'international';
    return getCachedUniversityScholarships(trackType) || [];
  });
  const [isSyncing, setIsSyncing] = useState<boolean>(false);
  const [isSupabaseLive, setIsSupabaseLive] = useState<boolean>(() => {
    const trackType = title.toLowerCase().includes('pakistani') ? 'pakistani' : 'international';
    const cached = getCachedUniversityScholarships(trackType);
    return Boolean(cached && cached.length > 0);
  });
  const [showSqlModal, setShowSqlModal] = useState<boolean>(false);
  const [copiedSql, setCopiedSql] = useState<boolean>(false);

  // State for search and filters
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedAidType, setSelectedAidType] = useState<string>('all');
  const [fullRideOnly, setFullRideOnly] = useState<boolean>(false);
  const [selectedSat, setSelectedSat] = useState<string>('all');
  const [selectedIelts, setSelectedIelts] = useState<string>('all');
  const [selectedTuition, setSelectedTuition] = useState<string>('all');
  const [selectedDegree, setSelectedDegree] = useState<string>('all');
  const [visibleCount, setVisibleCount] = useState<number>(12);
  const [showSavedModal, setShowSavedModal] = useState<boolean>(false);
  
  // Bookmarking state initialized from local cache
  const [bookmarkedIds, setBookmarkedIds] = useState<Set<string>>(() => getLocalBookmarkedIds());

  useEffect(() => {
    // Load persisted bookmarks from Supabase when available
    fetchSavedUniversityIds().then((ids) => {
      setBookmarkedIds(new Set(ids));
    });

    const handleBookmarksUpdate = (e: any) => {
      if (e.detail?.bookmarkedIds) {
        setBookmarkedIds(new Set(e.detail.bookmarkedIds));
      }
    };

    const handleAuthChange = () => {
      fetchSavedUniversityIds().then((ids) => {
        setBookmarkedIds(new Set(ids));
      });
    };

    window.addEventListener('uniroute-bookmarks-updated', handleBookmarksUpdate);
    window.addEventListener('uniroute-auth-change', handleAuthChange);

    return () => {
      window.removeEventListener('uniroute-bookmarks-updated', handleBookmarksUpdate);
      window.removeEventListener('uniroute-auth-change', handleAuthChange);
    };
  }, []);

  // Active University Profile State
  const [activeModalUni, setActiveModalUni] = useState<UniversityTrackItem | null>(null);

  // Scroll Position Preservation Refs
  const scrollPosRef = useRef<number>(0);
  const lastSelectedUniIdRef = useRef<string | null>(null);

  const handleSelectUniversity = (uni: UniversityTrackItem) => {
    if (!user && !isPublicInternationalUniversity(uni.id)) {
      if (onRequestAuth) {
        onRequestAuth(
          { view: 'scholarship', uniId: uni.id },
          `Accessing ${uni.universityName} requires a free Uni Route account. Sign in or create an account to unlock all global and Pakistani university profiles.`
        );
      }
      return;
    }

    scrollPosRef.current = window.scrollY || document.documentElement.scrollTop || 0;
    lastSelectedUniIdRef.current = uni.id;
    setActiveModalUni(uni);
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  };

  // Handle auto-opening uni profile after successful auth
  useEffect(() => {
    if (pendingUniId && !activeModalUni) {
      const targetUni = universities.find((u) => u.id === pendingUniId);
      if (targetUni) {
        setActiveModalUni(targetUni);
      }
    }
  }, [pendingUniId, universities]);

  // Scroll to top when UniversityListView mounts
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  // Restore scroll position or scroll to the university card when returning from profile view
  useEffect(() => {
    if (!activeModalUni && lastSelectedUniIdRef.current) {
      const targetId = lastSelectedUniIdRef.current;
      const targetPos = scrollPosRef.current;

      const restoreUniScroll = () => {
        const cardEl = document.getElementById(`uni-card-${targetId}`);
        if (cardEl) {
          cardEl.scrollIntoView({ block: 'center', behavior: 'instant' });
        } else {
          window.scrollTo({ top: targetPos, left: 0, behavior: 'instant' });
        }
      };

      restoreUniScroll();
      const timer = setTimeout(restoreUniScroll, 30);
      return () => clearTimeout(timer);
    }
  }, [activeModalUni]);

  // Fetch real-time / dynamic data from Supabase on mount
  useEffect(() => {
    let isMounted = true;
    let timerId: any = null;

    async function loadSupabaseData() {
      const trackType = title.toLowerCase().includes('pakistani') ? 'pakistani' : 'international';
      const cached = getCachedUniversityScholarships(trackType);

      if (cached && cached.length > 0) {
        setUniversities(cached);
        setIsSupabaseLive(true);
        setIsSyncing(false);
        return;
      }

      setIsSyncing(true);

      // Strict 7-second max loading screen limit timer to ensure it NEVER hangs indefinitely
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

      const { data, error } = await fetchUniversityScholarshipsFromSupabase(trackType);
      if (isMounted) {
        if (timerId) clearTimeout(timerId);
        setIsSyncing(false);
        if (!error && data && data.length > 0) {
          setUniversities(data);
          setIsSupabaseLive(true);
        } else {
          setIsSupabaseLive(false);
        }
      }
    }

    loadSupabaseData();
    return () => {
      isMounted = false;
      if (timerId) clearTimeout(timerId);
    };
  }, [title]);

  const handleManualSync = async () => {
    if (!isSupabaseConfigured()) {
      setShowSqlModal(true);
      return;
    }
    setIsSyncing(true);
    const trackType = title.toLowerCase().includes('pakistani') ? 'pakistani' : 'international';
    const { data, error } = await fetchUniversityScholarshipsFromSupabase(trackType);
    setIsSyncing(false);
    if (!error && data && data.length > 0) {
      setUniversities(data);
      setIsSupabaseLive(true);
    }
  };

  const copySqlToClipboard = () => {
    navigator.clipboard.writeText(SUPABASE_SQL_SCHEMA);
    setCopiedSql(true);
    setTimeout(() => setCopiedSql(false), 2000);
  };

  // Toggle bookmark with Supabase and local persistence
  const toggleBookmark = (uni: UniversityTrackItem, e: React.MouseEvent) => {
    e.stopPropagation();

    if (!user) {
      if (onRequestAuth) {
        onRequestAuth(
          { view: 'scholarship', uniId: uni.id },
          'Saving universities to your profile requires a free account.'
        );
      }
      return;
    }

    // Optimistic local state update
    setBookmarkedIds((prev) => {
      const next = new Set(prev);
      if (next.has(uni.id)) {
        next.delete(uni.id);
      } else {
        next.add(uni.id);
      }
      return next;
    });

    toggleUniversityBookmark(uni.id, uni.universityName, uni.country)
      .then(({ allIds }) => {
        setBookmarkedIds(new Set(allIds));
      })
      .catch(() => {});
  };

  // Reset filters
  const resetAllFilters = () => {
    setSearchQuery('');
    setSelectedAidType('all');
    setFullRideOnly(false);
    setSelectedSat('all');
    setSelectedIelts('all');
    setSelectedTuition('all');
    setSelectedDegree('all');
  };

  const isAnyFilterActive =
    searchQuery.trim() !== '' ||
    selectedAidType !== 'all' ||
    fullRideOnly ||
    selectedSat !== 'all' ||
    selectedIelts !== 'all' ||
    selectedTuition !== 'all' ||
    selectedDegree !== 'all';

  // Filter logic
  const filteredUniversities = useMemo(() => {
    return universities.filter((uni) => {
      // 1. Search Query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = uni.universityName?.toLowerCase().includes(q) ?? false;
        const matchesCountry = uni.country?.toLowerCase().includes(q) ?? false;
        const matchesLocation = uni.location?.toLowerCase().includes(q) ?? false;
        const matchesTitle = uni.scholarshipTitle?.toLowerCase().includes(q) ?? false;
        const matchesTags = uni.tags?.some((t) => t?.toLowerCase().includes(q)) ?? false;

        if (!matchesName && !matchesCountry && !matchesLocation && !matchesTitle && !matchesTags) {
          return false;
        }
      }

      // 2. Full Ride Filter
      if (fullRideOnly && !uni.hasFullRide) {
        return false;
      }

      // 3. Aid Type Filter
      if (selectedAidType !== 'all') {
        if (selectedAidType === 'need-blind' && uni.financialAidType !== 'Need-Blind') return false;
        if (selectedAidType === 'merit' && uni.financialAidType !== 'Merit-Based' && uni.financialAidType !== 'Partial Merit') return false;
        if (selectedAidType === 'tuition-waiver' && uni.financialAidType !== 'Tuition Waiver') return false;
      }

      // 4. SAT Filter
      if (selectedSat !== 'all') {
        if (selectedSat === 'optional' && uni.satRequirementCategory !== 'Optional') return false;
        if (selectedSat === '1300' && (uni.satRequirementCategory === 'Optional')) return false;
        if (selectedSat === '1400' && (uni.satRequirementCategory === '1500' || uni.satRequirementCategory === '1400')) {
          // keep
        } else if (selectedSat === '1400') {
          return false;
        }
        if (selectedSat === '1500' && uni.satRequirementCategory !== '1500') return false;
      }

      // 5. IELTS Filter
      if (selectedIelts !== 'all') {
        if (selectedIelts === '6.5' && (uni.ieltsCategory === '7.0' || uni.ieltsCategory === '7.5')) return false;
        if (selectedIelts === '7.0' && uni.ieltsCategory === '7.5') return false;
        if (selectedIelts === '7.5' && uni.ieltsCategory !== '7.5') return false;
      }

      // 6. Tuition Fee Filter
      if (selectedTuition !== 'all') {
        if (selectedTuition === 'low' && uni.tuitionAmountNumeric > 5000) return false;
        if (selectedTuition === 'mid' && uni.tuitionAmountNumeric > 35000) return false;
        if (selectedTuition === 'high' && uni.tuitionAmountNumeric <= 35000) return false;
      }

      // 7. Degree Level Filter
      if (selectedDegree !== 'all') {
        const degrees = uni.degreesOffered || [];
        if (selectedDegree === 'undergraduate' && !degrees.includes('Undergraduate')) return false;
        if (selectedDegree === 'graduate' && !degrees.includes('Graduate') && !degrees.includes('Masters')) return false;
        if (selectedDegree === 'phd' && !degrees.includes('PhD')) return false;
      }

      return true;
    });
  }, [universities, searchQuery, selectedAidType, fullRideOnly, selectedSat, selectedIelts, selectedTuition, selectedDegree]);

  // Reset pagination limit on filter change
  useEffect(() => {
    setVisibleCount(12);
  }, [searchQuery, selectedAidType, fullRideOnly, selectedSat, selectedIelts, selectedTuition, selectedDegree]);

  const visibleUniversities = useMemo(() => {
    return filteredUniversities.slice(0, visibleCount);
  }, [filteredUniversities, visibleCount]);

  const savedUniversitiesList = useMemo(() => {
    return universities.filter((u) => bookmarkedIds.has(u.id));
  }, [universities, bookmarkedIds]);

  const handleRemoveSavedUniversity = (uniId: string) => {
    setBookmarkedIds((prev) => {
      const next = new Set(prev);
      next.delete(uniId);
      return next;
    });
    toggleUniversityBookmark(uniId).catch(() => {});
  };

  const isPakistani = title.toLowerCase().includes('pakistani');
  const showLoaderOverlay = isSyncing && (universities.length === 0);

  return (
    <div className="relative overflow-x-hidden w-full min-h-[500px]">
      <AnimatePresence>
        {showLoaderOverlay && (
          <motion.div
            key="university-loader-overlay"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="absolute inset-0 z-30 bg-slate-50 flex flex-col items-center justify-center min-h-[500px] rounded-2xl"
          >
            <InteractivePageLoader
              title={isPakistani ? "Loading Pakistani Universities Directory" : "Loading International University Scholarships"}
              subtitle={isPakistani ? "Fetching local higher education institutions, HEC/Ehsaas programs, and local grants..." : "Searching global university financial aid database and eligibility matrices..."}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div className={showLoaderOverlay ? "opacity-0 pointer-events-none" : "opacity-100 transition-opacity duration-200"}>
        <AnimatePresence initial={false}>
          {!activeModalUni ? (
            <motion.div
              key="uni-list"
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
              {title.includes("Pakistani") ? '← Back to Homepage' : '← Back to Track Options'}
            </button>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-950 tracking-tight flex items-center gap-3">
            <span>{title}</span>
          </h1>
          <p className="text-slate-600 text-xs sm:text-sm mt-1">
            {description}
          </p>
        </div>

        <div className="flex items-center gap-2.5 shrink-0 self-start sm:self-center flex-wrap">
          <button
            onClick={() => setShowSavedModal(true)}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl border text-xs font-bold transition-all cursor-pointer shadow-xs ${
              bookmarkedIds.size > 0
                ? 'bg-amber-50 text-amber-900 border-amber-300 hover:bg-amber-100 hover:border-amber-400'
                : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
            }`}
          >
            <Bookmark className={`w-3.5 h-3.5 ${bookmarkedIds.size > 0 ? 'fill-amber-500 text-amber-500' : 'text-slate-400'}`} />
            <span>Saved Shortlist ({bookmarkedIds.size})</span>
          </button>

          {isAnyFilterActive && (
            <button
              onClick={resetAllFilters}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-rose-50 text-rose-700 border border-rose-200/80 hover:bg-rose-100 text-xs font-bold transition-all cursor-pointer shrink-0"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset All Filters</span>
            </button>
          )}
        </div>
      </div>

      {/* SEARCH AND FILTERS BAR */}
      <div className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200/90 shadow-[0_8px_30px_rgba(0,0,0,0.04)] mb-8 space-y-5">
        
        {/* Search Input Box */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by university name (e.g. Harvard, Oxford, Stanford), country, or program..."
            className="w-full pl-11 pr-10 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 text-sm font-medium placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-slate-200 text-slate-500 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Filter Controls Row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 pt-2 border-t border-slate-100">
          
          {/* Filter 1: Full Ride Toggle */}
          <button
            onClick={() => setFullRideOnly(!fullRideOnly)}
            className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
              fullRideOnly
                ? 'bg-emerald-600 text-white border-emerald-600 shadow-sm'
                : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
            }`}
          >
            <span className="flex items-center gap-1.5 truncate">
              <Award className="w-3.5 h-3.5" />
              Full Ride Only
            </span>
            {fullRideOnly && <Check className="w-3.5 h-3.5 ml-1" />}
          </button>

          {/* Filter 2: Financial Aid Type */}
          <div>
            <select
              value={selectedAidType}
              onChange={(e) => setSelectedAidType(e.target.value)}
              className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer"
            >
              <option value="all">Aid Type: All</option>
              <option value="need-blind">Need-Blind</option>
              <option value="merit">Merit-Based</option>
              <option value="tuition-waiver">Tuition Waiver</option>
            </select>
          </div>

          {/* Filter 3: SAT Score Requirement */}
          <div>
            <select
              value={selectedSat}
              onChange={(e) => setSelectedSat(e.target.value)}
              className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer"
            >
              <option value="all">SAT: All Requirements</option>
              <option value="optional">Test Optional</option>
              <option value="1400">SAT 1400+</option>
              <option value="1500">SAT 1500+</option>
            </select>
          </div>

          {/* Filter 4: IELTS Score */}
          <div>
            <select
              value={selectedIelts}
              onChange={(e) => setSelectedIelts(e.target.value)}
              className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer"
            >
              <option value="all">IELTS: All Scores</option>
              <option value="6.5">IELTS 6.5 Max</option>
              <option value="7.0">IELTS 7.0 Max</option>
              <option value="7.5">IELTS 7.5 Required</option>
            </select>
          </div>

          {/* Filter 5: Tuition Fee */}
          <div>
            <select
              value={selectedTuition}
              onChange={(e) => setSelectedTuition(e.target.value)}
              className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer"
            >
              <option value="all">Tuition: All Fees</option>
              <option value="low">Low Fee / Free (&lt; $5k/yr)</option>
              <option value="mid">Mid Tuition (&lt; $35k/yr)</option>
              <option value="high">High Tuition ($35k+/yr)</option>
            </select>
          </div>

          {/* Filter 6: Degree Level */}
          <div>
            <select
              value={selectedDegree}
              onChange={(e) => setSelectedDegree(e.target.value)}
              className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer"
            >
              <option value="all">Degree: All Levels</option>
              <option value="undergraduate">Undergraduate</option>
              <option value="graduate">Graduate / Masters</option>
              <option value="phd">PhD / Doctorate</option>
            </select>
          </div>

        </div>
      </div>

      {/* UNIVERSITIES LIST GRID */}
      {filteredUniversities.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-3xl border border-slate-200/80 p-8">
          <GraduationCap className="w-12 h-12 text-slate-300 mx-auto mb-3" />
          <h3 className="text-lg font-bold text-slate-900">No Universities Found</h3>
          <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
            Try resetting or loosening your search filters to view available university tracks.
          </p>
          <button
            onClick={resetAllFilters}
            className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-xl text-xs font-bold hover:bg-indigo-700 transition-colors cursor-pointer"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {visibleUniversities.map((uni) => {
              const isBookmarked = bookmarkedIds.has(uni.id);
              const logoInfo = getUniversityLogo(uni);

              return (
                <div
                  key={uni.id}
                  id={`uni-card-${uni.id}`}
                  onClick={() => handleSelectUniversity(uni)}
                  className="bg-white rounded-[28px] p-6 sm:p-7 border border-slate-200/90 shadow-2xs hover:shadow-xl transition-all duration-200 hover:-translate-y-1 flex flex-col justify-between relative group cursor-pointer"
                >
                  {/* Top Row: Logo, Name & Location */}
                  <div>
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div className="flex items-center gap-3.5">
                        {/* Logo Badge */}
                        <div
                          className="w-14 h-14 rounded-2xl flex items-center justify-center font-black shadow-sm shrink-0 text-white select-none overflow-hidden"
                          style={logoInfo.logoStyle}
                        >
                          <span className={`${logoInfo.logoText.length > 4 ? 'text-[11px] tracking-normal' : logoInfo.logoText.length === 4 ? 'text-xs tracking-tight' : 'text-sm sm:text-base tracking-wider'} font-black leading-none text-white drop-shadow-xs`}>
                            {logoInfo.logoText || 'UNI'}
                          </span>
                        </div>

                        <div>
                          <div className="flex items-center gap-2">
                            <h2 className="text-lg sm:text-xl font-extrabold text-slate-950 tracking-tight leading-snug">
                              {uni.universityName}
                            </h2>
                            <span className="text-base" title={uni.country}>
                              {uni.flag}
                            </span>
                          </div>
                          <p className="text-xs font-medium text-slate-500 mt-0.5 flex items-center gap-1.5 flex-wrap">
                            <Globe className="w-3.5 h-3.5 text-slate-400" />
                            <span>{uni.location}</span>
                            {uni.foundingYear && (
                              <span className="text-[11px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md">
                                Estd. {uni.foundingYear}
                              </span>
                            )}
                          </p>
                        </div>
                      </div>

                      {/* Bookmark Button */}
                      <button
                        onClick={(e) => toggleBookmark(uni, e)}
                        className={`p-2 rounded-xl border transition-all cursor-pointer ${
                          isBookmarked
                            ? 'bg-amber-50 border-amber-300 text-amber-600'
                            : 'bg-slate-50 border-slate-200 text-slate-400 hover:text-slate-700 hover:bg-slate-100'
                        }`}
                        title={isBookmarked ? 'Remove Bookmark' : 'Bookmark University'}
                      >
                        <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-amber-500' : ''}`} />
                      </button>
                    </div>

                    {/* Primary Key Metrics Row */}
                    <div className="grid grid-cols-2 gap-2 my-4 p-3 rounded-2xl bg-slate-50 border border-slate-100 text-xs">
                      <div>
                        <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 block">
                          Acceptance Rate
                        </span>
                        <span className="font-extrabold text-slate-900 text-sm">
                          {uni.acceptanceRate}
                        </span>
                      </div>

                      <div>
                        <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 block">
                          Annual Tuition Fee
                        </span>
                        <span className="font-extrabold text-slate-900 text-sm">
                          {uni.tuitionFee}
                        </span>
                      </div>
                    </div>

                    {/* High Visibility Badges Row */}
                    <div className="flex flex-wrap items-center gap-1.5 mb-4">
                      {/* Full Ride Badge */}
                      {uni.hasFullRide ? (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 font-extrabold text-[11px] border border-emerald-200">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                          Full Ride Available
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-50 text-amber-800 font-bold text-[11px] border border-amber-200">
                          Partial Aid / Waiver
                        </span>
                      )}

                      {/* Financial Aid Type */}
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-indigo-50 text-indigo-700 font-bold text-[11px] border border-indigo-100">
                        <Sparkles className="w-3 h-3 text-indigo-500" />
                        {uni.financialAidType}
                      </span>

                      {/* Degrees Tags */}
                      {(uni.degreesOffered || []).map((deg) => (
                        <span
                          key={deg}
                          className="px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 font-semibold text-[11px]"
                        >
                          {deg}
                        </span>
                      ))}
                    </div>

                    {/* Requirements Quick Summary */}
                    <div className="text-xs text-slate-600 space-y-1 mb-4">
                      <div className="py-1 border-b border-slate-100">
                        <div className="flex items-center justify-between">
                          <span className="text-slate-400">SAT Requirement:</span>
                          <span className="font-black text-black">
                            {(() => {
                              const satSummary = getSatSummary(uni);
                              return satSummary.headline;
                            })()}
                          </span>
                        </div>
                        {(() => {
                          const satSummary = getSatSummary(uni);
                          if (satSummary.details && satSummary.details !== satSummary.headline) {
                            return (
                              <p className="text-[11px] text-slate-500 mt-1 leading-snug font-normal line-clamp-2">
                                {satSummary.details}
                              </p>
                            );
                          }
                          return null;
                        })()}
                      </div>
                      <div className="flex items-center justify-between py-1 border-b border-slate-100">
                        <span className="text-slate-400">IELTS Requirement:</span>
                        <span className="font-bold text-slate-800">{uni.minIelts}</span>
                      </div>
                      <div className="flex items-center justify-between py-1">
                        <span className="text-slate-400">Min Academic GPA:</span>
                        <span className="font-bold text-slate-800">{uni.minGpa}</span>
                      </div>
                    </div>

                    {/* Scholarship Description Snippet */}
                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-2 mb-5">
                      {uni.description}
                    </p>
                  </div>

                  {/* Card Action Footer */}
                  <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                    <span className="text-[11px] font-bold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-lg">
                      Deadline: {(uni.deadline || 'Varies').split('/')[0]}
                    </span>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleSelectUniversity(uni);
                      }}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-950 text-white group-hover:bg-slate-800 text-xs font-bold transition-all cursor-pointer shadow-sm"
                    >
                      <span>View University Details</span>
                      <ArrowRight className="w-3.5 h-3.5 shrink-0" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {filteredUniversities.length > visibleCount && (
            <div className="text-center pt-8">
              <button
                onClick={() => setVisibleCount((prev) => prev + 16)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-white border border-slate-200/90 hover:border-indigo-600 hover:bg-indigo-50/40 text-slate-800 hover:text-indigo-700 text-xs font-bold transition-all shadow-xs cursor-pointer"
              >
                <span>Show More Universities ({filteredUniversities.length - visibleCount} remaining)</span>
                <ChevronDown className="w-4 h-4 text-indigo-600" />
              </button>
            </div>
          )}
        </>
      )}
    </motion.div>
    ) : (
          <motion.div
            key={`uni-profile-${activeModalUni.id}`}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            <UniversityProfile
              university={activeModalUni!}
              onBack={() => setActiveModalUni(null)}
            />
          </motion.div>
        )}
      </AnimatePresence>
      </div>

      {/* Saved Universities Shortlist Modal */}
      <SavedUniversitiesModal
        isOpen={showSavedModal}
        onClose={() => setShowSavedModal(false)}
        savedUniversities={savedUniversitiesList}
        onRemoveBookmark={handleRemoveSavedUniversity}
        onSelectUniversity={(uni) => {
          handleSelectUniversity(uni);
        }}
      />
    </div>
  );
};
