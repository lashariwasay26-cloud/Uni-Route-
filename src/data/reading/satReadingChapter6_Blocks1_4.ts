import { ReadingModule } from './readingTypes';

export const READING_CH6_BLOCK_1: ReadingModule = {
  "moduleNumber": 1,
  "id": "reading-ch6-block1",
  "chapterTitle": "CHAPTER 6 — DATA & INFORMATIONAL READING",
  "moduleTitle": "READING DATA AS AN ARGUMENT",
  "endLabel": "MODULE COMPLETE",
  "sections": [
    {
      "id": "ch6-b1-sec0",
      "sectionTitle": "INTRODUCTION TO INFORMATIONAL DATA READING",
      "content": [
        "SAT informational data-reading questions test the ability to decode tables and graphs and map their quantitative evidence to verbal claims in the text.",
        "The key is distinguishing raw data from an author's interpretation. Data is a set of objective observations, while a claim is an explanatory hypothesis or inference."
      ]
    },
    {
      "id": "ch6-b1-sec1",
      "sectionNumber": "1",
      "sectionTitle": "DATA QUESTIONS HAVE TWO LAYERS",
      "content": [
        "Every SAT data question operates across two logical levels:",
        "1. **The Retrieval Layer**: Reading the precise numerical coordinates, totals, or trends shown on the grid.\n2. **The Analytical Layer**: Synthesizing those numbers to support or bound the passage's primary arguments."
      ]
    },
    {
      "id": "ch6-b1-sec2",
      "sectionNumber": "2",
      "sectionTitle": "THE DATA FRAME",
      "content": [
        "Before analyzing any individual numbers, establish the data frame. Identify:\n- **Topic**: What specific system or behavior is being observed?\n- **Units**: Are the numbers absolute counts, relative percentages, or normalized rates?\n- **Intervals**: What spatial, temporal, or taxonomic boundaries limit the data?"
      ]
    },
    {
      "id": "ch6-b1-sec3",
      "sectionNumber": "3",
      "sectionTitle": "LABELS ARE PART OF THE EVIDENCE",
      "content": [
        "Never skip titles, column headers, axis labels, legends, or footnotes. They define crucial category groupings, scale modifiers (e.g., in thousands), and experimental boundary conditions."
      ]
    },
    {
      "id": "ch6-b1-sec4",
      "sectionNumber": "4",
      "sectionTitle": "TOTALS VERSUS CHANGES",
      "content": [
        "Differentiate absolute totals from rates of change. A category with the highest final value may have had the slowest overall growth rate. Check the exact metric requested."
      ]
    },
    {
      "id": "ch6-b1-sec5",
      "sectionNumber": "5",
      "sectionTitle": "ABSOLUTE VALUE VERSUS RELATIVE CHANGE",
      "content": [
        "Always verify if the question asks for an absolute change (subtraction) or a percentage change (ratio). They can lead to completely different conclusions."
      ]
    },
    {
      "id": "ch6-b1-sec6",
      "sectionNumber": "6",
      "sectionTitle": "READING A TREND",
      "content": [
        "Identify the overall trajectory across data points: increase, decrease, stability, fluctuation, or reversal.",
        "Do not describe data trends more strongly than the actual pattern allows. A fluctuating line is not steadily increasing."
      ]
    },
    {
      "id": "ch6-b1-sec7",
      "sectionNumber": "7",
      "sectionTitle": "TREND LANGUAGE MUST MATCH THE DATA",
      "content": [
        "Align descriptions precisely to the pattern:\n- **Steady / Consistent**: Continuous movement in one direction without deviation.\n- **Overall**: General net change despite localized fluctuations.",
        "One incorrect modifier can render an answer choice completely invalid."
      ]
    },
    {
      "id": "ch6-b1-sec8",
      "sectionNumber": "8",
      "sectionTitle": "THE GRAPH DOES NOT EXPLAIN EVERYTHING",
      "content": [
        "A graph establishes sequence and statistical association. It does not independently prove that the measured event was the sole cause of the outcome."
      ]
    },
    {
      "id": "ch6-b1-sec9",
      "sectionNumber": "9",
      "sectionTitle": "CORRELATION IN DATA",
      "content": [
        "Statistical correlation does not equal causation. Consider alternative variables, dual directions, or concurrent systemic changes before drawing a causal conclusion."
      ]
    },
    {
      "id": "ch6-b1-sec10",
      "sectionNumber": "10",
      "sectionTitle": "WORKED PRACTICE & APPLICATIONS",
      "content": [
        "Questions 1–4 test foundational data reading skills."
      ],
      "questions": [
        {
          "id": "ch6-w1",
          "passage": {
            "title": "University Academic Tutoring Program Participation",
            "text": "A university academic support center tracked undergraduate enrollment in peer-led mathematics and chemistry tutoring sessions over four consecutive academic years."
          },
          "dataFigure": {
            "title": "Annual Undergraduate Tutoring Program Participants",
            "headers": [
              "Academic Year",
              "Total Participants"
            ],
            "rows": [
              [
                "2021",
                "180"
              ],
              [
                "2022",
                "230"
              ],
              [
                "2023",
                "275"
              ],
              [
                "2024",
                "320"
              ]
            ]
          },
          "questionNumber": 1,
          "label": "WORKED EXAMPLE 1 — UNIVERSITY ACADEMIC TUTORING PROGRAM PARTICIPATION",
          "prompt": "Which statement is best supported by the table?",
          "options": [
            {
              "label": "A",
              "text": "Participation increased in every year shown."
            },
            {
              "label": "B",
              "text": "Participation increased by exactly the same amount each year."
            },
            {
              "label": "C",
              "text": "Participation reached its lowest point in 2024."
            },
            {
              "label": "D",
              "text": "The tutoring program caused student grade averages to improve."
            }
          ],
          "correctAnswer": "A",
          "correctAnswerIndex": 0,
          "whyCorrect": "The participant total increases continuously across all four consecutive years (180 → 230 → 275 → 320). Option B is wrong because annual gains vary (+50, +45, +45). Option C contradicts the table, and Option D asserts an unmeasured causal claim.",
          "whyCorrectTitle": "Why Option A is Correct:",
          "passageSupport": "\"A university academic support center tracked undergraduate enrollment in peer-led mathematics and chemistry tutoring sessions over four consecutive academic years.\"",
          "eliminationShortcut": "Eliminate any choice that confuses correlation with causation or misinterprets the graph axes and table units.",
          "distractorExplanations": [
            {
              "optionLabel": "B",
              "explanation": "Empirical mismatch: Option B (\"Participation increased by exactly the same amount each year.\") contradicts the specific data values or misrepresents the empirical trends shown in the figure."
            },
            {
              "optionLabel": "C",
              "explanation": "Empirical mismatch: Option C (\"Participation reached its lowest point in 2024.\") contradicts the specific data values or misrepresents the empirical trends shown in the figure."
            },
            {
              "optionLabel": "D",
              "explanation": "Empirical mismatch: Option D (\"The tutoring program caused student grade averages to improve.\") contradicts the specific data values or misrepresents the empirical trends shown in the figure."
            }
          ]
        }
      ]
    },
    {
      "id": "ch6-b1-sec11",
      "sectionNumber": "11",
      "sectionTitle": "CHAPTER TAKEAWAY & CORE PRINCIPLES",
      "content": [
        "Execution formula: **LABEL → VALUE → PATTERN → CLAIM**.",
        "Always verify: What is measured? What period is shown? What is being compared? Does the option's strength exceed the evidence?"
      ]
    }
  ],
  "practiceQuestions": [
    {
      "id": "ch6-p1",
      "passage": {
        "title": "Metropolitan Public Transit Ridership Trends",
        "text": "A regional transportation authority logged annual passenger boardings across its municipal bus and light-rail network over a four-year service expansion period."
      },
      "dataFigure": {
        "title": "Annual Public Transit Boardings (2020–2023)",
        "headers": [
          "Year",
          "Annual Passenger Trips"
        ],
        "rows": [
          [
            "2020",
            "80,000"
          ],
          [
            "2021",
            "95,000"
          ],
          [
            "2022",
            "120,000"
          ],
          [
            "2023",
            "130,000"
          ]
        ]
      },
      "questionNumber": 1,
      "label": "PRACTICE QUESTION 1 — METROPOLITAN PUBLIC TRANSIT RIDERSHIP TRENDS",
      "prompt": "Between which consecutive years did the largest annual increase occur?",
      "options": [
        {
          "label": "A",
          "text": "2020 to 2021"
        },
        {
          "label": "B",
          "text": "2021 to 2022"
        },
        {
          "label": "C",
          "text": "2022 to 2023"
        },
        {
          "label": "D",
          "text": "The increase was identical across all consecutive year pairs."
        }
      ],
      "correctAnswer": "B",
      "correctAnswerIndex": 1,
      "whyCorrect": "Calculating the annual differences shows 2020→2021 (+15,000), 2021→2022 (+25,000), and 2022→2023 (+10,000). The largest single-year gain occurred between 2021 and 2022.",
      "whyCorrectTitle": "Why Option B is Correct:",
      "passageSupport": "\"A regional transportation authority logged annual passenger boardings across its municipal bus and light-rail network over a four-year service expansion period.\"",
      "eliminationShortcut": "Eliminate options containing extreme absolutes and choose the option with 100% direct textual proof.",
      "distractorExplanations": [
        {
          "optionLabel": "A",
          "explanation": "Contradicted / Unsupported: Option A (\"2020 to 2021\") is not supported by the passage evidence and conflicts with the correct analysis."
        },
        {
          "optionLabel": "C",
          "explanation": "Contradicted / Unsupported: Option C (\"2022 to 2023\") is not supported by the passage evidence and conflicts with the correct analysis."
        },
        {
          "optionLabel": "D",
          "explanation": "Extreme language trap: Option D uses absolute wording (\"The increase was identical across all consecutive year pairs.\") that exceeds the nuanced, qualified claims made in the passage."
        }
      ]
    },
    {
      "id": "ch6-p2",
      "passage": {
        "title": "Urban Canopy Expansion & Summer Surface Temperatures",
        "text": "Environmental scientists measured localized microclimate surface temperature changes across four urban districts that received varying numbers of street trees during a municipal afforestation initiative."
      },
      "dataFigure": {
        "title": "Tree Planting & Summer Temperature Reductions by District",
        "headers": [
          "District",
          "New Trees Planted",
          "Average Summer Temp Change"
        ],
        "rows": [
          [
            "North District",
            "2,000",
            "−0.4°C"
          ],
          [
            "East District",
            "4,500",
            "−0.8°C"
          ],
          [
            "South District",
            "6,000",
            "−1.1°C"
          ],
          [
            "West District",
            "8,000",
            "−1.3°C"
          ]
        ]
      },
      "questionNumber": 2,
      "label": "PRACTICE QUESTION 2 — URBAN CANOPY EXPANSION & SUMMER SURFACE TEMPERATURES",
      "prompt": "Which conclusion is most directly supported by the data?",
      "options": [
        {
          "label": "A",
          "text": "Planting trees always causes atmospheric temperatures to decrease regardless of location."
        },
        {
          "label": "B",
          "text": "Districts with more newly planted trees in this data set generally experienced larger temperature decreases."
        },
        {
          "label": "C",
          "text": "Tree planting was the sole factor influencing summer temperatures in these districts."
        },
        {
          "label": "D",
          "text": "Every urban district nationwide experienced lower summer temperatures during this period."
        }
      ],
      "correctAnswer": "B",
      "correctAnswerIndex": 1,
      "whyCorrect": "The data displays a consistent pattern within these four studied districts: higher numbers of trees planted correspond to greater temperature declines. Options A and D overgeneralize to all locations, and Option C falsely asserts exclusive causation.",
      "whyCorrectTitle": "Why Option B is Correct:",
      "passageSupport": "\"Environmental scientists measured localized microclimate surface temperature changes across four urban districts that received varying numbers of street trees during a municipal afforestation initiative.\"",
      "eliminationShortcut": "Eliminate any choice that confuses correlation with causation or misinterprets the graph axes and table units.",
      "distractorExplanations": [
        {
          "optionLabel": "A",
          "explanation": "Extreme language trap: Option A uses absolute wording (\"Planting trees always causes atmospheric temperatures to decrease regardless of location.\") that exceeds the nuanced, qualified claims made in the passage."
        },
        {
          "optionLabel": "C",
          "explanation": "Empirical mismatch: Option C (\"Tree planting was the sole factor influencing summer temperatures in these districts.\") contradicts the specific data values or misrepresents the empirical trends shown in the figure."
        },
        {
          "optionLabel": "D",
          "explanation": "Empirical mismatch: Option D (\"Every urban district nationwide experienced lower summer temperatures during this period.\") contradicts the specific data values or misrepresents the empirical trends shown in the figure."
        }
      ]
    },
    {
      "id": "ch6-p3",
      "passage": {
        "title": "Municipal Dedicated Bicycle Network Commuter Share",
        "text": "A municipal transportation planning department evaluated the percentage of daily work commutes completed by bicycle following the phased opening of a 40-mile protected cycle track network."
      },
      "dataFigure": {
        "title": "Bicycle Commuter Modal Share Before and After Network Completion",
        "headers": [
          "Evaluation Period",
          "Bicycle Commuting Percentage"
        ],
        "rows": [
          [
            "Before network",
            "6%"
          ],
          [
            "Year 1",
            "9%"
          ],
          [
            "Year 2",
            "12%"
          ],
          [
            "Year 3",
            "13%"
          ]
        ]
      },
      "questionNumber": 3,
      "label": "PRACTICE QUESTION 3 — MUNICIPAL DEDICATED BICYCLE NETWORK COMMUTER SHARE",
      "prompt": "Which statement best describes what the data contributes to the report?",
      "options": [
        {
          "label": "A",
          "text": "It proves that the dedicated bicycle network was the exclusive cause of the commuting increase."
        },
        {
          "label": "B",
          "text": "It provides quantitative evidence consistent with the report's observation that bicycle commuting increased after the network was built."
        },
        {
          "label": "C",
          "text": "It demonstrates that every city resident eventually adopted bicycle commuting."
        },
        {
          "label": "D",
          "text": "It establishes that motorized vehicle usage completely ceased in the metropolitan area."
        }
      ],
      "correctAnswer": "B",
      "correctAnswerIndex": 1,
      "whyCorrect": "The data provides quantitative documentation showing a rise from 6% to 13%, directly supporting the report's descriptive claim. It does not establish exclusive causation (Option A), nor does it make universal claims about all residents or motor vehicles (Options C and D).",
      "whyCorrectTitle": "Why Option B is Correct:",
      "passageSupport": "\"A municipal transportation planning department evaluated the percentage of daily work commutes completed by bicycle following the phased opening of a 40-mile protected cycle track network.\"",
      "eliminationShortcut": "Eliminate any choice that confuses correlation with causation or misinterprets the graph axes and table units.",
      "distractorExplanations": [
        {
          "optionLabel": "A",
          "explanation": "Empirical mismatch: Option A (\"It proves that the dedicated bicycle network was the exclusive cause of the commuting increase.\") contradicts the specific data values or misrepresents the empirical trends shown in the figure."
        },
        {
          "optionLabel": "C",
          "explanation": "Extreme language trap: Option C uses absolute wording (\"It demonstrates that every city resident eventually adopted bicycle commuting.\") that exceeds the nuanced, qualified claims made in the passage."
        },
        {
          "optionLabel": "D",
          "explanation": "Extreme language trap: Option D uses absolute wording (\"It establishes that motorized vehicle usage completely ceased in the metropolitan area.\") that exceeds the nuanced, qualified claims made in the passage."
        }
      ]
    }
  ]
};

