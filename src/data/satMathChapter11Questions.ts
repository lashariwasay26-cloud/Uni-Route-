import { MathExerciseQuestion } from './satMathConcepts';

export const CHAPTER_11_QUESTIONS: MathExerciseQuestion[] = [
  // ==========================================
  // EXERCISE 1: CORE FUNDAMENTALS & VISUAL READING (Q1–Q15)
  // ==========================================
  {
    id: 'ch11-q1',
    number: 1,
    exerciseNumber: 1,
    exerciseTitle: 'Exercise 1: Core Fundamentals & Visual Reading (Questions 1–15)',
    question: 'A school records the annual student enrollment from 2021 to 2024 as shown in the table below.\n\nHow many more students were recorded in 2024 than in 2021?',
    table: {
      title: 'Annual Student Enrollment',
      headers: ['Year', 'Enrollment'],
      rows: [
        ['2021', '420'],
        ['2022', '475'],
        ['2023', '510'],
        ['2024', '590']
      ]
    },
    options: ['150', '160', '170', '180'],
    correctIndex: 2,
    correctAnswerText: '170',
    explanation: `Step-by-Step Solution:
1. Locate the value for 2024: $590$.
2. Locate the value for 2021: $420$.
3. Compute the difference:
   $$590 - 420 = 170$$

Teacher's SAT Pro-Tip:
Direct difference shortcut: $\\text{Difference} = \\text{Value}_{2024} - \\text{Value}_{2021} = 590 - 420 = 170$.`,
    distractorExplanations: {
      0: '150 is the result of an arithmetic subtraction error.',
      1: '160 is $580 - 420$, which misreads the 2024 entry.',
      3: '180 is $600 - 420$.'
    }
  },
  {
    id: 'ch11-q2',
    number: 2,
    exerciseNumber: 1,
    exerciseTitle: 'Exercise 1: Core Fundamentals & Visual Reading (Questions 1–15)',
    question: 'A community survey received a total of 500 responses. Of those responses, 325 participants selected Option A.\n\nWhat percentage of the participants selected Option A?',
    options: ['55%', '60%', '65%', '70%'],
    correctIndex: 2,
    correctAnswerText: '65%',
    explanation: `Step-by-Step Solution:
1. Identify the part ($325$) and the total ($500$).
2. Compute the relative proportion:
   $$\\frac{325}{500} = 0.65$$
3. Convert to a percentage:
   $$0.65 \\times 100\\% = 65\\%$$

Teacher's SAT Pro-Tip:
Formula: $\\text{Percentage} = \\frac{\\text{Part}}{\\text{Total}} \\times 100\\%$. Here, $\\frac{325}{500} = \\frac{65}{100} = 65\\%$.`,
    distractorExplanations: {
      0: '55% corresponds to $275/500$.',
      1: '60% corresponds to $300/500$.',
      3: '70% corresponds to $350/500$.'
    }
  },
  {
    id: 'ch11-q3',
    number: 3,
    exerciseNumber: 1,
    exerciseTitle: 'Exercise 1: Core Fundamentals & Visual Reading (Questions 1–15)',
    question: 'The table below shows the participant counts and total sample sizes for two groups in a regional competition.\n\nWhich statement correctly compares the participation rates of the two groups?',
    table: {
      title: 'Competition Participation Rates',
      headers: ['Group', 'Participants', 'Total Sample'],
      rows: [
        ['Group A', '72', '120'],
        ['Group B', '96', '160']
      ]
    },
    options: [
      'Group A has a greater percentage of participants.',
      'Group B has a greater percentage of participants.',
      'The percentages of participants in both groups are equal.',
      'The percentages cannot be compared because the group sizes differ.'
    ],
    correctIndex: 2,
    correctAnswerText: 'The percentages of participants in both groups are equal.',
    explanation: `Step-by-Step Solution:
1. Calculate the participation rate for Group A:
   $$\\text{Rate}_A = \\frac{72}{120} = 0.60 = 60\\%$$

2. Calculate the participation rate for Group B:
   $$\\text{Rate}_B = \\frac{96}{160} = 0.60 = 60\\%$$

3. Compare the two rates:
   $$60\\% = 60\\%$$
   Both groups have identical participation percentages.

Teacher's SAT Pro-Tip:
Even though Group B has a higher raw count ($96 > 72$), their percentages are identical ($60\\% = 60\\%$). Always calculate rates by dividing by the respective group totals.`,
    distractorExplanations: {
      0: 'Group A does not have a greater rate; both rates equal 60%.',
      1: 'Group B has a greater raw count ($96$), but not a greater percentage ($60\\% = 60\\%$).',
      3: 'Different group totals do not prevent percentage comparison; percentages normalize groups of unequal size.'
    }
  },
  {
    id: 'ch11-q4',
    number: 4,
    exerciseNumber: 1,
    exerciseTitle: 'Exercise 1: Core Fundamentals & Visual Reading (Questions 1–15)',
    question: 'A frequency table summarizes the scores obtained by a group of contestants.\n\nWhich value has the greatest frequency?',
    table: {
      title: 'Contestant Score Distribution',
      headers: ['Value', 'Frequency'],
      rows: [
        ['10', '4'],
        ['20', '9'],
        ['30', '15'],
        ['40', '8'],
        ['50', '4']
      ]
    },
    options: ['10', '20', '30', '40'],
    correctIndex: 2,
    correctAnswerText: '30',
    explanation: `Step-by-Step Solution:
1. Examine the frequency column for each score value:
   • Value 10: Frequency = 4
   • Value 20: Frequency = 9
   • Value 30: Frequency = 15 (largest frequency)
   • Value 40: Frequency = 8
   • Value 50: Frequency = 4

2. The greatest frequency is 15, which corresponds to the value 30.

Teacher's SAT Pro-Tip:
The value with the greatest frequency is also known as the mode. Look directly for the highest number in the frequency column.`,
    distractorExplanations: {
      0: '10 has a frequency of 4.',
      1: '20 has a frequency of 9.',
      3: '40 has a frequency of 8.'
    }
  },
  {
    id: 'ch11-q5',
    number: 5,
    exerciseNumber: 1,
    exerciseTitle: 'Exercise 1: Core Fundamentals & Visual Reading (Questions 1–15)',
    question: 'The histogram below displays the frequencies of observations across five intervals.\n\nWhich interval contains the greatest number of observations?',
    diagram: {
      title: 'Observation Frequencies by Interval',
      caption: 'Histogram displaying observation counts across 10-unit intervals.',
      xAxisLabel: 'Interval',
      yAxisLabel: 'Frequency',
      xRange: [-5, 55],
      yRange: [0, 18],
      xStep: 10,
      yStep: 3,
      curves: [
        { type: 'line', points: [[0, 0], [0, 3], [9, 3], [9, 0]], color: '#2563eb', strokeWidth: 2, shade: 'region', shadeColor: 'rgba(37, 99, 235, 0.25)' },
        { type: 'line', points: [[10, 0], [10, 7], [19, 7], [19, 0]], color: '#2563eb', strokeWidth: 2, shade: 'region', shadeColor: 'rgba(37, 99, 235, 0.25)' },
        { type: 'line', points: [[20, 0], [20, 14], [29, 14], [29, 0]], color: '#2563eb', strokeWidth: 2, shade: 'region', shadeColor: 'rgba(37, 99, 235, 0.25)' },
        { type: 'line', points: [[30, 0], [30, 11], [39, 11], [39, 0]], color: '#2563eb', strokeWidth: 2, shade: 'region', shadeColor: 'rgba(37, 99, 235, 0.25)' },
        { type: 'line', points: [[40, 0], [40, 5], [49, 5], [49, 0]], color: '#2563eb', strokeWidth: 2, shade: 'region', shadeColor: 'rgba(37, 99, 235, 0.25)' }
      ]
    },
    options: ['Interval 10–19', 'Interval 20–29', 'Interval 30–39', 'Interval 40–49'],
    correctIndex: 1,
    correctAnswerText: 'Interval 20–29',
    explanation: `Step-by-Step Solution:
1. Examine the height of each bar:
   • 0–9: frequency = 3
   • 10–19: frequency = 7
   • 20–29: frequency = 14 (tallest bar)
   • 30–39: frequency = 11
   • 40–49: frequency = 5

2. The interval containing the greatest number of observations is 20–29.

Teacher's SAT Pro-Tip:
For "most observations" in a histogram, identify the tallest bar on the vertical scale.`
  },
  {
    id: 'ch11-q6',
    number: 6,
    exerciseNumber: 1,
    exerciseTitle: 'Exercise 1: Core Fundamentals & Visual Reading (Questions 1–15)',
    question: 'The dot plot below shows the distribution of values in a data set.\n\nWhat is the mode of this data set?',
    diagram: {
      title: 'Observation Dot Plot',
      caption: 'Dot plot showing distribution of values.',
      xAxisLabel: 'Value',
      yAxisLabel: 'Count',
      xRange: [1, 9],
      yRange: [0, 5],
      xStep: 1,
      yStep: 1,
      curves: [
        {
          type: 'points',
          points: [
            [3, 1], [3, 2],
            [4, 1],
            [5, 1], [5, 2], [5, 3],
            [6, 1],
            [7, 1]
          ],
          color: '#2563eb'
        }
      ]
    },
    options: ['3', '4', '5', '6'],
    correctIndex: 2,
    correctAnswerText: '5',
    explanation: `Step-by-Step Solution:
1. Count the number of observations (dots) at each value:
   • 3 occurs 2 times
   • 4 occurs 1 time
   • 5 occurs 3 times
   • 6 occurs 1 time
   • 7 occurs 1 time

2. The mode is the most frequently occurring value, which is 5 (with 3 occurrences).

Teacher's SAT Pro-Tip:
On a dot plot, the mode is the column with the highest stack of dots.`,
    distractorExplanations: {
      0: '3 occurs only 2 times.',
      1: '4 occurs only 1 time.',
      3: '6 occurs only 1 time.'
    }
  },
  {
    id: 'ch11-q7',
    number: 7,
    exerciseNumber: 1,
    exerciseTitle: 'Exercise 1: Core Fundamentals & Visual Reading (Questions 1–15)',
    question: 'A box plot has a first quartile (Q1) of 18, a median of 31, and a third quartile (Q3) of 46.\n\nWhat is the interquartile range (IQR)?',
    diagram: {
      title: 'Box Plot Quartile Measures',
      caption: 'Box plot showing Q1, Median, and Q3.',
      xAxisLabel: 'Values',
      xRange: [10, 55],
      yRange: [0, 5],
      xStep: 5,
      yStep: 1,
      curves: [
        { type: 'line', points: [[18, 1.5], [46, 1.5], [46, 3.5], [18, 3.5], [18, 1.5]], color: '#2563eb', strokeWidth: 2, shade: 'region', shadeColor: 'rgba(37, 99, 235, 0.15)' },
        { type: 'line', points: [[31, 1.5], [31, 3.5]], color: '#1e40af', strokeWidth: 2.5 }
      ],
      textAnnotations: [
        { x: 18, y: 4.1, text: 'Q1: 18', color: '#1e40af', fontSize: 9.5, fontWeight: '800' },
        { x: 31, y: 1.0, text: 'Med: 31', color: '#1e40af', fontSize: 9.5, fontWeight: '800' },
        { x: 46, y: 4.1, text: 'Q3: 46', color: '#1e40af', fontSize: 9.5, fontWeight: '800' }
      ]
    },
    options: ['13', '28', '33', '46'],
    correctIndex: 1,
    correctAnswerText: '28',
    explanation: `Step-by-Step Solution:
1. Recall the formula for the Interquartile Range:
   $$\\text{IQR} = Q_3 - Q_1$$

2. Substitute the given quartiles:
   $$\\text{IQR} = 46 - 18 = 28$$

Teacher's SAT Pro-Tip:
IQR is strictly $Q_3 - Q_1$. The median ($31$) does not enter into the IQR subtraction.`,
    distractorExplanations: {
      0: '13 is $\\text{Median} - Q_1 = 31 - 18$.',
      2: '33 is $Q_3 - 13$.',
      3: '46 is the value of $Q_3$.'
    }
  },
  {
    id: 'ch11-q8',
    number: 8,
    exerciseNumber: 1,
    exerciseTitle: 'Exercise 1: Core Fundamentals & Visual Reading (Questions 1–15)',
    question: 'A five-number summary for a distribution is given as: 8, 17, 26, 41, 59.\n\nWhat is the range of this distribution?',
    options: ['33', '42', '51', '59'],
    correctIndex: 2,
    correctAnswerText: '51',
    explanation: `Step-by-Step Solution:
1. In a five-number summary (Min, Q1, Median, Q3, Max):
   • $\\text{Minimum} = 8$
   • $\\text{Maximum} = 59$

2. Calculate the range:
   $$\\text{Range} = \\text{Maximum} - \\text{Minimum} = 59 - 8 = 51$$

Teacher's SAT Pro-Tip:
$\\text{Range} = \\text{Max} - \\text{Min}$. Here, $59 - 8 = 51$.`,
    distractorExplanations: {
      0: '33 is $41 - 8$.',
      1: '42 is $59 - 17$.',
      3: '59 is the maximum value, not the range.'
    }
  },
  {
    id: 'ch11-q9',
    number: 9,
    exerciseNumber: 1,
    exerciseTitle: 'Exercise 1: Core Fundamentals & Visual Reading (Questions 1–15)',
    question: 'The scatterplot below shows data points that generally rise from lower-left to upper-right.\n\nWhat type of association is present between the two variables?',
    diagram: {
      title: 'Two-Variable Scatterplot',
      caption: 'Scatterplot showing upward trajectory from left to right.',
      xAxisLabel: 'Variable X',
      yAxisLabel: 'Variable Y',
      xRange: [0, 10],
      yRange: [0, 50],
      xStep: 2,
      yStep: 10,
      curves: [
        {
          type: 'points',
          points: [
            [1, 8], [2, 14], [3, 19], [4, 25], [5, 29],
            [6, 34], [7, 39], [8, 43], [9, 48]
          ],
          color: '#2563eb'
        }
      ]
    },
    options: ['Positive', 'Negative', 'No linear association', 'Vertical'],
    correctIndex: 0,
    correctAnswerText: 'Positive',
    explanation: `Step-by-Step Solution:
1. Observe the trend: As Variable X increases along the horizontal axis, Variable Y tends to increase along the vertical axis.
2. An upward pattern from left to right defines a positive association.

Teacher's SAT Pro-Tip:
Rising trend = Positive association; Falling trend = Negative association.`,
    distractorExplanations: {
      1: 'A negative association slopes downward from left to right.',
      2: 'A non-linear or zero-association plot shows random scattered cloud patterns.',
      3: 'Vertical is not a standard type of statistical association.'
    }
  },
  {
    id: 'ch11-q10',
    number: 10,
    exerciseNumber: 1,
    exerciseTitle: 'Exercise 1: Core Fundamentals & Visual Reading (Questions 1–15)',
    question: 'Two scatterplots both exhibit a positive association. In Plot A, the data points are tightly clustered along a straight line. In Plot B, the data points are widely dispersed.\n\nWhich scatterplot exhibits a stronger linear association?',
    diagram: {
      title: 'Association Strength Comparison',
      caption: 'Side-by-side comparison of data scatterplots.',
      subDiagrams: [
        {
          label: 'Plot A',
          xAxisLabel: 'x',
          yAxisLabel: 'y',
          xRange: [0, 10],
          yRange: [0, 30],
          curves: [
            { type: 'points', points: [[1, 4], [2, 7], [3, 10], [4, 13], [5, 16], [6, 19], [7, 22], [8, 25]], color: '#2563eb' }
          ]
        },
        {
          label: 'Plot B',
          xAxisLabel: 'x',
          yAxisLabel: 'y',
          xRange: [0, 10],
          yRange: [0, 30],
          curves: [
            { type: 'points', points: [[1, 2], [2, 12], [3, 6], [4, 18], [5, 11], [6, 26], [7, 18], [8, 28]], color: '#ea580c' }
          ]
        }
      ]
    },
    options: ['Plot A', 'Plot B', 'Both have identical strength', 'Cannot be determined'],
    correctIndex: 0,
    correctAnswerText: 'Plot A',
    explanation: `Step-by-Step Solution:
1. Linear association strength refers to how closely data points cluster along a straight-line trajectory.
2. Because Plot A has points that hug the line much more tightly than Plot B, Plot A has a stronger linear association.

Teacher's SAT Pro-Tip:
Strength = closeness of points to the line of best fit (less scatter).`,
    distractorExplanations: {
      1: 'Plot B is widely scattered, indicating a weaker association.',
      2: 'Their scatter distances are clearly unequal.',
      3: 'Visual comparison of point dispersion provides sufficient evidence to determine relative strength.'
    }
  },
  {
    id: 'ch11-q11',
    number: 11,
    exerciseNumber: 1,
    exerciseTitle: 'Exercise 1: Core Fundamentals & Visual Reading (Questions 1–15)',
    question: 'A bar graph has vertical axis grid markings at 0, 20, 40, 60, and 80. A bar terminates precisely at the 60 mark.\n\nWhat value does this bar represent?',
    diagram: {
      title: 'Direct Bar Graph Scale',
      caption: 'Bar graph with standard grid markings.',
      xAxisLabel: 'Category',
      yAxisLabel: 'Value',
      xRange: [0, 4],
      yRange: [0, 90],
      xStep: 1,
      yStep: 20,
      curves: [
        { type: 'line', points: [[1.6, 0], [1.6, 60], [2.4, 60], [2.4, 0]], color: '#2563eb', strokeWidth: 2, shade: 'region', shadeColor: 'rgba(37, 99, 235, 0.3)' }
      ]
    },
    options: ['6', '20', '40', '60'],
    correctIndex: 3,
    correctAnswerText: '60',
    explanation: `Step-by-Step Solution:
1. Read the vertical axis directly at the top of the bar:
   The top of the bar aligns with the gridline labeled 60.
2. The value is 60.

Teacher's SAT Pro-Tip:
Always verify the baseline of the vertical axis begins at zero to confirm that the bar height corresponds directly to the stated value.`,
    distractorExplanations: {
      0: '6 ignores the axis scale factor.',
      1: '20 is the interval step size.',
      2: '40 is the preceding gridline.'
    }
  },
  {
    id: 'ch11-q12',
    number: 12,
    exerciseNumber: 1,
    exerciseTitle: 'Exercise 1: Core Fundamentals & Visual Reading (Questions 1–15)',
    question: 'A graph displays college enrollment figures. The vertical axis is labeled "Number of students, in thousands." The bar for the incoming class reaches the 18 mark on the axis.\n\nHow many students does this bar represent?',
    diagram: {
      title: 'College Enrollment Scale',
      caption: 'Vertical axis scaled in thousands of students.',
      xAxisLabel: 'Class',
      yAxisLabel: 'Students (in thousands)',
      xRange: [0, 3],
      yRange: [0, 25],
      xStep: 1,
      yStep: 5,
      curves: [
        { type: 'line', points: [[1.2, 0], [1.2, 18], [1.8, 18], [1.8, 0]], color: '#0d9488', strokeWidth: 2, shade: 'region', shadeColor: 'rgba(13, 148, 136, 0.3)' }
      ]
    },
    options: ['18', '180', '1,800', '18,000'],
    correctIndex: 3,
    correctAnswerText: '18,000',
    explanation: `Step-by-Step Solution:
1. Read the raw graph value: $18$.
2. Check the axis label unit: "in thousands" ($\\times 1,000$).
3. Multiply:
   $$18 \\times 1,000 = 18,000\\text{ students}$$

Teacher's SAT Pro-Tip:
Always scan axis labels for multipliers such as "in thousands", "in millions", or "in percentages".`,
    distractorExplanations: {
      0: '18 fails to multiply by the 1,000 unit scale.',
      1: '180 multiplies by only 10.',
      2: '1,800 multiplies by 100.'
    }
  },
  {
    id: 'ch11-q13',
    number: 13,
    exerciseNumber: 1,
    exerciseTitle: 'Exercise 1: Core Fundamentals & Visual Reading (Questions 1–15)',
    question: 'A survey asked participants to select among three initiatives, as summarized in the table below.\n\nWhat percentage of the surveyed participants selected Initiative A?',
    table: {
      title: 'Community Initiative Voting',
      headers: ['Initiative', 'Votes'],
      rows: [
        ['Initiative A', '90'],
        ['Initiative B', '60'],
        ['Initiative C', '50']
      ]
    },
    options: ['35%', '40%', '45%', '50%'],
    correctIndex: 2,
    correctAnswerText: '45%',
    explanation: `Step-by-Step Solution:
1. Find the total number of votes:
   $$\\text{Total} = 90 + 60 + 50 = 200$$

2. Calculate the percentage for Initiative A:
   $$\\text{Percentage} = \\frac{90}{200} \\times 100\\% = 0.45 \\times 100\\% = 45\\%$$

Teacher's SAT Pro-Tip:
$\\frac{90}{200} = \\frac{45}{100} = 45\\%$.`,
    distractorExplanations: {
      0: '35% corresponds to $70/200$.',
      1: '40% corresponds to $80/200$.',
      3: '50% corresponds to $100/200$.'
    }
  },
  {
    id: 'ch11-q14',
    number: 14,
    exerciseNumber: 1,
    exerciseTitle: 'Exercise 1: Core Fundamentals & Visual Reading (Questions 1–15)',
    question: 'A frequency distribution has a cluster of observations at lower values and a long tail extending toward larger values.\n\nWhich statistical description is most appropriate for this distribution?',
    diagram: {
      title: 'Asymmetric Distribution Shape',
      caption: 'Distribution showing frequency of observations.',
      xAxisLabel: 'Values',
      yAxisLabel: 'Frequency',
      xRange: [0, 100],
      yRange: [0, 20],
      xStep: 10,
      yStep: 4,
      curves: [
        { type: 'line', points: [[10, 0], [10, 18], [20, 18], [20, 0]], color: '#2563eb', strokeWidth: 2, shade: 'region', shadeColor: 'rgba(37, 99, 235, 0.25)' },
        { type: 'line', points: [[20, 0], [20, 14], [30, 14], [30, 0]], color: '#2563eb', strokeWidth: 2, shade: 'region', shadeColor: 'rgba(37, 99, 235, 0.25)' },
        { type: 'line', points: [[30, 0], [30, 9], [40, 9], [40, 0]], color: '#2563eb', strokeWidth: 2, shade: 'region', shadeColor: 'rgba(37, 99, 235, 0.25)' },
        { type: 'line', points: [[40, 0], [40, 5], [50, 5], [50, 0]], color: '#2563eb', strokeWidth: 2, shade: 'region', shadeColor: 'rgba(37, 99, 235, 0.25)' },
        { type: 'line', points: [[50, 0], [50, 3], [60, 3], [60, 0]], color: '#2563eb', strokeWidth: 2, shade: 'region', shadeColor: 'rgba(37, 99, 235, 0.25)' },
        { type: 'line', points: [[60, 0], [60, 1], [70, 1], [70, 0]], color: '#2563eb', strokeWidth: 2, shade: 'region', shadeColor: 'rgba(37, 99, 235, 0.25)' },
        { type: 'line', points: [[70, 0], [70, 1], [80, 1], [80, 0]], color: '#2563eb', strokeWidth: 2, shade: 'region', shadeColor: 'rgba(37, 99, 235, 0.25)' }
      ]
    },
    options: ["Positively skewed (tail to the right)","Negatively skewed (tail to the left)","Symmetric bell curve","Uniform flat distribution"],
    correctIndex: 0,
    correctAnswerText: "Positively skewed (tail to the right)",
    explanation: `Step-by-Step Solution:
1. Identify the direction of the tail:
   The tail stretches to the right toward larger numerical values.
2. In statistics, skewness follows the direction of the long tail.
   Therefore, a long tail toward larger values indicates a right-skewed distribution.

Teacher's SAT Pro-Tip:
Skew is in the direction of the tail:
• Tail to the right $\\to$ Right-skewed (Mean > Median).
• Tail to the left $\\to$ Left-skewed (Mean < Median).`,
    distractorExplanations: {
      1: 'Left-skewed distributions have their long tail extending to the left toward smaller values.',
      2: 'Symmetric distributions have balanced, mirrored tails on both sides.',
      3: 'Uniform distributions have roughly equal bar heights across all intervals.'
    }
  },
  {
    id: 'ch11-q15',
    number: 15,
    exerciseNumber: 1,
    exerciseTitle: 'Exercise 1: Core Fundamentals & Visual Reading (Questions 1–15)',
    question: 'The table below displays the summary statistics for two distributions.\n\nWhich distribution has greater middle spread?',
    table: {
      title: 'Spread Comparison Summary',
      headers: ['Distribution', 'Median', 'IQR'],
      rows: [
        ['Distribution A', '45', '9'],
        ['Distribution B', '45', '17']
      ]
    },
    options: ['Distribution A', 'Distribution B', 'Both have the same middle spread', 'Cannot be determined'],
    correctIndex: 1,
    correctAnswerText: 'Distribution B',
    explanation: `Step-by-Step Solution:
1. Middle spread is measured by the Interquartile Range (IQR = $Q_3 - Q_1$).
2. Compare the IQRs:
   • $\\text{IQR}_A = 9$
   • $\\text{IQR}_B = 17$
3. Since $17 > 9$, Distribution B has the greater middle spread.

Teacher's SAT Pro-Tip:
Median measures the center; IQR measures the middle 50% spread. Compare the IQRs directly.`,
    distractorExplanations: {
      0: 'Distribution A has an IQR of only 9, which is smaller than 17.',
      2: 'Their medians are identical, but their IQRs ($9$ vs. $17$) are clearly different.',
      3: 'The provided IQR values are exact and directly comparable.'
    }
  },

  // ==========================================
  // EXERCISE 2: INTERMEDIATE DATA REASONING & COMPARISONS (Q16–Q28)
  // ==========================================
  {
    id: 'ch11-q16',
    number: 16,
    exerciseNumber: 2,
    exerciseTitle: 'Exercise 2: Intermediate Data Reasoning & Comparisons (Questions 16–28)',
    question: 'The table below summarizes the median and range for two data sets, A and B.\n\nWhich statement is supported by the data?',
    table: {
      title: 'Spread Comparison of Sets A and B',
      headers: ['Data Set', 'Median', 'Overall Range'],
      rows: [
        ['Data Set A', '40', '30'],
        ['Data Set B', '40', '58']
      ]
    },
    options: [
      'Distribution A has greater overall spread.',
      'Distribution B has greater overall spread.',
      'Their ranges are equal because their medians are equal.',
      'Their medians differ.'
    ],
    correctIndex: 1,
    correctAnswerText: 'Distribution B has greater overall spread.',
    explanation: `Step-by-Step Solution:
1. Overall spread is measured by the Range ($\\text{Max} - \\text{Min}$).
2. Compare ranges:
   • $\\text{Range}_A = 30$
   • $\\text{Range}_B = 58$
3. Since $58 > 30$, Distribution B has a greater overall spread.

Teacher's SAT Pro-Tip:
A shared median has no bearing on range. Compare the range values directly.`,
    distractorExplanations: {
      0: 'Distribution A has a smaller range ($30 < 58$).',
      2: 'Range and median are independent measures.',
      3: 'Both medians are explicitly 40.'
    }
  },
  {
    id: 'ch11-q17',
    number: 17,
    exerciseNumber: 2,
    exerciseTitle: 'Exercise 2: Intermediate Data Reasoning & Comparisons (Questions 16–28)',
    question: 'A company reports its annual output (in thousands of units) from 2020 through 2023 as shown in the table below.\n\nWhich statement is accurately supported by the data?',
    table: {
      title: 'Annual Company Output',
      headers: ['Year', 'Production Output'],
      rows: [
        ['2020', '800'],
        ['2021', '920'],
        ['2022', '880'],
        ['2023', '1,050']
      ]
    },
    options: [
      'Production increased every single year without interruption.',
      'Production decreased every single year.',
      'Production increased overall from 2020 to 2023.',
      'Production reached its highest level in 2021.'
    ],
    correctIndex: 2,
    correctAnswerText: 'Production increased overall from 2020 to 2023.',
    explanation: `Step-by-Step Solution:
1. Check overall change:
   From 2020 ($800$) to 2023 ($1,050$), production increased by $+250$. Thus, there was an overall increase.
2. Check year-to-year consistency:
   From 2021 ($920$) to 2022 ($880$), production dropped by $-40$. Therefore, it did NOT increase every single year.
3. Check highest year:
   The highest level was in 2023 ($1,050$), not 2021.

Teacher's SAT Pro-Tip:
"Overall increase" evaluates the start vs. end endpoints ($1050 > 800$).`,
    distractorExplanations: {
      0: 'Production dropped between 2021 and 2022 ($920 \\to 880$).',
      1: 'Production increased in two of the three periods.',
      3: 'Production was highest in 2023 ($1,050$).'
    }
  },
  {
    id: 'ch11-q18',
    number: 18,
    exerciseNumber: 2,
    exerciseTitle: 'Exercise 2: Intermediate Data Reasoning & Comparisons (Questions 16–28)',
    question: 'A survey categorizes 300 respondents across three categories as shown in the table below.\n\nWhat percentage of respondents belongs to Category B?',
    table: {
      title: 'Respondent Category Distribution',
      headers: ['Category', 'Count'],
      rows: [
        ['Category A', '80'],
        ['Category B', '120'],
        ['Category C', '100']
      ]
    },
    options: ['30%', '35%', '40%', '45%'],
    correctIndex: 2,
    correctAnswerText: '40%',
    explanation: `Step-by-Step Solution:
1. Total observations:
   $$80 + 120 + 100 = 300$$
2. Category B percentage:
   $$\\frac{120}{300} \\times 100\\% = \\frac{12}{30} \\times 100\\% = 40\\%$$

Teacher's SAT Pro-Tip:
$\\frac{120}{300} = \\frac{4}{10} = 40\\%$.`,
    distractorExplanations: {
      0: '30% corresponds to $90/300$.',
      1: '35% corresponds to $105/300$.',
      3: '45% corresponds to $135/300$.'
    }
  },
  {
    id: 'ch11-q19',
    number: 19,
    exerciseNumber: 2,
    exerciseTitle: 'Exercise 2: Intermediate Data Reasoning & Comparisons (Questions 16–28)',
    question: 'A box plot has the following five-number summary:\n\n• Minimum = 5\n• Q1 = 18\n• Median = 29\n• Q3 = 40\n• Maximum = 65\n\nWhat is the interquartile range (IQR)?',
    diagram: {
      title: 'Five-Number Summary Box Plot',
      caption: 'Box plot showing summary components.',
      xAxisLabel: 'Values',
      xRange: [0, 75],
      yRange: [0, 5],
      xStep: 10,
      yStep: 1,
      curves: [
        { type: 'line', points: [[18, 1.5], [40, 1.5], [40, 3.5], [18, 3.5], [18, 1.5]], color: '#2563eb', strokeWidth: 2, shade: 'region', shadeColor: 'rgba(37, 99, 235, 0.15)' },
        { type: 'line', points: [[29, 1.5], [29, 3.5]], color: '#1e40af', strokeWidth: 2.5 },
        { type: 'line', points: [[5, 2.5], [18, 2.5]], color: '#2563eb', strokeWidth: 2 },
        { type: 'line', points: [[5, 2], [5, 3]], color: '#2563eb', strokeWidth: 2 },
        { type: 'line', points: [[40, 2.5], [65, 2.5]], color: '#2563eb', strokeWidth: 2 },
        { type: 'line', points: [[65, 2], [65, 3]], color: '#2563eb', strokeWidth: 2 }
      ],
      textAnnotations: [
        { x: 5, y: 1.0, text: 'Min: 5', color: '#64748b', fontSize: 9 },
        { x: 18, y: 4.1, text: 'Q1: 18', color: '#1e40af', fontSize: 9 },
        { x: 29, y: 1.0, text: 'Med: 29', color: '#1e40af', fontSize: 9 },
        { x: 40, y: 4.1, text: 'Q3: 40', color: '#1e40af', fontSize: 9 },
        { x: 65, y: 1.0, text: 'Max: 65', color: '#64748b', fontSize: 9 }
      ]
    },
    options: ['11', '22', '35', '60'],
    correctIndex: 1,
    correctAnswerText: '22',
    explanation: `Step-by-Step Solution:
1. $\\text{IQR} = Q_3 - Q_1$.
2. Substitute $Q_3 = 40$ and $Q_1 = 18$:
   $$\\text{IQR} = 40 - 18 = 22$$

Teacher's SAT Pro-Tip:
IQR is strictly the width of the box: $40 - 18 = 22$.`,
    distractorExplanations: {
      0: '11 is $\\text{Median} - Q_1 = 29 - 18$.',
      2: '35 is $40 - 5$.',
      3: '60 is the Range ($65 - 5$), not the IQR.'
    }
  },
  {
    id: 'ch11-q20',
    number: 20,
    exerciseNumber: 2,
    exerciseTitle: 'Exercise 2: Intermediate Data Reasoning & Comparisons (Questions 16–28)',
    question: 'Using the same box plot with Minimum = 5, Q1 = 18, Median = 29, Q3 = 40, and Maximum = 65:\n\nWhat is the overall range of the distribution?',
    options: ['35', '40', '47', '60'],
    correctIndex: 3,
    correctAnswerText: '60',
    explanation: `Step-by-Step Solution:
1. $\\text{Range} = \\text{Maximum} - \\text{Minimum}$.
2. Substitute $\\text{Max} = 65$ and $\\text{Min} = 5$:
   $$\\text{Range} = 65 - 5 = 60$$

Teacher's SAT Pro-Tip:
Range = total whisker span from tip to tip ($65 - 5 = 60$).`,
    distractorExplanations: {
      0: '35 is $40 - 5$.',
      1: '40 is the value of $Q_3$.',
      2: '47 is $65 - 18$.'
    }
  },
  {
    id: 'ch11-q21',
    number: 21,
    exerciseNumber: 2,
    exerciseTitle: 'Exercise 2: Intermediate Data Reasoning & Comparisons (Questions 16–28)',
    question: 'A histogram shows most observations concentrated between 20 and 40, with only a few extreme observations scattered between 80 and 100.\n\nWhich statement regarding the measures of center is most reasonable?',
    diagram: {
      title: 'Histogram Frequency Distribution',
      caption: 'Frequency distribution across intervals.',
      xAxisLabel: 'Values',
      yAxisLabel: 'Frequency',
      xRange: [0, 110],
      yRange: [0, 20],
      xStep: 20,
      yStep: 5,
      curves: [
        { type: 'line', points: [[20, 0], [20, 18], [40, 18], [40, 0]], color: '#2563eb', strokeWidth: 2, shade: 'region', shadeColor: 'rgba(37, 99, 235, 0.3)' },
        { type: 'line', points: [[40, 0], [40, 8], [60, 8], [60, 0]], color: '#2563eb', strokeWidth: 2, shade: 'region', shadeColor: 'rgba(37, 99, 235, 0.2)' },
        { type: 'line', points: [[60, 0], [60, 3], [80, 3], [80, 0]], color: '#2563eb', strokeWidth: 2, shade: 'region', shadeColor: 'rgba(37, 99, 235, 0.2)' },
        { type: 'line', points: [[80, 0], [80, 2], [100, 2], [100, 0]], color: '#2563eb', strokeWidth: 2, shade: 'region', shadeColor: 'rgba(37, 99, 235, 0.2)' }
      ]
    },
    options: [
      'The larger values may pull the mean upward, making it greater than the median.',
      'The larger values cannot affect the mean at all.',
      'The distribution must be left-skewed.',
      'The median must equal 90.'
    ],
    correctIndex: 0,
    correctAnswerText: 'The larger values may pull the mean upward, making it greater than the median.',
    explanation: `Step-by-Step Solution:
1. The extreme values in the 80–100 range form a long tail to the right (right-skewed).
2. The arithmetic mean is sensitive to extreme large values and gets pulled toward the tail.
3. Therefore, the mean is expected to be greater than the median.

Teacher's SAT Pro-Tip:
Right skew pulls the Mean > Median. Left skew pulls the Mean < Median.`,
    distractorExplanations: {
      1: 'The mean is non-resistant and is strongly affected by large values.',
      2: 'A tail extending to larger positive numbers is right-skewed, not left-skewed.',
      3: 'The median lies near the center of the majority of observations (between 20 and 40), not at 90.'
    }
  },
  {
    id: 'ch11-q22',
    number: 22,
    exerciseNumber: 2,
    exerciseTitle: 'Exercise 2: Intermediate Data Reasoning & Comparisons (Questions 16–28)',
    question: 'A scatterplot shows that as outdoor temperature increases, ice cream sales generally increase.\n\nWhich conclusion is directly supported by this observational data?',
    options: [
      'Temperature and ice cream sales have a positive association.',
      'High temperature definitely causes every customer to purchase ice cream.',
      'Ice cream sales cause outdoor temperature to increase.',
      'There is no relationship between temperature and sales.'
    ],
    correctIndex: 0,
    correctAnswerText: 'Temperature and ice cream sales have a positive association.',
    explanation: `Step-by-Step Solution:
1. Both variables increase together $\\to$ Positive association.
2. Observational data establish correlation/association, not definitive causation.

Teacher's SAT Pro-Tip:
Association $\\neq$ Causation. Choose the safe, precise statistical claim.`,
    distractorExplanations: {
      1: 'Correlation does not establish direct deterministic causation.',
      2: 'Sales cannot cause changes in weather/temperature.',
      3: 'A clear upward trend exists; thus a positive relationship is present.'
    }
  },
  {
    id: 'ch11-q23',
    number: 23,
    exerciseNumber: 2,
    exerciseTitle: 'Exercise 2: Intermediate Data Reasoning & Comparisons (Questions 16–28)',
    question: 'A data table records the annual value of an index from 2021 to 2024 as shown below.\n\nWhich statement MUST be true?',
    table: {
      title: 'Annual Index Performance',
      headers: ['Year', 'Index Value'],
      rows: [
        ['2021', '50'],
        ['2022', '62'],
        ['2023', '59'],
        ['2024', '74']
      ]
    },
    options: [
      'The value increased every year.',
      'The value in 2024 was greater than the value in 2021.',
      'The value increased by exactly 12 each year.',
      'The value doubled from 2021 to 2024.'
    ],
    correctIndex: 1,
    correctAnswerText: 'The value in 2024 was greater than the value in 2021.',
    explanation: `Step-by-Step Solution:
1. Value in 2024 is 74; value in 2021 is 50.
2. $74 > 50$, so the 2024 value is strictly greater than the 2021 value. This must be true.
3. The value decreased from 2022 ($62$) to 2023 ($59$), so it did not increase every year.

Teacher's SAT Pro-Tip:
"Must be true" requires an unchallengeable mathematical fact directly from the data.`,
    distractorExplanations: {
      0: 'The value dropped between 2022 and 2023 ($62 \\to 59$).',
      2: 'Changes were $+12$, $-3$, and $+15$ (not constant $+12$).',
      3: 'Doubling 50 would give 100, but the 2024 value is 74.'
    }
  },
  {
    id: 'ch11-q24',
    number: 24,
    exerciseNumber: 2,
    exerciseTitle: 'Exercise 2: Intermediate Data Reasoning & Comparisons (Questions 16–28)',
    question: 'A data set has a minimum of 7, a median of 24, and a maximum of 70.\n\nWhich statement COULD be true?',
    options: [
      'Every observation in the data set is strictly greater than 24.',
      'The maximum observation in the data set is 70.',
      'The minimum observation in the data set is 24.',
      'The median is greater than the maximum.'
    ],
    correctIndex: 1,
    correctAnswerText: 'The maximum observation in the data set is 70.',
    explanation: `Step-by-Step Solution:
1. We are explicitly given that Maximum = 70.
2. Therefore, the statement "The maximum observation in the data set is 70" is completely consistent with the data.

Teacher's SAT Pro-Tip:
"Could be true" includes statements that are guaranteed or possible based on the given parameters.`,
    distractorExplanations: {
      0: 'Impossible: at least half of the observations must be $\\le$ the median ($24$), and the minimum is 7.',
      2: 'Impossible: the minimum is explicitly 7, not 24.',
      3: 'Impossible: the median ($24$) cannot exceed the maximum ($70$).'
    }
  },
  {
    id: 'ch11-q25',
    number: 25,
    exerciseNumber: 2,
    exerciseTitle: 'Exercise 2: Intermediate Data Reasoning & Comparisons (Questions 16–28)',
    question: 'Two groups were surveyed about an upcoming policy vote, as shown in the table below.\n\nWhich statement is correct?',
    table: {
      title: 'Policy Voting Proportions',
      headers: ['Group', 'In Favor', 'Total Surveyed'],
      rows: [
        ['Group A', '60', '120'],
        ['Group B', '75', '150']
      ]
    },
    options: [
      'Group A has a greater percentage in favor.',
      'Group B has a greater percentage in favor.',
      'Both groups have equal percentages in favor.',
      'There is not enough information to compare the groups.'
    ],
    correctIndex: 2,
    correctAnswerText: 'Both groups have equal percentages in favor.',
    explanation: `Step-by-Step Solution:
1. Group A: $\\frac{60}{120} = 0.50 = 50\\%$.
2. Group B: $\\frac{75}{150} = 0.50 = 50\\%$.
3. Both groups have exactly equal percentages ($50\\% = 50\\%$).

Teacher's SAT Pro-Tip:
$\\frac{60}{120} = \\frac{1}{2} = 50\\%$ and $\\frac{75}{150} = \\frac{1}{2} = 50\\%$.`,
    distractorExplanations: {
      0: 'Both percentages equal 50%.',
      1: 'Group B has more raw votes ($75 > 60$), but identical percentages ($50\\%$).',
      3: 'Sufficient numerical data are provided to compute exact percentages.'
    }
  },
  {
    id: 'ch11-q26',
    number: 26,
    exerciseNumber: 2,
    exerciseTitle: 'Exercise 2: Intermediate Data Reasoning & Comparisons (Questions 16–28)',
    question: 'The line graph below shows annual values from 2020 to 2023.\n\nWhat is the overall net increase in value from 2020 to 2023?',
    diagram: {
      title: 'Annual Value Trend',
      caption: 'Line graph tracking values across four consecutive years.',
      xAxisLabel: 'Year',
      yAxisLabel: 'Value',
      xRange: [2019, 2024],
      yRange: [30, 80],
      xStep: 1,
      yStep: 10,
      curves: [
        { type: 'line', points: [[2020, 40], [2021, 55], [2022, 52], [2023, 70]], color: '#2563eb', strokeWidth: 2.5 },
        { type: 'points', points: [[2020, 40], [2021, 55], [2022, 52], [2023, 70]], color: '#1e40af' }
      ]
    },
    options: ['20', '25', '30', '35'],
    correctIndex: 2,
    correctAnswerText: '30',
    explanation: `Step-by-Step Solution:
1. Value in 2023: $70$.
2. Value in 2020: $40$.
3. Overall increase:
   $$\\text{Net Increase} = 70 - 40 = 30$$

Teacher's SAT Pro-Tip:
Overall increase = Final value minus Initial value ($70 - 40 = 30$).`,
    distractorExplanations: {
      0: '20 is an arithmetic error.',
      1: '25 is $55 - 30$.',
      3: '35 is $75 - 40$.'
    }
  },
  {
    id: 'ch11-q27',
    number: 27,
    exerciseNumber: 2,
    exerciseTitle: 'Exercise 2: Intermediate Data Reasoning & Comparisons (Questions 16–28)',
    question: 'A histogram for Group A shows data tightly concentrated within a narrow interval of width 10. A histogram for Group B shows data spread widely across an interval of width 60.\n\nWhich statement is most reasonable?',
    diagram: {
      title: 'Spread Comparison Histograms',
      caption: 'Histograms for Group A and Group B.',
      subDiagrams: [
        {
          label: 'Group A',
          xAxisLabel: 'Score',
          yAxisLabel: 'Count',
          xRange: [0, 80],
          yRange: [0, 20],
          curves: [
            { type: 'line', points: [[35, 0], [35, 18], [45, 18], [45, 0]], color: '#2563eb', strokeWidth: 2, shade: 'region', shadeColor: 'rgba(37, 99, 235, 0.4)' }
          ]
        },
        {
          label: 'Group B',
          xAxisLabel: 'Score',
          yAxisLabel: 'Count',
          xRange: [0, 80],
          yRange: [0, 20],
          curves: [
            { type: 'line', points: [[10, 0], [10, 4], [70, 4], [70, 0]], color: '#ea580c', strokeWidth: 2, shade: 'region', shadeColor: 'rgba(234, 88, 12, 0.3)' }
          ]
        }
      ]
    },
    options: [
      'Group A likely has greater spread.',
      'Group B likely has greater spread.',
      'They must have equal spread.',
      'Neither group has any spread.'
    ],
    correctIndex: 1,
    correctAnswerText: 'Group B likely has greater spread.',
    explanation: `Step-by-Step Solution:
1. Group A spans only a narrow range of 10 units.
2. Group B spans a wide range of 60 units.
3. Greater width/dispersion across the horizontal axis directly reflects greater variability and spread.
4. Therefore, Group B likely has greater spread.

Teacher's SAT Pro-Tip:
Wider visual footprint on the x-axis = Greater spread/variability.`,
    distractorExplanations: {
      0: 'Group A is tightly clustered, indicating smaller spread.',
      2: 'A span of 60 is significantly larger than a span of 10.',
      3: 'Both distributions contain non-zero spread.'
    }
  },
  {
    id: 'ch11-q28',
    number: 28,
    exerciseNumber: 2,
    exerciseTitle: 'Exercise 2: Intermediate Data Reasoning & Comparisons (Questions 16–28)',
    question: 'A scatterplot has most data points clustered closely along a linear path, with one solitary point located far above the general pattern.\n\nWhat is the most appropriate statistical description of this isolated point?',
    diagram: {
      title: 'Scatterplot with Isolated Point',
      caption: 'Scatterplot showing distribution of points.',
      xAxisLabel: 'x',
      yAxisLabel: 'y',
      xRange: [0, 10],
      yRange: [0, 50],
      xStep: 2,
      yStep: 10,
      curves: [
        { type: 'points', points: [[1, 5], [2, 9], [3, 14], [4, 18], [5, 22], [6, 26], [7, 30], [8, 35]], color: '#2563eb' },
        { type: 'points', points: [[4, 46]], color: '#ef4444' }
      ]
    },
    options: [
      'The point may be an outlier.',
      'The point must be the arithmetic mean of the data set.',
      'The point must be the median of the data set.',
      'The point must automatically be deleted before analyzing the data.'
    ],
    correctIndex: 0,
    correctAnswerText: 'The point may be an outlier.',
    explanation: `Step-by-Step Solution:
1. An observation that falls substantially outside the general pattern of the rest of the data is classified as a potential outlier.
2. Outliers should be investigated, not automatically erased, and they are not defined as the mean or median.

Teacher's SAT Pro-Tip:
An isolated data point that deviates markedly from the overall trend is an outlier.`,
    distractorExplanations: {
      1: 'The point is an individual observation, not the calculated mean.',
      2: 'The median lies near the center of the observations.',
      3: 'Data points should not be arbitrarily discarded without documented justification.'
    }
  },

  // ==========================================
  // EXERCISE 3: ADVANCED MODULE 2 & MULTI-DISPLAY SYNTHESIS (Q29–Q40)
  // ==========================================
  {
    id: 'ch11-q29',
    number: 29,
    exerciseNumber: 3,
    exerciseTitle: 'Exercise 3: Advanced Module 2 & Multi-Display Synthesis (Questions 29–40)',
    question: 'A high school surveyed 800 students regarding participation in community service, as shown in the table below.\n\nWhat percentage of the surveyed students selected Option A?',
    table: {
      title: 'Community Service Participation Survey',
      headers: ['Response', 'Student Count'],
      rows: [
        ['Option A', '480'],
        ['Option B', '320']
      ]
    },
    options: ['50%', '55%', '60%', '65%'],
    correctIndex: 2,
    correctAnswerText: '60%',
    explanation: `Step-by-Step Solution:
1. Divide count by total:
   $$\\frac{480}{800} = \\frac{48}{80} = \\frac{6}{10} = 0.60$$
2. Convert to percentage:
   $$0.60 \\times 100\\% = 60\\%$$

Teacher's SAT Pro-Tip:
$\\frac{480}{800} = 60\\%$.`,
    distractorExplanations: {
      0: '50% is 400/800.',
      1: '55% is 440/800.',
      3: '65% is 520/800.'
    }
  },
  {
    id: 'ch11-q30',
    number: 30,
    exerciseNumber: 3,
    exerciseTitle: 'Exercise 3: Advanced Module 2 & Multi-Display Synthesis (Questions 29–40)',
    question: 'The table below displays the annual recorded rainfall (in inches) for a city from 2020 through 2023.\n\nWhich year experienced the greatest recorded rainfall?',
    table: {
      title: 'City Rainfall History',
      headers: ['Year', 'Rainfall (inches)'],
      rows: [
        ['2020', '42'],
        ['2021', '37'],
        ['2022', '51'],
        ['2023', '49']
      ]
    },
    options: ['2020', '2021', '2022', '2023'],
    correctIndex: 2,
    correctAnswerText: '2022',
    explanation: `Step-by-Step Solution:
1. Compare values: $42, 37, 51, 49$.
2. The maximum value is $51$, which occurred in the year 2022.

Teacher's SAT Pro-Tip:
Scan for the absolute maximum row value: $51$ in 2022.`,
    distractorExplanations: {
      0: '2020 had 42 in.',
      1: '2021 had the lowest rainfall (37 in).',
      3: '2023 had 49 in (second highest).'
    }
  },
  {
    id: 'ch11-q31',
    number: 31,
    exerciseNumber: 3,
    exerciseTitle: 'Exercise 3: Advanced Module 2 & Multi-Display Synthesis (Questions 29–40)',
    question: 'The table below displays the quartile boundaries for two distributions, Set A and Set B.\n\nWhich data set has the greater interquartile range (IQR)?',
    table: {
      title: 'Quartile Spread Data',
      headers: ['Data Set', 'Q1', 'Q3'],
      rows: [
        ['Set A', '15', '31'],
        ['Set B', '22', '41']
      ]
    },
    options: ['Set A', 'Set B', 'Both have identical IQR', 'Cannot be determined'],
    correctIndex: 1,
    correctAnswerText: 'Set B',
    explanation: `Step-by-Step Solution:
1. $\\text{IQR}_A = Q_3 - Q_1 = 31 - 15 = 16$.
2. $\\text{IQR}_B = Q_3 - Q_1 = 41 - 22 = 19$.
3. Compare: $19 > 16$. Set B has the greater IQR.

Teacher's SAT Pro-Tip:
Compute $Q_3 - Q_1$ for each set and compare: $19 > 16$.`,
    distractorExplanations: {
      0: 'Set A has an IQR of 16 ($16 < 19$).',
      2: '16 and 19 are not equal.',
      3: 'Exact quartiles allow direct computation and comparison.'
    }
  },
  {
    id: 'ch11-q32',
    number: 32,
    exerciseNumber: 3,
    exerciseTitle: 'Exercise 3: Advanced Module 2 & Multi-Display Synthesis (Questions 29–40)',
    question: 'A continuous distribution has a long, extended tail stretching toward larger values (right-skewed).\n\nWhich relationship between the mean and median is generally expected?',
    diagram: {
      title: 'Right-Skewed Distribution Shape',
      caption: 'Continuous distribution curve.',
      xAxisLabel: 'Values',
      yAxisLabel: 'Density',
      xRange: [0, 100],
      yRange: [0, 20],
      curves: [
        { type: 'line', points: [[15, 0], [25, 18], [40, 8], [60, 3], [90, 0]], color: '#2563eb', strokeWidth: 2.5 }
      ]
    },
    options: [
      'The mean may be greater than the median.',
      'The mean must be less than the median.',
      'The mean must equal the median.',
      'The median must equal the maximum.'
    ],
    correctIndex: 0,
    correctAnswerText: 'The mean may be greater than the median.',
    explanation: `Step-by-Step Solution:
1. High extreme values in the right tail pull the sum and hence the arithmetic mean upward.
2. The median is resistant to extreme values and remains closer to the main peak.
3. Therefore, in a right-skewed distribution, $\\text{Mean} > \\text{Median}$.

Teacher's SAT Pro-Tip:
Right tail $\\to$ Mean > Median. Left tail $\\to$ Mean < Median. Symmetric $\\to$ Mean $\\approx$ Median.`,
    distractorExplanations: {
      1: 'Mean < Median occurs in left-skewed distributions.',
      2: 'Mean = Median occurs in symmetric distributions.',
      3: 'The median represents the 50th percentile, not the maximum.'
    }
  },
  {
    id: 'ch11-q33',
    number: 33,
    exerciseNumber: 3,
    exerciseTitle: 'Exercise 3: Advanced Module 2 & Multi-Display Synthesis (Questions 29–40)',
    question: 'Two surveys recorded affirmative responses as shown in the table below.\n\nWhich survey had the greater percentage of affirmative responses?',
    table: {
      title: 'Survey Affirmative Response Rates',
      headers: ['Survey', 'Yes Responses', 'Total Sample Size'],
      rows: [
        ['Survey A', '420', '700'],
        ['Survey B', '500', '1,000']
      ]
    },
    options: ['Survey A', 'Survey B', 'Both had equal percentages', 'Cannot be determined'],
    correctIndex: 0,
    correctAnswerText: 'Survey A',
    explanation: `Step-by-Step Solution:
1. Calculate Survey A percentage:
   $$\\text{Rate}_A = \\frac{420}{700} = \\frac{42}{70} = \\frac{6}{10} = 60\\%$$

2. Calculate Survey B percentage:
   $$\\text{Rate}_B = \\frac{500}{1,000} = 50\\%$$

3. Compare:
   $$60\\% > 50\\%$$
   Survey A had the greater percentage.

Teacher's SAT Pro-Tip:
Even though Survey B has more total affirmative responses ($500 > 420$), Survey A has the higher rate ($60\\% > 50\\%$).`,
    distractorExplanations: {
      1: 'Survey B had a rate of only 50%, compared to Survey A’s 60%.',
      2: '60% and 50% are not equal.',
      3: 'Exact sample counts allow precise percentage calculation.'
    }
  },
  {
    id: 'ch11-q34',
    number: 34,
    exerciseNumber: 3,
    exerciseTitle: 'Exercise 3: Advanced Module 2 & Multi-Display Synthesis (Questions 29–40)',
    question: 'A scatterplot displays data points distributed evenly in a circular cloud with no clear upward or downward pattern.\n\nWhich conclusion is best supported?',
    diagram: {
      title: 'Zero Correlation Scatterplot',
      caption: 'Circular cloud of points with no linear direction.',
      xAxisLabel: 'x',
      yAxisLabel: 'y',
      xRange: [0, 10],
      yRange: [0, 10],
      curves: [
        {
          type: 'points',
          points: [
            [3, 5], [4, 7], [4, 3], [5, 5], [5, 8], [5, 2], [6, 4], [6, 6], [7, 5]
          ],
          color: '#2563eb'
        }
      ]
    },
    options: [
      'Strong positive association',
      'Strong negative association',
      'Little or no linear association',
      'Perfect positive association'
    ],
    correctIndex: 2,
    correctAnswerText: 'Little or no linear association',
    explanation: `Step-by-Step Solution:
1. When data points form a circular cloud without a clear upward or downward trajectory, changes in $x$ do not correlate with predictable changes in $y$.
2. This represents little or no linear association ($r \\approx 0$).

Teacher's SAT Pro-Tip:
No directional slope = No linear association.`,
    distractorExplanations: {
      0: 'Positive association requires a clear upward tilt.',
      1: 'Negative association requires a clear downward tilt.',
      3: 'Perfect association requires points lying exactly on a single straight line.'
    }
  },
  {
    id: 'ch11-q35',
    number: 35,
    exerciseNumber: 3,
    exerciseTitle: 'Exercise 3: Advanced Module 2 & Multi-Display Synthesis (Questions 29–40)',
    question: 'A measured data series changes from an initial value of 120 to a final value of 165.\n\nWhat is the absolute numerical increase in the series?',
    options: ['35', '40', '45', '55'],
    correctIndex: 2,
    correctAnswerText: '45',
    explanation: `Step-by-Step Solution:
1. $\\text{Increase} = \\text{Final Value} - \\text{Initial Value}$.
2. Substitute:
   $$165 - 120 = 45$$

Teacher's SAT Pro-Tip:
$\\text{Increase} = 165 - 120 = 45$.`,
    distractorExplanations: {
      0: '35 is $155 - 120$.',
      1: '40 is $160 - 120$.',
      3: '55 is $175 - 120$.'
    }
  },
  {
    id: 'ch11-q36',
    number: 36,
    exerciseNumber: 3,
    exerciseTitle: 'Exercise 3: Advanced Module 2 & Multi-Display Synthesis (Questions 29–40)',
    question: 'The table below summarizes the parameters for two distributions, A and B.\n\nWhich statement is supported by the data?',
    table: {
      title: 'Comparative Summary of Distributions A and B',
      headers: ['Parameter', 'Distribution A', 'Distribution B'],
      rows: [
        ['Median', '48', '48'],
        ['IQR (Middle Spread)', '9', '15'],
        ['Range (Overall Spread)', '35', '52']
      ]
    },
    options: [
      'Distribution A has a greater median than Distribution B.',
      'Distribution B has a greater median than Distribution A.',
      'Distribution B has greater middle spread and greater overall spread than Distribution A.',
      'Distribution A has greater overall spread than Distribution B.'
    ],
    correctIndex: 2,
    correctAnswerText: 'Distribution B has greater middle spread and greater overall spread than Distribution A.',
    explanation: `Step-by-Step Solution:
1. Compare Center:
   Both distributions have an identical median of 48.
2. Compare Middle Spread (IQR):
   $\\text{IQR}_B = 15 > \\text{IQR}_A = 9$. Distribution B has greater middle spread.
3. Compare Overall Spread (Range):
   $\\text{Range}_B = 52 > \\text{Range}_A = 35$. Distribution B has greater overall spread.
4. Therefore, Distribution B is more variable according to both measures of spread.

Teacher's SAT Pro-Tip:
IQR = middle spread, Range = overall spread. Set B exceeds Set A on both ($15 > 9$ and $52 > 35$).`,
    distractorExplanations: {
      0: 'Both medians are exactly 48.',
      1: 'Both medians are exactly 48.',
      3: 'Distribution A has a smaller range ($35 < 52$).'
    }
  },
  {
    id: 'ch11-q37',
    number: 37,
    exerciseNumber: 3,
    exerciseTitle: 'Exercise 3: Advanced Module 2 & Multi-Display Synthesis (Questions 29–40)',
    question: 'The table below shows the selection outcomes for two applicant pools.\n\nWhich group has the greater selection percentage?',
    table: {
      title: 'Applicant Selection Outcomes',
      headers: ['Applicant Pool', 'Selected Applicants', 'Total Applicants'],
      rows: [
        ['Group A', '84', '240'],
        ['Group B', '108', '360']
      ]
    },
    options: ['Group A', 'Group B', 'Both groups have equal selection percentages', 'Cannot be determined'],
    correctIndex: 0,
    correctAnswerText: 'Group A',
    explanation: `Step-by-Step Solution:
1. Compute selection percentage for Group A:
   $$\\text{Rate}_A = \\frac{84}{240} = \\frac{21}{60} = \\frac{7}{20} = 0.35 = 35\\%$$

2. Compute selection percentage for Group B:
   $$\\text{Rate}_B = \\frac{108}{360} = \\frac{12}{40} = \\frac{3}{10} = 0.30 = 30\\%$$

3. Compare percentages:
   $$35\\% > 30\\%$$
   Group A has the higher selection rate ($35\\%$ vs. $30\\%$).

Teacher's SAT Pro-Tip:
Always divide counts by pool sizes: $\\frac{84}{240} = 35\\% > \\frac{108}{360} = 30\\%$.`,
    distractorExplanations: {
      1: 'Group B has more selected individuals ($108$), but a lower percentage ($30\\% < 35\\%$).',
      2: '35% and 30% are not equal.',
      3: 'Complete applicant numbers are given, allowing exact calculation.'
    }
  },
  {
    id: 'ch11-q38',
    number: 38,
    exerciseNumber: 3,
    exerciseTitle: 'Exercise 3: Advanced Module 2 & Multi-Display Synthesis (Questions 29–40)',
    question: 'Two scatterplots both exhibit a positive upward trend. In Plot A, the points are closely clustered around the line of best fit. In Plot B, the points are widely scattered.\n\nWhich statement is best supported?',
    diagram: {
      title: 'Linear Association Strength Comparison',
      caption: 'Scatterplots with fitted regression lines.',
      subDiagrams: [
        {
          label: 'Plot A',
          xAxisLabel: 'x',
          yAxisLabel: 'y',
          xRange: [0, 10],
          yRange: [0, 30],
          curves: [
            { type: 'line', points: [[0, 2], [10, 26]], color: '#9333ea', strokeWidth: 1.5, style: 'dashed' },
            { type: 'points', points: [[1, 4.5], [2, 7], [3, 9.2], [4, 11.8], [5, 14.2], [6, 16.5], [7, 19], [8, 21.2]], color: '#2563eb' }
          ]
        },
        {
          label: 'Plot B',
          xAxisLabel: 'x',
          yAxisLabel: 'y',
          xRange: [0, 10],
          yRange: [0, 30],
          curves: [
            { type: 'line', points: [[0, 2], [10, 26]], color: '#9333ea', strokeWidth: 1.5, style: 'dashed' },
            { type: 'points', points: [[1, 2], [2, 12], [3, 5], [4, 18], [5, 10], [6, 24], [7, 15], [8, 28]], color: '#ea580c' }
          ]
        }
      ]
    },
    options: [
      'Plot A has a stronger positive linear association than Plot B.',
      'Plot B has a stronger positive linear association than Plot A.',
      'Plot B must have a steeper slope than Plot A.',
      'Plot A must have a greater y-intercept than Plot B.'
    ],
    correctIndex: 0,
    correctAnswerText: 'Plot A has a stronger positive linear association than Plot B.',
    explanation: `Step-by-Step Solution:
1. Strength of linear association is measured by how tightly points cluster around the linear model.
2. Plot A has minimal scatter (high correlation $r \\approx 0.98$), while Plot B has wide dispersion.
3. Therefore, Plot A has a stronger positive linear association.

Teacher's SAT Pro-Tip:
Strength $\\neq$ Slope! Strength is how tightly points hug the line, regardless of slope steepness.`,
    distractorExplanations: {
      1: 'Plot B has wide scatter, indicating a weaker association.',
      2: 'Slope steepness does not dictate correlation strength.',
      3: 'Point clustering does not dictate y-intercept values.'
    }
  },
  {
    id: 'ch11-q39',
    number: 39,
    exerciseNumber: 3,
    exerciseTitle: 'Exercise 3: Advanced Module 2 & Multi-Display Synthesis (Questions 29–40)',
    question: 'The table below displays mathematics assessment statistics for two high schools.\n\nWhich conclusion is best supported?',
    table: {
      title: 'School Assessment Spread & Center',
      headers: ['School', 'Median', 'IQR', 'Range'],
      rows: [
        ['School A', '71', '12', '44'],
        ['School B', '68', '21', '67']
      ]
    },
    options: [
      'School A has greater variability than School B.',
      'School B has greater variability than School A.',
      'School B has a greater median score than School A.',
      'Both school distributions have identical spread.'
    ],
    correctIndex: 1,
    correctAnswerText: 'School B has greater variability than School A.',
    explanation: `Step-by-Step Solution:
1. Variability is measured by spread metrics (IQR and Range).
2. Compare IQR: $\\text{IQR}_B = 21 > \\text{IQR}_A = 12$.
3. Compare Range: $\\text{Range}_B = 67 > \\text{Range}_A = 44$.
4. By both statistical measures of dispersion, School B exhibits greater variability.

Teacher's SAT Pro-Tip:
Variability = Spread. School B has larger IQR ($21 > 12$) and larger Range ($67 > 44$).`,
    distractorExplanations: {
      0: 'School A has smaller spread values ($12 < 21$ and $44 < 67$).',
      2: 'School A has the higher median ($71 > 68$).',
      3: 'The spread values are clearly unequal.'
    }
  },
  {
    id: 'ch11-q40',
    number: 40,
    exerciseNumber: 3,
    exerciseTitle: 'Exercise 3: Advanced Module 2 & Multi-Display Synthesis (Questions 29–40)',
    question: 'A data set is represented by both the histogram and box plot shown below.\n\nWhich statement is most consistent with BOTH displays?',
    diagram: {
      title: 'Multi-Display Representation (Histogram + Box Plot)',
      caption: 'Dual display representing the data distribution.',
      subDiagrams: [
        {
          label: 'Histogram Representation',
          xAxisLabel: 'Values',
          yAxisLabel: 'Frequency',
          xRange: [10, 95],
          yRange: [0, 20],
          curves: [
            { type: 'line', points: [[20, 0], [20, 17], [35, 17], [35, 0]], color: '#2563eb', strokeWidth: 2, shade: 'region', shadeColor: 'rgba(37, 99, 235, 0.3)' },
            { type: 'line', points: [[35, 0], [35, 11], [50, 11], [50, 0]], color: '#2563eb', strokeWidth: 2, shade: 'region', shadeColor: 'rgba(37, 99, 235, 0.25)' },
            { type: 'line', points: [[50, 0], [50, 5], [65, 5], [65, 0]], color: '#2563eb', strokeWidth: 2, shade: 'region', shadeColor: 'rgba(37, 99, 235, 0.2)' },
            { type: 'line', points: [[65, 0], [65, 2], [80, 2], [80, 0]], color: '#2563eb', strokeWidth: 2, shade: 'region', shadeColor: 'rgba(37, 99, 235, 0.15)' },
            { type: 'line', points: [[80, 0], [80, 1], [90, 1], [90, 0]], color: '#2563eb', strokeWidth: 2, shade: 'region', shadeColor: 'rgba(37, 99, 235, 0.15)' }
          ]
        },
        {
          label: 'Box Plot Representation',
          xAxisLabel: 'Values',
          xRange: [10, 95],
          yRange: [0, 5],
          curves: [
            { type: 'line', points: [[24, 1.5], [40, 1.5], [40, 3.5], [24, 3.5], [24, 1.5]], color: '#ea580c', strokeWidth: 2, shade: 'region', shadeColor: 'rgba(234, 88, 12, 0.15)' },
            { type: 'line', points: [[31, 1.5], [31, 3.5]], color: '#c2410c', strokeWidth: 2.5 },
            { type: 'line', points: [[15, 2.5], [24, 2.5]], color: '#ea580c', strokeWidth: 2 },
            { type: 'line', points: [[15, 2], [15, 3]], color: '#ea580c', strokeWidth: 2 },
            { type: 'line', points: [[40, 2.5], [85, 2.5]], color: '#ea580c', strokeWidth: 2 },
            { type: 'line', points: [[85, 2], [85, 3]], color: '#ea580c', strokeWidth: 2 }
          ],
          textAnnotations: [
            { x: 24, y: 4.1, text: 'Q1: 24', color: '#c2410c', fontSize: 9 },
            { x: 31, y: 1.0, text: 'Med: 31', color: '#c2410c', fontSize: 9 },
            { x: 40, y: 4.1, text: 'Q3: 40', color: '#c2410c', fontSize: 9 },
            { x: 85, y: 1.0, text: 'Max: 85', color: '#64748b', fontSize: 9 }
          ]
        }
      ]
    },
    options: [
      'The distribution is likely right-skewed and contains some relatively large observations.',
      'The distribution is likely left-skewed because the maximum is larger than the median.',
      'The distribution must be perfectly symmetric.',
      'The arithmetic mean must equal 31.'
    ],
    correctIndex: 0,
    correctAnswerText: 'The distribution is likely right-skewed and contains some relatively large observations.',
    explanation: `Step-by-Step Multi-Display Cross-Examination:
1. Examine the Histogram:
   The bars are tall at the lower values ($20-35$) and trail off into an extended tail to the right ($80-90$). This indicates right-skewness.

2. Examine the Box Plot:
   • The lower whisker spans $24 - 15 = 9$ units.
   • The upper whisker spans $85 - 40 = 45$ units.
   An upper whisker that is five times longer than the lower whisker confirms that observations stretch far into the high positive tail.

3. Synthesize:
   Both displays consistently indicate a right-skewed distribution featuring relatively large extreme observations.

Teacher's SAT Pro-Tip:
Long right tail on histogram $\\leftrightarrow$ Long right whisker on box plot. Both confirm right skew.`,
    distractorExplanations: {
      1: 'An elongated right tail indicates right skew, not left skew.',
      2: 'The unequal whisker lengths ($9$ vs. $45$) contradict symmetry.',
      3: 'In a right-skewed distribution, the mean is pulled above the median ($> 31$).'
    }
  }
];
