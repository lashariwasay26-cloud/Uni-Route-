import { ReadingModule } from './readingTypes';

export const READING_MODULE_1: ReadingModule = {
  "moduleNumber": 1,
  "id": "reading-ch1-mod1",
  "chapterTitle": "CHAPTER 1 — FOUNDATIONS OF READING",
  "moduleTitle": "MAIN IDEA: WHAT IS THE PASSAGE REALLY SAYING?",
  "endLabel": "END OF MODULE 1",
  "sections": [
    {
      "id": "ch1-m1-sec1",
      "sectionNumber": "1",
      "sectionTitle": "THE 3-TIER HIERARCHY: SUBJECT VS. TOPIC VS. MAIN IDEA",
      "content": [
        "The single most frequent error on SAT main-idea questions is selecting an answer choice that accurately names the SUBJECT or TOPIC rather than the author's actual claim.",
        "Always distinguish among the three levels:\n\n1. SUBJECT (Broad Category):\nWhat broad domain is discussed? (e.g., 'Urban public transit').\n\n2. TOPIC (Specific Focus):\nWhat particular aspect is explored? (e.g., 'Fare-free transit policies in mid-sized cities').\n\n3. MAIN IDEA (Organizing Assertion):\nWhat is the author's primary conclusion or thesis regarding that topic? (e.g., 'While fare-free transit increases ridership, it undermines system maintenance unless backfilled by dedicated municipal subsidies.').",
        "Core Rule:\n> A main idea is never a topic label; it is a complete, falsifiable intellectual claim that governs the entire passage."
      ]
    },
    {
      "id": "ch1-m1-sec2",
      "sectionNumber": "2",
      "sectionTitle": "THE UMBRELLA TEST & INTELLECTUAL MOVEMENT",
      "content": [
        "To verify whether an assertion is the true main idea, apply the Umbrella Test:\n- The Main Idea is the umbrella.\n- The supporting data, historical context, concessions, and scientific citations sit underneath it.",
        "If removing a sentence destroys the overall directional logic of the passage, that sentence captures the main idea. If removing it leaves the central thesis intact, it is merely supporting evidence.",
        "Common Intellectual Movement Patterns:\n1. Historical Orthodoxy → Anomalous Discovery → Revised Paradigm\n2. Proposed Solution → Unforeseen Friction → Qualified Compromise\n3. Observed Phenomenon → Competing Hypotheses → Decisive Empirical Test"
      ]
    },
    {
      "id": "ch1-m1-sec3",
      "sectionNumber": "3",
      "sectionTitle": "THE 4 CLASSIC MAIN-IDEA DISTRACTOR TRAPS",
      "content": [
        "1. The 'Too Narrow' Detail Trap:\nAccurately restates a true fact from paragraph 2, but ignores the overarching thesis of the passage.\n\n2. The 'Too Broad' Extrapolation Trap:\nExpands a localized scientific finding into a sweeping, universal claim about all ecosystems or global history.\n\n3. The 'Misattributed Perspective' Trap:\nSelects an opposing or traditional viewpoint that the author introduced solely to qualify or refute.\n\n4. The 'True-in-Real-Life' Trap:\nStates a scientifically or historically accurate fact that is nowhere mentioned or argued in the actual text."
      ]
    },
    {
      "id": "ch1-m1-sec4",
      "sectionNumber": "4",
      "sectionTitle": "WORKED EXAMPLE & CONCEPT DEMONSTRATION",
      "content": [
        "Analyze how intellectual movement reveals the true main idea in historical analysis."
      ],
      "passage": {
        "title": "Agrarian Intensification and Urban Collapse in Bronze Age Civilizations",
        "text": "[1] For decades, archaeologists attributed the abandonment of major Bronze Age settlements in the eastern Mediterranean almost exclusively to catastrophic multi-year mega-droughts. Prolonged climate desiccation was thought to have depleted municipal granaries and triggered swift demographic collapse.\n\n[2] Recent isotopic analyses of paleobotanical samples, however, have significantly complicated this unilinear narrative. Excavations at several peripheral sites demonstrate that agricultural yields remained stable well into the abandonment phase. Concurrently, administrative clay tablets document acute disruptions in maritime trade routes and the breakdown of elite redistributive networks. Environmental stress undeniably placed structural pressure on these polities, but their collapse was ultimately precipitated by the institutional fragility of their centralized economies."
      },
      "questions": [
        {
          "id": "ch1-w1",
          "questionNumber": 1,
          "label": "WORKED EXAMPLE 1 — READING COMPREHENSION",
          "prompt": "Which choice best states the main idea of the passage?",
          "options": [
            {
              "label": "A",
              "text": "Bronze Age settlements in the Mediterranean maintained robust agricultural output despite severe climate desiccation."
            },
            {
              "label": "B",
              "text": "While climate stress contributed to Bronze Age urban collapse, institutional and economic vulnerabilities were decisive factors."
            },
            {
              "label": "C",
              "text": "Recent isotopic analyses have disproven the theory that drought affected Bronze Age civilizations."
            },
            {
              "label": "D",
              "text": "Centralized redistributive networks are inherently unsustainable during periods of geopolitical conflict."
            }
          ],
          "correctAnswer": "B",
          "correctAnswerIndex": 1,
          "whyCorrectTitle": "Why B is Correct (Logical Derivation):",
          "whyCorrect": "The passage begins with the traditional climatic view (paragraph 1), introduces new botanical and administrative evidence (paragraph 2), and concludes with the synthesis: 'Environmental stress undeniably placed structural pressure on these polities, but their collapse was ultimately precipitated by the institutional fragility of their centralized economies.' Choice B accurately captures this complete intellectual movement.",
          "distractorExplanations": [
            {
              "optionLabel": "A",
              "explanation": "Too narrow; accurately captures a supporting detail from paragraph 2, but ignores the overarching thesis regarding the causes of collapse."
            },
            {
              "optionLabel": "C",
              "explanation": "Extreme distortion; the text states environmental stress 'undeniably placed structural pressure,' rather than disproving drought occurred."
            },
            {
              "optionLabel": "D",
              "explanation": "Overly broad philosophical extrapolation that goes far beyond the Bronze Age scope."
            }
          ],
          "passageSupport": "Paragraph 2 concluding sentence: 'Environmental stress undeniably placed structural pressure on these polities, but their collapse was ultimately precipitated by the institutional fragility of their centralized economies.'",
          "eliminationShortcut": "Look for the concession-to-thesis pivot: 'While X contributed, Y was decisive' matches the author's final conclusion.",
          "educationalObjective": "Synthesize passage movement from historical assumption to evidence-based multi-causal conclusion."
        }
      ]
    }
  ],
  "practiceQuestions": [
    {
      "id": "ch1-p1",
      "questionNumber": 1,
      "label": "PRACTICE QUESTION 1 — VIOLLET-LE-DUC AND THE GOTHIC RIB VAULT",
      "prompt": "Which choice best states the main idea of the passage?",
      "passage": {
        "title": "Viollet-le-Duc and the Gothic Rib Vault",
        "text": "In his landmark studies of medieval architecture, Eugène Viollet-le-Duc argued that the transition from Romanesque to Gothic architecture in twelfth-century Northern France was driven entirely by structural rationalism. In this view, the invention of the rib vault and the pointed arch occurred as practical engineering solutions to redirect the lateral thrust of heavy stone ceilings, allowing builders to construct taller, lighter walls. However, contemporary architectural historians have challenged this purely functional explanation, noting that early Gothic rib vaults often did not perform the load-bearing roles previously attributed to them. In several early cathedrals, structural tests show that Romanesque-style thick walls were still doing the primary stabilizing work. Instead, the rib vault was frequently adopted for its visual qualities: it created a sense of unified vertical space and allowed light to penetrate the nave. Thus, the Gothic transition was as much an aesthetic and symbolic revolution as an engineering breakthrough."
      },
      "options": [
        {
          "label": "A",
          "text": "The transition from Romanesque to Gothic architecture was a purely functional engineering shift designed to prevent stone ceilings from collapsing."
        },
        {
          "label": "B",
          "text": "Structural assessments have proven that early Gothic rib vaults provided no physical stabilization whatsoever to cathedral stone walls."
        },
        {
          "label": "C",
          "text": "Viollet-le-Duc's architectural studies are highly regarded because they accurately predicted the physical behavior of early cathedral arches."
        },
        {
          "label": "D",
          "text": "The adoption of the Gothic rib vault was not a purely functional engineering response to structural forces, but was also driven by aesthetic and symbolic desires."
        }
      ],
      "correctAnswer": "D",
      "correctAnswerIndex": 3,
      "whyCorrectTitle": "Why D is the Best Answer:",
      "whyCorrect": "The passage begins by presenting Viollet-le-Duc's traditional view of 'structural rationalism,' introduces contemporary evidence showing early rib vaults were not doing all the load-bearing work, and concludes with the central claim: 'Thus, the Gothic transition was as much an aesthetic and symbolic revolution as an engineering breakthrough.' Choice D accurately summarizes this thesis.",
      "distractorExplanations": [
        {
          "optionLabel": "A",
          "explanation": "This states the traditional view of Viollet-le-Duc that the passage refutes."
        },
        {
          "optionLabel": "B",
          "explanation": "Too extreme ('no physical stabilization whatsoever'); the text notes thick walls were doing the primary work, not that vaults provided zero stabilization."
        },
        {
          "optionLabel": "C",
          "explanation": "Contradicts the text, which shows Viollet-le-Duc's theory was challenged by contemporary structural tests."
        }
      ],
      "passageSupport": "Final sentence: 'Thus, the Gothic transition was as much an aesthetic and symbolic revolution as an engineering breakthrough.'",
      "eliminationShortcut": "Look for the concluding thesis statement introduced by 'Thus'.",
      "educationalObjective": "Identify main ideas in passages that shift from traditional views to qualified contemporary perspectives."
    },
    {
      "id": "ch1-p2",
      "questionNumber": 2,
      "label": "PRACTICE QUESTION 2 — APPALACHIAN ENGLISH AND BIDIALECTAL EDUCATION",
      "prompt": "Which choice best states the main idea of the passage?",
      "passage": {
        "title": "Appalachian English and Bidialectal Education",
        "text": "For decades, educational administrators in Central Appalachia viewed local linguistic varieties as deficient and ungrammatical, attributing regional nonstandard speech patterns to cultural isolation or incomplete language acquisition. This perspective led to policies that pathologized Appalachian English, urging students to eradicate native phonological and syntactic structures. However, sociolinguists have challenged this deficit model by demonstrating that Appalachian English is not a collection of arbitrary errors, but a highly systematic and rule-governed variety. Features such as a-prefixing (e.g., 'a-running') and specific verb paradigms follow strict grammatical constraints inherited from seventeenth-century Scots-Irish dialects. By recognizing these structures as legitimate linguistic systems, contemporary educators can implement bidialectal curricula that respect students' native speech while introducing standard academic codes, thereby improving academic self-efficacy and language skills simultaneously."
      },
      "options": [
        {
          "label": "A",
          "text": "Appalachian English is a deficient linguistic variety that should be replaced with standard academic codes as early as possible."
        },
        {
          "label": "B",
          "text": "By establishing that Appalachian English is rule-governed rather than deficient, sociolinguists have provided a basis for respectful, bidialectal educational approaches."
        },
        {
          "label": "C",
          "text": "The grammatical structure known as a-prefixing is a direct descendant of seventeenth-century Scots-Irish dialects."
        },
        {
          "label": "D",
          "text": "Educational administrators originally pathologized Appalachian English because they wished to isolate the region culturally."
        }
      ],
      "correctAnswer": "B",
      "correctAnswerIndex": 1,
      "whyCorrectTitle": "Why B is the Best Answer:",
      "whyCorrect": "The passage presents the historical deficit model, contrasts it with sociolinguistic proof that Appalachian English is rule-governed, and concludes that this evidence supports bidialectal education. Choice B summarizes this overall arc perfectly.",
      "distractorExplanations": [
        {
          "optionLabel": "A",
          "explanation": "Directly contradicts the passage's argument against the deficit model."
        },
        {
          "optionLabel": "C",
          "explanation": "Too narrow; a-prefixing is mentioned as an example of rule-governed grammar, not the main idea."
        },
        {
          "optionLabel": "D",
          "explanation": "Misstates causality; administrators attributed nonstandard speech to isolation, rather than seeking to isolate the region."
        }
      ],
      "passageSupport": "Paragraph concluding sentence: 'By recognizing these structures as legitimate linguistic systems, contemporary educators can implement bidialectal curricula...'",
      "eliminationShortcut": "Identify the pivot away from the historical 'deficit model' to the modern sociolinguistic consensus.",
      "educationalObjective": "Synthesize passage logic connecting sociolinguistic research to educational applications."
    },
    {
      "id": "ch1-p3",
      "questionNumber": 3,
      "label": "PRACTICE QUESTION 3 — CHACO CANYON GREAT HOUSES",
      "prompt": "Which choice best states the main idea of the passage?",
      "passage": {
        "title": "Chaco Canyon Great Houses",
        "text": "The monumental 'great houses' of Chaco Canyon, built by the Ancestral Puebloans between 900 and 1150 CE, feature massive sandstone masonry and hundreds of interconnected rooms. Historically, scholars interpreted these structures as dense urban residential capitals housing permanent populations of thousands. However, recent architectural and bioarchaeological re-evaluations have unsettled this view. Excavations revealed surprisingly sparse domestic hearths and minimal daily residential refuse within the rooms. Furthermore, light and shadow alignments built into key structures correspond precisely to lunar and solar solstices, and artifact deposits include exotic items like Mesoamerican macaws and cacao. Rather than permanent residential hubs, Chacoan great houses are increasingly understood as regional ceremonial and gathering centers visited seasonally by pilgrims for rituals and trade."
      },
      "options": [
        {
          "label": "A",
          "text": "The sandstone masonry of Chaco Canyon's great houses represents the most advanced architectural engineering in North America prior to 1200 CE."
        },
        {
          "label": "B",
          "text": "Mesoamerican trade items found at Chaco Canyon prove that Ancestral Puebloans migrated south during severe winter solstices."
        },
        {
          "label": "C",
          "text": "Recent archaeological evidence indicates that Chaco Canyon's great houses functioned primarily as seasonal ceremonial gathering centers rather than permanent urban residential hubs."
        },
        {
          "label": "D",
          "text": "The lack of domestic hearths in Chaco Canyon demonstrates that Ancestral Puebloans did not use fire for food preparation."
        }
      ],
      "correctAnswer": "C",
      "correctAnswerIndex": 2,
      "whyCorrectTitle": "Why C is the Best Answer:",
      "whyCorrect": "The passage sets up the traditional interpretation (permanent residential capitals) and refutes it using archaeological evidence (few hearths, astronomical alignments, exotic goods), arriving at the new consensus in the final sentence: Chacoan great houses were seasonal ceremonial centers. Choice C captures this main thesis.",
      "distractorExplanations": [
        {
          "optionLabel": "A",
          "explanation": "Unmentioned comparison; the text does not compare Chacoan masonry to all other North American architecture."
        },
        {
          "optionLabel": "B",
          "explanation": "Misinterprets the trade items; exotic macaw imports indicate trade connections, not Puebloan southwards migration."
        },
        {
          "optionLabel": "D",
          "explanation": "Unwarranted extreme jump; few hearths in great house rooms does not mean Puebloans never used fire."
        }
      ],
      "passageSupport": "Final sentence: 'Rather than permanent residential hubs, Chacoan great houses are increasingly understood as regional ceremonial and gathering centers...'",
      "eliminationShortcut": "Focus on the 'Rather than X, Y' structure of the passage conclusion.",
      "educationalObjective": "Distinguish between former historical consensus and updated archaeological interpretations."
    },
    {
      "id": "ch1-p4",
      "questionNumber": 4,
      "label": "PRACTICE QUESTION 4 — MEDIEVAL GUILDS AND MARKET REGULATION",
      "prompt": "Which choice best states the main idea of the passage?",
      "passage": {
        "title": "Medieval Guilds and Market Regulation",
        "text": "In medieval Europe, merchant and craft guilds were traditionally characterized by economic historians as rigid, self-serving monopolies that stifled innovation and restricted market entry to protect member profits. However, revisionist economic historians have challenged this purely negative portrait. In an era marked by weak state institutions and high enforcement costs, guilds provided crucial institutional framework. They standardized product quality, enforced contract compliance, and established apprenticeship networks that preserved and transmitted technical knowledge across generations. By mitigating information asymmetries between distant buyers and sellers, guilds facilitated long-distance trade expansions that private individuals could not have sustained alone."
      },
      "options": [
        {
          "label": "A",
          "text": "Medieval European guilds were primarily responsible for preventing the rise of modern industrial capitalism."
        },
        {
          "label": "B",
          "text": "Craft guilds maintained monopolies by forbidding members from sharing technical knowledge with apprentices."
        },
        {
          "label": "C",
          "text": "While traditional economic histories view medieval guilds as restrictive monopolies, revisionist research suggests they performed essential regulatory functions that supported trade."
        },
        {
          "label": "D",
          "text": "Long-distance trade in medieval Europe flourished exclusively because state institutions provided contract enforcement."
        }
      ],
      "correctAnswer": "C",
      "correctAnswerIndex": 2,
      "whyCorrectTitle": "Why C is the Best Answer:",
      "whyCorrect": "The passage contrasts the traditional view of guilds (rigid monopolies) with revisionist research showing they solved institutional problems (quality control, apprenticeship, trust). Choice C synthesizes both perspectives to accurately capture the author's main idea.",
      "distractorExplanations": [
        {
          "optionLabel": "A",
          "explanation": "Overly broad negative claim unsupported by the text."
        },
        {
          "optionLabel": "B",
          "explanation": "Directly contradicts the passage, which notes guilds established networks that 'transmitted technical knowledge across generations.'"
        },
        {
          "optionLabel": "D",
          "explanation": "Directly contradicts the passage, which emphasizes that state institutions were 'weak' and guilds provided the necessary frameworks."
        }
      ],
      "passageSupport": "Sentences 2–4 contrast traditional negative views with revisionist findings on how guilds supported market development.",
      "eliminationShortcut": "Look for choices that capture the shift from 'traditionally characterized as X' to 'revisionist research shows Y'.",
      "educationalObjective": "Evaluate main ideas in passages analyzing historical institutional economics."
    },
    {
      "id": "ch1-p5",
      "questionNumber": 5,
      "label": "PRACTICE QUESTION 5 — EARLY IRON METALLURGY AND TRADE IN THE INLAND NIGER DELTA",
      "prompt": "Based on the passage, the author mentions the 'slag heap stratigraphy' in paragraph 2 primarily to:",
      "passage": {
        "title": "Early Iron Metallurgy and Trade in the Inland Niger Delta",
        "text": "[1] Historians previously assumed that sub-Saharan ironworking techniques were introduced entirely via trans-Saharan diffusion from North African or Mediterranean civilizations during the first millennium BCE. Early colonial models posited that indigenous West African societies lacked the pyrotechnological infrastructure required for bloomery iron smelting.\n\n[2] However, recent excavations in the Inland Niger Delta have upended this external diffusion model. Radiocarbon dating of charcoal encased within ancient slag heap stratigraphy confirms continuous iron production dating back to at least 800 BCE. Furthermore, mineralogical analyses of smelting furnaces reveal unique indigenous fluxing methods tailored to local laterite ores, establishing that West African metallurgy developed autonomously and stimulated extensive regional barter economies long before external trade routes were established."
      },
      "options": [
        {
          "label": "A",
          "text": "provide empirical chronological evidence establishing that iron smelting occurred in West Africa far earlier than diffusion models suggested"
        },
        {
          "label": "B",
          "text": "demonstrate that ancient West African smelters imported fuel supplies directly from Mediterranean ports"
        },
        {
          "label": "C",
          "text": "prove that trans-Saharan trade routes were fully operational prior to the first millennium BCE"
        },
        {
          "label": "D",
          "text": "argue that archaeological dating methods are inherently more reliable than mineralogical fluxing analysis"
        }
      ],
      "correctAnswer": "A",
      "correctAnswerIndex": 0,
      "whyCorrectTitle": "Why A is the Best Answer:",
      "whyCorrect": "Paragraph 2 cites the radiocarbon dating of charcoal encased in 'slag heap stratigraphy' to prove that iron production began as early as 800 BCE. This empirical dating refutes the old diffusion hypothesis by establishing an independent, earlier timeline for West African metallurgy (Choice A).",
      "distractorExplanations": [
        {
          "optionLabel": "B",
          "explanation": "Directly contradicts the passage, which emphasizes indigenous development and local ores rather than imported materials."
        },
        {
          "optionLabel": "C",
          "explanation": "Inverts the passage chronology; external trade routes were established *after* indigenous metallurgy had already developed."
        },
        {
          "optionLabel": "D",
          "explanation": "Fabricates an unstated comparative ranking between dating techniques."
        }
      ],
      "passageSupport": "Paragraph 2: 'Radiocarbon dating of charcoal encased within ancient slag heap stratigraphy confirms continuous iron production dating back to at least 800 BCE.'",
      "eliminationShortcut": "Rhetorical role match: charcoal in slag heaps = radiocarbon proof of early 800 BCE iron production (Choice A).",
      "educationalObjective": "Identify how archaeological stratigraphy functions to substantiate revisionist historical chronologies."
    }
  ]
};

