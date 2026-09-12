import { ReadingModule } from './readingTypes';

export const READING_CH2_BLOCK_7: ReadingModule = {
  "moduleNumber": 7,
  "id": "reading-ch2-block7",
  "chapterTitle": "CHAPTER 2 — EVIDENCE & INFERENCE",
  "moduleTitle": "LOGICAL COMPLETION & SENTENCE BOUNDARY TRANSITIONS",
  "endLabel": "MODULE COMPLETE",
  "sections": [
    {
      "id": "ch2-b7-sec1",
      "sectionNumber": "1",
      "sectionTitle": "CONCEPT 1 (FOUNDATIONAL): THE LOGICAL COMPLETION MANDATE",
      "content": [
        "Logical completion questions require you to solve a deductive logic puzzle.",
        "**The 3-Step Completion Protocol**:\n1. **Isolate Trajectory**: Read the premises to identify the direction and qualifiers of the argument.\n2. **Note Transition Markers**: Look for concluding connectors (*Therefore, Consequently* vs. *Nevertheless, However*).\n3. **Match Logical Requirement**: If the connector is *Therefore*, pick the direct bounded deduction. If *However*, pick the unexpected complication."
      ],
      "passage": {
        "title": "Attentional Capture in Salience-Driven Visual Search",
        "text": "[1] Visual search paradigms consistently show that uniquely colored 'singleton' stimuli capture involuntary visual attention even when observers are explicitly instructed to ignore color and search solely for geometric shapes. Neuroimaging reveals that this involuntary capture activates early visual cortex regions (V1/V2) within 100 milliseconds of stimulus onset, well before top-down executive control from the prefrontal cortex can exert inhibitory feedback.\n\n[2] Researchers observed, however, that when target shapes appeared in predictable spatial locations, prefrontal inhibitory signals fired proactively *before* display onset, suppressing V1/V2 activation. This suggests that while bottom-up sensory salience naturally captures attention by default, [blank]"
      },
      "questions": [
        {
          "id": "ch2-w13",
          "questionNumber": 13,
          "label": "WORKED EXAMPLE 13 — READING COMPREHENSION",
          "prompt": "Which choice most logically completes the text?",
          "options": [
            {
              "label": "A",
              "text": "proactive top-down cognitive expectations can override involuntary attentional capture if spatial parameters are predictable."
            },
            {
              "label": "B",
              "text": "human visual search is entirely governed by bottom-up sensory salience in all real-world tasks."
            },
            {
              "label": "C",
              "text": "color singletons are completely invisible to observers when target shapes are presented in familiar colors."
            },
            {
              "label": "D",
              "text": "prefrontal cortex regions are incapable of modulating early visual sensory processing."
            }
          ],
          "correctAnswer": "A",
          "correctAnswerIndex": 0,
          "whyCorrectTitle": "Why A is Correct (Logical Derivation):",
          "whyCorrect": "The passage sets up a contrast: default bottom-up color capture (Paragraph 1) vs. proactive prefrontal inhibition when target locations are predictable (Paragraph 2). The final sentence begins: 'This suggests that while bottom-up sensory salience naturally captures attention by default, [blank]'. The contrast clause must complete the thought by explaining that top-down expectations can override this capture when spatial locations are predictable. Choice A matches this exact trajectory.",
          "distractorExplanations": [
            {
              "optionLabel": "B",
              "explanation": "Contradicts Paragraph 2, which showed top-down prefrontal signals successfully suppressed capture."
            },
            {
              "optionLabel": "C",
              "explanation": "Extreme overstatement ('completely invisible') unsupported by the text."
            },
            {
              "optionLabel": "D",
              "explanation": "Directly opposite; Paragraph 2 proved prefrontal regions suppressed V1/V2 activation."
            }
          ],
          "passageSupport": "Paragraph 2: 'when target shapes appeared in predictable spatial locations, prefrontal inhibitory signals fired proactively before display onset, suppressing V1/V2 activation.'",
          "eliminationShortcut": "Complete the 'While X by default, Y when Z' structure: While bottom-up captures by default, top-down suppresses it when locations are predictable.",
          "educationalObjective": "Synthesize contrasting neurological pathways to formulate an airtight concluding deduction."
        }
      ]
    },
    {
      "id": "ch2-b7-sec2",
      "sectionNumber": "2",
      "sectionTitle": "CONCEPT 2 (ADVANCED): AVOIDING DIRECTIONAL REVERSAL & OVER-EXTRAPOLATION IN LOGICAL COMPLETIONS",
      "content": [
        "Advanced completions test whether you can maintain strict trajectory discipline without reversing direction or over-extrapolating.",
        "**The 2 Major Completion Traps**:\n1. **Directional Reversal**: Picking an answer that agrees with an initial hypothesis that was disproven in subsequent sentences.\n2. **Policy Over-Extrapolation**: Leaping from a narrow physiological/empirical observation to sweeping global political, ethical, or societal mandates."
      ],
      "passage": {
        "title": "Batesian Mimicry Collapse at High Predator Satiation",
        "text": "[1] Evolutionary models predict that Batesian mimicry remains evolutionarily stable only when toxic models outnumber harmless mimics, ensuring predators encounter noxious prey frequently enough to maintain avoidance conditioning. [2] However, in a multi-season field study tracking *Heliconius* butterfly morphs, entomologists found that even when palatable mimics outnumbered toxic models four to one, avian predators continued to avoid the mimetic morphs. [3] The researchers discovered that avian predators in this habitat had alternative, highly abundant non-mimetic prey available, meaning they experienced zero nutritional pressure to sample potentially toxic targets. [4] This finding indicates that the breakdown of Batesian mimicry at high mimic frequencies [blank]"
      },
      "questions": [
        {
          "id": "ch2-w14",
          "questionNumber": 14,
          "label": "WORKED EXAMPLE 14 — READING COMPREHENSION",
          "prompt": "Which choice most logically completes the text?",
          "options": [
            {
              "label": "A",
              "text": "is not an inevitable mathematical outcome, but is conditioned on the availability and abundance of alternative prey species."
            },
            {
              "label": "B",
              "text": "occurs uniformly and rapidly across all terrestrial ecosystems regardless of local food web dynamics."
            },
            {
              "label": "C",
              "text": "causes toxic model species to immediately shed their warning coloration and adopt cryptic camouflage."
            },
            {
              "label": "D",
              "text": "proves that avian predators possess no innate capacity for visual pattern discrimination."
            }
          ],
          "correctAnswer": "A",
          "correctAnswerIndex": 0,
          "whyCorrectTitle": "Why A is Correct (Logical Derivation):",
          "whyCorrect": "The passage begins by noting that classical models predicted mimicry breakdown at high mimic frequencies, but field data showed mimicry survived even at 4:1 ratios because abundant alternative prey removed the pressure to sample mimics. The final sentence must complete the thought: mimicry breakdown is therefore not inevitable, but depends on whether alternative prey are available. Choice A captures this exact bounded qualification.",
          "distractorExplanations": [
            {
              "optionLabel": "B",
              "explanation": "Directional reversal; asserts breakdown happens uniformly everywhere, directly contradicted by the 4:1 field survival finding."
            },
            {
              "optionLabel": "C",
              "explanation": "Extreme biological speculation regarding toxic models shedding warning coloration."
            },
            {
              "optionLabel": "D",
              "explanation": "Unwarranted cognitive generalization regarding avian visual discrimination."
            }
          ],
          "passageSupport": "Sentence 2 & 3: 'even when palatable mimics outnumbered toxic models four to one, avian predators continued to avoid... predators... had alternative, highly abundant non-mimetic prey available...'",
          "eliminationShortcut": "Old theory = breakdown inevitable at high ratios; New evidence = survived due to alternative prey -> breakdown is conditioned on alternative prey abundance (Choice A).",
          "educationalObjective": "Formulate bounded completion deductions that qualify traditional mathematical models with empirical ecological context."
        }
      ]
    },
    {
      "id": "ch2-b7-sec3",
      "sectionNumber": "3",
      "sectionTitle": "MASTER TAKEAWAY & SPEED HEURISTIC",
      "content": [
        "Rule:\n> The correct completion sentence must act as the inevitable logical endpoint of the preceding premises. It should never introduce an unheralded new topic or reverse the direction established by empirical data."
      ]
    }
  ],
  "practiceQuestions": [
    {
      "id": "ch2-p36",
      "questionNumber": 36,
      "label": "PRACTICE QUESTION 36 — URBAN FORESTRY AND CORTISOL BIOMARKERS",
      "prompt": "Which conclusion is most strongly supported by the epidemiological passage?",
      "passage": {
        "title": "Urban Forestry and Cortisol Biomarkers",
        "text": "Epidemiologists investigating urban forestry measured salivary cortisol levels among residents living on tree-lined versus barren city streets. While residents on tree-shaded blocks recorded lower baseline stress hormones, multivariate regression revealed that tree canopy coverage was highly collinear with higher median household income, lower traffic noise, and superior municipal services, complicating any direct, isolated causal link."
      },
      "options": [
        {
          "label": "A",
          "text": "The relationship between urban tree canopy density and lower stress biomarkers may be complicated by co-occurring neighborhood factors."
        },
        {
          "label": "B",
          "text": "Tree canopy density is conclusively proven to be the sole direct cause of reduced cortisol levels in urban residents."
        },
        {
          "label": "C",
          "text": "Household income and municipal service quality have zero influence on baseline salivary cortisol levels."
        },
        {
          "label": "D",
          "text": "Tree-lined streets produce no physiological health benefits for city residents."
        }
      ],
      "correctAnswer": "A",
      "correctAnswerIndex": 0,
      "whyCorrectTitle": "Why A is the Best Answer:",
      "whyCorrect": "The passage notes that while tree-shaded blocks had lower cortisol, canopy coverage was collinear with income, lower noise, and better services. This proves the direct causal link is complicated by these co-occurring neighborhood factors (Choice A).",
      "distractorExplanations": [
        {
          "optionLabel": "B",
          "explanation": "Overly extreme ('conclusively proven to be sole direct cause'); directly contradicts the text's warning about collinearity."
        },
        {
          "optionLabel": "C",
          "explanation": "Extreme claim ('zero influence'); the text notes income and services are collinear variables that complicate the link."
        },
        {
          "optionLabel": "D",
          "explanation": "Overly negative ('no physiological health benefits'); the text notes lower cortisol was observed, but cautions against simple causal isolation."
        }
      ],
      "passageSupport": "Text states: 'canopy coverage was highly collinear with higher median household income, lower traffic noise... complicating any direct, isolated causal link.'",
      "eliminationShortcut": "Collinearity of multiple positive factors = causal relationship is complicated by co-occurring variables.",
      "educationalObjective": "Evaluate collinearity in observational epidemiology to bound causal inferences."
    },
    {
      "id": "ch2-p37",
      "questionNumber": 37,
      "label": "PRACTICE QUESTION 37 — POLICY EVALUATION VS MACROECONOMIC TRENDS",
      "prompt": "The dissenting economists primarily challenge the proponents' conclusion by:",
      "passage": {
        "title": "Policy Evaluation vs Macroeconomic Trends",
        "text": "Proponents of regional tax holidays argued that a spike in new corporate business filings proved the tax policy stimulated local economic expansion. However, dissenting economists pointed out that the surge in business registrations coincided precisely with a nationwide credit expansion that increased enterprise creation across both tax-advantaged and non-tax-advantaged states alike."
      },
      "options": [
        {
          "label": "A",
          "text": "suggesting that the surge in business filings reflected a nationwide credit boom rather than a direct causal effect of the regional tax policy"
        },
        {
          "label": "B",
          "text": "demonstrating that tax holidays always lead to a reduction in total corporate tax revenues"
        },
        {
          "label": "C",
          "text": "proving that new corporate business filings have zero impact on regional employment"
        },
        {
          "label": "D",
          "text": "showing that credit expansion only occurred in states that refused to implement tax holidays"
        }
      ],
      "correctAnswer": "A",
      "correctAnswerIndex": 0,
      "whyCorrectTitle": "Why A is the Best Answer:",
      "whyCorrect": "Dissenting economists note the filing spike happened nationwide across both tax-advantaged and non-tax-advantaged states due to a credit expansion. This shows the filing surge was driven by the national credit boom rather than the local tax policy (Choice A).",
      "distractorExplanations": [
        {
          "optionLabel": "B",
          "explanation": "Focuses on corporate tax revenue reductions, which is not the argument raised by the dissenting economists."
        },
        {
          "optionLabel": "C",
          "explanation": "Makes an extreme claim ('zero impact on regional employment') not argued in the text."
        },
        {
          "optionLabel": "D",
          "explanation": "Contradicted by the text, which states credit expansion occurred 'across both tax-advantaged and non-tax-advantaged states alike.'"
        }
      ],
      "passageSupport": "Text states: 'surging business registrations coincided precisely with a nationwide credit expansion... across both tax-advantaged and non-tax-advantaged states alike.'",
      "eliminationShortcut": "Widespread macro trend coinciding with local policy = policy impact is confounded by macro cause.",
      "educationalObjective": "Identify alternative macroeconomic explanations that challenge localized policy evaluations."
    },
    {
      "id": "ch2-p38",
      "questionNumber": 38,
      "label": "PRACTICE QUESTION 38 — EXPERIMENTAL ISOLATION IN MEMORY CONSOLIDATION",
      "prompt": "Why were the cognitive scientists justified in drawing a causal conclusion regarding study breaks and retention?",
      "passage": {
        "title": "Experimental Isolation in Memory Consolidation",
        "text": "Cognitive researchers randomly assigned 200 university students studying complex technical terminology into two groups: one that took a 10-minute outdoor walking break every 50 minutes, and another that rested indoors on social media. Because participants were randomly assigned, studied identical curriculum materials, and took identical standardized retention exams 48 hours later, researchers concluded that walking breaks causally enhanced long-term memory retention."
      },
      "options": [
        {
          "label": "A",
          "text": "Random assignment and standardized experimental controls minimized pre-existing participant differences and isolated the study break routine."
        },
        {
          "label": "B",
          "text": "The experiment included every university student in the country over a multi-year timeframe."
        },
        {
          "label": "C",
          "text": "Social media use was proven to destroy human memory capacity completely."
        },
        {
          "label": "D",
          "text": "Participants in the walking group had higher baseline vocabulary scores prior to the study."
        }
      ],
      "correctAnswer": "A",
      "correctAnswerIndex": 0,
      "whyCorrectTitle": "Why A is the Best Answer:",
      "whyCorrect": "The text highlights that participants were randomly assigned, studied identical materials, and took identical tests. These methodological controls rule out pre-existing differences and isolate the study break as the cause of the higher retention (Choice A).",
      "distractorExplanations": [
        {
          "optionLabel": "B",
          "explanation": "Factually inaccurate; the study involved 200 students in a single experiment, not every student in the nation."
        },
        {
          "optionLabel": "C",
          "explanation": "Extreme claim ('destroy memory capacity completely') unsupported by the text."
        },
        {
          "optionLabel": "D",
          "explanation": "Random assignment prevents systematic baseline differences; claiming the walking group had higher baseline scores contradicts the purpose of random assignment."
        }
      ],
      "passageSupport": "Text states: 'Because participants were randomly assigned, studied identical curriculum materials, and took identical standardized retention exams...'",
      "eliminationShortcut": "Random assignment + identical materials/exams = causal inference justified by methodological controls.",
      "educationalObjective": "Recognize how random assignment and controlled conditions justify causal claims."
    },
    {
      "id": "ch2-p39",
      "questionNumber": 39,
      "label": "PRACTICE QUESTION 39 — BOUNDARY CONDITIONS OF EXERCISE-INDUCED FOCUS",
      "prompt": "Which statement is LEAST supported by the walking-breaks passage?",
      "passage": {
        "title": "Boundary Conditions of Exercise-Induced Focus",
        "text": "Laboratory trials demonstrate that short bouts of moderate aerobic walking improve short-term cognitive focus and working memory on structured vocabulary recall tests. Researchers emphasize, however, that physical exercise breaks cannot replace substantive study time or universally enhance performance across every distinct academic discipline."
      },
      "options": [
        {
          "label": "A",
          "text": "Taking walking breaks is guaranteed to maximize student performance across all academic subjects equally."
        },
        {
          "label": "B",
          "text": "Short bouts of walking produced measurable improvements in working memory during vocabulary recall tests."
        },
        {
          "label": "C",
          "text": "Physical activity breaks are insufficient to replace dedicated, substantive study time."
        },
        {
          "label": "D",
          "text": "The cognitive benefits of walking breaks may vary depending on the specific academic task being performed."
        }
      ],
      "correctAnswer": "A",
      "correctAnswerIndex": 0,
      "whyCorrectTitle": "Why A is the Best Answer (LEAST Supported):",
      "whyCorrect": "The text explicitly states that exercise breaks 'cannot... universally enhance performance across every distinct academic discipline.' Claiming that walking breaks are 'guaranteed to maximize student performance across all academic subjects equally' (Choice A) directly contradicts the passage and is LEAST supported.",
      "distractorExplanations": [
        {
          "optionLabel": "B",
          "explanation": "Supported by text: 'improve short-term cognitive focus and working memory on structured vocabulary recall tests.'"
        },
        {
          "optionLabel": "C",
          "explanation": "Supported by text: 'exercise breaks cannot replace substantive study time.'"
        },
        {
          "optionLabel": "D",
          "explanation": "Supported by text: notes performance is not universally enhanced across every discipline."
        }
      ],
      "passageSupport": "Text states: 'exercise breaks cannot replace substantive study time or universally enhance performance across every distinct academic discipline.'",
      "eliminationShortcut": "Identify the absolute claim that directly contradicts the author's explicitly stated limitation.",
      "educationalObjective": "Detect statements that violate explicit boundary conditions in cognitive research texts."
    },
    {
      "id": "ch2-p40",
      "questionNumber": 40,
      "label": "PRACTICE QUESTION 40 — MANAGERIAL CONFOUNDERS IN REMOTE WORK RETENTION",
      "prompt": "Which statement best represents the independent organizational researchers' critique?",
      "passage": {
        "title": "Managerial Confounders in Remote Work Retention",
        "text": "A corporate consulting report claimed that introducing flexible remote work schedules caused employee turnover to drop by 40 percent across tech startups. Independent organizational researchers cautioned that startups offering flexible arrangements were also systematically managed by leadership teams providing higher equity compensation, clearer mentorship, and better workplace culture, making managerial quality a probable underlying driver of employee loyalty."
      },
      "options": [
        {
          "label": "A",
          "text": "The reduction in turnover may have been driven by managerial quality and compensation factors that coincided with flexible work policies."
        },
        {
          "label": "B",
          "text": "Flexible work schedules inevitably cause employee turnover to increase over time."
        },
        {
          "label": "C",
          "text": "Corporate consulting reports are legally prohibited from publishing statistical findings on employee retention."
        },
        {
          "label": "D",
          "text": "Equity compensation has zero effect on software engineer retention in tech startups."
        }
      ],
      "correctAnswer": "A",
      "correctAnswerIndex": 0,
      "whyCorrectTitle": "Why A is the Best Answer:",
      "whyCorrect": "The researchers argue that startups offering flexible schedules *also* had higher equity, clearer mentorship, and better culture. Thus, managerial quality and compensation—rather than flexible schedules alone—likely drove the retention gains (Choice A).",
      "distractorExplanations": [
        {
          "optionLabel": "B",
          "explanation": "Extreme claim ('inevitably cause turnover to increase') contradicted by the text's focus on confounding managerial factors."
        },
        {
          "optionLabel": "C",
          "explanation": "Absurd claim about legal prohibitions on corporate consulting reports."
        },
        {
          "optionLabel": "D",
          "explanation": "Extreme claim ('zero effect'); the researchers specifically highlight equity compensation as a key component of managerial quality driving retention."
        }
      ],
      "passageSupport": "Text states: 'startups offering flexible arrangements were also systematically managed by leadership teams providing higher equity... making managerial quality a probable underlying driver...'",
      "eliminationShortcut": "Match alternative explanation: retention driven by co-occurring managerial and compensation quality.",
      "educationalObjective": "Evaluate organizational critiques that highlight managerial confounding variables."
    }
  ]
};

