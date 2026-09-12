export interface ProgramItem {
  name: string;
  ranking: string;
  description: string;
  logoText?: string;
  logoBg?: string;
  degreesOffered?: string[];
  tags?: string[];
  requiresSeparateApp?: boolean;
}

export interface ScholarshipItem {
  id: string;
  title: string;
  amount: string;
  coverage: string;
  eligibility: string;
  description: string;
  deadline: string;
  requiresSeparateApp: boolean;
  tags?: string[];
  applyUrl?: string;
  logoText?: string;
  logoBg?: string;
  degreesOffered?: string[];
}

export interface UniversityTrackItem {
  id: string;
  universityName: string;
  location: string;
  country: string;
  flag: string;
  foundingYear?: string;
  scholarshipTitle: string;
  ranking: string;
  qsSubjectRankings?: string;
  rankingSource?: string;
  coverage: string;
  amountValue: string;
  tuitionFee: string;
  tuitionAmountNumeric: number; // in USD per year (0 if free)
  hasFullRide: boolean;
  hasPartialAid: boolean;
  hasFinancialAid: boolean;
  financialAidType: string;
  financialAidDetails?: string;
  minGpa: string;
  minSat: string;
  satRequirementCategory: string;
  satPolicyDetails?: string;
  minIelts: string;
  ieltsCategory: string;
  toeflRequirement?: string;
  commonAppAccepted?: boolean;
  applicationPortalDetails?: string;
  acceptanceRate: string;
  deadline: string;
  description: string;
  overviewLong?: string;
  topProgramsList?: ProgramItem[];
  allScholarshipsList?: ScholarshipItem[];
  degreesOffered?: string[]; // e.g. ['Undergraduate', 'Graduate', 'PhD']
  tags?: string[];
  requiresSeparateApp?: boolean;
  logoText?: string;
  logoBg?: string; // Tailwind bg color class or hex
  supabaseDbId?: number;
}

export interface GovernmentTrackSection {
  number: number;
  title: string;
  content: string;
}

export interface GovernmentTrackItem {
  id: string;
  programTitle: string;
  sponsorGovernment: string;
  country: string;
  flag: string;
  degreeLevels: string[];
  stipendMonthly: string;
  airfareCovered: boolean;
  healthInsuranceCovered: boolean;
  tuitionCovered: boolean;
  deadline: string;
  bondRequirement: string;
  description: string;
  keyEligibility: string[];
  supabaseDbId?: number;
  // Extended fields to match the layout and UI of the university profile track
  overviewLong?: string;
  fundingType?: string;            // e.g. "Fully Funded", "Partial"
  workExperienceRequired?: string;  // e.g. "2,800 hours", "2 years"
  ageLimit?: string;               // e.g. "Under 21"
  hecNominationRequired?: boolean;
  embassyNominationRequired?: boolean;
  applicationRoute?: string;       // e.g. "Dual Portal", "Direct Online"
  officialSources?: string[];       // links
  stepByStepProcess?: string[];     // steps
  fundingBreakdown?: { expense: string; coverage: string }[];
  restrictions?: string[];
  logoText?: string;
  logoBg?: string;
  eligibleNationalities?: string;
  gpaRequirement?: string;
  ieltsRequirement?: string;
  isEligibleForPakistan?: boolean;
  warningNotice?: string;
  currentStatus?: string;
  currentCycle?: string;
  lastVerifiedDate?: string;
  fullSections?: GovernmentTrackSection[];
  fullSourceText?: string;
}

import { AUSTRALIAN_UNIVERSITIES } from './australianUniversitiesData';
import { ASIAN_UNIVERSITIES } from './asianUniversitiesData';
import { UK_GOVERNMENT_SCHOLARSHIPS } from './ukGovernmentScholarshipsData';
import { ASIAN_GOVERNMENT_SCHOLARSHIPS } from './asianGovernmentScholarshipsData';
import { AMERICAS_GOVERNMENT_SCHOLARSHIPS } from './americasGovernmentScholarshipsData';
import { OCEANIA_GOVERNMENT_SCHOLARSHIPS } from './oceaniaScholarshipsData';
import { AFRICAN_GOVERNMENT_SCHOLARSHIPS } from './africanGovernmentScholarshipsData';
// ...
export const FEATURED_UNIVERSITIES: UniversityTrackItem[] = [
  ...AUSTRALIAN_UNIVERSITIES,
  ...ASIAN_UNIVERSITIES,

  {
    "id": "uni-001",
    "universityName": "Harvard University",
    "location": "Cambridge, Massachusetts, United States",
    "country": "United States",
    "flag": "🇺🇸",
    "foundingYear": "1636",
    "scholarshipTitle": "Harvard Need-Based Financial Aid - 100% Need Met (Full Ride < $85k)",
    "ranking": "#5 Global (QS 2027)",
    "qsSubjectRankings": "QS 2026: #1 Business & Management, #1 Economics and Econometrics, #1 Law and Legal Studies, #1 Medicine, #7 Computer Science and Information Systems",
    "coverage": "Full Ride",
    "amountValue": "Full Ride for Earnings < $85k | 10% Contribution for $150k-$200k",
    "tuitionFee": "$62,226 / year (Tuition) | Total COA ~$91,634 (Net cost based on need)",
    "tuitionAmountNumeric": 62226,
    "hasFullRide": true,
    "hasPartialAid": false,
    "hasFinancialAid": true,
    "financialAidType": "Need-Blind",
    "financialAidDetails": "Harvard is 100% Need-Blind for ALL applicants (Domestic & International) and meets 100% of demonstrated financial need with ZERO required loans. For families earning less than $85,000, Harvard provides a Full Ride ($0 expected parent contribution for tuition, room, board, fees, and stipends). For families earning between $150,000 and $200,000, expected family contribution is capped at approximately 10% of annual income.",
    "minGpa": "3.9+",
    "minSat": "1510 - 1580 (Median SAT)",
    "satRequirementCategory": "1500",
    "satPolicyDetails": "Standardized testing required (SAT / ACT Mandatory). Median enrolled SAT score range is 1510 to 1580. Accepts limited alternative exam options (AP, IB, GCSE/A-Level) only when SAT/ACT are genuinely inaccessible.",
    "minIelts": "7.5+",
    "ieltsCategory": "7.5",
    "toeflRequirement": "100+",
    "commonAppAccepted": true,
    "applicationPortalDetails": "Common Application & QuestBridge",
    "acceptanceRate": "3.4%",
    "deadline": "Nov 1 (Restrictive Early Action) / Jan 1 (Regular Decision)",
    "description": "Founded in 1636, Harvard offers 100% need-blind international admissions and 100% need-met aid. Full Ride for families earning less than $85k, 10% contribution for $150k–$200k. Median SAT: 1510–1580.",
    "overviewLong": "Harvard University is a premier private Ivy League research university located in Cambridge, Massachusetts. Founded in 1636, Harvard is the oldest institution of higher learning in the United States and holds a legendary reputation for global academic leadership, intellectual rigor, and groundbreaking research across disciplines. The undergraduate college, Harvard College, sits at the heart of the university, serving a vibrant community of liberal arts and sciences students. Undergraduates choose from dozens of concentrations spanning humanities, social sciences, natural sciences, engineering, computer science, mathematics, economics, government, and interdisciplinary fields. Harvard’s educational model emphasizes intellectual curiosity, critical inquiry, personal mentorship, and cross-disciplinary exploration. Students learn from world-renowned faculty members, leading researchers, Nobel laureates, and Pulitzer Prize winners.\n\nHarvard’s academic environment is defined by its deep commitment to research, innovation, and public service. Undergraduates participate directly in cutting-edge laboratory work, faculty-led studies, independent thesis projects, global initiatives, and vibrant student-run organizations. Located along the Charles River directly adjacent to Boston, Harvard students enjoy seamless access to one of the world’s most dynamic ecosystems for biotechnology, technology, medicine, finance, law, government, and cultural institutions. This unique geographic and institutional setting empowers students to bridge academic theory with real-world impact, interning at world-class research hospitals, tech incubators, venture capital firms, and international policy centers.\n\nAdmission to Harvard College is exceptionally selective, seeking candidates who demonstrate extraordinary academic achievement, intellectual enthusiasm, personal character, leadership potential, and diverse life experiences. Harvard maintains a test-required policy with a median SAT score range between 1510 and 1580 for enrolled undergraduates. Importantly, Harvard maintains a 100% need-blind admissions policy for all applicants worldwide, regardless of citizenship, country of origin, or financial status. Admitted students receive 100% need-met institutional financial aid with zero required loans. Families with annual incomes under $85,000 pay $0 total cost (Full Ride covering full tuition, room, board, fees, health insurance, and personal stipends), while families earning between $150,000 and $200,000 contribute approximately 10% of family income depending on assets. Harvard’s generous financial aid initiative ensures that cost is never a barrier to attending one of the world’s finest universities.",
    "topProgramsList": [
      {
        "name": "Computer Science and Information Systems",
        "ranking": "#7 Global (QS 2026)",
        "description": "Covers algorithms, artificial intelligence, machine learning, systems, theoretical computer science, computation, and interdisciplinary applications."
      },
      {
        "name": "Economics and Econometrics",
        "ranking": "#1 Global (QS 2026)",
        "description": "Provides study in economic theory, econometrics, finance, development economics, international economics, public economics, and quantitative fields."
      },
      {
        "name": "Business & Management",
        "ranking": "#1 Global (QS 2026)",
        "description": "Primarily associated with HBS at graduate level; undergraduates study economics, quantitative methods, and interdisciplinary entrepreneurship."
      },
      {
        "name": "Law and Legal Studies",
        "ranking": "#1 Global (QS 2026)",
        "description": "Harvard Law School is one of the world leading law institutions; undergraduates prepare through rigorous political science, economics, and humanities curricula."
      },
      {
        "name": "Medicine",
        "ranking": "#1 Global (QS 2026)",
        "description": "World-leading medical and biomedical research ecosystem through Harvard Medical School and affiliated hospitals; top pre-med preparation."
      ,
    "logoText": "HU",
    "logoBg": "from-amber-700 to-orange-950",
    "degreesOffered": ["Undergraduate", "Graduate", "PhD"],
    "tags": ["United States", "Europe", "International", "Research"],
    "requiresSeparateApp": true}
    ],
    "allScholarshipsList": [,

      {
        "id": "uni-001-1",
        "title": "Harvard Financial Aid Initiative (HFAI)",
        "amount": "Full Ride (<$85k income) | 10% Contribution ($150k-$200k income)",
        "coverage": "Full Ride",
        "eligibility": "All admitted undergraduate students (Domestic & International) demonstrating financial need.",
        "description": "Full Ride ($0 total family contribution) for families with annual income under $85,000. Families earning between $150,000 and $200,000 contribute an average of 10% of family income.",
        "deadline": "Nov 1 (REA) / Jan 1 (RD)",
        "requiresSeparateApp": false
      }
    ],
    "degreesOffered": [
      "Undergraduate",
      "Graduate",
      "PhD"
    ],
    "tags": [
      "Need-Blind",
      "100% Need Met",
      "Full Ride < $85k",
      "USA",
      "Ivy League",
      "QS #5"
    ],
    "requiresSeparateApp": false,
    "logoText": "HARV",
    "logoBg": "from-red-900 to-red-950"
  },

  {
    "id": "uni-002",
    "universityName": "Massachusetts Institute of Technology",
    "location": "Cambridge, Massachusetts, United States",
    "country": "United States",
    "flag": "🇺🇸",
    "foundingYear": "1861",
    "scholarshipTitle": "MIT Need-Based Financial Aid - 100% Need Met",
    "ranking": "#1 Global (QS 2027)",
    "qsSubjectRankings": "QS 2026: #1 Computer Science & Info Systems, #1 Engineering & Tech, #1 Electrical Engineering, #1 Mechanical Engineering, #1 Mathematics",
    "coverage": "Full Ride",
    "amountValue": "100% Demonstrated Need Met ($0 tuition for families < $200k)",
    "tuitionFee": "$66,720 / year (Tuition) | Total COA ~$92,760",
    "tuitionAmountNumeric": 66720,
    "hasFullRide": true,
    "hasPartialAid": false,
    "hasFinancialAid": true,
    "financialAidType": "Need-Blind",
    "financialAidDetails": "MIT is 100% Need-Blind for ALL applicants globally (Domestic & International) and meets 100% of demonstrated financial need. Families earning below $200,000 with typical assets attend tuition-free. Families with total income below $100,000 pay $0 total parent contribution.",
    "minGpa": "3.9+",
    "minSat": "1510 - 1580 (Median SAT)",
    "satRequirementCategory": "1500",
    "satPolicyDetails": "SAT or ACT required for all first-year applicants. Enrolled student median SAT range is 1510 to 1580.",
    "minIelts": "7.0+",
    "ieltsCategory": "7.0",
    "toeflRequirement": "90+",
    "commonAppAccepted": false,
    "applicationPortalDetails": "MIT Undergraduate Application & QuestBridge",
    "acceptanceRate": "3.9%",
    "deadline": "Nov 1 (Early Action) / Jan 4 (Regular Action)",
    "description": "Ranked #1 globally in QS 2027, MIT is a world-renowned STEM & research university in Cambridge, MA. 100% need-blind international admissions and 100% need-met aid. Median SAT: 1510–1580.",
    "overviewLong": "The Massachusetts Institute of Technology (MIT) is an internationally celebrated private research university situated in Cambridge, Massachusetts. Founded in 1861 in response to the rapid industrialization of the United States, MIT has consistently driven technological progress, scientific discovery, and societal innovation for over a century and a half. Today, MIT stands at the absolute pinnacle of global higher education, ranked #1 worldwide in the QS World University Rankings. MIT is renowned for its unyielding focus on science, technology, engineering, mathematics, artificial intelligence, computer science, economics, architecture, and management. Its educational philosophy rests firmly on the motto \"Mens et Manus\" (Mind and Hand), bridging rigorous mathematical and scientific theory with hands-on technical creation, prototyping, and real-world problem solving.\n\nAt the undergraduate level, MIT provides an immersive, intense, and collaborative learning environment. Rather than applying to a specific department or professional track, students are admitted to the Institute as a whole. Undergraduates spend their first year exploring fundamental scientific principles across physics, chemistry, biology, calculus, and humanities before declaring a major. MIT’s signature Undergraduate Research Opportunities Program (UROP) enables over 90% of undergraduates to conduct genuine research alongside world-leading scientists and engineers in cutting-edge laboratories. From developing quantum computing algorithms and designing next-generation spacecraft to advancing cancer therapeutics and renewable energy grids, MIT undergraduates contribute directly to major scientific breakthroughs.\n\nMIT’s physical campus stretches along the Charles River, offering a vibrant culture characterized by intellectual curiosity, creative hacking, collaborative teamwork, and entrepreneurial drive. Located in the heart of Kendall Square—often called \"the most innovative square mile on the planet\"—MIT students are embedded within a thriving hub of biotechnology firms, AI labs, robotics startups, and venture capital firms. MIT’s admissions process is highly rigorous and holistic, seeking students who demonstrate academic mastery, passion for problem-solving, resilience, and collaborative spirit. Standardized testing is required for all first-year applicants, with median enrolled SAT scores spanning from 1510 to 1580. Crucially, MIT practices 100% need-blind admissions for all international and domestic applicants, meeting 100% of demonstrated financial need with zero merit or athletic requirements. Families with annual incomes under $200,000 attend tuition-free under MIT’s landmark affordability guidelines, ensuring that financial barriers never stand in the way of the world’s brightest mathematical and scientific minds.",
    "topProgramsList": [
      {
        "name": "Computer Science & Info Systems",
        "ranking": "#1 Global (QS 2026)",
        "description": "Covers algorithms, artificial intelligence, machine learning, systems, theoretical CS, software, computer architecture, cybersecurity, and computational research."
      },
      {
        "name": "Engineering & Technology",
        "ranking": "#1 Global (QS 2026)",
        "description": "Undergraduate engineering across Electrical, Mechanical, Aerospace, Chemical, Biological, Materials Science, Civil, and Nuclear Engineering."
      },
      {
        "name": "Electrical & Electronic Engineering",
        "ranking": "#1 Global (QS 2026)",
        "description": "World-leading research in semiconductors, circuits, signal processing, quantum computing, networks, and photonics."
      },
      {
        "name": "Mechanical, Aeronautical & Manufacturing",
        "ranking": "#1 Global (QS 2026)",
        "description": "Comprehensive study in mechanics, robotics, propulsion, thermal sciences, design, and aerospace systems."
      },
      {
        "name": "Mathematics",
        "ranking": "#1 Global (QS 2026)",
        "description": "Rigorous study in pure mathematics, applied mathematics, probability, statistics, mathematical modeling, and computational mathematics."
      ,
    "logoText": "MIT",
    "logoBg": "from-amber-700 to-orange-950",
    "degreesOffered": ["Undergraduate", "Graduate", "PhD"],
    "tags": ["United States", "Europe", "International", "Research"],
    "requiresSeparateApp": true}
    ],
    "allScholarshipsList": [,

      {
        "id": "uni-002-1",
        "title": "MIT Need-Based Financial Aid",
        "amount": "100% Demonstrated Need Met (Tuition-free for <$200k)",
        "coverage": "Full Ride",
        "eligibility": "All admitted undergraduate applicants demonstrating financial need, regardless of citizenship.",
        "description": "Full need-based grant coverage including tuition, housing, dining, and allowances. $0 tuition for families earning under $200k, and $0 total parent contribution for families under $100k.",
        "deadline": "Nov 1 (EA) / Jan 4 (RA)",
        "requiresSeparateApp": false
      }
    ],
    "degreesOffered": [
      "Undergraduate",
      "Graduate",
      "PhD"
    ],
    "tags": [
      "Need-Blind",
      "100% Need Met",
      "USA",
      "QS #1",
      "STEM"
    ],
    "requiresSeparateApp": false,
    "logoText": "MIT",
    "logoBg": "from-slate-900 to-red-950"
  },

  {
    "id": "uni-003",
    "universityName": "Stanford University",
    "location": "Stanford, California, United States",
    "country": "United States",
    "flag": "🇺🇸",
    "foundingYear": "1885",
    "scholarshipTitle": "Stanford Need-Based Financial Aid - 100% Need Met (Need-Aware)",
    "ranking": "#2 Global (QS 2027)",
    "qsSubjectRankings": "QS 2026: #2 Computer Science, #2 Business & Management, #3 Medicine, #2 Electrical & Electronic Engineering, #6 tie Mathematics",
    "coverage": "Full Ride",
    "amountValue": "100% Demonstrated Need Met for Admitted Students (Need-Aware Admissions)",
    "tuitionFee": "$67,731 / year (Tuition) | Total COA ~$97,545",
    "tuitionAmountNumeric": 67731,
    "hasFullRide": true,
    "hasPartialAid": false,
    "hasFinancialAid": true,
    "financialAidType": "Need-Based",
    "financialAidDetails": "Stanford is Need-Aware for international applicants, meaning requesting financial aid is taken into consideration during admissions. However, Stanford meets 100% of demonstrated financial need for all admitted international students who requested aid during application. Note: International students MUST apply for financial aid at the time of admission.",
    "minGpa": "3.9+",
    "minSat": "1510 - 1580 (Median SAT)",
    "satRequirementCategory": "1500",
    "satPolicyDetails": "SAT or ACT required for undergraduate admissions. Median enrolled SAT score range is 1510 to 1580.",
    "minIelts": "7.5+",
    "ieltsCategory": "7.5",
    "toeflRequirement": "100+",
    "commonAppAccepted": true,
    "applicationPortalDetails": "Common Application & QuestBridge",
    "acceptanceRate": "3.7%",
    "deadline": "Nov 1 (Restrictive Early Action) / Jan 5 (Regular Decision)",
    "description": "Ranked #2 globally in QS 2027 with a 99.2 score, Stanford in Silicon Valley offers 100% need-met financial aid for admitted international students who request aid upon applying. Median SAT: 1510–1580.",
    "overviewLong": "Stanford University is a world-renowned private research university located in Stanford, California, in the heart of Silicon Valley. Founded in 1885 by Leland and Jane Stanford in memory of their only child, Stanford has developed an unparalleled academic and research identity spanning engineering, computer science, medicine, law, business, humanities, natural sciences, and social sciences. Ranked #2 globally in the QS World University Rankings 2027 with an overall score of 99.2, Stanford offers undergraduate students extraordinary academic freedom and cross-disciplinary flexibility within its School of Humanities and Sciences, School of Engineering, Doerr School of Sustainability, and other top-ranked academic divisions.\n\nAt the core of Stanford’s global leadership is its unique symbiotic relationship with Silicon Valley. Situated on an expansive 8,180-acre campus near Palo Alto and San Francisco, Stanford serves as the primary intellectual engine driving the global technology and startup ecosystem. Undergraduates gain unprecedented proximity to world-leading tech giants, venture capital firms, AI laboratories, biotech incubators, and startup founders. Students frequently participate in groundbreaking faculty research, prototype new technologies in university makerspaces, join interdisciplinary innovation hubs, and launch high-impact ventures before graduation.\n\nStanford’s undergraduate admissions process is holistic and highly competitive, seeking students with extraordinary intellectual vitality, academic excellence, leadership, and personal initiative. Standardized testing is required for all first-year applicants, with median enrolled SAT scores ranging between 1510 and 1580. For international applicants, Stanford operates a Need-Aware admissions policy, meaning financial need is considered during the evaluation of international candidates requiring a visa. However, Stanford is deeply committed to access: for all admitted international students who request aid during application, Stanford meets 100% of demonstrated financial need through full institutional scholarships, ensuring that financial constraints never prevent admitted students from pursuing their education at Stanford.",
    "topProgramsList": [
      {
        "name": "Computer Science",
        "ranking": "#2 Global (QS 2026)",
        "description": "Artificial intelligence, machine learning, systems, algorithms, theory, software, human-computer interaction, and computational research."
      },
      {
        "name": "Business & Management",
        "ranking": "#2 Global (QS 2026)",
        "description": "Entrepreneurship, technology venture management, quantitative economics, and corporate strategy."
      },
      {
        "name": "Medicine & Biomedical Sciences",
        "ranking": "#3 Global (QS 2026)",
        "description": "Leading pre-med, bioengineering, neuroscience, and cellular biology research programs."
      },
      {
        "name": "Electrical & Electronic Engineering",
        "ranking": "#2 Global (QS 2026)",
        "description": "Electronics, circuits, robotics, manufacturing, renewable energy, and autonomous systems."
      },
      {
        "name": "Mathematics",
        "ranking": "#6 Global (QS 2026) (tie)",
        "description": "Pure and applied mathematics, probability, statistics, mathematical modeling, and quantitative algorithms."
      ,
    "logoText": "SU",
    "logoBg": "from-cyan-700 to-blue-950",
    "degreesOffered": ["Undergraduate", "Graduate", "PhD"],
    "tags": ["United States", "Europe", "International", "Research"],
    "requiresSeparateApp": true}
    ],
    "allScholarshipsList": [,

      {
        "id": "uni-003-1",
        "title": "Stanford Need-Based International Financial Aid",
        "amount": "100% Demonstrated Need Met",
        "coverage": "Full Ride",
        "eligibility": "Admitted international students who requested aid on their initial application.",
        "description": "Covers full tuition, housing, food, and fees based on demonstrated family financial need.",
        "deadline": "Nov 1 (REA) / Jan 5 (RD)",
        "requiresSeparateApp": false
      }
    ],
    "degreesOffered": [
      "Undergraduate",
      "Graduate",
      "PhD"
    ],
    "tags": [
      "Need-Aware",
      "100% Need Met",
      "USA",
      "Silicon Valley",
      "QS #2"
    ],
    "requiresSeparateApp": false,
    "logoText": "STAN",
    "logoBg": "from-red-800 to-amber-950"
  },

  {
    "id": "uni-004",
    "universityName": "University of Pennsylvania",
    "location": "Philadelphia, Pennsylvania, United States",
    "country": "United States",
    "flag": "🇺🇸",
    "foundingYear": "1740",
    "scholarshipTitle": "Penn Need-Based Financial Aid - 100% Need Met (Zero Loans)",
    "ranking": "#15 Global (QS 2027)",
    "qsSubjectRankings": "QS 2026: #1 Wharton Global MBA Program, #1 Nursing, #6 Accounting & Finance, #7 Business & Management, tie at #12 Economics and Econometrics, #36 Computer Science and Information Systems",
    "coverage": "Full Ride",
    "amountValue": "100% Demonstrated Need Met (Grant-based, Zero Loans)",
    "tuitionFee": "$65,670 / year (Tuition + Fees: $73,978) | Total COA ~$99,082",
    "tuitionAmountNumeric": 65670,
    "hasFullRide": true,
    "hasPartialAid": false,
    "hasFinancialAid": true,
    "financialAidType": "Need-Based",
    "financialAidDetails": "UPenn is Need-Aware for international applicants, but meets 100% of demonstrated financial need with zero student loans for all admitted international aid recipients. All aid is 100% need-based grants.",
    "minGpa": "3.9+",
    "minSat": "1500 - 1570 (Median SAT)",
    "satRequirementCategory": "1500",
    "satPolicyDetails": "SAT or ACT required under Penn standard testing policy. Median enrolled SAT score range is 1500 to 1570.",
    "minIelts": "7.5+",
    "ieltsCategory": "7.5",
    "toeflRequirement": "100+",
    "commonAppAccepted": true,
    "applicationPortalDetails": "Common Application, Coalition Application, or QuestBridge",
    "acceptanceRate": "4.1%",
    "deadline": "Nov 1 (Early Decision) / Jan 5 (Regular Decision)",
    "description": "Founded in 1740 by Benjamin Franklin, Ivy League UPenn in Philadelphia is ranked #15 globally in QS 2027. Offers 100% need-met aid with zero loans for admitted international students.",
    "overviewLong": "The University of Pennsylvania (UPenn) is a prestigious private Ivy League research university located in Philadelphia, Pennsylvania. Founded in 1740 by Benjamin Franklin, Penn is one of America’s oldest institutions of higher education and remains celebrated for its pioneering pragmatic approach to learning, combining classical liberal-arts education with world-class professional training. Ranked #15 globally in the QS World University Rankings 2027, Penn is structured around four renowned undergraduate schools: the College of Arts and Sciences, the Wharton School, the School of Engineering and Applied Science, and the School of Nursing.\n\nPenn’s interdisciplinary focus allows undergraduate students to seamlessly take courses and pursue dual degrees across its undergraduate and professional schools. The Wharton School is world-famous for its undergraduate business education, offering unmatched preparation in finance, accounting, marketing, management, economics, and quantitative analytics. Penn Engineering excels in computer science, robotics, bioengineering, and data science, while Penn Nursing is ranked #1 globally in the QS 2026 subject tables. Situated on a vibrant urban campus in University City, Philadelphia, Penn provides students with direct access to major financial hubs, medical centers, tech startups, and civic organizations.\n\nAdmissions to UPenn is highly selective, evaluating candidates on academic rigor, leadership, character, and engagement. Standardized testing (SAT or ACT) is required, with enrolled median SAT scores spanning 1500 to 1570. For international applicants, Penn practices a Need-Aware admissions process. However, Penn guarantees that 100% of demonstrated financial need is met for all admitted international aid recipients with grant-based packages that require zero student loans. This ensures that admitted international students from all backgrounds receive full financial support to thrive at UPenn.",
    "topProgramsList": [
      {
        "name": "Business & Management (Wharton)",
        "ranking": "#7 Global (QS 2026)",
        "description": "Wharton provides world-leading undergraduate study in finance, accounting, marketing, management, entrepreneurship, and statistics."
      },
      {
        "name": "Nursing",
        "ranking": "#1 Global (QS 2026)",
        "description": "Ranked #1 globally in QS 2026, offering premier clinical training and biomedical research opportunities."
      },
      {
        "name": "Accounting & Finance",
        "ranking": "#6 Global (QS 2026)",
        "description": "Unmatched quantitative financial modeling, investment management, and corporate valuation training."
      },
      {
        "name": "Economics and Econometrics",
        "ranking": "#12 Global (QS 2026) (tie)",
        "description": "Comprehensive study in economic theory, econometrics, public policy, and global development."
      },
      {
        "name": "Computer Science and Information Systems",
        "ranking": "#36 Global (QS 2026)",
        "description": "AI, robotics, bioengineering, cybersecurity, data science, and interdisciplinary technology-business programs."
      },
      {
        "name": "Wharton Global MBA Program",
        "ranking": "#1 Global (QS 2026)",
        "description": "Wharton's world-leading postgraduate MBA program, consistently ranked #1 globally."
      ,
    "logoText": "UP",
    "logoBg": "from-rose-700 to-red-950",
    "degreesOffered": ["Undergraduate", "Graduate", "PhD"],
    "tags": ["United States", "Europe", "International", "Research"],
    "requiresSeparateApp": true}
    ],
    "allScholarshipsList": [,

      {
        "id": "uni-004-1",
        "title": "UPenn Grant-Based Financial Aid Package",
        "amount": "100% Demonstrated Need Met (Zero Student Loans)",
        "coverage": "Full Ride",
        "eligibility": "Admitted international students demonstrating financial need.",
        "description": "Provides grant-based institutional aid covering up to 100% of tuition, room, board, and fees without student loans.",
        "deadline": "Nov 1 (ED) / Jan 5 (RD)",
        "requiresSeparateApp": false
      }
    ],
    "degreesOffered": [
      "Undergraduate",
      "Graduate",
      "PhD"
    ],
    "tags": [
      "Need-Aware",
      "100% Need Met",
      "USA",
      "Ivy League",
      "Wharton",
      "QS #15"
    ],
    "requiresSeparateApp": false,
    "logoText": "PENN",
    "logoBg": "from-blue-900 to-red-950"
  },

  {
    "id": "uni-005",
    "universityName": "Yale University",
    "location": "New Haven, Connecticut, United States",
    "country": "United States",
    "flag": "🇺🇸",
    "foundingYear": "1701",
    "scholarshipTitle": "Yale Need-Based Financial Aid - 100% Need Met (Zero Loans)",
    "ranking": "#=16 Global (QS 2027)",
    "qsSubjectRankings": "QS 2026: #4 Law & Legal Studies, #5 Arts & Humanities, #6 Psychology, #9 Economics and Econometrics, #21 Computer Science and Information Systems, #7 Biological Sciences, #8 Political Science & Government",
    "coverage": "Full Ride",
    "amountValue": "100% Demonstrated Need Met ($0 cost for families < $100k, Zero Loans)",
    "tuitionFee": "$72,500 / year (Tuition) | Total COA ~$94,100 (Housing + Food: $21,600)",
    "tuitionAmountNumeric": 72500,
    "hasFullRide": true,
    "hasPartialAid": false,
    "hasFinancialAid": true,
    "financialAidType": "Need-Blind",
    "financialAidDetails": "Yale is 100% Need-Blind for ALL students globally (Domestic & International) and meets 100% of demonstrated financial need with ZERO required loans. Families earning below $100,000 pay $0 total cost (full tuition, housing, food, and allowances). Families earning below $200,000 receive aid covering at least full tuition.",
    "minGpa": "3.9+",
    "minSat": "1500 - 1580 (Median SAT)",
    "satRequirementCategory": "1500",
    "satPolicyDetails": "SAT or ACT required under Yale test-flexible testing policy. Median enrolled SAT score range is 1500 to 1580.",
    "minIelts": "7.5+",
    "ieltsCategory": "7.5",
    "toeflRequirement": "100+",
    "commonAppAccepted": true,
    "applicationPortalDetails": "Common Application, Coalition Application, or QuestBridge",
    "acceptanceRate": "4.4%",
    "deadline": "Nov 1 (Single-Choice Early Action) / Jan 2 (Regular Decision)",
    "description": "Ranked #=16 globally in QS 2027, Ivy League Yale University in New Haven, CT offers 100% need-blind international admissions and 100% need-met aid with zero loans. Median SAT: 1500–1580.",
    "overviewLong": "Yale University is a private Ivy League research university located in New Haven, Connecticut. Founded in 1701, Yale is the third-oldest institution of higher education in the United States and holds an international reputation for academic supremacy, cultural impact, and intellectual heritage. Yale College, the undergraduate liberal arts heart of the university, provides an exceptionally rich academic environment where students pursue concentrations across humanities, social sciences, natural sciences, engineering, computer science, mathematics, economics, political science, and psychology.\n\nA defining cornerstone of undergraduate life at Yale is its famous residential college system. Every undergraduate is assigned to one of 14 residential colleges, creating intimate, supportive micro-communities complete with living quarters, dining halls, libraries, art studios, and faculty mentorship. Academic flexibility is paramount at Yale: undergraduates are encouraged to explore widely across disciplines without rigid professional siloing, fostering deep analytical thinking, creative synthesis, and lifelong intellectual curiosity. Yale boasts top-ranked departments across political science, economics, history, law preparation, medicine, biological sciences, and computer science.\n\nIn admissions, Yale maintains a 100% need-blind policy for all international applicants worldwide, ensuring that ability to pay never impacts an admission decision regardless of citizenship. Yale meets 100% of demonstrated financial need for every admitted undergraduate with zero required student loans. Under Yale’s expanded affordability threshold, qualifying families earning under $100,000 pay $0 total cost (covering tuition, housing, food, and personal expenses), while families earning under $200,000 receive aid covering at least full tuition. Standardized testing (SAT/ACT) is required under Yale’s test-flexible policy, with median enrolled SAT scores spanning 1500 to 1580.",
    "topProgramsList": [
      {
        "name": "Computer Science and Information Systems",
        "ranking": "#21 Global (QS 2026)",
        "description": "Artificial intelligence, machine learning, algorithms, systems, theory, and computational research."
      },
      {
        "name": "Economics and Econometrics",
        "ranking": "#9 Global (QS 2026)",
        "description": "Economic theory, econometrics, finance, development economics, and public policy."
      },
      {
        "name": "Political Science & Government",
        "ranking": "#8 Global (QS 2026)",
        "description": "Political theory, comparative politics, international relations, American politics, and public policy."
      },
      {
        "name": "Psychology",
        "ranking": "#6 Global (QS 2026)",
        "description": "Cognition, neuroscience, development, social behavior, and behavioral science research."
      },
      {
        "name": "Biological Sciences",
        "ranking": "#7 Global (QS 2026)",
        "description": "Biology, genetics, molecular biology, ecology, neuroscience, and pre-med research."
      ,
    "logoText": "YU",
    "logoBg": "from-violet-700 to-purple-950",
    "degreesOffered": ["Undergraduate", "Graduate", "PhD"],
    "tags": ["United States", "Europe", "International", "Research"],
    "requiresSeparateApp": true}
    ],
    "allScholarshipsList": [,

      {
        "id": "uni-005-1",
        "title": "Yale Need-Based Financial Aid Package (Zero Loans)",
        "amount": "100% Demonstrated Need Met ($0 cost <$100k)",
        "coverage": "Full Ride",
        "eligibility": "All admitted undergraduate students (Domestic & International) demonstrating financial need.",
        "description": "Covers 100% of demonstrated need with zero loans. Families with income under $100,000 pay $0 total cost.",
        "deadline": "Nov 1 (SCEA) / Jan 2 (RD)",
        "requiresSeparateApp": false
      }
    ],
    "degreesOffered": [
      "Undergraduate",
      "Graduate",
      "PhD"
    ],
    "tags": [
      "Need-Blind",
      "100% Need Met",
      "USA",
      "Ivy League",
      "Zero Loans",
      "QS #16"
    ],
    "requiresSeparateApp": false,
    "logoText": "YALE",
    "logoBg": "from-blue-900 to-slate-950"
  },

  {
    "id": "uni-006",
    "universityName": "Cornell University",
    "location": "Ithaca, New York, United States",
    "country": "United States",
    "flag": "🇺🇸",
    "foundingYear": "1865",
    "scholarshipTitle": "Cornell Need-Based Financial Aid - 100% Need Met (Need-Aware)",
    "ranking": "#=16 Global (QS 2027)",
    "qsSubjectRankings": "QS 2026: #4 Agriculture & Forestry, #3 Veterinary Science, #19 Architecture and Built Environment, #17 Computer Science and Information Systems, #16 Hotel Administration, #35 Engineering & Tech",
    "coverage": "Full Ride",
    "amountValue": "100% Demonstrated Need Met for Admitted Students (Need-Aware Admissions)",
    "tuitionFee": "$73,946 / year (Tuition) | Total COA ~$95,294 (Housing & Dining: ~$21,348)",
    "tuitionAmountNumeric": 73946,
    "hasFullRide": true,
    "hasPartialAid": false,
    "hasFinancialAid": true,
    "financialAidType": "Need-Based",
    "financialAidDetails": "Cornell is Need-Aware for international undergraduate applicants, meaning financial need is considered during admission decisions. However, Cornell meets 100% of demonstrated financial need for all admitted international students who requested aid during initial application.",
    "minGpa": "3.9+",
    "minSat": "1480 - 1560 (Median SAT)",
    "satRequirementCategory": "1400",
    "satPolicyDetails": "Standardized testing policies vary by undergraduate college/school within Cornell (SAT/ACT required for Engineering & Arts and Sciences).",
    "minIelts": "7.5+",
    "ieltsCategory": "7.5",
    "toeflRequirement": "100+",
    "commonAppAccepted": true,
    "applicationPortalDetails": "Common Application & QuestBridge",
    "acceptanceRate": "7.3%",
    "deadline": "Nov 1 (Early Decision) / Jan 2 (Regular Decision)",
    "description": "Ranked #=16 globally in QS 2027, Ivy League Cornell University in Ithaca, NY offers 100% need-met aid for admitted international applicants who request aid upon applying.",
    "overviewLong": "Cornell University is a world-renowned private Ivy League research university located in Ithaca, New York. Founded in 1865 by Ezra Cornell and Andrew Dickson White, Cornell was established with a revolutionary mission: \"to found an institution where any person can find instruction in any study.\" Combining privately endowed colleges with public land-grant contract colleges, Cornell offers an extraordinarily vast range of academic programs spanning engineering, computer science, business, architecture, agriculture, hotel administration, biological sciences, and public policy.\n\nRanked #=16 globally in the QS World University Rankings 2027, Cornell is celebrated for its world-class research infrastructure and hands-on learning environment. Cornell Engineering and Computer Science are powerhouse departments, leading global innovation in artificial intelligence, robotics, materials science, and software engineering. The Charles H. Dyson School of Applied Economics and Management and the famous School of Hotel Administration offer unmatched undergraduate business education, while the College of Architecture, Art, and Planning ranks among the finest design schools in the world. Situated on a magnificent 2,300-acre campus in the Finger Lakes region, Cornell surrounds students with inspiring natural beauty and cutting-edge laboratory facilities.\n\nAdmissions to Cornell is selective, with standardized testing policies tailored to specific undergraduate colleges. For international applicants, Cornell operates a Need-Aware admissions process, requiring international students to request financial aid upon initial application. However, Cornell is deeply committed to supporting admitted students: for all admitted international applicants who demonstrate financial need, Cornell provides 100% need-met institutional grant aid, ensuring that economic background never prevents talented scholars from pursuing their undergraduate degrees at Cornell.",
    "topProgramsList": [
      {
        "name": "Computer Science and Information Systems",
        "ranking": "#17 Global (QS 2026)",
        "description": "Algorithms, artificial intelligence, machine learning, systems, theory, software, and data science."
      },
      {
        "name": "Engineering & Technology",
        "ranking": "#35 Global (QS 2026)",
        "description": "Biomedical, chemical, civil, electrical, mechanical, environmental, and materials science engineering."
      },
      {
        "name": "Agriculture & Forestry",
        "ranking": "#4 Global (QS 2026)",
        "description": "Consistently ranked among the absolute best globally, focusing on plant sciences, soil science, forestry, and agricultural sustainability."
      },
      {
        "name": "Architecture and Built Environment",
        "ranking": "#19 Global (QS 2026)",
        "description": "World-leading five-year professional B.Arch program in design, theory, and urban planning."
      },
      {
        "name": "Hotel Administration",
        "ranking": "#16 Global (QS 2026)",
        "description": "World-famous hospitality management program combining real estate, finance, marketing, and service operations."
      },
      {
        "name": "Veterinary Science",
        "ranking": "#3 Global (QS 2026)",
        "description": "World-leading research, diagnostics, and clinical education at the Cornell University College of Veterinary Medicine."
      ,
    "logoText": "CU",
    "logoBg": "from-red-700 to-rose-950",
    "degreesOffered": ["Undergraduate", "Graduate", "PhD"],
    "tags": ["United States", "Europe", "International", "Research"],
    "requiresSeparateApp": true}
    ],
    "allScholarshipsList": [,

      {
        "id": "uni-006-1",
        "title": "Cornell Need-Based International Aid",
        "amount": "100% Demonstrated Need Met",
        "coverage": "Full Ride",
        "eligibility": "Admitted international students who requested aid on their initial application.",
        "description": "Institutional grant aid covering up to 100% of demonstrated financial need including tuition, room, and board.",
        "deadline": "Nov 1 (ED) / Jan 2 (RD)",
        "requiresSeparateApp": false
      }
    ],
    "degreesOffered": [
      "Undergraduate",
      "Graduate",
      "PhD"
    ],
    "tags": [
      "Need-Aware",
      "100% Need Met",
      "USA",
      "Ivy League",
      "Ithaca",
      "QS #16"
    ],
    "requiresSeparateApp": false,
    "logoText": "CORN",
    "logoBg": "from-red-800 to-red-950"
  },

  {
    "id": "uni-007",
    "universityName": "California Institute of Technology",
    "location": "Pasadena, California, United States",
    "country": "United States",
    "flag": "🇺🇸",
    "foundingYear": "1891",
    "scholarshipTitle": "Caltech PhD Full Graduate Funding (100% Tuition + Stipend) & Undergrad Need-Based Aid",
    "ranking": "#7 Global (QS 2027)",
    "qsSubjectRankings": "QS 2026: #6 Earth & Marine Sciences, #7 Physics & Astronomy, #8 Natural Sciences, #12 Chemical Engineering, #14 Chemistry, #40 Computer Science & Information Systems",
    "coverage": "Full Ride",
    "amountValue": "100% Full PhD Funding (Tuition + Stipend) | Strictly Need-Based Undergrad Aid",
    "tuitionFee": "$65,136 / year (Tuition) | Total COA ~$94,000+",
    "tuitionAmountNumeric": 65136,
    "hasFullRide": true,
    "hasPartialAid": false,
    "hasFinancialAid": true,
    "financialAidType": "Need-Based",
    "financialAidDetails": "Caltech provides 100% full financial support for virtually all entering doctoral (PhD) students covering full tuition, fees, and a living stipend through fellowships, Graduate Teaching Assistantships (GTA), and Graduate Research Assistantships (GRA). For undergraduates, Caltech financial aid is strictly need-based; Caltech does not offer undergraduate merit-based scholarships. Need-based institutional grants meet demonstrated need for qualified undergraduates.",
    "minGpa": "3.9+",
    "minSat": "1530 - 1580 (Median SAT)",
    "satRequirementCategory": "1500",
    "satPolicyDetails": "Standardized testing (SAT / ACT) required for undergraduate admissions. Median enrolled SAT score range is 1530 to 1580.",
    "minIelts": "7.5+",
    "ieltsCategory": "7.5",
    "toeflRequirement": "100+",
    "commonAppAccepted": true,
    "applicationPortalDetails": "Caltech Application or Common Application",
    "acceptanceRate": "2.7%",
    "deadline": "Nov 1 (Restrictive Early Action) / Jan 3 (Regular Decision)",
    "description": "Ranked #7 globally in QS 2027, Caltech in Pasadena, CA is an elite STEM research power offering 100% guaranteed full PhD funding (tuition + stipend) and strictly need-based undergraduate financial aid. Median SAT: 1530–1580.",
    "overviewLong": "The California Institute of Technology (Caltech) is a world-renowned private research university situated in Pasadena, California, founded in 1891. Recognized as one of the most intellectually concentrated and quantitatively rigorous STEM institutions on earth, Caltech is ranked #7 globally in the QS World University Rankings 2027 with an overall score of 96.6. Despite its intimate student body size, Caltech maintains an extraordinary footprint in scientific discovery, advanced engineering, theoretical physics, space exploration, and computational sciences.\n\nCaltech’s academic architecture is organized into six major research divisions: Biology & Biological Engineering, Chemistry & Chemical Engineering, Engineering & Applied Science, Geological & Planetary Sciences, Humanities & Social Sciences, and Physics, Mathematics & Astronomy. Every undergraduate student at Caltech undertakes a rigorous core curriculum emphasizing advanced calculus, physics, chemistry, biology, and scientific writing, establishing an unmatched foundation in quantitative problem-solving regardless of their ultimate major.\n\nA defining feature of Caltech is its intimate academic environment and exceptional faculty-to-student ratio (3:1). Students collaborate directly with leading scientists, Nobel laureates, and pioneering researchers. Caltech also manages NASA’s legendary Jet Propulsion Laboratory (JPL), providing students with direct research pathways in planetary science, robotic space exploration, satellite systems, and astrophysics. For graduate study, Caltech is premier: over 98% of admitted doctoral (PhD) students receive full merit-based financial packages covering 100% of tuition and fees alongside generous research or teaching stipends.",
    "topProgramsList": [
      {
        "name": "Earth & Marine Sciences",
        "ranking": "#6 Global (QS 2026)",
        "description": "Driven by an elite research impact score, placing it among the absolute premier geosciences programs in the world."
      },
      {
        "name": "Physics & Astronomy",
        "ranking": "#7 Global (QS 2026)",
        "description": "Nationally and globally renowned for astrophysics and space research, bolstered by Caltech's management of NASA’s Jet Propulsion Laboratory (JPL)."
      },
      {
        "name": "Natural Sciences (Broad Faculty Area)",
        "ranking": "#8 Global (QS 2026)",
        "description": "The umbrella grouping for all of Caltech's math, chemistry, and physics divisions, earning a perfect peer recognition score."
      },
      {
        "name": "Chemical Engineering",
        "ranking": "#12 Global (QS 2026)",
        "description": "A world-class program highly recognized for molecular engineering breakthroughs and specialized laboratory pipelines."
      },
      {
        "name": "Chemistry",
        "ranking": "#14 Global (QS 2026)",
        "description": "Heavily cited worldwide, reflecting immense research authority and pioneering work in chemical structures"
      },
      {
        "name": "Computer Science & Information Systems",
        "ranking": "#40 Global (QS 2026)",
        "description": "While intentionally small in enrollment size, the program features elite research depth, scoring an 82.3 for its H-index (research impact)."
      ,
    "logoText": "CIT",
    "logoBg": "from-sky-700 to-blue-900",
    "degreesOffered": ["Undergraduate", "Graduate", "PhD"],
    "tags": ["United States", "Europe", "International", "Research"],
    "requiresSeparateApp": true}
    ],
    "allScholarshipsList": [,

      {
        "id": "uni-007-1",
        "title": "Caltech Doctoral (PhD) Fellowship & Assistantship Package",
        "amount": "100% Full Tuition + Living Stipend",
        "coverage": "Full Ride",
        "eligibility": "All admitted doctoral (PhD) students across STEM disciplines, regardless of citizenship.",
        "description": "Guarantees 100% coverage of tuition and mandatory fees plus a competitive monthly living stipend through fellowships, GRA, or GTA positions.",
        "deadline": "Dec 1 - Jan 1 (Program Dependent)",
        "requiresSeparateApp": false
      ,
    "logoText": "CIT",
    "logoBg": "from-blue-700 to-indigo-950",
    "degreesOffered": ["Undergraduate", "Graduate", "PhD"]},

      {
        "id": "uni-007-2",
        "title": "Caltech Need-Based Undergraduate Financial Aid",
        "amount": "100% Demonstrated Need Met (Strictly Need-Based)",
        "coverage": "Full Ride",
        "eligibility": "Admitted undergraduate applicants demonstrating financial need. Caltech does not offer merit scholarships to undergraduates.",
        "description": "Institutional grant aid calculated strictly according to demonstrated family financial need.",
        "deadline": "Nov 1 (REA) / Jan 3 (RD)",
        "requiresSeparateApp": false
      }
    ],
    "degreesOffered": [
      "Undergraduate",
      "Graduate",
      "PhD"
    ],
    "tags": [
      "100% PhD Funding",
      "STEM Powerhouse",
      "Need-Based Aid",
      "JPL Partner",
      "USA",
      "Pasadena",
      "QS #7"
    ],
    "requiresSeparateApp": false,
    "logoText": "CALT",
    "logoBg": "from-amber-700 to-orange-950"
  },

  {
    "id": "uni-008",
    "universityName": "University of California, Berkeley",
    "location": "Berkeley, California, United States",
    "country": "United States",
    "flag": "🇺🇸",
    "foundingYear": "1868",
    "scholarshipTitle": "UC Berkeley Graduate Fellowships (GSI/GSR) & Regents Honor Stipend",
    "ranking": "#=20 Global (QS 2027)",
    "qsSubjectRankings": "QS 2026: #6 Computer Science & Info Systems, #6 Engineering & Technology, #6 Physics & Astronomy, #=6 Mathematics, #7 Economics & Econometrics",
    "coverage": "Partial Aid",
    "amountValue": "Departmental PhD Fellowships / GSI & GSR Appointments | International Regents Honor Stipend",
    "tuitionFee": "$48,465 / year (Non-Resident Tuition & Fees) | Total COA ~$80,000+ ($79k–$81k+)",
    "tuitionAmountNumeric": 48465,
    "hasFullRide": false,
    "hasPartialAid": true,
    "hasFinancialAid": true,
    "financialAidType": "Partial Merit",
    "financialAidDetails": "UC Berkeley provides limited financial aid for international undergraduates. While international undergraduates are eligible for consideration for the prestigious Regents & Chancellor's Scholarship and receive the merit honors stipend alongside perks like priority course registration and guaranteed housing, the need-based financial aid component of the Regents Scholarship strictly applies to California/US residents. International students do not receive need-based funding from Berkeley. For doctoral (PhD) students, Berkeley provides robust departmental funding packages combining university fellowships, Graduate Student Researcher (GSR) appointments, and Graduate Student Instructor (GSI) positions that cover tuition and provide living stipends.",
    "minGpa": "3.9+",
    "minSat": "Test-Free (UC Policy)",
    "satRequirementCategory": "Optional",
    "satPolicyDetails": "UC Berkeley is completely Test-Free. SAT and ACT scores are not considered for admissions or undergraduate scholarship decisions.",
    "minIelts": "7.0+",
    "ieltsCategory": "7.0",
    "toeflRequirement": "90+",
    "commonAppAccepted": false,
    "applicationPortalDetails": "UC Application System",
    "acceptanceRate": "11.4%",
    "deadline": "Nov 30 (UC Application Filing Period Nov 1-30)",
    "description": "Ranked #=20 globally in QS 2027, UC Berkeley in the SF Bay Area is a premier public research university. Offers 100% PhD funding packages (GSI/GSR) and Regents merit honor stipends for top international undergraduates.",
    "overviewLong": "The University of California, Berkeley (UC Berkeley) is a premier public research university located in Berkeley, California, overlooking the San Francisco Bay. Founded in 1868 as the flagship campus of the University of California system, Berkeley stands as one of the world’s most prestigious and influential research universities, ranked #=20 globally in the QS World University Rankings 2027 with an overall score of 89.7.\n\nBerkeley is internationally celebrated for its academic depth across engineering, computer science, physical sciences, mathematics, economics, business, public policy, and the humanities. Its famous Department of Electrical Engineering and Computer Sciences (EECS) and the Haas School of Business are global benchmarks of excellence. Embedded within the San Francisco Bay Area technology ecosystem, Berkeley offers students unparalleled proximity to Silicon Valley tech giants, venture capital firms, national research laboratories (such as Lawrence Berkeley National Laboratory), and groundbreaking AI startups.\n\nAs a public flagship university, undergraduate financial aid for international students is limited compared to private institutions, requiring non-resident undergraduates to demonstrate self-funding capability or compete for select merit scholarships like the Regents & Chancellor’s Scholarship. However, for graduate and doctoral scholars, Berkeley provides extensive funding packages combining departmental fellowships, Graduate Student Researcher (GSR) positions, and Graduate Student Instructor (GSI) appointments that cover tuition fees and provide living stipends across its 200+ graduate degree programs.",
    "topProgramsList": [
      {
        "name": "Computer Science & Info Systems",
        "ranking": "#6 Global (QS 2026)",
        "description": "Recognized globally for pioneering technological advancements, software engineering leadership, and massive research output."
      },
      {
        "name": "Engineering & Technology",
        "ranking": "#6 Global (QS 2026)",
        "description": "A premier multi-disciplinary faculty area that drives cutting-edge innovation across technical and applied sciences."
      },
      {
        "name": "Physics & Astronomy",
        "ranking": "#6 Global (QS 2026)",
        "description": "Celebrated worldwide for groundbreaking theoretical discoveries, particle physics, and astrophysics excellence."
      },
      {
        "name": "Mathematics",
        "ranking": "#=6 Global (QS 2026)",
        "description": "A powerhouse mathematical department producing foundational research and legendary academic contributions."
      },
      {
        "name": "Economics & Econometrics",
        "ranking": "#7 Global (QS 2026)",
        "description": "Renowned globally for producing influential economic theories and hosting world-leading policy analysts and Nobel laureates."
      ,
    "logoText": "UCB",
    "logoBg": "from-teal-700 to-slate-900",
    "degreesOffered": ["Undergraduate", "Graduate", "PhD"],
    "tags": ["United States", "Europe", "International", "Research"],
    "requiresSeparateApp": true}
    ],
    "allScholarshipsList": [,

      {
        "id": "uni-008-1",
        "title": "UC Berkeley Doctoral Fellowship & Assistantship Package (GSI/GSR)",
        "amount": "Full Tuition Fee Remission + Living Stipend",
        "coverage": "Full Ride",
        "eligibility": "Admitted doctoral (PhD) students appointed as Graduate Student Researchers or Instructors.",
        "description": "Covers non-resident tuition and university fees plus a monthly stipend in exchange for research or teaching duties.",
        "deadline": "Dec 1 - Dec 15 (Program Dependent)",
        "requiresSeparateApp": false
      ,
    "logoText": "UCB",
    "logoBg": "from-blue-700 to-indigo-950",
    "degreesOffered": ["Undergraduate", "Graduate", "PhD"]},

      {
        "id": "uni-008-2",
        "title": "UC Berkeley Regents & Chancellor's Scholarship (International Merit Honors)",
        "amount": "Merit Honors Stipend + Priority Registration & Housing",
        "coverage": "Partial Aid",
        "eligibility": "Top entering undergraduate applicants (including international students). Note: The need-based aid component strictly applies to US/CA residents.",
        "description": "Prestigious merit award providing an honors stipend, faculty mentorship, priority course enrollment, and guaranteed housing. International students receive the merit honors stipend and perks, but are not eligible for need-based funding.",
        "deadline": "Nov 30 (UC Application)",
        "requiresSeparateApp": false
      }
    ],
    "degreesOffered": [
      "Undergraduate",
      "Graduate",
      "PhD"
    ],
    "tags": [
      "Bay Area",
      "EECS Leader",
      "Public Flagship",
      "Regents Merit",
      "USA",
      "Berkeley",
      "QS #20"
    ],
    "requiresSeparateApp": false,
    "logoText": "UCB",
    "logoBg": "from-blue-800 to-amber-900"
  },

  {
    "id": "uni-009",
    "universityName": "Johns Hopkins University",
    "location": "Baltimore, Maryland, United States",
    "country": "United States",
    "flag": "🇺🇸",
    "foundingYear": "1876",
    "scholarshipTitle": "Johns Hopkins Need-Based Aid (100% Need Met, No Loans) & Westgate Engineering Scholarship",
    "ranking": "#=20 Global (QS 2027)",
    "qsSubjectRankings": "QS 2026: #3 Life Sciences & Medicine, #4 Anatomy & Physiology, #=67 Computer Science & Information Systems, #75 Chemical Engineering, #17 Biological Sciences",
    "coverage": "Full Ride",
    "amountValue": "100% Demonstrated Need Met (Zero Loans) | Westgate Full Tuition Engineering Award",
    "tuitionFee": "$64,750 / year (Tuition) | Total COA ~$88,000+",
    "tuitionAmountNumeric": 64750,
    "hasFullRide": true,
    "hasPartialAid": true,
    "hasFinancialAid": true,
    "financialAidType": "Need-Based",
    "financialAidDetails": "Johns Hopkins is Need-Aware for international applicants, but meets 100% of demonstrated financial need without loans for all admitted international aid recipients. Limited merit scholarships are available, including the prestigious Charles R. Westgate Scholarship in Engineering covering 100% tuition for 4 years.",
    "minGpa": "3.9+",
    "minSat": "1520 - 1570 (Median SAT)",
    "satRequirementCategory": "1500",
    "satPolicyDetails": "Standardized testing (SAT or ACT) required for undergraduate admission. Median enrolled SAT score range is 1520 to 1570.",
    "minIelts": "7.5+",
    "ieltsCategory": "7.5",
    "toeflRequirement": "100+",
    "commonAppAccepted": true,
    "applicationPortalDetails": "Common Application or Coalition Application",
    "acceptanceRate": "6.2%",
    "deadline": "Nov 1 (ED I) / Jan 2 (ED II / Regular Decision)",
    "description": "Ranked #=20 globally in QS 2027, JHU in Baltimore, MD is the world authority in Medicine (#3), Nursing (#2), Public Health (#3), and Biomedical Engineering, offering 100% need-met loan-free aid and Westgate Engineering awards.",
    "overviewLong": "Johns Hopkins University is a private research university in Baltimore, Maryland, founded in 1876. As the first research university in the United States, Johns Hopkins pioneered the integration of teaching and advanced scientific research, developing an internationally dominant reputation across medicine, public health, biomedical engineering, nursing, natural sciences, computer science, and international studies.\n\nThe university is internationally famous for its healthcare and medical research ecosystem, anchored by the Johns Hopkins School of Medicine, Johns Hopkins Hospital, and the Bloomberg School of Public Health. In the 2026 QS Subject Rankings, Johns Hopkins ranks #2 globally in Nursing, #3 globally in Life Sciences & Medicine, #3 globally in Medicine, #3 globally in Public Health, and #3 globally in Anatomy & Physiology.\n\nFor undergraduate scholars, Johns Hopkins offers exceptional research opportunities across the Whiting School of Engineering and the Krieger School of Arts and Sciences. In Computer Science and Biomedical Engineering, students collaborate directly with medical researchers, AI pioneers, and robotic surgeons. The Paul H. Nitze School of Advanced International Studies (SAIS) further positions Hopkins as a powerhouse for political science and global policy studies.\n\nIn admissions and financial aid, Johns Hopkins is Need-Aware for international undergraduate applicants, requiring students to request financial aid during initial application. However, for all admitted international students, Johns Hopkins meets 100% of demonstrated financial need with grant aid and ZERO required student loans. Furthermore, Hopkins offers select merit awards such as the Charles R. Westgate Scholarship in Engineering, which provides a 100% full tuition award for four years of undergraduate engineering study.",
    "topProgramsList": [
      {
        "name": "Life Sciences & Medicine (Broad Faculty Area)",
        "ranking": "#3 Global (QS 2026)",
        "description": "A premier cross-disciplinary division representing global excellence in hospital research partnerships, clinical practices, and multi-specialty life sciences."
      },
      {
        "name": "Anatomy & Physiology",
        "ranking": "#4 Global (QS 2026)",
        "description": "An elite program focused on human biology foundations, advanced surgical anatomy frameworks, and foundational clinical training."
      },
      {
        "name": "Computer Science & Information Systems",
        "ranking": "#=67 Global (QS 2026)",
        "description": "Highly regarded for its interdisciplinary computational research, machine learning modules, and pipelines sending graduates directly to top-tier Silicon Valley tech firms."
      },
      {
        "name": "Chemical Engineering",
        "ranking": "#75 Global (QS 2026)",
        "description": "Globally praised for biomolecular engineering frameworks and cross-over innovations with nanotechnology and clinical medicine"
      },
      {
        "name": "Biological Sciences",
        "ranking": "#17 Global (QS 2026)",
        "description": "A flagship scientific division exploring molecular biology, cellular genetics, and advanced biochemical mechanisms"
      ,
    "logoText": "JHU",
    "logoBg": "from-blue-700 to-indigo-950",
    "degreesOffered": ["Undergraduate", "Graduate", "PhD"],
    "tags": ["United States", "Europe", "International", "Research"],
    "requiresSeparateApp": true}
    ],
    "allScholarshipsList": [,

      {
        "id": "uni-009-1",
        "title": "Charles R. Westgate Scholarship in Engineering",
        "amount": "100% Full Tuition (4 Years)",
        "coverage": "Full Tuition",
        "eligibility": "Incoming undergraduate engineering students demonstrating exceptional technical talent.",
        "description": "Prestigious merit scholarship covering 100% full tuition for four years of undergraduate engineering study at Johns Hopkins.",
        "deadline": "Nov 1 (ED I) / Jan 2 (RD)",
        "requiresSeparateApp": false
      ,
    "logoText": "JHU",
    "logoBg": "from-blue-700 to-indigo-950",
    "degreesOffered": ["Undergraduate", "Graduate", "PhD"]},

      {
        "id": "uni-009-2",
        "title": "Johns Hopkins Need-Based International Financial Aid",
        "amount": "100% Demonstrated Need Met (Zero Loans)",
        "coverage": "Full Ride",
        "eligibility": "Admitted international students who requested financial aid during initial first-year application.",
        "description": "Need-based grant aid covering up to 100% of demonstrated financial need with zero student loans.",
        "deadline": "Nov 1 (ED I) / Jan 2 (RD)",
        "requiresSeparateApp": false
      }
    ],
    "degreesOffered": [
      "Undergraduate",
      "Graduate",
      "PhD"
    ],
    "tags": [
      "Medicine #3",
      "Need-Aware",
      "100% Need Met",
      "Zero Loans",
      "Westgate Award",
      "USA",
      "QS #20"
    ],
    "requiresSeparateApp": false,
    "logoText": "JHU",
    "logoBg": "from-sky-900 to-blue-950"
  },

  {
    "id": "uni-010",
    "universityName": "The University of Chicago",
    "location": "Chicago, Illinois, United States",
    "country": "United States",
    "flag": "🇺🇸",
    "foundingYear": "1890",
    "scholarshipTitle": "UChicago Need-Based Grants (100% Need Met, No Loans) & Partial Merit Scholarships",
    "ranking": "#24 Global (QS 2027)",
    "qsSubjectRankings": "QS 2026: #4 Economics & Econometrics, #=12 Social Sciences & Management, #18 Physics & Astronomy, #=22 Mathematics, #29 Natural Sciences, #57 Life Sciences & Medicine, #64 Computer Science & Info Systems",
    "coverage": "Full Ride",
    "amountValue": "100% Demonstrated Need Met in Grants (No Loans) | Partial Merit Scholarships",
    "tuitionFee": "$71,325 / year (Tuition) | Total COA ~$98,300",
    "tuitionAmountNumeric": 71325,
    "hasFullRide": true,
    "hasPartialAid": true,
    "hasFinancialAid": true,
    "financialAidType": "Need-Based",
    "financialAidDetails": "UChicago meets 100% of demonstrated financial need through grants rather than loans for all admitted undergraduate families. International applicants are also automatically considered for partial-tuition merit scholarships, though merit awards are partial and should not be relied upon as the sole funding source. All PhD students receive full 100% funding (tuition + health insurance + stipend; 2025-26 min: $46,350).",
    "minGpa": "3.9+",
    "minSat": "Test-Optional",
    "satRequirementCategory": "Optional",
    "satPolicyDetails": "UChicago operates a permanent Test-Optional policy for undergraduate admissions. Standardized test scores (SAT/ACT) are entirely optional and are not required for admission or merit scholarship consideration.",
    "minIelts": "7.0+",
    "ieltsCategory": "7.0",
    "toeflRequirement": "100+",
    "commonAppAccepted": true,
    "applicationPortalDetails": "Common Application or Coalition Application",
    "acceptanceRate": "4.8%",
    "deadline": "Nov 1 (EA / ED I) / Jan 2 (ED II / RD)",
    "description": "Ranked #24 globally in QS 2027, UChicago in Chicago, IL is world-renowned for Economics (#4), Physics (#11), and Math (#13). Offers Test-Optional admissions, 100% need-met grant aid (zero loans), partial merit awards, and full PhD stipends.",
    "overviewLong": "The University of Chicago (UChicago) is a world-leading private research university in Chicago, Illinois, founded in 1890. Ranked #24 globally in the QS World University Rankings 2027, UChicago is globally celebrated for its fierce intellectual rigor, theoretical discovery, quantitative research, and influential contributions across economics, mathematics, physics, and social sciences.\n\nAt the undergraduate level, UChicago’s famous Core Curriculum provides a foundational education in critical thinking, discussion, and interdisciplinary analysis. The Chicago School of Economics stands as a global pinnacle (#4 globally in QS 2026), producing foundational market theories and numerous Nobel laureates. UChicago is also exceptionally strong in Mathematics (#13 globally), Physics & Astronomy (#11 globally), Social Sciences (#8 globally), and Computer Science (#=52 globally), offering cutting-edge laboratories and quantitative computing initiatives.\n\nFor undergraduate financial aid, UChicago meets 100% of demonstrated financial need through grant-based packages requiring zero student loans for all admitted families. International applicants are also automatically evaluated for partial-tuition merit scholarships. At the doctoral level, UChicago guarantees full 100% PhD funding (tuition, health insurance, and annual living stipends starting at $46,350+ minimum for 2025–26) for virtually all admitted PhD candidates across its academic divisions.",
    "topProgramsList": [
      {
        "name": "Economics & Econometrics",
        "ranking": "#4 Global (QS 2026)",
        "description": "An internationally renowned academic powerhouse famous for inventing foundational market theories and hosting a legendary concentration of Nobel laureates."
      },
      {
        "name": "Social Sciences & Management (Broad Faculty Area)",
        "ranking": "#=12 Global (QS 2026)",
        "description": "A premier umbrella division that coordinates world-leading research in policy, human behavior, sociology, and quantitative institutional studies."
      },
      {
        "name": "Physics & Astronomy",
        "ranking": "#18 Global (QS 2026)",
        "description": "Celebrated for its monumental historic contributions to quantum theory, astrophysics research, and structural nuclear physics breakthroughs."
      },
      {
        "name": "Mathematics",
        "ranking": "#=22 Global (QS 2026)",
        "description": "Known for producing elite field theoretical insights, foundational proofs, and highly rigorous mathematical modeling paradigms."
      },
      {
        "name": "Natural Sciences (Broad Faculty Area)",
        "ranking": "#29 Global (QS 2026)",
        "description": "The broad framework supporting the university's chemistry, planetary science, and advanced mathematical physics laboratories."
      },
      {
        "name": "Life Sciences & Medicine (Broad Faculty Area)",
        "ranking": "#57 Global (QS 2026)",
        "description": "Integrates the Pritzker School of Medicine with advanced biological laboratories to drive clinical trials and molecular genetics research."
      },
      {
        "name": "Computer Science & Info Systems",
        "ranking": "#64 Global (QS 2026)",
        "description": "A rapidly growing department focusing on the mathematical foundations of computer science, security networks, and data analytics systems."
      ,
    "logoText": "UC",
    "logoBg": "from-amber-700 to-orange-950",
    "degreesOffered": ["Undergraduate", "Graduate", "PhD"],
    "tags": ["United States", "Europe", "International", "Research"],
    "requiresSeparateApp": true}
    ],
    "allScholarshipsList": [,

      {
        "id": "uni-010-1",
        "title": "UChicago Need-Based International Grant Aid",
        "amount": "100% Demonstrated Need Met (Zero Loans)",
        "coverage": "Full Ride",
        "eligibility": "Admitted undergraduate families demonstrating financial need.",
        "description": "Grant-based financial aid covering up to 100% of demonstrated financial need with zero student loans.",
        "deadline": "Nov 1 (EA/ED I) / Jan 2 (RD)",
        "requiresSeparateApp": false
      ,
    "logoText": "UC",
    "logoBg": "from-blue-700 to-indigo-950",
    "degreesOffered": ["Undergraduate", "Graduate", "PhD"]},

      {
        "id": "uni-010-2",
        "title": "UChicago International Partial Merit Scholarships",
        "amount": "Partial Tuition Award (One-time or Renewable)",
        "coverage": "Partial Aid",
        "eligibility": "All first-year international undergraduate applicants evaluated automatically upon applying.",
        "description": "Partial merit scholarships awarded based on academic distinction and leadership.",
        "deadline": "Nov 1 (EA/ED I) / Jan 2 (RD)",
        "requiresSeparateApp": false
      ,
    "logoText": "UC",
    "logoBg": "from-blue-700 to-indigo-950",
    "degreesOffered": ["Undergraduate", "Graduate", "PhD"]},

      {
        "id": "uni-010-3",
        "title": "UChicago Doctoral (PhD) Guaranteed Full Funding",
        "amount": "Full Tuition + Health Insurance + $46,350+ Stipend",
        "coverage": "Full Ride",
        "eligibility": "All admitted PhD candidates maintaining satisfactory academic progress.",
        "description": "Guarantees full tuition, health insurance, and annual living stipends ($46,350+ minimum for 2025-26).",
        "deadline": "Dec 1 - Dec 15 (Program Dependent)",
        "requiresSeparateApp": false
      }
    ],
    "degreesOffered": [
      "Undergraduate",
      "Graduate",
      "PhD"
    ],
    "tags": [
      "Economics #4",
      "100% Need Met Grants",
      "Zero Loans",
      "Partial Merit",
      "Full PhD Stipends",
      "USA",
      "QS #24"
    ],
    "requiresSeparateApp": false,
    "logoText": "UCHI",
    "logoBg": "from-red-950 to-stone-900"
  },

  {
    "id": "uni-011",
    "universityName": "Princeton University",
    "location": "Princeton, New Jersey, United States",
    "country": "United States",
    "flag": "🇺🇸",
    "foundingYear": "1746",
    "scholarshipTitle": "Princeton 100% Need-Blind International Financial Aid (Zero Loans) & Full PhD Guarantee",
    "ranking": "#27 Global (QS 2027)",
    "qsSubjectRankings": "QS 2026: #4 Politics & International Studies, #5 Mathematics, #5 Economics & Econometrics, #14 Computer Science & Info Systems, #16 Chemical Engineering",
    "coverage": "Full Ride",
    "amountValue": "100% Demonstrated Need Met (Zero Loans & Need-Blind) | 100% Guaranteed PhD Funding",
    "tuitionFee": "$65,210 / year (Tuition) | Total COA ~$90,720 ($90,718–$90,730)",
    "tuitionAmountNumeric": 65210,
    "hasFullRide": true,
    "hasPartialAid": false,
    "hasFinancialAid": true,
    "financialAidType": "Need-Blind",
    "financialAidDetails": "Princeton is 100% Need-Blind for ALL international applicants and meets 100% of demonstrated financial need with ZERO loans. Princeton explicitly DOES NOT offer academic or athletic merit scholarships for undergraduates; all aid is need-based. For PhD candidates, Princeton guarantees 100% full funding (tuition + stipend) throughout regular enrollment.",
    "minGpa": "3.9+",
    "minSat": "1500 - 1580 (Median SAT)",
    "satRequirementCategory": "1500",
    "satPolicyDetails": "Standardized testing (SAT or ACT) required for undergraduate admissions. Median enrolled SAT score range is 1500 to 1580.",
    "minIelts": "7.5+",
    "ieltsCategory": "7.5",
    "toeflRequirement": "100+",
    "commonAppAccepted": true,
    "applicationPortalDetails": "Common Application, Coalition Application, or QuestBridge",
    "acceptanceRate": "4.4%",
    "deadline": "Nov 1 (Single-Choice Early Action) / Jan 1 (Regular Decision)",
    "description": "Ranked #27 globally in QS 2027, Ivy League Princeton in New Jersey offers 100% need-blind international admissions with zero loans, strictly need-based undergraduate aid (no merit awards), and guaranteed PhD funding.",
    "overviewLong": "Princeton University is a premier private Ivy League research university located in Princeton, New Jersey. Founded in 1746, Princeton is the fourth-oldest institution of higher education in the United States and is internationally distinguished for its singular commitment to undergraduate teaching, world-class research, and intellectual depth across mathematics, economics, computer science, physics, public policy, and the humanities.\n\nRanked #27 globally in the QS World University Rankings 2027, Princeton maintains a small, focused undergraduate student body that engages directly in faculty-led research, senior thesis projects, and small preceptorial seminars. Princeton's Department of Economics ranks #5 globally in the QS 2026 subject tables, while Computer Science ranks #14 globally. The Princeton School of Public and International Affairs (SPIA) provides world-renowned preparation for policy, governance, and global affairs.\n\nPrinceton's undergraduate financial aid system is among the most generous in the world. Princeton is 100% Need-Blind for ALL undergraduate applicants globally (Domestic and International) and meets 100% of demonstrated financial need with grant aid that requires ZERO student loans. Crucially, Princeton explicitly DOES NOT offer academic or athletic merit scholarships; all institutional aid is need-based. For doctoral scholars, the Princeton Graduate School guarantees 100% full funding (tuition, fees, and living stipends) for all degree-seeking PhD candidates throughout their regular enrollment.",
    "topProgramsList": [
      {
        "name": "Politics & International Studies",
        "ranking": "#4 Global (QS 2026)",
        "description": "Anchored by the world-class School of Public and International Affairs (SPIA), this program is an international leader in global governance, public policy, and political theory."
      },
      {
        "name": "Mathematics",
        "ranking": "#5 Global (QS 2026)",
        "description": "Globally celebrated as a historical stronghold for pure mathematical research, hosting field-leading minds in algebra, geometry, and foundational proofs."
      },
      {
        "name": "Economics & Econometrics",
        "ranking": "#5 Global (QS 2026)",
        "description": "A top-tier department heavily recognized for theoretical economics, game theory, and mathematical finance models."
      },
      {
        "name": "Computer Science & Info Systems",
        "ranking": "#14 Global (QS 2026)",
        "description": "Renowned for pioneering theoretical computer science, cryptography, algorithms, and logic foundations."
      },
      {
        "name": "Chemical Engineering",
        "ranking": "#16 Global (QS 2026)",
        "description": "Highly regarded for specialized labs focusing on polymers, complex materials, and cellular bioengineering."
      ,
    "logoText": "PU",
    "logoBg": "from-teal-700 to-slate-900",
    "degreesOffered": ["Undergraduate", "Graduate", "PhD"],
    "tags": ["United States", "Europe", "International", "Research"],
    "requiresSeparateApp": true}
    ],
    "allScholarshipsList": [,

      {
        "id": "uni-011-1",
        "title": "Princeton Need-Blind International Financial Aid Package",
        "amount": "100% Demonstrated Need Met (Zero Loans)",
        "coverage": "Full Ride",
        "eligibility": "All admitted undergraduate students (Domestic & International) demonstrating financial need. No merit scholarships offered.",
        "description": "Provides 100% need-based grant coverage including tuition, room, board, and allowances with zero required student loans.",
        "deadline": "Nov 1 (SCEA) / Jan 1 (RD)",
        "requiresSeparateApp": false
      ,
    "logoText": "PU",
    "logoBg": "from-blue-700 to-indigo-950",
    "degreesOffered": ["Undergraduate", "Graduate", "PhD"]},

      {
        "id": "uni-011-2",
        "title": "Princeton Doctoral (PhD) Guaranteed Regular-Enrollment Funding",
        "amount": "100% Full Tuition & Fees + Living Stipend",
        "coverage": "Full Ride",
        "eligibility": "All regularly enrolled degree-seeking PhD candidates in good academic standing.",
        "description": "Guarantees 100% full funding for tuition, mandatory fees, and living stipends throughout regular enrollment.",
        "deadline": "Dec 1 - Jan 1 (Program Dependent)",
        "requiresSeparateApp": false
      }
    ],
    "degreesOffered": [
      "Undergraduate",
      "Graduate",
      "PhD"
    ],
    "tags": [
      "Need-Blind",
      "100% Need Met",
      "Zero Loans",
      "No Merit Aid",
      "Ivy League",
      "Guaranteed PhD Funding",
      "USA",
      "QS #27"
    ],
    "requiresSeparateApp": false,
    "logoText": "PRIN",
    "logoBg": "from-orange-900 to-stone-950"
  },

  {
    "id": "uni-012",
    "universityName": "Columbia University",
    "location": "New York City, New York, United States",
    "country": "United States",
    "flag": "🇺🇸",
    "foundingYear": "1754",
    "scholarshipTitle": "Columbia Need-Based International Aid (100% Need Met) & Program-Specific Graduate Fellowships",
    "ranking": "#=43 Global (QS 2027)",
    "qsSubjectRankings": "QS 2026: #6 Arts & Humanities Faculty, #11 Economics & Econometrics, #=22 Computer Science & Info Systems",
    "coverage": "Full Ride",
    "amountValue": "100% Demonstrated Need Met (Need-Aware Admissions) | Program-Specific PhD Fellowships",
    "tuitionFee": "$68,400–$70,000+ / year (Tuition) | Total COA ~$89,500–$93,000+",
    "tuitionAmountNumeric": 69200,
    "hasFullRide": true,
    "hasPartialAid": false,
    "hasFinancialAid": true,
    "financialAidType": "Need-Based",
    "financialAidDetails": "Columbia University is Need-Aware for international undergraduate applicants, but meets 100% of demonstrated financial need for all admitted international students who requested aid during their first-year application. Columbia College and Columbia Engineering DO NOT offer institutional academic, athletic, or talent-based merit scholarships. Graduate and PhD funding varies by department, with top doctoral programs (e.g. Economics) offering multi-year full tuition + stipend packages.",
    "minGpa": "3.9+",
    "minSat": "1500 - 1570 (Median SAT)",
    "satRequirementCategory": "1500",
    "satPolicyDetails": "Test-Optional policy for undergraduate admissions. Median enrolled SAT score range is 1500 to 1570.",
    "minIelts": "7.5+",
    "ieltsCategory": "7.5",
    "toeflRequirement": "105+",
    "commonAppAccepted": true,
    "applicationPortalDetails": "Common Application or QuestBridge",
    "acceptanceRate": "3.9%",
    "deadline": "Nov 1 (Early Decision) / Jan 1 (Regular Decision)",
    "description": "Ranked #=43 globally in QS 2027, Ivy League Columbia in New York City offers 100% need-met aid for admitted international applicants (Need-Aware), Core Curriculum, zero institutional undergrad merit awards, and strong PhD fellowships.",
    "overviewLong": "Columbia University is an elite private Ivy League research university located in New York City, founded in 1754. Situated on its historical Morningside Heights campus in Manhattan, Columbia provides undergraduates with an extraordinary academic environment combining its world-renowned Core Curriculum with direct access to New York City's dynamic technology, finance, media, international affairs, and biomedical industries.\n\nRanked #=43 globally in the QS World University Rankings 2027, Columbia boasts major strengths across its academic departments: its Arts & Humanities faculty ranks #6 globally, Economics & Econometrics ranks #11 globally, and Computer Science & Information Systems ranks #=22 globally in the QS 2026 tables. Columbia Engineering (SEAS) and Columbia College offer cutting-edge research in artificial intelligence, robotics, quantitative finance, bioengineering, and urban planning.\n\nFor international undergraduate applicants, Columbia operates a Need-Aware admissions policy, but guarantees that 100% of demonstrated financial need is met for all admitted international aid applicants. Columbia College and Columbia Engineering DO NOT award institutional academic, athletic, or talent-based merit scholarships. Graduate doctoral programs at Columbia (such as Economics and Humanities) offer multi-year full funding fellowships covering full tuition, health fees, and competitive living stipends.",
    "topProgramsList": [
      {
        "name": "Arts & Humanities Faculty",
        "ranking": "#6 Global (QS 2026)",
        "description": "Literature, philosophy, history, art history, music, and foundational humanities in Core Curriculum."
      },
      {
        "name": "Economics & Econometrics",
        "ranking": "#11 Global (QS 2026)",
        "description": "Economic theory, econometrics, finance, development economics, and policy analysis."
      },
      {
        "name": "Computer Science & Info Systems",
        "ranking": "#=22 Global (QS 2026)",
        "description": "Artificial intelligence, machine learning, systems, theory, data science, and software."
      },
      {
        "name": "Engineering and Technology",
        "ranking": "#55 Global (QS 2026)",
        "description": "Biomedical, electrical, mechanical, civil, chemical engineering, and applied physics."
      },
      {
        "name": "Politics and International Studies",
        "ranking": "#13 Global (QS 2026)",
        "description": "Politics, international relations, public policy, global governance, and government."
      ,
    "logoText": "CU",
    "logoBg": "from-amber-700 to-orange-950",
    "degreesOffered": ["Undergraduate", "Graduate", "PhD"],
    "tags": ["United States", "Europe", "International", "Research"],
    "requiresSeparateApp": true}
    ],
    "allScholarshipsList": [,

      {
        "id": "uni-012-1",
        "title": "Columbia Need-Based International Financial Aid",
        "amount": "100% Demonstrated Need Met",
        "coverage": "Full Ride",
        "eligibility": "Admitted international students who requested aid on their initial first-year application.",
        "description": "Grant aid meeting 100% of demonstrated financial need. No institutional merit scholarships are awarded by Columbia College or Columbia Engineering.",
        "deadline": "Nov 1 (ED) / Jan 1 (RD)",
        "requiresSeparateApp": false
      ,
    "logoText": "CU",
    "logoBg": "from-blue-700 to-indigo-950",
    "degreesOffered": ["Undergraduate", "Graduate", "PhD"]},

      {
        "id": "uni-012-2",
        "title": "Columbia Doctoral (PhD) Multi-Year Fellowship Package",
        "amount": "Full Tuition + Health Fees + Living Stipend",
        "coverage": "Full Ride",
        "eligibility": "Admitted PhD candidates across participating departments (e.g. Economics, Humanities, Engineering).",
        "description": "Multi-year fellowship packages providing full tuition coverage, health insurance, and monthly living stipends.",
        "deadline": "Dec 1 - Jan 1 (Program Dependent)",
        "requiresSeparateApp": false
      }
    ],
    "degreesOffered": [
      "Undergraduate",
      "Graduate",
      "PhD"
    ],
    "tags": [
      "NYC Ivy",
      "Need-Aware",
      "100% Need Met",
      "No Undergrad Merit",
      "Arts & Humanities #6",
      "USA",
      "QS #43"
    ],
    "requiresSeparateApp": false,
    "logoText": "COLU",
    "logoBg": "from-cyan-900 to-blue-950"
  },

  {
    "id": "uni-013",
    "universityName": "Northwestern University",
    "location": "Evanston, Illinois, United States",
    "country": "United States",
    "flag": "🇺🇸",
    "foundingYear": "1851",
    "scholarshipTitle": "Northwestern Need-Based Grants (100% Need Met, Zero Loans) & Guaranteed PhD Funding",
    "ranking": "#=45 Global (QS 2027)",
    "qsSubjectRankings": "QS 2026: #14 Marketing, #16 Economics & Econometrics, #17 Business & Management Studies, #26 Communication & Media Studies, #32 Psychology",
    "coverage": "Full Ride",
    "amountValue": "100% Demonstrated Need Met in Grants (Zero Loans & Zero Work) | $47,748+ PhD Stipend",
    "tuitionFee": "$64,887 / year (Tuition) | Total COA ~$91,000+",
    "tuitionAmountNumeric": 64887,
    "hasFullRide": true,
    "hasPartialAid": false,
    "hasFinancialAid": true,
    "financialAidType": "Need-Based",
    "financialAidDetails": "Northwestern is Need-Aware for international applicants, but meets 100% of demonstrated financial need with 100% grant aid requiring ZERO loans and ZERO work-study. Northwestern explicitly DOES NOT offer undergraduate academic merit scholarships. All PhD students receive full 5-year funding packages covering tuition, health insurance, and living stipends ($47,748 minimum for 2026-27).",
    "minGpa": "3.9+",
    "minSat": "1500 - 1560 (Median SAT)",
    "satRequirementCategory": "1500",
    "satPolicyDetails": "Test-Optional policy for undergraduate admissions. Median enrolled SAT score range is 1500 to 1560.",
    "minIelts": "7.5+",
    "ieltsCategory": "7.5",
    "toeflRequirement": "100+",
    "commonAppAccepted": true,
    "applicationPortalDetails": "Common Application or Coalition Application",
    "acceptanceRate": "7.0%",
    "deadline": "Nov 1 (Early Decision) / Jan 3 (Regular Decision)",
    "description": "Ranked #=45 globally in QS 2027, Northwestern in Evanston/Chicago offers 100% need-met grant aid for admitted international applicants with ZERO loans, world-famous Medill Journalism & McCormick Engineering, and $47k+ PhD stipends.",
    "overviewLong": "Northwestern University is a premier private research university in Evanston, Illinois, situated immediately north of Chicago along the shores of Lake Michigan. Founded in 1851, Northwestern combines a world-class research infrastructure with exceptional undergraduate programs across engineering, computer science, economics, communication, journalism, business, social sciences, and natural sciences.\n\nRanked #=45 globally in the QS World University Rankings 2027, Northwestern is celebrated for its interdisciplinary academic environment and top-tier professional schools. Computer science students at the McCormick School of Engineering and Weinberg College of Arts and Sciences engage in cutting-edge research across artificial intelligence, machine learning, data science, robotics, and software systems. Northwestern is also internationally renowned for communication and media through the Medill School of Journalism and the School of Communication, alongside the elite Kellogg School of Management.\n\nIn terms of financial aid, Northwestern is Need-Aware for international undergraduate applicants, but guarantees that 100% of demonstrated financial need is met for all admitted international aid recipients. Furthermore, international aid packages at Northwestern consist strictly of grants and scholarships—requiring ZERO student loans and NO work-study requirements. Northwestern explicitly DOES NOT offer general undergraduate academic merit scholarships. At the doctoral level, The Graduate School (TGS) guarantees 100% full funding (tuition, fully subsidized health insurance, and annual living stipends starting at $47,748 minimum for 2026-27) for a minimum of five years for all PhD candidates.",
    "topProgramsList": [
      {
        "name": "Marketing",
        "ranking": "#14 Global (QS 2026)",
        "description": "Managed via the world-renowned Kellogg School of Management, this specialty is widely recognized as a global leader in consumer behavior analytics, executive leadership, and strategic branding."
      },
      {
        "name": "Economics & Econometrics",
        "ranking": "#16 Global (QS 2026)",
        "description": "An elite quantitative department celebrated for game theory research, structural microeconomics, and top-tier macro-policy placement."
      },
      {
        "name": "Business & Management Studies",
        "ranking": "#17 Global (QS 2026)",
        "description": "Heavily acclaimed for corporate governance and market strategies, leveraging Kellogg’s deep multi-national enterprise recruitment pipeline."
      },
      {
        "name": "Communication & Media Studies",
        "ranking": "#26 Global (QS 2026)",
        "description": "Anchored by the prestigious Medill School, this program serves as an international benchmark for journalism, public relations, and media innovations."
      },
      {
        "name": "Psychology",
        "ranking": "#32 Global (QS 2026)",
        "description": "Globally respected for its deep integration of cognitive neurosciences, behavioral linguistics, and specialized child development tracts"
      ,
    "logoText": "NU",
    "logoBg": "from-red-700 to-rose-950",
    "degreesOffered": ["Undergraduate", "Graduate", "PhD"],
    "tags": ["United States", "Europe", "International", "Research"],
    "requiresSeparateApp": true}
    ],
    "allScholarshipsList": [,

      {
        "id": "uni-013-1",
        "title": "Northwestern International Need-Based Grant Aid",
        "amount": "100% Demonstrated Need Met (Zero Loans & Zero Work)",
        "coverage": "Full Ride",
        "eligibility": "Admitted international students who requested financial aid during initial application.",
        "description": "Grant-based financial aid meeting 100% of demonstrated need with no loans or work requirements. No academic merit scholarships are offered.",
        "deadline": "Nov 1 (ED) / Jan 3 (RD)",
        "requiresSeparateApp": false
      ,
    "logoText": "NU",
    "logoBg": "from-blue-700 to-indigo-950",
    "degreesOffered": ["Undergraduate", "Graduate", "PhD"]},

      {
        "id": "uni-013-2",
        "title": "Northwestern Doctoral (PhD) Guaranteed 5-Year Funding Package",
        "amount": "100% Full Tuition + Health Insurance + $47,748 Stipend",
        "coverage": "Full Ride",
        "eligibility": "All admitted PhD candidates maintaining satisfactory academic progress.",
        "description": "Guarantees full tuition, health insurance, and living stipends ($47,748 minimum for 2026-27) for at least 5 years.",
        "deadline": "Dec 1 - Jan 1 (Program Dependent)",
        "requiresSeparateApp": false
      }
    ],
    "degreesOffered": [
      "Undergraduate",
      "Graduate",
      "PhD"
    ],
    "tags": [
      "Need-Aware",
      "100% Need Met",
      "Zero Loans",
      "Medill Leader",
      "McCormick Engineering",
      "USA",
      "QS #45"
    ],
    "requiresSeparateApp": false,
    "logoText": "NWU",
    "logoBg": "from-purple-900 to-indigo-950"
  },

  {
    "id": "uni-014",
    "universityName": "Carnegie Mellon University",
    "location": "Pittsburgh, Pennsylvania, United States",
    "country": "United States",
    "flag": "🇺🇸",
    "foundingYear": "1900",
    "scholarshipTitle": "CMU School of Computer Science (#3 Global) & Specialized Graduate Fellowships",
    "ranking": "#55 Global (QS 2027)",
    "qsSubjectRankings": "QS 2026: #3 Computer Science & Info Systems, #5 Data Science & Artificial Intelligence, #12 Statistics & Operational Research, #19 Art & Design, #19 Engineering & Technology",
    "coverage": "Partial Aid",
    "amountValue": "No Undergrad International Aid | Program-Specific PhD & Master's Fellowships (INI / Heinz)",
    "tuitionFee": "$62,260 / year (Tuition) | Total COA ~$85,000+",
    "tuitionAmountNumeric": 62260,
    "hasFullRide": false,
    "hasPartialAid": true,
    "hasFinancialAid": true,
    "financialAidType": "Partial Merit",
    "financialAidDetails": "Carnegie Mellon does not provide institutional financial aid or general merit scholarships to international undergraduate applicants. Undergraduates must be self-funded or use external scholarships. However, graduate and doctoral programs offer strong program-specific fellowships, including Heinz College PhD full tuition + $33k stipend awards and INI Director's Fellowships.",
    "minGpa": "3.9+",
    "minSat": "1510 - 1570 (Median SAT)",
    "satRequirementCategory": "1500",
    "satPolicyDetails": "Standardized testing (SAT or ACT) required for undergraduate admissions. Median enrolled SAT score range is 1510 to 1570.",
    "minIelts": "7.5+",
    "ieltsCategory": "7.5",
    "toeflRequirement": "102+",
    "commonAppAccepted": true,
    "applicationPortalDetails": "Common Application",
    "acceptanceRate": "11.0%",
    "deadline": "Nov 1 (Early Decision I) / Jan 3 (Regular Decision)",
    "description": "Ranked #55 globally overall and #3 globally in Computer Science (QS 2026), CMU in Pittsburgh, PA is the world powerhouse in AI, Robotics, and Software Engineering. International undergrad aid is self-funded; graduate fellowships available.",
    "overviewLong": "Carnegie Mellon University (CMU) is a world-renowned private research university located in Pittsburgh, Pennsylvania. Founded in 1900 by Andrew Carnegie, CMU is globally recognized as an undisputed titan in computer science, artificial intelligence, robotics, software engineering, computational biology, cybersecurity, and technology innovation.\n\nRanked #55 globally overall in the QS World University Rankings 2027, Carnegie Mellon holds elite global subject positions, including #3 globally in Computer Science & Information Systems and #5 globally in Data Science & Artificial Intelligence in the 2026 QS tables. CMU's legendary School of Computer Science (SCS), Robotics Institute, and Software Engineering Institute (SEI) lead global breakthroughs in autonomous systems, deep learning, computer vision, and human-computer interaction. The Tepper School of Business and College of Engineering further provide top-tier quantitative business analytics and engineering programs.\n\nRegarding financial aid, Carnegie Mellon explicitly states that international undergraduate students are ineligible for institutional financial aid or general academic merit scholarships. Undergraduates must demonstrate full self-funding or utilize external scholarships. At the graduate level, funding varies by program; many specialized programs and PhD tracks offer full support. For example, Heinz College PhD candidates receive 100% full tuition scholarships for their entire program tenure plus $33,000+ living stipends, while the Information Networking Institute (INI) awards competitive merit-based Director's Fellowships.",
    "topProgramsList": [
      {
        "name": "Computer Science & Info Systems",
        "ranking": "#3 Global (QS 2026)",
        "description": "An elite global leader recognized for groundbreaking research in software engineering, programming language architecture, complex network infrastructure, and foundational computational theory."
      },
      {
        "name": "Data Science & Artificial Intelligence",
        "ranking": "#5 Global (QS 2026)",
        "description": "A flagship world program defining the absolute cutting-edge of machine learning, automated language models, computer vision systems, and neural network engineering."
      },
      {
        "name": "Art & Design",
        "ranking": "#19 Global (QS 2026)",
        "description": "Celebrated for its unique fusion of studio fine arts with physical electronics, advanced visualization tools, and interdisciplinary multimedia installations."
      },
      {
        "name": "Statistics & Operational Research",
        "ranking": "#12 Global (QS 2026)",
        "description": "Highly specialized in complex mathematical modeling, computational probability systems, and big data analysis frameworks applied to industry logic."
      },
      {
        "name": "Engineering & Technology (Broad Faculty Area)",
        "ranking": "#19 Global (QS 2026)",
        "description": "The broad multi-disciplinary division driving forward CMU's elite mechanical, electrical, computer, and materials engineering laboratories."
      ,
    "logoText": "CMU",
    "logoBg": "from-violet-700 to-purple-950",
    "degreesOffered": ["Undergraduate", "Graduate", "PhD"],
    "tags": ["United States", "Europe", "International", "Research"],
    "requiresSeparateApp": true}
    ],
    "allScholarshipsList": [,

      {
        "id": "uni-014-1",
        "title": "INI Director's Fellowship (Master's Merit Award)",
        "amount": "Partial to Full Tuition Coverage",
        "coverage": "Full Tuition",
        "eligibility": "Admitted incoming Master's students in the Information Networking Institute (INI).",
        "description": "Merit-based tuition scholarship awarded to top incoming graduate students in computing and networking.",
        "deadline": "Jan 15 (Program Application)",
        "requiresSeparateApp": false
      ,
    "logoText": "CMU",
    "logoBg": "from-blue-700 to-indigo-950",
    "degreesOffered": ["Undergraduate", "Graduate", "PhD"]},

      {
        "id": "uni-014-2",
        "title": "Heinz College PhD Full Tuition & Stipend Fellowship",
        "amount": "100% Full Tuition + $33,000 Stipend (9 Months)",
        "coverage": "Full Ride",
        "eligibility": "Admitted PhD candidates in good academic standing at Heinz College.",
        "description": "Guarantees 100% full tuition scholarship plus a $33,000 living stipend for the entire duration of the PhD program.",
        "deadline": "Jan 10 (PhD Application)",
        "requiresSeparateApp": false
      }
    ],
    "degreesOffered": [
      "Undergraduate",
      "Graduate",
      "PhD"
    ],
    "tags": [
      "CS #3 Global",
      "AI #5 Global",
      "Robotics Leader",
      "No Undergrad Aid",
      "Heinz PhD Fellowship",
      "USA",
      "QS #55"
    ],
    "requiresSeparateApp": false,
    "logoText": "CMU",
    "logoBg": "from-red-900 to-slate-950"
  },

  {
    "id": "uni-015",
    "universityName": "University of California, Los Angeles",
    "location": "Los Angeles, California, United States",
    "country": "United States",
    "flag": "🇺🇸",
    "foundingYear": "1919",
    "scholarshipTitle": "UCLA Graduate Research & Teaching Assistantships (GSR / TA)",
    "ranking": "#49 Global (QS 2027)",
    "qsSubjectRankings": "QS 2026: #6 Anatomy & Physiology, #7 Anthropology, #9 English Language and Literature, #11 Psychology, #12 Mathematics, #19 Computer Science and Information Systems, #15 Biological Sciences",
    "coverage": "Partial Aid",
    "amountValue": "No Undergrad International Aid | Graduate Merit Fellowships & TA/GSR Appointments",
    "tuitionFee": "$55,700 / year (Non-Resident Tuition & Fees) | Total COA ~$84,770 per year",
    "tuitionAmountNumeric": 55700,
    "hasFullRide": false,
    "hasPartialAid": true,
    "hasFinancialAid": true,
    "financialAidType": "Partial Merit",
    "financialAidDetails": "UCLA explicitly DOES NOT provide institutional financial aid or need-based packages to international undergraduate students. Undergraduates must be fully self-funded (~$84,770 annual COA). Graduate and doctoral candidates can compete for departmental merit fellowships, Teaching Assistantships (TA), and Graduate Student Researcher (GSR) roles covering tuition and providing stipends.",
    "minGpa": "3.9+",
    "minSat": "Test-Free (UC Policy)",
    "satRequirementCategory": "Optional",
    "satPolicyDetails": "UCLA is completely Test-Free. SAT and ACT scores are not considered for undergraduate admissions or scholarship decisions.",
    "minIelts": "7.0+",
    "ieltsCategory": "7.0",
    "toeflRequirement": "87+",
    "commonAppAccepted": false,
    "applicationPortalDetails": "UC Application System",
    "acceptanceRate": "8.8%",
    "deadline": "Nov 30 (UC Application Filing Period Nov 1-30)",
    "description": "Ranked #49 globally in QS 2027, UCLA in Los Angeles is a top public research power leading Mathematics (#12), Psychology (#11), and Engineering. International undergrad aid is self-funded; graduate assistantships available.",
    "overviewLong": "The University of California, Los Angeles (UCLA) is a world-renowned public research university located in Los Angeles, California. Founded in 1919, UCLA stands as one of the flagship campuses of the University of California system and one of the most applied-to universities in the United States, celebrated for academic excellence, pioneering research, and cultural impact.\n\nRanked #49 globally in the QS World University Rankings 2027, UCLA holds top global positions across human health, sciences, and humanities, including #6 globally in Anatomy & Physiology, #7 in Anthropology, #11 in Psychology, and #12 in Mathematics in the 2026 QS Subject Rankings. The UCLA Samueli School of Engineering and Computer Science drives major advancements in artificial intelligence, computer architecture, wireless communications, cybernetics, and bioengineering.\n\nIn terms of financial aid, UCLA explicitly states that it DOES NOT provide institutional financial aid or need-based packages to international undergraduate students. Non-resident international undergraduates are required to cover non-resident tuition and living expenses (~$84,770 per year). At the graduate level, international scholars can compete for merit-based departmental fellowships, Graduate Student Researcher (GSR) appointments, and Teaching Assistantships (TA) that cover tuition and provide living stipends.",
    "topProgramsList": [
      {
        "name": "Anatomy & Physiology",
        "ranking": "#6 Global (QS 2026)",
        "description": "Human biology, physiological sciences, medical sciences, and clinical research."
      },
      {
        "name": "Mathematics",
        "ranking": "#12 Global (QS 2026)",
        "description": "Pure and applied mathematics, analysis, probability, statistics, and mathematical physics."
      },
      {
        "name": "Psychology",
        "ranking": "#11 Global (QS 2026)",
        "description": "Cognitive science, behavioral neuroscience, clinical psychology, and developmental psychology."
      },
      {
        "name": "Computer Science and Information Systems",
        "ranking": "#19 Global (QS 2026)",
        "description": "Artificial intelligence, machine learning, systems, computer graphics, networking, and software engineering."
      },
      {
        "name": "Biological Sciences",
        "ranking": "#15 Global (QS 2026)",
        "description": "Molecular biology, genetics, neuroscience, ecology, and pre-med life sciences."
      ,
    "logoText": "UCLA",
    "logoBg": "from-sky-700 to-blue-900",
    "degreesOffered": ["Undergraduate", "Graduate", "PhD"],
    "tags": ["United States", "Europe", "International", "Research"],
    "requiresSeparateApp": true}
    ],
    "allScholarshipsList": [,

      {
        "id": "uni-015-1",
        "title": "UCLA Graduate Research & Teaching Appointments (TA / GSR)",
        "amount": "Full Tuition Fee Remission + Living Stipend",
        "coverage": "Full Ride",
        "eligibility": "Admitted graduate and doctoral students appointed as Teaching Assistants or Research Assistants.",
        "description": "Covers non-resident tuition and university fees plus a monthly living stipend in exchange for academic research or instructional duties.",
        "deadline": "Dec 1 - Dec 15 (Program Dependent)",
        "requiresSeparateApp": false
      ,
    "logoText": "UCLA",
    "logoBg": "from-blue-700 to-indigo-950",
    "degreesOffered": ["Undergraduate", "Graduate", "PhD"]},

      {
        "id": "uni-015-2",
        "title": "UCLA Graduate Research Mentorship Award",
        "amount": "$30,000 Living Support + Standard Tuition Coverage",
        "coverage": "Full Ride",
        "eligibility": "Continuing doctoral students mentored by faculty in research disciplines.",
        "description": "Competitive merit award providing $30,000 living stipend plus full standard tuition coverage for doctoral researchers.",
        "deadline": "Jan 15 (Departmental Nomination)",
        "requiresSeparateApp": false
      }
    ],
    "degreesOffered": [
      "Undergraduate",
      "Graduate",
      "PhD"
    ],
    "tags": [
      "Public Powerhouse",
      "LA Ecosystem",
      "Math #12",
      "No Undergrad Aid",
      "Graduate TA/GSR",
      "USA",
      "QS #49"
    ],
    "requiresSeparateApp": false,
    "logoText": "UCLA",
    "logoBg": "from-blue-700 to-amber-800"
  },

  {
    "id": "uni-016",
    "universityName": "University of Michigan-Ann Arbor",
    "location": "Ann Arbor, Michigan, United States",
    "country": "United States",
    "flag": "🇺🇸",
    "foundingYear": "1817",
    "scholarshipTitle": "University of Michigan 12-Month PhD Guaranteed Funding & Rackham Fellowships",
    "ranking": "#51 Global (QS 2027)",
    "qsSubjectRankings": "QS 2026: #4 Dentistry, #14 Psychology, #21 Mechanical, Manufacturing & Aeronautical Engineering, #29 Medicine, #30 Economics & Econometrics",
    "coverage": "Full Ride",
    "amountValue": "12-Month Guaranteed PhD Funding (Tuition + GradCare + $43,788 Stipend) | Limited Undergrad Aid",
    "tuitionFee": "$58,000+ / year (Out-of-State Tuition) | Total COA ~$80,000+",
    "tuitionAmountNumeric": 58000,
    "hasFullRide": true,
    "hasPartialAid": true,
    "hasFinancialAid": true,
    "financialAidType": "Need-Based",
    "financialAidDetails": "University of Michigan provides very limited institutional financial aid for international undergraduates. However, the Rackham Graduate School guarantees 12-month full PhD funding packages covering 100% tuition, mandatory fees, GradCare health/dental insurance, and living stipends ($43,788+ for Rackham Predoctoral Fellows) for 4 to 6 years. Specialized doctoral awards include the Barbour Scholarship ($43k+ stipend + tuition).",
    "minGpa": "3.9+",
    "minSat": "1440 - 1540 (Median SAT)",
    "satRequirementCategory": "1400",
    "satPolicyDetails": "Test-Optional policy for undergraduate admissions. Median enrolled SAT score range is 1440 to 1540.",
    "minIelts": "7.0+",
    "ieltsCategory": "7.0",
    "toeflRequirement": "100+",
    "commonAppAccepted": true,
    "applicationPortalDetails": "Common Application",
    "acceptanceRate": "17.7%",
    "deadline": "Nov 1 (Early Action) / Feb 1 (Regular Decision)",
    "description": "Ranked #51 globally in QS 2027 and #=29 in Medicine, U-M in Ann Arbor offers guaranteed 12-month full PhD funding packages ($43,788+ stipend + tuition + GradCare) for 4-6 years and top Michigan Engineering programs.",
    "overviewLong": "The University of Michigan-Ann Arbor (U-M) is a premier public research university founded in 1817 in Ann Arbor, Michigan. As one of the preeminent public research institutions in the world, Michigan maintains a massive research enterprise spanning engineering, computer science, medicine, dentistry, business, public policy, and the humanities.\n\nRanked #51 globally in the QS World University Rankings 2027 and #=29 globally in Medicine in the 2026 QS subject tables, Michigan Engineering and the School of Information offer elite education in artificial intelligence, machine learning, computer systems, robotics, and biomedical sciences. Michigan’s healthcare ecosystem, anchored by Michigan Medicine and the School of Dentistry, is globally leading.\n\nFor international undergraduate applicants, federal aid is unavailable and institutional aid is extremely limited. However, for graduate and doctoral scholars, the Rackham Graduate School provides robust funding structures: Rackham PhD candidates receive guaranteed 12-month full funding packages covering fully paid tuition, fringe health/dental benefits (GradCare), and annual living stipends ($43,788+ for Rackham Predoctoral Fellows) for 4 to 6 years. Specialized opportunities such as the Barbour Scholarship provide full tuition plus $43,788 stipends for female doctoral scholars.",
    "topProgramsList": [
      {
        "name": "Dentistry",
        "ranking": "#4 (QS 2026)",
        "description": "Internationally celebrated as a premier global leader in oral health care, clinical dental training, and advanced craniofacial research."
      },
      {
        "name": "Psychology",
        "ranking": "#14 (QS 2026)",
        "description": "A top-tier department recognized globally for experimental psychology, cognitive neuroscience, and developmental behavioral science."
      },
      {
        "name": "Mechanical, Manufacturing and Aeronautical Engineering",
        "ranking": "#21 (QS 2026)",
        "description": "Renowned for extensive laboratory infrastructure, advanced thermal sciences, and automotive engineering innovations."
      },
      {
        "name": "Medicine",
        "ranking": "#29 (QS 2026)",
        "description": "Anchored by the prestigious Michigan Medicine academic health center, excelling in clinical instruction and patient-centered research."
      },
      {
        "name": "Economics & Econometrics",
        "ranking": "#30 (QS 2026)",
        "description": "A highly respected quantitative department specializing in applied microeconomics, public finance, and econometric modeling"
      ,
    "logoText": "UMA",
    "logoBg": "from-red-700 to-rose-950",
    "degreesOffered": ["Undergraduate", "Graduate", "PhD"],
    "tags": ["United States", "Europe", "International", "Research"],
    "requiresSeparateApp": true}
    ],
    "allScholarshipsList": [,

      {
        "id": "uni-016-1",
        "title": "Rackham Predoctoral Fellowship (PhD Full Award)",
        "amount": "Full Tuition + GradCare Health/Dental + $43,788 Stipend (12 Months)",
        "coverage": "Full Ride",
        "eligibility": "Outstanding doctoral candidates working on dissertations across Rackham PhD programs.",
        "description": "12-month full fellowship covering candidacy tuition, required fees, GradCare health and dental insurance, and a $43,788 living stipend.",
        "deadline": "Jan 15 (Rackham Nomination)",
        "requiresSeparateApp": false
      ,
    "logoText": "UMA",
    "logoBg": "from-blue-700 to-indigo-950",
    "degreesOffered": ["Undergraduate", "Graduate", "PhD"]},

      {
        "id": "uni-016-2",
        "title": "Barbour Scholarship for Female Doctoral Scholars",
        "amount": "Full Tuition & Fees + $43,788 Living Stipend",
        "coverage": "Full Ride",
        "eligibility": "Female doctoral candidates from qualifying countries/regions advanced to candidacy.",
        "description": "Prestigious fellowship providing 100% full tuition, required fees, GradCare health insurance, and a $43,788 stipend for one academic year.",
        "deadline": "Jan 10 (Departmental Nomination)",
        "requiresSeparateApp": false
      ,
    "logoText": "UMA",
    "logoBg": "from-blue-700 to-indigo-950",
    "degreesOffered": ["Undergraduate", "Graduate", "PhD"]},

      {
        "id": "uni-016-3",
        "title": "Rackham International Student Fellowship",
        "amount": "$14,596 Fellowship Award",
        "coverage": "Partial Aid",
        "eligibility": "Continuing Rackham graduate students who are international students on temporary visas.",
        "description": "Fellowship support ($14,596) usable for tuition or stipend for international graduate scholars after completing one year of study.",
        "deadline": "Mar 1 (Rackham Nomination)",
        "requiresSeparateApp": false
      }
    ],
    "degreesOffered": [
      "Undergraduate",
      "Graduate",
      "PhD"
    ],
    "tags": [
      "Medicine #29",
      "12-Month PhD Stipend",
      "Rackham Fellowship",
      "Barbour Award",
      "Michigan Engineering",
      "USA",
      "QS #51"
    ],
    "requiresSeparateApp": false,
    "logoText": "UMICH",
    "logoBg": "from-blue-900 to-amber-950"
  },

  {
    "id": "uni-017",
    "universityName": "New York University",
    "location": "New York City, New York, United States",
    "country": "United States",
    "flag": "🇺🇸",
    "foundingYear": "1831",
    "scholarshipTitle": "NYU Courant/Tandon PhD Full Funding & GPH Master's Merit Awards",
    "ranking": "#58 Global (QS 2027)",
    "qsSubjectRankings": "QS 2026: #1 Philosophy, #7 Law & Legal Studies, #8 Performing Arts, #10 Arts & Humanities, #16 Business & Management Studies",
    "coverage": "Full Ride",
    "amountValue": "Full PhD Funding (Tuition + Stipend up to $56,763) | GPH Master's Merit up to $60,000",
    "tuitionFee": "$64,000–$68,000+ / year (Tuition) | Total COA ~$90,000–$93,000+",
    "tuitionAmountNumeric": 66000,
    "hasFullRide": true,
    "hasPartialAid": true,
    "hasFinancialAid": true,
    "financialAidType": "Partial Merit",
    "financialAidDetails": "NYU undergraduate aid is school-dependent and limited for international applicants without a universal full-need guarantee. However, NYU offers strong graduate merit scholarships (e.g. GPH awards up to $60,000, Stern scholarships). Full PhD funding is guaranteed for Computer Science, Stern (5 years), Steinhardt ($34,883 stipend), and Biomedical Sciences ($56,763 stipend + tuition).",
    "minGpa": "3.8+",
    "minSat": "1470 - 1560 (Median SAT)",
    "satRequirementCategory": "1400",
    "satPolicyDetails": "Test-Optional policy for undergraduate admissions. Median enrolled SAT score range is 1470 to 1560.",
    "minIelts": "7.5+",
    "ieltsCategory": "7.5",
    "toeflRequirement": "100+",
    "commonAppAccepted": true,
    "applicationPortalDetails": "Common Application",
    "acceptanceRate": "8.0%",
    "deadline": "Nov 1 (ED I) / Jan 1 (ED II / Regular Decision)",
    "description": "Ranked #58 globally in QS 2027 and #1 globally in Philosophy, NYU in NYC offers world-class Courant CS, Stern Business, Tandon Engineering, and full PhD stipends up to $56,763/year.",
    "overviewLong": "New York University (NYU) is a world-renowned private research university founded in 1831, based primarily in New York City with global portal campuses in Abu Dhabi and Shanghai. NYU offers an extraordinary urban education, embedding students directly into global industry centers across finance, technology, law, media, healthcare, arts, and international business.\n\nRanked #58 globally in the QS World University Rankings 2027, NYU is internationally distinguished for academic excellence across its schools: Philosophy ranks #1 globally, Law & Legal Studies ranks #7 globally, Performing Arts ranks #8 globally, Arts & Humanities ranks #10 globally, and Communication & Media ranks #10= globally in the 2026 QS Subject Rankings. Computer science scholars at the Courant Institute of Mathematical Sciences and Tandon School of Engineering conduct cutting-edge research in artificial intelligence, machine learning, robotics, algorithms, cybersecurity, and financial technology.\n\nRegarding financial aid, NYU's undergraduate aid is school- and program-dependent without a single universal international full-need guarantee. However, at the graduate and doctoral levels, NYU provides substantial merit scholarships (such as NYU GPH awards up to $60,000) and full funding packages. For doctoral candidates, programs such as Computer Science, Stern PhD (5 years), Steinhardt PhD ($34,883 stipend), and Biomedical Sciences ($56,763 annual stipend + full tuition) provide 100% full funding.",
    "topProgramsList": [
      {
        "name": "Philosophy",
        "ranking": "#1 (QS 2026)",
        "description": "Retains the undisputed top spot in the world, renowned for pioneering work in logic, mathematical philosophy, ethics, and epistemology."
      },
      {
        "name": "Law & Legal Studies",
        "ranking": "#7 (QS 2026)",
        "description": "Anchored by the historic NYU School of Law, this division serves as an international powerhouse for corporate law, taxation pipelines, and global governance frameworks."
      },
      {
        "name": "Performing Arts",
        "ranking": "#8 (QS 2026)",
        "description": "Cultivated through the legendary Tisch School of the Arts, this program stands as a premier global benchmark for theatrical performance, cinematic production, and dramatic writing."
      },
      {
        "name": "Arts & Humanities (Broad Faculty Area)",
        "ranking": "#10 (QS 2026)",
        "description": "The umbrella division coordinating NYU's collective excellence across history, creative media, literature, and linguistic sciences, marking its strongest macro-category placement."
      },
      {
        "name": "Business & Management Studies",
        "ranking": "#16 (QS 2026)",
        "description": "Managed via the elite Leonard N. Stern School of Business, highly recognized for corporate strategy, asset management, and global corporate placements. (Note: The standalone full-time Stern MBA program ranks even higher, placing within the top tier of dedicated business school charts)."
      ,
    "logoText": "NYU",
    "logoBg": "from-purple-700 to-indigo-950",
    "degreesOffered": ["Undergraduate", "Graduate", "PhD"],
    "tags": ["United States", "Europe", "International", "Research"],
    "requiresSeparateApp": true}
    ],
    "allScholarshipsList": [,

      {
        "id": "uni-017-1",
        "title": "NYU Computer Science & Biomedical PhD Full Package",
        "amount": "100% Tuition Paid + Health Benefits + $56,763 Stipend",
        "coverage": "Full Ride",
        "eligibility": "All full-time admitted PhD candidates in Computer Science, Biomedical Sciences, or Stern.",
        "description": "Guarantees 100% tuition and fee coverage, health insurance, and an annual living stipend (up to $56,763 for Biomedical Sciences).",
        "deadline": "Dec 1 - Dec 15 (Program Dependent)",
        "requiresSeparateApp": false
      ,
    "logoText": "NYU",
    "logoBg": "from-blue-700 to-indigo-950",
    "degreesOffered": ["Undergraduate", "Graduate", "PhD"]},

      {
        "id": "uni-017-2",
        "title": "NYU School of Global Public Health Master's Merit Scholarship",
        "amount": "Up to $60,000 Tuition Scholarship",
        "coverage": "Full Tuition",
        "eligibility": "Admitted Master's applicants evaluated on academic achievement and leadership potential.",
        "description": "Merit-based scholarship covering up to $60,000 for incoming Master's students, including international applicants.",
        "deadline": "Jan 15 (Priority Master's Deadline)",
        "requiresSeparateApp": false
      }
    ],
    "degreesOffered": [
      "Undergraduate",
      "Graduate",
      "PhD"
    ],
    "tags": [
      "NYC Tech Hub",
      "Philosophy #1",
      "Law #7",
      "Courant CS",
      "Biomedical PhD $56k",
      "USA",
      "QS #58"
    ],
    "requiresSeparateApp": false,
    "logoText": "NYU",
    "logoBg": "from-purple-900 to-violet-950"
  },

  {
    "id": "uni-018",
    "universityName": "Brown University",
    "location": "Providence, Rhode Island, United States",
    "country": "United States",
    "flag": "🇺🇸",
    "foundingYear": "1764",
    "scholarshipTitle": "Brown 100% Need-Blind International Financial Aid (Zero Loans) & 5-6 Year Guaranteed PhD Funding",
    "ranking": "#66 Global (QS 2027)",
    "qsSubjectRankings": "QS 2026: #34 Economics & Econometrics, #=44 English Language & Literature, #51-100 Development Studies, #51-100 History, #=111 Computer Science & Info Systems",
    "coverage": "Full Ride",
    "amountValue": "100% Demonstrated Need Met (Zero Loans & Need-Blind) | 5-6 Year Guaranteed PhD Funding",
    "tuitionFee": "$68,230 / year (Tuition) | Total COA ~$91,676+",
    "tuitionAmountNumeric": 68230,
    "hasFullRide": true,
    "hasPartialAid": false,
    "hasFinancialAid": true,
    "financialAidType": "Need-Blind",
    "financialAidDetails": "Brown is 100% Need-Blind for ALL international first-year undergraduate applicants (Class of 2029 / Fall 2025 onwards) and meets 100% of demonstrated financial need with scholarship grants requiring ZERO student loans via the Brown Promise. Brown explicitly DOES NOT offer general academic merit scholarships. Doctoral candidates receive 5 years of guaranteed funding (6 years for Humanities/Social Sciences) covering tuition remission, health insurance, and stipends.",
    "minGpa": "3.9+",
    "minSat": "1500 - 1570 (Median SAT)",
    "satRequirementCategory": "1500",
    "satPolicyDetails": "Standardized testing (SAT or ACT) required for undergraduate admissions. Median enrolled SAT score range is 1500 to 1570.",
    "minIelts": "7.5+",
    "ieltsCategory": "7.5",
    "toeflRequirement": "105+",
    "commonAppAccepted": true,
    "applicationPortalDetails": "Common Application",
    "acceptanceRate": "5.1%",
    "deadline": "Nov 1 (Early Decision) / Jan 3 (Regular Decision)",
    "description": "Ranked #66 globally in QS 2027, Ivy League Brown in Providence, RI offers Open Curriculum, 100% need-blind international admission with zero loans, strictly need-based undergraduate aid, and 5-6 year guaranteed PhD funding.",
    "overviewLong": "Brown University is an elite private Ivy League research university in Providence, Rhode Island, founded in 1764. Brown is globally celebrated for its unique undergraduate Open Curriculum, which empowers students to design personalized interdisciplinary academic pathways without mandatory general education restrictions.\n\nRanked #66 globally in the QS World University Rankings 2027, Brown holds distinguished global subject rankings including #25 in Development Studies, #30 in Economics & Econometrics, and #36 in English Language & Literature in the 2026 QS tables. Brown's Department of Computer Science and Division of Applied Mathematics lead breakthrough computational research in artificial intelligence, systems, algorithms, and computational biology.\n\nIn financial aid, Brown is one of the most generous universities in the world for international applicants. Beginning with the Class of 2029 (Fall 2025 entry), Brown is 100% Need-Blind for ALL international undergraduate applicants and guarantees meeting 100% of demonstrated financial need with scholarship grants requiring ZERO student loans under the Brown Promise initiative. Brown explicitly DOES NOT offer general academic merit scholarships. For doctoral candidates, Brown guarantees 5 years of full funding (6 years for Humanities and Social Sciences) covering tuition remission, health insurance, health-services fees, and living stipends.",
    "topProgramsList": [
      {
        "name": "Economics & Econometrics",
        "ranking": "#34 (QS 2026)",
        "description": "An elite global department celebrated for its research in applied microeconomics, financial systems, and income inequality studies."
      },
      {
        "name": "English Language & Literature",
        "ranking": "#=44 (QS 2026)",
        "description": "Highly distinguished for its focus on post-colonial literature, creative writing pathways, and extensive literary theory archives."
      },
      {
        "name": "Development Studies",
        "ranking": "#51-100 (QS 2026)",
        "description": "A cross-disciplinary program analyzing international infrastructure, sociology, global resources, and political frameworks in developing economies."
      },
      {
        "name": "History",
        "ranking": "#51-100 (QS 2026)",
        "description": "Heavily praised for historical archival research, colonial studies, and its deep integration with Brown’s specialized humanities centers."
      },
      {
        "name": "Computer Science & Information Systems",
        "ranking": "#=111 (QS 2026)",
        "description": "World-renowned for foundational research in computer graphics, human-computer interaction, and user-interface structures."
      ,
    "logoText": "BU",
    "logoBg": "from-emerald-700 to-teal-950",
    "degreesOffered": ["Undergraduate", "Graduate", "PhD"],
    "tags": ["United States", "Europe", "International", "Research"],
    "requiresSeparateApp": true}
    ],
    "allScholarshipsList": [,

      {
        "id": "uni-018-1",
        "title": "Brown Need-Blind International Financial Aid Package",
        "amount": "100% Demonstrated Need Met (Zero Loans)",
        "coverage": "Full Ride",
        "eligibility": "All admitted undergraduate applicants (Class of 2029 onwards). No merit scholarships offered.",
        "description": "Need-based grant coverage meeting 100% of demonstrated need with zero student loans under the Brown Promise.",
        "deadline": "Nov 1 (ED) / Jan 3 (RD)",
        "requiresSeparateApp": false
      ,
    "logoText": "BU",
    "logoBg": "from-blue-700 to-indigo-950",
    "degreesOffered": ["Undergraduate", "Graduate", "PhD"]},

      {
        "id": "uni-018-2",
        "title": "Brown Doctoral (PhD) Guaranteed 5-6 Year Funding Package",
        "amount": "100% Tuition Remission + Health Coverage + Living Stipend",
        "coverage": "Full Ride",
        "eligibility": "All admitted PhD candidates in good academic standing (5 years STEM, 6 years Humanities).",
        "description": "Guarantees 100% tuition remission, health insurance, health-services fees, and competitive living stipends for 5 to 6 years.",
        "deadline": "Dec 1 - Dec 15 (Program Dependent)",
        "requiresSeparateApp": false
      }
    ],
    "degreesOffered": [
      "Undergraduate",
      "Graduate",
      "PhD"
    ],
    "tags": [
      "Need-Blind",
      "100% Need Met",
      "Zero Loans",
      "Open Curriculum",
      "Ivy League",
      "Guaranteed PhD Funding",
      "USA",
      "QS #66"
    ],
    "requiresSeparateApp": false,
    "logoText": "BROW",
    "logoBg": "from-amber-950 to-stone-900"
  },

  {
    "id": "uni-019",
    "universityName": "Duke University",
    "location": "Durham, North Carolina, United States",
    "country": "United States",
    "flag": "🇺🇸",
    "foundingYear": "1838",
    "scholarshipTitle": "Duke International Need-Based Aid & Full Undergraduate Merit Scholarships",
    "ranking": "#70 Global (QS 2027)",
    "qsSubjectRankings": "QS 2026: #5 Nursing, #19 Medicine, #7 Business Analytics, #91 Computer Science & Info Systems, #149 Engineering & Technology",
    "coverage": "Full Ride",
    "amountValue": "100% Need-Based Aid (If Requested on App) | Full Tuition + Room/Board Merit Scholarships",
    "tuitionFee": "$68,758 / year (Tuition) | Total COA ~$90,696–$93,000+",
    "tuitionAmountNumeric": 68758,
    "hasFullRide": true,
    "hasPartialAid": true,
    "hasFinancialAid": true,
    "financialAidType": "Need-Based",
    "financialAidDetails": "Duke provides need-based financial aid for international undergraduates who indicate interest on their original admissions application. Duke also automatically considers applicants for prestigious merit scholarships covering full tuition, room, board, and mandatory fees. Doctoral candidates receive guaranteed 5-year core funding covering tuition, mandatory fees, stipends, and 6 years of full health & dental insurance.",
    "minGpa": "3.9+",
    "minSat": "1510 - 1570 (Median SAT)",
    "satRequirementCategory": "1500",
    "satPolicyDetails": "Standardized testing (SAT or ACT) required for undergraduate admissions. Median enrolled SAT score range is 1510 to 1570.",
    "minIelts": "7.0+",
    "ieltsCategory": "7.0",
    "toeflRequirement": "100+",
    "commonAppAccepted": true,
    "applicationPortalDetails": "Common Application or Coalition Application",
    "acceptanceRate": "5.9%",
    "deadline": "Nov 1 (Early Decision) / Jan 3 (Regular Decision)",
    "description": "Ranked #70 globally in QS 2027, Duke in Durham, NC excels in Medicine (#19), Nursing (#5), BME, and CS. Offers international need-based aid, full tuition + room/board merit awards, and guaranteed 5-year PhD stipends.",
    "overviewLong": "Duke University is a preeminent private research university located in Durham, North Carolina, founded in 1838. Duke integrates top-tier liberal arts education with a major research and medical enterprise spanning medicine, biomedical engineering, computer science, economics, business, and environmental policy.\n\nRanked #70 globally overall in the QS World University Rankings 2027, Duke holds elite subject positions including #5 globally in Nursing and #19 globally in Medicine in the 2026 QS subject rankings. The Department of Computer Science in Trinity College and the Pratt School of Engineering lead cutting-edge research in machine learning, computational biology, cybersecurity, robotics, and medical devices.\n\nFor undergraduate applicants, Duke provides both need-based financial aid for international students (who indicate interest on their original application) and automatic consideration for prestigious full merit scholarships covering tuition, room, board, and mandatory fees. For PhD candidates, Duke guarantees 5 years of core funding covering full tuition, mandatory fees, monthly living stipends, and 6 years of fully covered health and dental insurance.",
    "topProgramsList": [
      {
        "name": "Nursing",
        "ranking": "#5 Global (QS 2026)",
        "description": "Clinical nursing, healthcare leadership, informatics, and advanced nursing practice."
      },
      {
        "name": "Medicine",
        "ranking": "#19 Global (QS 2026)",
        "description": "Clinical medicine, biomedical research, surgery, neuroscience, and global health."
      },
      {
        "name": "Engineering and Technology",
        "ranking": "#149 Global (QS 2026)",
        "description": "Medical devices, tissue engineering, neural engineering, biomechanics, and imaging."
      },
      {
        "name": "Computer Science and Information Systems",
        "ranking": "#91 Global (QS 2026)",
        "description": "Artificial intelligence, machine learning, systems, algorithms, data science, and cybersecurity."
      },
      {
        "name": "Business Analytics",
        "ranking": "#7 Global (QS 2026)",
        "description": "Econometrics, corporate finance, quantitative economics, and data-driven business decision-making."
      ,
    "logoText": "DU",
    "logoBg": "from-cyan-700 to-blue-950",
    "degreesOffered": ["Undergraduate", "Graduate", "PhD"],
    "tags": ["United States", "Europe", "International", "Research"],
    "requiresSeparateApp": true}
    ],
    "allScholarshipsList": [,

      {
        "id": "uni-019-1",
        "title": "Duke International Merit Scholarship Program",
        "amount": "Full Tuition + Housing + Board + Mandatory Fees",
        "coverage": "Full Ride",
        "eligibility": "All admitted first-year undergraduate applicants (automatically considered).",
        "description": "Covers full tuition, campus room charges, standard meal plan, and mandatory fees for four years of undergraduate study.",
        "deadline": "Nov 1 (ED) / Jan 3 (RD)",
        "requiresSeparateApp": false
      ,
    "logoText": "DU",
    "logoBg": "from-blue-700 to-indigo-950",
    "degreesOffered": ["Undergraduate", "Graduate", "PhD"]},

      {
        "id": "uni-019-2",
        "title": "Duke Doctoral (PhD) Guaranteed 5-Year Core Funding",
        "amount": "100% Tuition & Fees + Living Stipend + 6 Years Health/Dental",
        "coverage": "Full Ride",
        "eligibility": "All admitted PhD candidates in good academic standing.",
        "description": "Guarantees 5 years of stipend, tuition, and mandatory fee support, plus 6 years of full health and dental insurance premiums.",
        "deadline": "Dec 1 - Dec 15 (Program Dependent)",
        "requiresSeparateApp": false
      }
    ],
    "degreesOffered": [
      "Undergraduate",
      "Graduate",
      "PhD"
    ],
    "tags": [
      "Medicine #19",
      "Nursing #5",
      "Full Merit Award",
      "5-Year PhD Package",
      "Pratt Engineering",
      "USA",
      "QS #70"
    ],
    "requiresSeparateApp": false,
    "logoText": "DUKE",
    "logoBg": "from-blue-900 to-navy-950"
  },

  {
    "id": "uni-020",
    "universityName": "The University of Texas at Austin",
    "location": "Austin, Texas, United States",
    "country": "United States",
    "flag": "🇺🇸",
    "foundingYear": "1883",
    "scholarshipTitle": "UT Austin Cockrell PhD Fellowships & International Education Fee Scholarships (IEFS)",
    "ranking": "#72 Global (QS 2027)",
    "qsSubjectRankings": "QS 2026: #1 Petroleum Engineering, #4 Communication & Media Studies, #28 Engineering & Technology, #29 Mechanical, Aeronautical & Manufacturing Engineering, #32 Natural Sciences",
    "coverage": "Partial Aid",
    "amountValue": "Partial Merit Award via IEFS (~$5,000) | Full STEM/Cockrell PhD Fellowships",
    "tuitionFee": "$42,554–$51,106 / year (Non-Resident Tuition) | Total COA ~$64,204–$72,916",
    "tuitionAmountNumeric": 46800,
    "hasFullRide": false,
    "hasPartialAid": true,
    "hasFinancialAid": true,
    "financialAidType": "Partial Merit",
    "financialAidDetails": "UT Austin offers competitive international scholarship opportunities such as the International Education Fee Scholarship (IEFS), which is a competitive partial merit award (~$5,000 per award cycle/stipend) rather than a guaranteed full-tuition award. UT Austin does not offer guaranteed 4-year full-tuition awards for international undergraduates. At the doctoral level, UT Austin and the Cockrell School of Engineering offer multi-year funding packages combining research assistantships (GSRA), teaching assistantships (TA), university fellowships, full tuition coverage, and monthly stipends.",
    "minGpa": "3.8+",
    "minSat": "1370 - 1500 (Median SAT)",
    "satRequirementCategory": "1300",
    "satPolicyDetails": "Standardized testing (SAT or ACT) required for undergraduate admissions. Median enrolled SAT score range is 1370 to 1500.",
    "minIelts": "6.5+",
    "ieltsCategory": "6.5",
    "toeflRequirement": "79+",
    "commonAppAccepted": true,
    "applicationPortalDetails": "Common Application or ApplyTexas",
    "acceptanceRate": "28.9%",
    "deadline": "Nov 1 (Priority) / Dec 1 (Regular Decision)",
    "description": "Ranked #72 globally in QS 2027, UT Austin in Austin, TX is a top public research power in CS, Cockrell Engineering, Petroleum Engineering, and McCombs Business. Offers IEFS partial merit awards (~$5,000) and full STEM PhD packages.",
    "overviewLong": "The University of Texas at Austin (UT Austin) is a flagship public research university founded in 1883 in Austin, Texas. UT Austin is a major global research power, particularly renowned for computer science, engineering, business, petroleum engineering, mathematics, physics, and media studies.\n\nRanked #72 globally overall in the QS World University Rankings 2027, UT Austin's Department of Computer Science and Cockrell School of Engineering rank among the world's elite in artificial intelligence, machine learning, systems architecture, robotics, and energy engineering. UT Austin's location in Austin, Texas—a major U.S. technology hub—provides extraordinary corporate and startup integration.\n\nFor international undergraduate students, financial aid is limited, though competitive merit awards exist (such as the International Education Fee Scholarship providing up to 4 years of tuition and fee coverage). At the doctoral level, UT Austin offers robust graduate support: STEM and Cockrell School PhD students receive multi-year funding packages combining research assistantships (GSRA), teaching assistantships (TA), university fellowships, tuition coverage, and monthly living stipends.",
    "topProgramsList": [
      {
        "name": "Petroleum Engineering",
        "ranking": "#1 (QS 2026)",
        "description": "Holds the undisputed absolute top spot in the world, defining international standards for underground energy simulation, extraction research, and reservoir management."
      },
      {
        "name": "Communication & Media Studies",
        "ranking": "#4 (QS 2026)",
        "description": "Celebrated as a global premier hub for journalism innovation, digital advertising models, and media literacy research frameworks."
      },
      {
        "name": "Engineering & Technology (Broad Faculty Area)",
        "ranking": "#28 (QS 2026)",
        "description": "The holistic multi-disciplinary powerhouse grouping that integrates the elite Cockrell School of Engineering divisions into an international innovation system."
      },
      {
        "name": "Mechanical, Aeronautical & Manufacturing Engineering",
        "ranking": "#29 (QS 2026)",
        "description": "Highly acclaimed for specialized research pipelines in dynamic robotics, advanced thermal sciences, and complex structural material mechanics."
      },
      {
        "name": "Natural Sciences (Broad Faculty Area)",
        "ranking": "#32 (QS 2026)",
        "description": "The broad umbrella division anchoring UT Austin's world-leading physics, mathematics, chemistry, and planetary geoscience laboratories"
      ,
    "logoText": "UTA",
    "logoBg": "from-blue-700 to-indigo-950",
    "degreesOffered": ["Undergraduate", "Graduate", "PhD"],
    "tags": ["United States", "Europe", "International", "Research"],
    "requiresSeparateApp": true}
    ],
    "allScholarshipsList": [,

      {
        "id": "uni-020-1",
        "title": "UT Austin International Education Fee Scholarship (IEFS)",
        "amount": "~$5,000 Partial Award / Stipend per Cycle",
        "coverage": "Partial Aid",
        "eligibility": "Enrolled or admitted UT international undergraduate and graduate students.",
        "description": "A competitive partial merit award/stipend (typically around $5,000 per cycle distributed term-by-term) awarded to select international students. Does NOT provide a guaranteed 4-year full-tuition coverage.",
        "deadline": "Oct 1 (Spring) / Mar 1 (Fall)",
        "requiresSeparateApp": true
      ,
    "logoText": "UTA",
    "logoBg": "from-blue-700 to-indigo-950",
    "degreesOffered": ["Undergraduate", "Graduate", "PhD"]},

      {
        "id": "uni-020-2",
        "title": "UT Cockrell School of Engineering Doctoral Fellowship Package",
        "amount": "Full Tuition Coverage + Paid Health Insurance + Monthly Stipend",
        "coverage": "Full Ride",
        "eligibility": "Admitted engineering PhD candidates maintaining satisfactory academic progress.",
        "description": "Multi-year fellowship and research/teaching assistantship package providing full tuition, health insurance, and monthly stipends.",
        "deadline": "Dec 15 (Engineering PhD Deadline)",
        "requiresSeparateApp": false
      }
    ],
    "degreesOffered": [
      "Undergraduate",
      "Graduate",
      "PhD"
    ],
    "tags": [
      "Austin Tech Hub",
      "Cockrell Engineering",
      "Petroleum Leader",
      "McCombs Business",
      "IEFS Award",
      "USA",
      "QS #72"
    ],
    "requiresSeparateApp": false,
    "logoText": "UTX",
    "logoBg": "from-orange-800 to-amber-950"
  },

  {
    "id": "uni-021",
    "universityName": "University of Illinois Urbana-Champaign",
    "location": "Urbana-Champaign, Illinois, United States",
    "country": "United States",
    "flag": "🇺🇸",
    "foundingYear": "1867",
    "scholarshipTitle": "UIUC Grainger Engineering Assistantships & Competitive Provost Merit Awards",
    "ranking": "#74 Global (QS 2027)",
    "qsSubjectRankings": "QS 2026: #6 Library & Info Management, #17 Civil & Structural Engineering, #42 Data Science & AI, #26 Engineering & Technology, #32 Computer Science and Information Systems",
    "coverage": "Partial Aid",
    "amountValue": "No Undergrad Need Aid | Competitive Merit Awards (Provost/Stamps) & Graduate TA/RA Tuition Waivers",
    "tuitionFee": "$39,392–$49,742 / year (Tuition) | Total COA ~$58,616–$68,966",
    "tuitionAmountNumeric": 44500,
    "hasFullRide": false,
    "hasPartialAid": true,
    "hasFinancialAid": true,
    "financialAidType": "Partial Merit",
    "financialAidDetails": "UIUC does not provide need-based financial aid to international undergraduate students. Note that Stamps Scholarships are restricted to US citizens/permanent residents. International freshman merit is primarily channeled through institutional awards like the Illinois Achievement Scholarship ($10,000/year) and college-specific departmental grants. Graduate and PhD students in Grainger Engineering receive TA/RA assistantships providing full tuition/fee waivers plus living stipends.",
    "minGpa": "3.8+",
    "minSat": "1410 - 1530 (Median SAT)",
    "satRequirementCategory": "1400",
    "satPolicyDetails": "Test-Optional policy for undergraduate admissions. Median enrolled SAT score range is 1410 to 1530.",
    "minIelts": "7.5+",
    "ieltsCategory": "7.5",
    "toeflRequirement": "103+",
    "commonAppAccepted": true,
    "applicationPortalDetails": "Common Application or myIllini",
    "acceptanceRate": "43.7%",
    "deadline": "Nov 1 (Early Action) / Jan 5 (Regular Decision)",
    "description": "Ranked #74 globally in QS 2027, UIUC in Urbana-Champaign is a world titan in CS (#32), Engineering (#23), Data Science (#21), and Civil Eng (#18). Offers Grainger graduate TA/RA tuition waivers and select Illinois Achievement & departmental merit awards.",
    "overviewLong": "The University of Illinois Urbana-Champaign (UIUC) is a premier public research university in Urbana-Champaign, Illinois, founded in 1867. UIUC is globally recognized as an elite titan in computer science, computer engineering, electrical engineering, civil engineering, data science, and information sciences.\n\nRanked #74 globally in the QS World University Rankings 2027, UIUC's Grainger College of Engineering and School of Information Sciences hold outstanding global subject rankings, including #6 globally in Library & Information Management, #18 in Civil & Structural Engineering, #21 in Data Science & Artificial Intelligence, #23 in Engineering & Technology, and #32 in Computer Science & Information Systems in the 2026 QS tables.\n\nFor international undergraduate applicants, UIUC does not provide need-based financial aid. Furthermore, the prestigious Stamps Scholarship is restricted to US citizens or permanent residents (Illinois and domestic applicants). International freshman merit is primarily channeled through institutional awards like the Illinois Achievement Scholarship ($10,000/year) or college-specific departmental grants. At the graduate and doctoral levels, UIUC offers strong assistantship models (RA, TA, GA) and fellowships that provide tuition and fee waivers along with living stipends for qualified candidates.",
    "topProgramsList": [
      {
        "name": "Computer Science and Information Systems",
        "ranking": "#32 Global (QS 2026)",
        "description": "Artificial intelligence, machine learning, systems architecture, algorithms, data science, and software engineering."
      },
      {
        "name": "Data Science & Artificial Intelligence",
        "ranking": "#42 Global (QS 2026)",
        "description": "Machine learning, neural networks, big data analytics, automated reasoning, and natural language processing."
      },
      {
        "name": "Civil & Structural Engineering",
        "ranking": "#17 Global (QS 2026)",
        "description": "Structural mechanics, infrastructure systems, transportation engineering, and environmental fluid mechanics."
      },
      {
        "name": "Library & Information Management",
        "ranking": "#6 Global (QS 2026)",
        "description": "Information science, data management, digital preservation, human-computer interaction, and library technology."
      },
      {
        "name": "Engineering and Technology",
        "ranking": "#26 Global (QS 2026)",
        "description": "Semiconductors, computer architecture, robotics, signal processing, and power systems."
      ,
    "logoText": "UIU",
    "logoBg": "from-amber-700 to-orange-950",
    "degreesOffered": ["Undergraduate", "Graduate", "PhD"],
    "tags": ["United States", "Europe", "International", "Research"],
    "requiresSeparateApp": true}
    ],
    "allScholarshipsList": [,

      {
        "id": "uni-021-1",
        "title": "UIUC Provost Scholarship & Merit Awards",
        "amount": "Full Tuition Coverage (Renewable for 4 Years)",
        "coverage": "Full Tuition",
        "eligibility": "High-achieving incoming freshmen evaluated automatically during admission review.",
        "description": "Prestigious merit award providing full tuition coverage for four years of undergraduate study at UIUC.",
        "deadline": "Nov 1 (Early Action Priority)",
        "requiresSeparateApp": false
      ,
    "logoText": "UIU",
    "logoBg": "from-blue-700 to-indigo-950",
    "degreesOffered": ["Undergraduate", "Graduate", "PhD"]},

      {
        "id": "uni-021-2",
        "title": "Grainger Engineering Graduate Assistantships (RA / TA)",
        "amount": "100% Tuition Waiver + Fee Waivers + Living Stipend",
        "coverage": "Full Ride",
        "eligibility": "Admitted graduate and doctoral candidates appointed as Research or Teaching Assistants.",
        "description": "Provides 100% base tuition waiver, fee waivers, and monthly living stipends for engineering graduate scholars.",
        "deadline": "Dec 15 (Graduate Departmental Deadline)",
        "requiresSeparateApp": false
      }
    ],
    "degreesOffered": [
      "Undergraduate",
      "Graduate",
      "PhD"
    ],
    "tags": [
      "Grainger CS",
      "Data Science #21",
      "Civil Eng #18",
      "Info Sci #6",
      "TA/RA Tuition Waiver",
      "USA",
      "QS #74"
    ],
    "requiresSeparateApp": false,
    "logoText": "UIUC",
    "logoBg": "from-orange-900 to-blue-950"
  },

  {
    "id": "uni-022",
    "universityName": "University of California, San Diego",
    "location": "La Jolla, San Diego, California, United States",
    "country": "United States",
    "flag": "🇺🇸",
    "foundingYear": "1960",
    "scholarshipTitle": "UCSD Computer Science PhD 100% Guaranteed Full Package & GSR/TA Roles",
    "ranking": "#81 Global (QS 2027)",
    "qsSubjectRankings": "QS 2026: #=9 Biological Sciences, #10 Anatomy & Physiology, #14 Pharmacy & Pharmacology, #32 Electrical & Electronic Engineering, #33 Data Science & Artificial Intelligence",
    "coverage": "Partial Aid",
    "amountValue": "No Undergrad International Need Aid | 100% Guaranteed CS PhD Funding (Tuition + Fees + Stipend)",
    "tuitionFee": "$52,000+ / year (Non-Resident Tuition) | Total COA ~$76,000+",
    "tuitionAmountNumeric": 52000,
    "hasFullRide": false,
    "hasPartialAid": true,
    "hasFinancialAid": true,
    "financialAidType": "Partial Merit",
    "financialAidDetails": "UC San Diego explicitly does not offer federal, state, or institutional need-based aid to international undergraduate applicants (~$76k annual COA). However, doctoral students receive exceptional support: incoming Computer Science PhD students receive 100% guaranteed first-year full packages covering tuition, non-resident fees, health insurance, and monthly living stipends, with multi-year GSR/TA support.",
    "minGpa": "3.8+",
    "minSat": "Test-Free (UC Policy)",
    "satRequirementCategory": "Optional",
    "satPolicyDetails": "UC San Diego is completely Test-Free under UC policy. SAT and ACT scores are not considered for undergraduate admissions or scholarship decisions.",
    "minIelts": "7.0+",
    "ieltsCategory": "7.0",
    "toeflRequirement": "85+",
    "commonAppAccepted": false,
    "applicationPortalDetails": "UC Application System",
    "acceptanceRate": "24.7%",
    "deadline": "Nov 30 (UC Application Filing Period Nov 1-30)",
    "description": "Ranked #81 globally in QS 2027, UCSD in La Jolla, CA is a research titan in CS (#42), Engineering (#56), and Bioengineering. Undergrad international aid is self-funded; CS PhDs receive guaranteed full stipend + tuition funding.",
    "overviewLong": "The University of California, San Diego (UC San Diego / UCSD) is a top-tier public research university located in La Jolla, San Diego, California. Founded in 1960, UCSD is globally renowned for its high-impact research across computer science, bioengineering, electrical engineering, oceanography, medicine, biological sciences, and cognitive science.\n\nRanked #81 globally in the QS World University Rankings 2027, UCSD holds top subject rankings including #42 globally in Computer Science & Information Systems and #56 in Engineering & Technology in the 2026 QS tables. UCSD's Jacobs School of Engineering, Scripps Institution of Oceanography, and School of Biological Sciences drive major global breakthroughs in artificial intelligence, robotics, marine climate science, and neural engineering.\n\nFor undergraduate international students, UCSD explicitly does not provide federal, state, or institutional need-based financial aid. Non-resident international undergraduates must be fully self-funded. At the doctoral level, UCSD provides exceptionally strong funding: all incoming Computer Science PhD candidates receive guaranteed first-year full funding covering full tuition, non-resident supplemental tuition, mandatory fees, health insurance, and monthly living stipends, with multi-year Graduate Student Researcher (GSR) and Teaching Assistantship (TA) support in subsequent years.",
    "topProgramsList": [
      {
        "name": "Biological Sciences",
        "ranking": "#=9 Global (QS 2026)",
        "description": "An elite global powerhouse highly distinguished for deep research tracks in genetics, molecular pharmacology, cellular development, and bioinformatics infrastructure."
      },
      {
        "name": "Anatomy & Physiology",
        "ranking": "#10 Global (QS 2026)",
        "description": "A world-class instructional division integrating baseline human mechanics with structural anatomical clinical modeling programs."
      },
      {
        "name": "Pharmacy & Pharmacology",
        "ranking": "#14 Global (QS 2026)",
        "description": "Managed in tandem with the Skaggs School of Pharmacy, this program serves as an international anchor for therapeutics discovery and translational medicine breakthroughs."
      },
      {
        "name": "Electrical & Electronic Engineering",
        "ranking": "#32 Global (QS 2026)",
        "description": "A prominent technical division housed in the Jacobs School of Engineering, known for advanced semiconductor, circuit, and photonics breakthroughs."
      },
      {
        "name": "Data Science & Artificial Intelligence",
        "ranking": "#33 Global (QS 2026)",
        "description": "An emerging powerhouse track combining machine learning, automated data processing, and cross-sector computational analysis"
      ,
    "logoText": "UCSD",
    "logoBg": "from-rose-700 to-red-950",
    "degreesOffered": ["Undergraduate", "Graduate", "PhD"],
    "tags": ["United States", "Europe", "International", "Research"],
    "requiresSeparateApp": true}
    ],
    "allScholarshipsList": [,

      {
        "id": "uni-022-1",
        "title": "UCSD Computer Science PhD Guaranteed First-Year Package",
        "amount": "100% Full Tuition + Non-Resident Fees + Health Insurance + Monthly Stipend",
        "coverage": "Full Ride",
        "eligibility": "All admitted first-year Computer Science PhD candidates.",
        "description": "Guarantees 100% coverage of tuition, mandatory fees, non-resident supplemental tuition, health insurance, and monthly living stipends.",
        "deadline": "Dec 15 (CS PhD Application Deadline)",
        "requiresSeparateApp": false
      ,
    "logoText": "UCSD",
    "logoBg": "from-blue-700 to-indigo-950",
    "degreesOffered": ["Undergraduate", "Graduate", "PhD"]},

      {
        "id": "uni-022-2",
        "title": "UCSD Graduate Student Researcher (GSR) / TA Positions",
        "amount": "Full Fee Remission + Living Stipend",
        "coverage": "Full Ride",
        "eligibility": "Continuing PhD and graduate scholars appointed to departmental research or teaching roles.",
        "description": "Covers tuition, non-resident fees, and health insurance, alongside a competitive monthly research or teaching stipend.",
        "deadline": "Ongoing (Departmental Appointment)",
        "requiresSeparateApp": false
      }
    ],
    "degreesOffered": [
      "Undergraduate",
      "Graduate",
      "PhD"
    ],
    "tags": [
      "Jacobs Engineering",
      "CS #42 Global",
      "Scripps Oceanography",
      "No Undergrad Aid",
      "Guaranteed PhD Package",
      "USA",
      "QS #81"
    ],
    "requiresSeparateApp": false,
    "logoText": "UCSD",
    "logoBg": "from-blue-900 to-amber-900"
  },

  {
    "id": "uni-023",
    "universityName": "Pennsylvania State University",
    "location": "University Park, Pennsylvania, United States",
    "country": "United States",
    "flag": "🇺🇸",
    "foundingYear": "1855",
    "scholarshipTitle": "Penn State Mining & Materials Engineering Powerhouse & Tuition Assistance Grants",
    "ranking": "#92= Global (QS 2027)",
    "qsSubjectRankings": "QS 2026: #6 Mining & Mineral Eng, #20 Hospitality, #21 Petroleum Eng, #24 Materials Science, #29 Communication",
    "coverage": "Partial Aid",
    "amountValue": "SIGIA / PSTAG International Tuition Grants ($100–$2,000) | Departmental PhD Assistantships",
    "tuitionFee": "$41,790–$42,860 / year (Non-Resident Tuition) | Total COA ~$67,410–$71,636",
    "tuitionAmountNumeric": 42325,
    "hasFullRide": false,
    "hasPartialAid": true,
    "hasFinancialAid": true,
    "financialAidType": "Partial Merit",
    "financialAidDetails": "Out-of-state/non-resident tuition at University Park is ~$41,790–$42,860/year (Total COA ~$67,410–$71,636/year). International aid remains severely limited overall. Penn State offers emergency/tuition assistance grants like SIGIA and PSTAG ($100–$2,000 awards) for students facing financial hurdles, while graduate/PhD students access departmental assistantships (TA/RA), fellowships, and tuition waivers.",
    "minGpa": "3.7+",
    "minSat": "1300 - 1460 (Median SAT)",
    "satRequirementCategory": "1300",
    "satPolicyDetails": "Test-Optional policy for undergraduate admissions. Median enrolled SAT score range is 1300 to 1460.",
    "minIelts": "6.5+",
    "ieltsCategory": "6.5",
    "toeflRequirement": "80+",
    "commonAppAccepted": true,
    "applicationPortalDetails": "Common Application or MyPennState",
    "acceptanceRate": "55.0%",
    "deadline": "Nov 1 (Early Action) / Dec 1 (Priority Regular)",
    "description": "Ranked #92= globally in QS 2027, Penn State (University Park) is a world titan in Mining Eng (#6), Petroleum Eng (#21), Materials Science (#24), and Hospitality (#20). International aid is severely limited; emergency grants (SIGIA/PSTAG) and graduate assistantships available.",
    "overviewLong": "Pennsylvania State University (Penn State) is a preeminent public research university founded in 1855, with its flagship campus at University Park, Pennsylvania. Penn State operates a massive research enterprise and is widely celebrated for its world-leading programs in mineral & mining engineering, materials science, petroleum engineering, hospitality management, earth sciences, and engineering.\n\nRanked #92= globally in the QS World University Rankings 2027, Penn State holds extraordinary global subject rankings in the 2026 QS tables: #6 globally in Mineral & Mining Engineering, #20 in Hospitality & Leisure Management, #21 in Petroleum Engineering, #24 in Materials Science, #27 in Sports-related Subjects, #29 in Communication & Media, and #31 in Earth & Marine Sciences.\n\nFor international undergraduates, out-of-state/non-resident tuition at University Park ranges from $41,790 to $42,860/year, with a total estimated Cost of Attendance of $67,410 to $71,636 per year. Institutional need-based aid remains severely limited overall for international students. Penn State offers specific emergency/tuition assistance grants (such as the Special International Grant-in-Aid [SIGIA] and PSTAG, typically $100–$2,000) for eligible students facing financial hurdles, while graduate and doctoral scholars access departmental fellowships, Graduate Assistantships (TA/RA), and tuition waivers.",
    "topProgramsList": [
      {
        "name": "Mineral & Mining Engineering",
        "ranking": "#6 Global (QS 2026)",
        "description": "Mining technology, mineral processing, sustainable extraction, and geo-resource engineering."
      },
      {
        "name": "Hospitality & Leisure Management",
        "ranking": "#20 Global (QS 2026)",
        "description": "Hospitality management, real estate, service management, and tourism research."
      },
      {
        "name": "Petroleum Engineering",
        "ranking": "#21 Global (QS 2026)",
        "description": "Reservoir engineering, energy systems, drilling mechanics, and subsurface energy."
      },
      {
        "name": "Materials Science & Engineering",
        "ranking": "#24 Global (QS 2026)",
        "description": "Advanced materials, nanotechnology, biomaterials, polymers, and electronic materials."
      },
      {
        "name": "Communication & Media Studies",
        "ranking": "#29 Global (QS 2026)",
        "description": "Strategic communication, journalism, digital media, advertising, and telecommunications."
      ,
    "logoText": "PSU",
    "logoBg": "from-rose-700 to-red-950",
    "degreesOffered": ["Undergraduate", "Graduate", "PhD"],
    "tags": ["United States", "Europe", "International", "Research"],
    "requiresSeparateApp": true}
    ],
    "allScholarshipsList": [,

      {
        "id": "uni-023-1",
        "title": "Special International Grant-in-Aid (SIGIA) & PSTAG",
        "amount": "$100 - $2,000 Tuition Assistance Grant",
        "coverage": "Partial Aid",
        "eligibility": "Enrolled international undergraduate and graduate students at Penn State.",
        "description": "Tuition assistance grants awarded to international students facing financial hardship or demonstrated academic merit.",
        "deadline": "Oct 1 (Fall) / Mar 1 (Spring)",
        "requiresSeparateApp": true
      ,
    "logoText": "PSU",
    "logoBg": "from-blue-700 to-indigo-950",
    "degreesOffered": ["Undergraduate", "Graduate", "PhD"]},

      {
        "id": "uni-023-2",
        "title": "Penn State Departmental Graduate Assistantships (TA / RA)",
        "amount": "Tuition Waiver + Monthly Living Stipend",
        "coverage": "Full Ride",
        "eligibility": "Admitted graduate and doctoral candidates in engineering, materials, and science departments.",
        "description": "Provides tuition coverage and monthly stipends in exchange for research or instructional contributions.",
        "deadline": "Dec 15 (Graduate Departmental Deadline)",
        "requiresSeparateApp": false
      }
    ],
    "degreesOffered": [
      "Undergraduate",
      "Graduate",
      "PhD"
    ],
    "tags": [
      "Mining Eng #6",
      "Petroleum #21",
      "Materials #24",
      "Hospitality #20",
      "SIGIA Grant",
      "USA",
      "QS #92"
    ],
    "requiresSeparateApp": false,
    "logoText": "PSU",
    "logoBg": "from-blue-950 to-slate-900"
  },

  {
    "id": "uni-024",
    "universityName": "University of Washington",
    "location": "Seattle, Washington, United States",
    "country": "United States",
    "flag": "🇺🇸",
    "foundingYear": "1861",
    "scholarshipTitle": "UW Allen School CS (#=22 Global) & GSEE Doctoral Recruitment Fellowships",
    "ranking": "#92= Global (QS 2027)",
    "qsSubjectRankings": "QS 2026: #2 Library & Info Management, #=22 Computer Science & Info Systems, #=25 Medicine, #8 Geology, #9 Geophysics, #10 Earth & Marine Sciences",
    "coverage": "Full Ride",
    "amountValue": "No Undergrad Financial Aid | GSEE Doctoral Recruitment Fellowships ($24k Stipend + Tuition) & TA/RA Roles",
    "tuitionFee": "$44,460 / year (Non-Resident Tuition) | Total COA ~$67,800",
    "tuitionAmountNumeric": 44460,
    "hasFullRide": true,
    "hasPartialAid": true,
    "hasFinancialAid": true,
    "financialAidType": "Merit-Based",
    "financialAidDetails": "UW Seattle explicitly does not offer financial aid or university scholarships to international undergraduate students ($67,800 annual COA). However, graduate and doctoral scholars can receive robust GSEE Recruitment Fellowships ($24,000 stipend + full tuition/fees + GAIP health insurance) and Academic Student Employee positions (TA/RA/GSA).",
    "minGpa": "3.8+",
    "minSat": "1370 - 1500 (Median SAT)",
    "satRequirementCategory": "1300",
    "satPolicyDetails": "Test-Optional policy for undergraduate admissions. Median enrolled SAT score range is 1370 to 1500.",
    "minIelts": "7.0+",
    "ieltsCategory": "7.0",
    "toeflRequirement": "92+",
    "commonAppAccepted": true,
    "applicationPortalDetails": "Common Application",
    "acceptanceRate": "47.5%",
    "deadline": "Nov 15 (Autumn Quarter Undergraduate Deadline)",
    "description": "Ranked #92= globally in QS 2027, UW in Seattle, WA is world-famous for Allen School CS (#=22), Info Sci (#2), Geology (#8), and Medicine (#=25). Undergrad aid is self-funded; GSEE PhD fellowships offer $24k+ stipends + full tuition.",
    "overviewLong": "The University of Washington (UW / UW Seattle) is a leading public research university in Seattle, Washington, founded in 1861. Situated in the heart of a major global technology and biomedical ecosystem, UW is world-renowned for computer science, information management, medicine, public health, oceanography, and environmental sciences.\n\nRanked #92= globally in the QS World University Rankings 2027, UW holds elite global subject positions in the 2026 QS rankings: #2 globally in Library & Information Management, #8 in Geology, #9 in Geophysics, #10 in Earth & Marine Sciences, and #=22 globally in Computer Science & Information Systems. The Paul G. Allen School of Computer Science & Engineering is an internationally acclaimed center for artificial intelligence, machine learning, systems architecture, and computer vision.\n\nFor international undergraduate applicants, UW explicitly does not offer financial aid, university scholarships, or merit awards. Undergraduates must be fully prepared to cover the non-resident cost of attendance ($67,800/year). However, at the graduate and doctoral level, UW provides strong support through GSEE Fellowships, Academic Student Employee positions (TA/RA/GSA) with full tuition coverage and GAIP health insurance, and $24,000–$31,500 doctoral stipends.",
    "topProgramsList": [
      {
        "name": "Library & Information Management",
        "ranking": "#2 Global (QS 2026)",
        "description": "Information architecture, data management, human-centered design, cybersecurity, and digital archives."
      },
      {
        "name": "Computer Science & Info Systems",
        "ranking": "#=22 Global (QS 2026)",
        "description": "Housed in the prestigious Paul G. Allen School, this department stands as a major international pillar for cloud architecture computing, hardware engineering systems, and automated machine learning logic."
      },
      {
        "name": "Medicine",
        "ranking": "#=25 Global (QS 2026)",
        "description": "Anchored by UW Medicine, which serves as the primary clinical engine for the Pacific Northwest, driving breakthroughs in global clinical trials and primary patient care frameworks"
      },
      {
        "name": "Geology & Geophysics",
        "ranking": "#8 & #9 Global (QS 2026)",
        "description": "Seismology, volcanology, planetary science, Earth systems, and geophysics."
      },
      {
        "name": "Earth & Marine Sciences",
        "ranking": "#10 Global (QS 2026)",
        "description": "Oceanography, climate dynamics, marine biology, and environmental science."
      ,
    "logoText": "UW",
    "logoBg": "from-cyan-700 to-blue-950",
    "degreesOffered": ["Undergraduate", "Graduate", "PhD"],
    "tags": ["United States", "Europe", "International", "Research"],
    "requiresSeparateApp": true}
    ],
    "allScholarshipsList": [,

      {
        "id": "uni-024-1",
        "title": "UW GSEE Doctoral Recruitment Fellowship",
        "amount": "Full Tuition + Mandatory Fees + GAIP Benefits + $24,000 Stipend",
        "coverage": "Full Ride",
        "eligibility": "Outstanding incoming doctoral candidates nominated by graduate departments.",
        "description": "Provides a $24,000 stipend for three quarters plus full tuition, mandatory fees, and GAIP health coverage, matched by 3+ years of departmental support.",
        "deadline": "Jan 15 (Departmental Nomination)",
        "requiresSeparateApp": false
      ,
    "logoText": "UW",
    "logoBg": "from-blue-700 to-indigo-950",
    "degreesOffered": ["Undergraduate", "Graduate", "PhD"]},

      {
        "id": "uni-024-2",
        "title": "UW Academic Student Employee Positions (TA / RA / GSA)",
        "amount": "Full Tuition Waiver + GAIP Health Coverage + Monthly Stipend",
        "coverage": "Full Ride",
        "eligibility": "Admitted graduate and PhD students appointed as Teaching, Research, or Staff Assistants.",
        "description": "Qualifying TA/RA appointments provide full tuition waivers, GAIP health insurance, and monthly living stipends.",
        "deadline": "Dec 15 (Program Dependent)",
        "requiresSeparateApp": false
      }
    ],
    "degreesOffered": [
      "Undergraduate",
      "Graduate",
      "PhD"
    ],
    "tags": [
      "Allen School CS #14",
      "Info Sci #2",
      "Geology #8",
      "Seattle Tech Ecosystem",
      "GSEE PhD Fellowship",
      "USA",
      "QS #92"
    ],
    "requiresSeparateApp": false,
    "logoText": "UWS",
    "logoBg": "from-purple-950 to-amber-900"
  },

  {
    "id": "uni-025",
    "universityName": "Boston University",
    "location": "Boston, Massachusetts, United States",
    "country": "United States",
    "flag": "🇺🇸",
    "foundingYear": "1839",
    "scholarshipTitle": "BU Trustee Full-Tuition Merit Scholarship & 5-Year Guaranteed PhD Funding",
    "ranking": "#94 Global (QS 2027)",
    "qsSubjectRankings": "QS 2026: #=26 Economics & Econometrics, #51-100 Communication & Media Studies, #77 Education & Training, #=79 Business & Management Studies, #=95 Computer Science & Info Systems",
    "coverage": "Full Ride",
    "amountValue": "No Undergrad Need Aid | Full Tuition Merit (Trustee) & Guaranteed 5-Year PhD Full Package",
    "tuitionFee": "$73,024 / year (Tuition) | Total Billed COA ~$95,334 ($98,419 total / $105,666 I-20 estimate)",
    "tuitionAmountNumeric": 73024,
    "hasFullRide": true,
    "hasPartialAid": true,
    "hasFinancialAid": true,
    "financialAidType": "Merit-Based",
    "financialAidDetails": "BU explicitly does not offer need-based financial aid to international undergraduate applicants. However, international students are fully eligible for prestigious first-year merit awards like the Trustee Scholarship (full tuition & fees) and Presidential Scholarship ($25,000/year) if applying by Dec 1. Doctoral students on the Charles River Campus receive a guaranteed 5-year full funding model covering 100% tuition, fees, health insurance credits, and living stipends.",
    "minGpa": "3.8+",
    "minSat": "1440 - 1540 (Median SAT)",
    "satRequirementCategory": "1400",
    "satPolicyDetails": "Test-Optional policy for undergraduate admissions. Median enrolled SAT score range is 1440 to 1540.",
    "minIelts": "7.0+",
    "ieltsCategory": "7.0",
    "toeflRequirement": "90+",
    "commonAppAccepted": true,
    "applicationPortalDetails": "Common Application or Coalition Application",
    "acceptanceRate": "11.0%",
    "deadline": "Nov 1 (ED I) / Dec 1 (Merit Scholarship Deadline) / Jan 4 (ED II / RD)",
    "description": "Ranked #94 globally in QS 2027, BU in Boston, MA excels in Economics (#=26), Communications (#51-100), Education (#77), Business (#=79), and CS (#=95). Undergrad international aid is merit-only (Trustee Full Tuition); PhDs receive 5-year guaranteed stipend + full tuition packages.",
    "overviewLong": "Boston University (BU) is a premier private research university located in Boston, Massachusetts, founded in 1839. BU integrates a high-density urban innovation ecosystem with expansive research enterprise across computer science, computing & data sciences, business, medicine, communications, public health, law, and engineering.\n\nRanked #94 globally in the QS World University Rankings 2027, BU's Faculty of Computing & Data Sciences and Questrom School of Business lead cutting-edge research in artificial intelligence, machine learning, systems architecture, financial technology, and health informatics.\n\nFor international undergraduate applicants, BU explicitly does not provide need-based financial aid. However, BU offers highly competitive merit scholarships, including the Trustee Scholarship (full tuition & fees) and Presidential Scholarship ($25,000/year). At the doctoral level, BU operates a guaranteed 5-year full-funding model for all Charles River Campus PhD students in good standing, providing a 100% tuition scholarship, mandatory fee coverage, health insurance credits, and competitive living stipends.",
    "topProgramsList": [
      {
        "name": "Economics & Econometrics",
        "ranking": "#=26 Global (QS 2026)",
        "description": "A global flagship department recognized for pioneering research in empirical economics, dynamic health policies, and international finance frameworks"
      },
      {
        "name": "Communication & Media Studies",
        "ranking": "#51-100 Global (QS 2026)",
        "description": "Housed in the acclaimed College of Communication (COM), this track serves as an elite international anchor for digital storytelling, media sociology, and global political communication platforms."
      },
      {
        "name": "Education & Training",
        "ranking": "#77 Global (QS 2026)",
        "description": "Managed through the Wheelock College of Education & Human Development, leading critical research in early childhood development, systemic policy reforms, and community literacy modules."
      },
      {
        "name": "Business & Management Studies",
        "ranking": "#=79 Global (QS 2026)",
        "description": "Cultivated via the Questrom School of Business, this program feeds elite corporate recruitment networks with specializations in global market strategies and operational management."
      },
      {
        "name": "Computer Science & Info Systems",
        "ranking": "#=95 Global (QS 2026)",
        "description": "Headquartered in the architecturally iconic Faculty of Computing & Data Sciences (CDS), specializing in large-scale cloud architectures, cybersecurity protocols, and automated algorithms"
      ,
    "logoText": "BU",
    "logoBg": "from-red-700 to-rose-950",
    "degreesOffered": ["Undergraduate", "Graduate", "PhD"],
    "tags": ["United States", "Europe", "International", "Research"],
    "requiresSeparateApp": true}
    ],
    "allScholarshipsList": [,

      {
        "id": "uni-025-1",
        "title": "BU Trustee Scholarship (Full Tuition & Fees)",
        "amount": "Full Tuition + Mandatory Student Fees (4-Year Renewable)",
        "coverage": "Full Tuition",
        "eligibility": "High-achieving incoming first-year undergraduate applicants (including international students).",
        "description": "BU's most prestigious undergraduate merit award, covering 100% of tuition and mandatory fees for four years.",
        "deadline": "Dec 1 (Merit Scholarship Deadline)",
        "requiresSeparateApp": true
      ,
    "logoText": "BU",
    "logoBg": "from-blue-700 to-indigo-950",
    "degreesOffered": ["Undergraduate", "Graduate", "PhD"]},

      {
        "id": "uni-025-2",
        "title": "BU Charles River Campus 5-Year Guaranteed PhD Package",
        "amount": "100% Tuition Scholarship + Mandatory Fees + Health Insurance + Living Stipend",
        "coverage": "Full Ride",
        "eligibility": "All admitted full-time doctoral candidates in good academic standing.",
        "description": "Guarantees 5 years of 100% tuition coverage, mandatory fee waivers, health insurance credits, and living stipends.",
        "deadline": "Dec 15 - Jan 5 (Program Dependent)",
        "requiresSeparateApp": false
      }
    ],
    "degreesOffered": [
      "Undergraduate",
      "Graduate",
      "PhD"
    ],
    "tags": [
      "Boston Tech Hub",
      "Trustee Scholarship",
      "Full Tuition Merit",
      "5-Year PhD Guarantee",
      "Data Sciences",
      "USA",
      "QS #94"
    ],
    "requiresSeparateApp": false,
    "logoText": "BU",
    "logoBg": "from-red-950 to-neutral-900"
  },

  {
    "id": "uni-026",
    "universityName": "Purdue University",
    "location": "West Lafayette, Indiana, United States",
    "country": "United States",
    "flag": "🇺🇸",
    "foundingYear": "1869",
    "scholarshipTitle": "Purdue Engineering (#37 Global) & Guaranteed 5-Year PhD Packages",
    "ranking": "#100= Global (QS 2027)",
    "qsSubjectRankings": "QS 2026: #6 Agriculture & Forestry, #=21 Mechanical, Aeronautical & Manufacturing Engineering, #37 Engineering & Technology, #66 Computer Science & Info Systems, #51-100 Communication & Media Studies",
    "coverage": "Partial Aid",
    "amountValue": "No Undergrad Need Aid | Departmental Awards & Guaranteed 5-Year STEM PhD Packages",
    "tuitionFee": "$31,104–$45,000+ / year (International Tuition) | Total COA ~$50,000–$60,000+",
    "tuitionAmountNumeric": 31104,
    "hasFullRide": false,
    "hasPartialAid": true,
    "hasFinancialAid": true,
    "financialAidType": "Partial Merit",
    "financialAidDetails": "Purdue international undergraduate applicants are generally ineligible for university-wide need-based financial aid or standard merit scholarships, though specific departmental awards exist. Graduate and doctoral students access strong funding: many PhD departments (such as Biological Sciences and History) explicitly guarantee 5 years of full support covering tuition remission, health insurance, and monthly living stipends.",
    "minGpa": "3.7+",
    "minSat": "1350 - 1490 (Median SAT)",
    "satRequirementCategory": "1300",
    "satPolicyDetails": "Standardized testing (SAT or ACT) required for undergraduate admissions. Median enrolled SAT score range is 1350 to 1490.",
    "minIelts": "6.5+",
    "ieltsCategory": "6.5",
    "toeflRequirement": "88+",
    "commonAppAccepted": true,
    "applicationPortalDetails": "Common Application",
    "acceptanceRate": "52.7%",
    "deadline": "Nov 1 (Early Action Priority) / Jan 15 (Regular Decision)",
    "description": "Ranked #100= globally in QS 2027, Purdue in West Lafayette, IN is a global engineering powerhouse (#37), Agriculture (#6), Mechanical/Aero (#=21), and CS (#66). Undergrad international aid is self-funded/departmental; PhDs receive guaranteed 5-year packages.",
    "overviewLong": "Purdue University is a world-renowned public research university in West Lafayette, Indiana, founded in 1869. Purdue is globally celebrated as a giant in engineering, computer science, aerospace, mechanical engineering, agriculture, and STEM technology research.\n\nRanked #100= globally in the QS World University Rankings 2027, Purdue's College of Engineering and Department of Computer Science hold outstanding subject rankings in the 2026 QS tables: #6 globally in Agriculture & Forestry, #=21 globally in Mechanical, Aeronautical & Manufacturing Engineering, #37 in Engineering & Technology, and #66 globally in Computer Science & Info Systems.\n\nFor international undergraduate applicants, need-based financial aid is not offered, and general university merit scholarships are very limited (though departmental awards exist). At the graduate and doctoral levels, Purdue offers strong departmental support: many doctoral programs (including Biological Sciences and History) explicitly guarantee 5 years of full funding covering tuition remission, monthly stipends, and health insurance.",
    "topProgramsList": [
      {
        "name": "Agriculture & Forestry",
        "ranking": "#6 Global (QS 2026)",
        "description": "Purdue's highest standalone subject tier globally, leading international frameworks for agrarian development, plant genetics, and crop ecosystem management."
      },
      {
        "name": "Mechanical, Aeronautical & Manufacturing Engineering",
        "ranking": "#=21 Global (QS 2026)",
        "description": "Heavily celebrated for its massive aerospace contributions, rocket propulsion laboratories, and deep global corporate pipelines."
      },
      {
        "name": "Engineering & Technology",
        "ranking": "#37 Global (QS 2026)",
        "description": "The master quantitative category aggregating Purdue’s technical divisions, proving its status as a massive tier-one engineering anchor."
      },
      {
        "name": "Computer Science & Info Systems",
        "ranking": "#66 Global (QS 2026)",
        "description": "A flagship hub for digital software architectures, big data systems, and global cybersecurity networks."
      },
      {
        "name": "Communication & Media Studies",
        "ranking": "#51-100 Global (QS 2026)",
        "description": "Cultivated through the Brian Lamb School of Communication, providing international leadership in public relations strategies and mass media structures."
      ,
    "logoText": "PU",
    "logoBg": "from-red-700 to-rose-950",
    "degreesOffered": ["Undergraduate", "Graduate", "PhD"],
    "tags": ["United States", "Europe", "International", "Research"],
    "requiresSeparateApp": true}
    ],
    "allScholarshipsList": [,

      {
        "id": "uni-026-1",
        "title": "Purdue Departmental Undergraduate Scholarships",
        "amount": "Variable Partial Tuition Awards",
        "coverage": "Partial Aid",
        "eligibility": "Enrolled or admitted international undergraduate students in specific academic colleges.",
        "description": "College-specific departmental awards available to international students in engineering and science.",
        "deadline": "Nov 1 (Early Action Deadline)",
        "requiresSeparateApp": false
      ,
    "logoText": "PU",
    "logoBg": "from-blue-700 to-indigo-950",
    "degreesOffered": ["Undergraduate", "Graduate", "PhD"]},

      {
        "id": "uni-026-2",
        "title": "Purdue Doctoral (PhD) 5-Year Guaranteed Funding Package",
        "amount": "100% Tuition Remission + Paid Health Insurance + Monthly Living Stipend",
        "coverage": "Full Ride",
        "eligibility": "Admitted PhD candidates in qualifying STEM, humanities, and science departments.",
        "description": "Guarantees 5 years of full tuition remission, medical health insurance coverage, and monthly research/teaching stipends.",
        "deadline": "Dec 15 (Departmental Graduate Deadline)",
        "requiresSeparateApp": false
      }
    ],
    "degreesOffered": [
      "Undergraduate",
      "Graduate",
      "PhD"
    ],
    "tags": [
      "Purdue Engineering",
      "Aerospace #5",
      "Ag Engineering #1",
      "Mech Eng #8",
      "Guaranteed PhD Funding",
      "USA",
      "QS #100"
    ],
    "requiresSeparateApp": false,
    "logoText": "PUR",
    "logoBg": "from-amber-950 to-stone-900"
  },

  {
    "id": "uni-027",
    "universityName": "Rice University",
    "location": "Houston, Texas, United States",
    "country": "United States",
    "flag": "🇺🇸",
    "foundingYear": "1912",
    "scholarshipTitle": "Rice 100% Demonstrated Need Met (Loan-Free Aid) & 90%+ Graduate Fellowships",
    "ranking": "#122 Global (QS 2027)",
    "qsSubjectRankings": "QS 2026: #82 Chemical Engineering, #101-150 Architecture & Built Environment, #101-200 Data Science & Artificial Intelligence, #201-250 Business & Management Studies, #251-300 Computer Science & Info Systems",
    "coverage": "Full Ride",
    "amountValue": "100% Demonstrated Need Met (Loan-Free) | 90%+ Graduate Fellowships & Full Tuition Waivers",
    "tuitionFee": "$71,140 / year (Tuition) | Total COA ~$91,670+ (Room & Board $20,530)",
    "tuitionAmountNumeric": 71140,
    "hasFullRide": true,
    "hasPartialAid": false,
    "hasFinancialAid": true,
    "financialAidType": "Need-Based",
    "financialAidDetails": "Rice explicitly meets 100% of demonstrated financial need for all admitted international undergraduate students through institutional scholarship grant aid requiring ZERO student loans. Rice also offers merit-based scholarships. At the graduate level, over 90% of newly enrolled graduate students receive a financial incentive package including a Graduate Fellowship, full tuition waiver, and living stipend.",
    "minGpa": "3.9+",
    "minSat": "1500 - 1560 (Median SAT)",
    "satRequirementCategory": "1500",
    "satPolicyDetails": "Standardized testing (SAT or ACT) required for undergraduate admissions. Median enrolled SAT score range is 1500 to 1560.",
    "minIelts": "7.0+",
    "ieltsCategory": "7.0",
    "toeflRequirement": "100+",
    "commonAppAccepted": true,
    "applicationPortalDetails": "Common Application or Coalition Application",
    "acceptanceRate": "7.7%",
    "deadline": "Nov 1 (Early Decision) / Jan 4 (Regular Decision)",
    "description": "Ranked #122 globally in QS 2027, Rice in Houston, TX excels in Chemical Engineering (#82), Architecture (#101-150), and Data Science (#101-200). Meets 100% of demonstrated need for international undergrads with loan-free grants; 90%+ grads receive full fellowships.",
    "overviewLong": "Rice University is an elite private research university in Houston, Texas, founded in 1912. Rice combines a close-knit undergraduate community with world-class research infrastructure across computer science, engineering, architecture, biosciences, economics, and business.\n\nRanked #122 globally in the QS World University Rankings 2027, Rice is one of the most financially generous private universities in the United States for international undergraduate applicants: Rice explicitly meets 100% of demonstrated financial need for all admitted international undergraduates using loan-free institutional scholarship grants.\n\nAt the graduate level, over 90% of newly enrolled graduate students receive a comprehensive financial incentive package including a Graduate Fellowship, full tuition waiver, and living stipend support across its research departments.",
    "topProgramsList": [
      {
        "name": "Chemical Engineering",
        "ranking": "#82 Global (QS 2026)",
        "description": "Anchored within the George R. Brown School, this department is globally recognized for highly cross-disciplinary research spanning biomolecular systems, nanotechnology, and advanced polymer scaling."
      },
      {
        "name": "Architecture & Built Environment",
        "ranking": "#101-150 Global (QS 2026)",
        "description": "Housed in the iconic School of Architecture, this program is highly competitive globally, training students through ultra-focused professional studio pathways and unique corporate practicum rotations."
      },
      {
        "name": "Data Science & Artificial Intelligence",
        "ranking": "#101-200 Global (QS 2026)",
        "description": "An emerging flagship computational program that tightly couples classical data architecture engineering with automated intelligence frameworks and statistical modeling logic."
      },
      {
        "name": "Business & Management Studies",
        "ranking": "#201-250 Global (QS 2026)",
        "description": "Cultivated via the Jesse H. Jones Graduate School of Business, notable for its strategic corporate asset management tracks and executive pipelines."
      },
      {
        "name": "Computer Science & Info Systems",
        "ranking": "#251-300 Global (QS 2026)",
        "description": "Emphasizes foundational computing logic, software systems engineering, programming language frameworks, and highly advanced cyber networks."
      ,
    "logoText": "RU",
    "logoBg": "from-rose-700 to-red-950",
    "degreesOffered": ["Undergraduate", "Graduate", "PhD"],
    "tags": ["United States", "Europe", "International", "Research"],
    "requiresSeparateApp": true}
    ],
    "allScholarshipsList": [,

      {
        "id": "uni-027-1",
        "title": "Rice International Need-Based Financial Aid Package (Loan-Free)",
        "amount": "100% Demonstrated Need Met (Loan-Free)",
        "coverage": "Full Ride",
        "eligibility": "All admitted international undergraduate applicants demonstrating financial need.",
        "description": "Covers 100% of demonstrated financial need through institutional grant aid requiring zero student loans.",
        "deadline": "Nov 1 (ED) / Jan 4 (RD)",
        "requiresSeparateApp": false
      ,
    "logoText": "RU",
    "logoBg": "from-blue-700 to-indigo-950",
    "degreesOffered": ["Undergraduate", "Graduate", "PhD"]},

      {
        "id": "uni-027-2",
        "title": "Rice Graduate Fellowship & Full Tuition Waiver Package",
        "amount": "100% Full Tuition Waiver + Living Fellowship Stipend",
        "coverage": "Full Ride",
        "eligibility": "Over 90% of newly enrolled graduate/PhD candidates in natural sciences, engineering, and humanities.",
        "description": "Provides a full tuition waiver ($66,784 annual value) and competitive living fellowship stipend.",
        "deadline": "Dec 15 - Jan 5 (Departmental Deadline)",
        "requiresSeparateApp": false
      }
    ],
    "degreesOffered": [
      "Undergraduate",
      "Graduate",
      "PhD"
    ],
    "tags": [
      "100% Need Met",
      "Loan-Free Aid",
      "Houston Energy/Medical Hub",
      "90%+ PhD Fellowships",
      "USA",
      "QS #122"
    ],
    "requiresSeparateApp": false,
    "logoText": "RICE",
    "logoBg": "from-blue-950 to-slate-900"
  },

  {
    "id": "uni-028",
    "universityName": "University of Wisconsin-Madison",
    "location": "Madison, Wisconsin, United States",
    "country": "United States",
    "flag": "🇺🇸",
    "foundingYear": "1848",
    "scholarshipTitle": "UW–Madison King-Morgridge Full International Scholarship & 88% PhD Full Funding Rate",
    "ranking": "#131= Global (QS 2027)",
    "qsSubjectRankings": "QS 2026: #15 Communication & Media Studies, #20 Education & Training, #=22 Agriculture & Forestry, #=113 Mechanical, Aeronautical & Manufacturing Engineering, #141 Computer Science & Info Systems",
    "coverage": "Full Ride",
    "amountValue": "King-Morgridge Full Scholarship (Tuition + Room/Board + Airfare + Stipend) | 88% PhD Full Funding Rate",
    "tuitionFee": "~$46,000 / year (International Tuition) | Total COA ~$75,960",
    "tuitionAmountNumeric": 46000,
    "hasFullRide": true,
    "hasPartialAid": true,
    "hasFinancialAid": true,
    "financialAidType": "Merit-Based",
    "financialAidDetails": "UW-Madison offers the prestigious King-Morgridge Scholars Program—a full 4-year scholarship covering 100% of tuition, mandatory fees, room & board, health insurance, international airfare, and a living stipend for incoming international undergraduates (including Pakistan) dedicated to poverty alleviation. At the graduate level, 28% of Master's and 88% of doctoral students receive full funding ($2,889/mo stipend + tuition remission).",
    "minGpa": "3.8+",
    "minSat": "1370 - 1500 (Median SAT)",
    "satRequirementCategory": "1300",
    "satPolicyDetails": "UW–Madison operates under a test-optional policy for undergraduate admissions, though submitting a competitive score within the 1370–1500 median range strengthens an international application.",
    "minIelts": "6.5+",
    "ieltsCategory": "6.5",
    "toeflRequirement": "80+",
    "commonAppAccepted": true,
    "applicationPortalDetails": "Common Application",
    "acceptanceRate": "49.1%",
    "deadline": "Nov 1 (Early Action Priority) / Jan 15 (Regular Decision)",
    "description": "Ranked #131= globally in QS 2027, UW-Madison in Madison, WI is a world research titan in Communication (#15), Education (#20), and Agriculture (#=22). Offers King-Morgridge Full International Scholarships and an 88% PhD full funding rate.",
    "overviewLong": "The University of Wisconsin–Madison (UW–Madison) is a flagship public research university in Madison, Wisconsin, founded in 1848. UW–Madison is a global research powerhouse with acclaimed programs in computer science, engineering, biological sciences, agriculture, chemistry, geography, and economics.\n\nRanked #131= globally in the QS World University Rankings 2027, UW–Madison is home to extraordinary international scholarship opportunities, most notably the prestigious King-Morgridge Scholars Program—a full 4-year scholarship covering 100% of tuition, mandatory fees, room & board, health insurance, international airfare, and a living stipend for incoming international students (including applicants from Pakistan) dedicated to poverty alleviation.\n\nAt the graduate level, 28% of Master's students and 88% of doctoral students receive full funding, with average TA/RA/PA monthly stipends of $2,889 plus tuition remission and health benefits.",
    "topProgramsList": [
      {
        "name": "Education & Training",
        "ranking": "#20 Global (QS 2026)",
        "description": "Managed through the elite School of Education, this program serves as an international powerhouse for pedagogical development, instructional methodologies, and curriculum policy analysis."
      },
      {
        "name": "Agriculture & Forestry",
        "ranking": "#=22 Global (QS 2026)",
        "description": "Cultivated via the historic College of Agricultural and Life Sciences (CALS), leading global frameworks in plant genetics, agricultural biology, and dairy science ecosystem management."
      },
      {
        "name": "Communication & Media Studies",
        "ranking": "#15 Global (QS 2026)",
        "description": "Highly distinguished for deep social research tracks in mass communication theory, public digital dialogue architectures, and political media ecology."
      },
      {
        "name": "Mechanical, Aeronautical & Manufacturing Engineering",
        "ranking": "#=113 Global (QS 2026)",
        "description": "Housed inside the highly competitive College of Engineering, focusing extensively on specialized internal combustion physics, dynamic robotics, and computational advanced materials."
      },
      {
        "name": "Computer Science & Info Systems",
        "ranking": "#141 Global (QS 2026)",
        "description": "A prominent public computing department noted for its research footprint in software optimization networks, computer systems hardware architectures, and data security tracks"
      ,
    "logoText": "UW",
    "logoBg": "from-amber-700 to-orange-950",
    "degreesOffered": ["Undergraduate", "Graduate", "PhD"],
    "tags": ["United States", "Europe", "International", "Research"],
    "requiresSeparateApp": true}
    ],
    "allScholarshipsList": [,

      {
        "id": "uni-028-1",
        "title": "King-Morgridge Scholars Program (Full International Ride)",
        "amount": "Full Tuition + Fees + Room & Board + Health Insurance + Airfare + Living Stipend",
        "coverage": "Full Ride",
        "eligibility": "Incoming first-year international students (including Pakistan) with financial need and commitment to poverty alleviation.",
        "description": "Covers 100% of tuition, mandatory fees, housing, meal plans, health insurance, annual international airfare, and a living stipend for 4 years.",
        "deadline": "Nov 1 / Dec 1 (King-Morgridge Application)",
        "requiresSeparateApp": true
      ,
    "logoText": "UW",
    "logoBg": "from-blue-700 to-indigo-950",
    "degreesOffered": ["Undergraduate", "Graduate", "PhD"]},

      {
        "id": "uni-028-2",
        "title": "UW-Madison Graduate/PhD Assistantships (TA / RA / PA)",
        "amount": "Full Tuition Remission + Health Benefits + $2,889/month Stipend",
        "coverage": "Full Ride",
        "eligibility": "88% of doctoral students and 28% of Master's students appointed to research/teaching roles.",
        "description": "Provides full tuition remission, comprehensive health benefits, and an average monthly living stipend of $2,889.",
        "deadline": "Dec 15 (Departmental Graduate Deadline)",
        "requiresSeparateApp": false
      }
    ],
    "degreesOffered": [
      "Undergraduate",
      "Graduate",
      "PhD"
    ],
    "tags": [
      "King-Morgridge Full Ride",
      "Pakistan Eligible",
      "88% PhD Funding Rate",
      "Agriculture Leader",
      "CS & Eng",
      "USA",
      "QS #131"
    ],
    "requiresSeparateApp": false,
    "logoText": "UWM",
    "logoBg": "from-red-900 to-rose-950"
  },

  {
    "id": "uni-029",
    "universityName": "University of California, Davis",
    "location": "Davis, California, United States",
    "country": "United States",
    "flag": "🇺🇸",
    "foundingYear": "1905",
    "scholarshipTitle": "UC Davis #2 Global Veterinary/Ag Science & Provost ($13,250/yr) & Regents Merit Awards",
    "ranking": "#137 Global (QS 2027)",
    "qsSubjectRankings": "QS 2026: #2 Veterinary Science, #2 Agriculture & Forestry, #=18 Environmental Sciences, #=43 Biological Sciences, #51-100 English Language & Literature",
    "coverage": "Partial Aid",
    "amountValue": "No Undergrad Need Aid | Provost Award ($13,250/yr) & Regents ($7,500/yr) + Graduate TA/RA Remission",
    "tuitionFee": "$15,588 Base + $39,270 Nonresident Tuition | Total On-Campus COA ~$88,279",
    "tuitionAmountNumeric": 54858,
    "hasFullRide": false,
    "hasPartialAid": true,
    "hasFinancialAid": true,
    "financialAidType": "Partial Merit",
    "financialAidDetails": "UC Davis does not offer general need-based financial aid to international undergraduates ($88,279 annual COA). However, international students are eligible for campus merit scholarships, including the Provost Award ($13,250/year for four years) and Regents Scholarship ($7,500/year). Graduate TA/RA positions cover full tuition, campus fees, health insurance, and monthly stipends.",
    "minGpa": "3.8+",
    "minSat": "Test-Free (UC Policy)",
    "satRequirementCategory": "Optional",
    "satPolicyDetails": "UC Davis is completely Test-Free under University of California policy. Standardized test scores (SAT/ACT) are not considered for undergraduate admission or scholarship selection.",
    "minIelts": "7.0+",
    "ieltsCategory": "7.0",
    "toeflRequirement": "80+",
    "commonAppAccepted": false,
    "applicationPortalDetails": "UC Application System",
    "acceptanceRate": "41.8%",
    "deadline": "Nov 30 (UC Application Filing Period Nov 1-30)",
    "description": "Ranked #137 globally in QS 2027, UC Davis excels in Veterinary Science (#2), Agriculture (#2), Environmental Sciences (#=18), Biological Sciences (#=43), and English (#51-100). Undergrad international aid includes Provost ($13,250/yr) & Regents ($7,500/yr) awards; graduate TA/RA roles remit tuition.",
    "overviewLong": "The University of California, Davis (UC Davis) is a major public research university located in Davis, California, founded in 1905. UC Davis is world-renowned as a premier global leader in veterinary science, agriculture & forestry, biological sciences, environmental sciences, food science, and engineering.\n\nRanked #137 globally in the QS World University Rankings 2027, UC Davis holds extraordinary subject rankings in the 2026 QS tables: #2 globally in Veterinary Science, #2 in Agriculture & Forestry, #=18 in Environmental Sciences, #=43 in Biological Sciences, and #51-100 in English Language & Literature.\n\nFor international undergraduate applicants, general institutional need-based aid is not available ($88,279 annual cost of attendance). However, international undergraduates are eligible for competitive merit scholarships, including the Regents Scholarship ($7,500/year) and the Provost Award ($13,250/year for non-California freshmen). At the graduate and doctoral levels, UC Davis offers Academic Student Employee appointments (TA/RA) that provide full tuition and fee remission, health insurance coverage, and competitive monthly stipends.",
    "topProgramsList": [
      {
        "name": "Veterinary Science",
        "ranking": "#2 Global (QS 2026)",
        "description": "Standing as the absolute highest-ranking program domestically and a perennial powerhouse worldwide, this division sets global benchmarks for advanced clinical veterinary practices and animal health dynamics."
      },
      {
        "name": "Agriculture & Forestry",
        "ranking": "#2 Global (QS 2026)",
        "description": "An elite international flagship program pioneering sustainability frameworks, agronomic crop engineering, and food security sciences."
      },
      {
        "name": "Environmental Sciences",
        "ranking": "#=18 Global (QS 2026)",
        "description": "Highly acclaimed for its interdisciplinary research pipelines focusing on climate ecology mitigation, evolutionary biology, and natural resources tracking."
      },
      {
        "name": "Biological Sciences",
        "ranking": "#=43 Global (QS 2026)",
        "description": "A premier public biological division driving fundamental discoveries across molecular mechanics, cellular genetics, and ecosystem dynamics."
      },
      {
        "name": "English Language & Literature",
        "ranking": "#51-100 Global (QS 2026)",
        "description": "Highly distinguished within the humanities framework, emphasizing critical literary theory analysis, historical prose, and diverse cultural narratives"
      ,
    "logoText": "UCD",
    "logoBg": "from-emerald-700 to-teal-950",
    "degreesOffered": ["Undergraduate", "Graduate", "PhD"],
    "tags": ["United States", "Europe", "International", "Research"],
    "requiresSeparateApp": true}
    ],
    "allScholarshipsList": [,

      {
        "id": "uni-029-1",
        "title": "UC Davis Provost Award & Regents Scholarship",
        "amount": "$13,250/year (Provost) or $7,500/year (Regents) for 4 Years",
        "coverage": "Partial Aid",
        "eligibility": "High-achieving incoming non-California freshman applicants (including international students).",
        "description": "Prestigious merit-based awards providing up to $13,250 per year toward tuition for four years of undergraduate study.",
        "deadline": "Nov 30 (UC Application)",
        "requiresSeparateApp": false
      ,
    "logoText": "UCD",
    "logoBg": "from-blue-700 to-indigo-950",
    "degreesOffered": ["Undergraduate", "Graduate", "PhD"]},

      {
        "id": "uni-029-2",
        "title": "UC Davis Graduate Assistantships (TA / GSR)",
        "amount": "Full Tuition & Fee Remission + Health Insurance + Monthly Salary",
        "coverage": "Full Ride",
        "eligibility": "Admitted graduate and doctoral candidates appointed as Teaching or Research Assistants.",
        "description": "Covers 100% of tuition, campus fees, and medical health insurance alongside a competitive monthly appointment salary.",
        "deadline": "Dec 15 (Graduate Departmental Deadline)",
        "requiresSeparateApp": false
      }
    ],
    "degreesOffered": [
      "Undergraduate",
      "Graduate",
      "PhD"
    ],
    "tags": [
      "Veterinary #2",
      "Agriculture #2",
      "Provost Award $13.2k",
      "Regents Scholar",
      "UC System",
      "USA",
      "QS #137"
    ],
    "requiresSeparateApp": false,
    "logoText": "UCD",
    "logoBg": "from-blue-900 to-amber-800"
  },

  {
    "id": "uni-030",
    "universityName": "Georgia Institute of Technology",
    "location": "Atlanta, Georgia, United States",
    "country": "United States",
    "flag": "🇺🇸",
    "foundingYear": "1885",
    "scholarshipTitle": "Georgia Tech STEM Giant (#16 Global) & GRA/GTA Tuition Waivers",
    "ranking": "#142= Global (QS 2027)",
    "qsSubjectRankings": "QS 2026: #7 Statistics & Operational Research, #13 Mechanical, Aeronautical & Manufacturing Engineering, #13 Electrical & Electronic Engineering, #16 Engineering & Technology, #=34 Computer Science & Info Systems",
    "coverage": "Partial Aid",
    "amountValue": "No Undergrad Need Aid | Emergency Out-of-Country Tuition Waiver & Full GRA/GTA Tuition Waivers",
    "tuitionFee": "~$32,000–$34,000 / year (Out-of-State Tuition) | Total COA ~$52,000–$60,000",
    "tuitionAmountNumeric": 32000,
    "hasFullRide": false,
    "hasPartialAid": true,
    "hasFinancialAid": true,
    "financialAidType": "Partial Merit",
    "financialAidDetails": "Georgia Tech does not offer need-based financial aid or general university merit scholarships to international undergraduates. Important Caveat: The Undergraduate Out-of-Country Tuition Waiver is NOT an upfront admissions scholarship for incoming freshmen; it is an emergency relief mechanism strictly reserved for currently enrolled F-1 international students who have completed at least two full-time semesters at Georgia Tech and face unexpected, severe financial hardship. Qualifying graduate GRA/GTA positions remit 100% tuition and pay minimum stipends of $1,184/month (Master's) and $2,291/month (PhD).",
    "minGpa": "3.8+",
    "minSat": "1370 - 1530 (Median SAT)",
    "satRequirementCategory": "1300",
    "satPolicyDetails": "Standardized testing (SAT or ACT) required for undergraduate admissions under Georgia Board of Regents policy. Median enrolled SAT score range is 1370 to 1530.",
    "minIelts": "7.0+",
    "ieltsCategory": "7.0",
    "toeflRequirement": "90+",
    "commonAppAccepted": true,
    "applicationPortalDetails": "Common Application",
    "acceptanceRate": "12.7% (Overall) | ~8%–9% Out-of-State & International",
    "deadline": "Nov 1 (Early Action 2 for Non-GA) / Jan 5 (Regular Decision)",
    "description": "Ranked #142= globally in QS 2027, Georgia Tech in Atlanta, GA is an elite STEM powerhouse, ranking #16 globally in Engineering & Technology. Acceptance rate is ~12.7% overall (~8–9% international). Undergrad international aid is self-funded; emergency tuition waivers require 2+ completed semesters.",
    "overviewLong": "Georgia Institute of Technology (Georgia Tech) is a premier public research university located in Atlanta, Georgia, founded in 1885. Georgia Tech is globally celebrated as a technology powerhouse in computer science, artificial intelligence, cybersecurity, aerospace engineering, industrial engineering, and mechanical engineering.\n\nRanked #142= globally in the QS World University Rankings 2027, Georgia Tech holds elite global subject positions in the 2026 QS tables: #7 globally in Statistics & Operational Research, #13 in Mechanical, Aeronautical & Manufacturing Engineering, #13 in Electrical & Electronic Engineering, #16 in Engineering & Technology, and #=34 globally in Computer Science & Info Systems.\n\nFor international undergraduate applicants, need-based financial aid is not offered, and institutional merit scholarships are very limited. However, Georgia Tech provides an Emergency Out-of-Country Tuition Waiver for international F-1 students facing unexpected financial hardship, reducing tuition to in-state levels. At the graduate level, qualifying GRA/GTA assistantships remit full tuition and provide monthly living stipends (minimum $1,184/month for Master's, $2,291/month for PhDs, with Scheller Business PhDs receiving $35,350 annual stipends + tuition waivers).",
    "topProgramsList": [
      {
        "name": "Statistics & Operational Research",
        "ranking": "#7 Global (QS 2026)",
        "description": "Georgia Tech's highest-ranking narrow subject globally, highly celebrated for cross-over industrial engineering optimization and complex corporate supply chain models."
      },
      {
        "name": "Mechanical, Aeronautical & Manufacturing Engineering",
        "ranking": "#13 Global (QS 2026)",
        "description": "Globally renowned for its immense aerospace contributions, high-speed wind tunnel networks, and pioneering automated manufacturing robotics."
      },
      {
        "name": "Electrical & Electronic Engineering",
        "ranking": "#13 Global (QS 2026)",
        "description": "An international pillar for microelectronic architectures, integrated semiconductor research, and telecommunication network infrastructures."
      },
      {
        "name": "Engineering & Technology",
        "ranking": "#16 Global (QS 2026)",
        "description": "Fully verified at fifteenth globally, anchoring the university as an absolute elite world powerhouse for industrial and applied sciences."
      },
      {
        "name": "Computer Science & Info Systems",
        "ranking": "#=34 Global (QS 2026)",
        "description": "Fully verified at exactly tied for thirty-fourth globally, standing as a primary hub for large-scale computing infrastructure, data architectures, and software networks."
      ,
    "logoText": "GIT",
    "logoBg": "from-emerald-700 to-teal-950",
    "degreesOffered": ["Undergraduate", "Graduate", "PhD"],
    "tags": ["United States", "Europe", "International", "Research"],
    "requiresSeparateApp": true}
    ],
    "allScholarshipsList": [,

      {
        "id": "uni-030-1",
        "title": "Georgia Tech Out-of-Country Emergency Tuition Waiver",
        "amount": "Reduces Out-of-State Tuition to In-State Rate",
        "coverage": "Partial Aid",
        "eligibility": "Currently enrolled F-1 international undergraduates who have completed at least two full-time semesters at Georgia Tech with a 2.50+ GPA and face sudden, unexpected severe financial hardship (NOT available as an upfront admissions waiver for incoming freshmen).",
        "description": "Emergency hardship relief waiver that reduces non-resident tuition to in-state rates for currently enrolled F-1 international students who face unforeseen financial crises after completing two full-time semesters.",
        "deadline": "Semester-Based Application",
        "requiresSeparateApp": true
      ,
    "logoText": "GIT",
    "logoBg": "from-blue-700 to-indigo-950",
    "degreesOffered": ["Undergraduate", "Graduate", "PhD"]},

      {
        "id": "uni-030-2",
        "title": "Georgia Tech Graduate Assistantships (GRA / GTA)",
        "amount": "100% Tuition Waiver + Monthly Stipend ($2,291/mo PhD Min / $35k+ Business)",
        "coverage": "Full Ride",
        "eligibility": "Admitted graduate and doctoral students appointed as Research or Teaching Assistants.",
        "description": "Provides full tuition waivers and monthly research/teaching stipends for qualified graduate scholars.",
        "deadline": "Dec 15 (Graduate Program Deadline)",
        "requiresSeparateApp": false
      }
    ],
    "degreesOffered": [
      "Undergraduate",
      "Graduate",
      "PhD"
    ],
    "tags": [
      "STEM Powerhouse",
      "Industrial #1",
      "Cybersecurity #2",
      "CS #5",
      "GRA/GTA Tuition Waiver",
      "USA",
      "QS #142"
    ],
    "requiresSeparateApp": false,
    "logoText": "GT",
    "logoBg": "from-amber-900 to-yellow-950"
  },

  {
    "id": "uni-031",
    "universityName": "University of Southern California",
    "location": "Los Angeles, California, United States",
    "country": "United States",
    "flag": "🇺🇸",
    "foundingYear": "1880",
    "scholarshipTitle": "USC Trustee Full-Tuition Scholarship (~15% Merit Rate) & Viterbi PhD Fellowships",
    "ranking": "#153 Global (QS 2027)",
    "qsSubjectRankings": "QS 2026: #8 Communication & Media Studies, #=30 Performing Arts, #47 Data Science & Artificial Intelligence, #63 Accounting & Finance, #73 Computer Science & Info Systems",
    "coverage": "Full Ride",
    "amountValue": "No Undergrad Need Aid | Trustee Full Tuition Merit (~15% Freshmen Receive Merit) & PhD Fellowships",
    "tuitionFee": "$75,384 / year (Tuition) | Total On-Campus COA ~$103,162 (+ $450 New Student Fee)",
    "tuitionAmountNumeric": 75384,
    "hasFullRide": true,
    "hasPartialAid": true,
    "hasFinancialAid": true,
    "financialAidType": "Merit-Based",
    "financialAidDetails": "USC explicitly does not provide need-based financial aid to international undergraduate applicants ($103,162 annual COA). However, international applicants are fully eligible for USC Merit Scholarships, including the Trustee Scholarship (Full Tuition) and Presidential Scholarship (Half Tuition). Approximately 15% of entering freshmen receive merit awards. Graduate/PhD students access departmental fellowships and assistantships.",
    "minGpa": "3.85+",
    "minSat": "1450 - 1540 (Median SAT)",
    "satRequirementCategory": "1400",
    "satPolicyDetails": "Test-Optional policy for undergraduate admissions. Median enrolled SAT score range is 1450 to 1540.",
    "minIelts": "7.0+",
    "ieltsCategory": "7.0",
    "toeflRequirement": "100+",
    "commonAppAccepted": true,
    "applicationPortalDetails": "Common Application",
    "acceptanceRate": "9.9%",
    "deadline": "Nov 1 (Merit Scholarship Deadline) / Jan 15 (Regular Decision)",
    "description": "Ranked #153 globally in QS 2027, USC in Los Angeles, CA excels in Communication (#8), Performing Arts (#=30), and Data Science (#47). Undergrad international aid is merit-only (Trustee Full Tuition); PhDs receive fellowships.",
    "overviewLong": "The University of Southern California (USC) is a world-renowned private research university in Los Angeles, California, founded in 1880. USC combines world-class academic research across its Viterbi School of Engineering, Marshall School of Business, Annenberg School for Communication and Journalism, and School of Cinematic Arts with deep integration into Los Angeles' tech, media, healthcare, and entertainment industries.\n\nRanked #153 globally in the QS World University Rankings 2027, USC is home to top-tier programs in communication, performing arts, data science, accounting, and computer science.\n\nFor international undergraduate applicants, USC does not provide need-based financial aid ($103,162 annual cost of attendance). However, international applicants are fully eligible for prestigious holistic merit scholarships, including the Trustee Scholarship (Full Tuition) and Presidential Scholarship (Half Tuition), awarded to ~15% of entering freshmen. At the graduate and doctoral levels, USC provides departmental merit fellowships, Research Assistantships, and Teaching Assistantships across its academic colleges.",
    "topProgramsList": [
      {
        "name": "Communication & Media Studies",
        "ranking": "#8 Global (QS 2026)",
        "description": "Standing as USC's highest standalone subject tier globally, this division managed via the Annenberg School leads international frameworks for digital journalism, public diplomacy, and media sociology."
      },
      {
        "name": "Data Science & Artificial Intelligence",
        "ranking": "#47 Global (QS 2026)",
        "description": "Headquartered inside the Viterbi School of Engineering, this flagship computing program fuses advanced machine learning tracks with algorithmic data architectures and predictive analytics ecosystems."
      },
      {
        "name": "Accounting & Finance",
        "ranking": "#63 Global (QS 2026)",
        "description": "Managed through the elite Marshall School of Business, highly recognized for corporate asset management pipelines, financial econometrics, and global enterprise recruitment networks."
      },
      {
        "name": "Computer Science & Info Systems",
        "ranking": "#73 Global (QS 2026)",
        "description": "A major technological engine focusing on software architecture development, network cybersecurity protocols, human-computer interaction, and virtual simulation modules."
      },
      {
        "name": "Performing Arts",
        "ranking": "#=30 Global (QS 2026)",
        "description": "Cultivated in tandem with the legendary School of Cinematic Arts and dramatic programs, setting international benchmarks for media production, cinematic writing, and interactive performance profiles."
      }
    ],
    "allScholarshipsList": [
      {
        "id": "uni-031-1",
        "title": "USC Trustee Scholarship (Full Tuition)",
        "amount": "100% Full Tuition Coverage (4-Year Renewable)",
        "coverage": "Full Tuition",
        "eligibility": "High-achieving incoming first-year applicants (including international students) applying by Nov 1.",
        "description": "USC's premier undergraduate merit scholarship, providing full tuition coverage for four years of undergraduate study.",
        "deadline": "Nov 1 (Merit Scholarship Priority Deadline)",
        "requiresSeparateApp": false
      },
      {
        "id": "uni-031-2",
        "title": "USC Presidential Scholarship (Half Tuition)",
        "amount": "50% Tuition Coverage (4-Year Renewable)",
        "coverage": "Partial Aid",
        "eligibility": "High-achieving incoming first-year applicants applying by the merit scholarship deadline.",
        "description": "Provides 50% tuition coverage for four years based on academic excellence and holistic achievements.",
        "deadline": "Nov 1 (Merit Scholarship Priority Deadline)",
        "requiresSeparateApp": false
      }
    ],
    "degreesOffered": [
      "Undergraduate",
      "Graduate",
      "PhD"
    ],
    "tags": [
      "Trustee Full Tuition",
      "Viterbi CS",
      "LA Innovation Hub",
      "Presidential Scholar",
      "Cinematic Arts",
      "USA",
      "QS #153"
    ],
    "requiresSeparateApp": false,
    "logoText": "USC",
    "logoBg": "from-red-900 to-amber-700"
  },

  {
    "id": "uni-032",
    "universityName": "University of North Carolina at Chapel Hill",
    "location": "Chapel Hill, North Carolina, United States",
    "country": "United States",
    "flag": "🇺🇸",
    "foundingYear": "1789",
    "scholarshipTitle": "UNC Morehead-Cain Full Scholarship & Royster 5-Year Doctoral Fellowships",
    "ranking": "#=158 Global (QS 2027)",
    "qsSubjectRankings": "QS 2026: #5 Pharmacy & Pharmacology, #18 Dentistry, #23 Sociology, #24 Philosophy, #151-200 Computer Science & Information Systems",
    "coverage": "Full Ride",
    "amountValue": "No Undergrad Need Aid | Morehead-Cain / Robertson Full Ride Merit & Royster 5-Yr PhD Fellowships",
    "tuitionFee": "$47,472 / year (Out-of-State Tuition) | Total On-Campus COA ~$70,264",
    "tuitionAmountNumeric": 47472,
    "hasFullRide": true,
    "hasPartialAid": true,
    "hasFinancialAid": true,
    "financialAidType": "Merit-Based",
    "financialAidDetails": "UNC-Chapel Hill does not provide need-based financial aid to international undergraduates ($70,264 annual COA). Note that North Carolina state statutory enrollment caps mandate that 82% of undergraduate students be in-state residents, lowering out-of-state and international acceptance rates to roughly 8%–9%. International applicants are eligible for world-famous full merit scholarships like the Morehead-Cain Scholarship (deadlines around Oct 1) and Robertson Scholars Program (covering 100% of total COA). Graduate Master's Merit Fellowships ($18k + tuition) and Royster 5-year PhD Fellowships provide full funding.",
    "minGpa": "3.85+",
    "minSat": "1370 - 1500 (Median SAT)",
    "satRequirementCategory": "1300",
    "satPolicyDetails": "Test-Optional policy for undergraduate admissions. Median enrolled SAT score range is 1370 to 1500.",
    "minIelts": "7.0+",
    "ieltsCategory": "7.0",
    "toeflRequirement": "100+",
    "commonAppAccepted": true,
    "applicationPortalDetails": "Common Application",
    "acceptanceRate": "17.1% (In-State Blended) | ~8%–9% Out-of-State & International",
    "deadline": "Oct 15 (Early Action) / Jan 15 (Regular Decision)",
    "description": "Ranked #=158 globally in QS 2027, UNC-Chapel Hill in NC is a public flagship titan in Pharmacy (#5), Dentistry (#18), and Sociology (#23). Out-of-state/international acceptance rate is ~8–9% due to 82% in-state statutory caps. Undergrad aid includes full Morehead-Cain ride (Oct 1 deadline); PhDs receive 5-year Royster fellowships.",
    "overviewLong": "The University of North Carolina at Chapel Hill (UNC-Chapel Hill) is a flagship public research university in Chapel Hill, North Carolina, founded in 1789. UNC is globally distinguished for its research in pharmacy, dentistry, sociology, philosophy, and computer science.\n\nRanked #=158 globally in the QS World University Rankings 2027, UNC-Chapel Hill combines high-impact research with a traditional college-town atmosphere.\n\nFor international undergraduate applicants, institutional need-based aid is not available ($70,264 annual cost of attendance). However, international students are eligible for highly competitive merit awards, including the world-famous Morehead-Cain Scholarship and Robertson Scholars Program, which cover 100% of the total cost of attendance. At the graduate level, UNC offers Master's Merit Fellowships ($18,000 stipend + full tuition + health insurance) and the elite Royster Society of Fellows, which provides 5 years of full stipend, tuition, fees, and health benefits for doctoral candidates.",
    "topProgramsList": [
      {
        "name": "Pharmacy & Pharmacology",
        "ranking": "#5 Global (QS 2026)",
        "description": "UNC's highest-ranking narrow technical and medical science division, leading international research in experimental therapeutics and drug delivery systems."
      },
      {
        "name": "Dentistry",
        "ranking": "#18 Global (QS 2026)",
        "description": "An elite clinical and oral health research division creating cutting-edge benchmarks for global craniofacial science and therapeutic care."
      },
      {
        "name": "Sociology",
        "ranking": "#23 Global (QS 2026)",
        "description": "A premier social science discipline recognized worldwide for empirical demographic investigations, equity research, and institutional policy studies."
      },
      {
        "name": "Philosophy",
        "ranking": "#24 Global (QS 2026)",
        "description": "A critically acclaimed humanities program celebrated for deep theoretical frameworks in contemporary logic, ethics, and political philosophy."
      },
      {
        "name": "Computer Science & Information Systems",
        "ranking": "#151-200 Global (QS 2026)",
        "description": "Housed within the College of Arts & Sciences, focusing on foundational software architectures, human-computer interaction, and computational data logic."
      }
    ],
    "allScholarshipsList": [
      {
        "id": "uni-032-1",
        "title": "UNC Morehead-Cain Scholarship (Full Undergraduate Ride)",
        "amount": "100% Full Cost of Attendance (Tuition + Room/Board + Airfare + Books + Summer Enrichment)",
        "coverage": "Full Ride",
        "eligibility": "Outstanding incoming first-year undergraduate applicants (including international candidates).",
        "description": "One of the world's premier undergraduate merit scholarships, covering 100% of tuition, room, board, supplies, and four summer enrichment experiences. Applicants must meet nomination or direct application deadlines (typically around Oct 1) in addition to applying for UNC admission by Oct 15.",
        "deadline": "Oct 1 (Direct App / Early Nomination) / Oct 15 (UNC Early Action Admission)",
        "requiresSeparateApp": true
      },
      {
        "id": "uni-032-2",
        "title": "UNC Royster Society of Fellows Doctoral Package",
        "amount": "5-Year Full Funding (Stipend + Tuition + Fees + Health Insurance)",
        "coverage": "Full Ride",
        "eligibility": "Outstanding admitted doctoral candidates nominated by academic departments.",
        "description": "Guarantees 5 full years of stipend support, full tuition coverage, mandatory fee waivers, and health insurance.",
        "deadline": "Dec 15 (Departmental Graduate Deadline)",
        "requiresSeparateApp": false
      }
    ],
    "degreesOffered": [
      "Undergraduate",
      "Graduate",
      "PhD"
    ],
    "tags": [
      "Morehead-Cain Full Ride",
      "Public Health #2",
      "Pharmacy #1",
      "Royster PhD Fellow",
      "Public Flagship",
      "USA",
      "QS #158"
    ],
    "requiresSeparateApp": false,
    "logoText": "UNC",
    "logoBg": "from-sky-900 to-blue-950"
  },

  {
    "id": "uni-033",
    "universityName": "Washington University in St. Louis",
    "location": "St. Louis, Missouri, United States",
    "country": "United States",
    "flag": "🇺🇸",
    "foundingYear": "1853",
    "scholarshipTitle": "WashU 100% Need Met (Need-Blind International) & Danforth, Ervin & Rodriguez Merit Awards",
    "ranking": "#=162 Global (QS 2027)",
    "qsSubjectRankings": "QS 2026: #=19 Anatomy & Physiology, #47 Biological Sciences, #49 Medicine, #101-150 Business & Management Studies, #151-200 Computer Science & Info Systems",
    "coverage": "Full Ride",
    "amountValue": "100% Demonstrated Need Met (Need-Blind) | Danforth, Ervin & Rodriguez Full Merit Awards + $37.8k+ PhD Stipend",
    "tuitionFee": "$35,655 / semester ($71,310 / year Tuition) | Total COA ~$90,000",
    "tuitionAmountNumeric": 71310,
    "hasFullRide": true,
    "hasPartialAid": true,
    "hasFinancialAid": true,
    "financialAidType": "Need-Blind",
    "financialAidDetails": "WashU is Need-Blind for international undergraduate applicants (starting with the 2024-25 cycle) and meets 100% of demonstrated financial need with zero required loans. WashU also awards full merit scholarships through the Danforth, Ervin, and Rodriguez Scholars Programs. PhD students receive full tuition scholarships and guaranteed 5-year stipends starting at a minimum of $37,853/year ($40,000 in Olin Business).",
    "minGpa": "3.85+",
    "minSat": "1500 - 1570 (Median SAT)",
    "satRequirementCategory": "1500",
    "satPolicyDetails": "Test-Optional policy for undergraduate admissions. Median enrolled SAT score range is 1500 to 1570.",
    "minIelts": "7.5+",
    "ieltsCategory": "7.5",
    "toeflRequirement": "100+",
    "commonAppAccepted": true,
    "applicationPortalDetails": "Common Application & Coalition Application",
    "acceptanceRate": "11.8%",
    "deadline": "Nov 1 (ED I) / Jan 2 (ED II & Regular Decision)",
    "description": "Ranked #=162 globally in QS 2027, WashU in St. Louis, MO is Need-Blind for international undergraduates, excelling in Anatomy (#=19), Biology (#47), and Medicine (#49). Merit scholarships include Danforth and Ervin; PhDs receive $37.8k+ stipends.",
    "overviewLong": "Washington University in St. Louis (WashU / WUSTL) is a highly selective, world-renowned private research university located in St. Louis, Missouri, founded in 1853. WashU is celebrated globally for its elite research across anatomy and physiology, biology, medicine, business, and computer science.\n\nRanked #=162 globally in the QS World University Rankings 2027, WashU combines small, intimate undergraduate learning communities with a world-class biomedical and technological research ecosystem across its McKelvey School of Engineering, Olin Business School, and School of Medicine.\n\nCrucially, WashU has transformed its financial aid model, adopting a 100% Need-Blind admissions policy for international undergraduate applicants (beginning with the 2024–25 cycle) and meeting 100% of demonstrated financial need with zero required loans. In addition to need-based aid, WashU awards prestigious full merit scholarships including the Danforth, Ervin, and Rodriguez Scholars Programs. At the doctoral level, WashU guarantees 5 full years of support with 100% tuition coverage and minimum stipends starting at $37,853 per year ($40,000 in Olin Business).",
    "topProgramsList": [
      {
        "name": "Anatomy & Physiology",
        "ranking": "#=19 Global (QS 2026)",
        "description": "Stands as WashU's highest narrow subject placement in the live database, recognized for elite baseline human mechanics mapping and surgical anatomical modeling frameworks."
      },
      {
        "name": "Biological Sciences",
        "ranking": "#47 Global (QS 2026)",
        "description": "A massive flagship life sciences division exploring complex molecular biochemistry, cellular engineering, and advanced genetic research tracks."
      },
      {
        "name": "Medicine",
        "ranking": "#49 Global (QS 2026)",
        "description": "Anchored by the world-famous WashU School of Medicine, this track drives major international benchmarks for multi-specialty clinical research and experimental therapeutics."
      },
      {
        "name": "Business & Management Studies",
        "ranking": "#101-150 Global (QS 2026)",
        "description": "Cultivated via the Olin Business School, highly recognized for specialized corporate asset management pipelines, executive consulting logic, and enterprise recruitment networks."
      },
      {
        "name": "Computer Science & Info Systems",
        "ranking": "#151-200 Global (QS 2026)",
        "description": "Housed in the McKelvey School of Engineering, focusing on the intersection of data science logic, software security networks, and biomedical engineering computational tools"
      }
    ],
    "allScholarshipsList": [
      {
        "id": "uni-033-1",
        "title": "WashU Need-Based Financial Aid (Need-Blind International)",
        "amount": "100% Demonstrated Need Met (Loan-Free Package)",
        "coverage": "Full Ride",
        "eligibility": "All admitted undergraduate applicants (Domestic & International) demonstrating financial need.",
        "description": "WashU evaluates international undergraduate applicants need-blind and meets 100% of demonstrated financial need without loans.",
        "deadline": "Nov 1 (ED I) / Jan 2 (RD)",
        "requiresSeparateApp": false
      },
      {
        "id": "uni-033-2",
        "title": "Danforth, Ervin & Rodriguez Scholars Programs",
        "amount": "Full Tuition Merit Scholarship + Annual Stipend",
        "coverage": "Full Tuition",
        "eligibility": "High-achieving incoming first-year undergraduate candidates demonstrating leadership and service.",
        "description": "Prestigious merit-based scholarship programs covering full tuition and providing enrichment stipends.",
        "deadline": "Jan 2 (Scholarship Priority Deadline)",
        "requiresSeparateApp": true
      },
      {
        "id": "uni-033-3",
        "title": "WashU Doctoral 5-Year Funding Package",
        "amount": "100% Tuition Waiver + $37,853 Minimum Living Stipend ($40,000 Olin Business)",
        "coverage": "Full Ride",
        "eligibility": "Admitted full-time doctoral candidates in good academic standing.",
        "description": "Guarantees 5 years of full tuition remission and living stipend support starting at $37,853 per year.",
        "deadline": "Dec 15 (Graduate Program Deadline)",
        "requiresSeparateApp": false
      }
    ],
    "degreesOffered": [
      "Undergraduate",
      "Graduate",
      "PhD"
    ],
    "tags": [
      "Need-Blind International",
      "100% Need Met",
      "Danforth Scholar",
      "McKelvey Eng",
      "Olin Business",
      "USA",
      "QS #162"
    ],
    "requiresSeparateApp": false,
    "logoText": "WASHU",
    "logoBg": "from-green-900 to-emerald-950"
  },

  {
    "id": "uni-034",
    "universityName": "Texas A&M University",
    "location": "College Station, Texas, United States",
    "country": "United States",
    "flag": "🇺🇸",
    "foundingYear": "1876",
    "scholarshipTitle": "Texas A&M $4,000+ Competitive Scholarship In-State Tuition Waiver & GRA/GTA Packages",
    "ranking": "#169 Global (QS 2027)",
    "qsSubjectRankings": "QS 2026: #2 Petroleum Engineering, #5 Veterinary Science, #11 Agriculture & Forestry, #140 Computer Science & Info Systems, #201-250 Communication & Media Studies",
    "coverage": "Partial Aid",
    "amountValue": "In-State Tuition Waiver for $4,000+ Competitive Scholarships | Full GRA/GTA Support ($20k-$37.5k Stipends)",
    "tuitionFee": "Program-Dependent (~$38,000 / year Out-of-State) | Tuition Frozen Through 2026-27",
    "tuitionAmountNumeric": 38000,
    "hasFullRide": false,
    "hasPartialAid": true,
    "hasFinancialAid": true,
    "financialAidType": "Partial Merit",
    "financialAidDetails": "Texas A&M offers limited need-based aid for international students via TASFA. Crucially, international undergraduates who earn a competitive university or departmental scholarship of $4,000 or more per year qualify for a Non-Resident Tuition Waiver, allowing them to pay Texas resident in-state tuition rates. Graduate GRA/GTA positions (at 50% FTE) remit out-of-state tuition, cover health insurance, and pay stipends ranging from $20,000 to $37,500/year.",
    "minGpa": "3.7+",
    "minSat": "1260 - 1440 (Median SAT)",
    "satRequirementCategory": "1300",
    "satPolicyDetails": "Test-Optional policy for undergraduate admissions. Median enrolled SAT score range is 1260 to 1440.",
    "minIelts": "6.5+",
    "ieltsCategory": "6.5",
    "toeflRequirement": "80+",
    "commonAppAccepted": true,
    "applicationPortalDetails": "Common Application & ApplyTexas",
    "acceptanceRate": "62.6%",
    "deadline": "Dec 1 (Priority Application Deadline)",
    "description": "Ranked #169 globally in QS 2027, Texas A&M in College Station, TX is a world leader in Petroleum Engineering (#2), Veterinary Science (#5), and Agriculture (#11). Competitive $4,000+ scholarships unlock in-state tuition rates; GRA/GTA roles cover tuition & stipends.",
    "overviewLong": "Texas A&M University (TAMU) is a major public land-grant research university in College Station, Texas, founded in 1876. Texas A&M is a global leader in petroleum engineering, veterinary medicine, agriculture & forestry, computer science, and communications.\n\nRanked #169 globally in the QS World University Rankings 2027, Texas A&M boasts some of the absolute highest-ranking technical programs globally, anchoring the university as a world-class academic hub.\n\nFor international undergraduate applicants, Texas A&M offers limited need-based support via TASFA and competitive university merit scholarships. Crucially, international undergraduates who earn a competitive university or departmental scholarship of $4,000 or more per year qualify for a Non-Resident Tuition Waiver, allowing them to pay Texas resident in-state tuition rates. At the graduate level, qualifying 50% FTE Graduate Assistantships (GRA/GTA) remit out-of-state tuition, cover health insurance, and pay living stipends ranging from $20,000 to $37,500 annually.",
    "topProgramsList": [
      {
        "name": "Petroleum Engineering",
        "ranking": "#2 Global (QS 2026)",
        "description": "Standing as the university's absolute highest narrow technical discipline worldwide, this program serves as an international anchor for reservoir simulation, deepwater drilling mechanics, and energy extraction models."
      },
      {
        "name": "Veterinary Science",
        "ranking": "#5 Global (QS 2026)",
        "description": "Managed through the highly acclaimed College of Veterinary Medicine & Biomedical Sciences, this division sets elite international benchmarks for clinical surgery, livestock health infrastructure, and translational biomedical trials."
      },
      {
        "name": "Agriculture & Forestry",
        "ranking": "#11 Global (QS 2026)",
        "description": "A flagship worldwide program driving pioneering advancements in agronomic systems, plant genomics, global food security sciences, and massive cross-sector agricultural biology frameworks."
      },
      {
        "name": "Computer Science & Info Systems",
        "ranking": "#140 Global (QS 2026)",
        "description": "Headquartered inside the highly competitive engineering framework, focusing extensively on specialized software systems, data network infrastructures, and computing system dynamics."
      },
      {
        "name": "Communication & Media Studies",
        "ranking": "#201-250 Global (QS 2026)",
        "description": "Cultivated as a key social science/humanities specialty, analyzing digital media architectures, organizational dialogue patterns, public mass communications, and information ecology"
      }
    ],
    "allScholarshipsList": [
      {
        "id": "uni-034-1",
        "title": "Texas A&M Non-Resident Tuition Waiver ($4,000+ Competitive Award)",
        "amount": "Reduces Out-of-State Tuition to Texas In-State Resident Rates",
        "coverage": "Partial Aid",
        "eligibility": "Undergraduate international students who win a competitive university/departmental scholarship of $4,000+.",
        "description": "State-authorized waiver allowing international students awarded a competitive $4,000+ scholarship to pay in-state resident tuition rates.",
        "deadline": "Dec 1 (Scholarship Application Deadline)",
        "requiresSeparateApp": true
      },
      {
        "id": "uni-034-2",
        "title": "Texas A&M Graduate Assistantships (GRA / GTA 50% FTE)",
        "amount": "Out-of-State Tuition Remission + Health Insurance + $20,000–$37,500 Annual Stipend",
        "coverage": "Full Ride",
        "eligibility": "Admitted graduate and doctoral candidates appointed as Research or Teaching Assistants.",
        "description": "Remits out-of-state tuition, provides health insurance benefits, and pays monthly stipends.",
        "deadline": "Jan 15 (Graduate Departmental Deadline)",
        "requiresSeparateApp": false
      }
    ],
    "degreesOffered": [
      "Undergraduate",
      "Graduate",
      "PhD"
    ],
    "tags": [
      "In-State Tuition Waiver",
      "Engineering Power",
      "Aerospace",
      "Petroleum",
      "TASFA Aid",
      "USA",
      "QS #169"
    ],
    "requiresSeparateApp": false,
    "logoText": "TAMU",
    "logoBg": "from-amber-950 to-red-950"
  },

  {
    "id": "uni-035",
    "universityName": "Arizona State University",
    "location": "Tempe / Phoenix, Arizona, United States",
    "country": "United States",
    "flag": "🇺🇸",
    "foundingYear": "1885",
    "scholarshipTitle": "ASU New American University (NAMU) Merit Award ($3k-$10k/yr) & TA/RA Stipends",
    "ranking": "#172 Global (QS 2027)",
    "qsSubjectRankings": "QS 2026: #35 Civil & Structural Engineering, #41 Anthropology, #53 Business & Management Studies, #51-100 Geography, #121 Computer Science & Info Systems",
    "coverage": "Partial Aid",
    "amountValue": "$3,000–$10,000 / year (NAMU Merit Scholarship, 4-Yr Renewable) | $26.5k+ Graduate Assistantships",
    "tuitionFee": "$39,262 / year (Nonresident Tuition & Fees) | Total Estimated COA ~$66,646–$69,906",
    "tuitionAmountNumeric": 39262,
    "hasFullRide": false,
    "hasPartialAid": true,
    "hasFinancialAid": true,
    "financialAidType": "Partial Merit",
    "financialAidDetails": "ASU automatically considers incoming international undergraduates for the New American University (NAMU) Scholarship, awarding between $3,000 and $10,000 per year (renewable for up to 8 semesters). At the graduate level, 50% academic-year Teaching and Research Assistantships (TA/RA) provide base stipends starting at $26,544, full or partial tuition awards, and individual health insurance coverage.",
    "minGpa": "3.5+",
    "minSat": "1180 - 1380 (Median SAT)",
    "satRequirementCategory": "1300",
    "satPolicyDetails": "Test-Optional policy for undergraduate admissions. Median enrolled SAT score range is 1180 to 1380.",
    "minIelts": "6.5+",
    "ieltsCategory": "6.5",
    "toeflRequirement": "79+",
    "commonAppAccepted": true,
    "applicationPortalDetails": "Common Application & ASU Future Sun Devil Application",
    "acceptanceRate": "89.8%",
    "deadline": "Nov 1 (Priority NAMU Scholarship Deadline) / Rolling Admissions",
    "description": "Ranked #172 globally in QS 2027, ASU in Tempe/Phoenix, AZ excels in Civil Engineering (#35), Anthropology (#41), and Business (#53). Undergrads automatically get up to $10,000/yr NAMU merit awards; TAs/RAs receive $26.5k+ stipends.",
    "overviewLong": "Arizona State University (ASU) is a major public research university located in the Tempe and Phoenix metropolitan area in Arizona, founded in 1885. ASU is globally recognized for civil engineering, anthropology, business & management studies, geography, and computer science.\n\nRanked #172 globally in the QS World University Rankings 2027, ASU offers expansive academic choices through its Ira A. Fulton Schools of Engineering, W. P. Carey School of Business, and School of Sustainability.\n\nFor international undergraduate applicants, ASU automatically considers candidates for the New American University (NAMU) International Merit Scholarship, awarding $3,000 to $10,000 per year (renewable for up to 8 semesters). Total annual cost of attendance is approximately $66,646 to $69,906. At the graduate level, 50% academic-year Teaching and Research Assistantships (TA/RA) provide base stipends starting at $26,544, full or partial tuition awards, and individual health insurance coverage.",
    "topProgramsList": [
      {
        "name": "Civil & Structural Engineering",
        "ranking": "#35 Global (QS 2026)",
        "description": "Arizona State's absolute highest standalone technical ranking globally, pioneering resilient desert urban infrastructure designs, water system resource management, and climate-adaptive materials testing."
      },
      {
        "name": "Anthropology",
        "ranking": "#41 Global (QS 2026)",
        "description": "A premier research and evolutionary biology division exploring human evolutionary biology, archaeological social dynamics, and cross-cultural adaptive architectures."
      },
      {
        "name": "Business & Management Studies",
        "ranking": "#53 Global (QS 2026)",
        "description": "Cultivated through the prestigious W. P. Carey School of Business, setting international standards for supply chain logistics, business analytics pipelines, and executive recruiting networks."
      },
      {
        "name": "Geography",
        "ranking": "#51-100 Global (QS 2026)",
        "description": "Heavily focused on geographic information systems (GIS), spatial-temporal data intelligence, and environmental topography models across arid domains."
      },
      {
        "name": "Computer Science & Info Systems",
        "ranking": "#121 Global (QS 2026)",
        "description": "Housed inside the Ira A. Fulton Schools of Engineering, specializing in large-scale machine learning, algorithmic security frameworks, and interactive software development."
      }
    ],
    "allScholarshipsList": [
      {
        "id": "uni-035-1",
        "title": "ASU New American University (NAMU) International Scholarship",
        "amount": "$3,000 to $10,000 per Year (Renewable for 4 Years / 8 Semesters)",
        "coverage": "Partial Aid",
        "eligibility": "Incoming first-year international undergraduate applicants with strong academic records.",
        "description": "Automatic consideration merit scholarship providing up to $10,000 per year toward non-resident tuition.",
        "deadline": "Nov 1 (Priority Consideration Deadline)",
        "requiresSeparateApp": false
      },
      {
        "id": "uni-035-2",
        "title": "ASU Graduate Teaching / Research Assistantship (50% TA/RA)",
        "amount": "Full/Partial Tuition Award + Health Insurance + $26,544 Minimum Stipend",
        "coverage": "Full Ride",
        "eligibility": "Admitted graduate and doctoral candidates appointed as Teaching or Research Assistants.",
        "description": "Provides tuition coverage, individual health insurance, and academic-year stipends.",
        "deadline": "Jan 15 (Graduate Departmental Deadline)",
        "requiresSeparateApp": false
      }
    ],
    "degreesOffered": [
      "Undergraduate",
      "Graduate",
      "PhD"
    ],
    "tags": [
      "NAMU $10k Merit",
      "Fulton Engineering",
      "W.P. Carey Business",
      "Innovation Leader",
      "USA",
      "QS #172"
    ],
    "requiresSeparateApp": false,
    "logoText": "ASU",
    "logoBg": "from-yellow-700 to-red-950"
  },

  {
    "id": "uni-036",
    "universityName": "University of California, Santa Barbara",
    "location": "Santa Barbara, California, United States",
    "country": "United States",
    "flag": "🇺🇸",
    "foundingYear": "1891",
    "scholarshipTitle": "UCSB Multiyear Doctoral Fellowships (100% Candidacy NRST Waiver) & Hardship Awards",
    "ranking": "#173 Global (QS 2027)",
    "qsSubjectRankings": "QS 2026: #=23 Physics & Astronomy, #=95 Chemistry, #=111 Environmental Sciences, #=137 Biological Sciences, #=137 Engineering & Technology (Broad Faculty Area)",
    "coverage": "Partial Aid",
    "amountValue": "Limited Undergrad Aid (Hardship Award) | 100% Doctoral NRST Tuition Reduction + $44k PhD Stipends",
    "tuitionFee": "$15,588 Base + $39,270 Nonresident Tuition | Total On-Campus COA ~$90,216",
    "tuitionAmountNumeric": 54858,
    "hasFullRide": false,
    "hasPartialAid": true,
    "hasFinancialAid": true,
    "financialAidType": "Partial Merit",
    "financialAidDetails": "UCSB offers limited undergraduate aid for international students ($90,216 annual COA), with emergency funding available via the International Student Hardship Award. Graduate doctoral students receive multiyear recruitment packages including the International Doctoral Recruitment Fellowship, GSR/TA appointments covering tuition, fees, and health insurance, 100% NRST tuition reductions after advancement to candidacy for up to 3 years, and stipends (e.g., $44,000/yr in MCDB biology).",
    "minGpa": "3.8+",
    "minSat": "Test-Free (UC Policy)",
    "satRequirementCategory": "Optional",
    "satPolicyDetails": "UCSB is completely Test-Free under University of California policy. Standardized test scores (SAT/ACT) are not considered for undergraduate admission or scholarship selection.",
    "minIelts": "7.0+",
    "ieltsCategory": "7.0",
    "toeflRequirement": "80+",
    "commonAppAccepted": false,
    "applicationPortalDetails": "UC Application System",
    "acceptanceRate": "27.9%",
    "deadline": "Nov 30 (UC Application Filing Period Nov 1-30)",
    "description": "Ranked #173 globally in QS 2027, UCSB in Santa Barbara, CA excels in Physics & Astronomy (#=23), Chemistry (#=95), and Environmental Sciences (#=111). Undergrad aid is limited; PhDs receive multiyear packages and post-candidacy NRST tuition reductions.",
    "overviewLong": "The University of California, Santa Barbara (UCSB) is a world-class public research university located on the Pacific coast in Santa Barbara, California, founded in 1891. UCSB is globally renowned for its cutting-edge leadership in physics & astronomy, chemistry, environmental sciences, biological sciences, and engineering & technology.\n\nRanked #173 globally in the QS World University Rankings 2027, UCSB counts multiple Nobel Laureates among its faculty and sits at the forefront of global research in quantum computing, semiconductors, and advanced materials.\n\nFor international undergraduate applicants, institutional financial aid is limited ($90,216 total annual cost of attendance), with emergency relief available via the International Student Hardship Award. At the doctoral level, UCSB provides multiyear recruitment funding packages that include International Doctoral Recruitment Fellowships, TA/GSR appointments covering tuition, fees, and health insurance, 100% reduction of Nonresident Supplemental Tuition (NRST) for up to 3 years after advancing to candidacy, and competitive living stipends (e.g., $44,000 per year in MCDB biology).",
    "topProgramsList": [
      {
        "name": "Physics & Astronomy",
        "ranking": "#=23 Global (QS 2026)",
        "description": "Standing as UCSB's absolute highest narrow discipline globally, home to multiple Nobel laureates and world-leading experimental condensed matter and quantum research laboratories."
      },
      {
        "name": "Chemistry",
        "ranking": "#=95 Global (QS 2026)",
        "description": "Recognized for foundational molecular structural studies, polymer chemistry applications, and chemical material innovations."
      },
      {
        "name": "Environmental Sciences",
        "ranking": "#=111 Global (QS 2026)",
        "description": "Housed via interdisciplinary coastal and ecological research networks, focusing heavily on climate mitigation and marine resource conservation."
      },
      {
        "name": "Biological Sciences",
        "ranking": "#=137 Global (QS 2026)",
        "description": "A premier public life sciences framework exploring cellular signaling, biochemistry, and ecological organism structures."
      },
      {
        "name": "Engineering & Technology (Broad Faculty Area)",
        "ranking": "#=137 Global (QS 2026)",
        "description": "The holistic engineering umbrella capturing UCSB's specialized materials science, chemical engineering, and electrical engineering centers."
      }
    ],
    "allScholarshipsList": [
      {
        "id": "uni-036-1",
        "title": "UCSB International Student Hardship Award",
        "amount": "Variable Financial Hardship Relief Support",
        "coverage": "Partial Aid",
        "eligibility": "Enrolled F-1/J-1 international students experiencing unforeseen financial hardship during study.",
        "description": "Need-based emergency assistance awarded to enrolled international students facing severe financial distress.",
        "deadline": "Quarterly Application",
        "requiresSeparateApp": true
      },
      {
        "id": "uni-036-2",
        "title": "UCSB Multiyear Doctoral Recruitment Package & 100% Post-Candidacy NRST Waiver",
        "amount": "Full Tuition + Fees + Health Insurance + 100% Post-Candidacy NRST Reduction + Stipend ($44,000/yr MCDB)",
        "coverage": "Full Ride",
        "eligibility": "Admitted doctoral students (including international candidates) nominated by academic departments.",
        "description": "Comprehensive doctoral package featuring TA/GSR appointments, health benefits, stipends, and a 100% reduction of Nonresident Supplemental Tuition for 3 years post-candidacy.",
        "deadline": "Dec 15 (Graduate Departmental Deadline)",
        "requiresSeparateApp": false
      }
    ],
    "degreesOffered": [
      "Undergraduate",
      "Graduate",
      "PhD"
    ],
    "tags": [
      "Physics & Materials",
      "100% Candidacy NRST Reduction",
      "UC System",
      "GSR/TA Remission",
      "USA",
      "QS #173"
    ],
    "requiresSeparateApp": false,
    "logoText": "UCSB",
    "logoBg": "from-blue-950 to-amber-900"
  },

  {
    "id": "uni-037",
    "universityName": "Michigan State University",
    "location": "East Lansing, Michigan, United States",
    "country": "United States",
    "flag": "🇺🇸",
    "foundingYear": "1855",
    "scholarshipTitle": "MSU International First-Year Merit Scholarships ($3k-$15k/yr) & TA/RA Funding",
    "ranking": "#182 Global (QS 2027)",
    "qsSubjectRankings": "QS 2026: #12 Agriculture & Forestry, #13 Education & Training, #23 Communication & Media Studies, #101-150 Computer Science & Info Systems, #36 (US News) Art & Design",
    "coverage": "Partial Aid",
    "amountValue": "$3,000–$15,000 / year (President's, Provost's, Dean's, 1855 Awards) | TA/RA Tuition Remission",
    "tuitionFee": "Flat-Rate Program Dependent (~$45,000 / year Nonresident Tuition)",
    "tuitionAmountNumeric": 45000,
    "hasFullRide": false,
    "hasPartialAid": true,
    "hasFinancialAid": true,
    "financialAidType": "Partial Merit",
    "financialAidDetails": "Michigan State University automatically considers admitted international undergraduate applicants for first-year merit awards including the President's ($15,000/yr), Provost's ($12,000/yr), Dean's ($10,000/yr), 1855 ($7,000/yr), Beaumont Tower ($5,000/yr), and Global Community ($3,000/yr) scholarships (renewable for 8 semesters). At the graduate level, qualifying Teaching and Research Assistantships (TA/RA) provide full/partial tuition waivers and monthly stipends.",
    "minGpa": "3.6+",
    "minSat": "1240 - 1420 (Median SAT)",
    "satRequirementCategory": "1300",
    "satPolicyDetails": "Test-Optional policy for undergraduate admissions. Median enrolled SAT score range is 1240 to 1420.",
    "minIelts": "6.5+",
    "ieltsCategory": "6.5",
    "toeflRequirement": "79+",
    "commonAppAccepted": true,
    "applicationPortalDetails": "Common Application & MSU Application Portal",
    "acceptanceRate": "88.0%",
    "deadline": "Nov 1 (Early Action / Priority Merit Deadline) / Feb 1 (Regular Decision)",
    "description": "Ranked #182 globally in QS 2027, MSU in East Lansing, MI is a world leader in Agriculture & Forestry (#12), Education (#13), and Communication (#23). Undergrads are automatically considered for merit awards up to $15,000/yr; TAs/RAs receive tuition waivers.",
    "overviewLong": "Michigan State University (MSU) is a major public land-grant research university in East Lansing, Michigan, founded in 1855. MSU is globally distinguished for its expansive research across agriculture & forestry, education & training, communication, computer science, and art & design.\n\nRanked #182 globally in the QS World University Rankings 2027, MSU features high-powered academic ecosystems in the Eli Broad College of Business, College of Engineering, and College of Agriculture and Natural Resources.\n\nFor international undergraduate applicants, MSU automatically considers candidates for first-year merit awards including the President's Scholarship ($15,000/year), Provost's Scholarship ($12,000/year), Dean's Scholarship ($10,000/year), and 1855 Scholarship ($7,000/year), renewable for up to 8 semesters. At the graduate level, qualifying Teaching and Research Assistantships (TA/RA) provide full or partial tuition waivers, comprehensive benefits, and academic-year stipends.",
    "topProgramsList": [
      {
        "name": "Agriculture & Forestry",
        "ranking": "#12 Global (QS 2026)",
        "description": "Standing as MSU's premier narrow baseline discipline worldwide, drawing on its long-standing legacy as a pioneer in crop sciences, soil management, and plant biology."
      },
      {
        "name": "Education & Training",
        "ranking": "#13 Global (QS 2026)",
        "description": "Managed through the highly acclaimed College of Education, leading international benchmarks for pedagogical advancements, learning design, and literacy curriculum tracking."
      },
      {
        "name": "Communication & Media Studies",
        "ranking": "#23 Global (QS 2026)",
        "description": "An elite media arts and social sciences anchor exploring digital communication ecology, public media diplomacy, and institutional public relations frameworks."
      },
      {
        "name": "Computer Science & Info Systems",
        "ranking": "#101-150 Global (QS 2026)",
        "description": "A core technical computing track specializing in large-scale software systems architectures, network configurations, and algorithmic programming pipelines."
      },
      {
        "name": "Art & Design",
        "ranking": "#36 (US News)",
        "description": "A prominent creative arts division that bridges fine studio arts with digital illustration frameworks, environmental architecture profiles, and mixed media tracking."
      }
    ],
    "allScholarshipsList": [
      {
        "id": "uni-037-1",
        "title": "MSU International First-Year Merit Scholarships",
        "amount": "$3,000 to $15,000 per Year (President's $15k, Provost's $12k, Dean's $10k, 1855 $7k)",
        "coverage": "Partial Aid",
        "eligibility": "Admitted international first-year undergraduate applicants with strong academic records.",
        "description": "Automatic consideration merit scholarships awarded upon admission, renewable for up to 8 consecutive semesters.",
        "deadline": "Nov 1 (Priority Early Action Deadline)",
        "requiresSeparateApp": false
      },
      {
        "id": "uni-037-2",
        "title": "MSU Academic Achievement Graduate Assistantships (TA/RA)",
        "amount": "Tuition Remission Waiver + Health Insurance + Monthly Living Stipend",
        "coverage": "Full Ride",
        "eligibility": "Admitted graduate and doctoral candidates appointed as Teaching or Research Assistants.",
        "description": "Provides tuition waiver benefits and monthly stipends under Graduate Employees Union/MSU agreements.",
        "deadline": "Jan 15 (Graduate Departmental Deadline)",
        "requiresSeparateApp": false
      }
    ],
    "degreesOffered": [
      "Undergraduate",
      "Graduate",
      "PhD"
    ],
    "tags": [
      "President's $15k Award",
      "Land-Grant Titan",
      "Broad Business",
      "Agriculture Leader",
      "USA",
      "QS #182"
    ],
    "requiresSeparateApp": false,
    "logoText": "MSU",
    "logoBg": "from-emerald-900 to-green-950"
  },

  {
    "id": "uni-038",
    "universityName": "Emory University",
    "location": "Atlanta, Georgia, United States",
    "country": "United States",
    "flag": "🇺🇸",
    "foundingYear": "1836",
    "scholarshipTitle": "Emory Woodruff Premier Merit Scholarship (Full Ride) & Laney PhD $43,260 Stipend",
    "ranking": "#183 Global (QS 2027)",
    "qsSubjectRankings": "QS 2026: #=16 Theology, Divinity & Religious Studies, #=45 Nursing, #54 Medicine, #51-100 History, #501-550 Computer Science & Info Systems",
    "coverage": "Full Ride",
    "amountValue": "Woodruff Premier Full Ride Merit Scholarship | Select Need-Based Aid | Laney PhD 100% Tuition + $43,260 Stipend",
    "tuitionFee": "$70,300 / year (Tuition) | Total COA ~$93,128 / year",
    "tuitionAmountNumeric": 70300,
    "hasFullRide": true,
    "hasPartialAid": true,
    "hasFinancialAid": true,
    "financialAidType": "Need-Based",
    "financialAidDetails": "Emory offers need-based financial aid to a select group of international applicants applying under Regular Decision. International students are also eligible for prestigious merit awards through the Emory College Scholars Program, headlined by the Robert W. Woodruff Scholarship (full tuition, room, and board for 8 semesters awarded to the top 1%). Laney Graduate School PhD candidates receive 100% full tuition scholarships and a guaranteed annual stipend of $43,260.",
    "minGpa": "3.85+",
    "minSat": "1450 - 1530 (Median SAT)",
    "satRequirementCategory": "1400",
    "satPolicyDetails": "Test-Optional policy for undergraduate admissions. Median enrolled SAT score range is 1450 to 1530.",
    "minIelts": "7.5+",
    "ieltsCategory": "7.5",
    "toeflRequirement": "100+",
    "commonAppAccepted": true,
    "applicationPortalDetails": "Common Application & Coalition Application",
    "acceptanceRate": "11.4%",
    "deadline": "Nov 15 (Emory College Scholar Program Priority Deadline) / Nov 1 (ED I) / Jan 1 (ED II & Regular Decision)",
    "description": "Ranked #183 globally in QS 2027, Emory in Atlanta, GA excels in Theology (#=16), Nursing (#=45), and Medicine (#54). Offers full Woodruff merit scholarships and Laney PhD packages ($43,260 stipend + full tuition).",
    "overviewLong": "Emory University is an elite private research university located in Atlanta, Georgia, founded in 1836. Emory is internationally renowned for its pioneering research and education across theology, nursing, medicine, history, and computer science.\n\nRanked #183 globally in the QS World University Rankings 2027, Emory maintains close integration with the Centers for Disease Control and Prevention (CDC) and major healthcare networks through the Woodruff Health Sciences Center, Goizueta Business School, and Laney Graduate School.\n\nFor international undergraduate applicants, Emory offers select need-based financial aid under Regular Decision and awards premier full merit scholarships through the Emory College Scholars Program, headlined by the Robert W. Woodruff Scholarship (covering 100% of tuition, room, and board for 8 semesters). At the doctoral level, Laney Graduate School provides 100% full tuition scholarships and guaranteed annual stipends of $43,260.",
    "topProgramsList": [
      {
        "name": "Theology, Divinity & Religious Studies",
        "ranking": "#=16 Global (QS 2026)",
        "description": "Standing as Emory's absolute highest narrow humanities placement globally, managed through the historic Candler School of Theology and celebrated for its extensive research archives and religious frameworks."
      },
      {
        "name": "Nursing",
        "ranking": "#=45 Global (QS 2026)",
        "description": "Housed within the globally esteemed Nell Hodgson Woodruff School of Nursing, leading international benchmarks for clinical practitioner training, public healthcare delivery models, and health system systems."
      },
      {
        "name": "Medicine",
        "ranking": "#54 Global (QS 2026)",
        "description": "Anchored by the world-class School of Medicine and tightly integrated with Emory Healthcare, driving cutting-edge benchmarks for global clinical trials, therapeutics, and patient-centered research."
      },
      {
        "name": "History",
        "ranking": "#51-100 Global (QS 2026)",
        "description": "A critically acclaimed humanities program celebrated for its extensive theoretical research footprint, deep archival studies, and historical sociological structures."
      },
      {
        "name": "Computer Science & Info Systems",
        "ranking": "#501-550 Global (QS 2026)",
        "description": "A boutique, highly collaborative public tech informatics sector focusing on software design methodologies, data handling frameworks, and automated system infrastructure."
      }
    ],
    "allScholarshipsList": [
      {
        "id": "uni-038-1",
        "title": "Robert W. Woodruff Premier Scholarship",
        "amount": "Full Tuition, Room, Board & Fees (Full Ride for 8 Semesters)",
        "coverage": "Full Ride",
        "eligibility": "Top 1% of high-achieving incoming first-year undergraduate applicants (Domestic & International).",
        "description": "Emory's premier undergraduate merit scholarship covering 100% of educational expenses for 8 semesters.",
        "deadline": "November 15 (Emory College Scholar Program Priority Deadline)",
        "requiresSeparateApp": true
      },
      {
        "id": "uni-038-2",
        "title": "Emory International Need-Based Financial Aid",
        "amount": "Need-Met Institutional Financial Aid Package",
        "coverage": "Full Ride",
        "eligibility": "Selected international undergraduate applicants applying under Regular Decision demonstrating financial need.",
        "description": "Limited need-based financial aid awarded to a select cohort of international applicants.",
        "deadline": "Jan 1 (Regular Decision Financial Aid Deadline)",
        "requiresSeparateApp": false
      },
      {
        "id": "uni-038-3",
        "title": "Laney Graduate School Doctoral Fellowship",
        "amount": "100% Full Tuition Scholarship + $43,260 Annual Living Stipend",
        "coverage": "Full Ride",
        "eligibility": "Admitted full-time PhD candidates in Laney Graduate School.",
        "description": "Comprehensive doctoral package featuring 100% tuition coverage and a guaranteed $43,260 annual stipend.",
        "deadline": "Dec 15 (Graduate Program Deadline)",
        "requiresSeparateApp": false
      }
    ],
    "degreesOffered": [
      "Undergraduate",
      "Graduate",
      "PhD"
    ],
    "tags": [
      "Woodruff Full Ride",
      "Laney $43.2k PhD Stipend",
      "Atlanta Health Hub",
      "Goizueta Business",
      "USA",
      "QS #183"
    ],
    "requiresSeparateApp": false,
    "logoText": "EMORY",
    "logoBg": "from-blue-900 to-indigo-950"
  },

  {
    "id": "uni-039",
    "universityName": "The Ohio State University",
    "location": "Columbus, Ohio, United States",
    "country": "United States",
    "flag": "🇺🇸",
    "foundingYear": "1870",
    "scholarshipTitle": "Ohio State Graduate Associateship (GRA/GTA Full Tuition + $26,073+ Stipend) & Presidential Fellowship",
    "ranking": "#=201 Global (QS 2027)",
    "qsSubjectRankings": "QS 2026: #8 Veterinary Science, #41 Communication & Media Studies, #=100 Mechanical, Aeronautical & Manufacturing Engineering, #201-300 Art & Design, #201-250 Computer Science & Info Systems",
    "coverage": "Partial Aid",
    "amountValue": "NO Undergrad University Merit Aid for Internationals | Full GRA/GTA Tuition Remission + $26,073–$34,764 Stipends",
    "tuitionFee": "$40,022 / year (Non-Resident Tuition) | Total Estimated COA ~$58,860–$60,000 / year",
    "tuitionAmountNumeric": 40022,
    "hasFullRide": false,
    "hasPartialAid": true,
    "hasFinancialAid": true,
    "financialAidType": "Partial Merit",
    "financialAidDetails": "IMPORTANT: Ohio State university-funded freshman merit scholarships are NOT available to international undergraduates. International undergraduates must rely on external/private funds. At the graduate level, Ohio State supports international candidates through Graduate Associateships (GRA/GTA/GAA) providing 100% full tuition/fee authorization, health insurance subsidies, and minimum 50% FTE stipends starting at $24,138/9-months ($2,682/month) up to $26,073+ scaling with departmental/grant allocations. The Presidential Fellowship provides dissertation-stage full funding.",
    "minGpa": "3.65+",
    "minSat": "1260 - 1420 (Median SAT)",
    "satRequirementCategory": "1300",
    "satPolicyDetails": "Test-Optional policy for undergraduate admissions. Median enrolled SAT score range is 1260 to 1420.",
    "minIelts": "6.5+",
    "ieltsCategory": "6.5",
    "toeflRequirement": "79+",
    "commonAppAccepted": true,
    "applicationPortalDetails": "Common Application",
    "acceptanceRate": "52.7%",
    "deadline": "Nov 1 (Early Action) / Jan 15 (Regular Decision)",
    "description": "Ranked #=201 globally in QS 2027, Ohio State in Columbus, OH is a world leader in Veterinary Science (#8), Communication (#41), and Mechanical Engineering (#=100). Note: International undergrads receive no university merit aid; graduate TAs/RAs receive 100% tuition authorization & $24k–$26k+ stipends.",
    "overviewLong": "The Ohio State University (OSU) is a major public land-grant research university in Columbus, Ohio, founded in 1870. As one of the largest research institutions in the United States, Ohio State is a powerhouse in veterinary science, communications, mechanical engineering, art & design, and computer science.\n\nRanked #=201 globally in the QS World University Rankings 2027, Ohio State boasts extensive research centers including the Max M. Fisher College of Business and College of Engineering.\n\nIMPORTANT POLICY NOTE: Ohio State university-funded freshman merit scholarships are NOT available to international undergraduates. International undergraduates must be self-funded or rely on external/private awards. However, at the graduate level, Ohio State supports international candidates through Graduate Associateships (GRA/GTA/GAA) that provide 100% tuition/fee authorization, health insurance subsidies, and minimum guaranteed 50% FTE stipends starting at $26,073/9-months ($34,764/12-months starting Autumn 2026), alongside prestigious Presidential Fellowships.",
    "topProgramsList": [
      {
        "name": "Veterinary Science",
        "ranking": "#8 Global (QS 2026)",
        "description": "Standing as Ohio State's absolute highest standalone narrow subject tier globally, this division serves as an international powerhouse for comprehensive animal clinical healthcare and translational biomedical trials."
      },
      {
        "name": "Communication & Media Studies",
        "ranking": "#41 Global (QS 2026)",
        "description": "Curated as an elite social sciences and media arts anchor, exploring mass communication frameworks, digital political dialogue architectures, and information processing sociology."
      },
      {
        "name": "Mechanical, Aeronautical & Manufacturing Engineering",
        "ranking": "#=100 Global (QS 2026)",
        "description": "A prominent public engineering department highly celebrated for its vehicle performance testing, advanced materials engineering, and structural aerodynamic research laboratories."
      },
      {
        "name": "Art & Design",
        "ranking": "#201-300 Global (QS 2026)",
        "description": "An interdisciplinary creative division blending classic studio arts with technical media frameworks, environmental designs, and collaborative computing illustration modules."
      },
      {
        "name": "Computer Science & Info Systems",
        "ranking": "#201-250 Global (QS 2026)",
        "description": "Housed within the expanding engineering infrastructure, focusing extensively on specialized software network engineering, dataset processing architectures, and algorithmic tracking models."
      }
    ],
    "allScholarshipsList": [
      {
        "id": "uni-039-1",
        "title": "Ohio State Graduate Associateships (GRA / GTA / GAA)",
        "amount": "100% Tuition & Fee Authorization + Health Insurance Subsidy + $24,138–$26,073+ Minimum Stipend (9 Months)",
        "coverage": "Full Ride",
        "eligibility": "Admitted graduate and doctoral candidates appointed as Research, Teaching, or Administrative Associates.",
        "description": "Primary graduate funding mechanism providing 100% tuition/fee coverage, health subsidies, and living stipends starting at $24,138/9-mo ($2,682/mo) up to $26,073+ depending on department allocations.",
        "deadline": "Dec 15 (Graduate Departmental Deadline)",
        "requiresSeparateApp": false
      },
      {
        "id": "uni-039-2",
        "title": "Ohio State Presidential Dissertation Fellowship",
        "amount": "100% Tuition Waiver + Monthly Stipend + 100% Health Subsidy + $500 Professional Grant",
        "coverage": "Full Ride",
        "eligibility": "Outstanding dissertation-stage doctoral candidates nominated by academic departments.",
        "description": "Prestigious dissertation-stage award providing full tuition authorization, living stipend, and full health subsidy for up to 3 semesters.",
        "deadline": "Departmental Nomination",
        "requiresSeparateApp": true
      }
    ],
    "degreesOffered": [
      "Undergraduate",
      "Graduate",
      "PhD"
    ],
    "tags": [
      "GRA/GTA Tuition Remission",
      "$26k+ Base Stipend",
      "Fisher Business",
      "Columbus Research Power",
      "USA",
      "QS #201"
    ],
    "requiresSeparateApp": false,
    "logoText": "OSU",
    "logoBg": "from-red-900 to-slate-950"
  },

  {
    "id": "uni-040",
    "universityName": "University of Florida",
    "location": "Gainesville, Florida, United States",
    "country": "United States",
    "flag": "🇺🇸",
    "foundingYear": "1853",
    "scholarshipTitle": "UF Gator Nation Out-of-State Tuition Waiver ($20,000/yr) & Presidential Merit Awards",
    "ranking": "#=228 Global (QS 2027)",
    "qsSubjectRankings": "QS 2026: #8 Sports-Related Subjects, #13 Agriculture & Forestry, #36 Pharmacy & Pharmacology, #=172 Computer Science & Info Systems, #51-100 Archaeology",
    "coverage": "Partial Aid",
    "amountValue": "Up to $20,000 / year ($80,000 over 4 yrs) Gator Nation Out-of-State Tuition Waiver | Sunshine & Presidential Awards",
    "tuitionFee": "$34,620 / year (Nonresident Tuition & Fees) | Total Estimated Budget ~$54,010 / year",
    "tuitionAmountNumeric": 34620,
    "hasFullRide": false,
    "hasPartialAid": true,
    "hasFinancialAid": true,
    "financialAidType": "Partial Merit",
    "financialAidDetails": "Admitted international freshmen at UF are automatically considered for competitive Out-of-State Tuition Waivers and Merit Scholarships, including the Gator Nation Scholarship ($20,000/yr up to $80k), Sunshine Scholarship ($16,000/yr), Alumni Scholarship ($8,000/yr), and Presidential Platinum ($10,000/yr). At the graduate level, 0.25+ FTE Graduate Assistantships remit in-state tuition, provide GatorGradCare health coverage, and pay 9-month base stipends starting at $20,600 ($30,000/12-months). Master's engineering students qualify for $3,300 Achievement Awards.",
    "minGpa": "3.8+",
    "minSat": "1320 - 1470 (Median SAT)",
    "satRequirementCategory": "1300",
    "satPolicyDetails": "Standardized testing required (SAT / ACT Mandatory per Florida Board of Governors). Median enrolled SAT score range is 1320 to 1470.",
    "minIelts": "6.5+",
    "ieltsCategory": "6.5",
    "toeflRequirement": "80+",
    "commonAppAccepted": true,
    "applicationPortalDetails": "Common Application",
    "acceptanceRate": "23.0%",
    "deadline": "Nov 1 (Priority Freshman Application Deadline)",
    "description": "Ranked #=228 globally in QS 2027, UF in Gainesville, FL is a world leader in Sports-Related Subjects (#8), Agriculture (#13), and Pharmacy (#36). Undergrads are considered for Gator Nation waivers up to $20,000/yr ($80k total); GAs receive tuition remission.",
    "overviewLong": "The University of Florida (UF) is Florida's flagship public land-grant research university in Gainesville, Florida, founded in 1853. Member of the Association of American Universities (AAU), UF is globally recognized for its world-class programs in sports science, agricultural systems, clinical pharmacology, computer science, and archaeology.\n\nRanked #=228 globally in the QS World University Rankings 2027, UF offers state-of-the-art computational facilities through the Herbert Wertheim College of Engineering and Warrington College of Business.\n\nFor international undergraduate applicants, UF automatically considers admitted freshmen for competitive Out-of-State Tuition Waivers and Merit Scholarships, including the Gator Nation Scholarship ($20,000/year up to $80,000 total), Sunshine Scholarship ($16,000/year), and Presidential Platinum Award ($10,000/year). Nonresident undergraduate tuition is $34,620/year ($54,010 total budget). At the graduate level, 0.25+ FTE Graduate Assistantships remit in-state tuition, provide GatorGradCare health coverage, and pay stipends starting at $20,600/9-months ($30,000/12-months).",
    "topProgramsList": [
      {
        "name": "Sports-Related Subjects",
        "ranking": "#8 Global (QS 2026)",
        "description": "Standing as the university's absolute highest standalone narrow subject tier globally, this department leads international benchmarks for kinesiology, movement science, and high-performance athletic analytics."
      },
      {
        "name": "Agriculture & Forestry",
        "ranking": "#13 Global (QS 2026)",
        "description": "Cultivated via the historic Institute of Food and Agricultural Sciences (IFAS), driving global frameworks in agronomic systems, tropical agriculture, and sustainable ecosystem management."
      },
      {
        "name": "Pharmacy & Pharmacology",
        "ranking": "#36 Global (QS 2026)",
        "description": "Managed in tandem with an elite clinical network, serving as a prominent global anchor for innovative therapeutics development, experimental drug discovery, and molecular toxicology pipelines."
      },
      {
        "name": "Computer Science & Info Systems",
        "ranking": "#=172 Global (QS 2026)",
        "description": "A flagship technical computing division focusing heavily on software infrastructure optimization, complex dataset network architectures, and advanced cybersecurity applications."
      },
      {
        "name": "Archaeology",
        "ranking": "#51-100 Global (QS 2026)",
        "description": "Recognized within the core humanities and sciences framework for intensive field-research, anthropological discovery tracking, and material cultural preservation studies."
      }
    ],
    "allScholarshipsList": [
      {
        "id": "uni-040-1",
        "title": "UF Gator Nation & Sunshine Out-of-State Tuition Waivers",
        "amount": "Up to $20,000 per Year ($80,000 Total over 4 Years)",
        "coverage": "Partial Aid",
        "eligibility": "Admitted international first-year undergraduate applicants with holistic academic excellence.",
        "description": "State-authorized tuition waivers reducing out-of-state tuition by up to $20,000 per year ($80,000 over four years).",
        "deadline": "Nov 1 (Priority Freshman Deadline)",
        "requiresSeparateApp": false
      },
      {
        "id": "uni-040-2",
        "title": "UF Presidential Merit Scholarships",
        "amount": "$5,000 to $10,000 per Year (Platinum $10k, Gold $8k, Presidential $5k)",
        "coverage": "Partial Aid",
        "eligibility": "High-achieving admitted undergraduate freshmen.",
        "description": "Four-year merit scholarships awarded to top incoming freshmen.",
        "deadline": "Nov 1 (Priority Freshman Deadline)",
        "requiresSeparateApp": false
      },
      {
        "id": "uni-040-3",
        "title": "UF Graduate Assistantships & Engineering Achievement Award",
        "amount": "In-State Tuition Remission + GatorGradCare Health Insurance + $20,600+ Base Stipend / $3,300 Engineering Award",
        "coverage": "Full Ride",
        "eligibility": "Admitted graduate and doctoral candidates appointed as Research or Teaching Assistants, or new engineering Master's students.",
        "description": "Remits in-state tuition fees, provides GatorGradCare health insurance, and pays living stipends.",
        "deadline": "Jan 15 (Graduate Departmental Deadline)",
        "requiresSeparateApp": false
      }
    ],
    "degreesOffered": [
      "Undergraduate",
      "Graduate",
      "PhD"
    ],
    "tags": [
      "Gator Nation $80k Waiver",
      "Sunshine $16k Award",
      "Wertheim Engineering",
      "Warrington Business",
      "USA",
      "QS #228"
    ],
    "requiresSeparateApp": false,
    "logoText": "UF",
    "logoBg": "from-orange-800 to-blue-950"
  },

  {
    "id": "uni-041",
    "universityName": "University of Maryland, College Park",
    "location": "College Park, Maryland, United States",
    "country": "United States",
    "flag": "🇺🇸",
    "foundingYear": "1856",
    "scholarshipTitle": "UMD Graduate Assistantships (GA/TA/RA) & Program Funding (NO Undergrad Int'l Merit Aid)",
    "ranking": "#=252 Global (QS 2027)",
    "qsSubjectRankings": "QS 2026: #18 Library & Information Management, #38 Linguistics, #41 Physics & Astronomy, #47 Earth & Marine Sciences, #=88 Computer Science & Info Systems",
    "coverage": "Partial Aid",
    "amountValue": "NO Undergrad Int'l Merit Aid | Graduate Assistantships (Full/Partial Tuition Waiver + Stipend + Benefits)",
    "tuitionFee": "$44,086 / year (Tuition) | ~$45,906 / year (+ Mandatory Fees; +$3,375 CS/Eng Differential)",
    "tuitionAmountNumeric": 44086,
    "hasFullRide": false,
    "hasPartialAid": true,
    "hasFinancialAid": true,
    "financialAidType": "Partial Merit",
    "financialAidDetails": "IMPORTANT SCHOLARSHIP ELIGIBILITY NOTE: UMD freshman merit scholarships are restricted to U.S. citizens and eligible non-citizens. Ordinary F-1 international undergraduates receive NO standard freshman merit aid. At the graduate level, full-time Graduate Assistantships (20 hrs/wk) provide 10 credit hours of tuition remission per semester, 100% covered individual student health insurance premiums, and a monthly stipend meeting UMD living thresholds. Over 70% of full-time research graduate students receive GA/RA/TA support.",
    "minGpa": "3.6+",
    "minSat": "1370 - 1510 (Median SAT)",
    "satRequirementCategory": "1400",
    "satPolicyDetails": "Test-Optional policy for undergraduate admissions. Median enrolled SAT score range is 1370 to 1510.",
    "minIelts": "7.0+",
    "ieltsCategory": "7.0",
    "toeflRequirement": "96+",
    "commonAppAccepted": true,
    "applicationPortalDetails": "Common Application & StandOut Admissions Network",
    "acceptanceRate": "44.5%",
    "deadline": "Nov 1 (Early Action / Priority Deadline) / Jan 20 (Regular Decision)",
    "description": "Ranked #=252 globally in QS 2027, UMD in College Park, MD is a world leader in Library & Info Management (#18), Linguistics (#38), and Physics (#41). Note: International undergrads do NOT receive university merit aid; graduate TAs/RAs receive tuition assistance & stipends.",
    "overviewLong": "The University of Maryland, College Park (UMD) is Maryland's flagship public research university and a distinguished member of the Association of American Universities (AAU). Located in College Park, Maryland, near Washington, D.C., UMD maintains premier partnerships with federal research laboratories, government agencies, and is a world-class center for information science, linguistics, physics, earth sciences, and computer science.\n\nRanked #=252 globally in the QS World University Rankings 2027, UMD is renowned for high-impact research across computer science, artificial intelligence, cybersecurity, engineering, information studies, business, economics, and public policy.\n\nIMPORTANT SCHOLARSHIP POLICY NOTE: UMD's official undergraduate merit scholarship eligibility policy restricts freshman merit awards (including Banneker/Key and President's Scholarships) to U.S. citizens and eligible non-citizens. Ordinary F-1 international undergraduates are NOT eligible for standard UMD freshman merit scholarships. However, at the graduate and doctoral levels, approximately 70% of full-time graduate students receive financial support through Graduate Assistantships (TA/RA/GA) that provide tuition remission, monthly stipends, and health benefits.",
    "topProgramsList": [
      {
        "name": "Library & Information Management",
        "ranking": "#18 Global (QS 2026)",
        "description": "Standing as UMD's highest narrow subject tier globally, this department focuses heavily on human-computer interaction, information ethics, digital preservation, and complex data architecture systems."
      },
      {
        "name": "Linguistics",
        "ranking": "#38 Global (QS 2026)",
        "description": "An elite humanities division internationally celebrated for language acquisition research, syntax structures, computational linguistics, and cognitive neurolinguistic modeling frameworks."
      },
      {
        "name": "Physics & Astronomy",
        "ranking": "#41 Global (QS 2026)",
        "description": "A premier physical sciences powerhouse driving advanced discoveries across quantum computing physics, plasma tracking mechanics, and observational astrophysics."
      },
      {
        "name": "Earth & Marine Sciences",
        "ranking": "#47 Global (QS 2026)",
        "description": "An interdisciplinary earth science specialty mapping atmospheric dynamics, climate changes, remote sensing systems, and regional geologic frameworks."
      },
      {
        "name": "Computer Science & Info Systems",
        "ranking": "#=88 Global (QS 2026)",
        "description": "Fully verified inside the global top 90, this department acts as a flagship computing hub for cybersecurity network deployments, large-scale cloud systems, and algorithmic theory tracks."
      }
    ],
    "allScholarshipsList": [
      {
        "id": "uni-041-1",
        "title": "UMD Graduate Assistantships (TA / RA / GA)",
        "amount": "Tuition Assistance Remission + Monthly Living Stipend + Health Benefits",
        "coverage": "Full Ride",
        "eligibility": "Full-time admitted graduate and PhD candidates holding qualifying assistantships.",
        "description": "Provides 10 credit hours of tuition remission per semester, 100% covered individual student health insurance premiums, and living stipends. Over 70% of full-time research graduate students receive support.",
        "deadline": "Jan 15 (Graduate Departmental Deadline)",
        "requiresSeparateApp": false
      }
    ],
    "degreesOffered": [
      "Undergraduate",
      "Graduate",
      "PhD"
    ],
    "tags": [
      "Washington DC Tech Hub",
      "Clark Engineering",
      "Smith Business",
      "Cybersecurity Leader",
      "USA",
      "QS #252"
    ],
    "requiresSeparateApp": false,
    "logoText": "UMD",
    "logoBg": "from-red-800 to-yellow-900"
  },

  {
    "id": "uni-042",
    "universityName": "University of Minnesota",
    "location": "Minneapolis-Saint Paul, Minnesota, United States",
    "country": "United States",
    "flag": "🇺🇸",
    "foundingYear": "1851",
    "scholarshipTitle": "UMN Global Excellence Scholarship ($10k-$20k/yr) & Graduate Assistantships",
    "ranking": "#=255 Global (QS 2027)",
    "qsSubjectRankings": "QS 2026: #27 Agriculture & Forestry, #=27 Chemical Engineering, #=43 Psychology, #=54 Pharmacy & Pharmacology, #201-300 Art & Design",
    "coverage": "Partial Aid",
    "amountValue": "$10,000–$20,000 / year (Global Excellence Scholarship) | TA/RA Graduate Full Tuition & Stipends",
    "tuitionFee": "$40,780 / year (Nonresident Undergraduate Tuition, 13+ Credits Flat Rate)",
    "tuitionAmountNumeric": 40780,
    "hasFullRide": false,
    "hasPartialAid": true,
    "hasFinancialAid": true,
    "financialAidType": "Partial Merit",
    "financialAidDetails": "The University of Minnesota Twin Cities automatically considers admitted international undergraduate applicants for the competitive Global Excellence Scholarship (GES), offering merit awards of $10,000, $15,000, or $20,000 per year (renewable up to 4 years). Full tuition scholarships are not offered to international undergraduates. At the graduate and PhD level, Research/Teaching Assistantships provide 100% full tuition benefits, health insurance subsidies, and living stipends ($29.95/hr CLA base rate).",
    "minGpa": "3.6+",
    "minSat": "1310 - 1490 (Median SAT)",
    "satRequirementCategory": "1300",
    "satPolicyDetails": "Test-Optional policy for undergraduate admissions. Median enrolled SAT score range is 1310 to 1490.",
    "minIelts": "6.5+",
    "ieltsCategory": "6.5",
    "toeflRequirement": "79+",
    "commonAppAccepted": true,
    "applicationPortalDetails": "Common Application & Golden Gopher Application",
    "acceptanceRate": "74.9%",
    "deadline": "Nov 1 (EA I) / Dec 1 (EA II & GES Priority Deadline) / Jan 1 (Regular Decision)",
    "description": "Ranked #=255 globally in QS 2027 (UMN System), UMN Twin Cities excels in Agriculture & Forestry (#27), Chemical Engineering (#=27), and Psychology (#=43). Undergrads are considered for Global Excellence Scholarships up to $20,000/yr; graduate TAs/RAs receive tuition benefits.",
    "overviewLong": "The University of Minnesota Twin Cities is the flagship public land-grant research university of the University of Minnesota System, located across Minneapolis and Saint Paul, Minnesota, founded in 1851.\n\nRanked #=255 globally in the QS World University Rankings 2027 (listed under the QS entity \"University of Minnesota System\"), UMN Twin Cities is an academic and research titan across agriculture, engineering, sciences, and creative fields.\n\nFor international undergraduate applicants, UMN automatically considers candidates for the competitive Global Excellence Scholarship (GES), offering merit awards up to $10,000–$20,000/year (renewable for 4 years). Note that UMN does not offer full tuition waivers for international undergraduates. At the graduate and doctoral levels, qualifying Research and Teaching Assistantships cover 100% tuition benefits, subsidized health insurance, and competitive hourly/annual stipends (with a minimum CLA GA rate of $29.95/hour).",
    "topProgramsList": [
      {
        "name": "Agriculture & Forestry",
        "ranking": "#27 Global (QS 2026)",
        "description": "Standing as one of the university's highest narrow disciplines globally, this track leads international research frameworks for agronomic development, crop biotechnology, and sustainable food production systems."
      },
      {
        "name": "Chemical Engineering",
        "ranking": "#=27 Global (QS 2026)",
        "description": "An elite technical division housed in the highly competitive engineering framework, celebrated worldwide for cross-disciplinary research spanning biomolecular systems, nanotechnology, and advanced material scaling."
      },
      {
        "name": "Psychology",
        "ranking": "#=43 Global (QS 2026)",
        "description": "A premier social science and life sciences powerhouse department heavily recognized for experimental psychology, cognitive neuroscience, and child developmental behavioral science frameworks."
      },
      {
        "name": "Pharmacy & Pharmacology",
        "ranking": "#=54 Global (QS 2026)",
        "description": "Managed in tandem with an elite academic health center network, serving as a prominent global anchor for innovative therapeutics development, experimental drug discovery, and molecular toxicology pipelines."
      },
      {
        "name": "Art & Design",
        "ranking": "#201-300 Global (QS 2026)",
        "description": "An interdisciplinary creative arts division that bridges fine studio arts with digital media layout structures, environmental architectures, and graphic animation tracks."
      }
    ],
    "allScholarshipsList": [
      {
        "id": "uni-042-1",
        "title": "UMN Global Excellence Scholarship (GES)",
        "amount": "$10,000 to $20,000 per Year (Renewable for 4 Years)",
        "coverage": "Partial Aid",
        "eligibility": "Admitted international first-year and transfer undergraduate applicants.",
        "description": "Competitive merit scholarship awarded upon admission based on academic excellence. Renewable for up to 4 consecutive years.",
        "deadline": "Dec 1 (Priority GES Application Deadline)",
        "requiresSeparateApp": false
      },
      {
        "id": "uni-042-2",
        "title": "UMN Graduate Assistantships & Departmental Fellowships",
        "amount": "Full Tuition Remission Waiver + Subsidized Health Insurance + Hourly/Annual Stipend ($29.95/hr Base Rate)",
        "coverage": "Full Ride",
        "eligibility": "Admitted graduate and doctoral candidates appointed as Teaching or Research Assistants.",
        "description": "Primary graduate funding mechanism in qualifying departments providing 100% tuition benefits, health insurance subsidies, and living stipends.",
        "deadline": "Dec 15 (Graduate Departmental Deadline)",
        "requiresSeparateApp": false
      }
    ],
    "degreesOffered": [
      "Undergraduate",
      "Graduate",
      "PhD"
    ],
    "tags": [
      "Global Excellence $20k",
      "Carlson Business",
      "Twin Cities Hub",
      "CSE Engineering",
      "USA",
      "QS #255"
    ],
    "requiresSeparateApp": false,
    "logoText": "UMN",
    "logoBg": "from-amber-800 to-red-950"
  },

  {
    "id": "uni-043",
    "universityName": "University of California, Irvine",
    "location": "Irvine, California, United States",
    "country": "United States",
    "flag": "🇺🇸",
    "foundingYear": "1965",
    "scholarshipTitle": "UCI Directors' Scholarship, Henry Samueli Engineering Award ($7.5k/yr) & PhD Fellowships",
    "ranking": "#=252 Global (QS 2027)",
    "qsSubjectRankings": "QS 2026: #43 Philosophy, #=121 Computer Science & Info Systems, #151-200 Psychology | THE: #101-125 Arts & Humanities",
    "coverage": "Partial Aid",
    "amountValue": "Directors' Merit Scholarship | Henry Samueli $7,500/yr Award | PhD $42,000 First-Year Fellowships",
    "tuitionFee": "$37,602 / year (Nonresident Supplemental Tuition) | ~$56,682 / year (Total Nonresident Tuition & Campus Fees)",
    "tuitionAmountNumeric": 56682,
    "hasFullRide": false,
    "hasPartialAid": true,
    "hasFinancialAid": true,
    "financialAidType": "Partial Merit",
    "financialAidDetails": "Admitted international undergraduates at UCI are considered for selective merit scholarships including the Directors' Scholarship and the Henry Samueli Endowed Engineering Scholarship ($7,500/yr renewable up to 4 yrs). Note: International students do not qualify for federal/California need-based aid via FAFSA/Dream Act. At the graduate level, UCI PhD candidates receive multi-year support packages (such as the Graduate Opportunity Fellowship providing up to $42,000 first-year stipends) covering 100% tuition, mandatory fees, health insurance, and TA/GSR living stipends for up to 5 years.",
    "minGpa": "3.8+",
    "minSat": "Test-Blind Policy (UC System)",
    "satRequirementCategory": "Optional",
    "satPolicyDetails": "Test-Blind policy for undergraduate admissions and scholarships per University of California system rules. SAT/ACT scores are not considered.",
    "minIelts": "7.0+",
    "ieltsCategory": "7.0",
    "toeflRequirement": "80+",
    "commonAppAccepted": false,
    "applicationPortalDetails": "University of California (UC) Application Portal",
    "acceptanceRate": "25.7%",
    "deadline": "Nov 30 (UC Application Filing Period: Oct 1 - Nov 30)",
    "description": "Ranked #=252 globally in QS 2027, UCI excels in Philosophy (#43), Computer Science (#=121), and Arts & Humanities. Total nonresident tuition & mandatory campus fees total ~$56,682/yr.",
    "overviewLong": "The University of California, Irvine (UCI) is a top-tier public research university in Irvine, Orange County, California, founded in 1965 as part of the University of California system.\n\nRanked #=252 globally in the QS World University Rankings 2027, UCI is internationally celebrated for excellence in philosophy, computer science, psychology, and the arts & humanities.\n\nInternational undergraduates at UCI are considered for selective merit awards including the Directors' Scholarship and the Henry Samueli Endowed Engineering Scholarship ($7,500/year renewable up to 4 years). Note: International students do not qualify for need-based federal or California state aid via FAFSA/Dream Act. At the graduate level, UCI PhD candidates receive robust multi-year support packages (such as the Graduate Opportunity Fellowship providing up to $42,000 in first-year stipends) covering 100% tuition, mandatory fees, health insurance, and TA/GSR living stipends for up to 5 years.",
    "topProgramsList": [
      {
        "name": "Philosophy",
        "ranking": "#43 Global (QS 2026)",
        "description": "Standing as UCI's top narrow academic discipline globally, recognized internationally through its specialized logic and philosophy of science research groups."
      },
      {
        "name": "Computer Science & Info Systems",
        "ranking": "#=121 Global (QS 2026)",
        "description": "The verified global position for UCI's core computing department, focusing on software architectures and information security networks."
      },
      {
        "name": "Psychology",
        "ranking": "#151-200 Global (QS 2026)",
        "description": "A comprehensive behavioral science track analyzing cognitive functions and developmental psychology frameworks."
      },
      {
        "name": "Arts & Humanities (Includes English)",
        "ranking": "THE #101–125 Global",
        "description": "Recognized within the Times Higher Education (THE) Subject Rankings, providing global distinction for creative writing, critical theory, and historical literary prose."
      }
    ],
    "allScholarshipsList": [
      {
        "id": "uni-043-1",
        "title": "UCI Directors' Scholarship & Regent Merit Awards",
        "amount": "Merit-Based Tuition Grant (Varies)",
        "coverage": "Partial Aid",
        "eligibility": "High-achieving admitted undergraduate applicants (Domestic Out-of-State & International F-1).",
        "description": "Selective merit scholarship awarded upon admission recognizing extraordinary academic accomplishment.",
        "deadline": "Nov 30 (UC Application Deadline)",
        "requiresSeparateApp": false
      },
      {
        "id": "uni-043-2",
        "title": "Henry Samueli Endowed Engineering Scholarship",
        "amount": "$7,500 per Year (Renewable up to 4 Years)",
        "coverage": "Partial Aid",
        "eligibility": "High-achieving admitted freshman applicants to the Henry Samueli School of Engineering.",
        "description": "School-specific engineering scholarship awarded based on academic excellence.",
        "deadline": "Nov 30 (UC Application Deadline)",
        "requiresSeparateApp": false
      },
      {
        "id": "uni-043-3",
        "title": "UCI Graduate Opportunity & Doctoral Support Fellowships",
        "amount": "100% Tuition & Fee Waiver + Health Insurance + Up to $42,000 First-Year Living Stipend",
        "coverage": "Full Ride",
        "eligibility": "Admitted PhD and qualifying doctoral candidates.",
        "description": "Multi-year doctoral fellowship package offering full tuition, mandatory fees, health insurance, and living stipends for up to 5 years through TA/GSR appointments.",
        "deadline": "Dec 15 (Graduate Division Deadline)",
        "requiresSeparateApp": false
      }
    ],
    "degreesOffered": [
      "Undergraduate",
      "Graduate",
      "PhD"
    ],
    "tags": [
      "Bren School of ICS",
      "Directors' Scholarship",
      "Orange County Tech",
      "Samueli Engineering",
      "USA",
      "QS #252"
    ],
    "requiresSeparateApp": false,
    "logoText": "UCI",
    "logoBg": "from-blue-800 to-amber-700"
  },

  {
    "id": "uni-044",
    "universityName": "University of Rochester",
    "location": "Rochester, New York, United States",
    "country": "United States",
    "flag": "🇺🇸",
    "foundingYear": "1850",
    "scholarshipTitle": "UR Need-Based Aid (Meets 100% Demonstrated Need via CSS Profile) + Merit Scholarships & CS PhD Full Ride",
    "ranking": "#251 Global (QS 2027)",
    "qsSubjectRankings": "QS 2026: #19 Performing Arts, #=134 Physics & Astronomy, #=151 Economics & Econometrics, #=151-200 Medicine, #351-400 Computer Science & Info Systems",
    "coverage": "Full Ride",
    "amountValue": "Meets 100% Demonstrated Need (Grants & Aid via CSS Profile) | Independent Merit Scholarships | PhD Full Ride",
    "tuitionFee": "$71,750 / year (Tuition) | Total Residential COA ~$96,022 / year",
    "tuitionAmountNumeric": 71750,
    "hasFullRide": true,
    "hasPartialAid": true,
    "hasFinancialAid": true,
    "financialAidType": "Need-Based",
    "financialAidDetails": "The University of Rochester explicitly offers need-based financial aid to international undergraduate applicants, using the CSS Profile to meet 100% of demonstrated financial need for admitted students in Arts & Sciences, Hajim Engineering, and Simon Business School. Independent merit scholarships are also awarded regardless of need. At the doctoral level, all admitted PhD candidates in good standing (including Computer Science) receive a 100% full tuition scholarship, full health insurance, and an annual living stipend for 4–6 years.",
    "minGpa": "3.8+",
    "minSat": "1380 - 1520 (Median SAT)",
    "satRequirementCategory": "1400",
    "satPolicyDetails": "Test-Optional policy for undergraduate admissions. Median enrolled SAT score range is 1380 to 1520.",
    "minIelts": "7.0+ (7.5 Recommended)",
    "ieltsCategory": "7.0",
    "toeflRequirement": "100+",
    "commonAppAccepted": true,
    "applicationPortalDetails": "Common Application & Coalition Application",
    "acceptanceRate": "38.9%",
    "deadline": "Nov 1 (ED I) / Jan 5 (ED II & Regular Decision)",
    "description": "Ranked #251 globally in QS 2027, Rochester in NY excels in Performing Arts (#19), Physics & Astronomy (#=134), and Economics & Econometrics (#=151). Meets 100% of demonstrated need for international undergrads via CSS Profile.",
    "overviewLong": "The University of Rochester is a prestigious private research university in Rochester, New York, founded in 1850. Rochester is globally distinguished for cutting-edge programs in performing arts, physical sciences, economics, medicine, and computer science.\n\nRanked #251 globally in the QS World University Rankings 2027, Rochester is one of the most generous private research universities in the United States for international applicants.\n\nFor international undergraduates, Rochester explicitly provides need-based financial aid through the CSS Profile and meets 100% of demonstrated financial need for admitted students in Arts & Sciences, Hajim Engineering, and Simon Business School, alongside independent merit scholarships. At the doctoral level, all admitted PhD candidates in good standing (including Computer Science) receive a 100% full tuition scholarship, full health insurance coverage, and a competitive annual living stipend.",
    "topProgramsList": [
      {
        "name": "Performing Arts",
        "ranking": "#19 Global (QS 2026)",
        "description": "Cultivated through the world-famous Eastman School of Music, this flagship creative arts division stands as an international benchmark for virtuoso performance, musical theory, and composition."
      },
      {
        "name": "Physics & Astronomy",
        "ranking": "#=134 Global (QS 2026)",
        "description": "A premier physical sciences powerhouse renowned for optical physics breakthroughs via the Institute of Optics, alongside cutting-edge research in high-energy density physics and quantum mechanics."
      },
      {
        "name": "Economics & Econometrics",
        "ranking": "#=151 Global (QS 2026)",
        "description": "An elite quantitative division heavily celebrated for historical contributions to macroeconomic modeling, empirical policy studies, and political economy frameworks."
      },
      {
        "name": "Medicine",
        "ranking": "#=151-200 Global (QS 2026)",
        "description": "Anchored by the University of Rochester Medical Center (URMC), driving multi-specialty clinical research pipelines, experimental therapeutics, and public healthcare delivery models."
      },
      {
        "name": "Computer Science & Info Systems",
        "ranking": "#351-400 Global (QS 2026)",
        "description": "A specialized, highly collaborative technical computing track focusing on the foundations of artificial intelligence, human-computer interface design, and data network architectures."
      }
    ],
    "allScholarshipsList": [
      {
        "id": "uni-044-1",
        "title": "University of Rochester International Need-Based Financial Aid",
        "amount": "Up to 100% Demonstrated Financial Need (Tuition, Room & Board Grants)",
        "coverage": "Full Ride",
        "eligibility": "Admitted international undergraduate applicants in Arts & Sciences, Hajim Engineering, and Simon Business submitting the CSS Profile.",
        "description": "Institutional grant aid meeting 100% of demonstrated financial need for admitted international undergraduates.",
        "deadline": "Jan 5 (Regular Decision Financial Aid Deadline)",
        "requiresSeparateApp": true
      },
      {
        "id": "uni-044-2",
        "title": "Rochester International Merit Scholarships",
        "amount": "Partial to Full Tuition Merit Grants",
        "coverage": "Partial Aid",
        "eligibility": "Admitted undergraduate applicants demonstrating outstanding academic and extra-curricular achievement.",
        "description": "Merit-based scholarships awarded independently of financial need at the time of admission.",
        "deadline": "Jan 5 (Regular Decision Deadline)",
        "requiresSeparateApp": false
      },
      {
        "id": "uni-044-3",
        "title": "Rochester Doctoral Fellowship (CS & All PhD Disciplines)",
        "amount": "100% Full Tuition Scholarship + Full Health Insurance + Annual Living Stipend",
        "coverage": "Full Ride",
        "eligibility": "Admitted full-time PhD candidates in good academic standing.",
        "description": "Comprehensive doctoral funding package providing 100% tuition coverage, health insurance, and competitive living stipends for 4–6 years.",
        "deadline": "Dec 15 (Graduate Departmental Deadline)",
        "requiresSeparateApp": false
      }
    ],
    "degreesOffered": [
      "Undergraduate",
      "Graduate",
      "PhD"
    ],
    "tags": [
      "Meets 100% Need Int'l",
      "Eastman Music #19",
      "CSS Profile Aid",
      "Hajim Engineering",
      "USA",
      "QS #251"
    ],
    "requiresSeparateApp": false,
    "logoText": "UR",
    "logoBg": "from-yellow-700 to-blue-950"
  },

  {
    "id": "uni-045",
    "universityName": "University of Massachusetts Amherst",
    "location": "Amherst, Massachusetts, United States",
    "country": "United States",
    "flag": "🇺🇸",
    "foundingYear": "1863",
    "scholarshipTitle": "UMass International Undergraduate Merit Awards (Up to $16,000/yr) & Graduate Assistantships ($41.24/hr min)",
    "ranking": "#260 Global (QS 2027)",
    "qsSubjectRankings": "QS 2026: Linguistics #5 Global (#2 US) | Development Studies #20 Global (#7 US) | Sports-Related Subjects #51-100 Global (#8 US) | Hospitality & Leisure Management #51-100 Global (#10 US) | Mechanical, Manufacturing and Aeronautical engineering #201-250",
    "coverage": "Partial Aid",
    "amountValue": "Up to $16,000 / year (First-Year Undergrad Merit) | Graduate Assistantships ($41.24/hr minimum)",
    "tuitionFee": "$43,819 / year (Tuition & Fees) | Total Estimated COA $69,465 / year",
    "tuitionAmountNumeric": 43819,
    "hasFullRide": false,
    "hasPartialAid": true,
    "hasFinancialAid": true,
    "financialAidType": "Merit-Based",
    "financialAidDetails": "UMass Amherst offers academic merit awards up to $16,000/year to qualified international first-year undergraduates (automatic consideration during admissions; transfer students excluded). UMass does NOT offer need-based financial aid or full-ride scholarships to international undergraduates. At the graduate level, Master's and PhD students may receive Graduate Assistantships (TA/RA/GA) paying a published minimum of $41.24/hr (Fall 2026/Spring 2027), providing tuition credits and health insurance reductions.",
    "minGpa": "3.7+",
    "minSat": "1330 - 1500 (Median SAT)",
    "satRequirementCategory": "1300",
    "satPolicyDetails": "Test-Optional admissions policy. Enrolled student SAT middle 50% range is 1330 to 1500.",
    "minIelts": "6.5+",
    "ieltsCategory": "6.5",
    "toeflRequirement": "80+",
    "commonAppAccepted": true,
    "applicationPortalDetails": "Common Application",
    "acceptanceRate": "63.5%",
    "deadline": "Nov 5 (Early Action) / Jan 15 (Regular Decision)",
    "description": "Ranked #260 globally in QS 2027, UMass Amherst is renowned for Linguistics (#5) and Development Studies (#20), and offers up to $16k/yr first-year international merit awards.",
    "overviewLong": "The University of Massachusetts Amherst is the flagship public research university of the Commonwealth of Massachusetts, founded in 1863 in Amherst, Massachusetts. UMass Amherst is globally recognized for high-impact research, particularly through the Manning College of Information and Computer Sciences, Isenberg School of Management, and the College of Engineering.\n\nRanked #260 globally in the QS World University Rankings 2027, UMass Amherst automatically considers qualified international first-year undergraduate applicants for academic merit awards of up to $16,000/year. Note that UMass Amherst does not offer need-based university aid to foreign undergraduates.\n\nAt the graduate level, international Master's and PhD candidates can access Graduate Assistantships (TA/RA/GA) with a published Fall 2026/Spring 2027 minimum hourly rate of $41.24/hour, which provide tuition credits and health benefit reductions.",
    "topProgramsList": [
      {
        "name": "Linguistics",
        "ranking": "#5 Globally | #2 in the US (QS 2026)",
        "description": "World-leading linguistics research program, ranked #5 globally and #2 in the United States."
      },
      {
        "name": "Development Studies",
        "ranking": "#20 Globally | #7 in the US (QS 2026)",
        "description": "Leading research and education in international development, economic development, and global sustainability."
      },
      {
        "name": "Sports-Related Subjects",
        "ranking": "#51-100 Globally | #8 in the US (QS 2026)",
        "description": "Top-tier global standing in sports management, kinesiology, and exercise science."
      },
      {
        "name": "Hospitality & Leisure Management",
        "ranking": "#51-100 Globally | #10 in the US (QS 2026)",
        "description": "Isenberg School of Management hospitality and tourism management program."
      },
      {
        "name": "Mechanical, Manufacturing and Aeronautical engineering",
        "ranking": "#201-250 Globally (QS 2026)",
        "description": "Mechanical, manufacturing, and aerospace systems engineering, fluid dynamics, and advanced materials research."
      }
    ],
    "allScholarshipsList": [
      {
        "id": "uni-045-1",
        "title": "UMass International First-Year Academic Merit Award",
        "amount": "Up to $16,000 / year (Renewable for 4 Years)",
        "coverage": "Partial Aid",
        "eligibility": "Qualified international first-year undergraduate applicants.",
        "description": "Merit-based academic awards given automatically during admission evaluation. International transfer students are not eligible.",
        "deadline": "Jan 15 (Regular Decision Admission Deadline)",
        "requiresSeparateApp": false
      },
      {
        "id": "uni-045-2",
        "title": "UMass Graduate Assistantships (GA / TA / RA)",
        "amount": "$41.24 / hour Minimum Base Rate + Tuition Credit + Health Insurance Benefits",
        "coverage": "Full Ride",
        "eligibility": "Enrolled full-time graduate students appointed to TA, RA, or GA positions.",
        "description": "Graduate assistantships providing $41.24/hr base rate (~$31,342/yr for standard 20-hr/wk academic year), tuition credits, and health benefit reductions.",
        "deadline": "Varies by Graduate Department",
        "requiresSeparateApp": true
      }
    ],
    "degreesOffered": [
      "Undergraduate",
      "Graduate",
      "PhD"
    ],
    "tags": [
      "UMass Amherst",
      "Public Flagship",
      "Up to $16k Merit",
      "GA $41.24/hr",
      "USA",
      "QS #260"
    ],
    "requiresSeparateApp": false,
    "logoText": "UMass",
    "logoBg": "from-red-900 to-amber-950"
  },

  {
    "id": "uni-046",
    "universityName": "Vanderbilt University",
    "location": "Nashville, Tennessee, United States",
    "country": "United States",
    "flag": "🇺🇸",
    "foundingYear": "1873",
    "scholarshipTitle": "Vanderbilt Need-Based Aid (Meets 100% Need, No Loans) + Cornelius Vanderbilt Full-Tuition Merit & IGP $40k PhD Stipend",
    "ranking": "#265 Global (QS 2027)",
    "qsSubjectRankings": "QS 2026: #21 Education & Training, #59 Medicine, #61 Pharmacy & Pharmacology, #=151-200 Biological Sciences, #201-250 Politics",
    "coverage": "Full Ride",
    "amountValue": "Meets 100% Demonstrated Need (No Loans; Range $16k–$100k/yr) | Cornelius Vanderbilt Full Tuition | IGP PhD $40,000/yr + Relocation",
    "tuitionFee": "$69,822 / year (Tuition) | Mandatory Direct COA $96,896 / year",
    "tuitionAmountNumeric": 69822,
    "hasFullRide": true,
    "hasPartialAid": true,
    "hasFinancialAid": true,
    "financialAidType": "Need-Based",
    "financialAidDetails": "Vanderbilt explicitly offers need-based financial aid to international undergraduate applicants, meeting 100% of demonstrated financial need (without student loans) for admitted students via CSS Profile or ISFAA (awards range from $16,815 to $99,998/year). Additionally, international applicants are fully eligible for signature merit scholarships like the Cornelius Vanderbilt Scholarship (Full Tuition + summer stipend) and Ingram Scholars Program. At the doctoral level, PhD programs (like ECE and IGP) are fully funded, with IGP providing 100% tuition/fees/health coverage, a $40,000 annual stipend, and $2,000 relocation support.",
    "minGpa": "3.9+",
    "minSat": "1500 - 1560 (Median SAT)",
    "satRequirementCategory": "1500",
    "satPolicyDetails": "Test-Optional admissions policy. Enrolled student middle 50% SAT score range is 1500 to 1560.",
    "minIelts": "7.0+ (7.5 Recommended)",
    "ieltsCategory": "7.0",
    "toeflRequirement": "100+",
    "commonAppAccepted": true,
    "applicationPortalDetails": "Common Application & Coalition Application",
    "acceptanceRate": "5.6%",
    "deadline": "Nov 1 (ED I) / Jan 1 (ED II & Regular Decision) / Dec 1 (Merit Scholarship Deadline)",
    "description": "Ranked #265 globally in QS 2027, Vanderbilt excels in Education & Training (#21), Medicine (#59), and Pharmacy (#61). Offers full-tuition Cornelius Vanderbilt merit awards & meets 100% of demonstrated need.",
    "overviewLong": "Vanderbilt University is a world-renowned private research university founded in 1873 in Nashville, Tennessee. Vanderbilt pairs elite undergraduate liberal arts education with top-tier research programs across Peabody College, School of Medicine, and the biological sciences.\n\nRanked #265 globally in the QS World University Rankings 2027, UMass Amherst automatically considers qualified international first-year undergraduate applicants for academic merit awards of up to $16,000/year. Note that UMass Amherst does not offer need-based university aid to foreign undergraduates.\n\nAt the graduate level, international Master's and PhD candidates can access Graduate Assistantships (TA/RA/GA) with a published Fall 2026/Spring 2027 minimum hourly rate of $41.24/hour, which provide tuition credits and health benefit reductions.",
    "topProgramsList": [
      {
        "name": "Education & Training",
        "ranking": "#21 Global (QS 2026)",
        "description": "Housed within the internationally acclaimed Peabody College, standing as Vanderbilt's highest narrow global program, renowned for pedagogical advancements, learning design, and organizational leadership metrics."
      },
      {
        "name": "Medicine",
        "ranking": "#59 Global (QS 2026)",
        "description": "Anchored by the elite School of Medicine and tightly integrated with Vanderbilt Health, driving high-impact clinical research pipelines, patient care models, and multi-specialty therapeutics."
      },
      {
        "name": "Pharmacy & Pharmacology",
        "ranking": "#61 Global (QS 2026)",
        "description": "A prominent health science division focusing heavily on biochemical molecular engineering, experimental drug discovery, and translational laboratory testing."
      },
      {
        "name": "Biological Sciences",
        "ranking": "#=151-200 Global (QS 2026)",
        "description": "A core technical and life science powerhouse exploring cell biology infrastructures, genomic mutations, and computational biochemistry tracks."
      },
      {
        "name": "Politics",
        "ranking": "#201-250 Global (QS 2026)",
        "description": "A premier social science and humanities anchor investigating international governance frameworks, empirical policy models, and historical political theory."
      }
    ],
    "allScholarshipsList": [
      {
        "id": "uni-046-1",
        "title": "Vanderbilt International Need-Based Financial Aid",
        "amount": "Up to 100% Demonstrated Need ($16,815 to $99,998 / year; No Student Loans)",
        "coverage": "Full Ride",
        "eligibility": "Admitted international undergraduate applicants demonstrating financial need via CSS Profile or ISFAA.",
        "description": "Institutional grant packages meeting 100% of demonstrated need without student loans for admitted international undergraduates.",
        "deadline": "Jan 1 (Regular Decision Financial Aid Deadline)",
        "requiresSeparateApp": true
      },
      {
        "id": "uni-046-2",
        "title": "Cornelius Vanderbilt Scholarship",
        "amount": "100% Full Tuition Scholarship + Summer Immersive Experience Stipend",
        "coverage": "Full Tuition",
        "eligibility": "Admitted first-year undergraduate applicants demonstrating outstanding academic achievement and leadership.",
        "description": "Full-tuition merit scholarship renewable for 4 years with a 3.0 GPA, plus a one-time summer immersive research stipend.",
        "deadline": "Dec 1 (Signature Scholarship Deadline)",
        "requiresSeparateApp": true
      },
      {
        "id": "uni-046-3",
        "title": "Vanderbilt IGP Doctoral Fellowship (Biomedical & PhD Disciplines)",
        "amount": "100% Tuition, Fees & Health Coverage + $40,000 / year Stipend + $2,000 Relocation",
        "coverage": "Full Ride",
        "eligibility": "Admitted PhD candidates in the Interdisciplinary Graduate Program (IGP) and Engineering PhD programs.",
        "description": "Full doctoral funding package providing 100% tuition, fees, health insurance, $40k/yr stipend, and $2k relocation allowance.",
        "deadline": "Dec 1 (Graduate Department Deadline)",
        "requiresSeparateApp": false
      }
    ],
    "degreesOffered": [
      "Undergraduate",
      "Graduate",
      "PhD"
    ],
    "tags": [
      "Meets 100% Need Int'l",
      "Cornelius Full Tuition",
      "No Loan Aid",
      "IGP $40k PhD",
      "USA",
      "QS #265"
    ],
    "requiresSeparateApp": true,
    "logoText": "VANDY",
    "logoBg": "from-amber-600 to-black"
  },

  {
    "id": "uni-047",
    "universityName": "University of Virginia",
    "location": "Charlottesville, Virginia, United States",
    "country": "United States",
    "flag": "🇺🇸",
    "foundingYear": "1819",
    "scholarshipTitle": "UVA Self-Funded Int'l Undergrad Policy (UWC Davis Exception) & BIMS/Engineering PhD Funding ($39k–$40k Stipend)",
    "ranking": "#268 Global (QS 2027)",
    "qsSubjectRankings": "QS 2026: Law & Legal Studies #47 Global | Education Top 100 | Politics & Int'l Studies Top 150 | Computer Science Top 200–250 | Business & Management Studies #151-200",
    "coverage": "Partial Aid",
    "amountValue": "Self-Funded Undergrad (No Standard Int'l Aid; UWC/Davis Exception Only) | PhD Stipends up to $40,140/yr",
    "tuitionFee": "$68,948 / year (Engineering/CS Out-of-State) | Arts & Sciences $57,432 - $60,656 / year",
    "tuitionAmountNumeric": 68948,
    "hasFullRide": false,
    "hasPartialAid": false,
    "hasFinancialAid": false,
    "financialAidType": "Need-Based",
    "financialAidDetails": "Official University of Virginia policy states that UVA has NO university-funded financial aid, merit scholarships, or loans available for ordinary foreign-national international undergraduates (admitted UWC scholars are the sole exception via the Davis Foundation). Foreign undergraduates must demonstrate full financial self-sufficiency. At the graduate level, Master's funding is program-dependent, while PhD candidates in disciplines such as Biomedical Sciences (BIMS) receive full tuition support, health insurance, and annual living stipends of $39,140 to $40,140.",
    "minGpa": "3.8+",
    "minSat": "1400 - 1540 (Median SAT)",
    "satRequirementCategory": "1400",
    "satPolicyDetails": "Test-Optional admissions policy. Enrolled student SAT middle 50% range is 1400 to 1540.",
    "minIelts": "7.0+",
    "ieltsCategory": "7.0",
    "toeflRequirement": "90+",
    "commonAppAccepted": true,
    "applicationPortalDetails": "Common Application",
    "acceptanceRate": "16.3%",
    "deadline": "Nov 1 (Early Decision / Early Action) / Jan 5 (Regular Decision)",
    "description": "Ranked #268 globally in QS 2027, UVA excels in Law and Legal Studies (#47) and Education (Top 100). Note: Ordinary international undergrads must self-fund; graduate assistants receive stipends.",
    "overviewLong": "The University of Virginia (UVA) is a premier public research university founded by Thomas Jefferson in 1819 in Charlottesville, Virginia. UVA is world-famous for its historic academics, top-tier School of Engineering and Applied Science, School of Data Science, McIntire School of Commerce, and Darden School of Business.\n\nRanked #268 globally in the QS World University Rankings 2027, UVA enforces a clear policy regarding international undergraduate financial assistance: UVA does not offer university-funded financial aid, merit scholarships, or loans to ordinary foreign-national undergraduate applicants (the only exception being admitted United World College graduates via Davis Foundation Scholarships). Consequently, international undergraduate applicants must certify full financial self-sufficiency.\n\nAt the graduate level, funding varies by program. PhD candidates in areas such as Biomedical Sciences (BIMS) and Engineering receive full tuition support, health insurance, and annual living stipends ranging from $39,140 to $40,140/year.",
    "topProgramsList": [
      {
        "name": "Law and Legal Studies",
        "ranking": "#47 Global (QS 2026)",
        "description": "Consistently top-ranked law discipline globally, renowned for constitutional law, corporate law, international law, and public service."
      },
      {
        "name": "School of Education & Human Development",
        "ranking": "Top 100 Global (QS 2026)",
        "description": "Leading educational research, curriculum design, educational policy, and human development science."
      },
      {
        "name": "Politics & International Studies (Batten School)",
        "ranking": "Top 150 Global (QS 2026)",
        "description": "Combines political science, public policy, quantitative leadership, social entrepreneurship, and international relations."
      },
      {
        "name": "Computer Science & School of Engineering",
        "ranking": "Top 200–250 Global (QS 2026)",
        "description": "Computer science, cyber-physical systems, software engineering, machine learning, and electrical & computer engineering."
      },
      {
        "name": "Business & Management Studies",
        "ranking": "#151-200 Global (QS 2026)",
        "description": "McIntire School of Commerce and Darden School of Business offering elite corporate finance, accounting, and management."
      }
    ],
    "allScholarshipsList": [
      {
        "id": "uni-047-1",
        "title": "UWC Davis International Scholarship (Exception Only)",
        "amount": "Need-Based Financial Aid (For Admitted UWC Graduates)",
        "coverage": "Partial Aid",
        "eligibility": "Admitted international undergraduates who graduated from a United World College (UWC) school.",
        "description": "Exclusive need-based scholarship support for admitted UWC graduates through the Davis Foundation.",
        "deadline": "Jan 5 (Regular Decision Deadline)",
        "requiresSeparateApp": true
      },
      {
        "id": "uni-047-2",
        "title": "UVA Doctoral Fellowship (BIMS & Engineering PhD)",
        "amount": "Full Tuition + Health Insurance + $39,140 to $40,140 / year Stipend",
        "coverage": "Full Ride",
        "eligibility": "Admitted full-time PhD candidates in Biomedical Sciences (BIMS), Engineering, and science departments.",
        "description": "Comprehensive doctoral support providing 100% tuition coverage, health insurance, and annual living stipends.",
        "deadline": "Dec 1 (Graduate Department Deadline)",
        "requiresSeparateApp": false
      }
    ],
    "degreesOffered": [
      "Undergraduate",
      "Graduate",
      "PhD"
    ],
    "tags": [
      "Public Flagship",
      "No Int'l Undergrad Aid",
      "UWC Davis Exception",
      "BIMS PhD $40k",
      "USA",
      "QS #268"
    ],
    "requiresSeparateApp": false,
    "logoText": "UVA",
    "logoBg": "from-blue-900 to-orange-600"
  },

  {
    "id": "uni-048",
    "universityName": "Dartmouth College",
    "location": "Hanover, New Hampshire, United States",
    "country": "United States",
    "flag": "🇺🇸",
    "foundingYear": "1769",
    "scholarshipTitle": "Dartmouth Need-Blind Int'l Aid (Meets 100% Need, No Loans, Avg $74.7k) & Guarini PhD Full Ride ($49.8k Stipend)",
    "ranking": "#=270 Global (QS 2027)",
    "qsSubjectRankings": "QS 2026: #51-100 Marketing, #101-150 Politics & International Studies, #=111 Economics & Econometrics, #136 Business & Management Studies, #151-200 English Language & Literature, #401-450 Computer Science & Info Systems",
    "coverage": "Full Ride",
    "amountValue": "Meets 100% Demonstrated Need (No Loans; Avg Award $74,765/yr; Free Tuition <$175k Income) | Guarini PhD $49,862.40/yr + $1.5k Relocation",
    "tuitionFee": "$71,697 / year (Tuition) | Total COA $98,946 / year",
    "tuitionAmountNumeric": 71697,
    "hasFullRide": true,
    "hasPartialAid": true,
    "hasFinancialAid": true,
    "financialAidType": "Need-Based",
    "financialAidDetails": "Dartmouth College is one of the premier institutions offering NEED-BLIND admissions for ALL international applicants regardless of citizenship, meeting 100% of demonstrated financial need with NO required student loans. Dartmouth guarantees 100% free tuition for families earning under $175,000 with typical assets, and sets a zero-parent-contribution (zero EFC) threshold for families earning under $125,000 (up from $65,000). All undergraduate awards are need-based (no merit/athletic awards), with an average grant of $74,765/year for the Class of 2029. At the doctoral level, all PhD candidates are 100% fully funded for 5 years with full tuition, health insurance, a $49,862.40 annual stipend, $1,500 relocation, and $1,200 international visa support.",
    "minGpa": "3.9+",
    "minSat": "1480 - 1560 (Median SAT)",
    "satRequirementCategory": "1500",
    "satPolicyDetails": "Test-Required: Standardized test scores (SAT or ACT) are required for all undergraduate applicants starting with the Class of 2029 intake.",
    "minIelts": "7.5+",
    "ieltsCategory": "7.5",
    "toeflRequirement": "100+",
    "commonAppAccepted": true,
    "applicationPortalDetails": "Common Application",
    "acceptanceRate": "5.3%",
    "deadline": "Nov 1 (Early Decision) / Feb 1 (Regular Decision Financial Aid Deadline)",
    "description": "Ranked #=270 globally in QS 2027, Ivy League Dartmouth in Hanover, NH is NEED-BLIND for all international undergrads, meeting 100% of need without loans (avg grant $74.7k), and excels in Marketing (#51-100).",
    "overviewLong": "Dartmouth College is a world-renowned Ivy League research university founded in 1769 in Hanover, New Hampshire. Dartmouth uniquely combines an intimate undergraduate liberal arts foundation with elite graduate schools including the Thayer School of Engineering, Tuck School of Business, Geisel School of Medicine, and Guarini School of Graduate and Advanced Studies.\n\nRanked #=270 globally in the QS World University Rankings 2027, Dartmouth operates a NEED-BLIND admission policy for ALL international applicants, meeting 100% of demonstrated financial need with NO required student loans (average scholarship offer for the Class of 2029 exceeded $74,765/year). Under current policy, Dartmouth guarantees 100% free tuition for families earning under $175,000 with typical assets, and sets a zero-parent-contribution threshold for families earning under $125,000.\n\nStarting with the Class of 2029 intake, Dartmouth is TEST-REQUIRED (SAT/ACT required for all undergraduate applicants). All undergraduate scholarships are strictly need-based. At the doctoral level, PhD candidates are 100% fully funded for 5 years through the Guarini School, receiving 100% tuition coverage, health insurance, a $49,862.40 annual stipend, $1,500 relocation allowance, and $1,200 international visa assistance.",
    "topProgramsList": [
      {
        "name": "Marketing",
        "ranking": "#51-100 Global (QS 2026)",
        "description": "Standing as Dartmouth’s absolute highest narrow ranking globally, managed via the elite Tuck School of Business and celebrated for executive leadership pipelines and consumer strategy tracks."
      },
      {
        "name": "Politics & International Studies",
        "ranking": "#101-150 Global (QS 2026)",
        "description": "A premier public policy and social science framework analyzing international governance structures, sovereign diplomatic history, and global tracking paradigms."
      },
      {
        "name": "Economics & Econometrics",
        "ranking": "#=111 Global (QS 2026)",
        "description": "Highly acclaimed worldwide for specialized research pipelines in empirical microeconomics, financial economics, and econometric modeling logic."
      },
      {
        "name": "Business & Management Studies",
        "ranking": "#136 Global (QS 2026)",
        "description": "Cultivated through the prestigious Tuck School of Business corporate network, feeding elite multi-national enterprises with specializations in structural market strategies."
      },
      {
        "name": "English Language & Literature",
        "ranking": "#151-200 Global (QS 2026)",
        "description": "A prominent humanities division focused on critical literary critique, historic text analysis, and theoretical narrative structures."
      },
      {
        "name": "Computer Science & Info Systems",
        "ranking": "#401-450 Global (QS 2026)",
        "description": "Fully verified in this technical cohort, providing a boutique computing network focused on foundational software architecture engineering and information security infrastructures."
      }
    ],
    "allScholarshipsList": [
      {
        "id": "uni-048-1",
        "title": "Dartmouth International Need-Based Need-Blind Financial Aid",
        "amount": "Up to 100% Demonstrated Need (Avg $74,765 / year; No Student Loans)",
        "coverage": "Full Ride",
        "eligibility": "Admitted international undergraduate applicants demonstrating financial need via CSS Profile or ISFAA.",
        "description": "Need-blind institutional grant packages meeting 100% of demonstrated need without student loans. Families earning up to $175k receive full tuition grants.",
        "deadline": "Feb 1 (Regular Decision Financial Aid Deadline)",
        "requiresSeparateApp": true
      },
      {
        "id": "uni-048-2",
        "title": "Dartmouth Guarini Doctoral Fellowship (All PhD Disciplines)",
        "amount": "100% Full Tuition ($71,697 value) + Health Coverage + $49,862.40 / year Stipend + $1.5k Relocation",
        "coverage": "Full Ride",
        "eligibility": "Admitted full-time PhD candidates in good academic standing.",
        "description": "5-year guaranteed doctoral funding package including full tuition, health insurance, $49.8k/yr 12-month stipend, $1,500 relocation, and $1,200 visa support.",
        "deadline": "Dec 15 (Graduate Application Deadline)",
        "requiresSeparateApp": false
      }
    ],
    "degreesOffered": [
      "Undergraduate",
      "Graduate",
      "PhD"
    ],
    "tags": [
      "Ivy League",
      "Need-Blind Int'l",
      "Meets 100% Need",
      "No Loan Aid",
      "Guarini PhD $49.8k",
      "USA",
      "QS #=270"
    ],
    "requiresSeparateApp": true,
    "logoText": "DART",
    "logoBg": "from-emerald-900 to-green-950"
  },

  {
    "id": "uni-049",
    "universityName": "Georgetown University",
    "location": "Washington, D.C., United States",
    "country": "United States",
    "flag": "🇺🇸",
    "foundingYear": "1789",
    "scholarshipTitle": "John Carroll Scholarships & Need-Based International Aid (Very Limited)",
    "ranking": "#=289 Global (QS 2027)",
    "qsSubjectRankings": "QS 2026: #10 Politics & International Studies, #21 Law & Legal Studies, #51-100 History, #101-150 Business & Management Studies, #551-600 Computer Science & Info Systems",
    "coverage": "Partial Aid",
    "amountValue": "Very Limited Need-Based Aid | John Carroll International Scholarships",
    "tuitionFee": "$75,500 / year (Tuition) | $75,712 (Tuition & Fees) | Total COA $101,844 / year",
    "tuitionAmountNumeric": 75500,
    "hasFullRide": false,
    "hasPartialAid": true,
    "hasFinancialAid": true,
    "financialAidType": "Need-Based",
    "financialAidDetails": "Georgetown provides need-based financial aid to international undergraduate applicants, but funding is EXTREMELY LIMITED. Georgetown is NOT need-blind for international students (need-aware admission). Financial aid is strictly need-based (no general academic merit scholarships). Eligible international applicants requesting aid submit the CSS Profile and are considered for a very limited pool of need-based awards including the John Carroll Scholarships. Master's and PhD funding are program-dependent (e.g. 10% tuition discount for Georgetown alumni, departmental merit scholarships, and teaching/research assistantships in qualifying graduate/PhD programs).",
    "minGpa": "3.8+",
    "minSat": "1400 - 1530 (Enrolled SAT Range)",
    "satRequirementCategory": "1400",
    "satPolicyDetails": "Standardized testing policy: SAT or ACT scores required/submitted according to admissions framework. Test scores are considered alongside CSS Profile for limited aid.",
    "minIelts": "7.0+",
    "ieltsCategory": "7.0",
    "toeflRequirement": "100+",
    "commonAppAccepted": true,
    "applicationPortalDetails": "Common Application or Georgetown Application Portal accepted for First-Year Applicants.",
    "acceptanceRate": "12.9%",
    "deadline": "Nov 1 (Early Action) / Jan 10 (Regular Decision)",
    "description": "Ranked #=289 globally in QS 2027, Georgetown in Washington, D.C. is renowned for Politics (#10) and Law (#21), offering extremely selective, need-aware international financial aid.",
    "overviewLong": "Georgetown University is a highly selective private research university located in Washington, D.C. Founded in 1789, it is the oldest Catholic university in the United States and is particularly distinguished for international affairs, government, political science, diplomacy, business, history, and law.\n\nIts prime location in Washington, D.C. provides exceptional academic and professional advantages for students interested in politics, international relations, diplomacy, and federal policy through proximity to federal agencies, foreign embassies, think tanks, and international financial institutions. Key schools include the Walsh School of Foreign Service, McDonough School of Business, McCourt School of Public Policy, and Georgetown Law.\n\nRanked #=289 globally in the QS World University Rankings 2027 (#=285 in 2026), Georgetown offers distinguished programs including QS #10 globally for Politics and #21 for Law & Legal Studies.\n\nFor international undergraduate applicants, financial aid is available but EXTREMELY LIMITED and subject to need-aware admissions. Georgetown does not offer general academic merit scholarships for undergraduates, but considers eligible international applicants requesting aid for a limited pool of need-based scholarships, including John Carroll Scholarships. The estimated undergraduate tuition for 2026–27 is $75,500/year ($74,732 tuition & fees) with a total Cost of Attendance of $100,864/year. Master's and PhD funding are program-dependent.",
    "topProgramsList": [
      {
        "name": "Politics & International Studies",
        "ranking": "#10 Global (QS 2026)",
        "description": "Standing as Georgetown's absolute highest narrow ranking globally, managed via the prestigious Walnut Street campus and the Walsh School of Foreign Service, leading the world in diplomatic history and global policy pipelines."
      },
      {
        "name": "Law & Legal Studies",
        "ranking": "#21 Global (QS 2026)",
        "description": "Housed at the historic Georgetown Law Center, serving as an international anchor for constitutional law, global legal theory, and elite corporate networking channels."
      },
      {
        "name": "History",
        "ranking": "#51–100 Global (QS 2026)",
        "description": "A premier global humanities track celebrated for extensive archival research, diplomatic histories, and deep integration with cross-cultural global studies modules."
      },
      {
        "name": "Business & Management Studies",
        "ranking": "#101–150 Global (QS 2026)",
        "description": "Housed within the McDonough School of Business, highly recognized for corporate strategy, international enterprise pipelines, and executive placement networks."
      },
      {
        "name": "Computer Science & Info Systems",
        "ranking": "#551–600 Global (QS 2026)",
        "description": "A highly focused, boutique technical computing wing emphasizing software logic platforms, data analytics frameworks, and interdisciplinary secure network structures."
      }
    ],
    "allScholarshipsList": [
      {
        "id": "uni-049-1",
        "title": "Georgetown John Carroll International Scholarships",
        "amount": "Very Limited Need-Based Aid",
        "coverage": "Partial Aid",
        "eligibility": "Admitted international undergraduate applicants demonstrating financial need via CSS Profile.",
        "description": "Awarded from the pool of admitted international undergraduate applicants. Highly selective and limited.",
        "deadline": "Nov 1 (EA) / Jan 10 (RD)",
        "requiresSeparateApp": false
      },
      {
        "id": "uni-049-2",
        "title": "Georgetown Graduate Alumni Tuition Scholarship",
        "amount": "10% Base Tuition Discount",
        "coverage": "Partial Aid",
        "eligibility": "Eligible Georgetown undergraduate alumni entering qualifying graduate degree programs.",
        "description": "Provides a 10% base tuition reduction for qualifying Georgetown alumni.",
        "deadline": "Program Dependent",
        "requiresSeparateApp": true
      }
    ],
    "degreesOffered": [
      "Undergraduate",
      "Graduate",
      "PhD"
    ],
    "tags": [
      "Washington DC",
      "Foreign Service",
      "QS #289",
      "McDonough Business",
      "Public Policy",
      "Jesuit"
    ],
    "requiresSeparateApp": false,
    "logoText": "GU",
    "logoBg": "from-blue-900 to-slate-800"
  },

  {
    "id": "uni-050",
    "universityName": "University of Notre Dame",
    "location": "Notre Dame, Indiana, United States",
    "country": "United States",
    "flag": "🇺🇸",
    "foundingYear": "1842",
    "scholarshipTitle": "Notre Dame Pathways & International Need-Based Aid - 100% Need Met (No Loans)",
    "ranking": "#=300 Global (QS 2027)",
    "qsSubjectRankings": "QS 2026: #1 Globally Theology, Divinity & Religious Studies | #101-150 Accounting & Finance | US News Law #20",
    "coverage": "Full Ride",
    "amountValue": "100% Demonstrated Need Met (No Required Loans) | Full Tuition < $150k Income",
    "tuitionFee": "$67,444 / year (Base Tuition) | Total Estimated COA $91,986 / year",
    "tuitionAmountNumeric": 67444,
    "hasFullRide": true,
    "hasPartialAid": true,
    "hasFinancialAid": true,
    "financialAidType": "Need-Based",
    "financialAidDetails": "Notre Dame meets 100% of demonstrated financial need for all admitted undergraduate students, including international students, with financial aid packages comprised of grants and scholarships rather than required loans. Through the Pathways to Notre Dame program, families with income up to $150,000 receive at least full tuition coverage, and families earning up to $60,000 have full tuition, fees, housing, and food covered (subject to financial aid assessment and typical asset conditions). Limited undergraduate merit scholarships are available for international first-year applicants (transfer students are not eligible for merit aid). Doctoral PhD students receive tuition support, assistantships, and stipends in qualifying programs.",
    "minGpa": "3.9+",
    "minSat": "1450 - 1550 (Enrolled SAT Range)",
    "satRequirementCategory": "1400",
    "satPolicyDetails": "Test-Optional / Test-Considered policy. Enrolled middle 50% SAT range is 1450 to 1550. CSS Profile required for all need-based financial aid applicants.",
    "minIelts": "7.5+",
    "ieltsCategory": "7.5",
    "toeflRequirement": "100+",
    "commonAppAccepted": true,
    "applicationPortalDetails": "Common Application & Coalition Application",
    "acceptanceRate": "11.9%",
    "deadline": "Nov 1 (RE Action) / Jan 3 (Regular Decision)",
    "description": "Founded in 1842 in Indiana, Notre Dame ranks #=300 globally in QS 2027 (#1 globally for Theology). Meets 100% of demonstrated financial need for international undergraduates with NO required loans.",
    "overviewLong": "The University of Notre Dame is a highly selective private research university in Notre Dame, Indiana, and one of the premier Catholic higher education institutions in the United States. Founded in 1842 by the Congregation of Holy Cross, Notre Dame combines a world-class liberal arts undergraduate education with major research activity across engineering, computer science, business, economics, global affairs, architecture, science, and the humanities.\n\nNotre Dame is recognized as the world's #1 university for Theology, Divinity & Religious Studies in the QS 2026 World Subject Rankings. Its Mendoza College of Business, College of Engineering, Keough School of Global Affairs, School of Architecture, and College of Science anchor its academic reputation. Computer Science and Engineering graduates report placement rates at or near 100%.\n\nRanked #=300 globally in QS 2027 (#=294 in 2026), Notre Dame is an elite destination for international students seeking generous financial support. Notre Dame meets 100% of demonstrated financial need for all admitted undergraduates, including international students, using grant aid rather than student loans (CSS Profile required). Under the Pathways to Notre Dame initiative, families with income up to $150,000 receive at least full tuition coverage, while families earning under $60,000 receive full coverage for tuition, fees, housing, and food. Limited competitive merit scholarships are also available for international first-year applicants.",
    "topProgramsList": [
      {
        "name": "Accounting & Finance",
        "ranking": "101-150 (QS 2026)",
        "description": "Premier accounting and corporate finance education offered through the Mendoza College of Business."
      },
      {
        "name": "Computer Science & Information Systems",
        "ranking": "#126–#150 Globally (THE) / #201–#250 (QS)",
        "description": "Artificial intelligence, algorithms, computing systems, software engineering, and data science."
      },
      {
        "name": "Engineering & Technology (Broad Faculty)",
        "ranking": "#151–#175 Globally (THE) / #315–#400 (QS)",
        "description": "Interdisciplinary engineering sciences, bioengineering, mechanical engineering, and aerospace technology."
      },
      {
        "name": "Undergraduate Business (Mendoza College of Business)",
        "ranking": "#12 in the US",
        "description": "Consistently ranked among the top 15 undergraduate business programs nationwide in US News."
      },
      {
        "name": "Notre Dame Law School",
        "ranking": "#20 (US News)",
        "description": "Premier national law school renowned for constitutional law, corporate governance, and ethics."
      }
    ],
    "allScholarshipsList": [
      {
        "id": "uni-050-1",
        "title": "Notre Dame Need-Based Financial Aid (100% Need Met)",
        "amount": "Full Demonstrated Need Met (Grants & No Loans)",
        "coverage": "Full Ride",
        "eligibility": "All admitted undergraduate students (Domestic & International) demonstrating financial need via CSS Profile.",
        "description": "Meets 100% of demonstrated need without loans. Includes full tuition for incomes < $150k and full COA for incomes < $60k.",
        "deadline": "Nov 1 (REA) / Jan 3 (RD)",
        "requiresSeparateApp": false
      },
      {
        "id": "uni-050-2",
        "title": "Notre Dame International Merit Scholarships",
        "amount": "Varies (Up to Full Tuition for Select Recipients)",
        "coverage": "Partial Aid",
        "eligibility": "High-achieving first-year international undergraduate applicants.",
        "description": "Competitive merit awards selected based on exceptional academic accomplishment, leadership, and service.",
        "deadline": "Jan 3 (Annual Application)",
        "requiresSeparateApp": false
      }
    ],
    "degreesOffered": [
      "Undergraduate",
      "Graduate",
      "PhD"
    ],
    "tags": [
      "100% Need Met",
      "No Loans",
      "Theology #1",
      "Pathways Aid",
      "Mendoza Business",
      "Indiana"
    ],
    "requiresSeparateApp": false,
    "logoText": "ND",
    "logoBg": "from-blue-950 to-amber-600"
  },

  {
    "id": "uni-051",
    "universityName": "The University of Arizona",
    "location": "Tucson, Arizona, United States",
    "country": "United States",
    "flag": "🇺🇸",
    "foundingYear": "1885",
    "scholarshipTitle": "Global Wildcat International Tuition Award ($4,000 - $20,000/year)",
    "ranking": "#313 Global (QS 2027)",
    "qsSubjectRankings": "US News 2026: Earth Sciences #2 Public, MIS #1 Public / #2 Overall (US News), Physics #34, Psych #39, Math #39, Bio #41, Elec Eng #47, Comp Eng #50, CS #59",
    "coverage": "Partial Aid",
    "amountValue": "$4,000 to $20,000 / year (Global Wildcat Merit Award)",
    "tuitionFee": "$44,400 / year (Non-Resident Tuition) | $46,068 (Int'l Estimate) | Total COA $67,770 / year",
    "tuitionAmountNumeric": 44400,
    "hasFullRide": false,
    "hasPartialAid": true,
    "hasFinancialAid": true,
    "financialAidType": "Merit-Based",
    "financialAidDetails": "The University of Arizona offers competitive merit scholarships to international undergraduate applicants. The flagship Global Wildcat Tuition Award provides renewable awards ranging from $4,000 to $20,000/year for high-achieving international first-year students based on academic credentials. Graduate students (Master's and PhD) are funded through departmental graduate assistantships (GAs, TAs, RAs) and fellowships which provide tuition remission and living stipends.",
    "minGpa": "3.3+",
    "minSat": "1200 - 1380 (Recommended for Merit Consideration)",
    "satRequirementCategory": "Optional",
    "satPolicyDetails": "Test-Optional for undergraduate admissions. Standardized test scores or high GPA qualify international students for Global Wildcat merit awards ($4,000–$20,000/year).",
    "minIelts": "6.0+",
    "ieltsCategory": "6.0",
    "toeflRequirement": "79+",
    "commonAppAccepted": true,
    "applicationPortalDetails": "Common Application & Arizona Future Wildcat Portal",
    "acceptanceRate": "87.0%",
    "deadline": "May 1 (Fall Priority) / Nov 1 (Spring Priority)",
    "description": "Founded in 1885 in Tucson, UArizona is an AAU R1 research powerhouse ranked #313 globally (QS 2027). Renowned for Astronomy, Earth Sciences (#2 US Public), Wyant Optical Sciences, and MIS (#11). Offers Global Wildcat International Merit Scholarships up to $20,000/yr.",
    "overviewLong": "The University of Arizona is a major public research university in Tucson, Arizona, and a member of the elite Association of American Universities (AAU). Founded in 1885, UArizona is globally recognized for groundbreaking scientific research in astronomy, space sciences, earth and planetary sciences, optical sciences, computer science, engineering, biological sciences, medicine, and management information systems.\n\nUArizona ranks #313 globally in QS 2027 (#=287 in 2026) and holds elite U.S. News 2026 national rankings including #2 among public universities for Earth Sciences, #1 Public / #2 Overall for Management Information Systems (Eller College) (Eller College), #34 for Physics, #39 for Psychology and Mathematics, #41 for Biological Sciences, #47 for Electrical Engineering, #50 for Computer Engineering, and #59 for Computer Science (and #16 nationwide in NRC research rankings for public PhD-granting CS departments). It also features top-tier online Master's programs (#5 IT, #6 MBA).\n\nFor international undergraduates, UArizona offers the Global Wildcat Tuition Award, providing $4,000 to $20,000 per year in renewable merit scholarship support for qualified students. Non-resident tuition & fees for 2026–27 are $44,400/year with a total on-campus Cost of Attendance of $67,770/year. Graduate Master's and PhD students access assistantships (TA/RA) and research grants.",
    "topProgramsList": [
      {
        "name": "Astronomy & Space Sciences",
        "ranking": "World-Leading Ecosystem",
        "description": "Signature research strength supported by Steward Observatory, Lunar and Planetary Laboratory, and NASA mission partnerships."
      },
      {
        "name": "Earth Sciences & Geosciences",
        "ranking": "#2 Public Universities (US News 2026)",
        "description": "Geosciences, planetary science, environmental hydrology, and climate science research."
      },
      {
        "name": "Wyant College of Optical Sciences",
        "ranking": "World-Leading Center",
        "description": "One of the premier optical science programs globally, spanning laser physics, quantum optics, and imaging technology."
      },
      {
        "name": "Management Information Systems (Eller College)",
        "ranking": "#1 Public / #2 Overall (US News)",
        "description": "Nationally renowned MIS program covering business analytics, cybersecurity, enterprise AI, and information networks."
      },
      {
        "name": "Computer Science",
        "ranking": "#59 US News Graduate / #16 NRC Public",
        "description": "Algorithms, artificial intelligence, parallel computing, programming languages, cybersecurity, and visualization."
      },
      {
        "name": "Engineering (Computer, Electrical, Mechanical, Aerospace)",
        "ranking": "#68 US News Engineering",
        "description": "Electrical (#47), Computer (#50), Mechanical (#54), biomedical, and aerospace engineering."
      },
      {
        "name": "Biological Sciences, Physics & Math",
        "ranking": "#34 Physics / #39 Math / #41 Bio",
        "description": "High-impact research across physics, mathematics, genetics, ecology, and biological sciences."
      ,
    "logoText": "UA",
    "logoBg": "from-emerald-700 to-teal-950",
    "degreesOffered": ["Undergraduate", "Graduate", "PhD"],
    "tags": ["United States", "Europe", "International", "Research"],
    "requiresSeparateApp": true}
    ],
    "allScholarshipsList": [,

      {
        "id": "uni-051-1",
        "title": "Global Wildcat International Tuition Award",
        "amount": "$4,000 to $20,000 / year (Renewable for 4 Years)",
        "coverage": "Partial Aid",
        "eligibility": "High-achieving first-year international undergraduate applicants based on academic credentials.",
        "description": "Competitive tuition reduction scholarship awarded annually to top international undergraduate applicants.",
        "deadline": "May 1 (Fall) / Nov 1 (Spring)",
        "requiresSeparateApp": false
      ,
    "logoText": "UA",
    "logoBg": "from-blue-700 to-indigo-950",
    "degreesOffered": ["Undergraduate", "Graduate", "PhD"]},

      {
        "id": "uni-051-2",
        "title": "UArizona Graduate Assistantships (TA / RA)",
        "amount": "Tuition Remission + Health Insurance + Living Stipend",
        "coverage": "Full Ride",
        "eligibility": "Admitted Master's and PhD students in qualifying academic departments.",
        "description": "Teaching and research assistantships providing tuition remission and living stipends.",
        "deadline": "Departmental Deadlines",
        "requiresSeparateApp": true
      }
    ],
    "degreesOffered": [
      "Undergraduate",
      "Graduate",
      "PhD"
    ],
    "tags": [
      "AAU Member",
      "R1 Research",
      "Global Wildcat Aid",
      "Earth Sciences #2",
      "Astronomy",
      "Eller MIS #1 Public"
    ],
    "requiresSeparateApp": false,
    "logoText": "UA",
    "logoBg": "from-red-800 to-blue-900"
  },

  {
    "id": "uni-052",
    "universityName": "University of Pittsburgh",
    "location": "Pittsburgh, Pennsylvania, United States",
    "country": "United States",
    "flag": "🇺🇸",
    "foundingYear": "1787",
    "scholarshipTitle": "Pitt International First-Year Merit Scholarships (Up to $10,000/year)",
    "ranking": "#=279 Global (QS 2027)",
    "qsSubjectRankings": "QS 2026: Philosophy #5 Globally | Library & Info Mgmt #24 Globally | Nursing #28 Globally | US News: BSN #8, BME #29, Engineering #42, Katz Business #46-48, Computing & Info #51+",
    "coverage": "Partial Aid",
    "amountValue": "Up to $10,000 / year (Renewable for 8 Terms / 4 Years)",
    "tuitionFee": "$43,328 / year (Dietrich Out-of-State Tuition) | $2,155 Mandatory Fees + $1,000 Int'l Fee | Budget ~$67,137",
    "tuitionAmountNumeric": 43328,
    "hasFullRide": false,
    "hasPartialAid": true,
    "hasFinancialAid": true,
    "financialAidType": "Merit-Based",
    "financialAidDetails": "Pitt offers limited merit-based scholarships for international first-year undergraduate applicants, providing up to $10,000 per year (renewable for up to 8 full-time terms / 4 years). At the graduate level, Pitt provides exceptional PhD funding, covering MOST admitted PhD students for 5 years with tuition remission, individual health insurance, and annual living stipends ($10,557–$11,792 per term for GSR/GSA/TA/TF appointments). Graduating Pitt alumni qualify for Pitt2Pitt scholarships up to $7,500/yr.",
    "minGpa": "3.6+",
    "minSat": "1300 - 1470 (Enrolled SAT Range)",
    "satRequirementCategory": "1300",
    "satPolicyDetails": "Test-Optional undergraduate admissions. SAT/ACT scores or high academic transcripts qualify international first-year students for merit scholarships up to $10,000/year.",
    "minIelts": "6.5+",
    "ieltsCategory": "6.5",
    "toeflRequirement": "95+",
    "commonAppAccepted": true,
    "applicationPortalDetails": "Common Application & Pitt Admissions Portal",
    "acceptanceRate": "49.0%",
    "deadline": "Dec 1 (Priority Scholarship) / Feb 1 (Absolute Cutoff) / Rolling",
    "description": "Founded in 1787 in Pittsburgh, Pitt is ranked #=279 globally (QS 2027), excelling in Philosophy (#5) and Swanson Engineering (#42). Offers up to $10,000/yr international merit scholarships.",
    "overviewLong": "The University of Pittsburgh is a premier public research university in Pittsburgh, Pennsylvania, and an influential member of the Association of American Universities (AAU). Founded in 1787, Pitt is renowned for world-class research in philosophy, medicine, health sciences, nursing, Swanson School of Engineering, School of Computing and Information, business, public affairs, and biotechnology.\n\nPitt ranks #=279 globally in QS 2027 (#=281 in 2026), placing #49 nationally in the US and #25 among US public universities. It holds extraordinary global subject rankings including #5 globally for Philosophy in QS 2026 (top 5 for over a decade), #24 globally for Library & Information Management, and #28 globally for Nursing (#8 US News BSN). Swanson School of Engineering ranks #42 nationally with top programs in Biomedical (#29), Industrial (#24), Computer (#46), Electrical (#52), and Mechanical (#54) Engineering. Computer Science is ranked #19 nationally in bachelor's education.\n\nFor international undergraduates, Pitt offers merit scholarships of up to $10,000 per year (renewable for 4 years / 8 terms). Out-of-state tuition for Dietrich Arts & Sciences is $43,328/year (plus $2,155 mandatory fees and $1,000/year international fee), bringing total estimated international annual expenses to ~$67,137. Pitt boasts a vibrant student life with over 600 student organizations (SWE, NSBE, Asian Student Alliance, Muslim Students' Association) deeply connected to Pittsburgh's urban Oakland healthcare and technology corridor. For PhD students, Pitt guarantees 5-year funding packages for most admitted doctoral candidates, covering full tuition remission, health insurance, and competitive living stipends.",
    "topProgramsList": [
      {
        "name": "Department of Philosophy",
        "ranking": "#5 Globally (QS 2026)",
        "description": "World top 5 for over a decade, spanning history and philosophy of science, logic, and ethics."
      },
      {
        "name": "Library & Information Management",
        "ranking": "#24 Globally (QS 2026)",
        "description": "School of Computing and Information program covering data curation, information systems, and knowledge architecture."
      },
      {
        "name": "School of Nursing & Health Sciences",
        "ranking": "#28 Globally (QS) / #8 US News BSN",
        "description": "World top 30 nursing school with #8 BSN, #5 Nurse Anesthesia, #1 Occupational Therapy, and #8 Physical Therapy."
      },
      {
        "name": "Swanson School of Engineering",
        "ranking": "#42 US News Engineering",
        "description": "Top graduate engineering including Biomedical (#29), Industrial (#24), Computer (#46), Electrical (#52), and Mechanical (#54)."
      },
      {
        "name": "School of Computing and Information",
        "ranking": "#51+ (US News)",
        "description": "Comprehensive computing programs covering software engineering, cybersecurity, data science, and library & information science."
      },
      {
        "name": "School of Public & International Affairs (GSPIA)",
        "ranking": "#31 US News / #9 Global Policy",
        "description": "Public administration, international global policy, governance, and urban affairs."
      },
      {
        "name": "Katz Graduate School of Business",
        "ranking": "#46-48 (US News)",
        "description": "Full-time and part-time MBA, corporate finance, accounting, and supply chain management."
      }
    ],
    "allScholarshipsList": [
      {
        "id": "uni-052-1",
        "title": "Pitt International First-Year Merit Scholarship",
        "amount": "Up to $10,000 / year (Renewable for 4 Years / 8 Terms)",
        "coverage": "Partial Aid",
        "eligibility": "High-achieving international first-year undergraduate applicants.",
        "description": "Merit scholarship awarded to top international undergraduate applicants entering the Pittsburgh campus.",
        "deadline": "Dec 1 (Priority Deadline) / Feb 1 (Absolute Cutoff for Automatic Consideration)",
        "requiresSeparateApp": false
      },
      {
        "id": "uni-052-2",
        "title": "Pitt 5-Year Doctoral PhD Fellowship & Assistantship",
        "amount": "100% Tuition Remission + Health Insurance + Living Stipend ($23,500–$31,000+/yr)",
        "coverage": "Full Ride",
        "eligibility": "Most admitted PhD candidates across engineering, computing, sciences, and health disciplines.",
        "description": "Guaranteed 5-year funding package covering full tuition remission, health insurance, and term stipends.",
        "deadline": "Departmental Deadlines",
        "requiresSeparateApp": false
      }
    ],
    "degreesOffered": [
      "Undergraduate",
      "Graduate",
      "PhD"
    ],
    "tags": [
      "AAU Member",
      "R1 Research",
      "Philosophy #5",
      "Pitt Merit Aid",
      "Pittsburgh",
      "Swanson Engineering"
    ],
    "requiresSeparateApp": false,
    "logoText": "PITT",
    "logoBg": "from-blue-900 to-amber-500"
  },

  {
    "id": "uni-053",
    "universityName": "University of Houston",
    "location": "Houston, Texas, United States",
    "country": "United States",
    "flag": "🇺🇸",
    "foundingYear": "1927",
    "scholarshipTitle": "UH Tier One & Academic Excellence Scholarships (Up to Full Tuition + Housing)",
    "ranking": "#=551 Global (QS 2027)",
    "qsSubjectRankings": "US News 2026: Petroleum Eng #8, Chem Eng #34, Industrial Eng #41, Info Systems MBA #34, Part-Time MBA #38, Public Univ #68",
    "coverage": "Full Ride",
    "amountValue": "Full Tuition + Housing & Stipends (Tier One) | Academic Excellence Awards",
    "tuitionFee": "$22,900 / year (Out-of-State Tuition) | Total COA ~$40,500 – $41,500 / year",
    "tuitionAmountNumeric": 22900,
    "hasFullRide": true,
    "hasPartialAid": true,
    "hasFinancialAid": true,
    "financialAidType": "Merit-Based",
    "financialAidDetails": "The University of Houston offers major competitive merit scholarships for incoming undergraduates. NOTE ON OUT-OF-STATE WAIVER: Out-of-state and international students who receive a competitive UH merit scholarship (e.g., Academic Excellence Scholarship) of $1,000+ per year qualify for in-state tuition rates. The flagship Tier One Scholarship provides full tuition and mandatory fees for four years, on-campus housing and meal plan for the first two years, a $1,000 research stipend, and a $2,000 study-abroad stipend. National Merit Finalists also receive full tuition, fees, and research/study-abroad stipends. Additional awards include the Academic Excellence Scholarship ($1,000–$6,000/yr). Graduate students receive funding through departmental assistantships (TA/RA), fellowships, and Graduate Tuition Fellowships.",
    "minGpa": "3.5+",
    "minSat": "1200 - 1400 (Competitive Tier One SAT ~1400+)",
    "satRequirementCategory": "Optional",
    "satPolicyDetails": "Test-Optional for general admissions. Standardized test scores (e.g. 1400+ SAT / top 10% class rank) significantly enhance competitiveness for flagship Tier One and National Merit full-ride awards.",
    "minIelts": "6.5+",
    "ieltsCategory": "6.5",
    "toeflRequirement": "79+",
    "commonAppAccepted": true,
    "applicationPortalDetails": "Common Application & ApplyTexas",
    "acceptanceRate": "66.0%",
    "deadline": "Nov 1 (Priority Tier One Deadline) / May 31 (Final Fall)",
    "description": "Founded in 1927 in Houston, Texas, UH is an R1 public research university ranked #=551 globally in QS 2027 (#4 in Texas). Out-of-state tuition ~$22,900/yr (Total COA ~$40.5k–$41.5k/yr). Receiving a $1,000+ merit award qualifies out-of-state/int'l students for in-state tuition rates. Flagship Tier One Scholarship covers full tuition and housing.",
    "overviewLong": "The University of Houston is a major public R1 research university located in Houston, Texas, serving as the flagship institution of the University of Houston System. Founded in 1927, UH has established a strong national profile across engineering, computer science, business, energy, health sciences, law, and architecture. Its strategic location in Houston—the energy capital of the world and home to the Texas Medical Center—provides unparalleled career, internship, and research opportunities across aerospace, energy, technology, healthcare, and global finance.\n\nUH ranks #=551 globally in QS 2027 (#=556 in 2026, #4 among Texas universities) and holds high U.S. News graduate program rankings, including #8 nationally for Petroleum Engineering, #34 for Chemical Engineering, #41 for Industrial/Systems Engineering, #34 for Information Systems MBA, #38 for Part-time MBA, and #46 for Entrepreneurship MBA (C.T. Bauer College of Business).\n\nFor international undergraduates, UH offers prestigious merit scholarship opportunities. The competitive Tier One Scholarship covers full four-year tuition and fees, two years of on-campus housing and dining, a $1,000 undergraduate research stipend (Provost's Scholarship), and a $2,000 study-abroad stipend. UH features a vibrant campus community with over 600 student organizations deeply integrated into Houston's metropolitan ecosystem.\n\nImportant Tuition Waiver Rule: Out-of-state and international students who receive a competitive UH merit scholarship (e.g., Academic Excellence Scholarship) of $1,000+ per year qualify for in-state tuition rates, significantly reducing annual costs.",
    "topProgramsList": [
      {
        "name": "Petroleum Engineering (Cullen College of Engineering)",
        "ranking": "#8 in the US (US News Graduate)",
        "description": "World-leading energy engineering curriculum with direct industry connections to Houston's global energy hub."
      },
      {
        "name": "Chemical Engineering",
        "ranking": "#34 in the US (US News Graduate)",
        "description": "Advanced chemical, materials, and process engineering research supported by major energy and industrial partnerships."
      },
      {
        "name": "C.T. Bauer College of Business (Information Systems & MBA)",
        "ranking": "#34 Info Systems / #46 Entrepreneurship",
        "description": "Nationally ranked business programs in management information systems, corporate finance, and entrepreneurship."
      },
      {
        "name": "Computer Science & Artificial Intelligence",
        "ranking": "Top National Tier",
        "description": "Focuses on machine learning, cybersecurity, data science, software engineering, and high-performance computing."
      },
      {
        "name": "Industrial & Systems Engineering",
        "ranking": "#41 in the US (US News Graduate)",
        "description": "Supply chain management, operations research, manufacturing optimization, and healthcare systems engineering."
      },
      {
        "name": "Gerald D. Hines College of Architecture & Design",
        "ranking": "Top National Tier",
        "description": "Offers 5-year professional Bachelor of Architecture, industrial design, and interior architecture degree programs."
      },
      {
        "name": "Health Sciences & Biotechnology",
        "ranking": "Texas Medical Center Ecosystem",
        "description": "Pre-med, biomedical sciences, and public health leveraging partnerships with the adjacent Texas Medical Center."
      ,
    "logoText": "UH",
    "logoBg": "from-rose-700 to-red-950",
    "degreesOffered": ["Undergraduate", "Graduate", "PhD"],
    "tags": ["United States", "Europe", "International", "Research"],
    "requiresSeparateApp": true}
    ],
    "allScholarshipsList": [,

      {
        "id": "uni-053-1",
        "title": "UH Tier One Full-Ride Scholarship",
        "amount": "Full Tuition & Fees + 2 Yrs Housing/Meals + $1,000 Research + $2,000 Study Abroad",
        "coverage": "Full Ride",
        "eligibility": "High-achieving first-year undergraduate applicants (competitive 1400+ SAT / Top 10% class rank profile).",
        "description": "UH flagship merit scholarship covering four years of tuition and fees, first two years on-campus housing and dining, plus research and study-abroad stipends.",
        "deadline": "Nov 1 (Priority Deadline)",
        "requiresSeparateApp": false
      ,
    "logoText": "UH",
    "logoBg": "from-blue-700 to-indigo-950",
    "degreesOffered": ["Undergraduate", "Graduate", "PhD"]},

      {
        "id": "uni-053-2",
        "title": "Academic Excellence & Cullen Leadership Scholarships",
        "amount": "$1,000 to $6,000 / year (Renewable for 4 Years)",
        "coverage": "Partial Aid",
        "eligibility": "Admitted incoming undergraduate students evaluated on academic achievement and leadership.",
        "description": "Renewable merit-based awards providing annual tuition support for qualified undergraduate candidates.",
        "deadline": "Nov 1 (Priority) / Jan 15",
        "requiresSeparateApp": false
      }
    ],
    "degreesOffered": [
      "Undergraduate",
      "Graduate",
      "PhD"
    ],
    "tags": [
      "R1 Research",
      "Tier One Full Ride",
      "Petroleum #8",
      "Bauer Business",
      "Houston TX",
      "QS #551"
    ],
    "requiresSeparateApp": false,
    "logoText": "UH",
    "logoBg": "from-red-700 to-slate-900"
  },

  {
    "id": "uni-054",
    "universityName": "Florida State University",
    "location": "Tallahassee, Florida, United States",
    "country": "United States",
    "flag": "🇺🇸",
    "foundingYear": "1851",
    "scholarshipTitle": "FSU Out-of-State Tuition Reduction Waiver (50% - 100% Fee Waiver) & National Merit",
    "ranking": "#=546 Global (QS 2027)",
    "qsSubjectRankings": "US News Global: Education #25 (#2 US Public), Psych #80; US News Nat'l: DNP Nursing #21, Stats #36, Business #31 Public",
    "coverage": "Partial Aid",
    "amountValue": "50% to 100% Out-of-State Tuition Fee Waiver | Up to $75,776 (National Merit)",
    "tuitionFee": "$22,232 / year (Out-of-State Tuition) | Total On-Campus COA $43,916 / year",
    "tuitionAmountNumeric": 22232,
    "hasFullRide": false,
    "hasPartialAid": true,
    "hasFinancialAid": true,
    "financialAidType": "Merit-Based",
    "financialAidDetails": "Florida State University provides generous merit-based out-of-state tuition waivers for high-achieving non-resident freshmen. Out-of-state tuition reduction scholarships grant either a 50% or 100% waiver of out-of-state tuition fees based on academic merit and test scores. The Out-of-State National Merit Award provides a package valued at ~$91,080 over 4 years (100% out-of-state tuition waiver worth ~$73,080 + $16,000 Vires scholarship + $2,000 NMSC stipend; must list FSU as First Choice with NMSC by May 1). Graduate Master's and PhD students access teaching and research assistantships with typical 20-hour appointment base rates between $15.00/hr and $18.50/hr ($14,000–$20,000 per academic year) and 9-credit tuition waivers per term.",
    "minGpa": "3.7+",
    "minSat": "1350 - 1430 (Enrolled Middle 50% SAT; 1380-1510 Fall High Pool)",
    "satRequirementCategory": "1300",
    "satPolicyDetails": "Standardized testing required for Florida public universities (SAT / ACT Mandatory). Enrolled middle 50% SAT range is 1350–1430 (1380–1510 for fall high-end pools). Test scores qualify out-of-state and international applicants for 50%–100% out-of-state tuition reduction waivers.",
    "minIelts": "6.5+",
    "ieltsCategory": "6.5",
    "toeflRequirement": "80+",
    "commonAppAccepted": true,
    "applicationPortalDetails": "Common Application & FSU Application Portal",
    "acceptanceRate": "25.0%",
    "deadline": "Oct 15 (Early Action) / Dec 1 (Regular Decision Priority)",
    "description": "Founded in 1851 in Tallahassee, FSU is an R1 public research university ranked #=546 globally in QS 2027. World #25 in Education (#2 US Public). Offers automatic 50%–100% out-of-state tuition waivers for top non-resident applicants and 700+ student clubs.",
    "overviewLong": "Florida State University is a major public R1 research university located in Tallahassee, Florida. Founded in 1851, FSU combines top-tier research capabilities with a vibrant residential college-town atmosphere, offering over 340 degree programs across 17 colleges and schools. FSU emphasizes experiential learning, undergraduate research (through UROP, with ~25% of undergraduates conducting mentored research), and global engagement across 60+ international study programs.\n\nFSU ranks #=546 globally in QS 2027 (#549 in 2026) and holds elite U.S. News 2026 global and national subject rankings: #25 globally (#2 US Public, #1 in Florida) for Education & Educational Research, #80 globally for Psychology & Psychiatry, #89 globally for Social Sciences & Public Health, #31 among US Public Universities for Undergraduate Business, #21 for DNP Nursing, #36 for Graduate Statistics, #48 for Political Science, and #32 for Clinical Psychology.\n\nFor non-resident and international undergraduate applicants, FSU is widely recognized for affordability and merit aid. Admitted out-of-state freshmen are automatically evaluated for 50% or 100% Out-of-State Tuition Reduction Waivers. Standard out-of-state undergraduate tuition is $22,232/year, making FSU's total estimated on-campus Cost of Attendance ($43,916/year) exceptionally competitive. FSU features a vibrant campus life with over 700 student organizations, 54 fraternities and sororities, and ACC Seminole athletics.",
    "topProgramsList": [
      {
        "name": "Education & Educational Research",
        "ranking": "#25 Globally / #2 US Public (US News Global)",
        "description": "World-ranked leadership in educational psychology, instructional design, policy, and teacher education."
      },
      {
        "name": "College of Business (Undergraduate Business)",
        "ranking": "#31 US Public Universities",
        "description": "Risk management, finance, real estate, accounting, management information systems, and entrepreneurship."
      },
      {
        "name": "Psychology & Clinical Psychology",
        "ranking": "#80 Globally / #32 US Graduate",
        "description": "Renowned research in cognitive psychology, behavioral neuroscience, and clinical psychological science."
      },
      {
        "name": "Computer Science & Information Technology",
        "ranking": "Top National Tier",
        "description": "Offers BA/BS in Computer Science, cybersecurity, systems programming, and information technology."
      },
      {
        "name": "Statistics & Data Science",
        "ranking": "#36 US Graduate / #24 Public",
        "description": "Statistical modeling, biostatistics, machine learning, and quantitative risk analysis."
      },
      {
        "name": "School of Nursing (DNP)",
        "ranking": "#21 US Overall / #12 Public",
        "description": "Top-tier Doctor of Nursing Practice, clinical nursing practice, and healthcare leadership."
      },
      {
        "name": "Political Science, Criminology & Public Affairs",
        "ranking": "#48 Political Sci / #44 Public Affairs",
        "description": "Direct proximity to Florida's state government ecosystem, state legislature, and policy think tanks."
      ,
    "logoText": "FSU",
    "logoBg": "from-emerald-700 to-teal-950",
    "degreesOffered": ["Undergraduate", "Graduate", "PhD"],
    "tags": ["United States", "Europe", "International", "Research"],
    "requiresSeparateApp": true}
    ],
    "allScholarshipsList": [,

      {
        "id": "uni-054-1",
        "title": "FSU Out-of-State Tuition Reduction Scholarship",
        "amount": "50% or 100% Out-of-State Tuition Fee Waiver",
        "coverage": "Partial Aid",
        "eligibility": "Admitted non-resident and international undergraduate applicants based on academic merit and test scores.",
        "description": "Waives 50% to 100% of out-of-state tuition fees for high-achieving non-resident freshmen.",
        "deadline": "Dec 1 (Priority Scholarship Deadline)",
        "requiresSeparateApp": false
      ,
    "logoText": "FSU",
    "logoBg": "from-blue-700 to-indigo-950",
    "degreesOffered": ["Undergraduate", "Graduate", "PhD"]},

      {
        "id": "uni-054-2",
        "title": "FSU Out-of-State National Merit Package",
        "amount": "~$91,080 Total Value over 4 Years",
        "coverage": "Full Ride",
        "eligibility": "National Merit Finalists entering FSU as non-residents.",
        "description": "Includes 100% out-of-state tuition waiver (~$73,080 over 4 yrs), $16,000 Vires Scholarship, and $2,000 NMSC stipend. To receive this package, students must be designated a National Merit Finalist and list FSU as First Choice with NMSC by May 1.",
        "deadline": "Oct 15 (EA) / Dec 1 (RD) | May 1 (NMSC First Choice Designation)",
        "requiresSeparateApp": false
      }
    ],
    "degreesOffered": [
      "Undergraduate",
      "Graduate",
      "PhD"
    ],
    "tags": [
      "R1 Research",
      "Out-of-State Waiver",
      "Education #25",
      "Tallahassee",
      "Florida State",
      "QS #546"
    ],
    "requiresSeparateApp": false,
    "logoText": "FSU",
    "logoBg": "from-red-900 to-yellow-600"
  },

  {
    "id": "uni-055",
    "universityName": "Case Western Reserve University",
    "location": "Cleveland, Ohio, United States",
    "country": "United States",
    "flag": "🇺🇸",
    "foundingYear": "1826",
    "scholarshipTitle": "CWRU First-Year Merit Scholarships & Need-Based Aid (Limited International)",
    "ranking": "#=326 Global (QS 2027)",
    "qsSubjectRankings": "US News 2026: Biomedical Eng #17, Nursing #13, Engineering #42, Business #41, Med Research #25, CS #63-68, National Univ #51",
    "coverage": "Partial Aid",
    "amountValue": "Varies (Up to Full Tuition Competitive Merit Awards) | Limited Need-Based Aid",
    "tuitionFee": "$71,410 / year (Tuition) | Total Residential Budget $95,704 / year",
    "tuitionAmountNumeric": 71410,
    "hasFullRide": false,
    "hasPartialAid": true,
    "hasFinancialAid": true,
    "financialAidType": "Merit-Based",
    "financialAidDetails": "Case Western Reserve University automatically considers all first-year applicants for competitive undergraduate merit scholarships based on academic excellence, standardized test scores, leadership, and personal achievements. CWRU also offers a limited amount of institutional need-based aid to international first-year and transfer applicants (CSS Profile required). At the graduate and PhD levels, CWRU provides departmental merit scholarships, teaching assistantships, research assistantships, and tuition fellowships in qualifying engineering, medical, and scientific disciplines.",
    "minGpa": "3.8+",
    "minSat": "1420 - 1530 (Enrolled SAT Range)",
    "satRequirementCategory": "1400",
    "satPolicyDetails": "Test-Optional undergraduate admissions. SAT/ACT scores or outstanding high school transcripts are evaluated for automatic consideration for First-Year Merit Scholarships.",
    "minIelts": "7.0+",
    "ieltsCategory": "7.0",
    "toeflRequirement": "90+",
    "commonAppAccepted": true,
    "applicationPortalDetails": "Common Application & Coalition Application",
    "acceptanceRate": "27.0%",
    "deadline": "Nov 1 (Early Decision I / Early Action) / Jan 15 (Regular Decision)",
    "description": "Founded in 1826 in Cleveland, CWRU is an elite private research university ranked #=326 globally in QS 2027 and #51 in US News. Renowned for Biomedical Engineering (#17 US), Nursing (#13), and Sears think[box] innovation hub. Automatic merit scholarship consideration.",
    "overviewLong": "Case Western Reserve University is a leading private research university located in Cleveland's University Circle—a concentrated 550-acre cultural, medical, and research district. Founded in 1826, CWRU is nationally distinguished for seamless integration between engineering, computer science, biomedical technology, medicine, nursing, and management. It houses Sears think[box]—a massive 50,000 sq ft, 7-story innovation and prototyping center open to all students for hands-on fabrication and startup creation.\n\nCWRU ranks #=326 globally in QS 2027 and #51 nationally in U.S. News 2026. Academic highlights include Biomedical Engineering (#17 US Undergraduate, #19 Graduate), Frances Payne Bolton School of Nursing (#13 US Undergraduate), Case School of Engineering (#42 US Undergraduate, #52 Graduate), Weatherhead School of Management (#41 US Undergraduate Business), School of Medicine (#25 Medical Research), and Computer Science (#63-68 US).\n\nFor international applicants, CWRU automatically evaluates all incoming first-year students for competitive First-Year Merit Scholarships based on academic record, test scores, and personal leadership. CWRU also offers a limited pool of need-based financial aid for international applicants submitting the CSS Profile. Undergraduate tuition for 2026–27 is $71,410/year ($95,704 total residential budget). CWRU features over 300 student organizations deeply connected to Cleveland's world-class medical facilities (Cleveland Clinic, University Hospitals) and cultural institutions.",
    "topProgramsList": [
      {
        "name": "Biomedical Engineering (Case School of Engineering)",
        "ranking": "#17 US Undergraduate / #19 Graduate (US News)",
        "description": "World-leading bioengineering program combining engineering innovation with clinical research at Cleveland Clinic."
      },
      {
        "name": "Frances Payne Bolton School of Nursing",
        "ranking": "#13 in the US (US News Undergraduate)",
        "description": "Pioneering nursing education with over 1,300 hours of clinical placement starting in the first semester."
      },
      {
        "name": "Case School of Engineering (Aerospace, Mechanical, Electrical)",
        "ranking": "#42 US Undergraduate / #52 Graduate",
        "description": "Advanced engineering research spanning robotics, materials science, aerospace (#35), and mechanical systems (#47)."
      },
      {
        "name": "School of Medicine & Pre-Med Pathways",
        "ranking": "#25 US Medical Research (US News)",
        "description": "Top-tier pre-med preparation and biomedical research in partnership with University Hospitals and Cleveland Clinic."
      },
      {
        "name": "Weatherhead School of Management",
        "ranking": "#41 US Undergraduate Business",
        "description": "Offers accounting, finance, design-led management, organizational behavior, and quantitative economics."
      },
      {
        "name": "Computer Science",
        "ranking": "63-68 (US News)",
        "description": "Artificial intelligence, software engineering, algorithms, cybersecurity, and health informatics."
      }
    ],
    "allScholarshipsList": [
      {
        "id": "uni-055-1",
        "title": "CWRU First-Year Automatic Merit Scholarships",
        "amount": "Varies (Partial to Full Tuition Awards)",
        "coverage": "Partial Aid",
        "eligibility": "All admitted first-year undergraduate applicants evaluated automatically upon application.",
        "description": "Merit scholarships awarded based on academic performance, test scores, leadership, and personal achievement.",
        "deadline": "Nov 1 (ED I/EA) / Jan 15 (RD)",
        "requiresSeparateApp": false
      },
      {
        "id": "uni-055-2",
        "title": "CWRU International Need-Based Aid",
        "amount": "Varies (Limited Need-Based Support)",
        "coverage": "Partial Aid",
        "eligibility": "International undergraduate applicants demonstrating financial need via CSS Profile.",
        "description": "Limited institutional need-based financial aid awarded to qualified first-year international applicants.",
        "deadline": "Nov 1 (ED I) / Jan 15 (RD)",
        "requiresSeparateApp": false
      }
    ],
    "degreesOffered": [
      "Undergraduate",
      "Graduate",
      "PhD"
    ],
    "tags": [
      "Biomedical Eng #17",
      "Nursing #13",
      "Sears Thinkbox",
      "Cleveland Clinic",
      "CWRU Merit",
      "QS #326"
    ],
    "requiresSeparateApp": false,
    "logoText": "CWRU",
    "logoBg": "from-blue-900 to-slate-900"
  },

  {
    "id": "uni-056",
    "universityName": "Tufts University",
    "location": "Medford/Somerville, Massachusetts, United States",
    "country": "United States",
    "flag": "🇺🇸",
    "foundingYear": "1852",
    "scholarshipTitle": "Tufts Need-Based Financial Aid - 100% Demonstrated Need Met (All Admitted)",
    "ranking": "#=338 Global (QS 2027)",
    "qsSubjectRankings": "US News: Occupational Therapy #13, Physician Assistant #21, Veterinary Medicine #13 | QS 2026: Dentistry #29, Veterinary Medicine #22, Int'l Relations / Politics #22",
    "coverage": "Full Ride",
    "amountValue": "100% Demonstrated Need Met (Tuition, Room, Board & Fees)",
    "tuitionFee": "$74,862 / year (Tuition) | Total Estimated COA $97,152 / year (w/o health ins)",
    "tuitionAmountNumeric": 74862,
    "hasFullRide": true,
    "hasPartialAid": true,
    "hasFinancialAid": true,
    "financialAidType": "Need-Based",
    "financialAidDetails": "Tufts University meets 100% of demonstrated financial need for ALL admitted undergraduate students who apply for aid, regardless of citizenship (domestic and international students, CSS Profile required). Tufts does not offer general academic merit scholarships for undergraduates, but provides specialized grants such as the Davis United World College (UWC) Scholars Program (up to $10,000/year) and Tufts National Merit Scholarships ($500/semester). Graduate Master's and PhD students receive program-dependent departmental fellowships, teaching assistantships, research assistantships, and full GSAS PhD tuition scholarships.",
    "minGpa": "3.9+",
    "minSat": "1440 - 1540 (Enrolled SAT Range)",
    "satRequirementCategory": "1400",
    "satPolicyDetails": "Test-Optional undergraduate admissions. Recommended English proficiency exam scores for international applicants: IELTS 7.0+, TOEFL iBT 100+, or Duolingo English Test (DET) 120+ / 130+. CSS Profile and institutional financial aid documentation required at time of application for international need-based consideration.",
    "minIelts": "7.0+",
    "ieltsCategory": "7.0",
    "toeflRequirement": "100+",
    "commonAppAccepted": true,
    "applicationPortalDetails": "Common Application & Coalition Application",
    "acceptanceRate": "10.0%",
    "deadline": "Nov 1 (ED I) / Jan 4 (Early Decision II & Regular Decision)",
    "description": "Founded in 1852 in Greater Boston, Tufts is a prestigious private R1 research university ranked #=338 globally in QS 2027. Home to the Fletcher School of Law and Diplomacy. Meets 100% of demonstrated financial need for all admitted international undergraduates.",
    "overviewLong": "Tufts University is a premier private R1 research university located in Medford/Somerville, Massachusetts, just outside Boston. Founded in 1852, Tufts is internationally renowned for combining rigorous research and technology with interdisciplinary liberal arts, civic engagement, and global perspectives. Main undergraduate schools include the School of Arts and Sciences, School of Engineering, and SMFA at Tufts (School of the Museum of Fine Arts), alongside premier graduate centers including the Fletcher School of Law and Diplomacy, Cummings School of Veterinary Medicine, Tufts School of Dental Medicine, and Tufts School of Medicine.\n\nTufts ranks #=338 globally in QS 2027 (#344 in 2026) and is recognized for cutting-edge programs in Occupational Therapy (#13 US News Graduate), Veterinary Medicine (#22 Global), Dentistry (#29 Global), and International Relations / Politics (#22 QS National).",
    "topProgramsList": [
      {
        "name": "Occupational Therapy",
        "ranking": "#13 (US News Graduate)",
        "description": "Ranked near the very top tier of all American graduate specialties."
      },
      {
        "name": "Veterinary Medicine",
        "ranking": "#22 Global (QS 2026) / #13 (US News)",
        "description": "The Cummings School of Veterinary Medicine climbed 21 global spots in 2026."
      },
      {
        "name": "Physician Assistant",
        "ranking": "#21 (US News Graduate)",
        "description": "Heavily competitive health program anchoring Tufts' Boston health-sciences campus."
      },
      {
        "name": "International Relations / Politics",
        "ranking": "#22 (QS subject National ranking)",
        "description": "By the historic Fletcher School of Law and Diplomacy, a premier global affairs institution."
      },
      {
        "name": "Dentistry",
        "ranking": "#29 (QS 2026)",
        "description": "Tufts School of Dental Medicine ranks #8 inside the entire United States."
      }
    ],
    "allScholarshipsList": [
      {
        "id": "uni-056-1",
        "title": "Tufts Need-Based Financial Aid (100% Need Met)",
        "amount": "100% Demonstrated Financial Need Met (Grants)",
        "coverage": "Full Ride",
        "eligibility": "Admitted undergraduate students (Domestic & International) demonstrating financial need via CSS Profile.",
        "description": "Meets 100% of demonstrated financial need for all admitted undergraduates requesting aid upon application.",
        "deadline": "Nov 1 (ED I) / Jan 4 (ED II & RD)",
        "requiresSeparateApp": false
      },
      {
        "id": "uni-056-2",
        "title": "Davis United World College (UWC) Scholars Grant",
        "amount": "Up to $10,000 / year",
        "coverage": "Partial Aid",
        "eligibility": "Qualifying United World College (UWC) graduates entering Tufts.",
        "description": "Specialized scholarship grant for UWC graduates that can be combined with Tufts need-based financial aid.",
        "deadline": "Jan 4 (Annual Application)",
        "requiresSeparateApp": false
      }
    ],
    "degreesOffered": [
      "Undergraduate",
      "Graduate",
      "PhD"
    ],
    "tags": [
      "100% Need Met",
      "Fletcher School",
      "Greater Boston",
      "R1 Research",
      "Tufts Aid",
      "QS #338"
    ],
    "requiresSeparateApp": false,
    "logoText": "TUFTS",
    "logoBg": "from-blue-800 to-sky-900"
  },

  {
    "id": "uni-057",
    "universityName": "University of Miami",
    "location": "Coral Gables, Florida, United States",
    "country": "United States",
    "flag": "🇺🇸",
    "foundingYear": "1925",
    "scholarshipTitle": "UM Stamps, Singer & Merit Scholarships (Up to Full Ride / Full Tuition)",
    "ranking": "#=338 Global (QS 2027) | #=314 (QS 2026) | Private R1",
    "qsSubjectRankings": "ARWU: Oceanography & Marine Sciences #13 | US News: Physical Therapy #12, Clinical Psychology #24, Healthcare Management #28, Business (Full-Time MBA) #39",
    "coverage": "Full Ride",
    "amountValue": "Up to $66,312 / year (Full Tuition) or Full COA + Housing & Stipend",
    "tuitionFee": "$66,312 / year (Full-Time Annual Tuition) | Total On-Campus COA $98,000 – $102,000 / year",
    "tuitionAmountNumeric": 66312,
    "hasFullRide": true,
    "hasPartialAid": true,
    "hasFinancialAid": true,
    "financialAidType": "Merit-Based",
    "financialAidDetails": "The University of Miami awards prestigious merit scholarships to outstanding undergraduate applicants. Top awards include the Stamps Scholarship (Full Cost of Attendance + $12,000 enrichment fund) and Isaac Bashevis Singer / Ronald A. Hammond Scholarships (Full Tuition). Other merit awards range from partial tuition up to half tuition. International applicants are evaluated for merit scholarships; however, institutional need-based financial aid is limited and evaluated award-by-award. Graduate students receive funding through departmental assistantships (TA/RA/GA) offering up to 50%+ tuition waivers and employment stipends. PhD funding is program-dependent.",
    "minGpa": "3.7+",
    "minSat": "1330 - 1470 (Admitted Middle 50% SAT)",
    "satRequirementCategory": "Optional",
    "satPolicyDetails": "Test-Optional for undergraduate admissions. Standardized test scores (SAT/ACT) may be submitted to strengthen merit scholarship candidacy. Recommended English proficiency exam scores for international applicants: IELTS 6.5 - 7.0+ or TOEFL iBT 80 - 100+.",
    "minIelts": "6.5+",
    "ieltsCategory": "6.5",
    "toeflRequirement": "80 - 100+ iBT",
    "commonAppAccepted": true,
    "applicationPortalDetails": "Common Application with University of Miami Member Supplement. Early Decision I (Nov 1), Early Action (Nov 1), Early Decision II (Jan 10), Regular Decision (Jan 10). To be considered for premier merit scholarships (Stamps, Singer, Hammond), students must apply by November 1.",
    "acceptanceRate": "19%",
    "deadline": "Nov 1 (EA/ED I - Premier Merit Deadline) | Jan 10 (RD/ED II)",
    "description": "Founded in 1925 in Coral Gables, Florida, UM is ranked #=338 globally in QS 2027, excelling in Oceanography & Marine Sciences (#13 Global) and Physical Therapy (#12 US).",
    "overviewLong": "The University of Miami is a premier private R1 research university located in Coral Gables, Florida, serving over 19,000 undergraduate and graduate students, including more than 2,000 international students from over 100 countries. Miami combines a classic residential campus environment with direct access to the economic, cultural, and technological hub of South Florida.\n\nAcademic strengths span world-leading marine and atmospheric science at the Rosenstiel School (#13 globally), health sciences like physical therapy (#12 nationally) and clinical psychology (#24 nationally), and the Herbert Business School whose Full-Time MBA ranked #39 nationally. Student life is vibrant with 300+ registered student organizations, Division I ACC athletics, and extensive research centers. Undergraduate full-time annual tuition is $66,312/year, while total on-campus Cost of Attendance ranges from $98,000 to $102,000 per year. Premier merit scholarships like Stamps and Isaac Bashevis Singer offer awards ranging from full tuition to full cost of attendance for top-tier applicants.",
    "topProgramsList": [
      {
        "name": "Oceanography & Marine Sciences",
        "ranking": "#13 Global (ARWU)",
        "description": "Driven by the world-renowned Rosenstiel School of Marine, Atmospheric, and Earth Science, leveraging its strategic South Florida location."
      },
      {
        "name": "Physical Therapy",
        "ranking": "#12 Nationwide (U.S. News)",
        "description": "Anchored within the top tier of medical specialties on the UM medical campus."
      },
      {
        "name": "Clinical Psychology",
        "ranking": "#24 Nationwide (US News)",
        "description": "This competitive doctorate program is a major research anchor for health and psychological disciplines."
      },
      {
        "name": "Healthcare Management",
        "ranking": "#28 Nationwide (US News)",
        "description": "A prominent, cross-disciplinary path combining medical and administration excellence."
      },
      {
        "name": "Business (Full-Time MBA)",
        "ranking": "#39 Nationwide (U.S. News)",
        "description": "The Miami Herbert Business School MBA surged 11 spots in 2026, marking an all-time school record and tying for #1 in Florida."
      }
    ],
    "allScholarshipsList": [
      {
        "id": "uni-057-1",
        "title": "University of Miami Stamps Scholarship",
        "amount": "Full Cost of Attendance + $12,000 Enrichment Fund",
        "coverage": "Full Ride",
        "eligibility": "Top high school seniors applying by the Early Action / Early Decision I deadline (Nov 1). International students eligible.",
        "description": "UM's most prestigious merit award. Covers full tuition, mandatory fees, on-campus housing, meal plan, university health insurance, textbook allowance, and a $12,000 stipend for research, study abroad, or unpaid internships.",
        "deadline": "Nov 1 (Early Action / ED I)",
        "requiresSeparateApp": false
      },
      {
        "id": "uni-057-2",
        "title": "Isaac Bashevis Singer & Ronald A. Hammond Scholarships",
        "amount": "Full Tuition ($66,312 / year value)",
        "coverage": "Full Tuition",
        "eligibility": "Exceptionally high-achieving incoming freshmen. International applicants eligible.",
        "description": "Full-tuition merit scholarships awarded based on academic performance, leadership, and personal achievement over four years.",
        "deadline": "Nov 1 (Early Action / ED I)",
        "requiresSeparateApp": false
      },
      {
        "id": "uni-057-3",
        "title": "Canes Achievement & President's Scholarships",
        "amount": "$10,000 to $28,000 / year",
        "coverage": "Partial Aid",
        "eligibility": "Academically competitive undergraduate applicants evaluated automatically upon admission.",
        "description": "Four-year renewable merit scholarships assisting incoming undergraduate students with tuition costs.",
        "deadline": "Nov 1 (EA) / Jan 10 (RD)",
        "requiresSeparateApp": false
      }
    ],
    "degreesOffered": [
      "Bachelors",
      "Masters",
      "PhD",
      "Doctorate (MD, JD)"
    ],
    "tags": [
      "QS Top 350",
      "Private Research R1",
      "Marine & Environmental Science",
      "Health & Medicine",
      "Business & Engineering",
      "Florida"
    ],
    "requiresSeparateApp": false,
    "logoText": "UM",
    "logoBg": "from-orange-600 to-emerald-800"
  },

  {
    "id": "uni-058",
    "universityName": "University of Illinois Chicago",
    "location": "Chicago, Illinois, United States",
    "country": "United States",
    "flag": "🇺🇸",
    "foundingYear": "1982",
    "scholarshipTitle": "UIC Laurette Kirstein Scholarship & Graduate Assistantship Tuition Waivers",
    "ranking": "#=370 Global (QS 2027) | #=334 (QS 2026) | #=59 CS Graduate (US News)",
    "qsSubjectRankings": "US News: Pharmacy #11, Occupational Therapy #5, CS Graduate #59, Engineering #68, DNP Nursing #11",
    "coverage": "Partial Aid",
    "amountValue": "$35,596 / year (Estimated Int'l Tuition & Fees) | Full Tuition Waiver for Funded Graduate Assistantships",
    "tuitionFee": "$35,596 / year (Int'l Tuition & Fees) | Total Estimated COA $55,570 / year",
    "tuitionAmountNumeric": 35596,
    "hasFullRide": false,
    "hasPartialAid": true,
    "hasFinancialAid": true,
    "financialAidType": "Partial Merit",
    "financialAidDetails": "UIC is Chicago's largest public R1 research university. For international undergraduates, tuition & fees are estimated at $35,596/year (total COA $55,570/yr). Currently enrolled international students can apply for the Laurette Kirstein Scholarship for International Students. NOTE ON MERIT TUITION AWARD: The UIC Merit Tuition Award ($9,128/yr) is explicitly restricted to Out-of-State U.S. domestic freshmen (F-1 international students do not qualify). At the graduate level, UIC provides Teaching Assistantships (TA), Research Assistantships (RA), and Graduate Assistantships (GA) offering 100% full tuition waivers and monthly stipends tied to appointment FTE percentage, alongside Grad Hourly positions starting at $31.03/hr. Several PhD departments offer multi-year guaranteed funding packages.",
    "minGpa": "3.0+",
    "minSat": "1120 - 1350 (Admitted Middle 50% SAT)",
    "satRequirementCategory": "Optional",
    "satPolicyDetails": "Test-Optional for undergraduate admissions. International students must demonstrate English proficiency via IELTS (minimum 6.5 overall with subscore minimums), TOEFL iBT (80+), or Duolingo English Test (115+).",
    "minIelts": "6.5+",
    "ieltsCategory": "6.5",
    "toeflRequirement": "80+ iBT",
    "commonAppAccepted": true,
    "applicationPortalDetails": "Common Application or UIC Web Application. Early Action (Nov 1), Regular Decision (Feb 1). Graduate application deadlines vary by department.",
    "acceptanceRate": "79%",
    "deadline": "Nov 1 (Early Action) | Feb 1 (Regular Decision)",
    "description": "Chicago's largest public R1 university ranked #=370 globally in QS 2027 (#=334 in 2026). Top-tier health sciences (#11 Pharmacy, #5 OT) and engineering/CS (#59 CS Graduate). Total int'l undergrad cost ~$55,570/yr. Graduate assistantships cover 100% tuition + stipend.",
    "overviewLong": "The University of Illinois Chicago (UIC) is Chicago's largest university and its only public R1 research institution, serving over 30,000 students across 16 academic colleges on a 244-acre campus adjacent to downtown Chicago. UIC provides top-ranked programs in health sciences (#11 Pharmacy, #5 Occupational Therapy, #11 DNP Nursing), computer science (#59 US News Graduate), engineering (#68 US News Graduate), biostatistics (#35), mathematics (#46), statistics (#49), architecture, urban planning, and business.\n\nStudent life includes 460+ registered student organizations, 30 fraternities and sororities, 20 NCAA Division I sports teams, and 18 sport clubs (including cricket, competitive gaming, rugby, and badminton). International undergraduate tuition and fees are estimated at $35,596/year with total living and academic expenses around $55,570/year. Currently enrolled international students can apply for the Laurette Kirstein Scholarship. Graduate students benefit from TA/RA/GA appointments providing 100% full tuition waivers and monthly stipend contracts, alongside Grad Hourly positions starting at $31.03/hr.",
    "topProgramsList": [
      {
        "name": "Pharmacy & Pharmaceutical Sciences",
        "ranking": "#11 in the US (US News Graduate)",
        "description": "Premier college of pharmacy featuring clinical research, drug discovery, and urban health practice."
      },
      {
        "name": "Occupational Therapy",
        "ranking": "#5 in the US (US News Graduate)",
        "description": "Top 5 national program advancing rehabilitation science, community health, and clinical practice."
      },
      {
        "name": "Computer Science & Data Science",
        "ranking": "#=59 in the US (US News Graduate)",
        "description": "AI, cybersecurity, virtual reality, human-computer interaction, and software engineering."
      },
      {
        "name": "Engineering (Biomedical, Civil, Chemical, Computer)",
        "ranking": "#=68 in the US (US News Graduate)",
        "description": "Comprehensive engineering college with state-of-the-art labs and Chicago tech industry partnerships."
      },
      {
        "name": "Nursing (DNP & Master's)",
        "ranking": "#11 DNP / #=22 Master's in the US",
        "description": "Top national nursing school integrated with UI Health hospital ecosystem."
      },
      {
        "name": "Biostatistics & Public Health",
        "ranking": "#35 in the US (US News Graduate)",
        "description": "Epidemiology, biostatistics, environmental health, and health policy."
      },
      {
        "name": "Mathematics & Statistics",
        "ranking": "#46 Math / #49 Stats in the US",
        "description": "Pure mathematics, applied statistics, data modeling, and quantitative analytics."
      }
    ],
    "allScholarshipsList": [
      {
        "id": "uni-058-1",
        "title": "Laurette Kirstein Scholarship for International Students",
        "amount": "Tuition / Educational Expense Account Credit",
        "coverage": "Partial Aid",
        "eligibility": "Currently enrolled international students at UIC with strong academic standing.",
        "description": "Administered by the Office of International Services to support active international students with tuition, book, and living expense account credits.",
        "deadline": "Varies by Academic Term",
        "requiresSeparateApp": true
      },
      {
        "id": "uni-058-2",
        "title": "UIC Graduate Assistantships (TA / RA / GA)",
        "amount": "100% Full Tuition Waiver + Monthly Assistantship Stipend ($31.03/hr Grad Hourly Wage)",
        "coverage": "Full Tuition",
        "eligibility": "Admitted Master's and PhD graduate students securing departmental assistantships (25%–67% appointment).",
        "description": "Provides 100% full tuition waiver, partial fee waiver, and monthly stipend contracts for teaching/research assistantships, as well as Grad Hourly positions paid at $31.03/hr.",
        "deadline": "Varies by Graduate Department (Dec–Feb)",
        "requiresSeparateApp": true
      }
    ],
    "degreesOffered": [
      "Bachelors",
      "Masters",
      "PhD",
      "Doctorate (PharmD, DNP)"
    ],
    "tags": [
      "QS Top 400",
      "Public Research R1",
      "Chicago Location",
      "Top Pharmacy & Health",
      "CS & Engineering",
      "Illinois"
    ],
    "requiresSeparateApp": false,
    "logoText": "UIC",
    "logoBg": "from-red-700 to-blue-900"
  },

  {
    "id": "uni-059",
    "universityName": "Northeastern University",
    "location": "Boston, Massachusetts, United States",
    "country": "United States",
    "flag": "🇺🇸",
    "foundingYear": "1898",
    "scholarshipTitle": "Northeastern International Merit Scholarships & Stamps Scholars",
    "ranking": "#=385 Global (QS 2027) | #384 (QS 2026) | #41 Supply Chain (QS 2026)",
    "qsSubjectRankings": "Supply Chain Management Master's (#41 Global) | Master's MBA (#201-250 Global, QS 2026) | Khoury CS | Co-op (#1 US)",
    "coverage": "Partial Aid",
    "amountValue": "$10,000 to $35,000 / year (International Merit) or Full COA (Stamps)",
    "tuitionFee": "$33,995 / semester (~$67,990 / year Tuition) | Total COA ~$90,000 / year",
    "tuitionAmountNumeric": 67990,
    "hasFullRide": true,
    "hasPartialAid": true,
    "hasFinancialAid": true,
    "financialAidType": "Merit-Based",
    "financialAidDetails": "Northeastern is a global private R1 research university famous for its co-op experiential education model. International undergraduate applicants are automatically evaluated for merit scholarships ranging from $10,000 to $35,000/year (awards do not cover total COA). Premier full-ride awards include the Stamps Scholars Program (Full Cost of Attendance + research stipend; requires applying by EA/ED I on Nov 1; RD applicants not considered). Torch Scholars is restricted to U.S. Citizens / Permanent Residents. Note: International undergraduates are NOT eligible for institutional need-based aid. Graduate students receive assistantships and departmental tuition scholarships.",
    "minGpa": "3.8+",
    "minSat": "1430 - 1550 (Admitted Middle 50% SAT)",
    "satRequirementCategory": "Optional",
    "satPolicyDetails": "Test-Optional for undergraduate admissions. Recommended English proficiency exam scores for international applicants: IELTS 7.0+, TOEFL iBT 100+, or Duolingo English Test (DET) 130+.",
    "minIelts": "7.0+",
    "ieltsCategory": "7.0",
    "toeflRequirement": "100+ iBT / 130+ DET",
    "commonAppAccepted": true,
    "applicationPortalDetails": "Common Application or Coalition Application. Early Decision I (Nov 1), Early Action (Nov 1), Early Decision II (Jan 1), Regular Decision (Jan 1). Merit scholarships awarded automatically upon admission evaluation.",
    "acceptanceRate": "5.6%",
    "deadline": "Nov 1 (EA / ED I) | Jan 1 (ED II / RD)",
    "description": "Private R1 university in Boston ranked #=385 globally in QS 2027 (#384 in 2026, #201-250 MBA Global). World-famous co-op experiential education program. Int'l merit awards range $10k–$35k/yr; Stamps Scholars covers full COA.",
    "overviewLong": "Northeastern University is a major private R1 research university headquartered in Boston, Massachusetts, with a global network including campuses in London, Oakland, Seattle, Silicon Valley, and Charlotte. Northeastern is globally renowned for its cooperative education (co-op) model, integrating rigorous academic coursework with up to 18 months of full-time professional experience at top corporations, research institutes, and startups worldwide.\n\nAcademic strengths center on Khoury College of Computer Sciences (CS, AI, Cybersecurity, Data Science), College of Engineering, D'Amore-McKim School of Business (Master's MBA #201-250 Global, #41 Supply Chain, #53 Int'l Trade in QS 2026), health sciences, and biotechnology. Student life features 17 Division I athletics teams, 55 intramural sports, 64 club teams, and 400+ student organizations. Undergraduate tuition is ~$33,995 per semester (~$67,990/year). International students are considered automatically for $10,000–$35,000/year merit awards; premier Early Action / Early Decision I candidates can compete for full-cost awards like the Stamps Scholarship (RD applicants are generally not considered). Note: The Torch Scholars Program is restricted to U.S. Citizens and Permanent Residents.",
    "topProgramsList": [
      {
        "name": "Computer Science, AI & Cybersecurity (Khoury College)",
        "ranking": "Top National R1 Tier",
        "description": "Pioneering CS college integrating theory, artificial intelligence, security, and co-op industry placements."
      },
      {
        "name": "Master's in Supply Chain Management",
        "ranking": "#41 Globally (QS World 2026)",
        "description": "Top global supply chain program covering logistics, global trade operations, and analytics."
      },
      {
        "name": "Master's MBA",
        "ranking": "201-250 (QS 2026)",
        "description": "D'Amore-McKim global MBA program focusing on corporate innovation, entrepreneurship, and international trade."
      },
      {
        "name": "Co-op Experiential Education Program",
        "ranking": "#1 Co-op Program in the US",
        "description": "World-leading experiential model integrating up to 18 months of full-time paid professional employment."
      },
      {
        "name": "College of Engineering (Computer, Electrical, Mechanical)",
        "ranking": "Top National Tier",
        "description": "Cutting-edge robotics, bioengineering, wireless networks, and sustainable infrastructure."
      },
      {
        "name": "D'Amore-McKim School of Business & Finance",
        "ranking": "Top National Tier",
        "description": "Innovation-driven business education with co-op integration at global financial firms."
      },
      {
        "name": "Biotechnology & Health Sciences",
        "ranking": "Greater Boston Biotech Ecosystem",
        "description": "Direct industry pipeline to Greater Boston biotech, pharmaceutical, and healthcare hubs."
      }
    ],
    "allScholarshipsList": [
      {
        "id": "uni-059-1",
        "title": "Northeastern International Merit Scholarships",
        "amount": "$10,000 to $35,000 / year",
        "coverage": "Partial Aid",
        "eligibility": "All first-year international undergraduate applicants evaluated automatically.",
        "description": "Competitive four-year merit awards ranging from $10,000 to $35,000 per year awarded based on academic excellence and holistic review.",
        "deadline": "Nov 1 (EA/ED I) / Jan 1 (RD)",
        "requiresSeparateApp": false
      },
      {
        "id": "uni-059-2",
        "title": "Stamps Scholars Program at Northeastern",
        "amount": "Full Cost of Attendance + Research & Travel Stipend",
        "coverage": "Full Ride",
        "eligibility": "Top-tier high school applicants applying by Early Action or Early Decision I (Nov 1). Regular Decision applicants are generally not considered.",
        "description": "Northeastern's top merit award covering full tuition, fees, room, board, plus independent research and study-abroad project funding.",
        "deadline": "Nov 1 (Early Action / ED I Deadline Only)",
        "requiresSeparateApp": false
      },
      {
        "id": "uni-059-3",
        "title": "College of Engineering Graduate Scholarships",
        "amount": "25% Tuition Waiver Scholarship",
        "coverage": "Partial Aid",
        "eligibility": "Admitted Master's students in eligible engineering graduate programs.",
        "description": "Departmental tuition scholarship reducing tuition burden by 25% for qualifying entering master's terms.",
        "deadline": "Varies by Graduate Term",
        "requiresSeparateApp": false
      }
    ],
    "degreesOffered": [
      "Bachelors",
      "Masters",
      "PhD",
      "Doctorate"
    ],
    "tags": [
      "QS Top 400",
      "Co-op & Experiential Learning",
      "Khoury Computer Science",
      "Boston Tech Hub",
      "Private Research R1",
      "Massachusetts"
    ],
    "requiresSeparateApp": false,
    "logoText": "NEU",
    "logoBg": "from-red-900 to-stone-950"
  },

  {
    "id": "uni-060",
    "universityName": "Wake Forest University",
    "location": "Winston-Salem, North Carolina, United States",
    "country": "United States",
    "flag": "🇺🇸",
    "foundingYear": "1834",
    "scholarshipTitle": "Wake Forest Carswell, Reynolds, Stamps & Presidential Scholarships",
    "ranking": "#801-850 Global (QS 2027) | #791-800 (QS 2026) | Private R2",
    "qsSubjectRankings": "US News: Physician Assistant #11, Undergraduate Engineering #14, Nursing-Anesthesia #15, Part-Time MBA #26 | QS 2026: Masters in Management #131–140",
    "coverage": "Full Ride",
    "amountValue": "Full Cost of Attendance ($98,730/yr) or $16,000/yr Presidential Award",
    "tuitionFee": "$71,894 / year Tuition ($1,436 Fees) | Total Estimated COA $98,730 / year",
    "tuitionAmountNumeric": 71894,
    "hasFullRide": true,
    "hasPartialAid": true,
    "hasFinancialAid": true,
    "financialAidType": "Merit-Based",
    "financialAidDetails": "Wake Forest is a premier private R2 research university in Winston-Salem, NC. Merit scholarships are awarded to fewer than 3% of first-year applicants. International students are eligible for top full-cost merit scholarships including the Carswell, Gordon, Reynolds, and Stamps Scholarships (covering full tuition, fees, room, board, and enrichment stipends). 20 Presidential Scholarships ($16,000/yr) are awarded for achievements in arts, debate, and music. NOTE: Foreign national undergraduates do NOT receive need-based financial aid. At the PhD level, ALL admitted doctoral students receive 100% tuition scholarships plus 9-month living stipends ($30,470 for Biology, Chemistry, Physics; $18,915 for Computer Science, Math, Statistics, Psychology).",
    "minGpa": "3.8+",
    "minSat": "1380 - 1500 (Admitted Middle 50% SAT)",
    "satRequirementCategory": "Optional",
    "satPolicyDetails": "Test-Optional for undergraduate admissions. Standardized tests optional since 2008. Recommended English proficiency exam scores for international applicants: IELTS 7.0+ or TOEFL iBT 100+.",
    "minIelts": "7.0+",
    "ieltsCategory": "7.0",
    "toeflRequirement": "100+ iBT",
    "commonAppAccepted": true,
    "applicationPortalDetails": "Common Application, Coalition Application, or Wake Forest Application. Early Decision I (Nov 15), Early Action for First-Generation (Nov 15), Early Decision II (Jan 1), Regular Decision (Jan 1). Merit scholarship priority review deadline is November 15.",
    "acceptanceRate": "20%",
    "deadline": "Nov 15 (ED I / EA / Merit Priority) | Jan 1 (ED II / RD)",
    "description": "Private R2 university in Winston-Salem, NC ranked #801-850 globally, excelling in Physician Assistant (#11 US News) and Undergraduate Engineering (#14 US News).",
    "overviewLong": "Wake Forest University is a premier private R2 research university located in Winston-Salem, North Carolina, known for combining a close-knit undergraduate liberal arts environment with world-class graduate and professional schools. Wake Forest offers acclaimed programs across health sciences including Physician Assistant (#11 US News Graduate) and Nursing-Anesthesia (#15 US News Graduate), Undergraduate Engineering (#14 US News Specialty), the Wake Forest School of Business with its Part-Time MBA (#26 US News Graduate) and Masters in Management (#131–140 QS Global).",
    "topProgramsList": [
      {
        "name": "Physician Assistant (PA)",
        "ranking": "U.S. News Graduate #11",
        "description": "This is one of the highest-placing graduate schools on campus."
      },
      {
        "name": "Undergraduate Engineering",
        "ranking": "U.S. News Specialty #14 (tie)",
        "description": "Listed in the definitive U.S. News Specialty category for institutions where a doctoral engineering degree is not offered."
      },
      {
        "name": "Nursing-Anesthesia (CRNA)",
        "ranking": "U.S. News Graduate #15 (tie)",
        "description": "Elite clinical track run via the School of Medicine, verified via the official U.S. News Graduate Dashboard."
      },
      {
        "name": "Part-Time MBA",
        "ranking": "U.S. News Graduate #26 (tie)",
        "description": "Run by the Wake Forest School of Business; officially verified as the #1 part-time program in North Carolina."
      },
      {
        "name": "Masters in Management (MSM)",
        "ranking": "QS World Business #131–140 (QS 2026) Global",
        "description": "Placed inside the top tiers globally via the specialized QS Business Masters Rankings."
      }
    ],
    "allScholarshipsList": [
      {
        "id": "uni-060-1",
        "title": "Wake Forest Full-Cost Merit Scholarships (Carswell, Reynolds, Stamps, Gordon)",
        "amount": "Full Cost of Attendance ($98,730 / year value + Travel & Research Stipends)",
        "coverage": "Full Ride",
        "eligibility": "Top high-achieving undergraduate applicants (domestic and international eligible).",
        "description": "Highly competitive full-cost awards covering 100% of tuition, fees, room, board, books, personal allowance, and summer enrichment/research stipends over four years.",
        "deadline": "Nov 15 (Merit Priority Deadline)",
        "requiresSeparateApp": false
      },
      {
        "id": "uni-060-2",
        "title": "Wake Forest Presidential Scholarships",
        "amount": "$16,000 / year ($64,000 over 4 years)",
        "coverage": "Partial Aid",
        "eligibility": "20 renewable awards granted to students with extraordinary talent in art, debate, music, theatre, or dance.",
        "description": "Merit award recognizing exceptional creative or talent-based achievement alongside strong academic performance.",
        "deadline": "Nov 15 (Scholarship Deadline)",
        "requiresSeparateApp": true
      },
      {
        "id": "uni-060-3",
        "title": "Wake Forest Doctoral Teaching & Research Fellowships",
        "amount": "100% Tuition Waiver + $18,915 to $30,470 Living Stipend",
        "coverage": "Full Tuition",
        "eligibility": "All admitted PhD students across sciences, quantitative disciplines, and humanities.",
        "description": "Guaranteed doctoral financial support providing full tuition coverage and 9-month living stipends ($30,470 in Biology, Chemistry, Physics; $18,915 in CS, Math, Statistics).",
        "deadline": "Varies by PhD Program (Jan 15 typical)",
        "requiresSeparateApp": false
      }
    ],
    "degreesOffered": [
      "Bachelors",
      "Masters",
      "PhD",
      "Doctorate (JD, MD)"
    ],
    "tags": [
      "Private Research R2",
      "Full-Cost Merit Scholarships",
      "Wake Forest Business",
      "PhD Full Funding & Stipends",
      "North Carolina"
    ],
    "requiresSeparateApp": false,
    "logoText": "WFU",
    "logoBg": "from-amber-600 to-stone-950"
  },

  {
    "id": "uni-061",
    "universityName": "The University of Texas at Dallas",
    "location": "Richardson, Texas, United States",
    "country": "United States",
    "flag": "🇺🇸",
    "foundingYear": "1961",
    "scholarshipTitle": "UT Dallas Academic Excellence Scholarship (AES) & McDermott PhD Fellowships",
    "ranking": "#=686 Global (QS 2027) | #=597 (QS 2026) | #59 CS / #19 Business Analytics (US News)",
    "qsSubjectRankings": "Computer Science (#59 US News) | Business Analytics (#19 US) | Computer Engineering (#50 US) | Electrical Engineering (#57 US)",
    "coverage": "Full Ride",
    "amountValue": "Full Tuition + $37,000 Stipend (McDermott PhD) or Competitive In-State Waivers / AES Awards",
    "tuitionFee": "$20,082 / semester Non-Resident Tuition (~$40,164 / year) | Guaranteed Tuition Plan Available",
    "tuitionAmountNumeric": 40164,
    "hasFullRide": true,
    "hasPartialAid": true,
    "hasFinancialAid": true,
    "financialAidType": "Merit-Based",
    "financialAidDetails": "UT Dallas is a top public R1 research university located in the Dallas–Fort Worth tech hub. For undergraduates, the competitive Academic Excellence Scholarship (AES) provides automatic merit consideration for top freshmen. Competitive merit awards can qualify international students for non-resident in-state tuition waivers. At the graduate level, non-resident teaching and research assistants automatically qualify for in-state tuition waivers. Doctoral students in data science/stats receive 100% tuition waivers + $2,400/month stipend + health insurance. The premier Eugene McDermott Graduate Fellowship offers a $36,000 annual 12-month stipend, full tuition/fees, health insurance, and a $10,000 discretionary research budget over 4 years.",
    "minGpa": "3.5+",
    "minSat": "1350 - 1500 (Enrolled SAT Range)",
    "satRequirementCategory": "Optional",
    "satPolicyDetails": "Test-Optional for undergraduate admissions. Standardized tests (SAT/ACT) strengthen AES scholarship evaluation. Recommended English proficiency exam scores for international applicants: IELTS 6.5+ or TOEFL iBT 80+.",
    "minIelts": "6.5+",
    "ieltsCategory": "6.5",
    "toeflRequirement": "80+ iBT",
    "commonAppAccepted": true,
    "applicationPortalDetails": "Apply Texas or Common Application. Priority Freshman Application Deadline: December 1 (AES Scholarship Consideration). Spring/Fall admissions deadlines vary by department.",
    "acceptanceRate": "87%",
    "deadline": "Dec 1 (Priority AES Scholarship Deadline) | May 1 (Final Fall)",
    "description": "Public R1 university in Richardson, TX ranked #=686 globally in QS 2027 (#=597 in 2026). Top-tier CS (#59 US) and Business Analytics (#19 US). Automatic AES merit scholarships and competitive in-state tuition waivers for top int'l applicants.",
    "overviewLong": "The University of Texas at Dallas (UT Dallas / UTD) is a major public R1 research university located in Richardson, Texas, within the dynamic Dallas–Fort Worth technology and financial corridor. UTD serves over 24,000 students including 4,400+ international students from around the globe.\n\nAcademic strengths center on the Erik Jonsson School of Engineering and Computer Science (#59 Computer Science, #50 Computer Engineering, #57 Electrical Engineering in US News) and the Naveen Jindal School of Management (#19 Business Analytics, #51 Undergraduate Business in US News). Student life is highly active with 400+ registered student organizations, including ACM UTD, AI Society, Robotics Club, and HackUTD. Non-resident undergraduate tuition is ~$20,082 per semester (~$40,164/year). Top international freshmen can qualify for AES merit awards and competitive in-state tuition waivers. At the PhD level, McDermott Fellowships provide $37,000/year stipends + full tuition coverage + $5,000/yr research allowance.",
    "topProgramsList": [
      {
        "name": "Computer Science, AI & Cybersecurity (Jonsson School)",
        "ranking": "#59 CS / #50 Computer Eng in the US (US News)",
        "description": "Pioneering computer science research in artificial intelligence, cybersecurity, software engineering, and IoT."
      },
      {
        "name": "Business Analytics & Information Systems (Jindal School)",
        "ranking": "#19 Business Analytics in the US (US News)",
        "description": "STEM-designated analytics program integrated with Fortune 500 tech and corporate partners in North Texas."
      },
      {
        "name": "Electrical, Computer & Software Engineering",
        "ranking": "#57 Electrical / #50 Computer Eng in the US",
        "description": "Advanced hardware design, signal processing, embedded systems, and telecommunications."
      },
      {
        "name": "Finance, Supply Chain & Accounting",
        "ranking": "#51 Undergraduate Business in the US",
        "description": "Corporate finance, risk management, quantitative trading, and supply chain logistics."
      },
      {
        "name": "Data Science & Applied Statistics",
        "ranking": "Top National R1 PhD Tier",
        "description": "Full tuition waiver, monthly living stipend, and health insurance for PhD candidates."
      }
    ],
    "allScholarshipsList": [
      {
        "id": "uni-061-1",
        "title": "UT Dallas Academic Excellence Scholarship (AES)",
        "amount": "Partial to Full Tuition + Competitive In-State Tuition Waiver",
        "coverage": "Full Tuition",
        "eligibility": "Incoming first-time undergraduate freshmen applying by the priority deadline (Dec 1). International applicants eligible.",
        "description": "Four-year renewable merit award evaluating academic performance, test scores, leadership, and extracurricular distinction. Qualifying awards grant non-resident in-state tuition rates.",
        "deadline": "Dec 1 (Priority Deadline)",
        "requiresSeparateApp": false
      },
      {
        "id": "uni-061-2",
        "title": "Eugene McDermott Graduate Fellowship",
        "amount": "$37,000 / year Stipend + Full Tuition/Fees + $5,000/yr Research Budget ($20k Total)",
        "coverage": "Full Ride",
        "eligibility": "Top-tier doctoral applicants across STEM, management, and humanities.",
        "description": "UTD's premier 4-year doctoral award providing a $37,000 annual stipend, 100% tuition and fee waiver, health insurance, and $5,000 annual discretionary research budget ($20,000 total over 4 years).",
        "deadline": "Dec 15 (Graduate Priority)",
        "requiresSeparateApp": true
      }
    ],
    "degreesOffered": [
      "Bachelors",
      "Masters",
      "PhD"
    ],
    "tags": [
      "QS Top 700",
      "Public Research R1",
      "Dallas Tech Corridor",
      "Top Business Analytics",
      "CS & Engineering",
      "Texas"
    ],
    "requiresSeparateApp": false,
    "logoText": "UTD",
    "logoBg": "from-orange-700 to-emerald-900"
  },

  {
    "id": "uni-062",
    "universityName": "The University of Alabama",
    "location": "Tuscaloosa, Alabama, United States",
    "country": "United States",
    "flag": "🇺🇸",
    "foundingYear": "1831",
    "scholarshipTitle": "UA Presidential & Presidential Elite Automatic International Merit Scholarships",
    "ranking": "#1001-1200 Global (QS 2027) | #901-950 (QS 2026) | #83 Graduate Engineering (US News)",
    "qsSubjectRankings": "US News: Graduate Engineering (#83 US / #51 Public) | Aerospace (#31 Public) | Chemical (#35 Public) | Mechanical (#50 Public) | Public Business (#31 US)",
    "coverage": "Full Ride",
    "amountValue": "$6,000 to $28,000 / year Automatic Merit or Full Tuition + Housing (Presidential Elite)",
    "tuitionFee": "$17,962 / semester Non-Resident Tuition (~$35,924 / year) | Total COA ~$60,400 / year",
    "tuitionAmountNumeric": 35924,
    "hasFullRide": true,
    "hasPartialAid": true,
    "hasFinancialAid": true,
    "financialAidType": "Merit-Based",
    "financialAidDetails": "The University of Alabama is the flagship public R1 research university of Alabama. UA is nationally renowned for its generous automatic merit scholarships for high-achieving international freshmen. Automatic awards range from $6,000 to $28,000/year based on SAT/ACT scores and GPA (e.g. 3.50+ GPA + 1420 SAT qualifies for $28,000/yr Presidential Award). The flagship Presidential Elite Scholarship (4.0+ GPA + 1600 SAT / 36 ACT) covers 100% full tuition for 4 years, 1st year on-campus housing, a $1,500/yr supplemental award, and a $2,000 research/study-abroad stipend. Graduate assistantships provide full tuition coverage and monthly stipends; standard PhD funding packages offer 4 years guaranteed financial support.",
    "minGpa": "3.5+",
    "minSat": "1200 - 1450 (Enrolled SAT Range)",
    "satRequirementCategory": "Optional",
    "satPolicyDetails": "Test-Optional for general admissions, but test scores (SAT/ACT) are required to qualify for high-tier automatic merit scholarships ($28,000/yr Presidential / Presidential Elite). Recommended English proficiency exam scores: IELTS 6.0+ or TOEFL iBT 79+.",
    "minIelts": "6.0+",
    "ieltsCategory": "6.0",
    "toeflRequirement": "79+ iBT",
    "commonAppAccepted": true,
    "applicationPortalDetails": "Common Application or UA Undergraduate Web Application. Priority International Scholarship Deadline: January 15.",
    "acceptanceRate": "76%",
    "deadline": "Jan 15 (Priority Scholarship Deadline) | May 1 (Final Fall)",
    "description": "Flagship public R1 university in Tuscaloosa, AL ranked #1001-1200 in QS 2027 (#901-950 in 2026). Generous automatic merit scholarships ($6k–$28k/yr) for int'l applicants. Presidential Elite provides full tuition + housing + stipends.",
    "overviewLong": "The University of Alabama (UA / Alabama) is the flagship public R1 research university of Alabama, located in Tuscaloosa. UA serves over 38,000 students and offers a classic American campus environment with world-class athletics (Crimson Tide), 690+ student organizations, and leading academic colleges.\n\nAcademic strengths span the Styslinger College of Engineering (#83 Graduate Engineering, #31 Aerospace, #35 Chemical, #37 Civil, #50 Mechanical in US News) and the Culverhouse College of Business (#31 Public Undergraduate Business, #27 Public MBA). Non-resident undergraduate tuition is $17,962/semester (~$35,924/year). Alabama stands out for its transparent automatic merit scholarship matrix for international students, awarding up to $28,000/year for Presidential Scholars and full tuition + housing for Presidential Elite Scholars. Doctoral students receive 4 years of guaranteed funding through fellowships and assistantships.",
    "topProgramsList": [
      {
        "name": "Styslinger College of Engineering (Aerospace, Civil, Mechanical)",
        "ranking": "#83 Graduate Eng / #31 Aerospace Public (US News)",
        "description": "Aerospace structures, materials science, automotive manufacturing, and environmental engineering."
      },
      {
        "name": "Culverhouse College of Business & Manderson MBA",
        "ranking": "#31 Public Undergrad Business / #27 Public MBA",
        "description": "Corporate finance, accountancy, risk management, analytics, and business strategy."
      },
      {
        "name": "Computer Science & Cybersecurity",
        "ranking": "Top Regional R1 Tier",
        "description": "Software development, cyber defense, data science, and cloud system architecture."
      },
      {
        "name": "College of Communication & Information Sciences",
        "ranking": "Top National Tier",
        "description": "Advertising, public relations, sports journalism, and digital media communication."
      },
      {
        "name": "Nursing & Biological Sciences",
        "ranking": "Top National Tier",
        "description": "Clinical health simulation, pre-medical pathways, and biomedical research."
      }
    ],
    "allScholarshipsList": [
      {
        "id": "uni-062-1",
        "title": "UA International Presidential Merit Scholarship",
        "amount": "$28,000 / year ($112,000 over 4 years)",
        "coverage": "Partial Aid",
        "eligibility": "Incoming international freshmen with 3.50+ cumulative GPA and 1420–1600 SAT or 32–36 ACT.",
        "description": "Automatic four-year merit scholarship significantly covering out-of-state tuition fees.",
        "deadline": "Jan 15 (Scholarship Deadline)",
        "requiresSeparateApp": false
      },
      {
        "id": "uni-062-2",
        "title": "UA Presidential Elite Scholarship",
        "amount": "Full Tuition + 1st Year Housing + $1,500/yr Supplemental + $2,000 Research Stipend",
        "coverage": "Full Ride",
        "eligibility": "Incoming international freshmen with 4.0+ GPA and a perfect 1600 SAT or 36 ACT score.",
        "description": "Alabama's highest merit honor covering 100% full tuition for 4 years, first-year housing, annual stipend, and study-abroad/research allowance.",
        "deadline": "Jan 15 (Scholarship Deadline)",
        "requiresSeparateApp": false
      },
      {
        "id": "uni-062-3",
        "title": "SREB Doctoral Scholars & UA Graduate Fellowships",
        "amount": "$20,000 / year Stipend + 100% Full Tuition Waiver",
        "coverage": "Full Tuition",
        "eligibility": "Admitted PhD candidates across engineering, physical sciences, and humanities.",
        "description": "Guaranteed 4-year doctoral funding combining fellowship awards and departmental assistantships with full tuition waivers.",
        "deadline": "Feb 1 (Graduate Deadline)",
        "requiresSeparateApp": false
      }
    ],
    "degreesOffered": [
      "Bachelors",
      "Masters",
      "PhD"
    ],
    "tags": [
      "Flagship Public R1",
      "Automatic Int'l Merit",
      "Engineering & Business",
      "Crimson Tide SEC",
      "Alabama"
    ],
    "requiresSeparateApp": false,
    "logoText": "BAMA",
    "logoBg": "from-red-900 to-slate-950"
  },

  {
    "id": "uni-063",
    "universityName": "Fordham University",
    "location": "New York City, New York, United States",
    "country": "United States",
    "flag": "🇺🇸",
    "foundingYear": "1841",
    "scholarshipTitle": "Fordham Presidential & Fordham Full-Tuition Merit Scholarships",
    "ranking": "#1001-1200 Global (QS 2026) | Private Jesuit R2 Research University in NYC",
    "qsSubjectRankings": "US News: Part-Time Law (JD) #3, Trial Advocacy #5, International Business #10, Executive MBA #39, Master of Social Work (MSW) #28",
    "coverage": "Full Ride",
    "amountValue": "Full Tuition + Housing & Meals (Presidential) or $25,000+/yr Dean's Scholarship",
    "tuitionFee": "$68,886 / year ($34,443 / semester) | Total Estimated COA ~$92,000 / year",
    "tuitionAmountNumeric": 68886,
    "hasFullRide": true,
    "hasPartialAid": true,
    "hasFinancialAid": true,
    "financialAidType": "Merit-Based",
    "financialAidDetails": "Fordham is a prestigious private Jesuit research university in New York City with campuses at Rose Hill (Bronx) and Lincoln Center (Manhattan). Fordham offers competitive undergraduate merit scholarships to international applicants. Top awards include the Presidential Scholarship (Full tuition, mandatory fees, average room and meal plan for students ranking in top 1–2% of high school class) and Fordham Scholarship (Full tuition awarded to top ~3% of admitted applicants). Dean's Scholarships start at $25,000/year. Note: Fordham is need-sensitive for international undergraduate admissions (~7% of international financial aid applicants receive limited need-based awards). At the graduate level (GSAS), assistantships pay $38,192 (yrs 1–2) and $38,723 (yr 3+) with full tuition waivers, alongside Distinguished Fellowships up to $50,923.",
    "minGpa": "3.7+",
    "minSat": "1340 - 1480 (Enrolled SAT Range)",
    "satRequirementCategory": "Optional",
    "satPolicyDetails": "Test-Optional for undergraduate admissions. Standardized tests (SAT/ACT) may be submitted to strengthen merit scholarship review. Recommended English proficiency exam scores for international applicants: IELTS 7.0+ or TOEFL iBT 90+.",
    "minIelts": "7.0+",
    "ieltsCategory": "7.0",
    "toeflRequirement": "90+ iBT",
    "commonAppAccepted": true,
    "applicationPortalDetails": "Common Application. Early Action (Nov 1), Early Decision I (Nov 1), Early Decision II (Jan 3), Regular Decision (Jan 3).",
    "acceptanceRate": "54%",
    "deadline": "Nov 1 (Early Action / ED I) | Jan 3 (ED II / RD)",
    "description": "Private Jesuit R2 university in New York City (Rose Hill & Lincoln Center). Excells in Part-Time Law (JD) (#3 US News) and Trial Advocacy (#5 Law Specialty).",
    "overviewLong": "Fordham University is a private Jesuit research university in New York City, featuring historic residential campuses at Rose Hill in the Bronx and Lincoln Center in cultural Manhattan. Fordham serves over 16,000 students across undergraduate liberal arts, sciences, communication, law, education, and the renowned Gabelli School of Business.\n\nAcademic highlights include Part-Time Law (JD) (#3 US News Graduate), Trial Advocacy (#5 US News Law Specialty), International Business (#10 US News Undergraduate), Executive MBA (#39 US News Graduate), and the Master of Social Work (MSW) (#28 US News Graduate). Students benefit from direct access to Manhattan financial firms, media networks, tech startups, and international non-profits, alongside 240+ registered student organizations (170+ at Rose Hill). Full-time undergraduate tuition is $68,886/year ($34,443/semester). Fordham offers high-achieving international applicants full-cost Presidential Scholarships (full tuition, room, and board) and full-tuition Fordham Scholarships. Graduate GSAS assistantships provide stipends of $38,192 to $38,723 plus full tuition remission.",
    "topProgramsList": [
      {
        "name": "Part-Time Law (JD)",
        "ranking": "U.S. News Graduate #3",
        "description": "Ranked as a top-3 elite part-time legal track in America, heavily preferred by NYC professionals."
      },
      {
        "name": "Trial Advocacy",
        "ranking": "U.S. News Law Specialty #5",
        "description": "A standout practical legal specialty within Fordham Law School."
      },
      {
        "name": "International Business",
        "ranking": "U.S. News Undergraduate #10 Nationwide",
        "description": "Run via the Gabelli School of Business, drawing on strong corporate alignment with multinational Manhattan firms."
      },
      {
        "name": "Executive MBA",
        "ranking": "U.S. News Graduate #39 Nationwide",
        "description": "Highly regarded mid-career business cohort; sits even higher in specialized industry lists like Poets&Quants."
      },
      {
        "name": "Master of Social Work (MSW)",
        "ranking": "U.S. News Graduate #28 Nationwide",
        "description": "Places firmly inside the top 10% of all social work programs in the entire United States."
      }
    ],
    "allScholarshipsList": [
      {
        "id": "uni-063-1",
        "title": "Fordham Presidential Scholarship",
        "amount": "Full Tuition + Mandatory Fees + Average Room & Meal Plan",
        "coverage": "Full Ride",
        "eligibility": "Top high school seniors ranking in the top 1–2% of their graduating class (international applicants eligible).",
        "description": "Fordham's most prestigious merit honor covering 100% full tuition, fees, room, board, and academic enrichment funding.",
        "deadline": "Nov 1 (EA/ED I) / Jan 3 (RD)",
        "requiresSeparateApp": false
      },
      {
        "id": "uni-063-2",
        "title": "Fordham Full-Tuition Scholarship",
        "amount": "100% Full Tuition ($68,886 / year value)",
        "coverage": "Full Tuition",
        "eligibility": "Awarded to approximately top 3% of admitted undergraduate applicants based on holistic academic excellence.",
        "description": "Four-year renewable full-tuition scholarship recognizing outstanding academic achievement.",
        "deadline": "Nov 1 (EA/ED I) / Jan 3 (RD)",
        "requiresSeparateApp": false
      },
      {
        "id": "uni-063-3",
        "title": "Fordham Dean's Scholarship",
        "amount": "$25,000 / year ($100,000 over 4 years)",
        "coverage": "Partial Aid",
        "eligibility": "Awarded to top ~10% of admitted applicants based on academic merit and holistic evaluation.",
        "description": "Renewable merit award assisting high-achieving freshmen with annual tuition costs.",
        "deadline": "Nov 1 (EA) / Jan 3 (RD)",
        "requiresSeparateApp": false
      }
    ],
    "degreesOffered": [
      "Bachelors",
      "Masters",
      "PhD",
      "Doctorate (JD)"
    ],
    "tags": [
      "Private Jesuit Research",
      "New York City Campuses",
      "Gabelli Business",
      "NYC Finance & Media Hub",
      "New York"
    ],
    "requiresSeparateApp": false,
    "logoText": "FORD",
    "logoBg": "from-amber-900 to-red-950"
  },

  {
    "id": "uni-064",
    "universityName": "University of Mississippi",
    "location": "Oxford, Mississippi, United States",
    "country": "United States",
    "flag": "🇺🇸",
    "foundingYear": "1848",
    "scholarshipTitle": "Ole Miss International Academic Excellence Awards & Graduate Assistantships",
    "ranking": "#1001-1200 Global (QS 2026) | Flagship Public R1",
    "qsSubjectRankings": "Accountancy (Top 10 Nationwide, PAR) | US News: Pharmacy #31, Criminology #36, Biostatistics #79 | QS 2026: Life Sciences / Medicine #251–300",
    "coverage": "Full Tuition",
    "amountValue": "Up to $20,160 / year (Int'l Academic Excellence) or 100% Non-Resident Tuition Waiver",
    "tuitionFee": "$26,000 – $28,000 / year Non-Resident Tuition ($100 int'l fee/term; program fees add $1,000–$2,000/yr) | Total COA ~$45,000 / year",
    "tuitionAmountNumeric": 27000,
    "hasFullRide": false,
    "hasPartialAid": true,
    "hasFinancialAid": true,
    "financialAidType": "Merit-Based",
    "financialAidDetails": "The University of Mississippi (Ole Miss) is Mississippi's flagship public R1 research university in Oxford, MS. International undergraduate applicants qualify for automatic merit awards based on GPA and SAT/ACT test scores. For 2026–27, students with a 3.75–4.00 GPA and a 1420+ SAT receive $20,160/year. International transfer students can compete for awards covering up to 100% of non-resident tuition fees. At the graduate level, Ole Miss provides half-time assistantships (20 hrs/wk) offering 100% tuition scholarships + $15,000 minimum annual stipends (quarter-time = 75% tuition + $7,500 stipend). The Patterson School of Accountancy offers specialized assistantships with non-resident tuition waivers and stipends.",
    "minGpa": "3.5+",
    "minSat": "1230 - 1420 (Enrolled SAT Range)",
    "satRequirementCategory": "Optional",
    "satPolicyDetails": "Test-Optional for undergraduate admissions, but SAT/ACT scores are required to unlock top tiers of the published International Academic Excellence scholarship matrix ($20,160/yr award for 1420+ SAT). Recommended English proficiency exam scores: IELTS 6.0+ or TOEFL iBT 79+.",
    "minIelts": "6.0+",
    "ieltsCategory": "6.0",
    "toeflRequirement": "79+ iBT",
    "commonAppAccepted": true,
    "applicationPortalDetails": "Common Application or Ole Miss Web Application. International Scholarship Priority Review Deadline: March 1.",
    "acceptanceRate": "97%",
    "deadline": "March 1 (Int'l Priority Scholarship) | July 1 (Final Fall)",
    "description": "Flagship public R1 university in Oxford, MS. Features renowned Patterson School of Accountancy, ranked top 10 nationwide, and strong programs in Pharmacy and Criminology.",
    "overviewLong": "The University of Mississippi (commonly known as Ole Miss) is Mississippi's flagship public R1 research university located in the college town of Oxford, Mississippi. Ole Miss is famous for its vibrant campus traditions, SEC athletics, 29 fraternity/sorority organizations, and hundreds of student clubs.\n\nAcademic strengths include the School of Engineering (chemical, civil, computer, electrical, and mechanical engineering), the nationally renowned Patterson School of Accountancy, pharmacy, business, and liberal arts. Non-resident base tuition is ~$26,000–$28,000/year (program-specific professional fees in Engineering or Business can add $1,000–$2,000/year). High-achieving international freshmen receive up to $20,160/year in merit scholarships under published GPA/SAT tiers, while qualifying transfers can receive up to 100% non-resident tuition waivers. Graduate students benefit from assistantships offering 100% tuition scholarships + $15,000+ minimum stipends.",
    "topProgramsList": [
      {
        "name": "Accountancy",
        "ranking": "Top 10 Nationwide (Public Accounting Report) / #6 College Raptor",
        "description": "The Patterson School of Accountancy is a massive campus crown jewel, consistently ranking top-10 in the country for its size."
      },
      {
        "name": "Pharmacy",
        "ranking": "U.S. News Graduate #31 Nationwide",
        "description": "The School of Pharmacy ranks inside the top 20% of all programs nationwide and secures major federal NIH research funding."
      },
      {
        "name": "Criminology",
        "ranking": "U.S. News Graduate #36 Nationwide",
        "description": "A highly respected sociology and criminal justice branch outperforming the general humanities baseline."
      },
      {
        "name": "Biostatistics",
        "ranking": "U.S. News Graduate #79 Nationwide (tie)",
        "description": "Anchored within the school's growing mathematical and healthcare analytics framework."
      },
      {
        "name": "Life Sciences / Medicine & Cardiovascular Systems",
        "ranking": "#251–300 Global (QS 2026) / #23 Global Specialty (US News)",
        "description": "Driven by the University of Mississippi Medical Center, notably ranking #23 globally for Cardiac & Cardiovascular Systems."
      }
    ],
    "allScholarshipsList": [
      {
        "id": "uni-064-1",
        "title": "Ole Miss International Academic Excellence Scholarship",
        "amount": "Up to $20,160 / year ($80,640 over 4 years)",
        "coverage": "Partial Aid",
        "eligibility": "Incoming international freshmen with 3.75–4.00 GPA and 1420+ SAT or 32+ ACT.",
        "description": "Automatic merit award based on published GPA and standardized test score tiers, significantly offsetting non-resident tuition.",
        "deadline": "March 1 (Priority Deadline)",
        "requiresSeparateApp": false
      },
      {
        "id": "uni-064-2",
        "title": "Ole Miss International Transfer Non-Resident Tuition Waiver",
        "amount": "Up to 100% Non-Resident Tuition Waiver",
        "coverage": "Full Tuition",
        "eligibility": "Qualifying international undergraduate transfer applicants with high academic achievement.",
        "description": "Competitive transfer scholarship reducing non-resident tuition costs by up to 100%.",
        "deadline": "March 1 (Priority Deadline)",
        "requiresSeparateApp": true
      },
      {
        "id": "uni-064-3",
        "title": "Ole Miss Graduate Assistantships (TA / RA / GA)",
        "amount": "100% Tuition Waiver + $15,000 Minimum Annual Stipend",
        "coverage": "Full Tuition",
        "eligibility": "Admitted Master's and PhD graduate students appointed to half-time (20 hrs/wk) positions.",
        "description": "Provides 100% tuition scholarship and a minimum $15,000 annual stipend for 20-hour graduate appointments.",
        "deadline": "Varies by Department (Feb–March)",
        "requiresSeparateApp": true
      }
    ],
    "degreesOffered": [
      "Bachelors",
      "Masters",
      "PhD",
      "PharmD"
    ],
    "tags": [
      "Flagship Public R1",
      "Ole Miss Oxford",
      "Patterson Accountancy",
      "SEC College Town",
      "Mississippi"
    ],
    "requiresSeparateApp": false,
    "logoText": "OMISS",
    "logoBg": "from-blue-900 to-red-800"
  },

  {
    "id": "uni-065",
    "universityName": "Tulane University",
    "location": "New Orleans, Louisiana, United States",
    "country": "United States",
    "flag": "🇺🇸",
    "foundingYear": "1834",
    "scholarshipTitle": "Tulane Global Scholarships, Deans' Honor & Paul Tulane Merit Awards",
    "ranking": "#=597 Global (QS 2027) | #=597 (QS 2026) | #30 Undergrad Business (Poets&Quants)",
    "qsSubjectRankings": "Key Strategic: School of Public Health & Tropical Medicine | A.B. Freeman School of Business (#30 US Poets&Quants) | Biomedical Engineering | Architecture",
    "coverage": "Full Ride",
    "amountValue": "Up to Full Tuition ($70,622/yr) or Full Cost of Attendance ($98,710/yr Global) + Need-Based Aid up to $30,000/yr",
    "tuitionFee": "$70,622 / year ($35,311 / semester; $4,514 fees) | Total Estimated COA $98,710 / year",
    "tuitionAmountNumeric": 70622,
    "hasFullRide": true,
    "hasPartialAid": true,
    "hasFinancialAid": true,
    "financialAidType": "Merit-Based",
    "financialAidDetails": "Tulane University is a premier private R1 research university in New Orleans. Tulane offers robust merit and need-based institutional aid to international undergraduate applicants. Tulane officially updated its scholarship policy: NO separate application is required for full-tuition merit consideration (including the Deans' Honor Scholarship and Paul Tulane Award). All applicants are automatically considered upon completing the Common Application along with financial aid profiles (CSS Profile). Partial merit awards range from $1,000 to $32,000/year. Highly competitive Global Scholarships can cover up to 100% of the total Cost of Attendance ($98,710/yr value). Furthermore, Tulane offers need-based international financial aid of up to $30,000/year. At the graduate level, most doctoral students receive fellowships or teaching/research assistantships with stipends and 100% tuition waivers.",
    "minGpa": "3.7+",
    "minSat": "1360 - 1500 (Enrolled SAT Range)",
    "satRequirementCategory": "Optional",
    "satPolicyDetails": "Test-Optional for undergraduate admissions. Standardized test scores (SAT/ACT) and strong academic rigor strengthen scholarship consideration (top 20% high school class recommended). Recommended English proficiency: IELTS 7.0+ or TOEFL iBT 95+.",
    "minIelts": "7.0+",
    "ieltsCategory": "7.0",
    "toeflRequirement": "95+ iBT",
    "commonAppAccepted": true,
    "applicationPortalDetails": "Common Application. Early Action (Nov 15), Early Decision I (Nov 1), Early Decision II (Jan 8), Regular Decision (Jan 15). Early Action / ED highly recommended for maximum scholarship consideration.",
    "acceptanceRate": "11% - 14%",
    "deadline": "Nov 1 (ED I) / Nov 15 (EA) / Jan 15 (RD)",
    "description": "Private R1 university in New Orleans ranked #=597 in QS 2027/2026. Famous for Public Health & A.B. Freeman Business (#30 Undergrad Business). Offers full-tuition merit awards, full-COA Global Scholarships, and up to $30,000/yr int'l need-based aid.",
    "overviewLong": "Tulane University is a private R1 research university located on a historic residential campus in New Orleans, Louisiana. Tulane serves over 14,000 students across Newcomb-Tulane College, the Celia Scott Weatherhead School of Public Health and Tropical Medicine, the A.B. Freeman School of Business, the School of Science and Engineering, and the School of Architecture.\n\nAcademic strengths highlight top-ranked public health research, biomedical engineering, architecture, and the Freeman School of Business (#30 Best Undergraduate Business School nationally in Poets&Quants 2026). Student life is deeply connected to New Orleans with 300+ active student organizations and strong service-learning traditions. Undergraduate tuition is $70,622/year ($4,514 mandatory fees; total estimated COA $98,710/year). Tulane provides automatic partial merit awards ($1,000–$32,000/yr), full-tuition merit scholarships (Deans' Honor & Paul Tulane Awards — automatically evaluated via Common App + CSS Profile with no separate application required), full-COA Global Scholarships, and up to $30,000/year in international need-based financial aid. Most PhD students receive full tuition waivers + living stipends.",
    "topProgramsList": [
      {
        "name": "Celia Scott Weatherhead School of Public Health & Tropical Medicine",
        "ranking": "Top-Tier World Center for Global Health",
        "description": "Pioneering epidemiology, tropical disease research, biostatistics, environmental health, and community healthcare."
      },
      {
        "name": "A.B. Freeman School of Business",
        "ranking": "#30 Best Undergraduate Business (Poets&Quants)",
        "description": "Finance, legal studies in business, marketing, management, fintech, and energy trading."
      },
      {
        "name": "Biomedical Engineering, CS & Natural Sciences",
        "ranking": "Top National R1 Research Tier",
        "description": "Biomedical devices, computational biology, neuroscience, regenerative medicine, and data science."
      },
      {
        "name": "School of Architecture & Built Environment",
        "ranking": "Top National Architecture Center",
        "description": "5-year professional B.Arch, urban design, resilient coastal infrastructure, and sustainable development."
      },
      {
        "name": "Political Science, Economics & Environmental Studies",
        "ranking": "Top National Tier",
        "description": "Gulf South coastal policy, international development, political economy, and environmental policy."
      }
    ],
    "allScholarshipsList": [
      {
        "id": "uni-065-1",
        "title": "Tulane Deans' Honor & Paul Tulane Full-Tuition Scholarships",
        "amount": "100% Full Tuition ($70,622 / year value)",
        "coverage": "Full Tuition",
        "eligibility": "Incoming undergraduate applicants demonstrating top academic achievement. Automatically evaluated upon submitting the Common Application and CSS Profile with no separate application required.",
        "description": "Automatic consideration upon completing the Common Application and required financial aid profile (CSS Profile). No separate application required. Covers 100% full tuition for 4 years (or 5 years for 5-year B.Arch).",
        "deadline": "Nov 15 (EA / ED Priority)",
        "requiresSeparateApp": false
      },
      {
        "id": "uni-065-2",
        "title": "Tulane Global Full-Cost Scholarships",
        "amount": "100% Full Cost of Attendance ($98,710 / year value)",
        "coverage": "Full Ride",
        "eligibility": "Top international applicants demonstrating exceptional academic and leadership distinction.",
        "description": "Premier international scholarship covering full tuition, fees, room, board, and academic enrichment expenses.",
        "deadline": "Nov 15 (EA / ED Priority)",
        "requiresSeparateApp": false
      },
      {
        "id": "uni-065-3",
        "title": "Tulane International Need-Based Aid",
        "amount": "Up to $30,000 / year ($120,000 over 4 years)",
        "coverage": "Partial Aid",
        "eligibility": "International undergraduate applicants demonstrating financial need via CSS Profile submission.",
        "description": "Institutional financial grant supplementing family contribution for admitted international students.",
        "deadline": "Feb 1 (CSS Profile Deadline)",
        "requiresSeparateApp": true
      }
    ],
    "degreesOffered": [
      "Bachelors",
      "Masters",
      "PhD",
      "Doctorate (MD/JD)"
    ],
    "tags": [
      "QS Top 600",
      "Private Research R1",
      "Freeman School of Business",
      "Public Health & Medicine",
      "New Orleans",
      "Louisiana"
    ],
    "requiresSeparateApp": false,
    "logoText": "TULA",
    "logoBg": "from-emerald-800 to-sky-900"
  },

  {
    "id": "uni-066",
    "universityName": "Imperial College London",
    "location": "London, England, United Kingdom",
    "country": "United Kingdom",
    "flag": "🇬🇧",
    "foundingYear": "1907",
    "scholarshipTitle": "Imperial Inspires Scholarships & President's PhD Fellowships",
    "ranking": "#=2 Global (QS 2027) | #2 (QS 2026) | #9 CS / #3 UK (QS Subject 2026)",
    "qsSubjectRankings": "Chemical Engineering #4 (#2 national) | Petroleum Engineering #5 (#1 national) | Medicine #7 (#3 national) | Civil Engineering #7 (#2 national) | Biological Sciences #7 (#3 national)",
    "coverage": "Full Ride",
    "amountValue": "£15,000/yr (Imperial Inspires — 300+ Awards) or Full Tuition + £26,500 Stipend (President's PhD)",
    "tuitionFee": "Course-Specific Overseas Tuition (£28,000 – £53,000/yr) | Home: £9,790 (2026) / £10,050 (2027)",
    "tuitionAmountNumeric": 45000,
    "hasFullRide": true,
    "hasPartialAid": true,
    "hasFinancialAid": true,
    "financialAidType": "Merit-Based",
    "financialAidDetails": "Imperial College London is a world-leading science, engineering, medicine, and business university ranked #=2 globally in QS 2027. For international undergraduates and taught postgraduates, the 'Imperial Inspires' program offers at least 300 scholarships worth £15,000/year for 2027 entry across Engineering, Natural Sciences, Medicine, and Imperial Business School. The IB Excellence Scholarship offers £5,000/year for top IB graduates. Restricted Sanctuary Scholarships offer full tuition + £16,500 stipend + £1,500 equipment grant. At the doctoral level, President's PhD Scholarships provide 100% full tuition, a £26,500 annual stipend (2026–27 rate), and £2,000/year consumables allowance for 3.5 years. Imperial Business School PhDs are fully funded for 5 years. Master's direct application fee is £90 (£125 Business MSc / £150 MBA / £0 PhD).",
    "minGpa": "3.8+",
    "minSat": "1450 - 1550 (Standardized Test Equivalent / A*A*A A-Levels)",
    "satRequirementCategory": "Optional",
    "satPolicyDetails": "Undergraduate entry requires A-Levels (A*A*A to A*AA) or IB (38–42 points with 6–7 in HL subjects). US applicants require 1450+ SAT (with 5s in 3+ AP exams). UCAS application route (Medicine deadline Oct 15; equal-consideration deadline Jan). Direct postgraduate portal via 'My Imperial' (application fee: £90 Master's / £125 Business / £150 MBA / £0 PhD). Recommended English proficiency: IELTS 7.0+ (6.5 per band) or TOEFL iBT 100+.",
    "minIelts": "7.0+",
    "ieltsCategory": "7.0",
    "toeflRequirement": "100+ iBT",
    "commonAppAccepted": false,
    "applicationPortalDetails": "Undergraduate: UCAS portal (Oct 15 deadline for Medicine; equal-consideration for others). Postgraduate: My Imperial portal (Fee: £90 MSc / £125 Business MSc / £150 MBA / £0 PhD).",
    "acceptanceRate": "11%",
    "deadline": "Oct 15 (Medicine UCAS) / Jan 25 (Standard UCAS) / Rolling Postgrad",
    "description": "Top UK STEM & medicine university ranked #=2 globally in QS 2027. Sits #4 globally in Chemical Eng, #5 in Petroleum Eng, and #7 in Medicine.",
    "overviewLong": "Imperial College London is a world-renowned public research university focused exclusively on science, engineering, medicine, and business. Located in South Kensington, London, Imperial sits alongside the Natural History Museum, Science Museum, Victoria and Albert Museum, and Royal Albert Hall. QS ranks Imperial #=2 globally in 2027 and 2026.\n\nAcademic strengths highlight world-class subject metrics: Chemical Engineering (#4 globally / #2 national), Petroleum Engineering (#5 globally / #1 national), Medicine (#7 globally / #3 national), Civil Engineering (#7 globally / #2 national), and Biological Sciences (#7 globally / #3 national). Student life features hundreds of student clubs managed by Imperial College Union. Undergraduate applications go through UCAS. Postgraduate applications are direct via 'My Imperial' (application fees: £90 MSc, £125 Business MSc, £150 MBA, £0 PhD).\n\nFinancial support highlights the new Imperial Inspires program offering 300+ awards worth £15,000/year for 2027 entry across undergraduate and taught postgraduate programs. Doctoral candidates benefit from President's PhD Scholarships covering 100% tuition + £26,500 annual stipend + £2,000 consumables allowance for 3.5 years.",
    "topProgramsList": [
      {
        "name": "Chemical Engineering",
        "ranking": "#4 (#2 national)",
        "description": "Focuses heavily on process systems engineering, molecular science, and building efficient, clean-energy low-carbon technologies."
      },
      {
        "name": "Petroleum Engineering",
        "ranking": "#5 (#1 national)",
        "description": "Managed by the Department of Earth Science and Engineering, specializing in sustainable subsurface energy systems and fluid mechanics."
      },
      {
        "name": "Medicine",
        "ranking": "#7 (#3 national)",
        "description": "A research-heavy curriculum integrated with top London clinical trusts, specializing in biomedical innovations and digital health."
      },
      {
        "name": "Civil Engineering",
        "ranking": "#7 (#2 national)",
        "description": "Globally renowned for its structural engineering breakthroughs, environmental systems research, and smart infrastructure designs."
      },
      {
        "name": "Biological Sciences",
        "ranking": "#7 (#3 national)",
        "description": "Covers extensive cross-disciplinary research spanning molecular biology, ecology, and advanced biotechnology systems."
      }
    ],
    "allScholarshipsList": [
      {
        "id": "uni-066-1",
        "title": "Imperial Inspires International Scholarships (2027 Entry)",
        "amount": "£15,000 / year (300+ Awards)",
        "coverage": "Partial Aid",
        "eligibility": "International/Overseas students applying for undergraduate or selected postgraduate taught courses.",
        "description": "New flagship award offering £15,000/year toward tuition and living costs for at least 300 international students across Engineering, Natural Sciences, Medicine, and Business.",
        "deadline": "Course Application Deadline",
        "requiresSeparateApp": true
      },
      {
        "id": "uni-066-2",
        "title": "Imperial President's PhD Scholarship",
        "amount": "100% Full Tuition + £26,500 / year Stipend + £2,000 Consumables Fund",
        "coverage": "Full Ride",
        "eligibility": "Top doctoral applicants across all departments (Home and Overseas).",
        "description": "Imperial's highest doctoral honor providing full tuition waiver, £26,500 annual stipend (2026–27 rate), and £2,000/yr research budget for 3.5 years.",
        "deadline": "Nov / Jan / March PhD Rounds",
        "requiresSeparateApp": true
      },
      {
        "id": "uni-066-3",
        "title": "Imperial IB Excellence Scholarship",
        "amount": "£5,000 / year (23 Awards)",
        "coverage": "Partial Aid",
        "eligibility": "International IB diploma students admitted to eligible Engineering, Natural Sciences, and Business programs.",
        "description": "Partial merit award recognizing outstanding IB academic performance (£5,000/yr).",
        "deadline": "Automatic Review",
        "requiresSeparateApp": false
      }
    ],
    "degreesOffered": [
      "Bachelors",
      "Masters",
      "PhD"
    ],
    "tags": [
      "QS Top 3 Global",
      "London UK",
      "STEM & Medicine",
      "Imperial Inspires",
      "Top Computer Science",
      "UK"
    ],
    "requiresSeparateApp": true,
    "logoText": "IMP",
    "logoBg": "from-sky-900 to-indigo-950"
  },

  {
    "id": "uni-067",
    "universityName": "University of Oxford",
    "location": "Oxford, England, United Kingdom",
    "country": "United Kingdom",
    "flag": "🇬🇧",
    "foundingYear": "1096",
    "scholarshipTitle": "Clarendon Scholarships, Reach Oxford & Rhodes Fellowships",
    "ranking": "#4 Global (QS 2027) | #4 (QS 2026) | #4 CS / #2 Politics (QS Subject 2026)",
    "qsSubjectRankings": "Computer Science (#4 Global) | Politics & Int'l Relations (#2 Global) | Arts & Humanities (#1) | Social Sciences & Management (#2) | Life Sciences & Medicine (#2) | Natural Sciences (#3)",
    "coverage": "Full Ride",
    "amountValue": "Full Fees + Living Grant (£20,780 - £21,805+/yr) (Clarendon / Weidenfeld / Rhodes) or Full Ride + Airfare (Reach Oxford)",
    "tuitionFee": "Overseas Undergrad: £37,380 – £62,820 / year | Graduate Taught: £75 App Fee / Research: £20 App Fee",
    "tuitionAmountNumeric": 48000,
    "hasFullRide": true,
    "hasPartialAid": true,
    "hasFinancialAid": true,
    "financialAidType": "Merit-Based",
    "financialAidDetails": "The University of Oxford is one of the world's premier collegiate research universities, ranked #4 globally in QS 2027 and 2026. Oxford comprises 44 colleges and halls with an intensive tutorial teaching model. Overseas undergraduate tuition ranges from £37,380 to £62,820/year. Undergraduate financial aid for international students is very limited, but includes the prestigious Reach Oxford Scholarship (covers 100% course fees, living grant, and 1 return airfare/year for 2–3 scholars annually from eligible countries, including Pakistan). At the graduate level, Oxford offers over 1,100 full or partial scholarships annually. The flagship Clarendon Scholarship covers 100% course fees + living grant for Master's and DPhil students. Other major awards include Weidenfeld-Hoffmann (£20,780+ grant), Pershing Square (£21,805+ grant), and Rhodes Scholarships (£20,400+ stipend).",
    "minGpa": "3.9+",
    "minSat": "1480 - 1560 (SAT / A*A*A A-Levels)",
    "satRequirementCategory": "Optional",
    "satPolicyDetails": "Undergraduate admissions require A-Levels (A*A*A to AAA) or IB (38–40 points). US applicants require 1480+ SAT (750+ per section) or 33+ ACT plus 5s on 3+ AP exams. UCAS deadline is strictly Oct 15, 2026 for 2027 entry (UCAS fee £34.50). Course-specific tests are required (e.g. MAT, PAT, TSA). Graduate applications use Oxford's direct portal (£75 taught / £20 research fee). Recommended English proficiency: IELTS 7.5+ (7.0 per band) or TOEFL iBT 110+.",
    "minIelts": "7.5+",
    "ieltsCategory": "7.5",
    "toeflRequirement": "110+ iBT",
    "commonAppAccepted": false,
    "applicationPortalDetails": "Undergraduate: UCAS portal (Strict deadline: Oct 15, 2026 for 2027 entry; UCAS fee £34.50). Graduate (MSc/MPhil/DPhil): Oxford Direct Graduate Application Portal (App fee: £75 Taught / £20 Research).",
    "acceptanceRate": "14%",
    "deadline": "Oct 15 (UCAS Undergrad Deadline) / Dec-Jan (Graduate Scholarship Deadline)",
    "description": "World-leading collegiate university ranked #4 globally in QS 2027. Ranked #4 in CS & #2 in Politics. Flagship Clarendon Scholarships offer 1,100+ graduate full-ride awards; Reach Oxford offers full cost + airfare for undergrads.",
    "overviewLong": "The University of Oxford is the world's oldest English-speaking university, structured around 44 constituent colleges and halls dispersed throughout historic Oxford. QS ranks Oxford #4 globally in 2027 and 2026, holding #1 in Arts & Humanities, #2 in Social Sciences & Management, #2 in Life Sciences & Medicine, #3 in Natural Sciences, #4 in Computer Science, and #2 in Politics.\n\nOxford's hallmark is its collegiate tutorial system, where undergraduates receive small-group instruction from leading scholars. Undergraduates apply through UCAS by Oct 15 (UCAS fee £34.50). Graduate students apply through Oxford's direct portal (fee £75 taught / £20 research).\n\nUndergraduate fees for overseas students range from £37,380 to £62,820/year. International undergraduate funding is very limited, but includes Reach Oxford (covers full fees, living costs, and annual airfare for 2–3 students from DAC countries like Pakistan). Graduate funding is massive: Oxford expects over 1,100 full/partial scholarships for 2026–27, led by Clarendon (100% fees + living grant), Weidenfeld-Hoffmann, Pershing Square, and Rhodes Scholarships.",
    "topProgramsList": [
      {
        "name": "Computer Science",
        "ranking": "#4 Global",
        "description": "Algorithms, quantum computing, AI, machine learning, automated verification, and computational biology."
      },
      {
        "name": "Politics & International Relations",
        "ranking": "#2 Global",
        "description": "World politics, political philosophy, comparative government, and international security."
      },
      {
        "name": "Arts & Humanities",
        "ranking": "#1",
        "description": "World-renowned instruction in history, literature, languages, archaeology, and common law jurisprudence."
      },
      {
        "name": "Social Sciences & Management",
        "ranking": "#2",
        "description": "Leader in economics, management, business analytics, sociology, policy, and PPE."
      },
      {
        "name": "Life Sciences & Medicine",
        "ranking": "#2",
        "description": "Pioneering clinical medicine, oncology, immunology, neuroscience, and pharmacology."
      },
      {
        "name": "Natural Sciences",
        "ranking": "#3",
        "description": "Theoretical physics, pure mathematics, chemical sciences, and quantum science."
      }
    ],
    "allScholarshipsList": [
      {
        "id": "uni-067-1",
        "title": "Oxford Clarendon Scholarship",
        "amount": "100% Full Course Fees + Annual Living Grant",
        "coverage": "Full Ride",
        "eligibility": "All Master's and DPhil/PhD applicants regardless of nationality.",
        "description": "Oxford's premier graduate award covering 100% course fees and a generous living grant for the entire duration of study. Over 1,100 graduate awards offered across Oxford annually.",
        "deadline": "Dec / Jan Course Deadline",
        "requiresSeparateApp": false
      },
      {
        "id": "uni-067-2",
        "title": "Reach Oxford Undergraduate Scholarship",
        "amount": "Full Course Fees + Living Grant + 1 Return Airfare / Year",
        "coverage": "Full Ride",
        "eligibility": "Undergraduate applicants from DAC recipient countries (including Pakistan) who cannot study in home country.",
        "description": "Highly competitive award covering full course fees, living allowance, and annual travel allowance for 3–4 years (2–3 awards per year).",
        "deadline": "Oct 15 UCAS + Feb Scholarship",
        "requiresSeparateApp": true
      },
      {
        "id": "uni-067-3",
        "title": "Oxford Weidenfeld-Hoffmann Scholarship",
        "amount": "100% Course Fees + £20,780 / year Living Grant",
        "coverage": "Full Ride",
        "eligibility": "Graduate students from developing and emerging economies in transition.",
        "description": "Combines 100% tuition coverage, living stipend, and a leadership development program.",
        "deadline": "Dec / Jan Course Deadline",
        "requiresSeparateApp": true
      },
      {
        "id": "uni-067-4",
        "title": "Rhodes Scholarship at Oxford",
        "amount": "100% Oxford Fees + £20,400 / year Living Stipend + Airfare",
        "coverage": "Full Ride",
        "eligibility": "Outstanding young leaders from eligible Rhodes constituencies worldwide.",
        "description": "The world's oldest international graduate fellowship covering all university and college fees, living stipend, and visa/travel costs.",
        "deadline": "Varies by Country (July - Oct)",
        "requiresSeparateApp": true
      }
    ],
    "degreesOffered": [
      "Bachelors",
      "Masters",
      "PhD",
      "Doctorate (DPhil)"
    ],
    "tags": [
      "QS Top 5 Global",
      "Collegiate System",
      "Clarendon Scholarships",
      "Reach Oxford",
      "Rhodes Scholarship",
      "UK"
    ],
    "requiresSeparateApp": false,
    "logoText": "OXF",
    "logoBg": "from-blue-950 to-slate-900"
  },

  {
    "id": "uni-068",
    "universityName": "University of Cambridge",
    "location": "Cambridge, England, United Kingdom",
    "country": "United Kingdom",
    "flag": "🇬🇧",
    "foundingYear": "1209",
    "scholarshipTitle": "Cambridge International Scholarships & Cambridge Trust Awards",
    "ranking": "#6 Global (QS 2027) | #6 (QS 2026) | World-Leading STEM & Research Output",
    "qsSubjectRankings": "Archaeology #1 (#1 national) | English Language & Literature #1 (#1 national) | Biological Sciences #5 (#1 national) | Chemistry #2 (#1 national) | Psychology #2 (#1 national)",
    "coverage": "Full Ride",
    "amountValue": "Full Tuition + Living Stipend (Cambridge International PhD / Gates Cambridge) or Partial Trust Bursaries",
    "tuitionFee": "Overseas Undergrad: Course-Specific (£25,000 – £64,000/yr) | Home 2027: £10,050",
    "tuitionAmountNumeric": 45000,
    "hasFullRide": true,
    "hasPartialAid": true,
    "hasFinancialAid": true,
    "financialAidType": "Merit-Based",
    "financialAidDetails": "The University of Cambridge is a world-renowned collegiate research university founded in 1209, ranked #6 globally in QS 2027 and 2026. Cambridge consists of 31 constituent colleges. International undergraduate fees are course-specific. Full undergraduate scholarships for overseas students are very limited and mostly partial/means-tested via the Cambridge Trust and college bursaries. For 2027 undergraduate entry, applicants for Computer Science, Economics, and Math must take the TMUA, while Chemical Engineering, Engineering, Natural Sciences, and Vet Medicine require the ESAT (UCAS deadline Oct 15, 2026). At the graduate level, Cambridge offers robust funding. The flagship Cambridge International Scholarship provides ~63 fully funded PhD awards annually (100% fees + stipend). Gates Cambridge and departmental studentships also offer full doctoral funding.",
    "minGpa": "3.9+",
    "minSat": "1480 - 1560 (SAT / A*A*A A-Levels)",
    "satRequirementCategory": "Optional",
    "satPolicyDetails": "Undergraduate entry requires A-Levels (A*A*A to A*AA) or IB (40–42 points with 776 in HL). US applicants require 1480+ SAT (750+ math/reading) or 33+ ACT + 5s in 5 AP exams. Specific admissions tests are mandatory: TMUA for Computer Science/Economics/Math; ESAT for Engineering/Natural Sciences. Recommended English proficiency: IELTS 7.5+ (7.0 per band) or TOEFL iBT 110+.",
    "minIelts": "7.5+",
    "ieltsCategory": "7.5",
    "toeflRequirement": "110+ iBT",
    "commonAppAccepted": false,
    "applicationPortalDetails": "Undergraduate: UCAS portal (Strict deadline: Oct 15, 2026 for 2027 entry; UCAS fee £34.50). Postgraduate (MPhil/PhD): Cambridge Direct Applicant Portal (Funding deadline Dec/Jan).",
    "acceptanceRate": "16%",
    "deadline": "Oct 15 (UCAS Undergrad Deadline) / Dec-Jan (Postgrad Funding Deadline)",
    "description": "World-famous collegiate university ranked #6 globally in QS 2027/2026. Renowned for Archaeology, English, Biological Sciences, Chemistry, & Psychology.",
    "overviewLong": "The University of Cambridge is one of the world's premier academic institutions, founded in 1209 and comprising 31 constituent colleges. QS ranks Cambridge #6 globally in 2027 and 2026. Cambridge offers over 30 undergraduate courses across 65+ subject areas, including world-leading programs in Archaeology, English Language & Literature, Biological Sciences, Chemistry, and Psychology.\n\nUndergraduate education relies on small-group supervisions led by leading researchers. For 2027 entry, Cambridge mandates admissions assessment exams: TMUA for Computer Science, Economics, and Mathematics; ESAT for Engineering, Natural Sciences, Chemical Engineering & Biotech, and Vet Medicine. UCAS deadline is Oct 15, 2026.\n\nFinancial support for international undergraduates is mostly partial and means-tested through the Cambridge Trust and college bursaries. At the postgraduate level, funding is highly competitive and extensive: the Cambridge International Scholarship provides ~63 fully funded PhD awards per cycle (full tuition + living stipend), alongside Gates Cambridge and departmental studentships.",
    "topProgramsList": [
      {
        "name": "Archaeology",
        "ranking": "#1 (#1 national)",
        "description": "Ranked first in the world overall. Driven by perfect metrics in academic reputation and field research citations."
      },
      {
        "name": "English Language & Literature",
        "ranking": "#1 (#1 national)",
        "description": "Claims the top global spot, reflecting elite international prestige and maximum employer reputation scores."
      },
      {
        "name": "Biological Sciences",
        "ranking": "#5 (#1 national)",
        "description": "Ranked #5 globally (#1 national). It beats out top-tier global institutions, tracking just behind Harvard."
      },
      {
        "name": "Chemistry",
        "ranking": "#2 (#1 national)",
        "description": "Achieves the #2 spot worldwide and finishes as the highest-ranked chemistry department within the UK."
      },
      {
        "name": "Psychology",
        "ranking": "#2 (#1 national)",
        "description": "Secures #2 globally in the QS metrics (while taking the clean #1 spot globally in alternative lists like the THE 2026 rankings)."
      }
    ],
    "allScholarshipsList": [
      {
        "id": "uni-068-1",
        "title": "Cambridge International PhD Scholarship",
        "amount": "100% Full Tuition + Living Maintenance Stipend",
        "coverage": "Full Ride",
        "eligibility": "Overseas PhD applicants admitted to any Cambridge department based on academic merit.",
        "description": "Flagship doctoral award providing 100% tuition fee coverage and a full living stipend for up to 3.5–4 years (~63 awards per cycle).",
        "deadline": "Dec / Jan Funding Deadline",
        "requiresSeparateApp": false
      },
      {
        "id": "uni-068-2",
        "title": "Gates Cambridge Scholarship",
        "amount": "100% Full Tuition + £20,000+ / year Stipend + Travel Allowances",
        "coverage": "Full Ride",
        "eligibility": "Outstanding international applicants for Master's or PhD degrees from outside the UK.",
        "description": "Prestigious global fellowship covering full university and college fees, living stipend, health surcharges, and academic travel grants.",
        "deadline": "Oct (US) / Dec-Jan (Int'l)",
        "requiresSeparateApp": true
      },
      {
        "id": "uni-068-3",
        "title": "Cambridge Trust International Undergraduate Awards",
        "amount": "Partial Tuition / Living Cost Bursaries",
        "coverage": "Partial Aid",
        "eligibility": "Overseas undergraduate students accepted by a Cambridge College who demonstrate financial need.",
        "description": "Means-tested bursaries assisting international undergraduates with partial tuition and maintenance costs.",
        "deadline": "Feb (Post-Offer)",
        "requiresSeparateApp": true
      }
    ],
    "degreesOffered": [
      "Bachelors",
      "Masters",
      "PhD"
    ],
    "tags": [
      "QS Top 10 Global",
      "31 Constituent Colleges",
      "Cambridge International Scholarship",
      "Gates Cambridge",
      "TMUA & ESAT",
      "UK"
    ],
    "requiresSeparateApp": false,
    "logoText": "CAM",
    "logoBg": "from-cyan-900 to-slate-950"
  },

  {
    "id": "uni-069",
    "universityName": "University College London",
    "location": "London, England, United Kingdom",
    "country": "United Kingdom",
    "flag": "🇬🇧",
    "foundingYear": "1826",
    "scholarshipTitle": "UCL Global Undergraduate & Master's Scholarships, UCL-RES PhD Awards",
    "ranking": "#=8 Global (QS 2027) | #9 (QS 2026) | #1 Education / #1 Architecture (QS Subject 2026)",
    "qsSubjectRankings": "Education (#1 Global) | Architecture & Built Environment (#1 Global) | Pharmacy (#3) | Archaeology (#3) | Anthropology (#4) | Geography (#5) | Psychology (#5) | Medicine (#6) | Computer Science and Information Systems (#21 World)",
    "coverage": "Full Ride",
    "amountValue": "Full Tuition + Living Costs (Global Undergrad / UCL-RES PhD) or £15,000 (Global Master's)",
    "tuitionFee": "Course-Specific Overseas Tuition (£32,000 – £39,200 Undergrad / £14,500 – £70,300 Master's) | App Fee: £90 MSc / £0 PhD",
    "tuitionAmountNumeric": 36000,
    "hasFullRide": true,
    "hasPartialAid": true,
    "hasFinancialAid": true,
    "financialAidType": "Merit-Based",
    "financialAidDetails": "University College London (UCL) is a premier multidisciplinary research university in central London, ranked #=8 globally in QS 2027 (#9 in 2026). UCL holds 12 QS top-10 subject positions, including #1 globally in Education (IOE) and Architecture (Bartlett), and #21 globally for Computer Science and Information Systems. Overseas undergraduate tuition is course-specific (£32,000–£39,200/yr). UCL offers major international scholarships: the UCL Global Undergraduate Scholarship provides full and partial awards based on financial need. For Master's students, the UCL Global Master's Scholarship offers £15,000 (up to 85 awards), and the GREAT Scholarship Pakistan offers £10,000. At the PhD level, the UCL Research Excellence Scholarship (UCL-RES) provides 40 fully funded awards covering 100% Home/Overseas tuition + maintenance stipend + £1,200/yr research costs. Master's app fee is £90 (MSc) / £160 (Finance/Management/Biz Analytics); PhD app fee is £0.",
    "minGpa": "3.7+",
    "minSat": "1420 - 1530 (SAT / A*A*A A-Levels)",
    "satRequirementCategory": "Optional",
    "satPolicyDetails": "Undergraduate entry requires A-Levels (A*A*A to A*AB) or IB (38–40 points). US applicants require 1420+ SAT or 32+ ACT + 5s in 4 AP exams. UCAS equal-consideration deadline is Jan 13, 2027. Postgraduate entry requires a 1st or Upper 2nd Class UK Honors degree equivalent. Master's application fee is £90 (£160 for specialized business MScs; £0 for PhDs). Recommended English proficiency: IELTS 7.0–7.5+ or TOEFL iBT 100+.",
    "minIelts": "7.0+",
    "ieltsCategory": "7.0",
    "toeflRequirement": "100+ iBT",
    "commonAppAccepted": false,
    "applicationPortalDetails": "Undergraduate: UCAS portal (Typical equal-consideration deadline: Jan 13, 2027). Postgraduate (MSc/PhD): Direct UCL Online Application System (Fee: £90 Master's / £160 Business/Finance MSc / £0 PhD).",
    "acceptanceRate": "15%",
    "deadline": "Jan 13 (UCAS Undergrad) / May 1 (Postgrad Scholarship) / Rolling PhD",
    "description": "London's leading multidisciplinary university ranked #=8 globally in QS 2027. Sits #21 globally in Computer Science and Information Systems.",
    "overviewLong": "University College London (UCL) is a massive multidisciplinary public research university located in Bloomsbury (central London) and UCL East (Stratford). UCL ranks #=8 globally in QS 2027 and #9 in QS 2026. In the QS Subject Rankings, UCL ranks #1 globally for Education (IOE) and Architecture & Built Environment (The Bartlett), alongside top-10 standings in Pharmacy (#3), Archaeology (#3), Anthropology (#4), Geography (#5), Psychology (#5), Medicine (#6), and Biological Sciences (#9). Computer Science and Information Systems is ranked #21 globally.\n\nUndergraduates apply through UCAS (standard deadline Jan 13, 2027). Postgraduates apply directly via UCL's portal (application fee: £90 standard MSc, £160 for Finance/Business Analytics/Management MSc, £0 for research degrees).\n\nFinancial support is strong across levels: the UCL Global Undergraduate Scholarship provides full and partial financial-need awards for international students. The UCL Global Master's Scholarship offers £15,000 (up to 85 awards for lower-income applicants), plus country-specific awards like the GREAT Scholarship Pakistan (£10,000). The UCL Research Excellence Scholarship (UCL-RES) funds 40 PhD candidates annually with 100% tuition + full maintenance stipend + £1,200/yr research expenses.",
    "topProgramsList": [
      {
        "name": "IOE & The Bartlett (Education & Architecture)",
        "ranking": "#1 Globally in QS Education & Architecture 2026",
        "description": "Global leader in education, pedagogy, urban planning, built environment, and sustainable design."
      },
      {
        "name": "Computer Science and Information Systems",
        "ranking": "21",
        "description": "Artificial intelligence, machine learning, human-computer interaction, robotics, and software engineering."
      },
      {
        "name": "Medical School, Psychology & Brain Sciences",
        "ranking": "#5 Psychology / #6 Medicine Globally in QS 2026",
        "description": "Clinical medicine, cognitive neuroscience, global health, pharmacology, and mental health research."
      },
      {
        "name": "Faculty of Engineering Sciences & Data Science",
        "ranking": "Top 10 European Engineering & Tech",
        "description": "Biochemical engineering, financial technology, data science, robotics, and civil engineering."
      },
      {
        "name": "Department of Economics, Law & Anthropology",
        "ranking": "#4 Anthropology / Top 10 Economics Globally",
        "description": "Econometrics, international public policy, human rights law, and social anthropology."
      }
    ],
    "allScholarshipsList": [
      {
        "id": "uni-069-1",
        "title": "UCL Global Undergraduate Scholarship",
        "amount": "Full Tuition Coverage or Partial Financial Support",
        "coverage": "Full Ride",
        "eligibility": "International/Overseas undergraduate applicants demonstrating financial need.",
        "description": "Major institutional award providing full or partial tuition and maintenance support for high-achieving international students.",
        "deadline": "April 24 (Scholarship App)",
        "requiresSeparateApp": true
      },
      {
        "id": "uni-069-2",
        "title": "UCL Global Master's Scholarship",
        "amount": "£15,000 (Up to 85 Awards)",
        "coverage": "Partial Aid",
        "eligibility": "Overseas Master's applicants from lower-income backgrounds admitted to any taught postgraduate course.",
        "description": "Provides £15,000 toward tuition fees or living costs for eligible international Master's students.",
        "deadline": "May 8 (Scholarship App)",
        "requiresSeparateApp": true
      },
      {
        "id": "uni-069-3",
        "title": "UCL Research Excellence Scholarship (UCL-RES)",
        "amount": "100% Full Tuition + Maintenance Stipend + £1,200/yr Research Costs",
        "coverage": "Full Ride",
        "eligibility": "MPhil/PhD/EngD applicants from any country based on academic excellence.",
        "description": "UCL's premier doctoral fellowship providing 40 fully funded awards covering full Overseas tuition, living stipend, and annual research allowance for 3 years.",
        "deadline": "Jan 12 (Doctoral Deadline)",
        "requiresSeparateApp": true
      },
      {
        "id": "uni-069-4",
        "title": "UCL GREAT Scholarship (Pakistan)",
        "amount": "£10,000",
        "coverage": "Partial Aid",
        "eligibility": "Pakistani passport holders residing in Pakistan admitted to a full-time Master's program.",
        "description": "Jointly funded by UCL and the British Council for high-achieving Pakistani Master's students.",
        "deadline": "May 8",
        "requiresSeparateApp": true
      }
    ],
    "degreesOffered": [
      "Bachelors",
      "Masters",
      "PhD"
    ],
    "tags": [
      "QS Top 10 Global",
      "Central London",
      "UCL Global Scholarship",
      "UCL-RES PhD",
      "Top Architecture & Education",
      "UK"
    ],
    "requiresSeparateApp": true,
    "logoText": "UCL",
    "logoBg": "from-purple-900 to-slate-950"
  },

  {
    "id": "uni-070",
    "universityName": "The University of Manchester",
    "location": "Manchester, England, United Kingdom",
    "country": "United Kingdom",
    "flag": "🇬🇧",
    "foundingYear": "1824",
    "scholarshipTitle": "Global Futures Scholarships (Pakistan/South Asia) & Article 26 Awards",
    "ranking": "#=40 Global (QS 2027) | #35 (QS 2026) | Russell Group Flagship",
    "qsSubjectRankings": "Development Studies #5 (#1 national) | Architecture #5 (#2 national) | Geography #9 (#3 national) | Nursing #10 (#3 national) | Petroleum Engineering #12 (#2 national)",
    "coverage": "Partial Aid",
    "amountValue": "Up to £30,000 (£10,000/yr × 3 Undergrad) or £10,000 Master's Discount (Global Futures Pakistan) | £15,000 (GREAT Pakistan)",
    "tuitionFee": "Course-Specific Overseas Tuition (£28,000 – £48,000/yr) | UCAS Application Fee 2027: £34.50",
    "tuitionAmountNumeric": 34000,
    "hasFullRide": true,
    "hasPartialAid": true,
    "hasFinancialAid": true,
    "financialAidType": "Merit-Based",
    "financialAidDetails": "The University of Manchester is a major Russell Group research university ranked #=40 globally in QS 2027. Manchester offers substantial international scholarship schemes. The Global Futures Scholarship (Pakistan & South Asia) provides merit-based undergraduate tuition discounts of up to £30,000 total (£10,000/year for 3 years) and £10,000 for Master's programs. The GREAT Scholarship Pakistan offers £15,000 for 1-year taught Master's degrees. For UK sanctuary seekers, the Article 26 Sanctuary Scholarship provides 5 full-funding awards (100% tuition + £5,000/yr stipend + accommodation). Doctoral funding is available through competitive departmental and faculty studentships. Undergraduate applications must use UCAS (Code: M20 MANU; 2027 fee: £34.50). Common App is NOT used.",
    "minGpa": "3.7+",
    "minSat": "1400 - 1520 (SAT / A*AA A-Levels)",
    "satRequirementCategory": "Optional",
    "satPolicyDetails": "Undergraduate entry requires A-Levels (A*A*A to AAA) or IB (36–38 points). US applicants require 1400+ SAT or 31+ ACT with 3+ AP exams (4 or 5). All undergraduate applications must be submitted via UCAS (UCAS Code: M20 MANU; 2027 UCAS application fee: £34.50). Common App is NOT accepted. Postgraduate applications use Manchester's direct online portal. Recommended English proficiency: IELTS 6.5–7.5+ or TOEFL iBT 90–100+.",
    "minIelts": "6.5+",
    "ieltsCategory": "6.5",
    "toeflRequirement": "90+ iBT",
    "commonAppAccepted": false,
    "applicationPortalDetails": "Undergraduate: UCAS portal strictly (Institution Code: M20 MANU; 2027 UCAS Fee: £34.50). Common App is NOT accepted. Postgraduate: Direct Manchester Online Application Portal.",
    "acceptanceRate": "27%",
    "deadline": "Jan 13 (Standard UCAS Equal-Consideration) / Oct 15 (Medicine) / Rolling Postgrad",
    "description": "Major Russell Group research power ranked #=40 globally in QS 2027. Renowned for Development Studies, Architecture, Geography, Nursing, and Petroleum Engineering.",
    "overviewLong": "The University of Manchester is a world-leading public research university and Russell Group member located along Oxford Road in Manchester, England. QS ranks Manchester #=40 globally in 2027 and #35 in 2026. Manchester is famous for groundbreaking academic strengths spanning Development Studies, Architecture, Geography, Nursing, and Petroleum Engineering.\n\nStudent life features over 400 clubs and societies managed by the Manchester Students' Union. Undergraduates apply through UCAS. Postgraduates apply directly via Manchester's online portal.",
    "topProgramsList": [
      {
        "name": "Development Studies",
        "ranking": "#5 (#1 national)",
        "description": "The School of Social Sciences is globally elite for development research, poverty reduction studies, and social justice."
      },
      {
        "name": "Architecture",
        "ranking": "#5 (#2 national)",
        "description": "Offered jointly with Manchester Metropolitan University through the Manchester School of Architecture (MSA)."
      },
      {
        "name": "Geography",
        "ranking": "#9 (#3 national)",
        "description": "Renowned for environmental monitoring, urban geography, and human-geographical mapping."
      },
      {
        "name": "Nursing",
        "ranking": "#10 (#3 national)",
        "description": "Led by the School of Health Sciences, outstanding in clinical research and nursing administration."
      },
      {
        "name": "Petroleum Engineering",
        "ranking": "#12 (#2 national)",
        "description": "Spearheaded by the Department of Chemical Engineering, focusing on subsurface energy and recovery systems."
      }
    ],
    "allScholarshipsList": [
      {
        "id": "uni-070-1",
        "title": "Manchester Global Futures Undergraduate Scholarship (Pakistan)",
        "amount": "Up to £30,000 Total (£10,000 / year × 3 Years)",
        "coverage": "Partial Aid",
        "eligibility": "Merit-based award for high-achieving undergraduate applicants domiciled in Pakistan.",
        "description": "Provides a £10,000/year tuition fee reduction for 3 years of undergraduate study at Manchester.",
        "deadline": "April / May (Post-Offer)",
        "requiresSeparateApp": true
      },
      {
        "id": "uni-070-2",
        "title": "Manchester Global Futures Master's Scholarship (Pakistan)",
        "amount": "£10,000 Tuition Discount",
        "coverage": "Partial Aid",
        "eligibility": "International Master's applicants domiciled in Pakistan.",
        "description": "Merit-based tuition reduction of £10,000 applied directly toward Master's degree tuition.",
        "deadline": "May (Scholarship App)",
        "requiresSeparateApp": true
      },
      {
        "id": "uni-070-3",
        "title": "Manchester GREAT Scholarship (Pakistan)",
        "amount": "£15,000",
        "coverage": "Partial Aid",
        "eligibility": "Pakistani passport holders residing in Pakistan admitted to eligible 1-year taught Master's programs.",
        "description": "Jointly funded by Manchester and the British Council providing £15,000 toward Master's tuition fees.",
        "deadline": "May",
        "requiresSeparateApp": true
      },
      {
        "id": "uni-070-4",
        "title": "Article 26 Sanctuary Scholarship",
        "amount": "100% Full Tuition + £5,000 / year Stipend + Accommodation",
        "coverage": "Full Ride",
        "eligibility": "Undergraduate applicants in the UK with sanctuary/asylum status.",
        "description": "Provides 5 full-ride awards covering full tuition, £5,000 annual stipend, and campus housing.",
        "deadline": "Jan / Feb 2027",
        "requiresSeparateApp": true
      }
    ],
    "degreesOffered": [
      "Bachelors",
      "Masters",
      "PhD"
    ],
    "tags": [
      "QS Top 40 Global",
      "Russell Group",
      "Global Futures Pakistan",
      "Graphene & Computing",
      "Manchester UK",
      "UK"
    ],
    "requiresSeparateApp": true,
    "logoText": "MAN",
    "logoBg": "from-purple-950 to-amber-900"
  },

  {
    "id": "uni-071",
    "universityName": "University of Bristol",
    "location": "Bristol, England, United Kingdom",
    "country": "United Kingdom",
    "flag": "🇬🇧",
    "foundingYear": "1876",
    "scholarshipTitle": "Think Big International Scholarships & Bristol PhD Research Fellowships",
    "ranking": "#57 Global (QS 2027) | #51 (QS 2026) | Top UK Engineering & Tech Hub",
    "qsSubjectRankings": "Earth & Marine Sciences #4 (#2 national) | Geophysics #5 (#2 national) | Anthropology #7 (#3 national) | Pharmacy & Pharmacology #8 (#3 national) | Anatomy & Physiology #10 (#3 national)",
    "coverage": "Full Ride",
    "amountValue": "Tuition Discounts (Think Big Undergrad & Postgrad) or Full Tuition + £21,805/yr Stipend (Bristol PhD)",
    "tuitionFee": "Course-Specific Overseas Tuition (£26,000 – £45,000/yr) | UCAS Application Fee 2027: £34.50",
    "tuitionAmountNumeric": 32000,
    "hasFullRide": true,
    "hasPartialAid": true,
    "hasFinancialAid": true,
    "financialAidType": "Merit-Based",
    "financialAidDetails": "The University of Bristol is a prestigious Russell Group research university in southwest England, ranked #57 globally in QS 2027. Bristol is renowned for Aerospace Engineering, Computer Science, Robotics, Quantum Science, Earth Sciences, and Medicine. Bristol offers the flagship 'Think Big' International Scholarship program for both undergraduate and postgraduate applicants, providing substantial tuition fee discounts. At the doctoral level, Bristol offers over 50 fully funded Postgraduate Research Scholarships for UK and international students, covering 100% full tuition + a £21,805/year living stipend (2026/27 rate, continuing for 2027 entry across Chemistry, Engineering, and Science faculties). Bristol Business School offers 4-year PhD bursaries with £20,780+/yr stipends. Undergraduate applications must use UCAS (Code: BRISL B78; 2027 equal-consideration deadline Jan 13, 2027; Fee: £34.50). Common App is NOT accepted.",
    "minGpa": "3.7+",
    "minSat": "1400 - 1520 (SAT / A*AA A-Levels)",
    "satRequirementCategory": "Optional",
    "satPolicyDetails": "Undergraduate entry requires A-Levels (A*A*A to AAB) or IB (36–38 points). US applicants require 1400+ SAT or 31+ ACT + 3 AP exam scores of 4 or 5. All undergraduate applications must be submitted via UCAS (UCAS Code: BRISL B78; 2027 equal-consideration deadline: Jan 13, 2027; Fee: £34.50). Common App is NOT accepted. Postgraduate applications use Bristol's direct online portal. Recommended English proficiency: IELTS 6.5–7.5+ or TOEFL iBT 90–100+.",
    "minIelts": "6.5+",
    "ieltsCategory": "6.5",
    "toeflRequirement": "90+ iBT",
    "commonAppAccepted": false,
    "applicationPortalDetails": "Undergraduate: UCAS portal strictly (Institution Code: BRISL B78; 2027 Equal-Consideration Deadline: Jan 13, 2027; Fee: £34.50). Common App is NOT accepted. Postgraduate: Direct Bristol Online Portal.",
    "acceptanceRate": "23%",
    "deadline": "Jan 13 (UCAS Equal-Consideration) / April 10 (Think Big Scholarship) / Rolling PhD",
    "description": "Top UK research university ranked #57 globally in QS 2027. Sits #4 in Earth & Marine Sciences, #5 in Geophysics, and #7 in Anthropology.",
    "overviewLong": "The University of Bristol is a premier public research university and Russell Group member located in the vibrant city of Bristol. QS ranks Bristol #57 globally in 2027 and #51 in 2026. Bristol is famous for Earth & Marine Sciences, Geophysics, Anthropology, Pharmacy, and Anatomy & Physiology.",
    "topProgramsList": [
      {
        "name": "Earth & Marine Sciences",
        "ranking": "#4 (#2 national)",
        "description": "Renowned for ocean crust studies, marine biogeochemistry, and climate-system modeling."
      },
      {
        "name": "Geophysics",
        "ranking": "#5 (#2 national)",
        "description": "Managed by the School of Earth Sciences, focusing on seismic imaging, planetary physics, and volcanology."
      },
      {
        "name": "Anthropology",
        "ranking": "#7 (#3 national)",
        "description": "Globally recognized for human evolution, socio-cultural research, and archaeological science."
      },
      {
        "name": "Pharmacy & Pharmacology",
        "ranking": "#8 (#3 national)",
        "description": "Leading research in neuropharmacology, cardiovascular research, and drug delivery systems."
      },
      {
        "name": "Anatomy & Physiology",
        "ranking": "#10 (#3 national)",
        "description": "Elite clinical and fundamental studies in neuromuscular science, vascular biology, and cell imaging."
      }
    ],
    "allScholarshipsList": [
      {
        "id": "uni-071-1",
        "title": "Think Big Undergraduate Scholarship",
        "amount": "Tuition Fee Contribution (£6,500 – £26,000 / year)",
        "coverage": "Partial Aid",
        "eligibility": "International fee-paying undergraduate applicants admitted to full-time programs.",
        "description": "Bristol's flagship international undergraduate award providing tuition fee discounts.",
        "deadline": "April 10",
        "requiresSeparateApp": true
      },
      {
        "id": "uni-071-2",
        "title": "Think Big Postgraduate Scholarship",
        "amount": "Tuition Fee Contribution (£6,500 – £13,000 / year)",
        "coverage": "Partial Aid",
        "eligibility": "International fee-paying Master's applicants admitted to full-time taught programs.",
        "description": "Provides tuition fee reductions for international postgraduate taught students.",
        "deadline": "April 10",
        "requiresSeparateApp": true
      },
      {
        "id": "uni-071-3",
        "title": "Bristol Postgraduate Research PhD Scholarship",
        "amount": "100% Full Tuition + £21,805 / year Living Stipend",
        "coverage": "Full Ride",
        "eligibility": "Outstanding UK and international PhD candidates across Science, Engineering, and Medicine.",
        "description": "Over 50 fully funded doctoral awards providing 100% tuition coverage and £21,805/year maintenance stipend (2026/27 rate, continuing for 2027 entry).",
        "deadline": "Jan / Feb Doctoral Deadline",
        "requiresSeparateApp": true
      }
    ],
    "degreesOffered": [
      "Bachelors",
      "Masters",
      "PhD"
    ],
    "tags": [
      "QS Top 60 Global",
      "Russell Group",
      "Think Big Scholarships",
      "Aerospace & Tech Hub",
      "Bristol UK",
      "UK"
    ],
    "requiresSeparateApp": true,
    "logoText": "BRI",
    "logoBg": "from-red-950 to-slate-900"
  },

  {
    "id": "uni-072",
    "universityName": "The University of Edinburgh",
    "location": "Edinburgh, Scotland, United Kingdom",
    "country": "United Kingdom",
    "flag": "🇬🇧",
    "foundingYear": "1583",
    "scholarshipTitle": "Edinburgh Global Mathematics Awards & Doctoral College Fellowships",
    "ranking": "#35 Global (QS 2027) | #34 (QS 2026) | #4 UK Research Power (REF 2021)",
    "qsSubjectRankings": "English Language & Literature #6 (#3 national) | Arts and Humanities #9 (#4 national) | Computer Science & Informatics #20 (#4 national) | Data Science & AI #24 | Architecture & Built Environment #23 (#5 national) | Chemical Engineering #38 (#5 national)",
    "coverage": "Full Ride",
    "amountValue": "£5,000/yr (Global Math Undergrad) or Full Tuition + Living Stipend (Edinburgh Doctoral College PhD)",
    "tuitionFee": "Course-Specific Overseas Tuition (£26,000 – £49,000/yr) | Living Costs ~£18,504/yr",
    "tuitionAmountNumeric": 35000,
    "hasFullRide": true,
    "hasPartialAid": true,
    "hasFinancialAid": true,
    "financialAidType": "Merit-Based",
    "financialAidDetails": "The University of Edinburgh is Scotland's leading research university and a global academic powerhouse, ranked #35 globally in QS 2027 (#34 in 2026) and #4 in the UK for Research Power (REF 2021). Edinburgh excels globally in English Language & Literature (#6), Arts and Humanities (#9), Computer Science & Informatics (#20), Data Science & AI (#24), Architecture & Built Environment (#23), and Chemical Engineering (#38). Overseas undergraduate financial support includes the Edinburgh Global Undergraduate Mathematics Scholarship (£5,000/year for eligible Math students). At the postgraduate level, Edinburgh offers Commonwealth Shared Scholarships (full cost) and Edinburgh Doctoral College Scholarships (100% full PhD tuition + living stipend). Undergraduate applications must use UCAS (Oct 15 deadline for Medicine/Vet; Jan 13, 2027 equal-consideration deadline for others; Fee: £34.50). Common App is NOT accepted. Postgraduate applications use Edinburgh's direct portal (select MSc app fees: £50–£60; PhDs £0).",
    "minGpa": "3.7+",
    "minSat": "1420 - 1530 (SAT / A*AA A-Levels)",
    "satRequirementCategory": "Optional",
    "satPolicyDetails": "Undergraduate entry requires A-Levels (A*A*A to ABB) or IB (34–38 points). US applicants require 1420+ SAT or 32+ ACT with 3+ AP exams (4 or 5). All undergraduate applications must be submitted via UCAS (Medicine/Vet deadline: Oct 15; standard equal-consideration deadline: Jan 13, 2027; Fee: £34.50). Common App is NOT accepted. Postgraduate applications use Edinburgh's direct online portal (application fee: £50–£60 for select MScs; £0 for research degrees). Recommended English proficiency: IELTS 6.5–7.5+ or TOEFL iBT 92–100+.",
    "minIelts": "6.5+",
    "ieltsCategory": "6.5",
    "toeflRequirement": "92+ iBT",
    "commonAppAccepted": false,
    "applicationPortalDetails": "Undergraduate: UCAS portal strictly (Medicine/Vet: Oct 15; Standard Equal-Consideration: Jan 13, 2027; Fee: £34.50). Common App is NOT accepted. Postgraduate: Direct Edinburgh Degree Finder / Application Portal.",
    "acceptanceRate": "12%",
    "deadline": "Oct 15 (Med/Vet UCAS) / Jan 13 (Standard UCAS) / Rolling Postgrad",
    "description": "Scotland's premier research university ranked #35 globally in QS 2027. Sits #6 globally for English Language & Literature and #9 for Arts and Humanities.",
    "overviewLong": "The University of Edinburgh is an ancient Scottish public research university founded in 1583 and a key member of the Russell Group. QS ranks Edinburgh #35 globally in 2027 and #34 in 2026. Edinburgh ranks #4 in the UK for overall research power in the Research Excellence Framework (REF 2021).\n\nEdinburgh is globally renowned for its academic excellence across various disciplines, particularly English Language & Literature (#6), Arts and Humanities (#9), Computer Science & Informatics (#20), Data Science and AI (#24), Architecture & Built Environment (#23), and Chemical Engineering (#38). Student life thrives through the Edinburgh University Students' Association (EUSA) across historic George Square and King's Buildings campuses.\n\nUndergraduate admission uses UCAS (Deadlines: Oct 15 for Med/Vet; Jan 13, 2027 for standard courses; UCAS fee £34.50; Common App is NOT accepted). Postgraduate applicants use Edinburgh's direct portal. Financial aid includes the Edinburgh Global Undergraduate Mathematics Scholarship (£5,000/yr) and fully funded Edinburgh Doctoral College PhD Scholarships (full tuition + maintenance stipend). Average living expenses are estimated at ~£18,504/year.",
    "topProgramsList": [
      {
        "name": "English Language & Literature",
        "ranking": "#6 (#3 national)",
        "description": "One of the oldest and most prestigious departments in the world. Propelled by a near-perfect academic peer reputation score."
      },
      {
        "name": "Arts and Humanities (Broad Faculty)",
        "ranking": "#9 (#4 national)",
        "description": "A spectacular top-10 global finish. Driven by world-leading citation impact and peer recognition across history, languages, and philosophy."
      },
      {
        "name": "Computer Science & Informatics",
        "ranking": "#20 (#4 national)",
        "description": "Edinburgh's flagship technical program. Housed in the world-class School of Informatics, it excels particularly in AI, computational linguistics, and data infrastructure."
      },
      {
        "name": "Data Science and AI",
        "ranking": "#24",
        "description": "Pioneered by the School of Informatics, leading global research in machine learning, high-performance data analytics, and ethical AI."
      },
      {
        "name": "Architecture & Built Environment",
        "ranking": "#23 (#5 national)",
        "description": "Blends artistic design with structural science. Taught in tandem with the Edinburgh College of Art, pulling elite global employment outcomes."
      },
      {
        "name": "Chemical Engineering",
        "ranking": "#38 (#5 national)",
        "description": "Edinburgh’s highest-performing pure engineering discipline. Focuses intensely on biotechnology, carbon capture, and sustainable material informatics."
      }
    ],
    "allScholarshipsList": [

      {
        "id": "uni-072-1",
        "title": "Edinburgh Global Undergraduate Mathematics Scholarship",
        "amount": "£5,000 / year",
        "coverage": "Partial Aid",
        "eligibility": "International/EU fee status undergraduate applicants admitted to eligible School of Mathematics degrees.",
        "description": "Merit-based scholarship providing £5,000 per year toward tuition for the duration of the degree.",
        "deadline": "March 31",
        "requiresSeparateApp": true
      ,
    "logoText": "UE",
    "logoBg": "from-blue-700 to-indigo-950",
    "degreesOffered": ["Undergraduate", "Graduate", "PhD"]},

      {
        "id": "uni-072-2",
        "title": "Edinburgh Doctoral College PhD Scholarship",
        "amount": "100% Full Tuition + Full Living Maintenance Stipend",
        "coverage": "Full Ride",
        "eligibility": "Competitive applicants (Home and International) admitted to PhD research programs.",
        "description": "Prestigious university doctoral fellowship providing 100% tuition coverage and a full living maintenance stipend for 3–4 years.",
        "deadline": "Jan / Feb Doctoral Deadline",
        "requiresSeparateApp": true
      ,
    "logoText": "UE",
    "logoBg": "from-blue-700 to-indigo-950",
    "degreesOffered": ["Undergraduate", "Graduate", "PhD"]},

      {
        "id": "uni-072-3",
        "title": "Commonwealth Shared Scholarship Scheme (Edinburgh)",
        "amount": "100% Tuition + Living Allowance + Return Airfare",
        "coverage": "Full Ride",
        "eligibility": "Master's applicants from eligible Commonwealth developing countries.",
        "description": "Fully funded postgraduate award covering full tuition, monthly stipend, arrival allowance, and travel.",
        "deadline": "Dec / Jan",
        "requiresSeparateApp": true
      }
    ],
    "degreesOffered": [
      "Bachelors",
      "Masters",
      "PhD"
    ],
    "tags": [
      "QS Top 35 Global",
      "Russell Group",
      "School of Informatics AI",
      "Scotland Flagship",
      "Edinburgh UK",
      "UK"
    ],
    "requiresSeparateApp": true,
    "logoText": "EDI",
    "logoBg": "from-blue-900 to-slate-950"
  },

  {
    "id": "uni-073",
    "universityName": "King's College London",
    "location": "London, England, United Kingdom",
    "country": "United Kingdom",
    "flag": "🇬🇧",
    "foundingYear": "1829",
    "scholarshipTitle": "IoPPN Master's Awards, Sanctuary Fellowships & Doctoral College Funding",
    "ranking": "#37 Global (QS 2027) | #31 (QS 2026) | #2 Nursing Globally (QS Subject 2026)",
    "qsSubjectRankings": "Nursing #2 (#1 national) | Dentistry #5 (#1 national) | Medicine #11 (#5 national) | Politics & International Studies #11 (#4 national) | English Language & Literature #14 (#4 national)",
    "coverage": "Full Ride",
    "amountValue": "£5,000 (IoPPN Master's) or Full Tuition + £20,000 Stipend (Sanctuary / Fulbright / Marshall PhD)",
    "tuitionFee": "Course-Specific Overseas Tuition (£28,000 – £52,000/yr) | UCAS Application Fee 2027: £34.50",
    "tuitionAmountNumeric": 35000,
    "hasFullRide": true,
    "hasPartialAid": true,
    "hasFinancialAid": true,
    "financialAidType": "Merit-Based",
    "financialAidDetails": "King's College London (KCL) is a world-famous Russell Group university in central London, ranked #37 globally in QS 2027 (#31 in 2026) and 6th in the UK. KCL holds outstanding global positions, particularly in Nursing (#2 globally) and Dentistry (#5 globally). KCL offers Master's awards like the IoPPN Postgraduate Taught Scholarships (£5,000 tuition discount). The KCL Sanctuary Scholarship provides up to 12 full-ride awards (100% fee waiver + £20,000 annual living stipend) for eligible sanctuary seekers. Doctoral candidates benefit from King's Doctoral College Studentships, Fulbright PhD Awards (full tuition + stipend), and Marshall Scholarships (100% tuition + stipend + travel for 2027/28). Undergraduate applications must use UCAS (no extra KCL app fee; 2027 UCAS Fee: £34.50). Common App is NOT accepted. Postgraduate applications use 'King's Apply'.",
    "minGpa": "3.7+",
    "minSat": "1420 - 1530 (SAT / A*AA A-Levels)",
    "satRequirementCategory": "Optional",
    "satPolicyDetails": "Undergraduate entry requires A-Levels (A*A*A to AAB) or IB (35–38 points). US applicants require 1420+ SAT or 32+ ACT with 3+ AP exam scores of 4 or 5. All undergraduate applications must be submitted via UCAS (UCAS Fee: £34.50; no separate KCL undergraduate fee). Common App is NOT accepted. Postgraduate applications use King's Apply direct portal (program-specific app fees apply). Recommended English proficiency: IELTS 6.5–7.5+ or TOEFL iBT 92–100+.",
    "minIelts": "6.5+",
    "ieltsCategory": "6.5",
    "toeflRequirement": "92+ iBT",
    "commonAppAccepted": false,
    "applicationPortalDetails": "Undergraduate: UCAS portal strictly (2027 UCAS Fee: £34.50; no extra KCL application fee). Common App is NOT accepted. Postgraduate: King's Apply Direct Portal.",
    "acceptanceRate": "13%",
    "deadline": "Jan 13 (UCAS Equal-Consideration) / Oct 15 (Medicine/Dentistry) / Rolling Postgrad",
    "description": "Central London research power ranked #37 globally in QS 2027. Sits #2 globally for Nursing and #5 for Dentistry.",
    "overviewLong": "King's College London (KCL) is a premier public research university and founding college of the University of London, established in 1829. KCL ranks #37 globally in QS 2027 and #31 in QS 2026 (6th in the UK). Its five central London campuses (Strand, Guy's, Waterloo, St Thomas', Denmark Hill) sit alongside major teaching hospitals, parliament, and financial hubs.\n\nKey academic strengths include Nursing (#2 globally, #1 national), Dentistry (#5 globally, #1 national), Medicine (#11 globally, #5 national), Politics & International Studies (#11 globally, #4 national), and English Language & Literature (#14 globally, #4 national). Student life is supported by KCLSU across central London.\n\nUndergraduate admission uses UCAS (Standard deadline Jan 13, 2027; Med/Dentistry Oct 15; UCAS fee £34.50; Common App is NOT accepted). Postgraduate candidates apply via 'King's Apply'. Financial aid includes IoPPN Master's Scholarships (£5,000 tuition discount), Sanctuary Scholarships (100% fee waiver + £20,000 stipend), and King's Doctoral College Studentships (including Fulbright and Marshall PhD Fellowships).",
    "topProgramsList": [
      {
        "name": "Nursing",
        "ranking": "#2 (#1 national)",
        "description": "KCL's highest-ranked single discipline. Propelled by elite clinical partnerships and flawless research impact metrics at the Florence Nightingale Faculty of Nursing, Midwifery & Palliative Care."
      },
      {
        "name": "Dentistry",
        "ranking": "#5 (#1 national)",
        "description": "Positioned comfortably in the world's top 5. The program leads the UK nationwide for its cutting-edge oral health research and clinical training facilities."
      },
      {
        "name": "Medicine",
        "ranking": "#11 (#5 national)",
        "description": "Climbed four places since the prior cycle. It is heavily anchored by the Faculty of Life Sciences & Medicine, benefiting from massive global clinical research networks."
      },
      {
        "name": "Politics & International Studies",
        "ranking": "#11 (#4 national)",
        "description": "Ties with Medicine for a near-top-10 finish globally. Driven by high academic reputation scores regarding its work in war studies, international conflict, and policy development."
      },
      {
        "name": "English Language & Literature",
        "ranking": "#14 (#4 national)",
        "description": "Tied with Geography and Philosophy globally. Propelled by pristine peer reputation scores, anchoring KCL's broad Arts & Humanities Faculty which sits at #21 globally."
      }
    ],
    "allScholarshipsList": [

      {
        "id": "uni-073-1",
        "title": "IoPPN Postgraduate Taught Scholarship",
        "amount": "£5,000 Tuition Discount (10 Awards)",
        "coverage": "Partial Aid",
        "eligibility": "Full-time Home and International Master's applicants in IoPPN mental health and neuroscience degrees.",
        "description": "Provides ten £5,000 tuition reductions for Master's students in psychiatry, psychology, and neuroscience.",
        "deadline": "May 31",
        "requiresSeparateApp": true
      ,
    "logoText": "KCL",
    "logoBg": "from-blue-700 to-indigo-950",
    "degreesOffered": ["Undergraduate", "Graduate", "PhD"]},

      {
        "id": "uni-073-2",
        "title": "KCL Sanctuary Scholarship",
        "amount": "100% Full Tuition Waiver + £20,000 / year Living Stipend",
        "coverage": "Full Ride",
        "eligibility": "Undergraduate or postgraduate applicants facing asylum, displacement, or humanitarian protection circumstances in the UK.",
        "description": "Up to 12 full-ride awards covering 100% tuition fees and a £20,000 annual cost-of-living stipend.",
        "deadline": "March 31",
        "requiresSeparateApp": true
      ,
    "logoText": "KCL",
    "logoBg": "from-blue-700 to-indigo-950",
    "degreesOffered": ["Undergraduate", "Graduate", "PhD"]},

      {
        "id": "uni-073-3",
        "title": "King's Doctoral College Studentships (Fulbright & Marshall)",
        "amount": "100% Full Tuition + Living Stipend + Travel Allowances",
        "coverage": "Full Ride",
        "eligibility": "Competitive PhD applicants admitted across KCL faculties.",
        "description": "Fully funded doctoral awards providing 100% international tuition coverage, annual living stipend, and research allowances.",
        "deadline": "Jan / Feb Doctoral Deadline",
        "requiresSeparateApp": true
      }
    ],
    "degreesOffered": [
      "Bachelors",
      "Masters",
      "PhD"
    ],
    "tags": [
      "QS Top 40 Global",
      "Russell Group",
      "Central London",
      "#1 Nursing World",
      "IoPPN & Medicine",
      "UK"
    ],
    "requiresSeparateApp": true,
    "logoText": "KCL",
    "logoBg": "from-red-900 to-indigo-950"
  },

  {
    "id": "uni-074",
    "universityName": "London School of Economics and Political Science",
    "location": "London, England, United Kingdom",
    "country": "United Kingdom",
    "flag": "🇬🇧",
    "foundingYear": "1895",
    "scholarshipTitle": "Uggla Family Scholars Programme, Graduate Support Scheme & LSE PhD Studentships",
    "ranking": "#62 Global (QS 2027) | #56 (QS 2026) | #1 Domestic UK (Times 2026)",
    "qsSubjectRankings": "Social Sciences & Management (#5 Global) | Geography (#2) | Development Studies (#4) | Social Policy (#4) | Politics (#5) | Economics & Econometrics (#6) | Sociology (#6) | Finance & Accounting (#8) | Law (#9)",
    "coverage": "Full Ride",
    "amountValue": "Up to £32,197/yr (Uggla Overseas Undergrad) or Full Fees + £23,805/yr Stipend (LSE PhD Studentship)",
    "tuitionFee": "Course-Specific Overseas Tuition (£28,900 – £35,700/yr) | Standard UCAS App Fee: £34.50",
    "tuitionAmountNumeric": 32000,
    "hasFullRide": true,
    "hasPartialAid": true,
    "hasFinancialAid": true,
    "financialAidType": "Need-Based",
    "financialAidDetails": "The London School of Economics and Political Science (LSE) is a world-renowned social sciences powerhouse located in central London, ranked #62 globally in QS 2027 (#56 in 2026) and #1 overall in domestic UK league tables by The Times & Sunday Times Good University Guide 2026 (distinguishing domestic undergraduate metrics from global multidisciplinary rankings). LSE holds top-10 global QS standings in Economics (#6), Politics (#5), Geography (#2), Development Studies (#4), Accounting & Finance (#8), and Law (#9). For international undergraduates, the Uggla Family Scholars Programme provides up to £32,197/year (£13,646 tuition + £17,985 maintenance + £566 travel, plus LSE Undergraduate Support Scheme top-up). At the Master's level, LSE provides ~£3M annually via the Graduate Support Scheme (need-based awards reaching full fees and maintenance in select cases). Doctoral candidates benefit from 4-year LSE PhD Studentships providing 100% full tuition waiver + £23,805 annual stipend. Undergraduate applications must use UCAS (Deadline: Jan 13, 2027; Fee: £34.50; Common App NOT accepted). Postgraduate applications use LSE's direct Graduate Application Portal.",
    "minGpa": "3.8+",
    "minSat": "1450 - 1550 (SAT / A*AA A-Levels)",
    "satRequirementCategory": "Optional",
    "satPolicyDetails": "Undergraduate entry requires A-Levels (A*AA to A*A*A) or IB (37–38 points with 766 or 776 in HL). US applicants require 1450+ SAT or 33+ ACT + 5s in 4 to 5 AP exams. All undergraduate applications must be submitted via UCAS (Deadline: Jan 13, 2027; Standard UCAS Fee: £34.50). Common App is NOT accepted. Postgraduate applications use LSE's direct Graduate Application Portal. Recommended English proficiency: IELTS 7.0–7.5+ or TOEFL iBT 100+.",
    "minIelts": "7.0+",
    "ieltsCategory": "7.0",
    "toeflRequirement": "100+ iBT",
    "commonAppAccepted": false,
    "applicationPortalDetails": "Undergraduate: UCAS portal strictly (Equal-Consideration Deadline: Jan 13, 2027; Standard UCAS Fee: £34.50). Common App is NOT accepted. Postgraduate: Direct LSE Graduate Application Portal.",
    "acceptanceRate": "9%",
    "deadline": "Jan 13 (UCAS Equal-Consideration) / Rolling Postgrad (Early application recommended)",
    "description": "World-leading social sciences university ranked #62 globally in QS 2027 (#1 in UK domestic tables by The Times 2026). Ranked #6 in Economics & #5 in Politics. Offers £32k/yr Uggla Overseas Undergrad Awards & fully funded 4-year PhD Studentships.",
    "overviewLong": "The London School of Economics and Political Science (LSE) is a world-renowned public research university specialising in social sciences, located near Holborn and Covent Garden in central London. QS ranks LSE #62 globally in 2027 and #56 in 2026. In domestic UK league tables, The Times and Sunday Times Good University Guide 2026 ranked LSE #1 overall in the UK, highlighting the distinction between domestic student-satisfaction/employment metrics and global multidisciplinary rankings.\n\nLSE holds exceptional global top-10 QS subject rankings: Geography (#2), Development Studies (#4), Social Policy (#4), Politics & International Studies (#5), Economics & Econometrics (#6), Sociology (#6), Accounting & Finance (#8), Anthropology (#8), Philosophy (#8), Law (#9), History (#10), and Marketing (#10).\n\nUndergraduate admission uses UCAS (Deadline: Jan 13, 2027; Standard UCAS Fee: £34.50; Common App is NOT accepted). Postgraduate applicants apply directly via LSE's Graduate Application Portal. Overseas undergraduate scholarships include the Uggla Family Scholars Programme (£32,197/yr total funding). Master's students access ~£3M in annual funding via the Graduate Support Scheme. Doctoral candidates benefit from 4-year LSE PhD Studentships covering 100% tuition + £23,805 annual stipend.",
    "topProgramsList": [
      {
        "name": "Department of Economics & Econometrics",
        "ranking": "#6 Globally in QS Economics 2026",
        "description": "Microeconomics, macroeconomics, econometrics, financial economics, and development economics."
      },
      {
        "name": "Department of Government & International Relations",
        "ranking": "#5 Globally in QS Politics 2026",
        "description": "Political science, global politics, international security, political economy, and diplomacy."
      },
      {
        "name": "Department of Accounting & Finance",
        "ranking": "#8 Globally in QS Accounting & Finance 2026",
        "description": "Corporate finance, asset pricing, accounting, risk management, and financial markets."
      },
      {
        "name": "Department of Law & Geography/Environment",
        "ranking": "#2 Geography / #9 Law Globally in QS 2026",
        "description": "Corporate law, international law, human rights, economic geography, and urban planning."
      },
      {
        "name": "Department of Social Policy, Sociology & Management",
        "ranking": "#4 Social Policy / #6 Sociology Globally in QS 2026",
        "description": "Global social policy, development studies, organizational behavior, and strategy."
      ,
    "logoText": "LSEP",
    "logoBg": "from-red-700 to-rose-950",
    "degreesOffered": ["Undergraduate", "Graduate", "PhD"],
    "tags": ["United Kingdom", "Europe", "International", "Research"],
    "requiresSeparateApp": true}
    ],
    "allScholarshipsList": [,

      {
        "id": "uni-074-1",
        "title": "LSE Uggla Family Scholars Programme (Overseas)",
        "amount": "Up to £32,197 / year + Tuition Top-Up",
        "coverage": "Full Ride",
        "eligibility": "High-achieving international undergraduate applicants demonstrating financial need.",
        "description": "Provides £13,646 tuition support + £17,985 maintenance + £566 travel, with remaining tuition fees covered via LSE Undergraduate Support Scheme top-up.",
        "deadline": "April 28 (Post-Offer)",
        "requiresSeparateApp": true
      ,
    "logoText": "LSEP",
    "logoBg": "from-blue-700 to-indigo-950",
    "degreesOffered": ["Undergraduate", "Graduate", "PhD"]},

      {
        "id": "uni-074-2",
        "title": "LSE Graduate Support Scheme (Master's)",
        "amount": "Partial to Full Tuition & Maintenance Support (£3M+ Pool)",
        "coverage": "Partial Aid",
        "eligibility": "Home and Overseas taught Master's and diploma offer holders with financial need.",
        "description": "Need-based financial aid scheme providing partial to full tuition and living support (~19% of Master's offer holders receive funding).",
        "deadline": "Rolling (Early Application Required)",
        "requiresSeparateApp": true
      ,
    "logoText": "LSEP",
    "logoBg": "from-blue-700 to-indigo-950",
    "degreesOffered": ["Undergraduate", "Graduate", "PhD"]},

      {
        "id": "uni-074-3",
        "title": "LSE PhD Studentships",
        "amount": "100% Full Tuition Waiver + £23,805 / year Stipend (4 Years)",
        "coverage": "Full Ride",
        "eligibility": "Outstanding Home and Overseas PhD candidates across all LSE departments.",
        "description": "Prestigious 4-year doctoral fellowship covering 100% tuition fees and providing a £23,805 annual living stipend.",
        "deadline": "Jan / Dec Doctoral Deadline",
        "requiresSeparateApp": true
      }
    ],
    "degreesOffered": [
      "Bachelors",
      "Masters",
      "PhD"
    ],
    "tags": [
      "QS Top 65 Global",
      "#1 UK Domestic (Times)",
      "Central London",
      "#6 Economics World",
      "Uggla Scholars",
      "UK"
    ],
    "requiresSeparateApp": true,
    "logoText": "LSE",
    "logoBg": "from-red-900 to-stone-900"
  },

  {
    "id": "uni-075",
    "universityName": "University of Warwick",
    "location": "Coventry, England, United Kingdom",
    "country": "United Kingdom",
    "flag": "🇬🇧",
    "foundingYear": "1965",
    "scholarshipTitle": "Warwick Global Excellence Undergrad Awards, WMG MSc Bursaries & Doctoral Fellowships",
    "ranking": "#68 Global (QS 2027) | #74 (QS 2026) | #25 Economics Globally (QS)",
    "qsSubjectRankings": "Economics & Econometrics #25 (#5 national) | Marketing #25 (#4 national) | English Language & Literature #27 (#6 national) | Statistics & Operational Research #27 (#4 national) | Mathematics #28 (#4 national)",
    "coverage": "Full Ride",
    "amountValue": "Full Tuition / 50% Tuition (Global Excellence) or Up to £15,000 WMG Master's Discount or Full Tuition + Stipend (Warwick PhD)",
    "tuitionFee": "Course-Specific Overseas Tuition (£27,870 – £35,530/yr) | Standard UCAS App Fee: £34.50",
    "tuitionAmountNumeric": 32000,
    "hasFullRide": true,
    "hasPartialAid": true,
    "hasFinancialAid": true,
    "financialAidType": "Merit-Based",
    "financialAidDetails": "The University of Warwick is a leading Russell Group research university in Coventry, England, ranked #68 globally in QS 2027 (#74 in 2026) and 10th in the UK. Warwick is famous for Economics (#25 globally), Marketing (#25 globally), English Language & Literature (#27 globally), Statistics & Operational Research (#27 globally), and Mathematics (#28 globally). International undergraduate financial support includes the Warwick Undergraduate Global Excellence Scholarship (offers full-tuition awards, 50% tuition awards, and 25% tuition awards). For Master's applicants, WMG offers international excellence scholarships of £5,000, £10,000, and £15,000 tuition reductions, plus specific WMG Pakistan bursary top-ups. Doctoral candidates access fully funded Warwick Doctoral College Scholarships (100% full tuition + living stipend). Undergraduate applications must use UCAS (Standard UCAS Fee: £34.50; Common App NOT accepted). Postgraduate applications use Warwick's direct online portal.",
    "minGpa": "3.7+",
    "minSat": "1400 - 1520 (SAT / A*AA A-Levels)",
    "satRequirementCategory": "Optional",
    "satPolicyDetails": "Undergraduate entry requires A-Levels (A*A*A to AAB) or IB (36–38 points). US applicants require 1400+ SAT or 31+ ACT + 3+ AP exam scores of 4 or 5. All undergraduate applications must be submitted via UCAS (Deadline: Jan 13, 2027; Standard UCAS Fee: £34.50). Common App is NOT accepted. Postgraduate applications use Warwick's direct online portal. Recommended English proficiency: IELTS 6.5–7.5+ or TOEFL iBT 90–100+.",
    "minIelts": "6.5+",
    "ieltsCategory": "6.5",
    "toeflRequirement": "90+ iBT",
    "commonAppAccepted": false,
    "applicationPortalDetails": "Undergraduate: UCAS portal strictly (Equal-Consideration Deadline: Jan 13, 2027; Standard UCAS Fee: £34.50). Common App is NOT accepted. Postgraduate: Direct Warwick Online Application Portal.",
    "acceptanceRate": "14%",
    "deadline": "Jan 13 (UCAS Equal-Consideration) / March 20 (Global Excellence Scholarship) / Rolling PhD",
    "description": "Premier Russell Group research power ranked #68 globally in QS 2027. Sits #25 globally for Economics and Marketing.",
    "overviewLong": "The University of Warwick is a premier public research university and Russell Group member located on a spacious green campus in Coventry, England. QS ranks Warwick #68 globally in 2027 and #74 in 2026 (10th among UK universities).\n\nKey academic strengths include Economics & Econometrics (#25 globally, #5 national), Marketing (#25 globally, #4 national), English Language & Literature (#27 globally, #6 national), Statistics & Operational Research (#27 globally, #4 national), and Mathematics (#28 globally, #4 national). Student life features over 300 societies and sports clubs at the Warwick Students' Union and Warwick Arts Centre.\n\nUndergraduate admission is handled strictly via UCAS (Deadline: Jan 13, 2027; Standard UCAS Fee: £34.50; Common App is NOT accepted). Postgraduate applicants apply via Warwick's direct portal. Financial aid includes the Warwick Undergraduate Global Excellence Scholarship (full, 50%, and 25% tuition fee coverage), WMG MSc Excellence Scholarships (£5,000–£15,000), WMG Pakistan Bursary top-ups, and fully funded Warwick Doctoral College Scholarships.",
    "topProgramsList": [
      {
        "name": "Economics & Econometrics",
        "ranking": "#25 (#5 national)",
        "description": "Warwick's flagship program. Holds a top-5 national ranking alongside LSE, Oxford, Cambridge, and UCL. Highly distinguished for research citations and econometric modeling."
      },
      {
        "name": "Marketing",
        "ranking": "#25 (#4 national)",
        "description": "Ties as Warwick's highest global placement. Managed through the world-class Warwick Business School (WBS), driven by exceptional employer reputation scores."
      },
      {
        "name": "English Language & Literature",
        "ranking": "#27 (#6 national)",
        "description": "Solidifies its elite top-30 rank globally. Highly commended by the academic peer review indicator for its critical literary theory research frameworks."
      },
      {
        "name": "Statistics & Operational Research",
        "ranking": "#27 (#4 national)",
        "description": "Driven by the world-famous Department of Statistics. Heavily integrated with corporate big-data partners and computational forecasting networks."
      },
      {
        "name": "Mathematics",
        "ranking": "#28 (#4 national)",
        "description": "An international mathematical powerhouse. Achieves stellar citations-per-faculty scores due to cutting-edge research inside the Mathematics Institute."
      }
    ],
    "allScholarshipsList": [

      {
        "id": "uni-075-1",
        "title": "Warwick Undergraduate Global Excellence Scholarship",
        "amount": "Full Tuition Fee Waiver or 50% / 25% Tuition Discount",
        "coverage": "Full Ride",
        "eligibility": "High-achieving international fee-paying undergraduate applicants.",
        "description": "Competitive merit award offering full tuition fee waivers, 50% tuition coverage, or 25% tuition discounts for the duration of undergraduate study.",
        "deadline": "March 20 (Scholarship App)",
        "requiresSeparateApp": true
      ,
    "logoText": "UW",
    "logoBg": "from-blue-700 to-indigo-950",
    "degreesOffered": ["Undergraduate", "Graduate", "PhD"]},

      {
        "id": "uni-075-2",
        "title": "WMG Master's Excellence & Pakistan Bursary Scheme",
        "amount": "£5,000 – £15,000 Tuition Discount",
        "coverage": "Partial Aid",
        "eligibility": "International Master's applicants entering WMG full-time MSc programs.",
        "description": "Provides £5,000 to £15,000 tuition fee reductions for high-achieving international Master's students, combining automatic regional bursaries with merit awards.",
        "deadline": "Rolling / May 31",
        "requiresSeparateApp": true
      ,
    "logoText": "UW",
    "logoBg": "from-blue-700 to-indigo-950",
    "degreesOffered": ["Undergraduate", "Graduate", "PhD"]},

      {
        "id": "uni-075-3",
        "title": "Warwick Doctoral College PhD Scholarships",
        "amount": "100% Full Tuition + Full Annual Living Stipend",
        "coverage": "Full Ride",
        "eligibility": "Outstanding UK and international PhD candidates across all Warwick faculties.",
        "description": "Fully funded doctoral fellowships providing 100% international tuition fee coverage and a full living maintenance stipend.",
        "deadline": "Jan / Feb Doctoral Deadline",
        "requiresSeparateApp": true
      }
    ],
    "degreesOffered": [
      "Bachelors",
      "Masters",
      "PhD"
    ],
    "tags": [
      "QS Top 70 Global",
      "Russell Group",
      "#25 Economics World",
      "Global Excellence Award",
      "Warwick UK",
      "UK"
    ],
    "requiresSeparateApp": true,
    "logoText": "WAR",
    "logoBg": "from-amber-950 to-slate-900"
  },

  {
    "id": "uni-076",
    "universityName": "University of Birmingham",
    "location": "Birmingham, England, United Kingdom",
    "country": "United Kingdom",
    "flag": "🇬🇧",
    "foundingYear": "1900",
    "scholarshipTitle": "Postgraduate High Fliers Scholarships, Business School Awards & Commonwealth Fellowships",
    "ranking": "#=68 Global (QS 2027) | #76 (QS 2026) | #9 Sport Globally (QS)",
    "qsSubjectRankings": "Sports-Related Subjects #9 (#2 national) | Linguistics #19 (#5 national) | English Language & Literature #30 (#7 national) | Dentistry Top 50 (#4 national) | Education Top 50 (#6 national)",
    "coverage": "Full Ride",
    "amountValue": "£5,000 (Postgrad High Fliers Pakistan) or Up to £25,000 (Business MSc) or Full Tuition + Stipend + Flights (Commonwealth Shared)",
    "tuitionFee": "Course-Specific Overseas Tuition (£26,000 – £48,000/yr) | Standard UCAS App Fee: £34.50",
    "tuitionAmountNumeric": 30000,
    "hasFullRide": true,
    "hasPartialAid": true,
    "hasFinancialAid": true,
    "financialAidType": "Merit-Based",
    "financialAidDetails": "The University of Birmingham is a major Russell Group research university in England's second-largest city, ranked #=68 globally in QS 2027 (#76 in 2026) and #12 in the UK by Complete University Guide 2027. Birmingham is renowned for Sports-Related Subjects (#9 globally), Linguistics (#19 globally), English Language & Literature (#30 globally), Dentistry (Top 50 globally), and Education (Top 50 globally). International postgraduate funding includes the Postgraduate High Fliers Scholarship (£5,000 tuition discount; Pakistan is explicitly eligible), Birmingham Business School Scholarships (up to £25,000), and Commonwealth Shared Scholarships (100% full tuition + living stipend + flights + IHS allowances). Doctoral candidates access fully funded Birmingham Business School PhD Scholarships and Wolfson Humanities Fellowships (£37,250/yr total package). Undergraduate applications must use UCAS (Code: B32; Standard UCAS Fee: £34.50; Common App NOT accepted). Postgraduate applications use Birmingham's direct portal.",
    "minGpa": "3.6+",
    "minSat": "1380 - 1500 (SAT / AAB A-Levels)",
    "satRequirementCategory": "Optional",
    "satPolicyDetails": "Undergraduate entry requires A-Levels (A*AA to AAB) or IB (32–36 points). US applicants require 1380+ SAT or 30+ ACT + 3 AP exam scores of 4 or 5. All undergraduate applications must be submitted via UCAS (UCAS Code: B32; Standard UCAS Fee: £34.50). Common App is NOT accepted. Postgraduate applications use Birmingham's direct online portal. Recommended English proficiency: IELTS 6.5–7.5+ or TOEFL iBT 88–100+.",
    "minIelts": "6.5+",
    "ieltsCategory": "6.5",
    "toeflRequirement": "88+ iBT",
    "commonAppAccepted": false,
    "applicationPortalDetails": "Undergraduate: UCAS portal strictly (Institution Code: B32; Standard UCAS Fee: £34.50). Common App is NOT accepted. Postgraduate: Direct Birmingham Online Application Portal.",
    "acceptanceRate": "18%",
    "deadline": "Jan 13 (UCAS Equal-Consideration) / May (Postgrad Scholarships) / Rolling PhD",
    "description": "Major Russell Group university ranked #=68 globally in QS 2027. Sits #9 globally for Sport Sciences and #19 for Linguistics.",
    "overviewLong": "The University of Birmingham is a premier public research university and founding Russell Group member located on a green 250-acre campus in Edgbaston, Birmingham. QS ranks Birmingham #=68 globally in 2027 and #76 in 2026, while the Complete University Guide 2027 ranks Birmingham #12 overall in the UK.\n\nKey academic strengths include Sports-Related Subjects (#9 globally, #2 national), Linguistics (#19 globally, #5 national), English Language & Literature (#30 globally, #7 national), Dentistry (Top 50 globally, #4 national), and Education (Top 50 globally, #6 national). Over 10,000 international students attend from 150+ countries.\n\nUndergraduate entry uses UCAS (Code: B32; Standard UCAS Fee £34.50; Common App is NOT accepted). Postgraduate candidates apply via Birmingham's direct portal. Financial aid includes the Postgraduate High Fliers Scholarship (£5,000 for Pakistani Master's offer holders), Birmingham Business School awards (up to £25,000), Commonwealth Shared Scholarships (100% full ride), and Wolfson Postgraduate Humanities PhD Fellowships (£37,250/yr).",
    "topProgramsList": [
      {
        "name": "Sports-Related Subjects",
        "ranking": "#9 (#2 national)",
        "description": "Birmingham's highest-ranked single discipline. Maintained its elite global top-10 presence, backed by top-tier facilities like the School of Sport, Exercise and Rehabilitation Sciences."
      },
      {
        "name": "Linguistics",
        "ranking": "#19 (#5 national)",
        "description": "Achieves an outstanding top-20 world position. Propelled by high citation rates per paper and global academic peer recognition."
      },
      {
        "name": "English Language & Literature",
        "ranking": "#30 (tie) (#7 national)",
        "description": "Secures an elite global placement. The department scores exceptionally well for research impact and overall international reputation."
      },
      {
        "name": "Dentistry",
        "ranking": "Top 50 (#4 national)",
        "description": "Confirmed inside the global top 50. It is heavily targeted by international healthcare agencies and benefits from great clinical outputs."
      },
      {
        "name": "Education",
        "ranking": "Top 50 (#6 national)",
        "description": "A brand new entry into the global top 50 for this cycle. Driven by a significant rise in its international research collaboration index."
      }
    ],
    "allScholarshipsList": [

      {
        "id": "uni-076-1",
        "title": "Birmingham Postgraduate High Fliers Scholarship (Pakistan)",
        "amount": "£5,000 Tuition Discount",
        "coverage": "Partial Aid",
        "eligibility": "High-achieving Master's applicants domiciled in Pakistan.",
        "description": "Merit-based £5,000 tuition fee discount for Pakistani offer holders entering full-time taught Master's programs.",
        "deadline": "May 31",
        "requiresSeparateApp": true
      ,
    "logoText": "UB",
    "logoBg": "from-blue-700 to-indigo-950",
    "degreesOffered": ["Undergraduate", "Graduate", "PhD"]},

      {
        "id": "uni-076-2",
        "title": "Birmingham Business School Master's Scholarships",
        "amount": "Up to £25,000 Tuition Coverage",
        "coverage": "Partial Aid",
        "eligibility": "Outstanding international Master's offer holders admitted to Birmingham Business School programs.",
        "description": "Competitive merit awards covering up to £25,000 toward Master's tuition fees.",
        "deadline": "April / May",
        "requiresSeparateApp": true
      ,
    "logoText": "UB",
    "logoBg": "from-blue-700 to-indigo-950",
    "degreesOffered": ["Undergraduate", "Graduate", "PhD"]},

      {
        "id": "uni-076-3",
        "title": "Commonwealth Shared Scholarship Scheme (Birmingham)",
        "amount": "100% Tuition + Living Stipend + Flights + IHS Cover",
        "coverage": "Full Ride",
        "eligibility": "Master's applicants from developing Commonwealth nations (including Pakistan).",
        "description": "Fully funded postgraduate award covering 100% tuition, monthly stipend, return flights, and visa/health surcharge expenses.",
        "deadline": "Dec / Jan",
        "requiresSeparateApp": true
      ,
    "logoText": "UB",
    "logoBg": "from-blue-700 to-indigo-950",
    "degreesOffered": ["Undergraduate", "Graduate", "PhD"]},

      {
        "id": "uni-076-4",
        "title": "Wolfson Postgraduate PhD Scholarship in Humanities",
        "amount": "100% Tuition + Living Stipend + Research Fund (£37,250 / year value)",
        "coverage": "Full Ride",
        "eligibility": "Outstanding Home and International PhD candidates in History, Literature, and Languages.",
        "description": "Fully funded 3-year doctoral fellowship covering full tuition, maintenance stipend, and research travel allowance.",
        "deadline": "Jan 15",
        "requiresSeparateApp": true
      }
    ],
    "degreesOffered": [
      "Bachelors",
      "Masters",
      "PhD"
    ],
    "tags": [
      "QS Top 70 Global",
      "Russell Group",
      "#9 Sport World",
      "High Fliers Scholarship",
      "Birmingham UK",
      "UK"
    ],
    "requiresSeparateApp": true,
    "logoText": "BHAM",
    "logoBg": "from-red-950 to-amber-950"
  },

  {
    "id": "uni-077",
    "universityName": "University of Leeds",
    "location": "Leeds, England, United Kingdom",
    "country": "United Kingdom",
    "flag": "🇬🇧",
    "foundingYear": "1904",
    "scholarshipTitle": "Leeds International Excellence Awards, Commonwealth Fellowships & Business PhD Scholarships",
    "ranking": "#=77 Global (QS 2027) | #86 (QS 2026) | #11 Geology Globally (QS)",
    "qsSubjectRankings": "Geology #11 (tie) (#4 national) | Earth & Marine Sciences #12 (#4 national) | Geophysics #12 (#4 national) | Development Studies #18 (#5 national) | Petroleum Engineering #18 (#3 national) | Law #69 (#11 national) | Business & Management #77 (#11 national)",
    "coverage": "Full Ride",
    "amountValue": "Tuition Discounts (International Excellence Undergrad & MSc) or Full Tuition + £21,805/yr Stipend (Leeds Business PhD)",
    "tuitionFee": "Course-Specific Overseas Tuition (£26,500 – £47,000/yr) | Standard UCAS App Fee: £34.50",
    "tuitionAmountNumeric": 31000,
    "hasFullRide": true,
    "hasPartialAid": true,
    "hasFinancialAid": true,
    "financialAidType": "Merit-Based",
    "financialAidDetails": "The University of Leeds is a major Russell Group research university in Yorkshire, ranked #=77 globally in QS 2027 (up 9 places from #86 in 2026) and 18th in the UK by Complete University Guide. Leeds holds global top-20 QS standings in Geology (#11 tie), Earth & Marine Sciences (#12), Geophysics (#12), Development Studies (#18), and Petroleum Engineering (#18). International scholarship schemes include International Excellence Scholarships for undergraduate and Master's applicants. (Note: The automatic £5,000 Regional Scholarship is subject to country eligibility, excluding Pakistan). At the doctoral level, Leeds offers fully funded PhD positions, such as the Leeds University Business School PhD Excellence Scholarship (100% full tuition + £21,805/year living stipend for 3.5 years). Undergraduate applications must use UCAS (Standard UCAS Fee: £34.50; Common App NOT accepted). Postgraduate applications use Leeds' direct portal.",
    "minGpa": "3.6+",
    "minSat": "1380 - 1500 (SAT / AAB A-Levels)",
    "satRequirementCategory": "Optional",
    "satPolicyDetails": "Undergraduate entry requires A-Levels (A*AA to AAB) or IB (33–36 points). US applicants require 1380+ SAT or 30+ ACT + 3 AP exam scores of 4 or 5. All undergraduate applications must be submitted via UCAS (Standard UCAS Fee: £34.50). Common App is NOT accepted. Postgraduate applications use Leeds' direct online portal. Recommended English proficiency: IELTS 6.5–7.5+ or TOEFL iBT 88–100+.",
    "minIelts": "6.5+",
    "ieltsCategory": "6.5",
    "toeflRequirement": "88+ iBT",
    "commonAppAccepted": false,
    "applicationPortalDetails": "Undergraduate: UCAS portal strictly (Standard UCAS Fee: £34.50). Common App is NOT accepted. Postgraduate: Direct Leeds Online Application Portal (Int'l PGR Deadline: April 30, 2027).",
    "acceptanceRate": "18%",
    "deadline": "Jan 13 (UCAS Equal-Consideration) / April 30 (Int'l PGR Deadline) / Rolling Postgrad",
    "description": "Top Russell Group research power ranked #=77 globally in QS 2027. Global leader in Geology (#11 tie) and Earth Sciences.",
    "overviewLong": "The University of Leeds is a premier public research university and Russell Group member located on a single 100-acre campus near central Leeds, England. QS ranks Leeds #=77 globally in 2027 and #86 in 2026 (18th in the UK by CUG). Over 14,400 international students attend from 137 countries.\n\nKey academic strengths include Geology (#11 tie, #4 national), Earth & Marine Sciences (#12, #4 national), Geophysics (#12, #4 national), Development Studies (#18, #5 national), Petroleum Engineering (#18, #3 national), Law (#69, #11 national), and Business & Management (#77, #11 national). Student life features over 300 societies at Leeds University Union (LUU).",
    "topProgramsList": [
      {
        "name": "Geology",
        "ranking": "#11 (tie) (#4 national)",
        "description": "Tied with Oxford for an elite national standing. Governed by the world-renowned School of Earth and Environment, which benefits from huge state-funded climate research grants."
      },
      {
        "name": "Earth & Marine Sciences",
        "ranking": "#12 (#4 national)",
        "description": "Maintains its elite global position. Driven by its cutting-edge sub-surface systems research and advanced polar observation satellites."
      },
      {
        "name": "Geophysics",
        "ranking": "#12 (#4 national)",
        "description": "Positioned comfortably in the world's top 15. The program is heavily integrated with global seismological exploration groups."
      },
      {
        "name": "Development Studies",
        "ranking": "#18 (#5 national)",
        "description": "Highly distinguished global performer. Taught through the School of Politics and International Studies, known for its extensive field research across the Global South."
      },
      {
        "name": "Petroleum Engineering",
        "ranking": "#18 (#3 national)",
        "description": "Holds a standout top-20 world rank. Supported by Leeds' elite fluid mechanics laboratory and advanced drilling simulators."
      },
      {
        "name": "Law",
        "ranking": "#69 (#11 national)",
        "description": "Positioned in the global top 70. Housed in the Liberty Building, the school excels in international trade law and criminal justice studies."
      },
      {
        "name": "Business & Management",
        "ranking": "#77 (#11 national)",
        "description": "Ranks inside the global top 80. Maintained by the triple-accredited Leeds University Business School (LUBS), achieving exceptional graduate employment outcomes."
      }
    ],
    "allScholarshipsList": [

      {
        "id": "uni-077-1",
        "title": "Leeds International Excellence Undergraduate Scholarship",
        "amount": "Tuition Fee Reduction",
        "coverage": "Partial Aid",
        "eligibility": "High-achieving international fee-paying undergraduate applicants.",
        "description": "Merit-based scholarship providing tuition fee reductions for outstanding international undergraduate students.",
        "deadline": "April / May",
        "requiresSeparateApp": true
      ,
    "logoText": "UL",
    "logoBg": "from-blue-700 to-indigo-950",
    "degreesOffered": ["Undergraduate", "Graduate", "PhD"]},

      {
        "id": "uni-077-2",
        "title": "Leeds International Excellence Master's Scholarship",
        "amount": "Tuition Fee Reduction",
        "coverage": "Partial Aid",
        "eligibility": "International Master's offer holders demonstrating academic achievement.",
        "description": "Competitive merit award providing partial tuition fee discounts for taught Master's programs.",
        "deadline": "May 31",
        "requiresSeparateApp": true
      ,
    "logoText": "UL",
    "logoBg": "from-blue-700 to-indigo-950",
    "degreesOffered": ["Undergraduate", "Graduate", "PhD"]},

      {
        "id": "uni-077-3",
        "title": "Leeds University Business School PhD Excellence Scholarship",
        "amount": "100% Full Fees + £21,805 / year Living Stipend (3.5 Years)",
        "coverage": "Full Ride",
        "eligibility": "Outstanding Home and International PhD candidates admitted to Leeds Business School.",
        "description": "Fully funded 3.5-year doctoral award covering 100% academic fees and providing a £21,805 annual living maintenance stipend.",
        "deadline": "Jan / Feb Doctoral Deadline",
        "requiresSeparateApp": true
      }
    ],
    "degreesOffered": [
      "Bachelors",
      "Masters",
      "PhD"
    ],
    "tags": [
      "QS Top 80 Global",
      "Russell Group",
      "#12 Earth Sciences World",
      "Business PhD Fellowships",
      "Leeds UK",
      "UK"
    ],
    "requiresSeparateApp": true,
    "logoText": "LDS",
    "logoBg": "from-emerald-950 to-slate-900"
  },

  {
    "id": "uni-078",
    "universityName": "University of Glasgow",
    "location": "Glasgow, Scotland, United Kingdom",
    "country": "United Kingdom",
    "flag": "🇬🇧",
    "foundingYear": "1451",
    "scholarshipTitle": "World Changers Global Excellence Scholarship",
    "ranking": "#80 Global (QS 2027) | #31 Veterinary Science Globally (QS)",
    "qsSubjectRankings": "Veterinary Science #31 (Global) | Psychology #91 (Global) | English Language & Literature #30 (Global) | Anatomy & Physiology #16 (Global) | Accounting & Finance #66 tie (#9 national)",
    "coverage": "Partial Aid",
    "amountValue": "Up to £10,000 / year (World Changers Global Excellence Tuition Reduction)",
    "tuitionFee": "Course-Specific Overseas Tuition (£26,000 – £46,000+/yr depending on faculty/clinical) | Standard UCAS App Fee: £34.50",
    "tuitionAmountNumeric": 31000,
    "hasFullRide": false,
    "hasPartialAid": true,
    "hasFinancialAid": true,
    "financialAidType": "Merit-Based",
    "financialAidDetails": "The University of Glasgow is one of Scotland's four ancient universities and a founding Russell Group member, ranked #80 globally in QS 2027. Glasgow is famous for Veterinary Science (#31 globally), Psychology (#91 globally), English Language & Literature (#30 globally), Anatomy & Physiology (#16 globally), and Accounting & Finance (#66 globally, #9 national). Glasgow offers strong international financial aid, notably the World Changers Global Excellence Scholarship, which provides up to £10,000 per year as a tuition fee reduction for high-achieving international undergraduates in Science, Engineering, and eligible disciplines (renewable annually subject to academic progress). Additional departmental awards are available through the Adam Smith Business School and the College of Medical, Veterinary & Life Sciences. Undergraduate applications must use UCAS (Standard UCAS Fee: £34.50; Common App NOT accepted). Postgraduate candidates apply via Glasgow's direct portal.",
    "minGpa": "3.6+",
    "minSat": "1350 - 1480 (SAT / AAB A-Levels)",
    "satRequirementCategory": "Optional",
    "satPolicyDetails": "Undergraduate entry requires A-Levels (A*AA to AAB) or IB (32–38 points depending on degree). US applicants require 1350+ SAT or 29+ ACT + 3 AP exam scores of 4 or 5. Standard undergraduate degrees in Scotland run for 4 years (BSc/MA Hons). All undergraduate applications must be submitted via UCAS (Standard UCAS Fee: £34.50). Common App is NOT accepted. Postgraduate applications use Glasgow's direct online portal. English requirement: IELTS 6.5 (minimum 6.0 in all sub-scores).",
    "minIelts": "6.5",
    "ieltsCategory": "6.5",
    "toeflRequirement": "90+ iBT",
    "commonAppAccepted": false,
    "applicationPortalDetails": "Undergraduate: UCAS portal strictly (Standard UCAS Fee: £34.50). Common App is NOT accepted. Postgraduate: Direct Glasgow Online Application Portal.",
    "acceptanceRate": "70% - 74% Offer Rate (12% - 15% Medicine/Vet)",
    "deadline": "Jan 13 (UCAS Equal-Consideration) / June (World Changers Scholarship) / Rolling Postgrad",
    "description": "Historic Scottish ancient university & Russell Group member ranked #80 globally in QS 2027. Sits #31 globally for Veterinary Science.",
    "overviewLong": "The University of Glasgow is one of the world's oldest universities, founded in 1451 in Glasgow, Scotland, and a prominent Russell Group research institution. QS ranks Glasgow #80 globally in 2027. Located primarily on the landmark Gilmorehill campus in Glasgow's West End, the university combines historic architecture with cutting-edge laboratories.\n\nKey academic strengths include Veterinary Science (#31 globally, top 10 clinical), Psychology (#91 globally, #41 THE), English Language & Literature (#30 globally), Anatomy & Physiology (#16 globally, top 50), and Accounting & Finance (#66 tie globally, #9 national) at the triple-accredited Adam Smith Business School. Glasgow's overall undergraduate offer rate averages roughly 70–74% for general pools, though highly competitive tracks like Medicine drop to 12–15%.\n\nUndergraduate entry uses UCAS (Standard UCAS Fee £34.50; Common App is NOT accepted). Postgraduate applicants apply via Glasgow's direct portal. Financial aid includes the World Changers Global Excellence Scholarship (up to £10,000/year tuition reduction for high-achieving international undergraduates).",
    "topProgramsList": [
      {
        "name": "Veterinary Science",
        "ranking": "#31 (Global)",
        "description": "Glasgow's flagship program. Consistently places within the global top 10. Propelled by flawless clinical reputation metrics and top-tier diagnostic facilities at the School of Biodiversity, One Health & Veterinary Medicine."
      },
      {
        "name": "Psychology",
        "ranking": "#91 (Global)",
        "description": "Massive global performer for this cycle. Highly distinguished for research citations and experimental neural science pathways (also ranking an exceptional #41 globally in alternative tables like the THE listings)."
      },
      {
        "name": "English Language & Literature",
        "ranking": "#30 (Global)",
        "description": "Secures a standout international tier. Driven by a very high academic peer review metric and heavy cross-disciplinary integration with Scottish historical archives."
      },
      {
        "name": "Anatomy & Physiology",
        "ranking": "#16 (Global)",
        "description": "Positioned comfortably within the world's top 50. Supported by deep clinical research integration with the NHS and extensive modern laboratory funding frameworks."
      },
      {
        "name": "Accounting & Finance",
        "ranking": "#66 (tie) (#9 national)",
        "description": "Housed within the triple-accredited Adam Smith Business School. This program leads Glasgow's financial sector with top-tier international internships and elite research outputs."
      }
    ],
    "allScholarshipsList": [

      {
        "id": "uni-078-1",
        "title": "World Changers Global Excellence Scholarship",
        "amount": "Up to £10,000 / year Tuition Fee Reduction",
        "coverage": "Partial Aid",
        "eligibility": "High-achieving international undergraduate applicants entering Science, Engineering, and eligible subjects.",
        "description": "Tuition discount award providing up to £10,000 per year toward international undergraduate tuition fees, renewable annually based on satisfactory academic progress.",
        "deadline": "June 30 (Scholarship Application)",
        "requiresSeparateApp": true
      ,
    "logoText": "UG",
    "logoBg": "from-blue-700 to-indigo-950",
    "degreesOffered": ["Undergraduate", "Graduate", "PhD"]},

      {
        "id": "uni-078-2",
        "title": "Adam Smith Business School International Award",
        "amount": "£10,000 Tuition Discount",
        "coverage": "Partial Aid",
        "eligibility": "International Master's applicants admitted to Adam Smith Business School programs.",
        "description": "Merit-based tuition reduction award for outstanding international postgraduate students in business and economics.",
        "deadline": "May 31",
        "requiresSeparateApp": true
      }
    ],
    "degreesOffered": [
      "Bachelors",
      "Masters",
      "PhD"
    ],
    "tags": [
      "QS Top 80 Global",
      "Russell Group",
      "Scottish Ancient Uni",
      "World Changers Scholarship",
      "Glasgow UK",
      "UK"
    ],
    "requiresSeparateApp": true,
    "logoText": "GLA",
    "logoBg": "from-amber-900 to-blue-950"
  },

  {
    "id": "uni-079",
    "universityName": "University of Sheffield",
    "location": "Sheffield, England, United Kingdom",
    "country": "United Kingdom",
    "flag": "🇬🇧",
    "foundingYear": "1905",
    "scholarshipTitle": "International Undergraduate Scholarship & IDA Sheffield Academic Award",
    "ranking": "#82 Global (QS 2027) | #1 Library & Information Management Globally (QS)",
    "qsSubjectRankings": "Library & Information Management #1 (#1 national) | Dentistry #35 (Global) | Materials Science #54 tie (Global) | Arts & Humanities (Broad Field) #74 (Global) | Medicine & Health Sciences #113",
    "coverage": "Partial Aid",
    "amountValue": "£2,500 / year (up to £10,000 total) or Up to £17,500 (IDA Sheffield Academic Scholarship)",
    "tuitionFee": "Course-Specific Overseas Tuition (£32,100/yr CS with Fixed-Fee Guarantee) | Standard UCAS App Fee: £34.50",
    "tuitionAmountNumeric": 32100,
    "hasFullRide": false,
    "hasPartialAid": true,
    "hasFinancialAid": true,
    "financialAidType": "Merit-Based",
    "financialAidDetails": "The University of Sheffield is a prominent Russell Group research university ranked #82 globally in QS 2027. Sheffield is famous for Library & Information Management (#1 globally), Dentistry (#35 globally), Materials Science (#54 globally), Arts & Humanities (#74 globally), and Medicine & Health Sciences (#113). Sheffield provides a Fixed-Fee Guarantee for eligible international undergraduates, ensuring tuition fees remain flat across degree duration. International financial aid includes the International Undergraduate Scholarship (£2,500/year, providing up to £10,000 over 4 years) and the competitive IDA Sheffield Academic Scholarship (up to £17,500 over course duration). Undergraduate applications must use UCAS (Standard UCAS Fee: £34.50; Common App NOT accepted). Postgraduate applicants use Sheffield's direct online portal.",
    "minGpa": "3.6+",
    "minSat": "1380 - 1500 (SAT / A*AA A-Levels)",
    "satRequirementCategory": "Optional",
    "satPolicyDetails": "Undergraduate entry requires A-Levels (A*AA to AAB; CS requires A*AA with Math) or IB (34–38 points). US applicants require 1380+ SAT or 30+ ACT + 3 AP exam scores of 4 or 5. Standard undergraduate BSc degrees run for 3 years in England. All undergraduate applications must be submitted via UCAS (Standard UCAS Fee: £34.50). Common App is NOT accepted. Postgraduate applications use Sheffield's direct online portal. English requirement: IELTS 6.5 (minimum 6.0 in all sub-scores).",
    "minIelts": "6.5",
    "ieltsCategory": "6.5",
    "toeflRequirement": "88+ iBT",
    "commonAppAccepted": false,
    "applicationPortalDetails": "Undergraduate: UCAS portal strictly (Standard UCAS Fee: £34.50). Common App is NOT accepted. Postgraduate: Direct Sheffield Online Application Portal.",
    "acceptanceRate": "19%",
    "deadline": "Jan 13 (UCAS Equal-Consideration) / April 22 (IDA Scholarship) / Rolling Postgrad",
    "description": "Russell Group research leader ranked #82 globally in QS 2027. Ranked #1 globally in Library & Information Management for the sixth consecutive year.",
    "overviewLong": "The University of Sheffield is a leading public research university and Russell Group member located in South Yorkshire, England. QS ranks Sheffield #82 globally in 2027. In REF 2021, 92% of Sheffield's research was rated world-leading or internationally excellent.\n\nKey academic strengths include Library & Information Management (#1 globally, #1 national), Dentistry (#35 globally), Materials Science (#54 globally), Arts & Humanities (Broad Field) (#74 globally), and Medicine & Health Sciences (#113).",
    "topProgramsList": [
      {
        "name": "Library & Information Management",
        "ranking": "#1 (#1 national)",
        "description": "Sheffield’s global flagship field. Ranked number one in the world for the sixth consecutive year. Taught via the School of Information, Journalism and Communication, scoring a near-flawless 95.7 overall metric."
      },
      {
        "name": "Dentistry",
        "ranking": "#35",
        "description": "Made a massive climb into the world's top 40 (moving up from the 51–120 cohort). Celebrated for clinical training excellence and heavy research output in oral health and biomaterials at the School of Clinical Dentistry."
      },
      {
        "name": "Materials Science",
        "ranking": "#54",
        "description": "Sits comfortably in the global elite tier, tied at #54 globally. Backed by Sheffield’s famous industrial heritage and deep engineering links with global brands like Boeing and Rolls-Royce."
      },
      {
        "name": "Arts & Humanities (Broad Field)",
        "ranking": "#74",
        "description": "A stellar broad faculty performance, climbing from #82 to #74 globally. Driven by top-performing individual niches in Architecture, history, and languages."
      },
      {
        "name": "Medicine & Health Sciences",
        "ranking": "113",
        "description": "Firmly anchored inside the world's top 100 subject band. Driven by deep funding matrices in biomedical research, neuroscience, and integration with local healthcare trusts."
      }
    ],
    "allScholarshipsList": [

      {
        "id": "uni-079-1",
        "title": "Sheffield International Undergraduate Scholarship",
        "amount": "£2,500 / year (Up to £10,000 total)",
        "coverage": "Partial Aid",
        "eligibility": "Eligible international fee-paying undergraduate applicants starting Year 1.",
        "description": "Automatic tuition fee discount of £2,500 per year (up to £10,000 across 4 years) for eligible international undergraduate students meeting academic progression criteria.",
        "deadline": "Automatic upon UCAS admission",
        "requiresSeparateApp": false
      ,
    "logoText": "US",
    "logoBg": "from-blue-700 to-indigo-950",
    "degreesOffered": ["Undergraduate", "Graduate", "PhD"]},

      {
        "id": "uni-079-2",
        "title": "IDA Sheffield Academic Scholarship",
        "amount": "Up to £17,500 Total Course Value",
        "coverage": "Partial Aid",
        "eligibility": "High-achieving international undergraduate applicants demonstrating academic excellence.",
        "description": "Competitive international merit award providing up to £17,500 toward undergraduate tuition fees across degree duration.",
        "deadline": "April 22",
        "requiresSeparateApp": true
      }
    ],
    "degreesOffered": [
      "Bachelors",
      "Masters",
      "PhD"
    ],
    "tags": [
      "QS Top 85 Global",
      "Russell Group",
      "#1 Library Mgmt World",
      "The Diamond Engineering",
      "Sheffield UK",
      "UK"
    ],
    "requiresSeparateApp": true,
    "logoText": "SHF",
    "logoBg": "from-purple-950 to-slate-900"
  },

  {
    "id": "uni-080",
    "universityName": "Durham University",
    "location": "Durham, England, United Kingdom",
    "country": "United Kingdom",
    "flag": "🇬🇧",
    "foundingYear": "1832",
    "scholarshipTitle": "Inspiring Excellence Undergraduate Scholarship",
    "ranking": "#85 Global (QS 2027) | #3 UK Times 2026 (University of the Year) | #6 Complete University Guide 2027",
    "qsSubjectRankings": "Theology & Religious Studies (#4 Global) | Archaeology (#5 Global) | Geography (#6 Global) | Anthropology (#25) | English (#26) | Law (#49 Global / #3 UK CUG)",
    "coverage": "Partial Aid",
    "amountValue": "Up to £5,000 / year (£15,000 total) or Up to £10,000 / year (£30,000 total)",
    "tuitionFee": "Course-Specific Overseas Tuition (£27,000 – £34,000/yr) | Standard UCAS App Fee: £34.50",
    "tuitionAmountNumeric": 31000,
    "hasFullRide": false,
    "hasPartialAid": true,
    "hasFinancialAid": true,
    "financialAidType": "Merit-Based",
    "financialAidDetails": "Durham University is an elite collegiate Russell Group university ranked #85 globally in QS 2027 and #3 in the UK domestic tables by The Times & Sunday Times Good University Guide 2026 (named University of the Year). Durham ranks #49 globally for QS Employer Reputation and holds global top-10 subject positions in Theology (#4), Archaeology (#5), and Geography (#6), with Law ranked #49 globally (#3 in UK). Durham offers a distinctive collegiate community across 17 colleges. International financial aid includes the Inspiring Excellence Undergraduate Scholarship, offering Tier 1 awards up to £10,000/year (up to £30,000 over 3 years) and Tier 2 awards up to £5,000/year (£15,000 total). Undergraduate applications must use UCAS (Standard UCAS Fee: £34.50; Common App NOT accepted). Postgraduate candidates apply via Durham's direct portal.",
    "minGpa": "3.8+",
    "minSat": "1420 - 1520 (SAT / A*AA A-Levels)",
    "satRequirementCategory": "Optional",
    "satPolicyDetails": "Undergraduate entry requires A-Levels (A*A*A to AAB; CS & Math require A*AA with Math) or IB (36–38 points). US applicants require 1420+ SAT or 32+ ACT + 3 to 4 AP exam scores of 5. All undergraduate applications must be submitted via UCAS (Standard UCAS Fee: £34.50). Common App is NOT accepted. Postgraduate applications use Durham's direct online portal. English requirement: IELTS 6.5–7.0+.",
    "minIelts": "6.5+",
    "ieltsCategory": "6.5",
    "toeflRequirement": "92+ iBT",
    "commonAppAccepted": false,
    "applicationPortalDetails": "Undergraduate: UCAS portal strictly (Standard UCAS Fee: £34.50). Common App is NOT accepted. Postgraduate: Direct Durham Online Application Portal.",
    "acceptanceRate": "15%",
    "deadline": "Jan 13 (UCAS Equal-Consideration) / Jan 30 & May 15 (Inspiring Excellence Scholarship Rounds)",
    "description": "Elite collegiate Russell Group university ranked #85 globally in QS 2027 & #3 in UK (Times 2026). Global Top-10 in Geography (#6), Archaeology (#5) & Theology (#4). Offers Inspiring Excellence Scholarships up to £10k/yr (£30k total).",
    "overviewLong": "Durham University is one of England's historic research universities and a member of the Russell Group, located in the UNESCO World Heritage city of Durham, England. QS ranks Durham #85 globally in 2027 (and #49 globally for Employer Reputation). In domestic league tables, Durham ranks #3 in the UK in The Times Good University Guide 2026 (named University of the Year) and #6 in the Complete University Guide 2027.\n\nDurham operates a traditional collegiate system: every student belongs to one of 17 colleges providing residential, social, and academic support. In the 2026 QS Subject Rankings, 22 Durham subjects placed in the global top 100, including Theology (#4 globally), Archaeology (#5), Geography (#6), Anthropology (#25), English (#26), Classics (=29), Philosophy (=39), History (#44), and Law (#49 globally; #3 in UK).\n\nUndergraduate admission uses UCAS (Standard UCAS Fee £34.50; Common App is NOT accepted). Financial aid includes the Inspiring Excellence Undergraduate Scholarship, providing up to £10,000/year (up to £30,000 across 3 years) or £5,000/year (£15,000 total) for outstanding international applicants.",
    "topProgramsList": [
      {
        "name": "Department of Geography",
        "ranking": "#6 Globally in QS Geography 2026",
        "description": "Physical geography, climate change, human geography, environmental management, and GIS."
      },
      {
        "name": "Durham Law School",
        "ranking": "#49 Globally in QS / #3 UK CUG 2026",
        "description": "Commercial law, international law, public law, human rights, and corporate jurisprudence."
      },
      {
        "name": "Department of Archaeology & Anthropology",
        "ranking": "#5 Archaeology / #25 Anthropology Globally",
        "description": "Archaeological science, bioarchaeology, evolutionary anthropology, and social anthropology."
      },
      {
        "name": "Department of Theology & Religion",
        "ranking": "#4 Globally in QS Theology 2026",
        "description": "Biblical studies, systematic theology, ethics, philosophy of religion, and world religions."
      },
      {
        "name": "Department of Computer Science & Mathematics",
        "ranking": "Top 10 UK CS & Mathematics",
        "description": "Artificial intelligence, machine learning, computer vision, algorithms, networks, and pure math."
      ,
    "logoText": "DU",
    "logoBg": "from-red-700 to-rose-950",
    "degreesOffered": ["Undergraduate", "Graduate", "PhD"],
    "tags": ["United Kingdom", "Europe", "International", "Research"],
    "requiresSeparateApp": true}
    ],
    "allScholarshipsList": [,

      {
        "id": "uni-080-1",
        "title": "Durham Inspiring Excellence Undergraduate Scholarship (Tier 1)",
        "amount": "Up to £10,000 / year (Up to £30,000 total)",
        "coverage": "Partial Aid",
        "eligibility": "High-achieving international fee-paying undergraduate applicants demonstrating academic excellence.",
        "description": "Merit-based tuition scholarship providing up to £10,000 per year (£30,000 total over 3 years) for outstanding international students.",
        "deadline": "Jan 30 (Round 1) / May 15 (Round 2)",
        "requiresSeparateApp": true
      ,
    "logoText": "DU",
    "logoBg": "from-blue-700 to-indigo-950",
    "degreesOffered": ["Undergraduate", "Graduate", "PhD"]},

      {
        "id": "uni-080-2",
        "title": "Durham Inspiring Excellence Undergraduate Scholarship (Tier 2)",
        "amount": "Up to £5,000 / year (Up to £15,000 total)",
        "coverage": "Partial Aid",
        "eligibility": "International undergraduate applicants meeting competitive scholarship criteria.",
        "description": "Tuition discount award offering up to £5,000 per year (£15,000 total over 3 years) toward overseas undergraduate tuition fees.",
        "deadline": "Jan 30 (Round 1) / May 15 (Round 2)",
        "requiresSeparateApp": true
      }
    ],
    "degreesOffered": [
      "Bachelors",
      "Masters",
      "PhD"
    ],
    "tags": [
      "QS Top 85 Global",
      "Russell Group",
      "Collegiate System",
      "#6 Geography World",
      "Durham UK",
      "UK"
    ],
    "requiresSeparateApp": true,
    "logoText": "DUR",
    "logoBg": "from-purple-900 to-indigo-950"
  },

  {
    "id": "uni-081",
    "universityName": "University of Nottingham",
    "location": "Nottingham, England, United Kingdom",
    "country": "United Kingdom",
    "flag": "🇬🇧",
    "foundingYear": "1881",
    "scholarshipTitle": "International Undergraduate Excellence & South Asia Excellence Awards",
    "ranking": "#97 Global (QS 2027) | #8 World Pharmacy & Pharmacology | #7 UK Research Power (REF)",
    "qsSubjectRankings": "Pharmacy & Pharmacology (#8 Global QS 2026) | Veterinary Science (#39 Global) | Education (#56) | Mechanical & Aero Eng (#66) | Agriculture (#77) | Medicine (#83)",
    "coverage": "Partial Aid",
    "amountValue": "£5,000 (International Excellence) or £6,000 (South Asia / Pakistan Award)",
    "tuitionFee": "Course-Specific Overseas Tuition (£24,700 – £33,000/yr) | Standard UCAS App Fee: £34.50",
    "tuitionAmountNumeric": 29000,
    "hasFullRide": false,
    "hasPartialAid": true,
    "hasFinancialAid": true,
    "financialAidType": "Merit-Based",
    "financialAidDetails": "The University of Nottingham is a global Russell Group research university ranked #97 globally in QS 2027 (#17 in the UK) and #7 in the UK for Research Power (REF 2021). Nottingham ranks #8 globally in Pharmacy & Pharmacology (QS 2026) and holds top-100 global standings in Veterinary Science (#39), Engineering, Medicine, Law, Economics, and Psychology. Nottingham is recognized as the UK's #1 university for graduates entering highly skilled employment (HESA). International financial aid includes the automatic £5,000 International Undergraduate Excellence Scholarship for applicants achieving AAA or equivalent, plus the dedicated £6,000 South Asia Undergraduate Excellence Award for applicants domiciled in Pakistan and South Asia. Undergraduate applications must use UCAS (Standard UCAS Fee: £34.50; Common App NOT accepted). Postgraduate candidates apply via Nottingham's direct portal.",
    "minGpa": "3.5+",
    "minSat": "1350 - 1480 (SAT / A*AA A-Levels)",
    "satRequirementCategory": "Optional",
    "satPolicyDetails": "Undergraduate entry requires A-Levels (A*AA to AAB; CS requires A*AA or AAA with CS grade A) or IB (32–36 points). US applicants require 1350+ SAT or 29+ ACT + 3 AP exam scores of 4 or 5. Pakistani Intermediate/HSSC holders typically enter via Nottingham International College foundation routes. All undergraduate applications must be submitted via UCAS (Standard UCAS Fee: £34.50). Common App is NOT accepted. Postgraduate applications use Nottingham's direct online portal. English requirement: IELTS 6.5 (minimum 6.0 in all components).",
    "minIelts": "6.5",
    "ieltsCategory": "6.5",
    "toeflRequirement": "88+ iBT",
    "commonAppAccepted": false,
    "applicationPortalDetails": "Undergraduate: UCAS portal strictly (Standard UCAS Fee: £34.50). Common App is NOT accepted. Postgraduate: Direct Nottingham Online Application Portal.",
    "acceptanceRate": "20%",
    "deadline": "Jan 13 (UCAS Equal-Consideration) / April / May (South Asia Scholarship)",
    "description": "Global Top-100 Russell Group power ranked #97 globally in QS 2027 (#8 World Pharmacy). Ranked #1 in UK for highly skilled graduate employment (HESA). Offers £6,000 South Asia & £5,000 Excellence Scholarships.",
    "overviewLong": "The University of Nottingham is a premier public research university and Russell Group member with major UK campuses (University Park and Jubilee Campus) alongside international campuses in China and Malaysia. QS ranks Nottingham #97 globally in 2027 (#17 in the UK), while REF 2021 places Nottingham #7 in the UK for research power.\n\nIn the 2026 QS Subject Rankings, 22 Nottingham subjects placed in the global top 100, led by Pharmacy & Pharmacology (#8 globally), Veterinary Science (#39), Education (#56), Mechanical & Aeronautical Engineering (#66), Agriculture (=77), Chemical Engineering (#81), Medicine (#83), Materials Science (#84), Law (#88), Psychology (#94), and Economics (#96). Nottingham is named the UK's #1 university for graduates entering highly skilled employment.\n\nUndergraduate admission uses UCAS (Standard UCAS Fee £34.50; Common App is NOT accepted). Financial aid includes the automatic £5,000 International Undergraduate Excellence Scholarship (for AAA achievers) and the competitive £6,000 South Asia Undergraduate Excellence Award for applicants from Pakistan and South Asia.",
    "topProgramsList": [
      {
        "name": "School of Pharmacy & Veterinary Medicine",
        "ranking": "#8 Pharmacy / #39 Veterinary Science Globally",
        "description": "Pharmacology, drug discovery, clinical pharmacy, veterinary medicine, and animal biosciences."
      },
      {
        "name": "Faculty of Engineering & Jubilee Campus CS",
        "ranking": "Top 70 Global Engineering Tier",
        "description": "Mechanical, aeronautical, chemical, electrical, civil engineering, software engineering, and AI."
      },
      {
        "name": "School of Medicine & Health Sciences",
        "ranking": "#83 Globally in QS Medicine 2026",
        "description": "Clinical medicine, nursing, health sciences, neuroscience, and medical imaging."
      },
      {
        "name": "School of Law & School of Economics",
        "ranking": "#88 Law / #96 Economics Globally in QS 2026",
        "description": "International human rights law, commercial law, macroeconomics, econometrics, and policy."
      },
      {
        "name": "Nottingham University Business School (NUBS)",
        "ranking": "Triple-Accredited Business School",
        "description": "Finance, accounting, entrepreneurship, international management, and marketing."
      ,
    "logoText": "UN",
    "logoBg": "from-sky-700 to-blue-900",
    "degreesOffered": ["Undergraduate", "Graduate", "PhD"],
    "tags": ["United Kingdom", "Europe", "International", "Research"],
    "requiresSeparateApp": true}
    ],
    "allScholarshipsList": [,

      {
        "id": "uni-081-1",
        "title": "South Asia Undergraduate Excellence Award (Pakistan)",
        "amount": "£6,000 First-Year Tuition Discount",
        "coverage": "Partial Aid",
        "eligibility": "High-achieving undergraduate applicants domiciled in Pakistan and South Asia.",
        "description": "Competitive merit award providing £6,000 toward first-year undergraduate tuition fees for Pakistani and South Asian offer holders.",
        "deadline": "April 28",
        "requiresSeparateApp": true
      ,
    "logoText": "UN",
    "logoBg": "from-blue-700 to-indigo-950",
    "degreesOffered": ["Undergraduate", "Graduate", "PhD"]},

      {
        "id": "uni-081-2",
        "title": "International Undergraduate Excellence Scholarship",
        "amount": "£5,000 First-Year Tuition Contribution",
        "coverage": "Partial Aid",
        "eligibility": "International fee-paying undergraduate applicants achieving AAA or equivalent qualifications.",
        "description": "Automatic £5,000 first-year tuition contribution for high-achieving international students entering eligible undergraduate programs.",
        "deadline": "Automatic upon UCAS admission",
        "requiresSeparateApp": false
      }
    ],
    "degreesOffered": [
      "Bachelors",
      "Masters",
      "PhD"
    ],
    "tags": [
      "QS Top 100 Global",
      "Russell Group",
      "#8 Pharmacy World",
      "#1 Graduate Employment",
      "Nottingham UK",
      "UK"
    ],
    "requiresSeparateApp": true,
    "logoText": "NOT",
    "logoBg": "from-emerald-900 to-teal-950"
  },

  {
    "id": "uni-082",
    "universityName": "Lancaster University",
    "location": "Lancaster, England, United Kingdom",
    "country": "United Kingdom",
    "flag": "🇬🇧",
    "foundingYear": "1964",
    "scholarshipTitle": "Undergraduate Excellence & Regional International Scholarships",
    "ranking": "#164 Global (QS 2027) | #10 in UK Overall (CUG 2027) | TEF Gold 2023",
    "qsSubjectRankings": "Linguistics (#2 Global / #1 UK) | Accounting & Finance (#84) | Business & Management (#96) | Marketing (#51-100) | Statistics (#51-100)",
    "coverage": "Partial Aid",
    "amountValue": "£3,000 / year (Undergraduate Excellence & Regional Scholarships)",
    "tuitionFee": "Course-Specific Overseas Tuition (£30,770/yr CS BSc) | Standard UCAS App Fee: £34.50",
    "tuitionAmountNumeric": 30770,
    "hasFullRide": false,
    "hasPartialAid": true,
    "hasFinancialAid": true,
    "financialAidType": "Merit-Based",
    "financialAidDetails": "Lancaster University is a top 10 UK university in the Complete University Guide 2027, ranked #164 globally in QS 2027 and holding a TEF Gold rating. Lancaster boasts 11 subjects in the global top 100, headlined by Linguistics (#2 globally and #1 in the UK), alongside top standings in Accounting & Finance (#84), Business & Management (#96), Marketing, and Statistics. International financial aid includes the Undergraduate Excellence Scholarship (£3,000/year tuition reduction for high-achieving offer holders) and the International Regional Scholarship (£3,000/year). Pakistani HSSC holders require an approved foundation year for undergraduate entry. Undergraduate applications must use UCAS (Standard UCAS Fee: £34.50; Common App NOT accepted). Postgraduate candidates apply via Lancaster's direct portal.",
    "minGpa": "3.6+",
    "minSat": "1350 - 1480 (SAT / A*AA A-Levels)",
    "satRequirementCategory": "Optional",
    "satPolicyDetails": "Undergraduate entry requires A-Levels (A*AA to AAB) or IB (32–36 points). US applicants require 1350+ SAT or 29+ ACT + 3 AP exam scores of 4 or 5. Pakistani HSSC/Intermediate holders need an approved foundation pathway. All undergraduate applications must be submitted via UCAS (Standard UCAS Fee: £34.50). Common App is NOT accepted. Postgraduate applications use Lancaster's direct online portal. English requirement: IELTS 6.5 (minimum 6.0 in all sub-scores).",
    "minIelts": "6.5",
    "ieltsCategory": "6.5",
    "toeflRequirement": "87+ iBT",
    "commonAppAccepted": false,
    "applicationPortalDetails": "Undergraduate: UCAS portal strictly (Standard UCAS Fee: £34.50). Common App is NOT accepted. Postgraduate: Direct Lancaster Online Application Portal.",
    "acceptanceRate": "19%",
    "deadline": "Jan 13 (UCAS Equal-Consideration) / Rolling Postgrad",
    "description": "Top 10 UK research university (CUG 2027) & TEF Gold holder ranked #164 globally in QS 2027. Ranked #2 globally in Linguistics & top 100 in Business & Finance. Offers £3,000/yr International Excellence Scholarships.",
    "overviewLong": "Lancaster University is a leading public research university located on a 560-acre green campus at Bailrigg, Lancaster, England. QS ranks Lancaster #164 globally in 2027, while domestic league tables place Lancaster #10 overall in the UK in the Complete University Guide 2027 and #15 in The Times Good University Guide 2026. Lancaster holds a TEF Gold award.\n\nLancaster holds 11 global top-100 QS subject rankings, led by Linguistics (#2 globally and #1 in the UK). Lancaster Management School (LUMSA) is triple-accredited, featuring Accounting & Finance (#84 globally), Business & Management (#96), Marketing (#51–100), and Statistics & Operational Research (#51–100). Every undergraduate belongs to one of 9 collegiate communities.\n\nUndergraduate entry uses UCAS (Standard UCAS Fee £34.50; Common App is NOT accepted). Financial aid includes the Undergraduate Excellence Scholarship (£3,000/year tuition reduction) and Regional Scholarships.",
    "topProgramsList": [
      {
        "name": "Department of Linguistics & English Language",
        "ranking": "#2 Globally in QS Linguistics 2026 (#1 UK)",
        "description": "Theoretical linguistics, applied linguistics, phonetics, discourse analysis, and language teaching."
      },
      {
        "name": "Lancaster University Management School (LUMS)",
        "ranking": "#84 Accounting / #96 Business Globally",
        "description": "Accounting, finance, business analytics, marketing, economics, and operational research."
      },
      {
        "name": "School of Computing & Communications",
        "ranking": "Top 15 UK Computing & Data Science",
        "description": "Artificial intelligence, software engineering, cybersecurity, data science, and networking."
      },
      {
        "name": "Department of Educational Research & Sociology",
        "ranking": "Top 100 Globally in Education & Sociology",
        "description": "Higher education research, social policy, sociology, and digital learning."
      },
      {
        "name": "Department of Mathematics & Statistics",
        "ranking": "Top 100 Globally in Statistics & Ops Research",
        "description": "Statistics, operational research, financial mathematics, and pure math."
      ,
    "logoText": "LU",
    "logoBg": "from-violet-700 to-purple-950",
    "degreesOffered": ["Undergraduate", "Graduate", "PhD"],
    "tags": ["United Kingdom", "Europe", "International", "Research"],
    "requiresSeparateApp": true}
    ],
    "allScholarshipsList": [,

      {
        "id": "uni-082-1",
        "title": "Lancaster Undergraduate Excellence Scholarship",
        "amount": "£3,000 / year Tuition Discount",
        "coverage": "Partial Aid",
        "eligibility": "High-achieving international fee-paying undergraduate applicants (A*AA or equivalent).",
        "description": "Automatic £3,000 per year tuition fee reduction for eligible international undergraduate offer holders making Lancaster their firm choice.",
        "deadline": "Automatic upon UCAS Firm acceptance",
        "requiresSeparateApp": false
      ,
    "logoText": "LU",
    "logoBg": "from-blue-700 to-indigo-950",
    "degreesOffered": ["Undergraduate", "Graduate", "PhD"]},

      {
        "id": "uni-082-2",
        "title": "Lancaster International Regional Scholarship",
        "amount": "£3,000 / year Tuition Discount",
        "coverage": "Partial Aid",
        "eligibility": "International undergraduate students from 14 eligible underrepresented countries.",
        "description": "Tuition discount of £3,000 per year for eligible international students from underrepresented regions.",
        "deadline": "Automatic upon UCAS admission",
        "requiresSeparateApp": false
      }
    ],
    "degreesOffered": [
      "Bachelors",
      "Masters",
      "PhD"
    ],
    "tags": [
      "QS Top 170 Global",
      "Top 10 UK CUG",
      "#2 Linguistics World",
      "TEF Gold",
      "Lancaster UK",
      "UK"
    ],
    "requiresSeparateApp": false,
    "logoText": "LNC",
    "logoBg": "from-rose-950 to-slate-900"
  },

  {
    "id": "uni-083",
    "universityName": "University of York",
    "location": "York, England, United Kingdom",
    "country": "United Kingdom",
    "flag": "🇬🇧",
    "foundingYear": "1963",
    "scholarshipTitle": "Dean's Global Excellence Scholarship & International Achievement Award",
    "ranking": "#=158 Global (QS 2027) | #24 in UK | TEF Gold 2023",
    "qsSubjectRankings": "Archaeology (#16 Global) | English Language & Literature (#28 Global) | Social Policy (#38 Global) | Education (#81) | Psychology (#98) | Sociology (#95)",
    "coverage": "Full Ride",
    "amountValue": "Full 1st Year Tuition + £10,000/yr 2nd & 3rd Yr (Up to £30k Dean's Global Excellence) or £10,000 (Achievement Award)",
    "tuitionFee": "Course-Specific Overseas Tuition (£23,000 – £32,350/yr) | Standard UCAS App Fee: £34.50",
    "tuitionAmountNumeric": 32350,
    "hasFullRide": true,
    "hasPartialAid": true,
    "hasFinancialAid": true,
    "financialAidType": "Merit-Based",
    "financialAidDetails": "The University of York is a premier Russell Group research university in historic York, England, ranked #=158 globally in QS 2027 (up 26 places over two years) and holding a TEF Gold award. York boasts 9 global top-100 QS subjects, led by Archaeology (#16 globally / #5 UK), English Literature (#28 globally / #9 UK), Social Policy (#38 globally / #8 UK), Education, Psychology, and Sociology. International financial aid includes the prestigious Dean's Global Excellence Scholarship (provides a full 100% tuition waiver for Year 1 plus £10,000/year tuition waivers for Years 2 & 3—up to £30,000 total) and the International Undergraduate Achievement Scholarship (up to £10,000 first-year tuition discount). Undergraduate applications must use UCAS (Standard UCAS Fee: £34.50; Common App NOT accepted). Postgraduate candidates apply via York's direct portal.",
    "minGpa": "3.6+",
    "minSat": "1380 - 1500 (SAT / AAA A-Levels)",
    "satRequirementCategory": "Optional",
    "satPolicyDetails": "Undergraduate entry requires A-Levels (AAA to AAB; CS BSc requires AAA) or IB (34–36 points). US applicants require 1380+ SAT or 30+ ACT + 3 AP exam scores of 4 or 5. Pakistani HSSC/Intermediate holders need a foundation year pathway. All undergraduate applications must be submitted via UCAS (Standard UCAS Fee: £34.50). Common App is NOT accepted. Postgraduate applications use York's direct online portal. English requirement: IELTS 6.5 (minimum 6.0 in all sub-scores).",
    "minIelts": "6.5",
    "ieltsCategory": "6.5",
    "toeflRequirement": "87+ iBT",
    "commonAppAccepted": false,
    "applicationPortalDetails": "Undergraduate: UCAS portal strictly (Institution Code: Y50; Standard UCAS Fee: £34.50). Common App is NOT accepted. Postgraduate: Direct York Online Application Portal.",
    "acceptanceRate": "18%",
    "deadline": "Jan 13 (UCAS Equal-Consideration) / April (Dean's Scholarship) / Rolling Postgrad",
    "description": "Top Russell Group research university ranked #=158 globally in QS 2027 & TEF Gold holder. World-leading Archaeology (#16), English (#28) & Social Policy (#38). Offers Dean's Global Excellence Awards up to £30k.",
    "overviewLong": "The University of York is a leading public research university and Russell Group member located in the historic cathedral city of York, England. QS ranks York #=158 globally in 2027 (24th in the UK), rising 26 places over two years, while holding TEF Gold status.\n\nYork features 9 global top-100 QS subjects, including Archaeology (#16 globally / #5 UK), English & Related Literature (#28 globally / #9 UK), Social Policy & Administration (#38 globally / #8 UK), Education (#81), Sociology (#95), and Psychology (#98). The Department of Computer Science offers premier research in AI, cybersecurity, and robotics.\n\nUndergraduate admission uses UCAS (Code: Y50; Standard UCAS Fee £34.50; Common App is NOT accepted). Financial aid includes the Dean's Global Excellence Scholarship (100% full tuition waiver in Year 1 + £10,000/yr in Years 2 & 3, worth up to £30,000 total) and the International Achievement Scholarship (up to £10,000).",
    "topProgramsList": [
      {
        "name": "Department of Archaeology",
        "ranking": "#16 Globally in QS Archaeology 2026 (#5 UK)",
        "description": "Bioarchaeology, heritage studies, field archaeology, and archaeological science."
      },
      {
        "name": "Department of English & Related Literature",
        "ranking": "#28 Globally in QS English 2026 (#9 UK)",
        "description": "English literature, creative writing, world literature, and postcolonial studies."
      },
      {
        "name": "Department of Social Policy & Social Work",
        "ranking": "#38 Globally in QS Social Policy 2026 (#8 UK)",
        "description": "Global social policy, welfare systems, social research, and comparative policy."
      },
      {
        "name": "Department of Computer Science",
        "ranking": "Top 15 UK Computer Science & AI",
        "description": "Artificial intelligence, cybersecurity, robotics, human-computer interaction, and software engineering."
      },
      {
        "name": "Department of Psychology & Life Sciences",
        "ranking": "#98 Globally in QS Psychology 2026",
        "description": "Cognitive neuroscience, developmental psychology, clinical psychology, and biochemistry."
      ,
    "logoText": "UY",
    "logoBg": "from-teal-700 to-slate-900",
    "degreesOffered": ["Undergraduate", "Graduate", "PhD"],
    "tags": ["United Kingdom", "Europe", "International", "Research"],
    "requiresSeparateApp": true}
    ],
    "allScholarshipsList": [,

      {
        "id": "uni-083-1",
        "title": "Dean's Global Excellence Scholarship",
        "amount": "Full 1st Year Fees + £10,000/yr for Y2 & Y3 (Up to £30,000 total)",
        "coverage": "Full Ride",
        "eligibility": "High-achieving international undergraduate applicants demonstrating outstanding academic merit.",
        "description": "Prestigious award providing a 100% full tuition fee waiver for the first year of study plus £10,000 annual tuition discounts for years 2 and 3 (total value up to £30,000). Evaluated automatically for all eligible international offer-holders.",
        "deadline": "Automatic consideration for eligible offer-holders",
        "requiresSeparateApp": false
      ,
    "logoText": "UY",
    "logoBg": "from-blue-700 to-indigo-950",
    "degreesOffered": ["Undergraduate", "Graduate", "PhD"]},

      {
        "id": "uni-083-2",
        "title": "International Undergraduate Achievement Scholarship",
        "amount": "Up to £10,000 First-Year Tuition Discount",
        "coverage": "Partial Aid",
        "eligibility": "Eligible international undergraduate offer holders (ABB / 34 IB points or equivalent).",
        "description": "Automatic tuition fee discount of up to £10,000 toward first-year international undergraduate tuition.",
        "deadline": "Automatic upon UCAS offer",
        "requiresSeparateApp": false
      }
    ],
    "degreesOffered": [
      "Bachelors",
      "Masters",
      "PhD"
    ],
    "tags": [
      "QS Top 160 Global",
      "Russell Group",
      "#16 Archaeology World",
      "Dean's Scholars",
      "York UK",
      "UK"
    ],
    "requiresSeparateApp": false,
    "logoText": "YRK",
    "logoBg": "from-blue-950 to-slate-900"
  },

  {
    "id": "uni-084",
    "universityName": "Queen's University Belfast",
    "location": "Belfast, Northern Ireland, United Kingdom",
    "country": "United Kingdom",
    "flag": "🇬🇧",
    "foundingYear": "1845",
    "scholarshipTitle": "South Asia Excellence Award, Pakistan Academic Excellence & Int'l Scholarships",
    "ranking": "#174 Global (QS 2027) | #70 in Europe | #1 UK Career Prospects Pharmacy & EE",
    "qsSubjectRankings": "Pharmacy & Pharmacology (#19 Global) | Nursing #48 (Global) | English Language & Literature #72 (Global) | Performing Arts (Top 100) | Social Policy (Top 100)",
    "coverage": "Partial Aid",
    "amountValue": "£7,500 (South Asia Award) or Pakistan Academic Excellence Award or Up to 50% Tuition Waiver",
    "tuitionFee": "Course-Specific Overseas Tuition (£20,800 – £36,900/yr) | Standard UCAS App Fee: £34.50",
    "tuitionAmountNumeric": 24000,
    "hasFullRide": false,
    "hasPartialAid": true,
    "hasFinancialAid": true,
    "financialAidType": "Merit-Based",
    "financialAidDetails": "Queen's University Belfast is an historic Russell Group research university in Northern Ireland's capital, ranked #174 globally in QS 2027 (rising 25 places) and #70 in Europe. Queen's ranks #19 globally in Pharmacy & Pharmacology (QS 2026), #48 in Nursing, and #72 in English Language & Literature, while holding #1 UK rankings for graduate career prospects in Pharmacy, Biomedical Science, Electronic Engineering, and Medicine (Guardian 2026). Belfast offers the lowest student living costs in the UK. International financial aid includes the South Asia Scholarship (£7,500 tuition discount for Grade 12 >= 85%), the Pakistan Academic Excellence Award, and Vice-Chancellor's International Scholarships up to 50% tuition. Undergraduate applications must strictly use UCAS (UCAS Portal Required, Standard UCAS Fee: £34.50; Common App is NOT accepted). Direct online applications are reserved exclusively for postgraduate candidates.",
    "minGpa": "3.5+",
    "minSat": "1320 - 1450 (SAT / ABB A-Levels)",
    "satRequirementCategory": "Optional",
    "satPolicyDetails": "Undergraduate entry requires A-Levels (A*AA to ABB) or IB (30–36 points). US applicants require 1320+ SAT or 28+ ACT + 3 AP exam scores of 4 or 5. Dedicated country guidance available for Pakistani qualifications. All undergraduate applications must be submitted via UCAS (Standard UCAS Fee: £34.50). Common App is NOT accepted. Postgraduate applications use Queen's direct online portal. English requirement: IELTS 6.5 (minimum 5.5–6.0 in sub-scores).",
    "minIelts": "6.5",
    "ieltsCategory": "6.5",
    "toeflRequirement": "88+ iBT",
    "commonAppAccepted": false,
    "applicationPortalDetails": "UCAS Portal Required strictly for full-time undergraduates (Standard UCAS Fee: £34.50). Common App is NOT accepted.",
    "acceptanceRate": "35% - 40%",
    "deadline": "Jan 13 (UCAS Equal-Consideration) / June (South Asia Award) / Rolling Postgrad",
    "description": "Historic Russell Group research university in Belfast ranked #174 globally in QS 2027 (#19 World Pharmacy). Ranked #1 UK in Career Prospects for Pharmacy & EE. Offers £7,500 South Asia Awards & lowest UK living costs.",
    "overviewLong": "Queen's University Belfast is an historic public research university and Russell Group member founded in 1845 in Belfast, Northern Ireland. QS ranks Queen's #174 globally in 2027 (up 25 places) and #70 in Europe. In REF 2021, 99% of Queen's research environment was rated world-leading or internationally excellent.\n\nQueen's holds 5 global top-100 QS subjects, led by Pharmacy & Pharmacology (#19 globally), Nursing (#48 globally), English Language & Literature (#72 globally), Performing Arts (top 100), and Social Policy (top 100). The Guardian 2026 ranks Queen's #1 in the UK for graduate career prospects in Pharmacy, Biomedical Science, Electronic & Electrical Engineering, and Medicine. Northern Ireland offers the UK's lowest student living costs.\n\nUndergraduate applications are submitted strictly via the UCAS portal (UCAS Portal Required, Standard UCAS Fee £34.50; Common App is NOT accepted). Financial aid includes the South Asia Scholarship (£7,500 tuition reduction for Grade 12 >= 85%), Pakistan Academic Excellence Awards, and Vice-Chancellor's 50% tuition awards.",
    "topProgramsList": [
      {
        "name": "School of Pharmacy",
        "ranking": "#19 Globally in QS Pharmacy 2026 (#1 UK Prospects)",
        "description": "Pharmacy, pharmacology, pharmaceutical sciences, and drug delivery systems."
      },
      {
        "name": "School of Electronics, Electrical Engineering & Computer Science",
        "ranking": "#1 UK Career Prospects EE (Guardian)",
        "description": "Computer science, cybersecurity, artificial intelligence, electronic engineering, and software."
      },
      {
        "name": "School of Medicine, Dentistry & Biomedical Sciences",
        "ranking": "#1 UK Prospects Biomedical Science",
        "description": "Medicine, dentistry, biomedical sciences, human biology, and cancer research."
      },
      {
        "name": "School of Nursing & Midwifery",
        "ranking": "#48 Globally",
        "description": "Adult nursing, mental health nursing, midwifery, and healthcare leadership."
      },
      {
        "name": "English Language & Literature",
        "ranking": "#72 Globally",
        "description": "English literature, creative writing, drama, performing arts, and linguistics."
      ,
    "logoText": "QUE",
    "logoBg": "from-blue-700 to-indigo-950",
    "degreesOffered": ["Undergraduate", "Graduate", "PhD"],
    "tags": ["United Kingdom", "Europe", "International", "Research"],
    "requiresSeparateApp": true}
    ],
    "allScholarshipsList": [,

      {
        "id": "uni-084-1",
        "title": "South Asia Undergraduate Scholarship (Pakistan)",
        "amount": "£7,500 First-Year Tuition Discount",
        "coverage": "Partial Aid",
        "eligibility": "Pakistani and South Asian undergraduate applicants achieving at least 85% in Grade 12 / High School.",
        "description": "Tuition discount award providing £7,500 toward first-year undergraduate tuition fees for high-achieving Pakistani offer holders.",
        "deadline": "June 30",
        "requiresSeparateApp": true
      ,
    "logoText": "QUB",
    "logoBg": "from-blue-700 to-indigo-950",
    "degreesOffered": ["Undergraduate", "Graduate", "PhD"]},

      {
        "id": "uni-084-2",
        "title": "Queen's International Vice-Chancellor's Scholarship",
        "amount": "Up to 50% Tuition Fee Coverage",
        "coverage": "Partial Aid",
        "eligibility": "High-achieving new international undergraduate applicants.",
        "description": "Competitive merit award covering 50% of annual international tuition fees across degree duration.",
        "deadline": "May 31",
        "requiresSeparateApp": true
      }
    ],
    "degreesOffered": [
      "Bachelors",
      "Masters",
      "PhD"
    ],
    "tags": [
      "QS Top 175 Global",
      "Russell Group",
      "#19 Pharmacy World",
      "Lowest UK Living Cost",
      "Belfast UK",
      "UK"
    ],
    "requiresSeparateApp": true,
    "logoText": "QUB",
    "logoBg": "from-red-950 to-slate-900"
  },

  {
    "id": "uni-085",
    "universityName": "Cardiff University",
    "location": "Cardiff, Wales, United Kingdom",
    "country": "United Kingdom",
    "flag": "🇬🇧",
    "foundingYear": "1883",
    "scholarshipTitle": "Undergraduate International Excellence & Vice-Chancellor's Scholarships",
    "ranking": "#179 Global (QS 2027) | Sole Russell Group Uni in Wales | 90% World-Leading REF",
    "qsSubjectRankings": "Communication & Media Studies #37 (#8 UK) | Architecture & Built Environment (#=50 Global) | English (#=62) | Geography & Archaeology (Top 100)",
    "coverage": "Partial Aid",
    "amountValue": "£10,000 (International Excellence) or £3,500 – £5,000 (Vice-Chancellor's Scholarship)",
    "tuitionFee": "Course-Specific Overseas Tuition (£23,500 – £31,000+/yr) | Standard UCAS App Fee: £34.50",
    "tuitionAmountNumeric": 28000,
    "hasFullRide": false,
    "hasPartialAid": true,
    "hasFinancialAid": true,
    "financialAidType": "Merit-Based",
    "financialAidDetails": "Cardiff University is the sole Russell Group university in Wales, ranked #179 globally in QS 2027 and holding 90% world-leading/internationally excellent research in REF 2021. Cardiff features 8 global top-100 QS subjects, led by Communication & Media Studies (#37 globally / #8 UK), Architecture & Built Environment (#=50 globally at Welsh School of Architecture), English Literature (#=62 globally), Geography, and Archaeology. Located in the Welsh capital, Cardiff offers a vibrant city experience with an established Pakistani community. International financial aid includes the Undergraduate International Excellence Scholarship (£10,000 tuition award) and the Vice-Chancellor's International Scholarship (£3,500–£5,000 tuition discount). Undergraduate applications must use UCAS (Standard UCAS Fee: £34.50; Common App NOT accepted). Postgraduate candidates apply via Cardiff's direct portal.",
    "minGpa": "3.5+",
    "minSat": "1320 - 1450 (SAT / ABB A-Levels)",
    "satRequirementCategory": "Optional",
    "satPolicyDetails": "Undergraduate entry requires A-Levels (A*AA to ABB) or IB (31–36 points). US applicants require 1320+ SAT or 28+ ACT + 3 AP exam scores of 4 or 5. Pakistani national high school graduates may enter via an International Foundation Year. All undergraduate applications must be submitted via UCAS (Standard UCAS Fee: £34.50). Common App is NOT accepted. Postgraduate applications use Cardiff's direct online portal. English requirement: IELTS 6.5 (minimum 5.5–6.0 in sub-scores).",
    "minIelts": "6.5",
    "ieltsCategory": "6.5",
    "toeflRequirement": "88+ iBT",
    "commonAppAccepted": false,
    "applicationPortalDetails": "UCAS Portal Required strictly for full-time undergraduates (Standard UCAS Fee: £34.50). Common App is NOT accepted.",
    "acceptanceRate": "20%",
    "deadline": "Jan 13 (UCAS Equal-Consideration) / May (Vice-Chancellor's Scholarship) / Rolling Postgrad",
    "description": "Sole Russell Group university in Wales ranked #179 globally in QS 2027. World leader in Media & Communication (#37) & Architecture (#50). Offers £10,000 International Excellence & Vice-Chancellor Scholarships.",
    "overviewLong": "Cardiff University is a major public research university and the only Russell Group institution in Wales, located in the Welsh capital city of Cardiff. QS ranks Cardiff #179 globally in 2027. In REF 2021, 90% of Cardiff's research was confirmed as world-leading or internationally excellent.\n\nCardiff boasts 8 global top-100 QS subjects, including Communication & Media Studies (#37 globally / #8 UK), Architecture & Built Environment (#=50 globally at the renowned Welsh School of Architecture), English Language & Literature (#=62 globally, up 29 places), Geography (global top 100), Archaeology (global top 100), Psychology, and Marketing. Computer Science degrees offer AI, cybersecurity, and industrial placement options.\n\nUndergraduate admission uses UCAS (Standard UCAS Fee £34.50; Common App is NOT accepted). Financial aid includes the Undergraduate International Excellence Scholarship (£10,000 tuition award) and Vice-Chancellor's Scholarships (£3,500–£5,000).",
    "topProgramsList": [
      {
        "name": "School of Journalism, Media & Culture (JOMEC)",
        "ranking": "#37 Globally (#8 UK)",
        "description": "Journalism, media studies, digital communication, political communication, and PR."
      },
      {
        "name": "Welsh School of Architecture (WSA)",
        "ranking": "#=50 Globally in QS Architecture 2026",
        "description": "Architecture, sustainable design, urban design, and environmental building design."
      },
      {
        "name": "School of English, Communication & Philosophy",
        "ranking": "#=62 Globally in QS English Literature 2026",
        "description": "English literature, language and communication, creative writing, and philosophy."
      },
      {
        "name": "School of Computer Science & Informatics",
        "ranking": "Top 20 UK Computing & Cyber Security",
        "description": "Software engineering, artificial intelligence, cybersecurity, data science, and HCI."
      },
      {
        "name": "School of Earth & Environmental Sciences & Geography",
        "ranking": "Top 100 Globally in Geography & Earth Sciences",
        "description": "Human geography, physical geography, geology, environmental hazards, and oceanography."
      ,
    "logoText": "CU",
    "logoBg": "from-rose-700 to-red-950",
    "degreesOffered": ["Undergraduate", "Graduate", "PhD"],
    "tags": ["United Kingdom", "Europe", "International", "Research"],
    "requiresSeparateApp": true}
    ],
    "allScholarshipsList": [,

      {
        "id": "uni-085-1",
        "title": "Cardiff Undergraduate International Excellence Scholarship",
        "amount": "£10,000 Tuition Award",
        "coverage": "Partial Aid",
        "eligibility": "Outstanding international undergraduate offer holders (9 awards available).",
        "description": "Competitive merit-based scholarship providing £10,000 toward first-year international undergraduate tuition fees.",
        "deadline": "April 3 (Priority Intake Deadline)",
        "requiresSeparateApp": true
      ,
    "logoText": "CU",
    "logoBg": "from-blue-700 to-indigo-950",
    "degreesOffered": ["Undergraduate", "Graduate", "PhD"]},

      {
        "id": "uni-085-2",
        "title": "Cardiff Vice-Chancellor's International Scholarship",
        "amount": "£3,500 – £5,000 Tuition Discount",
        "coverage": "Partial Aid",
        "eligibility": "Eligible international fee-paying undergraduate offer holders.",
        "description": "Automatic tuition fee reduction of £3,500 to £5,000 applied toward international undergraduate tuition fees.",
        "deadline": "Automatic upon UCAS offer",
        "requiresSeparateApp": false
      }
    ],
    "degreesOffered": [
      "Bachelors",
      "Masters",
      "PhD"
    ],
    "tags": [
      "QS Top 180 Global",
      "Russell Group Wales",
      "Top 50 Media World",
      "#50 Architecture World",
      "Cardiff UK",
      "UK"
    ],
    "requiresSeparateApp": true,
    "logoText": "CDF",
    "logoBg": "from-red-900 to-rose-950"
  },

  {
    "id": "uni-086",
    "universityName": "University of Aberdeen",
    "location": "Aberdeen, Scotland, United Kingdom",
    "country": "United Kingdom",
    "flag": "🇬🇧",
    "foundingYear": "1495",
    "scholarshipTitle": "International Merit & Subject-Specific Scholarships",
    "ranking": "#288 Global (QS 2027) | #33 World Theology | Top 100 Petroleum Engineering & Anthropology",
    "qsSubjectRankings": "Theology & Religious Studies (#33 Global) | Petroleum Engineering (Top 50-100 Global) | Anthropology (Top 100 Global) | Medicine (#6 UK Guardian)",
    "coverage": "Partial Aid",
    "amountValue": "Course & Merit-Specific International Tuition Discounts",
    "tuitionFee": "Course-Specific Overseas Tuition (£22,000 – £31,000+/yr; 4-Yr Scottish Degree) | Standard UCAS App Fee: £34.50",
    "tuitionAmountNumeric": 25000,
    "hasFullRide": false,
    "hasPartialAid": true,
    "hasFinancialAid": true,
    "financialAidType": "Merit-Based",
    "financialAidDetails": "The University of Aberdeen is Scotland's fifth-oldest ancient university, founded in 1495, ranked #288 globally in QS 2027. Aberdeen boasts global top-100 subject standings in Theology (#33 globally), Petroleum Engineering, Anthropology, and Anatomy & Physiology (#2 UK). Located in Europe's energy capital, Aberdeen excels in energy transition, petroleum geosciences, and clinical medicine (#6 in UK). Standard undergraduate degrees in Scotland run for 4 years. International financial aid includes merit-based tuition discounts and regional scholarships. Undergraduate applications must strictly use the UCAS portal (Standard UCAS Fee: £34.50; Common App is NOT accepted). Direct applications are used for postgraduate study.",
    "minGpa": "3.4+",
    "minSat": "1300 - 1420 (SAT / BBB-AAB A-Levels)",
    "satRequirementCategory": "Optional",
    "satPolicyDetails": "Undergraduate entry requires A-Levels (AAB to BBB) or IB (32–36 points). US applicants require 1300+ SAT or 28+ ACT + 3 AP exam scores of 4. Standard undergraduate degrees run for 4 years in Scotland. All undergraduate applications must be submitted strictly via UCAS (Standard UCAS Fee: £34.50). Common App is NOT accepted. Postgraduate applications use Aberdeen's direct online portal. English requirement: IELTS 6.5 (minimum 5.5–6.0 in sub-scores).",
    "minIelts": "6.5",
    "ieltsCategory": "6.5",
    "toeflRequirement": "88+ iBT",
    "commonAppAccepted": false,
    "applicationPortalDetails": "UCAS Portal Required strictly for full-time undergraduates (Standard UCAS Fee: £34.50). Common App is NOT accepted.",
    "acceptanceRate": "30% - 35%",
    "deadline": "May 31 (Priority Intake) / Jan 13 (UCAS Equal-Consideration)",
    "description": "Ancient Scottish university founded in 1495 ranked #288 globally in QS 2027. World leader in Theology (#33), Petroleum Engineering (Top 100) & Medicine (#6 UK). Offers international merit tuition support.",
    "overviewLong": "The University of Aberdeen is one of Scotland's five ancient universities, founded in 1495 in Aberdeen, Scotland. QS ranks Aberdeen #288 globally in 2027 and THE ranks it in the top 250. Situated in the historic Old Aberdeen campus, the university is famous for research in Energy, Petroleum Engineering, Medicine, Life Sciences, Theology, and Anthropology.\n\nAberdeen features global top-100 subject strengths in Theology, Divinity & Religious Studies (#33 globally / #2 Scotland), Petroleum Engineering (global top 51–100 band), Anthropology (global top 100 / #8 UK), and Medicine (#6 in the UK / #2 in Scotland by Guardian 2026). Scottish undergraduate honours degrees run across 4 years.\n\nUndergraduate admission uses UCAS strictly (Standard UCAS Fee £34.50; Common App is NOT accepted). Financial aid includes international merit awards and regional tuition discounts.",
    "topProgramsList": [
      {
        "name": "Department of Divinity, History & Philosophy",
        "ranking": "#33 Globally in QS Theology 2026 (#2 Scotland)",
        "description": "Theology, religious studies, divinity, church history, and biblical studies."
      },
      {
        "name": "School of Engineering & Geosciences",
        "ranking": "Top 50-100 Globally in Petroleum Engineering",
        "description": "Petroleum engineering, renewable energy engineering, energy transition, and geophysics."
      },
      {
        "name": "School of Medicine, Medical Sciences & Nutrition",
        "ranking": "#6 UK in Medicine / #2 UK Anatomy & Physiology",
        "description": "Clinical medicine, biomedical sciences, anatomy, physiology, and nutrition."
      },
      {
        "name": "Department of Anthropology",
        "ranking": "Top 100 Globally in QS Anthropology (#8 UK)",
        "description": "Social anthropology, biological anthropology, northern ethnography, and culture."
      },
      {
        "name": "School of Natural & Computing Sciences",
        "ranking": "Top 20 Scottish Computing & Data Science",
        "description": "Computer science, artificial intelligence, software engineering, and data analytics."
      ,
    "logoText": "UA",
    "logoBg": "from-violet-700 to-purple-950",
    "degreesOffered": ["Undergraduate", "Graduate", "PhD"],
    "tags": ["United Kingdom", "Europe", "International", "Research"],
    "requiresSeparateApp": true}
    ],
    "allScholarshipsList": [,

      {
        "id": "uni-086-1",
        "title": "Aberdeen International Undergraduate Merit Scholarship",
        "amount": "Course-Specific Tuition Fee Discount",
        "coverage": "Partial Aid",
        "eligibility": "High-achieving international fee-paying undergraduate applicants.",
        "description": "Automatic merit-based tuition fee discount evaluated for all eligible international undergraduate offer holders upon submitting a UCAS application by the priority intake window.",
        "deadline": "May 31 (Priority Intake) / Automatic Consideration upon UCAS Offer",
        "requiresSeparateApp": false
      }
    ],
    "degreesOffered": [
      "Bachelors",
      "Masters",
      "PhD"
    ],
    "tags": [
      "QS Top 290 Global",
      "Scottish Ancient Uni",
      "#33 Theology World",
      "Petroleum Engineering",
      "Aberdeen UK",
      "UK"
    ],
    "requiresSeparateApp": false,
    "logoText": "ABD",
    "logoBg": "from-amber-950 to-stone-900"
  },

  {
    "id": "uni-087",
    "universityName": "University of Bath",
    "location": "Bath, England, United Kingdom",
    "country": "United Kingdom",
    "flag": "🇬🇧",
    "foundingYear": "1966",
    "scholarshipTitle": "Bath International Excellence Scholarship",
    "ranking": "#125 Global (QS 2027) | #7 UK Times 2026 | #9 Complete University Guide 2027 | Triple Gold TEF 2023",
    "qsSubjectRankings": "Sports-related Subjects (#13 Global) | Development Studies (#31 Global) | Psychology (#57 Global) | Business & Management (#82 Global) | Architecture & Marketing Top 100",
    "coverage": "Partial Aid",
    "amountValue": "£8,000 / year (Up to £24,000 total over 3 years) — Bath International Excellence Award",
    "tuitionFee": "Course-Specific Overseas Tuition (£32,000/yr CS BSc) | Standard UCAS App Fee: £34.50",
    "tuitionAmountNumeric": 32000,
    "hasFullRide": false,
    "hasPartialAid": true,
    "hasFinancialAid": true,
    "financialAidType": "Merit-Based",
    "financialAidDetails": "The University of Bath is a premier top-10 UK university ranked #125 globally in QS 2027 (its highest rank ever), #7 in the UK by The Times, #9 by Complete University Guide 2027, and holding Triple Gold in TEF 2023. Bath is world-renowned for Engineering (Top 5 UK Aerospace, Chemical, Mechanical), Computer Science (Top 10 UK CUG; typical offer A*A*A), Business & Management (#82 globally), Psychology (#57), and Sports Sciences (#13 globally). 92% of Bath's research is world-leading (REF 2021). International financial aid includes the Bath International Excellence Scholarship (£8,000/year, providing up to £24,000 over 3 years across 300 awards). Undergraduate applications must strictly use the UCAS portal (Standard UCAS Fee: £34.50; Common App is NOT accepted).",
    "minGpa": "3.8+",
    "minSat": "1420 - 1530 (SAT / A*A*A A-Levels)",
    "satRequirementCategory": "Optional",
    "satPolicyDetails": "Undergraduate entry is highly selective (Computer Science requires A*A*A with Math). Entry requires A-Levels (A*A*A to AAA) or IB (36–38 points). US applicants require 1420+ SAT or 32+ ACT + 3 to 4 AP exam scores of 5. All undergraduate applications must be submitted strictly via UCAS (Standard UCAS Fee: £34.50). Common App is NOT accepted. Postgraduate applications use Bath's direct online portal. English requirement: IELTS 6.5 (minimum 6.0 in all sub-scores).",
    "minIelts": "6.5",
    "ieltsCategory": "6.5",
    "toeflRequirement": "90+ iBT",
    "commonAppAccepted": false,
    "applicationPortalDetails": "UCAS Portal Required strictly for full-time undergraduates (Standard UCAS Fee: £34.50). Common App is NOT accepted.",
    "acceptanceRate": "12% - 15%",
    "deadline": "Jan 13 (UCAS Equal-Consideration) / May 15 (International Excellence Scholarship)",
    "description": "Top 10 UK university (#7 Times 2026 / #9 CUG) & Triple Gold TEF holder ranked #125 globally in QS 2027. World leader in Sports (#13), Psychology (#57) & Engineering. Offers £24k International Excellence Awards.",
    "overviewLong": "The University of Bath is a top-tier UK public research university located on a scenic campus at Claverton Down overlooking the UNESCO World Heritage city of Bath, England. QS ranks Bath #125 globally in 2027 (highest ever), while UK domestic tables place Bath #7 in The Times 2026, #8 in The Guardian, and #9 in CUG 2027. Bath holds Triple Gold status in TEF 2023.\n\nBath features 7 global top-100 QS subjects, led by Sports-related Subjects (#13 globally), Development Studies (=#31), Psychology (=#57), Business & Management (=#82), Architecture & Built Environment, Marketing, and Social Policy. Bath Engineering ranks in the UK top 5 for Aerospace, Mechanical, and Chemical Engineering, while Computer Science ranks in the UK top 10 with a typical offer of A*A*A.\n\nUndergraduate admission uses UCAS strictly (Standard UCAS Fee £34.50; Common App is NOT accepted). Financial aid includes the Bath International Excellence Scholarship (£8,000/year up to £24,000 across 3 years; 300 awards).",
    "topProgramsList": [
      {
        "name": "Department of Computer Science",
        "ranking": "Top 10 UK CUG / #251-300 QS Global (Up 100+ places)",
        "description": "Artificial intelligence, software systems, computer vision, human-computer interaction, and computational math."
      },
      {
        "name": "Department for Health & Sports Science",
        "ranking": "#13 Globally in QS Sports-Related Subjects 2026",
        "description": "Sports science, biomechanics, exercise physiology, sports performance, and health policy."
      },
      {
        "name": "School of Management",
        "ranking": "Top 10 UK / #=82 Globally in QS Business 2026",
        "description": "Business administration, accounting, finance, marketing, management, and international business."
      },
      {
        "name": "Faculty of Engineering & Design",
        "ranking": "Top 5 UK Aerospace, Mechanical & Chemical Eng",
        "description": "Aerospace engineering, mechanical engineering, chemical engineering, and civil systems."
      },
      {
        "name": "Department of Psychology",
        "ranking": "#=57 Globally in QS Psychology 2026",
        "description": "Cognitive psychology, clinical psychology, developmental neuroscience, and cyberpsychology."
      ,
    "logoText": "UB",
    "logoBg": "from-blue-700 to-indigo-950",
    "degreesOffered": ["Undergraduate", "Graduate", "PhD"],
    "tags": ["United Kingdom", "Europe", "International", "Research"],
    "requiresSeparateApp": true}
    ],
    "allScholarshipsList": [,

      {
        "id": "uni-087-1",
        "title": "Bath International Excellence Scholarship",
        "amount": "£8,000 / year (Up to £24,000 total over 3 years)",
        "coverage": "Partial Aid",
        "eligibility": "High-achieving overseas fee-paying undergraduate offer holders (up to 300 competitive awards available).",
        "description": "Major tuition fee award providing £8,000 per academic year (£24,000 total across 3 years) for up to 300 outstanding international undergraduate students. Active intake applications are reviewed in competitive cycles up to June 30.",
        "deadline": "June 30 (Active 2026/27 Intake Cycle Deadline)",
        "requiresSeparateApp": true
      ,
    "logoText": "UB",
    "logoBg": "from-blue-700 to-indigo-950",
    "degreesOffered": ["Undergraduate", "Graduate", "PhD"]},

      {
        "id": "uni-087-2",
        "title": "Gold Scholarship Programme",
        "amount": "Up to £5,000 / year Financial Support",
        "coverage": "Partial Aid",
        "eligibility": "UK / Home fee-status undergraduate students meeting household income (<= £30,000) and widening participation criteria (Overseas / International applicants are NOT eligible).",
        "description": "Bursary package offering up to £5,000 per year alongside mentoring. Restricted exclusively to UK/Home fee-status students; international fee-paying students are ineligible.",
        "deadline": "June 30",
        "requiresSeparateApp": true
      }
    ],
    "degreesOffered": [
      "Bachelors",
      "Masters",
      "PhD"
    ],
    "tags": [
      "QS Top 125 Global",
      "Top 10 UK CUG",
      "Triple Gold TEF",
      "#13 Sports World",
      "Bath UK",
      "UK"
    ],
    "requiresSeparateApp": true,
    "logoText": "BTH",
    "logoBg": "from-sky-950 to-blue-900"
  },

  {
    "id": "uni-088",
    "universityName": "University of Leicester",
    "location": "Leicester, England, United Kingdom",
    "country": "United Kingdom",
    "flag": "🇬🇧",
    "foundingYear": "1921",
    "scholarshipTitle": "International Tuition Fee Waiver & Merit Scholarships",
    "ranking": "#=314 Global (QS 2027) | #26 Archaeology Globally (QS)",
    "qsSubjectRankings": "Archaeology =26th (Global) | Clinical Medicine #187 (Global) | English Language & Literature #101–150 (Global) | Communication & Media Studies #101–150 (Global) | Psychology #251–300 (Global)",
    "coverage": "Full Tuition",
    "amountValue": "100% Full Tuition Waiver (30 Awards) or £5,000/yr Merit Scholarship",
    "tuitionFee": "Course-Specific Overseas Tuition (£22,200 – £26,550/yr) | Standard UCAS App Fee: £34.50",
    "tuitionAmountNumeric": 24000,
    "hasFullRide": false,
    "hasPartialAid": true,
    "hasFinancialAid": true,
    "financialAidType": "Merit-Based",
    "financialAidDetails": "The University of Leicester is a major UK research university ranked #=314 globally in QS 2027. Leicester is world-famous for Archaeology (=26th globally), Clinical Medicine (#187 globally), English Language & Literature (#101-150 globally), Communication & Media Studies (#101-150 globally), and Psychology (#251-300 globally). International financial aid is exceptionally strong, featuring 30 full 100% tuition fee waivers for September 2026, alongside automatic £5,000/year International Merit Scholarships and £3,000/year Chancellor's Scholarships. Undergraduate applications must strictly use the UCAS portal (Standard UCAS Fee: £34.50; Common App is NOT accepted).",
    "minGpa": "3.5+",
    "minSat": "1320 - 1450 (SAT / ABB A-Levels)",
    "satRequirementCategory": "Optional",
    "satPolicyDetails": "Undergraduate entry requires A-Levels (AAB to ABB; CS BSc requires ABB with Math grade B/5 GCSE) or IB (30–34 points). US applicants require 1320+ SAT or 28+ ACT + 3 AP exam scores of 4. Dedicated foundation routes available for Pakistani qualifications. All undergraduate applications must be submitted strictly via UCAS (Standard UCAS Fee: £34.50). Common App is NOT accepted. Postgraduate applications use Leicester's direct online portal. English requirement: IELTS 6.5.",
    "minIelts": "6.5",
    "ieltsCategory": "6.5",
    "toeflRequirement": "88+ iBT",
    "commonAppAccepted": false,
    "applicationPortalDetails": "UCAS Portal Required strictly for full-time undergraduates (Standard UCAS Fee: £34.50). Common App is NOT accepted.",
    "acceptanceRate": "70% - 72%",
    "deadline": "Jan 13 (UCAS Equal-Consideration) / May 29 (100% Tuition Fee Waiver)",
    "description": "Top UK research university ranked #=314 globally in QS 2027. World leader in Archaeology (=26th) and Clinical Medicine (#187).",
    "overviewLong": "The University of Leicester is a leading public research university located in Leicester, England. QS ranks Leicester #=314 globally in 2027. Key academic strengths include Archaeology (=26th globally), Clinical Medicine (#187 globally), English Language & Literature (#101–150 globally), Communication & Media Studies (#101–150 globally), and Psychology (#251–300 globally).",
    "topProgramsList": [
      {
        "name": "Archaeology",
        "ranking": "=26th",
        "description": "Leicester's flagship program globally. Climbed into the absolute international elite tier. Taught via the world-renowned School of Archaeology and Ancient History, scoring exceptionally high for global research quality and excavation citations."
      },
      {
        "name": "Clinical Medicine",
        "ranking": "#187",
        "description": "Placed firmly within the global top 200. Driven by massive biomedical funding blocks, pioneering health science papers, and integration with regional NHS hospital trusts."
      },
      {
        "name": "English Language & Literature",
        "ranking": "#101–150 Band",
        "description": "Confirmed securely in the world's upper echelon, propelled by very strong academic peer review indicators and literary history archives."
      },
      {
        "name": "Communication & Media Studies",
        "ranking": "#101–150 Band",
        "description": "Matches the high-tier English placement globally. Renowned for its School of Media, Communication and Sociology, which pulls high scores for research output regarding digital policy and media structures."
      },
      {
        "name": "Psychology",
        "ranking": "#251–300 Band",
        "description": "Closes out Leicester's top 5 list. It shows steady multi-year ranking improvements fueled by a major institutional rise in behavioral neuroscience citation indices."
      }
    ],
    "allScholarshipsList": [

      {
        "id": "uni-088-1",
        "title": "International Undergraduate Tuition Fee Waiver",
        "amount": "100% Full Tuition Fee Waiver (30 Awards)",
        "coverage": "Full Tuition",
        "eligibility": "High-achieving international fee-paying undergraduate applicants achieving two grades above standard offer.",
        "description": "Prestigious award covering 100% of international undergraduate tuition fees across degree duration for 30 outstanding applicants.",
        "deadline": "May 29",
        "requiresSeparateApp": true
      ,
    "logoText": "UL",
    "logoBg": "from-blue-700 to-indigo-950",
    "degreesOffered": ["Undergraduate", "Graduate", "PhD"]},

      {
        "id": "uni-088-2",
        "title": "International Merit Scholarship",
        "amount": "£5,000 / year Tuition Discount",
        "coverage": "Partial Aid",
        "eligibility": "Eligible international fee-paying undergraduate offer holders.",
        "description": "Automatic £5,000 per year tuition fee reduction for eligible international undergraduate students.",
        "deadline": "Automatic upon UCAS offer",
        "requiresSeparateApp": false
      ,
    "logoText": "UL",
    "logoBg": "from-blue-700 to-indigo-950",
    "degreesOffered": ["Undergraduate", "Graduate", "PhD"]},

      {
        "id": "uni-088-3",
        "title": "Chancellor's International Scholarship",
        "amount": "£3,000 / year Tuition Discount",
        "coverage": "Partial Aid",
        "eligibility": "International undergraduate offer holders meeting academic entry criteria.",
        "description": "Automatic £3,000 annual tuition fee reduction applied across degree duration.",
        "deadline": "Automatic upon UCAS offer",
        "requiresSeparateApp": false
      }
    ],
    "degreesOffered": [
      "Bachelors",
      "Masters",
      "PhD"
    ],
    "tags": [
      "QS Top 315 Global",
      "Top 35 UK CUG",
      "100% Tuition Waiver",
      "#6 Medicine UK",
      "Leicester UK",
      "UK"
    ],
    "requiresSeparateApp": true,
    "logoText": "LEI",
    "logoBg": "from-emerald-950 to-teal-900"
  },

  {
    "id": "uni-089",
    "universityName": "University of St Andrews",
    "location": "St Andrews, Scotland, United Kingdom",
    "country": "United Kingdom",
    "flag": "🇬🇧",
    "foundingYear": "1413",
    "scholarshipTitle": "International Undergraduate Scholarships & St Andrews Access Award",
    "ranking": "#=115 Global (QS 2027) | #4 UK Complete University Guide 2027 | #1 in Scotland | #2 UK Guardian & Times 2026",
    "qsSubjectRankings": "Mathematics & Statistics (#1 UK CUG) | Computer Science (#3 UK Guardian) | Philosophy (#12 Global) | Theology & Divinity (#13 Global) | English (#40 Global)",
    "coverage": "Partial Aid",
    "amountValue": "Course & Merit-Specific International Tuition Scholarships",
    "tuitionFee": "Course-Specific Overseas Tuition (£33,250/yr Arts/Science; £39,620 Medicine) | Standard UCAS App Fee: £34.50",
    "tuitionAmountNumeric": 33250,
    "hasFullRide": false,
    "hasPartialAid": true,
    "hasFinancialAid": true,
    "financialAidType": "Merit-Based",
    "financialAidDetails": "The University of St Andrews is Scotland's oldest university, founded in 1413, ranked #=115 globally in QS 2027, #4 in the UK (and #1 in Scotland) by Complete University Guide 2027, and #2 in the UK by The Guardian and The Times 2026. St Andrews holds 11 global top-50 QS subjects and 24 UK top-10 CUG subjects, including #1 in the UK for Mathematics & Statistics, #3 in the UK for Computer Science (Guardian 2026), #12 globally in Philosophy, and #13 in Theology. Scottish undergraduate honours degrees run across 4 years. International financial aid includes competitive International Undergraduate Scholarships and the St Andrews Access Award. Undergraduate applications must strictly use the UCAS portal (Standard UCAS Fee: £34.50; Common App is NOT accepted).",
    "minGpa": "3.9+",
    "minSat": "1450 - 1550 (SAT / A*AA-AAB A-Levels)",
    "satRequirementCategory": "Optional",
    "satPolicyDetails": "Undergraduate entry is highly selective (Computer Science & Math require A*AA to AAB). Entry requires A-Levels (A*A*A to AAB) or IB (36–38 points). US applicants require 1450+ SAT or 33+ ACT + 3 to 4 AP exam scores of 5. Standard undergraduate degrees run for 4 years in Scotland. All undergraduate applications must be submitted strictly via UCAS (Standard UCAS Fee: £34.50). Common App is NOT accepted. Postgraduate and International Year One applications use direct portals. English requirement: IELTS 7.0.",
    "minIelts": "7.0",
    "ieltsCategory": "7.0",
    "toeflRequirement": "94+ iBT",
    "commonAppAccepted": false,
    "applicationPortalDetails": "UCAS Portal Required strictly for full-time undergraduates (Standard UCAS Fee: £34.50). Common App is NOT accepted.",
    "acceptanceRate": "8% - 11%",
    "deadline": "Jan 13 (UCAS Equal-Consideration) / March 31 (International Undergraduate Scholarships)",
    "description": "Scotland's oldest university founded in 1413 ranked #=115 globally in QS 2027 & #1 in Scotland (#4 UK CUG). Ranked #1 in UK for Mathematics & #3 in UK for Computer Science. Offers prestigious international scholarships.",
    "overviewLong": "The University of St Andrews is Scotland's oldest university and the third-oldest in the English-speaking world, founded in 1413 in the historic coastal town of St Andrews, Scotland. QS ranks St Andrews #=115 globally in 2027, while domestic league tables place St Andrews #4 in the UK (and #1 in Scotland) in Complete University Guide 2027, and #2 in the UK in both The Guardian and The Times 2026.\n\nSt Andrews features 11 global top-50 QS subjects and 24 UK top-10 CUG subjects, including Mathematics & Statistics (#1 in the UK CUG 2027), Computer Science (#3 in the UK Guardian 2026), Philosophy (#12 globally / #4 UK), Theology & Divinity (#13 globally / #4 UK), English Literature (#40 globally / top 3 UK), History (#45 globally), Physics, Chemistry, and Psychology. Standard Scottish honours degrees run over 4 years.\n\nUndergraduate admission uses UCAS strictly (Standard UCAS Fee £34.50; Common App is NOT accepted). Financial aid includes competitive International Undergraduate Scholarships and St Andrews Access Awards.",
    "topProgramsList": [
      {
        "name": "Department of Mathematics & Statistics",
        "ranking": "#1 in the UK in Complete University Guide 2027",
        "description": "Pure mathematics, applied mathematics, statistics, financial math, and mathematical biology."
      },
      {
        "name": "School of Computer Science",
        "ranking": "#3 in the UK in Guardian University Guide 2026",
        "description": "Theoretical computer science, programming languages, artificial intelligence, software engineering, and systems."
      },
      {
        "name": "Department of Philosophy",
        "ranking": "#12 Globally in QS Philosophy 2026 (#4 UK)",
        "description": "Epistemology, metaphysics, logic, moral philosophy, and political philosophy."
      },
      {
        "name": "School of Divinity & Theology",
        "ranking": "#13 Globally in QS Theology 2026 (#4 UK)",
        "description": "Biblical studies, systematic theology, church history, and theological ethics."
      },
      {
        "name": "School of English & School of History",
        "ranking": "#40 English / #45 History Globally in QS 2026",
        "description": "Medieval history, modern history, world literature, creative writing, and Scottish studies."
      ,
    "logoText": "USA",
    "logoBg": "from-emerald-700 to-teal-950",
    "degreesOffered": ["Undergraduate", "Graduate", "PhD"],
    "tags": ["United Kingdom", "Europe", "International", "Research"],
    "requiresSeparateApp": true}
    ],
    "allScholarshipsList": [,

      {
        "id": "uni-089-1",
        "title": "St Andrews International Undergraduate Scholarship",
        "amount": "Course & Merit-Specific Tuition Award",
        "coverage": "Partial Aid",
        "eligibility": "Overseas-fee paying undergraduate applicants entering Year 1.",
        "description": "Competitive international merit award providing partial tuition fee coverage for outstanding overseas undergraduate students.",
        "deadline": "March 31",
        "requiresSeparateApp": true
      ,
    "logoText": "UA",
    "logoBg": "from-blue-700 to-indigo-950",
    "degreesOffered": ["Undergraduate", "Graduate", "PhD"]},

      {
        "id": "uni-089-2",
        "title": "St Andrews Access Award",
        "amount": "Financial Need & Maintenance Support Package",
        "coverage": "Partial Aid",
        "eligibility": "Undergraduate students demonstrating financial need meeting household income criteria.",
        "description": "Bursary package providing non-repayable maintenance support and accommodation assistance.",
        "deadline": "May 31",
        "requiresSeparateApp": true
      }
    ],
    "degreesOffered": [
      "Bachelors",
      "Masters",
      "PhD"
    ],
    "tags": [
      "QS Top 120 Global",
      "#1 in Scotland",
      "#1 Math UK",
      "#3 CS UK",
      "St Andrews UK",
      "UK"
    ],
    "requiresSeparateApp": true,
    "logoText": "STA",
    "logoBg": "from-blue-950 to-indigo-900"
  },

  {
    "id": "uni-090",
    "universityName": "University of Liverpool",
    "location": "Liverpool, England, United Kingdom",
    "country": "United Kingdom",
    "flag": "🇬🇧",
    "foundingYear": "1881",
    "scholarshipTitle": "Liverpool Excellence & Partner Schools Scholarships",
    "ranking": "#139 Global (QS 2027) | #143 THE 2026 | #101-150 ARWU 2024 | Russell Group Member",
    "qsSubjectRankings": "Veterinary Science (#11 Global / #1 UK Sunday Times) | Anatomy & Physiology (Top 50 Global) | Computer Science (#158 Global QS 2026 - Up 65 Places) | Medicine, Chemistry & Archaeology Top 100",
    "coverage": "Partial Aid",
    "amountValue": "£7,500 – £10,000 First-Year Tuition Discounts",
    "tuitionFee": "Course-Specific Overseas Tuition (£24,000 – £30,000/yr) | Standard UCAS App Fee: £34.50",
    "tuitionAmountNumeric": 26000,
    "hasFullRide": false,
    "hasPartialAid": true,
    "hasFinancialAid": true,
    "financialAidType": "Merit-Based",
    "financialAidDetails": "The University of Liverpool is an original redbrick Russell Group research university founded in 1881, ranked #139 globally in QS 2027 and #143 in THE 2026. Liverpool features 12 global top-100 QS subjects, led by Veterinary Science (#11 globally / #1 UK Sunday Times 2025), Anatomy & Physiology (global top 50), Medicine, Chemistry, Archaeology, Biological Sciences, and Computer Science (#158 globally in QS 2026, rising 65 places). International financial aid features the flagship automatic Liverpool Excellence Scholarship (£7,500 automatic first-year tuition discount for AAA or equivalent achievers, no separate application required). Additionally, international applicants from designated partner schools/colleges may be considered for the Partner Schools Scholarship (£10,000 first-year award based on institutional eligibility and recommendation). Undergraduate applications must strictly use the UCAS portal (Standard UCAS Fee: £34.50; Common App is NOT accepted). Direct online portals are used for postgraduate study.",
    "minGpa": "3.6+",
    "minSat": "1350 - 1480 (SAT / AAA-AAB A-Levels)",
    "satRequirementCategory": "Optional",
    "satPolicyDetails": "Undergraduate entry requires A-Levels (AAA to AAB; BSc Computer Science requires AAA/AAB with Math or CS) or IB (34–36 points). US applicants require 1350+ SAT or 29+ ACT + 3 AP exam scores of 4+. Intermediate/HSSC holders are advised to take a University of Liverpool International College Foundation Certificate before Year 1. All undergraduate applications must be submitted strictly via UCAS (Standard UCAS Fee: £34.50). Common App is NOT accepted. Postgraduate applications use Liverpool's direct online portal. English requirement: IELTS 6.0–6.5 (minimum 5.5 in sub-scores).",
    "minIelts": "6.0",
    "ieltsCategory": "6.0",
    "toeflRequirement": "88+ iBT",
    "commonAppAccepted": false,
    "applicationPortalDetails": "UCAS Portal Required strictly for full-time undergraduates (Standard UCAS Fee: £34.50). Common App is NOT accepted.",
    "acceptanceRate": "14% - 18%",
    "deadline": "Jan 13 (UCAS Equal-Consideration) / Automatic for Excellence Scholarship",
    "description": "Russell Group founding university ranked #139 globally in QS 2027. World leader in Veterinary Science (#11), Anatomy & Physiology (Top 50) & Computer Science (#158). Offers £7,500 - £10,000 tuition discounts.",
    "overviewLong": "The University of Liverpool is a premier redbrick Russell Group research institution located in Liverpool, England. QS ranks Liverpool #139 globally in 2027, while THE ranks it #143 and ARWU places it in the global top 101–150 band. With over 30,000 students from 135+ countries, Liverpool offers world-class facilities in a vibrant, affordable UK student city.\n\nLiverpool boasts 12 global top-100 QS subjects, including Veterinary Science (#11 globally / #1 in the UK by Sunday Times 2025), Anatomy & Physiology (top 50 globally), Medicine, Chemistry, Archaeology, Biological Sciences, English, Classics, and Computer Science (#158 globally in QS 2026, up 65 places). CS specialization options include AI, Cyber Security, Data Science, Algorithms, and Software Engineering.\n\nUndergraduate admission uses UCAS strictly (Standard UCAS Fee £34.50; Common App is NOT accepted). Financial aid is anchored by the primary flagship automatic Liverpool Excellence Scholarship (£7,500 tuition discount for AAA achievers) alongside designated Partner Schools Scholarships (£10,000 awards for students from eligible partner institutions).",
    "topProgramsList": [
      {
        "name": "School of Veterinary Science",
        "ranking": "#11 Globally in QS / #1 in Sunday Times UK 2025",
        "description": "Veterinary medicine, Leahurst clinical research campus, animal surgery, and veterinary science."
      },
      {
        "name": "Department of Computer Science",
        "ranking": "#158 Globally in QS CS 2026 (Up 65 Places)",
        "description": "Artificial intelligence, cybersecurity, data science, algorithms, software development, and robotics."
      },
      {
        "name": "School of Medicine & Life Sciences",
        "ranking": "Global Top 50 Anatomy & Physiology / Top 100 Medicine",
        "description": "Clinical medicine, pharmacology, human anatomy, physiology, biological sciences, and biochemistry."
      },
      {
        "name": "Department of Chemistry & Materials",
        "ranking": "Global Top 100 in QS Chemistry 2026",
        "description": "Materials chemistry, renewable energy storage, synthetic chemistry, and nanoscience."
      },
      {
        "name": "Department of Archaeology, Classics & Egyptology",
        "ranking": "Global Top 100 in QS Archaeology & Classics 2026",
        "description": "Egyptian archaeology, classical antiquity, human evolution, and heritage science."
      ,
    "logoText": "UL",
    "logoBg": "from-purple-700 to-indigo-950",
    "degreesOffered": ["Undergraduate", "Graduate", "PhD"],
    "tags": ["United Kingdom", "Europe", "International", "Research"],
    "requiresSeparateApp": true}
    ],
    "allScholarshipsList": [,

      {
        "id": "uni-090-1",
        "title": "Liverpool Excellence Scholarship for Undergraduates",
        "amount": "£7,500 First-Year Tuition Fee Discount",
        "coverage": "Partial Aid",
        "eligibility": "High-achieving international fee-paying undergraduate applicants achieving AAA or equivalent grades.",
        "description": "Automatic £7,500 first-year tuition fee reduction for eligible international undergraduate students achieving AAA or equivalent entry grades.",
        "deadline": "Automatic upon UCAS offer",
        "requiresSeparateApp": false
      ,
    "logoText": "UL",
    "logoBg": "from-blue-700 to-indigo-950",
    "degreesOffered": ["Undergraduate", "Graduate", "PhD"]},

      {
        "id": "uni-090-2",
        "title": "University of Liverpool Partner Schools Scholarship",
        "amount": "£10,000 First-Year Tuition Award",
        "coverage": "Partial Aid",
        "eligibility": "High-achieving international fee-paying undergraduate applicants progressing from designated institutional partner schools/colleges.",
        "description": "Competitive partner award providing £10,000 toward first-year international undergraduate tuition fees for nominated students from designated partner institutions. (The primary automatic award for general international applicants is the £7,500 Liverpool Excellence Scholarship).",
        "deadline": "May 31",
        "requiresSeparateApp": true
      }
    ],
    "degreesOffered": [
      "Bachelors",
      "Masters",
      "PhD"
    ],
    "tags": [
      "QS Top 140 Global",
      "Russell Group",
      "#11 Veterinary World",
      "Liverpool UK",
      "UK"
    ],
    "requiresSeparateApp": false,
    "logoText": "LIV",
    "logoBg": "from-red-950 to-rose-900"
  },

  {
    "id": "uni-091",
    "universityName": "Newcastle University",
    "location": "Newcastle upon Tyne, England, United Kingdom",
    "country": "United Kingdom",
    "flag": "🇬🇧",
    "foundingYear": "1834",
    "scholarshipTitle": "Vice-Chancellor's International & Pakistan Future Leaders Scholarships",
    "ranking": "#149 Global (QS 2027) | #144 THE 2026 | #56 QS Sustainability 2025 | Russell Group Member",
    "qsSubjectRankings": "Geography (#22 Global) | Dentistry (#44 Global) | English (#65 Global) | Medicine (#88 Global) | Environmental Sciences (#97 Global) | Computer Science Top 180 Global (BCS Accredited & UK Cyber Centre of Excellence)",
    "coverage": "Partial Aid",
    "amountValue": "£7,000 / year (Full Degree Duration) or £10,000 Pakistan Future Leaders Award",
    "tuitionFee": "Course-Specific Overseas Tuition (£25,000 – £31,500/yr CS BSc) | Standard UCAS App Fee: £34.50",
    "tuitionAmountNumeric": 28000,
    "hasFullRide": false,
    "hasPartialAid": true,
    "hasFinancialAid": true,
    "financialAidType": "Merit-Based",
    "financialAidDetails": "Newcastle University is a elite Russell Group research university founded in 1834, ranked #149 globally in QS 2027 and #144 in THE 2026. Newcastle features 10 global top-100 QS subjects, led by Geography (#22 globally), Dentistry (#44 globally), English Language & Literature (#65), Medicine (#88), Environmental Sciences (#97), Architecture, and Computer Science (Top 180 globally, BCS Accredited, UK Academic Centre of Excellence in Cyber Security Research, and home to the £58m Urban Sciences Building and National Edge AI Hub). International financial aid is exceptionally strong: Vice-Chancellor's International Scholarships provide £7,000 per academic year for the full degree duration, while the Pakistan Future Leaders Scholarship awards £10,000. Vice-Chancellor's Excellence Awards cover up to 50% tuition. Undergraduate applications must strictly use the UCAS portal (Standard UCAS Fee: £34.50; Common App is NOT accepted).",
    "minGpa": "3.6+",
    "minSat": "1340 - 1460 (SAT / AAB-ABB A-Levels)",
    "satRequirementCategory": "Optional",
    "satPolicyDetails": "Undergraduate entry requires A-Levels (AAB to ABB; Computer Science BSc requires AAB) or IB (34 points). US applicants require 1340+ SAT or 28+ ACT + 3 AP exam scores of 4+. Course-specific foundation entry available via INTO Newcastle for students with national high school certificates. All undergraduate applications must be submitted strictly via UCAS (Standard UCAS Fee: £34.50). Common App is NOT accepted. Postgraduate applications use Newcastle's direct online portal. English requirement: IELTS 6.5.",
    "minIelts": "6.5",
    "ieltsCategory": "6.5",
    "toeflRequirement": "90+ iBT",
    "commonAppAccepted": false,
    "applicationPortalDetails": "UCAS Portal Required strictly for full-time undergraduates (Standard UCAS Fee: £34.50). Common App is NOT accepted.",
    "acceptanceRate": "18% - 22%",
    "deadline": "Jan 13 (UCAS Equal-Consideration) / April 2 (Vice-Chancellor's Excellence Round 2)",
    "description": "Top 150 global Russell Group university ranked #149 in QS 2027. World leader in Geography (#22), Dentistry (#44), Medicine (#88) & Cyber Security (UK Centre of Excellence). Offers £7k/yr & 50% Tuition Scholarships.",
    "overviewLong": "Newcastle University is a world-class Russell Group university situated in the heart of Newcastle upon Tyne, England. QS ranks Newcastle #149 globally in 2027 and #56 globally for Sustainability, while THE ranks it #144. Newcastle is consistently ranked among the UK's top 5 student cities, providing a high quality of student life with affordable living costs.\n\nNewcastle boasts 10 global top-100 QS subjects: Geography (#22 globally), Dentistry (#44), English Literature (#65), Medicine (#88), Environmental Sciences (#97), Archaeology, Architecture, and Engineering (Top 150). The School of Computing is based in the £58m Urban Sciences Building at Newcastle Helix, offering BCS-accredited degrees in AI, Cybersecurity (UK Centre of Excellence), Game Engineering, and Data Science.\n\nUndergraduate admission uses UCAS strictly (Standard UCAS Fee £34.50; Common App is NOT accepted). Financial aid includes Vice-Chancellor's International Scholarships (£7,000/year recurring), Pakistan Future Leaders Awards (£10,000), and 50% Vice-Chancellor's Excellence Awards.",
    "topProgramsList": [
      {
        "name": "Department of Geography & Environmental Sciences",
        "ranking": "#22 Globally in QS Geography 2026 / #97 Environmental",
        "description": "Human geography, physical geography, climate change, environmental sustainability, and GIS."
      },
      {
        "name": "School of Dental Sciences",
        "ranking": "#44 Globally in QS Dentistry 2026",
        "description": "Clinical dentistry, dental surgery, oral health sciences, and restorative dentistry."
      },
      {
        "name": "School of Computing",
        "ranking": "Top 180 Globally / UK Cyber Security Centre of Excellence",
        "description": "Artificial intelligence, cybersecurity, game engineering, data science, software engineering, and edge AI."
      },
      {
        "name": "School of Medicine",
        "ranking": "#88 Globally in QS Medicine 2026",
        "description": "Clinical medicine, medical sciences, biomedical research, and global health."
      },
      {
        "name": "School of Architecture, Planning & Landscape",
        "ranking": "Global Top 100 in QS Architecture 2026",
        "description": "Architecture, urban planning, landscape architecture, and spatial design."
      ,
    "logoText": "NU",
    "logoBg": "from-sky-700 to-blue-900",
    "degreesOffered": ["Undergraduate", "Graduate", "PhD"],
    "tags": ["United Kingdom", "Europe", "International", "Research"],
    "requiresSeparateApp": true}
    ],
    "allScholarshipsList": [,

      {
        "id": "uni-091-1",
        "title": "Vice-Chancellor's International Scholarship",
        "amount": "£7,000 / year (Full Degree Duration)",
        "coverage": "Partial Aid",
        "eligibility": "Eligible international fee-paying undergraduate applicants starting September 2026.",
        "description": "Annual tuition fee discount of £7,000 awarded for each academic year across the full duration of undergraduate study.",
        "deadline": "Automatic upon UCAS offer",
        "requiresSeparateApp": false
      ,
    "logoText": "NU",
    "logoBg": "from-blue-700 to-indigo-950",
    "degreesOffered": ["Undergraduate", "Graduate", "PhD"]},

      {
        "id": "uni-091-2",
        "title": "Newcastle University Pakistan Future Leaders Scholarship",
        "amount": "£10,000 Tuition Award",
        "coverage": "Partial Aid",
        "eligibility": "High-achieving Pakistani undergraduate applicants starting a full-time degree at Newcastle.",
        "description": "Prestigious tuition award providing £10,000 toward international undergraduate tuition fees for Pakistani offer holders.",
        "deadline": "Automatic upon UCAS offer",
        "requiresSeparateApp": false
      ,
    "logoText": "NU",
    "logoBg": "from-blue-700 to-indigo-950",
    "degreesOffered": ["Undergraduate", "Graduate", "PhD"]},

      {
        "id": "uni-091-3",
        "title": "Vice-Chancellor's Excellence Scholarship",
        "amount": "Up to 50% Tuition Fee Waiver",
        "coverage": "Partial Aid",
        "eligibility": "Outstanding international undergraduate offer holders demonstrating exceptional academic merit.",
        "description": "Competitive merit scholarship covering up to 50% of annual international tuition fees across degree duration.",
        "deadline": "April 2",
        "requiresSeparateApp": true
      }
    ],
    "degreesOffered": [
      "Bachelors",
      "Masters",
      "PhD"
    ],
    "tags": [
      "QS Top 150 Global",
      "Russell Group",
      "#22 Geography World",
      "Newcastle UK",
      "UK"
    ],
    "requiresSeparateApp": true,
    "logoText": "NCL",
    "logoBg": "from-blue-950 to-slate-900"
  },

  {
    "id": "uni-092",
    "universityName": "University of Southampton",
    "location": "Southampton, England, United Kingdom",
    "country": "United Kingdom",
    "flag": "🇬🇧",
    "foundingYear": "1862",
    "scholarshipTitle": "International Merit & ECS Global Scholarships",
    "ranking": "#=111 Global (QS 2027) | #87 QS 2026 | #129 THE 2026 | #15 Complete University Guide 2027 | Russell Group Founding Member",
    "qsSubjectRankings": "Nursing (#13 Global) | Archaeology (#36 Global) | Earth & Marine Sciences (#40 Global) | Physics & Astronomy (#75 Global) | Medicine (#81 Global) | Electrical Engineering (#83 Global) | Mechanical/Aero (#93 Global)",
    "coverage": "Partial Aid",
    "amountValue": "Up to £4,500 First-Year Tuition Discount & Subject Merit Awards",
    "tuitionFee": "Course-Specific Overseas Tuition (£24,000 – £31,000/yr) | Standard UCAS App Fee: £34.50",
    "tuitionAmountNumeric": 27500,
    "hasFullRide": false,
    "hasPartialAid": true,
    "hasFinancialAid": true,
    "financialAidType": "Merit-Based",
    "financialAidDetails": "The University of Southampton is a founding Russell Group research powerhouse established in 1862, ranked #=111 globally in QS 2027 (#87 in QS 2026), #129 in THE 2026, and #15 in the UK Complete University Guide 2027. 92% of Southampton's research is world-leading (REF 2021). Southampton is a global STEM pioneer in photonics, fibre optics, AI, electronics, cybersecurity, and ocean science. Standout QS subjects include Nursing (#13 globally), Archaeology (#36), Earth & Marine Sciences (#40), Physics & Astronomy (#75), Medicine (#81), Electrical & Electronic Engineering (#83), and Mechanical/Aeronautical Engineering (#93). The School of Electronics and Computer Science (ECS) offers world-class CS and AI degrees. International financial aid includes International Merit Scholarships (up to £4,500 tuition discount) and ECS Global Scholarships. Undergraduate applications must strictly use the UCAS portal (Standard UCAS Fee: £34.50; Common App is NOT accepted).",
    "minGpa": "3.7+",
    "minSat": "1380 - 1500 (SAT / AAA-A*AA A-Levels)",
    "satRequirementCategory": "Optional",
    "satPolicyDetails": "Undergraduate entry requires A-Levels (A*AA to AAA for CS/Engineering) or IB (36–38 points). US applicants require 1380+ SAT or 30+ ACT + 3 to 4 AP exam scores of 4–5. Science, Engineering, and Math foundation routes available for international students requiring pathway preparation. All undergraduate applications must be submitted strictly via UCAS (Standard UCAS Fee: £34.50). Common App is NOT accepted. Postgraduate applications use Southampton's direct online portal. English requirement: IELTS 6.5.",
    "minIelts": "6.5",
    "ieltsCategory": "6.5",
    "toeflRequirement": "92+ iBT",
    "commonAppAccepted": false,
    "applicationPortalDetails": "UCAS Portal Required strictly for full-time undergraduates (Standard UCAS Fee: £34.50). Common App is NOT accepted.",
    "acceptanceRate": "15% - 18%",
    "deadline": "Jan 13 (UCAS Equal-Consideration) / Automatic for Merit Scholarships",
    "description": "Founding Russell Group research university ranked #=111 globally in QS 2027 & #15 in UK (CUG 2027). Global pioneer in Photonics, AI & Electronics. World Top 15 Nursing (#13) & Top 40 Earth Sciences (#40).",
    "overviewLong": "The University of Southampton is a premier Russell Group research institution located on the south coast of England in Southampton, UK. QS ranks Southampton #=111 globally in 2027 (#87 in 2026), THE ranks it #129 globally, and domestic league tables place Southampton #15 in the UK (CUG 2027). 92% of Southampton's research was rated world-leading or internationally excellent in REF 2021.\n\nSouthampton is world-renowned for its School of Electronics and Computer Science (ECS), pioneering optical fiber communications, artificial intelligence, cybersecurity, and web science. Global top-100 QS subjects include Nursing (#13 globally), Archaeology (#36), Earth & Marine Sciences (#40), Physics & Astronomy (#75), Medicine (#81), Electrical & Electronic Engineering (#83), Mechanical/Aeronautical Engineering (#93), and Accounting & Finance (#97).\n\nUndergraduate admission uses UCAS strictly (Standard UCAS Fee £34.50; Common App is NOT accepted). Financial aid includes International Merit Scholarships (up to £4,500 first-year tuition discount) and ECS Global Scholarships.",
    "topProgramsList": [
      {
        "name": "School of Electronics and Computer Science (ECS)",
        "ranking": "Global Pioneer in Photonics, Fibre Optics, AI & CS",
        "description": "Computer science, artificial intelligence, cybersecurity, software engineering, electronic engineering, and web science."
      },
      {
        "name": "School of Health Sciences (Nursing)",
        "ranking": "#13 Globally in QS Nursing 2025",
        "description": "Adult nursing, child nursing, mental health nursing, and healthcare science."
      },
      {
        "name": "School of Ocean and Earth Science (NOCS)",
        "ranking": "#40 Globally in QS Earth & Marine Sciences 2025",
        "description": "Oceanography, marine biology, geology, geophysics, and ocean science."
      },
      {
        "name": "School of Engineering (Aero, Mech, Civil, Maritime)",
        "ranking": "#83 Electrical / #93 Mechanical & Aero Globally",
        "description": "Aeronautics, astronautics, mechanical engineering, maritime engineering, and acoustics."
      },
      {
        "name": "School of Physics & Astronomy",
        "ranking": "#75 Globally in QS Physics & Astronomy 2025",
        "description": "Astrophysics, theoretical physics, quantum optics, and astronomy."
      ,
    "logoText": "US",
    "logoBg": "from-purple-700 to-indigo-950",
    "degreesOffered": ["Undergraduate", "Graduate", "PhD"],
    "tags": ["United Kingdom", "Europe", "International", "Research"],
    "requiresSeparateApp": true}
    ],
    "allScholarshipsList": [,

      {
        "id": "uni-092-1",
        "title": "Southampton International Merit Scholarship",
        "amount": "Up to £4,500 First-Year Tuition Discount",
        "coverage": "Partial Aid",
        "eligibility": "High-achieving international undergraduate applicants across eligible faculties.",
        "description": "Merit-based first-year tuition fee reduction of up to £4,500 awarded to outstanding international undergraduate offer holders.",
        "deadline": "Automatic upon UCAS offer",
        "requiresSeparateApp": false
      ,
    "logoText": "US",
    "logoBg": "from-blue-700 to-indigo-950",
    "degreesOffered": ["Undergraduate", "Graduate", "PhD"]},

      {
        "id": "uni-092-2",
        "title": "Electronics & Computer Science (ECS) Global Scholarship",
        "amount": "Faculty Tuition Merit Award",
        "coverage": "Partial Aid",
        "eligibility": "International undergraduate applicants admitted to eligible ECS degrees.",
        "description": "Specialist merit scholarship awarded by the School of Electronics and Computer Science to top international entrants.",
        "deadline": "May 31",
        "requiresSeparateApp": true
      }
    ],
    "degreesOffered": [
      "Bachelors",
      "Masters",
      "PhD"
    ],
    "tags": [
      "QS Top 115 Global",
      "Russell Group",
      "#13 Nursing World",
      "#40 Earth Science World",
      "Southampton UK",
      "UK"
    ],
    "requiresSeparateApp": true,
    "logoText": "SOT",
    "logoBg": "from-cyan-950 to-blue-900"
  },

  {
    "id": "uni-093",
    "universityName": "University of Exeter",
    "location": "Exeter, England, United Kingdom",
    "country": "United Kingdom",
    "flag": "🇬🇧",
    "foundingYear": "1955",
    "scholarshipTitle": "Exeter Excellence & Country-Specific Scholarships",
    "ranking": "#136 Global (QS 2027) | #11 Complete University Guide 2027 | #14 Times 2026 | #17 Guardian 2026 | Triple Gold TEF 2023 | Russell Group Member",
    "qsSubjectRankings": "Sports-Related Subjects (#18 Global / #5 UK) | Geology (#20 Global) | Geophysics (#22 Global) | Environmental Sciences (#23 Global) | Psychology (#82 Global) | Computer Science (#18 UK CUG; £50m AI/Data Science Investment)",
    "coverage": "Partial Aid",
    "amountValue": "£3,000 – £5,000 / year Recurring (Up to £10,000 Combined Tuition Award)",
    "tuitionFee": "Varies by Department & Lab Requirements (£24,900 Business/Arts; £31,200 CS/STEM/Lab-based; £48,900 Medicine for 2026/27 cycle; subject to official fee table indexation) | Standard UCAS App Fee: £34.50",
    "tuitionAmountNumeric": 28000,
    "hasFullRide": false,
    "hasPartialAid": true,
    "hasFinancialAid": true,
    "financialAidType": "Merit-Based",
    "financialAidDetails": "The University of Exeter is a top-tier Russell Group research university ranked #136 globally in QS 2027 (highest ever rank), #11 nationally in Complete University Guide 2027, #14 in The Times 2026, and holding Triple Gold TEF status. Exeter features 11 global top-50 QS subjects, led by Sports-Related Subjects (#18 globally / #5 UK), Geology (#20), Geophysics (#22), Environmental Sciences (#23), Arts & Humanities (#76), and Psychology (#82). Computer Science ranks #18 in the UK (CUG 2026), backed by a £50m AI/Data Science investment and Alan Turing Institute affiliation. International tuition fees vary by department and active cycle (£24,900/yr for classroom-based Business/Humanities; £31,200/yr for lab-based CS/STEM/Ecology; £48,900/yr for Medicine, subject to active cycle fee tables). International financial aid is backed by £7m+ in funding, offering Exeter Excellence Scholarships (£3,000 to £5,000 per year recurring) which can combine with country awards up to £10,000/year. Undergraduate applications must strictly use the UCAS portal (Standard UCAS Fee: £34.50; Common App is NOT accepted).",
    "minGpa": "3.7+",
    "minSat": "1380 - 1490 (SAT / AAA-AAB A-Levels)",
    "satRequirementCategory": "Optional",
    "satPolicyDetails": "Undergraduate entry requires A-Levels (AAA to AAB; CS BSc requires AAA/AAB with Math) or IB (34–36 points). US applicants require 1380+ SAT or 30+ ACT + 3 AP exam scores of 4–5. Dedicated foundation pathways available via INTO Exeter for students holding national high school certificates. All undergraduate applications must be submitted strictly via UCAS (Standard UCAS Fee: £34.50). Common App is NOT accepted. Postgraduate applications use Exeter's direct online portal. English requirement: IELTS 6.5.",
    "minIelts": "6.5",
    "ieltsCategory": "6.5",
    "toeflRequirement": "90+ iBT",
    "commonAppAccepted": false,
    "applicationPortalDetails": "UCAS Portal Required strictly for full-time undergraduates (Standard UCAS Fee: £34.50). Common App is NOT accepted.",
    "acceptanceRate": "12% - 15%",
    "deadline": "Jan 13 (UCAS Equal-Consideration) / May 30 (Exeter Excellence Scholarships)",
    "description": "Top 15 UK Russell Group university (#11 CUG 2027 / #14 Times) & Triple Gold TEF holder ranked #136 globally in QS 2027. World leader in Sports (#18), Geology (#20) & Environmental Sciences (#23). Offers £5k/yr recurring awards.",
    "overviewLong": "The University of Exeter is a leading Russell Group public research university operating scenic campuses at Streatham and St Luke's in Exeter, as well as Penryn and Truro in Cornwall, England. QS ranks Exeter #136 globally in 2027 (highest rank ever), while domestic tables place Exeter #11 in the UK in Complete University Guide 2027, #14 in The Times 2026, and #17 in The Guardian 2026. Exeter holds Triple Gold status in TEF 2023.\n\nExeter boasts 11 global top-50 QS subjects: Sports-Related Subjects (#18 globally / #5 UK), Geology (#20), Geophysics (#22), Environmental Sciences (#23), Arts & Humanities (#76), Psychology (#82), Biological Sciences (#99), and Business & Management (UK top 10). Computer Science ranks #18 in the UK (CUG 2026), backed by £50m in AI capability and Alan Turing Institute research partnerships.\n\nUndergraduate admission uses UCAS strictly (Standard UCAS Fee £34.50; Common App is NOT accepted). Financial aid includes Exeter Excellence Scholarships (£3,000 or £5,000 per year recurring, combinable up to £10,000/year).",
    "topProgramsList": [
      {
        "name": "Department of Public Health & Sport Sciences",
        "ranking": "#18 Globally in QS Sports / #5 UK Times & CUG 2026",
        "description": "Sports science, exercise physiology, biomechanics, sports medicine, and health science."
      },
      {
        "name": "Department of Earth & Environmental Sciences",
        "ranking": "#20 Geology / #22 Geophysics / #23 Environmental Sciences Globally",
        "description": "Geology, geophysics, environmental science, climate dynamics, mining, and renewable energy."
      },
      {
        "name": "University of Exeter Business School",
        "ranking": "UK Top 10 CUG / Triple Accredited (AACSB, EQUIS, AMBA)",
        "description": "Business and management, accounting, finance, economics, and marketing."
      },
      {
        "name": "Department of Computer Science",
        "ranking": "#18 in the UK CUG 2026 / £50m AI & Data Science Investment",
        "description": "Artificial intelligence, machine learning, data science, high-performance computing, and networks."
      },
      {
        "name": "Department of Psychology",
        "ranking": "#82 Globally in QS Psychology 2026",
        "description": "Clinical psychology, cognitive neuroscience, animal behavior, and social psychology."
      ,
    "logoText": "UE",
    "logoBg": "from-teal-700 to-slate-900",
    "degreesOffered": ["Undergraduate", "Graduate", "PhD"],
    "tags": ["United Kingdom", "Europe", "International", "Research"],
    "requiresSeparateApp": true}
    ],
    "allScholarshipsList": [,

      {
        "id": "uni-093-1",
        "title": "Exeter Excellence Scholarship",
        "amount": "£3,000 or £5,000 / year (Recurring Annual Award)",
        "coverage": "Partial Aid",
        "eligibility": "High-achieving international fee-paying undergraduate offer holders.",
        "description": "Recurring annual tuition discount of £3,000 or £5,000 awarded for each eligible academic year across degree duration.",
        "deadline": "May 30",
        "requiresSeparateApp": true
      ,
    "logoText": "UE",
    "logoBg": "from-blue-700 to-indigo-950",
    "degreesOffered": ["Undergraduate", "Graduate", "PhD"]},

      {
        "id": "uni-093-2",
        "title": "Exeter Global Combined Country Scholarship",
        "amount": "Up to £10,000 Combined Annual Tuition Award",
        "coverage": "Partial Aid",
        "eligibility": "Eligible international undergraduate students combining country-specific and Exeter Excellence awards.",
        "description": "Combined funding package providing up to £10,000 toward annual international undergraduate tuition fees.",
        "deadline": "May 30",
        "requiresSeparateApp": true
      }
    ],
    "degreesOffered": [
      "Bachelors",
      "Masters",
      "PhD"
    ],
    "tags": [
      "QS Top 140 Global",
      "Top 15 UK CUG",
      "Triple Gold TEF",
      "#18 Sports World",
      "Exeter UK",
      "UK"
    ],
    "requiresSeparateApp": true,
    "logoText": "EXT",
    "logoBg": "from-emerald-950 to-green-900"
  },

  {
    "id": "uni-094",
    "universityName": "Loughborough University",
    "location": "Loughborough, England, United Kingdom",
    "country": "United Kingdom",
    "flag": "🇬🇧",
    "foundingYear": "1909",
    "scholarshipTitle": "International Excellence & Future Leaders Scholarships",
    "ranking": "#203 Global (QS 2027) | #8 UK (Complete University Guide 2027) | TEF Gold Overall | 90%+ World-Leading REF 2021",
    "qsSubjectRankings": "Sports-Related Subjects (#1 World - 10 Consecutive Years 2017-2026) | Library Science (#22 Global) | Anatomy & Physiology (#38 Global) | Art & Design (#=48 Global) | Mechanical Engineering (#100 Global) | CS Top 20 UK (CUG 2027)",
    "coverage": "Partial Aid",
    "amountValue": "£3,000 / year Recurring or £10,000 First-Year Future Leaders Award",
    "tuitionFee": "Course-Specific Overseas Tuition (£24,700 – £33,000/yr) | Standard UCAS App Fee: £34.50",
    "tuitionAmountNumeric": 28500,
    "hasFullRide": false,
    "hasPartialAid": true,
    "hasFinancialAid": true,
    "financialAidType": "Merit-Based",
    "financialAidDetails": "Loughborough University is a top 10 UK research powerhouse (#8 UK CUG 2027) ranked #203 globally in QS 2027 (highest ever rank) and holding TEF Gold status. World #1 in Sports-Related Subjects for 10 consecutive years (2017–2026). Other global top-100 QS subjects include Library Science (#22), Anatomy & Physiology (#38), Art & Design (#=48), Architecture, Media, Geography, Petroleum, and Mechanical Engineering (#100). Computer Science ranks in the UK top 20 (CUG 2027) with 100% world-leading research impact (REF 2021). International scholarships include the automatic International Excellence Scholarship (£3,000/year recurring) and Future Leaders Scholarships (£10,000 first-year award). Undergraduate applications must strictly use the UCAS portal (Standard UCAS Fee: £34.50; Common App is NOT accepted).",
    "minGpa": "3.6+",
    "minSat": "1350 - 1470 (SAT / AAA-ABB A-Levels)",
    "satRequirementCategory": "Optional",
    "satPolicyDetails": "Undergraduate entry requires A-Levels (AAA to ABB; CS/Engineering require AAA/AAB) or IB (34–36 points). US applicants require 1350+ SAT or 29+ ACT + 3 AP exam scores of 4+. Intermediate/HSSC holders are required to complete a suitable Foundation Year before Year 1. All undergraduate applications must be submitted strictly via UCAS (Standard UCAS Fee: £34.50). Common App is NOT accepted. Postgraduate applications use Loughborough direct online portal. English requirement: IELTS 6.5.",
    "minIelts": "6.5",
    "ieltsCategory": "6.5",
    "toeflRequirement": "90+ iBT",
    "commonAppAccepted": false,
    "applicationPortalDetails": "UCAS Portal Required strictly for full-time undergraduates (Standard UCAS Fee: £34.50). Common App is NOT accepted.",
    "acceptanceRate": "20% - 24%",
    "deadline": "Jan 13 (UCAS Equal-Consideration) / Automatic for International Excellence Scholarship",
    "description": "UK Top 10 university (#8 CUG 2027) & TEF Gold holder ranked #203 globally in QS 2027. World #1 for Sports Science for 10 consecutive years. Global Top 50 in Library (#22), Anatomy (#38) & Art (#48). Offers £3k/yr recurring awards.",
    "overviewLong": "Loughborough University is a leading public research university located in Loughborough, Leicestershire, England. Loughborough has ranked in the UK top 10 of the Complete University Guide for over a decade (#8 in CUG 2027), holds TEF Gold overall, and reached its highest global QS rank at #203 in 2027.\n\nLoughborough holds the world #1 spot in Sports-related Subjects for 10 consecutive years (2017–2026) in the QS Subject Rankings. Other world top-100 QS disciplines include Library & Information Management (#22), Anatomy & Physiology (#38), Art & Design (#=48), Architecture, Media, Geography, Petroleum Engineering, and Mechanical Engineering (#100). Computer Science ranks in the UK top 20 (CUG 2027) with 100% world-leading research impact (REF 2021).\n\nUndergraduate admission uses UCAS strictly (Standard UCAS Fee £34.50; Common App is NOT accepted). Financial aid includes the automatic International Excellence Scholarship (£3,000 per year recurring across degree duration) and competitive Future Leaders Scholarships (£10,000 first-year discount).",
    "topProgramsList": [
      {
        "name": "Department of Sport, Exercise and Health Sciences",
        "ranking": "#1 World in QS Sports 10 Years Running / #2 UK CUG 2027",
        "description": "Sports science, exercise physiology, biomechanics, sports psychology, and sports management."
      },
      {
        "name": "School of Mechanical, Electrical and Manufacturing Engineering",
        "ranking": "#100 World in QS Mechanical & Aero Engineering 2026",
        "description": "Aeronautical engineering, automotive engineering, manufacturing, materials, and robotics."
      },
      {
        "name": "Department of Computer Science",
        "ranking": "UK Top 20 CUG 2027 / 100% REF World-Leading Impact",
        "description": "Software engineering, artificial intelligence, data science, algorithms, and cybersecurity."
      },
      {
        "name": "Loughborough School of Design and Creative Arts",
        "ranking": "#=48 World in QS Art & Design 2026",
        "description": "Industrial design, user experience design, graphic design, and fine art."
      },
      {
        "name": "School of Architecture, Building and Civil Engineering",
        "ranking": "Global Top 50-100 in QS Architecture & Built Environment",
        "description": "Architecture, structural engineering, building services, and construction management."
      ,
    "logoText": "LU",
    "logoBg": "from-red-700 to-rose-950",
    "degreesOffered": ["Undergraduate", "Graduate", "PhD"],
    "tags": ["United Kingdom", "Europe", "International", "Research"],
    "requiresSeparateApp": true}
    ],
    "allScholarshipsList": [,

      {
        "id": "uni-094-1",
        "title": "Loughborough International Excellence Scholarship",
        "amount": "£3,000 / year (Recurring Annual Discount)",
        "coverage": "Partial Aid",
        "eligibility": "Eligible international fee-paying undergraduate offer holders evaluated through UCAS application.",
        "description": "Automatic tuition fee reduction of £3,000 awarded for each academic year across the full duration of undergraduate study (excluding placement/study abroad years).",
        "deadline": "Automatic upon UCAS offer",
        "requiresSeparateApp": false
      ,
    "logoText": "LU",
    "logoBg": "from-blue-700 to-indigo-950",
    "degreesOffered": ["Undergraduate", "Graduate", "PhD"]},

      {
        "id": "uni-094-2",
        "title": "Future Leaders Scholarship",
        "amount": "£10,000 First-Year Tuition Award",
        "coverage": "Partial Aid",
        "eligibility": "High-achieving international applicants demonstrating leadership potential and commitment to making an impact.",
        "description": "Prestigious competitive award providing £10,000 toward first-year international undergraduate tuition fees.",
        "deadline": "May 31",
        "requiresSeparateApp": true
      }
    ],
    "degreesOffered": [
      "Bachelors",
      "Masters",
      "PhD"
    ],
    "tags": [
      "QS Top 205 Global",
      "Top 10 UK CUG",
      "TEF Gold",
      "#1 Sport Science World",
      "Loughborough UK",
      "UK"
    ],
    "requiresSeparateApp": true,
    "logoText": "LOU",
    "logoBg": "from-purple-950 to-indigo-900"
  },

  {
    "id": "uni-095",
    "universityName": "University of Dundee",
    "location": "Dundee, Scotland, United Kingdom",
    "country": "United Kingdom",
    "flag": "🇬🇧",
    "foundingYear": "1881",
    "scholarshipTitle": "Vice Chancellor's South Asia & Global Excellence Scholarships",
    "ranking": "#25 UK / #3 Scotland (Complete University Guide 2027) | #26 UK Guardian 2026 | #23 UK Times 2026 | 84% World-Leading REF",
    "qsSubjectRankings": "Bioengineering (#1 UK Times 2026) | Medicine (#2 UK Times 2026 / Joint #1 UK Graduate Prospects) | Dentistry (#2 UK CUG 2027) | Forensic Science (#2 UK CUG 2027) | Computer Science (#7 UK Guardian 2026 - 100% REF World-Leading Impact)",
    "coverage": "Partial Aid",
    "amountValue": "£4,000 / year (Up to £20,000 Total across 5 Years) or £7,500 Global Excellence Award",
    "tuitionFee": "Course-Specific Overseas Tuition (£22,000 – £28,000/yr; Medicine/Dentistry higher) | Standard UCAS App Fee: £34.50",
    "tuitionAmountNumeric": 25000,
    "hasFullRide": false,
    "hasPartialAid": true,
    "hasFinancialAid": true,
    "financialAidType": "Merit-Based",
    "financialAidDetails": "The University of Dundee is an elite Scottish public research institution founded in 1881, ranked #25 in the UK (#3 in Scotland) in Complete University Guide 2027 and #26 in Guardian 2026. Dundee is a national powerhouse in medical and biological disciplines, ranking #1 in the UK for Bioengineering (Times 2026), #2 in the UK for Medicine (Times 2026) and Dentistry (CUG 2027), #2 for Forensic Science, and #7 in the UK for Computer Science (Guardian 2026 / Daily Mail 2026 with 100% REF world-leading research impact). International financial aid for South Asian / Pakistani students includes the Vice Chancellor’s South Asia Undergraduate Scholarship (consistent £4,000 per year tuition discount, up to £20,000 total across 5-year degree durations) and the Global Excellence Scholarship (£7,500/year). Fully funded undergraduate scholarships are NOT offered. Undergraduate applications must strictly use the UCAS portal (Standard UCAS Fee: £34.50; Common App is NOT accepted).",
    "minGpa": "3.5+",
    "minSat": "1320 - 1440 (SAT / AAB-BBB A-Levels)",
    "satRequirementCategory": "Optional",
    "satPolicyDetails": "Undergraduate entry requires Scottish Highers, A-Levels (AAB to BBB; Computer Science requires AAB/ABB) or IB (32–35 points). US applicants require 1320+ SAT or 28+ ACT + 3 AP exam scores of 4+. Recognized foundation routes required for applicants holding national high school certificates (e.g. Pakistan HSSC). All undergraduate applications must be submitted strictly via UCAS (Standard UCAS Fee: £34.50). Common App is NOT accepted. Postgraduate applications use Dundee direct online portal. English requirement: IELTS 6.0–6.5 (higher for Medicine/Dentistry).",
    "minIelts": "6.0",
    "ieltsCategory": "6.0",
    "toeflRequirement": "88+ iBT",
    "commonAppAccepted": false,
    "applicationPortalDetails": "UCAS Portal Required strictly for full-time undergraduates (Standard UCAS Fee: £34.50). Common App is NOT accepted.",
    "acceptanceRate": "30% - 35%",
    "deadline": "Jan 13 (UCAS Equal-Consideration) / Aug 28 (South Asia & Global Excellence Scholarships)",
    "description": "Top 25 UK university (#25 CUG 2027 / #3 Scotland). National powerhouse in Bioengineering (#1 UK), Medicine (#2 UK), Dentistry (#2 UK) & Computer Science (#7 UK Guardian 2026). Offers up to £20,000 South Asia tuition scholarships (£4,000/yr).",
    "overviewLong": "The University of Dundee is a premier Scottish research university located in Dundee, Scotland. Dundee ranks #25 in the UK and #3 in Scotland in the Complete University Guide 2027, #26 in the Guardian University Guide 2026, and #23= in the Times Good University Guide 2026. 84% of Dundee research was rated world-leading or internationally excellent in REF 2021.\n\nDundee boasts top national subject rankings across medical, engineering, and computing fields: Bioengineering & Biomedical Engineering (#1 in UK Times 2026), Medicine (#2 in UK Times 2026 / #1 in Scotland / Joint #1 UK Graduate Prospects), Dentistry (#2 in UK CUG 2027), Forensic Science (#2 UK), Computer Science (#7 in UK Guardian 2026), Anatomy & Physiology (#3 UK), Civil Engineering (#5 UK), and Art & Design (#6 UK).\n\nUndergraduate admission uses UCAS strictly (Standard UCAS Fee £34.50; Common App is NOT accepted). Financial aid includes the Vice Chancellor’s South Asia Undergraduate Scholarship (£4,000/year, up to £20,000 total over 5 years) and Global Excellence Scholarships (£7,500/year). Note: Dundee explicitly does NOT offer fully funded undergraduate scholarships.",
    "topProgramsList": [
      {
        "name": "School of Medicine & Ninewells Teaching Hospital",
        "ranking": "#2 UK Times 2026 / #1 Scotland / Joint #1 UK Graduate Prospects",
        "description": "Clinical medicine, medical research, surgical training, and healthcare sciences."
      },
      {
        "name": "Department of Bioengineering & Biomedical Engineering",
        "ranking": "#1 in the UK Times Good University Guide 2026",
        "description": "Biomedical engineering, tissue engineering, medical devices, and biomechanics."
      },
      {
        "name": "School of Dentistry",
        "ranking": "#2 in the UK Complete University Guide 2027",
        "description": "Dental surgery, oral health sciences, restorative dentistry, and orthodontics."
      },
      {
        "name": "School of Science and Engineering - Computing",
        "ranking": "#7 in the UK Guardian 2026 / 100% REF World-Leading Impact",
        "description": "Computer science, AI and data science, software development, UX design, and intelligent systems."
      },
      {
        "name": "Centre for Anatomy and Human Identification & Forensic Science",
        "ranking": "#2 UK CUG 2027 / #3 UK Anatomy Times 2026",
        "description": "Forensic science, human identification, anatomy, forensic anthropology, and toxicology."
      ,
    "logoText": "UD",
    "logoBg": "from-amber-700 to-orange-950",
    "degreesOffered": ["Undergraduate", "Graduate", "PhD"],
    "tags": ["United Kingdom", "Europe", "International", "Research"],
    "requiresSeparateApp": true}
    ],
    "allScholarshipsList": [,

      {
        "id": "uni-095-1",
        "title": "Vice Chancellor's South Asia Undergraduate Scholarship",
        "amount": "£4,000 / year (Up to £20,000 Total across 5 Years)",
        "coverage": "Partial Aid",
        "eligibility": "International undergraduate offer holders domiciled in South Asia (including Pakistan), excluding Medicine & Dentistry.",
        "description": "Consistent annual tuition discount providing £4,000 per year (up to £20,000 total across standard 4-to-5-year Scottish undergraduate degree durations) for eligible South Asian offer holders.",
        "deadline": "August 28",
        "requiresSeparateApp": true
      ,
    "logoText": "UD",
    "logoBg": "from-blue-700 to-indigo-950",
    "degreesOffered": ["Undergraduate", "Graduate", "PhD"]},

      {
        "id": "uni-095-2",
        "title": "Global Excellence Scholarship",
        "amount": "£7,500 / year Tuition Discount",
        "coverage": "Partial Aid",
        "eligibility": "Eligible international undergraduate fee-paying applicants demonstrating high academic achievement.",
        "description": "Merit-based tuition discount of £7,500 per year awarded to outstanding international undergraduate offer holders.",
        "deadline": "August 28",
        "requiresSeparateApp": true
      }
    ],
    "degreesOffered": [
      "Bachelors",
      "Masters",
      "PhD"
    ],
    "tags": [
      "Top 25 UK CUG",
      "#3 Scotland",
      "#1 Bioengineering UK",
      "#2 Medicine UK",
      "Dundee UK",
      "UK"
    ],
    "requiresSeparateApp": true,
    "logoText": "DND",
    "logoBg": "from-cyan-950 to-teal-900"
  },

  {
    "id": "uni-096",
    "universityName": "McGill University",
    "location": "Montreal, Quebec, Canada",
    "country": "Canada",
    "flag": "🇨🇦",
    "foundingYear": "1821",
    "scholarshipTitle": "Major Entrance Scholarships & McCall MacBain Scholarships",
    "ranking": "#27 Global (QS 2026) | #1 in Canada (QS 2026) | #1 Medical-Doctoral (Maclean's 2026)",
    "qsSubjectRankings": "Mining Engineering (#2 Global) | 43 Subjects in Global Top 50 | 53 Subjects in Global Top 100",
    "coverage": "Partial Aid",
    "amountValue": "CAD $3,000–$12,000/yr Renewable (Undergrad) or Full Ride + Stipend (McCall MacBain Master's / PhD)",
    "tuitionFee": "Program-Dependent Overseas Tuition (CAD $34,000 – $65,000/yr) | Direct Application Portal",
    "tuitionAmountNumeric": 45000,
    "hasFullRide": true,
    "hasPartialAid": true,
    "hasFinancialAid": true,
    "financialAidType": "Merit-Based",
    "financialAidDetails": "McGill University is Canada's premier research university ranked #27 globally and #1 in Canada in QS 2026, and #1 Medical-Doctoral university in Maclean's 2026. Global leader in Mining Engineering (#2 globally) with 43 subjects in the global Top 50. At undergraduate level, McGill offers competitive merit entrance awards ($3,000 one-year or $3,000–$12,000/yr renewable) and entrance bursaries, but does NOT offer general undergraduate full-ride financial aid. At graduate level, the flagship McCall MacBain Scholarship provides full tuition, living stipend ($2,000/mo), and relocation support for Master's/Professional degrees, and all PhD students receive guaranteed departmental funding packages.",
    "minGpa": "3.8+",
    "minSat": "1380 - 1520 (SAT / ACT 30-34 Optional)",
    "satRequirementCategory": "Optional",
    "satPolicyDetails": "Undergraduate admission requires high school credentials equivalent to Canadian Grade 12 (or A-Levels/IB). US applicants require SAT 1380+ or ACT 30+ for most faculties (Engineering/Science higher). Pakistani applicants are evaluated on HSSC/Intermediate or A-Levels with course-specific prerequisites. Direct application through McGill's own online application portal. English requirement: IELTS 6.5 (7.0 for Management/Education) or TOEFL 90+.",
    "minIelts": "6.5",
    "ieltsCategory": "6.5",
    "toeflRequirement": "90+ iBT",
    "commonAppAccepted": false,
    "applicationPortalDetails": "Direct McGill Undergraduate Application Portal. OUAC and Common App are NOT used.",
    "acceptanceRate": "38% - 42%",
    "deadline": "Jan 15 (Undergrad International Application) / Aug 19 (McCall MacBain Scholarship Int'l)",
    "description": "#27 Global (QS 2026) & #1 in Canada. World #2 in Mining Engineering with 43 subjects in Global Top 50. Offers McCall MacBain full Master's scholarships & guaranteed PhD funding packages.",
    "overviewLong": "McGill University is one of Canada's most internationally recognized research universities, located in Montreal, Quebec. Founded in 1821, McGill ranks #27 globally and #1 in Canada in the QS World University Rankings 2026, as well as #1 in Canada for Medical-Doctoral universities in Maclean's 2026.\n\nMcGill's academic breadth is extraordinary, placing 43 subjects in the global QS Top 50 in 2026 and another 10 subjects in the Top 100. Standout disciplines include Mining Engineering (#2 globally), Medicine, Life Sciences, Computer Science, Law, and Management. Computer science and bioengineering benefit from Montreal's world-renowned AI research ecosystem.\n\nUndergraduate admission uses McGill's direct online application portal. Financial aid at undergraduate level is merit and need-based ($3,000 to $12,000/year renewable awards). At graduate level, McGill offers the prestigious McCall MacBain Scholarship (full tuition + living stipend for Master's/Professional degrees) and guaranteed departmental funding packages for all PhD admits.",
    "topProgramsList": [
      {
        "name": "Department of Mining and Materials Engineering",
        "ranking": "#2 World in QS Mining Engineering 2026",
        "description": "Mining engineering, sustainable mineral processing, materials extraction, and pyrometallurgy."
      },
      {
        "name": "Faculty of Medicine and Health Sciences",
        "ranking": "#1 Medical-Doctoral in Canada - Maclean's 2026",
        "description": "Clinical medicine, biomedical sciences, neuroscience, human genetics, and experimental medicine."
      },
      {
        "name": "School of Computer Science",
        "ranking": "Leading Canadian AI & Computational Biology Hub",
        "description": "Artificial intelligence, machine learning, computer graphics, algorithms, computational biology, and software systems."
      },
      {
        "name": "Desautels Faculty of Management",
        "ranking": "Top Canadian Business School - QS Global MBA",
        "description": "Finance, international business, business analytics, strategy, and organizational behavior."
      },
      {
        "name": "Faculty of Engineering",
        "ranking": "Global Top 50 in Engineering & Technology",
        "description": "Civil engineering, electrical engineering, mechanical engineering, chemical engineering, and bioengineering."
      ,
    "logoText": "MU",
    "logoBg": "from-blue-700 to-indigo-950",
    "degreesOffered": ["Undergraduate", "Graduate", "PhD"],
    "tags": ["Canada", "Europe", "International", "Research"],
    "requiresSeparateApp": true}
    ],
    "allScholarshipsList": [,

      {
        "id": "uni-096-1",
        "title": "McCall MacBain Scholarship",
        "amount": "Full Tuition + CAD $2,000 / month Living Stipend + Relocation Grant",
        "coverage": "Full Ride",
        "eligibility": "High-achieving international & domestic applicants applying for eligible Master's or professional degree programs.",
        "description": "Comprehensive full scholarship providing full tuition and fees, CAD $2,000 per month living stipend, relocation grant, and leadership mentorship for Master's study.",
        "deadline": "August 19",
        "requiresSeparateApp": true
      ,
    "logoText": "MU",
    "logoBg": "from-blue-700 to-indigo-950",
    "degreesOffered": ["Undergraduate", "Graduate", "PhD"]},

      {
        "id": "uni-096-2",
        "title": "McGill Major Entrance Scholarships",
        "amount": "CAD $3,000, $5,000, $10,000 or $12,000 / year (Renewable)",
        "coverage": "Partial Aid",
        "eligibility": "Entering first-time international & domestic undergraduate students demonstrating outstanding academic excellence and leadership.",
        "description": "Renewable merit-based tuition awards ranging from $3,000 to $12,000 annually across the duration of undergraduate degree study.",
        "deadline": "Jan 15",
        "requiresSeparateApp": true
      ,
    "logoText": "MU",
    "logoBg": "from-blue-700 to-indigo-950",
    "degreesOffered": ["Undergraduate", "Graduate", "PhD"]},

      {
        "id": "uni-096-3",
        "title": "One-Year Entrance Scholarship",
        "amount": "CAD $3,000 First-Year Award",
        "coverage": "Partial Aid",
        "eligibility": "First-time entering international undergraduate students meeting competitive academic entry thresholds.",
        "description": "One-time non-renewable entrance merit scholarship awarded automatically upon admission evaluation.",
        "deadline": "Jan 15",
        "requiresSeparateApp": false
      }
    ],
    "degreesOffered": [
      "Bachelors",
      "Masters",
      "PhD"
    ],
    "tags": [
      "QS Top 30 Global",
      "#1 Canada QS",
      "#2 Mining Eng World",
      "McCall MacBain Full Scholarship",
      "McGill Canada",
      "Canada"
    ],
    "requiresSeparateApp": true,
    "logoText": "MCG",
    "logoBg": "from-red-950 to-rose-900"
  },

  {
    "id": "uni-097",
    "universityName": "University of Toronto",
    "location": "Toronto, Ontario, Canada",
    "country": "Canada",
    "flag": "🇨🇦",
    "foundingYear": "1827",
    "scholarshipTitle": "Lester B. Pearson International Scholarship & Connaught Doctoral Awards",
    "ranking": "#29 Global (QS 2026) | #1 in Canada (QS 2026) | #21 THE 2026 | #20 US News 2026",
    "qsSubjectRankings": "Broad Areas #1 in Canada across ALL 5 fields (Top 17 Global) | Nursing (#4 Global) | Sports (#6) | Psychology (#8) | Education (#10) | English (#10) | Philosophy (#10) | 48 Subjects in Global Top 50",
    "coverage": "Full Ride",
    "amountValue": "Full Tuition, Books, Incidental Fees & Residence Support (Pearson 4-Yr) or Up to $100,000 Regional Awards",
    "tuitionFee": "Faculty/Program-Dependent Overseas Tuition (CAD $42,000 – $68,000/yr) | OUAC Application",
    "tuitionAmountNumeric": 52000,
    "hasFullRide": true,
    "hasPartialAid": true,
    "hasFinancialAid": true,
    "financialAidType": "Merit-Based",
    "financialAidDetails": "University of Toronto is Canada's flagship research university ranked #29 globally (QS 2026) and #21 (THE 2026). Ranked #1 in Canada across all 5 QS broad subject areas with 48 subjects in the global Top 50 (Nursing #4, Sports #6, Psychology #8). The flagship Lester B. Pearson International Scholarship is a premier full 4-year undergraduate award covering full tuition, books, incidental fees, and full residence support (~37 awards/yr). Regional awards provide up to $100,000 over 4 years. PhD students receive guaranteed departmental funding packages plus top-ups like the Connaught International Scholarship ($10,000/yr top-up bringing minimum package to $50,000+/yr).",
    "minGpa": "3.8+",
    "minSat": "1390 - 1530 (SAT / ACT 31-35 Optional)",
    "satRequirementCategory": "Optional",
    "satPolicyDetails": "Undergraduate entry requires high school completion equivalent to Ontario Grade 12 (or A-Levels/IB). US applicants require 1390+ SAT or 31+ ACT + AP scores. Pakistani applicants evaluated on HSSC/Intermediate or A-Levels with program prerequisites. Applications submitted via Ontario Universities' Application Centre (OUAC 105 portal), followed by U of T JOIN portal. English requirement: IELTS 6.5 (no band below 6.0) or TOEFL 100+.",
    "minIelts": "6.5",
    "ieltsCategory": "6.5",
    "toeflRequirement": "100+ iBT",
    "commonAppAccepted": false,
    "applicationPortalDetails": "Ontario Universities' Application Centre (OUAC) Portal Required. Common App is NOT accepted.",
    "acceptanceRate": "40% - 43%",
    "deadline": "Oct 16 (OUAC Pearson Deadline) / Nov 6 (Pearson App) / Jan 15 (Standard Undergrad)",
    "description": "#29 Global (QS 2026) & #1 in Canada across all 5 broad QS fields. Global Top 10 in Nursing (#4), Sports (#6), Psychology (#8). Offers the premier 4-year full-ride Lester B. Pearson Scholarship.",
    "overviewLong": "The University of Toronto is Canada's largest and most prominent research university, operating three campuses in St. George (Downtown Toronto), Mississauga, and Scarborough. U of T ranks #29 globally in QS 2026, #21 in THE 2026, and #20 in US News 2026.\n\nU of T ranked #1 in Canada in all five broad QS subject fields and placed within the global Top 17 in every area: Life Sciences & Medicine (#12 globally), Arts & Humanities (#14), Social Sciences & Management (#15), Natural Sciences (#16), and Engineering & Technology (#17). Standout specific subjects include Nursing (#4 globally), Sports-Related Subjects (#6), Psychology (#8), Education (#10), English (#10), and Philosophy (#10).\n\nUndergraduate applications are submitted through the OUAC portal. Financial aid includes the world-famous Lester B. Pearson International Scholarship (full 4-year tuition, fees, books, and residence support for ~37 students/yr). For PhD students, guaranteed departmental funding packages are enhanced by the Connaught International Scholarship ($10,000/yr top-up to $50,000+ total).",
    "topProgramsList": [
      {
        "name": "Department of Computer Science",
        "ranking": "World-Leading AI, Machine Learning & Systems Hub",
        "description": "Artificial intelligence, deep learning, computer vision, robotics, systems software, and data science."
      },
      {
        "name": "Faculty of Applied Science and Engineering",
        "ranking": "#1 Engineering in Canada / #17 Global QS 2026",
        "description": "Engineering science, electrical engineering, mechanical engineering, industrial engineering, and civil engineering."
      },
      {
        "name": "Temerty Faculty of Medicine & Dalla Lana School of Public Health",
        "ranking": "#12 World in QS Life Sciences & Medicine 2026",
        "description": "Medicine, public health, immunology, medical biophysics, epidemiology, and pharmacology."
      },
      {
        "name": "Department of Psychology & Lawrence S. Bloomberg Faculty of Nursing",
        "ranking": "#4 World Nursing / #8 World Psychology QS 2026",
        "description": "Nursing science, clinical psychology, cognitive neuroscience, and behavioral psychology."
      },
      {
        "name": "Rotman School of Management",
        "ranking": "Top Canadian Business School",
        "description": "Finance, management consulting, accounting, risk management, and business analytics."
      ,
    "logoText": "UT",
    "logoBg": "from-amber-700 to-orange-950",
    "degreesOffered": ["Undergraduate", "Graduate", "PhD"],
    "tags": ["Canada", "Europe", "International", "Research"],
    "requiresSeparateApp": true}
    ],
    "allScholarshipsList": [,

      {
        "id": "uni-097-1",
        "title": "Lester B. Pearson International Scholarship",
        "amount": "Full Tuition, Books, Incidental Fees & Full Residence Support (4 Years)",
        "coverage": "Full Ride",
        "eligibility": "Exceptional international secondary school graduates nominated by their high school entering first-entry undergraduate programs.",
        "description": "Premier comprehensive 4-year full-ride scholarship covering full tuition, course books, incidental fees, and full residence room and board for approximately 37 students per year.",
        "deadline": "November 6",
        "requiresSeparateApp": true
      ,
    "logoText": "UT",
    "logoBg": "from-blue-700 to-indigo-950",
    "degreesOffered": ["Undergraduate", "Graduate", "PhD"]},

      {
        "id": "uni-097-2",
        "title": "U of T International Scholar Award",
        "amount": "Up to CAD $100,000 over 4 Years ($40k 1st Yr + $20k/yr)",
        "coverage": "Partial Aid",
        "eligibility": "High-achieving international undergraduate applicants entering eligible faculties (e.g. Arts & Science, Rotman Commerce).",
        "description": "Major multi-year entrance scholarship providing up to $100,000 total across 4 years of undergraduate study.",
        "deadline": "Jan 15",
        "requiresSeparateApp": false
      ,
    "logoText": "UT",
    "logoBg": "from-blue-700 to-indigo-950",
    "degreesOffered": ["Undergraduate", "Graduate", "PhD"]},

      {
        "id": "uni-097-3",
        "title": "President's Scholars of Excellence Program",
        "amount": "CAD $15,000 First-Year Award",
        "coverage": "Partial Aid",
        "eligibility": "Top 150 entering first-year direct-entry domestic and international undergraduate applicants.",
        "description": "Prestigious merit award providing $15,000 in first year alongside guaranteed access to undergraduate research opportunities.",
        "deadline": "Jan 15",
        "requiresSeparateApp": false
      ,
    "logoText": "UT",
    "logoBg": "from-blue-700 to-indigo-950",
    "degreesOffered": ["Undergraduate", "Graduate", "PhD"]},

      {
        "id": "uni-097-4",
        "title": "Connaught International Doctoral Scholarship",
        "amount": "CAD $10,000 / year Top-Up (Minimum $50,000+/yr Package)",
        "coverage": "Full Ride",
        "eligibility": "Outstanding new international doctoral applicants nominated by their graduate unit.",
        "description": "Top-up award adding $10,000 annually to the department's normal doctoral funding package, bringing combined guaranteed funding to at least $50,000/year.",
        "deadline": "Varies by Graduate Unit",
        "requiresSeparateApp": false
      }
    ],
    "degreesOffered": [
      "Bachelors",
      "Masters",
      "PhD"
    ],
    "tags": [
      "QS Top 30 Global",
      "#1 Canada QS",
      "Lester B Pearson Full Ride",
      "World Top 10 Subjects",
      "Toronto Canada",
      "Canada"
    ],
    "requiresSeparateApp": true,
    "logoText": "TOR",
    "logoBg": "from-blue-950 to-sky-900"
  },

  {
    "id": "uni-098",
    "universityName": "University of British Columbia",
    "location": "Vancouver & Kelowna, British Columbia, Canada",
    "country": "Canada",
    "flag": "🇨🇦",
    "foundingYear": "1908",
    "scholarshipTitle": "International Scholars Program & IMES Awards",
    "ranking": "#45 Global (QS 2027) | #40 Global (QS 2026) | Top 30 Global across all 5 QS Subject Areas",
    "qsSubjectRankings": "Sports-Related (#4 Global / #1 Canada) | Mining Eng (#7) | Earth & Marine Sciences (#13 / #1 Canada) | Environmental Sciences (#15) | Geophysics (#15) | Civil Eng (#20 / #1 Canada) | Nursing (#22)",
    "coverage": "Full Ride",
    "amountValue": "Full Demonstrated Financial Need (International Scholars) or CAD $10,000–$25,000/yr Renewable (IMES)",
    "tuitionFee": "Course/Faculty-Specific Overseas Tuition (CAD $38,000 – $58,000/yr) | Direct Application Portal",
    "tuitionAmountNumeric": 44000,
    "hasFullRide": true,
    "hasPartialAid": true,
    "hasFinancialAid": true,
    "financialAidType": "Merit-Based",
    "financialAidDetails": "UBC is a global top 45 university (#45 QS 2027 / #40 QS 2026) operating campuses in Vancouver and Kelowna. Ranked in the global Top 30 across all 5 broad QS subject areas. World leader in Sports Science (#4 globally), Mining Engineering (#7), Earth & Marine Sciences (#13), Environmental Sciences (#15), and Civil Engineering (#20). Devotes $35M+ annually to international undergraduate aid. The International Scholars Program provides comprehensive need-based full funding for exceptional students. Merit-based IMES and OIS awards provide $10,000 to $25,000/year (renewable up to $100,000 total). At graduate level, Four Year Doctoral Fellowships (4YF) provide $24,000/yr plus international tuition awards ($3,200/yr).",
    "minGpa": "3.7+",
    "minSat": "1350 - 1490 (SAT / ACT 29-33 Optional)",
    "satRequirementCategory": "Optional",
    "satPolicyDetails": "Undergraduate entry requires completion of secondary school equivalent to BC Grade 12 (or A-Levels/IB). US applicants require 1350+ SAT or 29+ ACT. Pakistani applicants evaluated on HSSC/Intermediate or A-Levels with faculty prerequisites. Applications submitted directly via UBC's undergraduate portal. English requirement: IELTS 6.5 (no band below 6.0) or TOEFL 90+.",
    "minIelts": "6.5",
    "ieltsCategory": "6.5",
    "toeflRequirement": "90+ iBT",
    "commonAppAccepted": false,
    "applicationPortalDetails": "Direct UBC Undergraduate Online Application Portal. OUAC and Common App are NOT used.",
    "acceptanceRate": "48% - 52%",
    "deadline": "Nov 15 (International Scholars Deadline) / Jan 15 (Standard Undergrad Application)",
    "description": "#45 Global (QS 2027) & Top 30 across all 5 QS fields. World #4 in Sports, #7 Mining, #13 Earth Sciences, #20 Civil Engineering. Offers $35M+ int'l funding including International Scholars full-need awards.",
    "overviewLong": "The University of British Columbia is a top global research university located in Vancouver and Kelowna, British Columbia. UBC ranks #45 globally in QS 2027 (#40 in QS 2026) and places within the global Top 30 across all five broad QS subject fields.\n\nUBC boasts global leadership in multiple disciplines: Sports-Related Subjects (#4 globally / #1 Canada), Mining Engineering (#7), Earth & Marine Sciences (#13 / #1 Canada), Environmental Sciences (#15), Geophysics (#15), Civil Engineering (#20 / #1 Canada), Nursing (#22), and Life Sciences & Medicine (#25).\n\nUndergraduate admission uses UBC's direct online portal. UBC commits over CAD $35 million annually to international undergraduate financial support. The International Scholars Program provides full need-based funding covering complete education and living costs for high-achieving international applicants. Merit awards like IMES provide $10,000–$25,000 per year renewable.",
    "topProgramsList": [
      {
        "name": "Department of Computer Science",
        "ranking": "#31 World in QS CS 2025 - Leading AI & Systems Hub",
        "description": "Artificial intelligence, machine learning, human-computer interaction, computer graphics, and software systems."
      },
      {
        "name": "Department of Civil Engineering",
        "ranking": "#20 World / #1 in Canada - QS 2026",
        "description": "Structural engineering, coastal engineering, environmental fluid mechanics, and transportation."
      },
      {
        "name": "School of Kinesiology",
        "ranking": "#4 World / #1 in Canada - QS Sports 2026",
        "description": "Exercise physiology, sports biomechanics, sports management, and health sciences."
      },
      {
        "name": "Norman B. Keevil Institute of Mining Engineering",
        "ranking": "#7 World in QS Mining 2026",
        "description": "Sustainable mining, mineral processing, rock mechanics, and mine economics."
      },
      {
        "name": "Department of Earth, Ocean and Atmospheric Sciences",
        "ranking": "#13 World in QS Earth & Marine Sciences 2026",
        "description": "Geology, oceanography, geophysics, atmospheric sciences, and climate dynamics."
      ,
    "logoText": "UBC",
    "logoBg": "from-sky-700 to-blue-900",
    "degreesOffered": ["Undergraduate", "Graduate", "PhD"],
    "tags": ["Canada", "Europe", "International", "Research"],
    "requiresSeparateApp": true}
    ],
    "allScholarshipsList": [,

      {
        "id": "uni-098-1",
        "title": "UBC International Scholars Program",
        "amount": "Full Demonstrated Financial Need (Tuition, Residence & Living Support)",
        "coverage": "Full Ride",
        "eligibility": "Exceptional international undergraduate applicants with outstanding academics, leadership, and significant demonstrated financial need.",
        "description": "Need-based full scholarship program designed to cover the full cost of tuition, housing, and living expenses for exceptional international students.",
        "deadline": "November 15",
        "requiresSeparateApp": true
      ,
    "logoText": "UBC",
    "logoBg": "from-blue-700 to-indigo-950",
    "degreesOffered": ["Undergraduate", "Graduate", "PhD"]},

      {
        "id": "uni-098-2",
        "title": "International Major Entrance Scholarship (IMES)",
        "amount": "CAD $10,000 – $25,000 / year (Renewable up to $100,000 Total)",
        "coverage": "Partial Aid",
        "eligibility": "Exceptional international students entering undergraduate programs directly from secondary school.",
        "description": "Renewable merit-based tuition scholarship providing $10,000 to $25,000 annually for up to 4 years of undergraduate study.",
        "deadline": "Jan 15",
        "requiresSeparateApp": false
      ,
    "logoText": "UBC",
    "logoBg": "from-blue-700 to-indigo-950",
    "degreesOffered": ["Undergraduate", "Graduate", "PhD"]},

      {
        "id": "uni-098-3",
        "title": "Outstanding International Student Award (OIS)",
        "amount": "CAD $10,000 – $25,000 First-Year Award",
        "coverage": "Partial Aid",
        "eligibility": "Outstanding international students demonstrating academic excellence upon entrance to UBC.",
        "description": "One-time entrance merit scholarship awarded automatically upon admission evaluation.",
        "deadline": "Jan 15",
        "requiresSeparateApp": false
      ,
    "logoText": "UBC",
    "logoBg": "from-blue-700 to-indigo-950",
    "degreesOffered": ["Undergraduate", "Graduate", "PhD"]},

      {
        "id": "uni-098-4",
        "title": "UBC Four Year Doctoral Fellowship (4YF)",
        "amount": "CAD $24,000 / year for 4 Years + International Tuition Awards ($3,200/yr)",
        "coverage": "Full Ride",
        "eligibility": "Outstanding doctoral students admitted to research PhD programs at UBC.",
        "description": "Major doctoral fellowship providing $24,000 per year stipend plus international tuition coverage for up to 4 years.",
        "deadline": "Varies by Department",
        "requiresSeparateApp": false
      }
    ],
    "degreesOffered": [
      "Bachelors",
      "Masters",
      "PhD"
    ],
    "tags": [
      "QS Top 45 Global",
      "Top 30 QS Fields",
      "International Scholars Full Need",
      "World #4 Sports",
      "UBC Vancouver",
      "Canada"
    ],
    "requiresSeparateApp": true,
    "logoText": "UBC",
    "logoBg": "from-blue-950 to-indigo-900"
  },

  {
    "id": "uni-099",
    "universityName": "University of Alberta",
    "location": "Edmonton, Alberta, Canada",
    "country": "Canada",
    "flag": "🇨🇦",
    "foundingYear": "1908",
    "scholarshipTitle": "President's International Distinction & Killam Doctoral Scholarships",
    "ranking": "#96 Global (QS 2027) | #94 Global (QS 2026) | Top 5 in Canada | $52M+ Undergrad Scholarship Fund",
    "qsSubjectRankings": "Sports-Related Subjects #7 | Petroleum Engineering (#3 Global / #1 Canada) | Nursing (#9 Global / #2 Canada) | Mining Engineering (#10 Global) | AI (#5 Global ARWU/US News) | Pharmacy (#42) | Agriculture (#43)",
    "coverage": "Partial Aid",
    "amountValue": "Up to CAD $120,000 over 4 Years (President's Distinction) or CAD $45,000/yr (Killam PhD)",
    "tuitionFee": "Guaranteed Tuition Rates (CAD $35,908 – $49,953/yr by faculty) | Direct Application Portal",
    "tuitionAmountNumeric": 40000,
    "hasFullRide": false,
    "hasPartialAid": true,
    "hasFinancialAid": true,
    "financialAidType": "Merit-Based",
    "financialAidDetails": "University of Alberta is a global top 100 research university (#96 QS 2027 / #94 QS 2026) located in Edmonton, Alberta. World leader in Sports Science (#7), Petroleum Engineering (#3 globally / #1 in Canada), Nursing (#9), Mining Engineering (#10), and Artificial Intelligence (#5 globally in ARWU/US News). Offers guaranteed 4-year tuition rates for international admits. Undergrad scholarship fund exceeds $52M, featuring the flagship President's International Distinction Scholarship (up to $120,000 over 4 years). Note: UAlberta explicitly does NOT offer general full-ride undergraduate awards. At PhD level, the prestigious Izaak Walton Killam Memorial Scholarship provides up to $45,000/year for 2 years with differential fee coverage.",
    "minGpa": "3.5+",
    "minSat": "1300 - 1450 (SAT / ACT 28-32 Optional)",
    "satRequirementCategory": "Optional",
    "satPolicyDetails": "Undergraduate entry requires high school completion equivalent to Alberta Grade 12 (or A-Levels/IB). US applicants require 1300+ SAT or 28+ ACT. Pakistani applicants evaluated on HSSC/Intermediate or A-Levels with faculty prerequisites. Applications submitted directly via UAlberta's online application portal. English requirement: IELTS 6.5 (no band below 6.0) or TOEFL 90+.",
    "minIelts": "6.5",
    "ieltsCategory": "6.5",
    "toeflRequirement": "90+ iBT",
    "commonAppAccepted": false,
    "applicationPortalDetails": "Direct University of Alberta Undergraduate Online Application Portal. OUAC and Common App are NOT used.",
    "acceptanceRate": "51% - 55%",
    "deadline": "Jan 11 (President's Distinction Scholarship) / March 1 (Standard Undergrad Application)",
    "description": "#96 Global (QS 2027) & Top 5 in Canada. World #3 in Petroleum Engineering, #5 in AI, #7 in Sports-Related Subjects, #9 in Nursing. Guaranteed 4-yr tuition freeze with up to $120,000 President's Distinction scholarships.",
    "overviewLong": "The University of Alberta is a top Canadian public research university located in Edmonton, Alberta. UAlberta ranks #96 globally in QS 2027 (#94 in QS 2026) and consistently places among the Top 5 universities in Canada.\n\nUAlberta possesses world-leading subject strengths: Sports-Related Subjects (#7), Petroleum Engineering (#3 globally / #1 in Canada), Artificial Intelligence (#5 globally in ARWU/US News), Nursing (#9 globally), Mining Engineering (#10), Pharmacy & Pharmacology (#42), and Agriculture & Forestry (#43).\n\nUndergraduate admission uses UAlberta's direct online application portal, with guaranteed fixed 4-year tuition rates for international entry cohorts. Over $52 million is awarded annually in undergraduate financial aid, featuring the flagship President's International Distinction Scholarship (up to $120,000 over 4 years). For PhD students, the Izaak Walton Killam Memorial Scholarship provides up to $45,000 per year.",
    "topProgramsList": [
      {
        "name": "Department of Petroleum Engineering & Chemical Engineering",
        "ranking": "#3 World in QS Petroleum / #1 in Canada",
        "description": "Petroleum reservoir engineering, drilling engineering, enhanced oil recovery, and energy systems."
      },
      {
        "name": "Department of Computing Science & Amii AI Institute",
        "ranking": "#5 World in AI (ARWU/US News) - Global RL Pioneer",
        "description": "Artificial intelligence, reinforcement learning, robotics, computer vision, algorithms, and data science."
      },
      {
        "name": "Faculty of Nursing",
        "ranking": "#9 World in QS Nursing 2026 / #2 in Canada",
        "description": "Nursing science, clinical health systems, global health nursing, and healthcare leadership."
      },
      {
        "name": "School of Mining and Petroleum Engineering",
        "ranking": "#10 World in QS Mining 2026",
        "description": "Surface and underground mining, geomechanics, mine safety, and resource economics."
      },
      {
        "name": "Faculty of Kinesiology, Sport, and Recreation",
        "ranking": "#7 World in Sports-Related Subjects",
        "description": "Leading global research and clinical training in exercise, kinesiology, physical education, and athletic performance."
      }
    ],
    "allScholarshipsList": [
      {
        "id": "uni-099-1",
        "title": "President's International Distinction Scholarship",
        "amount": "Up to CAD $120,000 over 4 Years ($30,000 / year Renewable)",
        "coverage": "Partial Aid",
        "eligibility": "Top international undergraduate applicants entering first-year study with superior academic average and demonstrated leadership.",
        "description": "Major multi-year scholarship providing $30,000 per year for up to 4 years ($120,000 total) to exceptional international students.",
        "deadline": "January 11",
        "requiresSeparateApp": true
      },
      {
        "id": "uni-099-2",
        "title": "Chan Pang Kuen Memorial International Distinction Scholarship",
        "amount": "Up to CAD $120,000 over 4 Years ($30,000 / year Renewable)",
        "coverage": "Partial Aid",
        "eligibility": "High-achieving international first-year undergraduate applicants demonstrating superior academic achievement and leadership.",
        "description": "Major international distinction award providing up to $120,000 total across 4 years of undergraduate study.",
        "deadline": "January 11",
        "requiresSeparateApp": true
      },
      {
        "id": "uni-099-3",
        "title": "International Admission & Regional Excellence Scholarships",
        "amount": "Up to CAD $5,000 First-Year Award",
        "coverage": "Partial Aid",
        "eligibility": "Entering international undergraduate students evaluated on high school admission average.",
        "description": "Automatic entrance scholarships awarded based on competitive academic admission average.",
        "deadline": "March 1",
        "requiresSeparateApp": false
      },
      {
        "id": "uni-099-4",
        "title": "Izaak Walton Killam Memorial Scholarship",
        "amount": "Up to CAD $45,000 / year for 2 Years + Differential Fee Coverage",
        "coverage": "Full Ride",
        "eligibility": "Outstanding doctoral students across all disciplines with no citizenship restrictions.",
        "description": "Prestigious doctoral scholarship providing $45,000 per year for 2 years plus international differential fee coverage.",
        "deadline": "May 6",
        "requiresSeparateApp": true
      }
    ],
    "degreesOffered": [
      "Bachelors",
      "Masters",
      "PhD"
    ],
    "tags": [
      "QS Top 100 Global",
      "World #3 Petroleum Eng",
      "World #5 AI",
      "Up to $120k Scholarship",
      "Alberta Canada",
      "Canada"
    ],
    "requiresSeparateApp": true,
    "logoText": "UAB",
    "logoBg": "from-emerald-950 to-green-900"
  },

  {
    "id": "uni-100",
    "universityName": "Université de Montréal",
    "location": "Montreal, Quebec, Canada",
    "country": "Canada",
    "flag": "🇨🇦",
    "foundingYear": "1878",
    "scholarshipTitle": "UdeM Exemption Scholarship for International Students & Doctoral Tuition Exemptions",
    "ranking": "#=162 Global (QS 2027) | #168 Global (QS 2026) | Top Francophone Research University",
    "qsSubjectRankings": "Veterinary Science (Top 20 Global) | Life Sciences & Medicine | Pharmacy & Pharmacology | AI & Computer Science",
    "coverage": "Partial Aid",
    "amountValue": "Tuition Fee Exemptions up to CAD $24,067/yr (PhD) or Partial Tuition Reductions (Undergrad / Master's)",
    "tuitionFee": "Program-Dependent Overseas Tuition (CAD $27,000 – $38,000/yr before exemption) | Direct Portal",
    "tuitionAmountNumeric": 32000,
    "hasFullRide": false,
    "hasPartialAid": true,
    "hasFinancialAid": true,
    "financialAidType": "Tuition Waiver",
    "financialAidDetails": "Université de Montréal is a world-class French-language research university ranked #=162 globally in QS 2027. Global top 20 in Veterinary Science with major research strengths in AI, Neuroscience, Medicine, and Pharmacy. Offers the UdeM Exemption Scholarship for international students to reduce undergraduate/graduate tuition surcharges. At doctoral level, international PhD students receive automatic tuition exemptions valued up to ~$24,067/year reducing fees to Quebec-resident rates, alongside Canada Graduate Scholarships ($40,000/yr). French proficiency is required for most undergraduate programs.",
    "minGpa": "3.5+",
    "minSat": "1300 - 1450 (Optional / Not Required for French Curriculum)",
    "satRequirementCategory": "Optional",
    "satPolicyDetails": "Undergraduate admission requires completion of secondary credentials equivalent to Quebec DEC or Canadian Grade 12 (or French Baccalauréat / A-Levels / IB / HSSC). SAT is not required. Applicants must satisfy French language proficiency requirements (e.g. TCF, DELF B2/C1) for French-taught programs. Applications submitted directly via UdeM's admission portal.",
    "minIelts": "6.5",
    "ieltsCategory": "6.5",
    "toeflRequirement": "86+ iBT (French TCF/DELF required for instruction)",
    "commonAppAccepted": false,
    "applicationPortalDetails": "Direct Université de Montréal Official Admission Portal. French proficiency required for most undergraduate tracks.",
    "acceptanceRate": "55% - 57%",
    "deadline": "Feb 1 (Undergrad Fall Entry) / Feb 1 (Graduate)",
    "description": "#=162 Global (QS 2027) & Top 20 World in Veterinary Science. Global AI & Neuroscience powerhouse with automatic PhD tuition exemptions up to $24,067/yr.",
    "overviewLong": "Université de Montréal (UdeM) is one of Canada's major research-intensive universities and one of the world's largest French-language universities, located in Montreal, Quebec. UdeM ranks #=162 globally in QS 2027 (#168 in QS 2026).\n\nUdeM excels internationally in health, life sciences, and computer science: its Faculty of Veterinary Medicine ranks among the Top 20 globally in QS Subject Rankings 2026. UdeM is also a core anchor of Montreal's world-leading Artificial Intelligence ecosystem (MILA) alongside strengths in Medicine, Pharmacy, Neuroscience, and Engineering.\n\nInternational undergraduate aid includes the UdeM Exemption Scholarship, which directly reduces international tuition surcharges based on academic performance. At doctoral level, UdeM provides automatic International Doctoral Tuition Exemptions worth up to $24,067 per year, bringing international PhD fees down to the Quebec resident rate. French language proficiency is required for most undergraduate programs.",
    "topProgramsList": [
      {
        "name": "Faculty of Veterinary Medicine",
        "ranking": "Top 20 World in QS Veterinary Science 2026",
        "description": "Veterinary medicine, animal health, comparative medicine, and veterinary pharmacology."
      },
      {
        "name": "Department of Computer Science & Operations Research (DIRO / MILA AI Ecosystem)",
        "ranking": "World-Leading AI Research Hub (MILA)",
        "description": "Artificial intelligence, machine learning, deep learning, computer vision, algorithms, and operations research."
      },
      {
        "name": "Faculty of Medicine & Neuroscience Institute",
        "ranking": "Major Canadian Clinical & Research Centre",
        "description": "Medicine, clinical sciences, neuroscience, human genetics, and public health."
      },
      {
        "name": "Faculty of Pharmacy & Biomedical Sciences",
        "ranking": "Top Canadian Pharmaceutical School",
        "description": "Pharmacy, pharmacology, drug development, and pharmaceutical sciences."
      },
      {
        "name": "Polytechnique Montréal (Affiliated Engineering School)",
        "ranking": "Leading Canadian Engineering Institution",
        "description": "Computer engineering, biomedical engineering, aerospace engineering, and civil engineering."
      ,
    "logoText": "UM",
    "logoBg": "from-purple-700 to-indigo-950",
    "degreesOffered": ["Undergraduate", "Graduate", "PhD"],
    "tags": ["Canada", "Europe", "International", "Research"],
    "requiresSeparateApp": true}
    ],
    "allScholarshipsList": [,

      {
        "id": "uni-100-1",
        "title": "UdeM International Doctoral Tuition Exemption",
        "amount": "Up to CAD $24,067 / year Tuition Exemption (Reduces PhD Tuition to Quebec Rate)",
        "coverage": "Full Tuition",
        "eligibility": "Admitted international full-time doctoral students in eligible third-cycle PhD programs.",
        "description": "Automatic tuition surcharge waiver reducing international doctoral tuition to the Quebec resident rate, worth up to $24,067/year.",
        "deadline": "February 1",
        "requiresSeparateApp": false
      ,
    "logoText": "UM",
    "logoBg": "from-blue-700 to-indigo-950",
    "degreesOffered": ["Undergraduate", "Graduate", "PhD"]},

      {
        "id": "uni-100-2",
        "title": "UdeM Exemption Scholarship for International Students",
        "amount": "Partial Tuition Surcharge Exemption",
        "coverage": "Partial Aid",
        "eligibility": "International undergraduate and Master's applicants evaluated on academic excellence.",
        "description": "Tuition waiver reducing the international student fee surcharge for undergraduate and graduate degree programs.",
        "deadline": "February 1",
        "requiresSeparateApp": false
      ,
    "logoText": "UM",
    "logoBg": "from-blue-700 to-indigo-950",
    "degreesOffered": ["Undergraduate", "Graduate", "PhD"]},

      {
        "id": "uni-100-3",
        "title": "Canada Graduate Research Scholarship - Doctoral",
        "amount": "CAD $40,000 / year for 3 Years",
        "coverage": "Full Ride",
        "eligibility": "Eligible international and domestic doctoral researchers in active competitions.",
        "description": "Prestigious national research scholarship providing $40,000/year for up to 3 years of PhD research.",
        "deadline": "November 1",
        "requiresSeparateApp": true
      }
    ],
    "degreesOffered": [
      "Bachelors",
      "Masters",
      "PhD"
    ],
    "tags": [
      "QS Top 170 Global",
      "Top 20 Veterinary World",
      "Montreal AI Hub",
      "PhD Tuition Exemption",
      "Montreal Canada",
      "Canada"
    ],
    "requiresSeparateApp": true,
    "logoText": "UDM",
    "logoBg": "from-blue-900 to-cyan-950"
  },

  {
    "id": "uni-101",
    "universityName": "McMaster University",
    "location": "Hamilton, Ontario, Canada",
    "country": "Canada",
    "flag": "🇨🇦",
    "foundingYear": "1887",
    "scholarshipTitle": "McMaster Award of Excellence & International Entrance Awards (Up to $220,000)",
    "ranking": "#=174 Global (QS 2027) | #173 Global (QS 2026) | Member of Canada's U15 Research Group",
    "qsSubjectRankings": "Anatomy & Physiology (#18 Global) | Nursing (#24) | Sports/Kinesiology (#25) | Medicine (#31) | Life Sciences & Medicine (#56)",
    "coverage": "Partial Aid",
    "amountValue": "Up to $220,000 Total Package over 4 Years ($35,000/yr McMaster Award of Excellence + Major International Awards)",
    "tuitionFee": "Program-Dependent Overseas Tuition (CAD $40,000 – $64,000/yr) | OUAC Portal",
    "tuitionAmountNumeric": 48000,
    "hasFullRide": false,
    "hasPartialAid": true,
    "hasFinancialAid": true,
    "financialAidType": "Merit-Based",
    "financialAidDetails": "McMaster University is a top Canadian research university ranked #=174 globally in QS 2027. Internationally renowned for Medicine (#31 globally), Anatomy & Physiology (#18), Nursing (#24), and Kinesiology (#25), pioneering the problem-based learning model. Offers over $20M in international undergraduate awards ranging from $7,500 to $220,000 over four years for top-tier international recipients, including the flagship McMaster Award of Excellence ($35,000/yr for 4 years = $140,000 total in Engineering/CS/BioHealth). Master's research minimums set at $19,500+tuition in Engineering, while PhD minimum funding guarantees full tuition + $17,500/yr ($21,000+tuition in Engineering).",
    "minGpa": "3.7+",
    "minSat": "1350 - 1500 (SAT / ACT 30-34 Optional)",
    "satRequirementCategory": "Optional",
    "satPolicyDetails": "Undergraduate admission requires Ontario Grade 12 high school equivalent (or A-Levels/IB). US applicants require 1350+ SAT or 30+ ACT + APs. Pakistani applicants evaluated on HSSC/Intermediate or A-Levels with program prerequisites. Health Sciences and Engineering have supplementary applications. Applications submitted via Ontario Universities' Application Centre (OUAC 105 portal). English requirement: IELTS 6.5 (no band below 6.0) or TOEFL 86+.",
    "minIelts": "6.5",
    "ieltsCategory": "6.5",
    "toeflRequirement": "86+ iBT",
    "commonAppAccepted": false,
    "applicationPortalDetails": "Ontario Universities' Application Centre (OUAC) Required portal. Common App is NOT accepted.",
    "acceptanceRate": "58% - 60%",
    "deadline": "Jan 15 (OUAC Application Deadline) / Feb 1 (Supplementary Documents)",
    "description": "#=174 Global (QS 2027) & Pioneer in Medical Problem-Based Learning. World #18 in Anatomy, #24 Nursing, #31 Medicine. Total potential international award packages up to $220,000.",
    "overviewLong": "McMaster University is a member of Canada's prestigious U15 research group located in Hamilton, Ontario. McMaster ranks #=174 globally in QS 2027 (#173 in QS 2026).\n\nMcMaster is internationally famous for medical education, pioneered the global Problem-Based Learning (PBL) model, and holds world-class QS subject positions: Anatomy & Physiology (#18 globally), Nursing (#24), Kinesiology & Sports (#25), Medicine (#31), and Life Sciences & Medicine (#56). Its Faculty of Engineering is also a Canadian powerhouse in materials, mechatronics, and biomedical engineering.\n\nUndergraduate applications are submitted via OUAC. McMaster distributes over CAD $20 million annually in international undergraduate awards, featuring the McMaster Award of Excellence worth CAD $35,000/year over four years ($140,000 total) for Computer Science, Engineering, and Integrated Biomedical Engineering. For PhD students, university minimum funding guarantees full tuition plus $17,500/year stipend ($21,000 + tuition in Engineering).",
    "topProgramsList": [
      {
        "name": "Michael G. DeGroote School of Medicine & Health Sciences",
        "ranking": "#31 World in QS Medicine 2026 (Pioneer of PBL)",
        "description": "Medicine, health sciences, clinical research, biomedical discovery, and evidence-based medicine."
      },
      {
        "name": "School of Nursing & Department of Kinesiology",
        "ranking": "#24 World Nursing / #25 World Kinesiology - QS 2026",
        "description": "Nursing science, clinical practice, human kinetics, exercise physiology, and biomechanics."
      },
      {
        "name": "Faculty of Engineering & Department of Computing and Software",
        "ranking": "Top Canadian Engineering & BioMedical Tech Hub",
        "description": "Mechatronics engineering, software engineering, materials science, biomedical engineering, and computer science."
      },
      {
        "name": "Department of Anatomy and Physiology",
        "ranking": "#18 World in QS Anatomy 2026",
        "description": "Anatomical sciences, human physiology, cardiovascular research, and cell biology."
      },
      {
        "name": "DeGroote School of Business",
        "ranking": "Leading Canadian Business & Value Investing School",
        "description": "Finance, health services management, accounting, and business analytics."
      ,
    "logoText": "MU",
    "logoBg": "from-teal-700 to-slate-900",
    "degreesOffered": ["Undergraduate", "Graduate", "PhD"],
    "tags": ["Canada", "Europe", "International", "Research"],
    "requiresSeparateApp": true}
    ],
    "allScholarshipsList": [,

      {
        "id": "uni-101-1",
        "title": "McMaster University Award of Excellence",
        "amount": "CAD $35,000 / year × 4 Years ($140,000) or Up to $220,000 Total International Package",
        "coverage": "Partial Aid",
        "eligibility": "Top incoming international undergraduate students in eligible programs (Computer Science, Engineering, iBioMed).",
        "description": "Flagship entrance scholarship worth $35,000 annually over 4 years ($140,000 base award), with top-tier international recipients eligible for total scholarship and award packages up to $220,000.",
        "deadline": "February 1",
        "requiresSeparateApp": true
      ,
    "logoText": "MU",
    "logoBg": "from-blue-700 to-indigo-950",
    "degreesOffered": ["Undergraduate", "Graduate", "PhD"]},

      {
        "id": "uni-101-2",
        "title": "McMaster International Student Entrance Awards",
        "amount": "CAD $7,500 – $220,000 Total Potential Value Range",
        "coverage": "Partial Aid",
        "eligibility": "International fee-paying undergraduate applicants evaluated on academic record and achievements.",
        "description": "Range of multi-year and one-time merit awards distributed to high-achieving international applicants, with total combined packages reaching up to $220,000 over 4 years.",
        "deadline": "February 1",
        "requiresSeparateApp": true
      ,
    "logoText": "MU",
    "logoBg": "from-blue-700 to-indigo-950",
    "degreesOffered": ["Undergraduate", "Graduate", "PhD"]},

      {
        "id": "uni-101-3",
        "title": "McMaster Engineering PhD Funding Minimum",
        "amount": "CAD $21,000 / year Stipend + Full Tuition Coverage",
        "coverage": "Full Ride",
        "eligibility": "Admitted full-time doctoral students in McMaster Engineering.",
        "description": "Guaranteed doctoral package covering full tuition plus a minimum $21,000 annual living stipend for 4 years.",
        "deadline": "Varies by Department",
        "requiresSeparateApp": false
      ,
    "logoText": "MU",
    "logoBg": "from-blue-700 to-indigo-950",
    "degreesOffered": ["Undergraduate", "Graduate", "PhD"]},

      {
        "id": "uni-101-4",
        "title": "Canada Graduate Research Scholarship - Doctoral",
        "amount": "CAD $40,000 / year for 3 Years",
        "coverage": "Full Ride",
        "eligibility": "Eligible international and domestic doctoral researchers in active competitions.",
        "description": "Major national research scholarship providing $40,000/year for up to 3 years of PhD research.",
        "deadline": "November 1",
        "requiresSeparateApp": true
      }
    ],
    "degreesOffered": [
      "Bachelors",
      "Masters",
      "PhD"
    ],
    "tags": [
      "QS Top 175 Global",
      "World #31 Medicine",
      "World #18 Anatomy",
      "Up to $140k Award",
      "Hamilton Ontario",
      "Canada"
    ],
    "requiresSeparateApp": true,
    "logoText": "MAC",
    "logoBg": "from-rose-950 to-red-900"
  },

  {
    "id": "uni-102",
    "universityName": "University of Waterloo",
    "location": "Waterloo, Ontario, Canada",
    "country": "Canada",
    "flag": "🇨🇦",
    "foundingYear": "1957",
    "scholarshipTitle": "Faculty of Mathematics/Science International Scholarships & Minimum PhD Funding",
    "ranking": "#113 Global (QS 2027) | #1 Comprehensive Reputation in Canada (Maclean's 2026) | #97 World Reputation (THE 2025)",
    "qsSubjectRankings": "Computer Science & Info Systems (#27 Global) | Mathematics (#29) | Electrical & Electronic Eng (#30) | Engineering & Tech (#47)",
    "coverage": "Partial Aid",
    "amountValue": "CAD $10,000 Entrance Award or Up to CAD $80,000 Faculty Awards (Undergrad) / $29,145+/yr Guaranteed (PhD)",
    "tuitionFee": "Program-Dependent Overseas Tuition (CAD $45,000 – $68,000/yr for CS/Eng) | OUAC Portal",
    "tuitionAmountNumeric": 54000,
    "hasFullRide": false,
    "hasPartialAid": true,
    "hasFinancialAid": true,
    "financialAidType": "Merit-Based",
    "financialAidDetails": "The University of Waterloo is Canada's premier innovation and technology university ranked #113 globally in QS 2027. Global leader in Computer Science (#27 globally), Mathematics (#29), and Electrical Engineering (#30). Operates North America's largest paid co-op program with 8,000+ employers in 70+ countries, enabling students to gain 2 years of paid industry experience and significant earnings. Undergraduate financial aid includes $10,000 entrance awards and Math/Science international scholarships up to $80,000. For research PhD students, guaranteed minimum doctoral funding is CAD $29,145/year (average PhD funding is $45,710/yr) supplemented by International Doctoral Student Awards (IDSA).",
    "minGpa": "3.8+",
    "minSat": "1380 - 1520 (SAT / ACT 31-34 Optional)",
    "satRequirementCategory": "Optional",
    "satPolicyDetails": "Undergraduate admission requires secondary completion equivalent to Ontario Grade 12 (or A-Levels/IB). Highly competitive for CS and Engineering (requires Euclid Math Contest for Math/CS and Admission Information Form - AIF). US applicants require 1380+ SAT or 31+ ACT + AP Calculus/Physics. Pakistani applicants evaluated on HSSC/Intermediate or A-Levels with required math/science prep. Applications submitted via OUAC 105 portal. English requirement: IELTS 6.5 (Writing/Speaking 6.5) or TOEFL 90+ (Writing 25, Speaking 25).",
    "minIelts": "6.5",
    "ieltsCategory": "6.5",
    "toeflRequirement": "90+ iBT (Writing 25, Speaking 25)",
    "commonAppAccepted": false,
    "applicationPortalDetails": "Ontario Universities' Application Centre (OUAC 105) + Waterloo Quest Portal & AIF Form. Common App NOT accepted.",
    "acceptanceRate": "53% average (CS & Software Eng 4% - 10%)",
    "deadline": "Feb 1 (OUAC Application) / Feb 16 (AIF & Documents)",
    "description": "#113 Global (QS 2027) & #1 in Canada for Reputation. World #27 in CS, #29 Math, #30 Electrical Eng. Home of North America's largest paid co-op system (8,000+ employers).",
    "overviewLong": "The University of Waterloo is Canada's top university for technology, engineering, mathematics, computer science, and entrepreneurship, located in Waterloo, Ontario. Waterloo ranks #113 globally in QS 2027, #1 in reputation among Canada's comprehensive universities in Maclean's 2026, and #97 globally in THE Reputation Rankings 2025.\n\nWaterloo holds world-class subject rankings: Computer Science & Information Systems (#27 globally), Mathematics (#29), Electrical & Electronic Engineering (#30), and Engineering & Technology (#47). Its defining feature is North America's largest co-op program, connecting over 25,000 students to 8,000+ top tech employers globally (Google, Meta, Apple, Microsoft, NVIDIA).\n\nUndergraduate entry uses OUAC 105 alongside the required Admission Information Form (AIF). International financial aid includes Fall 2026 Entrance Scholarships ($10,000) and Math/Science awards up to $80,000. At doctoral level, Waterloo guarantees a minimum PhD funding package of CAD $29,145/year (with average doctoral funding reaching $45,710/year).",
    "topProgramsList": [
      {
        "name": "David R. Cheriton School of Computer Science",
        "ranking": "#27 World in QS Computer Science 2026",
        "description": "Artificial intelligence, machine learning, systems, software engineering, algorithms, cybersecurity, and human-computer interaction."
      },
      {
        "name": "Faculty of Mathematics",
        "ranking": "#29 World in QS Mathematics 2026 - Largest Math Faculty in NA",
        "description": "Pure mathematics, applied mathematics, combinatorics & optimization, statistics, actuarial science, and data science."
      },
      {
        "name": "Department of Electrical & Computer Engineering",
        "ranking": "#30 World in QS ECE 2026 / #47 Engineering Global",
        "description": "Computer engineering, electrical engineering, software engineering, robotics, power systems, and microelectronics."
      },
      {
        "name": "Department of Mechanical & Mechatronics Engineering",
        "ranking": "World-Leading Mechatronics & Automation Program",
        "description": "Mechatronics, robotics, autonomous systems, mechanical design, and thermal engineering."
      },
      {
        "name": "Institute for Quantum Computing (IQC) & Nanotechnology",
        "ranking": "Global Quantum Tech Research Hub",
        "description": "Quantum information processing, quantum cryptography, quantum materials, and nano-scale engineering."
      ,
    "logoText": "UW",
    "logoBg": "from-emerald-700 to-teal-950",
    "degreesOffered": ["Undergraduate", "Graduate", "PhD"],
    "tags": ["Canada", "Europe", "International", "Research"],
    "requiresSeparateApp": true}
    ],
    "allScholarshipsList": [,

      {
        "id": "uni-102-1",
        "title": "Faculty of Mathematics & Science International Student Scholarships",
        "amount": "CAD $25,000 – $80,000 Total Award",
        "coverage": "Partial Aid",
        "eligibility": "High-achieving international fee-paying undergraduate applicants entering Science or Mathematics degree programs.",
        "description": "Major multi-year entrance scholarships valued up to $80,000 distributed to top international applicants.",
        "deadline": "February 1",
        "requiresSeparateApp": true
      ,
    "logoText": "UW",
    "logoBg": "from-blue-700 to-indigo-950",
    "degreesOffered": ["Undergraduate", "Graduate", "PhD"]},

      {
        "id": "uni-102-2",
        "title": "International Student Entrance Scholarship",
        "amount": "CAD $10,000 Entrance Award",
        "coverage": "Partial Aid",
        "eligibility": "Admitted full-time international undergraduate students beginning degree study.",
        "description": "Entrance scholarship awarded to eligible international fee-paying first-year undergraduate students.",
        "deadline": "February 1",
        "requiresSeparateApp": false
      ,
    "logoText": "UW",
    "logoBg": "from-blue-700 to-indigo-950",
    "degreesOffered": ["Undergraduate", "Graduate", "PhD"]},

      {
        "id": "uni-102-3",
        "title": "Waterloo Minimum PhD Guaranteed Funding",
        "amount": "CAD $29,145 / year Minimum (Avg PhD Package $45,710 / year)",
        "coverage": "Full Ride",
        "eligibility": "All full-time registered doctoral students in good academic standing.",
        "description": "Guaranteed baseline funding package for up to 4 years of PhD research, averaging $45,710/year across programs.",
        "deadline": "Varies by Department",
        "requiresSeparateApp": false
      ,
    "logoText": "UW",
    "logoBg": "from-blue-700 to-indigo-950",
    "degreesOffered": ["Undergraduate", "Graduate", "PhD"]},

      {
        "id": "uni-102-4",
        "title": "International Doctoral Student Award (IDSA)",
        "amount": "Tuition Differential Support Award",
        "coverage": "Full Tuition",
        "eligibility": "Eligible full-time international doctoral students registered in research PhD programs.",
        "description": "Tuition support award helping offset the difference between international and domestic doctoral tuition fees.",
        "deadline": "Varies by Department",
        "requiresSeparateApp": false
      }
    ],
    "degreesOffered": [
      "Bachelors",
      "Masters",
      "PhD"
    ],
    "tags": [
      "QS Top 120 Global",
      "World #27 Computer Science",
      "North America #1 Co-op",
      "World #29 Mathematics",
      "Waterloo Ontario",
      "Canada"
    ],
    "requiresSeparateApp": true,
    "logoText": "WAT",
    "logoBg": "from-amber-950 to-yellow-900"
  },

  {
    "id": "uni-103",
    "universityName": "Western University",
    "location": "London, Ontario, Canada",
    "country": "Canada",
    "flag": "🇨🇦",
    "foundingYear": "1878",
    "scholarshipTitle": "International President's Entrance Scholarship & Doctoral Funding Guarantee",
    "ranking": "#142 Global (QS 2027) | #6 in Canada (QS 2027) | #151 Global (QS 2026) | #24 Global Sustainability",
    "qsSubjectRankings": "Physiology #6 | Philosophy (Tied #2 in Canada) | Top 400 Global across 40 subjects | 34 Subjects in Canada Top 10 | World-class Business & Medicine",
    "coverage": "Partial Aid",
    "amountValue": "CAD $100,000 (International President's Entrance) or $10,000 Welcome to Canada Award + $23,360/yr PhD Guarantee",
    "tuitionFee": "Program-Dependent Overseas Tuition (CAD $38,000 – $56,000/yr) | OUAC Portal",
    "tuitionAmountNumeric": 45000,
    "hasFullRide": false,
    "hasPartialAid": true,
    "hasFinancialAid": true,
    "financialAidType": "Merit-Based",
    "financialAidDetails": "Western University (University of Western Ontario) is a premier Canadian research institution ranked #142 globally and #6 in Canada in QS 2027. Renowned for its Ivey Business School, Schulich Medicine & Dentistry, Physiology (#6 globally), Philosophy (Tied #2 in Canada), Psychology, and Engineering. Offers over $26.5M in annual financial assistance with 50+ international awards, including 3 flagship International President's Entrance Scholarships worth $100,000 each, $80,000 Neen Hodgins Arts awards, and automatic $10,000 Welcome to Canada Awards with guaranteed residence. Doctoral funding guarantee provides $23,360/year (average PhD funding is $35,476/yr).",
    "minGpa": "3.6+",
    "minSat": "1320 - 1480 (SAT / ACT 29-33 Optional)",
    "satRequirementCategory": "Optional",
    "satPolicyDetails": "Undergraduate admission requires completion of secondary school equivalent to Ontario Grade 12 (or A-Levels/IB). US applicants require 1320+ SAT or 29+ ACT. Pakistani applicants evaluated on HSSC/Intermediate or A-Levels with program prerequisites. Applications submitted via Ontario Universities' Application Centre (OUAC 105 portal). English requirement: IELTS 6.5 (no band below 6.0) or TOEFL 83+ (no score below 20).",
    "minIelts": "6.5",
    "ieltsCategory": "6.5",
    "toeflRequirement": "83+ iBT",
    "commonAppAccepted": false,
    "applicationPortalDetails": "Ontario Universities' Application Centre (OUAC 105) Portal Required. Common App is NOT accepted.",
    "acceptanceRate": "~58% (varies sharply by program)",
    "deadline": "Jan 15 (OUAC Deadline) / Feb 14 (International President's Scholarship Application)",
    "description": "#142 Global (QS 2027) & #6 in Canada. Home of Ivey Business School & Schulich Medicine. Offers $100,000 International President's Entrance Scholarships & $10,000 Welcome awards.",
    "overviewLong": "Western University (officially the University of Western Ontario) is one of Canada's leading research-intensive universities located in London, Ontario. Western ranks #142 globally and #6 in Canada in QS 2027 (#151 in QS 2026) and #24 globally in QS Sustainability 2027.\n\nWestern offers world-renowned academic breadth across 40 subjects ranked in the global Top 400 and 34 subjects in Canada's Top 10. Key strengths include the world-famous Ivey Business School, Schulich School of Medicine & Dentistry, Physiology (#6 globally), Philosophy (Tied #2 in Canada), Psychology, Neuroscience, Law, and Engineering.\n\nUndergraduate applications use OUAC. Western provides $26.5M+ in annual financial support, featuring three $100,000 International President's Entrance Scholarships, $80,000 Neen Hodgins Arts awards, and $10,000 Welcome to Canada Awards with guaranteed 2-year on-campus residence. For PhD students, Western guarantees $23,360/year (with average PhD funding reaching $35,476/year).",
    "topProgramsList": [
      {
        "name": "Ivey Business School",
        "ranking": "Premier Canadian Business School (Case-Study Leader)",
        "description": "Finance, international management, strategic consulting, entrepreneurship, and HBA/MBA."
      },
      {
        "name": "Schulich School of Medicine & Dentistry & Brain and Mind Institute",
        "ranking": "Leading Canadian Medical & Brain Research Hub",
        "description": "Medicine, clinical dentistry, neuroscience, cognitive brain research, and biomedical sciences."
      },
      {
        "name": "Department of Physiology",
        "ranking": "Global #6",
        "description": "Pioneering research in cellular physiology, endocrine systems, metabolic pathways, and medical biochemistry."
      },
      {
        "name": "Department of Philosophy",
        "ranking": "Tied #2 in Canada in QS Philosophy 2026",
        "description": "Philosophy of mind, bioethics, philosophy of science, logic, and moral philosophy."
      },
      {
        "name": "Department of Psychology",
        "ranking": "Top 100 World in Psychology",
        "description": "Clinical psychology, cognitive neuroscience, developmental psychology, and behavioral science."
      },
      {
        "name": "Faculty of Engineering & Department of Computer Science",
        "ranking": "Top Canadian Engineering & Software Systems School",
        "description": "Software engineering, mechatronics, civil engineering, artificial intelligence, and computer systems."
      }
    ],
    "allScholarshipsList": [
      {
        "id": "uni-103-1",
        "title": "International President's Entrance Scholarship",
        "amount": "CAD $100,000 Total Award ($25,000 / year × 4 Years)",
        "coverage": "Partial Aid",
        "eligibility": "Outstanding international undergraduate applicants entering first-year study with superior academic record and demonstrated leadership (3 awards/yr).",
        "description": "Flagship international scholarship providing $25,000 annually over 4 years ($100,000 total) to exceptional international students.",
        "deadline": "February 14",
        "requiresSeparateApp": true
      },
      {
        "id": "uni-103-2",
        "title": "Neen Hodgins President's International Entrance Scholarship",
        "amount": "CAD $80,000 Total Award ($20,000 / year × 4 Years)",
        "coverage": "Partial Aid",
        "eligibility": "High-achieving international applicants entering full-time undergraduate study in the Faculty of Arts & Humanities.",
        "description": "Major multi-year humanities scholarship providing $80,000 total over four years.",
        "deadline": "February 14",
        "requiresSeparateApp": true
      },
      {
        "id": "uni-103-3",
        "title": "Welcome to Canada Admission Scholarship",
        "amount": "CAD $10,000 Award + Guaranteed 2-Year On-Campus Residence Access",
        "coverage": "Partial Aid",
        "eligibility": "Full-time international fee-paying undergraduate applicants entering Fall 2026.",
        "description": "Automatic entrance award providing $10,000 alongside guaranteed access to on-campus housing for 2 years.",
        "deadline": "January 15",
        "requiresSeparateApp": false
      },
      {
        "id": "uni-103-4",
        "title": "Western Doctoral Funding Guarantee",
        "amount": "CAD $23,360 / year Minimum (Avg PhD Package $35,476 / year)",
        "coverage": "Full Ride",
        "eligibility": "All eligible full-time doctoral students admitted to Western PhD programs.",
        "description": "Guaranteed doctoral funding package consisting of $17,000 living support + $6,360 tuition component annually.",
        "deadline": "Varies by Department",
        "requiresSeparateApp": false
      }
    ],
    "degreesOffered": [
      "Bachelors",
      "Masters",
      "PhD"
    ],
    "tags": [
      "QS Top 150 Global",
      "#6 Canada QS",
      "Ivey Business School",
      "$100k President Award",
      "London Ontario",
      "Canada"
    ],
    "requiresSeparateApp": true,
    "logoText": "WES",
    "logoBg": "from-purple-950 to-indigo-900"
  },

  {
    "id": "uni-104",
    "universityName": "Queen's University at Kingston",
    "location": "Kingston, Ontario, Canada",
    "country": "Canada",
    "flag": "🇨🇦",
    "foundingYear": "1841",
    "scholarshipTitle": "Arts and Science International Admission Award & Principal's Scholarship",
    "ranking": "#=179 Global (QS 2027) | #7 Medical-Doctoral in Canada (Maclean's 2026) | #6 National Reputation",
    "qsSubjectRankings": "Nursing #6 | Engineering & Commerce (National Standouts) | Law & Health Sciences | Psychology & Biology",
    "coverage": "Partial Aid",
    "amountValue": "CAD $10,000 – $25,000 / year × 4 Years ($100,000 Total) or CAD $7,000 Principal's Scholarship",
    "tuitionFee": "Program-Dependent Overseas Tuition (CAD $42,000 – $58,000/yr) | OUAC Portal",
    "tuitionAmountNumeric": 46000,
    "hasFullRide": false,
    "hasPartialAid": true,
    "hasFinancialAid": true,
    "financialAidType": "Merit-Based",
    "financialAidDetails": "Queen's University is one of Canada's most prestigious research institutions, ranked #=179 globally in QS 2027 and #7 in Canada among Medical-Doctoral universities (Maclean's 2026). Member of Canada's U15 research group with top national rankings in Commerce (Smith School of Business), Engineering, Nursing (#6 globally), and Health Sciences. Boasts Canada's highest graduation rate at 89%. International undergraduate aid includes the Arts and Science International Admission Award worth up to $25,000/year over four years ($100,000 total), the $7,000 Principal's Scholarship, and the Mehran Bibi Sheikh Memorial Scholarship specifically favoring Pakistani students.",
    "minGpa": "3.7+",
    "minSat": "1300 - 1460 (SAT / ACT 28-32 Optional)",
    "satRequirementCategory": "Optional",
    "satPolicyDetails": "Undergraduate admission requires secondary completion equivalent to Ontario Grade 12 (or A-Levels/IB). US applicants require 1300+ SAT or 28+ ACT + APs. High-demand programs like Commerce, Engineering, and Nursing require supplementary essays and high academic standing. Pakistani applicants evaluated on HSSC/Intermediate or A-Levels. Applications submitted via Ontario Universities' Application Centre (OUAC 105 portal). English requirement: IELTS 6.5 (no band below 6.0) or TOEFL 88+ (Writing 22, Speaking 22).",
    "minIelts": "6.5",
    "ieltsCategory": "6.5",
    "toeflRequirement": "88+ iBT",
    "commonAppAccepted": false,
    "applicationPortalDetails": "Ontario Universities' Application Centre (OUAC 105) Required. Common App is NOT accepted.",
    "acceptanceRate": "40% - 44% (Commerce & Health Sciences < 10%)",
    "deadline": "Feb 1 (OUAC Application & Document Submission)",
    "description": "#=179 Global (QS 2027) & #7 Medical-Doctoral in Canada. Home of Smith School of Business & Queen's Engineering. Highest graduation rate in Canada (89%). Offers up to $100,000 awards.",
    "overviewLong": "Queen's University at Kingston is one of Canada's oldest and most respected research universities, founded in 1841 in Kingston, Ontario. Member of Canada's elite U15 research university group, Queen's ranks #=179 globally in QS 2027 and #7 nationally among Medical-Doctoral universities in Maclean's 2026.\n\nQueen's is renowned for its undergraduate student experience, research intensity, and premier professional schools: the Smith School of Business (Commerce), Faculty of Engineering and Applied Science, Health Sciences, Nursing (#6 globally), and Faculty of Law. Queen's holds an 89% graduation rate—the highest in Canada.\n\nUndergraduate entry uses OUAC 105. International financial aid features the Arts and Science International Admission Award ($10,000 to $25,000/year over four years = $100,000 total), the Principal's Scholarship ($7,000), and the Mehran Bibi Sheikh Memorial Entrance Scholarship ($1,500) specifically awarded with preference to Pakistani citizens.",
    "topProgramsList": [
      {
        "name": "Smith School of Business (Bachelor of Commerce)",
        "ranking": "Top Canadian Business Program (Maclean's Standout)",
        "description": "Finance, strategy, consulting, marketing, international business, and entrepreneurship."
      },
      {
        "name": "Faculty of Engineering and Applied Science",
        "ranking": "Maclean's Standout Engineering Program",
        "description": "Mechanical engineering, civil engineering, computer engineering, mining engineering, and engineering physics."
      },
      {
        "name": "School of Nursing & School of Medicine",
        "ranking": "Nursing #6",
        "description": "Nursing science, clinical medicine, health sciences, rehabilitation therapy, and biomedical discovery."
      },
      {
        "name": "Department of Computer Science & Data Analytics",
        "ranking": "Top Canadian Computing & Software Hub",
        "description": "Artificial intelligence, software engineering, computational data analytics, algorithms, and cybersecurity."
      },
      {
        "name": "Faculty of Law & Political Studies",
        "ranking": "Leading Canadian Law & Public Policy School",
        "description": "Constitutional law, international relations, public policy, economics, and political philosophy."
      }
    ],
    "allScholarshipsList": [
      {
        "id": "uni-104-1",
        "title": "Arts and Science International Admission Award",
        "amount": "CAD $10,000 – $25,000 / year × 4 Years ($100,000 Total Award)",
        "coverage": "Partial Aid",
        "eligibility": "High-achieving international undergraduate applicants entering first-year degree study in the Faculty of Arts and Science.",
        "description": "Renewable entrance scholarship worth up to $25,000 annually over four years ($100,000 maximum value).",
        "deadline": "February 1",
        "requiresSeparateApp": false
      },
      {
        "id": "uni-104-2",
        "title": "Principal's Scholarship",
        "amount": "CAD $7,000 Entrance Award",
        "coverage": "Partial Aid",
        "eligibility": "Top 3% of incoming international and domestic undergraduate applicants in each faculty.",
        "description": "Automatic entrance award celebrating superior academic standing upon admission.",
        "deadline": "February 1",
        "requiresSeparateApp": false
      },
      {
        "id": "uni-104-3",
        "title": "Mehran Bibi Sheikh Memorial Entrance Scholarship",
        "amount": "CAD $1,500 Entrance Award",
        "coverage": "Partial Aid",
        "eligibility": "International undergraduate applicants, with explicit preference given to Pakistani citizens.",
        "description": "Donor-funded entrance scholarship recognizing academic merit with preference for Pakistani applicants.",
        "deadline": "February 1",
        "requiresSeparateApp": false
      },
      {
        "id": "uni-104-4",
        "title": "Ontario Graduate Scholarship (OGS) at Queen's",
        "amount": "CAD $15,000 for 1 Year",
        "coverage": "Partial Aid",
        "eligibility": "Eligible international Master's and PhD students holding a valid study permit.",
        "description": "Competitive provincial merit scholarship for graduate researchers studying in Ontario.",
        "deadline": "January 15",
        "requiresSeparateApp": true
      }
    ],
    "degreesOffered": [
      "Bachelors",
      "Masters",
      "PhD"
    ],
    "tags": [
      "QS Top 180 Global",
      "#7 Canada Medical-Doctoral",
      "Smith School Commerce",
      "Up to $100k Award",
      "Kingston Ontario",
      "Canada"
    ],
    "requiresSeparateApp": true,
    "logoText": "QUE",
    "logoBg": "from-amber-950 to-red-900"
  },

  {
    "id": "uni-105",
    "universityName": "University of Ottawa",
    "location": "Ottawa, Ontario, Canada",
    "country": "Canada",
    "flag": "🇨🇦",
    "foundingYear": "1848",
    "scholarshipTitle": "International English Admission Scholarship & Doctoral Admission Package",
    "ranking": "#=228 Global (QS 2027) | #187 Global (THE 2026) | Top 5 Research Intensity in Canada | World's Largest Bilingual University",
    "qsSubjectRankings": "Medicine (#93 Global - QS 2026) | Anatomy & Physiology (51-100 Global) | Computer Science (#4 Ontario) | Top 5 Ontario Engineering",
    "coverage": "Partial Aid",
    "amountValue": "Faculty-Dependent: Up to CAD $7,500 / term (Up to $60,000 over 4 Years for Eng/Science) / Minimum CAD $72,000 4-Yr Doctoral Package",
    "tuitionFee": "Program-Dependent Overseas Tuition (CAD $36,000 – $52,000/yr) | Direct Portal / OUAC",
    "tuitionAmountNumeric": 42000,
    "hasFullRide": false,
    "hasPartialAid": true,
    "hasFinancialAid": true,
    "financialAidType": "Merit-Based",
    "financialAidDetails": "The University of Ottawa is the world's largest bilingual English-French university and a top 5 Canadian research intensity powerhouse located in Canada's capital. Ranked #=228 globally in QS 2027 and #187 in THE 2026. Global top 100 in Medicine (#93) and Anatomy & Physiology (51-100), with top-tier Computer Science and Engineering presence connected directly to Kanata North (Canada's largest tech park). International undergraduate financial aid includes the Faculty-Dependent International English Admission Scholarship (providing up to $7,500/term = up to $60,000 total for Engineering and Science) and $10,000 Academic Excellence Awards. Doctoral students receive guaranteed admission packages worth minimum $72,000 over four years plus $45,000 International Doctoral Tuition Scholarships.",
    "minGpa": "3.5+",
    "minSat": "Test-Optional / Not Required (Evaluated on Grade 12 / A-Level / FSc marks)",
    "satRequirementCategory": "Optional",
    "satPolicyDetails": "uOttawa is test-optional/test-free for SAT/ACT. Undergraduate candidates are evaluated primarily on high school/grade 12 equivalent marks (e.g. Ontario Grade 12, A-Levels, IB, or FSc/HSSC). Highly competitive STEM fields like Computer Science, Data Science, and Software Engineering require minimum 90%+ admission averages. Applications submitted via uOttawa Direct Portal or OUAC 105.",
    "minIelts": "6.5",
    "ieltsCategory": "6.5",
    "toeflRequirement": "86+ iBT",
    "commonAppAccepted": false,
    "applicationPortalDetails": "uOttawa Direct Admission Portal or Ontario Universities' Application Centre (OUAC 105). Common App NOT accepted.",
    "acceptanceRate": "40% - 50% (CS, Software Eng, Data Sci requiring 90%+ averages)",
    "deadline": "Feb 1 (Undergrad Fall Entry) / Jan 15 (Graduate)",
    "description": "#=228 Global (QS 2027) & #187 THE World. World #93 Medicine & #4 Computer Science in Ontario. Located in Canada's capital with $60,000 International Scholarships.",
    "overviewLong": "The University of Ottawa (uOttawa) is one of Canada's premier research universities and the world's largest bilingual (English-French) university, located steps from Parliament Hill in Canada's capital. uOttawa ranks #=228 globally in QS 2027, #187 in THE World University Rankings 2026, and Top 5 in Canada for research intensity.\n\nuOttawa excels globally in Medicine (#93 in QS Subject 2026), Anatomy & Physiology (51-100), Law, Political Science, Public Policy, and Computer Science (#4 in Ontario). Its Faculty of Engineering anchors Canada's capital tech cluster with a major facility in Kanata North Technology Park (Canada's largest tech hub).\n\nUndergraduate international aid features the International English Admission Scholarship worth CAD $7,500/term (up to $60,000 over four years) alongside $10,000 Academic Excellence Scholarships. For research Master's students, thesis programs guarantee $30,000 minimum over two years, while PhD students receive guaranteed minimum packages of $72,000 over four years plus $45,000 International Doctoral Tuition Scholarships.",
    "topProgramsList": [
      {
        "name": "Faculty of Medicine & Ottawa Heart Institute",
        "ranking": "#93 World in QS Medicine 2026",
        "description": "Clinical medicine, cardiovascular science, neuroscience, anatomy & physiology, and public health."
      },
      {
        "name": "School of Electrical Engineering and Computer Science (SEECS)",
        "ranking": "#4 Computer Science in Ontario / Kanata North Hub",
        "description": "Computer science, software engineering, cybersecurity, data science, artificial intelligence, and robotics."
      },
      {
        "name": "Faculty of Law (Common Law & Civil Law)",
        "ranking": "Premier Canadian Law & Constitutional Hub",
        "description": "Common law, civil law, international human rights, technology law, and public policy."
      },
      {
        "name": "School of Political Studies & Public Policy",
        "ranking": "Top Canadian Capital Government Hub",
        "description": "Political science, international affairs, public administration, diplomacy, and governance."
      },
      {
        "name": "Telfer School of Management",
        "ranking": "AACSB & EQUIS Accredited Business School",
        "description": "Finance, international management, healthcare management, business analytics, and entrepreneurship."
      ,
    "logoText": "UO",
    "logoBg": "from-red-700 to-rose-950",
    "degreesOffered": ["Undergraduate", "Graduate", "PhD"],
    "tags": ["Canada", "Europe", "International", "Research"],
    "requiresSeparateApp": true}
    ],
    "allScholarshipsList": [,

      {
        "id": "uni-105-1",
        "title": "International English Admission Scholarship (Faculty-Dependent)",
        "amount": "Faculty-Dependent: Up to CAD $7,500 / term (Up to CAD $60,000 Total over 4 Years)",
        "coverage": "Partial Aid",
        "eligibility": "Admitted full-time international undergraduate students in eligible English-taught degree programs.",
        "description": "Faculty-dependent automatic entrance scholarship providing up to $7,500 per term for Engineering, Science, and high-demand faculties, and standard rate amounts for Arts/Social Sciences over up to 12 terms ($60,000 maximum total).",
        "deadline": "February 1",
        "requiresSeparateApp": false
      ,
    "logoText": "UO",
    "logoBg": "from-blue-700 to-indigo-950",
    "degreesOffered": ["Undergraduate", "Graduate", "PhD"]},

      {
        "id": "uni-105-2",
        "title": "International English Academic Excellence Scholarship",
        "amount": "CAD $10,000 Total Entrance Award",
        "coverage": "Partial Aid",
        "eligibility": "Top 100 international undergraduate applicants entering with an admission average of 90% or higher.",
        "description": "Merit award for top-tier international students, combinable with the International English Admission Scholarship.",
        "deadline": "February 1",
        "requiresSeparateApp": false
      ,
    "logoText": "UO",
    "logoBg": "from-blue-700 to-indigo-950",
    "degreesOffered": ["Undergraduate", "Graduate", "PhD"]},

      {
        "id": "uni-105-3",
        "title": "uOttawa Doctoral Admission Scholarship Package",
        "amount": "Minimum CAD $72,000 over 4 Years ($18,000 / year Minimum)",
        "coverage": "Full Ride",
        "eligibility": "All full-time registered PhD students with an admission average of 8.0/10 or higher.",
        "description": "Guaranteed 4-year doctoral package combining university funding ($9,000/yr) and faculty teaching/research assistantships ($9,000/yr).",
        "deadline": "Varies by Department",
        "requiresSeparateApp": false
      ,
    "logoText": "UO",
    "logoBg": "from-blue-700 to-indigo-950",
    "degreesOffered": ["Undergraduate", "Graduate", "PhD"]},

      {
        "id": "uni-105-4",
        "title": "International Doctoral Tuition Scholarship",
        "amount": "CAD $45,000 over 5 Years ($3,000 / term Tuition Credit)",
        "coverage": "Full Tuition",
        "eligibility": "Full-time international doctoral students paying international tuition fees.",
        "description": "Tuition support scholarship directly credited to international PhD student accounts ($3,000/term for 15 terms).",
        "deadline": "Varies by Department",
        "requiresSeparateApp": false
      }
    ],
    "degreesOffered": [
      "Bachelors",
      "Masters",
      "PhD"
    ],
    "tags": [
      "QS Top 230 Global",
      "World #93 Medicine",
      "Canada Capital Hub",
      "$60k International Award",
      "Ottawa Ontario",
      "Canada"
    ],
    "requiresSeparateApp": false,
    "logoText": "OTT",
    "logoBg": "from-red-950 to-stone-900"
  },

  {
    "id": "uni-106",
    "universityName": "University of Calgary",
    "location": "Calgary, Alberta, Canada",
    "country": "Canada",
    "flag": "🇨🇦",
    "foundingYear": "1966",
    "scholarshipTitle": "University of Calgary International Entrance Scholarship & Minimum Graduate Packages",
    "ranking": "#249 Global (QS 2027) | #211 Global (QS 2026) | Member of Canada's U15 Research Group",
    "qsSubjectRankings": "Petroleum & Energy Engineering | Geosciences & Geophysics (#1 Energy Hub) | Computer Science & AI | Medicine | Veterinary Science",
    "coverage": "Partial Aid",
    "amountValue": "CAD $20,000 / year Renewable ($80,000 Total Undergrad) / Guaranteed PhD Minimum $33,205 / year × 4 Years",
    "tuitionFee": "Faculty-Dependent Overseas Tuition (CAD $28,000 – $42,000+/yr | Arts/Science ~$28k–$30k, Eng/CS/Business $35k–$42k+) | UCalgary Direct Portal",
    "tuitionAmountNumeric": 36000,
    "hasFullRide": false,
    "hasPartialAid": true,
    "hasFinancialAid": true,
    "financialAidType": "Merit-Based",
    "financialAidDetails": "The University of Calgary is a major U15 Canadian research university ranked #249 globally in QS 2027 (#211 in QS 2026). Located in Canada's energy capital, UCalgary is internationally renowned for Petroleum Engineering, Energy Systems, Geosciences, Computer Science, Veterinary Medicine, and Medicine (Cumming School of Medicine). Offers the $20,000/year renewable International Entrance Scholarship ($80,000 total). At graduate level, UCalgary provides outstanding guaranteed minimum funding: $25,455/year minimum for thesis Master's students (2 years) and $33,205/year minimum guaranteed for PhD researchers (4 years).",
    "minGpa": "3.5+",
    "minSat": "Test-Optional / Not Required (Evaluated on Grade 12 / A-Level / FSc marks)",
    "satRequirementCategory": "Optional",
    "satPolicyDetails": "UCalgary is test-optional and evaluates international applicants (following A-Levels, IB, FSc/HSSC, or Grade 12) primarily on their high school percentage/grade equivalents rather than requiring US SAT/ACT scores for general consideration.",
    "minIelts": "6.5",
    "ieltsCategory": "6.5",
    "toeflRequirement": "86+ iBT",
    "commonAppAccepted": false,
    "applicationPortalDetails": "MyUCalgary Portal (High School Prestige Awards Competition). Evaluated on high school transcripts.",
    "acceptanceRate": "10% - 20% (Highly Selective Overall)",
    "deadline": "March 1 (Undergrad Application) / Dec 1 (High School Prestige Scholarships)",
    "description": "#249 Global (QS 2027) & #211 QS 2026. Canada's Energy & Geosciences Hub with $20,000/yr renewable entrance awards and guaranteed $33,205/yr PhD funding.",
    "overviewLong": "The University of Calgary (UCalgary) is a leading Canadian research university and a member of the U15 group of research-intensive universities, located in Calgary, Alberta. UCalgary ranks #249 globally in QS 2027 (#211 in QS 2026).\n\nUCalgary is deeply integrated with Canada's energy, technology, and health sectors. Core academic strengths include Schulich School of Engineering, Department of Computer Science, Cumming School of Medicine, Faculty of Veterinary Medicine, Haskayne School of Business, and Geosciences.\n\nUndergraduate admission uses the MyUCalgary portal. International entrance financial aid features the University of Calgary International Entrance Scholarship worth CAD $20,000 per year renewable ($80,000 total over four years). For thesis graduate students, UCalgary enforces guaranteed minimum funding packages: CAD $25,455/year for Master's students (2 years) and CAD $33,205/year guaranteed for doctoral students (4 years).",
    "topProgramsList": [
      {
        "name": "Schulich School of Engineering (Petroleum, Energy & Software)",
        "ranking": "Global Top Tier in Petroleum Engineering & Energy Systems",
        "description": "Petroleum engineering, energy engineering, software engineering, biomedical engineering, and geomatics."
      },
      {
        "name": "Department of Computer Science & AI Research",
        "ranking": "Top Canadian Computing & Robotics Centre",
        "description": "Artificial intelligence, machine learning, data science, human-computer interaction, cybersecurity, and robotics."
      },
      {
        "name": "Cumming School of Medicine & Faculty of Veterinary Medicine",
        "ranking": "Major Canadian Medical & Veterinary Research Center",
        "description": "Medicine, neuroscience, veterinary medicine, animal health, and cardiovascular research."
      },
      {
        "name": "Department of Geosciences & Geophysics",
        "ranking": "#1 Energy & Subsurface Geoscience Hub in Canada",
        "description": "Geology, geophysics, petroleum geoscience, environmental earth science, and hydrogeology."
      },
      {
        "name": "Haskayne School of Business",
        "ranking": "Leading Canadian Business & Energy Finance School",
        "description": "Finance, energy business, real estate, accounting, and risk management."
      ,
    "logoText": "UC",
    "logoBg": "from-amber-700 to-orange-950",
    "degreesOffered": ["Undergraduate", "Graduate", "PhD"],
    "tags": ["Canada", "Europe", "International", "Research"],
    "requiresSeparateApp": true}
    ],
    "allScholarshipsList": [,

      {
        "id": "uni-106-1",
        "title": "University of Calgary International Entrance Scholarship",
        "amount": "CAD $20,000 / year Renewable ($80,000 Total over 4 Years)",
        "coverage": "Partial Aid",
        "eligibility": "International undergraduate applicants entering first year with outstanding academic achievement.",
        "description": "Renewable entrance scholarship worth $20,000 annually over four years ($80,000 total value) applied directly via the MyUCalgary Portal High School Prestige Awards competition (requires 2.60+ GPA maintenance).",
        "deadline": "December 1",
        "requiresSeparateApp": false
      ,
    "logoText": "UC",
    "logoBg": "from-blue-700 to-indigo-950",
    "degreesOffered": ["Undergraduate", "Graduate", "PhD"]},

      {
        "id": "uni-106-2",
        "title": "UCalgary International PhD Guaranteed Minimum Funding",
        "amount": "CAD $33,205 / year Guaranteed Minimum for 4 Years",
        "coverage": "Full Ride",
        "eligibility": "All full-time registered international doctoral students in thesis PhD programs.",
        "description": "Guaranteed minimum annual funding package providing at least $33,205/year for 4 years of doctoral research.",
        "deadline": "Varies by Department",
        "requiresSeparateApp": false
      ,
    "logoText": "UC",
    "logoBg": "from-blue-700 to-indigo-950",
    "degreesOffered": ["Undergraduate", "Graduate", "PhD"]},

      {
        "id": "uni-106-3",
        "title": "Thesis-Based Master's Minimum Guaranteed Funding",
        "amount": "CAD $25,455 / year Guaranteed Minimum for 2 Years",
        "coverage": "Full Ride",
        "eligibility": "Admitted full-time international thesis-based MA / MSc Master's students.",
        "description": "Guaranteed baseline funding package providing $25,455/year for the first two years of Master's study.",
        "deadline": "Varies by Department",
        "requiresSeparateApp": false
      ,
    "logoText": "UC",
    "logoBg": "from-blue-700 to-indigo-950",
    "degreesOffered": ["Undergraduate", "Graduate", "PhD"]},

      {
        "id": "uni-106-4",
        "title": "Energizing Canada International Entrance Scholarship",
        "amount": "CAD $20,000 / year Renewable Award",
        "coverage": "Partial Aid",
        "eligibility": "Top international applicants entering Engineering, Commerce, Health Sciences, or Urban Studies.",
        "description": "Merit and need award recognizing high-achieving international students in priority discipline areas.",
        "deadline": "December 1",
        "requiresSeparateApp": true
      }
    ],
    "degreesOffered": [
      "Bachelors",
      "Masters",
      "PhD"
    ],
    "tags": [
      "QS Top 250 Global",
      "U15 Canada Group",
      "#1 Energy & Geosciences",
      "$80k Renewable Award",
      "Calgary Alberta",
      "Canada"
    ],
    "requiresSeparateApp": false,
    "logoText": "CAL",
    "logoBg": "from-red-950 to-amber-900"
  },

  {
    "id": "uni-107",
    "universityName": "Dalhousie University",
    "location": "Halifax, Nova Scotia, Canada",
    "country": "Canada",
    "flag": "🇨🇦",
    "foundingYear": "1818",
    "scholarshipTitle": "General Entrance Awards & Abdul Majid Bader Graduate Scholarship",
    "ranking": "#298 Global (QS 2027) | #12 in Canada (QS 2027) | #1 in Canada for International Faculty | #9 Medical-Doctoral (Maclean's 2026)",
    "qsSubjectRankings": "Oceanography (#37 Global ShanghaiRanking) | Petroleum Engineering (51-100 Global / #3 Canada) | Law (#85 Global THE / #6 Canada) | Earth & Marine Sciences (151-200)",
    "coverage": "Partial Aid",
    "amountValue": "CAD $10,000 – $20,000 Entrance Awards (Undergrad) / CAD $40,000 / year × 2 Years Graduate Scholarship",
    "tuitionFee": "Faculty-Dependent Overseas Tuition (CAD $28,000 – $42,000+/yr | Arts/Science ~$28k, Eng/CS $36k–$42k+) | Dalhousie Direct Portal",
    "tuitionAmountNumeric": 35000,
    "hasFullRide": false,
    "hasPartialAid": true,
    "hasFinancialAid": true,
    "financialAidType": "Merit-Based",
    "financialAidDetails": "Dalhousie University is Atlantic Canada's top research university and a member of Canada's U15 research university group, located in Halifax, Nova Scotia. Ranked #298 globally in QS 2027 (#12 in Canada) and #1 in Canada for International Faculty. Internationally famous for Oceanography (#37 globally in ShanghaiRanking 2025), Petroleum Engineering (51-100 Global / #3 Canada), Schulich School of Law (#85 globally in THE), Earth & Marine Sciences, and Health Sciences. Offers general entrance scholarships ($10,000 – $20,000) for undergraduates and high-value graduate awards including the $40,000/yr Abdul Majid Bader Scholarship and $30,000/yr Agriculture PhD scholarships.",
    "minGpa": "3.5+",
    "minSat": "Test-Optional / Not Required (Evaluated on Grade 12 / A-Level / FSc marks)",
    "satRequirementCategory": "Optional",
    "satPolicyDetails": "Dalhousie is test-optional for most programs and evaluates international applicants (following A-Levels, IB, FSc/HSSC, or Grade 12) primarily on high school percentage grades and subject prerequisites rather than requiring SAT/ACT scores.",
    "minIelts": "6.5",
    "ieltsCategory": "6.5",
    "toeflRequirement": "90+ iBT",
    "commonAppAccepted": false,
    "applicationPortalDetails": "Dalhousie University Direct Admission Portal. Common App is NOT accepted.",
    "acceptanceRate": "Moderately Selective (~60% - 70%, varies by program)",
    "deadline": "Feb 15 (General Entrance Award Deadline) / March 1 (General Application)",
    "description": "#298 Global (QS 2027) & #1 in Canada for International Faculty. Global leader in Oceanography (#37 World), Petroleum Engineering, & Law with $40,000/yr graduate awards.",
    "overviewLong": "Dalhousie University is one of Canada's oldest and most research-intensive universities, founded in 1818 in Halifax, Nova Scotia. Dalhousie is a member of Canada's U15 research group, ranking #298 globally in QS 2027, #12 in Canada, and #1 in Canada for International Faculty.\n\nDalhousie is Canada's undisputed leader in ocean and marine research, ranking #37 globally in Oceanography (ShanghaiRanking 2025) and top-tier in Petroleum Engineering (51-100 Global / #3 Canada), Earth Sciences, Geology, Agriculture, Schulich School of Law (#85 globally in THE 2026), and Medicine.\n\nUndergraduate entry uses the Dalhousie portal with general entrance scholarships ranging from $10,000 to $20,000. Thesis graduate funding distributes over $24 million annually (typical early funding $16,500–$24,000+/yr), featuring major awards like the Abdul Majid Bader Graduate Scholarship ($40,000/year × 2 years = $80,000 total) and Lucky Bean Agriculture PhD awards ($30,000/year × 3 years).",
    "topProgramsList": [
      {
        "name": "Department of Oceanography & Marine Biology",
        "ranking": "#37 World in ShanghaiRanking Oceanography 2025",
        "description": "Oceanography, marine biology, climate science, fisheries, ocean technology, and coastal ecosystems."
      },
      {
        "name": "Department of Process Engineering & Applied Science (Petroleum)",
        "ranking": "#3 in Canada / 51-100 World in QS Petroleum Engineering 2026",
        "description": "Petroleum engineering, chemical engineering, clean energy transition, and materials engineering."
      },
      {
        "name": "Schulich School of Law",
        "ranking": "#85 World in THE Law 2026 / #6 Canada",
        "description": "Marine law, environmental law, constitutional law, technology law, and corporate law."
      },
      {
        "name": "Faculty of Medicine & School of Nursing",
        "ranking": "Top Atlantic Canadian Medical & Health Centre",
        "description": "Clinical medicine, nursing science, anatomy & physiology, public health, and neuroscience."
      },
      {
        "name": "Faculty of Agriculture & Sustainable Food Systems",
        "ranking": "Premier Agricultural Research Hub",
        "description": "Sustainable agriculture, plant & animal science, agricultural economics, and food science."
      ,
    "logoText": "DU",
    "logoBg": "from-teal-700 to-slate-900",
    "degreesOffered": ["Undergraduate", "Graduate", "PhD"],
    "tags": ["Canada", "Europe", "International", "Research"],
    "requiresSeparateApp": true}
    ],
    "allScholarshipsList": [,

      {
        "id": "uni-107-1",
        "title": "Dalhousie General Entrance Awards & Scholarships",
        "amount": "CAD $10,000 – $20,000 Value Range",
        "coverage": "Partial Aid",
        "eligibility": "Incoming international undergraduate applicants evaluated on academic achievement (80%+ minimum) and leadership.",
        "description": "Range of entrance awards distributed to top incoming international students based on academic standing.",
        "deadline": "February 15",
        "requiresSeparateApp": true
      ,
    "logoText": "DU",
    "logoBg": "from-blue-700 to-indigo-950",
    "degreesOffered": ["Undergraduate", "Graduate", "PhD"]},

      {
        "id": "uni-107-2",
        "title": "Abdul Majid Bader Graduate Scholarship",
        "amount": "CAD $40,000 / year for 2 Years ($80,000 Total Award)",
        "coverage": "Full Ride",
        "eligibility": "Full-time thesis-based Master's or PhD international applicants with preference for qualifying candidates.",
        "description": "Major graduate research scholarship providing $40,000 annually over two years ($80,000 total).",
        "deadline": "January 15",
        "requiresSeparateApp": true
      ,
    "logoText": "DU",
    "logoBg": "from-blue-700 to-indigo-950",
    "degreesOffered": ["Undergraduate", "Graduate", "PhD"]},

      {
        "id": "uni-107-3",
        "title": "Lucky Bean Foundation Graduate Scholarship (Agriculture PhD)",
        "amount": "CAD $30,000 / year for 3 Years ($90,000 Total Award)",
        "coverage": "Full Ride",
        "eligibility": "High-achieving doctoral researchers in sustainable agriculture and profitable food systems.",
        "description": "Specialized doctoral scholarship providing $30,000 annually for 3 years in agricultural research.",
        "deadline": "January 15",
        "requiresSeparateApp": true
      ,
    "logoText": "DU",
    "logoBg": "from-blue-700 to-indigo-950",
    "degreesOffered": ["Undergraduate", "Graduate", "PhD"]},

      {
        "id": "uni-107-4",
        "title": "Faculty of Graduate Studies Thesis Minimum Package",
        "amount": "CAD $16,500 – $24,000+ / year Stipend Package",
        "coverage": "Partial Aid",
        "eligibility": "Full-time registered thesis-based Master's and PhD students in eligible faculties.",
        "description": "Baseline graduate financial package combining departmental stipends, teaching assistantships, and bursaries.",
        "deadline": "Varies by Department",
        "requiresSeparateApp": false
      }
    ],
    "degreesOffered": [
      "Bachelors",
      "Masters",
      "PhD"
    ],
    "tags": [
      "QS Top 300 Global",
      "World #37 Oceanography",
      "Atlantic Canada Hub",
      "$80k Graduate Award",
      "Halifax Nova Scotia",
      "Canada"
    ],
    "requiresSeparateApp": true,
    "logoText": "DAL",
    "logoBg": "from-amber-950 to-stone-900"
  },

  {
    "id": "uni-108",
    "universityName": "York University",
    "location": "Toronto, Ontario, Canada",
    "country": "Canada",
    "flag": "🇨🇦",
    "foundingYear": "1959",
    "scholarshipTitle": "President's International Scholarship of Excellence & International Entrance Awards",
    "ranking": "#=322 Global (QS 2027) | #=333 (QS 2026) | Top 5 Canadian Comprehensive (Maclean's 2026) | Top 6% World (QS Sustainability 2026) | Top 35 World (THE Impact Rankings)",
    "qsSubjectRankings": "English Language & Literature (#78 World) | Sociology (#99 World) | Psychology (#99 World / #5 Canada / #3 Ontario / Top 75 Shanghai) | History (51-100 World) | Performing Arts (51-100 World) | Social Policy & Administration (51-100 World)",
    "coverage": "Full Ride",
    "amountValue": "CAD $45,000 / year × 4 Years ($180,000 Total) President's Scholarship or CAD $37,500 Scholarship of Distinction",
    "tuitionFee": "Faculty-Dependent Overseas Tuition (CAD $40,000 – $47,000+/yr | Arts & Science ~$40,000/yr, Schulich Business ~$40,000–$44,000/yr, Lassonde Engineering ~$47,000/yr) | York Direct Portal / OUAC 105",
    "tuitionAmountNumeric": 42000,
    "hasFullRide": true,
    "hasPartialAid": true,
    "hasFinancialAid": true,
    "financialAidType": "Merit-Based",
    "financialAidDetails": "York University offers over CAD $12 million annually in international scholarships and awards. Key undergraduate awards include the President's International Scholarship of Excellence ($180,000 over 4 years; application deadline Jan 26, 2026), Tentanda Via Award ($120,000 over 4 years), and automatic entrance awards like the York International Scholarship of Distinction ($37,500 total over 4 years for 90%+ averages). IMPORTANT RESTRICTION: International Fall 2026 applicants admitted to Computer Science, Cybersecurity, or Engineering are NOT ELIGIBLE for the Scholarship of Distinction unless completing high school under the Ontario curriculum. For graduate studies (2026-27 handbook), international MA tuition is ~$19,716.36/yr and PhD tuition is ~$18,891.36/yr with program-specific funding packages (e.g., Lassonde Civil Eng MSc provides $88,214 over 6 terms, yielding ~$21,000/yr net pay).",
    "minGpa": "3.6+",
    "minSat": "Test-Optional / Not Required (Evaluated on Grade 12 / A-Level / FSc marks)",
    "satRequirementCategory": "Optional",
    "satPolicyDetails": "York University is test-optional for SAT/ACT. International candidates (including A-Level, IB, and FSc/HSSC graduates) are evaluated primarily on high school percentage grades and prerequisite subject marks. Applications are submitted via York Direct Application or OUAC 105 (Winter 2027 deadline: Nov 18, 2026; Fall 2026 open). English requirement: IELTS 6.5 (no band below 6.0), TOEFL 88+ iBT, PTE 60+, Duolingo 120+.",
    "minIelts": "6.5",
    "ieltsCategory": "6.5",
    "toeflRequirement": "88+ iBT (PTE 60+, DET 120+)",
    "commonAppAccepted": false,
    "applicationPortalDetails": "York University Direct Application System or OUAC 105 (Ontario Universities' Application Centre). Common App is NOT accepted.",
    "acceptanceRate": "50% - 62% (Schulich BBA & Osgoode Law < 15%)",
    "deadline": "Jan 26, 2026 (President's Award Student Deadline) / Nov 18, 2026 (Winter 2027 Most Programs)",
    "description": "#=322 Global (QS 2027) & Top 5 Comprehensive in Canada. Globally ranked in English (#78), Psychology (#99), & Sociology (#99) with $180,000 President's Scholarship.",
    "overviewLong": "York University is Canada's third-largest public research university, established in 1959 in Toronto, Ontario. York hosts over 55,000 students, including 8,700+ international students representing 160+ countries across more than 200 academic degree programs. The university operates four distinct campuses: Keele Campus (main comprehensive campus in Toronto), Glendon Campus (bilingual English/French liberal arts campus), Markham Campus (newer technology and innovation hub in York Region), and Las Nubes Eco Campus (environmental research facility in Costa Rica).\n\nRanked #=322 globally in QS World University Rankings 2027 (#=333 in QS 2026), Top 5 among Canadian comprehensive universities in Maclean's 2026, Top 6% globally in QS Sustainability 2026, and Top 35 globally in THE Impact Rankings, York is celebrated for its interdisciplinary research and social impact. In the QS World University Rankings by Subject 2026, York achieves top global rankings in English Language & Literature (#78 globally), Sociology (#99 globally), Psychology (#99 globally / #5 in Canada / #3 in Ontario / Top 75 in ShanghaiRanking 2025), History (51–100 globally), Performing Arts (51–100 globally), and Social Policy & Administration (51–100 globally).\n\nYork's academic landscape spans 11 major faculties, including the world-renowned Schulich School of Business (#1 MBA in Canada by Forbes/Economist/Bloomberg), Osgoode Hall Law School (top 3 in Canada), Lassonde School of Engineering, Faculty of Health (#1 in Canada for Kinesiology), Faculty of Liberal Arts & Professional Studies, School of the Arts, Media, Performance & Design (AMPD), Faculty of Science, and Faculty of Environmental & Urban Change. York reports that 92% of graduates secure employment within two years of graduation, supported by co-op programs and Toronto's position as Canada's largest economic hub.\n\nDirect-entry international undergraduate students applying from high school for Fall 2026 receive a 4-year on-campus residence guarantee (residence and meal fees apply). Over CAD $12 million in international entrance awards are available, led by the competitive President's International Scholarship of Excellence ($45,000/yr × 4 yrs = $180,000 total; application deadline Jan 26, 2026). Automatic awards include the York International Scholarship of Distinction ($37,500 total over 4 years for 90%+ averages, with a Fall 2026 restriction excluding CS, Cybersecurity, and Engineering unless completing the Ontario curriculum) and the York International Merit Award ($25,000 total for 80-89.9% averages). Estimated 2026-27 international graduate costs for non-professional programs are $19,716.36/yr (MA) and $18,891.36/yr (PhD), backed by program-specific funding packages.",
    "topProgramsList": [
      {
        "name": "Department of English Language & Literature",
        "ranking": "#78 World in QS Subject Rankings 2026",
        "description": "Literary studies, creative writing, world literature, rhetoric, and digital humanities."
      },
      {
        "name": "Department of Psychology & Faculty of Health",
        "ranking": "#99 World / #5 Canada / #3 Ontario in QS 2026 / Top 75 Shanghai 2025",
        "description": "Clinical psychology, cognitive neuroscience, developmental psychology, kinesiology (#1 Canada), and health science."
      },
      {
        "name": "Department of Sociology",
        "ranking": "#99 World in Sociology / 51-100 World in Social Policy (QS 2026)",
        "description": "Social policy, political sociology, migration studies, global development, and urban sociology."
      },
      {
        "name": "Schulich School of Business (BBA, iBBA, MBA)",
        "ranking": "#1 MBA in Canada (Forbes/Economist/Bloomberg)",
        "description": "Accounting, finance, marketing, business analytics, strategy, entrepreneurship, and international business."
      },
      {
        "name": "Osgoode Hall Law School",
        "ranking": "Top 3 Law School in Canada",
        "description": "Constitutional law, international trade law, corporate governance, human rights, and intellectual property law."
      },
      {
        "name": "Lassonde School of Engineering",
        "ranking": "Premier Toronto Technology & Co-op Engineering Hub",
        "description": "Computer science, software engineering, computer engineering, space engineering, civil engineering, and cybersecurity."
      }
    ],
    "allScholarshipsList": [
      {
        "id": "uni-108-1",
        "title": "President's International Scholarship of Excellence",
        "amount": "CAD $45,000 / year × 4 Years ($180,000 Total Award)",
        "coverage": "Full Ride",
        "eligibility": "Incoming international high-school applicants entering first-year undergraduate study with outstanding academic excellence, leadership, and community involvement.",
        "description": "York's premier international entrance scholarship worth $180,000 over 4 years ($45,000/year). Application required (Student Deadline: Jan 26, 2026; Nomination/Reference Deadline: Feb 4, 2026). Highly competitive and cannot be combined with other York entrance scholarships.",
        "deadline": "January 26, 2026",
        "requiresSeparateApp": true
      },
      {
        "id": "uni-108-2",
        "title": "York International Scholarship of Distinction",
        "amount": "CAD $37,500 Total ($15,000 Year 1 + $7,500/yr Years 2–4)",
        "coverage": "Partial Aid",
        "eligibility": "International high-school/transfer (<24 credits) applicants with 90%+ admission average. RESTRICTION: Fall 2026 CS, Cybersecurity, and Engineering admits are NOT eligible (unless completing Ontario high school curriculum).",
        "description": "Automatic entrance scholarship awarded without separate application. Renewable with 24+ credits per academic year and minimum 7.5 GPA/B+ standing.",
        "deadline": "Automatic Consideration",
        "requiresSeparateApp": false
      },
      {
        "id": "uni-108-3",
        "title": "York International Merit Award",
        "amount": "CAD $25,000 Total ($10,000 Year 1 + $5,000/yr Years 2–4)",
        "coverage": "Partial Aid",
        "eligibility": "International high-school/transfer (<24 credits) applicants with final admission average between 80.0% and 89.9%.",
        "description": "Automatic renewable entrance award offering $10,000 in Year 1 and $5,000 annually in Years 2–4 ($25,000 maximum total). Requires 24+ credits and qualifying GPA for renewal.",
        "deadline": "Automatic Consideration",
        "requiresSeparateApp": false
      },
      {
        "id": "uni-108-4",
        "title": "Tentanda Via International Award",
        "amount": "CAD $30,000 / year × 4 Years ($120,000 Total Award)",
        "coverage": "Full Ride",
        "eligibility": "International students demonstrating academic excellence alongside commitment to social justice, sustainability, or overcoming barriers.",
        "description": "Major entrance award providing $30,000 per year for four years ($120,000 total). Application required.",
        "deadline": "February 15, 2026",
        "requiresSeparateApp": true
      },
      {
        "id": "uni-108-5",
        "title": "York International Entrance & Transfer Awards",
        "amount": "CAD $2,500 – $5,000 One-Time Award",
        "coverage": "Partial Aid",
        "eligibility": "International high school applicants with 75–79.9% average ($5,000) or transfer applicants with 24+ credits and 75%+ average ($2,500).",
        "description": "One-time automatic entrance awards for qualifying international undergraduate applicants.",
        "deadline": "Automatic Consideration",
        "requiresSeparateApp": false
      },
      {
        "id": "uni-108-6",
        "title": "Graduate Funding & Fellowships (2026–2027)",
        "amount": "CAD $19,000 – $32,000+ / year (Program-Dependent)",
        "coverage": "Partial Aid",
        "eligibility": "Full-time registered research Master's and PhD international students in eligible faculties.",
        "description": "Program-specific graduate packages combining fellowships, TAs ($19,716 MA tuition / $18,891 PhD tuition). Example: Lassonde Civil Eng MSc package $88,214 over 6 terms (~$21k/yr net pay).",
        "deadline": "Varies by Department",
        "requiresSeparateApp": false
      }
    ],
    "degreesOffered": [
      "Bachelors",
      "Masters",
      "PhD"
    ],
    "tags": [
      "QS Top 350 Global",
      "Toronto Ontario",
      "Schulich Business #1",
      "Osgoode Law",
      "$180k President Award",
      "English #78 World",
      "Psychology #99 World",
      "Canada"
    ],
    "requiresSeparateApp": true,
    "logoText": "YORK",
    "logoBg": "from-red-900 to-stone-900"
  },

  {
    "id": "uni-109",
    "universityName": "Simon Fraser University",
    "location": "Burnaby, British Columbia, Canada",
    "country": "Canada",
    "flag": "🇨🇦",
    "foundingYear": "1965",
    "scholarshipTitle": "Undergraduate Scholars Entrance Scholarship & Guaranteed PhD Minimum Funding",
    "ranking": "#312 Global (QS 2027) | #1 Canadian Comprehensive University (Maclean's 2026) | #13 in Canada (QS 2027) | #7 Computer Science & Info Systems",
    "qsSubjectRankings": "Archaeology (#2 Canada QS) | Computer Vision & Graphics (#2 Canada CSRankings) | Computer Science and Information Systems #7 | Communications & Media (#4 Canada QS) | Data Science & AI (#6 Canada QS)",
    "coverage": "Full Ride",
    "amountValue": "Up to CAD $140,000 International Undergraduate Scholars Scholarship / Guaranteed CAD $28,000 / year × 4 Years PhD Funding ($112,000 Total)",
    "tuitionFee": "Program-Dependent Overseas Tuition (CAD $33,000 – $44,000/yr | Arts ~$33k, CS/Eng/Business $38k–$44k+) | SFU Direct Application Portal",
    "tuitionAmountNumeric": 36000,
    "hasFullRide": true,
    "hasPartialAid": true,
    "hasFinancialAid": true,
    "financialAidType": "Merit-Based",
    "financialAidDetails": "Simon Fraser University (SFU) is Canada's #1 Comprehensive University (Maclean's 2026) and ranked #312 globally in QS 2027 (#13 in Canada). Located in Metro Vancouver with campuses in Burnaby, Surrey, and Downtown Vancouver. SFU is an international leader in Computer Science and Information Systems (#7 globally), Data Science & AI (#6 in Canada), Archaeology (#2 in Canada), Anthropology (#4 in Canada), Communications & Media (#4 in Canada), and Education. SFU offers up to CAD $140,000 for top international undergraduate scholars and guarantees a minimum CAD $28,000/year funding package over 4 years ($112,000 total) for all incoming research PhD students.",
    "minGpa": "3.6+",
    "minSat": "Test-Optional / Not Required (Evaluated on Grade 12 / A-Level / FSc marks)",
    "satRequirementCategory": "Optional",
    "satPolicyDetails": "SFU evaluates international applicants (following A-Levels, IB, FSc/HSSC, or Grade 12) primarily on high school percentage grades and required course prerequisites rather than requiring SAT/ACT scores.",
    "minIelts": "6.5",
    "ieltsCategory": "6.5",
    "toeflRequirement": "88+ iBT (DET 125+, PTE 65+)",
    "commonAppAccepted": false,
    "applicationPortalDetails": "Simon Fraser University Direct Undergraduate Application System. Common App is NOT accepted.",
    "acceptanceRate": "55% - 65% (Computing Science & Beedie Business < 25%)",
    "deadline": "Dec 15 (Major Entrance Scholarships) / Jan 31 (General Admission)",
    "description": "#312 Global (QS 2027) & #1 Canadian Comprehensive University (Maclean's). #7 Computer Science & Info Systems with up to $140,000 undergrad awards and $28k/yr guaranteed PhD funding.",
    "overviewLong": "Simon Fraser University (SFU) is a premier public research university in Metro Vancouver, British Columbia, Canada, established in 1965. SFU spans three dynamic campuses across Burnaby Mountain, Surrey, and Downtown Vancouver.\n\nSFU has been ranked Maclean's #1 Comprehensive University in Canada for 16 out of the past 17 years and ranks #312 globally in QS 2027 (#13 in Canada). SFU is world-renowned in technology and innovation, holding #7 globally for Computer Science and Information Systems and #2 in Canada for Computer Vision & Computer Graphics, along with top national rankings in Data Science & AI (#6 Canada), Archaeology (#2 Canada), Communications (#4 Canada), Geography (#4 Canada), and Education (101-125 globally in THE 2026).\n\nUndergraduate applicants can compete for the Undergraduate Scholars Entrance Scholarship offering up to CAD $140,000 over four years (with potential additional living allowances). For doctoral candidates, SFU Senate guarantees a minimum funding package of CAD $28,000 per year for 4 years ($112,000 total minimum) across all research PhD programs.",
    "topProgramsList": [
      {
        "name": "Computer Science and Information Systems",
        "ranking": "#7",
        "description": "Computer science, artificial intelligence, computer vision, data science, cybersecurity, and software systems."
      },
      {
        "name": "Department of Archaeology",
        "ranking": "#2 in Canada for Archaeology in QS 2026",
        "description": "Archaeological science, forensic anthropology, human evolutionary biology, and bioarchaeology."
      },
      {
        "name": "School of Communication & Media Studies",
        "ranking": "#4 in Canada in QS Subject Rankings 2026",
        "description": "Media analysis, digital communication, technology and society, policy, and cultural studies."
      },
      {
        "name": "Beedie School of Business",
        "ranking": "Top Vancouver Business School (301-400 World THE)",
        "description": "Finance, accounting, management, business analytics, technology entrepreneurship, and international business."
      },
      {
        "name": "School of Sustainable Energy",
        "ranking": "Premier BC CleanTech & Engineering Hub",
        "description": "Mechatronic systems engineering, sustainable energy engineering, computer engineering, and robotics."
      }
    ],
    "allScholarshipsList": [
      {
        "id": "uni-109-1",
        "title": "Undergraduate Scholars Entrance Scholarship",
        "amount": "Up to CAD $140,000 Total Value",
        "coverage": "Full Ride",
        "eligibility": "High-achieving incoming international undergraduate applicants evaluated on high school academic performance (90%+ average / 31+ IB) and leadership.",
        "description": "Major entrance scholarship providing up to $140,000 total over four years, with potential additional living support for exceptional financial need.",
        "deadline": "December 15",
        "requiresSeparateApp": true
      },
      {
        "id": "uni-109-2",
        "title": "International Excellence Entrance Scholarship",
        "amount": "CAD $10,000 – $20,000 Entrance Award",
        "coverage": "Partial Aid",
        "eligibility": "International secondary school applicants with minimum 90% admission average enrolled in priority enrollment faculties.",
        "description": "Specialized entrance award recognizing high academic standing for international secondary school graduates.",
        "deadline": "December 15",
        "requiresSeparateApp": true
      },
      {
        "id": "uni-109-3",
        "title": "SFU Guaranteed PhD Minimum Funding Package",
        "amount": "CAD $28,000 / year × 4 Years ($112,000 Minimum Total)",
        "coverage": "Full Ride",
        "eligibility": "All eligible incoming full-time research PhD students starting Fall 2024 onward.",
        "description": "SFU Senate guaranteed minimum doctoral stipend package combining scholarships, TA/RA appointments, and supervisor research support.",
        "deadline": "Automatic with PhD Admission",
        "requiresSeparateApp": false
      },
      {
        "id": "uni-109-4",
        "title": "Departmental Graduate Research Stipends (Physics/Geography)",
        "amount": "CAD $23,000 – $35,600 / year Stipend",
        "coverage": "Full Ride",
        "eligibility": "Full-time registered MSc and PhD students in research departments like Physics, Geography, and Computing Science.",
        "description": "Department-specific guaranteed graduate stipends (e.g. Physics MSc $30,540/yr / PhD $35,600/yr / Geography MSc $23,000/yr).",
        "deadline": "Varies by Department",
        "requiresSeparateApp": false
      }
    ],
    "degreesOffered": [
      "Bachelors",
      "Masters",
      "PhD"
    ],
    "tags": [
      "QS Top 350 Global",
      "#1 Comprehensive Canada",
      "Metro Vancouver",
      "#4 CS in Canada",
      "$140k Undergrad Award",
      "$28k Guaranteed PhD Funding",
      "Canada"
    ],
    "requiresSeparateApp": true,
    "logoText": "SFU",
    "logoBg": "from-red-800 to-rose-950"
  },

  {
    "id": "uni-110",
    "universityName": "University of Victoria",
    "location": "Victoria, British Columbia, Canada",
    "country": "Canada",
    "flag": "🇨🇦",
    "foundingYear": "1963",
    "scholarshipTitle": "International Entrance Scholarship & Graduate Fellowship Packages",
    "ranking": "#370 Global (QS 2027) | #15 in Canada (QS 2027) | Oceanography #35 (Shanghai) | Atmospheric Science #41 (Shanghai)",
    "qsSubjectRankings": "Oceanography #35 (Shanghai rankings) | Atmospheric science #41 (Shanghai rankings) | Earth science 51-75 (Shanghai rankings) | Mathematics 201-250 QS ranking | Geology & geophysics 151-200 QS rankings",
    "coverage": "Partial Aid",
    "amountValue": "CAD $5,000 – $10,000 International Entrance Scholarships / Up to CAD $17,500 – $20,000/yr Graduate Fellowships / Up to $90,000 Aga Khan Award",
    "tuitionFee": "Faculty-Dependent Overseas Tuition (CAD $35,448 – $43,384+/yr | Arts & Science ~$35,448/yr, Eng/CS ~$43,384/yr) | UVic Direct Portal",
    "tuitionAmountNumeric": 38000,
    "hasFullRide": false,
    "hasPartialAid": true,
    "hasFinancialAid": true,
    "financialAidType": "Merit-Based",
    "financialAidDetails": "The University of Victoria (UVic) is a top Canadian public research university located in Victoria, British Columbia. Founded in 1963 (tracing back to Victoria College, 1903), UVic ranks #370 globally in QS 2027 (#15 in Canada) and #172 globally for Citations per Faculty (#4 in Canada). UVic is a global leader, holding Oceanography #35, Atmospheric science #41, Earth science 51-75 on Shanghai rankings, and is #1 in Canada for International Research Collaboration (Leiden 2025). Top subject areas include Mathematics (201-250 QS ranking) and Geology & geophysics (151-200 QS rankings). International applicants are automatically considered for entrance scholarships starting at CAD $5,000 (and CAD $2,000–$10,000 for IB graduates). Research-based Master's and PhD students in fields like Computer Science receive UVic Fellowships (up to $17,500/yr for Master's and up to $20,000/yr for PhD) plus TA/RA funding.",
    "minGpa": "3.5+",
    "minSat": "Test-Optional / Not Required (Evaluated on Grade 12 / A-Level / FSc marks)",
    "satRequirementCategory": "Optional",
    "satPolicyDetails": "UVic is test-optional for SAT/ACT and evaluates international applicants (following A-Levels, IB, FSc/HSSC, or Grade 12) primarily on high school percentage grades and program-specific subject prerequisites.",
    "minIelts": "6.5",
    "ieltsCategory": "6.5",
    "toeflRequirement": "90+ iBT (no section below 20)",
    "commonAppAccepted": false,
    "applicationPortalDetails": "University of Victoria Direct Undergraduate Application System. Common App is NOT accepted.",
    "acceptanceRate": "64% - 65% (Selective for Engineering & Computer Science with higher competitive cutoffs)",
    "deadline": "Jan 31 (Undergraduate Entrance Scholarship & Admission)",
    "description": "#370 Global (QS 2027) & Oceanography #35, Atmospheric science #41. #1 in International Research Collaboration with automatic $5,000–$10,000 entrance awards.",
    "overviewLong": "The University of Victoria (UVic) is a major Canadian public research university situated in Victoria, British Columbia. Established as an independent university in 1963 (originating from Victoria College in 1903), UVic hosts over 22,000 students and is internationally recognized for research excellence and co-operative education (with over 109,000 student co-op job placements).\n\nUVic ranks #370 globally in QS 2027 (#15 in Canada) and #172 globally for Citations per Faculty (#4 in Canada). In the ShanghaiRanking Global Ranking of Academic Subjects, UVic ranks #35 globally for Oceanography, #41 globally for Atmospheric science, and 51-75 for Earth science, hosting world-class ocean-observing infrastructure through Ocean Networks Canada. UVic also holds Leiden 2025 #1 ranking in Canada for International Research Collaboration, with global placements in Mathematics (201-250 QS ranking) and Geology & geophysics (151-200 QS rankings).\n\nAll incoming international undergraduate students are automatically evaluated for the University of Victoria International Entrance Scholarship (minimum CAD $5,000 value, up to $10,000 for IB 32+ graduates). Full-time research-based graduate students (MSc/PhD) meeting a 7.0 GPA threshold receive UVic Graduate Fellowships of up to CAD $17,500/year for Master's and up to CAD $20,000/year for PhD students alongside TA and RA stipends.",
    "topProgramsList": [
      {
        "name": "School of Earth and Ocean Sciences",
        "ranking": "Oceanography #35 | Atmospheric science #41 | Earth science 51-75 (Shanghai) | Geology & geophysics 151-200 QS rankings",
        "description": "Oceanography, atmospheric science, marine systems, ocean technology, climate change, and geophysics."
      },
      {
        "name": "Department of Computer Science",
        "ranking": "Top BC Technology & AI Hub",
        "description": "Computer science, software engineering, artificial intelligence, human-computer interaction, and computational math."
      },
      {
        "name": "Faculty of Engineering & Computer Science",
        "ranking": "Premier West Coast Engineering Centre",
        "description": "Civil engineering, computer engineering, electrical engineering, mechanical engineering, and biomedical engineering."
      },
      {
        "name": "Department of Mathematics & Statistics",
        "ranking": "201-250 QS ranking in Mathematics",
        "description": "Pure mathematics, applied mathematics, statistics, data science, and mathematical physics."
      },
      {
        "name": "School of Environmental Studies & Climate Research",
        "ranking": "Home to Pacific Institute for Climate Solutions",
        "description": "Environmental policy, climate action, ecological restoration, indigenous environmental studies, and sustainability."
      }
    ],
    "allScholarshipsList": [
      {
        "id": "uni-110-1",
        "title": "University of Victoria International Entrance Scholarship",
        "amount": "CAD $5,000 Minimum Automatic Award",
        "coverage": "Partial Aid",
        "eligibility": "Academically outstanding incoming international undergraduate students entering the first year of a degree program.",
        "description": "Automatic merit entrance scholarship awarded based on high school admission average (no separate application required).",
        "deadline": "January 31",
        "requiresSeparateApp": false
      },
      {
        "id": "uni-110-2",
        "title": "International IB Entrance Scholarship",
        "amount": "CAD $2,000 – $10,000 Entrance Award",
        "coverage": "Partial Aid",
        "eligibility": "International students completing the International Baccalaureate (IB) Diploma with at least 32 points.",
        "description": "Guaranteed minimum $2,000 entrance scholarship ($10,000 value listed for top IB entries) awarded automatically.",
        "deadline": "January 31",
        "requiresSeparateApp": false
      },
      {
        "id": "uni-110-3",
        "title": "University of Victoria Graduate Fellowships",
        "amount": "Up to CAD $17,500 – $20,000 / year (Master's & PhD)",
        "coverage": "Partial Aid",
        "eligibility": "Full-time research-based Master's (MSc) and Doctoral (PhD) students with qualifying 7.0 GPA.",
        "description": "University of Victoria Graduate Fellowships valued up to $17,500/year for Master's students and up to $20,000/year for PhD students, supplementing TA and RA departmental stipends.",
        "deadline": "Varies by Department",
        "requiresSeparateApp": false
      },
      {
        "id": "uni-110-4",
        "title": "Aga Khan Academy Scholarship",
        "amount": "CAD $90,000 Total ($22,500 / year × 4 Years)",
        "coverage": "Full Ride",
        "eligibility": "Academically outstanding international student entering UVic directly from an Aga Khan Academy.",
        "description": "High-value restricted international entrance scholarship covering tuition and living expenses over four years.",
        "deadline": "March 15",
        "requiresSeparateApp": true
      }
    ],
    "degreesOffered": [
      "Bachelors",
      "Masters",
      "PhD"
    ],
    "tags": [
      "QS Top 400 Global",
      "#1 Canada Oceanography",
      "#1 Canada Climate",
      "Victoria BC",
      "Co-op Leader",
      "Canada"
    ],
    "requiresSeparateApp": false,
    "logoText": "UVIC",
    "logoBg": "from-blue-900 to-amber-900"
  },

  {
    "id": "uni-111",
    "universityName": "University of Auckland (Waipapa Taumata Rau)",
    "location": "Auckland, New Zealand",
    "country": "New Zealand",
    "flag": "🇳🇿",
    "foundingYear": "1883",
    "scholarshipTitle": "International Student Excellence Scholarship & Doctoral Scholarships",
    "ranking": "#67 Global (QS 2027) | #65 (QS 2026) | #1 in New Zealand | #156 World (THE 2026) | #28 World (QS Sustainability 2026)",
    "qsSubjectRankings": "Archaeology #28, Education #29, Sports-Related Subjects #33, Civil & Structural Engineering #48, Anatomy & Physiology #49, Law & Legal Studies #=65, Pharmacy & Pharmacology #=85, Computer Science & Info Systems #=93, Data Science & Artificial Intelligence #51–100",
    "coverage": "Partial Aid",
    "amountValue": "Up to NZD $10,000 International Student Excellence Scholarship / NZD $33,825/yr + Full Tuition Doctoral Scholarship",
    "tuitionFee": "Faculty-Dependent Overseas Tuition (NZD $38,000 – $56,000+/yr | Arts ~$38k, Eng ~$55k, Medicine ~$90k) | UoA Direct Portal",
    "tuitionAmountNumeric": 44000,
    "hasFullRide": false,
    "hasPartialAid": true,
    "hasFinancialAid": true,
    "financialAidType": "Merit-Based",
    "financialAidDetails": "The University of Auckland is New Zealand's flagship research university. Up to 50 International Student Excellence Scholarships (NZD $10,000 toward compulsory tuition) are awarded twice yearly. New Zealand secondary school international graduates can receive the International School Leaver Scholarship (up to NZD $20,000). Doctoral candidates receive NZD $33,825/year stipend plus full tuition waiver and health insurance for up to 36 months.",
    "minGpa": "3.5+",
    "minSat": "Test-Optional / Not Required (Evaluated on High School / A-Level / IB / FSc marks)",
    "satRequirementCategory": "Optional",
    "satPolicyDetails": "SAT/ACT is test-optional. International candidates are assessed based on secondary qualifications (A-Levels, IB, FSc/HSSC, or equivalent). English requirements: IELTS 6.0 (Arts/Science) / 6.5 (Engineering/Law) / 7.5 (Medicine), TOEFL 80+, PTE 50–58+, DET 115+.",
    "minIelts": "6.0 - 6.5",
    "ieltsCategory": "6.5",
    "toeflRequirement": "80+ iBT (PTE 58+, DET 115+)",
    "commonAppAccepted": false,
    "applicationPortalDetails": "University of Auckland Online Direct Application System.",
    "acceptanceRate": "45% - 55% (Competitive for Engineering, Law & Clinical Medicine)",
    "deadline": "Dec 1 (Semester 1 / Feb) / May 1 (Semester 2 / July)",
    "description": "#67 Global (QS 2027) & #1 in New Zealand. Ranked in World Top 50 for Education, Civil Eng, Pharmacy, & Archaeology with $10,000 Excellence Award.",
    "overviewLong": "The University of Auckland (Māori: Waipapa Taumata Rau) is New Zealand's premier research university, founded in 1883 in Auckland. Ranked #67 globally in QS World University Rankings 2027 (#65 in QS 2026), #156 in THE World Rankings 2026, and #28 globally in QS Sustainability 2026, Auckland hosts over 45,000+ students, including 8,000+ international students from 100+ countries. Campuses include City Campus, Grafton (Medical), Newmarket (Innovation/Eng), Epsom, and Tai Tokerau.\n\nAcademic units include the Business School, Faculty of Engineering, Faculty of Science, Faculty of Medical and Health Sciences, Faculty of Arts, Faculty of Education and Social Work, Faculty of Law, and Creative Arts. Subject rankings highlight Sports Science (Top 30), Archaeology, Education, Anatomy, Pharmacy, Civil Engineering, Geography, and Nursing (all Top 50 globally), alongside Law, Psychology, Accounting, Computer Science, and Medicine in the World Top 100.\n\nInternational entrance scholarships include the International Student Excellence Scholarship (up to NZD $10,000, 50 awards per year) and the International School Leaver Scholarship (up to NZD $20,000 for NZ high school graduates). PhD students receive guaranteed competitive funding of NZD $33,825/yr stipend + tuition fees.",
    "topProgramsList": [
      {
        "name": "Archaeology",
        "ranking": "Global #28 (#1 in NZ)",
        "description": "Tied as the university's absolute highest narrow subject placement in this framework."
      },
      {
        "name": "Education",
        "ranking": "Global #29 (#1 in NZ)",
        "description": "Institutional Stronghold: Consistently places inside the elite global Top 30."
      },
      {
        "name": "Sports-Related Subjects",
        "ranking": "Global #33 (#2 in NZ)",
        "description": "Backed by highly competitive regional citation scores and strong sports medicine ties."
      },
      {
        "name": "Civil & Structural Engineering",
        "ranking": "Global #48 (#1 in NZ)",
        "description": "Managed via the Faculty of Engineering, leading the national technical research index."
      },
      {
        "name": "Anatomy & Physiology",
        "ranking": "Global #49 (#2 in NZ)",
        "description": "Strongly supported by high-density international research network metrics."
      },
      {
        "name": "Law & Legal Studies",
        "ranking": "Global #=65 (#1 in NZ)",
        "description": "Achieved an Overall Score of 73.0, driven by an Academic Reputation score of 75."
      },
      {
        "name": "Pharmacy & Pharmacology",
        "ranking": "Global #=85 (#1 in NZ)",
        "description": "Logged an Overall Score of 71.4, anchored by a massive Citations per Paper score of 95.9."
      },
      {
        "name": "Computer Science & Info Systems",
        "ranking": "Global #=93 (#1 in NZ)",
        "description": "Earned an Overall Score of 67.9, featuring a Citations per Paper score of 84.5."
      },
      {
        "name": "Data Science & Artificial Intelligence",
        "ranking": "Global #51–100 (#1 in NZ)",
        "description": "Historic Milestone: Ranked in the global top 100 for the first time, putting it in the top 3–5% globally."
      }
    ],
    "allScholarshipsList": [
      {
        "id": "uni-111-1",
        "title": "University of Auckland International Student Excellence Scholarship",
        "amount": "Up to NZD $10,000 (Tuition Credit)",
        "coverage": "Partial Aid",
        "eligibility": "New international students enrolling in full-time undergraduate, PGDip, or Master's degrees.",
        "description": "Awarded twice yearly to up to 50 high-achieving international applicants to cover compulsory tuition fees for 1 year.",
        "deadline": "November 21 / April 18",
        "requiresSeparateApp": true
      },
      {
        "id": "uni-111-2",
        "title": "University of Auckland International School Leaver Scholarship",
        "amount": "Up to NZD $20,000 (1 Year)",
        "coverage": "Partial Aid",
        "eligibility": "International students who completed secondary school in New Zealand entering first-year undergraduate study.",
        "description": "Scholarship worth up to NZD $20,000 for up to 20 top international school-leavers from NZ secondary schools.",
        "deadline": "January 15",
        "requiresSeparateApp": true
      },
      {
        "id": "uni-111-3",
        "title": "University of Auckland Doctoral Scholarship",
        "amount": "NZD $33,825 / year Stipend + Full Tuition Waiver + Health Insurance",
        "coverage": "Full Ride",
        "eligibility": "High-achieving domestic and international PhD candidates admitted to full-time doctoral study.",
        "description": "Comprehensive doctoral scholarship providing a tax-free annual stipend of NZD $33,825 plus full international tuition fees and health insurance for up to 36 months.",
        "deadline": "Rolling / Quarterly Rounds",
        "requiresSeparateApp": true
      }
    ],
    "degreesOffered": [
      "Bachelors",
      "Masters",
      "PhD"
    ],
    "tags": [
      "QS Top 70 Global",
      "#1 in New Zealand",
      "Auckland",
      "Civil Eng Top 50",
      "Doctoral Stipend",
      "New Zealand"
    ],
    "requiresSeparateApp": true,
    "logoText": "UOA",
    "logoBg": "from-blue-900 to-indigo-950"
  },

  {
    "id": "uni-112",
    "universityName": "University of Otago (Ōtākou Whakaihu Waka)",
    "location": "Dunedin, Otago, New Zealand",
    "country": "New Zealand",
    "flag": "🇳🇿",
    "foundingYear": "1869",
    "scholarshipTitle": "Global Scholarships, Vice-Chancellor's Awards & Doctoral Fellowships",
    "ranking": "#198 Global (QS 2027) | #206 (QS 2026) | #2 in New Zealand | #1 Dental School in NZ | Top 50 World (QS Sustainability 2026)",
    "qsSubjectRankings": "Anatomy & Physiology #36, Dentistry #50, Archaeology #51–100, Psychology #101–150, Pharmacy & Pharmacology #101–150, Medicine #157",
    "coverage": "Partial Aid",
    "amountValue": "NZD $15,000 Global Scholarship / NZD $10,000 Vice-Chancellor's Award / Up to $35,000 Academic Excellence Award / NZD $34,128/yr + Tuition PhD Scholarship",
    "tuitionFee": "Program-Dependent Overseas Tuition (NZD $36,000 – $44,000+/yr | Arts ~$36k, Science ~$40k, Clinical Medicine/Dentistry $85k–$105k+) | eVision System",
    "tuitionAmountNumeric": 39000,
    "hasFullRide": false,
    "hasPartialAid": true,
    "hasFinancialAid": true,
    "financialAidType": "Merit-Based",
    "financialAidDetails": "Established in 1869, Otago is New Zealand's oldest university, located in Dunedin. International undergraduate scholarships include the Global Scholarship (NZD $15,000 for eligible passports), Vice-Chancellor's Scholarship (NZD $10,000), and Academic Excellence Scholarship (up to ~$35,000 total value including $19k accommodation + tuition credits). PhD students receive NZD $32,500/yr stipend plus tuition waiver.",
    "minGpa": "3.2+",
    "minSat": "Test-Optional / Not Required (Evaluated on High School / A-Level / IB / FSc marks)",
    "satRequirementCategory": "Optional",
    "satPolicyDetails": "SAT/ACT is test-optional. Evaluated primarily on Grade 12 / A-Level / IB / FSc results. Professional entry (Medicine, Dentistry, Pharmacy) requires Health Sciences First Year (HSFY) at Otago. English requirement: IELTS 6.0 (Undergraduate) / 6.5 (Postgraduate/Professional), TOEFL 80+, PTE 50+.",
    "minIelts": "6.0",
    "ieltsCategory": "6.0",
    "toeflRequirement": "80+ iBT (PTE 50+, DET 115+)",
    "commonAppAccepted": false,
    "applicationPortalDetails": "University of Otago eVision Student Portal.",
    "acceptanceRate": "55% - 65% (Selective for HSFY Professional Pathways: Medicine & Dentistry < 20%)",
    "deadline": "Dec 10 (Semester 1 / Feb) / May 31 (Semester 2 / July)",
    "description": "#198 Global (QS 2027) & NZ's oldest university. #22 World in Sports Science & Top 50 in Dentistry with $15,000 Global Scholarships.",
    "overviewLong": "The University of Otago (Māori: Ōtākou Whakaihu Waka), founded in 1869 in Dunedin, is New Zealand's oldest university. Ranked #198 globally in QS World University Rankings 2027 (#206 in QS 2026), Otago hosts 21,000+ students in an iconic residential campus environment. Otago comprises four major academic divisions: Division of Health Sciences (Dunedin School of Medicine, School of Dentistry—NZ's only dental school, School of Pharmacy, School of Physiotherapy), Division of Sciences, Division of Humanities, and Division of Commerce (Otago Business School).\n\nIn subject rankings, Otago is globally acclaimed for Sports-Related Subjects (#22 worldwide / #1 in NZ), Dentistry (Top 50 worldwide / #1 in NZ), Anatomy & Physiology (Top 50), Archaeology (Top 50), Pharmacy & Pharmacology (101–150 band), Medicine (151–200 band), Psychology (151–200 band), and Nursing (Top 100).\n\nInternational scholarship opportunities include the Otago Global Scholarship (NZD $15,000 for eligible passports), Vice-Chancellor's Scholarship for International Students (NZD $10,000), International Academic Excellence Scholarship (up to ~$35,000 value), and Otago Doctoral Scholarships providing a stipend of NZD $34,128/yr + tuition waiver for 36 months.",
    "topProgramsList": [
      {
        "name": "Anatomy & Physiology",
        "ranking": "Global #36 (#1 in NZ)",
        "description": "National Leader: Regains top status in NZ with exceptional international research collaboration network metrics."
      },
      {
        "name": "Dentistry",
        "ranking": "Global #50 (#1 in NZ)",
        "description": "Flagship Faculty: Ranked #3 in Oceania and the absolute #1 dental surgery school in New Zealand."
      },
      {
        "name": "Archaeology",
        "ranking": "Global #51–100",
        "description": "Firmly holds its spot within the global Top 100 with excellent field research programs."
      },
      {
        "name": "Psychology",
        "ranking": "Global #101–150",
        "description": "Driven by strong behavioral science and biomedical clinical cross-citations."
      },
      {
        "name": "Pharmacy & Pharmacology",
        "ranking": "Global #101–150",
        "description": "Comfortably anchored in the global Top 150 elite bracket."
      },
      {
        "name": "Medicine",
        "ranking": "Global #157",
        "description": "Supported by dense scientific publication profiles out of the Dunedin, Christchurch, and Wellington medical campus pipelines."
      }
    ],
    "allScholarshipsList": [
      {
        "id": "uni-112-1",
        "title": "University of Otago Global Scholarship",
        "amount": "NZD $15,000 (Tuition Credit)",
        "coverage": "Partial Aid",
        "eligibility": "New international Bachelor's degree students holding eligible passports (including India, China, SE Asia, Sri Lanka, Singapore, etc.; excluding Pakistan).",
        "description": "Automatically assessed during eVision admission application; awards NZD $15,000 directly toward first-year international tuition fees.",
        "deadline": "Automatic Consideration",
        "requiresSeparateApp": false
      },
      {
        "id": "uni-112-2",
        "title": "University of Otago Vice-Chancellor's Scholarship for International Students",
        "amount": "NZD $10,000 (Tuition Credit)",
        "coverage": "Partial Aid",
        "eligibility": "High-achieving new international undergraduate students enrolling in full-time Bachelor's degree study.",
        "description": "Entrance award providing NZD $10,000 toward tuition fees for new international students.",
        "deadline": "Automatic Consideration / eVision Prompt",
        "requiresSeparateApp": false
      },
      {
        "id": "uni-112-3",
        "title": "University of Otago International Academic Excellence Scholarship",
        "amount": "Up to ~NZD $35,000 Total Value ($19,000 Accommodation + $14,000 Tuition)",
        "coverage": "Partial Aid",
        "eligibility": "Exceptional incoming international undergraduate students.",
        "description": "Provides $19,000 toward first-year residential college accommodation plus $7,000 per year toward tuition in Years 2 and 3.",
        "deadline": "October 31 / Application Prompt",
        "requiresSeparateApp": true
      },
      {
        "id": "uni-112-4",
        "title": "University of Otago Doctoral Scholarship",
        "amount": "NZD $34,128 / year Stipend + Full Tuition Waiver",
        "coverage": "Full Ride",
        "eligibility": "Full-time registered doctoral (PhD) candidates of high academic standing.",
        "description": "Provides an annual tax-free living stipend of NZD $34,128 plus full tuition fee waiver for 36 months.",
        "deadline": "Rolling / eVision Application",
        "requiresSeparateApp": true
      }
    ],
    "degreesOffered": [
      "Bachelors",
      "Masters",
      "PhD"
    ],
    "tags": [
      "QS Top 200 Global",
      "Dunedin",
      "#1 Dental School NZ",
      "Sports Top 20 World",
      "New Zealand"
    ],
    "requiresSeparateApp": false,
    "logoText": "OTAGO",
    "logoBg": "from-amber-600 to-blue-900"
  },

  {
    "id": "uni-113",
    "universityName": "Massey University",
    "location": "Palmerston North, Auckland, Wellington, New Zealand",
    "country": "New Zealand",
    "flag": "🇳🇿",
    "foundingYear": "1927",
    "scholarshipTitle": "International Student Excellence Scholarship & Creative Arts Awards",
    "ranking": "#215 Global (QS 2027) | #230 (QS 2026) | #1 Vet School in NZ (#14 World) | #1 Agriculture in NZ (#49 World)",
    "qsSubjectRankings": "Veterinary Science #14, Agriculture & Forestry #49, Development Studies #51–100, Art & Design #101–150, Communication & Media Studies #101–150",
    "coverage": "Partial Aid",
    "amountValue": "NZD $10,000 Year 1 + $5,000/yr (Up to $25,000 Total) International Student Excellence Scholarship / $5,000 Creative Arts Award / NZD $30,000/yr PhD Scholarship",
    "tuitionFee": "College-Dependent Overseas Tuition (NZD $33,000 – $42,000+/yr | Arts ~$33k, Science ~$38k, BVSc Vet Professional Phase ~$78k/yr) | Massey Portal",
    "tuitionAmountNumeric": 37000,
    "hasFullRide": false,
    "hasPartialAid": true,
    "hasFinancialAid": true,
    "financialAidType": "Merit-Based",
    "financialAidDetails": "Massey University operates three major campuses across New Zealand in Palmerston North, Auckland, and Wellington. Renowned for Veterinary Science (#21 globally; NZ's only vet school) and Agriculture (#52 globally). The International Student Excellence Scholarship offers up to NZD $10,000 in Year 1 and $5,000/yr in subsequent years (up to $25,000 total). The International Creative Excellence Award provides up to $5,000 (Undergraduate) / $10,000 (Master's) for Wellington creative arts students. Doctoral candidates compete for NZD $30,000/yr stipends + tuition waivers.",
    "minGpa": "3.0+",
    "minSat": "Test-Optional / Not Required (Evaluated on High School / A-Level / IB / FSc marks)",
    "satRequirementCategory": "Optional",
    "satPolicyDetails": "SAT/ACT is test-optional. Admission is based on academic qualifications (A-Levels, IB, High School Diploma, FSc/HSSC). English requirements: IELTS 6.0 (Undergraduate) / 6.5 (Postgraduate) / 7.0 (Vet Science & Nursing), TOEFL 80+, PTE 50+, DET 115+.",
    "minIelts": "6.0",
    "ieltsCategory": "6.0",
    "toeflRequirement": "80+ iBT (PTE 50+, DET 115+)",
    "commonAppAccepted": false,
    "applicationPortalDetails": "Massey University Online Student Application Portal.",
    "acceptanceRate": "60% - 70% (Competitive for BVSc Veterinary Science < 15%)",
    "deadline": "Dec 1 (Semester 1 / Feb) / May 1 (Semester 2 / July)",
    "description": "#215 Global (QS 2027). Home to NZ's #1 Veterinary School (#14 World) & #1 Agriculture (#49 World) with up to $25,000 International Awards.",
    "overviewLong": "Massey University, established in 1927, is a premier multi-campus public research university in New Zealand, with major campuses in Palmerston North (main science & agricultural hub), Auckland (Albany innovation campus), and Wellington (creative arts hub). Ranked #215 globally in QS World University Rankings 2027 (#230 in QS 2026), Massey hosts 27,000+ students across five major colleges: College of Sciences (School of Veterinary Science—New Zealand's only veterinary school, School of Agriculture and Environment), College of Creative Arts (Toi Rauwhārangi), College of Health, College of Business (Massey Business School), and College of Humanities and Social Sciences.\n\nIn subject rankings, Massey is world-renowned for Veterinary Science (#14 globally / #1 in NZ), Agriculture & Forestry (#49 globally / #1 in NZ), Development Studies (Top 100), Art & Design (Top 100), Communication & Media Studies (Top 150), and Nursing (Top 150).\n\nInternational scholarship offerings include the Massey University International Student Excellence Scholarship (up to NZD $10,000 in Year 1 + $5,000/yr for subsequent years, up to $25,000 total), the International Creative Excellence Undergraduate Scholarship (up to NZD $5,000 for Wellington creative arts students), the International Creative Excellence Masters Scholarship (up to NZD $10,000), and Massey Doctoral Scholarships providing NZD $30,000/yr stipend + tuition fees.",
    "topProgramsList": [
      {
        "name": "Veterinary Science",
        "ranking": "Global #14 (#1 in Oceania & Asia)",
        "description": "Global Powerhouse: Climbed 5 places. Achieved the absolute #1 spot in the world for the Employer Reputation component."
      },
      {
        "name": "Agriculture & Forestry",
        "ranking": "Global #49 (#1 in NZ)",
        "description": "Top 50 Re-entry: Surged up by 18 positions, heavily driven by strong environmental and primary economy research metrics."
      },
      {
        "name": "Development Studies",
        "ranking": "Global #51–100 (#1 in NZ)",
        "description": "Stable positioning inside the global Top 100, remaining the premier development pathway in the country."
      },
      {
        "name": "Art & Design",
        "ranking": "Global #101–150 (Tied #1 in NZ)",
        "description": "Vertical Rise: Jumped up one full ranking tier from the previous year, leading national creative cohorts."
      },
      {
        "name": "Communication & Media Studies",
        "ranking": "Global #101–150 (Tied #1 in NZ)",
        "description": "Successfully retained its top tier position domestically, supported by solid regional employer outcomes."
      }
    ],
    "allScholarshipsList": [
      {
        "id": "uni-113-1",
        "title": "Massey University International Student Excellence Scholarship",
        "amount": "Up to NZD $25,000 Total ($10,000 Year 1 + $5,000/yr Subsequent Years)",
        "coverage": "Partial Aid",
        "eligibility": "High-achieving international students entering full-time undergraduate or postgraduate degree study.",
        "description": "Scholarship providing NZD $10,000 in the first year and NZD $5,000 in each subsequent year for the duration of the degree.",
        "deadline": "November 1 / May 1",
        "requiresSeparateApp": true
      },
      {
        "id": "uni-113-2",
        "title": "International Creative Excellence Undergraduate Scholarship",
        "amount": "Up to NZD $5,000 (1 Year)",
        "coverage": "Partial Aid",
        "eligibility": "New international students entering selected College of Creative Arts undergraduate programs in Wellington.",
        "description": "Awarded based on creative portfolio and written statement for Wellington-based design and fine arts students (Up to 8 awards). Application opens Sept 1, closes Dec 1.",
        "deadline": "December 1",
        "requiresSeparateApp": true
      },
      {
        "id": "uni-113-3",
        "title": "International Creative Excellence Masters Scholarship",
        "amount": "Up to NZD $10,000 (1 Year)",
        "coverage": "Partial Aid",
        "eligibility": "New international students entering selected College of Creative Arts Master's degree programs in Wellington.",
        "description": "Merit and portfolio-based award for creative arts Master's students in Wellington (Up to 6 awards).",
        "deadline": "December 1",
        "requiresSeparateApp": true
      },
      {
        "id": "uni-113-4",
        "title": "Massey University Doctoral Scholarship",
        "amount": "NZD $30,000 / year Stipend + Tuition Waiver",
        "coverage": "Full Ride",
        "eligibility": "Top-tier domestic and international doctoral (PhD) applicants.",
        "description": "Tax-free living stipend of NZD $30,000 per year plus tuition fee waiver for up to 36 months.",
        "deadline": "October 1 / March 1",
        "requiresSeparateApp": true
      }
    ],
    "degreesOffered": [
      "Bachelors",
      "Masters",
      "PhD"
    ],
    "tags": [
      "QS Top 220 Global",
      "Palmerston North",
      "Auckland",
      "Wellington",
      "Vet #21 World",
      "Ag #52 World",
      "New Zealand"
    ],
    "requiresSeparateApp": true,
    "logoText": "MASSEY",
    "logoBg": "from-teal-800 to-slate-900"
  },

  {
    "id": "uni-114",
    "universityName": "Te Herenga Waka—Victoria University of Wellington",
    "location": "Wellington, New Zealand",
    "country": "New Zealand",
    "flag": "🇳🇿",
    "foundingYear": "1897",
    "scholarshipTitle": "VUW Undergraduate & Postgraduate International Scholarships",
    "ranking": "#=241 Global (QS 2027) | #=240 (QS 2026) | #1 in NZ for Politics & Development Studies | Capital City Location",
    "qsSubjectRankings": "Library & Information Management #45, Law & Legal Studies #64, Performing Arts #51–100, Geography #101–150, Politics & International Studies #101–150",
    "coverage": "Partial Aid",
    "amountValue": "NZD $15,000 VUW Undergraduate International Scholarship / NZD $10,000 Postgraduate Scholarship / NZD $30,500/yr + Tuition PhD Scholarship",
    "tuitionFee": "Faculty-Dependent Overseas Tuition (NZD $34,000 – $44,000+/yr | Arts ~$34k, Law/Commerce ~$37k, Eng/Arch ~$42k) | Pūaha Student Portal",
    "tuitionAmountNumeric": 38000,
    "hasFullRide": false,
    "hasPartialAid": true,
    "hasFinancialAid": true,
    "financialAidType": "Merit-Based",
    "financialAidDetails": "Located in New Zealand's capital, Victoria University of Wellington (Te Herenga Waka) excels in Law, Government, Public Policy, Politics, Development Studies, Architecture, and Creative Arts. Automatic international entrance awards include the VUW Undergraduate International Scholarship (NZD $15,000 tuition credit) and VUW Postgraduate International Scholarship (NZD $10,000 tuition credit). Competitive doctoral scholarships provide NZD $30,500/yr stipend plus full tuition waiver for 3 years.",
    "minGpa": "3.0+",
    "minSat": "Test-Optional / Not Required (Evaluated on High School / A-Level / IB / FSc marks)",
    "satRequirementCategory": "Optional",
    "satPolicyDetails": "SAT/ACT is test-optional. Admitted on secondary school achievements (A-Levels, IB, FSc/HSSC, or High School Diploma). English requirement: IELTS 6.0 (Undergraduate) / 6.5 (Postgraduate & Law), TOEFL 80+, PTE 50+, DET 115+.",
    "minIelts": "6.0",
    "ieltsCategory": "6.0",
    "toeflRequirement": "80+ iBT (PTE 50+, DET 115+)",
    "commonAppAccepted": false,
    "applicationPortalDetails": "Victoria University of Wellington Online Pūaha Portal.",
    "acceptanceRate": "60% - 70% (Selective for Law & Architecture)",
    "deadline": "Dec 1 (Trimester 1 / Feb) / May 1 (Trimester 2 / July)",
    "description": "#=241 Global (QS 2027) & NZ's capital university. Top 50 World in Development Studies & Top 70 in Law with $15,000 automatic international awards.",
    "overviewLong": "Te Herenga Waka—Victoria University of Wellington, established in 1897 in New Zealand's capital, is a world-ranked public research university. Ranked #=241 globally in QS World University Rankings 2027 (#=240 in QS 2026), VUW hosts 22,000+ students across three urban campuses: Kelburn (main campus), Pipitea (Wellington School of Business and Government & Faculty of Law, adjacent to Parliament), and Te Aro (Faculty of Architecture and Design Innovation).\n\nIn subject rankings, Wellington leads New Zealand in Development Studies (Top 50 globally / #1 in NZ), Politics and International Studies (Top 100 globally / #1 in NZ), Law (Top 70 globally), Library and Information Management (Top 100), Performing Arts (Top 100), Architecture and Built Environment (Top 100), Geography (Top 100), and Earth & Marine Sciences (Top 100).\n\nInternational scholarship offerings include the automatic VUW Undergraduate International Scholarship (NZD $15,000 toward first-year tuition), the automatic VUW Postgraduate International Scholarship (NZD $10,000 toward PGDip/Master's tuition), and Victoria University of Wellington Doctoral Scholarships offering an annual stipend of NZD $30,500 + full tuition waiver for 3 years.",
    "topProgramsList": [
      {
        "name": "Library & Information Management",
        "ranking": "Global #45 (#1 in NZ)",
        "description": "Stellar Performance: Breaks into the prestigious World Top 50, ranking as the ultimate leader in New Zealand."
      },
      {
        "name": "Law & Legal Studies",
        "ranking": "Global #64",
        "description": "Top 70 Powerhouse: Consistently recognized as one of Oceania's premier legal research institutions."
      },
      {
        "name": "Performing Arts",
        "ranking": "Global #51–100",
        "description": "Strongly supported by the national music and dramatic arts pipelines in Wellington with exceptional performance spaces."
      },
      {
        "name": "Geography",
        "ranking": "Global #101–150",
        "description": "Maintains its elite Top 150 global position with high academic peer reputation and research funding."
      },
      {
        "name": "Politics & International Studies",
        "ranking": "Global #101–150 (#1 in NZ)",
        "description": "Leverages its capital city location to drive top-tier public policy and diplomatic research output."
      }
    ],
    "allScholarshipsList": [
      {
        "id": "uni-114-1",
        "title": "VUW Undergraduate International Scholarship",
        "amount": "NZD $15,000 (First-Year Tuition Credit)",
        "coverage": "Partial Aid",
        "eligibility": "New international students paying full international tuition fees entering first-year undergraduate Bachelor's degree study.",
        "description": "[AUTOMATIC CONSIDERATION] Automatic tuition-fee scholarship worth NZD $15,000 applied directly to first-year undergraduate tuition fees upon offer acceptance.",
        "deadline": "Automatic Consideration (Trimester Application Closing Date)",
        "requiresSeparateApp": false
      },
      {
        "id": "uni-114-2",
        "title": "VUW Postgraduate International Scholarship",
        "amount": "NZD $10,000 (Tuition Credit)",
        "coverage": "Partial Aid",
        "eligibility": "New international students enrolling in an eligible Postgraduate Diploma or Master's degree.",
        "description": "[AUTOMATIC CONSIDERATION] Automatic tuition scholarship worth NZD $10,000 credited toward postgraduate coursework tuition fees.",
        "deadline": "Automatic Consideration",
        "requiresSeparateApp": false
      },
      {
        "id": "uni-114-3",
        "title": "Victoria University of Wellington Doctoral Scholarship",
        "amount": "NZD $30,500 / year Stipend + Full Tuition Waiver",
        "coverage": "Full Ride",
        "eligibility": "Full-time domestic and international doctoral (PhD) applicants.",
        "description": "[SEPARATE APPLICATION REQUIRED] Competitive doctoral scholarship providing an annual stipend of NZD $30,500 plus full tuition fee waiver for up to 3 years. Three annual application rounds (March 1, July 1, November 1).",
        "deadline": "March 1 / July 1 / November 1",
        "requiresSeparateApp": true
      }
    ],
    "degreesOffered": [
      "Bachelors",
      "Masters",
      "PhD"
    ],
    "tags": [
      "QS Top 250 Global",
      "Wellington Capital",
      "Law Top 70 World",
      "Politics Top 100 World",
      "Development Studies Top 50",
      "New Zealand"
    ],
    "requiresSeparateApp": false,
    "logoText": "VUW",
    "logoBg": "from-emerald-900 to-slate-900"
  },

  {
    "id": "uni-115",
    "universityName": "University of New South Wales (UNSW Sydney)",
    "location": "Sydney, New South Wales, Australia",
    "country": "Australia",
    "flag": "🇦🇺",
    "foundingYear": "1949",
    "scholarshipTitle": "International Scientia Coursework Scholarship & 20% International Student Award",
    "ranking": "#19 Global (QS 2027) | #20 (QS 2026) | #79 (THE 2026) | #1 in Australia for Engineering & Technology & Sustainability",
    "qsSubjectRankings": "Engineering & Technology (Broad Faculty) #33 (#1 Australia) | Civil & Structural Engineering #=22 (#1 Australia) | Law #=13 (#1 Australia) | Accounting & Finance #29 (#3 Australia) | Business & Management Studies #48 (#1 Australia) | Materials Science #=31 (#1 Australia) | Computer Science & Information Systems (Top 50, #5 Australia)",
    "coverage": "Partial Aid",
    "amountValue": "100% Tuition Fee Waiver OR AUD $20,000/yr (Scientia) / 20% Tuition Reduction (International Student Award) / AUD $37,000–$40,000/yr + Tuition PhD Stipend",
    "tuitionFee": "Faculty-Dependent Overseas Tuition (AUD $42,000 – $58,000+/yr | Arts ~$42k, Business ~$50k, Eng/CS ~$52k–$56k, Medicine ~$80k+) | UNSW Portal",
    "tuitionAmountNumeric": 35000,
    "hasFullRide": false,
    "hasPartialAid": true,
    "hasFinancialAid": true,
    "financialAidType": "Merit-Based",
    "financialAidDetails": "UNSW Sydney offers major international awards including the competitive International Scientia Coursework Scholarship (100% Tuition Fee Waiver OR AUD $20,000/yr toward tuition for program duration), the International Student Award (20% tuition contribution every year for eligible countries), Australia's Global University Award ($10,000 for 1st year), and faculty specific awards for Business ($5,000/yr or $15k pathway) and Law ($10,000). Research PhD candidates compete for full tuition offset + living stipends (~AUD $37,000–$40,000/yr).",
    "minGpa": "3.0+",
    "minSat": "Test-Optional / Not Required (Evaluated on High School / A-Level / IB / FSc marks)",
    "satRequirementCategory": "Optional",
    "satPolicyDetails": "SAT/ACT is test-optional. International applicants are evaluated based on recognised secondary qualifications (A-Levels, IB, High School Diploma, FSc/HSSC) and program-specific prerequisites. English requirements: IELTS 6.5 (6.0 subscores) for general; 7.0+ for Medicine/Law, TOEFL 90+, PTE 64+, Cambridge 176+.",
    "minIelts": "6.5",
    "ieltsCategory": "6.5",
    "toeflRequirement": "90+ iBT (PTE 64+)",
    "commonAppAccepted": false,
    "applicationPortalDetails": "UNSW Direct International Application Portal or UAC International.",
    "acceptanceRate": "~60% Overall (Selective programs like Engineering, CS, Business, and Medicine have higher barriers)",
    "deadline": "Nov 30 (Term 1 / Feb) / Mar 31 (Term 2 / May) / Jul 31 (Term 3 / Sept)",
    "description": "#19 Global (QS 2027) & #1 in Australia for Engineering & Tech. 100% Tuition Scientia Scholarships & 20% International Student Awards.",
    "overviewLong": "The University of New South Wales (UNSW Sydney), established in 1949, is a premier public research university situated in Kensington, Sydney, with campuses at Paddington (Arts & Design) and UNSW Canberra (ADFA). Ranked #19 globally in the QS World University Rankings 2027 (#20 in QS 2026, #79 in THE 2026), UNSW is ranked #1 in Australia for Engineering & Technology and #1 in Australia for Sustainability.\n\nUNSW is structured across six main faculties: Faculty of Engineering (#1 in Australia), UNSW Business School, Faculty of Science, Faculty of Law & Justice, Faculty of Medicine & Health, and Faculty of Arts, Design & Architecture. Major global subject rankings include Civil Engineering (#15 World), Law (#12 World), Accounting & Finance (#21 World), Business & Management (#33 World), Computer Science (#34 World), and Materials Science.\n\nInternational scholarship options include the prestigious International Scientia Coursework Scholarship (100% Tuition Fee Waiver OR AUD $20,000/year for duration), the International Student Award (20% tuition contribution for every year of study), Australia's Global University Award (AUD $10,000 1st year), and faculty awards across Business and Law. Fully funded PhD opportunities offer full tuition offsets plus AUD $37,000–$40,000/yr living stipends.",
    "topProgramsList": [
      {
        "name": "Engineering & Technology (Broad Faculty)",
        "ranking": "Global #33 | #1 Australia",
        "description": "A powerhouse of advanced technical research, offering elite training across civil, electrical, aerospace, mechanical, and sustainable systems with deep industry alignment."
      },
      {
        "name": "Civil & Structural Engineering",
        "ranking": "Global #=22 | #1 Australia",
        "description": "Consistently ranked as Australia's premier civil engineering hub, driving innovation in structural integrity, geotechnical designs, water resource planning, and smart city infrastructure."
      },
      {
        "name": "Law",
        "ranking": "Global #=13 | #1 Australia",
        "description": "Pioneering research-driven legal education focused on human rights, corporate justice, cyber-law, and international advocacy, producing highly globally employable advocates."
      },
      {
        "name": "Accounting & Finance",
        "ranking": "Global #29 | #3 Australia",
        "description": "Positioned in Australia's leading financial corridor with direct partnerships across major fintechs, top-tier global banks, and corporate investment portfolios."
      },
      {
        "name": "Business & Management Studies",
        "ranking": "Global #48 | #1 Australia",
        "description": "Nurturing tomorrow's entrepreneurs and corporate leaders through a modern curriculum with digital strategies, experiential leadership Labs, and corporate venture consulting."
      },
      {
        "name": "Materials Science",
        "ranking": "Global #=31 | #1 Australia",
        "description": "Advancing pioneering material development, covering nanomaterials, biomaterials, and energy materials to solve global resource challenges."
      },
      {
        "name": "Computer Science & Information Systems",
        "ranking": "Global Top 50 | #5 Australia",
        "description": "A hub for artificial intelligence, machine learning, robotics, and cyber defense research with high-performance laboratory infrastructures."
      }
    ],
    "allScholarshipsList": [
      {
        "id": "uni-115-1",
        "title": "International Scientia Coursework Scholarship",
        "amount": "100% Tuition Fee Waiver OR AUD $20,000 / year",
        "coverage": "Full Tuition",
        "eligibility": "High-achieving international applicants entering undergraduate or postgraduate coursework degrees.",
        "description": "[SEPARATE APPLICATION REQUIRED] UNSW's flagship international coursework award offering 100% tuition coverage OR AUD $20,000/yr for minimum program duration based on academic excellence and leadership.",
        "deadline": "Nov 30 (Term 1) / Mar 31 (Term 2) / Jul 31 (Term 3)",
        "requiresSeparateApp": true
      },
      {
        "id": "uni-115-2",
        "title": "UNSW International Student Award",
        "amount": "20% Tuition Fee Contribution Every Year",
        "coverage": "Partial Aid",
        "eligibility": "International students commencing in 2026/2027 from eligible countries.",
        "description": "[AUTOMATIC CONSIDERATION] Provides a 20% tuition fee reduction for every year of undergraduate or postgraduate coursework study for eligible international students.",
        "deadline": "Automatic upon admission offer",
        "requiresSeparateApp": false
      },
      {
        "id": "uni-115-3",
        "title": "Australia's Global University Award",
        "amount": "AUD $10,000 (1st Year Tuition Credit)",
        "coverage": "Partial Aid",
        "eligibility": "Eligible international students commencing on-campus undergraduate or postgraduate study.",
        "description": "[AUTOMATIC CONSIDERATION] AUD $10,000 credited directly toward tuition fees in Term 2 of the first year of study.",
        "deadline": "Automatic upon admission offer",
        "requiresSeparateApp": false
      },
      {
        "id": "uni-115-4",
        "title": "UNSW Research Training Program & Scientia PhD Scholarship",
        "amount": "Full Tuition Waiver + AUD $37,000–$40,000/yr Stipend",
        "coverage": "Full Ride",
        "eligibility": "High-achieving doctoral research candidates assessed on academic record and research potential.",
        "description": "[SEPARATE APPLICATION REQUIRED] Highly competitive doctoral scholarship providing full tuition fee offset plus an annual tax-free living stipend of ~AUD $37,000–$40,000/yr for up to 3.5 years.",
        "deadline": "Multiple rounds annually (May / Sept / Nov)",
        "requiresSeparateApp": true
      }
    ],
    "degreesOffered": [
      "Bachelors",
      "Masters",
      "PhD"
    ],
    "tags": [
      "QS Top 20 Global",
      "#1 Eng in Australia",
      "Sydney",
      "100% Tuition Waiver",
      "Australia"
    ],
    "requiresSeparateApp": true,
    "logoText": "UNSW",
    "logoBg": "from-amber-600 to-slate-900"
  },

  {
    "id": "uni-116",
    "universityName": "The University of Melbourne",
    "location": "Melbourne, Victoria, Australia",
    "country": "Australia",
    "flag": "🇦🇺",
    "foundingYear": "1853",
    "scholarshipTitle": "Melbourne International Undergraduate & Graduate Excellence Scholarships",
    "ranking": "#=22 Global (QS 2027) | #19 (QS 2026) | #79 (THE 2026) | #38 (ARWU) | #1 University in Australia",
    "qsSubjectRankings": "Law & Legal Studies #11 | Medicine #20 | Accounting & Finance #24 | Education & Training (#15 World) | Arts & Humanities (#16 World) | Computer Science (#31 World)",
    "coverage": "Partial Aid",
    "amountValue": "20% Fee Remission for Entire Course (Undergrad & Grad) / AUD $39,500/yr + Full Tuition Offset PhD Research Scholarship",
    "tuitionFee": "Faculty-Dependent Overseas Tuition (AUD $38,000 – $54,000+/yr | Arts ~$38k, Science/Design ~$46k-$50k, Commerce ~$48k-$52k, Eng/CS ~$50k-$54k, MD/DDS ~$90k+) | Melbourne Direct Portal",
    "tuitionAmountNumeric": 33000,
    "hasFullRide": false,
    "hasPartialAid": true,
    "hasFinancialAid": true,
    "financialAidType": "Merit-Based",
    "financialAidDetails": "The University of Melbourne offers major international scholarships, including the Melbourne International Undergraduate Scholarship (20% fee remission for full course duration; 225 awards from 2027), Melbourne International Excellence Scholarship (20% fee remission for undergrad & grad), Melbourne International Graduate Scholarship (20% fee remission; 300 awards for target GDP countries), and Graduate Research Scholarships providing AUD $39,500/yr tax-free living stipend + full tuition waiver for PhD (3.5 yrs) and Master's by Research (2 yrs).",
    "minGpa": "3.2+",
    "minSat": "Test-Optional / Not Required (Evaluated on High School / A-Level / IB / FSc marks)",
    "satRequirementCategory": "Optional",
    "satPolicyDetails": "SAT/ACT is test-optional. Admission is based on recognised secondary qualifications (A-Levels, IB, High School Diploma, FSc/HSSC) and subject prerequisites. English requirements: IELTS 6.5 (6.0 subscores) for general; 7.0+ for Law, Medicine, and Teaching; TOEFL 79+, PTE 58+.",
    "minIelts": "6.5",
    "ieltsCategory": "6.5",
    "toeflRequirement": "79+ iBT (PTE 58+)",
    "commonAppAccepted": false,
    "applicationPortalDetails": "University of Melbourne Direct Online Application Portal.",
    "acceptanceRate": "~60% Overall (Competitive flagship tracks like Biomedicine, Commerce, Engineering, and JD maintain higher internal selectivity)",
    "deadline": "Nov 30 (Semester 1 / Feb) / May 31 (Semester 2 / July)",
    "description": "#=22 Global (QS 2027) & Australia's #1 Overall University. 20% Fee Remission Scholarships & $39,500/yr Fully Funded PhD Research Grants.",
    "overviewLong": "The University of Melbourne, established in 1853, is Australia's oldest university in Victoria and leading public research institution. Situated in Parkville near Melbourne's central business district, hospitals, and biomedical precinct, Melbourne ranks #=22 globally in QS World University Rankings 2027 (#19 in QS 2026, #79 in THE 2026, #38 in ARWU).\n\nOperating under the distinctive \"Melbourne Model\" (broad undergraduate bachelor degrees followed by specialized graduate professional degrees like the JD, MD, and DDS), the university spans nine faculties: Science, Engineering and IT, Medicine Dentistry & Health Sciences, Business and Economics, Melbourne Law School, Arts, Architecture Building & Planning, Education, and Fine Arts & Music. Verified QS 2026 subject rankings place Melbourne #15 globally for Education, #16 for Arts & Humanities, #31 for Computer Science & Information Systems, and in the global top tier for Medicine, Law, Accounting, and Civil Engineering.\n\nFor international students, Melbourne offers automatic tuition scholarships: the Melbourne International Undergraduate Scholarship (20% fee remission for course duration), Melbourne International Excellence Scholarship (20% fee remission for high achievers), and Melbourne International Graduate Scholarship (20% fee remission for Master's coursework). Graduate Research Scholarships (RTP) provide full tuition waivers + AUD $39,500/year tax-free living stipend for up to 3.5 years.",
    "topProgramsList": [
      {
        "name": "Law & Legal Studies",
        "ranking": "Global #11",
        "description": "Renowned for its scholarly excellence and global impact, training top legal minds through rigorous JD, LLB, and international research paths."
      },
      {
        "name": "Medicine",
        "ranking": "Global #20",
        "description": "Leading the nation in clinical medicine and biomedical discovery, deeply integrated within Melbourne's world-famous hospital precinct."
      },
      {
        "name": "Accounting & Finance",
        "ranking": "Global #24",
        "description": "Empowering next-generation financial leaders with state-of-the-art analytical tools, strategic economics, and extensive global industry partnerships."
      },
      {
        "name": "Education and Training",
        "ranking": "#15 World Education (QS 2026)",
        "description": "World-leading educational research and teacher education at the Melbourne Graduate School of Education."
      },
      {
        "name": "Arts and Humanities",
        "ranking": "#16 World Arts & Humanities (QS 2026)",
        "description": "Comprehensive humanities research spanning literature, philosophy, history, and social sciences."
      },
      {
        "name": "Computer Science and Information Systems",
        "ranking": "#31 World Computer Science (QS 2026)",
        "description": "Top-ranked computing and AI programs within the Faculty of Engineering and Information Technology."
      }
    ],
    "allScholarshipsList": [
      {
        "id": "uni-116-1",
        "title": "Melbourne International Undergraduate Scholarship",
        "amount": "20% Fee Remission for Full Course Duration",
        "coverage": "Partial Aid",
        "eligibility": "High-achieving international applicants enrolled in an eligible bachelor degree.",
        "description": "[AUTOMATIC CONSIDERATION] 20% tuition fee sponsorship for the entire duration of the bachelor degree awarded to high-achieving international applicants (225 awards annually from 2027).",
        "deadline": "Automatic consideration upon application",
        "requiresSeparateApp": false
      },
      {
        "id": "uni-116-2",
        "title": "Melbourne International Excellence Scholarship (Graduate)",
        "amount": "20% Fee Remission for Master's Coursework",
        "coverage": "Partial Aid",
        "eligibility": "High-achieving international students entering an eligible Master's coursework program.",
        "description": "[AUTOMATIC CONSIDERATION] 20% tuition fee remission for the duration of eligible Master's coursework degrees (at least 180 awards annually from 2027).",
        "deadline": "Automatic consideration upon application",
        "requiresSeparateApp": false
      },
      {
        "id": "uni-116-3",
        "title": "Graduate Research Scholarship / Research Training Program (RTP)",
        "amount": "Full Tuition Waiver + AUD $39,500/yr Stipend",
        "coverage": "Full Ride",
        "eligibility": "Domestic and international research master's and doctoral candidates.",
        "description": "[SEPARATE APPLICATION REQUIRED] Highly prestigious research grant providing 100% full tuition fee offset plus AUD $39,500/year living stipend for up to 3.5 years (PhD) or 2 years (Master's by Research).",
        "deadline": "Oct 31 (Round 1) / May 31 (Round 2)",
        "requiresSeparateApp": true
      }
    ],
    "degreesOffered": [
      "Bachelors",
      "Masters",
      "PhD"
    ],
    "tags": [
      "QS Top 25 Global",
      "#1 University in Australia",
      "Melbourne",
      "Parkville",
      "Australia"
    ],
    "requiresSeparateApp": false,
    "logoText": "MELB",
    "logoBg": "from-blue-900 to-slate-900"
  },

  {
    "id": "uni-117",
    "universityName": "The University of Sydney",
    "location": "Sydney, New South Wales, Australia",
    "country": "Australia",
    "flag": "🇦🇺",
    "foundingYear": "1850",
    "scholarshipTitle": "Vice-Chancellor's International Scholarships & RTP PhD Fellowships",
    "ranking": "#18 Global (QS 2027) | #18 (QS 2026) | #60 (THE 2026) | #7 Global for Sustainability",
    "qsSubjectRankings": "Law & Legal Studies #17 | Nursing #19 | Anatomy & Physiology #25 | Architecture & Built Environment #28 | Medicine #26 | Sports-related subjects (#4 World) | Veterinary Science (#16 World)",
    "coverage": "Partial Aid",
    "amountValue": "Up to AUD $40,000 Vice-Chancellor's Award / AUD $42,754/yr + Full Tuition PhD Research Grant",
    "tuitionFee": "Faculty-Dependent Overseas Tuition (AUD $51,000 – $63,000+/yr | Arts ~$51k, Business ~$59k–$62k, Eng/CS ~$59k–$63k, Medicine ~$88k+) | USYD Direct Portal",
    "tuitionAmountNumeric": 34000,
    "hasFullRide": false,
    "hasPartialAid": true,
    "hasFinancialAid": true,
    "financialAidType": "Merit-Based",
    "financialAidDetails": "The University of Sydney offers the Vice-Chancellor's International Scholarships Scheme providing up to AUD $40,000 total (tier 1: $40,000, tier 2: $20,000, tier 3: $10,000, tier 4: $5,000) credited toward tuition fees for high-achieving international undergraduate and postgraduate applicants. Postgraduate research candidates compete for USYD / RTP Fellowships providing 100% full tuition fee offset plus an annual tax-free stipend of AUD $42,754/yr.",
    "minGpa": "3.0+",
    "minSat": "Test-Optional / Not Required (Evaluated on High School / A-Level / IB / FSc marks)",
    "satRequirementCategory": "Optional",
    "satPolicyDetails": "SAT/ACT is test-optional. International applicants are evaluated based on recognised secondary qualifications (A-Levels, IB, High School Diploma, FSc/HSSC). English requirements: IELTS 6.5 (6.0 subscores) for general; 7.0 for Business/Law/Engineering, 7.0–7.5 for Nursing and Medicine; TOEFL 85+, PTE 61+.",
    "minIelts": "6.5",
    "ieltsCategory": "6.5",
    "toeflRequirement": "85+ iBT (PTE 61+)",
    "commonAppAccepted": false,
    "applicationPortalDetails": "The University of Sydney Direct Online Application Portal or UAC International.",
    "acceptanceRate": "30% - 40% (Selective for Medicine, Law, Veterinary Science, and Business)",
    "deadline": "Jan 15 (Semester 1 / Feb) / Jun 25 (Semester 2 / Aug)",
    "description": "#18 Global (QS 2027) & Australia's Oldest University. #4 World in Sports & #16 in Law with $40,000 Vice-Chancellor's Awards.",
    "overviewLong": "The University of Sydney (USYD), founded in 1850 as Australia's first university, is a global leader in higher education and research. Located in Camperdown/Darlington near central Sydney, USYD ranks #18 globally in the QS World University Rankings 2027 (#18 in QS 2026, #60 in THE 2026) and #7 globally for Sustainability.\n\nUSYD encompasses eight faculties and schools: Arts and Social Sciences, University of Sydney Business School, Faculty of Engineering, Faculty of Medicine and Health, Faculty of Science, Sydney School of Architecture Design and Planning, Sydney Conservatorium of Music, and Sydney Law School. In QS Subject Rankings 2026, Sydney holds world-leading positions: Sports-related subjects (#4 World), Anatomy & Physiology (#13 World), Nursing (#14 World), Veterinary Science (#16 World), Law (#16 World), Architecture / Built Environment (#24 World), and Medicine (#25 World).\n\nScholarships include the automatic Vice-Chancellor's International Scholarships Scheme (offering up to AUD $40,000 toward tuition fees), Sydney Scholars Regional Awards, and Postgraduate Research Scholarships (RTP / USYD IS) providing full tuition fee offsets plus AUD $42,754/year tax-free stipends for 3.5 years.",
    "topProgramsList": [
      {
        "name": "Law & Legal Studies",
        "ranking": "Global #17",
        "description": "Academically distinguished legal education featuring LLB, JD, and LLM programs with human rights and corporate law specializations."
      },
      {
        "name": "Nursing",
        "ranking": "Global #19",
        "description": "Deeply aligned with premier clinical hospital partners, providing outstanding hands-on coursework and high-impact health research."
      },
      {
        "name": "Anatomy & Physiology",
        "ranking": "Global #25",
        "description": "Backed by premium medical sciences infrastructure, pioneering research in human anatomy and physiological systems."
      },
      {
        "name": "Architecture & Built Environment",
        "ranking": "Global #28",
        "description": "Fostering creative design, regional urbanism, structural sustainability, and advanced digital fabrication techniques."
      },
      {
        "name": "Medicine",
        "ranking": "Global #26",
        "description": "Integrating research and clinical practice with elite healthcare precincts including RPA and Westmead Hospital networks."
      },
      {
        "name": "Sports & Exercise Science",
        "ranking": "#4 World Sports-related subjects (QS 2026)",
        "description": "World-leading research and clinical training in exercise, sports science, and biomechanics."
      },
      {
        "name": "School of Veterinary Science",
        "ranking": "#16 World Veterinary Science (QS 2026)",
        "description": "Internationally accredited (AVMA / RCVS) veterinary science training with clinical teaching hospitals."
      }
    ],
    "allScholarshipsList": [
      {
        "id": "uni-117-1",
        "title": "Vice-Chancellor's International Scholarships Scheme",
        "amount": "Up to AUD $40,000 Tuition Award",
        "coverage": "Partial Aid",
        "eligibility": "High-achieving international applicants entering full-time undergraduate or postgraduate coursework.",
        "description": "[AUTOMATIC CONSIDERATION] Major merit award providing up to AUD $40,000 total (tiered at $40k, $20k, $10k, $5k) credited toward tuition fees for top-tier international students.",
        "deadline": "Automatic consideration upon admission offer",
        "requiresSeparateApp": false
      },
      {
        "id": "uni-117-2",
        "title": "Sydney Scholars Regional International Awards",
        "amount": "Up to AUD $20,000 / year Tuition Waiver",
        "coverage": "Partial Aid",
        "eligibility": "High-achieving international applicants from eligible target countries in South Asia / Asia-Pacific.",
        "description": "[AUTOMATIC CONSIDERATION] Regional international award providing up to $20,000/year tuition reduction for high-achieving international applicants.",
        "deadline": "Automatic consideration upon application",
        "requiresSeparateApp": false
      },
      {
        "id": "uni-117-3",
        "title": "USYD Postgraduate Research Scholarship (RTP / USYD IS)",
        "amount": "Full Tuition Waiver + AUD $42,754/yr Stipend",
        "coverage": "Full Ride",
        "eligibility": "Domestic and international research master's and doctoral candidates.",
        "description": "[SEPARATE APPLICATION REQUIRED] Full tuition fee offset plus an annual living stipend of AUD $42,754/year for up to 3.5 years (PhD) or 2 years (Master's by Research).",
        "deadline": "Sept 15 (Round 1) / Dec 15 (Round 2)",
        "requiresSeparateApp": true
      }
    ],
    "degreesOffered": [
      "Bachelors",
      "Masters",
      "PhD"
    ],
    "tags": [
      "QS Top 20 Global",
      "Australia First Uni",
      "Sydney",
      "$40k Scholarship",
      "Australia"
    ],
    "requiresSeparateApp": false,
    "logoText": "USYD",
    "logoBg": "from-red-800 to-slate-900"
  },

  {
    "id": "uni-118",
    "universityName": "Australian National University (ANU)",
    "location": "Canberra, Australian Capital Territory, Australia",
    "country": "Australia",
    "flag": "🇦🇺",
    "foundingYear": "1946",
    "scholarshipTitle": "ANU Chancellor's International Scholarship & CECC Excellence Awards",
    "ranking": "#29 Global (QS 2027) | #30 (QS 2026) | #67 (THE 2026) | Australia's National Research University",
    "qsSubjectRankings": "Anthropology #9 | Politics & International Studies #14 | Development Studies #14 | History #17 | Earth & Marine Sciences #20 | Geography #25 | Archaeology (#10 World)",
    "coverage": "Partial Aid",
    "amountValue": "25% to 50% Tuition Fee Waiver (Chancellor's Award) / AUD $39,069–$41,200/yr + Tuition PhD Grant",
    "tuitionFee": "College-Dependent Overseas Tuition (AUD $45,000 – $56,000+/yr | Arts/Asia-Pacific ~$45k-$48k, Business ~$52k–$55k, Eng/CS ~$53k–$56k, Science ~$50k+) | ANU Direct Portal",
    "tuitionAmountNumeric": 32000,
    "hasFullRide": false,
    "hasPartialAid": true,
    "hasFinancialAid": true,
    "financialAidType": "Merit-Based",
    "financialAidDetails": "The Australian National University offers the ANU Chancellor's International Scholarship, providing a 25% or 50% tuition fee reduction for the entire duration of an undergraduate or postgraduate degree. Faculty specific awards include the ANU College of Business & Economics Award (up to 50% tuition waiver) and College of Engineering, Computing & Cybernetics (CECC) Excellence Scholarship ($10,000–$20,000). Research PhD candidates compete for full tuition offset + living stipends (~AUD $39,069–$41,200/yr).",
    "minGpa": "3.0+",
    "minSat": "Test-Optional / Not Required (Evaluated on High School / A-Level / IB / FSc marks)",
    "satRequirementCategory": "Optional",
    "satPolicyDetails": "SAT/ACT is test-optional. Evaluated based on secondary qualifications (A-Levels, IB, High School Diploma, FSc/HSSC) and subject prerequisites. English requirements: IELTS 6.5 (6.0 subscores) for general; 7.0 for Law and Medicine; TOEFL 80+, PTE 64+.",
    "minIelts": "6.5",
    "ieltsCategory": "6.5",
    "toeflRequirement": "80+ iBT (PTE 64+)",
    "commonAppAccepted": false,
    "applicationPortalDetails": "Australian National University Direct Online Application Portal.",
    "acceptanceRate": "35% - 45% (Selective for Law, Computing, Politics, and Actuarial Studies)",
    "deadline": "Dec 15 (Semester 1 / Feb) / May 31 (Semester 2 / July)",
    "description": "#29 Global (QS 2027) & Australia's National Research University in Canberra. 25% to 50% Tuition Fee Waivers & #11 World in Politics.",
    "overviewLong": "The Australian National University (ANU), established by the Parliament of Australia in 1946, is Australia's national research university situated in Acton, Canberra, directly adjacent to Parliament House and government agencies. Ranked #29 globally in the QS World University Rankings 2027 (#30 in QS 2026, #67 in THE 2026), ANU is a member of the Group of Eight and the International Alliance of Research Universities (IARU).\n\nANU comprises seven academic colleges: College of Arts & Social Sciences, College of Asia & the Pacific, College of Business & Economics, College of Engineering Computing & Cybernetics (CECC), College of Health & Medicine, College of Law, and College of Science. Verified QS Subject Rankings 2026 place ANU #10 globally for Archaeology, #11 for Politics & International Studies, #12 for Development Studies, #13 for Anthropology, #15 for Geography, #18 for History, and #20 for Earth & Marine Sciences.\n\nScholarships include the ANU Chancellor's International Scholarship (25% or 50% tuition fee reduction for course duration; automatic consideration), ANU College of Business & Economics Awards (up to 50% fee waiver), and CECC International Excellence Scholarships. PhD candidates compete for ANU University Research Scholarships providing full tuition waivers + AUD $39,069–$41,200/year living stipends for up to 3.5 years.",
    "topProgramsList": [
      {
        "name": "Anthropology",
        "ranking": "Global #9",
        "description": "An elite global center for ethnographic research, indigenous studies, and cross-cultural social exploration."
      },
      {
        "name": "Politics & International Studies",
        "ranking": "Global #14",
        "description": "Australia's top political science and international relations institute situated in national capital Canberra."
      },
      {
        "name": "Development Studies",
        "ranking": "Global #14",
        "description": "Exploring major global development issues, sustainability policies, poverty alleviation, and regional studies."
      },
      {
        "name": "History",
        "ranking": "Global #17",
        "description": "Renowned historical research encompassing European, modern global, indigenous, and Australian-Pacific historical disciplines."
      },
      {
        "name": "Earth & Marine Sciences",
        "ranking": "Global #20",
        "description": "Pioneering research in geology, oceanography, geochemistry, and environmental changes."
      },
      {
        "name": "Geography",
        "ranking": "Global #25",
        "description": "Addressing critical questions of climate change, urban planning, human geography, and environmental sustainability."
      },
      {
        "name": "Archaeology",
        "ranking": "Global #10 (QS 2026)",
        "description": "Pioneering scientific archaeological studies, archaeological science methods, field research and heritage management."
      }
    ],
    "allScholarshipsList": [
      {
        "id": "uni-118-1",
        "title": "ANU Chancellor's International Scholarship",
        "amount": "25% to 50% Tuition Fee Waiver for Full Degree",
        "coverage": "Partial Aid",
        "eligibility": "High-achieving international applicants entering undergraduate or postgraduate degrees.",
        "description": "[AUTOMATIC CONSIDERATION] Automatic fee reduction of 25% or 50% off full international tuition fees for the duration of the undergraduate or postgraduate degree.",
        "deadline": "Automatic consideration upon admission offer",
        "requiresSeparateApp": false
      },
      {
        "id": "uni-118-2",
        "title": "ANU College of Business & Economics Award",
        "amount": "Up to 50% Tuition Fee Waiver",
        "coverage": "Partial Aid",
        "eligibility": "High-achieving international students entering eligible business or economics degrees.",
        "description": "[AUTOMATIC CONSIDERATION] Merit-based award offering up to 50% tuition fee waiver for top incoming international students entering business/economics degrees.",
        "deadline": "Automatic consideration upon application",
        "requiresSeparateApp": false
      },
      {
        "id": "uni-118-3",
        "title": "ANU University Research Scholarship / RTP PhD Award",
        "amount": "Full Tuition Waiver + AUD $39,069–$41,200/yr Stipend",
        "coverage": "Full Ride",
        "eligibility": "High-achieving research master's and doctoral candidates.",
        "description": "[SEPARATE APPLICATION REQUIRED] Highly competitive research award providing full tuition waiver plus an annual living stipend of $39,069–$41,200/year for up to 3.5 years.",
        "deadline": "Oct 31 (Round 1) / Apr 15 (Round 2)",
        "requiresSeparateApp": true
      }
    ],
    "degreesOffered": [
      "Bachelors",
      "Masters",
      "PhD"
    ],
    "tags": [
      "QS Top 30 Global",
      "National University",
      "Canberra",
      "50% Tuition Waiver",
      "Australia"
    ],
    "requiresSeparateApp": false,
    "logoText": "ANU",
    "logoBg": "from-amber-800 to-slate-900"
  }
];

export const FEATURED_GOVERNMENT_SCHOLARSHIPS: GovernmentTrackItem[] = [
  ...UK_GOVERNMENT_SCHOLARSHIPS,
  ...ASIAN_GOVERNMENT_SCHOLARSHIPS,
  ...AMERICAS_GOVERNMENT_SCHOLARSHIPS,
  ...OCEANIA_GOVERNMENT_SCHOLARSHIPS,
  ...AFRICAN_GOVERNMENT_SCHOLARSHIPS
];
