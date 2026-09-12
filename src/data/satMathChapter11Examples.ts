import { MathWorkedExample } from './satMathConcepts';

export const CHAPTER_11_WORKED_EXAMPLES: MathWorkedExample[] = [
  {
    title: 'Example 1: Direct Table Reading & Absolute Difference',
    question: `The table below displays the annual number of student applications received by an academic program from 2021 through 2024.

How many more applications were received in 2024 than in 2021?`,
    table: {
      title: 'Annual Student Applications (2021–2024)',
      headers: ['Year', 'Applications'],
      rows: [
        ['2021', '420'],
        ['2022', '475'],
        ['2023', '530'],
        ['2024', '610']
      ]
    },
    options: ['150', '170', '190', '210'],
    correctIndex: 2,
    correctAnswer: '190',
    explanation: `Step-by-Step Solution:
1. Locate the application count for the year 2024:
   $$\\text{Applications}_{2024} = 610$$

2. Locate the application count for the year 2021:
   $$\\text{Applications}_{2021} = 420$$

3. Compute the absolute increase by subtraction:
   $$\\text{Difference} = 610 - 420 = 190$$

Teacher's SAT Pro-Tip:
Do not calculate intermediate changes (2021→2022 or 2022→2023) unless explicitly requested. Direct subtraction between the target endpoints saves valuable seconds.

SAT Trap Alert:
Avoid confusing the absolute difference ($190$) with a percentage increase ($\\frac{190}{420} \\approx 45.2\\%$). Always verify whether the question asks for a count or a percent.`
  },
  {
    title: 'Example 2: Count vs. Percentage Comparison',
    question: `A district surveyed extracurricular club participation across two high schools, as shown in the table below.

Which statement correctly compares student participation between the two schools?`,
    table: {
      title: 'Extracurricular Participation Survey',
      headers: ['School', 'Participating Students', 'Total Students Enrolled'],
      rows: [
        ['School A', '96', '240'],
        ['School B', '120', '400']
      ]
    },
    options: [
      'School B has both a greater number and a greater percentage of participating students.',
      'School A has both a greater number and a greater percentage of participating students.',
      'School B has more participating students, but School A has a greater participation percentage.',
      'School A has more participating students, but School B has a greater participation percentage.'
    ],
    correctIndex: 2,
    correctAnswer: 'School B has more participating students, but School A has a greater participation percentage.',
    explanation: `Step-by-Step Solution:
1. Compare Raw Counts:
   • School A participants = 96
   • School B participants = 120
   Since $120 > 96$, School B has more total participating students.

2. Calculate and Compare Participation Rates (Percentages):
   • School A: $\\frac{96}{240} = 0.40 = 40\\%$
   • School B: $\\frac{120}{400} = 0.30 = 30\\%$
   Since $40\\% > 30\\%$, School A has the higher participation rate.

3. Formulate the supported conclusion:
   School B has a greater count of participants ($120$ vs. $96$), but School A has a higher participation percentage ($40\\%$ vs. $30\\%$).

Teacher's SAT Pro-Tip:
Whenever group totals differ, always distinguish clearly between the absolute frequency (raw count) and the relative frequency (rate/percentage). Never assume a larger total count implies a larger percentage.`
  },
  {
    title: 'Example 3: Frequency Table & Relative Frequency',
    question: `A biology quiz with a maximum score of 90 points was administered to 40 students. The score distribution is shown in the frequency table below.

What percentage of the students scored exactly 70 points?`,
    table: {
      title: 'Biology Quiz Score Distribution (n = 40)',
      headers: ['Score', 'Frequency (Students)'],
      rows: [
        ['50', '4'],
        ['60', '7'],
        ['70', '13'],
        ['80', '11'],
        ['90', '5']
      ]
    },
    options: ['13.0%', '25.0%', '32.5%', '37.5%'],
    correctIndex: 2,
    correctAnswer: '32.5%',
    explanation: `Step-by-Step Solution:
1. Verify the total number of observations ($n$):
   $$\\text{Total} = 4 + 7 + 13 + 11 + 5 = 40$$

2. Identify the frequency corresponding to a score of 70:
   $$\\text{Frequency}(70) = 13$$

3. Calculate relative frequency as a percentage:
   $$\\text{Percentage} = \\frac{13}{40} \\times 100\\% = 0.325 \\times 100\\% = 32.5\\%$$

Teacher's SAT Pro-Tip:
Relative frequency formula: $\\text{Percent} = \\frac{\\text{Category Count}}{\\text{Total Count}} \\times 100\\%$. Divide the row frequency by the sum of all frequencies.`
  },
  {
    title: 'Example 4: Histogram Interval Interpretation',
    question: `The histogram below illustrates the distribution of exam scores for 43 students across five numerical score intervals.

Which score interval contains the greatest number of students?`,
    diagram: {
      title: 'Exam Score Distribution',
      caption: 'Histogram showing student frequencies grouped in 10-point intervals.',
      xAxisLabel: 'Score Interval',
      yAxisLabel: 'Number of Students',
      xRange: [35, 95],
      yRange: [0, 18],
      xStep: 10,
      yStep: 3,
      curves: [
        { type: 'line', points: [[40, 0], [40, 3], [49, 3], [49, 0]], color: '#2563eb', strokeWidth: 2, shade: 'region', shadeColor: 'rgba(37, 99, 235, 0.25)' },
        { type: 'line', points: [[50, 0], [50, 8], [59, 8], [59, 0]], color: '#2563eb', strokeWidth: 2, shade: 'region', shadeColor: 'rgba(37, 99, 235, 0.25)' },
        { type: 'line', points: [[60, 0], [60, 15], [69, 15], [69, 0]], color: '#2563eb', strokeWidth: 2, shade: 'region', shadeColor: 'rgba(37, 99, 235, 0.35)' },
        { type: 'line', points: [[70, 0], [70, 12], [79, 12], [79, 0]], color: '#2563eb', strokeWidth: 2, shade: 'region', shadeColor: 'rgba(37, 99, 235, 0.25)' },
        { type: 'line', points: [[80, 0], [80, 5], [89, 5], [89, 0]], color: '#2563eb', strokeWidth: 2, shade: 'region', shadeColor: 'rgba(37, 99, 235, 0.25)' }
      ],
      textAnnotations: [
        { x: 44.5, y: 4.2, text: 'f = 3', color: '#1e40af', fontSize: 9, fontWeight: '700' },
        { x: 54.5, y: 9.2, text: 'f = 8', color: '#1e40af', fontSize: 9, fontWeight: '700' },
        { x: 64.5, y: 16.2, text: 'f = 15', color: '#1e40af', fontSize: 9.5, fontWeight: '800' },
        { x: 74.5, y: 13.2, text: 'f = 12', color: '#1e40af', fontSize: 9, fontWeight: '700' },
        { x: 84.5, y: 6.2, text: 'f = 5', color: '#1e40af', fontSize: 9, fontWeight: '700' }
      ]
    },
    options: ['40–49', '50–59', '60–69', '70–79'],
    correctIndex: 2,
    correctAnswer: '60–69',
    explanation: `Step-by-Step Solution:
1. Examine the height of each bar on the vertical (frequency) axis:
   • 40–49: height = 3
   • 50–59: height = 8
   • 60–69: height = 15 (tallest bar)
   • 70–79: height = 12
   • 80–89: height = 5

2. The tallest bar corresponds to the interval containing the most observations, which is 60–69 with 15 students.

Teacher's SAT Pro-Tip:
In a histogram, bar heights indicate frequencies for grouped intervals. You cannot determine exact individual scores from a histogram alone, only interval counts.`
  },
  {
    title: 'Example 5: Dot Plot & Mode Identification',
    question: `A coach recorded the number of soccer goals scored per game by a team over several matches. The observations are displayed on the dot plot below.

What is the mode of the number of goals scored?`,
    diagram: {
      title: 'Soccer Goals Scored Per Match',
      caption: 'Dot plot showing discrete match frequencies.',
      xAxisLabel: 'Goals Scored',
      yAxisLabel: 'Frequency',
      xRange: [0, 8],
      yRange: [0, 5],
      xStep: 1,
      yStep: 1,
      curves: [
        {
          type: 'points',
          points: [
            [2, 1], [2, 2],
            [3, 1],
            [4, 1], [4, 2], [4, 3],
            [5, 1],
            [6, 1],
            [7, 1]
          ],
          color: '#4f46e5'
        }
      ],
      textAnnotations: [
        { x: 2, y: 2.6, text: '2 dots', color: '#4338ca', fontSize: 8.5 },
        { x: 4, y: 3.6, text: '3 dots (Mode)', color: '#4338ca', fontSize: 9, fontWeight: '800' }
      ]
    },
    options: ['2', '3', '4', '5'],
    correctIndex: 2,
    correctAnswer: '4',
    explanation: `Step-by-Step Solution:
1. Count the number of dots stacked above each numerical value on the horizontal axis:
   • 2 goals: 2 dots ($f = 2$)
   • 3 goals: 1 dot ($f = 1$)
   • 4 goals: 3 dots ($f = 3$)
   • 5 goals: 1 dot ($f = 1$)
   • 6 goals: 1 dot ($f = 1$)
   • 7 goals: 1 dot ($f = 1$)

2. The mode is the value that occurs with the greatest frequency.
   The value 4 has the tallest stack of 3 dots.

Teacher's SAT Pro-Tip:
Each dot on a dot plot represents a single observation. The mode is simply the number with the tallest stack of dots.`
  },
  {
    title: 'Example 6: Box Plot & Five-Number Summary',
    question: `The box plot below summarizes the distribution of daily customer orders at a retail shop.

What are the overall range and the interquartile range (IQR) of the daily orders?`,
    diagram: {
      title: 'Daily Customer Orders Summary',
      caption: 'Five-number summary box plot.',
      xAxisLabel: 'Orders Per Day',
      xRange: [0, 70],
      yRange: [0, 5],
      xStep: 10,
      yStep: 1,
      hideAxes: false,
      curves: [
        { type: 'line', points: [[18, 1.5], [39, 1.5], [39, 3.5], [18, 3.5], [18, 1.5]], color: '#2563eb', strokeWidth: 2, shade: 'region', shadeColor: 'rgba(37, 99, 235, 0.12)' },
        { type: 'line', points: [[27, 1.5], [27, 3.5]], color: '#1e40af', strokeWidth: 2.5 },
        { type: 'line', points: [[6, 2.5], [18, 2.5]], color: '#2563eb', strokeWidth: 2 },
        { type: 'line', points: [[6, 2], [6, 3]], color: '#2563eb', strokeWidth: 2 },
        { type: 'line', points: [[39, 2.5], [58, 2.5]], color: '#2563eb', strokeWidth: 2 },
        { type: 'line', points: [[58, 2], [58, 3]], color: '#2563eb', strokeWidth: 2 }
      ],
      textAnnotations: [
        { x: 6, y: 1.0, text: 'Min: 6', color: '#64748b', fontSize: 9 },
        { x: 18, y: 4.1, text: 'Q1: 18', color: '#1e40af', fontSize: 9 },
        { x: 27, y: 1.0, text: 'Med: 27', color: '#1e40af', fontSize: 9.5, fontWeight: '800' },
        { x: 39, y: 4.1, text: 'Q3: 39', color: '#1e40af', fontSize: 9 },
        { x: 58, y: 1.0, text: 'Max: 58', color: '#64748b', fontSize: 9 }
      ]
    },
    options: [
      'Range = 52, IQR = 21',
      'Range = 58, IQR = 27',
      'Range = 52, IQR = 27',
      'Range = 40, IQR = 21'
    ],
    correctIndex: 0,
    correctAnswer: 'Range = 52, IQR = 21',
    explanation: `Step-by-Step Solution:
1. Read the five-number summary from the box plot:
   • $\\text{Minimum} = 6$
   • $Q_1 = 18$
   • $\\text{Median} = 27$
   • $Q_3 = 39$
   • $\\text{Maximum} = 58$

2. Calculate the overall Range:
   $$\\text{Range} = \\text{Maximum} - \\text{Minimum} = 58 - 6 = 52$$

3. Calculate the Interquartile Range (IQR):
   $$\\text{IQR} = Q_3 - Q_1 = 39 - 18 = 21$$

Teacher's SAT Pro-Tip:
• Overall Range = Full whisker span (Max - Min).
• IQR = Central box width ($Q_3 - Q_1$).`
  },
  {
    title: 'Example 7: Scatterplot Direction, Strength & Causation',
    question: `A study observed weekly study hours and semester exam scores among 18 students. The data are shown in the scatterplot below.

Which conclusion is best supported by the scatterplot?`,
    diagram: {
      title: 'Study Hours vs. Exam Scores',
      caption: 'Scatterplot showing two-variable correlation.',
      xAxisLabel: 'Weekly Study Hours',
      yAxisLabel: 'Exam Score',
      xRange: [0, 20],
      yRange: [40, 100],
      xStep: 2,
      yStep: 10,
      curves: [
        {
          type: 'points',
          points: [
            [2, 52], [3, 56], [4, 58], [5, 63], [6, 62], [7, 68],
            [8, 70], [9, 74], [10, 75], [11, 79], [12, 82], [13, 85],
            [14, 87], [15, 91], [16, 90], [17, 94], [18, 97], [19, 98]
          ],
          color: '#2563eb'
        },
        {
          type: 'line',
          points: [[2, 52], [19, 98]],
          color: '#9333ea',
          strokeWidth: 2,
          style: 'dashed'
        }
      ]
    },
    options: [
      'There is a strong positive linear association between weekly study hours and exam scores.',
      'Studying more hours causes every individual student to score higher on the exam.',
      'There is a negative non-linear association between study hours and exam scores.',
      'No relationship exists between weekly study hours and exam scores.'
    ],
    correctIndex: 0,
    correctAnswer: 'There is a strong positive linear association between weekly study hours and exam scores.',
    explanation: `Step-by-Step Solution:
1. Examine Direction: As weekly study hours ($x$) increase from left to right, exam scores ($y$) consistently rise. This indicates a positive association.
2. Examine Strength: The points cluster closely along an upward straight line, demonstrating a strong linear association.
3. Assess Causation: Observational scatterplots demonstrate association/correlation, but they do not prove direct causation because confounding variables (prior preparation, attendance) may exist.

Teacher's SAT Pro-Tip:
Watch out for aggressive causal claims on the SAT. Choose "positive association" over "proves causation" unless the study is a randomized controlled experiment.`
  },
  {
    title: 'Example 8: Reading Graph Scale & Multiplied Units',
    question: `The bar graph below shows the quarterly revenue of a technology firm. Note that the vertical axis is labeled in **thousands of dollars**.

What was the firm's total revenue in Quarter 3?`,
    diagram: {
      title: 'Quarterly Revenue (in thousands of dollars)',
      caption: 'Bar graph with scaled axis units.',
      xAxisLabel: 'Quarter',
      yAxisLabel: 'Revenue ($ in thousands)',
      xRange: [0, 5],
      yRange: [0, 400],
      xStep: 1,
      yStep: 100,
      curves: [
        { type: 'line', points: [[0.7, 0], [0.7, 180], [1.3, 180], [1.3, 0]], color: '#0d9488', strokeWidth: 2, shade: 'region', shadeColor: 'rgba(13, 148, 136, 0.25)' },
        { type: 'line', points: [[1.7, 0], [1.7, 240], [2.3, 240], [2.3, 0]], color: '#0d9488', strokeWidth: 2, shade: 'region', shadeColor: 'rgba(13, 148, 136, 0.25)' },
        { type: 'line', points: [[2.7, 0], [2.7, 300], [3.3, 300], [3.3, 0]], color: '#0d9488', strokeWidth: 2, shade: 'region', shadeColor: 'rgba(13, 148, 136, 0.4)' },
        { type: 'line', points: [[3.7, 0], [3.7, 350], [4.3, 350], [4.3, 0]], color: '#0d9488', strokeWidth: 2, shade: 'region', shadeColor: 'rgba(13, 148, 136, 0.25)' }
      ],
      textAnnotations: [
        { x: 1.0, y: 195, text: 'Q1: 180', color: '#0f766e', fontSize: 9 },
        { x: 2.0, y: 255, text: 'Q2: 240', color: '#0f766e', fontSize: 9 },
        { x: 3.0, y: 315, text: 'Q3: 300', color: '#0f766e', fontSize: 9.5, fontWeight: '800' },
        { x: 4.0, y: 365, text: 'Q4: 350', color: '#0f766e', fontSize: 9 }
      ]
    },
    options: ['$300', '$3,000', '$30,000', '$300,000'],
    correctIndex: 3,
    correctAnswer: '$300,000',
    explanation: `Step-by-Step Solution:
1. Read the graph bar value for Quarter 3:
   The bar reaches the $300$ line on the vertical axis.

2. Inspect the axis unit descriptor:
   The y-axis is labeled "in thousands of dollars" ($\\times 1,000$).

3. Multiply to convert to actual dollars:
   $$\\text{Actual Revenue} = 300 \\times 1,000 = \\$300,000$$

Teacher's SAT Pro-Tip:
Always double-check axis unit multipliers (e.g., "in thousands", "in millions", "in percentages") before locking in your answer.`
  },
  {
    title: 'Example 9: Percentage of Category from Survey Table',
    question: `A university surveyed 300 incoming freshmen about their preferred academic track. The results are summarized in the table below.

What percentage of the surveyed students selected Science?`,
    table: {
      title: 'Freshman Academic Track Preferences',
      headers: ['Academic Track', 'Number of Students'],
      rows: [
        ['Science', '140'],
        ['Humanities', '100'],
        ['Business', '60']
      ]
    },
    options: ['35.0%', '42.5%', '46.7%', '52.0%'],
    correctIndex: 2,
    correctAnswer: '46.7%',
    explanation: `Step-by-Step Solution:
1. Find the total number of students surveyed:
   $$\\text{Total} = 140 + 100 + 60 = 300$$

2. Identify the number of students who selected Science:
   $$\\text{Science Count} = 140$$

3. Compute the percentage:
   $$\\text{Percentage} = \\frac{140}{300} \\times 100\\% = \\frac{14}{30} \\times 100\\% \\approx 46.67\\% \\approx 46.7\\%$$

Teacher's SAT Pro-Tip:
Denominator Rule: If asked "What percentage of the surveyed students...", the denominator is the total survey size ($300$).`
  },
  {
    title: 'Example 10: Side-by-Side Box Plot Comparison',
    question: `The side-by-side box plots below compare the distribution of test scores for Section A and Section B.

Which statement correctly compares the distributions of the two sections?`,
    diagram: {
      title: 'Score Distribution Comparison',
      caption: 'Side-by-side box plots for Section A and Section B.',
      subDiagrams: [
        {
          label: 'Section A',
          xAxisLabel: 'Score',
          xRange: [20, 80],
          yRange: [0, 5],
          curves: [
            { type: 'line', points: [[38, 1.5], [51, 1.5], [51, 3.5], [38, 3.5], [38, 1.5]], color: '#2563eb', strokeWidth: 2, shade: 'region', shadeColor: 'rgba(37, 99, 235, 0.1)' },
            { type: 'line', points: [[45, 1.5], [45, 3.5]], color: '#1e40af', strokeWidth: 2.5 },
            { type: 'line', points: [[25, 2.5], [38, 2.5]], color: '#2563eb', strokeWidth: 2 },
            { type: 'line', points: [[25, 2], [25, 3]], color: '#2563eb', strokeWidth: 2 },
            { type: 'line', points: [[51, 2.5], [68, 2.5]], color: '#2563eb', strokeWidth: 2 },
            { type: 'line', points: [[68, 2], [68, 3]], color: '#2563eb', strokeWidth: 2 }
          ],
          textAnnotations: [
            { x: 38, y: 4.1, text: 'Q1: 38', color: '#1e40af', fontSize: 9 },
            { x: 45, y: 1.0, text: 'Med: 45', color: '#1e40af', fontSize: 9.5, fontWeight: '800' },
            { x: 51, y: 4.1, text: 'Q3: 51', color: '#1e40af', fontSize: 9 }
          ]
        },
        {
          label: 'Section B',
          xAxisLabel: 'Score',
          xRange: [20, 80],
          yRange: [0, 5],
          curves: [
            { type: 'line', points: [[35, 1.5], [56, 1.5], [56, 3.5], [35, 3.5], [35, 1.5]], color: '#ea580c', strokeWidth: 2, shade: 'region', shadeColor: 'rgba(234, 88, 12, 0.1)' },
            { type: 'line', points: [[45, 1.5], [45, 3.5]], color: '#c2410c', strokeWidth: 2.5 },
            { type: 'line', points: [[22, 2.5], [35, 2.5]], color: '#ea580c', strokeWidth: 2 },
            { type: 'line', points: [[22, 2], [22, 3]], color: '#ea580c', strokeWidth: 2 },
            { type: 'line', points: [[56, 2.5], [74, 2.5]], color: '#ea580c', strokeWidth: 2 },
            { type: 'line', points: [[74, 2], [74, 3]], color: '#ea580c', strokeWidth: 2 }
          ],
          textAnnotations: [
            { x: 35, y: 4.1, text: 'Q1: 35', color: '#c2410c', fontSize: 9 },
            { x: 45, y: 1.0, text: 'Med: 45', color: '#c2410c', fontSize: 9.5, fontWeight: '800' },
            { x: 56, y: 4.1, text: 'Q3: 56', color: '#c2410c', fontSize: 9 }
          ]
        }
      ]
    },
    options: [
      'Both sections have the same median, and Section A has a greater IQR than Section B.',
      'Both sections have the same median, but Section B has a greater IQR than Section A.',
      'Section B has a greater median and a greater IQR than Section A.',
      'Section A has a greater median and a greater IQR than Section B.'
    ],
    correctIndex: 1,
    correctAnswer: 'Both sections have the same median, but Section B has a greater IQR than Section A.',
    explanation: `Step-by-Step Solution:
1. Compare Medians:
   • Section A Median = 45
   • Section B Median = 45
   Both sections have identical median scores ($45 = 45$).

2. Compute and Compare IQRs:
   • $\\text{IQR}_A = Q_{3A} - Q_{1A} = 51 - 38 = 13$
   • $\\text{IQR}_B = Q_{3B} - Q_{1B} = 56 - 35 = 21$
   Since $21 > 13$, Section B has a greater interquartile range (middle-50% spread).

Teacher's SAT Pro-Tip:
Look at the width of the box. A wider box directly translates to a larger IQR.`
  },
  {
    title: 'Example 11: Comparing Histograms (Center vs. Spread)',
    question: `Two training programs, Program X and Program Y, assessed trainee completion times.

• Program X completion times are concentrated heavily around 70–80 hours.
• Program Y completion times are concentrated heavily around 50–60 hours.

Which statement is best supported by these distributions?`,
    options: [
      'Program X has a distribution centered at higher values than Program Y.',
      'Program X definitely has a higher standard deviation than Program Y.',
      'Program Y has a higher median completion time than Program X.',
      'Both programs have identical standard deviations and identical medians.'
    ],
    correctIndex: 0,
    correctAnswer: 'Program X has a distribution centered at higher values than Program Y.',
    explanation: `Step-by-Step Solution:
1. Analyze Center:
   Program X has its major cluster/peak at 70–80 hours, while Program Y has its peak at 50–60 hours. Therefore, Program X is centered at higher values.

2. Analyze Spread:
   Concentration location (center) does NOT tell us about standard deviation or spread without knowing the dispersion/width of the observations around their respective centers.

3. Conclude:
   We can firmly conclude that Program X has a higher center, but cannot claim that its standard deviation is higher without spread data.`
  },
  {
    title: 'Example 12: Trend Questions & Intermediate Fluctuations',
    question: `The table below displays the annual unit output of a manufacturing plant from 2020 to 2023.

Which statement is accurately supported by the data?`,
    table: {
      title: 'Annual Plant Output (2020–2023)',
      headers: ['Year', 'Units Produced'],
      rows: [
        ['2020', '80'],
        ['2021', '95'],
        ['2022', '91'],
        ['2023', '110']
      ]
    },
    options: [
      'Production increased each year from 2020 to 2023.',
      'Production showed an overall increase from 2020 to 2023, despite a decrease from 2021 to 2022.',
      'Production was highest in 2021.',
      'Production decreased overall from 2020 to 2023.'
    ],
    correctIndex: 1,
    correctAnswer: 'Production showed an overall increase from 2020 to 2023, despite a decrease from 2021 to 2022.',
    explanation: `Step-by-Step Solution:
1. Examine the year-by-year trajectory:
   • 2020 → 2021: $80 \\to 95$ (increase of $+15$)
   • 2021 → 2022: $95 \\to 91$ (decrease of $-4$)
   • 2022 → 2023: $91 \\to 110$ (increase of $+19$)

2. Examine the net overall trajectory from start to finish:
   • 2020 to 2023: $80 \\to 110$ (net increase of $+30$)

3. Evaluate claims:
   • "Increased every year" is false because of the 2021→2022 dip.
   • "Overall increase with an intermediate decrease" is true.

Teacher's SAT Pro-Tip:
Watch out for absolute words like "always", "every year", or "consistently increased". An overall net increase does not mean monotone increasing growth.`
  },
  {
    title: 'Example 13: Must-Be-True Data Interpretation',
    question: `A data set of 10 positive test scores has a minimum value of 12 and a maximum value of 50.

Which statement MUST be true?`,
    options: [
      'Every score in the data set is strictly greater than 12.',
      'At least one score in the data set is equal to 12.',
      'The median score in the data set is 31.',
      'Exactly five scores in the data set are equal to 50.'
    ],
    correctIndex: 1,
    correctAnswer: 'At least one score in the data set is equal to 12.',
    explanation: `Step-by-Step Solution:
1. Understand the mathematical definition of "Minimum":
   The minimum is an actual observation in the data set that is less than or equal to all other observations. Therefore, at least one score must equal 12.

2. Test other choices:
   • Option A: False, because the minimum itself equals 12 (not strictly greater than 12).
   • Option C: False, the median depends on the distribution of the middle values, not just the midpoint $\\frac{12+50}{2} = 31$.
   • Option D: False, we only know at least one score is 50, not necessarily five.

Teacher's SAT Pro-Tip:
On "MUST be true" questions, try to construct a valid counterexample to eliminate invalid options.`
  },
  {
    title: 'Example 14: Could-Be-True vs. Cannot-Be-Determined',
    question: `A data set has a minimum of 5, a median of 20, and a maximum of 60.

Which statement COULD be true?`,
    options: [
      'Every observation in the data set is strictly less than 20.',
      'The mean of the data set is 28.',
      'The third quartile (Q3) is 65.',
      'The minimum of the data set is greater than the median.'
    ],
    correctIndex: 1,
    correctAnswer: 'The mean of the data set is 28.',
    explanation: `Step-by-Step Solution:
1. Analyze possibilities:
   • For a data set with $\\text{Min} = 5$, $\\text{Median} = 20$, and $\\text{Max} = 60$, a right-skewed distribution with several values near 60 could easily have a mean of 28. This is entirely possible (COULD be true).

2. Check impossibilities:
   • Option A is impossible because the median is 20 and the max is 60.
   • Option C is impossible because $Q_3$ cannot exceed the maximum ($65 > 60$).
   • Option D is impossible because the minimum (5) is less than the median (20).

Teacher's SAT Pro-Tip:
"COULD be true" means you only need to show ONE valid scenario where the statement holds true.`
  },
  {
    title: 'Example 15: Multi-Display Comparison (Table + Box Plot + Spread)',
    question: `Two research groups tested material tensile strength. The statistical summaries are displayed in the table below.

Which conclusion is best supported when comparing the two groups?`,
    table: {
      title: 'Material Strength Statistical Comparison',
      headers: ['Research Group', 'Median Strength', 'IQR', 'Full Range'],
      rows: [
        ['Group A', '52', '10', '41'],
        ['Group B', '52', '18', '63']
      ]
    },
    options: [
      'Group A has greater overall and middle variability than Group B.',
      'Group B has greater variability according to both IQR and Range, while both groups share the same median center.',
      'Group B has a higher median than Group A.',
      'The two groups have identical spread because their medians are equal.'
    ],
    correctIndex: 1,
    correctAnswer: 'Group B has greater variability according to both IQR and Range, while both groups share the same median center.',
    explanation: `Step-by-Step Solution:
1. Compare Center:
   Both groups have an identical median of 52.

2. Compare Middle Spread (IQR):
   Group B has $\\text{IQR} = 18$, while Group A has $\\text{IQR} = 10$. ($18 > 10$, Group B is more variable in the middle 50%).

3. Compare Total Spread (Range):
   Group B has $\\text{Range} = 63$, while Group A has $\\text{Range} = 41$. ($63 > 41$, Group B has greater overall spread).

4. Conclusion:
   Group B exhibits greater variability by both statistical measures of spread.`
  }
];
