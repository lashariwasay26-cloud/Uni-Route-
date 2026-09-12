import { FullSatMathChapter, MathTheorySection } from './satMathConcepts';
import { CHAPTER_10_WORKED_EXAMPLES } from './satMathChapter10Examples';
import { CHAPTER_10_QUESTIONS_PART_1 } from './satMathChapter10QuestionsPart1';
import { CHAPTER_10_QUESTIONS_PART_2 } from './satMathChapter10QuestionsPart2';
import { CHAPTER_10_QUESTIONS_PART_3 } from './satMathChapter10QuestionsPart3';

const CHAPTER_10_SECTIONS: MathTheorySection[] = [
  {
    sectionTitle: 'Section 1: The Arithmetic Mean (Concepts 1–5)',
    fullText: `The arithmetic mean is the arithmetic balance point of a data set. On the SAT, mean problems rarely ask you to perform simple addition; instead, they test algebraic balance, finding unknown values, and combining group totals.

Core Definition & Formula:
Mean = (Sum of all data values) / (Total number of observations n)

The Master SAT Average Equation:
Whenever you see an average given in an SAT problem, convert it immediately into its total sum format:
Total Sum = Mean × n

Key Properties of the Mean to Remember:
1. Balance Point: The sum of all deviations from the mean always equals zero: Sum of (x - Mean) = 0.
2. Sensitivity to Outliers: The mean is non-resistant. An extreme value in either direction pulls the mean toward that extreme.
3. Finding a Missing Value: If you know the target average for n numbers and all but one value, solve for the unknown value with:
Missing Value = (n × Target Mean) - (Sum of known values)`,
    bulletPoints: [
      'Concept 1: Definition of the Arithmetic Mean as the arithmetic balance point: Mean = (Sum of values) / n.',
      'Concept 2: The Master Average Formula: Total = Mean × n.',
      'Concept 3: Finding an Unknown Value: Missing Value = (n × Target Mean) - (Sum of known values).',
      'Concept 4: Effect of Adding a Value: If a newly added value is greater than the mean, the mean increases; if less, it decreases.',
      'Concept 5: Sensitivity to Outliers: The mean is non-resistant and gets pulled strongly by extreme high or low values.'
    ],
    tables: [
      {
        title: 'Arithmetic Mean Formula Quick Reference',
        headers: ['Concept / Task', 'Formula', 'Teacher Tip'],
        rows: [
          ['Basic Mean', 'Mean = (Sum of all x) / n', 'Sum all data points and divide by sample size n.'],
          ['Master Total Formula', 'Total = Mean × n', 'Convert averages to totals before setting up algebraic equations.'],
          ['Missing Value', 'Missing Value = (n × Target) - (Known Sum)', 'Subtract known sum from required total sum.']
        ]
      }
    ],
    examples: [CHAPTER_10_WORKED_EXAMPLES[0], CHAPTER_10_WORKED_EXAMPLES[1]]
  },
  {
    sectionTitle: 'Section 2: Weighted Mean & Frequency Tables (Concepts 6–10)',
    fullText: `When combining multiple groups with different sample sizes or calculating an average from a frequency table, never take a simple average of the averages! You must compute the weighted mean by combining the grand total of all values and dividing by the grand total count.

Weighted Mean Formula:
Combined Mean = (Group 1 Sum + Group 2 Sum + ... + Group k Sum) / (Total Observations N)
Combined Mean = (n₁ × Mean₁ + n₂ × Mean₂) / (n₁ + n₂)

Calculating the Mean from a Frequency Table:
In a frequency table, each value x appears with a frequency f.
Mean = (Sum of x × f products) / (Sum of frequencies)

Four-Step Method:
Step 1: Multiply each value x by its frequency f to get the product (x × f) for each row.
Step 2: Add all products together to find the grand total sum of (x × f).
Step 3: Sum the frequency column to find the total number of observations n = Sum of frequencies.
Step 4: Divide the grand total by total frequency.`,
    bulletPoints: [
      'Concept 6: The Weighted Mean Formula: Combined Mean = (n₁ × Mean₁ + n₂ × Mean₂) / (n₁ + n₂).',
      'Concept 7: Trap of Averaging Averages: (Mean₁ + Mean₂) / 2 is only valid when both group sizes are exactly equal.',
      'Concept 8: Reading Frequency Tables: Each row represents a distinct value multiplied by the number of times it appears.',
      'Concept 9: Total Sample Size from Frequency Tables: n = Sum of the frequency column, never the number of rows.',
      'Concept 10: Frequency Mean Calculation: Divide the sum of products by the sum of frequencies.'
    ],
    tables: [
      {
        title: 'Calculating Mean from Frequency Distribution',
        headers: ['Step', 'Action', 'Mathematical Operation'],
        rows: [
          ['Step 1', 'Row Products', 'Compute Product = Value (x) × Frequency (f)'],
          ['Step 2', 'Sum Products', 'Grand Total = Sum of (x × f)'],
          ['Step 3', 'Sum Frequency', 'Total Observations n = Sum of frequencies'],
          ['Step 4', 'Calculate Mean', 'Mean = (Grand Total) / n']
        ]
      }
    ],
    examples: [CHAPTER_10_WORKED_EXAMPLES[2], CHAPTER_10_WORKED_EXAMPLES[3]]
  },
  {
    sectionTitle: 'Section 3: The Median (Concepts 11–15)',
    fullText: `The median is the exact middle value of an ordered quantitative data set. It divides the data distribution into two equal halves, with 50% of the observations below and 50% above.

How to Find the Median:
1. Always Sort First: Arrange all values in ascending order from least to greatest.
2. Odd Number of Values (n is odd):
The median is the single middle observation at position (n + 1) / 2.
Example: For n = 7, median is at position (7 + 1) / 2 = 4th value.

3. Even Number of Values (n is even):
The median is the arithmetic mean of the two central numbers at positions (n / 2) and (n / 2 + 1).
Example: For n = 6, average the 3rd and 4th values: Median = (3rd value + 4th value) / 2.

Median in Frequency Tables:
Calculate total observations n = Sum of frequencies. Then accumulate frequencies from the top row downward until you reach the target median position.`,
    bulletPoints: [
      'Concept 11: Definition of the Median: The middle value of a sorted quantitative data set.',
      'Concept 12: Finding Median with Odd n: Exactly the ((n + 1) / 2)-th ordered observation.',
      'Concept 13: Finding Median with Even n: Average of the two middle observations at n/2 and (n/2 + 1).',
      'Concept 14: Median from Frequency Tables: Use cumulative frequency to identify which row contains the middle observation.',
      'Concept 15: Resistance to Outliers: The median is resistant; extreme high or low values do not change its value.'
    ],
    tables: [
      {
        title: 'Median Calculation Rules',
        headers: ['Sample Size n', 'Central Position(s)', 'Median Calculation Method'],
        rows: [
          ['Odd (e.g., n = 11)', 'Position (11 + 1)/2 = 6th value', 'Take the exact 6th ordered value'],
          ['Even (e.g., n = 12)', 'Positions 12/2 = 6th and 7th values', 'Take the average: (6th + 7th) / 2'],
          ['Frequency Table', 'Cumulative count to n/2', 'Identify row where cumulative frequency reaches central position']
        ]
      }
    ],
    examples: [CHAPTER_10_WORKED_EXAMPLES[4], CHAPTER_10_WORKED_EXAMPLES[5], CHAPTER_10_WORKED_EXAMPLES[6]]
  },
  {
    sectionTitle: 'Section 4: Range & Interquartile Range (IQR) (Concepts 16–20)',
    fullText: `Measures of spread describe the variability or dispersion among the observations in a data set.

1. The Range:
Range = Maximum Value - Minimum Value
The range measures the overall spread across the entire data set. Because it depends solely on the most extreme values, it is highly sensitive to outliers.

2. Quartiles:
Quartiles divide an ordered data set into four equal quarters (25% each):
- First Quartile (Q1): The 25th percentile (median of the lower half).
- Second Quartile (Q2): The 50th percentile (the overall median).
- Third Quartile (Q3): The 75th percentile (median of the upper half).

3. The Interquartile Range (IQR):
IQR = Q3 - Q1
The IQR measures the spread of the middle 50% of the distribution. Because it excludes the lower 25% and upper 25%, the IQR is resistant to extreme outliers.`,
    bulletPoints: [
      'Concept 16: Definition of Range: Range = Maximum - Minimum.',
      'Concept 17: Sensitivity of Range: Extremely non-resistant and easily distorted by outliers.',
      'Concept 18: Definition of Quartiles: Q1 = 25th percentile, Median = 50th percentile, Q3 = 75th percentile.',
      'Concept 19: Calculation of IQR: IQR = Q3 - Q1.',
      'Concept 20: Resistance of IQR: Measures the spread of the central 50% and remains stable even with outliers.'
    ],
    tables: [
      {
        title: 'Range vs. Interquartile Range Comparison',
        headers: ['Measure of Spread', 'Formula', 'Portion of Data Measured', 'Resistant to Outliers?'],
        rows: [
          ['Range', 'Max - Min', 'Entire 100% data span', 'No (Highly Sensitive)'],
          ['Interquartile Range (IQR)', 'Q3 - Q1', 'Middle 50% of data', 'Yes (Resistant)']
        ]
      }
    ],
    examples: [CHAPTER_10_WORKED_EXAMPLES[7], CHAPTER_10_WORKED_EXAMPLES[8]]
  },
  {
    sectionTitle: 'Section 5: Outlier Detection (Concepts 21–25)',
    fullText: `An outlier is an extreme observation that lies unusually far from the rest of the data.

The 1.5 × IQR Rule (Tukey's Fences):
The standard mathematical criterion used on the SAT for identifying statistical outliers:
- Lower Outlier Boundary = Q1 - (1.5 × IQR)
- Upper Outlier Boundary = Q3 + (1.5 × IQR)

Any data point x that is strictly less than the Lower Boundary or strictly greater than the Upper Boundary is classified as an outlier.

Understanding Measure Resistance:
Some summary statistics change dramatically when an outlier is present (non-resistant), while others remain virtually unaffected (resistant).`,
    bulletPoints: [
      'Concept 21: Definition of an Outlier: An extreme observation far from the main cluster of data.',
      'Concept 22: The 1.5 × IQR Rule: Calculate outlier thresholds at Q1 - (1.5 × IQR) and Q3 + (1.5 × IQR).',
      'Concept 23: Outlier Fences: Any value outside [Q1 - 1.5 × IQR, Q3 + 1.5 × IQR] is a statistical outlier.',
      'Concept 24: Impact on Center: Outliers pull the mean, but leave the median stable.',
      'Concept 25: Impact on Spread: Outliers inflate range and standard deviation, but leave IQR stable.'
    ],
    tables: [
      {
        title: 'Statistical Measure Resistance Summary Table',
        headers: ['Statistical Measure', 'Resistant to Outliers?', 'Behavior When Outlier is Added'],
        rows: [
          ['Mean', 'No (Non-Resistant)', 'Pulls heavily toward the outlier'],
          ['Median', 'Yes (Resistant)', 'Remains stable and changes minimally'],
          ['Range', 'No (Non-Resistant)', 'Expands significantly'],
          ['IQR', 'Yes (Resistant)', 'Remains unchanged or stable'],
          ['Standard Deviation', 'No (Non-Resistant)', 'Increases substantially']
        ]
      }
    ],
    examples: [CHAPTER_10_WORKED_EXAMPLES[9]]
  },
  {
    sectionTitle: 'Section 6: Visual Displays: Histograms & Dot Plots (Concepts 26–30)',
    fullText: `The SAT frequently presents quantitative distributions using histograms and dot plots.

Histograms:
- Groups continuous numerical data into adjacent intervals called bins.
- Horizontal axis: Shows bin intervals (for example, score ranges 50–59, 60–69).
- Vertical axis: Shows frequency (the count of observations in each bin).
- Total Sample Size n: Sum the heights of all bars across the histogram.
- Interval Boundaries: You cannot see exact individual values inside a bin, only how many observations fall within that range.

Dot Plots:
- Each dot represents exactly one individual observation plotted above its specific value on a number line.
- The height of each dot column shows the exact frequency for that value.
- Mode: The value with the tallest stack of dots.
- Median: Count the total dots n and count inward to find the middle dot.`,
    bulletPoints: [
      'Concept 26: Reading Histograms: Bar height represents frequency; horizontal axis represents interval bins.',
      'Concept 27: Finding Sample Size in Histograms: Total n = sum of all bar heights.',
      'Concept 28: Locating the Median in Histograms: Use cumulative bar heights to reach the n/2 observation.',
      'Concept 29: Reading Dot Plots: Each dot equals 1 observation; column height equals frequency.',
      'Concept 30: Finding Summary Statistics from Dot Plots: Tallest column = Mode; count dots for Median.'
    ],
    tables: [
      {
        title: 'Histogram vs. Dot Plot Visual Display Features',
        headers: ['Display Type', 'Data Representation', 'Exact Values Visible?', 'Best Used For'],
        rows: [
          ['Histogram', 'Bars grouped into numerical bins', 'No (grouped into ranges)', 'Large continuous data sets'],
          ['Dot Plot', 'Individual dots stacked on number line', 'Yes (every single point)', 'Small to moderate discrete data']
        ]
      }
    ],
    examples: [CHAPTER_10_WORKED_EXAMPLES[10], CHAPTER_10_WORKED_EXAMPLES[11], CHAPTER_10_WORKED_EXAMPLES[14]]
  },
  {
    sectionTitle: 'Section 7: Visual Displays: Box Plots (Concepts 31–35)',
    fullText: `A box plot (box-and-whisker plot) visually summarizes a distribution using the Five-Number Summary:
1. Minimum: Left whisker tip (excluding outliers).
2. First Quartile (Q1): Left edge of the central box.
3. Median (Q2): Vertical line dividing the box.
4. Third Quartile (Q3): Right edge of the central box.
5. Maximum: Right whisker tip (excluding outliers).

The 25% Rule of Box Plots:
Every box plot is divided into four distinct visual sections:
- Left whisker: Exactly 25% of data points.
- Left half of box (from Q1 to Median): Exactly 25% of data points.
- Right half of box (from Median to Q3): Exactly 25% of data points.
- Right whisker: Exactly 25% of data points.
- Central Box: Spans from Q1 to Q3 and contains exactly 50% of all observations (width = IQR).

Comparing Box Plots:
- Compare Centers: Look at the positions of the internal median lines.
- Compare Spreads: Compare the box widths (IQR) and overall whisker spans (Range).`,
    bulletPoints: [
      'Concept 31: Anatomy of a Box Plot: Displays Min, Q1, Median, Q3, and Max.',
      'Concept 32: The 25% Rule: Each whisker and each half of the box contains exactly 25% of observations.',
      'Concept 33: The 50% Central Box: The box spans from Q1 to Q3 (IQR) containing the central 50% of data.',
      'Concept 34: Reading Skewness from Box Plots: A longer whisker indicates a longer tail (skewness) in that direction.',
      'Concept 35: Comparing Distributions: Compare median lines for center; compare box widths (IQR) for spread.'
    ],
    tables: [
      {
        title: 'Box Plot Five-Number Anatomy Reference',
        headers: ['Visual Component', 'Statistical Point', 'Percentage of Data Contained'],
        rows: [
          ['Left Whisker', 'From Min to Q1', '25% of data'],
          ['Left Box Half', 'From Q1 to Median', '25% of data'],
          ['Right Box Half', 'From Median to Q3', '25% of data'],
          ['Right Whisker', 'From Q3 to Max', '25% of data'],
          ['Central Box', 'From Q1 to Q3 (IQR)', '50% of data (Middle half)']
        ]
      }
    ],
    examples: [CHAPTER_10_WORKED_EXAMPLES[12], CHAPTER_10_WORKED_EXAMPLES[13]]
  },
  {
    sectionTitle: 'Section 8: Transforming Data: Adding & Multiplying by a Constant (Concepts 36–40)',
    fullText: `Linear transformations of data sets follow systematic algebraic rules that frequently appear on the Digital SAT.

Rule 1: Adding or Subtracting a Constant (x_new = x + c)
- Measures of Center (Mean, Median, Mode): Shift by the constant (+c).
  New Mean = Old Mean + c
  New Median = Old Median + c
- Measures of Spread (Range, IQR, Standard Deviation): REMAIN COMPLETELY UNCHANGED!
  New Range = Old Range
  New IQR = Old IQR
  New SD = Old SD

Rule 2: Multiplying or Dividing by a Constant (x_new = c × x)
- Measures of Center: Multiplied by c.
  New Mean = c × Old Mean
  New Median = c × Old Median
- Measures of Spread: Multiplied by |c|.
  New Range = |c| × Old Range
  New IQR = |c| × Old IQR
  New SD = |c| × Old SD`,
    bulletPoints: [
      'Concept 36: Adding a Constant Shifts Center: Mean, Median, and Mode increase by c.',
      'Concept 37: Adding a Constant Leaves Spread Unchanged: Range, IQR, and Standard Deviation stay strictly identical.',
      'Concept 38: Multiplying Scales Center: Mean and Median multiply by c.',
      'Concept 39: Multiplying Scales Spread: Range, IQR, and Standard Deviation multiply by |c|.',
      'Concept 40: Combined Transformation: For y = ax + b, new mean = a × (old mean) + b, while new SD = |a| × (old SD).'
    ],
    tables: [
      {
        title: 'Data Transformation Rules Summary Matrix',
        headers: ['Transformation', 'Mean & Median (Center)', 'Range & IQR (Spread)', 'Standard Deviation (Spread)'],
        rows: [
          ['Add constant c', 'Increases by +c', 'No change', 'No change'],
          ['Subtract constant c', 'Decreases by -c', 'No change', 'No change'],
          ['Multiply by c (c > 0)', 'Multiplies by c', 'Multiplies by c', 'Multiplies by c'],
          ['Multiply by c (c < 0)', 'Multiplies by c', 'Multiplies by |c|', 'Multiplies by |c|']
        ]
      }
    ],
    examples: [CHAPTER_10_WORKED_EXAMPLES[15], CHAPTER_10_WORKED_EXAMPLES[16]]
  },
  {
    sectionTitle: 'Section 9: Distribution Shape, Skewness, & Comparing Mean vs. Median (Concepts 41–45)',
    fullText: `The shape of a distribution dictates how its mean and median compare.

1. Symmetric Distribution (Bell-Shaped or Uniform):
- Balanced tails on both sides.
- Balance point coincides with the central position:
  Mean is approximately equal to Median

2. Right-Skewed Distribution (Positively Skewed):
- Long tail extends to the right (toward larger positive values).
- Peak is on the left side.
- Extreme high values in the right tail pull the mean upward:
  Mean > Median

3. Left-Skewed Distribution (Negatively Skewed):
- Long tail extends to the left (toward smaller values).
- Peak is on the right side.
- Extreme low values in the left tail pull the mean downward:
  Mean < Median

Choosing Summary Statistics:
- Symmetric Data: Use Mean (for center) and Standard Deviation (for spread).
- Skewed Data or Data with Outliers: Use Median (for center) and IQR (for spread).`,
    bulletPoints: [
      'Concept 41: Symmetric Distributions: Mean is approximately equal to Median.',
      'Concept 42: Right-Skewed Distributions: Long tail to the right; Mean > Median.',
      'Concept 43: Left-Skewed Distributions: Long tail to the left; Mean < Median.',
      'Concept 44: Direction of Skew: Skewness always points in the direction of the long tail, not the peak.',
      'Concept 45: Summary Statistics Selection: Use Median and IQR for skewed data; Mean and SD for symmetric data.'
    ],
    tables: [
      {
        title: 'Distribution Shape and Skewness Guide',
        headers: ['Distribution Shape', 'Tail Direction', 'Relationship of Mean to Median', 'Best Measures of Center & Spread'],
        rows: [
          ['Symmetric', 'Equal tails on both sides', 'Mean ≈ Median', 'Mean & Standard Deviation'],
          ['Right-Skewed (Positive)', 'Long tail extends to the right', 'Mean > Median', 'Median & IQR'],
          ['Left-Skewed (Negative)', 'Long tail extends to the left', 'Mean < Median', 'Median & IQR']
        ]
      }
    ],
    examples: [CHAPTER_10_WORKED_EXAMPLES[17]]
  },
  {
    sectionTitle: 'Section 10: Standard Deviation (Concepts 46–50)',
    fullText: `Standard deviation measures the typical (average) distance of individual data points from their arithmetic mean.

Key Conceptual Principles on the SAT:
You do not need to calculate standard deviation by hand on the SAT; you only need to compare it conceptually.

1. Clustering vs. Dispersion:
- Points clustered tightly around the mean have a small standard deviation.
- Points spread widely away from the mean have a large standard deviation.

2. Zero Standard Deviation:
If all values in a data set are identical (for example: 5, 5, 5, 5, 5), there is zero variation, so SD = 0.

3. Constant Shift Invariance:
Adding or subtracting a constant to every value shifts the entire distribution together without changing the spacing between points. Therefore, SD(X + c) = SD(X).

4. Extreme Values:
Adding an extreme outlier far from the mean always increases the standard deviation.`,
    bulletPoints: [
      'Concept 46: Definition of Standard Deviation: The typical distance of data points from their mean.',
      'Concept 47: Visual Comparison: Greater dispersion and spread from the mean = larger standard deviation.',
      'Concept 48: Minimum Standard Deviation: SD = 0 when all observations are identical.',
      'Concept 49: Non-Negativity: Standard deviation is always non-negative (SD >= 0).',
      'Concept 50: Outlier Sensitivity: Adding points far from the mean increases the standard deviation.'
    ],
    tables: [
      {
        title: 'Standard Deviation Core Properties',
        headers: ['Property', 'Rule', 'SAT Application'],
        rows: [
          ['Clustering', 'Tight cluster near center = Low SD', 'Narrow bell curve or centered dot plot has smaller SD.'],
          ['Spread', 'Wide spread out to tails = High SD', 'Uniform or bimodal distribution at edges has larger SD.'],
          ['Zero Variation', 'Identical values = SD is 0', 'Set {8, 8, 8} has SD = 0.'],
          ['Constant Shift', 'SD(X + c) = SD(X)', 'Adding 50 to all values leaves SD unchanged.']
        ]
      }
    ],
    examples: [CHAPTER_10_WORKED_EXAMPLES[18], CHAPTER_10_WORKED_EXAMPLES[19]]
  },
  {
    sectionTitle: 'Section 11: Scatterplots & Association (Concepts 51–53)',
    fullText: `Scatterplots display paired numerical data (x, y) to investigate bivariate relationships between two variables.

Three Attributes to Describe Association:
1. Direction:
- Positive Association: As x increases, y tends to increase (slopes upward).
- Negative Association: As x increases, y tends to decrease (slopes downward).
- No Association: Points show no upward or downward pattern.

2. Form:
- Linear: Points follow a straight-line trend.
- Non-linear: Points follow a curved path (quadratic, exponential).

3. Strength:
- Strong: Points cluster tightly along the trendline.
- Moderate / Weak: Points are widely scattered with substantial vertical spread.

The Correlation Coefficient (r):
- Measures linear strength and direction: -1 <= r <= 1.
- r = +1: Perfect positive linear relationship.
- r = -1: Perfect negative linear relationship.
- r = 0: No linear relationship.`,
    bulletPoints: [
      'Concept 51: Direction of Association: Positive (upward slope) vs. Negative (downward slope).',
      'Concept 52: Strength of Linear Association: Tight clustering along a straight line indicates strong correlation.',
      'Concept 53: Correlation Coefficient r: Ranges from -1 to +1; sign shows direction, magnitude shows strength.'
    ],
    tables: [
      {
        title: 'Scatterplot Association Interpretation Table',
        headers: ['Pattern Description', 'Direction', 'Strength', 'Correlation Coefficient r'],
        rows: [
          ['Tight upward band', 'Positive', 'Strong', 'r ≈ +0.85 to +1.00'],
          ['Loose upward scatter', 'Positive', 'Moderate/Weak', 'r ≈ +0.30 to +0.60'],
          ['Tight downward band', 'Negative', 'Strong', 'r ≈ -0.85 to -1.00'],
          ['Random cloud of dots', 'None', 'None', 'r ≈ 0.00']
        ]
      }
    ],
    examples: [CHAPTER_10_WORKED_EXAMPLES[20]]
  },
  {
    sectionTitle: 'Section 12: Line of Best Fit & Residuals (Concepts 54–57)',
    fullText: `A line of best fit (linear regression model) predicts values of y from given values of x:
y_predicted = m × x + b

Interpreting Model Parameters:
- Slope (m): For each 1-unit increase in x, the model predicts that y changes by m units.
- y-Intercept (b): The predicted value of y when x = 0.

Residuals (Prediction Errors):
A residual is the vertical difference between the actual observed value and the model's predicted value:
Residual = Actual y - Predicted y

- Positive Residual: Actual data point lies ABOVE the line of best fit.
- Negative Residual: Actual data point lies BELOW the line of best fit.
- Zero Residual: Actual point lies exactly on the line.

Interpolation vs. Extrapolation:
- Interpolation: Predicting y for an x-value inside the range of observed data. Highly reliable.
- Extrapolation: Predicting y for an x-value outside the range of observed data. Unreliable because relationships often change outside the tested range.`,
    bulletPoints: [
      'Concept 54: Line of Best Fit Equation: y_predicted = m × x + b represents model predictions.',
      'Concept 55: Contextual Interpretation: Slope = predicted change in y per 1-unit x; Intercept = predicted y when x = 0.',
      'Concept 56: Residual Formula: Residual = Actual y - Predicted y. Positive = point above line; Negative = point below line.',
      'Concept 57: Interpolation vs. Extrapolation: Interpolation (inside data range) is valid; Extrapolation (outside data range) is risky.'
    ],
    tables: [
      {
        title: 'Regression and Residuals Summary Guide',
        headers: ['Concept', 'Definition / Formula', 'Interpretation'],
        rows: [
          ['Slope m', 'Change in y / Change in x', 'Predicted change in y for every 1-unit increase in x'],
          ['Intercept b', 'Value of predicted y when x = 0', 'Predicted initial / baseline value of y'],
          ['Residual', 'Actual y - Predicted y', 'Vertical distance from actual point to the fitted line'],
          ['Positive Residual', 'Actual > Predicted', 'Data point sits above the regression line'],
          ['Negative Residual', 'Actual < Predicted', 'Data point sits below the regression line']
        ]
      }
    ],
    examples: [CHAPTER_10_WORKED_EXAMPLES[21], CHAPTER_10_WORKED_EXAMPLES[22], CHAPTER_10_WORKED_EXAMPLES[23], CHAPTER_10_WORKED_EXAMPLES[24], CHAPTER_10_WORKED_EXAMPLES[25]]
  },
  {
    sectionTitle: 'Section 13: Study Design: Sampling vs. Assignment (Concepts 58–59)',
    fullText: `Statistical study design on the SAT tests two fundamental methodological principles: Generalizability and Causal Inference.

The Two Pillars of Study Design:
1. Random Sampling (Selection):
- Selecting participants randomly from the target population ensures the sample is representative.
- Allows results to be generalized to the entire population from which the sample was drawn.

2. Random Assignment (Experiments):
- Randomly assigning participants to treatment and control groups balances confounding variables.
- Allows researchers to establish cause-and-effect (causation).

Study Types:
- Observational Study: Researchers observe subjects without assigning treatments. Can show association or correlation, but NEVER causation.
- Randomized Controlled Experiment: Researchers assign treatments randomly. Can prove causation.

Sampling Pitfalls:
- Convenience Sample: Surveying easy-to-reach subjects (e.g., asking people at a shopping mall). Leads to bias and cannot generalize to all citizens.
- Voluntary Response Sample: Allowing people to self-select (e.g., online comment polls). Over-represents strong opinions.`,
    bulletPoints: [
      'Concept 58: Random Sampling and Generalizability: Random sampling from a population allows valid generalization to that population.',
      'Concept 59: Random Assignment and Causation: Random assignment balances confounding variables, allowing causal inference in experiments.'
    ],
    tables: [
      {
        title: 'Study Design Master Decision Matrix',
        headers: ['Study Design Technique', 'Essential Requirement', 'What It Validates'],
        rows: [
          ['Generalizability', 'Random Sampling from Population', 'Results apply to the broader target population.'],
          ['Causal Inference (Causation)', 'Random Assignment to Treatment Groups', 'Proves that the treatment caused the observed outcome.'],
          ['Observational Study', 'No treatment manipulation', 'Shows correlation / association only.'],
          ['Randomized Experiment', 'Random treatment allocation', 'Establishes cause-and-effect relationships.']
        ]
      }
    ],
    examples: [CHAPTER_10_WORKED_EXAMPLES[26], CHAPTER_10_WORKED_EXAMPLES[27]]
  },
  {
    sectionTitle: 'Section 14: Margin of Error & Confidence Intervals (Concept 60)',
    fullText: `When estimating a population parameter from a random sample, the estimate is subject to sampling variability, which is quantified by the Margin of Error.

Confidence Intervals:
Confidence Interval = [Point Estimate - Margin of Error, Point Estimate + Margin of Error]

Example: If a survey finds 52% support with a margin of error of ±4%:
Interval = [52% - 4%, 52% + 4%] = [48%, 56%]
This means it is plausible that the true population support is anywhere between 48% and 56%.

Sample Size & Margin of Error Relationship:
Margin of Error is inversely proportional to the square root of the sample size:
Margin of Error is proportional to 1 / SquareRoot(n)

- Increasing sample size n produces a smaller margin of error (a narrower, more precise interval).
- To cut the margin of error in half (1/2), the sample size must be quadrupled (4x).
- To divide the margin of error by k, multiply the sample size by k^2.`,
    bulletPoints: [
      'Concept 60: Margin of Error and Sample Size: Margin of error creates interval [Estimate - MoE, Estimate + MoE]; larger sample size n produces a smaller margin of error.'
    ],
    tables: [
      {
        title: 'Sample Size vs. Margin of Error Scaling Table',
        headers: ['Sample Size Multiplier', 'Margin of Error Change', 'Confidence Interval Width'],
        rows: [
          ['Original (n)', 'Original (MoE)', 'Original Width'],
          ['4 × n (Quadrupled)', '1/2 × MoE (Cut in half)', '50% narrower (more precise)'],
          ['9 × n (9 times larger)', '1/3 × MoE (Cut to one third)', '67% narrower'],
          ['16 × n (16 times larger)', '1/4 × MoE (Cut to one fourth)', '75% narrower']
        ]
      }
    ],
    examples: [CHAPTER_10_WORKED_EXAMPLES[28], CHAPTER_10_WORKED_EXAMPLES[29]]
  }
];

