import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Sparkles,
  Target,
  Award,
  Compass,
  MessageSquare,
  Send,
  CheckCircle2,
  AlertCircle,
  RefreshCw,
  UserCheck,
  ShieldCheck,
  ChevronRight,
  BookOpen,
  GraduationCap,
  DollarSign,
  Globe,
  ExternalLink,
  ArrowRight,
  ArrowLeft,
  Calendar,
  Database,
  Layers,
  HelpCircle,
  Check,
  Search,
  TrendingUp,
  AlertTriangle,
  Zap,
  Sliders,
  Scale,
  BrainCircuit,
  FileCheck,
  Plus,
  Trash2,
  Briefcase,
  Medal
} from 'lucide-react';
import { ProfileAnalysisInput, ProfileAnalysisResult, UniversityMatchEvaluation, ChatMessage, ActivityItem, HonorItem } from '../../types';
import { ChatMarkdownRenderer } from '../ChatMarkdownRenderer';
import { saveProfileAnalysis, getLatestProfileAnalysis } from '../../lib/userStorage';

interface AiAnalysisHubProps {
  onBackToHome?: () => void;
  onSelectUniversity?: (uniName: string) => void;
}

const DEFAULT_ACTIVITIES: ActivityItem[] = [
  {
    id: 'act-1',
    role: 'Team Captain & Gold Medalist',
    organization: 'National Informatics Olympiad Team',
    activityType: 'Computer Science / Coding',
    description: 'Trained 16 hrs/wk on competitive programming, dynamic programming, and graph algorithms. Placed #1 nationally out of 4,200 applicants.',
    timeCommitment: '16 hrs/wk, 40 wks/yr',
    gradeLevels: '10, 11, 12',
  },
  {
    id: 'act-2',
    role: 'Lead Researcher & First Author',
    organization: 'Youth AI & Speech NLP Research Lab',
    activityType: 'Academic Research',
    description: 'Engineered lightweight transformer models for low-resource languages; published peer-reviewed paper in regional youth IEEE symposium.',
    timeCommitment: '10 hrs/wk, 30 wks/yr',
    gradeLevels: '11, 12',
  },
  {
    id: 'act-3',
    role: 'Founder & Primary Developer',
    organization: 'OpenVoice Accessibility Suite',
    activityType: 'Community Service / Tech',
    description: 'Designed free cross-platform mobile screen reader for visually impaired students; scaled to 14,000+ active users across 9 developing countries.',
    timeCommitment: '8 hrs/wk, 35 wks/yr',
    gradeLevels: '11, 12',
  },
  {
    id: 'act-4',
    role: 'President & Founder',
    organization: 'High School Computer Science Society',
    activityType: 'School Club / Leadership',
    description: 'Hosted annual regional hackathon with $3,500 corporate sponsorship. Mentored 120+ younger students in Python and algorithm basics.',
    timeCommitment: '6 hrs/wk, 32 wks/yr',
    gradeLevels: '10, 11, 12',
  },
];

const DEFAULT_HONORS: HonorItem[] = [
  {
    id: 'hon-1',
    title: 'National Informatics Olympiad Gold Medal',
    level: 'National',
    gradeLevel: '12',
    description: 'Rank 1 nationwide among 4,200 students in algorithmic problem solving.',
  },
  {
    id: 'hon-2',
    title: 'Cambridge CAIE High Achievement Award in A-Level Mathematics',
    level: 'National',
    gradeLevel: '11',
    description: 'Highest examination mark in the country across Cambridge International sessions.',
  },
  {
    id: 'hon-3',
    title: 'American Mathematics Competition (AMC 12) Honor Roll of Distinction',
    level: 'International',
    gradeLevel: '11',
    description: 'Top 1% internationally; qualified for American Invitational Mathematics Exam (AIME).',
  },
];

