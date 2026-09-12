import { Scholarship } from '../types';

export const GLOBAL_SCHOLARSHIPS: Scholarship[] = [
  {
    id: 'fulbright-us',
    title: 'Fulbright Foreign Student Program',
    provider: 'US Department of State',
    country: 'United States',
    degree: 'Masters',
    coverage: 'Full Ride',
    amount: 'Full tuition, monthly stipend, airfare, & health insurance (~$50,000/yr)',
    deadline: 'October 11, 2026',
    description: 'Premier scholarship enabling graduate students, young professionals, and artists from abroad to study and conduct research in the United States.',
    eligibility: [
      'Undergraduate degree with strong academic record',
      'English proficiency (GRE/TOEFL required)',
      'Commitment to return to home country for 2 years after completion'
    ],
    documentsRequired: [
      'Transcripts & Degree Certificates',
      '3 Letters of Recommendation',
      'Personal Statement & Study Objective',
      'GRE / TOEFL Scores'
    ],
    applicationUrl: 'https://foreign.fulbrightonline.org/',
    isPakistani: false,
    category: 'Global Government',
    featured: true
  },
  {
    id: 'chevening-uk',
    title: 'Chevening UK Government Scholarship',
    provider: 'UK Foreign, Commonwealth & Development Office',
    country: 'United Kingdom',
    degree: 'Masters',
    coverage: 'Full Ride',
    amount: 'Full tuition fees, monthly living allowance, flights & visa fees (~£35,000)',
    deadline: 'November 05, 2026',
    description: 'The UK government’s global scholarship programme, funded by FCDO and partner organisations, offering full financial support for one-year master’s degrees.',
    eligibility: [
      'Minimum 2 years of work experience (2,000 hours)',
      'Apply to 3 eligible UK university courses',
      'Return to home country for minimum of 2 years post-graduation'
    ],
    documentsRequired: [
      'Passports / National ID',
      '2 Reference Letters',
      '4 Essays (Leadership, Networking, Studying in UK, Career Plan)',
      'Unconditional UK University Offer'
    ],
    applicationUrl: 'https://www.chevening.org/',
    isPakistani: false,
    category: 'Global Government',
    featured: true
  },
  {
    id: 'erasmus-mundus',
    title: 'Erasmus Mundus Joint Master Degrees (EMJMD)',
    provider: 'European Commission',
    country: 'Europe (Multiple Countries)',
    degree: 'Masters',
    coverage: 'Full Ride',
    amount: '€1,400 monthly allowance + full tuition + travel & installation costs',
    deadline: 'January 15, 2027',
    description: 'High-level integrated study programmes delivered by international consortia of higher education institutions across Europe.',
    eligibility: [
      'Bachelor degree or in final year of undergraduate studies',
      'No age restriction',
      'Open to candidates worldwide'
    ],
    documentsRequired: [
      'Bachelor Diploma & Transcripts',
      'Motivation Letter',
      '2 Academic Recommendation Letters',
      'IELTS/TOEFL Certificate'
    ],
    applicationUrl: 'https://www.eacea.ec.europa.eu/erasmus-plus/',
    isPakistani: false,
    category: 'European Union',
    featured: true
  },
  {
    id: 'daad-germany',
    title: 'DAAD Development-Related Postgraduate Courses (EPOS)',
    provider: 'German Academic Exchange Service',
    country: 'Germany',
    degree: 'Masters',
    coverage: 'Full Ride',
    amount: '€934 monthly stipend + health insurance + travel grant + tuition waived',
    deadline: 'September 30, 2026',
    description: 'Offers foreign graduates from development and newly industrialized countries the chance to take a postgraduate or Master’s degree at state-recognized German universities.',
    eligibility: [
      'At least 2 years of professional experience',
      'Bachelor’s degree completed within last 6 years',
      'Academic degree in relevant field'
    ],
    documentsRequired: [
      'DAAD application form',
      'Signed CV (Europass format)',
      'Letter of Motivation',
      'Professional Proof of Work Experience'
    ],
    applicationUrl: 'https://www.daad.de/en/',
    isPakistani: false,
    category: 'German Govt',
    featured: false
  },
  {
    id: 'mext-japan',
    title: 'MEXT Japan Japanese Government Scholarship',
    provider: 'Ministry of Education, Culture, Sports, Science and Tech Japan',
    country: 'Japan',
    degree: 'All Levels',
    coverage: 'Full Ride',
    amount: '143,000 JPY monthly stipend + 100% tuition waiver + round-trip flights',
    deadline: 'May 30, 2027',
    description: 'Prestigious scholarship for international students seeking to study in undergraduate, college of technology, or graduate research courses in Japan.',
    eligibility: [
      'Under 35 for Research/Grad; Under 25 for Undergrad',
      'Willingness to learn Japanese language',
      'High school or University graduate'
    ],
    documentsRequired: [
      'MEXT Application Form',
      'Field of Study and Research Plan',
      'Academic Transcripts',
      'Recommendation Letter'
    ],
    applicationUrl: 'https://www.mext.go.jp/en/',
    isPakistani: false,
    category: 'Asian Excellence',
    featured: false
  },
  {
    id: 'gates-cambridge',
    title: 'Gates Cambridge Scholarship',
    provider: 'Bill & Melinda Gates Foundation',
    country: 'United Kingdom',
    degree: 'PhD',
    coverage: 'Full Ride',
    amount: 'Full cost of studying at Cambridge + £20,000/yr maintenance + family allowance',
    deadline: 'December 03, 2026',
    description: 'Full-cost scholarships for outstanding applicants from countries outside the UK to pursue a full-time postgraduate degree in any subject available at the University of Cambridge.',
    eligibility: [
      'Outstanding intellectual ability',
      'Reasons for choice of course',
      'A commitment to improving the lives of others'
    ],
    documentsRequired: [
      'Cambridge Graduate Application',
      'Gates Cambridge Statement (500 words)',
      'Research Proposal (for PhD)',
      'Reference Letters'
    ],
    applicationUrl: 'https://www.gatescambridge.org/',
    isPakistani: false,
    category: 'University Direct',
    featured: true
  }
];