export const READING_CH6_BLOCK_2: ReadingModule = {
  "moduleNumber": 2,
  "id": "reading-ch6-block2",
  "chapterTitle": "CHAPTER 6 — DATA & INFORMATIONAL READING",
  "moduleTitle": "TABLES, MULTIPLE VARIABLES, AND COMPARATIVE REASONING",
  "endLabel": "MODULE COMPLETE",
  "sections": [
    {
      "id": "ch6-b2-sec0",
      "sectionTitle": "INTRODUCTION TO MULTI-VARIABLE TABLES",
      "content": [
        "Advanced tables track multiple variables across complex subgroups. Success requires keeping variables separate to avoid false equivalence."
      ]
    },
    {
      "id": "ch6-b2-sec12",
      "sectionNumber": "12",
      "sectionTitle": "READ THE TITLE FIRST",
      "content": [
        "The title establishes the frame (e.g., energy use per household). Never skip it."
      ]
    },
    {
      "id": "ch6-b2-sec13",
      "sectionNumber": "13",
      "sectionTitle": "ROWS AND COLUMNS HAVE DIFFERENT FUNCTIONS",
      "content": [
        "Rows track individual entities (e.g., region) across multiple variables. Columns track a single variable across all entities."
      ]
    },
    {
      "id": "ch6-b2-sec14",
      "sectionNumber": "14",
      "sectionTitle": "THE HIGHEST NUMBER MAY ANSWER THE WRONG QUESTION",
      "content": [
        "A table can yield different maximums for totals, percentage growth, or absolute increase. Match the exact column to the prompt's target."
      ]
    },
    {
      "id": "ch6-b2-sec15",
      "sectionNumber": "15",
      "sectionTitle": "COMPARING TWO VARIABLES",
      "content": [
        "Do not assume a higher value in one variable automatically predicts a higher value in another. Check both columns independently."
      ]
    },
    {
      "id": "ch6-b2-sec16",
      "sectionNumber": "16",
      "sectionTitle": "THE COMPARISON SENTENCE",
      "content": [
        "Formulate a clear comparison sentence (e.g., 'Region A has the highest total, but Region B has the fastest growth rate') to secure accuracy."
      ]
    },
    {
      "id": "ch6-b2-sec17",
      "sectionNumber": "17",
      "sectionTitle": "SUBGROUPS AND TOTALS",
      "content": [
        "Subgroup maximums (e.g., Science Club) are distinct from grand totals. Never conflate a subset with the overall population."
      ]
    },
    {
      "id": "ch6-b2-sec18",
      "sectionNumber": "18",
      "sectionTitle": "PERCENTAGES AND TOTAL POPULATIONS",
      "content": [
        "A high percentage rate in a small population can yield a smaller absolute count than a low percentage rate in a massive population. Distinguish rates from counts."
      ]
    },
    {
      "id": "ch6-b2-sec19",
      "sectionNumber": "19",
      "sectionTitle": "AVERAGES CAN HIDE DIFFERENCES",
      "content": [
        "Identical means can mask completely different distributions (e.g., tight clusters vs. extreme spreads). Average does not mean identical."
      ]
    },
    {
      "id": "ch6-b2-sec20",
      "sectionNumber": "20",
      "sectionTitle": "MULTIPLE VARIABLES DO NOT AUTOMATICALLY CREATE CAUSATION",
      "content": [
        "Co-varying variables indicate association, not causation. Look for unmeasured confounding factors."
      ]
    },
    {
      "id": "ch6-b2-sec21",
      "sectionNumber": "21",
      "sectionTitle": "DENSE TABLE PRACTICE",
      "content": [
        "Analyze community infrastructure and transit growth metrics across four municipal areas."
      ],
      "questions": [
        {
          "id": "ch6-w2",
          "passage": {
            "title": "Northern Municipalities Transit Usage & Station Growth",
            "text": "A regional transit board evaluated transit ridership shifts following station construction across four northern communities."
          },
          "dataFigure": {
            "title": "Northern Community Transit Growth Metrics",
            "headers": [
              "Community",
              "Population",
              "New Transit Stops",
              "Transit Use Change",
              "Average Commute Change"
            ],
            "rows": [
              [
                "Arlen",
                "120,000",
                "4",
                "+6%",
                "−2 min"
              ],
              [
                "Bellmere",
                "80,000",
                "7",
                "+14%",
                "−5 min"
              ],
              [
                "Crestfall",
                "200,000",
                "5",
                "+4%",
                "−1 min"
              ],
              [
                "Dunridge",
                "60,000",
                "8",
                "+11%",
                "−3 min"
              ]
            ]
          },
          "questionNumber": 2,
          "label": "WORKED EXAMPLE 2 — NORTHERN MUNICIPALITIES TRANSIT USAGE & STATION GROWTH",
          "prompt": "Which community experienced the greatest percentage increase in transit use?",
          "options": [
            {
              "label": "A",
              "text": "Arlen"
            },
            {
              "label": "B",
              "text": "Bellmere"
            },
            {
              "label": "C",
              "text": "Crestfall"
            },
            {
              "label": "D",
              "text": "Dunridge"
            }
          ],
          "correctAnswer": "B",
          "correctAnswerIndex": 1,
          "whyCorrect": "Examining the \"Transit Use Change\" column shows: Arlen (+6%), Bellmere (+14%), Crestfall (+4%), Dunridge (+11%). Bellmere recorded the highest percentage growth at +14%.",
          "whyCorrectTitle": "Why Option B is Correct:",
          "passageSupport": "\"A regional transit board evaluated transit ridership shifts following station construction across four northern communities.\"",
          "eliminationShortcut": "Eliminate options containing extreme absolutes and choose the option with 100% direct textual proof.",
          "distractorExplanations": [
            {
              "optionLabel": "A",
              "explanation": "Contradicted / Unsupported: Option A (\"Arlen\") is not supported by the passage evidence and conflicts with the correct analysis."
            },
            {
              "optionLabel": "C",
              "explanation": "Extreme language trap: Option C uses absolute wording (\"Crestfall\") that exceeds the nuanced, qualified claims made in the passage."
            },
            {
              "optionLabel": "D",
              "explanation": "Contradicted / Unsupported: Option D (\"Dunridge\") is not supported by the passage evidence and conflicts with the correct analysis."
            }
          ]
        }
      ]
    },
    {
      "id": "ch6-b2-sec22",
      "sectionNumber": "22",
      "sectionTitle": "CHAPTER TAKEAWAY & CORE PRINCIPLES",
      "content": [
        "Execution sequence: **TITLE → VARIABLES → RELEVANT COLUMN → ROW → COMPARISON**. Distinguish absolute change from relative rates."
      ]
    }
  ],
  "practiceQuestions": [
    {
      "id": "ch6-p4",
      "passage": {
        "title": "Western Municipal Transit Infrastructure Expansions",
        "text": "Transport planners measured infrastructure capital investments and stop additions across four western suburban districts."
      },
      "dataFigure": {
        "title": "Western District Station Additions and Demographics",
        "headers": [
          "Community",
          "Population",
          "New Transit Stops",
          "Transit Use Change",
          "Average Commute Change"
        ],
        "rows": [
          [
            "Arlen",
            "120,000",
            "4",
            "+6%",
            "−2 min"
          ],
          [
            "Bellmere",
            "80,000",
            "7",
            "+14%",
            "−5 min"
          ],
          [
            "Crestfall",
            "200,000",
            "5",
            "+4%",
            "−1 min"
          ],
          [
            "Dunridge",
            "60,000",
            "8",
            "+11%",
            "−3 min"
          ]
        ]
      },
      "questionNumber": 4,
      "label": "PRACTICE QUESTION 4 — WESTERN MUNICIPAL TRANSIT INFRASTRUCTURE EXPANSIONS",
      "prompt": "Which community added the greatest number of new transit stops?",
      "options": [
        {
          "label": "A",
          "text": "Arlen"
        },
        {
          "label": "B",
          "text": "Bellmere"
        },
        {
          "label": "C",
          "text": "Crestfall"
        },
        {
          "label": "D",
          "text": "Dunridge"
        }
      ],
      "correctAnswer": "D",
      "correctAnswerIndex": 3,
      "whyCorrect": "Examining the \"New Transit Stops\" column shows: Arlen (4), Bellmere (7), Crestfall (5), Dunridge (8). Dunridge added the highest number of stops (8).",
      "whyCorrectTitle": "Why Option D is Correct:",
      "passageSupport": "\"Transport planners measured infrastructure capital investments and stop additions across four western suburban districts.\"",
      "eliminationShortcut": "Eliminate options containing extreme absolutes and choose the option with 100% direct textual proof.",
      "distractorExplanations": [
        {
          "optionLabel": "A",
          "explanation": "Contradicted / Unsupported: Option A (\"Arlen\") is not supported by the passage evidence and conflicts with the correct analysis."
        },
        {
          "optionLabel": "B",
          "explanation": "Contradicted / Unsupported: Option B (\"Bellmere\") is not supported by the passage evidence and conflicts with the correct analysis."
        },
        {
          "optionLabel": "C",
          "explanation": "Extreme language trap: Option C uses absolute wording (\"Crestfall\") that exceeds the nuanced, qualified claims made in the passage."
        }
      ]
    },
    {
      "id": "ch6-p5",
      "passage": {
        "title": "Eastern Suburban Corridor Commuter Performance",
        "text": "A state infrastructure commission analyzed commuting efficiency and transit growth across four distinct municipal sectors."
      },
      "dataFigure": {
        "title": "Suburban Corridor Commuter Metrics",
        "headers": [
          "Community",
          "Population",
          "New Transit Stops",
          "Transit Use Change",
          "Average Commute Change"
        ],
        "rows": [
          [
            "Arlen",
            "120,000",
            "4",
            "+6%",
            "−2 min"
          ],
          [
            "Bellmere",
            "80,000",
            "7",
            "+14%",
            "−5 min"
          ],
          [
            "Crestfall",
            "200,000",
            "5",
            "+4%",
            "−1 min"
          ],
          [
            "Dunridge",
            "60,000",
            "8",
            "+11%",
            "−3 min"
          ]
        ]
      },
      "questionNumber": 5,
      "label": "PRACTICE QUESTION 5 — EASTERN SUBURBAN CORRIDOR COMMUTER PERFORMANCE",
      "prompt": "Which statement is best supported by the table?",
      "options": [
        {
          "label": "A",
          "text": "Communities that added more transit stops always experienced proportionally greater increases in transit use."
        },
        {
          "label": "B",
          "text": "Bellmere experienced both the largest percentage increase in transit use and the greatest reduction in average commute time."
        },
        {
          "label": "C",
          "text": "Dunridge had the largest population and added the greatest number of transit stops."
        },
        {
          "label": "D",
          "text": "Crestfall experienced the greatest percentage increase in transit use."
        }
      ],
      "correctAnswer": "B",
      "correctAnswerIndex": 1,
      "whyCorrect": "Bellmere recorded the highest transit use increase (+14%) and the largest commute reduction (−5 min). Option A is wrong because Dunridge added 8 stops (+11%) while Bellmere added 7 stops (+14%). Option C misidentifies population (Crestfall is largest at 200,000), and Option D misidentifies transit growth.",
      "whyCorrectTitle": "Why Option B is Correct:",
      "passageSupport": "\"A state infrastructure commission analyzed commuting efficiency and transit growth across four distinct municipal sectors.\"",
      "eliminationShortcut": "Eliminate any choice that confuses correlation with causation or misinterprets the graph axes and table units.",
      "distractorExplanations": [
        {
          "optionLabel": "A",
          "explanation": "Extreme language trap: Option A uses absolute wording (\"Communities that added more transit stops always experienced proportionally greater increases in transit use.\") that exceeds the nuanced, qualified claims made in the passage."
        },
        {
          "optionLabel": "C",
          "explanation": "Empirical mismatch: Option C (\"Dunridge had the largest population and added the greatest number of transit stops.\") contradicts the specific data values or misrepresents the empirical trends shown in the figure."
        },
        {
          "optionLabel": "D",
          "explanation": "Extreme language trap: Option D uses absolute wording (\"Crestfall experienced the greatest percentage increase in transit use.\") that exceeds the nuanced, qualified claims made in the passage."
        }
      ]
    },
    {
      "id": "ch6-p6",
      "passage": {
        "title": "Midwestern Regional Transit Causality Assessment",
        "text": "Econometricians evaluating municipal transport investments examined the relationship between station construction and commute duration."
      },
      "dataFigure": {
        "title": "Infrastructure Additions and Commuting Duration",
        "headers": [
          "Community",
          "Population",
          "New Transit Stops",
          "Transit Use Change",
          "Average Commute Change"
        ],
        "rows": [
          [
            "Arlen",
            "120,000",
            "4",
            "+6%",
            "−2 min"
          ],
          [
            "Bellmere",
            "80,000",
            "7",
            "+14%",
            "−5 min"
          ],
          [
            "Crestfall",
            "200,000",
            "5",
            "+4%",
            "−1 min"
          ],
          [
            "Dunridge",
            "60,000",
            "8",
            "+11%",
            "−3 min"
          ]
        ]
      },
      "questionNumber": 6,
      "label": "PRACTICE QUESTION 6 — MIDWESTERN REGIONAL TRANSIT CAUSALITY ASSESSMENT",
      "prompt": "A researcher claims that the table proves that adding new transit stops directly causes shorter average commute times. Which evaluation of this claim is most accurate?",
      "options": [
        {
          "label": "A",
          "text": "The claim is fully proven because every community added transit stops and experienced shorter commute times."
        },
        {
          "label": "B",
          "text": "The table demonstrates an association between transit stops and commute changes, but observational data alone cannot establish exclusive causation."
        },
        {
          "label": "C",
          "text": "The claim is confirmed because Bellmere added seven stops and had a five-minute reduction."
        },
        {
          "label": "D",
          "text": "The table proves that community population has no relationship to commuting habits."
        }
      ],
      "correctAnswer": "B",
      "correctAnswerIndex": 1,
      "whyCorrect": "While all four communities added stops and recorded commute reductions, correlational table data alone cannot rule out confounding factors (such as road repairs or traffic rerouting). Thus, it shows an association rather than proof of direct causation.",
      "whyCorrectTitle": "Why Option B is Correct:",
      "passageSupport": "\"Econometricians evaluating municipal transport investments examined the relationship between station construction and commute duration.\"",
      "eliminationShortcut": "Eliminate any choice that confuses correlation with causation or misinterprets the graph axes and table units.",
      "distractorExplanations": [
        {
          "optionLabel": "A",
          "explanation": "Empirical mismatch: Option A (\"The claim is fully proven because every community added transit stops and experienced shorter commute times.\") contradicts the specific data values or misrepresents the empirical trends shown in the figure."
        },
        {
          "optionLabel": "C",
          "explanation": "Empirical mismatch: Option C (\"The claim is confirmed because Bellmere added seven stops and had a five-minute reduction.\") contradicts the specific data values or misrepresents the empirical trends shown in the figure."
        },
        {
          "optionLabel": "D",
          "explanation": "Empirical mismatch: Option D (\"The table proves that community population has no relationship to commuting habits.\") contradicts the specific data values or misrepresents the empirical trends shown in the figure."
        }
      ]
    },
    {
      "id": "ch6-p7",
      "passage": {
        "title": "Southern Metro Micromobility & Transit Integration",
        "text": "Urban researchers compared population size and transit growth metrics across four metropolitan municipalities."
      },
      "dataFigure": {
        "title": "Cross-District Transportation Metrics",
        "headers": [
          "Community",
          "Population",
          "New Transit Stops",
          "Transit Use Change",
          "Average Commute Change"
        ],
        "rows": [
          [
            "Arlen",
            "120,000",
            "4",
            "+6%",
            "−2 min"
          ],
          [
            "Bellmere",
            "80,000",
            "7",
            "+14%",
            "−5 min"
          ],
          [
            "Crestfall",
            "200,000",
            "5",
            "+4%",
            "−1 min"
          ],
          [
            "Dunridge",
            "60,000",
            "8",
            "+11%",
            "−3 min"
          ]
        ]
      },
      "questionNumber": 7,
      "label": "PRACTICE QUESTION 7 — SOUTHERN METRO MICROMOBILITY & TRANSIT INTEGRATION",
      "prompt": "Which statement most accurately compares the outcomes for Arlen and Dunridge?",
      "options": [
        {
          "label": "A",
          "text": "Bellmere had a larger population than Dunridge and added a greater number of transit stops."
        },
        {
          "label": "B",
          "text": "Dunridge added more transit stops than Bellmere, but Bellmere achieved a larger percentage increase in transit use and a greater commute time reduction."
        },
        {
          "label": "C",
          "text": "Dunridge achieved a larger percentage increase in transit use than Bellmere because it constructed the highest number of stops."
        },
        {
          "label": "D",
          "text": "Bellmere and Dunridge experienced identical changes in transit use and commute times."
        }
      ],
      "correctAnswer": "B",
      "correctAnswerIndex": 1,
      "whyCorrect": "Dunridge added 8 stops compared to Bellmere's 7. However, Bellmere recorded higher transit use growth (+14% vs +11%) and a greater commute reduction (−5 min vs −3 min). Option B precisely synthesizes these multi-variable differences.",
      "whyCorrectTitle": "Why Option B is Correct:",
      "passageSupport": "\"Urban researchers compared population size and transit growth metrics across four metropolitan municipalities.\"",
      "eliminationShortcut": "Eliminate options containing extreme absolutes and choose the option with 100% direct textual proof.",
      "distractorExplanations": [
        {
          "optionLabel": "A",
          "explanation": "Contradicted / Unsupported: Option A (\"Bellmere had a larger population than Dunridge and added a greater number of transit stops.\") is not supported by the passage evidence and conflicts with the correct analysis."
        },
        {
          "optionLabel": "C",
          "explanation": "Contradicted / Unsupported: Option C (\"Dunridge achieved a larger percentage increase in transit use than Bellmere because it constructed the highest number of stops.\") is not supported by the passage evidence and conflicts with the correct analysis."
        },
        {
          "optionLabel": "D",
          "explanation": "Contradicted / Unsupported: Option D (\"Bellmere and Dunridge experienced identical changes in transit use and commute times.\") is not supported by the passage evidence and conflicts with the correct analysis."
        }
      ]
    }
  ]
};

