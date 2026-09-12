import { FullSatMathChapter, MathTheorySection, MathWorkedExample } from './satMathConcepts';
import { CHAPTER_4_QUESTIONS_PART_1 } from './satMathChapter4QuestionsPart1';
import { CHAPTER_4_QUESTIONS_PART_2 } from './satMathChapter4QuestionsPart2';
import { CHAPTER_4_TRANSFORMATION_QUESTIONS } from './satMathChapter4TransformationQuestions';

// Section 1 Worked Examples (Function Basics & Domain)
const FUNCTION_BASICS_WORKED_EXAMPLES: MathWorkedExample[] = [
  {
    title: 'Worked Example 1: Nested Function Composition',
    question: 'Functions f and g are defined by f(x) = 2x² - 3 and g(x) = 3x + 1. What is the value of f(g(-2))?',
    options: ['-27', '23', '47', '51'],
    correctIndex: 2,
    correctAnswer: '47',
    explanation: `Step-by-Step Algebraic Walkthrough:
1. Evaluate the inner function at x = -2:
   g(-2) = 3(-2) + 1 = -6 + 1 = -5
2. Substitute the intermediate result (-5) into the outer function f:
   f(g(-2)) = f(-5)
3. Compute f(-5):
   f(-5) = 2(-5)² - 3 = 2(25) - 3 = 50 - 3 = 47.

Graph & Coordinate Analysis:
Step 1: Input x = -2 on line g(x) = 3x + 1 yields output y = -5.
Step 2: Output -5 becomes the input x = -5 on parabola f(x) = 2x² - 3, yielding the final output y = 47.`,
    diagram: {
      title: 'Worked Ex 1: Composite Function Flow g(-2) = -5 ==> f(-5) = 47',
      xAxisLabel: 'x',
      yAxisLabel: 'y',
      xRange: [-6, 3],
      yRange: [-10, 55],
      xStep: 1,
      yStep: 10,
      curves: [
        {
          type: 'function',
          fnType: 'parabola',
          expression: '2*x^2 - 3',
          label: 'f(x) = 2x² - 3',
          color: '#3b82f6',
          points: [[-5, 47], [-4, 29], [-3, 15], [-2, 5], [-1, -1], [0, -3], [1, -1], [2, 5], [3, 15]],
          highlightPoints: [
            { x: -5, y: 47, label: 'Step 2: f(-5) = 47', color: '#ef4444' }
          ]
        },
        {
          type: 'line',
          expression: '3*x + 1',
          label: 'g(x) = 3x + 1',
          color: '#10b981',
          points: [[-3, -8], [-2, -5], [0, 1], [2, 7]],
          highlightPoints: [
            { x: -2, y: -5, label: 'Step 1: g(-2) = -5', color: '#10b981' }
          ]
        }
      ]
    }
  },
  {
    title: 'Worked Example 2: Solving for the Input Variable',
    question: 'Function g is defined by g(x) = (3x + 5) / 2. If g(x) = 11, what is the value of x?',
    options: ['17/3', '7', '19/3', '11'],
    correctIndex: 0,
    correctAnswer: '17/3',
    explanation: `Step-by-Step Solution:
1. Set the function expression equal to 11:
   (3x + 5) / 2 = 11
2. Multiply both sides by 2:
   3x + 5 = 22
3. Subtract 5 from both sides:
   3x = 17
4. Divide by 3:
   x = 17/3 (~5.67).`,
    diagram: {
      title: 'Worked Ex 2: Line g(x) = (3x + 5)/2 Intersecting y = 11 at x = 17/3',
      xAxisLabel: 'x',
      yAxisLabel: 'y',
      xRange: [0, 8],
      yRange: [0, 16],
      xStep: 1,
      yStep: 2,
      curves: [
        {
          type: 'line',
          label: 'g(x) = 1.5x + 2.5',
          color: '#3b82f6',
          points: [[0, 2.5], [2, 5.5], [4, 8.5], [5.67, 11], [7, 13]],
          highlightPoints: [
            { x: 5.67, y: 11, label: '(17/3, 11)', color: '#ef4444' }
          ]
        },
        {
          type: 'line',
          style: 'dashed',
          label: 'y = 11',
          color: '#10b981',
          points: [[0, 11], [8, 11]]
        }
      ]
    }
  },
  {
    title: 'Worked Example 3: Undefined Domain & Asymptotes',
    question: 'Function h is defined by h(x) = (2x - 1) / (x² - 7x + 10). For what positive values of x is function h undefined?',
    options: ['x = 2 and x = 5', 'x = 1/2 only', 'x = -2 and x = -5', 'x = 7 and x = 10'],
    correctIndex: 0,
    correctAnswer: 'x = 2 and x = 5',
    explanation: `Step-by-Step Domain Analysis:
1. Rational functions are undefined when the denominator equals 0:
   x² - 7x + 10 = 0
2. Factor the quadratic:
   (x - 2)(x - 5) = 0
3. Set each factor to zero:
   x = 2  and  x = 5.
4. Therefore, function h is undefined at x = 2 and x = 5.`,
    diagram: {
      title: 'Worked Ex 3: Denominator Curve D(x) = x² - 7x + 10 Zeros at x = 2, 5',
      xAxisLabel: 'x',
      yAxisLabel: 'D(x)',
      xRange: [0, 7],
      yRange: [-4, 8],
      xStep: 1,
      yStep: 2,
      curves: [
        {
          type: 'function',
          fnType: 'parabola',
          label: 'D(x) = x² - 7x + 10',
          color: '#3b82f6',
          points: [[1, 4], [2, 0], [3.5, -2.25], [5, 0], [6, 4]],
          highlightPoints: [
            { x: 2, y: 0, label: 'x = 2 (Asymptote)', color: '#ef4444' },
            { x: 5, y: 0, label: 'x = 5 (Asymptote)', color: '#ef4444' }
          ]
        }
      ]
    }
  },
  {
    title: 'Worked Example 4: Real-World Linear Function Modeling',
    question: 'A caterer models the total cost C(p), in dollars, for an event with p guests using C(p) = 45p + 120. Which of the following is the best interpretation of 120 in this context?',
    options: [
      'The cost per guest',
      'The minimum number of guests allowed',
      'The initial base setup fee regardless of guest count',
      'The total cost for 45 guests'
    ],
    correctIndex: 2,
    correctAnswer: 'The initial base setup fee regardless of guest count',
    explanation: `Step-by-Step Linear Model Interpretation:
1. In the model C(p) = 45p + 120:
   • 45 is the variable rate of change ($45 per guest).
   • 120 is the vertical intercept C(0), which represents the fixed base setup cost when p = 0.
2. Thus, 120 is the base setup fee.`,
    diagram: {
      title: 'Worked Ex 4: Catering Cost Model C(p) = 45p + 120',
      xAxisLabel: 'Guests (p)',
      yAxisLabel: 'Cost ($)',
      xRange: [0, 10],
      yRange: [0, 600],
      xStep: 2,
      yStep: 100,
      curves: [
        {
          type: 'line',
          label: 'C(p) = 45p + 120',
          color: '#3b82f6',
          points: [[0, 120], [2, 210], [4, 300], [6, 390], [8, 480], [10, 570]],
          highlightPoints: [
            { x: 0, y: 120, label: 'Base Fee (0, $120)', color: '#ef4444' }
          ]
        }
      ]
    }
  },
  {
    title: 'Worked Example 5: Matching Tables to Quadratic Equations',
    question: 'The table below gives values of x and corresponding outputs f(x).\nWhich equation defines f?',
    table: {
      title: 'Function Values for f(x)',
      headers: ['x', 'f(x)'],
      rows: [
        ['0', '5'],
        ['1', '8'],
        ['3', '32']
      ]
    },
    options: ['f(x) = 3x + 5', 'f(x) = x² + 5', 'f(x) = 3x² + 5', 'f(x) = 2x² + 6'],
    correctIndex: 2,
    correctAnswer: 'f(x) = 3x² + 5',
    explanation: `Step-by-Step Table Elimination Shortcut:
1. Test x = 0: f(0) = 5.
   • A: 3(0) + 5 = 5 (Keeps A)
   • B: (0)² + 5 = 5 (Keeps B)
   • C: 3(0)² + 5 = 5 (Keeps C)
   • D: 2(0)² + 6 = 6 ≠ 5 (Eliminate D)
2. Test x = 1: f(1) = 8.
   • A: 3(1) + 5 = 8 (Keeps A)
   • B: (1)² + 5 = 6 ≠ 8 (Eliminate B)
   • C: 3(1)² + 5 = 8 (Keeps C)
3. Test x = 3: f(3) = 32.
   • A: 3(3) + 5 = 14 ≠ 32 (Eliminate A)
   • C: 3(3)² + 5 = 3(9) + 5 = 27 + 5 = 32 (Matches C!).
4. The correct model is f(x) = 3x² + 5.`,
    diagram: {
      title: 'Worked Ex 5: Fitting f(x) = 3x² + 5 to Table Coordinates',
      xAxisLabel: 'x',
      yAxisLabel: 'y',
      xRange: [-1, 4],
      yRange: [0, 36],
      xStep: 1,
      yStep: 6,
      curves: [
        {
          type: 'function',
          fnType: 'parabola',
          label: 'f(x) = 3x² + 5',
          color: '#3b82f6',
          points: [[0, 5], [1, 8], [2, 17], [3, 32]],
          highlightPoints: [
            { x: 0, y: 5, label: '(0, 5)', color: '#ef4444' },
            { x: 1, y: 8, label: '(1, 8)', color: '#ef4444' },
            { x: 3, y: 32, label: '(3, 32)', color: '#ef4444' }
          ]
        }
      ]
    }
  }
];

