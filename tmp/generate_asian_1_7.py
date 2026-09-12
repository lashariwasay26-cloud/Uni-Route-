import sys
sys.path.append('/tmp')
from scholarship_builder import *

scholarships_1_7 = [
    # 1. MEXT Japan
    {
        "id": "gov-mext-japan",
        "programTitle": "Japanese Government (MEXT) Scholarship",
        "sponsorGovernment": "Ministry of Education, Culture, Sports, Science and Technology (MEXT), Government of Japan",
        "country": "Japan",
        "flag": "🇯🇵",
        "degreeLevels": ["Undergraduate", "Masters", "PhD"],
        "stipendMonthly": "Category-Dependent (Undergraduate ~¥117,000/mo; Master's ~¥144,000/mo; PhD ~¥145,000/mo)",
        "airfareCovered": True,
        "healthInsuranceCovered": True,
        "tuitionCovered": True,
        "deadline": "Varies by Category, Embassy & University (Typically May for Embassy Track)",
        "bondRequirement": "None (No mandatory return bond)",
        "description": "Japan's flagship sovereign scholarship supporting undergraduate, research, master's, and doctoral studies through two distinct pathways: Embassy Recommendation and University Recommendation.",
        "keyEligibility": [
            "Pakistani nationals eligible through Embassy of Japan in Pakistan or direct university nomination",
            "Age requirements: UG born between 2 April 2001 and 1 April 2009; Research/Postgraduate born on or after 2 April 1991",
            "Undergraduate: 12-year education (FSc/A-Levels); Master's: 16-year education; PhD: 18-year education",
            "Language: Programme dependent; Japanese or English (no universal single IELTS score)",
            "Research candidates must submit a comprehensive, tailored research proposal",
            "100% tuition, entrance fee, matriculation waiver + return airfare + monthly living stipend"
        ],
        "supabaseDbId": 221,
        "overviewLong": "The Japanese Government (MEXT) Scholarship is Japan's flagship government scholarship programme for international students. It supports undergraduate, research, Master's and doctoral-level pathways. MEXT operates separate Embassy Recommendation and University Recommendation systems, with different procedures and deadlines. Recipients receive full tuition coverage, monthly stipends, round-trip international travel support, and Japanese-language preparation where required.",
        "fundingType": "Fully Funded",
        "workExperienceRequired": "None universally required (category-specific)",
        "ageLimit": "UG: under 25 | Research/Postgraduate: under 35",
        "hecNominationRequired": False,
        "embassyNominationRequired": True,
        "applicationRoute": "Dual Route: Embassy Recommendation OR University Recommendation",
        "officialSources": [
            "Ministry of Education, Culture, Sports, Science and Technology (MEXT) Japan",
            "Study in Japan Official Guidance (studyinjapan.go.jp)",
            "Embassy of Japan in Pakistan (Islamabad)"
        ],
        "stepByStepProcess": [
            "STEP 1 — Check Announcement: Check Japanese Embassy or Consulate announcement for Pakistan (typically April).",
            "STEP 2 — Select Category: Choose Undergraduate, Research Student, Master's, or PhD.",
            "STEP 3 — Prepare Documents: Complete application forms, academic transcripts, research plan, and health certificate.",
            "STEP 4 — Submit to Embassy: Submit hard-copy dossier to the Embassy of Japan in Islamabad according to instructions.",
            "STEP 5 — First Screening: Complete document screening, written examinations (English, Japanese, Math), and interview.",
            "STEP 6 — University Placement: If successful, obtain provisional acceptance letters from Japanese universities.",
            "STEP 7 — Final MEXT Selection: MEXT makes final selection and issues flight ticket for departure."
        ],
        "restrictions": [
            "Cannot hold concurrent Japanese government or foreign government scholarships",
            "Must arrive in Japan during the designated arrival period",
            "Military personnel or civilian defense employees ineligible"
        ],
        "logoText": "MEXT",
        "logoBg": "from-red-600 to-rose-900",
        "eligibleNationalities": "Pakistani citizens and foreign nationals of countries with diplomatic relations with Japan",
        "gpaRequirement": "Strong academic record (minimum 75%+ or equivalent First Division recommended)",
        "ieltsRequirement": "Programme dependent (no universal MEXT cutoff; English or Japanese based on curriculum)",
        "isEligibleForPakistan": True,
        "warningNotice": "Do not assume university admission is always required before applying. For Embassy Track, university placement occurs after passing initial embassy screening.",
        "currentStatus": "Active 2026/2027 Cycle Materials Published",
        "currentCycle": "2026/2027 Academic Year",
        "lastVerifiedDate": "3 September 2026",
        "fullSections": [
            get_pillar_1("Japanese Government (MEXT) Scholarship", "MEXT, Government of Japan", "Japan", "Undergraduate, Research Students, Master's, PhD / Doctoral", "Embassy Recommendation / University Recommendation", "Established participating country via Embassy of Japan in Pakistan", "UG: 4–5 years (incl. 1 yr prep); Master's: 2–3 years; PhD: 3–4 years", "2026/2027 Arrival"),
            get_pillar_2("100% Fully Funded Sovereign Award", "Full exemption from entrance examination, matriculation, and tuition fees", "Monthly stipend provided under official MEXT guidelines (scaled by category: ~¥117,000/mo UG; ~¥144,000/mo Master's; ~¥145,000/mo PhD; plus regional supplements)", "Economy class return international airfare according to MEXT rules", "University dormitories/residences available (subsidized from stipend; not universally 100% free private housing)", "Subsidized under Japanese National Health Insurance (NHI)", "Preparatory Japanese-language and academic education where required"),
            get_pillar_3([
                "Nationality: Citizen of an eligible country (Pakistan is an established participating country; dual Japanese citizens ineligible).",
                "Age limits: Undergraduate applicants generally under 25 years old; Research/Master's/PhD applicants generally under 35 years old.",
                "Educational qualification: 12-year secondary education for UG; Bachelor's degree for Master's; Master's degree for PhD.",
                "Academic performance: Strong academic background and passing mark in embassy written examinations.",
                "Research proposal: Master's/PhD applicants must provide a rigorous, well-defined research proposal aligned with Japanese faculty.",
                "Return service bond: None. No mandatory home-country service bond."
            ]),
            get_pillar_4([
                "Universal cutoff: There is no single universal requirement such as IELTS 7.0 or JLPT N2 across MEXT.",
                "Language of instruction: Programmes can be studied in Japanese or English depending on university faculty.",
                "Embassy written exams: Written examinations administered at Embassy of Japan in Islamabad (English, Japanese, Math).",
                "Standardized testing: No universal MEXT-wide SAT, GRE, or GMAT requirement."
            ]),
            get_pillar_5([
                "Embassy Recommendation Route (Applicant -> Embassy of Japan in Pakistan -> First Screening -> MEXT -> University Placement -> Final Award):",
                "1. Check the Japanese Embassy in Islamabad's MEXT announcement.",
                "2. Select the appropriate scholarship category.",
                "3. Prepare required documents, forms, and research proposal.",
                "4. Submit dossier to the Embassy of Japan in Pakistan before the deadline.",
                "5. Complete First Screening: document screening, written exams, and panel interview.",
                "6. If successful, contact Japanese universities to obtain provisional acceptance letters.",
                "7. MEXT in Tokyo conducts final selection and confirms placement.",
                "8. Complete travel, student visa, and arrival procedures."
            ]),
            get_pillar_6([
                "Completed official MEXT application form",
                "Academic transcripts for all years of completed education",
                "Graduation certificate or expected-graduation certificate (attested)",
                "Recommendation letter from academic dean, advisor, or employer",
                "Passport / identity documentation",
                "Official MEXT Certificate of Health",
                "Field of Study and Research Plan (vital for Research/Master's/PhD)",
                "Placement preference application form (listing target Japanese universities)",
                "Language proficiency certificates (where held; JLPT / IELTS / TOEFL)"
            ]),
            get_pillar_7("2026/2027 Intake", [
                "Embassy announcement: April annually",
                "Embassy application deadline: Mid-May annually in Islamabad",
                "First screening exams & interview: June – July",
                "Provisional acceptance letter deadline: September",
                "Final MEXT selection results: January – February",
                "Arrival in Japan: April (Spring) or September/October (Autumn)"
            ], [
                "https://www.studyinjapan.go.jp/en/smap-stopj-applications-research.html",
                "https://www.pk.emb-japan.go.jp/itpr_en/MEXT_Scholarship.html"
            ])
        ]
    },

    # 2. CSC China
    {
        "id": "gov-csc-china",
        "programTitle": "Chinese Government Scholarship (CGS / CSC)",
        "sponsorGovernment": "China Scholarship Council (CSC), Ministry of Education, P.R. China",
        "country": "China",
        "flag": "🇨🇳",
        "degreeLevels": ["Undergraduate", "Masters", "PhD"],
        "stipendMonthly": "2,500 RMB (UG) | 3,000 RMB (Master's) | 3,500 RMB (PhD) / month",
        "airfareCovered": False,
        "healthInsuranceCovered": True,
        "tuitionCovered": True,
        "deadline": "5 January 2026, 4:00 PM PKT (HEC Pakistan Type A)",
        "bondRequirement": "None (No mandatory return bond)",
        "description": "China's principal international scholarship framework. Supports Bachelor's, Master's, and PhD studies with 75 dedicated Pakistani bilateral seats (35 UG, 25 Master's, 15 PhD) via HEC under Type A, plus direct university-nominated Type B routes.",
        "keyEligibility": [
            "Mandatory DUAL APPLICATION for Type A: Submit on BOTH HEC Portal AND CSC Campus China Portal (Agency #5861)",
            "Undergraduate applicants MUST take the CSCA (China Scholastic Competency Assessment)",
            "Age requirements: Bachelor's under 25; Master's under 35; PhD under 40",
            "Pre-admission notice or supervisor acceptance letter from Chinese university is required/strongly recommended",
            "Language: HSK 3–5 for Chinese-taught courses; IELTS/TOEFL or English MOI for English-taught courses",
            "Comprehensive package: 100% tuition waiver + free dorm room/housing subsidy + medical insurance + monthly stipend"
        ],
        "supabaseDbId": 222,
        "overviewLong": "The Chinese Government Scholarship (CGS) is China's principal government scholarship framework for international students administered by the China Scholarship Council. For Pakistan, the official 2026–27 programme announced 75 scholarship seats: 35 Bachelor's, 25 Master's, 15 PhD. HEC is the nominating agency for the Pakistani Type A route. Applicants must apply through both the HEC portal and the CSC Campus China portal (Agency Number 5861). Type B operates through direct university application. The award provides comprehensive coverage including tuition, accommodation, living stipend, and medical insurance.",
        "fundingType": "Comprehensive Government Scholarship",
        "workExperienceRequired": "None required (fresh graduates eligible)",
        "ageLimit": "Bachelor's: under 25 | Master's: under 35 | PhD: under 40",
        "hecNominationRequired": True,
        "embassyNominationRequired": False,
        "applicationRoute": "Dual Portal: HEC Pakistan Portal + CSC Campus China Portal (Agency #5861)",
        "officialSources": [
            "Higher Education Commission (HEC) Pakistan - CGS Notice",
            "China Scholarship Council (CSC) Official Portal (campuschina.org)",
            "Embassy of China in Islamabad"
        ],
        "stepByStepProcess": [
            "STEP 1 — University Pre-Admission: Contact eligible Chinese universities in advance to obtain pre-admission notice or supervisor acceptance letter.",
            "STEP 2 — CSCA Registration (Undergraduates): Register and sit for the China Scholastic Competency Assessment (CSCA).",
            "STEP 3 — CSC Portal Application: Apply on Campus China portal selecting Category Type A and Agency Number 5861.",
            "STEP 4 — HEC Portal Application: Apply on HEC scholarship portal under 'Learning Opportunities Abroad'.",
            "STEP 5 — Submit Both Portals: Ensure both applications are submitted before the deadline (failure to submit both causes disqualification).",
            "STEP 6 — HEC Selection & Nomination: HEC conducts Pakistani nomination process and forwards shortlisted dossiers to Chinese side.",
            "STEP 7 — CSC Evaluation & Final Award: CSC evaluates nominations, confirms university placements, and issues JW201 visa documents."
        ],
        "restrictions": [
            "Must apply through both HEC and CSC portals (failure to do so results in disqualification)",
            "International airfare is not universally included in CSC; applicants must not assume flights are paid",
            "Cannot hold concurrent Chinese government or provincial scholarships"
        ],
        "logoText": "CSC",
        "logoBg": "from-red-600 to-amber-800",
        "eligibleNationalities": "Pakistani citizens (for HEC Type A quota) and international students globally",
        "gpaRequirement": "Minimum 60% / First Division in highest terminal academic degree",
        "ieltsRequirement": "Programme dependent; HSK for Chinese-taught, IELTS/TOEFL for English-taught (no universal single score)",
        "isEligibleForPakistan": True,
        "warningNotice": "International airfare is NOT universally included in every CSC programme. Pakistani applicants should not assume that Type A automatically pays international flights unless explicitly provided.",
        "currentStatus": "2026–27 Cycle Closed (Monitor for Next Annual Announcement)",
        "currentCycle": "2026/2027 Academic Year",
        "lastVerifiedDate": "3 September 2026",
        "fullSections": [
            get_pillar_1("Chinese Government Scholarship (CGS / CSC)", "China Scholarship Council (CSC) / Government of China", "China", "Bachelor's (35 seats), Master's (25 seats), PhD (15 seats), General & Senior Scholar", "Type A (Bilateral via HEC) / Type B (Chinese University Program)", "Pakistani students eligible for 75 official seats (HEC is nominating agency for Type A)", "Bachelor's: 4–5 years; Master's: 2–3 years; PhD: 3–4 years", "2026–27 Verified Cycle"),
            get_pillar_2("Comprehensive Government Funding", "100% Tuition covered under scholarship rules (including entrance and matriculation)", "Monthly stipend provided (Undergraduate: 2,500 RMB/mo; Master's: 3,000 RMB/mo; PhD: 3,500 RMB/mo)", "International airfare is NOT universally included in standard CSC packages", "University dormitory accommodation provided or accommodation subsidy", "Comprehensive medical insurance included under applicable CSC rules", "Chinese language preparatory training where applicable"),
            get_pillar_3([
                "Dual Portal Requirement: Failure to apply through BOTH the HEC portal and the CSC Campus China portal results in disqualification.",
                "Undergraduate CSCA: Mandatory China Scholastic Competency Assessment for undergraduate applicants.",
                "Age requirements: Bachelor's applicants under 25; Master's under 35; PhD under 40.",
                "Educational qualification: High school for Bachelor's; Bachelor's degree for Master's; Master's degree for PhD.",
                "Pre-admission materials: Official guidance strongly directs applicants to contact Chinese universities in advance to obtain pre-admission notices or supervisor acceptance letters.",
                "Work experience: None mandatory; fresh graduates eligible."
            ]),
            get_pillar_4([
                "Undergraduate CSCA: China Scholastic Competency Assessment is mandatory for applicants seeking undergraduate admission.",
                "Chinese-taught courses: Valid HSK score report (HSK 3 for language prep, HSK 4 for Bachelor's, HSK 5 for graduate).",
                "English-taught courses: English proficiency evidence (IELTS, TOEFL, or English Medium of Instruction certificate).",
                "Standardized tests: No universal CSC-wide GRE, GMAT, or SAT requirement."
            ]),
            get_pillar_5([
                "Pakistan Type A Bilateral Route Flow:",
                "Step 1: Contact eligible Chinese universities in advance to obtain pre-admission notice, supervisor acceptance letter, or invitation letter.",
                "Step 2: Undergraduates register for and take the mandatory CSCA examination.",
                "Step 3: Create profile and submit application on HEC portal (scholarships.hec.gov.pk) under 'Learning Opportunities Abroad'.",
                "Step 4: Create account on Campus China portal (campuschina.org) and select Program Category Type A and Agency Number 5861.",
                "Step 5: Submit both applications before the HEC deadline (5 January 2026, 4:00 PM PKT).",
                "Step 6: HEC conducts Pakistani nomination and selection process.",
                "Step 7: CSC and Chinese host universities evaluate nominations and finalize admissions.",
                "Step 8: Successful candidates receive admission notice and JW201 visa documents."
            ]),
            get_pillar_6([
                "CSC Online Application Form (Campuschina.org, Category Type A, Agency 5861)",
                "HEC Online Application Form (scholarships.hec.gov.pk)",
                "Notarized highest academic diploma or graduation certificate",
                "Official academic transcripts (notarized in Chinese or English)",
                "Study Plan or Research Proposal (min 200 words for UG, min 800 words for graduate)",
                "Two recommendation letters from professors or associate professors",
                "Foreigner Physical Examination Form (valid for 6 months, with laboratory test sheets)",
                "Police Certificate of Non-Criminal Record (issued within 6 months)",
                "Pre-admission notice or supervisor acceptance letter from target Chinese university",
                "Language certificates (HSK or IELTS/TOEFL) and CSCA score report (for UG)"
            ]),
            get_pillar_7("2026/2027 Academic Year", [
                "Programme announced: 2026–27 cycle",
                "HEC application deadline: 5 January 2026, 4:00 PM Pakistan Standard Time",
                "CSCA examination date (2026 cycle): 21 December 2025",
                "HEC nomination process: February – March 2026",
                "CSC final results: June – July 2026",
                "Current status: Closed (Next cycle anticipated late 2026)"
            ], [
                "https://www.campuschina.org",
                "https://scholarships.hec.gov.pk"
            ])
        ]
    },

    # 3. GKS South Korea
    {
        "id": "gov-gks-south-korea",
        "programTitle": "Global Korea Scholarship (GKS)",
        "sponsorGovernment": "National Institute for International Education (NIIED), Government of the Republic of Korea",
        "country": "South Korea",
        "flag": "🇰🇷",
        "degreeLevels": ["Undergraduate", "Masters", "PhD"],
        "stipendMonthly": "1,000,000 – 1,500,000 KRW / month (Level Dependent)",
        "airfareCovered": True,
        "healthInsuranceCovered": True,
        "tuitionCovered": True,
        "deadline": "Embassy Track: Late Feb/Early March | University Track: Varies by University",
        "bondRequirement": "None (No mandatory service bond)",
        "description": "South Korea's flagship government scholarship inviting 2,000 international graduate students globally. Features two distinct pathways: Embassy Track (up to 3 university choices) and University Track (direct to 1 designated university).",
        "keyEligibility": [
            "Applicant and parents must hold non-Korean citizenship (dual Korean citizens ineligible)",
            "Strict Track Selection: Must apply through EITHER Embassy Track OR University Track (duplicate application causes disqualification)",
            "Academic threshold: Cumulative GPA score of at least 80% or top 20% class rank from most recent degree",
            "Age requirements: Undergraduate under 25; Graduate (Master's/PhD) under 40 (under 45 for professors)",
            "1-year mandatory Korean language training included prior to degree study (to attain TOPIK Level 3+)",
            "100% tuition waiver + monthly stipend + round-trip airfare + settlement allowance + medical insurance"
        ],
        "supabaseDbId": 223,
        "overviewLong": "The Global Korea Scholarship (GKS) is the Korean government's premier international academic award administered by NIIED. The 2026 GKS Graduate Degree Program planned to invite 2,000 international graduate students. Applicants choose between the Embassy Track (applying via the Embassy of the Republic of Korea in Islamabad with up to three university preferences) and the University Track (applying directly to one participating Korean university). Duplicate application across tracks is prohibited. GKS provides full tuition, monthly living allowance, 1-year Korean language training, settlement allowance, medical insurance, and return airfare.",
        "fundingType": "Fully Funded",
        "workExperienceRequired": "None required (fresh graduates eligible)",
        "ageLimit": "Undergraduate: under 25 | Graduate: under 40 (under 45 for academic faculty)",
        "hecNominationRequired": False,
        "embassyNominationRequired": True,
        "applicationRoute": "Strict Choice: Embassy Track (Islamabad) OR Direct University Track",
        "officialSources": [
            "Study in Korea / NIIED Official Portal (studyinkorea.go.kr)",
            "Embassy of the Republic of Korea in Pakistan (Islamabad)",
            "NIIED Global Korea Scholarship Center"
        ],
        "stepByStepProcess": [
            "STEP 1 — Choose ONE Track: Select either Embassy Track (allows multiple university choices) or University Track (single university application).",
            "STEP 2 — Check University & Major: Review the official GKS participating university list and available degree programmes.",
            "STEP 3 — Prepare Documents: Complete application checklist, personal statement, study plan, recommendations, apostille/attested transcripts.",
            "STEP 4 — Submit to First-Round Authority: Submit to Korean Embassy in Islamabad (Embassy Track) OR directly to chosen Korean university (University Track).",
            "STEP 5 — First-Round Screening: Embassy or University conducts document review and interview.",
            "STEP 6 — NIIED Second-Round Review: Successful first-round nominees are evaluated centrally by NIIED.",
            "STEP 7 — Third-Round (Embassy Track only): Universities review candidates; student confirms final choice.",
            "STEP 8 — Final Selection & Arrival: NIIED announces final results; flight ticket issued; scholars commence Korean language training in Korea."
        ],
        "restrictions": [
            "Cannot apply to both Embassy Track and University Track in the same cycle (results in disqualification)",
            "Applicant and both parents must hold non-Korean citizenship",
            "Must maintain minimum GPA during degree study to retain scholarship"
        ],
        "logoText": "GKS",
        "logoBg": "from-blue-600 to-indigo-900",
        "eligibleNationalities": "Pakistani citizens (subject to annual national quota) and non-Korean citizens worldwide",
        "gpaRequirement": "Minimum 80% on 100-point scale or GPA 2.64/4.00, or top 20% class rank",
        "ieltsRequirement": "No universal single score requirement; TOPIK / IELTS / TOEFL provide preference points",
        "isEligibleForPakistan": True,
        "warningNotice": "An applicant normally chooses ONE application track for a particular cycle. Submitting duplicate applications through both Embassy and University tracks causes immediate disqualification.",
        "currentStatus": "2026 Cycle Substantially Completed / Closed",
        "currentCycle": "2026/2027 Academic Year",
        "lastVerifiedDate": "3 September 2026",
        "fullSections": [
            get_pillar_1("Global Korea Scholarship (GKS)", "Government of South Korea / NIIED", "South Korea", "Bachelor's (GKS-U), Master's, Doctoral (PhD), Research", "Embassy Track (Embassy in Islamabad) OR University Track (Direct to 1 Uni)", "Eligible subject to annual Pakistani country quota", "UG: 5 years (1 yr language + 4 yrs degree); Master's: 3 years; PhD: 4 years", "2026 Graduate Quota: 2,000 International Students"),
            get_pillar_2("100% Fully Funded Sovereign Award", "Full tuition coverage paid directly to university by NIIED", "Monthly living allowance (Undergraduate: 900,000 KRW/mo; Graduate: 1,000,000–1,500,000 KRW/mo)", "Economy class return international airfare according to GKS rules", "University dormitories available (not automatically a private room; subsidized from allowance)", "National Health Insurance coverage included", "Settlement allowance (200,000 KRW), Korean language training (100% funded), research grants, and degree completion grant (100,000 KRW)"),
            get_pillar_3([
                "Nationality: Applicant and both parents must hold foreign (non-Korean) citizenship.",
                "Single Track Rule: Must choose ONLY ONE track (Embassy Track OR University Track). Applying to both causes immediate disqualification.",
                "Academic score: Minimum 80% from most recent degree or top 20% in class rank.",
                "Age limit: Undergraduate applicants under 25 years old; Graduate applicants under 40 years old (under 45 for faculty members in developing nations).",
                "Korean language training: Mandatory 1-year Korean language course in Korea before degree study unless already holding TOPIK Level 5 or 6.",
                "HEC involvement: Generally NO HEC nomination required."
            ]),
            get_pillar_4([
                "TOPIK Requirement: Not a universal single-score entry barrier; scholars undertake 1-year Korean language training to achieve TOPIK Level 3.",
                "Preference points: Applicants holding TOPIK Level 3 or higher, or certified English proficiency (TOEFL, IELTS), receive bonus evaluation points.",
                "Standardized tests: GRE / GMAT not required by NIIED."
            ]),
            get_pillar_5([
                "Track Comparison & Workflow:",
                "Embassy Track (Allows 3 university choices):",
                "1. Check Korean Embassy in Pakistan annual announcement (February).",
                "2. Submit application dossier to the Korean Embassy in Islamabad.",
                "3. Embassy conducts First Round selection (document review + interview).",
                "4. NIIED conducts Second Round selection.",
                "5. Third Round: Chosen universities review candidates; final selection confirmed.",
                "University Track (Single university choice):",
                "1. Apply directly to ONE GKS-designated Korean university according to its deadline.",
                "2. University conducts First Round selection.",
                "3. NIIED conducts Second Round selection and announces final awardees."
            ]),
            get_pillar_6([
                "GKS Application Form (official NIIED template)",
                "Personal Statement",
                "Study Plan (Goal of study, study plan, future plan after study)",
                "One confidential Letter of Recommendation from professor/employer",
                "GKS Applicant Agreement",
                "Personal Medical Assessment",
                "Proof of citizenship for applicant and parents (birth certificate / family registration certificate)",
                "Certified/Apostilled graduation certificates and official academic transcripts",
                "Proof of language proficiency (TOPIK, IELTS, or TOEFL if held)"
            ]),
            get_pillar_7("2026/2027 Academic Cycle", [
                "GKS-U (Undergraduate): Opens September; results in January",
                "GKS-G (Graduate) Embassy Track: Opens February; Embassy deadline late February/early March",
                "GKS-G University Track: February – April depending on university",
                "NIIED 2nd round results: May",
                "Final results announced: Late June",
                "Arrival in South Korea: Late August",
                "Current status: 2026 cycle closed; watch for 2027 calls"
            ], [
                "https://www.studyinkorea.go.kr",
                "https://overseas.mofa.go.kr/pk-en/index.do"
            ])
        ]
    },

    # 4. Taiwan MOE
    {
        "id": "gov-taiwan-scholarship",
        "programTitle": "MOE Taiwan Scholarship Program",
        "sponsorGovernment": "Ministry of Education (MOE), Republic of China (Taiwan)",
        "country": "Taiwan",
        "flag": "🇹🇼",
        "degreeLevels": ["Undergraduate", "Masters", "PhD"],
        "stipendMonthly": "NTD 15,000/mo (Bachelor's) | NTD 20,000/mo (Master's & PhD)",
        "airfareCovered": False,
        "healthInsuranceCovered": False,
        "tuitionCovered": True,
        "deadline": "1 February – 31 March 2026 (Annual Window)",
        "bondRequirement": "None (No return service obligation)",
        "description": "Taiwan's principal government scholarship providing tuition subsidy (up to NTD 40,000/semester) and monthly living stipends for Bachelor's, Master's, and Doctoral studies.",
        "keyEligibility": [
            "Foreign nationals with strong academic performance and good moral character",
            "Two Parallel Processes: Must apply for scholarship to Taiwan overseas mission AND separately apply to Taiwanese university",
            "Maximum award period: Bachelor's 4 years; Master's 2 years; Doctoral 4 years (Maximum total funding cap: 5 years)",
            "Tuition subsidy: Up to NTD 40,000 per semester (student covers remainder if tuition exceeds cap unless university waives)",
            "Language: TOCFL for Chinese-taught programmes; TOEFL/IELTS or English-taught proof for English programmes",
            "Airfare, accommodation, and health insurance are NOT standard scholarship inclusions"
        ],
        "supabaseDbId": 224,
        "overviewLong": "The MOE Taiwan Scholarship Program is established by the Ministry of Education, Republic of China (Taiwan) to encourage outstanding international students to undertake degree studies in Taiwan. The scholarship operates through two parallel processes: the scholarship application must be submitted to the designated Taiwan representative/overseas mission responsible for the applicant's country, while university admission must be applied for separately and directly to the chosen Taiwanese university. The award provides a tuition subsidy of up to NTD 40,000 per semester and a monthly living stipend (NTD 15,000 for undergraduates, NTD 20,000 for Master's and PhD).",
        "fundingType": "Tuition Subsidy + Monthly Living Stipend",
        "workExperienceRequired": "None required",
        "ageLimit": "None explicitly stated; subject to university admission regulations",
        "hecNominationRequired": False,
        "embassyNominationRequired": True,
        "applicationRoute": "Two Parallel Tracks: Taiwan Overseas Mission (Scholarship) + University Direct (Admission)",
        "officialSources": [
            "Ministry of Education, Republic of China (Taiwan)",
            "Taiwan Scholarship and Huayu Enrichment Scholarship Program Office",
            "Taipei Economic and Cultural Representative Office"
        ],
        "stepByStepProcess": [
            "STEP 1 — Check Mission Announcement: Check the Taiwan overseas mission/representative office responsible for Pakistan.",
            "STEP 2 — Confirm Eligibility: Check nationality, previous Taiwan study/funding, and academic qualifications.",
            "STEP 3 — Apply to Universities: Apply directly to Taiwanese universities for degree admission during their application windows.",
            "STEP 4 — Prepare Scholarship Dossier: Prepare application form, study plan, transcripts, recommendation letters, and terms of agreement.",
            "STEP 5 — Submit to Overseas Mission: Submit scholarship application to the responsible Taiwan overseas mission before 31 March.",
            "STEP 6 — Mission Preliminary Screening: The mission conducts selection and notifies preliminarily selected candidates.",
            "STEP 7 — Submit Admission Proof: Submit university admission letter to the overseas mission within the specified deadline.",
            "STEP 8 — Final Confirmation: Overseas mission issues official scholarship certificate; student travels to Taiwan."
        ],
        "restrictions": [
            "ROC nationals and overseas Chinese students are ineligible",
            "Cannot hold concurrent scholarships from other Taiwan government agencies or universities",
            "Tuition above NTD 40,000 per semester must be covered by student unless university provides discount",
            "Maximum cumulative lifetime duration under Taiwan Scholarship is capped at 5 years"
        ],
        "logoText": "MOE",
        "logoBg": "from-teal-600 to-cyan-900",
        "eligibleNationalities": "Foreign nationals globally (including Pakistani applicants via responsible Taiwan overseas mission)",
        "gpaRequirement": "Strong academic performance (minimum 75%+ or equivalent recommended)",
        "ieltsRequirement": "Programme dependent (TOCFL for Chinese programmes; IELTS/TOEFL for English programmes)",
        "isEligibleForPakistan": True,
        "warningNotice": "The scholarship application does NOT replace university admission. The applicant must separately apply to a Taiwanese university and submit admission proof to the mission.",
        "currentStatus": "2026 General Cycle Closed; 2027 Cycle Not Yet Confirmed",
        "currentCycle": "2026/2027 Academic Year",
        "lastVerifiedDate": "3 September 2026",
        "fullSections": [
            get_pillar_1("MOE Taiwan Scholarship Program", "Ministry of Education, Republic of China (Taiwan)", "Taiwan", "Bachelor's, Master's, Doctoral (PhD)", "Two Parallel: Overseas Mission (Scholarship) + Direct University (Admission)", "Eligible through Taiwan representative office responsible for Pakistan", "Bachelor's: max 4 yrs; Master's: max 2 yrs; PhD: max 4 yrs (Max total: 5 yrs)", "2026 General Cycle Closed"),
            get_pillar_2("Government Tuition Subsidy + Monthly Stipend", "Up to NTD 40,000 per semester for tuition and miscellaneous fees (recipient pays remaining balance if costs exceed cap)", "Bachelor's: NTD 15,000/month; Master's: NTD 20,000/month; Doctoral: NTD 20,000/month", "International airfare is NOT included in the standard scholarship package", "Accommodation is NOT universally covered (dormitory fees paid from stipend)", "Health insurance is NOT covered by MOE (student responsibility)", "Undergraduate stipends for 2026 entrants paid through 30 June of graduation year"),
            get_pillar_3([
                "Dual Application Structure: Must apply to the Taiwan overseas mission for the scholarship AND separately apply to a Taiwanese university.",
                "Exclusions: ROC nationals, overseas Chinese, and students already maintaining degree-student status in Taiwan are ineligible.",
                "Funding cap: Cumulative duration under Taiwan Scholarship cannot exceed 5 years across all degrees.",
                "Concurrent funding: Cannot simultaneously receive other Taiwan government scholarships or institutional tuition subsidies.",
                "Academic requirement: Good academic standing and clean disciplinary record.",
                "HEC involvement: Not the standard Taiwan Scholarship process."
            ]),
            get_pillar_4([
                "Universal score: There is no single universal Taiwan Scholarship IELTS score applicable to every applicant.",
                "Chinese-taught tracks: Universities require proof of Chinese language proficiency such as TOCFL (Test of Chinese as a Foreign Language).",
                "English-taught tracks: For all-English programmes, TOCFL may not be required; applicants submit IELTS, TOEFL, or official English MOI.",
                "Standardized tests: No universal SAT, GRE, or GMAT requirement from MOE."
            ]),
            get_pillar_5([
                "Two-Process Application Flow:",
                "Process A — Scholarship Application (via Taiwan Overseas Mission):",
                "1. Download application form from responsible Taiwan overseas mission.",
                "2. Submit scholarship application and supporting documents between 1 February and 31 March.",
                "3. Mission conducts preliminary review and interview.",
                "Process B — University Admission (Direct to Taiwanese University):",
                "1. Apply directly to chosen Taiwanese universities during their respective admission windows.",
                "2. Receive university admission letter.",
                "3. Submit university admission proof to the Taiwan overseas mission by the stated deadline (typically by end of June).",
                "4. Mission issues official Taiwan Scholarship Certificate."
            ]),
            get_pillar_6([
                "Completed Taiwan Scholarship Application Form",
                "Copy of highest-level diploma or graduation certificate (authenticated/notarized)",
                "Official academic transcripts (authenticated/notarized)",
                "Study plan (detailing academic objectives and motivation)",
                "Two letters of recommendation from professors or school principals",
                "Photocopy of valid passport",
                "Proof of application to or admission from a Taiwanese university",
                "Language test certificates (TOCFL for Chinese courses, IELTS/TOEFL for English courses)",
                "Signed Terms of Agreement for the Taiwan Scholarship"
            ]),
            get_pillar_7("2026/2027 Academic Year", [
                "Application window opens: 1 February 2026",
                "Application deadline: 31 March 2026",
                "Submission of admission proof: June 2026",
                "Award confirmation: July – August 2026",
                "Semester starts: September 2026 in Taiwan",
                "Current status: 2026 closed; 2027 call pending announcement"
            ], [
                "https://english.moe.gov.tw",
                "https://taiwanscholarship.moe.gov.tw"
            ])
        ]
    },

    # 5. SINGA Singapore
    {
        "id": "gov-singa-singapore",
        "programTitle": "Singapore International Graduate Award (SINGA)",
        "sponsorGovernment": "A*STAR and Partner Universities (NUS, NTU, SUTD, SMU), Singapore",
        "country": "Singapore",
        "flag": "🇸🇬",
        "degreeLevels": ["PhD"],
        "stipendMonthly": "S$2,700 – S$3,200 / month (Increases after Qualifying Examination)",
        "airfareCovered": True,
        "healthInsuranceCovered": True,
        "tuitionCovered": True,
        "deadline": "1 December 2026 (for August 2027 Intake) / 1 June 2027 (for January 2028 Intake)",
        "bondRequirement": "None (No post-graduation service bond)",
        "description": "Singapore's flagship international PhD research scholarship. A collaboration between A*STAR, NUS, NTU, SUTD, and SMU offering up to 4 years of doctoral training in STEM disciplines.",
        "keyEligibility": [
            "Open to all international graduates with a passion for research and excellent academic achievements",
            "Level: PhD research training only (Bachelor's and Master's degrees NOT offered)",
            "Eligible disciplines: Biomedical Sciences, Computing/AI, Engineering, Physical Sciences, Green Technology",
            "Direct online scholarship application via official A*STAR portal (No Embassy track; No HEC nomination)",
            "Strong English language proficiency (no universal fixed IELTS/TOEFL minimum)",
            "100% full tuition waiver + monthly stipend (S$2,700 rising to S$3,200) + S$1,500 airfare grant + S$1,000 settling-in allowance"
        ],
        "supabaseDbId": 225,
        "overviewLong": "The Singapore International Graduate Award (SINGA) is a collaboration between the Agency for Science, Technology and Research (A*STAR), Nanyang Technological University (NTU), the National University of Singapore (NUS), Singapore University of Technology and Design (SUTD), and Singapore Management University (SMU). PhD research training is carried out in English at chosen labs at A*STAR research institutes or partner universities, with degrees awarded by NUS, NTU, SUTD, or SMU. SINGA is exclusively a doctoral scholarship supporting up to 4 years of PhD funding.",
        "fundingType": "Fully Funded Doctoral Award",
        "workExperienceRequired": "Prior laboratory / research experience strongly preferred",
        "ageLimit": "None",
        "hecNominationRequired": False,
        "embassyNominationRequired": False,
        "applicationRoute": "Direct Online Application via A*STAR SINGA Portal",
        "officialSources": [
            "Agency for Science, Technology and Research (A*STAR) SINGA Portal",
            "National University of Singapore (NUS) Graduate School",
            "Nanyang Technological University (NTU) Graduate College"
        ],
        "stepByStepProcess": [
            "STEP 1 — Explore Research Areas: Browse research projects and faculty on A*STAR, NUS, NTU, SUTD, and SMU sites.",
            "STEP 2 — Choose Projects: Identify supervisors and research topics aligned with your academic background.",
            "STEP 3 — Register on SINGA Portal: Create an account on the official A*STAR scholarship application portal.",
            "STEP 4 — Upload Documents: Submit transcripts, degree certificates, CV, passport, and research statement.",
            "STEP 5 — Referee Submissions: Nominate two academic referees who must submit their reference reports online.",
            "STEP 6 — Shortlisting & Interview: Shortlisted candidates attend virtual or in-person technical interviews.",
            "STEP 7 — Final Selection: Successful candidates receive scholarship offer and complete university matriculation."
        ],
        "restrictions": [
            "Exclusively for PhD degree candidates (cannot be used for undergraduate or master's degrees)",
            "Research must fall within designated STEM disciplines at participating institutes",
            "Must maintain satisfactory research progress through qualifying examinations"
        ],
        "logoText": "SINGA",
        "logoBg": "from-rose-600 to-pink-900",
        "eligibleNationalities": "International applicants globally (including Pakistani STEM graduates)",
        "gpaRequirement": "Strong academic record (minimum 80%+ or equivalent First Division in Bachelor's/Master's)",
        "ieltsRequirement": "English-medium training; good IELTS/TOEFL recommended (no universal fixed cutoff)",
        "isEligibleForPakistan": True,
        "warningNotice": "SINGA is specifically designed for PhD research training. It is NOT a Bachelor's scholarship and NOT a Master's scholarship.",
        "currentStatus": "Active Intake System (Intakes in January and August Annually)",
        "currentCycle": "August 2027 / January 2028 Intakes",
        "lastVerifiedDate": "September 2026",
        "fullSections": [
            get_pillar_1("Singapore International Graduate Award (SINGA)", "A*STAR and Partner Universities (NUS, NTU, SUTD, SMU)", "Singapore", "PhD (Doctoral) Only", "Direct SINGA / A*STAR Online Application System", "Pakistani students eligible as international applicants (no HEC nomination required)", "Up to 4 years of PhD research funding", "Annual January and August Intakes"),
            get_pillar_2("100% Fully Funded Doctoral Award", "Full tuition fees covered for up to 4 years of doctoral study", "Monthly living stipend: S$2,700/month (pre-qualifying exam), increased to S$3,200/month after passing PhD Qualifying Examination", "One-time airfare grant of up to S$1,500 according to scholarship terms", "University graduate residences available (subsidized from monthly stipend; private housing not free)", "Comprehensive medical and hospitalization insurance support provided", "One-time settling-in allowance of S$1,000"),
            get_pillar_3([
                "Degree level: PhD research training ONLY. Bachelor's and Master's degrees are not available.",
                "Target fields: Biomedical Sciences, Computing and Information Sciences, Engineering and Technology, Physical Sciences.",
                "Application route: Direct online application through A*STAR system (NO Embassy route; NO separate University Track).",
                "Prior Master's: A Master's degree is not universally required; outstanding Bachelor's graduates can apply directly for PhD.",
                "Return bond: None. No mandatory government service bond.",
                "Academic strength: Strong academic performance, proven research potential, and excellent academic references."
            ]),
            get_pillar_4([
                "Medium of instruction: All PhD research training and coursework is conducted entirely in English.",
                "Universal score rule: Do not store a universal IELTS or TOEFL minimum for SINGA; admission cutoffs depend on host university.",
                "GRE / GMAT: There is no universal SINGA rule requiring GRE scores; individual university departments may request them."
            ]),
            get_pillar_5([
                "Direct Application Workflow (Applicant -> SINGA Portal -> Selection & Research Matching -> PhD Placement -> Award):",
                "1. Access the official SINGA / A*STAR application platform.",
                "2. Browse research projects across A*STAR institutes, NUS, NTU, SUTD, and SMU.",
                "3. Select research projects and indicate faculty supervisors.",
                "4. Complete online form, upload academic transcripts, degree certificates, CV, and research statement.",
                "5. Ensure two academic referees submit their online evaluation reports before the intake deadline.",
                "6. A*STAR and university committees screen applications and shortlist candidates.",
                "7. Attend interview / technical assessment sessions.",
                "8. Receive final award letter and complete Singapore Student's Pass procedures."
            ]),
            get_pillar_6([
                "Valid international passport copy",
                "Official academic transcripts for Bachelor's and/or Master's degrees",
                "Degree graduation certificates / provisional certificates",
                "Two online academic recommendation letters / referee reports",
                "Curriculum Vitae (highlighting research experience, publications, and lab skills)",
                "Statement of Purpose / Research Interests outline",
                "English language proficiency test scores (IELTS/TOEFL where held)",
                "Copies of publications, conference presentations, or patents (if applicable)"
            ]),
            get_pillar_7("August & January Intake System", [
                "August Intake deadline: 1 December preceding year",
                "January Intake deadline: 1 June preceding year",
                "Shortlisting & interviews: 2–3 months after deadline",
                "Final award notifications: May (for August intake) / October (for January intake)",
                "Current status: Applicants should verify current intake on official portal"
            ], [
                "https://www.a-star.edu.sg/scholarships-awards/singapore-international-graduate-award-singa"
            ])
        ]
    },

    # 6. KNB Indonesia
    {
        "id": "gov-knb-indonesia",
        "programTitle": "Kemitraan Negara Berkembang (KNB) Scholarship",
        "sponsorGovernment": "Directorate General of Higher Education, Ministry of Education, Culture, Research, and Technology, Indonesia",
        "country": "Indonesia",
        "flag": "🇮🇩",
        "degreeLevels": ["Undergraduate", "Masters", "PhD"],
        "stipendMonthly": "Living Allowance + Settlement Support (Under KNB Official Terms)",
        "airfareCovered": True,
        "healthInsuranceCovered": True,
        "tuitionCovered": True,
        "deadline": "2 February – 31 March 2026 (Embassy Deadline: 22 March 2026)",
        "bondRequirement": "Must leave Indonesia upon completion of studies",
        "description": "Indonesia's premier government scholarship for developing countries. Supports Bachelor's, Master's, and PhD degrees across 47 partner universities. Requires mandatory Indonesian Embassy recommendation and 1-year Indonesian language preparation (BIPA).",
        "keyEligibility": [
            "Open to citizens of developing countries (Pakistan is historically participating and eligible)",
            "Mandatory Embassy Recommendation: Must secure official recommendation letter from Embassy of Indonesia in Islamabad",
            "Mandatory BIPA: 1-year Indonesian language preparation study prior to academic study (instruction is primarily in Indonesian)",
            "Age limits: Bachelor's no older than 21 years; Graduate age limits specified in annual guidelines",
            "Minimum GPA: Bachelor's 2.75 | Master's 3.00 | Doctoral 3.00",
            "100% tuition waiver + living allowance + arrival grant + book allowance + research allowance + return flights + insurance"
        ],
        "supabaseDbId": 226,
        "overviewLong": "The Kemitraan Negara Berkembang (KNB) Scholarship is Indonesia's major government scholarship programme for international students from developing countries. It supports degree study at Bachelor's, Master's, and Doctoral levels across 47 partner universities. The application structure combines Indonesian Embassy verification (an official Embassy Recommendation Letter from Islamabad is mandatory before the central deadline), central administrative evaluation, and university academic assessment. A defining feature is mandatory 1-year BIPA Indonesian language training prior to regular degree study.",
        "fundingType": "Comprehensive Government Scholarship",
        "workExperienceRequired": "None for UG/Master's; supervisor support required for PhD",
        "ageLimit": "Bachelor's: no older than 21 years | Graduate: check annual guidelines",
        "hecNominationRequired": False,
        "embassyNominationRequired": True,
        "applicationRoute": "Embassy Recommendation / Verification Route -> Central KNB Online Application",
        "officialSources": [
            "Directorate General of Higher Education Indonesia (KNB Portal: knb.kemdikbud.go.id)",
            "Embassy of the Republic of Indonesia in Islamabad",
            "Study in Indonesia Official Guidelines"
        ],
        "stepByStepProcess": [
            "STEP 1 — Download Offering Letter: Download official KNB Scholarship Offering Letter from the portal.",
            "STEP 2 — Request Embassy Recommendation: Contact Indonesian Embassy in Islamabad and submit required documents before the local embassy deadline (e.g. 22 March 2026).",
            "STEP 3 — Receive Embassy Recommendation: Obtain the signed official Embassy Recommendation Letter.",
            "STEP 4 — Complete Online Application: Register on KNB portal (knb.kemdikbud.go.id) and submit all materials between 2 February and 31 March.",
            "STEP 5 — Directorate Verification: Indonesian government authorities verify documents and eligibility.",
            "STEP 6 — University Academic Selection: 47 partner universities conduct academic evaluation, interviews, and psychological tests.",
            "STEP 7 — Final Selection & Arrival: Final results published; flight tickets issued; scholars begin BIPA language training."
        ],
        "restrictions": [
            "Must secure Embassy Recommendation Letter before applying on the KNB central system",
            "Must complete mandatory 1-year BIPA Indonesian language course (classes are conducted in Indonesian)",
            "Recipients are not permitted to undertake paid employment during the scholarship",
            "Must return to home country immediately after completion of studies"
        ],
        "logoText": "KNB",
        "logoBg": "from-red-600 to-emerald-900",
        "eligibleNationalities": "Citizens of developing nations (including Pakistan)",
        "gpaRequirement": "Bachelor's: min 2.75 | Master's: min 3.00 | Doctoral: min 3.00",
        "ieltsRequirement": "English proficiency evidence required (IELTS / TOEFL / TOEIC as per annual guidelines)",
        "isEligibleForPakistan": True,
        "warningNotice": "KNB should not automatically be treated as an English-medium scholarship. Regular academic classes are generally conducted in Indonesian after mandatory 1-year BIPA language preparation.",
        "currentStatus": "2026 Selection Cycle Completed / Closed",
        "currentCycle": "2026/2027 Academic Year",
        "lastVerifiedDate": "September 2026",
        "fullSections": [
            get_pillar_1("Kemitraan Negara Berkembang (KNB) Scholarship", "Government of the Republic of Indonesia / Kemendikbudristek", "Indonesia", "Bachelor's, Master's, and Doctoral (PhD)", "Embassy Recommendation / Verification Route + KNB Online Application", "Eligible subject to current-year rules (Pakistani applicants verified in 2026)", "Bachelor's: 4 yrs + 1 yr BIPA; Master's: 2 yrs + 1 yr BIPA; PhD: 3 yrs + 1 yr BIPA", "2026/2027 Cycle (47 Partner Universities)"),
            get_pillar_2("Comprehensive Government Scholarship Package", "100% full tuition fees covered for duration of program", "Monthly living expenses allowance according to official scholarship terms", "Round-trip economy international airfare for arrival and return", "Accommodation arranged by host university or supported through living allowance", "Monthly health insurance support included", "Arrival/settlement support, book allowance, research allowance, publication assistance, and 1-year BIPA language course"),
            get_pillar_3([
                "Embassy Recommendation: Mandatory official recommendation letter from the Embassy of the Republic of Indonesia in Islamabad.",
                "Language integration: Mandatory participation in 1-year BIPA (Indonesian Language) training before degree study.",
                "Minimum GPA thresholds: Bachelor's min 2.75; Master's min 3.00; Doctoral min 3.00.",
                "Age limit: Bachelor's applicants must be no older than 21 years old by 31 December of application year.",
                "Return obligation: Must leave Indonesia immediately after completing the academic programme.",
                "Employment: Paid employment during the scholarship period is strictly prohibited."
            ]),
            get_pillar_4([
                "Indonesian language (BIPA): Mandatory 1-year Indonesian language preparation; degree coursework is largely conducted in Indonesian.",
                "English language: English proficiency evidence (IELTS, TOEFL, or TOEIC) required for applicants from non-English-speaking nations.",
                "Standardized tests: No universal SAT, GRE, or GMAT requirement."
            ]),
            get_pillar_5([
                "Application Flow (Applicant -> Embassy -> Recommendation -> KNB Portal -> University Selection -> Final Award):",
                "1. Download KNB Scholarship Offering Letter from the official portal.",
                "2. Submit documents to Embassy of Indonesia in Islamabad to request Embassy Recommendation Letter (observe early embassy deadline).",
                "3. Receive official recommendation letter from the Embassy.",
                "4. Complete online application on knb.kemdikbud.go.id attaching all required documents.",
                "5. Indonesian Directorate General conducts administrative verification.",
                "6. Chosen host university conducts academic selection (interviews, tests).",
                "7. Final selection published; visa clearance and travel arrangements initiated."
            ]),
            get_pillar_6([
                "Official international passport copy",
                "KNB Scholarship Offering Letter",
                "Curriculum Vitae",
                "Official academic certificates (degrees) and transcripts",
                "Official Indonesian Embassy Recommendation Letter",
                "English proficiency test certificate (IELTS/TOEFL)",
                "Academic recommendation letter and employer recommendation letter (if applicable)",
                "Official Medical Report",
                "For PhD: Recommendation/support from potential supervisor at partner university and Statement of Purpose"
            ]),
            get_pillar_7("2026/2027 Academic Year", [
                "Application window: 2 February – 31 March 2026",
                "Embassy Islamabad recommendation deadline: 22 March 2026",
                "Embassy verification: 6 April – 17 April 2026",
                "Directorate verification: 20 April – 30 April 2026",
                "University academic selection: 4 May – 22 May 2026",
                "Results announcement: 19 June 2026",
                "Current status: 2026 cycle closed"
            ], [
                "https://knb.kemdikbud.go.id"
            ])
        ]
    },

    # 7. MIS Malaysia
    {
        "id": "gov-mis-malaysia",
        "programTitle": "Malaysia International Scholarship (MIS)",
        "sponsorGovernment": "Ministry of Higher Education (MOHE), Government of Malaysia",
        "country": "Malaysia",
        "flag": "🇲🇾",
        "degreeLevels": ["Masters", "PhD"],
        "stipendMonthly": "Full Tuition + Monthly Living Allowance (Under MOHE Current Cycle Terms)",
        "airfareCovered": False,
        "healthInsuranceCovered": False,
        "tuitionCovered": True,
        "deadline": "Typically June / July (2026/27 Cycle Closed)",
        "bondRequirement": "None (No post-study service bond)",
        "description": "Malaysia's premier international postgraduate scholarship for full-time Master's and PhD studies at Malaysian public research universities and selected private institutions. Open to Commonwealth citizens including Pakistan.",
        "keyEligibility": [
            "Pakistan eligible through the Commonwealth-country category",
            "Degree levels: Master's and PhD only (Bachelor's degrees are NOT supported)",
            "Academic benchmark: Minimum Second Class Upper (Honours) or CGPA 3.50/4.00 at Bachelor's/Master's level",
            "Age requirements: Master's applicants not more than 40 years old; PhD applicants not more than 45 years old",
            "Application route: Direct online application via official MOHE MIS online system (No Embassy track; No HEC nomination)",
            "Requires separate admission application to an eligible Malaysian public research university"
        ],
        "supabaseDbId": 227,
        "overviewLong": "The Malaysia International Scholarship (MIS) is the Malaysian Government's flagship international postgraduate initiative administered by the Ministry of Higher Education (MOHE). The scholarship supports full-time Master's and PhD studies at leading Malaysian public universities (such as Universiti Malaya, UTM, USM, UKM, and UPM) and selected private institutions. Pakistani applicants are eligible under the Commonwealth-country category. The award covers tuition fees paid directly to the university and provides a monthly living allowance.",
        "fundingType": "Government Postgraduate Award",
        "workExperienceRequired": "None mandatory",
        "ageLimit": "Master's: not more than 40 years old | PhD: not more than 45 years old",
        "hecNominationRequired": False,
        "embassyNominationRequired": False,
        "applicationRoute": "Direct Official MOHE MIS Online System + Separate University Admission",
        "officialSources": [
            "Ministry of Higher Education (MOHE) Malaysia",
            "Official MIS Online Application Portal (biasiswa.mohe.gov.my)",
            "Education Malaysia Global Services (EMGS)"
        ],
        "stepByStepProcess": [
            "STEP 1 — Check MIS Call: Confirm annual dates, eligible fields, and participating universities on MOHE portal.",
            "STEP 2 — Select University: Choose an eligible Malaysian public or selected private university.",
            "STEP 3 — Apply for University Admission: Submit admission application to the chosen Malaysian institution.",
            "STEP 4 — Prepare MIS Documents: Gather certified transcripts, degree certificates, 2 recommendation letters, proposal, and endorsement form.",
            "STEP 5 — Submit on MIS Portal: Complete online scholarship submission through official MOHE MIS system.",
            "STEP 6 — Screening & Interview: MOHE conducts eligibility verification, academic screening, and interviews for shortlisted applicants.",
            "STEP 7 — Final Selection: MOHE announces results; successful scholars finalize admission and visa through EMGS."
        ],
        "restrictions": [
            "Bachelor's degree studies are NOT covered under MIS",
            "Mode of study must be full-time postgraduate (part-time or distance learning ineligible)",
            "Must maintain minimum academic standards throughout degree tenure"
        ],
        "logoText": "MIS",
        "logoBg": "from-amber-600 to-blue-900",
        "eligibleNationalities": "Commonwealth country citizens (including Pakistan), ASEAN, and specified recipient nations",
        "gpaRequirement": "Minimum CGPA 3.50/4.00 or Second Class Upper (Honours)",
        "ieltsRequirement": "IELTS 6.0+ or TOEFL 550+ (certified copy of English language proficiency required)",
        "isEligibleForPakistan": True,
        "warningNotice": "MIS is not currently a Bachelor's scholarship. It exclusively funds full-time Master's and PhD studies.",
        "currentStatus": "2026/2027 Academic Year Application Closed",
        "currentCycle": "2026/2027 Academic Year",
        "lastVerifiedDate": "September 2026",
        "fullSections": [
            get_pillar_1("Malaysia International Scholarship (MIS)", "Ministry of Higher Education (MOHE), Government of Malaysia", "Malaysia", "Master's and PhD Only (Full-Time)", "Direct Official MIS Online Portal + Separate University Admission", "Eligible through Commonwealth-country category (no HEC nomination required)", "Master's: 1–2 years; PhD: up to 3 years", "2026/2027 Cycle (Closed)"),
            get_pillar_2("Government Postgraduate Scholarship", "Full tuition fees paid directly to the Malaysian host university", "Monthly living allowance provided according to current cycle's award terms", "International travel is NOT a standard guaranteed component", "University hostel accommodation available (costs paid from allowance)", "Medical insurance subject to Malaysian international student health requirements via EMGS", "Research allowances where specified by host faculty"),
            get_pillar_3([
                "Level constraint: Master's and PhD ONLY. Bachelor's degrees are NOT funded under MIS.",
                "Commonwealth eligibility: Pakistan is eligible as a recognized Commonwealth member nation.",
                "Academic threshold: Minimum CGPA of 3.50/4.00 or Second Class Upper (Honours) in prior degree.",
                "Age limits: Master's applicants not more than 40 years old; PhD applicants not more than 45 years old.",
                "Study mode: Full-time postgraduate study only.",
                "Already enrolled students: International students currently enrolled in eligible Malaysian universities can apply if having >= 2 semesters remaining."
            ]),
            get_pillar_4([
                "English proficiency: Certified copy of English-language proficiency documentation required (IELTS / TOEFL).",
                "Universal score: Do not store one universal cutoff; minimums typically IELTS 6.0+ or TOEFL 550+ depending on discipline.",
                "Standardized tests: GRE / GMAT not required by MOHE."
            ]),
            get_pillar_5([
                "Application Flow (Applicant -> MIS Online Portal + University Admission -> MOHE Evaluation -> Interview -> Final Award):",
                "1. Confirm annual call and participating universities on biasiswa.mohe.gov.my.",
                "2. Apply separately for admission to an eligible Malaysian university.",
                "3. Prepare certified academic certificates, transcripts, research proposal, and endorsement form.",
                "4. Complete online MIS application and submit before the announced deadline.",
                "5. MOHE conducts administrative screening and technical evaluation.",
                "6. Shortlisted candidates attend virtual interview sessions.",
                "7. Successful candidates receive scholarship notification and complete student pass via EMGS."
            ]),
            get_pillar_6([
                "Completed MIS online application form",
                "Certified copy of valid international passport",
                "Certified copy of Bachelor's degree certificate (and Master's for PhD applicants)",
                "Official academic transcripts with grading system explanation",
                "Certified English-language proficiency certificate (IELTS/TOEFL)",
                "Two letters of recommendation from academic referees",
                "Official Endorsement Form",
                "Admission offer letter from eligible Malaysian university (if already obtained)",
                "Curriculum Vitae",
                "Research proposal (vital for research Master's and PhD candidates)"
            ]),
            get_pillar_7("2026/2027 Academic Year", [
                "Application opened: May / June 2026",
                "Application closed: Late June / July 2026",
                "Interview sessions for shortlisted candidates: July – August 2026",
                "Results announcement: August 2026",
                "Current status: 2026/2027 application is closed; monitor MOHE portal for 2027 cycle"
            ], [
                "https://biasiswa.mohe.gov.my/INTER"
            ])
        ]
    }
]

print("Batch 1 (1-7) loaded successfully:", len(scholarships_1_7))