export const READING_MODULE_2: ReadingModule = {
  "moduleNumber": 2,
  "id": "reading-ch1-mod2",
  "chapterTitle": "CHAPTER 1 — FOUNDATIONS OF READING",
  "moduleTitle": "DIRECT MEANING, EXPLICIT FACTS, & EVIDENCE ANCHORING",
  "endLabel": "END OF MODULE 2",
  "sections": [
    {
      "id": "ch1-m2-sec1",
      "sectionNumber": "1",
      "sectionTitle": "THE LAW OF EXPLICIT TEXTUAL ANCHORING",
      "content": [
        "Every factual reading question on the Digital SAT has a direct, unambiguous textual anchor. The test never requires subjective interpretation of explicitly stated information.",
        "The Anchor Sentence Rule:\n1. Identify the specific variable, organism, person, or historical event in the question prompt.\n2. Locate the single sentence in the passage containing that exact entity or its direct synonym.\n3. Verify that the correct answer choice is an accurate, conservative restatement (paraphrase) of that specific sentence."
      ]
    },
    {
      "id": "ch1-m2-sec2",
      "sectionNumber": "2",
      "sectionTitle": "THE 4 TRAPS OF DIRECT MEANING QUESTIONS",
      "content": [
        "1. Subtle Modifier Shifts:\nThe passage says 'several species experienced modest declines,' but the distractor says 'all species were completely eradicated.'\n\n2. Inverted Causality:\nThe passage states that 'increased salinity stimulated root osmosis,' but the distractor claims that 'root osmosis caused increased salinity.'\n\n3. False Conflation:\nCombining a fact about Subject A with a finding about Subject B mentioned two sentences later.\n\n4. Beyond the Bounds:\nInjecting logical assumptions that seem plausible in real life but are nowhere stated in the passage."
      ]
    },
    {
      "id": "ch1-m2-sec3",
      "sectionNumber": "3",
      "sectionTitle": "WORKED EXAMPLE & CONCEPT DEMONSTRATION",
      "content": [
        "Demonstrating direct evidence retrieval and paraphrastic precision in physiology."
      ],
      "passage": {
        "title": "Mitochondrial Regulation in Arctic Ground Squirrels",
        "text": "[1] Arctic ground squirrels (*Urocitellus parryii*) endure sub-zero core body temperatures during torpor without suffering ischemic tissue necrosis. Rather than maintaining normal cellular respiration, their cells undergo profound mitochondrial downregulation. Electron transport chain activity in hepatic tissue decreases by over 90%, drastically reducing the generation of damaging reactive oxygen species (ROS).\n\n[2] Crucially, during periodic inter-bout arousals—brief 12-hour intervals where body temperature returns to 37°C—the squirrels do not immediately resume full oxidative phosphorylation. Instead, non-shivering thermogenesis via brown adipose tissue rapidly warms vital organs before mitochondrial gene expression in peripheral organs is reactivated."
      },
      "questions": [
        {
          "id": "ch1-w2",
          "questionNumber": 2,
          "label": "WORKED EXAMPLE 2 — READING COMPREHENSION",
          "prompt": "According to the passage, what is one immediate physiological consequence of mitochondrial downregulation during torpor?",
          "options": [
            {
              "label": "A",
              "text": "A steep reduction in the production of harmful reactive oxygen species"
            },
            {
              "label": "B",
              "text": "A permanent cessation of oxidative phosphorylation across all bodily tissues"
            },
            {
              "label": "C",
              "text": "An immediate increase in brown adipose tissue thermogenesis"
            },
            {
              "label": "D",
              "text": "Rapid warming of core body temperature back to 37°C"
            }
          ],
          "correctAnswer": "A",
          "correctAnswerIndex": 0,
          "whyCorrectTitle": "Why A is Correct (Logical Derivation):",
          "whyCorrect": "Paragraph 1 explicitly links mitochondrial downregulation with the reduction of ROS: 'Electron transport chain activity in hepatic tissue decreases by over 90%, drastically reducing the generation of damaging reactive oxygen species (ROS).' Choice A is a precise restatement.",
          "distractorExplanations": [
            {
              "optionLabel": "B",
              "explanation": "Extreme modifier trap ('permanent cessation'); the text notes this is temporary during torpor."
            },
            {
              "optionLabel": "C",
              "explanation": "Temporal confusion; brown adipose thermogenesis occurs during periodic inter-bout arousals, not during deep torpor downregulation."
            },
            {
              "optionLabel": "D",
              "explanation": "Confuses the torpor state with the arousal phase described in paragraph 2."
            }
          ],
          "passageSupport": "Paragraph 1: 'Electron transport chain activity in hepatic tissue decreases by over 90%, drastically reducing the generation of damaging reactive oxygen species (ROS).'",
          "eliminationShortcut": "Match keyword 'consequence of mitochondrial downregulation' directly to sentence 3 of paragraph 1.",
          "educationalObjective": "Locate and verify direct causal relationships in dense physiological texts."
        }
      ]
    }
  ],
  "practiceQuestions": [
    {
      "id": "ch1-p6",
      "questionNumber": 6,
      "label": "PRACTICE QUESTION 6 — THERMAL HYSTERESIS PROTEINS IN ANTARCTIC NOTOTHENIOIDS",
      "prompt": "The passage indicates that in Antarctic notothenioid fish, which biological event occurs before ice crystal growth inside circulatory vessels can be arrested?",
      "passage": {
        "title": "Thermal Hysteresis Proteins in Antarctic Notothenioids",
        "text": "[1] Antarctic notothenioid fish inhabit subzero polar waters (-1.9°C) where ambient seawater is supercooled below the equilibrium freezing point of typical vertebrate blood plasma. To prevent fatal internal ice propagation, these teleosts synthesize specialized antifreeze glycoproteins (AFGPs).\n\n[2] When microscopic ice nuclei enter through gill epithelia into the bloodstream, AFGPs rapidly adsorb onto the prismatic faces of the invading micro-crystals. This non-equilibrium binding alters the interfacial curvature of the ice front, depressing the local freezing point below the melting point—a phenomenon termed thermal hysteresis—before the ice crystals can expand and puncture vascular endothelial linings."
      },
      "options": [
        {
          "label": "A",
          "text": "Endothelial linings rupture under hydrostatic blood pressure."
        },
        {
          "label": "B",
          "text": "AFGPs adsorb directly onto the prismatic faces of invading micro-crystals."
        },
        {
          "label": "C",
          "text": "Blood plasma warms to standard vertebrate equilibrium temperatures."
        },
        {
          "label": "D",
          "text": "The fish cease protein synthesis to conserve metabolic ATP."
        }
      ],
      "correctAnswer": "B",
      "correctAnswerIndex": 1,
      "whyCorrectTitle": "Why B is the Best Answer:",
      "whyCorrect": "Paragraph 2 states that when ice nuclei enter the bloodstream, 'AFGPs rapidly adsorb onto the prismatic faces of the invading micro-crystals. This non-equilibrium binding alters the interfacial curvature... before the ice crystals can expand and puncture vascular endothelial linings.' Therefore, AFGP adsorption occurs prior to stopping crystal expansion.",
      "distractorExplanations": [
        {
          "optionLabel": "A",
          "explanation": "Contradicts the biological defense described; AFGPs prevent endothelial puncture."
        },
        {
          "optionLabel": "C",
          "explanation": "Inaccurate; notothenioid blood plasma remains subzero in ambient waters."
        },
        {
          "optionLabel": "D",
          "explanation": "Refuted by the continuous synthesis of antifreeze glycoproteins required for survival."
        }
      ],
      "passageSupport": "Paragraph 2: 'AFGPs rapidly adsorb onto the prismatic faces... before the ice crystals can expand...'",
      "eliminationShortcut": "Chronological anchor: Identify the event immediately preceding the 'before' clause in paragraph 2 → Choice B.",
      "educationalObjective": "Trace explicit chronological sequences and biochemical causal steps in physiology passages."
    },
    {
      "id": "ch1-p7",
      "questionNumber": 7,
      "label": "PRACTICE QUESTION 7 — INTERTEMPORAL CHOICE AND HYPERBOLIC DISCOUNTING",
      "prompt": "According to the passage, standard economic models assume that individuals evaluate future rewards by:",
      "passage": {
        "title": "Intertemporal Choice and Hyperbolic Discounting",
        "text": "Standard economic models of intertemporal choice assume that individuals evaluate future rewards using exponential discounting, applying a constant discount rate across all future time horizons. Under this assumption, a person's relative preference between two outcomes depends solely on the time delay separating them, regardless of when the choice is made. However, empirical studies in behavioral economics consistently reveal that human decision-making is better described by hyperbolic discounting. Individuals display a strong bias for immediate gratification, discounting rewards in the near future much more steeply than rewards in the distant future. This present bias explains why individuals frequently make plans for long-term savings or health regimens but fail to execute them when the moment of action arrives, necessitating structural constraints like automatic pre-commitment mechanisms."
      },
      "options": [
        {
          "label": "A",
          "text": "discounting near-future rewards far more steeply than distant-future rewards"
        },
        {
          "label": "B",
          "text": "applying a constant discount rate across all future time horizons"
        },
        {
          "label": "C",
          "text": "relying on automatic pre-commitment mechanisms to execute savings plans"
        },
        {
          "label": "D",
          "text": "prioritizing immediate gratification over long-term financial stability"
        }
      ],
      "correctAnswer": "B",
      "correctAnswerIndex": 1,
      "whyCorrectTitle": "Why B is the Best Answer:",
      "whyCorrect": "The first sentence directly states that standard economic models assume individuals evaluate future rewards 'using exponential discounting, applying a constant discount rate across all future time horizons.' Choice B is a direct, accurate restatement.",
      "distractorExplanations": [
        {
          "optionLabel": "A",
          "explanation": "Describes hyperbolic discounting and empirical human behavior, not the standard economic model assumption."
        },
        {
          "optionLabel": "C",
          "explanation": "Mentions a solution needed because human behavior violates the standard model."
        },
        {
          "optionLabel": "D",
          "explanation": "Describes real-world present bias, which contrasts with the standard model."
        }
      ],
      "passageSupport": "Sentence 1: 'Standard economic models... assume that individuals evaluate future rewards using exponential discounting, applying a constant discount rate across all future time horizons.'",
      "eliminationShortcut": "Match 'standard economic models assume' directly to the first sentence.",
      "educationalObjective": "Locate and restate explicit definitions in behavioral economics texts."
    },
    {
      "id": "ch1-p8",
      "questionNumber": 8,
      "label": "PRACTICE QUESTION 8 — EVALUATING ECONOMIC FORECASTS",
      "prompt": "Which choice best states the central claim of the passage?",
      "passage": {
        "title": "Evaluating Economic Forecasts",
        "text": "Economic forecasts are frequently judged by their numerical precision—specifically, how closely a predicted GDP growth percentage or inflation rate matches real-world outcomes. When unexpected economic shocks cause actual data to diverge from predicted figures, critics often dismiss economic modeling as inherently unscientific. However, leading macroeconomists emphasize that the primary value of structural economic forecasting lies not in point-estimate prediction, but in scenario analysis and risk boundary identification. By mapping how complex variables interact under varying conditions, economic models enable policymakers to identify potential vulnerabilities and design resilient contingencies, even when specific numerical targets are missed."
      },
      "options": [
        {
          "label": "A",
          "text": "Economic models are unscientific because unexpected shocks make accurate predictions impossible."
        },
        {
          "label": "B",
          "text": "The primary value of economic forecasting lies in scenario analysis and risk boundary identification rather than exact numerical precision."
        },
        {
          "label": "C",
          "text": "Policymakers should rely exclusively on point-estimate predictions when designing national budgets."
        },
        {
          "label": "D",
          "text": "Structural economic models have achieved near-perfect accuracy in predicting inflation rates."
        }
      ],
      "correctAnswer": "B",
      "correctAnswerIndex": 1,
      "whyCorrectTitle": "Why B is the Best Answer:",
      "whyCorrect": "The passage moves from criticizing narrow point-estimate evaluations to stating the main thesis: 'the primary value of structural economic forecasting lies not in point-estimate prediction, but in scenario analysis and risk boundary identification.' Choice B restates this core claim.",
      "distractorExplanations": [
        {
          "optionLabel": "A",
          "explanation": "This states the critics' view that the author refutes."
        },
        {
          "optionLabel": "C",
          "explanation": "Contradicts the author's argument that point estimates are less useful than scenario analysis."
        },
        {
          "optionLabel": "D",
          "explanation": "Contradicts the text, which acknowledges that specific numerical targets are often missed."
        }
      ],
      "passageSupport": "Sentence 3: 'leading macroeconomists emphasize that the primary value of structural economic forecasting lies not in point-estimate prediction, but in scenario analysis and risk boundary identification.'",
      "eliminationShortcut": "Look for the pivot 'However, leading macroeconomists emphasize that...'",
      "educationalObjective": "Extract central thesis claims regarding scientific methodology."
    },
    {
      "id": "ch1-p9",
      "questionNumber": 9,
      "label": "PRACTICE QUESTION 9 — HYDROTHERMAL VENTS AND CHEMOSYNTHESIS",
      "prompt": "Which choice best states the central claim of the passage?",
      "passage": {
        "title": "Hydrothermal Vents and Chemosynthesis",
        "text": "Prior to the 1977 discovery of abyssal hydrothermal vents along the Galápagos Rift, marine biologists believed that all oceanic life was ultimately dependent on solar energy captured through surface photosynthesis. Deep-sea benthic environments were viewed as biological deserts supported only by the sparse fallout of organic detritus from sunlit surface waters. The discovery of dense communities of giant tube worms, clams, and crustaceans thriving in total darkness around hydrothermal vents revolutionized ecological theory. Researchers found that these ecosystems are sustained by lithotrophic chemosynthetic bacteria, which oxidize hydrogen sulfide emitting from thermal fissures to synthesize organic compounds. This demonstrated that complex biological ecosystems can exist independently of solar radiation."
      },
      "options": [
        {
          "label": "A",
          "text": "Deep-sea hydrothermal ecosystems demonstrate that complex biological communities can thrive independently of solar energy through chemosynthesis."
        },
        {
          "label": "B",
          "text": "All marine life ultimately relies on organic detritus sinking from sunlit surface waters."
        },
        {
          "label": "C",
          "text": "Giant tube worms and clams around hydrothermal vents photosynthesize using infrared thermal radiation."
        },
        {
          "label": "D",
          "text": "Abyssal hydrothermal vents were first discovered by marine biologists studying surface photosynthesis in 1977."
        }
      ],
      "correctAnswer": "A",
      "correctAnswerIndex": 0,
      "whyCorrectTitle": "Why A is the Best Answer:",
      "whyCorrect": "The passage contrasts the pre-1977 paradigm (all life depends on solar energy) with the breakthrough discovery of chemosynthetic vent ecosystems, concluding that complex life can exist independently of solar radiation. Choice A summarizes this thesis.",
      "distractorExplanations": [
        {
          "optionLabel": "B",
          "explanation": "This states the pre-1977 belief that the discovery disproved."
        },
        {
          "optionLabel": "C",
          "explanation": "Scientifically inaccurate and contradicts the text, which explains that energy comes from chemosynthetic bacteria oxidizing hydrogen sulfide, not infrared photosynthesis."
        },
        {
          "optionLabel": "D",
          "explanation": "Distorts details; biologists were exploring the rift, not intentionally studying surface photosynthesis."
        }
      ],
      "passageSupport": "Final sentence: 'This demonstrated that complex biological ecosystems can exist independently of solar radiation.'",
      "eliminationShortcut": "Identify the conclusion showing how the 1977 discovery changed ecological theory.",
      "educationalObjective": "Synthesize scientific reporting on paradigm shifts in ecology."
    },
    {
      "id": "ch1-p10",
      "questionNumber": 10,
      "label": "PRACTICE QUESTION 10 — HANSEATIC MARITIME LAW CODIFICATION",
      "prompt": "Which choice best states the central claim of the passage?",
      "passage": {
        "title": "Hanseatic Maritime Law Codification",
        "text": "Historian Ernst von Troeltsch famously claimed that the explosive expansion of Baltic Sea trade in the fourteenth century was made possible by the Hanseatic League's early codification of unified maritime common law. In Troeltsch's view, formal written legal codes provided merchant guilds with the institutional predictability required for high-risk maritime ventures. However, recent archival analyses of medieval court dockets in Lübeck and Gdańsk challenge this narrative. Historian Elena Rostova demonstrates that the League's formal statutes were rarely invoked in commercial disputes. Instead, Baltic merchants relied almost exclusively on informal, highly localized networks of personal reputation and reciprocal credit agreements. The codification of Hanseatic law was thus a late reflection of existing commercial practices rather than the initial catalyst for trade growth."
      },
      "options": [
        {
          "label": "A",
          "text": "Ernst von Troeltsch's theory of Hanseatic trade expansion has been fully corroborated by recent archival discoveries in Lübeck."
        },
        {
          "label": "B",
          "text": "Formal written legal codes were the primary catalyst for expanding Baltic trade in the fourteenth century."
        },
        {
          "label": "C",
          "text": "Baltic merchants avoided long-distance trade because medieval court dockets were unpredictable and corrupt."
        },
        {
          "label": "D",
          "text": "The expansion of Hanseatic trade was driven by informal networks of reputation and credit rather than formal legal codification."
        }
      ],
      "correctAnswer": "D",
      "correctAnswerIndex": 3,
      "whyCorrectTitle": "Why D is the Best Answer:",
      "whyCorrect": "The passage sets up Troeltsch's view (formal legal codes caused trade expansion) and presents Rostova's counter-evidence (merchants relied on informal reputation/credit), concluding that formal codification was a late reflection rather than the initial catalyst. Choice D captures this central thesis.",
      "distractorExplanations": [
        {
          "optionLabel": "A",
          "explanation": "Contradicts the passage, which states recent dockets challenge Troeltsch's view."
        },
        {
          "optionLabel": "B",
          "explanation": "States Troeltsch's refuted view as if it were the author's conclusion."
        },
        {
          "optionLabel": "C",
          "explanation": "Distorts the text; merchants traded successfully using informal networks, not avoiding trade."
        }
      ],
      "passageSupport": "Final sentence: 'The codification of Hanseatic law was thus a late reflection of existing commercial practices rather than the initial catalyst for trade growth.'",
      "eliminationShortcut": "Look for the final conclusion resolving the historical debate.",
      "educationalObjective": "Identify central claims in historiographical debates."
    }
  ]
};

