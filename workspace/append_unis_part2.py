import json

# Portugal, Poland, Hungary, Saudi Arabia, Türkiye university definitions

u_portugal_1 = {
    "id": "uni-portugal-001",
    "universityName": "University of Lisbon",
    "location": "Lisbon, Portugal",
    "country": "Portugal",
    "flag": "🇵🇹",
    "foundingYear": "2013",
    "scholarshipTitle": "ULisboa Merit Scholarships, Técnico Corporate Prizes & FCT PhD Fellowships",
    "ranking": "#230 Global (QS 2027)",
    "rankingSource": "QS World University Rankings 2027 (#230 Global, #1 Portugal) & QS Subject Rankings 2026",
    "qsSubjectRankings": "Engineering & Tech Top 100 (Instituto Superior Técnico), CS & Info Systems, Math, Medicine, Economics (ISEG)",
    "coverage": "Full Ride",
    "amountValue": "Full Tuition Waiver + €1,259.64/mo FCT PhD Salary Stipend",
    "tuitionFee": "€697/yr (EU) | €3,000 - €7,000/yr (Non-EU)",
    "tuitionAmountNumeric": 4500,
    "hasFullRide": True,
    "hasPartialAid": True,
    "hasFinancialAid": True,
    "financialAidType": "Merit & Need-Based",
    "financialAidDetails": "ULisboa degree candidates access ULisboa Academic Merit Scholarships (50% to 100% tuition reduction), Instituto Superior Técnico corporate merit prizes, ISEG excellence awards, and national FCT Doctoral Fellowships (€1,259.64/month tax-free stipend + full tuition waiver).",
    "minGpa": "3.1 / 4.0",
    "minSat": "Optional",
    "satRequirementCategory": "Optional",
    "satPolicyDetails": "International student admission based on high school GPA, secondary exams, or national entrance exams (Exames Nacionais).",
    "minIelts": "6.5+",
    "ieltsCategory": "6.5",
    "toeflRequirement": "85+",
    "commonAppAccepted": False,
    "applicationPortalDetails": "University of Lisbon International Student Application Portal (ulisboa.pt)",
    "acceptanceRate": "25% - 30%",
    "deadline": "May 31 (International First Phase) / Jul 15 (Second Phase)",
    "description": "University of Lisbon is Portugal's largest and highest-ranked research university (#230 Global), world-leading in Engineering (Instituto Superior Técnico), CS, Mathematics, and Economics.",
    "overviewLong": "Resulting from the 2013 merger of the classic University of Lisbon (1911) and the Technical University of Lisbon (1930), ULisboa is Portugal's premier comprehensive research institution (#230 globally in QS 2027). Teaching 50,000 students across 18 schools.",
    "topProgramsList": [
      {
        "name": "Engineering & Technology (Instituto Superior Técnico)",
        "ranking": "Global Top 100 (#1 in Portugal)",
        "description": "Portugal's top engineering school, offering world-class programs in aerospace, electrical, civil, mechanical, and industrial engineering."
      },
      {
        "name": "Computer Science & Informatics",
        "ranking": "Global Top 150",
        "description": "Leading computing division housed at Técnico and Faculty of Sciences, specializing in artificial intelligence, cybersecurity, distributed systems, and software engineering."
      },
      {
        "name": "Economics & Management (ISEG)",
        "ranking": "Global Top 150",
        "description": "Portugal's oldest school of economics, providing EQUIS/AACSB-accredited tracks in quantitative economics, finance, actuarial science, and international management."
      },
      {
        "name": "Medicine & Health Sciences",
        "ranking": "Global Top 150",
        "description": "Premier medical faculty integrated with Santa Maria University Hospital, featuring cutting-edge biomedical research, oncology, and cardiovascular medicine."
      },
      {
        "name": "Mathematics & Physical Sciences",
        "ranking": "Global Top 150",
        "description": "Renowned research center in pure and applied mathematics, quantum physics, astrophysics, and materials science."
      }
    ],
    "allScholarshipsList": [
      {
        "id": "ulisboasch-1",
        "title": "FCT National PhD Research Grants at ULisboa",
        "amount": "€1,259.64/month tax-free stipend + 100% tuition coverage for 4 years",
        "coverage": "Full Ride",
        "eligibility": "Competitive doctoral applicants admitted to ULisboa PhD programs.",
        "description": "National research fellowship funded by the Portuguese Science Foundation providing full monthly salary, tuition waiver, and social security.",
        "deadline": "Mar 31",
        "requiresSeparateApp": True
      },
      {
        "id": "ulisboasch-2",
        "title": "ULisboa Merit Scholarships",
        "amount": "Full or 50% tuition fee reduction",
        "coverage": "Partial Aid",
        "eligibility": "Enrolled students completing annual credits with average grade ≥ 16/20.",
        "description": "Annual institutional merit award granted to top-ranked students in each faculty.",
        "deadline": "Oct 30",
        "requiresSeparateApp": False
      },
      {
        "id": "ulisboasch-3",
        "title": "Técnico & ISEG Corporate Academic Excellence Prizes",
        "amount": "€1,000–€3,000 cash prizes + industry internship offers",
        "coverage": "Partial Aid",
        "eligibility": "Top-ranked students in engineering, economics, and data science courses.",
        "description": "Corporate awards funded by industry partners (EDP, Galp, Deloitte, Millennium bcp) recognizing top academic performance.",
        "deadline": "Nov 15",
        "requiresSeparateApp": False
      }
    ]
}

