import json

# Saudi Arabia & Türkiye university definitions

u_saudi_1 = {
    "id": "uni-saudi-001",
    "universityName": "King Fahd University of Petroleum & Minerals",
    "location": "Dhahran, Saudi Arabia",
    "country": "Saudi Arabia",
    "flag": "🇸🇦",
    "foundingYear": "1963",
    "scholarshipTitle": "KFUPM Full Graduate Fellowship & Undergraduate Excellence Awards",
    "ranking": "#63 Global (QS 2027)",
    "rankingSource": "QS World University Rankings 2027 (#63 Global, #1 Arab Region) & QS Subject Rankings 2026",
    "qsSubjectRankings": "Petroleum Engineering #4 Global, Data Science & AI #58 Global, Chemical Eng Top 25, Mechanical Eng Top 50, CS Top 75",
    "coverage": "Full Ride",
    "amountValue": "100% Subsidized Tuition + SAR 1,200 - 4,000/mo Stipend + Free Furnished Housing + Airfare",
    "tuitionFee": "Free (100% Subsidized by Saudi Government for admitted students)",
    "tuitionAmountNumeric": 0,
    "hasFullRide": True,
    "hasPartialAid": True,
    "hasFinancialAid": True,
    "financialAidType": "Merit-Based",
    "financialAidDetails": "KFUPM offers 100% full-ride scholarships to all admitted Saudi and international graduate students (100% tuition waiver + SAR 1,200 to SAR 4,000/month living stipend + free furnished air-conditioned accommodation + free medical care + round-trip annual flights + subsidized meals). Undergraduate international scholars receive full tuition, housing, monthly stipend, and flight allowances.",
    "minGpa": "3.5 / 4.0",
    "minSat": "1350+",
    "satRequirementCategory": "1300",
    "satPolicyDetails": "High academic standard in secondary mathematics and sciences. Standardized GRE required for graduate applicants.",
    "minIelts": "6.5+",
    "ieltsCategory": "6.5",
    "toeflRequirement": "80+",
    "commonAppAccepted": False,
    "applicationPortalDetails": "KFUPM Online Admissions Portal (admission.kfupm.edu.sa)",
    "acceptanceRate": "8% - 12%",
    "deadline": "Feb 15 (Fall Intake) / Sep 15 (Spring Intake)",
    "description": "KFUPM is the #1 ranked university in the Arab region (#63 Global), world-famous for Petroleum Engineering (#4 Global), Data Science & AI (#58), and Chemical Engineering.",
    "overviewLong": "Founded in 1963 by Royal Decree, King Fahd University of Petroleum & Minerals (KFUPM) in Dhahran is the premier science and engineering university in the Middle East (#63 globally in QS 2027). Located next to Saudi Aramco headquarters, KFUPM maintains world-class scientific research facilities.",
    "topProgramsList": [
      {
        "name": "Petroleum Engineering & Geosciences",
        "ranking": "#4 Global (#1 in Middle East)",
        "description": "Globally renowned petroleum engineering school backed by Saudi Aramco research facilities, leading international innovation in enhanced oil recovery, reservoir simulation, and carbon capture."
      },
      {
        "name": "Data Science & Artificial Intelligence",
        "ranking": "#58 Global (#1 in Arab Region)",
        "description": "Top-ranked AI program in the Middle East, offering cutting-edge tracks in deep learning, autonomous systems, computer vision, and high-performance computing."
      },
      {
        "name": "Chemical & Process Engineering",
        "ranking": "Global Top 25",
        "description": "World-class chemical engineering department specializing in petrochemical processing, catalysis, polymer synthesis, membrane technology, and water desalination."
      },
      {
        "name": "Mechanical Engineering & Energy Systems",
        "ranking": "Global Top 50",
        "description": "High-impact engineering program featuring specialized labs for thermal power, robotics, renewable energy integration, and smart manufacturing."
      },
      {
        "name": "Computer Science & Cybersecurity",
        "ranking": "Global Top 75",
        "description": "High-security computing division focusing on network defense, cryptographic systems, cloud computing architectures, and software engineering."
      }
    ],
    "allScholarshipsList": [
      {
        "id": "kfupmsch-1",
        "title": "KFUPM Full Graduate Fellowship",
        "amount": "100% tuition waiver + SAR 1,200–4,000/mo stipend + free housing + flights + healthcare",
        "coverage": "Full Ride",
        "eligibility": "Top international and Saudi graduate applicants in STEM fields with high GRE/GPA.",
        "description": "Comprehensive full-ride graduate fellowship covering tuition, monthly stipend, furnished apartment, health insurance, and annual round-trip flight tickets.",
        "deadline": "Feb 15 (Fall) / Sep 15 (Spring)",
        "requiresSeparateApp": False
      },
      {
        "id": "kfupmsch-2",
        "title": "KFUPM Undergraduate Excellence Scholarship",
        "amount": "100% tuition waiver + monthly stipend + campus housing + flight allowance",
        "coverage": "Full Ride",
        "eligibility": "Exceptionally talented international and local secondary school graduates with high SAT/Qiyas scores.",
        "description": "Full-ride undergraduate scholarship for international students with high academic achievement.",
        "deadline": "Mar 15",
        "requiresSeparateApp": True
      }
    ]
}

