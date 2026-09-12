import { FullSatMathChapter, MathTheorySection } from './satMathConcepts';
import { CHAPTER_11_WORKED_EXAMPLES } from './satMathChapter11Examples';
import { CHAPTER_11_QUESTIONS } from './satMathChapter11Questions';

const CHAPTER_11_SECTIONS: MathTheorySection[] = [
  {
    sectionTitle: 'Section 1: The Core Philosophy & Universal 5-Step Data-Reading Method',
    fullText: `On the SAT Math section, "Reading Data" is distinct from abstract statistics. You are rarely asked to compute heavy variance equations by hand; instead, the test challenges your ability to extract precise information from visual displays, cross-examine scales and units, distinguish counts from percentages, and determine which conclusions the data mathematically support versus which claims go too far.

The Master Data-Reading Workflow:
QUESTION → DISPLAY → RELEVANT DATA → CALCULATION → CONCLUSION

The Universal 5-Step Method:
Step 1 — Read the Question Stem First:
Determine the exact mathematical target before studying the graphic. Are you asked for an absolute value, a difference, a percentage, a ratio, a trend, or a must-be-true conclusion?

Step 2 — Identify the Display Type & Structure:
Determine whether the data are represented in a two-way table, frequency table, categorical bar chart, continuous histogram, dot plot, five-number summary box plot, or two-variable scatterplot.

Step 3 — Inspect Axes, Scales, Multipliers & Units:
Always check the baseline (does the axis start at zero?), tick-mark increments, and unit labels (e.g., "in thousands", "in millions", or "in percentages"). A bar reaching 15 on an axis labeled "in thousands" represents 15,000, not 15.

Step 4 — Extract Only What You Need:
Do not perform unnecessary calculations. If a question asks for the difference between the 2021 and 2024 values, locate those two specific values and subtract ($610 - 420 = 190$). Ignore the intermediate years unless a continuous trend is asked.

Step 5 — Verify Conclusions with Strict Evidence:
Ask yourself: "Does my chosen answer follow directly and without exception from the provided data?" Do not pick an answer choice merely because it sounds like a plausible real-world fact.`,
    bulletPoints: [
      'Concept 1: Question-First Strategy: Read the question prompt before spending 30 seconds getting lost in graph details.',
      'Concept 2: Axis & Multiplier Audit: Check whether the y-axis is labeled in thousands, millions, or percentage points.',
      'Concept 3: Zero-Baseline Verification: Confirm whether bar graph and histogram axes start at zero to avoid visual scale distortion.',
      'Concept 4: Direct Extraction Shortcut: For differences, compute (Larger Value - Smaller Value) directly without calculating intermediate steps.',
      'Concept 5: Supported vs. Plausible: SAT correct answers must be mathematically proven by the data, not just logically plausible.'
    ],
    tables: [
      {
        title: 'Universal Data-Reading 5-Step Checklist',
        headers: ['Step', 'Action Item', 'SAT Student Goal'],
        rows: [
          ['Step 1', 'Read the Question First', 'Identify the exact target: count, rate, difference, or comparison.'],
          ['Step 2', 'Identify Display Type', 'Determine if data are categorical, discrete, continuous, or paired.'],
          ['Step 3', 'Check Scales & Units', 'Check axis baselines, step sizes, and multipliers (e.g. in thousands).'],
          ['Step 4', 'Extract Target Values', 'Isolate only the specific cells or points needed for the calculation.'],
          ['Step 5', 'Validate the Conclusion', 'Ensure the answer does not claim causation or unstated assumptions.']
        ]
      }
    ],
    examples: [CHAPTER_11_WORKED_EXAMPLES[0], CHAPTER_11_WORKED_EXAMPLES[7]]
  },
  {
    sectionTitle: 'Section 2: Tables, Cross-Tabulations & Frequency Tables',
    fullText: `Tables organize discrete data into rows and columns. When reading tables on the SAT, speed and precision come from instantly recognizing row categories, column headers, marginal totals, and cell intersections.

Reading Frequency Tables:
A frequency table lists distinct values in one column and the count of occurrences (f) in the second column.
- Individual observations: Each row's value occurs f times.
- Total Sample Size (n): Sum of all frequencies (n = Sum of all f).
- Mode: The value with the largest frequency.

Relative Frequency & Percentages:
Relative frequency expresses the proportion or percentage of the total data set that falls into a specific category:
Relative Frequency = Category Frequency / Total Sample Size n
Percentage = (Category Count / Total Count) × 100%

Cumulative Frequency:
The cumulative frequency for any value is the running total of all frequencies from the lowest value up to that value. It is used to quickly locate median and percentile ranks.`,
    bulletPoints: [
      'Concept 6: Table Row & Column Navigation: Locate category intersections rapidly by cross-referencing headers.',
      'Concept 7: Frequency Table Summation: The total number of observations is the sum of the frequency column (n = Sum of frequencies).',
      'Concept 8: Relative Frequency Calculation: Relative Frequency = Category Count / Total Count.',
      'Concept 9: Mode from Frequency: The mode is the value with the highest number in the frequency column.',
      'Concept 10: Cumulative Frequency: Summing frequencies from left-to-right or top-to-bottom locates the median position.'
    ],
    tables: [
      {
        title: 'Frequency vs. Relative Frequency Reference',
        headers: ['Category / Score', 'Frequency (f)', 'Relative Frequency', 'Percentage'],
        rows: [
          ['Score 50', '4', '4 / 40 = 0.100', '10.0%'],
          ['Score 60', '7', '7 / 40 = 0.175', '17.5%'],
          ['Score 70', '13', '13 / 40 = 0.325', '32.5%'],
          ['Score 80', '11', '11 / 40 = 0.275', '27.5%'],
          ['Score 90', '5', '5 / 40 = 0.125', '12.5%'],
          ['Total Sum', 'N = 40', '1.000', '100.0%']
        ]
      }
    ],
    examples: [CHAPTER_11_WORKED_EXAMPLES[2], CHAPTER_11_WORKED_EXAMPLES[8]]
  },
  {
    sectionTitle: 'Section 3: Counts vs. Percentages & The Denominator Trap',
    fullText: `One of the most heavily tested conceptual traps on the SAT is confusing raw counts with percentages (rates).

The Fundamental Difference:
- Count = Absolute number of items (for example: 80 students, 120 votes, $300 revenue).
- Percentage = Relative proportion compared to a specific base total (for example: 80 / 200 = 40%, 120 / 400 = 30%).

Why This Matters:
A group can have a larger raw count of participants while having a smaller percentage of participants if its total population is much larger.

Example:
- School A: 96 out of 240 students participate -> 96 / 240 = 40%.
- School B: 120 out of 400 students participate -> 120 / 400 = 30%.
School B has more participating students (120 > 96), but School A has a higher participation rate (40% > 30%).

The Master Denominator Rule:
Whenever a question asks "What percentage of X are Y?", the group X following the word "of" is ALWAYS the denominator:
Percentage = (Count of Y in Category X / Total Count of Category X) × 100%`,
    bulletPoints: [
      'Concept 11: Count vs. Rate Distinction: Never assume a higher raw count guarantees a higher percentage.',
      'Concept 12: The "Of" Denominator Rule: The category following "percentage of..." defines the denominator.',
      'Concept 13: Normalizing Unequal Groups: Percentages allow fair comparison across groups with different sample sizes.',
      'Concept 14: Percentage Change Formula: Percentage Change = ((New Value - Old Value) / Old Value) × 100%.',
      'Concept 15: Common SAT Denominator Trap: Dividing by the grand total when the question asks about a specific row or column subset.'
    ],
    tables: [
      {
        title: 'Count vs. Rate Comparison Matrix',
        headers: ['Metric', 'Definition', 'Example (School A vs B)', 'SAT Decision Rule'],
        rows: [
          ['Raw Count', 'Absolute quantity', 'School B (120) > School A (96)', 'Use when asked "how many".'],
          ['Percentage / Rate', 'Proportion of total', 'School A (40%) > School B (30%)', 'Use when asked "what fraction / percent".'],
          ['Percent Change', 'Growth relative to old', '(New - Old) / Old × 100%', 'Always divide by the original baseline.']
        ]
      }
    ],
    examples: [CHAPTER_11_WORKED_EXAMPLES[1]]
  },
  {
    sectionTitle: 'Section 4: Bar Graphs vs. Histograms & Numerical Intervals',
    fullText: `While bar graphs and histograms appear similar at first glance, they serve completely different statistical functions.

Bar Graphs:
- Display categorical data (e.g., Debate Club, Science Club, Art Club).
- The categories on the horizontal axis are separate and distinct.
- Bars have intentional gaps between them to emphasize discrete categories.
- The order of categories is arbitrary.

Histograms:
- Display continuous numerical data grouped into adjacent intervals (bins).
- The horizontal axis is a true number line with equal-width intervals (e.g., 40–49, 50–59, 60–69).
- Bars touch each other because intervals are continuous.
- Bar height indicates the frequency of observations falling inside that interval.

Histogram Interpretation Rules:
1. Tallest Bar = Interval with the greatest number of observations (the modal interval).
2. Total Count (N) = Sum of all bar heights: N = Sum of heights.
3. Exact Data Values Cannot Be Read: A bar spanning 60–69 with height 15 tells you there are 15 observations in that range, but you cannot know if any individual score was 60, 65, or 69.`,
    bulletPoints: [
      'Concept 16: Categorical vs. Quantitative: Bar graphs show separate categories; histograms show continuous numerical bins.',
      'Concept 17: Touching Bars in Histograms: Histogram bars touch to reflect continuous numerical scales.',
      'Concept 18: Modal Interval: The tallest bar in a histogram represents the interval containing the most data points.',
      'Concept 19: Total Sample Size: Summing the heights of all histogram bars equals the total number of observations N.',
      'Concept 20: Information Boundary: Histograms show grouped counts, not individual exact data values.'
    ],
    tables: [
      {
        title: 'Bar Graph vs. Histogram Comparison',
        headers: ['Feature', 'Bar Graph', 'Histogram'],
        rows: [
          ['Data Type', 'Categorical (clubs, colors, cities)', 'Quantitative / Continuous numerical (scores, ages, times)'],
          ['Horizontal Axis', 'Discrete category labels', 'Continuous numerical intervals (bins)'],
          ['Bar Spacing', 'Separated by visible gaps', 'Adjacent (bars touch)'],
          ['Bar Height Meaning', 'Count or value for that category', 'Frequency of observations within that numerical interval']
        ]
      }
    ],
    examples: [CHAPTER_11_WORKED_EXAMPLES[3]]
  },
  {
    sectionTitle: 'Section 5: Dot Plots, Box Plots & The Five-Number Summary',
    fullText: `Dot Plots:
A dot plot places a dot for each individual observation above a number line.
- Every dot = exactly one data point.
- Mode = The value with the tallest stack of dots.
- Median = The middle dot when counting through the total number of dots.
- Range = Position of highest dot minus position of lowest dot.

Box Plots & The Five-Number Summary:
A box plot visualizes a distribution using five landmark values:
1. Minimum: The lowest whisker endpoint.
2. First Quartile (Q1): Left edge of the central box (25th percentile).
3. Median (Q2): Vertical line inside the box (50th percentile / center).
4. Third Quartile (Q3): Right edge of the central box (75th percentile).
5. Maximum: The highest whisker endpoint.

Key Spread Formulas for Box Plots:
Overall Range = Maximum - Minimum
Interquartile Range (IQR) = Q3 - Q1

The 25% Rule:
Each section of a box plot contains exactly 25% of the data:
- Min to Q1: 25% of observations.
- Q1 to Median: 25% of observations.
- Median to Q3: 25% of observations.
- Q3 to Max: 25% of observations.
- Central Box (Q1 to Q3): Exactly 50% of observations (the middle 50%).`,
    bulletPoints: [
      'Concept 21: Dot Plot Frequency: Stacks of dots display exact observations and discrete clusters.',
      'Concept 22: The Five-Number Summary: [Min, Q1, Median, Q3, Max] partition data into four equal quarters (25% each).',
      'Concept 23: Interquartile Range (IQR): IQR = Q3 - Q1, representing the middle 50% spread.',
      'Concept 24: Overall Range: Range = Max - Min, representing the total spread.',
      'Concept 25: Box Width Interpretation: A wider central box indicates a greater IQR and more variability in the middle 50%.'
    ],
    tables: [
      {
        title: 'Box Plot Five-Number Summary Reference',
        headers: ['Component', 'Visual Position', 'Statistical Meaning', 'Percentage Contained'],
        rows: [
          ['Minimum', 'Left whisker tip', 'Lowest observation', 'Bottom endpoint'],
          ['Q1 (1st Quartile)', 'Left edge of box', '25th percentile', '25% of data is <= Q1'],
          ['Median (Q2)', 'Line inside box', '50th percentile (Center)', '50% of data is <= Median'],
          ['Q3 (3rd Quartile)', 'Right edge of box', '75th percentile', '75% of data is <= Q3'],
          ['Maximum', 'Right whisker tip', 'Highest observation', 'Top endpoint'],
          ['IQR (Q3 - Q1)', 'Central Box Width', 'Middle 50% spread', 'Middle 50% of all data']
        ]
      }
    ],
    examples: [CHAPTER_11_WORKED_EXAMPLES[4], CHAPTER_11_WORKED_EXAMPLES[5], CHAPTER_11_WORKED_EXAMPLES[9]]
  },
  {
    sectionTitle: 'Section 6: Distribution Shape, Clusters, Gaps, Tails & Skewness',
    fullText: `When analyzing and comparing distributions on the SAT, evaluate four fundamental characteristics:
1. Center: Where are the data points concentrated? (Mean vs. Median)
2. Spread: How dispersed are the values? (Standard Deviation, IQR, Range)
3. Shape: Is the distribution symmetric, right-skewed, left-skewed, or bimodal?
4. Outliers & Features: Are there isolated clusters, noticeable gaps, or extreme values?

Skewness & Tail Direction:
Skew is always defined in the direction of the long, stretched tail:
- Right-Skewed (Positive Skew): Long tail extends to the right toward larger values.
  - The mean is pulled to the right by extreme large values, so Mean > Median.
- Left-Skewed (Negative Skew): Long tail extends to the left toward smaller values.
  - The mean is pulled to the left by extreme small values, so Mean < Median.
- Symmetric: Left and right halves mirror each other, so Mean is approximately equal to Median.

Clusters and Gaps:
- Cluster: A region on a dot plot, histogram, or scatterplot where many data points congregate.
- Gap: An empty numerical interval where no observations occur between two clusters.`,
    bulletPoints: [
      'Concept 26: Skew Follows the Tail: Right skew has a long right tail; left skew has a long left tail.',
      'Concept 27: Mean vs. Median in Skewed Data: Right skew -> Mean > Median; Left skew -> Mean < Median.',
      'Concept 28: Outlier Resistance: The median and IQR are resistant to outliers; the mean and standard deviation are non-resistant.',
      'Concept 29: Identifying Clusters & Gaps: Look for dense groups separated by empty numerical regions.',
      'Concept 30: Comparing Centers vs. Spreads: A larger median indicates a higher center, but does NOT imply greater spread.'
    ],
    tables: [
      {
        title: 'Distribution Shape & Mean-Median Relationships',
        headers: ['Distribution Shape', 'Visual Characteristic', 'Mean vs. Median Relationship', 'Best Measure of Center'],
        rows: [
          ['Symmetric / Bell-Shaped', 'Balanced left and right sides', 'Mean ≈ Median', 'Mean and Standard Deviation'],
          ['Right-Skewed', 'Long tail toward larger values', 'Mean > Median (pulled right)', 'Median and IQR (Resistant)'],
          ['Left-Skewed', 'Long tail toward smaller values', 'Mean < Median (pulled left)', 'Median and IQR (Resistant)'],
          ['Uniform', 'Flat, equal frequencies', 'Mean ≈ Median', 'Mean or Median']
        ]
      }
    ],
    examples: [CHAPTER_11_WORKED_EXAMPLES[10]]
  },
  {
    sectionTitle: 'Section 7: Scatterplots, Linear Association & Association vs. Causation',
    fullText: `A scatterplot displays bivariate (two-variable) quantitative data with explanatory variable x on the horizontal axis and response variable y on the vertical axis.

Four Characteristics to Examine in Scatterplots:
1. Direction:
   - Positive Association: As x increases, y tends to increase (points rise from left to right).
   - Negative Association: As x increases, y tends to decrease (points fall from left to right).
   - No Association: Points form a random circular cloud (r is approximately 0).

2. Strength:
   - Strength measures how tightly points cluster along the trend line.
   - Tight clustering -> Strong linear association.
   - Wide scatter -> Weak linear association.
   - SAT Trap: Do NOT confuse slope steepness with strength! A shallow line with points tightly hugging the line is stronger than a steep line with widely scattered points.

3. Form:
   - Linear: Points follow a straight path.
   - Non-Linear / Curved: Points follow a quadratic parabola or exponential curve.

4. Outliers:
   - Points that fall far away from the overall linear trajectory.

Association vs. Causation:
Observational studies and scatterplots establish correlation/association between variables, NOT causation.
- Finding that higher study hours correlate with higher exam scores shows a positive association.
- It does NOT mathematically prove that studying more causes every score increase, because confounding variables (prior math mastery, test anxiety, attendance) may be present.
- Only a randomized controlled experiment can establish direct causation.`,
    bulletPoints: [
      'Concept 31: Direction of Association: Upward slope = Positive association; Downward slope = Negative association.',
      'Concept 32: Strength vs. Slope: Strength is determined by closeness of points to the line, NOT by slope steepness.',
      'Concept 33: Outlier Identification: Look for points that deviate noticeably in vertical distance from the regression line.',
      'Concept 34: Association ≠ Causation: Observational correlations never prove causation due to potential confounding factors.',
      'Concept 35: Randomized Experiments: Causal claims are only valid in randomized controlled experiments.'
    ],
    tables: [
      {
        title: 'Scatterplot Characteristics Reference',
        headers: ['Property', 'What to Look For', 'SAT Interpretation'],
        rows: [
          ['Direction', 'Points tilt up or down', 'Positive (rising) or Negative (falling) association'],
          ['Strength', 'Clustering tightness around line', 'Tight hugging = Strong; Wide dispersion = Weak'],
          ['Slope vs. Strength', 'Steepness vs. Scatter', 'Steep line with high scatter is WEAKER than flat line with low scatter'],
          ['Causal Boundary', 'Study type (observational vs experiment)', 'Never choose causal verbs ("causes", "forces") for observational data']
        ]
      }
    ],
    examples: [CHAPTER_11_WORKED_EXAMPLES[6]]
  },
  {
    sectionTitle: 'Section 8: Sampling, Representative Populations & Margin of Error',
    fullText: `The SAT regularly tests conceptual questions on sampling methods, representative populations, and margin of error.

1. Representative Samples & Generalization:
- To generalize findings from a sample to an entire population, the sample must be randomly selected and representative of that target population.
- Volunteer / Self-Selected Bias: A voluntary online poll cannot be generalized to all citizens because only motivated individuals respond.
- Generalization Limit: Sample results can only be generalized to the population from which the sample was randomly drawn (for example, a study on high school seniors cannot be generalized to middle school students).

2. Margin of Error & Confidence Intervals:
When a survey estimates a population proportion (e.g., 54%) with a margin of error of +/- 3%:
- The plausible range for the true population parameter is [54% - 3%, 54% + 3%] = [51%, 57%].
- Supported Claim: "The true percentage of the population is likely between 51% and 57%."
- Unsupported Claim: "The true percentage is exactly 54%." (The estimate has uncertainty).
- Unsupported Claim: "Every sub-group has at least 51%." (The interval applies to the overall population).

3. Sample Size Effect on Margin of Error:
- Increasing the sample size (n) decreases the margin of error, making the estimate more precise.
- Decreasing the sample size increases the margin of error.`,
    bulletPoints: [
      'Concept 36: Random Sampling: Mandatory for generalizing sample results to a broader population.',
      'Concept 37: Scope of Generalization: Results only apply to the specific population sampled.',
      'Concept 38: Margin of Error Interval: Plausible Interval = Estimate +/- Margin of Error.',
      'Concept 39: Precision vs. Certainty: A margin of error indicates uncertainty; never claim an exact single number is guaranteed.',
      'Concept 40: Sample Size Inverse Rule: Larger sample size (n) -> Smaller margin of error (higher precision).'
    ],
    tables: [
      {
        title: 'Sampling & Margin of Error Decision Matrix',
        headers: ['Concept', 'Condition / Formula', 'Valid SAT Conclusion', 'Common SAT Trap'],
        rows: [
          ['Random Sample', 'Sample randomly drawn from Target Population', 'Generalizes to Target Population', 'Generalizing to outside populations'],
          ['Margin of Error', 'Interval = [Estimate - MOE, Estimate + MOE]', 'True value is likely within interval', 'Claiming exact estimate is guaranteed'],
          ['Increasing Sample Size', 'Increase n (e.g., 400 to 1,600)', 'Margin of error decreases (more precise)', 'Assuming sample size affects mean directly']
        ]
      }
    ],
    examples: [CHAPTER_11_WORKED_EXAMPLES[13], CHAPTER_11_WORKED_EXAMPLES[14]]
  },
  {
    sectionTitle: 'Section 9: Multi-Display Synthesis & SAT Logical Reasoning (Must vs. Could)',
    fullText: `Difficult Module 2 questions often require synthesizing information across multiple simultaneous displays (e.g., Table + Histogram, Table + Box Plot, or Two Scatterplots).

Multi-Display Comparison Framework:
When given two or three displays:
1. Check if the displays represent the same data set or two distinct groups.
2. If same data set: Use the display that provides the requested metric fastest (e.g., use the box plot for median/IQR, use the histogram for shape/modal interval).
3. If two different groups: Compare Center first, Spread second, Shape third, and Outliers fourth.

Must-Be-True vs. Could-Be-True vs. Cannot-Be-Determined:
- "MUST Be True":
  - Must be mathematically guaranteed under 100% of valid configurations.
  - Counterexample Technique: If you can construct even one valid case where the statement fails, eliminate it immediately!
- "COULD Be True":
  - Requires only ONE valid possible scenario consistent with the provided data.
  - Do not require the statement to be guaranteed for all cases.
- "Cannot Be Determined":
  - True when the display omits necessary information (e.g., calculating an exact standard deviation from a box plot alone).`,
    bulletPoints: [
      'Concept 41: Multi-Display Cross-Examination: Cross-reference box plot quartiles against histogram interval frequencies.',
      'Concept 42: Fastest Display Rule: Read median directly from a box plot rather than calculating it from a histogram.',
      'Concept 43: Must-Be-True Counterexample Method: Try to disprove the statement with one edge case.',
      'Concept 44: Could-Be-True Single Valid Case: Find one valid possibility consistent with the given five-number summary or range.',
      'Concept 45: Cannot Be Determined Boundary: Recognize when a graph does not provide sufficient underlying data.'
    ],
    tables: [
      {
        title: 'Must vs. Could vs. Cannot Be Determined Logic',
        headers: ['Question Stem', 'Standard of Proof', 'Solving Strategy', 'Elimination Trigger'],
        rows: [
          ['Which statement MUST be true?', '100% guaranteed in all valid cases', 'Try to find one counterexample to break it', 'Fails in even one scenario'],
          ['Which statement COULD be true?', 'At least 1 valid possibility exists', 'Construct one scenario where it holds', 'Mathematically impossible'],
          ['Which cannot be determined?', 'Insufficient information provided', 'Verify missing parameters (e.g. exact mean from box plot)', 'Exact value can be derived']
        ]
      }
    ],
    examples: [CHAPTER_11_WORKED_EXAMPLES[11], CHAPTER_11_WORKED_EXAMPLES[12], CHAPTER_11_WORKED_EXAMPLES[14]]
  },
  {
    sectionTitle: 'Section 10: SAT Shortcuts, 20 Common Traps & Final 30-Second Audit',
    fullText: `Master SAT Shortcuts:
1. Question Before Graph: Read the prompt first to know what to extract.
2. Axis Multiplier Check: Check if values are in thousands, millions, or percentages.
3. Count vs. Rate: Compare counts with subtraction; compare rates with division by total.
4. Box Plot Instant Triad: Center = Median, Middle Spread = IQR = Q3 - Q1, Total Spread = Range = Max - Min.
5. Histogram Modal Interval: Tallest bar = highest frequency.
6. Scatterplot Closeness: Tighter clustering = stronger linear association (regardless of slope).
7. Net Trend vs. Every Year: Start-to-finish increase does not mean every year increased.
8. Break Must-Be-True: One counterexample eliminates the choice.
9. Observational No-Causation: Never select causal verbs for observational data.
10. Don't Overcalculate: Stop calculating once the requested answer is found.

Top 20 SAT Reading Data Traps:
1. Confusing counts with percentages.
2. Ignoring axis multipliers (e.g., thousands).
3. Ignoring graph scales and non-zero baselines.
4. Assuming a larger median implies a larger spread.
5. Confusing IQR (Q3 - Q1) with range (Max - Min).
6. Assuming positive correlation proves causation.
7. Assuming overall growth means continuous year-over-year increase.
8. Selecting a "could be true" option when asked for "must be true".
9. Picking an option because it sounds plausible in real life.
10. Estimating an exact mean from a box plot alone.
11. Treating histogram intervals as individual exact numbers.
12. Forgetting that each dot in a dot plot is an observation.
13. Comparing raw counts when the question asks for proportions.
14. Assuming two different graph formats cannot represent the same data.
15. Ignoring outliers when assessing scatterplot trends.
16. Assuming steeper scatterplots always have stronger correlation.
17. Failing to check the correct denominator in percentage questions.
18. Using outside knowledge not supported by the visual.
19. Performing redundant arithmetic calculations.
20. Failing to match the requested unit of measurement in the final answer.`,
    bulletPoints: [
      'Shortcut 1: Read the question before inspecting the graph.',
      'Shortcut 2: Always check axis units and multipliers (thousands/millions).',
      'Shortcut 3: Box plot width equals IQR (Q3 - Q1); whisker span equals Range.',
      'Shortcut 4: In scatterplots, strength equals point clustering tightness, not slope.',
      'Shortcut 5: Correlation never proves causation in observational studies.',
      'Trap Check: Watch out for the wrong denominator in "percentage of" questions.'
    ],
    tables: [
      {
        title: 'Master SAT Reading Data Traps Quick Reference',
        headers: ['Trap #', 'Common Mistake', 'Correct SAT Rule'],
        rows: [
          ['Trap 1', 'Confusing count with percentage', 'Divide count by total sample size to compare rates.'],
          ['Trap 2', 'Ignoring axis multipliers', 'Multiply axis reading by multiplier (e.g., 18 × 1,000 = 18,000).'],
          ['Trap 3', 'Median implies spread', 'Median measures center; IQR and Range measure spread independently.'],
          ['Trap 4', 'Correlation equals causation', 'Observational scatterplots show association only, not proof of causation.'],
          ['Trap 5', 'Net growth equals annual growth', 'Overall increase allows for intermediate year-over-year drops.']
        ]
      }
    ],
    examples: [CHAPTER_11_WORKED_EXAMPLES[14]]
  }
];