export const READING_CH2_BLOCK_8: ReadingModule = {
  "moduleNumber": 8,
  "id": "reading-ch2-block8",
  "chapterTitle": "CHAPTER 2 — EVIDENCE & INFERENCE",
  "moduleTitle": "POINT OF VIEW, PERSPECTIVE, & EPISTEMIC STANCE",
  "endLabel": "MODULE COMPLETE",
  "sections": [
    {
      "id": "ch2-b8-sec1",
      "sectionNumber": "1",
      "sectionTitle": "CONCEPT 1 (FOUNDATIONAL): CALIBRATING EPISTEMIC CERTAINTY",
      "content": [
        "Epistemic stance refers to the author's degree of commitment to the truth of their claims.",
        "**The Spectrum of Epistemic Certainty**:\n1. **Categorical**: *The data establish unequivocally that...*\n2. **Probabilistic**: *These results strongly point toward...*\n3. **Tentative**: *One plausible interpretation is that...*\n4. **Agnostic**: *Existing evidence remains insufficient to determine...*",
        "**Core Rule**:\n> Always calibrate your choice to the author's exact level of epistemic hedging. If the text says *'may indicate'*, do not choose *'unwavering conviction'*."
      ],
      "passage": {
        "title": "Acoustic Adaptation and Phonemic Diversity in High-Altitude Dialects",
        "text": "[1] Evolutionary linguist Caleb Everett posited the 'Acoustic Adaptation Hypothesis,' proposing that geographic altitude shapes phonemic inventories. Specifically, Everett observed that ejective consonants—complex sounds produced with a burst of non-pulmonic air—are disproportionately concentrated in languages spoken above 1,500 meters, hypothesizing that compressed atmospheric air pressure facilitates ejective articulation and prevents respiratory moisture loss.\n\n[2] While the geographical correlation is statistically provocative, attributing phonemic evolution primarily to barometric physics remains premature. Historical linguists point out that the global distribution of ejectives coincides heavily with ancient language family migrations. Until acoustic phonetic models can demonstrate a measurable physiological advantage in laboratory altitude chambers, the altitude-ejective correlation should be regarded as an intriguing biogeographical coincidence rather than a demonstrated evolutionary adaptation."
      },
      "questions": [
        {
          "id": "ch2-w15",
          "questionNumber": 15,
          "label": "WORKED EXAMPLE 15 — READING COMPREHENSION",
          "prompt": "The author's attitude toward the 'Acoustic Adaptation Hypothesis' can best be described as:",
          "options": [
            {
              "label": "A",
              "text": "judiciously skeptical, recognizing an interesting statistical pattern while cautioning that causal proof is currently lacking"
            },
            {
              "label": "B",
              "text": "completely dismissive of the data and hostile toward statistical methods in linguistics"
            },
            {
              "label": "C",
              "text": "unreservedly enthusiastic about its potential to replace historical language family models"
            },
            {
              "label": "D",
              "text": "indifferent to phonemic diversity and geographic factors in human language"
            }
          ],
          "correctAnswer": "A",
          "correctAnswerIndex": 0,
          "whyCorrectTitle": "Why A is Correct (Logical Derivation):",
          "whyCorrect": "The author acknowledges the data is 'statistically provocative' and an 'intriguing biogeographical coincidence,' but explicitly warns that attributing causality is 'premature' and that proof is lacking until laboratory chamber tests are conducted. Choice A ('judiciously skeptical... recognizing pattern while cautioning causal proof is lacking') perfectly captures this nuanced stance.",
          "distractorExplanations": [
            {
              "optionLabel": "B",
              "explanation": "Extreme distortion; the author calls the correlation 'statistically provocative,' not hostile or completely dismissive."
            },
            {
              "optionLabel": "C",
              "explanation": "Contradicted by the text; the author highlights historical language family migration as a valid counter-explanation."
            },
            {
              "optionLabel": "D",
              "explanation": "Inaccurate; the author is actively analyzing the linguistic hypothesis."
            }
          ],
          "passageSupport": "Paragraph 2: 'While the geographical correlation is statistically provocative, attributing phonemic evolution primarily to barometric physics remains premature... should be regarded as an intriguing biogeographical coincidence rather than a demonstrated evolutionary adaptation.'",
          "eliminationShortcut": "Look for the balanced tone: 'statistically provocative' (acknowledges pattern) + 'remains premature' (skeptical of causation) -> Choice A.",
          "educationalObjective": "Calibrate authorial skepticism and epistemic qualification in scientific debates."
        }
      ]
    },
    {
      "id": "ch2-b8-sec2",
      "sectionNumber": "2",
      "sectionTitle": "CONCEPT 2 (ADVANCED): DISENTANGLING AUTHORIAL PERSPECTIVE FROM CITATION PERSPECTIVES & IRONIC UNDERTONES",
      "content": [
        "A critical reading challenge is separating the author's personal analytical perspective from the views of external sources cited in the text.",
        "**Attribution Tag Protocol**:\n- **Source Perspective**: *'Dr. Ramos contends that...'* → Citation\n- **Author Pivot**: *'While Ramos's claim is provocative, its reliance on uncalibrated proxy data introduces...'* → Author's critique",
        "**Rule**:\n> Never attribute a cited researcher's bold assertion to the author if the author introduces methodological caveats or counter-explanations."
      ],
      "passage": {
        "title": "Paleo-Oceanographic Models and Sub-Ice Cavity Circulation",
        "text": "[1] Glaciologist Elena Vance proposed the 'Pulverized Splay Hypothesis,' asserting that rapid basal ice shelf thinning in West Antarctica is triggered almost exclusively by geothermal heat fluxes warming bedrock cavities. Vance observed localized temperature anomalies in subglacial boreholes, arguing that geothermal plumes destabilize grounding lines far more rapidly than ambient oceanic warming.\n\n[2] While Vance's borehole data document genuine thermal spikes, attributing regional ice-shelf acceleration primarily to crustal geothermal dynamics is heavily contested. Physical oceanographers note that circum-polar deep water (CDW) intrusions have warmed by 0.8°C over recent decades, delivering heat energy orders of magnitude greater than localized subterranean flux. Until Vance's numerical models incorporate turbulent ocean-current thermal transport, her geothermal hypothesis remains a provocative niche conjecture rather than an established driver of ice shelf retreat."
      },
      "questions": [
        {
          "id": "ch2-w16",
          "questionNumber": 16,
          "label": "WORKED EXAMPLE 16 — READING COMPREHENSION",
          "prompt": "Which choice best describes how the author utilizes the perspective of physical oceanographers in Paragraph 2?",
          "options": [
            {
              "label": "A",
              "text": "As a dominant thermodynamic counter-explanation that challenges Vance's attribution of ice retreat to geothermal plumes"
            },
            {
              "label": "B",
              "text": "As absolute confirmation that subterranean geothermal flux has zero measurable heat output"
            },
            {
              "label": "C",
              "text": "To demonstrate that borehole drilling techniques have rendered physical oceanography obsolete"
            },
            {
              "label": "D",
              "text": "To argue that polar deep water intrusions are caused directly by crustal geothermal heat"
            }
          ],
          "correctAnswer": "A",
          "correctAnswerIndex": 0,
          "whyCorrectTitle": "Why A is Correct (Logical Derivation):",
          "whyCorrect": "In Paragraph 2, the author introduces physical oceanographers who highlight that warming circum-polar deep water delivers heat energy orders of magnitude greater than localized subterranean flux. The author uses this perspective to counter and temper Vance's claim that geothermal plumes are the primary driver of basal thinning. Choice A accurately describes this rhetorical role.",
          "distractorExplanations": [
            {
              "optionLabel": "B",
              "explanation": "Overly extreme ('zero measurable heat output'); the passage concedes thermal spikes occur but questions their relative magnitude."
            },
            {
              "optionLabel": "C",
              "explanation": "Direct inversion; the oceanographic data challenges Vance's borehole hypothesis, not the reverse."
            },
            {
              "optionLabel": "D",
              "explanation": "Causally confused; deep water warming is independent of crustal geothermal activity."
            }
          ],
          "passageSupport": "Paragraph 2: 'Physical oceanographers note that circum-polar deep water... delivering heat energy orders of magnitude greater than localized subterranean flux...'",
          "eliminationShortcut": "Identify attribution function: Oceanographers supply the massive oceanic heat mechanism that undermines the narrow geothermal claim -> Choice A.",
          "educationalObjective": "Analyze how cited domain specialists provide competing evidentiary mechanisms that limit a researcher's claims."
        }
      ]
    },
    {
      "id": "ch2-b8-sec3",
      "sectionNumber": "3",
      "sectionTitle": "MASTER TAKEAWAY & SPEED HEURISTIC",
      "content": [
        "Takeaway:\n> Elite readers separate what a theory asserts from what the author believes about that theory. Always track attribution markers and identify the author's exact degree of caution."
      ]
    }
  ],
  "practiceQuestions": [
    {
      "id": "ch2-p41",
      "questionNumber": 41,
      "label": "PRACTICE QUESTION 41 — NEOLITHIC INLAND ARTIFACT ASSEMBLAGES",
      "prompt": "Which conclusion is most strongly supported by the archaeological findings?",
      "passage": {
        "title": "Neolithic Inland Artifact Assemblages",
        "text": "Archaeologists excavating a Neolithic settlement located 300 kilometers inland uncovered Mediterranean marine shell beads and volcanic obsidian tools originating from coastal volcanic deposits. While the discovery proves that coastal goods reached the inland site, researchers emphasized that the presence of these artifacts does not prove direct commercial voyaging by the inland inhabitants, as materials frequently moved across long distances through indirect, multi-tiered tribal exchange networks."
      },
      "options": [
        {
          "label": "A",
          "text": "The artifacts confirm that coastal materials reached the inland settlement, but do not prove that inland residents engaged in direct coastal travel."
        },
        {
          "label": "B",
          "text": "Inland Neolithic inhabitants traveled directly to coastal volcanic sites to quarry obsidian."
        },
        {
          "label": "C",
          "text": "Mediterranean marine shells were used exclusively as currency in prehistoric trade."
        },
        {
          "label": "D",
          "text": "Coastal populations refused to engage in trade exchanges with inland communities."
        }
      ],
      "correctAnswer": "A",
      "correctAnswerIndex": 0,
      "whyCorrectTitle": "Why A is the Best Answer:",
      "whyCorrect": "The text explicitly states that while artifacts show coastal goods reached the inland site, 'the presence of these artifacts does not prove direct commercial voyaging by the inland inhabitants,' as goods moved via indirect exchange networks. Choice A accurately summarizes this bounded inference.",
      "distractorExplanations": [
        {
          "optionLabel": "B",
          "explanation": "Directly contradicted by the text, which warns against concluding that inland residents traveled directly to the coast."
        },
        {
          "optionLabel": "C",
          "explanation": "Overly extreme ('exclusively as currency'); the text describes shell beads as decorative artifacts, not exclusive currency."
        },
        {
          "optionLabel": "D",
          "explanation": "Directly contradicted by the presence of coastal goods at the inland site, proving trade did occur."
        }
      ],
      "passageSupport": "Text states: 'proves that coastal goods reached the inland site... does not prove direct commercial voyaging... materials frequently moved... through indirect... exchange networks.'",
      "eliminationShortcut": "Distant origin of goods = evidence of reach, not proof of direct travel.",
      "educationalObjective": "Distinguish between presence of traded material goods and direct physical mobility."
    },
    {
      "id": "ch2-p42",
      "questionNumber": 42,
      "label": "PRACTICE QUESTION 42 — POST-PANDEMIC DEMOGRAPHIC REALIGNMENT",
      "prompt": "Which conclusion is best supported by the recent census data?",
      "passage": {
        "title": "Post-Pandemic Demographic Realignment",
        "text": "Early macroeconomic projections anticipated that the rise of remote telework would trigger catastrophic, permanent de-urbanization as white-collar professionals abandoned major metropolitan cores. Recent census figures reveal a more nuanced reality: while suburban residential perimeters grew rapidly, central urban districts experienced strong demographic inflows of younger residents seeking cultural and entertainment amenities."
      },
      "options": [
        {
          "label": "A",
          "text": "The impact of remote telework on urban cores has been more nuanced than early forecasts of permanent urban collapse suggested."
        },
        {
          "label": "B",
          "text": "Remote telework caused the complete economic collapse of all central metropolitan business districts."
        },
        {
          "label": "C",
          "text": "No white-collar workers relocated from city centers to suburban perimeters following the telework shift."
        },
        {
          "label": "D",
          "text": "Younger residents abandoned urban cultural amenities in favor of rural farming communities."
        }
      ],
      "correctAnswer": "A",
      "correctAnswerIndex": 0,
      "whyCorrectTitle": "Why A is the Best Answer:",
      "whyCorrect": "The passage notes early projections foresaw catastrophic de-urbanization, but census data showed a 'more nuanced reality' where cities gained younger residents even as suburbs grew. Choice A directly captures this conclusion.",
      "distractorExplanations": [
        {
          "optionLabel": "B",
          "explanation": "Extreme claim ('complete economic collapse of all districts') directly refuted by the census findings of demographic inflows."
        },
        {
          "optionLabel": "C",
          "explanation": "Extreme claim ('no white-collar workers relocated'); the text notes suburban perimeters grew rapidly."
        },
        {
          "optionLabel": "D",
          "explanation": "Directly contradicted by text, which states younger residents moved into central urban districts for cultural amenities."
        }
      ],
      "passageSupport": "Text states: 'census figures reveal a more nuanced reality: while suburban residential perimeters grew... central urban districts experienced strong demographic inflows...'",
      "eliminationShortcut": "Suburban growth + central inflow of young residents = nuanced reality vs total collapse forecast.",
      "educationalObjective": "Evaluate demographic census data to qualify macro-economic predictions."
    },
    {
      "id": "ch2-p43",
      "questionNumber": 43,
      "label": "PRACTICE QUESTION 43 — ALGORITHMIC NEWS FEEDS AND POLITICAL LITERACY",
      "prompt": "Which statement best reflects the authors' conclusion regarding social-media news engagement?",
      "passage": {
        "title": "Algorithmic News Feeds and Political Literacy",
        "text": "Sociologists evaluating political literacy among digital media consumers found that obtaining news via social-media algorithmic feeds was associated with broad awareness of breaking headlines but lower depth of comprehension regarding complex policy mechanisms. The authors concluded that the civic utility of social news consumption depends critically on whether users actively click through to primary investigative reporting."
      },
      "options": [
        {
          "label": "A",
          "text": "Social-media news consumption fosters headline awareness, but its depth of educational utility depends on user click-through to primary reporting."
        },
        {
          "label": "B",
          "text": "Social-media algorithmic feeds destroy all interest in political news and current events."
        },
        {
          "label": "C",
          "text": "Users who rely on social media feeds display superior comprehension of complex policy mechanisms compared to readers of print news."
        },
        {
          "label": "D",
          "text": "Primary investigative reporting is ineffective for improving civic literacy."
        }
      ],
      "correctAnswer": "A",
      "correctAnswerIndex": 0,
      "whyCorrectTitle": "Why A is the Best Answer:",
      "whyCorrect": "The text states social news feeds yield broad headline awareness but lower depth of policy comprehension, concluding that civic utility depends on whether users click through to primary reporting. Choice A accurately summarizes this dual finding.",
      "distractorExplanations": [
        {
          "optionLabel": "B",
          "explanation": "Extreme claim ('destroy all interest'); the text notes feeds foster broad awareness of breaking headlines."
        },
        {
          "optionLabel": "C",
          "explanation": "Directly contradicted by text, which states feed reliance was associated with *lower* depth of comprehension regarding policy mechanisms."
        },
        {
          "optionLabel": "D",
          "explanation": "Inverts the passage, which views primary investigative reporting as essential for deeper civic utility."
        }
      ],
      "passageSupport": "Text states: 'associated with broad awareness of breaking headlines but lower depth... civic utility... depends critically on whether users actively click through to primary investigative reporting.'",
      "eliminationShortcut": "Match key elements: headline awareness + lower policy depth + dependency on click-through to primary reporting.",
      "educationalObjective": "Synthesize media sociology findings on digital news consumption and political literacy."
    },
    {
      "id": "ch2-p44",
      "questionNumber": 44,
      "label": "PRACTICE QUESTION 44 — GRID INTEGRATION OF INTERMITTENT SUBSIDIES",
      "prompt": "According to the passage, renewable power subsidies are most effective at displacing fossil-fuel generation when:",
      "passage": {
        "title": "Grid Integration of Intermittent Subsidies",
        "text": "Energy policy economists analyzing solar and wind feed-in tariffs observed that subsidizing renewable generation capacity alone failed to displace fossil-fuel baseload plants in regions lacking grid-scale energy storage. The authors concluded that public renewable subsidies achieve maximum carbon-offset efficiency only when deployed alongside battery storage and grid transmission infrastructure capable of managing generation intermittency."
      },
      "options": [
        {
          "label": "A",
          "text": "subsidies are paired with investments in grid-scale battery storage and transmission infrastructure."
        },
        {
          "label": "B",
          "text": "fossil-fuel baseload plants are shut down immediately without alternative storage capacity."
        },
        {
          "label": "C",
          "text": "regional energy consumption drops to zero during non-peak generation hours."
        },
        {
          "label": "D",
          "text": "feed-in tariffs are applied exclusively to small-scale residential solar installations."
        }
      ],
      "correctAnswer": "A",
      "correctAnswerIndex": 0,
      "whyCorrectTitle": "Why A is the Best Answer:",
      "whyCorrect": "The text states subsidies achieve maximum efficiency 'only when deployed alongside battery storage and grid transmission infrastructure capable of managing generation intermittency.' Choice A is a precise restatement.",
      "distractorExplanations": [
        {
          "optionLabel": "B",
          "explanation": "Contradicted by the text's warning that lacking grid storage prevents displacement of fossil plants."
        },
        {
          "optionLabel": "C",
          "explanation": "Extreme scenario ('energy consumption drops to zero') unmentioned in the text."
        },
        {
          "optionLabel": "D",
          "explanation": "Introduces residential vs commercial solar distinction, which is not made in the passage."
        }
      ],
      "passageSupport": "Text states: 'achieve maximum carbon-offset efficiency only when deployed alongside battery storage and grid transmission infrastructure...'",
      "eliminationShortcut": "Direct textual restatement of required condition: pairing subsidies with grid storage and transmission.",
      "educationalObjective": "Identify essential infrastructure conditions for energy policy effectiveness."
    },
    {
      "id": "ch2-p45",
      "questionNumber": 45,
      "label": "PRACTICE QUESTION 45 — CALCIFICATION TRADE-OFFS IN SYMBIONT CLADES",
      "prompt": "Which conclusion is best supported by the coral symbiont study?",
      "passage": {
        "title": "Calcification Trade-offs in Symbiont Clades",
        "text": "Marine ecologists studying Indo-Pacific reef corals discovered that colonies hosting heat-tolerant *Durusdinium* clade dinoflagellates survived intense marine heatwaves with minimal bleaching. However, physiological assays revealed that corals harboring *Durusdinium* grew at less than half the annual calcification rate of colonies hosting standard *Cladocopium* symbionts under normal temperatures, illustrating an evolutionary trade-off between thermal resilience and skeletal growth."
      },
      "options": [
        {
          "label": "A",
          "text": "Thermal resilience in *Durusdinium*-hosting corals comes at the expense of lower skeletal calcification rates under normal temperatures."
        },
        {
          "label": "B",
          "text": "*Durusdinium* dinoflagellates provide superior calcification rates under all ocean temperature conditions."
        },
        {
          "label": "C",
          "text": "Corals hosting *Cladocopium* symbionts are completely immune to marine heatwaves."
        },
        {
          "label": "D",
          "text": "Bleaching events permanently prevent corals from hosting any clade of dinoflagellates."
        }
      ],
      "correctAnswer": "A",
      "correctAnswerIndex": 0,
      "whyCorrectTitle": "Why A is the Best Answer:",
      "whyCorrect": "The passage notes *Durusdinium* allows corals to survive heatwaves, but under normal temperatures, calcification rates are less than half those of *Cladocopium* colonies. Choice A accurately expresses this trade-off between thermal resilience and growth.",
      "distractorExplanations": [
        {
          "optionLabel": "B",
          "explanation": "Directly contradicted by text; *Durusdinium* colonies grew at less than half the calcification rate under normal temperatures."
        },
        {
          "optionLabel": "C",
          "explanation": "Directly contradicted by text; *Durusdinium* is the heat-tolerant clade, while *Cladocopium* is standard."
        },
        {
          "optionLabel": "D",
          "explanation": "Extreme claim ('permanently prevent hosting any clade') unsupported by the text."
        }
      ],
      "passageSupport": "Text states: 'harboring Durusdinium grew at less than half the annual calcification rate... illustrating an evolutionary trade-off between thermal resilience and skeletal growth.'",
      "eliminationShortcut": "Match stated trade-off: heatwave resilience vs reduced calcification under normal temperatures.",
      "educationalObjective": "Extract physiological trade-offs from marine ecology symbiotic research."
    }
  ]
};
