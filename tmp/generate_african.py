import json

data = [
    {
        "id": "gov-egypt-egyaid",
        "programTitle": "Egypt Government Scholarships / EGYAID",
        "sponsorGovernment": "Egyptian Ministry of Higher Education and Scientific Research",
        "country": "Egypt",
        "flag": "🇪🇬",
        "degreeLevels": [
            "Undergraduate",
            "Masters",
            "PhD",
            "Language Study"
        ],
        "stipendMonthly": "Varies by scholarship agreement; current universal amount not verified",
        "airfareCovered": False,
        "healthInsuranceCovered": True,
        "tuitionCovered": True,
        "deadline": "31 August 2026 (2026–27 Cycle Closed; 2027–28 Not Yet Published)",
        "bondRequirement": "Subject to bilateral sovereign educational agreements and visa regulations",
        "description": "Country-specific sovereign educational framework administered by the Egyptian Ministry of Higher Education. Offers EGYAID scholarships for Bachelor's, Master's, Doctoral, and Arabic-language study at Egyptian public universities through bilateral cooperation quotas and the official Study in Egypt portal.",
        "keyEligibility": [
            "Country-Specific Framework: Not confirmed as a universal direct route; available through bilateral quotas and selective open calls",
            "Pakistan Eligibility Status: Not confirmed as a universal direct route for 2026–27; requires active bilateral allocation or specific HEC announcement",
            "Degree Levels: Bachelor's, Master's, PhD, and Arabic-language programmes at participating Egyptian public universities",
            "Important Distinction: EGYAID domestic fully funded initiative is strictly restricted to Egyptian citizens and must not be confused with international schemes",
            "Application Route: Online submission via official 'Study in Egypt' platform (admission.study-in-egypt.gov.eg) or designated bilateral nominating ministry",
            "Tuition & Stipend: Tuition exemptions and allowances vary by individual bilateral protocol; universal international stipend is not standardized"
        ],
        "supabaseDbId": 245,
        "overviewLong": "Egypt Government Scholarships operate as a country-specific sovereign academic framework rather than a single, permanently open international grant. Administered by the Egyptian Ministry of Higher Education and Scientific Research (MOHESR), the government provides higher education opportunities under bilateral agreements, diplomatic missions, and the central 'Study in Egypt' and 'EGYAID' initiatives. For international applicants, EGYAID covers undergraduate, master's, doctoral, and intensive Arabic-language study at Egyptian public universities. Crucially, access depends on annual bilateral diplomatic quotas: Pakistani applicants cannot assume universal direct eligibility unless a formal government quota or HEC nomination call is officially gazetted. Furthermore, official Egyptian domestic welfare scholarships must be distinguished from international bilateral awards, as benefit packages (tuition waivers, monthly stipends, and housing) vary strictly according to the bilateral treaty governing each beneficiary country.",
        "fundingType": "Country-Specific Bilateral / Ministry Scholarship Framework",
        "workExperienceRequired": "Not universally mandated; depends on institutional course prerequisites",
        "ageLimit": "Determined by specific annual bilateral call and degree regulations",
        "hecNominationRequired": True,
        "embassyNominationRequired": True,
        "applicationRoute": "Country-Specific Bilateral Route / Study in Egypt Central Portal",
        "officialSources": [
            "Egyptian EGYAID Scholarship Platform (egyaid.mohesr.gov.eg)",
            "Study in Egypt Official Admission Portal (admission.study-in-egypt.gov.eg)",
            "Egyptian Ministry of Higher Education Scholarship Announcements (cdm.mohesr.gov.eg)"
        ],
        "stepByStepProcess": [
            "STEP 1 — Check Bilateral Call & Quota: Confirm whether your country of citizenship (e.g., Pakistan) has an active sovereign bilateral allocation announced by the local education ministry or HEC.",
            "STEP 2 — Choose Degree & Study Track: Select an approved academic program (Bachelor's, Master's, PhD, or Arabic language) across participating Egyptian public universities.",
            "STEP 3 — Register on Study in Egypt / EGYAID: Create an applicant profile on the official Study in Egypt portal (admission.study-in-egypt.gov.eg) or EGYAID system.",
            "STEP 4 — Prepare Academic Dossier: Gather attested educational diplomas, official transcripts, valid passport, medical fitness certificate, and certified Arabic or English translations.",
            "STEP 5 — Submit Online Application: Complete the digital application and upload all identity, credential, and program preference documents prior to the 31 August deadline.",
            "STEP 6 — National / Bilateral Nomination: If applying under a bilateral quota, submit parallel nomination files to the home-country authority (e.g., HEC or Ministry of Foreign Affairs).",
            "STEP 7 — Ministry Review & Placement: The Egyptian Ministry of Higher Education reviews eligibility, verifies credentials, and coordinates placement with host faculties.",
            "STEP 8 — Acceptance & Security Clearance: Successful candidates receive formal institutional admission and ministry scholarship award confirmation.",
            "STEP 9 — Visa & Arrival in Egypt: Obtain an Egyptian student visa via Egyptian diplomatic missions, arrange arrival, register at the university, and finalize residency permits."
        ],
        "restrictions": [
            "The EGYAID domestic fully funded initiative is strictly for Egyptian citizens and is legally inaccessible to foreign international applicants",
            "No universal worldwide open admission; international places are distributed through bilateral agreements and country-specific quotas",
            "Airfare, universal living stipends, and accommodation are not universally guaranteed and depend strictly on the bilateral treaty",
            "Medical, engineering, and regulated professional programs may require supplementary national accreditation clearances upon return"
        ],
        "requiresSeparateApp": True,
        "logoText": "EGY",
        "logoBg": "from-amber-700 to-red-900",
        "fullSections": [
            {
                "id": "mandate",
                "title": "SOVEREIGN MANDATE & LEGAL FOUNDATION",
                "iconName": "Building2",
                "content": "Egypt Government Scholarships represent an inter-governmental educational cooperation framework administered by the Egyptian Ministry of Higher Education and Scientific Research (MOHESR). The sovereign initiative aims to foster cultural, scientific, and diplomatic ties with friendly nations through structured bilateral quotas, diplomatic mission nominations, and centralized international recruitment under the 'Study in Egypt' and 'EGYAID' umbrellas. Unlike single, permanently open multilateral schemes, Egypt's foreign student scholarships are governed by bilateral accords signed between Cairo and foreign partner governments, determining quotas, funded seats, and eligible disciplines annually.",
                "subsections": [
                    {
                        "title": "Governance & Sponsoring Entity",
                        "bullets": [
                            "Administering Authority: Egyptian Ministry of Higher Education and Scientific Research (MOHESR).",
                            "Operational Portals: EGYAID Scholarship Portal (egyaid.mohesr.gov.eg) and Study in Egypt Admission Platform (admission.study-in-egypt.gov.eg).",
                            "Delivery Channels: Bilateral government agreements, Egyptian diplomatic missions abroad, foreign ministries of partner countries, and designated public universities.",
                            "Database Classification: Country-specific government scholarship framework; not a universal unconditional grant."
                        ]
                    },
                    {
                        "title": "Critical Separation: Domestic vs. International EGYAID",
                        "bullets": [
                            "Domestic EGYAID Program: Fully funded domestic initiative covering full tuition and living allowances, but explicitly and strictly restricted to Egyptian citizens meeting domestic social-welfare criteria.",
                            "International EGYAID Program: Distinct framework for foreign students, subject to bilateral quotas, partial or full tuition waivers, and country-specific protocols.",
                            "Strict Audit Mandate: The domestic welfare program must NEVER be advertised or merged into international applicant catalogs."
                        ]
                    }
                ]
            },
            {
                "id": "financial",
                "title": "FINANCIAL BREAKDOWN & ALLOWANCES",
                "iconName": "Banknote",
                "content": "The financial package is not uniform across all Egyptian government scholarship programs. Benefits vary depending on the governing bilateral agreement, university capacity, and the specific annual memorandum of understanding (MoU). Uni Route maintains strict data transparency by not hard-coding speculative stipend or flight values across this heterogeneous framework.",
                "subsections": [
                    {
                        "title": "Standard Potential Benefits (Bilateral-Specific)",
                        "bullets": [
                            "Tuition Benefits: Full tuition exemption or partial fee reduction at participating public universities, as defined by the bilateral protocol.",
                            "Monthly Living Stipend: Varies by scholarship agreement; a single universal stipend cannot be confirmed for all foreign nationals.",
                            "Student Accommodation: University hostel placement or housing support provided where specified in the bilateral award; otherwise self-funded.",
                            "Medical & Healthcare Support: Access to public university student healthcare facilities and campus clinics.",
                            "Airfare Provision: International round-trip travel is agreement-specific and not universally guaranteed for all participating countries."
                        ]
                    },
                    {
                        "title": "Universal Financial Status",
                        "bullets": [
                            "Official Database Value: 'Varies by scholarship agreement; current universal amount not verified.'",
                            "Non-Uniformity Warning: Applicants must inspect their country's specific bilateral call notice to verify exact monetary allowances before committing."
                        ]
                    }
                ]
            },
            {
                "id": "academic",
                "title": "ACADEMIC DISCIPLINES & DEGREE LEVELS",
                "iconName": "GraduationCap",
                "content": "The EGYAID announcement encompasses higher education degrees ranging from undergraduate foundation studies through terminal doctoral research, alongside dedicated Arabic-language preparatory tracks.",
                "subsections": [
                    {
                        "title": "Covered Degree Levels",
                        "bullets": [
                            "Bachelor's Degrees: Undergraduate academic programs across participating Egyptian public universities.",
                            "Master's Degrees: Postgraduate coursework and thesis research degrees.",
                            "Doctoral Degrees (PhD): Advanced doctoral research in recognized university faculties.",
                            "Arabic-Language Study: Specialized language immersion and academic Arabic-language tracks.",
                            "Short-Term Academic Study: Short-term non-degree research or language exchange placements."
                        ]
                    },
                    {
                        "title": "Eligible Subject Fields",
                        "bullets": [
                            "Engineering, Artificial Intelligence, and Computer Science.",
                            "Medicine, Pharmacy, Veterinary Medicine, and Nursing.",
                            "Agriculture and Applied Natural Sciences.",
                            "Humanities, Social Sciences, and International Relations.",
                            "Arabic Language, Islamic Studies, and Middle Eastern History.",
                            "Business Administration, Economics, Fine Arts, and Design."
                        ]
                    },
                    {
                        "title": "Language of Instruction",
                        "bullets": [
                            "Arabic: Principal medium for humanities, social sciences, Arabic studies, and law.",
                            "English: Widely utilized in medicine, engineering, computing, pharmacy, and select science degrees.",
                            "French: Available in select specialized Franco-Egyptian academic faculties.",
                            "Preparatory Training: Students assigned to Arabic-taught tracks may be required to complete preliminary language courses."
                        ]
                    }
                ]
            },
            {
                "id": "eligibility",
                "title": "ELIGIBILITY & EXCLUSION RULES",
                "iconName": "CheckCircle2",
                "content": "Eligibility is call-specific and depends heavily on whether the applicant's country holds an active bilateral agreement with the Egyptian Government. Foreign applicants must satisfy institutional academic entry standards and immigration clearance.",
                "subsections": [
                    {
                        "title": "Core Eligibility Criteria",
                        "bullets": [
                            "Citizenship: Must hold foreign citizenship of an eligible partner country included in the bilateral call.",
                            "Academic Background: Relevant secondary credential for Bachelor's; verified Bachelor's for Master's; recognized Master's for PhD.",
                            "Academic Standing: Must satisfy minimum grade thresholds set by host university faculties.",
                            "Medical Fitness: Clear certificate of good health and screening for communicable diseases.",
                            "Passport Validity: Possess a valid international passport covering the intended duration of study.",
                            "Exclusive Award: Cannot hold another conflicting Egyptian or foreign state grant concurrently."
                        ]
                    },
                    {
                        "title": "Pakistan-Specific Eligibility Status",
                        "bullets": [
                            "Universal Direct Route: NOT confirmed as a universal direct route under current accessible 2026–27 information.",
                            "HEC / MoFEPT Dependent: Pakistani eligibility requires an active bilateral quota formally announced and administered via HEC.",
                            "No Blind Assumptions: Pakistani applicants should not assume eligibility merely because Egypt offers scholarships to foreign students; HEC confirmation is required."
                        ]
                    }
                ]
            },
            {
                "id": "routing",
                "title": "OFFICIAL ROUTING & STEP-BY-STEP SELECTION",
                "iconName": "GitFork",
                "content": "Application pathways operate through two principal models: direct submission via the central 'Study in Egypt' platform, or formal national government nomination via the sending country's Ministry of Education/HEC.",
                "subsections": [
                    {
                        "title": "Dual Routing Models",
                        "bullets": [
                            "Route A — Sovereign Bilateral Nomination: Partner country ministry/HEC announces seats, conducts national merit ranking, and transmits nominated files to Egyptian authorities.",
                            "Route B — Direct Study in Egypt Application: Direct registration on admission.study-in-egypt.gov.eg for calls that permit direct international applicants.",
                            "Current Uni Route Classification: 'Country-specific government or bilateral route; direct application may be available for selected calls.'"
                        ]
                    },
                    {
                        "title": "Step-by-Step Selection Hierarchy",
                        "bullets": [
                            "1. Verification of Sovereign Call: Confirm whether national quotas or direct portals apply for your passport.",
                            "2. Digital Registration: Create an account on the Study in Egypt / EGYAID system.",
                            "3. Document Submission: Upload academic transcripts, degree certificates, and identity verification.",
                            "4. Ministry Screening: MOHESR reviews eligibility, quota allocations, and institutional capacity.",
                            "5. Faculty Placement: Host faculties confirm academic acceptance and enrollment quotas.",
                            "6. Visa & Residence: Awardees receive security clearance, student visas, and Egyptian residency permits."
                        ]
                    }
                ]
            },
            {
                "id": "documentation",
                "title": "DOCUMENTATION & ATTESTATION DOSSIER",
                "iconName": "FileText",
                "content": "Applicants must assemble a comprehensive academic and identity portfolio, certified by relevant national educational authorities and translated where required.",
                "subsections": [
                    {
                        "title": "Required Application Portfolio",
                        "bullets": [
                            "Valid International Passport (with at least 12 months remaining validity).",
                            "Official Educational Certificates & Diplomas (attested by sending ministry / HEC).",
                            "Complete Academic Transcripts with official grading scale explanations.",
                            "Certified Arabic or English translations of all non-Arabic credentials.",
                            "Curriculum Vitae (CV) and personal Statement of Purpose / Motivation Letter.",
                            "Detailed Research Proposal (mandatory for Doctoral/PhD candidates).",
                            "Two Academic Letters of Recommendation from university faculty.",
                            "Comprehensive Medical Examination Certificate proving freedom from contagious diseases.",
                            "Police Clearance / Certificate of Good Conduct.",
                            "Recent passport-sized photographs with white background."
                        ]
                    },
                    {
                        "title": "Post-Nomination Legalization",
                        "bullets": [
                            "Nominated students must have certificates authenticated by the Egyptian Embassy/Consulate in their home country.",
                            "Regulated professional degrees (medicine, engineering) require prior recognition clearance from national bodies (e.g. PMDC, PEC in Pakistan)."
                        ]
                    }
                ]
            },
            {
                "id": "portals",
                "title": "OFFICIAL SOVEREIGN PORTALS & VERIFICATION",
                "iconName": "ExternalLink",
                "content": "All information regarding Egypt's sovereign educational offerings must be validated through official ministerial and educational portals.",
                "subsections": [
                    {
                        "title": "Authoritative Digital Channels",
                        "bullets": [
                            "EGYAID Scholarship Platform: https://egyaid.mohesr.gov.eg/",
                            "Study in Egypt Admission Portal: https://admission.study-in-egypt.gov.eg/",
                            "Egyptian Ministry of Higher Education (MOHESR): https://cdm.mohesr.gov.eg/"
                        ]
                    },
                    {
                        "title": "Audit Summary & Timeline Note",
                        "bullets": [
                            "2026–27 EGYAID Intake Deadline: 31 August 2026 (Closed as of 3 September 2026).",
                            "2027–28 Intake Status: Not yet published or confirmed.",
                            "Recommended Database Action: Retain as country-specific, call-dependent framework; do NOT display domestic welfare awards as international grants."
                        ]
                    }
                ]
            }
        ]
    },
    {
        "id": "gov-morocco-amci",
        "programTitle": "Moroccan Government Scholarships (AMCI)",
        "sponsorGovernment": "Government of the Kingdom of Morocco through Moroccan Agency for International Cooperation (AMCI)",
        "country": "Morocco",
        "flag": "🇲🇦",
        "degreeLevels": [
            "Undergraduate",
            "Masters",
            "PhD",
            "Technical / Vocational"
        ],
        "stipendMonthly": "Country-specific allowance (Reference benchmark MAD 1,750/month in select accords; HEC verifies Pakistan rate)",
        "airfareCovered": False,
        "healthInsuranceCovered": True,
        "tuitionCovered": True,
        "deadline": "10 June 2026 (2026–27 Cycle Closed; 2027–28 Not Yet Published)",
        "bondRequirement": "Subject to sending-country (HEC) and Moroccan bilateral cooperation conditions",
        "description": "Sovereign bilateral scholarship framework administered by the Agence Marocaine de Coopération Internationale (AMCI). For Pakistan, HEC announced an official allocation of 10 fully funded/subsidized scholarship seats for 2026–27 across Moroccan public higher, technical, and vocational institutions.",
        "keyEligibility": [
            "Pakistan Eligibility: Confirmed via HEC; 10 scholarships allocated for Pakistani/AJK nationals for 2026–27",
            "Testing Requirement: Valid USAT score mandatory for Bachelor's; valid HAT score mandatory for Master's and PhD nominations",
            "Degree Levels: Undergraduate, Master's, PhD, and technical/vocational study at Moroccan public educational establishments",
            "Language of Instruction: French is the primary medium for sciences, engineering, economics, and medicine; Arabic for Islamic studies and law",
            "Preparatory Language: Selected candidates lacking French proficiency may be assigned to preliminary French training at the International Language Centre in Rabat",
            "Application Route: Strict HEC online nomination route ('Learning Opportunities Abroad') followed by AMCI institutional placement"
        ],
        "supabaseDbId": 246,
        "overviewLong": "The Moroccan Government Scholarships Programme, administered by the Agence Marocaine de Coopération Internationale (AMCI), provides sovereign study grants and academic placements for foreign students under bilateral academic cooperation treaties. For the 2026–27 academic year, the Higher Education Commission (HEC) of Pakistan officially announced a dedicated sovereign quota of 10 scholarships for Pakistani and AJK citizens across Moroccan public higher education, technical institutes, and vocational centers. Nomination is conducted on strict academic merit through HEC's standardized testing framework: USAT scores govern undergraduate selections, while HAT scores govern Master's and PhD nominations. Most Moroccan STEM, business, and medical faculties teach in French; selected scholars without sufficient French proficiency are required to undergo intensive language training at the International Language Centre in Rabat prior to university enrollment.",
        "fundingType": "Sovereign Bilateral Government Award (HEC-Nominated Quota)",
        "workExperienceRequired": "Not mandatory unless stipulated by specialized doctoral departments",
        "ageLimit": "Specified by annual HEC call and Moroccan university faculties for each degree level",
        "hecNominationRequired": True,
        "embassyNominationRequired": True,
        "applicationRoute": "HEC Online Nomination Route followed by AMCI Placement",
        "officialSources": [
            "HEC Moroccan Government Scholarships Overview (hec.gov.pk)",
            "HEC AMCI Eligibility Criteria (hec.gov.pk)",
            "HEC AMCI Application Procedure (hec.gov.pk)",
            "HEC AMCI Scholarship Coverage Information (hec.gov.pk)",
            "Moroccan Agency for International Cooperation (amci.ma)"
        ],
        "stepByStepProcess": [
            "STEP 1 — Check HEC Annual Announcement: Monitor the HEC portal for the annual AMCI quota call (e.g., 10 seats allocated for Pakistan in 2026–27).",
            "STEP 2 — Ensure Valid USAT / HAT Score: Take the relevant standardized test: USAT for Bachelor's programs, HAT for Master's and PhD programs.",
            "STEP 3 — Complete HEC Online Application: Register on the HEC scholarship portal, navigate to 'Learning Opportunities Abroad', select Morocco, and submit details before the 10 June deadline.",
            "STEP 4 — Retain Printed Application: Print and keep the submitted HEC form; do NOT mail hard copies to HEC during the initial stage.",
            "STEP 5 — HEC Merit-Based Shortlisting: HEC evaluates candidates based on academic marks and standardized test performance to produce the official Pakistan nomination list.",
            "STEP 6 — Document Verification: Nominated finalists are contacted by HEC to provide attested academic credentials, medical certificates, and police clearances.",
            "STEP 7 — Submission to AMCI & Placement: HEC transmits the official dossier to the Moroccan Agency for International Cooperation (AMCI) for university matching.",
            "STEP 8 — Language Training (If Applicable): Non-francophone awardees may be enrolled in preparatory French courses at the International Language Centre in Rabat.",
            "STEP 9 — Visa & Registration: Secure Moroccan student visa, travel to Morocco, register at the assigned institution, and obtain the Carte de Séjour (residence permit)."
        ],
        "restrictions": [
            "Applicants holding dual nationality or non-Pakistani permanent residency are strictly disqualified from the HEC Pakistan quota",
            "Initial hard copy submissions to HEC are prohibited; only candidates selected for nomination may submit physical files",
            "Professional degree applicants (Medicine, Engineering, Nursing, Law) must independently confirm recognition with PMDC, PEC, PNC, PBC, etc.",
            "AMCI scholarships are non-transferable between institutions or study disciplines without formal joint approval from AMCI and HEC",
            "The 5 July 2026 HAT/USAT test was explicitly not applicable to the 2026–27 Morocco call deadline of 10 June 2026"
        ],
        "requiresSeparateApp": True,
        "logoText": "AMCI",
        "logoBg": "from-emerald-800 to-red-950",
        "fullSections": [
            {
                "id": "mandate",
                "title": "SOVEREIGN MANDATE & LEGAL FOUNDATION",
                "iconName": "Building2",
                "content": "Moroccan Government Scholarships are delivered under the sovereign bilateral cooperation agreements of the Kingdom of Morocco, executed through the Agence Marocaine de Coopération Internationale (AMCI). The mission of AMCI is to develop South-South cooperation and strengthen academic ties by granting higher education scholarships to students from partner developing nations across Africa, Asia, and the Caribbean. For Pakistan, the program operates through formal government-to-government bilateral coordination managed locally by the Higher Education Commission (HEC).",
                "subsections": [
                    {
                        "title": "Key Sovereign Entities",
                        "bullets": [
                            "Moroccan Sponsoring Body: Government of the Kingdom of Morocco through the Moroccan Agency for International Cooperation (AMCI).",
                            "Pakistani Managing Authority: Higher Education Commission of Pakistan (HEC), Foreign Scholarships/Learning Opportunities Abroad Division.",
                            "2026–27 Pakistan Allocation: Exactly 10 scholarship seats officially announced for study in Moroccan public institutions.",
                            "Global Scope: Quotas vary by diplomatic accords (e.g., Malawi 130 seats, Saint Kitts & Nevis 30 seats, Pakistan 10 seats)."
                        ]
                    },
                    {
                        "title": "Legal & Sovereign Nature",
                        "bullets": [
                            "Direct individual applications submitted directly to AMCI by Pakistani students outside the HEC framework are not entertained.",
                            "The scholarship is a sovereign government-to-government grant with bilateral diplomatic oversight."
                        ]
                    }
                ]
            },
            {
                "id": "financial",
                "title": "FINANCIAL BREAKDOWN & ALLOWANCES",
                "iconName": "Banknote",
                "content": "The AMCI financial package is determined by individual bilateral accords and is not universally fully funded across all countries. For Pakistani scholars, HEC directs applicants to the official Moroccan bilateral dossier for specific stipend, accommodation, and allowance terms.",
                "subsections": [
                    {
                        "title": "Funding Components & Benchmarks",
                        "bullets": [
                            "Tuition & Registration: Exemption from standard public university tuition fees at assigned Moroccan educational establishments.",
                            "Monthly Living Allowance: Governed by bilateral treaty. In current AMCI accords with partner nations, standard stipend is approximately MAD 1,750 per month (specific Pakistan award verified in bilateral call).",
                            "Accommodation: Access to Moroccan university residences (cités universitaires) or student housing support subject to campus availability.",
                            "Healthcare Coverage: Student health and medical insurance support during the period of academic study in Morocco.",
                            "International Airfare: Country- and agreement-specific; travel costs must be verified in the active HEC award conditions.",
                            "Non-Covered Costs: Personal living expenses exceeding the stipend, university administrative enrolment dues, and internal transport."
                        ]
                    },
                    {
                        "title": "Official Transparency Notice",
                        "bullets": [
                            "The AMCI scholarship is not universally identical; allowances depend on the negotiated protocol between Morocco and the beneficiary state."
                        ]
                    }
                ]
            },
            {
                "id": "academic",
                "title": "ACADEMIC DISCIPLINES & DEGREE LEVELS",
                "iconName": "GraduationCap",
                "content": "The AMCI scheme encompasses higher education, technical training, and vocational education across Morocco's network of public universities and specialized institutes.",
                "subsections": [
                    {
                        "title": "Covered Study Levels",
                        "bullets": [
                            "Undergraduate / Bachelor's Degrees (Licence).",
                            "Postgraduate Master's Degrees (Master / Master Spécialisé).",
                            "Doctoral Degrees (Doctorat / PhD).",
                            "Technical and Vocational Training at accredited public institutes."
                        ]
                    },
                    {
                        "title": "Principal Academic Disciplines",
                        "bullets": [
                            "Engineering, Computer Science, and Information Technology.",
                            "Medicine, Pharmacy, Nursing, and Veterinary Medicine.",
                            "Economics, Management, Commerce, and Business Administration.",
                            "Mathematics, Physics, Chemistry, and Earth Sciences.",
                            "Agriculture, Agronomy, and Environmental Science.",
                            "Law, Political Science, Humanities, and Social Sciences.",
                            "Arabic Language, Literature, and Islamic Studies."
                        ]
                    },
                    {
                        "title": "Language Requirements & French Immersion",
                        "bullets": [
                            "Primary Language of Instruction: French is the dominant instructional medium for science, engineering, business, and medical degrees.",
                            "Arabic Programs: Applied in Arabic literature, Islamic studies, and specific legal-science faculties.",
                            "Preparatory Training: Selected awardees lacking French fluency may be required to complete preliminary French coursework at the International Language Centre in Rabat prior to faculty entry."
                        ]
                    }
                ]
            },
            {
                "id": "eligibility",
                "title": "ELIGIBILITY & EXCLUSION RULES",
                "iconName": "CheckCircle2",
                "content": "Eligibility for the Pakistani quota is governed jointly by HEC criteria and Moroccan institutional requirements.",
                "subsections": [
                    {
                        "title": "Core Eligibility Prerequisites",
                        "bullets": [
                            "Nationality: Must be a citizen and permanent resident of Pakistan or Azad Jammu & Kashmir (dual nationals ineligible).",
                            "Standardized Testing: Valid USAT score mandatory for Bachelor's nominations; valid HAT score mandatory for Master's and PhD nominations.",
                            "Educational Background: Completed intermediate/12 years for Bachelor's; 16 years for Master's; 18 years for PhD.",
                            "Minimum Academic Score: Must satisfy minimum percentage/CGPA requirements specified in the annual HEC announcement.",
                            "Medical Clearance: Must be medically fit and free from infectious diseases.",
                            "Professional Licensing Compliance: Medical and engineering applicants must ensure degree compliance with PMDC, PEC, PNC, or PCATP councils."
                        ]
                    },
                    {
                        "title": "Exclusions & Disqualifications",
                        "bullets": [
                            "Dual nationals or individuals with foreign permanent residence are ineligible.",
                            "Candidates who failed to sit for the valid HAT/USAT within the specified testing window are disqualified.",
                            "Candidates with disciplinary records or incomplete educational credentials."
                        ]
                    }
                ]
            },
            {
                "id": "routing",
                "title": "OFFICIAL ROUTING & STEP-BY-STEP SELECTION",
                "iconName": "GitFork",
                "content": "The application pathway is strictly mediated by the Higher Education Commission of Pakistan followed by AMCI institutional matching in Rabat.",
                "subsections": [
                    {
                        "title": "Application Route Classification",
                        "bullets": [
                            "Official Route: 'HEC nomination route followed by Moroccan/AMCI placement.'",
                            "Direct Student Submissions: Pakistani applicants must not send direct applications to AMCI or the Moroccan Embassy without HEC endorsement."
                        ]
                    },
                    {
                        "title": "Selection Sequence",
                        "bullets": [
                            "1. HEC Online Portal: Fill digital form under 'Learning Opportunities Abroad' and select Morocco.",
                            "2. Test Verification: Link valid USAT (Bachelor's) or HAT (Master's/PhD) roll numbers and scores.",
                            "3. HEC Merit Scoring: HEC calculates composite merit based on academic grades and test percentiles.",
                            "4. Physical Document Call: Only nominated finalists submit attested hard-copy files to HEC.",
                            "5. Sovereign Transmission: HEC forwards nominated files to the Moroccan Embassy and AMCI.",
                            "6. Moroccan Placement: AMCI confirms faculty allocation and issues final scholarship awards."
                        ]
                    }
                ]
            },
            {
                "id": "documentation",
                "title": "DOCUMENTATION & ATTESTATION DOSSIER",
                "iconName": "FileText",
                "content": "Candidates must prepare a rigorous verification dossier in accordance with HEC and Moroccan diplomatic standards.",
                "subsections": [
                    {
                        "title": "HEC Initial Submission Checklist",
                        "bullets": [
                            "Completed HEC online application form printed from the portal.",
                            "Original Computerized National Identity Card (CNIC) or CRC / B-Form.",
                            "Valid Passport copy (minimum 12 months validity).",
                            "Official transcripts and certificates for Matric, Intermediate, and Bachelor's/Master's.",
                            "Valid USAT (for Bachelor's) or HAT (for Master's/PhD) result card.",
                            "Recent passport-sized photographs."
                        ]
                    },
                    {
                        "title": "Post-Nomination Requirements",
                        "bullets": [
                            "Attestation by IBCC (for SSC/HSSC) and HEC (for degrees).",
                            "Certified translations in French for non-French documents.",
                            "Detailed Medical Certificate issued by a government hospital.",
                            "Police Character / Clearance Certificate issued by local police authorities.",
                            "Council registration letters for professional degrees (PMDC, PEC)."
                        ]
                    }
                ]
            },
            {
                "id": "portals",
                "title": "OFFICIAL SOVEREIGN PORTALS & VERIFICATION",
                "iconName": "ExternalLink",
                "content": "Authoritative information for the Moroccan Government Scholarships is verified through HEC and AMCI official sources.",
                "subsections": [
                    {
                        "title": "Official Portals",
                        "bullets": [
                            "HEC Moroccan Scholarships Overview: https://www.hec.gov.pk/english/scholarshipsgrants/lao/AMCI/Pages/default.aspx",
                            "HEC Eligibility Criteria: https://www.hec.gov.pk/english/scholarshipsgrants/lao/AMCI/Pages/Eligibility-Criteria.aspx",
                            "HEC Application Procedure: https://www.hec.gov.pk/english/scholarshipsgrants/lao/AMCI/Pages/Application-Procedure.aspx",
                            "HEC Scholarship Coverage: https://www.hec.gov.pk/english/scholarshipsgrants/lao/AMCI/Pages/Scholarship-Coverage.aspx",
                            "Agence Marocaine de Coopération Internationale (AMCI): https://www.amci.ma/"
                        ]
                    },
                    {
                        "title": "Audit Summary & Cycle Status",
                        "bullets": [
                            "2026–27 Pakistan Deadline: 10 June 2026 (Cycle Closed).",
                            "Pakistan Quota for 2026–27: 10 scholarship seats.",
                            "2027–28 Pakistan Deadline: Not yet published as of September 2026."
                        ]
                    }
                ]
            }
        ]
    },
    {
        "id": "gov-south-africa-nrf",
        "programTitle": "South African National Research Foundation (DSTI-NRF)",
        "sponsorGovernment": "South African Department of Science, Technology and Innovation (DSTI) & National Research Foundation (NRF)",
        "country": "South Africa",
        "flag": "🇿🇦",
        "degreeLevels": [
            "Masters",
            "PhD"
        ],
        "stipendMonthly": "Partial Cost of Study (PCS) award; exact value set annually by NRF & university award letter",
        "airfareCovered": False,
        "healthInsuranceCovered": False,
        "tuitionCovered": False,
        "deadline": "3 July 2026 (Applicant) / 4 September 2026 (DA Submission) — 2027 Ordinary Intake Closed",
        "bondRequirement": "Must complete research degree within approved NRF funding period; submit annual progress reports",
        "description": "Sovereign research funding framework administered by the DSTI and NRF. International students (including Pakistanis) are eligible in principle for highly competitive Partial Cost of Study (PCS) awards at Master's and Doctoral levels (approx. 5% international quota), applied via South African universities and NRF Connect.",
        "keyEligibility": [
            "Pakistan Eligibility Status: Eligible in principle under the limited international student quota (approx. 5% funding allocation)",
            "Funding Classification: Partial Cost of Study (PCS) ONLY for international scholars; Full Cost of Study (FCS) is restricted to South African citizens/PR",
            "Degree Levels: Full-time Research Master's and Research Doctoral (PhD) degrees only; taught coursework degrees, Bachelor's, and international Honours are ineligible",
            "Minimum Academic Requirement: At least 65% aggregate in previous qualifying degree (Honours/4-year degree for Master's; Master's for PhD)",
            "Application Route: University-mediated online application via NRF Connect (nrfconnect.nrf.ac.za); requires host university admission/supervisor endorsement",
            "No Diplomatic / HEC Route: Does not operate through HEC nomination or South African Embassy channels; direct university research submission"
        ],
        "supabaseDbId": 247,
        "overviewLong": "The DSTI-NRF Postgraduate Student Funding Framework is South Africa's premier sovereign research funding mechanism, co-funded by the Department of Science, Technology and Innovation (DSTI) and the National Research Foundation (NRF). Designed to build national research capacity and advance high-impact scientific inquiry, the framework finances postgraduate scholars at South African public universities. International students, including Pakistani researchers, are eligible in principle for research-based Master's and Doctoral (PhD) funding, but are legally restricted to Partial Cost of Study (PCS) awards. Under NRF equity regulations, Full Cost of Study (FCS) is reserved for South African citizens and permanent residents, while international scholars compete for approximately 5% of the total postgraduate funding allocation. The NRF award does not guarantee full tuition, international flights, or comprehensive living expenses; applicants must secure admission and supervisor endorsement at an eligible South African university before submitting their proposal through the NRF Connect system.",
        "fundingType": "Sovereign Research Funding Framework (Partial Cost of Study - PCS)",
        "workExperienceRequired": "Prior research experience, publications, or thesis research required",
        "ageLimit": "NRF framework age limits apply by degree level (consult current NRF call guidelines)",
        "hecNominationRequired": False,
        "embassyNominationRequired": False,
        "applicationRoute": "University-Mediated Online Application (NRF Connect)",
        "officialSources": [
            "DSTI-NRF Postgraduate Student Funding Call 2027 (nrf.ac.za)",
            "NRF Current Funding Calls 2026-2027 (nrf.ac.za)",
            "NRF Connect Official Portal (nrfconnect.nrf.ac.za)",
            "NRF Postgraduate Funding FAQs (nrf.ac.za)"
        ],
        "stepByStepProcess": [
            "STEP 1 — Identify Host University & Supervisor: Search participating South African universities (e.g., UCT, Wits, Stellenbosch, Pretoria, UJ, UKZN) and secure agreement from a research supervisor.",
            "STEP 2 — Apply for University Admission: Complete the host institution's formal postgraduate research admission process to obtain student number or conditional acceptance.",
            "STEP 3 — Register on NRF Connect: Create an account on the NRF Connect digital platform (nrfconnect.nrf.ac.za) and update academic and demographic profiles.",
            "STEP 4 — Draft Research Proposal: Prepare a comprehensive research proposal aligned with the supervisor's project and NRF strategic research priorities.",
            "STEP 5 — Submit NRF Application Online: Complete the funding application on NRF Connect, attach certified transcripts and proposal, and submit before the institutional deadline (typically early July).",
            "STEP 6 — University Internal Review: The university's Designated Authority (DA) and research committee screen, rank, and validate eligible applications.",
            "STEP 7 — DA Submission to NRF: The host university submits endorsed dossiers to the NRF before the institutional deadline (e.g., 4 September 2026).",
            "STEP 8 — NRF National Adjudication: Independent NRF peer-review panels evaluate proposals based on academic merit, research quality, and equity allocations.",
            "STEP 9 — Award Notification & Visa: The host university communicates the PCS award letter; recipient secures a South African Study Visa and completes campus registration."
        ],
        "restrictions": [
            "International students are strictly ineligible for Full Cost of Study (FCS) awards; eligible only for Partial Cost of Study (PCS)",
            "Honours funding is restricted to South African citizens; international students cannot receive NRF Honours awards",
            "Taught coursework Master's, non-degree courses, and part-time studies are excluded from international funding",
            "NRF PCS funding is not guaranteed to cover total tuition and living costs; recipients must self-fund or seek institutional top-ups",
            "No central embassy or HEC nomination mechanism exists; applications submitted outside the university/NRF Connect channel are rejected"
        ],
        "requiresSeparateApp": True,
        "logoText": "NRF",
        "logoBg": "from-blue-900 to-slate-900",
        "fullSections": [
            {
                "id": "mandate",
                "title": "SOVEREIGN MANDATE & LEGAL FOUNDATION",
                "iconName": "Building2",
                "content": "The DSTI-NRF Postgraduate Student Funding Framework is established by the Government of South Africa under the Department of Science, Technology and Innovation (DSTI) and administered by the National Research Foundation (NRF). Established by an Act of Parliament (National Research Foundation Act 23 of 1998), the NRF is mandated to support and promote research through funding, human resource development, and the provision of research facilities. The funding framework serves national transformation, equity, and strategic scientific priorities across all South African public higher education institutions.",
                "subsections": [
                    {
                        "title": "Legislative & Institutional Framework",
                        "bullets": [
                            "Statutory Authority: South African National Research Foundation (NRF) and Department of Science, Technology and Innovation (DSTI).",
                            "Governing Legislation: National Research Foundation Act (Act No. 23 of 1998 as amended).",
                            "Operational System: NRF Connect (nrfconnect.nrf.ac.za).",
                            "Scheme Character: Competitive research funding framework rather than an embassy-administered bilateral award."
                        ]
                    },
                    {
                        "title": "Strategic Focus & Sub-Schemes",
                        "bullets": [
                            "General Postgraduate Scholarships.",
                            "South African Research Chairs Initiative (SARChI) Scholarships.",
                            "South African Radio Astronomy Observatory (NRF-SARAO) Scholarships.",
                            "Targeted Center of Excellence (CoE) and thematic research grants."
                        ]
                    }
                ]
            },
            {
                "id": "financial",
                "title": "FINANCIAL BREAKDOWN & ALLOWANCES",
                "iconName": "Banknote",
                "content": "The NRF operates two distinct tiers of funding: Full Cost of Study (FCS) and Partial Cost of Study (PCS). International scholars are legally restricted to Partial Cost of Study (PCS) awards.",
                "subsections": [
                    {
                        "title": "Funding Tiers & International Limitations",
                        "bullets": [
                            "Full Cost of Study (FCS): Reserved exclusively for South African citizens and permanent residents (covers full tuition, living stipend, accommodation, and food).",
                            "Partial Cost of Study (PCS): The ONLY tier available to international applicants (including Pakistanis). Contributes toward tuition and/or living expenses at a predetermined rate.",
                            "International Quota: Approximately 5% of the total postgraduate funding allocation is accessible for international students.",
                            "Non-Covered Costs: Full tuition waiver is NOT guaranteed; international flights, visa fees, relocation costs, family support, and medical aid are generally self-funded."
                        ]
                    },
                    {
                        "title": "Stipend & Value Transparency",
                        "bullets": [
                            "Official Database Status: 'Partial Cost of Study (PCS) award; exact value set annually by NRF & university award letter.'",
                            "Top-Up Requirement: International students must verify whether their host university department provides institutional bursary top-ups to bridge the funding gap."
                        ]
                    }
                ]
            },
            {
                "id": "academic",
                "title": "ACADEMIC DISCIPLINES & DEGREE LEVELS",
                "iconName": "GraduationCap",
                "content": "NRF funding is strictly designated for research-intensive postgraduate programs. International applicants are eligible exclusively for research-focused Master's and Doctoral studies.",
                "subsections": [
                    {
                        "title": "Eligible Degrees (International)",
                        "bullets": [
                            "Research Master's Degrees (full-time research dissertation).",
                            "Doctoral Degrees / PhD (full-time terminal research).",
                            "Ineligible Degrees: Undergraduate/Bachelor's degrees, Honours programs (for international students), taught coursework Master's, non-degree diplomas, and part-time studies."
                        ]
                    },
                    {
                        "title": "Research Disciplines Supported",
                        "bullets": [
                            "Natural & Physical Sciences: Physics, Chemistry, Astronomy, Radio Astronomy (SARAO), Earth Sciences.",
                            "Engineering & Technology: Electrical, Mechanical, Civil, Chemical, Software, and Materials Engineering.",
                            "Information Technology & AI: Computer Science, Artificial Intelligence, Cybersecurity, Data Science.",
                            "Health & Life Sciences: Biotechnology, Public Health, Agriculture, Biomedical Sciences.",
                            "Social Sciences & Humanities: Economics, Education, Sociology, Political Science, Philosophy."
                        ]
                    },
                    {
                        "title": "Host Public Institutions",
                        "bullets": [
                            "University of Cape Town (UCT), University of the Witwatersrand (Wits), Stellenbosch University, University of Pretoria.",
                            "University of Johannesburg (UJ), University of KwaZulu-Natal (UKZN), University of the Western Cape (UWC), Rhodes University, University of South Africa (UNISA), and other accredited public universities."
                        ]
                    }
                ]
            },
            {
                "id": "eligibility",
                "title": "ELIGIBILITY & EXCLUSION RULES",
                "iconName": "CheckCircle2",
                "content": "Eligibility requires exceptional academic credentials, admission to a South African higher education provider, and adherence to strict NRF merit criteria.",
                "subsections": [
                    {
                        "title": "Core Criteria",
                        "bullets": [
                            "Academic Benchmark: Minimum of 65% in the previous qualifying degree (Honours or 4-year Bachelor's for Master's; Master's for Doctoral).",
                            "Degree Type: Must register for full-time, research-oriented postgraduate study.",
                            "Institutional Status: Must hold confirmed admission or an active application with an approved research supervisor at an eligible South African university.",
                            "Employment Restriction: Awardees cannot be engaged in incompatible full-time employment during the scholarship tenure.",
                            "English Language: Must fulfill host institution's English proficiency standards (IELTS/TOEFL or departmental waiver)."
                        ]
                    },
                    {
                        "title": "Critical Constraints for Pakistani Applicants",
                        "bullets": [
                            "International Competition: Pakistanis compete within the limited 5% international quota for PCS awards only.",
                            "65% is a Minimum: Due to intense competition, successful international candidates typically present significantly higher academic averages.",
                            "No FCS Consideration: Applications requesting Full Cost of Study will be automatically downgraded to PCS consideration."
                        ]
                    }
                ]
            },
            {
                "id": "routing",
                "title": "OFFICIAL ROUTING & STEP-BY-STEP SELECTION",
                "iconName": "GitFork",
                "content": "The application is entirely university-mediated via NRF Connect. There is no bilateral government nomination or embassy routing.",
                "subsections": [
                    {
                        "title": "Routing Mechanism",
                        "bullets": [
                            "Route Classification: 'University-mediated online application.'",
                            "Role of HEC / South African Embassy: None. The applicant does NOT apply through HEC or diplomatic missions."
                        ]
                    },
                    {
                        "title": "Two-Tier Institutional Selection Process",
                        "bullets": [
                            "Tier 1 (University DA Level): The host university Designated Authority (DA) screens, assesses supervisor capacity, ranks applicants, and submits endorsed files to NRF.",
                            "Tier 2 (NRF National Panel): NRF conducts peer review, applies national equity targets and funding thresholds, and issues final allocation approvals.",
                            "University Notification: The host university formally communicates the funding outcome and registration conditions to the applicant."
                        ]
                    }
                ]
            },
            {
                "id": "documentation",
                "title": "DOCUMENTATION & ATTESTATION DOSSIER",
                "iconName": "FileText",
                "content": "Submissions are uploaded in digital PDF format onto the NRF Connect portal accompanied by departmental endorsements.",
                "subsections": [
                    {
                        "title": "Required Submission Files",
                        "bullets": [
                            "Certified Copy of Valid Passport (data and photo pages).",
                            "Official Academic Transcripts and Degree Certificates for all prior tertiary studies.",
                            "Official Grading Scale Explanation (for converting Pakistani percentage/CGPA).",
                            "Detailed Curriculum Vitae (CV) highlighting publications, conferences, and research experience.",
                            "Detailed Research Proposal (including problem statement, literature review, methodology, ethics clearance, and timeline).",
                            "Proof of University Admission or formal application tracking reference.",
                            "Written Confirmation / Letter of Support from the prospective South African research supervisor.",
                            "Two Academic Reference Letters submitted directly by referees through NRF Connect.",
                            "English Language Proficiency Certificate (if required by host institution)."
                        ]
                    },
                    {
                        "title": "Post-Award Requirements",
                        "bullets": [
                            "South African Qualifications Authority (SAQA) credential evaluation certificate.",
                            "South African Student Visa and approved Medical Aid cover."
                        ]
                    }
                ]
            },
            {
                "id": "portals",
                "title": "OFFICIAL SOVEREIGN PORTALS & VERIFICATION",
                "iconName": "ExternalLink",
                "content": "All information regarding NRF funding frameworks and deadlines must be verified through authoritative South African Government channels.",
                "subsections": [
                    {
                        "title": "Authoritative Portals",
                        "bullets": [
                            "NRF 2027 Postgraduate Funding Call: https://www.nrf.ac.za/dsti-nrf-postgraduate-student-funding-for-the-2027-academic-year/",
                            "NRF Current Funding Calls: https://www.nrf.ac.za/funding/nrf-call-for-proposals-for-funding-in-2026-and-2027/",
                            "NRF Connect Portal: https://nrfconnect.nrf.ac.za/",
                            "NRF Postgraduate Funding FAQs: https://www.nrf.ac.za/nrf-connect/nrf-connect-faqs/"
                        ]
                    },
                    {
                        "title": "Audit Summary & Cycle Status",
                        "bullets": [
                            "2027 Academic Year Call: First-time Master's and Doctoral applicant deadline was 3 July 2026 (Closed).",
                            "University Designated Authority (DA) Deadline: 4 September 2026 (Closed).",
                            "Next Intake: Watch for the 2028 postgraduate call opening around March/April 2027."
                        ]
                    }
                ]
            }
        ]
    }
]

output_path = "src/data/africanGovernmentScholarshipsData.ts"
code = "import { GovernmentTrackItem } from './scholarshipTracksData';\n\n"
code += "export const AFRICAN_GOVERNMENT_SCHOLARSHIPS: GovernmentTrackItem[] = " + json.dumps(data, indent=2) + ";\n"

with open(output_path, "w") as f:
    f.write(code)

print("Successfully generated", output_path)
