import { CSSProperties } from 'react';
import { UniversityTrackItem } from '../types';

const TAILWIND_COLOR_PALETTE: Record<string, Record<string | number, string>> = {
  slate: { 50: "#f8fafc", 100: "#f1f5f9", 200: "#e2e8f0", 300: "#cbd5e1", 400: "#94a3b8", 500: "#64748b", 600: "#475569", 700: "#334155", 800: "#1e293b", 900: "#0f172a", 950: "#020617" },
  gray: { 50: "#f9fafb", 100: "#f3f4f6", 200: "#e5e7eb", 300: "#d1d5db", 400: "#9ca3af", 500: "#6b7280", 600: "#4b5563", 700: "#374151", 800: "#1f2937", 900: "#111827", 950: "#030712" },
  zinc: { 50: "#fafafa", 100: "#f4f4f5", 200: "#e4e4e7", 300: "#d4d4d8", 400: "#a1a1aa", 500: "#71717a", 600: "#52525b", 700: "#3f3f46", 800: "#27272a", 900: "#18181b", 950: "#09090b" },
  neutral: { 50: "#fafafa", 100: "#f5f5f5", 200: "#e5e5e5", 300: "#d4d4d4", 400: "#a3a3a3", 500: "#737373", 600: "#525252", 700: "#404040", 800: "#262626", 900: "#171717", 950: "#0a0a0a" },
  stone: { 50: "#fafaf9", 100: "#f5f5f4", 200: "#e7e5e4", 300: "#d6d3d1", 400: "#a8a29e", 500: "#78716c", 600: "#57534e", 700: "#44403c", 800: "#292524", 900: "#1c1917", 950: "#0c0a09" },
  red: { 50: "#fef2f2", 100: "#fee2e2", 200: "#fecaca", 300: "#fca5a5", 400: "#f87171", 500: "#ef4444", 600: "#dc2626", 700: "#b91c1c", 800: "#991b1b", 900: "#7f1d1d", 950: "#450a0a" },
  orange: { 50: "#fff7ed", 100: "#ffedd5", 200: "#fed7aa", 300: "#fdba74", 400: "#fb923c", 500: "#f97316", 600: "#ea580c", 700: "#c2410c", 800: "#9a3412", 900: "#7c2d12", 950: "#431407" },
  amber: { 50: "#fffbeb", 100: "#fef3c7", 200: "#fde68a", 300: "#fcd34d", 400: "#fbbf24", 500: "#f59e0b", 600: "#d97706", 700: "#b45309", 800: "#92400e", 900: "#78350f", 950: "#451a03" },
  yellow: { 50: "#fefce8", 100: "#fef9c3", 200: "#fef08a", 300: "#fde047", 400: "#facc15", 500: "#eab308", 600: "#ca8a04", 700: "#a16207", 800: "#854d0e", 900: "#713f12", 950: "#422006" },
  lime: { 50: "#f7fee7", 100: "#ecfccb", 200: "#d9f99d", 300: "#bef264", 400: "#a3e635", 500: "#84cc16", 600: "#65a30d", 700: "#4d7c0f", 800: "#3f6212", 900: "#365314", 950: "#1a2e05" },
  green: { 50: "#f0fdf4", 100: "#dcfce7", 200: "#bbf7d0", 300: "#86efac", 400: "#4ade80", 500: "#22c55e", 600: "#16a34a", 700: "#15803d", 800: "#166534", 900: "#14532d", 950: "#052e16" },
  emerald: { 50: "#ecfdf5", 100: "#d1fae5", 200: "#a7f3d0", 300: "#6ee7b7", 400: "#34d399", 500: "#10b981", 600: "#059669", 700: "#047857", 800: "#065f46", 900: "#064e3b", 950: "#022c22" },
  teal: { 50: "#f0fdfa", 100: "#ccfbf1", 200: "#99f6e4", 300: "#5eead4", 400: "#2dd4bf", 500: "#14b8a6", 600: "#0d9488", 700: "#0f766e", 800: "#115e59", 900: "#134e4a", 950: "#042f2e" },
  cyan: { 50: "#ecfeff", 100: "#cffafe", 200: "#a5f3fc", 300: "#67e8f9", 400: "#22d3ee", 500: "#06b6d4", 600: "#0891b2", 700: "#0e7490", 800: "#155e75", 900: "#164e63", 950: "#083344" },
  sky: { 50: "#f0f9ff", 100: "#e0f2fe", 200: "#bae6fd", 300: "#7dd3fc", 400: "#38bdf8", 500: "#0ea5e9", 600: "#0284c7", 700: "#0369a1", 800: "#075985", 900: "#0c4a6e", 950: "#082f49" },
  blue: { 50: "#eff6ff", 100: "#dbeafe", 200: "#bfdbfe", 300: "#93c5fd", 400: "#60a5fa", 500: "#3b82f6", 600: "#2563eb", 700: "#1d4ed8", 800: "#1e40af", 900: "#1e3a8a", 950: "#172554" },
  indigo: { 50: "#eef2ff", 100: "#e0e7ff", 200: "#c7d2fe", 300: "#a5b4fc", 400: "#818cf8", 500: "#6366f1", 600: "#4f46e5", 700: "#4338ca", 800: "#3730a3", 900: "#312e81", 950: "#1e1b4b" },
  violet: { 50: "#f5f3ff", 100: "#ede9fe", 200: "#ddd6fe", 300: "#c4b5fd", 400: "#a78bfa", 500: "#8b5cf6", 600: "#7c3aed", 700: "#6d28d9", 800: "#5b21b6", 900: "#4c1d95", 950: "#2e1065" },
  purple: { 50: "#faf5ff", 100: "#f3e8ff", 200: "#e9d5ff", 300: "#d8b4fe", 400: "#c084fc", 500: "#a855f7", 600: "#9333ea", 700: "#7e22ce", 800: "#6b21a8", 900: "#581c87", 950: "#3b0764" },
  fuchsia: { 50: "#fdf4ff", 100: "#fae8ff", 200: "#f5d0fe", 300: "#f0abfc", 400: "#e879f9", 500: "#d946ef", 600: "#c026d3", 700: "#a21caf", 800: "#86198f", 900: "#701a75", 950: "#4a044e" },
  pink: { 50: "#fdf2f8", 100: "#fce7f3", 200: "#fbcfe8", 300: "#f472b6", 400: "#f472b6", 500: "#ec4899", 600: "#db2777", 700: "#be185d", 800: "#9d174d", 900: "#831843", 950: "#500724" },
  rose: { 50: "#fff1f2", 100: "#ffe4e6", 200: "#fecdd3", 300: "#fda4af", 400: "#fb7185", 500: "#f43f5e", 600: "#e11d48", 700: "#be123c", 800: "#9f1239", 900: "#881337", 950: "#4c0519" },
  navy: { 900: "#0a192f", 950: "#020c1b" },
  black: { 500: "#000000", 900: "#000000", 950: "#000000" },
  white: { 500: "#ffffff", 900: "#ffffff", 950: "#ffffff" }
};

