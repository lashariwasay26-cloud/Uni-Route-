import sys
sys.path.append('/tmp')
from scholarship_builder import *

scholarships_8_14 = [
    # 8. TIPP Thailand
    {
        "id": "gov-tipp-thailand",
        "programTitle": "Thailand International Postgraduate Programme (TIPP)",
        "sponsorGovernment": "Thailand International Cooperation Agency (TICA), Ministry of Foreign Affairs, Thailand",
        "country": "Thailand",
        "flag": "🇹🇭",
        "degreeLevels": ["Masters"],
        "stipendMonthly": "Living Allowance + Accommodation (Under TICA Support Category)",
        "airfareCovered": True,
        "healthInsuranceCovered": True,
        "tuitionCovered": True,
        "deadline": "Course-Specific Deadlines (Typically Feb – April)",
        "bondRequirement": "Must return to home country to contribute to national development",
        "description": "Thailand's principal international development-cooperation postgraduate framework. Offers up to 60 annual Master's scholarships in priority development fields such as SDGs, Public Health, Agriculture, and Climate Resilience.",
        "keyEligibility": [
            "Government/Diplomatic nomination route: Candidates must be nominated through their national coordinating agency / Royal Thai Embassy",
            "Level: Master's degree only (Bachelor's and PhD are NOT available)",
            "Priority fields: Sustainable Development, Public Health, Food Security, Climate Resilience, STI",
            "Annual awards: Approximately up to 60 scholarships globally across participating Thai universities",
            "Applicants must have relevant professional/development background in their home country",
            "Funding category: Full Support vs Partial Support depending on recipient country eligibility list"
        ],
        "supabaseDbId": 228,
        "overviewLong": "The Thailand International Postgraduate Programme (TIPP) is administered by the Thailand International Cooperation Agency (TICA), Ministry of Foreign Affairs of Thailand. Established to provide Master's-level education to professionals and officials from developing countries, TIPP focuses on areas where Thailand possesses specialized development expertise: Sufficiency Economy Philosophy/SDGs, Public Health, Agriculture and Food Security, Climate Resilience, and Science & Technology. Candidates are nominated through designated national government authorities and Royal Thai Embassies.",
        "fundingType": "Development-Cooperation Master's Award",
        "workExperienceRequired": "Relevant professional / institutional work experience preferred",
        "ageLimit": "Generally under 50 years old (course-specific)",
        "hecNominationRequired": False,
        "embassyNominationRequired": True,
        "applicationRoute": "Government Nomination & Diplomatic Coordination Route (Via TICA / Royal Thai Embassy)",
        "officialSources": [
            "Thailand International Cooperation Agency (TICA) - tica-thaigov.mfa.go.th",
            "Ministry of Foreign Affairs of Thailand",
            "Royal Thai Embassy in Islamabad"
        ],
        "stepByStepProcess": [
            "STEP 1 — Check TIPP Call: Review available Master's courses, host universities, and deadlines on TICA portal.",
            "STEP 2 — Confirm Country Eligibility: Verify your country's status on TICA's official full-support/partial-support list.",
            "STEP 3 — Select Master's Course: Choose from the specialized development courses offered for that annual cycle.",
            "STEP 4 — Prepare Application Dossier: Complete TIPP application form, medical report, transcripts, degree certificates, and concept paper.",
            "STEP 5 — Obtain National Nomination: Submit dossier to your country's designated government nominating agency or Royal Thai Embassy.",
            "STEP 6 — TICA & University Evaluation: TICA and Thai host universities review dossiers, conduct interviews, and confirm academic admission.",
            "STEP 7 — Final Announcement & Travel: TICA publishes approved candidate lists; travel arrangements and study visas issued."
        ],
        "restrictions": [
            "Bachelor's and PhD degrees are NOT offered under standard TIPP",
            "Direct ordinary application to Thai university does not substitute for TIPP government nomination",
            "Must return to home country upon graduation to support national development"
        ],
        "logoText": "TIPP",
        "logoBg": "from-blue-600 to-amber-700",
        "eligibleNationalities": "Developing country nationals listed on official TICA eligible-country documentation",
        "gpaRequirement": "Strong Bachelor's degree academic record relevant to chosen Master's discipline",
        "ieltsRequirement": "Course-specific English proficiency evidence (IELTS / TOEFL / Institutional testing)",
        "isEligibleForPakistan": True,
        "warningNotice": "TIPP is not a simple open university scholarship. Applicants must be nominated through their country's official government/diplomatic coordinating channel.",
        "currentStatus": "2026 Cycle Closed (Selection Announcements Concluded)",
        "currentCycle": "2026/2027 Academic Year",
        "lastVerifiedDate": "September 2026",
        "fullSections": [
            get_pillar_1("Thailand International Postgraduate Programme (TIPP)", "TICA, Ministry of Foreign Affairs, Government of Thailand", "Thailand", "Master's Degree Only", "Government Nomination and Diplomatic Coordination Route", "Must be verified against current official TIPP eligible-country list", "Up to 2 years (Full-time Master's)", "Up to 60 Annual Scholarships"),
            get_pillar_2("Development-Cooperation Master's Scholarship", "Full tuition fees covered for the approved Master's programme", "Monthly living allowance provided according to TICA regulations", "Economy class international return airfare under full-support terms", "University accommodation arranged by host institution or covered under allowance", "Health insurance support provided under TICA framework", "Course-related study trips and academic materials support"),
            get_pillar_3([
                "Government nomination: Applicants must follow their country's official national nomination procedure; direct university applications are ineligible.",
                "Degree level: Master's degree ONLY. Bachelor's and PhD programmes are not part of TIPP.",
                "Development focus: Must demonstrate how the Master's study aligns with home-country national development priorities.",
                "Professional background: Strong preference for professionals, researchers, and public officials in relevant fields.",
                "Quota constraint: Approximately up to 60 scholarships offered globally per year.",
                "Return commitment: Scholars are expected to return home upon completion of the award."
            ]),
            get_pillar_4([
                "English language: Course instruction is conducted in English.",
                "Universal score rule: Do not store one universal IELTS or TOEFL requirement; language requirements depend on the host Thai university.",
                "Standardized tests: GRE / GMAT not required by TICA."
            ]),
            get_pillar_5([
                "Nomination Workflow (Applicant -> National Nominating Agency -> Royal Thai Embassy -> TICA -> Thai Host University -> Award):",
                "1. Check TICA official portal for annual course list and guidelines.",
                "2. Confirm eligibility against country list (Full-Support vs Partial-Support).",
                "3. Contact national coordinating authority in home country.",
                "4. Select course from published TIPP catalogue and prepare documents.",
                "5. Submit completed application to national nominating authority before local deadline.",
                "6. National authority endorses and forwards dossier to Royal Thai Embassy / TICA.",
                "7. TICA and host universities screen candidates and conduct academic evaluation.",
                "8. Final approved candidates published on TICA website."
            ]),
            get_pillar_6([
                "Completed TIPP Application Form",
                "Official Medical Examination Report (certified by physician)",
                "Official academic transcripts for Bachelor's degree",
                "Bachelor's degree graduation certificate",
                "Valid passport copy",
                "Curriculum Vitae",
                "Statement of Purpose / Concept Paper relating study to development",
                "Official nomination / recommendation letter from employer or government authority",
                "English language proficiency certificate (where required by host course)"
            ]),
            get_pillar_7("2026/2027 Cycle (Course-Specific Deadlines)", [
                "Course deadlines: Staggered deadlines (e.g. 23 February 2026 for early courses)",
                "Selection announcements: May – June 2026",
                "Academic intake: August / September in Thailand",
                "Current status: 2026 cycle closed; monitor TICA for next annual call"
            ], [
                "https://tica-thaigov.mfa.go.th"
            ])
        ]
    },

    # 9. BDGS Brunei
    {
        "id": "gov-bdgs-brunei",
        "programTitle": "Government of Brunei Darussalam Scholarship (BDGS)",
        "sponsorGovernment": "Ministry of Foreign Affairs, Government of Brunei Darussalam",
        "country": "Brunei Darussalam",
        "flag": "🇧🇳",
        "degreeLevels": ["Diploma", "Undergraduate", "Masters"],
        "stipendMonthly": "BND 650 / month (BND 500 Personal + BND 150 Meals Allowance)",
        "airfareCovered": True,
        "healthInsuranceCovered": True,
        "tuitionCovered": True,
        "deadline": "15 February 2026, 23:59 Brunei Time (Annual Mid-Feb Deadline)",
        "bondRequirement": "Must leave Brunei Darussalam immediately after graduation",
        "description": "Brunei's premier sovereign award tenable at UBD, UNISSA, UTB, KUPU SB, and Politeknik Brunei. An exceptionally generous package with full tuition exemption, BND 650/month cash allowances, free residential college housing, and BND 500 baggage grant.",
        "keyEligibility": [
            "Open to foreign international students (Pakistani applicants eligible; circulated by HEC)",
            "Hybrid Application: Must complete central online BDGS application; AND for UBD & UTB, also complete separate online university application",
            "Age limits: Diploma & Undergraduate applicants not more than 25 years; Master's applicants not more than 35 years (as of 1 July)",
            "Level: Diploma, Bachelor's, and Master's only (PhD is NOT offered under BDGS)",
            "Language: IELTS 6.0 / TOEFL 550 or recognized alternatives (written language tests may apply)",
            "Full tuition waiver + BND 650/mo allowance + BND 600/yr book grant + free campus housing + return airfare + insurance"
        ],
        "supabaseDbId": 229,
        "overviewLong": "The Government of Brunei Darussalam Scholarship for Foreign Students Tenable in Brunei Darussalam (BDGS) is funded by the Brunei Ministry of Foreign Affairs. Tenable at Universiti Brunei Darussalam (UBD), Universiti Islam Sultan Sharif Ali (UNISSA), Universiti Teknologi Brunei (UTB), Kolej Universiti Perguruan Ugama Seri Begawan (KUPU SB), and Politeknik Brunei (PB). The award covers full tuition, residential college accommodation, monthly allowances, book allowances, return airfare, baggage allowances, and comprehensive health insurance.",
        "fundingType": "100% Fully Funded Sovereign Award",
        "workExperienceRequired": "None required",
        "ageLimit": "UG/Diploma: not more than 25 years | Master's: not more than 35 years (as of 1 July)",
        "hecNominationRequired": False,
        "embassyNominationRequired": False,
        "applicationRoute": "Central Online BDGS Portal (+ Separate University Application for UBD/UTB)",
        "officialSources": [
            "Ministry of Foreign Affairs, Brunei Darussalam (mfa.gov.bn)",
            "Universiti Brunei Darussalam (UBD) Admissions",
            "Universiti Teknologi Brunei (UTB) Admissions"
        ],
        "stepByStepProcess": [
            "STEP 1 — Review BDGS Announcement: Check official MFA Brunei announcement and eligible courses across 5 institutions.",
            "STEP 2 — Select Programme: Choose eligible course at UBD, UNISSA, UTB, KUPU SB, or Politeknik Brunei.",
            "STEP 3 — Prepare Documents: Gather certified copies of degrees, transcripts, birth certificate, English test, and 2 referee forms.",
            "STEP 4 — Complete Online BDGS Application: Submit online scholarship form on official Brunei MFA system before 15 February.",
            "STEP 5 — University Application (UBD & UTB): If applying to UBD or UTB, submit separate online institutional application on university portal.",
            "STEP 6 — Interview & Written Exam: Shortlisted candidates attend interview and written language tests (English/Malay/Arabic where applicable).",
            "STEP 7 — Award Confirmation: Ministry issues award notification; economy return flight ticket booked; arrive in Brunei."
        ],
        "restrictions": [
            "PhD degrees are NOT offered under BDGS",
            "Paid employment during scholarship is strictly prohibited",
            "Must leave Brunei Darussalam immediately after degree completion",
            "No family allowances (spouse/child funding or family accommodation not provided)"
        ],
        "logoText": "BDGS",
        "logoBg": "from-amber-500 to-yellow-900",
        "eligibleNationalities": "Foreign international applicants (including Pakistan)",
        "gpaRequirement": "Strong academic qualifications matching institution entry standards",
        "ieltsRequirement": "IELTS 6.0 / TOEFL 550 / GCE O-Level English Credit 6 / IGCSE Grade C",
        "isEligibleForPakistan": True,
        "warningNotice": "University application does not replace BDGS application. For UBD and UTB, submitting BOTH the BDGS application AND the separate university application is mandatory.",
        "currentStatus": "2026/2027 Cycle Closed (2027/28 Call Pending Announcement)",
        "currentCycle": "2026/2027 Academic Year",
        "lastVerifiedDate": "September 2026",
        "fullSections": [
            get_pillar_1("Government of Brunei Darussalam Scholarship (BDGS)", "Ministry of Foreign Affairs, Brunei Darussalam", "Brunei Darussalam", "Diploma, Undergraduate (Bachelor's), Postgraduate Master's (No PhD)", "Online BDGS Application (+ Separate Uni Portal for UBD & UTB)", "Eligible foreign applicants (specifically circulated by HEC in Pakistan)", "Diploma: 3 yrs; Bachelor's: 4 yrs; Master's: 1–2 yrs", "2026/2027 Verified Cycle (Closed)"),
            get_pillar_2("100% Fully Funded Sovereign Package", "Full exemption from tuition fees, acceptance fees, examination fees, registration fees, and orientation fees", "Combined monthly cash allowance of BND 650/month (BND 500 personal allowance + BND 150 meals allowance)", "Return economy-class airfare (arrival from home country + return upon degree completion)", "Free accommodation provided at the residential college of the university/polytechnic", "Comprehensive health insurance cover for scholarship duration", "BND 600 per academic year book allowance + baggage shipment allowance up to BND 500 for non-ASEAN nations"),
            get_pillar_3([
                "Age cutoffs (STRICT): Must not exceed 25 years of age for Diploma/UG, and must not exceed 35 years for Master's, as of 1 July of the programme year.",
                "Degree level: Diploma, Bachelor's, and Master's ONLY. PhD degrees are NOT offered under BDGS.",
                "Employment ban: Scholarship recipients are strictly prohibited from undertaking paid employment.",
                "Post-study departure: Must leave Brunei Darussalam immediately upon completing the programme.",
                "First-time study rule: Bruneian citizens, permanent residents, and students currently/previously studying in Brunei tertiary institutions are ineligible.",
                "Concurrent awards: Cannot hold another scholarship, fellowship, grant, or loan without prior MFA approval."
            ]),
            get_pillar_4([
                "English requirement: IELTS 6.0, TOEFL 550 paper-based, GCE O-Level English Credit 6, or IGCSE English Grade C.",
                "Language examinations: Applicants may be required to sit written examinations assessing proficiency in English, Malay, or Arabic where applicable.",
                "Standardized testing: No universal SAT, GRE, or GMAT requirement."
            ]),
            get_pillar_5([
                "Application Architecture (Central BDGS + Institutional Application):",
                "1. Consult official Brunei MFA scholarship portal and select participating institution (UBD, UTB, UNISSA, KUPU SB, PB).",
                "2. Check entry criteria and language prerequisites for chosen course.",
                "3. Submit the central online BDGS scholarship application before 15 February, 23:59 Brunei time.",
                "4. CRITICAL: If applying to UBD or UTB, also complete the university's separate online admission application.",
                "5. Wait for institutional and government screening.",
                "6. Attend interview / written assessment if requested.",
                "7. Receive final decision from Brunei MFA and complete visa/travel arrangements."
            ]),
            get_pillar_6([
                "Completed online BDGS application form",
                "Certified true copies of academic qualifications, certificates, testimonials, and transcripts",
                "Certified true copy of birth certificate",
                "Certified copy of international passport",
                "Certified English translation of any non-English supporting documents",
                "Two recommendation letters / assessments from academic referees",
                "Proof of separate university online application (for UBD and UTB applicants)",
                "English language test certificate (IELTS 6.0 / TOEFL 550)"
            ]),
            get_pillar_7("2026/2027 Academic Year", [
                "Application opened: 15 December 2025",
                "Application deadline: 15 February 2026, 23:59 Brunei time",
                "Interviews & assessments: March – April 2026",
                "Final decisions: June – July 2026",
                "Programme commences: July / August in Brunei",
                "Current status: 2026/27 closed; 2027/28 call pending"
            ], [
                "https://www.mfa.gov.bn"
            ])
        ]
    },

    # 10. Saudi Arabia Government Scholarships
    {
        "id": "gov-saudi-government",
        "programTitle": "Saudi Arabia Government Scholarships for International Students",
        "sponsorGovernment": "Ministry of Education, Kingdom of Saudi Arabia",
        "country": "Saudi Arabia",
        "flag": "🇸🇦",
        "degreeLevels": ["Undergraduate", "Masters", "PhD"],
        "stipendMonthly": "Institution/Scholarship-Specific Monthly Allowance + Arrival Reward",
        "airfareCovered": True,
        "healthInsuranceCovered": True,
        "tuitionCovered": True,
        "deadline": "University-Specific Deadlines (Study in Saudi Active Framework)",
        "bondRequirement": "None (Educational residence permit valid for study duration)",
        "description": "National framework operated by the Saudi Ministry of Education across public universities (e.g. King Saud, King Abdulaziz, KFUPM). Offers full external scholarships covering tuition, housing, annual flight tickets, and monthly stipends.",
        "keyEligibility": [
            "Pakistani applicants eligible for external scholarships (residing outside Saudi Arabia)",
            "Three scholarship categories: Full scholarship, Partial scholarship, and Paid seat",
            "Age limits: Bachelor's / Arabic Institute: 17–25 years; Master's: up to 30 years; Doctorate: up to 35 years",
            "Application channels: (A) Study in Saudi platform / University Direct; (B) Saudi Cultural Attaché / Embassy",
            "No general HEC nomination requirement in current national framework",
            "Full scholarship includes: Tuition waiver + free university housing + annual flight tickets + health care + arrival reward"
        ],
        "supabaseDbId": 230,
        "overviewLong": "The Saudi Arabia Government Scholarships framework is operated by the Saudi Ministry of Education across public universities including King Saud University, King Abdulaziz University, King Fahd University of Petroleum and Minerals (KFUPM), Umm Al-Qura University, and the Islamic University of Madinah. International students residing outside Saudi Arabia apply for 'External Scholarships' primarily through the official 'Study in Saudi' platform or individual university admission portals, with diplomatic channels also recognized. Full scholarships cover study costs, housing, monthly stipends, health care, annual travel tickets, and educational visa sponsorship.",
        "fundingType": "Full / Partial / Paid (University Dependent)",
        "workExperienceRequired": "None required (fresh graduates eligible)",
        "ageLimit": "UG: 17–25 years | Master's: up to 30 years | Doctorate: up to 35 years",
        "hecNominationRequired": False,
        "embassyNominationRequired": False,
        "applicationRoute": "Primary: Study in Saudi Platform / University Direct | Secondary: Saudi Cultural Attaché",
        "officialSources": [
            "Ministry of Education, Kingdom of Saudi Arabia",
            "Study in Saudi Official Portal (studyinsaudi.moe.gov.sa)",
            "Individual Saudi Public University Portals"
        ],
        "stepByStepProcess": [
            "STEP 1 — Access Study in Saudi: Register on the official Study in Saudi portal (studyinsaudi.moe.gov.sa).",
            "STEP 2 — Explore Universities: Browse participating public universities and academic disciplines.",
            "STEP 3 — Check Requirements: Review academic thresholds, language of instruction, age limits, and scholarship type.",
            "STEP 4 — Upload Documents: Submit attested academic certificates, passport, medical report, police clearance, and recommendations.",
            "STEP 5 — Submit Application: Complete submission before the university-specific application deadline.",
            "STEP 6 — University & Ministry Review: Application is reviewed by target university, then approved by Ministry of Education.",
            "STEP 7 — Educational Visa & Arrival: Receive admission notice; educational visa issued; travel to Saudi Arabia."
        ],
        "restrictions": [
            "Cannot hold another Saudi institutional scholarship at the same degree level simultaneously",
            "Must not have been previously dismissed from any Saudi educational institution",
            "Must pass medical examination and provide clean criminal record certificate",
            "Students must adhere to Saudi residency and university regulations"
        ],
        "logoText": "KSA",
        "logoBg": "from-emerald-700 to-green-950",
        "eligibleNationalities": "Foreign international students globally (including Pakistani citizens)",
        "gpaRequirement": "University/programme-specific (competitive evaluation matching Saudi student admission standards)",
        "ieltsRequirement": "University/programme-specific (proof of proficiency in language of instruction required)",
        "isEligibleForPakistan": True,
        "warningNotice": "There is no single universal national deadline or stipend figure for Saudi Arabia. Benefits and deadlines vary by institution, programme, and award category (Full vs Partial vs Paid).",
        "currentStatus": "Active National Framework (Application Windows Staggered by University)",
        "currentCycle": "2026/2027 Academic Year",
        "lastVerifiedDate": "September 2026",
        "fullSections": [
            get_pillar_1("Saudi Arabia Government Scholarships", "Ministry of Education, Kingdom of Saudi Arabia", "Saudi Arabia", "Undergraduate, Master's, and Doctoral (PhD)", "Study in Saudi Portal / University Direct OR Saudi Cultural Attaché", "Eligible as external scholarship applicants (residing outside Saudi Arabia)", "UG: 4–5 years; Master's: 2 years; PhD: 3–4 years", "Active National Framework"),
            get_pillar_2("Full Scholarship Package (Subject to Award Type)", "100% full tuition waiver under qualifying full scholarship terms", "Monthly living stipend (institution and scholarship specific; not a single national figure)", "Annual return airfare tickets under full scholarship regulations", "Free university dormitory accommodation provided for external scholarship students", "Comprehensive health care at university hospitals and public facilities", "Financial reward upon arrival + free residence permit (Iqama) for study period"),
            get_pillar_3([
                "Category distinction: Must verify whether offered a Full scholarship, Partial scholarship, or Paid seat.",
                "Age limits (STRICT): Bachelor's / Arabic Institute: 17–25 years; Master's: up to 30 years; Doctorate: up to 35 years.",
                "Prior dismissal: Must not have been previously dismissed from any Saudi university.",
                "Legal & medical clearance: Must provide police character certificate (no criminal record) and pass medical screening.",
                "Concurrent funding: Cannot hold another Saudi government scholarship at the same degree level.",
                "HEC involvement: Not the standard national scholarship mechanism."
            ]),
            get_pillar_4([
                "Language of instruction: Proof of proficiency in language of study (Arabic or English) required under Saudi educational visa rules.",
                "IELTS / TOEFL: Institution and programme specific; required for English-taught STEM and business disciplines.",
                "Standardized tests: Individual universities may require SAT, ACT, or institutional entrance examinations."
            ]),
            get_pillar_5([
                "University / Study in Saudi Route Workflow (Primary):",
                "1. Create account on the official Study in Saudi portal (studyinsaudi.moe.gov.sa).",
                "2. Select preferred public university and degree programme.",
                "3. Check specific requirements, age limits, and scholarship classification.",
                "4. Upload required personal, academic, and medical documentation.",
                "5. Submit application within the university's designated admission window.",
                "6. University conducts academic screening; Ministry processes scholarship approval.",
                "7. Successful candidate receives educational visa and final acceptance."
            ]),
            get_pillar_6([
                "Valid international passport copy",
                "Personal details and passport-size photographs",
                "Certified academic certificates (Secondary school for UG; Bachelor's for Master's; Master's for PhD)",
                "Official academic transcripts with grading breakdown",
                "Attested / authenticated certificates (Ministry of Foreign Affairs / Saudi Embassy)",
                "Certificate of good conduct / police clearance record",
                "Official medical examination / health certificate",
                "Academic recommendation letters (as required by host university)",
                "Language proficiency certificate (IELTS/TOEFL for English tracks)"
            ]),
            get_pillar_7("Active National Framework (Rolling / Staggered)", [
                "Application opening dates: Determined by individual universities",
                "Application deadlines: University-specific (no single national closing date)",
                "Visa processing: Educational visa processed post-acceptance",
                "Academic year commences: September / October in Saudi Arabia",
                "Current status: Active framework on Study in Saudi platform"
            ], [
                "https://studyinsaudi.moe.gov.sa"
            ])
        ]
    },

    # 11. Qatar University
    {
        "id": "gov-qatar-university",
        "programTitle": "Qatar University International Students Scholarship",
        "sponsorGovernment": "Qatar University (QU), State of Qatar",
        "country": "Qatar",
        "flag": "🇶🇦",
        "degreeLevels": ["Undergraduate"],
        "stipendMonthly": "QAR 500 / month (Monthly Salary / Allowance)",
        "airfareCovered": True,
        "healthInsuranceCovered": False,
        "tuitionCovered": True,
        "deadline": "25 March 2026 (Fall 2026 Intake Closed)",
        "bondRequirement": "None (Must maintain 3.0 GPA to retain award)",
        "description": "Qatar University's prestigious competitive scholarship for international Bachelor's applicants. Exclusively for undergraduate students with a minimum high-school average of 95%.",
        "keyEligibility": [
            "Undergraduate / Bachelor's degree applicants ONLY (Master's and PhD NOT covered)",
            "Academic Deal-Breaker: Minimum high-school certificate average of at least 95%",
            "Must secure final acceptance to Qatar University and satisfy college-specific requirements",
            "Direct University Track: Applied within QU online admission application (No Embassy track; No HEC nomination)",
            "Continuation: Must maintain cumulative GPA >= 3.0/4.0 and complete >= 12 credits per semester",
            "100% tuition exemption + textbook fee exemption + QAR 500/mo + student housing (2/room) + campus transport + annual airfare"
        ],
        "supabaseDbId": 231,
        "overviewLong": "The Qatar University International Students Scholarship is an institutional award offered by Qatar University to recruit academically outstanding international applicants for undergraduate studies. The scholarship is awarded on a competitive basis to students who achieve a minimum high-school average of 95% and receive final admission to QU. The award covers full tuition fees, textbook exemptions, university dormitory accommodation (two students per room with campus transport), a monthly allowance of QAR 500, annual round-trip flight tickets, and student visa sponsorship.",
        "fundingType": "Highly Funded Undergraduate Award",
        "workExperienceRequired": "None required",
        "ageLimit": "Subject to high-school graduation recency requirements",
        "hecNominationRequired": False,
        "embassyNominationRequired": False,
        "applicationRoute": "Direct University Track (Within QU Online Admission Application)",
        "officialSources": [
            "Qatar University Official Portal (qu.edu.qa)",
            "QU Scholarships and International Admissions Section",
            "QU Undergraduate Admissions"
        ],
        "stepByStepProcess": [
            "STEP 1 — Check Admission Criteria: Confirm high school qualification is accepted and meets the strict 95% threshold.",
            "STEP 2 — Choose Bachelor's Major: Review college requirements (Engineering, Arts & Sciences, Business, etc.).",
            "STEP 3 — Create QU Online Application: Complete online admission application on the QU admissions system.",
            "STEP 4 — Pay Application Fee: Pay QAR 200 non-refundable application fee.",
            "STEP 5 — Select Scholarship: Check the 'International Students Scholarship' option within the admission portal.",
            "STEP 6 — Submit Original Documents: Mail or deliver certified transcripts and official documents to QU Admissions.",
            "STEP 7 — Decision & Visa: Receive admission and scholarship notification; QU arranges student residence permit."
        ],
        "restrictions": [
            "Bachelor's degree ONLY (Master's and PhD students ineligible under this award)",
            "Transfer students, visiting students, and second-degree seekers are ineligible",
            "Failure to achieve 3.0 GPA or complete 12 credits/semester can result in scholarship cancellation",
            "No separate food allowance or health insurance listed on scholarship page"
        ],
        "logoText": "QU",
        "logoBg": "from-maroon-700 to-purple-950",
        "eligibleNationalities": "International applicants outside Qatar (including Pakistani students)",
        "gpaRequirement": "Strict minimum high-school average of at least 95%",
        "ieltsRequirement": "Programme-specific (IELTS / TOEFL considered by scholarship committee alongside SAT/Math tests)",
        "isEligibleForPakistan": True,
        "warningNotice": "Admission ≠ scholarship. A student can meet normal QU admission requirements but not qualify for the scholarship due to the strict 95% threshold.",
        "currentStatus": "Fall 2026 Cycle Closed (Fall 2027 Cycle Not Yet Verified)",
        "currentCycle": "Fall 2026 Intake",
        "lastVerifiedDate": "September 2026",
        "fullSections": [
            get_pillar_1("Qatar University International Students Scholarship", "Qatar University (QU)", "Qatar", "Bachelor's (Undergraduate) Only", "Direct University Track (Inside QU Online Admission Portal)", "Eligible as international applicant (direct to QU; no HEC nomination)", "4–5 years (prescribed degree duration)", "Fall 2026 Verified Cycle"),
            get_pillar_2("Highly Funded Undergraduate Package", "100% full tuition-fee exemption for prescribed study period", "Monthly salary/allowance of QAR 500 per month", "Annual round-trip economy air ticket between Doha and home country", "Student housing provided (two students per room) including transportation to/from campus", "Residence permit under Qatar University sponsorship (no separate health insurance listed)", "Textbook-fee exemption included"),
            get_pillar_3([
                "Academic deal-breaker: Must hold a minimum high-school certificate average of at least 95%.",
                "Degree limitation: Exclusively for Bachelor's degree applicants; Master's and PhD are NOT eligible.",
                "Transfer exclusion: Students transferring from other universities are ineligible.",
                "Academic continuation: Must maintain a minimum cumulative GPA of 3.0/4.0 and complete at least 12 credits per semester.",
                "First-semester cancellation: If the student fails the first semester, the scholarship can be cancelled.",
                "Application fee: Requires payment of QAR 200 non-refundable admission fee."
            ]),
            get_pillar_4([
                "Language requirement: English and mathematics proficiency evaluated by college (IELTS, TOEFL, SAT, ACT, QU Math Placer).",
                "Universal score: No single IELTS cutoff stated on scholarship page; depends on college prerequisites.",
                "SAT / ACT: Evaluated alongside other test scores by the scholarship committee."
            ]),
            get_pillar_5([
                "Direct University Application Workflow (Student -> QU Admission Portal -> Evaluation -> Conditional Acceptance -> Scholarship -> Visa):",
                "1. Create account on Qatar University online admissions portal during international application window (March).",
                "2. Complete Bachelor's programme selection.",
                "3. Pay non-refundable application fee of QAR 200.",
                "4. Select 'International Students Scholarship' section in the application.",
                "5. Submit original high-school transcripts to QU Admissions Department address.",
                "6. University evaluates academic merit, language/math scores, and 95% threshold.",
                "7. Successful candidates receive conditional acceptance, followed by scholarship award and QU visa sponsorship."
            ]),
            get_pillar_6([
                "Completed Qatar University online admission application",
                "Original official high-school transcript and certificates (attested by MOFA/Qatar Embassy)",
                "Photocopy of international passport",
                "Recent passport-size photograph",
                "Receipt of QAR 200 application fee payment",
                "Standardized test scores where held (IELTS, TOEFL, SAT, ACT)",
                "Certified English or Arabic translation of documents where applicable"
            ]),
            get_pillar_7("Fall 2026 Intake (Annual March Window)", [
                "Application opened: 1 March 2026",
                "Application deadline: 25 March 2026",
                "Admission decisions announced: 19 May 2026",
                "Scholarship decision date: Announced following admission",
                "Classes start: August / September in Doha",
                "Current status: Fall 2026 closed; monitor for Fall 2027"
            ], [
                "https://www.qu.edu.qa/students/admission/scholarships"
            ])
        ]
    },

    # 12. Doha Institute
    {
        "id": "gov-doha-institute",
        "programTitle": "Doha Institute for Graduate Studies Scholarships",
        "sponsorGovernment": "Doha Institute for Graduate Studies (DI), State of Qatar",
        "country": "Qatar",
        "flag": "🇶🇦",
        "degreeLevels": ["Masters", "PhD"],
        "stipendMonthly": "Provided (Institutional Monthly Stipend under Tamim / Sanad Rules)",
        "airfareCovered": False,
        "healthInsuranceCovered": True,
        "tuitionCovered": True,
        "deadline": "15 January 2027 (Currently OPEN - Opened 1 Sept 2026)",
        "bondRequirement": "Full-time dedication to research; no concurrent employment",
        "description": "Premier graduate scholarships (Tamim Merit & Sanad Need-Based) at Doha Institute for Graduate Studies. Open for 2027–2028 admissions in Social Sciences, Humanities, Public Policy, and Economics.",
        "keyEligibility": [
            "Currently OPEN: 2027–2028 application cycle opened 1 September 2026 with deadline 15 January 2027",
            "Degree levels: Master's and PhD only (Bachelor's degrees NOT offered)",
            "Fields: Social Sciences, Humanities, Public Administration, Public Policy, Development Economics, Conflict Studies",
            "Two scholarship categories: Tamim Scholarship (merit-based) and Sanad Scholarship (financial-need based)",
            "Direct online admission application to Doha Institute (No HEC nomination; No embassy nomination)",
            "100% full tuition coverage + Institute dormitory accommodation + monthly stipend + health insurance"
        ],
        "supabaseDbId": 232,
        "overviewLong": "The Doha Institute for Graduate Studies (DI) offers institutional scholarships to support outstanding students admitted to its Master's and PhD programmes. The Institute offers two primary categories for international applicants: the Tamim Scholarship (merit-based for academic excellence) and the Sanad Scholarship (financial-need based). Programmes focus on Social Sciences, Humanities, Public Administration, Public Policy, Development Economics, and Conflict Management. Full tuition coverage, student dormitory housing, monthly living allowances, and health insurance are provided.",
        "fundingType": "Comprehensive Institutional Graduate Award",
        "workExperienceRequired": "Relevant academic / professional background preferred",
        "ageLimit": "None",
        "hecNominationRequired": False,
        "embassyNominationRequired": False,
        "applicationRoute": "Direct Online Admission Application to Doha Institute",
        "officialSources": [
            "Doha Institute for Graduate Studies Official Portal (dohainstitute.edu.qa)",
            "DI Admissions and Student Affairs Office"
        ],
        "stepByStepProcess": [
            "STEP 1 — Review Programmes: Explore 18 Master's and 8 Doctoral programmes in Social Sciences and Public Policy.",
            "STEP 2 — Prepare Documents: Prepare transcripts, degrees, statement of purpose, CV, recommendations, and sample writing.",
            "STEP 3 — Submit Online Application: Complete online graduate application on dohainstitute.edu.qa between 1 Sept 2026 and 15 Jan 2027.",
            "STEP 4 — Academic Evaluation: Faculty committees evaluate academic dossier and research fit.",
            "STEP 5 — Interview Assessment: Shortlisted applicants attend interviews conducted by academic departments.",
            "STEP 6 — Scholarship Award: Admitted candidates receive scholarship offers (Tamim or Sanad).",
            "STEP 7 — Visa & Arrival: DI facilitates Qatar student residency; scholars arrive in Doha for academic orientation."
        ],
        "restrictions": [
            "Bachelor's degree studies are NOT available at Doha Institute",
            "STEM, Engineering, and Medicine disciplines are not offered",
            "Cannot hold concurrent outside scholarships or employment during award tenure",
            "Doctoral students must maintain minimum 3.5 GPA through coursework and prospectus stages"
        ],
        "logoText": "DI",
        "logoBg": "from-purple-800 to-indigo-950",
        "eligibleNationalities": "International applicants globally (including Pakistani graduate students)",
        "gpaRequirement": "Strong academic standing (minimum 3.0/4.0 in Bachelor's for Master's; min 3.5 for PhD)",
        "ieltsRequirement": "Programme-specific; English proficiency required for English tracks (exemptions available)",
        "isEligibleForPakistan": True,
        "warningNotice": "This is an institutional graduate scholarship, not a general national government award. Applications are made directly to the Institute with no HEC or embassy routing.",
        "currentStatus": "OPEN for 2027–2028 Cycle (Deadline: 15 January 2027)",
        "currentCycle": "2027–2028 Academic Year",
        "lastVerifiedDate": "3 September 2026",
        "fullSections": [
            get_pillar_1("Doha Institute for Graduate Studies Scholarships", "Doha Institute for Graduate Studies (DI)", "Qatar", "Master's and PhD Only", "Direct Doha Institute Online Admission Application", "Eligible international applicants (direct application; no HEC nomination)", "Master's: 2 years; PhD: up to 4 years", "2027–2028 Cycle (Currently OPEN)"),
            get_pillar_2("Comprehensive Institutional Graduate Award", "100% full tuition fee coverage for international scholarship recipients", "Monthly living stipend provided under institutional regulations", "Airfare is NOT officially verified as a standard universal benefit", "Free Institute dormitory accommodation provided for international scholars", "Comprehensive health insurance coverage included under scholarship terms", "Stage-based research and thesis support for doctoral students"),
            get_pillar_3([
                "Disciplines: Limited to Social Sciences, Humanities, Public Policy, Public Administration, and Economics (NO STEM/Medicine).",
                "Degree level: Master's and PhD ONLY. Bachelor's degrees are not offered.",
                "Award categories: Tamim (Merit-based) and Sanad (Financial need-based).",
                "PhD academic standards: Doctoral students must maintain at least 3.5 GPA in coursework and prospectus stages.",
                "Concurrent funding ban: Recipients cannot receive incompatible outside scholarships or maintain outside employment.",
                "Application deadline: 15 January 2027 for 2027–2028 intake."
            ]),
            get_pillar_4([
                "English language: English proficiency evidence (IELTS / TOEFL / Duolingo) required according to selected programme.",
                "Exemptions: English-medium degree graduates may qualify for language test exemptions under Institute policy.",
                "Standardized tests: GRE / GMAT / SAT are not universally required."
            ]),
            get_pillar_5([
                "Direct Application Workflow (Applicant -> DI Online Application -> Academic Evaluation -> Interview -> Award):",
                "1. Register on Doha Institute online application portal (dohainstitute.edu.qa).",
                "2. Complete applicant profile and select graduate programme.",
                "3. Upload academic records, statement of motivation, CV, and sample writing.",
                "4. Submit before the closing date: 15 January 2027.",
                "5. Departmental admissions committees review applications.",
                "6. Shortlisted candidates attend virtual interview sessions.",
                "7. Final admission and scholarship decisions communicated; visa sponsorship arranged."
            ]),
            get_pillar_6([
                "Completed Doha Institute online application",
                "Official graduation certificates (Bachelor's for Master's; Master's for PhD)",
                "Official academic transcripts with grading breakdown",
                "Curriculum Vitae",
                "Personal Statement / Motivation Letter",
                "Two letters of recommendation from academic professors",
                "Academic writing sample or research proposal (required for PhD)",
                "Copy of valid international passport",
                "English proficiency test score (IELTS/TOEFL) where applicable"
            ]),
            get_pillar_7("2027–2028 Academic Cycle (OPEN)", [
                "Applications opened: 1 September 2026",
                "Application deadline: 15 January 2027",
                "Interviews & evaluation: February – April 2027",
                "Results announced: May 2027",
                "Academic year starts: September 2027",
                "Current status: OPEN for international applications"
            ], [
                "https://www.dohainstitute.edu.qa"
            ])
        ]
    },

    # 13. Kuwait Government Scholarships
    {
        "id": "gov-kuwait-scholarships",
        "programTitle": "Kuwait Government Scholarships for Non-Kuwaiti Students",
        "sponsorGovernment": "Ministry of Higher Education, State of Kuwait",
        "country": "Kuwait",
        "flag": "🇰🇼",
        "degreeLevels": ["Undergraduate", "Diploma"],
        "stipendMonthly": "Category/Institution-Specific Monthly Allowance",
        "airfareCovered": False,
        "healthInsuranceCovered": True,
        "tuitionCovered": True,
        "deadline": "Annual Announcement / Institution-Specific (Summer Window)",
        "bondRequirement": "Subject to residence and university regulations",
        "description": "Kuwait's official grant framework for international students comprising Minister's Grants and bilateral cultural agreements. Tenable at Kuwait University, Abdullah Al-Salem University, and PAAET.",
        "keyEligibility": [
            "Bilateral & Cultural Allocation: Eligible where included in Kuwait's annual cultural agreement or official quota",
            "Main institutions: Kuwait University, Abdullah Al-Salem University, and PAAET",
            "Level: Primarily Undergraduate degree (Bachelor's) and Diploma studies",
            "Application routes: (A) Cultural agreement nomination; (B) Ministry e-service for Minister's Grants",
            "Attestation: Official academic equivalency and verification required from Kuwait education authorities",
            "Funding: Tuition exemption + student dormitory housing (where allocated) + public health care"
        ],
        "supabaseDbId": 233,
        "overviewLong": "The Kuwait Government Scholarships framework for non-Kuwaiti students is administered by the Kuwait Ministry of Higher Education in coordination with institutions such as Kuwait University, Abdullah Al-Salem University, and the Public Authority for Applied Education and Training (PAAET). The system operates through Minister's Grants and bilateral cultural agreements rather than a single open global portal. Eligible international students receive tuition coverage, university dormitory housing where allocated, monthly allowances according to category, and healthcare services.",
        "fundingType": "Government Grant / Cultural Scholarship",
        "workExperienceRequired": "None required",
        "ageLimit": "Undergraduate admissions criteria set by Kuwait University",
        "hecNominationRequired": False,
        "embassyNominationRequired": True,
        "applicationRoute": "Cultural / Bilateral Nomination OR Ministry Non-Kuwaiti Grant E-Service",
        "officialSources": [
            "Ministry of Higher Education, State of Kuwait (mohe.edu.kw)",
            "Kuwait University Admissions Department",
            "Public Authority for Applied Education and Training (PAAET)"
        ],
        "stepByStepProcess": [
            "STEP 1 — Check Annual Allocation: Verify whether Pakistan is included in Kuwait's annual cultural scholarship allocation.",
            "STEP 2 — Identify Nominating Authority: Coordinate through official bilateral diplomatic or governmental channels.",
            "STEP 3 — Academic Equivalency: Obtain official equivalency of foreign secondary school certificate from Kuwait education authorities.",
            "STEP 4 — Submit Grant Application: Complete Ministry e-service registration or cultural nomination procedure.",
            "STEP 5 — University Admission Review: Kuwait University or PAAET reviews academic credentials and verifies seats.",
            "STEP 6 — Government Approval: Ministry of Higher Education confirms grant allocation.",
            "STEP 7 — Visa & Enrolment: Complete Kuwait entry visa, residence permits, and university matriculation."
        ],
        "restrictions": [
            "Not an open global scholarship; tied to bilateral cultural quotas and Minister's grants",
            "Master's and PhD degrees are not established as universal international scholarships",
            "Cannot claim fully funded status without verifying specific institutional grant package",
            "Employment during study is subject to strict Kuwait residence regulations"
        ],
        "logoText": "MOHE",
        "logoBg": "from-teal-700 to-slate-900",
        "eligibleNationalities": "Nationals of countries with cultural agreements with Kuwait (country/entity specific)",
        "gpaRequirement": "Category and programme specific (set by Kuwait University admissions council)",
        "ieltsRequirement": "Programme dependent; Kuwait University accepts TOEFL PBT, iBT, or IELTS for English courses",
        "isEligibleForPakistan": True,
        "warningNotice": "Kuwait does not currently present one single standardized international scholarship with one global deadline. Benefits and eligibility vary by annual bilateral cultural agreement and institution.",
        "currentStatus": "Active Framework (Annual Category-Specific Opportunities)",
        "currentCycle": "2026/2027 Academic Year",
        "lastVerifiedDate": "September 2026",
        "fullSections": [
            get_pillar_1("Kuwait Government Scholarships for Non-Kuwaiti Students", "Ministry of Higher Education, State of Kuwait", "Kuwait", "Undergraduate (Bachelor's) and Diploma", "Cultural/Bilateral Nomination OR Ministry Online E-Service", "Potentially eligible where included in annual cultural/bilateral allocation", "Bachelor's: 4–5 years", "Active Sovereign Framework"),
            get_pillar_2("Category-Specific Government Grant", "Tuition exemption provided according to scholarship category and host institution", "Monthly stipend depends on institutional category (not universally published figure)", "Airfare is not universally verified across all non-Kuwaiti grant categories", "Student dormitories available where allocated under cultural grant rules", "Healthcare provided through public medical clinics and university facilities", "Subsidized campus facilities and student services"),
            get_pillar_3([
                "Eligibility model: Tied to bilateral cultural arrangements and Minister's grant allocations (not an open global application).",
                "Degree level: Primarily relevant to Undergraduate (Bachelor's) degrees; Master's and PhD not established as universal international awards.",
                "Equivalency requirement: Foreign educational certificates must obtain official equivalency from Kuwait education authorities.",
                "Self-funded distinction: Ordinary foreign admission does not equal scholarship; scholarship must be explicitly allocated.",
                "HEC involvement: No general HEC mechanism verified."
            ]),
            get_pillar_4([
                "Language of instruction: Arabic is primary; English for STEM, Medicine, and Engineering faculties.",
                "English proficiency: Kuwait University accepts TOEFL iBT, TOEFL PBT, or IELTS as alternatives to its English aptitude test.",
                "Standardized tests: No universal SAT requirement."
            ]),
            get_pillar_5([
                "Nomination and Admission Sequence:",
                "1. Check annual Kuwait scholarship/cultural allocation applicable to home country.",
                "2. Submit documents to designated nominating authority / Ministry e-service.",
                "3. Obtain foreign certificate equivalency.",
                "4. Receiving university (e.g. Kuwait University) evaluates eligibility and available quota seats.",
                "5. Ministry of Higher Education issues official scholarship approval.",
                "6. Student completes Kuwait entry and student residence procedures."
            ]),
            get_pillar_6([
                "Official passport copy",
                "Student's secondary school academic certificate and official transcripts",
                "Birth certificate copy",
                "Official certificate of foreign secondary qualification equivalency",
                "Certificate of good conduct / clean criminal record",
                "Medical examination report",
                "English language certificate (IELTS/TOEFL) where applying for English-taught faculties"
            ]),
            get_pillar_7("Annual Announcement Framework", [
                "Undergraduate admission window: Typically July / August annually",
                "Cultural nominations deadline: Set by bilateral cultural agreement",
                "Academic year begins: September / October in Kuwait",
                "Current status: Active framework with annual opportunities"
            ], [
                "https://www.mohe.edu.kw"
            ])
        ]
    },

    # 14. Oman Government Scholarships
    {
        "id": "gov-oman-scholarships",
        "programTitle": "Omani Program for Cultural and Scientific Cooperation",
        "sponsorGovernment": "Ministry of Higher Education, Research and Innovation (MoHERI), Sultanate of Oman",
        "country": "Oman",
        "flag": "🇴🇲",
        "degreeLevels": ["Undergraduate", "Masters"],
        "stipendMonthly": "Offering-Specific Living Support (Published on Study in Oman)",
        "airfareCovered": False,
        "healthInsuranceCovered": True,
        "tuitionCovered": True,
        "deadline": "Offering-Specific Deadlines (Study in Oman System)",
        "bondRequirement": "HEI-sponsored study visa compliance",
        "description": "Oman's government scholarship framework for international students from friendly countries. Publishes competitive study grants at Sultan Qaboos University and accredited institutions in CS, AI, Cybersecurity, and Engineering.",
        "keyEligibility": [
            "Friendly and brotherly country nationals (Pakistan potentially eligible subject to annual allocation)",
            "Primary level: Undergraduate (with specific institutional Master's offerings published on Study in Oman)",
            "Available disciplines include Computer Science, AI, Cybersecurity, Data Science, Engineering, and Business",
            "Application route: Study in Oman scholarship listings -> Direct application to participating institution",
            "Foreign secondary certificates must undergo official recognition and equivalency in Oman",
            "Funding package varies by offering: Tuition subsidy + living allowance + HEI-sponsored study visa"
        ],
        "supabaseDbId": 234,
        "overviewLong": "The Omani Program for Cultural and Scientific Cooperation with Friendly and Brotherly Countries is operated by Oman's Ministry of Higher Education, Research and Innovation (MoHERI). The programme provides international scholarships and study grants for degree studies at Omani public and private higher education institutions. Specific scholarship offerings are published on the official Study in Oman portal across disciplines including Computer Science, Artificial Intelligence, Cybersecurity, Engineering, and Management.",
        "fundingType": "Government Study Grant / Offering-Specific",
        "workExperienceRequired": "None required for undergraduate study",
        "ageLimit": "General secondary school recency rules apply",
        "hecNominationRequired": False,
        "embassyNominationRequired": False,
        "applicationRoute": "Study in Oman Portal / Participating Institution Application",
        "officialSources": [
            "Ministry of Higher Education, Research and Innovation (MoHERI) Oman",
            "Study in Oman Official Portal (studyinoman.om)",
            "Sultan Qaboos University Admissions"
        ],
        "stepByStepProcess": [
            "STEP 1 — Browse Study in Oman: Access the official Study in Oman portal (studyinoman.om) to view live scholarship listings.",
            "STEP 2 — Select Programme & University: Identify accredited degree programmes offering scholarship grants.",
            "STEP 3 — Check Equivalency: Verify that your secondary school qualification can be equated to the Omani General Secondary Certificate.",
            "STEP 4 — Prepare Academic Dossier: Gather attested certificates, transcripts, passport, and English proficiency evidence.",
            "STEP 5 — Apply to Institution: Submit application through the portal or host higher education institution before the offer deadline.",
            "STEP 6 — Academic Evaluation: Institution reviews credentials and selects qualified scholarship recipients.",
            "STEP 7 — Visa Processing: Host higher education institution initiates HEI-sponsored student visa; student travels to Oman."
        ],
        "restrictions": [
            "Funding package varies by offering; not every award covers full living expenses or airfare",
            "Foreign certificates must be formally equated before institutional matriculation",
            "Study visa fees may remain the student's responsibility under institutional guidelines"
        ],
        "logoText": "MoHERI",
        "logoBg": "from-red-700 to-emerald-950",
        "eligibleNationalities": "Friendly and brotherly country citizens according to annual Omani scholarship allocations",
        "gpaRequirement": "Offering-specific (meeting general secondary school entry requirements)",
        "ieltsRequirement": "Institution/programme-specific (English proficiency required for STEM and business courses)",
        "isEligibleForPakistan": True,
        "warningNotice": "Do not label every Omani award 'fully funded'. The funding package varies by annual offering and host institution.",
        "currentStatus": "Active Programme (Individual Offerings Published on Study in Oman)",
        "currentCycle": "2026/2027 Academic Year",
        "lastVerifiedDate": "3 September 2026",
        "fullSections": [
            get_pillar_1("Omani Program for Cultural and Scientific Cooperation", "Ministry of Higher Education, Research and Innovation (MoHERI)", "Oman", "Primary: Undergraduate (with institutional Master's offerings)", "Study in Oman Portal / Institution-Specific Online Application", "Potentially eligible according to annual allocation", "Undergraduate: 4–5 years", "Active Government Programme"),
            get_pillar_2("Offering-Specific Government Grant", "Tuition coverage provided according to the specific scholarship offering terms", "Living allowance provided where specified in the individual award terms", "Airfare is not universally verified as a standard government entitlement", "Accommodation depends on participating institution facilities or living subsidy", "Health care access through university health clinics and national student arrangements", "HEI-sponsored student study visa support"),
            get_pillar_3([
                "Country allocation: Eligible for students from friendly and brotherly countries (including Pakistan under relevant allocations).",
                "Primary level: Primarily designed for Undergraduate study (separate postgraduate opportunities published on portal).",
                "Academic recognition: Foreign secondary qualifications must be equated to the Omani General Secondary Certificate.",
                "Institution specificity: Requirements, deadlines, and seat quotas depend on the participating higher education institution.",
                "HEC involvement: No general HEC nomination requirement identified."
            ]),
            get_pillar_4([
                "Language of study: Arabic or English depending on degree programme.",
                "English proficiency: IELTS / TOEFL scores evaluated at institution/programme level for English-taught disciplines.",
                "Standardized testing: No universal national SAT requirement; individual institutions may test applicants."
            ]),
            get_pillar_5([
                "Application Route (Applicant -> Study in Oman Portal -> Host Institution -> Evaluation -> HEI Visa):",
                "1. Access the Study in Oman scholarship listing portal.",
                "2. Browse available scholarship offerings and participating institutions.",
                "3. Verify programme eligibility and certificate equivalency rules.",
                "4. Submit application directly to the offering institution.",
                "5. Institution conducts academic and scholarship assessment.",
                "6. Approved candidates receive enrollment letter.",
                "7. Host institution processes HEI-sponsored study visa."
            ]),
            get_pillar_6([
                "Valid passport copy (valid for at least 12 months)",
                "Official secondary school graduation certificate (Matric / Intermediate / A-Levels)",
                "Detailed academic transcripts and marks sheets",
                "Official recognition / equivalency documentation from Oman education authorities",
                "Recent passport-size photographs",
                "English language test certificate (IELTS/TOEFL) where applicable",
                "Medical fitness certificate"
            ]),
            get_pillar_7("Active Programme / Staggered Institutional Deadlines", [
                "Scholarship offerings: Published periodically on Study in Oman portal",
                "Application deadlines: Specific to each university and course offering",
                "Academic intake: September / October in Oman",
                "Current status: Active programme; individual scholarship openings vary"
            ], [
                "https://studyinoman.om"
            ])
        ]
    }
]

print("Batch 2 (8-14) loaded successfully:", len(scholarships_8_14))
