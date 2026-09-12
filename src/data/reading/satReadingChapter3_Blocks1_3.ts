import { ReadingModule } from './readingTypes';

export const READING_CH3_BLOCK_1: ReadingModule = {
  "moduleNumber": 1,
  "id": "reading-ch3-block1",
  "chapterTitle": "CHAPTER 3 — VOCABULARY IN CONTEXT",
  "moduleTitle": "MEANING FROM IMMEDIATE AND EXTENDED CONTEXT",
  "endLabel": "MODULE COMPLETE",
  "sections": [
    {
      "id": "ch3-b1-sec1",
      "sectionNumber": "1",
      "sectionTitle": "THE CENTRAL PRINCIPLE: FUNCTION OVER MEMORIZATION",
      "content": [
        "SAT vocabulary-in-context questions evaluate the exact functional meaning of a word within a specialized rhetorical environment, never rote dictionary definition.",
        "**The 4 Contextual Determinations**:\n1. **Contextual Scope**: The specific claim or relationship the word establishes.\n2. **Directionality**: Whether the word affirms, qualifies, refutes, or bridges adjacent ideas.\n3. **Semantic Register**: Is the usage literal, figurative, academic, or technical?\n4. **Dynamic Shift**: How the surrounding argument narrows or alters standard definitions.",
        "**Core Rule**:\n> Never ask 'Which definition of this word do I know?' Ask strictly: 'Which meaning performs the necessary logical and rhetorical function in this exact sentence?'"
      ]
    },
    {
      "id": "ch3-b1-sec2",
      "sectionNumber": "2",
      "sectionTitle": "THE CONTEXT WINDOW ARCHITECTURE",
      "content": [
        "Never isolate the target sentence. Employ the **3-Tier Context Window** to capture full argumentative flow:",
        "**The 3-Tier Context Window**:\n- **1. BEFORE (Antecedent Setup)**: Isolate the baseline claim, problem, or paradigm.\n- **2. TARGET (Rhetorical Pivot)**: Identify the active role the word plays in connecting surrounding ideas.\n- **3. AFTER (Consequent Proof)**: Locate the consequence, illustration, or contrast that follows. *The definitive proof almost always lives in the clause directly following the target word.*"
      ]
    },
    {
      "id": "ch3-b1-sec3",
      "sectionNumber": "3",
      "sectionTitle": "THE 4-STEP PREDICTION & REPLACEMENT PROTOCOL",
      "content": [
        "**The 4-Step Prediction & Replacement Protocol**:",
        "1. **Blind the Word**: Mentally erase the target word from the sentence.\n2. **Paraphrase the Core Clause**: Summarize the precise claim of the sentence in plain language.\n3. **Generate a Dummy Word**: Insert a simple, functional placeholder (e.g., *conditional*, *weakened*).\n4. **Match Semantic Precision**: Compare your prediction against the options, eliminating choices that distort tone, degree, or domain."
      ]
    },
    {
      "id": "ch3-b1-sec4",
      "sectionNumber": "4",
      "sectionTitle": "TRAP ANALYSIS: THE BROAD DICTIONARY TRAP",
      "content": [
        "The **Familiar Definition Trap** offers a valid, common dictionary definition of the word that fails the specific contextual requirements of the passage.",
        "**Example**: *'The company's investment strategy was bold.'*\n- *Colloquial*: Brave, audacious\n- *Visual*: Heavy, dark typeface\n- *Contextual/Target*: High-risk, unconventional",
        "**Filter Rule**:\n> Never ask: *'Can this word mean this in English?'* Ask: *'Does the author's specific evidence force this exact meaning here?'*"
      ]
    },
    {
      "id": "ch3-b1-sec5",
      "sectionNumber": "5",
      "sectionTitle": "WORKED CASE STUDY — SCIENTIFIC RESEARCH & CONDITIONAL MODELS",
      "content": [
        "Examine how the surrounding argument dictates the meaning of 'peripheral' and 'conditional' in an academic context."
      ],
      "passage": {
        "title": "Marine Ecosystem Dynamics & Multi-Variable Modeling",
        "text": "[1] For decades, researchers studying coral reefs focused primarily on elevated sea temperatures as the dominant environmental threat. Rising ocean temperatures disrupt the metabolic relationship between corals and their symbiotic algae, making temperature an obvious variable to monitor. More recent longitudinal studies, however, have complicated this picture. In several equatorial zones, reefs exposed to identically elevated temperatures exhibited markedly divergent bleaching rates.\n\n[2] This striking variation has compelled marine ecologists to investigate variables once dismissed as peripheral. Water turbulence, local current velocities, microbial diversity, and previous epigenetic acclimatization all interact to modulate thermal tolerance. The emerging consensus does not reject temperature as critical; rather, it resists the reductive tendency to treat temperature as an exhaustive explanation.\n\n[3] The distinction is consequential for environmental policy. By treating an important variable as the only determinant, ecological forecasts risk substantial error. Predictive models must remain conditional, valid only when localized hydrodynamic and biological micro-factors are systematically integrated."
      },
      "questions": [
        {
          "id": "ch3-w1",
          "questionNumber": 1,
          "label": "WORKED EXAMPLE 1 — MARINE ECOSYSTEM DYNAMICS & MULTI-VARIABLE WEIGHTING",
          "prompt": "As used in the passage, 'incidental' most nearly means:",
          "passage": {
            "title": "Marine Ecosystem Dynamics & Multi-Variable Weighting",
            "text": "[1] For decades, marine ecologists studying coral bleaching focused primarily on elevated sea surface temperature as the dominant environmental threat, treating thermal stress as an exhaustive explanation.\n\n[2] Recent longitudinal surveys, however, have compelled researchers to evaluate factors once dismissed as incidental. Water turbulence, current velocities, and microbial diversity interact to modulate thermal tolerance, proving that variables previously treated as secondary in importance exert substantial influence on coral survival."
          },
          "options": [
            {
              "label": "A",
              "text": "geographically distant or outer"
            },
            {
              "label": "B",
              "text": "secondary in explanatory importance"
            },
            {
              "label": "C",
              "text": "empirically unmeasurable"
            },
            {
              "label": "D",
              "text": "fundamentally controversial"
            }
          ],
          "correctAnswer": "B",
          "correctAnswerIndex": 1,
          "whyCorrectTitle": "Why B is Correct (Logical Derivation):",
          "whyCorrect": "In paragraph 2, 'incidental' is directly contrasted with factors that exert 'substantial influence on coral survival.' The variables (turbulence, currents, genetics) were previously treated as minor or non-central factors. Therefore, 'incidental' means secondary in explanatory importance.",
          "distractorExplanations": [
            {
              "optionLabel": "A",
              "explanation": "Literal physical/spatial definition (outer edge). The passage discusses conceptual importance in a scientific model, not spatial distance."
            },
            {
              "optionLabel": "C",
              "explanation": "Unsupported extrapolation. The text never states these variables could not be measured, only that they were overlooked."
            },
            {
              "optionLabel": "D",
              "explanation": "Conflates lack of analytical focus with scientific dispute; no controversy is described."
            }
          ],
          "passageSupport": "Paragraph 2 states: 'evaluate factors once dismissed as incidental... proving that variables previously treated as secondary in importance exert substantial influence...'",
          "eliminationShortcut": "Identify the contrast clue in the context window: 'dominant / exhaustive' vs. 'incidental' -> forces 'secondary in importance'.",
          "educationalObjective": "Master identifying conceptual contrasts (dominant vs. secondary) across adjacent paragraphs."
        },
        {
          "id": "ch3-w2",
          "questionNumber": 2,
          "label": "WORKED EXAMPLE 2 — PREDICTIVE ECOLOGICAL MODELING & MICRO-FACTOR INTEGRATION",
          "prompt": "As used in the passage, the word 'conditional' most nearly refers to a model that is:",
          "passage": {
            "title": "Predictive Ecological Modeling & Micro-Factor Integration",
            "text": "[1] Standardized climate forecasting algorithms frequently miscalculate localized reef resilience because they assume uniform environmental responses across global ocean basins.\n\n[2] Environmental policy experts emphasize that predictive ecological models must remain conditional, valid only when localized hydrodynamic metrics and biological micro-factors are systematically integrated into the computational framework."
          },
          "options": [
            {
              "label": "A",
              "text": "dependent upon specific prerequisite factors"
            },
            {
              "label": "B",
              "text": "theoretically unproven in laboratory settings"
            },
            {
              "label": "C",
              "text": "temporary and subject to scheduled expiration"
            },
            {
              "label": "D",
              "text": "unreliable across all real-world applications"
            }
          ],
          "correctAnswer": "A",
          "correctAnswerIndex": 0,
          "whyCorrectTitle": "Why A is Correct (Logical Derivation):",
          "whyCorrect": "The sentence explicitly states that predictive models must remain 'conditional, valid only when localized hydrodynamic metrics and biological micro-factors are systematically integrated.' The phrase 'valid only when' directly defines 'conditional' as depending upon specific prerequisite conditions or variables.",
          "distractorExplanations": [
            {
              "optionLabel": "B",
              "explanation": "Conflates conditional applicability with lack of experimental proof."
            },
            {
              "optionLabel": "C",
              "explanation": "Mistakes conditional applicability for a temporal duration or expiration date."
            },
            {
              "optionLabel": "D",
              "explanation": "Overstatement. The text emphasizes that models are valid under specified circumstances, not universally unreliable."
            }
          ],
          "passageSupport": "Paragraph 2: 'predictive ecological models must remain conditional, valid only when localized hydrodynamic metrics and biological micro-factors are systematically integrated...'",
          "eliminationShortcut": "Look for immediate modifying clauses: 'valid only when [conditions]' directly defines 'conditional' as dependent on specific factors.",
          "educationalObjective": "Identify explicit restrictive clauses that immediately define abstract adjectives."
        }
      ]
    },
    {
      "id": "ch3-b1-sec6",
      "sectionNumber": "6",
      "sectionTitle": "MASTER TAKEAWAY & SPEED HEURISTIC",
      "content": [
        "Master Heuristic:\n> Never select a choice based on vocabulary difficulty or everyday familiarity. Rely on the author's **internal definition**—the contrast, consequence, or modifier that mathematically locks in the word's contextual meaning."
      ]
    }
  ],
  "practiceQuestions": [
    {
      "id": "ch3-p1",
      "questionNumber": 1,
      "label": "PRACTICE QUESTION 1 — MARINE ECOSYSTEM DYNAMICS & SPONGES",
      "prompt": "As used in paragraph 2, 'peripheral' most nearly means:",
      "passage": {
        "title": "Marine Ecosystem Dynamics & Sponges",
        "text": "[1] Marine biologists studying tropical coral formations historically focused almost entirely on scleractinian hard corals and zooxanthellae symbionts as the primary drivers of reef calcification. Recent investigations into benthic sponge assemblages have compelled researchers to reexamine these assumptions.\n\n[2] Rather than treating sponges as merely incidental organisms occupying peripheral crevices, chemical ecologists now demonstrate that sponge filtration loops recycle critical dissolved organic carbon back into the food web."
      },
      "options": [
        {
          "label": "A",
          "text": "geographically distant"
        },
        {
          "label": "B",
          "text": "minor or secondary in ecological importance"
        },
        {
          "label": "C",
          "text": "scientifically controversial"
        },
        {
          "label": "D",
          "text": "difficult to quantify accurately"
        }
      ],
      "correctAnswer": "B",
      "correctAnswerIndex": 1,
      "whyCorrectTitle": "Why B is Correct (Logical Derivation):",
      "whyCorrect": "The text contrasts treating sponges as 'merely incidental organisms' with new findings showing they 'recycle critical dissolved organic carbon.' The word 'incidental' here describes organisms previously considered minor, secondary, or peripheral in ecological importance.",
      "distractorExplanations": [
        {
          "optionLabel": "A",
          "explanation": "Literal spatial definition of peripheral (outer edge/distant); the passage addresses functional ecological importance rather than geography."
        },
        {
          "optionLabel": "C",
          "explanation": "Distortion; sponges were overlooked rather than the subject of scientific controversy."
        },
        {
          "optionLabel": "D",
          "explanation": "Scope error; difficulty of measurement is never mentioned or implied in the passage."
        }
      ],
      "passageSupport": "Paragraph 2: 'Rather than treating sponges as merely peripheral organisms... chemical ecologists now demonstrate that sponge filtration loops recycle critical dissolved organic carbon...'",
      "eliminationShortcut": "Rhetorical contrast clue: 'merely peripheral... vs. recycle critical carbon' -> peripheral = less central / secondary.",
      "educationalObjective": "Determine contextual meaning of figurative spatial adjectives in biological descriptions."
    },
    {
      "id": "ch3-p2",
      "questionNumber": 2,
      "label": "PRACTICE QUESTION 2 — CELLULAR ION CHANNELS & PHYSIOLOGICAL MODELS",
      "prompt": "In paragraph 2, the word 'resists' most nearly means:",
      "passage": {
        "title": "Cellular Ion Channels & Physiological Models",
        "text": "[1] In classical biophysics, ionic flux across cellular membranes was described through idealized passive diffusion gradients.\n\n[2] However, neurophysiologists resist the conventional model, insisting that voltage-gated ion channels operate with dynamic conformational flexibility that defies rigid mechanistic categorization."
      },
      "options": [
        {
          "label": "A",
          "text": "physically prevents"
        },
        {
          "label": "B",
          "text": "refuses to accept without qualification"
        },
        {
          "label": "C",
          "text": "delays the progress of"
        },
        {
          "label": "D",
          "text": "competes against"
        }
      ],
      "correctAnswer": "B",
      "correctAnswerIndex": 1,
      "whyCorrectTitle": "Why B is Correct (Logical Derivation):",
      "whyCorrect": "The sentence explains that neurophysiologists 'resist the conventional model, insisting that voltage-gated ion channels operate with dynamic conformational flexibility.' Here, 'resist' means to decline or refuse to accept a theoretical model without qualification or modification.",
      "distractorExplanations": [
        {
          "optionLabel": "A",
          "explanation": "Literal mechanical definition (physical force/blockade); scientists cannot physically block an abstract mathematical model."
        },
        {
          "optionLabel": "C",
          "explanation": "Temporal distortion; resisting a theoretical model does not mean delaying its scheduling."
        },
        {
          "optionLabel": "D",
          "explanation": "Adversarial distortion; describes active competition rather than intellectual disagreement."
        }
      ],
      "passageSupport": "Paragraph 2: 'neurophysiologists resist the conventional model, insisting that voltage-gated ion channels operate with dynamic conformational flexibility...'",
      "eliminationShortcut": "Subject-verb alignment: neurophysiologists (scholars) + resist + conventional model = refuse to accept / object to.",
      "educationalObjective": "Identify scholarly reporting verbs expressing theoretical skepticism and disagreement."
    },
    {
      "id": "ch3-p3",
      "questionNumber": 3,
      "label": "PRACTICE QUESTION 3 — MICROCLIMATIC CANOPY SHIFTS IN OLD-GROWTH FORESTS",
      "prompt": "As used in paragraph 3, 'consequential' most nearly means:",
      "passage": {
        "title": "Microclimatic Canopy Shifts in Old-Growth Forests",
        "text": "[1] Dendrochronologists measuring annual tree rings in temperate rain forests observed unexpected growth spurts during drought seasons.\n\n[2] Ecologists discovered that deep-rooted ancient conifer canopies generate their own localized fog condensation, providing continuous understory hydration.\n\n[3] This microclimatic buffering has proved highly consequential for seedling survival, generating substantial stabilizing effects across the entire forest understory during prolonged regional dry spells."
      },
      "options": [
        {
          "label": "A",
          "text": "occurring after another event"
        },
        {
          "label": "B",
          "text": "producing important effects"
        },
        {
          "label": "C",
          "text": "psychologically unavoidable"
        },
        {
          "label": "D",
          "text": "scientifically measurable"
        }
      ],
      "correctAnswer": "B",
      "correctAnswerIndex": 1,
      "whyCorrectTitle": "Why B is Correct (Logical Derivation):",
      "whyCorrect": "Paragraph 3 states that fog condensation proved 'highly consequential for seedling survival, generating substantial stabilizing effects.' In academic prose, 'consequential' means having significant, important, or far-reaching effects.",
      "distractorExplanations": [
        {
          "optionLabel": "A",
          "explanation": "Etymological trap (subsequent/sequential); fails to capture the magnitude of impact described."
        },
        {
          "optionLabel": "C",
          "explanation": "Emotional/psychological distortion; completely out of context in forest ecology."
        },
        {
          "optionLabel": "D",
          "explanation": "Subtle trap; while stabilizing effects may be measured, 'consequential' emphasizes importance/significance rather than mere measurability."
        }
      ],
      "passageSupport": "Paragraph 3: 'proved highly consequential for seedling survival, generating substantial stabilizing effects across the entire forest understory...'",
      "eliminationShortcut": "Immediate elaboration clue: 'consequential... generating substantial stabilizing effects' -> consequential = producing important effects.",
      "educationalObjective": "Recognize academic evaluative modifiers describing significant ecological impacts."
    },
    {
      "id": "ch3-p4",
      "questionNumber": 4,
      "label": "PRACTICE QUESTION 4 — FLUVIAL GEOMORPHOLOGY & SEDIMENT TRANSPORT",
      "prompt": "The word 'prerequisite' in paragraph 3 most nearly refers to an explanation that:",
      "passage": {
        "title": "Fluvial Geomorphology & Sediment Transport",
        "text": "[1] Hydrologists modeling alluvial sediment deposition frequently relied on simplified linear equations relating water velocity directly to gravel bedload transport.\n\n[2] Field measurements across braided river valleys revealed that gravel transport rates fluctuate wildly depending on upstream logjams and transient bank collapses.\n\n[3] Geomorphologists therefore emphasize that any predictive flood hazard model remains strictly conditional, valid only when localized riparian vegetation and upstream woody debris configurations are explicitly accounted for."
      },
      "options": [
        {
          "label": "A",
          "text": "applies only when certain circumstances or factors are considered"
        },
        {
          "label": "B",
          "text": "cannot be tested experimentally"
        },
        {
          "label": "C",
          "text": "depends entirely on human interpretation"
        },
        {
          "label": "D",
          "text": "has not yet been accepted by scientists"
        }
      ],
      "correctAnswer": "A",
      "correctAnswerIndex": 0,
      "whyCorrectTitle": "Why A is Correct (Logical Derivation):",
      "whyCorrect": "Paragraph 3 defines 'conditional' directly in the subsequent clause: 'valid only when localized riparian vegetation and upstream woody debris configurations are explicitly accounted for.' This means the model applies only under specific, prerequisite factors.",
      "distractorExplanations": [
        {
          "optionLabel": "B",
          "explanation": "Direct contradiction; the passage discusses field measurements and empirical accounting."
        },
        {
          "optionLabel": "C",
          "explanation": "Conflates environmental boundary conditions with subjective human interpretation."
        },
        {
          "optionLabel": "D",
          "explanation": "Distortion; the model is accepted, but its scope is bounded by prerequisite variables."
        }
      ],
      "passageSupport": "Paragraph 3: 'model remains strictly conditional, valid only when localized riparian vegetation... are explicitly accounted for.'",
      "eliminationShortcut": "Clause matching: 'valid only when [factors]' directly defines 'conditional' as applying under specific circumstances.",
      "educationalObjective": "Identify Restrictive Modifiers and conditional clauses in geomorphological research."
    },
    {
      "id": "ch3-p5",
      "questionNumber": 5,
      "label": "PRACTICE QUESTION 5 — INDUSTRIAL ROBOTICS & WORKFLOW HETEROGENEITY",
      "prompt": "As used in paragraph 1, 'uniform' most nearly means:",
      "passage": {
        "title": "Industrial Robotics & Workflow Heterogeneity",
        "text": "[1] Popular commentary on industrial automation frequently assumes a uniform displacement of human labor across all manufacturing sectors, imagining identical robotic arms replacing assembly line workers at equal rates.\n\n[2] Economists analyzing industrial data found that robotic deployment varies dramatically: precision electronics manufacturing adopted automated inspection rapidly, whereas custom metal fabrication retained high levels of artisanal human oversight."
      },
      "options": [
        {
          "label": "A",
          "text": "identical or consistent throughout"
        },
        {
          "label": "B",
          "text": "formally organized"
        },
        {
          "label": "C",
          "text": "officially required"
        },
        {
          "label": "D",
          "text": "equally productive"
        }
      ],
      "correctAnswer": "A",
      "correctAnswerIndex": 0,
      "whyCorrectTitle": "Why A is Correct (Logical Derivation):",
      "whyCorrect": "Paragraph 1 explains that commentators imagine 'identical robotic arms replacing assembly line workers at equal rates.' In this context, 'uniform' means consistent, invariant, or identical across all manufacturing sectors.",
      "distractorExplanations": [
        {
          "optionLabel": "B",
          "explanation": "Everyday noun/adjective trap (official uniform/military organization); irrelevant to economic rates of adoption."
        },
        {
          "optionLabel": "C",
          "explanation": "Regulatory distortion; assumes government mandates rather than statistical consistency."
        },
        {
          "optionLabel": "D",
          "explanation": "Subtle trap; while labor displacement relates to productivity, 'uniform' describes the sameness/consistency across sectors."
        }
      ],
      "passageSupport": "Paragraph 1: 'assumes a uniform displacement of human labor across all manufacturing sectors, imagining identical robotic arms...'",
      "eliminationShortcut": "Elaboration clue: 'uniform displacement... imagining identical robotic arms replacing workers at equal rates' -> uniform = identical / consistent throughout.",
      "educationalObjective": "Distinguish structural descriptions of consistency (uniform) from institutional regulation."
    },
    {
      "id": "ch3-p6",
      "questionNumber": 6,
      "label": "PRACTICE QUESTION 6 — ALGORITHMIC HIRING METRICS & WORKFORCE DIVERSITY",
      "prompt": "In paragraph 3, 'obscures' most nearly means:",
      "passage": {
        "title": "Algorithmic Hiring Metrics & Workforce Diversity",
        "text": "[1] Modern human resource departments increasingly deploy automated résumé screening software to evaluate thousands of employment applicants rapidly.\n\n[2] Proponents argue that algorithms eliminate human bias by standardizing keyword scoring across all candidate profiles.\n\n[3] Sociologists argue, however, that relying exclusively on aggregate algorithmic rankings obscures systemic disparities in educational credentialing and work-history gaps, making it harder to discern exceptional non-traditional talent."
      },
      "options": [
        {
          "label": "A",
          "text": "physically hides"
        },
        {
          "label": "B",
          "text": "makes more difficult to understand clearly"
        },
        {
          "label": "C",
          "text": "proves to be false"
        },
        {
          "label": "D",
          "text": "deliberately ignores"
        }
      ],
      "correctAnswer": "B",
      "correctAnswerIndex": 1,
      "whyCorrectTitle": "Why B is Correct (Logical Derivation):",
      "whyCorrect": "Paragraph 3 connects 'obscures systemic disparities' to the outcome 'making it harder to discern exceptional non-traditional talent.' Here, 'obscures' means concealing, clouding, or making difficult to see and understand clearly.",
      "distractorExplanations": [
        {
          "optionLabel": "A",
          "explanation": "Literal physical definition; algorithms do not physically bury or cover items."
        },
        {
          "optionLabel": "C",
          "explanation": "Overstatement; obscuring disparities does not mean disproving their existence."
        },
        {
          "optionLabel": "D",
          "explanation": "Intentionality trap; algorithms do not possess deliberate human intent to ignore."
        }
      ],
      "passageSupport": "Paragraph 3: 'obscures systemic disparities in educational credentialing... making it harder to discern exceptional non-traditional talent.'",
      "eliminationShortcut": "Consequent clause clue: 'obscures X, making it harder to discern Y' -> obscures = renders unclear / makes difficult to see.",
      "educationalObjective": "Analyze abstract verbs describing information concealment in sociotechnical systems."
    }
  ]
};

