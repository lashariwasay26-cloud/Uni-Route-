import React from 'react';
import { motion } from 'motion/react';
import { BookOpen } from 'lucide-react';

interface InteractivePageLoaderProps {
  title?: string;
  subtitle?: string;
  className?: string;
  icon?: React.ReactNode;
}

export const InteractivePageLoader: React.FC<InteractivePageLoaderProps> = ({
  title = "Loading Chapter Content",
  subtitle = "Assembling curriculum modules, structured analytics, and interactive practice questions...",
  className = "",
  icon
}) => {
  return (
    <div id="interactive-page-loader" className={`w-full min-h-[380px] flex flex-col items-center justify-center p-4 sm:p-8 text-center animate-fade-in ${className}`}>
      <div className="bg-white border border-slate-200/90 rounded-3xl p-8 sm:p-12 w-full max-w-xl flex flex-col items-center justify-center text-center shadow-xs">
        {/* Animated circular loader ring with center icon */}
        <div className="relative w-16 h-16 mb-5 flex items-center justify-center">
          <motion.div 
            className="absolute inset-0 rounded-full border-[2.5px] border-indigo-100 border-t-indigo-600"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 0.9, ease: "linear" }}
          />
          <div className="w-12 h-12 rounded-full bg-indigo-50/60 border border-indigo-100/60 flex items-center justify-center text-indigo-600 shadow-2xs">
            {icon || <BookOpen className="w-6 h-6 text-indigo-600" />}
          </div>
        </div>

        {/* Dynamic Status Text */}
        <div className="space-y-1.5 max-w-md">
          <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
            {title}
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed">
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
};
