import { ReadingModule } from './readingTypes';

export const READING_CH2_BLOCK_1: ReadingModule = {
  "moduleNumber": 1,
  "id": "reading-ch2-block1",
  "chapterTitle": "CHAPTER 2 — EVIDENCE & INFERENCE",
  "moduleTitle": "THE EVIDENCE CHAIN: CLAIMS, SUPPORT, & CONCLUSIONS",
  "endLabel": "MODULE COMPLETE",
  "sections": [
    {
      "id": "ch2-b1-sec1",
      "sectionNumber": "1",
      "sectionTitle": "CONCEPT 1 (FOUNDATIONAL): THE 3-LINK EVIDENCE CHAIN",
      "content": [
        "Every evidence and inference question tests your ability to trace the precise logical link between raw data and authorial claims.",
        "**The 3-Link Evidence Chain**:\n1. **Raw Evidence**: Raw observations/data (e.g., *Soil nitrogen fell 35%*).\n2. **Immediate Interpretation**: Bounded deduction (e.g., *Clearcutting disrupts nitrogen retention*).\n3. **Overarching Claim**: Broader theoretical conclusion (e.g., *Selective logging prevents nutrient depletion*).",
        "**Golden Rule of Scope**:\n> An evidence chain is only as strong as its narrowest link. If an answer choice leaps from a localized soil study to *'All commercial forestry must be banned globally,'* the scope has broken."
      ],
      "passage": {
        "title": "Soil Chemistry Under Silvicultural Clear-Cutting",
        "text": "[1] To evaluate nutrient leaching under intensive timber harvesting, silvicultural researchers measured soluble nitrogen and phosphorus concentrations in soil runoff across twenty experimental plots before and after commercial clear-cutting. Within six months post-harvest, nitrogen runoff concentrations surged by 310 percent compared to pre-harvest baselines, whereas adjacent undisturbed control tracts showed no measurable change in leachate chemistry.\n\n[2] Soil microbiologists identified the cause: removing the forest canopy elevated ground temperatures and eliminated root uptake, triggering an uncontrolled spike in microbial nitrification that converted organic matter into mobile nitrates faster than the remaining understory vegetation could absorb them."
      },
      "questions": [
        {
          "id": "ch2-w1",
          "questionNumber": 1,
          "label": "WORKED EXAMPLE 1 — READING COMPREHENSION",
          "prompt": "Which choice best describes how the soil runoff measurements in Paragraph 1 support the microbiologists' conclusion regarding nitrification?",
          "options": [
            {
              "label": "A",
              "text": "By showing that soil runoff nitrogen surged specifically in clear-cut plots while remaining stable in undisturbed control plots"
            },
            {
              "label": "B",
              "text": "By proving that timber harvesting permanently halts all biological nitrogen fixation across temperate forests"
            },
            {
              "label": "C",
              "text": "By demonstrating that understory vegetation absorbs nitrates more effectively at elevated ground temperatures"
            },
            {
              "label": "D",
              "text": "By establishing that phosphorus leaching poses a greater environmental hazard than nitrogen runoff"
            }
          ],
          "correctAnswer": "A",
          "correctAnswerIndex": 0,
          "whyCorrectTitle": "Why A is Correct (Logical Derivation):",
          "whyCorrect": "The raw empirical evidence in Paragraph 1 is the 310% surge in nitrogen runoff in harvested plots compared to the stable baseline in undisturbed plots. This controlled comparison directly proves that clear-cutting caused the nutrient surge explained by the microbiologists. Choice A accurately captures this empirical anchor link.",
          "distractorExplanations": [
            {
              "optionLabel": "B",
              "explanation": "Overly extreme scope leap ('permanently halts all biological fixation across temperate forests'); the text only measured runoff in experimental plots over six months."
            },
            {
              "optionLabel": "C",
              "explanation": "Contradicted by Paragraph 2, which states nitrates were generated 'faster than the remaining understory vegetation could absorb them.'"
            },
            {
              "optionLabel": "D",
              "explanation": "Unwarranted comparative claim; the passage focuses on nitrogen runoff and does not rank the relative hazard of phosphorus."
            }
          ],
          "passageSupport": "Paragraph 1: 'nitrogen runoff concentrations surged by 310 percent compared to pre-harvest baselines, whereas adjacent undisturbed control tracts showed no measurable change...'",
          "eliminationShortcut": "Match the controlled comparison: Harvested surge vs. Control stability → Choice A directly mirrors the text evidence.",
          "educationalObjective": "Trace direct empirical evidence links connecting controlled experimental data to microbiological conclusions."
        }
      ]
    },
    {
      "id": "ch2-b1-sec2",
      "sectionNumber": "2",
      "sectionTitle": "CONCEPT 2 (ADVANCED): SUPPORTED VS. EXTRAPOLATED CONCLUSIONS & SCOPE BOUNDARY CONTROL",
      "content": [
        "Distractors often violate scope via unwarranted generalizations, temporal leaps, or unmeasured causal variables.",
        "**Scope Boundary Filters**:\n- **Population**: Is the finding restricted to the study group, or generalized to all taxa?\n- **Temporal**: Is the evidence for a bounded interval, or a predicted permanent equilibrium?\n- **Causal**: Is it correlation/mechanism, or does the choice claim absolute exclusivity?"
      ],
      "passage": {
        "title": "Hippocampal Neurogenesis and Spatial Memory in Avian Food-Caching",
        "text": "[1] Black-capped chickadees (*Poecile atricapillus*) conceal thousands of seed caches across disparate woodland locations each autumn, retrieving them months later during winter freezes. Anatomical comparisons reveal that chickadees inhabiting high-latitude northern ranges possess a hippocampus with significantly greater volume and higher neuron density than their southern conspecifics.\n\n[2] To investigate whether this anatomical variation reflects phenotypic plasticity or genetic adaptation, researchers raised northern and southern chicks from hatching in identical laboratory environments with equal caching opportunities. Northern chickadees consistently developed larger hippocampal volumes and demonstrated superior spatial cache-recovery accuracy, indicating that geographic differences in hippocampal architecture are driven primarily by inherited adaptations to harsh climatic demands."
      },
      "questions": [
        {
          "id": "ch2-w2",
          "questionNumber": 2,
          "label": "WORKED EXAMPLE 2 — READING COMPREHENSION",
          "prompt": "Which choice best describes how the common-garden laboratory experiment in Paragraph 2 supports the researchers' conclusion regarding hippocampal architecture?",
          "options": [
            {
              "label": "A",
              "text": "By demonstrating that rearing northern and southern chickadees in identical conditions eliminated all anatomical variation between them"
            },
            {
              "label": "B",
              "text": "By showing that northern chickadees maintained larger hippocampal volumes and superior caching accuracy even when environmental variables were held constant"
            },
            {
              "label": "C",
              "text": "By proving that southern chickadees are biologically incapable of food caching or spatial learning"
            },
            {
              "label": "D",
              "text": "By establishing that spatial memory in all avian species is governed entirely by inherited genetic factors"
            }
          ],
          "correctAnswer": "B",
          "correctAnswerIndex": 1,
          "whyCorrectTitle": "Why B is Correct (Logical Derivation):",
          "whyCorrect": "The researchers sought to distinguish inherited adaptation from environmental plasticity. By raising both groups in identical laboratory conditions (holding environment constant) and observing that northern chickadees still developed larger hippocampi and superior accuracy, they proved the trait has an inherited genetic basis. Choice B precisely states this controlled deduction.",
          "distractorExplanations": [
            {
              "optionLabel": "A",
              "explanation": "Directly contradicted by the text; rearing in identical conditions did NOT eliminate variation—northern birds consistently retained larger volumes."
            },
            {
              "optionLabel": "C",
              "explanation": "Extreme distortion; southern chickadees cache seeds, they simply exhibit lower hippocampal volume and accuracy relative to northern conspecifics."
            },
            {
              "optionLabel": "D",
              "explanation": "Severe scope extrapolation ('in all avian species'); the study evaluated black-capped chickadees and does not generalize across all bird species."
            }
          ],
          "passageSupport": "Paragraph 2: 'raised northern and southern chicks in identical laboratory environments with equal caching opportunities. Northern chickadees consistently developed larger hippocampal volumes and demonstrated superior spatial cache-recovery accuracy...'",
          "eliminationShortcut": "Controlled environment + Persistent divergence = Inherited genetic basis within the studied chickadee populations (Choice B).",
          "educationalObjective": "Differentiate bounded genetic adaptation conclusions from broad cross-taxa extrapolation traps."
        }
      ]
    },
    {
      "id": "ch2-b1-sec3",
      "sectionNumber": "3",
      "sectionTitle": "MASTER TAKEAWAY & SPEED HEURISTIC",
      "content": [
        "Takeaway:\n> Always match the chosen conclusion strictly to the scope, sample population, and control variables of the empirical evidence. Reject universal quantifiers."
      ]
    }
  ],
  "practiceQuestions": [
    {
      "id": "ch2-p1",
      "questionNumber": 1,
      "label": "PRACTICE QUESTION 1 — NORWEGIAN FJORD COD DYNAMICS",
      "prompt": "Which finding, if added to the passage, would most directly support the researchers' hypothesis regarding the timing of the cod's downward migration?",
      "passage": {
        "title": "Norwegian Fjord Cod Dynamics",
        "text": "For decades, marine biologists studying coastal Atlantic cod populations in Scandinavia assumed that seasonal movements into deeper offshore waters were triggered strictly by rising surface temperatures in late spring. However, recent acoustic telemetry tracking in several Norwegian fjords revealed that adult cod descended into deep sub-surface trenches several weeks before surface water temperatures exhibited any measurable warming. Biologists now hypothesize that this descent is governed primarily by the vertical shifts of capelin—the cod's primary prey species—which dive to lower depths to feed on copepod aggregations."
      },
      "options": [
        {
          "label": "A",
          "text": "Cod in southern Atlantic coastal waters consume smaller daily rations during winter months than populations in sub-Arctic fjords."
        },
        {
          "label": "B",
          "text": "In fjords where cod descended into deep trenches early, localized acoustic tracking confirmed that capelin schools had completed their downward descent shortly before the cod moved."
        },
        {
          "label": "C",
          "text": "Norwegian fjord cod display distinct genetic markers from open-ocean populations inhabiting identical water temperatures."
        },
        {
          "label": "D",
          "text": "Copepods in coastal waters demonstrate thermal tolerance ranges broader than those observed in capelin."
        }
      ],
      "correctAnswer": "B",
      "correctAnswerIndex": 1,
      "whyCorrectTitle": "Why B is the Best Answer:",
      "whyCorrect": "The passage sets up a hypothesis: cod move deep not because of water temperature, but because their primary prey (capelin) move deep to feed on copepods. To support this prey-driven hypothesis, evidence must show a direct spatial and temporal alignment between capelin movement and cod migration. Choice B provides exactly this empirical alignment: capelin descended just before cod descended in those specific fjords.",
      "distractorExplanations": [
        {
          "optionLabel": "A",
          "explanation": "Plausible context regarding winter ration sizes, but feeding volume in winter does not confirm what triggers the specific timing of spring depth migration."
        },
        {
          "optionLabel": "C",
          "explanation": "Introduces genetic distinctions between fjord and ocean cod, which is tangential to the immediate behavioral trigger for seasonal diving."
        },
        {
          "optionLabel": "D",
          "explanation": "Focuses on copepod thermal tolerance rather than verifying whether capelin movement actually preceded cod descent in the fjord."
        }
      ],
      "passageSupport": "The hypothesis claims descent 'is governed primarily by the vertical shifts of capelin—the cod's primary prey species.' Choice B provides direct temporal proof that capelin moved first.",
      "eliminationShortcut": "Look for direct temporal and causal linkage: prey moves down first → predator follows.",
      "educationalObjective": "Evaluate experimental evidence that confirms a trophic (prey-driven) behavioral hypothesis."
    },
    {
      "id": "ch2-p2",
      "questionNumber": 2,
      "label": "PRACTICE QUESTION 2 — ALPINE PIPIT NESTING ELEVATIONS",
      "prompt": "Which conclusion is most strongly supported by the passage?",
      "passage": {
        "title": "Alpine Pipit Nesting Elevations",
        "text": "Ecologists monitoring alpine pipits across the Swiss Alps observed that breeding pairs routinely shifted nesting sites to higher elevations over consecutive nesting seasons. Initial surveys attributed this pattern entirely to rising ambient temperatures. Subsequent radio telemetry, however, showed that pipit populations in adjacent valleys with virtually identical thermal profiles exhibited contrasting elevation adjustments. Researchers concluded that local thermal trends alone cannot explain altitudinal shifts, directing attention toward variations in high-elevation insect emergence timing."
      },
      "options": [
        {
          "label": "A",
          "text": "Ambient temperature has no functional influence on the seasonal movements of alpine bird species."
        },
        {
          "label": "B",
          "text": "Prey availability is the sole factor determining where alpine pipits establish breeding territories."
        },
        {
          "label": "C",
          "text": "The relationship between ambient temperature and alpine pipit altitudinal shifts is more complex than simple direct causation."
        },
        {
          "label": "D",
          "text": "Pipits in adjacent valleys migrate at completely different times of year due to genetic isolation."
        }
      ],
      "correctAnswer": "C",
      "correctAnswerIndex": 2,
      "whyCorrectTitle": "Why C is the Best Answer:",
      "whyCorrect": "The passage demonstrates that while temperature was initially assumed to be the sole driver, populations in valleys with identical temperatures behaved differently. This proves that temperature alone does not dictate the outcome and that other factors (like insect emergence) interact with it, making the relationship more nuanced and complex.",
      "distractorExplanations": [
        {
          "optionLabel": "A",
          "explanation": "Overly extreme ('no functional influence'); the passage refutes temperature as the sole driver, not its overall biological relevance."
        },
        {
          "optionLabel": "B",
          "explanation": "Overly exclusive ('sole factor'); the text suggests insect emergence warrants investigation, not that it is the single exclusive cause."
        },
        {
          "optionLabel": "D",
          "explanation": "Unwarranted speculation regarding genetic isolation; the text mentions adjacent valleys to control for temperature, not to claim genetic separation."
        }
      ],
      "passageSupport": "Text states: 'pipit populations in adjacent valleys with virtually identical thermal profiles exhibited contrasting elevation adjustments. Researchers concluded that local thermal trends alone cannot explain...'",
      "eliminationShortcut": "Eliminate extreme absolutes ('no influence', 'sole factor') to favor the bounded nuance in C.",
      "educationalObjective": "Draw conservative, bounded conclusions when empirical data qualifies a traditional environmental model."
    },
    {
      "id": "ch2-p3",
      "questionNumber": 3,
      "label": "PRACTICE QUESTION 3 — FOURTEENTH-CENTURY MEDITERRANEAN MARITIME NETWORKS",
      "prompt": "Which choice provides the strongest additional support for the historian's claim regarding Levant harbor traffic?",
      "passage": {
        "title": "Fourteenth-Century Mediterranean Maritime Networks",
        "text": "An economic historian studying fourteenth-century Mediterranean trade contends that the sharp drop in commercial vessel arrivals at eastern Levant ports was driven primarily by localized political friction rather than regional economic contraction. Citing customs logs, the historian notes that merchant vessel arrivals dropped by over forty percent in harbors adjacent to active conflict zones, whereas neighboring Levantine ports that remained politically stable maintained steady commercial traffic throughout the same decade."
      },
      "options": [
        {
          "label": "A",
          "text": "Contemporary merchant letters express personal dissatisfaction with the political leadership of inland trading towns."
        },
        {
          "label": "B",
          "text": "Port log archives indicate that Levantine maritime trade had experienced temporary downturns during peaceful decades in the previous century."
        },
        {
          "label": "C",
          "text": "Archival records show that armed factions established restrictive checkpoints along overland access roads leading directly to the unstable ports, blocking commodity transport."
        },
        {
          "label": "D",
          "text": "Several regional conflicts in the Levant concluded earlier than modern historical consensus had previously estimated."
        }
      ],
      "correctAnswer": "C",
      "correctAnswerIndex": 2,
      "whyCorrectTitle": "Why C is the Best Answer:",
      "whyCorrect": "The historian argues that local political friction directly caused the maritime traffic drop at unstable ports. Choice C establishes a direct mechanism connecting political conflict to reduced harbor traffic: armed factions physically blocked access roads to those ports, explaining why merchant ships stopped arriving there.",
      "distractorExplanations": [
        {
          "optionLabel": "A",
          "explanation": "Mentions merchant discontent with leaders, but personal opinion does not prove physical disruption of shipping lanes or trade."
        },
        {
          "optionLabel": "B",
          "explanation": "Slightly weakens or complicates the claim by showing downturns can happen during peacetime, rather than strengthening the conflict link."
        },
        {
          "optionLabel": "D",
          "explanation": "Focuses on when conflicts ended, which does not provide a mechanism explaining why harbor traffic dropped during the conflict period."
        }
      ],
      "passageSupport": "The historian links 'localized political friction' to 'dropped by over forty percent... near active conflict zones.' Choice C provides the physical trade-disruption mechanism.",
      "eliminationShortcut": "Select the option that supplies a direct causal link between the cause (conflict) and effect (reduced port arrivals).",
      "educationalObjective": "Identify corroborating archival evidence that reinforces a causal historical argument."
    },
    {
      "id": "ch2-p4",
      "questionNumber": 4,
      "label": "PRACTICE QUESTION 4 — BIOMIMETIC DENTICLE GEOMETRIES IN FLUID DYNAMICS",
      "prompt": "Which choice best describes how biomimetic denticle riblets reduce hydrodynamic drag according to the marine engineers?",
      "passage": {
        "title": "Biomimetic Denticle Geometries in Fluid Dynamics",
        "text": "Marine propulsion engineers investigating sharkskin topography discovered that microscopic dermal denticles feature longitudinal microscopic grooves, known as riblets, aligned parallel to the direction of water flow. In high-speed flume trials, surfaces coated with synthetic riblet membranes exhibited up to an 8.5 percent reduction in turbulent skin-friction drag compared to smooth control hulls. Fluid velocity sensors revealed that the microscopic ridges prevent cross-stream turbulent vortices from descending into the boundary layer and reaching the solid wall surface."
      },
      "options": [
        {
          "label": "A",
          "text": "By lifting turbulent fluid vortices away from the solid surface to suppress wall-bounded frictional shearing."
        },
        {
          "label": "B",
          "text": "By eliminating all turbulence and converting turbulent fluid flow into laminar streamline flow across the entire hull."
        },
        {
          "label": "C",
          "text": "By reducing the total surface area of the vessel exposed to ambient water currents."
        },
        {
          "label": "D",
          "text": "By increasing the density of water immediately adjacent to the moving vehicle."
        }
      ],
      "correctAnswer": "A",
      "correctAnswerIndex": 0,
      "whyCorrectTitle": "Why A is the Best Answer:",
      "whyCorrect": "The passage explains that synthetic riblet membranes reduce turbulent skin-friction drag because 'the microscopic ridges prevent cross-stream turbulent vortices from descending into the boundary layer and reaching the solid wall surface.' Choice A precisely captures this mechanism: keeping vortices elevated away from the wall surface minimizes frictional shear stress.",
      "distractorExplanations": [
        {
          "optionLabel": "B",
          "explanation": "Overly extreme ('eliminating all turbulence'); riblets mitigate turbulent wall friction but do not convert the entire flow field into laminar streamlines."
        },
        {
          "optionLabel": "C",
          "explanation": "Factually inaccurate; textured riblet surfaces actually increase microscopic surface area slightly rather than decreasing it."
        },
        {
          "optionLabel": "D",
          "explanation": "Scientifically baseless and unmentioned in the passage; riblets alter flow physics, not fluid density."
        }
      ],
      "passageSupport": "Text states: 'microscopic ridges prevent cross-stream turbulent vortices from descending into the boundary layer and reaching the solid wall surface.'",
      "eliminationShortcut": "Direct mechanism match: preventing vortices from reaching the wall = lifting vortices away to suppress shear stress (Choice A).",
      "educationalObjective": "Trace direct causal physical mechanisms in applied engineering passages."
    }
  ]
};