u_saudi_2 = {
    "id": "uni-saudi-002",
    "universityName": "King Abdulaziz University",
    "location": "Jeddah, Saudi Arabia",
    "country": "Saudi Arabia",
    "flag": "🇸🇦",
    "foundingYear": "1967",
    "scholarshipTitle": "KAU International Scholarship for Outstanding Students",
    "ranking": "#200 Global (QS 2027)",
    "rankingSource": "QS World University Rankings 2027 (#200 Global, Top 5 Arab Region) & QS Subject Rankings 2026",
    "qsSubjectRankings": "Engineering #7 Arab Region, Medicine, Computer Science, Environmental Sciences, Business (AACSB)",
    "coverage": "Full Ride",
    "amountValue": "100% Tuition Waiver + SAR 1,900/mo Stipend + Free Campus Housing + Annual Flight Tickets",
    "tuitionFee": "Free (Fully Subsidized for admitted scholarship recipients)",
    "tuitionAmountNumeric": 0,
    "hasFullRide": True,
    "hasPartialAid": True,
    "hasFinancialAid": True,
    "financialAidType": "Merit-Based",
    "financialAidDetails": "KAU awards full-ride international scholarships covering 100% tuition, SAR 1,900/month living stipend, free campus housing, annual round-trip flight tickets, free healthcare, and arrival allowances for international students with GPA > 3.75/4.0.",
    "minGpa": "3.5 / 4.0",
    "minSat": "Optional",
    "satRequirementCategory": "Optional",
    "satPolicyDetails": "Strong secondary school transcript in mathematics and sciences.",
    "minIelts": "6.0+",
    "ieltsCategory": "6.0",
    "toeflRequirement": "79+",
    "commonAppAccepted": False,
    "applicationPortalDetails": "KAU International Scholarship Portal (outscholarship.kau.edu.sa)",
    "acceptanceRate": "12% - 15%",
    "deadline": "Jan 31 (International Scholarship Portal) / May 15 (General)",
    "description": "King Abdulaziz University in Jeddah is a premier global research university (#200 Global), leading in Engineering, Medicine, Computer Science, and Marine Studies.",
    "overviewLong": "Founded in 1967 in Jeddah, King Abdulaziz University (KAU) is one of the largest universities in the Arab region, educating over 100,000 students across sprawling campuses.",
    "topProgramsList": [
      {
        "name": "Engineering & Technology",
        "ranking": "#7 in Arab Region",
        "description": "Comprehensive engineering faculty featuring civil, electrical, industrial, nuclear, and aeronautical engineering, with ABET accreditation across all tracks."
      },
      {
        "name": "Medicine & Health Sciences",
        "ranking": "Global Top 150",
        "description": "Leading medical school in Western Saudi Arabia, operating a major university hospital, clinical simulation centers, and advanced medical research institutes."
      },
      {
        "name": "Computer Science & Information Technology",
        "ranking": "Global Top 150",
        "description": "ABET-accredited IT faculty offering software engineering, AI, cyber defense, and big data management specializations."
      },
      {
        "name": "Environmental Sciences & Marine Studies",
        "ranking": "Global Top 100",
        "description": "Specialized Red Sea research center focusing on coral reef conservation, marine biotechnology, oceanography, and arid-land environmental management."
      },
      {
        "name": "Business & Administration (AACSB Accredited)",
        "ranking": "Global Top 200",
        "description": "High-ranking business school providing AACSB-accredited tracks in finance, supply chain management, marketing, and accounting."
      }
    ],
    "allScholarshipsList": [
      {
        "id": "kausch-1",
        "title": "KAU International Scholarship for Outstanding Students",
        "amount": "100% tuition waiver + SAR 1,900/mo stipend + free housing + flights + healthcare",
        "coverage": "Full Ride",
        "eligibility": "International candidates with GPA > 3.75/4.0 applying for Bachelor's, Master's, or PhD degrees.",
        "description": "Comprehensive full scholarship providing tuition, living allowance, free housing, flight tickets, and healthcare.",
        "deadline": "Jan 31",
        "requiresSeparateApp": True
      },
      {
        "id": "kausch-2",
        "title": "KAU Scientific Research Assistantships",
        "amount": "SAR 3,000/month stipend + tuition coverage + research budget",
        "coverage": "Full Ride",
        "eligibility": "Enrolled Master's and PhD students attached to funded university research chairs.",
        "description": "Research assistantship stipend for graduate students assisting in KAU research labs.",
        "deadline": "May 30",
        "requiresSeparateApp": True
      }
    ]
}