export const READING_CH3_BLOCK_2: ReadingModule = {
  "moduleNumber": 2,
  "id": "reading-ch3-block2",
  "chapterTitle": "CHAPTER 3 — VOCABULARY IN CONTEXT",
  "moduleTitle": "LOGICAL SIGNALS, CONTRAST, & CAUSAL CONSTRAINTS",
  "endLabel": "MODULE COMPLETE",
  "sections": [
    {
      "id": "ch3-b2-sec1",
      "sectionNumber": "1",
      "sectionTitle": "SEMANTIC DIRECTIONALITY & STRUCTURAL PIVOTS",
      "content": [
        "Vocabulary meaning is constrained by transition markers. Authors use **Four Structural Clues** to lock in semantic directionality:",
        "1. **Contrast** (*However, Yet, Conversely, Far from, Rather than*): Forces an antonymous/opposite relationship.\n2. **Concession** (*Granted, Admittedly, While, Even if*): Acknowledges a baseline before restricting the primary claim.\n3. **Causal/Result** (*Hence, Consequently, Insofar as, Precludes*): Establishes logical preconditions or outcomes.\n4. **Elaboration** (*Specifically, That is, Indeed*): Restates ideas in narrower, more concrete terms."
      ]
    },
    {
      "id": "ch3-b2-sec2",
      "sectionNumber": "2",
      "sectionTitle": "THE EXTENDED CONTRAST METHOD",
      "content": [
        "Contrast pivots require precise semantic inversion:",
        "**The Contrast Formula**:\nEstablished Trait (A) + Contrast Pivot ('Rather than' or 'Far from') → Opposite Target Word (Not A)",
        "If older studies call a process *'erratic and unpredictable'* and new data reveal a *'calculated strategy'*, the target word must be the semantic opposite of erratic (e.g., *methodical*, *systematic*, *deliberate*)."
      ]
    },
    {
      "id": "ch3-b2-sec3",
      "sectionNumber": "3",
      "sectionTitle": "WORKED CASE STUDY — ECONOMIC ANALYSIS & LABOR AUTOMATION",
      "content": [
        "Analyze how causal and contrast signals dictate the exact meaning of 'correspond' and 'preclude' in economic discourse."
      ],
      "passage": {
        "title": "Labor Economics & Technological Displacement",
        "text": "[1] Public discourse surrounding automation frequently frames technological change as an unmitigated zero-sum contest between labor and capital: as mechanical systems assume cognitive tasks, aggregate employment must inevitably collapse. Economic history, however, reveals a far less uniform trajectory. Innovations frequently eliminate discrete sub-tasks while simultaneously generating complementary demand for novel proficiencies.\n\n[2] The structural friction lies in distributional asymmetry. Workers whose existing skill profiles correspond strictly to routine physical execution face rapid dislocation. Conversely, displacement in one sector does not preclude long-term employment growth in adjacent industries, provided institutional retraining mechanisms bridge the transitional deficit."
      },
      "questions": [
        {
          "id": "ch3-w3",
          "questionNumber": 3,
          "label": "WORKED EXAMPLE 3 — LABOR ECONOMICS & TECHNOLOGICAL DISPLACEMENT",
          "prompt": "As used in paragraph 2, 'correspond' most nearly means:",
          "passage": {
            "title": "Labor Economics & Technological Displacement",
            "text": "[1] Public discourse surrounding industrial automation frequently frames technological adoption as an abrupt threat to overall employment.\n\n[2] Economists analyzing long-term employment data note that surges in capital investment in automation technology consistently correspond with shifts in labor demand toward high-skill technical roles. Empirical records demonstrate that hiring patterns align systematically with technological adoption across manufacturing sectors."
          },
          "options": [
            {
              "label": "A",
              "text": "communicate via written messages"
            },
            {
              "label": "B",
              "text": "align directly with or match"
            },
            {
              "label": "C",
              "text": "compete aggressively against"
            },
            {
              "label": "D",
              "text": "gradually adjust to"
            }
          ],
          "correctAnswer": "B",
          "correctAnswerIndex": 1,
          "whyCorrectTitle": "Why B is Correct (Logical Derivation):",
          "whyCorrect": "Paragraph 2 explains that surges in investment 'consistently correspond with shifts in labor demand,' and elaboration follows: 'hiring patterns align systematically with technological adoption.' Therefore, 'correspond' means to match, correlate, or align directly with.",
          "distractorExplanations": [
            {
              "optionLabel": "A",
              "explanation": "Familiar everyday definition (exchanging letters/emails); completely inapplicable in labor economics."
            },
            {
              "optionLabel": "C",
              "explanation": "Injects adversarial competition where the text describes alignment."
            },
            {
              "optionLabel": "D",
              "explanation": "Describes a dynamic process of adjustment rather than an existing structural match."
            }
          ],
          "passageSupport": "Paragraph 2: 'surges in capital investment... consistently correspond with shifts in labor demand... hiring patterns align systematically...'",
          "eliminationShortcut": "Match conceptual domain: investment surges + correspond + with shifts -> 'align with / match'.",
          "educationalObjective": "Identify domain-appropriate substitutions when a common everyday definition (writing) is a distractor."
        },
        {
          "id": "ch3-w4",
          "questionNumber": 4,
          "label": "WORKED EXAMPLE 4 — CAPITAL BARRIERS IN SEMICONDUCTOR MANUFACTURING",
          "prompt": "In paragraph 2, the word 'preclude' most nearly means:",
          "passage": {
            "title": "Capital Barriers in Semiconductor Manufacturing",
            "text": "[1] High capital entry requirements in advanced microchip fabrication do not entirely prevent innovation from venture-backed startups.\n\n[2] However, the requirement for multi-billion-dollar cleanroom facilities does preclude smaller enterprise firms from competing in high-volume silicon manufacturing, effectively preventing them from entering the market without established corporate partnerships."
          },
          "options": [
            {
              "label": "A",
              "text": "prevent or render impossible"
            },
            {
              "label": "B",
              "text": "actively encourage"
            },
            {
              "label": "C",
              "text": "formally criticize"
            },
            {
              "label": "D",
              "text": "temporarily postpone"
            }
          ],
          "correctAnswer": "A",
          "correctAnswerIndex": 0,
          "whyCorrectTitle": "Why A is Correct (Logical Derivation):",
          "whyCorrect": "Paragraph 2 states that facility costs 'preclude smaller enterprise firms from competing... effectively preventing them from entering the market.' The phrase 'effectively preventing' directly defines 'preclude' as preventing or rendering impossible.",
          "distractorExplanations": [
            {
              "optionLabel": "B",
              "explanation": "Direct antonym of preclude."
            },
            {
              "optionLabel": "C",
              "explanation": "Conflates a structural/causal outcome with a verbal reprimand."
            },
            {
              "optionLabel": "D",
              "explanation": "Weakens the definitive absolute meaning of preclude (prevent) to mere delay."
            }
          ],
          "passageSupport": "Paragraph 2: 'does preclude smaller enterprise firms... effectively preventing them from entering the market...'",
          "eliminationShortcut": "Immediate paraphrase clue: 'preclude... effectively preventing' -> preclude = prevent/render impossible.",
          "educationalObjective": "Master formal academic causal verbs indicating prevention and structural impossibility."
        }
      ]
    },
    {
      "id": "ch3-b2-sec4",
      "sectionNumber": "4",
      "sectionTitle": "MASTER TAKEAWAY & SPEED HEURISTIC",
      "content": [
        "Summary Takeaway:\n> Always locate the structural transition words surrounding the tested item. Let the directional grammar of the argument (contrast, concession, cause) force the correct synonym."
      ]
    }
  ],
  "practiceQuestions": [
    {
      "id": "ch3-p7",
      "questionNumber": 7,
      "label": "PRACTICE QUESTION 7 — AVIAN IMPRINTING & NEUROLOGICAL DEVELOPMENT",
      "prompt": "As used in paragraph 1, 'fixed' most nearly means:",
      "passage": {
        "title": "Avian Imprinting & Neurological Development",
        "text": "[1] In early ethological studies of waterfowl, researchers treated filial imprinting as a completely fixed behavioral sequence that, once triggered during a critical post-hatch window, could never be altered or reversed by subsequent experience.\n\n[2] Modern neuroethology has revealed that while early auditory cues establish strong behavioral preferences, juvenile geese maintain substantial neural plasticity and can adjust their social bonding behaviors when relocated to foster broods."
      },
      "options": [
        {
          "label": "A",
          "text": "repaired after damage"
        },
        {
          "label": "B",
          "text": "unable or unlikely to change"
        },
        {
          "label": "C",
          "text": "scientifically verified"
        },
        {
          "label": "D",
          "text": "permanently recorded"
        }
      ],
      "correctAnswer": "B",
      "correctAnswerIndex": 1,
      "whyCorrectTitle": "Why B is Correct (Logical Derivation):",
      "whyCorrect": "The text defines 'fixed' immediately in the modifying phrase: 'behavioral sequence that... could never be altered or reversed by subsequent experience.' In ethology, a fixed behavior is unchangeable and rigid.",
      "distractorExplanations": [
        {
          "optionLabel": "A",
          "explanation": "Everyday definition (repaired/mended); irrelevant to behavioral flexibility."
        },
        {
          "optionLabel": "C",
          "explanation": "Conflates scientific validity with rigidity of trait."
        },
        {
          "optionLabel": "D",
          "explanation": "Subtle trap; while fixed traits are recorded, 'fixed' refers to the immutability of the behavior itself."
        }
      ],
      "passageSupport": "Paragraph 1: 'treated filial imprinting as a completely fixed behavioral sequence that... could never be altered or reversed...'",
      "eliminationShortcut": "Immediate modifying clause: 'fixed sequence that... could never be altered' -> fixed = unchangeable.",
      "educationalObjective": "Identify contextual definitions of common adjectives in behavioral biology."
    },
    {
      "id": "ch3-p8",
      "questionNumber": 8,
      "label": "PRACTICE QUESTION 8 — PRIMATE FORAGING & ENVIRONMENTAL LIMITS",
      "prompt": "As used in paragraph 2, 'constrained' most nearly means:",
      "passage": {
        "title": "Primate Foraging & Environmental Limits",
        "text": "[1] Evolutionary anthropologists studying capuchin monkeys documented complex multi-step stone tool usage to crack hard palm nuts in coastal savannahs.\n\n[2] Researchers observed that tool-use behaviors are tightly constrained by local stone availability and soil density, occurring only in specific rocky outcrops where suitable quartzite anvils naturally occur. This geographic confinement shows that primate cultural traditions are mediated by physical habitat geography."
      },
      "options": [
        {
          "label": "A",
          "text": "prevented completely"
        },
        {
          "label": "B",
          "text": "restricted or limited by external conditions"
        },
        {
          "label": "C",
          "text": "artificially created by researchers"
        },
        {
          "label": "D",
          "text": "legally enforced"
        }
      ],
      "correctAnswer": "B",
      "correctAnswerIndex": 1,
      "whyCorrectTitle": "Why B is Correct (Logical Derivation):",
      "whyCorrect": "Paragraph 2 states that tool-use behaviors are 'tightly constrained by local stone availability... occurring only in specific rocky outcrops.' This is summarized as 'geographic confinement,' meaning the behavior is limited or restricted by environmental conditions.",
      "distractorExplanations": [
        {
          "optionLabel": "A",
          "explanation": "Extreme distortion; capuchins DO use tools in specific outcrops, so tool use is not prevented completely."
        },
        {
          "optionLabel": "C",
          "explanation": "Methodological trap; the tool use is natural capuchin culture, not artificial researcher setup."
        },
        {
          "optionLabel": "D",
          "explanation": "Legal/juridical definition; animals are governed by physical ecology, not human laws."
        }
      ],
      "passageSupport": "Paragraph 2: 'tightly constrained by local stone availability... occurring only in specific rocky outcrops... This geographic confinement...'",
      "eliminationShortcut": "Synonym clue: 'constrained by X... occurring only in Y... geographic confinement' -> constrained = restricted / limited.",
      "educationalObjective": "Differentiate degrees of limitation (restricted vs. completely prevented) in primate ecology."
    },
    {
      "id": "ch3-p9",
      "questionNumber": 9,
      "label": "PRACTICE QUESTION 9 — INSECT NAVIGATION & COGNITIVE MAPPING",
      "prompt": "In paragraph 3, 'automatically' most nearly suggests that earlier interpretations:",
      "passage": {
        "title": "Insect Navigation & Cognitive Mapping",
        "text": "[1] Early entomologists described desert ant foraging as a series of simple chemical reflex loops, assuming that workers automatically followed pheromone trails back to the nest without processing spatial geometry.\n\n[2] Subsequent navigational trials demonstrated that Cataglyphis ants integrate celestial polarized light and step-counting path integration to calculate direct homeward vectors.\n\n[3] The researchers noted that earlier scholars had automatically dismissed the possibility of insect spatial representation simply because ant nervous systems are physically compact."
      },
      "options": [
        {
          "label": "A",
          "text": "were made through mechanical processes"
        },
        {
          "label": "B",
          "text": "occurred without sufficient examination of alternative explanations"
        },
        {
          "label": "C",
          "text": "were universally accepted by all scientists"
        },
        {
          "label": "D",
          "text": "could not be revised"
        }
      ],
      "correctAnswer": "B",
      "correctAnswerIndex": 1,
      "whyCorrectTitle": "Why B is Correct (Logical Derivation):",
      "whyCorrect": "Paragraph 3 notes that earlier scholars 'automatically dismissed the possibility... simply because ant nervous systems are physically compact.' Here, 'automatically' means unthinkingly, reflexively, or without critical examination of empirical alternatives.",
      "distractorExplanations": [
        {
          "optionLabel": "A",
          "explanation": "Literal robotics definition (mechanical automation); scholars are human researchers, not machines."
        },
        {
          "optionLabel": "C",
          "explanation": "Overgeneralization; universal consensus is not implied by reflexive dismissal."
        },
        {
          "optionLabel": "D",
          "explanation": "Direct contradiction; the passage shows the interpretation WAS revised by subsequent trials."
        }
      ],
      "passageSupport": "Paragraph 3: 'earlier scholars had automatically dismissed the possibility... simply because ant nervous systems are physically compact.'",
      "eliminationShortcut": "Context clue: 'automatically dismissed... simply because' -> done reflexively / without sufficient consideration.",
      "educationalObjective": "Interpret metaphorical usages of 'automatically' describing uncritical cognitive assumptions."
    },
    {
      "id": "ch3-p10",
      "questionNumber": 10,
      "label": "PRACTICE QUESTION 10 — MUNICIPAL TRANSIT COST-BENEFIT MODELING",
      "prompt": "As used in paragraph 1, 'appearance of precision' most nearly refers to:",
      "passage": {
        "title": "Municipal Transit Cost-Benefit Modeling",
        "text": "[1] Municipal transportation agencies frequently evaluate light-rail proposals using elaborate financial formulas that project economic returns down to fractional dollar increments, creating an appearance of precision that conceals underlying volatility in ridership estimates.\n\n[2] Urban planners note that long-range economic projections depend on unpredictable macroeconomic assumptions regarding future fuel prices, telecommuting trends, and commercial zoning approvals."
      },
      "options": [
        {
          "label": "A",
          "text": "a calculation that looks more certain than the evidence supporting it"
        },
        {
          "label": "B",
          "text": "an attempt to intentionally deceive policymakers"
        },
        {
          "label": "C",
          "text": "a forecast that contains too few numerical details"
        },
        {
          "label": "D",
          "text": "a project whose costs cannot be measured"
        }
      ],
      "correctAnswer": "A",
      "correctAnswerIndex": 0,
      "whyCorrectTitle": "Why A is Correct (Logical Derivation):",
      "whyCorrect": "The text explains that formulas projecting returns 'down to fractional dollar increments' create an 'appearance of precision that conceals underlying volatility.' The phrase refers to numerical outputs that seem exact and reliable on the surface but mask underlying uncertainty.",
      "distractorExplanations": [
        {
          "optionLabel": "B",
          "explanation": "Accusatory/pejorative trap; the passage describes methodological overconfidence, not malicious fraudulent intent."
        },
        {
          "optionLabel": "C",
          "explanation": "Antonym trap; the formulas have TOO MANY numerical details (fractional dollars), not too few."
        },
        {
          "optionLabel": "D",
          "explanation": "Extreme distortion; costs can be measured, but long-range projections carry inherent volatility."
        }
      ],
      "passageSupport": "Paragraph 1: 'project economic returns down to fractional dollar increments, creating an appearance of precision that conceals underlying volatility...'",
      "eliminationShortcut": "Contrast clue: 'fractional dollar increments (exact numbers)' vs. 'conceals underlying volatility' -> illusion of exactness.",
      "educationalObjective": "Analyze rhetorical phrases describing false methodological certainty in policy modeling."
    },
    {
      "id": "ch3-p11",
      "questionNumber": 11,
      "label": "PRACTICE QUESTION 11 — TAXONOMIC CLASSIFICATION OF FUNGAL SPECIES",
      "prompt": "In paragraph 2, 'specificity' most nearly means:",
      "passage": {
        "title": "Taxonomic Classification of Fungal Species",
        "text": "[1] Traditional mycological identification relied heavily on gross morphological features of fruiting bodies, leading to broad groupings of diverse fungi.\n\n[2] High-throughput DNA barcoding has introduced unprecedented specificity to fungal taxonomy, allowing biochemists to differentiate genetically isolated cryptic species that appear outwardly identical under a microscope."
      },
      "options": [
        {
          "label": "A",
          "text": "narrowness and exact detail"
        },
        {
          "label": "B",
          "text": "reliability over time"
        },
        {
          "label": "C",
          "text": "mathematical simplicity"
        },
        {
          "label": "D",
          "text": "scientific neutrality"
        }
      ],
      "correctAnswer": "A",
      "correctAnswerIndex": 0,
      "whyCorrectTitle": "Why A is Correct (Logical Derivation):",
      "whyCorrect": "Paragraph 1 contrasts 'broad groupings' with DNA barcoding introducing 'unprecedented specificity... allowing biochemists to differentiate genetically isolated cryptic species that appear outwardly identical.' Specificity here means fine-grained, exact taxonomic detail.",
      "distractorExplanations": [
        {
          "optionLabel": "B",
          "explanation": "Temporal/consistency trap; specificity is about granularity of distinction, not durability over years."
        },
        {
          "optionLabel": "C",
          "explanation": "Direct contradiction; DNA barcoding is technologically complex, not simple."
        },
        {
          "optionLabel": "D",
          "explanation": "Irrelevant domain shift; objectivity/neutrality is not the contrast being made with 'broad groupings.'"
        }
      ],
      "passageSupport": "Paragraph 2: 'introduced unprecedented specificity... allowing biochemists to differentiate genetically isolated cryptic species that appear outwardly identical...'",
      "eliminationShortcut": "Antonym clue: 'broad groupings' vs. 'unprecedented specificity' -> specificity = exact detail / narrow distinction.",
      "educationalObjective": "Master vocabulary of taxonomic resolution and scientific differentiation."
    },
    {
      "id": "ch3-p12",
      "questionNumber": 12,
      "label": "PRACTICE QUESTION 12 — PALEOCLIMATIC TEMPERATURE RECONSTRUCTIONS",
      "prompt": "As used in paragraph 3, 'defensible' most nearly means:",
      "passage": {
        "title": "Paleoclimatic Temperature Reconstructions",
        "text": "[1] Geochemists analyzing ice core samples from central Greenland measure oxygen isotope ratios (delta-18O) to infer historical atmospheric temperatures.\n\n[2] Because isotope fractionation can be influenced by seasonal precipitation shifts and wind drift, researchers calibrate isotopic data against independent borehole thermometry records.\n\n[3] Climatologists consider temperature reconstructions fully defensible only when multiple independent proxy data streams corroborate the identical multi-century cooling trend."
      },
      "options": [
        {
          "label": "A",
          "text": "physically protected"
        },
        {
          "label": "B",
          "text": "capable of being reasonably justified"
        },
        {
          "label": "C",
          "text": "resistant to future change"
        },
        {
          "label": "D",
          "text": "financially inexpensive"
        }
      ],
      "correctAnswer": "B",
      "correctAnswerIndex": 1,
      "whyCorrectTitle": "Why B is Correct (Logical Derivation):",
      "whyCorrect": "Paragraph 3 states reconstructions are 'defensible only when multiple independent proxy data streams corroborate' the trend. In scientific logic, a claim or model is defensible when it is backed by empirical evidence and can be reasonably supported or justified.",
      "distractorExplanations": [
        {
          "optionLabel": "A",
          "explanation": "Literal military/physical definition (fortified/protected from physical attack)."
        },
        {
          "optionLabel": "C",
          "explanation": "Conflates logical support with static immutability."
        },
        {
          "optionLabel": "D",
          "explanation": "Economic distortion; cost is completely unmentioned."
        }
      ],
      "passageSupport": "Paragraph 3: 'consider temperature reconstructions fully defensible only when multiple independent proxy data streams corroborate...'",
      "eliminationShortcut": "Logical requirement: 'defensible only when corroborated by data' -> defensible = scientifically justifiable.",
      "educationalObjective": "Identify epistemological vocabulary describing empirically supported scientific claims."
    },
    {
      "id": "ch3-p13",
      "questionNumber": 13,
      "label": "PRACTICE QUESTION 13 — HISTORICAL DOCUMENT HERMENEUTICS",
      "prompt": "As used in paragraph 2, 'interpretive' most nearly means:",
      "passage": {
        "title": "Historical Document Hermeneutics",
        "text": "[1] When analyzing nineteenth-century legislative debates, archival historians must distinguish between official verbatim transcripts and partisan newspaper summaries.\n\n[2] Evaluating these texts is fundamentally an interpretive exercise, requiring scholars to understand the rhetorical conventions, editorial motives, and political allegiances of contemporary reporters. Without rigorous contextual interpretation, literal readings of parliamentary reports can produce distorted historical narratives."
      },
      "options": [
        {
          "label": "A",
          "text": "involving an explanation of what information means"
        },
        {
          "label": "B",
          "text": "involving the translation of one language into another"
        },
        {
          "label": "C",
          "text": "involving disagreement without evidence"
        },
        {
          "label": "D",
          "text": "involving a change in factual information"
        }
      ],
      "correctAnswer": "A",
      "correctAnswerIndex": 0,
      "whyCorrectTitle": "Why A is Correct (Logical Derivation):",
      "whyCorrect": "Paragraph 2 defines 'interpretive exercise' by linking it to 'requiring scholars to understand the rhetorical conventions, editorial motives, and political allegiances... Without rigorous contextual interpretation, literal readings... produce distorted narratives.' Here, 'interpretive' means analyzing and explaining the deeper meaning of text beyond literal surface reading.",
      "distractorExplanations": [
        {
          "optionLabel": "B",
          "explanation": "Linguistic translation trap (translating foreign languages); the texts are English parliamentary reports."
        },
        {
          "optionLabel": "C",
          "explanation": "Pejorative trap; interpretation in history relies on evidence, not baseless disagreement."
        },
        {
          "optionLabel": "D",
          "explanation": "Fabrication trap; interpretation analyzes existing facts rather than altering them."
        }
      ],
      "passageSupport": "Paragraph 2: 'fundamentally an interpretive exercise, requiring scholars to understand the rhetorical conventions...'",
      "eliminationShortcut": "Elaboration clue: 'interpretive exercise... requiring scholars to understand motives/conventions' -> involving explanation of meaning.",
      "educationalObjective": "Distinguish historical analysis (hermeneutics/interpretation) from linguistic translation."
    },
    {
      "id": "ch3-p14",
      "questionNumber": 14,
      "label": "PRACTICE QUESTION 14 — ARCHAEOLOGICAL ARTIFACT CHRONOLOGIES",
      "prompt": "In paragraph 3, 'stretch' most nearly means:",
      "passage": {
        "title": "Archaeological Artifact Chronologies",
        "text": "[1] Excavations at a coastal Mediterranean hillfort uncovered ceramic sherds matching styles produced across Aegean maritime trading hubs.\n\n[2] While the ceramic typology indicates regional trade contact during the seventh century BCE, some researchers claimed the presence of three decorative amphora handles proved permanent colonial occupation.\n\n[3] Senior archaeologists cautioned that attempting to stretch limited ceramic fragments into definitive proof of military conquest exceeds the evidentiary boundaries of the data."
      },
      "options": [
        {
          "label": "A",
          "text": "extend the evidence physically"
        },
        {
          "label": "B",
          "text": "interpret the evidence beyond what reasonably supports the conclusion"
        },
        {
          "label": "C",
          "text": "examine the evidence over a long period"
        },
        {
          "label": "D",
          "text": "repeat an argument in greater detail"
        }
      ],
      "correctAnswer": "B",
      "correctAnswerIndex": 1,
      "whyCorrectTitle": "Why B is Correct (Logical Derivation):",
      "whyCorrect": "Paragraph 3 warns against attempting to 'stretch limited ceramic fragments into definitive proof... exceeds the evidentiary boundaries of the data.' Metaphorically, to stretch evidence means to overextend or over-interpret it beyond what it legitimately proves.",
      "distractorExplanations": [
        {
          "optionLabel": "A",
          "explanation": "Literal physical definition (pulling/elongating a rubber material)."
        },
        {
          "optionLabel": "C",
          "explanation": "Temporal distortion; the issue is overreaching claims, not taking a long time to analyze."
        },
        {
          "optionLabel": "D",
          "explanation": "Redundancy trap; stretching an argument is about overreaching inferences, not mere repetition."
        }
      ],
      "passageSupport": "Paragraph 3: 'stretch limited ceramic fragments into definitive proof of military conquest exceeds the evidentiary boundaries of the data.'",
      "eliminationShortcut": "Collocation clue: 'stretch limited fragments into proof... exceeds evidentiary boundaries' = overextend / interpret beyond reasonable limits.",
      "educationalObjective": "Interpret metaphorical usages of 'stretch' regarding evidentiary overreach in historiography."
    }
  ]
};

