import json, re

# Define all 23 universities with benchmark-quality descriptions, explicit scholarship deadlines, exact rankings, and complete financial details

u_spain_1 = {
    "id": "uni-spain-001",
    "universityName": "University of Barcelona",
    "location": "Barcelona, Spain",
    "country": "Spain",
    "flag": "🇪🇸",
    "foundingYear": "1837",
    "scholarshipTitle": "Spanish Ministry General Scholarship & UB Doctoral FI Fellowships",
    "ranking": "#165 Global (QS 2027)",
    "rankingSource": "QS World University Rankings 2027 (#165 Global, #1 in Spain) & QS Subject Rankings 2026",
    "qsSubjectRankings": "Medicine Top 50 (#1 Spain), Data Science & AI Top 100 (#1 Spain), Computer Science Top 100 (#1 Spain), Pharmacy Top 100",
    "coverage": "Full Ride",
    "amountValue": "Full Tuition Waiver + €17,800/yr PhD Salary or €3,000 Ministry Grant",
    "tuitionFee": "€1,200 - €2,800/yr (EU) | €2,800 - €4,500/yr (Non-EU)",
    "tuitionAmountNumeric": 3200,
    "hasFullRide": True,
    "hasPartialAid": True,
    "hasFinancialAid": True,
    "financialAidType": "Need & Merit-Based",
    "financialAidDetails": "UB students access Spanish Ministry of Education General Scholarships (full tuition waiver + living stipends up to €3,000), Catalan AGAUR Grants (Beques Equitat), and UB emergency tuition relief. Doctoral researchers receive full FI research contracts (€17,800/yr salary + tuition waiver).",
    "minGpa": "3.2 / 4.0",
    "minSat": "Optional / Selectividad",
    "satRequirementCategory": "Optional",
    "satPolicyDetails": "EU and international students present high school transcripts. Spanish UNEDasiss accreditation or PCE exams apply for competitive degree tracks.",
    "minIelts": "6.5+",
    "ieltsCategory": "6.5",
    "toeflRequirement": "85+",
    "commonAppAccepted": False,
    "applicationPortalDetails": "University of Barcelona Portal & Catalan University Admissions Portal (Accesnet)",
    "acceptanceRate": "15% - 20%",
    "deadline": "Jul 10 (First Round) / Sep 1 (Final Round)",
    "description": "University of Barcelona is Spain's top-ranked comprehensive public university (#165 Global), leading nationally in Medicine (#1 Spain), Data Science & AI (#1 Spain), CS, and Life Sciences.",
    "overviewLong": "Founded in 1837 with roots in 1450, the University of Barcelona (UB) is Catalonia's oldest higher education institution and Spain's top-ranked comprehensive research university (#165 globally in QS 2027). UB operates across six major Barcelona campuses including Plaça Universitat, Health Sciences at Bellvitge and Hospital Clínic, and Diagonal Knowledge Gateway. Housing 60,000 students, UB produces over 25% of Catalonia's research output.",
    "topProgramsList": [
      {
        "name": "Medicine & Health Sciences",
        "ranking": "Global Top 50 (#1 in Spain)",
        "description": "Integrated with 5 major university teaching hospitals including Hospital Clínic and Bellvitge, UB's medical faculty is Spain's premier center for clinical oncology, cardiology, neurosciences, immunology, and translational biomedical research."
      },
      {
        "name": "Data Science & Artificial Intelligence",
        "ranking": "Global Top 100 (#1 in Spain)",
        "description": "Delivered in direct collaboration with the Barcelona Supercomputing Center (BSC-CNS), providing advanced training in deep learning architectures, high-performance big data analytics, computer vision, and computational biology."
      },
      {
        "name": "Computer Science & Information Systems",
        "ranking": "Global Top 100 (#1 in Spain)",
        "description": "Spain's top computer science program, offering rigorous theoretical and applied software engineering, cybersecurity, distributed systems, and quantum information processing tied to 22@ Barcelona's innovation district."
      },
      {
        "name": "Pharmacy & Pharmacology",
        "ranking": "Global Top 100 (#1 in Spain)",
        "description": "Comprehensive pharmaceutical science curriculum supported by specialized research institutes in drug discovery, nanomedicine, molecular biophysics, clinical pharmacy, and industrial pharmaceutical technology."
      },
      {
        "name": "Biological & Environmental Sciences",
        "ranking": "Global Top 100 (#1 in Spain)",
        "description": "World-class biological science faculty excelling in marine ecology, molecular genetics, evolutionary biology, biodiversity conservation, and climate impact assessment across Mediterranean marine ecosystems."
      }
    ],
    "allScholarshipsList": [
      {
        "id": "ubsch-1",
        "title": "Spanish Ministry of Education General Scholarship",
        "amount": "Full Tuition Waiver + €1,700–€3,000 living grant",
        "coverage": "Full Tuition",
        "eligibility": "Enrolled undergraduate and master's students holding Spanish or EU citizenship/residency meeting family income criteria.",
        "description": "Provides 100% exemption from public tuition fees plus fixed cash stipends for living expenses, residence, and academic performance.",
        "deadline": "May 10",
        "requiresSeparateApp": True
      },
      {
        "id": "ubsch-2",
        "title": "Catalan AGAUR Equity Grants (Beques Equitat)",
        "amount": "20% to 80% tuition fee reduction",
        "coverage": "Partial Aid",
        "eligibility": "Degree students registered in Catalan public university bachelor's programs categorized by family income bracket.",
        "description": "Subsidizes official credit registration fees for undergraduate students studying at public universities in Catalonia.",
        "deadline": "Oct 15",
        "requiresSeparateApp": True
      },
      {
        "id": "ubsch-3",
        "title": "UB Institutional Emergency Aid (Ajuts de Matrícula)",
        "amount": "50% to 100% tuition relief grant",
        "coverage": "Partial Aid",
        "eligibility": "Enrolled UB degree students experiencing sudden economic vulnerability or unforeseen financial emergencies.",
        "description": "Direct financial relief fund administered by UB to prevent student dropouts due to temporary financial crises.",
        "deadline": "Jun 30",
        "requiresSeparateApp": True
      },
      {
        "id": "ubsch-4",
        "title": "UB Doctoral FI Research Fellowships (AGAUR FI)",
        "amount": "€17,800/yr salary + 100% tuition waiver + research stay funds",
        "coverage": "Full Ride",
        "eligibility": "Admitted PhD candidates with top academic transcripts pursuing full-time doctoral research at UB.",
        "description": "3 to 4-year predoctoral employment contract funded by the Catalan government providing salary, social security, and research mobility stipends.",
        "deadline": "Dec 15",
        "requiresSeparateApp": True
      }
    ]
}