function resolveTailwindColor(token: string): string {
  if (!token) return "#0f172a";
  const trimmed = token.trim();
  if (trimmed.startsWith("#") || trimmed.startsWith("rgb")) return trimmed;
  const clean = trimmed.replace(/^(from-|to-|bg-)/, "").trim();
  if (clean === "black") return "#000000";
  if (clean === "white") return "#ffffff";
  const parts = clean.split("-");
  if (parts.length >= 2) {
    const colorName = parts[0];
    const shade = parts[1];
    if (TAILWIND_COLOR_PALETTE[colorName] && TAILWIND_COLOR_PALETTE[colorName][shade]) {
      return TAILWIND_COLOR_PALETTE[colorName][shade];
    }
  }
  if (TAILWIND_COLOR_PALETTE[clean] && TAILWIND_COLOR_PALETTE[clean][900]) {
    return TAILWIND_COLOR_PALETTE[clean][900];
  }
  return "#0f172a";
}

export function getUniversityLogoStyle(logoBg: string | undefined): CSSProperties {
  if (!logoBg || typeof logoBg !== 'string' || !logoBg.trim()) {
    return { background: 'linear-gradient(135deg, #1e3a8a, #0f172a)', color: '#ffffff' };
  }

  const str = logoBg.trim();

  // If it is a gradient specification (from-... to-...)
  if (str.includes("from-") && str.includes("to-")) {
    const fromMatch = str.match(/from-([a-z0-9\-]+)/);
    const toMatch = str.match(/to-([a-z0-9\-]+)/);
    const c1 = fromMatch ? resolveTailwindColor(fromMatch[0]) : "#1e3a8a";
    const c2 = toMatch ? resolveTailwindColor(toMatch[0]) : "#0f172a";
    return {
      background: `linear-gradient(135deg, ${c1}, ${c2})`,
      backgroundColor: c1,
      color: '#ffffff'
    };
  }

  // If single bg class (e.g. bg-emerald-800, bg-blue-900)
  if (str.startsWith("bg-")) {
    const color = resolveTailwindColor(str);
    return {
      backgroundColor: color,
      background: color,
      color: '#ffffff'
    };
  }

  // If hex or rgb or raw CSS gradient
  if (str.startsWith("#") || str.startsWith("rgb") || str.includes("gradient")) {
    return {
      background: str,
      backgroundColor: str.startsWith("#") || str.startsWith("rgb") ? str : undefined,
      color: '#ffffff'
    };
  }

  return {
    background: 'linear-gradient(135deg, #1e3a8a, #0f172a)',
    color: '#ffffff'
  };
}

