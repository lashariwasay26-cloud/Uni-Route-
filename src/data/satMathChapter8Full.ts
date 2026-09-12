import { FullSatMathChapter, MathWorkedExample, MathTheorySection } from './satMathConcepts';
import { CHAPTER_8_PRACTICE_QUESTIONS } from './satMathChapter8Questions';

export const CHAPTER_8_WORKED_EXAMPLES: MathWorkedExample[] = [
  {
    title: 'Example 1: Identifying Linear Growth',
    question: 'A sequence of numbers is:\n12, 19, 26, 33, 40\n\nIs the pattern linear or exponential?',
    options: ['Linear', 'Exponential', 'Quadratic', 'Neither'],
    correctAnswer: 'Linear',
    correctIndex: 0,
    explanation: `Step-by-Step Algebraic Solution:
1. Check the differences between consecutive terms:
   $$19 - 12 = 7$$
   $$26 - 19 = 7$$
   $$33 - 26 = 7$$
   $$40 - 33 = 7$$
2. Since the difference between adjacent terms is constant (+7), the sequence exhibits constant additive growth.
3. Therefore, the pattern is Linear.

Teacher's SAT Pro-Tip:
Same Difference Rule: If the step difference $\\Delta y$ is constant for equal $\\Delta x$, the relationship is strictly linear ($y = mx + b$).`,
    diagram: {
      title: 'Sequence Trend in the xy-plane',
      xAxisLabel: 'Term (n)',
      yAxisLabel: 'Value',
      xRange: [0, 6],
      yRange: [0, 50],
      xStep: 1,
      yStep: 10,
      curves: [
        {
          type: 'line',
          label: 'Linear Model (Diff = +7)',
          color: '#3b82f6',
          points: [[1, 12], [2, 19], [3, 26], [4, 33], [5, 40]],
          strokeWidth: 2.5
        },
        {
          type: 'points',
          label: 'Data Points',
          color: '#1d4ed8',
          points: [[1, 12], [2, 19], [3, 26], [4, 33], [5, 40]]
        }
      ]
    }
  },
  {
    title: 'Example 2: Identifying Exponential Growth',
    question: 'A population follows the sequence:\n4, 12, 36, 108, 324\n\nIs the growth pattern linear or exponential?',
    options: ['Exponential growth', 'Linear growth', 'Linear decay', 'Exponential decay'],
    correctAnswer: 'Exponential growth',
    correctIndex: 0,
    explanation: `Step-by-Step Algebraic Solution:
1. Check the ratios between consecutive terms:
   $$\\frac{12}{4} = 3$$
   $$\\frac{36}{12} = 3$$
   $$\\frac{108}{36} = 3$$
   $$\\frac{324}{108} = 3$$
2. Since the consecutive ratio is constant (each term is multiplied by a fixed factor of 3), the sequence exhibits constant multiplicative growth.
3. Therefore, the pattern is Exponential growth.

Teacher's SAT Pro-Tip:
Same Ratio Rule: When each value is multiplied by a fixed factor ($b = 3$), the relationship is exponential ($y = ab^x$).`,
    diagram: {
      title: 'Exponential Sequence in the xy-plane',
      xAxisLabel: 'Term (n)',
      yAxisLabel: 'Population',
      xRange: [0, 6],
      yRange: [0, 360],
      xStep: 1,
      yStep: 50,
      curves: [
        {
          type: 'function',
          fnType: 'exponential',
          label: 'Exponential Model (Ratio = 3)',
          color: '#8b5cf6',
          points: [[1, 4], [2, 12], [3, 36], [4, 108], [5, 324]],
          strokeWidth: 2.5
        },
        {
          type: 'points',
          label: 'Data Coordinates',
          color: '#6d28d9',
          points: [[1, 4], [2, 12], [3, 36], [4, 108], [5, 324]]
        }
      ]
    }
  },
  {
    title: 'Example 3: Writing a Linear Equation',
    question: 'A gym membership charges a $50 signup fee plus $30 per month. Write an equation for the total cost C after m months.',
    options: ['C = 30m + 50', 'C = 50m + 30', 'C = 80m', 'C = 50(30)^m'],
    correctAnswer: 'C = 30m + 50',
    correctIndex: 0,
    explanation: `Step-by-Step Linear Model Formulation:
1. Identify the fixed initial one-time fee ($y$-intercept $b$):
   $$\\text{Initial cost } b = 50$$
2. Identify the recurring monthly rate of change (slope $m$):
   $$\\text{Rate per month } m = +30$$
3. Combine using slope-intercept form $C = mm + b$:
   $$C = 30m + 50$$

Teacher's SAT Pro-Tip:
Look for the word "per" or "each" to find the slope $m = 30$. The one-time flat fee is always the constant term $b = 50$.`,
    diagram: {
      title: 'Gym Membership Cost in the xy-plane',
      xAxisLabel: 'Months (m)',
      yAxisLabel: 'Total Cost C ($)',
      xRange: [0, 6],
      yRange: [0, 250],
      xStep: 1,
      yStep: 50,
      curves: [
        {
          type: 'line',
          label: 'C = 30m + 50',
          color: '#3b82f6',
          points: [[0, 50], [1, 80], [2, 110], [3, 140], [4, 170], [5, 200]],
          strokeWidth: 2.5
        },
        {
          type: 'points',
          label: 'Monthly Costs',
          color: '#1d4ed8',
          points: [[0, 50], [1, 80], [2, 110], [3, 140], [4, 170], [5, 200]]
        }
      ]
    }
  },
  {
    title: 'Example 4: Linear Rate of Change (Draining Pool)',
    question: 'A pool containing 12,000 gallons of water is drained at a constant rate of 250 gallons per minute. Write an equation for the volume V of water remaining after t minutes.',
    options: ['V = 12000 - 250t', 'V = 250t - 12000', 'V = 12000(250)^t', 'V = 12000(0.75)^t'],
    correctAnswer: 'V = 12000 - 250t',
    correctIndex: 0,
    explanation: `Step-by-Step Translation Walkthrough:
1. Identify the starting volume at $t = 0$:
   $$\\text{Initial volume } b = 12,000$$
2. Identify the rate of change: water is leaving at $250$ gallons per minute, so the rate is negative:
   $$\\text{Rate of change } m = -250$$
3. Combine into a linear model:
   $$V = 12000 - 250t$$

Teacher's SAT Pro-Tip:
"Drained", "decreases", or "leaks" means a negative slope ($-250t$). Starting value is $+12,000$.`,
    diagram: {
      title: 'Pool Drainage Model in the xy-plane',
      xAxisLabel: 'Minutes (t)',
      yAxisLabel: 'Volume V (Gallons)',
      xRange: [0, 50],
      yRange: [0, 13000],
      xStep: 10,
      yStep: 2000,
      curves: [
        {
          type: 'line',
          label: 'V = 12000 - 250t',
          color: '#0284c7',
          points: [[0, 12000], [10, 9500], [20, 7000], [30, 4500], [40, 2000], [48, 0]],
          strokeWidth: 2.5
        }
      ]
    }
  },
  {
    title: 'Example 5: Exponential Growth Model',
    question: 'A town has a population of 5,000 and grows by 4% each year. Write an equation for the population P after t years.',
    options: ['P = 5000(1.04)^t', 'P = 5000(0.04)^t', 'P = 5000 + 4t', 'P = 1.04(5000)^t'],
    correctAnswer: 'P = 5000(1.04)^t',
    correctIndex: 0,
    explanation: `Step-by-Step Exponential Formulation:
1. Identify initial value $a = 5,000$.
2. Calculate the growth factor $b$:
   $$b = 1 + r = 1 + 0.04 = 1.04$$
3. Assemble into the standard exponential growth formula $P = a(b)^t$:
   $$P = 5000(1.04)^t$$

Teacher's SAT Pro-Tip:
A $4\\%$ growth rate means the population retains $100\\%$ of its size plus an extra $4\\%$, giving a multiplier of $1.04$.`,
    diagram: {
      title: 'Town Population Growth in the xy-plane',
      caption: 'Exponential growth model P(t) = 5000(1.04)^t starting at (0, 5000) with a 4% annual increase.',
      xAxisLabel: 'Years (t)',
      yAxisLabel: 'Population (P)',
      xRange: [0, 10],
      yRange: [4000, 8000],
      xStep: 2,
      yStep: 500,
      curves: [
        {
          type: 'function',
          fnType: 'exponential',
          label: 'P(t) = 5000(1.04)^t',
          expression: '5000*(1.04**x)',
          color: '#8b5cf6',
          points: [[0, 5000], [2, 5408], [4, 5849], [6, 6327], [8, 6843], [10, 7401]],
          strokeWidth: 2.5
        },
        {
          type: 'points',
          label: 'Initial Value (0, 5000)',
          color: '#ec4899',
          points: [[0, 5000]]
        },
        {
          type: 'points',
          label: 'Tracked Population Points',
          color: '#6d28d9',
          points: [[2, 5408], [4, 5849], [6, 6327], [8, 6843], [10, 7401]]
        }
      ]
    }
  },
  {
    title: 'Example 6: Exponential Decay Model',
    question: 'A car valued at $24,000 depreciates by 15% each year. Write an equation for its value V after t years.',
    options: ['V = 24000(0.85)^t', 'V = 24000(0.15)^t', 'V = 24000 - 15t', 'V = 24000(1.15)^t'],
    correctAnswer: 'V = 24000(0.85)^t',
    correctIndex: 0,
    explanation: `Step-by-Step Exponential Decay Formulation:
1. Identify initial value $a = 24,000$.
2. Calculate the decay factor $b$:
   $$b = 1 - r = 1 - 0.15 = 0.85$$
3. Assemble into the exponential formula:
   $$V = 24000(0.85)^t$$

Teacher's SAT Pro-Tip:
If a car loses $15\\%$ of its value, it retains $100\\% - 15\\% = 85\\%$ of its value each year. Hence, the base is $0.85$, NEVER $0.15$!`,
    diagram: {
      title: 'Car Depreciation in the xy-plane',
      xAxisLabel: 'Years (t)',
      yAxisLabel: 'Value V ($)',
      xRange: [0, 8],
      yRange: [0, 26000],
      xStep: 1,
      yStep: 4000,
      curves: [
        {
          type: 'function',
          fnType: 'exponential',
          label: 'V = 24000(0.85)^t',
          expression: '24000*(0.85**x)',
          color: '#ef4444',
          points: [[0, 24000], [1, 20400], [2, 17340], [3, 14739], [4, 12528], [5, 10649]],
          strokeWidth: 2.5
        },
        {
          type: 'points',
          label: 'Initial Value (0, $24,000)',
          color: '#ec4899',
          points: [[0, 24000]]
        }
      ]
    }
  },
  {
    title: 'Example 7: Finding an Initial Value',
    question: 'A population is modeled by P = 850(1.06)^t. What does 850 represent in this model?',
    options: [
      'The initial population at t = 0',
      'The population growth rate of 6% per year',
      'The population after 6 years',
      'The maximum possible population'
    ],
    correctAnswer: 'The initial population at t = 0',
    correctIndex: 0,
    explanation: `Step-by-Step Algebraic Evaluation:
1. Substitute $t = 0$ into the exponential equation:
   $$P(0) = 850(1.06)^0 = 850(1) = 850$$
2. Since $t = 0$ represents the start of the observation period, 850 is the initial population.

Teacher's SAT Pro-Tip:
In any exponential function $y = a(b)^x$, the leading coefficient $a$ is always the $y$-intercept (the initial value at $x = 0$) because $b^0 = 1$.`,
    diagram: {
      title: 'Population Model in the xy-plane',
      caption: 'Exponential model P(t) = 850(1.06)^t highlighting the initial population of 850 at t = 0.',
      xAxisLabel: 'Years (t)',
      yAxisLabel: 'Population (P)',
      xRange: [0, 8],
      yRange: [600, 1500],
      xStep: 1,
      yStep: 150,
      curves: [
        {
          type: 'function',
          fnType: 'exponential',
          label: 'P(t) = 850(1.06)^t',
          expression: '850*(1.06**x)',
          color: '#8b5cf6',
          points: [[0, 850], [1, 901], [2, 955], [3, 1012], [4, 1073], [5, 1137], [6, 1206], [7, 1278], [8, 1355]],
          strokeWidth: 2.5
        },
        {
          type: 'points',
          label: 'Initial Point (0, 850)',
          color: '#ec4899',
          points: [[0, 850]]
        },
        {
          type: 'points',
          label: 'Compound Growth Coordinates',
          color: '#6d28d9',
          points: [[1, 901], [2, 955], [3, 1012], [4, 1073], [5, 1137], [6, 1206], [7, 1278], [8, 1355]]
        }
      ]
    }
  },
  {
    title: 'Example 8: Finding a Growth Rate',
    question: 'A quantity is modeled by A = 400(1.08)^t. What is the percentage growth rate per period?',
    options: ['8%', '1.08%', '0.08%', '80%'],
    correctAnswer: '8%',
    correctIndex: 0,
    explanation: `Step-by-Step Algebraic Extraction:
1. Identify the growth factor: $b = 1.08$.
2. Relate the growth factor to the percentage growth rate:
   $$b = 1 + r \\implies 1 + r = 1.08$$
3. Solve for $r$:
   $$r = 1.08 - 1 = 0.08$$
4. Convert $r$ to percentage form:
   $$0.08 \\times 100\\% = 8\\%$$

Teacher's SAT Pro-Tip:
Fast Shortcut: Subtract 1 from the base inside the parentheses: $1.08 - 1 = 0.08 \\implies 8\\%$ growth rate per period.`,
    diagram: {
      title: 'Growth Function in the xy-plane',
      caption: 'Exponential curve A = 400(1.08)^t starting at (0, 400) and increasing at 8% per period.',
      xAxisLabel: 'Period (t)',
      yAxisLabel: 'Amount A',
      xRange: [0, 8],
      yRange: [0, 800],
      xStep: 1,
      yStep: 100,
      curves: [
        {
          type: 'function',
          fnType: 'exponential',
          label: 'A = 400(1.08)^t',
          expression: '400*(1.08**x)',
          color: '#8b5cf6',
          points: [[0, 400], [1, 432], [2, 466.6], [3, 503.9], [4, 544.2], [5, 587.7], [6, 634.8], [7, 685.5], [8, 740.4]],
          strokeWidth: 2.5
        },
        {
          type: 'points',
          label: 'Initial Point (0, 400)',
          color: '#ec4899',
          points: [[0, 400]]
        },
        {
          type: 'points',
          label: 'Growth Trajectory',
          color: '#6d28d9',
          points: [[1, 432], [2, 466.6], [3, 503.9], [4, 544.2], [5, 587.7], [6, 634.8], [7, 685.5], [8, 740.4]]
        }
      ]
    }
  },
  {
    title: 'Example 9: Finding a Decay Rate',
    question: 'A quantity is modeled by A = 900(0.72)^t. What is the percentage decrease per period?',
    options: ['28%', '72%', '0.72%', '18%'],
    correctAnswer: '28%',
    correctIndex: 0,
    explanation: `Step-by-Step Algebraic Extraction:
1. Identify the decay factor: $b = 0.72$.
2. In decay, the factor relates to rate by $b = 1 - r$:
   $$1 - r = 0.72$$
3. Solve for $r$:
   $$r = 1 - 0.72 = 0.28$$
4. Convert to percentage:
   $$0.28 \\times 100\\% = 28\\%$$

Teacher's SAT Pro-Tip:
Subtract the factor from 1: $1 - 0.72 = 0.28 = 28\\%$. $0.72$ means $72\\%$ remains, so $28\\%$ was lost!`,
    diagram: {
      title: 'Decay Function in the xy-plane',
      caption: 'Exponential decay curve A = 900(0.72)^t with 28% decrease per period.',
      xAxisLabel: 'Period (t)',
      yAxisLabel: 'Amount A',
      xRange: [0, 6],
      yRange: [0, 1000],
      xStep: 1,
      yStep: 200,
      curves: [
        {
          type: 'function',
          fnType: 'exponential',
          label: 'A = 900(0.72)^t',
          expression: '900*(0.72**x)',
          color: '#ef4444',
          points: [[0, 900], [1, 648], [2, 466.6], [3, 335.9], [4, 241.9], [5, 174.1]],
          strokeWidth: 2.5
        },
        {
          type: 'points',
          label: 'Initial Value (0, 900)',
          color: '#ec4899',
          points: [[0, 900]]
        }
      ]
    }
  },
  {
    title: 'Example 10: Exponential Model from a Table',
    question: 'A table shows values of x and y:\nx: 0, 1, 2, 3\ny: 5, 10, 20, 40\n\nWhat equation models this data?',
    options: ['y = 5(2)^x', 'y = 5x + 5', 'y = 2(5)^x', 'y = 10x'],
    correctAnswer: 'y = 5(2)^x',
    correctIndex: 0,
    explanation: `Step-by-Step Table Analysis:
1. Find initial value $a$:
   At $x = 0$, $y = 5 \\implies a = 5$.
2. Find constant ratio $b$:
   $$\\frac{10}{5} = 2, \\quad \\frac{20}{10} = 2, \\quad \\frac{40}{20} = 2 \\implies b = 2$$
3. Combine into $y = a(b)^x$:
   $$y = 5(2)^x$$

Teacher's SAT Pro-Tip:
Plug in $(0, 5)$ to find $a = 5$. Test $(1, 10)$: $5(2)^1 = 10$ (True). Matches immediately!`,
    diagram: {
      title: 'Table Data in the xy-plane',
      xAxisLabel: 'x',
      yAxisLabel: 'y',
      xRange: [0, 4],
      yRange: [0, 45],
      xStep: 1,
      yStep: 10,
      curves: [
        {
          type: 'function',
          fnType: 'exponential',
          label: 'y = 5(2)^x',
          expression: '5*(2**x)',
          color: '#8b5cf6',
          points: [[0, 5], [1, 10], [2, 20], [3, 40]],
          strokeWidth: 2.5
        },
        {
          type: 'points',
          label: 'Table Coordinates',
          color: '#6d28d9',
          points: [[0, 5], [1, 10], [2, 20], [3, 40]]
        }
      ]
    }
  },
  {
    title: 'Example 11: Distinguishing Linear vs. Exponential Sequences',
    question: 'Two models generate the following output sequences:\nModel A: 100, 120, 140, 160\nModel B: 100, 120, 144, 172.8\n\nWhich model is linear and which is exponential?',
    options: [
      'Model A is Linear, Model B is Exponential',
      'Model A is Exponential, Model B is Linear',
      'Both models are Linear',
      'Both models are Exponential'
    ],
    correctAnswer: 'Model A is Linear, Model B is Exponential',
    correctIndex: 0,
    explanation: `Step-by-Step Comparative Analysis:
1. Examine Model A:
   $$120 - 100 = 20, \\quad 140 - 120 = 20, \\quad 160 - 140 = 20$$
   Constant additive difference of $+20 \\implies$ Model A is Linear.
2. Examine Model B:
   $$\\frac{120}{100} = 1.2, \\quad \\frac{144}{120} = 1.2, \\quad \\frac{172.8}{144} = 1.2$$
   Constant multiplicative ratio of $1.2 \\implies$ Model B is Exponential.
3. Therefore:
   $$\\text{Model A} = \\text{Linear}, \\quad \\text{Model B} = \\text{Exponential}$$

Teacher's SAT Pro-Tip:
Model A adds 20 each period (constant amount). Model B adds 20% each period (starts at +20, then +24, then +28.8).`,
    diagram: {
      title: 'Comparing Sequences in the xy-plane',
      xAxisLabel: 'Step',
      yAxisLabel: 'Value',
      xRange: [0, 4],
      yRange: [80, 190],
      xStep: 1,
      yStep: 20,
      curves: [
        {
          type: 'line',
          label: 'Model A (Linear: +20)',
          color: '#3b82f6',
          points: [[0, 100], [1, 120], [2, 140], [3, 160]],
          strokeWidth: 2.5
        },
        {
          type: 'function',
          fnType: 'exponential',
          label: 'Model B (Exponential: ×1.2)',
          expression: '100*(1.2**x)',
          color: '#8b5cf6',
          points: [[0, 100], [1, 120], [2, 144], [3, 172.8]],
          strokeWidth: 2.5,
          style: 'dashed'
        }
      ]
    }
  },
  {
    title: 'Example 12: Graph Interpretation (Straight Line)',
    question: 'A graph begins near y = 10 and forms a straight line that rises at a constant steepness. What type of model is most appropriate?',
    options: ['Linear', 'Exponential growth', 'Exponential decay', 'Quadratic'],
    correctAnswer: 'Linear',
    correctIndex: 0,
    explanation: `Step-by-Step Graphical Analysis:
1. A straight line has a constant rate of change (constant slope $m$).
2. By definition, any relationship with a constant rate of change is a linear function ($y = mx + b$).
3. Therefore, the relationship is Linear.

Teacher's SAT Pro-Tip:
Straight line with constant slope $\\implies$ Linear ($y = mx + b$).`,
    diagram: {
      title: 'Straight Line Model in the xy-plane',
      xAxisLabel: 'x',
      yAxisLabel: 'y',
      xRange: [0, 6],
      yRange: [0, 30],
      xStep: 1,
      yStep: 5,
      curves: [
        {
          type: 'line',
          label: 'Linear Graph (y = 3x + 10)',
          color: '#3b82f6',
          points: [[0, 10], [1, 13], [2, 16], [3, 19], [4, 22], [5, 25], [6, 28]],
          strokeWidth: 2.5
        },
        {
          type: 'points',
          label: 'Data Points',
          color: '#1d4ed8',
          points: [[0, 10], [1, 13], [2, 16], [3, 19], [4, 22], [5, 25], [6, 28]]
        }
      ]
    }
  },
  {
    title: 'Example 13: Graph Interpretation (Exponential Curve)',
    question: 'A graph begins near y = 5 and curves upward more and more steeply as x increases. What type of model is most appropriate?',
    options: ['Exponential growth', 'Linear', 'Exponential decay', 'Constant'],
    correctAnswer: 'Exponential growth',
    correctIndex: 0,
    explanation: `Step-by-Step Graphical Analysis:
1. The curve has an increasing rate of change (concave up).
2. The values grow proportional to their current magnitude, causing the slope to steepen continuously.
3. This accelerating upward curve is the defining visual signature of exponential growth ($y = ab^x, b > 1$).

Teacher's SAT Pro-Tip:
Flat initial rise that curls upward into extreme steepness = Exponential growth!`,
    diagram: {
      title: 'Exponential Growth Curve in the xy-plane',
      xAxisLabel: 'x',
      yAxisLabel: 'y',
      xRange: [0, 6],
      yRange: [0, 350],
      xStep: 1,
      yStep: 50,
      curves: [
        {
          type: 'function',
          fnType: 'exponential',
          label: 'Exponential Curve (y = 5(2.2)^x)',
          expression: '5*(2.2**x)',
          color: '#8b5cf6',
          points: [[0, 5], [1, 11], [2, 24.2], [3, 53.2], [4, 117.1], [5, 257.7]],
          strokeWidth: 2.5
        }
      ]
    }
  },
  {
    title: 'Example 14: Multi-Year Exponents / Compounding Periods',
    question: 'A bacterial colony triples every 4 hours. If there are initially 200 bacteria, write an equation for the population N after t hours.',
    options: ['N = 200(3)^(t/4)', 'N = 200(3)^(4t)', 'N = 200(4)^(t/3)', 'N = 600^(t/4)'],
    correctAnswer: 'N = 200(3)^(t/4)',
    correctIndex: 0,
    explanation: `Step-by-Step Exponent Scaling Analysis:
1. Initial population: $a = 200$.
2. Multiplicative factor: Triples $\\implies b = 3$.
3. Time period scaling: Tripling occurs once every 4 hours. Therefore, in $t$ hours, the number of tripling cycles that have occurred is $\\frac{t}{4}$.
4. Assemble the exponential model:
   $$N = 200(3)^{t/4}$$

Teacher's SAT Pro-Tip:
Always divide the time variable by the period length in the exponent: exponent is $\\frac{t}{\\text{period}} = \\frac{t}{4}$.`,
    diagram: {
      title: 'Bacterial Colony Growth in the xy-plane',
      xAxisLabel: 'Hours (t)',
      yAxisLabel: 'Population N',
      xRange: [0, 16],
      yRange: [0, 6000],
      xStep: 4,
      yStep: 1000,
      curves: [
        {
          type: 'function',
          fnType: 'exponential',
          label: 'N = 200(3)^(t/4)',
          expression: '200*(3**(x/4))',
          color: '#8b5cf6',
          points: [[0, 200], [4, 600], [8, 1800], [12, 5400]],
          strokeWidth: 2.5
        },
        {
          type: 'points',
          label: '4-Hour Tripling Milestones',
          color: '#6d28d9',
          points: [[0, 200], [4, 600], [8, 1800], [12, 5400]]
        }
      ]
    }
  },
  {
    title: 'Example 15: Half-Life Decay Model',
    question: 'A radioactive substance has a half-life of 12 days. If the initial mass is 80 grams, write an equation for the mass remaining M after d days.',
    options: ['M = 80(1/2)^(d/12)', 'M = 80(1/2)^(12d)', 'M = 80(2)^(d/12)', 'M = 80 - (1/2)d'],
    correctAnswer: 'M = 80(1/2)^(d/12)',
    correctIndex: 0,
    explanation: `Step-by-Step Half-Life Modeling:
1. Initial mass: $a = 80$ grams.
2. Decay factor: Half-life means the mass halves $\\implies b = \\frac{1}{2}$ (or $0.5$).
3. Time cycle scaling: Halving happens every 12 days, so the number of half-life cycles in $d$ days is $\\frac{d}{12}$.
4. Assemble the half-life equation:
   $$M = 80\\left(\\frac{1}{2}\\right)^{d/12}$$

Teacher's SAT Pro-Tip:
Half-Life standard formula: $M(t) = M_0\\left(\\frac{1}{2}\\right)^{t / t_{1/2}}$. Here $M_0 = 80$ and $t_{1/2} = 12$.`,
    diagram: {
      title: 'Radioactive Half-Life Decay in the xy-plane',
      xAxisLabel: 'Days (d)',
      yAxisLabel: 'Mass Remaining M (g)',
      xRange: [0, 48],
      yRange: [0, 90],
      xStep: 12,
      yStep: 15,
      curves: [
        {
          type: 'function',
          fnType: 'exponential',
          label: 'M = 80(0.5)^(d/12)',
          expression: '80*(0.5**(x/12))',
          color: '#ef4444',
          points: [[0, 80], [12, 40], [24, 20], [36, 10], [48, 5]],
          strokeWidth: 2.5
        },
        {
          type: 'points',
          label: 'Half-Life Cycles',
          color: '#b91c1c',
          points: [[0, 80], [12, 40], [24, 20], [36, 10], [48, 5]]
        }
      ]
    }
  },
  {
    title: 'Example 16: Changing Initial Value / Vertical Scale Factor a',
    question: 'Consider the functions:\nf(x) = 3(2)^x\ng(x) = 7(2)^x\n\nHow does the graph of g compare with the graph of f?',
    options: [
      'g has a larger y-intercept (7 vs 3) and is vertically stretched, while keeping the same growth factor 2',
      'g grows faster because its growth factor is 7 instead of 3',
      'g has the same y-intercept but a smaller growth rate',
      'g is shifted 4 units to the right of f'
    ],
    correctAnswer: 'g has a larger y-intercept (7 vs 3) and is vertically stretched, while keeping the same growth factor 2',
    correctIndex: 0,
    explanation: `Step-by-Step Comparative Analysis:
1. Examine growth factors:
   Both $f(x)$ and $g(x)$ have base $b = 2$. Therefore, both functions share the exact same exponential doubling rate.
2. Calculate the $y$-intercepts:
   $$f(0) = 3(2)^0 = 3(1) = 3 \\implies (0, 3)$$
   $$g(0) = 7(2)^0 = 7(1) = 7 \\implies (0, 7)$$
3. The leading coefficient $a$ acts as a vertical scale factor. Increasing $a$ from 3 to 7 vertically stretches the curve upward and raises the $y$-intercept from 3 to 7.
4. Changing $a$ does NOT change the growth factor $b = 2$.

Teacher's SAT Pro-Tip:
Changing $a$ alters the initial value ($y$-intercept) and vertical scale. It does NOT change whether the function grows or decays, nor does it alter the base multiplier ($b = 2$).`,
    diagram: {
      title: 'Comparing Vertical Stretches: f(x) = 3(2)^x vs g(x) = 7(2)^x',
      xAxisLabel: 'x',
      yAxisLabel: 'y',
      xRange: [0, 5],
      yRange: [0, 120],
      xStep: 1,
      yStep: 20,
      curves: [
        {
          type: 'function',
          fnType: 'exponential',
          label: 'f(x) = 3(2)^x (y-int = 3)',
          expression: '3*(2**x)',
          color: '#3b82f6',
          points: [[0, 3], [1, 6], [2, 12], [3, 24], [4, 48], [5, 96]],
          strokeWidth: 2.5
        },
        {
          type: 'function',
          fnType: 'exponential',
          label: 'g(x) = 7(2)^x (y-int = 7)',
          expression: '7*(2**x)',
          color: '#8b5cf6',
          points: [[0, 7], [1, 14], [2, 28], [3, 56], [4, 112]],
          strokeWidth: 2.5
        },
        {
          type: 'points',
          label: 'y-intercepts',
          color: '#ec4899',
          points: [[0, 3], [0, 7]]
        }
      ]
    }
  },
  {
    title: 'Example 17: Adding a Constant (Vertical Shift & Horizontal Asymptote)',
    question: 'Consider the functions:\nf(x) = 4(3)^x\ng(x) = 4(3)^x + 6\n\nWhat happens to the graph when +6 is added?',
    options: [
      'The graph shifts 6 units up, the horizontal asymptote becomes y = 6, and the y-intercept becomes (0, 10)',
      'The graph shifts 6 units right and the y-intercept remains (0, 4)',
      'The graph is vertically stretched by a factor of 6 and the asymptote remains y = 0',
      'The horizontal asymptote shifts to y = 4 and the y-intercept becomes (0, 6)'
    ],
    correctAnswer: 'The graph shifts 6 units up, the horizontal asymptote becomes y = 6, and the y-intercept becomes (0, 10)',
    correctIndex: 0,
    explanation: `Step-by-Step Vertical Translation Analysis:
1. Identifying the outside constant:
   The $+6$ is outside the exponential term, shifting every point on the graph vertically upward by 6 units ($k = +6$).
2. Identifying the horizontal asymptote:
   The original asymptote of $f(x) = 4(3)^x$ was the $x$-axis ($y = 0$).
   After the $+6$ upward shift, the new horizontal asymptote is $y = 6$.
3. Calculating the new $y$-intercept:
   Substitute $x = 0$:
   $$g(0) = 4(3)^0 + 6 = 4(1) + 6 = 10 \\implies (0, 10)$$
4. Note that the $y$-intercept is $(0, a + k) = (0, 4 + 6) = (0, 10)$, NOT simply $(0, 4)$ or $(0, 6)$.

Teacher's SAT Pro-Tip:
For $f(x) = a(b)^x + k$, the horizontal asymptote is always the line $y = k$, and the $y$-intercept is always $(0, a + k)$.`,
    diagram: {
      title: 'Vertical Shift & Asymptote: g(x) = 4(3)^x + 6',
      xAxisLabel: 'x',
      yAxisLabel: 'y',
      xRange: [-2, 4],
      yRange: [0, 120],
      xStep: 1,
      yStep: 20,
      curves: [
        {
          type: 'line',
          label: 'Asymptote y = 6',
          color: '#ef4444',
          points: [[-2, 6], [4, 6]],
          strokeWidth: 2,
          style: 'dashed'
        },
        {
          type: 'function',
          fnType: 'exponential',
          label: 'g(x) = 4(3)^x + 6',
          expression: '4*(3**x) + 6',
          color: '#8b5cf6',
          points: [[0, 10], [1, 18], [2, 42], [3, 114]],
          strokeWidth: 2.5
        },
        {
          type: 'points',
          label: 'y-intercept (0, 10)',
          color: '#ec4899',
          points: [[0, 10]]
        }
      ]
    }
  },
  {
    title: 'Example 18: Identifying an Exponential Equation from Conditions',
    question: 'An exponential function has a y-intercept of 5, a horizontal asymptote of y = 2, and represents exponential growth. Which equation could model this function?',
    options: [
      'f(x) = 3(2)^x + 2',
      'f(x) = 5(2)^x + 2',
      'f(x) = 2(3)^x + 5',
      'f(x) = 3(0.5)^x + 2'
    ],
    correctAnswer: 'f(x) = 3(2)^x + 2',
    correctIndex: 0,
    explanation: `Step-by-Step Parameter Deduction:
1. Start with the general transformed exponential form:
   $$f(x) = a(b)^x + k$$
2. Match the horizontal asymptote:
   The asymptote is $y = 2 \\implies k = 2$.
3. Match the $y$-intercept:
   At $x = 0$, $f(0) = a(b)^0 + k = a + 2 = 5 \\implies a = 3$.
4. Check the growth condition:
   For exponential growth, the base must satisfy $b > 1$.
   In $f(x) = 3(2)^x + 2$, the base $b = 2 > 1$, which confirms exponential growth.
5. Verifying the choices:
   - $f(0) = 3(1) + 2 = 5$ (Correct y-intercept)
   - As $x \\to -\\infty$, $3(2)^x \\to 0$, so $f(x) \\to 2$ (Correct asymptote $y = 2$)
   - $b = 2 > 1$ (Correct growth behavior)

Teacher's SAT Pro-Tip:
Solve systematically: 1st find $k$ from the asymptote, 2nd solve $a + k = y\\text{-intercept}$, 3rd verify $b > 1$ for growth or $0 < b < 1$ for decay!`,
    diagram: {
      title: 'Model Deduction: f(x) = 3(2)^x + 2',
      xAxisLabel: 'x',
      yAxisLabel: 'y',
      xRange: [-3, 4],
      yRange: [0, 30],
      xStep: 1,
      yStep: 5,
      curves: [
        {
          type: 'line',
          label: 'Asymptote y = 2',
          color: '#ef4444',
          points: [[-3, 2], [4, 2]],
          strokeWidth: 2,
          style: 'dashed'
        },
        {
          type: 'function',
          fnType: 'exponential',
          label: 'f(x) = 3(2)^x + 2',
          expression: '3*(2**x) + 2',
          color: '#3b82f6',
          points: [[-2, 2.75], [-1, 3.5], [0, 5], [1, 8], [2, 14], [3, 26]],
          strokeWidth: 2.5
        },
        {
          type: 'points',
          label: 'y-intercept (0, 5)',
          color: '#ec4899',
          points: [[0, 5]]
        }
      ]
    }
  }
];

