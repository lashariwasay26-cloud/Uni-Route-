import { ReadingModule } from './readingTypes';

export const READING_MODULE_4: ReadingModule = {
  "moduleNumber": 4,
  "id": "reading-ch1-mod4",
  "chapterTitle": "CHAPTER 1 — FOUNDATIONS OF READING",
  "moduleTitle": "PASSAGE STRUCTURE, LOGICAL FLOW, & RHETORICAL FUNCTIONS",
  "endLabel": "END OF MODULE 4",
  "sections": [
    {
      "id": "ch1-m4-sec1",
      "sectionNumber": "1",
      "sectionTitle": "THE ANATOMY OF PASSAGE ARCHITECTURE",
      "content": [
        "Rhetorical function questions ask **why** an author wrote something, not just **what** they wrote.",
        "- **Literal Summary (What)**: The author describes an experiment with high-pressure valves.\n- **Rhetorical Function (Why)**: To illustrate the practical boundary conditions of the new theoretical model."
      ]
    },
    {
      "id": "ch1-m4-sec2",
      "sectionNumber": "2",
      "sectionTitle": "SENTENCE & PARAGRAPH FUNCTION TAXONOMY",
      "content": [
        "Do not analyze the targeted sentence or phrase in a vacuum. Its rhetorical purpose is defined by its relation to the surrounding sentences.",
        "> **Tip**: Always read one sentence before and one sentence after to identify the transition cue or argument direction."
      ]
    },
    {
      "id": "ch1-m4-sec3",
      "sectionNumber": "3",
      "sectionTitle": "WORKED EXAMPLE & CONCEPT DEMONSTRATION",
      "content": [
        "Analyze the structural movement and paragraph relationships in an academic debate."
      ],
      "passage": {
        "title": "Cooking Hypotheses and Encephalization in Early Hominins",
        "text": "[1] The dramatic expansion of cranial capacity in early *Homo erectus* coincided with an energetically expensive reduction in gut volume. Under the 'Expensive Tissue Hypothesis,' sustaining a metabolically demanding encephalized brain required a corresponding decrease in digestive tissue mass, which in turn necessitated a higher-quality, more easily digestible diet.\n\n[2] Proponents of the 'Cooking Hypothesis' contend that thermal processing of tubers and meat was the decisive catalyst that unlocked these caloric efficiencies, driving early speciation. However, critics highlight the conspicuous absence of definitive archaeological evidence for controlled fire prior to 400,000 years ago—hundreds of thousands of years after *Homo erectus* brain expansion began. Non-thermal processing techniques, such as mechanical pounding and meat tenderization, may therefore have preceded pyrotechnology as the primary dietary innovation."
      },
      "questions": [
        {
          "id": "ch1-w4",
          "questionNumber": 4,
          "label": "WORKED EXAMPLE 4 — READING COMPREHENSION",
          "prompt": "Which choice best describes the overall relationship between the two paragraphs?",
          "options": [
            {
              "label": "A",
              "text": "Paragraph 1 outlines an evolutionary energetic constraint, and Paragraph 2 examines competing explanations regarding how hominins overcame that constraint."
            },
            {
              "label": "B",
              "text": "Paragraph 1 introduces a physiological hypothesis, and Paragraph 2 disproves its core anatomical assumptions."
            },
            {
              "label": "C",
              "text": "Paragraph 1 provides archaeological evidence for controlled fire, and Paragraph 2 calculates the metabolic costs of brain development."
            },
            {
              "label": "D",
              "text": "Paragraph 1 presents a universal consensus, and Paragraph 2 suggests that early hominins did not experience encephalization."
            }
          ],
          "correctAnswer": "A",
          "correctAnswerIndex": 0,
          "whyCorrectTitle": "Why A is Correct (Logical Derivation):",
          "whyCorrect": "Paragraph 1 outlines the energetic dilemma (brain expansion vs. gut reduction requiring higher-quality diet). Paragraph 2 evaluates theories on how this was achieved: presenting the cooking hypothesis, raising a chronological counterargument regarding fire, and proposing non-thermal preparation as an alternative. Choice A accurately captures this functional trajectory.",
          "distractorExplanations": [
            {
              "optionLabel": "B",
              "explanation": "Paragraph 2 evaluates dietary mechanisms (fire vs pounding); it does not disprove the anatomical brain/gut relationship in Paragraph 1."
            },
            {
              "optionLabel": "C",
              "explanation": "Reverses the content and misstates the evidence; archaeological fire evidence is absent in the early period."
            },
            {
              "optionLabel": "D",
              "explanation": "Contradicts the text, which affirms that encephalization did occur."
            }
          ],
          "passageSupport": "Paragraph 1 establishes the metabolic constraint; Paragraph 2 evaluates 'Cooking' vs. 'Non-thermal processing' to explain that constraint.",
          "eliminationShortcut": "Map the paragraph functions: Paragraph 1 = Problem/Constraint; Paragraph 2 = Competing Explanations/Critique.",
          "educationalObjective": "Identify functional transitions from biological problem formulation to competing mechanistic hypotheses."
        }
      ]
    }
  ],
  "practiceQuestions": [
    {
      "id": "ch1-p16",
      "questionNumber": 16,
      "label": "PRACTICE QUESTION 16 — BILINGUALISM AND EXECUTIVE COGNITIVE RESERVE IN AGING",
      "prompt": "The author mentions the 'publication bias in small-sample Stroop studies' in Paragraph 2 primarily to:",
      "passage": {
        "title": "Bilingualism and Executive Cognitive Reserve in Aging",
        "text": "[1] Early psycholinguistic studies asserted that lifelong bilingualism confers a robust 'bilingual advantage,' enhancing executive control mechanisms such as attentional switching and inhibitory control. Proponents hypothesized that continuously managing two competing linguistic systems strengthens prefrontal neural circuits, thereby delaying the clinical onset of cognitive symptoms in neurodegenerative disorders by several years.\n\n[2] However, subsequent large-scale meta-analyses have challenged the universality of this cognitive benefit. Cognitive psychologists highlight the pervasive publication bias in small-sample Stroop studies, noting that well-powered replication attempts frequently fail to detect significant differences in non-verbal executive performance between monolingual and bilingual cohorts. Consequently, while bilingualism provides undeniable communicative and cultural benefits, framing it as an automatic prophylactic against age-related cognitive decline remains insufficiently supported."
      },
      "options": [
        {
          "label": "A",
          "text": "expose a methodological vulnerability that calls into question the generalizability of the bilingual cognitive advantage"
        },
        {
          "label": "B",
          "text": "prove that bilingual individuals possess inferior linguistic comprehension compared to monolinguals"
        },
        {
          "label": "C",
          "text": "demonstrate that executive control cannot be measured through laboratory experiments"
        },
        {
          "label": "D",
          "text": "argue that learning multiple languages accelerates neurodegenerative symptoms in older adults"
        }
      ],
      "correctAnswer": "A",
      "correctAnswerIndex": 0,
      "whyCorrectTitle": "Why A is the Best Answer:",
      "whyCorrect": "Paragraph 2 cites 'publication bias in small-sample Stroop studies' to explain why initial claims of a universal executive control advantage are challenged by larger replication efforts. This highlights a methodological weakness in the early literature, supporting the author's argument that the cognitive reserve hypothesis is insufficiently supported (Choice A).",
      "distractorExplanations": [
        {
          "optionLabel": "B",
          "explanation": "Directly contradicts the passage, which affirms communicative benefits."
        },
        {
          "optionLabel": "C",
          "explanation": "Extreme overstatement; the text challenges small-sample bias, not laboratory measurement itself."
        },
        {
          "optionLabel": "D",
          "explanation": "Inverts the passage; early studies claimed bilingualism *delayed* symptoms, and critics argue the benefit is unproven, not harmful."
        }
      ],
      "passageSupport": "Paragraph 2: 'Cognitive psychologists highlight the pervasive publication bias in small-sample Stroop studies, noting that well-powered replication attempts frequently fail to detect significant differences...'",
      "eliminationShortcut": "Rhetorical function: Publication bias detail serves to challenge the empirical foundation of early bilingual advantage claims (Choice A).",
      "educationalObjective": "Evaluate how methodological critiques function to qualify psycholinguistic hypotheses."
    },
    {
      "id": "ch1-p17",
      "questionNumber": 17,
      "label": "PRACTICE QUESTION 17 — GERMANIC VERB-SECOND SYNTACTIC SHIFT",
      "prompt": "Which choice best describes the primary function of the second paragraph?",
      "passage": {
        "title": "Germanic Verb-Second Syntactic Shift",
        "text": "[1] In early West Germanic dialects, sentence structure adhered strictly to a Verb-Final (OV) word order, where verbs consistently occupied the clause-final position regardless of discourse emphasis. For decades, historical syntacticians attributed the gradual shift toward Verb-Second (VO) order in thirteenth-century legal manuscripts exclusively to spontaneous internal phonetic erosion of case endings.\n\n[2] However, recent corpus analyses of scribal manuscripts complicate this internalist explanation. Sociolinguists have demonstrated that the transition to VO order occurred first in formal administrative charters and trade receipts rather than in vernacular narrative texts. This pattern suggests that scribal standardization, driven by expanding international commerce across the Baltic region, acted as the primary catalyst for syntactic reorganization, preceding broader colloquial adoption by nearly a century."
      },
      "options": [
        {
          "label": "A",
          "text": "It provides additional linguistic examples supporting the phonetic erosion hypothesis introduced in the first paragraph."
        },
        {
          "label": "B",
          "text": "It introduces recent manuscript data to challenge a traditional internalist explanation and propose a commercial scribal catalyst."
        },
        {
          "label": "C",
          "text": "It proves that thirteenth-century vernacular spoken language adopted VO word order before administrative texts."
        },
        {
          "label": "D",
          "text": "It outlines the geographic boundaries of early West Germanic dialects across the Baltic region."
        }
      ],
      "correctAnswer": "B",
      "correctAnswerIndex": 1,
      "whyCorrectTitle": "Why B is the Best Answer:",
      "whyCorrect": "Paragraph 1 sets up the traditional explanation (internal phonetic erosion). Paragraph 2 begins with 'However', presenting new manuscript data showing VO order appeared first in administrative texts, concluding that commercial scribal standardization catalyzed the change. Choice B accurately describes this function.",
      "distractorExplanations": [
        {
          "optionLabel": "A",
          "explanation": "Directly contradicts the paragraph, which challenges rather than supports the phonetic erosion hypothesis."
        },
        {
          "optionLabel": "C",
          "explanation": "Directly contradicts the text, which states VO appeared in administrative charters *before* vernacular texts."
        },
        {
          "optionLabel": "D",
          "explanation": "Too narrow; geographic mention is incidental context, not the primary function of the paragraph."
        }
      ],
      "passageSupport": "Paragraph 2, sentences 1–3 present corpus evidence challenging the internalist view and offering the scribal standardization theory.",
      "eliminationShortcut": "Identify the pivot: 'However, recent corpus analyses... complicate this internalist explanation.'",
      "educationalObjective": "Determine paragraph function in texts introducing empirical challenges to historical theories."
    },
    {
      "id": "ch1-p18",
      "questionNumber": 18,
      "label": "PRACTICE QUESTION 18 — URBAN DENSITY AND FEEDER TRANSIT NETWORKS",
      "prompt": "Which choice best describes the overall purpose of the text?",
      "passage": {
        "title": "Urban Density and Feeder Transit Networks",
        "text": "Urban planners frequently champion Transit-Oriented Development (TOD)—concentrating high-density residential and commercial zoning within a five-minute walking radius of fixed rail stations—as the definitive cure for suburban automobile reliance. While TOD projects successfully boost rail ridership among affluent inner-ring commuters, their impact on regional greenhouse gas emissions is often modest. In outer-ring metropolitan corridors, where lower land values mandate sprawling suburban layouts, high-frequency fixed rail infrastructure is fiscally unsustainable. Comprehensive urban mobility models indicate that expanding flexible, micro-transit feeder bus networks in peripheral neighborhoods yields significantly greater aggregate vehicle-kilometer reductions per dollar invested than building additional light rail extensions."
      },
      "options": [
        {
          "label": "A",
          "text": "To argue that high-density TOD projects should be dismantled in favor of private automobile infrastructure."
        },
        {
          "label": "B",
          "text": "To qualify the perceived universal efficacy of TOD by demonstrating the economic and environmental value of flexible feeder transit in outer suburban corridors."
        },
        {
          "label": "C",
          "text": "To calculate the exact financial cost of building light rail extensions across mid-sized cities."
        },
        {
          "label": "D",
          "text": "To prove that suburban commuters generate higher carbon emissions than urban residents under all conditions."
        }
      ],
      "correctAnswer": "B",
      "correctAnswerIndex": 1,
      "whyCorrectTitle": "Why B is the Best Answer:",
      "whyCorrect": "The text introduces TOD praise, notes its limitations in outer suburban corridors due to fiscal costs, and presents mobility models showing flexible feeder buses yield higher efficiency in those zones. Choice B synthesizes this qualified argument accurately.",
      "distractorExplanations": [
        {
          "optionLabel": "A",
          "explanation": "Extreme distortion; the text advocates for feeder bus transit, not private automobile reliance."
        },
        {
          "optionLabel": "C",
          "explanation": "Too specific; the text mentions fiscal unsustainability conceptually without calculating exact dollar amounts."
        },
        {
          "optionLabel": "D",
          "explanation": "Overly broad extrapolation unsupported by the specific transit comparison."
        }
      ],
      "passageSupport": "Sentences 2–4 contrast inner-ring TOD success with outer-ring feeder bus efficiency.",
      "eliminationShortcut": "Look for choices that capture 'qualifying an established idea' + 'proposing an alternative for specific contexts'.",
      "educationalObjective": "Evaluate overall authorial purpose in public policy and urban planning evaluations."
    },
    {
      "id": "ch1-p19",
      "questionNumber": 19,
      "label": "PRACTICE QUESTION 19 — ETHOLOGICAL PERSPECTIVES ON ANIMAL SIGNALING",
      "prompt": "Which choice best describes the primary purpose of the passage?",
      "passage": {
        "title": "Ethological Perspectives on Animal Signaling",
        "text": "Early twentieth-century comparative psychologists evaluated animal vocalizations strictly against the structural benchmarks of human spoken language, categorizing animal signals as primitive emotional outbursts lacking symbolic representation. Modern ethology, however, has discarded this anthropocentric framework. Field researchers studying vervet monkeys, prairie dogs, and avian species demonstrate that animal alarm calls convey highly specific acoustic information regarding predator type, distance, and approach velocity. Rather than failed ≈imations of human syntax, animal communication systems are now understood as finely tuned ecological adaptations optimized for immediate survival within specific sensory niches."
      },
      "options": [
        {
          "label": "A",
          "text": "To demonstrate that vervet monkey alarm calls contain complex grammatical syntax identical to human language."
        },
        {
          "label": "B",
          "text": "To criticize modern ethologists for abandoning laboratory experimentation in favor of field research."
        },
        {
          "label": "C",
          "text": "To describe a shift in how scientists evaluate animal communication, moving from anthropocentric benchmarks to ecological adaptations."
        },
        {
          "label": "D",
          "text": "To argue that early comparative psychologists intentionally distorted data to prove human superiority."
        }
      ],
      "correctAnswer": "C",
      "correctAnswerIndex": 2,
      "whyCorrectTitle": "Why C is the Best Answer:",
      "whyCorrect": "The passage outlines the early 20th-century view (anthropocentric human syntax comparison), details modern ethological discoveries of specific predator signaling, and concludes that animal communication is an ecological adaptation. Choice C accurately states this paradigm shift.",
      "distractorExplanations": [
        {
          "optionLabel": "A",
          "explanation": "Extravagant overstatement; the text explicitly notes animal signals are *not* human syntax but specific ecological adaptations."
        },
        {
          "optionLabel": "B",
          "explanation": "Unmentioned methodological debate; the text praises modern ethology's ecological perspective."
        },
        {
          "optionLabel": "D",
          "explanation": "Attributes malicious motive ('intentionally distorted') nowhere suggested in the text."
        }
      ],
      "passageSupport": "Sentences 2 and 4 describe the shift from early anthropocentric benchmarks to modern ecological adaptation views.",
      "eliminationShortcut": "Identify the main structural transition: Old perspective -> New ethological paradigm.",
      "educationalObjective": "Identify primary passage purpose in accounts of scientific paradigm shifts."
    },
    {
      "id": "ch1-p20",
      "questionNumber": 20,
      "label": "PRACTICE QUESTION 20 — ABBASID MONUMENTAL EPIGRAPHY",
      "prompt": "Which choice best describes the primary purpose of the passage?",
      "passage": {
        "title": "Abbasid Monumental Epigraphy",
        "text": "Architectural historians surveying ninth-century Abbasid civic structures in Samarra traditionally categorized monumental Arabic inscriptions as purely ornamental embellishments intended to break the visual monotony of brick facades. Historian Oleg Grabar, however, transformed epigraphic studies by demonstrating that these calligraphic bands performed active political functions. By analyzing inscription locations above public city gates and tax registries, Grabar showed that specific Quranic verses were selected to assert imperial legal authority and legitimate caliphal taxation over newly integrated trade routes. Far from passive decoration, Abbasid epigraphy operated as a visual medium of imperial governance."
      },
      "options": [
        {
          "label": "A",
          "text": "To detail the architectural methods used to manufacture decorative brick facades in ninth-century Samarra."
        },
        {
          "label": "B",
          "text": "To argue that Oleg Grabar's epigraphic theories have been rejected by modern historians of Islamic art."
        },
        {
          "label": "C",
          "text": "To explain how Oleg Grabar's research reinterpreted Abbasid monumental inscriptions from decorative art to active instruments of governance."
        },
        {
          "label": "D",
          "text": "To compare ninth-century Abbasid city gates with contemporary Byzantine fortifications."
        }
      ],
      "correctAnswer": "C",
      "correctAnswerIndex": 2,
      "whyCorrectTitle": "Why C is the Best Answer:",
      "whyCorrect": "The text moves from the traditional view (purely ornamental inscriptions) to Grabar's breakthrough showing inscriptions performed active political and legal functions, concluding they were visual media of governance. Choice C accurately captures this main purpose.",
      "distractorExplanations": [
        {
          "optionLabel": "A",
          "explanation": "Too narrow and misfocused on brick manufacturing mechanics rather than epigraphic purpose."
        },
        {
          "optionLabel": "B",
          "explanation": "Directly contradicts the text, which highlights Grabar's positive transformation of the field."
        },
        {
          "optionLabel": "D",
          "explanation": "Unmentioned comparison between Abbasid and Byzantine architecture."
        }
      ],
      "passageSupport": "Sentences 2–4 detail Grabar's reinterpretation of Abbasid inscriptions as governance tools.",
      "eliminationShortcut": "Match 'transformed epigraphic studies' to 'reinterpreted inscriptions from X to Y'.",
      "educationalObjective": "Summarize authorial purpose in art historical re-evaluations."
    }
  ]
};