// Section 2 Worked Examples (Dedicated Function Transformations)
const TRANSFORMATION_WORKED_EXAMPLES: MathWorkedExample[] = [
  {
    title: 'Worked Example 1: Combined Horizontal & Vertical Shifts',
    question: 'Given the base table for f(x), construct the table of values for g(x) = f(x - 3) + 2.',
    table: {
      title: 'Base Table f(x)',
      headers: ['x', 'f(x)'],
      rows: [
        ['-2', '1'],
        ['0', '5'],
        ['2', '3'],
        ['4', '-1']
      ]
    },
    options: [
      'Points: (1, 3), (3, 7), (5, 5), (7, 1)',
      'Points: (-5, -1), (-3, 3), (-1, 1), (1, -3)',
      'Points: (1, -1), (3, 3), (5, 1), (7, -3)',
      'Points: (-5, 3), (-3, 7), (-1, 5), (1, 1)'
    ],
    correctIndex: 0,
    correctAnswer: 'Points: (1, 3), (3, 7), (5, 5), (7, 1)',
    explanation: `Step-by-Step Transformation Breakdown:
1. Transformation Rule: g(x) = f(x - 3) + 2 corresponds to mapping (x, y) -> (x + 3, y + 2) [Shift Right 3, Shift Up 2].
2. Applying to each base point:
   • (-2, 1) -> (-2 + 3, 1 + 2) = (1, 3)
   • (0, 5)  -> (0 + 3, 5 + 2)  = (3, 7)
   • (2, 3)  -> (2 + 3, 3 + 2)  = (5, 5)
   • (4, -1) -> (4 + 3, -1 + 2) = (7, 1)
3. Transformed Points: (1, 3), (3, 7), (5, 5), (7, 1).`,
    diagram: {
      title: 'Transformation Ex 1: Shift Right 3, Up 2 [ g(x) = f(x - 3) + 2 ]',
      xAxisLabel: 'x',
      yAxisLabel: 'y',
      xRange: [-4, 9],
      yRange: [-3, 9],
      xStep: 1,
      yStep: 2,
      curves: [
        {
          type: 'line',
          style: 'dashed',
          label: 'Base f(x)',
          color: '#64748b',
          points: [[-2, 1], [0, 5], [2, 3], [4, -1]],
          highlightPoints: [
            { x: -2, y: 1, label: '(-2, 1)', color: '#64748b' },
            { x: 0, y: 5, label: '(0, 5)', color: '#64748b' },
            { x: 2, y: 3, label: '(2, 3)', color: '#64748b' },
            { x: 4, y: -1, label: '(4, -1)', color: '#64748b' }
          ]
        },
        {
          type: 'line',
          label: 'Transformed g(x)',
          color: '#2563eb',
          points: [[1, 3], [3, 7], [5, 5], [7, 1]],
          highlightPoints: [
            { x: 1, y: 3, label: '(1, 3)', color: '#2563eb' },
            { x: 3, y: 7, label: '(3, 7)', color: '#2563eb' },
            { x: 5, y: 5, label: '(5, 5)', color: '#2563eb' },
            { x: 7, y: 1, label: '(7, 1)', color: '#2563eb' }
          ]
        }
      ]
    }
  },
  {
    title: 'Worked Example 2: Vertical Reflection and Vertical Shift',
    question: 'Construct the table for g(x) = -f(x) + 4 using the base table below.',
    table: {
      title: 'Base Table f(x)',
      headers: ['x', 'f(x)'],
      rows: [
        ['-1', '6'],
        ['1', '-2'],
        ['3', '0']
      ]
    },
    options: [
      'g(-1) = -2, g(1) = 6, g(3) = 4',
      'g(-1) = 10, g(1) = 2, g(3) = 4',
      'g(-1) = -2, g(1) = 2, g(3) = 0',
      'g(-1) = 2, g(1) = -6, g(3) = -4'
    ],
    correctIndex: 0,
    correctAnswer: 'g(-1) = -2, g(1) = 6, g(3) = 4',
    explanation: `Step-by-Step Transformation Breakdown:
1. Transformation Rule: g(x) = -f(x) + 4 corresponds to mapping (x, y) -> (x, -y + 4) [Reflect across x-axis, then Shift Up 4].
2. Applying calculation for each x:
   • x = -1: g(-1) = -(6) + 4 = -2
   • x = 1:  g(1)  = -(-2) + 4 = 2 + 4 = 6
   • x = 3:  g(3)  = -(0) + 4 = 4
3. Transformed table values: g(-1) = -2, g(1) = 6, g(3) = 4.`,
    diagram: {
      title: 'Transformation Ex 2: Reflection across x-axis + Shift Up 4 [ g(x) = -f(x) + 4 ]',
      xAxisLabel: 'x',
      yAxisLabel: 'y',
      xRange: [-3, 5],
      yRange: [-4, 8],
      xStep: 1,
      yStep: 2,
      curves: [
        {
          type: 'line',
          style: 'dashed',
          label: 'Base f(x)',
          color: '#64748b',
          points: [[-1, 6], [1, -2], [3, 0]],
          highlightPoints: [
            { x: -1, y: 6, label: '(-1, 6)', color: '#64748b' },
            { x: 1, y: -2, label: '(1, -2)', color: '#64748b' },
            { x: 3, y: 0, label: '(3, 0)', color: '#64748b' }
          ]
        },
        {
          type: 'line',
          label: 'Transformed g(x)',
          color: '#2563eb',
          points: [[-1, -2], [1, 6], [3, 4]],
          highlightPoints: [
            { x: -1, y: -2, label: '(-1, -2)', color: '#2563eb' },
            { x: 1, y: 6, label: '(1, 6)', color: '#2563eb' },
            { x: 3, y: 4, label: '(3, 4)', color: '#2563eb' }
          ]
        }
      ]
    }
  },
  {
    title: 'Worked Example 3: Horizontal Compression',
    question: 'Construct the table for g(x) = f(2x) using the base table below.',
    table: {
      title: 'Base Table f(x)',
      headers: ['x', 'f(x)'],
      rows: [
        ['-4', '10'],
        ['-2', '4'],
        ['0', '-2'],
        ['2', '1'],
        ['8', '8']
      ]
    },
    options: [
      'Points: (-2, 10), (-1, 4), (0, -2), (1, 1), (4, 8)',
      'Points: (-8, 10), (-4, 4), (0, -2), (4, 1), (16, 8)',
      'Points: (-4, 20), (-2, 8), (0, -4), (2, 2), (8, 16)',
      'Points: (-2, 5), (-1, 2), (0, -1), (1, 0.5), (4, 4)'
    ],
    correctIndex: 0,
    correctAnswer: 'Points: (-2, 10), (-1, 4), (0, -2), (1, 1), (4, 8)',
    explanation: `Step-by-Step Horizontal Compression:
1. Transformation Rule: g(x) = f(2x) corresponds to mapping (x, y) -> (x/2, y) [Horizontal compression by factor 1/2].
2. For each target x:
   • x = -2: 2(-2) = -4  ==>  f(-4) = 10  ==>  (-2, 10)
   • x = -1: 2(-1) = -2  ==>  f(-2) = 4   ==>  (-1, 4)
   • x = 0:  2(0) = 0    ==>  f(0) = -2   ==>  (0, -2)
   • x = 1:  2(1) = 2    ==>  f(2) = 1    ==>  (1, 1)
   • x = 4:  2(4) = 8    ==>  f(8) = 8    ==>  (4, 8)
3. Transformed Points: (-2, 10), (-1, 4), (0, -2), (1, 1), (4, 8).`,
    diagram: {
      title: 'Transformation Ex 3: Horizontal Compression by 1/2 [ g(x) = f(2x) ]',
      xAxisLabel: 'x',
      yAxisLabel: 'y',
      xRange: [-5, 9],
      yRange: [-4, 12],
      xStep: 1,
      yStep: 2,
      curves: [
        {
          type: 'line',
          style: 'dashed',
          label: 'Base f(x) (wider)',
          color: '#64748b',
          points: [[-4, 10], [-2, 4], [0, -2], [2, 1], [8, 8]],
          highlightPoints: [
            { x: -4, y: 10, label: '(-4, 10)', color: '#64748b' },
            { x: -2, y: 4, label: '(-2, 4)', color: '#64748b' },
            { x: 0, y: -2, label: '(0, -2)', color: '#64748b' },
            { x: 2, y: 1, label: '(2, 1)', color: '#64748b' },
            { x: 8, y: 8, label: '(8, 8)', color: '#64748b' }
          ]
        },
        {
          type: 'line',
          label: 'Transformed g(x) (compressed)',
          color: '#2563eb',
          points: [[-2, 10], [-1, 4], [0, -2], [1, 1], [4, 8]],
          highlightPoints: [
            { x: -2, y: 10, label: '(-2, 10)', color: '#2563eb' },
            { x: -1, y: 4, label: '(-1, 4)', color: '#2563eb' },
            { x: 0, y: -2, label: '(0, -2)', color: '#2563eb' },
            { x: 1, y: 1, label: '(1, 1)', color: '#2563eb' },
            { x: 4, y: 8, label: '(4, 8)', color: '#2563eb' }
          ]
        }
      ]
    }
  },
  {
    title: 'Worked Example 4: Complete Parabola Transformation',
    question: 'Describe the step-by-step transformation from f(x) = x² to g(x) = -3(x + 4)² - 7.',
    options: [
      'Shift left 4, vertical stretch by 3, reflect x-axis, shift down 7 (Vertex: (-4, -7))',
      'Shift right 4, vertical stretch by 3, reflect x-axis, shift down 7 (Vertex: (4, -7))',
      'Shift left 4, vertical compression by 1/3, reflect y-axis, shift down 7 (Vertex: (-4, -7))',
      'Shift right 4, vertical stretch by 3, reflect y-axis, shift up 7 (Vertex: (4, 7))'
    ],
    correctIndex: 0,
    correctAnswer: 'Shift left 4, vertical stretch by 3, reflect x-axis, shift down 7 (Vertex: (-4, -7))',
    explanation: `Step-by-Step Breakdown:
1. Horizontal Shift: (x + 4) shifts the graph LEFT by 4 units.
2. Vertical Stretch: Factor of 3 stretches the curve vertically by a factor of 3.
3. Vertical Reflection: Negative sign in front reflects across the horizontal x-axis (parabola opens downward).
4. Vertical Shift: -7 shifts the entire curve DOWN by 7 units.

Key Graph Features Changes:
• Parent Vertex: (0, 0)  ==>  Transformed Vertex: (-4, -7)
• Parent Axis: x = 0    ==>  Transformed Axis: x = -4
• Direction: Opens Upward ==> Direction: Opens Downward
• Min Value: y = 0      ==>  Max Value: y = -7.`,
    diagram: {
      title: 'Transformation Ex 4: Parabola g(x) = -3(x + 4)² - 7',
      xAxisLabel: 'x',
      yAxisLabel: 'y',
      xRange: [-8, 2],
      yRange: [-20, 4],
      xStep: 1,
      yStep: 4,
      curves: [
        {
          type: 'function',
          fnType: 'parabola',
          label: 'Parent f(x) = x²',
          color: '#94a3b8',
          points: [[-2, 4], [0, 0], [2, 4]],
          highlightPoints: [
            { x: 0, y: 0, label: 'Parent (0, 0)', color: '#64748b' }
          ]
        },
        {
          type: 'function',
          fnType: 'parabola',
          label: 'g(x) = -3(x + 4)² - 7',
          color: '#3b82f6',
          points: [[-6, -19], [-5, -10], [-4, -7], [-3, -10], [-2, -19]],
          highlightPoints: [
            { x: -4, y: -7, label: 'Vertex (-4, -7)', color: '#ef4444' }
          ]
        }
      ]
    }
  },
  {
    title: 'Worked Example 5: Finding Equation from Points',
    question: 'A peak on f(x) is at (2, 9) and an x-intercept is at (5, 0). The transformed graph g(x) has a corresponding peak at (-1, 4) and x-intercept at (2, -5). Determine the formula for g(x) in terms of f(x).',
    options: [
      'g(x) = f(x + 3) - 5',
      'g(x) = f(x - 3) - 5',
      'g(x) = f(x + 3) + 5',
      'g(x) = f(x - 5) + 3'
    ],
    correctIndex: 0,
    correctAnswer: 'g(x) = f(x + 3) - 5',
    explanation: `Step-by-Step Coordinate Vector Analysis:
1. Inspect the change in the peak coordinate:
   • x-coordinate: 2 -> -1  ==>  Δx = -1 - 2 = -3 (Shifted LEFT by 3 units)
   • y-coordinate: 9 -> 4   ==>  Δy = 4 - 9  = -5 (Shifted DOWN by 5 units)
2. Verify with the second point (5, 0):
   • Transformed x = 5 - 3 = 2
   • Transformed y = 0 - 5 = -5
   • Resulting point: (2, -5), which matches the given transformed intercept!
3. Form the algebraic transformation:
   • Left shift of 3: replace x with (x + 3)
   • Downward shift of 5: subtract 5
   • Equation: g(x) = f(x + 3) - 5.`,
    diagram: {
      title: 'Transformation Ex 5: Vector Shift Left 3, Down 5',
      xAxisLabel: 'x',
      yAxisLabel: 'y',
      xRange: [-3, 7],
      yRange: [-7, 11],
      xStep: 1,
      yStep: 2,
      curves: [
        {
          type: 'function',
          fnType: 'parabola',
          label: 'f(x) Peak (2, 9)',
          color: '#94a3b8',
          points: [[-1, 0], [2, 9], [5, 0]],
          highlightPoints: [
            { x: 2, y: 9, label: 'f Peak (2, 9)', color: '#64748b' },
            { x: 5, y: 0, label: 'f Zero (5, 0)', color: '#64748b' }
          ]
        },
        {
          type: 'function',
          fnType: 'parabola',
          label: 'g(x) = f(x + 3) - 5',
          color: '#3b82f6',
          points: [[-4, -5], [-1, 4], [2, -5]],
          highlightPoints: [
            { x: -1, y: 4, label: 'g Peak (-1, 4)', color: '#ef4444' },
            { x: 2, y: -5, label: 'g Point (2, -5)', color: '#ef4444' }
          ]
        }
      ]
    }
  }
];