u_spain_2 = {
    "id": "uni-spain-002",
    "universityName": "Complutense University of Madrid",
    "location": "Madrid, Spain",
    "country": "Spain",
    "flag": "🇪🇸",
    "foundingYear": "1499",
    "scholarshipTitle": "Santander-UCM Predoctoral Contracts & Madrid Research Fellowships",
    "ranking": "#199 Global (QS 2027)",
    "rankingSource": "QS World University Rankings 2027 (#199 Global) & QS Subject Rankings 2026",
    "qsSubjectRankings": "Dentistry #11 Global (#1 Spain), Veterinary Science #36 Global, Communication & Media #45 Global, Arts & Humanities #58 THE",
    "coverage": "Full Ride",
    "amountValue": "Full Tuition Waiver + €21,500/yr PhD Contract Salary",
    "tuitionFee": "€1,100 - €2,600/yr (EU) | €2,600 - €4,200/yr (Non-EU)",
    "tuitionAmountNumeric": 3000,
    "hasFullRide": True,
    "hasPartialAid": True,
    "hasFinancialAid": True,
    "financialAidType": "Merit & Need-Based",
    "financialAidDetails": "UCM offers predoctoral contracts with Banco Santander (€21,500/yr salary + tuition waiver), Community of Madrid predoctoral research grants (€19,800/yr stipend), Spanish Ministry General Grants, and UCM Extraordinary Merit Awards.",
    "minGpa": "3.1 / 4.0",
    "minSat": "Optional / PCE",
    "satRequirementCategory": "Optional",
    "satPolicyDetails": "International applicants submit high school credentials evaluated by UNEDasiss. Standardized SAT subject tests optional.",
    "minIelts": "6.5+",
    "ieltsCategory": "6.5",
    "toeflRequirement": "85+",
    "commonAppAccepted": False,
    "applicationPortalDetails": "UCM Online Portal & District Admissions Platform of Madrid (Distrito Único de Madrid)",
    "acceptanceRate": "20% - 25%",
    "deadline": "Jun 30 (Non-EU International) / Jul 15 (EU Students)",
    "description": "Complutense University of Madrid is Spain's premier historical capital university (#199 Global), world-renowned in Dentistry (#11), Veterinary Science (#36), Media, and Humanities.",
    "overviewLong": "Established in 1499 in Alcalá de Henares and moved to Madrid in 1836, Complutense University of Madrid (UCM) is one of the world's oldest and largest universities, located at Ciudad Universitaria in Madrid. Teaching over 70,000 students, UCM has educated Nobel laureates, heads of state, and literary icons.",
    "topProgramsList": [
      {
        "name": "Dentistry & Odontology",
        "ranking": "#11 Global (#1 in Spain)",
        "description": "Globally renowned dental medicine faculty operating a state-of-the-art university dental hospital, featuring specialized training in orthodontics, implantology, maxillofacial surgery, and periodontics."
      },
      {
        "name": "Veterinary Science",
        "ranking": "#36 Global (Top 3 in Spain)",
        "description": "Features an accredited veterinary teaching hospital and experimental farm, leading international research in animal pathology, food safety, zoonotic diseases, and livestock genetics."
      },
      {
        "name": "Communication & Media Studies",
        "ranking": "#45 Global (#1 in Spain)",
        "description": "Spain's premier school of journalism and audiovisual communication, directly connected to Madrid's national broadcasting networks, major publishing houses, and digital media studios."
      },
      {
        "name": "Arts & Humanities",
        "ranking": "#58 Global in THE (#1 in Spain)",
        "description": "Comprehensive humanities strength spanning Spanish literature, art history, archaeology, philosophy, and classical philology supported by historic Madrid archives."
      },
      {
        "name": "Law & Public Administration",
        "ranking": "#66 Global in THE",
        "description": "Historic legal faculty located in Spain's capital, offering dual degrees, European Union law specializations, and direct access to Spain's supreme court and constitutional bodies."
      }
    ],
    "allScholarshipsList": [
      {
        "id": "ucmsch-1",
        "title": "Santander-UCM Predoctoral Contracts",
        "amount": "€21,500/yr salary + 100% tuition waiver",
        "coverage": "Full Ride",
        "eligibility": "Competitive PhD applicants enrolled in accredited UCM doctoral programs.",
        "description": "4-year employment research contract co-funded by Banco Santander providing salary, health insurance, and research stays.",
        "deadline": "May 15",
        "requiresSeparateApp": True
      },
      {
        "id": "ucmsch-2",
        "title": "Community of Madrid Predoctoral Research Fellowships",
        "amount": "€19,800/yr stipend + tuition coverage",
        "coverage": "Full Ride",
        "eligibility": "Master's graduates entering STEM, social sciences, or humanities research at UCM.",
        "description": "Regional government research grants supporting full-time doctoral research in Madrid research centers.",
        "deadline": "Jun 15",
        "requiresSeparateApp": True
      },
      {
        "id": "ucmsch-3",
        "title": "UCM Extraordinary Merit Awards",
        "amount": "€1,500 cash prize + tuition credit for subsequent year",
        "coverage": "Partial Aid",
        "eligibility": "Undergraduate students achieving highest honors (Matrícula de Honor) in coursework.",
        "description": "Merit prizes awarded per academic department for top-ranked academic achievements.",
        "deadline": "Jul 30",
        "requiresSeparateApp": False
      },
      {
        "id": "ucmsch-4",
        "title": "Spanish Ministry General Tuition Grant",
        "amount": "Full tuition waiver + variable stipend up to €2,500",
        "coverage": "Partial Aid",
        "eligibility": "Spanish & EU residents meeting socioeconomic criteria.",
        "description": "National financial aid program covering official credit fees and living allowances.",
        "deadline": "May 10",
        "requiresSeparateApp": True
      }
    ]
}

