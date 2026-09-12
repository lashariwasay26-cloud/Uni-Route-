import { UniversityTrackItem } from '../data/scholarshipTracksData';

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
} {
  const name = uni.universityName || 'University';

  // 1. Compute logoText if missing, empty, or generic placeholder "UNI"
  let logoText = uni.logoText;
  if (!logoText || logoText.trim() === '' || logoText === 'UNI') {
    logoText = computeUniversityAbbreviation(name);
  }

  // 2. Compute logoBg if missing, empty, or lacks background class
  let logoBg = uni.logoBg;
  if (!logoBg || (!logoBg.includes('bg-') && !logoBg.includes('from-'))) {
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    const idx = Math.abs(hash) % COLOR_PALETTES.length;
    logoBg = COLOR_PALETTES[idx];
  }

  return { logoText, logoBg };
}