// Section 3 Worked Examples (Quadratics, Vieta's, Discriminants)
const QUADRATICS_WORKED_EXAMPLES: MathWorkedExample[] = [
  {
    title: 'Worked Example 1: Finding Vertex from Zeros and Peak Point',
    question: 'The graph of y = f(x) has a maximum at (4, 9) and x-intercepts at (-2, 0) and (10, 0). For what value of x does f(x) reach its maximum?',
    options: ['-2', '4', '9', '10'],
    correctIndex: 1,
    correctAnswer: '4',
    explanation: `Step-by-Step Coordinate Extraction:
1. The maximum value of the function is the y-coordinate (9).
2. The question asks for the input x at which this maximum occurs.
3. The vertex point is (4, 9), so x = 4.

Symmetry Check:
Midpoint of zeros = (-2 + 10) / 2 = 8 / 2 = 4, confirming axis of symmetry at x = 4.`,
    diagram: {
      title: 'Worked Ex: Parabola with Peak (4, 9) and Zeros (-2, 0), (10, 0)',
      xAxisLabel: 'x',
      yAxisLabel: 'y',
      xRange: [-4, 12],
      yRange: [-2, 12],
      xStep: 2,
      yStep: 2,
      curves: [
        {
          type: 'function',
          fnType: 'parabola',
          label: 'f(x) = -0.25(x - 4)² + 9',
          color: '#3b82f6',
          points: [[-2, 0], [1, 6.75], [4, 9], [7, 6.75], [10, 0]],
          highlightPoints: [
            { x: 4, y: 9, label: 'Vertex Max (4, 9)', color: '#ef4444' },
            { x: -2, y: 0, label: '(-2, 0)', color: '#10b981' },
            { x: 10, y: 0, label: '(10, 0)', color: '#10b981' }
          ]
        }
      ]
    }
  },
  {
    title: 'Worked Example 2: Line-Parabola Tangency & Discriminant',
    question: 'In the xy-plane, the horizontal line y = c intersects the parabola y = -2x² + 8x - 3 at exactly one point. What is the value of the constant c?',
    options: ['3', '5', '7', '8'],
    correctIndex: 1,
    correctAnswer: '5',
    explanation: `Step-by-Step Line-Parabola Tangency & Discriminant Analysis:
1. Method 1 (Vertex Peak Method):
   A downward-opening parabola y = -2x² + 8x - 3 is intersected by a horizontal line y = c at exactly one point if and only if the line passes through the maximum vertex.
   • Find vertex x-coordinate:
     x_v = -b / (2a) = -8 / (2 · (-2)) = -8 / -4 = 2
   • Find vertex y-coordinate:
     y_v = -2(2)² + 8(2) - 3 = -2(4) + 16 - 3 = -8 + 16 - 3 = 5.
   • Therefore, the horizontal tangent line is y = 5, so c = 5.

2. Method 2 (Discriminant Tangency Condition):
   Set the two equations equal:
   -2x² + 8x - 3 = c  ==>  -2x² + 8x - (3 + c) = 0
   For exactly 1 intersection point, the discriminant D must equal 0:
   D = b² - 4ac = (8)² - 4(-2)(-(3 + c)) = 0
   64 - 8(3 + c) = 0
   64 - 24 - 8c = 0
   40 = 8c  ==>  c = 5.`,
    diagram: {
      title: 'Worked Ex: Horizontal Line y = 5 Tangent to Parabola at Vertex (2, 5)',
      xAxisLabel: 'x',
      yAxisLabel: 'y',
      xRange: [-1, 5],
      yRange: [-6, 8],
      xStep: 1,
      yStep: 2,
      curves: [
        {
          type: 'function',
          fnType: 'parabola',
          expression: '-2*x^2 + 8*x - 3',
          label: 'y = -2x² + 8x - 3',
          color: '#3b82f6',
          points: [[0, -3], [1, 3], [2, 5], [3, 3], [4, -3]],
          highlightPoints: [
            { x: 2, y: 5, label: 'Tangent Vertex (2, 5)', color: '#ef4444' },
            { x: 0, y: -3, label: 'y-int (0, -3)', color: '#64748b' }
          ]
        },
        {
          type: 'line',
          style: 'dashed',
          label: 'Tangent Line y = 5',
          color: '#10b981',
          points: [[-1, 5], [5, 5]]
        }
      ]
    }
  },
  {
    title: 'Worked Example 3: Converting Standard Form to Vertex Form',
    question: 'What is the vertex of the parabola defined by y = 2x² - 12x + 11 in the xy-plane?',
    options: ['(3, -7)', '(3, 11)', '(-3, -7)', '(6, 11)'],
    correctIndex: 0,
    correctAnswer: '(3, -7)',
    explanation: `Step-by-Step Vertex Formula:
1. Identify standard form coefficients:
   a = 2,  b = -12,  c = 11
2. Compute the vertex x-coordinate:
   x_v = -b / (2a) = -(-12) / (2 · 2) = 12 / 4 = 3
3. Compute the vertex y-coordinate by evaluating y at x = 3:
   y_v = 2(3)² - 12(3) + 11
   y_v = 2(9) - 36 + 11 = 18 - 36 + 11 = -7
4. The vertex is (3, -7).`,
    diagram: {
      title: 'Worked Ex: Parabola y = 2x² - 12x + 11 with Vertex (3, -7)',
      xAxisLabel: 'x',
      yAxisLabel: 'y',
      xRange: [0, 6],
      yRange: [-10, 14],
      xStep: 1,
      yStep: 4,
      curves: [
        {
          type: 'function',
          fnType: 'parabola',
          label: 'y = 2x² - 12x + 11',
          color: '#3b82f6',
          points: [[0, 11], [1, 1], [2, -5], [3, -7], [4, -5], [5, 1], [6, 11]],
          highlightPoints: [
            { x: 3, y: -7, label: 'Vertex (3, -7)', color: '#ef4444' },
            { x: 0, y: 11, label: 'y-int (0, 11)', color: '#10b981' }
          ]
        },
        {
          type: 'line',
          style: 'dashed',
          label: 'Axis x = 3',
          color: '#94a3b8',
          points: [[3, -10], [3, 14]]
        }
      ]
    }
  },
  {
    title: 'Worked Example 4: Factored Quadratic Form Vertex Apex',
    question: 'Function f is defined by f(x) = -4(x - 3)(x - 11). For what value of x does f(x) reach its maximum value?',
    options: ['3', '7', '11', '14'],
    correctIndex: 1,
    correctAnswer: '7',
    explanation: `Step-by-Step Factored Form Vertex:
1. In factored form y = a(x - p)(x - q), the roots are x = 3 and x = 11.
2. Since a = -4 < 0, the parabola opens downward and reaches its maximum value at the vertex.
3. The vertex x-coordinate is the exact midpoint between the roots:
   x_v = (3 + 11) / 2 = 14 / 2 = 7.
4. Therefore, f(x) reaches its maximum at x = 7.`,
    diagram: {
      title: 'Worked Ex: Downward Parabola f(x) = -4(x - 3)(x - 11) Peaking at x = 7',
      xAxisLabel: 'x',
      yAxisLabel: 'y',
      xRange: [1, 13],
      yRange: [-10, 70],
      xStep: 1,
      yStep: 10,
      curves: [
        {
          type: 'function',
          fnType: 'parabola',
          label: 'f(x) = -4(x - 3)(x - 11)',
          color: '#3b82f6',
          points: [[3, 0], [5, 48], [7, 64], [9, 48], [11, 0]],
          highlightPoints: [
            { x: 7, y: 64, label: 'Max (7, 64)', color: '#ef4444' },
            { x: 3, y: 0, label: 'Root (3, 0)', color: '#10b981' },
            { x: 11, y: 0, label: 'Root (11, 0)', color: '#10b981' }
          ]
        }
      ]
    }
  },
  {
    title: 'Worked Example 5: Vieta’s Formulas for Root Sum and Product',
    question: 'In the quadratic equation 3x² + bx + c = 0, the sum of the solutions is 8 and the product of the solutions is -5. What is the value of b + c?',
    options: ['-39', '-24', '-15', '9'],
    correctIndex: 0,
    correctAnswer: '-39',
    explanation: `Step-by-Step Vieta’s Formulas:
1. For ax² + bx + c = 0 with a = 3:
   • Sum of roots = -b / a = -b / 3 = 8  ==>  -b = 24  ==>  b = -24
   • Product of roots = c / a = c / 3 = -5  ==>  c = -15
2. Compute b + c:
   b + c = -24 + (-15) = -39.`,
    diagram: {
      title: 'Worked Ex: Parabola 3x² - 24x - 15 = 0 with Sum = 8 & Product = -5',
      xAxisLabel: 'x',
      yAxisLabel: 'y',
      xRange: [-2, 10],
      yRange: [-70, 20],
      xStep: 2,
      yStep: 15,
      curves: [
        {
          type: 'function',
          fnType: 'parabola',
          label: 'y = 3x² - 24x - 15',
          color: '#3b82f6',
          points: [[-0.5, 0], [0, -15], [4, -63], [8.5, 0]],
          highlightPoints: [
            { x: 4, y: -63, label: 'Vertex (4, -63)', color: '#ef4444' },
            { x: 0, y: -15, label: 'c = -15', color: '#10b981' }
          ]
        }
      ]
    }
  },
  {
    title: 'Worked Example 6: Discriminant for Exactly One Real Solution',
    question: 'The equation 4x² - 12x + k = 0 has exactly one real solution. What is the value of constant k?',
    options: ['3', '6', '9', '36'],
    correctIndex: 2,
    correctAnswer: '9',
    explanation: `Step-by-Step Discriminant Tangency:
1. For exactly one real solution, the Discriminant must be 0:
   D = b² - 4ac = 0
2. Identify a = 4, b = -12, c = k:
   (-12)² - 4(4)(k) = 0
   144 - 16k = 0
3. Solve for k:
   16k = 144  ==>  k = 144 / 16 = 9.

Trinomial Check:
4x² - 12x + 9 = (2x - 3)² = 0, giving the single double root x = 3/2 = 1.5.`,
    diagram: {
      title: 'Worked Ex: Parabola Tangent to x-axis at x = 1.5 (k = 9)',
      xAxisLabel: 'x',
      yAxisLabel: 'y',
      xRange: [-1, 4],
      yRange: [-2, 16],
      xStep: 1,
      yStep: 2,
      curves: [
        {
          type: 'function',
          fnType: 'parabola',
          label: 'y = (2x - 3)²',
          color: '#3b82f6',
          points: [[-0.5, 16], [0, 9], [1.5, 0], [3, 9], [3.5, 16]],
          highlightPoints: [
            { x: 1.5, y: 0, label: 'Double Root (1.5, 0)', color: '#ef4444' },
            { x: 0, y: 9, label: 'k = 9', color: '#10b981' }
          ]
        }
      ]
    }
  },
  {
    title: 'Worked Example 7: Line-Parabola Tangency System',
    question: 'In the xy-plane, the line y = 3x + c is tangent to the parabola y = x² - 5x + 18 at exactly one point. What is the value of c?',
    options: ['2', '4', '6', '8'],
    correctIndex: 0,
    correctAnswer: '2',
    explanation: `Step-by-Step System Tangency:
1. Set the equations equal to each other:
   x² - 5x + 18 = 3x + c
2. Rearrange into standard quadratic form:
   x² - 8x + (18 - c) = 0
3. For tangency (exactly one intersection), Discriminant D = 0:
   D = (-8)² - 4(1)(18 - c) = 0
   64 - 72 + 4c = 0
   -8 + 4c = 0  ==>  4c = 8  ==>  c = 2.
4. Intersection occurs at x = -(-8)/(2·1) = 4, y = 3(4) + 2 = 14 (Point (4, 14)).`,
    diagram: {
      title: 'Worked Ex: Tangent Line y = 3x + 2 & Parabola at Point (4, 14)',
      xAxisLabel: 'x',
      yAxisLabel: 'y',
      xRange: [0, 8],
      yRange: [0, 25],
      xStep: 1,
      yStep: 5,
      curves: [
        {
          type: 'function',
          fnType: 'parabola',
          label: 'y = x² - 5x + 18',
          color: '#3b82f6',
          points: [[1, 14], [2, 12], [2.5, 11.75], [4, 14], [5, 18], [6, 24]]
        },
        {
          type: 'line',
          label: 'y = 3x + 2',
          color: '#10b981',
          points: [[0, 2], [2, 8], [4, 14], [6, 20]],
          highlightPoints: [
            { x: 4, y: 14, label: 'Tangent Point (4, 14)', color: '#ef4444' }
          ]
        }
      ]
    }
  }
];