export const CHAPTER_8_THEORY_SECTIONS: MathTheorySection[] = [
  {
    sectionTitle: '8.1 Section A — Linear Growth (Constant Additive Change)',
    fullText: `A linear relationship changes by the SAME AMOUNT whenever x increases by the same amount.

The standard algebraic form is:
y = mx + b
where:
- m = rate of change / slope
- b = initial value / y-intercept at x = 0

1. Constant Additive Change
Suppose a quantity follows the sequence:
10, 15, 20, 25, 30, ...
The change between consecutive terms is always +5. Therefore, the pattern is strictly linear.

SAT Recognition Rule: Same difference means LINEAR.

2. Linear Growth from a Table
Consider the table:
- x: 0, 1, 2, 3, 4
- y: 7, 11, 15, 19, 23

Differences: +4, +4, +4, +4.
Therefore the relationship is linear.
Equation: y = 4x + 7

3. Slope as Rate of Change
For y = mx + b, m represents how much y changes when x increases by 1:
- If m = 8, then y increases by 8 for every 1-unit increase in x.
- If m = -3, then y decreases by 3 for every 1-unit increase in x.

4. Linear Word Problems
A taxi charges a $6 starting fee plus $2.50 per mile:
C = 2.5m + 6
- 2.5 is the rate per mile.
- 6 is the starting base value.

SAT Trick: "per", "each", or "for every" identifies the linear rate of change!`,
    bulletPoints: [
      "Linear equations model constant additive change: equal step differences Delta y for equal Delta x.",
      "Standard form: y = mx + b, where m is the slope (rate per unit) and b is the initial value at x = 0.",
      "Keywords that signal linear growth: 'increases by [fixed amount]', 'per year', 'each month', 'for every'."
    ],
    tables: [
      {
        title: 'Linear Growth Table Matrix',
        headers: ['x (Input)', 'y (Output)', 'Consecutive Difference (Δy)'],
        rows: [
          ['0', '7', 'Initial value (b = 7)'],
          ['1', '11', '+4'],
          ['2', '15', '+4'],
          ['3', '19', '+4'],
          ['4', '23', '+4']
        ]
      }
    ],
    examples: CHAPTER_8_WORKED_EXAMPLES.slice(0, 4)
  },
  {
    sectionTitle: '8.2 Section B — Exponential Growth & Decay (Constant Multiplicative Change)',
    fullText: `Exponential relationships change by the SAME FACTOR (or ratio), not the same additive amount.

The standard algebraic form is:
y = a(b)^x
where:
- a = initial value / y-intercept at x = 0
- b = growth factor or decay factor

5. Constant Multiplicative Change
Consider the sequence:
5, 10, 20, 40, 80, ...
Each value is multiplied by 2. Therefore, the relationship is exponential.

SAT Recognition Rule: Same ratio means EXPONENTIAL.

6. Growth Factor (b > 1)
If a quantity increases by r% each period:
Growth factor b = 1 + r
For example, if a quantity increases by 20% each year:
b = 1 + 0.20 = 1.20, giving y = a(1.20)^x

7. Decay Factor (0 < b < 1)
If a quantity decreases by r% each period:
Decay factor b = 1 - r
For example, if a quantity decreases by 30% each year:
b = 1 - 0.30 = 0.70, giving y = a(0.70)^x

CRITICAL SAT WARNING:
A 30% decrease does NOT mean multiplying by 0.30. It means multiplying by 0.70 (the fraction remaining)!

8. Exponential vs. Linear Distinction
- LINEAR: y = mx + b changes by the same AMOUNT (10, 20, 30, 40).
- EXPONENTIAL: y = ab^x changes by the same FACTOR (10, 20, 40, 80).`,
    bulletPoints: [
      "Exponential functions model constant multiplicative change: equal ratios y_{n+1}/y_n.",
      "Growth Factor: b = 1 + r. If growing by 15%, multiply by 1.15.",
      "Decay Factor: b = 1 - r. If decreasing by 20%, multiply by 0.80 (the portion retained).",
      "Repeated percentage change adds increasingly larger numbers each period."
    ],
    tables: [
      {
        title: 'Growth & Decay Multiplier Reference',
        headers: ['Percentage Change Description', 'Algebraic Formula', 'Growth/Decay Factor (b)', 'Example Equation (a = 100)'],
        rows: [
          ['Grows by 8% per year', 'b = 1 + 0.08', '1.08', 'y = 100(1.08)^t'],
          ['Grows by 25% per month', 'b = 1 + 0.25', '1.25', 'y = 100(1.25)^t'],
          ['Doubles every period', 'b = 2.00', '2.00', 'y = 100(2)^t'],
          ['Decreases by 15% per year', 'b = 1 - 0.15', '0.85', 'y = 100(0.85)^t'],
          ['Decreases by 30% per hour', 'b = 1 - 0.30', '0.70', 'y = 100(0.70)^t'],
          ['Halves every period (Half-life)', 'b = 0.50', '0.50', 'y = 100(0.5)^t']
        ]
      }
    ],
    examples: CHAPTER_8_WORKED_EXAMPLES.slice(4, 9)
  },
  {
    sectionTitle: '8.3 Section C — Graphical Interpretation & Curvature',
    fullText: `Understanding the geometric appearance of linear and exponential functions in the coordinate plane is critical for the Digital SAT.

9. Linear Graph
A linear relationship produces a STRAIGHT LINE:
- Positive slope (m > 0): rises steadily from bottom-left to top-right (upward and right).
- Negative slope (m < 0): falls steadily from top-left to bottom-right (downward and right).
- The steepness represents the constant rate of change.

10. Exponential Growth Graph (b > 1)
An exponential growth function y = ab^x with b > 1:
- Rises slowly at first, then becomes increasingly steep as x increases.
- The graph is curved upward (concave up).

11. Exponential Decay Graph (0 < b < 1)
An exponential decay function y = ab^x with 0 < b < 1:
- Decreases rapidly at first, then gradually levels off toward the horizontal axis y = 0.
- It gets closer and closer to 0 but never reaches 0 for finite x (horizontal asymptote at y = 0).

12. Y-Intercept
For any exponential function y = ab^x:
Set x = 0, giving y = a(b^0) = a(1) = a.
Therefore, a is always the y-intercept. This is one of the fastest ways to eliminate incorrect options on the SAT!`,
    bulletPoints: [
      "Linear: Straight line with unchanging slope.",
      "Exponential Growth (b > 1): Upward curve with accelerating positive slope.",
      "Exponential Decay (0 < b < 1): Downward curve leveling off toward y = 0.",
      "Y-intercept shortcut: The constant a in y = ab^x is always the y-intercept."
    ],
    examples: CHAPTER_8_WORKED_EXAMPLES.slice(9, 13)
  },
  {
    sectionTitle: '8.4 Section D — Exponential Models & Repeated Percentage Change',
    fullText: `14. Growth Model: P = A(1 + r)^t
If the initial amount is A and it grows by r per period:
P = A(1 + r)^t
Example: Initial = 500, Growth = 8% means P = 500(1.08)^t.

15. Decay Model: P = A(1 - r)^t
If the initial amount is A and it decreases by r per period:
P = A(1 - r)^t
Example: Initial = 800, Decay = 15% means P = 800(0.85)^t.

16. Repeated Percentage Change
Suppose a quantity increases by 10% every year. The changes are NOT +10 each year. Instead, they are multiplied by 1.10 each year:
- Year 0: 100
- Year 1: 110 (+10)
- Year 2: 121 (+11)
- Year 3: 133.1 (+12.1)
- Year 4: 146.41 (+13.31)

The actual amount added becomes larger every single year. THIS is the fundamental distinction between linear and exponential growth.`,
    bulletPoints: [
      "Linear growth adds a constant amount (+10 every year).",
      "Exponential growth multiplies by a constant factor (*1.10 every year), so the amount added grows over time.",
      "In the long run, exponential growth will always overtake and exceed linear growth."
    ],
    examples: CHAPTER_8_WORKED_EXAMPLES.slice(13, 15)
  },
  {
    sectionTitle: '8.5 Section E — Table Analysis & Decision Framework',
    fullText: `When presented with a table of (x, y) values on the SAT:

17. How to Identify a Linear Table
Check consecutive differences (Delta y for Delta x = 1):
- x: 0, 1, 2, 3
- y: 4, 9, 14, 19
- Differences: 9 - 4 = 5, 14 - 9 = 5, 19 - 14 = 5.
- Result: LINEAR (y = 5x + 4).

18. How to Identify an Exponential Table
Check consecutive ratios (next y / current y for Delta x = 1):
- x: 0, 1, 2, 3
- y: 3, 6, 12, 24
- Ratios: 6/3 = 2, 12/6 = 2, 24/12 = 2.
- Result: EXPONENTIAL (y = 3(2)^x).

19. When Neither Test Works
If differences are not constant AND ratios are not constant, do not force the relationship into either category (it may be quadratic, rational, or irregular).`,
    bulletPoints: [
      "Delta y constant -> Linear equation y = mx + b.",
      "y_{n+1}/y_n constant -> Exponential equation y = ab^x.",
      "Always verify that x increments by equal intervals before evaluating Delta y or ratios."
    ],
    tables: [
      {
        title: 'Table Pattern Decision Matrix',
        headers: ['Pattern Observed in y (equal Δx)', 'Mathematical Meaning', 'Function Family', 'Standard Form'],
        rows: [
          ['Equal differences (+d)', 'Constant additive change', 'Linear', 'y = mx + b'],
          ['Equal ratios (×r)', 'Constant multiplicative change', 'Exponential', 'y = ab^x'],
          ['Equal 2nd differences', 'Accelerating quadratic curvature', 'Quadratic', 'y = ax^2 + bx + c'],
          ['Neither equal diffs nor ratios', 'Non-elementary relationship', 'Other', 'f(x)']
        ]
      }
    ]
  },
  {
    sectionTitle: '8.6 Section F — High-Value Shortcuts, Wording Traps & Master Checklist',
    fullText: `Distinguishing between fixed additive amounts (Linear) and percentage or factor multipliers (Exponential) is one of the most heavily tested qualitative concepts on the Digital SAT.

Core Model Distinctions:
1. Linear Growth & Decay:
   - Changes by a constant fixed quantity over equal intervals of time.
   - Key wording: "increases by 5", "decreases by 12", "gains $30 per month", "constant rate".
   - Standard Form: y = mx + b (where m is the constant rate of change and b is the initial quantity).

2. Exponential Growth & Decay:
   - Changes by a constant percentage or multiplicative factor over equal intervals of time.
   - Key wording: "increases by 5%", "doubles every year", "decreases by 20%", "loses 15% each period".
   - Standard Form: y = a · b^x (where a is the initial value at x = 0 and b is the growth or decay factor).

The Golden SAT Wording Rule:
"increases by 5" is NOT equal to "increases by 5%".
- "5 per year" -> Constant additive change (Linear model: y = 5x + b)
- "5% per year" -> Constant multiplicative multiplier (Exponential model: y = a(1.05)^x)`,
    bulletPoints: [
      "Wording Trap: 'Increases by 5' means Linear (+5). 'Increases by 5%' means Exponential (×1.05).",
      "Base Multiplier: Growth requires base b > 1; Decay requires 0 < b < 1.",
      "Initial Value Rule: For y = mx + b and y = a · b^x, setting x = 0 gives the initial value (b in linear, a in exponential).",
      "Long-Run Scale: Exponential growth always eventually dominates and exceeds linear growth over large time domains.",
      "Table Verification: Always ensure that x increments by equal steps before calculating differences (Δy) or ratios (y₂ / y₁)."
    ],
    tables: [
      {
        title: 'Wording Clues & Problem Framework Matrix',
        headers: ['Wording / Phrasing', 'Mathematical Operation', 'Model Classification', 'General Formula'],
        rows: [
          ['"Increases by 8 each year"', 'Add 8 per step (+8)', 'Linear Growth', 'y = 8x + b'],
          ['"Decreases by 15 each month"', 'Subtract 15 per step (-15)', 'Linear Decay', 'y = -15x + b'],
          ['"Grows by 8% each year"', 'Multiply by 1.08 (×1.08)', 'Exponential Growth', 'y = a(1.08)^t'],
          ['"Decreases by 15% each month"', 'Multiply by 0.85 (×0.85)', 'Exponential Decay', 'y = a(0.85)^t'],
          ['"Doubles every 3 hours"', 'Multiply by 2 every 3 units', 'Exponential Growth', 'y = a(2)^(t/3)'],
          ['"Halves every 10 years"', 'Multiply by 0.5 every 10 units', 'Exponential Decay', 'y = a(0.5)^(t/10)']
        ]
      },
      {
        title: '15 High-Value SAT Shortcuts Reference Matrix',
        headers: ['Shortcut #', 'Trigger / Observation', 'SAT Rule & Meaning', 'Action / Decision'],
        rows: [
          ['Shortcut 1', 'Equal differences in y table', 'Constant additive change', 'Select Linear (y = mx + b)'],
          ['Shortcut 2', 'Equal ratios in y table', 'Constant multiplicative change', 'Select Exponential (y = a · b^x)'],
          ['Shortcut 3', 'Straight line graph', 'Constant slope m', 'Select Linear model'],
          ['Shortcut 4', 'Curved accelerating graph', 'Changing slope / compounding', 'Select Exponential model'],
          ['Shortcut 5', 'Repeated percentage change', 'Compounding factor (1 ± r)', 'Use Exponential model'],
          ['Shortcut 6', '"Starts at X" in problem', 'Initial value at x = 0', 'Set b = X (linear) or a = X (exponential)'],
          ['Shortcut 7', '"Per hour / day / year"', 'Constant rate when amount is fixed', 'Identifies slope m in linear model'],
          ['Shortcut 8', '"Increases by 12%"', 'Growth factor b = 1 + 0.12', 'Multiply by 1.12'],
          ['Shortcut 9', '"Decreases by 12%"', 'Decay factor b = 1 - 0.12', 'Multiply by 0.88'],
          ['Shortcut 10', 'y = a · b^x equation given', 'y-intercept is a at x = 0', 'Match point (0, a)'],
          ['Shortcut 11', 'Base b value check', 'b > 1 is Growth; 0 < b < 1 is Decay', 'Eliminate incorrect curve direction'],
          ['Shortcut 12', 'Base b = 1', 'No change occurs (y = a)', 'Horizontal line (constant)'],
          ['Shortcut 13', 'Slope comparison', 'Linear m is constant; Exponential accelerates', 'Check rate of change behavior'],
          ['Shortcut 14', 'Long-run growth comparison', 'Exponential growth eventually exceeds linear', 'Choose exponential for long term'],
          ['Shortcut 15', 'Rate m vs Growth factor b', 'm is added amount; b is multiplier', 'Never confuse slope m with factor b']
        ]
      },
      {
        title: 'SAT Verification & Concept Checklist',
        headers: ['Core Concept', 'Verification Question', 'Master Rule / Form'],
        rows: [
          ['Linear Model', 'Is the change a constant fixed quantity?', 'y = mx + b (m = slope, b = initial value)'],
          ['Exponential Model', 'Is the change a constant percentage or factor?', 'y = a · b^x (a = initial value, b = factor)'],
          ['Table Differences', 'Are consecutive Δy values identical?', 'Equal Δy -> Linear table'],
          ['Table Ratios', 'Are consecutive y₂ / y₁ ratios identical?', 'Equal ratios -> Exponential table'],
          ['Percent to Factor', 'How do you convert percentage r to base b?', 'Growth: b = 1 + r; Decay: b = 1 - r'],
          ['Wording Precision', 'Does it say "by 5" or "by 5%"?', '"by 5" is Linear; "by 5%" is Exponential']
        ]
      }
    ]
  },
  {
    sectionTitle: '8.7 Section G — Exponential Functions: Graph Conditions, Transformations & Asymptotes',
    fullText: `Part 1: Deeper Concept Building

The Basic Exponential Function
A common exponential function is defined as:
f(x) = a(b)^x
where:
- a = initial value / vertical scale factor (value of f(0) when k = 0)
- b = growth or decay factor (the base multiplier)
- x = input variable / time periods

Core Principle:
- For exponential GROWTH: b > 1
- For exponential DECAY: 0 < b < 1
- The value of a does NOT determine whether the function grows or decays. The value of the base b determines that!

---

The Four Base Conditions for b
1. Condition 1 — When b > 1 (Exponential Growth):
   - If b > 1, the function represents exponential GROWTH.
   - Examples: 2^x, 1.1^x, 3^x, 1.25^x.
   - As x increases, the function value f(x) increases at an accelerating rate.
2. Condition 2 — When 0 < b < 1 (Exponential Decay):
   - If 0 < b < 1, the function represents exponential DECAY.
   - Examples: (0.5)^x, (0.8)^x, (0.95)^x.
   - As x increases, the function value f(x) decreases and asymptotically approaches 0.
3. Condition 3 — When b = 1 (Constant Function):
   - If b = 1, then f(x) = a(1)^x = a(1) = a.
   - Since 1^x = 1 for all real x, the function is CONSTANT (a flat horizontal line). It is not exponential growth.
4. Condition 4 — What if b <= 0?:
   - For standard real-valued exponential models tested on the SAT, the base b must be strictly positive (b > 0). Negative bases produce non-real complex numbers for fractional exponents (for example, (-4)^(1/2) = 2i).

---

What Does Parameter a Do?
For f(x) = a(b)^x:
- Since b^0 = 1, we have f(0) = a(b^0) = a(1) = a.
- Therefore, a is always the y-intercept (0, a) when no vertical shift k is present.
- If a is increased: Comparing f(x) = 4(2)^x and g(x) = 8(2)^x, both have identical growth factors (b = 2), but g(x) starts higher (g(0) = 8 vs f(0) = 4). The graph of g(x) is vertically stretched relative to f(x). Changing a does NOT alter the growth factor or growth/decay status!
- If a is negative (a < 0): In f(x) = -3(2)^x, f(0) = -3. As x increases, values become more negative (-3, -6, -12, -24). Even though b = 2 > 1, the function is decreasing downward below the x-axis.

---

Vertical Shift k and Horizontal Asymptotes
When a constant k is added:
f(x) = a(b)^x + k
1. Vertical Translation:
   - If k > 0, the entire graph shifts UP by k units.
   - If k < 0, the entire graph shifts DOWN by |k| units.
2. Horizontal Asymptote Transformation:
   - For unshifted f(x) = a(b)^x, the horizontal asymptote is y = 0 (x-axis).
   - For shifted f(x) = a(b)^x + k, the horizontal asymptote shifts directly to:
     Horizontal Asymptote: y = k
3. Y-Intercept with k:
   - Setting x = 0:
     f(0) = a(b^0) + k = a(1) + k = a + k
   - Therefore, the y-intercept is (0, a + k), NOT simply a!

---

What Does Changing b Do?
- For Growth (b > 1): A larger base b produces steeper, faster exponential growth (for example, 2(3)^x grows faster than 2(2)^x).
- For Decay (0 < b < 1): A smaller positive base b produces faster exponential decay (for example, a(0.6)^x decreases much more rapidly than a(0.9)^x).

---

20 Master Rules — Memorize These
1. b > 1 means Exponential growth.
2. 0 < b < 1 means Exponential decay.
3. b = 1 means Constant function (f(x) = a).
4. a represents Vertical scale factor / base value at x = 0.
5. k represents Vertical shift.
6. y-intercept of a(b)^x + k is (0, a + k).
7. Horizontal asymptote of a(b)^x + k is y = k.
8. If k = 0, the horizontal asymptote is y = 0.
9. Increase positive a means Larger y-intercept and vertical stretch.
10. Decrease positive a means Smaller y-intercept and vertical compression.
11. Add +k means Shift graph UP by k units.
12. Add -k means Shift graph DOWN by |k| units.
13. Larger b when b > 1 means Faster growth rate.
14. Smaller b when 0 < b < 1 means Faster decay rate.
15. Negative a means Reflects the graph across the horizontal asymptote.
16. SAME b means Same growth/decay factor and identical percentage change.
17. SAME a means Same unshifted initial value at x = 0.
18. SAME k means Same horizontal asymptote.
19. Positive growth with k = 0 means Graph increases as x approaches +infinity.
20. Positive decay with k = 0 means Graph approaches y = 0 as x approaches +infinity.

---

7-Step SAT Graph-Reading Checklist
- Step 1: Is the graph increasing (growth) or decreasing (decay)?
- Step 2: Where is the horizontal asymptote (y = k)?
- Step 3: What is the y-intercept (y = a + k)?
- Step 4: Is the graph strictly above or below the asymptote?
- Step 5: Does the graph become steeper or flatter as x increases?
- Step 6: Can you isolate and calculate a, b, and k from the points provided?
- Step 7: If the prompt modifies a, b, or k, determine precisely which visual feature shifts!

---

Most Common SAT Traps
- Trap 1: "Increase by 20%" does NOT mean multiplying by 0.20. It means multiplying by 1 + 0.20 = 1.20.
- Trap 2: "Decrease by 20%" does NOT mean multiplying by 0.20. It means multiplying by 1 - 0.20 = 0.80.
- Trap 3: In f(x) = a(b)^x + k, the y-intercept is (0, a + k), NOT simply (0, a).
- Trap 4: Base b determines growth/decay, NOT parameter a.
- Trap 5: Vertical shift k changes the horizontal asymptote; it does NOT alter the base growth factor b.
- Trap 6: For decay, a smaller positive base (for example, 0.6 vs 0.9) means FASTER decay, not slower.
- Trap 7: A curve approaching y = 5 does NOT mean its y-intercept is 5; y = 5 is the horizontal asymptote!`,
    bulletPoints: [
      "Standard transformed form: f(x) = a(b)^x + k with horizontal asymptote y = k.",
      "Y-intercept shortcut: Setting x = 0 yields (0, a + k).",
      "Base rules: b > 1 gives growth, 0 < b < 1 gives decay, and b = 1 gives a flat constant line.",
      "Asymptote shortcut: The constant added outside the exponential term is the horizontal line y = k."
    ],
    tables: [
      {
        title: 'Exponential Transformations & Parameter Effects Reference',
        headers: ['Parameter', 'Algebraic Role', 'Visual Impact on Graph', 'SAT Example'],
        rows: [
          ['a', 'Initial scale / amplitude', 'Changes y-intercept and vertical stretch/reflection', 'f(x) = 3(2)^x vs g(x) = 7(2)^x'],
          ['b (b > 1)', 'Growth base multiplier', 'Determines steepness of upward growth curve', 'f(x) = 5(1.25)^x (25% growth)'],
          ['b (0 < b < 1)', 'Decay base multiplier', 'Determines rate of leveling off toward asymptote', 'f(x) = 5(0.75)^x (25% decay)'],
          ['k', 'Vertical translation', 'Shifts entire graph up/down; sets asymptote y = k', 'f(x) = 4(3)^x + 6 (asymptote y = 6)']
        ]
      }
    ],
    examples: CHAPTER_8_WORKED_EXAMPLES.slice(15, 18)
  }
];

export const FULL_CHAPTER_8_LINEAR_AND_EXPONENTIAL_GROWTH: FullSatMathChapter = {
  id: 'ch8',
  chapterNumber: 8,
  chapterTitle: 'Linear & Exponential Growth',
  pageNumber: 340,
  quote: "Linear models add the same amount each step; exponential models multiply by the same factor. Master this distinction, and you master one of the most heavily tested concepts on the Digital SAT.",
  introduction: "Linear and exponential models form one of the central pillars of the Digital SAT Math section. Understanding whether a real-world scenario, sequence, table, or graph represents constant additive change (linear) or constant multiplicative change (exponential) allows you to set up equations instantly, eliminate distractors, and solve high-difficulty problems with absolute confidence.",
  sections: CHAPTER_8_THEORY_SECTIONS,
  exerciseGroups: [
    {
      exerciseNumber: 1,
      title: 'Exercise 1: Linear & Exponential Growth Practice (40 Questions)',
      description: 'Comprehensive practice questions covering sequence identification, linear modeling, exponential growth and decay models, table and graph interpretation, function transformations, horizontal asymptotes, and mixed SAT challenge scenarios.',
      questions: CHAPTER_8_PRACTICE_QUESTIONS
    }
  ]
};
