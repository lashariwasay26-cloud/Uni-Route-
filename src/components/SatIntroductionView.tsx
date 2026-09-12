import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  ArrowLeft,
  BookOpen,
  Clock,
  CheckCircle2,
  HelpCircle,
  Sparkles,
  ArrowRight,
  Calculator,
  Target,
  Award,
  Globe,
  Layers,
  BarChart2,
  Calendar,
  FileText,
  UserCheck,
  ShieldCheck,
  Zap,
  GraduationCap,
  Percent,
  CheckSquare,
  AlertCircle
} from 'lucide-react';

interface SatIntroductionViewProps {
  onBackToHome: () => void;
  onStartLearning: () => void;
}

export const SatIntroductionView: React.FC<SatIntroductionViewProps> = ({
  onBackToHome,
  onStartLearning,
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'adaptive' | 'procedure' | 'learning-tips' | 'desmos' | 'application' | 'percentiles' | 'checklist'>('overview');

  return (
    <div className="space-y-8 pb-16">
      {/* 1. TOP NAVIGATION ROW (Matching Essay Hub & Scholarship Pages) */}
      <div className="flex items-center justify-between mb-2">
        <button
          onClick={onBackToHome}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-white border border-slate-200/90 shadow-xs text-xs font-bold text-slate-700 hover:text-indigo-600 hover:bg-slate-50 transition-all cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 text-indigo-600" />
          <span>Back to SAT Route</span>
        </button>

        <span className="text-xs font-extrabold uppercase tracking-widest text-slate-400 ml-auto">
          DIGITAL SAT MASTER GUIDE
        </span>
      </div>

      {/* 2. CENTERED HERO SECTION (Matching Uni Route Design System) */}
      <div className="text-center max-w-3xl mx-auto py-4 relative">
        {/* Soft Ambient Background Glow */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 pointer-events-none -z-10"
          style={{
            background: 'radial-gradient(circle, rgba(165, 180, 252, 0.2) 0%, rgba(216, 180, 254, 0.1) 40%, rgba(255, 255, 255, 0) 100%)'
          }}
        />

        {/* Eyebrow Tag */}
        <div className="inline-flex items-center justify-center gap-2 px-5 py-2 rounded-full bg-white border border-slate-200/80 shadow-[0_2px_12px_rgba(0,0,0,0.04)] text-[11px] font-extrabold tracking-[0.2em] text-slate-600 uppercase mb-4 sm:mb-6">
          <span className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse" />
          OFFICIAL DIGITAL SAT MASTER GUIDE
        </div>

        {/* Headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight leading-tight mb-4">
          Everything About the{' '}
          <span className="bg-gradient-to-r from-indigo-600 via-indigo-700 to-purple-600 bg-clip-text text-transparent">
            Digital SAT
          </span>
        </h1>

        {/* Description */}
        <p className="text-slate-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-6 font-medium">
          The complete handbook for university admissions: test structure, registration steps, scoring algorithm, percentiles, test frequency, and scholarship benchmarks.
        </p>

        {/* Stats Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 text-xs font-bold text-slate-700 mb-8">
          <span className="flex items-center gap-2 bg-white px-3.5 py-2 rounded-xl border border-slate-200/90 shadow-2xs">
            <Clock className="w-4 h-4 text-indigo-600" /> 2h 14m Duration
          </span>
          <span className="flex items-center gap-2 bg-white px-3.5 py-2 rounded-xl border border-slate-200/90 shadow-2xs">
            <Calendar className="w-4 h-4 text-purple-600" /> 7 Times / Year
          </span>
          <span className="flex items-center gap-2 bg-white px-3.5 py-2 rounded-xl border border-slate-200/90 shadow-2xs">
            <Target className="w-4 h-4 text-emerald-600" /> 400 – 1600 Score
          </span>
          <span className="flex items-center gap-2 bg-white px-3.5 py-2 rounded-xl border border-slate-200/90 shadow-2xs">
            <Zap className="w-4 h-4 text-amber-500" /> Multistage Adaptive
          </span>
        </div>

        {/* Action Button */}
        <div className="flex items-center justify-center">
          <button
            onClick={onStartLearning}
            className="px-6 py-3.5 rounded-2xl bg-slate-950 hover:bg-slate-900 text-white font-bold text-sm transition-all shadow-md hover:shadow-lg flex items-center gap-2 cursor-pointer active:scale-[0.98]"
          >
            <BookOpen className="w-4 h-4" />
            <span>Start Practice & Drills</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* 3. NAVIGATION SUB-TABS */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none border-b border-slate-200/80">
        {[
          { id: 'overview', label: '📌 Overview & Types' },
          { id: 'adaptive', label: '⚡ Adaptive System & Marking' },
          { id: 'procedure', label: '⚙️ Test Procedure & Bluebook' },
          { id: 'learning-tips', label: '💡 1500+ Prep & Learning Tips' },
          { id: 'desmos', label: '🧮 Desmos Calculator Guide' },
          { id: 'application', label: '📅 Registration & Dates' },
          { id: 'percentiles', label: '📊 Percentiles & Universities' },
          { id: 'checklist', label: '🎒 Test Day Checklist' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === tab.id
                ? 'bg-slate-950 text-white shadow-xs'
                : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-50 border border-slate-200/80'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab 1: Overview & Types */}
      {activeTab === 'overview' && (
        <div className="space-y-6">
          <div className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 shadow-sm space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-slate-100 text-slate-900 flex items-center justify-center text-xl font-bold border border-slate-200">
                🎓
              </div>
              <div>
                <h2 className="text-xl font-black text-slate-950">Comprehensive Overview of the Digital SAT</h2>
                <p className="text-xs text-slate-500">Global admission standard, exam architecture, and historical evolution.</p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              The <strong>SAT (Scholastic Assessment Test)</strong> is a standardized entrance exam administered globally by the <strong>College Board</strong>. Used by over 4,000 undergraduate institutions across North America, Europe, Asia, and Latin America, as well as top Pakistani universities like <strong>LUMS, NUST, GIKI, and IBA Karachi</strong>, the exam evaluates college readiness through math and verbal critical reasoning skills.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2 text-xs">
                <strong className="text-slate-950 font-extrabold text-sm block">✨ Digital SAT Suite Architecture</strong>
                <p className="text-slate-600 leading-relaxed">
                  In 2023–2024, paper SAT exams were permanently retired worldwide. The Digital SAT is administered via College Board's secure <strong>Bluebook application</strong> on laptops and tablets. It features shorter overall duration (2 hours 14 minutes), shorter reading passages with single questions, and full integrated calculator access across all math sections.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2 text-xs">
                <strong className="text-slate-950 font-extrabold text-sm block">❌ Retired SAT Components (No Longer Active)</strong>
                <p className="text-slate-600 leading-relaxed">
                  <strong>SAT Subject Tests</strong> (Physics, Chemistry, Math Level 2) and the <strong>Optional SAT Essay</strong> were permanently discontinued by the College Board. Universities now judge student subject knowledge through High School GPA, AP Exams, IB Diplomas, and the main Digital SAT composite score.
                </p>
              </div>
            </div>

            {/* Core Section Breakdown */}
            <div className="border-t border-slate-100 pt-5 space-y-3">
              <h3 className="text-sm font-extrabold text-slate-950 flex items-center gap-2">
                <Layers className="w-4 h-4 text-slate-900" /> Section Comparison at a Glance
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                  <div className="flex items-center justify-between">
                    <strong className="text-slate-950 text-sm font-extrabold">Section 1: Reading & Writing</strong>
                    <span className="px-2.5 py-0.5 rounded-full bg-slate-950 text-white text-[10px] font-bold">54 Qs | 64 Mins</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    2 Modules of 27 questions (32 mins each). Short texts (25–150 words) spanning Literature, History, Social Studies, and Humanities.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                  <div className="flex items-center justify-between">
                    <strong className="text-slate-950 text-sm font-extrabold">Section 2: Math</strong>
                    <span className="px-2.5 py-0.5 rounded-full bg-slate-950 text-white text-[10px] font-bold">44 Qs | 70 Mins</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    2 Modules of 22 questions (35 mins each). Covers Algebra, Advanced Math, Problem Solving & Data Analysis, and Geometry/Trigonometry.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white border border-slate-200/90 rounded-2xl p-5 shadow-sm space-y-2">
              <div className="text-slate-900 font-extrabold text-xs uppercase tracking-wider">Exam Format</div>
              <div className="text-lg font-black text-slate-950">100% Digital</div>
              <p className="text-xs text-slate-500 leading-relaxed">Taken on your personal or school-borrowed laptop or iPad in Bluebook.</p>
            </div>

            <div className="bg-white border border-slate-200/90 rounded-2xl p-5 shadow-sm space-y-2">
              <div className="text-slate-900 font-extrabold text-xs uppercase tracking-wider">Score Validity</div>
              <div className="text-lg font-black text-slate-950">5 Years</div>
              <p className="text-xs text-slate-500 leading-relaxed">Official College Board score reports remain valid for university application filing for 5 years.</p>
            </div>

            <div className="bg-white border border-slate-200/90 rounded-2xl p-5 shadow-sm space-y-2">
              <div className="text-slate-900 font-extrabold text-xs uppercase tracking-wider">Results Velocity</div>
              <div className="text-lg font-black text-slate-950">13–14 Days</div>
              <p className="text-xs text-slate-500 leading-relaxed">Digital score reports publish on student College Board portals in ~2 weeks.</p>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Multistage Adaptive System & Marking Algorithm */}
      {activeTab === 'adaptive' && (
        <div className="space-y-6">
          <div className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-slate-100 text-slate-900 flex items-center justify-center text-xl font-bold border border-slate-200">
                ⚡
              </div>
              <div>
                <h2 className="text-xl font-black text-slate-950">Multistage Adaptive System & Marking Mechanism</h2>
                <p className="text-xs text-slate-500">In-depth technical breakdown of routing thresholds, item response theory, and score caps.</p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Unlike static paper tests where every examinee completes the identical set of questions, the Digital SAT operates on a <strong>Multistage Adaptive Testing (MST)</strong> framework. The difficulty of Module 2 dynamically adjusts based on your performance in Module 1 for both Reading & Writing and Math.
            </p>

            {/* Visual Step Breakdown */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="px-2 h-7 rounded-lg bg-slate-950 text-white font-extrabold flex items-center justify-center text-[11px] whitespace-nowrap min-w-[42px]">M1</span>
                  <strong className="text-slate-950 text-sm font-extrabold">Module 1: Baseline Routing</strong>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  Presents a balanced cross-section of easy (30%), medium (40%), and hard (30%) questions. Everyone receives an equivalent baseline.
                </p>
                <div className="text-[11px] text-slate-900 font-extrabold pt-1">
                  Threshold: Achieve ~65%+ accuracy to route to Hard Module 2.
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="px-2 h-7 rounded-lg bg-slate-950 text-white font-extrabold flex items-center justify-center text-[11px] whitespace-nowrap min-w-[42px]">M2-H</span>
                  <strong className="text-slate-950 text-sm font-extrabold">Hard Module 2 (Upper Track)</strong>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  Triggered by strong Module 1 results. Contains predominantly medium-to-hard and complex reasoning items.
                </p>
                <div className="text-[11px] text-slate-900 font-extrabold pt-1">
                  Score Range: Unlocks maximum potential up to 800!
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="px-2 h-7 rounded-lg bg-slate-950 text-white font-extrabold flex items-center justify-center text-[11px] whitespace-nowrap min-w-[42px]">M2-E</span>
                  <strong className="text-slate-950 text-sm font-extrabold">Easy Module 2 (Lower Track)</strong>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  Triggered if Module 1 accuracy drops below the routing threshold. Questions are easier to medium difficulty.
                </p>
                <div className="text-[11px] text-slate-900 font-extrabold pt-1">
                  Score Range: Section score is capped at ~600 – 650 maximum.
                </div>
              </div>
            </div>

            {/* Marking & Weighting Matrix */}
            <div className="border-t border-slate-100 pt-6 space-y-4">
              <h3 className="text-base font-extrabold text-slate-950 flex items-center gap-2">
                <Target className="w-5 h-5 text-slate-900" />
                Item Response Theory (IRT) & Scoring Mechanics
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                  <strong className="text-slate-950 text-sm block font-extrabold">1. Item Response Theory Weighting</strong>
                  <p className="text-slate-600 leading-relaxed">
                    Raw points are not strictly equal! Each question receives a statistical weight determined by 3-parameter IRT (difficulty, discrimination index, and guessing probability).
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                  <strong className="text-slate-950 text-sm block font-extrabold">2. Unscored Pretest / Field Questions</strong>
                  <p className="text-slate-600 leading-relaxed">
                    Every module includes <strong>2 unscored experimental questions</strong> (2 in R&W, 2 in Math). These questions calibrate future exam forms and do not impact your final score.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                  <strong className="text-slate-950 text-sm block font-extrabold">3. Absolute Zero Negative Marking</strong>
                  <p className="text-slate-600 leading-relaxed">
                    There is zero score penalty for incorrect answers or blind guesses. Never leave any question blank — guessing gives a minimum 25% chance of earning full points!
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                  <strong className="text-slate-950 text-sm block font-extrabold">4. Psychometric Equating & Scaling</strong>
                  <p className="text-slate-600 leading-relaxed">
                    Raw totals convert to a 200–800 scaled score through <em>equating</em>, guaranteeing that a 1400 on a harder test variant represents the identical ability as a 1400 on an easier form.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: Test Procedure & Bluebook Mechanics */}
      {activeTab === 'procedure' && (
        <div className="space-y-6">
          <div className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-slate-100 text-slate-900 flex items-center justify-center text-xl font-bold border border-slate-200">
                ⚙️
              </div>
              <div>
                <h2 className="text-xl font-black text-slate-950">Comprehensive Test Day Procedure & Bluebook Rules</h2>
                <p className="text-xs text-slate-500">Step-by-step room sequence, security guidelines, and technical mechanics.</p>
              </div>
            </div>

            <div className="space-y-5 text-xs">
              {/* Step 1 */}
              <div className="p-5 rounded-2xl bg-slate-50/80 border border-slate-200/80 flex flex-col sm:flex-row items-start gap-4">
                <span className="px-3.5 py-1.5 rounded-xl bg-slate-950 text-white font-extrabold text-xs shrink-0 shadow-sm border border-slate-900">
                  7:45 AM
                </span>
                <div className="space-y-2 flex-1">
                  <div className="flex items-center justify-between">
                    <strong className="text-slate-950 text-sm font-extrabold">Step 1: Arrival, Security Check & Room Assignment</strong>
                    <span className="text-[11px] font-bold text-slate-500 bg-white px-2.5 py-0.5 rounded-full border border-slate-200">Check-In</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    Test center doors close promptly at 8:00 AM. Arriving after 8:00 AM will result in forfeiture of your registration with no refund.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 text-[11px] text-slate-700">
                    <div className="p-2.5 rounded-xl bg-white border border-slate-200/80">
                      <strong className="text-slate-900 block font-bold">📋 Required Entry Documents:</strong>
                      <span>Printed physical Admission Ticket + Original unexpired Passport / Government ID.</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-white border border-slate-200/80">
                      <strong className="text-slate-900 block font-bold">🎒 Desk Approved Items:</strong>
                      <span>Testing device, charger cord, pencil/pen, physical calculator (optional backup to Desmos).</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="p-5 rounded-2xl bg-slate-50/80 border border-slate-200/80 flex flex-col sm:flex-row items-start gap-4">
                <span className="px-3.5 py-1.5 rounded-xl bg-slate-950 text-white font-extrabold text-xs shrink-0 shadow-sm border border-slate-900">
                  8:15 AM
                </span>
                <div className="space-y-2 flex-1">
                  <div className="flex items-center justify-between">
                    <strong className="text-slate-950 text-sm font-extrabold">Step 2: Device Pre-Check, Network Lock & Bluebook Sync</strong>
                    <span className="text-[11px] font-bold text-slate-500 bg-white px-2.5 py-0.5 rounded-full border border-slate-200">Device Prep</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    Connect your device to the test center's Wi-Fi network and launch the College Board Bluebook app in administrator lockdown mode.
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-slate-600 pl-1 leading-relaxed">
                    <li>Bluebook disables secondary monitors, background auto-updates, VPNs, and screen-capturing software automatically.</li>
                    <li>Ensure battery is 100% charged or connect your device directly to the wall outlet assigned by your proctor.</li>
                    <li>Place smartwatches, cell phones, and AirPods completely powered OFF inside your backpack away from desks.</li>
                  </ul>
                </div>
              </div>

              {/* Step 3 */}
              <div className="p-5 rounded-2xl bg-slate-50/80 border border-slate-200/80 flex flex-col sm:flex-row items-start gap-4">
                <span className="px-3.5 py-1.5 rounded-xl bg-slate-950 text-white font-extrabold text-xs shrink-0 shadow-sm border border-slate-900">
                  8:30 AM
                </span>
                <div className="space-y-2 flex-1">
                  <div className="flex items-center justify-between">
                    <strong className="text-slate-950 text-sm font-extrabold">Step 3: Proctor Start Code & Section 1 (Reading & Writing)</strong>
                    <span className="text-[11px] font-bold text-slate-800 bg-slate-200 px-2.5 py-0.5 rounded-full">64 Minutes</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    The proctor writes a unique 6-digit Start Code on the board. Enter this code to unlock Section 1 testing.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                    <div className="p-3 rounded-xl bg-white border border-slate-200/80 space-y-1">
                      <strong className="text-slate-900 block font-bold">Module 1 (27 Questions | 32 Mins)</strong>
                      <p className="text-slate-500 text-[11px] leading-relaxed">Baseline routing module containing all difficulty tiers. Must complete before timer runs out.</p>
                    </div>
                    <div className="p-3 rounded-xl bg-white border border-slate-200/80 space-y-1">
                      <strong className="text-slate-900 block font-bold">Module 2 (27 Questions | 32 Mins)</strong>
                      <p className="text-slate-500 text-[11px] leading-relaxed">Multistage adaptive difficulty track (Hard or Easy) determined by your Module 1 accuracy.</p>
                    </div>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-100 border border-slate-200/80 text-[11px] text-slate-700 space-y-1">
                    <strong className="text-slate-900 block font-bold">🛠️ Built-in Bluebook Exam Controls:</strong>
                    <span>Use the <strong>Mark for Review</strong> flag, <strong>Option Eliminator</strong> (strikethrough choice), <strong>Passage Highlighter/Annotator</strong>, and <strong>Question Matrix View</strong> to jump between questions.</span>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="p-5 rounded-2xl bg-slate-100/90 border border-slate-300 flex flex-col sm:flex-row items-start gap-4">
                <span className="px-3.5 py-1.5 rounded-xl bg-slate-950 text-white font-extrabold text-xs shrink-0 shadow-sm border border-slate-900">
                  9:35 AM
                </span>
                <div className="space-y-2 flex-1">
                  <div className="flex items-center justify-between">
                    <strong className="text-slate-950 text-sm font-extrabold">Step 4: Mandatory 10-Minute Intermission</strong>
                    <span className="text-[11px] font-bold text-slate-900 bg-white px-2.5 py-0.5 rounded-full border border-slate-300">Break Period</span>
                  </div>
                  <p className="text-slate-700 leading-relaxed font-medium">
                    When Reading & Writing ends, Bluebook locks into a 10-minute break timer. Close your laptop lid, but <strong>do NOT exit or close the Bluebook application</strong>.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px]">
                    <div className="p-2.5 rounded-xl bg-white border border-slate-200 text-slate-700">
                      <strong className="text-emerald-700 block font-bold">✅ Permitted Actions:</strong>
                      <span>Leave room to stretch, use restroom, drink water, and eat snacks in designated hallway.</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-white border border-slate-200 text-slate-700">
                      <strong className="text-rose-700 block font-bold">❌ Strict Violations:</strong>
                      <span>Do NOT touch cell phones, open backpacks, or discuss questions. Instant score cancellation!</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 5 */}
              <div className="p-5 rounded-2xl bg-slate-50/80 border border-slate-200/80 flex flex-col sm:flex-row items-start gap-4">
                <span className="px-3.5 py-1.5 rounded-xl bg-slate-950 text-white font-extrabold text-xs shrink-0 shadow-sm border border-slate-900">
                  9:45 AM
                </span>
                <div className="space-y-2 flex-1">
                  <div className="flex items-center justify-between">
                    <strong className="text-slate-950 text-sm font-extrabold">Step 5: Section 2 (Math) & Desmos Integration</strong>
                    <span className="text-[11px] font-bold text-slate-800 bg-slate-200 px-2.5 py-0.5 rounded-full">70 Minutes</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    Proctor distributes clean scratch paper and provides the Section 2 Start Code.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                    <div className="p-3 rounded-xl bg-white border border-slate-200/80 space-y-1">
                      <strong className="text-slate-900 block font-bold">Math Module 1 (22 Questions | 35 Mins)</strong>
                      <p className="text-slate-500 text-[11px] leading-relaxed">Full Desmos calculator allowed. Mix of Multiple Choice and Grid-In responses.</p>
                    </div>
                    <div className="p-3 rounded-xl bg-white border border-slate-200/80 space-y-1">
                      <strong className="text-slate-900 block font-bold">Math Module 2 (22 Questions | 35 Mins)</strong>
                      <p className="text-slate-500 text-[11px] leading-relaxed">Adaptive module based on M1 performance. Advanced Algebra, Geometry & Data analysis.</p>
                    </div>
                  </div>
                  <div className="p-3 rounded-xl bg-white border border-slate-200/80 text-[11px] text-slate-700 space-y-1">
                    <strong className="text-slate-900 block font-bold">✏️ Student-Produced Response (Grid-In) Rules:</strong>
                    <span>Input numerical values directly into the text box. Supports integers, decimals, and proper fractions up to 5 characters (e.g., 2/3, 0.75, -4/5). No mixed numbers allowed!</span>
                  </div>
                </div>
              </div>

              {/* Step 6 */}
              <div className="p-5 rounded-2xl bg-slate-50/80 border border-slate-200/80 flex flex-col sm:flex-row items-start gap-4">
                <span className="px-3.5 py-1.5 rounded-xl bg-slate-950 text-white font-extrabold text-xs shrink-0 shadow-sm border border-slate-900">
                  10:55 AM
                </span>
                <div className="space-y-2 flex-1">
                  <div className="flex items-center justify-between">
                    <strong className="text-slate-950 text-sm font-extrabold">Step 6: Automatic Upload, Encryption & Room Dismissal</strong>
                    <span className="text-[11px] font-bold text-slate-500 bg-white px-2.5 py-0.5 rounded-full border border-slate-200">Completion</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    Upon timer expiration, Bluebook encrypts your response payload and submits it directly to College Board servers via center Wi-Fi.
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-slate-600 pl-1 leading-relaxed">
                    <li>Verify that the green <strong>"Congratulations / Test Complete"</strong> screen displays on your device.</li>
                    <li>Hand all scratch paper back to the proctor (all sheets must be returned and shredded for test security).</li>
                    <li>Pack your device and belongings once the proctor officially announces room dismissal. Official scores publish online in 13-14 days!</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 4: 1500+ Prep & Learning Tips */}
      {activeTab === 'learning-tips' && (
        <div className="space-y-6">
          <div className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-slate-100 text-slate-900 flex items-center justify-center text-xl font-bold border border-slate-200">
                💡
              </div>
              <div>
                <h2 className="text-xl font-black text-slate-950">Top High-Yield Learning Tips for a 1500+ Score</h2>
                <p className="text-xs text-slate-500">Battle-tested preparation strategies used by 99th percentile scorers.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Reading & Writing Tips */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3 text-xs">
                <h3 className="font-extrabold text-slate-950 text-sm flex items-center gap-2">
                  📚 Reading & Writing Master Strategy
                </h3>
                <ul className="space-y-2 text-slate-700 list-disc list-inside">
                  <li><strong>Master Standard English Conventions First:</strong> Punctuation (commas, semicolons, dashes), subject-verb agreement, and modifier placement account for nearly 26% of R&W points! These follow strict mathematical rules.</li>
                  <li><strong>Read the Question Stem FIRST:</strong> Before reading a passage, check what is asked (e.g., main purpose, claim support, transition). This focuses your eyes on exact key sentences.</li>
                  <li><strong>Predict Transition Words:</strong> Cover the 4 choices in transition questions. Read sentence 1 and sentence 2, then predict "however", "therefore", or "furthermore" before looking at choices.</li>
                  <li><strong>Build High-Frequency Academic Vocabulary:</strong> Digital SAT uses words in context like <em>corroborate, bolster, implicit, underscore, pragmatic</em>. Review flashcards daily!</li>
                </ul>
              </div>

              {/* Math Tips */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3 text-xs">
                <h3 className="font-extrabold text-slate-950 text-sm flex items-center gap-2">
                  🧮 Math & Desmos Graphing Hacks
                </h3>
                <ul className="space-y-2 text-slate-700 list-disc list-inside">
                  <li><strong>Master Desmos Graphing Calculator:</strong> Learn to solve systems of equations by finding intersection points, finding x-intercepts for quadratic roots, and using <code className="bg-white px-1 py-0.5 rounded border border-slate-200 font-mono">~</code> for linear/quadratic regression. You can solve over 50% of Math questions in under 30 seconds with Desmos!</li>
                  <li><strong>Back-Solve with Answer Choices:</strong> When faced with complex variable equations, plug choice numbers directly into the equation or graph them to see which works.</li>
                  <li><strong>Watch Out for Grid-In Formats:</strong> Student-produced response items cannot have negative signs if it's a length, and fractions must fit within 5 characters (e.g. 2/3, not 0.6666).</li>
                  <li><strong>Pacing Rule:</strong> Spend no more than 60 seconds per easy question in Math Module 1 to bank 10+ extra minutes for tough Geometry & Advanced Algebra items in Module 2.</li>
                </ul>
              </div>
            </div>

            {/* Error Log Method - Clean White Box Color-Consistent */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-4">
              <h3 className="font-black text-slate-950 text-sm sm:text-base flex items-center gap-2">
                📓 The Secret Weapon: The Active Error Log
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Taking practice tests without reviewing errors is a waste of time. For every single question you miss on practice drills, record 3 key items in a notebook or digital log:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs pt-1">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                  <strong className="text-slate-950 block font-extrabold mb-1">1. Why did I miss it?</strong>
                  <span className="text-slate-600 text-[11px] leading-relaxed block">Categorize: Misread stem vs concept gap vs calculation slip vs pacing pressure.</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                  <strong className="text-slate-950 block font-extrabold mb-1">2. What is the rule?</strong>
                  <span className="text-slate-600 text-[11px] leading-relaxed block">Record the grammar law or math theorem (e.g. Semicolon connects independent clauses).</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                  <strong className="text-slate-950 block font-extrabold mb-1">3. Prevention Plan</strong>
                  <span className="text-slate-600 text-[11px] leading-relaxed block">Specify fix: Re-verify with Desmos or re-check sentence subject verb match.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab: Desmos Calculator Guide */}
      {activeTab === 'desmos' && (
        <div className="space-y-6">
          <div className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-slate-100 text-slate-900 flex items-center justify-center text-xl font-bold border border-slate-200">
                🧮
              </div>
              <div>
                <h2 className="text-xl font-black text-slate-950">Complete Desmos Calculator Power Guide</h2>
                <p className="text-xs text-slate-500">Purpose, step-by-step usage mechanics, syntax shortcuts, and paper solving power analysis.</p>
              </div>
            </div>

            {/* Key Stats Bar */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-2xl bg-slate-950 text-white space-y-1 shadow-sm border border-slate-900">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-300">Paper Solving Capacity</span>
                <div className="text-2xl font-black text-white">65% – 70%</div>
                <p className="text-[11px] text-slate-300 leading-tight">Over 28 to 32 out of 44 total Math questions can be solved or verified directly with Desmos!</p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-500">Integration Level</span>
                <div className="text-2xl font-black text-slate-950">100% Available</div>
                <p className="text-[11px] text-slate-600 leading-tight">Built directly inside College Board Bluebook app for ALL Math questions (Modules 1 & 2).</p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-500">Average Speedup</span>
                <div className="text-2xl font-black text-slate-950">15 - 30 Secs</div>
                <p className="text-[11px] text-slate-600 leading-tight">Solves complex multi-step algebra and systems in seconds without manual calculation errors.</p>
              </div>
            </div>

            {/* Section 1: Purpose of Desmos on Digital SAT */}
            <div className="space-y-3 border-t border-slate-100 pt-5">
              <h3 className="text-base font-extrabold text-slate-950 flex items-center gap-2">
                <Target className="w-5 h-5 text-slate-900" />
                Primary Purpose of Desmos in the Digital SAT
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                The College Board integrated a full-featured version of the <strong>Desmos Graphing Calculator</strong> directly into the Bluebook app interface to shift the exam's focus from tedious manual arithmetic toward <strong>higher-level mathematical reasoning and problem-solving</strong>. Desmos functions as an equalizer: students who master its syntax can bypass lengthy algebraic manipulation, instantly visualize functions, and eliminate arithmetic slips under tight exam time pressure.
              </p>
            </div>

            {/* Section 2: How Much of the Paper Can Desmos Solve? */}
            <div className="space-y-4 border-t border-slate-100 pt-5">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                <h3 className="text-base font-extrabold text-slate-950 flex items-center gap-2">
                  <BarChart2 className="w-5 h-5 text-slate-900" />
                  How Much of the SAT Math Paper Can Desmos Solve?
                </h3>
                <span className="px-3 py-1 rounded-full bg-slate-950 text-white text-xs font-black">28 – 32 / 44 Questions</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                  <div className="flex items-center justify-between">
                    <strong className="text-slate-950 text-sm font-extrabold">1. Algebra & Linear Equations</strong>
                    <span className="px-2 py-0.5 rounded bg-slate-200 text-slate-900 text-[10px] font-bold">~80% Solvable</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    Systems of 2 linear equations, parallel/perpendicular lines, linear inequalities, slope-intercept forms, and rate equations. Type both equations to read exact intersection points (x, y) instantly.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                  <div className="flex items-center justify-between">
                    <strong className="text-slate-950 text-sm font-extrabold">2. Advanced Math (Quadratic & Exponential)</strong>
                    <span className="px-2 py-0.5 rounded bg-slate-200 text-slate-900 text-[10px] font-bold">~75% Solvable</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    Quadratic roots/x-intercepts, vertex maximum/minimum points, exponential growth/decay curves, polynomial intersections, and function transformations f(x+c).
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                  <div className="flex items-center justify-between">
                    <strong className="text-slate-950 text-sm font-extrabold">3. Problem Solving & Data Analysis</strong>
                    <span className="px-2 py-0.5 rounded bg-slate-200 text-slate-900 text-[10px] font-bold">~50% Solvable</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    Scatter plot trend lines, linear & exponential regression using table data (y1 ~ m x1 + b), mean/median computations using built-in stats functions like <code className="bg-white px-1 py-0.5 rounded border border-slate-200 font-mono">mean()</code>.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                  <div className="flex items-center justify-between">
                    <strong className="text-slate-950 text-sm font-extrabold">4. Geometry & Trigonometry</strong>
                    <span className="px-2 py-0.5 rounded bg-slate-200 text-slate-900 text-[10px] font-bold">~30% Solvable</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    Circle equations (x-h)^2 + (y-k)^2 = r^2 for instant center and radius reading, coordinate distance visualizer, and trigonometric wave evaluations.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 3: Step-by-Step How To Use Desmos Hacks */}
            <div className="space-y-4 border-t border-slate-100 pt-5">
              <h3 className="text-base font-extrabold text-slate-950 flex items-center gap-2">
                <Zap className="w-5 h-5 text-slate-900" />
                Step-by-Step Desmos Power Hacks & Syntax Guide
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                {/* Hack 1 */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                  <strong className="text-slate-950 text-sm block font-extrabold">⚡ Hack 1: Solve Any System of Equations</strong>
                  <p className="text-slate-600 leading-relaxed">
                    Do not do substitution or elimination! Type equation 1 on line 1 (e.g. <code className="bg-white px-1 py-0.5 rounded border border-slate-200 font-mono">3x - 2y = 8</code>) and equation 2 on line 2 (e.g. <code className="bg-white px-1 py-0.5 rounded border border-slate-200 font-mono">y = x^2 - 4</code>).
                  </p>
                  <div className="p-2.5 rounded-xl bg-white border border-slate-200 text-[11px] text-slate-800 font-medium">
                    📍 <strong>Action:</strong> Click the grey intersection point on the graph. Desmos displays the exact coordinates <code className="font-mono text-slate-950">(x, y)</code> instantly!
                  </div>
                </div>

                {/* Hack 2 */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                  <strong className="text-slate-950 text-sm block font-extrabold">⚡ Hack 2: Quadratic Roots, Vertex & Min/Max</strong>
                  <p className="text-slate-600 leading-relaxed">
                    Type any quadratic equation (e.g. <code className="bg-white px-1 py-0.5 rounded border border-slate-200 font-mono">y = 2x^2 - 8x + 5</code>).
                  </p>
                  <div className="p-2.5 rounded-xl bg-white border border-slate-200 text-[11px] text-slate-800 font-medium">
                    📍 <strong>Action:</strong> Click grey dots on the x-axis for real roots. Click the turning point for vertex <code className="font-mono text-slate-950">(h, k)</code> and min/max values.
                  </div>
                </div>

                {/* Hack 3 */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                  <strong className="text-slate-950 text-sm block font-extrabold">⚡ Hack 3: Line / Curve of Best Fit (`~` Regression)</strong>
                  <p className="text-slate-600 leading-relaxed">
                    When given a data table, click <code className="bg-white px-1 py-0.5 rounded border border-slate-200 font-mono">+</code> → <code className="bg-white px-1 py-0.5 rounded border border-slate-200 font-mono">Table</code>. Enter x1 and y1 values. On the line below, type <code className="bg-white px-1 py-0.5 rounded border border-slate-200 font-mono">y1 ~ m x1 + b</code> or <code className="bg-white px-1 py-0.5 rounded border border-slate-200 font-mono">y1 ~ a(b)^x1</code>.
                  </p>
                  <div className="p-2.5 rounded-xl bg-white border border-slate-200 text-[11px] text-slate-800 font-medium">
                    📍 <strong>Action:</strong> Desmos calculates exact slope <code className="font-mono text-slate-950">m</code>, y-intercept <code className="font-mono text-slate-950">b</code>, and growth factor <code className="font-mono text-slate-950">a, b</code>.
                  </div>
                </div>

                {/* Hack 4 */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                  <strong className="text-slate-950 text-sm block font-extrabold">⚡ Hack 4: Solve Complex Single-Variable Equations</strong>
                  <p className="text-slate-600 leading-relaxed">
                    When asked to solve <code className="bg-white px-1 py-0.5 rounded border border-slate-200 font-mono">4(3x - 5) = 2x + 15</code>, type <code className="bg-white px-1 py-0.5 rounded border border-slate-200 font-mono">y = 4(3x - 5)</code> on line 1 and <code className="bg-white px-1 py-0.5 rounded border border-slate-200 font-mono">y = 2x + 15</code> on line 2.
                  </p>
                  <div className="p-2.5 rounded-xl bg-white border border-slate-200 text-[11px] text-slate-800 font-medium">
                    📍 <strong>Action:</strong> Click the vertical line or line intersection. The x-value is your exact answer!
                  </div>
                </div>

                {/* Hack 5 */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                  <strong className="text-slate-950 text-sm block font-extrabold">⚡ Hack 5: Instant Circle Radius & Center</strong>
                  <p className="text-slate-600 leading-relaxed">
                    Type any circle equation in standard or general form (e.g. <code className="bg-white px-1 py-0.5 rounded border border-slate-200 font-mono">x^2 + y^2 - 10x + 6y = 15</code>).
                  </p>
                  <div className="p-2.5 rounded-xl bg-white border border-slate-200 text-[11px] text-slate-800 font-medium">
                    📍 <strong>Action:</strong> Desmos renders the circle. Click top, bottom, left, or center bounds to determine center <code className="font-mono text-slate-950">(h, k)</code> and radius <code className="font-mono text-slate-950">r</code> without completing the square!
                  </div>
                </div>

                {/* Hack 6 */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                  <strong className="text-slate-950 text-sm block font-extrabold">⚡ Hack 6: Interactive Sliders for Unknown Constants</strong>
                  <p className="text-slate-600 leading-relaxed">
                    For questions like "For what value of k does the system have no solutions?", type <code className="bg-white px-1 py-0.5 rounded border border-slate-200 font-mono">kx + 4y = 12</code> and click <code className="bg-white px-1 py-0.5 rounded border border-slate-200 font-mono">add slider for k</code>.
                  </p>
                  <div className="p-2.5 rounded-xl bg-white border border-slate-200 text-[11px] text-slate-800 font-medium">
                    📍 <strong>Action:</strong> Drag the k slider until the lines become parallel (no solutions) or coincide (infinitely many solutions)!
                  </div>
                </div>
              </div>
            </div>

            {/* Section 4: Pro-Tips in Bluebook */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3 text-xs">
              <strong className="text-slate-950 font-extrabold text-sm block">⚙️ Essential Bluebook Desmos Settings & Best Practices</strong>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-slate-700">
                <div className="p-3 bg-white rounded-xl border border-slate-200">
                  <strong className="text-slate-900 block font-bold mb-1">📐 Radians vs Degrees</strong>
                  <span>Always check the wrench icon (top right) to ensure Desmos is set to <strong>Degrees</strong> for standard trigonometry questions!</span>
                </div>
                <div className="p-3 bg-white rounded-xl border border-slate-200">
                  <strong className="text-slate-900 block font-bold mb-1">🔍 Zoom & Reset Window</strong>
                  <span>Use <code className="font-mono bg-slate-100 px-1 py-0.5 rounded">+ / -</code> buttons or click the <strong>House icon</strong> to reset graph view if functions disappear off-screen.</span>
                </div>
                <div className="p-3 bg-white rounded-xl border border-slate-200">
                  <strong className="text-slate-900 block font-bold mb-1">⌨️ Keypad & Functions</strong>
                  <span>Click the keypad icon at bottom-left to access trigonometry (<code className="font-mono">sin, cos, tan</code>), logarithms (<code className="font-mono">log</code>), and statistics (<code className="font-mono">mean, median</code>).</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 5: Application & Dates */}
      {activeTab === 'application' && (
        <div className="space-y-6">
          <div className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-slate-100 text-slate-900 flex items-center justify-center text-xl font-bold border border-slate-200">
                📅
              </div>
              <div>
                <h2 className="text-xl font-black text-slate-950">How Many Times a Year Does SAT Happen?</h2>
                <p className="text-xs text-slate-500">Global testing dates, registration steps, and international center rules.</p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              The Digital SAT is administered globally across <strong>7 official test windows each year</strong>:
            </p>

            {/* 7 Dates Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-bold text-slate-800">
              {['🌸 March', '🌱 May', '☀️ June', '🏖️ August', '🍂 October', '🍁 November', '❄️ December'].map((month, i) => (
                <div key={i} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 text-center flex flex-col items-center justify-center gap-1">
                  <span>{month}</span>
                  <span className="text-[10px] text-slate-500 font-normal">International Test Date</span>
                </div>
              ))}
              <div className="p-3.5 rounded-xl bg-slate-950 text-white border border-slate-900 text-center flex flex-col items-center justify-center gap-1">
                <span className="font-black">Unlimited Attempts</span>
                <span className="text-[10px] text-slate-300 font-normal">Take as many as needed</span>
              </div>
            </div>

            {/* Application Step-by-Step */}
            <div className="border-t border-slate-100 pt-6 space-y-4">
              <h3 className="text-base font-extrabold text-slate-950 flex items-center gap-2">
                <UserCheck className="w-5 h-5 text-slate-900" />
                Step-by-Step Official SAT Registration Process
              </h3>

              <div className="space-y-3 text-xs">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-slate-950 text-white font-extrabold flex items-center justify-center text-xs shrink-0 mt-0.5">1</span>
                  <div>
                    <strong className="text-slate-950 text-sm font-extrabold">Create a College Board Student Account</strong>
                    <p className="text-slate-600 mt-0.5">Visit <code className="bg-slate-200 px-1 py-0.5 rounded text-slate-900 font-mono">collegeboard.org</code> and set up your profile. Ensure your legal name matches your valid passport or government ID exactly.</p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-slate-950 text-white font-extrabold flex items-center justify-center text-xs shrink-0 mt-0.5">2</span>
                  <div>
                    <strong className="text-slate-950 text-sm font-extrabold">Select Test Month & Authorized Center</strong>
                    <p className="text-slate-600 mt-0.5">Choose your preferred test month and pick an authorized high school or university test center near your region. Test center seats fill up quickly 1–2 months prior!</p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-slate-950 text-white font-extrabold flex items-center justify-center text-xs shrink-0 mt-0.5">3</span>
                  <div>
                    <strong className="text-slate-950 text-sm font-extrabold">Pay Registration Fee or Request Fee Waiver</strong>
                    <p className="text-slate-600 mt-0.5">Standard Base SAT Registration Fee is <strong>$68 USD</strong> + <strong>$43 USD</strong> International Regional Fee (Total: <strong>~$111 USD</strong>). Eligible students can apply for College Board Fee Waivers covering test fees and score reports.</p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-slate-950 text-white font-extrabold flex items-center justify-center text-xs shrink-0 mt-0.5">4</span>
                  <div>
                    <strong className="text-slate-950 text-sm font-extrabold">Download Bluebook App & Print Ticket</strong>
                    <p className="text-slate-600 mt-0.5">Install the Bluebook application 1–2 weeks before your test day to complete exam setup and print your mandatory paper Admission Ticket.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 6: Percentiles & Universities */}
      {activeTab === 'percentiles' && (
        <div className="space-y-6">
          <div className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-slate-100 text-slate-900 flex items-center justify-center text-xl font-bold border border-slate-200">
                📊
              </div>
              <div>
                <h2 className="text-xl font-black text-slate-950">SAT Score Percentiles & University Targets</h2>
                <p className="text-xs text-slate-500">Global rank breakdown and scholarship eligibility benchmarks.</p>
              </div>
            </div>

            {/* Percentile Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50 text-slate-950 font-extrabold">
                    <th className="p-3.5">SAT Score Range</th>
                    <th className="p-3.5">Global Percentile Rank</th>
                    <th className="p-3.5">Target Universities & Admissions Tier</th>
                    <th className="p-3.5">Scholarship Prospect</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-medium">
                  <tr className="hover:bg-slate-50/80">
                    <td className="p-3.5 font-black text-slate-950">1500 – 1600</td>
                    <td className="p-3.5 font-bold text-slate-900">99th Percentile (Top 1%)</td>
                    <td className="p-3.5 text-slate-800">Harvard, MIT, Stanford, Oxford, Cambridge, Princeton</td>
                    <td className="p-3.5 text-slate-950 font-bold">Full-Ride Merit Scholarships</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80">
                    <td className="p-3.5 font-black text-slate-950">1400 – 1490</td>
                    <td className="p-3.5 font-bold text-slate-900">95th – 98th Percentile</td>
                    <td className="p-3.5 text-slate-800">NYU, UC Berkeley, Toronto, Imperial, LUMS (Full Exemption)</td>
                    <td className="p-3.5 text-slate-950 font-bold">High Merit Grants (75-100%)</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80">
                    <td className="p-3.5 font-black text-slate-950">1300 – 1390</td>
                    <td className="p-3.5 font-bold text-slate-900">87th – 94th Percentile</td>
                    <td className="p-3.5 text-slate-800">NUST, GIKI, IBA Karachi, Top European & Asian Unis</td>
                    <td className="p-3.5 text-slate-950 font-bold">Partial Merit Scholarships</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80">
                    <td className="p-3.5 font-black text-slate-950">1200 – 1290</td>
                    <td className="p-3.5 font-bold text-slate-900">75th – 86th Percentile</td>
                    <td className="p-3.5 text-slate-800">State Universities, Turkish Public Unis, Global Baseline</td>
                    <td className="p-3.5 text-slate-600">Standard Financial Aid</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80">
                    <td className="p-3.5 font-bold text-slate-500">1000 – 1190</td>
                    <td className="p-3.5 font-bold text-slate-600">50th – 74th Percentile</td>
                    <td className="p-3.5 text-slate-600">National Average Range (~1050)</td>
                    <td className="p-3.5 text-slate-500">Need-Based Aid</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* Tab 7: Test Day Checklist */}
      {activeTab === 'checklist' && (
        <div className="space-y-6">
          <div className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-slate-100 text-slate-900 flex items-center justify-center text-xl font-bold border border-slate-200">
                🎒
              </div>
              <div>
                <h2 className="text-xl font-black text-slate-950">Official Test Day Checklist & Regulations</h2>
                <p className="text-xs text-slate-500">Complete items list, security guidelines, and test center rules.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                <span className="font-extrabold text-slate-950 text-sm flex items-center gap-2">
                  <CheckSquare className="w-4 h-4 text-slate-900" /> Mandatory Checklist Items
                </span>
                <ul className="space-y-1.5 text-slate-700 list-disc list-inside">
                  <li><strong>Fully Charged Device:</strong> Laptop (Mac/Windows), iPad, or Chromebook with Bluebook installed.</li>
                  <li><strong>Valid Original ID:</strong> Unexpired Passport or National ID Card matching registered name.</li>
                  <li><strong>Printed Admission Ticket:</strong> Paper copy generated from Bluebook app after exam setup.</li>
                  <li><strong>Power Cable / Charger:</strong> Backup charger for your testing device.</li>
                  <li><strong>Pencil or Pen:</strong> For scratch paper provided at the center.</li>
                </ul>
              </div>

              {/* Formerly yellow box converted to color-consistent neutral card */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                <span className="font-extrabold text-slate-950 text-sm flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-slate-900" /> Critical Test Center Rules & Security
                </span>
                <ul className="space-y-1.5 text-slate-700 list-disc list-inside">
                  <li>Arrive by <strong>7:45 AM</strong> (Doors lock at 8:00 AM sharp with zero exceptions).</li>
                  <li>Mobile phones and smartwatches must be completely powered OFF and stowed away.</li>
                  <li>Scratch paper is provided by the invigilator and collected before dismissal.</li>
                  <li>Mandatory 10-minute intermission between Reading & Writing and Math sections.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

