import { ReadingModule } from './readingTypes';

export const READING_CH3_BLOCK_4: ReadingModule = {
  "moduleNumber": 4,
  "id": "reading-ch3-block4",
  "chapterTitle": "CHAPTER 3 — VOCABULARY IN CONTEXT",
  "moduleTitle": "CATEGORY MATCHING & ONTOLOGICAL CONSTRAINTS",
  "endLabel": "MODULE COMPLETE",
  "sections": [
    {
      "id": "ch3-b4-sec1",
      "sectionNumber": "1",
      "sectionTitle": "THE ONTOLOGICAL CATEGORY MATCHING RULE",
      "content": [
        "Every tested word belongs to a specific conceptual category (e.g., *Concrete Object, Abstract Relationship, Dynamic Action, Static Condition, Quantitative Value*).",
        "**The Ontological Imperative**:\n> The correct synonym MUST belong to the exact same ontological category as the target concept. Reject choices that fit the general theme but swap categories (e.g., replacing an abstract relationship with a physical object)."
      ]
    },
    {
      "id": "ch3-b4-sec2",
      "sectionNumber": "2",
      "sectionTitle": "THE 5 ONTOLOGICAL DOMAINS",
      "content": [
        "1. **Abstract Relationship** (e.g., *correlation*, *precedence*): Matches logical connections. Reject: physical locations, emotional reactions.\n2. **Epistemic Action** (e.g., *postulate*, *concede*): Matches mental processes or argument moves. Reject: physical movements.\n3. **Empirical Property** (e.g., *volatile*, *plastic*): Matches observational physical/systemic characteristics. Reject: moral valuations.\n4. **Systemic Process** (e.g., *stagnate*, *regulate*): Matches structural/organizational shifts. Reject: personal emotions.\n5. **Quantitative Degree** (e.g., *marginal*, *pronounced*): Matches magnitude/proportional scale. Reject: moral qualities, aesthetics."
      ]
    },
    {
      "id": "ch3-b4-sec3",
      "sectionNumber": "3",
      "sectionTitle": "WORKED CASE STUDY — QUANTUM COMPUTING & ALGORITHMIC STABILITY",
      "content": [
        "Analyze how category matching eliminates misaligned distractors for 'coarse' and 'robust'."
      ],
      "passage": {
        "title": "Quantum Decherence & Error-Mitigation Protocols",
        "text": "[1] Quantum information processing promises exponential speedups for specialized matrix calculations, but implementation remains hampered by environmental decoherence. Physical qubits interact continuously with thermal noise, causing superpositions to decay rapidly. Early theoretical error models used coarse ≈imations, treating phase errors as uniform background noise across all logic gates.\n\n[2] Contemporary quantum error correction replaces these simplified models with dynamic, gate-specific calibration. By applying real-time feedback loops, experimentalists establish robust error thresholds capable of sustaining fault-tolerant computation even under fluctuating cryogenic temperatures."
      },
      "questions": [
        {
          "id": "ch3-w7",
          "questionNumber": 7,
          "label": "WORKED EXAMPLE 7 — QUANTUM ERROR MODELING & ALGORITHMIC GRANULARITY",
          "prompt": "As used in paragraph 1, 'coarse' most nearly means:",
          "passage": {
            "title": "Quantum Error Modeling & Algorithmic Granularity",
            "text": "[1] Quantum information processing promises exponential speedups for specialized matrix calculations, but implementation remains hampered by environmental decoherence. Physical qubits interact continuously with thermal noise, causing superpositions to decay rapidly. Early theoretical error models used coarse ≈imations, treating phase errors as uniform background noise across all logic gates."
          },
          "options": [
            {
              "label": "A",
              "text": "rough in physical surface texture"
            },
            {
              "label": "B",
              "text": "lacking fine granularity or precision"
            },
            {
              "label": "C",
              "text": "vulgar or socially offensive"
            },
            {
              "label": "D",
              "text": "physically heavy"
            }
          ],
          "correctAnswer": "B",
          "correctAnswerIndex": 1,
          "whyCorrectTitle": "Why B is Correct (Logical Derivation):",
          "whyCorrect": "Paragraph 1 refers to 'coarse ≈imations, treating phase errors as uniform background noise.' The object modified is '≈imations' (an abstract mathematical construct). Therefore, 'coarse' must belong to the abstract domain, meaning lacking precision, unrefined, or lacking fine granularity.",
          "distractorExplanations": [
            {
              "optionLabel": "A",
              "explanation": "Literal physical texture definition (e.g., coarse sandpaper); fails the abstract mathematical context."
            },
            {
              "optionLabel": "C",
              "explanation": "Moral/behavioral definition (coarse behavior); completely irrelevant in quantum physics."
            },
            {
              "optionLabel": "D",
              "explanation": "Physical mass distortion."
            }
          ],
          "passageSupport": "Paragraph 1: 'coarse ≈imations, treating phase errors as uniform background noise...'",
          "eliminationShortcut": "Category rule: Adjective modifying '≈imations' MUST mean 'lacking precision / unrefined' (Abstract Domain).",
          "educationalObjective": "Execute category matching to eliminate physical texture distractors when modifying abstract mathematical concepts."
        },
        {
          "id": "ch3-w8",
          "questionNumber": 8,
          "label": "WORKED EXAMPLE 8 — CRYOGENIC FAULT-TOLERANCE & GATE CALIBRATION",
          "prompt": "In paragraph 2, the word 'robust' most nearly means:",
          "passage": {
            "title": "Cryogenic Fault-Tolerance & Gate Calibration",
            "text": "[1] Contemporary quantum error correction replaces early simplified models with dynamic, gate-specific calibration. By applying real-time feedback loops, experimentalists establish robust error thresholds capable of sustaining fault-tolerant computation even under fluctuating cryogenic temperatures."
          },
          "options": [
            {
              "label": "A",
              "text": "physically muscular and athletic"
            },
            {
              "label": "B",
              "text": "resilient and capable of withstanding disruption"
            },
            {
              "label": "C",
              "text": "boisterous and loud"
            },
            {
              "label": "D",
              "text": "excessively expensive"
            }
          ],
          "correctAnswer": "B",
          "correctAnswerIndex": 1,
          "whyCorrectTitle": "Why B is Correct (Logical Derivation):",
          "whyCorrect": "The text describes 'robust error thresholds capable of sustaining fault-tolerant computation even under fluctuating cryogenic temperatures.' In engineering and data science, 'robust' describes a system, threshold, or algorithm that remains reliable and resilient despite environmental fluctuations.",
          "distractorExplanations": [
            {
              "optionLabel": "A",
              "explanation": "Human physical definition (a robust athlete); inapplicable to an error threshold."
            },
            {
              "optionLabel": "C",
              "explanation": "Behavioral/personality definition (robust laughter)."
            },
            {
              "optionLabel": "D",
              "explanation": "Financial distortion."
            }
          ],
          "passageSupport": "Paragraph 1: 'robust error thresholds capable of sustaining fault-tolerant computation even under fluctuating cryogenic temperatures.'",
          "eliminationShortcut": "Domain match: 'robust error thresholds capable of sustaining computation' = resilient / stable under disruption.",
          "educationalObjective": "Identify engineering and computational usages of 'robust' as systemic resilience."
        }
      ]
    },
    {
      "id": "ch3-b4-sec4",
      "sectionNumber": "4",
      "sectionTitle": "MASTER TAKEAWAY & SPEED HEURISTIC",
      "content": [
        "Takeaway:\n> Match the ontological domain. If the target word describes an abstract logical relationship, eliminate every choice representing a physical object, emotional state, or moral valuation."
      ]
    }
  ],
  "practiceQuestions": [
    {
      "id": "ch3-p19",
      "questionNumber": 19,
      "label": "PRACTICE QUESTION 19 — COGNITIVE ADAPTATION IN ANIMAL INTELLIGENCE",
      "prompt": "The word 'rudimentary' most nearly means:",
      "passage": {
        "title": "Cognitive Adaptation in Animal Intelligence",
        "text": "[1] Early studies of animal intelligence often attempted to rank species according to a single measure of cognitive ability. More recent research has challenged this approach, not because comparison is inherently useless, but because intelligence may be expressed through highly specialized capacities.\n\n[2] A crow's ability to manipulate tools, for example, cannot be straightforwardly evaluated against a dolphin's capacity for complex social coordination by placing both abilities on a single scale. The problem is therefore not that one species must be declared universally 'more intelligent' than another; rather, the category itself may be too coarse to capture the diversity of cognitive adaptation."
      },
      "options": [
        {
          "label": "A",
          "text": "rough and lacking sufficient precision"
        },
        {
          "label": "B",
          "text": "morally offensive"
        },
        {
          "label": "C",
          "text": "physically large"
        },
        {
          "label": "D",
          "text": "ancient and outdated"
        }
      ],
      "correctAnswer": "A",
      "correctAnswerIndex": 0,
      "whyCorrectTitle": "Why A is Correct (Logical Derivation):",
      "whyCorrect": "The text explains that placing specialized cognitive capacities on a single scale makes the category 'too coarse to capture the diversity of cognitive adaptation.' In abstract research contexts, a 'coarse' metric or category is broad, unrefined, and lacking in sufficient precision.",
      "distractorExplanations": [
        {
          "optionLabel": "B",
          "explanation": "Moral definition of coarse (vulgar); completely irrelevant in cognitive science."
        },
        {
          "optionLabel": "C",
          "explanation": "Literal physical definition; an abstract cognitive category has no physical size."
        },
        {
          "optionLabel": "D",
          "explanation": "Temporal trap; while early studies are old, 'coarse' describes the lack of analytical granularity."
        }
      ],
      "passageSupport": "Paragraph 2: 'placing both abilities on a single scale... the category itself may be too coarse to capture the diversity of cognitive adaptation.'",
      "eliminationShortcut": "Category match clue: 'category too coarse to capture diversity' -> coarse = lacking fine precision.",
      "educationalObjective": "Master abstract scientific usages of 'coarse' denoting broad or imprecise categories."
    },
    {
      "id": "ch3-p20",
      "questionNumber": 20,
      "label": "PRACTICE QUESTION 20 — PUBLIC TRANSPORTATION SURVEY QUALIFICATIONS",
      "prompt": "Here, 'delineate' most nearly means:",
      "passage": {
        "title": "Public Transportation Survey Qualifications",
        "text": "[1] Although the survey revealed a strong overall preference for public transportation, regional differences qualify that conclusion."
      },
      "options": [
        {
          "label": "A",
          "text": "make officially eligible"
        },
        {
          "label": "B",
          "text": "modify or limit"
        },
        {
          "label": "C",
          "text": "improve substantially"
        },
        {
          "label": "D",
          "text": "confirm completely"
        }
      ],
      "correctAnswer": "B",
      "correctAnswerIndex": 1,
      "whyCorrectTitle": "Why B is Correct (Logical Derivation):",
      "whyCorrect": "The sentence uses 'Although' to signal a contrast: despite strong overall support, 'regional differences qualify that conclusion.' In rhetorical and analytical writing, to qualify a conclusion means to limit, modify, or add conditions to it.",
      "distractorExplanations": [
        {
          "optionLabel": "A",
          "explanation": "Everyday employment definition (getting qualified for a job)."
        },
        {
          "optionLabel": "C",
          "explanation": "Positive distortion; qualifying a conclusion restricts its scope rather than enhancing its quality."
        },
        {
          "optionLabel": "D",
          "explanation": "Direct antonym; confirming completely would mean unreserved support, ignoring regional variations."
        }
      ],
      "passageSupport": "Paragraph 1: 'Although the survey revealed a strong overall preference... regional differences qualify that conclusion.'",
      "eliminationShortcut": "Classic SAT rule: 'qualify a conclusion' = modify / limit its scope.",
      "educationalObjective": "Recognize 'qualify' as a fundamental rhetorical verb denoting scope restriction."
    },
    {
      "id": "ch3-p21",
      "questionNumber": 21,
      "label": "PRACTICE QUESTION 21 — DISTRIBUTED NATURE OF TECHNOLOGICAL CHANGE",
      "prompt": "The word 'distributed' most nearly means:",
      "passage": {
        "title": "Distributed Nature of Technological Change",
        "text": "[1] Technological historians have increasingly questioned narratives that portray invention as the work of isolated geniuses producing sudden breakthroughs. Such narratives can be attractive because they impose a clear sequence on events: a problem appears, an inventor identifies the solution, and society is transformed.\n\n[2] Actual technological development is often less dramatic. Innovations may depend on networks of technicians, previous experiments, financial institutions, manufacturing practices, and users who adapt an invention in ways its original designers did not anticipate. The 'lone inventor' narrative is therefore not entirely false, but it can obscure the distributed nature of technological change."
      },
      "options": [
        {
          "label": "A",
          "text": "spread among multiple participants or factors"
        },
        {
          "label": "B",
          "text": "sent to distant locations"
        },
        {
          "label": "C",
          "text": "mathematically divided equally"
        },
        {
          "label": "D",
          "text": "officially announced"
        }
      ],
      "correctAnswer": "A",
      "correctAnswerIndex": 0,
      "whyCorrectTitle": "Why A is Correct (Logical Derivation):",
      "whyCorrect": "Paragraph 2 contrasts the 'lone inventor' with innovation depending on 'networks of technicians, previous experiments, financial institutions, manufacturing practices, and users.' Thus, 'distributed' describes a process spread among multiple participants and contributing factors.",
      "distractorExplanations": [
        {
          "optionLabel": "B",
          "explanation": "Physical shipping/postal definition."
        },
        {
          "optionLabel": "C",
          "explanation": "Strict mathematical division trap; equal division is not required, only multi-agent involvement."
        },
        {
          "optionLabel": "D",
          "explanation": "Media/announcement trap."
        }
      ],
      "passageSupport": "Paragraph 2: 'Innovations may depend on networks of technicians, previous experiments... obscure the distributed nature of technological change.'",
      "eliminationShortcut": "Antonym contrast clue: 'lone inventor' vs. 'distributed nature' -> distributed = spread across multiple participants.",
      "educationalObjective": "Identify systemic descriptions of multi-agent historical development."
    },
    {
      "id": "ch3-p22",
      "questionNumber": 22,
      "label": "PRACTICE QUESTION 22 — CORRELATION VS CAUSATION IN ECONOMICS",
      "prompt": "The word 'mechanism' most nearly means:",
      "passage": {
        "title": "Correlation vs Causation in Economics",
        "text": "[1] Economists are often careful to distinguish correlation from causation. Two variables may change together without one producing the other. An increase in household income, for example, may occur alongside increased consumer spending, but the relationship becomes analytically more complicated when both are influenced by a third factor such as broader economic growth.\n\n[2] The existence of a correlation may therefore provide a useful starting point for investigation, but it does not by itself establish the mechanism responsible for the observed relationship."
      },
      "options": [
        {
          "label": "A",
          "text": "physical device"
        },
        {
          "label": "B",
          "text": "process or causal pathway producing an effect"
        },
        {
          "label": "C",
          "text": "government regulation"
        },
        {
          "label": "D",
          "text": "mathematical formula"
        }
      ],
      "correctAnswer": "B",
      "correctAnswerIndex": 1,
      "whyCorrectTitle": "Why B is Correct (Logical Derivation):",
      "whyCorrect": "Paragraph 2 notes that while correlation shows two variables changing together, it does not establish 'the mechanism responsible for the observed relationship.' In economics and science, 'mechanism' refers to the underlying causal pathway or process that brings about an effect.",
      "distractorExplanations": [
        {
          "optionLabel": "A",
          "explanation": "Literal mechanical definition (a clockwork or engine part)."
        },
        {
          "optionLabel": "C",
          "explanation": "Policy shift trap; mechanism in causal analysis is abstract, not a statute."
        },
        {
          "optionLabel": "D",
          "explanation": "Formula trap; a formula calculates values but does not constitute the physical/economic cause itself."
        }
      ],
      "passageSupport": "Paragraph 2: 'distinguish correlation from causation... does not by itself establish the mechanism responsible for the observed relationship.'",
      "eliminationShortcut": "Domain rule: In scientific/economic causation, 'mechanism' ALWAYS means 'causal pathway / process.'",
      "educationalObjective": "Master abstract definitions of 'mechanism' in empirical research methodology."
    },
    {
      "id": "ch3-p23",
      "questionNumber": 23,
      "label": "PRACTICE QUESTION 23 — SCOPE OF SHORT-TERM LOCAL STUDIES",
      "prompt": "'Scope' most nearly means:",
      "passage": {
        "title": "Scope of Short-Term Local Studies",
        "text": "[1] Because the study examined only one city over a short period, its conclusions have limited scope."
      },
      "options": [
        {
          "label": "A",
          "text": "influence"
        },
        {
          "label": "B",
          "text": "range or extent of application"
        },
        {
          "label": "C",
          "text": "certainty"
        },
        {
          "label": "D",
          "text": "importance"
        }
      ],
      "correctAnswer": "B",
      "correctAnswerIndex": 1,
      "whyCorrectTitle": "Why B is Correct (Logical Derivation):",
      "whyCorrect": "The cause given is 'examined only one city over a short period.' The consequence is 'limited scope.' Scope refers to the breadth, reach, range, or extent of applicability of research conclusions.",
      "distractorExplanations": [
        {
          "optionLabel": "A",
          "explanation": "Conflates general impact or influence with geographical/temporal breadth."
        },
        {
          "optionLabel": "C",
          "explanation": "Accuracy trap; a study can be highly certain for that one city while having limited broader scope."
        },
        {
          "optionLabel": "D",
          "explanation": "Value judgment trap; limited scope does not make a study unimportant for its local target."
        }
      ],
      "passageSupport": "Paragraph 1: 'Because the study examined only one city over a short period, its conclusions have limited scope.'",
      "eliminationShortcut": "Immediate cause clue: 'one city / short period' -> bounds the 'range or extent of application.'",
      "educationalObjective": "Identify research vocabulary describing generalizability and boundary limits."
    },
    {
      "id": "ch3-p24",
      "questionNumber": 24,
      "label": "PRACTICE QUESTION 24 — EVALUATION OF CLIMATE MODEL DISCREPANCIES",
      "prompt": "The word 'invalidate' most nearly means:",
      "passage": {
        "title": "Evaluation of Climate Model Discrepancies",
        "text": "[1] Climate models are sometimes criticized for producing projections that differ from observed conditions in particular regions. Such discrepancies are important, but they do not necessarily invalidate the models as a whole.\n\n[2] A model is not intended to reproduce every local event with perfect precision; rather, its usefulness may lie in representing broader patterns and estimating how those patterns respond to changing conditions. The appropriate evaluation of a model therefore depends on the question being asked. A model that performs poorly as a predictor of a specific local outcome may nevertheless remain valuable for analyzing long-term global trends."
      },
      "options": [
        {
          "label": "A",
          "text": "prove completely useless or false"
        },
        {
          "label": "B",
          "text": "weaken the validity of or render void"
        },
        {
          "label": "C",
          "text": "prevent from being published"
        },
        {
          "label": "D",
          "text": "make more complicated"
        }
      ],
      "correctAnswer": "B",
      "correctAnswerIndex": 1,
      "whyCorrectTitle": "Why B is Correct (Logical Derivation):",
      "whyCorrect": "Paragraph 1 argues that local discrepancies do not 'invalidate the models as a whole,' explaining that models remain valuable for long-term global trends. To invalidate means to render null, void, or destroy the scientific validity of a model.",
      "distractorExplanations": [
        {
          "optionLabel": "A",
          "explanation": "Slightly extreme paraphrase; while close, option B captures the precise methodological meaning of invalidating a model."
        },
        {
          "optionLabel": "C",
          "explanation": "Editorial/publishing trap; invalidating a theory is about its logical truth, not journal submission."
        },
        {
          "optionLabel": "D",
          "explanation": "Distortion; discrepancies make models harder to evaluate, but invalidation means disproving."
        }
      ],
      "passageSupport": "Paragraph 1: 'Such discrepancies are important, but they do not necessarily invalidate the models as a whole.'",
      "eliminationShortcut": "Methodological term: 'invalidate a model' = destroy its scientific validity / render void.",
      "educationalObjective": "Distinguish partial empirical discrepancies from total theoretical invalidation."
    }
  ]
};

