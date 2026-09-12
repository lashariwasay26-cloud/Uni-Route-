import { MathExerciseQuestion } from './satMathConcepts';

export const CHAPTER_4_TRANSFORMATION_QUESTIONS: MathExerciseQuestion[] = [
  {
    id: 'ch4-trans-q1',
    number: 1,
    exerciseNumber: 3,
    exerciseTitle: 'Practice Exam - Part 3: Function Transformations (Q1-Q15)',
    question: 'The graph of y = f(x) is shifted 5 units to the right and 3 units down. Which equation represents the resulting graph g(x)?',
    options: [
      'g(x) = f(x - 5) - 3',
      'g(x) = f(x + 5) - 3',
      'g(x) = f(x - 3) - 5',
      'g(x) = f(x + 3) + 5'
    ],
    correctIndex: 0,
    correctAnswerText: 'g(x) = f(x - 5) - 3',
    explanation: `Step-by-Step Transformation Analysis:
1. Horizontal Shift: Shifting a graph to the right by h units replaces the variable x with (x - h). Here, h = 5, giving f(x - 5).
2. Vertical Shift: Shifting a graph down by k units subtracts k from the entire function output. Here, k = 3, giving - 3.
3. Combining both transformations produces:
   g(x) = f(x - 5) - 3.`,
    distractorExplanations: {
      1: 'Incorrect. f(x + 5) represents a shift LEFT by 5 units, not right.',
      2: 'Incorrect. Swaps the horizontal shift (5) and vertical shift (3).',
      3: 'Incorrect. Represents a shift left by 3 and up by 5.'
    },
    diagram: {
      title: 'Graph of f(x) and Transformed g(x)',
      xAxisLabel: 'x',
      yAxisLabel: 'y',
      xRange: [-4, 10],
      yRange: [-6, 6],
      xStep: 2,
      yStep: 2,
      curves: [
        {
          type: 'function',
          fnType: 'parabola',
          label: 'f(x) = x²',
          color: '#94a3b8',
          points: [[-2, 4], [-1, 1], [0, 0], [1, 1], [2, 4]],
          highlightPoints: [
            { x: 0, y: 0, label: 'Vertex of f', color: '#64748b' }
          ]
        },
        {
          type: 'function',
          fnType: 'parabola',
          label: 'g(x)',
          color: '#3b82f6',
          points: [[3, 1], [4, -2], [5, -3], [6, -2], [7, 1]],
          highlightPoints: [
            { x: 5, y: -3, label: 'Vertex of g', color: '#ef4444' }
          ]
        }
      ]
    }
  },
  {
    id: 'ch4-trans-q2',
    number: 2,
    exerciseNumber: 3,
    exerciseTitle: 'Practice Exam - Part 3: Function Transformations (Q1-Q15)',
    question: 'The parent function f(x) = x² is transformed to form g(x) = -(x - 2)² + 6. What is the vertex of g(x)?',
    options: [
      '(-2, 6)',
      '(2, -6)',
      '(2, 6)',
      '(-2, -6)'
    ],
    correctIndex: 2,
    correctAnswerText: '(2, 6)',
    explanation: `Step-by-Step Vertex Identification:
1. Vertex form of a quadratic is y = a(x - h)² + k, where (h, k) is the vertex.
2. For g(x) = -(x - 2)² + 6:
   • a = -1 (reflected across x-axis, opens downward)
   • h = 2 (shifted right 2 units)
   • k = 6 (shifted up 6 units)
3. Therefore, the vertex is (h, k) = (2, 6).`,
    distractorExplanations: {
      0: 'Incorrect. Forgot that (x - 2) shifts right to x = +2, not left to -2.',
      1: 'Incorrect. The vertical shift is +6, not -6.',
      3: 'Incorrect. Incorrect signs for both horizontal and vertical shifts.'
    },
    diagram: {
      title: 'Graph of g(x) = -(x - 2)² + 6',
      xAxisLabel: 'x',
      yAxisLabel: 'y',
      xRange: [-2, 6],
      yRange: [-4, 8],
      xStep: 1,
      yStep: 2,
      curves: [
        {
          type: 'function',
          fnType: 'parabola',
          label: 'g(x) = -(x - 2)² + 6',
          color: '#3b82f6',
          points: [[0, 2], [1, 5], [2, 6], [3, 5], [4, 2]],
          highlightPoints: [
            { x: 2, y: 6, label: 'Vertex', color: '#ef4444' }
          ]
        },
        {
          type: 'line',
          style: 'dashed',
          label: 'Axis x = 2',
          color: '#94a3b8',
          points: [[2, -4], [2, 8]]
        }
      ]
    }
  },
  {
    id: 'ch4-trans-q3',
    number: 3,
    exerciseNumber: 3,
    exerciseTitle: 'Practice Exam - Part 3: Function Transformations (Q1-Q15)',
    question: 'Function g(x) is defined as g(x) = -f(x) - 4. How is the graph of g(x) obtained from f(x)?',
    options: [
      'Reflect across y-axis, shift down 4 units',
      'Reflect across x-axis, shift down 4 units',
      'Reflect across x-axis, shift up 4 units',
      'Reflect across y-axis, shift up 4 units'
    ],
    correctIndex: 1,
    correctAnswerText: 'Reflect across x-axis, shift down 4 units',
    explanation: `Step-by-Step Operation Breakdown:
1. Outside Negative Sign: -f(x) multiplies all y-coordinates by -1, which reflects the graph across the horizontal x-axis.
2. Outside Subtraction: - 4 subtracts 4 from all y-coordinates, shifting the graph down by 4 units.
3. Hence, the graph is reflected across the x-axis and shifted down 4 units.`,
    distractorExplanations: {
      0: 'Incorrect. Reflection across the y-axis requires f(-x), inside the argument.',
      2: 'Incorrect. -4 causes a downward shift, not an upward shift.',
      3: 'Incorrect. Involves y-axis reflection and upward shift.'
    },
    diagram: {
      title: 'Graph of f(x) and g(x)',
      xAxisLabel: 'x',
      yAxisLabel: 'y',
      xRange: [-4, 4],
      yRange: [-10, 6],
      xStep: 1,
      yStep: 2,
      curves: [
        {
          type: 'function',
          fnType: 'parabola',
          label: 'f(x) = x²',
          color: '#94a3b8',
          points: [[-2, 4], [0, 0], [2, 4]]
        },
        {
          type: 'function',
          fnType: 'parabola',
          label: 'g(x) = -x² - 4',
          color: '#3b82f6',
          points: [[-2, -8], [0, -4], [2, -8]],
          highlightPoints: [
            { x: 0, y: -4, label: 'Vertex of g', color: '#ef4444' }
          ]
        }
      ]
    }
  },
  {
    id: 'ch4-trans-q4',
    number: 4,
    exerciseNumber: 3,
    exerciseTitle: 'Practice Exam - Part 3: Function Transformations (Q1-Q15)',
    question: 'Select points for f(x) are given: f(1) = 8, f(2) = 3, f(3) = -1, f(4) = -5. If g(x) = f(x + 2) + 1, what is the value of g(1)?',
    options: [
      '4',
      '0',
      '-4',
      '9'
    ],
    correctIndex: 1,
    correctAnswerText: '0',
    explanation: `Step-by-Step Function Evaluation:
1. Substitute x = 1 into the definition of g(x):
   g(1) = f(1 + 2) + 1 = f(3) + 1
2. Look up f(3) from the given values:
   f(3) = -1
3. Complete the arithmetic:
   g(1) = -1 + 1 = 0.`,
    distractorExplanations: {
      0: 'Incorrect. Calculation error or evaluating wrong table index.',
      2: 'Incorrect. Evaluated f(4) + 1 = -5 + 1 = -4.',
      3: 'Incorrect. Evaluated f(1) + 1 = 8 + 1 = 9 instead of f(1 + 2) + 1.'
    },
    diagram: {
      title: 'Graphs of f(x) and g(x)',
      xAxisLabel: 'x',
      yAxisLabel: 'y',
      xRange: [0, 5],
      yRange: [-6, 10],
      xStep: 1,
      yStep: 2,
      curves: [
        {
          type: 'line',
          label: 'f(x) discrete values',
          color: '#94a3b8',
          points: [[1, 8], [2, 3], [3, -1], [4, -5]],
          highlightPoints: [
            { x: 3, y: -1, label: 'f(3)', color: '#10b981' }
          ]
        },
        {
          type: 'line',
          label: 'g(x) point',
          color: '#3b82f6',
          points: [[1, 0]],
          highlightPoints: [
            { x: 1, y: 0, label: 'g(1)', color: '#ef4444' }
          ]
        }
      ]
    }
  },
  {
    id: 'ch4-trans-q5',
    number: 5,
    exerciseNumber: 3,
    exerciseTitle: 'Practice Exam - Part 3: Function Transformations (Q1-Q15)',
    question: 'The graph of f(x) contains the point (-4, 12). If g(x) = (1/3)f(x), which point MUST lie on g(x)?',
    options: [
      '(-4, 4)',
      '(-12, 12)',
      '(-4, 36)',
      '(-1, 4)'
    ],
    correctIndex: 0,
    correctAnswerText: '(-4, 4)',
    explanation: `Step-by-Step Coordinate Scaling:
1. The transformation g(x) = (1/3)f(x) is a vertical compression by a factor of 1/3.
2. Coordinate rule: (x, y) -> (x, (1/3)y).
3. The x-coordinate remains unchanged: x = -4.
4. The y-coordinate is scaled by 1/3: y = 12 * (1/3) = 4.
5. Therefore, the point (-4, 4) must lie on the graph of g(x).`,
    distractorExplanations: {
      1: 'Incorrect. Multiplied the x-coordinate instead of scaling the y-coordinate.',
      2: 'Incorrect. Multiplied y by 3 instead of dividing by 3.',
      3: 'Incorrect. Scaled both coordinates.'
    },
    diagram: {
      title: 'Vertical Scaling Comparison',
      xAxisLabel: 'x',
      yAxisLabel: 'y',
      xRange: [-6, 1],
      yRange: [0, 14],
      xStep: 1,
      yStep: 2,
      curves: [
        {
          type: 'line',
          label: 'Original Point on f(x)',
          color: '#94a3b8',
          points: [[-4, 12]],
          highlightPoints: [
            { x: -4, y: 12, label: 'Point on f', color: '#64748b' }
          ]
        },
        {
          type: 'line',
          label: 'Transformed Point on g(x)',
          color: '#3b82f6',
          points: [[-4, 4]],
          highlightPoints: [
            { x: -4, y: 4, label: 'Point on g', color: '#ef4444' }
          ]
        }
      ]
    }
  },
  {
    id: 'ch4-trans-q6',
    number: 6,
    exerciseNumber: 3,
    exerciseTitle: 'Practice Exam - Part 3: Function Transformations (Q1-Q15)',
    question: 'The minimum value of f(x) is -8, occurring at x = 3. If g(x) = 2f(x) + 5, what is the minimum value of g(x)?',
    options: [
      '-11',
      '-16',
      '-3',
      '1'
    ],
    correctIndex: 0,
    correctAnswerText: '-11',
    explanation: `Step-by-Step Minimum Calculation:
1. The minimum output value of f(x) is y_min = -8.
2. The transformation g(x) = 2f(x) + 5 operates vertically on the output values:
   g_min = 2 * (y_min) + 5
3. Substitute y_min = -8:
   g_min = 2(-8) + 5 = -16 + 5 = -11.
4. The minimum value of g(x) is -11 (occurring at the same x = 3).`,
    distractorExplanations: {
      1: 'Incorrect. Multiplied by 2 to get -16, but forgot to add 5.',
      2: 'Incorrect. Computed 2(-8 + 5) = 2(-3) = -6 or arithmetic error.',
      3: 'Incorrect. Computed -8 + 2(5) = 2 or similar sign mistake.'
    },
    diagram: {
      title: 'Graphs of f(x) and g(x)',
      xAxisLabel: 'x',
      yAxisLabel: 'y',
      xRange: [0, 6],
      yRange: [-18, 4],
      xStep: 1,
      yStep: 4,
      curves: [
        {
          type: 'function',
          fnType: 'parabola',
          label: 'f(x) = (x - 3)² - 8',
          color: '#94a3b8',
          points: [[1, -4], [2, -7], [3, -8], [4, -7], [5, -4]],
          highlightPoints: [
            { x: 3, y: -8, label: 'f Minimum', color: '#64748b' }
          ]
        },
        {
          type: 'function',
          fnType: 'parabola',
          label: 'g(x) = 2f(x) + 5',
          color: '#3b82f6',
          points: [[1, -3], [2, -9], [3, -11], [4, -9], [5, -3]],
          highlightPoints: [
            { x: 3, y: -11, label: 'g Minimum', color: '#ef4444' }
          ]
        }
      ]
    }
  },
  {
    id: 'ch4-trans-q7',
    number: 7,
    exerciseNumber: 3,
    exerciseTitle: 'Practice Exam - Part 3: Function Transformations (Q1-Q15)',
    question: 'The graph of y = f(x) has an x-intercept at (6, 0). If g(x) = f(x - 4), what is an x-intercept of g(x)?',
    options: [
      '(2, 0)',
      '(10, 0)',
      '(6, -4)',
      '(6, 4)'
    ],
    correctIndex: 1,
    correctAnswerText: '(10, 0)',
    explanation: `Step-by-Step Horizontal Shift of Intercepts:
1. The transformation g(x) = f(x - 4) shifts every point on the graph to the right by 4 units.
2. Coordinate rule: (x, y) -> (x + 4, y).
3. Applying this to the original x-intercept (6, 0):
   (6 + 4, 0) = (10, 0).
4. Verification: g(10) = f(10 - 4) = f(6) = 0.`,
    distractorExplanations: {
      0: 'Incorrect. Shifted left by subtracting 4 to get (2, 0). (x - 4) shifts RIGHT.',
      2: 'Incorrect. Shifted vertically instead of horizontally.',
      3: 'Incorrect. Shifted vertically upward.'
    },
    diagram: {
      title: 'Horizontal Shift of Intercept',
      xAxisLabel: 'x',
      yAxisLabel: 'y',
      xRange: [0, 14],
      yRange: [-4, 6],
      xStep: 2,
      yStep: 2,
      curves: [
        {
          type: 'line',
          label: 'f(x) intercept',
          color: '#94a3b8',
          points: [[4, -2], [6, 0], [8, 2]],
          highlightPoints: [
            { x: 6, y: 0, label: 'f Intercept', color: '#64748b' }
          ]
        },
        {
          type: 'line',
          label: 'g(x) intercept',
          color: '#3b82f6',
          points: [[8, -2], [10, 0], [12, 2]],
          highlightPoints: [
            { x: 10, y: 0, label: 'g Intercept', color: '#ef4444' }
          ]
        }
      ]
    }
  },
  {
    id: 'ch4-trans-q8',
    number: 8,
    exerciseNumber: 3,
    exerciseTitle: 'Practice Exam - Part 3: Function Transformations (Q1-Q15)',
    question: 'Which equation represents f(x) = √(x) horizontally stretched by a factor of 3 and shifted left 2 units?',
    options: [
      'g(x) = √(3x + 2)',
      'g(x) = √((1/3)(x + 2))',
      'g(x) = 3√(x + 2)',
      'g(x) = √((1/3)x + 2)'
    ],
    correctIndex: 1,
    correctAnswerText: 'g(x) = √((1/3)(x + 2))',
    explanation: `Step-by-Step Horizontal Transformation Rules:
1. Horizontal Stretch: A horizontal stretch by a factor of 3 replaces x with (1/3)x inside the function argument.
2. Shift Left: A shift left by 2 units replaces x with (x + 2).
3. Factored Order Rule: When combining horizontal stretch and shift, factor the b coefficient:
   g(x) = f( (1/3)(x + 2) ) = √((1/3)(x + 2)).`,
    distractorExplanations: {
      0: 'Incorrect. 3x is a horizontal compression by 1/3, not a stretch by 3.',
      2: 'Incorrect. 3√(x + 2) is a vertical stretch, not horizontal.',
      3: 'Incorrect. Missed factoring the parenthesis: (1/3)x + 2 shifts left by 2 / (1/3) = 6 units, not 2.'
    },
    diagram: {
      title: 'Square Root Function Transformations',
      xAxisLabel: 'x',
      yAxisLabel: 'y',
      xRange: [-4, 12],
      yRange: [0, 4],
      xStep: 2,
      yStep: 1,
      curves: [
        {
          type: 'function',
          fnType: 'custom',
          label: 'f(x) = √x',
          color: '#94a3b8',
          points: [[0, 0], [1, 1], [4, 2], [9, 3]]
        },
        {
          type: 'function',
          fnType: 'custom',
          label: 'g(x)',
          color: '#3b82f6',
          points: [[-2, 0], [1, 1], [10, 2]],
          highlightPoints: [
            { x: -2, y: 0, label: 'Endpoint', color: '#ef4444' }
          ]
        }
      ]
    }
  },
  {
    id: 'ch4-trans-q9',
    number: 9,
    exerciseNumber: 3,
    exerciseTitle: 'Practice Exam - Part 3: Function Transformations (Q1-Q15)',
    question: 'Point (3, -5) lies on y = f(x). If g(x) = f(-x) + 2, what are the coordinates of the corresponding point on g(x)?',
    options: [
      '(-3, -3)',
      '(-3, -7)',
      '(3, -3)',
      '(-3, 3)'
    ],
    correctIndex: 0,
    correctAnswerText: '(-3, -3)',
    explanation: `Step-by-Step Mapping:
1. Horizontal reflection f(-x) maps x -> -x.
   x-coordinate: 3 -> -3.
2. Vertical shift + 2 maps y -> y + 2.
   y-coordinate: -5 + 2 = -3.
3. Combining both changes: (3, -5) -> (-3, -3).
4. Verification: g(-3) = f(-(-3)) + 2 = f(3) + 2 = -5 + 2 = -3.`,
    distractorExplanations: {
      1: 'Incorrect. Subtracted 2 instead of adding 2 to y.',
      2: 'Incorrect. Did not negate the x-coordinate.',
      3: 'Incorrect. Multiplied y by -1 instead of adding 2.'
    },
    diagram: {
      title: 'Coordinate Point Transformation',
      xAxisLabel: 'x',
      yAxisLabel: 'y',
      xRange: [-5, 5],
      yRange: [-8, 2],
      xStep: 2,
      yStep: 2,
      curves: [
        {
          type: 'line',
          label: 'Original Point',
          color: '#94a3b8',
          points: [[3, -5]],
          highlightPoints: [
            { x: 3, y: -5, label: 'Point on f', color: '#64748b' }
          ]
        },
        {
          type: 'line',
          label: 'Transformed Point',
          color: '#3b82f6',
          points: [[-3, -3]],
          highlightPoints: [
            { x: -3, y: -3, label: 'Point on g', color: '#ef4444' }
          ]
        }
      ]
    }
  },
  {
    id: 'ch4-trans-q10',
    number: 10,
    exerciseNumber: 3,
    exerciseTitle: 'Practice Exam - Part 3: Function Transformations (Q1-Q15)',
    question: 'Linear function f(x) = 4x - 1 is transformed into g(x) = f(x - 2) + 3. What is the y-intercept of g(x)?',
    options: [
      '(0, -6)',
      '(0, -1)',
      '(0, -4)',
      '(0, 2)'
    ],
    correctIndex: 0,
    correctAnswerText: '(0, -6)',
    explanation: `Step-by-Step Algebraic Expansion:
1. Substitute (x - 2) into f(x):
   f(x - 2) = 4(x - 2) - 1 = 4x - 8 - 1 = 4x - 9
2. Add 3 to form g(x):
   g(x) = (4x - 9) + 3 = 4x - 6
3. Find the y-intercept by evaluating at x = 0:
   g(0) = 4(0) - 6 = -6.
4. The y-intercept is (0, -6).`,
    distractorExplanations: {
      1: 'Incorrect. Left the constant unchanged from f(x).',
      2: 'Incorrect. Computed 4(0 - 2) + 3 - 1 with an arithmetic error.',
      3: 'Incorrect. Added 3 to -1 without distributing the 4 across (x - 2).'
    },
    diagram: {
      title: 'Linear Function Transformations',
      xAxisLabel: 'x',
      yAxisLabel: 'y',
      xRange: [-2, 4],
      yRange: [-10, 8],
      xStep: 1,
      yStep: 2,
      curves: [
        {
          type: 'line',
          label: 'f(x) = 4x - 1',
          color: '#94a3b8',
          points: [[0, -1], [1, 3], [2, 7]],
          highlightPoints: [
            { x: 0, y: -1, label: 'f y-int', color: '#64748b' }
          ]
        },
        {
          type: 'line',
          label: 'g(x)',
          color: '#3b82f6',
          points: [[0, -6], [1, -2], [2, 2], [3, 6]],
          highlightPoints: [
            { x: 0, y: -6, label: 'g y-int', color: '#ef4444' }
          ]
        }
      ]
    }
  },
  {
    id: 'ch4-trans-q11',
    number: 11,
    exerciseNumber: 3,
    exerciseTitle: 'Practice Exam - Part 3: Function Transformations (Q1-Q15)',
    question: 'Function f is defined by f(x) = |x|. If g(x) = -|x + 3| - 2, in which quadrant(s) does the graph of g(x) lie?',
    options: [
      'Quadrants I and II',
      'Quadrants III and IV',
      'Quadrant III only',
      'Quadrant IV only'
    ],
    correctIndex: 1,
    correctAnswerText: 'Quadrants III and IV',
    explanation: `Step-by-Step Quadrant Analysis:
1. The base absolute value function f(x) = |x| has vertex at (0, 0) and opens upward (y >= 0).
2. The transformation g(x) = -|x + 3| - 2:
   • Shifts the vertex to (h, k) = (-3, -2).
   • The negative sign reflects the graph downward, so y <= -2 for ALL real x.
3. Since y is strictly negative for all points:
   • Points with x < 0 (left of y-axis) lie in Quadrant III.
   • Points with x > 0 (right of y-axis, e.g. at x = 1, y = -6) lie in Quadrant IV.
4. Hence, the graph exists in Quadrants III and IV.`,
    distractorExplanations: {
      0: 'Incorrect. Graph is reflected downward, so it cannot enter Quadrants I or II.',
      2: 'Incorrect. The graph extends infinitely to the right as x increases, entering Quadrant IV.',
      3: 'Incorrect. The vertex (-3, -2) and left arm lie in Quadrant III.'
    },
    diagram: {
      title: 'Graph of g(x) = -|x + 3| - 2',
      xAxisLabel: 'x',
      yAxisLabel: 'y',
      xRange: [-8, 4],
      yRange: [-10, 2],
      xStep: 2,
      yStep: 2,
      curves: [
        {
          type: 'line',
          label: 'g(x) Left Arm',
          color: '#3b82f6',
          points: [[-7, -6], [-5, -4], [-3, -2]],
          highlightPoints: [
            { x: -3, y: -2, label: 'Vertex', color: '#ef4444' }
          ]
        },
        {
          type: 'line',
          label: 'g(x) Right Arm',
          color: '#3b82f6',
          points: [[-3, -2], [-1, -4], [1, -6], [3, -8]],
          highlightPoints: [
            { x: 1, y: -6, label: 'Point on g', color: '#10b981' }
          ]
        }
      ]
    }
  },
  {
    id: 'ch4-trans-q12',
    number: 12,
    exerciseNumber: 3,
    exerciseTitle: 'Practice Exam - Part 3: Function Transformations (Q1-Q15)',
    question: 'Line y = f(x) has a slope of 3. If g(x) = 2f(x) - 7, what is the slope of g(x)?',
    options: [
      '3',
      '6',
      '-1',
      '14'
    ],
    correctIndex: 1,
    correctAnswerText: '6',
    explanation: `Step-by-Step Rate of Change Analysis:
1. Let f(x) = 3x + c, where slope m = 3.
2. Applying the transformation:
   g(x) = 2(3x + c) - 7 = 6x + (2c - 7)
3. The new coefficient of x is 6.
4. Vertical stretch by a factor of 2 doubles the slope: 2 * 3 = 6. Vertical shifts (- 7) do not affect the slope.`,
    distractorExplanations: {
      0: 'Incorrect. Assumed vertical scaling does not change slope.',
      2: 'Incorrect. Subtracted 7 from slope: 3 - 7 = -4 or arithmetic mix-up.',
      3: 'Incorrect. Multiplied 2 by 7.'
    },
    diagram: {
      title: 'Linear Slope Transformation',
      xAxisLabel: 'x',
      yAxisLabel: 'y',
      xRange: [-1, 3],
      yRange: [-10, 10],
      xStep: 1,
      yStep: 2,
      curves: [
        {
          type: 'line',
          label: 'f(x) = 3x',
          color: '#94a3b8',
          points: [[-1, -3], [0, 0], [1, 3], [2, 6]]
        },
        {
          type: 'line',
          label: 'g(x)',
          color: '#3b82f6',
          points: [[0, -7], [1, -1], [2, 5]],
          highlightPoints: [
            { x: 1, y: -1, label: 'Point on g', color: '#ef4444' }
          ]
        }
      ]
    }
  },
  {
    id: 'ch4-trans-q13',
    number: 13,
    exerciseNumber: 3,
    exerciseTitle: 'Practice Exam - Part 3: Function Transformations (Q1-Q15)',
    question: 'Key point P(2, 8) lies on graph f(x). If g(x) = f(4x), what is the x-coordinate of point P on g(x)?',
    options: [
      '0.5',
      '2',
      '8',
      '32'
    ],
    correctIndex: 0,
    correctAnswerText: '0.5',
    explanation: `Step-by-Step Horizontal Compression:
1. The transformation g(x) = f(4x) compresses the graph horizontally by a factor of 1/4.
2. Coordinate rule: (x, y) -> (x / 4, y).
3. For original point (2, 8):
   New x-coordinate = 2 / 4 = 1/2 = 0.5.
4. Verification: g(0.5) = f(4 * 0.5) = f(2) = 8. Point on g is (0.5, 8).`,
    distractorExplanations: {
      1: 'Incorrect. Kept original x = 2.',
      2: 'Incorrect. Multiplied 2 by 4 to get 8.',
      3: 'Incorrect. Multiplied 8 by 4.'
    },
    diagram: {
      title: 'Horizontal Compression Mapping',
      xAxisLabel: 'x',
      yAxisLabel: 'y',
      xRange: [0, 4],
      yRange: [0, 10],
      xStep: 1,
      yStep: 2,
      curves: [
        {
          type: 'line',
          label: 'Original Point on f',
          color: '#94a3b8',
          points: [[2, 8]],
          highlightPoints: [
            { x: 2, y: 8, label: 'Point on f', color: '#64748b' }
          ]
        },
        {
          type: 'line',
          label: 'Transformed Point on g',
          color: '#3b82f6',
          points: [[0.5, 8]],
          highlightPoints: [
            { x: 0.5, y: 8, label: 'Point on g', color: '#ef4444' }
          ]
        }
      ]
    }
  },
  {
    id: 'ch4-trans-q14',
    number: 14,
    exerciseNumber: 3,
    exerciseTitle: 'Practice Exam - Part 3: Function Transformations (Q1-Q15)',
    question: 'Function f(x) = x² - 6x + 8 has roots at x = 2 and x = 4. If g(x) = f(x + k) has roots at x = -1 and x = 1, what is k?',
    options: [
      '-3',
      '3',
      '-2',
      '2'
    ],
    correctIndex: 1,
    correctAnswerText: '3',
    explanation: `Step-by-Step Horizontal Shift of Roots:
1. Original roots of f(x): x = 2 and x = 4.
2. Target roots of g(x): x = -1 and x = 1.
3. Observe the shift:
   • 2 -> -1 (shifted left by 3 units)
   • 4 -> 1 (shifted left by 3 units)
4. A horizontal shift to the left by 3 units is represented algebraically by f(x + 3).
5. Comparing f(x + k) with f(x + 3), we get k = 3.`,
    distractorExplanations: {
      0: 'Incorrect. k = -3 would shift the roots RIGHT by 3 units to x = 5 and x = 7.',
      2: 'Incorrect. Shift amount calculation error.',
      3: 'Incorrect. Shifted by 2 instead of 3.'
    },
    diagram: {
      title: 'Horizontal Shift of Quadratic Roots',
      xAxisLabel: 'x',
      yAxisLabel: 'y',
      xRange: [-3, 6],
      yRange: [-2, 6],
      xStep: 1,
      yStep: 2,
      curves: [
        {
          type: 'function',
          fnType: 'parabola',
          label: 'f(x) roots',
          color: '#94a3b8',
          points: [[1, 3], [2, 0], [3, -1], [4, 0], [5, 3]],
          highlightPoints: [
            { x: 2, y: 0, label: 'f root', color: '#64748b' },
            { x: 4, y: 0, label: 'f root', color: '#64748b' }
          ]
        },
        {
          type: 'function',
          fnType: 'parabola',
          label: 'g(x) roots',
          color: '#3b82f6',
          points: [[-2, 3], [-1, 0], [0, -1], [1, 0], [2, 3]],
          highlightPoints: [
            { x: -1, y: 0, label: 'g root', color: '#ef4444' },
            { x: 1, y: 0, label: 'g root', color: '#ef4444' }
          ]
        }
      ]
    }
  },
  {
    id: 'ch4-trans-q15',
    number: 15,
    exerciseNumber: 3,
    exerciseTitle: 'Practice Exam - Part 3: Function Transformations (Q1-Q15)',
    question: 'Which transformation of f(x) produces a graph symmetric with respect to the y-axis for ANY function f(x)?',
    options: [
      'g(x) = f(|x|)',
      'g(x) = |f(x)|',
      'g(x) = f(-x)',
      'g(x) = -f(x)'
    ],
    correctIndex: 0,
    correctAnswerText: 'g(x) = f(|x|)',
    explanation: `Step-by-Step Symmetry Proof:
1. Definition of y-axis symmetry (Even Function): A function g(x) is symmetric about the y-axis if and only if g(-x) = g(x) for all x in its domain.
2. Test Option A: g(x) = f(|x|):
   g(-x) = f(|-x|) = f(|x|) = g(x).
   This algebraic identity holds regardless of what function f is!
3. Geometric meaning: For x < 0, f(|x|) reflects the right side (x >= 0) across the y-axis, creating perfect bilateral symmetry.`,
    distractorExplanations: {
      1: 'Incorrect. |f(x)| reflects negative y-values upward, but does not guarantee y-axis symmetry (e.g. |2x + 1| is not symmetric about the y-axis).',
      2: 'Incorrect. f(-x) reflects f across the y-axis, but does not make an asymmetrical function symmetric.',
      3: 'Incorrect. -f(x) reflects across the x-axis.'
    },
    diagram: {
      title: 'Y-Axis Symmetry Transformation',
      xAxisLabel: 'x',
      yAxisLabel: 'y',
      xRange: [-4, 4],
      yRange: [-2, 8],
      xStep: 1,
      yStep: 2,
      curves: [
        {
          type: 'function',
          fnType: 'parabola',
          label: 'g(x)',
          color: '#3b82f6',
          points: [[-3, 5], [-2, 2], [-1, 1], [0, 2], [1, 1], [2, 2], [3, 5]],
          highlightPoints: [
            { x: 0, y: 2, label: 'Axis Symmetry x = 0', color: '#ef4444' }
          ]
        }
      ]
    }
  }
];
