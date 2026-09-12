import React from 'react';
import { Bookmark, ExternalLink, Trash2, Calendar, X, Download } from 'lucide-react';
import { Scholarship } from '../types';

interface SavedBookmarksModalProps {
  isOpen: boolean;
  onClose: () => void;
  savedScholarships: Scholarship[];
  onRemoveBookmark: (scholarshipId: string) => void;
}

export const SavedBookmarksModal: React.FC<SavedBookmarksModalProps> = ({
  isOpen,
  onClose,
  savedScholarships,
  onRemoveBookmark,
}) => {
  if (!isOpen) return null;

  const handleExportList = () => {
    const textContent = savedScholarships
      .map(
        (s) =>
          `Title: ${s.title}\nProvider: ${s.provider}\nCountry: ${s.country}\nCoverage: ${s.coverage}\nDeadline: ${s.deadline}\nURL: ${s.applicationUrl}\n------------------------`
      )
      .join('\n\n');

    const blob = new Blob([textContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'UniRoute_Saved_Scholarships.txt';
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-2xl w-full p-6 text-slate-100 shadow-2xl max-h-[85vh] flex flex-col justify-between relative">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <Bookmark className="w-5 h-5 text-amber-400" />
              <h3 className="text-xl font-bold text-white">Saved Scholarships ({savedScholarships.length})</h3>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* List */}
          <div className="mt-4 space-y-3 overflow-y-auto max-h-[50vh] pr-1">
            {savedScholarships.length === 0 ? (
              <div className="text-center py-10 text-slate-500 text-xs">
                <p>No saved scholarships yet.</p>
                <p className="mt-1">Click the bookmark icon on any scholarship card in the Global or Pakistani Hubs to save them here.</p>
              </div>
            ) : (
              savedScholarships.map((s) => (
                <div
                  key={s.id}
                  className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between gap-3 text-xs"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.2 rounded font-bold bg-blue-500/20 text-blue-300 text-[10px]">
                        {s.country}
                      </span>
                      <span className="text-slate-400 font-medium">{s.provider}</span>
                    </div>
                    <h4 className="font-bold text-white text-sm line-clamp-1">{s.title}</h4>
                    <p className="text-slate-400 text-[11px]">Due: {s.deadline} • {s.coverage}</p>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <a
                      href={s.applicationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white transition-colors"
                      title="Open Application Portal"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                    <button
                      onClick={() => onRemoveBookmark(s.id)}
                      className="p-2 rounded-lg bg-slate-800 hover:bg-rose-950/80 hover:text-rose-400 text-slate-400 transition-colors"
                      title="Remove from saved"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Footer Actions */}
        {savedScholarships.length > 0 && (
          <div className="mt-5 pt-3 border-t border-slate-800 flex items-center justify-between">
            <span className="text-xs text-slate-400">Keep track of upcoming deadlines</span>
            <button
              onClick={handleExportList}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-semibold text-xs transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export Saved List</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
