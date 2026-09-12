import json

# Poland, Hungary, Saudi Arabia, Türkiye university definitions

u_poland_1 = {
    "id": "uni-poland-001",
    "universityName": "University of Warsaw",
    "location": "Warsaw, Poland",
    "country": "Poland",
    "flag": "🇵🇱",
    "foundingYear": "1816",
    "scholarshipTitle": "Poland NAWA Banach Scholarship & UW Rector's Merit Grants",
    "ranking": "#271 Global (QS 2027)",
    "rankingSource": "QS World University Rankings 2027 (#271 Global, #1 Poland) & QS Subject Rankings 2026",
    "qsSubjectRankings": "Mathematics Top 100 (MIMUW), Physics & Astronomy Top 150, Economics, Politics, Psychology",
    "coverage": "Full Ride",
    "amountValue": "Full Tuition Exemption + PLN 1,800/mo NAWA Grant or PLN 4,733/mo PhD Stipend",
    "tuitionFee": "Free (Polish/EU in Polish) | €2,000 - €4,500/yr (Non-EU English Tracks)",
    "tuitionAmountNumeric": 3000,
    "hasFullRide": True,
    "hasPartialAid": True,
    "hasFinancialAid": True,
    "financialAidType": "Merit & Need-Based",
    "financialAidDetails": "UW students access the Poland NAWA Banach Scholarship (100% tuition waiver + PLN 1,800/mo living grant + travel allowance), UW Rector's Merit Scholarships (monthly cash grants), and UW Doctoral School Stipends (PLN 3,076–4,733/mo tax-free stipend + tuition waiver for 4 years).",
    "minGpa": "3.2 / 4.0",
    "minSat": "Optional",
    "satRequirementCategory": "Optional",
    "satPolicyDetails": "Secondary school diploma or Matura equivalent evaluated for international equivalence.",
    "minIelts": "6.5+",
    "ieltsCategory": "6.5",
    "toeflRequirement": "87+",
    "commonAppAccepted": False,
    "applicationPortalDetails": "University of Warsaw Online Recruitment System (IRK - irk.uw.edu.pl)",
    "acceptanceRate": "20% - 25%",
    "deadline": "Jul 10 (International Undergraduate & Graduate Admissions)",
    "description": "University of Warsaw is Poland's premier research university (#271 Global), legendary for Mathematics & Computer Science (MIMUW), Physics, Economics, and International Relations.",
    "overviewLong": "Founded in 1816, the University of Warsaw (UW) is Poland's largest and top-ranked university (#271 globally in QS 2027). Home to the world-famous Faculty of Mathematics, Informatics and Mechanics (MIMUW), UW has produced world champion competitive programmers (ICPC) and Nobel laureates.",
    "topProgramsList": [
      {
        "name": "Mathematics & Computer Science (MIMUW)",
        "ranking": "Global Top 100 (#1 in Poland)",
        "description": "World-famous Faculty of Mathematics, Informatics and Mechanics, legendary for competitive programming triumphs (ICPC champions) and theoretical CS research."
      },
      {
        "name": "Physics & Quantum Astronomy",
        "ranking": "Global Top 150",
        "description": "Premier physics center participating in CERN, LIGO, and quantum optics breakthroughs with state-of-the-art quantum photonics labs."
      },
      {
        "name": "International Relations & Political Science",
        "ranking": "Global Top 150",
        "description": "Poland's top political science faculty, offering English-taught degrees in international security, European governance, and Eastern European studies."
      },
      {
        "name": "Economics & Quantitative Finance",
        "ranking": "Global Top 200",
        "description": "Quantitative economics department offering double degrees with European partners, emphasizing econometric modeling, macro-forecasting, and financial engineering."
      },
      {
        "name": "Psychology & Cognitive Science",
        "ranking": "Global Top 200",
        "description": "Leading psychology department in Central Europe with specialized labs for cognitive neuroscience, eye-tracking, developmental psychology, and clinical research."
      }
    ],
    "allScholarshipsList": [
      {
        "id": "uwsch-1",
        "title": "Poland NAWA Banach Scholarship Program",
        "amount": "100% tuition exemption + PLN 1,800/month living stipend + travel allowance",
        "coverage": "Full Ride",
        "eligibility": "Master's degree applicants from eligible developing countries in STEM and social sciences.",
        "description": "National Polish government scholarship covering full tuition, monthly living allowance, and travel grant.",
        "deadline": "Mar 31",
        "requiresSeparateApp": True
      },
      {
        "id": "uwsch-2",
        "title": "UW PhD Doctoral School Stipend",
        "amount": "PLN 3,076/mo to PLN 4,733/mo tax-free stipend + 100% tuition waiver",
        "coverage": "Full Ride",
        "eligibility": "All admitted PhD candidates in UW Doctoral Schools.",
        "description": "Guaranteed 4-year doctoral research fellowship with tax-free monthly salary.",
        "deadline": "Jun 15",
        "requiresSeparateApp": False
      },
      {
        "id": "uwsch-3",
        "title": "University of Warsaw Rector's Merit Scholarship",
        "amount": "PLN 800 to PLN 1,500/month cash grant for 10 months",
        "coverage": "Partial Aid",
        "eligibility": "Top 10% of enrolled UW students in each program based on academic, research, or athletic achievements.",
        "description": "Monthly academic excellence scholarship granted per academic year.",
        "deadline": "Oct 15",
        "requiresSeparateApp": True
      }
    ]
}

