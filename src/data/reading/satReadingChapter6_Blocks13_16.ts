import { ReadingModule } from './readingTypes';

export const READING_CH6_BLOCK_13: ReadingModule = {
  "moduleNumber": 13,
  "id": "reading-ch6-block13",
  "chapterTitle": "CHAPTER 6 — DATA & INFORMATIONAL READING",
  "moduleTitle": "COMPLEX GRAPHS, TABLES, AND MULTI-VARIABLE INTERPRETATION",
  "endLabel": "MODULE COMPLETE",
  "sections": [
    {
      "id": "ch6-b13-sec0",
      "sectionTitle": "INTRODUCTION TO COMPLEX MULTI-VARIABLE DATA",
      "content": [
        "Advanced questions test your ability to keep multiple categories, variables, and units separate without making false equivalences."
      ]
    },
    {
      "id": "ch6-b13-sec152",
      "sectionNumber": "152",
      "sectionTitle": "THE MULTI-VARIABLE METHOD",
      "content": [
        "To navigate complex tables, systematically isolate: Variable 1 (rows), Variable 2 (columns), and the precise unit of measurement."
      ]
    },
    {
      "id": "ch6-b13-sec153",
      "sectionNumber": "153",
      "sectionTitle": "RAW TOTALS VERSUS RATES",
      "content": [
        "Raw totals measure absolute counts; rates measure frequency per capita or normalized volumes. A high rate in a small category can yield a small total."
      ]
    },
    {
      "id": "ch6-b13-sec154",
      "sectionNumber": "154",
      "sectionTitle": "AVERAGES CAN HIDE VARIATION",
      "content": [
        "Identical means can obscure different spreads and distributions. Never assume a shared average means identical performance."
      ]
    },
    {
      "id": "ch6-b13-sec155",
      "sectionNumber": "155",
      "sectionTitle": "TOTAL CHANGE VERSUS RATE OF CHANGE",
      "content": [
        "Absolute increase (subtraction) and percentage growth (rate) represent different metrics and can yield opposite rankings."
      ]
    },
    {
      "id": "ch6-b13-sec158",
      "sectionNumber": "158",
      "sectionTitle": "WORKED CASE STUDY — METROPOLITAN COMMUTER MODAL SHARE",
      "content": [
        "Analyze daily commuting modes and transit usage across four metropolitan areas."
      ],
      "questions": [
        {
          "id": "ch6-w13",
          "passage": {
            "title": "Metropolitan Commuter Modal Share & Population Size",
            "text": "A national transportation census analyzed daily commuting modes across four major metropolitan areas to compare public transit, cycling, and private automobile usage."
          },
          "dataFigure": {
            "title": "Daily Commuter Counts Across Metropolitan Areas",
            "headers": [
              "City",
              "Public Transit Users",
              "Bicycle Commuters",
              "Private-Car Commuters",
              "Total Population"
            ],
            "rows": [
              [
                "Ardent",
                "420,000",
                "60,000",
                "520,000",
                "1,200,000"
              ],
              [
                "Bayford",
                "180,000",
                "45,000",
                "275,000",
                "600,000"
              ],
              [
                "Corvale",
                "250,000",
                "80,000",
                "320,000",
                "900,000"
              ],
              [
                "Dalen",
                "95,000",
                "25,000",
                "180,000",
                "400,000"
              ]
            ]
          },
          "questionNumber": 13,
          "label": "WORKED EXAMPLE 13 — METROPOLITAN COMMUTER MODAL SHARE & POPULATION SIZE",
          "prompt": "Which city recorded the greatest absolute number of public-transit users?",
          "options": [
            {
              "label": "A",
              "text": "Ardent"
            },
            {
              "label": "B",
              "text": "Bayford"
            },
            {
              "label": "C",
              "text": "Corvale"
            },
            {
              "label": "D",
              "text": "Dalen"
            }
          ],
          "correctAnswer": "A",
          "correctAnswerIndex": 0,
          "whyCorrectTitle": "Why A is correct:",
          "whyCorrect": "Ardent recorded 420,000 public transit users, the highest absolute total in that column (compared to 180k for Bayford, 250k for Corvale, and 95k for Dalen).",
          "educationalObjective": "Identify and extract absolute quantitative maximums across comparative categorical tables.",
          "trapToAvoid": "Confusing absolute count with percentage of city population.",
          "distractorExplanations": [
            {
              "optionLabel": "B",
              "explanation": "Bayford recorded 180,000 users, far below Ardent's 420,000."
            },
            {
              "optionLabel": "C",
              "explanation": "Corvale recorded 250,000 users, second to Ardent."
            },
            {
              "optionLabel": "D",
              "explanation": "Dalen recorded 95,000 users, the lowest absolute total."
            }
          ],
          "passageSupport": "\"A national transportation census analyzed daily commuting modes across four major metropolitan areas to compare public transit, cycling, and private automobile usage.\"",
          "eliminationShortcut": "Eliminate options containing extreme absolutes and choose the option with 100% direct textual proof."
        }
      ]
    },
    {
      "id": "ch6-b13-sec162",
      "sectionTitle": "CHAPTER TAKEAWAY & CORE PRINCIPLES",
      "content": [
        "Isolate: **VARIABLES → MEASUREMENTS → RELATIONSHIPS**. Choose the option that matches the required metric with absolute precision."
      ]
    }
  ],
  "practiceQuestions": [
    {
      "id": "ch6-p43",
      "passage": {
        "title": "Bicycle Commuter Counts Across Urban Regions",
        "text": "Urban transport researchers evaluated cycling volumes across four metropolitan areas with differing cycling infrastructure investments."
      },
      "dataFigure": {
        "title": "Metropolitan Commuter Demographics",
        "headers": [
          "City",
          "Public Transit Users",
          "Bicycle Commuters",
          "Private-Car Commuters",
          "Total Population"
        ],
        "rows": [
          [
            "Ardent",
            "420,000",
            "60,000",
            "520,000",
            "1,200,000"
          ],
          [
            "Bayford",
            "180,000",
            "45,000",
            "275,000",
            "600,000"
          ],
          [
            "Corvale",
            "250,000",
            "80,000",
            "320,000",
            "900,000"
          ],
          [
            "Dalen",
            "95,000",
            "25,000",
            "180,000",
            "400,000"
          ]
        ]
      },
      "questionNumber": 43,
      "label": "PRACTICE QUESTION 43 — BICYCLE COMMUTER COUNTS ACROSS URBAN REGIONS",
      "prompt": "Which city recorded the greatest absolute number of bicycle commuters?",
      "options": [
        {
          "label": "A",
          "text": "Ardent"
        },
        {
          "label": "B",
          "text": "Bayford"
        },
        {
          "label": "C",
          "text": "Corvale"
        },
        {
          "label": "D",
          "text": "Dalen"
        }
      ],
      "correctAnswer": "C",
      "correctAnswerIndex": 2,
      "whyCorrectTitle": "Why C is correct:",
      "whyCorrect": "Corvale recorded 80,000 bicycle commuters, which exceeds Ardent (60,000), Bayford (45,000), and Dalen (25,000).",
      "educationalObjective": "Locate specific categorical subsets across multi-column data displays without confusing adjacent metrics.",
      "trapToAvoid": "Assuming the city with the largest total population (Ardent) automatically has the highest count in every commuting subcategory.",
      "distractorExplanations": [
        {
          "optionLabel": "A",
          "explanation": "Ardent has 60,000 bicycle commuters, lower than Corvale's 80,000."
        },
        {
          "optionLabel": "B",
          "explanation": "Bayford recorded 45,000 bicycle commuters."
        },
        {
          "optionLabel": "D",
          "explanation": "Dalen recorded 25,000 bicycle commuters."
        }
      ],
      "passageSupport": "\"Urban transport researchers evaluated cycling volumes across four metropolitan areas with differing cycling infrastructure investments.\"",
      "eliminationShortcut": "Eliminate options containing extreme absolutes and choose the option with 100% direct textual proof."
    },
    {
      "id": "ch6-p44",
      "passage": {
        "title": "Absolute Counts versus Per-Capita Rates in Transportation",
        "text": "Statisticians analyzed why comparing absolute numbers of bicycle commuters between cities of different population sizes can be misleading."
      },
      "dataFigure": {
        "title": "Commuter Population Statistics",
        "headers": [
          "City",
          "Public Transit Users",
          "Bicycle Commuters",
          "Private-Car Commuters",
          "Total Population"
        ],
        "rows": [
          [
            "Ardent",
            "420,000",
            "60,000",
            "520,000",
            "1,200,000"
          ],
          [
            "Bayford",
            "180,000",
            "45,000",
            "275,000",
            "600,000"
          ],
          [
            "Corvale",
            "250,000",
            "80,000",
            "320,000",
            "900,000"
          ],
          [
            "Dalen",
            "95,000",
            "25,000",
            "180,000",
            "400,000"
          ]
        ]
      },
      "questionNumber": 44,
      "label": "PRACTICE QUESTION 44 — ABSOLUTE COUNTS VERSUS PER-CAPITA RATES IN TRANSPORTATION",
      "prompt": "Why is comparing raw numbers of bicycle commuters insufficient for determining which city has the highest rate of bicycle commuting per capita?",
      "options": [
        {
          "label": "A",
          "text": "The table does not include bicycle commuting data."
        },
        {
          "label": "B",
          "text": "The cities have substantially different total population sizes, requiring commuter counts to be divided by population to calculate per capita rates."
        },
        {
          "label": "C",
          "text": "Bicycle commuting cannot be expressed numerically."
        },
        {
          "label": "D",
          "text": "Population size has no mathematical connection to transportation rates."
        }
      ],
      "correctAnswer": "B",
      "correctAnswerIndex": 1,
      "whyCorrectTitle": "Why B is correct:",
      "whyCorrect": "Calculating per capita rates requires dividing commuter counts by total population (e.g., Bayford = 45k/600k = 7.5% vs Corvale = 80k/900k = 8.89% vs Ardent = 60k/1.2M = 5%). Because city populations vary from 400,000 to 1,200,000, raw counts alone do not reveal per capita intensity.",
      "educationalObjective": "Evaluate methodological distinctions between raw absolute counts and per capita normalized rates.",
      "trapToAvoid": "Believing that raw numbers and rates are interchangeable in scientific or economic comparisons.",
      "distractorExplanations": [
        {
          "optionLabel": "A",
          "explanation": "Bicycle commuting data is explicitly provided in column 3."
        },
        {
          "optionLabel": "C",
          "explanation": "Bicycle commuting is clearly quantified in the table."
        },
        {
          "optionLabel": "D",
          "explanation": "Total population is the mathematical denominator for any per capita rate."
        }
      ],
      "passageSupport": "\"Statisticians analyzed why comparing absolute numbers of bicycle commuters between cities of different population sizes can be misleading.\"",
      "eliminationShortcut": "Eliminate options containing extreme absolutes and choose the option with 100% direct textual proof."
    }
  ]
};

