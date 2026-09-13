import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { EssayType } from '../../types';
import { EssayHubHomepage } from './essay/EssayHubHomepage';
import { EssayBuilder } from './essay/EssayBuilder';
import { PromptAnalyzerTool } from './essay/PromptAnalyzerTool';
import { ResourcesView } from './essay/ResourcesView';
import { EssayToast } from './essay/EssayToast';

interface EssayHubProps {
  onBackToHome?: () => void;
  user?: { email: string; id: string } | null;
  onOpenAuth?: (message?: string) => void;
}

export const EssayHub: React.FC<EssayHubProps> = ({
  onBackToHome,
  user,
  onOpenAuth,
}) => {
  const [essaySubRoute, setEssaySubRoute] = useState<
    'home' | 'builder' | 'prompt-analyzer' | 'resources'
  >('home');

  const [activeDraftId, setActiveDraftId] = useState<string | null>(null);
  const [selectedEssayType, setSelectedEssayType] = useState<EssayType>('Common App Essay');
  const [selectedResourceArticle, setSelectedResourceArticle] = useState<string | undefined>(undefined);

  const handleStartWriting = () => {
    setActiveDraftId(null);
    setSelectedEssayType('Common App Essay');
    setEssaySubRoute('builder');
  };

  const handleSelectEssayType = (type: EssayType) => {
    setActiveDraftId(null);
    setSelectedEssayType(type);
    setEssaySubRoute('builder');
  };

  const handleOpenDraft = (draftId: string) => {
    setActiveDraftId(draftId);
    setEssaySubRoute('builder');
  };

  const handleOpenTool = (tool: 'brainstorm' | 'prompt-analyzer' | 'review') => {
    if (tool === 'prompt-analyzer') {
      setEssaySubRoute('prompt-analyzer');
    } else {
      setActiveDraftId(null);
      setEssaySubRoute('builder');
    }
  };

  const handleOpenResources = (articleId?: string) => {
    setSelectedResourceArticle(articleId);
    setEssaySubRoute('resources');
  };

  return (
    <div id="essay-hub-master-container" className="w-full overflow-x-hidden">
      <AnimatePresence mode="wait">
        {essaySubRoute === 'home' && (
          <motion.div
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
          >
            <EssayHubHomepage
              onBackToHome={onBackToHome}
              onStartWriting={handleStartWriting}
              onSelectEssayType={handleSelectEssayType}
              onOpenDraft={handleOpenDraft}
              onOpenTool={handleOpenTool}
              onOpenResources={handleOpenResources}
            />
          </motion.div>
        )}

        {essaySubRoute === 'builder' && (
          <motion.div
            key="builder"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
          >
            <EssayBuilder
              draftId={activeDraftId}
              initialEssayType={selectedEssayType}
              onBackToHub={() => setEssaySubRoute('home')}
              user={user}
              onOpenAuth={onOpenAuth}
            />
          </motion.div>
        )}

        {essaySubRoute === 'prompt-analyzer' && (
          <motion.div
            key="prompt-analyzer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
          >
            <PromptAnalyzerTool
              onBackToHub={() => setEssaySubRoute('home')}
              onStartBuilderWithPrompt={(promptText) => {
                setActiveDraftId(null);
                setSelectedEssayType('Common App Essay');
                setEssaySubRoute('builder');
              }}
            />
          </motion.div>
        )}

        {essaySubRoute === 'resources' && (
          <motion.div
            key="resources"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
          >
            <ResourcesView
              initialArticleId={selectedResourceArticle}
              onBackToHub={() => setEssaySubRoute('home')}
              onStartWriting={handleStartWriting}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Global Toast Component for Essay Hub */}
      <EssayToast />
    </div>
  );
};
