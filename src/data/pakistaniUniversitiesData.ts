import { UniversityTrackItem } from './scholarshipTracksData';

export const PAKISTANI_UNIVERSITIES: UniversityTrackItem[] = [
  {
    id: "pak-uni-001",
    universityName: "National University of Sciences & Technology (NUST)",
    location: "H-12, Islamabad, Pakistan",
    country: "Pakistan",
    flag: "🇵🇰",
    foundingYear: "1991",
    scholarshipTitle: "NUST Need-Based Financial Aid & Merit-Based Assistance",
    ranking: "#371 globally (QS World University Rankings) | #64 in Asia | #2 in Pakistan",
    qsSubjectRankings: "QS Subject Rankings: Top 150 Engineering & Technology, #114 Computer Science & Info Systems, Top 200 Electrical Engineering, Top 250 Mechanical Engineering, Top 375 Civil Engineering",
    rankingSource: "QS",
    coverage: "Full or Partial Tuition & Expenses",
    amountValue: "Full or Partial Academic Expenses / Study Loans",
    tuitionFee: "PKR 216,750 / semester (STEM) | PKR 275,400 / semester (Business/Arts) + PKR 5,000/semester Misc Charges. Admission Fee: PKR 35,000 (Non-Refundable), Security Deposit: PKR 10,000 (Refundable). Business students are charged an additional Harvard Business School licensing fee.",
    tuitionAmountNumeric: 1560,
    hasFullRide: true,
    hasPartialAid: true,
    hasFinancialAid: true,
    financialAidType: "Need-Based & Merit",
    financialAidDetails: "NUST's Financial Aid Office (FAO) acts as the mandatory verifying agent for all scholarships. CRITICAL RULE: Students seeking any external provincial funding (PEEF, BEEF, SEEF, CMEEF) MUST simultaneously submit the NUST Need-Based Financial Aid Application Form (NFAAF) via the NUST portal during the admission cycle. If a student applies to BEEF or SEEF independently without logging their data into the NUST NFAAF portal system, NUST will not endorse their paperwork to the provincial government, resulting in automatic rejection.",
    minGpa: "3.5 Semester GPA (Merit)",
    minSat: "Requires NET (4 cycles/year). SAT/ACT routes are minor/international-only.",
    satRequirementCategory: "Optional",
    satPolicyDetails: "NET (NUST Entry Test) is the primary admission pipeline with 4 distinct computer/paper-based series over the year. Standard national applicants do not need any IELTS/TOEFL scores (0 language test profiles required). SAT/ACT are only selectively accepted for foreign/international seats and are not the primary target route.",
    minIelts: "Exempt for Domestic Streams (0 language test profiles required)",
    ieltsCategory: "all",
    acceptanceRate: "Competitive",
    deadline: "NET Cycles held multiple times a year",
    description: "NUST is one of Pakistan's premier public research universities, famous for its world-class engineering, computing, technology, and business portfolios.",
    overviewLong: "The National University of Sciences & Technology (NUST) is one of Pakistan's leading public research universities, with its main campus in Islamabad and constituent schools and colleges in several locations. Although NUST is historically associated with engineering and military-linked technical education, its present academic portfolio is much broader, covering engineering, computing, natural sciences, applied sciences, business, social sciences, architecture, design, law and several interdisciplinary areas. NUST currently offers more than 40 undergraduate programmes across these fields.\n\nThe university's strongest academic identity remains technology, engineering and computing. Its School of Electrical Engineering and Computer Science (SEECS), School of Mechanical and Manufacturing Engineering (SMME), School of Civil and Environmental Engineering (SCEE), School of Chemical and Materials Engineering (SCME), and other specialized schools provide a technically intensive environment. Computing options include Computer Science, Artificial Intelligence, Data Science and Bioinformatics, while engineering choices include Electrical, Mechanical, Civil, Chemical and Mechatronics Engineering. Students can also pursue BBA, Accounting & Finance, Economics, Psychology, Mass Communication, Public Administration, Architecture, Industrial Design, Mathematics, Physics, Chemistry, Biotechnology, Agriculture and Environmental Science.",
    topProgramsList: [
      {
        name: "BS Computer Science",
        ranking: "#114 globally (QS World University Rankings by Subject) | #1 in Pakistan",
        description: "Primarily based at SEECS, providing rigorous training across computer systems, software, algorithms, artificial intelligence, and related computing areas."
      },
      {
        name: "BS Electrical Engineering",
        ranking: "Top 200 globally (QS World University Rankings by Subject) | #1 in Pakistan",
        description: "One of NUST's strongest engineering disciplines, covering electronics, communications, power, control, and integrated systems."
      },
      {
        name: "BS Data Science & Artificial Intelligence",
        ranking: "N/A (Falls under Computer Science & Info Systems #114 globally) | #1 in Pakistan",
        description: "Particularly relevant option for students interested in machine learning, AI, big data analysis, and computational applications."
      },
      {
        name: "BS Mechanical, Aeronautical & Manufacturing Engineering",
        ranking: "Top 250 globally (QS World University Rankings by Subject) | #1 in Pakistan",
        description: "Covers mechanical systems, manufacturing, aerospace-related engineering, and advanced engineering design."
      },
      {
        name: "BS Civil & Structural Engineering",
        ranking: "Top 375 globally (QS World University Rankings by Subject) | #1 in Pakistan",
        description: "Includes structural, environmental, transportation, water resources, construction, and related engineering sub-disciplines."
      }
    ],
    allScholarshipsList: [
      {
        id: "nust-sch-1",
        title: "NUST Need-Based Financial Aid (NFAAF)",
        amount: "Partial or Full Academic Expenses",
        coverage: "Full Ride / Partial Aid",
        eligibility: "Admitted undergraduate and Master's students whose monthly household income is under PKR 100,000 per month. Requires submitting the NUST Need-Based Financial Aid Application Form (NFAAF) online simultaneously with the admission application.",
        description: "Covers partial or full tuition and academic expenses. CRITICAL AUDIT TRAP: Students must upload a 3-year history of household electricity bills, parents' salary slips, and clear photographs of their residential property. CONTINUITY RULE: Requires a minimum CGPA of 2.50. If the CGPA drops to 2.49, the full tuition bill is instantly re-issued to the student.",
        deadline: "Apply online simultaneously with the admission application form (May–June)",
        requiresSeparateApp: true
      },
      {
        id: "nust-sch-2",
        title: "NUST Merit-Based Financial Assistance",
        amount: "Up to PKR 3,000 / month",
        coverage: "Partial Aid",
        eligibility: "Undergraduate students attaining top academic positions in their semester with a minimum GPA of 3.5.",
        description: "Slabs: GPA 3.50–3.75: PKR 2,000/month; GPA 3.76–3.89: PKR 2,500/month; GPA 3.90–4.00: PKR 3,000/month. This is an in-study award.",
        deadline: "End of each semester",
        requiresSeparateApp: false
      },
      {
        id: "nust-sch-3",
        title: "N-CENTIVE / ICT Endowment Fund Scholarship",
        amount: "PKR 18,000 - 30,000 / month",
        coverage: "Full Tuition + Stipend",
        eligibility: "Full-time MS or PhD students with a minimum CGPA of 3.75 in the first semester, willing to perform mandatory teaching/lab assistant duties.",
        description: "MS: PKR 18,000/month; PhD: PKR 30,000/month. LABOR CLAUSE: Stipend is strictly contingent on fulfilling 10 hours/week of Teaching Assistant (TA) or Lab Assistant duties. Failing to perform duties or skipping a single weekly shift results in the stipend being completely withheld.",
        deadline: "When call is open",
        requiresSeparateApp: true
      },
      {
        id: "nust-sch-4",
        title: "Ihsan Trust Interest-Free Loan",
        amount: "Tuition-related costs",
        coverage: "Interest-Free Loan",
        eligibility: "Students who satisfy the financial-assistance assessment and cannot meet educational costs.",
        description: "Interest-free educational financing for tuition-related costs. Handled via NUST Trust Fund (NTF) in collaboration with Meezan Bank's Ihsan Trust. Must be repaid under applicable post-graduation terms.",
        deadline: "During admission cycle",
        requiresSeparateApp: true
      },
      {
        id: "nust-sch-5",
        title: "Punjab Educational Endowment Fund (PEEF)",
        amount: "Contribution toward educational expenses",
        coverage: "Partial Aid",
        eligibility: "Punjab domicile students. Requires a minimum of 60% marks in the last degree's final examination. Must log an active NUST NFAAF profile.",
        description: "Provides financial support toward tuition and educational costs. INSTITUTIONAL QUOTA: Specific, limited number of slots allocated to NUST. Admission does not guarantee a PEEF grant; students must place at the top of the financial need merit list compiled internally by NUST Financial Aid Office. Double-dipping is strictly banned.",
        deadline: "Apply when called by PEEF / NUST Financial Aid Office",
        requiresSeparateApp: true
      },
      {
        id: "nust-sch-6",
        title: "Balochistan Education Endowment Fund (BEEF) - Out-of-Province",
        amount: "Provincial Scholarship Stipend",
        coverage: "Partial Aid",
        eligibility: "Balochistan domiciled students. Requires minimum 60% marks in intermediate/previous degree or 3.0 CGPA in current semester. Minimum 75% class attendance required. Must submit NFAAF on NUST portal. No double-dipping allowed.",
        description: "Provides annual stipend. Subject to strict rules: suspended immediately if student receives a single academic warning, fails any course, or gets a supply exam. Attendance must be at least 75% as verified and stamped by the NUST Focal Person before funds are cleared. Legal bar on receiving BEEF if any other NUST internal aid is accepted.",
        deadline: "As called by BEEF",
        requiresSeparateApp: true
      },
      {
        id: "nust-sch-8",
        title: "Sindh Education Endowment Fund (SEEF)",
        amount: "Tuition reimbursement / Full or Partial Tuition",
        coverage: "Full Tuition / Partial Aid",
        eligibility: "Sindh domiciled students with total monthly family income within strict institutional caps. Requires an active NUST NFAAF profile.",
        description: "Features first-year retroactive fee refund: allows needy students who borrowed money to pay first-semester admission dues to get reimbursed directly. Applications are verified and endorsed by NUST FAO only if an active NFAAF profile is logged on the NUST admission portal. Double-dipping is strictly banned.",
        deadline: "As announced by SEEF",
        requiresSeparateApp: true
      },
      {
        id: "nust-sch-9",
        title: "Chief Minister Education Endowment Fund (CMEEF - KPK)",
        amount: "Full Ride (Tuition + Hostel charges)",
        coverage: "Full Ride",
        eligibility: "KPK domiciled students falling in the top tier of the NUST institutional merit list. Requires an active NUST NFAAF profile.",
        description: "Highly competitive high-merit filter program. Covers 100% tuition fee and hostel charges for selected KP scholars, provided they maintain their academic standing. Verifications are bound by the NFAAF rule. Double-dipping is strictly banned.",
        deadline: "As called by CMEEF",
        requiresSeparateApp: true
      },
      {
        id: "nust-sch-7",
        title: "Scottish-Related Scholarship Opportunities",
        amount: "Tuition support",
        coverage: "Partial Aid",
        eligibility: "Eligible undergraduate and graduate female students meeting specific criteria.",
        description: "Special external funding opportunities offered in collaboration with British Council and Scottish-related schemes where applicable.",
        deadline: "When call is announced",
        requiresSeparateApp: true
      }
    ],
    degreesOffered: ["Undergraduate", "Graduate", "PhD"],
    tags: ["STEM", "Engineering", "Computing", "Public", "Islamabad", "Tier 1"],
    requiresSeparateApp: false,
    logoText: "NUST",
    logoBg: "from-blue-900 to-indigo-950"
  },
  {
    id: "pak-uni-002",
    universityName: "Lahore University of Management Sciences (LUMS)",
    location: "DHA, Lahore, Punjab, Pakistan",
    country: "Pakistan",
    flag: "🇵🇰",
    foundingYear: "1985",
    scholarshipTitle: "LUMS National Outreach Programme (NOP) & Merit Scholarships",
    ranking: "#608 globally (QS World University Rankings) | #117 in Asia | #1 in Pakistan for Business",
    qsSubjectRankings: "QS Subject Rankings: #101-150 Business & Management Studies, Top Pakistani Institution for Accounting & Finance, Economics, and Social Sciences",
    rankingSource: "QS",
    coverage: "Full Ride / Partial Tuition",
    amountValue: "100% Fully Funded NOP / Partial-to-Full Merit Awards",
    tuitionFee: "PKR 2,182,200 (BSCS first year) | PKR 1,867,200 (BSc Management first year) [Residential & Living Fees Notice: Add ~PKR 300,000/semester for hostel (PKR 180,000) and mandatory meal plan (PKR 120,000), PKR 20,000/semester lab/misc fees, and PKR 11,500 upfront application filing fee. Real non-local cost is PKR 2,500,000+ per year.]",
    tuitionAmountNumeric: 7800,
    hasFullRide: true,
    hasPartialAid: true,
    hasFinancialAid: true,
    financialAidType: "Need-Blind / Need-Based",
    financialAidDetails: "LUMS offers undergraduate merit scholarships, need-based financial aid, interest-free loans, and the highly prestigious National Outreach Programme (NOP). Financial aid is reassessed annually. NOP covers 100% of all tuition, admission, registration, lab charges, accommodation, and stipend for high-achieving needy students.",
    minGpa: "3.5+ CGPA (Merit)",
    minSat: "Accepts LCAT, SAT, or ACT (STEM majors must also sit for the SBASSE Subject Test)",
    satRequirementCategory: "1400",
    satPolicyDetails: "Highly competitive. Uses holistic assessment. CRITICAL STEM RULE: If you select BS Computer Science or any STEM major path in the Syed Babar Ali School of Science and Engineering (SBASSE), you are legally required to also take the specialized SBASSE Subject Test (covering advanced Physics, Chemistry, Biology, and Mathematics) alongside the standard LCAT/SAT. Standard national applicants are exempt from IELTS/TOEFL English testing since English is evaluated as the medium of instruction across secondary schools.",
    minIelts: "Exempt for Domestic Streams",
    ieltsCategory: "all",
    acceptanceRate: "Highly Selective",
    deadline: "Financial aid application deadline: 28 February 2026",
    description: "LUMS is a premier private, not-for-profit research university in Lahore, widely considered the most prestigious institution for business, economics, law, and computing in Pakistan.",
    overviewLong: "The Lahore University of Management Sciences (LUMS) is one of Pakistan's leading private universities and is particularly recognized for business, economics, accounting and finance, social sciences, computer science and interdisciplinary education. Established in Lahore as a business school, LUMS has developed into a multi-school university comprising the Suleman Dawood School of Business, Mushtaq Ahmad Gurmani School of Humanities and Social Sciences, Syed Babar Ali School of Science and Engineering, Shaikh Ahmad Hassan School of Law and the School of Education.\n\nLUMS is academically distinctive because of its interdisciplinary undergraduate structure. Students are not restricted to a narrow professional curriculum; many programmes allow substantial elective study across schools and disciplines. Undergraduate options include Management Science, Accounting & Finance, Economics, Computer Science, Electrical Engineering, Chemical Engineering, Biology, Chemistry, Mathematics, Physics, Politics and Economics, Political Science, English, Comparative Literature, Creative Arts and BA-LL.B.",
    topProgramsList: [
      {
        name: "BSc (Honours) Management Science",
        ranking: "#101-150 globally (QS World University Rankings by Subject) | #1 in Pakistan",
        description: "SDSB's flagship business degree, combining management, economics, quantitative analysis, and corporate strategy."
      },
      {
        name: "BSc (Honours) Accounting & Finance",
        ranking: "Top Pakistani Institution (QS World University Rankings by Subject) | #1 in Pakistan",
        description: "Offered through SDSB, focusing on accounting, corporate finance, financial modeling, and business decision-making."
      },
      {
        name: "BSc (Honours) Economics",
        ranking: "Top/Shared-Top in Pakistan (QS World University Rankings by Subject)",
        description: "Emphasizes quantitative economics, econometrics, macro/micro policy, and deep analytical reasoning."
      },
      {
        name: "BS Computer Science",
        ranking: "#401-450 globally (QS World University Rankings by Subject)",
        description: "Housed in the Syed Babar Ali School of Science and Engineering, providing outstanding theoretical and practical software/hardware training."
      },
      {
        name: "BA-LL.B (Honours)",
        ranking: "Top Law Programme in Pakistan",
        description: "A comprehensive 5-year joint degree offered by the Shaikh Ahmad Hassan School of Law, combining liberal arts and legal education."
      }
    ],
    allScholarshipsList: [
      {
        id: "lums-sch-1",
        title: "National Outreach Programme (NOP) Scholarship",
        amount: "100% Fully Funded (Tuition, Hostels, Food, Books & Stipend)",
        coverage: "Full Ride",
        eligibility: "Needy students from any region of Pakistan with at least 80% marks in Matric/O-Level equivalent. TIMELINE TRAP: Cannot apply for the NOP after entering LUMS. Application is restricted strictly to students currently in their first year of Intermediate (FSc) or A-Levels.",
        description: "Covers admission, tuition, registration, lab charges, on-campus hostel accommodation, meals, books, and a monthly living stipend. SELECTION FILTER: Meeting the '80% Matric/O-Level' baseline only gets you an invite to the LUMS Summer Coaching Session (SCS). The final full-ride scholarship is only granted if the student clears the LCAT/SAT exam (funded by LUMS) and maintains their academic standing during the 2-week coaching boot camp on campus.",
        deadline: "Standard cutoff gates around mid-March annually for Summer Coaching Session",
        requiresSeparateApp: true
      },
      {
        id: "lums-sch-2",
        title: "Undergraduate Merit Scholarships",
        amount: "Partial or Full Tuition Support",
        coverage: "Full Tuition / Partial Aid",
        eligibility: "Outstanding applicants admitted based primarily on academic excellence and admissions evaluation.",
        description: "LUMS advertises 100 Undergraduate Merit Scholarships annually for newly admitted students. Can be renewed based on CGPA / Dean's List requirements.",
        deadline: "Considered automatically via admission app",
        requiresSeparateApp: false
      },
      {
        id: "lums-sch-3",
        title: "LUMS Need-Based Financial Aid",
        amount: "Part or All of Tuition & Registration",
        coverage: "Full Tuition / Partial Aid",
        eligibility: "Admitted students demonstrating financial need after comprehensive document evaluation.",
        description: "Provides support through tuition waivers, fee installments, or interest-free institutional loans. Reassessed annually.",
        deadline: "28 February 2026",
        requiresSeparateApp: true
      },
      {
        id: "lums-sch-4",
        title: "LUMS Interest-Free Loan",
        amount: "Tuition and registration expenses",
        coverage: "Interest-Free Loan",
        eligibility: "Admitted undergraduate students assessed as financially needy.",
        description: "Interest-free educational loan. Repayment begins exactly six months after graduation with a maximum repayment period of five years.",
        deadline: "28 February 2026",
        requiresSeparateApp: true
      },
      {
        id: "lums-sch-5",
        title: "Punjab Educational Endowment Fund (PEEF) Scholarship",
        amount: "Financial support according to PEEF scheme",
        coverage: "Partial Aid",
        eligibility: "Punjab domicile students meeting PEEF requirements. Requires a minimum of 60% marks in last final degree examination (Intermediate/Matric).",
        description: "Provides financial assistance towards educational expenses. INSTITUTIONAL QUOTA: Specific, limited number of slots allocated to LUMS. Admission does not guarantee a PEEF grant; students must place at the top of the financial need merit list compiled internally by the LUMS Financial Aid Office. Double-dipping is strictly banned.",
        deadline: "Check with LUMS Financial Aid Office",
        requiresSeparateApp: true
      },
      {
        id: "lums-sch-6",
        title: "LUMS-PHEC Honhaar Undergraduate Scholarship",
        amount: "Full Tuition (under provincial terms)",
        coverage: "Full Tuition",
        eligibility: "Admitted undergraduate students meeting Punjab government / PHEC Honhaar criteria. Family monthly income ceiling is PKR 300,000. Must hold a valid Punjab Domicile. Must be under 22 years of age on the official closing date.",
        description: "Covers full tuition fees. Under active PHEC rules: monthly family income must not exceed PKR 300,000; must hold Punjab domicile and be under 22 years of age. RETENTION RULE: Requires a steady 2.75 CGPA. If grades slip below 2.75 for a single semester, the provincial government ceases funding immediately. No dual funding/double-dipping allowed.",
        deadline: "Follow current Honhaar/PHEC timeline",
        requiresSeparateApp: true
      },
      {
        id: "lums-sch-7",
        title: "Sekha Scholarship",
        amount: "Highly prestigious full/partial support",
        coverage: "Full or Partial Tuition",
        eligibility: "High-achieving, financially disadvantaged students enrolled in the Syed Babar Ali School of Science and Engineering (SBASSE) (primarily CS and EE tracks).",
        description: "Highly prestigious endowment funded by the Sekha family. Specifically earmarked for high-achieving, financially disadvantaged students in the science & engineering school (SBASSE) (primarily Computer Science and Electrical Engineering). It is NOT a broad-access scholarship for Humanities or Law students.",
        deadline: "When award is offered",
        requiresSeparateApp: true
      },
      {
        id: "lums-sch-8",
        title: "Shahid Hussain Foundation Scholarship",
        amount: "Financial support according to foundation terms",
        coverage: "Full or Partial Aid",
        eligibility: "Non-Pakistani citizens from eligible SAARC countries: Afghanistan, Bangladesh, Bhutan, Maldives, Nepal, India, and Sri Lanka. Excludes anyone holding a Pakistani passport, CNIC, or NICOP.",
        description: "Provides financial aid for SAARC international students. NOT available to Pakistani citizens or dual-nationals where one citizenship is Pakistani (dual-nationality is a permanent bar).",
        deadline: "International admissions window",
        requiresSeparateApp: true
      }
    ],
    degreesOffered: ["Undergraduate", "Graduate", "PhD"],
    tags: ["Business", "Economics", "Computing", "Private", "Lahore", "Tier 1", "NOP"],
    requiresSeparateApp: false,
    logoText: "LUMS",
    logoBg: "from-red-800 to-amber-950"
  },
  {
    id: "pak-uni-003",
    universityName: "COMSATS University Islamabad (CUI)",
    location: "Islamabad Campus (Principal), Pakistan",
    country: "Pakistan",
    flag: "🇵🇰",
    foundingYear: "1998",
    scholarshipTitle: "CUI Merit Scholarship for Toppers & Need-Based Support",
    ranking: "#410 globally (U.S. News 2025) | #1 Ranked University in Pakistan | #639 globally (QS 2027) | 601–800 (THE 2026)",
    qsSubjectRankings: "U.S. News & World Report: #410 Globally, #1 in Pakistan | QS 2026: #180 Computer Science & Info Systems, #111 Mathematics, #221 Engineering & Tech, #201-250 Economics & Econometrics",
    rankingSource: "U.S. News & World Report / QS / THE",
    coverage: "Full or Partial Tuition",
    amountValue: "100% Tuition Waiver for Toppers / Need-Based Slabs",
    tuitionFee: "PKR 153,500 / semester (CS) | PKR 159,500 / semester (Engr) | PKR 141,500 / semester (Management). 🚨 FIRST-SEMESTER BILLING TRAP: Billed with a PKR 7,000 semester Registration Fee and PKR 27,000 non-refundable Admission Processing Fee, making the true 1st Semester CS Invoice PKR 187,500, and Engineering PKR 193,500. There is also a mandatory final Graduation Degree Fee of PKR 10,000.",
    tuitionAmountNumeric: 1100,
    hasFullRide: true,
    hasPartialAid: true,
    hasFinancialAid: true,
    financialAidType: "Need-Based & Merit",
    financialAidDetails: "CUI provides 100% tuition-fee waivers for admission toppers in each program across all campuses (requires maintaining a 3.50 CGPA). Also administers a significant volume of external provincial grants (PEEF, BEEF, SEEF), HEC scholarships, Workers Welfare Fund support, and Pakistan Bait-ul-Mal assistance.",
    minGpa: "3.50 CGPA (Topper Continuation)",
    minSat: "Requires NTS/NAT or local pre-entry tests",
    satRequirementCategory: "Optional",
    satPolicyDetails: "Mainly uses Matric/SSC (10%), HSSC/FSc (40%), and NTS/NAT Exam (50%) for the BS merit formula. Language tests (IELTS/TOEFL) are Exempt for National Applicants.",
    minIelts: "Exempt for National Applicants",
    ieltsCategory: "all",
    acceptanceRate: "Selective",
    deadline: "Varies by semester intake",
    description: "CUI is a leading public-sector university with an outstanding international ranking profile in quantitative sciences, engineering, and computing.",
    overviewLong: "COMSATS University Islamabad (CUI) is a federally chartered public-sector university with a particularly strong reputation in computer science, information technology, engineering, mathematics and the natural sciences. It began operations in Islamabad in 1998 and received its university charter in 2018. Unlike many Pakistani universities that operate primarily from one location, CUI has developed into a genuinely multi-campus institution, allowing students from different regions of Pakistan to access the same university system closer to home.\n\nCUI's academic portfolio is considerably broader than its traditional image as a computing university suggests. Current programmes span Computer Science, Artificial Intelligence, Software Engineering, Data Science, Cyber Security, Computer Engineering, Electrical Engineering, Chemical Engineering, Civil Engineering, Management Sciences, Accounting & Finance, Economics, Mathematics, Physics, Chemistry, Biotechnology, Bioinformatics, Environmental Sciences, Pharmacy, Architecture and Design, Humanities and other areas.",
    topProgramsList: [
      {
        name: "BS Mathematics",
        ranking: "#111 globally (QS 2026) | #1 in Pakistan",
        description: "COMSATS' highest-ranked subject, providing strong quantitative foundations applicable to data science, financial computing, and advanced research."
      },
      {
        name: "BS Computer Science",
        ranking: "501–600 globally (THE 2026) | #180 globally (QS 2026) | #2 in Pakistan",
        description: "Flagship program covering computer fundamentals, software development, database engines, AI, and systems architecture. THE Subject Ranking places CUI in the 501–600 band."
      },
      {
        name: "BS Economics",
        ranking: "201–250 globally (QS 2026) | #1 in Pakistan",
        description: "Combines economic theory with rigorous quantitative analysis and econometric modeling."
      },
      {
        name: "BS Physics",
        ranking: "401–500 globally (THE 2026) | 251–300 globally (QS 2026) | #2 in Pakistan",
        description: "Excellent research-oriented laboratory infrastructure covering scientific research, technology, and quantum mechanics. THE Physical Sciences subject matrix places CUI in the 401–500 band."
      },
      {
        name: "BS Environmental Sciences",
        ranking: "301–350 globally (QS 2026) | #1 in Pakistan",
        description: "Addresses climate systems, agricultural sustainability, waste management, pollution control, and resource conservation."
      }
    ],
    allScholarshipsList: [
      {
        id: "cui-sch-1",
        title: "CUI Merit Scholarship for Admission Toppers",
        amount: "100% Tuition Fee Waiver",
        coverage: "Full Tuition",
        eligibility: "One student topping the admission merit list of each undergraduate academic programme at each CUI campus.",
        description: "Provides a complete 100% tuition-fee waiver for the normal degree duration (8 semesters for 4-year, 10 semesters for 5-year degrees). RETENTION THRESHOLD: To retain the waiver across successive semesters, the student must maintain a minimum CGPA of 3.50 out of 4.00. Reassessed every single semester.",
        deadline: "Automatically locked at the close of every national admission cycle list generation",
        requiresSeparateApp: false
      },
      {
        id: "cui-sch-2",
        title: "PWWF Talent Scholarship",
        amount: "Full Tuition, Hostels & Educational Allowance",
        coverage: "Full Ride",
        eligibility: "Admitted students who are children/dependents of qualifying industrial workers. Parent must be a registered industrial worker clearing the minimum employment timeline verified under the EOBI / Social Security registry.",
        description: "Funded by the Provincial Workers Welfare Fund. Covers full tuition, hostel dues, transport, and a monthly educational stipend. DISQUALIFICATION GATE: If the parent's workplace is not officially registered with the Provincial Workers Welfare Board, the student is disqualified immediately.",
        deadline: "Must be filled and submitted directly to the regional WWF office within 30 days of the campus admission announcement",
        requiresSeparateApp: true
      },
      {
        id: "cui-sch-3",
        title: "CUI Need-Based Financial Assistance",
        amount: "Varies by assessment",
        coverage: "Partial Aid",
        eligibility: "Students demonstrating genuine financial need.",
        description: "Facilitated by the campus Student Financial Aid Office, matching students with institutional waivers or external donor support.",
        deadline: "First month of semester",
        requiresSeparateApp: true
      },
      {
        id: "cui-sch-4",
        title: "Punjab Educational Endowment Fund (PEEF) Scholarship",
        amount: "Educational expense contribution",
        coverage: "Partial Aid",
        eligibility: "Punjab domiciled students satisfying academic merit (minimum 60% marks in last final degree examination) and financial threshold requirements.",
        description: "Provincial government funding distributed via the Student Financial Aid Office according to the active PEEF cycle. QUOTA LIMITS: Specific limited number of slots; students must place at the top of the financial need merit list compiled internally. No dual funding allowed.",
        deadline: "Upon scholarship announcement",
        requiresSeparateApp: true
      },
      {
        id: "cui-sch-5",
        title: "Balochistan Education Endowment Fund (BEEF) Scholarship",
        amount: "Provincial education stipend",
        coverage: "Partial Aid",
        eligibility: "Balochistan domiciled students meeting current BEEF academic and financial criteria. Requires a minimum 3.0 CGPA or 60% marks floor.",
        description: "Provincial endowment support. PROGRESS CLAUSE: Processed annually; suspended immediately if student receives a single academic warning, fails any course, or gets a supply exam. ATTENDANCE CLAUSE: Explicitly mandates a 75% classroom attendance record, physically signed and stamped by the university focal person before funds clear.",
        deadline: "As announced by BEEF",
        requiresSeparateApp: true
      },
      {
        id: "cui-sch-6",
        title: "Sindh Education Endowment Fund (SEEF) Scholarship",
        amount: "Tuition assistance",
        coverage: "Partial Aid",
        eligibility: "Sindh domiciled students meeting current SEEF criteria.",
        description: "Provincial grant supporting tuition fees of needy students from Sindh. REIMBURSEMENT LOOP: Operates on a retroactive refund model. Needy students must pay their initial first-semester dues out-of-pocket to secure their seat, after which SEEF processes their paperwork and issues a refund check directly to the student.",
        deadline: "As announced by SEEF",
        requiresSeparateApp: true
      },
      {
        id: "cui-sch-7",
        title: "HEC Scholarships",
        amount: "Varies by federal allocation",
        coverage: "Full Tuition / Stipend",
        eligibility: "Students qualifying for HEC public-sector funding schemes.",
        description: "Federal government scholarships offered through HEC for public sector universities.",
        deadline: "When HEC call is active",
        requiresSeparateApp: true
      },
      {
        id: "cui-sch-8",
        title: "Pakistan Bait-ul-Mal Assistance",
        amount: "Welfare-based educational grant",
        coverage: "Partial Aid",
        eligibility: "Deserving students. GOVERNMENT EMPLOYEE BAN: If a parent is an in-service Government Employee, they are strictly ineligible. Monthly family income must register under PKR 30,000. Must have scored at least 60% marks in their previous degree/semester.",
        description: "Welfare assistance. FAIL DEATH PENALTY: If a student fails or gets a 'supply' in a single subject, PBM permanently terminates all financial assistance. Needy students must manually secure a signed Bonafide Certificate from CUI Student Affairs before filing the application directly to the MD of PBM.",
        deadline: "Processed dynamically during the first 3 to 4 weeks of the active semester cycle once class registries are finalized",
        requiresSeparateApp: true
      }
    ],
    degreesOffered: ["Undergraduate", "Graduate", "PhD"],
    tags: ["Computing", "STEM", "Public", "Islamabad", "Multi-Campus", "Tier 1"],
    requiresSeparateApp: false,
    logoText: "CUI",
    logoBg: "from-teal-800 to-slate-900"
  },
  {
    id: "pak-uni-004",
    universityName: "National University of Computer & Emerging Sciences (FAST-NUCES)",
    location: "Islamabad, Lahore, Karachi, Peshawar, Chiniot-Faisalabad, Multan",
    country: "Pakistan",
    flag: "🇵🇰",
    foundingYear: "2000",
    scholarshipTitle: "FAST Board Position Merit & Need-Based Study Loans",
    ranking: "#451–500 globally in Computer Science & Information Systems (QS World University Rankings by Subject) | #1 in Pakistan",
    qsSubjectRankings: "QS Subject Rankings: #451–500 globally in Computer Science & Info Systems. Officially rated #1 in Pakistan for software industry placement and computing competitiveness.",
    rankingSource: "QS",
    coverage: "Full Tuition / Interest-Free Study Loans",
    amountValue: "100% Tuition for Position Holders / Extensive Need-Based Loans",
    tuitionFee: "PKR 11,000 / credit hour (e.g., PKR 165,000 / semester for 15 credits | PKR 198,000 / semester for 18 credits). Admission Fee: PKR 30,000, Refundable Security Deposit: PKR 20,000. Day 1 onboarding totals a minimum of PKR 215,000.",
    tuitionAmountNumeric: 1400,
    hasFullRide: true,
    hasPartialAid: true,
    hasFinancialAid: true,
    financialAidType: "Need-Based & Merit",
    financialAidDetails: "FAST-NUCES features a robust financial assistance system supporting over 2,000 students across its campuses (Islamabad, Lahore, Karachi, Peshawar, Chiniot-Faisalabad, and Multan). Offers 100% tuition waivers for top board position holders and top 3 on admission merit lists, alongside interest-free study loans with flexible 4-year repayment after graduation. Entrance exam applications open in early May and lock on June 26 annually.",
    minGpa: "3.25 CGPA (Merit continuation)",
    minSat: "Accepts FAST-NU test, SAT, or NTS/NAT",
    satRequirementCategory: "Optional",
    satPolicyDetails: "General minimum academic threshold: At least 60% SSC/Matric and 50% HSSC/equivalent with mathematics.",
    minIelts: "N/A",
    ieltsCategory: "all",
    acceptanceRate: "Highly Competitive",
    deadline: "Entrance Exam locked: June 26 annually. Honhaar: Sept 30. Loans: First 3 weeks of semester.",
    description: "FAST-NUCES is widely acknowledged as the premier training ground for computer science, software engineering, and AI professionals in Pakistan, spanning six fully active campuses.",
    overviewLong: "The National University of Computer & Emerging Sciences (FAST-NUCES) is one of Pakistan's most recognized universities for computer science, software engineering, artificial intelligence, data science and related technology fields. The university was federally chartered in 2000, building on the earlier FAST-ICS institutes that pioneered computer science education in Pakistan. FAST's computing legacy dates back to 1985, when it introduced one of the country's earliest dedicated Computer Science degree programmes. The university currently operates six fully functional campuses in Islamabad, Lahore, Karachi, Peshawar, Chiniot-Faisalabad, and Multan, all processing engineering and computing cohorts.\n\nFAST is deliberately more specialized than many large Pakistani universities. Its core academic identity is built around computing, engineering, management sciences and selected mathematical/scientific disciplines. Its graduates have an overwhelming presence in Pakistan's software industry, technological corporations, and entrepreneurship scenes.",
    topProgramsList: [
      {
        name: "BS Computer Science",
        ranking: "Top 1 in Pakistan for Industry Placement",
        description: "Flagship computing program covering advanced algorithms, systems programming, data structures, and computer architecture."
      },
      {
        name: "BS Software Engineering",
        ranking: "Leading National accreditation",
        description: "Emphasizes software lifecycle, testing methodologies, design patterns, project management, and large-scale web development."
      },
      {
        name: "BS Artificial Intelligence",
        ranking: "Emerging High-Demand field",
        description: "Focuses on machine learning, deep learning, computer vision, natural language processing, and neural networks."
      },
      {
        name: "BS Data Science",
        ranking: "Elite Data Analytics Program",
        description: "Combines robust software development with advanced statistical modeling, data mining, and big-data computations."
      },
      {
        name: "BS Electrical Engineering",
        ranking: "PEC Accredited",
        description: "Provides strong foundations in electronics, communications, power grids, signal processing, and robotics."
      }
    ],
    allScholarshipsList: [
{
        id: "fast-sch-1",
        title: "FAST Merit Scholarship — Board Position Holders",
        amount: "100% Tuition Fee waiver",
        coverage: "Full Tuition",
        eligibility: "Top three position holders of each intermediate/examination board or group in the year of admission. Student must take the absolute maximum course workload (Full-Load Rule) prescribed for that specific semester.",
        description: "Covers 100% of the tuition fee for the entire normal degree duration, subject to maintaining satisfactory performance. WARNING: Under the strict 'Full-Load Rule', if a student drops down to a lighter course load or swaps out a core computing lab, the entire scholarship is permanently voided for that cycle.",
        deadline: "Must present certified, verified Board certificates physically to the campus accounts department during the first 2 weeks of admission.",
        requiresSeparateApp: false
      },
      {
        id: "fast-sch-2",
        title: "FAST Admission Merit Scholarship",
        amount: "100% Tuition Fee waiver",
        coverage: "Full Tuition",
        eligibility: "Top three students in the FAST admission merit list at each of the six campuses (Islamabad, Lahore, Karachi, Peshawar, Chiniot-Faisalabad, Multan).",
        description: "Awarded to the top performers of the entrance lists. Covers 100% tuition for up to 8 regular semesters. Requires preserving a minimum CGPA of 3.25 every single semester. If a student finishes a term with a 3.24 CGPA, the full tuition balance is instantly re-issued to them.",
        deadline: "Awarded automatically upon admission list",
        requiresSeparateApp: false
      },
      {
        id: "fast-sch-3",
        title: "FAST Need-Based Interest-Free Study Loan",
        amount: "Up to 100% Tuition Support",
        coverage: "Interest-Free Loan",
        eligibility: "Bright students with genuine financial need who cannot afford the university tuition.",
        description: "Renewable each semester based on course load and need. Repayment starts 3 months after graduation or obtaining a job, whichever is earlier, completed within 4 years. WARNING: This is not a generic hand-out; it requires an execution of a legal Guarantee Bond on Rs. 100 Non-Judicial Stamp Paper witnessed and executed by a solvent financial guarantor who is a regular tax-payer. Evaluated internally within the first 3 weeks of the active semester launch.",
        deadline: "Submit application within first 3 weeks of semester",
        requiresSeparateApp: true
      },
      {
        id: "fast-sch-4",
        title: "OSAF / FAANA Alumni Financial Assistance",
        amount: "Varies by donor availability",
        coverage: "Partial or Full Tuition",
        eligibility: "Students facing financial difficulty meeting FAST's assistance criteria.",
        description: "These function as two separate, distinct bodies: OSAF targets domestic emergencies, while FAANA pulls dollars from North American chapters. Applications open sporadically and require an in-person, heavy background panel interview by senior alumni chapters on campus.",
        deadline: "When applications are announced",
        requiresSeparateApp: true
      },
      {
        id: "fast-sch-5",
        title: "Sindh Government Endowment Board Scholarship",
        amount: "Full tuition for the entire program",
        coverage: "Full Tuition",
        eligibility: "Sindh domiciled students (distinguishing rural and urban categories) meeting academic & need criteria.",
        description: "Provincial government award covering full tuition for the entire degree program, renewable annually.",
        deadline: "Upon Sindh Board call",
        requiresSeparateApp: true
      },
      {
        id: "fast-sch-6",
        title: "Punjab Educational Endowment Fund (PEEF)",
        amount: "Provincial education support",
        coverage: "Partial Aid",
        eligibility: "Punjab domiciled students meeting academic merit, financial need, and income restrictions.",
        description: "Provincial government scholarship facilitated through FAST's verification process.",
        deadline: "Check with Financial Aid Office",
        requiresSeparateApp: true
      },
      {
        id: "fast-sch-7",
        title: "Balochistan Education Endowment Fund (BEEF)",
        amount: "Provincial scholarship support",
        coverage: "Partial Aid",
        eligibility: "Balochistan domiciled students satisfying BEEF provincial requirements.",
        description: "Provincial government scholarship supporting qualifying students, verified by FAST.",
        deadline: "As called by BEEF",
        requiresSeparateApp: true
      },
      {
        id: "fast-sch-8",
        title: "ICT / Prime Minister's National ICT Scholarship",
        amount: "Financial support for ICT education",
        coverage: "Full or Partial Tuition",
        eligibility: "Eligible ICT students from designated regions.",
        description: "Federal ICT scholarship facilitated through IGNITE/HEC for qualifying computing programs.",
        deadline: "Check active year's call",
        requiresSeparateApp: true
      },
      {
        id: "fast-sch-9",
        title: "Khyber Pakhtunkhwa Education Foundation Scholarship (KPEF)",
        amount: "Provincial financial assistance",
        coverage: "Partial Aid",
        eligibility: "KP domiciled students at the Peshawar campus meeting academic/financial requirements.",
        description: "Provincial foundation support specifically listed at the Peshawar campus of FAST.",
        deadline: "When KPEF call opens",
        requiresSeparateApp: true
      },
      {
        id: "fast-sch-10",
        title: "Khyber Pakhtunkhwa Workers Welfare Board Scholarship",
        amount: "Provincial welfare scholarship",
        coverage: "Full Tuition / Partial Aid",
        eligibility: "Eligible children/dependents of qualifying industrial workers under Workers Welfare Board rules. Parent must be a verify-certified worker registered with the Employees' Old-Age Benefits Institution (EOBI) or Social Security.",
        description: "Provincial welfare funding covering educational costs. Verified by FAST Peshawar. WARNING: If the parent works under the table or for an unregistered private firm, the application is dropped immediately.",
        deadline: "When call is active",
        requiresSeparateApp: true
      },
      {
        id: "fast-sch-11",
        title: "Akhuwat Education Financing",
        amount: "Interest-free educational loan",
        coverage: "Interest-Free Loan",
        eligibility: "Financially deserving students meeting Akhuwat's requirements.",
        description: "Akhuwat is a 0% interest-free (charity-driven, long-term paybacks under social contracts) educational loan option listed at FAST campuses.",
        deadline: "During semester registration",
        requiresSeparateApp: true
      },
      {
        id: "fast-sch-12",
        title: "The Citizens Foundation (TCF) Support",
        amount: "TCF alumni support",
        coverage: "Partial Aid",
        eligibility: "TCF school graduates admitted to FAST.",
        description: "TCF support for eligible high-achieving alumni, listed at FAST Peshawar.",
        deadline: "When TCF cycle opens",
        requiresSeparateApp: true
      },
      {
        id: "fast-sch-13",
        title: "EduFi Education Financing",
        amount: "Education financing",
        coverage: "Education Loan",
        eligibility: "Eligible FAST students needing credit-based tuition financing.",
        description: "Commercial corporate FinTech loan entity that builds out dynamic credit arrangements. WARNING: This is not a 0% charity loan; it tracks varying commercial structural processing and interest overhead, unlike Akhuwat.",
        deadline: "Open enrollment",
        requiresSeparateApp: true
      },
      {
        id: "fast-sch-14",
        title: "FAST Ex-FATA Scholarship",
        amount: "Institutional/regional scholarship",
        coverage: "Partial or Full Tuition",
        eligibility: "Students from the former FATA/merged-district region meeting current FAST criteria.",
        description: "Institutional/regional support for former FATA students administered through the campus financial-aid process.",
        deadline: "During admission phase",
        requiresSeparateApp: true
      },
      {
        id: "fast-sch-15",
        title: "Punjab Honhaar Scholarship Program (FAST Punjab Campuses)",
        amount: "Provincial scholarship",
        coverage: "Partial Aid",
        eligibility: "Punjab domiciled students enrolled at FAST Lahore or Chiniot-Faisalabad campuses. Monthly family income must be under PKR 300,000. Minimum Intermediate percentage of 70% or higher for computing/sciences.",
        description: "Provincial government scholarship covering full tuition fees. STRICT REGULATORY RULE: This scholarship is strictly bound to campuses located inside the provincial boundaries of Punjab (Lahore, Chiniot-Faisalabad). Applying for or facilitating a Punjab government fund at the Peshawar (KPK) campus is legally barred. Externally regulated; portals typically collect digital forms until the structural cutoff on September 30.",
        deadline: "September 30 (Regulated externally by PHEC)",
        requiresSeparateApp: true
      },
      {
        id: "fast-sch-16",
        title: "Restricted Community-Based Scholarships (Memon, Bohra, Aga Khan)",
        amount: "Donor-specific coverage",
        coverage: "Restricted Eligibility",
        eligibility: "Students belonging to Memon or Bohra communities, or eligible for Aga Khan Foundation support.",
        description: "Restricted-eligibility scholarships provided by community foundations. Marked explicitly as restricted in Uni Route.",
        deadline: "Specific to each community call",
        requiresSeparateApp: true
      }
    ],
    degreesOffered: ["Undergraduate", "Graduate", "PhD"],
    tags: ["Computing", "Software", "STEM", "Private", "Islamabad", "Lahore", "Karachi", "Peshawar", "Faisalabad", "Multan", "Tier 1"],
    requiresSeparateApp: false,
    logoText: "FAST",
    logoBg: "from-blue-800 to-slate-950"
  },
  {
    id: "pak-uni-005",
    universityName: "Quaid-i-Azam University (QAU)",
    location: "Islamabad, Pakistan",
    country: "Pakistan",
    flag: "🇵🇰",
    foundingYear: "1967",
    scholarshipTitle: "QAU OSFA Need-Based Slabs & Alumni Scholarships",
    ranking: "#381 globally (QS 2027) | No. 1 in Pakistan | 401–500 globally (THE 2026) | #58 globally for Citations per Faculty (QS)",
    qsSubjectRankings: "QS 2026: #201-250 Natural Sciences, #101-150 Physics (QS) [THE: #301-400 Physical Sciences], #151-200 Mathematics (QS), #151-200 Chemistry (QS), #250-400 Environmental Sciences (QS), THE 2026: #501-600 Computer Science",
    rankingSource: "QS / THE / US News",
    coverage: "Subsidized Public Fees & Need-Based aid",
    amountValue: "Highly Subsidized Semester Fees / OSFA Financial Grants",
    tuitionFee: "Regular (Morning): PKR 100,600 flat (1st Sem) | Self-Finance (Evening): PKR 154,830 flat (1st Sem) | Standard Morning Semester: PKR 68,490. 🚨 HOSTEL TRAP: Billed with an unlisted mandatory PKR 25,000 to PKR 30,000 joining & initialization overhead for out-station students.",
    tuitionAmountNumeric: 600,
    hasFullRide: true,
    hasPartialAid: true,
    hasFinancialAid: true,
    financialAidType: "Need-Based & Merit",
    financialAidDetails: "More than 50% of QAU students receive some form of financial assistance. QAU's Office of Students' Financial Assistance (OSFA) coordinates substantial government-funded (HEC Need-Based, USAID, PEEF, BEEF, KP Chief Minister's, FATA) and alumni/donor scholarships.",
    minGpa: "Merit-based departmental criteria",
    minSat: "HEC USAT waived for BS and Pharm-D for Fall 2026. HEC LAT compulsory for Law with 50%.",
    satRequirementCategory: "Optional",
    satPolicyDetails: "Admission aggregate is based on academic history (HSSC Part-I at least 50% required).",
    minIelts: "N/A",
    ieltsCategory: "all",
    acceptanceRate: "Competitive",
    deadline: "Regular public-sector deadlines (usually August)",
    description: "QAU is Pakistan's premier research-oriented public university, internationally distinguished in natural, biological, and physical sciences, boasting an elite academic footprint.",
    overviewLong: "Quaid-i-Azam University (QAU) is one of Pakistan's most research-oriented public universities and is particularly distinguished for natural sciences, social sciences, biological sciences and postgraduate research. Established in July 1967, the university initially concentrated on MPhil and PhD-level teaching and research before expanding into master's and undergraduate education. This research-first history remains an important part of QAU's identity today.\n\nQAU's current academic structure includes the Faculty of Natural Sciences, Faculty of Biological Sciences, Faculty of Social Sciences and an affiliated Faculty of Medicine. It is located in Islamabad, placing students close to Pakistan's major government, diplomatic, research and policy institutions. QAU boasts a spectacular research impact, reporting a 97.2/100 Citations per Faculty score, placing it among the world's top 60 universities on that indicator.",
    topProgramsList: [
      {
        name: "BS Computer Science",
        ranking: "#501–600 globally (THE 2026)",
        description: "Housed in the Faculty of Natural Sciences, emphasizing theoretical computer science, algorithms, computational modeling, and research."
      },
      {
        name: "BS Physics",
        ranking: "#101–150 globally (QS 2026) | 301–400 globally (THE Physical Sciences)",
        description: "Backed by an elite fundamental sciences faculty with historical research ties to Nobel Laureate Abdus Salam's legacy. Sits in the top 150 globally under QS for raw subject excellence, and 301-400 under THE Physical Sciences."
      },
      {
        name: "BS Mathematics",
        ranking: "#151–200 globally (QS 2026)",
        description: "Outstanding research culture in pure, applied, and computational mathematics."
      },
      {
        name: "BS Chemistry",
        ranking: "#151–200 globally (QS 2026)",
        description: "Research-intensive laboratories focusing on materials chemistry, organic synthesis, and analytical diagnostics."
      },
      {
        name: "BS Environmental Sciences",
        ranking: "#250–400 globally (QS 2026)",
        description: "Integrates earth sciences, biology, ecology, and climate research into sustainable solutions."
      }
    ],
    allScholarshipsList: [
      {
        id: "qau-sch-2",
        title: "HEC Need-Based Scholarship",
        amount: "Full Tuition + Monthly Stipend",
        coverage: "Full Ride",
        eligibility: "Financially deserving students whose monthly family income is under PKR 100,000. Must maintain a minimum 2.50 CGPA.",
        description: "Covers full tuition dues and provides an active monthly stipend under the federal HEC need-based program. Double-dipping is strictly banned.",
        deadline: "Post-admission call",
        requiresSeparateApp: true
      },
      {
        id: "qau-sch-5",
        title: "Pakistan Bait-ul-Mal (PBM) Scholarship",
        amount: "Educational financial assistance",
        coverage: "Partial Aid",
        eligibility: "Financially deserving students satisfying PBM criteria. Strictly zero eligibility for children of active or in-service Government servants.",
        description: "Government welfare support. FAIL PENALTY: Permanently canceled if a student fails or gets a 'supply' in a single subject. Dual-funding is strictly banned.",
        deadline: "As announced by PBM",
        requiresSeparateApp: true
      },
      {
        id: "qau-sch-1",
        title: "QAU Alumni Scholarship",
        amount: "Varies by donor",
        coverage: "Partial or Full Tuition Dues",
        eligibility: "Undergraduate or postgraduate students demonstrating financial need. Requires a rigorous panel interview with the alumni chapter; prioritized for students coming from rural districts who do not secure HEC slots.",
        description: "Alumni-funded assistance. Managed through the OSFA which matches needy students directly with international or local alumni sponsors.",
        deadline: "Apply through OSFA post-admission",
        requiresSeparateApp: true
      },
      {
        id: "qau-sch-4",
        title: "QAU Departmental Merit Scholarships",
        amount: "Varies by department",
        coverage: "Partial Aid",
        eligibility: "Awarded strictly to the top 1 or 2 students per semester per section based on previous semester GPA results.",
        description: "Institutional merit awards evaluated by departmental scholarship committees. Functions strictly as a partial tuition fee credit applied directly to the next semester's voucher; does not cover living expenses.",
        deadline: "Evaluated each semester",
        requiresSeparateApp: false
      },
      {
        id: "qau-sch-3",
        title: "USAID Need & Merit-Based Scholarship",
        amount: "Full Academic Dues",
        coverage: "Inactive",
        eligibility: "None. The broad national USAID-Funded Merit and Need-Based Scholarship Program phase has officially concluded.",
        description: "⚠️ PHASE CONCLUDED / STATUS: INACTIVE: This program has officially concluded its active broad-spectrum rollout cycles and has been structurally superceded by the core HEC framework and local corporate trusts.",
        deadline: "Closed / Concluded",
        requiresSeparateApp: true
      },
      {
        id: "qau-sch-6",
        title: "PEEF Scholarship",
        amount: "Provincial need/merit support",
        coverage: "Partial Aid",
        eligibility: "Punjab-domiciled Master's and Bachelor's level students. Requires a minimum of 60% total aggregate marks in their intermediate/previous degree, valid Punjab domicile, and monthly family income under PKR 60,000.",
        description: "Provincial government funding administered through PEEF and QAU's scholarship mechanism. Double-dipping is strictly banned.",
        deadline: "Announced during the semester",
        requiresSeparateApp: true
      },
      {
        id: "qau-sch-7",
        title: "Balochistan Educational Endowment Fund (BEEF)",
        amount: "Provincial endowment support",
        coverage: "Partial Aid",
        eligibility: "Eligible Balochistan-domiciled students. Requires a minimum 60% marks in intermediate or a strict 3.00 CGPA floor and a verified 75% classroom attendance sheet signed off by the campus focal person.",
        description: "Provincial funding explicitly listed in QAU's admission notices. Double-dipping is banned.",
        deadline: "As announced by BEEF",
        requiresSeparateApp: true
      },
      {
        id: "qau-sch-8",
        title: "KP Chief Minister's Endowment Scholarship (CMEEF)",
        amount: "Provincial scholarship",
        coverage: "Full Ride",
        eligibility: "Eligible KP students under the active provincial scheme. High-merit KP domiciled students.",
        description: "Covers complete tuition and hostel dues for selected high-merit KPK domiciled students. Double-dipping is strictly banned.",
        deadline: "Follow KP government deadlines",
        requiresSeparateApp: true
      },
      {
        id: "qau-sch-10",
        title: "Aghaz-e-Haqooq-e-Balochistan Scholarship",
        amount: "Regional educational support",
        coverage: "Full or Partial Tuition",
        eligibility: "Eligible Balochistan students according to current HEC programme rules. Requires an explicit district-level verification check to confirm actual socio-economic residency within Balochistan.",
        description: "Special HEC-related regional scholarship supporting students from Balochistan. Domicile verification trap: face secondary asset evaluation if entire academic history was in federal schools in Islamabad or Punjab.",
        deadline: "When program is active",
        requiresSeparateApp: true
      },
      {
        id: "qau-sch-16",
        title: "Political Agent / Tribal Area Scholarships (FATA)",
        amount: "Regional/territorial assistance",
        coverage: "Partial Aid",
        eligibility: "Restricted strictly to students holding an authentic domicile from former FATA/merged districts.",
        description: "Regional scholarships identified by QAU among its regional support options. Managed via OSFA.",
        deadline: "During admission phase",
        requiresSeparateApp: true
      },
      {
        id: "qau-sch-9",
        title: "OGDCL Need-Based Scholarship",
        amount: "Full Tuition & Living Expenses",
        coverage: "Full Ride",
        eligibility: "Financially deserving students originating from operational oil/gas drilling districts (specifically in parts of Sindh and Punjab).",
        description: "Funded by Oil & Gas Development Company Ltd. Heavily prioritized for drilling-affected communities.",
        deadline: "Announced during admissions",
        requiresSeparateApp: true
      },
      {
        id: "qau-sch-15",
        title: "MORA Zakat Scholarships",
        amount: "Government educational assistance",
        coverage: "Partial Aid",
        eligibility: "Needy students satisfying current MORA criteria. Requires an official Zakat Eligibility Certificate (Form LZ-7) signed and stamped by the applicant's localized District Zakat Committee.",
        description: "Federal government educational assistance. LIQUIDITY WARNING: Severe processing delays exist. Students must pay their initial tuition out-of-pocket or apply for extensions while waiting for Zakat checks to clear.",
        deadline: "Announced departmental timeline",
        requiresSeparateApp: true
      },
      {
        id: "qau-sch-14",
        title: "Minority Students Scholarship",
        amount: "Donor/government program funding",
        coverage: "Partial Aid",
        eligibility: "Reserved exclusively for non-Muslim students (Christian, Hindu, Sikh, etc.) holding valid institutional merit standings.",
        description: "Government and donor-backed scholarships supporting minority students.",
        deadline: "When advertised",
        requiresSeparateApp: true
      },
      {
        id: "qau-sch-12",
        title: "Disability Fee Concession & Assistive Devices",
        amount: "100% full tuition waiver & assistive devices",
        coverage: "Full Tuition",
        eligibility: "Physically challenged students. Requires producing an official Special Person CNIC and passing evaluation by the University Medical Board.",
        description: "Provides financial concessions and wheelchair support to eligible students with disabilities.",
        deadline: "Open upon enrollment",
        requiresSeparateApp: true
      },
      {
        id: "qau-sch-11",
        title: "Aga Khan Foundation Support",
        amount: "Regional scholarship allocation",
        coverage: "Partial Aid",
        eligibility: "Students satisfying Aga Khan Foundation parameters.",
        description: "Restricted community-based coverage administered according to specialized development metrics for northern and specific rural regions.",
        deadline: "During admission window",
        requiresSeparateApp: true
      },
      {
        id: "qau-sch-17",
        title: "British Council Scholarships (When Active)",
        amount: "Foundation scholarship support",
        coverage: "Partial or Full Tuition",
        eligibility: "Earmarked strictly for female undergraduate students enrolled in STEM, environment, or digital technologies fields.",
        description: "Focused heavily on young female scholars in science and technical disciplines.",
        deadline: "Announced during admissions",
        requiresSeparateApp: true
      },
      {
        id: "qau-sch-13",
        title: "Zainab Habibullah Endowment",
        amount: "Complete Departmental Fees",
        coverage: "Full Tuition",
        eligibility: "Selective donor grant managed through OSFA. Covers the complete departmental fees of 4 highly needy students per semester.",
        description: "Private endowment targeting highly deserving and impoverished students.",
        deadline: "As announced",
        requiresSeparateApp: true
      },
      {
        id: "qau-sch-18",
        title: "National Bank Student Loan Scheme (NBP)",
        amount: "Educational interest-free loan",
        coverage: "Student Loan",
        eligibility: "Undergraduate applicants under 21 years of age with a minimum of 70% total aggregate marks in their last official board examination.",
        description: "Provides interest-free educational financing options. Requires a parent/guardian to sign a co-debtor legal guarantee ensuring structured repayment post-graduation.",
        deadline: "With bank announcements",
        requiresSeparateApp: true
      },
      {
        id: "qau-sch-19",
        title: "Hakim Ali Muhammad Memorial Scholarship",
        amount: "Donor-backed fixed financial check",
        coverage: "Partial Aid",
        eligibility: "Selected deserving students who clear OSFA's basic review.",
        description: "Donor-backed financial grant. Disburses a set PKR 20,000 per semester.",
        deadline: "During semester call",
        requiresSeparateApp: true
      }
    ],
    degreesOffered: ["Undergraduate", "Graduate", "PhD"],
    tags: ["Sciences", "Research", "Public", "Islamabad", "Tier 1"],
    requiresSeparateApp: false,
    logoText: "QAU",
    logoBg: "from-green-950 to-slate-900"
  },
  {
    id: "pak-uni-006",
    universityName: "University of the Punjab (PU)",
    location: "Lahore, Punjab, Pakistan",
    country: "Pakistan",
    flag: "🇵🇰",
    foundingYear: "1882",
    scholarshipTitle: "Punjab University Departmental Merit & Need-Based Subsidies",
    ranking: "#588 globally (QS 2026) | #762 globally (U.S. News 2025) | No. 1 in Linguistics & Education in Pakistan",
    qsSubjectRankings: "QS 2026: #101-150 Petroleum Engineering, #151-200 Pharmacy & Pharmacology, #151-200 Mathematics, #251-275 Statistics, #251-300 Chemistry, #1 in Pakistan for Linguistics & Education",
    rankingSource: "QS / U.S. News",
    coverage: "Highly Subsidized Public tuition / Departmental waivers",
    amountValue: "PKR 12,000 / year (Standard Departmental Merit/Need Awards)",
    tuitionFee: "Regular (Morning): PKR 35,000 to PKR 55,000 / semester | Self-Supporting (Evening): PKR 70,000 to PKR 110,000+ / semester. 🚨 ONBOARDING OVERHEADS: All new entrants must process a PKR 9,000 Registration Fee, a PKR 5,000 refundable Library Security, a PKR 500 Development Fund, and a PKR 3,500 seasonal classroom Air Conditioning (AC) fee on their Spring semester vouchers.",
    tuitionAmountNumeric: 300,
    hasFullRide: true,
    hasPartialAid: true,
    hasFinancialAid: true,
    financialAidType: "Need-Based & Merit",
    financialAidDetails: "PU's 2026-27 budget allocates PKR 10 billion toward student subsidies, including PKR 341 million specifically from university resources for scholarships. Offers departmental merit, need-based, disability, flood-affected, PEEF, Pakistan Bait-ul-Mal, and National Bank study loans.",
    minGpa: "Top position in department",
    minSat: "N/A (Uses local entry tests)",
    satRequirementCategory: "Optional",
    satPolicyDetails: "Admission aggregate uses: Engineering (Entry test = 33%), Non-engineering (Entry test = 25%). morning vs self-supporting details apply.",
    minIelts: "N/A",
    ieltsCategory: "all",
    acceptanceRate: "Competitive due to volume",
    deadline: "Admissions opened 2 July 2026, closed 4 August 2026",
    description: "Pakistan's oldest and largest public-sector comprehensive university, with over 54,000 on-campus students and extremely diverse academic programs.",
    overviewLong: "The University of the Punjab (PU) is Pakistan's oldest major university and one of its largest and most comprehensive public-sector universities. Founded in Lahore on 14 October 1882, it has developed into a huge academic system covering sciences, engineering, computing, medicine and health sciences, agriculture, business, economics, law, education, social sciences, arts, languages and Islamic studies. PU reports more than 54,000 on-campus students, 1,300+ full-time faculty, 513 affiliated colleges, 73+ PhD programs, and 220+ undergraduate programs.",
    topProgramsList: [
      {
        name: "BS Petroleum Engineering",
        ranking: "#101–150 globally (QS 2026) | #1 in Pakistan",
        description: "Housed within PU's engineering ecosystem, providing outstanding specialized training in energy, petroleum, and drilling technologies."
      },
      {
        name: "BS Pharmacy (Pharm-D)",
        ranking: "#151–200 globally (QS 2026) | Top in Pakistan",
        description: "Housed at the historic Allama Iqbal Campus, associated with the highly prestigious PU College of Pharmacy."
      },
      {
        name: "BS Mathematics",
        ranking: "#151–200 globally (QS 2026)",
        description: "A major quantitative science pillar, connected directly with statistics, computing, and financial model networks."
      },
      {
        name: "BS Computer Science",
        ranking: "#351–400 globally (QS 2026)",
        description: "One of PU's most competitive modern programs, available in both standard morning and self-supporting formats."
      },
      {
        name: "BS Statistics / Computational Statistics & Data Analytics",
        ranking: "#251–275 globally (QS 2026)",
        description: "Stronger international standing than CS, providing pathways combining computing, data analytics, and operational research."
      }
    ],
    allScholarshipsList: [
      {
        id: "pu-sch-1",
        title: "PU Central Need-Based Subsidy",
        amount: "Up to PKR 219,000 / year",
        coverage: "Partial Tuition",
        eligibility: "Automatically targets Morning (Regular) students at risk of dropping out due to financial distress. Funded from PU’s record PKR 341 million internal scholarship budget.",
        description: "Subsidizes real educational cost per student. Double-dipping is strictly prohibited.",
        deadline: "First month of academic year",
        requiresSeparateApp: true
      },
      {
        id: "pu-sch-2",
        title: "PU Hostel Subsidy Grant",
        amount: "PKR 150,000 / year",
        coverage: "Living Subsidy",
        eligibility: "All regular students living in official on-campus residential halls.",
        description: "Provides built-in lodging subsidy directly applied to campus accommodation dues. Cannot be combined with external living grants.",
        deadline: "During hostel registration",
        requiresSeparateApp: false
      },
      {
        id: "pu-sch-9",
        title: "QASF Taleem Mumkin Scholarship",
        amount: "100% Tuition + PKR 10,000 / month",
        coverage: "Full Ride",
        eligibility: "Highly deserving students sponsored by the Qasim Ali Shah Foundation.",
        description: "Provides complete educational sponsorship alongside a continuous monthly allowance. MANDATORY GATES: Requires active attendance at youth training workshops, leadership boot camps, and ongoing character development classes managed by the QASF.",
        deadline: "Post-admission evaluation",
        requiresSeparateApp: true
      },
      {
        id: "pu-sch-3",
        title: "PU Sports Merit Waiver",
        amount: "100% Tuition Waiver",
        coverage: "Full Tuition",
        eligibility: "Trials-verified national or board-level athletes admitted under the university's sports quota allocation.",
        description: "Full tuition waiver for the normal duration of the degree, subject to representing the university in sports trials and competitions.",
        deadline: "During admission trials",
        requiresSeparateApp: true
      },
      {
        id: "pu-sch-4",
        title: "PU Co-Curricular Merit Waiver",
        amount: "100% Tuition Waiver",
        coverage: "Full Tuition",
        eligibility: "Top-tier national debaters, Qaris, and dramatists who win designated slots during annual admission trial representations.",
        description: "Provides tuition concessions for representing the university in co-curricular competitions.",
        deadline: "During admission trials",
        requiresSeparateApp: true
      },
      {
        id: "pu-sch-5",
        title: "Vice Chancellor’s Special Discretionary Pool",
        amount: "Emergency Financial Relief (100% Fee-Exempt)",
        coverage: "Full Tuition",
        eligibility: "Students who lose a primary breadwinner (father/guardian) mid-degree cycle, or face extreme sudden socio-economic hardships.",
        description: "Converts the student to a 100% fee-exempt profile dynamically to ensure zero disruption in their degree studies.",
        deadline: "Apply dynamically through VC Office",
        requiresSeparateApp: true
      },
      {
        id: "pu-sch-10",
        title: "PHEC Honhaar Scholarship",
        amount: "100% Tuition Coverage",
        coverage: "Full Tuition",
        eligibility: "Punjab-domiciled regular undergraduate students. Family monthly income must be under PKR 300,000, intermediate score must clear 70%, and student must hold a steady 2.75 CGPA.",
        description: "High-profile Punjab Higher Education Commission rollout providing complete baseline tuition coverage. GRADE DROPPING PENALTY: Falling to 2.74 CGPA in any semester instantly terminates the scholarship. No double-dipping allowed.",
        deadline: "Follow PHEC schedule",
        requiresSeparateApp: true
      },
      {
        id: "pu-sch-6",
        title: "PEEF Undergraduate / Master’s Slabs",
        amount: "Varies by level & category",
        coverage: "Partial Aid",
        eligibility: "Punjab-domiciled students. Requires a minimum entry score of 60% in previous exam and family monthly income under PKR 60,000.",
        description: "Provincial government endowment support. RETENTION PENALTY: Requires immediate, uninterrupted progression. If a student freezes a semester or fails a single major foundational module, the PU Financial Aid Office blocks the cross-reimbursement file permanently. Dual-funding is strictly banned.",
        deadline: "Announced during semester",
        requiresSeparateApp: true
      },
      {
        id: "pu-sch-11",
        title: "BEEF Scholarship (Balochistan Out-of-Province)",
        amount: "Provincial allocation stipend",
        coverage: "Partial Aid",
        eligibility: "Balochistan domiciled students studying at PU. Requires a minimum 3.00 CGPA preservation and continuous 75% classroom attendance logging.",
        description: "Provincial scholarship facilitated by PU. Suspended immediately if student receives academic warning or fails any course.",
        deadline: "As announced by BEEF",
        requiresSeparateApp: true
      },
      {
        id: "pu-sch-18",
        title: "KPK Workers Welfare Board (WWB) Grant",
        amount: "Full Tuition + Living Cost",
        coverage: "Full Ride",
        eligibility: "Children of active, EOBI-registered industrial workers in KP who clear verified industrial ledger checks.",
        description: "Covers complete tuition and living costs under provincial labor welfare funds.",
        deadline: "Announced during admissions",
        requiresSeparateApp: true
      },
      {
        id: "pu-sch-12",
        title: "Sindh Education Endowment Fund (SEEF)",
        amount: "Retroactive tuition reimbursement",
        coverage: "Full Tuition",
        eligibility: "Sindh-domiciled students meeting provincial need-cum-merit criteria.",
        description: "Retroactive reimbursement channel. Clears full tuition values back to the student post-verification. Requires initial payment out-of-pocket.",
        deadline: "Announced by SEEF",
        requiresSeparateApp: true
      },
      {
        id: "pu-sch-8",
        title: "Pakistan Bait-ul-Mal (PBM) Scholarship",
        amount: "Educational welfare subsidy",
        coverage: "Partial Aid",
        eligibility: "Financially deserving students. Children of in-service Government employees are entirely ineligible.",
        description: "Federal welfare fee allocation. FAIL PENALTY: Failing a single subject cancels all future semester payments instantly. Dual-funding is strictly banned.",
        deadline: "During academic year",
        requiresSeparateApp: true
      },
      {
        id: "pu-sch-13",
        title: "National Bank (NBP) Student Loan Scheme",
        amount: "Interest-free educational loan",
        coverage: "Student Loan",
        eligibility: "Undergraduate applicants under 21 years of age with a minimum of 70% total aggregate marks in their immediate past degree/board track.",
        description: "Interest-free loan. Requires a formal parent/guardian guarantee bond, with installment playbacks commencing exactly 6 months post-graduation or employment.",
        deadline: "Bank announcement window",
        requiresSeparateApp: true
      },
      {
        id: "pu-sch-14",
        title: "Diya Pakistan Foundation Scholarship",
        amount: "PKR 30,000 to PKR 50,000 / year",
        coverage: "Partial Aid",
        eligibility: "Financially deserving students with no failing grades on their transcripts.",
        description: "Highly active external digital fund providing fixed annual stipends based on academic consistency.",
        deadline: "As announced",
        requiresSeparateApp: true
      },
      {
        id: "pu-sch-15",
        title: "Karwan-e-Ilm Foundation Lahore",
        amount: "Varies by merit & need",
        coverage: "Partial Aid",
        eligibility: "Top-performing, highly impoverished science and professional discipline cohorts.",
        description: "Independent non-profit educational trust offering financial aid matching models to top needy students.",
        deadline: "During semester call",
        requiresSeparateApp: true
      },
      {
        id: "pu-sch-16",
        title: "FEF (Frontier Education Foundation) Scholarship",
        amount: "Varies by allocation",
        coverage: "Partial Aid",
        eligibility: "KPK domiciled students studying at PU whose total verified household income is under PKR 70,000 per month.",
        description: "Provincial foundation scholarship mapped specifically for KPK students studying in Punjab.",
        deadline: "During semester call",
        requiresSeparateApp: true
      },
      {
        id: "pu-sch-17",
        title: "PU Disable Student Fee Concession",
        amount: "100% Full Tuition Waiver",
        coverage: "Full Tuition",
        eligibility: "Physically challenged individuals pending inspection and certificate issuance by the official University Medical Board or Government Social Welfare Desk.",
        description: "Full-spectrum structural waiver covering complete baseline tuition.",
        deadline: "Open upon enrollment",
        requiresSeparateApp: false
      },
      {
        id: "pu-sch-7",
        title: "The Citizens Foundation (TCF) Alumni Support Block",
        amount: "Partial or Full Financial Bridge Grants",
        coverage: "Partial or Full Tuition",
        eligibility: "High-achieving school graduates of TCF academies who successfully secure merit admission at PU.",
        description: "Extends financial bridge grants to support higher education transitions for TCF alumni.",
        deadline: "Post-admission call",
        requiresSeparateApp: true
      }
    ],
    degreesOffered: ["Undergraduate", "Graduate", "PhD"],
    tags: ["Comprehensive", "Subsidized", "Public", "Lahore", "Tier 1"],
    requiresSeparateApp: false,
    logoText: "PU",
    logoBg: "from-rose-900 to-slate-950"
  },
  {
    id: "pak-uni-007",
    universityName: "NED University of Engineering & Technology (NEDUET)",
    location: "University Road, Karachi, Sindh, Pakistan",
    country: "Pakistan",
    flag: "🇵🇰",
    foundingYear: "1921",
    scholarshipTitle: "NED Financial Assistance, Ma'Jee & Alumni Endowments",
    ranking: "#151-175 in Petroleum Engineering (QS 2026)",
    qsSubjectRankings: "QS 2026: #151-175 Petroleum Engineering, #501-550 Electrical & Electronic Engineering, #501-550 Mechanical Engineering (QS 2026 Subject Framework)",
    rankingSource: "QS",
    coverage: "Need-cum-Merit Scholarships / Fee Adjustments",
    amountValue: "Tuition Reimbursements / Donor Slabs",
    tuitionFee: "Regular Merit: PKR 59,045 / semester (Core Engg/BS) | BS CS: PKR 64,475 / semester | TIEST: PKR 68,095 / semester",
    tuitionAmountNumeric: 425,
    hasFullRide: true,
    hasPartialAid: true,
    hasFinancialAid: true,
    financialAidType: "Need-cum-Merit",
    financialAidDetails: "Official Fee Notice: Regular Merit Base is PKR 59,045/semester (Core Engineering, Architecture & standard BS); BS Computer Science is PKR 64,475/semester; TIEST Campus is PKR 68,095/semester. Self-Finance Ledger: Regular Category requires a flat lump-sum of PKR 916,700, and Sponsor Category requires PKR 1,133,000. Mandatory Extra Fees: PKR 2,200 Architecture Studio Fee, PKR 1,800 Chemistry bench charge, and PKR 7,500/module for backlog/additional course registration. Strict dual-funding ban enforced across all financial aid pools. SFAO & CSA administer endowment and donor scholarships.",
    minGpa: "Satisfactory academic standing",
    minSat: "Accepts NED pre-admission test or SAT",
    satRequirementCategory: "Optional",
    satPolicyDetails: "Karachi Board and other-board categories. Detailed eligibility published in the 2026 Prospectus.",
    minIelts: "Exempt for Domestic Stream Applicants",
    ieltsCategory: "all",
    toeflRequirement: "Exempt for Domestic Stream Applicants",
    acceptanceRate: "Highly Competitive",
    deadline: "Fall Admissions Concluded (Registration & Logging in Progress)",
    description: "One of Pakistan's oldest and most historically significant engineering institutions, located in Karachi, with an elite, century-long technical heritage.",
    overviewLong: "NED University of Engineering & Technology is one of Pakistan's oldest and most important engineering-focused universities. The present university was established in 1977 through an Act of the Provincial Assembly of Sindh, following the upgrading of the former NED Government Engineering College. Its institutional history, however, reaches back to 1921, giving NED more than a century of engineering-education heritage. Its principal academic locations include the Main Campus, City Campus, LEJ Campus, and the Thar Institute of Engineering, Sciences & Technology (TIEST) in Tharparkar.",
    topProgramsList: [
      {
        name: "BE Petroleum Engineering",
        ranking: "#151–175 globally (QS 2026) | Top in Pakistan",
        description: "NED's strongest internationally ranked engineering discipline, focusing on drilling technology, reservoir mechanics, and energy systems."
      },
      {
        name: "BE Electrical Engineering",
        ranking: "#501–550 globally (QS 2026)",
        description: "Covers electrical systems, communications, power grid distribution, electronics-related applications, and technical design."
      },
      {
        name: "BE Mechanical Engineering",
        ranking: "#501–550 globally (QS 2026)",
        description: "Provides broad exposure to mechanical design, thermodynamics, manufacturing systems, and automotive technologies."
      },
      {
        name: "BE Civil Engineering",
        ranking: "Internationally Ranked",
        description: "Deeply connected with Pakistan's infrastructure, transportation, structural engineering, and urban development sectors."
      },
      {
        name: "BS Computer Science",
        ranking: "Highly Demanded in Karachi Industry",
        description: "Includes Computer Science, AI, Cyber Security, Data Science, and Gaming & Animation on University Road."
      }
    ],
    allScholarshipsList: [
      {
        id: "ned-sch-1",
        title: "NED Financial Assistance / Scholarship",
        amount: "Varies by assessment",
        coverage: "Partial Dues / Tuition Waivers",
        eligibility: "Undergraduate students demonstrating genuine financial need and satisfactory GPA. Fresh applications must be manually routed through respective Class Advisor using CSA Form 2026-2027.",
        description: "Targets internal endowment pools managed via individual departments. Only valid for students maintaining a satisfactory GPA and verified household constraints. Routed via Class Advisors.",
        deadline: "Late August / September",
        requiresSeparateApp: true
      },
      {
        id: "ned-sch-2",
        title: "Ma'Jee Scholarship Endowment Fund",
        amount: "Tuition coverage / Fee adjustments",
        coverage: "Full Tuition / Partial Aid",
        eligibility: "Deserving students meeting Ma'Jee endowment eligibility criteria.",
        description: "Operates as an internal fee-adjustment mechanism (not disbursed as cash). Recipients must submit unpaid university fee vouchers directly to Student Affairs desk before rigid semester processing dates, or voucher coverage is canceled.",
        deadline: "Before semester due date",
        requiresSeparateApp: true
      },
      {
        id: "ned-sch-3",
        title: "UKAA Alumni Association Scholarship",
        amount: "Full or Partial Tuition Support",
        coverage: "Full Tuition",
        eligibility: "NED undergraduate students from first through final year across all engineering disciplines.",
        description: "Managed by the University of Karachi Alumni Association (Baltimore/Washington Metro Area, USA). Open 1st to final year across all engineering disciplines. Applications must be filed digitally through external portal (ukaa-scholarships.com); physical dossiers or hand-delivered sheets are automatically rejected.",
        deadline: "End of September (Portal)",
        requiresSeparateApp: true
      },
      {
        id: "ned-sch-4",
        title: "HEC Need-Based Scholarship",
        amount: "Full Tuition + Living Stipend",
        coverage: "Full Ride",
        eligibility: "Financially deserving students with monthly family income under PKR 100,000 and clean academic record with zero warnings.",
        description: "Covers full tuition alongside active recurring living stipend. Funding issued strictly via localized cross-cheques distributed under active HEC phase calendars.",
        deadline: "Refer to HEC Phase calls",
        requiresSeparateApp: true
      },
      {
        id: "ned-sch-5",
        title: "Orange Tree Foundation (OTF) Scholarship & OTF RISE",
        amount: "Donor-funded award / Tuition coverage",
        coverage: "Partial or Full Tuition",
        eligibility: "Deserving cohorts from first through final year (RISE restricted to existing awardee renewals).",
        description: "Co-funded donor assets targeting first-to-final year cohorts. Note: The OTF RISE stream functions purely as a Renewal Program for existing awardees; freshmen cannot apply for RISE directly without an existing foundational OTF relationship.",
        deadline: "Announced in campus notices",
        requiresSeparateApp: true
      },
      {
        id: "ned-sch-6",
        title: "Prof. Abdul Azim Siddiqui Scholarship",
        amount: "Private donor commemorative cheque award",
        coverage: "Partial Aid",
        eligibility: "Eligible engineering students meeting donor academic parameters.",
        description: "Private donor-backed commemorative check award with tight timelines during peak summer windows. Mandates urgent semester transcript submission to the CSA department to track sudden GPA changes.",
        deadline: "Peak Summer Window",
        requiresSeparateApp: true
      },
      {
        id: "ned-sch-7",
        title: "NEDAASC Scholarship",
        amount: "Alumni donor-funded award",
        coverage: "Partial Aid",
        eligibility: "Senior high-performing undergraduate student categories.",
        description: "Funded explicitly by the NED Alumni Association of Southern California (NEDAASC). Reserved for senior high-performing student categories. Final year awardees must attend mandatory alignment checks and strategic feedback tracking loops with CSA focal persons.",
        deadline: "September cycle",
        requiresSeparateApp: true
      },
      {
        id: "ned-sch-8",
        title: "OCSKET Scholarship",
        amount: "External organizational award",
        coverage: "Partial Aid",
        eligibility: "Students meeting the organization's independent donor parameters.",
        description: "External localized organizational assistance fund functioning dynamically throughout the semester cycle with custom selection rounds driven by independent donor evaluations.",
        deadline: "During semester cycle",
        requiresSeparateApp: true
      },
      {
        id: "ned-sch-9",
        title: "SINDH-HEC Scholarship / Sindh Educational Endowment Fund (SEEF)",
        amount: "Government of Sindh tuition reimbursement cheques",
        coverage: "Full or Partial Tuition",
        eligibility: "Sindh-domiciled students meeting provincial endowment criteria.",
        description: "Jointly backed provincial initiative for Sindh-domiciled candidates operating on a lagging reimbursement model. Families must pay first-semester dues out-of-pocket to lock university seats, while the Sindh Endowment Board processes background documentation to clear retroactive refund cheques.",
        deadline: "Announced by Sindh Govt / CSA",
        requiresSeparateApp: true
      },
      {
        id: "ned-sch-10",
        title: "Minorities Communities Scholarship Program",
        amount: "Ministry of Religious Affairs grant",
        coverage: "Partial Aid",
        eligibility: "Poor, orphan, or disabled students belonging to minority groups. Requires minimum 50% entry exam score and verified parental income under PKR 80,000/month.",
        description: "Facilitated via the Ministry of Religious Affairs for poor, orphan, or disabled students belonging to minority communities with strict parental income cap under PKR 80,000 per month.",
        deadline: "When advertised by Ministry/CSA",
        requiresSeparateApp: true
      },
      {
        id: "ned-sch-11",
        title: "Professional Education Foundation (PEF) Scholarship",
        amount: "Tuition shortfall assistance",
        coverage: "Partial Tuition",
        eligibility: "Earmarked specifically for First-Year Engineering and Computer Science (CSIT) applicants.",
        description: "Highly sought-after tech fund earmarked specifically for First-Year Engineering and Computer Science (CSIT) applicants to cover tuition shortfalls.",
        deadline: "Early First Semester Window",
        requiresSeparateApp: true
      },
      {
        id: "ned-sch-12",
        title: "Zakat & Ushr Stipends / MORA Channels",
        amount: "Zakat welfare disbursement",
        coverage: "Tuition & Subsistence Grant",
        eligibility: "Must possess active MORA Zakat eligibility clearance certification validated by candidate's domestic union council.",
        description: "Localized social assistance loops. Requires an active MORA Zakat eligibility clearance certification validated by the candidate's domestic union council before filing.",
        deadline: "Check CSA semester notices",
        requiresSeparateApp: true
      }
    ],
    degreesOffered: ["Undergraduate", "Graduate", "PhD"],
    tags: ["Engineering", "STEM", "Public", "Karachi", "Tier 1"],
    requiresSeparateApp: false,
    logoText: "NED",
    logoBg: "from-blue-900 to-red-950"
  },
  {
    id: "pak-uni-008",
    universityName: "University of Karachi (UOK)",
    location: "University Road, Karachi, Sindh, Pakistan",
    country: "Pakistan",
    flag: "🇵🇰",
    foundingYear: "1951",
    scholarshipTitle: "UoK SFAO Baltimore Alumni & Sindh Zakat Grants",
    ranking: "#1201–1400 globally (QS 2027) | #1501+ globally (Times Higher Education THE Index)",
    qsSubjectRankings: "QS 2026: #551-600 Chemistry (#151–200 broad subject area, premier public research seat in Sindh), #601-650 Biological Sciences / Biotechnology; THE 2026: #1501+ globally",
    rankingSource: "QS",
    coverage: "Subsidized Public tuition / Student Aid",
    amountValue: "Need-based waivers / Merit stipends",
    tuitionFee: "Morning: PKR 35,000–42,000/sem (Arts/Social Sci) | PKR 76,000/sem (BSCS/AI) | PKR 86,000/sem (KUBS BBA) | PKR 223,000/sem (DPT)",
    tuitionAmountNumeric: 280,
    hasFullRide: true,
    hasPartialAid: true,
    hasFinancialAid: true,
    financialAidType: "Need-Based & Merit",
    financialAidDetails: "Official UoK Semester Fee Ledger: Morning (Subsidized Regular) Tier: PKR 35,000 to PKR 42,000/sem for standard Arts & Social Sciences, PKR 76,000/sem for Computer Science (BSCS/BSSE) & AI, PKR 86,000/sem for KUBS BBA, and PKR 223,000/sem for Doctor of Physical Therapy (DPT). Evening / Self-Finance Tier: 10% to 20% validation surcharge. Late Fee Penalty Rule: Missing fee validation target dates results in a strict 10% surcharge on the current semester and 20% on outstanding dues, plus a PKR 5,000 Re-Admission Fee if balances lapse past two full semesters. Strict dual-funding ban enforced across all SFAO scholarships.",
    minGpa: "Departmental minimums",
    minSat: "N/A (Uses own entry-test portal)",
    satRequirementCategory: "Optional",
    satPolicyDetails: "Separate morning, evening, weekend, and self-finance fee tables. Aggregate depends on program prospectus.",
    minIelts: "Exempt for Domestic Streams",
    ieltsCategory: "all",
    toeflRequirement: "Waived / Exempt for National Stream Applicants",
    acceptanceRate: "Competitive due to sheer size",
    deadline: "Morning: Oct–Nov | Evening: Nov–Dec (Entry Test: 50% cutoff)",
    description: "One of Pakistan's largest comprehensive public universities, sitting on an enormous 1,279-acre campus on University Road, Karachi, noted for prestigious scientific research output.",
    overviewLong: "The University of Karachi (UoK) is one of Pakistan's largest comprehensive public-sector universities and one of the country's most important centres for scientific, social-science and humanities research. It was established through an Act of the Pakistan Parliament in June 1951 and moved to its present University Road location in 1959. The current campus covers approximately 1,279 acres, making it one of the largest university campuses in Pakistan by land area.",
    topProgramsList: [
      {
        name: "BS Chemistry",
        ranking: "#551–600 globally (QS 2026) | Top in Pakistan",
        description: "Elite status as a premier public research seat in Sindh; standout scientific discipline benefiting from UoK's massive natural-science research facilities and laboratory funding."
      },
      {
        name: "BS Biological Sciences / Biotechnology",
        ranking: "#601–650 globally (QS 2026)",
        description: "Backed by internationally recognized research centers, focusing on plant genetics, microbiology, and vaccine research."
      },
      {
        name: "Doctor of Pharmacy (Pharm-D)",
        ranking: "Highly prestigious 5-year Professional Degree",
        description: "Offered by the dedicated Faculty of Pharmacy, preparing professionals for health, pharmaceutical, and clinical sectors."
      },
      {
        name: "BS Computer Science",
        ranking: "Highly Competitive",
        description: "Part of the broader science & technology faculty, offering software development, networking, and systems engineering."
      },
      {
        name: "BBA / Business Administration",
        ranking: "Karachi University Business School (KUBS) Accredited",
        description: "A highly affordable public alternative to premium business schools, offering top corporate management training."
      }
    ],
    allScholarshipsList: [
      {
        id: "uok-sch-1",
        title: "UKAA Baltimore Scholarship",
        amount: "Partial or single-semester tuition settlement",
        coverage: "Partial to Full Tuition Support",
        eligibility: "Eligible UoK undergraduate students demonstrating financial need.",
        description: "Funded by the University of Karachi Alumni Association, Baltimore. Active for the 2026-27 cycle. Targeted strictly at regular undergraduate morning students demonstrating deep financial need. Acts primarily as a partial or single-semester tuition settlement; recipients must submit verified grade portfolios directly to the SFAO room during short notice filing rounds.",
        deadline: "SFAO filing window",
        requiresSeparateApp: true
      },
      {
        id: "uok-sch-2",
        title: "Sindh Zakat & Ushr Need-Cum-Merit Scholarship",
        amount: "Provincial welfare assistance / Tuition adjustment",
        coverage: "Tuition Reimbursements",
        eligibility: "Eligible Muslim Sindh-domiciled students meeting Zakat and academic criteria.",
        description: "Provincial welfare assistance strictly reserved for Muslim students who are permanent residents of Sindh. Double-Step Application Gate: Requires submission of an accompanying mandatory SFAO Google Form tracking link alongside physical documents. Fee adjustment is initiated internally, and provisional admit cards are cleared for pickup at Room #4.",
        deadline: "Announced by Ministry/SFAO",
        requiresSeparateApp: true
      },
      {
        id: "uok-sch-3",
        title: "UKAHA Need-Based Financial Assistance",
        amount: "Single-semester baseline fee voucher clearance",
        coverage: "Partial Aid",
        eligibility: "Restricted exclusively to regular Morning Program students; Evening or self-finance students are legally barred from applying.",
        description: "Sponsored explicitly by the University of Karachi Alumni Association, Houston Texas, USA (UKAHA). Restricted exclusively to regular Morning Program students; Evening or self-finance students are legally barred from applying. Clears the full baseline fee voucher for one semester (e.g. Fall), requiring fresh need re-evaluation for the next block.",
        deadline: "SFAO deadline",
        requiresSeparateApp: true
      },
      {
        id: "uok-sch-4",
        title: "Sindh Education Endowment Fund (SEEF)",
        amount: "Comprehensive provincial full-ride option",
        coverage: "Full or Partial Tuition",
        eligibility: "Sindh-domiciled students satisfying current SEEF academic & financial call criteria.",
        description: "Comprehensive provincial full-ride option processed via SFAO. Mandatory Interview Hurdle: Cannot be processed purely through paper applications; fresh applicants must clear an in-person structural interview panel scheduled by the SFAO directorate before funding allocations are released to the treasury.",
        deadline: "Check active SFAO call",
        requiresSeparateApp: true
      },
      {
        id: "uok-sch-5",
        title: "HEC Need-Based Scholarship",
        amount: "Federal need-based award + recurring stipend",
        coverage: "Full Tuition / Stipend",
        eligibility: "Financially deserving students with steady academic progress and zero failing grades.",
        description: "Federal need-based award providing deep tuition waivers and recurring stipends. Retention Trap: Requires a steady academic path with zero failing grades or semester freezes. SFAO manages tracking; checks are released in phases based on federal fund clearings.",
        deadline: "Refer to SFAO deadlines",
        requiresSeparateApp: true
      },
      {
        id: "uok-sch-6",
        title: "Professional Education Foundation (PEF) Scholarship",
        amount: "Private/donor-funded financial assistance",
        coverage: "Partial or Full Tuition",
        eligibility: "Undergraduate professional categories (tech, engineering, computing) satisfying need criteria.",
        description: "Private/donor-funded financial assistance administered through UoK SFAO, targeted specifically at undergraduate professional categories (tech, engineering, computing). Demands strict proof of need combined with verified progress metrics.",
        deadline: "Refer to SFAO guidelines",
        requiresSeparateApp: true
      },
      {
        id: "uok-sch-7",
        title: "Other University / Alumni Scholarships",
        amount: "Varies by individual donor terms (e.g. Mitsubishi UFJ)",
        coverage: "Partial Aid",
        eligibility: "Undergraduate students satisfying specific donor or CSR organization criteria.",
        description: "Covers a rotating cluster of private philanthropic or corporate CSR programs (such as the prestigious Mitsubishi UFJ Foundation Scholarship), announced dynamically by Class Advisors or through localized SFAO notices throughout the academic year.",
        deadline: "During academic year",
        requiresSeparateApp: true
      },
      {
        id: "uok-sch-8",
        title: "Government Financial Assistance",
        amount: "Varies by public-sector scheme",
        coverage: "Partial or Full Tuition",
        eligibility: "Eligible Sindh-domiciled students.",
        description: "Primary general public assistance container at UoK, serving as a central clearing point connecting regional applicants with state-backed financial aid paths, Sindh government schemes, and provincial endowments.",
        deadline: "Check active-year status",
        requiresSeparateApp: true
      }
    ],
    degreesOffered: ["Undergraduate", "Graduate", "PhD"],
    tags: ["Comprehensive", "Sciences", "Public", "Karachi", "Tier 1"],
    requiresSeparateApp: false,
    logoText: "UOK",
    logoBg: "from-emerald-950 to-slate-900"
  },
  {
    id: "pak-uni-009",
    universityName: "Institute of Business Administration (IBA) Karachi",
    location: "Main Campus: University Road, Karachi, Sindh, Pakistan",
    country: "Pakistan",
    flag: "🇵🇰",
    foundingYear: "1955",
    scholarshipTitle: "IBA Need-Based Slabs, Qarz-e-Hasna & National Talent Hunt (NTHP)",
    ranking: "#251–300 in Business & Management (QS 2026) | #9 Globally in Top 30 Business Schools of Islamic Economy",
    qsSubjectRankings: "QS 2026: #251-300 Business & Management, #301-375 Economics & Econometrics, #351-400 Accounting & Finance, #=332 in QS Asia; Ranked #9 globally in Top 30 Business Schools of the Islamic Economy Index (DinarStandard & SalaamGateway)",
    rankingSource: "QS",
    coverage: "Full Ride / Partial Slabs (25% - 90%)",
    amountValue: "National Talent Hunt Program Full Ride / Need Slabs",
    tuitionFee: "PKR 31,500 / credit hour + BBA Student Activity: PKR 7,000",
    tuitionAmountNumeric: 5400,
    hasFullRide: true,
    hasPartialAid: true,
    hasFinancialAid: true,
    financialAidType: "Need-Blind / Need-Based",
    financialAidDetails: "Undergraduate base tuition is PKR 31,500/credit hour plus PKR 7,000 BBA Student Activity Fee. Exclusion Policy (Course Retakes): Financial aid strictly excludes repeated courses (for grade improvement or otherwise), previously withdrawn courses, and deficiency courses; retaking a 3-credit hour course requires paying PKR 94,500 out-of-pocket. Hostel Charges: Single occupancy is approx. PKR 121,440/semester and is not subsidized by standard internal aid. 41% of students receive aid via 25%–90% tuition slabs, Qarz-e-Hasna, Bridge Financing, and NTHP full rides. Strict double-dipping ban enforced.",
    minGpa: "Course-by-course continuation rules",
    minSat: "Accepts Common Aptitude Test, SAT, or ACT",
    satRequirementCategory: "1400",
    satPolicyDetails: "Holistic evaluation. Stated minimum: at least 65% in HSSC/equivalent for undergraduate admission.",
    minIelts: "Exempt for Domestic Stream Candidates",
    ieltsCategory: "all",
    toeflRequirement: "Waived for National Stream Applicants",
    acceptanceRate: "Highly Selective",
    deadline: "Round 1 (Spring/Early Summer) | Round 2 (Mid-Summer)",
    description: "One of South Asia's oldest and most prestigious business schools, offering premium business, economics, data science, and computing programs in Karachi.",
    overviewLong: "The Institute of Business Administration (IBA) Karachi is one of Pakistan’s most established and influential universities for business, economics, finance, computer science and quantitative disciplines. Its foundation dates to 1955, and it has developed from a specialist business institute into a broader undergraduate and graduate institution with the School of Business Studies (SBS), School of Mathematics and Computer Science (SMCS), and School of Economics and Social Sciences (SESS). IBA’s combination of business education, quantitative training and liberal-arts-oriented social sciences makes it particularly attractive for students interested in corporate careers.",
    topProgramsList: [
      {
        name: "BBA (Bachelor of Business Administration)",
        ranking: "#251–300 globally (QS 2026) | #1 in Pakistan",
        description: "IBA's legendary flagship degree, meticulously designed around management, marketing, investment finance, corporate strategy, and operations."
      },
      {
        name: "BS Computer Science",
        ranking: "Highly respected Technical Degree",
        description: "Offered by the SMCS, blending computer science theory with entrepreneurship and management exposure."
      },
      {
        name: "BS Business Analytics",
        ranking: "132-credit Quantitative Analytics Degree",
        description: "Combines business core with advanced computational data analytics, data mining, and a mandatory 6-8 week corporate internship."
      },
      {
        name: "BS Accounting & Finance",
        ranking: "#351–400 globally (QS 2026)",
        description: "Dual-focus quantitative degree, heavily aligned with global professional accounting bodies and investment tracks."
      },
      {
        name: "BS Economics & Data Science",
        ranking: "Elite Interdisciplinary Program",
        description: "Combines robust macro/microeconomics with statistical machine learning, big-data analysis, and econometric decision-making."
      }
    ],
    allScholarshipsList: [
      {
        id: "iba-sch-1",
        title: "National Talent Hunt Program (NTHP)",
        amount: "100% Full Ride (Tuition, Hostels, Mess, Books & Travel)",
        coverage: "Full Ride",
        eligibility: "High achievers with >= 80% in SSC-II/Intermediate qualify for initial round. Must pass mandatory 2-month Summer Orientation Training Program on campus and clear regular IBA entry test.",
        description: "Provides a 100% full-ride package (complete tuition, hostel accommodation, mess, textbook allowance, domestic travel). Scoring >= 80% in SSC/Intermediate qualifies students for the initial stage. Candidates must physically complete the mandatory, fully funded 2-month Summer Orientation Training Program on campus and clear the competitive regular IBA entry test to secure the final scholarship.",
        deadline: "Fall Intake / Matching Summer orientation",
        requiresSeparateApp: true
      },
      {
        id: "iba-sch-2",
        title: "IBA Need-Based Financial Assistance",
        amount: "25% to 90% Tuition Fee Coverage",
        coverage: "Partial Aid",
        eligibility: "Full-time students in morning programmes demonstrating financial need; must maintain minimum CGPA 2.50.",
        description: "Grants sliding-scale support covering 25% to 90% of tuition fees (excluding hostels). Academic Retention Trap: Students must maintain a minimum CGPA of 2.50. If CGPA drops below 2.50 after the Fall semester, financial aid is frozen for the Spring semester, placing the student on probationary status.",
        deadline: "Apply via Financial Assistance Portal",
        requiresSeparateApp: true
      },
      {
        id: "iba-sch-3",
        title: "IBA Qarz-e-Hasna",
        amount: "Interest-free loan via Ihsan Trust (Meezan Bank)",
        coverage: "Interest-Free Loan",
        eligibility: "Undergraduate students needing supplementary financing when scholarship funding is insufficient.",
        description: "Interest-free loan facility managed through corporate philanthropic foundations like Ihsan Trust (Meezan Bank). Repayments are deferred throughout the degree duration and structured into flexible monthly installments post-graduation or upon securing employment.",
        deadline: "Announced each semester",
        requiresSeparateApp: true
      },
      {
        id: "iba-sch-4",
        title: "Donor-Funded Scholarships",
        amount: "Corporate CSR packages (Infaq, Lucky Cement, etc.)",
        coverage: "Partial or Full Tuition",
        eligibility: "Undergraduate students satisfying specific donor parameters; zero-tolerance double dipping.",
        description: "IBA coordinates directly with private entities (Infaq Foundation, Lucky Cement, etc.) for corporate CSR packages. Bound tightly by the zero-tolerance Double-Dipping ban: if an external corporate donor matches a student's profile, any running internal university relief is instantly reversed.",
        deadline: "Check with Financial Assistance process",
        requiresSeparateApp: true
      },
      {
        id: "iba-sch-5",
        title: "Provincial and Federal Donor-Linked Opportunities",
        amount: "Full or Partial Tuition",
        coverage: "Full Ride",
        eligibility: "Students meeting respective HEC, PEEF, or SEEF eligibility criteria (SEEF mandates district asset validation).",
        description: "Direct institutional integration pipelines connecting students to PEEF, SEEF, and HEC state funds. Sindh-domiciled candidates applying for the Sindh Education Endowment Fund (SEEF) must pass localized district asset validation screenings before clearing registration loops.",
        deadline: "Varies by active cycle",
        requiresSeparateApp: true
      },
      {
        id: "iba-sch-6",
        title: "IBA Bridge Financing",
        amount: "Progressive internal loan / grant",
        coverage: "Temporary Grant / Loan",
        eligibility: "Students waiting for external donor scholarship decisions; mandatory application to all recommended calls.",
        description: "Unique progressive internal loan/grant system covering tuition shortfalls while external donor applications are evaluated. Mandatory Requirement: Recipients must apply for every external scholarship recommended by the IBA Financial Assistance Office; failing to file for recommended external calls triggers an immediate, permanent cancellation of bridge financing.",
        deadline: "During registration",
        requiresSeparateApp: true
      }
    ],
    degreesOffered: ["Undergraduate", "Graduate", "PhD"],
    tags: ["Business", "Finance", "Computing", "Public", "Karachi", "NTHP", "Tier 1"],
    requiresSeparateApp: false,
    logoText: "IBA",
    logoBg: "from-blue-900 to-indigo-950"
  },
  {
    id: "pak-uni-010",
    universityName: "Aga Khan University (AKU)",
    location: "Stadium Road, Karachi, Sindh, Pakistan",
    country: "Pakistan",
    flag: "🇵🇰",
    foundingYear: "1983",
    scholarshipTitle: "AKU Needs-Sensitive Financial Assistance & Challenge Grants",
    ranking: "#951–1000 globally (QS 2026) | #739 Best Global Universities (U.S. News) | #=382 in Asia",
    qsSubjectRankings: "QS Medicine: #201–250 | U.S. News: #107 Public, Environmental & Occupational Health, #247 Clinical Medicine, #572 Social Sciences & Public Health | THE Impact: #55 Globally (SDG 3)",
    rankingSource: "QS & U.S. News",
    coverage: "Needs-Blind admissions with substantial need assistance",
    amountValue: "Needs-Sensitive Grants & Interest-Free Study Loans",
    tuitionFee: "FAS Bachelor of Studies: PKR 2,124,000 / year + PKR 99,000 admission fee | MBBS & Nursing specific schedules apply",
    tuitionAmountNumeric: 7600,
    hasFullRide: true,
    hasPartialAid: true,
    hasFinancialAid: true,
    financialAidType: "Need-Blind / Need-Sensitive",
    financialAidDetails: "AKU enforces an absolute Needs-Blind Admission policy where financial standing plays zero role in acceptance evaluations. Approx. 50% of students receive aid, delivered as a combination of a non-repayable Grant-in-Aid and an interest-free Student Loan. The loan portion carries a fixed 5% annual administrative charge repayable in flexible installments 1–2 years post-graduation. Fresh evaluation dossiers must be submitted annually before the last working day of February (zero late exceptions). Strict dual-funding ban enforced.",
    minGpa: "Outstanding academic evaluation",
    minSat: "FAS BS accepts SAT-I in lieu of Accuplacer (Min 600 Math, 600 EBRW)",
    satRequirementCategory: "1300",
    satPolicyDetails: "FAS Bachelor of Studies uses a two-stage admission process: Stage 1 (Accuplacer/SAT-I) and Stage 2 (AKU test + two independent interviews). No specific subject requirements.",
    minIelts: "Exempt for National Stream Applicants",
    ieltsCategory: "all",
    toeflRequirement: "Waived / Exempt for National Stream Applicants",
    acceptanceRate: "Highly Selective",
    deadline: "MBBS & BScN: March 08 – May 13 | FAS BS: Dec 10 (Early Bird) & Jan 12 (Regular)",
    description: "AKU is a world-class private international medical and research-first university, widely regarded as the most elite institution for healthcare and medical training in Pakistan.",
    overviewLong: "Aga Khan University (AKU) is a private, international university with a particularly strong institutional presence in Pakistan in medicine, nursing and midwifery, education and health-related research. Founded in 1983, AKU has developed an international academic network spanning Pakistan, East Africa and the United Kingdom. In Pakistan, its principal academic and clinical operations are concentrated in Karachi, particularly around the Stadium Road campus and the associated Aga Khan University Hospital. It is noted for its highly elite, holistic Faculty of Arts and Sciences (FAS) BS offering Asian and Middle Eastern Studies, Environmental Studies, Philosophy Politics and Economics, and Social Development Studies.",
    topProgramsList: [
      {
        name: "MBBS (Bachelor of Medicine, Bachelor of Surgery)",
        ranking: "#201–250 QS Medicine | #247 U.S. News Clinical Medicine",
        description: "The absolute crown jewel of medical education in Pakistan, deeply integrated with the world-renowned AKU Hospital Karachi clinical facilities."
      },
      {
        name: "Bachelor of Science in Nursing (BScN)",
        ranking: "Top Professional Tiering in South Asia & East Africa",
        description: "Offered by the School of Nursing and Midwifery (SONAM), providing elite international clinical exposure, healthcare ethics, and research."
      },
      {
        name: "BS Public, Environmental and Occupational Health",
        ranking: "#107 Globally (U.S. News Global Subject Index)",
        description: "Elite global ranking placement at #107 worldwide, offering cutting-edge epidemiological and global health research training."
      },
      {
        name: "BS Social Sciences and Public Health",
        ranking: "#572 Globally (U.S. News Global Subject Index)",
        description: "Interdisciplinary integration of population health, behavioral science, biostatistics, and social healthcare policy."
      },
      {
        name: "Faculty of Arts & Sciences (FAS) Interdisciplinary Humanities (PPE, SDS)",
        ranking: "Newly Established Elite Undergraduate Stream",
        description: "Holistic liberal arts curriculum combining Philosophy, Politics & Economics (PPE) and Social Development Studies (SDS) with global faculty."
      }
    ],
    allScholarshipsList: [
      {
        id: "aku-sch-1",
        title: "AKU Needs-Sensitive Financial Assistance",
        amount: "Non-repayable Grant-in-Aid + Student Loan with 5% Admin Charge",
        coverage: "Full Tuition / Partial Aid",
        eligibility: "Admitted national applicants with documented socio-economic vulnerabilities (Needs-Blind Admissions). Must re-apply annually by last working day of February.",
        description: "Approximately 50% of the student body receives this aid package. It is carefully split into a dynamic combination of a non-repayable Grant-in-Aid and an interest-free Student Loan. The student loan carries a fixed 5% annual administrative charge. Principal and accrued 5% fee become repayable via flexible installments 1 to 2 years post-graduation. Fresh dossier required annually before last working day of Feb (zero late exceptions).",
        deadline: "Last working day of February (Annual)",
        requiresSeparateApp: true
      },
      {
        id: "aku-sch-2",
        title: "AKU Challenge Programme",
        amount: "Fully Funded 10-Day Residential Academic Camp (July 12–22)",
        coverage: "Full Ride",
        eligibility: "Top-tier, high-achieving high school students across Pakistan. Participation does not guarantee degree admission.",
        description: "A fully funded, prestigious 10-day residential academic enrichment camp running on campus from July 12 to July 22 covering all tuition, excursions, meals, and hostel boarding. Open strictly to high-achieving students across Pakistan. Note: Participation does not guarantee degree admission; admitted campers must still clear the regular competitive AKU Entrance Exams and interviews.",
        deadline: "Early Summer Application Call",
        requiresSeparateApp: true
      },
      {
        id: "aku-sch-3",
        title: "FAS Special Financial Assistance",
        amount: "Full or Partial Tuition Grants",
        coverage: "Full Tuition / Partial Aid",
        eligibility: "Restricted to students from non-traditional, first-generation, or heavily underrepresented rural regions (Balochistan, Gilgit-Baltistan, rural Sindh).",
        description: "Specialized full or partial tuition grants funded internally by the university to foster class diversity from marginalized and rural geographical zones. Filed online strictly during the active FAS admission portal cycle.",
        deadline: "During FAS admission cycle",
        requiresSeparateApp: true
      },
      {
        id: "aku-sch-4",
        title: "FAS Financial Assistance",
        amount: "General Undergraduate Need-Based Scholarships",
        coverage: "Partial or Full Tuition",
        eligibility: "Admitted national applicants demonstrating documented socio-economic vulnerabilities in FAS Bachelor of Studies cohorts.",
        description: "General undergraduate need-based scholarship pool explicitly tailored for FAS Bachelor of Studies cohorts. Retention Condition: Not automatically renewable. Requires the student to maintain satisfactory academic performance with zero failing grades or academic probation warnings during annual re-evaluations.",
        deadline: "During FAS admission cycle",
        requiresSeparateApp: true
      },
      {
        id: "aku-sch-5",
        title: "External / Donor Assistance",
        amount: "Direct Institutional Philanthropic Matching",
        coverage: "Partial or Full Tuition",
        eligibility: "Admitted students matching donor criteria; zero double-dipping allowed.",
        description: "Direct institutional matching channel connecting qualified students with independent private philanthropists or external corporate CSR funds. If an external agency accepts full financial sponsorship, AKU dynamically reduces its internal grant-to-loan ratios to redirect university funds to alternative applicants.",
        deadline: "Monitored dynamically by SFAO throughout semester",
        requiresSeparateApp: true
      }
    ],
    degreesOffered: ["Undergraduate", "Graduate", "PhD"],
    tags: ["Medicine", "Healthcare", "Private", "Karachi", "FAS", "Tier 1"],
    requiresSeparateApp: false,
    logoText: "AKU",
    logoBg: "from-blue-900 to-indigo-950"
  },
  {
    id: "pak-uni-011",
    universityName: "Pakistan Institute of Engineering and Applied Sciences (PIEAS)",
    location: "Lehtrar Road, Nilore, Islamabad, Pakistan",
    country: "Pakistan",
    flag: "🇵🇰",
    foundingYear: "1967",
    scholarshipTitle: "PIEAS Need-Based Slabs, Qarz-e-Hasna & ESF Grants",
    ranking: "#=560 globally (QS World University Rankings) | #3 in Pakistan | Top National Research Citation Density",
    qsSubjectRankings: "QS World Rankings: #=560 globally (3rd in Pakistan) | QS Engineering & Technology: #501–550 global band | HEC #1 in National Research Citation Density",
    rankingSource: "QS",
    coverage: "Subsidized Public tuition / Need & Fellowship grants",
    amountValue: "25% to 100% Tuition waivers / PKR 10,000 / month Fellowships",
    tuitionFee: "1st Semester Entry: PKR 115,000–130,000 | Subsequent Semesters: PKR 75,000–85,000 / semester | Hostels: PKR 25,000–30,000 / semester",
    tuitionAmountNumeric: 500,
    hasFullRide: true,
    hasPartialAid: true,
    hasFinancialAid: true,
    financialAidType: "Need-Based & Fellowships",
    financialAidDetails: "PIEAS reserves 25% of all student fee collections directly for its need-based scholarship/Qarz-e-Hasna programme. Freshmen must pay the initial admission invoice out-of-pocket; applications are submitted within the first 3 weeks of Fall for retroactive refunds/adjustments. Minimum 2.67 CGPA retention hurdle. Strict dual-funding ban (double-dipping) is enforced.",
    minGpa: "2.67 GPA (Continuation requirement)",
    minSat: "N/A (Highly entrance test-oriented)",
    satRequirementCategory: "Optional",
    satPolicyDetails: "Admission cycle opens Feb 8. Written tests held in major cities on April 12 and July 12. Highly competitive merit rankings published through Sept 1.",
    minIelts: "Exempt for Domestic Stream Candidates",
    ieltsCategory: "all",
    toeflRequirement: "Waived / Exempt for National Stream Applicants",
    acceptanceRate: "Highly Selective",
    deadline: "Admissions Open: Feb 08 | Test 1: April 12 | Test 2: July 12 | Orientation: Early Sept",
    description: "PIEAS is a specialized public research university connection to Pakistan's nuclear and scientific-development infrastructure, leading in advanced physics, materials, and engineering.",
    overviewLong: "The Pakistan Institute of Engineering and Applied Sciences (PIEAS) is a public-sector university in Nilore, Islamabad, specializing in engineering, applied sciences, nuclear technology, computing and advanced scientific research. Its institutional roots are closely connected with Pakistan's nuclear and scientific-development infrastructure, and its academic environment remains considerably more research-oriented and specialized than that of a typical comprehensive Pakistani university. It operates a single, principal residential academic campus outside central Islamabad.",
    topProgramsList: [
      {
        name: "BS Computer & Information Sciences",
        ranking: "Top Computing Program in Pakistan",
        description: "Highly competitive, research-intensive computer science program within an elite STEM research environment."
      },
      {
        name: "BS Electrical Engineering",
        ranking: "PEC Accredited (Washington Accord OBE Standards)",
        description: "Emphasizes electronics, power engineering, microprocessors, automation control, and semiconductor hardware design under Washington Accord standards."
      },
      {
        name: "BS Mechanical Engineering",
        ranking: "PEC Accredited (Category-RE Professional Status)",
        description: "Holds Category-RE valid professional status with the Pakistan Engineering Council (PEC), covering thermodynamics, fluid mechanics, and materials."
      },
      {
        name: "BS Chemical Engineering",
        ranking: "PEC Accredited (Materials & Process Systems)",
        description: "Combines engineering principles with chemical synthesis, industrial processing, materials engineering, and thermodynamics."
      },
      {
        name: "BS Physics",
        ranking: "Leading National Research Discipline",
        description: "A premier scientific discipline deeply integrated with national R&D institutions, nuclear physics, and applied mechanics laboratories."
      }
    ],
    allScholarshipsList: [
      {
        id: "pieas-sch-1",
        title: "PIEAS Need-Based Scholarship / Qarz-e-Hasna",
        amount: "25% to 100% Tuition Fee waiver",
        coverage: "Full Tuition / Partial Aid",
        eligibility: "Admitted BS or MS students with proven financial need. Minimum 2.67 CGPA to continue.",
        description: "Grants sliding-scale tuition waivers covering 25% to 100% of semester tuition fees. Workflow Rule: Applications must be submitted directly to the Financial Aid Office strictly within the first three weeks of Fall semester. Students must pay the initial admission invoice out-of-pocket; refunds/credits are adjusted later. Minimum CGPA of 2.67 required to continue.",
        deadline: "First 3 weeks of Fall semester",
        requiresSeparateApp: true
      },
      {
        id: "pieas-sch-2",
        title: "R&D / Public-Sector Fellowships",
        amount: "100% Tuition waiver + Free Hostels + Monthly Stipend",
        coverage: "Full Ride + Stipend + Job Guarantee",
        eligibility: "Selected BS/MS students (primarily MS cadres). Mandatory 5-Year Legal Service Bond to sponsoring body.",
        description: "Highly competitive full-ride fellowship primarily targeting MS engineering cadres, providing 100% tuition waivers, free on-campus hostel housing, and a continuous monthly stipend. Mandatory 5-Year Legal Service Bond: Awardees must sign a legally binding contract to serve the sponsoring public-sector organization (e.g. PAEC) for a fixed minimum period of 5 years post-graduation. Early breach triggers severe financial recovery lawsuits.",
        deadline: "Announced during studies",
        requiresSeparateApp: true
      },
      {
        id: "pieas-sch-3",
        title: "Ehsaas / Benazir Undergraduate Scholarship",
        amount: "100% Tuition + PKR 4,000 / month Stipend",
        coverage: "Full Ride",
        eligibility: "Low-income students satisfying HEC/government criteria across all four provinces, AJK, and Gilgit-Baltistan.",
        description: "Covers 100% of the tuition fee alongside a continuous recurring living stipend of PKR 4,000 per month. Applications must be routed digitally through the HEC Online Application Portal with physical dossiers submitted to the PIEAS office.",
        deadline: "Announced by HEC",
        requiresSeparateApp: true
      },
      {
        id: "pieas-sch-4",
        title: "Rizvee-Kidwai Scholarship for Computer Science",
        amount: "Full Tuition & Misc fees for 4 years (8 semesters)",
        coverage: "Full Tuition",
        eligibility: "Needy and meritorious BS Computer & Information Sciences students. Minimum 2.67 CGPA.",
        description: "Dedicated private donor-funded endowment managed through the university, reserved exclusively for needy and meritorious BS Computer & Information Sciences students. Covers full tuition and miscellaneous university charges for 4 years (8 regular semesters). Explicitly does not cover hostel accommodation or mess charges. Must maintain a minimum 2.67 CGPA.",
        deadline: "Apply upon admission",
        requiresSeparateApp: true
      },
      {
        id: "pieas-sch-5",
        title: "PIEAS Education Support Fund (ESF)",
        amount: "Hostel fee waiver, living expense support, and Qarz-e-Hasna",
        coverage: "Full Ride / Support",
        eligibility: "Admitted BS and MS students meeting need-based parameters, evaluated by central committee.",
        description: "Direct institutional aid backed entirely by voluntary financial contributions from faculty, staff, alumni, and senior students. Provides hostel fee waivers, living expense support, and interest-free Qarz-e-Hasna loops to supplement standard aid gaps. Applications are processed and evaluated simultaneously with regular PIEAS Need-Based applications.",
        deadline: "Processed with need-based applications",
        requiresSeparateApp: true
      },
      {
        id: "pieas-sch-6",
        title: "Punjab Educational Endowment Fund (PEEF)",
        amount: "Full or Partial Tuition / Danish School 100% Full Ride",
        coverage: "Full or Partial Tuition",
        eligibility: "Undergraduate and graduate students meeting PEEF criteria; special Danish School full-ride clause.",
        description: "Provincial full or partial tuition fee waiver. Special Danish School Clause: PIEAS holds a specialized legal agreement with PEEF where students admitting from Danish Schools receive a complete full ride (PEEF provides PKR 136,500/year and PIEAS issues an accompanying 100% tuition waiver to make the entire educational track completely free, including tuition, academic, and hostel charges).",
        deadline: "Check active PEEF cycle",
        requiresSeparateApp: true
      },
      {
        id: "pieas-sch-7",
        title: "USAID Merit & Needs-Based Scholarship",
        amount: "Cycle Concluded / Currently Inactive",
        coverage: "Archived Program",
        eligibility: "Program concluded (Historical awardees only).",
        description: "CRITICAL STATUS WARNING: Official HEC registers confirm the broad-spectrum national USAID-Funded Merit and Need-Based Scholarship Phase has officially concluded its active open application rollouts. Currently inactive for new applicant intakes.",
        deadline: "Cycle Concluded / Inactive",
        requiresSeparateApp: true
      }
    ],
    degreesOffered: ["Undergraduate", "Graduate", "PhD"],
    tags: ["STEM", "Physics", "Nuclear", "Public", "Islamabad", "Tier 1"],
    requiresSeparateApp: false,
    logoText: "PIEA",
    logoBg: "from-blue-950 to-slate-900"
  },
  {
    id: "pak-uni-012",
    universityName: "Ghulam Ishaq Khan Institute (GIKI)",
    location: "Topi, Swabi, Khyber Pakhtunkhwa, Pakistan",
    country: "Pakistan",
    flag: "🇵🇰",
    foundingYear: "1993",
    scholarshipTitle: "GIKI Financial Assistance Loan & CM KP Scholarships",
    ranking: "QS Asia 2026: #260 in Asia | THE 2026: 801–1000 | #11 in Pakistan | #1 in KP",
    qsSubjectRankings: "QS Subject Rankings 2026: #401-450 Engineering & Technology (#401-450 Mechanical, #451-500 Electrical, #401-550 Materials); THE 2026: #601-800 Computer Science",
    rankingSource: "QS & THE",
    coverage: "Full Ride / Partial Tuition / Interest-Free Study Loans",
    amountValue: "100% Ride for Toppers (Top 18 Engg, Top 2 BSMS) / 25%-100% Need Loans",
    tuitionFee: "PKR 407,500/semester (Engineering, AI & CS) | PKR 360,000/semester (BSMS) + ~PKR 25,000/month Mess",
    tuitionAmountNumeric: 6000,
    hasFullRide: true,
    hasPartialAid: true,
    hasFinancialAid: true,
    financialAidType: "Need-Based, Merit & Interest-Free Loans",
    financialAidDetails: "Mandatory fixed tuition: PKR 407,500/sem (Engineering, AI, CS) and PKR 360,000/sem (BSMS). Day 1 onboarding: PKR 62,500 admission fee + PKR 25,000 security deposit (~PKR 500,000 upfront total). Strictly 100% residential campus with zero day-scholars; room allocation included in tuition, but campus mess bill averages PKR 24,000–PKR 26,000/month plus PKR 8,000 mess security. Financial aid includes Toppers Merit (top 18 Engg, top 2 BSMS: 100% full ride), Interest-Free Loans (25%–100% tuition, PKR 1,000 fee, guarantor bond), PEEF (10 seats, PKR 500k/yr), CM KP Endowment (3.00 CGPA), GIKI Need-Based (2.67 CGPA), Alumni Scholarships (2nd year onwards only, CGPA >= 2.50), and Corporate Sponsors (HBL, Ihsan Trust, Lucky Cement, Abdullah Foundation, ICI Pakistan). Strict double-dipping ban enforced.",
    minGpa: "Satisfactory academic progress (2.67 for need-based, 3.00 for KP CM, 2.50 for Alumni)",
    minSat: "Accepts GIKI written entry test (85% aggregate weight)",
    satRequirementCategory: "Optional",
    satPolicyDetails: "GIKI Entry Test (CBT) held July 06–10 across nationwide centers holds 85% merit aggregate weight (past FSc/A-Levels: 15%). Online registration closes June 15, 2026; financial aid paperwork hard deadline is June 20, 2026. Strictly 100% residential with zero donation or quota seats.",
    minIelts: "Exempt for Domestic Candidates",
    ieltsCategory: "all",
    toeflRequirement: "Waived for National Stream Applicants",
    acceptanceRate: "Highly Selective",
    deadline: "Registration Deadline: June 15, 2026 | Financial Aid: June 20, 2026 | CBT: July 06–10",
    description: "GIKI is a premier private residential university in Topi, KP, famous for its rigorous, international-standard engineering and technology education.",
    overviewLong: "The Ghulam Ishaq Khan Institute of Engineering Sciences and Technology (GIKI) is a private, residential, technology-focused university located in Topi, Khyber Pakhtunkhwa. Founded through the GIK Institute's ordinance in 1993, it was established with the objective of bringing engineering education in Pakistan closer to international standards. The institute's campus covers approximately 216 acres, and the university remains one of Pakistan's most prominent private institutions for engineering, computing and technology.",
    topProgramsList: [
      {
        name: "BS Computer Science",
        ranking: "#601–800 globally (THE 2026) | #751–850 (QS 2025) | Top in Pakistan",
        description: "GIKI's premier computing degree, surging to the #601–800 global band in THE World University Rankings 2026 for Computer Science with high-caliber software engineering and AI outcomes."
      },
      {
        name: "BS Artificial Intelligence",
        ranking: "Highly modern, competitive curriculum",
        description: "Backed by state-of-the-art specialized computing hardware labs, emphasizing machine learning, computer vision, deep learning, NLP, and intelligent robotics."
      },
      {
        name: "BS Mechanical Engineering",
        ranking: "#401–450 globally (QS 2026) | #1 Private in Pakistan",
        description: "GIKI's flagship engineering program, ranked #401–450 globally in QS Subject Rankings and #1 among private institutions in Pakistan."
      },
      {
        name: "BS Electrical Engineering",
        ranking: "#451–500 globally (QS 2026)",
        description: "Ranked #451–500 in QS Subject Rankings, covering electrical grids, VLSI, microprocessors, smart communication grids, and signal processing."
      },
      {
        name: "BS Data Science",
        ranking: "Leading interdisciplinary analytics",
        description: "Leading computational track combining robust programming, statistical data modeling, big data visualization, and predictive machine learning models."
      }
    ],
    allScholarshipsList: [
      {
        id: "giki-sch-1",
        title: "GIKI Admission Toppers Merit Scholarship",
        amount: "100% Full Tuition & Academic Fee Ride",
        coverage: "Full Ride",
        eligibility: "Automatically restricted strictly to the top 18 positions on the nationwide engineering written entry exam merit list, and the top 2 positions for the Management Sciences list.",
        description: "Provides a 100% full tuition & academic fee ride for the top 18 engineering and top 2 management sciences toppers on the GIKI written entry test merit list. No separate application form is required; awarded automatically based on entrance test results.",
        deadline: "Awarded automatically upon test merit list",
        requiresSeparateApp: false
      },
      {
        id: "giki-sch-2",
        title: "GIKI Financial Assistance / Interest-Free Loan",
        amount: "25% to 100% Sliding Scale Tuition Loan / Aid",
        coverage: "Interest-Free Loan / Aid",
        eligibility: "Undergraduate applicants demonstrating verified financial need through GIKI panel reviews.",
        description: "Sliding-scale financial support matching 25% to 100% of semester tuition. Candidates must include an added PKR 1,000 Financial Assistance Processing Fee during their initial admission challan payment. Functions as an institutional interest-free loan requiring execution of an indemnity bond with a tax-paying credit guarantor, with structured repayments starting exactly 1 year post-graduation across 6-monthly installments.",
        deadline: "June 20, 2026 (Financial aid docs hard deadline)",
        requiresSeparateApp: true
      },
      {
        id: "giki-sch-3",
        title: "Chief Minister KP / Provincial Government Endowment Scholarship",
        amount: "Full or Partial Provincial Tuition Grant",
        coverage: "Full Tuition / Partial Aid",
        eligibility: "Financially needy candidates holding authentic Khyber Pakhtunkhwa (KPK) Domiciles.",
        description: "Dedicated provincial government scholarship support prioritizing deserving KP-domiciled scholars. Requires maintaining a steady 3.00 CGPA across all semesters to preserve funding continuation.",
        deadline: "June 20, 2026",
        requiresSeparateApp: true
      },
      {
        id: "giki-sch-4",
        title: "GIKI Need-Based Scholarships",
        amount: "Partial to Full Tuition Waivers (Internal 10%–20% Pool)",
        coverage: "Full or Partial Tuition",
        eligibility: "Financially deserving students meeting GIKI need assessment benchmarks.",
        description: "Internal need-cum-merit assistance allocation pool funded by GIKI's central operational revenues (allocates roughly 10% to 20% of revenue to waivers). Requires preserving an academic standing clean of warnings with a minimum CGPA of 2.67 to continue the waiver.",
        deadline: "Submit with admission application (June 15 / Docs: June 20, 2026)",
        requiresSeparateApp: true
      },
      {
        id: "giki-sch-5",
        title: "Punjab Educational Endowment Fund (PEEF) Scholarship",
        amount: "PKR 500,000 / Year Fixed Package Valuation",
        coverage: "Partial Aid",
        eligibility: "Restricted to exactly 10 total seats per batch. Candidates must hold a valid Punjab Domicile, have scored at least 60% aggregate marks in their immediate past Intermediate Annual Exam, and gained admission into GIKI within the same calendar year.",
        description: "Dedicated provincial grant allocating a fixed package valuation of PKR 500,000 per year directly to selected recipients across 10 capped seats.",
        deadline: "Submit during admission verification cycle",
        requiresSeparateApp: true
      },
      {
        id: "giki-sch-6",
        title: "FATA / Merged Tribal Districts Scholarships",
        amount: "Full or Partial HEC Tuition & Living Support",
        coverage: "Full or Partial Tuition",
        eligibility: "Restricted strictly to students originating from former FATA and merged tribal districts meeting rigid localized HEC quota distributions.",
        description: "Federal and HEC regional government support allocation pools processed during the admission verification matrix for qualifying students from newly merged tribal districts.",
        deadline: "Apply during admissions cycle",
        requiresSeparateApp: true
      },
      {
        id: "giki-sch-7",
        title: "GIKI Central Institutional Endowment Fund Scholarships",
        amount: "Substantial Tuition Waivers & Merit Grants",
        coverage: "Partial Aid",
        eligibility: "Financially disadvantaged students admitted on merit meeting institutional endowment board benchmarks.",
        description: "Private general institutional endowment fund providing sustained philanthropic support and tuition relief to deserving scholars across engineering and computing disciplines.",
        deadline: "June 20, 2026",
        requiresSeparateApp: true
      },
      {
        id: "giki-sch-8",
        title: "GIKI Alumni Association Scholarships",
        amount: "Merit-Need Financial Relief Grants",
        coverage: "Partial Aid",
        eligibility: "DISQUALIFIED FOR FRESHMEN. Strictly NOT offered to 1st and 2nd semester freshmen; undergraduate candidates can only apply starting from their second (2nd) year onwards. Requires a verified minimum CGPA of 2.50 or above.",
        description: "Financial relief funded directly via the central GIKI Alumni Association network and regional chapters. Applications open strictly to enrolled sophomores, juniors, and seniors maintaining at least a 2.50 CGPA.",
        deadline: "Announced by Alumni Office at start of 2nd year",
        requiresSeparateApp: true
      },
      {
        id: "giki-sch-9",
        title: "Corporate & External Donor Scholarships",
        amount: "Corporate Sponsorship & Interest-Free Qarz-e-Hasna",
        coverage: "Merit/Need Grant",
        eligibility: "Enrolled students satisfying specific corporate or donor-defined criteria.",
        description: "Active live corporate partners and external trusts processing checks for GIKI undergraduate cohorts: Habib Bank Limited (HBL), ICI Pakistan, Lucky Cement, Abdullah Foundation, and Ihsan Trust (Meezan Bank interest-free Qarz-e-Hasna).",
        deadline: "As announced by donor cycles throughout academic year",
        requiresSeparateApp: true
      }
    ],
    degreesOffered: ["Undergraduate", "Graduate", "PhD"],
    tags: ["Engineering", "STEM", "Private", "Topi", "Residential", "Tier 1"],
    requiresSeparateApp: false,
    logoText: "GIKI",
    logoBg: "from-blue-900 to-indigo-950"
  },
  {
    id: "pak-uni-013",
    universityName: "University of Engineering and Technology (UET) Lahore",
    location: "Lahore, Punjab, Pakistan",
    country: "Pakistan",
    flag: "🇵🇰",
    foundingYear: "1921",
    scholarshipTitle: "UET Lahore Merit & Subsidized Need Scholarships",
    ranking: "QS World: #791–800 | #201 in Engineering & Technology",
    qsSubjectRankings: "QS Subject Rankings 2026: #201 Engineering & Technology (#51-100 Petroleum Engineering [#1 in Pakistan], #201-250 Electrical Engineering, #201-250 Mechanical Engineering, #201-275 Civil Engineering [First-time entrant], #351-400 Computer Science)",
    rankingSource: "QS",
    coverage: "Highly Subsidized Tuition & Extensive Merit Slabs",
    amountValue: "10,508 Scholarships worth PKR 1.45 Billion Distributed",
    tuitionFee: "Subsidized Day 1: PKR 119,034 | Partially Subsidized Day 1: PKR 168,082 | Regular Sem Tuition: PKR 56,290 (A1) / PKR 85,250 (A2)",
    tuitionAmountNumeric: 400,
    hasFullRide: true,
    hasPartialAid: true,
    hasFinancialAid: true,
    financialAidType: "Need & Merit Based",
    financialAidDetails: "UET Lahore boasts massive scholarship volumes, having provided 10,508 scholarships worth PKR 1.45 billion in FY2025-26 alone. This encompasses university merit awards, HEC need-based grants, PEEF, provincial programs, and private donor or alumni schemes.",
    minGpa: "Top positions in intermediate/exams",
    minSat: "Accepts ECAT or accepted equivalent (33% merit weight)",
    satRequirementCategory: "Optional",
    satPolicyDetails: "Minimum 50% aggregate required for admission. Entry test (ECAT) accounts for 33% of the merit weight (split with 50% F.Sc and 17% Matric). English language testing (IELTS/TOEFL) is completely waived/exempt for domestic applicants.",
    minIelts: "Exempt for National Applicants",
    toeflRequirement: "Waived for Domestic Applicants",
    ieltsCategory: "all",
    acceptanceRate: "Highly Competitive",
    deadline: "Leftover Seats Active (Core closed July 15)",
    description: "One of Pakistan's oldest and most prestigious engineering public research universities, with extensive subject rankings and massive scholarship funding volumes.",
    overviewLong: "The University of Engineering and Technology (UET) Lahore is one of Pakistan's principal public-sector engineering universities and one of the strongest options in the country for students pursuing engineering, computing and technology. Its institutional history extends for more than a century, while the modern university structure dates to its development as a university-level engineering institution. Today, UET has expanded from its traditional engineering base into computer science, business, architecture, natural sciences and other technology-related disciplines.",
    topProgramsList: [
      {
        name: "BS Petroleum Engineering",
        ranking: "#51–100 globally (QS 2026) | #1 in Pakistan",
        description: "Standout internationally ranked program, deeply connected to Pakistan's energy sector."
      },
      {
        name: "BS Electrical Engineering",
        ranking: "#201–250 globally (QS 2026)",
        description: "Covers electrical systems, electronics, telecommunications, automation control, and renewable energy."
      },
      {
        name: "BS Mechanical Engineering",
        ranking: "#201–250 globally (QS 2026)",
        description: "Highly rigorous program in design mechanics, thermal power, manufacturing, and advanced computational fluid dynamics."
      },
      {
        name: "BS Civil Engineering",
        ranking: "#201–275 globally (QS 2026) (First-time entrant)",
        description: "Excells in structural architecture, transport planning, hydraulics, and seismic analysis."
      },
      {
        name: "BS Computer Science",
        ranking: "#351–400 globally (QS 2026)",
        description: "Growing software and computing discipline, highly sought after in the Lahore technology sector."
      }
    ],
    allScholarshipsList: [
      {
        id: "uetl-sch-1",
        title: "UET Merit Scholarships / Merit-Based Awards",
        amount: "Partial Tuition Credit",
        coverage: "Partial Tuition",
        eligibility: "Top batch rankers across departments; strictly requires a clean sheet with zero failing major courses.",
        description: "Monitored dynamically across academic departments using rolling semester GPA trackers. Awards act purely as partial tuition credits applied onto successive semester vouchers based on current batch ranking lists.",
        deadline: "Apply upon registration",
        requiresSeparateApp: false
      },
      {
        id: "uetl-sch-2",
        title: "HEC Need-Based Scholarship",
        amount: "Full Tuition + Federal Monthly Stipend",
        coverage: "Full Ride",
        eligibility: "Financially needy students on open merit. Candidates entering via any Self-Finance, Part-Time, or Evening stream are completely disqualified.",
        description: "Offers comprehensive full-tuition coverage accompanied by a fixed federal monthly stipend. Restricted strictly to standard open merit admissions (managed by UET FA&CS Directorate).",
        deadline: "Announced post-admission",
        requiresSeparateApp: true
      },
      {
        id: "uet-sch-3",
        title: "UET Need-Based Scholarships",
        amount: "Tuition Assistance Grant",
        coverage: "Partial Aid",
        eligibility: "Financially deserving students submitting fully verified family financial profiles within the first month of enrollment.",
        description: "Sourced internally from UET's central student support revenues, which distributed funding worth PKR 1.45 Billion directly to 10,508 students on campus in recent financial audit cycles.",
        deadline: "Refer to financial-aid office",
        requiresSeparateApp: true
      },
      {
        id: "uet-sch-4",
        title: "Punjab Educational Endowment Fund (PEEF) Scholarship",
        amount: "Provincial Need-Based Stipend",
        coverage: "Partial Aid",
        eligibility: "Must pass three rigid external gates: 1) Authentic Punjab Domicile, 2) Household verified monthly income ≤ PKR 60,000, 3) Scored at least 60% total marks in immediate past intermediate exam.",
        description: "Provincial need-based funding block requiring a separate specialized application dossier processed via the UET Financial Aid & Career Services (FA&CS) Directorate.",
        deadline: "When relevant call is active",
        requiresSeparateApp: true
      },
      {
        id: "uet-sch-5",
        title: "Chief Minister Punjab Honhaar Scholarship Program",
        amount: "100% Full Tuition Coverage",
        coverage: "Full Ride / Merit",
        eligibility: "Punjab domicile with monthly family income strictly below PKR 300,000 (Affidavit on E-Stamp Required). Minimum 70% total aggregate score for Sciences or designated engineering entry lists. Must maintain min 2.50 GPA per semester and 3.00 CGPA overall.",
        description: "Flagship provincial scholarship replacing generic schemes. Features strict income ceiling (<PKR 300,000/mo) and rigorous academic retention floor (2.50 semester GPA / 3.00 CGPA).",
        deadline: "When schemes are active",
        requiresSeparateApp: true
      },
      {
        id: "uet-sch-6",
        title: "Donor & Alumni Scholarships",
        amount: "Varies by Foundation (Tuition & Living Grants)",
        coverage: "Merit/Need Grant",
        eligibility: "Undergraduate engineering students selected by external foundation panels.",
        description: "Hardcoded operational donor registries releasing scholarship funds for UET cohorts: The Diya Pakistan Foundation, REAP Alumni Network, Professional Education Foundation (PEF), Pakistan Engineering Congress (PEC) Foundation, and Infaq Foundation.",
        deadline: "Check active donor timeline",
        requiresSeparateApp: true
      },
      {
        id: "uet-sch-7",
        title: "Pakistan Bait-ul-Mal / External Support",
        amount: "Direct Educational Welfare Grant",
        coverage: "Partial Aid",
        eligibility: "Needy students not having parents/guardians as regular government employees. Cancelled permanently if student receives academic warning or repeats an engineering lab module.",
        description: "Public welfare educational aid grants routed via local district networks. Enforces strict Government Servant Ban and immediate cancellation upon academic warning or course repeat.",
        deadline: "During semester cycle",
        requiresSeparateApp: true
      }
    ],
    degreesOffered: ["Undergraduate", "Graduate", "PhD"],
    tags: ["Engineering", "STEM", "Public", "Lahore", "Tier 1"],
    requiresSeparateApp: false,
    logoText: "UETL",
    logoBg: "from-blue-900 to-rose-950"
  },
  {
    id: "pak-uni-015",
    universityName: "University of Agriculture Faisalabad (UAF)",
    location: "Faisalabad, Punjab, Pakistan",
    country: "Pakistan",
    flag: "🇵🇰",
    foundingYear: "1906",
    scholarshipTitle: "UAF Merit & HBL Burewala Fully Funded Scholarships",
    ranking: "QS World: #=629 | #33 in Agriculture & Forestry (#1 in PK) | #=232 Asia | #633 US News",
    qsSubjectRankings: "QS 2026: #33 Agriculture & Forestry (#1 in Pakistan), #61 Veterinary Sciences (DVM); US News: #633 Best Global Universities; #=232 QS Asia",
    rankingSource: "QS",
    coverage: "Subsidized Public Fees & Fully Funded Donor Grants",
    amountValue: "HBL Fully Funded Burewala Slabs / HEC Need Grants",
    tuitionFee: "Subsidized 1st Sem: Agri PKR 54,000 | Animal Sciences PKR 65,000 | Natural Sciences PKR 78,000 | Evening CS PKR 60,000",
    tuitionAmountNumeric: 300,
    hasFullRide: true,
    hasPartialAid: true,
    hasFinancialAid: true,
    financialAidType: "Need & Merit Based",
    financialAidDetails: "UAF features a substantial scholarship ecosystem combining university merit/need aid, federal HEC need-based programs, Ehsaas/Benazir (100% tuition + PKR 4,000/mo), PEEF, and prestigious corporate sponsorships like the HBL Fully Funded Scholarship for Burewala students.",
    minGpa: "Top academic ranks",
    minSat: "UAF Pre-Entry Test (Multiple Series)",
    satRequirementCategory: "Optional",
    satPolicyDetails: "Admissions rely on passing UAF's proprietary Undergraduate Entrance Test (conducted in multiple series). English language testing (IELTS/TOEFL) is completely waived/exempt for domestic Pakistani applicants.",
    minIelts: "Exempt for National Applicants",
    toeflRequirement: "Waived for Domestic Applicants",
    ieltsCategory: "all",
    acceptanceRate: "Competitive due to specialized demand",
    deadline: "1st Merit Lists Finalized (Sep 09) / Winter Prep",
    description: "Pakistan's leading specialized agricultural university, globally ranked #33, offering elite veterinary, food technology, biotechnology, and agricultural engineering programs.",
    overviewLong: "The University of Agriculture Faisalabad (UAF) is Pakistan's leading specialized university for agriculture and one of the country's most important institutions for veterinary sciences, food technology, agricultural engineering, environmental sciences, biotechnology and related biological disciplines. Its origins date to 1906, when the Punjab Agricultural College and Research Institute was established at Lyallpur; it became the University of Agriculture, Faisalabad in 1961.",
    topProgramsList: [
      {
        name: "B.Sc. (Hons.) Agriculture",
        ranking: "#33 globally (QS 2026) | #1 in Pakistan",
        description: "Flagship program, heavily integrated with UAF's globally ranked agricultural research, agronomy, and crop protection systems."
      },
      {
        name: "Doctor of Veterinary Medicine (DVM)",
        ranking: "#61 globally (QS 2026) (Top in Pakistan)",
        description: "Premium professional program backed by the Faculty of Veterinary Science, ranking as the top clinical animal science facility in Pakistan."
      },
      {
        name: "BS Agricultural Engineering",
        ranking: "Elite Engineering Specialization (PEC Outcome-Based Accreditation)",
        description: "Combines irrigation mechanics, farm machinery, agricultural automation, and precision agricultural technology under PEC outcome-based accreditation."
      },
      {
        name: "B.Sc. (Hons.) Food Science & Technology",
        ranking: "Highly sought corporate track (High industrial placement)",
        description: "Focuses on food safety, quality control systems, industrial processing, and product packaging development with high recruitment footprints."
      },
      {
        name: "BS Biotechnology / Biological Sciences",
        ranking: "Advanced Lab Research Program (National biotech pipeline)",
        description: "Focuses on agricultural biotechnology, microbiology, plant genetics, and experimental biology synchronized with national biotechnology tracking pipelines."
      }
    ],
    allScholarshipsList: [
      {
        id: "uaf-sch-1",
        title: "HBL Fully Funded Scholarship — UAF Burewala",
        amount: "100% Tuition, Hostel Space & Living Allowances",
        coverage: "Full Ride",
        eligibility: "Top 20 B.Sc. (Hons.) Agriculture students enrolled specifically at the Burewala constituent sub-campus college.",
        description: "Premium corporate CSR full-ride award backed explicitly by Habib Bank Limited. Awarded during official campus ceremonies; covers 100% tuition, hostel space, and dynamic allowances.",
        deadline: "April admission cycle review",
        requiresSeparateApp: false
      },
      {
        id: "uaf-sch-2",
        title: "UAF Merit-Based Scholarships",
        amount: "Partial Tuition Credit",
        coverage: "Partial Tuition",
        eligibility: "Restricted strictly to the top 10% of class enrollment across the 1st, 3rd, 5th, and 7th semesters.",
        description: "Internal university academic rewards funded from UAF's core revenues. Automatically applied at semester end across all core departments as partial tuition credits.",
        deadline: "End of semester",
        requiresSeparateApp: false
      },
      {
        id: "uaf-sch-3",
        title: "UAF Need-Based Scholarships",
        amount: "Tuition Assistance / Installment Deferment",
        coverage: "Partial Aid",
        eligibility: "Financially deserving students completely unable to pay Day 1 dues.",
        description: "Sourced internally through UAF's central student support allocations. Deserving candidates can secure an upfront first-semester fee waiver or installment deferment option from the SFAO desk to lock down their seats.",
        deadline: "Refer to financial-aid office",
        requiresSeparateApp: true
      },
      {
        id: "uaf-sch-4",
        title: "Punjab Educational Endowment Fund (PEEF) Scholarship",
        amount: "Provincial Need-Based Funding",
        coverage: "Partial Aid",
        eligibility: "Must satisfy 3 rigid criteria: 1) Authentic Punjab Domicile, 2) Total verified household monthly income ≤ PKR 60,000, 3) Scored at least 60% total aggregate marks in immediate past degree exam.",
        description: "Provincial need-based funding block requiring a separate specialized application dossier submitted through UAF Student Financial Aid Office (SFAO).",
        deadline: "When call is active",
        requiresSeparateApp: true
      },
      {
        id: "uaf-sch-5",
        title: "HEC Need-Based Scholarship",
        amount: "Full Tuition + Fixed Monthly Living Stipend",
        coverage: "Full Ride",
        eligibility: "Total verified monthly household income must sit strictly under PKR 35,000 to pass initial automated desk review by SFAO.",
        description: "Comprehensive federal need-based scholarship providing full-tuition coverage accompanied by a fixed monthly living stipend.",
        deadline: "Refer to HEC calls",
        requiresSeparateApp: true
      },
      {
        id: "uaf-sch-6",
        title: "Benazir Undergraduate Scholarship",
        amount: "100% Tuition + PKR 4,000/month Stipend",
        coverage: "Full Ride",
        eligibility: "Financially needy undergraduate students qualifying under central HEC digital portal criteria.",
        description: "Joint federal government and HEC undergraduate full-ride program (formerly Ehsaas). Provides 100% complete tuition fee coverage alongside an active recurring living stipend of PKR 4,000 per month.",
        deadline: "Follow HEC/UAF process",
        requiresSeparateApp: true
      },
      {
        id: "uaf-sch-7",
        title: "Chief Minister Punjab Honhaar Scholarship Program",
        amount: "100% Full Tuition Coverage",
        coverage: "Full Ride / Merit",
        eligibility: "Monthly family income cleanly below PKR 300,000. Minimum 70% total aggregate score for computing/sciences. Academic retention requires a clean slate with steady minimum CGPA of 2.75.",
        description: "Flagship provincial scholarship replacing generic schemes. Features monthly income ceiling (<PKR 300,000/mo), 70% entrance aggregate, and steady 2.75 minimum CGPA.",
        deadline: "Check active provincial schemes",
        requiresSeparateApp: true
      },
      {
        id: "uaf-sch-8",
        title: "Pakistan Bait-ul-Mal Support",
        amount: "Direct Educational Aid Grant",
        coverage: "Partial Aid",
        eligibility: "Government Servant Ban: If parent/guardian is an active regular government employee, application is rejected instantly. Academic hurdle: Academic warning, dropped course, or supply exam cancels upcoming semester payouts.",
        description: "Welfare educational aid grants routed via local district networks with strict government employment ban and continuous progress requirement.",
        deadline: "During semester registration",
        requiresSeparateApp: true
      },
      {
        id: "uaf-sch-9",
        title: "Donor & Alumni Scholarships",
        amount: "Varies by Foundation (Tuition & Living Grants)",
        coverage: "Merit/Need Grant",
        eligibility: "Undergraduate students meeting specific donor or corporate criteria.",
        description: "Hardcoded operational registries releasing scholarship funds for UAF cohorts: Diya Pakistan Foundation, Fauji Foundation Educational Stipend, Sitara Chemical Industries Ltd. Talent Scholarship (Deadline Dec 31), Interloop Need-Based Grants, PTC Agribusiness Support Pool, and Ihsan Trust (Meezan Bank).",
        deadline: "Check active donor timeline",
        requiresSeparateApp: true
      }
    ],
    degreesOffered: ["Undergraduate", "Graduate", "PhD"],
    tags: ["Agriculture", "STEM", "Public", "Faisalabad", "Tier 1"],
    requiresSeparateApp: false,
    logoText: "UAF",
    logoBg: "from-green-950 to-emerald-950"
  },
  {
    id: "pak-uni-017",
    universityName: "Air University (AU), Pakistan",
    location: "E-9, Islamabad, Pakistan",
    country: "Pakistan",
    flag: "🇵🇰",
    foundingYear: "2002",
    scholarshipTitle: "AU Need-Based Financial Grants & Merit Scholarships",
    ranking: "THE World: 601–800 (#2 Public Varsity in PK) | QS Asia: #328 | QS WUR #501–600 CS & Eng",
    qsSubjectRankings: "THE World Ranking: 601–800 globally (#2 among all public varsities in Pakistan). QS Asia: #328 in Asia, #76 in Southern Asia. QS Sustainability: #1101–1150 global band. QS WUR Subject Index: #501–600 for Engineering & Technology and Computer Science. Maintained under continuous premium validation by PEC and NCEAC.",
    rankingSource: "THE / QS",
    coverage: "Per-Credit Subsidized Fees & Need/Merit Aid",
    amountValue: "Up to PKR 25k/sem Merit Slabs + PKR 5k 4.0 Bonus | Full-Ride Fellowships",
    tuitionFee: "Per-Credit Hour Billed Rate: BS CS/AI/DS/SE: PKR 9,150/cr. hr. (1st Sem: PKR 137,250–155,550) | BS Cyber Security: PKR 9,150/cr. hr. (1st Sem: PKR 164,700) | BE Software Eng: PKR 8,600/cr. hr. (1st Sem: PKR 154,800) | BE Electrical/Mechatronics/Mechanical: PKR 8,050/cr. hr. (1st Sem: PKR 136,850) | BBA/BS Aviation: PKR 7,650/cr. hr. (1st Sem: PKR 122,400) + Mandatory Day 1 Administrative Overheads: PKR 41,000",
    tuitionAmountNumeric: 1250,
    hasFullRide: true,
    hasPartialAid: true,
    hasFinancialAid: true,
    financialAidType: "Need-Based, Merit & Fellowships",
    financialAidDetails: "Air University enforces an absolute Strict Dual-Funding Ban (Double-Dipping). If cross-aid is received from an external agency alongside internal concessions, all university-backed distributions are immediately halted under legal recovery penalties. Active programs include AUNBFG (requires CGPA >= 2.00 & clean conduct), AU Internal Merit (1st: PKR 25,000, 2nd: PKR 20,000, 3rd: PKR 15,000 + PKR 5,000 for 4.0 SGPA), Postgraduate Fellowship Schemes (100% tuition + PKR 20k–40k/mo stipend with work-bond), PAF Wards Rebates, CM Punjab Honhaar, PEEF, and PBM.",
    minGpa: "3.50 CGPA (Fellowship) / 2.75 CGPA (Honhaar) / 2.00 CGPA (AUNBFG)",
    minSat: "AUAT Computer-Based Test, SAT, or NTS accepted",
    satRequirementCategory: "Optional",
    satPolicyDetails: "AU completely waives English proficiency (IELTS/TOEFL) for domestic applicants (Matric/FSc/O/A-Levels). General minimum eligibility: 60% for engineering (PEC) and 50% for computing/non-engineering. Computer-based AU Admission Test (AUAT) executes in multiple series.",
    minIelts: "Exempt for National Applicants",
    ieltsCategory: "all",
    toeflRequirement: "Exempt for National Applicants",
    acceptanceRate: "Selective (~18–25%)",
    deadline: "Fall Cycle Closed (Classes in session). Spring Admission Cycle opens online Oct/Nov for computing, business, & PG tracks.",
    description: "A federally chartered public-sector university headquartered in Islamabad, deeply connected to Pakistan's aerospace and defence ecosystem, leading in computing, engineering, and cybersecurity.",
    overviewLong: "Air University (AU) is a federally chartered public-sector research university established in 2002 by the Pakistan Air Force (PAF). It operates an expansive federal footprint across multiple specialized nodes including Islamabad Main, Multan, Aerospace & Aviation Campus Kamra, Kharian, and Karachi. AU holds premier engineering and computing credentials validated under continuous accreditation by the Pakistan Engineering Council (PEC) and National Computing Education Accreditation Council (NCEAC).",
    topProgramsList: [
      {
        name: "BS Computer Science",
        ranking: "#501–600 globally in Computer Science (THE / QS)",
        description: "AU's flagship computing program, covering software architecture, distributed systems, algorithms, big data, and cryptography."
      },
      {
        name: "BS Artificial Intelligence / Data Science",
        ranking: "Specialized AI & Data Intelligence Track",
        description: "Housed in the Faculty of Computing & AI, focusing on deep neural networks, machine learning, computer vision, and big data."
      },
      {
        name: "BS Cyber Security",
        ranking: "#501–600 global band (THE / QS)",
        description: "Elite cybersecurity program covering information security, ethical hacking, digital forensics, and network defense operations."
      },
      {
        name: "BE Electrical / Mechatronics / Mechanical Engineering",
        ranking: "#501–600 in Engineering & Technology (THE / QS)",
        description: "PEC-accredited engineering programs covering power systems, robotics, mechanics, electronics, and digital signal processing."
      },
      {
        name: "Aerospace & Avionics Engineering",
        ranking: "Specialist National Aerospace Footprint",
        description: "Housed at the specialized Kamra Aerospace & Aviation Campus, deeply integrated into national aerospace flight mechanics, aerodynamics, and radar systems."
      }
    ],
    allScholarshipsList: [
      {
        id: "au-sch-1",
        title: "Air University Need-Based Financial Grant (AUNBFG)",
        amount: "Sliding-scale partial tuition credit",
        coverage: "Partial Tuition",
        eligibility: "Fresh entrants and undergraduates with documented income stress. Academic Hurdle: Must maintain minimum CGPA of 2.00 and flawless disciplinary conduct.",
        description: "Sourced internally via central university financial aid reserves. Sliding-scale partial tuition credits assigned to fresh entrants demonstrating documented income stress. Disciplinary infractions or CGPA falling below 2.00 results in immediate cancellation.",
        deadline: "During admission registration",
        requiresSeparateApp: true
      },
      {
        id: "au-sch-2",
        title: "AU Internal Merit Scholarships",
        amount: "1st: PKR 25k | 2nd: PKR 20k | 3rd: PKR 15k (+ PKR 5k for 4.0 SGPA)",
        coverage: "Partial Tuition",
        eligibility: "Class section toppers at conclusion of every semester. Minimum SGPA 3.50.",
        description: "Cash rewards distributed automatically to class section toppers at the conclusion of every semester: 1st Position: PKR 25,000; 2nd Position: PKR 20,000; 3rd Position: PKR 15,000. 4.00 Bonus: Students hitting a perfect SGPA of 4.00 receive an added PKR 5,000 bonus over and above position cash (total award capped at 100% tuition).",
        deadline: "End of each semester",
        requiresSeparateApp: false
      },
      {
        id: "au-sch-3",
        title: "Air University Postgraduate Fellowship Schemes",
        amount: "100% Tuition Waiver + PKR 20,000 to 40,000 / month Stipend",
        coverage: "Full Ride",
        eligibility: "High-achieving MS and PhD candidates. Minimum Bachelor's CGPA of 3.50 required.",
        description: "Highly competitive full-ride path. Offers a 100% complete tuition fee waiver accompanied by a substantial monthly stipend of PKR 40,000 (Engineering tracks) or PKR 20,000 (Faculty of Computing & AI). THE WORK-BOND REQUIREMENT: Entry requires minimum Bachelor's CGPA of 3.50. Recipients are legally required to sign a binding surety bond to provide work hours as a Lab Engineer, Teaching Assistant (TA), or Research Assistant (RA) on campus.",
        deadline: "Postgraduate admissions intake",
        requiresSeparateApp: true
      },
      {
        id: "au-sch-4",
        title: "PAF Wards Discount & Rebate Structure",
        amount: "Specialized fee concession / 25% rebate",
        coverage: "Partial Tuition",
        eligibility: "Children of active serving or retired Pakistan Air Force (PAF) personnel.",
        description: "Specialized institutional fee concession matrices reserved for the children of active serving or retired Pakistan Air Force personnel. OPERATIONAL GATE: Requires submission of certified service verification records and discharge booklets to the FAO wing before the close of registration.",
        deadline: "Before close of registration",
        requiresSeparateApp: true
      },
      {
        id: "au-sch-5",
        title: "Chief Minister Punjab Honhaar Scholarship Program",
        amount: "100% Complete Tuition Coverage",
        coverage: "Full Tuition",
        eligibility: "Punjab domiciled students. Family income strictly under PKR 300,000/month. Intermediate annual examination >= 70% for sciences. Retention Floor: Minimum 2.75 CGPA.",
        description: "Flagship provincial government scholarship. Hardcoded criteria: Monthly family income must sit strictly under PKR 300,000; Intermediate marks >= 70% for sciences. Retention Penalty: Once activated at Islamabad or Multan campus, recipient must maintain minimum 2.75 CGPA; dropping below this permanently revokes the provincial full ride.",
        deadline: "Follow Honhaar portal timeline",
        requiresSeparateApp: true
      },
      {
        id: "au-sch-6",
        title: "Punjab Educational Endowment Fund (PEEF)",
        amount: "Provincial Partial-to-Full Tuition Waiver",
        coverage: "Partial Aid",
        eligibility: "Valid Punjab domicile, minimum 60% aggregate marks in past board examination, monthly household income cap below PKR 60,000.",
        description: "Provincial tuition waiver processed through the campus financial aid office. Requires valid Punjab domicile, minimum 60% board aggregate, and monthly household income below PKR 60,000.",
        deadline: "As called by PEEF",
        requiresSeparateApp: true
      },
      {
        id: "au-sch-7",
        title: "HEC Need-Based Grant",
        amount: "Full Tuition Waiver + Monthly Living Stipend",
        coverage: "Full Tuition / Stipend",
        eligibility: "Admitted students meeting HEC criteria and university financial need assessment.",
        description: "Federal funding block distributing full tuition waivers alongside localized monthly stipends. Subject entirely to recurring HEC budgetary allocations released directly to the varsity.",
        deadline: "Follow FAO announcements",
        requiresSeparateApp: true
      },
      {
        id: "au-sch-8",
        title: "Pakistan Bait-ul-Mal (PBM) Welfare Support",
        amount: "Government Welfare Educational Grant",
        coverage: "Partial Aid",
        eligibility: "Needy, orphaned, or disabled students. Strictly zero eligibility for children of active Government Servants.",
        description: "Government-backed welfare educational grant. EXCLUSIONS: Strictly zero eligibility for children of active Government Servants. ACADEMIC FORFEITURE: If a student fails a single course module or drops an engineering lab course, PBM terminates all future degree payouts instantly.",
        deadline: "During semester registration",
        requiresSeparateApp: true
      }
    ],
    degreesOffered: ["Undergraduate", "Graduate", "PhD"],
    tags: ["Computing", "Cybersecurity", "Public", "Islamabad", "Aerospace", "Tier 1"],
    requiresSeparateApp: false,
    logoText: "AIR",
    logoBg: "from-blue-900 to-indigo-950"
  },
  {
    id: "pak-uni-018",
    universityName: "Bahria University (BU), Pakistan",
    location: "E-8, Islamabad, Pakistan",
    country: "Pakistan",
    flag: "🇵🇰",
    foundingYear: "2000",
    scholarshipTitle: "Bahria Merit Scholarships & Fee Waivers",
    ranking: "THE 2026: 1001–1200 globally | #601-800 Business",
    qsSubjectRankings: "THE 2026: #601-800 Business & Economics, #601-800 Engineering, #801-1000 Computer Science. QS Subject Area Rankings: #601–650 overall in Business & Economics.",
    rankingSource: "THE / QS",
    coverage: "Tuition Fee waivers & Need-Based support",
    amountValue: "75%, 50%, or 30% Tuition waivers for position holders",
    tuitionFee: "Dynamic Per-Credit Rates: BBA (Islamabad): PKR 9,900/cr. hr. (1st Sem Base Tuition: PKR 178,200 for 18 cr. hr.) | BBA (Khi/Lhr): PKR 8,888/cr. hr. | BS Computer Science: PKR 10,063/cr. hr. | BS Software Engineering: PKR 10,333/cr. hr. + Mandatory Day 1 Onboarding Overheads: PKR 63,000 (Admission PKR 30k, Caution Money PKR 22k refundable, Misc PKR 11k) | True BBA Islamabad Day 1 Total: PKR 241,200",
    tuitionAmountNumeric: 1450,
    hasFullRide: true,
    hasPartialAid: true,
    hasFinancialAid: true,
    financialAidType: "Need-Based & Merit",
    financialAidDetails: "Bahria University enforces an absolute Strict Dual-Funding Ban (Double-Dipping): concurrent awards from internal university pools and external sources trigger instant revocation of both. Active SFAO programs include Bahria Admission Merit (75%, 50%, 30% waivers for top 3 position holders), Tabeer Fully Funded Scholarship (up to PKR 2.5M, requires >= 80% on 100-MCQ test, closes Feb 10), Bahria Batch Toppers, Bahria Financial Assistance (min 2.50 CGPA, Spring deadline March 30), Special Category waivers (20% Sibling, 10% Alumni, 10% Teachers, 25% Disabled, 20% Women Empowerment), HEC Need-Based, and Benazir Undergraduate Scholarship Program (Awaiting HEC Active Call).",
    minGpa: "70% aggregate (Admission merit eligibility)",
    minSat: "Accepts Bahria written test / BUET or SAT",
    satRequirementCategory: "Optional",
    satPolicyDetails: "Bahria completely waives English proficiency profiles (IELTS/TOEFL) for all domestic Pakistani stream candidates (Matric/FSc or domestic O/A-Levels). Centralized testing via Bahria University Entry Test (BUET) or SAT routes.",
    minIelts: "Waived / Exempt for National Stream Applicants",
    ieltsCategory: "all",
    toeflRequirement: "Waived / Exempt for National Stream Applicants",
    acceptanceRate: "Moderately Selective (~30–35%)",
    deadline: "Fall Cycle Closed (Classes commenced August 31). Spring Admission Cycle opens online Oct/Nov.",
    description: "A federally chartered public-sector university established by the Pakistan Navy in 2000, known for strong professional business, engineering, and maritime disciplines.",
    overviewLong: "Bahria University is a federally chartered public-sector university established by the Pakistan Navy in 2000. Its principal seat is in Islamabad, while the university has expanded into a multi-city institution with campuses and specialist facilities in Islamabad, Karachi and Lahore. Unlike a narrowly specialized institution, Bahria has developed a broad academic portfolio spanning computing, engineering, business, health sciences, psychology, law, social sciences, environmental sciences and maritime studies. The university currently states that it offers 130+ programmes across three cities.",
    topProgramsList: [
      {
        name: "BS Computer Science",
        ranking: "#801–1000 globally (THE 2026)",
        description: "Flagship computational curriculum supported heavily by Karachi, Islamabad, and Lahore computational research labs."
      },
      {
        name: "BS Artificial Intelligence",
        ranking: "Emerging Technology Program",
        description: "Backed by specialized AI and localized machine intelligence research initiatives."
      },
      {
        name: "Bachelor of Computer Engineering",
        ranking: "#601-800 globally in Engineering (THE 2026)",
        description: "Professional engineering route combining computer hardware architectures, digital design, and software programming."
      },
      {
        name: "BBA (Bachelor of Business Administration)",
        ranking: "#601–800 globally in Business (THE 2026)",
        description: "The flagship multi-campus management program holds maximum national industrial recruitment traction."
      },
      {
        name: "BS Business Analytics",
        ranking: "Modern data-driven business analytics",
        description: "Legitimate mapping of the enterprise data analytics track, integrating computational statistics, database systems, and business intelligence."
      }
    ],
    allScholarshipsList: [
      {
        id: "bu-sch-1",
        title: "Bahria Merit Scholarship – Top Admission Toppers",
        amount: "75%, 50%, or 30% Tuition Fee waiver",
        coverage: "Partial Tuition",
        eligibility: "Top performers on competitive Bahria Written Test merit list with minimum 70% Intermediate score. Retention Trap: Requires strict regular full course load roadmap—dropping a single module voids the entire merit waiver instantly.",
        description: "Automatically assigned at entry based on BUET merit list slots: 1st Position: 75% tuition waiver; 2nd: 50% waiver; 3rd: 30% waiver. The student must follow the exact academic roadmap with a regular full course load; dropping a single module voids the entire merit waiver instantly.",
        deadline: "Awarded automatically upon admission lists",
        requiresSeparateApp: false
      },
      {
        id: "bu-sch-2",
        title: "Tabeer Fully Funded Undergraduate Scholarship",
        amount: "Up to PKR 2,500,000 (100% Fully Funded)",
        coverage: "Full Ride",
        eligibility: "Pakistani nationals. Must secure at least 80% marks in a dedicated 100 MCQ-based scholarship test. Result-waiting students are entirely ineligible.",
        description: "Flagship external educational initiative sponsored by the Pakistan Skill Incubation Program (PSIP), valued up to PKR 2.5 million. Requires at least 80% marks in a dedicated 100 MCQ-based scholarship test. Applications close firmly on February 10 annually; result-waiting candidates are entirely ineligible.",
        deadline: "February 10 annually",
        requiresSeparateApp: true
      },
      {
        id: "bu-sch-3",
        title: "Special Category Fee Waivers",
        amount: "10% to 25% Tuition Fee waiver",
        coverage: "Partial Tuition",
        eligibility: "Siblings (20% for 2nd child), BU Alumni Children (10%), Children of Practicing Teachers (10%), Differently Abled (25%), Women Empowerment (20% in computing/management).",
        description: "Family and demographic concession matrices processed during the first month of every semester: 20% sibling tuition waiver for second brother/sister studying concurrently; 10% BU alumni children; 10% children of practicing teachers; 25% differently abled (disabled quota); 20% women empowerment concession applied selectively to promote computing and management access.",
        deadline: "Apply during first month of semester",
        requiresSeparateApp: true
      },
      {
        id: "bu-sch-4",
        title: "Bahria Merit Scholarship – Batch Toppers",
        amount: "Academic excellence semester award",
        coverage: "Partial Tuition",
        eligibility: "Students achieving absolute top position per section based on terminal semester GPA.",
        description: "Internal university academic rewards reviewed and applied post-results every semester. Awarded automatically to students achieving the absolute top position per section based on terminal GPA.",
        deadline: "Post-semester results",
        requiresSeparateApp: false
      },
      {
        id: "bu-sch-5",
        title: "Bahria Financial Assistance Scholarship",
        amount: "Need-based partial or full tuition assistance",
        coverage: "Partial or Full Tuition",
        eligibility: "Students with documented financial need. Academic Hurdle: Must preserve a clean academic profile with minimum CGPA of 2.50.",
        description: "Internal need-based partial or full tuition assistance for standard semester programs. To maintain eligibility, student must maintain minimum CGPA of 2.50. Deadlines: Spring semester non-extendable closing date locks down on March 30 annually; Fall closes closely aligned with August registration close.",
        deadline: "March 30 (Spring) / Late August (Fall)",
        requiresSeparateApp: true
      },
      {
        id: "bu-sch-6",
        title: "HEC Need-Based Scholarship",
        amount: "Federal Tuition Waiver + Monthly Stipend",
        coverage: "Full Tuition / Stipend",
        eligibility: "Financially deserving students meeting federal HEC and university assessment criteria.",
        description: "Federal welfare funding block distributing full tuition waivers alongside localized monthly stipends. Subject entirely to HEC central budgetary allocation intervals.",
        deadline: "Follow SFAO announcements",
        requiresSeparateApp: true
      },
      {
        id: "bu-sch-7",
        title: "Benazir Undergraduate Scholarship Program",
        amount: "Federal Tuition + Living Stipend (Awaiting HEC Active Call)",
        coverage: "Full Ride",
        eligibility: "Financially deserving students meeting HEC national poverty thresholds.",
        description: "Successor to the grandfathered Ehsaas Undergraduate Scholarship. Tagged as 'Awaiting HEC Active Call' pending official HEC portal scheduling to prevent student confusion.",
        deadline: "Awaiting HEC Active Call",
        requiresSeparateApp: true
      }
    ],
    degreesOffered: ["Undergraduate", "Graduate", "PhD"],
    tags: ["Business", "Engineering", "Public", "Islamabad", "Multi-Campus", "Tier 1"],
    requiresSeparateApp: false,
    logoText: "BAHR",
    logoBg: "from-blue-950 to-indigo-900"
  },
  {
    id: "pak-uni-020",
    universityName: "University of Management & Technology (UMT), Lahore",
    location: "C-II, Johar Town, Lahore, Punjab, Pakistan",
    country: "Pakistan",
    flag: "🇵🇰",
    foundingYear: "1990",
    scholarshipTitle: "UMT Merit Slabs (Up to 100%), ILM Sibling & Kinship Discounts",
    ranking: "THE 2026: 801–1000 globally (#1 Private Varsity in PK) | QS Asia: #351 | #501–600 Business",
    qsSubjectRankings: "THE 2026: #501–600 Business & Economics (HSM, AMBA-accredited), #501–600 Computer Science, #501–600 Engineering (Level-II Washington Accord), QS 2026: #501–600 Mathematics, QS Asia: #351 in Asia. Officially ranked #1 Private Sector University in Pakistan on THE World Index.",
    rankingSource: "THE / QS",
    coverage: "Up to 100% Tuition waivers (Tuition-Only) / Qarz-e-Hasna Loans",
    amountValue: "Up to 100% Tuition Waiver for >=95% Marks | Full-Ride for Board Toppers",
    tuitionFee: "Semester-Load Billing: BSCS / AI / Cyber Security: PKR 239,000/sem (8-Sem Total: PKR 1,912,000) | BBA (Hons): PKR 279,000/sem (8-Sem Total: PKR 2,232,000) + Mandatory Day 1 Overheads: PKR 25,000 (Admission) + PKR 21,000/sem (Misc Fee) | True Day 1 Invoice: BSCS/AI: PKR 285,000 | BBA: PKR 325,000",
    tuitionAmountNumeric: 1750,
    hasFullRide: true,
    hasPartialAid: true,
    hasFinancialAid: true,
    financialAidType: "Need-Based & Merit",
    financialAidDetails: "UMT enforces an absolute Strict Dual-Funding Ban (Double-Dipping): concurrent awards from internal university pools and external sources trigger instant reversal of internal concessions. Important: All merit slabs apply strictly to tuition only; semester miscellaneous charges (PKR 21,000/sem) are billed out-of-pocket for all students. Programs include UMT Merit Slabs (10%–100%), Board Position Holder Full-Ride (100% tuition + free hostel + tablet), Need-Based ILM Scholarship Fund (interest-free Qarz-e-Hasna loan with legal guarantee bond), Remote Area Waivers (up to 50%), Sports (20%–30%), Orphan Concessions (20%–30%), Differently Abled (up to 50%), Kinship (20%), ILM/Knowledge School (100% admission + 15% tuition), and external integrations (PHEC Honhaar, PEEF, Diya Pakistan).",
    minGpa: "3.80 CGPA (100% Merit / Board Topper Renewal) | 2.50 CGPA (10% Merit / Remote)",
    minSat: "Accepts Intermediate merit + UMT entrance exam",
    satRequirementCategory: "Optional",
    satPolicyDetails: "Admission evaluation formula: Intermediate (50%) + UMT Entrance Test (30%) + Matriculation (20%). Online application fee: PKR 2,000. English proficiency (IELTS/TOEFL) is completely waived for domestic stream applicants.",
    minIelts: "Exempt for National Stream Applicants",
    ieltsCategory: "all",
    toeflRequirement: "Waived / Exempt for National Stream Applicants",
    acceptanceRate: "Selective (~20–25%)",
    deadline: "Fall Cycle Closed (Classes in session). Spring Admission Cycle opens online Oct/Nov.",
    description: "A prominent private research-intensive university in Lahore, famous for its massive academic breadth, highly flexible merit-scholarship slabs, and extensive corporate industry links.",
    overviewLong: "The University of Management & Technology (UMT) is a private research university based in Johar Town, Lahore. Officially recognized as the #1 Ranked Private Sector University in Pakistan on the Times Higher Education (THE) World University Rankings ledger, UMT hosts over 16,000 students across 125+ degree programs spanning computing, AI, business, engineering, and mathematics.",
    topProgramsList: [
      {
        name: "BS Computer Science",
        ranking: "#501–600 globally in Computer Science (THE 2026)",
        description: "Flagship computing program housed under the School of Systems and Technology (SST), offering advanced pathways in software architecture, distributed systems, and algorithms."
      },
      {
        name: "BS Artificial Intelligence",
        ranking: "Specialized SST Computing Track",
        description: "Highly modern computing program fully backed by the School of Systems and Technology (SST), emphasizing intelligent systems, deep neural models, and AI research."
      },
      {
        name: "BBA (Bachelor of Business Administration)",
        ranking: "#501–600 globally in Business (THE 2026)",
        description: "Managed via the internationally AMBA-accredited Dr. Hasan Murad School of Management (HSM), widely respected in corporate leadership and industrial management."
      },
      {
        name: "BS Electrical Engineering",
        ranking: "#501–600 globally in Engineering (THE 2026)",
        description: "Housed in the School of Engineering, certified under Level-II Washington Accord international accreditation."
      },
      {
        name: "BS Mathematics",
        ranking: "#501–600 globally (QS 2026)",
        description: "Confirmed via global basic sciences research output trackers, offering advanced computational modeling and analytical statistics."
      }
    ],
    allScholarshipsList: [
      {
        id: "umt-sch-1",
        title: "UMT Merit Scholarship – Standard BS Programs (Tuition-Only)",
        amount: "10% to 100% Tuition Fee Waiver (Slabs)",
        coverage: "Full Tuition / Partial Aid",
        eligibility: "Automatically assigned at entry based on Intermediate/F.Sc/A-Level percentage slabs. Retention: 95%+ requires 3.80 CGPA; 90-94.99% requires 3.60 CGPA; 85-89.99% requires 3.40 CGPA; 80-84.99% requires 3.20 CGPA; 75-79.99% requires 3.00 CGPA; 70-74.99% requires 2.80 CGPA; 65-69.99% requires 2.50 CGPA.",
        description: "Slabs Matrix: >= 95% marks: 100% tuition waiver (3.80 CGPA renewal); 90%–94.99%: 80% tuition waiver (3.60 CGPA); 85%–89.99%: 60% tuition waiver (3.40 CGPA); 80%–84.99%: 40% tuition waiver (3.20 CGPA); 75%–79.99%: 30% tuition waiver (3.00 CGPA); 70%–74.99%: 20% tuition waiver (2.80 CGPA); 65%–69.99%: 10% tuition waiver (2.50 CGPA). CRITICAL TUITION-ONLY CLAUSE: Applies strictly to tuition fees only; semester miscellaneous charges (PKR 21,000/semester) are completely excluded and billed out-of-pocket for all students.",
        deadline: "Awarded automatically upon admission lists",
        requiresSeparateApp: false
      },
      {
        id: "umt-sch-2",
        title: "Need-Based ILM Scholarship Fund (Qarz-e-Hasna)",
        amount: "Interest-Free Study Loan / Partial or Full Tuition",
        coverage: "Interest-Free Loan / Aid",
        eligibility: "Admitted undergraduate students demonstrating genuine financial hardship. Requires legal stamp paper guarantee bond from parent/guardian.",
        description: "Sourced internally from UMT corporate philanthropy funds. Operational reality: Not a non-repayable cash grant; functions as an interest-free Qarz-e-Hasna loan requiring a legal stamp paper guarantee bond from a parent/guardian, with structured repayment installments commencing immediately post-graduation.",
        deadline: "First month of semester",
        requiresSeparateApp: true
      },
      {
        id: "umt-sch-3",
        title: "Remote Area Scholarship",
        amount: "Up to 50% Tuition Fee Waiver",
        coverage: "Partial Tuition",
        eligibility: "Restricted to students hailing from designated, less-developed regions (Balochistan, FATA, Gilgit-Baltistan, Southern Punjab). Minimum entry score of 60% in Intermediate or continuous 2.50 CGPA.",
        description: "Grants up to a 50% tuition fee waiver to actively foster regional diversity across underrepresented districts.",
        deadline: "During registration cycle",
        requiresSeparateApp: true
      },
      {
        id: "umt-sch-4",
        title: "Position Holder Scholarship (Board Toppers)",
        amount: "100% Tuition Waiver + Free Hostel + Tablet Allowance",
        coverage: "Full Ride",
        eligibility: "Official Board examination position toppers admitted to UMT. Requires maintaining a flawless 3.80 CGPA renewal every semester.",
        description: "Premium 100% full-ride merit package targeting official Board position toppers. On top of a 100% tuition waiver, includes free on-campus hostel housing and a dedicated digital learning device (tablet) allowance. Requires 3.80 CGPA renewal.",
        deadline: "During admissions",
        requiresSeparateApp: false
      },
      {
        id: "umt-sch-5",
        title: "Sports & Extracurricular Scholarship",
        amount: "20% to 30% Tuition Waiver (Higher for National Athletes)",
        coverage: "Partial Tuition",
        eligibility: "Students demonstrating sports trial representation or national-level athletic achievements. Validated through certificates submitted physically to the sports directorate.",
        description: "Grants a standard 20% to 30% tuition waiver based on trial representations; higher concessions evaluated case-by-case for national-level athletes.",
        deadline: "Submit certificates during trials",
        requiresSeparateApp: true
      },
      {
        id: "umt-sch-6",
        title: "Orphan Compassionate Scholarship",
        amount: "20% (One Parent Deceased) / 30% (Both Parents Deceased)",
        coverage: "Partial Tuition",
        eligibility: "Students who have lost one or both parents. Official death certificate documentation mandatory.",
        description: "Need-based special category compassionate waiver: grants exactly a 20% tuition waiver if one parent is deceased, and a 30% tuition waiver if both parents are deceased.",
        deadline: "During enrollment registration",
        requiresSeparateApp: true
      },
      {
        id: "umt-sch-7",
        title: "Differently-Abled Scholarship",
        amount: "Up to 50% Tuition Fee Waiver",
        coverage: "Partial Tuition",
        eligibility: "Special person fee concession. Requires presenting official government disability certificate or Special Person CNIC.",
        description: "Grants a maximum of up to a 50% tuition waiver upon verification of official government disability documentation.",
        deadline: "During admissions",
        requiresSeparateApp: true
      },
      {
        id: "umt-sch-8",
        title: "Kinship / Family Discounts",
        amount: "20% Tuition Fee Waiver",
        coverage: "Partial Tuition",
        eligibility: "Second concurrent family member (sibling or spouse) registering at UMT.",
        description: "Generous family concession framework granting a 20% tuition waiver applied directly to the second concurrent family member studying at UMT.",
        deadline: "During admissions",
        requiresSeparateApp: true
      },
      {
        id: "umt-sch-9",
        title: "ILM Colleges / The Knowledge School Discounts",
        amount: "100% Admission Fee Waiver + 15% Tuition Waiver",
        coverage: "Partial Tuition",
        eligibility: "Admitted students transitioning from UMT-affiliated networks (ILM Colleges or The Knowledge School).",
        description: "Institutional network continuity concession: admitted students from ILM Colleges or The Knowledge School automatically receive a 100% admission fee waiver alongside a fixed 15% tuition fee waiver.",
        deadline: "During admissions",
        requiresSeparateApp: true
      },
      {
        id: "umt-sch-10",
        title: "Government & External Scholarships (Honhaar, PEEF, Diya)",
        amount: "Full Tuition / Financial Grants",
        coverage: "Full Tuition / Partial Aid",
        eligibility: "Third-party eligibility criteria (e.g., Punjab PHEC Honhaar: income < PKR 300k, 70% FSc, 2.75 CGPA; PEEF; Diya Pakistan).",
        description: "Active external third-party scholarship integrations processed by UMT OFAS: The Punjab PHEC Honhaar Scholarship (100% tuition coverage, monthly family income strictly under PKR 300,000, 70% intermediate score, min 2.75 CGPA retention), PEEF Master’s/Bachelor Slabs, and Diya Pakistan Foundation Digital Grants.",
        deadline: "Follow external agency timelines",
        requiresSeparateApp: true
      }
    ],
    degreesOffered: ["Undergraduate", "Graduate", "PhD"],
    tags: ["Business", "Engineering", "Private", "Lahore", "Tier 1"],
    requiresSeparateApp: false,
    logoText: "UMT",
    logoBg: "from-blue-900 to-indigo-950"
  },
  {
    id: "pak-uni-022",
    universityName: "The University of Lahore (UOL)",
    location: "Raiwind Road / Defence Road Campus, Lahore, Punjab, Pakistan",
    country: "Pakistan",
    flag: "🇵🇰",
    foundingYear: "1999",
    scholarshipTitle: "UOL Merit Slabs (Up to 100%) & Punjab CM Honhaar Awards",
    ranking: "U.S. News: #479 globally (#1 Private Varsity in PK, #3 overall in PK) | THE 2026: 601–800 | QS Asia: #=187",
    qsSubjectRankings: "U.S. News Best Global Universities: #479 globally, #122 in Asia, #3 overall in Pakistan (#1 Private Varsity in Pakistan). Medicine/MBBS: #353 globally (U.S. News). Pharmacy/Pharm-D: #414 globally for Pharmacology & Toxicology (U.S. News). BS Computer Science: #961 globally (U.S. News). BS Engineering: #575 globally (U.S. News; #660 Electrical Eng). BBA: #601–800 (THE 2026). QS World: #1001–1200, QS Asia: #=187, QS Sustainability: Top 500 global (#3 in Pakistan).",
    rankingSource: "U.S. News / THE / QS",
    coverage: "Up to 100% Tuition waivers & Punjab CM Honhaar Full-Ride",
    amountValue: "100% Tuition for Board Toppers & >=80% Marks | CM Honhaar 100%",
    tuitionFee: "Per-Credit & Semester Rates: BBA: PKR 10,200/credit hour (PKR 153,000 [15 cr] – PKR 183,600 [18 cr]/sem) | B.Arch: PKR 175,000/sem base | Mandatory Day 1 Onboarding Overheads: PKR 39,500 extra (Admission PKR 25k, Enrollment PKR 5k, Exam Fee PKR 5k, Medical Diagnostic PKR 2.5k, Societies PKR 2k) | Financial Aid Pre-requisite: Minimum 50% tuition deposit + registration fee required upfront before aid review.",
    tuitionAmountNumeric: 1450,
    hasFullRide: true,
    hasPartialAid: true,
    hasFinancialAid: true,
    financialAidType: "Need-Based & Merit",
    financialAidDetails: "UOL enforces a strict, absolute Strict Dual-Funding Ban (Double-Dipping): concurrent internal and external aid results in immediate cancellation and recovery penalties. SFAO Handbook Mandate: All applicants seeking financial aid must first deposit at least 50% of tuition plus registration fee upfront before review files are accepted. Active programs include UOL Merit (100% waiver for Board Toppers or >=80%-90% marks; 75%-80% for 75%-79.99%; 50%-70% for 70%-74.99%; min 3.00 SGPA retention), Punjab CM Honhaar (100% full-ride, income < PKR 300k, >=70% FSc, age <22, 2.75 CGPA retention), Financial Assistance case-by-case, Kinship Discount (10% waiver for sibling/spouse, active while primary kin is enrolled), Employee Kinship (up to 50% 1st sem, excludes UCMD medical/dental), and Corporate Partner concessions (10%-20%).",
    minGpa: "3.00 SGPA (Merit renewal floor - drops to 2.99 void waiver) | 2.75 CGPA (Honhaar)",
    minSat: "UOL Computer-Based Entry Test (CBT) or SAT",
    satRequirementCategory: "Optional",
    satPolicyDetails: "Computer-based pre-admission test conducted at campus. English proficiency (IELTS/TOEFL) is completely exempt for all domestic Pakistani stream applicants.",
    minIelts: "Exempt for National Applicants",
    ieltsCategory: "all",
    toeflRequirement: "Waived / Exempt for National Applicants",
    acceptanceRate: "Competitive (~25–30%)",
    deadline: "Fall Admissions Cycle Closed (August 22/23 intake finalized). Spring Admission Cycle opens online Oct/Nov.",
    description: "One of Pakistan's largest private multidisciplinary universities, boasting an exceptional clinical medical, engineering, computing, and pharmaceutical footprint in Lahore.",
    overviewLong: "The University of Lahore (UOL) is a premier private multidisciplinary university headquartered in Lahore. In the latest U.S. News & World Report Best Global Universities rankings, UOL achieved a historic milestone, ranking #479 globally, #122 in Asia, and #3 overall in Pakistan, officially recognized as the #1 Ranked Private Sector University in Pakistan on this global ledger.",
    topProgramsList: [
      {
        name: "Medicine / MBBS",
        ranking: "#353 globally (U.S. News Global Subject Index)",
        description: "UOL's premier medical track, backed safely by full international compliance frameworks and local hospital integrations under the University College of Medicine & Dentistry (UCMD)."
      },
      {
        name: "Pharmacy / Pharm-D",
        ranking: "#414 globally for Pharmacology & Toxicology (U.S. News)",
        description: "Tracks as one of the highest-rated professional medicine and pharmacology tracks nationwide, emphasizing molecular medicine, pharmacognosy, and clinical therapeutics."
      },
      {
        name: "BS Computer Science",
        ranking: "#961 globally (U.S. News)",
        description: "Flagship computing program covering software architecture, machine learning, systems programming, algorithms, and cybersecurity."
      },
      {
        name: "BS Engineering",
        ranking: "#575 globally (U.S. News) | #660 in Electrical Eng",
        description: "PEC-accredited engineering portfolio spanning Electrical, Mechanical, Civil, and Computer Engineering disciplines."
      },
      {
        name: "BBA / Business Administration",
        ranking: "#601–800 globally in Business (THE 2026)",
        description: "Ranked securely inside the #601–800 global band under Times Higher Education indices, offered by Lahore Business School (LBS)."
      }
    ],
    allScholarshipsList: [
      {
        id: "uol-sch-1",
        title: "UOL Merit-Based Scholarship",
        amount: "50% to 100% Tuition Fee Waiver (Slabs)",
        coverage: "Full Tuition / Partial Aid",
        eligibility: "Board position holders or Intermediate scores >= 70%. Retention: Must maintain minimum 3.00 SGPA (slipping to 2.99 results in immediate cancellation and full fee reissue).",
        description: "Restructured live tiering: Board Position Holders or >= 80% to 90% marks receive 100% full tuition waiver across core BS sciences; 75%–79.99% marks receive 75% to 80% tuition waiver; 70%–74.99% marks receive 50% to 70% tuition waiver. SFAO MANDATE: Students must deposit at least 50% tuition plus registration fee upfront before financial aid review files are accepted. Retention: Requires minimum 3.00 semester SGPA.",
        deadline: "Awarded automatically upon admission lists",
        requiresSeparateApp: false
      },
      {
        id: "uol-sch-2",
        title: "Punjab CM Honhaar Undergraduate Scholarship",
        amount: "100% Fully Funded Scholarship (Full Ride)",
        coverage: "Full Ride",
        eligibility: "Punjab domicile. Family income strictly under PKR 300,000/month (E-Stamp affidavit). Age < 22 years. Intermediate aggregate >= 70% for computing/sciences. Retention: Minimum 2.75 CGPA.",
        description: "Comprehensive provincial full-ride initiative covering 100% tuition. Hard operational filters: verified monthly family income strictly under PKR 300,000 via E-Stamp affidavit, age under 22 on closing date, and intermediate score >= 70% for sciences. Retention ceiling: 2.75 CGPA.",
        deadline: "Follow Punjab Honhaar portal timeline",
        requiresSeparateApp: true
      },
      {
        id: "uol-sch-3",
        title: "Financial Assistance (Case-by-Case Waivers)",
        amount: "Need-based sliding concessions & installments",
        coverage: "Partial Tuition",
        eligibility: "Students demonstrating verified financial distress. Requires comprehensive proof of income stress, utility bills historical logs, and death certificates (if orphan quota).",
        description: "Need-based sliding fee concessions and installment accommodations evaluated via the Office of Student Affairs (SFAO). Mandatory 50% tuition deposit applies before files are accepted.",
        deadline: "Apply through SFAO at enrollment",
        requiresSeparateApp: true
      },
      {
        id: "uol-sch-4",
        title: "UOL Kinship / Family Discounts",
        amount: "10% Tuition Fee Waiver",
        coverage: "Partial Tuition",
        eligibility: "Siblings or spouse of currently enrolled active UOL student.",
        description: "Fixed 10% tuition waiver applied to siblings or spouses of current active students. The Trap: Concession is permanently terminated the moment the primary kin graduates, withdraws, or drops out.",
        deadline: "During enrollment registration",
        requiresSeparateApp: true
      },
      {
        id: "uol-sch-5",
        title: "Employee Kinship Fee Concession",
        amount: "Up to 50% Tuition Fee Waiver (1st Semester)",
        coverage: "Partial Tuition",
        eligibility: "Children or siblings of regular active UOL employees. Strictly excluded: All medical/dental streams under UCMD.",
        description: "Children or siblings of regular active UOL employees receive up to a 50% tuition fee waiver in the first semester. Critical exclusion: Completely inapplicable to any medical or dental streams managed under the University College of Medicine & Dentistry (UCMD).",
        deadline: "During admission submission",
        requiresSeparateApp: true
      },
      {
        id: "uol-sch-6",
        title: "Corporate Partner Concessions",
        amount: "10% to 20% Tuition Fee Relief",
        coverage: "Partial Tuition",
        eligibility: "Current employees of allied corporate banks, private networks, and strategic development partners.",
        description: "Direct institutional link providing a fixed 10% to 20% tuition relief for current employees of allied corporate banks, private networks, and strategic development partners.",
        deadline: "Submit corporate credentials at registration",
        requiresSeparateApp: true
      },
      {
        id: "uol-sch-7",
        title: "Disability Scholarship",
        amount: "Special person tuition concession",
        coverage: "Partial Tuition",
        eligibility: "Certified differently abled students presenting official government disability certificate or Special Person CNIC.",
        description: "Dedicated institutional welfare support providing tuition assistance for differently abled candidates.",
        deadline: "During admissions",
        requiresSeparateApp: true
      },
      {
        id: "uol-sch-8",
        title: "Sports & Talent Scholarships",
        amount: "20% to 100% waiver depending on trials",
        coverage: "Partial Tuition",
        eligibility: "Students qualifying through physical sports trials and representing UOL in HEC/national tournaments.",
        description: "Performance-evaluated athletic scholarships managed by the UOL Sports Directorate.",
        deadline: "Refer to trial dates",
        requiresSeparateApp: true
      }
    ],
    degreesOffered: ["Undergraduate", "Graduate", "PhD"],
    tags: ["Medical", "Engineering", "Private", "Lahore", "Tier 1"],
    requiresSeparateApp: false,
    logoText: "UOL",
    logoBg: "from-blue-900 to-indigo-950"
  },
  {
    id: "pak-uni-023",
    universityName: "Government College University Lahore (GCU Lahore)",
    location: "Katchery Road, Lahore, Punjab, Pakistan",
    country: "Pakistan",
    flag: "🇵🇰",
    foundingYear: "1864",
    scholarshipTitle: "GCU Need-Based Aid, Golden & Silver EFT Scholarships",
    ranking: "THE 2026: 801–1000 globally | QS Asia 2026: =410",
    qsSubjectRankings: "THE 2026: #601–800 Physical Sciences (#601–800 Chemistry), #601–800 Life Sciences, #601–800 Social Sciences, THE Business & Economics ranked | ShanghaiRanking GRAS 2024: #401 Mathematics (ASSMS) | QS 2025: #501–550 Physics | QS Asia 2026: =410",
    rankingSource: "THE",
    coverage: "Highly Subsidized Public Fees & EFT Need-Based Aid",
    amountValue: "Golden Scholarship: full fees + hostel expenses (PKR 96,000)",
    tuitionFee: "Morning BS (Open Merit): PKR 352,800 – 566,900 four-year baseline (avg PKR 40,350/sem) | BSCS/IT/SE: PKR 840,700 four-year dues (~PKR 90k–105k/sem) | Afternoon (Self-Supporting) Surcharge: +60% to 100% higher (~PKR 80k–110k+/sem) | Mandatory Day 1 Admin Dues: PKR 20,000 Admission (One-time non-refundable) + PKR 2,500 Library Deposit (Refundable) + PKR 9,000/sem Reg & Utilities",
    tuitionAmountNumeric: 300,
    hasFullRide: true,
    hasPartialAid: true,
    hasFinancialAid: true,
    financialAidType: "Need-Based & Board waivers",
    financialAidDetails: "GCU enforces a strict Dual-Funding Ban (Double-Dipping). Student Financial Aid Office (SFAO) coordinates HEC Need-Based (tuition + PKR 10,000/month stipend) and GCU Endowment Fund Trust (GCUEFT: Golden full fees + hostel allowance up to PKR 96,000/year; Silver PKR 42,000/year; verified family income strictly under PKR 70,000/month; deadline Sept 15). 100% full tuition waivers for Board position holders & differently abled. First-Semester Exclusion Lock: Freshmen strictly barred from applying for internal institutional financial aid during 1st semester (eligible from 2nd sem onwards with min 2.50 CGPA). External programs include Chief Minister Punjab Honhaar (100% full ride, income < PKR 300,000/month with E-Stamp affidavit, >=70% intermediate, min 2.75 CGPA retention), PEEF (income < PKR 60,000/month, >=60% intermediate), and BEEF (Balochistan domicile, min 3.00 CGPA, 75% attendance).",
    minGpa: "Satisfactory academic performance (EFT renewal)",
    minSat: "N/A (Selection based on Intermediate + Matric aggregate)",
    satRequirementCategory: "Optional",
    satPolicyDetails: "General merit formula: 20% Matric/O-Level + 80% Intermediate Part-I/equivalent score. Entry tests are required only when mandated by professional councils.",
    minIelts: "Exempt for National Applicants",
    ieltsCategory: "all",
    acceptanceRate: "Highly Competitive",
    deadline: "Fall Admissions Cycle Closed (Admissions finalized). Spring Admission Cycle opens online Oct/Nov.",
    description: "One of Pakistan's oldest, most historically significant public institutions, located in Lahore, with a legendary scientific heritage (alumni include Nobel Laureates Abdus Salam and Har Gobind Khorana).",
    overviewLong: "Government College University Lahore (GCU Lahore) is one of Pakistan’s oldest and most historically significant higher-education institutions. Founded in 1864, it began as Government College and later became an independent university in 2002. Its historic identity is closely associated with the Old Ravians alumni network and with prominent Pakistani scholars, scientists, writers and political figures. Among its most internationally recognized academic connections are Nobel laureates Abdus Salam and Har Gobind Khorana.",
    topProgramsList: [
      {
        name: "BS Computer Science",
        ranking: "Highly Competitive Morning Merit",
        description: "Includes Computer Science, AI, and Software Engineering, meeting NCEAC standards. High local computing selection demand. Four-year dues: PKR 840,700."
      },
      {
        name: "BS Mathematics",
        ranking: "#401 globally (ShanghaiRanking / GRAS 2024)",
        description: "Housed in the prestigious Abdus Salam School of Mathematical Sciences (ASSMS), maintaining elite specialized international research metrics."
      },
      {
        name: "BS Physics",
        ranking: "#501–550 globally (QS 2025)",
        description: "Historically recognized via the legacy of Nobel Laureate Dr. Abdus Salam's laboratory."
      },
      {
        name: "BS Chemistry",
        ranking: "#601–800 globally in Physical Sciences (THE 2026)",
        description: "Legitimate mapping of the core science research hub with verified international faculty publications."
      },
      {
        name: "BS Business Analytics / Business Administration",
        ranking: "THE Business & Economics Ranked",
        description: "Fully aligned with international management performance parameters under Times Higher Education."
      }
    ],
    allScholarshipsList: [
      {
        id: "gcul-sch-1",
        title: "GCU Endowment Fund Trust (GCUEFT) Scholarships",
        amount: "Golden: 100% Tuition + Hostel (up to PKR 96,000/yr) | Silver: PKR 42,000 / year",
        coverage: "Full Ride / Partial Tuition",
        eligibility: "Needy and deserving GCU students with total verified household monthly income strictly under PKR 70,000/month.",
        description: "Premier internal funding asset of the varsity. Golden Scholarship covers 100% of university tuition fees plus a dedicated hostel expenses allowance up to PKR 96,000/year. Silver Scholarship provides a fixed PKR 42,000/year tuition waiver. Hard Operational Filter: Household verified monthly income must sit strictly under PKR 70,000 to pass panel screening. Application window closes September 15 annually.",
        deadline: "September 15 annually",
        requiresSeparateApp: true
      },
      {
        id: "gcul-sch-2",
        title: "HEC Need-Based Scholarship",
        amount: "100% Tuition Waiver + PKR 10,000 / month Stipend",
        coverage: "Full Ride",
        eligibility: "Financially needy students enrolled in regular undergraduate programs (excluding self-finance slots).",
        description: "Federal funding block distributing 100% full tuition waivers alongside a localized monthly living stipend of exactly PKR 10,000 per month (updated from outdated PKR 6,000 policy directive). Submit through the Financial Aid Office.",
        deadline: "Announced per cycle",
        requiresSeparateApp: true
      },
      {
        id: "gcul-sch-3",
        title: "Merit & Special Fee Waivers",
        amount: "100% Full Tuition Waiver",
        coverage: "Full Tuition",
        eligibility: "Intermediate board examination position holders and differently-abled students.",
        description: "Grants automated 100% full tuition waivers exclusively to official intermediate board position holders and differently-abled individuals. Special category sports and co-curricular concessions are trial-verified by campus directorates during initialization windows.",
        deadline: "Submit certificates during admission",
        requiresSeparateApp: false
      },
      {
        id: "gcul-sch-4",
        title: "GCU Institutional Financial Aid",
        amount: "Variable Tuition Assistance",
        coverage: "Partial Tuition",
        eligibility: "Continuing students (2nd semester onwards) with minimum 2.50 CGPA demonstrating verified financial need. FRESHMEN STRICTLY EXCLUDED.",
        description: "Need-based assistance derived from internal varsity revenues. FIRST-SEMESTER EXCLUSION LOCK: Freshmen are strictly barred from applying for internal institutional financial aid during their 1st semester. Applications are only accepted starting from the 2nd semester onwards, requiring a minimum CGPA floor of 2.50.",
        deadline: "During semester cycle (2nd semester onwards)",
        requiresSeparateApp: true
      },
      {
        id: "gcul-sch-5",
        title: "Balochistan Education Endowment Fund (BEEF)",
        amount: "Provincial Quota Full / Partial Award",
        coverage: "Partial Aid",
        eligibility: "Authentic Balochistan domicile, steady 3.00 CGPA floor, and verified 75% classroom attendance signed by registrar.",
        description: "Special out-of-province provincial quota grant facilitated directly through the SFAO desk. Requires an authentic Balochistan domicile, a steady 3.00 CGPA floor, and a verified 75% classroom attendance track signed off by the campus registrar.",
        deadline: "Follow BEEF annual schedule",
        requiresSeparateApp: true
      },
      {
        id: "gcul-sch-6",
        title: "Chief Minister Punjab Honhaar Scholarship Program",
        amount: "100% Full Ride (Complete Tuition Waiver)",
        coverage: "Full Ride",
        eligibility: "Punjab domicile. Family income strictly under PKR 300,000/month (E-Stamp affidavit). Intermediate score >= 70% for computing/sciences. Retention: Minimum 2.75 CGPA.",
        description: "Premier provincial full-ride initiative covering 100% tuition. Mandatory Live Criteria: Family income must log below PKR 300,000 per month (requires an absolute E-Stamp paper affidavit uploaded online). The student must hold an intermediate score of 70% or higher for computing/sciences, and maintain a steady minimum 2.75 CGPA to preserve the full ride.",
        deadline: "Follow Punjab Honhaar portal timeline",
        requiresSeparateApp: true
      },
      {
        id: "gcul-sch-7",
        title: "Punjab Educational Endowment Fund (PEEF)",
        amount: "Tuition Support + Monthly Stipend",
        coverage: "Partial Tuition / Aid",
        eligibility: "Punjab-domiciled candidates with minimum 60% aggregate marks in immediate past intermediate exam, household income under PKR 60,000/month.",
        description: "Provincial endowment scholarship earmarked for Punjab-domiciled candidates who scored a minimum 60% aggregate marks in their immediate past intermediate examination, holding a strict household income cap under PKR 60,000 per month.",
        deadline: "Follow PEEF annual schedule",
        requiresSeparateApp: true
      }
    ],
    degreesOffered: ["Undergraduate", "Graduate", "PhD"],
    tags: ["Sciences", "Historical", "Public", "Lahore", "Tier 1"],
    requiresSeparateApp: false,
    logoText: "GCUL",
    logoBg: "from-red-950 to-amber-950"
  },
  {
    id: "pak-uni-024",
    universityName: "University of Engineering & Technology Taxila (UET Taxila)",
    location: "Taxila, Punjab, Pakistan",
    country: "Pakistan",
    flag: "🇵🇰",
    foundingYear: "1975",
    scholarshipTitle: "UET Taxila Merit Cheques, Honhaar & HEC Need Grants",
    ranking: "THE 2026: 801–1000 globally | THE Asia: 201–250 | #401-500 Computer Science",
    qsSubjectRankings: "THE 2026: #401–500 Computer Science (NCEAC Category-X), #601–800 Engineering (Software, Electrical, Mechanical, Civil - Washington Accord), #501–600 Physical Sciences | THE Asia 2026: #201–250 | QS Asia 2026: =416",
    rankingSource: "THE",
    coverage: "Subsidized Public-sector Fees & Merit Awards",
    amountValue: "Standard Semester Tuition: PKR 38,000",
    tuitionFee: "Regular Open Merit: PKR 104,800 (1st sem) | Subsequent: PKR 90,800/sem | Four-Year: PKR 740,400 | Partial-Subsidized (S & X Categories): PKR 339,800+ (1st sem) | Out-of-Station Hostel: PKR 36,000 - 40,000 (1st sem) + variable mess | Day 1 Processing Fee: PKR 4,000 (HBL Konnect)",
    tuitionAmountNumeric: 300,
    hasFullRide: true,
    hasPartialAid: true,
    hasFinancialAid: true,
    financialAidType: "Need-Based & Merit",
    financialAidDetails: "UET Taxila enforces an absolute Strict Dual-Funding Ban (Double-Dipping). SFAO manages multiple active schemes: Punjab Honhaar Scholarship (100% tuition full ride, family income < PKR 300,000/month with E-Stamp affidavit, >=70% intermediate for engineering, min 2.75 CGPA retention), PEF (Professional Education Foundation merit-cum-need for regular engineering tracks), UET Taxila Merit (top 3 per department by terminal GPA), UET Taxila Alumni Association Scholarship (STRICTLY DISQUALIFIED FOR FRESHMEN: 1st semester students cannot apply; open from 2nd year onwards with CGPA >= 2.50), PEEF (Punjab domicile, >=60% marks, income < PKR 60,000/month), Benazir Undergraduate (100% tuition + stipend via HEC), and HEC Need-Based (100% tuition + PKR 10,000/month stipend, excluding self-finance slots).",
    minGpa: "Satisfactory academic performance",
    minSat: "Accepts ECAT, TCAT or accepted equivalent",
    satRequirementCategory: "Optional",
    satPolicyDetails: "Admissions aggregate: 50% HSSC, 33% ECAT/TCAT, and 17% SSC. Stated minimums: 60% HSSC for engineering, 50% for computer science.",
    minIelts: "Exempt for National Applicants",
    ieltsCategory: "all",
    acceptanceRate: "Competitive",
    deadline: "Fall Admissions Merit Queues Finalized. Admission Freezing/Downgrading Deadline: September 14, 2026. General cycle closed.",
    description: "A compact and highly specialized public engineering university in Taxila, northern Punjab, leading in computer science, robotics, and aeronautical engineering.",
    overviewLong: "The University of Engineering & Technology Taxila is one of Pakistan's established public engineering universities and is particularly important for students from northern Punjab, Islamabad, Rawalpindi, Wah and surrounding regions. Its institutional history began in 1975 when the University College of Engineering Taxila was established as an extension of UET Lahore. It moved permanently to Taxila in 1978 and obtained independent status in 1993.",
    topProgramsList: [
      {
        name: "BS Computer Science",
        ranking: "#401-500 globally (THE 2026)",
        description: "UET Taxila's strongest internationally ranked program, meeting NCEAC Category-X highest computing tiers."
      },
      {
        name: "Software Engineering",
        ranking: "#601-800 globally in Engineering (THE 2026)",
        description: "Outcome-based Washington Accord professional accreditation standards, software architecture, and systems engineering."
      },
      {
        name: "Electrical Engineering",
        ranking: "#601-800 globally in Engineering (THE 2026)",
        description: "Core Washington Accord discipline covering electronics, communications systems, and smart grid power."
      },
      {
        name: "Mechanical Engineering",
        ranking: "#601-800 globally in Engineering (THE 2026)",
        description: "Undergraduate major in thermodynamics, robotics, machinery design, and structural fluid dynamics."
      },
      {
        name: "Civil Engineering",
        ranking: "#601-800 globally in Engineering (THE 2026)",
        description: "PEC Washington Accord accredited civil infrastructure, transportation, hydrology, and geotechnical structures."
      }
    ],
    allScholarshipsList: [
      {
        id: "uett-sch-1",
        title: "Punjab Honhaar Scholarship Program",
        amount: "100% Fully Funded Tuition (Full Ride)",
        coverage: "Full Ride",
        eligibility: "Punjab domicile. Family income strictly under PKR 300,000/month (E-Stamp affidavit). Intermediate score >= 70% for engineering. Retention: Min 2.75 CGPA.",
        description: "Premier external high-profile provincial rollout covering 100% complete tuition. Hard Operational Filters: Family income must sit strictly under PKR 300,000/month (requires absolute E-Stamp paper affidavit uploaded online). Intermediate score >= 70% for engineering streams. RETENTION PENALTY: Must maintain minimum 2.75 CGPA; dropping below permanently revokes the provincial full ride.",
        deadline: "Ministry announced dates",
        requiresSeparateApp: true
      },
      {
        id: "uett-sch-2",
        title: "PEF Scholarship (Professional Education Foundation)",
        amount: "Annual Tuition Fee Support",
        coverage: "Partial Tuition",
        eligibility: "Students meeting Professional Education Foundation socio-economic criteria in regular engineering/computing tracks.",
        description: "Sponsored explicitly by the Professional Education Foundation. Targeted strictly at regular undergraduate professional tracks (Engineering/Computing) who clear PEF's centralized socio-economic screening, checking interview schedules and clearing cheques.",
        deadline: "Announced in spring semester",
        requiresSeparateApp: true
      },
      {
        id: "uett-sch-3",
        title: "UET Taxila University Merit Scholarships",
        amount: "Merit award cheques per department",
        coverage: "Partial Tuition",
        eligibility: "Academic top 3 students per department based on terminal GPA.",
        description: "Internal university academic rewards reviewed and applied post-results every semester. Awarded automatically to the top 3 high-performing students per department based on terminal GPA.",
        deadline: "Semester-end",
        requiresSeparateApp: false
      },
      {
        id: "tax-sch-4",
        title: "UET Taxila Alumni Association Scholarship",
        amount: "Merit-cum-need financial award",
        coverage: "Partial Aid",
        eligibility: "Undergraduate students 2nd year onwards (CGPA >= 2.50). STRICTLY DISQUALIFIED FOR FRESHMEN.",
        description: "Merit-cum-need scholarship program funded directly via the central UET Taxila Alumni Association network. THE FRESHMEN FILTER EXCLUSION: Financial assistance under the alumni pool is strictly not offered to incoming freshmen during their 1st semester. Candidates can only apply starting from their 2nd year onwards, requiring a minimum CGPA floor of 2.50 or above.",
        deadline: "Check active alumni calls",
        requiresSeparateApp: true
      },
      {
        id: "tax-sch-5",
        title: "Punjab Educational Endowment Fund (PEEF)",
        amount: "Partial to Full Tuition Fee Waiver",
        coverage: "Partial Aid",
        eligibility: "Valid Punjab domicile, min 60% aggregate marks in past board exam, monthly household income under PKR 60,000.",
        description: "Provincial partial-to-full tuition fee waiver processed through the campus financial aid office. Requires valid Punjab domicile, min 60% marks in intermediate, and monthly household income under PKR 60,000.",
        deadline: "Check active PEEF call",
        requiresSeparateApp: true
      },
      {
        id: "tax-sch-6",
        title: "Benazir Undergraduate Scholarship (HEC Ehsaas)",
        amount: "100% Tuition Fee Waiver + Monthly Living Stipend",
        coverage: "Full Ride",
        eligibility: "Regular undergraduate students satisfying active HEC criteria.",
        description: "High-profile federal full-ride option (formerly known as Ehsaas Undergraduate scheme). Provides 100% complete tuition fee coverage alongside an active recurring living stipend. Applications routed digitally through the HEC central web portal.",
        deadline: "Follow federal announcements",
        requiresSeparateApp: true
      },
      {
        id: "tax-sch-7",
        title: "HEC Need-Based Scholarship",
        amount: "100% Tuition Waiver + PKR 10,000 / month Stipend",
        coverage: "Full Tuition / Stipend",
        eligibility: "Regular category admitted students (not self-finance) satisfying HEC criteria.",
        description: "Federal need-based program providing full tuition support plus a monthly living stipend of exactly PKR 10,000 per month (updated from outdated PKR 6,000 policy directive). Excludes self-finance slots. Submit through SFAO.",
        deadline: "Announced during semester",
        requiresSeparateApp: true
      }
    ],
    degreesOffered: ["Undergraduate", "Graduate", "PhD"],
    tags: ["Engineering", "STEM", "Public", "Taxila", "Tier 1"],
    requiresSeparateApp: false,
    logoText: "UETT",
    logoBg: "from-blue-900 to-rose-950"
  }
];

