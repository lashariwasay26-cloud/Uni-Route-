import json
import sys
sys.path.append('/app/applet/tmp')
from scholarship_builder import *

americas_scholarships = [
    # 1. Fulbright USA
    {
        "id": "gov-fulbright-usa",
        "programTitle": "Fulbright Foreign Student Program",
        "sponsorGovernment": "U.S. Department of State / Bureau of Educational and Cultural Affairs",
        "country": "United States",
        "flag": "🇺🇸",
        "degreeLevels": ["Masters", "PhD"],
        "stipendMonthly": "Full Maintenance Allowance (Program/Location Dependent Rates)",
        "airfareCovered": True,
        "healthInsuranceCovered": True,
        "tuitionCovered": True,
        "deadline": "Typically Early Spring (2027 Pakistan Cycle Closed)",
        "bondRequirement": "Mandatory return to Pakistan upon completion (J-1 Exchange Visitor 2-Year Home Rule)",
        "description": "The premier flagship international exchange scholarship of the United States Government. For Pakistan, administered exclusively through USEFP with full tuition, living stipends, return airfare, and structured U.S. university placement.",
        "keyEligibility": [
            "Pakistani citizenship (applicants with dual U.S./Pakistan nationality are ineligible)",
            "Degree level: Master's (16 years education / 4-year Bachelor's) and PhD (18 years education / Master's/MPhil)",
            "Standardized testing: GRE General Test required under current Pakistan programme rules for relevant applicants",
            "Application route: USEFP national competition (No HEC nomination; No direct U.S. university admission required first)",
            "Structured U.S. University Placement: USEFP and IIE assist selected finalists with university placement and admissions",
            "100% Fully Funded: Full tuition + monthly living maintenance + round-trip airfare + health benefit + book/settling-in allowances"
        ],
        "supabaseDbId": 235,
        "overviewLong": "The Fulbright Foreign Student Program is the United States Government's flagship international educational exchange initiative sponsored by the U.S. Department of State's Bureau of Educational and Cultural Affairs. For Pakistani citizens, the programme is administered nationally by the United States Educational Foundation in Pakistan (USEFP) and represents one of the largest Fulbright programs in the world. Fulbright covers Master's and PhD degree studies across a broad range of disciplines including Computer Science, Artificial Intelligence, Engineering, Public Policy, Environmental Sciences, and Humanities. Unlike standard university applications, applicants do not need to secure U.S. university admission beforehand; USEFP and the Institute of International Education (IIE) coordinate university placements for selected finalists. The award covers tuition, living allowances, health benefits, books, and international travel under the J-1 exchange visitor visa framework.",
        "fundingType": "Fully Funded Sovereign Award",
        "workExperienceRequired": "Not universally required for Master's; substantial research profile required for PhD",
        "ageLimit": "None explicitly set by USEFP (evaluated on academic and leadership potential)",
        "hecNominationRequired": False,
        "embassyNominationRequired": True,
        "applicationRoute": "Direct Online Application to USEFP (National Competition; No HEC Routing)",
        "officialSources": [
            "United States Educational Foundation in Pakistan (USEFP: usefp.org)",
            "U.S. Department of State - Fulbright Foreign Student Program (foreign.fulbrightonline.org)",
            "EducationUSA - Study in the USA"
        ],
        "stepByStepProcess": [
            "STEP 1 — Check Eligibility: Verify Pakistani citizenship, 16 years education (Master's) or 18 years (PhD), and discipline eligibility.",
            "STEP 2 — Take GRE General Test: Complete the GRE General Test and ensure scores are valid for USEFP submission.",
            "STEP 3 — Prepare Essays: Craft detailed Statement of Purpose and Study/Research Objectives showing past -> U.S. study -> impact in Pakistan.",
            "STEP 4 — Submit Online to USEFP: Complete the online Fulbright application on the USEFP portal with transcripts and 3 reference letters.",
            "STEP 5 — Initial Screening & National Shortlist: USEFP reviews academic merit, GRE scores, essays, and leadership potential.",
            "STEP 6 — Panel Interview: Shortlisted candidates attend comprehensive panel interviews in Islamabad.",
            "STEP 7 — Finalist Selection & Approval: USEFP recommends finalists; Fulbright Foreign Scholarship Board (FFSB) confirms selection.",
            "STEP 8 — U.S. University Placement: IIE/USEFP submits admission dossiers to matching accredited U.S. universities.",
            "STEP 9 — Visa & Departure: Complete J-1 exchange visitor visa process; pre-departure orientation; travel to host university."
        ],
        "restrictions": [
            "Dual U.S./Pakistani citizens or individuals with U.S. permanent residence are strictly ineligible",
            "Clinical medicine and direct patient-care disciplines are excluded from Fulbright funding",
            "Cannot stack Fulbright funding with concurrent duplicate scholarships covering the same expenses",
            "Subject to J-1 visa Two-Year Home-Country Physical Presence Requirement (212(e))"
        ],
        "logoText": "USEFP",
        "logoBg": "from-blue-700 to-red-800",
        "eligibleNationalities": "Pakistani citizens residing in Pakistan (country-specific competition managed by USEFP)",
        "gpaRequirement": "Strong academic record (evaluated holistically alongside GRE scores, essays, and leadership)",
        "ieltsRequirement": "English proficiency evaluated via standardized testing (TOEFL iBT / Duolingo / IELTS as per current USEFP rules)",
        "isEligibleForPakistan": True,
        "warningNotice": "Fulbright is country-specific. Pakistani applicants apply exclusively through USEFP in Islamabad, NOT through HEC. U.S. university placement assistance is provided after selection.",
        "currentStatus": "Current 2027 Pakistan Cycle Closed (Next Cycle Pending Announcement)",
        "currentCycle": "2027 Competition (Closed)",
        "lastVerifiedDate": "3 September 2026",
        "fullSections": [
            get_pillar_1("Fulbright Foreign Student Program", "U.S. Department of State / USEFP", "United States", "Master's and PhD Degrees", "USEFP National Competition (Online Application -> Screening -> Placement)", "Yes (Administered exclusively through USEFP for Pakistani citizens)", "Master's: 1–2 years; PhD: 4–5 years", "2027 Competition (Closed)"),
            get_pillar_2("100% Fully Funded Sovereign Award", "Full tuition and mandatory fees covered at approved host U.S. university", "Monthly living maintenance allowance provided according to U.S. programme and location rates", "Round-trip economy international airfare between Pakistan and the United States", "Dormitory housing or apartment living expenses covered through monthly stipend", "Health benefits coverage through the Bureau of Educational and Cultural Affairs ASPE health plan", "Books and equipment allowance, settling-in allowance, and J-1 visa sponsorship support"),
            get_pillar_3([
                "Citizenship: Pakistani citizens residing in Pakistan. Dual Pakistani/U.S. nationals or permanent residents are ineligible.",
                "Degree level: 16 years of education (4-year Bachelor's or 2-year Bachelor's + 2-year Master's) for Master's; 18 years (Master's/MPhil) for PhD.",
                "Mandatory return bond: J-1 Exchange Visitor 2-Year Home-Country Physical Presence Requirement (must return and serve in Pakistan).",
                "Standardized testing: GRE General Test required under current Pakistan programme rules.",
                "Clinical exclusion: Programmes with clinical direct patient contact (e.g. medicine, nursing) are not supported.",
                "No HEC nomination: Application is made directly to USEFP; HEC is not involved."
            ]),
            get_pillar_4([
                "GRE Requirement: GRE General Test required for Pakistani applicants submitting to USEFP.",
                "English proficiency: Standardized English testing (TOEFL iBT, Duolingo English Test, or IELTS) according to USEFP competition rules.",
                "Universal score rule: No single universal global IELTS/TOEFL cutoff; requirements determined by USEFP and host U.S. university departments."
            ]),
            get_pillar_5([
                "USEFP Pakistan Application Flow (Applicant -> USEFP Online -> Screening -> Interview -> Placement -> Visa):",
                "1. Confirm eligibility criteria and prepare GRE General Test.",
                "2. Create account on USEFP online application portal.",
                "3. Write Statement of Purpose and Study/Research Objectives connecting past work to future Pakistan development.",
                "4. Submit online application with academic transcripts, degrees, and 3 academic/professional references.",
                "5. USEFP conducts initial eligibility screening and technical review.",
                "6. Shortlisted candidates undergo rigorous panel interview in Islamabad.",
                "7. USEFP and Fulbright Foreign Scholarship Board finalize nominations.",
                "8. IIE conducts U.S. university placement matching candidates with suitable institutions.",
                "9. Obtain J-1 exchange visitor visa and attend mandatory pre-departure orientation."
            ]),
            get_pillar_6([
                "Completed USEFP online application form",
                "Detailed academic transcripts and degree certificates (Bachelor's and Master's)",
                "Official GRE General Test score report",
                "English language test score report (TOEFL iBT / Duolingo / IELTS)",
                "Statement of Purpose (academic and career trajectory essay)",
                "Study / Research Objectives (detailed research proposal for PhD candidates)",
                "Three letters of recommendation from professors or employers",
                "Curriculum Vitae / Resume",
                "Photocopy of valid Pakistani passport"
            ]),
            get_pillar_7("2027 Competition Cycle", [
                "Competition announcement: Early spring annually (typically February/March)",
                "Application deadline: Typically April / May annually",
                "National interviews: July – September in Islamabad",
                "Finalist announcements: October – November",
                "U.S. university placement: Winter – Spring",
                "Departure to the United States: Fall intake (August)",
                "Current status: 2027 Pakistan cycle closed; monitor USEFP for next call"
            ], [
                "https://www.usefp.org/scholarships/fulbright-degree.cfm",
                "https://foreign.fulbrightonline.org"
            ])
        ]
    },

    # 2. Hubert H. Humphrey USA
    {
        "id": "gov-humphrey-fellowship-usa",
        "programTitle": "Hubert H. Humphrey Fellowship Program",
        "sponsorGovernment": "U.S. Department of State / Bureau of Educational and Cultural Affairs",
        "country": "United States",
        "flag": "🇺🇸",
        "degreeLevels": ["Non-Degree Fellowship"],
        "stipendMonthly": "Monthly Maintenance Allowance (Location/University Dependent)",
        "airfareCovered": True,
        "healthInsuranceCovered": True,
        "tuitionCovered": True,
        "deadline": "20 May 2026 (2027 Competition Closed)",
        "bondRequirement": "Mandatory immediate return to Pakistan with employer re-employment guarantee",
        "description": "Prestigious 10–12 month non-degree professional development fellowship for accomplished mid-career professionals with 8–18 years of experience. Combines graduate coursework at 18 select U.S. universities with practical professional affiliations.",
        "keyEligibility": [
            "Target: Accomplished mid-career professionals with 8–18 years of progressively responsible professional experience",
            "Degree awarded: NON-DEGREE. Fellows undertake graduate courses and professional internships without receiving an academic degree",
            "Education: 16 years of formal education (4-year Bachelor's or 2-year Bachelor's + 2-year Master's)",
            "Mandatory Re-Employment Guarantee: Must provide written guarantee of re-employment after returning to Pakistan",
            "Host campus assignment: Fellows are placed in cohorts of 13–15 at ~18 designated U.S. host universities (cannot freely select Harvard/MIT)",
            "Fully Funded: Tuition + living maintenance + return airfare + health coverage + computer subsidy + professional development allowance"
        ],
        "supabaseDbId": 236,
        "overviewLong": "The Hubert H. Humphrey Fellowship Program is a Fulbright exchange activity funded by the U.S. Department of State and administered by the Institute of International Education (IIE). For Pakistan, it is managed by USEFP. Designed for experienced mid-career professionals with 8 to 18 years of public service, leadership, and professional experience, fellows spend 10 to 12 months at one of approximately 18 participating U.S. host campuses. The program combines graduate-level academic coursework with practical professional affiliations, networking, and leadership development. Humphrey is strictly a non-degree program; participants do not receive a Master's or PhD degree. It requires a firm commitment to public service and a formal guarantee of re-employment upon return to Pakistan.",
        "fundingType": "Fully Funded Professional Fellowship",
        "workExperienceRequired": "8–18 years of progressively responsible professional experience (Pakistan USEFP Rule)",
        "ageLimit": "Mid-career professional stage (no fixed upper chronological age limit)",
        "hecNominationRequired": False,
        "embassyNominationRequired": True,
        "applicationRoute": "Direct Online Application to USEFP (National Selection; No University-First Application)",
        "officialSources": [
            "United States Educational Foundation in Pakistan (USEFP: usefp.org)",
            "Hubert H. Humphrey Fellowship Official Portal (humphreyfellowship.org)",
            "Institute of International Education (IIE)"
        ],
        "stepByStepProcess": [
            "STEP 1 — Confirm Career Stage: Verify 16 years of education and 8–18 years of substantive professional experience in a designated field.",
            "STEP 2 — Choose Impact Field: Select from Human & Institutional Capacity, Rights & Freedoms, Sustainable Lands, or Thriving Communities.",
            "STEP 3 — Re-Employment Guarantee: Confirm employer support and ability to provide a guarantee of re-employment upon return.",
            "STEP 4 — Complete USEFP Application: Submit online application including essays on leadership, public service, and professional goals.",
            "STEP 5 — Submit Recommendations: Provide two professional recommendations, including one mandatory letter from current employer.",
            "STEP 6 — English Evidence: Submit score report from Duolingo English Test, TOEFL iBT, or IELTS.",
            "STEP 7 — In-Person Interview: Shortlisted candidates attend in-person interviews in Islamabad (July – September).",
            "STEP 8 — U.S. Review & FSB Approval: Nominations reviewed by IIE and approved by the Fulbright Foreign Scholarship Board.",
            "STEP 9 — Campus Assignment & J-1 Visa: Assigned to cohort at designated U.S. host university; travel to the U.S. in the fall."
        ],
        "restrictions": [
            "Non-degree program: Does NOT award an academic degree or graduate diploma",
            "Software engineers seeking an ordinary Master's are ineligible; only technology policy/management professionals qualify",
            "Cannot freely choose host university; fellows are assigned to university cohorts by the program",
            "Attended graduate school in the U.S. during the previous 7 years or long-term U.S. residence in previous 5 years makes applicants ineligible",
            "Dual U.S./Pakistan nationals or individuals with immediate U.S. citizen family members are ineligible",
            "Dependents cannot accompany the fellow initially under the Pakistan programme"
        ],
        "logoText": "Humphrey",
        "logoBg": "from-slate-800 to-indigo-950",
        "eligibleNationalities": "Pakistani citizens with professional career in Pakistan (148 participating countries globally)",
        "gpaRequirement": "Demonstrated academic capability supporting graduate-level coursework",
        "ieltsRequirement": "Accepted proof of English proficiency (Duolingo English Test, TOEFL iBT, or IELTS; no single band cutoff published)",
        "isEligibleForPakistan": True,
        "warningNotice": "Humphrey is NOT a Master's degree scholarship. It is a non-degree professional development fellowship for accomplished professionals with 8–18 years of work experience.",
        "currentStatus": "2027 Competition Closed (Deadline was 20 May 2026)",
        "currentCycle": "2027 Competition",
        "lastVerifiedDate": "3 September 2026",
        "fullSections": [
            get_pillar_1("Hubert H. Humphrey Fellowship Program", "U.S. Department of State / USEFP", "United States", "Non-Degree Professional Fellowship (10–12 Months)", "USEFP National Competition -> Cohort Assignment to U.S. Host University", "Yes (Active participating country administered by USEFP)", "10–12 months", "2027 Competition (Closed)"),
            get_pillar_2("100% Fully Funded Professional Fellowship", "Tuition and required academic fees at assigned host U.S. university covered", "Monthly maintenance/living allowance provided based on programme location", "Round-trip international airfare between Pakistan and the U.S. + domestic programme travel", "Housing managed through living maintenance allowance and campus arrangements", "Accident and sickness health benefits coverage provided", "One-time settling-in allowance, book allowance, computer subsidy, and professional-development travel allowance"),
            get_pillar_3([
                "Professional experience (STRICT): Must have 8–18 years of progressively responsible professional work experience (part-time experience does not qualify).",
                "Non-degree classification: Participants undertake non-degree graduate coursework and professional affiliations; NO degree is awarded.",
                "Re-employment guarantee: Must provide a binding commitment/guarantee of re-employment after returning to Pakistan.",
                "Education: Minimum 16 years of formal education (4-year Bachelor's or 2-year Bachelor's + 2-year Master's).",
                "Exclusions: Recent U.S. study (graduate school in U.S. during past 7 years or residence in past 5 years) and dual U.S. citizens are ineligible.",
                "University assignment: Fellows are assigned to one of ~18 host universities in cohorts of 13–15 (cannot choose Harvard, MIT, etc.)."
            ]),
            get_pillar_4([
                "English proficiency: Proof of English proficiency required via Duolingo English Test, TOEFL iBT, or IELTS.",
                "IELTS Band: Accepted; no universal minimum band cutoff published by USEFP.",
                "Standardized tests: GRE, GMAT, and SAT are NOT required for Humphrey."
            ]),
            get_pillar_5([
                "Humphrey Selection & Placement Flow (Applicant -> USEFP -> Interview -> U.S. Review -> FSB -> Host Campus):",
                "1. Confirm 8–18 years professional experience and select relevant field.",
                "2. Complete online USEFP Humphrey application.",
                "3. Secure employer endorsement and re-employment guarantee.",
                "4. Submit two letters of recommendation (one mandatory from current employer).",
                "5. Upload English test evidence (Duolingo, TOEFL, or IELTS).",
                "6. USEFP screens applications and shortlists candidates.",
                "7. Shortlisted candidates attend in-person interviews in Islamabad (July – September).",
                "8. Nominations evaluated by U.S. selection panels and confirmed by FSB.",
                "9. IIE assigns fellows to appropriate host university campus; J-1 visa issued."
            ]),
            get_pillar_6([
                "Completed online USEFP Humphrey application form",
                "Official academic transcripts and degree certificates (16 years education)",
                "Evidence of English proficiency (Duolingo, TOEFL iBT, or IELTS)",
                "Detailed documentation of 8–18 years of professional work experience",
                "Two letters of recommendation (one must be from current immediate employer)",
                "Written guarantee / proof of re-employment after returning to Pakistan",
                "Curriculum Vitae / Resume detailing leadership and public service",
                "Finalist stage: Medical examination form, valid passport, and departmental NOC"
            ]),
            get_pillar_7("2027 Competition Cycle", [
                "Competition announced: April 2026",
                "Pakistan application deadline: 20 May 2026",
                "Interviews in Islamabad: July – September 2026",
                "Finalists announced: October 2026",
                "Fellowship begins in the U.S.: Fall 2027",
                "Current status: Closed (Monitor USEFP for 2028 competition)"
            ], [
                "https://www.usefp.org/scholarships/humphrey.cfm",
                "https://www.humphreyfellowship.org"
            ])
        ]
    },

    # 3. Benjamin A. Gilman USA
    {
        "id": "gov-gilman-scholarship-usa",
        "programTitle": "Benjamin A. Gilman International Scholarship",
        "sponsorGovernment": "U.S. Department of State / Bureau of Educational and Cultural Affairs",
        "country": "United States",
        "flag": "🇺🇸",
        "degreeLevels": ["Undergraduate Study Abroad"],
        "stipendMonthly": "Partial Grant (Base: Up to $5,000 | Max with Supplements: Up to $9,000)",
        "airfareCovered": False,
        "healthInsuranceCovered": False,
        "tuitionCovered": False,
        "deadline": "1 October 2026, 11:59 PM Pacific Time (Fall 2026 Cycle Open)",
        "bondRequirement": "Mandatory Follow-On Service Project in home U.S. community",
        "description": "A U.S. government grant exclusively for American undergraduate students with high financial need (receiving a Federal Pell Grant) to study or intern abroad. NOT for international students seeking study in the USA.",
        "keyEligibility": [
            "U.S. CITIZENS ONLY: Applicant must be a U.S. citizen or U.S. national (International / Pakistani foreign students are NOT eligible)",
            "Federal Pell Grant: Must be currently receiving a Federal Pell Grant or provide proof of receiving one during the study abroad term",
            "Undergraduate Status: Enrolled in good standing at an accredited two-year or four-year U.S. higher education institution",
            "Study Abroad / Internship: Participating in a credit-bearing study abroad or international internship program outside the U.S.",
            "Destination: Destination country must have a U.S. Department of State Travel Advisory Level 1 or Level 2",
            "Two Certifying Advisors Required: Application must be certified by both a Study Abroad Advisor and a Financial Aid Advisor"
        ],
        "supabaseDbId": 237,
        "overviewLong": "The Benjamin A. Gilman International Scholarship Program is sponsored by the Bureau of Educational and Cultural Affairs of the U.S. Department of State and administered by the Institute of International Education (IIE). The program enables American undergraduate students of limited financial means to study or intern abroad, gaining skills critical to U.S. national security and economic prosperity. To be eligible, applicants must be U.S. citizens receiving a Federal Pell Grant. The scholarship provides up to $5,000 in base funding, with additional competitive supplements of up to $3,000 for Critical Need Languages and up to $1,000 for STEM fields (maximum potential award: $9,000). Gilman is not a scholarship for international students coming to the United States.",
        "fundingType": "Partial Grant (Study Abroad Subsidy)",
        "workExperienceRequired": "None required",
        "ageLimit": "Undergraduate student status",
        "hecNominationRequired": False,
        "embassyNominationRequired": False,
        "applicationRoute": "Direct Online Application + Home U.S. Institution Advisor Certifications",
        "officialSources": [
            "Official Gilman Scholarship Portal (gilmanscholarship.org)",
            "U.S. Department of State - Bureau of Educational and Cultural Affairs",
            "Institute of International Education (IIE)"
        ],
        "stepByStepProcess": [
            "STEP 1 — Verify U.S. Citizenship & Pell Grant: Confirm you are a U.S. citizen receiving a Federal Pell Grant at an accredited U.S. college/university.",
            "STEP 2 — Select Credit-Bearing Overseas Program: Choose an approved study abroad or international internship program in a Level 1 or 2 destination.",
            "STEP 3 — Write Essays: Complete four required short essays addressing academic/career impact, preparedness, and community ambassadorship.",
            "STEP 4 — Enter Financial Aid Info: Submit Pell Grant documentation and financial aid details.",
            "STEP 5 — Select Institutional Advisors: Designate your home institution's Study Abroad Advisor and Financial Aid Advisor.",
            "STEP 6 — Submit Online: Submit application before the student deadline (1 October 2026, 11:59 PM PT).",
            "STEP 7 — Advisor Certifications: Ensure both advisors submit official online certifications before 8 October 2026.",
            "STEP 8 — Selection & Follow-On Project: Selection panels review applications; awardees complete a follow-on service project upon return."
        ],
        "restrictions": [
            "CRITICAL: Foreign international students and Pakistani citizens studying abroad are strictly INELIGIBLE",
            "Only U.S. citizens or U.S. nationals qualify",
            "Does NOT fund a full degree program; only funds short-term credit-bearing study/internship abroad",
            "Destinations with U.S. State Department Travel Advisory Level 3 or 4 are ineligible",
            "Selected scholars must complete a mandatory Follow-On Service Project in their home campus or community"
        ],
        "logoText": "Gilman",
        "logoBg": "from-blue-600 to-amber-800",
        "eligibleNationalities": "U.S. Citizens and U.S. Nationals ONLY (Foreign international students ineligible)",
        "gpaRequirement": "No minimum GPA requirement (academic preparedness considered holistically)",
        "ieltsRequirement": "Not applicable (for enrolled U.S. college undergraduates)",
        "isEligibleForPakistan": False,
        "warningNotice": "⚠️ U.S. STUDENTS ONLY — NOT FOR INTERNATIONAL STUDENTS. The Gilman Scholarship is a U.S. government grant designed to help American undergraduate Pell Grant recipients study abroad. Foreign students cannot apply.",
        "currentStatus": "Fall 2026 Application Open (Deadline: 1 October 2026)",
        "currentCycle": "Fall 2026 / Spring 2027 Cycle",
        "lastVerifiedDate": "3 September 2026",
        "fullSections": [
            get_pillar_1("Benjamin A. Gilman International Scholarship", "U.S. Department of State / IIE", "United States (For Study Abroad)", "Undergraduate Study Abroad / Internships", "Direct Online + U.S. Campus Advisor Certifications", "NO (Foreign international students / Pakistani citizens are strictly ineligible)", "Term / Semester / Summer / Academic Year", "Fall 2026 Cycle Open (Deadline: 1 October 2026)"),
            get_pillar_2("Partial Study Abroad Grant", "Funding can be applied toward study abroad tuition, room and board, books, local transportation, airfare, and insurance", "Base award: Up to $5,000 (determined by financial need and program costs)", "International airfare can be funded from the grant allocation", "Accommodation can be paid using grant funds", "Accident and sickness coverage during overseas program", "Critical Need Language Award (up to $3,000 additional) + STEM Supplemental Award (up to $1,000 additional); total max: $9,000"),
            get_pillar_3([
                "CITIZENSHIP RESTRICTION (DEAL-BREAKER): Must be a citizen or national of the United States. Foreign nationals and international students are ineligible.",
                "Pell Grant Requirement: Must be receiving a Federal Pell Grant during the term of application or study abroad period.",
                "Academic standing: Must be an undergraduate student in good standing at an accredited U.S. two-year or four-year institution.",
                "Program type: Credit-bearing study abroad or international internship program (does NOT fund entire degree abroad).",
                "Travel advisory: Host country must have an overall Travel Advisory Level 1 or 2 from the U.S. Department of State.",
                "Follow-on project: Mandatory service project required to promote international education upon return to the U.S."
            ]),
            get_pillar_4([
                "Language requirement: Dependent on the overseas host program.",
                "Critical Need Languages: Bonus funding available for studying critical languages including Arabic, Chinese, Japanese, Korean, Russian, Turkish, and Urdu.",
                "Standardized testing: No SAT, ACT, GRE, or GMAT required for the scholarship."
            ]),
            get_pillar_5([
                "U.S. Undergraduate Application Flow (Applicant -> Online Form -> Advisor Certifications -> Selection -> Award):",
                "1. Confirm U.S. citizenship, undergraduate enrollment, and Pell Grant receipt.",
                "2. Choose eligible credit-bearing overseas study abroad or internship program.",
                "3. Complete online application and compose four short essays.",
                "4. Upload official/unofficial undergraduate transcripts.",
                "5. Select home institution Study Abroad Advisor and Financial Aid Advisor.",
                "6. Submit before student deadline: 1 October 2026, 11:59 PM PT.",
                "7. Ensure both advisors submit certifications by 8 October 2026.",
                "8. Independent selection panels review applications; State Department approves awards."
            ]),
            get_pillar_6([
                "Completed online Gilman application form",
                "Undergraduate academic transcript(s) showing current enrollment",
                "Four required short essays (Statement of Purpose, Community Impact, Follow-On Project)",
                "Verification of Federal Pell Grant receipt",
                "Official certification from home institution Study Abroad Advisor",
                "Official certification from home institution Financial Aid Advisor",
                "Optional supplemental essays for Critical Need Language or STEM awards"
            ]),
            get_pillar_7("Fall 2026 Application Cycle", [
                "Application opened: Mid-August 2026",
                "Student deadline: 1 October 2026, 11:59 PM Pacific Time",
                "Advisor certification deadline: 8 October 2026",
                "Award notifications: December 2026",
                "Eligible program start dates: 1 December 2026 – 31 October 2027",
                "Current status: Open for eligible U.S. undergraduates"
            ], [
                "https://www.gilmanscholarship.org"
            ])
        ]
    },

    # 4. Study in Canada Scholarships (SICS)
    {
        "id": "gov-sics-canada",
        "programTitle": "Study in Canada Scholarships (SICS)",
        "sponsorGovernment": "Global Affairs Canada (GAC), Government of Canada",
        "country": "Canada",
        "flag": "🇨🇦",
        "degreeLevels": ["Short-Term Exchange / Research"],
        "stipendMonthly": "CAD $10,200 (4 Months) | CAD $14,000 (5–6 Months Graduate)",
        "airfareCovered": True,
        "healthInsuranceCovered": True,
        "tuitionCovered": True,
        "deadline": "31 March 2026 (Canadian Institution Deadline; 2026–27 Closed)",
        "bondRequirement": "Must return to home institution to complete degree",
        "description": "Short-term study and research exchange scholarship for international students from 20 designated countries enrolled in home institutions. Tuition waived by Canadian host; CAD $10,200–$14,000 provided for living and travel.",
        "keyEligibility": [
            "Short-term exchange/mobility ONLY (4–6 months); does NOT fund a full degree in Canada",
            "Students remain enrolled at their home institution and transfer credits back",
            "Eligible countries (20 nations): Bangladesh, Nepal, Taiwan, Türkiye, Ukraine, Algeria, Egypt, Jordan, Morocco, Tunisia, Burkina Faso, Ethiopia, Ghana, Côte d'Ivoire, Kenya, Nigeria, Rwanda, Senegal, Tanzania, Uganda",
            "PAKISTAN STATUS: Pakistan is NOT on the current 2026–27 eligible-country list",
            "Application Route: Canadian post-secondary institution submits scholarship nomination to Global Affairs Canada (students cannot apply directly)",
            "Award values: CAD $10,200 for 4-month college/undergraduate/graduate mobility; CAD $14,000 for 5–6 month graduate mobility"
        ],
        "supabaseDbId": 238,
        "overviewLong": "The Study in Canada Scholarships (SICS) program is funded by Global Affairs Canada (GAC) through EduCanada. The programme supports short-term international student mobility and research exchanges (4 to 6 months) at Canadian colleges and universities. SICS is not a full-degree scholarship; recipients remain enrolled at their home institution while undertaking credit-bearing courses or research in Canada. Canadian host institutions waive tuition and receive grant funds (CAD $10,200 to $14,000) to disburse for the student's airfare, living expenses, health insurance, and study permit fees. SICS operates through institutional nominations from 20 designated partner countries; Pakistan is currently not included.",
        "fundingType": "Short-Term Exchange Mobility Grant",
        "workExperienceRequired": "None required",
        "ageLimit": "None",
        "hecNominationRequired": False,
        "embassyNominationRequired": False,
        "applicationRoute": "Canadian Host Institution Nomination to Global Affairs Canada (No Direct Student Portal)",
        "officialSources": [
            "EduCanada - Study in Canada Scholarships (educanada.ca)",
            "Global Affairs Canada (GAC)"
        ],
        "stepByStepProcess": [
            "STEP 1 — Check Eligible Country: Verify citizenship of one of the 20 eligible countries (Pakistan is not eligible).",
            "STEP 2 — Home Institution Exchange Office: Contact international/exchange office at eligible home university.",
            "STEP 3 — Canadian Partner Identification: Identify Canadian college or university with an approved exchange agreement.",
            "STEP 4 — Institutional Application: Apply through home and Canadian partner institutions.",
            "STEP 5 — GAC Nomination Submission: Canadian host institution submits the scholarship dossier to Global Affairs Canada before 31 March.",
            "STEP 6 — Results & Study Permit: Results announced in May; Canadian institution issues scholarship letter; student obtains study/work permit.",
            "STEP 7 — Mobility in Canada: Complete 4–6 month exchange/research stay and return to home institution."
        ],
        "restrictions": [
            "Pakistan is NOT on the current 2026–27 eligible-country list",
            "Does NOT fund a full degree program in Canada; exclusively for 4–6 month exchange/research stays",
            "Students already enrolled in a Canadian post-secondary institution are ineligible",
            "Individuals holding or applying for Canadian permanent residence or citizenship are ineligible",
            "Students must return to their home institution upon completion of the exchange"
        ],
        "logoText": "SICS",
        "logoBg": "from-red-700 to-slate-900",
        "eligibleNationalities": "20 designated countries (Bangladesh, Nepal, Taiwan, Türkiye, Ukraine, Egypt, Morocco, Nigeria, Kenya, etc.)",
        "gpaRequirement": "Set by participating home and Canadian institutions",
        "ieltsRequirement": "Set by host Canadian institution (no universal central cutoff)",
        "isEligibleForPakistan": False,
        "warningNotice": "⚠️ Pakistan is NOT on the current 2026–27 eligible-country list. SICS is a short-term exchange scholarship for students from 20 designated partner nations; it does NOT fund a full degree.",
        "currentStatus": "2026–27 Cycle Closed (2027–28 Call Not Yet Published)",
        "currentCycle": "2026/2027 Academic Year",
        "lastVerifiedDate": "3 September 2026",
        "fullSections": [
            get_pillar_1("Study in Canada Scholarships (SICS)", "Global Affairs Canada (GAC) / EduCanada", "Canada", "College, Undergraduate, Master's, PhD (Short-Term Mobility)", "Institutional Nomination (Home Institution -> Canadian Partner -> GAC)", "NO (Pakistan is not on the current 2026–27 eligible-country list)", "4 months (CAD $10,200) or 5–6 months graduate (CAD $14,000)", "2026–27 Cycle Closed"),
            get_pillar_2("Comprehensive Short-Term Mobility Grant", "Tuition waived by host Canadian post-secondary institution (student pays home institution)", "Fixed programme award: CAD $10,200 for 4 months; CAD $14,000 for 5–6 months graduate mobility", "Economy class international return airfare eligible expense under grant", "Accommodation and living expenses funded from scholarship grant", "Mandatory health insurance covered through grant allocation", "Visa / study permit fees and book/supplies expenses eligible"),
            get_pillar_3([
                "Country restriction: Limited to citizens of 20 designated countries/territories. Pakistan is NOT eligible.",
                "Non-degree mobility: Exclusively for short-term study or research exchanges (4–6 months); does NOT award a Canadian degree.",
                "Full-time enrollment: Must be enrolled full-time at a recognized post-secondary institution in an eligible country.",
                "No direct student application: Canadian institutions identify candidates and submit applications to GAC.",
                "Exclusions: Persons holding or applying for Canadian citizenship or permanent residence are ineligible.",
                "Return obligation: Must return to home institution to complete degree after exchange."
            ]),
            get_pillar_4([
                "Language requirements: Determined by host Canadian institution (English or French).",
                "Central scores: No universal IELTS or TOEFL cutoff specified by Global Affairs Canada."
            ]),
            get_pillar_5([
                "Institutional Application Flow (Student -> Home Institution -> Canadian Host -> GAC -> Award):",
                "1. Confirm home institution has partnership with Canadian university/college.",
                "2. Student applies through home institution exchange office.",
                "3. Canadian host institution selects candidate.",
                "4. Canadian institution submits scholarship application to Global Affairs Canada before 31 March.",
                "5. GAC evaluates institutional projects and announces results in May.",
                "6. Canadian institution issues scholarship letter and disburses funds to student.",
                "7. Student completes exchange and returns to home university."
            ]),
            get_pillar_6([
                "Signed and dated Privacy Notice Statement (PNS) for scholarship submission",
                "Proof of citizenship (passport or national identity card from eligible country)",
                "Proof of full-time enrollment at home post-secondary institution",
                "Official academic transcripts",
                "Exchange study plan or research proposal (with Canadian supervisor info for research)",
                "Letter of intent / motivation statement",
                "Institutional agreement / exchange documentation between partner universities"
            ]),
            get_pillar_7("2026/2027 Cycle", [
                "Competition opened: January 2026",
                "Canadian institution deadline: 31 March 2026",
                "Results announced to institutions: May 2026",
                "Project completion deadline: 30 September 2027",
                "Current status: 2026–27 closed; 2027–28 call pending"
            ], [
                "https://www.educanada.ca"
            ])
        ]
    },

    # 5. BCDI 2030 Canada
    {
        "id": "gov-bcdi-2030-canada",
        "programTitle": "Canadian International Development Scholarships 2030 (BCDI 2030)",
        "sponsorGovernment": "Global Affairs Canada, Government of Canada",
        "country": "Canada",
        "flag": "🇨🇦",
        "degreeLevels": ["Undergraduate", "Masters", "PhD", "Technical / Vocational"],
        "stipendMonthly": "Project-Specific Comprehensive Funding (Managed by Lead Canadian HEI)",
        "airfareCovered": True,
        "healthInsuranceCovered": True,
        "tuitionCovered": True,
        "deadline": "Project-Specific Deadlines (8-Year Program: 2022–2030)",
        "bondRequirement": "Must return to partner country to support institutional development",
        "description": "An eight-year CAD $80 million Canadian government program implemented by CICan and Universities Canada across 26 partner countries. Targets more than 7,000 beneficiaries with 51% female participation in STEM, Climate, and AI.",
        "keyEligibility": [
            "Open exclusively to citizens of 26 designated partner countries (predominantly Francophone & Sub-Saharan Africa and Haiti)",
            "PAKISTAN STATUS: Pakistan is NOT one of the 26 BCDI 2030 partner countries",
            "Project-Specific Model: Individuals cannot apply directly to BCDI 2030; scholarships exist through approved institutional partnerships between Canadian and partner-country HEIs",
            "Levels: Higher education, technical/vocational training, undergraduate, graduate, and research stays up to 4 years",
            "Priority fields: STEM, Artificial Intelligence, Green/Blue Economy, Climate Action, Health Sciences, and Governance",
            "Funding is project-dependent: Covers tuition, living allowance, travel, health insurance, books, and equipment"
        ],
        "supabaseDbId": 239,
        "overviewLong": "The Canadian International Development Scholarships 2030 (BCDI 2030) is an eight-year, CAD $80 million initiative funded by Global Affairs Canada and co-administered by Colleges and Institutes Canada (CICan) and Universities Canada (UnivCan). BCDI 2030 aims to strengthen social and economic development in 26 eligible developing countries by training over 7,000 individuals, with a mandatory minimum of 51% female participation. In September 2026, 25 new scholarship projects funded with CAD $13.3 million were launched across 59 institutions in 19 countries. Scholarships are awarded through project-specific partnerships rather than a centralized individual scholarship portal. Pakistan is not an eligible country.",
        "fundingType": "Project-Specific Development Funding",
        "workExperienceRequired": "Project-dependent (faculty, researchers, or practitioners targeted in specific projects)",
        "ageLimit": "Project-specific",
        "hecNominationRequired": False,
        "embassyNominationRequired": False,
        "applicationRoute": "Partner-Country Institution / Approved Project Partnership (No Direct Central Portal)",
        "officialSources": [
            "BCDI 2030 Official Portal (bcdi2030.ca)",
            "Colleges and Institutes Canada (CICan)",
            "Universities Canada (UnivCan)",
            "Global Affairs Canada"
        ],
        "stepByStepProcess": [
            "STEP 1 — Check Country: Confirm citizenship of one of the 26 eligible countries (Pakistan is not eligible).",
            "STEP 2 — Identify Active Project: Locate an active BCDI 2030 Stream 1 project involving your home institution.",
            "STEP 3 — Review Project Criteria: Review degree level (vocational, UG, Master's, PhD) and field prerequisites.",
            "STEP 4 — Submit Institutional Application: Apply through the designated partner-country institution.",
            "STEP 5 — Institutional Selection: Joint committee of Canadian and partner institutions conducts selection.",
            "STEP 6 — Project Confirmation: Successful scholars receive project funding guarantee and immigration facilitation.",
            "STEP 7 — Study in Canada: Complete study/training in Canada (up to 4 years) and return to home country."
        ],
        "restrictions": [
            "Pakistan is NOT an eligible country under BCDI 2030",
            "Individuals cannot apply directly to Global Affairs Canada or BCDI 2030 centrally",
            "Must be affiliated with a participating partner-country institution operating an active project",
            "Must return to partner country upon completion to apply gained skills"
        ],
        "logoText": "BCDI",
        "logoBg": "from-red-800 to-indigo-950",
        "eligibleNationalities": "26 designated countries (Benin, Cameroon, DR Congo, Egypt, Ghana, Haiti, Kenya, Morocco, Senegal, South Africa, etc.)",
        "gpaRequirement": "Project-specific academic criteria set by Canadian host institution",
        "ieltsRequirement": "Language of instruction (English or French) determined by host Canadian institution",
        "isEligibleForPakistan": False,
        "warningNotice": "⚠️ Pakistan is NOT among the 26 BCDI 2030 eligible countries. BCDI 2030 is delivered through institutional consortia projects in 26 partner developing nations.",
        "currentStatus": "Active 8-Year Program (2022–2030; 25 New Projects Launched Sept 2026)",
        "currentCycle": "2022–2030 Program Period",
        "lastVerifiedDate": "3 September 2026",
        "fullSections": [
            get_pillar_1("Canadian International Development Scholarships 2030 (BCDI 2030)", "Global Affairs Canada / CICan & Universities Canada", "Canada", "Technical/Vocational, Undergraduate, Master's, PhD, Research", "Partner-Country Institutional Project Partnership (No Central Portal)", "NO (Pakistan is not one of the 26 BCDI 2030 eligible countries)", "Project dependent (Up to 4 years)", "Active 2022–2030 Framework (CAD $80M Program)"),
            get_pillar_2("Project-Specific Comprehensive Funding", "Tuition and mandatory student fees covered according to approved project budget", "Living allowance provided to scholars based on host Canadian institution project terms", "Economy class international return airfare included under individual projects", "Accommodation arranged by Canadian host institution or funded through living allowance", "Health insurance provided under Canadian international student arrangements", "Winter clothing allowance, books, computer equipment, and visa support where budgeted"),
            get_pillar_3([
                "Country restriction: Limited strictly to 26 designated partner countries (predominantly in Africa and Haiti). Pakistan is NOT eligible.",
                "No direct individual application: Individuals cannot apply directly to BCDI 2030; opportunities operate via institutional partnerships.",
                "Female participation target: Minimum 51% of scholarship beneficiaries must be women.",
                "Priority disciplines: STEM, AI, climate action, green/blue economy, and governance.",
                "Duration: Study projects in Canada range from short-term mobility up to 4 years full degree.",
                "Return commitment: Designed around development impact in the scholar's home country."
            ]),
            get_pillar_4([
                "Language of instruction: English or French depending on the participating Canadian institution.",
                "Language requirements: Determined by host Canadian institution; no universal central testing standard."
            ]),
            get_pillar_5([
                "Consortium Project Workflow (Partner HEI + Canadian HEI -> Selection -> Visa -> Study):",
                "1. Confirm home institution is an approved BCDI 2030 project partner.",
                "2. Check active call for applications published by home/partner institution.",
                "3. Submit application dossier to institutional project coordinator.",
                "4. Joint academic selection committee reviews applications against gender-equity and academic criteria.",
                "5. Selected scholars receive institutional scholarship letters.",
                "6. Canadian institutions and Canadian missions assist with study permit procedures.",
                "7. Scholar completes studies in Canada and returns home."
            ]),
            get_pillar_6([
                "Project-specific application forms",
                "Proof of citizenship of one of the 26 eligible partner nations",
                "Official academic transcripts and degree certificates",
                "Curriculum Vitae / Professional resume",
                "Motivation statement demonstrating contribution to home country development",
                "Proof of language proficiency (English or French)",
                "Letter of support / nomination from home employer or academic department"
            ]),
            get_pillar_7("2022–2030 Program Framework", [
                "Programme period: 2022 to 2030",
                "Recent major update: 1 September 2026 (25 new projects funded with CAD $13.3M announced)",
                "Application deadlines: Specific to each approved project",
                "Target beneficiaries: More than 7,000 individuals over 8 years",
                "Current status: Active framework; individual project competitions open periodically"
            ], [
                "https://bcdi2030.ca"
            ])
        ]
    },

    # 6. Mexican Government Scholarship
    {
        "id": "gov-mexican-government",
        "programTitle": "Mexican Government Scholarship for International Students (Becas de Excelencia)",
        "sponsorGovernment": "Secretaría de Relaciones Exteriores (SRE) / AMEXCID, Mexico",
        "country": "Mexico",
        "flag": "🇲🇽",
        "degreeLevels": ["Masters", "PhD", "Mobility / Postdoctoral"],
        "stipendMonthly": "MXN $14,264.88 (Master's) | MXN $17,831.10 (PhD & Postdoc) / month",
        "airfareCovered": True,
        "healthInsuranceCovered": True,
        "tuitionCovered": True,
        "deadline": "22 June 2026, 15:00 Central Mexico Time (2026 Cycle Closed)",
        "bondRequirement": "Must complete academic activity and return to home country",
        "description": "Mexico's official merit scholarship for foreign students and researchers across 90 participating Mexican universities. Provides tuition coverage, monthly stipends (4x/5x UMA), return flights, and visa fee exemption. Instruction is primarily in Spanish.",
        "keyEligibility": [
            "Open to foreign nationals from 170+ countries (Pakistan historically eligible; verify against Annex 5)",
            "Level: Master's (up to 24 months), Doctoral research, Postdoctoral stays, and Bachelor's/Master's mobility (NOT a 4-year Bachelor's scholarship)",
            "University admission FIRST: Must independently secure admission/acceptance from an eligible Mexican institution registered in the national postgraduate system",
            "Language: Primarily conducted in Spanish (applicants must demonstrate Spanish proficiency)",
            "Academic excellence: Minimum academic average equivalent to 85/100 (or equivalent GPA) in previous degree",
            "Direct online application via SIGCA (Sistema de Gestión de Cooperación Académica); all forms completed in Spanish"
        ],
        "supabaseDbId": 240,
        "overviewLong": "The Mexican Government Scholarship for International Students (Becas de Excelencia del Gobierno de México para Extranjeros) is administered by the Mexican Agency for International Development Cooperation (AMEXCID) under the Ministry of Foreign Affairs (SRE). Offered to citizens of over 170 countries, the scholarship supports Master's degrees (up to 24 months), doctoral research stays, postdoctoral research, and academic mobility at 90 accredited Mexican higher education institutions. Candidates must independently secure admission to an approved Mexican institution before applying online through the SIGCA portal in Spanish. The scholarship covers registration and tuition fees, monthly stipends (MXN $14,264.88 for Master's, MXN $17,831.10 for PhD), international return airfare, IMSS health insurance from the 7th month, and visa fee exemptions.",
        "fundingType": "Government Merit Scholarship",
        "workExperienceRequired": "None required for Master's; research profile required for PhD/Postdoc",
        "ageLimit": "Must be over 18 years old (no universal upper age limit in current 2026 call)",
        "hecNominationRequired": False,
        "embassyNominationRequired": False,
        "applicationRoute": "University Admission First -> Direct Online Application via SIGCA Portal",
        "officialSources": [
            "Agencia Mexicana de Cooperación Internacional para el Desarrollo (AMEXCID: gob.mx/amexcid)",
            "Secretaría de Relaciones Exteriores (SRE)",
            "SIGCA Application Portal"
        ],
        "stepByStepProcess": [
            "STEP 1 — Check Country Eligibility: Verify your country in AMEXCID's Annex 5 eligible-country list.",
            "STEP 2 — Browse Academic Catalogue: Review 90 participating Mexican institutions and eligible postgraduate programmes.",
            "STEP 3 — Apply to Mexican University: Apply directly to the Mexican university and obtain a formal acceptance letter.",
            "STEP 4 — Register in SIGCA: Create an account on the SIGCA online system (sigca.sre.gob.mx).",
            "STEP 5 — Complete Application in Spanish: Fill out all application forms and annexes in Spanish.",
            "STEP 6 — Upload Documents: Upload transcripts, degree certificate, acceptance letter, Spanish proficiency, CV, and Carta Declaratoria.",
            "STEP 7 — Submit before Deadline: Submit electronically through SIGCA before the June deadline.",
            "STEP 8 — AMEXCID Evaluation: SRE/AMEXCID evaluates dossiers and announces results in July.",
            "STEP 9 — Visa & Travel: Exemption from Mexican visa issuance fee; complete consular interview; travel to Mexico."
        ],
        "restrictions": [
            "Does NOT fund an entire 4-year undergraduate Bachelor's degree (only short-term mobility at UG level)",
            "Applications and forms must be completed entirely in Spanish",
            "Acceptance by a Mexican university does not guarantee scholarship award",
            "IMSS Mexican social security health coverage begins from the seventh month of the scholarship"
        ],
        "logoText": "AMEXCID",
        "logoBg": "from-emerald-700 to-red-800",
        "eligibleNationalities": "Citizens of 170+ countries with diplomatic ties (including Pakistan subject to annual Annex 5 call)",
        "gpaRequirement": "Minimum academic average equivalent to 85/100 in previous qualifying degree",
        "ieltsRequirement": "No universal IELTS cutoff; Spanish language proficiency is the primary prerequisite",
        "isEligibleForPakistan": True,
        "warningNotice": "Scholarship selection and university admission are separate processes. Applicants must secure admission from an eligible Mexican university before applying via SIGCA.",
        "currentStatus": "2026 Cycle Closed (2027 Cycle Not Yet Announced)",
        "currentCycle": "2026 Academic Year",
        "lastVerifiedDate": "3 September 2026",
        "fullSections": [
            get_pillar_1("Becas de Excelencia del Gobierno de México para Extranjeros", "AMEXCID / Secretaría de Relaciones Exteriores (SRE), Mexico", "Mexico", "Master's (up to 24 mos), Doctoral Research, Postdoctoral, Mobility", "University Admission First -> Direct Online Application via SIGCA", "Historically eligible (verify against annual Annex 5 country list)", "Master's: up to 24 months; Research stays: 6–12 months", "2026 Cycle Closed (2027 Call Pending)"),
            get_pillar_2("Substantial Government Merit Funding", "Registration and tuition fees covered according to participating institution agreement", "Monthly living maintenance: MXN $14,264.88/month for Master's/mobility; MXN $17,831.10/month for PhD/postdoc", "International return economy airfare ticket provided upon successful completion", "Accommodation managed through monthly maintenance stipend", "Mexican Social Security Institute (IMSS) health coverage starting from month 7", "Exemption from Mexican visa issuance fee + domestic transport to host university outside Mexico City"),
            get_pillar_3([
                "Pre-admission requirement: Must have definitive acceptance/admission letter from a participating Mexican higher education institution.",
                "Degree level: Full Master's degrees, doctoral research, and postdoctoral stays. Does NOT fund a full 4-year Bachelor's degree.",
                "Academic threshold: Minimum academic result equivalent to 85/100 in previous degree.",
                "Language of application: Application and all supporting forms must be submitted in Spanish.",
                "Age: Must be over 18 years old at the time of application.",
                "HEC involvement: Direct application through SIGCA; no current mandatory HEC route verified for 2026."
            ]),
            get_pillar_4([
                "Spanish language proficiency: Required for non-native Spanish speakers, as academic instruction is in Spanish.",
                "English language: Some programmes may require English proficiency depending on research area.",
                "Standardized tests: No universal AMEXCID-wide SAT, GRE, or GMAT requirement."
            ]),
            get_pillar_5([
                "Application Flow (Applicant -> Mexican University -> Acceptance -> SIGCA Portal -> SRE Selection -> Visa):",
                "1. Check AMEXCID 2026 Annex 5 for country eligibility and Annex 6 for eligible institutions.",
                "2. Apply to participating Mexican university and obtain official acceptance letter.",
                "3. Create account on SIGCA portal (sigca.sre.gob.mx).",
                "4. Complete application in Spanish and attach required official formats.",
                "5. Submit online application before the annual closing deadline.",
                "6. AMEXCID / SRE selection committee reviews applications.",
                "7. Results published online; Mexican consular visa processed with fee exemption.",
                "8. Travel to Mexico and begin academic programme."
            ]),
            get_pillar_6([
                "Official passport copy (valid for full stay duration)",
                "Official university acceptance letter from eligible Mexican institution",
                "Signed Carta Declaratoria (official AMEXCID format)",
                "Curriculum Vitae (in Spanish, maximum 3 pages)",
                "Official academic certificate / degree diploma",
                "Official academic transcripts showing minimum 85/100 average",
                "Official Medical Certificate (confirming good physical/mental health)",
                "Proof of Spanish language proficiency (where native language is not Spanish)",
                "Research project outline (for doctoral and postdoctoral research stays)"
            ]),
            get_pillar_7("2026 Academic Cycle", [
                "Call announced: 21 May 2026",
                "SIGCA portal opened: 21 May 2026, 18:00 Mexico City time",
                "Application deadline: 22 June 2026, 15:00 Mexico City time",
                "Results published: 6–10 July 2026",
                "Programme start: August to before 10 November 2026",
                "Current status: 2026 closed; monitor for 2027 call"
            ], [
                "https://www.gob.mx/amexcid"
            ])
        ]
    },

    # 7. Beca Colombia
    {
        "id": "gov-beca-colombia",
        "programTitle": "Programa Beca Colombia para Extranjeros",
        "sponsorGovernment": "Instituto Colombiano de Crédito Educativo y Estudios Técnicos en el Exterior (ICETEX), Colombia",
        "country": "Colombia",
        "flag": "🇨🇴",
        "degreeLevels": ["Masters", "Specialization"],
        "stipendMonthly": "2 × Legal Minimum Wages (2 SMMLV) / month (approx. COP 2.6M+)",
        "airfareCovered": False,
        "healthInsuranceCovered": True,
        "tuitionCovered": True,
        "deadline": "5 June 2026, 5:00 PM Colombia Time (2026-2 Cycle Closed)",
        "bondRequirement": "Must return to home country upon graduation to apply acquired knowledge",
        "description": "Colombia's government scholarship program offering up to 70 grants for Master's, Specialization, and 6-month Spanish preparation. Covers 100% tuition, monthly living allowance (2 SMMLV), Courtesy Visa Type V, and foreigner ID support.",
        "keyEligibility": [
            "Foreign citizens aged older than 18 and younger than 50 years old at application deadline",
            "University admission FIRST: Must possess definitive unconditional admission to 1–3 eligible Colombian programmes in the official catalogue",
            "Minimum undergraduate GPA equivalent to 4.0 / 5.0 (from Bachelor's degree)",
            "Professional experience: Minimum 12 months of documented post-degree professional work experience directly related to postgraduate program",
            "Language: Spanish (a 6-month preparatory Spanish course is available for admitted non-Spanish speakers)",
            "Coverage: 100% tuition waiver + monthly living stipend (2 SMMLV) + health insurance + Courtesy Visa Type V + COP 250,000 foreigner ID grant"
        ],
        "supabaseDbId": 241,
        "overviewLong": "The Programa Beca Colombia para Extranjeros is operated by ICETEX (Instituto Colombiano de Crédito Educativo y Estudios Técnicos en el Exterior) under the Programa de Reciprocidad para Extranjeros en Colombia. The scholarship awards up to 70 non-repayable grants annually for foreign citizens pursuing postgraduate studies (Specialization for up to 12 months or Master's for up to 24 months) at participating Colombian universities. A Spanish-language pathway of up to 6 months is offered for non-Spanish speakers with final admission. Applicants must hold an undergraduate GPA of at least 4.0/5.0 and at least 12 months of relevant post-degree work experience. The scholarship covers 100% of tuition, monthly maintenance equal to two statutory minimum wages (2 SMMLV), medical coverage, and Colombian Courtesy Visa Type V assistance.",
        "fundingType": "Highly Funded Postgraduate Scholarship",
        "workExperienceRequired": "At least 12 months relevant post-degree professional experience",
        "ageLimit": "Older than 18 and younger than 50 years old at deadline",
        "hecNominationRequired": False,
        "embassyNominationRequired": False,
        "applicationRoute": "Colombian University Admission First -> Direct Online Application via ICETEX Portal",
        "officialSources": [
            "ICETEX Official Portal (icetex.gov.co)",
            "Programa de Reciprocidad para Extranjeros en Colombia",
            "Catálogo de Oferta Académica ICETEX"
        ],
        "stepByStepProcess": [
            "STEP 1 — Check Eligibility: Confirm age (18–50), foreign nationality, 4.0/5.0 undergraduate GPA, and 12 months work experience.",
            "STEP 2 — Browse Academic Catalogue: Review official Catálogo de Oferta Académica for eligible Master's/Specialization programs.",
            "STEP 3 — Apply to Colombian University: Obtain a definitive unconditional admission letter from the host university.",
            "STEP 4 — Create ICETEX Application: Register on the ICETEX online platform and select up to 3 ranked programmes.",
            "STEP 5 — Upload Documents: Submit degree diploma, transcripts with grading scale, work certificates, medical certificate, and essays.",
            "STEP 6 — Submit Online: Complete submission before the deadline (5 June 2026, 5:00 PM Colombia time).",
            "STEP 7 — ICETEX Evaluation: International Portfolio Committee scores applications based on GPA (35%), experience (30%), and geography (20%).",
            "STEP 8 — Results & Visa: Receive scholarship award; obtain Colombian Courtesy Visa Type V; travel to Colombia."
        ],
        "restrictions": [
            "Colombian citizens and dual Colombian nationals are strictly ineligible",
            "Must not have resided in Colombia during the 6 months prior to application or already started studies in Colombia",
            "PhD degrees are NOT offered under the current Beca Colombia call (only Specialization and Master's)",
            "International airfare and free accommodation are NOT provided in the scholarship package",
            "Pakistan receives 0/15 reciprocity points (reciprocity points reserved for countries with reciprocal agreements)"
        ],
        "logoText": "ICETEX",
        "logoBg": "from-amber-600 to-red-900",
        "eligibleNationalities": "Foreign citizens globally (including Pakistan; subject to 100-point scoring criteria)",
        "gpaRequirement": "Minimum cumulative undergraduate GPA equivalent to 4.0 / 5.0",
        "ieltsRequirement": "Spanish proficiency required for degree study; 6-month preparatory Spanish course available",
        "isEligibleForPakistan": True,
        "warningNotice": "University admission is REQUIRED before applying. Applicants must already hold a definitive admission letter from an eligible Colombian university from the official catalogue.",
        "currentStatus": "2026-2 Cycle Closed (2027 Cycle Not Yet Published)",
        "currentCycle": "2026-2 Call",
        "lastVerifiedDate": "3 September 2026",
        "fullSections": [
            get_pillar_1("Programa Beca Colombia para Extranjeros", "ICETEX, Government of Colombia", "Colombia", "Specialization (12 mos) and Master's (24 mos) + 6-mo Spanish Prep", "University Admission First -> Direct ICETEX Online Application", "Potentially eligible as foreign citizens (0/15 reciprocity points under scoring table)", "Specialization: up to 12 months; Master's: up to 24 months", "2026-2 Cycle (Up to 70 Scholarships)"),
            get_pillar_2("Highly Funded Postgraduate Scholarship", "100% tuition coverage for programmes in the official academic catalogue", "Monthly living maintenance equal to 2 Colombian legal monthly minimum wages (2 SMMLV/month; paid quarterly in arrears)", "International airfare is NOT covered under the current Beca Colombia call", "Accommodation not separately provided (managed from monthly maintenance allowance)", "Health insurance and medical/hospital assistance support during study in Colombia", "Support for Colombian Courtesy Visa Type V + COP $250,000 one-time foreigner ID (Cédula de Extranjería) grant"),
            get_pillar_3([
                "Pre-admission mandatory: Must possess a definitive unconditional admission letter to 1–3 eligible Colombian programmes from the official catalogue.",
                "Minimum GPA: Minimum cumulative undergraduate GPA equivalent to 4.0 / 5.0 (postgraduate GPA cannot be used).",
                "Professional work experience: Minimum 12 months of documented post-degree professional work experience directly related to the master's programme.",
                "Age limit: Must be older than 18 and younger than 50 years old at the application deadline.",
                "Exclusions: Colombian nationals, dual Colombian citizens, and persons residing in Colombia during the previous 6 months are ineligible.",
                "Degree level: Specialization and Master's ONLY. PhD degrees are NOT offered under current call."
            ]),
            get_pillar_4([
                "Primary language: Coursework is conducted in Spanish.",
                "Spanish course: Admitted non-Spanish speakers can receive up to 6 months of preparatory Spanish language training before degree study.",
                "Documents language: Documents in Spanish, English, French, or Portuguese accepted; others require official translation.",
                "Standardized tests: GRE / GMAT not required by ICETEX."
            ]),
            get_pillar_5([
                "Application Flow (Applicant -> Colombian University -> Admission -> ICETEX Portal -> Evaluation -> Visa):",
                "1. Check ICETEX Catálogo de Oferta Académica 2026-2.",
                "2. Apply directly to participating Colombian universities and obtain definitive admission letter.",
                "3. Register on the ICETEX online platform and select up to 3 ranked programmes.",
                "4. Fill out the motivation/prioritization statement online.",
                "5. Upload required certified academic, work experience, and medical documents.",
                "6. Submit application before the deadline (5 June 2026, 5:00 PM Colombia time).",
                "7. ICETEX Portfolio Committee evaluates candidates on a 100-point scale.",
                "8. Results published; receive Courtesy Visa Type V support letter; arrive in Colombia."
            ]),
            get_pillar_6([
                "Definitive admission letter from participating Colombian university",
                "Certified copy of Bachelor's/professional degree diploma",
                "Undergraduate transcript showing cumulative weighted average and grading scale",
                "Professional experience certificate(s) verifying at least 12 months of related work",
                "Motivation / Prioritization Statement (completed on ICETEX platform)",
                "Official Medical Certificate (issued within 30 days of deadline)",
                "Copy of valid international passport (minimum 1 year validity)",
                "Official translations into Spanish or English for documents in other languages"
            ]),
            get_pillar_7("2026-2 Application Cycle", [
                "Call opened: 25 March 2026",
                "Application deadline: 5 June 2026, 5:00 PM Colombia time",
                "Evaluation period: 6–17 June 2026",
                "Results announced: 18 June 2026",
                "Scholarship acceptance: 20–21 June 2026",
                "Classes start: Second semester 2026 in Colombia",
                "Current status: 2026-2 closed; 2027 call pending announcement"
            ], [
                "https://web.icetex.gov.co/becas/beca-colombia-extranjeros"
            ])
        ]
    }
]

print(f"Total Americas scholarships prepared: {len(americas_scholarships)}")

for i, sch in enumerate(americas_scholarships, 1):
    num_sections = len(sch.get('fullSections', []))
    print(f"{i}. {sch['id']} ({sch['programTitle']}) -> {num_sections} sections")
    assert num_sections == 7, f"Error: {sch['id']} does not have 7 sections!"

ts_code = "import { GovernmentTrackItem } from './scholarshipTracksData';\n\n"
ts_code += "export const AMERICAS_GOVERNMENT_SCHOLARSHIPS: GovernmentTrackItem[] = "
ts_code += json.dumps(americas_scholarships, indent=2, ensure_ascii=False)
ts_code += ";\n"

with open('/app/applet/src/data/americasGovernmentScholarshipsData.ts', 'w', encoding='utf-8') as f:
    f.write(ts_code)

print("SUCCESS: Written /app/applet/src/data/americasGovernmentScholarshipsData.ts")