export const AiAnalysisHub: React.FC<AiAnalysisHubProps> = ({ onBackToHome, onSelectUniversity }) => {
  const [activeTab, setActiveTab] = useState<'evaluator' | 'counselor'>('evaluator');

  // Multi-step form tabs inside evaluator
  const [formStep, setFormStep] = useState<1 | 2 | 3 | 4>(1);

  // Form State
  const [formData, setFormData] = useState<ProfileAnalysisInput>({
    fullName: 'Ayaan K.',
    academicLevel: 'High School Senior',
    curriculum: 'Cambridge A-Levels',
    curriculumDetails: 'Predicted 4 A*s (Math, Further Math, Physics, Chemistry)',
    gpa: '3.95',
    gpaScale: '4.0',
    classRankPercentile: 'Top 2% (4/220)',
    satScore: '1520',
    satBreakdown: { ebrw: '740', math: '780' },
    actScore: '',
    testOptional: false,
    englishTestType: 'IELTS',
    englishTestScore: '8.0 Overall',
    intendedMajor: 'Computer Science & Artificial Intelligence',
    preferredCountries: ['United States', 'Canada', 'United Kingdom'],
    financialNeed: 'High',
    efcAnnualUsd: '$0 (Full Ride Required)',
    spikeArea: 'Competitive Algorithmic Programming & Published ML Research',
    activitiesList: DEFAULT_ACTIVITIES,
    honorsList: DEFAULT_HONORS,
    extracurriculars: '',
    honorsAndAwards: '',
    specificConcerns: 'Require 100% full-ride funding. How does asking for full aid hurt my chances at Ivy League vs. Need-Blind schools like Harvard, MIT, Amherst, and Bowdoin?',
  });

  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<ProfileAnalysisResult | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  React.useEffect(() => {
    getLatestProfileAnalysis().then((saved) => {
      if (saved && saved.analysisResult) {
        setAnalysisResult(saved.analysisResult);
        if (saved.profileInput) {
          setFormData((prev) => ({ ...prev, ...saved.profileInput }));
        }
      }
    });

    const handleAuthChange = () => {
      getLatestProfileAnalysis().then((saved) => {
        if (saved && saved.analysisResult) {
          setAnalysisResult(saved.analysisResult);
          if (saved.profileInput) {
            setFormData((prev) => ({ ...prev, ...saved.profileInput }));
          }
        }
      });
    };

    window.addEventListener('uniroute-auth-change', handleAuthChange);
    return () => {
      window.removeEventListener('uniroute-auth-change', handleAuthChange);
    };
  }, []);

  // Activity management handlers
  const handleAddActivity = () => {
    const newAct: ActivityItem = {
      id: `act-${Date.now()}`,
      role: '',
      organization: '',
      activityType: 'Computer Science / Tech',
      description: '',
      timeCommitment: '8 hrs/wk, 30 wks/yr',
      gradeLevels: '11, 12',
    };
    setFormData((prev) => ({
      ...prev,
      activitiesList: [...(prev.activitiesList || []), newAct],
    }));
  };

  const handleRemoveActivity = (id: string) => {
    setFormData((prev) => ({
      ...prev,
      activitiesList: (prev.activitiesList || []).filter((a) => a.id !== id),
    }));
  };

  const handleUpdateActivity = (id: string, field: keyof ActivityItem, value: string) => {
    setFormData((prev) => ({
      ...prev,
      activitiesList: (prev.activitiesList || []).map((a) =>
        a.id === id ? { ...a, [field]: value } : a
      ),
    }));
  };

  // Honor management handlers
  const handleAddHonor = () => {
    const newHon: HonorItem = {
      id: `hon-${Date.now()}`,
      title: '',
      level: 'State / Regional',
      gradeLevel: '11',
      description: '',
    };
    setFormData((prev) => ({
      ...prev,
      honorsList: [...(prev.honorsList || []), newHon],
    }));
  };

  const handleRemoveHonor = (id: string) => {
    setFormData((prev) => ({
      ...prev,
      honorsList: (prev.honorsList || []).filter((h) => h.id !== id),
    }));
  };

  const handleUpdateHonor = (id: string, field: keyof HonorItem, value: any) => {
    setFormData((prev) => ({
      ...prev,
      honorsList: (prev.honorsList || []).map((h) =>
        h.id === id ? { ...h, [field]: value } : h
      ),
    }));
  };

  // Quick Preset Profiles with authentic multiple activities and honors
  const applyPreset = (presetType: 'stem-high-need' | 'pre-med' | 'econ-all-round') => {
    if (presetType === 'stem-high-need') {
      setFormData({
        fullName: 'Ayaan K.',
        academicLevel: 'High School Senior',
        curriculum: 'Cambridge A-Levels',
        curriculumDetails: 'Predicted 4 A*s (Math, Further Math, Physics, Chemistry)',
        gpa: '3.95',
        gpaScale: '4.0',
        classRankPercentile: 'Top 2% (4/220)',
        satScore: '1520',
        satBreakdown: { ebrw: '740', math: '780' },
        actScore: '',
        testOptional: false,
        englishTestType: 'IELTS',
        englishTestScore: '8.0 Overall',
        intendedMajor: 'Computer Science & Artificial Intelligence',
        preferredCountries: ['United States', 'Canada', 'United Kingdom'],
        financialNeed: 'High',
        efcAnnualUsd: '$0 (Full Ride Required)',
        spikeArea: 'Competitive Algorithmic Programming & Published ML Research',
        activitiesList: DEFAULT_ACTIVITIES,
        honorsList: DEFAULT_HONORS,
        extracurriculars: '',
        honorsAndAwards: '',
        specificConcerns: 'Require 100% full-ride funding. How does asking for full aid hurt my chances at Ivy League vs. Need-Blind schools like Harvard, MIT, Amherst, and Bowdoin?',
      });
    } else if (presetType === 'pre-med') {
      setFormData({
        fullName: 'Sofia M.',
        academicLevel: 'High School Senior',
        curriculum: 'IB Diploma',
        curriculumDetails: 'IB Predicted 42/45 (HL Bio 7, HL Chem 7, HL Math AA 6, SL Econ 7)',
        gpa: '3.90',
        gpaScale: '4.0',
        classRankPercentile: 'Top 5%',
        satScore: '1490',
        satBreakdown: { ebrw: '730', math: '760' },
        actScore: '',
        testOptional: false,
        englishTestType: 'TOEFL',
        englishTestScore: '112 / 120',
        intendedMajor: 'Biomedical Science / Pre-Med Track',
        preferredCountries: ['United States', 'United Kingdom', 'Germany / Europe'],
        financialNeed: 'Moderate',
        efcAnnualUsd: '$15,000 / year',
        spikeArea: 'Clinical Oncology Shadowing & Genetic Epidemiology',
        activitiesList: [
          {
            id: 'med-1',
            role: 'Head Student Volunteer',
            organization: 'Regional Emergency Medical Center',
            activityType: 'Community Service / Healthcare',
            description: 'Logged 240+ hours assisting triage nurses, translating patient intake forms, and sanitizing diagnostic equipment in intensive pediatric care.',
            timeCommitment: '8 hrs/wk, 45 wks/yr',
            gradeLevels: '10, 11, 12',
          },
          {
            id: 'med-2',
            role: 'Research Intern',
            organization: 'Genomics & Molecular Biology Institute',
            activityType: 'Academic Research',
            description: 'Assisted senior postdoctoral lab on PCR amplification and CRISPR-Cas9 cell culture assays; co-authored poster for provincial science conclave.',
            timeCommitment: '12 hrs/wk, 16 wks/yr',
            gradeLevels: '11, 12',
          },
          {
            id: 'med-3',
            role: 'Founder & Director',
            organization: 'Youth Health Literacy Initiative',
            activityType: 'Community Service',
            description: 'Organized preventative maternal health seminars reaching 1,800+ rural women; distributed subsidized prenatal vitamin kits with local NGO.',
            timeCommitment: '6 hrs/wk, 30 wks/yr',
            gradeLevels: '11, 12',
          },
          {
            id: 'med-4',
            role: 'Varsity Swim Captain',
            organization: 'Regional Athletics Federation',
            activityType: 'Athletics',
            description: 'Led 18-member swim team to provincial championship title; trained 10 hrs/week; broke school record in 200m individual medley.',
            timeCommitment: '10 hrs/wk, 35 wks/yr',
            gradeLevels: '9, 10, 11, 12',
          },
        ],
        honorsList: [
          {
            id: 'med-h1',
            title: 'State Science Fair 1st Place - Cellular & Molecular Biology',
            level: 'State / Regional',
            gradeLevel: '11',
            description: 'Gold award among 380 high school research entries evaluating antioxidant properties.',
          },
          {
            id: 'med-h2',
            title: 'National Biology Olympiad Semi-Finalist',
            level: 'National',
            gradeLevel: '12',
            description: 'Top 5% nationwide in theoretical biochemistry and physiology examination.',
          },
        ],
        extracurriculars: '',
        honorsAndAwards: '',
        specificConcerns: 'Can I get merit scholarships at top UK or US universities with $15k/year budget? What are my chances for Duke Robertson or Lester B. Pearson?',
      });
    } else {
      setFormData({
        fullName: 'Zain R.',
        academicLevel: 'High School Senior',
        curriculum: 'National Board (FSc/CBSE)',
        curriculumDetails: 'Federal Board 96.2% marks in Pre-Engineering / Commerce blend',
        gpa: '3.88',
        gpaScale: '100%',
        classRankPercentile: 'Rank 1 in College',
        satScore: '1440',
        satBreakdown: { ebrw: '690', math: '750' },
        actScore: '',
        testOptional: false,
        englishTestType: 'Duolingo (DET)',
        englishTestScore: '140 / 160',
        intendedMajor: 'Economics & Data Analytics',
        preferredCountries: ['United States', 'Canada', 'Singapore / Asia', 'Pakistan'],
        financialNeed: 'Low',
        efcAnnualUsd: '$35,000 / year',
        spikeArea: 'Youth Microfinance & Economic Research',
        activitiesList: [
          {
            id: 'econ-1',
            role: 'Co-Founder & Field Coordinator',
            organization: 'Rural Artisan Microfinance Project',
            activityType: 'Community Service / Social Enterprise',
            description: 'Disbursed $6,500 in micro-grants to 48 female textile artisans; recorded 98% repayment rate with average household income rising 35%.',
            timeCommitment: '10 hrs/wk, 38 wks/yr',
            gradeLevels: '10, 11, 12',
          },
          {
            id: 'econ-2',
            role: 'President & Head Delegate',
            organization: 'High School Model United Nations (MUN)',
            activityType: 'Speech & Debate / Model UN',
            description: 'Won 5 Best Delegate awards across regional conferences; trained 45 novice delegates in economic policy and international resolution drafting.',
            timeCommitment: '8 hrs/wk, 32 wks/yr',
            gradeLevels: '10, 11, 12',
          },
          {
            id: 'econ-3',
            role: 'Head of Student Council',
            organization: 'Prefectorial Student Body',
            activityType: 'Student Government',
            description: 'Managed $12,000 student events budget, overhauled campus recycling system, and served as chief liaison between 800 students and school board.',
            timeCommitment: '7 hrs/wk, 36 wks/yr',
            gradeLevels: '11, 12',
          },
          {
            id: 'econ-4',
            role: 'Economics Editor',
            organization: 'The Financial Youth Review',
            activityType: 'Journalism / Publications',
            description: 'Authored 6 long-form articles examining emerging market inflation dynamics; managed peer review for 22 student submissions.',
            timeCommitment: '5 hrs/wk, 28 wks/yr',
            gradeLevels: '11, 12',
          },
        ],
        honorsList: [
          {
            id: 'econ-h1',
            title: 'Chief Minister Provincial High Achiever Gold Medal',
            level: 'State / Regional',
            gradeLevel: '11',
            description: 'Awarded for standing 1st across 120,000 secondary board candidates.',
          },
          {
            id: 'econ-h2',
            title: 'Best Delegation Award - Harvard Model UN Regional',
            level: 'International',
            gradeLevel: '12',
            description: 'Represented delegate in Economic and Financial Committee (ECOFIN).',
          },
        ],
        extracurriculars: '',
        honorsAndAwards: '',
        specificConcerns: 'Looking for top economics programs with strong ROI and merit honors programs.',
      });
    }
  };

  // Counselor Chat State
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    {
      id: 'c1',
      sender: 'ai',
      text: 'Hello! I am your **UniRoute Global Admissions Counselor**.\n\nI can analyze international applicant competitiveness, explain how **Need-Blind vs. Need-Aware** policies affect admission chances with financial aid, recommend target SAT/ACT scores, and provide strategic advice on university essays.\n\nFeel free to ask a question or click any prompt below!',
      timestamp: 'Just now',
    },
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isSendingMessage, setIsSendingMessage] = useState(false);

  const handleCountryToggle = (country: string) => {
    setFormData((prev) => {
      const exists = prev.preferredCountries.includes(country);
      if (exists) {
        return { ...prev, preferredCountries: prev.preferredCountries.filter((c) => c !== country) };
      } else {
        return { ...prev, preferredCountries: [...prev.preferredCountries, country] };
      }
    });
  };

  const handleRunAnalysis = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setIsAnalyzing(true);
    setErrorMessage(null);

    try {
      // Build clean text summaries for backwards compatibility alongside structured arrays
      const actsSummary =
        formData.activitiesList && formData.activitiesList.length > 0
          ? formData.activitiesList
              .map(
                (a, i) =>
                  `${i + 1}. [${a.role || 'Member'} at ${a.organization || 'Initiative'}] (${a.activityType || 'Activity'}, ${a.timeCommitment || ''}, Grades: ${a.gradeLevels || 'N/A'}): ${a.description}`
              )
              .join('\n\n')
          : formData.extracurriculars;

      const honorsSummary =
        formData.honorsList && formData.honorsList.length > 0
          ? formData.honorsList
              .map(
                (h, i) =>
                  `${i + 1}. ${h.title} (${h.level} recognition, Grade ${h.gradeLevel || 'N/A'}): ${h.description || ''}`
              )
              .join('\n')
          : formData.honorsAndAwards;

      const payload: ProfileAnalysisInput = {
        ...formData,
        extracurriculars: actsSummary,
        honorsAndAwards: honorsSummary,
      };

      const response = await fetch('/api/analyze-profile', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errJson = await response.json().catch(() => ({}));
        throw new Error(errJson.message || `Server responded with status ${response.status}`);
      }

      const data: ProfileAnalysisResult = await response.json();
      setAnalysisResult(data);
      saveProfileAnalysis(payload, data).catch((e) => console.warn('Supabase profile analysis save warning:', e));
      // Auto-scroll to results
      setTimeout(() => {
        const resultsEl = document.getElementById('ai-profile-results');
        if (resultsEl) {
          resultsEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } catch (err: any) {
      console.error('Error running AI analysis:', err);
      setErrorMessage(
        err.message || 'Unable to connect to the AI diagnostic engine. Please ensure server is running and try again.'
      );
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleSendMessage = async (queryText?: string) => {
    const textToSend = queryText || inputMessage;
    if (!textToSend.trim() || isSendingMessage) return;

    const userMsg: ChatMessage = {
      id: `u-${Date.now()}`,
      sender: 'user',
      text: textToSend.trim(),
      timestamp: 'Just now',
    };

    setChatMessages((prev) => [...prev, userMsg]);
    setInputMessage('');
    setIsSendingMessage(true);

    try {
      const response = await fetch('/api/counselor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: textToSend.trim(),
          history: chatMessages.slice(-6),
        }),
      });

      const data = await response.json();
      const aiReply: ChatMessage = {
        id: `ai-${Date.now()}`,
        sender: 'ai',
        text: data.reply || 'I received your inquiry. How else can I assist with your international admissions roadmap?',
        timestamp: 'Just now',
      };
      setChatMessages((prev) => [...prev, aiReply]);
    } catch (err) {
      const aiReply: ChatMessage = {
        id: `ai-${Date.now()}`,
        sender: 'ai',
        text: 'I am experiencing a momentary network connection issue. Please check your Gemini API key in Secrets or try again shortly.',
        timestamp: 'Just now',
      };
      setChatMessages((prev) => [...prev, aiReply]);
    } finally {
      setIsSendingMessage(false);
    }
  };

  const COUNTRIES_LIST = [
    'United States',
    'United Kingdom',
    'Canada',
    'Germany / Europe',
    'Australia',
    'Singapore / Asia',
    'Pakistan',
  ];

  return (
    <div id="ai-analysis-hub" className="py-4 sm:py-6 space-y-8">
      {/* Top Navigation Row */}
      <div className="flex items-center justify-between">
        <button
          id="btn-back-from-ai"
          onClick={onBackToHome}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-white border border-slate-200/90 shadow-sm text-xs font-bold text-slate-700 hover:text-indigo-600 hover:bg-slate-50 transition-all cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 text-indigo-600" />
          <span>Back to Homepage</span>
        </button>

        <span className="text-xs font-extrabold uppercase tracking-widest text-slate-400">
          AI PROFILE ANALYZER
        </span>
      </div>

      {/* Main Page Title & Hero Header */}
      <div className="text-center max-w-3xl mx-auto py-2 sm:py-4 relative">
        {/* Soft Ambient Background Glow */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] sm:w-[480px] h-[280px] sm:h-[480px] pointer-events-none -z-10 max-w-full"
          style={{
            background: 'radial-gradient(circle, rgba(165, 180, 252, 0.3) 0%, rgba(216, 180, 254, 0.15) 35%, rgba(110, 231, 183, 0.05) 60%, rgba(255, 255, 255, 0) 100%)'
          }}
        />

        {/* Eyebrow Tag */}
        <div className="inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full bg-white border border-slate-200/80 shadow-[0_2px_12px_rgba(0,0,0,0.04)] text-[10px] sm:text-[11px] font-extrabold tracking-[0.2em] text-slate-600 uppercase mb-3">
          <span className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse" />
          AI ADMISSIONS & AID DIAGNOSTIC
        </div>

        {/* Headline */}
        <h1 className="text-2xl sm:text-4xl font-black text-slate-950 tracking-tight leading-tight mb-2">
          AI International Profile Analyzer
        </h1>

        {/* Subtitle */}
        <p className="text-slate-600 text-xs sm:text-base max-w-2xl mx-auto leading-relaxed">
          Evaluate your academic curriculum, test scores, extracurricular spike, and financial need against{' '}
          <span className="text-slate-950 font-bold">Uni Route&apos;s 200+ global university catalog</span> and live admissions search grounding to forecast your Reach, Target, and Safety odds.
        </p>

        {/* Live Grounding & Database Badges */}
        <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-[11px] sm:text-xs font-semibold text-slate-600">
          <span className="px-3 py-1 sm:py-1.5 rounded-full bg-white border border-slate-200/80 shadow-2xs flex items-center gap-1.5">
            <Globe className="w-3.5 h-3.5 text-emerald-600" /> Live Search Grounding
          </span>
          <span className="px-3 py-1 sm:py-1.5 rounded-full bg-white border border-slate-200/80 shadow-2xs flex items-center gap-1.5">
            <Database className="w-3.5 h-3.5 text-indigo-600" /> 200+ Catalog Matches
          </span>
          <span className="px-3 py-1 sm:py-1.5 rounded-full bg-white border border-slate-200/80 shadow-2xs flex items-center gap-1.5">
            <Scale className="w-3.5 h-3.5 text-amber-600" /> Need-Blind vs. Need-Aware Reality
          </span>
        </div>

        {/* Segmented Mode Switcher Tabs */}
        <div className="mt-6 flex flex-wrap items-center justify-center bg-white p-1 rounded-2xl border border-slate-200/90 shadow-xs max-w-md mx-auto">
          <button
            id="tab-evaluator-btn"
            onClick={() => setActiveTab('evaluator')}
            className={`flex-1 min-w-[130px] px-4 py-2 rounded-xl text-xs sm:text-sm font-extrabold transition-all flex items-center justify-center gap-2 cursor-pointer ${
              activeTab === 'evaluator'
                ? 'bg-slate-950 text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-950 hover:bg-slate-50'
            }`}
          >
            <Target className="w-4 h-4" />
            <span>Profile Diagnostic</span>
          </button>
          <button
            id="tab-counselor-btn"
            onClick={() => setActiveTab('counselor')}
            className={`flex-1 min-w-[130px] px-4 py-2 rounded-xl text-xs sm:text-sm font-extrabold transition-all flex items-center justify-center gap-2 cursor-pointer ${
              activeTab === 'counselor'
                ? 'bg-slate-950 text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-950 hover:bg-slate-50'
            }`}
          >
            <MessageSquare className="w-4 h-4" />
            <span>AI Counselor Chat</span>
          </button>
        </div>
      </div>

      {/* CONTENT AREA WITH ANIMATE PRESENCE */}
      <div className="relative overflow-x-hidden w-full">
        <AnimatePresence mode="wait">
          {activeTab === 'evaluator' ? (
            <motion.div
              key="evaluator"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.1 }}
              className="space-y-6"
            >
              {/* Quick Preset Bar */}
          <div className="bg-white rounded-[24px] p-4 sm:p-5 border border-slate-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-xs font-extrabold text-slate-800">
              <Zap className="w-4 h-4 text-amber-500" />
              <span>One-Click Example Profiles:</span>
            </div>
            <div className="flex flex-wrap gap-2 w-full md:w-auto">
              <button
                type="button"
                onClick={() => applyPreset('stem-high-need')}
                className="px-3.5 py-2 rounded-xl bg-indigo-50/80 hover:bg-indigo-100 text-indigo-700 text-xs font-extrabold transition-all border border-indigo-200/70 flex items-center gap-1.5 cursor-pointer"
              >
                <span>🧪 High-Need STEM (SAT 1520, $0 EFC)</span>
              </button>
              <button
                type="button"
                onClick={() => applyPreset('pre-med')}
                className="px-3.5 py-2 rounded-xl bg-emerald-50/80 hover:bg-emerald-100 text-emerald-700 text-xs font-extrabold transition-all border border-emerald-200/70 flex items-center gap-1.5 cursor-pointer"
              >
                <span>🧬 Pre-Med & Lab Research (IB 42/45)</span>
              </button>
              <button
                type="button"
                onClick={() => applyPreset('econ-all-round')}
                className="px-3.5 py-2 rounded-xl bg-amber-50/80 hover:bg-amber-100 text-amber-800 text-xs font-extrabold transition-all border border-amber-200/70 flex items-center gap-1.5 cursor-pointer"
              >
                <span>📈 Economics & Finance (National Board 96%)</span>
              </button>
            </div>
          </div>

          {/* Form Container */}
          <form onSubmit={handleRunAnalysis} className="bg-white rounded-[28px] p-6 sm:p-8 border border-slate-200/90 shadow-[0_8px_30px_rgba(0,0,0,0.04)] space-y-6">
            {/* Step Navigation Pill Indicator */}
            <div className="flex items-center justify-between border-b border-slate-100 pb-4 overflow-x-auto gap-2">
              {[
                { step: 1, label: '1. Academics & Curriculum' },
                { step: 2, label: '2. Standardized Testing' },
                { step: 3, label: '3. Activities & Spike' },
                { step: 4, label: '4. Aid & Destinations' },
              ].map((s) => (
                <button
                  key={s.step}
                  type="button"
                  onClick={() => setFormStep(s.step as any)}
                  className={`px-4 py-2 rounded-xl text-xs font-extrabold whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer ${
                    formStep === s.step
                      ? 'bg-slate-950 text-white shadow-sm'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  <span>{s.label}</span>
                </button>
              ))}
            </div>

            {/* Step 1: Academics & Curriculum */}
            {formStep === 1 && (
              <div className="space-y-4 animate-in fade-in duration-200">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Applicant Name / Identifier
                    </label>
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Ayaan K."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm font-medium text-slate-900 bg-slate-50/50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Academic Level
                    </label>
                    <select
                      value={formData.academicLevel}
                      onChange={(e) => setFormData({ ...formData, academicLevel: e.target.value as any })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm font-medium text-slate-900 bg-slate-50/50"
                    >
                      <option value="High School Senior">High School Senior (Class of 2025/2026)</option>
                      <option value="High School Junior">High School Junior</option>
                      <option value="Undergraduate Student">Transfer / Undergraduate Student</option>
                      <option value="Graduate/Master Applicant">Graduate / Master&apos;s Applicant</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Secondary School Curriculum / Board
                    </label>
                    <select
                      value={formData.curriculum}
                      onChange={(e) => setFormData({ ...formData, curriculum: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm font-medium text-slate-900 bg-slate-50/50"
                    >
                      <option value="Cambridge A-Levels">Cambridge International (A-Levels / O-Levels)</option>
                      <option value="IB Diploma">International Baccalaureate (IB Diploma)</option>
                      <option value="US High School / APs">US High School Diploma / Advanced Placement (AP)</option>
                      <option value="National Board (FSc/CBSE)">National Board (Pakistan FSc / India CBSE / ICSE)</option>
                      <option value="European Baccalaureate">European Baccalaureate / Abitur / French Bac</option>
                      <option value="Other">Other National Curriculum</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Curriculum Marks / Subject Rigor
                    </label>
                    <input
                      type="text"
                      value={formData.curriculumDetails}
                      onChange={(e) => setFormData({ ...formData, curriculumDetails: e.target.value })}
                      placeholder="e.g. Predicted 4 A*s (Math, Phys, Chem) or IB 41/45"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm font-medium text-slate-900 bg-slate-50/50"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Cumulative GPA or %
                    </label>
                    <input
                      type="text"
                      value={formData.gpa}
                      onChange={(e) => setFormData({ ...formData, gpa: e.target.value })}
                      placeholder="e.g. 3.92 or 94.5%"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm font-medium text-slate-900 bg-slate-50/50"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      GPA Scale
                    </label>
                    <select
                      value={formData.gpaScale}
                      onChange={(e) => setFormData({ ...formData, gpaScale: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm font-medium text-slate-900 bg-slate-50/50"
                    >
                      <option value="4.0">4.0 Scale (Unweighted)</option>
                      <option value="5.0">5.0 Scale (Weighted)</option>
                      <option value="100%">100% Percentage Scale</option>
                      <option value="10.0">10.0 Scale (e.g. India)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Class Rank / Decile
                    </label>
                    <input
                      type="text"
                      value={formData.classRankPercentile || ''}
                      onChange={(e) => setFormData({ ...formData, classRankPercentile: e.target.value })}
                      placeholder="e.g. Top 2% (4/220) or Unranked"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm font-medium text-slate-900 bg-slate-50/50"
                    />
                  </div>
                </div>

                <div className="flex justify-end pt-2">
                  <button
                    type="button"
                    onClick={() => setFormStep(2)}
                    className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold flex items-center gap-2 transition-all shadow-sm"
                  >
                    <span>Next: Standardized Testing</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Standardized Testing */}
            {formStep === 2 && (
              <div className="space-y-4 animate-in fade-in duration-200">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Digital SAT Total (400–1600)
                    </label>
                    <input
                      type="text"
                      value={formData.satScore}
                      onChange={(e) => setFormData({ ...formData, satScore: e.target.value })}
                      placeholder="e.g. 1520 or leave blank if test-optional"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm font-medium text-slate-900 bg-slate-50/50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      SAT EBRW (Reading & Writing)
                    </label>
                    <input
                      type="text"
                      value={formData.satBreakdown?.ebrw || ''}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          satBreakdown: { ...formData.satBreakdown, ebrw: e.target.value },
                        })
                      }
                      placeholder="e.g. 740"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm font-medium text-slate-900 bg-slate-50/50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      SAT Math
                    </label>
                    <input
                      type="text"
                      value={formData.satBreakdown?.math || ''}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          satBreakdown: { ...formData.satBreakdown, math: e.target.value },
                        })
                      }
                      placeholder="e.g. 780"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm font-medium text-slate-900 bg-slate-50/50"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      ACT Composite (Optional)
                    </label>
                    <input
                      type="text"
                      value={formData.actScore || ''}
                      onChange={(e) => setFormData({ ...formData, actScore: e.target.value })}
                      placeholder="e.g. 34"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm font-medium text-slate-900 bg-slate-50/50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      English Test Type
                    </label>
                    <select
                      value={formData.englishTestType}
                      onChange={(e) => setFormData({ ...formData, englishTestType: e.target.value as any })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm font-medium text-slate-900 bg-slate-50/50"
                    >
                      <option value="IELTS">IELTS Academic</option>
                      <option value="TOEFL">TOEFL iBT</option>
                      <option value="Duolingo (DET)">Duolingo English Test (DET)</option>
                      <option value="Exempt / English Native">Exempt (English Medium of Instruction)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      English Test Score
                    </label>
                    <input
                      type="text"
                      value={formData.englishTestScore || ''}
                      onChange={(e) => setFormData({ ...formData, englishTestScore: e.target.value })}
                      placeholder="e.g. 8.0 or 110 or 140"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm font-medium text-slate-900 bg-slate-50/50"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-200/80">
                  <input
                    type="checkbox"
                    id="testOptionalCheck"
                    checked={formData.testOptional || false}
                    onChange={(e) => setFormData({ ...formData, testOptional: e.target.checked })}
                    className="w-4 h-4 rounded text-indigo-600 focus:ring-indigo-500"
                  />
                  <label htmlFor="testOptionalCheck" className="text-xs text-slate-700 font-medium">
                    Applying <strong>Test-Optional</strong> (Evaluate chances relying primarily on GPA, school rigor, and extracurricular spike)
                  </label>
                </div>

                <div className="flex justify-between pt-2">
                  <button
                    type="button"
                    onClick={() => setFormStep(1)}
                    className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-all"
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormStep(3)}
                    className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold flex items-center gap-2 transition-all shadow-sm"
                  >
                    <span>Next: Activities & Spike</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Activities & Honors Portfolio */}
            {formStep === 3 && (
              <div className="space-y-6 animate-in fade-in duration-200">
                {/* Academic Field & Core Narrative Spike */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Intended Major / Academic Field
                    </label>
                    <input
                      type="text"
                      value={formData.intendedMajor}
                      onChange={(e) => setFormData({ ...formData, intendedMajor: e.target.value })}
                      placeholder="e.g. Computer Science & AI, Biomedical Science, Economics"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm font-medium text-slate-900 bg-slate-50/50"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Central Application &quot;Spike&quot; / Unifying Theme
                    </label>
                    <input
                      type="text"
                      value={formData.spikeArea || ''}
                      onChange={(e) => setFormData({ ...formData, spikeArea: e.target.value })}
                      placeholder="e.g. Algorithmic Problem Solving & Accessible Assistive Tech"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm font-medium text-slate-900 bg-slate-50/50"
                    />
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-indigo-50/60 border border-indigo-100 flex items-start gap-2.5 text-xs text-indigo-950">
                  <ShieldCheck className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                  <p className="leading-relaxed">
                    <strong>Official Evaluation Standard:</strong> Admissions officers evaluate extracurriculars holistically based on measurable scope, leadership initiative, and time dedication—not artificial preset tiers. Add your real activities and honors below for an honest audit against official admitted student profiles.
                  </p>
                </div>

                {/* Section A: Extracurricular Activities (Common-App Style) */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Briefcase className="w-4 h-4 text-indigo-600" />
                      <h4 className="text-xs font-black uppercase tracking-wider text-slate-900">
                        Extracurricular Activities & Leadership Portfolio
                      </h4>
                    </div>
                    <span className="text-[11px] font-bold text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-full">
                      {formData.activitiesList?.length || 0} Activities Added
                    </span>
                  </div>

                  <div className="space-y-3">
                    {formData.activitiesList?.map((act, index) => (
                      <div
                        key={act.id || index}
                        className="p-4 rounded-2xl bg-slate-50/80 border border-slate-200 hover:border-slate-300 transition-all space-y-3"
                      >
                        <div className="flex items-center justify-between pb-2 border-b border-slate-200/60">
                          <span className="text-xs font-black text-slate-800 bg-white px-2.5 py-1 rounded-lg border border-slate-200/70 shadow-2xs">
                            Activity #{index + 1}
                          </span>
                          <button
                            type="button"
                            onClick={() => handleRemoveActivity(act.id)}
                            className="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition-all"
                            title="Delete Activity"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <div>
                            <label className="block text-[11px] font-bold text-slate-600 uppercase tracking-wider mb-1">
                              Position / Leadership Role
                            </label>
                            <input
                              type="text"
                              value={act.role}
                              onChange={(e) => handleUpdateActivity(act.id, 'role', e.target.value)}
                              placeholder="e.g. Founder & Lead Developer, Team Captain, First Author"
                              className="w-full px-3 py-2 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-xs font-semibold text-slate-900 bg-white"
                              required
                            />
                          </div>
                          <div>
                            <label className="block text-[11px] font-bold text-slate-600 uppercase tracking-wider mb-1">
                              Organization / Project Name
                            </label>
                            <input
                              type="text"
                              value={act.organization}
                              onChange={(e) => handleUpdateActivity(act.id, 'organization', e.target.value)}
                              placeholder="e.g. OpenVoice Accessibility Suite, School CS Society"
                              className="w-full px-3 py-2 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-xs font-semibold text-slate-900 bg-white"
                              required
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                          <div>
                            <label className="block text-[11px] font-bold text-slate-600 uppercase tracking-wider mb-1">
                              Category
                            </label>
                            <select
                              value={act.activityType || 'Computer Science / Tech'}
                              onChange={(e) => handleUpdateActivity(act.id, 'activityType', e.target.value)}
                              className="w-full px-3 py-2 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-xs font-semibold text-slate-900 bg-white"
                            >
                              <option value="Computer Science / Coding">Computer Science / Tech</option>
                              <option value="Academic Research">Academic Research</option>
                              <option value="Community Service / Healthcare">Community Service / Healthcare</option>
                              <option value="Community Service / Volunteering">Community Service / Volunteering</option>
                              <option value="Student Government / Leadership">Student Government / Leadership</option>
                              <option value="Speech & Debate / Model UN">Speech & Debate / Model UN</option>
                              <option value="Athletics / Sports">Athletics / Sports</option>
                              <option value="Creative Arts / Music">Creative Arts / Music</option>
                              <option value="Journalism / Publications">Journalism / Publications</option>
                              <option value="Work Experience / Paid Job">Work Experience / Paid Job</option>
                              <option value="Other">Other Initiative</option>
                            </select>
                          </div>
                          <div>
                            <label className="block text-[11px] font-bold text-slate-600 uppercase tracking-wider mb-1">
                              Time Commitment
                            </label>
                            <input
                              type="text"
                              value={act.timeCommitment || ''}
                              onChange={(e) => handleUpdateActivity(act.id, 'timeCommitment', e.target.value)}
                              placeholder="e.g. 12 hrs/wk, 36 wks/yr"
                              className="w-full px-3 py-2 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-xs font-semibold text-slate-900 bg-white"
                            />
                          </div>
                          <div>
                            <label className="block text-[11px] font-bold text-slate-600 uppercase tracking-wider mb-1">
                              Grade Levels
                            </label>
                            <input
                              type="text"
                              value={act.gradeLevels || ''}
                              onChange={(e) => handleUpdateActivity(act.id, 'gradeLevels', e.target.value)}
                              placeholder="e.g. 10, 11, 12"
                              className="w-full px-3 py-2 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-xs font-semibold text-slate-900 bg-white"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-[11px] font-bold text-slate-600 uppercase tracking-wider mb-1">
                            Quantifiable Impact & Description
                          </label>
                          <textarea
                            rows={2}
                            value={act.description}
                            onChange={(e) => handleUpdateActivity(act.id, 'description', e.target.value)}
                            placeholder="Detail real achievements with numbers: metrics, funds raised, users, people impacted, or peer leadership..."
                            className="w-full px-3 py-2 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-xs font-medium text-slate-900 bg-white"
                            required
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={handleAddActivity}
                    className="w-full py-2.5 px-4 rounded-xl border-2 border-dashed border-indigo-200 hover:border-indigo-400 hover:bg-indigo-50/50 text-indigo-700 text-xs font-bold flex items-center justify-center gap-1.5 transition-all"
                  >
                    <Plus className="w-4 h-4" />
                    <span>+ Add Another Activity</span>
                  </button>
                </div>

                {/* Section B: Honors & Academic Awards */}
                <div className="space-y-3 pt-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Medal className="w-4 h-4 text-purple-600" />
                      <h4 className="text-xs font-black uppercase tracking-wider text-slate-900">
                        Honors, Competitions, & Academic Distinctions
                      </h4>
                    </div>
                    <span className="text-[11px] font-bold text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-full">
                      {formData.honorsList?.length || 0} Honors Added
                    </span>
                  </div>

                  <div className="space-y-3">
                    {formData.honorsList?.map((hon, index) => (
                      <div
                        key={hon.id || index}
                        className="p-3.5 rounded-2xl bg-slate-50/80 border border-slate-200 hover:border-slate-300 transition-all space-y-2.5"
                      >
                        <div className="flex items-center justify-between pb-1.5 border-b border-slate-200/60">
                          <span className="text-xs font-black text-slate-800 bg-white px-2.5 py-0.5 rounded-lg border border-slate-200/70 shadow-2xs">
                            Honor #{index + 1}
                          </span>
                          <button
                            type="button"
                            onClick={() => handleRemoveHonor(hon.id)}
                            className="p-1 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition-all"
                            title="Delete Honor"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                          <div className="sm:col-span-2">
                            <label className="block text-[11px] font-bold text-slate-600 uppercase tracking-wider mb-1">
                              Honor / Award Title
                            </label>
                            <input
                              type="text"
                              value={hon.title}
                              onChange={(e) => handleUpdateHonor(hon.id, 'title', e.target.value)}
                              placeholder="e.g. National Informatics Olympiad Gold, AMC 12 Distinction"
                              className="w-full px-3 py-2 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-xs font-semibold text-slate-900 bg-white"
                              required
                            />
                          </div>
                          <div>
                            <label className="block text-[11px] font-bold text-slate-600 uppercase tracking-wider mb-1">
                              Level of Recognition
                            </label>
                            <select
                              value={hon.level}
                              onChange={(e) => handleUpdateHonor(hon.id, 'level', e.target.value)}
                              className="w-full px-3 py-2 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-xs font-semibold text-slate-900 bg-white"
                            >
                              <option value="International">International</option>
                              <option value="National">National</option>
                              <option value="State / Regional">State / Regional</option>
                              <option value="School / Community">School / Community</option>
                            </select>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
                          <div>
                            <label className="block text-[11px] font-bold text-slate-600 uppercase tracking-wider mb-1">
                              Grade Level
                            </label>
                            <input
                              type="text"
                              value={hon.gradeLevel || ''}
                              onChange={(e) => handleUpdateHonor(hon.id, 'gradeLevel', e.target.value)}
                              placeholder="e.g. 11, 12"
                              className="w-full px-3 py-2 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-xs font-semibold text-slate-900 bg-white"
                            />
                          </div>
                          <div className="sm:col-span-3">
                            <label className="block text-[11px] font-bold text-slate-600 uppercase tracking-wider mb-1">
                              Scope / Rank / Specific Distinction
                            </label>
                            <input
                              type="text"
                              value={hon.description || ''}
                              onChange={(e) => handleUpdateHonor(hon.id, 'description', e.target.value)}
                              placeholder="e.g. Ranked 1st in country out of 4,200 applicants; qualified for AIME"
                              className="w-full px-3 py-2 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-xs font-medium text-slate-900 bg-white"
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={handleAddHonor}
                    className="w-full py-2.5 px-4 rounded-xl border-2 border-dashed border-purple-200 hover:border-purple-400 hover:bg-purple-50/50 text-purple-700 text-xs font-bold flex items-center justify-center gap-1.5 transition-all"
                  >
                    <Plus className="w-4 h-4" />
                    <span>+ Add Another Honor or Award</span>
                  </button>
                </div>

                <div className="flex justify-between pt-3">
                  <button
                    type="button"
                    onClick={() => setFormStep(2)}
                    className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-all"
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormStep(4)}
                    className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold flex items-center gap-2 transition-all shadow-sm"
                  >
                    <span>Next: Aid & Destination</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 4: Aid & Destinations */}
            {formStep === 4 && (
              <div className="space-y-4 animate-in fade-in duration-200">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Financial Need Level
                    </label>
                    <select
                      value={formData.financialNeed}
                      onChange={(e) => setFormData({ ...formData, financialNeed: e.target.value as any })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm font-medium text-slate-900 bg-slate-50/50"
                    >
                      <option value="High">High Financial Need (Require 75% to 100% Tuition/Living Aid)</option>
                      <option value="Moderate">Moderate Need (Can afford $10,000–$20,000/yr)</option>
                      <option value="Low">Low Need (Can afford $30,000–$45,000/yr)</option>
                      <option value="None">None / Full Pay ($60,000+/yr)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Expected Family Contribution (EFC) / Year
                    </label>
                    <input
                      type="text"
                      value={formData.efcAnnualUsd || ''}
                      onChange={(e) => setFormData({ ...formData, efcAnnualUsd: e.target.value })}
                      placeholder="e.g. $0 (Full Ride Required) or $12,000/yr"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm font-medium text-slate-900 bg-slate-50/50"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Target Countries & Educational Regions
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {COUNTRIES_LIST.map((country) => {
                      const isSelected = formData.preferredCountries.includes(country);
                      return (
                        <button
                          key={country}
                          type="button"
                          onClick={() => handleCountryToggle(country)}
                          className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all border flex items-center gap-1.5 ${
                            isSelected
                              ? 'bg-indigo-600 border-indigo-600 text-white shadow-sm'
                              : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                          }`}
                        >
                          {isSelected && <Check className="w-3.5 h-3.5" />}
                          <span>{country}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Specific Admissions Inquiries or Constraints
                  </label>
                  <input
                    type="text"
                    value={formData.specificConcerns || ''}
                    onChange={(e) => setFormData({ ...formData, specificConcerns: e.target.value })}
                    placeholder="e.g. Can I qualify for full tuition waivers in Canada or Ivy League Need-Blind?"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm font-medium text-slate-900 bg-slate-50/50"
                  />
                </div>

                <div className="flex justify-between items-center pt-3">
                  <button
                    type="button"
                    onClick={() => setFormStep(3)}
                    className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-extrabold transition-all cursor-pointer"
                  >
                    Back
                  </button>

                  <button
                    id="btn-run-profile-analyzer"
                    type="submit"
                    disabled={isAnalyzing}
                    className="px-7 py-3.5 rounded-2xl bg-slate-950 hover:bg-indigo-600 active:bg-indigo-700 text-white font-extrabold text-sm shadow-md hover:shadow-lg transition-all flex items-center gap-2.5 cursor-pointer disabled:opacity-50"
                  >
                    {isAnalyzing ? (
                      <>
                        <RefreshCw className="w-4 h-4 animate-spin" />
                        <span>Searching Admissions Data & Cross-Referencing...</span>
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-4 h-4 text-indigo-400" />
                        <span>Run Full AI Profile Diagnostic</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            )}
          </form>

          {/* Error Banner */}
          {errorMessage && (
            <div className="p-5 rounded-2xl bg-rose-50 border border-rose-200 text-rose-800 text-sm flex items-start gap-3 shadow-xs">
              <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold">Diagnostic Interruption</h4>
                <p className="mt-0.5 text-xs text-rose-700">{errorMessage}</p>
              </div>
            </div>
          )}

          {/* Results Section */}
          {analysisResult && (
            <div id="ai-profile-results" className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-300">
              {/* Card 1: Score & Profile Archetype */}
              <div className="bg-white rounded-[28px] p-6 sm:p-8 border border-slate-200/90 shadow-[0_8px_30px_rgba(0,0,0,0.04)] relative overflow-hidden">
                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
                  <div className="space-y-2 max-w-2xl">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-extrabold">
                        {analysisResult.overallRating}
                      </span>
                      {analysisResult.profileArchetype && (
                        <span className="px-3 py-1 rounded-full bg-purple-50 border border-purple-200 text-purple-700 text-xs font-bold">
                          Archetype: {analysisResult.profileArchetype}
                        </span>
                      )}
                    </div>
                    <h2 className="text-xl sm:text-2xl font-black text-slate-950 tracking-tight">
                      Strategic Admissions Assessment
                    </h2>
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                      {analysisResult.summary}
                    </p>
                  </div>

                  {/* Competitiveness Score Dial */}
                  <div className="shrink-0 flex items-center gap-4 bg-slate-50 border border-slate-200/80 rounded-2xl p-4">
                    <div className="relative w-20 h-20 flex items-center justify-center">
                      <div className="w-20 h-20 rounded-full border-4 border-slate-200 flex items-center justify-center bg-white shadow-inner">
                        <div className="text-center">
                          <span className="text-2xl font-black text-indigo-600">
                            {analysisResult.ratingScore}
                          </span>
                          <span className="text-[10px] text-slate-400 block font-bold">/ 100</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <span className="text-xs font-extrabold text-slate-800 block">
                        Competitiveness Index
                      </span>
                      <span className="text-[11px] text-emerald-600 font-bold flex items-center gap-1 mt-0.5">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        {analysisResult.scholarshipMatchScore || 'High Match Fit'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2: Need-Blind vs. Need-Aware Financial Reality Check */}
              {analysisResult.needBlindAnalysis && (
                <div className="bg-amber-50/70 border border-amber-200/90 rounded-[28px] p-6 sm:p-8 shadow-[0_8px_30px_rgba(0,0,0,0.03)]">
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-900 flex items-center justify-center shrink-0 mt-0.5">
                      <Scale className="w-5 h-5" />
                    </div>
                    <div className="space-y-2 flex-1">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h3 className="text-sm sm:text-base font-extrabold text-amber-950">
                          International Financial Aid & Need Sensitivity Reality
                        </h3>
                        <span className="px-2.5 py-0.5 rounded-full bg-amber-200 text-amber-900 text-[11px] font-bold">
                          Critical International Metric
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-amber-900/90 leading-relaxed">
                        {analysisResult.needBlindAnalysis.advice}
                      </p>

                      {analysisResult.needBlindAnalysis.needAwareWarning && (
                        <div className="p-3 bg-amber-100/70 rounded-xl text-xs text-amber-950 font-medium flex items-start gap-2 border border-amber-200/80">
                          <AlertTriangle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                          <span>{analysisResult.needBlindAnalysis.needAwareWarning}</span>
                        </div>
                      )}

                      {analysisResult.needBlindAnalysis.needBlindSchools && (
                        <div className="pt-1 flex flex-wrap items-center gap-1.5 text-xs text-amber-900 font-bold">
                          <span className="text-amber-800 font-semibold">100% Need-Blind Institutions for Foreign Citizens:</span>
                          {analysisResult.needBlindAnalysis.needBlindSchools.map((school, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-0.5 rounded-md bg-white border border-amber-200/80 text-amber-950 font-extrabold text-[11px]"
                            >
                              {school}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Card 3: Categorized University Chances Grid (Reach / Target / Safety) */}
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h3 className="text-lg font-black text-slate-900 tracking-tight flex items-center gap-2">
                      <Compass className="w-5 h-5 text-indigo-600" />
                      <span>Realistic Admissions Odds & Official Profile Matches</span>
                    </h3>
                    <p className="text-xs text-slate-500 font-medium">
                      Calibrated against verified Common Data Set (CDS) 25th–75th percentiles and actual international matriculants
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200/80 w-fit">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>No Hallucinated Chances</span>
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
                  {/* Reach Universities Column */}
                  <div className="bg-white rounded-[28px] p-6 border border-slate-200/90 shadow-[0_8px_30px_rgba(0,0,0,0.04)] flex flex-col justify-between">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                        <div className="flex items-center gap-2">
                          <span className="w-3 h-3 rounded-full bg-rose-500" />
                          <h4 className="font-extrabold text-sm text-slate-950">Reach (Aspirational)</h4>
                        </div>
                        <span className="text-[11px] font-bold text-rose-600 bg-rose-50 px-2 py-0.5 rounded-full">
                          ~2% – 8% Odds
                        </span>
                      </div>

                      <div className="space-y-3">
                        {analysisResult.reachUniversities?.map((uni, i) => (
                          <div
                            key={i}
                            className="p-3.5 rounded-2xl bg-slate-50/80 border border-slate-200/70 hover:border-indigo-200 transition-all space-y-2"
                          >
                            <div className="flex items-start justify-between gap-2">
                              <span className="font-extrabold text-xs sm:text-sm text-slate-950">
                                {uni.name}
                              </span>
                              <span className="px-2 py-0.5 rounded-full bg-rose-100 text-rose-800 text-[10px] font-black shrink-0">
                                {uni.chancePercentage}
                              </span>
                            </div>
                            <span className="text-[11px] font-semibold text-slate-500 block">
                              📍 {uni.country} {uni.acceptanceRate ? `• ${uni.acceptanceRate} Admit Rate` : ''}
                            </span>
                            <p className="text-[11px] text-slate-600 leading-relaxed">{uni.rationale}</p>

                            {/* Official Benchmark Comparison */}
                            {uni.officialBenchmarkComparison && (
                              <div className="p-2 rounded-xl bg-slate-100/90 border border-slate-200 text-[10px] text-slate-700 space-y-0.5">
                                <span className="font-bold text-slate-900 block flex items-center gap-1">
                                  <Scale className="w-3 h-3 text-indigo-600" />
                                  <span>Official CDS Benchmark:</span>
                                </span>
                                <span className="leading-tight block">{uni.officialBenchmarkComparison}</span>
                              </div>
                            )}

                            {/* Admitted Profile Reality */}
                            {uni.admittedProfileReality && (
                              <div className="p-2 rounded-xl bg-amber-50/80 border border-amber-200/70 text-[10px] text-amber-900 space-y-0.5">
                                <span className="font-bold block flex items-center gap-1 text-amber-950">
                                  <AlertCircle className="w-3 h-3 text-amber-600" />
                                  <span>Admitted Profile Reality:</span>
                                </span>
                                <span className="leading-tight block">{uni.admittedProfileReality}</span>
                              </div>
                            )}

                            {uni.aidPolicy && (
                              <div className="pt-0.5 text-[10px] font-bold text-indigo-700 flex items-center gap-1">
                                <DollarSign className="w-3 h-3 text-indigo-500" />
                                <span>{uni.aidPolicy}</span>
                              </div>
                            )}
                            {uni.databaseMatch && (
                              <span className="inline-flex items-center gap-1 text-[10px] font-extrabold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200/60 mt-0.5">
                                <CheckCircle2 className="w-3 h-3 text-emerald-600" /> In Uni Route Database
                              </span>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Target Universities Column */}
                  <div className="bg-white rounded-[28px] p-6 border border-slate-200/90 shadow-[0_8px_30px_rgba(0,0,0,0.04)] flex flex-col justify-between">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                        <div className="flex items-center gap-2">
                          <span className="w-3 h-3 rounded-full bg-amber-500" />
                          <h4 className="font-extrabold text-sm text-slate-950">Target (Competitive Match)</h4>
                        </div>
                        <span className="text-[11px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full">
                          ~15% – 35% Odds
                        </span>
                      </div>

                      <div className="space-y-3">
                        {analysisResult.targetUniversities?.map((uni, i) => (
                          <div
                            key={i}
                            className="p-3.5 rounded-2xl bg-slate-50/80 border border-slate-200/70 hover:border-indigo-200 transition-all space-y-2"
                          >
                            <div className="flex items-start justify-between gap-2">
                              <span className="font-extrabold text-xs sm:text-sm text-slate-950">
                                {uni.name}
                              </span>
                              <span className="px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 text-[10px] font-black shrink-0">
                                {uni.chancePercentage}
                              </span>
                            </div>
                            <span className="text-[11px] font-semibold text-slate-500 block">
                              📍 {uni.country} {uni.acceptanceRate ? `• ${uni.acceptanceRate} Admit Rate` : ''}
                            </span>
                            <p className="text-[11px] text-slate-600 leading-relaxed">{uni.rationale}</p>

                            {/* Official Benchmark Comparison */}
                            {uni.officialBenchmarkComparison && (
                              <div className="p-2 rounded-xl bg-slate-100/90 border border-slate-200 text-[10px] text-slate-700 space-y-0.5">
                                <span className="font-bold text-slate-900 block flex items-center gap-1">
                                  <Scale className="w-3 h-3 text-indigo-600" />
                                  <span>Official CDS Benchmark:</span>
                                </span>
                                <span className="leading-tight block">{uni.officialBenchmarkComparison}</span>
                              </div>
                            )}

                            {/* Admitted Profile Reality */}
                            {uni.admittedProfileReality && (
                              <div className="p-2 rounded-xl bg-amber-50/80 border border-amber-200/70 text-[10px] text-amber-900 space-y-0.5">
                                <span className="font-bold block flex items-center gap-1 text-amber-950">
                                  <AlertCircle className="w-3 h-3 text-amber-600" />
                                  <span>Admitted Profile Reality:</span>
                                </span>
                                <span className="leading-tight block">{uni.admittedProfileReality}</span>
                              </div>
                            )}

                            {uni.aidPolicy && (
                              <div className="pt-0.5 text-[10px] font-bold text-indigo-700 flex items-center gap-1">
                                <DollarSign className="w-3 h-3 text-indigo-500" />
                                <span>{uni.aidPolicy}</span>
                              </div>
                            )}
                            {uni.databaseMatch && (
                              <span className="inline-flex items-center gap-1 text-[10px] font-extrabold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200/60 mt-0.5">
                                <CheckCircle2 className="w-3 h-3 text-emerald-600" /> In Uni Route Database
                              </span>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Safety Universities Column */}
                  <div className="bg-white rounded-[28px] p-6 border border-slate-200/90 shadow-[0_8px_30px_rgba(0,0,0,0.04)] flex flex-col justify-between">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                        <div className="flex items-center gap-2">
                          <span className="w-3 h-3 rounded-full bg-emerald-500" />
                          <h4 className="font-extrabold text-sm text-slate-950">Safety (High Likelihood)</h4>
                        </div>
                        <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                          ~50% – 80% Odds
                        </span>
                      </div>

                      <div className="space-y-3">
                        {analysisResult.safetyUniversities?.map((uni, i) => (
                          <div
                            key={i}
                            className="p-3.5 rounded-2xl bg-slate-50/80 border border-slate-200/70 hover:border-indigo-200 transition-all space-y-2"
                          >
                            <div className="flex items-start justify-between gap-2">
                              <span className="font-extrabold text-xs sm:text-sm text-slate-950">
                                {uni.name}
                              </span>
                              <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-900 text-[10px] font-black shrink-0">
                                {uni.chancePercentage}
                              </span>
                            </div>
                            <span className="text-[11px] font-semibold text-slate-500 block">
                              📍 {uni.country} {uni.acceptanceRate ? `• ${uni.acceptanceRate} Admit Rate` : ''}
                            </span>
                            <p className="text-[11px] text-slate-600 leading-relaxed">{uni.rationale}</p>

                            {/* Official Benchmark Comparison */}
                            {uni.officialBenchmarkComparison && (
                              <div className="p-2 rounded-xl bg-slate-100/90 border border-slate-200 text-[10px] text-slate-700 space-y-0.5">
                                <span className="font-bold text-slate-900 block flex items-center gap-1">
                                  <Scale className="w-3 h-3 text-indigo-600" />
                                  <span>Official CDS Benchmark:</span>
                                </span>
                                <span className="leading-tight block">{uni.officialBenchmarkComparison}</span>
                              </div>
                            )}

                            {/* Admitted Profile Reality */}
                            {uni.admittedProfileReality && (
                              <div className="p-2 rounded-xl bg-emerald-50/80 border border-emerald-200/70 text-[10px] text-emerald-900 space-y-0.5">
                                <span className="font-bold block flex items-center gap-1 text-emerald-950">
                                  <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                                  <span>Admitted Profile Reality:</span>
                                </span>
                                <span className="leading-tight block">{uni.admittedProfileReality}</span>
                              </div>
                            )}

                            {uni.aidPolicy && (
                              <div className="pt-0.5 text-[10px] font-bold text-indigo-700 flex items-center gap-1">
                                <DollarSign className="w-3 h-3 text-indigo-500" />
                                <span>{uni.aidPolicy}</span>
                              </div>
                            )}
                            {uni.databaseMatch && (
                              <span className="inline-flex items-center gap-1 text-[10px] font-extrabold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200/60 mt-0.5">
                                <CheckCircle2 className="w-3 h-3 text-emerald-600" /> In Uni Route Database
                              </span>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 4: Testing Gap & Extracurricular Spike Diagnostics */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Testing Gap Analysis */}
                {analysisResult.testingGapAnalysis && (
                  <div className="bg-white rounded-[28px] p-6 sm:p-7 border border-slate-200/90 shadow-[0_8px_30px_rgba(0,0,0,0.04)] space-y-3">
                    <div className="flex items-center gap-2 text-indigo-600">
                      <TrendingUp className="w-5 h-5" />
                      <h4 className="font-extrabold text-sm sm:text-base text-slate-950">
                        Testing Gap & Score Simulator
                      </h4>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {analysisResult.testingGapAnalysis.currentStanding}
                    </p>
                    <div className="p-3 rounded-xl bg-indigo-50/70 border border-indigo-100 text-xs font-semibold text-indigo-950 space-y-1">
                      <span className="font-bold block text-indigo-800">Target Score Benchmark:</span>
                      <span>{analysisResult.testingGapAnalysis.targetSatAct}</span>
                    </div>
                    {analysisResult.testingGapAnalysis.keyFocusAreas && (
                      <div className="space-y-1.5 pt-1">
                        <span className="text-xs font-bold text-slate-700 block">High-Yield Score Elevators:</span>
                        <ul className="space-y-1">
                          {analysisResult.testingGapAnalysis.keyFocusAreas.map((area, idx) => (
                            <li key={idx} className="text-xs text-slate-600 flex items-start gap-1.5">
                              <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 shrink-0 mt-0.5" />
                              <span>{area}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}

                {/* Extracurricular Audit */}
                {analysisResult.extracurricularAudit && (
                  <div className="bg-white rounded-[28px] p-6 sm:p-7 border border-slate-200/90 shadow-[0_8px_30px_rgba(0,0,0,0.04)] space-y-3">
                    <div className="flex items-center gap-2 text-purple-600">
                      <Award className="w-5 h-5" />
                      <h4 className="font-extrabold text-sm sm:text-base text-slate-950">
                        Extracurricular Spike & Narrative Audit
                      </h4>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {analysisResult.extracurricularAudit.tierAssessment}
                    </p>
                    <div className="p-3 rounded-xl bg-purple-50/70 border border-purple-100 text-xs font-semibold text-purple-950 space-y-1">
                      <span className="font-bold block text-purple-800">Spike Rating:</span>
                      <span>{analysisResult.extracurricularAudit.spikeRating}</span>
                    </div>
                    {analysisResult.extracurricularAudit.recommendations && (
                      <div className="space-y-1.5 pt-1">
                        <span className="text-xs font-bold text-slate-700 block">How to Elevate Your Spike:</span>
                        <ul className="space-y-1">
                          {analysisResult.extracurricularAudit.recommendations.map((rec, idx) => (
                            <li key={idx} className="text-xs text-slate-600 flex items-start gap-1.5">
                              <CheckCircle2 className="w-3.5 h-3.5 text-purple-600 shrink-0 mt-0.5" />
                              <span>{rec}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Card 5: Profile Strengths & Vulnerabilities */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="bg-white rounded-[28px] p-6 sm:p-7 border border-slate-200/90 shadow-[0_8px_30px_rgba(0,0,0,0.04)] space-y-3">
                  <div className="flex items-center gap-2 text-emerald-600 font-extrabold text-sm">
                    <CheckCircle2 className="w-5 h-5" />
                    <span>Key Profile Strengths</span>
                  </div>
                  <ul className="space-y-2">
                    {analysisResult.strengths?.map((str, idx) => (
                      <li key={idx} className="text-xs sm:text-sm text-slate-700 flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0" />
                        <span>{str}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white rounded-[28px] p-6 sm:p-7 border border-slate-200/90 shadow-[0_8px_30px_rgba(0,0,0,0.04)] space-y-3">
                  <div className="flex items-center gap-2 text-rose-600 font-extrabold text-sm">
                    <AlertTriangle className="w-5 h-5" />
                    <span>Areas for Strategic Upgrading</span>
                  </div>
                  <ul className="space-y-2">
                    {analysisResult.gapsAndWeaknesses?.map((gap, idx) => (
                      <li key={idx} className="text-xs sm:text-sm text-slate-700 flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 shrink-0" />
                        <span>{gap}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card 6: Actionable 6-Month Roadmap */}
              {analysisResult.actionPlan && (
                <div className="bg-white rounded-[28px] p-6 sm:p-8 border border-slate-200/90 shadow-[0_8px_30px_rgba(0,0,0,0.04)] space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-base sm:text-lg font-black text-slate-950 flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-indigo-600" />
                      <span>Actionable Admissions Roadmap</span>
                    </h3>
                    <span className="text-xs font-semibold text-slate-400">Prioritized Milestones</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
                    {analysisResult.actionPlan.map((plan) => (
                      <div
                        key={plan.step}
                        className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2 relative overflow-hidden"
                      >
                        <div className="flex items-center justify-between">
                          <span className="w-6 h-6 rounded-lg bg-indigo-600 text-white font-extrabold text-xs flex items-center justify-center shadow-sm">
                            {plan.step}
                          </span>
                          <span className="text-[10px] font-bold text-slate-500 bg-white px-2 py-0.5 rounded-md border border-slate-200">
                            {plan.timeline}
                          </span>
                        </div>
                        <h5 className="font-extrabold text-xs text-slate-950">{plan.title}</h5>
                        <p className="text-[11px] text-slate-600 leading-relaxed">{plan.action}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Card 7: Recommended Scholarships */}
              {analysisResult.recommendedScholarships && (
                <div className="bg-gradient-to-br from-indigo-50/70 via-white to-purple-50/70 rounded-[28px] p-6 sm:p-8 border border-indigo-200/90 shadow-[0_8px_30px_rgba(0,0,0,0.04)] space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <h4 className="font-extrabold text-base sm:text-lg text-slate-950">Recommended Matched Scholarships</h4>
                      <p className="text-xs text-slate-600 mt-0.5">
                        High-probability institutional and government awards tailored to your profile
                      </p>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-indigo-100 text-xs font-extrabold text-indigo-700 border border-indigo-200/80 self-start sm:self-auto">
                      {analysisResult.scholarshipMatchScore}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                    {analysisResult.recommendedScholarships.map((schName, i) => (
                      <div
                        key={i}
                        className="p-3.5 rounded-2xl bg-white border border-indigo-100 shadow-xs hover:border-indigo-300 hover:shadow-sm transition-all text-xs font-bold text-slate-900 flex items-center gap-2.5"
                      >
                        <Award className="w-4 h-4 text-indigo-600 shrink-0" />
                        <span>{schName}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Card 8: Live Search Grounding Sources */}
              {analysisResult.groundedSources && analysisResult.groundedSources.length > 0 && (
                <div className="p-5 rounded-[24px] bg-slate-50 border border-slate-200/90 text-xs text-slate-600 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-700">
                    <Search className="w-3.5 h-3.5 text-indigo-600" />
                    <span>Live Google Admissions Grounding Sources:</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {analysisResult.groundedSources.map((source, idx) => (
                      <a
                        key={idx}
                        href={source.uri}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-white border border-slate-200/90 text-indigo-700 hover:text-indigo-900 hover:border-indigo-300 font-semibold text-[11px] transition-all shadow-2xs"
                      >
                        <span>{source.title}</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
            </motion.div>
          ) : (
            <motion.div
              key="counselor"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.1 }}
              className="bg-white rounded-[28px] border border-slate-200/90 shadow-[0_8px_30px_rgba(0,0,0,0.04)] overflow-hidden flex flex-col h-[680px]"
            >
          {/* Counselor Chat Header */}
          <div className="p-4 sm:p-5 border-b border-slate-100 bg-slate-50/70 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-slate-950 text-white flex items-center justify-center font-black text-lg shadow-sm">
                🎓
              </div>
              <div>
                <h3 className="font-extrabold text-sm text-slate-950 flex items-center gap-2">
                  UniRoute Admissions Counselor
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                </h3>
                <p className="text-[11px] text-slate-500 font-medium">Grounded in global scholarship databases & admission metrics</p>
              </div>
            </div>
          </div>

          {/* Quick Counselor Prompts Bar */}
          <div className="px-4 py-3 bg-slate-50/80 border-b border-slate-200/60 flex items-center gap-2 overflow-x-auto">
            <span className="text-[11px] font-extrabold text-slate-500 shrink-0">Quick Prompts:</span>
            {[
              'Explain Need-Blind vs. Need-Aware for internationals',
              'What SAT Math score is safe for MIT / CMU CS?',
              'Best full-ride scholarships in Canada & US',
              'How to structure a Common App Personal Statement',
            ].map((p, i) => (
              <button
                key={i}
                type="button"
                onClick={() => handleSendMessage(p)}
                className="px-3 py-1.5 rounded-xl bg-white border border-slate-200/80 text-[11px] font-bold text-slate-700 hover:text-indigo-600 hover:border-indigo-300 whitespace-nowrap transition-all shadow-2xs cursor-pointer"
              >
                {p}
              </button>
            ))}
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-4 sm:p-6 overflow-y-auto space-y-4">
            {chatMessages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-3 max-w-2xl ${msg.sender === 'user' ? 'ml-auto flex-row-reverse' : ''}`}
              >
                <div
                  className={`w-8 h-8 rounded-xl flex items-center justify-center text-xs font-black shrink-0 ${
                    msg.sender === 'user'
                      ? 'bg-slate-950 text-white shadow-xs'
                      : 'bg-slate-950 text-white shadow-xs'
                  }`}
                >
                  {msg.sender === 'user' ? 'ME' : 'AI'}
                </div>
                <div
                  className={`p-4 rounded-2xl text-xs sm:text-sm leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-slate-950 text-white rounded-tr-none shadow-xs'
                      : 'bg-slate-50 text-slate-800 rounded-tl-none border border-slate-200/70'
                  }`}
                >
                  <ChatMarkdownRenderer content={msg.text} isUser={msg.sender === 'user'} />
                </div>
              </div>
            ))}
            {isSendingMessage && (
              <div className="flex gap-3 max-w-2xl">
                <div className="w-8 h-8 rounded-xl bg-slate-950 text-white shadow-xs flex items-center justify-center text-xs font-black shrink-0">
                  AI
                </div>
                <div className="p-4 rounded-2xl bg-slate-50 text-slate-500 text-xs rounded-tl-none border border-slate-200/70 flex items-center gap-2">
                  <RefreshCw className="w-3.5 h-3.5 animate-spin text-slate-900" />
                  <span>Consulting admissions databases & formulating advice...</span>
                </div>
              </div>
            )}
          </div>

          {/* Input Bar */}
          <div className="p-3 sm:p-4 border-t border-slate-100 bg-white">
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') handleSendMessage();
                }}
                placeholder="Ask about admissions criteria, aid likelihood, or SAT targets..."
                className="flex-1 px-4 py-3 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-xs sm:text-sm text-slate-900 bg-slate-50/60 focus:bg-white transition-all"
              />
              <button
                type="button"
                onClick={() => handleSendMessage()}
                disabled={!inputMessage.trim() || isSendingMessage}
                className="px-5 py-3 rounded-2xl bg-slate-950 hover:bg-indigo-600 active:bg-indigo-700 text-white font-extrabold text-xs sm:text-sm flex items-center gap-2 transition-all disabled:opacity-50 shadow-sm cursor-pointer"
              >
                <span>Send</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
        </AnimatePresence>
      </div>
    </div>
  );
};