u_spain_3 = {
    "id": "uni-spain-003",
    "universityName": "Universitat Autònoma de Barcelona",
    "location": "Bellaterra, Barcelona, Spain",
    "country": "Spain",
    "flag": "🇪🇸",
    "foundingYear": "1968",
    "scholarshipTitle": "UAB AGAUR FI Predoctoral Grants & Language Excellence Awards",
    "ranking": "#211 Global (QS 2027)",
    "rankingSource": "QS World University Rankings 2027 (#211 Global) & QS Subject Rankings 2026",
    "qsSubjectRankings": "Veterinary Science #25 Global, Linguistics #49 Global, Economics #66 Global, Sociology #67 Global, Medicine #81 Global",
    "coverage": "Full Ride",
    "amountValue": "Full Tuition Waiver + €18,200/yr Doctoral Stipend",
    "tuitionFee": "€1,200 - €2,700/yr (EU) | €2,800 - €4,300/yr (Non-EU)",
    "tuitionAmountNumeric": 3100,
    "hasFullRide": True,
    "hasPartialAid": True,
    "hasFinancialAid": True,
    "financialAidType": "Merit & Need-Based",
    "financialAidDetails": "UAB students benefit from Catalan AGAUR FI Predoctoral Grants (€18,200/yr + tuition waiver), UAB Language Mobility Grants, Erasmus+ mobility funding, and Spanish Ministry of Education general grants.",
    "minGpa": "3.1 / 4.0",
    "minSat": "Optional",
    "satRequirementCategory": "Optional",
    "satPolicyDetails": "International secondary qualifications validated via UNEDasiss.",
    "minIelts": "6.5+",
    "ieltsCategory": "6.5",
    "toeflRequirement": "85+",
    "commonAppAccepted": False,
    "applicationPortalDetails": "UAB Online Portal (uab.cat) & Catalan University Admissions Portal",
    "acceptanceRate": "18% - 22%",
    "deadline": "Jul 1 (International First Round) / Sep 5 (Final Round)",
    "description": "Universitat Autònoma de Barcelona is a leading European campus research university (#211 Global), excelling in Veterinary Science (#25), Linguistics (#49), Economics (#66), and Sociology.",
    "overviewLong": "Founded in 1968, Universitat Autònoma de Barcelona (UAB) is an integrated campus university located in Bellaterra, near Barcelona. Renowned for its scientific output, UAB hosts major research institutes like ALBA Synchrotron and ICN2.",
    "topProgramsList": [
      {
        "name": "Veterinary Science",
        "ranking": "#25 Global (Top 5 Europe)",
        "description": "World-class veterinary medicine center equipped with an equine clinic, small animal hospital, and food technology research center, accredited by EAEVE."
      },
      {
        "name": "Linguistics & Translation Studies",
        "ranking": "#49 Global",
        "description": "Renowned center for theoretical linguistics, computational translation, multilingual cognition, and applied sociolinguistics with multi-language immersion options."
      },
      {
        "name": "Economics & Econometrics",
        "ranking": "#66 Global",
        "description": "High-impact social science division collaborating with the Institute for Economic Analysis (IAE-CSIC), providing quantitative microeconomics and macro-policy tracks."
      },
      {
        "name": "Sociology & Political Science",
        "ranking": "#67 Global",
        "description": "Leading European institute for public policy analysis, social stratification, migration studies, and urban governance research."
      },
      {
        "name": "Medicine & Health Sciences",
        "ranking": "#81 Global",
        "description": "High-ranked medical program integrated with 5 major university hospital networks in Catalonia (Vall d'Hebron, Sant Pau) focusing on clinical trial innovation and oncology."
      }
    ],
    "allScholarshipsList": [
      {
        "id": "uabsch-1",
        "title": "Catalan AGAUR Predoctoral FI Grants",
        "amount": "€18,200/yr salary + tuition coverage + research stay allowances",
        "coverage": "Full Ride",
        "eligibility": "Admitted doctoral students with high undergraduate/master's GPA.",
        "description": "3-year research fellowship contract funded by the Catalan government providing full salary and social security.",
        "deadline": "Dec 20",
        "requiresSeparateApp": True
      },
      {
        "id": "uabsch-2",
        "title": "UAB Language Study Scholarships",
        "amount": "50% to 100% tuition waiver for language courses",
        "coverage": "Partial Aid",
        "eligibility": "Enrolled undergraduate, master's, and PhD students taking language proficiency modules.",
        "description": "Grants awarded to encourage multilingualism and language certification among degree students.",
        "deadline": "May 30",
        "requiresSeparateApp": True
      },
      {
        "id": "uabsch-3",
        "title": "Erasmus+ International Mobility Grants",
        "amount": "€450–€600/month living stipend for exchange study",
        "coverage": "Partial Aid",
        "eligibility": "Enrolled UAB students undertaking partner university exchanges.",
        "description": "European Union mobility grants supporting study abroad semesters across Europe.",
        "deadline": "Mar 15",
        "requiresSeparateApp": True
      }
    ]
}

