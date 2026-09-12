import React, { useState } from 'react';
import { Menu, X, Sparkles, GraduationCap, BookOpen, Home, PenTool, LogOut, User } from 'lucide-react';

interface NavbarProps {
  onNavigateHome?: () => void;
  onNavigateScholarships?: () => void;
  onNavigateSat?: () => void;
  onNavigateAiAnalysis?: () => void;
  onNavigateEssayHub?: () => void;
  currentView?: string;
  user?: { email: string; id: string } | null;
  onOpenAuth?: () => void;
  onLogout?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onNavigateHome,
  onNavigateScholarships,
  onNavigateSat,
  onNavigateAiAnalysis,
  onNavigateEssayHub,
  currentView = 'home',
  user = null,
  onOpenAuth,
  onLogout,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header id="app-navbar" className="sticky top-0 z-50 bg-[#f6f8fc] border-b border-slate-200/80 text-slate-900 shadow-xs">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        
        {/* Brand Logo matching image: Dark 'U' box + Uni Route text */}
        <div
          id="nav-brand-logo"
          onClick={onNavigateHome}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="w-11 h-11 rounded-2xl bg-slate-950 text-white font-extrabold text-xl flex items-center justify-center shadow-md group-hover:bg-indigo-600 transition-colors">
            U
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-xl sm:text-2xl tracking-tight text-slate-950">
              Uni Route
            </span>
            <span className="text-[10px] text-slate-400 font-semibold hidden sm:inline">
              Global Admissions & Scholarships
            </span>
          </div>
        </div>

