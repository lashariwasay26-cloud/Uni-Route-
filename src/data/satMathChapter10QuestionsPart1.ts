import { MathExerciseQuestion } from './satMathConcepts';

export const CHAPTER_10_QUESTIONS_PART_1: MathExerciseQuestion[] = [
  {
    id: 'ch10-q1',
    number: 1,
    exerciseNumber: 1,
    exerciseTitle: 'Exercise 1: Module 1 Foundations (Questions 1–40)',
    question: 'The numbers 6, 9, 11, 14, and 20 have what mean?',
    options: ['10', '11', '12', '13'],
    correctIndex: 2,
    correctAnswerText: '12',
    explanation: `Step-by-Step Solution:
1. Recall the definition of the arithmetic mean:
   $$\\text{Mean} = \\frac{\\text{Sum of all values}}{\\text{Number of values}}$$

2. Sum the five given values:
   $$\\text{Sum} = 6 + 9 + 11 + 14 + 20 = 60$$

3. Divide by the count of observations ($n = 5$):
   $$\\text{Mean} = \\frac{60}{5} = 12$$

Teacher's SAT Pro-Tip:
Master formula: $\\text{Total} = \\text{Mean} \\times n$. Here, $12 \\times 5 = 60$.`,
    distractorExplanations: {
      0: '10 is the result of dividing 50 by 5 (an addition error).',
      1: '11 is the median of this data set, not the mean.',
      3: '13 is an arithmetic calculation error ($65/5$).'
    }
  },
  {
    id: 'ch10-q2',
    number: 2,
    exerciseNumber: 1,
    exerciseTitle: 'Exercise 1: Module 1 Foundations (Questions 1–40)',
    question: 'A set of 8 numbers has a mean of 17.\n\nWhat is the sum of the 8 numbers?',
    options: ['25', '136', '144', '160'],
    correctIndex: 1,
    correctAnswerText: '136',
    explanation: `Step-by-Step Solution:
1. Use the Master Average-to-Total equation:
   $$\\text{Total} = \\text{Mean} \\times \\text{Number of observations}$$

2. Multiply the mean ($17$) by the count ($8$):
   $$\\text{Total} = 17 \\times 8 = 136$$

Teacher's SAT Pro-Tip:
Always convert a known mean directly into a total immediately: $\\text{Sum} = 17 \\times 8 = 136$.`,
    distractorExplanations: {
      0: '25 is the simple sum $17 + 8$, which is meaningless in statistics.',
      2: '144 is $18 \\times 8$.',
      3: '160 is $20 \\times 8$.'
    }
  },
  {
    id: 'ch10-q3',
    number: 3,
    exerciseNumber: 1,
    exerciseTitle: 'Exercise 1: Module 1 Foundations (Questions 1–40)',
    question: 'The mean of five numbers is 24. Four of the numbers are 17, 21, 28, and 30.\n\nWhat is the fifth number?',
    options: ['24', '28', '34', '36'],
    correctIndex: 2,
    correctAnswerText: '34',
    explanation: `Step-by-Step Solution:
1. Find the required total for all 5 numbers:
   $$\\text{Required Total} = 5 \\times 24 = 120$$

2. Sum the four known numbers:
   $$\\text{Known Sum} = 17 + 21 + 28 + 30 = 96$$

3. Subtract the known sum from the required total to find the missing value:
   $$\\text{Fifth Number} = 120 - 96 = 34$$

Teacher's SAT Pro-Tip:
Unknown value shortcut: $\\text{Unknown} = \\text{Required Total} - \\text{Known Total} = 120 - 96 = 34$.`,
    distractorExplanations: {
      0: '24 is the mean of the numbers.',
      1: '28 is one of the given numbers.',
      3: '36 comes from an arithmetic subtraction mistake ($120 - 84$).'
    }
  },
  {
    id: 'ch10-q4',
    number: 4,
    exerciseNumber: 1,
    exerciseTitle: 'Exercise 1: Module 1 Foundations (Questions 1–40)',
    question: 'What is the median of: 4, 17, 9, 12, 5, 20, 8?',
    options: ["8 values","9 values","10 values","12 values"],
    correctIndex: 1,
    correctAnswerText: "9 values",
    explanation: `Step-by-Step Solution:
1. Order the data set in ascending order:
   $$4, 5, 8, 9, 12, 17, 20$$

2. Count the number of observations ($n = 7$, an odd number).
3. The median is the single middle value (the 4th value):
   $$\\text{Position} = \\frac{7+1}{2} = 4\\text{th value} \\implies 9$$

Teacher's SAT Pro-Tip:
SAT Warning: Never pick the middle number of an unorganized list! Always sort from smallest to largest first.`,
    distractorExplanations: {
      0: '8 is the 3rd ordered value.',
      2: '10 is the arithmetic mean of the data ($(75)/7 \\approx 10.7$).',
      3: '12 is the unorganized middle number in the original prompt string.'
    }
  },
  {
    id: 'ch10-q5',
    number: 5,
    exerciseNumber: 1,
    exerciseTitle: 'Exercise 1: Module 1 Foundations (Questions 1–40)',
    question: 'What is the range of: 13, 18, 22, 31, 35?',
    options: ['18', '20', '22', '48'],
    correctIndex: 2,
    correctAnswerText: '22',
    explanation: `Step-by-Step Solution:
1. Identify the maximum and minimum values in the data set:
   $$\\text{Maximum} = 35$$
   $$\\text{Minimum} = 13$$

2. Calculate range:
   $$\\text{Range} = \\text{Maximum} - \\text{Minimum} = 35 - 13 = 22$$

Teacher's SAT Pro-Tip:
Range is purely a measure of total spread: $\\text{Max} - \\text{Min}$.`,
    distractorExplanations: {
      0: '18 is the second value or an arithmetic error.',
      1: '20 is $31 - 11$.',
      3: '48 is the sum $35 + 13$, adding instead of subtracting.'
    }
  },
  {
    id: 'ch10-q6',
    number: 6,
    exerciseNumber: 1,
    exerciseTitle: 'Exercise 1: Module 1 Foundations (Questions 1–40)',
    question: 'Which value is the mode of: 2, 5, 7, 5, 9, 5, 11, 7?',
    options: ['2', '5', '7', '11'],
    correctIndex: 1,
    correctAnswerText: '5',
    explanation: `Step-by-Step Solution:
1. Count the frequency of each distinct value in the data set:
   • 2 appears 1 time
   • 5 appears 3 times
   • 7 appears 2 times
   • 9 appears 1 time
   • 11 appears 1 time

2. The mode is the value with the highest frequency:
   $$\\text{Mode} = 5 \\text{ (frequency of 3)}$$

Teacher's SAT Pro-Tip:
The mode is simply the most frequently occurring value in the distribution.`,
    distractorExplanations: {
      0: '2 appears only once.',
      2: '7 appears twice, which is fewer times than 5 (which appears 3 times).',
      3: '11 appears only once.'
    }
  },
  {
    id: 'ch10-q7',
    number: 7,
    exerciseNumber: 1,
    exerciseTitle: 'Exercise 1: Module 1 Foundations (Questions 1–40)',
    question: 'Every value in a data set is increased by 6.\n\nIf the original median is 21, what is the new median?',
    options: ['15', '21', '27', '126'],
    correctIndex: 2,
    correctAnswerText: '27',
    explanation: `Step-by-Step Solution:
1. Recall the effect of adding a constant $c$ to every value in a distribution:
   $$\\text{New Median} = \\text{Old Median} + c$$

2. Substitute the original median ($21$) and $c = 6$:
   $$\\text{New Median} = 21 + 6 = 27$$

Teacher's SAT Pro-Tip:
Adding a constant shifts all measures of center (mean, median, mode) by that exact constant: $21 + 6 = 27$.`,
    distractorExplanations: {
      0: '15 is $21 - 6$, subtracting instead of adding.',
      1: '21 assumes measures of center do not change when a constant is added.',
      3: '126 is $21 \\times 6$, multiplying instead of adding.'
    }
  },
  {
    id: 'ch10-q8',
    number: 8,
    exerciseNumber: 1,
    exerciseTitle: 'Exercise 1: Module 1 Foundations (Questions 1–40)',
    question: 'Every value in a data set is increased by 9.\n\nIf the original range is 24, what is the new range?',
    options: ['15', '24', '33', '216'],
    correctIndex: 1,
    correctAnswerText: '24',
    explanation: `Step-by-Step Solution:
1. Let the original minimum and maximum be $\\text{Min}$ and $\\text{Max}$.
   $$\\text{Original Range} = \\text{Max} - \\text{Min} = 24$$

2. When every value increases by 9:
   $$\\text{New Max} = \\text{Max} + 9$$
   $$\\text{New Min} = \\text{Min} + 9$$

3. Compute the new range:
   $$\\text{New Range} = (\\text{Max} + 9) - (\\text{Min} + 9) = \\text{Max} - \\text{Min} = 24$$

Teacher's SAT Pro-Tip:
Adding or subtracting a constant shifts all points equally, leaving all measures of spread (range, IQR, standard deviation) completely UNCHANGED!`,
    distractorExplanations: {
      0: '15 is $24 - 9$.',
      2: '33 is $24 + 9$, mistakenly adding the constant to a measure of spread.',
      3: '216 is $24 \\times 9$.'
    }
  },
  {
    id: 'ch10-q9',
    number: 9,
    exerciseNumber: 1,
    exerciseTitle: 'Exercise 1: Module 1 Foundations (Questions 1–40)',
    question: 'Every value in a data set is multiplied by 5.\nThe original standard deviation is 2.4.\n\nWhat is the new standard deviation?',
    options: ['0.48', '2.4', '7.4', '12'],
    correctIndex: 3,
    correctAnswerText: '12',
    explanation: `Step-by-Step Solution:
1. Recall the effect of multiplying every observation in a distribution by a positive constant $c$:
   $$\\text{New Standard Deviation} = c \\times (\\text{Old Standard Deviation})$$

2. Substitute $c = 5$ and original $\\text{SD} = 2.4$:
   $$\\text{New Standard Deviation} = 5 \\times 2.4 = 12$$

Teacher's SAT Pro-Tip:
Multiplication expands the spread: $\\text{New SD} = |c| \\times \\text{Old SD} = 5 \\times 2.4 = 12$.`,
    distractorExplanations: {
      0: '0.48 is $2.4 / 5$.',
      1: '2.4 assumes multiplication does not alter standard deviation.',
      2: '7.4 is $2.4 + 5$, adding instead of multiplying.'
    }
  },
  {
    id: 'ch10-q10',
    number: 10,
    exerciseNumber: 1,
    exerciseTitle: 'Exercise 1: Module 1 Foundations (Questions 1–40)',
    question: 'A class of 20 students has an average score of 74.\n\nWhat is the total of all 20 scores?',
    options: ['94', '1,480', '1,500', '1,540'],
    correctIndex: 1,
    correctAnswerText: '1,480',
    explanation: `Step-by-Step Solution:
1. Apply the fundamental Total formula:
   $$\\text{Total} = \\text{Mean} \\times n$$

2. Calculate:
   $$\\text{Total} = 74 \\times 20 = 1,480$$

Teacher's SAT Pro-Tip:
Convert averages to totals immediately: $74 \\times 20 = 1,480$.`,
    distractorExplanations: {
      0: '94 is $74 + 20$.',
      2: '1,500 is $75 \\times 20$.',
      3: '1,540 is $77 \\times 20$.'
    }
  },
  {
    id: 'ch10-q11',
    number: 11,
    exerciseNumber: 1,
    exerciseTitle: 'Exercise 1: Module 1 Foundations (Questions 1–40)',
    question: 'Group A contains 10 students with a mean score of 70.\nGroup B contains 30 students with a mean score of 80.\n\nWhat is the combined mean?',
    options: ['75', '77.5', '78', '79'],
    correctIndex: 1,
    correctAnswerText: '77.5',
    explanation: `Step-by-Step Solution:
1. Calculate the total score for Group A:
   $$\\text{Total}_A = 10 \\times 70 = 700$$

2. Calculate the total score for Group B:
   $$\\text{Total}_B = 30 \\times 80 = 2,400$$

3. Find the grand total score and total student count:
   $$\\text{Grand Total} = 700 + 2,400 = 3,100$$
   $$\\text{Total Students} = 10 + 30 = 40$$

4. Calculate the weighted combined mean:
   $$\\text{Combined Mean} = \\frac{3,100}{40} = 77.5$$

Teacher's SAT Pro-Tip:
Never simply average the two group means ($(70 + 80)/2 = 75$) when group sizes are unequal! Group B has 3 times as many students, pulling the average much closer to 80 ($77.5$).`,
    distractorExplanations: {
      0: '75 is the unweighted average $(70 + 80)/2$, ignoring the fact that Group B is 3 times larger.',
      2: '78 is an arithmetic approximation.',
      3: '79 is an overestimation.'
    }
  },
  {
    id: 'ch10-q12',
    number: 12,
    exerciseNumber: 1,
    exerciseTitle: 'Exercise 1: Module 1 Foundations (Questions 1–40)',
    question: 'The frequency dot plot below shows the distribution of counts for different data values.\n\nHow many observations are represented in total?',
    diagram: {
      title: 'Frequency Dot Plot',
      caption: 'Frequency dot plot showing data values and their counts.',
      xAxisLabel: 'Data Value (x)',
      yAxisLabel: 'Count / Frequency',
      xRange: [0, 9],
      yRange: [0, 8],
      xStep: 1,
      yStep: 1,
      hideGrid: true,
      curves: [
        { type: 'line', points: [[0.5, 0], [8.5, 0]], color: '#0f172a', strokeWidth: 2 },
        // x = 2: 4 dots
        { type: 'points', points: [[2, 1], [2, 2], [2, 3], [2, 4]], color: '#2563eb' },
        // x = 4: 6 dots
        { type: 'points', points: [[4, 1], [4, 2], [4, 3], [4, 4], [4, 5], [4, 6]], color: '#2563eb' },
        // x = 7: 5 dots
        { type: 'points', points: [[7, 1], [7, 2], [7, 3], [7, 4], [7, 5]], color: '#2563eb' }
      ]
    },
    options: ['11', '15', '17', '35'],
    correctIndex: 1,
    correctAnswerText: '15',
    explanation: `Step-by-Step Solution:
1. Total observations is the sum of all frequencies in the frequency column:
   $$\\text{Total Observations} = \\sum f = 4 + 6 + 5 = 15$$

Teacher's SAT Pro-Tip:
Total observations = sum of the frequency column ($4 + 6 + 5 = 15$).`,
    distractorExplanations: {
      0: '11 is an incomplete sum ($5 + 6$).',
      2: '17 is an addition mistake.',
      3: '35 is an arbitrary number.'
    }
  },
  {
    id: 'ch10-q13',
    number: 13,
    exerciseNumber: 1,
    exerciseTitle: 'Exercise 1: Module 1 Foundations (Questions 1–40)',
    question: 'Using the distribution shown in the dot plot from Question 12, what is the total sum of all observations?',
    diagram: {
      title: 'Frequency Distribution Display',
      caption: 'Frequency dot plot representing the data distribution.',
      xAxisLabel: 'Data Value (x)',
      yAxisLabel: 'Count / Frequency',
      xRange: [0, 9],
      yRange: [0, 8],
      xStep: 1,
      yStep: 1,
      hideGrid: true,
      curves: [
        { type: 'line', points: [[0.5, 0], [8.5, 0]], color: '#0f172a', strokeWidth: 2 },
        { type: 'points', points: [[2, 1], [2, 2], [2, 3], [2, 4]], color: '#2563eb' },
        { type: 'points', points: [[4, 1], [4, 2], [4, 3], [4, 4], [4, 5], [4, 6]], color: '#2563eb' },
        { type: 'points', points: [[7, 1], [7, 2], [7, 3], [7, 4], [7, 5]], color: '#2563eb' }
      ]
    },
    options: ['15', '45', '67', '75'],
    correctIndex: 2,
    correctAnswerText: '67',
    explanation: `Step-by-Step Solution:
1. Multiply each value by its corresponding frequency:
   • For value 2: $2 \\times 4 = 8$
   • For value 4: $4 \\times 6 = 24$
   • For value 7: $7 \\times 5 = 35$

2. Sum the weighted products:
   $$\\text{Total Sum} = 8 + 24 + 35 = 67$$

Teacher's SAT Pro-Tip:
Multiply each value by its frequency and sum: $2(4) + 4(6) + 7(5) = 8 + 24 + 35 = 67$.`,
    distractorExplanations: {
      0: '15 is the total frequency, not the total sum of the values.',
      1: '45 is an arithmetic calculation error.',
      3: '75 is an arithmetic mistake.'
    }
  },
  {
    id: 'ch10-q14',
    number: 14,
    exerciseNumber: 1,
    exerciseTitle: 'Exercise 1: Module 1 Foundations (Questions 1–40)',
    question: 'Using the same frequency distribution from Question 12, what is the mean of the data set?',
    diagram: {
      title: 'Frequency Distribution Display',
      caption: 'Frequency dot plot for the data distribution.',
      xAxisLabel: 'Data Value (x)',
      yAxisLabel: 'Count / Frequency',
      xRange: [0, 9],
      yRange: [0, 8],
      xStep: 1,
      yStep: 1,
      hideGrid: true,
      curves: [
        { type: 'line', points: [[0.5, 0], [8.5, 0]], color: '#0f172a', strokeWidth: 2 },
        { type: 'points', points: [[2, 1], [2, 2], [2, 3], [2, 4]], color: '#2563eb' },
        { type: 'points', points: [[4, 1], [4, 2], [4, 3], [4, 4], [4, 5], [4, 6]], color: '#2563eb' },
        { type: 'points', points: [[7, 1], [7, 2], [7, 3], [7, 4], [7, 5]], color: '#2563eb' }
      ]
    },
    options: ['4', '4.47', '5', '5.67'],
    correctIndex: 1,
    correctAnswerText: '4.47',
    explanation: `Step-by-Step Solution:
1. From Questions 12 and 13:
   $$\\text{Total Sum} = 67$$
   $$\\text{Total Observations } n = 15$$

2. Calculate the weighted mean:
   $$\\text{Mean} = \\frac{67}{15} \\approx 4.4667 \\approx 4.47$$

Teacher's SAT Pro-Tip:
$\\text{Mean} = \\frac{\\sum (\\text{value} \\times \\text{frequency})}{\\text{total frequency}} = \\frac{67}{15} \\approx 4.47$.`,
    distractorExplanations: {
      0: '4 is the middle value in the value column, which ignores frequencies.',
      2: '5 is $(2 + 4 + 7)/3 = 13/3 \\approx 4.33$ rounded to 5.',
      3: '5.67 is an arithmetic division error.'
    }
  },
  {
    id: 'ch10-q15',
    number: 15,
    exerciseNumber: 1,
    exerciseTitle: 'Exercise 1: Module 1 Foundations (Questions 1–40)',
    question: 'The box plot below summarizes a data set.\n\nWhat is the interquartile range (IQR) of the data set?',
    diagram: {
      title: 'Five-Number Summary Box Plot',
      caption: 'Box plot showing Minimum, Q1, Median, Q3, and Maximum values.',
      xAxisLabel: 'Value (x)',
      xRange: [0, 48],
      yRange: [0, 4],
      xStep: 5,
      yStep: 1,
      hideGrid: true,
      curves: [
        { type: 'line', points: [[8, 2], [15, 2]], color: '#0f172a', strokeWidth: 2 },
        { type: 'line', points: [[8, 1.4], [8, 2.6]], color: '#0f172a', strokeWidth: 2 },
        { type: 'line', points: [[15, 1], [15, 3], [31, 3], [31, 1], [15, 1]], color: '#2563eb', strokeWidth: 2.5, shade: 'below', shadeColor: 'rgba(59, 130, 246, 0.25)' },
        { type: 'line', points: [[22, 1], [22, 3]], color: '#1d4ed8', strokeWidth: 3 },
        { type: 'line', points: [[31, 2], [40, 2]], color: '#0f172a', strokeWidth: 2 },
        { type: 'line', points: [[40, 1.4], [40, 2.6]], color: '#0f172a', strokeWidth: 2 }
      ],
      textAnnotations: [
        { x: 8, y: 0.8, text: 'Min: 8', fontSize: 9.5, color: '#334155' },
        { x: 15, y: 3.4, text: 'Q1: 15', fontSize: 10, color: '#1d4ed8', fontWeight: '800' },
        { x: 22, y: 0.8, text: 'Med: 22', fontSize: 10.5, color: '#0f172a', fontWeight: '800' },
        { x: 31, y: 3.4, text: 'Q3: 31', fontSize: 10, color: '#1d4ed8', fontWeight: '800' },
        { x: 40, y: 0.8, text: 'Max: 40', fontSize: 9.5, color: '#334155' }
      ]
    },
    options: ['16', '23', '25', '32'],
    correctIndex: 0,
    correctAnswerText: '16',
    explanation: `Step-by-Step Solution:
1. Recall the definition of the Interquartile Range:
   $$\\text{IQR} = Q_3 - Q_1$$

2. Substitute the given quartiles:
   $$\\text{IQR} = 31 - 15 = 16$$

Teacher's SAT Pro-Tip:
$\\text{IQR} = Q_3 - Q_1 = 31 - 15 = 16$. Do not confuse IQR with Range ($\\text{Max} - \\text{Min} = 40 - 8 = 32$).`,
    distractorExplanations: {
      1: '23 is $\\text{Median} - \\text{Minimum} = 22 - 8 = 14$ or an arithmetic error.',
      2: '25 is an arithmetic error.',
      3: '32 is the full range $\\text{Maximum} - \\text{Minimum} = 40 - 8 = 32$.'
    }
  },
  {
    id: 'ch10-q16',
    number: 16,
    exerciseNumber: 1,
    exerciseTitle: 'Exercise 1: Module 1 Foundations (Questions 1–40)',
    question: 'The box plot below summarizes a distribution.\n\nWhat is its interquartile range (IQR)?',
    diagram: {
      title: 'Box Plot Quartile Width',
      caption: 'Box plot display showing quartiles and median.',
      xAxisLabel: 'Value (x)',
      xRange: [0, 42],
      yRange: [0, 4],
      xStep: 5,
      yStep: 1,
      hideGrid: true,
      curves: [
        { type: 'line', points: [[4, 2], [12, 2]], color: '#0f172a', strokeWidth: 2 },
        { type: 'line', points: [[4, 1.4], [4, 2.6]], color: '#0f172a', strokeWidth: 2 },
        { type: 'line', points: [[12, 1], [12, 3], [28, 3], [28, 1], [12, 1]], color: '#2563eb', strokeWidth: 2.5, shade: 'below', shadeColor: 'rgba(59, 130, 246, 0.25)' },
        { type: 'line', points: [[20, 1], [20, 3]], color: '#1d4ed8', strokeWidth: 3 },
        { type: 'line', points: [[28, 2], [36, 2]], color: '#0f172a', strokeWidth: 2 },
        { type: 'line', points: [[36, 1.4], [36, 2.6]], color: '#0f172a', strokeWidth: 2 }
      ],
      textAnnotations: [
        { x: 12, y: 3.4, text: 'Q1 = 12', fontSize: 10, color: '#1d4ed8', fontWeight: '800' },
        { x: 20, y: 0.8, text: 'Median = 20', fontSize: 10, color: '#0f172a' },
        { x: 28, y: 3.4, text: 'Q3 = 28', fontSize: 10, color: '#1d4ed8', fontWeight: '800' }
      ]
    },
    options: ['14', '16', '20', '40'],
    correctIndex: 1,
    correctAnswerText: '16',
    explanation: `Step-by-Step Solution:
1. Apply the formula:
   $$\\text{IQR} = Q_3 - Q_1$$

2. Calculate:
   $$\\text{IQR} = 28 - 12 = 16$$

Teacher's SAT Pro-Tip:
The IQR represents the width of the central box in a box plot: $28 - 12 = 16$.`,
    distractorExplanations: {
      0: '14 is an arithmetic error.',
      2: '20 is $(12 + 28)/2 = 20$, the midpoint of the box.',
      3: '40 is $12 + 28$, adding quartiles instead of subtracting.'
    }
  },
  {
    id: 'ch10-q17',
    number: 17,
    exerciseNumber: 1,
    exerciseTitle: 'Exercise 1: Module 1 Foundations (Questions 1–40)',
    question: 'Which measure describes the middle value of an ordered data set?',
    options: ['mean', 'median', 'range', 'standard deviation'],
    correctIndex: 1,
    correctAnswerText: 'median',
    explanation: `Step-by-Step Conceptual Analysis:
1. The **median** is defined as the central value that splits an ordered data set into two equal halves.
2. The mean is the arithmetic average (balance point).
3. The range and standard deviation are measures of spread, not center.

Teacher's SAT Pro-Tip:
Median = the physical middle observation of sorted data.`,
    distractorExplanations: {
      0: 'The mean is the arithmetic balance point (sum divided by count).',
      2: 'Range is a measure of spread (max - min).',
      3: 'Standard deviation is a measure of dispersion around the mean.'
    }
  },
  {
    id: 'ch10-q18',
    number: 18,
    exerciseNumber: 1,
    exerciseTitle: 'Exercise 1: Module 1 Foundations (Questions 1–40)',
    question: 'Which measure is most directly affected by an extremely large outlier?',
    options: ['mean', 'median', 'quartile position', 'category count'],
    correctIndex: 0,
    correctAnswerText: 'mean',
    explanation: `Step-by-Step Conceptual Analysis:
1. The **mean** incorporates every single value into its calculation, making it non-resistant (highly sensitive) to extreme outliers.
2. The median and quartiles depend only on positional ranking and are resistant to extreme outliers.

Teacher's SAT Pro-Tip:
Outlier Sensitivity:
• Non-resistant (strongly affected): Mean, Range, Standard Deviation
• Resistant (minimally affected): Median, IQR`,
    distractorExplanations: {
      1: 'The median is resistant to extreme outliers because it depends on position.',
      2: 'Quartiles are resistant to extreme values.',
      3: 'Category count describes categorical frequencies.'
    }
  },
  {
    id: 'ch10-q19',
    number: 19,
    exerciseNumber: 1,
    exerciseTitle: 'Exercise 1: Module 1 Foundations (Questions 1–40)',
    question: 'The histogram below displays a frequency distribution across class intervals.\n\nWhich interval contains the greatest frequency?',
    diagram: {
      title: 'Interval Frequency Histogram',
      caption: 'Histogram displaying frequency distribution across score intervals.',
      xAxisLabel: 'Interval Class',
      yAxisLabel: 'Frequency',
      xRange: [-5, 55],
      yRange: [0, 18],
      xStep: 10,
      yStep: 3,
      hideGrid: true,
      curves: [
        // 0-9 bar (f=4)
        { type: 'line', points: [[0, 0], [0, 4], [10, 4], [10, 0]], color: '#2563eb', strokeWidth: 1.5, shade: 'below', shadeColor: 'rgba(59, 130, 246, 0.25)' },
        // 10-19 bar (f=9)
        { type: 'line', points: [[10, 0], [10, 9], [20, 9], [20, 0]], color: '#2563eb', strokeWidth: 1.5, shade: 'below', shadeColor: 'rgba(59, 130, 246, 0.25)' },
        // 20-29 bar (f=15)
        { type: 'line', points: [[20, 0], [20, 15], [30, 15], [30, 0]], color: '#2563eb', strokeWidth: 1.5, shade: 'below', shadeColor: 'rgba(59, 130, 246, 0.25)' },
        // 30-39 bar (f=8)
        { type: 'line', points: [[30, 0], [30, 8], [40, 8], [40, 0]], color: '#2563eb', strokeWidth: 1.5, shade: 'below', shadeColor: 'rgba(59, 130, 246, 0.25)' },
        // 40-49 bar (f=3)
        { type: 'line', points: [[40, 0], [40, 3], [50, 3], [50, 0]], color: '#2563eb', strokeWidth: 1.5, shade: 'below', shadeColor: 'rgba(59, 130, 246, 0.25)' }
      ],
      textAnnotations: [
        { x: 5, y: 5.2, text: '4', color: '#1e40af', fontSize: 9.5 },
        { x: 15, y: 10.2, text: '9', color: '#1e40af', fontSize: 9.5 },
        { x: 25, y: 16.2, text: '15', color: '#1e40af', fontSize: 9.5 },
        { x: 35, y: 9.2, text: '8', color: '#1e40af', fontSize: 9.5 },
        { x: 45, y: 4.2, text: '3', color: '#1e40af', fontSize: 9.5 }
      ]
    },
    options: ['0–9', '10–19', '20–29', '30–39'],
    correctIndex: 2,
    correctAnswerText: '20–29',
    explanation: `Step-by-Step Solution:
1. Examine the frequencies for each interval:
   • 0–9: frequency 4
   • 10–19: frequency 9
   • 20–29: frequency 15 (Highest)
   • 30–39: frequency 8
   • 40–49: frequency 3

2. The interval with the greatest frequency (tallest bar) is 20–29 with 15 observations.

Teacher's SAT Pro-Tip:
On a histogram, the tallest bar represents the modal interval with the highest frequency.`,
    distractorExplanations: {
      0: '0–9 has a frequency of only 4.',
      1: '10–19 has a frequency of 9.',
      3: '30–39 has a frequency of 8.'
    }
  },
  {
    id: 'ch10-q20',
    number: 20,
    exerciseNumber: 1,
    exerciseTitle: 'Exercise 1: Module 1 Foundations (Questions 1–40)',
    question: 'What type of graph is most appropriate for displaying how many students selected each of five different school clubs?',
    options: ['bar graph', 'scatterplot', 'boxplot', 'histogram'],
    correctIndex: 0,
    correctAnswerText: 'bar graph',
    explanation: `Step-by-Step Conceptual Analysis:
1. School clubs (e.g., Chess, Art, Robotics, Drama, Debate) represent **categorical data** (discrete non-numeric groups).
2. A **bar graph** is designed specifically to compare counts or percentages across distinct categories.
3. Histograms and boxplots are used for continuous numerical data, and scatterplots display bivariate relationships $(x, y)$.

Teacher's SAT Pro-Tip:
Categorical data $\\to$ Bar Graph. Numerical continuous intervals $\\to$ Histogram.`,
    distractorExplanations: {
      1: 'Scatterplots require two quantitative numerical variables $(x, y)$.',
      2: 'Box plots display the five-number summary of continuous numerical data.',
      3: 'Histograms group continuous numerical data into numeric bins/intervals.'
    }
  },
  {
    id: 'ch10-q21',
    number: 21,
    exerciseNumber: 1,
    exerciseTitle: 'Exercise 1: Module 1 Foundations (Questions 1–40)',
    question: 'A distribution has a long tail toward larger values.\n\nWhich description is most appropriate?',
    diagram: {
      title: 'Distribution Shape',
      caption: 'Continuous curve illustrating the distribution profile of a data set.',
      xAxisLabel: 'Value (x)',
      yAxisLabel: 'Relative Frequency',
      xRange: [0, 50],
      yRange: [0, 8],
      xStep: 10,
      yStep: 2,
      hideGrid: true,
      curves: [
        {
          type: 'function',
          points: [
            [2, 0.2], [5, 2.5], [10, 7.2], [14, 6.8], [20, 4.0],
            [28, 2.0], [38, 0.8], [48, 0.2]
          ],
          color: '#2563eb',
          strokeWidth: 2.5,
          shade: 'below',
          shadeColor: 'rgba(59, 130, 246, 0.2)'
        }
      ],
      textAnnotations: []
    },
    options: ['left-skewed', 'right-skewed', 'symmetric', 'uniform'],
    correctIndex: 1,
    correctAnswerText: 'right-skewed',
    explanation: `Step-by-Step Conceptual Analysis:
1. Distribution skewness follows the direction of the long tail:
   • Tail extends to the right (toward larger positive values) $\\implies$ **Right-skewed (positively skewed)**.
   • Tail extends to the left (toward smaller values) $\\implies$ **Left-skewed (negatively skewed)**.

Teacher's SAT Pro-Tip:
"Skew follows the tail, not the peak." Long tail to the right $\\to$ Right-skewed.`,
    distractorExplanations: {
      0: 'Left-skewed distributions have a long tail extending to the left toward smaller values.',
      2: 'Symmetric distributions have balanced tails on both sides.',
      3: 'Uniform distributions have roughly equal bar heights across all values.'
    }
  },
  {
    id: 'ch10-q22',
    number: 22,
    exerciseNumber: 1,
    exerciseTitle: 'Exercise 1: Module 1 Foundations (Questions 1–40)',
    question: 'A distribution is strongly right-skewed.\n\nWhich relationship between the mean and median is generally more likely?',
    diagram: {
      title: 'Right-Skewed Distribution Profile',
      caption: 'Distribution curve displaying a peak and a rightward tail.',
      xAxisLabel: 'Value (x)',
      yAxisLabel: 'Relative Frequency',
      xRange: [0, 50],
      yRange: [0, 8],
      xStep: 10,
      yStep: 2,
      hideGrid: true,
      curves: [
        {
          type: 'function',
          points: [
            [2, 0.2], [5, 2.5], [10, 7.2], [14, 6.8], [20, 4.0],
            [28, 2.0], [38, 0.8], [48, 0.2]
          ],
          color: '#2563eb',
          strokeWidth: 2,
          shade: 'below',
          shadeColor: 'rgba(59, 130, 246, 0.18)'
        }
      ],
      textAnnotations: []
    },
    options: ['mean < median', 'mean = median', 'mean > median', 'mean = 0'],
    correctIndex: 2,
    correctAnswerText: 'mean > median',
    explanation: `Step-by-Step Conceptual Analysis:
1. In a right-skewed distribution, the extreme high values in the right tail pull the non-resistant mean upward.
2. The median remains resistant and stays closer to the bulk of the data.
3. Therefore:
   $$\\text{Mean} > \\text{Median}$$

Teacher's SAT Pro-Tip:
Skew Rule:
• Right-skewed: $\\text{Mean} > \\text{Median}$
• Symmetric: $\\text{Mean} \\approx \\text{Median}$
• Left-skewed: $\\text{Mean} < \\text{Median}$`,
    distractorExplanations: {
      0: 'mean < median occurs in left-skewed distributions.',
      1: 'mean = median occurs in perfectly symmetric distributions.',
      3: 'mean = 0 is arbitrary and has no relation to skewness.'
    }
  },
  {
    id: 'ch10-q23',
    number: 23,
    exerciseNumber: 1,
    exerciseTitle: 'Exercise 1: Module 1 Foundations (Questions 1–40)',
    question: 'Two data sets have the same mean.\n• Data Set A is tightly clustered around the mean.\n• Data Set B is widely spread around the mean.\n\nWhich statement is true?',
    diagram: {
      title: 'Distribution Spread Comparison',
      caption: 'Visual representations of data distributions for Data Set A and Data Set B.',
      subDiagrams: [
        {
          label: 'Data Set A',
          xAxisLabel: 'x',
          yAxisLabel: 'Frequency',
          xRange: [0, 100],
          yRange: [0, 10],
          xStep: 20,
          yStep: 2,
          hideGrid: true,
          curves: [
            { type: 'line', points: [[45, 0], [45, 8], [55, 8], [55, 0]], color: '#2563eb', strokeWidth: 2, shade: 'below', shadeColor: 'rgba(59, 130, 246, 0.35)' }
          ],
          textAnnotations: []
        },
        {
          label: 'Data Set B',
          xAxisLabel: 'x',
          yAxisLabel: 'Frequency',
          xRange: [0, 100],
          yRange: [0, 10],
          xStep: 20,
          yStep: 2,
          hideGrid: true,
          curves: [
            { type: 'line', points: [[10, 0], [10, 2], [90, 2], [90, 0]], color: '#ea580c', strokeWidth: 2, shade: 'below', shadeColor: 'rgba(234, 88, 12, 0.35)' }
          ],
          textAnnotations: []
        }
      ]
    },
    options: [
      'A has greater standard deviation.',
      'B has greater standard deviation.',
      'They must have equal standard deviation.',
      'Standard deviation cannot be compared.'
    ],
    correctIndex: 1,
    correctAnswerText: 'B has greater standard deviation.',
    explanation: `Step-by-Step Conceptual Analysis:
1. Standard deviation measures the typical distance of data points from their mean.
2. Data Set B has values that are widely spread far from the mean, resulting in larger deviation distances.
3. Therefore, Data Set B has a strictly greater standard deviation: $\\text{SD}(B) > \\text{SD}(A)$.

Teacher's SAT Pro-Tip:
Greater spread/dispersion from the mean $\\to$ Greater Standard Deviation.`,
    distractorExplanations: {
      0: 'Data Set A is tightly clustered, which yields a smaller standard deviation.',
      2: 'Equal means do NOT imply equal standard deviations.',
      3: 'Visual or qualitative spread allows direct comparison of standard deviation.'
    }
  },
  {
    id: 'ch10-q24',
    number: 24,
    exerciseNumber: 1,
    exerciseTitle: 'Exercise 1: Module 1 Foundations (Questions 1–40)',
    question: 'Which change leaves the standard deviation of a data set unchanged?',
    options: [
      'multiplying every value by 3',
      'dividing every value by 2',
      'adding 15 to every value',
      'multiplying every value by -4'
    ],
    correctIndex: 2,
    correctAnswerText: 'adding 15 to every value',
    explanation: `Step-by-Step Transformation Rules:
1. Adding a constant $c$ shifts all points uniformly along the number line without altering the distances between any pairs of points.
2. Therefore, measures of spread (standard deviation, variance, range, IQR) remain completely **unchanged**.
3. Multiplying or dividing by a constant scales the standard deviation by $|c|$.

Teacher's SAT Pro-Tip:
Adding/subtracting a constant changes CENTER, but leaves SPREAD (SD, Range, IQR) UNCHANGED.`,
    distractorExplanations: {
      0: 'Multiplying by 3 multiplies standard deviation by 3.',
      1: 'Dividing by 2 halves the standard deviation.',
      3: 'Multiplying by -4 multiplies standard deviation by $|-4| = 4$.'
    }
  },
  {
    id: 'ch10-q25',
    number: 25,
    exerciseNumber: 1,
    exerciseTitle: 'Exercise 1: Module 1 Foundations (Questions 1–40)',
    question: 'A scatterplot shows that as x increases, y generally decreases.\n\nWhat type of association is shown?',
    diagram: {
      title: 'Bivariate Scatterplot',
      caption: 'Scatterplot displaying the relationship between variables x and y.',
      xAxisLabel: 'x',
      yAxisLabel: 'y',
      xRange: [0, 10],
      yRange: [0, 50],
      xStep: 2,
      yStep: 10,
      curves: [
        {
          type: 'points',
          points: [
            [1, 45], [1.8, 41], [2.5, 38], [3.2, 35], [4, 31],
            [5, 27], [5.8, 23], [6.5, 20], [7.4, 15], [8.2, 12], [9, 8]
          ],
          color: '#2563eb'
        }
      ],
      textAnnotations: []
    },
    options: ['positive', 'negative', 'no association', 'constant'],
    correctIndex: 1,
    correctAnswerText: 'negative',
    explanation: `Step-by-Step Scatterplot Analysis:
1. When an increase in the independent variable $x$ corresponds to a general decrease in the dependent variable $y$, the slope of the trend is negative.
2. This defines a **negative association** (downward trend from left to right).

Teacher's SAT Pro-Tip:
$x$ increases as $y$ decreases $\\implies$ Negative slope $\\implies$ Negative association.`,
    distractorExplanations: {
      0: 'Positive association occurs when $y$ increases as $x$ increases.',
      2: 'No association shows a random cloud of points with no upward or downward trend.',
      3: 'Constant association would form a horizontal line where $y$ does not change.'
    }
  },
  {
    id: 'ch10-q26',
    number: 26,
    exerciseNumber: 1,
    exerciseTitle: 'Exercise 1: Module 1 Foundations (Questions 1–40)',
    question: 'Two scatterplots both show positive association.\nIn Plot A, points lie much closer to a straight line than in Plot B.\n\nWhich plot has the stronger linear association?',
    diagram: {
      title: 'Scatterplot Comparison',
      caption: 'Two scatterplots showing bivariate data distributions with fitted trendlines.',
      subDiagrams: [
        {
          label: 'Plot A',
          xAxisLabel: 'x',
          yAxisLabel: 'y',
          xRange: [0, 10],
          yRange: [0, 30],
          xStep: 2,
          yStep: 5,
          curves: [
            { type: 'line', points: [[1, 5], [9, 27]], color: '#dc2626', strokeWidth: 1.5, style: 'dashed' },
            { type: 'points', points: [[1.5, 6.2], [2.5, 9.4], [3.8, 13.0], [5.0, 16.5], [6.2, 19.8], [7.5, 23.6], [8.5, 26.2]], color: '#2563eb' }
          ],
          textAnnotations: []
        },
        {
          label: 'Plot B',
          xAxisLabel: 'x',
          yAxisLabel: 'y',
          xRange: [0, 10],
          yRange: [0, 30],
          xStep: 2,
          yStep: 5,
          curves: [
            { type: 'line', points: [[1, 5], [9, 27]], color: '#dc2626', strokeWidth: 1.5, style: 'dashed' },
            { type: 'points', points: [[1.5, 10], [2.2, 4], [3.5, 17], [4.8, 11], [6.0, 24], [7.5, 17], [8.5, 28]], color: '#ea580c' }
          ],
          textAnnotations: []
        }
      ]
    },
    options: ['Plot A', 'Plot B', 'They are equally strong.', 'Impossible to tell.'],
    correctIndex: 0,
    correctAnswerText: 'Plot A',
    explanation: `Step-by-Step Strength Analysis:
1. The strength of a linear association is determined by how closely the data points cluster around a straight line of best fit.
2. In Plot A, because the points lie much closer to the fitted line, the correlation coefficient $r$ is closer to 1.
3. Therefore, Plot A exhibits a **stronger linear association**.

Teacher's SAT Pro-Tip:
Tighter clustering around the trendline = Stronger linear correlation.`,
    distractorExplanations: {
      1: 'Plot B has points that are more widely scattered, indicating a weaker linear relationship.',
      2: 'Different degrees of point dispersion indicate different correlation strengths.',
      3: 'Closeness to a straight line provides definitive visual evidence of linear strength.'
    }
  },
  {
    id: 'ch10-q27',
    number: 27,
    exerciseNumber: 1,
    exerciseTitle: 'Exercise 1: Module 1 Foundations (Questions 1–40)',
    question: 'A line of best fit is given by: y = 2.5x + 14.\n\nWhat is the predicted value of y when x = 8?',
    diagram: {
      title: 'Line of Best Fit',
      caption: 'Fitted linear regression model line: y = 2.5x + 14.',
      xAxisLabel: 'x',
      yAxisLabel: 'y',
      xRange: [0, 12],
      yRange: [0, 45],
      xStep: 2,
      yStep: 10,
      curves: [
        { type: 'line', points: [[0, 14], [11, 41.5]], color: '#2563eb', strokeWidth: 2.5, label: 'y = 2.5x + 14', labelPosition: { x: 5, y: 30 } }
      ],
      textAnnotations: []
    },
    options: ['20', '28', '34', '40'],
    correctIndex: 2,
    correctAnswerText: '34',
    explanation: `Step-by-Step Model Prediction:
1. Substitute $x = 8$ into the linear model equation:
   $$y = 2.5(8) + 14$$

2. Perform the arithmetic:
   $$y = 20 + 14 = 34$$

Teacher's SAT Pro-Tip:
To find a predicted value, simply substitute the given $x$-value directly into the linear equation.`,
    distractorExplanations: {
      0: '20 is $2.5 \\times 8$, forgetting to add the $y$-intercept 14.',
      1: '28 is $2.5(8) + 8$ or an arithmetic error.',
      3: '40 is an overestimation.'
    }
  },
  {
    id: 'ch10-q28',
    number: 28,
    exerciseNumber: 1,
    exerciseTitle: 'Exercise 1: Module 1 Foundations (Questions 1–40)',
    question: 'In the linear model: y = 4x + 11, what does the number 4 represent?',
    diagram: {
      title: 'Linear Model Graph',
      caption: 'Graph of the linear equation y = 4x + 11.',
      xAxisLabel: 'x',
      yAxisLabel: 'y',
      xRange: [0, 6],
      yRange: [0, 35],
      xStep: 1,
      yStep: 5,
      curves: [
        { type: 'line', points: [[0, 11], [5, 31]], color: '#2563eb', strokeWidth: 2.5, label: 'y = 4x + 11', labelPosition: { x: 2, y: 22 } }
      ],
      textAnnotations: []
    },
    options: [
      'predicted y-intercept',
      'increase in predicted y for each 1-unit increase in x',
      'predicted x-intercept',
      'total number of observations'
    ],
    correctIndex: 1,
    correctAnswerText: 'increase in predicted y for each 1-unit increase in x',
    explanation: `Step-by-Step Slope Interpretation:
1. In the slope-intercept form $y = mx + b$, the slope $m = 4$ represents the rate of change:
   $$m = \\frac{\\Delta y}{\\Delta x} = \\frac{4}{1}$$

2. In context, this means that for every 1-unit increase in the independent variable $x$, the predicted value of $y$ increases by 4 units.

Teacher's SAT Pro-Tip:
Slope = rate of change: "predicted increase in $y$ per 1-unit increase in $x$."`,
    distractorExplanations: {
      0: 'The predicted $y$-intercept is 11, not 4.',
      2: 'The predicted $x$-intercept is $-11/4 = -2.75$.',
      3: 'Sample size $n$ is not represented by the slope.'
    }
  },
  {
    id: 'ch10-q29',
    number: 29,
    exerciseNumber: 1,
    exerciseTitle: 'Exercise 1: Module 1 Foundations (Questions 1–40)',
    question: 'A model predicts a value of 61, while the actual observed value is 66.\n\nWhat is the residual?',
    diagram: {
      title: 'Observed Data Point and Model Line',
      caption: 'Data point and regression line showing predicted vs observed values.',
      xAxisLabel: 'x',
      yAxisLabel: 'y',
      xRange: [0, 14],
      yRange: [0, 80],
      xStep: 2,
      yStep: 10,
      curves: [
        { type: 'line', points: [[0, 11], [13, 76]], color: '#2563eb', strokeWidth: 2, label: 'Line of Best Fit', labelPosition: { x: 4, y: 38 } },
        { type: 'line', points: [[10, 61], [10, 66]], color: '#64748b', strokeWidth: 2, style: 'dashed' },
        { type: 'points', points: [[10, 66]], color: '#ea580c' },
        { type: 'points', points: [[10, 61]], color: '#2563eb' }
      ],
      textAnnotations: [
        { x: 10, y: 70, text: 'Actual (66)', color: '#c2410c', fontSize: 10, fontWeight: '800' },
        { x: 10.5, y: 57, text: 'Predicted (61)', color: '#1e40af', fontSize: 9.5 }
      ]
    },
    options: ['-5', '5', '61', '127'],
    correctIndex: 1,
    correctAnswerText: '5',
    explanation: `Step-by-Step Residual Calculation:
1. Recall the Master Residual Formula:
   $$\\text{Residual} = \\text{Actual } y - \\text{Predicted } \\hat{y}$$

2. Substitute the values:
   $$\\text{Residual} = 66 - 61 = 5$$

Teacher's SAT Pro-Tip:
SAT Trap Alert: Always $\\text{Residual} = \\text{Actual} - \\text{Predicted}$. Since the actual value (66) is above the line (61), the residual is positive ($+5$).`,
    distractorExplanations: {
      0: '-5 inverts the formula (Predicted - Actual), which is the most common SAT trap.',
      2: '61 is the predicted value.',
      3: '127 is the sum $66 + 61$.'
    }
  },
  {
    id: 'ch10-q30',
    number: 30,
    exerciseNumber: 1,
    exerciseTitle: 'Exercise 1: Module 1 Foundations (Questions 1–40)',
    question: 'Observed x-values in a study range from 5 to 60.\nA model is used to predict y at x = 32.\n\nThis prediction is an example of:',
    options: ['extrapolation', 'interpolation', 'randomization', 'sampling'],
    correctIndex: 1,
    correctAnswerText: 'interpolation',
    explanation: `Step-by-Step Conceptual Analysis:
1. **Interpolation** is predicting within the range of observed data ($5 \\le x \\le 60$). Since $x = 32$ lies inside this domain, it is interpolation and is generally reliable.
2. **Extrapolation** is predicting outside the observed range (e.g., $x = 100$), which is prone to error.

Teacher's SAT Pro-Tip:
Inside observed data domain $\\to$ Interpolation. Outside domain $\\to$ Extrapolation.`,
    distractorExplanations: {
      0: 'Extrapolation occurs when predicting outside the observed domain (e.g., $x < 5$ or $x > 60$).',
      2: 'Randomization is an experimental design technique.',
      3: 'Sampling is the process of selecting a subset from a population.'
    }
  },
  {
    id: 'ch10-q31',
    number: 31,
    exerciseNumber: 1,
    exerciseTitle: 'Exercise 1: Module 1 Foundations (Questions 1–40)',
    question: 'Which sampling method is most likely to produce a representative sample of students at a school?',
    options: [
      'ask only students in the cafeteria',
      'ask only volunteers',
      'randomly select students from the enrollment list',
      'ask the researcher\'s friends'
    ],
    correctIndex: 2,
    correctAnswerText: 'randomly select students from the enrollment list',
    explanation: `Step-by-Step Sampling Analysis:
1. A **representative sample** accurately reflects the demographic and behavioral characteristics of the target population.
2. **Simple random sampling** from the complete official enrollment list ensures that every student has an equal probability of being selected, minimizing selection bias.
3. Cafeteria polling, volunteer polling, and friend polling introduce severe convenience and voluntary-response biases.

Teacher's SAT Pro-Tip:
Random selection from the full population roster is the gold standard for sample representativeness.`,
    distractorExplanations: {
      0: 'Cafeteria polling is convenience sampling and excludes students who eat elsewhere or have different schedules.',
      1: 'Voluntary response over-represents students with strong opinions.',
      3: 'Surveying friends is severe convenience bias.'
    }
  },
  {
    id: 'ch10-q32',
    number: 32,
    exerciseNumber: 1,
    exerciseTitle: 'Exercise 1: Module 1 Foundations (Questions 1–40)',
    question: 'A survey asks people at a shopping mall on a Tuesday morning to participate in a study about employment habits.\n\nWhat is the main methodological concern?',
    options: [
      'random assignment',
      'convenience sampling',
      'experimental control',
      'confidence interval'
    ],
    correctIndex: 1,
    correctAnswerText: 'convenience sampling',
    explanation: `Step-by-Step Sampling Evaluation:
1. Surveying people at a shopping mall on a weekday morning is a classic **convenience sample** because subjects are selected purely based on ease of accessibility.
2. People available at a mall on Tuesday morning are unrepresentative of the full workforce (excluding full-time standard-hour workers, students, etc.).

Teacher's SAT Pro-Tip:
Location-restricted or easy-to-reach sampling = Convenience Sampling bias.`,
    distractorExplanations: {
      0: 'Random assignment applies to experiments, not observational surveys.',
      2: 'Experimental control applies to laboratory or treatment trials.',
      3: 'Confidence intervals quantify estimation uncertainty, not sampling method flaws.'
    }
  },
  {
    id: 'ch10-q33',
    number: 33,
    exerciseNumber: 1,
    exerciseTitle: 'Exercise 1: Module 1 Foundations (Questions 1–40)',
    question: 'A researcher randomly selects 500 households from a city\'s complete list of all 40,000 households.\n\nThe 500 households form the:',
    options: ['population', 'sample', 'treatment', 'control variable'],
    correctIndex: 1,
    correctAnswerText: 'sample',
    explanation: `Step-by-Step Definitions:
1. **Population**: The entire group of interest (all 40,000 households in the city).
2. **Sample**: The subset of individuals actually selected and measured (the 500 selected households).

Teacher's SAT Pro-Tip:
Population = Entire group (40,000). Sample = Selected subset (500).`,
    distractorExplanations: {
      0: 'The population is the complete group of all 40,000 households in the city.',
      2: 'Treatment is an intervention administered in an experiment.',
      3: 'Control variable is a factor kept constant during an experiment.'
    }
  },
  {
    id: 'ch10-q34',
    number: 34,
    exerciseNumber: 1,
    exerciseTitle: 'Exercise 1: Module 1 Foundations (Questions 1–40)',
    question: 'In an experiment, participants are randomly assigned to two groups.\n\nThe primary benefit of random assignment is:',
    options: [
      'making the sample larger',
      'reducing the need for data',
      'helping balance other factors between groups',
      'guaranteeing generalizability'
    ],
    correctIndex: 2,
    correctAnswerText: 'helping balance other factors between groups',
    explanation: `Step-by-Step Experimental Design:
1. **Random assignment** distributes lurking and confounding variables (age, health, background, genetics) roughly equally between the treatment and control groups.
2. This isolates the effect of the explanatory variable, allowing valid **causal inference**.

Teacher's SAT Pro-Tip:
Crucial SAT Distinction:
• Random Sampling $\\to$ Generalizability to population
• Random Assignment $\\to$ Causal inference (balances confounding variables)`,
    distractorExplanations: {
      0: 'Random assignment does not increase the sample size.',
      1: 'Data collection requirements are unchanged.',
      3: 'Generalizability comes from random sampling, NOT random assignment.'
    }
  },
  {
    id: 'ch10-q35',
    number: 35,
    exerciseNumber: 1,
    exerciseTitle: 'Exercise 1: Module 1 Foundations (Questions 1–40)',
    question: 'An observational study observes that people who exercise more tend to report better sleep.\n\nWhat can the study directly establish?',
    options: [
      'exercise definitely causes better sleep',
      'sleep definitely causes exercise',
      'an association exists',
      'neither variable can be measured'
    ],
    correctIndex: 2,
    correctAnswerText: 'an association exists',
    explanation: `Step-by-Step Observational Study Analysis:
1. In an observational study, researchers observe natural behaviors without randomly assigning treatments.
2. An observational study can establish **correlation/association**, but CANNOT establish **causation** due to potential confounding variables (e.g., lower stress levels, healthier diets).

Teacher's SAT Pro-Tip:
Observational study $\\to$ Association only. Never claim causation without a randomized experiment!`,
    distractorExplanations: {
      0: 'Observational studies cannot establish causation due to uncontrolled confounding factors.',
      1: 'Reverse causation is also unproven.',
      3: 'Both variables were measured directly in the study.'
    }
  },
  {
    id: 'ch10-q36',
    number: 36,
    exerciseNumber: 1,
    exerciseTitle: 'Exercise 1: Module 1 Foundations (Questions 1–40)',
    question: 'A poll reports: 48% ± 3%.\n\nWhat confidence interval is represented by this estimate?',
    diagram: {
      title: 'Confidence Interval Visualization',
      caption: 'Number line illustrating a sample point estimate with a margin of error.',
      xAxisLabel: 'Percentage (%)',
      xRange: [40, 56],
      yRange: [0, 4],
      xStep: 2,
      yStep: 1,
      hideGrid: true,
      curves: [
        { type: 'line', points: [[41, 2], [55, 2]], color: '#0f172a', strokeWidth: 2 },
        // Center point at 48
        { type: 'points', points: [[48, 2]], color: '#dc2626' }
      ],
      textAnnotations: [
        { x: 48, y: 3.2, text: 'Point Estimate: 48%', color: '#b91c1c', fontSize: 10.5, fontWeight: '800' }
      ]
    },
    options: ['45% to 51%', '46% to 50%', '48% to 51%', '48% to 54%'],
    correctIndex: 0,
    correctAnswerText: '45% to 51%',
    explanation: `Step-by-Step Margin of Error Calculation:
1. Recall the Confidence Interval boundary formula:
   $$\\text{Interval} = [\\text{Point Estimate} - \\text{Margin of Error}, \\text{Point Estimate} + \\text{Margin of Error}]$$

2. Calculate the lower and upper bounds:
   $$\\text{Lower Bound} = 48\\% - 3\\% = 45\\%$$
   $$\\text{Upper Bound} = 48\\% + 3\\% = 51\\%$$

3. The interval is $45\\%$ to $51\\%$.

Teacher's SAT Pro-Tip:
Interval = $[\\text{Estimate} - \\text{MoE}, \\text{Estimate} + \\text{MoE}] = [48 - 3, 48 + 3] = [45\\%, 51\\%]$.`,
    distractorExplanations: {
      1: '46% to 50% uses a margin of error of ±2%.',
      2: '48% to 51% only adds the margin of error without subtracting.',
      3: '48% to 54% uses a margin of error of ±6% on one side.'
    }
  },
  {
    id: 'ch10-q37',
    number: 37,
    exerciseNumber: 1,
    exerciseTitle: 'Exercise 1: Module 1 Foundations (Questions 1–40)',
    question: 'Two otherwise similar polls are conducted:\n• Poll A surveys 2,000 randomly selected people.\n• Poll B surveys 500 randomly selected people.\n\nWhich poll generally has the smaller margin of error?',
    options: [
      'Poll A',
      'Poll B',
      'They must be equal.',
      'Cannot be determined because A is larger.'
    ],
    correctIndex: 0,
    correctAnswerText: 'Poll A',
    explanation: `Step-by-Step Sample Size and Margin of Error Analysis:
1. The margin of error is inversely proportional to the square root of the sample size:
   $$\\text{Margin of Error} \\propto \\frac{1}{\\sqrt{n}}$$

2. As sample size $n$ increases, sampling variability decreases, resulting in a **smaller margin of error** and a more precise estimate.
3. Since Poll A ($n = 2,000$) has a larger sample than Poll B ($n = 500$), Poll A has the smaller margin of error.

Teacher's SAT Pro-Tip:
Larger sample size $\\implies$ Smaller margin of error $\\implies$ More precise confidence interval.`,
    distractorExplanations: {
      1: 'Smaller samples have larger margins of error due to higher sampling variation.',
      2: 'Different sample sizes produce different margins of error.',
      3: 'The mathematical relationship directly dictates that larger samples yield smaller margins of error.'
    }
  },
  {
    id: 'ch10-q38',
    number: 38,
    exerciseNumber: 1,
    exerciseTitle: 'Exercise 1: Module 1 Foundations (Questions 1–40)',
    question: 'A study randomly samples 600 residents from a city and asks about transportation preferences.\n\nTo which group can the findings most reasonably be generalized?',
    options: [
      'only the 600 participants',
      'the city\'s population, assuming the sampling design is sound',
      'every person in the country',
      'only people who use public transportation'
    ],
    correctIndex: 1,
    correctAnswerText: 'the city\'s population, assuming the sampling design is sound',
    explanation: `Step-by-Step Generalizability Principle:
1. Results from a random sample can be generalized **to the entire population from which the sample was randomly drawn**.
2. Because the sample was drawn randomly from the residents of that specific city, findings generalize to all residents of that city.
3. Generalizing to the entire country is an invalid overreach.

Teacher's SAT Pro-Tip:
Scope of Inference: Random sample from Population $X$ generalizes ONLY to Population $X$.`,
    distractorExplanations: {
      0: 'A sound random sample generalizes beyond the 600 participants to the sampled population.',
      2: 'Residents of one city cannot represent the entire country.',
      3: 'The random sample was drawn from all residents, not just public transit riders.'
    }
  },
  {
    id: 'ch10-q39',
    number: 39,
    exerciseNumber: 1,
    exerciseTitle: 'Exercise 1: Module 1 Foundations (Questions 1–40)',
    question: 'A study randomly assigns participants to a treatment group or control group.\n\nWhich conclusion is most supported if the treatment group shows a substantially better outcome?',
    options: [
      'The sample automatically represents everyone.',
      'The treatment may have caused the difference.',
      'The treatment definitely caused the difference regardless of study quality.',
      'No comparison can be made.'
    ],
    correctIndex: 1,
    correctAnswerText: 'The treatment may have caused the difference.',
    explanation: `Step-by-Step Experimental Conclusion:
1. **Random assignment** balances confounding variables, allowing researchers to attribute observed differences in outcomes to the treatment (supporting **causal inference**).
2. Proper scientific and statistical phrasing uses reasonable, evidence-supported language ("the treatment may have caused the difference" or "provides evidence of a causal effect") rather than absolute dogmatism ("regardless of study quality").

Teacher's SAT Pro-Tip:
Random assignment provides evidence for causation, while avoiding unsupported absolute claims.`,
    distractorExplanations: {
      0: 'Random assignment does not ensure representativeness or generalizability to everyone.',
      2: '"Regardless of study quality" is unscientific and ignores experimental rigor.',
      3: 'A randomized controlled trial is specifically designed to enable valid group comparisons.'
    }
  },
  {
    id: 'ch10-q40',
    number: 40,
    exerciseNumber: 1,
    exerciseTitle: 'Exercise 1: Module 1 Foundations (Questions 1–40)',
    question: 'Which statement correctly distinguishes random sampling from random assignment?',
    options: [
      'Random sampling primarily supports causal inference.',
      'Random assignment primarily supports generalizability.',
      'Random sampling helps generalizability, while random assignment helps causal inference.',
      'They have exactly the same purpose.'
    ],
    correctIndex: 2,
    correctAnswerText: 'Random sampling helps generalizability, while random assignment helps causal inference.',
    explanation: `Step-by-Step Master SAT Statistics Rule:
1. **Random Sampling**: Selecting subjects randomly from a population $\\implies$ Ensures representativeness $\\implies$ **Generalizability to the population**.
2. **Random Assignment**: Assigning participants randomly to experimental groups $\\implies$ Controls confounding variables $\\implies$ **Causal inference (Cause and Effect)**.

Teacher's SAT Pro-Tip:
MEMORIZE THIS DUALITY FOR THE DIGITAL SAT:
• Random SAMPLING $\\to$ GENERALIZABILITY
• Random ASSIGNMENT $\\to$ CAUSATION`,
    distractorExplanations: {
      0: 'Random sampling does not establish causation.',
      1: 'Random assignment does not establish generalizability to un-sampled populations.',
      3: 'They serve completely distinct and complementary statistical roles.'
    }
  }
];
