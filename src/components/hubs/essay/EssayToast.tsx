import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, Save, HardDrive, X, Clock, FileText } from 'lucide-react';

export interface EssayToastData {
  id: string;
  title: string;
  message?: string;
  draftTitle?: string;
  wordCount?: number;
  timestamp: Date;
  type?: 'save' | 'autosave' | 'update' | 'delete';
}

// Custom event helper for triggering toast anywhere in the app
export function triggerEssayToast(data: {
  title?: string;
  message?: string;
  draftTitle?: string;
  wordCount?: number;
  type?: 'save' | 'autosave' | 'update' | 'delete';
}) {
  if (typeof window === 'undefined') return;
  const event = new CustomEvent('essay-draft-saved', {
    detail: {
      title: data.title || 'Draft Saved',
      message: data.message,
      draftTitle: data.draftTitle,
      wordCount: data.wordCount,
      timestamp: new Date(),
      type: data.type || 'save',
    },
  });
  window.dispatchEvent(event);
}

interface EssayToastProps {
  autoHideDuration?: number; // milliseconds, default 3500
}

export const EssayToast: React.FC<EssayToastProps> = ({ autoHideDuration = 3200 }) => {
  const [toasts, setToasts] = useState<EssayToastData[]>([]);

  useEffect(() => {
    const handleDraftSaved = (event: Event) => {
      const customEvent = event as CustomEvent<Partial<EssayToastData> & { draft?: any }>;
      const detail = customEvent.detail;
      if (!detail) return;

      const draftTitle = detail.draftTitle || detail.draft?.title || 'Personal Essay';
      const wordCount = detail.wordCount !== undefined 
        ? detail.wordCount 
        : (detail.draft?.draftText ? detail.draft.draftText.trim().split(/\s+/).filter(Boolean).length : undefined);
      
      const newToast: EssayToastData = {
        id: `toast-${Date.now()}-${Math.random().toString(36).substring(2, 5)}`,
        title: detail.title || (detail.type === 'autosave' ? 'Draft Autosaved' : 'Draft Saved to Local Storage'),
        message: detail.message,
        draftTitle,
        wordCount,
        timestamp: detail.timestamp || new Date(),
        type: detail.type || 'save',
      };

      // Keep maximum 2 toasts stacked at once to prevent clutter
      setToasts((prev) => [...prev.slice(-1), newToast]);
    };

    window.addEventListener('essay-draft-saved', handleDraftSaved);
    return () => {
      window.removeEventListener('essay-draft-saved', handleDraftSaved);
    };
  }, []);

  const dismissToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <div
      id="essay-toast-container"
      className="fixed bottom-5 right-5 z-50 flex flex-col gap-2.5 max-w-sm w-full pointer-events-none px-3 sm:px-0"
      aria-live="polite"
    >
      <AnimatePresence>
        {toasts.map((toast) => (
          <SingleToastItem
            key={toast.id}
            toast={toast}
            duration={autoHideDuration}
            onDismiss={() => dismissToast(toast.id)}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};

interface SingleToastItemProps {
  toast: EssayToastData;
  duration: number;
  onDismiss: () => void;
}

const SingleToastItem: React.FC<SingleToastItemProps> = ({ toast, duration, onDismiss }) => {
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    const startTime = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const remaining = Math.max(0, 100 - (elapsed / duration) * 100);
      setProgress(remaining);
      if (remaining <= 0) {
        clearInterval(interval);
        onDismiss();
      }
    }, 40);

    return () => clearInterval(interval);
  }, [duration, onDismiss]);

  const formattedTime = toast.timestamp.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 15, scale: 0.95 }}
      transition={{ duration: 0.22, ease: 'easeOut' }}
      className="pointer-events-auto bg-white/95 backdrop-blur-md border border-emerald-200/90 rounded-2xl p-3.5 sm:p-4 shadow-[0_10px_30px_-5px_rgba(16,185,129,0.18),0_4px_12px_rgba(0,0,0,0.06)] overflow-hidden relative"
      role="status"
    >
      {/* Top Accent / Progress bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-emerald-100">
        <div
          className="h-full bg-emerald-500 transition-all duration-75 ease-linear rounded-r"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="flex items-start justify-between gap-3 pt-0.5">
        <div className="flex items-start gap-3">
          {/* Icon Badge */}
          <div className="w-8 h-8 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center shrink-0 text-emerald-600 mt-0.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          </div>

          {/* Content */}
          <div className="space-y-1">
            <div className="flex items-center gap-1.5">
              <h4 className="text-xs font-black text-slate-900 leading-tight tracking-tight">
                {toast.title}
              </h4>
              <span className="px-1.5 py-0.2 rounded-md bg-slate-100 text-[10px] font-bold text-slate-600 border border-slate-200/70">
                Local
              </span>
            </div>

            <p className="text-[11px] text-slate-600 leading-normal line-clamp-1 font-medium">
              {toast.message ? (
                toast.message
              ) : (
                <>
                  <span className="font-semibold text-slate-800">"{toast.draftTitle}"</span>
                  {toast.wordCount !== undefined && ` • ${toast.wordCount} words`}
                </>
              )}
            </p>

            <div className="flex items-center gap-2 text-[10px] text-slate-400 font-medium">
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3 text-slate-400" />
                {formattedTime}
              </span>
              <span>•</span>
              <span className="text-emerald-700 font-semibold">Persisted in browser</span>
            </div>
          </div>
        </div>

        {/* Close Button */}
        <button
          onClick={onDismiss}
          className="text-slate-400 hover:text-slate-700 p-1 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer shrink-0 -mr-1 -mt-1"
          aria-label="Dismiss notification"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </motion.div>
  );
};