const COLOR_PALETTES = [
  'from-blue-700 to-indigo-950',
  'from-red-700 to-rose-950',
  'from-emerald-700 to-teal-950',
  'from-purple-700 to-indigo-950',
  'from-amber-700 to-orange-950',
  'from-cyan-700 to-blue-950',
  'from-sky-700 to-blue-900',
  'from-violet-700 to-purple-950',
  'from-teal-700 to-slate-900',
  'from-rose-700 to-red-950'
];

const SPECIAL_ACRONYMS: Record<string, string> = {
  'University of Lisbon': 'UL',
  'Universidade de Lisboa': 'UL',
  'University of Porto': 'UP',
  'University of Coimbra': 'UC',
  'NOVA University Lisbon': 'NOVA',
  'University of Minho': 'UM',
  'University of Aveiro': 'UA',
  'University of Barcelona': 'UB',
  'Autonomous University of Barcelona': 'UAB',
  'Complutense University of Madrid': 'UCM',
  'Autonomous University of Madrid': 'UAM',
  'Polytechnic University of Madrid': 'UPM',
  'Technical University of Madrid': 'UPM',
  'University of Navarra': 'UNAV',
  'Pompeu Fabra University': 'UPF',
  'University of Vienna': 'UVIE',
  'Vienna University of Technology': 'TUW',
  'TU Wien': 'TUW',
  'Medical University of Vienna': 'MUW',
  'University of Innsbruck': 'LFUI',
  'University of Graz': 'UNI-GRAZ',
  'Jagiellonian University': 'UJ',
  'University of Warsaw': 'UW',
  'Warsaw University of Technology': 'PW',
  'AGH University of Science and Technology': 'AGH',
  'Wrocław University of Science and Technology': 'PWr',
  'University of Wrocław': 'UWr',
  'Adam Mickiewicz University': 'AMU',
  'Eötvös Loránd University': 'ELTE',
  'Semmelweis University': 'SE',
  'Budapest University of Technology and Economics': 'BME',
  'Corvinus University of Budapest': 'CUB',
  'University of Szeged': 'SZTE',
  'University of Debrecen': 'DE',
  'King Saud University': 'KSU',
  'King Fahd University of Petroleum and Minerals': 'KFUPM',
  'King Fahd University of Petroleum & Minerals': 'KFUPM',
  'King Abdulaziz University': 'KAU',
  'King Abdullah University of Science and Technology': 'KAUST',
  'Prince Mohammad Bin Fahd University': 'PMU',
  'King Khalid University': 'KKU',
  'Alfaisal University': 'AU',
  'Middle East Technical University': 'METU',
  'Boğaziçi University': 'BOUN',
  'Bilkent University': 'BILKENT',
  'Istanbul Technical University': 'ITU',
  'Koç University': 'KU',
  'Sabancı University': 'SU',
  'Hacettepe University': 'HU',
  'Ankara University': 'ANKARA',
  'Istanbul University': 'IU',
};