u_portugal_2 = {
    "id": "uni-portugal-002",
    "universityName": "University of Porto",
    "location": "Porto, Portugal",
    "country": "Portugal",
    "flag": "🇵🇹",
    "foundingYear": "1911",
    "scholarshipTitle": "U.Porto Merit Awards, FEUP International Grants & FCT Doctoral Fellowships",
    "ranking": "#237 Global (QS 2026)",
    "rankingSource": "QS World University Rankings (#237 Global) & ShanghaiRanking / QS Subject Rankings 2026",
    "qsSubjectRankings": "Pharmacy #69 Global, Marine Eng #38 Shanghai, Food Science #50 Shanghai, Architecture 51-100, Civil Eng 51-75",
    "coverage": "Full Ride",
    "amountValue": "Full Tuition Waiver + €1,259/mo FCT PhD Stipend or €4,100 Merit Prize",
    "tuitionFee": "€697/yr (EU) | €3,500 - €6,000/yr (Non-EU)",
    "tuitionAmountNumeric": 4200,
    "hasFullRide": True,
    "hasPartialAid": True,
    "hasFinancialAid": True,
    "financialAidType": "Merit & Need-Based",
    "financialAidDetails": "U.Porto provides Academic Merit Scholarships (~€4,100 cash award for top 1%), FEUP International Student Scientific Merit Grants (30% to 50% tuition reduction), and national FCT PhD Fellowships (€1,259/mo stipend + tuition waiver).",
    "minGpa": "3.1 / 4.0",
    "minSat": "Optional",
    "satRequirementCategory": "Optional",
    "satPolicyDetails": "International applicants submit high school credentials evaluated for equivalence.",
    "minIelts": "6.5+",
    "ieltsCategory": "6.5",
    "toeflRequirement": "85+",
    "commonAppAccepted": False,
    "applicationPortalDetails": "University of Porto Online Admissions Portal (sigarra.up.pt)",
    "acceptanceRate": "20% - 25%",
    "deadline": "May 15 (International First Phase) / Jun 30 (Second Phase)",
    "description": "University of Porto is Portugal's top scientific institution (#237 Global), world-leading in Marine Engineering (#38), Food Science (#50), Pharmacy (#69), and Architecture.",
    "overviewLong": "Founded in 1911, the University of Porto (U.Porto) is a major research university situated in northern Portugal. Home to the Faculty of Engineering (FEUP), Porto School of Architecture (FAUP), and Institute for Molecular and Cell Biology (i3S).",
    "topProgramsList": [
      {
        "name": "Pharmacy & Pharmacology",
        "ranking": "#69 Global in QS",
        "description": "Leading pharmaceutical faculty in Portugal, providing advanced training in clinical pharmacy, toxicology, drug design, and pharmaceutical biotechnology."
      },
      {
        "name": "Marine & Ocean Engineering",
        "ranking": "#38 Global in ShanghaiRanking",
        "description": "Specialized engineering institute conducting advanced research in naval architecture, offshore renewable energy, coastal hydrodynamics, and marine robotics."
      },
      {
        "name": "Food Science & Technology",
        "ranking": "#50 Global in ShanghaiRanking",
        "description": "Premier agricultural and food research faculty focusing on food safety, functional foods, sustainable processing, and winemaking tech."
      },
      {
        "name": "Civil & Structural Engineering",
        "ranking": "51–75 Global in ShanghaiRanking",
        "description": "Renowned civil engineering department housed at FEUP, with world-class structural testing laboratories and bridge design hubs."
      },
      {
        "name": "Architecture (FAUP)",
        "ranking": "51–100 Global in QS",
        "description": "Historic Porto School of Architecture (home to Pritzker Laureates Álvaro Siza and Eduardo Souto de Moura), world-famous for contextual architectural design."
      }
    ],
    "allScholarshipsList": [
      {
        "id": "uportosch-1",
        "title": "FCT Doctoral Fellowships at U.Porto",
        "amount": "€1,259/month stipend + tuition waiver + social security coverage",
        "coverage": "Full Ride",
        "eligibility": "Admitted doctoral students across science, engineering, and humanities.",
        "description": "4-year doctoral research fellowship funded by the national science foundation.",
        "deadline": "Mar 31",
        "requiresSeparateApp": True
      },
      {
        "id": "uportosch-2",
        "title": "U.Porto Academic Merit Scholarships",
        "amount": "Annual merit award equal to 5x national minimum wage (~€4,100)",
        "coverage": "Partial Aid",
        "eligibility": "Top 1% of enrolled students in each faculty based on annual GPA.",
        "description": "Prestigious annual merit cash award granted by the rectorate.",
        "deadline": "Nov 30",
        "requiresSeparateApp": False
      },
      {
        "id": "uportosch-3",
        "title": "FEUP International Student Scientific Merit Grants",
        "amount": "30% to 50% tuition fee reduction",
        "coverage": "Partial Aid",
        "eligibility": "High-achieving international engineering applicants to Master's programs.",
        "description": "Tuition reduction granted to top international engineering applicants.",
        "deadline": "May 15",
        "requiresSeparateApp": True
      }
    ]
}

