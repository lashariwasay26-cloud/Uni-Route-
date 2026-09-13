import React from 'react';
import { Sparkles, Globe, Award, BookOpen, CheckCircle2, GraduationCap, Flag, PenTool, DollarSign } from 'lucide-react';

interface FloatingIconsGatewayProps {
  onOpenScholarships?: () => void;
  onOpenSatPrep?: () => void;
  onOpenPakistaniScholarships?: () => void;
  onOpenAiAnalysis?: () => void;
  onOpenEssayHub?: () => void;
}

export const FloatingIconsGateway: React.FC<FloatingIconsGatewayProps> = ({
  onOpenScholarships,
  onOpenSatPrep,
  onOpenPakistaniScholarships,
  onOpenAiAnalysis,
  onOpenEssayHub,
}) => {
  return (
    <div id="floating-gateway" className="relative py-4 sm:py-14 px-3 sm:px-4 max-w-5xl mx-auto text-center">
      
      {/* Background Soft Ambient Light Glow & Floating Orbs */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[500px] h-[320px] sm:h-[500px] pointer-events-none -z-10"
        style={{
          background: 'radial-gradient(circle, rgba(165, 180, 252, 0.3) 0%, rgba(216, 180, 254, 0.15) 35%, rgba(110, 231, 183, 0.05) 60%, rgba(255, 255, 255, 0) 100%)'
        }}
      />

      {/* Clean Static Ambient Badges (Decorative) */}
      <div className="hidden md:flex absolute top-6 left-4 lg:-left-8 bg-white border border-slate-200/90 rounded-full px-3.5 py-1.5 shadow-xs text-xs font-bold text-slate-800 items-center gap-2 -z-0 pointer-events-none">
        <GraduationCap className="w-4 h-4 text-indigo-600 shrink-0" />
        <span>200+ Global Universities</span>
      </div>

      <div className="hidden md:flex absolute top-12 right-4 lg:-right-8 bg-white border border-slate-200/90 rounded-full px-3.5 py-1.5 shadow-xs text-xs font-bold text-slate-800 items-center gap-2 -z-0 pointer-events-none">
        <DollarSign className="w-4 h-4 text-emerald-600 shrink-0" />
        <span>$50M+ In Scholarships</span>
      </div>

      <div className="hidden lg:flex absolute bottom-28 -left-10 bg-white border border-slate-200/90 rounded-full px-3.5 py-1.5 shadow-xs text-xs font-bold text-slate-800 items-center gap-2 -z-0 pointer-events-none">
        <Flag className="w-4 h-4 text-emerald-600 shrink-0" />
        <span>HEC & Ehsaas Tracks</span>
      </div>

      <div className="hidden lg:flex absolute bottom-28 -right-10 bg-white border border-slate-200/90 rounded-full px-3.5 py-1.5 shadow-xs text-xs font-bold text-slate-800 items-center gap-2 -z-0 pointer-events-none">
        <Sparkles className="w-4 h-4 text-amber-500 shrink-0" />
        <span>100% Free Guidance</span>
      </div>

      {/* Pill Eyebrow Tag matching design */}
      <div className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-full bg-white border border-slate-200/80 shadow-[0_2px_12px_rgba(0,0,0,0.04)] text-[10px] sm:text-[11px] font-extrabold tracking-[0.15em] sm:tracking-[0.2em] text-slate-600 uppercase mb-3 sm:mb-8">
        <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-indigo-600 animate-pulse" />
        YOUR GLOBAL EDUCATION ROUTE
      </div>

      {/* Hero Headline */}
      <h1 className="text-2xl sm:text-6xl md:text-7xl font-black text-slate-950 tracking-tight leading-[1.12] sm:leading-[1.08] max-w-3xl mx-auto">
        Your journey to<br />
        <span className="bg-gradient-to-r from-indigo-600 via-indigo-700 to-purple-600 bg-clip-text text-transparent">
          the right university
        </span><br />
        starts here.
      </h1>

      {/* Subtitle paragraph */}
      <p className="mt-2.5 sm:mt-6 text-slate-600 text-xs sm:text-base md:text-lg max-w-xl mx-auto leading-relaxed font-normal px-1">
        Discover scholarships, prepare for the SAT, build your application, and find universities that match your goals — all in one place.
      </p>

      {/* Stats Highlight Ribbon */}
      <div className="mt-4 sm:mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-[11px] sm:text-xs font-bold text-slate-600">
        <span className="px-2.5 sm:px-3 py-1 rounded-full bg-slate-100/90 border border-slate-200/60 flex items-center gap-1.5">
          <Globe className="w-3.5 h-3.5 text-indigo-600" /> 200+ Global Universities
        </span>
        <span className="px-2.5 sm:px-3 py-1 rounded-full bg-slate-100/90 border border-slate-200/60 flex items-center gap-1.5">
          <Award className="w-3.5 h-3.5 text-emerald-600" /> Fully Funded Grants
        </span>
        <span className="px-2.5 sm:px-3 py-1 rounded-full bg-slate-100/90 border border-slate-200/60 flex items-center gap-1.5">
          <BookOpen className="w-3.5 h-3.5 text-amber-600" /> Digital SAT Prep
        </span>
      </div>

      {/* Interactive Cards Grid */}
      <div className="mt-6 sm:mt-14 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-5 max-w-3xl mx-auto">
        
        {/* Card 1: Scholarships */}
        <div
          onClick={onOpenScholarships}
          className="bg-white hover:bg-slate-50 text-slate-900 border border-slate-200/90 rounded-2xl sm:rounded-[28px] p-3.5 sm:p-5 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:border-indigo-300 hover:shadow-lg hover:-translate-y-1 active:scale-[0.98] cursor-pointer transition-all duration-200 ease-out transform-gpu will-change-transform flex flex-col items-center justify-center text-center min-h-[130px] sm:min-h-[180px] group relative overflow-hidden"
        >
          <div className="w-10 h-10 sm:w-13 sm:h-13 rounded-xl sm:rounded-2xl bg-indigo-50 group-hover:bg-indigo-100 flex items-center justify-center mb-2 sm:mb-3 text-indigo-600 transition-colors shadow-xs shrink-0">
            <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <span className="text-xs sm:text-base font-black text-slate-950 tracking-tight transition-colors">
            Scholarships
          </span>
          <span className="text-[10px] sm:text-[11px] text-slate-500 transition-colors mt-0.5 font-semibold">
            Global & Merit Grants
          </span>
        </div>

        {/* Card 2: SAT Preparation */}
        <div
          onClick={onOpenSatPrep}
          className="bg-white hover:bg-slate-50 text-slate-900 border border-slate-200/90 rounded-2xl sm:rounded-[28px] p-3.5 sm:p-5 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:border-blue-300 hover:shadow-lg hover:-translate-y-1 active:scale-[0.98] cursor-pointer transition-all duration-200 ease-out transform-gpu will-change-transform flex flex-col items-center justify-center text-center min-h-[130px] sm:min-h-[180px] group relative overflow-hidden"
        >
          <div className="w-10 h-10 sm:w-13 sm:h-13 rounded-xl sm:rounded-2xl bg-blue-50 group-hover:bg-blue-100 flex items-center justify-center mb-2 sm:mb-3 text-blue-600 transition-colors shadow-xs shrink-0">
            <BookOpen className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <span className="text-xs sm:text-base font-black text-slate-950 tracking-tight transition-colors">
            SAT Preparation
          </span>
          <span className="text-[10px] sm:text-[11px] text-slate-500 transition-colors mt-0.5 font-semibold">
            Practice Modules
          </span>
        </div>

        {/* Card 3: Pakistani Scholarships */}
        <div
          onClick={onOpenPakistaniScholarships || onOpenScholarships}
          className="bg-white hover:bg-slate-50 text-slate-900 border border-slate-200/90 rounded-2xl sm:rounded-[28px] p-3.5 sm:p-5 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:border-emerald-300 hover:shadow-lg hover:-translate-y-1 active:scale-[0.98] cursor-pointer transition-all duration-200 ease-out transform-gpu will-change-transform flex flex-col items-center justify-center text-center min-h-[130px] sm:min-h-[180px] group relative overflow-hidden"
        >
          <div className="w-10 h-10 sm:w-13 sm:h-13 rounded-xl sm:rounded-2xl bg-emerald-50 group-hover:bg-emerald-100 flex items-center justify-center mb-2 sm:mb-3 text-emerald-600 transition-colors shadow-xs shrink-0">
            <Flag className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <span className="text-xs sm:text-base font-black text-slate-950 tracking-tight transition-colors">
            Pakistani Scholarships
          </span>
          <span className="text-[10px] sm:text-[11px] text-slate-500 transition-colors mt-0.5 font-semibold">
            HEC, Ehsaas, PEEF
          </span>
        </div>

        {/* Card 4: Essay Hub */}
        <div
          onClick={onOpenEssayHub}
          className="bg-white hover:bg-slate-50 text-slate-900 border border-slate-200/90 rounded-2xl sm:rounded-[28px] p-3.5 sm:p-5 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:border-amber-300 hover:shadow-lg hover:-translate-y-1 active:scale-[0.98] cursor-pointer transition-all duration-200 ease-out transform-gpu will-change-transform flex flex-col items-center justify-center text-center min-h-[130px] sm:min-h-[180px] group relative overflow-hidden"
        >
          <div className="w-10 h-10 sm:w-13 sm:h-13 rounded-xl sm:rounded-2xl bg-amber-50 group-hover:bg-amber-100 flex items-center justify-center mb-2 sm:mb-3 text-amber-600 transition-colors shadow-xs shrink-0">
            <PenTool className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <span className="text-xs sm:text-base font-black text-slate-950 tracking-tight transition-colors">
            Essay Hub
          </span>
          <span className="text-[10px] sm:text-[11px] text-slate-500 transition-colors mt-0.5 font-semibold">
            Builder & AI Review
          </span>
        </div>

        {/* Card 5: AI Profile Analysis */}
        <div
          onClick={onOpenAiAnalysis}
          className="col-span-2 sm:col-span-2 lg:col-span-4 bg-white hover:bg-purple-50/40 text-slate-900 border border-slate-200/90 rounded-[28px] p-5 sm:p-6 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:border-purple-300 hover:shadow-md hover:-translate-y-0.5 active:scale-[0.99] cursor-pointer transition-all duration-200 ease-out transform-gpu will-change-transform flex items-center justify-center gap-4 text-left min-h-[90px] group"
        >
          <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-700 group-hover:bg-purple-200 flex items-center justify-center shrink-0 transition-colors shadow-xs">
            <Sparkles className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <span className="text-sm sm:text-base font-black text-slate-950 block tracking-tight transition-colors">
              AI Profile Analysis & Counselor
            </span>
            <span className="text-xs text-slate-600 transition-colors font-medium">
              Personalized university matching, target score estimation, and admissions guidance.
            </span>
          </div>
        </div>

      </div>
    </div>
  );
};



