import { MathWorkedExample } from './satMathConcepts';

export const CHAPTER_10_WORKED_EXAMPLES: MathWorkedExample[] = [
  {
    title: 'Example 1: Calculating the Arithmetic Mean',
    question: 'Calculate the arithmetic mean of the numbers: 14, 18, 22, 29, and 37.',
    options: ['22', '24', '26', '28'],
    correctIndex: 1,
    correctAnswer: '24',
    explanation: `Step-by-Step Solution:
1. Add all 5 numbers together:
   Total Sum = 14 + 18 + 22 + 29 + 37 = 120

2. Divide by the total count of numbers (n = 5):
   Mean = 120 / 5 = 24

Key Takeaway:
Mean = (Sum of all values) / (Number of values). You can also find the total sum by multiplying: Total = Mean × n.`
  },
  {
    title: 'Example 2: Finding an Unknown Value Using the Mean',
    question: 'The mean of 6 numbers is 25. Five of the numbers are 18, 20, 24, 28, and 32. What is the value of the sixth number?',
    options: ['25', '26', '28', '30'],
    correctIndex: 2,
    correctAnswer: '28',
    explanation: `Step-by-Step Solution:
1. Find the total sum needed for all 6 numbers:
   Total Sum = 6 × 25 = 150

2. Add the five known numbers together:
   Known Sum = 18 + 20 + 24 + 28 + 32 = 122

3. Subtract the known sum from the required total:
   Sixth Number = 150 - 122 = 28

Key Takeaway:
When given an average, always find the total first: Missing Value = (Total Required) - (Sum of Known Values).`
  },
  {
    title: 'Example 3: Calculating the Weighted Mean of Combined Groups',
    question: 'Class A has 12 students with a mean exam score of 70. Class B has 18 students with a mean exam score of 85. What is the combined mean score for all 30 students?',
    options: ['76.5', '77.5', '79.0', '80.0'],
    correctIndex: 2,
    correctAnswer: '79',
    explanation: `Step-by-Step Solution:
1. Find total points earned by Class A:
   Total A = 12 × 70 = 840 points

2. Find total points earned by Class B:
   Total B = 18 × 85 = 1,530 points

3. Add the points together and find the total number of students:
   Grand Total Points = 840 + 1,530 = 2,370
   Total Students = 12 + 18 = 30

4. Divide grand total by total students:
   Combined Mean = 2,370 / 30 = 79

Key Takeaway:
Never just average the two class averages (70 + 85)/2 = 77.5 because Class B has more students! Always calculate combined total points and divide by combined student count.`
  },
  {
    title: 'Example 4: Calculating Mean from a Frequency Table',
    question: 'A data set is organized into the following frequency table. What is the mean of the data set?',
    table: {
      title: 'Frequency Table',
      headers: ['Value (x)', 'Frequency (f)', 'Product (x · f)'],
      rows: [
        ['1', '3', '3'],
        ['3', '5', '15'],
        ['5', '8', '40'],
        ['7', '4', '28'],
        ['Total', '20', '86']
      ]
    },
    options: ['3.8', '4.0', '4.3', '4.5'],
    correctIndex: 2,
    correctAnswer: '4.3',
    explanation: `Step-by-Step Solution:
1. Multiply each value by how many times it occurs (x × f):
   • 1 × 3 = 3
   • 3 × 5 = 15
   • 5 × 8 = 40
   • 7 × 4 = 28

2. Add up all the frequencies to find the total count:
   Total Count = 3 + 5 + 8 + 4 = 20

3. Add up all the products to find the grand total:
   Grand Total = 3 + 15 + 40 + 28 = 86

4. Divide grand total by total count:
   Mean = 86 / 20 = 4.3

Key Takeaway:
Mean from a frequency table = (Sum of x × f) / (Total frequency). Never divide by just the number of rows.`
  },
  {
    title: 'Example 5: Finding the Median with an Odd Number of Values',
    question: 'Find the median of the data set: 9, 3, 14, 7, 11, 2, and 8.',
    options: ['7', '8', '9', '11'],
    correctIndex: 1,
    correctAnswer: '8',
    explanation: `Step-by-Step Solution:
1. Put the numbers in order from least to greatest:
   2, 3, 7, 8, 9, 11, 14

2. Count the numbers (n = 7).
3. The median is the exact middle number (the 4th value):
   Middle Number = 8

Key Takeaway:
Always sort numbers in ascending order first. For an odd count, the median is the exact center number.`
  },
  {
    title: 'Example 6: Finding the Median with an Even Number of Values',
    question: 'Find the median of the data set: 12, 19, 5, 23, 16, and 8.',
    options: ['12', '14', '15', '16'],
    correctIndex: 1,
    correctAnswer: '14',
    explanation: `Step-by-Step Solution:
1. Sort the numbers in order from least to greatest:
   5, 8, 12, 16, 19, 23

2. Count the numbers (n = 6).
3. Locate the two middle numbers (the 3rd and 4th values):
   Middle values are 12 and 16.

4. Take the average of the two middle numbers:
   Median = (12 + 16) / 2 = 28 / 2 = 14

Key Takeaway:
For an even count, the median is the midpoint (average) of the two middle numbers.`
  },
  {
    title: 'Example 7: Finding the Median from a Frequency Table',
    question: 'A survey of 20 households reports the number of pets owned. What is the median number of pets?',
    table: {
      title: 'Pets per Household',
      headers: ['Pets (x)', 'Frequency (f)', 'Cumulative Count'],
      rows: [
        ['0', '4', 'Values 1 to 4'],
        ['1', '7', 'Values 5 to 11'],
        ['2', '5', 'Values 12 to 16'],
        ['3', '4', 'Values 17 to 20']
      ]
    },
    options: ['0', '1', '2', '3'],
    correctIndex: 1,
    correctAnswer: '1',
    explanation: `Step-by-Step Solution:
1. Total number of households is n = 20.
2. Because 20 is even, the median is the average of the 10th and 11th values.
3. Count through the frequencies:
   • The first 4 values are 0 (positions 1–4).
   • The next 7 values are 1 (positions 5–11).
   Both the 10th and 11th values are 1.

4. Calculate median:
   Median = (1 + 1) / 2 = 1

Key Takeaway:
Use running totals (cumulative counts) to locate the exact positions of the middle numbers.`
  },
  {
    title: 'Example 8: Calculating the Range',
    question: 'Find the range of the data set: 15, 28, 11, 39, 44, 18.',
    options: ['29', '31', '33', '44'],
    correctIndex: 2,
    correctAnswer: '33',
    explanation: `Step-by-Step Solution:
1. Identify the smallest (minimum) and largest (maximum) values:
   • Minimum = 11
   • Maximum = 44

2. Subtract the minimum from the maximum:
   Range = Maximum - Minimum = 44 - 11 = 33

Key Takeaway:
Range is the simplest measure of spread: Range = Max - Min.`
  },
  {
    title: 'Example 9: Calculating Quartiles and the Interquartile Range (IQR)',
    question: 'Find the IQR for the ordered data set: 4, 7, 9, 11, 14, 18, 20, 23.',
    options: ['9', '11', '14', '19'],
    correctIndex: 1,
    correctAnswer: '11',
    explanation: `Step-by-Step Solution:
1. Split the 8 numbers into two equal halves:
   • Lower half (first 4 numbers): 4, 7, 9, 11
   • Upper half (last 4 numbers): 14, 18, 20, 23

2. Find Q1 (median of the lower half):
   Q1 = (7 + 9) / 2 = 8

3. Find Q3 (median of the upper half):
   Q3 = (18 + 20) / 2 = 19

4. Subtract Q1 from Q3:
   IQR = Q3 - Q1 = 19 - 8 = 11

Key Takeaway:
IQR = Q3 - Q1. It measures the spread of the middle 50% of the data and is not affected by extreme outliers.`
  },
  {
    title: 'Example 10: Identifying Outliers Using the 1.5 × IQR Rule',
    question: 'A data set has Q1 = 20 and Q3 = 36. Determine whether the value 65 is an outlier according to the standard 1.5 × IQR criterion.',
    options: [
      'No, because 65 is close to the upper quartile',
      'No, because the upper boundary is 70',
      'Yes, 65 is an outlier because it exceeds the upper fence of 60',
      'Yes, 65 is an outlier because it is greater than Q3'
    ],
    correctIndex: 2,
    correctAnswer: 'Yes, 65 is an outlier (it exceeds the upper threshold of 60)',
    explanation: `Step-by-Step Solution:
1. Calculate the Interquartile Range (IQR):
   IQR = Q3 - Q1 = 36 - 20 = 16

2. Multiply IQR by 1.5:
   1.5 × IQR = 1.5 × 16 = 24

3. Find the upper and lower fences (thresholds):
   • Lower Fence = Q1 - 24 = 20 - 24 = -4
   • Upper Fence = Q3 + 24 = 36 + 24 = 60

4. Check the value 65:
   Since 65 > 60, it is above the upper fence and is classified as an outlier.

Key Takeaway:
Any value greater than Q3 + 1.5(IQR) or less than Q1 - 1.5(IQR) is an outlier.`
  },
  {
    title: 'Example 11: Interpreting a Histogram and Finding Total Observations',
    question: 'A histogram shows test score bins: 50–59 (frequency 4), 60–69 (frequency 8), 70–79 (frequency 14), 80–89 (frequency 10), 90–99 (frequency 4). How many students scored 70 or higher?',
    options: ['14', '24', '28', '32'],
    correctIndex: 2,
    diagram: {
      title: 'Exam Score Histogram Distribution',
      caption: 'Scores ≥ 70 are in intervals 70–79 (14), 80–89 (10), and 90–99 (4). Total = 14 + 10 + 4 = 28.',
      xAxisLabel: 'Score Range',
      yAxisLabel: 'Frequency (Students)',
      xRange: [45, 105],
      yRange: [0, 18],
      xStep: 10,
      yStep: 2,
      xTicksLabels: { 50: '50', 60: '60', 70: '70', 80: '80', 90: '90', 100: '100' },
      curves: [
        { type: 'line', points: [[50, 0], [50, 4], [60, 4], [60, 0]], color: '#2563eb', strokeWidth: 2, shade: 'below', shadeColor: 'rgba(59, 130, 246, 0.4)' },
        { type: 'line', points: [[60, 0], [60, 8], [70, 8], [70, 0]], color: '#2563eb', strokeWidth: 2, shade: 'below', shadeColor: 'rgba(59, 130, 246, 0.4)' },
        { type: 'line', points: [[70, 0], [70, 14], [80, 14], [80, 0]], color: '#16a34a', strokeWidth: 2.5, shade: 'below', shadeColor: 'rgba(22, 163, 74, 0.5)' },
        { type: 'line', points: [[80, 0], [80, 10], [90, 10], [90, 0]], color: '#16a34a', strokeWidth: 2.5, shade: 'below', shadeColor: 'rgba(22, 163, 74, 0.5)' },
        { type: 'line', points: [[90, 0], [90, 4], [100, 4], [100, 0]], color: '#16a34a', strokeWidth: 2.5, shade: 'below', shadeColor: 'rgba(22, 163, 74, 0.5)' }
      ],
      textAnnotations: [
        { x: 55, y: 5.2, text: 'f = 4', color: '#1e40af', fontSize: 11, fontWeight: '800' },
        { x: 65, y: 9.2, text: 'f = 8', color: '#1e40af', fontSize: 11, fontWeight: '800' },
        { x: 75, y: 15.2, text: 'f = 14', color: '#15803d', fontSize: 11, fontWeight: '800' },
        { x: 85, y: 11.2, text: 'f = 10', color: '#15803d', fontSize: 11, fontWeight: '800' },
        { x: 95, y: 5.2, text: 'f = 4', color: '#15803d', fontSize: 11, fontWeight: '800' }
      ]
    },
    table: {
      title: 'Exam Score Histogram Distribution',
      headers: ['Score Range', 'Frequency (Students)'],
      rows: [
        ['50–59', '4'],
        ['60–69', '8'],
        ['70–79', '14'],
        ['80–89', '10'],
        ['90–99', '4']
      ]
    },
    correctAnswer: '28',
    explanation: `Step-by-Step Solution:
1. Find all score bars that are 70 or higher:
   • 70–79: 14 students
   • 80–89: 10 students
   • 90–99: 4 students

2. Add their frequencies together:
   Total students scoring ≥ 70 = 14 + 10 + 4 = 28

Key Takeaway:
Read the height of each bar as the student count and add up the bars that meet the condition.`
  },
  {
    title: 'Example 12: Locating the Median Interval in a Histogram',
    question: 'Using the histogram from Example 11 with total students n = 40, which score interval contains the median?',
    options: ['50–59', '60–69', '70–79', '80–89'],
    correctIndex: 2,
    diagram: {
      title: 'Histogram with Median Interval Highlighted',
      caption: 'Cumulative count reaches the 20th and 21st students inside the 70–79 bar.',
      xAxisLabel: 'Score Range',
      yAxisLabel: 'Frequency (Students)',
      xRange: [45, 105],
      yRange: [0, 18],
      xStep: 10,
      yStep: 2,
      xTicksLabels: { 50: '50', 60: '60', 70: '70', 80: '80', 90: '90', 100: '100' },
      curves: [
        { type: 'line', points: [[50, 0], [50, 4], [60, 4], [60, 0]], color: '#94a3b8', strokeWidth: 1.5, shade: 'below', shadeColor: 'rgba(148, 163, 184, 0.25)' },
        { type: 'line', points: [[60, 0], [60, 8], [70, 8], [70, 0]], color: '#94a3b8', strokeWidth: 1.5, shade: 'below', shadeColor: 'rgba(148, 163, 184, 0.25)' },
        { type: 'line', points: [[70, 0], [70, 14], [80, 14], [80, 0]], color: '#f59e0b', strokeWidth: 2.5, shade: 'below', shadeColor: 'rgba(245, 158, 11, 0.45)' },
        { type: 'line', points: [[80, 0], [80, 10], [90, 10], [90, 0]], color: '#94a3b8', strokeWidth: 1.5, shade: 'below', shadeColor: 'rgba(148, 163, 184, 0.25)' },
        { type: 'line', points: [[90, 0], [90, 4], [100, 4], [100, 0]], color: '#94a3b8', strokeWidth: 1.5, shade: 'below', shadeColor: 'rgba(148, 163, 184, 0.25)' }
      ],
      textAnnotations: [
        { x: 55, y: 5.2, text: 'Students 1–4', color: '#64748b', fontSize: 9.5 },
        { x: 65, y: 9.2, text: 'Students 5–12', color: '#64748b', fontSize: 9.5 },
        { x: 75, y: 15.5, text: 'Median Bar (Students 13–26)', color: '#b45309', fontSize: 10, fontWeight: '800' },
        { x: 85, y: 11.2, text: 'Students 27–36', color: '#64748b', fontSize: 9.5 },
        { x: 95, y: 5.2, text: 'Students 37–40', color: '#64748b', fontSize: 9.5 }
      ]
    },
    correctAnswer: '70–79',
    explanation: `Step-by-Step Solution:
1. Total students n = 40.
2. The median is the average of the 20th and 21st students when ordered by score.
3. Count through the score bars:
   • 50–59: 4 students (positions 1–4)
   • 60–69: 8 students (positions 5–12)
   • 70–79: 14 students (positions 13–26)

4. Both the 20th and 21st students fall inside the 70–79 interval.

Key Takeaway:
Divide total observations by 2, then sum bar heights from left to right until you cross that position.`
  },
  {
    title: 'Example 13: Reading a Box Plot Five-Number Summary',
    question: 'A box plot shows whiskers extending from 10 to 50, with the left edge of the box at 22, the vertical line inside the box at 31, and the right edge of the box at 42. State the five-number summary and IQR.',
    options: [
      'Min = 10, Q1 = 22, Median = 31, Q3 = 42, Max = 50; IQR = 20',
      'Min = 10, Q1 = 20, Median = 30, Q3 = 40, Max = 50; IQR = 20',
      'Min = 22, Q1 = 31, Median = 42, Q3 = 50, Max = 60; IQR = 28',
      'Min = 10, Q1 = 22, Median = 31, Q3 = 42, Max = 50; IQR = 40'
    ],
    correctIndex: 0,
    diagram: {
      title: 'Five-Number Summary Box Plot',
      caption: 'Min = 10, Q1 = 22, Median = 31, Q3 = 42, Max = 50; IQR = Q3 - Q1 = 42 - 22 = 20.',
      xAxisLabel: 'Value (x)',
      xRange: [5, 55],
      yRange: [0, 4],
      xStep: 5,
      yStep: 1,
      hideGrid: true,
      curves: [
        { type: 'line', points: [[10, 2], [22, 2]], color: '#0f172a', strokeWidth: 2 },
        { type: 'line', points: [[10, 1.4], [10, 2.6]], color: '#0f172a', strokeWidth: 2 },
        { type: 'line', points: [[22, 1], [22, 3], [42, 3], [42, 1], [22, 1]], color: '#2563eb', strokeWidth: 2.5, shade: 'below', shadeColor: 'rgba(59, 130, 246, 0.25)' },
        { type: 'line', points: [[31, 1], [31, 3]], color: '#1d4ed8', strokeWidth: 3 },
        { type: 'line', points: [[42, 2], [50, 2]], color: '#0f172a', strokeWidth: 2 },
        { type: 'line', points: [[50, 1.4], [50, 2.6]], color: '#0f172a', strokeWidth: 2 }
      ],
      textAnnotations: [
        { x: 10, y: 0.8, text: 'Min: 10', fontSize: 10, color: '#334155', fontWeight: 'bold' },
        { x: 22, y: 3.4, text: 'Q1: 22', fontSize: 10.5, color: '#1d4ed8', fontWeight: '800' },
        { x: 31, y: 0.8, text: 'Median: 31', fontSize: 11, color: '#0f172a', fontWeight: '800' },
        { x: 42, y: 3.4, text: 'Q3: 42', fontSize: 10.5, color: '#1d4ed8', fontWeight: '800' },
        { x: 50, y: 0.8, text: 'Max: 50', fontSize: 10, color: '#334155', fontWeight: 'bold' }
      ]
    },
    correctAnswer: 'Min = 10, Q1 = 22, Median = 31, Q3 = 42, Max = 50; IQR = 20',
    explanation: `Step-by-Step Solution:
1. Read the five key points on the box plot:
   • Minimum = 10 (left whisker tip)
   • Q1 = 22 (left edge of box)
   • Median = 31 (line inside box)
   • Q3 = 42 (right edge of box)
   • Maximum = 50 (right whisker tip)

2. Calculate the IQR:
   IQR = Q3 - Q1 = 42 - 22 = 20

Key Takeaway:
Box edges are Q1 and Q3; center line is the Median; outer whisker ends are Min and Max.`
  },
  {
    title: 'Example 14: Comparing Spread and Center from Box Plots',
    question: 'Box Plot X has Median = 50, IQR = 10, Range = 40. Box Plot Y has Median = 50, IQR = 25, Range = 60. Compare their centers and spreads.',
    options: [
      'Both have identical centers and identical spreads',
      'Plot X has a higher center and greater spread',
      'Equal medians (50), but Plot Y has substantially greater spread (IQR 25 vs 10, Range 60 vs 40)',
      'Equal spreads, but Plot Y has a higher median'
    ],
    correctIndex: 2,
    diagram: {
      title: 'Comparing Box Plots X and Y',
      caption: 'Both distributions have Median = 50, but Plot Y has greater spread (wider box and whiskers).',
      subDiagrams: [
        {
          label: 'Box Plot X (IQR = 10, Range = 40)',
          xAxisLabel: 'Value',
          xRange: [5, 85],
          yRange: [0, 4],
          xStep: 10,
          yStep: 1,
          hideGrid: true,
          curves: [
            { type: 'line', points: [[30, 2], [45, 2]], color: '#0f172a', strokeWidth: 2 },
            { type: 'line', points: [[30, 1.4], [30, 2.6]], color: '#0f172a', strokeWidth: 2 },
            { type: 'line', points: [[45, 1], [45, 3], [55, 3], [55, 1], [45, 1]], color: '#2563eb', strokeWidth: 2.5, shade: 'below', shadeColor: 'rgba(59, 130, 246, 0.25)' },
            { type: 'line', points: [[50, 1], [50, 3]], color: '#1d4ed8', strokeWidth: 3 },
            { type: 'line', points: [[55, 2], [70, 2]], color: '#0f172a', strokeWidth: 2 },
            { type: 'line', points: [[70, 1.4], [70, 2.6]], color: '#0f172a', strokeWidth: 2 }
          ],
          textAnnotations: [
            { x: 30, y: 0.8, text: 'Min: 30', fontSize: 9.5, color: '#334155' },
            { x: 45, y: 3.4, text: 'Q1: 45', fontSize: 9.5, color: '#1d4ed8' },
            { x: 50, y: 0.8, text: 'Med: 50', fontSize: 10, fontWeight: '800', color: '#0f172a' },
            { x: 55, y: 3.4, text: 'Q3: 55', fontSize: 9.5, color: '#1d4ed8' },
            { x: 70, y: 0.8, text: 'Max: 70', fontSize: 9.5, color: '#334155' }
          ]
        },
        {
          label: 'Box Plot Y (IQR = 25, Range = 60)',
          xAxisLabel: 'Value',
          xRange: [5, 85],
          yRange: [0, 4],
          xStep: 10,
          yStep: 1,
          hideGrid: true,
          curves: [
            { type: 'line', points: [[20, 2], [37.5, 2]], color: '#0f172a', strokeWidth: 2 },
            { type: 'line', points: [[20, 1.4], [20, 2.6]], color: '#0f172a', strokeWidth: 2 },
            { type: 'line', points: [[37.5, 1], [37.5, 3], [62.5, 3], [62.5, 1], [37.5, 1]], color: '#ea580c', strokeWidth: 2.5, shade: 'below', shadeColor: 'rgba(234, 88, 12, 0.25)' },
            { type: 'line', points: [[50, 1], [50, 3]], color: '#c2410c', strokeWidth: 3 },
            { type: 'line', points: [[62.5, 2], [80, 2]], color: '#0f172a', strokeWidth: 2 },
            { type: 'line', points: [[80, 1.4], [80, 2.6]], color: '#0f172a', strokeWidth: 2 }
          ],
          textAnnotations: [
            { x: 20, y: 0.8, text: 'Min: 20', fontSize: 9.5, color: '#334155' },
            { x: 37.5, y: 3.4, text: 'Q1: 37.5', fontSize: 9.5, color: '#c2410c' },
            { x: 50, y: 0.8, text: 'Med: 50', fontSize: 10, fontWeight: '800', color: '#0f172a' },
            { x: 62.5, y: 3.4, text: 'Q3: 62.5', fontSize: 9.5, color: '#c2410c' },
            { x: 80, y: 0.8, text: 'Max: 80', fontSize: 9.5, color: '#334155' }
          ]
        }
      ]
    },
    correctAnswer: 'Equal medians (50), but Box Plot Y has substantially greater spread (IQR 25 vs 10, Range 60 vs 40)',
    explanation: `Step-by-Step Solution:
1. Compare the center:
   Both plots have their middle line at 50, so both medians are equal to 50.

2. Compare the spread:
   • IQR for Y (25) is greater than IQR for X (10) → Y has wider middle-50% spread.
   • Range for Y (60) is greater than Range for X (40) → Y spans a wider total distance.

Key Takeaway:
Always compare center (Median) and spread (IQR and Range) separately.`
  },
  {
    title: 'Example 15: Analyzing a Dot Plot',
    question: 'A dot plot shows the following dots: at 1 (2 dots), at 2 (4 dots), at 3 (5 dots), at 4 (3 dots), at 5 (1 dot). Find the mode, median, and mean.',
    options: [
      'Mode = 3, Median = 3, Mean = 2.8',
      'Mode = 5, Median = 3, Mean = 3.0',
      'Mode = 3, Median = 2.5, Mean = 2.8',
      'Mode = 3, Median = 3, Mean = 3.2'
    ],
    correctIndex: 0,
    diagram: {
      title: 'Dot Plot Frequency Distribution',
      caption: 'Each dot represents 1 observation (Total n = 15). Mode = 3 (tallest stack).',
      xAxisLabel: 'Data Value (x)',
      yAxisLabel: 'Count / Stack Height',
      xRange: [0, 6],
      yRange: [0, 6.5],
      xStep: 1,
      yStep: 1,
      hideGrid: true,
      curves: [
        { type: 'line', points: [[0.5, 0], [5.5, 0]], color: '#0f172a', strokeWidth: 2 },
        { type: 'points', points: [[1, 1], [1, 2]], color: '#2563eb' },
        { type: 'points', points: [[2, 1], [2, 2], [2, 3], [2, 4]], color: '#2563eb' },
        { type: 'points', points: [[3, 1], [3, 2], [3, 3], [3, 4], [3, 5]], color: '#16a34a' },
        { type: 'points', points: [[4, 1], [4, 2], [4, 3]], color: '#2563eb' },
        { type: 'points', points: [[5, 1]], color: '#2563eb' }
      ],
      textAnnotations: [
        { x: 1, y: 2.6, text: '2 dots', color: '#64748b', fontSize: 9.5 },
        { x: 2, y: 4.6, text: '4 dots', color: '#64748b', fontSize: 9.5 },
        { x: 3, y: 5.7, text: '5 dots (Mode)', color: '#15803d', fontSize: 10, fontWeight: '800' },
        { x: 4, y: 3.6, text: '3 dots', color: '#64748b', fontSize: 9.5 },
        { x: 5, y: 1.6, text: '1 dot', color: '#64748b', fontSize: 9.5 }
      ]
    },
    correctAnswer: 'Mode = 3, Median = 3, Mean = 2.8',
    explanation: `Step-by-Step Solution:
1. Mode: The value 3 has the tallest column (5 dots), so Mode = 3.
2. Total dots n = 2 + 4 + 5 + 3 + 1 = 15 dots.
3. Median: For 15 dots, the 8th dot is the exact middle:
   • Dots 1–2: value 1
   • Dots 3–6: value 2
   • Dots 7–11: value 3 → The 8th dot is 3. Median = 3.

4. Mean:
   Total Sum = 2(1) + 4(2) + 5(3) + 3(4) + 1(5) = 2 + 8 + 15 + 12 + 5 = 42
   Mean = 42 / 15 = 2.8

Key Takeaway:
Each dot is one data point. Tallest stack is the mode, and count to the middle dot for the median.`
  },
  {
    title: 'Example 16: Effect of Adding a Constant on Center and Spread',
    question: 'A data set has Mean = 50, Median = 48, Range = 20, and Standard Deviation = 4.5. If 8 is added to every value in the data set, what are the new values for these four statistics?',
    options: [
      'Mean = 58, Median = 56, Range = 28, SD = 12.5',
      'Mean = 58, Median = 56, Range = 20, SD = 4.5',
      'Mean = 50, Median = 48, Range = 20, SD = 4.5',
      'Mean = 58, Median = 48, Range = 20, SD = 4.5'
    ],
    correctIndex: 1,
    correctAnswer: 'Mean = 58, Median = 56, Range = 20, SD = 4.5',
    explanation: `Step-by-Step Solution:
1. Measures of center (Mean and Median):
   Adding 8 shifts all numbers up by 8:
   • New Mean = 50 + 8 = 58
   • New Median = 48 + 8 = 56

2. Measures of spread (Range and Standard Deviation):
   Adding a constant shifts every point equally without changing the distance between them:
   • New Range = 20 (remains unchanged)
   • New Standard Deviation = 4.5 (remains unchanged)

Key Takeaway:
Adding or subtracting a number shifts the center (Mean, Median) but does NOT change the spread (Range, IQR, Standard Deviation).`
  },
  {
    title: 'Example 17: Effect of Multiplying by a Constant on Center and Spread',
    question: 'A data set has Mean = 20, Median = 18, Range = 12, and Standard Deviation = 3. Every value is multiplied by 4. What are the new statistics?',
    options: [
      'Mean = 80, Median = 72, Range = 12, SD = 3',
      'Mean = 80, Median = 72, Range = 48, SD = 12',
      'Mean = 24, Median = 22, Range = 16, SD = 7',
      'Mean = 80, Median = 18, Range = 48, SD = 3'
    ],
    correctIndex: 1,
    correctAnswer: 'Mean = 80, Median = 72, Range = 48, SD = 12',
    explanation: `Step-by-Step Solution:
1. Effect on Center:
   • New Mean = 20 × 4 = 80
   • New Median = 18 × 4 = 72

2. Effect on Spread:
   • New Range = 12 × 4 = 48
   • New Standard Deviation = 3 × 4 = 12

Key Takeaway:
Multiplying all numbers by a factor multiplies BOTH center and spread by that same factor.`
  },
  {
    title: 'Example 18: Skewness and the Relationship Between Mean and Median',
    question: 'A distribution of salaries in a small company has a median of $55,000 and a mean of $78,000. What is the shape of the distribution, and which statistic is the better measure of center for a typical employee?',
    options: [
      'Left-skewed; Mean ($78,000) is the better measure',
      'Symmetric; Mean ($78,000) is the better measure',
      'Right-skewed; Median ($55,000) is the better measure of center',
      'Right-skewed; Mean ($78,000) is the better measure of center'
    ],
    correctIndex: 2,
    diagram: {
      title: 'Right-Skewed Salary Distribution',
      caption: 'Mean ($78k) is pulled rightward by high outliers, while Median ($55k) stays near the peak.',
      xAxisLabel: 'Salary ($ in thousands)',
      yAxisLabel: 'Relative Frequency',
      xRange: [20, 160],
      yRange: [0, 10],
      xStep: 20,
      yStep: 2,
      hideGrid: true,
      curves: [
        {
          type: 'function',
          points: [
            [25, 0.2], [35, 2.5], [45, 7.5], [52, 9.2], [55, 9.0],
            [65, 6.8], [78, 4.2], [95, 2.3], [115, 1.2], [140, 0.5], [155, 0.1]
          ],
          color: '#2563eb',
          strokeWidth: 2.5,
          shade: 'below',
          shadeColor: 'rgba(59, 130, 246, 0.18)'
        },
        { type: 'line', points: [[55, 0], [55, 9.0]], color: '#16a34a', strokeWidth: 2.5, style: 'dashed' },
        { type: 'line', points: [[78, 0], [78, 4.2]], color: '#dc2626', strokeWidth: 2.5, style: 'dashed' }
      ],
      textAnnotations: [
        { x: 55, y: 9.6, text: 'Median: $55k', color: '#15803d', fontSize: 10.5, fontWeight: '800' },
        { x: 78, y: 5.0, text: 'Mean: $78k', color: '#b91c1c', fontSize: 10.5, fontWeight: '800' },
        { x: 120, y: 2.0, text: 'Long Right Tail →', color: '#64748b', fontSize: 9.5 }
      ]
    },
    correctAnswer: 'Right-skewed; Median ($55,000) is the better measure of center',
    explanation: `Step-by-Step Solution:
1. Compare Mean and Median:
   Mean ($78,000) > Median ($55,000)

2. Determine Skewness:
   When the mean is pulled above the median, it is caused by high values in the right tail. The distribution is skewed right (right-skewed).

3. Choose the better measure of center:
   Because extreme salaries pull the mean upward, the median ($55,000) is resistant to outliers and gives a much more realistic picture of what a typical employee earns.

Key Takeaway:
• Skewed Right: Mean > Median (use Median for typical center)
• Symmetric: Mean ≈ Median (use Mean)
• Skewed Left: Mean < Median (use Median)`
  },
  {
    title: 'Example 19: Comparing Standard Deviations from Visual Displays',
    question: 'Distribution A has 30 values all between 48 and 52. Distribution B has 30 values spread evenly between 10 and 90. Both have Mean = 50. Which distribution has the greater standard deviation?',
    options: [
      'Distribution A has the greater standard deviation',
      'Distribution B has the greater standard deviation',
      'Both have identical standard deviations since both means are 50',
      'Cannot be determined without knowing each individual score'
    ],
    correctIndex: 1,
    diagram: {
      title: 'Comparing Spread / Standard Deviation',
      caption: 'Both distributions have Mean = 50. Distribution B has much greater dispersion from the center.',
      subDiagrams: [
        {
          label: 'Distribution A (Clustered: Small SD)',
          xAxisLabel: 'Value (x)',
          yAxisLabel: 'Frequency',
          xRange: [0, 100],
          yRange: [0, 16],
          xStep: 20,
          yStep: 4,
          hideGrid: true,
          curves: [
            { type: 'line', points: [[48, 0], [48, 15], [52, 15], [52, 0]], color: '#2563eb', strokeWidth: 2, shade: 'below', shadeColor: 'rgba(59, 130, 246, 0.35)' }
          ],
          textAnnotations: [
            { x: 50, y: 12.0, text: 'Packed [48, 52]', color: '#1e40af', fontSize: 10, fontWeight: '800' },
            { x: 50, y: 3.0, text: 'SD ≈ 1.2 (Small)', color: '#1e40af', fontSize: 9.5 }
          ]
        },
        {
          label: 'Distribution B (Widely Dispersed: Large SD)',
          xAxisLabel: 'Value (x)',
          yAxisLabel: 'Frequency',
          xRange: [0, 100],
          yRange: [0, 16],
          xStep: 20,
          yStep: 4,
          hideGrid: true,
          curves: [
            { type: 'line', points: [[10, 0], [10, 3], [90, 3], [90, 0]], color: '#ea580c', strokeWidth: 2, shade: 'below', shadeColor: 'rgba(234, 88, 12, 0.35)' }
          ],
          textAnnotations: [
            { x: 50, y: 5.5, text: 'Spread [10, 90]', color: '#c2410c', fontSize: 10, fontWeight: '800' },
            { x: 50, y: 1.5, text: 'SD ≈ 23.5 (Large)', color: '#c2410c', fontSize: 9.5 }
          ]
        }
      ]
    },
    correctAnswer: 'Distribution B has the greater standard deviation',
    explanation: `Step-by-Step Solution:
1. Standard deviation measures how far data values spread out from the mean.
2. Compare the spreads:
   • Distribution A: points are tightly clustered near 50 (only 2 units away).
   • Distribution B: points are spread out widely between 10 and 90 (up to 40 units away).
3. Therefore, Distribution B has a much larger standard deviation.

Key Takeaway:
The more spread out the numbers are from the mean, the larger the standard deviation.`
  },
  {
    title: 'Example 20: Standard Deviation Properties and Invariance',
    question: 'Set 1: {10, 10, 10, 10, 10}. Set 2: {10, 20, 30, 40, 50}. Set 3: {110, 120, 130, 140, 150}. Find the standard deviation of Set 1 and compare Set 2 and Set 3.',
    options: [
      'SD(Set 1) = 10; SD(Set 3) > SD(Set 2)',
      'SD(Set 1) = 0; SD(Set 2) = SD(Set 3)',
      'SD(Set 1) = 0; SD(Set 3) = SD(Set 2) + 100',
      'SD(Set 1) = 5; SD(Set 2) = SD(Set 3)'
    ],
    correctIndex: 1,
    correctAnswer: 'SD(Set 1) = 0; SD(Set 2) = SD(Set 3)',
    explanation: `Step-by-Step Solution:
1. In Set 1, all numbers are identical (10). Since there is zero variation:
   SD(Set 1) = 0

2. Look at Set 2 and Set 3:
   Set 3 is created by adding 100 to every number in Set 2. Adding a constant shifts the numbers but leaves the spacing between them identical:
   SD(Set 3) = SD(Set 2)

Key Takeaway:
When all numbers are identical, Standard Deviation = 0. Adding a constant never changes standard deviation.`
  },
  {
    title: 'Example 21: Identifying Association in a Scatterplot',
    question: 'A scatterplot shows study hours (x) and exam score (y). As x increases from 1 to 10, y increases from 45 to 95 in a tight, upward straight line band. Classify the direction, form, and strength of the association.',
    options: [
      'Strong negative linear association',
      'Weak positive curved association',
      'Strong positive linear association',
      'No association'
    ],
    correctIndex: 2,
    diagram: {
      title: 'Study Hours vs Exam Score Scatterplot',
      caption: 'Points cluster tightly along an upward straight linear band → Strong positive linear association.',
      xAxisLabel: 'Study Hours (x)',
      yAxisLabel: 'Exam Score (y)',
      xRange: [0, 12],
      yRange: [35, 105],
      xStep: 2,
      yStep: 10,
      curves: [
        {
          type: 'points',
          points: [
            [1, 48], [1.5, 52], [2, 55], [3, 61], [3.5, 60], [4, 68],
            [5, 72], [5.5, 76], [6, 79], [7, 82], [7.5, 85], [8, 89],
            [9, 92], [9.5, 96], [10, 95]
          ],
          color: '#2563eb'
        },
        {
          type: 'line',
          points: [[0.5, 45], [10.5, 98]],
          color: '#dc2626',
          strokeWidth: 2,
          style: 'dashed',
          label: 'Upward Trend',
          labelPosition: { x: 8.5, y: 84 }
        }
      ],
      textAnnotations: [
        { x: 3.5, y: 92, text: 'Strong Positive Linear', color: '#1e3a8a', fontSize: 11, fontWeight: '800' }
      ]
    },
    correctAnswer: 'Strong positive linear association',
    explanation: `Step-by-Step Solution:
1. Direction: As x increases, y increases → Positive association.
2. Form: The dots follow a straight path → Linear association.
3. Strength: The dots stay closely clustered along the trendline → Strong association.

Key Takeaway:
Describe scatterplots by checking three features: Direction (positive/negative), Form (linear/curved), and Strength (strong/moderate/weak).`
  },
  {
    title: 'Example 22: Estimating the Line of Best Fit Equation',
    question: 'A line of best fit passes through (2, 14) and (6, 26). Find its equation in slope-intercept form y = mx + b.',
    options: [
      'y = 2x + 10',
      'y = 3x + 8',
      'y = 4x + 6',
      'y = 3x + 14'
    ],
    correctIndex: 1,
    diagram: {
      title: 'Line of Best Fit Equation & Slope Triangle',
      caption: 'Line passes through (2, 14) and (6, 26). Slope m = (26 - 14)/(6 - 2) = 12/4 = 3, y-intercept b = 8.',
      xAxisLabel: 'x (Input)',
      yAxisLabel: 'y (Output)',
      xRange: [0, 8],
      yRange: [0, 32],
      xStep: 1,
      yStep: 4,
      curves: [
        // Solid line of best fit y = 3x + 8 from x = 0 to x = 8
        {
          type: 'line',
          points: [[0, 8], [8, 32]],
          color: '#2563eb',
          strokeWidth: 3,
          label: 'y = 3x + 8',
          labelPosition: { x: 4.8, y: 24 }
        },
        // Slope Triangle between (2, 14) and (6, 26)
        {
          type: 'line',
          points: [[2, 14], [6, 14], [6, 26]],
          color: '#dc2626',
          strokeWidth: 2,
          style: 'dashed'
        },
        // Key given points on the line
        {
          type: 'points',
          points: [[0, 8], [2, 14], [6, 26]],
          color: '#dc2626'
        },
        // Scatter points around the trendline
        {
          type: 'points',
          points: [[1, 10.5], [1.5, 13], [3, 16.5], [3.5, 19], [4.2, 20.2], [5, 23.5], [7, 28.5]],
          color: '#94a3b8'
        }
      ],
      textAnnotations: [
        { x: 0.9, y: 8, text: '(0, 8) Intercept', color: '#b91c1c', fontSize: 10, fontWeight: '800' },
        { x: 2, y: 16.5, text: '(2, 14)', color: '#b91c1c', fontSize: 10.5, fontWeight: '800' },
        { x: 6, y: 28.5, text: '(6, 26)', color: '#b91c1c', fontSize: 10.5, fontWeight: '800' },
        { x: 4, y: 12.3, text: 'Run Δx = +4', color: '#dc2626', fontSize: 9.5, fontWeight: '800' },
        { x: 6.8, y: 20, text: 'Rise Δy = +12', color: '#dc2626', fontSize: 9.5, fontWeight: '800' }
      ]
    },
    correctAnswer: 'y = 3x + 8',
    explanation: `Step-by-Step Solution:
1. Find the slope (m) using the two given points (2, 14) and (6, 26):
   Slope m = (y2 - y1) / (x2 - x1)
   Slope m = (26 - 14) / (6 - 2) = 12 / 4 = 3

2. Find the y-intercept (b) by plugging in the slope m = 3 and the point (2, 14):
   y = mx + b
   14 = 3(2) + b
   14 = 6 + b
   b = 8

3. Write the final equation:
   y = 3x + 8

Key Takeaway:
Use any two points on the line to calculate the slope m = (Rise) / (Run), then solve for the y-intercept b.`
  },
  {
    title: 'Example 23: Interpreting the Slope in Context',
    question: 'A regression model is given by H = 2.4A + 50, where H is the predicted height of a tree in inches and A is its age in years. What is the meaning of the slope 2.4 in this context?',
    options: [
      'The tree grows to a maximum height of 2.4 inches',
      'For each 1-year increase in age, the predicted height increases by 2.4 inches',
      'The initial height of the tree when planted was 2.4 inches',
      'The tree will take 2.4 years to grow 50 inches'
    ],
    correctIndex: 1,
    correctAnswer: 'For each 1-year increase in age, the predicted height increases by 2.4 inches',
    explanation: `Step-by-Step Solution:
1. The slope is m = 2.4 = (2.4 inches) / (1 year).
2. The slope tells us how much the output (H) changes for every 1-unit increase in the input (A).
3. Meaning: For every additional 1 year of age, the tree\'s predicted height increases by 2.4 inches.

Key Takeaway:
Slope template: "For every 1-unit increase in x, y is predicted to increase/decrease by m units."`
  },
  {
    title: 'Example 24: Interpreting the Y-Intercept in Context',
    question: 'Using the model H = 2.4A + 50 from Example 23, what is the meaning of the y-intercept 50 in this context?',
    options: [
      'The tree grows 50 inches per year',
      'The tree will live for 50 years',
      'When age is 0 years (at planting), the predicted initial height is 50 inches',
      'The tree reaches a maximum height of 50 inches'
    ],
    correctIndex: 2,
    correctAnswer: 'When age is 0 years, the predicted initial height is 50 inches',
    explanation: `Step-by-Step Solution:
1. The y-intercept happens when the input variable is 0 (A = 0):
   H = 2.4(0) + 50 = 50 inches

2. Meaning: When the tree is planted (age = 0 years), its initial height is 50 inches.

Key Takeaway:
y-intercept template: "When x is 0, the predicted value of y is b."`
  },
  {
    title: 'Example 25: Calculating and Interpreting Residuals',
    question: 'A line of best fit is y = 4x + 10. An actual observed data point in the study is (5, 33). Calculate the residual for this data point and interpret what it means.',
    options: [
      'Residual = -3 (actual point is 3 units below the line)',
      'Residual = +3 (actual point is 3 units above the line)',
      'Residual = +7 (actual point is 7 units above the line)',
      'Residual = 0 (point lies directly on the line)'
    ],
    correctIndex: 1,
    diagram: {
      title: 'Residual Calculation on Scatterplot',
      caption: 'Observed point (5, 33) is 3 units above the predicted model point (5, 30). Residual = +3.',
      xAxisLabel: 'x',
      yAxisLabel: 'y',
      xRange: [0, 8],
      yRange: [0, 45],
      xStep: 1,
      yStep: 5,
      curves: [
        {
          type: 'line',
          points: [[0, 10], [7.5, 40]],
          color: '#2563eb',
          strokeWidth: 2.5,
          label: 'ŷ = 4x + 10',
          labelPosition: { x: 3, y: 25 }
        },
        {
          type: 'line',
          points: [[5, 30], [5, 33]],
          color: '#ea580c',
          strokeWidth: 3
        },
        {
          type: 'points',
          points: [[1, 13], [2, 19], [3, 21], [4, 28], [6, 32], [7, 39]],
          color: '#64748b'
        }
      ],
      textAnnotations: [
        { x: 5, y: 35.5, text: 'Observed (5, 33)', color: '#ea580c', fontSize: 10, fontWeight: '800' },
        { x: 5.6, y: 29.5, text: 'Predicted (5, 30)', color: '#1e40af', fontSize: 9.5 },
        { x: 5.8, y: 32, text: 'Residual = +3', color: '#c2410c', fontSize: 10, fontWeight: '800' }
      ]
    },
    correctAnswer: 'Residual = +3 (actual value is 3 units above the predicted line)',
    explanation: `Step-by-Step Solution:
1. Find the predicted value (ŷ) when x = 5:
   Predicted y = 4(5) + 10 = 20 + 10 = 30

2. Identify the actual observed value:
   Actual y = 33

3. Calculate the residual:
   Residual = Actual y - Predicted y = 33 - 30 = +3

4. Interpretation:
   A positive residual (+3) means the real data point lies 3 units above the line of best fit.

Key Takeaway:
Residual = Actual - Predicted. Positive means above the line; negative means below the line.`
  },
  {
    title: 'Example 26: Interpolation vs. Extrapolation',
    question: 'A researcher builds a model relating running speed to heart rate using test subjects running between 4 mph and 10 mph. Explain whether predicting heart rate at 7 mph and at 18 mph are interpolation or extrapolation, and assess their reliability.',
    options: [
      '7 mph is extrapolation (unreliable); 18 mph is interpolation (reliable)',
      'Both predictions are reliable interpolations',
      '7 mph is interpolation (reliable); 18 mph is extrapolation (unreliable)',
      'Both predictions are unreliable extrapolations'
    ],
    correctIndex: 2,
    correctAnswer: '7 mph is interpolation (reliable); 18 mph is extrapolation (unreliable)',
    explanation: `Step-by-Step Solution:
1. The tested speed range is from 4 mph to 10 mph.

2. Look at x = 7 mph:
   7 mph falls within the tested range [4, 10] → Interpolation. This prediction is safe and reliable.

3. Look at x = 18 mph:
   18 mph is far outside the tested range [4, 10] → Extrapolation. This prediction is unreliable because physiological limits make the linear pattern break down at extreme speeds.

Key Takeaway:
• Interpolation: Predicting inside the tested data range (reliable).
• Extrapolation: Predicting outside the tested data range (risky and unreliable).`
  },
  {
    title: 'Example 27: Evaluating Sampling Methods and Generalizability',
    question: 'A researcher wants to know the proportion of city residents who support building a new park. Method A surveys the first 200 people entering a fitness gym. Method B selects 200 residents at random from the city voter registration list. Compare the generalizability of both methods.',
    options: [
      'Method A generalizes to all city residents; Method B does not',
      'Method B generalizes to registered city residents; Method A has convenience bias',
      'Both methods generalize equally well to all city residents',
      'Neither method can be used for any statistical conclusion'
    ],
    correctIndex: 1,
    correctAnswer: 'Method B generalizes to registered city residents; Method A has convenience bias',
    explanation: `Step-by-Step Solution:
1. Evaluate Method A (Gym Survey):
   Surveying people entering a gym is a convenience sample. Gym members are more active and more likely to support parks than the average resident. This selection bias means the results cannot be generalized to the entire city.

2. Evaluate Method B (Random Selection from City List):
   Random sampling gives every registered resident an equal chance of being selected, which prevents selection bias.

3. Conclusion:
   Method B produces a representative sample that can be generalized to registered city residents.

Key Takeaway:
Only random sampling from the target population allows valid conclusions about that population.`
  },
  {
    title: 'Example 28: Observational Study vs. Randomized Controlled Experiment',
    question: 'Study 1 observes 500 people and finds that those who drink green tea have lower blood pressure. Study 2 randomly assigns 500 people to drink either green tea or water daily for 6 months. What conclusion can each study make about causation?',
    options: [
      'Study 1 proves green tea causes lower blood pressure; Study 2 does not',
      'Study 1 shows association only; Study 2 can establish causation (cause-and-effect)',
      'Both studies prove that green tea causes lower blood pressure',
      'Neither study can establish any relationship'
    ],
    correctIndex: 1,
    correctAnswer: 'Study 1 shows association only; Study 2 can establish causation',
    explanation: `Step-by-Step Solution:
1. Evaluate Study 1 (Observational Study):
   Researchers only observed people without assigning treatments. Other factors (like a healthier overall diet or exercise) could explain the lower blood pressure.
   → Proves association only, NOT causation.

2. Evaluate Study 2 (Randomized Experiment):
   Participants were randomly assigned to green tea or water groups. Random assignment balances out outside factors.
   → Proves causation (green tea causes lower blood pressure).

Key Takeaway:
• Observational study → Association only (correlation is not causation).
• Randomized experiment with random assignment → Can prove cause-and-effect (causation).`
  },
  {
    title: 'Example 29: Calculating Confidence Intervals from Margin of Error',
    question: 'A political poll of 1,000 likely voters reports that candidate Smith has 52% support with a margin of error of ±3.5%. Construct the confidence interval and determine if the poll guarantees Smith will win a majority (> 50%).',
    options: [
      'Interval is [50.0%, 55.5%]; majority is guaranteed',
      'Interval is [48.5%, 55.5%]; majority is plausible but NOT guaranteed',
      'Interval is [45.0%, 59.0%]; majority cannot be achieved',
      'Interval is [52.0%, 55.5%]; majority is guaranteed'
    ],
    correctIndex: 1,
    correctAnswer: 'Interval is [48.5%, 55.5%]; majority (> 50%) is plausible but not guaranteed',
    explanation: `Step-by-Step Solution:
1. Calculate the confidence interval bounds:
   • Lower Bound = 52% - 3.5% = 48.5%
   • Upper Bound = 52% + 3.5% = 55.5%
   Confidence Interval = [48.5%, 55.5%]

2. Check if a majority (> 50%) is guaranteed:
   Because the confidence interval includes values below 50% (from 48.5% to 49.9%), it is statistically possible that true support is under 50%. The poll does not guarantee a victory.

Key Takeaway:
Confidence Interval = [Estimate - Margin of Error, Estimate + Margin of Error]. If the interval includes values on both sides of 50%, the result is too close to call.`
  },
  {
    title: 'Example 30: Sample Size and Margin of Error Relationship',
    question: 'A poll of 400 people has a margin of error of 5%. If the researcher wants to reduce the margin of error to 2.5%, what sample size is required?',
    options: [
      'n = 800 people',
      'n = 1,200 people',
      'n = 1,600 people',
      'n = 3,200 people'
    ],
    correctIndex: 2,
    correctAnswer: 'n = 1,600 people',
    explanation: `Step-by-Step Solution:
1. Recall the relationship between Margin of Error and sample size (n):
   Margin of Error is proportional to 1 / √(n)

2. Determine the reduction needed:
   The desired margin of error (2.5%) is half of the original 5% (divided by 2).

3. Calculate the required sample size:
   To cut the margin of error in half (divide by 2), the sample size must be multiplied by 2² = 4:
   New Sample Size = 400 × 4 = 1,600 people

Key Takeaway:
To reduce the margin of error by a factor of k, you must multiply the sample size by k². Halving the error requires 4 times the sample size.`
  }
];