export const READING_CH2_BLOCK_2: ReadingModule = {
  "moduleNumber": 2,
  "id": "reading-ch2-block2",
  "chapterTitle": "CHAPTER 2 — EVIDENCE & INFERENCE",
  "moduleTitle": "INFERENCES & UNSTATED PREMISES",
  "endLabel": "MODULE COMPLETE",
  "sections": [
    {
      "id": "ch2-b2-sec1",
      "sectionNumber": "1",
      "sectionTitle": "CONCEPT 1 (FOUNDATIONAL): DIRECT ANCHORED DEDUCTIONS WITHOUT SPECULATION",
      "content": [
        "A valid SAT inference is a conservative, mathematically constrained deduction 100% entailed by explicit statements in the passage—never a creative guess.",
        "- Never choose an inference that requires facts from outside the passage.\n- If a claim was previously assumed and then overturned, the old baseline must have held the opposite view."
      ],
      "passage": {
        "title": "Sulfate Aerosols and the Toba Super-Eruption",
        "text": "[1] The Youngest Toba Tuff eruption ≈imately 74,000 years ago discharged an estimated 2,800 cubic kilometers of magma into the atmosphere. Paleoclimatologists long maintained that the resulting stratospheric sulfur dioxide aerosol veil triggered a decade-long volcanic winter that decimated global hominin populations, creating a severe genetic bottleneck.\n\n[2] However, recent high-resolution sediment cores from Lake Malawi in East Africa reveal no significant disruption in terrestrial vegetation pollen or lake surface temperatures during the post-eruption depositional layer. Researchers conclude that the climatic impact of the Toba eruption was regionally heterogeneous rather than globally catastrophic."
      },
      "questions": [
        {
          "id": "ch2-w3",
          "questionNumber": 3,
          "label": "WORKED EXAMPLE 3 — READING COMPREHENSION",
          "prompt": "It can most reasonably be inferred from the passage that prior to the Lake Malawi study, paleoclimatologists assumed that:",
          "options": [
            {
              "label": "A",
              "text": "the Toba eruption produced uniform, severe cooling effects across all global regions including East Africa"
            },
            {
              "label": "B",
              "text": "volcanic eruptions never emit sulfur dioxide into the stratosphere"
            },
            {
              "label": "C",
              "text": "East Africa was completely uninhabited by hominins 74,000 years ago"
            },
            {
              "label": "D",
              "text": "sediment cores are inherently unreliable for paleoclimatic reconstruction"
            }
          ],
          "correctAnswer": "A",
          "correctAnswerIndex": 0,
          "whyCorrectTitle": "Why A is Correct (Logical Derivation):",
          "whyCorrect": "Paragraph 1 explains that scientists 'long maintained that the resulting stratospheric sulfur dioxide aerosol veil triggered a decade-long volcanic winter that decimated global hominin populations.' The contrast in Paragraph 2 showing the impact was 'regionally heterogeneous' proves that prior researchers had assumed the cooling was globally uniform, affecting regions like East Africa. Choice A is an exact, conservative deduction.",
          "distractorExplanations": [
            {
              "optionLabel": "B",
              "explanation": "Directly contradicted by Paragraph 1, which states scientists attributed cooling to sulfur dioxide aerosols."
            },
            {
              "optionLabel": "C",
              "explanation": "Refuted by Paragraph 1's focus on hominin population bottlenecks across the globe."
            },
            {
              "optionLabel": "D",
              "explanation": "Contradicts the scientific validity of the sediment core methodology utilized in Paragraph 2."
            }
          ],
          "passageSupport": "Paragraph 1 notes the consensus was a 'decade-long volcanic winter that decimated global hominin populations,' contrasted with Paragraph 2's 'regionally heterogeneous' finding.",
          "eliminationShortcut": "Contrast analysis: If the new finding is 'regionally varied', the old assumption was 'globally uniform'.",
          "educationalObjective": "Infer historical scientific baselines by analyzing the scope of revisionist empirical findings."
        }
      ]
    },
    {
      "id": "ch2-b2-sec2",
      "sectionNumber": "2",
      "sectionTitle": "CONCEPT 2 (ADVANCED): THE LAW OF UNSTATED LOGICAL PREMISES & NEGATION PROTOCOL",
      "content": [
        "An unstated premise is the missing bridge required to connect stated evidence to a conclusion:",
        "Logical Bridge Rule: Stated Evidence (Fact X) + Unstated Assumption (If X occurs, Y must follow) → Stated Conclusion (Y)",
        "**The 3-Step Negation Protocol**:\n1. Identify the candidate assumption.\n2. Negate the statement (e.g., *'relies on cues'* → *'does NOT rely'*).\n3. If the negation completely destroys the author's logic, it is the correct unstated premise."
      ],
      "passage": {
        "title": "Dendrochronological Frost Rings and Explosive Volcanism",
        "text": "[1] Paleoclimatologists reconstruct abrupt historical cooling episodes by examining anatomical frost rings in high-altitude bristlecone pines. When severe subfreezing temperatures strike during the active summer growing season, the developing xylem cells freeze and collapse, leaving an unmistakable malformed cell band within the annual growth ring.\n\n[2] Following the catastrophic 1257 CE eruption of Mount Samalas in Indonesia, tree-ring chronologies across North America and Eurasia showed severe frost-ring damage in the spring of 1258 CE. Researchers concluded that the Samalas eruption injected enough stratospheric sulfur aerosols to trigger widespread global agricultural frosts during the northern hemisphere summer."
      },
      "questions": [
        {
          "id": "ch2-w4",
          "questionNumber": 4,
          "label": "WORKED EXAMPLE 4 — READING COMPREHENSION",
          "prompt": "The researchers' conclusion that the 1258 CE frost rings resulted from the Samalas eruption depends on which underlying assumption?",
          "options": [
            {
              "label": "A",
              "text": "The widespread 1258 CE summer freezing temperatures were not driven by internal climate anomalies unrelated to the volcanic aerosol veil."
            },
            {
              "label": "B",
              "text": "Bristlecone pines are the only tree species capable of recording subfreezing summer temperatures."
            },
            {
              "label": "C",
              "text": "Volcanic sulfur aerosols remain in the stratosphere for at least five decades following an eruption."
            },
            {
              "label": "D",
              "text": "Mount Samalas erupted during the peak of the North American winter season."
            }
          ],
          "correctAnswer": "A",
          "correctAnswerIndex": 0,
          "whyCorrectTitle": "Why A is Correct (Logical Derivation):",
          "whyCorrect": "The researchers deduce that the 1258 CE frost damage was triggered specifically by Samalas aerosol cooling. This causal inference assumes that the freeze was not caused by coincidental non-volcanic climate variations (like an extreme unforced oceanic-atmospheric anomaly). Applying the Negation Test: If the 1258 freeze WAS entirely driven by non-volcanic internal climate fluctuations, then the frost rings provide zero proof that the volcanic aerosol veil caused the frosts. The argument collapses without Choice A.",
          "distractorExplanations": [
            {
              "optionLabel": "B",
              "explanation": "Extreme condition ('the only tree species'); the method requires bristlecones to be reliable recorders, not the sole species on Earth."
            },
            {
              "optionLabel": "C",
              "explanation": "Factually unjustified time scale ('at least five decades'); the observed effect occurred in the subsequent year (1258 CE)."
            },
            {
              "optionLabel": "D",
              "explanation": "Irrelevant timing detail; the eruption's stratospheric veil affects subsequent growing seasons regardless of exact calendar month."
            }
          ],
          "passageSupport": "Paragraph 2 links the 1257 eruption directly to the 1258 frost rings and global summer frosts.",
          "eliminationShortcut": "Negation Test: If non-volcanic climate anomalies caused the freeze, attributing it to Samalas collapses.",
          "educationalObjective": "Apply the Negation Protocol to identify necessary causal assumptions in paleoclimatic attribution."
        }
      ]
    },
    {
      "id": "ch2-b2-sec3",
      "sectionNumber": "3",
      "sectionTitle": "MASTER TAKEAWAY & SPEED HEURISTIC",
      "content": [
        "Negation Rule:\n> The correct unstated premise is the one statement that MUST be true for the author's logic to hold. Negate it: if the argument collapses, it is the right answer."
      ]
    }
  ],
  "practiceQuestions": [
    {
      "id": "ch2-p5",
      "questionNumber": 5,
      "label": "PRACTICE QUESTION 5 — URBAN PARK PROXIMITY AND HEALTH OUTCOMES",
      "prompt": "Which choice best describes the methodological concern raised by the public health researchers?",
      "passage": {
        "title": "Urban Park Proximity and Health Outcomes",
        "text": "Epidemiological studies comparing urban neighborhoods routinely observe that residents living within 400 meters of public parks report higher average physical activity levels and lower rates of hypertension than those living farther away. Public health researchers caution, however, that this cross-sectional correlation does not prove that park access directly improves cardiovascular health. They point out that individuals who prioritize personal fitness may preferentially choose to move into residential areas with ample green space, creating a self-selection bias."
      },
      "options": [
        {
          "label": "A",
          "text": "They contend that cross-sectional data fails to distinguish whether green spaces cause higher activity or whether physically active individuals select neighborhoods with parks."
        },
        {
          "label": "B",
          "text": "They argue that proximity to municipal parks has no measurable relationship with physical activity or hypertension."
        },
        {
          "label": "C",
          "text": "They claim that residential self-selection bias is impossible to account for in longitudinal health studies."
        },
        {
          "label": "D",
          "text": "They assert that municipal investments in public parks should be redirected entirely toward indoor athletic facilities."
        }
      ],
      "correctAnswer": "A",
      "correctAnswerIndex": 0,
      "whyCorrectTitle": "Why A is the Best Answer:",
      "whyCorrect": "The researchers point out self-selection bias: active people may choose to live near parks. Thus, observing a correlation between living near a park and higher activity does not prove cause-and-effect (that parks *cause* activity). Choice A accurately captures this core methodological concern.",
      "distractorExplanations": [
        {
          "optionLabel": "B",
          "explanation": "Incorrectly claims there is no relationship; the text acknowledges a correlation exists, but questions the direction of causality."
        },
        {
          "optionLabel": "C",
          "explanation": "Overly extreme ('impossible to account for'); the text highlights self-selection in cross-sectional data, not a universal failure of all health studies."
        },
        {
          "optionLabel": "D",
          "explanation": "Unwarranted policy recommendation nowhere suggested in the passage."
        }
      ],
      "passageSupport": "Text states: 'correlation does not prove that park access directly improves... individuals who prioritize personal fitness may preferentially choose to move...'",
      "eliminationShortcut": "Self-selection bias = confusion between correlation and reverse causality (Choice A).",
      "educationalObjective": "Identify self-selection confounding variables in observational epidemiological studies."
    },
    {
      "id": "ch2-p6",
      "questionNumber": 6,
      "label": "PRACTICE QUESTION 6 — EVALUATING MUNICIPAL INFRASTRUCTURE SHIFTS",
      "prompt": "Which finding, if true, would most directly weaken the researchers' claim that longitudinal tracking before and after park construction isolates the health impact of green space?",
      "passage": {
        "title": "Evaluating Municipal Infrastructure Shifts",
        "text": "To overcome self-selection bias, a research team designed a four-year longitudinal study tracking physical activity among 1,200 residents before and after the construction of a major municipal park. The researchers argued that if previously sedentary residents increase their exercise frequency after the park opens, this design provides strong causal evidence that green space availability directly stimulates physical activity."
      },
      "options": [
        {
          "label": "A",
          "text": "Several neighborhood residents reported that they used the park primarily for low-intensity leisure activities such as reading."
        },
        {
          "label": "B",
          "text": "The municipality launched a citywide public health campaign promoting exercise and subsidized gym memberships concurrently with the park opening."
        },
        {
          "label": "C",
          "text": "Construction of the park took six months longer than municipal contractors had initially scheduled."
        },
        {
          "label": "D",
          "text": "Baseline physical activity levels among participants varied slightly based on seasonal weather patterns."
        }
      ],
      "correctAnswer": "B",
      "correctAnswerIndex": 1,
      "whyCorrectTitle": "Why B is the Best Answer:",
      "whyCorrect": "The researchers claim that tracking exercise before and after the park opens will isolate the park's effect. If a citywide health campaign and subsidized gym memberships occurred at the *exact same time* (concurrently), any increase in exercise could be caused by the campaign/gyms rather than the park. Choice B introduces a major confounding variable that dismantles the study's isolation claim.",
      "distractorExplanations": [
        {
          "optionLabel": "A",
          "explanation": "Low-intensity activity is still activity; it does not introduce a confounding explanation for increased exercise overall."
        },
        {
          "optionLabel": "C",
          "explanation": "Construction delays affect project timing but do not undermine the logical validity of the before-and-after comparison once opened."
        },
        {
          "optionLabel": "D",
          "explanation": "Seasonal variations are standard baseline fluctuations that researchers can easily control for across multi-year studies."
        }
      ],
      "passageSupport": "The study relies on isolated before-and-after comparison. Choice B introduces a simultaneous alternative cause (concurrent health campaign/gyms).",
      "eliminationShortcut": "Look for a confounding variable that occurs simultaneously with the intervention.",
      "educationalObjective": "Identify confounding temporal factors that threaten the internal validity of longitudinal interventions."
    },
    {
      "id": "ch2-p7",
      "questionNumber": 7,
      "label": "PRACTICE QUESTION 7 — STATE INDUSTRIAL INCENTIVE EVALUATION",
      "prompt": "Which conclusion is best supported by the econometric review of the state tax credit program?",
      "passage": {
        "title": "State Industrial Incentive Evaluation",
        "text": "To stimulate regional industrial employment, a state government offered tax credits to manufacturing firms that expanded their full-time payrolls. An econometric audit revealed that while participating firms reported a 15 percent total payroll increase, over 80 percent of the newly documented hires represented positions that the firms had already budgeted and scheduled prior to the subsidy announcement. Economists concluded that the tax credit largely subsidized pre-planned corporate hiring rather than generating net-new industrial jobs."
      },
      "options": [
        {
          "label": "A",
          "text": "The tax credit program failed to produce any financial benefits for participating manufacturing firms."
        },
        {
          "label": "B",
          "text": "Gross payroll growth figures among subsidized firms overstate the net job creation directly attributable to the incentive."
        },
        {
          "label": "C",
          "text": "Manufacturing enterprises would have reduced overall employment had the state tax credit not been enacted."
        },
        {
          "label": "D",
          "text": "State tax incentives are fundamentally incapable of influencing corporate location decisions."
        }
      ],
      "correctAnswer": "B",
      "correctAnswerIndex": 1,
      "whyCorrectTitle": "Why B is the Best Answer:",
      "whyCorrect": "The passage explains that 80% of the reported new hires were pre-planned positions that would have been created anyway. Therefore, attributing all 15% payroll growth to the tax credit is inaccurate. Choice B correctly deduces that gross payroll numbers overstate the actual net jobs created *by* the tax credit.",
      "distractorExplanations": [
        {
          "optionLabel": "A",
          "explanation": "Contradicted by the text; participating firms received tax credits, so they gained financial tax relief."
        },
        {
          "optionLabel": "C",
          "explanation": "Speculates without evidence that firms would have cut jobs; the text states firms were already expanding prior to the credit."
        },
        {
          "optionLabel": "D",
          "explanation": "Draws an overly broad generalization about all state tax incentives and corporate location decisions everywhere."
        }
      ],
      "passageSupport": "Text states: 'over 80 percent... represented positions that the firms had already budgeted... subsidized pre-planned corporate hiring rather than generating net-new industrial jobs.'",
      "eliminationShortcut": "Pre-planned baseline hiring = gross payroll figures overstate net program impact.",
      "educationalObjective": "Evaluate counterfactual baselines to assess the net efficacy of economic policy interventions."
    },
    {
      "id": "ch2-p8",
      "questionNumber": 8,
      "label": "PRACTICE QUESTION 8 — COUNTERFACTUAL WORKFORCE METRICS",
      "prompt": "Which scenario, if true, would provide the strongest empirical support for the economists' recommendation regarding program evaluation metrics?",
      "passage": {
        "title": "Counterfactual Workforce Metrics",
        "text": "Economists evaluating municipal job training programs argue that tracking total participant completion rates offers a flawed measure of program success. Instead, they recommend evaluating counterfactual employment outcomes: measuring whether graduates secured technical manufacturing jobs that they would have been unable to obtain without the program's certification."
      },
      "options": [
        {
          "label": "A",
          "text": "A regional manufacturing plant hired fifty program graduates for specialized technician roles that required skills taught exclusively in the municipal certification courses."
        },
        {
          "label": "B",
          "text": "A local logistics facility hired thirty program graduates for entry-level packing positions that required no specialized technical credentials."
        },
        {
          "label": "C",
          "text": "Program completion rates reached ninety percent across all participating municipal training centers over a three-year period."
        },
        {
          "label": "D",
          "text": "Subsidized training centers reported that equipment maintenance costs increased faster than annual tuition revenues."
        }
      ],
      "correctAnswer": "A",
      "correctAnswerIndex": 0,
      "whyCorrectTitle": "Why A is the Best Answer:",
      "whyCorrect": "The economists recommend measuring whether participants got jobs *they could not have obtained without the certification*. Choice A describes a scenario where graduates secured specialized roles requiring skills taught *exclusively* in the program—proving direct counterfactual value.",
      "distractorExplanations": [
        {
          "optionLabel": "B",
          "explanation": "Illustrates the opposite of the economists' goal: workers took jobs requiring *no* technical credentials, meaning the certification did not make the difference."
        },
        {
          "optionLabel": "C",
          "explanation": "Focuses on high completion rates, which is the exact superficial metric the economists criticize as flawed."
        },
        {
          "optionLabel": "D",
          "explanation": "Discusses facility operational costs, which are completely irrelevant to student employment outcomes."
        }
      ],
      "passageSupport": "Economists recommend measuring 'whether graduates secured... jobs that they would have been unable to obtain without the program's certification.' Choice A shows exclusive skill reliance.",
      "eliminationShortcut": "Match the counterfactual criteria: 'skills taught exclusively' proves the job depended on the program.",
      "educationalObjective": "Apply counterfactual evaluation criteria to isolate true programmatic value-add."
    },
    {
      "id": "ch2-p9",
      "questionNumber": 9,
      "label": "PRACTICE QUESTION 9 — LATE BRONZE AGE SETTLEMENT TRAJECTORIES",
      "prompt": "Which conclusion is most strongly supported by the archaeological findings at Tell Marwah?",
      "passage": {
        "title": "Late Bronze Age Settlement Trajectories",
        "text": "Excavations at the inland Late Bronze Age settlement of Tell Marwah revealed that the city was abruptly abandoned around 1180 BCE, coinciding with paleoclimatic sediment data showing a prolonged regional drought. However, archaeological surveys of contemporaneous settlements located along nearby river valleys showed uninterrupted occupation and stable grain storage. Excavators suggest that rather than succumbing solely to climate deterioration, Tell Marwah collapsed because the regional drought disrupted specialized overland trade caravans upon which its economy depended."
      },
      "options": [
        {
          "label": "A",
          "text": "Regional climate desiccation was insufficient by itself to cause urban abandonment across all Bronze Age settlements in the region."
        },
        {
          "label": "B",
          "text": "Tell Marwah was the only Bronze Age settlement in the region that relied on overland trade routes."
        },
        {
          "label": "C",
          "text": "River valley settlements were completely unaffected by any form of economic or environmental stress."
        },
        {
          "label": "D",
          "text": "Agricultural production at Tell Marwah increased immediately before its final abandonment."
        }
      ],
      "correctAnswer": "A",
      "correctAnswerIndex": 0,
      "whyCorrectTitle": "Why A is the Best Answer:",
      "whyCorrect": "The passage notes that while drought occurred region-wide, river valley settlements survived without interruption. This proves that drought alone did not automatically cause collapse for every settlement, supporting Choice A.",
      "distractorExplanations": [
        {
          "optionLabel": "B",
          "explanation": "Extreme claim ('the only settlement'); the text does not say no other settlement used trade caravans."
        },
        {
          "optionLabel": "C",
          "explanation": "Overly extreme ('completely unaffected by any stress'); the text notes river settlements maintained occupation, not that they faced zero stress."
        },
        {
          "optionLabel": "D",
          "explanation": "Contradicted by the text's focus on regional drought and economic disruption prior to abandonment."
        }
      ],
      "passageSupport": "Text states: 'nearby river valleys showed uninterrupted occupation... Excavators suggest that rather than succumbing solely to climate deterioration...'",
      "eliminationShortcut": "Differential outcomes across sites under identical climate stress = climate alone was not universally sufficient for collapse.",
      "educationalObjective": "Synthesize comparative settlement data to evaluate multi-causal archaeological hypotheses."
    },
    {
      "id": "ch2-p10",
      "questionNumber": 10,
      "label": "PRACTICE QUESTION 10 — GHAGGAR-HAKRA BASIN SETTLEMENT SHIFTS",
      "prompt": "Which finding, if true, would most directly support the archaeologists' hypothesis regarding the peripheral outposts?",
      "passage": {
        "title": "Ghaggar-Hakra Basin Settlement Shifts",
        "text": "Satellite radar mapping of the Ghaggar-Hakra river basin indicates that several urban centers of the Harappan civilization were abandoned when glacial meltwater tributaries shifted course, drying local river beds. Archaeologists note, however, that several small peripheral outposts lacking permanent water bodies remained inhabited for nearly two centuries after the rivers dried. Researchers hypothesize that these outposts sustained themselves by adapting their economies around pastoralist trade networks rather than localized crop farming."
      },
      "options": [
        {
          "label": "A",
          "text": "Excavations at the peripheral outposts revealed large quantities of nomadic pastoral livestock markers and trade goods, alongside minimal agricultural storage infrastructure."
        },
        {
          "label": "B",
          "text": "Sediment analyses around major urban Harappan centers showed evidence of sophisticated irrigation canals constructed shortly before abandonment."
        },
        {
          "label": "C",
          "text": "Glacial rivers in the region experienced a brief period of increased water flow prior to drying up completely."
        },
        {
          "label": "D",
          "text": "Nearby riverine settlements abandoned traditional brick architecture in favor of timber housing."
        }
      ],
      "correctAnswer": "A",
      "correctAnswerIndex": 0,
      "whyCorrectTitle": "Why A is the Best Answer:",
      "whyCorrect": "The hypothesis claims the outposts survived by shifting from local crop farming to pastoralist trade networks. Choice A provides direct physical evidence matching this hypothesis: abundant pastoral/trade markers and minimal crop-storage infrastructure.",
      "distractorExplanations": [
        {
          "optionLabel": "B",
          "explanation": "Focuses on major urban centers rather than the peripheral outposts, and discusses irrigation rather than pastoral trade."
        },
        {
          "optionLabel": "C",
          "explanation": "Discusses river flow timing prior to drying, which does not explain how outposts survived *after* rivers dried."
        },
        {
          "optionLabel": "D",
          "explanation": "Discusses architectural building materials in riverine towns, irrelevant to outpost trade economies."
        }
      ],
      "passageSupport": "Hypothesis: outposts sustained themselves by adapting around 'pastoralist trade networks rather than localized crop farming.' Choice A confirms pastoral trade items + lack of crop infrastructure.",
      "eliminationShortcut": "Match physical artifact evidence to the specific economic mechanism (pastoral trade vs farming).",
      "educationalObjective": "Identify material culture evidence that validates economic shift hypotheses in archaeology."
    }
  ]
};