u_spain_4 = {
    "id": "uni-spain-004",
    "universityName": "Autonomous University of Madrid",
    "location": "Madrid, Spain",
    "country": "Spain",
    "flag": "🇪🇸",
    "foundingYear": "1968",
    "scholarshipTitle": "UAM Emergency Grants, Double Degree Mobility & Severo Ochoa FPI Fellowships",
    "ranking": "#226 Global (QS 2027)",
    "rankingSource": "QS World University Rankings 2027 (#226 Global) & QS Subject Rankings 2026",
    "qsSubjectRankings": "Physics & Astronomy #69 Global, Psychology #74 Global, Law #84 Global, Education #98 Global, Data Science Top 200",
    "coverage": "Full Ride",
    "amountValue": "Full Tuition Waiver + €20,600/yr FPI Research Salary",
    "tuitionFee": "€1,200 - €2,600/yr (EU) | €2,700 - €4,400/yr (Non-EU)",
    "tuitionAmountNumeric": 3000,
    "hasFullRide": True,
    "hasPartialAid": True,
    "hasFinancialAid": True,
    "financialAidType": "Merit & Need-Based",
    "financialAidDetails": "UAM provides Severo Ochoa FPI Predoctoral Contracts (€20,600/yr + tuition waiver), UAM Emergency Assistance Grants, International Mobility Grants, and Spanish Ministry scholarships.",
    "minGpa": "3.2 / 4.0",
    "minSat": "Optional",
    "satRequirementCategory": "Optional",
    "satPolicyDetails": "Secondary qualification accreditation handled via UNEDasiss.",
    "minIelts": "6.5+",
    "ieltsCategory": "6.5",
    "toeflRequirement": "85+",
    "commonAppAccepted": False,
    "applicationPortalDetails": "Autonomous University of Madrid Admissions Portal & Distrito Único de Madrid",
    "acceptanceRate": "20% - 25%",
    "deadline": "Jul 1 (International Pre-registration) / Sep 10 (Final Round)",
    "description": "Autonomous University of Madrid is a premier research institution (#226 Global), leading in Physics (#69), Psychology (#74), Law (#84), and Education (#98).",
    "overviewLong": "Autonomous University of Madrid (UAM), founded in 1968, is located at the Cantoblanco campus north of Madrid. Home to world-leading centers like the Nicolás Cabrera Institute and IFIMAC physics centers.",
    "topProgramsList": [
      {
        "name": "Physics & Astronomy",
        "ranking": "#69 Global (#1 in Spain)",
        "description": "Internationally famous physics center working alongside the Nicolás Cabrera Institute and IFIMAC, contributing to CERN and ESO particle physics and quantum optics projects."
      },
      {
        "name": "Psychology & Behavioral Sciences",
        "ranking": "#74 Global",
        "description": "Top-tier psychology faculty offering specialized clinical, cognitive, neuroscientific, and organizational psychology tracks."
      },
      {
        "name": "Law & Jurisprudence",
        "ranking": "#84 Global",
        "description": "Prestigious legal academy renowned for Constitutional Law, International Trade Law, and Human Rights with high bar passage rates."
      },
      {
        "name": "Education & Teacher Training",
        "ranking": "#98 Global",
        "description": "Premier teacher education center in Spain, combining pedagogical research with early-childhood, primary, secondary, and special needs education tracks."
      },
      {
        "name": "Data Science & Artificial Intelligence",
        "ranking": "101–200 Global (#2 in Spain)",
        "description": "High-tech computing track at UAM Polytechnic School with focus on machine learning algorithms, computer vision, data infrastructure, and robotics."
      }
    ],
    "allScholarshipsList": [
      {
        "id": "uamsch-1",
        "title": "FPI National Predoctoral Fellowships at UAM",
        "amount": "€20,600/yr salary stipend + tuition waiver + health insurance",
        "coverage": "Full Ride",
        "eligibility": "Doctoral candidates attached to approved Severo Ochoa research units at UAM.",
        "description": "National 4-year research contracts providing full salary, social security, and research mobility funding.",
        "deadline": "Nov 25",
        "requiresSeparateApp": True
      },
      {
        "id": "uamsch-2",
        "title": "UAM Emergency Student Assistance Grants",
        "amount": "€1,000–€2,500 tuition reduction + emergency living support",
        "coverage": "Partial Aid",
        "eligibility": "Enrolled UAM degree students experiencing sudden economic hardship.",
        "description": "Institutional aid preventing student dropouts due to temporary economic difficulties.",
        "deadline": "Jun 15",
        "requiresSeparateApp": True
      },
      {
        "id": "uamsch-3",
        "title": "UAM International Double Degree Mobility Grants",
        "amount": "€3,500 per academic year for study abroad modules",
        "coverage": "Partial Aid",
        "eligibility": "Students enrolled in official UAM international joint degree programs.",
        "description": "Mobility stipends supporting international dual degree exchange years.",
        "deadline": "Apr 30",
        "requiresSeparateApp": True
      }
    ]
}