export const READING_CH6_BLOCK_14: ReadingModule = {
  "moduleNumber": 14,
  "id": "reading-ch6-block14",
  "chapterTitle": "CHAPTER 6 — DATA & INFORMATIONAL READING",
  "moduleTitle": "EVIDENCE HIERARCHY, PRECISION, AND THE STRONGEST SUPPORTED CLAIM",
  "endLabel": "MODULE COMPLETE",
  "sections": [
    {
      "id": "ch6-b14-sec0",
      "sectionTitle": "INTRODUCTION TO PRECISION AND EVIDENCE HIERARCHY",
      "content": [
        "Advanced items contain multiple options that sound plausible. Select the statement that matches the evidence with the highest precision."
      ]
    },
    {
      "id": "ch6-b14-sec163",
      "sectionNumber": "163",
      "sectionTitle": "THE EVIDENCE HIERARCHY",
      "content": [
        "Rank options by strength: avoid options that are too vague (too weak) or exceed the data (too strong). Select the most precise, fully supported statement."
      ]
    },
    {
      "id": "ch6-b14-sec169",
      "sectionNumber": "169",
      "sectionTitle": "WORKED CASE STUDY — MIXED-USE CONVERSIONS",
      "content": [
        "Analyze building occupancy and pedestrian activity changes following mixed-use conversions across five neighborhoods."
      ],
      "questions": [
        {
          "id": "ch6-w14",
          "passage": {
            "title": "Mixed-Use Conversions & Building Occupancy Dynamics",
            "text": "A regional housing agency studied the effects of converting vacant commercial office buildings into mixed-use spaces containing artisan retail, co-working facilities, and community meeting rooms across five urban neighborhoods."
          },
          "dataFigure": {
            "title": "Building Occupancy and Pedestrian Activity Following Mixed-Use Conversions",
            "headers": [
              "Neighborhood",
              "Building Occupancy Change",
              "Pedestrian Activity Change"
            ],
            "rows": [
              [
                "Fairmont",
                "+24%",
                "+18%"
              ],
              [
                "Glenwood",
                "+7%",
                "+5%"
              ],
              [
                "Harbor East",
                "+31%",
                "+26%"
              ],
              [
                "Kingsley",
                "+3%",
                "+2%"
              ],
              [
                "Linden",
                "−2%",
                "+1%"
              ]
            ]
          },
          "questionNumber": 14,
          "label": "WORKED EXAMPLE 14 — MIXED-USE CONVERSIONS & BUILDING OCCUPANCY DYNAMICS",
          "prompt": "Which statement regarding building occupancy is most directly supported by the data in the table?",
          "options": [
            {
              "label": "A",
              "text": "Building occupancy increased in every neighborhood studied."
            },
            {
              "label": "B",
              "text": "Building occupancy increased in most of the neighborhoods studied."
            },
            {
              "label": "C",
              "text": "Mixed-use conversions guaranteed higher occupancy in all cases."
            },
            {
              "label": "D",
              "text": "Local economic conditions exerted zero effect on occupancy rates."
            }
          ],
          "correctAnswer": "B",
          "correctAnswerIndex": 1,
          "whyCorrectTitle": "Why B is correct:",
          "whyCorrect": "Four of five neighborhoods recorded occupancy gains (+24%, +7%, +31%, +3%), while Linden recorded a slight drop (−2%). Thus, occupancy increased in \"most\" (4 of 5) neighborhoods, accurately matching Option B.",
          "educationalObjective": "Align quantitative data trends with calibrated scope quantifiers (\"most\" vs. \"all\").",
          "trapToAvoid": "Selecting absolute qualifiers like \"every\" or \"all cases\" when exceptions exist in the table.",
          "distractorExplanations": [
            {
              "optionLabel": "A",
              "explanation": "False because Linden recorded a −2% drop."
            },
            {
              "optionLabel": "C",
              "explanation": "Overstated causal claim (\"guaranteed in all cases\") refuted by Linden."
            },
            {
              "optionLabel": "D",
              "explanation": "Directly contradicted by the passage text acknowledging external economic effects."
            }
          ],
          "passageSupport": "\"A regional housing agency studied the effects of converting vacant commercial office buildings into mixed-use spaces containing artisan retail, co-working facilities, and community meeting rooms across five urban neighborhoods.\"",
          "eliminationShortcut": "Eliminate any choice that confuses correlation with causation or misinterprets the graph axes and table units."
        }
      ]
    },
    {
      "id": "ch6-b14-sec175",
      "sectionTitle": "CHAPTER TAKEAWAY & CORE PRINCIPLES",
      "content": [
        "Sequence: **PATTERN → EXCEPTION → SCOPE → CERTAINTY → CONCLUSION**. Select the strongest claim fully backed by the data."
      ]
    }
  ],
  "practiceQuestions": [
    {
      "id": "ch6-p45",
      "passage": {
        "title": "Pedestrian Foot Traffic Surges in Revitalized Corridors",
        "text": "Urban geographers measured pedestrian movement before and after commercial building adaptive reuse projects."
      },
      "dataFigure": {
            "title": "Building Occupancy and Pedestrian Activity Following Mixed-Use Conversions",
            "headers": [
              "Neighborhood",
              "Building Occupancy Change",
              "Pedestrian Activity Change"
            ],
            "rows": [
              ["Fairmont", "+24%", "+18%"],
              ["Glenwood", "+7%", "+5%"],
              ["Harbor East", "+31%", "+26%"],
              ["Kingsley", "+3%", "+2%"],
              ["Linden", "−2%", "+1%"]
            ]
          },
      "questionNumber": 45,
      "label": "PRACTICE QUESTION 45 — PEDESTRIAN FOOT TRAFFIC SURGES IN REVITALIZED CORRIDORS",
      "prompt": "Which statement regarding pedestrian activity is most precisely supported by the table data?",
      "options": [
        {
          "label": "A",
          "text": "Pedestrian activity increased in every neighborhood shown in the table."
        },
        {
          "label": "B",
          "text": "Pedestrian activity increased by an identical percentage in all five neighborhoods."
        },
        {
          "label": "C",
          "text": "Mixed-use conversion was the exclusive cause of all pedestrian activity gains."
        },
        {
          "label": "D",
          "text": "Every neighborhood experienced pedestrian activity growth exceeding 10%."
        }
      ],
      "correctAnswer": "A",
      "correctAnswerIndex": 0,
      "whyCorrectTitle": "Why A is correct:",
      "whyCorrect": "All five neighborhoods recorded positive percentage changes in pedestrian activity (+18%, +5%, +26%, +2%, +1%). Therefore, pedestrian activity increased in \"every\" neighborhood shown.",
      "educationalObjective": "Identify legitimate universal trends when all data points without exception exhibit the measured effect.",
      "trapToAvoid": "Confusing universal direction of change (+ for all) with uniform magnitude (+2% to +26%).",
      "distractorExplanations": [
        {
          "optionLabel": "B",
          "explanation": "Gains ranged widely from +1% to +26%, not identical."
        },
        {
          "optionLabel": "C",
          "explanation": "The passage cautions that transit access and economic factors also contributed."
        },
        {
          "optionLabel": "D",
          "explanation": "Glenwood (+5%), Kingsley (+2%), and Linden (+1%) all had gains under 10%."
        }
      ],
      "passageSupport": "\"Urban geographers measured pedestrian movement before and after commercial building adaptive reuse projects.\"",
      "eliminationShortcut": "Eliminate any choice that confuses correlation with causation or misinterprets the graph axes and table units."
    },
    {
      "id": "ch6-p46",
      "passage": {
        "title": "Causal Attribution in Urban Commercial Redevelopment",
        "text": "Economists evaluated whether building conversions were the exclusive cause of neighborhood commercial revitalization, noting that simultaneous transit enhancements and macroeconomic improvements also contributed."
      },
      "dataFigure": {
            "title": "Building Occupancy and Pedestrian Activity Following Mixed-Use Conversions",
            "headers": [
              "Neighborhood",
              "Building Occupancy Change",
              "Pedestrian Activity Change"
            ],
            "rows": [
              ["Fairmont", "+24%", "+18%"],
              ["Glenwood", "+7%", "+5%"],
              ["Harbor East", "+31%", "+26%"],
              ["Kingsley", "+3%", "+2%"],
              ["Linden", "−2%", "+1%"]
            ]
          },
      "questionNumber": 46,
      "label": "PRACTICE QUESTION 46 — CAUSAL ATTRIBUTION IN URBAN COMMERCIAL REDEVELOPMENT",
      "prompt": "Why is the claim \"Mixed-use building conversions directly caused all observed occupancy increases\" too strong based on the passage and data?",
      "options": [
        {
          "label": "A",
          "text": "Building occupancy was not measured in the study."
        },
        {
          "label": "B",
          "text": "The data table displays zero changes in occupancy."
        },
        {
          "label": "C",
          "text": "The passage explicitly acknowledges that external factors such as local economic conditions and transit access also influenced outcomes."
        },
        {
          "label": "D",
          "text": "All five neighborhoods recorded identical occupancy outcomes."
        }
      ],
      "correctAnswer": "C",
      "correctAnswerIndex": 2,
      "whyCorrectTitle": "Why C is correct:",
      "whyCorrect": "The passage explicitly notes that economic conditions and transit access influenced results, meaning observational gains cannot be attributed exclusively to building conversions.",
      "educationalObjective": "Distinguish between associative empirical data and exclusive causal assertions in informational texts.",
      "trapToAvoid": "Assuming that a strong statistical correlation is equivalent to proven exclusive causation.",
      "distractorExplanations": [
        {
          "optionLabel": "A",
          "explanation": "Occupancy was explicitly measured and listed in column 2."
        },
        {
          "optionLabel": "B",
          "explanation": "Changes are clearly shown ranging from −2% to +31%."
        },
        {
          "optionLabel": "D",
          "explanation": "Occupancy changes differed markedly across all five neighborhoods."
        }
      ],
      "passageSupport": "\"Economists evaluated whether building conversions were the exclusive cause of neighborhood commercial revitalization, noting that simultaneous transit enhancements and macroeconomic improvements also contributed.\"",
      "eliminationShortcut": "Eliminate any choice that confuses correlation with causation or misinterprets the graph axes and table units."
    }
  ]
};