u_saudi_3 = {
    "id": "uni-saudi-003",
    "universityName": "King Saud University",
    "location": "Riyadh, Saudi Arabia",
    "country": "Saudi Arabia",
    "flag": "🇸🇦",
    "foundingYear": "1957",
    "scholarshipTitle": "KSU External International Scholarship & Graduate Research Fellowships",
    "ranking": "#107 Global (QS 2027)",
    "rankingSource": "QS World University Rankings 2027 (#107 Global, #1 Public Saudi Univ) & QS Subject Rankings 2026",
    "qsSubjectRankings": "Petroleum Engineering #33 Global, Dentistry #48 Global, Pharmacy #48 Global (#21 ARWU), Engineering #11 ARWU",
    "coverage": "Full Ride",
    "amountValue": "100% Subsidized Tuition + SAR 1,000 - 1,500/mo Stipend + Campus Housing + Airfare",
    "tuitionFee": "Free (100% Subsidized for admitted international scholarship holders)",
    "tuitionAmountNumeric": 0,
    "hasFullRide": True,
    "hasPartialAid": True,
    "hasFinancialAid": True,
    "financialAidType": "Merit-Based",
    "financialAidDetails": "KSU awards full-ride external international scholarships (100% tuition waiver + SAR 1,000–1,500/month stipend + free campus housing + annual round-trip flight ticket + free healthcare) for international students maintaining high academic performance.",
    "minGpa": "3.5 / 4.0",
    "minSat": "Optional",
    "satRequirementCategory": "Optional",
    "satPolicyDetails": "High secondary school results in science/math tracks.",
    "minIelts": "6.0+",
    "ieltsCategory": "6.0",
    "toeflRequirement": "79+",
    "commonAppAccepted": False,
    "applicationPortalDetails": "King Saud University Scholarship Portal (si.ksu.edu.sa)",
    "acceptanceRate": "10% - 15%",
    "deadline": "Jan 31 (International Scholarship) / May 30 (Regular)",
    "description": "King Saud University in Riyadh is Saudi Arabia's premier public university (#107 Global), leading in Petroleum Engineering (#33), Dentistry (#48), Pharmacy (#48), and Engineering.",
    "overviewLong": "Established in 1957 as Riyadh University, King Saud University (KSU) is Saudi Arabia's oldest and top comprehensive public university (#107 globally in QS 2027). Located in Riyadh, KSU operates world-class dental and medical hospitals.",
    "topProgramsList": [
      {
        "name": "Petroleum Engineering & Geosciences",
        "ranking": "#33 Global",
        "description": "Top-tier energy engineering program located in Saudi Arabia's capital, featuring state-of-the-art drilling, rock mechanics, and reservoir characterization labs."
      },
      {
        "name": "Dentistry & Dental Surgery",
        "ranking": "#48 Global in QS",
        "description": "Globally renowned dental school operating the largest university dental hospital in the Middle East, with specialized clinical residency tracks."
      },
      {
        "name": "Pharmacy & Pharmacology",
        "ranking": "#48 Global in QS (#21 in ARWU)",
        "description": "Top pharmaceutical science school in the Middle East, leading research in drug design, pharmacokinetics, and clinical trial safety."
      },
      {
        "name": "Civil, Mechanical & Electrical Engineering",
        "ranking": "#11 Global in ARWU Engineering",
        "description": "ABET-accredited engineering programs with specialized research centers for clean energy, nanotechnology, and robotics."
      },
      {
        "name": "Agricultural & Food Sciences",
        "ranking": "#37 Global in ARWU",
        "description": "Premier agricultural research center focusing on sustainable desert agriculture, hydroponics, food safety, and water management."
      }
    ],
    "allScholarshipsList": [
      {
        "id": "ksusch-1",
        "title": "KSU External International Scholarship",
        "amount": "100% tuition waiver + SAR 1,000–1,500/mo stipend + housing + flight ticket",
        "coverage": "Full Ride",
        "eligibility": "Non-Saudi international applicants meeting high academic requirements (GPA > 3.5/4.0).",
        "description": "Full-ride scholarship package funded by the Saudi government for international students.",
        "deadline": "Jan 31",
        "requiresSeparateApp": True
      },
      {
        "id": "ksusch-2",
        "title": "KSU Graduate Research Fellowships",
        "amount": "Monthly stipend up to SAR 4,000 + housing allowance + tuition waiver",
        "coverage": "Full Ride",
        "eligibility": "Master's and PhD candidates pursuing research in strategic STEM disciplines.",
        "description": "Graduate research fellowship supporting full-time thesis research.",
        "deadline": "Feb 28",
        "requiresSeparateApp": True
      }
    ]
}