export const READING_MODULE_5: ReadingModule = {
  "moduleNumber": 5,
  "id": "reading-ch1-mod5",
  "chapterTitle": "CHAPTER 1 — FOUNDATIONS OF READING",
  "moduleTitle": "AUTHOR PERSPECTIVE, POINT OF VIEW, & TONE NUANCES",
  "endLabel": "END OF MODULE 5",
  "sections": [
    {
      "id": "ch1-m5-sec1",
      "sectionNumber": "1",
      "sectionTitle": "THE 4 PERSPECTIVE REGISTERS ON THE DIGITAL SAT",
      "content": [
        "SAT authors write in a scholarly, balanced, and objective register. Their tone is almost never extreme.",
        "- **Valid Tones**: *Objective, analytical, qualified, critical, supportive.*\n- **Banned/Trap Tones**: *Hostile, dismissive, ecstatic, vindictive, condescending, indifferent.*"
      ]
    },
    {
      "id": "ch1-m5-sec2",
      "sectionNumber": "2",
      "sectionTitle": "HEDGING & EPISTEMIC CALIBRATION",
      "content": [
        "Pay close attention to hedging language which limits the scope of a claim:\n- **High Certainty**: *demonstrates, establishes, proves*\n- **Moderate/Hedged**: *suggests, points toward, is consistent with, may reflect*",
        "If the author says *'assays suggest a potential link,'* any choice describing the tone as *'unwavering conviction'* or *'absolute certainty'* is a trap."
      ]
    },
    {
      "id": "ch1-m5-sec3",
      "sectionNumber": "3",
      "sectionTitle": "WORKED EXAMPLE & CONCEPT DEMONSTRATION",
      "content": [
        "Observe how an author calibrates praise, skepticism, and qualification."
      ],
      "passage": {
        "title": "Decentralized Settlement Protocols in Municipal Finance",
        "text": "[1] Enthusiasts of decentralized cryptographic ledgers frequently claim that automated smart contracts will eliminate transaction friction and eradicate administrative malfeasance in municipal bond issuance. By removing intermediary underwriters and credit-rating agencies, proponents argue that local governments can reduce issuance overhead by up to 40%.\n\n[2] Such projections, while mathematically elegant on paper, overlook the entrenched institutional realities of public debt markets. Municipal bond covenants require complex legal discretion and ongoing statutory compliance—functions that deterministic, immutable code cannot autonomously navigate. Decentralized ledgers may well provide valuable auditability enhancements for transparent record-keeping, but treating them as an autonomous substitute for institutional oversight represents a profound category error."
      },
      "questions": [
        {
          "id": "ch1-w5",
          "questionNumber": 5,
          "label": "WORKED EXAMPLE 5 — READING COMPREHENSION",
          "prompt": "The author's attitude toward the claim that smart contracts can autonomously replace municipal underwriters can best be described as:",
          "options": [
            {
              "label": "A",
              "text": "openly dismissive of its theoretical validity while embracing its immediate commercial implementation"
            },
            {
              "label": "B",
              "text": "methodically critical, viewing the claim as an oversimplification of complex institutional requirements"
            },
            {
              "label": "C",
              "text": "cautiously enthusiastic regarding its potential to eliminate legal covenants completely"
            },
            {
              "label": "D",
              "text": "indifferent to the technology's technical merits and municipal governance"
            }
          ],
          "correctAnswer": "B",
          "correctAnswerIndex": 1,
          "whyCorrectTitle": "Why B is Correct (Logical Derivation):",
          "whyCorrect": "The author methodically explains why the technology cannot replace underwriters: municipal bonds require 'complex legal discretion and ongoing statutory compliance' that deterministic code cannot provide, concluding that treating code as a complete substitute is a 'profound category error.' The stance is analytical, structured, and critical of the oversimplification.",
          "distractorExplanations": [
            {
              "optionLabel": "A",
              "explanation": "Self-contradictory; the author acknowledges mathematical elegance but opposes autonomous implementation."
            },
            {
              "optionLabel": "C",
              "explanation": "Distorts the author's stance into enthusiasm; the author emphasizes that legal covenants cannot be automated away."
            },
            {
              "optionLabel": "D",
              "explanation": "Inaccurate; the author is actively engaged in evaluating the policy, not indifferent."
            }
          ],
          "passageSupport": "Paragraph 2: 'Such projections, while mathematically elegant... overlook the entrenched institutional realities... treating them as an autonomous substitute... represents a profound category error.'",
          "eliminationShortcut": "Identify the author's critical verdict: 'profound category error' + 'overlook institutional realities' = methodically critical.",
          "educationalObjective": "Analyze authorial attitude in technical policy critiques."
        }
      ]
    }
  ],
  "practiceQuestions": [
    {
      "id": "ch1-p21",
      "questionNumber": 21,
      "label": "PRACTICE QUESTION 21 — DIRECT AIR CAPTURE SYSTEMS AND ENERGY PENALTY DYNAMICS",
      "prompt": "Which choice best reflects the author's concession regarding Direct Air Capture (DAC) systems?",
      "passage": {
        "title": "Direct Air Capture Systems and Energy Penalty Dynamics",
        "text": "[1] Technocentric decarbonization roadmaps increasingly rely on chemical Direct Air Capture (DAC) facilities to extract ambient carbon dioxide directly from the atmosphere, projecting that modular solid-sorbent arrays will achieve net-negative emissions at gigaton scales by mid-century.\n\n[2] Such forecasts, however, frequently downplay the thermodynamic realities of ultra-dilute atmospheric gas extraction. Capturing CO2 present at only 420 parts per million imposes a massive energetic penalty, requiring immense thermal and electrical inputs to regenerate solid amine filters. DAC systems may well serve as an indispensable tool for neutralizing unavoidable residual emissions from hard-to-abate heavy industrial sectors, but deploying them as a substitute for direct point-source emission reductions risks diverting renewable electricity away from more effective grid decarbonization."
      },
      "options": [
        {
          "label": "A",
          "text": "They will immediately remove gigatons of carbon dioxide from the atmosphere without requiring electrical inputs."
        },
        {
          "label": "B",
          "text": "They can provide a crucial mechanism for offsetting residual emissions from sectors where direct decarbonization is difficult."
        },
        {
          "label": "C",
          "text": "They are entirely useless and have no viable role in any comprehensive climate policy."
        },
        {
          "label": "D",
          "text": "They operate with higher thermodynamic efficiency than point-source industrial scrubbers."
        }
      ],
      "correctAnswer": "B",
      "correctAnswerIndex": 1,
      "whyCorrectTitle": "Why B is the Best Answer:",
      "whyCorrect": "Paragraph 2 contains the explicit concession: 'DAC systems may well serve as an indispensable tool for neutralizing unavoidable residual emissions from hard-to-abate heavy industrial sectors...' This recognizes DAC's targeted value in hard-to-abate sectors while criticizing its over-reliance as a substitute for point-source reductions (Choice B).",
      "distractorExplanations": [
        {
          "optionLabel": "A",
          "explanation": "Contradicted by the author's emphasis on the massive energetic penalty and dilute CO2 concentration."
        },
        {
          "optionLabel": "C",
          "explanation": "Extreme overstatement; the author concedes DAC is indispensable for hard-to-abate industries."
        },
        {
          "optionLabel": "D",
          "explanation": "Directly contradicted by the passage, which notes the thermodynamic difficulty of capturing dilute atmospheric gas compared to point sources."
        }
      ],
      "passageSupport": "Paragraph 2: 'DAC systems may well serve as an indispensable tool for neutralizing unavoidable residual emissions from hard-to-abate heavy industrial sectors...'",
      "eliminationShortcut": "Concession identification: 'may well serve as an indispensable tool for X' = the targeted admitted benefit (Choice B).",
      "educationalObjective": "Distinguish an author's overarching analytical critique from their specific, bounded concessions."
    },
    {
      "id": "ch1-p22",
      "questionNumber": 22,
      "label": "PRACTICE QUESTION 22 — HISTORIOGRAPHY OF THE ENCLOSURE ACTS",
      "prompt": "Which choice best describes the author's stance toward traditional Whig histories of the British Enclosure Acts?",
      "passage": {
        "title": "Historiography of the Enclosure Acts",
        "text": "Traditional Whig historians painted eighteenth-century British Enclosure Acts as a triumph of agricultural modernization, arguing that privatizing communal open fields consolidated fragmented land plots and incentivized crop rotation and selective livestock breeding. However, social historians have complicated this celebratory narrative. Archival records of village petitions reveal that parliamentary enclosures systematically stripped smallholders of customary common grazing and wood-gathering rights. Deprived of communal safety nets, thousands of cottagers were forced into landlessness and low-wage wage labor in growing industrial cities. While enclosures undoubtedly increased aggregate grain output, viewing them solely as progress ignores the profound social displacement that funded that growth."
      },
      "options": [
        {
          "label": "A",
          "text": "Complete endorsement of Whig claims that privatization benefited all rural classes equally."
        },
        {
          "label": "B",
          "text": "Total rejection of the claim that agricultural yields or grain output increased after enclosure."
        },
        {
          "label": "C",
          "text": "Critical qualification, admitting yield increases occurred while emphasizing the severe social displacement imposed on smallholders."
        },
        {
          "label": "D",
          "text": "Indifference toward economic outcomes combined with enthusiasm for industrial urbanization."
        }
      ],
      "correctAnswer": "C",
      "correctAnswerIndex": 2,
      "whyCorrectTitle": "Why C is the Best Answer:",
      "whyCorrect": "The author acknowledges that enclosures 'undoubtedly increased aggregate grain output' (the Whig point) while arguing that viewing them solely as progress ignores the 'profound social displacement' of smallholders. Choice C perfectly captures this critical qualification.",
      "distractorExplanations": [
        {
          "optionLabel": "A",
          "explanation": "Contradicts the passage, which highlights that smallholders lost rights and became landless."
        },
        {
          "optionLabel": "B",
          "explanation": "Contradicts the text, which explicitly concedes that 'enclosures undoubtedly increased aggregate grain output.'"
        },
        {
          "optionLabel": "C",
          "explanation": "Accurate synthesis of the author's balanced critical stance."
        },
        {
          "optionLabel": "D",
          "explanation": "Misrepresents author tone; the author demonstrates deep concern for social displacement, not indifference."
        }
      ],
      "passageSupport": "Final sentence: 'While enclosures undoubtedly increased aggregate grain output, viewing them solely as progress ignores the profound social displacement that funded that growth.'",
      "eliminationShortcut": "Look for 'While X is true, ignoring Y is a flaw' -> Choice C captures this balanced critique.",
      "educationalObjective": "Analyze authorial stance in historiographical re-evaluations."
    },
    {
      "id": "ch1-p23",
      "questionNumber": 23,
      "label": "PRACTICE QUESTION 23 — THE EUROPEAN TRANSITION FROM WOOD TO COAL",
      "prompt": "Which choice best describes the author's perspective on the European transition from wood to coal?",
      "passage": {
        "title": "The European Transition from Wood to Coal",
        "text": "Popular accounts of the Industrial Revolution often depict the European transition from timber to coal as a sudden, desperate response to acute forest depletion. In this narrative, Western Europe ran out of wood, forcing ironmasters and mill owners to adopt coal-fired steam power. However, energy historian E.A. Wrigley demonstrates that regional wood supplies remained stable throughout the eighteenth century. Coal adoption was driven not by immediate timber scarcity, but by coal's vastly superior energy density per unit of transport cost and the geographical coincidence of iron ore deposits near exposed coal seams. The transition was a gradual economic optimization rather than an emergency environmental rescue."
      },
      "options": [
        {
          "label": "A",
          "text": "Agreement with popular accounts that timber depletion forced immediate coal adoption."
        },
        {
          "label": "B",
          "text": "Support for Wrigley's revisionist view that coal adoption was a gradual economic optimization driven by energy density and geography rather than timber shortages."
        },
        {
          "label": "C",
          "text": "Skepticism toward energy history as a discipline due to lack of eighteenth-century economic data."
        },
        {
          "label": "D",
          "text": "Advocacy for returning to wood fuel to prevent modern industrial environmental damage."
        }
      ],
      "correctAnswer": "B",
      "correctAnswerIndex": 1,
      "whyCorrectTitle": "Why B is the Best Answer:",
      "whyCorrect": "The author contrasts 'popular accounts' (desperate response to wood shortages) with E.A. Wrigley's evidence (stable wood supplies, coal chosen for energy density and geography), concluding the transition was a gradual economic optimization. Choice B captures the author's endorsement of Wrigley's view.",
      "distractorExplanations": [
        {
          "optionLabel": "A",
          "explanation": "Describes the popular view that the passage refutes."
        },
        {
          "optionLabel": "C",
          "explanation": "Unwarranted attack on energy history unmentioned in the text."
        },
        {
          "optionLabel": "D",
          "explanation": "Anachronistic political speculation unsupported by the text."
        }
      ],
      "passageSupport": "Final sentence: 'The transition was a gradual economic optimization rather than an emergency environmental rescue.'",
      "eliminationShortcut": "Match 'gradual economic optimization' directly to choice B.",
      "educationalObjective": "Identify authorial stance in economic and technological history."
    },
    {
      "id": "ch1-p24",
      "questionNumber": 24,
      "label": "PRACTICE QUESTION 24 — SUPPLY-SIDE VS. KEYNESIAN RECESSIONS",
      "prompt": "Which choice best describes the author's stance regarding classical supply-side economic policy during deep recessions?",
      "passage": {
        "title": "Supply-Side vs. Keynesian Recessions",
        "text": "During moderate economic downturns, classical supply-side interventions—such as lowering corporate tax rates and reducing regulatory compliance costs—can effectively stimulate private capital investment. However, when an economy falls into a severe liquidity trap accompanied by debt deflation, supply-side measures lose traction. When consumer demand is depressed and debt burdens are high, lowering capital costs fails to induce business expansion because firms lack solvent customers. Under such extreme conditions, direct public infrastructure investment, as advocated by Keynesian economists, is necessary to restore aggregate demand and break the deflationary spiral."
      },
      "options": [
        {
          "label": "A",
          "text": "Qualified endorsement of supply-side policies in moderate downturns, combined with the view that severe liquidity traps require Keynesian demand stimulus."
        },
        {
          "label": "B",
          "text": "Unconditional rejection of supply-side economics under all macroeconomic conditions."
        },
        {
          "label": "C",
          "text": "Insistence that corporate tax cuts are the single most effective stimulus during severe debt deflation."
        },
        {
          "label": "D",
          "text": "Indifference toward public infrastructure investment in favor of deregulation."
        }
      ],
      "correctAnswer": "A",
      "correctAnswerIndex": 0,
      "whyCorrectTitle": "Why A is the Best Answer:",
      "whyCorrect": "The author admits supply-side policies work during 'moderate economic downturns' (qualifying support) but argues that during 'severe liquidity traps', direct Keynesian infrastructure investment is required. Choice A accurately states this nuanced position.",
      "distractorExplanations": [
        {
          "optionLabel": "B",
          "explanation": "Extreme distortion ('unconditional rejection'); sentence 1 acknowledges supply-side policies work in moderate downturns."
        },
        {
          "optionLabel": "C",
          "explanation": "Directly contradicts sentence 3, which states lowering capital costs fails during severe debt deflation."
        },
        {
          "optionLabel": "D",
          "explanation": "Directly contradicts the final sentence, which endorses public infrastructure investment."
        }
      ],
      "passageSupport": "Sentences 1 and 4 combine to form the author's conditional macroeconomic perspective.",
      "eliminationShortcut": "Notice boundary markers: 'During moderate downturns, X works... However, under severe conditions, Y is necessary.'",
      "educationalObjective": "Recognize conditional stance and boundary limitations in economic policy texts."
    },
    {
      "id": "ch1-p25",
      "questionNumber": 25,
      "label": "PRACTICE QUESTION 25 — HISTORIOGRAPHY OF ROMAN COLLAPSE",
      "prompt": "Which choice best describes the author's stance toward Edward Gibbon's explanation for the collapse of the Western Roman Empire?",
      "passage": {
        "title": "Historiography of Roman Collapse",
        "text": "Edward Gibbon's monumental *History of the Decline and Fall of the Roman Empire* attributed the western empire's collapse in the fifth century CE primarily to moral decay and civic apathy brought on by religious transformation. Modern fiscal historians, however, view Gibbon's moralizing diagnosis as anachronistic. Quantitative analyses of late imperial tax registers show that the Western Roman state did not collapse from moral rot, but from fiscal exhaustion. As invading Germanic groups seized hyper-fertile agricultural provinces in North Africa, imperial tax revenues plunged, rendering the Western state structurally incapable of financing its standing professional army. The fall of Rome was fundamentally a fiscal-military collapse rather than an ethical failure."
      },
      "options": [
        {
          "label": "A",
          "text": "Full agreement with Gibbon's thesis that moral rot was the primary cause of western collapse."
        },
        {
          "label": "B",
          "text": "Rejection of fiscal tax registers as unreliable historical evidence."
        },
        {
          "label": "C",
          "text": "Rejection of Gibbon's moral explanation in favor of modern quantitative evidence showing a fiscal-military collapse."
        },
        {
          "label": "D",
          "text": "Claim that North African agricultural provinces had no economic impact on imperial tax revenues."
        }
      ],
      "correctAnswer": "C",
      "correctAnswerIndex": 2,
      "whyCorrectTitle": "Why C is the Best Answer:",
      "whyCorrect": "The passage sets up Gibbon's moral decay theory, calls it 'anachronistic', and presents modern fiscal research showing Rome collapsed because North African revenue loss defunded the army. Choice C captures the author's rejection of Gibbon in favor of fiscal evidence.",
      "distractorExplanations": [
        {
          "optionLabel": "A",
          "explanation": "States Gibbon's refuted view as if the author accepted it."
        },
        {
          "optionLabel": "B",
          "explanation": "Contradicts the text, which praises quantitative tax register analyses."
        },
        {
          "optionLabel": "D",
          "explanation": "Directly contradicts the passage, which emphasizes North Africa's loss plunged imperial tax revenues."
        }
      ],
      "passageSupport": "Final sentence: 'The fall of Rome was fundamentally a fiscal-military collapse rather than an ethical failure.'",
      "eliminationShortcut": "Identify the conclusion: 'fiscal-military collapse rather than ethical failure'.",
      "educationalObjective": "Evaluate authorial perspective in historiographical debates."
    }
  ]
};

