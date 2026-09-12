import { MathExerciseQuestion } from './satMathConcepts';

export const CHAPTER_8_PRACTICE_QUESTIONS: MathExerciseQuestion[] = [
  // ==========================================
  // SECTION A: IDENTIFICATION (Q1 - Q6)
  // ==========================================
  {
    id: 'ch8-q1',
    number: 1,
    exerciseNumber: 1,
    exerciseTitle: 'Exercise 1: Linear & Exponential Growth Mastery',
    question: 'The sequence is:\n8, 14, 20, 26, 32\n\nWhich type of pattern does it represent?',
    options: ['Linear', 'Exponential', 'Quadratic', 'Neither'],
    correctIndex: 0,
    correctAnswerText: 'Linear',
    explanation: `Step-by-Step Mathematical Analysis:
1. Check the consecutive differences between adjacent terms:
   $$14 - 8 = +6$$
   $$20 - 14 = +6$$
   $$26 - 20 = +6$$
   $$32 - 26 = +6$$
2. Because the difference between consecutive terms is constant (+6), the sequence represents constant additive change.
3. Constant additive change is the defining property of a linear relationship ($y = mx + b$).

Teacher's SAT Pro-Tip:
Same difference = Linear! Whenever consecutive output values increase or decrease by a fixed, constant amount, the model is always linear with slope $m = 6$.`,
    distractorExplanations: {
      1: 'Exponential growth requires equal consecutive ratios (multiplicative factors), not equal differences.',
      2: 'Quadratic sequences have constant second differences, not constant first differences.',
      3: 'The pattern has a strictly constant difference of +6, so it is a definite linear model.'
    },
    diagram: {
      title: 'Sequence Scatter Plot in the xy-plane',
      xAxisLabel: 'Term (n)',
      yAxisLabel: 'Value',
      xRange: [0, 6],
      yRange: [0, 40],
      xStep: 1,
      yStep: 5,
      curves: [
        {
          type: 'points',
          label: 'Sequence Terms',
          color: '#2563eb',
          points: [[1, 8], [2, 14], [3, 20], [4, 26], [5, 32]]
        }
      ]
    }
  },
  {
    id: 'ch8-q2',
    number: 2,
    exerciseNumber: 1,
    exerciseTitle: 'Exercise 1: Linear & Exponential Growth Mastery',
    question: 'The sequence is:\n3, 9, 27, 81, 243\n\nWhich type of pattern does it represent?',
    options: ['Linear', 'Exponential', 'Constant', 'Neither'],
    correctIndex: 1,
    correctAnswerText: 'Exponential',
    explanation: `Step-by-Step Mathematical Analysis:
1. Check the ratios between consecutive terms:
   $$\\frac{9}{3} = 3$$
   $$\\frac{27}{9} = 3$$
   $$\\frac{81}{27} = 3$$
   $$\\frac{243}{81} = 3$$
2. Each term is multiplied by a constant factor of 3 to produce the next term.
3. Constant multiplicative change is the defining characteristic of an exponential relationship ($y = a \\cdot b^x$).

Teacher's SAT Pro-Tip:
Same ratio = Exponential! The multiplier (growth factor) here is $b = 3$, giving the model $y = 3^x$.`,
    distractorExplanations: {
      0: 'Differences are 6, 18, 54, 162 (not constant), so it cannot be linear.',
      2: 'A constant relationship has zero change (all values identical).',
      3: 'The sequence strictly follows a constant ratio of 3.'
    },
    diagram: {
      title: 'Sequence Scatter Plot in the xy-plane',
      xAxisLabel: 'Term (n)',
      yAxisLabel: 'Value',
      xRange: [0, 6],
      yRange: [0, 260],
      xStep: 1,
      yStep: 40,
      curves: [
        {
          type: 'points',
          label: 'Sequence Terms',
          color: '#7c3aed',
          points: [[1, 3], [2, 9], [3, 27], [4, 81], [5, 243]]
        }
      ]
    }
  },
  {
    id: 'ch8-q3',
    number: 3,
    exerciseNumber: 1,
    exerciseTitle: 'Exercise 1: Linear & Exponential Growth Mastery',
    question: 'Which sequence represents exponential growth?',
    options: [
      '5, 10, 15, 20',
      '4, 8, 12, 16',
      '2, 6, 18, 54',
      '20, 25, 30, 35'
    ],
    correctIndex: 2,
    correctAnswerText: '2, 6, 18, 54',
    explanation: `Step-by-Step Pattern Verification:
- Option A: $10 - 5 = 5$, $15 - 10 = 5$, $20 - 15 = 5$ (Constant difference +5 $\\to$ Linear).
- Option B: $8 - 4 = 4$, $12 - 8 = 4$, $16 - 12 = 4$ (Constant difference +4 $\\to$ Linear).
- Option C:
  $$\\frac{6}{2} = 3, \\quad \\frac{18}{6} = 3, \\quad \\frac{54}{18} = 3$$
  Because each successive term is multiplied by 3 (constant ratio), this sequence represents exponential growth.
- Option D: $25 - 20 = 5$, $30 - 25 = 5$, $35 - 30 = 5$ (Constant difference +5 $\\to$ Linear).

Teacher's SAT Pro-Tip:
Look for multiplication versus addition. When numbers multiply by a constant base ($b > 1$), growth accelerates exponentially!`,
    distractorExplanations: {
      0: 'Linear sequence with a constant difference of +5.',
      1: 'Linear sequence with a constant difference of +4.',
      3: 'Linear sequence with a constant difference of +5.'
    }
  },
  {
    id: 'ch8-q4',
    number: 4,
    exerciseNumber: 1,
    exerciseTitle: 'Exercise 1: Linear & Exponential Growth Mastery',
    question: 'Which sequence represents linear growth?',
    options: [
      '3, 6, 12, 24',
      '5, 10, 20, 40',
      '7, 14, 21, 28',
      '2, 4, 8, 16'
    ],
    correctIndex: 2,
    correctAnswerText: '7, 14, 21, 28',
    explanation: `Step-by-Step Pattern Verification:
- Option A: Multiplies by 2 ($6/3=2, 12/6=2, 24/12=2$) $\\to$ Exponential.
- Option B: Multiplies by 2 ($10/5=2, 20/10=2, 40/20=2$) $\\to$ Exponential.
- Option C:
  $$14 - 7 = 7, \\quad 21 - 14 = 7, \\quad 28 - 21 = 7$$
  Constant additive difference of $+7$ each step $\\to$ Linear growth ($y = 7n$).
- Option D: Multiplies by 2 ($4/2=2, 8/4=2, 16/8=2$) $\\to$ Exponential.

Teacher's SAT Pro-Tip:
Linear sequences have equal differences ($+7$), while exponential sequences have equal ratios ($\times 2$).`,
    distractorExplanations: {
      0: 'Exponential growth with multiplier 2.',
      1: 'Exponential growth with multiplier 2.',
      3: 'Exponential growth with multiplier 2.'
    }
  },
  {
    id: 'ch8-q5',
    number: 5,
    exerciseNumber: 1,
    exerciseTitle: 'Exercise 1: Linear & Exponential Growth Mastery',
    question: 'A quantity changes from:\n50 -> 60 -> 70 -> 80\n\nWhich model is most appropriate?',
    options: ['Linear', 'Exponential', 'Quadratic', 'None'],
    correctIndex: 0,
    correctAnswerText: 'Linear',
    explanation: `Step-by-Step Analysis:
1. Examine the consecutive increments:
   $$60 - 50 = +10$$
   $$70 - 60 = +10$$
   $$80 - 70 = +10$$
2. The quantity increases by the same fixed additive amount (+10) during every step.
3. Therefore, a linear model $y = 10x + 50$ is most appropriate.

Teacher's SAT Pro-Tip:
Fixed amount added per time period = Linear model!`,
    distractorExplanations: {
      1: 'Exponential models require fixed percentage increases or fixed multiplicative factors.',
      2: 'Quadratic models have varying first differences.',
      3: 'The sequence matches the standard linear model perfectly.'
    },
    diagram: {
      title: 'Quantity Over Consecutive Steps in the xy-plane',
      xAxisLabel: 'Step (x)',
      yAxisLabel: 'Quantity (y)',
      xRange: [0, 4],
      yRange: [40, 90],
      xStep: 1,
      yStep: 10,
      curves: [
        {
          type: 'points',
          label: 'Values',
          color: '#1d4ed8',
          points: [[0, 50], [1, 60], [2, 70], [3, 80]]
        }
      ]
    }
  },
  {
    id: 'ch8-q6',
    number: 6,
    exerciseNumber: 1,
    exerciseTitle: 'Exercise 1: Linear & Exponential Growth Mastery',
    question: 'A quantity changes from:\n50 -> 60 -> 72 -> 86.4\n\nWhich model is most appropriate?',
    options: ['Linear increasing model', 'Exponential growth model', 'Quadratic with maximum', 'Inversely proportional'],
    correctIndex: 1,
    correctAnswerText: 'Exponential growth model',
    explanation: `Step-by-Step Analysis:
1. Check the differences:
   $$60 - 50 = 10$$
   $$72 - 60 = 12$$
   $$86.4 - 72 = 14.4$$
   The differences are growing (+10, +12, +14.4), so it is not linear.
2. Check the consecutive ratios:
   $$\\frac{60}{50} = 1.20$$
   $$\\frac{72}{60} = 1.20$$
   $$\\frac{86.4}{72} = 1.20$$
3. Because each value is multiplied by 1.20 (a 20% increase each period), this represents exponential growth modeled by $y = 50(1.20)^x$.

Teacher's SAT Pro-Tip:
When the amount added keeps getting larger, check the ratios! A constant ratio of $1.20$ confirms a 20% exponential growth model.`,
    distractorExplanations: {
      0: 'Differences are not constant (+10, +12, +14.4), so it cannot be linear.',
      2: 'A constant model does not change at all.',
      3: 'The sequence matches the exponential model with growth factor 1.20 exactly.'
    },
    diagram: {
      title: 'Quantity Over Consecutive Steps in the xy-plane',
      xAxisLabel: 'Step (x)',
      yAxisLabel: 'Quantity (y)',
      xRange: [0, 4],
      yRange: [40, 100],
      xStep: 1,
      yStep: 10,
      curves: [
        {
          type: 'points',
          label: 'Values',
          color: '#6d28d9',
          points: [[0, 50], [1, 60], [2, 72], [3, 86.4]]
        }
      ]
    }
  },

  // ==========================================
  // SECTION B: LINEAR MODELS (Q7 - Q12)
  // ==========================================
  {
    id: 'ch8-q7',
    number: 7,
    exerciseNumber: 1,
    exerciseTitle: 'Exercise 1: Linear & Exponential Growth Mastery',
    question: 'A line passes through:\n(0, 9)\nand\n(3, 21).\n\nWhat is its equation?',
    options: [
      'y = 3x + 9',
      'y = 4x + 9',
      'y = 4x + 3',
      'y = 9x + 4'
    ],
    correctIndex: 1,
    correctAnswerText: 'y = 4x + 9',
    explanation: `Step-by-Step Algebraic Solution:
1. Find the slope $m$ using the two given points $(x_1, y_1) = (0, 9)$ and $(x_2, y_2) = (3, 21)$:
   $$m = \\frac{y_2 - y_1}{x_2 - x_1} = \\frac{21 - 9}{3 - 0} = \\frac{12}{3} = 4$$
2. Identify the y-intercept $b$:
   Since the line passes through $(0, 9)$, the y-intercept is $b = 9$.
3. Substitute $m = 4$ and $b = 9$ into slope-intercept form $y = mx + b$:
   $$y = 4x + 9$$

Teacher's SAT Pro-Tip:
Whenever a point has an x-coordinate of 0, its y-coordinate is automatically the y-intercept $b$!`,
    distractorExplanations: {
      0: 'Uses slope 3 instead of 4: (21 - 9)/3 = 12/3 = 4.',
      2: 'Uses 3 as the y-intercept instead of 9.',
      3: 'Swaps the slope and y-intercept.'
    },
    diagram: {
      title: 'Graph of a Line in the xy-plane',
      xAxisLabel: 'x',
      yAxisLabel: 'y',
      xRange: [0, 5],
      yRange: [0, 25],
      xStep: 1,
      yStep: 5,
      curves: [
        {
          type: 'line',
          label: 'Line',
          color: '#3b82f6',
          points: [[0, 9], [1, 13], [2, 17], [3, 21], [4, 25]],
          strokeWidth: 2.5
        },
        {
          type: 'points',
          label: 'Given Points',
          color: '#1d4ed8',
          points: [[0, 9], [3, 21]]
        }
      ]
    }
  },
  {
    id: 'ch8-q8',
    number: 8,
    exerciseNumber: 1,
    exerciseTitle: 'Exercise 1: Linear & Exponential Growth Mastery',
    question: 'A company charges $15 plus $4 per item.\n\nWhich equation gives total cost C for x items?',
    options: [
      'C = 15x + 4',
      'C = 4x + 15',
      'C = 19x',
      'C = 15 + x/4'
    ],
    correctIndex: 1,
    correctAnswerText: 'C = 4x + 15',
    explanation: `Step-by-Step Translation Walkthrough:
1. Identify the constant rate of change (variable cost per item):
   $$\\text{Rate} = 4 \\text{ dollars per item} \\implies 4x$$
2. Identify the fixed initial fee (y-intercept):
   $$\\text{Base fee} = 15$$
3. Combine into the linear cost formula $C = mx + b$:
   $$C = 4x + 15$$

Teacher's SAT Pro-Tip:
The word "per" always attaches to the slope variable ($x$), while the one-time flat fee is the constant intercept!`,
    distractorExplanations: {
      0: 'Attaches the flat fee ($15) to x instead of the per-item rate ($4).',
      2: 'Incorrectly adds 15 and 4 to make a single slope of 19 per item.',
      3: 'Divides x by 4 instead of multiplying by 4.'
    },
    diagram: {
      title: 'Cost Model in the xy-plane',
      xAxisLabel: 'Items (x)',
      yAxisLabel: 'Cost ($)',
      xRange: [0, 8],
      yRange: [0, 50],
      xStep: 1,
      yStep: 10,
      curves: [
        {
          type: 'line',
          label: 'Cost Function',
          color: '#3b82f6',
          points: [[0, 15], [2, 23], [4, 31], [6, 39], [8, 47]],
          strokeWidth: 2.5
        }
      ]
    }
  },
  {
    id: 'ch8-q9',
    number: 9,
    exerciseNumber: 1,
    exerciseTitle: 'Exercise 1: Linear & Exponential Growth Mastery',
    question: 'A tank contains 80 liters of water. It gains 12 liters each hour.\n\nWhich equation gives the amount after t hours?',
    options: [
      'A = 12(80)^t',
      'A = 80(12)^t',
      'A = 80 + 12t',
      'A = 12 + 80t'
    ],
    correctIndex: 2,
    correctAnswerText: 'A = 80 + 12t',
    explanation: `Step-by-Step Translation Walkthrough:
1. Identify the starting amount at $t = 0$:
   $$\\text{Initial volume } = 80 \\text{ liters}$$
2. Identify the constant rate of addition:
   $$\\text{Gain per hour } = +12 \\text{ liters/hour} \\implies 12t$$
3. Combine into the linear model:
   $$A = 80 + 12t$$

Teacher's SAT Pro-Tip:
"Gains [fixed amount] each hour" = Linear addition ($+ 12t$), NOT exponential multiplication!`,
    distractorExplanations: {
      0: 'Models an exponential function multiplying by 80 each hour.',
      1: 'Models an exponential function multiplying by 12 each hour.',
      3: 'Swaps the initial volume (80) with the hourly rate (12).'
    },
    diagram: {
      title: 'Water Tank Volume in the xy-plane',
      xAxisLabel: 'Hours (t)',
      yAxisLabel: 'Liters (A)',
      xRange: [0, 6],
      yRange: [60, 160],
      xStep: 1,
      yStep: 20,
      curves: [
        {
          type: 'line',
          label: 'Water Volume',
          color: '#0284c7',
          points: [[0, 80], [1, 92], [2, 104], [3, 116], [4, 128], [5, 140]],
          strokeWidth: 2.5
        }
      ]
    }
  },
  {
    id: 'ch8-q10',
    number: 10,
    exerciseNumber: 1,
    exerciseTitle: 'Exercise 1: Linear & Exponential Growth Mastery',
    question: 'A linear model is:\ny = 7x - 13\n\nWhat is the rate of change?',
    options: ['-13', '-7', '7', '13'],
    correctIndex: 2,
    correctAnswerText: '7',
    explanation: `Step-by-Step Algebraic Identification:
1. In the standard slope-intercept form $y = mx + b$:
   - $m$ is the slope, which represents the rate of change.
   - $b$ is the y-intercept, which represents the initial value at $x = 0$.
2. For $y = 7x - 13$:
   $$m = 7, \\quad b = -13$$
3. Therefore, the rate of change is 7.

Teacher's SAT Pro-Tip:
"Rate of change" for any linear function is simply the coefficient of $x$ (the slope $m$)!`,
    distractorExplanations: {
      0: 'This is the y-intercept (initial value at x = 0), not the rate of change.',
      1: 'Incorrect sign for the slope.',
      3: 'Magnitude of the y-intercept with flipped sign.'
    },
    diagram: {
      title: 'Linear Graph in the xy-plane',
      xAxisLabel: 'x',
      yAxisLabel: 'y',
      xRange: [0, 6],
      yRange: [-15, 30],
      xStep: 1,
      yStep: 10,
      curves: [
        {
          type: 'line',
          label: 'y = 7x - 13',
          color: '#3b82f6',
          points: [[0, -13], [2, 1], [4, 15], [6, 29]],
          strokeWidth: 2.5
        }
      ]
    }
  },
  {
    id: 'ch8-q11',
    number: 11,
    exerciseNumber: 1,
    exerciseTitle: 'Exercise 1: Linear & Exponential Growth Mastery',
    question: 'A linear model has an initial value of 45 and increases by 6 each hour.\n\nWhich equation represents the model?',
    options: [
      'y = 45(6)^x',
      'y = 6x + 45',
      'y = 45x + 6',
      'y = 51x'
    ],
    correctIndex: 1,
    correctAnswerText: 'y = 6x + 45',
    explanation: `Step-by-Step Formulation:
1. Initial value (when $x = 0$) gives the y-intercept: $b = 45$.
2. Hourly increase gives the slope / rate of change: $m = 6$.
3. Substitute into $y = mx + b$:
   $$y = 6x + 45$$

Teacher's SAT Pro-Tip:
Linear template: $y = (\\text{rate})x + (\\text{initial value})$. Here $y = 6x + 45$.`,
    distractorExplanations: {
      0: 'Represents an exponential function multiplying by 6 each hour.',
      2: 'Swaps the rate of change with the initial value.',
      3: 'Adds 45 and 6 together as a single combined slope.'
    },
    diagram: {
      title: 'Linear Model in the xy-plane',
      xAxisLabel: 'Hours (x)',
      yAxisLabel: 'Value (y)',
      xRange: [0, 6],
      yRange: [30, 90],
      xStep: 1,
      yStep: 10,
      curves: [
        {
          type: 'line',
          label: 'y = 6x + 45',
          color: '#3b82f6',
          points: [[0, 45], [2, 57], [4, 69], [6, 81]],
          strokeWidth: 2.5
        }
      ]
    }
  },
  {
    id: 'ch8-q12',
    number: 12,
    exerciseNumber: 1,
    exerciseTitle: 'Exercise 1: Linear & Exponential Growth Mastery',
    question: 'Which statement describes a linear model?',
    options: [
      'The quantity doubles every hour.',
      'The quantity increases by 8 every hour.',
      'The quantity increases by 8%.',
      'The quantity is multiplied by 1.08.'
    ],
    correctIndex: 1,
    correctAnswerText: 'The quantity increases by 8 every hour.',
    explanation: `Step-by-Step Comparison:
- "Doubles every hour" $\\to$ Multiplied by 2 (Exponential).
- "Increases by 8 every hour" $\\to$ Fixed constant additive amount (+8) $\\to$ Linear.
- "Increases by 8%" $\\to$ Percentage growth, multiplied by 1.08 (Exponential).
- "Multiplied by 1.08" $\\to$ Constant multiplicative factor (Exponential).

Teacher's SAT Pro-Tip:
Look for "increases by [fixed number]" for Linear vs. "increases by [percentage %]" or "multiplied by [factor]" for Exponential!`,
    distractorExplanations: {
      0: 'Exponential growth with base 2.',
      2: 'Exponential growth with factor 1.08.',
      3: 'Exponential growth with factor 1.08.'
    }
  },

  // ==========================================
  // SECTION C: EXPONENTIAL MODELS (Q13 - Q20)
  // ==========================================
  {
    id: 'ch8-q13',
    number: 13,
    exerciseNumber: 1,
    exerciseTitle: 'Exercise 1: Linear & Exponential Growth Mastery',
    question: 'A population begins at 500 and grows by 10% per year.\n\nWhich equation represents the population after t years?',
    options: [
      'P = 500 + 10t',
      'P = 500(0.90)^t',
      'P = 500(1.10)^t',
      'P = 510t'
    ],
    correctIndex: 2,
    correctAnswerText: 'P = 500(1.10)^t',
    explanation: `Step-by-Step Exponential Formulation:
1. Identify the initial value $A = 500$.
2. Identify the percentage growth rate $r = 10\\% = 0.10$.
3. Compute the growth factor $b$:
   $$b = 1 + r = 1 + 0.10 = 1.10$$
4. Substitute into the standard exponential formula $P = A(b)^t$:
   $$P = 500(1.10)^t$$

Teacher's SAT Pro-Tip:
Growth Factor Rule: When a quantity increases by $r\\%$, always multiply by $(1 + r)$! For $+10\\%$, the factor is $1 + 0.10 = 1.10$.`,
    distractorExplanations: {
      0: 'Linear model adding 10 individuals per year instead of 10%.',
      1: 'Decay model representing a 10% decrease (factor 0.90).',
      3: 'Linear model starting at 0 with slope 510.'
    },
    diagram: {
      title: 'Population Growth Model in the xy-plane',
      xAxisLabel: 'Years (t)',
      yAxisLabel: 'Population (P)',
      xRange: [0, 8],
      yRange: [400, 1100],
      xStep: 1,
      yStep: 100,
      curves: [
        {
          type: 'function',
          fnType: 'exponential',
          label: 'P = 500(1.10)^t',
          color: '#8b5cf6',
          points: [[0, 500], [2, 605], [4, 732], [6, 886], [8, 1072]],
          strokeWidth: 2.5
        }
      ]
    }
  },
  {
    id: 'ch8-q14',
    number: 14,
    exerciseNumber: 1,
    exerciseTitle: 'Exercise 1: Linear & Exponential Growth Mastery',
    question: 'A quantity begins at 800 and decreases by 15% each year.\n\nWhich equation represents the quantity?',
    options: [
      'A = 800(1.15)^t',
      'A = 800(0.85)^t',
      'A = 800 - 15t',
      'A = 15(800)^t'
    ],
    correctIndex: 1,
    correctAnswerText: 'A = 800(0.85)^t',
    explanation: `Step-by-Step Exponential Decay Formulation:
1. Identify the initial amount $A = 800$.
2. Identify the rate of decay $r = 15\\% = 0.15$.
3. Compute the decay factor $b$:
   $$b = 1 - r = 1 - 0.15 = 0.85$$
4. Write the exponential decay equation:
   $$A = 800(0.85)^t$$

Teacher's SAT Pro-Tip:
Crucial Trap: A 15% decrease means 85% of the quantity remains each year! Never multiply by 0.15 for the total remaining amount.`,
    distractorExplanations: {
      0: 'Represents a 15% increase (growth factor 1.15).',
      2: 'Linear model subtracting 15 units per year.',
      3: 'Incorrect placement of initial value and percentage.'
    },
    diagram: {
      title: 'Decay Model in the xy-plane',
      xAxisLabel: 'Years (t)',
      yAxisLabel: 'Quantity (A)',
      xRange: [0, 8],
      yRange: [100, 900],
      xStep: 1,
      yStep: 100,
      curves: [
        {
          type: 'function',
          fnType: 'exponential',
          label: 'A = 800(0.85)^t',
          color: '#ef4444',
          points: [[0, 800], [2, 578], [4, 418], [6, 302], [8, 218]],
          strokeWidth: 2.5
        }
      ]
    }
  },
  {
    id: 'ch8-q15',
    number: 15,
    exerciseNumber: 1,
    exerciseTitle: 'Exercise 1: Linear & Exponential Growth Mastery',
    question: 'What is the growth rate of:\nP = 250(1.07)^t?',
    options: ['0.07%', '0.7%', '7%', '107%'],
    correctIndex: 2,
    correctAnswerText: '7%',
    explanation: `Step-by-Step Analysis:
1. Compare with the standard growth model $P = A(1 + r)^t$.
2. Growth factor $b = 1.07$.
3. Find $r$:
   $$1 + r = 1.07 \\implies r = 1.07 - 1 = 0.07$$
4. Convert $r$ to a percentage:
   $$0.07 \\times 100\\% = 7\\%$$

Teacher's SAT Pro-Tip:
Subtract 1 from the growth factor to find the percentage growth rate: $1.07 - 1 = 0.07 = 7\\%$.`,
    distractorExplanations: {
      0: 'Divided 0.07 by 100 instead of multiplying by 100%.',
      1: 'Off by a factor of 10 (0.7% = 0.007).',
      3: 'This is the total percentage of the previous amount ($107\\% = 1.07$), not the net growth rate.'
    },
    diagram: {
      title: 'Exponential Model in the xy-plane',
      xAxisLabel: 't',
      yAxisLabel: 'P',
      xRange: [0, 10],
      yRange: [200, 520],
      xStep: 2,
      yStep: 50,
      curves: [
        {
          type: 'function',
          fnType: 'exponential',
          label: 'P = 250(1.07)^t',
          color: '#8b5cf6',
          points: [[0, 250], [2, 286], [4, 328], [6, 375], [8, 430], [10, 492]],
          strokeWidth: 2.5
        }
      ]
    }
  },
  {
    id: 'ch8-q16',
    number: 16,
    exerciseNumber: 1,
    exerciseTitle: 'Exercise 1: Linear & Exponential Growth Mastery',
    question: 'What is the decay rate of:\nP = 900(0.82)^t?',
    options: ['8%', '18%', '82%', '118%'],
    correctIndex: 1,
    correctAnswerText: '18%',
    explanation: `Step-by-Step Analysis:
1. In the standard decay model $P = A(1 - r)^t$, the decay factor is $b = 0.82$.
2. Solve for $r$:
   $$1 - r = 0.82 \\implies r = 1 - 0.82 = 0.18$$
3. Convert $r$ to percentage form:
   $$0.18 \\times 100\\% = 18\\%$$
4. Therefore, the quantity decreases by 18% each period.

Teacher's SAT Pro-Tip:
Decay Rate Shortcut: $\\text{Decay Rate} = 1 - \\text{factor} = 1 - 0.82 = 0.18 = 18\\%$. Note that 82% is what remains, so 18% is what was lost!`,
    distractorExplanations: {
      0: 'Arithmetic miscalculation (1 - 0.82 ≠ 0.08).',
      2: '82% is the portion retained each year, not the percentage lost.',
      3: 'Adds 0.18 to 1 instead of subtracting from 1.'
    },
    diagram: {
      title: 'Decay Function in the xy-plane',
      xAxisLabel: 't',
      yAxisLabel: 'P',
      xRange: [0, 8],
      yRange: [100, 1000],
      xStep: 1,
      yStep: 100,
      curves: [
        {
          type: 'function',
          fnType: 'exponential',
          label: 'P = 900(0.82)^t',
          color: '#ef4444',
          points: [[0, 900], [1, 738], [2, 605], [3, 496], [4, 407], [6, 274], [8, 184]],
          strokeWidth: 2.5
        }
      ]
    }
  },
  {
    id: 'ch8-q17',
    number: 17,
    exerciseNumber: 1,
    exerciseTitle: 'Exercise 1: Linear & Exponential Growth Mastery',
    question: 'What is the initial value of:\nA = 350(1.12)^t?',
    options: ['12', '112', '350', '462'],
    correctIndex: 2,
    correctAnswerText: '350',
    explanation: `Step-by-Step Algebraic Evaluation:
1. The initial value is the value of the function at $t = 0$.
2. Substitute $t = 0$:
   $$A(0) = 350(1.12)^0$$
3. Since any non-zero number raised to the power 0 is 1 ($1.12^0 = 1$):
   $$A(0) = 350 \\times 1 = 350$$
4. Therefore, the initial value is 350.

Teacher's SAT Pro-Tip:
In $y = ab^x$, the leading coefficient $a$ is always the y-intercept / initial value!`,
    distractorExplanations: {
      0: '12 comes from the 12% growth rate.',
      1: '112 comes from multiplying the factor 1.12 by 100.',
      3: '462 is an arbitrary calculated value.'
    },
    diagram: {
      title: 'Exponential Function in the xy-plane',
      xAxisLabel: 't',
      yAxisLabel: 'A',
      xRange: [0, 6],
      yRange: [250, 750],
      xStep: 1,
      yStep: 100,
      curves: [
        {
          type: 'function',
          fnType: 'exponential',
          label: 'A = 350(1.12)^t',
          color: '#8b5cf6',
          points: [[0, 350], [1, 392], [2, 439], [3, 492], [4, 551], [5, 617], [6, 691]],
          strokeWidth: 2.5
        }
      ]
    }
  },
  {
    id: 'ch8-q18',
    number: 18,
    exerciseNumber: 1,
    exerciseTitle: 'Exercise 1: Linear & Exponential Growth Mastery',
    question: 'A population is multiplied by 1.25 every year.\n\nWhat is the percentage growth rate?',
    options: ['1.25%', '12.5%', '25%', '125%'],
    correctIndex: 2,
    correctAnswerText: '25%',
    explanation: `Step-by-Step Conversion:
1. The annual multiplier (growth factor) is $b = 1.25$.
2. Growth rate $r = b - 1 = 1.25 - 1 = 0.25$.
3. Convert to a percentage:
   $$0.25 \\times 100\\% = 25\\%$$
4. The population grows by 25% each year.

Teacher's SAT Pro-Tip:
Growth Factor $1.25 = 1 + 0.25 \\implies 25\\%$ growth!`,
    distractorExplanations: {
      0: 'Confuses 1.25 with 1.25%.',
      1: 'Off by decimal place (12.5% = factor 1.125).',
      3: '125% represents the total size relative to the previous year, not the net increase.'
    },
    diagram: {
      title: 'Annual Population Growth in the xy-plane',
      xAxisLabel: 'Years',
      yAxisLabel: 'Population Factor',
      xRange: [0, 4],
      yRange: [0.5, 3],
      xStep: 1,
      yStep: 0.5,
      curves: [
        {
          type: 'function',
          fnType: 'exponential',
          label: 'y = 1.25^x',
          color: '#8b5cf6',
          points: [[0, 1], [1, 1.25], [2, 1.56], [3, 1.95], [4, 2.44]],
          strokeWidth: 2.5
        }
      ]
    }
  },
  {
    id: 'ch8-q19',
    number: 19,
    exerciseNumber: 1,
    exerciseTitle: 'Exercise 1: Linear & Exponential Growth Mastery',
    question: 'A quantity decreases by 35% each month.\n\nWhat is its monthly decay factor?',
    options: ['0.35', '0.65', '1.35', '35'],
    correctIndex: 1,
    correctAnswerText: '0.65',
    explanation: `Step-by-Step Decay Factor Calculation:
1. Percentage decrease $r = 35\\% = 0.35$.
2. Decay factor $b = 1 - r$:
   $$b = 1 - 0.35 = 0.65$$
3. Each month, the remaining quantity is multiplied by 0.65.

Teacher's SAT Pro-Tip:
"Decreases by 35%" $\\implies$ Multiplier is $1 - 0.35 = 0.65$. Never use 0.35 as the base multiplier!`,
    distractorExplanations: {
      0: '0.35 is the fraction lost, not the multiplier for what remains.',
      2: '1.35 represents a 35% increase (growth).',
      3: '35 is the raw percentage number.'
    },
    diagram: {
      title: 'Decay Function in the xy-plane',
      xAxisLabel: 'Months',
      yAxisLabel: 'Remaining Fraction',
      xRange: [0, 4],
      yRange: [0, 1.2],
      xStep: 1,
      yStep: 0.2,
      curves: [
        {
          type: 'function',
          fnType: 'exponential',
          label: 'y = (0.65)^x',
          color: '#ef4444',
          points: [[0, 1], [1, 0.65], [2, 0.42], [3, 0.27], [4, 0.18]],
          strokeWidth: 2.5
        }
      ]
    }
  },
  {
    id: 'ch8-q10_20',
    number: 20,
    exerciseNumber: 1,
    exerciseTitle: 'Exercise 1: Linear & Exponential Growth Mastery',
    question: 'Which equation represents exponential growth?',
    options: [
      'y = 4x + 9',
      'y = 9 - 4x',
      'y = 7(1.04)^x',
      'y = x² + 4'
    ],
    correctIndex: 2,
    correctAnswerText: 'y = 7(1.04)^x',
    explanation: `Step-by-Step Model Classification:
- Option A: $y = 4x + 9$ is a linear equation with slope $m = 4$.
- Option B: $y = 9 - 4x$ is a linear equation with slope $m = -4$.
- Option C: $y = 7(1.04)^x$ is of the form $y = ab^x$ with $b = 1.04 > 1$, which represents exponential growth (4% growth per period).
- Option D: $y = x^2 + 4$ is a quadratic polynomial equation.

Teacher's SAT Pro-Tip:
In an exponential function, the variable $x$ is in the EXPONENT ($ab^x$). In linear and quadratic equations, $x$ is in the base!`,
    distractorExplanations: {
      0: 'Linear model.',
      1: 'Linear model.',
      3: 'Quadratic model.'
    }
  },

  // ==========================================
  // SECTION D: GRAPHS & TABLES (Q21 - Q26)
  // ==========================================
  {
    id: 'ch8-q21',
    number: 21,
    exerciseNumber: 1,
    exerciseTitle: 'Exercise 1: Linear & Exponential Growth Mastery',
    question: 'A graph is a straight line with a positive constant slope.\n\nWhich model is most appropriate?',
    options: ['Linear', 'Exponential', 'Quadratic', 'Inverse'],
    correctIndex: 0,
    correctAnswerText: 'Linear',
    explanation: `Step-by-Step Graphical Identification:
1. By definition, a relationship whose graph forms a non-vertical straight line with constant slope is a linear function ($y = mx + b$).
2. Exponential graphs curve continuously upward or downward with changing slopes.
3. Quadratic graphs form parabolas.
4. Therefore, the model is linear.

Teacher's SAT Pro-Tip:
Straight line with constant slope = Linear!`,
    distractorExplanations: {
      1: 'Exponential graphs are curved, not straight.',
      2: 'Quadratic graphs form U-shaped parabolas.',
      3: 'Inverse variations form hyperbolas.'
    }
  },
  {
    id: 'ch8-q22',
    number: 22,
    exerciseNumber: 1,
    exerciseTitle: 'Exercise 1: Linear & Exponential Growth Mastery',
    question: 'A graph starts slowly and then becomes increasingly steep as x increases.\n\nWhich model is most likely?',
    options: ['Constant', 'Linear', 'Exponential growth', 'Exponential decay'],
    correctIndex: 2,
    correctAnswerText: 'Exponential growth',
    explanation: `Step-by-Step Graphical Interpretation:
1. In an exponential growth model $y = ab^x$ with $b > 1$:
   - For small values of $x$, the slope is relatively gentle.
   - As $x$ increases, the slope becomes increasingly steep because the rate of increase is proportional to the current size.
2. This accelerating upward curve is the classic signature of exponential growth.

Teacher's SAT Pro-Tip:
Accelerating upward curve with increasing steepness = Exponential growth ($b > 1$)!`,
    distractorExplanations: {
      0: 'A constant graph is a flat horizontal line with slope 0.',
      1: 'A linear graph has constant, unchanging steepness (straight line).',
      3: 'Exponential decay decreases and levels off toward zero.'
    }
  },
  {
    id: 'ch8-q23',
    number: 23,
    exerciseNumber: 1,
    exerciseTitle: 'Exercise 1: Linear & Exponential Growth Mastery',
    question: 'A graph decreases rapidly at first and then gradually levels toward the x-axis.\n\nWhich model is most likely?',
    options: ['Linear growth', 'Exponential decay', 'Exponential growth', 'Constant'],
    correctIndex: 1,
    correctAnswerText: 'Exponential decay',
    explanation: `Step-by-Step Graphical Interpretation:
1. In an exponential decay model $y = ab^x$ where $0 < b < 1$:
   - The graph falls rapidly initially when the values are large.
   - As values approach zero, the absolute decreases become smaller and smaller.
   - The graph approaches the horizontal asymptote $y = 0$ asymptotically without crossing it.
2. This characterizes exponential decay.

Teacher's SAT Pro-Tip:
Falling curve that levels off toward the horizontal axis = Exponential decay ($0 < b < 1$)!`,
    distractorExplanations: {
      0: 'Linear growth is an upward straight line.',
      2: 'Exponential growth rises increasingly quickly.',
      3: 'A constant function is horizontal with no decrease.'
    }
  },
  {
    id: 'ch8-q24',
    number: 24,
    exerciseNumber: 1,
    exerciseTitle: 'Exercise 1: Linear & Exponential Growth Mastery',
    question: 'The table is:\nx: 0, 1, 2, 3\ny: 6, 12, 24, 48\n\nWhich equation represents the data?',
    options: [
      'y = 6x + 6',
      'y = 6(2)^x',
      'y = 2(6)^x',
      'y = 12x'
    ],
    correctIndex: 1,
    correctAnswerText: 'y = 6(2)^x',
    explanation: `Step-by-Step Table Analysis:
1. Check the initial value at $x = 0$:
   $$y(0) = 6 \\implies a = 6$$
2. Check the consecutive ratios:
   $$\\frac{12}{6} = 2, \\quad \\frac{24}{12} = 2, \\quad \\frac{48}{24} = 2$$
   The constant ratio is $b = 2$.
3. Substitute $a = 6$ and $b = 2$ into $y = a(b)^x$:
   $$y = 6(2)^x$$

Teacher's SAT Pro-Tip:
At $x = 0$, $y = a(2)^0 = a = 6$. The doubling pattern gives base $2$, immediately yielding $y = 6(2)^x$!`,
    distractorExplanations: {
      0: 'Linear model gives y(2) = 18 ≠ 24.',
      2: 'Swaps initial value with multiplier base (starts at 2 instead of 6).',
      3: 'Linear direct variation gives y(0) = 0 ≠ 6.'
    },
    diagram: {
      title: 'Table Data in the xy-plane',
      xAxisLabel: 'x',
      yAxisLabel: 'y',
      xRange: [0, 4],
      yRange: [0, 55],
      xStep: 1,
      yStep: 10,
      curves: [
        {
          type: 'points',
          label: 'Table Coordinates',
          color: '#6d28d9',
          points: [[0, 6], [1, 12], [2, 24], [3, 48]]
        }
      ]
    }
  },
  {
    id: 'ch8-q25',
    number: 25,
    exerciseNumber: 1,
    exerciseTitle: 'Exercise 1: Linear & Exponential Growth Mastery',
    question: 'The table is:\nx: 0, 1, 2, 3\ny: 11, 16, 21, 26\n\nWhich equation represents the data?',
    options: [
      'y = 5x + 11',
      'y = 11(5)^x',
      'y = 16x + 11',
      'y = 5(11)^x'
    ],
    correctIndex: 0,
    correctAnswerText: 'y = 5x + 11',
    explanation: `Step-by-Step Table Analysis:
1. Check the consecutive differences:
   $$16 - 11 = +5$$
   $$21 - 16 = +5$$
   $$26 - 21 = +5$$
   Since differences are constant ($+5$), the slope is $m = 5$.
2. Identify the y-intercept at $x = 0$:
   $$b = 11$$
3. Write the linear equation:
   $$y = 5x + 11$$

Teacher's SAT Pro-Tip:
Constant $+5$ jump for every $+1$ in $x$ means slope $m = 5$. Value at $x = 0$ is $11$. Equation is $y = 5x + 11$.`,
    distractorExplanations: {
      1: 'Exponential model multiplying by 5 each step (y(1) would be 55, not 16).',
      2: 'Uses 16 as slope instead of difference 5.',
      3: 'Exponential model starting at 5.'
    },
    diagram: {
      title: 'Table Data in the xy-plane',
      xAxisLabel: 'x',
      yAxisLabel: 'y',
      xRange: [0, 4],
      yRange: [0, 30],
      xStep: 1,
      yStep: 5,
      curves: [
        {
          type: 'points',
          label: 'Table Coordinates',
          color: '#1d4ed8',
          points: [[0, 11], [1, 16], [2, 21], [3, 26]]
        }
      ]
    }
  },
  {
    id: 'ch8-q26',
    number: 26,
    exerciseNumber: 1,
    exerciseTitle: 'Exercise 1: Linear & Exponential Growth Mastery',
    question: 'A table has equal consecutive ratios.\n\nWhat type of model is most likely?',
    options: ['Linear', 'Exponential', 'Constant', 'Quadratic'],
    correctIndex: 1,
    correctAnswerText: 'Exponential',
    explanation: `Step-by-Step Mathematical Concept:
1. An arithmetic sequence has equal consecutive differences $\\to$ Linear model.
2. A geometric sequence has equal consecutive ratios ($y_{n+1} / y_n = b$) $\\to$ Exponential model ($y = ab^x$).
3. Therefore, equal consecutive ratios define an exponential model.

Teacher's SAT Pro-Tip:
Key Memory Rule:
- Equal differences $\\iff$ Linear ($y = mx + b$)
- Equal ratios $\\iff$ Exponential ($y = ab^x$)`,
    distractorExplanations: {
      0: 'Linear requires equal differences, not equal ratios.',
      2: 'A constant model has ratios of 1 and differences of 0.',
      3: 'Quadratic models have equal second differences.'
    }
  },

  // ==========================================
  // SECTION E: MIXED SAT CHALLENGE (Q27 - Q30)
  // ==========================================
  {
    id: 'ch8-q27',
    number: 27,
    exerciseNumber: 1,
    exerciseTitle: 'Exercise 1: Linear & Exponential Growth Mastery',
    question: 'Model A:\ny = 50 + 12x\n\nModel B:\ny = 50(1.12)^x\n\nWhich statement is correct?',
    options: [
      'Both models are linear.',
      'Both models are exponential.',
      'Model A is linear and Model B is exponential.',
      'Model A is exponential and Model B is linear.'
    ],
    correctIndex: 2,
    correctAnswerText: 'Model A is linear and Model B is exponential.',
    explanation: `Step-by-Step Structural Classification:
1. Examine Model A: $y = 12x + 50$
   - Matches the form $y = mx + b$.
   - The variable $x$ is multiplied by a constant slope of 12.
   - Represents linear growth (adds 12 units for every 1 unit increase in $x$).
2. Examine Model B: $y = 50(1.12)^x$
   - Matches the form $y = ab^x$.
   - The variable $x$ is in the exponent.
   - Represents exponential growth (multiplies by 1.12, a 12% increase each period).
3. Therefore, Model A is linear and Model B is exponential.

Teacher's SAT Pro-Tip:
Look at where $x$ lives! If $x$ is multiplied ($12x$), it's linear. If $x$ is in the exponent ($(1.12)^x$), it's exponential.`,
    distractorExplanations: {
      0: 'Model B has x in the exponent and is exponential.',
      1: 'Model A has constant slope and is linear.',
      3: 'Reverses the classifications.'
    },
    diagram: {
      title: 'Comparing Linear and Exponential Models in the xy-plane',
      xAxisLabel: 'x',
      yAxisLabel: 'y',
      xRange: [0, 15],
      yRange: [40, 260],
      xStep: 3,
      yStep: 40,
      curves: [
        {
          type: 'line',
          label: 'Model A: y = 12x + 50',
          color: '#3b82f6',
          expression: '50 + 12*x',
          points: [[0, 50], [5, 110], [10, 170], [15, 230]],
          strokeWidth: 2.5
        },
        {
          type: 'function',
          fnType: 'exponential',
          label: 'Model B: y = 50(1.12)^x',
          color: '#8b5cf6',
          expression: '50*(1.12**x)',
          points: [[0, 50], [5, 88.1], [10, 155.3], [15, 273.7]],
          strokeWidth: 2.5,
          style: 'dashed'
        }
      ]
    }
  },
  {
    id: 'ch8-q28',
    number: 28,
    exerciseNumber: 1,
    exerciseTitle: 'Exercise 1: Linear & Exponential Growth Mastery',
    question: 'Two models begin with the same initial value.\nOne increases by $20 every year.\nThe other increases by 20% every year.\n\nWhich statement is true?',
    options: [
      'Both remain equal for all years.',
      'The first is linear and the second is exponential.',
      'The first is exponential and the second is linear.',
      'Both are exponential.'
    ],
    correctIndex: 1,
    correctAnswerText: 'The first is linear and the second is exponential.',
    explanation: `Step-by-Step Wording Translation:
1. "Increases by $20 every year":
   - A constant dollar amount ($20) is added each period.
   - Constant additive change is linear ($y = 20t + b$).
2. "Increases by 20% every year":
   - The quantity is multiplied by $1 + 0.20 = 1.20$ each period.
   - Constant percentage multiplier is exponential ($y = a(1.20)^t$).
3. Thus, the first is linear and the second is exponential.

Teacher's SAT Pro-Tip:
"by $20" $\\implies$ additive $\\implies$ linear.
"by 20%" $\\implies$ multiplicative $\\implies$ exponential!`,
    distractorExplanations: {
      0: 'Over time, a 20% exponential increase compounds and vastly outgrows a flat $20 increase.',
      2: 'Reverses the two definitions.',
      3: 'The first model is linear, not exponential.'
    },
    diagram: {
      title: 'Flat Dollar vs Percentage Growth in the xy-plane',
      xAxisLabel: 'Years (t)',
      yAxisLabel: 'Value ($)',
      xRange: [0, 8],
      yRange: [80, 450],
      xStep: 1,
      yStep: 50,
      curves: [
        {
          type: 'line',
          label: 'Model 1 (+$20/year)',
          color: '#3b82f6',
          expression: '100 + 20*x',
          points: [[0, 100], [2, 140], [4, 180], [6, 220], [8, 260]],
          strokeWidth: 2.5
        },
        {
          type: 'function',
          fnType: 'exponential',
          label: 'Model 2 (+20%/year)',
          color: '#8b5cf6',
          expression: '100*(1.20**x)',
          points: [[0, 100], [2, 144], [4, 207], [6, 298], [8, 430]],
          strokeWidth: 2.5,
          style: 'dashed'
        }
      ]
    }
  },
  {
    id: 'ch8-q29',
    number: 29,
    exerciseNumber: 1,
    exerciseTitle: 'Exercise 1: Linear & Exponential Growth Mastery',
    question: 'A quantity follows:\nA = 100(1.05)^t\n\nWhat is A when t = 2?',
    options: ['105', '110', '110.25', '125'],
    correctIndex: 2,
    correctAnswerText: '110.25',
    explanation: `Step-by-Step Algebraic Evaluation:
1. Substitute $t = 2$ into the exponential equation:
   $$A(2) = 100(1.05)^2$$
2. Calculate $(1.05)^2$:
   $$1.05 \\times 1.05 = 1.1025$$
3. Multiply by the initial amount 100:
   $$A(2) = 100 \\times 1.1025 = 110.25$$

Teacher's SAT Pro-Tip:
Watch out for simple addition traps! $100 + 5 + 5 = 110$ is linear. Exponential compounding adds 5% on top of the first year's 105 ($105 \\times 1.05 = 110.25$).`,
    distractorExplanations: {
      0: 'Value at t = 1, not t = 2 (100 × 1.05 = 105).',
      1: 'Linear calculation (adding 5 twice: 100 + 10 = 110) that ignores exponential compounding.',
      3: 'Arbitrary calculation error.'
    },
    diagram: {
      title: 'Graph in the xy-plane',
      xAxisLabel: 't',
      yAxisLabel: 'A',
      xRange: [-10, 15],
      yRange: [0, 250],
      xStep: 5,
      yStep: 50,
      curves: [
        {
          type: 'function',
          fnType: 'exponential',
          label: 'A = 100(1.05)^t',
          expression: '100 * (1.05 ** x)',
          color: '#8b5cf6',
          strokeWidth: 2.5
        }
      ]
    }
  },
  {
    id: 'ch8-q30',
    number: 30,
    exerciseNumber: 1,
    exerciseTitle: 'Exercise 1: Linear & Exponential Growth Mastery',
    question: 'A quantity follows:\nA = 400(0.90)^t\n\nWhat is the value after 3 periods?',
    options: ['291.6', '300', '324', '360'],
    correctIndex: 0,
    correctAnswerText: '291.6',
    explanation: `Step-by-Step Algebraic Evaluation:
1. Substitute $t = 3$ into the decay formula:
   $$A(3) = 400(0.90)^3$$
2. Calculate $(0.90)^3$:
   $$0.90 \\times 0.90 = 0.81$$
   $$0.81 \\times 0.90 = 0.729$$
3. Multiply by 400:
   $$A(3) = 400 \\times 0.729 = 291.6$$

Step-by-Step Sequential Check:
- Period 0: $400$
- Period 1: $400 \\times 0.90 = 360$
- Period 2: $360 \\times 0.90 = 324$
- Period 3: $324 \\times 0.90 = 291.6$

Teacher's SAT Pro-Tip:
Each period retains 90% of the PREVIOUS period's total, leading to $291.6$ after 3 periods!`,
    distractorExplanations: {
      1: 'Linear calculation subtracting 10% (40 units) 3 times: 400 - 3(40) = 400 - 120 = 280 (or rounded to 300).',
      2: 'Value after 2 periods (324), not 3 periods.',
      3: 'Value after 1 period (360), not 3 periods.'
    },
    diagram: {
      title: 'Graph in the xy-plane',
      xAxisLabel: 't',
      yAxisLabel: 'A',
      xRange: [-5, 15],
      yRange: [0, 500],
      xStep: 5,
      yStep: 100,
      curves: [
        {
          type: 'function',
          fnType: 'exponential',
          label: 'A = 400(0.90)^t',
          expression: '400 * (0.90 ** x)',
          color: '#ef4444',
          strokeWidth: 2.5
        }
      ]
    }
  },
  // ==========================================
  // SECTION G: GRAPH CONDITIONS & TRANSFORMATIONS (Q31 - Q40)
  // ==========================================
  {
    id: 'ch8-q31',
    number: 31,
    exerciseNumber: 1,
    exerciseTitle: 'Exercise 1: Linear & Exponential Growth Mastery',
    question: 'For which value of b does the function f(x) = 7(b)^x represent exponential growth?',
    options: ['0.4', '0.8', '1', '1.3'],
    correctIndex: 3,
    correctAnswerText: '1.3',
    explanation: `Step-by-Step Mathematical Analysis:
1. In an exponential function of the form $f(x) = a(b)^x$ with $a > 0$, the function represents exponential growth if and only if the base multiplier satisfies $b > 1$.
2. Evaluating each option:
   - $b = 0.4 < 1 \\implies$ Exponential decay ($60\\%$ decrease per unit $x$)
   - $b = 0.8 < 1 \\implies$ Exponential decay ($20\\%$ decrease per unit $x$)
   - $b = 1 \\implies$ Constant horizontal line ($f(x) = 7(1)^x = 7$)
   - $b = 1.3 > 1 \\implies$ Exponential growth ($30\\%$ increase per unit $x$)
3. Therefore, $b = 1.3$ is the only value that produces exponential growth.

Teacher's SAT Pro-Tip:
Base condition for growth: $b > 1$. The scale factor $a = 7$ only sets the vertical scale; the base $b$ determines whether the curve grows or decays!`,
    distractorExplanations: {
      0: '0.4 is between 0 and 1, which represents exponential decay (a 60% decrease per period).',
      1: '0.8 is between 0 and 1, which represents exponential decay (a 20% decrease per period).',
      2: 'When b = 1, f(x) = 7(1)^x = 7 is a flat constant line, not exponential growth.'
    }
  },
  {
    id: 'ch8-q32',
    number: 32,
    exerciseNumber: 1,
    exerciseTitle: 'Exercise 1: Linear & Exponential Growth Mastery',
    question: 'For which value of b does the function f(x) = 12(b)^x represent exponential decay?',
    options: ['1.4', '1.1', '0.75', '2'],
    correctIndex: 2,
    correctAnswerText: '0.75',
    explanation: `Step-by-Step Mathematical Analysis:
1. For an exponential model $f(x) = a(b)^x$ with $a > 0$, exponential decay occurs when the base multiplier is strictly between 0 and 1 ($0 < b < 1$).
2. Testing the given values:
   - $b = 1.4 > 1 \\implies$ Exponential growth ($+40\\%$)
   - $b = 1.1 > 1 \\implies$ Exponential growth ($+10\\%$)
   - $b = 0.75$ satisfies $0 < 0.75 < 1 \\implies$ Exponential decay (retains $75\\%$, losing $25\\%$ each period)
   - $b = 2 > 1 \\implies$ Exponential doubling
3. Therefore, $b = 0.75$ represents exponential decay.

Teacher's SAT Pro-Tip:
Decay condition: $0 < b < 1$. Each period the output is multiplied by a positive fraction less than 1, causing values to shrink toward zero!`,
    distractorExplanations: {
      0: '1.4 is greater than 1, which models 40% exponential growth.',
      1: '1.1 is greater than 1, which models 10% exponential growth.',
      3: '2 is greater than 1, which models exponential doubling.'
    }
  },
  {
    id: 'ch8-q33',
    number: 33,
    exerciseNumber: 1,
    exerciseTitle: 'Exercise 1: Linear & Exponential Growth Mastery',
    question: 'What is the y-intercept of the function f(x) = 9(4)^x?',
    options: ['0', '4', '9', '36'],
    correctIndex: 2,
    correctAnswerText: '9',
    explanation: `Step-by-Step Mathematical Analysis:
1. The $y$-intercept of any function occurs where the graph crosses the vertical $y$-axis, which is found by evaluating $f(0)$.
2. Substitute $x = 0$ into $f(x)$:
   $$f(0) = 9(4)^0$$
3. By exponent rules, $4^0 = 1$:
   $$f(0) = 9(1) = 9$$
4. Therefore, the $y$-intercept is at $(0, 9)$, with a $y$-value of $9$.

Teacher's SAT Pro-Tip:
In any standard exponential function $f(x) = a(b)^x$, the leading coefficient $a$ is always the $y$-intercept because $b^0 = 1$!`,
    distractorExplanations: {
      0: 'The graph does not pass through the origin (0, 0); f(0) = 9.',
      1: '4 is the base growth factor b, not the y-intercept.',
      3: '36 is the value of f(1) = 9(4)^1, which is the value at x = 1, not x = 0.'
    },
    diagram: {
      title: 'Graph of f(x) = 9(4)^x in the xy-plane',
      xAxisLabel: 'x',
      yAxisLabel: 'y',
      xRange: [0, 3],
      yRange: [0, 160],
      xStep: 1,
      yStep: 40,
      curves: [
        {
          type: 'function',
          fnType: 'exponential',
          label: 'f(x) = 9(4)^x',
          expression: '9*(4**x)',
          color: '#3b82f6',
          points: [[0, 9], [1, 36], [2, 144]],
          strokeWidth: 2.5
        }
      ]
    }
  },
  {
    id: 'ch8-q34',
    number: 34,
    exerciseNumber: 1,
    exerciseTitle: 'Exercise 1: Linear & Exponential Growth Mastery',
    question: 'What is the y-intercept of the function f(x) = 6(2)^x + 5?',
    options: ['(0, 5)', '(0, 6)', '(0, 11)', '(5, 0)'],
    correctIndex: 2,
    correctAnswerText: '(0, 11)',
    explanation: `Step-by-Step Mathematical Analysis:
1. To find the $y$-intercept, set the input variable $x = 0$:
   $$f(0) = 6(2)^0 + 5$$
2. Apply the zero exponent property ($2^0 = 1$):
   $$f(0) = 6(1) + 5 = 6 + 5 = 11$$
3. Therefore, the $y$-intercept is the coordinate point $(0, 11)$.

Teacher's SAT Pro-Tip:
SAT Trap Alert: In $f(x) = a(b)^x + k$, the $y$-intercept is $(0, a + k)$, NOT simply $(0, a)$ or $(0, k)$! Here $a + k = 6 + 5 = 11$.`,
    distractorExplanations: {
      0: '(0, 5) mistakes the vertical shift / horizontal asymptote constant k = 5 for the y-intercept.',
      1: '(0, 6) forgets to add the vertical shift k = 5 to the scale factor a = 6.',
      3: '(5, 0) is an x-intercept format with an incorrect value.'
    },
    diagram: {
      title: 'Graph of f(x) = 6(2)^x + 5 in the xy-plane',
      xAxisLabel: 'x',
      yAxisLabel: 'y',
      xRange: [-2, 4],
      yRange: [0, 60],
      xStep: 1,
      yStep: 10,
      curves: [
        {
          type: 'function',
          fnType: 'exponential',
          label: 'f(x) = 6(2)^x + 5',
          expression: '6*(2**x) + 5',
          color: '#8b5cf6',
          points: [[-1, 8], [0, 11], [1, 17], [2, 29], [3, 53]],
          strokeWidth: 2.5
        }
      ]
    }
  },
  {
    id: 'ch8-q35',
    number: 35,
    exerciseNumber: 1,
    exerciseTitle: 'Exercise 1: Linear & Exponential Growth Mastery',
    question: 'The graph of f(x) = 3(2)^x is transformed into g(x) = 3(2)^x + 8. What happens to the graph?',
    options: [
      'It moves 8 units left.',
      'It moves 8 units right.',
      'It moves 8 units up.',
      'It moves 8 units down.'
    ],
    correctIndex: 2,
    correctAnswerText: 'It moves 8 units up.',
    explanation: `Step-by-Step Transformation Analysis:
1. Standard function transformation rule: For any function $y = f(x)$, the equation $y = f(x) + k$ translates the graph vertically by $k$ units.
2. Here, $g(x) = f(x) + 8$, where $k = +8 > 0$.
3. Therefore, every point on the graph of $f(x)$ is translated vertically upward by 8 units.
4. The $y$-intercept shifts from $(0, 3)$ to $(0, 11)$, and the horizontal asymptote shifts from $y = 0$ to $y = 8$.

Teacher's SAT Pro-Tip:
Adding a constant outside the function $+k$ always creates a vertical shift (UP if positive, DOWN if negative). Horizontal shifts occur inside the exponent, like $f(x - h)$.`,
    distractorExplanations: {
      0: 'A horizontal shift left would be written inside the exponent as 3(2)^(x + 8).',
      1: 'A horizontal shift right would be written inside the exponent as 3(2)^(x - 8).',
      3: 'Moving 8 units down would require subtracting 8 outside: 3(2)^x - 8.'
    },
    diagram: {
      title: 'Graphs of f(x) and g(x) in the xy-plane',
      xAxisLabel: 'x',
      yAxisLabel: 'y',
      xRange: [-1, 4],
      yRange: [0, 60],
      xStep: 1,
      yStep: 10,
      curves: [
        {
          type: 'function',
          fnType: 'exponential',
          label: 'f(x) = 3(2)^x',
          expression: '3*(2**x)',
          color: '#3b82f6',
          points: [[0, 3], [1, 6], [2, 12], [3, 24], [4, 48]],
          strokeWidth: 2.5
        },
        {
          type: 'function',
          fnType: 'exponential',
          label: 'g(x) = 3(2)^x + 8',
          expression: '3*(2**x) + 8',
          color: '#8b5cf6',
          points: [[0, 11], [1, 14], [2, 20], [3, 32], [4, 56]],
          strokeWidth: 2.5
        }
      ]
    }
  },
  {
    id: 'ch8-q36',
    number: 36,
    exerciseNumber: 1,
    exerciseTitle: 'Exercise 1: Linear & Exponential Growth Mastery',
    question: 'The horizontal asymptote of f(x) = 7(0.5)^x - 4 is:',
    options: ['y = -4', 'y = 0', 'y = 4', 'y = 7'],
    correctIndex: 0,
    correctAnswerText: 'y = -4',
    explanation: `Step-by-Step Mathematical Analysis:
1. In the exponential decay function $f(x) = a(b)^x + k$, as $x \\to +\\infty$, the base term $(0.5)^x \\to 0$ because $0 < 0.5 < 1$.
2. Evaluating the asymptotic behavior as $x \\to +\\infty$:
   $$f(x) \\to 7(0) - 4 = -4$$
3. Therefore, the horizontal line that the curve approaches as $x$ increases is $y = -4$.

Teacher's SAT Pro-Tip:
SAT Shortcut: In any exponential equation $f(x) = a(b)^x + k$, the horizontal asymptote is always the horizontal line $y = k$ (the constant term outside). Here $k = -4 \\implies y = -4$.`,
    distractorExplanations: {
      1: 'y = 0 is the asymptote for an unshifted exponential function f(x) = 7(0.5)^x with k = 0.',
      2: 'y = 4 has the wrong sign; the vertical translation constant is -4, not +4.',
      3: 'y = 7 confuses the scale factor a = 7 with the horizontal asymptote.'
    },
    diagram: {
      title: 'Graph of f(x) = 7(0.5)^x - 4 in the xy-plane',
      xAxisLabel: 'x',
      yAxisLabel: 'y',
      xRange: [-1, 6],
      yRange: [-6, 12],
      xStep: 1,
      yStep: 2,
      curves: [
        {
          type: 'function',
          fnType: 'exponential',
          label: 'f(x) = 7(0.5)^x - 4',
          expression: '7*(0.5**x) - 4',
          color: '#0284c7',
          points: [[0, 3], [1, -0.5], [2, -2.25], [3, -3.125], [4, -3.56], [5, -3.78]],
          strokeWidth: 2.5
        }
      ]
    }
  },
  {
    id: 'ch8-q37',
    number: 37,
    exerciseNumber: 1,
    exerciseTitle: 'Exercise 1: Linear & Exponential Growth Mastery',
    question: 'Consider the functions f(x) = 4(1.5)^x and g(x) = 9(1.5)^x. Which statement is true?',
    options: [
      'They have different growth factors.',
      'They have the same y-intercept.',
      'They have the same growth factor but different y-intercepts.',
      'g represents exponential decay.'
    ],
    correctIndex: 2,
    correctAnswerText: 'They have the same growth factor but different y-intercepts.',
    explanation: `Step-by-Step Comparative Analysis:
1. Compare the base multipliers:
   Both $f(x)$ and $g(x)$ have base $b = 1.5$. Thus, both have identical growth factors of $1.5$ (a $50\\%$ increase per unit $x$).
2. Compare the $y$-intercepts:
   $$f(0) = 4(1.5)^0 = 4 \\implies (0, 4)$$
   $$g(0) = 9(1.5)^0 = 9 \\implies (0, 9)$$
   Since $4 \\neq 9$, the $y$-intercepts are different.
3. Therefore, they share the same growth factor but have different $y$-intercepts.

Teacher's SAT Pro-Tip:
The base $b$ determines the growth factor ($1.5 = 1.5$), while the leading coefficient $a$ determines the $y$-intercept ($4$ vs $9$).`,
    distractorExplanations: {
      0: 'Both functions have base b = 1.5, so their growth factors are identical.',
      1: 'f(0) = 4 and g(0) = 9, so their y-intercepts are distinctly different.',
      3: 'Since b = 1.5 > 1, g represents exponential growth, not decay.'
    },
    diagram: {
      title: 'Graphs of f and g in the xy-plane',
      xAxisLabel: 'x',
      yAxisLabel: 'y',
      xRange: [-4, 6],
      yRange: [0, 80],
      xStep: 2,
      yStep: 15,
      curves: [
        {
          type: 'function',
          fnType: 'exponential',
          label: 'f(x) = 4(1.5)^x',
          expression: '4 * (1.5 ** x)',
          color: '#3b82f6',
          strokeWidth: 2.5
        },
        {
          type: 'function',
          fnType: 'exponential',
          label: 'g(x) = 9(1.5)^x',
          expression: '9 * (1.5 ** x)',
          color: '#8b5cf6',
          strokeWidth: 2.5
        }
      ]
    }
  },
  {
    id: 'ch8-q38',
    number: 38,
    exerciseNumber: 1,
    exerciseTitle: 'Exercise 1: Linear & Exponential Growth Mastery',
    question: 'Consider the functions f(x) = 5(2)^x and g(x) = 5(4)^x. Which function grows faster for increasing positive values of x?',
    options: ['f', 'g', 'They grow at the same rate.', 'Neither grows.'],
    correctIndex: 1,
    correctAnswerText: 'g',
    explanation: `Step-by-Step Comparative Analysis:
1. Both functions have the same initial value $a = 5$ at $x = 0$.
2. Compare the base multipliers:
   - $f(x)$ has base $b = 2$ (doubles with each step).
   - $g(x)$ has base $b = 4$ (quadruples with each step).
3. For exponential growth ($b > 1$), a larger base produces a steeper, faster-growing curve for $x > 0$.
4. Comparing values at $x = 3$:
   $$f(3) = 5(2)^3 = 5(8) = 40$$
   $$g(3) = 5(4)^3 = 5(64) = 320$$
   Clearly $g(3) \\gg f(3)$.
5. Therefore, $g$ grows significantly faster.

Teacher's SAT Pro-Tip:
When comparing exponential growth functions with $b > 1$, the function with the larger base always grows faster!`,
    distractorExplanations: {
      0: 'f has a growth factor of 2, which is slower than g\'s growth factor of 4.',
      2: 'They have different bases (2 vs 4), so their rates of growth cannot be the same.',
      3: 'Both have base b > 1, so both strictly represent exponential growth.'
    },
    diagram: {
      title: 'Graphs of f and g in the xy-plane',
      xAxisLabel: 'x',
      yAxisLabel: 'y',
      xRange: [-3, 4],
      yRange: [0, 150],
      xStep: 1,
      yStep: 25,
      curves: [
        {
          type: 'function',
          fnType: 'exponential',
          label: 'f',
          expression: '5 * (2 ** x)',
          color: '#3b82f6',
          strokeWidth: 2.5
        },
        {
          type: 'function',
          fnType: 'exponential',
          label: 'g',
          expression: '5 * (4 ** x)',
          color: '#8b5cf6',
          strokeWidth: 2.5
        }
      ]
    }
  },
  {
    id: 'ch8-q39',
    number: 39,
    exerciseNumber: 1,
    exerciseTitle: 'Exercise 1: Linear & Exponential Growth Mastery',
    question: 'Which equation represents exponential growth with a y-intercept of 4 and a horizontal asymptote of y = -3?',
    options: [
      'f(x) = 4(2)^x - 3',
      'f(x) = 7(2)^x - 3',
      'f(x) = 3(2)^x + 4',
      'f(x) = 7(2)^x + 3'
    ],
    correctIndex: 1,
    correctAnswerText: 'f(x) = 7(2)^x - 3',
    explanation: `Step-by-Step Model Deduction:
1. Start with the general shifted exponential form:
   $$f(x) = a(b)^x + k$$
2. Identify the horizontal asymptote:
   $$\\text{Asymptote } y = k = -3 \\implies k = -3$$
3. Use the $y$-intercept condition $(0, 4)$:
   $$f(0) = a(b)^0 + k = 4$$
   $$a(1) + (-3) = 4 \\implies a - 3 = 4 \\implies a = 7$$
4. Confirm exponential growth:
   The base must satisfy $b > 1$. With $b = 2$, $f(x) = 7(2)^x - 3$ models exponential growth.
5. Verifying the properties:
   - Asymptote: $y = -3$
   - $y$-intercept: $f(0) = 7(2)^0 - 3 = 7 - 3 = 4$
   - Growth behavior: $b = 2 > 1$

Teacher's SAT Pro-Tip:
Always solve: $k = \\text{asymptote} = -3$, and $a + k = y\\text{-intercept} \\implies a + (-3) = 4 \\implies a = 7$.`,
    distractorExplanations: {
      0: 'In 4(2)^x - 3, the y-intercept is f(0) = 4(1) - 3 = 1, not 4.',
      2: 'In 3(2)^x + 4, the horizontal asymptote is y = +4, not y = -3.',
      3: 'In 7(2)^x + 3, the horizontal asymptote is y = +3 and y-intercept is 10.'
    }
  },
  {
    id: 'ch8-q40',
    number: 40,
    exerciseNumber: 1,
    exerciseTitle: 'Exercise 1: Linear & Exponential Growth Mastery',
    question: 'A function is given by f(x) = a(b)^x + k, where a = 5, b = 1.2, and k = 10. Which statement is correct?',
    options: [
      'The function represents exponential decay and has y-intercept 5.',
      'The function represents exponential growth and has y-intercept 15.',
      'The function represents exponential growth and has y-intercept 10.',
      'The function is linear and has y-intercept 15.'
    ],
    correctIndex: 1,
    correctAnswerText: 'The function represents exponential growth and has y-intercept 15.',
    explanation: `Step-by-Step Parameter Evaluation:
1. Determine growth vs. decay:
   The base multiplier is $b = 1.2$. Since $b > 1$, the function represents exponential growth ($20\\%$ increase per unit $x$).
2. Calculate the $y$-intercept:
   Substitute $x = 0$:
   $$f(0) = a(b)^0 + k = 5(1.2)^0 + 10 = 5(1) + 10 = 5 + 10 = 15$$
3. Thus, the function models exponential growth and crosses the $y$-axis at $(0, 15)$.

Teacher's SAT Pro-Tip:
$b = 1.2 > 1$ guarantees exponential growth, and $y\\text{-intercept} = a + k = 5 + 10 = 15$.`,
    distractorExplanations: {
      0: 'b = 1.2 > 1 represents exponential growth, not decay, and the y-intercept is 5 + 10 = 15, not 5.',
      2: '10 is the horizontal asymptote k, not the y-intercept (which is a + k = 15).',
      3: 'The variable x is in the exponent, so this is an exponential function, not a linear one.'
    },
    diagram: {
      title: 'Graph of f(x) in the xy-plane',
      xAxisLabel: 'x',
      yAxisLabel: 'y',
      xRange: [0, 8],
      yRange: [0, 40],
      xStep: 1,
      yStep: 5,
      curves: [
        {
          type: 'function',
          fnType: 'exponential',
          label: 'f(x) = 5(1.2)^x + 10',
          expression: '5*(1.2**x) + 10',
          color: '#3b82f6',
          points: [[0, 15], [2, 17.2], [4, 20.37], [6, 24.93], [8, 31.5]],
          strokeWidth: 2.5
        }
      ]
    }
  }
];

