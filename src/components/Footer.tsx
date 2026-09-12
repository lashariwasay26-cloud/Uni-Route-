import React from 'react';
import { GraduationCap, Heart, Globe, Mail, Shield, BookOpen, Compass } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="app-footer" className="mt-20 border-t border-slate-200/80 bg-white text-slate-600 text-xs py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          
          {/* Brand Col */}
          <div className="space-y-3 sm:col-span-2">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-slate-950 text-white font-extrabold text-sm flex items-center justify-center">
                U
              </div>
              <span className="font-black text-lg tracking-tight text-slate-950">
                Uni Route
              </span>
            </div>
            <p className="text-slate-500 leading-relaxed text-xs max-w-sm">
              Your comprehensive higher education launchpad. Helping students worldwide and across Pakistan discover scholarships, prepare for SATs, draft Common App essays, and find the right university path.
            </p>
            <div className="flex items-center gap-2 text-indigo-600 font-semibold text-[11px]">
              <Globe className="w-3.5 h-3.5" />
              <span>Global & National Admissions Portal</span>
            </div>
          </div>

          {/* Quick Hub Links */}
          <div>
            <h4 className="font-bold text-slate-900 mb-3 text-xs uppercase tracking-wider">
              Education Hubs
            </h4>
            <ul className="space-y-2 text-slate-500 font-medium">
              <li><span className="hover:text-indigo-600 transition-colors cursor-pointer">Global Scholarships</span></li>
              <li><span className="hover:text-indigo-600 transition-colors cursor-pointer">Digital SAT Practice</span></li>
              <li><span className="hover:text-indigo-600 transition-colors cursor-pointer">Pakistani Grants & HEC</span></li>
              <li><span className="hover:text-indigo-600 transition-colors cursor-pointer">Common App Essay Hub</span></li>
              <li><span className="hover:text-indigo-600 transition-colors cursor-pointer">AI Profile Matcher</span></li>
            </ul>
          </div>

          {/* Resources & Support */}
          <div>
            <h4 className="font-bold text-slate-900 mb-3 text-xs uppercase tracking-wider">
              Resources
            </h4>
            <ul className="space-y-2 text-slate-500 font-medium">
              <li><span className="hover:text-indigo-600 transition-colors cursor-pointer">Accepted Essay Examples</span></li>
              <li><span className="hover:text-indigo-600 transition-colors cursor-pointer">SAT Target Score Guide</span></li>
              <li><span className="hover:text-indigo-600 transition-colors cursor-pointer">HEC Document Attestation</span></li>
              <li><span className="hover:text-indigo-600 transition-colors cursor-pointer">FAQ & Help Center</span></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar / Copyright */}
        <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-400 font-normal">
          <p>© {new Date().getFullYear()} Uni Route. All rights reserved.</p>
          <div className="flex items-center gap-1">
            <span>Built for students with</span>
            <Heart className="w-3 h-3 text-red-500 fill-red-500 inline" />
            <span>for higher education guidance.</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