export const READING_CH6_BLOCK_3: ReadingModule = {
  "moduleNumber": 3,
  "id": "reading-ch6-block3",
  "chapterTitle": "CHAPTER 6 — DATA & INFORMATIONAL READING",
  "moduleTitle": "GRAPHS, PATTERNS, AND VISUAL TRENDS",
  "endLabel": "MODULE COMPLETE",
  "sections": [
    {
      "id": "ch6-b3-sec0",
      "sectionTitle": "INTRODUCTION TO VISUAL GRAPH READING",
      "content": [
        "Visual reading requires translating graphical structures into precise mathematical sentences rather than relying on visual ≈imations."
      ]
    },
    {
      "id": "ch6-b3-sec23",
      "sectionNumber": "23",
      "sectionTitle": "THE FIVE-PART GRAPH CHECK",
      "content": [
        "Before interpreting, verify: 1. Title, 2. X-axis, 3. Y-axis, 4. Legend, 5. Overall trend direction."
      ]
    },
    {
      "id": "ch6-b3-sec24",
      "sectionNumber": "24",
      "sectionTitle": "THE AXIS TRAP",
      "content": [
        "Check the baseline of the vertical axis. If an axis starts at a non-zero value, visual height differences will exaggerate numerical differences."
      ]
    },
    {
      "id": "ch6-b3-sec25",
      "sectionNumber": "25",
      "sectionTitle": "READING LINE GRAPHS",
      "content": [
        "Track each data series independently by following its distinct key (dotted lines, solid lines, or symbols). Do not blend lines."
      ]
    },
    {
      "id": "ch6-b3-sec26",
      "sectionNumber": "26",
      "sectionTitle": "OVERALL TREND VERSUS EVERY DATA POINT",
      "content": [
        "Distinguish a continuous, steady trend from an overall net trend. The latter accommodates temporary fluctuations or reversals."
      ]
    },
    {
      "id": "ch6-b3-sec27",
      "sectionNumber": "27",
      "sectionTitle": "PEAKS AND LOW POINTS",
      "content": [
        "Locate the exact maximum (peak) and minimum (trough) values along a timeline. Verify if the prompt specifies an overall peak or a category-specific peak."
      ]
    },
    {
      "id": "ch6-b3-sec28",
      "sectionNumber": "28",
      "sectionTitle": "RATE OF CHANGE",
      "content": [
        "Rate of change is represented by the slope of a line. Steeper slopes denote faster growth or decline regardless of absolute starting totals."
      ]
    },
    {
      "id": "ch6-b3-sec29",
      "sectionNumber": "29",
      "sectionTitle": "MULTIPLE LINES",
      "content": [
        "When comparing multiple lines, track crossing points, maximum gaps, and relative trends over the specified time windows."
      ]
    },
    {
      "id": "ch6-b3-sec30",
      "sectionNumber": "30",
      "sectionTitle": "CROSSING POINTS",
      "content": [
        "A crossing point indicates a relative order inversion between two data series over time."
      ]
    },
    {
      "id": "ch6-b3-sec31",
      "sectionNumber": "31",
      "sectionTitle": "BAR GRAPHS AND CATEGORY COMPARISON",
      "content": [
        "Bar graphs display discrete category totals. Verify exact heights against the y-axis values rather than relying on visual proportions."
      ]
    },
    {
      "id": "ch6-b3-sec32",
      "sectionNumber": "32",
      "sectionTitle": "VISUAL PATTERN IS NOT ENOUGH",
      "content": [
        "Never rely on optical proportions alone. Verify exact values against numerical axes to prevent visual scale traps."
      ]
    },
    {
      "id": "ch6-b3-sec33",
      "sectionNumber": "33",
      "sectionTitle": "WORKED PRACTICE & APPLICATIONS",
      "content": [
        "Analyze annual participant enrollment trends in community environmental and cultural programs."
      ],
      "questions": [
        {
          "id": "ch6-w3",
          "passage": {
            "title": "Solar Photovoltaic Cell Efficiency Across Materials",
            "text": "A clean energy laboratory tested four photovoltaic cell materials under standardized solar irradiance of 1,000 W/m² to measure conversion efficiency and manufacturing cost."
          },
          "dataFigure": {
            "title": "Photovoltaic Material Performance & Cost Matrix",
            "headers": [
              "Material",
              "Conversion Efficiency (%)",
              "Production Cost (/W)",
              "Degradation Rate (%/yr)"
            ],
            "rows": [
              [
                "Monocrystalline Silicon",
                "22.4%",
                "0.28",
                "0.5%"
              ],
              [
                "Polycrystalline Silicon",
                "17.8%",
                "$0.20",
                "0.7%"
              ],
              [
                "Perovskite Tandem",
                "28.1%",
                "$0.35",
                "2.1%"
              ],
              [
                "Cadmium Telluride",
                "18.6%",
                "0.22",
                "0.6%"
              ]
            ]
          },
          "questionNumber": 3,
          "label": "WORKED EXAMPLE 3 — SOLAR PHOTOVOLTAIC CELL EFFICIENCY ACROSS MATERIALS",
          "prompt": "Which statement is directly supported by the data?",
          "options": [
            {
              "label": "A",
              "text": "Participation in the Environmental Program increased in every consecutive year shown."
            },
            {
              "label": "B",
              "text": "Participation in the Cultural Program increased by exactly the same amount each year."
            },
            {
              "label": "C",
              "text": "The Cultural Program maintained higher enrollment than the Environmental Program throughout the entire period."
            },
            {
              "label": "D",
              "text": "Both programs recorded identical participation totals in 2023."
            }
          ],
          "correctAnswer": "A",
          "correctAnswerIndex": 0,
          "whyCorrect": "Environmental Program totals rose continuously: 200 → 280 → 350 → 420. Option B is wrong because Cultural gains varied (+30, +40, +40). Option C is false because Environmental surpassed Cultural in 2023 (350 vs 330).",
          "whyCorrectTitle": "Why Option A is Correct:",
          "passageSupport": "\"A clean energy laboratory tested four photovoltaic cell materials under standardized solar irradiance of 1,000 W/m² to measure conversion efficiency and manufacturing cost.\"",
          "eliminationShortcut": "Eliminate any choice that confuses correlation with causation or misinterprets the graph axes and table units.",
          "distractorExplanations": [
            {
              "optionLabel": "B",
              "explanation": "Empirical mismatch: Option B (\"Participation in the Cultural Program increased by exactly the same amount each year.\") contradicts the specific data values or misrepresents the empirical trends shown in the figure."
            },
            {
              "optionLabel": "C",
              "explanation": "Empirical mismatch: Option C (\"The Cultural Program maintained higher enrollment than the Environmental Program throughout the entire period.\") contradicts the specific data values or misrepresents the empirical trends shown in the figure."
            },
            {
              "optionLabel": "D",
              "explanation": "Empirical mismatch: Option D (\"Both programs recorded identical participation totals in 2023.\") contradicts the specific data values or misrepresents the empirical trends shown in the figure."
            }
          ]
        }
      ]
    },
    {
      "id": "ch6-b3-sec34",
      "sectionNumber": "34",
      "sectionTitle": "DATA-QUALITY CHECKING",
      "content": [
        "Evaluate whether descriptive claims (e.g., 'grew steadily') accurately reflect the data sequence or exaggerate minor fluctuations."
      ]
    },
    {
      "id": "ch6-b3-sec35",
      "sectionNumber": "35",
      "sectionTitle": "CHAPTER TAKEAWAY & CORE PRINCIPLES",
      "content": [
        "Execution framework: **FRAME → AXES → VALUES → PATTERN → CLAIM**. Follow each series independently and verify exact numerical values."
      ]
    }
  ],
  "practiceQuestions": [
    {
      "id": "ch6-p8",
      "passage": {
        "title": "Renewable Power Storage Lifespan & Cycling Rates",
        "text": "Engineers evaluated four battery chemistries deployed in commercial energy storage systems across varying temperature regimes."
      },
      "dataFigure": {
        "title": "Battery Chemistries Performance Comparison",
        "headers": [
          "Chemistry",
          "Cycle Life (cycles)",
          "Energy Density (Wh/kg)",
          "Annual Capacity Loss"
        ],
        "rows": [
          [
            "Lithium Iron Phosphate (LFP)",
            "4,500",
            "160",
            "1.2%"
          ],
          [
            "Nickel Manganese Cobalt (NMC)",
            "2,200",
            "250",
            "2.8%"
          ],
          [
            "Vanadium Redox Flow",
            "15,000",
            "35",
            "0.3%"
          ],
          [
            "Sodium-Ion",
            "3,000",
            "140",
            "1.8%"
          ]
        ]
      },
      "questionNumber": 8,
      "label": "PRACTICE QUESTION 8 — RENEWABLE POWER STORAGE LIFESPAN & CYCLING RATES",
      "prompt": "Which battery chemistry exhibited the lowest annual capacity degradation rate?",
      "options": [
        {
          "label": "A",
          "text": "2021"
        },
        {
          "label": "B",
          "text": "2022"
        },
        {
          "label": "C",
          "text": "2023"
        },
        {
          "label": "D",
          "text": "2024"
        }
      ],
      "correctAnswer": "C",
      "correctAnswerIndex": 2,
      "whyCorrect": "Comparing totals year by year:\n2021: 200 < 260\n2022: 280 < 290\n2023: 350 > 330\nEnvironmental first surpassed Cultural in 2023.",
      "whyCorrectTitle": "Why Option C is Correct:",
      "passageSupport": "\"Engineers evaluated four battery chemistries deployed in commercial energy storage systems across varying temperature regimes.\"",
      "eliminationShortcut": "Eliminate options containing extreme absolutes and choose the option with 100% direct textual proof.",
      "distractorExplanations": [
        {
          "optionLabel": "A",
          "explanation": "Contradicted / Unsupported: Option A (\"2021\") is not supported by the passage evidence and conflicts with the correct analysis."
        },
        {
          "optionLabel": "B",
          "explanation": "Contradicted / Unsupported: Option B (\"2022\") is not supported by the passage evidence and conflicts with the correct analysis."
        },
        {
          "optionLabel": "D",
          "explanation": "Contradicted / Unsupported: Option D (\"2024\") is not supported by the passage evidence and conflicts with the correct analysis."
        }
      ]
    },
    {
      "id": "ch6-p9",
      "passage": {
        "title": "Wind Turbine Capacity Factors by Hub Height",
        "text": "Meteorologists measured annual energy output from utility-scale wind turbines across four hub height specifications."
      },
      "dataFigure": {
        "title": "Wind Turbine Output by Hub Height",
        "headers": [
          "Hub Height (m)",
          "Mean Wind Velocity (m/s)",
          "Annual Capacity Factor (%)",
          "Levelized Cost (/MWh)"
        ],
        "rows": [
          [
            "80",
            "6.8",
            "32.5%",
            "44"
          ],
          [
            "100",
            "7.4",
            "38.2%",
            "39"
          ],
          [
            "120",
            "8.1",
            "43.7%",
            "$35"
          ],
          [
            "140",
            "8.6",
            "47.1%",
            "$34"
          ]
        ]
      },
      "questionNumber": 9,
      "label": "PRACTICE QUESTION 9 — WIND TURBINE CAPACITY FACTORS BY HUB HEIGHT",
      "prompt": "Which conclusion is most directly supported by the wind turbine data?",
      "options": [
        {
          "label": "A",
          "text": "The Environmental Program consistently maintained higher participation than the Cultural Program."
        },
        {
          "label": "B",
          "text": "The Cultural Program experienced continuous declines throughout the four-year period."
        },
        {
          "label": "C",
          "text": "The Environmental Program started with lower participation than the Cultural Program but achieved faster overall growth and eventually surpassed it."
        },
        {
          "label": "D",
          "text": "Both programs experienced identical annual growth rates."
        }
      ],
      "correctAnswer": "C",
      "correctAnswerIndex": 2,
      "whyCorrect": "In 2021, Environmental started lower (200 vs 260). Environmental grew by +220 overall (+110%) to reach 420, whereas Cultural grew by +110 overall (+42%) to reach 370. Environmental surpassed Cultural in 2023.",
      "whyCorrectTitle": "Why Option C is Correct:",
      "passageSupport": "\"Meteorologists measured annual energy output from utility-scale wind turbines across four hub height specifications.\"",
      "eliminationShortcut": "Eliminate any choice that confuses correlation with causation or misinterprets the graph axes and table units.",
      "distractorExplanations": [
        {
          "optionLabel": "A",
          "explanation": "Empirical mismatch: Option A (\"The Environmental Program consistently maintained higher participation than the Cultural Program.\") contradicts the specific data values or misrepresents the empirical trends shown in the figure."
        },
        {
          "optionLabel": "B",
          "explanation": "Empirical mismatch: Option B (\"The Cultural Program experienced continuous declines throughout the four-year period.\") contradicts the specific data values or misrepresents the empirical trends shown in the figure."
        },
        {
          "optionLabel": "D",
          "explanation": "Empirical mismatch: Option D (\"Both programs experienced identical annual growth rates.\") contradicts the specific data values or misrepresents the empirical trends shown in the figure."
        }
      ]
    },
    {
      "id": "ch6-p10",
      "passage": {
        "title": "Industrial Heat Pump Thermodynamic Efficiency",
        "text": "Mechanical engineers compared commercial high-temperature heat pumps against traditional natural gas boilers."
      },
      "dataFigure": {
        "title": "Heat Pump Coefficient of Performance (COP)",
        "headers": [
          "System Model",
          "Temperature Lift (°C)",
          "COP Rating",
          "Annual Energy Savings (%)"
        ],
        "rows": [
          [
            "Model Alpha",
            "30°C",
            "4.2",
            "52%"
          ],
          [
            "Model Beta",
            "50°C",
            "3.4",
            "41%"
          ],
          [
            "Model Gamma",
            "70°C",
            "2.7",
            "33%"
          ],
          [
            "Model Delta",
            "90°C",
            "2.1",
            "24%"
          ]
        ]
      },
      "questionNumber": 10,
      "label": "PRACTICE QUESTION 10 — INDUSTRIAL HEAT PUMP THERMODYNAMIC EFFICIENCY",
      "prompt": "Which statement accurately describes the relationship between temperature lift and system coefficient of performance (COP)?",
      "options": [
        {
          "label": "A",
          "text": "The claim is supported because participation in both programs increased in every consecutive year shown."
        },
        {
          "label": "B",
          "text": "The claim is unsupported because the Cultural Program experienced a decline in participation between 2022 and 2023."
        },
        {
          "label": "C",
          "text": "The claim is supported only for the Environmental Program, as the Cultural Program's total remained unchanged."
        },
        {
          "label": "D",
          "text": "The claim is unsupported because the Environmental Program had fewer participants than the Cultural Program in every year."
        }
      ],
      "correctAnswer": "A",
      "correctAnswerIndex": 0,
      "whyCorrect": "Environmental totals rose continuously (200 → 280 → 350 → 420) and Cultural totals also rose continuously (260 → 290 → 330 → 370). Neither program experienced any annual decline. Therefore, the claim that both increased throughout the period is fully supported.",
      "whyCorrectTitle": "Why Option A is Correct:",
      "passageSupport": "\"Mechanical engineers compared commercial high-temperature heat pumps against traditional natural gas boilers.\"",
      "eliminationShortcut": "Pinpoint the exact agreement/disagreement boundary: eliminate options that overstate divergence or ignore shared premises.",
      "distractorExplanations": [
        {
          "optionLabel": "B",
          "explanation": "Synthesis error: Option B (\"The claim is unsupported because the Cultural Program experienced a decline in participation between 2022 and 2023.\") mischaracterizes the relationship between the two perspectives or attributes an unstated stance to the author."
        },
        {
          "optionLabel": "C",
          "explanation": "Synthesis error: Option C (\"The claim is supported only for the Environmental Program, as the Cultural Program's total remained unchanged.\") mischaracterizes the relationship between the two perspectives or attributes an unstated stance to the author."
        },
        {
          "optionLabel": "D",
          "explanation": "Synthesis error: Option D (\"The claim is unsupported because the Environmental Program had fewer participants than the Cultural Program in every year.\") mischaracterizes the relationship between the two perspectives or attributes an unstated stance to the author."
        }
      ]
    }
  ]
};