u_hungary_1 = {
    "id": "uni-hungary-001",
    "universityName": "Eötvös Loránd University",
    "location": "Budapest, Hungary",
    "country": "Hungary",
    "flag": "🇭🇺",
    "foundingYear": "1635",
    "scholarshipTitle": "Stipendium Hungaricum Scholarship & Hungarian Diaspora Grants",
    "ranking": "#595 Global (QS 2027)",
    "rankingSource": "QS World University Rankings 2027 (#595 Global, #1 Hungary) & QS Subject Rankings 2026",
    "qsSubjectRankings": "Archaeology 101-150 (#1 Hungary), Linguistics 151-200 (#1 Hungary), Psychology 201-250 (#1 Hungary), Math 251-300",
    "coverage": "Full Ride",
    "amountValue": "100% Tuition Waiver + HUF 43,700–140,000/mo Stipend + Free Dormitory + Health Insurance",
    "tuitionFee": "€2,500 - €4,200/yr (Self-Financed) | €0 with Stipendium Hungaricum",
    "tuitionAmountNumeric": 3200,
    "hasFullRide": True,
    "hasPartialAid": True,
    "hasFinancialAid": True,
    "financialAidType": "Merit & Need-Based",
    "financialAidDetails": "ELTE is Hungary's top host for the Stipendium Hungaricum Scholarship (100% tuition waiver + HUF 43,700/mo stipend for Bachelor/Master or HUF 140,000/mo for PhD + free dormitory or HUF 40,000/mo housing grant + medical insurance). ELTE also offers Hungarian Diaspora Scholarships and academic tuition fee reductions.",
    "minGpa": "3.0 / 4.0",
    "minSat": "Optional",
    "satRequirementCategory": "Optional",
    "satPolicyDetails": "High school leaving diploma required. Oral entrance interview or online exam required for most programs.",
    "minIelts": "5.5+",
    "ieltsCategory": "5.5",
    "toeflRequirement": "72+",
    "commonAppAccepted": False,
    "applicationPortalDetails": "DreamApply Hungary Portal & ELTE Online Application Portal (apply.elte.hu)",
    "acceptanceRate": "25% - 30%",
    "deadline": "Jan 15 (Stipendium Hungaricum) / May 30 (Self-Financed First Call)",
    "description": "Eötvös Loránd University (ELTE) is Hungary's top-ranked university (#595 Global), excelling in Archaeology (101–150), Linguistics (151–200), Psychology, and Mathematics.",
    "overviewLong": "Founded in 1635, Eötvös Loránd University (ELTE) is Hungary's oldest and largest university, located in Budapest. ELTE counts Nobel laureates and Wolf Prize winners among its alumni, excelling in mathematics, natural sciences, and humanities.",
    "topProgramsList": [
      {
        "name": "Archaeology & Heritage Studies",
        "ranking": "101–150 Global (#1 in Hungary)",
        "description": "ELTE's highest-ranked subject, renowned for Danube basin excavations, Roman provincial archaeology, bioarchaeology, and digital heritage preservation."
      },
      {
        "name": "Linguistics & Philology",
        "ranking": "151–200 Global (#1 in Hungary)",
        "description": "Leading European center for Finno-Ugric languages, theoretical linguistics, phonetics, and applied language technology."
      },
      {
        "name": "Psychology & Cognitive Science",
        "ranking": "201–250 Global (#1 in Hungary)",
        "description": "Top psychology faculty in Hungary operating specialized labs for developmental psychology, hypnosis, addiction studies, and brain imaging."
      },
      {
        "name": "Mathematics & Computer Science",
        "ranking": "251–300 Global (#1 in Hungary)",
        "description": "World-famous mathematics institute (alma mater of Abel Prize winners) excelling in combinatorics, graph theory, geometry, and algorithms."
      },
      {
        "name": "Computer Science & Software Engineering",
        "ranking": "Global Top 300",
        "description": "Modern Faculty of Informatics providing cutting-edge computer science, data science, cybersecurity, and autonomous systems tracks in Budapest."
      }
    ],
    "allScholarshipsList": [
      {
        "id": "eltesch-1",
        "title": "Stipendium Hungaricum Scholarship",
        "amount": "100% tuition waiver + HUF 43,700/mo stipend + dorm accommodation + health coverage",
        "coverage": "Full Ride",
        "eligibility": "International students applying from eligible partner countries worldwide.",
        "description": "Full state scholarship funded by the Hungarian government covering tuition, housing, living stipend, and medical insurance.",
        "deadline": "Jan 15",
        "requiresSeparateApp": True
      },
      {
        "id": "eltesch-2",
        "title": "Hungarian Diaspora Scholarship",
        "amount": "100% tuition waiver + monthly stipend + housing allowance + health insurance",
        "coverage": "Full Ride",
        "eligibility": "Applicants of Hungarian heritage living in the diaspora outside Europe.",
        "description": "Full scholarship program for members of the Hungarian diaspora worldwide.",
        "deadline": "Jan 31",
        "requiresSeparateApp": True
      },
      {
        "id": "eltesch-3",
        "title": "ELTE Academic Excellence Fee Reduction",
        "amount": "10% to 50% tuition reduction for subsequent semesters",
        "coverage": "Partial Aid",
        "eligibility": "Self-financed international students achieving GPA > 4.5/5.0.",
        "description": "Merit tuition discount awarded to self-funded international students.",
        "deadline": "Jul 15 / Jan 15",
        "requiresSeparateApp": True
      }
    ]
}