        {/* Quick Nav Actions */}
        <div className="hidden md:flex items-center gap-2 text-xs font-bold">
          <button
            onClick={onNavigateHome}
            className={`px-3 py-1.5 rounded-xl transition-all ${
              currentView === 'home'
                ? 'bg-white border border-slate-200 text-indigo-600 shadow-xs'
                : 'text-slate-600 hover:text-slate-950'
            }`}
          >
            Home
          </button>
          <button
            onClick={onNavigateScholarships}
            className={`px-3 py-1.5 rounded-xl transition-all ${
              currentView === 'scholarship'
                ? 'bg-white border border-slate-200 text-indigo-600 shadow-xs'
                : 'text-slate-600 hover:text-slate-950'
            }`}
          >
            Scholarships
          </button>
          <button
            onClick={onNavigateSat}
            className={`px-3 py-1.5 rounded-xl transition-all ${
              currentView?.startsWith('sat')
                ? 'bg-white border border-slate-200 text-indigo-600 shadow-xs'
                : 'text-slate-600 hover:text-slate-950'
            }`}
          >
            SAT Prep
          </button>
          <button
            onClick={onNavigateEssayHub}
            className={`px-3 py-1.5 rounded-xl transition-all ${
              currentView === 'essay-hub'
                ? 'bg-white border border-slate-200 text-indigo-600 shadow-xs'
                : 'text-slate-600 hover:text-slate-950'
            }`}
          >
            Essay Hub
          </button>
          <button
            onClick={onNavigateAiAnalysis}
            className={`px-3.5 py-1.5 rounded-xl transition-all flex items-center gap-1.5 ${
              currentView === 'ai-analysis'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'bg-indigo-50 border border-indigo-200/70 text-indigo-700 hover:bg-indigo-100'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>AI Profile Analyzer</span>
          </button>

          {/* Desktop User Account Status */}
          <div className="pl-1 border-l border-slate-200/60 ml-1">
            {user ? (
              <div className="flex items-center gap-2 bg-white border border-slate-200/90 pl-3 pr-1 py-1 rounded-xl shadow-xs">
                <span className="text-[10px] font-extrabold text-slate-700 truncate max-w-[85px]" title={user.email}>
                  {user.email.split('@')[0].toUpperCase()}
                </span>
                <button
                  onClick={onLogout}
                  className="p-1 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors cursor-pointer"
                  title="Sign Out"
                >
                  <LogOut className="w-3.5 h-3.5" />
                </button>
              </div>
            ) : (
              <button
                onClick={onOpenAuth}
                className="px-3.5 py-1.5 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-50 transition-all flex items-center gap-1.5 cursor-pointer text-xs font-bold"
              >
                <User className="w-3.5 h-3.5 text-slate-500" />
                <span>Sign In</span>
              </button>
            )}
          </div>
        </div>

        {/* Hamburger Menu Button (Matching Image Exactly) */}
        <button
          id="btn-hamburger-menu"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="w-11 h-11 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex items-center justify-center text-slate-800 hover:bg-slate-50 transition-colors"
          title="Menu"
        >
          {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

      </div>

      {/* Menu Drawer */}
      {isMenuOpen && (
        <div className="bg-white border-b border-slate-200/80 shadow-lg px-6 py-4 animate-in slide-in-from-top-2 duration-150">
          <div className="max-w-5xl mx-auto flex flex-col gap-2 text-sm font-bold">
            {/* Mobile User Account Bar */}
            <div className="px-3 py-2.5 mb-2 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between text-xs font-bold">
              {user ? (
                <>
                  <div className="flex items-center gap-2 text-slate-700">
                    <User className="w-4 h-4 text-slate-500 shrink-0" />
                    <span className="truncate max-w-[150px]" title={user.email}>{user.email}</span>
                  </div>
                  <button
                    onClick={() => {
                      setIsMenuOpen(false);
                      onLogout?.();
                    }}
                    className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-rose-50 text-rose-700 hover:bg-rose-100 transition-colors cursor-pointer text-[11px]"
                  >
                    <LogOut className="w-3.5 h-3.5 shrink-0" />
                    <span>Sign Out</span>
                  </button>
                </>
              ) : (
                <>
                  <span className="text-slate-400">Not signed in</span>
                  <button
                    onClick={() => {
                      setIsMenuOpen(false);
                      onOpenAuth?.();
                    }}
                    className="px-3.5 py-1.5 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition-all cursor-pointer text-[11px] font-black"
                  >
                    Sign In
                  </button>
                </>
              )}
            </div>

            <button
              onClick={() => {
                setIsMenuOpen(false);
                onNavigateHome?.();
              }}
              className="text-left px-3 py-2 rounded-xl hover:bg-slate-50 flex items-center gap-2 text-slate-700"
            >
              <Home className="w-4 h-4 text-slate-500" />
              <span>Home Gateway</span>
            </button>
            <button
              onClick={() => {
                setIsMenuOpen(false);
                onNavigateScholarships?.();
              }}
              className="text-left px-3 py-2 rounded-xl hover:bg-slate-50 flex items-center gap-2 text-slate-700"
            >
              <GraduationCap className="w-4 h-4 text-indigo-600" />
              <span>200+ University Scholarships & Grants</span>
            </button>
            <button
              onClick={() => {
                setIsMenuOpen(false);
                onNavigateSat?.();
              }}
              className="text-left px-3 py-2 rounded-xl hover:bg-slate-50 flex items-center gap-2 text-slate-700"
            >
              <BookOpen className="w-4 h-4 text-blue-600" />
              <span>Digital SAT Practice Modules</span>
            </button>
            <button
              onClick={() => {
                setIsMenuOpen(false);
                onNavigateEssayHub?.();
              }}
              className="text-left px-3 py-2 rounded-xl hover:bg-slate-50 flex items-center gap-2 text-slate-700"
            >
              <PenTool className="w-4 h-4 text-amber-600" />
              <span>Essay Hub & Application Builder</span>
            </button>
            <button
              onClick={() => {
                setIsMenuOpen(false);
                onNavigateAiAnalysis?.();
              }}
              className="text-left px-3 py-2 rounded-xl hover:bg-indigo-50 flex items-center gap-2 text-indigo-700 bg-indigo-50/50 font-extrabold"
            >
              <Sparkles className="w-4 h-4 text-indigo-600" />
              <span>AI International Profile Analyzer & Counselor</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};


