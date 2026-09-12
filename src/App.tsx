import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Navbar } from './components/Navbar';
import { AuthModal } from './components/AuthModal';
import { supabase, isSupabaseConfigured } from './lib/supabase';
import { FloatingIconsGateway } from './components/FloatingIconsGateway';
import { ScholarshipPage } from './components/ScholarshipPage';
import { UniversityListView } from './components/UniversityListView';
import { PAKISTANI_UNIVERSITIES } from './data/pakistaniUniversitiesData';
import { SatLandingView } from './components/SatLandingView';
import { SatIntroductionView } from './components/SatIntroductionView';
import { SatPreparationHub } from './components/hubs/SatPreparationHub';
import { AiAnalysisHub } from './components/hubs/AiAnalysisHub';
import { EssayHub } from './components/hubs/EssayHub';
import { SearchGroundingWidget } from './components/SearchGroundingWidget';
import { VoiceRecorderWidget } from './components/VoiceRecorderWidget';
import { FloatingAssistantBubble } from './components/FloatingAssistantBubble';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';

export default function App() {
  const [currentView, setCurrentView] = useState<
    'home' | 'scholarship' | 'pakistani-scholarships' | 'sat-landing' | 'sat-intro' | 'sat-learning' | 'ai-analysis' | 'essay-hub' | 'tools'
  >('home');
  const [satCategory, setSatCategory] = useState<'reading' | 'writing' | 'math' | 'drills' | 'stats'>('reading');
  const [user, setUser] = useState<{ email: string; id: string } | null>(null);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [currentView]);

  useEffect(() => {
    if (isSupabaseConfigured() && supabase) {
      // Fetch initial user session
      supabase.auth.getSession().then(({ data: { session } }) => {
        if (session && session.user) {
          setUser({ email: session.user.email || '', id: session.user.id });
        }
      });

      // Bind listener
      const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
        if (session && session.user) {
          setUser({ email: session.user.email || '', id: session.user.id });
        } else {
          setUser(null);
        }
      });

      return () => {
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
    }
  }, []);

  const handleLogout = async () => {
    if (isSupabaseConfigured() && supabase) {
      try {
        await supabase.auth.signOut();
      } catch (e) {
        console.error(e);
      }
    } else {
      try {
        localStorage.removeItem('mock_user_session');
        setUser(null);
      } catch (e) {
        console.error(e);
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#f6f8fc] text-slate-900 font-sans flex flex-col selection:bg-indigo-500 selection:text-white relative">
      {/* Sticky Navigation Bar */}
      <Navbar
        currentView={currentView}
        user={user}
        onOpenAuth={() => setIsAuthModalOpen(true)}
        onLogout={handleLogout}
        onNavigateHome={() => setCurrentView('home')}
        onNavigateScholarships={() => setCurrentView('scholarship')}
        onNavigateSat={() => setCurrentView('sat-landing')}
        onNavigateAiAnalysis={() => setCurrentView('ai-analysis')}
        onNavigateEssayHub={() => setCurrentView('essay-hub')}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-5xl w-full mx-auto px-4 sm:px-6 pt-2 sm:pt-4 overflow-x-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentView}
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -12 }}
            transition={{ duration: 0.1, ease: "easeOut" }}
            className="w-full transform-gpu"
          >
            {currentView === 'home' && (
              <>
                <FloatingIconsGateway
                  onOpenScholarships={() => setCurrentView('scholarship')}
                  onOpenSatPrep={() => setCurrentView('sat-landing')}
                  onOpenPakistaniScholarships={() => setCurrentView('pakistani-scholarships')}
                  onOpenAiAnalysis={() => setCurrentView('ai-analysis')}
                  onOpenEssayHub={() => setCurrentView('essay-hub')}
                />
                <FaqSection />
              </>
            )}

            {currentView === 'scholarship' && (
              <ScholarshipPage onBackToHome={() => setCurrentView('home')} />
            )}

            {currentView === 'pakistani-scholarships' && (
              <UniversityListView
                onBackToTracks={() => setCurrentView('home')}
                initialUniversities={PAKISTANI_UNIVERSITIES}
                title="Pakistani Scholarship Directory"
                description="Explore Pakistan's leading higher education institutions, fully funded local grants, need-based programs, and HEC/Ehsaas/PEEF funding options."
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
              />
            )}

            {currentView === 'ai-analysis' && (
              <AiAnalysisHub
                onBackToHome={() => setCurrentView('home')}
                onSelectUniversity={(uniName) => setCurrentView('scholarship')}
              />
            )}

            {currentView === 'essay-hub' && (
              <EssayHub onBackToHome={() => setCurrentView('home')} />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer shown only on home */}
      {currentView === 'home' && <Footer />}

      {/* Floating Gemini AI Counselor Chatbot */}
      <FloatingAssistantBubble onOpenScholarships={() => setCurrentView('scholarship')} />

      {/* Secure User Authenticator Modal Overlay */}
      <AnimatePresence>
        {isAuthModalOpen && (
          <AuthModal
            isOpen={isAuthModalOpen}
            onClose={() => setIsAuthModalOpen(false)}
            onAuthSuccess={(u) => setUser(u)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}