export const READING_CH3_BLOCK_3: ReadingModule = {
  "moduleNumber": 3,
  "id": "reading-ch3-block3",
  "chapterTitle": "CHAPTER 3 — VOCABULARY IN CONTEXT",
  "moduleTitle": "SECONDARY DEFINITIONS & POLYSEMOUS ACADEMIC WORDS",
  "endLabel": "MODULE COMPLETE",
  "sections": [
    {
      "id": "ch3-b3-sec1",
      "sectionNumber": "1",
      "sectionTitle": "THE POLYSEMY PHENOMENON ON THE DIGITAL SAT",
      "content": [
        "The Digital SAT heavily targets **polysemous words** (words with multiple meanings across academic and technical registers).",
        "When a simple everyday word is tested (e.g., *qualify*, *plastic*, *compromise*, *flag*, *currency*, *harbor*), the primary definition is almost **never** the correct answer. The test probes your ability to resist unconscious recognition and track contextual shifts."
      ]
    },
    {
      "id": "ch3-b3-sec2",
      "sectionNumber": "2",
      "sectionTitle": "THE TOP 12 SAT SECONDARY DEFINITIONS TO MASTER",
      "content": [
        "1. **Qualify**: limit, modify, or restrict a claim.\n2. **Compromise**: endanger, undermine, or expose to risk.\n3. **Plastic / Plasticity**: moldable, adaptable, or flexible.\n4. **Flag**: decline in vigor/energy, or signal a defect.\n5. **Currency**: widespread acceptance or circulation of an idea.\n6. **Harbor**: hold/maintain a belief, suspicion, or pathogen internally.\n7. **Register**: record, detect a measurement, or convey an emotion.\n8. **Reserved**: restrained, formal, emotionally reticent.\n9. **Fashion**: construct, shape, or mold through effort.\n10. **Sound**: logically valid, robust, free from defect.\n11. **Temper**: moderate, soften, or balance an extreme state.\n12. **Economy**: restraint, efficiency, avoidance of waste."
      ]
    },
    {
      "id": "ch3-b3-sec3",
      "sectionNumber": "3",
      "sectionTitle": "WORKED CASE STUDY — COGNITIVE SCIENCE & NEURAL PLASTICITY",
      "content": [
        "Observe how 'qualify' and 'plastic' function in high-density neurobiological prose."
      ],
      "passage": {
        "title": "Cortical Remapping & Sensory Deprivation",
        "text": "[1] Early twentieth-century neuroanatomy rested upon the dogma that adult mammalian cerebral architecture was rigidly fixed post-development. Seminal clinical observations, however, compelled researchers to qualify this sweeping assertion. When peripheral sensory inputs are systematically interrupted, the unutilized somatosensory cortex does not remain idle; instead, adjacent representational zones expand into the denervated cortical territory.\n\n[2] This remarkable functional plasticity demonstrates that central neural circuits retain a high degree of organizational malleability across the entire organismal lifespan."
      },
      "questions": [
        {
          "id": "ch3-w5",
          "questionNumber": 5,
          "label": "WORKED EXAMPLE 5 — CORTICAL REMAPPING & SENSORY DEPRIVATION",
          "prompt": "As used in paragraph 1, 'qualify' most nearly means:",
          "passage": {
            "title": "Cortical Remapping & Sensory Deprivation",
            "text": "[1] Early twentieth-century neuroanatomy rested upon the dogma that adult cerebral architecture was rigidly fixed post-development. Recent neuroimaging studies of sensory deprivation have compelled neuroscientists to qualify this sweeping assertion, modifying their claims to acknowledge that localized neural reorganization occurs throughout adulthood."
          },
          "options": [
            {
              "label": "A",
              "text": "certify as legally eligible"
            },
            {
              "label": "B",
              "text": "limit or make less absolute"
            },
            {
              "label": "C",
              "text": "vigorously reaffirm"
            },
            {
              "label": "D",
              "text": "completely invalidate"
            }
          ],
          "correctAnswer": "B",
          "correctAnswerIndex": 1,
          "whyCorrectTitle": "Why B is Correct (Logical Derivation):",
          "whyCorrect": "The passage notes that early researchers believed adult brain architecture was 'rigidly fixed.' Modern observations forced researchers to 'qualify this sweeping assertion, modifying their claims.' In rhetorical and academic contexts, to qualify an assertion means to place conditions upon it, limit it, or make it less absolute.",
          "distractorExplanations": [
            {
              "optionLabel": "A",
              "explanation": "Primary everyday meaning (certifying/eligibility); completely inapplicable to a scientific claim."
            },
            {
              "optionLabel": "C",
              "explanation": "Direct opposite; the new findings weakened the assertion rather than reaffirming it."
            },
            {
              "optionLabel": "D",
              "explanation": "Extreme overstatement; qualifying a claim means adding conditions/nuance, not total invalidation."
            }
          ],
          "passageSupport": "Paragraph 1: 'compelled neuroscientists to qualify this sweeping assertion, modifying their claims...'",
          "eliminationShortcut": "Recognize the classic SAT secondary definition: in academic passages, 'qualify an assertion/claim' ALWAYS means to limit or restrict its scope.",
          "educationalObjective": "Master the academic definition of 'qualify' as a modification or limitation of claim strength."
        },
        {
          "id": "ch3-w6",
          "questionNumber": 6,
          "label": "WORKED EXAMPLE 6 — AUDITORY CORTEX ADAPTATION & SYNAPTIC FLEXIBILITY",
          "prompt": "In paragraph 2, 'plasticity' most nearly refers to:",
          "passage": {
            "title": "Auditory Cortex Adaptation & Synaptic Flexibility",
            "text": "[1] When individuals experience severe auditory deprivation, cortical regions previously dedicated to sound processing do not remain permanently dormant.\n\n[2] Micro-electrode recording arrays demonstrate remarkable neural plasticity: adjacent somatosensory inputs rebind to auditory cortical networks, illustrating the brain's structural capacity to reconfigure synaptic pathways."
          },
          "options": [
            {
              "label": "A",
              "text": "synthetic chemical composition"
            },
            {
              "label": "B",
              "text": "capacity for structural adaptation and change"
            },
            {
              "label": "C",
              "text": "structural brittleness under physical pressure"
            },
            {
              "label": "D",
              "text": "impermeability to external stimuli"
            }
          ],
          "correctAnswer": "B",
          "correctAnswerIndex": 1,
          "whyCorrectTitle": "Why B is Correct (Logical Derivation):",
          "whyCorrect": "Paragraph 2 defines 'neural plasticity' with the elaboration: 'illustrating the brain's structural capacity to reconfigure synaptic pathways.' Plasticity here means the capacity for structural adaptation and organizational malleability.",
          "distractorExplanations": [
            {
              "optionLabel": "A",
              "explanation": "Literal material definition (commercial polymer plastics)."
            },
            {
              "optionLabel": "C",
              "explanation": "Antonym; plasticity is the ability to deform/adapt without breaking."
            },
            {
              "optionLabel": "D",
              "explanation": "Direct contradiction; neural plasticity is driven by responses to external stimuli."
            }
          ],
          "passageSupport": "Paragraph 2: 'remarkable neural plasticity... illustrating the brain's structural capacity to reconfigure synaptic pathways.'",
          "eliminationShortcut": "Look for synonym appositives: 'plasticity' is directly linked with 'malleability' or 'capacity to reconfigure' in the same sentence.",
          "educationalObjective": "Recognize technical biological usages of 'plastic' / 'plasticity' meaning adaptable or moldable."
        }
      ]
    },
    {
      "id": "ch3-b3-sec4",
      "sectionNumber": "4",
      "sectionTitle": "MASTER TAKEAWAY & SPEED HEURISTIC",
      "content": [
        "Key Takeaway:\n> Everyday words in advanced passages are immediate red flags. Reject the colloquial definition and look for academic secondary meanings (such as limiting a claim or describing structural flexibility)."
      ]
    }
  ],
  "practiceQuestions": [
    {
      "id": "ch3-p15",
      "questionNumber": 15,
      "label": "PRACTICE QUESTION 15 — PLANT COMMUNITIES IN URBAN VACANT LOTS",
      "prompt": "The word 'complicates' most nearly means:",
      "passage": {
        "title": "Plant Communities in Urban Vacant Lots",
        "text": "[1] For decades, city planners treated vacant lots as failures of urban development: neglected spaces waiting to be converted into housing, parking, or commercial property. Ecologists, however, have begun to regard some of these sites differently. Even an apparently disorderly lot may contain complex communities of insects, birds, and plants that have adapted to conditions unlike those found in either carefully managed parks or surrounding natural areas.\n\n[2] This observation does not imply that every abandoned parcel should be preserved indefinitely. Rather, it complicates the assumption that ecological value increases in direct proportion to human design. A landscape that appears unplanned to a city official may represent a temporary but unusually productive habitat."
      },
      "options": [
        {
          "label": "A",
          "text": "makes more difficult to understand"
        },
        {
          "label": "B",
          "text": "introduces additional factors or nuance into"
        },
        {
          "label": "C",
          "text": "criticizes publicly"
        },
        {
          "label": "D",
          "text": "prevents the completion of"
        }
      ],
      "correctAnswer": "B",
      "correctAnswerIndex": 1,
      "whyCorrectTitle": "Why B is Correct (Logical Derivation):",
      "whyCorrect": "The text explains that observing ecological value in unplanned lots 'complicates the assumption that ecological value increases in direct proportion to human design.' It doesn't destroy the assumption or make it unintelligible; rather, it introduces additional factors, caveats, and nuance into a simple formula.",
      "distractorExplanations": [
        {
          "optionLabel": "A",
          "explanation": "Common everyday definition (causing confusion/difficulty); here the focus is adding intellectual nuance to a simplified theory."
        },
        {
          "optionLabel": "C",
          "explanation": "Verbal hostility trap; 'complicates' is an analytical operation, not a public reprimand."
        },
        {
          "optionLabel": "D",
          "explanation": "Action/process trap; complicates refers to modifying an assumption, not stopping a physical project."
        }
      ],
      "passageSupport": "Paragraph 2: 'Rather, it complicates the assumption that ecological value increases in direct proportion to human design.'",
      "eliminationShortcut": "Rhetorical function clue: complicating a simple linear assumption = introducing nuance / additional variables.",
      "educationalObjective": "Understand the academic usage of 'complicate' as adding theoretical nuance rather than causing confusion."
    },
    {
      "id": "ch3-p16",
      "questionNumber": 16,
      "label": "PRACTICE QUESTION 16 — INFRASTRUCTURE DEVELOPMENT & REGIONAL ECONOMIES",
      "prompt": "The word 'obscure' most nearly means:",
      "passage": {
        "title": "Infrastructure Development & Regional Economies",
        "text": "[1] Governments frequently describe infrastructure projects in terms of their immediate economic benefits: reduced transportation costs, increased trade, or faster access to markets. Yet economists evaluating such projects have increasingly emphasized their distributional consequences.\n\n[2] A railway may increase national output while benefiting some regions far more than others, and a new highway may stimulate commercial development while simultaneously diminishing the economic viability of communities bypassed by it. The value of infrastructure cannot be assessed solely through aggregate growth figures. Those figures may obscure the uneven manner in which economic gains and losses are distributed."
      },
      "options": [
        {
          "label": "A",
          "text": "hide from clear view"
        },
        {
          "label": "B",
          "text": "explain in detail"
        },
        {
          "label": "C",
          "text": "exaggerate deliberately"
        },
        {
          "label": "D",
          "text": "calculate precisely"
        }
      ],
      "correctAnswer": "A",
      "correctAnswerIndex": 0,
      "whyCorrectTitle": "Why A is Correct (Logical Derivation):",
      "whyCorrect": "Paragraph 2 states that aggregate growth figures 'may obscure the uneven manner in which economic gains and losses are distributed.' Here, 'obscure' means to mask, conceal, or hide from clear view and analysis.",
      "distractorExplanations": [
        {
          "optionLabel": "B",
          "explanation": "Direct antonym; aggregate figures mask detail rather than explaining it."
        },
        {
          "optionLabel": "C",
          "explanation": "Intentionality trap; statistics may conceal disparities without deliberate intent to exaggerate."
        },
        {
          "optionLabel": "D",
          "explanation": "Opposite effect; aggregate figures fail to calculate regional distribution precisely."
        }
      ],
      "passageSupport": "Paragraph 2: 'The value of infrastructure cannot be assessed solely through aggregate growth figures. Those figures may obscure the uneven manner...'",
      "eliminationShortcut": "Contextual clue: aggregate figures vs. hidden regional disparities -> obscure = hide from view.",
      "educationalObjective": "Identify verbs describing data concealment and statistical aggregation bias."
    },
    {
      "id": "ch3-p17",
      "questionNumber": 17,
      "label": "PRACTICE QUESTION 17 — THERMAL PROPERTIES OF SYNTHETIC MATERIALS",
      "prompt": "The word 'preliminary' most nearly means:",
      "passage": {
        "title": "Thermal Properties of Synthetic Materials",
        "text": "[1] In laboratory conditions, the new material demonstrated an ability to retain heat more effectively than several existing alternatives. Researchers caution, however, that these results cannot yet be generalized to large-scale industrial use.\n\n[2] Manufacturing costs, long-term durability, and performance under variable environmental conditions remain insufficiently understood. The findings are therefore promising, but they are preliminary rather than conclusive."
      },
      "options": [
        {
          "label": "A",
          "text": "conducted secretly"
        },
        {
          "label": "B",
          "text": "occurring before a final stage or evaluation"
        },
        {
          "label": "C",
          "text": "unrelated to the main investigation"
        },
        {
          "label": "D",
          "text": "universally recognized"
        }
      ],
      "correctAnswer": "B",
      "correctAnswerIndex": 1,
      "whyCorrectTitle": "Why B is Correct (Logical Derivation):",
      "whyCorrect": "Paragraph 2 contrasts 'preliminary' directly with 'conclusive': 'promising, but they are preliminary rather than conclusive.' In scientific research, preliminary findings are early, initial results that precede final verification.",
      "distractorExplanations": [
        {
          "optionLabel": "A",
          "explanation": "Conspiracy trap; early laboratory research is standard science, not secret operations."
        },
        {
          "optionLabel": "C",
          "explanation": "Irrelevance trap; the findings are directly relevant, just early."
        },
        {
          "optionLabel": "D",
          "explanation": "Direct antonym; preliminary findings are not yet universally established or recognized."
        }
      ],
      "passageSupport": "Paragraph 2: 'The findings are therefore promising, but they are preliminary rather than conclusive.'",
      "eliminationShortcut": "Antonym clue: 'preliminary rather than conclusive' -> preliminary = initial / occurring before final evaluation.",
      "educationalObjective": "Identify scientific hedging vocabulary denoting early-stage findings."
    },
    {
      "id": "ch3-p18",
      "questionNumber": 18,
      "label": "PRACTICE QUESTION 18 — REJECTION OF EARLY SCIENTIFIC HYPOTHESES",
      "prompt": "In the sentence, which replacement best preserves the meaning and tone of 'dismissed'?",
      "passage": {
        "title": "Rejection of Early Scientific Hypotheses",
        "text": "[1] Although the hypothesis was initially dismissed by many researchers, later experiments provided evidence supporting several of its predictions."
      },
      "options": [
        {
          "label": "A",
          "text": "celebrated"
        },
        {
          "label": "B",
          "text": "rejected without serious consideration"
        },
        {
          "label": "C",
          "text": "investigated thoroughly"
        },
        {
          "label": "D",
          "text": "modified slightly"
        }
      ],
      "correctAnswer": "B",
      "correctAnswerIndex": 1,
      "whyCorrectTitle": "Why B is Correct (Logical Derivation):",
      "whyCorrect": "The sentence contrasts being 'initially dismissed by many researchers' with 'later experiments provided evidence supporting several of its predictions.' In academic contexts, to dismiss a hypothesis initially means to reject it offhand or give it little serious initial weight.",
      "distractorExplanations": [
        {
          "optionLabel": "A",
          "explanation": "Direct antonym."
        },
        {
          "optionLabel": "C",
          "explanation": "Opposite action; if it were investigated thoroughly initially, it would not have been dismissed offhand."
        },
        {
          "optionLabel": "D",
          "explanation": "Understatement; dismissal is rejection, not minor revision."
        }
      ],
      "passageSupport": "Paragraph 1: 'Although the hypothesis was initially dismissed by many researchers, later experiments provided evidence supporting...'",
      "eliminationShortcut": "Contrast clue: 'initially dismissed... later experiments provided supporting evidence' -> dismissed = rejected without serious consideration.",
      "educationalObjective": "Recognize academic reporting verbs denoting early theoretical rejection."
    }
  ]
};
