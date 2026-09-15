import React, { useState, useEffect, Suspense } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Navbar } from './components/Navbar';
import { AuthModal } from './components/AuthModal';
import { SignOutConfirmModal } from './components/SignOutConfirmModal';
import { supabase, isSupabaseConfigured } from './lib/supabase';
import { syncEssaysFromSupabase } from './lib/essayStorage';
import { syncDrillDataFromSupabase } from './data/satDrills/progressStorage';
import { fetchSavedUniversityIds, loadSatPracticeProgress } from './lib/userStorage';
import { isPublicInternationalUniversity, isPublicGovernmentScholarship } from './config/previewAccess';
import { FloatingIconsGateway } from './components/FloatingIconsGateway';
import { SearchGroundingWidget } from './components/SearchGroundingWidget';
import { VoiceRecorderWidget } from './components/VoiceRecorderWidget';
import { FloatingAssistantBubble } from './components/FloatingAssistantBubble';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { InteractivePageLoader } from './components/InteractivePageLoader';

// Route-Based Code Splitting (Lazy-loaded Premium Pages)
const ScholarshipPage = React.lazy(() => import('./components/ScholarshipPage').then(module => ({ default: module.ScholarshipPage })));
const UniversityListView = React.lazy(() => import('./components/UniversityListView').then(module => ({ default: module.UniversityListView })));
const SatLandingView = React.lazy(() => import('./components/SatLandingView').then(module => ({ default: module.SatLandingView })));
const SatIntroductionView = React.lazy(() => import('./components/SatIntroductionView').then(module => ({ default: module.SatIntroductionView })));
const SatPreparationHub = React.lazy(() => import('./components/hubs/SatPreparationHub').then(module => ({ default: module.SatPreparationHub })));
const AiAnalysisHub = React.lazy(() => import('./components/hubs/AiAnalysisHub').then(module => ({ default: module.AiAnalysisHub })));
const EssayHub = React.lazy(() => import('./components/hubs/EssayHub').then(module => ({ default: module.EssayHub })));

type ViewType =
  | 'home'
  | 'scholarship'
  | 'pakistani-scholarships'
  | 'sat-landing'
  | 'sat-intro'
  | 'sat-learning'
  | 'ai-analysis'
  | 'essay-hub'
  | 'tools';

interface NavigationTarget {
  view: ViewType;
  uniId?: string;
  scholarshipId?: string;
  satCategory?: 'reading' | 'writing' | 'math' | 'drills' | 'stats';
  subView?: 'selection' | 'university' | 'government';
}