export const READING_MODULE_6: ReadingModule = {
  "moduleNumber": 6,
  "id": "reading-ch1-mod6",
  "chapterTitle": "CHAPTER 1 — FOUNDATIONS OF READING",
  "moduleTitle": "COMPARATIVE ANALYSIS & DUAL-PASSAGE SYNTHESIS",
  "endLabel": "END OF MODULE 6",
  "sections": [
    {
      "id": "ch1-m6-sec1",
      "sectionNumber": "1",
      "sectionTitle": "THE 4 CORE DUAL-PASSAGE RELATIONSHIP MODELS",
      "content": [
        "Compare Passage 1 (P1) and Passage 2 (P2) using one of four models:\n1. **Theoretical Contradiction**: P2 argues P1's mechanism is fundamentally flawed.\n2. **Practical Friction**: P2 accepts P1's theoretical model but details real-world limitations.\n3. **Methodological Critique**: P2 challenges the controls, sample size, or validity of P1's experiment.\n4. **Complementary Perspectives**: P1 and P2 explore different dimensions of the same topic (e.g., macro vs. micro)."
      ]
    },
    {
      "id": "ch1-m6-sec2",
      "sectionNumber": "2",
      "sectionTitle": "THE CROSS-PASSAGE SYNTHESIS PROTOCOL",
      "content": [
        "1. **Isolate P1 Thesis**: Sum up P1's claim in a few words.\n2. **Isolate P2 Thesis**: Sum up P2's claim in a few words.\n3. **Map Common Ground**: Find where both authors agree.\n4. **Identify Divergence**: Locate the exact point where they split.",
        "> **Rule**: When answering how P2 would react to P1, base the response *strictly* on P2's stated evidence, never on your own opinion."
      ]
    },
    {
      "id": "ch1-m6-sec3",
      "sectionNumber": "3",
      "sectionTitle": "WORKED EXAMPLE & CONCEPT DEMONSTRATION",
      "content": [
        "Observe cross-passage comparison on ecological intervention."
      ],
      "passage": {
        "title": "Paired Perspectives on Wildfire Suppression in Coniferous Biomes",
        "text": "**Passage 1**\nFor over a century, federal forestry policy operated on the premise that all wildfire represented an unmitigated ecological catastrophe to be suppressed immediately. Decades of aggressive suppression, however, disrupted natural low-intensity fire regimes that historically cleared understory brush. As a result, catastrophic fuel loads accumulated across millions of hectares, rendering modern coniferous forests exceptionally vulnerable to catastrophic, high-severity megafires that sterilize soils and destroy mature seed canopies.\n\n**Passage 2**\nWhile prescribed low-intensity burns and fuel-thinning treatments are conceptually sound tools for restoring historical fire return intervals, implementing them at meaningful ecological scales faces formidable operational constraints. Expanding wildland-urban interfaces mean that escaped prescribed burns pose severe liability and air quality hazards for human populations. Furthermore, climate-induced aridity has narrowed the safe weather windows for prescribed burns so severely that mechanical thinning, rather than active fire introduction, must serve as the primary fuel reduction strategy in high-risk zones."
      },
      "questions": [
        {
          "id": "ch1-w6",
          "questionNumber": 6,
          "label": "WORKED EXAMPLE 6 — READING COMPREHENSION",
          "prompt": "Both authors would most likely agree with which statement regarding historical wildfire suppression?",
          "options": [
            {
              "label": "A",
              "text": "It successfully eliminated the risk of catastrophic megafires in modern coniferous biomes."
            },
            {
              "label": "B",
              "text": "It was based on the belief that all wildfires should be extinguished immediately."
            },
            {
              "label": "C",
              "text": "It is more cost-effective than modern mechanical thinning programs."
            },
            {
              "label": "D",
              "text": "It caused irreparable damage to all human communities in the wildland-urban interface."
            }
          ],
          "correctAnswer": "B",
          "correctAnswerIndex": 1,
          "whyCorrectTitle": "Why B is Correct (Logical Derivation):",
          "whyCorrect": "Passage 1 states forestry policy operated on the premise that all wildfire was an 'unmitigated ecological catastrophe to be suppressed immediately.' Passage 2 acknowledges the historical suppression baseline by discussing efforts to restore 'historical fire return intervals' disrupted by that policy. Both agree historical policy sought immediate total suppression.",
          "distractorExplanations": [
            {
              "optionLabel": "A",
              "explanation": "Both passages argue the opposite: suppression increased modern megafire risk."
            },
            {
              "optionLabel": "C",
              "explanation": "Neither author provides financial cost comparisons for historical suppression."
            },
            {
              "optionLabel": "D",
              "explanation": "Extreme overstatement; the text does not claim historical suppression harmed all human communities."
            }
          ],
          "passageSupport": "Passage 1, sentence 1 + Passage 2, sentence 1 directly align on the historical suppression policy.",
          "eliminationShortcut": "Find the common historical baseline shared by both authors before their practical disagreement.",
          "educationalObjective": "Identify points of consensus between competing perspectives."
        }
      ]
    }
  ],
  "practiceQuestions": [
    {
      "id": "ch1-p26",
      "questionNumber": 26,
      "label": "PRACTICE QUESTION 26 — PAIRED PERSPECTIVES ON ABYSSAL POLYMETALLIC NODULE EXTRACTION",
      "prompt": "How would the author of Passage 2 most likely respond to the resource claims advanced in Passage 1?",
      "passage": {
        "title": "Paired Perspectives on Abyssal Polymetallic Nodule Extraction",
        "text": "**Passage 1**\nTransitioning global transportation away from fossil fuels requires unprecedented quantities of critical battery metals, notably nickel, cobalt, and copper. Terrestrial ore deposits are increasingly depleted, and land-based mining inflicts catastrophic deforestation and severe human rights violations in developing regions. In contrast, abyssal plains in the Clarion-Clipperton Zone hold trillions of polymetallic nodules resting unattached on the ocean floor. Harvesting these seafloor deposits offers a concentrated, high-yield supply of battery precursors with zero overburden excavation and zero deforestation.\n\n**Passage 2**\nWhile proponents portray abyssal nodule extraction as an environmentally benign alternative to terrestrial mining, the deep ocean is far from an inert wasteland. Abyssal benthic ecosystems operate on geologic timescales, where nodule accretion requires millions of years and sessile fauna rely exclusively on nodule substrates for attachment. Hydraulic scraping of the seafloor generates immense particulate sediment plumes that travel thousands of kilometers, suffocating midwater filter-feeding organisms and causing irreversible biodiversity loss. Until closed-circuit extraction technology and benthic recovery dynamics are comprehensively understood, industrial seafloor harvesting poses profound ecological risks."
      },
      "options": [
        {
          "label": "A",
          "text": "By arguing that nodule extraction introduces severe, long-lasting marine ecological disruptions that outweigh superficial advantages over terrestrial mining"
        },
        {
          "label": "B",
          "text": "By claiming that terrestrial mineral reserves of cobalt and nickel are completely infinite"
        },
        {
          "label": "C",
          "text": "By asserting that seafloor nodules can regenerate within several decades of harvesting"
        },
        {
          "label": "D",
          "text": "By demonstrating that battery electric vehicles do not require nickel or copper"
        }
      ],
      "correctAnswer": "A",
      "correctAnswerIndex": 0,
      "whyCorrectTitle": "Why A is the Best Answer:",
      "whyCorrect": "Passage 1 argues seafloor mining is superior because it avoids terrestrial deforestation. Passage 2 counters by explaining that abyssal ecosystems are extremely fragile, sediment plumes travel thousands of kilometers, and nodules take millions of years to form. Passage 2 concludes that seafloor harvesting poses profound ecological risks, directly challenging Passage 1's benign characterization (Choice A).",
      "distractorExplanations": [
        {
          "optionLabel": "B",
          "explanation": "Passage 2 does not claim terrestrial ores are infinite; it focuses on deep-sea ecological damage."
        },
        {
          "optionLabel": "C",
          "explanation": "Direct inversion; Passage 2 emphasizes that nodule accretion requires millions of years."
        },
        {
          "optionLabel": "D",
          "explanation": "Passage 2 does not challenge the battery chemistry requirements, but rather the environmental cost of extracting materials."
        }
      ],
      "passageSupport": "Passage 2: 'hydraulic scraping of the seafloor generates immense particulate sediment plumes... causing irreversible biodiversity loss.'",
      "eliminationShortcut": "Identify core divergence: Passage 1 = 'abyssal mining avoids land damage'; Passage 2 = 'abyssal mining causes severe irreversible marine damage' → Choice A.",
      "educationalObjective": "Evaluate competing paired arguments regarding industrial extraction trade-offs."
    },
    {
      "id": "ch1-p27",
      "questionNumber": 27,
      "label": "PRACTICE QUESTION 27 — PALYNOLOGICAL EVIDENCE IN EUROPEAN ELM DECLINE",
      "prompt": "What is the primary function of sentence 3 ('Their stratigraphic cores demonstrate...') in the passage?",
      "passage": {
        "title": "Palynological Evidence in European Elm Decline",
        "text": "[1] Palynologists analyzing mid-Holocene peat bogs across Northern Europe have long debated the causes of the rapid 'elm decline' that occurred ≈imately 5,000 years ago. [2] Early environmental historians attributed the abrupt drop in *Ulmus* pollen exclusively to rapid regional climate cooling. [3] Their stratigraphic cores demonstrate that cereal pollen (*Triticum*) and agricultural weeds like *Plantago lanceolata* appear in peat layers immediately preceding the collapse of elm pollen counts. [4] This palynological evidence strongly suggests that Neolithic agricultural land clearing and livestock fodder harvesting, rather than climate change alone, precipitated the decline."
      },
      "options": [
        {
          "label": "A",
          "text": "It introduces a new climate model explaining regional cooling."
        },
        {
          "label": "B",
          "text": "It presents empirical pollen data that connects Neolithic agricultural activities to the period preceding the elm decline."
        },
        {
          "label": "C",
          "text": "It proves that Neolithic farmers grew cereal crops exclusively in peat bogs."
        },
        {
          "label": "D",
          "text": "It refutes the claim that *Ulmus* pollen counts experienced any decline 5,000 years ago."
        }
      ],
      "correctAnswer": "B",
      "correctAnswerIndex": 1,
      "whyCorrectTitle": "Why B is the Best Answer:",
      "whyCorrect": "Sentence 3 describes the stratigraphic core findings showing cereal pollen and weeds appearing right before the elm pollen drop. This empirical data sets up sentence 4's conclusion that Neolithic agriculture caused the decline. Choice B correctly identifies this function.",
      "distractorExplanations": [
        {
          "optionLabel": "A",
          "explanation": "Sentence 3 introduces agricultural plant evidence, not a climate cooling model."
        },
        {
          "optionLabel": "C",
          "explanation": "Absurd misreading; pollen settled in bogs, but farmers did not grow crops inside bogs."
        },
        {
          "optionLabel": "D",
          "explanation": "Contradicts the text, which confirms the elm decline occurred."
        }
      ],
      "passageSupport": "Sentence 3 links cereal and weed pollen in stratigraphic cores to the timeline of the elm decline.",
      "eliminationShortcut": "Identify function: Sentence 3 provides the empirical data -> Sentence 4 draws the conclusion.",
      "educationalObjective": "Analyze the evidentiary function of palynological data in environmental history."
    },
    {
      "id": "ch1-p28",
      "questionNumber": 28,
      "label": "PRACTICE QUESTION 28 — QUALITY CONTROL IN THE FLORENTINE ARTE DELLA LANA",
      "prompt": "What is the primary function of sentence 2 ('The guild established rigorous specifications...') in the passage?",
      "passage": {
        "title": "Quality Control in the Florentine Arte della Lana",
        "text": "[1] In fourteenth-century Florence, the *Arte della Lana* (wool guild) operated one of Western Europe's most sophisticated industrial quality-control systems. [2] The guild established rigorous specifications for wool washing, dyeing formulas, and thread density, sending sworn inspectors to unannounced workshop audits. [3] By imposing severe fines for sub-standard weaves and stamping compliant bolts with an official lead seal, the guild eliminated information asymmetry for distant international buyers. [4] Consequently, Florentine cloth commanded a 30% price premium across Mediterranean markets, proving that institutional quality enforcement could create valuable brand equity."
      },
      "options": [
        {
          "label": "A",
          "text": "It details the specific regulatory mechanisms and auditing procedures used by the guild to enforce quality standards."
        },
        {
          "label": "B",
          "text": "It argues that Florentine workshop owners resented guild inspectors and attempted to evade audits."
        },
        {
          "label": "C",
          "text": "It proves that fourteenth-century dyeing formulas were kept secret from foreign merchants."
        },
        {
          "label": "D",
          "text": "It compares the Arte della Lana's regulations with those of silk guilds in Venice."
        }
      ],
      "correctAnswer": "A",
      "correctAnswerIndex": 0,
      "whyCorrectTitle": "Why A is the Best Answer:",
      "whyCorrect": "Sentence 1 introduces the claim that the guild had a sophisticated quality-control system. Sentence 2 explains *how* it worked (specifications for washing/dyeing and unannounced audits). Choice A accurately describes this detailed procedural function.",
      "distractorExplanations": [
        {
          "optionLabel": "B",
          "explanation": "Unmentioned workshop owner resentment or audit evasion."
        },
        {
          "optionLabel": "C",
          "explanation": "Misrepresents the text; the issue was enforcing quality specifications, not keeping formulas secret."
        },
        {
          "optionLabel": "D",
          "explanation": "Unmentioned comparison with Venetian silk guilds."
        }
      ],
      "passageSupport": "Sentence 2 provides concrete examples of specifications and auditing procedures that support Sentence 1.",
      "eliminationShortcut": "Match sentence 2 to its role: concrete procedural details explaining the general statement in sentence 1.",
      "educationalObjective": "Identify functional roles of concrete illustrative details in economic histories."
    },
    {
      "id": "ch1-p29",
      "questionNumber": 29,
      "label": "PRACTICE QUESTION 29 — KEYNESIAN MULTIPLIER AND CROWDING-OUT DYNAMICS",
      "prompt": "What is the primary function of sentences 3 and 4 in the passage?",
      "passage": {
        "title": "Keynesian Multiplier and Crowding-Out Dynamics",
        "text": "[1] Macroeconomists frequently analyze fiscal policy interventions using the concept of the expenditure multiplier. [2] According to Keynesian theory, government infrastructure spending generates a secondary chain of consumer spending that amplifies initial GDP growth. [3] However, classical economists argue that when public spending is financed through deficit bond issuance, it competes with private borrowers for loanable funds. [4] This competition bids up real interest rates, thereby 'crowding out' private capital investment and offsetting the initial fiscal stimulus."
      },
      "options": [
        {
          "label": "A",
          "text": "They provide empirical evidence proving that Keynesian spending always doubles GDP growth."
        },
        {
          "label": "B",
          "text": "They introduce the classical counter-mechanism of interest rate increases and crowding out that offsets fiscal stimulus."
        },
        {
          "label": "C",
          "text": "They explain how bond markets prevent inflation in developing nations."
        },
        {
          "label": "D",
          "text": "They suggest that government infrastructure spending requires no financial borrowing."
        }
      ],
      "correctAnswer": "B",
      "correctAnswerIndex": 1,
      "whyCorrectTitle": "Why B is the Best Answer:",
      "whyCorrect": "Sentence 2 presents the Keynesian multiplier argument. Sentences 3 and 4 pivot ('However') to explain the classical counter-argument: deficit borrowing raises interest rates and crowds out private investment. Choice B correctly describes this counter-mechanistic role.",
      "distractorExplanations": [
        {
          "optionLabel": "A",
          "explanation": "Contradicts sentences 3 and 4, which challenge the Keynesian multiplier claim."
        },
        {
          "optionLabel": "C",
          "explanation": "Unmentioned claim about inflation in developing nations."
        },
        {
          "optionLabel": "D",
          "explanation": "Contradicts sentence 3, which explicitly mentions financing spending through 'deficit bond issuance'."
        }
      ],
      "passageSupport": "Sentences 3 and 4 present the classical 'crowding-out' counter-theory opposing Keynesian spending.",
      "eliminationShortcut": "Look for the pivot 'However, classical economists argue...' -> introduces a counter-mechanism.",
      "educationalObjective": "Analyze paragraph structure presenting opposing economic theories."
    },
    {
      "id": "ch1-p30",
      "questionNumber": 30,
      "label": "PRACTICE QUESTION 30 — POST-WWII BRITISH BRUTALISM",
      "prompt": "What is the primary function of sentence 3 ('Civic architects utilized visible wooden casting marks...') in the passage?",
      "passage": {
        "title": "Post-WWII British Brutalism",
        "text": "[1] In post-World War II Britain, Brutalist architecture emerged not merely as a cost-effective rebuilding strategy, but as an explicit ideological statement. [2] Rejecting the ornate stone facades of pre-war imperial monuments, Brutalist architects embraced exposed raw concrete (*béton brut*). [3] Civic architects utilized visible wooden casting marks on raw concrete walls to expose the physical labor of construction, intending to symbolize democratic transparency and unadorned honesty. [4] Although later public reaction often dismissed Brutalist public housing as cold and imposing, its original advocates viewed raw concrete as an unpretentious material for a modern welfare state."
      },
      "options": [
        {
          "label": "A",
          "text": "It explains why post-war Britain lacked financial resources to import natural stone."
        },
        {
          "label": "B",
          "text": "It demonstrates that Brutalist buildings were structurally unsound due to poor concrete casting."
        },
        {
          "label": "C",
          "text": "It explains how a specific aesthetic detail—visible casting marks—was intended to convey political values like democratic transparency."
        },
        {
          "label": "D",
          "text": "It refutes the claim that raw concrete was used in public housing developments."
        }
      ],
      "correctAnswer": "C",
      "correctAnswerIndex": 2,
      "whyCorrectTitle": "Why C is the Best Answer:",
      "whyCorrect": "Sentence 3 connects a concrete visual detail (visible wooden casting marks on raw concrete) to its intended ideological meaning (symbolizing democratic transparency and labor). Choice C accurately states this symbolic explanatory function.",
      "distractorExplanations": [
        {
          "optionLabel": "A",
          "explanation": "Unmentioned claim about lacking resources to import stone."
        },
        {
          "optionLabel": "B",
          "explanation": "Misinterprets casting marks as structural flaws rather than intentional aesthetic choices."
        },
        {
          "optionLabel": "D",
          "explanation": "Contradicts sentence 4, which mentions raw concrete in public housing."
        }
      ],
      "passageSupport": "Sentence 3 links visible casting marks on concrete to democratic transparency and unadorned honesty.",
      "eliminationShortcut": "Connect the specific visual feature (casting marks) to its symbolic meaning (democratic transparency).",
      "educationalObjective": "Analyze how architectural details function to express political and cultural values."
    }
  ]
};