export const READING_CH3_BLOCK_5: ReadingModule = {
  "moduleNumber": 5,
  "id": "reading-ch3-block5",
  "chapterTitle": "CHAPTER 3 — VOCABULARY IN CONTEXT",
  "moduleTitle": "CONNOTATION, TONE, & REGISTER CONSTRAINTS",
  "endLabel": "MODULE COMPLETE",
  "sections": [
    {
      "id": "ch3-b5-sec1",
      "sectionNumber": "1",
      "sectionTitle": "CONNOTATIVE POLARITY & ACADEMIC RESTRAINT",
      "content": [
        "SAT passages operate within formal, scholarly registers. Avoid these **Three Polarity Traps**:",
        "- **1. The Hyperbolic Trap**: Selecting emotionally exaggerated synonyms (e.g., *abhorrent*, *flawless*) when the author uses qualified, neutral prose.\n- **2. The Pejorative Misattribution**: Choosing negative, moralizing terms for purely diagnostic statements (e.g., confusing *incomplete* with *fraudulent*).\n- **3. Tone Inversion**: Missing subtle irony or academic understated criticism (e.g., *'ambitious but unburdened by empirical data'*)."
      ]
    },
    {
      "id": "ch3-b5-sec2",
      "sectionNumber": "2",
      "sectionTitle": "AUTHORIAL COMMITMENT & DEGREE OF CERTAINTY",
      "content": [
        "Academic authors carefully calibrate their degree of commitment to claims:",
        "**The Scale of Authorial Commitment**:\n- **Speculative / Weak**: *suggest, hint, postulate, imply*\n- **Moderate / Conditional**: *indicate, argue, propose, correlate*\n- **Definitive / Strong**: *demonstrate, establish, substantiate, prove*",
        "If a text states that preliminary data *'suggest'* a link, reject choices claiming they *'prove'* or *'dictate'* the outcome."
      ]
    },
    {
      "id": "ch3-b5-sec3",
      "sectionNumber": "3",
      "sectionTitle": "WORKED CASE STUDY — CLINICAL ONCOLOGY & PHARMACOLOGICAL ASSAYS",
      "content": [
        "Observe how academic neutrality and qualified degrees of certainty govern the correct interpretations of 'tentative' and 'advance'."
      ],
      "passage": {
        "title": "Targeted Kinase Inhibitors & Clinical Trial Protocols",
        "text": "[1] Early phase clinical trials evaluating dual-action kinase inhibitors yielded promising initial tumor regressions in a subset of refractory melanoma patients. Principal investigators were careful, however, to describe these preliminary outcomes as tentative. Because tumor microenvironments frequently evolve secondary resistance mutations within six months, longitudinal efficacy cannot be established prematurely.\n\n[2] Rather than claiming a definitive therapeutic breakthrough, the oncology team chose to advance a more restrained hypothesis: the dual inhibitor demonstrates potent immediate cytostatic activity, but durable remission will require synergistic combination therapies."
      },
      "questions": [
        {
          "id": "ch3-w9",
          "questionNumber": 9,
          "label": "WORKED EXAMPLE 9 — TARGETED KINASE INHIBITORS & PRELIMINARY ASSAYS",
          "prompt": "As used in paragraph 1, 'tentative' most nearly means:",
          "passage": {
            "title": "Targeted Kinase Inhibitors & Preliminary Assays",
            "text": "[1] Early phase clinical trials evaluating dual-action kinase inhibitors yielded promising initial tumor regressions in a subset of refractory melanoma patients. Principal investigators were careful, however, to describe these preliminary outcomes as tentative. Because tumor microenvironments frequently evolve secondary resistance mutations within six months, longitudinal efficacy cannot be established prematurely."
          },
          "options": [
            {
              "label": "A",
              "text": "unskilled or amateurish"
            },
            {
              "label": "B",
              "text": "provisional and subject to future verification"
            },
            {
              "label": "C",
              "text": "hesitant and fearful"
            },
            {
              "label": "D",
              "text": "completely ineffective"
            }
          ],
          "correctAnswer": "B",
          "correctAnswerIndex": 1,
          "whyCorrectTitle": "Why B is Correct (Logical Derivation):",
          "whyCorrect": "The paragraph explains that researchers characterized preliminary outcomes as 'tentative' because 'longitudinal efficacy cannot be established prematurely' and secondary resistance may develop. In scientific research, 'tentative' means provisional, preliminary, or open to revision upon further empirical testing.",
          "distractorExplanations": [
            {
              "optionLabel": "A",
              "explanation": "Pejorative trap; implies incompetence rather than methodological caution."
            },
            {
              "optionLabel": "C",
              "explanation": "Emotional/psychological definition (timid/fearful); out of place in formal scientific reporting."
            },
            {
              "optionLabel": "D",
              "explanation": "Direct contradiction; the drug did produce 'promising initial tumor regressions.'"
            }
          ],
          "passageSupport": "Paragraph 1: 'careful, however, to describe these preliminary outcomes as tentative. Because... longitudinal efficacy cannot be established prematurely.'",
          "eliminationShortcut": "Match tone and register: 'preliminary outcomes... cannot be established prematurely' = 'provisional / subject to verification'.",
          "educationalObjective": "Identify scientific hedging and qualified academic descriptions of preliminary data."
        },
        {
          "id": "ch3-w10",
          "questionNumber": 10,
          "label": "WORKED EXAMPLE 10 — COMBINATION THERAPIES & MEDICAL HYPOTHESES",
          "prompt": "In paragraph 1, the phrase 'to advance' most nearly means to:",
          "passage": {
            "title": "Combination Therapies & Medical Hypotheses",
            "text": "[1] Rather than claiming a definitive therapeutic breakthrough, the oncology team chose to advance a more restrained hypothesis: the dual inhibitor demonstrates potent immediate cytostatic activity, but durable remission will require synergistic combination therapies."
          },
          "options": [
            {
              "label": "A",
              "text": "physically move forward into a space"
            },
            {
              "label": "B",
              "text": "propose or put forward for consideration"
            },
            {
              "label": "C",
              "text": "loan funds prior to a deadline"
            },
            {
              "label": "D",
              "text": "accelerate the schedule of an event"
            }
          ],
          "correctAnswer": "B",
          "correctAnswerIndex": 1,
          "whyCorrectTitle": "Why B is Correct (Logical Derivation):",
          "whyCorrect": "The object of 'to advance' is 'a more restrained hypothesis.' In intellectual and academic prose, to advance a hypothesis, argument, or theory means to propose it, submit it, or put it forward for scholarly examination.",
          "distractorExplanations": [
            {
              "optionLabel": "A",
              "explanation": "Literal physical movement."
            },
            {
              "optionLabel": "C",
              "explanation": "Financial definition (cash advance)."
            },
            {
              "optionLabel": "D",
              "explanation": "Temporal rescheduling meaning."
            }
          ],
          "passageSupport": "Paragraph 1: 'the oncology team chose to advance a more restrained hypothesis: the dual inhibitor demonstrates potent immediate cytostatic activity...'",
          "eliminationShortcut": "Look at the direct object: 'advance a hypothesis' = 'propose / put forward'.",
          "educationalObjective": "Recognize academic reporting verbs used to introduce scholarly claims and hypotheses."
        }
      ]
    },
    {
      "id": "ch3-b5-sec4",
      "sectionNumber": "4",
      "sectionTitle": "MASTER TAKEAWAY & SPEED HEURISTIC",
      "content": [
        "Summary Rule:\n> Match the emotional calibration and epistemic certainty of the passage. Scholarly authors hedge and qualify; reject exaggerated, emotive distractors."
      ]
    }
  ],
  "practiceQuestions": [
    {
      "id": "ch3-p25",
      "questionNumber": 25,
      "label": "PRACTICE QUESTION 25 — CLINICAL TRIALS VS EVERYDAY MEDICAL CARE",
      "prompt": "As used in the passage, the word 'nuances' most nearly means:",
      "passage": {
        "title": "Clinical Trials vs Everyday Medical Care",
        "text": "[1] Medical researchers increasingly recognize that a treatment's effectiveness under carefully controlled experimental conditions does not automatically determine its effectiveness in ordinary clinical practice. Participants in clinical trials may receive unusually frequent monitoring, carefully standardized instructions, and access to resources that are unavailable in less controlled settings.\n\n[2] The distinction does not diminish the value of experimental research; rather, it qualifies the conclusions that can reasonably be drawn from it. A treatment may perform exceptionally well under ideal conditions while producing more variable results when introduced into the complex circumstances of everyday medical care."
      },
      "options": [
        {
          "label": "A",
          "text": "makes officially eligible"
        },
        {
          "label": "B",
          "text": "limits, modifies, or restricts"
        },
        {
          "label": "C",
          "text": "strengthens completely"
        },
        {
          "label": "D",
          "text": "explains in technical language"
        }
      ],
      "correctAnswer": "B",
      "correctAnswerIndex": 1,
      "whyCorrectTitle": "Why B is Correct (Logical Derivation):",
      "whyCorrect": "The text explains that ideal experimental conditions differ from ordinary care. This distinction 'qualifies the conclusions that can reasonably be drawn.' Here, 'qualifies' means placing boundaries, caveats, or restrictions on the conclusions.",
      "distractorExplanations": [
        {
          "optionLabel": "A",
          "explanation": "Everyday employment/certification trap."
        },
        {
          "optionLabel": "C",
          "explanation": "Direct antonym; qualifying conclusions restricts them rather than making them unconditionally stronger."
        },
        {
          "optionLabel": "D",
          "explanation": "Jargon trap; qualifying is about scope of claim, not language complexity."
        }
      ],
      "passageSupport": "Paragraph 2: 'does not diminish the value of experimental research; rather, it qualifies the conclusions that can reasonably be drawn from it.'",
      "eliminationShortcut": "Standard SAT rule: 'qualify conclusions' = limit / modify / restrict claim scope.",
      "educationalObjective": "Master 'qualify' as a key SAT vocabulary term for claim modification."
    },
    {
      "id": "ch3-p26",
      "questionNumber": 26,
      "label": "PRACTICE QUESTION 26 — HISTORICAL METHODOLOGY AND EVIDENCE",
      "prompt": "The word 'instead' primarily serves to:",
      "passage": {
        "title": "Historical Methodology and Evidence",
        "text": "[1] The difficulty was not that historians lacked evidence; rather, they lacked a consistent method for interpreting the evidence."
      },
      "options": [
        {
          "label": "A",
          "text": "introduce an example"
        },
        {
          "label": "B",
          "text": "strengthen an earlier claim"
        },
        {
          "label": "C",
          "text": "replace an inaccurate characterization with a more precise one"
        },
        {
          "label": "D",
          "text": "provide evidence against the author's argument"
        }
      ],
      "correctAnswer": "C",
      "correctAnswerIndex": 2,
      "whyCorrectTitle": "Why C is Correct (Logical Derivation):",
      "whyCorrect": "The sentence uses the 'not X; rather Y' structure: 'not that historians lacked evidence; rather, they lacked a consistent method.' 'Rather' pivots from a dismissed misconception (lacking evidence) to the true explanation (lacking method).",
      "distractorExplanations": [
        {
          "optionLabel": "A",
          "explanation": "Misidentifies the Correction Anchor as an exemplification signal."
        },
        {
          "optionLabel": "B",
          "explanation": "Incorrect function; 'rather' replaces the first claim rather than reinforcing it."
        },
        {
          "optionLabel": "D",
          "explanation": "Contradiction trap; the second clause IS the author's thesis, not evidence against it."
        }
      ],
      "passageSupport": "Paragraph 1: 'not that historians lacked evidence; rather, they lacked a consistent method...'",
      "eliminationShortcut": "Correction Anchor Formula: 'Not X; rather Y' = replace inaccurate claim X with precise claim Y.",
      "educationalObjective": "Identify the rhetorical function of 'rather' as a Correction Pivot."
    },
    {
      "id": "ch3-p27",
      "questionNumber": 27,
      "label": "PRACTICE QUESTION 27 — AGGREGATE ECONOMIC MEASURES & HOUSEHOLD INCOME",
      "prompt": "The phrase 'should not be treated as complete descriptions' primarily serves to:",
      "passage": {
        "title": "Aggregate Economic Measures & Household Income",
        "text": "[1] National economic statistics can create the impression that prosperity is distributed uniformly across a population. An increase in average income, however, does not reveal how that increase is allocated among households.\n\n[2] In some circumstances, national averages may rise substantially even while the incomes of large portions of the population change very little. Aggregate measures are therefore useful indicators of broad economic movement, but they should not be treated as complete descriptions of economic experience."
      },
      "options": [
        {
          "label": "A",
          "text": "reject the usefulness of economic statistics"
        },
        {
          "label": "B",
          "text": "limit the conclusion that can be drawn from aggregate measures"
        },
        {
          "label": "C",
          "text": "introduce a new method of calculating income"
        },
        {
          "label": "D",
          "text": "demonstrate that national averages are mathematically incorrect"
        }
      ],
      "correctAnswer": "B",
      "correctAnswerIndex": 1,
      "whyCorrectTitle": "Why B is Correct (Logical Derivation):",
      "whyCorrect": "Paragraph 2 explicitly states aggregate measures 'are useful indicators,' but cautions that they 'should not be treated as complete descriptions.' This serves to bound or limit the analytical conclusions derived from aggregate metrics.",
      "distractorExplanations": [
        {
          "optionLabel": "A",
          "explanation": "Extreme rejection trap; the text explicitly states statistics ARE 'useful indicators.'"
        },
        {
          "optionLabel": "C",
          "explanation": "Extraneous proposal trap; no new mathematical calculation is proposed."
        },
        {
          "optionLabel": "D",
          "explanation": "Mathematical error trap; averages are mathematically correct, but conceptually incomplete."
        }
      ],
      "passageSupport": "Paragraph 2: 'useful indicators of broad economic movement, but they should not be treated as complete descriptions...'",
      "eliminationShortcut": "Concession + Qualification: 'useful, but not complete' = limits the conclusions drawn.",
      "educationalObjective": "Identify authorial qualification of statistical metrics."
    },
    {
      "id": "ch3-p28",
      "questionNumber": 28,
      "label": "PRACTICE QUESTION 28 — URBAN TREE-PLANTING AND CARBON ABSORPTION",
      "prompt": "The word 'Nevertheless' primarily serves to:",
      "passage": {
        "title": "Urban Tree-Planting and Carbon Absorption",
        "text": "[1] Critics of urban tree-planting initiatives sometimes argue that such programs cannot meaningfully address climate change because the amount of carbon absorbed by newly planted trees is small compared with the emissions produced by major industrial systems.\n\n[2] The criticism identifies a genuine limitation. Nevertheless, evaluating urban forests exclusively through carbon absorption ignores other effects: trees can reduce local temperatures, improve air quality, and alter patterns of energy consumption. Their contribution to environmental policy may therefore be significant even if it cannot be measured through a single global metric."
      },
      "options": [
        {
          "label": "A",
          "text": "introduce a contradiction that destroys the previous claim"
        },
        {
          "label": "B",
          "text": "acknowledge a limitation before introducing a broader perspective"
        },
        {
          "label": "C",
          "text": "summarize the evidence presented earlier"
        },
        {
          "label": "D",
          "text": "provide a numerical explanation"
        }
      ],
      "correctAnswer": "B",
      "correctAnswerIndex": 1,
      "whyCorrectTitle": "Why B is Correct (Logical Derivation):",
      "whyCorrect": "The author first grants that the criticism 'identifies a genuine limitation,' then uses 'Nevertheless' to pivot to broader urban benefits (cooling, air quality). Thus, 'Nevertheless' acknowledges the point while introducing a larger evaluative scope.",
      "distractorExplanations": [
        {
          "optionLabel": "A",
          "explanation": "Overstatement; acknowledging a limitation does not destroy the critics' claim entirely."
        },
        {
          "optionLabel": "C",
          "explanation": "Misidentifies a contrast pivot as a summary signal."
        },
        {
          "optionLabel": "D",
          "explanation": "Format trap; no numerical calculations follow."
        }
      ],
      "passageSupport": "Paragraph 2: 'The criticism identifies a genuine limitation. Nevertheless, evaluating urban forests exclusively through carbon absorption ignores other effects...'",
      "eliminationShortcut": "Concession architecture: 'Concede limitation + Nevertheless + Broader benefit' = acknowledge limitation before widening perspective.",
      "educationalObjective": "Understand the concessionary function of 'Nevertheless' in policy arguments."
    },
    {
      "id": "ch3-p29",
      "questionNumber": 29,
      "label": "PRACTICE QUESTION 29 — SAMPLE SIZE IN SURVEY RESEARCH",
      "prompt": "The word 'Consequently' indicates:",
      "passage": {
        "title": "Sample Size in Survey Research",
        "text": "[1] The survey was relatively small. Consequently, its results should be interpreted cautiously."
      },
      "options": [
        {
          "label": "A",
          "text": "an example"
        },
        {
          "label": "B",
          "text": "a contrast"
        },
        {
          "label": "C",
          "text": "a cause-and-result relationship"
        },
        {
          "label": "D",
          "text": "a definition"
        }
      ],
      "correctAnswer": "C",
      "correctAnswerIndex": 2,
      "whyCorrectTitle": "Why C is Correct (Logical Derivation):",
      "whyCorrect": "The sentence links the cause (small survey size) to the logical outcome (results should be interpreted cautiously). 'Consequently' is a standard causal transition marker indicating a cause-and-effect relationship.",
      "distractorExplanations": [
        {
          "optionLabel": "A",
          "explanation": "Misidentifies cause-and-effect as exemplification."
        },
        {
          "optionLabel": "B",
          "explanation": "Misidentifies logical outcome as an opposing contrast."
        },
        {
          "optionLabel": "D",
          "explanation": "Misidentifies causal transition as a definition."
        }
      ],
      "passageSupport": "Paragraph 1: 'The survey was relatively small. Consequently, its results should be interpreted cautiously.'",
      "eliminationShortcut": "Transition rule: 'Consequently' = 'As a result' (Causal Signal).",
      "educationalObjective": "Identify cause-and-effect transition markers in research methodology."
    },
    {
      "id": "ch3-p30",
      "questionNumber": 30,
      "label": "PRACTICE QUESTION 30 — AUTOMATION AND LABOR REDISTRIBUTION",
      "prompt": "The word 'Crucially' primarily serves to:",
      "passage": {
        "title": "Automation and Labor Redistribution",
        "text": "[1] Predictions about automation often focus on the number of jobs that machines may eliminate. Such predictions are important, but they can obscure an equally consequential question: how automation changes the work that remains.\n\n[2] A new technology may remove some routine tasks while increasing the demand for supervision, maintenance, interpretation, or interpersonal judgment. Crucially, technological change need not simply reduce the amount of human labor; it may redistribute labor across different types of activities."
      },
      "options": [
        {
          "label": "A",
          "text": "introduce an unimportant detail"
        },
        {
          "label": "B",
          "text": "signal the central importance of the following claim"
        },
        {
          "label": "C",
          "text": "contradict the previous paragraph completely"
        },
        {
          "label": "D",
          "text": "provide evidence from a research study"
        }
      ],
      "correctAnswer": "B",
      "correctAnswerIndex": 1,
      "whyCorrectTitle": "Why B is Correct (Logical Derivation):",
      "whyCorrect": "The adverb 'Crucially' is an emphatic marker used by authors to highlight a key thesis insight: technological change redistributes labor rather than simply eliminating it.",
      "distractorExplanations": [
        {
          "optionLabel": "A",
          "explanation": "Direct antonym; 'crucially' denotes high significance, not unimportance."
        },
        {
          "optionLabel": "C",
          "explanation": "Overstatement; it elaborates on the mechanism rather than contradicting earlier points."
        },
        {
          "optionLabel": "D",
          "explanation": "Empirical trap; it emphasizes an analytical distinction rather than citing a specific study."
        }
      ],
      "passageSupport": "Paragraph 2: 'Crucially, technological change need not simply reduce the amount of human labor; it may redistribute labor...'",
      "eliminationShortcut": "Emphasis Marker: 'Crucially' = signals central importance of the main thesis.",
      "educationalObjective": "Recognize rhetorical emphasis adverbs in economic analysis."
    }
  ]
};