export const FULL_CHAPTER_10_STATISTICS: FullSatMathChapter = {
  id: 'sat-ch10-statistics',
  chapterNumber: 10,
  chapterTitle: 'Mega Chapter — Statistics',
  pageNumber: 10,
  quote: 'In God we trust. All others must bring data. — W. Edwards Deming',
  introduction: `Welcome to Mega Chapter 10: Statistics. Statistical reasoning and data analysis questions appear consistently across both Module 1 and Module 2 on the Digital SAT.

This master chapter provides exhaustive coverage of all 60 core statistics concepts: measures of center (mean, weighted mean, median, mode), measures of spread (range, IQR, standard deviation), outlier detection via Tukey's fences, complete visual interpretation across histograms, dot plots, and box plots, linear transformations, distribution skewness, bivariate scatterplots, lines of best fit, residuals, sampling methodologies, experimental design, and margin of error confidence intervals.

Master every concept, review the 30 step-by-step worked examples, and test your mastery on the 100 practice questions across three full exercises.`,
  sections: CHAPTER_10_SECTIONS,
  exerciseGroups: [
    {
      exerciseNumber: 1,
      title: 'Exercise 1: Module 1 Foundations (Questions 1–40)',
      description: 'Standard and intermediate SAT statistics questions covering core definitions, arithmetic and weighted means, medians, IQR, outlier calculations, visual displays, transformations, scatterplot interpretation, and sampling fundamentals.',
      questions: CHAPTER_10_QUESTIONS_PART_1
    },
    {
      exerciseNumber: 2,
      title: 'Exercise 2: Module 2 Advanced Reasoning (Questions 41–80)',
      description: 'Challenging Module 2-style questions focusing on multi-step algebraic balance, frequency table distributions, outlier boundaries, linear transformation proofs, subtle study design distinctions, residual interpretations, and margin of error inverse-square scalings.',
      questions: CHAPTER_10_QUESTIONS_PART_2
    },
    {
      exerciseNumber: 3,
      title: 'Exercise 3: Hardest Module 2 Visual Comparison (Questions 81–100)',
      description: 'The hardest Digital SAT Module 2 visual-comparison questions: comparative histograms, five-number summary box plots, outlier boundary evaluations, scatterplot leverage points, residual comparisons, and margin of error confidence intervals.',
      questions: CHAPTER_10_QUESTIONS_PART_3
    }
  ]
};
