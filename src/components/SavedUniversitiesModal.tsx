import React from 'react';
import { Bookmark, ExternalLink, Trash2, X, Download, Building2, Globe, Sparkles } from 'lucide-react';
import { UniversityTrackItem } from '../types';
import { getUniversityLogo } from '../utils/universityUtils';

interface SavedUniversitiesModalProps {
  isOpen: boolean;
  onClose: () => void;
  savedUniversities: UniversityTrackItem[];
  onRemoveBookmark: (uniId: string) => void;
  onSelectUniversity?: (uni: UniversityTrackItem) => void;
}

export const SavedUniversitiesModal: React.FC<SavedUniversitiesModalProps> = ({
  isOpen,
  onClose,
  savedUniversities,
  onRemoveBookmark,
  onSelectUniversity,
}) => {
  if (!isOpen) return null;

  const handleExportList = () => {
    const textContent = savedUniversities
      .map(
        (u, idx) =>
          `${idx + 1}. ${u.universityName} (${u.country})\n` +
          `   Location: ${u.location}\n` +
          `   Acceptance Rate: ${u.acceptanceRate}\n` +
          `   Tuition: ${u.tuitionFee}\n` +
          `   Aid Type: ${u.financialAidType} (${u.hasFullRide ? 'Full Ride Available' : 'Partial Aid'})\n` +
          `   SAT: ${u.minSat} | IELTS: ${u.minIelts}\n` +
          `   Key Scholarship: ${u.scholarshipTitle || 'Institutional Aid'}\n` +
          `--------------------------------------------------`
      )
      .join('\n\n');

    const header = `Uni Route - Saved Universities Shortlist (${savedUniversities.length} institutions)\nExported on: ${new Date().toLocaleDateString()}\n\n==================================================\n\n`;
    const blob = new Blob([header + textContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'UniRoute_Saved_Universities.txt';
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-2xl w-full p-6 text-slate-100 shadow-2xl max-h-[88vh] flex flex-col justify-between relative">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-slate-800">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
                <Bookmark className="w-4 h-4 fill-amber-400" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-black text-white">
                  Saved Universities ({savedUniversities.length})
                </h3>
                <p className="text-xs text-slate-400">Your bookmarked colleges and target institutions</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors cursor-pointer"
              title="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* List */}
          <div className="mt-4 space-y-3 overflow-y-auto max-h-[52vh] pr-1.5 scrollbar-thin">
            {savedUniversities.length === 0 ? (
              <div className="text-center py-12 text-slate-500 text-xs space-y-2">
                <Building2 className="w-10 h-10 text-slate-600 mx-auto" />
                <p className="font-bold text-slate-400 text-sm">No saved universities yet</p>
                <p className="max-w-xs mx-auto text-slate-500">
                  Click the bookmark icon on any university card to build your personalized shortlist.
                </p>
              </div>
            ) : (
              savedUniversities.map((uni) => {
                const logoInfo = getUniversityLogo(uni);
                return (
                  <div
                    key={uni.id}
                    className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800/90 flex items-center justify-between gap-3 text-xs hover:border-slate-700 transition-all"
                  >
                    <div
                      className="flex items-center gap-3 cursor-pointer flex-1 min-w-0"
                      onClick={() => {
                        onClose();
                        onSelectUniversity?.(uni);
                      }}
                    >
                      {/* Mini Logo */}
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center font-black shadow-xs shrink-0 text-white select-none overflow-hidden"
                        style={logoInfo.logoStyle}
                      >
                        <span className="text-xs font-black text-white drop-shadow-xs">{logoInfo.logoText.slice(0, 4)}</span>
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2">
                          <h4 className="font-extrabold text-white text-sm truncate hover:text-indigo-400 transition-colors">
                            {uni.universityName}
                          </h4>
                          <span className="text-xs shrink-0">{uni.flag}</span>
                        </div>
                        <div className="flex items-center gap-2 mt-0.5 text-slate-400 text-[11px] flex-wrap">
                          <span className="flex items-center gap-1">
                            <Globe className="w-3 h-3 text-slate-500" />
                            {uni.location}
                          </span>
                          <span>•</span>
                          <span className="text-indigo-300 font-medium">Acceptance: {uni.acceptanceRate}</span>
                          <span>•</span>
                          <span className="text-slate-300">{uni.hasFullRide ? 'Full Ride' : uni.financialAidType}</span>
                        </div>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-1.5 shrink-0">
                      {onSelectUniversity && (
                        <button
                          onClick={() => {
                            onClose();
                            onSelectUniversity(uni);
                          }}
                          className="px-2.5 py-1.5 rounded-lg bg-indigo-600/90 hover:bg-indigo-600 text-white font-bold text-[11px] transition-colors cursor-pointer"
                        >
                          View
                        </button>
                      )}
                      <button
                        onClick={() => onRemoveBookmark(uni.id)}
                        className="p-2 rounded-lg bg-slate-800 hover:bg-rose-950/80 hover:text-rose-400 text-slate-400 transition-colors cursor-pointer"
                        title="Remove bookmark"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>

        {/* Footer Actions */}
        {savedUniversities.length > 0 && (
          <div className="mt-5 pt-3 border-t border-slate-800 flex items-center justify-between">
            <span className="text-xs text-slate-400">
              {savedUniversities.length} {savedUniversities.length === 1 ? 'university' : 'universities'} saved
            </span>
            <button
              onClick={handleExportList}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-semibold text-xs transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export Shortlist (.txt)</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
