import { MathExerciseQuestion } from './satMathConcepts';

export const CHAPTER_10_QUESTIONS_PART_2: MathExerciseQuestion[] = [
  {
    id: 'ch10-q41',
    number: 41,
    exerciseNumber: 2,
    exerciseTitle: 'Exercise 2: Module 2 Advanced Reasoning (Questions 41–80)',
    question: 'The mean of six values is 18.\nFive of the values are: 7, 12, 16, 20, and 24.\n\nWhat is the sixth value?',
    options: ['17', '19', '21', '29'],
    correctIndex: 3,
    correctAnswerText: '29',
    explanation: `Step-by-Step Solution:
1. Find the required total for all 6 values:
   $$\\text{Required Total} = 6 \\times 18 = 108$$

2. Sum the five given values:
   $$\\text{Known Sum} = 7 + 12 + 16 + 20 + 24 = 79$$

3. Subtract to find the sixth value:
   $$\\text{Sixth Value} = 108 - 79 = 29$$

Teacher's SAT Pro-Tip:
$\\text{Missing Value} = n(\\text{Mean}) - \\sum x_{\\text{known}} = 108 - 79 = 29$.`,
    distractorExplanations: {
      0: '17 is an arithmetic miscalculation.',
      1: '19 is the result of misadding the five numbers as 89 instead of 79 ($108 - 89 = 19$).',
      2: '21 is an arithmetic error.'
    }
  },
  {
    id: 'ch10-q42',
    number: 42,
    exerciseNumber: 2,
    exerciseTitle: 'Exercise 2: Module 2 Advanced Reasoning (Questions 41–80)',
    question: 'A data set has 12 values with a mean of 31.\nOne additional value, 79, is added to the data set.\n\nWhich statement must be true?',
    options: [
      'The new mean is 79.',
      'The new mean is unchanged.',
      'The new mean is greater than 31.',
      'The new mean is less than 31.'
    ],
    correctIndex: 2,
    correctAnswerText: 'The new mean is greater than 31.',
    explanation: `Step-by-Step Solution:
1. When a new value $x_{\\text{new}}$ is added to a data set:
   • If $x_{\\text{new}} > \\text{old mean}$, the mean increases.
   • If $x_{\\text{new}} = \\text{old mean}$, the mean remains unchanged.
   • If $x_{\\text{new}} < \\text{old mean}$, the mean decreases.

2. Since $79 > 31$, the new mean must be strictly **greater than 31**.
   $$\\text{New Mean} = \\frac{12(31) + 79}{13} = \\frac{372 + 79}{13} = \\frac{451}{13} \\approx 34.69 > 31$$

Teacher's SAT Pro-Tip:
Adding a number larger than the current average always pulls the average UP.`,
    distractorExplanations: {
      0: 'The new mean is approximately 34.69, not 79.',
      1: 'The mean changes because 79 is not equal to 31.',
      3: 'Adding a number larger than the mean increases the mean, rather than decreasing it.'
    }
  },
  {
    id: 'ch10-q43',
    number: 43,
    exerciseNumber: 2,
    exerciseTitle: 'Exercise 2: Module 2 Advanced Reasoning (Questions 41–80)',
    question: 'A data set has 20 values with a mean of 45.\nEvery value is transformed according to the rule: new value = 3(old value) - 8.\n\nWhat is the new mean?',
    options: ['37', '127', '135', '143'],
    correctIndex: 1,
    correctAnswerText: '127',
    explanation: `Step-by-Step Linear Transformation:
1. When every value $x$ is transformed by $y = ax + b$, the mean undergoes the identical algebraic transformation:
   $$\\text{New Mean} = a(\\text{Old Mean}) + b$$

2. Substitute $a = 3$, $\\text{Old Mean} = 45$, and $b = -8$:
   $$\\text{New Mean} = 3(45) - 8 = 135 - 8 = 127$$

Teacher's SAT Pro-Tip:
Linear transformations apply directly to the mean: $3(45) - 8 = 127$.`,
    distractorExplanations: {
      0: '37 is $45 - 8$, forgetting the multiplication by 3.',
      2: '135 is $3 \\times 45$, forgetting to subtract 8.',
      3: '143 is $3(45) + 8$, adding 8 instead of subtracting.'
    }
  },
  {
    id: 'ch10-q44',
    number: 44,
    exerciseNumber: 2,
    exerciseTitle: 'Exercise 2: Module 2 Advanced Reasoning (Questions 41–80)',
    question: 'Two groups of test scores are combined:\n• Group A: 24 observations, mean 63\n• Group B: 36 observations, mean 78\n\nWhat is the combined mean?',
    options: ['70', '71', '72', '73'],
    correctIndex: 2,
    correctAnswerText: '72',
    explanation: `Step-by-Step Weighted Mean Calculation:
1. Compute the total sum for Group A:
   $$\\text{Sum}_A = 24 \\times 63 = 1,512$$

2. Compute the total sum for Group B:
   $$\\text{Sum}_B = 36 \\times 78 = 2,808$$

3. Compute the grand total and total observations:
   $$\\text{Grand Sum} = 1,512 + 2,808 = 4,320$$
   $$\\text{Total Observations} = 24 + 36 = 60$$

4. Calculate the combined mean:
   $$\\text{Combined Mean} = \\frac{4,320}{60} = 72$$

Teacher's SAT Pro-Tip:
Alternative Ratio Method: The weights are $24:36 = 2:3$.
$$\\text{Mean} = \\frac{2(63) + 3(78)}{5} = \\frac{126 + 234}{5} = \\frac{360}{5} = 72$$`,
    distractorExplanations: {
      0: '70 is an incorrect underestimate.',
      1: '71 is $(63 + 78)/2 = 70.5$ rounded up.',
      3: '73 is an overestimate.'
    }
  },
  {
    id: 'ch10-q45',
    number: 45,
    exerciseNumber: 2,
    exerciseTitle: 'Exercise 2: Module 2 Advanced Reasoning (Questions 41–80)',
    question: 'The frequency bar chart below shows the distribution of values in a data set.\n\nWhat is the mean of the data set?',
    diagram: {
      title: 'Frequency Bar Distribution',
      caption: 'Frequency bar chart for data values 4, 6, 10, and 14.',
      xAxisLabel: 'Data Value',
      yAxisLabel: 'Frequency',
      xRange: [0, 16],
      yRange: [0, 9],
      xStep: 2,
      yStep: 1,
      curves: [
        { type: 'line', points: [[3.2, 0], [3.2, 7], [4.8, 7], [4.8, 0]], color: '#2563eb', strokeWidth: 2, shade: 'below', shadeColor: 'rgba(37, 99, 235, 0.25)' },
        { type: 'line', points: [[5.2, 0], [5.2, 5], [6.8, 5], [6.8, 0]], color: '#2563eb', strokeWidth: 2, shade: 'below', shadeColor: 'rgba(37, 99, 235, 0.25)' },
        { type: 'line', points: [[9.2, 0], [9.2, 3], [10.8, 3], [10.8, 0]], color: '#2563eb', strokeWidth: 2, shade: 'below', shadeColor: 'rgba(37, 99, 235, 0.25)' },
        { type: 'line', points: [[13.2, 0], [13.2, 5], [14.8, 5], [14.8, 0]], color: '#2563eb', strokeWidth: 2, shade: 'below', shadeColor: 'rgba(37, 99, 235, 0.25)' }
      ],
      textAnnotations: [
        { x: 4, y: 7.6, text: 'f = 7', color: '#1e40af', fontSize: 10, fontWeight: '800' },
        { x: 6, y: 5.6, text: 'f = 5', color: '#1e40af', fontSize: 10, fontWeight: '800' },
        { x: 10, y: 3.6, text: 'f = 3', color: '#1e40af', fontSize: 10, fontWeight: '800' },
        { x: 14, y: 5.6, text: 'f = 5', color: '#1e40af', fontSize: 10, fontWeight: '800' }
      ]
    },
    options: ['7.2', '7.5', '7.9', '8.5'],
    correctIndex: 2,
    correctAnswerText: '7.9',
    explanation: `Step-by-Step Frequency Mean Calculation:
1. Compute products of (Value $\\times$ Frequency):
   • $4 \\times 7 = 28$
   • $6 \\times 5 = 30$
   • $10 \\times 3 = 30$
   • $14 \\times 5 = 70$

2. Calculate total sum and total frequency:
   $$\\text{Total Sum} = 28 + 30 + 30 + 70 = 158$$
   $$\\text{Total Frequency} = 7 + 5 + 3 + 5 = 20$$

3. Divide total sum by total frequency:
   $$\\text{Mean} = \\frac{158}{20} = 7.9$$

Teacher's SAT Pro-Tip:
Always sum the (Value $\\times$ Frequency) column and divide by the sum of the frequencies: $\\frac{158}{20} = 7.9$.`,
    distractorExplanations: {
      0: '7.2 is an arithmetic calculation error.',
      1: '7.5 is $(4 + 6 + 10 + 14)/4 = 8.5 - 1$.',
      3: '8.5 is the unweighted average $(4 + 6 + 10 + 14)/4 = 8.5$, which ignores the frequencies.'
    }
  },
  {
    id: 'ch10-q46',
    number: 46,
    exerciseNumber: 2,
    exerciseTitle: 'Exercise 2: Module 2 Advanced Reasoning (Questions 41–80)',
    question: 'The box plot below summarizes a distribution with $Q_1 = 24$ and $Q_3 = 46$.\n\nA value is considered an outlier if it is strictly greater than $Q_3 + 1.5(\\text{IQR})$. What is the smallest integer that could be classified as an upper outlier?',
    diagram: {
      title: 'Box Plot Display',
      caption: 'Box plot showing Q1, median, and Q3 with extended whiskers.',
      xAxisLabel: 'Data Value',
      xRange: [0, 95],
      yRange: [0, 6],
      xStep: 10,
      yStep: 1,
      hideGrid: true,
      curves: [
        { type: 'line', points: [[24, 2], [24, 4], [46, 4], [46, 2], [24, 2]], color: '#2563eb', strokeWidth: 2, shade: 'below', shadeColor: 'rgba(37, 99, 235, 0.15)' },
        { type: 'line', points: [[35, 2], [35, 4]], color: '#1e40af', strokeWidth: 3 },
        { type: 'line', points: [[10, 3], [24, 3]], color: '#2563eb', strokeWidth: 2 },
        { type: 'line', points: [[10, 2.3], [10, 3.7]], color: '#2563eb', strokeWidth: 2 },
        { type: 'line', points: [[46, 3], [65, 3]], color: '#2563eb', strokeWidth: 2 },
        { type: 'line', points: [[65, 2.3], [65, 3.7]], color: '#2563eb', strokeWidth: 2 }
      ],
      textAnnotations: [
        { x: 24, y: 1.2, text: 'Q1 = 24', color: '#1e40af', fontSize: 9.5, fontWeight: '800' },
        { x: 46, y: 1.2, text: 'Q3 = 46', color: '#1e40af', fontSize: 9.5, fontWeight: '800' }
      ]
    },
    options: ['79', '80', '81', '82'],
    correctIndex: 1,
    correctAnswerText: '80',
    explanation: `Step-by-Step 1.5 × IQR Outlier Boundary:
1. Compute the Interquartile Range (IQR):
   $$\\text{IQR} = Q_3 - Q_1 = 46 - 24 = 22$$

2. Compute the upper outlier threshold:
   $$\\text{Upper Fence} = Q_3 + 1.5(\\text{IQR}) = 46 + 1.5(22) = 46 + 33 = 79$$

3. An upper outlier must be **strictly greater than** the fence ($x > 79$).
   The smallest integer strictly greater than 79 is **80**.

Teacher's SAT Pro-Tip:
Upper Outlier Threshold $= Q_3 + 1.5(\\text{IQR}) = 46 + 33 = 79$. The smallest integer strictly greater than 79 is 80.`,
    distractorExplanations: {
      0: '79 is the exact upper fence boundary ($Q_3 + 1.5\\times\\text{IQR}$); a value must be strictly greater than 79 to be an outlier.',
      2: '81 is an outlier, but 80 is smaller and also strictly greater than 79.',
      3: '82 is an outlier, but not the smallest possible integer.'
    }
  },
  {
    id: 'ch10-q47',
    number: 47,
    exerciseNumber: 2,
    exerciseTitle: 'Exercise 2: Module 2 Advanced Reasoning (Questions 41–80)',
    question: 'The two box plots below summarize two distributions having the same median.\n\nWhich statement correctly compares their spread?',
    diagram: {
      title: 'Comparing Interquartile Ranges (IQR)',
      caption: 'Side-by-side boxplot distributions for Boxplot A and Boxplot B.',
      subDiagrams: [
        {
          label: 'Boxplot A',
          xAxisLabel: 'Values',
          xRange: [20, 80],
          yRange: [0, 5],
          xStep: 10,
          yStep: 1,
          hideGrid: true,
          curves: [
            { type: 'line', points: [[44, 1.5], [44, 3.5], [56, 3.5], [56, 1.5], [44, 1.5]], color: '#2563eb', strokeWidth: 2, shade: 'below', shadeColor: 'rgba(37, 99, 235, 0.15)' },
            { type: 'line', points: [[50, 1.5], [50, 3.5]], color: '#1e40af', strokeWidth: 3 },
            { type: 'line', points: [[30, 2.5], [44, 2.5]], color: '#2563eb', strokeWidth: 2 },
            { type: 'line', points: [[30, 2], [30, 3]], color: '#2563eb', strokeWidth: 2 },
            { type: 'line', points: [[56, 2.5], [70, 2.5]], color: '#2563eb', strokeWidth: 2 },
            { type: 'line', points: [[70, 2], [70, 3]], color: '#2563eb', strokeWidth: 2 }
          ],
          textAnnotations: []
        },
        {
          label: 'Boxplot B',
          xAxisLabel: 'Values',
          xRange: [20, 80],
          yRange: [0, 5],
          xStep: 10,
          yStep: 1,
          hideGrid: true,
          curves: [
            { type: 'line', points: [[36.5, 1.5], [36.5, 3.5], [63.5, 3.5], [63.5, 1.5], [36.5, 1.5]], color: '#ea580c', strokeWidth: 2, shade: 'below', shadeColor: 'rgba(234, 88, 12, 0.15)' },
            { type: 'line', points: [[50, 1.5], [50, 3.5]], color: '#c2410c', strokeWidth: 3 },
            { type: 'line', points: [[24, 2.5], [36.5, 2.5]], color: '#ea580c', strokeWidth: 2 },
            { type: 'line', points: [[24, 2], [24, 3]], color: '#ea580c', strokeWidth: 2 },
            { type: 'line', points: [[63.5, 2.5], [76, 2.5]], color: '#ea580c', strokeWidth: 2 },
            { type: 'line', points: [[76, 2], [76, 3]], color: '#ea580c', strokeWidth: 2 }
          ],
          textAnnotations: []
        }
      ]
    },
    options: [
      'A has greater middle spread.',
      'B has greater middle spread.',
      'They have equal spread.',
      'The median of B must be larger.'
    ],
    correctIndex: 1,
    correctAnswerText: 'B has greater middle spread.',
    explanation: `Step-by-Step Boxplot Spread Comparison:
1. The Interquartile Range (IQR) measures the spread of the middle 50% of the distribution (the width of the box).
2. Since $\\text{IQR}(B) = 27 > \\text{IQR}(A) = 12$, Boxplot B has a substantially wider middle spread.

Teacher's SAT Pro-Tip:
Larger IQR $\\implies$ Greater spread of the central 50% of observations.`,
    distractorExplanations: {
      0: 'Boxplot A has a smaller IQR (12), indicating a more concentrated middle 50%.',
      2: 'Their IQRs are 12 and 27, which are not equal.',
      3: 'The prompt explicitly states both boxplots have the same median.'
    }
  },
  {
    id: 'ch10-q48',
    number: 48,
    exerciseNumber: 2,
    exerciseTitle: 'Exercise 2: Module 2 Advanced Reasoning (Questions 41–80)',
    question: 'A data set is transformed by adding 100 to every value.\n\nWhich measure definitely remains unchanged?',
    options: ['mean', 'median', 'range', 'maximum'],
    correctIndex: 2,
    correctAnswerText: 'range',
    explanation: `Step-by-Step Transformation Analysis:
1. Adding 100 increases the mean, median, minimum, and maximum by 100.
2. The range is the difference between maximum and minimum:
   $$\\text{New Range} = (\\text{Max} + 100) - (\\text{Min} + 100) = \\text{Max} - \\text{Min} = \\text{Old Range}$$
3. Therefore, the **range** remains completely unchanged.

Teacher's SAT Pro-Tip:
Adding a constant changes all location statistics (Mean, Median, Min, Max), but never changes spread statistics (Range, IQR, SD).`,
    distractorExplanations: {
      0: 'The mean increases by 100.',
      1: 'The median increases by 100.',
      3: 'The maximum increases by 100.'
    }
  },
  {
    id: 'ch10-q49',
    number: 49,
    exerciseNumber: 2,
    exerciseTitle: 'Exercise 2: Module 2 Advanced Reasoning (Questions 41–80)',
    question: 'A data set is transformed by multiplying every value by 0.2.\nThe original range is 75.\n\nWhat is the new range?',
    options: ['15', '37.5', '75', '375'],
    correctIndex: 0,
    correctAnswerText: '15',
    explanation: `Step-by-Step Multiplication Spread Effect:
1. Multiplying every value in a distribution by a constant $c$ multiplies the range by $|c|$:
   $$\\text{New Range} = |c| \\times \\text{Old Range}$$

2. Substitute $c = 0.2$ and $\\text{Old Range} = 75$:
   $$\\text{New Range} = 0.2 \\times 75 = 15$$

Teacher's SAT Pro-Tip:
Multiplication compresses or expands the range: $0.2 \\times 75 = 15$.`,
    distractorExplanations: {
      1: '37.5 is $75 / 2$.',
      2: '75 assumes multiplication leaves range unchanged.',
      3: '375 is $75 / 0.2 = 75 \\times 5$.'
    }
  },
  {
    id: 'ch10-q50',
    number: 50,
    exerciseNumber: 2,
    exerciseTitle: 'Exercise 2: Module 2 Advanced Reasoning (Questions 41–80)',
    question: 'A distribution is approximately symmetric and has no major outliers.\nIts median is 42.\n\nWhich value is most plausible for its mean?',
    options: ['10', '30', '42', '90'],
    correctIndex: 2,
    correctAnswerText: '42',
    explanation: `Step-by-Step Symmetry Property:
1. In any approximately symmetric unimodal distribution with no extreme outliers, the mean and the median are approximately equal:
   $$\\text{Mean} \\approx \\text{Median}$$

2. Since the median is 42, the most plausible value for the mean is **42**.

Teacher's SAT Pro-Tip:
Symmetric distribution $\\implies \\text{Mean} = \\text{Median} = 42$.`,
    distractorExplanations: {
      0: '10 would indicate severe left-skewness.',
      1: '30 would indicate left-skewness.',
      3: '90 would indicate extreme right-skewness.'
    }
  },
  {
    id: 'ch10-q51',
    number: 51,
    exerciseNumber: 2,
    exerciseTitle: 'Exercise 2: Module 2 Advanced Reasoning (Questions 41–80)',
    question: 'The histogram below displays a grouped frequency distribution across score intervals.\n\nWhich statement is best supported?',
    diagram: {
      title: 'Grouped Frequency Histogram',
      caption: 'Histogram showing frequency distribution across score intervals.',
      xAxisLabel: 'Interval',
      yAxisLabel: 'Frequency',
      xRange: [0, 70],
      yRange: [0, 22],
      xStep: 10,
      yStep: 5,
      curves: [
        { type: 'line', points: [[10, 0], [10, 5], [20, 5], [20, 0]], color: '#2563eb', strokeWidth: 1.5, shade: 'below', shadeColor: 'rgba(37, 99, 235, 0.3)' },
        { type: 'line', points: [[20, 0], [20, 12], [30, 12], [30, 0]], color: '#2563eb', strokeWidth: 1.5, shade: 'below', shadeColor: 'rgba(37, 99, 235, 0.3)' },
        { type: 'line', points: [[30, 0], [30, 19], [40, 19], [40, 0]], color: '#2563eb', strokeWidth: 1.5, shade: 'below', shadeColor: 'rgba(37, 99, 235, 0.3)' },
        { type: 'line', points: [[40, 0], [40, 17], [50, 17], [50, 0]], color: '#2563eb', strokeWidth: 1.5, shade: 'below', shadeColor: 'rgba(37, 99, 235, 0.3)' },
        { type: 'line', points: [[50, 0], [50, 7], [60, 7], [60, 0]], color: '#2563eb', strokeWidth: 1.5, shade: 'below', shadeColor: 'rgba(37, 99, 235, 0.3)' }
      ],
      textAnnotations: [
        { x: 15, y: 6.5, text: '5', color: '#1e40af', fontSize: 9.5, fontWeight: '800' },
        { x: 25, y: 13.5, text: '12', color: '#1e40af', fontSize: 9.5, fontWeight: '800' },
        { x: 35, y: 20.5, text: '19', color: '#1e40af', fontSize: 9.5, fontWeight: '800' },
        { x: 45, y: 18.5, text: '17', color: '#1e40af', fontSize: 9.5, fontWeight: '800' },
        { x: 55, y: 8.5, text: '7', color: '#1e40af', fontSize: 9.5, fontWeight: '800' }
      ]
    },
    options: [
      'The 10–19 interval contains the most observations.',
      'The 30–39 interval contains the most observations.',
      'Exactly 19 observations have a value of 35.',
      'Every observation lies between 30 and 39.'
    ],
    correctIndex: 1,
    correctAnswerText: 'The 30–39 interval contains the most observations.',
    explanation: `Step-by-Step Histogram Analysis:
1. Comparing the bar frequencies:
   • 10–19: 5
   • 20–29: 12
   • 30–39: 19 (Maximum frequency)
   • 40–49: 17
   • 50–59: 7

2. The interval 30–39 has the highest frequency (19 observations).
3. We cannot know individual values within an interval (we cannot claim all 19 are equal to 35).

Teacher's SAT Pro-Tip:
Histograms show grouped frequencies, not individual discrete values.`,
    distractorExplanations: {
      0: '10–19 has only 5 observations (the lowest).',
      2: 'Histograms group data into intervals; individual values within the bin are unknown.',
      3: 'Total observations exist across all bins from 10 to 59.'
    }
  },
  {
    id: 'ch10-q52',
    number: 52,
    exerciseNumber: 2,
    exerciseTitle: 'Exercise 2: Module 2 Advanced Reasoning (Questions 41–80)',
    question: 'A histogram has bars of equal width.\nIf the frequency of the 40–49 interval is doubled while all other frequencies remain unchanged, what definitely happens to the visual graph?',
    options: [
      'The median must double.',
      'The range must double.',
      'The height of that interval\'s bar doubles.',
      'Every value in that interval doubles.'
    ],
    correctIndex: 2,
    correctAnswerText: 'The height of that interval\'s bar doubles.',
    explanation: `Step-by-Step Graphical Interpretation:
1. In a histogram with uniform bin widths, the vertical height of each bar is directly proportional to the frequency of observations in that interval.
2. If the frequency of an interval doubles, the height of its corresponding bar on the vertical axis **doubles**.

Teacher's SAT Pro-Tip:
Histogram Bar Height = Interval Frequency.`,
    distractorExplanations: {
      0: 'The median position shifts slightly, but does not double.',
      1: 'The minimum and maximum intervals are unchanged, so the range does not double.',
      3: 'The data values inside the interval remain in the 40–49 range.'
    }
  },
  {
    id: 'ch10-q53',
    number: 53,
    exerciseNumber: 2,
    exerciseTitle: 'Exercise 2: Module 2 Advanced Reasoning (Questions 41–80)',
    question: 'The box plot below displays the five-number summary for a data set.\n\nWhich interval contains exactly 50% of the observations?',
    diagram: {
      title: 'Five-Number Summary Box Plot',
      caption: 'Box plot display showing five-number summary values.',
      xAxisLabel: 'Value',
      xRange: [0, 55],
      yRange: [0, 5],
      xStep: 5,
      yStep: 1,
      hideGrid: true,
      curves: [
        { type: 'line', points: [[14, 1.5], [14, 3.5], [31, 3.5], [31, 1.5], [14, 1.5]], color: '#2563eb', strokeWidth: 2, shade: 'below', shadeColor: 'rgba(37, 99, 235, 0.2)' },
        { type: 'line', points: [[19, 1.5], [19, 3.5]], color: '#1e40af', strokeWidth: 3 },
        { type: 'line', points: [[5, 2.5], [14, 2.5]], color: '#2563eb', strokeWidth: 2 },
        { type: 'line', points: [[5, 2], [5, 3]], color: '#2563eb', strokeWidth: 2 },
        { type: 'line', points: [[31, 2.5], [50, 2.5]], color: '#2563eb', strokeWidth: 2 },
        { type: 'line', points: [[50, 2], [50, 3]], color: '#2563eb', strokeWidth: 2 }
      ],
      textAnnotations: [
        { x: 5, y: 1.0, text: 'Min: 5', color: '#64748b', fontSize: 9 },
        { x: 14, y: 1.0, text: 'Q1: 14', color: '#1e40af', fontSize: 9.5, fontWeight: '800' },
        { x: 19, y: 4.0, text: 'Med: 19', color: '#1e40af', fontSize: 9.5, fontWeight: '800' },
        { x: 31, y: 1.0, text: 'Q3: 31', color: '#1e40af', fontSize: 9.5, fontWeight: '800' },
        { x: 50, y: 1.0, text: 'Max: 50', color: '#64748b', fontSize: 9 }
      ]
    },
    options: ['5 to 50', '5 to 31', '14 to 31', '19 to 31'],
    correctIndex: 2,
    correctAnswerText: '14 to 31',
    explanation: `Step-by-Step Quartile Percentages:
1. Quartiles divide sorted data into four equal quarters (25% each):
   • Min to Q1 (5 to 14): 25%
   • Q1 to Median (14 to 19): 25%
   • Median to Q3 (19 to 31): 25%
   • Q3 to Max (31 to 50): 25%

2. The interval from $Q_1$ to $Q_3$ (14 to 31) covers the middle two quarters:
   $$25\\% + 25\\% = 50\\%$$
   This corresponds to the Interquartile Range (IQR).

Teacher's SAT Pro-Tip:
$Q_1$ to $Q_3$ defines the middle 50% of every distribution.`,
    distractorExplanations: {
      0: '5 to 50 contains 100% of all observations (Minimum to Maximum).',
      1: '5 to 31 contains 75% of observations (Minimum to Q3).',
      3: '19 to 31 contains only 25% of observations (Median to Q3).'
    }
  },
  {
    id: 'ch10-q54',
    number: 54,
    exerciseNumber: 2,
    exerciseTitle: 'Exercise 2: Module 2 Advanced Reasoning (Questions 41–80)',
    question: 'A distribution has a mean of 64 and a median of 52.\n\nWhich type of skew is most consistent with these values?',
    options: ['left-skewed', 'right-skewed', 'perfectly symmetric', 'no distribution can have these values'],
    correctIndex: 1,
    correctAnswerText: 'right-skewed',
    explanation: `Step-by-Step Skew Rule:
1. Compare the mean and median:
   $$\\text{Mean } (64) > \\text{Median } (52)$$

2. When the mean is significantly greater than the median, extreme large values in the right tail pull the mean upward.
3. Therefore, the distribution is **right-skewed (positively skewed)**.

Teacher's SAT Pro-Tip:
$\\text{Mean} > \\text{Median} \\implies$ Right-skewed.`,
    distractorExplanations: {
      0: 'Left-skewed distributions have Mean < Median.',
      2: 'Symmetric distributions have Mean ≈ Median.',
      3: 'Many real-world distributions (e.g., income, house prices) have Mean > Median.'
    }
  },
  {
    id: 'ch10-q55',
    number: 55,
    exerciseNumber: 2,
    exerciseTitle: 'Exercise 2: Module 2 Advanced Reasoning (Questions 41–80)',
    question: 'Data Set A has a standard deviation of 4.\nData Set B is created by multiplying every value in Data Set A by -3.\n\nWhat is the standard deviation of Data Set B?',
    options: ['-12', '1.33', '4', '12'],
    correctIndex: 3,
    correctAnswerText: '12',
    explanation: `Step-by-Step Standard Deviation Scaling:
1. Standard deviation is a distance metric and must always be non-negative:
   $$\\text{New SD} = |c| \\times \\text{Old SD}$$

2. For $c = -3$ and $\\text{Old SD} = 4$:
   $$\\text{New SD} = |-3| \\times 4 = 3 \\times 4 = 12$$

Teacher's SAT Pro-Tip:
SAT Trap Alert: Standard deviation can NEVER be negative! Always take the absolute value of the multiplier: $|-3| \\times 4 = 12$.`,
    distractorExplanations: {
      0: '-12 is impossible; standard deviation is strictly non-negative.',
      1: '1.33 is $4 / 3$.',
      2: '4 assumes multiplying by -3 leaves standard deviation unchanged.'
    }
  },
  {
    id: 'ch10-q56',
    number: 56,
    exerciseNumber: 2,
    exerciseTitle: 'Exercise 2: Module 2 Advanced Reasoning (Questions 41–80)',
    question: 'A scatterplot shows a strong downward linear pattern.\n\nWhich correlation coefficient value r is most plausible?',
    diagram: {
      title: 'Bivariate Scatterplot',
      caption: 'Scatterplot displaying bivariate data points with a fitted linear trendline.',
      xAxisLabel: 'x',
      yAxisLabel: 'y',
      xRange: [0, 10],
      yRange: [0, 50],
      xStep: 2,
      yStep: 10,
      curves: [
        {
          type: 'points',
          points: [[1, 46], [2, 41], [3.2, 36], [4.5, 30], [5.5, 26], [6.8, 19], [8, 14], [9.2, 8]],
          color: '#2563eb'
        },
        {
          type: 'line',
          points: [[0.5, 48], [9.5, 6]],
          color: '#dc2626',
          strokeWidth: 2,
          style: 'dashed'
        }
      ],
      textAnnotations: []
    },
    options: ['0.91', '0.12', '-0.88', '1.40'],
    correctIndex: 2,
    correctAnswerText: '-0.88',
    explanation: `Step-by-Step Correlation Analysis:
1. Properties of the correlation coefficient $r$:
   • $-1 \\le r \\le 1$
   • Negative sign indicates a downward trend (negative association).
   • Values close to $-1$ indicate strong negative linear correlation.

2. A strong downward pattern corresponds to $r \\approx -0.88$.

Teacher's SAT Pro-Tip:
Downward pattern $\\to$ Negative $r$. Strong clustering $\\to$ Magnitude close to 1 ($-0.88$).`,
    distractorExplanations: {
      0: '0.91 represents a strong UPWARD (positive) linear pattern.',
      1: '0.12 represents a very weak positive association.',
      3: '1.40 is impossible because correlation $r$ cannot exceed 1.0.'
    }
  },
  {
    id: 'ch10-q57',
    number: 57,
    exerciseNumber: 2,
    exerciseTitle: 'Exercise 2: Module 2 Advanced Reasoning (Questions 41–80)',
    question: 'A line of best fit is given by: y = 7.2x - 15.\n\nWhich interpretation of the slope is correct?',
    diagram: {
      title: 'Linear Model Graph',
      caption: 'Graph of the linear equation y = 7.2x - 15.',
      xAxisLabel: 'x',
      yAxisLabel: 'y',
      xRange: [0, 6],
      yRange: [0, 35],
      xStep: 1,
      yStep: 5,
      curves: [
        { type: 'line', points: [[2.1, 0], [6, 28.2]], color: '#2563eb', strokeWidth: 2.5, label: 'y = 7.2x - 15', labelPosition: { x: 3.5, y: 15 } }
      ],
      textAnnotations: []
    },
    options: [
      'y decreases by 7.2 when x increases by 1.',
      'y increases by 7.2 when x increases by 1.',
      'y is always 7.2.',
      'x increases by 15 when y increases by 1.'
    ],
    correctIndex: 1,
    correctAnswerText: 'y increases by 7.2 when x increases by 1.',
    explanation: `Step-by-Step Slope Interpretation:
1. The slope $m = +7.2$ represents the rate of change:
   $$\\frac{\\Delta y}{\\Delta x} = +7.2$$

2. Thus, for each 1-unit increase in $x$, the model predicts that $y$ increases by $7.2$.

Teacher's SAT Pro-Tip:
Positive slope $m = 7.2 \\implies y$ increases by $7.2$ per 1-unit increase in $x$.`,
    distractorExplanations: {
      0: 'y decreases would require a negative slope ($m = -7.2$).',
      2: 'y varies with x, not a constant 7.2.',
      3: '15 is related to the intercept, not the rate of change.'
    }
  },
  {
    id: 'ch10-q58',
    number: 58,
    exerciseNumber: 2,
    exerciseTitle: 'Exercise 2: Module 2 Advanced Reasoning (Questions 41–80)',
    question: 'A population model is given by: P = 18.5 + 2.7t, where P is the predicted population in thousands and t is the number of years after 2020.\n\nWhat does the number 2.7 represent in this context?',
    diagram: {
      title: 'Population Linear Model Graph',
      caption: 'Graph of the population model P = 18.5 + 2.7t.',
      xAxisLabel: 'Years after 2020 (t)',
      yAxisLabel: 'Population in Thousands (P)',
      xRange: [0, 10],
      yRange: [0, 50],
      xStep: 2,
      yStep: 10,
      curves: [
        { type: 'line', points: [[0, 18.5], [10, 45.5]], color: '#2563eb', strokeWidth: 2.5, label: 'P = 18.5 + 2.7t', labelPosition: { x: 4, y: 32 } },
        { type: 'points', points: [[0, 18.5]], color: '#1e40af' }
      ],
      textAnnotations: [
        { x: 1.5, y: 18.5, text: '(0, 18.5)', color: '#1e40af', fontSize: 9.5 }
      ]
    },
    options: [
      'population in 2020',
      'predicted population in 2027',
      'predicted annual increase of 2.7 thousand people',
      'total population increase over all years'
    ],
    correctIndex: 2,
    correctAnswerText: 'predicted annual increase of 2.7 thousand people',
    explanation: `Step-by-Step Applied Slope Interpretation:
1. In $P = 18.5 + 2.7t$, $t$ is measured in single years and $P$ is in thousands of people.
2. The coefficient of $t$ ($2.7$) is the slope, representing the rate of increase per year.
3. Therefore, $2.7$ represents the **predicted annual increase of 2.7 thousand people (2,700 people per year)**.

Teacher's SAT Pro-Tip:
Slope with units: (units of $y$) per (unit of $x$) $= 2.7$ thousand people per year.`,
    distractorExplanations: {
      0: '18.5 thousand represents the baseline population in 2020 ($t = 0$).',
      1: '2027 corresponds to $t = 7$, where $P = 18.5 + 2.7(7) = 37.4$ thousand.',
      3: '2.7 is the annual rate, not the cumulative total increase over multiple years.'
    }
  },
  {
    id: 'ch10-q59',
    number: 59,
    exerciseNumber: 2,
    exerciseTitle: 'Exercise 2: Module 2 Advanced Reasoning (Questions 41–80)',
    question: 'A linear model predicts y = 84 for a given x-value.\nThe actual observed value is y = 76.\n\nWhat is the residual?',
    diagram: {
      title: 'Observed Data Point and Model Line',
      caption: 'Data point and regression line showing predicted vs observed values.',
      xAxisLabel: 'x',
      yAxisLabel: 'y',
      xRange: [0, 10],
      yRange: [50, 100],
      xStep: 2,
      yStep: 10,
      curves: [
        { type: 'line', points: [[1, 55], [9, 95]], color: '#2563eb', strokeWidth: 2, label: 'Fitted Line', labelPosition: { x: 3, y: 70 } },
        { type: 'line', points: [[6.8, 84], [6.8, 76]], color: '#64748b', strokeWidth: 2, style: 'dashed' },
        { type: 'points', points: [[6.8, 84]], color: '#2563eb' },
        { type: 'points', points: [[6.8, 76]], color: '#dc2626' }
      ],
      textAnnotations: [
        { x: 6.8, y: 88, text: 'Predicted (84)', color: '#1e40af', fontSize: 9.5, fontWeight: '800' },
        { x: 6.8, y: 71, text: 'Actual (76)', color: '#b91c1c', fontSize: 9.5, fontWeight: '800' }
      ]
    },
    options: ['-8', '8', '76', '160'],
    correctIndex: 0,
    correctAnswerText: '-8',
    explanation: `Step-by-Step Residual Calculation:
1. Apply the formula:
   $$\\text{Residual} = \\text{Actual } y - \\text{Predicted } \\hat{y}$$

2. Substitute:
   $$\\text{Residual} = 76 - 84 = -8$$

Teacher's SAT Pro-Tip:
Actual below prediction $\\implies$ Negative residual ($-8$).`,
    distractorExplanations: {
      1: '+8 inverts the formula to Predicted - Actual.',
      2: '76 is the actual observed value.',
      3: '160 is $76 + 84$.'
    }
  },
  {
    id: 'ch10-q60',
    number: 60,
    exerciseNumber: 2,
    exerciseTitle: 'Exercise 2: Module 2 Advanced Reasoning (Questions 41–80)',
    question: 'A line of best fit is based on experimental observations with x-values from 12 through 55.\nThe model is used to predict y when x = 90.\n\nWhich statistical concern is most appropriate?',
    options: ['interpolation', 'extrapolation', 'random sampling', 'relative frequency'],
    correctIndex: 1,
    correctAnswerText: 'extrapolation',
    explanation: `Step-by-Step Extrapolation Risk:
1. The domain of observed data is $[12, 55]$.
2. Making a prediction at $x = 90$ lies well outside this domain.
3. This is **extrapolation**, which assumes the linear trend continues indefinitely and is prone to substantial error.

Teacher's SAT Pro-Tip:
Predicting outside the known data range = Extrapolation.`,
    distractorExplanations: {
      0: 'Interpolation occurs strictly within the observed range $[12, 55]$.',
      2: 'Random sampling concerns how participants are chosen.',
      3: 'Relative frequency is a proportion of categorical counts.'
    }
  },
  {
    id: 'ch10-q61',
    number: 61,
    exerciseNumber: 2,
    exerciseTitle: 'Exercise 2: Module 2 Advanced Reasoning (Questions 41–80)',
    question: 'A scatterplot contains one point far above the overall pattern.\nRemoving that single point causes the fitted line\'s slope to become much smaller.\n\nWhat is the most reasonable conclusion?',
    options: [
      'The unusual point influences the linear model.',
      'The unusual point proves causation.',
      'The unusual point makes the correlation exactly zero.',
      'The unusual point must be the median.'
    ],
    correctIndex: 0,
    correctAnswerText: 'The unusual point influences the linear model.',
    explanation: `Step-by-Step Influential Point Analysis:
1. An outlier that exerts a strong pull on the slope or intercept of a regression line is termed an **influential point**.
2. Because removing it substantially alters the slope, the point heavily influences the fitted model.

Teacher's SAT Pro-Tip:
Outliers in scatterplots can exert disproportionate leverage and influence on the line of best fit.`,
    distractorExplanations: {
      1: 'Scatterplot points never prove causation.',
      2: 'An influential point changes correlation, but does not necessarily make it zero.',
      3: 'A point in a scatterplot is an $(x, y)$ coordinate, not the univariate median.'
    }
  },
  {
    id: 'ch10-q62',
    number: 62,
    exerciseNumber: 2,
    exerciseTitle: 'Exercise 2: Module 2 Advanced Reasoning (Questions 41–80)',
    question: 'A researcher wants to estimate the average daily screen time of all students at a large high school.\n\nWhich sampling method is most appropriate?',
    options: [
      '100 students randomly selected from the school\'s full enrollment list',
      '100 students from the researcher\'s class',
      'students who volunteer after seeing an online post',
      'students leaving the computer lab'
    ],
    correctIndex: 0,
    correctAnswerText: '100 students randomly selected from the school\'s full enrollment list',
    explanation: `Step-by-Step Representative Sampling:
1. To estimate a characteristic of the entire student body without bias, every student must have an equal chance of selection.
2. A **simple random sample** selected from the comprehensive official enrollment list avoids convenience bias (such as computer lab users or classmates) and voluntary-response bias.

Teacher's SAT Pro-Tip:
Simple Random Sample from full population directory = Minimum bias.`,
    distractorExplanations: {
      1: 'Classmates are a convenience sample and share similar grade level/teachers.',
      2: 'Volunteers introduce voluntary-response bias.',
      3: 'Computer lab students likely have above-average screen time (selection bias).'
    }
  },
  {
    id: 'ch10-q63',
    number: 63,
    exerciseNumber: 2,
    exerciseTitle: 'Exercise 2: Module 2 Advanced Reasoning (Questions 41–80)',
    question: 'A survey of 1,200 randomly selected city residents estimates that 41% support a municipal proposal.\n\nWhat is the best interpretation of this result?',
    options: [
      'Exactly 41% of every resident supports the proposal.',
      'The sample proportion can be used to estimate the population proportion.',
      'The sample proves that 41% will vote for the proposal.',
      'No population inference is possible from a random sample.'
    ],
    correctIndex: 1,
    correctAnswerText: 'The sample proportion can be used to estimate the population proportion.',
    explanation: `Step-by-Step Inferential Statistics:
1. In statistics, a sample statistic (here, $\\hat{p} = 41\\%$) serves as a point estimate for the unknown true population parameter $p$.
2. It does not mean exactly 41% of the entire population agrees, but provides a statistically valid basis for estimating the population proportion with a margin of error.

Teacher's SAT Pro-Tip:
Sample statistics estimate population parameters; they do not guarantee exact identity.`,
    distractorExplanations: {
      0: 'A sample gives an estimate, not an exact count of the entire population.',
      2: 'Surveys do not "prove" future voting behavior.',
      3: 'Random samples are the primary foundation for population inference.'
    }
  },
  {
    id: 'ch10-q64',
    number: 64,
    exerciseNumber: 2,
    exerciseTitle: 'Exercise 2: Module 2 Advanced Reasoning (Questions 41–80)',
    question: 'Poll 1 reports: 53% ± 2.5%.\nPoll 2 reports: 53% ± 1.1%.\n\nWhich estimate is more precise?',
    diagram: {
      title: 'Comparing Polling Precision (Margins of Error)',
      caption: 'Visualizing margin-of-error intervals for Poll 1 and Poll 2.',
      subDiagrams: [
        {
          label: 'Poll 1 (53% ± 2.5%)',
          xAxisLabel: 'Percentage (%)',
          xRange: [48, 58],
          yRange: [0, 4],
          xStep: 2,
          yStep: 1,
          hideGrid: true,
          curves: [
            { type: 'line', points: [[49, 2], [57, 2]], color: '#64748b', strokeWidth: 1.5 },
            { type: 'line', points: [[50.5, 2], [55.5, 2]], color: '#2563eb', strokeWidth: 4 },
            { type: 'line', points: [[50.5, 1.4], [50.5, 2.6]], color: '#2563eb', strokeWidth: 2.5 },
            { type: 'line', points: [[55.5, 1.4], [55.5, 2.6]], color: '#2563eb', strokeWidth: 2.5 },
            { type: 'points', points: [[53, 2]], color: '#dc2626' }
          ],
          textAnnotations: [
            { x: 53, y: 3.2, text: '53% (MoE = ±2.5%)', color: '#1e40af', fontSize: 9.5, fontWeight: '800' }
          ]
        },
        {
          label: 'Poll 2 (53% ± 1.1%)',
          xAxisLabel: 'Percentage (%)',
          xRange: [48, 58],
          yRange: [0, 4],
          xStep: 2,
          yStep: 1,
          hideGrid: true,
          curves: [
            { type: 'line', points: [[49, 2], [57, 2]], color: '#64748b', strokeWidth: 1.5 },
            { type: 'line', points: [[51.9, 2], [54.1, 2]], color: '#16a34a', strokeWidth: 5 },
            { type: 'line', points: [[51.9, 1.4], [51.9, 2.6]], color: '#16a34a', strokeWidth: 2.5 },
            { type: 'line', points: [[54.1, 1.4], [54.1, 2.6]], color: '#16a34a', strokeWidth: 2.5 },
            { type: 'points', points: [[53, 2]], color: '#dc2626' }
          ],
          textAnnotations: [
            { x: 53, y: 3.2, text: '53% (MoE = ±1.1%)', color: '#15803d', fontSize: 9.5, fontWeight: '800' }
          ]
        }
      ]
    },
    options: ['Poll 1', 'Poll 2', 'Both are equally precise', 'Impossible to compare'],
    correctIndex: 1,
    correctAnswerText: 'Poll 2',
    explanation: `Step-by-Step Precision Comparison:
1. Precision in polling is measured by the width of the confidence interval and the magnitude of the margin of error.
2. A smaller margin of error ($\\pm 1.1\\%$) produces a narrower interval ($[51.9\\%, 54.1\\%]$) compared to $\\pm 2.5\\%$ ($[50.5\\%, 55.5\\%]$).
3. Therefore, Poll 2 provides the **more precise estimate**.

Teacher's SAT Pro-Tip:
Smaller Margin of Error $\\implies$ Higher statistical precision.`,
    distractorExplanations: {
      0: 'Poll 1 has a larger margin of error (±2.5%), making it less precise.',
      2: 'Different margins of error represent different levels of precision.',
      3: 'Margins of error can be compared directly.'
    }
  },
  {
    id: 'ch10-q65',
    number: 65,
    exerciseNumber: 2,
    exerciseTitle: 'Exercise 2: Module 2 Advanced Reasoning (Questions 41–80)',
    question: 'A random sample of 2,500 people produces an estimate with a margin of error of 2%.\nA researcher wants to achieve a smaller margin of error.\n\nWhich change is generally appropriate?',
    options: [
      'reduce the sample to 500',
      'increase the sample size',
      'remove random selection',
      'replace the sample with volunteers'
    ],
    correctIndex: 1,
    correctAnswerText: 'increase the sample size',
    explanation: `Step-by-Step Sample Size Principle:
1. The margin of error is inversely proportional to $\\sqrt{n}$:
   $$\\text{MoE} \\propto \\frac{1}{\\sqrt{n}}$$

2. To reduce the margin of error (tighten the confidence interval), the researcher must **increase the sample size $n$**.

Teacher's SAT Pro-Tip:
To decrease Margin of Error $\\to$ Increase Sample Size.`,
    distractorExplanations: {
      0: 'Reducing the sample to 500 would increase the margin of error.',
      2: 'Removing random selection destroys validity and causes bias.',
      3: 'Volunteers introduce severe bias and do not reduce margin of error.'
    }
  },
  {
    id: 'ch10-q66',
    number: 66,
    exerciseNumber: 2,
    exerciseTitle: 'Exercise 2: Module 2 Advanced Reasoning (Questions 41–80)',
    question: 'A survey randomly samples 800 registered residents from a specific state to ask whether they support a proposed state law.\n\nWhich population can the results reasonably describe?',
    options: [
      'all people worldwide',
      'all residents of the state, subject to the sampling design',
      'only the 800 selected residents',
      'only residents who answered yes'
    ],
    correctIndex: 1,
    correctAnswerText: 'all residents of the state, subject to the sampling design',
    explanation: `Step-by-Step Target Population:
1. The sampling frame consisted of registered residents from that specific state.
2. Under proper random sampling, results generalize to the entire target population: **all residents of that state**.
3. It cannot generalize to other states or worldwide.

Teacher's SAT Pro-Tip:
Inference matches the sampling boundary: State sample $\\to$ State population.`,
    distractorExplanations: {
      0: 'Worldwide generalization is an unsupported overreach.',
      2: 'Random samples generalize to the broader population, not just the 800 participants.',
      3: 'Results describe both supporters and non-supporters across the population.'
    }
  },
  {
    id: 'ch10-q67',
    number: 67,
    exerciseNumber: 2,
    exerciseTitle: 'Exercise 2: Module 2 Advanced Reasoning (Questions 41–80)',
    question: 'A researcher randomly selects 300 students from a university and then randomly assigns them to one of two different study programs.\n\nWhich combination of conclusions is statistically supported?',
    options: [
      'random sampling → generalizability only',
      'random assignment → causal inference only',
      'both generalizability (to the university) and causal inference (regarding the programs)',
      'neither generalizability nor causal inference'
    ],
    correctIndex: 2,
    correctAnswerText: 'both generalizability (to the university) and causal inference (regarding the programs)',
    explanation: `Step-by-Step Dual Statistical Design:
1. **Random Selection (Sampling)** from the university $\\implies$ Results can be **generalized** to the university student population.
2. **Random Assignment** to the study programs $\\implies$ Confounding variables are controlled, supporting **causal conclusions** about the program effect.
3. Therefore, **both** generalizability and causal inference are supported.

Teacher's SAT Pro-Tip:
The Golden Standard:
• Random Sampling $\\to$ Generalizability
• Random Assignment $\\to$ Causation
• Both present $\\to$ Generalizable Causal Inference!`,
    distractorExplanations: {
      0: 'Overlooks the causal inference enabled by random assignment.',
      1: 'Overlooks the population generalizability enabled by random sampling.',
      3: 'Both techniques were properly executed.'
    }
  },
  {
    id: 'ch10-q68',
    number: 68,
    exerciseNumber: 2,
    exerciseTitle: 'Exercise 2: Module 2 Advanced Reasoning (Questions 41–80)',
    question: 'Researchers observe that high school students who participate in music programs have higher average GPA than those who do not.\n\nWhich conclusion is NOT justified solely from this observation?',
    options: [
      'the variables are associated',
      'the two groups have different average grades',
      'music participation causes higher grades',
      'the data show a relationship worth investigating'
    ],
    correctIndex: 2,
    correctAnswerText: 'music participation causes higher grades',
    explanation: `Step-by-Step Association vs. Causation:
1. This is an **observational study** because students were not randomly assigned to participate in music programs.
2. Confounding variables (such as socioeconomic background, parental support, discipline) could explain the difference in GPA.
3. Therefore, claiming that music participation **causes** higher grades is unjustified.

Teacher's SAT Pro-Tip:
Observational studies CANNOT establish causation. Look for unjustified causal verbs like "causes", "leads to", or "produces".`,
    distractorExplanations: {
      0: 'The data legitimately establishes an association.',
      1: 'The observed difference in group sample means is a verified factual summary.',
      3: 'Observational patterns identify meaningful relationships worth further experimental study.'
    }
  },
  {
    id: 'ch10-q69',
    number: 69,
    exerciseNumber: 2,
    exerciseTitle: 'Exercise 2: Module 2 Advanced Reasoning (Questions 41–80)',
    question: 'A study compares two diets. Participants choose which diet they want to follow rather than being randomly assigned.\n\nWhy is a causal interpretation substantially weaker?',
    options: [
      'The study has no variables.',
      'Participants\' choices may be related to other characteristics that affect the outcome.',
      'The sample must contain exactly 50 people.',
      'Averages cannot be compared.'
    ],
    correctIndex: 1,
    correctAnswerText: 'Participants\' choices may be related to other characteristics that affect the outcome.',
    explanation: `Step-by-Step Self-Selection Bias & Confounding:
1. When subjects choose their own treatments (self-selection), systematic differences exist between the groups (e.g., motivation, baseline health, income, exercise habits).
2. These differences act as **confounding variables**, making it impossible to isolate whether the diet or preexisting habits caused any observed health changes.

Teacher's SAT Pro-Tip:
Self-selection introduces confounding variables that undermine causal conclusions.`,
    distractorExplanations: {
      0: 'The study contains clearly defined dietary and health variables.',
      2: 'Sample size requirements depend on statistical power, not an arbitrary 50.',
      3: 'Group averages can always be computed and compared.'
    }
  },
  {
    id: 'ch10-q70',
    number: 70,
    exerciseNumber: 2,
    exerciseTitle: 'Exercise 2: Module 2 Advanced Reasoning (Questions 41–80)',
    question: 'A researcher compares students who voluntarily use an after-school tutoring service with students who do not.\n\nWhich variable is most likely to confound the comparison?',
    options: [
      'students\' academic motivation',
      'the number of answer choices on the test',
      'the font style of the survey',
      'the unit of measurement'
    ],
    correctIndex: 0,
    correctAnswerText: 'students\' academic motivation',
    explanation: `Step-by-Step Confounding Variable Identification:
1. A **confounding variable** is associated with both the explanatory variable (choosing tutoring) and the response variable (grades).
2. Highly motivated students are more likely to seek tutoring AND more likely to spend extra time studying independently, confounding the true effect of tutoring.

Teacher's SAT Pro-Tip:
Confounders are underlying subject traits (like motivation or income) that influence both choice and outcome.`,
    distractorExplanations: {
      1: 'Answer choice counts do not explain why students seek tutoring.',
      2: 'Font style is a cosmetic artifact.',
      3: 'Units of measurement do not confound causal relationships.'
    }
  },
  {
    id: 'ch10-q71',
    number: 71,
    exerciseNumber: 2,
    exerciseTitle: 'Exercise 2: Module 2 Advanced Reasoning (Questions 41–80)',
    question: 'A school randomly selects 400 students for a wellness survey.\nOf the 400 students, 236 report exercising at least three times per week.\n\nWhat is the sample proportion?',
    options: ['0.236', '0.400', '0.590', '1.695'],
    correctIndex: 2,
    correctAnswerText: '0.590',
    explanation: `Step-by-Step Sample Proportion Calculation:
1. Recall the definition of the sample proportion $\\hat{p}$:
   $$\\hat{p} = \\frac{x}{n} = \\frac{\\text{Number of successes}}{\\text{Total sample size}}$$

2. Substitute $x = 236$ and $n = 400$:
   $$\\hat{p} = \\frac{236}{400} = \\frac{59}{100} = 0.590$$

Teacher's SAT Pro-Tip:
$\\hat{p} = \\frac{236}{400} = 0.59 = 59\\%$.`,
    distractorExplanations: {
      0: '0.236 mistakenly places 236 over 1,000.',
      1: '0.400 is the sample size 400 / 1000.',
      3: '1.695 is the inverted quotient $400 / 236$.'
    }
  },
  {
    id: 'ch10-q72',
    number: 72,
    exerciseNumber: 2,
    exerciseTitle: 'Exercise 2: Module 2 Advanced Reasoning (Questions 41–80)',
    question: 'A sample proportion is calculated as 0.64.\n\nWhich percentage is exactly equivalent?',
    options: ['6.4%', '36%', '64%', '640%'],
    correctIndex: 2,
    correctAnswerText: '64%',
    explanation: `Step-by-Step Decimal to Percentage Conversion:
1. To convert a decimal proportion to a percentage, multiply by 100:
   $$0.64 \\times 100\\% = 64\\%$$

Teacher's SAT Pro-Tip:
Proportion $0.64 = 64\\%$.`,
    distractorExplanations: {
      0: '6.4% is $0.064$.',
      1: '36% is the complement $1 - 0.64 = 0.36$.',
      3: '640% is $6.40$.'
    }
  },
  {
    id: 'ch10-q73',
    number: 73,
    exerciseNumber: 2,
    exerciseTitle: 'Exercise 2: Module 2 Advanced Reasoning (Questions 41–80)',
    question: 'A survey estimate is reported as: 72% ± 4%.\n\nWhich value is NOT inside the reported confidence interval?',
    diagram: {
      title: 'Confidence Interval Number Line',
      caption: 'Number line representation for a survey estimate of 72% with a margin of error of ±4%.',
      xAxisLabel: 'Percentage (%)',
      xRange: [65, 80],
      yRange: [0, 5],
      xStep: 2,
      yStep: 1,
      hideGrid: true,
      curves: [
        { type: 'line', points: [[66, 2.5], [79, 2.5]], color: '#64748b', strokeWidth: 1.5 },
        { type: 'line', points: [[68, 2.5], [76, 2.5]], color: '#2563eb', strokeWidth: 5 },
        { type: 'line', points: [[68, 1.8], [68, 3.2]], color: '#2563eb', strokeWidth: 3 },
        { type: 'line', points: [[76, 1.8], [76, 3.2]], color: '#2563eb', strokeWidth: 3 },
        { type: 'points', points: [[72, 2.5]], color: '#1e40af' }
      ],
      textAnnotations: [
        { x: 68, y: 1.2, text: '68%', color: '#1e40af', fontSize: 9.5, fontWeight: '800' },
        { x: 72, y: 3.8, text: '72%', color: '#1e40af', fontSize: 10, fontWeight: '800' },
        { x: 76, y: 1.2, text: '76%', color: '#1e40af', fontSize: 9.5, fontWeight: '800' }
      ]
    },
    options: ['68%', '69%', '75%', '77%'],
    correctIndex: 3,
    correctAnswerText: '77%',
    explanation: `Step-by-Step Interval Check:
1. Compute the boundary endpoints of the confidence interval:
   $$\\text{Lower Bound} = 72\\% - 4\\% = 68\\%$$
   $$\\text{Upper Bound} = 72\\% + 4\\% = 76\\%$$
   $$\\text{Interval} = [68\\%, 76\\%]$$

2. Test each option:
   • 68% is on the boundary (inside)
   • 69% is inside
   • 75% is inside
   • 77% is strictly outside ($77\\% > 76\\%$)

Teacher's SAT Pro-Tip:
The upper limit is $72 + 4 = 76\\%$. Any value above 76% (such as 77%) lies outside the interval.`,
    distractorExplanations: {
      0: '68% is the exact lower bound of the interval.',
      1: '69% lies safely between 68% and 76%.',
      2: '75% lies safely between 68% and 76%.'
    }
  },
  {
    id: 'ch10-q74',
    number: 74,
    exerciseNumber: 2,
    exerciseTitle: 'Exercise 2: Module 2 Advanced Reasoning (Questions 41–80)',
    question: 'A researcher increases a random sample from 400 people to 1,600 people.\nAssuming all other conditions remain comparable, what happens to the margin of error?',
    options: [
      'It becomes larger.',
      'It becomes smaller (specifically halves).',
      'It must become exactly zero.',
      'It becomes four times larger.'
    ],
    correctIndex: 1,
    correctAnswerText: 'It becomes smaller (specifically halves).',
    explanation: `Step-by-Step Margin of Error Formula:
1. Margin of error is proportional to $\\frac{1}{\\sqrt{n}}$.
2. Increasing the sample size by a factor of 4 ($1,600 / 400 = 4$):
   $$\\text{New MoE} = \\frac{1}{\\sqrt{4}} \\times \\text{Old MoE} = \\frac{1}{2} \\times \\text{Old MoE}$$
3. Therefore, the margin of error **becomes smaller (specifically cut in half)**.

Teacher's SAT Pro-Tip:
Quadrupling sample size ($4\\times$) halves the margin of error ($1/2\\times$).`,
    distractorExplanations: {
      0: 'Larger samples always decrease the margin of error.',
      2: 'Margin of error is never zero unless the entire population is surveyed without error.',
      3: 'It decreases, rather than quadrupling.'
    }
  },
  {
    id: 'ch10-q75',
    number: 75,
    exerciseNumber: 2,
    exerciseTitle: 'Exercise 2: Module 2 Advanced Reasoning (Questions 41–80)',
    question: 'A company claims that a new training program causes employees to work faster.\nResearchers randomly assign 200 employees to either the new program or the existing program.\n\nWhy is this randomized experimental design strong for assessing causation?',
    options: [
      'The sample is automatically representative of every worker worldwide.',
      'Random assignment helps balance other factors between groups.',
      'It guarantees every employee improves.',
      'It eliminates all measurement error.'
    ],
    correctIndex: 1,
    correctAnswerText: 'Random assignment helps balance other factors between groups.',
    explanation: `Step-by-Step Experimental Rigor:
1. **Random assignment** equalizes baseline attributes (prior experience, skill, intelligence, motivation) across the two study cohorts.
2. Any significant difference in speed at the end of the trial can be directly attributed to the training program.

Teacher's SAT Pro-Tip:
Random assignment balances lurking and confounding variables across treatment arms.`,
    distractorExplanations: {
      0: 'Random assignment does not ensure worldwide generalizability.',
      2: 'No training program guarantees 100% individual improvement.',
      3: 'Random assignment controls confounding, not measurement precision.'
    }
  },
  {
    id: 'ch10-q76',
    number: 76,
    exerciseNumber: 2,
    exerciseTitle: 'Exercise 2: Module 2 Advanced Reasoning (Questions 41–80)',
    question: 'A scatterplot of advertising spending (x) and product sales (y) shows a strong positive linear association.\n\nWhich conclusion is most statistically sound?',
    options: [
      'Advertising definitely causes all increases in sales.',
      'Sales definitely cause advertising spending.',
      'The variables are positively associated, but causation is not established by the scatterplot alone.',
      'The relationship must be negative.'
    ],
    correctIndex: 2,
    correctAnswerText: 'The variables are positively associated, but causation is not established by the scatterplot alone.',
    explanation: `Step-by-Step Scatterplot Causal Limits:
1. A scatterplot displays observational pairs $(x, y)$ and establishes the direction and strength of association.
2. It does not control for confounding factors (market demand, seasonal trends, product quality), so it **cannot establish causation on its own**.

Teacher's SAT Pro-Tip:
Correlation does not imply Causation. A strong scatterplot trend shows association only.`,
    distractorExplanations: {
      0: 'Observational scatterplots cannot prove causation.',
      1: 'Reverse causation is also unproven without an experiment.',
      3: 'The prompt specifies a positive association.'
    }
  },
  {
    id: 'ch10-q77',
    number: 77,
    exerciseNumber: 2,
    exerciseTitle: 'Exercise 2: Module 2 Advanced Reasoning (Questions 41–80)',
    question: 'A data set contains 40 observations with a mean of 28.\nA researcher discovers that one recorded value should have been 38 rather than 18.\n\nWhat happens to the mean?',
    options: ['It decreases by 0.5.', 'It increases by 0.5.', 'It increases by 20.', 'It remains unchanged.'],
    correctIndex: 1,
    correctAnswerText: 'It increases by 0.5.',
    explanation: `Step-by-Step Mean Adjustment Shortcut:
1. Determine the net change in the total sum:
   $$\\Delta \\text{Sum} = 38 - 18 = +20$$

2. Distribute the net change across all $n = 40$ observations:
   $$\\Delta \\text{Mean} = \\frac{\\Delta \\text{Sum}}{n} = \\frac{+20}{40} = +0.5$$

3. The mean increases by $0.5$ (from 28.0 to 28.5).

Teacher's SAT Pro-Tip:
Fast Mean Adjustment Shortcut: $\\Delta \\text{Mean} = \\frac{\\text{Net Change in Value}}{n} = \\frac{20}{40} = +0.5$.`,
    distractorExplanations: {
      0: 'The corrected value is larger, which increases the mean rather than decreasing it.',
      2: '20 is the change in the total sum, not the mean.',
      3: 'The mean must change when a value is adjusted.'
    }
  },
  {
    id: 'ch10-q78',
    number: 78,
    exerciseNumber: 2,
    exerciseTitle: 'Exercise 2: Module 2 Advanced Reasoning (Questions 41–80)',
    question: 'A data set contains 50 observations with a mean of 64.\nOne observation of 24 is removed from the data set.\n\nWhat is the new mean (rounded to two decimal places)?',
    options: ['64', '64.82', '65', '66'],
    correctIndex: 1,
    correctAnswerText: '64.82',
    explanation: `Step-by-Step Value Removal Calculation:
1. Compute the original total sum:
   $$\\text{Original Total} = 50 \\times 64 = 3,200$$

2. Subtract the removed observation ($24$):
   $$\\text{New Total} = 3,200 - 24 = 3,176$$

3. Update the sample size ($n_{\\text{new}} = 50 - 1 = 49$):
   $$\\text{New Mean} = \\frac{3,176}{49} \\approx 64.8163 \\approx 64.82$$

Teacher's SAT Pro-Tip:
Removing a value below the mean ($24 < 64$) pulls the remaining average UP to $64.82$.`,
    distractorExplanations: {
      0: '64 assumes removing an outlier leaves the mean unchanged.',
      2: '65 is a crude rounding.',
      3: '66 is an overestimation.'
    }
  },
  {
    id: 'ch10-q79',
    number: 79,
    exerciseNumber: 2,
    exerciseTitle: 'Exercise 2: Module 2 Advanced Reasoning (Questions 41–80)',
    question: 'Two data sets have identical values except that every value in Data Set B is 100 greater than the corresponding value in Data Set A.\n\nWhich statement must be true?',
    options: [
      'B has greater standard deviation.',
      'B has greater range.',
      'B has the same standard deviation and range as A.',
      'B has smaller median.'
    ],
    correctIndex: 2,
    correctAnswerText: 'B has the same standard deviation and range as A.',
    explanation: `Step-by-Step Constant Shift Properties:
1. Adding a constant ($+100$) shifts every data point equally along the number line.
2. The relative distances between points are preserved, meaning the standard deviation, variance, range, and IQR remain **strictly identical**.
3. The mean and median increase by 100.

Teacher's SAT Pro-Tip:
$\\text{Spread}(A + c) = \\text{Spread}(A)$. Standard deviation and range are unchanged!`,
    distractorExplanations: {
      0: 'Standard deviation is unchanged by a constant shift.',
      1: 'Range is unchanged by a constant shift.',
      3: 'The median of B is 100 greater than the median of A.'
    }
  },
  {
    id: 'ch10-q80',
    number: 80,
    exerciseNumber: 2,
    exerciseTitle: 'Exercise 2: Module 2 Advanced Reasoning (Questions 41–80)',
    question: 'A random sample of 1,000 residents produces an estimated support of 57% for a city project with a margin of error of 3 percentage points.\n\nWhich statement is most appropriate?',
    diagram: {
      title: 'Survey Estimate and Margin of Error',
      caption: 'Visualizing survey point estimate with margin-of-error bounds.',
      xAxisLabel: 'Percentage of Population Support (%)',
      xRange: [50, 65],
      yRange: [0, 4],
      xStep: 2,
      yStep: 1,
      hideGrid: true,
      curves: [
        { type: 'line', points: [[51, 2], [64, 2]], color: '#64748b', strokeWidth: 1.5 },
        { type: 'line', points: [[54, 2], [60, 2]], color: '#2563eb', strokeWidth: 5 },
        { type: 'line', points: [[54, 1.4], [54, 2.6]], color: '#2563eb', strokeWidth: 3 },
        { type: 'line', points: [[60, 1.4], [60, 2.6]], color: '#2563eb', strokeWidth: 3 },
        { type: 'points', points: [[57, 2]], color: '#dc2626' }
      ],
      textAnnotations: [
        { x: 57, y: 3.2, text: 'Estimate: 57%', color: '#b91c1c', fontSize: 10.5, fontWeight: '800' },
        { x: 57, y: 1.2, text: 'Margin of Error: ±3%', color: '#64748b', fontSize: 9.5 }
      ]
    },
    options: [
      'Exactly 57% of the entire population supports the proposal.',
      'The population support is estimated to be around 54%–60% under the stated margin-of-error interpretation.',
      'Exactly 60% support the proposal.',
      'The margin of error means that 3% of participants answered incorrectly.'
    ],
    correctIndex: 1,
    correctAnswerText: 'The population support is estimated to be around 54%–60% under the stated margin-of-error interpretation.',
    explanation: `Step-by-Step Margin of Error Interpretation:
1. The survey gives a point estimate $\\hat{p} = 57\\%$ with a margin of error $\\text{MoE} = \\pm 3\\%$.
2. This establishes a confidence interval for the true population proportion:
   $$[57\\% - 3\\%, 57\\% + 3\\%] = [54\\%, 60\\%]$$
3. It estimates that the true population support is likely between 54% and 60%.

Teacher's SAT Pro-Tip:
Margin of error provides a plausible interval $[54\\%, 60\\%]$ for the true population parameter.`,
    distractorExplanations: {
      0: 'A sample gives an interval estimate, not an exact point guarantee.',
      2: '60% is only the upper bound of the interval.',
      3: 'Margin of error reflects sampling variability, not survey participant mistakes.'
    }
  }
];
