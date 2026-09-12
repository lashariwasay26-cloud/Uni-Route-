import { MathExerciseQuestion } from './satMathConcepts';

export const CHAPTER_4_QUESTIONS_PART_1: MathExerciseQuestion[] = [
  {
    id: 'ch4-q1',
    number: 1,
    exerciseNumber: 1,
    exerciseTitle: 'Practice Exam - Part 1: Functions (Q1-Q30)',
    question: 'Function f is defined by f(x) = 3x² - 5x + 2. What is the value of f(-2)?',
    options: ['-16', '0', '20', '24'],
    correctIndex: 3,
    correctAnswerText: '24',
    explanation: `Step-by-Step Algebraic Solution:
1. Substitute x = -2 into the function definition f(x) = 3x² - 5x + 2:
   f(-2) = 3(-2)² - 5(-2) + 2
2. Evaluate exponents first:
   (-2)² = 4
   f(-2) = 3(4) - 5(-2) + 2
3. Multiply and simplify:
   f(-2) = 12 + 10 + 2 = 24.

Graph & Coordinate Analysis:
The point (-2, 24) lies on the parabolic curve y = 3x² - 5x + 2 in Quadrant II.`,
    diagram: {
      title: 'Plot of f(x) = 3x² - 5x + 2 & Point (-2, 24)',
      xAxisLabel: 'x',
      yAxisLabel: 'y',
      xRange: [-4, 3],
      yRange: [-2, 26],
      xStep: 1,
      yStep: 4,
      curves: [
        {
          type: 'function',
          fnType: 'parabola',
          label: 'f(x) = 3x² - 5x + 2',
          color: '#3b82f6',
          points: [
            [-3, 44],
            [-2, 24],
            [-1, 10],
            [0, 2],
            [1, 0],
            [2, 4],
            [3, 14]
          ],
          highlightPoints: [
            { x: -2, y: 24, label: '(-2, 24)', color: '#ef4444' },
            { x: 0, y: 2, label: 'y-int (0, 2)', color: '#10b981' }
          ]
        }
      ]
    }
  },
  {
    id: 'ch4-q2',
    number: 2,
    exerciseNumber: 1,
    exerciseTitle: 'Practice Exam - Part 1: Functions (Q1-Q30)',
    question: 'If f(x) = (16 + x²) / (2x) for all x ≠ 0, what is the value of f(-4)?',
    options: ["-6","-8","6","8"],
    correctIndex: 1,
    correctAnswerText: "-8",
    explanation: `Step-by-Step Algebraic Evaluation:
1. Substitute x = -4 directly into the rational function:
   f(-4) = (16 + (-4)²) / (2(-4))
2. Evaluate the numerator:
   16 + (-4)² = 16 + 16 = 32
3. Evaluate the denominator:
   2(-4) = -8
4. Divide numerator by denominator:
   f(-4) = 32 / (-8) = -4.

Negative Signs Rule:
Squaring a negative number always yields a positive result ((-4)² = +16), while the denominator retains the negative sign (2(-4) = -8), resulting in a negative quotient.`,
    diagram: {
      title: 'Rational Function f(x) = (16 + x²)/(2x) & Target Point (-4, -4)',
      xAxisLabel: 'x',
      yAxisLabel: 'y',
      xRange: [-8, 8],
      yRange: [-10, 10],
      xStep: 2,
      yStep: 2,
      curves: [
        {
          type: 'function',
          label: 'f(x) = (16 + x²)/(2x)',
          color: '#3b82f6',
          points: [[-8, -5], [-6, -4.33], [-4, -4], [-2, -5], [-1, -8.5]],
          highlightPoints: [
            { x: -4, y: -4, label: '(-4, -4)', color: '#ef4444' }
          ]
        },
        {
          type: 'function',
          label: 'f(x) (x > 0)',
          color: '#3b82f6',
          points: [[1, 8.5], [2, 5], [4, 4], [6, 4.33], [8, 5]],
          highlightPoints: [
            { x: 4, y: 4, label: '(4, 4)', color: '#10b981' }
          ]
        }
      ]
    }
  },
  {
    id: 'ch4-q3',
    number: 3,
    exerciseNumber: 1,
    exerciseTitle: 'Practice Exam - Part 1: Functions (Q1-Q30)',
    question: 'The table below gives values of the function f for selected values of x.\nIf g(x) = 2f(x), what is the value of k if g(k) = 8?',
    table: {
      title: 'Values of Function f',
      headers: ['x', 'f(x)'],
      rows: [
        ['1', '-2'],
        ['2', '1'],
        ['3', '4'],
        ['4', '9']
      ]
    },
    options: ["1 unit","2 units","3 units","4 units"],
    correctIndex: 2,
    correctAnswerText: "3 units",
    explanation: `Step-by-Step Table Lookup & Function Relation:
1. Substitute k into the relation g(x) = 2f(x):
   g(k) = 2f(k)
2. Set g(k) equal to 8:
   2f(k) = 8
3. Divide both sides by 2 to isolate f(k):
   f(k) = 8 / 2 = 4
4. Look up the value of x in the table where f(x) = 4:
   • For x = 1, f(1) = -2
   • For x = 2, f(2) = 1
   • For x = 3, f(3) = 4 (Match!)
   • For x = 4, f(4) = 9
5. Therefore, k = 3.`,
    diagram: {
      title: 'Functions f(x) and g(x) = 2f(x) Table Scaling (g(3) = 8)',
      xAxisLabel: 'x',
      yAxisLabel: 'y',
      xRange: [0, 5],
      yRange: [-4, 20],
      xStep: 1,
      yStep: 4,
      curves: [
        {
          type: 'line',
          label: 'f(x)',
          color: '#3b82f6',
          points: [[1, -2], [2, 1], [3, 4], [4, 9]],
          highlightPoints: [
            { x: 3, y: 4, label: 'f(3) = 4', color: '#10b981' }
          ]
        },
        {
          type: 'line',
          label: 'g(x) = 2f(x)',
          color: '#8b5cf6',
          points: [[1, -4], [2, 2], [3, 8], [4, 18]],
          highlightPoints: [
            { x: 3, y: 8, label: 'g(3) = 8 (k = 3)', color: '#ef4444' }
          ]
        }
      ]
    }
  },
  {
    id: 'ch4-q4',
    number: 4,
    exerciseNumber: 1,
    exerciseTitle: 'Practice Exam - Part 1: Functions (Q1-Q30)',
    question: 'If f(x) = -3x + 5 and 1/2 f(a) = 10, what is the value of a?',
    options: ["-12","-5","5","12"],
    correctIndex: 2,
    correctAnswerText: "5",
    explanation: `Step-by-Step Algebraic Solution:
1. Isolate the function output f(a):
   1/2 f(a) = 10
   Multiply both sides by 2:
   f(a) = 20
2. Substitute input a into the definition f(x) = -3x + 5:
   f(a) = -3a + 5
3. Set equal to 20 and solve for a:
   -3a + 5 = 20
   -3a = 20 - 5
   -3a = 15
   a = 15 / (-3) = -5.

Distractor Explanations:
• Choice A (-10) is incorrect: Results from taking 20 / -2 instead of solving -3a + 5 = 20.
• Choice B (-5) is CORRECT: 1/2 f(a) = 10 ==> f(a) = 20 ==> -3a + 5 = 20 ==> a = -5.
• Choice C (5) is incorrect: Sign error when dividing 15 by -3.
• Choice D (10) is incorrect: Forgetting the 1/2 multiplier and assuming f(a) = 10, giving -3a + 5 = 10 ==> -3a = 5.`,
    diagram: {
      title: 'Linear Function f(x) = -3x + 5 with f(-5) = 20 (1/2 f(-5) = 10)',
      xAxisLabel: 'x',
      yAxisLabel: 'y',
      xRange: [-7, 4],
      yRange: [-5, 25],
      xStep: 1,
      yStep: 5,
      curves: [
        {
          type: 'line',
          label: 'f(x) = -3x + 5',
          color: '#3b82f6',
          points: [[-6, 23], [-5, 20], [-3, 14], [0, 5], [2, -1]],
          highlightPoints: [
            { x: -5, y: 20, label: '(-5, 20) ==> 1/2 f(-5) = 10', color: '#ef4444' },
            { x: 0, y: 5, label: 'y-int (0, 5)', color: '#10b981' }
          ]
        }
      ]
    }
  },
  {
    id: 'ch4-q5',
    number: 5,
    exerciseNumber: 1,
    exerciseTitle: 'Practice Exam - Part 1: Functions (Q1-Q30)',
    question: 'The table below shows select values for a function f.\nWhich equation could define f?',
    table: {
      title: 'Values of Function f',
      headers: ['x', 'f(x)'],
      rows: [
        ['0', '5'],
        ['1', '8'],
        ['3', '32']
      ]
    },
    options: ['f(x) = 3x + 5', 'f(x) = x² + 5', 'f(x) = 3x² + 5', 'f(x) = 5(2)ˣ'],
    correctIndex: 2,
    correctAnswerText: 'f(x) = 3x² + 5',
    explanation: `Step-by-Step Table Matching Shortcut:
1. Test x = 0: f(0) = 5.
   • A: 3(0) + 5 = 5 (Keeps A)
   • B: (0)² + 5 = 5 (Keeps B)
   • C: 3(0)² + 5 = 5 (Keeps C)
   • D: 5(2)⁰ = 5(1) = 5 (Keeps D)
2. Test x = 1: f(1) = 8.
   • A: 3(1) + 5 = 8 (Keeps A)
   • B: (1)² + 5 = 6 (Eliminate B)
   • C: 3(1)² + 5 = 8 (Keeps C)
   • D: 5(2)¹ = 10 (Eliminate D)
3. Test x = 3: f(3) = 32.
   • A: 3(3) + 5 = 14 ≠ 32 (Eliminate A)
   • C: 3(3)² + 5 = 3(9) + 5 = 27 + 5 = 32 (Matches perfectly!).
4. The defining equation is f(x) = 3x² + 5.`,
    diagram: {
      title: 'Fitted Curve f(x) = 3x² + 5 and Table Data Points',
      xAxisLabel: 'x',
      yAxisLabel: 'y',
      xRange: [-1, 4],
      yRange: [-2, 36],
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
  },
  {
    id: 'ch4-q6',
    number: 6,
    exerciseNumber: 1,
    exerciseTitle: 'Practice Exam - Part 1: Functions (Q1-Q30)',
    question: 'A taxicab company charges a total fare C(m), in dollars, for a ride of m miles modeled by C(m) = 1.50m + 3.50. Which of the following is the best interpretation of 3.50 in this context?',
    options: [
      'The cost per mile driven',
      'The total cost for a 1.5-mile ride',
      'The initial base fee before any miles are driven',
      'The maximum fare charged by the company'
    ],
    correctIndex: 2,
    correctAnswerText: 'The initial base fee before any miles are driven',
    explanation: `Step-by-Step Contextual Interpretation:
1. In a linear model C(m) = 1.50m + 3.50:
   • 1.50 is the slope (rate of change in dollars per mile).
   • 3.50 is the vertical intercept C(0), which represents the fixed initial cost when m = 0 miles.
2. Therefore, 3.50 is the initial base fee before any miles are driven.`,
    diagram: {
      title: 'Taxicab Cost Model C(m) = 1.50m + 3.50',
      xAxisLabel: 'Miles (m)',
      yAxisLabel: 'Cost ($)',
      xRange: [0, 10],
      yRange: [0, 20],
      xStep: 2,
      yStep: 4,
      curves: [
        {
          type: 'line',
          label: 'C(m) = 1.50m + 3.50',
          color: '#3b82f6',
          points: [[0, 3.5], [2, 6.5], [4, 9.5], [6, 12.5], [8, 15.5], [10, 18.5]],
          highlightPoints: [
            { x: 0, y: 3.5, label: 'Base Fee (0, $3.50)', color: '#ef4444' }
          ]
        }
      ]
    }
  },
  {
    id: 'ch4-q7',
    number: 7,
    exerciseNumber: 1,
    exerciseTitle: 'Practice Exam - Part 1: Functions (Q1-Q30)',
    question: 'The continuous graph of y = f(x) has a maximum at point (3, 8) and x-intercepts at (-1, 0) and (7, 0). For what value of x does f(x) reach its maximum value?',
    options: ['-1', '3', '7', '8'],
    correctIndex: 1,
    correctAnswerText: '3',
    explanation: `Step-by-Step Graphic Reasoning:
1. The maximum value of a function refers to the highest y-coordinate (which is 8).
2. The question asks for the value of x at which this maximum occurs.
3. The peak point is given as (3, 8), where x = 3 and y = 8.
4. Thus, f(x) reaches its maximum value at x = 3.

Symmetry Check:
Notice that the midpoint of the x-intercepts is (-1 + 7)/2 = 6/2 = 3, confirming that the vertex axis of symmetry is x = 3.`,
    diagram: {
      title: 'Graph of y = f(x) Showing Vertex (3, 8) & Intercepts',
      xAxisLabel: 'x',
      yAxisLabel: 'y',
      xRange: [-3, 9],
      yRange: [-2, 10],
      xStep: 1,
      yStep: 2,
      curves: [
        {
          type: 'function',
          fnType: 'parabola',
          label: 'y = -(x - 3)²/2 + 8',
          color: '#3b82f6',
          points: [[-1, 0], [1, 6], [3, 8], [5, 6], [7, 0]],
          highlightPoints: [
            { x: 3, y: 8, label: 'Max (3, 8)', color: '#ef4444' },
            { x: -1, y: 0, label: '(-1, 0)', color: '#10b981' },
            { x: 7, y: 0, label: '(7, 0)', color: '#10b981' }
          ]
        },
        {
          type: 'line',
          style: 'dashed',
          label: 'Axis x = 3',
          color: '#94a3b8',
          points: [[3, -2], [3, 10]]
        }
      ]
    }
  },
  {
    id: 'ch4-q8',
    number: 8,
    exerciseNumber: 1,
    exerciseTitle: 'Practice Exam - Part 1: Functions (Q1-Q30)',
    question: 'Functions f and g are defined by f(x) = 4x - 3 and g(x) = 3x + 5. For what value of x does f(x) = g(x)?',
    options: ['2', '4', '8', '12'],
    correctIndex: 2,
    correctAnswerText: '8',
    explanation: `Step-by-Step System Equating Solution:
1. Set the function outputs equal to find the value of x where their graphs intersect:
   f(x) = g(x)
   4x - 3 = 3x + 5
2. Subtract 3x from both sides:
   x - 3 = 5
3. Add 3 to both sides:
   x = 8.
4. Check by evaluating both functions at x = 8:
   • f(8) = 4(8) - 3 = 32 - 3 = 29
   • g(8) = 3(8) + 5 = 24 + 5 = 29
   Since both yield 29, x = 8 is the unique intersection point.

Distractor Explanations:
• Choice A (2) is incorrect: Results from taking 5 - 3 = 2 without proper equation balance.
• Choice B (4) is incorrect: Results from dividing 8 by 2.
• Choice C (8) is CORRECT: Setting 4x - 3 = 3x + 5 yields x = 8.
• Choice D (12) is incorrect: Arithmetic error adding 4 + 5 + 3.`,
    diagram: {
      title: 'Intersection of f(x) = 4x - 3 and g(x) = 3x + 5 at (8, 29)',
      xAxisLabel: 'x',
      yAxisLabel: 'y',
      xRange: [0, 11],
      yRange: [0, 38],
      xStep: 1,
      yStep: 5,
      curves: [
        {
          type: 'line',
          label: 'f(x) = 4x - 3',
          color: '#3b82f6',
          points: [[1, 1], [3, 9], [5, 17], [8, 29], [10, 37]],
          highlightPoints: [
            { x: 8, y: 29, label: 'Intersection (8, 29)', color: '#ef4444' }
          ]
        },
        {
          type: 'line',
          label: 'g(x) = 3x + 5',
          color: '#10b981',
          points: [[0, 5], [3, 14], [6, 23], [8, 29], [10, 35]],
          highlightPoints: [
            { x: 8, y: 29, label: 'f(8) = g(8) = 29', color: '#ef4444' }
          ]
        }
      ]
    }
  },
  {
    id: 'ch4-q9',
    number: 9,
    exerciseNumber: 1,
    exerciseTitle: 'Practice Exam - Part 1: Functions (Q1-Q30)',
    question: 'Function f is defined by f(x) = √(2x + 6). What is the value of f(15) - f(5)?',
    options: ["k = 2","k = 4","k = 6","k = 8"],
    correctIndex: 1,
    correctAnswerText: "k = 4",
    explanation: `Step-by-Step Evaluation:
1. Compute f(15):
   f(15) = √(2(15) + 6) = √(30 + 6) = √36 = 6
2. Compute f(5):
   f(5) = √(2(5) + 6) = √(10 + 6) = √16 = 4
3. Subtract the two values:
   f(15) - f(5) = 6 - 4 = 2.

Rule: Never subtract the inputs inside the radical first (f(15 - 5) ≠ f(15) - f(5)).`,
    diagram: {
      title: 'Radical Function f(x) = √(2x + 6)',
      xAxisLabel: 'x',
      yAxisLabel: 'y',
      xRange: [-4, 18],
      yRange: [0, 8],
      xStep: 2,
      yStep: 1,
      curves: [
        {
          type: 'function',
          label: 'f(x) = √(2x + 6)',
          color: '#3b82f6',
          points: [[-3, 0], [-1, 2], [1, 2.82], [5, 4], [11, 5.29], [15, 6]],
          highlightPoints: [
            { x: 5, y: 4, label: '(5, 4)', color: '#10b981' },
            { x: 15, y: 6, label: '(15, 6)', color: '#ef4444' }
          ]
        }
      ]
    }
  },
  {
    id: 'ch4-q10',
    number: 10,
    exerciseNumber: 1,
    exerciseTitle: 'Practice Exam - Part 1: Functions (Q1-Q30)',
    question: 'Functions f and g are defined by f(x) = 3x + 2 and g(x) = f(2x) - 1. What is the value of g(10)?',
    options: ['38', '59', '61', '62'],
    correctIndex: 2,
    correctAnswerText: '61',
    explanation: `Step-by-Step Function Composition & Evaluation:
Method 1: Direct Argument Substitution
1. Substitute x = 10 into g(x) = f(2x) - 1:
   g(10) = f(2 · 10) - 1 = f(20) - 1
2. Evaluate f(20) using f(x) = 3x + 2:
   f(20) = 3(20) + 2 = 60 + 2 = 62
3. Subtract 1:
   g(10) = 62 - 1 = 61.

Method 2: Algebraic Composition
1. Write the general expression for g(x):
   g(x) = f(2x) - 1 = (3(2x) + 2) - 1 = 6x + 2 - 1 = 6x + 1
2. Substitute x = 10 into g(x):
   g(10) = 6(10) + 1 = 60 + 1 = 61.

Distractor Explanations:
• Choice A (38) is incorrect: Confusing the operation or computing 2·f(10) - 1 = 2(32) - 1 incorrectly.
• Choice B (59) is incorrect: Evaluating f(2x - 1) = f(19) = 3(19) + 2 = 59 (misinterpreting the subtraction as being inside the argument).
• Choice C (61) is CORRECT: g(10) = f(20) - 1 = 62 - 1 = 61.
• Choice D (62) is incorrect: Evaluating f(20) = 62 but omitting the "- 1" outside the function.`,
    diagram: {
      title: 'Composition g(x) = f(2x) - 1 = 6x + 1 with Target g(10) = 61',
      xAxisLabel: 'x',
      yAxisLabel: 'y',
      xRange: [0, 12],
      yRange: [0, 70],
      xStep: 2,
      yStep: 10,
      curves: [
        {
          type: 'line',
          label: 'g(x) = 6x + 1',
          color: '#3b82f6',
          points: [[0, 1], [2, 13], [5, 31], [8, 49], [10, 61]],
          highlightPoints: [
            { x: 10, y: 61, label: 'g(10) = 61', color: '#ef4444' }
          ]
        }
      ]
    }
  },
  {
    id: 'ch4-q11',
    number: 11,
    exerciseNumber: 1,
    exerciseTitle: 'Practice Exam - Part 1: Functions (Q1-Q30)',
    question: 'Function f is defined by f(x) = ax² + 5, where a is a constant. The graph of y = f(x) passes through point (2, 21). What is the value of a?',
    options: ['2', '4', '5', '8'],
    correctIndex: 1,
    correctAnswerText: '4',
    explanation: `Step-by-Step Algebraic Solution:
1. Substitute the point coordinates (x = 2, y = 21) into the equation:
   21 = a(2)² + 5
2. Simplify the square:
   21 = 4a + 5
3. Subtract 5 from both sides:
   16 = 4a
4. Divide by 4:
   a = 16 / 4 = 4.`,
    diagram: {
      title: 'Parabola f(x) = 4x² + 5 Passing Through (2, 21)',
      xAxisLabel: 'x',
      yAxisLabel: 'y',
      xRange: [-3, 3],
      yRange: [0, 25],
      xStep: 1,
      yStep: 5,
      curves: [
        {
          type: 'function',
          fnType: 'parabola',
          label: 'f(x) = 4x² + 5',
          color: '#3b82f6',
          points: [[-2, 21], [-1, 9], [0, 5], [1, 9], [2, 21]],
          highlightPoints: [
            { x: 2, y: 21, label: '(2, 21)', color: '#ef4444' },
            { x: 0, y: 5, label: 'Vertex (0, 5)', color: '#10b981' }
          ]
        }
      ]
    }
  },
  {
    id: 'ch4-q12',
    number: 12,
    exerciseNumber: 1,
    exerciseTitle: 'Practice Exam - Part 1: Functions (Q1-Q30)',
    question: 'The graph of y = -x² + 12 in the xy-plane passes through the point (a, a), where a > 0. What is the value of a?',
    options: ['2', '3', '4', '6'],
    correctIndex: 1,
    correctAnswerText: '3',
    explanation: `Step-by-Step Point-on-Graph Quadratic Solution:
1. Since point (a, a) lies on the graph of y = -x² + 12, set x = a and y = a:
   a = -a² + 12
2. Move all terms to one side to establish standard quadratic form ax² + bx + c = 0:
   a² + a - 12 = 0
3. Factor the trinomial:
   (a + 4)(a - 3) = 0
4. Solve for the roots:
   a = -4  or  a = 3
5. The problem specifies that a > 0.
   Therefore, a = 3.

Verification:
When x = 3, y = -(3)² + 12 = -9 + 12 = 3, verifying that (3, 3) lies on the curve.`,
    diagram: {
      title: 'Intersection of Parabola y = -x² + 12 & Line y = x at (3, 3)',
      xAxisLabel: 'x',
      yAxisLabel: 'y',
      xRange: [-5, 5],
      yRange: [-10, 15],
      xStep: 1,
      yStep: 5,
      curves: [
        {
          type: 'function',
          fnType: 'parabola',
          label: 'y = -x² + 12',
          color: '#3b82f6',
          points: [[-4, -4], [-3, 3], [0, 12], [3, 3], [4, -4]],
          highlightPoints: [
            { x: 3, y: 3, label: '(3, 3)', color: '#ef4444' },
            { x: -4, y: -4, label: '(-4, -4)', color: '#64748b' }
          ]
        },
        {
          type: 'line',
          label: 'y = x',
          color: '#10b981',
          points: [[-5, -5], [0, 0], [3, 3], [5, 5]]
        }
      ]
    }
  },
  {
    id: 'ch4-q13',
    number: 13,
    exerciseNumber: 1,
    exerciseTitle: 'Practice Exam - Part 1: Functions (Q1-Q30)',
    question: 'Function q is defined by q(x) = (x - 2)(x + 4)(x - 7). Which of the following is NOT an x-intercept of the graph of y = q(x)?',
    options: ['(-4, 0)', '(-2, 0)', '(2, 0)', '(7, 0)'],
    correctIndex: 1,
    correctAnswerText: '(-2, 0)',
    explanation: `Step-by-Step Zeros Analysis:
1. Find all x-intercepts by setting q(x) = 0:
   (x - 2)(x + 4)(x - 7) = 0
2. Apply the Zero-Product Property:
   • x - 2 = 0  ==>  x = 2 (point (2, 0))
   • x + 4 = 0  ==>  x = -4 (point (-4, 0))
   • x - 7 = 0  ==>  x = 7 (point (7, 0))
3. The point (-2, 0) is NOT an x-intercept.`,
    diagram: {
      title: 'Cubic Function q(x) = (x - 2)(x + 4)(x - 7) & Roots',
      xAxisLabel: 'x',
      yAxisLabel: 'y',
      xRange: [-6, 9],
      yRange: [-40, 40],
      xStep: 2,
      yStep: 10,
      curves: [
        {
          type: 'function',
          fnType: 'cubic',
          label: 'q(x) = (x - 2)(x + 4)(x - 7)',
          color: '#3b82f6',
          points: [[-5, -84], [-4, 0], [-2, 72], [0, 56], [2, 0], [5, -36], [7, 0], [8, 72]],
          highlightPoints: [
            { x: -4, y: 0, label: '(-4, 0)', color: '#10b981' },
            { x: 2, y: 0, label: '(2, 0)', color: '#10b981' },
            { x: 7, y: 0, label: '(7, 0)', color: '#10b981' }
          ]
        }
      ]
    }
  },
  {
    id: 'ch4-q14',
    number: 14,
    exerciseNumber: 1,
    exerciseTitle: 'Practice Exam - Part 1: Functions (Q1-Q30)',
    question: 'The population P of a town t years after 2020 is modeled by P(t) = 2500(1.04)ᵗ. Which statement is the best interpretation of 2500 in this context?',
    options: [
      'The population growth rate per year',
      'The estimated population of the town in 2020',
      'The increase in population each year',
      'The estimated population of the town in 2024'
    ],
    correctIndex: 1,
    correctAnswerText: 'The estimated population of the town in 2020',
    explanation: `Step-by-Step Exponential Model Interpretation:
1. In an exponential growth model P(t) = P₀(1 + r)ᵗ:
   • P₀ is the initial population at t = 0.
   • Here, t = 0 corresponds to the baseline year 2020.
2. When t = 0:
   P(0) = 2500(1.04)⁰ = 2500(1) = 2500.
3. Therefore, 2500 represents the estimated population of the town in 2020.`,
    diagram: {
      title: 'Exponential Population Growth P(t) = 2500(1.04)ᵗ',
      xAxisLabel: 'Years after 2020 (t)',
      yAxisLabel: 'Population P(t)',
      xRange: [0, 10],
      yRange: [2000, 4000],
      xStep: 2,
      yStep: 500,
      curves: [
        {
          type: 'function',
          fnType: 'exponential',
          label: 'P(t) = 2500(1.04)ᵗ',
          color: '#3b82f6',
          points: [[0, 2500], [2, 2704], [4, 2925], [6, 3163], [8, 3421], [10, 3701]],
          highlightPoints: [
            { x: 0, y: 2500, label: 'Initial (0, 2500)', color: '#ef4444' }
          ]
        }
      ]
    }
  },
  {
    id: 'ch4-q15',
    number: 15,
    exerciseNumber: 1,
    exerciseTitle: 'Practice Exam - Part 1: Functions (Q1-Q30)',
    question: 'If f(x) = -3x + 5 and (1/2)f(a) = 10, what is the value of a?',
    options: ["-8","-4","4","8"],
    correctIndex: 2,
    correctAnswerText: "4",
    explanation: `Step-by-Step Function Equation Solution:
1. Isolate f(a) from the given equation:
   (1/2)f(a) = 10
   Multiply both sides by 2:
   f(a) = 20
2. Substitute a into the definition f(x) = -3x + 5:
   -3a + 5 = 20
3. Subtract 5 from both sides:
   -3a = 15
4. Divide by -3:
   a = 15 / (-3) = -5.

Verification:
f(-5) = -3(-5) + 5 = 15 + 5 = 20.
Then (1/2)f(-5) = (1/2)(20) = 10, which matches the prompt condition.`,
    diagram: {
      title: 'Linear Function f(x) = -3x + 5 & Target Line y = 20 at (-5, 20)',
      xAxisLabel: 'x',
      yAxisLabel: 'y',
      xRange: [-8, 4],
      yRange: [-5, 25],
      xStep: 2,
      yStep: 5,
      curves: [
        {
          type: 'line',
          label: 'f(x) = -3x + 5',
          color: '#3b82f6',
          points: [[-6, 23], [-5, 20], [-3, 14], [0, 5], [2, -1], [3, -4]],
          highlightPoints: [
            { x: -5, y: 20, label: '(-5, 20)', color: '#ef4444' },
            { x: 0, y: 5, label: 'y-int (0, 5)', color: '#10b981' }
          ]
        },
        {
          type: 'line',
          style: 'dashed',
          label: 'y = 20',
          color: '#10b981',
          points: [[-8, 20], [4, 20]]
        }
      ]
    }
  },
  {
    id: 'ch4-q16',
    number: 16,
    exerciseNumber: 1,
    exerciseTitle: 'Practice Exam - Part 1: Functions (Q1-Q30)',
    question: 'The graph of y = f(x) in the xy-plane has a maximum value at (5, 12). If function g is defined by g(x) = f(x) + 4, what is the maximum value of g(x)?',
    options: ['9', '12', '16', '20'],
    correctIndex: 2,
    correctAnswerText: '16',
    explanation: `Step-by-Step Vertical Translation:
1. The function g(x) = f(x) + 4 represents a vertical shift upward by 4 units.
2. For any point (x, y) on the graph of f, the corresponding point on g is (x, y + 4).
3. The peak point of f is (5, 12).
4. The new maximum for g occurs at (5, 12 + 4) = (5, 16).
5. The maximum value of g(x) is 16.`,
    diagram: {
      title: 'Vertical Shift: f(x) Peak at (5, 12) ==> g(x) Peak at (5, 16)',
      xAxisLabel: 'x',
      yAxisLabel: 'y',
      xRange: [1, 9],
      yRange: [4, 20],
      xStep: 1,
      yStep: 2,
      curves: [
        {
          type: 'function',
          fnType: 'parabola',
          label: 'f(x)',
          color: '#3b82f6',
          points: [[2, 7.5], [3, 10], [5, 12], [7, 10], [8, 7.5]],
          highlightPoints: [
            { x: 5, y: 12, label: 'f(5) = 12', color: '#3b82f6' }
          ]
        },
        {
          type: 'function',
          fnType: 'parabola',
          label: 'g(x) = f(x) + 4',
          color: '#10b981',
          points: [[2, 11.5], [3, 14], [5, 16], [7, 14], [8, 11.5]],
          highlightPoints: [
            { x: 5, y: 16, label: 'g(5) = 16', color: '#ef4444' }
          ]
        }
      ]
    }
  },
  {
    id: 'ch4-q17',
    number: 17,
    exerciseNumber: 1,
    exerciseTitle: 'Practice Exam - Part 1: Functions (Q1-Q30)',
    question: 'The table below defines the functions f and g for selected values of x.\nWhat is the value of f(g(1))?',
    table: {
      title: 'Values of Functions f and g',
      headers: ['x', 'f(x)', 'g(x)'],
      rows: [
        ['-2', '3', '1'],
        ['-1', '4', '2'],
        ['0', '1', '-1'],
        ['1', '2', '-2'],
        ['2', '0', '3']
      ]
    },
    options: ['-2', '1', '2', '3'],
    correctIndex: 3,
    correctAnswerText: '3',
    explanation: `Step-by-Step Nested Table Evaluation:
1. Work inside-out: first determine the inner value g(1).
   • Look at the table row where x = 1.
   • Under column g(x), find g(1) = -2.
2. Substitute this output (-2) as the input into the outer function f:
   f(g(1)) = f(-2)
3. Look at the table row where x = -2:
   • Under column f(x), find f(-2) = 3.
4. Therefore, f(g(1)) = 3.`,
    diagram: {
      title: 'Two-Stage Composite Mapping: x = 1 ==> g(1) = -2 ==> f(-2) = 3',
      xAxisLabel: 'x',
      yAxisLabel: 'y',
      xRange: [-3, 3],
      yRange: [-3, 5],
      xStep: 1,
      yStep: 1,
      curves: [
        {
          type: 'line',
          label: 'f(x) Data',
          color: '#3b82f6',
          points: [[-2, 3], [-1, 4], [0, 1], [1, 2], [2, 0]],
          highlightPoints: [
            { x: -2, y: 3, label: 'f(-2) = 3', color: '#ef4444' }
          ]
        },
        {
          type: 'line',
          label: 'g(x) Data',
          color: '#10b981',
          points: [[-2, 1], [-1, 2], [0, -1], [1, -2], [2, 3]],
          highlightPoints: [
            { x: 1, y: -2, label: 'g(1) = -2', color: '#10b981' }
          ]
        }
      ]
    }
  },
  {
    id: 'ch4-q18',
    number: 18,
    exerciseNumber: 1,
    exerciseTitle: 'Practice Exam - Part 1: Functions (Q1-Q30)',
    question: 'Function f is defined by f(x) = 5 / (x² - 9x + 18). For how many distinct values of x is function f undefined?',
    options: ['Zero', 'One', 'Two', 'Three'],
    correctIndex: 2,
    correctAnswerText: 'Two',
    explanation: `Step-by-Step Undefined Domain Check:
1. The rational function f(x) is undefined when its denominator equals zero:
   x² - 9x + 18 = 0
2. Factor the quadratic expression:
   (x - 3)(x - 6) = 0
3. Set each factor to zero:
   x = 3  and  x = 6.
4. There are exactly Two distinct values of x where f is undefined.`,
    diagram: {
      title: 'Denominator Parabola D(x) = x² - 9x + 18 with Zeros at x = 3, 6',
      xAxisLabel: 'x',
      yAxisLabel: 'D(x)',
      xRange: [1, 8],
      yRange: [-4, 10],
      xStep: 1,
      yStep: 2,
      curves: [
        {
          type: 'function',
          fnType: 'parabola',
          label: 'D(x) = x² - 9x + 18',
          color: '#3b82f6',
          points: [[2, 4], [3, 0], [4.5, -2.25], [6, 0], [7, 4]],
          highlightPoints: [
            { x: 3, y: 0, label: 'x = 3 (Asymptote)', color: '#ef4444' },
            { x: 6, y: 0, label: 'x = 6 (Asymptote)', color: '#ef4444' }
          ]
        }
      ]
    }
  },
  {
    id: 'ch4-q19',
    number: 19,
    exerciseNumber: 1,
    exerciseTitle: 'Practice Exam - Part 1: Functions (Q1-Q30)',
    question: 'If f(x) = x², for which of the following values of c is f(c) < c?',
    options: ['-1', '0', '1/2', '2'],
    correctIndex: 2,
    correctAnswerText: '1/2',
    explanation: `Step-by-Step Inequality Analysis:
1. Set up the inequality condition:
   f(c) < c  ==>  c² < c
2. Subtract c from both sides to find critical boundary points:
   c² - c < 0  ==>  c(c - 1) < 0
3. The roots are c = 0 and c = 1. Since the quadratic parabola y = c² - c opens upward, the expression is strictly negative on the interval:
   0 < c < 1
4. Test the given choices:
   • Choice A (c = -1): (-1)² = 1 < -1 (False)
   • Choice B (c = 0): (0)² = 0 < 0 (False)
   • Choice C (c = 1/2): (1/2)² = 1/4 < 1/2 (True!)
   • Choice D (c = 2): (2)² = 4 < 2 (False)
5. Therefore, c = 1/2 is the only correct answer.`,
    diagram: {
      title: 'Parabola y = x² vs Line y = x (f(x) < x for 0 < x < 1)',
      xAxisLabel: 'x',
      yAxisLabel: 'y',
      xRange: [-1.5, 2.5],
      yRange: [-0.5, 4.5],
      xStep: 0.5,
      yStep: 1,
      curves: [
        {
          type: 'function',
          fnType: 'parabola',
          label: 'y = x²',
          color: '#3b82f6',
          points: [[-1, 1], [-0.5, 0.25], [0, 0], [0.5, 0.25], [1, 1], [1.5, 2.25], [2, 4]],
          highlightPoints: [
            { x: 0.5, y: 0.25, label: '(1/2, 1/4)', color: '#ef4444' }
          ]
        },
        {
          type: 'line',
          label: 'y = x',
          color: '#10b981',
          points: [[-1, -1], [0, 0], [0.5, 0.5], [1, 1], [2, 2]],
          highlightPoints: [
            { x: 0.5, y: 0.5, label: '(1/2, 1/2)', color: '#10b981' }
          ]
        }
      ]
    }
  },
  {
    id: 'ch4-q20',
    number: 20,
    exerciseNumber: 1,
    exerciseTitle: 'Practice Exam - Part 1: Functions (Q1-Q30)',
    question: 'The table below gives several values of the function f.\nIf the function g is defined by g(x) = f(2x) - 1, what is the value of g(3)?',
    table: {
      title: 'Values of Function f',
      headers: ['x', 'f(x)'],
      rows: [
        ['2', '3'],
        ['4', '7'],
        ['6', '11'],
        ['8', '15']
      ]
    },
    options: ['5', '6', '10', '14'],
    correctIndex: 2,
    correctAnswerText: '10',
    explanation: `Step-by-Step Argument Transformation & Table Lookup:
1. Substitute x = 3 into the function definition g(x) = f(2x) - 1:
   g(3) = f(2(3)) - 1
   g(3) = f(6) - 1
2. Locate x = 6 in the given table:
   From the table row for x = 6, f(6) = 11.
3. Compute the final value of g(3):
   g(3) = 11 - 1 = 10.`,
    diagram: {
      title: 'Function Transformation g(3) = f(6) - 1 = 11 - 1 = 10',
      xAxisLabel: 'x',
      yAxisLabel: 'y',
      xRange: [0, 10],
      yRange: [0, 18],
      xStep: 2,
      yStep: 3,
      curves: [
        {
          type: 'line',
          label: 'f(x) Table Line',
          color: '#3b82f6',
          points: [[2, 3], [4, 7], [6, 11], [8, 15]],
          highlightPoints: [
            { x: 6, y: 11, label: 'f(6) = 11', color: '#10b981' }
          ]
        },
        {
          type: 'line',
          label: 'g(x) = f(2x) - 1',
          color: '#8b5cf6',
          points: [[1, 2], [2, 6], [3, 10], [4, 14]],
          highlightPoints: [
            { x: 3, y: 10, label: 'g(3) = 10', color: '#ef4444' }
          ]
        }
      ]
    }
  },
  {
    id: 'ch4-q21',
    number: 21,
    exerciseNumber: 1,
    exerciseTitle: 'Practice Exam - Part 1: Functions (Q1-Q30)',
    question: 'Functions f and g are defined by f(x) = 7x + 12 and g(x) = 3x - 4. For what value of x does f(x) = g(x)?',
    options: ['-4', '-2', '2', '4'],
    correctIndex: 0,
    correctAnswerText: '-4',
    explanation: `Step-by-Step Linear Equating:
1. Set the two functions equal:
   7x + 12 = 3x - 4
2. Subtract 3x from both sides:
   4x + 12 = -4
3. Subtract 12 from both sides:
   4x = -16
4. Divide by 4:
   x = -4.

Verification:
• f(-4) = 7(-4) + 12 = -28 + 12 = -16
• g(-4) = 3(-4) - 4 = -12 - 4 = -16.`,
    diagram: {
      title: 'Intersection of f(x) = 7x + 12 & g(x) = 3x - 4 at (-4, -16)',
      xAxisLabel: 'x',
      yAxisLabel: 'y',
      xRange: [-6, 2],
      yRange: [-22, 10],
      xStep: 1,
      yStep: 4,
      curves: [
        {
          type: 'line',
          label: 'f(x) = 7x + 12',
          color: '#3b82f6',
          points: [[-5, -23], [-4, -16], [-2, -2], [0, 12]]
        },
        {
          type: 'line',
          label: 'g(x) = 3x - 4',
          color: '#10b981',
          points: [[-6, -22], [-4, -16], [-2, -10], [0, -4]],
          highlightPoints: [
            { x: -4, y: -16, label: 'Intersect (-4, -16)', color: '#ef4444' }
          ]
        }
      ]
    }
  },
  {
    id: 'ch4-q22',
    number: 22,
    exerciseNumber: 1,
    exerciseTitle: 'Practice Exam - Part 1: Functions (Q1-Q30)',
    question: 'If f is a linear function such that f(2) ≤ f(3), f(4) ≥ f(5), and f(6) = 10, what is the value of f(8)?',
    options: ['-10', '0', '10', 'Cannot be determined'],
    correctIndex: 2,
    correctAnswerText: '10',
    explanation: `Step-by-Step Monotonicity & Linear Analysis:
1. Recall the definition of a linear function: f(x) = mx + b, where the slope m is constant everywhere.
2. Analyze the three possible cases for slope m:
   • Case 1: If m > 0 (strictly increasing), then f(4) < f(5), which contradicts f(4) ≥ f(5).
   • Case 2: If m < 0 (strictly decreasing), then f(2) > f(3), which contradicts f(2) ≤ f(3).
   • Case 3: If m = 0 (constant horizontal line), then f(x) = b for all real numbers x.
3. For both conditions f(2) ≤ f(3) and f(4) ≥ f(5) to hold simultaneously for a linear function, the slope MUST be 0.
4. Since f is a constant function and f(6) = 10:
   f(x) = 10 for all x
5. Therefore, f(8) = 10.`,
    diagram: {
      title: 'Constant Linear Function f(x) = 10 (Slope m = 0)',
      xAxisLabel: 'x',
      yAxisLabel: 'y',
      xRange: [0, 10],
      yRange: [0, 16],
      xStep: 1,
      yStep: 2,
      curves: [
        {
          type: 'line',
          label: 'f(x) = 10',
          color: '#3b82f6',
          points: [[0, 10], [2, 10], [3, 10], [4, 10], [5, 10], [6, 10], [8, 10], [10, 10]],
          highlightPoints: [
            { x: 2, y: 10, label: '(2, 10)', color: '#10b981' },
            { x: 3, y: 10, label: '(3, 10)', color: '#10b981' },
            { x: 4, y: 10, label: '(4, 10)', color: '#10b981' },
            { x: 5, y: 10, label: '(5, 10)', color: '#10b981' },
            { x: 6, y: 10, label: '(6, 10)', color: '#3b82f6' },
            { x: 8, y: 10, label: 'f(8) = 10', color: '#ef4444' }
          ]
        }
      ]
    }
  },
  {
    id: 'ch4-q23',
    number: 23,
    exerciseNumber: 1,
    exerciseTitle: 'Practice Exam - Part 1: Functions (Q1-Q30)',
    question: 'The graph of a linear function f in the xy-plane has a slope of -2 and passes through the point (1, 0). If function g is defined by g(x) = f(x) + 4, what is the x-intercept of the graph of g(x)?',
    options: ['1', '2', '3', '5'],
    correctIndex: 2,
    correctAnswerText: '3',
    explanation: `Step-by-Step Function Construction & Intercept Finding:
1. Find the equation of line f(x) using point-slope form with m = -2 and point (1, 0):
   f(x) - 0 = -2(x - 1)
   f(x) = -2x + 2
2. Formulate g(x) by applying the vertical shift of +4:
   g(x) = f(x) + 4
   g(x) = (-2x + 2) + 4 = -2x + 6
3. To find the x-intercept of g(x), set g(x) = 0:
   -2x + 6 = 0
   2x = 6
   x = 3
4. Therefore, the x-intercept of the graph of g(x) is (3, 0), so x = 3.`,
    diagram: {
      title: 'Original f(x) = -2x + 2 and Shifted g(x) = -2x + 6 (x-int at x = 3)',
      xAxisLabel: 'x',
      yAxisLabel: 'y',
      xRange: [-1, 6],
      yRange: [-4, 10],
      xStep: 1,
      yStep: 2,
      curves: [
        {
          type: 'line',
          label: 'f(x) = -2x + 2',
          color: '#3b82f6',
          points: [[0, 2], [1, 0], [2, -2], [3, -4]],
          highlightPoints: [
            { x: 1, y: 0, label: 'f(x) x-int (1, 0)', color: '#10b981' }
          ]
        },
        {
          type: 'line',
          label: 'g(x) = f(x) + 4 = -2x + 6',
          color: '#8b5cf6',
          points: [[0, 6], [1, 4], [2, 2], [3, 0], [4, -2]],
          highlightPoints: [
            { x: 3, y: 0, label: 'g(x) x-int (3, 0)', color: '#ef4444' },
            { x: 0, y: 6, label: 'y-int (0, 6)', color: '#8b5cf6' }
          ]
        }
      ]
    }
  },
  {
    id: 'ch4-q24',
    number: 24,
    exerciseNumber: 1,
    exerciseTitle: 'Practice Exam - Part 1: Functions (Q1-Q30)',
    question: 'A business models monthly profit P(x), in dollars, from manufacturing x widgets using P(x) = R(x) - C(x), where revenue R(x) = 120x and cost C(x) = 40x + 15000. How many widgets must be manufactured and sold monthly to achieve a profit of $25,000?',
    options: ['200', '300', '500', '600'],
    correctIndex: 2,
    correctAnswerText: '500',
    explanation: `Step-by-Step Profit Model:
1. Construct profit function P(x) = R(x) - C(x):
   P(x) = 120x - (40x + 15000) = 80x - 15000
2. Set profit equal to $25,000:
   80x - 15000 = 25000
3. Add 15,000 to both sides:
   80x = 40000
4. Divide by 80:
   x = 40000 / 80 = 500 widgets.`,
    diagram: {
      title: 'Profit Function P(x) = 80x - 15000 Reaching $25,000 at x = 500',
      xAxisLabel: 'Widgets (x)',
      yAxisLabel: 'Profit ($)',
      xRange: [0, 700],
      yRange: [-20000, 35000],
      xStep: 100,
      yStep: 10000,
      curves: [
        {
          type: 'line',
          label: 'P(x) = 80x - 15000',
          color: '#3b82f6',
          points: [[0, -15000], [187.5, 0], [300, 9000], [500, 25000], [600, 33000]],
          highlightPoints: [
            { x: 500, y: 25000, label: '(500, $25,000)', color: '#ef4444' },
            { x: 187.5, y: 0, label: 'Break-even (188, 0)', color: '#10b981' }
          ]
        },
        {
          type: 'line',
          style: 'dashed',
          label: 'Target Profit $25,000',
          color: '#10b981',
          points: [[0, 25000], [700, 25000]]
        }
      ]
    }
  },
  {
    id: 'ch4-q25',
    number: 25,
    exerciseNumber: 1,
    exerciseTitle: 'Practice Exam - Part 1: Functions (Q1-Q30)',
    question: 'Function f is defined by f(x) = 2(x + 3)² - 8. What is the sum of the x-coordinates of the x-intercepts of y = f(x)?',
    options: ['-6', '-3', '0', '6'],
    correctIndex: 0,
    correctAnswerText: '-6',
    explanation: `Step-by-Step Parabola Root Sum:
Method 1: Find individual roots
1. Set f(x) = 0:
   2(x + 3)² - 8 = 0  ==>  2(x + 3)² = 8  ==>  (x + 3)² = 4
2. Take square roots:
   x + 3 = ±2  ==>  x = -3 ± 2
   x₁ = -1,  x₂ = -5
3. Sum of roots:
   -1 + (-5) = -6.

Method 2: Vertex Symmetry Shortcut
For any parabola with vertex axis x = h, the sum of two roots is always 2h. Here h = -3, so sum = 2(-3) = -6.`,
    diagram: {
      title: 'Parabola f(x) = 2(x + 3)² - 8 with Roots at x = -5, -1',
      xAxisLabel: 'x',
      yAxisLabel: 'y',
      xRange: [-7, 1],
      yRange: [-10, 10],
      xStep: 1,
      yStep: 2,
      curves: [
        {
          type: 'function',
          fnType: 'parabola',
          label: 'f(x) = 2(x + 3)² - 8',
          color: '#3b82f6',
          points: [[-6, 10], [-5, 0], [-4, -6], [-3, -8], [-2, -6], [-1, 0], [0, 10]],
          highlightPoints: [
            { x: -5, y: 0, label: 'Root (-5, 0)', color: '#10b981' },
            { x: -1, y: 0, label: 'Root (-1, 0)', color: '#10b981' },
            { x: -3, y: -8, label: 'Vertex (-3, -8)', color: '#ef4444' }
          ]
        }
      ]
    }
  },
  {
    id: 'ch4-q26',
    number: 26,
    exerciseNumber: 1,
    exerciseTitle: 'Practice Exam - Part 1: Functions (Q1-Q30)',
    question: 'A function f satisfies f(x + 3) = 2f(x) - 1 for all real numbers x. If f(1) = 5, what is the value of f(7)?',
    options: ['9', '15', '17', '25'],
    correctIndex: 2,
    correctAnswerText: '17',
    explanation: `Step-by-Step Recursive Function Evaluation:
1. Identify the recurrence relation and step size:
   f(x + 3) = 2f(x) - 1
   The input advances in increments of +3.
2. Step 1: Compute f(4) by choosing x = 1:
   f(1 + 3) = 2f(1) - 1
   f(4) = 2(5) - 1 = 10 - 1 = 9
3. Step 2: Compute f(7) by choosing x = 4:
   f(4 + 3) = 2f(4) - 1
   f(7) = 2(9) - 1 = 18 - 1 = 17.

Distractor Explanations:
• Choice A (9) is incorrect: This is f(4), the result of stopping after a single step.
• Choice B (15) is incorrect: Assumes simple linear addition of 5 at each step (5, 10, 15).
• Choice C (17) is CORRECT: Applying the relation twice yields f(4) = 9 and f(7) = 17.
• Choice D (25) is incorrect: Squaring f(1) = 5² = 25 or arithmetic mistake in compounding.`,
    diagram: {
      title: 'Recursive Step Progression: (1, 5) ➔ (4, 9) ➔ (7, 17)',
      xAxisLabel: 'x',
      yAxisLabel: 'f(x)',
      xRange: [0, 9],
      yRange: [0, 22],
      xStep: 1,
      yStep: 4,
      curves: [
        {
          type: 'line',
          label: 'f(x) values',
          color: '#3b82f6',
          points: [[1, 5], [4, 9], [7, 17]],
          highlightPoints: [
            { x: 1, y: 5, label: 'f(1) = 5 (Base)', color: '#64748b' },
            { x: 4, y: 9, label: 'f(4) = 9 (Step 1)', color: '#10b981' },
            { x: 7, y: 17, label: 'f(7) = 17 (Target)', color: '#ef4444' }
          ]
        },
        {
          type: 'line',
          style: 'dashed',
          label: 'Progression Path',
          color: '#f59e0b',
          points: [[1, 5], [4, 5], [4, 9], [7, 9], [7, 17]]
        }
      ]
    }
  },
  {
    id: 'ch4-q27',
    number: 27,
    exerciseNumber: 1,
    exerciseTitle: 'Practice Exam - Part 1: Functions (Q1-Q30)',
    question: 'Linear function g is defined by g(x) = ax + b. If g(2) = 11 and g(5) = 20, what is the value of a + b?',
    options: ["3","5","8","12"],
    correctIndex: 2,
    correctAnswerText: "8",
    explanation: `Step-by-Step Linear Reconstruction:
1. Find the slope a:
   a = (g(5) - g(2)) / (5 - 2) = (20 - 11) / 3 = 9 / 3 = 3
2. Find intercept b using g(2) = 11:
   3(2) + b = 11  ==>  6 + b = 11  ==>  b = 5
3. Calculate a + b:
   a + b = 3 + 5 = 8.`,
    diagram: {
      title: 'Line g(x) = 3x + 5 with Points (2, 11) & (5, 20)',
      xAxisLabel: 'x',
      yAxisLabel: 'y',
      xRange: [0, 7],
      yRange: [0, 24],
      xStep: 1,
      yStep: 4,
      curves: [
        {
          type: 'line',
          label: 'g(x) = 3x + 5',
          color: '#3b82f6',
          points: [[0, 5], [2, 11], [5, 20]],
          highlightPoints: [
            { x: 0, y: 5, label: 'b = 5', color: '#64748b' },
            { x: 2, y: 11, label: '(2, 11)', color: '#10b981' },
            { x: 5, y: 20, label: '(5, 20)', color: '#ef4444' }
          ]
        }
      ]
    }
  },
  {
    id: 'ch4-q28',
    number: 28,
    exerciseNumber: 1,
    exerciseTitle: 'Practice Exam - Part 1: Functions (Q1-Q30)',
    question: 'Function f is defined by f(x) = √(x - 3) + 5. Which of the following describes all possible real values of x for which f(x) is a real number?',
    options: ['x >= -3', 'x >= 3', 'x >= 5', 'All real numbers'],
    correctIndex: 1,
    correctAnswerText: 'x >= 3',
    explanation: `Step-by-Step Radical Domain Rule:
1. For a square root function √(g(x)) to produce a real number, the radicand (expression inside the radical) must be non-negative:
   g(x) >= 0
2. Here, x - 3 >= 0
3. Add 3 to both sides:
   x >= 3.`,
    diagram: {
      title: 'Domain of Radical Curve f(x) = √(x - 3) + 5 (Starting at x = 3)',
      xAxisLabel: 'x',
      yAxisLabel: 'y',
      xRange: [0, 10],
      yRange: [0, 10],
      xStep: 1,
      yStep: 2,
      curves: [
        {
          type: 'function',
          label: 'f(x) = √(x - 3) + 5',
          color: '#3b82f6',
          points: [[3, 5], [4, 6], [7, 7], [12, 8]],
          highlightPoints: [
            { x: 3, y: 5, label: 'Endpoint (3, 5)', color: '#ef4444' }
          ]
        }
      ]
    }
  },
  {
    id: 'ch4-q29',
    number: 29,
    exerciseNumber: 1,
    exerciseTitle: 'Practice Exam - Part 1: Functions (Q1-Q30)',
    question: 'Function f is defined by f(x) = x³ - 4x. How many distinct real zeros does f have?',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    correctAnswerText: 'Three',
    explanation: `Step-by-Step Factorization for Real Zeros:
1. Set f(x) = 0:
   x³ - 4x = 0
2. Factor out the greatest common factor x:
   x(x² - 4) = 0
3. Factor the difference of squares:
   x(x - 2)(x + 2) = 0
4. Set each factor to 0:
   x = 0,  x = 2,  x = -2.
5. Function f has exactly Three distinct real zeros.`,
    diagram: {
      title: 'Cubic Curve f(x) = x³ - 4x with 3 Zeros at x = -2, 0, 2',
      xAxisLabel: 'x',
      yAxisLabel: 'y',
      xRange: [-4, 4],
      yRange: [-6, 6],
      xStep: 1,
      yStep: 2,
      curves: [
        {
          type: 'function',
          fnType: 'cubic',
          label: 'f(x) = x³ - 4x',
          color: '#3b82f6',
          points: [[-3, -15], [-2, 0], [-1, 3], [0, 0], [1, -3], [2, 0], [3, 15]],
          highlightPoints: [
            { x: -2, y: 0, label: 'Zero (-2, 0)', color: '#ef4444' },
            { x: 0, y: 0, label: 'Zero (0, 0)', color: '#ef4444' },
            { x: 2, y: 0, label: 'Zero (2, 0)', color: '#ef4444' }
          ]
        }
      ]
    }
  },
  {
    id: 'ch4-q30',
    number: 30,
    exerciseNumber: 1,
    exerciseTitle: 'Practice Exam - Part 1: Functions (Q1-Q30)',
    question: 'Functions f and g are defined by f(x) = x - 5 and g(x) = 2x + 8. Function h is defined by h(x) = f(x) · g(x). What is the y-coordinate of the y-intercept of y = h(x)?',
    options: ['-40', '-10', '0', '40'],
    correctIndex: 0,
    correctAnswerText: '-40',
    explanation: `Step-by-Step y-Intercept Evaluation:
1. The y-intercept of any function y = h(x) occurs at x = 0.
2. Evaluate h(0) = f(0) · g(0):
   • f(0) = 0 - 5 = -5
   • g(0) = 2(0) + 8 = 8
3. Multiply the outputs:
   h(0) = (-5) · (8) = -40.
4. The y-coordinate is -40 (point (0, -40)).`,
    diagram: {
      title: 'Product Parabola h(x) = (x - 5)(2x + 8) & y-intercept (0, -40)',
      xAxisLabel: 'x',
      yAxisLabel: 'y',
      xRange: [-6, 7],
      yRange: [-50, 20],
      xStep: 2,
      yStep: 10,
      curves: [
        {
          type: 'function',
          fnType: 'parabola',
          label: 'h(x) = 2x² - 2x - 40',
          color: '#3b82f6',
          points: [[-4, 0], [-2, -28], [0, -40], [0.5, -40.5], [2, -36], [5, 0]],
          highlightPoints: [
            { x: 0, y: -40, label: 'y-int (0, -40)', color: '#ef4444' },
            { x: -4, y: 0, label: '(-4, 0)', color: '#10b981' },
            { x: 5, y: 0, label: '(5, 0)', color: '#10b981' }
          ]
        }
      ]
    }
  }
];