export const READING_CH2_BLOCK_3: ReadingModule = {
  "moduleNumber": 3,
  "id": "reading-ch2-block3",
  "chapterTitle": "CHAPTER 2 — EVIDENCE & INFERENCE",
  "moduleTitle": "TEXTUAL EVIDENCE MATCHING & COMMAND OF EVIDENCE",
  "endLabel": "MODULE COMPLETE",
  "sections": [
    {
      "id": "ch2-b3-sec1",
      "sectionNumber": "1",
      "sectionTitle": "CONCEPT 1 (FOUNDATIONAL): DIRECT TEXTUAL ANCHOR RETRIEVAL",
      "content": [
        "Command of evidence questions require identifying the specific sentence providing definitive proof for an assertion.",
        "**The 3 Inviolable Proof Criteria**:\n1. **Semantic Equivalence**: The sentence directly asserts the claim, not just the subject.\n2. **Direct Causal Attribution**: Proves causality, not coincidental correlation.\n3. **Zero Distortion**: No alteration of modifiers, quantities, or certainty levels."
      ],
      "passage": {
        "title": "Telomerase Reactivation and Cellular Senescence in Somatic Tissue",
        "text": "[1] Somatic human cells lack active telomerase, leading to progressive telomeric shortening with each mitotic cycle. Once telomeres reach a critical threshold length, cells enter replicative senescence—a permanent state of growth arrest that functions as a tumor-suppressive barrier.\n\n[2] In malignant carcinomas, however, neoplastic cells bypass senescence by reactivating telomerase reverse transcriptase (hTERT). [3] Interestingly, recent clinical trials demonstrated that while synthetic small-molecule hTERT inhibitors successfully induced senescence in mature cancer cells, they caused significant stem-cell depletion in rapidly proliferating hematopoietic marrow. [4] Consequently, therapeutic oncology has shifted toward targeting telomerase-associated shelterin proteins, which regulate telomere capping without directly suppressing baseline enzymatic activity."
      },
      "questions": [
        {
          "id": "ch2-w5",
          "questionNumber": 5,
          "label": "WORKED EXAMPLE 5 — READING COMPREHENSION",
          "prompt": "Which sentence provides the best evidence for the claim that targeting telomerase directly can produce adverse physiological side effects in healthy non-cancerous tissues?",
          "options": [
            {
              "label": "A",
              "text": "Sentence 1 ('Somatic human... barrier.')"
            },
            {
              "label": "B",
              "text": "Sentence 2 ('In malignant... (hTERT).')"
            },
            {
              "label": "C",
              "text": "Sentence 3 ('Interestingly, recent... marrow.')"
            },
            {
              "label": "D",
              "text": "Sentence 4 ('Consequently, therapeutic... activity.')"
            }
          ],
          "correctAnswer": "C",
          "correctAnswerIndex": 2,
          "whyCorrectTitle": "Why C is Correct (Logical Derivation):",
          "whyCorrect": "Sentence 3 explicitly details the adverse side effect in healthy tissue: while hTERT inhibitors induced senescence in cancer cells, 'they caused significant stem-cell depletion in rapidly proliferating hematopoietic marrow.' Hematopoietic marrow is healthy non-cancerous tissue. Sentence 3 provides the exact empirical proof.",
          "distractorExplanations": [
            {
              "optionLabel": "A",
              "explanation": "Sentence 1 explains normal somatic telomere shortening and natural senescence, not drug-induced side effects."
            },
            {
              "optionLabel": "B",
              "explanation": "Sentence 2 describes how cancer cells reactivate telomerase to bypass senescence."
            },
            {
              "optionLabel": "D",
              "explanation": "Sentence 4 describes the alternative therapeutic approach (targeting shelterin proteins), not the adverse side effect itself."
            }
          ],
          "passageSupport": "Sentence 3: 'synthetic small-molecule hTERT inhibitors... caused significant stem-cell depletion in rapidly proliferating hematopoietic marrow.'",
          "eliminationShortcut": "Match the claim's core elements: 'adverse side effect in healthy tissue' = 'stem-cell depletion in hematopoietic marrow' in Sentence 3.",
          "educationalObjective": "Identify exact sentences that provide empirical proof for specific physiological claims."
        }
      ]
    },
    {
      "id": "ch2-b3-sec2",
      "sectionNumber": "2",
      "sectionTitle": "CONCEPT 2 (ADVANCED): ELIMINATING THE SUPERFICIAL KEYWORD OVERLAP TRAP",
      "content": [
        "Distractors often share several exact keywords with the question stem but describe background context, rejected hypotheses, or alternate mechanisms.",
        "> **Rule**: Never choose an evidence sentence based on keyword matching. Select based on the precise logical and causal relationship."
      ],
      "passage": {
        "title": "Shelterin Modulation and Epigenetic Telomere Capping",
        "text": "[1] Somatic human cells enter replicative senescence once telomeres reach a critical threshold length. [2] In malignant carcinomas, neoplastic cells bypass senescence by reactivating telomerase reverse transcriptase (hTERT). [3] While direct hTERT inhibition damages hematopoietic bone marrow stem cells, targeting telomerase-associated shelterin proteins modulates telomere structure without eliminating catalytic enzyme activity. [4] In preclinical murine trials, selective shelterin modulators effectively restored senescence in carcinoma lines without causing measurable marrow cytotoxicity."
      },
      "questions": [
        {
          "id": "ch2-w6",
          "questionNumber": 6,
          "label": "WORKED EXAMPLE 6 — READING COMPREHENSION",
          "prompt": "Which sentence provides the most direct evidence that shelterin modulation achieves anti-tumor efficacy without the hematological toxicity of direct hTERT inhibitors?",
          "options": [
            {
              "label": "A",
              "text": "Sentence 1 ('Somatic human... length.')"
            },
            {
              "label": "B",
              "text": "Sentence 2 ('In malignant... (hTERT).')"
            },
            {
              "label": "C",
              "text": "Sentence 3 ('While direct... activity.')"
            },
            {
              "label": "D",
              "text": "Sentence 4 ('In preclinical... cytotoxicity.')"
            }
          ],
          "correctAnswer": "D",
          "correctAnswerIndex": 3,
          "whyCorrectTitle": "Why D is Correct (Logical Derivation):",
          "whyCorrect": "The claim requires empirical proof of two things: anti-tumor efficacy (restoring senescence in carcinoma lines) AND lack of hematological toxicity (without causing marrow cytotoxicity). While Sentence 3 describes the theoretical concept, Sentence 4 provides the actual experimental evidence proving both outcomes in preclinical trials.",
          "distractorExplanations": [
            {
              "optionLabel": "A",
              "explanation": "Describes baseline somatic senescence without discussing therapeutics or toxicity."
            },
            {
              "optionLabel": "B",
              "explanation": "Describes how cancer cells reactivate hTERT, providing no evidence of therapy efficacy."
            },
            {
              "optionLabel": "C",
              "explanation": "Contains overlapping keywords but describes the theoretical mechanism rather than the empirical preclinical trial evidence."
            }
          ],
          "passageSupport": "Sentence 4: 'In preclinical murine trials, selective shelterin modulators effectively restored senescence in carcinoma lines without causing measurable marrow cytotoxicity.'",
          "eliminationShortcut": "Look for the empirical trial results confirming both anti-tumor effect and zero marrow cytotoxicity (Sentence 4).",
          "educationalObjective": "Distinguish theoretical mechanism descriptions from empirical proof in molecular biology passages."
        }
      ]
    },
    {
      "id": "ch2-b3-sec3",
      "sectionNumber": "3",
      "sectionTitle": "MASTER TAKEAWAY & SPEED HEURISTIC",
      "content": [
        "Rule:\n> Genuine evidence directly proves the full causal link of the claim. Reject sentences that share keywords but describe adjacent topics or background mechanisms."
      ]
    }
  ],
  "practiceQuestions": [
    {
      "id": "ch2-p11",
      "questionNumber": 11,
      "label": "PRACTICE QUESTION 11 — LEAF MORPHOLOGY IN ARID SCRUBLAND TAXA",
      "prompt": "Which conclusion is best supported by the physiological assays on succulent shrubs?",
      "passage": {
        "title": "Leaf Morphology in Arid Scrubland Taxa",
        "text": "Botanists comparing succulent shrub species across arid scrublands observed that taxa with smaller total foliar surface areas exhibited significantly lower rates of transpirational water loss during mid-day heat. By measuring photosynthetic output across varied soil moisture regimes, researchers confirmed that reducing leaf surface area provides a decisive water-retention advantage during dry spells, while maintaining sufficient photosynthetic capacity to sustain growth."
      },
      "options": [
        {
          "label": "A",
          "text": "Reduced foliar surface area enhances moisture preservation during drought without compromising essential carbon fixation."
        },
        {
          "label": "B",
          "text": "Succulent shrub species with larger leaves produce higher survival rates during extended multi-year droughts."
        },
        {
          "label": "C",
          "text": "Transpirational water loss is governed entirely by ambient humidity rather than leaf surface area."
        },
        {
          "label": "D",
          "text": "Arid scrubland plants have lost the ability to adjust stomatal conductance during mid-day heat."
        }
      ],
      "correctAnswer": "A",
      "correctAnswerIndex": 0,
      "whyCorrectTitle": "Why A is the Best Answer:",
      "whyCorrect": "The passage notes that smaller leaf area yielded lower transpirational water loss while 'maintaining sufficient photosynthetic capacity to sustain growth.' Choice A accurately summarizes this dual finding: preserving moisture while maintaining carbon fixation (photosynthesis).",
      "distractorExplanations": [
        {
          "optionLabel": "B",
          "explanation": "Directly contradicts the passage, which states smaller leaves provide the water-retention advantage."
        },
        {
          "optionLabel": "C",
          "explanation": "Extreme claim ('governed entirely'); the text proves leaf surface area directly influences transpiration rates."
        },
        {
          "optionLabel": "D",
          "explanation": "Unfounded claim regarding loss of stomatal adjustment capacity."
        }
      ],
      "passageSupport": "Text states: 'reducing leaf surface area provides a decisive water-retention advantage... while maintaining sufficient photosynthetic capacity...'",
      "eliminationShortcut": "Match the key findings: lower transpiration + maintained photosynthesis = Choice A.",
      "educationalObjective": "Synthesize botanical physiological trade-offs into bounded functional statements."
    },
    {
      "id": "ch2-p12",
      "questionNumber": 12,
      "label": "PRACTICE QUESTION 12 — PHOTOSYNTHETIC TRADE-OFFS IN CHAPARRAL VEGETATION",
      "prompt": "Based on the passage, the physiological trade-off associated with chaparral sclerophyllous leaf structures is that these adaptations:",
      "passage": {
        "title": "Photosynthetic Trade-offs in Chaparral Vegetation",
        "text": "Comparative physiological assays on evergreen sclerophyllous chaparral shrubs demonstrated that thick waxy cuticles and sunken stomata effectively restrict water loss under severe moisture deficits. Researchers noted, however, that these structural adaptations impose a metabolic cost: they lower maximum photosynthetic rates during periods of abundant water availability, demonstrating that morphological drought defenses involve inherent evolutionary trade-offs."
      },
      "options": [
        {
          "label": "A",
          "text": "prevent shrubs from absorbing any soil moisture during winter rain cycles."
        },
        {
          "label": "B",
          "text": "constrain maximum photosynthetic carbon gain when environmental moisture is plentiful."
        },
        {
          "label": "C",
          "text": "cause foliage to decompose rapidly upon shedding during summer droughts."
        },
        {
          "label": "D",
          "text": "increase vulnerability to fungal pathogens during dry summer periods."
        }
      ],
      "correctAnswer": "B",
      "correctAnswerIndex": 1,
      "whyCorrectTitle": "Why B is the Best Answer:",
      "whyCorrect": "The text explicitly defines the metabolic cost/trade-off: structural defenses 'lower maximum photosynthetic rates during periods of abundant water availability.' Choice B is a precise paraphrase of this constraint.",
      "distractorExplanations": [
        {
          "optionLabel": "A",
          "explanation": "Extreme distortion ('prevent... from absorbing any moisture'); the cuticles restrict water loss through leaves, not soil absorption by roots."
        },
        {
          "optionLabel": "C",
          "explanation": "Brings in leaf decomposition rates, which are unmentioned in the text."
        },
        {
          "optionLabel": "D",
          "explanation": "Introduces fungal pathogens, which are nowhere discussed in the passage."
        }
      ],
      "passageSupport": "Text states: 'impose a metabolic cost: they lower maximum photosynthetic rates during periods of abundant water availability...'",
      "eliminationShortcut": "Look for direct restatement of 'lower maximum photosynthetic rates during periods of abundant water availability'.",
      "educationalObjective": "Identify explicit evolutionary trade-offs described in botanical physiological studies."
    },
    {
      "id": "ch2-p13",
      "questionNumber": 13,
      "label": "PRACTICE QUESTION 13 — AUTOMATION ADOPTION RATES IN MANUFACTURING",
      "prompt": "Which conclusion is most strongly supported by the manufacturing modernization study?",
      "passage": {
        "title": "Automation Adoption Rates in Manufacturing",
        "text": "A study of industrial modernization found that while robotic assembly cells reduce per-unit production costs by 35 percent, small-scale manufacturing enterprises adopt automated machinery at less than one-third the rate of large corporations. Financial audits revealed that high upfront capital equipment costs and rigid commercial lending terms prevent smaller manufacturers from investing in automation, despite its documented long-term productivity advantages."
      },
      "options": [
        {
          "label": "A",
          "text": "Small-scale manufacturers avoid automated machinery primarily because they doubt its productivity benefits."
        },
        {
          "label": "B",
          "text": "Upfront capital requirements and commercial credit constraints represent significant barriers to automation adoption for smaller firms."
        },
        {
          "label": "C",
          "text": "Robotic assembly cells are engineered exclusively for large-scale corporate manufacturing facilities."
        },
        {
          "label": "D",
          "text": "Per-unit production costs in small enterprises are lower than those in automated corporate facilities."
        }
      ],
      "correctAnswer": "B",
      "correctAnswerIndex": 1,
      "whyCorrectTitle": "Why B is the Best Answer:",
      "whyCorrect": "The passage directly asserts that 'high upfront capital equipment costs and rigid commercial lending terms prevent smaller manufacturers from investing in automation.' Choice B accurately captures these financial barriers.",
      "distractorExplanations": [
        {
          "optionLabel": "A",
          "explanation": "Contradicted by text; small firms do not doubt the benefits—the text says adoption is constrained despite 'documented long-term productivity advantages.'"
        },
        {
          "optionLabel": "C",
          "explanation": "Overly extreme ('engineered exclusively'); the machines could work for small firms, but small firms face financial barriers buying them."
        },
        {
          "optionLabel": "D",
          "explanation": "Contradicted by the text, which notes robotic cells reduce unit costs by 35 percent."
        }
      ],
      "passageSupport": "Text states: 'high upfront capital equipment costs and rigid commercial lending terms prevent smaller manufacturers...'",
      "eliminationShortcut": "Match stated cause (capital costs + credit terms) to adoption barrier.",
      "educationalObjective": "Infer primary economic constraints from empirical industry surveys."
    },
    {
      "id": "ch2-p14",
      "questionNumber": 14,
      "label": "PRACTICE QUESTION 14 — URBAN CORE REVITALIZATION FRAMEWORKS",
      "prompt": "The passage most strongly suggests that urban planners have shifted their focus away from traditional retail preservation toward asking which question?",
      "passage": {
        "title": "Urban Core Revitalization Frameworks",
        "text": "Urban planners examining declining downtown commercial corridors have shifted strategic focus away from attempting to protect legacy brick-and-mortar retail stores against e-commerce competition. Instead, recent municipal revitalization frameworks prioritize rezoning vacant ground-floor storefronts into experiential cultural venues, culinary incubators, and civic gathering spaces designed to generate sustained pedestrian foot traffic."
      },
      "options": [
        {
          "label": "A",
          "text": "How can municipal tax policies completely eliminate e-commerce competition?"
        },
        {
          "label": "B",
          "text": "How can cities repurpose commercial spaces to adapt to shifting economic functions of downtown cores?"
        },
        {
          "label": "C",
          "text": "Why have consumers stopped visiting downtown cultural and culinary venues?"
        },
        {
          "label": "D",
          "text": "Should residential apartments be prohibited from downtown commercial districts?"
        }
      ],
      "correctAnswer": "B",
      "correctAnswerIndex": 1,
      "whyCorrectTitle": "Why B is the Best Answer:",
      "whyCorrect": "The text explains that planners no longer try to protect legacy retail against e-commerce, but instead rezone commercial storefronts into cultural, culinary, and civic gathering spaces. This shows they are asking how cities can adapt commercial spaces to new economic functions (Choice B).",
      "distractorExplanations": [
        {
          "optionLabel": "A",
          "explanation": "Extreme distortion ('completely eliminate e-commerce'); the text says planners moved *away* from fighting e-commerce competition."
        },
        {
          "optionLabel": "B",
          "explanation": "Correct answer."
        },
        {
          "optionLabel": "C",
          "explanation": "Inverts the passage; cultural and culinary venues are seen as solutions attracting foot traffic, not as places consumers stopped visiting."
        },
        {
          "optionLabel": "D",
          "explanation": "Brings in residential apartments and prohibition, which are completely absent from the text."
        }
      ],
      "passageSupport": "Text states: 'shifted strategic focus away from attempting to protect legacy retail... prioritize rezoning... into experiential cultural venues, culinary incubators, and civic gathering spaces...'",
      "eliminationShortcut": "Identify the core pivot: from protecting legacy retail → to repurposing spaces for new civic/cultural uses.",
      "educationalObjective": "Infer overarching strategic reorientations in municipal policy texts."
    }
  ]
};