u_saudi_4 = {
    "id": "uni-saudi-004",
    "universityName": "Prince Mohammad Bin Fahd University",
    "location": "Khobar, Saudi Arabia",
    "country": "Saudi Arabia",
    "flag": "🇸🇦",
    "foundingYear": "2006",
    "scholarshipTitle": "PMU Merit Scholarships & Financial Need Tuition Relief",
    "ranking": "#421 Global (QS 2027)",
    "rankingSource": "QS World University Rankings 2027 (#421 Global) & ShanghaiRanking 2026",
    "qsSubjectRankings": "Engineering & Technology #288 Global, Energy Science 201-300 Shanghai, CS, Business (AACSB), Law",
    "coverage": "Full Tuition",
    "amountValue": "100% Tuition Waiver for Merit Scholars or 30%-70% Need Discount",
    "tuitionFee": "SAR 55,000 - SAR 70,000/yr (~$14,600 - $18,600 USD)",
    "tuitionAmountNumeric": 16000,
    "hasFullRide": True,
    "hasPartialAid": True,
    "hasFinancialAid": True,
    "financialAidType": "Merit & Need-Based",
    "financialAidDetails": "PMU offers PMU Merit Scholarships (100% tuition waiver for high school GPA ≥ 3.8/4.0), Financial Need Scholarships (30% to 70% tuition discount), and Graduate Research Assistantships.",
    "minGpa": "3.2 / 4.0",
    "minSat": "1200+",
    "satRequirementCategory": "1200",
    "satPolicyDetails": "US-aligned university curriculum. SAT / PMU Placement Test required.",
    "minIelts": "6.0+",
    "ieltsCategory": "6.0",
    "toeflRequirement": "80+",
    "commonAppAccepted": False,
    "applicationPortalDetails": "PMU Online Admissions Portal (pmu.edu.sa)",
    "acceptanceRate": "25% - 30%",
    "deadline": "Jun 30 (Fall Semester) / Dec 15 (Spring Semester)",
    "description": "Prince Mohammad Bin Fahd University in Khobar is a top US-modeled private research university (#421 Global), excelling in Engineering (#288), Energy Science, and Business (AACSB).",
    "overviewLong": "Founded in 2006 in Khobar, Prince Mohammad Bin Fahd University (PMU) is a premier US-modeled private research university in Saudi Arabia's Eastern Province.",
    "topProgramsList": [
      {
        "name": "Engineering & Technology",
        "ranking": "#288 Global in QS Subject",
        "description": "High-tech engineering school modeled on US university standards, offering mechanical, civil, electrical, and industrial engineering tracks."
      },
      {
        "name": "Energy Science & Engineering",
        "ranking": "201–300 Global in ShanghaiRanking",
        "description": "Specialized research center in Eastern Saudi Arabia focusing on renewable solar systems, smart grid integration, and energy efficiency."
      },
      {
        "name": "Computer Engineering & Information Technology",
        "ranking": "Global Top 350",
        "description": "US-aligned computing curriculum covering cybersecurity, software engineering, cloud architecture, and artificial intelligence."
      },
      {
        "name": "Business Administration & Finance (AACSB Accredited)",
        "ranking": "Global Top 350",
        "description": "Modern business school providing AACSB-accredited tracks in finance, human resources, supply chain management, and management information systems."
      },
      {
        "name": "Law & Human Rights",
        "ranking": "Global Top 400",
        "description": "Modern legal studies school combining Saudi commercial jurisprudence with international business law and comparative legal studies."
      }
    ],
    "allScholarshipsList": [
      {
        "id": "pmusch-1",
        "title": "PMU Merit Scholarship",
        "amount": "100% tuition fee waiver for degree duration",
        "coverage": "Full Tuition",
        "eligibility": "High school graduates with cumulative GPA ≥ 3.8/4.0 or top standardized test results.",
        "description": "Full tuition waiver awarded to academically outstanding applicants.",
        "deadline": "Jun 30",
        "requiresSeparateApp": True
      },
      {
        "id": "pmusch-2",
        "title": "PMU Financial Need Scholarship",
        "amount": "30% to 70% reduction in tuition fees",
        "coverage": "Partial Aid",
        "eligibility": "Enrolled students demonstrating verified family financial need.",
        "description": "Tuition discount grant based on family economic evaluation.",
        "deadline": "Jul 15",
        "requiresSeparateApp": True
      },
      {
        "id": "pmusch-3",
        "title": "PMU Research Assistantship for Graduate Students",
        "amount": "Full tuition waiver + monthly stipend",
        "coverage": "Full Ride",
        "eligibility": "Master's degree students assisting in PMU research institutes.",
        "description": "Graduate assistantship grant supporting research and teaching.",
        "deadline": "May 15",
        "requiresSeparateApp": True
      }
    ]
}

u_saudi_5 = {
    "id": "uni-saudi-005",
    "universityName": "King Khalid University",
    "location": "Abha, Saudi Arabia",
    "country": "Saudi Arabia",
    "flag": "🇸🇦",
    "foundingYear": "1998",
    "scholarshipTitle": "KKU Government International Scholarship & Graduate Fellowships",
    "ranking": "#514 Global (QS 2027)",
    "rankingSource": "QS World University Rankings 2027 (#514 Global) & THE World University Rankings (251-300)",
    "qsSubjectRankings": "Education #67 THE, Engineering 126-150 THE, Computer Science 176-200 THE, Math 101-150 Shanghai",
    "coverage": "Full Ride",
    "amountValue": "100% Tuition Waiver + SAR 1,000/mo Stipend + Free Campus Housing + Airfare",
    "tuitionFee": "Free (100% Subsidized for scholarship recipients)",
    "tuitionAmountNumeric": 0,
    "hasFullRide": True,
    "hasPartialAid": True,
    "hasFinancialAid": True,
    "financialAidType": "Merit-Based",
    "financialAidDetails": "KKU offers government international scholarships (100% tuition waiver + SAR 1,000/month living stipend + free campus housing + annual round-trip airfare + medical insurance) and graduate research fellowships.",
    "minGpa": "3.2 / 4.0",
    "minSat": "Optional",
    "satRequirementCategory": "Optional",
    "satPolicyDetails": "High secondary school GPA in mathematics/sciences.",
    "minIelts": "5.5+",
    "ieltsCategory": "5.5",
    "toeflRequirement": "75+",
    "commonAppAccepted": False,
    "applicationPortalDetails": "King Khalid University Scholarship Portal (kku.edu.sa)",
    "acceptanceRate": "25% - 30%",
    "deadline": "Feb 28 (International Portal) / Jun 15 (General Intake)",
    "description": "King Khalid University in Abha is a major Saudi research institution (#514 Global, 251–300 THE), leading in Education (#67 THE), Engineering, and Computer Science.",
    "overviewLong": "Founded in 1998 in Abha, Asir region, King Khalid University (KKU) is a leading public research university in southwestern Saudi Arabia.",
    "topProgramsList": [
      {
        "name": "Education & Pedagogical Sciences",
        "ranking": "#67 Global in THE Subject",
        "description": "KKU's highest-ranked exact subject globally, leading research in instructional technology, educational leadership, and curriculum development."
      },
      {
        "name": "Engineering & Technology",
        "ranking": "126–150 Global in THE Subject",
        "description": "Comprehensive ABET-accredited engineering faculty offering civil, electrical, mechanical, and chemical engineering in Asir region."
      },
      {
        "name": "Computer Science & Artificial Intelligence",
        "ranking": "176–200 Global in THE Subject",
        "description": "Rapidly growing computing school focusing on cybersecurity, machine learning, data engineering, and smart city infrastructure."
      },
      {
        "name": "Mathematics & Natural Sciences",
        "ranking": "101–150 Global in ShanghaiRanking",
        "description": "Strong mathematical research center specializing in numerical analysis, differential equations, and applied statistics."
      },
      {
        "name": "Energy Science & Materials Engineering",
        "ranking": "101–150 Global in ShanghaiRanking",
        "description": "Advanced research center focusing on photovoltaic solar cells, nanomaterials, and green building tech in high-altitude environments."
      }
    ],
    "allScholarshipsList": [
      {
        "id": "kkusch-1",
        "title": "KKU Government International Scholarship",
        "amount": "100% tuition waiver + SAR 1,000/mo stipend + free housing + flight ticket + healthcare",
        "coverage": "Full Ride",
        "eligibility": "Outstanding international students from eligible countries applying for undergraduate or graduate study.",
        "description": "Full-ride government scholarship covering tuition, living allowance, housing, flight, and healthcare.",
        "deadline": "Feb 28",
        "requiresSeparateApp": True
      },
      {
        "id": "kkusch-2",
        "title": "KKU Outstanding Graduate Student Fellowship",
        "amount": "100% tuition waiver + SAR 2,500/month research stipend",
        "coverage": "Full Ride",
        "eligibility": "Competitive Master's and PhD candidates pursuing research publications.",
        "description": "Graduate fellowship supporting full-time research in KKU laboratories.",
        "deadline": "May 30",
        "requiresSeparateApp": True
      }
    ]
}

