import { GovernmentTrackItem } from '../types';

export const DEFAULT_GOVERNMENT_SCHOLARSHIPS: GovernmentTrackItem[] = [
  {
    id: 'gov-fulbright-usa',
    programTitle: 'Fulbright Foreign Student Program',
    sponsorGovernment: 'United States Department of State',
    country: 'United States',
    flag: '🇺🇸',
    degreeLevels: ['Masters', 'PhD'],
    stipendMonthly: '$1,800 - $2,500 / month',
    airfareCovered: true,
    healthInsuranceCovered: true,
    tuitionCovered: true,
    deadline: 'October 11, 2026',
    bondRequirement: '2-Year Home Country Physical Presence Requirement (J-1 Visa Rule)',
    description: 'Premier flagship international exchange program funded by the US Government providing full funding for master’s and PhD studies across top American universities.',
    keyEligibility: [
      'Four-year Bachelor’s degree (or equivalent 16 years of education)',
      'Strong academic record (minimum 3.0 CGPA recommended)',
      'English proficiency (GRE and TOEFL/IELTS required during cycle)',
      'Commitment to return and serve home country for at least 2 years'
    ],
    fundingType: 'Fully Funded',
    workExperienceRequired: 'Recommended but not mandatory (mandatory for select public policy tracks)',
    ageLimit: 'No official age ceiling',
    hecNominationRequired: false,
    embassyNominationRequired: false,
    applicationRoute: 'Direct Online Portal via USEFP / US Embassy in home country',
    officialSources: [
      'https://foreign.fulbrightonline.org/',
      'https://www.usefp.org/'
    ],
    stepByStepProcess: [
      'Create account on regional USEFP / Fulbright application portal',
      'Submit detailed Personal Statement and Study Objectives (approx. 500 words each)',
      'Upload official transcripts, degree certificates, and 3 academic/professional recommendation letters',
      'Attend mandatory interview if shortlisted',
      'Receive official nomination and university placement from IIE / State Department'
    ],
    fundingBreakdown: [
      { expense: 'University Tuition & Mandatory Fees', coverage: '100% Covered' },
      { expense: 'Monthly Living Stipend', coverage: '$1,800 - $2,500/mo depending on US city cost-of-living' },
      { expense: 'Roundtrip International Economy Airfare', coverage: 'Fully Provided' },
      { expense: 'Accident & Sickness Health Benefit Plan (ASPE)', coverage: 'Comprehensive Coverage' },
      { expense: 'Textbook & Settling-in Allowance', coverage: '$1,000 - $1,500 One-time grant' }
    ],
    restrictions: [
      'Dual US citizens or permanent residents (Green Card holders) are ineligible',
      'Must return to home country upon program completion for 2 years'
    ],
    logoText: 'FULBRIGHT',
    logoBg: '#0f2d59',
    eligibleNationalities: 'Open to eligible international candidates worldwide',
    gpaRequirement: '3.0+ / 4.0 (or 1st Division equivalent)',
    ieltsRequirement: 'TOEFL iBT 90+ / IELTS 7.0+ (Funded by Fulbright upon shortlisting)',
    isEligibleForPakistan: true,
    currentStatus: 'Upcoming Cycle',
    currentCycle: '2026 - 2027 Academic Year'
  },
  {
    id: 'gov-chevening-uk',
    programTitle: 'Chevening UK Government Scholarship',
    sponsorGovernment: 'UK Foreign, Commonwealth & Development Office (FCDO)',
    country: 'United Kingdom',
    flag: '🇬🇧',
    degreeLevels: ['Masters'],
    stipendMonthly: '£1,134 / month (£1,390 in London)',
    airfareCovered: true,
    healthInsuranceCovered: true,
    tuitionCovered: true,
    deadline: 'November 05, 2026',
    bondRequirement: 'Return to home country for a minimum of 2 years post-graduation',
    description: 'The UK government’s premier global scholarship scheme offering future leaders full financial support for any eligible 1-year master’s degree at any UK university.',
    keyEligibility: [
      'Undergraduate degree qualifying for entry to a UK master’s course (equivalent to UK 2:1 honours)',
      'Minimum 2 years of work experience (equivalent to 2,800 work hours)',
      'Apply to 3 different eligible master’s programs at UK universities',
      'Demonstrated leadership potential and strong career progression vision'
    ],
    fundingType: 'Fully Funded',
    workExperienceRequired: '2 Years (minimum 2,800 logged hours)',
    ageLimit: 'None',
    hecNominationRequired: false,
    embassyNominationRequired: false,
    applicationRoute: 'Official Chevening Online Application System (OAS)',
    officialSources: [
      'https://www.chevening.org/',
      'https://www.chevening.org/scholarships/'
    ],
    stepByStepProcess: [
      'Complete online registration on the Chevening OAS website',
      'Submit 4 core essays: Leadership & Influence, Relationship Building, Studying in the UK, Career Plan',
      'Select 3 eligible Master’s courses across UK universities and apply independently to each university',
      'Shortlisted applicants attend an interview at the British High Commission / Embassy',
      'Obtain at least 1 unconditional UK university offer by July deadline'
    ],
    fundingBreakdown: [
      { expense: 'Full University Tuition Fees', coverage: '100% Covered (Fee cap applies to MBA)' },
      { expense: 'Monthly Living Allowance', coverage: '£1,134/mo outside London, £1,390/mo in London' },
      { expense: 'Economy Roundtrip Flights to UK', coverage: 'Fully Provided' },
      { expense: 'Arrival Allowance & Visa Reimbursement', coverage: '100% Reimbursed' }
    ],
    restrictions: [
      'British or dual British citizens are not eligible',
      'Previous recipients of UK government-funded scholarships are ineligible'
    ],
    logoText: 'CHEVENING',
    logoBg: '#1e3a8a',
    eligibleNationalities: 'Chevening-eligible countries worldwide (over 160 countries)',
    gpaRequirement: 'Upper Second-Class (2:1) Honours Equivalent or ~3.0/4.0',
    ieltsRequirement: 'University course requirement (usually IELTS 6.5 - 7.5)',
    isEligibleForPakistan: true,
    currentStatus: 'Open for Applications',
    currentCycle: '2026 - 2027 Academic Year'
  },
  {
    id: 'gov-erasmus-mundus',
    programTitle: 'Erasmus Mundus Joint Master Degrees (EMJM)',
    sponsorGovernment: 'European Union (European Commission)',
    country: 'Europe (Multiple Countries)',
    flag: '🇪🇺',
    degreeLevels: ['Masters'],
    stipendMonthly: '€1,400 / month',
    airfareCovered: true,
    healthInsuranceCovered: true,
    tuitionCovered: true,
    deadline: 'January 15, 2027',
    bondRequirement: 'No return bond requirement (free mobility across EU)',
    description: 'Prestige European Union joint master’s programs where students study in at least two different European countries, receiving joint or double degrees upon completion.',
    keyEligibility: [
      'First higher education degree (Bachelor’s) or enrolled in final year',
      'Academic background aligned with the selected EMJM consortium catalog',
      'High English proficiency (IELTS 6.5 - 7.5 or equivalent)',
      'Open to outstanding students worldwide with no nationality restrictions'
    ],
    fundingType: 'Fully Funded (Full EU Grant)',
    workExperienceRequired: 'Not required for most technical programs',
    ageLimit: 'No age restriction',
    hecNominationRequired: false,
    embassyNominationRequired: false,
    applicationRoute: 'Direct application through individual EMJM Consortium Websites',
    officialSources: [
      'https://www.eacea.ec.europa.eu/erasmus-plus/',
      'https://erasmus-plus.ec.europa.eu/'
    ],
    stepByStepProcess: [
      'Browse the Erasmus Mundus Joint Master Catalogue for desired program track',
      'Check specific consortium deadlines and required documents (CV, Statement of Purpose, References)',
      'Submit application directly to up to 3 different EMJM consortium programs',
      'Consortium evaluates profiles and submits scholarship ranking list to the European Commission',
      'Receive official award letter and EU visa sponsorship documentation'
    ],
    fundingBreakdown: [
      { expense: 'Tuition Fees & Consortium Participation', coverage: '100% Fully Waived' },
      { expense: 'Monthly Subsistence Allowance', coverage: '€1,400/mo for full 24 months' },
      { expense: 'Travel, Installation & Visa Costs', coverage: 'Included in scholarship allowance' },
      { expense: 'Comprehensive Health & Travel Insurance', coverage: 'EU-standard comprehensive policy' }
    ],
    restrictions: [
      'Candidates cannot apply to more than 3 EMJM programs in the same cycle'
    ],
    logoText: 'ERASMUS+',
    logoBg: '#003399',
    eligibleNationalities: 'Global (All partner & program countries)',
    gpaRequirement: '3.0+ / 4.0 or top quartile of graduating class',
    ieltsRequirement: 'IELTS 6.5 - 7.5 depending on consortium specifications',
    isEligibleForPakistan: true,
    currentStatus: 'Open / Upcoming',
    currentCycle: '2026 - 2028 Cohort'
  },
  {
    id: 'gov-daad-epos-germany',
    programTitle: 'DAAD EPOS (Postgraduate Courses for Developing Countries)',
    sponsorGovernment: 'Federal Republic of Germany (BMZ & DAAD)',
    country: 'Germany',
    flag: '🇩🇪',
    degreeLevels: ['Masters', 'PhD'],
    stipendMonthly: '€934 / mo (Master) | €1,300 / mo (PhD)',
    airfareCovered: true,
    healthInsuranceCovered: true,
    tuitionCovered: true,
    deadline: 'September 30, 2026',
    bondRequirement: 'Commitment to apply skills in home country development',
    description: 'German Academic Exchange Service scholarship for young professionals from developing and newly industrialized countries to pursue practice-oriented postgraduate degrees.',
    keyEligibility: [
      'Bachelor’s degree completed with above-average grades within last 6 years',
      'At least 2 years of proven professional work experience in relevant public, private, or NGO sector',
      'Strong motivation to drive sustainable development in home region',
      'Proficiency in English (TOEFL/IELTS) or German (TestDaF/DSH) as required by course'
    ],
    fundingType: 'Fully Funded',
    workExperienceRequired: 'Minimum 2 years of relevant professional work experience',
    ageLimit: 'Degree completed within the last 6 years',
    hecNominationRequired: false,
    embassyNominationRequired: false,
    applicationRoute: 'Direct application to chosen German University / DAAD Portal',
    officialSources: [
      'https://www.daad.de/en/',
      'https://www2.daad.de/deutschland/stipendien/datenbank/en/'
    ],
    stepByStepProcess: [
      'Select up to 3 EPOS-listed master’s courses from the official DAAD booklet',
      'Prepare Europass CV, Hand-signed Motivation Letter with development relevance, and Employer letters',
      'Submit complete application packet directly to the German university admission office',
      'University admission committee nominates top applicants to DAAD for scholarship selection',
      'DAAD confirms scholarship award and coordinates visa & preparatory German language course'
    ],
    fundingBreakdown: [
      { expense: 'Tuition Fees at German Public University', coverage: '100% Free / Waived' },
      { expense: 'Monthly Living Allowance', coverage: '€934/month for Masters, €1,300/month for PhD' },
      { expense: 'Health, Accident & Personal Liability Insurance', coverage: 'Fully Provided' },
      { expense: 'Roundtrip Travel Allowance', coverage: 'Flat-rate airfare subsidy provided' },
      { expense: 'Preparatory German Language Training', coverage: 'Up to 6 months funded language school' }
    ],
    restrictions: [
      'Applicants residing in Germany for more than 15 months at application time are ineligible'
    ],
    logoText: 'DAAD',
    logoBg: '#e11d48',
    eligibleNationalities: 'DAC List developing and emerging countries',
    gpaRequirement: '2.5 German grade equivalent (~3.0 / 4.0 CGPA)',
    ieltsRequirement: 'IELTS 6.0 - 6.5 (or TOEFL iBT 80+)',
    isEligibleForPakistan: true,
    currentStatus: 'Annual Cycle',
    currentCycle: '2026 - 2027 Intake'
  },
  {
    id: 'gov-mext-japan',
    programTitle: 'MEXT Japanese Government Scholarship (Research / Undergrad)',
    sponsorGovernment: 'Government of Japan (Ministry of Education MEXT)',
    country: 'Japan',
    flag: '🇯🇵',
    degreeLevels: ['Undergraduate', 'Masters', 'PhD'],
    stipendMonthly: '143,000 - 145,000 JPY / month',
    airfareCovered: true,
    healthInsuranceCovered: true,
    tuitionCovered: true,
    deadline: 'May 30, 2027',
    bondRequirement: 'None',
    description: 'Japan’s premier government award covering complete university education, tuition exemption, generous living stipend, and roundtrip flights to Japan.',
    keyEligibility: [
      'Undergraduate: Under 25 years old with 12 years of formal education',
      'Postgraduate / Research: Under 35 years old with 16+ years of education (Bachelor’s degree)',
      'Passing written examination and Embassy interview (English & Japanese basics)',
      'Clear physical and mental health clearance'
    ],
    fundingType: 'Fully Funded',
    workExperienceRequired: 'Not required',
    ageLimit: 'Under 35 for Graduate / Under 25 for Undergraduate',
    hecNominationRequired: false,
    embassyNominationRequired: true,
    applicationRoute: 'Embassy Recommendation Track or University Recommendation Track',
    officialSources: [
      'https://www.mext.go.jp/en/',
      'https://www.studyinjapan.go.jp/en/'
    ],
    stepByStepProcess: [
      'Download application form from the Embassy of Japan in your home country',
      'Submit research proposal, academic transcripts, recommendations, and medical certificate',
      'Sit for mandatory written exams (English & Japanese) at the Embassy',
      'Attend panel interview at Embassy for successful exam candidates',
      'Obtain Letter of Provisional Acceptance from Japanese universities for graduate track'
    ],
    fundingBreakdown: [
      { expense: 'University Examination, Admission & Tuition Fees', coverage: '100% Waived' },
      { expense: 'Monthly Living Allowance', coverage: '143,000 JPY (Research/Masters) | 145,000 JPY (PhD)' },
      { expense: 'Economy Roundtrip Flight Tickets', coverage: 'Fully Provided' },
      { expense: 'Preparatory Japanese Language Training', coverage: '6 Months intensive courses included' }
    ],
    restrictions: [
      'Active military personnel or civilian employees of armed forces are ineligible',
      'Must arrive in Japan during designated arrival window'
    ],
    logoText: 'MEXT',
    logoBg: '#dc2626',
    eligibleNationalities: 'Countries having diplomatic relations with Japan',
    gpaRequirement: 'Minimum 70% or 3.0/4.0 academic average',
    ieltsRequirement: 'IELTS 6.5+ or Japanese JLPT certification',
    isEligibleForPakistan: true,
    currentStatus: 'Annual Embassy Cycle',
    currentCycle: '2027 Academic Year'
  },
  {
    id: 'gov-turkiye-burslari',
    programTitle: 'Türkiye Bursları Government Scholarships',
    sponsorGovernment: 'Republic of Türkiye (YTB)',
    country: 'Turkey',
    flag: '🇹🇷',
    degreeLevels: ['Undergraduate', 'Masters', 'PhD'],
    stipendMonthly: '3,500 - 6,500 TRY / month + Free Dormitory',
    airfareCovered: true,
    healthInsuranceCovered: true,
    tuitionCovered: true,
    deadline: 'February 20, 2027',
    bondRequirement: 'None',
    description: 'Comprehensive competitive government scholarship program provided by the Presidency for Turks Abroad and Related Communities for study in Turkish universities.',
    keyEligibility: [
      'Undergraduate: Minimum 70% high school academic achievement (90% for Medicine/Dentistry/Pharmacy)',
      'Postgraduate: Minimum 75% graduation grade in previous degree',
      'Age limits: Under 21 (Undergrad), Under 30 (Masters), Under 35 (PhD)',
      'Open to citizens of all countries except Turkish citizens'
    ],
    fundingType: 'Fully Funded',
    workExperienceRequired: 'Not required',
    ageLimit: 'Under 21 (UG), Under 30 (Master), Under 35 (PhD)',
    hecNominationRequired: false,
    embassyNominationRequired: false,
    applicationRoute: 'Türkiye Bursları Official Online Application System (TBBS)',
    officialSources: [
      'https://www.turkiyeburslari.gov.tr/',
      'https://tbbs.turkiyeburslari.gov.tr/'
    ],
    stepByStepProcess: [
      'Register an account on TBBS online application system',
      'Enter academic scores, extracurriculars, language scores, and letter of intent',
      'Select up to 12 university and department preferences across Türkiye',
      'Shortlisted candidates invited to in-person interviews at Turkish Embassies/Cultural Centers',
      'Final placement and 1-year Turkish language course (TÖMER) provided'
    ],
    fundingBreakdown: [
      { expense: 'University Placement & Full Tuition Fees', coverage: '100% Free' },
      { expense: 'Student Accommodation / Free Dormitory', coverage: 'Free State University Dormitory' },
      { expense: 'Monthly Living Stipend', coverage: 'Monthly cash allowance per degree level' },
      { expense: '1-Year Turkish Language Course (TÖMER)', coverage: '100% Covered' },
      { expense: 'Roundtrip Flight Ticket & Health Insurance', coverage: 'Fully Provided' }
    ],
    restrictions: [
      'Turkish citizens and individuals who have lost Turkish citizenship cannot apply',
      'Currently enrolled students in Turkish universities for same degree level cannot apply'
    ],
    logoText: 'TÜRKİYE BURSLARI',
    logoBg: '#e11d48',
    eligibleNationalities: 'All international nationalities worldwide',
    gpaRequirement: '70% for Undergrad | 75% for Grad | 90% for Medicine',
    ieltsRequirement: 'Only required if selecting English-taught degree program',
    isEligibleForPakistan: true,
    currentStatus: 'Annual Winter Cycle',
    currentCycle: '2027 - 2028 Cohort'
  },
  {
    id: 'gov-australia-awards',
    programTitle: 'Australia Awards Scholarships (AAS)',
    sponsorGovernment: 'Australian Department of Foreign Affairs and Trade (DFAT)',
    country: 'Australia',
    flag: '🇦🇺',
    degreeLevels: ['Masters'],
    stipendMonthly: 'AUD $2,500 / month',
    airfareCovered: true,
    healthInsuranceCovered: true,
    tuitionCovered: true,
    deadline: 'April 30, 2027',
    bondRequirement: 'Return to home country for minimum of 2 years post-study',
    description: 'Prestigious long-term awards administered by DFAT aiming to contribute to the development needs of Australia’s partner countries across the Indo-Pacific.',
    keyEligibility: [
      'Minimum 16 years of education (Bachelor’s degree)',
      'Minimum 2 years of relevant professional work experience',
      'IELTS 6.5 (no band < 6.0) or TOEFL equivalent at application time',
      'Strong development impact proposal aligned with country priority areas'
    ],
    fundingType: 'Fully Funded',
    workExperienceRequired: '2 Years minimum professional experience',
    ageLimit: 'Minimum 18 years old; no upper age limit',
    hecNominationRequired: false,
    embassyNominationRequired: false,
    applicationRoute: 'Online Australia Scholarships Information System (OASIS)',
    officialSources: [
      'https://www.dfat.gov.au/people-to-people/australia-awards',
      'https://oasis.dfat.gov.au/'
    ],
    stepByStepProcess: [
      'Review country-specific eligibility criteria on the DFAT Australia Awards website',
      'Register on OASIS and prepare Development Impact Plan (DIP)',
      'Upload academic records, IELTS certificates, and employer support letters',
      'Shortlisted candidates complete written assessment and panel interview',
      'Pre-departure briefings and university placement finalized by Australian High Commission'
    ],
    fundingBreakdown: [
      { expense: 'Full Tuition Fees at Top Australian University', coverage: '100% Waived' },
      { expense: 'Contribution to Living Expenses (CLE)', coverage: 'AUD $2,500 - $3,000/month' },
      { expense: 'Overseas Student Health Cover (OSHC)', coverage: 'Comprehensive medical coverage' },
      { expense: 'Establishment Allowance & Introductory Academic Program', coverage: 'One-off AUD $5,000 grant' },
      { expense: 'Return Economy Class Airfare', coverage: 'Fully Provided' }
    ],
    restrictions: [
      'Permanent residents of Australia or holders of Australian citizenship are ineligible'
    ],
    logoText: 'AUSTRALIA AWARDS',
    logoBg: '#059669',
    eligibleNationalities: 'Eligible Indo-Pacific & South Asian partner nations',
    gpaRequirement: '3.0 / 4.0 or Upper 2nd Class Division',
    ieltsRequirement: 'IELTS Academic 6.5 (minimum 6.0 in each subtest)',
    isEligibleForPakistan: true,
    currentStatus: 'Annual Cycle',
    currentCycle: '2027 Intake'
  },
  {
    id: 'gov-csc-china',
    programTitle: 'Chinese Government Scholarship (CSC / Silk Road Program)',
    sponsorGovernment: 'Ministry of Education of the People’s Republic of China (CSC)',
    country: 'China',
    flag: '🇨🇳',
    degreeLevels: ['Undergraduate', 'Masters', 'PhD'],
    stipendMonthly: '2,500 - 3,500 RMB / month + Free Dormitory',
    airfareCovered: false,
    healthInsuranceCovered: true,
    tuitionCovered: true,
    deadline: 'March 15, 2027',
    bondRequirement: 'None',
    description: 'National scholarship scheme established by the Chinese government to sponsor international students, teachers, and scholars to study and research in Chinese universities.',
    keyEligibility: [
      'Undergraduate: High school graduate under age 25',
      'Masters: Bachelor’s degree holder under age 35',
      'Doctoral: Master’s degree holder under age 40',
      'Language proficiency: HSK level 4+ (for Chinese-taught) or IELTS 6.0+ (for English-taught)'
    ],
    fundingType: 'Fully Funded (Type A / Type B)',
    workExperienceRequired: 'Not required',
    ageLimit: 'Under 25 (UG), Under 35 (Master), Under 40 (PhD)',
    hecNominationRequired: false,
    embassyNominationRequired: false,
    applicationRoute: 'CSC Online Application Portal (Campus China) + Direct Uni Portal',
    officialSources: [
      'https://www.campuschina.org/',
      'https://studyinchina.csc.edu.cn/'
    ],
    stepByStepProcess: [
      'Create account on CSC online application system (Campus China)',
      'Choose Scholarship Category (Type A through embassy or Type B through direct university nomination)',
      'Contact professors at target Chinese university to obtain Pre-admission Notice or Acceptance Letter',
      'Submit Foreigner Physical Examination Form and Police Clearance Certificate',
      'Receive official JW201/JW202 visa form and university admission package'
    ],
    fundingBreakdown: [
      { expense: 'Full Tuition Fees Waiver', coverage: '100% Free' },
      { expense: 'Free On-Campus University Accommodation', coverage: 'Standard twin or single room provided' },
      { expense: 'Monthly Living Allowance', coverage: '2,500 RMB (UG) | 3,000 RMB (Master) | 3,500 RMB (PhD)' },
      { expense: 'Comprehensive Medical Insurance for International Students', coverage: '800 RMB/year fully covered' }
    ],
    restrictions: [
      'Applicants cannot hold other Chinese government scholarship grants concurrently'
    ],
    logoText: 'CSC CHINA',
    logoBg: '#b91c1c',
    eligibleNationalities: 'All international countries with bilateral agreements',
    gpaRequirement: '75% or 3.0 / 4.0 minimum',
    ieltsRequirement: 'IELTS 6.0+ or English Proficiency Certificate from university',
    isEligibleForPakistan: true,
    currentStatus: 'Open for 2027',
    currentCycle: '2027 - 2028 Academic Year'
  }
];