export const FULL_CHAPTER_11_READING_DATA: FullSatMathChapter = {
  id: 'sat-math-ch11-reading-data',
  chapterNumber: 11,
  chapterTitle: 'Chapter 11: Reading Data',
  pageNumber: 1,
  quote: '"Read the data. Do not read into the data. The correct SAT answer is the conclusion supported by the evidence provided — not what merely sounds reasonable."',
  introduction: `Welcome to the official, locked SAT Math Chapter: Reading Data.

This comprehensive chapter covers the complete spectrum of visual and tabular data interpretation tested on the digital SAT:
• Reading and cross-tabulating tables and two-way frequency tables.
• Distinguishing raw counts from relative percentages and identifying the correct denominator.
• Categorical bar charts vs. continuous numerical histograms.
• Dot plots, modes, observation counts, and cluster identification.
• Five-number summaries, box plots, median center, IQR, and overall range.
• Distribution shapes, right-skew vs. left-skew, and mean-versus-median relationships.
• Bivariate scatterplots, association direction, linear strength, and avoiding causal fallacies.
• Representative sampling, generalizability, sample size effects, and margin of error confidence intervals.
• Multi-display synthesis (Table + Histogram, Table + Box Plot, Dual Box Plots, Dual Scatterplots).
• SAT logical reasoning: Must-Be-True, Could-Be-True, and Cannot-Be-Determined.
• High-level SAT shortcuts, time-saving techniques, and the 20 most frequent SAT traps.

Study the 10 theory sections and 15 worked examples, then complete the 40 practice questions divided across 3 difficulty tiers.`,
  sections: CHAPTER_11_SECTIONS,
  exerciseGroups: [
    {
      exerciseNumber: 1,
      title: 'Exercise 1: Core Fundamentals & Visual Reading (Questions 1–15)',
      description: 'Foundational SAT questions focusing on direct table reading, frequency calculation, relative rates, basic histogram and dot plot interpretations, five-number summary components, and scatterplot direction.',
      questions: CHAPTER_11_QUESTIONS.filter((q) => q.exerciseNumber === 1)
    },
    {
      exerciseNumber: 2,
      title: 'Exercise 2: Intermediate Data Reasoning & Comparisons (Questions 16–28)',
      description: 'Intermediate SAT questions requiring multi-step difference calculations, count vs. percentage analysis, box plot spread comparisons, distribution skewness reasoning, and outlier evaluations.',
      questions: CHAPTER_11_QUESTIONS.filter((q) => q.exerciseNumber === 2)
    },
    {
      exerciseNumber: 3,
      title: 'Exercise 3: Advanced Module 2 & Multi-Display Synthesis (Questions 29–40)',
      description: 'Challenging Module 2 questions featuring dual-display synthesis (Histograms + Box Plots), scatterplot strength comparisons, spread vs. center distinctions, and rigorous must-be-true logical reasoning.',
      questions: CHAPTER_11_QUESTIONS.filter((q) => q.exerciseNumber === 3)
    }
  ]
};