# Türkiye
u_turkey_1 = {
    "id": "uni-turkey-001",
    "universityName": "Istanbul Technical University",
    "location": "Istanbul, Türkiye",
    "country": "Türkiye",
    "flag": "🇹🇷",
    "foundingYear": "1773",
    "scholarshipTitle": "Türkiye Scholarships (Türkiye Bursları) & ITU Foundation Awards",
    "ranking": "#279 Global (QS 2027)",
    "rankingSource": "QS World University Rankings 2027 (#279 Global, #1 Türkiye) & QS Subject Rankings 2026",
    "qsSubjectRankings": "Petroleum Eng #39 Global, Mining Eng #43 Global, Architecture 51-100, Civil Eng 51-100, Electrical Eng #119",
    "coverage": "Full Ride",
    "amountValue": "100% Tuition Waiver + TRY 3,500 - 6,500/mo Stipend + Free Dormitory + Airfare",
    "tuitionFee": "TRY 12,000 - TRY 35,000/yr (~$350 - $1,000 USD for self-financed)",
    "tuitionAmountNumeric": 800,
    "hasFullRide": True,
    "hasPartialAid": True,
    "hasFinancialAid": True,
    "financialAidType": "Merit & Need-Based",
    "financialAidDetails": "ITU is a top destination for Türkiye Scholarships (Türkiye Bursları), offering 100% tuition waiver + 1-year Turkish language prep + monthly living stipend (TRY 3,500–6,500) + free university dormitory + flight tickets + health insurance. ITU also provides ITU Foundation Success Scholarships.",
    "minGpa": "3.2 / 4.0",
    "minSat": "1300+",
    "satRequirementCategory": "1300",
    "satPolicyDetails": "SAT score (minimum 1300 overall, 650 math) or national exam required for international undergraduate admissions.",
    "minIelts": "6.5+",
    "ieltsCategory": "6.5",
    "toeflRequirement": "84+",
    "commonAppAccepted": False,
    "applicationPortalDetails": "Türkiye Bursları Portal (turkiyeburslari.gov.tr) & ITU International Admissions Portal",
    "acceptanceRate": "12% - 18%",
    "deadline": "Feb 20 (Türkiye Bursları) / Jul 15 (ITU Direct International Applications)",
    "description": "Istanbul Technical University (ITU) is Türkiye's premier engineering & tech university (#279 Global), world-leading in Petroleum Engineering (#39), Mining (#43), Architecture, and Civil Engineering.",
    "overviewLong": "Founded in 1773 under Sultan Mustafa III as the Royal School of Naval Engineering, ITU is one of the world's oldest technical universities (#279 globally in QS 2027). Located in Istanbul across 5 campuses, ITU holds 25+ ABET-accredited engineering programs.",
    "topProgramsList": [
      {
        "name": "Petroleum Engineering",
        "ranking": "#39 Global (#1 in Türkiye)",
        "description": "Türkiye's leading energy engineering program, backed by advanced rock mechanics, drilling, and reservoir characterization labs."
      },
      {
        "name": "Mining Engineering",
        "ranking": "#43 Global",
        "description": "World-famous mining engineering faculty specializing in sustainable mineral extraction, tunneling, rock mechanics, and mineral processing technology."
      },
      {
        "name": "Architecture & Built Environment",
        "ranking": "51–100 Global in QS",
        "description": "Historic architecture faculty in Istanbul, renowned for historic urban restoration, earthquake-resistant structural architecture, and green building design."
      },
      {
        "name": "Civil & Structural Engineering",
        "ranking": "51–100 Global in QS",
        "description": "Legendary civil engineering department, renowned for earthquake engineering, mega-bridge structural analysis, and transportation infrastructure."
      },
      {
        "name": "Electrical & Electronics Engineering",
        "ranking": "#119 Global in QS",
        "description": "ABET-accredited engineering program with focus on telecommunications, microelectronics, power grids, robotics, and signal processing."
      }
    ],
    "allScholarshipsList": [
      {
        "id": "itusch-1",
        "title": "Türkiye Scholarships (Türkiye Bursları) at ITU",
        "amount": "100% tuition waiver + TRY 3,500–6,500/mo stipend + dorm + flight + insurance",
        "coverage": "Full Ride",
        "eligibility": "International candidates worldwide applying via Türkiye Bursları portal.",
        "description": "Comprehensive full government scholarship covering tuition, monthly allowance, dormitory, flights, and healthcare.",
        "deadline": "Feb 20",
        "requiresSeparateApp": True
      },
      {
        "id": "itusch-2",
        "title": "ITU Foundation Success Scholarship",
        "amount": "Monthly cash stipend for 9 months + free dining hall meals",
        "coverage": "Partial Aid",
        "eligibility": "Enrolled ITU students entering with top YKS placement ranks or high academic GPAs.",
        "description": "Merit award funded by ITU Development Foundation.",
        "deadline": "Oct 15",
        "requiresSeparateApp": True
      }
    ]
}

