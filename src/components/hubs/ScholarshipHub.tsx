import React, { useState } from 'react';
import { Search, Filter, Globe, GraduationCap, Calendar, CheckCircle2, ExternalLink, Bookmark, ShieldCheck, Sparkles } from 'lucide-react';
import { GLOBAL_SCHOLARSHIPS } from '../../data/scholarshipsData';
import { Scholarship } from '../../types';

interface ScholarshipHubProps {
  onToggleBookmark: (scholarship: Scholarship) => void;
  savedIds: string[];
}

export const ScholarshipHub: React.FC<ScholarshipHubProps> = ({
  onToggleBookmark,
  savedIds,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [degreeFilter, setDegreeFilter] = useState<string>('All');
  const [coverageFilter, setCoverageFilter] = useState<string>('All');
  const [selectedScholarship, setSelectedScholarship] = useState<Scholarship | null>(null);

  const filteredScholarships = GLOBAL_SCHOLARSHIPS.filter((s) => {
    const matchesSearch =
      s.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.provider.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.description.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesDegree = degreeFilter === 'All' || s.degree === degreeFilter || s.degree === 'All Levels';
    const matchesCoverage = coverageFilter === 'All' || s.coverage === coverageFilter;

    return matchesSearch && matchesDegree && matchesCoverage;
  });

  return (
    <div id="scholarship-hub" className="space-y-6">
      {/* Hub Hero Header */}
      <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 rounded-2xl p-6 md:p-8 text-white border border-blue-800/50 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full pointer-events-none" />
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30 text-xs font-semibold mb-3">
            <Globe className="w-3.5 h-3.5" />
            Global Higher Education Grants
          </div>
          <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight">
            Global Scholarship Finder
          </h2>
          <p className="mt-2 text-slate-300 text-sm md:text-base leading-relaxed">
            Search top fully-funded scholarships, government awards, and university grants across the US, UK, Germany, Europe, Japan, and worldwide.
          </p>
        </div>
      </div>

      {/* Filter & Search Toolbar */}
      <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 shadow-md space-y-3 md:space-y-0 md:flex md:items-center md:justify-between md:gap-4">
        {/* Search Input */}
        <div className="relative flex-1">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            id="input-search-scholarship"
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by scholarship name, country, university, or keyword..."
            className="w-full pl-10 pr-4 py-2 bg-slate-950 border border-slate-800 rounded-lg text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-2">
          <div className="flex items-center gap-1 text-xs text-slate-400 px-1">
            <Filter className="w-3.5 h-3.5" />
            <span>Filters:</span>
          </div>

          <select
            id="select-degree-filter"
            value={degreeFilter}
            onChange={(e) => setDegreeFilter(e.target.value)}
            className="bg-slate-950 border border-slate-800 text-slate-200 text-xs rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500"
          >
            <option value="All">All Degrees</option>
            <option value="Undergraduate">Undergraduate</option>
            <option value="Masters">Masters</option>
            <option value="PhD">PhD</option>
          </select>

          <select
            id="select-coverage-filter"
            value={coverageFilter}
            onChange={(e) => setCoverageFilter(e.target.value)}
            className="bg-slate-950 border border-slate-800 text-slate-200 text-xs rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500"
          >
            <option value="All">All Funding</option>
            <option value="Full Ride">Full Ride</option>
            <option value="Full Tuition">Full Tuition</option>
            <option value="Partial">Partial</option>
          </select>
        </div>
      </div>

      {/* Scholarship Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredScholarships.map((scholarship) => {
          const isSaved = savedIds.includes(scholarship.id);
          return (
            <div
              key={scholarship.id}
              id={`scholarship-card-${scholarship.id}`}
              className="bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-2xl p-5 flex flex-col justify-between shadow-lg transition-all duration-200 hover:-translate-y-1"
            >
              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30">
                    {scholarship.country}
                  </span>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[11px] font-medium px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                      {scholarship.coverage}
                    </span>
                    <button
                      id={`btn-bookmark-${scholarship.id}`}
                      onClick={() => onToggleBookmark(scholarship)}
                      className={`p-1.5 rounded-lg border transition-colors ${
                        isSaved
                          ? 'bg-amber-500/20 text-amber-400 border-amber-500/40'
                          : 'bg-slate-800 text-slate-400 border-slate-700 hover:text-white'
                      }`}
                      title={isSaved ? 'Remove from saved' : 'Save scholarship'}
                    >
                      <Bookmark className="w-4 h-4 fill-current" />
                    </button>
                  </div>
                </div>

                <h3 className="font-bold text-lg text-white leading-snug line-clamp-2">
                  {scholarship.title}
                </h3>
                <p className="text-xs text-slate-400 mt-1 font-medium">
                  Provided by: <span className="text-slate-300">{scholarship.provider}</span>
                </p>

                <p className="text-xs text-slate-300 mt-3 line-clamp-3 leading-relaxed">
                  {scholarship.description}
                </p>

                {/* Amount Highlight */}
                <div className="mt-4 p-2.5 rounded-xl bg-slate-950 border border-slate-800/80 text-xs text-emerald-400 font-semibold flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="line-clamp-1">{scholarship.amount}</span>
                </div>
              </div>

              {/* Bottom Metadata & Button */}
              <div className="mt-5 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                <div className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-blue-400" />
                  <span>Due: {scholarship.deadline}</span>
                </div>
                <button
                  id={`btn-view-details-${scholarship.id}`}
                  onClick={() => setSelectedScholarship(scholarship)}
                  className="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium transition-colors"
                >
                  View Details
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {filteredScholarships.length === 0 && (
        <div className="text-center py-12 bg-slate-900 rounded-2xl border border-slate-800 text-slate-400">
          <p className="text-base font-semibold">No global scholarships match your search criteria.</p>
          <p className="text-xs mt-1">Try resetting your filters or searching for terms like "Fulbright", "Germany", or "Masters".</p>
        </div>
      )}

      {/* Modal Detail View */}
      {selectedScholarship && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-2xl w-full p-6 text-slate-100 shadow-2xl max-h-[90vh] overflow-y-auto relative">
            <button
              onClick={() => setSelectedScholarship(null)}
              className="absolute top-4 right-4 p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white"
            >
              ✕
            </button>

            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-500/20 text-blue-300">
                {selectedScholarship.country}
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300">
                {selectedScholarship.coverage}
              </span>
            </div>

            <h3 className="text-2xl font-bold text-white">{selectedScholarship.title}</h3>
            <p className="text-xs text-slate-400 mt-1">Provider: {selectedScholarship.provider}</p>

            <div className="mt-4 p-3 rounded-xl bg-slate-950 border border-slate-800 text-emerald-400 text-sm font-semibold">
              Grant Value: {selectedScholarship.amount}
            </div>

            <div className="mt-4 space-y-3 text-xs text-slate-300">
              <p className="text-sm text-slate-200">{selectedScholarship.description}</p>

              <div>
                <h4 className="font-bold text-white text-sm mb-1 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-400" /> Key Eligibility Requirements:
                </h4>
                <ul className="list-disc list-inside space-y-1 text-slate-400 pl-2">
                  {(selectedScholarship.eligibility || []).map((req, idx) => (
                    <li key={idx}>{req}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-white text-sm mb-1 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-purple-400" /> Mandatory Documents:
                </h4>
                <ul className="list-disc list-inside space-y-1 text-slate-400 pl-2">
                  {(selectedScholarship.documentsRequired || []).map((doc, idx) => (
                    <li key={idx}>{doc}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
              <div className="text-xs text-slate-400">
                Application Deadline: <strong className="text-white">{selectedScholarship.deadline}</strong>
              </div>
              <a
                href={selectedScholarship.applicationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition-colors"
              >
                <span>Apply Official Portal</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