export const READING_CH6_BLOCK_4: ReadingModule = {
  "moduleNumber": 4,
  "id": "reading-ch6-block4",
  "chapterTitle": "CHAPTER 6 — DATA & INFORMATIONAL READING",
  "moduleTitle": "TEXT-AND-DATA INTEGRATION",
  "endLabel": "MODULE COMPLETE",
  "sections": [
    {
      "id": "ch6-b4-sec0",
      "sectionTitle": "INTRODUCTION TO INTEGRATING TEXT AND DATA",
      "content": [
        "Advanced data questions require evaluating how quantitative evidence relates to verbal claims in the passage."
      ]
    },
    {
      "id": "ch6-b4-sec36",
      "sectionNumber": "36",
      "sectionTitle": "CLAIM → DATA CONNECTION",
      "content": [
        "Locate the specific authorial claim in the text first, then examine the table or chart for relevant evidence. Focus on: **Passage Claim → Relevant Data → Relationship**."
      ]
    },
    {
      "id": "ch6-b4-sec37",
      "sectionNumber": "37",
      "sectionTitle": "DIRECT SUPPORT",
      "content": [
        "Data directly supports a claim when the numbers confirm the direction, scale, or trend described in the text."
      ]
    },
    {
      "id": "ch6-b4-sec38",
      "sectionNumber": "38",
      "sectionTitle": "PARTIAL SUPPORT",
      "content": [
        "Data provides partial support when it confirms a trend for some subgroups but fails or reverses for others."
      ]
    },
    {
      "id": "ch6-b4-sec39",
      "sectionNumber": "39",
      "sectionTitle": "QUALIFICATION",
      "content": [
        "Data qualifies a claim when it demonstrates that a general trend holds true but contains clear, unmentioned exceptions."
      ]
    },
    {
      "id": "ch6-b4-sec40",
      "sectionNumber": "40",
      "sectionTitle": "DATA CAN COMPLICATE A CLAIM",
      "content": [
        "Data complicates a claim when it introduces variables or anomalies that restrict the generalizability of the author's argument."
      ]
    },
    {
      "id": "ch6-b4-sec41",
      "sectionNumber": "41",
      "sectionTitle": "CONTRADICTION",
      "content": [
        "A direct contradiction occurs when empirical data shows a trend opposite to the author's verbal assertion."
      ]
    },
    {
      "id": "ch6-b4-sec42",
      "sectionNumber": "42",
      "sectionTitle": "TEXT-AND-DATA QUESTIONS ARE RELATIONSHIP QUESTIONS",
      "content": [
        "Evaluate text and data together as mutually reinforcing or bounding sources rather than isolated facts."
      ]
    },
    {
      "id": "ch6-b4-sec43",
      "sectionNumber": "43",
      "sectionTitle": "THE SCOPE TEST",
      "content": [
        "Match the scope of the option to the data: universal claims ('all', 'always') require 100% data alignment; qualified claims ('generally', 'most') accommodate exceptions."
      ]
    },
    {
      "id": "ch6-b4-sec44",
      "sectionNumber": "44",
      "sectionTitle": "THE DATA-TO-WORDING TRANSLATION METHOD",
      "content": [
        "Translate raw numerical patterns into a descriptive sentence before evaluating the answer choices to ensure accuracy."
      ]
    },
    {
      "id": "ch6-b4-sec47",
      "sectionNumber": "47",
      "sectionTitle": "WORKED CASE STUDY — GREEN-SPACE ACCESSIBILITY",
      "content": [
        "Analyze green-space accessibility and community usage patterns across urban neighborhoods."
      ],
      "questions": [
        {
          "id": "ch6-w4",
          "passage": {
            "title": "Agricultural Micro-Irrigation & Water Conservation",
            "text": "Agronomists monitored water application efficiency and crop yield for three irrigation technologies across arid fruit orchards."
          },
          "dataFigure": {
            "title": "Irrigation Methods in Arid Citrus Orchards",
            "headers": [
              "Irrigation Method",
              "Water Applied (m³/ha)",
              "Application Efficiency",
              "Crop Yield (t/ha)"
            ],
            "rows": [
              [
                "Flood Basin",
                "8,200",
                "52%",
                "24.5"
              ],
              [
                "Overhead Sprinkler",
                "6,100",
                "71%",
                "28.2"
              ],
              [
                "Subsurface Drip",
                "4,300",
                "93%",
                "31.8"
              ]
            ]
          },
          "questionNumber": 4,
          "label": "WORKED EXAMPLE 4 — AGRICULTURAL MICRO-IRRIGATION & WATER CONSERVATION",
          "prompt": "Which irrigation system achieved the highest water application efficiency rating?",
          "options": [
            {
              "label": "A",
              "text": "The neighborhood that added the greatest area of green space experienced the largest increase in weekly park use."
            },
            {
              "label": "B",
              "text": "Neighborhoods with higher percentages of residents living within a 10-minute walk generally experienced larger increases in weekly park use."
            },
            {
              "label": "C",
              "text": "Every neighborhood added an identical amount of green space."
            },
            {
              "label": "D",
              "text": "Green-space expansions produced identical increases in park use across all four neighborhoods."
            }
          ],
          "correctAnswer": "B",
          "correctAnswerIndex": 1,
          "whyCorrect": "Comparing accessibility percentages to usage growth shows a positive relationship: Elmhurst (74% walk / +24% use), Briar (61% / +19%), Carden (35% / +7%), Alder (22% / +4%). Higher walking accessibility corresponds to greater usage increases.",
          "whyCorrectTitle": "Why Option B is Correct:",
          "passageSupport": "\"Agronomists monitored water application efficiency and crop yield for three irrigation technologies across arid fruit orchards.\"",
          "eliminationShortcut": "Eliminate options containing extreme absolutes and choose the option with 100% direct textual proof.",
          "distractorExplanations": [
            {
              "optionLabel": "A",
              "explanation": "Contradicted / Unsupported: Option A (\"The neighborhood that added the greatest area of green space experienced the largest increase in weekly park use.\") is not supported by the passage evidence and conflicts with the correct analysis."
            },
            {
              "optionLabel": "C",
              "explanation": "Contradicted / Unsupported: Option C (\"Every neighborhood added an identical amount of green space.\") is not supported by the passage evidence and conflicts with the correct analysis."
            },
            {
              "optionLabel": "D",
              "explanation": "Extreme language trap: Option D uses absolute wording (\"Green-space expansions produced identical increases in park use across all four neighborhoods.\") that exceeds the nuanced, qualified claims made in the passage."
            }
          ]
        }
      ]
    },
    {
      "id": "ch6-b4-sec48",
      "sectionNumber": "48",
      "sectionTitle": "THE ELITE PRINCIPLE",
      "content": [
        "The correct option must accurately describe the precise relationship between the author's claim and the quantitative evidence."
      ]
    },
    {
      "id": "ch6-b4-sec49",
      "sectionNumber": "49",
      "sectionTitle": "CHAPTER TAKEAWAY & CORE PRINCIPLES",
      "content": [
        "Execution method: **Read Claim → Identify Relevant Data → Translate Data into Words → Compare → Classify Relationship**."
      ]
    }
  ],
  "practiceQuestions": [
    {
      "id": "ch6-p11",
      "passage": {
        "title": "Drought-Tolerant Legume Symbiosis Assays",
        "text": "Soil microbiologists recorded nodulation rates and biomass production in chickpea cultivars inoculated with drought-tolerant rhizobacteria."
      },
      "dataFigure": {
        "title": "Chickpea Inoculation Performance Under Water Deficit",
        "headers": [
          "Cultivar",
          "Root Nodules / Plant",
          "Nitrogen Fixed (kg/ha)",
          "Total Dry Biomass (g)"
        ],
        "rows": [
          [
            "Cultivar A",
            "18",
            "42",
            "115"
          ],
          [
            "Cultivar B",
            "34",
            "78",
            "162"
          ],
          [
            "Cultivar C",
            "26",
            "61",
            "138"
          ]
        ]
      },
      "questionNumber": 11,
      "label": "PRACTICE QUESTION 11 — DROUGHT-TOLERANT LEGUME SYMBIOSIS ASSAYS",
      "prompt": "Which statement is best supported by the cultivar comparison table?",
      "options": [
        {
          "label": "A",
          "text": "Alder added 18 hectares of green space and recorded a 4% increase in park use."
        },
        {
          "label": "B",
          "text": "Briar added 9 hectares of green space and recorded a 19% increase in park use."
        },
        {
          "label": "C",
          "text": "Elmhurst added only 6 hectares of green space but achieved the highest walking accessibility (74%) and the largest increase in park use (+24%)."
        },
        {
          "label": "D",
          "text": "Carden added 14 hectares of green space and recorded a 7% increase in park use."
        }
      ],
      "correctAnswer": "C",
      "correctAnswerIndex": 2,
      "whyCorrect": "Kaur contends that a smaller, highly accessible park can generate more activity than a larger, less accessible one. Elmhurst exemplifies this principle directly: despite adding the smallest land area (6 ha), its high walking proximity (74%) yielded the highest activity increase (+24%).",
      "whyCorrectTitle": "Why Option C is Correct:",
      "passageSupport": "\"Soil microbiologists recorded nodulation rates and biomass production in chickpea cultivars inoculated with drought-tolerant rhizobacteria.\"",
      "eliminationShortcut": "Eliminate any choice that confuses correlation with causation or misinterprets the graph axes and table units.",
      "distractorExplanations": [
        {
          "optionLabel": "A",
          "explanation": "Empirical mismatch: Option A (\"Alder added 18 hectares of green space and recorded a 4% increase in park use.\") contradicts the specific data values or misrepresents the empirical trends shown in the figure."
        },
        {
          "optionLabel": "B",
          "explanation": "Empirical mismatch: Option B (\"Briar added 9 hectares of green space and recorded a 19% increase in park use.\") contradicts the specific data values or misrepresents the empirical trends shown in the figure."
        },
        {
          "optionLabel": "D",
          "explanation": "Empirical mismatch: Option D (\"Carden added 14 hectares of green space and recorded a 7% increase in park use.\") contradicts the specific data values or misrepresents the empirical trends shown in the figure."
        }
      ]
    },
    {
      "id": "ch6-p12",
      "passage": {
        "title": "Cover Crop Biomass & Soil Organic Carbon Accrual",
        "text": "Soil scientists evaluated four winter cover crop mixtures over a five-year field trial to determine carbon sequestration rates."
      },
      "dataFigure": {
        "title": "Five-Year Cover Crop Soil Carbon Dynamics",
        "headers": [
          "Cover Crop Blend",
          "Annual Aboveground Biomass (t/ha)",
          "Soil Organic Carbon Gain (%)"
        ],
        "rows": [
          [
            "Cereal Rye Monoculture",
            "4.8",
            "+0.35%"
          ],
          [
            "Hairy Vetch Monoculture",
            "3.9",
            "+0.28%"
          ],
          [
            "Rye-Vetch-Radish Biculture",
            "6.2",
            "+0.64%"
          ]
        ]
      },
      "questionNumber": 12,
      "label": "PRACTICE QUESTION 12 — COVER CROP BIOMASS & SOIL ORGANIC CARBON ACCRUAL",
      "prompt": "Which cover crop mixture produced the greatest absolute increase in soil organic carbon?",
      "options": [
        {
          "label": "A",
          "text": "Public green spaces are unnecessary in modern urban planning."
        },
        {
          "label": "B",
          "text": "The total amount of green space added alone does not reliably predict how much residents will use it."
        },
        {
          "label": "C",
          "text": "Larger parks inevitably reduce community activity."
        },
        {
          "label": "D",
          "text": "Safety concerns exert no influence on park visitation rates."
        }
      ],
      "correctAnswer": "B",
      "correctAnswerIndex": 1,
      "whyCorrect": "Alder added three times as much land as Elmhurst (18 ha vs 6 ha) yet gained only +4% park use compared to Elmhurst's +24%. This confirms that total area alone does not predict visitation.",
      "whyCorrectTitle": "Why Option B is Correct:",
      "passageSupport": "\"Soil scientists evaluated four winter cover crop mixtures over a five-year field trial to determine carbon sequestration rates.\"",
      "eliminationShortcut": "Eliminate options containing extreme absolutes and choose the option with 100% direct textual proof.",
      "distractorExplanations": [
        {
          "optionLabel": "A",
          "explanation": "Contradicted / Unsupported: Option A (\"Public green spaces are unnecessary in modern urban planning.\") is not supported by the passage evidence and conflicts with the correct analysis."
        },
        {
          "optionLabel": "C",
          "explanation": "Contradicted / Unsupported: Option C (\"Larger parks inevitably reduce community activity.\") is not supported by the passage evidence and conflicts with the correct analysis."
        },
        {
          "optionLabel": "D",
          "explanation": "Contradicted / Unsupported: Option D (\"Safety concerns exert no influence on park visitation rates.\") is not supported by the passage evidence and conflicts with the correct analysis."
        }
      ]
    },
    {
      "id": "ch6-p13",
      "passage": {
        "title": "Soil Compaction & Root Penetration Resistance",
        "text": "Agricultural engineers tested tractor tire pressure configurations to evaluate soil penetration resistance at varying depths."
      },
      "dataFigure": {
        "title": "Tractor Tire Pressure and Soil Compaction (MPa)",
        "headers": [
          "Inflation Pressure",
          "Depth 10 cm",
          "Depth 25 cm",
          "Depth 40 cm"
        ],
        "rows": [
          [
            "Low (0.8 bar)",
            "1.2 MPa",
            "1.8 MPa",
            "2.1 MPa"
          ],
          [
            "Standard (1.6 bar)",
            "1.9 MPa",
            "2.7 MPa",
            "2.8 MPa"
          ],
          [
            "High (2.4 bar)",
            "2.6 MPa",
            "3.4 MPa",
            "3.2 MPa"
          ]
        ]
      },
      "questionNumber": 13,
      "label": "PRACTICE QUESTION 13 — SOIL COMPACTION & ROOT PENETRATION RESISTANCE",
      "prompt": "Which statement accurately describes the relationship between tractor tire inflation pressure and soil penetration resistance?",
      "options": [
        {
          "label": "A",
          "text": "The data contradicts the passage by proving that park area is the sole determinant of community use."
        },
        {
          "label": "B",
          "text": "The data provides quantitative evidence consistent with the passage's argument that accessibility influences the practical usage of public green spaces."
        },
        {
          "label": "C",
          "text": "The data proves conclusively that walking distance is the exclusive cause of all park visitation increases."
        },
        {
          "label": "D",
          "text": "The passage and the table address unrelated municipal policy topics."
        }
      ],
      "correctAnswer": "B",
      "correctAnswerIndex": 1,
      "whyCorrect": "The data provides quantitative support consistent with Kaur's thesis. Option C is wrong because observational data shows an association rather than proving exclusive causation.",
      "whyCorrectTitle": "Why Option B is Correct:",
      "passageSupport": "\"Agricultural engineers tested tractor tire pressure configurations to evaluate soil penetration resistance at varying depths.\"",
      "eliminationShortcut": "Pinpoint the exact agreement/disagreement boundary: eliminate options that overstate divergence or ignore shared premises.",
      "distractorExplanations": [
        {
          "optionLabel": "A",
          "explanation": "Synthesis error: Option A (\"The data contradicts the passage by proving that park area is the sole determinant of community use.\") mischaracterizes the relationship between the two perspectives or attributes an unstated stance to the author."
        },
        {
          "optionLabel": "C",
          "explanation": "Extreme language trap: Option C uses absolute wording (\"The data proves conclusively that walking distance is the exclusive cause of all park visitation increases.\") that exceeds the nuanced, qualified claims made in the passage."
        },
        {
          "optionLabel": "D",
          "explanation": "Synthesis error: Option D (\"The passage and the table address unrelated municipal policy topics.\") mischaracterizes the relationship between the two perspectives or attributes an unstated stance to the author."
        }
      ]
    }
  ]
};