u_spain_5 = {
    "id": "uni-spain-005",
    "universityName": "Pompeu Fabra University",
    "location": "Barcelona, Spain",
    "country": "Spain",
    "flag": "🇪🇸",
    "foundingYear": "1990",
    "scholarshipTitle": "Spanish Government FPU Predoctoral Contracts & UPF Undergraduate Salary Grants",
    "ranking": "Top Young Univ Spain (QS / THE)",
    "rankingSource": "QS World University Rankings & THE Young University Rankings (#1 in Spain)",
    "qsSubjectRankings": "Economics & Econometrics (Global Top 25), Business & Management (Top 50), Politics (Top 50), Media (Top 100)",
    "coverage": "Full Ride",
    "amountValue": "Full Tuition Waiver + €25,116/yr FPU PhD Contract Salary",
    "tuitionFee": "€1,200 - €2,800/yr (EU) | €3,000 - €5,200/yr (Non-EU)",
    "tuitionAmountNumeric": 3500,
    "hasFullRide": True,
    "hasPartialAid": True,
    "hasFinancialAid": True,
    "financialAidType": "Merit & Need-Based",
    "financialAidDetails": "UPF offers Spanish FPU Predoctoral Contracts (€25,116/yr salary + tuition waiver), UPF Salary Grants for incoming undergraduates (€3,000 living grant + tuition waiver), Santander research prizes, and AGAUR grants.",
    "minGpa": "3.3 / 4.0",
    "minSat": "Optional / Selectividad",
    "satRequirementCategory": "Optional",
    "satPolicyDetails": "International qualification accreditation processed through UNEDasiss.",
    "minIelts": "6.5+",
    "ieltsCategory": "6.5",
    "toeflRequirement": "90+",
    "commonAppAccepted": False,
    "applicationPortalDetails": "Pompeu Fabra University Online Admissions Portal & Accesnet Catalonia",
    "acceptanceRate": "15% - 20%",
    "deadline": "Jun 15 (International Admissions) / Sep 5 (Final Round)",
    "description": "Pompeu Fabra University is Spain's top young university, internationally famous for Economics (Top 25 Global, Barcelona School of Economics), Business, and Politics.",
    "overviewLong": "Founded in 1990 in Barcelona, Pompeu Fabra University (UPF) is an elite public university operating across three downtown campuses (Ciutadella, Poblenou, Mar). Home to the Barcelona School of Economics (BSE) and Music Technology Group.",
    "topProgramsList": [
      {
        "name": "Economics & Econometrics",
        "ranking": "Global Top 25 (Top 10 Europe)",
        "description": "UPF's defining department, affiliated with the Barcelona School of Economics (BSE), featuring Nobel-caliber research in microeconomics, game theory, and macro-financial policy."
      },
      {
        "name": "Business & Management",
        "ranking": "Global Top 50",
        "description": "High-intensity management program leveraging Barcelona's tech ecosystem, with focus on global entrepreneurship, finance, marketing analytics, and strategy."
      },
      {
        "name": "Political & Social Sciences",
        "ranking": "Global Top 50",
        "description": "Internationally renowned department specializing in comparative politics, governance, welfare policy, institutional design, and quantitative political methodology."
      },
      {
        "name": "Communication & Media Studies",
        "ranking": "Global Top 100",
        "description": "Modern journalism, digital media, interactive design, and cinema studies program housed at Poblenou campus with state-of-the-art media laboratories."
      },
      {
        "name": "Information & Communication Technologies",
        "ranking": "Global Top 150",
        "description": "Cutting-edge engineering track integrating computer vision, AI, sound and music computing (Music Technology Group), and biomedical informatics."
      }
    ],
    "allScholarshipsList": [
      {
        "id": "upfsch-1",
        "title": "Spanish Government FPU Predoctoral Contracts",
        "amount": "€25,116/yr annual stipend + full tuition waiver + research stay grants",
        "coverage": "Full Ride",
        "eligibility": "Highly competitive PhD candidates admitted to UPF doctoral programs.",
        "description": "National predoctoral research employment contracts providing competitive 4-year salary and research funding.",
        "deadline": "Jan 20",
        "requiresSeparateApp": True
      },
      {
        "id": "upfsch-2",
        "title": "UPF Salary Grants Program for New Undergraduates",
        "amount": "€3,000 annual living stipend + 100% tuition coverage",
        "coverage": "Full Ride",
        "eligibility": "High-achieving incoming Bachelor's students meeting financial need criteria.",
        "description": "Equity grant providing tuition exemption and living stipends throughout undergraduate studies.",
        "deadline": "Jul 15",
        "requiresSeparateApp": True
      },
      {
        "id": "upfsch-3",
        "title": "Santander-UPF Research Grants",
        "amount": "€2,000 cash research award",
        "coverage": "Partial Aid",
        "eligibility": "Enrolled UPF PhD students presenting peer-reviewed paper presentations.",
        "description": "Research mobility grants supporting international conference attendance and publication.",
        "deadline": "May 10",
        "requiresSeparateApp": True
      }
    ]
}