u_hungary_2 = {
    "id": "uni-hungary-002",
    "universityName": "University of Debrecen",
    "location": "Debrecen, Hungary",
    "country": "Hungary",
    "flag": "🇭🇺",
    "foundingYear": "1538",
    "scholarshipTitle": "Stipendium Hungaricum & FAO Agricultural Fellowships",
    "ranking": "#563 Global (QS 2027)",
    "rankingSource": "QS World University Rankings 2027 (#563 Global) & QS Subject Rankings 2026",
    "qsSubjectRankings": "Agriculture & Forestry 251-300 (#2 Hungary), Medicine & Life Sciences, Computer Science, Pharmacy",
    "coverage": "Full Ride",
    "amountValue": "100% Tuition Waiver + HUF 43,700/mo Stipend + Free Campus Housing",
    "tuitionFee": "€5,500 - €8,500/yr (Self-Financed Medicine €16,900) | €0 with Stipendium Hungaricum",
    "tuitionAmountNumeric": 6500,
    "hasFullRide": True,
    "hasPartialAid": True,
    "hasFinancialAid": True,
    "financialAidType": "Merit & Need-Based",
    "financialAidDetails": "Debrecen hosts the Stipendium Hungaricum Scholarship (100% tuition waiver + monthly stipend + free campus housing + medical insurance), FAO Hungarian Government Agriculture Fellowships, and institutional tuition discounts.",
    "minGpa": "3.0 / 4.0",
    "minSat": "Optional",
    "satRequirementCategory": "Optional",
    "satPolicyDetails": "Admissions based on secondary school transcript and university entrance interview/test.",
    "minIelts": "6.0+",
    "ieltsCategory": "6.0",
    "toeflRequirement": "79+",
    "commonAppAccepted": False,
    "applicationPortalDetails": "University of Debrecen Online Portal (edu.unideb.hu) & DreamApply Hungary",
    "acceptanceRate": "30% - 35%",
    "deadline": "Jan 15 (Stipendium Hungaricum) / Jun 15 (Self-Financed Direct Admission)",
    "description": "University of Debrecen is a leading Hungarian research university (#563 Global), internationally famous for Medicine, Agriculture & Forestry (251–300), and Computer Science.",
    "overviewLong": "Tracing its history back to 1538, the University of Debrecen (UD) is one of Hungary's premier comprehensive research universities, educating 30,000 students including 7,000 international students.",
    "topProgramsList": [
      {
        "name": "Medicine, Dentistry & Pharmacy",
        "ranking": "Global Top 350 (WHO / ECFMG Recognized)",
        "description": "Internationally accredited medical school (WHO, US ECFMG, GMC UK recognized) with state-of-the-art simulation center and university clinical complex."
      },
      {
        "name": "Agriculture, Food Science & Biotechnology",
        "ranking": "251–300 Global (#2 in Hungary)",
        "description": "Historic agricultural faculty leading research in precision farming, crop protection, food technology, and animal nutrition."
      },
      {
        "name": "Computer Science & Business Informatics",
        "ranking": "Global Top 400",
        "description": "Modern informatics faculty offering specialized training in cloud engineering, software technology, data engineering, and IT management."
      },
      {
        "name": "Biomedical Engineering & Natural Sciences",
        "ranking": "Global Top 400",
        "description": "Interdisciplinary division combining molecular biology, environmental chemistry, bio-nanotechnology, and material science."
      },
      {
        "name": "Humanities, Music & Educational Sciences",
        "ranking": "Global Top 450",
        "description": "Comprehensive faculty providing English-taught studies in American studies, British literature, music performance, and intercultural communication."
      }
    ],
    "allScholarshipsList": [
      {
        "id": "debrecensch-1",
        "title": "Stipendium Hungaricum at Debrecen",
        "amount": "100% tuition waiver + HUF 43,700/mo stipend + dorm accommodation + health coverage",
        "coverage": "Full Ride",
        "eligibility": "International candidates nominated by sending partner authorities.",
        "description": "Full scholarship covering tuition, housing, living stipend, and healthcare.",
        "deadline": "Jan 15",
        "requiresSeparateApp": True
      },
      {
        "id": "debrecensch-2",
        "title": "FAO Hungarian Government Scholarship",
        "amount": "Full tuition waiver + housing + monthly stipend",
        "coverage": "Full Ride",
        "eligibility": "Master's applicants in Agricultural Sciences and Food Safety from target countries.",
        "description": "United Nations FAO co-funded agricultural study scholarship.",
        "deadline": "Feb 28",
        "requiresSeparateApp": True
      },
      {
        "id": "debrecensch-3",
        "title": "Debrecen International Student Tuition Reduction",
        "amount": "10% to 30% reduction in tuition fees",
        "coverage": "Partial Aid",
        "eligibility": "Self-paying international degree students maintaining top cumulative GPAs.",
        "description": "Merit tuition reduction granted to high-achieving self-funded students.",
        "deadline": "Jul 31",
        "requiresSeparateApp": True
      }
    ]
}

print('Poland and Hungary JSON ready')