export const READING_MODULE_3: ReadingModule = {
  "moduleNumber": 3,
  "id": "reading-ch1-mod3",
  "chapterTitle": "CHAPTER 1 — FOUNDATIONS OF READING",
  "moduleTitle": "INFERENCES & UNDERLYING LOGIC",
  "endLabel": "END OF MODULE 3",
  "sections": [
    {
      "id": "ch1-m3-sec1",
      "sectionNumber": "1",
      "sectionTitle": "THE LAW OF MINIMAL LOGICAL LEAPS",
      "content": [
        "On the SAT, an 'inference' is NOT an imaginative speculation or creative leap. It is a strictly necessary deductive implication of the stated facts.",
        "Rule of Minimal Logical Leap:\n> The correct inference is the choice that requires the smallest possible logical step from the text. If an answer requires assumptions about what 'might' happen in the future, it is an invalid extrapolation.",
        "**Deduction Formula**:\nPassage Fact A + Passage Fact B → Unstated Conclusion C"
      ]
    },
    {
      "id": "ch1-m3-sec2",
      "sectionNumber": "2",
      "sectionTitle": "THE NEGATION & INVALIDATION TEST FOR INFERENCES",
      "content": [
        "To test whether an inference is genuinely supported by the author's logic, apply the Negation Test:\n1. Negate the answer choice (assume its direct opposite is true).\n2. Ask: 'Does this negation directly contradict or collapse the author's argument?'\n3. If negating the choice breaks the author's reasoning, the choice is an essential, valid inference. If the author's argument remains viable, the choice is irrelevant or unwarranted."
      ]
    },
    {
      "id": "ch1-m3-sec3",
      "sectionNumber": "3",
      "sectionTitle": "WORKED EXAMPLE & CONCEPT DEMONSTRATION",
      "content": [
        "Observe how strict deductive inference operates on empirical claims."
      ],
      "passage": {
        "title": "Metacognitive Monitoring in Automated Decision Systems",
        "text": "[1] In high-stakes aviation and industrial monitoring, human operators frequently exhibit 'automation bias'—an uncritical reliance on algorithmic diagnostic suggestions even when contradictory raw sensor data is visible. When decision-support systems provide automated recommendations, operators spend significantly less time scanning auxiliary instruments, leading to elevated error rates during unanticipated system anomalies.\n\n[2] Interestingly, when researchers introduced artificial latency—forcing operators to wait five seconds before the automated recommendation appeared—operators conducted systematic scans of raw gauges and accurately identified simulated malfunctions at rates comparable to fully manual control."
      },
      "questions": [
        {
          "id": "ch1-w3",
          "questionNumber": 3,
          "label": "WORKED EXAMPLE 3 — READING COMPREHENSION",
          "prompt": "It can most reasonably be inferred from the passage that automation bias in human operators is primarily driven by:",
          "options": [
            {
              "label": "A",
              "text": "an inherent inability to interpret raw analog sensor readings"
            },
            {
              "label": "B",
              "text": "a tendency to bypass independent instrument verification when an automated solution is immediately accessible"
            },
            {
              "label": "C",
              "text": "a complete lack of technical training regarding emergency protocols"
            },
            {
              "label": "D",
              "text": "the deliberate design of automated systems to conceal auxiliary data"
            }
          ],
          "correctAnswer": "B",
          "correctAnswerIndex": 1,
          "whyCorrectTitle": "Why B is Correct (Logical Derivation):",
          "whyCorrect": "Paragraph 1 notes that operators spend less time scanning instruments when automated recommendations appear. Paragraph 2 proves that delaying the automated suggestion (introducing latency) caused operators to perform systematic scans and match manual accuracy. Thus, automation bias is caused by operators skipping independent verification because the automated recommendation is immediately available.",
          "distractorExplanations": [
            {
              "optionLabel": "A",
              "explanation": "Directly refuted by paragraph 2; operators were fully capable of accurately interpreting raw gauges when forced to wait."
            },
            {
              "optionLabel": "C",
              "explanation": "Unwarranted negative speculation regarding operator competence and training."
            },
            {
              "optionLabel": "D",
              "explanation": "Contradicts paragraph 1, which states 'contradictory raw sensor data is visible.'"
            }
          ],
          "passageSupport": "Paragraphs 1 and 2 together demonstrate that removing immediate suggestions restored independent instrument scanning to manual accuracy levels.",
          "eliminationShortcut": "Synthesize the contrast between immediate recommendations (low scanning) and delayed recommendations (systematic scanning).",
          "educationalObjective": "Derive precise causal mechanisms by synthesizing contrasting experimental conditions."
        }
      ]
    }
  ],
  "practiceQuestions": [
    {
      "id": "ch1-p11",
      "questionNumber": 11,
      "label": "PRACTICE QUESTION 11 — PATH INTEGRATION AND ODOMETER CUES IN DESERT ANTS",
      "prompt": "The researchers' conclusion that desert ants compute home vectors using step-counting pedometers rests on which underlying assumption?",
      "passage": {
        "title": "Path Integration and Odometer Cues in Desert Ants",
        "text": "[1] Saharan desert ants (*Cataglyphis fortis*) forage across featureless salt pans for hundreds of meters before returning to their subterranean nests along direct, linear paths. Biologists hypothesized that rather than following chemical pheromone trails, the ants maintain an internal vector calculated via path integration, combining celestial polarized light cues with an internal step odometer.\n\n[2] To test the pedometer hypothesis, researchers modified the leg lengths of foraging ants at the feeding feeder by attaching microscopic pig-bristle stilts or partially amputating tarsi. When released, ants with elongated legs systematically overshot their nest entrance by ≈imately 50%, while ants with shortened legs systematically undershot the entrance, searching for the nest opening well before reaching it."
      },
      "options": [
        {
          "label": "A",
          "text": "The stride length modifications did not disrupt the ants' internal celestial compass or motivation to return to the nest."
        },
        {
          "label": "B",
          "text": "Desert ants use chemical pheromone trails exclusively when foraging during overcast weather."
        },
        {
          "label": "C",
          "text": "Stilted ants run at twice the physical velocity of ants with unmodified legs."
        },
        {
          "label": "D",
          "text": "Unmodified desert ants possess photographic memory of terrain landmarks."
        }
      ],
      "correctAnswer": "A",
      "correctAnswerIndex": 0,
      "whyCorrectTitle": "Why A is the Best Answer:",
      "whyCorrect": "The researchers concluded that the distance error was caused specifically by altered step length altering the odometer calculation. This conclusion assumes that the leg modifications did not introduce confounds like disabling their directional orientation (celestial compass) or disorienting their navigational motivation. Applying the Negation Test: If the leg modifications completely destroyed their directional compass or navigational behavior, the overshoot/undershoot patterns could not be attributed to a step-counting odometer (Choice A).",
      "distractorExplanations": [
        {
          "optionLabel": "B",
          "explanation": "Contradicted by Paragraph 1, which notes the featureless desert environment precludes pheromone trail reliance."
        },
        {
          "optionLabel": "C",
          "explanation": "Velocity is irrelevant; the odometer mechanism relies on step count multiplied by stride length."
        },
        {
          "optionLabel": "D",
          "explanation": "Directly contradicted by the premise of navigating across featureless salt pans."
        }
      ],
      "passageSupport": "Paragraph 2: 'ants with elongated legs systematically overshot... while ants with shortened legs systematically undershot...'",
      "eliminationShortcut": "Negation Test: If leg alterations broke their compass orientation, distance errors cannot prove the pedometer model.",
      "educationalObjective": "Identify necessary methodological assumptions in behavioral navigation experiments."
    },
    {
      "id": "ch1-p12",
      "questionNumber": 12,
      "label": "PRACTICE QUESTION 12 — RAILWAY EXPANSION AND STANDARDIZED TIME",
      "prompt": "Based on the passage, why did 19th-century railway expansion make local sun-time systems increasingly impractical?",
      "passage": {
        "title": "Railway Expansion and Standardized Time",
        "text": "Prior to the rapid expansion of commercial railway networks in the mid-nineteenth century, towns across North America and Europe set their clocks according to local solar noon—the moment when the sun reached its highest point in the sky. As a result, towns separated by even modest east-west distances maintained distinct local times, differing by several minutes. While local solar time was sufficient for agrarian routines and localized stagecoach travel, the advent of high-speed passenger rail rendered it chaotic. A train traveling across several states might encounter dozens of conflicting local times, making unified timetables impossible and increasing the risk of head-on collisions on single-track lines. In 1883, major railroad companies unilaterally established four standardized continental time zones, overriding local municipal resistance."
      },
      "options": [
        {
          "label": "A",
          "text": "Local solar time was scientifically inaccurate because sun movements varied depending on weather conditions."
        },
        {
          "label": "B",
          "text": "Coordinating train schedules and avoiding collisions across multiple towns was impossible when each town kept a different time."
        },
        {
          "label": "C",
          "text": "Municipal governments demanded that railway companies adopt solar time to protect agricultural labor."
        },
        {
          "label": "D",
          "text": "High-speed locomotives disrupted the mechanical movement of traditional town square clocks."
        }
      ],
      "correctAnswer": "B",
      "correctAnswerIndex": 1,
      "whyCorrectTitle": "Why B is the Best Answer:",
      "whyCorrect": "The passage states that local sun-time caused towns separated by modest distances to have different times. When railways expanded, encountering dozens of conflicting local times made 'unified timetables impossible and increased the risk of head-on collisions.' Choice B directly restates this deduction.",
      "distractorExplanations": [
        {
          "optionLabel": "A",
          "explanation": "Unmentioned; the passage explains sun-time depended on east-west position, not weather inaccuracy."
        },
        {
          "optionLabel": "C",
          "explanation": "Contradicts the text, which notes municipal governments resisted standardized railroad time."
        },
        {
          "optionLabel": "D",
          "explanation": "Absurd physical claim unmentioned in the text."
        }
      ],
      "passageSupport": "Sentence 4: 'A train traveling across several states might encounter dozens of conflicting local times, making unified timetables impossible and increasing the risk of head-on collisions...'",
      "eliminationShortcut": "Connect 'impractical for railways' directly to the timetable and collision risks mentioned in sentence 4.",
      "educationalObjective": "Draw necessary causal inferences from technological and social history texts."
    },
    {
      "id": "ch1-p13",
      "questionNumber": 13,
      "label": "PRACTICE QUESTION 13 — GAS-ICE AGE DIFFERENCES IN GLACIAL CORES",
      "prompt": "Based on the passage, why is trapped atmospheric air in glacial ice cores consistently younger than the surrounding ice matrix?",
      "passage": {
        "title": "Gas-Ice Age Differences in Glacial Cores",
        "text": "In polar ice core paleoclimatology, researchers determine ancient atmospheric gas concentrations by analyzing air bubbles trapped inside ice cores retrieved from Antarctica and Greenland. However, interpreting these cores requires accounting for the gas-ice age difference (delta-age). When snow falls in polar regions, it forms a porous surface layer called firn. Atmospheric air circulates freely through this porous firn layer for decades or even centuries. It is only when accumulating snow compresses the firn into solid, impermeable ice at depths of 50 to 100 meters that atmospheric air is permanently sealed into discrete bubbles. Consequently, the ice matrix at a given depth is significantly older than the air trapped within it."
      },
      "options": [
        {
          "label": "A",
          "text": "Surface snow remains porous for decades or centuries, allowing air to circulate freely before being sealed into ice at lower depths."
        },
        {
          "label": "B",
          "text": "Geothermal heat melts the ice core samples during drilling, releasing older air and trapping modern atmosphere."
        },
        {
          "label": "C",
          "text": "Atmospheric air bubbles contain radioactive isotopes that decay faster than the surrounding ice minerals."
        },
        {
          "label": "D",
          "text": "Ice at depths of 50 to 100 meters is formed by underground volcanic eruptions that draw in younger air."
        }
      ],
      "correctAnswer": "A",
      "correctAnswerIndex": 0,
      "whyCorrectTitle": "Why A is the Best Answer:",
      "whyCorrect": "The passage explains that air circulates freely through porous snow (firn) for decades or centuries until accumulating weight compresses it into solid ice at 50-100 meters depth. Thus, the ice formed earlier than the air that was eventually sealed inside it. Choice A accurately captures this physical mechanism.",
      "distractorExplanations": [
        {
          "optionLabel": "B",
          "explanation": "Fabricated claim about drilling heat nowhere mentioned in the text."
        },
        {
          "optionLabel": "C",
          "explanation": "Misapplies physics concepts not discussed in the passage."
        },
        {
          "optionLabel": "D",
          "explanation": "Unrelated geological claim unsupported by the text."
        }
      ],
      "passageSupport": "Sentences 4–6 explain the porous firn layer process resulting in the gas-ice age discrepancy.",
      "eliminationShortcut": "Locate the explanation of 'firn' and air circulation prior to ice sealing.",
      "educationalObjective": "Analyze physical processes to explain temporal discrepancies in paleoclimatic data."
    },
    {
      "id": "ch1-p14",
      "questionNumber": 14,
      "label": "PRACTICE QUESTION 14 — JUSTINIAN AND THE BYZANTINE SILK MONOPOLY",
      "prompt": "Based on the passage, what can be reasonably inferred about the Byzantine decision to smuggle silkworm eggs from Central Asia?",
      "passage": {
        "title": "Justinian and the Byzantine Silk Monopoly",
        "text": "During the sixth century CE, the Byzantine Empire was heavily dependent on raw silk imports from China, which were transported along the Silk Road through Sasanian Persia. Because the Sasanian Empire controlled the trade routes, Persian merchants imposed steep transit tariffs and frequently embargoed raw silk shipments during military conflicts with Constantinople. In response, Emperor Justinian I authorized a clandestine mission in 552 CE, sending Nestorian monks to Central Asia to smuggle live silkworm eggs out of China inside hollow bamboo walking sticks. The successful introduction of sericulture allowed the Byzantine state to establish domestic imperial silk workshops, transforming Constantinople into a dominant Mediterranean silk manufacturing center and generating substantial state revenue."
      },
      "options": [
        {
          "label": "A",
          "text": "It allowed the Byzantine Empire to establish domestic silk production and eliminate reliance on vulnerable Persian trade routes."
        },
        {
          "label": "B",
          "text": "It caused the immediate economic collapse of the Sasanian Empire by halting all trade along the Silk Road."
        },
        {
          "label": "C",
          "text": "It was motivated primarily by Emperor Justinian's personal desire to introduce Chinese weaving techniques to Nestorian monasteries."
        },
        {
          "label": "D",
          "text": "It failed initially because silkworm eggs could not survive long journeys inside hollow bamboo sticks."
        }
      ],
      "correctAnswer": "A",
      "correctAnswerIndex": 0,
      "whyCorrectTitle": "Why A is the Best Answer:",
      "whyCorrect": "The passage explains that Persian merchants imposed steep tariffs and embargoes on silk trade (the problem) and that smuggling silkworm eggs allowed Constantinople to establish domestic silk workshops (the solution). Therefore, smuggling eggs allowed Byzantium to produce silk domestically and bypass Persian reliance. Choice A is a valid inference.",
      "distractorExplanations": [
        {
          "optionLabel": "B",
          "explanation": "Extreme extrapolation; the text states Byzantium gained revenue, not that Persia immediately collapsed."
        },
        {
          "optionLabel": "C",
          "explanation": "Misstates motivation; the goal was state trade security and revenue, not monastic weaving techniques."
        },
        {
          "optionLabel": "D",
          "explanation": "Contradicts the passage, which explicitly describes the mission as 'successful'."
        }
      ],
      "passageSupport": "Sentences 2 and 4 link Persian tariffs/embargoes to the successful domestic sericulture outcome.",
      "eliminationShortcut": "Synthesize problem (Persian trade vulnerability) with outcome (domestic production).",
      "educationalObjective": "Infer strategic economic motivations from historical primary-source narratives."
    },
    {
      "id": "ch1-p15",
      "questionNumber": 15,
      "label": "PRACTICE QUESTION 15 — BRUNELLESCHI AND THE FLORENCE CATHEDRAL DOME",
      "prompt": "Based on the passage, what led Brunelleschi to design a dome that did not require wooden support scaffolding?",
      "passage": {
        "title": "Brunelleschi and the Florence Cathedral Dome",
        "text": "In 1418, the city of Florence announced a competition to design a dome for the unfinished Cathedral of Santa Maria del Fiore. The octagonal masonry opening spanned 143 feet, making it wider than any dome constructed since antiquity. Traditional cathedral construction relied on massive wooden centering—temporary timber scaffolding erected from the cathedral floor to support stone arches until the keystone was locked into place. However, the sheer span and height of the Florence cathedral made wooden centering practically impossible: the region lacked sufficient timber to build a scaffold 180 feet tall, and timber beams of such length would bend under their own weight. Filippo Brunelleschi won the commission by proposing an unprecedented double-shelled dome constructed with a self-supporting herringbone brick pattern and horizontal iron tension rings, eliminating the need for wooden centering altogether."
      },
      "options": [
        {
          "label": "A",
          "text": "The Florentine city council banned the use of wood in cathedral construction due to fire safety ordinances."
        },
        {
          "label": "B",
          "text": "A regional lack of sufficient timber and the structural bending of long wooden beams rendered traditional scaffolding unfeasible."
        },
        {
          "label": "C",
          "text": "Brunelleschi believed that iron tension rings were cheaper to forge than brick arches."
        },
        {
          "label": "D",
          "text": "The cathedral floor was too weak to support the weight of stone masonry."
        }
      ],
      "correctAnswer": "B",
      "correctAnswerIndex": 1,
      "whyCorrectTitle": "Why B is the Best Answer:",
      "whyCorrect": "The passage explicitly details that wooden scaffolding was impossible because 'the region lacked sufficient timber to build a scaffold 180 feet tall, and timber beams of such length would bend under their own weight.' Choice B restates these exact physical constraints.",
      "distractorExplanations": [
        {
          "optionLabel": "A",
          "explanation": "Fabricates a city fire ordinance nowhere mentioned in the text."
        },
        {
          "optionLabel": "C",
          "explanation": "Unmentioned cost comparison; the issue was physical feasibility of scaffolding."
        },
        {
          "optionLabel": "D",
          "explanation": "Misstates the structural problem; the issue was timber beam bending and availability, not floor strength."
        }
      ],
      "passageSupport": "Sentence 4: 'the region lacked sufficient timber... and timber beams of such length would bend under their own weight.'",
      "eliminationShortcut": "Match 'did not require wooden centering' directly to the physical constraints on wood described in sentence 4.",
      "educationalObjective": "Locate specific engineering constraints that motivate technological innovations."
    }
  ]
};