u_turkey_2 = {
    "id": "uni-turkey-002",
    "universityName": "Koç University",
    "location": "Istanbul, Türkiye",
    "country": "Türkiye",
    "flag": "🇹🇷",
    "foundingYear": "1993",
    "scholarshipTitle": "Koç University Full International Scholarships & PhD Fellowships",
    "ranking": "#=329 Global (QS 2027)",
    "rankingSource": "QS World University Rankings 2027 (#=329 Global, Top Private Univ) & QS Subject Rankings 2026",
    "qsSubjectRankings": "Engineering & Tech #243, CS #243, Business #252, Social Sciences #252, Medicine",
    "coverage": "Full Ride",
    "amountValue": "100% Tuition Waiver + Free Campus Housing + TRY 4,000 - 15,000/mo Stipend + Laptop",
    "tuitionFee": "100% English Taught ($21,500 - $26,500/yr without scholarship)",
    "tuitionAmountNumeric": 24000,
    "hasFullRide": True,
    "hasPartialAid": True,
    "hasFinancialAid": True,
    "financialAidType": "Merit-Based",
    "financialAidDetails": "Koç University offers 100% English-taught degrees and awards full-ride Koç International Scholarships (100% tuition waiver + free campus housing + monthly living stipend TRY 4,000–8,000 + laptop allowance) and Koç Graduate Fellowships (100% tuition waiver + housing stipend + TRY 10,000–15,000/mo stipend + health insurance).",
    "minGpa": "3.5 / 4.0",
    "minSat": "1350+",
    "satRequirementCategory": "1300",
    "satPolicyDetails": "100% English medium. SAT score (1350+ overall) or ACT/IB diploma required.",
    "minIelts": "6.5+",
    "ieltsCategory": "6.5",
    "toeflRequirement": "80+",
    "commonAppAccepted": False,
    "applicationPortalDetails": "Koç University Online Application Portal (apply.ku.edu.tr)",
    "acceptanceRate": "8% - 12%",
    "deadline": "Mar 31 (Early Round) / Jun 30 (Regular Round)",
    "description": "Koç University in Istanbul is Türkiye's top-ranked private research university (#329 Global), 100% English-taught, world-famous in CS (KUIS AI Center), Engineering (#243), Business, and Medicine.",
    "overviewLong": "Founded in 1993 in Istanbul by the Vehbi Koç Foundation, Koç University is an elite private research university situated at the Rumelifeneri campus in Sarıyer. Housing the KUIS AI Center and Koç University Hospital.",
    "topProgramsList": [
      {
        "name": "Engineering & Technology",
        "ranking": "#243 Global in QS",
        "description": "Premier private engineering faculty offering 100% English-taught degrees in computer, electrical, mechanical, industrial, and chemical engineering."
      },
      {
        "name": "Computer Science & Information Systems",
        "ranking": "#243 Global",
        "description": "Top-tier CS division housed at the Rumelifeneri campus, featuring KUIS AI Research Center (leading AI center in Türkiye), robotics, and computer vision."
      },
      {
        "name": "Business Administration & Management",
        "ranking": "#252 Global",
        "description": "Triple-Crown Accredited Business School (AMBA, EQUIS, AACSB), leading Türkiye in executive MBA, finance, management, and international strategy."
      },
      {
        "name": "Medicine & Health Sciences",
        "ranking": "Global Top 200",
        "description": "Elite medical school operating the state-of-the-art Koç University Hospital in Topkapı, featuring cutting-edge biomedical research and clinical rotations."
      },
      {
        "name": "Social Sciences, International Relations & Law",
        "ranking": "#252 Global",
        "description": "High-impact social science division offering international relations, psychology, economics, and law with top research faculty."
      }
    ],
    "allScholarshipsList": [
      {
        "id": "kocsch-1",
        "title": "Koç University Full International Scholarship",
        "amount": "100% tuition waiver + free housing + TRY 4,000–8,000/mo stipend + laptop",
        "coverage": "Full Ride",
        "eligibility": "Exceptionally qualified international Bachelor's, Master's, and PhD applicants evaluated holistically.",
        "description": "Full-ride scholarship covering full tuition, dormitory accommodation, living stipend, health insurance, and computer allowance.",
        "deadline": "Mar 31 (Early) / Jun 30 (Regular)",
        "requiresSeparateApp": False
      },
      {
        "id": "kocsch-2",
        "title": "Koç Graduate PhD Scholarship",
        "amount": "100% tuition waiver + housing stipend + TRY 10,000–15,000/mo stipend + travel grant",
        "coverage": "Full Ride",
        "eligibility": "All admitted PhD candidates regardless of nationality.",
        "description": "Comprehensive doctoral fellowship package covering tuition, living salary, housing, and conference travel.",
        "deadline": "May 31",
        "requiresSeparateApp": False
      }
    ]
}