export const READING_CH6_BLOCK_15: ReadingModule = {
  "moduleNumber": 15,
  "id": "reading-ch6-block15",
  "chapterTitle": "CHAPTER 6 — DATA & INFORMATIONAL READING",
  "moduleTitle": "ADVANCED DATA SYNTHESIS AND HYPOTHESIS TESTING",
  "endLabel": "MODULE COMPLETE",
  "sections": [
    {
      "id": "ch6-b15-sec0",
      "sectionTitle": "INTRODUCTION TO HYPOTHESIS TESTING WITH DATA",
      "content": [
        "Hypothesis testing requires evaluating how scientific quantitative findings support, complicate, or refute a proposed claim."
      ]
    },
    {
      "id": "ch6-b15-sec176",
      "sectionNumber": "176",
      "sectionTitle": "THE HYPOTHESIS ALIGNMENT TECHNIQUE",
      "content": [
        "Steps: State the hypothesis, isolate relevant data columns, compare treatment versus control baselines, and check for exceptions."
      ]
    },
    {
      "id": "ch6-b15-sec179",
      "sectionNumber": "179",
      "sectionTitle": "WORKED CASE STUDY — MYCORRHIZAL MUTUALISM",
      "content": [
        "Evaluate how fungal inoculation treatments affect biomass allocation and root-to-shoot ratios in grass species under drought conditions."
      ],
      "questions": [
        {
          "id": "ch6-w15",
          "passage": {
            "title": "Mycorrhizal Inoculation and Host-Specific Drought Tolerance",
            "text": "A team of plant physiologists investigated whether inoculation with arbuscular mycorrhizal (AM) fungi mitigates drought stress in two temperate grass species (*Agrostis capillaris* and *Festuca rubra*). Plants were subjected to water-deficit conditions for ten weeks under three treatments: a non-inoculated control, inoculation with *Glomus intraradices* (Fungi A), and inoculation with *Funneliformis mosseae* (Fungi B). Higher shoot biomass and a lower root-to-shoot ratio indicate greater drought resilience and resource efficiency."
          },
          "dataFigure": {
            "title": "Biomass Allocation and Root-to-Shoot Ratios Under Drought Conditions",
            "headers": [
              "Grass Species",
              "Treatment",
              "Mean Shoot Biomass (g)",
              "Mean Root-to-Shoot Ratio"
            ],
            "rows": [
              [
                "Agrostis capillaris",
                "Control (No Fungi)",
                "1.45",
                "1.82"
              ],
              [
                "Agrostis capillaris",
                "Fungi A (G. intraradices)",
                "2.15",
                "1.22"
              ],
              [
                "Agrostis capillaris",
                "Fungi B (F. mosseae)",
                "1.88",
                "1.35"
              ],
              [
                "Festuca rubra",
                "Control (No Fungi)",
                "1.12",
                "2.10"
              ],
              [
                "Festuca rubra",
                "Fungi A (G. intraradices)",
                "1.25",
                "1.95"
              ],
              [
                "Festuca rubra",
                "Fungi B (F. mosseae)",
                "1.95",
                "1.40"
              ]
            ]
          },
          "questionNumber": 15,
          "label": "WORKED EXAMPLE 15 — MYCORRHIZAL INOCULATION AND HOST-SPECIFIC DROUGHT TOLERANCE",
          "prompt": "Which claim regarding fungal inoculation is most directly supported by the data in the table?",
          "options": [
            {
              "label": "A",
              "text": "Fungi A is universally more effective than Fungi B at promoting drought tolerance across all studied grass species."
            },
            {
              "label": "B",
              "text": "Both fungal treatments improved shoot biomass and lowered root-to-shoot ratios relative to controls, but the most effective fungal strain differed between the two grass species."
            },
            {
              "label": "C",
              "text": "Festuca rubra produced greater absolute shoot biomass than Agrostis capillaris across all three experimental conditions."
            },
            {
              "label": "D",
              "text": "Non-inoculated control plants exhibited lower root-to-shoot ratios than plants inoculated with either fungal species."
            }
          ],
          "correctAnswer": "B",
          "correctAnswerIndex": 1,
          "whyCorrectTitle": "Why Option B is Correct:",
          "whyCorrect": "For *Agrostis capillaris*, Fungi A produced the highest shoot biomass (2.15 g vs. 1.88 g for Fungi B and 1.45 g for control) and lowest root-to-shoot ratio (1.22). Conversely, for *Festuca rubra*, Fungi B produced the highest shoot biomass (1.95 g vs. 1.25 g for Fungi A and 1.12 g for control) and lowest ratio (1.40). Both fungal treatments outperformed controls for both species, but the optimal strain was host-species specific.",
          "educationalObjective": "Synthesize multi-treatment experimental data to evaluate host-specific biological interactions without making overgeneralized claims.",
          "trapToAvoid": "Choosing Option A, which ignores that Fungi B outperformed Fungi A in *Festuca rubra*.",
          "distractorExplanations": [
            {
              "optionLabel": "A",
              "explanation": "Overgeneralization trap: Fungi A produced lower shoot biomass (1.25 g) and a higher root-to-shoot ratio (1.95) than Fungi B (1.95 g, 1.40) in *Festuca rubra*."
            },
            {
              "optionLabel": "C",
              "explanation": "Factually contradicted: *Agrostis capillaris* produced higher shoot biomass than *Festuca rubra* in all treatments (1.45 vs 1.12, 2.15 vs 1.25, 1.88 vs 1.95)."
            },
            {
              "optionLabel": "D",
              "explanation": "Direct contradiction: Controls had the highest root-to-shoot ratios (1.82 and 2.10) for both species."
            }
          ],
          "eliminationShortcut": "Verify species-by-species comparisons: Fungi A wins for *Agrostis*, Fungi B wins for *Festuca*.",
          "passageSupport": "\"For Agrostis capillaris, Fungi A provided the strongest benefit... For Festuca rubra, Fungi B provided the strongest benefit... fungal efficacy is host-species specific.\""
        }
      ]
    },
    {
      "id": "ch6-b15-sec180",
      "sectionTitle": "CHAPTER TAKEAWAY & CORE PRINCIPLES",
      "content": [
        "In hypothesis testing, never assume simple linear relationships. Always cross-examine treatments against control baselines."
      ]
    }
  ],
  "practiceQuestions": [
    {
      "id": "ch6-p47",
      "passage": {
        "title": "Dendrochronological Isotope Ratios and Grand Solar Minima",
        "text": "Paleoclimatologists analyzed cellulose oxygen isotope ratios (δ¹⁸O) and annual ring-width indices from ancient high-elevation bristlecone pines (*Pinus longaeva*) to evaluate temperature and moisture anomalies during historical grand solar minima. Lower δ¹⁸O values reflect cooler mean growing-season temperatures, while ring-width indices below 1.00 signify suppressed annual growth."
      },
      "dataFigure": {
        "title": "Bristlecone Pine Tree-Ring Metrics Across Historical Solar Epochs",
        "headers": [
          "Historical Epoch",
          "Calendar Range",
          "Mean Sunspot Count (per year)",
          "Mean δ¹⁸O Deviation (‰)",
          "Mean Ring-Width Index"
        ],
        "rows": [
          [
            "Medieval Solar Maximum",
            "1100–1250 CE",
            "85.4",
            "+0.72",
            "1.18"
          ],
          [
            "Wolf Minimum",
            "1280–1350 CE",
            "12.1",
            "−0.45",
            "0.91"
          ],
          [
            "Spörer Minimum",
            "1460–1550 CE",
            "8.6",
            "−0.68",
            "0.84"
          ],
          [
            "Maunder Minimum",
            "1645–1715 CE",
            "4.2",
            "−0.89",
            "0.78"
          ],
          [
            "Dalton Minimum",
            "1790–1830 CE",
            "22.5",
            "−0.32",
            "0.94"
          ]
        ]
      },
      "questionNumber": 47,
      "label": "PRACTICE QUESTION 47 — DENDROCHRONOLOGICAL ISOTOPE RATIOS AND GRAND SOLAR MINIMA",
      "prompt": "Which conclusion is most strongly supported by the paleoclimatic data in the table?",
      "options": [
        {
          "label": "A",
          "text": "Epochs with lower mean annual sunspot counts systematically corresponded to more negative δ¹⁸O deviations and lower tree ring-width indices."
        },
        {
          "label": "B",
          "text": "The Dalton Minimum exhibited the lowest annual ring-width index and the coldest growing-season temperatures among all historical epochs examined."
        },
        {
          "label": "C",
          "text": "The Medieval Solar Maximum was characterized by severe drought and suppressed tree ring growth relative to the Maunder Minimum."
        },
        {
          "label": "D",
          "text": "Sunspot counts remained constant throughout the four grand solar minima."
        }
      ],
      "correctAnswer": "A",
      "correctAnswerIndex": 0,
      "whyCorrectTitle": "Why Option A is Correct:",
      "whyCorrect": "Comparing solar epochs reveals a strict monotonic relationship: the Maunder Minimum had the lowest sunspot count (4.2), the most negative δ¹⁸O deviation (−0.89‰), and the lowest ring-width index (0.78). As sunspot counts increase (Spörer: 8.6, Wolf: 12.1, Dalton: 22.5, Medieval: 85.4), δ¹⁸O deviations become progressively more positive (−0.68, −0.45, −0.32, +0.72) and ring-width indices rise (0.84, 0.91, 0.94, 1.18).",
      "educationalObjective": "Identify continuous multivariate correlations between solar activity proxies and paleoclimatological biological indicators.",
      "trapToAvoid": "Choosing Option B, which confuses the Dalton Minimum (sunspot count 22.5, index 0.94) with the Maunder Minimum (sunspot count 4.2, index 0.78).",
      "distractorExplanations": [
        {
          "optionLabel": "B",
          "explanation": "Inversion trap: The Maunder Minimum had the lowest index (0.78) and most negative δ¹⁸O (−0.89‰), whereas the Dalton Minimum had the mildest suppression among the minima (0.94, −0.32‰)."
        },
        {
          "optionLabel": "C",
          "explanation": "Direct contradiction: The Medieval Solar Maximum had positive δ¹⁸O (+0.72‰) and the highest ring-width index (1.18), indicating warm and robust growth."
        },
        {
          "optionLabel": "D",
          "explanation": "Factually incorrect: Sunspot counts varied widely across the minima, from 4.2 in the Maunder to 22.5 in the Dalton."
        }
      ],
      "eliminationShortcut": "Track the ranking across columns: Maunder < Spörer < Wolf < Dalton < Medieval across all three metrics.",
      "passageSupport": "\"Lower δ¹⁸O values reflect cooler mean growing-season temperatures, while ring-width indices below 1.00 signify suppressed annual growth.\""
    },
    {
      "id": "ch6-p48",
      "passage": {
        "title": "Carbon Pricing Elasticity in Heavy Industrial Sectors",
        "text": "Environmental economists evaluated industrial decarbonization across five manufacturing jurisdictions that adopted different carbon pricing systems over a six-year period. Researchers hypothesized that industrial emissions reductions do not scale linearly with carbon price increases, but instead require an effective price threshold of at least 50 per metric ton of CO₂ equivalent (tCO₂e) to trigger substantial capital retrofits without depressing regional GDP growth."
      },
      "dataFigure": {
        "title": "Industrial Emissions Abatement and Economic Performance Across Carbon Pricing Regimes",
        "headers": [
          "Jurisdiction",
          "Regulatory Mechanism",
          "Effective Carbon Price (/tCO₂e)",
          "6-Yr Industrial Emissions Change (%)",
          "Annual GDP Growth Rate (%)"
        ],
        "rows": [
          [
            "Province Alpha",
            "Direct Carbon Tax",
            "22",
            "−3.4%",
            "+2.4%"
          ],
          [
            "State Beta",
            "Cap-and-Trade (Generous Free Allowances)",
            "18",
            "−2.1%",
            "+2.6%"
          ],
          [
            "Region Gamma",
            "Cap-and-Trade (Auctioned Allowances)",
            "55",
            "−18.6%",
            "+2.2%"
          ],
          [
            "Nation Delta",
            "Direct Carbon Tax with Output Rebates",
            "65",
            "−22.4%",
            "+2.5%"
          ],
          [
            "Territory Epsilon",
            "Direct Carbon Tax (No Rebates)",
            "90",
            "−28.9%",
            "+0.8%"
          ]
        ]
      },
      "questionNumber": 48,
      "label": "PRACTICE QUESTION 48 — CARBON PRICING ELASTICITY IN HEAVY INDUSTRIAL SECTORS",
      "prompt": "Which statement is most directly supported by the researchers' hypothesis and the data in the table?",
      "options": [
        {
          "label": "A",
          "text": "Jurisdictions with carbon prices above 50/tCO₂e achieved industrial emissions reductions exceeding 18%, but carbon prices at 90/tCO₂e were accompanied by substantially lower annual GDP growth."
        },
        {
          "label": "B",
          "text": "Direct carbon taxes were completely ineffective at reducing emissions in all studied jurisdictions."
        },
        {
          "label": "C",
          "text": "Province Alpha achieved greater percentage emissions reductions than Nation Delta despite its lower carbon price."
        },
        {
          "label": "D",
          "text": "Cap-and-trade systems with free allowances generated higher emissions reductions than systems with auctioned allowances."
        }
      ],
      "correctAnswer": "A",
      "correctAnswerIndex": 0,
      "whyCorrectTitle": "Why Option A is Correct:",
      "whyCorrect": "Jurisdictions pricing carbon above 50 (Gamma: $55, Delta: $65, Epsilon: 90) saw emissions reductions jump sharply to −18.6%, −22.4%, and −28.9% (compared to just −3.4% and −2.1% at 22 and 18). Furthermore, while Gamma and Delta maintained strong GDP growth (+2.2% and +2.5%), Epsilon at 90 saw GDP growth drop to +0.8%, validating the threshold and tradeoff dynamics.",
      "educationalObjective": "Evaluate step-function threshold effects and macroeconomic tradeoff patterns in policy data.",
      "trapToAvoid": "Choosing Option D, which reverses the comparison between State Beta (free allowances: −2.1%) and Region Gamma (auctioned: −18.6%).",
      "distractorExplanations": [
        {
          "optionLabel": "B",
          "explanation": "Contradicted by data: Direct carbon taxes reduced emissions in Alpha (−3.4%), Delta (−22.4%), and Epsilon (−28.9%)."
        },
        {
          "optionLabel": "C",
          "explanation": "Factually incorrect: Province Alpha achieved −3.4% reduction, whereas Nation Delta achieved −22.4%."
        },
        {
          "optionLabel": "D",
          "explanation": "Inversion trap: State Beta (free allowances) achieved only −2.1% reduction, compared to −18.6% for Region Gamma (auctioned allowances)."
        }
      ],
      "eliminationShortcut": "Identify the step-function change at $50/ton: Emissions drops leap from ~3% to 18–28%, while GDP growth drops sharply only at $90.",
      "passageSupport": "\"Researchers hypothesized that industrial emissions reductions... require an effective price threshold of at least 50 per metric ton... without depressing regional GDP growth.\""
    },
    {
      "id": "ch6-p49",
      "passage": {
        "title": "Ocean Acidification and Benthic Calcification Thresholds",
        "text": "Marine biologists conducted controlled mesocosm experiments to determine the sensitivity of four benthic calcifying marine invertebrates to declining ocean carbonate saturation states (Ω_arag). Aragonite saturation levels below Ω_arag = 1.0 represent chemically undersaturated waters that favor mineral dissolution. Researchers measured net shell calcification rates and metabolic oxygen consumption over 60 days."
      },
      "dataFigure": {
        "title": "Calcification and Metabolic Rates Across Aragonite Saturation Gradients",
        "headers": [
          "Taxon & Species",
          "Taxonomic Group",
          "Aragonite Saturation (Ω_arag)",
          "Net Calcification Rate (mg/day)",
          "Metabolic Rate (µmol O₂/hr)"
        ],
        "rows": [
          [
            "Mytilus edulis (Blue Mussel)",
            "Bivalvia",
            "2.8 (Ambient)",
            "+14.2",
            "45.0"
          ],
          [
            "Mytilus edulis (Blue Mussel)",
            "Bivalvia",
            "0.8 (Acidified)",
            "−3.1",
            "68.5"
          ],
          [
            "Crassostrea virginica (Oyster)",
            "Bivalvia",
            "2.8 (Ambient)",
            "+18.5",
            "52.0"
          ],
          [
            "Crassostrea virginica (Oyster)",
            "Bivalvia",
            "0.8 (Acidified)",
            "−5.4",
            "81.2"
          ],
          [
            "Strongylocentrotus purpuratus (Sea Urchin)",
            "Echinodermata",
            "2.8 (Ambient)",
            "+8.6",
            "32.0"
          ],
          [
            "Strongylocentrotus purpuratus (Sea Urchin)",
            "Echinodermata",
            "0.8 (Acidified)",
            "+1.2",
            "39.5"
          ]
        ]
      },
      "questionNumber": 49,
      "label": "PRACTICE QUESTION 49 — OCEAN ACIDIFICATION AND BENTHIC CALCIFICATION THRESHOLDS",
      "prompt": "Based on the table, which statement most accurately describes the physiological response of the studied species under acidified conditions (Ω_arag = 0.8) relative to ambient conditions?",
      "options": [
        {
          "label": "A",
          "text": "All three species experienced negative net calcification rates (net shell dissolution) and reduced metabolic rates under acidified conditions."
        },
        {
          "label": "B",
          "text": "Both bivalve species shifted from net positive calcification to net shell dissolution accompanied by increased metabolic rates, whereas the echinoderm maintained net positive calcification with a smaller metabolic increase."
        },
        {
          "label": "C",
          "text": "Crassostrea virginica exhibited the lowest metabolic rate and highest net calcification rate under acidified conditions."
        },
        {
          "label": "D",
          "text": "Aragonite undersaturation had no measurable effect on the calcification or metabolic rates of any studied invertebrate."
        }
      ],
      "correctAnswer": "B",
      "correctAnswerIndex": 1,
      "whyCorrectTitle": "Why Option B is Correct:",
      "whyCorrect": "Under acidified conditions (Ω_arag = 0.8), both bivalves (*M. edulis* and *C. virginica*) showed negative net calcification rates (−3.1 and −5.4 mg/day) and substantial spikes in metabolic rate (+23.5 and +29.2 µmol O₂/hr). In contrast, the echinoderm (*S. purpuratus*) maintained positive calcification (+1.2 mg/day) with only a modest metabolic rise (32.0 to 39.5).",
      "educationalObjective": "Distinguish between divergent physiological responses across taxonomic groups exposed to identical environmental stress gradients.",
      "trapToAvoid": "Choosing Option A, which overlooks that *Strongylocentrotus purpuratus* maintained a positive calcification rate (+1.2) and that metabolic rates increased rather than decreased.",
      "distractorExplanations": [
        {
          "optionLabel": "A",
          "explanation": "Double error: *S. purpuratus* maintained positive calcification (+1.2 mg/day), and metabolic rates increased for all species, not reduced."
        },
        {
          "optionLabel": "C",
          "explanation": "Factually inverted: *C. virginica* had the highest metabolic rate (81.2) and the most negative calcification rate (−5.4 mg/day) under acidification."
        },
        {
          "optionLabel": "D",
          "explanation": "Directly contradicted by substantial shifts across all rows of the table."
        }
      ],
      "eliminationShortcut": "Check signs and trends: Bivalve calcification became negative; echinoderm remained positive (+1.2); all metabolic rates increased.",
      "passageSupport": "\"Aragonite saturation levels below Ω_arag = 1.0 represent chemically undersaturated waters that favor mineral dissolution.\""
    },
    {
      "id": "ch6-p50",
      "passage": {
        "title": "Exercise Intensity, Sleep Deprivation, and BDNF Plasticity",
        "text": "Cognitive neuroscientists evaluated whether acute aerobic exercise mitigates the cognitive deficits induced by 24-hour total sleep deprivation. Young adult participants were assigned to five sleep and exercise conditions. Researchers measured post-intervention serum brain-derived neurotrophic factor (BDNF) concentrations and accuracy on an executive spatial working memory task."
      },
      "dataFigure": {
        "title": "Serum BDNF Concentrations and Working Memory Accuracy Following Sleep Interventions",
        "headers": [
          "Experimental Group",
          "Sleep Condition",
          "Exercise Protocol (% of VO₂ max)",
          "Mean Serum BDNF (ng/mL)",
          "Spatial Memory Accuracy (%)"
        ],
        "rows": [
          [
            "Group 1 (Baseline)",
            "Normal Sleep (8 hrs)",
            "Rest (0%)",
            "24.5",
            "88.4%"
          ],
          [
            "Group 2",
            "Sleep Deprived (24 hrs)",
            "Rest (0%)",
            "15.2",
            "64.1%"
          ],
          [
            "Group 3",
            "Sleep Deprived (24 hrs)",
            "Moderate Aerobic (50%)",
            "21.8",
            "76.5%"
          ],
          [
            "Group 4",
            "Sleep Deprived (24 hrs)",
            "High-Intensity Aerobic (75%)",
            "28.4",
            "86.2%"
          ],
          [
            "Group 5",
            "Sleep Deprived (24 hrs)",
            "Exhaustive Supramaximal (95%)",
            "18.1",
            "69.8%"
          ]
        ]
      },
      "questionNumber": 50,
      "label": "PRACTICE QUESTION 50 — EXERCISE INTENSITY, SLEEP DEPRIVATION, AND BDNF PLASTICITY",
      "prompt": "Which conclusion regarding the relationship between exercise intensity, serum BDNF, and spatial working memory performance under sleep deprivation is best supported by the table?",
      "options": [
        {
          "label": "A",
          "text": "Higher exercise intensity produces continuous, linear improvements in BDNF concentration and cognitive accuracy regardless of intensity level."
        },
        {
          "label": "B",
          "text": "In sleep-deprived individuals, high-intensity exercise (75% VO₂ max) elevated BDNF and restored memory accuracy to near-baseline levels, whereas exhaustive exercise (95% VO₂ max) yielded attenuated benefits."
        },
        {
          "label": "C",
          "text": "Sleep deprivation without exercise (Group 2) resulted in higher BDNF concentrations than normal sleep (Group 1)."
        },
        {
          "label": "D",
          "text": "Exercise had no measurable effect on memory accuracy among sleep-deprived participants."
        }
      ],
      "correctAnswer": "B",
      "correctAnswerIndex": 1,
      "whyCorrectTitle": "Why Option B is Correct:",
      "whyCorrect": "Group 4 (75% VO₂ max) achieved the highest BDNF (28.4 ng/mL) and spatial memory accuracy (86.2%), nearly matching the normal sleep baseline (88.4%). However, increasing intensity further to 95% (Group 5) caused BDNF to drop to 18.1 ng/mL and memory accuracy to fall to 69.8%, proving an inverted-U non-linear response curve rather than a linear gain.",
      "educationalObjective": "Identify non-linear physiological response curves and optimal treatment thresholds in biomedical datasets.",
      "trapToAvoid": "Assuming that more intense exercise always yields better outcomes (Option A), ignoring the decline from 75% to 95% intensity.",
      "distractorExplanations": [
        {
          "optionLabel": "A",
          "explanation": "Linear fallacy: Both BDNF (28.4 → 18.1) and memory accuracy (86.2% → 69.8%) decreased when exercise intensity escalated from 75% to 95%."
        },
        {
          "optionLabel": "C",
          "explanation": "Direct contradiction: Group 2 had the lowest BDNF (15.2 ng/mL vs. 24.5 ng/mL for Group 1)."
        },
        {
          "optionLabel": "D",
          "explanation": "Direct contradiction: Exercise increased memory accuracy from 64.1% (Group 2) to 76.5% (Group 3) and 86.2% (Group 4)."
        }
      ],
      "eliminationShortcut": "Look for the inverted-U peak: 0% (64.1%) → 50% (76.5%) → 75% (86.2% PEAK) → 95% (69.8% DROP).",
      "passageSupport": "\"Group 4 achieved 28.4 ng/mL BDNF and 86.2% accuracy, while Group 5 dropped to 18.1 ng/mL and 69.8%.\""
    }
  ]
};