export function computeUniversityAbbreviation(name: string): string {
  if (!name) return 'UNI';
  const cleanKey = name.trim();
  
  if (SPECIAL_ACRONYMS[cleanKey]) {
    return SPECIAL_ACRONYMS[cleanKey];
  }

  for (const [key, acronym] of Object.entries(SPECIAL_ACRONYMS)) {
    if (cleanKey.toLowerCase().includes(key.toLowerCase())) {
      return acronym;
    }
  }

  // Extract acronym inside parentheses e.g., (TUM), (UNIGE), (KAUST), (METU)
  const parenMatch = name.match(/\(([A-Za-z0-9\-]{2,8})\)/);
  if (parenMatch) {
    return parenMatch[1].toUpperCase();
  }

  const cleanName = name.replace(/\(.*?\)/g, '').trim();
  const words = cleanName.split(/\s+/).filter(Boolean);
  const ignore = new Set(['of', 'and', 'the', 'for', 'in', 'de', 'la', 'des', 'der', 'und', 'di', 'del', 'at', 'da', 'do', 'dos', 'das', 'e', 'a', 'o', 'von', 'zu', 'am', 'st', 'saint']);
  const meaningful = words.filter((w) => !ignore.has(w.toLowerCase()) && w.length > 0);

  if (meaningful.length === 0) {
    return name.slice(0, 3).toUpperCase();
  } else if (meaningful.length === 1) {
    const w = meaningful[0];
    return w.length <= 4 ? w.toUpperCase() : w.slice(0, 3).toUpperCase();
  } else if (meaningful.length === 2) {
    return (meaningful[0][0] + meaningful[1][0]).toUpperCase();
  } else if (meaningful.length === 3) {
    return (meaningful[0][0] + meaningful[1][0] + meaningful[2][0]).toUpperCase();
  } else if (meaningful.length === 4) {
    return (meaningful[0][0] + meaningful[1][0] + meaningful[2][0] + meaningful[3][0]).toUpperCase();
  } else {
    return meaningful.slice(0, 4).map((w) => w[0].toUpperCase()).join('');
  }
}

export function getUniversityLogo(uni: Partial<UniversityTrackItem> & { universityName?: string; logoText?: string; logoBg?: string }): {
  logoText: string;
  logoBg: string;
  logoStyle: CSSProperties;
} {
  const name = uni.universityName || 'University';

  // 1. Compute logoText if missing or empty
  let logoText = (uni.logoText && typeof uni.logoText === 'string') ? uni.logoText.trim() : '';
  if (!logoText || logoText === 'UNI') {
    logoText = computeUniversityAbbreviation(name);
  }

  // 2. Compute logoBg if missing or empty
  let logoBg = (uni.logoBg && typeof uni.logoBg === 'string') ? uni.logoBg.trim() : '';
  if (!logoBg) {
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    const idx = Math.abs(hash) % COLOR_PALETTES.length;
    logoBg = 'bg-gradient-to-br ' + COLOR_PALETTES[idx];
  } else if (logoBg.includes('from-') && !logoBg.includes('bg-gradient-')) {
    logoBg = 'bg-gradient-to-br ' + logoBg;
  }

  const logoStyle = getUniversityLogoStyle(logoBg);

  return { logoText, logoBg, logoStyle };
}