const SECTIONS: MathTheorySection[] = [
  {
    sectionTitle: '4.1 Functions Master Class: Input-Output, Composites & Domains',
    fullText: 'Functions on the SAT operate as strict mathematical input-output mappings. Mastering arbitrary placeholder rules, nested composites f(g(x)), and domain constraints (rational denominators D(x) ≠ 0 and non-negative radicands) ensures complete speed and accuracy.',
    bulletPoints: [
      'Arbitrary Placeholder Rule: If f(□) = 2(□)² - 5(□) + 3, replace every instance of □ with the entire argument expression without altering outer operations.',
      'Composite Evaluation: Work inside-out! First evaluate intermediate output k = g(a), then substitute k into outer function to compute f(k).',
      'Undefined Domains: Rational functions are undefined when denominator = 0; radical functions require radicand >= 0 in the real coordinate plane.',
      'Table Matching Shortcut: Test x = 0 first to isolate the y-intercept and eliminate 2-3 incorrect options immediately.'
    ],
    examples: FUNCTION_BASICS_WORKED_EXAMPLES
  },
  {
    sectionTitle: '4.2 Core Concepts & Rules of Function Transformations',
    fullText: `Given any base parent function f(x), the complete transformed function g(x) is expressed as:
    g(x) = a · f( b · (x - h) ) + k

Where:
• Vertical Transformations (Outside f):
  - a: Vertical stretch (a > 1), vertical compression (0 < a < 1), and reflection across the x-axis (a < 0).
  - k: Vertical shift (up for k > 0, down for k < 0).

• Horizontal Transformations (Inside f - "Opposite World"):
  - b: Horizontal compression (b > 1), horizontal stretch (0 < b < 1), and reflection across the y-axis (b < 0).
  - h: Horizontal shift (right for h > 0, left for h < 0).

Order of Operations for Multiple Transformations:
Step 1: Horizontal Shifts (h)
Step 2: Horizontal Stretches / Compressions / Reflections (b)
Step 3: Vertical Stretches / Compressions / Reflections (a)
Step 4: Vertical Shifts (k)

CRITICAL RULE FOR HORIZONTAL TRANSFORMATIONS:
Always factor inside parentheses! 
Example: f(2x + 6) must be rewritten as f(2(x + 3)), representing a horizontal compression by 1/2 AND a shift LEFT by 3 units (not 6).`,
    bulletPoints: [
      'General Form: g(x) = a · f(b(x - h)) + k where vertical operators (a, k) sit outside f, and horizontal operators (b, h) sit inside f.',
      'Opposite World: Inside operations do the opposite of what they look like: (x - 5) moves RIGHT +5; (3x) COMPRESSES by 1/3.',
      'Order of Application: Apply Horizontal Shifts (h) -> Horizontal Scales (b) -> Vertical Scales (a) -> Vertical Shifts (k).',
      'Factoring Mandate: If a coefficient precedes x inside the argument (e.g. f(bx + c)), ALWAYS factor b out to get f(b(x + c/b)) before reading the shift.'
    ],
    tables: [
      {
        title: 'Comprehensive Function Transformation Matrix',
        headers: ['Transformation Type', 'Algebraic Form', 'Coordinate Mapping (x, y)', 'Graphical Visual Effect'],
        rows: [
          ['Vertical Shift Up', 'g(x) = f(x) + k', '(x, y) -> (x, y + k)', 'Shifts graph UP by k units'],
          ['Vertical Shift Down', 'g(x) = f(x) - k', '(x, y) -> (x, y - k)', 'Shifts graph DOWN by k units'],
          ['Horizontal Shift Right', 'g(x) = f(x - h)', '(x, y) -> (x + h, y)', 'Shifts graph RIGHT by h units'],
          ['Horizontal Shift Left', 'g(x) = f(x + h)', '(x, y) -> (x - h, y)', 'Shifts graph LEFT by h units'],
          ['Reflection across x-axis', 'g(x) = -f(x)', '(x, y) -> (x, -y)', 'Flips graph vertically across x-axis'],
          ['Reflection across y-axis', 'g(x) = f(-x)', '(x, y) -> (-x, y)', 'Flips graph horizontally across y-axis'],
          ['Vertical Stretch', 'g(x) = a · f(x) (a > 1)', '(x, y) -> (x, a · y)', 'Stretches curve vertically away from x-axis'],
          ['Vertical Compression', 'g(x) = a · f(x) (0 < a < 1)', '(x, y) -> (x, a · y)', 'Compresses curve vertically toward x-axis'],
          ['Horizontal Compression', 'g(x) = f(b · x) (b > 1)', '(x, y) -> (x/b, y)', 'Compresses curve horizontally toward y-axis by 1/b'],
          ['Horizontal Stretch', 'g(x) = f(b · x) (0 < b < 1)', '(x, y) -> (x/b, y)', 'Stretches curve horizontally away from y-axis by 1/b']
        ]
      }
    ],
    examples: TRANSFORMATION_WORKED_EXAMPLES
  },
  {
    sectionTitle: '4.3 Quadratic Functions Master Class: Forms, Vertex, Roots & Systems',
    fullText: 'Quadratic functions produce parabolic curves in the xy-plane. The SAT tests standard, vertex, and factored forms, Vieta’s formulas for root sums and products, Discriminant conditions for intersections, and projectile optimization.',
    bulletPoints: [
      'Standard Form y = ax² + bx + c: Vertex x-coordinate is x_v = -b / (2a); y-intercept is (0, c); opens up if a > 0, down if a < 0.',
      'Vertex Form y = a(x - h)² + k: Explicitly displays vertex (h, k) and global extreme value y = k at x = h.',
      'Factored Form y = a(x - p)(x - q): Explicitly displays x-intercepts (p, 0) and (q, 0); axis of symmetry is x = (p + q) / 2.',
      'Vieta’s Formulas: Sum of roots is -b / a; product of roots is c / a.',
      'Discriminant D = b² - 4ac: D > 0 (2 real solutions), D = 0 (1 real solution / tangent), D < 0 (0 real solutions).'
    ],
    diagrams: [
      {
        title: 'Discriminant (D = b² - 4ac) Graphical Summary',
        xAxisLabel: 'x',
        yAxisLabel: 'y',
        subDiagrams: [
          {
            label: 'When D > 0',
            caption: 'Two Distinct Real Roots (Two Real Solutions)',
            xAxisLabel: 'x',
            yAxisLabel: 'y',
            xRange: [-4, 4],
            yRange: [-5, 7],
            xStep: 2,
            yStep: 2,
            curves: [
              {
                type: 'function',
                fnType: 'parabola',
                label: 'y = x² - 4',
                color: '#3b82f6',
                points: [[-3, 5], [-2, 0], [0, -4], [2, 0], [3, 5]],
                highlightPoints: [
                  { x: -2, y: 0, label: 'Root 1 (-2, 0)', color: '#10b981' },
                  { x: 2, y: 0, label: 'Root 2 (2, 0)', color: '#10b981' }
                ]
              }
            ]
          },
          {
            label: 'When D = 0',
            caption: 'One Repeated Real Root (One Real Solution / Tangent)',
            xAxisLabel: 'x',
            yAxisLabel: 'y',
            xRange: [-4, 4],
            yRange: [-5, 7],
            xStep: 2,
            yStep: 2,
            curves: [
              {
                type: 'function',
                fnType: 'parabola',
                label: 'y = x²',
                color: '#3b82f6',
                points: [[-3, 9], [-2, 4], [0, 0], [2, 4], [3, 9]],
                highlightPoints: [
                  { x: 0, y: 0, label: 'Vertex / Root (0, 0)', color: '#ef4444' }
                ]
              }
            ]
          },
          {
            label: 'When D < 0',
            caption: 'No Real Roots (No Real Solutions / Non-Intersecting)',
            xAxisLabel: 'x',
            yAxisLabel: 'y',
            xRange: [-4, 4],
            yRange: [-2, 10],
            xStep: 2,
            yStep: 2,
            curves: [
              {
                type: 'function',
                fnType: 'parabola',
                label: 'y = x² + 2',
                color: '#3b82f6',
                points: [[-3, 11], [-2, 6], [0, 2], [2, 6], [3, 11]],
                highlightPoints: [
                  { x: 0, y: 2, label: 'Vertex (0, 2)', color: '#8b5cf6' }
                ]
              }
            ]
          }
        ]
      }
    ],
    tables: [
      {
        title: 'Quadratic Algebraic Forms vs Key Graphical Attributes',
        headers: ['Form Name', 'Algebraic Expression', 'Key Feature Explicitly Displayed', 'Vertex Coordinates'],
        rows: [
          ['Standard Form', 'y = ax² + bx + c', 'y-intercept (0, c) & direction of opening a', '(-b/(2a), f(-b/(2a)))'],
          ['Vertex Form', 'y = a(x - h)² + k', 'Vertex (h, k) & extreme value k', '(h, k)'],
          ['Factored Form', 'y = a(x - p)(x - q)', 'x-intercepts (p, 0) and (q, 0)', '((p+q)/2, f((p+q)/2))']
        ]
      }
    ],
    examples: QUADRATICS_WORKED_EXAMPLES
  }
];