u_portugal_3 = {
    "id": "uni-portugal-003",
    "universityName": "University of Minho",
    "location": "Braga & Guimarães, Portugal",
    "country": "Portugal",
    "flag": "🇵🇹",
    "foundingYear": "1973",
    "scholarshipTitle": "UMinho International Excellence Scholarships & Merit Awards",
    "ranking": "#=572 Global (QS 2027)",
    "rankingSource": "QS World University Rankings 2027 (#=572 Global) & THE Subject Rankings 2026",
    "qsSubjectRankings": "Engineering & Polymer Tech Top 200, CS & Info Systems, Architecture, Business & Management, Psychology",
    "coverage": "Partial Aid",
    "amountValue": "Tuition Reduction to EU Levels (€1,000–€1,500/yr) + Annual Merit Prizes",
    "tuitionFee": "€697/yr (EU) | €2,500 - €4,500/yr (Non-EU)",
    "tuitionAmountNumeric": 3000,
    "hasFullRide": True,
    "hasPartialAid": True,
    "hasFinancialAid": True,
    "financialAidType": "Merit & Need-Based",
    "financialAidDetails": "UMinho offers International Academic Excellence Scholarships (reducing international tuition down to local EU levels of €1,000–€1,500/yr), UMinho Merit Awards for top enrolled students, and FCT PhD research fellowships.",
    "minGpa": "3.0 / 4.0",
    "minSat": "Optional",
    "satRequirementCategory": "Optional",
    "satPolicyDetails": "Secondary education transcripts evaluated via UMinho international portal.",
    "minIelts": "6.0+",
    "ieltsCategory": "6.0",
    "toeflRequirement": "80+",
    "commonAppAccepted": False,
    "applicationPortalDetails": "University of Minho International Portal (uminho.pt)",
    "acceptanceRate": "30% - 35%",
    "deadline": "Apr 30 (International 1st Call) / Jun 30 (2nd Call)",
    "description": "University of Minho is a top Portuguese research university, excelling in Polymer Engineering, Computer Science, Architecture, and Business.",
    "overviewLong": "Founded in 1973, University of Minho (UMinho) is situated in northern Portugal across campuses in Braga and Guimarães. Famous for polymer engineering, materials science, and industrial technology.",
    "topProgramsList": [
      {
        "name": "Engineering & Polymer Technology",
        "ranking": "Global Top 200",
        "description": "Renowned School of Engineering in Guimarães, specializing in materials engineering, polymer science, industrial management, bio-engineering, and smart textile technologies."
      },
      {
        "name": "Computer Science & Information Systems",
        "ranking": "Global Top 250",
        "description": "Advanced computer science center delivering cutting-edge training in software engineering, human-computer interaction, distributed systems, and AI."
      },
      {
        "name": "Architecture & Built Environment",
        "ranking": "Global Top 200",
        "description": "Integrated architecture department at School of Architecture, Art and Design (EAAD), emphasizing sustainable timber architecture and heritage restoration."
      },
      {
        "name": "Business, Economics & Management (EEG)",
        "ranking": "Global Top 300",
        "description": "School of Economics and Management providing practical management, international business, accounting, and public policy tracks."
      },
      {
        "name": "Psychology & Behavioral Sciences",
        "ranking": "Global Top 250",
        "description": "School of Psychology offering specialized tracks in clinical psychology, cognitive neuroscience, applied crime psychology, and organizational behavior."
      }
    ],
    "allScholarshipsList": [
      {
        "id": "uminhosch-1",
        "title": "UMinho International Academic Excellence Scholarships",
        "amount": "Tuition reduction reducing fees to EU levels (€1,000–€1,500/yr)",
        "coverage": "Partial Aid",
        "eligibility": "High-performing non-EU international applicants with top admission scores.",
        "description": "Tuition fee subsidization grant for top international candidates.",
        "deadline": "Apr 30",
        "requiresSeparateApp": True
      },
      {
        "id": "uminhosch-2",
        "title": "FCT Doctoral Grants at UMinho",
        "amount": "€1,259/month stipend + tuition coverage for up to 4 years",
        "coverage": "Full Ride",
        "eligibility": "Competitive PhD candidates enrolled in UMinho research centers.",
        "description": "National research grant supporting full-time doctoral research.",
        "deadline": "Mar 31",
        "requiresSeparateApp": True
      },
      {
        "id": "uminhosch-3",
        "title": "UMinho Merit Awards for Enrolled Students",
        "amount": "Cash award equal to annual tuition fee",
        "coverage": "Partial Aid",
        "eligibility": "Degree students achieving average grade ≥ 16/20 in their academic year.",
        "description": "Annual merit award recognizing top academic performers across faculties.",
        "deadline": "Oct 15",
        "requiresSeparateApp": False
      }
    ]
}

print('Portugal JSON ready')