# Austria
u_austria_1 = {
    "id": "uni-austria-001",
    "universityName": "TU Wien (Vienna University of Technology)",
    "location": "Vienna, Austria",
    "country": "Austria",
    "flag": "🇦🇹",
    "foundingYear": "1815",
    "scholarshipTitle": "TU Wien Study Start Grants, Merit Awards & Scientific Work Stipends",
    "ranking": "#=191 Global (QS 2027)",
    "rankingSource": "QS World University Rankings 2027 (#191 Global, #2 Austria) & QS Subject Rankings 2026",
    "qsSubjectRankings": "Architecture #44 Global, Computer Science #99 QS / #71 THE, Engineering & Tech #97 Global, Mechanical Eng #109",
    "coverage": "Partial Aid",
    "amountValue": "€4,800/yr Study Start Grant + €1,500 Merit Award + Low EU Tuition (€363/sem)",
    "tuitionFee": "€363/sem (EU/EEA) | €726/sem (Non-EU)",
    "tuitionAmountNumeric": 1500,
    "hasFullRide": False,
    "hasPartialAid": True,
    "hasFinancialAid": True,
    "financialAidType": "Merit & Need-Based",
    "financialAidDetails": "TU Wien offers Study Start Grants (€400/mo for first-year undergraduates), Faculty Merit Scholarships (€750–€1,500 one-time award), Scientific Work Grants for thesis research (€750–€3,600), and Austrian Federal Grants (Studienbeihilfe for EU citizens). Tuition is highly affordable (€726/sem for non-EU).",
    "minGpa": "3.2 / 4.0",
    "minSat": "Not Required",
    "satRequirementCategory": "Not Required",
    "satPolicyDetails": "Admissions based on secondary school leaving certificate (Matura equivalent). German B2/C1 required for undergraduate tracks; English for Master's.",
    "minIelts": "6.5+",
    "ieltsCategory": "6.5",
    "toeflRequirement": "88+",
    "commonAppAccepted": False,
    "applicationPortalDetails": "TU Wien Campus Software Portal (tuwien.at)",
    "acceptanceRate": "25% - 30%",
    "deadline": "Sep 5 (Winter Semester) / Feb 5 (Summer Semester)",
    "description": "TU Wien is Austria's top technological research university (#191 Global), renowned globally in Architecture (#44), Computer Science (#71 THE), and Engineering.",
    "overviewLong": "Founded in 1815 as the Imperial-Royal Polytechnic Institute, TU Wien (Vienna University of Technology) is Austria's premier technological research institution, situated in central Vienna at Karlsplatz. Teaching 26,000 students across 8 faculties.",
    "topProgramsList": [
      {
        "name": "Architecture & Built Environment",
        "ranking": "#44 Global (Top 15 Europe)",
        "description": "World-renowned architecture faculty emphasizing sustainable urban design, computational building physics, parametric modeling, and heritage conservation."
      },
      {
        "name": "Computer Science & Information Systems",
        "ranking": "#99 QS / #71 THE Global",
        "description": "Premier Austrian informatics center offering specialized tracks in artificial intelligence, software engineering, visual computing, cybersecurity, and logic/verification."
      },
      {
        "name": "Engineering & Technology Broad Field",
        "ranking": "#97 Global",
        "description": "Comprehensive engineering division providing world-class training in electrical power engineering, microelectronics, telecommunications, and industrial automation."
      },
      {
        "name": "Mechanical Engineering",
        "ranking": "#109 Global",
        "description": "High-impact mechanical engineering program with direct industrial ties to Austrian automotive, aerospace, robotics, and energy equipment manufacturers."
      },
      {
        "name": "Mathematics & Geoinformation",
        "ranking": "#122 Global",
        "description": "Foundational quantitative discipline delivering rigorous tracks in financial mathematics, actuarial science, geodesy, spatial statistics, and applied analysis."
      }
    ],
    "allScholarshipsList": [
      {
        "id": "tuwsch-1",
        "title": "TU Wien Study Start Grant (Studienanfangs-Stipendium)",
        "amount": "€400/month stipend for 2 semesters (€4,800 total) + career coaching",
        "coverage": "Partial Aid",
        "eligibility": "First-semester Bachelor's students demonstrating high secondary academic results and financial need.",
        "description": "Entry-level financial aid package supporting incoming engineering and computer science students.",
        "deadline": "Oct 15 (Winter) / Mar 15 (Summer)",
        "requiresSeparateApp": True
      },
      {
        "id": "tuwsch-2",
        "title": "Faculty Merit Scholarships (Leistungsstipendium)",
        "amount": "€750 to €1,500 one-time merit award",
        "coverage": "Partial Aid",
        "eligibility": "Enrolled students with average grade point equivalent under 2.0 (Austrian scale).",
        "description": "Annual academic merit award granted per faculty for top academic performance.",
        "deadline": "Nov 10",
        "requiresSeparateApp": True
      },
      {
        "id": "tuwsch-3",
        "title": "TU Wien Scientific Work Grants (Förderungsstipendium)",
        "amount": "€750 to €3,600 project grant",
        "coverage": "Partial Aid",
        "eligibility": "Degree candidates writing master's theses or doctoral dissertations with high scientific cost.",
        "description": "Research support grant reimbursing lab, computing, or field expenses for thesis students.",
        "deadline": "May 15",
        "requiresSeparateApp": True
      }
    ]
}