export default function App() {
  const [currentView, setCurrentView] = useState<ViewType>('home');
  const [satCategory, setSatCategory] = useState<'reading' | 'writing' | 'math' | 'drills' | 'stats'>('reading');
  const [user, setUser] = useState<{ email: string; id: string } | null>(null);
  const [authLoading, setAuthLoading] = useState<boolean>(true);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isSignOutModalOpen, setIsSignOutModalOpen] = useState(false);
  const [authModalMessage, setAuthModalMessage] = useState<string | undefined>(undefined);
  
  // Pending target after auth
  const [pendingAuthTarget, setPendingAuthTarget] = useState<NavigationTarget | null>(null);
  const [pendingUniId, setPendingUniId] = useState<string | undefined>(undefined);
  const [pendingScholarshipId, setPendingScholarshipId] = useState<string | undefined>(undefined);
  const [pendingSubView, setPendingSubView] = useState<'selection' | 'university' | 'government'>('selection');

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [currentView]);

  useEffect(() => {
    let mounted = true;

    if (isSupabaseConfigured() && supabase) {
      // Fetch initial user session
      supabase.auth.getSession().then(({ data: { session } }) => {
        if (!mounted) return;
        if (session && session.user) {
          setUser({ email: session.user.email || '', id: session.user.id });
          syncEssaysFromSupabase(session.user.id).catch(() => {});
          syncDrillDataFromSupabase(session.user.id).catch(() => {});
          fetchSavedUniversityIds(session.user.id).catch(() => {});
          loadSatPracticeProgress(session.user.id).catch(() => {});
        }
        setAuthLoading(false);
      }).catch(() => {
        if (mounted) setAuthLoading(false);
      });

      // Bind listener
      const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
        if (!mounted) return;
        if (session && session.user) {
          setUser({ email: session.user.email || '', id: session.user.id });
          syncEssaysFromSupabase(session.user.id).catch(() => {});
          syncDrillDataFromSupabase(session.user.id).catch(() => {});
          fetchSavedUniversityIds(session.user.id).catch(() => {});
          loadSatPracticeProgress(session.user.id).catch(() => {});
          if (typeof window !== 'undefined') {
            window.dispatchEvent(new CustomEvent('uniroute-auth-change', { detail: { user: session.user } }));
          }
        } else {
          setUser(null);
          if (typeof window !== 'undefined') {
            window.dispatchEvent(new CustomEvent('uniroute-auth-change', { detail: { user: null } }));
          }
        }
        setAuthLoading(false);
      });

      return () => {
        mounted = false;
        subscription.unsubscribe();
      };
    } else {
      // Fallback local auth simulation loader
      try {
        const saved = localStorage.getItem('mock_user_session');
        if (saved) setUser(JSON.parse(saved));
      } catch (e) {
        console.error(e);
      }
      setAuthLoading(false);
    }
  }, []);

  const handleProtectedNavigate = (target: NavigationTarget, message?: string) => {
    if (target.view === 'home') {
      setCurrentView('home');
      return;
    }

    if (target.view === 'scholarship' && !target.uniId && !target.scholarshipId) {
      setCurrentView('scholarship');
      if (target.subView) setPendingSubView(target.subView);
      return;
    }

    if (!user) {
      // Allow public preview international unis & gov scholarships
      if (target.uniId && isPublicInternationalUniversity(target.uniId)) {
        setCurrentView('scholarship');
        setPendingSubView('university');
        setPendingUniId(target.uniId);
        return;
      }

      if (target.scholarshipId && isPublicGovernmentScholarship(target.scholarshipId)) {
        setCurrentView('scholarship');
        setPendingSubView('government');
        setPendingScholarshipId(target.scholarshipId);
        return;
      }

      // Lock protected view & prompt Auth Modal
      setPendingAuthTarget(target);
      setAuthModalMessage(
        message || 'A free Uni Route account is required to unlock full access to this university profile and features.'
      );
      setIsAuthModalOpen(true);
      return;
    }

    // Authenticated -> allow navigation
    setCurrentView(target.view);
    if (target.satCategory) setSatCategory(target.satCategory);
    if (target.uniId) setPendingUniId(target.uniId);
    if (target.scholarshipId) setPendingScholarshipId(target.scholarshipId);
    if (target.subView) setPendingSubView(target.subView);
  };

  const handleAuthSuccess = (u: { email: string; id: string }) => {
    setUser(u);
    if (pendingAuthTarget) {
      setCurrentView(pendingAuthTarget.view);
      if (pendingAuthTarget.satCategory) setSatCategory(pendingAuthTarget.satCategory);
      if (pendingAuthTarget.uniId) setPendingUniId(pendingAuthTarget.uniId);
      if (pendingAuthTarget.scholarshipId) setPendingScholarshipId(pendingAuthTarget.scholarshipId);
      if (pendingAuthTarget.subView) setPendingSubView(pendingAuthTarget.subView);
      setPendingAuthTarget(null);
      setAuthModalMessage(undefined);
    }
  };

  const handleLogout = async () => {
    if (isSupabaseConfigured() && supabase) {
      try {
        await supabase.auth.signOut();
      } catch (e) {
        console.error(e);
      }
    }
    try {
      localStorage.removeItem('mock_user_session');
      localStorage.removeItem('uniroute_saved_universities_v1');
      localStorage.removeItem('sat_reading_answers');
      localStorage.removeItem('sat_writing_answers');
      localStorage.removeItem('sat_math_answers');
      localStorage.removeItem('uniroute_essay_drafts_v1');
      localStorage.removeItem('sat_drills_active_sessions_v1');
      localStorage.removeItem('sat_drills_history_v1');
    } catch (e) {
      console.error(e);
    }
    setUser(null);
    setPendingAuthTarget(null);
    setCurrentView('home');
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('uniroute-auth-change', { detail: { user: null } }));
      window.dispatchEvent(new CustomEvent('uniroute-bookmarks-updated', { detail: { bookmarkedIds: [] } }));
    }
  };

  if (authLoading) {
    return (
      <div className="min-h-screen bg-[#f6f8fc] flex items-center justify-center p-6">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="w-12 h-12 rounded-2xl bg-slate-950 text-white font-black text-xl flex items-center justify-center shadow-lg animate-pulse mb-4">
            U
          </div>
          <p className="text-slate-600 text-sm font-semibold">Verifying secure session...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f6f8fc] text-slate-900 font-sans flex flex-col selection:bg-indigo-500 selection:text-white relative">
      {/* Sticky Navigation Bar */}
      <Navbar
        currentView={currentView}
        user={user}
        onOpenAuth={() => {
          setAuthModalMessage(undefined);
          setIsAuthModalOpen(true);
        }}
        onLogout={() => setIsSignOutModalOpen(true)}
        onNavigateHome={() => setCurrentView('home')}
        onNavigateScholarships={() => handleProtectedNavigate({ view: 'scholarship' }, 'Please sign in to unlock access to our extensive database of global merit scholarships and matching university profiles.')}
        onNavigateSat={() => setCurrentView('sat-landing')}
        onNavigateAiAnalysis={() => setCurrentView('ai-analysis')}
        onNavigateEssayHub={() => setCurrentView('essay-hub')}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-5xl w-full mx-auto px-4 sm:px-6 pt-2 sm:pt-4 overflow-x-hidden">
        <AnimatePresence>
          <motion.div
            key={currentView}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.12, ease: "easeOut" }}
            className="w-full transform-gpu"
          >
            <Suspense fallback={<InteractivePageLoader />}>
              {currentView === 'home' && (
                <>
                  <FloatingIconsGateway
                    onOpenScholarships={() => handleProtectedNavigate({ view: 'scholarship' }, 'Please sign in to unlock access to our extensive database of global merit scholarships and matching university profiles.')}
                    onOpenSatPrep={() => setCurrentView('sat-landing')}
                    onOpenPakistaniScholarships={() => handleProtectedNavigate({ view: 'pakistani-scholarships' }, 'Please sign in to unlock access to the Pakistani Scholarship Directory and explore fully-funded need-based local grants.')}
                    onOpenAiAnalysis={() => setCurrentView('ai-analysis')}
                    onOpenEssayHub={() => setCurrentView('essay-hub')}
                  />
                  <FaqSection />
                </>
              )}

              {currentView === 'scholarship' && (
                <ScholarshipPage
                  onBackToHome={() => setCurrentView('home')}
                  user={user}
                  onRequestAuth={(target, msg) => handleProtectedNavigate(target || { view: 'scholarship' }, msg)}
                  initialSubView={pendingSubView}
                  pendingUniId={pendingUniId}
                  pendingScholarshipId={pendingScholarshipId}
                />
              )}

              {currentView === 'pakistani-scholarships' && (
                <UniversityListView
                  onBackToTracks={() => setCurrentView('home')}
                  title="Pakistani Scholarship Directory"
                  description="Explore Pakistan's leading higher education institutions, fully funded local grants, need-based programs, and HEC/Ehsaas/PEEF funding options."
                  user={user}
                  onRequestAuth={(target, msg) => handleProtectedNavigate(target || { view: 'pakistani-scholarships' }, msg)}
                />
              )}

              {currentView === 'sat-landing' && (
                <SatLandingView
                  onBackToHome={() => setCurrentView('home')}
                  onSelectIntro={() => setCurrentView('sat-intro')}
                  onSelectLearning={(category) => {
                    if (category) setSatCategory(category);
                    setCurrentView('sat-learning');
                  }}
                />
              )}

              {currentView === 'sat-intro' && (
                <SatIntroductionView
                  onBackToHome={() => setCurrentView('sat-landing')}
                  onStartLearning={() => {
                    setSatCategory('writing');
                    setCurrentView('sat-learning');
                  }}
                />
              )}

              {currentView === 'sat-learning' && (
                <SatPreparationHub
                  initialCategory={satCategory}
                  onBackToHome={() => setCurrentView('sat-landing')}
                  user={user}
                  onOpenAuth={(msg) => {
                    setAuthModalMessage(msg || 'Create a free Uni Route account to unlock unlimited practice questions, full mock exams, and persistent score stats.');
                    setIsAuthModalOpen(true);
                  }}
                />
              )}

              {currentView === 'ai-analysis' && (
                <AiAnalysisHub
                  onBackToHome={() => setCurrentView('home')}
                  onSelectUniversity={(uniName) => setCurrentView('scholarship')}
                  user={user}
                  onOpenAuth={(msg) => {
                    setAuthModalMessage(msg || 'Unlock unlimited profile diagnostics, Ivy League admissions odds modeling, and interactive chats with the counselor by creating your free account.');
                    setIsAuthModalOpen(true);
                  }}
                />
              )}

              {currentView === 'essay-hub' && (
                <EssayHub
                  onBackToHome={() => setCurrentView('home')}
                  user={user}
                  onOpenAuth={(msg) => {
                    setAuthModalMessage(msg || 'Draft college admission personal statements and receive unlimited AI-powered structured reviews with a free Uni Route account.');
                    setIsAuthModalOpen(true);
                  }}
                />
              )}
            </Suspense>
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer shown only on home */}
      {currentView === 'home' && <Footer />}

      {/* Floating AI Counselor Chatbot */}
      <FloatingAssistantBubble onOpenScholarships={() => handleProtectedNavigate({ view: 'scholarship' }, 'Please sign in to unlock access to our extensive database of global merit scholarships and matching university profiles.')} />

      {/* Secure User Authenticator Modal Overlay */}
      <AnimatePresence>
        {isAuthModalOpen && (
          <AuthModal
            isOpen={isAuthModalOpen}
            onClose={() => setIsAuthModalOpen(false)}
            onAuthSuccess={handleAuthSuccess}
            customMessage={authModalMessage}
          />
        )}
      </AnimatePresence>

      {/* Sign Out Confirmation Modal */}
      <SignOutConfirmModal
        isOpen={isSignOutModalOpen}
        onClose={() => setIsSignOutModalOpen(false)}
        onConfirm={handleLogout}
        userEmail={user?.email}
      />

      {/* Vercel Web Analytics */}
      <Analytics />
      
      {/* Vercel Speed Insights */}
      <SpeedInsights />
    </div>
  );
}