export const PAKISTANI_SCHOLARSHIPS: Scholarship[] = [
  {
    id: 'hec-overseas-phd',
    title: 'HEC Overseas Scholarships Phase-III',
    provider: 'Higher Education Commission (HEC) Pakistan',
    country: 'USA, UK, Australia, Europe',
    degree: 'PhD',
    coverage: 'Full Ride',
    amount: 'Full tuition fee + monthly living allowance ($1,200-$1,800/mo) + airfare',
    deadline: 'August 31, 2026',
    description: 'HEC scheme for Pakistani/AJK nationals to pursue PhD studies in top-ranked foreign universities in selected fields.',
    eligibility: [
      'Pakistani/AJK National',
      'Minimum 16 years of education (BS/MSc/MS)',
      'Minimum 3.0 CGPA or 1st Division',
      'Maximum age 35 years (40 for public sector university faculty/R&D staff)',
      'HAT Test score of minimum 60%'
    ],
    documentsRequired: [
      'Educational Documents verified by HEC/IBCC',
      'Valid HAT Score Card',
      'CNIC / Domicile Certificate',
      'HEC E-portal Application Form'
    ],
    applicationUrl: 'https://eportal.hec.gov.pk/',
    isPakistani: true,
    category: 'HEC National Scheme',
    featured: true
  },
  {
    id: 'ehsaas-undergrad',
    title: 'Benazir / Ehsaas Undergraduate Scholarship',
    provider: 'BISP & HEC Pakistan',
    country: 'Pakistan',
    degree: 'Undergraduate',
    coverage: 'Full Tuition',
    amount: '100% University Tuition Fee + PKR 40,000 Annual Stipend',
    deadline: 'December 15, 2026',
    description: 'Largest need-based undergraduate scholarship program in Pakistan history targeting low-income families enrolled in public sector universities.',
    eligibility: [
      'Enrolled in 4 or 5-year BS/undergraduate degree program in public university',
      'Family income below PKR 45,000 per month',
      'Academic merit as per university admission policy'
    ],
    documentsRequired: [
      'Income Certificate / Salary Slip of parents',
      'Utility Bills of last 3 months',
      'CNIC/B-Form copy',
      'University Fee Challan'
    ],
    applicationUrl: 'https://ehsaas.hec.gov.pk/',
    isPakistani: true,
    category: 'Need Based Govt',
    featured: true
  },
  {
    id: 'peef-master-merit',
    title: 'PEEF Special Quotas & Master’s Scholarship',
    provider: 'Punjab Educational Endowment Fund (PEEF)',
    country: 'Pakistan',
    degree: 'Masters',
    coverage: 'Full Tuition',
    amount: '100% Tuition Fee + PKR 10,000 monthly stipend + hostel charges',
    deadline: 'October 25, 2026',
    description: 'Financial assistance for brilliant students of Punjab, AJK, Gilgit-Baltistan, FATA & ICT pursuing Master’s degrees in partner universities.',
    eligibility: [
      'Domicile of Punjab or specified regions',
      'Secured at least 60% marks or 2.5/4.0 CGPA in BA/BSc/BS',
      'Total monthly family income <= PKR 60,000',
      'Enrolled as full-time student in partner university'
    ],
    documentsRequired: [
      'PEEF Application Form',
      'Attested copies of Matric/FA/FSc/BA/BSc result cards',
      'Parental Income Affidavit on stamp paper',
      'Domicile Copy'
    ],
    applicationUrl: 'https://www.peef.org.pk/',
    isPakistani: true,
    category: 'Provincial Endowment',
    featured: true
  },
  {
    id: 'lums-nop',
    title: 'LUMS National Outreach Programme (NOP)',
    provider: 'Lahore University of Management Sciences',
    country: 'Pakistan',
    degree: 'Undergraduate',
    coverage: 'Full Ride',
    amount: '100% Tuition, hostel, stipend, books, & coaching allowance (~PKR 4 Million value)',
    deadline: 'March 15, 2027',
    description: 'Prestigious award by LUMS reaching out to bright students from socio-economically disadvantaged backgrounds across Pakistan.',
    eligibility: [
      'At least 80% marks in Matriculation / O-Levels',
      'Demonstrated financial need',
      'Passing LUMS NOP Coaching Camp & Admission Test'
    ],
    documentsRequired: [
      'Matric Result Card',
      'Income documents & Bank statements',
      'House pictures / Electricity bills',
      'LUMS NOP Online Form'
    ],
    applicationUrl: 'https://nop.lums.edu.pk/',
    isPakistani: true,
    category: 'University Financial Aid',
    featured: true
  },
  {
    id: 'nust-need-based',
    title: 'NUST Need-Based Financial Assistance (NNFA)',
    provider: 'National University of Sciences & Tech (NUST)',
    country: 'Pakistan',
    degree: 'Undergraduate',
    coverage: 'Partial',
    amount: '50% to 100% Tuition Fee Waiver + Interest-Free Study Loan Options',
    deadline: 'July 10, 2026',
    description: 'Financial assistance for admitted undergraduate students who cannot afford the full university fee structure.',
    eligibility: [
      'Secured admission in NUST BS program via NET test',
      'Demonstrated financial inability to pay fees'
    ],
    documentsRequired: [
      'NUST Financial Aid Form',
      'Salary Slip / Tax Returns',
      'Utility Bills & Rental Agreement (if applicable)'
    ],
    applicationUrl: 'https://nust.edu.pk/admissions/scholarships/',
    isPakistani: true,
    category: 'University Financial Aid',
    featured: false
  },
  {
    id: 'fast-nuces-aid',
    title: 'FAST-NUCES Financial Assistance & Study Loans',
    provider: 'FAST National University of Computer & Emerging Sciences',
    country: 'Pakistan',
    degree: 'Undergraduate',
    coverage: 'Partial',
    amount: 'Up to 100% Tuition Waiver & Ihsan Trust Interest-Free Qarz-e-Hasana',
    deadline: 'August 05, 2026',
    description: 'Financial assistance and Qarz-e-Hasana programs for FAST CS, AI, and Software Engineering students across Islamabad, Lahore, Karachi, Peshawar, & Chiniot campuses.',
    eligibility: [
      'Admitted to FAST BS CS / SE / AI / Data Science',
      'Maintaining minimum 2.5 GPA'
    ],
    documentsRequired: [
      'FAST Aid Application Form',
      'Ihsan Trust Application Documents',
      'Parent Income Proof'
    ],
    applicationUrl: 'http://www.nu.edu.pk/Admissions/FinancialAssistance',
    isPakistani: true,
    category: 'CS & Tech Special',
    featured: false
  },
  {
    id: 'scottish-women-pakistan',
    title: 'Scottish Scholarship for Pakistani Women',
    provider: 'British Council Pakistan & Scottish Govt',
    country: 'Pakistan',
    degree: 'Undergraduate',
    coverage: 'Full Tuition',
    amount: 'Full university tuition fee + hostel costs + travel allowance',
    deadline: 'September 20, 2026',
    description: 'Funding Pakistani women to study 4-year undergraduate or 2-year master’s degrees in Pakistani HEC-recognized universities.',
    eligibility: [
      'Pakistani female national residing in Pakistan',
      'Pursuing degree in Education, STEM, Health Sciences, Food Security/Agriculture'
    ],
    documentsRequired: [
      'Completed Application Form',
      'University admission letter',
      'CNIC / Domicile',
      'Parent income proof'
    ],
    applicationUrl: 'https://www.britishcouncil.pk/',
    isPakistani: true,
    category: 'Women Empowerment',
    featured: true
  }
];
