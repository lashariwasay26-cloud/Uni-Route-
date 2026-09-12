import React, { useState } from 'react';
import { Search, Sparkles, Globe, ExternalLink, Loader2 } from 'lucide-react';

export const SearchGroundingWidget: React.FC = () => {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{ text: string; sources: any[] } | null>(null);

  const handleSearch = async (searchQuery: string) => {
    if (!searchQuery.trim()) return;
    setLoading(true);
    try {
      const res = await fetch('/api/search-grounding', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: searchQuery }),
      });
      const data = await res.json();
      setResult(data);
    } catch (err) {
      console.error(err);
      setResult({ text: 'Failed to fetch live search grounding data.', sources: [] });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6 my-6">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600">
          <Globe className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-slate-900 tracking-tight flex items-center gap-2">
            Live Google Search Grounding
            <span className="text-[10px] bg-indigo-100 text-indigo-700 font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">Gemini 3.5 Flash</span>
          </h3>
          <p className="text-xs text-slate-500">Query real-time university admission deadlines, scholarship portals, and visa updates.</p>
        </div>
      </div>

      <div className="flex gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="e.g. Fulbright scholarship deadline 2026 or Oxford computer science admissions requirement"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSearch(query)}
            className="w-full bg-slate-50 border border-slate-200 rounded-2xl pl-10 pr-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:bg-white transition-all"
          />
        </div>
        <button
          onClick={() => handleSearch(query)}
          disabled={loading || !query.trim()}
          className="px-6 py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm flex items-center gap-2 shadow-sm transition-all disabled:opacity-50 cursor-pointer shrink-0"
        >
          {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Sparkles className="w-4 h-4" />}
          Search Live
        </button>
      </div>

      <div className="flex flex-wrap gap-2">
        <span className="text-xs font-semibold text-slate-400 self-center">Popular:</span>
        {[
          'Fulbright US Student Program deadline',
          'Chevening Scholarship requirements UK',
          'HEC Overseas scholarship Pakistan',
          'SAT test dates 2026 international'
        ].map((preset, idx) => (
          <button
            key={idx}
            onClick={() => {
              setQuery(preset);
              handleSearch(preset);
            }}
            className="text-xs px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-indigo-50 hover:text-indigo-700 text-slate-700 font-medium transition-all cursor-pointer"
          >
            {preset}
          </button>
        ))}
      </div>

      {result && (
        <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-4 animate-fadeIn">
          <h4 className="text-xs font-extrabold uppercase tracking-wider text-indigo-600">Grounded Search Results</h4>
          <div className="text-sm text-slate-700 leading-relaxed whitespace-pre-wrap font-normal">
            {result.text}
          </div>
          {result.sources && result.sources.length > 0 && (
            <div className="pt-3 border-t border-slate-200/60 space-y-2">
              <p className="text-[11px] font-bold text-slate-400 uppercase">Verified Sources</p>
              <div className="flex flex-wrap gap-2">
                {result.sources.map((src: any, idx: number) => {
                  const web = src.web;
                  if (!web) return null;
                  return (
                    <a
                      key={idx}
                      href={web.uri}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs px-3 py-1 rounded-xl bg-white border border-slate-200 hover:border-indigo-300 text-indigo-600 font-medium flex items-center gap-1.5 transition-all shadow-2xs"
                    >
                      <ExternalLink className="w-3 h-3" />
                      {web.title || web.uri}
                    </a>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