u_austria_2 = {
    "id": "uni-austria-002",
    "universityName": "Central European University",
    "location": "Vienna, Austria",
    "country": "Austria",
    "flag": "🇦🇹",
    "foundingYear": "1991",
    "scholarshipTitle": "CEU Master's Excellence Scholarships & Doctoral Fellowships",
    "ranking": "#239 Global (QS 2027)",
    "rankingSource": "QS World University Rankings 2027 (#239 Global) & QS Subject Rankings 2026",
    "qsSubjectRankings": "Political Science & International Studies #40 Global, Public Policy Top 50, Economics Top 100, History Top 100",
    "coverage": "Full Ride",
    "amountValue": "100% Tuition Waiver + €1,000/mo Master's Stipend or €1,350/mo PhD Stipend + Housing",
    "tuitionFee": "€12,000 - €18,000/yr (Covered by CEU Scholarships for 80%+ of students)",
    "tuitionAmountNumeric": 15000,
    "hasFullRide": True,
    "hasPartialAid": True,
    "hasFinancialAid": True,
    "financialAidType": "Merit & Need-Based",
    "financialAidDetails": "CEU is a premier English-medium graduate university providing full-ride CEU Master's Excellence Scholarships (100% tuition waiver + €1,000/mo stipend + housing + insurance) and CEU Doctoral Fellowships (€1,350/mo + tuition waiver for 4 years). Over 80% of CEU graduate students receive financial aid.",
    "minGpa": "3.3 / 4.0",
    "minSat": "Optional (Undergraduate)",
    "satRequirementCategory": "Optional",
    "satPolicyDetails": "100% English-medium instruction. GRE/GMAT optional or required depending on department (e.g. Economics).",
    "minIelts": "7.0+",
    "ieltsCategory": "7.0",
    "toeflRequirement": "95+",
    "commonAppAccepted": False,
    "applicationPortalDetails": "CEU Online Application Portal (ceu.edu)",
    "acceptanceRate": "15% - 20%",
    "deadline": "Feb 1 (Scholarship Deadline) / Apr 15 (Self-Financed)",
    "description": "Central European University (CEU) in Vienna is a world-class English-language research university (#239 Global), renowned in Political Science (#40), Public Policy, and Economics.",
    "overviewLong": "Central European University (CEU) was founded in 1991 and relocated its primary academic operations to Vienna, Austria in 2019. Accredited in both the United States and Austria, CEU is an elite institution for social sciences, public policy, humanities, and quantitative economics.",
    "topProgramsList": [
      {
        "name": "Political Science & International Studies",
        "ranking": "#40 Global (Top 10 Europe)",
        "description": "Flagship social science department providing world-class education in comparative politics, political economy, electoral systems, and global governance."
      },
      {
        "name": "Public Policy & Administration",
        "ranking": "Global Top 50",
        "description": "Renowned policy school training global leaders in governance, policy analysis, development finance, human rights regulation, and public management."
      },
      {
        "name": "Economics & Business Analytics",
        "ranking": "Global Top 100",
        "description": "Quantitative economics and data analytics programs with focus on empirical economics, financial markets, microeconomic policy, and machine learning for business."
      },
      {
        "name": "International Relations & Gender Studies",
        "ranking": "Global Top 50",
        "description": "Interdisciplinary center leveraging Vienna's diplomatic hub to study international security, global multilateralism, and human rights."
      },
      {
        "name": "Environmental Sciences & Policy",
        "ranking": "Global Top 100",
        "description": "Combines environmental science, climate policy, sustainable energy transition, and ecological economics with policy research labs."
      }
    ],
    "allScholarshipsList": [
      {
        "id": "ceusch-1",
        "title": "CEU Supporter-Funded Master's Excellence Scholarship",
        "amount": "100% tuition waiver + €1,000/month stipend + housing + health insurance",
        "coverage": "Full Ride",
        "eligibility": "Outstanding Master's applicants worldwide applying by the scholarship deadline.",
        "description": "Full funding package covering complete tuition fees, monthly living allowance, guaranteed housing in CEU Residence Center, and health insurance.",
        "deadline": "Feb 1",
        "requiresSeparateApp": False
      },
      {
        "id": "ceusch-2",
        "title": "CEU Doctoral Fellowships",
        "amount": "100% tuition waiver + €1,350/month stipend for 4 years + insurance",
        "coverage": "Full Ride",
        "eligibility": "Highly qualified doctoral applicants across all PhD disciplines.",
        "description": "Full 4-year doctoral fellowship covering full tuition, tax-free living stipend, and health insurance.",
        "deadline": "Feb 1",
        "requiresSeparateApp": False
      },
      {
        "id": "ceusch-3",
        "title": "CEU Enrolled Student Research Grants",
        "amount": "Up to €5,200 project research grant",
        "coverage": "Partial Aid",
        "eligibility": "Enrolled CEU Master's and PhD students conducting approved field research or archive work.",
        "description": "Research grant supporting dissertation fieldwork, archival studies, and academic conference travel.",
        "deadline": "Nov 15 / Apr 15",
        "requiresSeparateApp": True
      }
    ]
}