export const FULL_CHAPTER_4_FUNCTIONS_AND_QUADRATICS: FullSatMathChapter = {
  id: 'functions-and-quadratics',
  chapterNumber: 4,
  chapterTitle: 'Functions, Transformations & Quadratic Master Class',
  pageNumber: 112,
  quote: 'Functions are the fundamental machinery of algebra; understand the transformation mapping, and every graph becomes self-evident.',
  introduction: 'This comprehensive master chapter covers everything you need to score an 800 on SAT functions, transformations, and quadratic curves. Explore function notations, nested composites, undefined domains, the comprehensive 10-rule transformation matrix, order of operations, standard/vertex/factored quadratic forms, Vieta’s formulas, Discriminants, and line-parabola intersections, backed by 17 fully worked textbook examples and 75 interactive practice problems with coordinate plane diagrams.',
  sections: SECTIONS,
  exerciseGroups: [
    {
      exerciseNumber: 1,
      title: 'Practice Exam - Part 1: Functions (Q1-Q30)',
      description: 'Comprehensive practice covering function definitions, composite evaluations, undefined domains, table fitting, and linear/word models. All problems feature step-by-step mathematical proofs and coordinate plane graphs.',
      questions: CHAPTER_4_QUESTIONS_PART_1
    },
    {
      exerciseNumber: 2,
      title: 'Practice Exam - Part 2: Quadratics (Q31-Q60)',
      description: 'Comprehensive practice covering standard/vertex/factored quadratic forms, Vieta’s formulas, Discriminant analysis, line-parabola intersections, and projectile optimization. All problems include coordinate plane graphs.',
      questions: CHAPTER_4_QUESTIONS_PART_2
    },
    {
      exerciseNumber: 3,
      title: 'Practice Exam - Part 3: Function Transformations (Q1-Q15)',
      description: 'Mastery practice on function translations, horizontal/vertical stretches, reflections across axes, coordinate mappings, and equation deducing. All 15 problems include step-by-step proofs and coordinate plane diagrams.',
      questions: CHAPTER_4_TRANSFORMATION_QUESTIONS
    }
  ]
};
