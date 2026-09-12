import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Building2, Search, Filter, Bookmark, ExternalLink, Calculator, FileCheck, Landmark, CheckCircle, ShieldAlert } from 'lucide-react';
import { PAKISTANI_SCHOLARSHIPS } from '../../data/scholarshipsData';
import { Scholarship } from '../../types';

interface PakistaniScholarshipHubProps {
  onToggleBookmark: (scholarship: Scholarship) => void;
  savedIds: string[];
}

export const PakistaniScholarshipHub: React.FC<PakistaniScholarshipHubProps> = ({
  onToggleBookmark,
  savedIds,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [selectedScholarship, setSelectedScholarship] = useState<Scholarship | null>(null);

  // PKR Financial Aid Estimator state
  const [familyIncome, setFamilyIncome] = useState<number>(45000);
  const [universityType, setUniversityType] = useState<'Public' | 'Private'>('Public');

  const filteredScholarships = PAKISTANI_SCHOLARSHIPS.filter((s) => {
    const matchesSearch =
      s.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.provider.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.description.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory = categoryFilter === 'All' || s.category === categoryFilter;

    return matchesSearch && matchesCategory;
  });

  // Calculate projected PKR aid eligibility tier
  const calculateAidTier = () => {
    if (familyIncome <= 45000) {
      return {
        tier: '100% Full Financial Aid + Monthly Stipend',
        badge: 'Top Priority Need',
        eligibleGrants: ['Ehsaas Undergraduate', 'LUMS NOP', 'PEEF Master Need', 'NUST NNFA Full'],
        color: 'text-emerald-400 bg-emerald-500/20 border-emerald-500/30',
      };
    } else if (familyIncome <= 80000) {
      return {
        tier: '50% - 100% Tuition Fee Waiver',
        badge: 'Moderate Need Tier',
        eligibleGrants: ['PEEF Special Quotas', 'NUST NNFA Partial', 'FAST Qarz-e-Hasana', 'Scottish Women Aid'],
        color: 'text-amber-400 bg-amber-500/20 border-amber-500/30',
      };
    } else {
      return {
        tier: 'Merit Scholarships & Study Loan Options',
        badge: 'Merit Priority Tier',
        eligibleGrants: ['HEC Overseas PhD Phase-III', 'FAST Merit Aid', 'Ihsan Trust Study Loans'],
        color: 'text-blue-400 bg-blue-500/20 border-blue-500/30',
      };
    }
  };

  const aidTier = calculateAidTier();

  return (
    <div id="pakistani-scholarship-hub" className="space-y-6">
      {/* Hub Hero Header */}
      <div className="bg-gradient-to-r from-emerald-950 via-slate-900 to-green-950 rounded-2xl p-6 md:p-8 text-white border border-emerald-800/60 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full pointer-events-none" />
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-xs font-semibold mb-3">
            <span>🇵🇰</span>
            Pakistani Higher Education Portal
          </div>
          <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight">
            Pakistani Scholarships & Grants
          </h2>
          <p className="mt-2 text-slate-300 text-sm md:text-base leading-relaxed">
            Discover national and provincial funding schemes including HEC Overseas Phase-III, Ehsaas Undergraduate, PEEF, LUMS NOP, NUST, FAST NUCES, and Scottish Women Grants.
          </p>
        </div>
      </div>

      {/* PKR Financial Aid Calculator & Document Attestation Guide */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* PKR Aid Estimator Widget */}
        <div className="lg:col-span-2 bg-slate-900 p-5 rounded-2xl border border-slate-800 shadow-md space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-white text-base flex items-center gap-2">
              <Calculator className="w-5 h-5 text-emerald-400" />
              Pakistani Need-Based Aid Estimator (PKR)
            </h3>
            <span className="text-[11px] px-2 py-0.5 rounded bg-slate-800 text-slate-400">Monthly Family Income Filter</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-300">
            <div>
              <label className="block text-slate-400 mb-1 font-medium">Monthly Family Income: PKR {familyIncome.toLocaleString()}</label>
              <input
                id="range-family-income"
                type="range"
                min="15000"
                max="200000"
                step="5000"
                value={familyIncome}
                onChange={(e) => setFamilyIncome(Number(e.target.value))}
                className="w-full accent-emerald-500 bg-slate-950 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                <span>PKR 15,000</span>
                <span>PKR 100,000</span>
                <span>PKR 200,000+</span>
              </div>
            </div>

            <div>
              <label className="block text-slate-400 mb-1 font-medium">Target University Sector</label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => setUniversityType('Public')}
                  className={`py-2 rounded-lg font-semibold text-xs border transition-colors ${
                    universityType === 'Public'
                      ? 'bg-emerald-600 text-white border-emerald-500'
                      : 'bg-slate-950 text-slate-400 border-slate-800'
                  }`}
                >
                  Public Sector
                </button>
                <button
                  onClick={() => setUniversityType('Private')}
                  className={`py-2 rounded-lg font-semibold text-xs border transition-colors ${
                    universityType === 'Private'
                      ? 'bg-emerald-600 text-white border-emerald-500'
                      : 'bg-slate-950 text-slate-400 border-slate-800'
                  }`}
                >
                  Private / Top Semi
                </button>
              </div>
            </div>
          </div>

          {/* Aid Outcome Box */}
          <div className={`p-4 rounded-xl border ${aidTier.color} text-xs space-y-1.5`}>
            <div className="flex items-center justify-between font-bold">
              <span>Estimated Coverage: {aidTier.tier}</span>
              <span className="text-[10px] uppercase font-extrabold px-2 py-0.5 rounded bg-slate-950/60">{aidTier.badge}</span>
            </div>
            <p className="text-slate-300">
              Matched Schemes: <strong className="text-white">{aidTier.eligibleGrants.join(', ')}</strong>
            </p>
          </div>
        </div>

        {/* Attestation Quick Checklist */}
        <div className="bg-slate-900 p-5 rounded-2xl border border-slate-800 shadow-md space-y-3">
          <h3 className="font-bold text-white text-base flex items-center gap-2">
            <FileCheck className="w-5 h-5 text-emerald-400" />
            HEC & IBCC Attestation Check
          </h3>
          <ul className="text-xs text-slate-300 space-y-2">
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span><strong>Matric & FSc:</strong> IBCC Equivalence / Attestation required.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span><strong>BS Degree:</strong> HEC Degree Equivalence via HEC E-portal.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span><strong>Financial Affidavit:</strong> Parent salary slip + Stamp paper.</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Search Toolbar */}
      <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 shadow-md space-y-3 sm:space-y-0 sm:flex sm:items-center sm:justify-between sm:gap-4">
        <div className="relative flex-1">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            id="input-search-pakistani"
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search Pakistani grants e.g., HEC, Ehsaas, LUMS, PEEF, FAST..."
            className="w-full pl-10 pr-4 py-2 bg-slate-950 border border-slate-800 rounded-lg text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-emerald-500"
          />
        </div>

        <select
          id="select-pakistani-category"
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          className="bg-slate-950 border border-slate-800 text-slate-200 text-xs rounded-lg px-3 py-2 focus:outline-none focus:border-emerald-500"
        >
          <option value="All">All Pakistani Categories</option>
          <option value="HEC National Scheme">HEC National Scheme</option>
          <option value="Need Based Govt">Need Based Govt</option>
          <option value="Provincial Endowment">Provincial Endowment (PEEF)</option>
          <option value="University Financial Aid">University Financial Aid</option>
          <option value="Women Empowerment">Women Empowerment</option>
        </select>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredScholarships.map((scholarship) => {
          const isSaved = savedIds.includes(scholarship.id);
          return (
            <div
              key={scholarship.id}
              id={`pakistani-card-${scholarship.id}`}
              className="bg-slate-900 border border-slate-800 hover:border-emerald-700/60 rounded-2xl p-5 flex flex-col justify-between shadow-lg transition-all duration-200 hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    {scholarship.category}
                  </span>
                  <button
                    id={`btn-bookmark-pak-${scholarship.id}`}
                    onClick={() => onToggleBookmark(scholarship)}
                    className={`p-1.5 rounded-lg border transition-colors ${
                      isSaved
                        ? 'bg-amber-500/20 text-amber-400 border-amber-500/40'
                        : 'bg-slate-800 text-slate-400 border-slate-700 hover:text-white'
                    }`}
                  >
                    <Bookmark className="w-4 h-4 fill-current" />
                  </button>
                </div>

                <h3 className="font-bold text-lg text-white leading-snug">
                  {scholarship.title}
                </h3>
                <p className="text-xs text-slate-400 mt-1 font-medium">
                  Authority: <span className="text-slate-300">{scholarship.provider}</span>
                </p>

                <p className="text-xs text-slate-300 mt-3 line-clamp-3 leading-relaxed">
                  {scholarship.description}
                </p>

                <div className="mt-4 p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-emerald-400 font-semibold">
                  Coverage: {scholarship.amount}
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                <span>Deadline: <strong className="text-white">{scholarship.deadline}</strong></span>
                <button
                  onClick={() => setSelectedScholarship(scholarship)}
                  className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-medium transition-colors"
                >
                  View Guide
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Modal Detail View */}
      <AnimatePresence>
        {selectedScholarship && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.1 }}
              className="bg-slate-900 border border-slate-800 rounded-2xl max-w-2xl w-full p-6 text-slate-100 shadow-2xl max-h-[90vh] overflow-y-auto relative text-left"
            >
              <button
                onClick={() => setSelectedScholarship(null)}
                className="absolute top-4 right-4 p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white cursor-pointer"
              >
                ✕
              </button>

              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                {selectedScholarship.category}
              </span>

              <h3 className="text-2xl font-bold text-white mt-2">{selectedScholarship.title}</h3>
              <p className="text-xs text-slate-400 mt-1">Provider: {selectedScholarship.provider}</p>

              <div className="mt-4 p-3 rounded-xl bg-slate-950 border border-slate-800 text-emerald-400 text-sm font-semibold">
                Financial Coverage: {selectedScholarship.amount}
              </div>

              <div className="mt-4 space-y-3 text-xs text-slate-300">
                <p className="text-sm text-slate-200">{selectedScholarship.description}</p>

                <div>
                  <h4 className="font-bold text-white text-sm mb-1 flex items-center gap-1.5">
                    <CheckCircle className="w-4 h-4 text-emerald-400" /> Eligibility Criteria:
                  </h4>
                  <ul className="list-disc list-inside space-y-1 text-slate-400 pl-2">
                    {(selectedScholarship.eligibility || []).map((req, idx) => (
                      <li key={idx}>{req}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-white text-sm mb-1 flex items-center gap-1.5">
                    <ShieldAlert className="w-4 h-4 text-amber-400" /> Required Documents & Attestations:
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
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-colors cursor-pointer"
                >
                  <span>Official Application Link</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