u_austria_3 = {
    "id": "uni-austria-003",
    "universityName": "University of Vienna",
    "location": "Vienna, Austria",
    "country": "Austria",
    "flag": "🇦🇹",
    "foundingYear": "1365",
    "scholarshipTitle": "Univie Merit Grants, OeAD Ernst Mach Grants & VISESS Fellowships",
    "ranking": "#140 Global (QS 2027)",
    "rankingSource": "QS World University Rankings 2027 (#140 Global, #1 Austria) & THE World University Rankings (#95)",
    "qsSubjectRankings": "Communication & Media #13 Global, Theology #22 Global, Arts & Humanities #22 THE, Anthropology #34, Archaeology #36",
    "coverage": "Full Ride",
    "amountValue": "Full Tuition Waiver + €1,250/mo OeAD Ernst Mach Stipend or Univie Merit Grants",
    "tuitionFee": "€363/sem (EU) | €726/sem (Non-EU)",
    "tuitionAmountNumeric": 1500,
    "hasFullRide": True,
    "hasPartialAid": True,
    "hasFinancialAid": True,
    "financialAidType": "Merit & Need-Based",
    "financialAidDetails": "Univie degree students access Austrian OeAD Ernst Mach Fellowships (€1,250/mo living grant + tuition waiver + travel grant), Univie Faculty Merit Grants (€750–€1,500), VISESS PhD Completion Grants (€1,050/mo), and Austrian Studienbeihilfe. Non-EU tuition is nominal (€726/sem).",
    "minGpa": "3.3 / 4.0",
    "minSat": "Not Required",
    "satRequirementCategory": "Not Required",
    "satPolicyDetails": "Admissions based on secondary diploma (Matura equivalent). German C1 required for undergraduate; English B2/C1 for master's.",
    "minIelts": "6.5+",
    "ieltsCategory": "6.5",
    "toeflRequirement": "88+",
    "commonAppAccepted": False,
    "applicationPortalDetails": "University of Vienna u:space Student Portal (uspace.univie.ac.at)",
    "acceptanceRate": "30% - 35%",
    "deadline": "Sep 5 (Winter Semester) / Feb 5 (Summer Semester)",
    "description": "University of Vienna is Austria's largest and highest-ranked research university (#140 Global, #95 THE), world-famous in Communication (#13), Humanities (#22 THE), and Law.",
    "overviewLong": "Founded in 1365 by Duke Rudolph IV, the University of Vienna (Alma Mater Rudolphina Vindobonensis) is the oldest university in the German-speaking world and Austria's top research university (#140 globally in QS 2027). Teaching 88,000 students across historic Viennese locations.",
    "topProgramsList": [
      {
        "name": "Communication & Media Studies",
        "ranking": "#13 Global (#1 in Austria)",
        "description": "Univie's highest-ranked exact subject worldwide, leading international research in political communication, media psychology, digital journalism, and strategic PR."
      },
      {
        "name": "Theology & Religious Studies",
        "ranking": "#22 Global",
        "description": "World-famous theological faculty producing historical, philosophical, and interreligious scholarship with extensive manuscript access."
      },
      {
        "name": "Arts & Humanities Broad Field",
        "ranking": "#22 Global in THE (#1 in Austria)",
        "description": "Comprehensive humanities center covering history, philosophy, comparative literature, linguistics, art history, and musicology across historic Viennese institutes."
      },
      {
        "name": "Anthropology & Archaeology",
        "ranking": "#34 Global",
        "description": "Top European research programs conducting international field excavations, paleoanthropology, social anthropology, and cultural heritage analysis."
      },
      {
        "name": "Law & Legal Studies",
        "ranking": "#46 Global in THE",
        "description": "Austria's premier law faculty offering European Law, International Dispute Resolution, technology law, and LL.M. specialization tracks in central Vienna."
      }
    ],
    "allScholarshipsList": [
      {
        "id": "univiesch-1",
        "title": "Austrian OeAD Ernst Mach Grant",
        "amount": "€1,250/month living allowance + travel grant + 100% tuition waiver",
        "coverage": "Full Ride",
        "eligibility": "Non-European postgraduate and PhD research students undertaking studies in Austria.",
        "description": "Federal Austrian research scholarship covering living costs, travel expenses, and tuition fees for up to 10 months.",
        "deadline": "Feb 1",
        "requiresSeparateApp": True
      },
      {
        "id": "univiesch-2",
        "title": "University of Vienna Merit Scholarship (Leistungsstipendium)",
        "amount": "€750–€1,500 annual merit grant",
        "coverage": "Partial Aid",
        "eligibility": "Regular degree students achieving top academic transcripts across faculties.",
        "description": "Merit award funded by the Austrian Ministry for outstanding academic performance.",
        "deadline": "Oct 25",
        "requiresSeparateApp": True
      },
      {
        "id": "univiesch-3",
        "title": "VISESS PhD Completion Grant",
        "amount": "€1,050/month stipend for 3 months during thesis completion",
        "coverage": "Partial Aid",
        "eligibility": "Enrolled doctoral candidates in Vienna International School of Earth and Space Sciences.",
        "description": "Final phase completion grant enabling PhD researchers to focus entirely on dissertation defense.",
        "deadline": "Jan 15 / Jun 15",
        "requiresSeparateApp": True
      }
    ]
}

print('Spain and Austria JSON ready')
