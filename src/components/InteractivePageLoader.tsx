import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, BookOpen, GraduationCap, BrainCircuit, Globe, Rocket } from 'lucide-react';

const ACADEMIC_TRIVIA_TIPS = [
  {
    icon: <Sparkles className="w-5 h-5 text-amber-500 animate-pulse" />,
    tag: "SAT Vocabulary Strategy",
    text: "When facing tough context vocab questions, look for contrast indicators like 'albeit', 'subverted', or 'nevertheless' to find the perfect antonym logic."
  },
  {
    icon: <GraduationCap className="w-5 h-5 text-indigo-500 animate-pulse" />,
    tag: "Global Scholarship Tip",
    text: "Fully funded governmental scholarships (like Ehsaas, HEC, or Commonwealth) prioritize active community leadership and social impact essays over pure grades."
  },
  {
    icon: <BrainCircuit className="w-5 h-5 text-emerald-500 animate-pulse" />,
    tag: "SAT Math Speed Tip",
    text: "When a system has 'exactly one real solution', set the quadratic discriminant D = b² - 4ac strictly equal to zero to isolate the variable instantly."
  },
  {
    icon: <BookOpen className="w-5 h-5 text-rose-500 animate-pulse" />,
    tag: "Essay Rhetoric Strategy",
    text: "Show, don't tell. Instead of writing 'I am a highly determined student', describe the exact 5:00 AM routines you built to master your coursework."
  },
  {
    icon: <Globe className="w-5 h-5 text-sky-500 animate-pulse" />,
    tag: "University Matching Strategy",
    text: "Admissions officers look for 'Institutional Fit'. Match your application profile with the university's active research grants or core campus values."
  },
  {
    icon: <Rocket className="w-5 h-5 text-violet-500 animate-pulse" />,
    tag: "Interactive Smart Prep",
    text: "Taking a 5-second diagnostic stretch relaxes cognitive stress, lowering test-day performance anxiety by up to 22%."
  }
];

interface InteractivePageLoaderProps {
  title?: string;
  subtitle?: string;
  className?: string;
}

export const InteractivePageLoader: React.FC<InteractivePageLoaderProps> = ({
  title = "Loading Premium Assets",
  subtitle,
  className = ""
}) => {
  const [tipIndex, setTipIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  // Cycle through interesting academic tips while loading
  useEffect(() => {
    const tipInterval = setInterval(() => {
      setTipIndex((prev) => (prev + 1) % ACADEMIC_TRIVIA_TIPS.length);
    }, 4000);

    // Simulated progress bar animation
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 95) return prev;
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 150);

    return () => {
      clearInterval(tipInterval);
      clearInterval(progressInterval);
    };
  }, []);

  const currentTip = ACADEMIC_TRIVIA_TIPS[tipIndex];

  return (
    <div id="interactive-page-loader" className={`w-full min-h-[450px] flex flex-col items-center justify-center p-6 sm:p-12 text-center animate-fade-in ${className}`}>
      <div className="max-w-md w-full flex flex-col items-center">
        {/* Glowing Geometric Spinner Container */}
        <div className="relative w-20 h-20 mb-8 flex items-center justify-center">
          {/* Outer glowing pulsing orb */}
          <div className="absolute inset-0 rounded-3xl bg-indigo-500/10 blur-xl animate-pulse" />
          
          {/* Animated orbiting elements */}
          <motion.div 
            className="absolute inset-0 rounded-2xl border-4 border-dashed border-indigo-600/40"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
          />
          <motion.div 
            className="absolute w-16 h-16 rounded-2xl border-4 border-indigo-600 border-t-transparent border-b-transparent"
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          />
          
          {/* Core Animated Letter */}
          <div className="absolute w-10 h-10 rounded-xl bg-slate-950 text-white font-black text-lg flex items-center justify-center shadow-md animate-bounce">
            U
          </div>
        </div>

        {/* Dynamic Status Text */}
        <div className="space-y-1 mb-6">
          <h3 className="text-sm font-black tracking-wider text-slate-800 uppercase">
            {title}
          </h3>
          <p className="text-xs font-bold text-slate-500">
            {subtitle || `Chambering interactive hubs... ${Math.min(progress, 100)}%`}
          </p>
        </div>

        {/* Custom Progress Beam */}
        <div className="w-48 h-1.5 bg-slate-100 rounded-full overflow-hidden border border-slate-200/50 mb-10">
          <motion.div 
            className="h-full bg-gradient-to-r from-indigo-500 via-indigo-600 to-indigo-700 rounded-full"
            style={{ width: `${Math.min(progress, 100)}%` }}
            transition={{ ease: "easeOut", duration: 0.2 }}
          />
        </div>

        {/* Live Academic Trivia & Tip Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={tipIndex}
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.3 }}
            className="w-full bg-white border border-slate-200/80 rounded-2xl p-5 shadow-xs text-left relative overflow-hidden"
          >
            {/* Subtle light background highlight */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-slate-50 rounded-full -mr-8 -mt-8 pointer-events-none opacity-50" />
            
            <div className="flex items-center gap-2.5 mb-2.5">
              <div className="p-1.5 rounded-lg bg-slate-50 border border-slate-100 shrink-0">
                {currentTip.icon}
              </div>
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400">
                {currentTip.tag}
              </span>
            </div>
            
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-semibold">
              {currentTip.text}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