export const READING_CH6_BLOCK_16: ReadingModule = {
  "moduleNumber": 16,
  "id": "reading-ch6-block16",
  "chapterTitle": "CHAPTER 6 — DATA & INFORMATIONAL READING",
  "moduleTitle": "CHAPTER MASTERY: DIVERSE DATA REASONING & GRAND BLUEPRINT",
  "endLabel": "Chapter 6 Complete.",
  "sections": [
    {
      "id": "ch6-b16-sec0",
      "sectionTitle": "CHAPTER 6 SUMMARY AND SYSTEM MASTERY",
      "content": [
        "Mastery requires integrating the entire informational data-reading framework to navigate complex quantitative and verbal interfaces."
      ]
    },
    {
      "id": "ch6-b16-sec187",
      "sectionNumber": "187",
      "sectionTitle": "THE CORE DATA REASONING PROTOCOL",
      "content": [
        "Mental checks: Identify the target variable, locate the key comparison, and verify the option's quantifier strength."
      ]
    },
    {
      "id": "ch6-b16-sec188",
      "sectionNumber": "188",
      "sectionTitle": "CROSS-DISCIPLINARY DATA EXEMPLARS",
      "content": [
        "### 1. Astronomy — Exoplanetary Bulk Density\n- **Hypothesis:** Exoplanets orbiting closer to their parent star exhibit higher bulk densities due to stellar wind atmospheric stripping.\n- **Data Trend:** Kepler-186b (0.08 AU, 4.82 g/cm³) → Kepler-186e (0.42 AU, 1.21 g/cm³). Distance inversely correlates with density.\n\n### 2. Historical Linguistics — Danelaw Loanwords\n- **Hypothesis:** Scandinavian loanwords appear at higher frequencies in Danelaw regions (North/East).\n- **Data Trend:** Yorkshire (142 per 10k words) & Lincolnshire (128) vs Somerset (14) & Devon (11).\n\n### 3. Labor Economics — Payroll Tax Subsidies & Minimum Wages\n- **Hypothesis:** Payroll tax subsidies boost youth retail employment, but the effect diminishes under high minimum wages.\n- **Data Trend:** Region 1 (11.00/hr, +6.2% employment) vs Region 4 ($16.50/hr, +0.8% employment).\n\n### 4. Oceanography — Diatom Silica Thresholds\n- **Hypothesis:** Diatoms dominate (>50% population) only when dissolved silica exceeds 2.5 µmol/L.\n- **Data Trend:** Sites A & B (4.2 & 2.8 µmol/L → 78% & 62% diatoms) vs Sites C & D (1.9 & 0.8 µmol/L → 24% & 12% diatoms)."
      ]
    },
    {
      "id": "ch6-b16-sec189",
      "sectionNumber": "189",
      "sectionTitle": "COMPLETE 70-QUESTION DIAGNOSTIC SUMMARY TABLE",
      "content": [
        "Here is the complete mapping of all 70 core questions across Chapter 6:\n\n| Module | Core Informational Skill Tested | Question Range | Count |\n|---|---|---|---|\n| Module 1 | Chart & Table Layout Foundations | Q1–Q4 | 4 |\n| Module 2 | Single-Variable Data Retrieval | Q5–Q9 | 5 |\n| Module 3 | Multi-Row & Column Data Tracking | Q10–Q13 | 4 |\n| Module 4 | Absolute Values vs. Relative Percentages | Q14–Q17 | 4 |\n| Module 5 | Per Capita & Normalized Rates | Q18–Q21 | 4 |\n| Module 6 | Trends, Inflexions, & Time-Series Data | Q22–Q26 | 5 |\n| Module 7 | Baseline Comparisons & Treatment vs Control | Q27–Q30 | 4 |\n| Module 8 | Correlation vs. Causation Disclaimers | Q31–Q35 | 5 |\n| Module 9 | Passage-Graph Claim Corroboration | Q36–Q40 | 5 |\n| Module 10 | Passage-Graph Contradictions & Outliers | Q41–Q44 | 4 |\n| Module 11 | Evaluating Scientific Hypotheses with Data | Q45–Q49 | 5 |\n| Module 12 | Subgroup Disparities & Distribution Anomalies | Q50–Q54 | 5 |\n| Module 13 | Multi-Variable Commuting & Urban Transit Data | Q55–Q57 | 3 |\n| Module 14 | Evidence Scope Precision & Housing Conversion Study | Q58–Q60 | 3 |\n| Module 15 | Hypothesis Testing & Multivariable Biological Data | Q61–Q65 | 5 |\n| Module 16 | Cross-Disciplinary Master Grand Challenge | Q66–Q70 | 5 |\n| **TOTAL** | **Comprehensive Data & Informational Bank** | **Q1 to Q70** | **70 Questions** |"
      ]
    },
    {
      "id": "ch6-b16-sec190",
      "sectionNumber": "190",
      "sectionTitle": "WORKED CASE STUDY — EXOPLANETARY PHOTOEVAPORATION",
      "content": [
        "Analyze atmospheric retention and physical characteristics of rocky exoplanets orbiting an active M-dwarf star."
      ],
      "questions": [
        {
          "id": "ch6-w16",
          "passage": {
            "title": "Exoplanetary Photoevaporation and Volatile Envelope Retention",
            "text": "Astrophysicists analyzed five rocky exoplanets orbiting an active M-dwarf star to test models of atmospheric stripping by stellar coronal mass ejections and extreme ultraviolet (XUV) irradiation. Researchers hypothesized that exoplanets with semi-major orbital axes less than 0.15 AU undergo runaway photoevaporative hydrodynamic escape, resulting in negligible atmospheric scale heights and nearly complete loss of primordial water vapor."
          },
          "dataFigure": {
            "title": "Physical and Atmospheric Parameters of M-Dwarf Exoplanetary System",
            "headers": [
              "Exoplanet",
              "Orbital Distance (AU)",
              "Planetary Radius (Earth Radii, R⊕)",
              "Bulk Density (g/cm³)",
              "Atmospheric Scale Height (km)",
              "Retained Water Fraction (%)"
            ],
            "rows": [
              [
                "Trappist-Like b",
                "0.011",
                "1.12",
                "5.62",
                "< 5",
                "0.02%"
              ],
              [
                "Trappist-Like c",
                "0.015",
                "1.09",
                "5.48",
                "< 5",
                "0.05%"
              ],
              [
                "Trappist-Like d",
                "0.022",
                "0.78",
                "4.85",
                "12",
                "0.80%"
              ],
              [
                "Trappist-Like e",
                "0.029",
                "0.91",
                "5.05",
                "85",
                "14.50%"
              ],
              [
                "Trappist-Like f",
                "0.038",
                "1.04",
                "4.15",
                "140",
                "42.10%"
              ]
            ]
          },
          "questionNumber": 16,
          "label": "WORKED EXAMPLE 16 — EXOPLANETARY PHOTOEVAPORATION AND VOLATILE ENVELOPE RETENTION",
          "prompt": "Which statement regarding atmospheric retention is most directly supported by the data in the table?",
          "options": [
            {
              "label": "A",
              "text": "Planets located closest to the host star (b and c) maintained the highest atmospheric scale heights and water fractions."
            },
            {
              "label": "B",
              "text": "Atmospheric scale height and retained water fraction increased sharply with increasing orbital distance from the host star."
            },
            {
              "label": "C",
              "text": "Planetary radius was the sole determinant of retained water fraction across all five exoplanets."
            },
            {
              "label": "D",
              "text": "Bulk density increased monotonically as orbital distance increased from 0.011 AU to 0.038 AU."
            }
          ],
          "correctAnswer": "B",
          "correctAnswerIndex": 1,
          "whyCorrectTitle": "Why Option B is Correct:",
          "whyCorrect": "As orbital distance increases from 0.011 AU (b) to 0.038 AU (f), atmospheric scale height rises dramatically from <5 km to 140 km, and the retained water fraction surges from 0.02% to 42.10%, directly corroborating the photoevaporative distance gradient hypothesis.",
          "educationalObjective": "Correlate orbital distance parameters with atmospheric retention metrics in astrophysical datasets.",
          "trapToAvoid": "Choosing Option D, which overlooks that bulk density generally decreases from 5.62 g/cm³ down to 4.15 g/cm³ as distance increases.",
          "distractorExplanations": [
            {
              "optionLabel": "A",
              "explanation": "Direct contradiction: Planets b and c had the lowest scale heights (<5 km) and lowest water fractions (0.02%, 0.05%)."
            },
            {
              "optionLabel": "C",
              "explanation": "Refuted by data: Planet f (radius 1.04) retained 42.10% water while Planet b (radius 1.12) retained only 0.02%, showing distance dominates over radius."
            },
            {
              "optionLabel": "D",
              "explanation": "Inversion: Bulk density decreased from 5.62 g/cm³ (b) to 4.15 g/cm³ (f)."
            }
          ],
          "eliminationShortcut": "Check the direct correlation: As distance increases (0.011 → 0.038 AU), scale height (5 → 140 km) and water fraction (0.02% → 42.1%) rise consistently.",
          "passageSupport": "\"As orbital distance increases... atmospheric scale height rises dramatically... and the retained water fraction surges...\""
        }
      ]
    },
    {
      "id": "ch6-b16-sec193",
      "sectionTitle": "CHAPTER 6 FINAL TAKEAWAY",
      "content": [
        "The correct answer is the strongest claim that the complete evidence can support without exceeding it. **Chapter 6 Complete.**"
      ]
    }
  ],
  "practiceQuestions": [
    {
      "id": "ch6-p51",
      "passage": {
        "title": "Quantitative Lexical Analysis of Old Norse Cognates in British Charters",
        "text": "Historical linguists compiled a corpus of ninth- to eleventh-century Anglo-Saxon legal charters to map the linguistic boundary of the Danelaw. Researchers hypothesized that Scandinavian loanwords (such as terms relating to land tenure, legal administration, and topography) occur at significantly higher frequencies in northeastern shires subject to Viking settlement, whereas southwestern shires retain predominantly Old English and Celtic substrate vocabulary."
      },
      "dataFigure": {
        "title": "Lexical Frequencies in Anglo-Saxon Legal Charters (870–1050 CE)",
        "headers": [
          "Historical Shire / Region",
          "Geographic Zone",
          "Total Words Analyzed",
          "Old Norse Loanwords (per 10k words)",
          "Celtic Substrate Terms (per 10k words)",
          "Latin Formulaic Phrases (%)"
        ],
        "rows": [
          [
            "Yorkshire (Deira)",
            "Northeast (Danelaw)",
            "45,000",
            "148.5",
            "4.2",
            "12.4%"
          ],
          [
            "Lincolnshire",
            "East Midlands (Danelaw)",
            "38,000",
            "132.0",
            "3.8",
            "11.8%"
          ],
          [
            "Norfolk (East Anglia)",
            "East (Danelaw)",
            "41,000",
            "115.4",
            "5.1",
            "14.2%"
          ],
          [
            "Wiltshire (Wessex)",
            "Southwest (Non-Danelaw)",
            "42,000",
            "14.2",
            "18.6",
            "13.5%"
          ],
          [
            "Devon (Wessex)",
            "Southwest (Non-Danelaw)",
            "36,000",
            "9.8",
            "26.4",
            "12.9%"
          ]
        ]
      },
      "questionNumber": 51,
      "label": "PRACTICE QUESTION 51 — QUANTITATIVE LEXICAL ANALYSIS OF OLD NORSE COGNATES IN BRITISH CHARTERS",
      "prompt": "Which conclusion is most strongly corroborated by the data in the table?",
      "options": [
        {
          "label": "A",
          "text": "Old Norse loanwords were over eight times more frequent per 10,000 words in Danelaw shires than in southwestern non-Danelaw shires, whereas Celtic substrate terms showed the reverse geographic concentration."
        },
        {
          "label": "B",
          "text": "Latin formulaic phrases accounted for the vast majority (over 80%) of all words in every analyzed charter."
        },
        {
          "label": "C",
          "text": "Devon charters contained higher absolute counts and rates of Scandinavian terms than Yorkshire charters."
        },
        {
          "label": "D",
          "text": "Geographic location had no discernible relationship to the frequency of Old Norse vocabulary in medieval legal documents."
        }
      ],
      "correctAnswer": "A",
      "correctAnswerIndex": 0,
      "whyCorrectTitle": "Why Option A is Correct:",
      "whyCorrect": "In Danelaw shires (Yorkshire, Lincolnshire, Norfolk), Old Norse frequencies ranged from 115.4 to 148.5 per 10k words, compared to just 9.8 to 14.2 in non-Danelaw shires (Wiltshire, Devon)—an increase of roughly 8 to 15 times. In contrast, Celtic substrate terms were concentrated heavily in the southwest (18.6 and 26.4 vs. 3.8 to 5.1 in Danelaw areas).",
      "educationalObjective": "Synthesize normalized lexical frequency rates across geographic regional groupings in historical corpus linguistics.",
      "trapToAvoid": "Choosing Option B, which confuses Latin percentages (11.8%–14.2%) with a majority.",
      "distractorExplanations": [
        {
          "optionLabel": "B",
          "explanation": "Magnitude distortion: Latin formulae accounted for only 11.8% to 14.2% of words, not over 80%."
        },
        {
          "optionLabel": "C",
          "explanation": "Direct contradiction: Devon had 9.8 Old Norse terms per 10k words, while Yorkshire had 148.5."
        },
        {
          "optionLabel": "D",
          "explanation": "Directly contradicted by the stark geographic divergence between Danelaw (115–148) and non-Danelaw (9–14) regions."
        }
      ],
      "eliminationShortcut": "Compare ratios across regions: Danelaw Norse rate (~115–148) is ~10x Non-Danelaw (~10–14); Celtic rate reverses (26.4 vs 4.2).",
      "passageSupport": "\"Scandinavian loanwords occur at significantly higher frequencies in northeastern shires subject to Viking settlement, whereas southwestern shires retain predominantly Old English and Celtic substrate vocabulary.\""
    },
    {
      "id": "ch6-p52",
      "passage": {
        "title": "Capital Depreciation Tax Credits and Robotic Automation Displacement",
        "text": "Economists examined the impact of accelerated capital depreciation allowances on automation adoption and median wages in four manufacturing subsectors. Researchers hypothesized that tax subsidies exceeding 30% accelerate industrial robotic installations, reducing routine assembly jobs while increasing wages exclusively for specialized maintenance technicians."
      },
      "dataFigure": {
        "title": "Manufacturing Automation and Employment Dynamics Under Capital Tax Subsidies",
        "headers": [
          "Manufacturing Sector",
          "Capital Tax Credit (%)",
          "New Robots Installed (per 1k workers)",
          "Routine Assembly Employment Change (%)",
          "Specialized Technical Wage Change (%)"
        ],
        "rows": [
          [
            "Automotive Assembly",
            "40%",
            "18.4",
            "−16.2%",
            "+14.8%"
          ],
          [
            "Consumer Electronics",
            "35%",
            "15.2",
            "−12.8%",
            "+11.5%"
          ],
          [
            "Industrial Machinery",
            "25%",
            "6.1",
            "−3.4%",
            "+4.2%"
          ],
          [
            "Apparel & Textiles",
            "10%",
            "1.8",
            "−0.5%",
            "+1.1%"
          ]
        ]
      },
      "questionNumber": 52,
      "label": "PRACTICE QUESTION 52 — CAPITAL DEPRECIATION TAX CREDITS AND ROBOTIC AUTOMATION DISPLACEMENT",
      "prompt": "Which statement is most directly supported by the data in the table?",
      "options": [
        {
          "label": "A",
          "text": "Sectors receiving capital tax credits of 35% or higher experienced both greater robot installations (≥15.2 per 1k workers) and larger declines in routine assembly employment (≥12.8%) than sectors with tax credits of 25% or lower."
        },
        {
          "label": "B",
          "text": "Apparel & Textiles installed more robots per 1,000 workers than Automotive Assembly."
        },
        {
          "label": "C",
          "text": "Capital tax credits had zero correlation with specialized technical wage growth across the four sectors."
        },
        {
          "label": "D",
          "text": "Routine assembly employment expanded in all four manufacturing sectors following tax credit implementation."
        }
      ],
      "correctAnswer": "A",
      "correctAnswerIndex": 0,
      "whyCorrectTitle": "Why Option A is Correct:",
      "whyCorrect": "Automotive (40%) and Electronics (35%) installed 18.4 and 15.2 robots per 1k workers and saw routine assembly employment drop by −16.2% and −12.8%. In contrast, Machinery (25%) and Apparel (10%) installed only 6.1 and 1.8 robots and saw much smaller declines (−3.4% and −0.5%), precisely matching the threshold distinction in Option A.",
      "educationalObjective": "Synthesize capital investment policy thresholds with labor displacement and wage polarization metrics.",
      "trapToAvoid": "Choosing Option D, which misidentifies negative percentage changes as employment growth.",
      "distractorExplanations": [
        {
          "optionLabel": "B",
          "explanation": "Factually inverted: Apparel installed 1.8 robots per 1k workers compared to 18.4 for Automotive."
        },
        {
          "optionLabel": "C",
          "explanation": "Contradicted by data: Technical wages increased monotonically with tax credits (1.1% → 4.2% → 11.5% → 14.8%)."
        },
        {
          "optionLabel": "D",
          "explanation": "Direct contradiction: Routine assembly employment declined across all four sectors (−16.2%, −12.8%, −3.4%, −0.5%)."
        }
      ],
      "eliminationShortcut": "Group sectors by tax credit: High credits (35–40%) = High robot adoption (15–18) & Large assembly drops (12–16%). Low credits (10–25%) = Low adoption (1.8–6.1).",
      "passageSupport": "\"Tax subsidies exceeding 30% accelerate industrial robotic installations, reducing routine assembly jobs while increasing wages exclusively for specialized maintenance technicians.\""
    },
    {
      "id": "ch6-p53",
      "passage": {
        "title": "Limnological Stoichiometry and Cyanobacterial Bloom Dynamics",
        "text": "Limnologists monitored nutrient dynamics and phytoplankton community composition in five freshwater reservoirs during summer thermal stratification. The classical Redfield stoichiometry posits that when the total nitrogen-to-phosphorus molar ratio (N:P) falls below 16:1, nitrogen-fixing cyanobacteria (*Microcystis* and *Anabaena*) outcompete eukaryotic green algae and diatoms, especially when water temperatures exceed 22°C."
      },
      "dataFigure": {
        "title": "Nutrient Stoichiometry, Water Temperature, and Cyanobacterial Biomass",
        "headers": [
          "Reservoir",
          "Mean Surface Temp (°C)",
          "Total Nitrogen (mg/L)",
          "Total Phosphorus (mg/L)",
          "N:P Molar Ratio",
          "Cyanobacteria Share of Biomass (%)"
        ],
        "rows": [
          [
            "Reservoir 1 (Clear Lake)",
            "24.5°C",
            "0.62",
            "0.082",
            "7.5 : 1",
            "84.2%"
          ],
          [
            "Reservoir 2 (Blue Basin)",
            "23.8°C",
            "0.85",
            "0.095",
            "8.9 : 1",
            "78.6%"
          ],
          [
            "Reservoir 3 (Pine Valley)",
            "22.4°C",
            "1.10",
            "0.078",
            "14.1 : 1",
            "62.4%"
          ],
          [
            "Reservoir 4 (Highland Peak)",
            "18.2°C",
            "0.75",
            "0.085",
            "8.8 : 1",
            "18.5%"
          ],
          [
            "Reservoir 5 (Deep Springs)",
            "23.5°C",
            "1.85",
            "0.042",
            "44.0 : 1",
            "8.2%"
          ]
        ]
      },
      "questionNumber": 53,
      "label": "PRACTICE QUESTION 53 — LIMNOLOGICAL STOICHIOMETRY AND CYANOBACTERIAL BLOOM DYNAMICS",
      "prompt": "Comparing Reservoir 2 and Reservoir 4 provides the strongest support for which conclusion regarding cyanobacterial proliferation?",
      "options": [
        {
          "label": "A",
          "text": "A low N:P molar ratio alone is insufficient to produce high cyanobacterial biomass if water temperatures remain below 22°C."
        },
        {
          "label": "B",
          "text": "Phosphorus concentration is the sole variable determining water temperature in freshwater lakes."
        },
        {
          "label": "C",
          "text": "Cyanobacteria dominate phytoplankton communities only when the N:P ratio exceeds 40:1."
        },
        {
          "label": "D",
          "text": "Reservoir 4 had the highest total phosphorus concentration among all five reservoirs."
        }
      ],
      "correctAnswer": "A",
      "correctAnswerIndex": 0,
      "whyCorrectTitle": "Why Option A is Correct:",
      "whyCorrect": "Reservoirs 2 and 4 have nearly identical low N:P ratios (8.9:1 and 8.8:1, both well below the 16:1 threshold) and similar phosphorus levels (0.095 and 0.085 mg/L). However, Reservoir 2 (23.8°C) had 78.6% cyanobacteria, while Reservoir 4 (18.2°C) had only 18.5%. This controlled pair isolates temperature as a vital co-limiting factor.",
      "educationalObjective": "Isolate co-limiting environmental variables by comparing paired data rows that hold one key ratio constant while varying another.",
      "trapToAvoid": "Choosing Option C, which contradicts the low N:P rule (Reservoir 5 had N:P 44:1 and only 8.2% cyanobacteria).",
      "distractorExplanations": [
        {
          "optionLabel": "B",
          "explanation": "Causal inversion: Phosphorus does not determine physical water temperature."
        },
        {
          "optionLabel": "C",
          "explanation": "Contradicted by data: Reservoir 5 had N:P of 44.0:1 and the lowest cyanobacteria share (8.2%), whereas reservoirs with low N:P had high shares."
        },
        {
          "optionLabel": "D",
          "explanation": "Factually incorrect: Reservoir 2 had the highest phosphorus (0.095 mg/L), whereas Reservoir 4 had 0.085 mg/L."
        }
      ],
      "eliminationShortcut": "Isolate the contrast between Reservoir 2 and 4: Same N:P (~8.8:1), but warm temp (23.8°C → 78.6% bloom) vs cold temp (18.2°C → 18.5% no bloom).",
      "passageSupport": "\"When the total nitrogen-to-phosphorus molar ratio (N:P) falls below 16:1, nitrogen-fixing cyanobacteria outcompete... especially when water temperatures exceed 22°C.\""
    },
    {
      "id": "ch6-p54",
      "passage": {
        "title": "Visual Ergonomics and Cognitive Load in High-Density Aviation Displays",
        "text": "Human factors engineers evaluated four avionics heads-up display (HUD) symbology formats during simulated high-workload flight approaches. Engineers measured mean saccadic fixation duration (longer durations reflect higher visual processing difficulty), target recognition error rate, and subjective cognitive load index (NASA-TLX scale, 0–100)."
      },
      "dataFigure": {
        "title": "Human Operator Performance Across Avionics HUD Interface Architectures",
        "headers": [
          "Interface Format",
          "Visual Encoding Architecture",
          "Mean Saccadic Fixation Duration (ms)",
          "Target Recognition Error Rate (%)",
          "Subjective Cognitive Load (0–100)"
        ],
        "rows": [
          [
            "Format Alpha",
            "Monochrome Alphanumeric List",
            "385",
            "14.2%",
            "76.4"
          ],
          [
            "Format Beta",
            "Color-Coded Hierarchical Cluster",
            "240",
            "4.8%",
            "42.1"
          ],
          [
            "Format Gamma",
            "Dynamic Spatial Terrain Overlay",
            "215",
            "3.6%",
            "38.5"
          ],
          [
            "Format Delta",
            "Multimodal Spatial + Auditory Cues",
            "190",
            "2.1%",
            "31.2"
          ]
        ]
      },
      "questionNumber": 54,
      "label": "PRACTICE QUESTION 54 — VISUAL ERGONOMICS AND COGNITIVE LOAD IN HIGH-DENSITY AVIATION DISPLAYS",
      "prompt": "Which statement is most fully supported by the evaluation data in the table?",
      "options": [
        {
          "label": "A",
          "text": "Transitioning from monochrome alphanumeric formatting (Format Alpha) to multimodal spatial and auditory cues (Format Delta) reduced mean fixation durations by over 50% while decreasing error rates by more than sixfold."
        },
        {
          "label": "B",
          "text": "Format Alpha produced the lowest cognitive load and fastest target acquisition among all four interface formats."
        },
        {
          "label": "C",
          "text": "Subjective cognitive load increased as visual encoding incorporated spatial and auditory cues."
        },
        {
          "label": "D",
          "text": "All four interface formats exhibited identical error rates and saccadic fixation durations."
        }
      ],
      "correctAnswer": "A",
      "correctAnswerIndex": 0,
      "whyCorrectTitle": "Why Option A is Correct:",
      "whyCorrect": "Comparing Format Alpha (385 ms, 14.2% error, 76.4 load) to Format Delta (190 ms, 2.1% error, 31.2 load): 190 ms is under half of 385 ms (a >50% reduction in fixation duration), and 14.2% / 2.1% = 6.76 (a >6-fold reduction in error rate), precisely matching Option A.",
      "educationalObjective": "Calculate and verify proportional rate and percentage reductions across ergonomics and human factors engineering datasets.",
      "trapToAvoid": "Choosing Option B or C, which completely inverts the direction of cognitive load and error reduction.",
      "distractorExplanations": [
        {
          "optionLabel": "B",
          "explanation": "Direct contradiction: Format Alpha had the worst performance across every metric (longest fixations: 385 ms, highest errors: 14.2%, highest load: 76.4)."
        },
        {
          "optionLabel": "C",
          "explanation": "Factually inverted: Subjective cognitive load dropped progressively from 76.4 to 42.1, 38.5, and 31.2 as spatial and multimodal cues were added."
        },
        {
          "optionLabel": "D",
          "explanation": "Direct contradiction: Metrics varied substantially across all four conditions."
        }
      ],
      "eliminationShortcut": "Verify calculations: Alpha → Delta: 385 ms → 190 ms (reduced by 50.6%); 14.2% → 2.1% (reduced by 6.76x); Load 76.4 → 31.2.",
      "passageSupport": "\"Engineers measured mean saccadic fixation duration... target recognition error rate, and subjective cognitive load index...\""
    }
  ]
};
