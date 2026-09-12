import { MathExerciseQuestion } from './satMathConcepts';

export const CHAPTER_10_QUESTIONS_PART_3: MathExerciseQuestion[] = [
  {
    id: 'sat-ch10-q81',
    number: 81,
    exerciseNumber: 3,
    exerciseTitle: 'Exercise 3: Hardest Module 2 Visual & Conceptual Comparisons (Questions 81–100)',
    question: 'Two classes take the same examination. The histograms below summarize their score distributions.\n\nWhich statement is best supported by the distributions?',
    diagram: {
      title: 'Score Distributions for Class A and Class B',
      caption: 'Side-by-side histograms displaying exam score distributions for Class A and Class B.',
      subDiagrams: [
        {
          label: 'Class A (Total = 45)',
          xAxisLabel: 'Score Interval',
          yAxisLabel: 'Frequency',
          xRange: [45, 105],
          yRange: [0, 18],
          xStep: 10,
          yStep: 5,
          curves: [
            { type: 'line', points: [[50, 0], [50, 2], [60, 2], [60, 0]], color: '#2563eb', strokeWidth: 1.5, shade: 'below', shadeColor: 'rgba(37, 99, 235, 0.3)' },
            { type: 'line', points: [[60, 0], [60, 7], [70, 7], [70, 0]], color: '#2563eb', strokeWidth: 1.5, shade: 'below', shadeColor: 'rgba(37, 99, 235, 0.3)' },
            { type: 'line', points: [[70, 0], [70, 14], [80, 14], [80, 0]], color: '#2563eb', strokeWidth: 1.5, shade: 'below', shadeColor: 'rgba(37, 99, 235, 0.3)' },
            { type: 'line', points: [[80, 0], [80, 15], [90, 15], [90, 0]], color: '#2563eb', strokeWidth: 1.5, shade: 'below', shadeColor: 'rgba(37, 99, 235, 0.3)' },
            { type: 'line', points: [[90, 0], [90, 7], [100, 7], [100, 0]], color: '#2563eb', strokeWidth: 1.5, shade: 'below', shadeColor: 'rgba(37, 99, 235, 0.3)' }
          ],
          textAnnotations: [
            { x: 55, y: 3.5, text: '2', color: '#1e40af', fontSize: 9.5, fontWeight: '800' },
            { x: 65, y: 8.5, text: '7', color: '#1e40af', fontSize: 9.5, fontWeight: '800' },
            { x: 75, y: 15.5, text: '14', color: '#1e40af', fontSize: 9.5, fontWeight: '800' },
            { x: 85, y: 16.5, text: '15', color: '#1e40af', fontSize: 9.5, fontWeight: '800' },
            { x: 95, y: 8.5, text: '7', color: '#1e40af', fontSize: 9.5, fontWeight: '800' }
          ]
        },
        {
          label: 'Class B (Total = 37)',
          xAxisLabel: 'Score Interval',
          yAxisLabel: 'Frequency',
          xRange: [45, 105],
          yRange: [0, 18],
          xStep: 10,
          yStep: 5,
          curves: [
            { type: 'line', points: [[50, 0], [50, 4], [60, 4], [60, 0]], color: '#ea580c', strokeWidth: 1.5, shade: 'below', shadeColor: 'rgba(234, 88, 12, 0.3)' },
            { type: 'line', points: [[60, 0], [60, 10], [70, 10], [70, 0]], color: '#ea580c', strokeWidth: 1.5, shade: 'below', shadeColor: 'rgba(234, 88, 12, 0.3)' },
            { type: 'line', points: [[70, 0], [70, 13], [80, 13], [80, 0]], color: '#ea580c', strokeWidth: 1.5, shade: 'below', shadeColor: 'rgba(234, 88, 12, 0.3)' },
            { type: 'line', points: [[80, 0], [80, 8], [90, 8], [90, 0]], color: '#ea580c', strokeWidth: 1.5, shade: 'below', shadeColor: 'rgba(234, 88, 12, 0.3)' },
            { type: 'line', points: [[90, 0], [90, 2], [100, 2], [100, 0]], color: '#ea580c', strokeWidth: 1.5, shade: 'below', shadeColor: 'rgba(234, 88, 12, 0.3)' }
          ],
          textAnnotations: [
            { x: 55, y: 5.5, text: '4', color: '#c2410c', fontSize: 9.5, fontWeight: '800' },
            { x: 65, y: 11.5, text: '10', color: '#c2410c', fontSize: 9.5, fontWeight: '800' },
            { x: 75, y: 14.5, text: '13', color: '#c2410c', fontSize: 9.5, fontWeight: '800' },
            { x: 85, y: 9.5, text: '8', color: '#c2410c', fontSize: 9.5, fontWeight: '800' },
            { x: 95, y: 3.5, text: '2', color: '#c2410c', fontSize: 9.5, fontWeight: '800' }
          ]
        }
      ]
    },
    options: [
      'Class A has a greater proportion of students in the highest score interval.',
      'Class B has a greater proportion of students in the highest score interval.',
      'The two classes must have exactly the same mean.',
      'Class A must have a smaller range than Class B.'
    ],
    correctIndex: 0,
    correctAnswerText: 'Class A has a greater proportion of students in the highest score interval.',
    explanation: `Step-by-Step Proportion Analysis:
1. Find the total number of students in each class:
   • Class A Total: $2 + 7 + 14 + 15 + 7 = 45$ students.
   • Class B Total: $4 + 10 + 13 + 8 + 2 = 37$ students.

2. Calculate the proportion of students in the highest score interval (90–99):
   • Class A: $\\frac{7}{45} \\approx 0.1556$ ($15.56\\%$)
   • Class B: $\\frac{2}{37} \\approx 0.0541$ ($5.41\\%$)

3. Compare proportions:
   $$15.56\\% > 5.41\\%$$
   Class A has a significantly greater proportion of students scoring in the 90–99 interval.

Teacher's SAT Pro-Tip:
When comparing distributions with different sample sizes, always compute relative proportions rather than relying strictly on raw frequency counts.`,
    distractorExplanations: {
      1: 'Class B only has $2/37 \\approx 5.41\\%$ in the highest interval, compared to $7/45 \\approx 15.56\\%$ for Class A.',
      2: 'Class A is shifted toward higher score bins (80s and 90s), so its mean is significantly higher than Class B.',
      3: 'Both distributions span from the 50–59 bin to the 90–99 bin; we cannot conclude that Class A has a smaller range without individual data values.'
    }
  },
  {
    id: 'sat-ch10-q82',
    number: 82,
    exerciseNumber: 3,
    exerciseTitle: 'Exercise 3: Hardest Module 2 Visual & Conceptual Comparisons (Questions 81–100)',
    question: 'Two data sets have the frequency distributions displayed in the histograms below.\n\nWhich conclusion is most reasonable?',
    diagram: {
      title: 'Comparative Frequency Distributions',
      caption: 'Side-by-side grouped frequency histograms for Data Set A and Data Set B.',
      subDiagrams: [
        {
          label: 'Data Set A (n = 45)',
          xAxisLabel: 'Interval',
          yAxisLabel: 'Frequency',
          xRange: [5, 65],
          yRange: [0, 20],
          xStep: 10,
          yStep: 5,
          curves: [
            { type: 'line', points: [[10, 0], [10, 2], [20, 2], [20, 0]], color: '#2563eb', strokeWidth: 1.5, shade: 'below', shadeColor: 'rgba(37, 99, 235, 0.3)' },
            { type: 'line', points: [[20, 0], [20, 5], [30, 5], [30, 0]], color: '#2563eb', strokeWidth: 1.5, shade: 'below', shadeColor: 'rgba(37, 99, 235, 0.3)' },
            { type: 'line', points: [[30, 0], [30, 12], [40, 12], [40, 0]], color: '#2563eb', strokeWidth: 1.5, shade: 'below', shadeColor: 'rgba(37, 99, 235, 0.3)' },
            { type: 'line', points: [[40, 0], [40, 18], [50, 18], [50, 0]], color: '#2563eb', strokeWidth: 1.5, shade: 'below', shadeColor: 'rgba(37, 99, 235, 0.3)' },
            { type: 'line', points: [[50, 0], [50, 8], [60, 8], [60, 0]], color: '#2563eb', strokeWidth: 1.5, shade: 'below', shadeColor: 'rgba(37, 99, 235, 0.3)' }
          ],
          textAnnotations: [
            { x: 15, y: 3.5, text: '2', color: '#1e40af', fontSize: 9.5, fontWeight: '800' },
            { x: 25, y: 6.5, text: '5', color: '#1e40af', fontSize: 9.5, fontWeight: '800' },
            { x: 35, y: 13.5, text: '12', color: '#1e40af', fontSize: 9.5, fontWeight: '800' },
            { x: 45, y: 19.5, text: '18', color: '#1e40af', fontSize: 9.5, fontWeight: '800' },
            { x: 55, y: 9.5, text: '8', color: '#1e40af', fontSize: 9.5, fontWeight: '800' }
          ]
        },
        {
          label: 'Data Set B (n = 45)',
          xAxisLabel: 'Interval',
          yAxisLabel: 'Frequency',
          xRange: [5, 65],
          yRange: [0, 20],
          xStep: 10,
          yStep: 5,
          curves: [
            { type: 'line', points: [[10, 0], [10, 8], [20, 8], [20, 0]], color: '#ea580c', strokeWidth: 1.5, shade: 'below', shadeColor: 'rgba(234, 88, 12, 0.3)' },
            { type: 'line', points: [[20, 0], [20, 17], [30, 17], [30, 0]], color: '#ea580c', strokeWidth: 1.5, shade: 'below', shadeColor: 'rgba(234, 88, 12, 0.3)' },
            { type: 'line', points: [[30, 0], [30, 12], [40, 12], [40, 0]], color: '#ea580c', strokeWidth: 1.5, shade: 'below', shadeColor: 'rgba(234, 88, 12, 0.3)' },
            { type: 'line', points: [[40, 0], [40, 6], [50, 6], [50, 0]], color: '#ea580c', strokeWidth: 1.5, shade: 'below', shadeColor: 'rgba(234, 88, 12, 0.3)' },
            { type: 'line', points: [[50, 0], [50, 2], [60, 2], [60, 0]], color: '#ea580c', strokeWidth: 1.5, shade: 'below', shadeColor: 'rgba(234, 88, 12, 0.3)' }
          ],
          textAnnotations: [
            { x: 15, y: 9.5, text: '8', color: '#c2410c', fontSize: 9.5, fontWeight: '800' },
            { x: 25, y: 18.5, text: '17', color: '#c2410c', fontSize: 9.5, fontWeight: '800' },
            { x: 35, y: 13.5, text: '12', color: '#c2410c', fontSize: 9.5, fontWeight: '800' },
            { x: 45, y: 7.5, text: '6', color: '#c2410c', fontSize: 9.5, fontWeight: '800' },
            { x: 55, y: 3.5, text: '2', color: '#c2410c', fontSize: 9.5, fontWeight: '800' }
          ]
        }
      ]
    },
    options: [
      'Data Set A is generally centered at lower values than Data Set B.',
      'Data Set A is generally centered at higher values than Data Set B.',
      'Both distributions must have identical medians.',
      'Data Set B must have a greater standard deviation.'
    ],
    correctIndex: 1,
    correctAnswerText: 'Data Set A is generally centered at higher values than Data Set B.',
    explanation: `Step-by-Step Distribution Center Analysis:
1. Examine where frequencies are clustered in Data Set A:
   • 26 of 45 observations ($57.8\\%$) fall into the upper intervals (40–49 and 50–59).
   • The center/median of Data Set A falls within the 40–49 interval.

2. Examine where frequencies are clustered in Data Set B:
   • 25 of 45 observations ($55.6\\%$) fall into the lower intervals (10–19 and 20–29).
   • The center/median of Data Set B falls within the 20–29 interval.

3. Therefore, Data Set A is centered at substantially higher values than Data Set B.

Teacher's SAT Pro-Tip:
Scan for the concentration of frequencies. When a histogram has taller bars on the right, its center of mass is shifted rightward (higher values).`,
    distractorExplanations: {
      0: 'Data Set A is shifted to the right, meaning its center is higher, not lower.',
      2: 'Data Set A has its median in the 40–49 range (around 42), whereas Data Set B has its median in the 20–29 range (around 27).',
      3: 'Both distributions have symmetric/balanced shapes with identical sample sizes and spreads across the 10–59 span; Data Set B does not have a clearly larger standard deviation.'
    }
  },
  {
    id: 'sat-ch10-q83',
    number: 83,
    exerciseNumber: 3,
    exerciseTitle: 'Exercise 3: Hardest Module 2 Visual & Conceptual Comparisons (Questions 81–100)',
    question: 'A data set is represented by the histogram below.\n\nA second data set is created by adding 20 to every observation in the first data set. Which statement describes the second histogram?',
    diagram: {
      title: 'Original Data Set Histogram',
      caption: 'Frequency histogram for the original 4-interval distribution.',
      xAxisLabel: 'Value Interval',
      yAxisLabel: 'Frequency',
      xRange: [-5, 45],
      yRange: [0, 15],
      xStep: 10,
      yStep: 5,
      curves: [
        { type: 'line', points: [[0, 0], [0, 3], [10, 3], [10, 0]], color: '#2563eb', strokeWidth: 1.5, shade: 'below', shadeColor: 'rgba(37, 99, 235, 0.3)' },
        { type: 'line', points: [[10, 0], [10, 7], [20, 7], [20, 0]], color: '#2563eb', strokeWidth: 1.5, shade: 'below', shadeColor: 'rgba(37, 99, 235, 0.3)' },
        { type: 'line', points: [[20, 0], [20, 12], [30, 12], [30, 0]], color: '#2563eb', strokeWidth: 1.5, shade: 'below', shadeColor: 'rgba(37, 99, 235, 0.3)' },
        { type: 'line', points: [[30, 0], [30, 8], [40, 8], [40, 0]], color: '#2563eb', strokeWidth: 1.5, shade: 'below', shadeColor: 'rgba(37, 99, 235, 0.3)' }
      ],
      textAnnotations: [
        { x: 5, y: 4.5, text: '3', color: '#1e40af', fontSize: 9.5, fontWeight: '800' },
        { x: 15, y: 8.5, text: '7', color: '#1e40af', fontSize: 9.5, fontWeight: '800' },
        { x: 25, y: 13.5, text: '12', color: '#1e40af', fontSize: 9.5, fontWeight: '800' },
        { x: 35, y: 9.5, text: '8', color: '#1e40af', fontSize: 9.5, fontWeight: '800' }
      ]
    },
    options: [
      'Every frequency remains the same, but the intervals shift 20 units to the right.',
      'Every frequency doubles.',
      'The shape becomes more spread out.',
      'Every interval shifts 20 units to the left.'
    ],
    correctIndex: 0,
    correctAnswerText: 'Every frequency remains the same, but the intervals shift 20 units to the right.',
    explanation: `Step-by-Step Linear Transformation on a Histogram:
1. When a constant $c = +20$ is added to every data point $x_i$:
   $$x_{\\text{new}} = x_{\\text{old}} + 20$$

2. Impact on the histogram intervals:
   • The interval 0–9 becomes 20–29.
   • The interval 10–19 becomes 30–39.
   • The interval 20–29 becomes 40–49.
   • The interval 30–39 becomes 50–59.

3. Impact on counts and shape:
   • The number of items in each bin (frequencies) remains exactly identical (3, 7, 12, 8).
   • The spread (IQR, standard deviation, range) does not change.
   • The entire distribution simply translates 20 units to the right along the horizontal axis.

Teacher's SAT Pro-Tip:
Adding or subtracting a constant shifts position ($+c$) without changing shape, relative frequencies, or spread.`,
    distractorExplanations: {
      1: 'Adding 20 to data values does not change how many observations exist in each group; frequencies stay 3, 7, 12, 8.',
      2: 'Adding a constant does not stretch or spread the data; standard deviation and IQR remain strictly invariant.',
      3: 'Adding a positive constant shifts intervals to the right (positive direction), not to the left.'
    }
  },
  {
    id: 'sat-ch10-q84',
    number: 84,
    exerciseNumber: 3,
    exerciseTitle: 'Exercise 3: Hardest Module 2 Visual & Conceptual Comparisons (Questions 81–100)',
    question: 'The box plots below display the five-number summaries for Data Set A and Data Set B.\n\nWhich statement is correct?',
    diagram: {
      title: 'Comparative Box Plot Displays',
      caption: 'Side-by-side boxplots for Data Set A and Data Set B showing five-number summaries.',
      subDiagrams: [
        {
          label: 'Data Set A',
          xAxisLabel: 'Values',
          xRange: [0, 70],
          yRange: [0, 5],
          curves: [
            { type: 'line', points: [[25, 1.5], [41, 1.5], [41, 3.5], [25, 3.5], [25, 1.5]], color: '#2563eb', strokeWidth: 2, shade: 'region', shadeColor: 'rgba(37, 99, 235, 0.1)' },
            { type: 'line', points: [[34, 1.5], [34, 3.5]], color: '#1e40af', strokeWidth: 2.5 },
            { type: 'line', points: [[12, 2.5], [25, 2.5]], color: '#2563eb', strokeWidth: 2 },
            { type: 'line', points: [[12, 2], [12, 3]], color: '#2563eb', strokeWidth: 2 },
            { type: 'line', points: [[41, 2.5], [58, 2.5]], color: '#2563eb', strokeWidth: 2 },
            { type: 'line', points: [[58, 2], [58, 3]], color: '#2563eb', strokeWidth: 2 }
          ],
          textAnnotations: [
            { x: 12, y: 1.0, text: 'Min: 12', color: '#64748b', fontSize: 9 },
            { x: 25, y: 4.0, text: 'Q1: 25', color: '#1e40af', fontSize: 9 },
            { x: 34, y: 1.0, text: 'Med: 34', color: '#1e40af', fontSize: 9.5, fontWeight: '800' },
            { x: 41, y: 4.0, text: 'Q3: 41', color: '#1e40af', fontSize: 9 },
            { x: 58, y: 1.0, text: 'Max: 58', color: '#64748b', fontSize: 9 }
          ]
        },
        {
          label: 'Data Set B',
          xAxisLabel: 'Values',
          xRange: [0, 70],
          yRange: [0, 5],
          curves: [
            { type: 'line', points: [[19, 1.5], [49, 1.5], [49, 3.5], [19, 3.5], [19, 1.5]], color: '#ea580c', strokeWidth: 2, shade: 'region', shadeColor: 'rgba(234, 88, 12, 0.1)' },
            { type: 'line', points: [[34, 1.5], [34, 3.5]], color: '#c2410c', strokeWidth: 2.5 },
            { type: 'line', points: [[5, 2.5], [19, 2.5]], color: '#ea580c', strokeWidth: 2 },
            { type: 'line', points: [[5, 2], [5, 3]], color: '#ea580c', strokeWidth: 2 },
            { type: 'line', points: [[49, 2.5], [63, 2.5]], color: '#ea580c', strokeWidth: 2 },
            { type: 'line', points: [[63, 2], [63, 3]], color: '#ea580c', strokeWidth: 2 }
          ],
          textAnnotations: [
            { x: 5, y: 1.0, text: 'Min: 5', color: '#64748b', fontSize: 9 },
            { x: 19, y: 4.0, text: 'Q1: 19', color: '#c2410c', fontSize: 9 },
            { x: 34, y: 1.0, text: 'Med: 34', color: '#c2410c', fontSize: 9.5, fontWeight: '800' },
            { x: 49, y: 4.0, text: 'Q3: 49', color: '#c2410c', fontSize: 9 },
            { x: 63, y: 1.0, text: 'Max: 63', color: '#64748b', fontSize: 9 }
          ]
        }
      ]
    },
    options: [
      'Data Set A and Data Set B have different medians.',
      'Data Set A has the greater interquartile range (IQR).',
      'Data Set B has the greater interquartile range (IQR).',
      'Data Set A has the greater overall range.'
    ],
    correctIndex: 2,
    correctAnswerText: 'Data Set B has the greater interquartile range (IQR).',
    explanation: `Step-by-Step Box Plot Measures Comparison:
1. Medians:
   • Data Set A: Median = 34
   • Data Set B: Median = 34
   Both data sets have identical medians ($34 = 34$).

2. Interquartile Range (IQR = $Q_3 - Q_1$):
   • $\\text{IQR}_A = 41 - 25 = 16$
   • $\\text{IQR}_B = 49 - 19 = 30$
   Since $30 > 16$, Data Set B has a significantly greater IQR.

3. Overall Range (Max - Min):
   • $\\text{Range}_A = 58 - 12 = 46$
   • $\\text{Range}_B = 63 - 5 = 58$
   Data Set B also has the greater range ($58 > 46$).

Teacher's SAT Pro-Tip:
IQR is represented by the width of the central box ($Q_3 - Q_1$). A visibly wider box indicates a greater IQR.`,
    distractorExplanations: {
      0: 'Both sets have the exact same median of 34.',
      1: 'Data Set A has an IQR of only 16 ($41 - 25$), which is smaller than Set B’s IQR of 30.',
      3: 'Data Set A has a range of 46 ($58 - 12$), while Set B has a larger range of 58 ($63 - 5$).'
    }
  },
  {
    id: 'sat-ch10-q85',
    number: 85,
    exerciseNumber: 3,
    exerciseTitle: 'Exercise 3: Hardest Module 2 Visual & Conceptual Comparisons (Questions 81–100)',
    question: 'The box plots below summarize Data Set A and Data Set B.\n\nWhich statement correctly compares the two data sets?',
    diagram: {
      title: 'Quartile Spread Comparison',
      caption: 'Side-by-side boxplots showing quartiles, medians, and whisker endpoints.',
      subDiagrams: [
        {
          label: 'Data Set A',
          xAxisLabel: 'Values',
          xRange: [5, 70],
          yRange: [0, 5],
          curves: [
            { type: 'line', points: [[20, 1.5], [45, 1.5], [45, 3.5], [20, 3.5], [20, 1.5]], color: '#2563eb', strokeWidth: 2, shade: 'region', shadeColor: 'rgba(37, 99, 235, 0.1)' },
            { type: 'line', points: [[35, 1.5], [35, 3.5]], color: '#1e40af', strokeWidth: 2.5 },
            { type: 'line', points: [[10, 2.5], [20, 2.5]], color: '#2563eb', strokeWidth: 2 },
            { type: 'line', points: [[10, 2], [10, 3]], color: '#2563eb', strokeWidth: 2 },
            { type: 'line', points: [[45, 2.5], [60, 2.5]], color: '#2563eb', strokeWidth: 2 },
            { type: 'line', points: [[60, 2], [60, 3]], color: '#2563eb', strokeWidth: 2 }
          ],
          textAnnotations: [
            { x: 10, y: 1.0, text: 'Min: 10', color: '#64748b', fontSize: 9 },
            { x: 20, y: 4.0, text: 'Q1: 20', color: '#1e40af', fontSize: 9 },
            { x: 35, y: 1.0, text: 'Med: 35', color: '#1e40af', fontSize: 9.5, fontWeight: '800' },
            { x: 45, y: 4.0, text: 'Q3: 45', color: '#1e40af', fontSize: 9 },
            { x: 60, y: 1.0, text: 'Max: 60', color: '#64748b', fontSize: 9 }
          ]
        },
        {
          label: 'Data Set B',
          xAxisLabel: 'Values',
          xRange: [5, 70],
          yRange: [0, 5],
          curves: [
            { type: 'line', points: [[25, 1.5], [55, 1.5], [55, 3.5], [25, 3.5], [25, 1.5]], color: '#ea580c', strokeWidth: 2, shade: 'region', shadeColor: 'rgba(234, 88, 12, 0.1)' },
            { type: 'line', points: [[35, 1.5], [35, 3.5]], color: '#c2410c', strokeWidth: 2.5 },
            { type: 'line', points: [[15, 2.5], [25, 2.5]], color: '#ea580c', strokeWidth: 2 },
            { type: 'line', points: [[15, 2], [15, 3]], color: '#ea580c', strokeWidth: 2 },
            { type: 'line', points: [[55, 2.5], [65, 2.5]], color: '#ea580c', strokeWidth: 2 },
            { type: 'line', points: [[65, 2], [65, 3]], color: '#ea580c', strokeWidth: 2 }
          ],
          textAnnotations: [
            { x: 15, y: 1.0, text: 'Min: 15', color: '#64748b', fontSize: 9 },
            { x: 25, y: 4.0, text: 'Q1: 25', color: '#c2410c', fontSize: 9 },
            { x: 35, y: 1.0, text: 'Med: 35', color: '#c2410c', fontSize: 9.5, fontWeight: '800' },
            { x: 55, y: 4.0, text: 'Q3: 55', color: '#c2410c', fontSize: 9 },
            { x: 65, y: 1.0, text: 'Max: 65', color: '#64748b', fontSize: 9 }
          ]
        }
      ]
    },
    options: [
      'Both data sets have the same median, but Data Set B has the greater interquartile range (IQR).',
      'Both data sets have the same median and the same interquartile range (IQR).',
      'Data Set A has the greater median.',
      'Data Set B has the greater median.'
    ],
    correctIndex: 0,
    correctAnswerText: 'Both data sets have the same median, but Data Set B has the greater interquartile range (IQR).',
    explanation: `Step-by-Step Median and IQR Evaluation:
1. Compare Medians:
   • Data Set A Median = 35
   • Data Set B Median = 35
   Both distributions have identical median values ($35 = 35$).

2. Compute Interquartile Ranges (IQR = $Q_3 - Q_1$):
   • $\\text{IQR}_A = 45 - 20 = 25$
   • $\\text{IQR}_B = 55 - 25 = 30$

3. Compare IQRs:
   $$30 > 25$$
   Data Set B has a greater IQR ($30$ vs. $25$).

Teacher's SAT Pro-Tip:
Always subtract $Q_3 - Q_1$ explicitly to measure the width of the central box, which represents the middle 50% of the distribution.`,
    distractorExplanations: {
      1: 'Although both have the same median (35), their IQRs are different ($25$ for Set A vs. $30$ for Set B).',
      2: 'Both medians are exactly 35; neither data set has a greater median.',
      3: 'Both medians are equal to 35.'
    }
  },
  {
    id: 'sat-ch10-q86',
    number: 86,
    exerciseNumber: 3,
    exerciseTitle: 'Exercise 3: Hardest Module 2 Visual & Conceptual Comparisons (Questions 81–100)',
    question: 'A value is classified as an upper outlier if it is strictly greater than $Q_3 + 1.5(\\text{IQR})$.\n\nThe box plots below display the first and third quartiles for two data sets.\n\nWhich statement is correct?',
    diagram: {
      title: 'Quartile Range & Outlier Boundaries',
      caption: 'Box plots for the two data sets showing quartile values and outlier fences.',
      subDiagrams: [
        {
          label: 'Data Set A (Q1 = 14, Q3 = 30)',
          xAxisLabel: 'Values',
          xRange: [0, 75],
          yRange: [0, 5],
          curves: [
            { type: 'line', points: [[14, 1.5], [30, 1.5], [30, 3.5], [14, 3.5], [14, 1.5]], color: '#2563eb', strokeWidth: 2, shade: 'region', shadeColor: 'rgba(37, 99, 235, 0.1)' },
            { type: 'line', points: [[54, 0.8], [54, 4.2]], color: '#2563eb', strokeWidth: 2, style: 'dashed' }
          ],
          textAnnotations: [
            { x: 14, y: 4.2, text: 'Q1: 14', color: '#1e40af', fontSize: 9.5, fontWeight: '800' },
            { x: 30, y: 4.2, text: 'Q3: 30', color: '#1e40af', fontSize: 9.5, fontWeight: '800' },
            { x: 54, y: 1.0, text: 'Fence: 54', color: '#1e40af', fontSize: 9, fontWeight: '800' }
          ]
        },
        {
          label: 'Data Set B (Q1 = 20, Q3 = 36)',
          xAxisLabel: 'Values',
          xRange: [0, 75],
          yRange: [0, 5],
          curves: [
            { type: 'line', points: [[20, 1.5], [36, 1.5], [36, 3.5], [20, 3.5], [20, 1.5]], color: '#ea580c', strokeWidth: 2, shade: 'region', shadeColor: 'rgba(234, 88, 12, 0.1)' },
            { type: 'line', points: [[60, 0.8], [60, 4.2]], color: '#ea580c', strokeWidth: 2, style: 'dashed' }
          ],
          textAnnotations: [
            { x: 20, y: 4.2, text: 'Q1: 20', color: '#c2410c', fontSize: 9.5, fontWeight: '800' },
            { x: 36, y: 4.2, text: 'Q3: 36', color: '#c2410c', fontSize: 9.5, fontWeight: '800' },
            { x: 60, y: 1.0, text: 'Fence: 60', color: '#c2410c', fontSize: 9, fontWeight: '800' }
          ]
        }
      ]
    },
    options: [
      'The upper outlier boundary for Data Set B is 60.',
      'The upper outlier boundary for Data Set A is 60.',
      'Both data sets have the same upper outlier boundary because their IQRs are equal.',
      'The upper outlier boundary for Data Set B is 45.'
    ],
    correctIndex: 0,
    correctAnswerText: 'The upper outlier boundary for Data Set B is 60.',
    explanation: `Step-by-Step Outlier Threshold Calculation:
1. Data Set A:
   • $\\text{IQR}_A = Q_3 - Q_1 = 30 - 14 = 16$
   • $\\text{Upper Fence}_A = Q_3 + 1.5(\\text{IQR}) = 30 + 1.5(16) = 30 + 24 = 54$

2. Data Set B:
   • $\\text{IQR}_B = Q_3 - Q_1 = 36 - 20 = 16$
   • $\\text{Upper Fence}_B = Q_3 + 1.5(\\text{IQR}) = 36 + 1.5(16) = 36 + 24 = 60$

3. Conclusion:
   The upper outlier boundary for Data Set B is 60.

Teacher's SAT Pro-Tip:
Even though both data sets have the same IQR ($16$), their outlier boundaries differ because their third quartiles ($Q_3$) differ ($30 + 24 = 54$ vs. $36 + 24 = 60$).`,
    distractorExplanations: {
      1: 'The upper boundary for Data Set A is $30 + 1.5(16) = 54$, not 60.',
      2: 'Even though their IQRs are both 16, their $Q_3$ baselines are different (30 vs 36), resulting in different boundaries (54 vs 60).',
      3: 'The upper outlier boundary for Data Set B is $36 + 24 = 60$, not 45.'
    }
  },
  {
    id: 'sat-ch10-q87',
    number: 87,
    exerciseNumber: 3,
    exerciseTitle: 'Exercise 3: Hardest Module 2 Visual & Conceptual Comparisons (Questions 81–100)',
    question: 'The box plots below summarize the distributions for Data Set A and Data Set B.\n\nWhich statement is correct?',
    diagram: {
      title: 'Five-Number Summary Comparison',
      caption: 'Side-by-side boxplots comparing Data Set A and Data Set B.',
      subDiagrams: [
        {
          label: 'Data Set A',
          xAxisLabel: 'Values',
          xRange: [0, 70],
          yRange: [0, 5],
          curves: [
            { type: 'line', points: [[18, 1.5], [46, 1.5], [46, 3.5], [18, 3.5], [18, 1.5]], color: '#2563eb', strokeWidth: 2, shade: 'region', shadeColor: 'rgba(37, 99, 235, 0.1)' },
            { type: 'line', points: [[30, 1.5], [30, 3.5]], color: '#1e40af', strokeWidth: 2.5 },
            { type: 'line', points: [[10, 2.5], [18, 2.5]], color: '#2563eb', strokeWidth: 2 },
            { type: 'line', points: [[10, 2], [10, 3]], color: '#2563eb', strokeWidth: 2 },
            { type: 'line', points: [[46, 2.5], [54, 2.5]], color: '#2563eb', strokeWidth: 2 },
            { type: 'line', points: [[54, 2], [54, 3]], color: '#2563eb', strokeWidth: 2 }
          ],
          textAnnotations: [
            { x: 10, y: 1.0, text: 'Min: 10', color: '#64748b', fontSize: 9 },
            { x: 18, y: 4.0, text: 'Q1: 18', color: '#1e40af', fontSize: 9 },
            { x: 30, y: 1.0, text: 'Med: 30', color: '#1e40af', fontSize: 9.5, fontWeight: '800' },
            { x: 46, y: 4.0, text: 'Q3: 46', color: '#1e40af', fontSize: 9 },
            { x: 54, y: 1.0, text: 'Max: 54', color: '#64748b', fontSize: 9 }
          ]
        },
        {
          label: 'Data Set B',
          xAxisLabel: 'Values',
          xRange: [0, 70],
          yRange: [0, 5],
          curves: [
            { type: 'line', points: [[22, 1.5], [40, 1.5], [40, 3.5], [22, 3.5], [22, 1.5]], color: '#ea580c', strokeWidth: 2, shade: 'region', shadeColor: 'rgba(234, 88, 12, 0.1)' },
            { type: 'line', points: [[30, 1.5], [30, 3.5]], color: '#c2410c', strokeWidth: 2.5 },
            { type: 'line', points: [[4, 2.5], [22, 2.5]], color: '#ea580c', strokeWidth: 2 },
            { type: 'line', points: [[4, 2], [4, 3]], color: '#ea580c', strokeWidth: 2 },
            { type: 'line', points: [[40, 2.5], [62, 2.5]], color: '#ea580c', strokeWidth: 2 },
            { type: 'line', points: [[62, 2], [62, 3]], color: '#ea580c', strokeWidth: 2 }
          ],
          textAnnotations: [
            { x: 4, y: 1.0, text: 'Min: 4', color: '#64748b', fontSize: 9 },
            { x: 22, y: 4.0, text: 'Q1: 22', color: '#c2410c', fontSize: 9 },
            { x: 30, y: 1.0, text: 'Med: 30', color: '#c2410c', fontSize: 9.5, fontWeight: '800' },
            { x: 40, y: 4.0, text: 'Q3: 40', color: '#c2410c', fontSize: 9 },
            { x: 62, y: 1.0, text: 'Max: 62', color: '#64748b', fontSize: 9 }
          ]
        }
      ]
    },
    options: [
      'Data Set A has a greater interquartile range (IQR), but Data Set B has a greater overall range.',
      'Data Set B has both a greater interquartile range (IQR) and a greater overall range.',
      'Data Set A has both a greater interquartile range (IQR) and a greater overall range.',
      'Both data sets have the same interquartile range (IQR) and the same overall range.'
    ],
    correctIndex: 0,
    correctAnswerText: 'Data Set A has a greater interquartile range (IQR), but Data Set B has a greater overall range.',
    explanation: `Step-by-Step Range vs. IQR Calculation:
1. Calculate Overall Range ($\\text{Max} - \\text{Min}$):
   • $\\text{Range}_A = 54 - 10 = 44$
   • $\\text{Range}_B = 62 - 4 = 58$
   $\\text{Range}_B > \\text{Range}_A$ ($58 > 44$).

2. Calculate Interquartile Range (IQR = $Q_3 - Q_1$):
   • $\\text{IQR}_A = 46 - 18 = 28$
   • $\\text{IQR}_B = 40 - 22 = 18$
   $\\text{IQR}_A > \\text{IQR}_B$ ($28 > 18$).

3. Conclusion:
   Data Set A has the greater IQR ($28$ vs. $18$), but Data Set B has the greater overall range ($58$ vs. $44$).

Teacher's SAT Pro-Tip:
Do not assume that the data set with the larger total range also has the larger middle-50% IQR. The middle box width (IQR) and whisker span (Range) measure different aspects of spread.`,
    distractorExplanations: {
      1: 'Data Set B has a smaller IQR ($18$ vs. $28$), not greater.',
      2: 'Data Set A has a smaller overall range ($44$ vs. $58$), not greater.',
      3: 'The ranges are 44 and 58, and the IQRs are 28 and 18; they are neither equal nor interchangeable.'
    }
  },
  {
    id: 'sat-ch10-q88',
    number: 88,
    exerciseNumber: 3,
    exerciseTitle: 'Exercise 3: Hardest Module 2 Visual & Conceptual Comparisons (Questions 81–100)',
    question: `A histogram of a data set is strongly right-skewed.

Which relationship between the mean and median is most reasonable?`,
    diagram: {
      title: 'Right-Skewed Distribution Shape',
      caption: 'Distribution profile with a prominent right tail.',
      xAxisLabel: 'Data Values',
      yAxisLabel: 'Relative Density',
      xRange: [0, 100],
      yRange: [0, 30],
      curves: [
        { type: 'line', points: [[10, 0], [10, 8], [20, 26], [30, 22], [40, 14], [50, 8], [60, 4], [70, 2], [80, 1], [90, 0]], color: '#2563eb', strokeWidth: 2.5, shade: 'below', shadeColor: 'rgba(37, 99, 235, 0.2)' }
      ],
      textAnnotations: [
        { x: 70, y: 8, text: 'Long Right Tail', color: '#1e40af', fontSize: 9.5, fontWeight: '800' }
      ]
    },
    options: [
      'The mean is likely less than the median.',
      'The mean is likely greater than the median.',
      'The mean must be equal to the median.',
      'The median must be zero.'
    ],
    correctIndex: 1,
    correctAnswerText: 'The mean is likely greater than the median.',
    explanation: `Step-by-Step Skewness vs. Center Rule:
1. In a right-skewed (positively skewed) distribution, the tail stretches out to the right toward unusually large positive values.
2. The median is resistant (it measures the 50th percentile rank and is not affected by the extreme values in the tail).
3. The mean is non-resistant (every large value in the right tail adds heavily to the total sum $\\sum x$), pulling the arithmetic mean rightward.
4. Therefore, for right-skewed data:
   $$\\text{Mean} > \\text{Median}$$

Teacher's SAT Pro-Tip:
"The mean follows the tail."
• Right-skewed: Mean > Median
• Left-skewed: Mean < Median
• Symmetric: Mean ≈ Median`,
    distractorExplanations: {
      0: 'Mean < Median is the rule for left-skewed distributions.',
      2: 'Mean = Median occurs in perfectly symmetric distributions.',
      3: 'The median is a central value in the data, which is positive here and definitely not zero.'
    }
  },
  {
    id: 'sat-ch10-q89',
    number: 89,
    exerciseNumber: 3,
    exerciseTitle: 'Exercise 3: Hardest Module 2 Visual & Conceptual Comparisons (Questions 81–100)',
    question: `Scatterplot A has points clustered tightly around a line that rises from left to right.

Scatterplot B has points that also rise from left to right, but they are much more widely scattered around the trendline.

Which statement is correct?`,
    diagram: {
      title: 'Comparing Scatterplot Association Strengths',
      caption: 'Side-by-side scatterplots showing bivariate data distributions.',
      subDiagrams: [
        {
          label: 'Scatterplot A',
          xAxisLabel: 'x',
          yAxisLabel: 'y',
          xRange: [0, 10],
          yRange: [0, 30],
          curves: [
            {
              type: 'points',
              points: [[1, 5], [2, 7.5], [3, 10.2], [4, 13], [5, 15.8], [6, 18.5], [7, 21.2], [8, 24], [9, 26.5]],
              color: '#2563eb'
            },
            {
              type: 'line',
              points: [[0.5, 3.5], [9.5, 27.5]],
              color: '#2563eb',
              strokeWidth: 2,
              style: 'dashed'
            }
          ]
        },
        {
          label: 'Scatterplot B',
          xAxisLabel: 'x',
          yAxisLabel: 'y',
          xRange: [0, 10],
          yRange: [0, 30],
          curves: [
            {
              type: 'points',
              points: [[1, 3], [1.5, 9], [2.5, 5], [3.5, 14], [4, 8], [5, 19], [6, 12], [7, 24], [7.5, 15], [8.5, 26], [9, 20]],
              color: '#ea580c'
            },
            {
              type: 'line',
              points: [[0.5, 4], [9.5, 25]],
              color: '#ea580c',
              strokeWidth: 2,
              style: 'dashed'
            }
          ]
        }
      ]
    },
    options: [
      'Scatterplot A shows a stronger positive linear association than Scatterplot B.',
      'Scatterplot B shows a stronger positive linear association than Scatterplot A.',
      'Scatterplot A shows a negative association.',
      'The two scatterplots necessarily have identical correlation coefficients.'
    ],
    correctIndex: 0,
    correctAnswerText: 'Scatterplot A shows a stronger positive linear association than Scatterplot B.',
    explanation: `Step-by-Step Scatterplot Strength Analysis:
1. Direction:
   • Both scatterplots rise from left to right, indicating positive linear association ($r > 0$).

2. Strength:
   • The strength of a linear association is measured by how tightly the data points cluster along the line of best fit.
   • In Scatterplot A, points lie very close to the line, indicating a high positive correlation coefficient ($r \\approx 0.98$).
   • In Scatterplot B, points are widely dispersed, indicating a moderate/weak positive correlation ($r \\approx 0.60$).

3. Conclusion:
   Scatterplot A demonstrates a significantly stronger positive linear relationship.

Teacher's SAT Pro-Tip:
Correlation strength is determined by point tightness around the trendline, not by the steepness of the slope.`,
    distractorExplanations: {
      1: 'Scatterplot B has greater dispersion/residual scatter, meaning its linear correlation is weaker, not stronger.',
      2: 'Both graphs slope upward from left to right; both are positive associations.',
      3: 'The tighter cluster in Scatterplot A yields a higher correlation coefficient $r$ than the loose cluster in B.'
    }
  },
  {
    id: 'sat-ch10-q90',
    number: 90,
    exerciseNumber: 3,
    exerciseTitle: 'Exercise 3: Hardest Module 2 Visual & Conceptual Comparisons (Questions 81–100)',
    question: `A scatterplot contains 25 points that form a strong positive linear pattern.

One additional point is located far below the pattern at a very large x-value.

Which effect could this point have on the line of best fit?`,
    diagram: {
      title: 'High-Leverage Outlier in Scatterplot',
      caption: 'Scatterplot illustrating a linear pattern with an influential point at large x.',
      xAxisLabel: 'x',
      yAxisLabel: 'y',
      xRange: [0, 20],
      yRange: [0, 50],
      xStep: 5,
      yStep: 10,
      curves: [
        {
          type: 'points',
          points: [
            [2, 8], [3, 11], [4, 13], [5, 17], [6, 19], [7, 22], [8, 26], [9, 28], [10, 31], [11, 34], [12, 37]
          ],
          color: '#2563eb'
        },
        {
          type: 'points',
          points: [[18, 10]],
          color: '#dc2626'
        },
        {
          type: 'line',
          points: [[1, 5], [14, 43]],
          color: '#2563eb',
          strokeWidth: 2,
          style: 'dashed'
        }
      ],
      textAnnotations: [
        { x: 18, y: 6.5, text: 'Influential Point (18, 10)', color: '#b91c1c', fontSize: 9.5, fontWeight: '800' }
      ]
    },
    options: [
      'It could pull the line downward at large x-values.',
      'It must make the slope exactly zero.',
      'It cannot affect the fitted line.',
      'It must change the association from positive to negative.'
    ],
    correctIndex: 0,
    correctAnswerText: 'It could pull the line downward at large x-values.',
    explanation: `Step-by-Step Influential Outlier Analysis:
1. Points that have unusually extreme $x$-values (far to the right) have high statistical leverage.
2. Because the least-squares regression line minimizes the sum of squared vertical residuals $\\sum (y - \\hat{y})^2$, a point located far below the pattern at a high $x$-value exerts a powerful downward torque on the line.
3. This pulls the right side of the fitted line downward, decreasing the slope of the line of best fit.

Teacher's SAT Pro-Tip:
Think of the regression line as a seesaw. Outliers at the far right or far left ends act with long leverage arms, tilting the line toward themselves.`,
    distractorExplanations: {
      1: 'While it lowers the slope, a single outlier among 25 strong points will rarely make the slope exactly zero.',
      2: 'Regression lines are sensitive to outliers; extreme points exert noticeable leverage on the fitted slope and intercept.',
      3: 'The overall trend of the remaining 25 points is strongly positive; one point weakens the slope but does not guarantee an inversion to negative.'
    }
  },
  {
    id: 'sat-ch10-q91',
    number: 91,
    exerciseNumber: 3,
    exerciseTitle: 'Exercise 3: Hardest Module 2 Visual & Conceptual Comparisons (Questions 81–100)',
    question: `Two linear regression models predict the value of $y$ based on $x$:

• Model A: $y = 3.2x + 18$
• Model B: $y = 2.4x + 31$

For which value of $x$ do both models predict the exact same value of $y$?`,
    diagram: {
      title: 'Intersecting Linear Models',
      caption: 'Graphs of the two linear regression equations intersecting at their point of equivalence.',
      xAxisLabel: 'x',
      yAxisLabel: 'y',
      xRange: [0, 25],
      yRange: [0, 90],
      xStep: 5,
      yStep: 15,
      curves: [
        { type: 'line', points: [[0, 18], [22, 88.4]], color: '#2563eb', strokeWidth: 2, label: 'Model A: y = 3.2x + 18', labelPosition: { x: 8, y: 50 } },
        { type: 'line', points: [[0, 31], [22, 83.8]], color: '#ea580c', strokeWidth: 2, label: 'Model B: y = 2.4x + 31', labelPosition: { x: 17, y: 68 } },
        { type: 'points', points: [[16.25, 70]], color: '#7c3aed' }
      ],
      textAnnotations: [
        { x: 16.25, y: 74, text: 'Intersection (16.25, 70)', color: '#6d28d9', fontSize: 9.5, fontWeight: '800' }
      ]
    },
    options: ['10', '12.5', '16.25', '20'],
    correctIndex: 2,
    correctAnswerText: '16.25',
    explanation: `Step-by-Step Equating Linear Predictions:
1. Set the two model expressions equal to find the point of intersection:
   $$3.2x + 18 = 2.4x + 31$$

2. Subtract $2.4x$ from both sides:
   $$0.8x + 18 = 31$$

3. Subtract 18 from both sides:
   $$0.8x = 13$$

4. Solve for $x$:
   $$x = \\frac{13}{0.8} = \\frac{130}{8} = 16.25$$

5. Verification:
   • Model A at $x = 16.25$: $y = 3.2(16.25) + 18 = 52 + 18 = 70$
   • Model B at $x = 16.25$: $y = 2.4(16.25) + 31 = 39 + 31 = 70$
   Both models predict $y = 70$ when $x = 16.25$.

Teacher's SAT Pro-Tip:
"Predict the same value" means $y_A = y_B$. Set equations equal and solve for the independent variable $x$.`,
    distractorExplanations: {
      0: 'At $x = 10$, Model A predicts $y = 3.2(10) + 18 = 50$, whereas Model B predicts $y = 2.4(10) + 31 = 55$.',
      1: 'At $x = 12.5$, Model A predicts $y = 3.2(12.5) + 18 = 58$, whereas Model B predicts $y = 2.4(12.5) + 31 = 61$.',
      3: 'At $x = 20$, Model A predicts $y = 3.2(20) + 18 = 82$, whereas Model B predicts $y = 2.4(20) + 31 = 79$.'
    }
  },
  {
    id: 'sat-ch10-q92',
    number: 92,
    exerciseNumber: 3,
    exerciseTitle: 'Exercise 3: Hardest Module 2 Visual & Conceptual Comparisons (Questions 81–100)',
    question: `A linear regression model predicts values for two observations:

Observation A:
• Actual value = 72
• Predicted value = 68

Observation B:
• Actual value = 91
• Predicted value = 96

Which statement is correct?`,
    diagram: {
      title: 'Regression Residual Coordinates',
      caption: 'Plot of actual observed points vs regression line predictions.',
      xAxisLabel: 'x',
      yAxisLabel: 'y',
      xRange: [0, 10],
      yRange: [60, 105],
      xStep: 2,
      yStep: 10,
      curves: [
        { type: 'line', points: [[1, 62], [9, 102]], color: '#2563eb', strokeWidth: 2, label: 'Fitted Line', labelPosition: { x: 4, y: 78 } },
        { type: 'line', points: [[2.5, 68], [2.5, 72]], color: '#16a34a', strokeWidth: 2.5, style: 'dashed' },
        { type: 'points', points: [[2.5, 72]], color: '#16a34a' },
        { type: 'points', points: [[2.5, 68]], color: '#2563eb' },
        { type: 'line', points: [[7.5, 96], [7.5, 91]], color: '#dc2626', strokeWidth: 2.5, style: 'dashed' },
        { type: 'points', points: [[7.5, 91]], color: '#dc2626' },
        { type: 'points', points: [[7.5, 96]], color: '#2563eb' }
      ],
      textAnnotations: [
        { x: 2.5, y: 74, text: 'Actual (72)', color: '#15803d', fontSize: 9 },
        { x: 2.5, y: 65.5, text: 'Pred (68)', color: '#1e40af', fontSize: 9 },
        { x: 7.5, y: 98.5, text: 'Pred (96)', color: '#1e40af', fontSize: 9 },
        { x: 7.5, y: 88.5, text: 'Actual (91)', color: '#b91c1c', fontSize: 9 }
      ]
    },
    options: [
      'Observation A has residual 4 and Observation B has residual 5.',
      'Observation A has residual 4 and Observation B has residual -5.',
      'Observation A has residual -4 and Observation B has residual 5.',
      'Both residuals are positive.'
    ],
    correctIndex: 1,
    correctAnswerText: 'Observation A has residual 4 and Observation B has residual -5.',
    explanation: `Step-by-Step Residual Formula:
1. The definition of a residual is:
   $$\\text{Residual} = \\text{Actual } y - \\text{Predicted } \\hat{y}$$

2. Compute the residual for Observation A:
   $$\\text{Residual}_A = 72 - 68 = +4$$
   (Positive residual: actual point lies above the line).

3. Compute the residual for Observation B:
   $$\\text{Residual}_B = 91 - 96 = -5$$
   (Negative residual: actual point lies below the line).

Teacher's SAT Pro-Tip:
Remember the acronym **AP**: **A**ctual minus **P**redicted. Never do Predicted minus Actual!`,
    distractorExplanations: {
      0: 'Observation B has an actual value smaller than predicted ($91 - 96 = -5$), so its residual is negative, not positive 5.',
      2: 'Observation A has a positive residual ($72 - 68 = +4$), not -4.',
      3: 'Observation B is below the regression line, resulting in a negative residual of -5.'
    }
  },
  {
    id: 'sat-ch10-q93',
    number: 93,
    exerciseNumber: 3,
    exerciseTitle: 'Exercise 3: Hardest Module 2 Visual & Conceptual Comparisons (Questions 81–100)',
    question: `Two distributions have approximately the same median.

• Distribution A has a box plot with IQR = 8.
• Distribution B has a box plot with IQR = 19.

Their histograms also show that Distribution B extends over a wider range of values.

Which conclusion is best supported?`,
    diagram: {
      title: 'Variability Comparison',
      caption: 'Side-by-side boxplot distributions showing differences in spread.',
      subDiagrams: [
        {
          label: 'Distribution A (IQR = 8)',
          xAxisLabel: 'Values',
          xRange: [20, 80],
          yRange: [0, 5],
          curves: [
            { type: 'line', points: [[46, 1.5], [54, 1.5], [54, 3.5], [46, 3.5], [46, 1.5]], color: '#2563eb', strokeWidth: 2, shade: 'region', shadeColor: 'rgba(37, 99, 235, 0.1)' },
            { type: 'line', points: [[50, 1.5], [50, 3.5]], color: '#1e40af', strokeWidth: 2.5 },
            { type: 'line', points: [[38, 2.5], [46, 2.5]], color: '#2563eb', strokeWidth: 2 },
            { type: 'line', points: [[38, 2], [38, 3]], color: '#2563eb', strokeWidth: 2 },
            { type: 'line', points: [[54, 2.5], [62, 2.5]], color: '#2563eb', strokeWidth: 2 },
            { type: 'line', points: [[62, 2], [62, 3]], color: '#2563eb', strokeWidth: 2 }
          ],
          textAnnotations: [
            { x: 50, y: 4.2, text: 'Median ≈ 50', color: '#1e40af', fontSize: 9.5, fontWeight: '800' }
          ]
        },
        {
          label: 'Distribution B (IQR = 19)',
          xAxisLabel: 'Values',
          xRange: [20, 80],
          yRange: [0, 5],
          curves: [
            { type: 'line', points: [[40.5, 1.5], [59.5, 1.5], [59.5, 3.5], [40.5, 3.5], [40.5, 1.5]], color: '#ea580c', strokeWidth: 2, shade: 'region', shadeColor: 'rgba(234, 88, 12, 0.1)' },
            { type: 'line', points: [[50, 1.5], [50, 3.5]], color: '#c2410c', strokeWidth: 2.5 },
            { type: 'line', points: [[24, 2.5], [40.5, 2.5]], color: '#ea580c', strokeWidth: 2 },
            { type: 'line', points: [[24, 2], [24, 3]], color: '#ea580c', strokeWidth: 2 },
            { type: 'line', points: [[59.5, 2.5], [76, 2.5]], color: '#ea580c', strokeWidth: 2 },
            { type: 'line', points: [[76, 2], [76, 3]], color: '#ea580c', strokeWidth: 2 }
          ],
          textAnnotations: [
            { x: 50, y: 4.2, text: 'Median ≈ 50', color: '#c2410c', fontSize: 9.5, fontWeight: '800' }
          ]
        }
      ]
    },
    options: [
      'Distribution A has greater variability.',
      'Distribution B has greater variability.',
      'Their means must be identical.',
      'Their ranges must be identical.'
    ],
    correctIndex: 1,
    correctAnswerText: 'Distribution B has greater variability.',
    explanation: `Step-by-Step Variability Analysis:
1. Variability (spread) in statistics is measured by the width of the distribution, including:
   • Interquartile Range (IQR): $\\text{IQR}_B = 19 > \\text{IQR}_A = 8$.
   • Overall Range and Standard Deviation: Distribution B spans a wider interval of values.

2. Both the central middle 50% (IQR) and the overall boundary span demonstrate that Distribution B is substantially more spread out.
3. Therefore, Distribution B has greater variability.

Teacher's SAT Pro-Tip:
"Variability" and "spread" are synonymous on the SAT. Larger IQR + wider histogram range = greater variability.`,
    distractorExplanations: {
      0: 'Distribution A is more concentrated around its median with a much smaller IQR of 8.',
      2: 'Equal medians do not imply equal means, especially if the distributions have different degrees of skewness.',
      3: 'The problem states that Distribution B extends over a wider range of values, so their ranges cannot be identical.'
    }
  },
  {
    id: 'sat-ch10-q94',
    number: 94,
    exerciseNumber: 3,
    exerciseTitle: 'Exercise 3: Hardest Module 2 Visual & Conceptual Comparisons (Questions 81–100)',
    question: `A high school has 4,800 students.

Researchers randomly select 240 students from the school roster and ask each student how many hours they study per week.

Which statement is best supported?`,
    options: [
      'The 240 students represent the entire world\'s student population.',
      'The sample can potentially be used to estimate study habits for students at that school.',
      'Because the sample is random, every student must have the same number of study hours.',
      'The sample automatically proves that study time causes higher grades.'
    ],
    correctIndex: 1,
    correctAnswerText: 'The sample can potentially be used to estimate study habits for students at that school.',
    explanation: `Step-by-Step Sampling Scope & Generalizability:
1. Target Population: The sampling frame was selected strictly from the 4,800 students of that specific school.
2. Random Sampling: Because participants were chosen via simple random sampling from the school, results generalize reliably to the population of that school.
3. Limitations:
   • The sample cannot generalize beyond the school (e.g., to all students in the district or world).
   • Observational survey data shows correlation, not causation (it does not prove study time causes higher grades).

Teacher's SAT Pro-Tip:
Random Sampling $\\rightarrow$ Generalize to the population sampled from.
Random Assignment $\\rightarrow$ Establish Cause and Effect.`,
    distractorExplanations: {
      0: 'A sample from one specific school cannot generalize to all students worldwide.',
      2: 'Random sampling captures natural individual variability; students will have different study hours.',
      3: 'Surveys are observational and lack randomized treatment assignment, so they cannot prove causation.'
    }
  },
  {
    id: 'sat-ch10-q95',
    number: 95,
    exerciseNumber: 3,
    exerciseTitle: 'Exercise 3: Hardest Module 2 Visual & Conceptual Comparisons (Questions 81–100)',
    question: `Two independent surveys report the following estimates for voter support:

• Survey A reports: 61% ± 2%
• Survey B reports: 58% ± 5%

Which statement is correct?`,
    diagram: {
      title: 'Polling Margins of Error',
      caption: 'Visual representation of survey point estimates and confidence intervals.',
      subDiagrams: [
        {
          label: 'Survey A (61% ± 2%)',
          xAxisLabel: 'Percentage (%)',
          xRange: [50, 70],
          yRange: [0, 4],
          curves: [
            { type: 'line', points: [[59, 2], [63, 2]], color: '#2563eb', strokeWidth: 4 },
            { type: 'line', points: [[59, 1.4], [59, 2.6]], color: '#2563eb', strokeWidth: 2 },
            { type: 'line', points: [[63, 1.4], [63, 2.6]], color: '#2563eb', strokeWidth: 2 },
            { type: 'points', points: [[61, 2]], color: '#1e40af' }
          ],
          textAnnotations: [
            { x: 61, y: 3.2, text: 'MoE: ±2%', color: '#1e40af', fontSize: 9.5, fontWeight: '800' }
          ]
        },
        {
          label: 'Survey B (58% ± 5%)',
          xAxisLabel: 'Percentage (%)',
          xRange: [50, 70],
          yRange: [0, 4],
          curves: [
            { type: 'line', points: [[53, 2], [63, 2]], color: '#ea580c', strokeWidth: 4 },
            { type: 'line', points: [[53, 1.4], [53, 2.6]], color: '#ea580c', strokeWidth: 2 },
            { type: 'line', points: [[63, 1.4], [63, 2.6]], color: '#ea580c', strokeWidth: 2 },
            { type: 'points', points: [[58, 2]], color: '#c2410c' }
          ],
          textAnnotations: [
            { x: 58, y: 3.2, text: 'MoE: ±5%', color: '#c2410c', fontSize: 9.5, fontWeight: '800' }
          ]
        }
      ]
    },
    options: [
      'Survey A has the larger margin of error.',
      'Survey B has the larger margin of error.',
      'Both surveys have the same margin of error.',
      'The margin of error cannot be determined from the given information.'
    ],
    correctIndex: 1,
    correctAnswerText: 'Survey B has the larger margin of error.',
    explanation: `Step-by-Step Margin of Error Identification:
1. In the standard statistical format $\\text{Estimate} \\pm \\text{Margin of Error}$:
   • Survey A: Margin of error $= 2$ percentage points ($2\\%$).
   • Survey B: Margin of error $= 5$ percentage points ($5\\%$).

2. Compare margins of error:
   $$5\\% > 2\\%$$
   Survey B has the larger margin of error (and thus a wider, less precise confidence interval).

Teacher's SAT Pro-Tip:
The value following the $\\pm$ symbol is the Margin of Error. A larger number after $\\pm$ means a larger margin of error.`,
    distractorExplanations: {
      0: 'Survey A has a margin of error of 2 percentage points, which is smaller than 5 percentage points.',
      2: '2 percentage points is strictly less than 5 percentage points.',
      3: 'The margin of error is explicitly stated in each survey report ($2\\%$ and $5\\%$).'
    }
  },
  {
    id: 'sat-ch10-q96',
    number: 96,
    exerciseNumber: 3,
    exerciseTitle: 'Exercise 3: Hardest Module 2 Visual & Conceptual Comparisons (Questions 81–100)',
    question: `Two election polls produce confidence intervals for a candidate's support:

• Poll A: 52% ± 3%
• Poll B: 55% ± 2%

Which interval is narrower?`,
    diagram: {
      title: 'Confidence Interval Width Comparison',
      caption: 'Comparative number lines illustrating the widths of Poll A and Poll B intervals.',
      subDiagrams: [
        {
          label: 'Poll A (52% ± 3%)',
          xAxisLabel: 'Percentage (%)',
          xRange: [48, 60],
          yRange: [0, 4],
          curves: [
            { type: 'line', points: [[49, 2], [55, 2]], color: '#2563eb', strokeWidth: 4 },
            { type: 'line', points: [[49, 1.4], [49, 2.6]], color: '#2563eb', strokeWidth: 2 },
            { type: 'line', points: [[55, 1.4], [55, 2.6]], color: '#2563eb', strokeWidth: 2 },
            { type: 'points', points: [[52, 2]], color: '#1e40af' }
          ],
          textAnnotations: [
            { x: 52, y: 3.2, text: '[49%, 55%]', color: '#1e40af', fontSize: 9.5, fontWeight: '800' }
          ]
        },
        {
          label: 'Poll B (55% ± 2%)',
          xAxisLabel: 'Percentage (%)',
          xRange: [48, 60],
          yRange: [0, 4],
          curves: [
            { type: 'line', points: [[53, 2], [57, 2]], color: '#16a34a', strokeWidth: 4 },
            { type: 'line', points: [[53, 1.4], [53, 2.6]], color: '#16a34a', strokeWidth: 2 },
            { type: 'line', points: [[57, 1.4], [57, 2.6]], color: '#16a34a', strokeWidth: 2 },
            { type: 'points', points: [[55, 2]], color: '#15803d' }
          ],
          textAnnotations: [
            { x: 55, y: 3.2, text: '[53%, 57%]', color: '#15803d', fontSize: 9.5, fontWeight: '800' }
          ]
        }
      ]
    },
    options: [
      'Poll A',
      'Poll B',
      'Both intervals are equally wide.',
      'Neither interval width can be determined.'
    ],
    correctIndex: 1,
    correctAnswerText: 'Poll B',
    explanation: `Step-by-Step Interval Width Calculation:
1. Total width of a confidence interval $= 2 \\times (\\text{Margin of Error})$:
   • Poll A: Margin of error $= 3\\% \\rightarrow \\text{Width} = 2 \\times 3\\% = 6\\%$ (from $49\\%$ to $55\\%$).
   • Poll B: Margin of error $= 2\\% \\rightarrow \\text{Width} = 2 \\times 2\\% = 4\\%$ (from $53\\%$ to $57\\%$).

2. Compare widths:
   $$4\\% < 6\\%$$
   Poll B has a narrower confidence interval (and is therefore more precise).

Teacher's SAT Pro-Tip:
Interval Width $= 2 \\times \\text{MoE}$. Smaller margin of error directly corresponds to a narrower interval.`,
    distractorExplanations: {
      0: 'Poll A has an interval width of 6 percentage points ($55 - 49 = 6$), which is wider than Poll B.',
      2: 'Poll A is 6 percentage points wide while Poll B is 4 percentage points wide; they are not equal.',
      3: 'Interval width is explicitly calculated as double the margin of error.'
    }
  },
  {
    id: 'sat-ch10-q97',
    number: 97,
    exerciseNumber: 3,
    exerciseTitle: 'Exercise 3: Hardest Module 2 Visual & Conceptual Comparisons (Questions 81–100)',
    question: `Data Set A has a mean of 40 and a standard deviation of 6.

Data Set B is created using the linear transformation:
$$B = 2A + 15$$

What are the mean and standard deviation of Data Set B?`,
    options: [
      'Mean = 55, SD = 6',
      'Mean = 95, SD = 12',
      'Mean = 95, SD = 21',
      'Mean = 80, SD = 12'
    ],
    correctIndex: 1,
    correctAnswerText: 'Mean = 95, SD = 12',
    explanation: `Step-by-Step Linear Transformation Rules:
1. Effect on the Mean (Measures of Center):
   • When transforming $Y = aX + b$, the mean scales by $a$ AND shifts by $b$:
   $$\\text{Mean}(B) = 2 \\times \\text{Mean}(A) + 15 = 2(40) + 15 = 80 + 15 = 95$$

2. Effect on Standard Deviation (Measures of Spread):
   • Standard deviation scales by $|a|$, but is completely unaffected by adding a constant $b$:
   $$\\text{SD}(B) = |2| \\times \\text{SD}(A) = 2 \\times 6 = 12$$

3. Summary:
   • New Mean $= 95$
   • New Standard Deviation $= 12$

Teacher's SAT Pro-Tip:
Addition shifts center ONLY ($+b$). Multiplication scales BOTH center and spread ($\\times a$).`,
    distractorExplanations: {
      0: 'Failed to multiply the mean by 2 ($40 + 15 = 55$) and did not scale the standard deviation.',
      2: 'Incorrectly added 15 to the standard deviation ($12 + 15 = 27$ or $6 + 15 = 21$); adding a constant never alters spread.',
      3: 'Forgot to add 15 to the scaled mean ($2 \\times 40 = 80$).'
    }
  },
  {
    id: 'sat-ch10-q98',
    number: 98,
    exerciseNumber: 3,
    exerciseTitle: 'Exercise 3: Hardest Module 2 Visual & Conceptual Comparisons (Questions 81–100)',
    question: `A distribution contains many observations between 10 and 20, but a small number of observations between 80 and 100.

Which statement is most reasonable?`,
    diagram: {
      title: 'Right-Tail Outlier Distribution',
      caption: 'Histogram showing high concentration at lower values with sparse high observations.',
      xAxisLabel: 'Value',
      yAxisLabel: 'Count',
      xRange: [0, 110],
      yRange: [0, 30],
      xStep: 10,
      yStep: 5,
      curves: [
        { type: 'line', points: [[10, 0], [10, 24], [20, 24], [20, 0]], color: '#2563eb', strokeWidth: 1.5, shade: 'below', shadeColor: 'rgba(37, 99, 235, 0.3)' },
        { type: 'line', points: [[20, 0], [20, 8], [30, 8], [30, 0]], color: '#2563eb', strokeWidth: 1.5, shade: 'below', shadeColor: 'rgba(37, 99, 235, 0.3)' },
        { type: 'line', points: [[80, 0], [80, 2], [90, 2], [90, 0]], color: '#ea580c', strokeWidth: 1.5, shade: 'below', shadeColor: 'rgba(234, 88, 12, 0.3)' },
        { type: 'line', points: [[90, 0], [90, 1], [100, 1], [100, 0]], color: '#ea580c', strokeWidth: 1.5, shade: 'below', shadeColor: 'rgba(234, 88, 12, 0.3)' }
      ],
      textAnnotations: [
        { x: 15, y: 26, text: 'Cluster (10–20)', color: '#1e40af', fontSize: 9.5, fontWeight: '800' },
        { x: 90, y: 5, text: 'High Tail (80–100)', color: '#c2410c', fontSize: 9.5, fontWeight: '800' }
      ]
    },
    options: [
      'The mean may be pulled toward the larger values.',
      'The median must be greater than the mean.',
      'The distribution must be left-skewed.',
      'The large values have no effect on the mean.'
    ],
    correctIndex: 0,
    correctAnswerText: 'The mean may be pulled toward the larger values.',
    explanation: `Step-by-Step Sensitivity of the Mean:
1. The vast majority of data is packed between 10 and 20, keeping the median within the 10–20 range.
2. The presence of values between 80 and 100 creates an extended right tail.
3. Because the arithmetic mean computes the sum $\\sum x$ divided by $n$, extreme large values heavily inflate the numerator, pulling the mean upward above the median.
4. Therefore, the mean is pulled rightward toward the larger values.

Teacher's SAT Pro-Tip:
Extreme high values pull the mean upward. The median stays anchored near the majority of the data.`,
    distractorExplanations: {
      1: 'Because extreme high values pull the mean up, the mean is greater than the median, not less.',
      2: 'The tail extends toward larger positive numbers on the right; this is right-skewed, not left-skewed.',
      3: 'The mean is non-resistant and directly impacted by high numbers in the summation.'
    }
  },
  {
    id: 'sat-ch10-q99',
    number: 99,
    exerciseNumber: 3,
    exerciseTitle: 'Exercise 3: Hardest Module 2 Visual & Conceptual Comparisons (Questions 81–100)',
    question: `Two data sets have the following summary statistics:

                 Median     IQR     Range
-------------------------------------------
Set A               42       9       31
Set B               42      17       48

Which statement is necessarily true?`,
    table: {
      title: 'Summary Statistics for Set A and Set B',
      headers: ['Data Set', 'Median', 'IQR (Q3 - Q1)', 'Overall Range'],
      rows: [
        ['Set A', '42', '9', '31'],
        ['Set B', '42', '17', '48']
      ]
    },
    options: [
      'Set A has the greater median.',
      'Set B has the greater median.',
      'Set B has greater middle-50% spread and greater overall range.',
      'Set A has greater overall spread.'
    ],
    correctIndex: 2,
    correctAnswerText: 'Set B has greater middle-50% spread and greater overall range.',
    explanation: `Step-by-Step Summary Statistics Verification:
1. Medians: Both sets have identical medians of 42.
2. Middle 50% Spread (Interquartile Range):
   • $\\text{IQR}_B = 17 > \\text{IQR}_A = 9$.
   Set B has a significantly larger middle-50% spread.
3. Overall Spread (Range):
   • $\\text{Range}_B = 48 > \\text{Range}_A = 31$.
   Set B has a larger overall range.
4. Therefore, Set B has both greater middle-50% spread (IQR) and greater overall range.

Teacher's SAT Pro-Tip:
The Interquartile Range (IQR) specifically measures the spread of the middle 50% of the distribution ($Q_1$ to $Q_3$).`,
    distractorExplanations: {
      0: 'Both sets have equal medians ($42 = 42$).',
      1: 'Both sets have equal medians ($42 = 42$).',
      3: 'Set A has a smaller range (31 vs 48) and smaller IQR (9 vs 17).'
    }
  },
  {
    id: 'sat-ch10-q100',
    number: 100,
    exerciseNumber: 3,
    exerciseTitle: 'Exercise 3: Hardest Module 2 Visual & Conceptual Comparisons (Questions 81–100)',
    question: `Two schools administer the same mathematics examination:

School A:
• Mean = 74
• Median = 76
• IQR = 10
• Range = 42

School B:
• Mean = 74
• Median = 69
• IQR = 18
• Range = 71

The histogram for School B has a long tail toward higher scores.

Which statement is best supported?`,
    table: {
      title: 'School Exam Score Distributions Comparison',
      headers: ['Metric', 'School A', 'School B'],
      rows: [
        ['Mean', '74', '74'],
        ['Median', '76', '69'],
        ['IQR (Middle 50%)', '10', '18'],
        ['Range (Max - Min)', '42', '71'],
        ['Histogram Tail', 'Roughly Symmetric / Left-Shifted', 'Long Tail to Higher Scores (Right)']
      ]
    },
    options: [
      'School A has a larger spread because both schools have the same mean.',
      'School B is likely right-skewed and has greater variability than School A.',
      'School A is likely right-skewed and has greater variability than School B.',
      'Because the means are equal, the distributions must have the same shape and spread.'
    ],
    correctIndex: 1,
    correctAnswerText: 'School B is likely right-skewed and has greater variability than School A.',
    explanation: `Step-by-Step Multi-Concept Synthesis:
1. Skewness Evaluation for School B:
   • $\\text{Mean} (74) > \\text{Median} (69)$
   • The histogram has a long tail stretching toward higher scores.
   • Both the tail and the relationship $\\text{Mean} > \\text{Median}$ confirm that School B is right-skewed.

2. Variability (Spread) Comparison:
   • $\\text{IQR}_B = 18 > \\text{IQR}_A = 10$
   • $\\text{Range}_B = 71 > \\text{Range}_A = 42$
   • School B exhibits greater spread across both the middle 50% and total range.

3. Conclusion:
   School B is right-skewed and has greater variability than School A.

Teacher's SAT Pro-Tip:
Equal means do NOT imply equal distributions! Always check the relationship between mean and median, along with IQR and range.`,
    distractorExplanations: {
      0: 'School A has a much smaller IQR (10 vs 18) and range (42 vs 71), indicating less spread.',
      2: 'School A has $\\text{Mean} (74) < \\text{Median} (76)$ and smaller variability; it is not right-skewed or more variable.',
      3: 'Distributions with identical means can have completely different shapes, skews, and spreads.'
    }
  }
];