u_turkey_3 = {
    "id": "uni-turkey-003",
    "universityName": "Middle East Technical University",
    "location": "Ankara, Türkiye",
    "country": "Türkiye",
    "flag": "🇹🇷",
    "foundingYear": "1956",
    "scholarshipTitle": "Türkiye Scholarships & METU Foundation Merit Awards",
    "ranking": "#305 Global (QS 2027)",
    "rankingSource": "QS World University Rankings 2027 (#305 Global, #1 Western Asia) & QS Subject Rankings 2026",
    "qsSubjectRankings": "Petroleum Eng #10 Global, Civil Eng 51-100, Engineering & Tech #103, Electrical Eng #133, Architecture 151-200",
    "coverage": "Full Ride",
    "amountValue": "100% Tuition Waiver + TRY 3,500 - 6,500/mo Stipend + Free Dormitory + Airfare",
    "tuitionFee": "100% English Taught (TRY 15,000 - TRY 40,000/yr ~$400 - $1,100 USD)",
    "tuitionAmountNumeric": 900,
    "hasFullRide": True,
    "hasPartialAid": True,
    "hasFinancialAid": True,
    "financialAidType": "Merit & Need-Based",
    "financialAidDetails": "METU is a 100% English-medium public university and top host for Türkiye Scholarships (100% tuition waiver + monthly stipend TRY 3,500–6,500 + free campus dormitory + airfare + health insurance), METU Development Foundation Merit Scholarships, and graduate assistantships.",
    "minGpa": "3.3 / 4.0",
    "minSat": "1300+",
    "satRequirementCategory": "1300",
    "satPolicyDetails": "100% English-medium instruction. SAT score (minimum 1300 overall, 650 math) required for international applicants.",
    "minIelts": "6.5+",
    "ieltsCategory": "6.5",
    "toeflRequirement": "84+",
    "commonAppAccepted": False,
    "applicationPortalDetails": "METU International Student Portal (iso.metu.edu.tr)",
    "acceptanceRate": "10% - 15%",
    "deadline": "Feb 20 (Türkiye Bursları) / Jul 10 (METU Direct International Applications)",
    "description": "Middle East Technical University (METU / ODTÜ) in Ankara is Türkiye's leading English-medium engineering university (#305 Global), ranking Top 10 globally in Petroleum Engineering (#10).",
    "overviewLong": "Founded in 1956 in Ankara, Middle East Technical University (METU / ODTÜ) is a world-renowned public technical university (#305 globally in QS 2027). All courses at METU are taught in English.",
    "topProgramsList": [
      {
        "name": "Petroleum & Natural Gas Engineering",
        "ranking": "#10 Global (#1 in Middle East)",
        "description": "World-famous energy engineering department ranking in global Top 10, featuring advanced drilling technology, fluid mechanics, and reservoir modeling."
      },
      {
        "name": "Civil & Structural Engineering",
        "ranking": "51–100 Global in QS",
        "description": "Legendary civil engineering department in Ankara, renowned for earthquake engineering, structural dynamics, water resources, and geotechnical engineering."
      },
      {
        "name": "Engineering & Technology Broad Field",
        "ranking": "#103 Global in QS",
        "description": "ABET-accredited engineering division offering electrical, mechanical, aerospace, computer, and industrial engineering."
      },
      {
        "name": "Electrical & Electronics Engineering",
        "ranking": "#133 Global in QS",
        "description": "Premier electrical engineering program in Türkiye, providing research labs for microelectronics, telecommunications, signal processing, and defense tech."
      },
      {
        "name": "Architecture & Urban Planning",
        "ranking": "151–200 Global in QS",
        "description": "Historic architecture school emphasizing sustainable urban design, structural innovation, digital fabrication, and architectural theory."
      }
    ],
    "allScholarshipsList": [
      {
        "id": "metusch-1",
        "title": "Türkiye Scholarships (Türkiye Bursları) at METU",
        "amount": "100% tuition waiver + TRY 3,500–6,500/mo stipend + dorm + flight + insurance",
        "coverage": "Full Ride",
        "eligibility": "International candidates applying through Türkiye Bursları online portal.",
        "description": "Full government scholarship covering tuition, living allowance, housing, airfare, and healthcare.",
        "deadline": "Feb 20",
        "requiresSeparateApp": True
      },
      {
        "id": "metusch-2",
        "title": "METU Development Foundation Merit Scholarship",
        "amount": "Monthly stipend + free campus dining hall meal pass + book allowance",
        "coverage": "Partial Aid",
        "eligibility": "Top-ranked international and local degree students maintaining GPA ≥ 3.5/4.0.",
        "description": "Merit award funded by the university foundation.",
        "deadline": "Oct 15",
        "requiresSeparateApp": True
      }
    ]
}