export function getSatSummary(uni: {
  satRequirementCategory?: string;
  minSat?: string;
  satPolicyDetails?: string;
}): {
  headline: string;
  details: string;
} {
  const cat = (uni.satRequirementCategory || '').trim();
  const minSat = (uni.minSat || '').trim();
  const details = (uni.satPolicyDetails || '').trim();
  const fullText = `${cat} ${minSat} ${details}`;
  const lower = fullText.toLowerCase();

  // 1. Detect Policy / Status (Compulsory vs Optional vs Not Required vs Program-Specific)
  let policy = '';
  if (lower.includes('program-specific') || lower.includes('program specific') || (lower.includes('csca') && !lower.includes('sat'))) {
    policy = 'Program-Specific';
  } else if (lower.includes('not required') || lower.includes('not mandatory') || lower.includes('no sat') || cat === 'Not Required') {
    policy = 'Not Required';
  } else if (lower.includes('test-flexible')) {
    policy = 'Test-Flexible';
  } else if (lower.includes('test-optional') || lower.includes('test optional') || (lower.includes('optional') && !lower.includes('mandatory') && !lower.includes('compulsory') && !lower.includes('required'))) {
    policy = 'Optional';
  } else if (
    lower.includes('mandatory') ||
    lower.includes('compulsory') ||
    lower.includes('sat or act required') ||
    lower.includes('sat/act required') ||
    lower.includes('testing required') ||
    lower.includes('standardized testing required') ||
    lower.includes('standardized test required') ||
    cat === 'Compulsory' ||
    (lower.includes('required') && !lower.includes('not required') && !lower.includes('optional'))
  ) {
    policy = 'Compulsory';
  } else if (cat === 'Optional') {
    policy = 'Optional';
  }

  // 2. Detect Score / Range / Median
  const rangeMatch = details.match(/(\d{3,4})\s*(?:to|-|–)\s*(\d{3,4})/i) || minSat.match(/(\d{3,4})\s*(?:to|-|–)\s*(\d{3,4})/i);
  const isMedian = lower.includes('median');
  
  const plusMatch = details.match(/(\d{3,4})\+/i) || minSat.match(/(\d{3,4})\+/i);
  const isCatNumeric = /^\d{3,4}$/.test(cat);

  let scoreText = '';
  if (rangeMatch) {
    const low = rangeMatch[1];
    const high = rangeMatch[2];
    scoreText = isMedian ? `Median: ${low}–${high}` : `${low}–${high}`;
  } else if (plusMatch) {
    scoreText = `${plusMatch[1]}+`;
  } else if (isCatNumeric) {
    scoreText = `${cat}+`;
  }

  // 3. Special criteria notes (program specific, entry tests, etc.)
  let note = '';
  if (lower.includes('net') && lower.includes('primary')) {
    note = 'NET Primary';
  } else if (lower.includes('stem') && (lower.includes('sbasse') || lower.includes('subject test'))) {
    note = 'STEM Subject Test';
  } else if (lower.includes('csca') && !policy.includes('Program-Specific')) {
    note = 'CSCA Required';
  }

  const parts = [];
  if (policy) parts.push(policy);
  if (scoreText) parts.push(scoreText);
  if (note && !parts.includes(note)) parts.push(note);

  const headline = parts.length > 0 ? parts.join(' • ') : 'Optional';
  const desc = details || minSat || (cat && cat !== 'Optional' ? `Standardized testing benchmark: ${cat}+ or equivalent secondary credentials.` : 'Standardized testing (SAT/ACT) is optional for admission.');

  return { headline, details: desc };
}

