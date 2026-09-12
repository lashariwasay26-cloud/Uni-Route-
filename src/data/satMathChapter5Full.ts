import { FullSatMathChapter } from './satMathConcepts';
import { CHAPTER_5_QUESTIONS_MODULE_1 } from './satMathChapter5QuestionsPart1';
import { CHAPTER_5_QUESTIONS_MODULE_2 } from './satMathChapter5QuestionsPart2';

export const FULL_CHAPTER_5_RATIOS_AND_PERCENTAGES: FullSatMathChapter = {
  id: 'ch5',
  chapterNumber: 5,
  chapterTitle: 'Ratios, Rates, Conversions & Percentages',
  pageNumber: 215,
  quote: "Do not calculate changes and then add or subtract; let multipliers do the heavy lifting in a single, fluid step.",
  introduction: "In this chapter, we master the high-yield topics of ratios, rates, proportions, dimensional analysis, and percentages. On the Digital SAT, these concepts constitute a major component of the Problem Solving and Data Analysis domain. Rather than setting up complex, multi-stage equations, you will learn to use single-step multipliers, ratio scaling bridges, and dimensional pipelines to solve even the most intimidating problems in seconds.",
  sections: [
    {
      sectionTitle: '5.1 Ratio Allocation & Multi-Part Connections (The x-Factor)',
      fullText: "A ratio is a comparison of two or more quantities. On the SAT, ratio questions frequently involve splitting a whole into parts or joining independent ratios with a common 'bridge' element. To solve these fluidly, we introduce two critical strategies: The Multiplier Method ($x$-Factor) and Ratio Bridge Scaling.",
      bulletPoints: [
        "The x-Factor Method: If a ratio of quantities is given as $a:b:c$, do not write individual fraction equations. Instead, represent the actual quantities as $ax$, $bx$, and $cx$.",
        "The Sum Equation: The total sum of all quantities is $(a + b + c)x$. First, solve for $x$ (the multiplier), then plug it back to find any individual part instantly.",
        "Connecting Two Ratios (Bridge Scaling): When given $a:b$ and $b:c$, identify the 'bridge' variable ($b$). Find the Least Common Multiple (LCM) of its two values, scale both ratios accordingly, and merge them into a single $a:b:c$ ratio."
      ],
      tables: [
        {
          title: "Bridge Scaling & x-Factor Concept Matrix",
          headers: ["Concept", "Given Scenario", "Tutor Solution Steps"],
          rows: [
            ["Multi-Part Allocation", " सीमेंट, sand, gravel = 2:3:5. Total = 400kg", "Let parts be 2x, 3x, 5x. 10x = 400 => x = 40. Sand = 3(40) = 120kg."],
            ["Ratio Bridge Alignment", "a:b = 2:3 and b:c = 5:7", "LCM of 3 and 5 is 15. Scale a:b by 5 => 10:15. Scale b:c by 3 => 15:21. Combined: a:b:c = 10:15:21."],
            ["Part-to-Whole Ratio", "Ratio a:b is given", "Remember that total parts equal a + b. The portion of a is a / (a + b)."]
          ]
        }
      ],
      examples: [
        {
          title: "Example 1: Multi-Part Ratio Allocation",
          question: "A concrete mix contains cement, sand, and gravel in a ratio of $2:3:5$ by weight. If a construction project requires $400\\text{ kg}$ of total concrete mix, how many kilograms of sand are needed?",
          options: ["80 kg", "120 kg", "160 kg", "200 kg"],
          correctAnswer: "120 kg",
          correctIndex: 1,
          explanation: `Method 1: The x-Factor Shortcut
1. Represent the components: Cement = $2x$, Sand = $3x$, Gravel = $5x$.
2. Write the total sum equation:
   $$2x + 3x + 5x = 400$$
   $$10x = 400 \\implies x = 40$$
3. Calculate the weight of sand:
   $$\\text{Sand} = 3x = 3(40) = 120\\text{ kg}$$

Method 2: Fractional Share Method
1. The total ratio units are $2 + 3 + 5 = 10$.
2. Sand represents $\\frac{3}{10}$ of the total weight.
3. Sand needed:
   $$\\text{Sand} = \\frac{3}{10} \\times 400 = 120\\text{ kg}$$

Correct Answer: B`
        },
        {
          title: "Example 2: Connecting Two Ratios",
          question: "If $a:b = 2:3$ and $b:c = 5:7$, find the ratio $a:c$.",
          options: ["2:7", "10:15", "10:21", "15:21"],
          correctAnswer: "10:21",
          correctIndex: 2,
          explanation: `Method 1: Bridge Scale Alignment
1. Identify the common 'bridge' variable, which is $b$.
2. The values of $b$ are $3$ (in the first ratio) and $5$ (in the second ratio).
3. The Least Common Multiple (LCM) of $3$ and $5$ is $15$.
4. Multiply $a:b$ ($2:3$) by $5$ to scale $b$ to $15$:
   $$a:b = (2 \\times 5) : (3 \\times 5) = 10:15$$
5. Multiply $b:c$ ($5:7$) by $3$ to scale $b$ to $15$:
   $$b:c = (5 \\times 3) : (7 \\times 3) = 15:21$$
6. Combine the ratios:
   $$a:b:c = 10:15:21$$
7. Extract the ratio of $a$ to $c$:
   $$a:c = 10:21$$

Method 2: Fractional Multiplication Shortcut
1. Write the ratios as fractions:
   $$\\frac{a}{b} = \\frac{2}{3}, \\quad \\frac{b}{c} = \\frac{5}{7}$$
2. Multiply the two fractions together so that $b$ cancels out:
   $$\\frac{a}{c} = \\frac{a}{b} \\times \\frac{b}{c} = \\frac{2}{3} \\times \\frac{5}{7} = \\frac{10}{21}$$

Correct Answer: C`
        }
      ]
    },
    {
      sectionTitle: "5.2 Conversions & Dimensional Analysis (Area, Volume & Multi-Step Rates)",
      fullText: "A dimensional analysis pipeline is the single safest way to handle conversions without losing track of whether to multiply or divide. The secret is treating conversion factors as fractions equal to $1$, then placing them sequentially so that unwanted units cancel diagonally. Furthermore, you must master how area and volume ratios scale relative to linear dimensions.",
      bulletPoints: [
        "Unit Cancellation Pipeline: Arrange conversions so that unwanted units cancel diagonally. For example, to convert gallons/minute to quarts/hour, multiply by quarts/gallon (gallons cancel) and minutes/hour (minutes cancel).",
        "The Area & Volume Scaling Rule: If the linear conversion factor is $L$, the area conversion factor is $L^2$, and the volume conversion factor is $L^3$.",
        "Example of Scaling: If $1\\text{ yd} = 3\\text{ ft}$, then $1\\text{ yd}^2 = (3\\text{ ft})^2 = 9\\text{ ft}^2$, and $1\\text{ yd}^3 = (3\\text{ ft})^3 = 27\\text{ ft}^3$. This is a critical SAT trap!"
      ],
      tables: [
        {
          title: "Linear, Area & Volume Scaling Ratios",
          headers: ["Dimension Type", "Linear Scaling Factor", "Formulated Area / Volume Scaling Factor"],
          rows: [
            ["Linear Dimensions", "1 inch = 2.54 cm", "1 in = 2.54 cm"],
            ["Area Dimensions", "1 inch = 2.54 cm", "1 sq in = (2.54)² = 6.4516 sq cm"],
            ["Volume Dimensions", "1 inch = 2.54 cm", "1 cubic in = (2.54)³ ≈ 16.387 cubic cm"],
            ["Map Scale Area", "1 cm = 4 km", "1 sq cm = 16 sq km (Square the scale!)"]
          ]
        }
      ],
      examples: [
        {
          title: "Example 3: Multi-Step Dimensional Analysis",
          question: "A pump moves water at a rate of $18\\text{ gallons per minute}$. What is this rate in $q\\text{uarts per hour}$? ($1\\text{ gallon} = 4\\text{ quarts}$)",
          options: ["1,080 qt/hr", "2,160 qt/hr", "4,320 qt/hr", "5,400 qt/hr"],
          correctAnswer: "4,320 qt/hr",
          correctIndex: 2,
          explanation: `Method 1: Dimensional Analysis Pipeline
1. Align conversion factors so that unwanted units cancel diagonally:
   $$\\frac{18\\text{ gal}}{1\\text{ min}} \\times \\frac{4\\text{ qt}}{1\\text{ gal}} \\times \\frac{60\\text{ min}}{1\\text{ hr}}$$
2. Cancel 'gal' and 'min' diagonally:
   $$18 \\times 4 \\times 60\\text{ qt/hr}$$
3. Perform the multiplication:
   $$18 \\times 4 = 72 \\implies 72 \\times 60 = 4,320\\text{ qt/hr}$$

Correct Answer: C`
        },
        {
          title: "Example 4: Area Dimensional Analysis",
          question: "A map has a scale of $1\\text{ cm} = 4\\text{ km}$. If a regional park covers $5\\text{ cm}^2$ on the map, what is the actual area in square kilometers?",
          options: ["20 km²", "40 km²", "80 km²", "100 km²"],
          correctAnswer: "80 km²",
          correctIndex: 2,
          explanation: `Method 1: Squared Scale Rule
1. Find the area scaling factor by squaring the linear scaling factor:
   $$\\text{Linear Scale: } 1\\text{ cm} = 4\\text{ km}$$
   $$\\text{Area Scale: } (1\\text{ cm})^2 = (4\\text{ km})^2 \\implies 1\\text{ cm}^2 = 16\\text{ km}^2$$
2. Convert the map area using the area scale:
   $$\\text{Actual Area} = 5\\text{ cm}^2 \\times 16\\text{ km}^2\\text{/cm}^2 = 80\\text{ km}^2$$

Tutor Trap Alert: A common student mistake is to multiply map area by the linear scale ($5 \\times 4 = 20$). Remember that area scales with the **square** of the linear ratio!

Correct Answer: C`
        },
        {
          title: "Example 5: Scale Drawing Conversion",
          question: "Scale drawing A uses $1\\text{ cm} = 5\\text{ m}$. Scale drawing B uses $1\\text{ cm} = 2\\text{ m}$. A wall measures $6\\text{ cm}$ on drawing A. How long is the representation of the wall on drawing B?",
          options: ["12 cm", "14 cm", "15 cm", "18 cm"],
          correctAnswer: "15 cm",
          correctIndex: 2,
          explanation: `Method 1: Two-Step Actual-Length Route
1. Calculate actual length using Drawing A's scale:
   $$\\text{Actual Length} = 6\\text{ cm} \\times 5\\text{ m/cm} = 30\\text{ meters}$$
2. Convert this actual length to Drawing B's scale:
   $$\\text{Length on Drawing B} = \\frac{30\\text{ m}}{2\\text{ m/cm}} = 15\\text{ cm}$$

Method 2: Scale-Ratio Direct Pipeline
1. Combine the scales into a single conversion factor:
   $$\\text{Scale Factor} = \\frac{5\\text{ m/cm (Drawing A)}}{2\\text{ m/cm (Drawing B)}} = 2.5$$
2. Multiply Drawing A length by the factor:
   $$\\text{Drawing B Length} = 6\\text{ cm} \\times 2.5 = 15\\text{ cm}$$

Correct Answer: C`
        }
      ]
    },
    {
      sectionTitle: "5.3 Combined Rates & Cooperative Work Systems",
      fullText: "When two or more machines, workers, or pipes work together, we are dealing with 'cooperative rate problems.' The ultimate rule is: NEVER add completion times together; always add their constant rates of production.",
      bulletPoints: [
        "Cooperative Work Rates: Work rate is Work / Time. If Machine A does a job in $T_1$ and B does it in $T_2$, their individual rates are $1/T_1$ and $1/T_2$.",
        "The Combined Rate Formula: Rate$_{combined} = Rate_1 + Rate_2$. Total time taken is Total Work / Combined Rate.",
        "Inverse Proportions: Work = Workers × Time. If the number of workers changes, the time changes inversely so that the product (total worker-hours) remains perfectly constant."
      ],
      tables: [
        {
          title: "Combined Rates & Proportions Guideline Matrix",
          headers: ["Problem Type", "Core Formula", "Mental Shortcut Rule"],
          rows: [
            ["Combined Work (Same Job)", "Combined Rate = 1/T₁ + 1/T₂", "Time taken is (T₁ · T₂) / (T₁ + T₂)"],
            ["Inverse Workers / Time", "W₁ · T₁ = W₂ · T₂", "Double the workers, half the time. Total worker-hours are constant."]
          ]
        }
      ],
      examples: [
        {
          title: "Example 6: Combined Rates (Work Problem)",
          question: "Printer A prints $200\\text{ pages}$ in $8\\text{ minutes}$. Printer B prints $200\\text{ pages}$ in $5\\text{ minutes}$. Working simultaneously at their respective constant rates, how many minutes will it take both printers to print a total of $1,300\\text{ pages}$?",
          options: ["15 minutes", "18 minutes", "20 minutes", "22 minutes"],
          correctAnswer: "20 minutes",
          correctIndex: 2,
          explanation: `Method 1: Speed-Rate Combination
1. Find individual printer rates:
   $$\\text{Rate}_A = \\frac{200\\text{ pages}}{8\\text{ min}} = 25\\text{ pages/min}$$
   $$\\text{Rate}_B = \\frac{200\\text{ pages}}{5\\text{ min}} = 40\\text{ pages/min}$$
2. Calculate the combined rate:
   $$\\text{Combined Rate} = 25 + 40 = 65\\text{ pages/min}$$
3. Calculate the time to print 1,300 pages:
   $$\\text{Time} = \\frac{\\text{Total Pages}}{\\text{Combined Rate}} = \\frac{1300}{65} = 20\\text{ minutes}$$

Correct Answer: C`
        },
        {
          title: "Example 7: Inverse Proportions",
          question: "If $6$ workers complete a job in $8\\text{ hours}$, how many hours will $4\\text{ workers}$ take at the same rate?",
          options: ["10 hours", "12 hours", "14 hours", "16 hours"],
          correctAnswer: "12 hours",
          correctIndex: 1,
          explanation: `Method 1: Total Worker-Hours Invariance
1. Calculate the total workload in worker-hours:
   $$\\text{Total Work} = 6\\text{ workers} \\times 8\\text{ hours} = 48\\text{ worker-hours}$$
2. Solve for the new time with $4$ workers:
   $$\\text{New Time} = \\frac{48\\text{ worker-hours}}{4\\text{ workers}} = 12\\text{ hours}$$

Method 2: Ratio Reciprocal Shortcut
1. The ratio of workers is $\\frac{4}{6} = \\frac{2}{3}$.
2. Because workers and time are inversely proportional, the time scales by the reciprocal ratio ($\\frac{3}{2}$):
   $$\\text{New Time} = 8\\text{ hours} \\times \\frac{3}{2} = 12\\text{ hours}$$

Correct Answer: B`
        }
      ]
    },
    {
      sectionTitle: "5.4 Single-Step Percentages, Reverse Percentages & Multipliers",
      fullText: "Many SAT students waste valuable time by first finding the absolute change (e.g. calculating tax or discount) and then adding or subtracting it from the original value. To gain a massive speed advantage, you must use single-step multipliers. Furthermore, we must master the reverse percentage technique to trace back to original values after increases or decreases.",
      bulletPoints: [
        "Single-Step Multiplier Rule: For a $p\\%$ increase, multiply by $(1 + p/100)$. For a $p\\%$ decrease, multiply by $(1 - p/100)$.",
        "Reverse Percentages: If a final value $V$ is given after a $p\\%$ increase, the original value $P$ is found by dividing by the multiplier: $P = V / (1 + p/100)$.",
        "Percent Asymmetry: If $A$ is $25\\%$ greater than $B$, $B$ is NOT $25\\%$ less than $A$. The base changes! Let $B = 100 \\implies A = 125$. The difference relative to $A$ is $25/125 = 20\\%$."
      ],
      tables: [
        {
          title: "Percent Multipliers & Reverse Lookup Matrix",
          headers: ["Percent Change", "Growth/Decay Multiplier", "Example Scenario", "Formula to Find Original Price (P)"],
          rows: [
            ["15% Increase", "1.15", "Jacket costs $153 with tax", "P = 153 / 1.15 = $133.04"],
            ["20% Decrease", "0.80", "Discounted price is $80", "P = 80 / 0.80 = $100.00"],
            ["8% Tax Increase", "1.08", "Total including tax is $243", "P = 243 / 1.08 = $225.00"]
          ]
        }
      ],
      examples: [
        {
          title: "Example 8: Reverse Percentage Problem",
          question: "A store sells a jacket for $\$153$ after applying a $15\\%$ sales tax. What was the original price of the jacket before tax?",
          options: ["$130.00", "$133.04", "$135.50", "$140.00"],
          correctAnswer: "$133.04",
          correctIndex: 1,
          explanation: `Method 1: Reverse Multiplier Formula
1. The sales tax represents a $15\\%$ increase. The multiplier is:
   $$\\text{Multiplier} = 1 + 0.15 = 1.15$$
2. Let the original price be $P$. Set up the equation:
   $$P \\times 1.15 = 153$$
3. Solve for $P$ by dividing:
   $$P = \\frac{153}{1.15} = \\$133.04$$

Tutor Trap Avoided: Never calculate $15\\%$ of $\$153$ and subtract it ($153 - 22.95 = 130.05$). The tax was applied to the original pre-tax price, not the post-tax total!

Correct Answer: B`
        },
        {
          title: "Example 9: Percent Change",
          question: "A shelter had $80$ animals in January. By June, the population increased to $116$. What was the percentage increase in animal population?",
          options: ["36%", "40%", "45%", "50%"],
          correctAnswer: "45%",
          correctIndex: 2,
          explanation: `Method 1: Absolute Change Formula
1. Calculate the change in population:
   $$\\text{Change} = 116 - 80 = 36$$
2. Divide by the initial value (January base):
   $$\\text{Percent Increase} = \\frac{\\text{Change}}{\\text{Original}} \\times 100$$
   $$\\text{Percent Increase} = \\frac{36}{80} \\times 100 = 45\\%$$

Method 2: Multiplier Division
1. Divide final population by original:
   $$\\text{Multiplier} = \\frac{116}{80} = 1.45$$
2. Since $1.45 = 1 + 0.45$, this is exactly a $45\\%$ increase.

Correct Answer: C`
        },
        {
          title: "Example 10: Percent Asymmetry",
          question: "If $A$ is $25\\%$ greater than $B$, by what percent is $B$ less than $A$?",
          options: ["15%", "20%", "25%", "30%"],
          correctAnswer: "20%",
          correctIndex: 1,
          explanation: `Method 1: Concrete Number Substitution (100 Base)
1. Pick a simple base value for $B$ (since $A$ is defined relative to $B$):
   $$\\text{Let } B = 100$$
2. Calculate $A$ (which is $25\\%$ greater than $B$):
   $$A = 100 \\times (1 + 0.25) = 125$$
3. Find by what percent $B$ is less than $A$. The base of comparison is $A$ ($125$):
   $$\\text{Percent Less} = \\frac{\\text{Difference}}{\\text{Comparing Base (A)}} \\times 100$$
   $$\\text{Percent Less} = \\frac{125 - 100}{125} \\times 100 = \\frac{25}{125} \\times 100$$
4. Compute:
   $$\\frac{1}{5} \\times 100 = 20\\%$$

Correct Answer: B`
        }
      ]
    },
    {
      sectionTitle: "5.5 Successive Percent Changes, Asymmetry & Weighted Averages",
      fullText: "The SAT loves testing multi-step percentage changes (e.g. compounding interest, successive store discounts, or mixture adjustments). These situations are highly prone to calculation errors if attempted step-by-step. By compounding multipliers sequentially and tracking constant ratios, we bypass all algebra.",
      bulletPoints: [
        "Successive Percent Changes: Never add or subtract consecutive percentages together. A $20\\%$ discount followed by a $15\\%$ discount is NOT a $35\\%$ discount. Instead, compound the multipliers sequentially: V_final = V_initial × 0.80 × 0.85 = 0.68 × V_initial (representing a net 32% discount).",
        "Weighted Percent Averages: Overall score is Total Correct / Total Questions. Do not average the percentages directly if the categories have different weight counts.",
        "Mixture Evaporation Shortcut: In evaporation or dilution, the weight of the active ingredient (e.g., salt, acid) remains absolutely constant. Solve for the new total solution weight by setting the active weight equal to the new percentage."
      ],
      tables: [
        {
          title: "Compounding & Mixtures Matrix",
          headers: ["Problem Archetype", "The Shortcut Method", "Formulated Multiplier Example"],
          rows: [
            ["Successive Discounts", "V_final = P · (1 - r₁) · (1 - r₂)", "P · 0.80 · 0.85 = 0.68P (32% net discount)"],
            ["Area Percent Increase", "Side multiplier is S. Area scales by S²", "Side +20% => Multiplier is 1.20. Area = (1.20)² = 1.44 (+44%)"],
            ["Weighted Percentage", "Combined % = Total Checked / Total Count", "80% on 40 Qs + 90% on 60 Qs => (32+54)/100 = 86%"]
          ]
        }
      ],
      examples: [
        {
          title: "Example 11: Successive Percent Discounts",
          question: "The price of an item is discounted by $20\\%$. The following week, the discounted price is reduced by an additional $15\\%$. What single percentage discount is equivalent to these two successive discounts?",
          options: ["30%", "32%", "35%", "38%"],
          correctAnswer: "32%",
          correctIndex: 1,
          explanation: `Method 1: Chained Multipliers
1. Write the multipliers for each successive change:
   - First discount of $20\\% \\implies 1 - 0.20 = 0.80$
   - Second discount of $15\\% \\implies 1 - 0.15 = 0.85$
2. Multiply them sequentially:
   $$\\text{Combined Multiplier} = 0.80 \\times 0.85 = 0.68$$
3. Subtract from 1 to find the net discount:
   $$\\text{Net Discount} = 1 - 0.68 = 0.32 = 32\\%$$

Method 2: Base 100 substitution
1. Let the original price of the item be $\$100$.
2. Week 1 discount ($20\\%$) makes the price $\$80$.
3. Week 2 discount ($15\\%$) reduces $\$80$:
   $$\\text{Discount} = 80 \\times 0.15 = 12 \\implies \\text{New Price} = 80 - 12 = \\$68$$
4. Overall discount from $\$100$ to $\$68$ is:
   $$100 - 68 = 32\\%$$

Correct Answer: B`
        },
        {
          title: "Example 12: Mixture/Evaporation Problem",
          question: "A $500\\text{ g}$ solution is $12\\%$ salt by weight. How many grams of water must evaporate to leave a $20\\%$ salt solution?",
          options: ["100 grams", "150 grams", "200 grams", "250 grams"],
          correctAnswer: "200 grams",
          correctIndex: 2,
          explanation: `Method 1: Active ingredient Invariance
1. Calculate the constant weight of salt:
   $$\\text{Salt Mass} = 500\\text{ g} \\times 0.12 = 60\\text{ g}$$
2. Set up the target concentration equation for the new solution weight ($W_{\\text{new}}$):
   $$60\\text{ g} = 0.20 \\times W_{\\text{new}}$$
3. Solve for $W_{\\text{new}}$:
   $$W_{\\text{new}} = \\frac{60}{0.20} = 300\\text{ g}$$
4. Calculate the evaporated water:
   $$\\text{Water Evaporated} = \\text{Initial} - \\text{New} = 500 - 300 = 200\\text{ g}$$

Correct Answer: C`
        },
        {
          title: "Example 13: Area Percent Increase",
          question: "If the sides of a square are increased by $20\\%$, by what percentage does the area increase?",
          options: ["40%", "44%", "48%", "50%"],
          correctAnswer: "44%",
          correctIndex: 1,
          explanation: `Method 1: Dimensional Scaling Rule
1. The side length multiplier is $1.20$.
2. The area scales by the square of the linear multiplier:
   $$\\text{Area Multiplier} = (1.20)^2 = 1.44$$
3. Since $1.44 = 1 + 0.44$, this represents exactly a $44\\%$ increase.

Method 2: Grid Substitution
1. Let the original side length of the square be $10$.
   $$\\text{Original Area} = 10^2 = 100$$
2. Increase the side length by $20\\%$:
   $$\\text{New Side Length} = 10 \\times 1.20 = 12$$
3. Calculate the new area:
   $$\\text{New Area} = 12^2 = 144$$
4. Compute percent increase:
   $$\\frac{144 - 100}{100} \\times 100 = 44\\%$$

Correct Answer: B`
        },
        {
          title: "Example 14: Weighted Percent Average",
          question: "A student scored $80\\%$ on a $40$-question test and $90\\%$ on a $60$-question test. What is the overall percentage score?",
          options: ["84%", "85%", "86%", "87%"],
          correctAnswer: "86%",
          correctIndex: 2,
          explanation: `Method 1: Combined Fractional Averages
1. Find total correct questions:
   $$\\text{Test 1 Correct} = 0.80 \\times 40 = 32$$
   $$\\text{Test 2 Correct} = 0.90 \\times 60 = 54$$
   $$\\text{Total Correct} = 32 + 54 = 86$$
2. Find the total number of questions:
   $$\\text{Total Questions} = 40 + 60 = 100$$
3. Calculate combined score:
   $$\\text{Overall Score} = \\frac{86}{100} = 86\\%$$

Correct Answer: C`
        },
        {
          title: "Example 15: Single Variable Percent Equation",
          question: "$30\\%$ of $N$ is $12$ greater than $20\\%$ of $N$. Find $N$.",
          options: ["100", "110", "120", "130"],
          correctAnswer: "120",
          correctIndex: 2,
          explanation: `Method 1: Simple Algebraic Setup
1. Translate the words to an equation:
   $$0.30N = 0.20N + 12$$
2. Isolate terms:
   $$0.30N - 0.20N = 12$$
   $$0.10N = 12 \\implies N = 120$$

Correct Answer: C`
        }
      ]
    }
  ],
  exerciseGroups: [
    {
      exerciseNumber: 1,
      title: 'Module 1: Easy / Medium Questions',
      description: 'Covers linear ratio subdivisions, dimensional unit cancelation pipelines, multi-step drawing scales, linear-quadratic perimeter conversions, and simple worker rates.',
      questions: CHAPTER_5_QUESTIONS_MODULE_1
    },
    {
      exerciseNumber: 2,
      title: 'Module 2: Hard Questions',
      description: 'Covers successive compounding percentages, reverse percentage lookups, percent asymmetries, salt mixture concentrations, and weighted averages.',
      questions: CHAPTER_5_QUESTIONS_MODULE_2
    }
  ]
};