u_turkey_4 = {
    "id": "uni-turkey-004",
    "universityName": "Sabancı University",
    "location": "Istanbul, Türkiye",
    "country": "Türkiye",
    "flag": "🇹🇷",
    "foundingYear": "1996",
    "scholarshipTitle": "Sabancı International Future Leaders Scholarship & PhD Fellowships",
    "ranking": "#404 Global (QS 2027)",
    "rankingSource": "QS World University Rankings 2027 (#404 Global) & QS Subject Rankings 2026",
    "qsSubjectRankings": "Engineering & Natural Sciences #266, Business #251, CS 351-400, Politics 251-300",
    "coverage": "Full Ride",
    "amountValue": "100% Tuition Waiver + Free Dormitory + TRY 3,000 - 15,000/mo Stipend + Insurance",
    "tuitionFee": "100% English Taught ($22,000/yr without scholarship)",
    "tuitionAmountNumeric": 22000,
    "hasFullRide": True,
    "hasPartialAid": True,
    "hasFinancialAid": True,
    "financialAidType": "Merit-Based",
    "financialAidDetails": "Sabancı University is a 100% English-medium research university offering Sabancı Future Leaders Scholarships (100% tuition waiver + free dormitory accommodation + monthly stipend TRY 3,000–5,000) and Sabancı Graduate PhD Scholarships (100% tuition waiver + housing + TRY 10,000–15,000/mo living stipend + conference funding).",
    "minGpa": "3.3 / 4.0",
    "minSat": "1300+",
    "satRequirementCategory": "1300",
    "satPolicyDetails": "100% English-medium instruction. SAT score (1300+ overall) or ACT/IB/high school GPA considered automatically during admission.",
    "minIelts": "6.5+",
    "ieltsCategory": "6.5",
    "toeflRequirement": "80+",
    "commonAppAccepted": False,
    "applicationPortalDetails": "Sabancı University Online Application Portal (sabanciuniv.edu)",
    "acceptanceRate": "12% - 18%",
    "deadline": "Apr 30 (Early Round) / Aug 1 (Final Rolling)",
    "description": "Sabancı University in Istanbul is a top innovative research university (#404 Global), 100% English-taught, excelling in Engineering (#266), Computer Science, Mechatronics, and Business (AACSB).",
    "overviewLong": "Founded in 1996 in Tuzla, Istanbul by the Sabancı Foundation, Sabancı University is a premier interdisciplinary research institution. Home to SUNUM (Nanotechnology Research Center).",
    "topProgramsList": [
      {
        "name": "Engineering & Natural Sciences (FENS)",
        "ranking": "#266 Global in QS",
        "description": "Interdisciplinary engineering school offering 100% English-taught programs in computer science, mechatronics, industrial engineering, materials science, and molecular biology."
      },
      {
        "name": "Computer Science & Data Analytics",
        "ranking": "351–400 Global in QS",
        "description": "High-tech computer science division housed at the Tuzla campus, featuring SUNUM (Sabancı University Nanotechnology Research Center) and specialized AI labs."
      },
      {
        "name": "Business Administration & Finance (AACSB Accredited)",
        "ranking": "251–300 Global",
        "description": "AACSB-accredited Sabancı Business School, offering top finance, management, business analytics, and executive education tracks."
      },
      {
        "name": "Political Science, International Studies & Economics",
        "ranking": "251–300 Global",
        "description": "Leading social science faculty offering flexible interdisciplinary tracks in global political economy, international relations, and conflict analysis."
      },
      {
        "name": "Mechatronics & Robotics Engineering",
        "ranking": "Global Top 250",
        "description": "Pioneer in mechatronics engineering in Türkiye, combining mechanical design, electronics, control systems, and autonomous robotics."
      }
    ],
    "allScholarshipsList": [
      {
        "id": "sabancisch-1",
        "title": "Sabancı International Future Leaders Scholarship",
        "amount": "100% tuition waiver + free dorm accommodation + TRY 3,000–5,000/mo stipend",
        "coverage": "Full Ride",
        "eligibility": "Outstanding international undergraduate applicants evaluated automatically during admission.",
        "description": "Full scholarship awarded automatically upon admission based on SAT, ACT, IB, or high school GPA.",
        "deadline": "Apr 30 (Early) / Aug 1 (Final)",
        "requiresSeparateApp": False
      },
      {
        "id": "sabancisch-2",
        "title": "Sabancı Graduate PhD Scholarship",
        "amount": "100% tuition waiver + free housing + TRY 10,000–15,000/mo stipend + conference grants",
        "coverage": "Full Ride",
        "eligibility": "Admitted PhD applicants across all graduate programs.",
        "description": "Comprehensive doctoral research fellowship covering tuition, campus apartment, monthly living salary, and travel funding.",
        "deadline": "May 31",
        "requiresSeparateApp": False
      }
    ]
}

print('Saudi and Turkey JSON ready')