export const READING_CH3_BLOCK_6: ReadingModule = {
  "moduleNumber": 6,
  "id": "reading-ch3-block6",
  "chapterTitle": "CHAPTER 3 — VOCABULARY IN CONTEXT",
  "moduleTitle": "RHETORICAL & ARGUMENTATIVE FUNCTION",
  "endLabel": "MODULE COMPLETE",
  "sections": [
    {
      "id": "ch3-b6-sec1",
      "sectionNumber": "1",
      "sectionTitle": "VOCABULARY AS ARGUMENTATIVE ARCHITECTURE",
      "content": [
        "Certain words act as **argumentative architecture**, governing the logical flow of claims:",
        "1. **Concession** (*Concede, Acknowledge, Grant*): Author admits a partial counter-argument or limitation.\n2. **Presupposition** (*Presume, Postulate, Assume*): Signals unstated premises or conceptual foundations.\n3. **Restrictive Modifiers** (*Merely, Strictly, Solely*): Constrains scope or dismisses overblown interpretations.\n4. **Correction Anchors** (*Rather, Instead*): Introduces the author's true thesis immediately after refuting a misconception."
      ]
    },
    {
      "id": "ch3-b6-sec2",
      "sectionNumber": "2",
      "sectionTitle": "THE 'CORRECTION ANCHOR' FORMULA",
      "content": [
        "When you encounter *'rather'* or *'instead'*, the following clause contains the author's primary asserted truth.",
        "**The Correction Formula**:\nDismissed Misconception (Not X) + Pivot ('rather' or 'instead') → Author's Main Thesis (Y)",
        "Use the erroneous assumption being corrected to define the target word inside this construction."
      ]
    },
    {
      "id": "ch3-b6-sec3",
      "sectionNumber": "3",
      "sectionTitle": "WORKED CASE STUDY — ENVIRONMENTAL JURISPRUDENCE & PRECAUTION",
      "content": [
        "Examine how argumentative function governs the contextual meanings of 'concede' and 'presume'."
      ],
      "passage": {
        "title": "International Marine Law & Deep-Sea Precautionary Frameworks",
        "text": "[1] Advocates of immediate deep-seabed mining assert that extracting polymetallic nodules from the abyssal plains is indispensable for meeting global green-energy battery targets. Legal scholars defending the Precautionary Principle readily concede that terrestrial mining carries significant ecological costs, including tropical deforestation and groundwater contamination.\n\n[2] However, legal scholars argue that mining proponents improperly presume that abyssal benthic ecosystems are biologically barren. Because hydrothermal vents and nodule fields support specialized fauna with fragile metabolic cycles, international treaties require comprehensive ecological baselines before commercial exploitation licenses can be granted."
      },
      "questions": [
        {
          "id": "ch3-w11",
          "questionNumber": 11,
          "label": "WORKED EXAMPLE 11 — INTERNATIONAL MARINE LAW & TERRESTRIAL MINING TRADE-OFFS",
          "prompt": "As used in paragraph 1, 'concede' most nearly means:",
          "passage": {
            "title": "International Marine Law & Terrestrial Mining Trade-offs",
            "text": "[1] Advocates of immediate deep-seabed mining assert that extracting polymetallic nodules from the abyssal plains is indispensable for meeting global green-energy battery targets. Legal scholars defending the Precautionary Principle readily concede that terrestrial mining carries significant ecological costs, including tropical deforestation and groundwater contamination."
          },
          "options": [
            {
              "label": "A",
              "text": "surrender sovereign territory"
            },
            {
              "label": "B",
              "text": "acknowledge as true or valid"
            },
            {
              "label": "C",
              "text": "reluctantly forgive"
            },
            {
              "label": "D",
              "text": "formally negotiate"
            }
          ],
          "correctAnswer": "B",
          "correctAnswerIndex": 1,
          "whyCorrectTitle": "Why B is Correct (Logical Derivation):",
          "whyCorrect": "The text states that legal scholars 'readily concede that terrestrial mining carries significant ecological costs.' In legal and rhetorical argumentation, to concede a point made by the opposing side means to acknowledge or admit its truth before pivoting to one's own counter-argument.",
          "distractorExplanations": [
            {
              "optionLabel": "A",
              "explanation": "Military/territorial meaning of concede (ceding land)."
            },
            {
              "optionLabel": "C",
              "explanation": "Injects emotional forgiveness into formal legal analysis."
            },
            {
              "optionLabel": "D",
              "explanation": "Describes active bargaining rather than admitting a factual point."
            }
          ],
          "passageSupport": "Paragraph 1: 'Legal scholars defending the Precautionary Principle readily concede that terrestrial mining carries significant ecological costs...'",
          "eliminationShortcut": "Rhetorical function clue: 'Concede X... However Y' is the textbook concession-to-pivot structure -> concede = acknowledge/admit.",
          "educationalObjective": "Recognize the rhetorical function of concessions in comparative policy arguments."
        },
        {
          "id": "ch3-w12",
          "questionNumber": 12,
          "label": "WORKED EXAMPLE 12 — ABYSSAL ECOSYSTEMS & UNWARRANTED ASSUMPTIONS",
          "prompt": "In paragraph 1, the word 'presume' most nearly means:",
          "passage": {
            "title": "Abyssal Ecosystems & Unwarranted Assumptions",
            "text": "[1] Legal scholars argue that seabed mining proponents improperly presume that abyssal benthic ecosystems are biologically barren. Because hydrothermal vents and nodule fields support specialized fauna with fragile metabolic cycles, international treaties require comprehensive ecological baselines before commercial exploitation licenses can be granted."
          },
          "options": [
            {
              "label": "A",
              "text": "take for granted without conclusive evidence"
            },
            {
              "label": "B",
              "text": "unlawfully demand"
            },
            {
              "label": "C",
              "text": "scientifically verify through experiments"
            },
            {
              "label": "D",
              "text": "publicly celebrate"
            }
          ],
          "correctAnswer": "A",
          "correctAnswerIndex": 0,
          "whyCorrectTitle": "Why A is Correct (Logical Derivation):",
          "whyCorrect": "Paragraph 1 states that mining advocates 'improperly presume that abyssal benthic ecosystems are biologically barren' when in fact these zones support 'specialized fauna' and require 'comprehensive ecological baselines.' To presume here means to take something as an unproven assumption or take it for granted without rigorous proof.",
          "distractorExplanations": [
            {
              "optionLabel": "B",
              "explanation": "Confuses presumption with an illegal command."
            },
            {
              "optionLabel": "C",
              "explanation": "Direct antonym; the author states the assumption is improper and unverified."
            },
            {
              "optionLabel": "D",
              "explanation": "Emotional/celebratory distortion."
            }
          ],
          "passageSupport": "Paragraph 1: 'seabed mining proponents improperly presume that abyssal benthic ecosystems are biologically barren...'",
          "eliminationShortcut": "'Improperly presume' modifies an inaccurate factual claim -> means 'take for granted without proof'.",
          "educationalObjective": "Identify epistemic vocabulary indicating unwarranted assumptions and unverified premises."
        }
      ]
    },
    {
      "id": "ch3-b6-sec4",
      "sectionNumber": "4",
      "sectionTitle": "MASTER TAKEAWAY & SPEED HEURISTIC",
      "content": [
        "Core Rule:\n> Treat rhetorical verbs (concede, presume, qualify, refute) as structural indicators of the author's stance. They define the logical relationship between competing claims."
      ]
    }
  ],
  "practiceQuestions": [
    {
      "id": "ch3-p31",
      "questionNumber": 31,
      "label": "PRACTICE QUESTION 31 — ASTRONOMICAL GALAXY CLASSIFICATION SYSTEMS",
      "prompt": "The word 'adequate' most nearly means:",
      "passage": {
        "title": "Astronomical Galaxy Classification Systems",
        "text": "[1] For much of the twentieth century, astronomers classified galaxies primarily according to visible shape. Spiral galaxies, elliptical galaxies, and irregular galaxies appeared to form distinct categories that could be identified through observation alone.\n\n[2] As measurement techniques improved, however, astronomers began incorporating information about stellar motion, chemical composition, and rates of star formation. The older classification system was not abandoned, but its apparent simplicity became increasingly difficult to maintain. Features that seemed visually similar did not always correspond to similar histories, and galaxies with different appearances could exhibit comparable physical processes.\n\n[3] The traditional categories remained useful as descriptive tools, yet they became less adequate as complete explanations of how galaxies form and evolve."
      },
      "options": [
        {
          "label": "A",
          "text": "sufficiently capable for a particular purpose"
        },
        {
          "label": "B",
          "text": "historically important"
        },
        {
          "label": "C",
          "text": "visually recognizable"
        },
        {
          "label": "D",
          "text": "scientifically proven"
        }
      ],
      "correctAnswer": "A",
      "correctAnswerIndex": 0,
      "whyCorrectTitle": "Why A is Correct (Logical Derivation):",
      "whyCorrect": "Paragraph 3 notes traditional categories were descriptive, but 'became less adequate as complete explanations.' In science, 'adequate' means satisfactory or sufficiently capable for a specified explanatory purpose.",
      "distractorExplanations": [
        {
          "optionLabel": "B",
          "explanation": "Historical trap; they WERE historically important, but 'adequate' describes explanatory sufficiency."
        },
        {
          "optionLabel": "C",
          "explanation": "Visual trap; galaxies remain visually recognizable, but the system fails as an evolutionary explanation."
        },
        {
          "optionLabel": "D",
          "explanation": "Validity trap; adequate means sufficient for explanation, not necessarily proven."
        }
      ],
      "passageSupport": "Paragraph 3: 'remained useful as descriptive tools, yet they became less adequate as complete explanations...'",
      "eliminationShortcut": "Functional definition: 'adequate as complete explanations' = sufficiently capable for explaining evolution.",
      "educationalObjective": "Evaluate vocabulary denoting theoretical explanatory sufficiency."
    },
    {
      "id": "ch3-p32",
      "questionNumber": 32,
      "label": "PRACTICE QUESTION 32 — HOUSING INITIATIVE AMBITION VS PRACTICALITY",
      "prompt": "As used in the passage, the word 'ambition' primarily refers to the proposal's:",
      "passage": {
        "title": "Housing Initiative Ambition vs Practicality",
        "text": "[1] A proposed housing initiative would require cities to construct large numbers of affordable units within a relatively short period. Supporters praise the proposal's ambition, arguing that incremental reforms have failed to address the scale of the shortage.\n\n[2] Critics use the same word differently. For them, the plan's ambition is precisely the problem: its goals may exceed the financial and administrative capacities of the institutions expected to carry it out. The disagreement, then, is not over whether the proposal is ambitious. It is over whether ambition should be interpreted as evidence of necessary vision or insufficient practicality."
      },
      "options": [
        {
          "label": "A",
          "text": "desire for political power"
        },
        {
          "label": "B",
          "text": "unusually broad and demanding goals"
        },
        {
          "label": "C",
          "text": "lack of public support"
        },
        {
          "label": "D",
          "text": "financial cost"
        }
      ],
      "correctAnswer": "B",
      "correctAnswerIndex": 1,
      "whyCorrectTitle": "Why B is Correct (Logical Derivation):",
      "whyCorrect": "Paragraph 1 defines the ambition as requiring cities to 'construct large numbers of affordable units within a relatively short period,' and Paragraph 2 notes its goals 'exceed... capacities.' Thus, 'ambition' refers to broad, highly demanding policy goals.",
      "distractorExplanations": [
        {
          "optionLabel": "A",
          "explanation": "Political cynicism trap; ambition here refers to project scope, not individual greed."
        },
        {
          "optionLabel": "C",
          "explanation": "Public opinion trap; support is not the focus of the term."
        },
        {
          "optionLabel": "D",
          "explanation": "Cost distortion; financial cost is a consequence, but ambition refers to the scope of goals."
        }
      ],
      "passageSupport": "Paragraph 1 & 2: 'construct large numbers... short period... goals may exceed capacities...'",
      "eliminationShortcut": "Scope definition: ambition = unusually broad and demanding goals.",
      "educationalObjective": "Identify political policy vocabulary describing initiative scale."
    },
    {
      "id": "ch3-p33",
      "questionNumber": 33,
      "label": "PRACTICE QUESTION 33 — DECEPTIVE APPARENT AFFORDABILITY IN POLICY",
      "prompt": "The word 'deceptive' most nearly means:",
      "passage": {
        "title": "Deceptive Apparent Affordability in Policy",
        "text": "[1] In economic discussions, a policy may appear inexpensive when evaluated only in terms of its immediate budgetary cost. Such an assessment can be misleading if the policy produces substantial indirect consequences.\n\n[2] A program that requires little government spending, for example, may nevertheless impose significant administrative burdens on businesses or households. Its apparent affordability may therefore be deceptive."
      },
      "options": [
        {
          "label": "A",
          "text": "intentionally dishonest"
        },
        {
          "label": "B",
          "text": "giving a misleading impression"
        },
        {
          "label": "C",
          "text": "impossible to calculate"
        },
        {
          "label": "D",
          "text": "more expensive than expected"
        }
      ],
      "correctAnswer": "B",
      "correctAnswerIndex": 1,
      "whyCorrectTitle": "Why B is Correct (Logical Derivation):",
      "whyCorrect": "Paragraph 1 states such assessments 'can be misleading,' and Paragraph 2 concludes that 'apparent affordability may therefore be deceptive.' Deceptive here means giving an impression that is false or misleading.",
      "distractorExplanations": [
        {
          "optionLabel": "A",
          "explanation": "Moral/intent trap; policy analyses can give a false impression without deliberate fraud."
        },
        {
          "optionLabel": "C",
          "explanation": "Calculability trap; indirect costs CAN be calculated, though they are hidden initially."
        },
        {
          "optionLabel": "D",
          "explanation": "Consequence trap; while it may end up costly, 'deceptive' specifically describes the misleading nature of the initial impression."
        }
      ],
      "passageSupport": "Paragraph 1 & 2: 'assessment can be misleading... apparent affordability may therefore be deceptive.'",
      "eliminationShortcut": "Synonym clue in context: 'misleading assessment = deceptive appearance.'",
      "educationalObjective": "Analyze evaluative adjectives describing false policy metrics."
    },
    {
      "id": "ch3-p34",
      "questionNumber": 34,
      "label": "PRACTICE QUESTION 34 — ARCHAEOLOGICAL RECORD GAPS AND INFERENCE",
      "prompt": "The word 'inference' most nearly means:",
      "passage": {
        "title": "Archaeological Record Gaps and Inference",
        "text": "[1] Early archaeological interpretations sometimes treated the absence of a particular artifact as evidence that the people associated with a site lacked the technology required to produce it. More recent scholars have challenged that inference.\n\n[2] Objects may disappear from the archaeological record for many reasons: they may decay, be reused elsewhere, remain undiscovered, or have been produced from materials that do not survive easily. Absence, therefore, is not always a reliable indicator of nonexistence. The archaeological record is necessarily incomplete, and its gaps can be as informative about the limitations of preservation and discovery as they are about the societies being studied."
      },
      "options": [
        {
          "label": "A",
          "text": "a conclusion reached from evidence"
        },
        {
          "label": "B",
          "text": "a physical discovery"
        },
        {
          "label": "C",
          "text": "a written historical record"
        },
        {
          "label": "D",
          "text": "a method of preservation"
        }
      ],
      "correctAnswer": "A",
      "correctAnswerIndex": 0,
      "whyCorrectTitle": "Why A is Correct (Logical Derivation):",
      "whyCorrect": "The 'inference' refers back to 'treated the absence of a particular artifact as evidence that the people... lacked the technology.' In logic and archaeology, an inference is a reasoning deduction or conclusion reached from observational evidence.",
      "distractorExplanations": [
        {
          "optionLabel": "B",
          "explanation": "Physical artifact trap; inference is a mental conclusion, not a physical dig find."
        },
        {
          "optionLabel": "C",
          "explanation": "Historiographical trap; inference is logical deduction, not an archival document."
        },
        {
          "optionLabel": "D",
          "explanation": "Preservation trap; preservation relates to physical decay, not analytical reasoning."
        }
      ],
      "passageSupport": "Paragraph 1: 'treated the absence... as evidence that... Scholars challenged that inference.'",
      "eliminationShortcut": "Logical definition: 'treated evidence as proving X... challenged that inference' -> inference = conclusion reached from evidence.",
      "educationalObjective": "Master foundational logical vocabulary in scientific and archaeological reasoning."
    },
    {
      "id": "ch3-p35",
      "questionNumber": 35,
      "label": "PRACTICE QUESTION 35 — STANDARDIZED OUTCOMES IN EDUCATION MEASUREMENT",
      "prompt": "The word 'distorted' most nearly means:",
      "passage": {
        "title": "Standardized Outcomes in Education Measurement",
        "text": "[1] Efforts to measure educational quality often rely heavily on standardized outcomes, partly because numerical scores permit comparisons across large populations. Yet a measurement system can become distorted when the indicator selected for evaluation begins to influence the behavior it was originally intended merely to describe.\n\n[2] If schools are judged primarily according to test scores, for example, administrators may redirect resources toward activities most likely to improve those scores, even when other educational goals receive less attention. The problem is not necessarily that the measurement is inaccurate. Rather, the measurement may alter the system being measured."
      },
      "options": [
        {
          "label": "A",
          "text": "represented in a misleadingly altered form"
        },
        {
          "label": "B",
          "text": "improved through careful measurement"
        },
        {
          "label": "C",
          "text": "reduced to numerical data"
        },
        {
          "label": "D",
          "text": "made impossible to understand"
        }
      ],
      "correctAnswer": "A",
      "correctAnswerIndex": 0,
      "whyCorrectTitle": "Why A is Correct (Logical Derivation):",
      "whyCorrect": "Paragraph 1 & 2 explain that when a score indicator alters administrator behavior, the measurement system becomes 'distorted'—meaning it no longer reflects true educational quality accurately but rather an altered/warped version.",
      "distractorExplanations": [
        {
          "optionLabel": "B",
          "explanation": "Direct antonym; distortion corrupts system fidelity."
        },
        {
          "optionLabel": "C",
          "explanation": "Reduction trap; numerical reduction is the starting method, not the distortion itself."
        },
        {
          "optionLabel": "D",
          "explanation": "Extreme distortion; the system can still be understood, but its outputs are biased."
        }
      ],
      "passageSupport": "Paragraph 1: 'measurement system can become distorted when the indicator... begins to influence the behavior it was originally intended merely to describe.'",
      "eliminationShortcut": "Systemic bias clue: 'indicator alters the behavior it describes' -> system becomes distorted (misleadingly altered).",
      "educationalObjective": "Understand sociometric distortion (Goodhart's Law) vocabulary."
    },
    {
      "id": "ch3-p36",
      "questionNumber": 36,
      "label": "PRACTICE QUESTION 36 — HISTORICAL REVISIONISM AND SUPPLEMENTING TRADITION",
      "prompt": "The word 'supplements' most nearly means:",
      "passage": {
        "title": "Historical Revisionism and Supplementing Tradition",
        "text": "[1] The historian does not argue that the traditional account is wholly incorrect. Instead, she contends that it is incomplete because it emphasizes the decisions of political leaders while giving relatively little attention to the economic and social conditions that shaped those decisions.\n\n[2] Her revision therefore supplements the traditional account rather than replacing it."
      },
      "options": [
        {
          "label": "A",
          "text": "rejects entirely"
        },
        {
          "label": "B",
          "text": "adds to and makes more complete"
        },
        {
          "label": "C",
          "text": "repeats without changing"
        },
        {
          "label": "D",
          "text": "questions the reliability of"
        }
      ],
      "correctAnswer": "B",
      "correctAnswerIndex": 1,
      "whyCorrectTitle": "Why B is Correct (Logical Derivation):",
      "whyCorrect": "Paragraph 1 notes the traditional account is 'incomplete,' and Paragraph 2 states her revision 'supplements the traditional account rather than replacing it.' To supplement means to add to something in order to complete or enhance it.",
      "distractorExplanations": [
        {
          "optionLabel": "A",
          "explanation": "Direct antonym ('rather than replacing it')."
        },
        {
          "optionLabel": "C",
          "explanation": "Redundancy trap; revision adds new economic/social analysis rather than repeating."
        },
        {
          "optionLabel": "D",
          "explanation": "Skepticism trap; she accepts the traditional account's core facts, but adds missing layers."
        }
      ],
      "passageSupport": "Paragraph 1 & 2: 'traditional account is... incomplete... revision therefore supplements the traditional account rather than replacing it.'",
      "eliminationShortcut": "Antonym clue: 'supplements... rather than replacing' -> adds to and makes complete.",
      "educationalObjective": "Recognize historiographical vocabulary describing additive scholarly revisions."
    }
  ]
};
