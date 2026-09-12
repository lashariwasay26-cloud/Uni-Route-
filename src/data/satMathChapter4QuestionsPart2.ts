import { MathExerciseQuestion } from './satMathConcepts';

export const CHAPTER_4_QUESTIONS_PART_2: MathExerciseQuestion[] = [
  {
    id: 'ch4-q31',
    number: 31,
    exerciseNumber: 2,
    exerciseTitle: 'Practice Exam - Part 2: Quadratics (Q31-Q60)',
    question: 'The graph of y = -2x² + 12x - 10 is a parabola in the xy-plane. What is the x-coordinate of its vertex?',
    options: ['-3', '2', '3', '6'],
    correctIndex: 2,
    correctAnswerText: '3',
    explanation: `Step-by-Step Vertex x-Coordinate Formula:
1. Identify coefficients from standard form y = ax² + bx + c:
   a = -2,  b = 12,  c = -10
2. Apply the vertex x-coordinate formula:
   x_v = -b / (2a)
3. Substitute the values:
   x_v = -12 / (2 · (-2)) = -12 / (-4) = 3.

Graph & Coordinate Analysis:
The parabola opens downward (a = -2 < 0) and reaches its maximum vertex at point (3, 8).`,
    diagram: {
      title: 'Downward Parabola y = -2x² + 12x - 10 with Vertex (3, 8)',
      xAxisLabel: 'x',
      yAxisLabel: 'y',
      xRange: [-1, 7],
      yRange: [-12, 10],
      xStep: 1,
      yStep: 2,
      curves: [
        {
          type: 'function',
          fnType: 'parabola',
          label: 'y = -2x² + 12x - 10',
          color: '#3b82f6',
          points: [[0, -10], [1, 0], [2, 6], [3, 8], [4, 6], [5, 0], [6, -10]],
          highlightPoints: [
            { x: 3, y: 8, label: 'Vertex (3, 8)', color: '#ef4444' },
            { x: 1, y: 0, label: 'Root (1, 0)', color: '#10b981' },
            { x: 5, y: 0, label: 'Root (5, 0)', color: '#10b981' }
          ]
        },
        {
          type: 'line',
          style: 'dashed',
          label: 'Axis x = 3',
          color: '#94a3b8',
          points: [[3, -12], [3, 10]]
        }
      ]
    }
  },
  {
    id: 'ch4-q32',
    number: 32,
    exerciseNumber: 2,
    exerciseTitle: 'Practice Exam - Part 2: Quadratics (Q31-Q60)',
    question: 'In the xy-plane, the graph of y = (x - 3)² - 16 crosses the x-axis at (p, 0) and (q, 0). What is the value of |p - q|?',
    options: ["3","6","9","12"],
    correctIndex: 1,
    correctAnswerText: "6",
    explanation: `Step-by-Step Distance Between Roots:
1. Find the roots by setting y = 0:
   (x - 3)² - 16 = 0  ==>  (x - 3)² = 16
2. Take square roots:
   x - 3 = ±4
   • p = 3 + 4 = 7
   • q = 3 - 4 = -1
3. Compute the distance |p - q|:
   |7 - (-1)| = |7 + 1| = 8.

Square Root Direct Shortcut:
In y = a(x - h)² - k, the distance between zeros is 2√(k/a) = 2√(16/1) = 2(4) = 8.`,
    diagram: {
      title: 'Parabola y = (x - 3)² - 16 with Roots at x = -1 and x = 7',
      xAxisLabel: 'x',
      yAxisLabel: 'y',
      xRange: [-3, 9],
      yRange: [-18, 10],
      xStep: 1,
      yStep: 4,
      curves: [
        {
          type: 'function',
          fnType: 'parabola',
          label: 'y = (x - 3)² - 16',
          color: '#3b82f6',
          points: [[-1, 0], [1, -12], [3, -16], [5, -12], [7, 0]],
          highlightPoints: [
            { x: -1, y: 0, label: 'q = -1', color: '#10b981' },
            { x: 7, y: 0, label: 'p = 7', color: '#10b981' },
            { x: 3, y: -16, label: 'Vertex (3, -16)', color: '#ef4444' }
          ]
        }
      ]
    }
  },
  {
    id: 'ch4-q33',
    number: 33,
    exerciseNumber: 2,
    exerciseTitle: 'Practice Exam - Part 2: Quadratics (Q31-Q60)',
    question: 'How many distinct real solutions does the equation 3x² - 6x + 5 = 0 have?',
    options: ['Zero', 'Exactly one', 'Exactly two', 'Infinitely many'],
    correctIndex: 0,
    correctAnswerText: 'Zero',
    explanation: `Step-by-Step Discriminant Analysis:
1. Identify coefficients from 3x² - 6x + 5 = 0:
   a = 3,  b = -6,  c = 5
2. Compute the Discriminant D = b² - 4ac:
   D = (-6)² - 4(3)(5)
   D = 36 - 60 = -24
3. Since D < 0, the quadratic equation has Zero real solutions (2 complex conjugate solutions).

Graphical Interpretation:
The vertex of the parabola is at (1, 2) and it opens upward (a = 3 > 0), so it floats strictly above the x-axis and never touches or crosses it.`,
    diagram: {
      title: 'Parabola Floating Above x-axis: D = -24 < 0 (Zero Real Roots)',
      xAxisLabel: 'x',
      yAxisLabel: 'y',
      xRange: [-2, 4],
      yRange: [0, 14],
      xStep: 1,
      yStep: 2,
      curves: [
        {
          type: 'function',
          fnType: 'parabola',
          label: 'y = 3x² - 6x + 5',
          color: '#3b82f6',
          points: [[-1, 14], [0, 5], [1, 2], [2, 5], [3, 14]],
          highlightPoints: [
            { x: 1, y: 2, label: 'Min Vertex (1, 2)', color: '#ef4444' }
          ]
        }
      ]
    }
  },
  {
    id: 'ch4-q34',
    number: 34,
    exerciseNumber: 2,
    exerciseTitle: 'Practice Exam - Part 2: Quadratics (Q31-Q60)',
    question: 'A parabola is defined by equation y = a(x - 2)(x + 8), where a is a non-zero constant. What is the equation of its axis of symmetry?',
    options: ['x = -5', 'x = -3', 'x = 3', 'x = 5'],
    correctIndex: 1,
    correctAnswerText: 'x = -3',
    explanation: `Step-by-Step Midpoint of Roots:
1. The x-intercepts of y = a(x - 2)(x + 8) are:
   x₁ = 2  and  x₂ = -8
2. The axis of symmetry is always located at the exact midpoint of the roots:
   x = (x₁ + x₂) / 2
3. Calculate:
   x = (2 + (-8)) / 2 = -6 / 2 = -3.
4. The equation of the axis of symmetry is x = -3.`,
    diagram: {
      title: 'Axis of Symmetry x = -3 at Midpoint of Roots x = -8 & x = 2',
      xAxisLabel: 'x',
      yAxisLabel: 'y',
      xRange: [-10, 4],
      yRange: [-30, 10],
      xStep: 2,
      yStep: 5,
      curves: [
        {
          type: 'function',
          fnType: 'parabola',
          label: 'y = (x - 2)(x + 8)',
          color: '#3b82f6',
          points: [[-8, 0], [-6, -16], [-3, -25], [0, -16], [2, 0]],
          highlightPoints: [
            { x: -8, y: 0, label: 'Root (-8, 0)', color: '#10b981' },
            { x: 2, y: 0, label: 'Root (2, 0)', color: '#10b981' },
            { x: -3, y: -25, label: 'Vertex (-3, -25)', color: '#ef4444' }
          ]
        },
        {
          type: 'line',
          style: 'dashed',
          label: 'Axis x = -3',
          color: '#ef4444',
          points: [[-3, -30], [-3, 10]]
        }
      ]
    }
  },
  {
    id: 'ch4-q35',
    number: 35,
    exerciseNumber: 2,
    exerciseTitle: 'Practice Exam - Part 2: Quadratics (Q31-Q60)',
    question: 'What is the product of the solutions to the equation (2x - 3)² = 4x + 5?',
    options: ['1', '2', '4', '8'],
    correctIndex: 0,
    correctAnswerText: '1',
    explanation: `Step-by-Step Algebraic Solution:
1. Expand the left-hand squared binomial:
   (2x - 3)² = 4x² - 12x + 9
2. Set equal to the right side:
   4x² - 12x + 9 = 4x + 5
3. Move all terms to the left side to get the standard quadratic form ax² + bx + c = 0:
   4x² - 12x - 4x + 9 - 5 = 0
   4x² - 16x + 4 = 0
4. Identify coefficients:
   a = 4,  b = -16,  c = 4
5. Apply Vieta's Formula for the product of roots:
   Product of solutions = c / a = 4 / 4 = 1.

Alternative Verification (Quadratic Formula):
Dividing by 4 gives x² - 4x + 1 = 0.
x = (4 ± √(16 - 4)) / 2 = 2 ± √3.
Product = (2 + √3)(2 - √3) = 4 - 3 = 1.

Distractor Explanations:
• Choice A (1) is CORRECT: Evaluates c/a = 4/4 = 1.
• Choice B (2) is incorrect: Results from incorrectly taking (b/a) / 2.
• Choice C (4) is incorrect: 4 is the SUM of the solutions (-b/a = -(-16)/4 = 4), not the product.
• Choice D (8) is incorrect: Arithmetic error in calculating the constant term or failing to divide by coefficient a.`,
    diagram: {
      title: 'Parabola y = 4x² - 16x + 4 with Roots at 2 ± √3 (Product = 1)',
      xAxisLabel: 'x',
      yAxisLabel: 'y',
      xRange: [-1, 5],
      yRange: [-15, 10],
      xStep: 1,
      yStep: 5,
      curves: [
        {
          type: 'function',
          fnType: 'parabola',
          label: 'y = 4x² - 16x + 4',
          color: '#3b82f6',
          points: [[0, 4], [2, -12], [4, 4], [0.27, 0], [3.73, 0]],
          highlightPoints: [
            { x: 0.27, y: 0, label: 'x₁ = 2 - √3 (~0.27)', color: '#10b981' },
            { x: 3.73, y: 0, label: 'x₂ = 2 + √3 (~3.73)', color: '#10b981' },
            { x: 2, y: -12, label: 'Vertex (2, -12)', color: '#ef4444' }
          ]
        }
      ]
    }
  },
  {
    id: 'ch4-q36',
    number: 36,
    exerciseNumber: 2,
    exerciseTitle: 'Practice Exam - Part 2: Quadratics (Q31-Q60)',
    question: `In the system of equations below, c is a constant.

y = -cx
y = x² + 3

For which of the following values of c does the system of equations have two distinct real solutions?`,
    options: ['-4', '-3', '2', '3'],
    correctIndex: 0,
    correctAnswerText: '-4',
    explanation: `Step-by-Step Discriminant & System Analysis:
1. Set the equations equal to find the points of intersection:
   -cx = x² + 3
2. Rearrange into standard quadratic form ax² + bx + c = 0:
   x² + cx + 3 = 0
   Here, a = 1, b = c, and constant term = 3.
3. For the system to have two distinct real solutions, the Discriminant (D) must be strictly positive:
   D = b² - 4ac > 0
   c² - 4(1)(3) > 0
   c² - 12 > 0  ==>  c² > 12
4. Evaluate each answer choice:
   • For c = -4: (-4)² = 16. Since 16 > 12, D = 16 - 12 = 4 > 0 (Two real solutions!).
   • For c = -3: (-3)² = 9. Since 9 < 12, D = 9 - 12 = -3 < 0 (No real solutions).
   • For c = 2: (2)² = 4. Since 4 < 12, D = 4 - 12 = -8 < 0 (No real solutions).
   • For c = 3: (3)² = 9. Since 9 < 12, D = 9 - 12 = -3 < 0 (No real solutions).
5. Only c = -4 produces two real solutions.

Distractor Explanations:
• Choice A (-4) is CORRECT: (-4)² = 16 > 12, giving a positive discriminant D = 4.
• Choice B (-3) is incorrect: (-3)² = 9 < 12, yielding a negative discriminant D = -3 (0 real solutions).
• Choice C (2) is incorrect: 2² = 4 < 12, yielding a negative discriminant D = -8 (0 real solutions).
• Choice D (3) is incorrect: 3² = 9 < 12, yielding a negative discriminant D = -3 (0 real solutions).`,
    diagram: {
      title: 'Parabola y = x² + 3 and Line y = 4x (c = -4) with 2 Intersections',
      xAxisLabel: 'x',
      yAxisLabel: 'y',
      xRange: [-1, 5],
      yRange: [0, 20],
      xStep: 1,
      yStep: 4,
      curves: [
        {
          type: 'function',
          fnType: 'parabola',
          label: 'y = x² + 3',
          color: '#3b82f6',
          points: [[-1, 4], [0, 3], [1, 4], [2, 7], [3, 12], [4, 19]]
        },
        {
          type: 'line',
          label: 'y = 4x (for c = -4)',
          color: '#10b981',
          points: [[0, 0], [4, 16]],
          highlightPoints: [
            { x: 1, y: 4, label: 'Intersection (1, 4)', color: '#ef4444' },
            { x: 3, y: 12, label: 'Intersection (3, 12)', color: '#ef4444' }
          ]
        }
      ]
    }
  },
  {
    id: 'ch4-q37',
    number: 37,
    exerciseNumber: 2,
    exerciseTitle: 'Practice Exam - Part 2: Quadratics (Q31-Q60)',
    question: 'In the equation x² + 8x + c = 0, c is a constant. If the equation has exactly one real solution, what is the value of c?',
    options: ['4', '8', '16', '64'],
    correctIndex: 2,
    correctAnswerText: '16',
    explanation: `Step-by-Step One Solution Discriminant Condition:
1. For a quadratic equation to have exactly one real solution (a double root where the vertex touches the x-axis), the Discriminant must equal zero:
   D = b² - 4ac = 0
2. Substitute a = 1 and b = 8:
   (8)² - 4(1)(c) = 0
   64 - 4c = 0
3. Solve for c:
   4c = 64  ==>  c = 16.

Perfect Square Trinomial Check:
x² + 8x + 16 = (x + 4)² = 0, which has the single root x = -4.`,
    diagram: {
      title: 'Parabola Tangent to x-axis: y = (x + 4)² (One Real Root at x = -4)',
      xAxisLabel: 'x',
      yAxisLabel: 'y',
      xRange: [-8, 0],
      yRange: [-2, 18],
      xStep: 1,
      yStep: 2,
      curves: [
        {
          type: 'function',
          fnType: 'parabola',
          label: 'y = x² + 8x + 16',
          color: '#3b82f6',
          points: [[-7, 9], [-6, 4], [-4, 0], [-2, 4], [-1, 9], [0, 16]],
          highlightPoints: [
            { x: -4, y: 0, label: 'Tangent Root (-4, 0)', color: '#ef4444' },
            { x: 0, y: 16, label: 'c = 16', color: '#10b981' }
          ]
        }
      ]
    }
  },
  {
    id: 'ch4-q38',
    number: 38,
    exerciseNumber: 2,
    exerciseTitle: 'Practice Exam - Part 2: Quadratics (Q31-Q60)',
    question: 'Function f is defined by f(x) = -3(x + 4)² + 27. What is the maximum value of f(x)?',
    options: ['-4', '3', '27', '75'],
    correctIndex: 2,
    correctAnswerText: '27',
    explanation: `Step-by-Step Vertex Form Reading:
1. Compare f(x) = -3(x + 4)² + 27 to vertex form y = a(x - h)² + k:
   a = -3,  h = -4,  k = 27
2. Since a = -3 < 0, the parabola opens downward, meaning the vertex is a global maximum.
3. The maximum value of the function is the y-coordinate of the vertex:
   Max value = k = 27 (which occurs at x = -4).`,
    diagram: {
      title: 'Downward Parabola f(x) = -3(x + 4)² + 27 with Maximum = 27',
      xAxisLabel: 'x',
      yAxisLabel: 'y',
      xRange: [-8, 0],
      yRange: [-5, 30],
      xStep: 1,
      yStep: 5,
      curves: [
        {
          type: 'function',
          fnType: 'parabola',
          label: 'f(x) = -3(x + 4)² + 27',
          color: '#3b82f6',
          points: [[-7, 0], [-6, 15], [-4, 27], [-2, 15], [-1, 0]],
          highlightPoints: [
            { x: -4, y: 27, label: 'Max (-4, 27)', color: '#ef4444' },
            { x: -7, y: 0, label: '(-7, 0)', color: '#10b981' },
            { x: -1, y: 0, label: '(-1, 0)', color: '#10b981' }
          ]
        }
      ]
    }
  },
  {
    id: 'ch4-q39',
    number: 39,
    exerciseNumber: 2,
    exerciseTitle: 'Practice Exam - Part 2: Quadratics (Q31-Q60)',
    question: 'How many points of intersection exist in the xy-plane between the line y = 2x + 1 and the parabola y = x² - 3x + 7?',
    options: ["Zero real solutions","Exactly one real solution","Two distinct real solutions","Infinitely many solutions"],
    correctIndex: 2,
    correctAnswerText: "Two distinct real solutions",
    explanation: `Step-by-Step System Solving & Discriminant:
1. Set the linear and quadratic expressions equal to each other:
   2x + 1 = x² - 3x + 7
2. Rearrange to standard form:
   x² - 5x + 6 = 0
3. Factor:
   (x - 2)(x - 3) = 0
4. There are two distinct solutions: x = 2 and x = 3.
   • At x = 2, y = 2(2) + 1 = 5 (Point (2, 5))
   • At x = 3, y = 2(3) + 1 = 7 (Point (3, 7))
5. The line and parabola intersect at Exactly two points.`,
    diagram: {
      title: 'Intersections of Parabola & Line at (2, 5) and (3, 7)',
      xAxisLabel: 'x',
      yAxisLabel: 'y',
      xRange: [0, 5],
      yRange: [0, 15],
      xStep: 1,
      yStep: 2,
      curves: [
        {
          type: 'function',
          fnType: 'parabola',
          label: 'y = x² - 3x + 7',
          color: '#3b82f6',
          points: [[0, 7], [1, 5], [1.5, 4.75], [2, 5], [3, 7], [4, 11]]
        },
        {
          type: 'line',
          label: 'y = 2x + 1',
          color: '#10b981',
          points: [[0, 1], [2, 5], [3, 7], [5, 11]],
          highlightPoints: [
            { x: 2, y: 5, label: '(2, 5)', color: '#ef4444' },
            { x: 3, y: 7, label: '(3, 7)', color: '#ef4444' }
          ]
        }
      ]
    }
  },
  {
    id: 'ch4-q40',
    number: 40,
    exerciseNumber: 2,
    exerciseTitle: 'Practice Exam - Part 2: Quadratics (Q31-Q60)',
    question: 'A model rocket’s height h, in feet, t seconds after launch is given by h(t) = -16t² + 64t + 80. What is the maximum height, in feet, reached by the rocket?',
    options: ['64', '80', '144', '256'],
    correctIndex: 2,
    correctAnswerText: '144',
    explanation: `Step-by-Step Projectile Vertex Maximum:
1. Find the time t at which the maximum height occurs:
   t_v = -b / (2a) = -64 / (2 · (-16)) = -64 / (-32) = 2 seconds
2. Substitute t = 2 into the height function h(t):
   h(2) = -16(2)² + 64(2) + 80
   h(2) = -16(4) + 128 + 80
   h(2) = -64 + 128 + 80 = 144 feet.
3. The maximum height reached is 144 feet.`,
    diagram: {
      title: 'Rocket Trajectory h(t) = -16t² + 64t + 80 (Peak = 144 ft at t = 2s)',
      xAxisLabel: 'Time t (sec)',
      yAxisLabel: 'Height h (ft)',
      xRange: [0, 6],
      yRange: [0, 160],
      xStep: 1,
      yStep: 20,
      curves: [
        {
          type: 'function',
          fnType: 'parabola',
          label: 'h(t) = -16t² + 64t + 80',
          color: '#3b82f6',
          points: [[0, 80], [1, 128], [2, 144], [3, 128], [4, 80], [5, 0]],
          highlightPoints: [
            { x: 2, y: 144, label: 'Apex (2s, 144 ft)', color: '#ef4444' },
            { x: 0, y: 80, label: 'Launch (0s, 80 ft)', color: '#10b981' },
            { x: 5, y: 0, label: 'Landing (5s, 0 ft)', color: '#10b981' }
          ]
        }
      ]
    }
  },
  {
    id: 'ch4-q41',
    number: 41,
    exerciseNumber: 2,
    exerciseTitle: 'Practice Exam - Part 2: Quadratics (Q31-Q60)',
    question: 'The height h, in feet, of an object t seconds after launch is modeled by h(t) = -16(t - 3)² + 144. How many seconds after launch does the object hit the ground (h = 0)?',
    options: ["3","6","9","15"],
    correctIndex: 1,
    correctAnswerText: "6",
    explanation: `Step-by-Step Ground Collision Time:
1. Set height h(t) = 0:
   -16(t - 3)² + 144 = 0
2. Isolate the squared term:
   16(t - 3)² = 144
   (t - 3)² = 144 / 16 = 9
3. Take square roots:
   t - 3 = ±3  ==>  t = 3 ± 3
   • t = 3 + 3 = 6 seconds (Ground hit)
   • t = 3 - 3 = 0 seconds (Launch time)
4. The object hits the ground at t = 6 seconds.`,
    diagram: {
      title: 'Object Trajectory h(t) = -16(t - 3)² + 144 (Hits Ground at t = 6s)',
      xAxisLabel: 'Time t (s)',
      yAxisLabel: 'Height h (ft)',
      xRange: [0, 7],
      yRange: [0, 160],
      xStep: 1,
      yStep: 20,
      curves: [
        {
          type: 'function',
          fnType: 'parabola',
          label: 'h(t) = -16(t - 3)² + 144',
          color: '#3b82f6',
          points: [[0, 0], [1, 80], [2, 128], [3, 144], [4, 128], [5, 80], [6, 0]],
          highlightPoints: [
            { x: 3, y: 144, label: 'Vertex (3s, 144 ft)', color: '#ef4444' },
            { x: 6, y: 0, label: 'Impact (6s, 0 ft)', color: '#10b981' }
          ]
        }
      ]
    }
  },
  {
    id: 'ch4-q42',
    number: 42,
    exerciseNumber: 2,
    exerciseTitle: 'Practice Exam - Part 2: Quadratics (Q31-Q60)',
    question: 'In the quadratic equation y = a(x - 3)(x - k), a and k are constants. If the graph of the equation in the xy-plane is a parabola with vertex (5, -32), what is the value of a?',
    options: ['2', '4', '8', '16'],
    correctIndex: 2,
    correctAnswerText: '8',
    explanation: `Step-by-Step Factored Form & Vertex Analysis:
1. Identify the x-intercepts (roots) from the factored form y = a(x - 3)(x - k):
   The roots are x = 3 and x = k.
2. Use the symmetry property of parabolas:
   The x-coordinate of the vertex lies at the exact arithmetic midpoint of the two x-intercepts:
   x_v = (3 + k) / 2
3. Set x_v equal to the given vertex x-coordinate (5):
   5 = (3 + k) / 2
   10 = 3 + k  ==>  k = 7
4. Now the equation of the parabola is:
   y = a(x - 3)(x - 7)
5. Substitute the vertex coordinates (x = 5, y = -32) to solve for coefficient a:
   -32 = a(5 - 3)(5 - 7)
   -32 = a(2)(-2)
   -32 = -4a
   a = -32 / -4 = 8.

Distractor Explanations:
• Choice A (2) is incorrect: Results from taking -4a = -32 and incorrectly dividing or confounding with the distance between the vertex and root (5 - 3 = 2).
• Choice B (4) is incorrect: Results from dividing 32 / 8 or failing to square/multiply the factor product (2)(-2).
• Choice C (8) is CORRECT: k = 7, and substituting vertex (5, -32) yields -32 = -4a ==> a = 8.
• Choice D (16) is incorrect: Arithmetic error in isolating a (e.g. dividing -32 by -2 instead of -4).`,
    diagram: {
      title: 'Parabola y = 8(x - 3)(x - 7) with Vertex (5, -32) and Roots (3, 0) & (7, 0)',
      xAxisLabel: 'x',
      yAxisLabel: 'y',
      xRange: [1, 9],
      yRange: [-36, 12],
      xStep: 1,
      yStep: 8,
      curves: [
        {
          type: 'function',
          fnType: 'parabola',
          label: 'y = 8(x - 3)(x - 7)',
          color: '#3b82f6',
          points: [[2, 40], [3, 0], [4, -24], [5, -32], [6, -24], [7, 0], [8, 40]],
          highlightPoints: [
            { x: 3, y: 0, label: 'Root (3, 0)', color: '#10b981' },
            { x: 7, y: 0, label: 'Root (7, 0)', color: '#10b981' },
            { x: 5, y: -32, label: 'Vertex (5, -32)', color: '#ef4444' }
          ]
        }
      ]
    }
  },
  {
    id: 'ch4-q43',
    number: 43,
    exerciseNumber: 2,
    exerciseTitle: 'Practice Exam - Part 2: Quadratics (Q31-Q60)',
    question: 'A parabola with vertex at (3, -6) has equation y = a(x - 3)² - 6. If the graph passes through point (0, 12), what is the value of constant a?',
    options: ['1', '2', '3', '6'],
    correctIndex: 1,
    correctAnswerText: '2',
    explanation: `Step-by-Step Point Substitution:
1. Substitute the coordinates (x = 0, y = 12) into the vertex equation:
   12 = a(0 - 3)² - 6
2. Simplify the square:
   12 = a(-3)² - 6
   12 = 9a - 6
3. Add 6 to both sides:
   18 = 9a
4. Divide by 9:
   a = 18 / 9 = 2.`,
    diagram: {
      title: 'Parabola y = 2(x - 3)² - 6 Passing Through (0, 12)',
      xAxisLabel: 'x',
      yAxisLabel: 'y',
      xRange: [-1, 7],
      yRange: [-8, 16],
      xStep: 1,
      yStep: 4,
      curves: [
        {
          type: 'function',
          fnType: 'parabola',
          label: 'y = 2(x - 3)² - 6',
          color: '#3b82f6',
          points: [[0, 12], [1, 2], [3, -6], [5, 2], [6, 12]],
          highlightPoints: [
            { x: 0, y: 12, label: '(0, 12)', color: '#ef4444' },
            { x: 3, y: -6, label: 'Vertex (3, -6)', color: '#10b981' }
          ]
        }
      ]
    }
  },
  {
    id: 'ch4-q44',
    number: 44,
    exerciseNumber: 2,
    exerciseTitle: 'Practice Exam - Part 2: Quadratics (Q31-Q60)',
    question: 'In which quadrant is the vertex of the parabola y = 2(x - 5)² + 3 located?',
    options: ['Quadrant I', 'Quadrant II', 'Quadrant III', 'Quadrant IV'],
    correctIndex: 0,
    correctAnswerText: 'Quadrant I',
    explanation: `Step-by-Step Quadrant Identification:
1. Read the vertex (h, k) directly from vertex form y = a(x - h)² + k:
   h = 5,  k = 3  ==>  Vertex = (5, 3)
2. Examine the signs of coordinates:
   • x-coordinate = +5 > 0 (Positive)
   • y-coordinate = +3 > 0 (Positive)
3. Points where both x > 0 and y > 0 are located in Quadrant I.`,
    diagram: {
      title: 'Parabola y = 2(x - 5)² + 3 with Vertex in Quadrant I (5, 3)',
      xAxisLabel: 'x',
      yAxisLabel: 'y',
      xRange: [0, 9],
      yRange: [0, 15],
      xStep: 1,
      yStep: 2,
      curves: [
        {
          type: 'function',
          fnType: 'parabola',
          label: 'y = 2(x - 5)² + 3',
          color: '#3b82f6',
          points: [[3, 11], [4, 5], [5, 3], [6, 5], [7, 11]],
          highlightPoints: [
            { x: 5, y: 3, label: 'Vertex (5, 3) in Q1', color: '#ef4444' }
          ]
        }
      ]
    }
  },
  {
    id: 'ch4-q45',
    number: 45,
    exerciseNumber: 2,
    exerciseTitle: 'Practice Exam - Part 2: Quadratics (Q31-Q60)',
    question: 'Function f is defined by f(x) = x² - 10x + 21. For which of the following intervals is f(x) < 0?',
    options: ['x < 3', '3 < x < 7', 'x > 7', 'x < 3 or x > 7'],
    correctIndex: 1,
    correctAnswerText: '3 < x < 7',
    explanation: `Step-by-Step Quadratic Inequality Analysis:
1. Factor f(x):
   x² - 10x + 21 = (x - 3)(x - 7)
2. Find roots (zeros):
   x = 3  and  x = 7
3. Since the leading coefficient a = 1 > 0, the parabola opens upward.
4. An upward-opening parabola dips below the x-axis (f(x) < 0) strictly between its two real roots:
   3 < x < 7.`,
    diagram: {
      title: 'Region where f(x) < 0: 3 < x < 7 (Below x-axis)',
      xAxisLabel: 'x',
      yAxisLabel: 'y',
      xRange: [1, 9],
      yRange: [-6, 10],
      xStep: 1,
      yStep: 2,
      curves: [
        {
          type: 'function',
          fnType: 'parabola',
          label: 'f(x) = x² - 10x + 21',
          color: '#3b82f6',
          points: [[2, 5], [3, 0], [5, -4], [7, 0], [8, 5]],
          highlightPoints: [
            { x: 3, y: 0, label: '(3, 0)', color: '#10b981' },
            { x: 7, y: 0, label: '(7, 0)', color: '#10b981' },
            { x: 5, y: -4, label: 'Vertex (5, -4)', color: '#ef4444' }
          ]
        }
      ]
    }
  },
  {
    id: 'ch4-q46',
    number: 46,
    exerciseNumber: 2,
    exerciseTitle: 'Practice Exam - Part 2: Quadratics (Q31-Q60)',
    question: 'In the equation ax² - 18x + 5 = 0, a is a constant. If the sum of the roots of the equation is 6, what is the value of a?',
    options: ['3', '6', '9', '108'],
    correctIndex: 0,
    correctAnswerText: '3',
    explanation: `Step-by-Step Vieta’s Formula Application:
1. The sum of roots for ax² + bx + c = 0 is -b / a.
2. Here b = -18, so:
   Sum = -(-18) / a = 18 / a
3. Set the sum equal to 6:
   18 / a = 6
4. Multiply by a and divide by 6:
   6a = 18  ==>  a = 3.`,
    diagram: {
      title: 'Parabola 3x² - 18x + 5 = 0 with Sum of Roots = 6',
      xAxisLabel: 'x',
      yAxisLabel: 'y',
      xRange: [0, 6],
      yRange: [-25, 10],
      xStep: 1,
      yStep: 5,
      curves: [
        {
          type: 'function',
          fnType: 'parabola',
          label: 'y = 3x² - 18x + 5',
          color: '#3b82f6',
          points: [[0, 5], [1, -10], [3, -22], [5, -10], [6, 5]],
          highlightPoints: [
            { x: 3, y: -22, label: 'Axis at x = 3', color: '#ef4444' }
          ]
        }
      ]
    }
  },
  {
    id: 'ch4-q47',
    number: 47,
    exerciseNumber: 2,
    exerciseTitle: 'Practice Exam - Part 2: Quadratics (Q31-Q60)',
    question: 'Line y = mx - 12 intersects parabola y = x² - 6x + 4 at exactly one point. If m is a positive constant, what is the value of m?',
    options: ["x = 1","x = 2","x = 3","x = 4"],
    correctIndex: 2,
    correctAnswerText: "x = 3",
    explanation: `Step-by-Step Line-Parabola Tangency:
1. Set the two equations equal to find intersection points:
   x² - 6x + 4 = mx - 12
2. Collect all terms on one side:
   x² - (6 + m)x + 16 = 0
3. For exactly one point of intersection (tangency), the Discriminant must equal zero:
   D = b² - 4ac = 0
   [-(6 + m)]² - 4(1)(16) = 0
   (6 + m)² - 64 = 0
4. Solve for m:
   (6 + m)² = 64  ==>  6 + m = 8  (since m is positive)
   m = 8 - 6 = 2.
5. Tangency occurs at x = (6 + 2)/2 = 4, y = 2(4) - 12 = -4.`,
    diagram: {
      title: 'Tangent Line y = 2x - 12 to Parabola y = x² - 6x + 4 at Point (4, -4)',
      xAxisLabel: 'x',
      yAxisLabel: 'y',
      xRange: [-1, 7],
      yRange: [-14, 10],
      xStep: 1,
      yStep: 4,
      curves: [
        {
          type: 'function',
          fnType: 'parabola',
          label: 'y = x² - 6x + 4',
          color: '#3b82f6',
          points: [[0, 4], [1, -1], [2, -4], [3, -5], [4, -4], [5, -1], [6, 4]]
        },
        {
          type: 'line',
          label: 'y = 2x - 12',
          color: '#10b981',
          points: [[0, -12], [2, -8], [4, -4], [6, 0]],
          highlightPoints: [
            { x: 4, y: -4, label: 'Tangent (4, -4)', color: '#ef4444' }
          ]
        }
      ]
    }
  },
  {
    id: 'ch4-q48',
    number: 48,
    exerciseNumber: 2,
    exerciseTitle: 'Practice Exam - Part 2: Quadratics (Q31-Q60)',
    question: 'Function f is defined by f(x) = -0.5(x - 2)(x - 10). At what value of x does f(x) reach its maximum value?',
    options: ['2', '6', '8', '10'],
    correctIndex: 1,
    correctAnswerText: '6',
    explanation: `Step-by-Step Factored Form Vertex Midpoint:
1. In factored form y = a(x - p)(x - q), the zeros are x = 2 and x = 10.
2. Since a = -0.5 < 0, the parabola opens downward, reaching its global maximum at the vertex.
3. The vertex x-coordinate is the exact arithmetic midpoint of the two zeros:
   x_v = (2 + 10) / 2 = 12 / 2 = 6.
4. The maximum value occurs at x = 6.`,
    diagram: {
      title: 'Parabola f(x) = -0.5(x - 2)(x - 10) Reaching Max at x = 6',
      xAxisLabel: 'x',
      yAxisLabel: 'y',
      xRange: [0, 12],
      yRange: [-4, 10],
      xStep: 1,
      yStep: 2,
      curves: [
        {
          type: 'function',
          fnType: 'parabola',
          label: 'f(x) = -0.5(x - 2)(x - 10)',
          color: '#3b82f6',
          points: [[2, 0], [4, 6], [6, 8], [8, 6], [10, 0]],
          highlightPoints: [
            { x: 6, y: 8, label: 'Max (6, 8)', color: '#ef4444' },
            { x: 2, y: 0, label: '(2, 0)', color: '#10b981' },
            { x: 10, y: 0, label: '(10, 0)', color: '#10b981' }
          ]
        }
      ]
    }
  },
  {
    id: 'ch4-q49',
    number: 49,
    exerciseNumber: 2,
    exerciseTitle: 'Practice Exam - Part 2: Quadratics (Q31-Q60)',
    question: 'A company’s monthly operational expenses E(x), in dollars, are modeled by E(x) = 20x² - 400x + 5000, where x is the number of active projects. What is the minimum monthly expense, in dollars?',
    options: ['$2,000', '$3,000', '$5,000', '$7,000'],
    correctIndex: 1,
    correctAnswerText: '$3,000',
    explanation: `Step-by-Step Quadratic Optimization:
1. Find the project count x that minimizes cost:
   x_v = -b / (2a) = -(-400) / (2 · 20) = 400 / 40 = 10 projects
2. Calculate the minimum expense by evaluating E(10):
   E(10) = 20(10)² - 400(10) + 5000
   E(10) = 20(100) - 4000 + 5000
   E(10) = 2000 - 4000 + 5000 = $3,000.`,
    diagram: {
      title: 'Expense Model E(x) with Minimum Expense of $3,000 at x = 10',
      xAxisLabel: 'Active Projects (x)',
      yAxisLabel: 'Expense E(x) ($)',
      xRange: [0, 20],
      yRange: [2000, 7000],
      xStep: 2,
      yStep: 1000,
      curves: [
        {
          type: 'function',
          fnType: 'parabola',
          label: 'E(x) = 20x² - 400x + 5000',
          color: '#3b82f6',
          points: [[0, 5000], [5, 3500], [10, 3000], [15, 3500], [20, 5000]],
          highlightPoints: [
            { x: 10, y: 3000, label: 'Minimum (10, $3,000)', color: '#ef4444' }
          ]
        }
      ]
    }
  },
  {
    id: 'ch4-q50',
    number: 50,
    exerciseNumber: 2,
    exerciseTitle: 'Practice Exam - Part 2: Quadratics (Q31-Q60)',
    question: 'The graph of y = (x - 4)² - 25 is a parabola in the xy-plane that intersects the x-axis at points (p, 0) and (q, 0). What is the distance |p - q| between the two x-intercepts?',
    options: ['5', '8', '10', '25'],
    correctIndex: 2,
    correctAnswerText: '10',
    explanation: `Step-by-Step Distance Between Intercepts:
1. Find the x-intercepts by setting y = 0:
   (x - 4)² - 25 = 0
2. Add 25 to both sides:
   (x - 4)² = 25
3. Take the square root of both sides:
   x - 4 = ±5
4. Solve for the two roots p and q:
   • p = 4 + 5 = 9
   • q = 4 - 5 = -1
5. Calculate the absolute distance |p - q| between the two points:
   |p - q| = |9 - (-1)| = |9 + 1| = 10.

Geometric / Vertex Rule:
In vertex form y = (x - h)² - d², the vertex is at (h, -d²) and the roots are located symmetrically at h ± d. The horizontal distance between the roots is exactly 2d = 2(5) = 10 units.

Distractor Explanations:
• Choice A (5) is incorrect: 5 is the half-distance d = √25 from the axis of symmetry x = 4 to either x-intercept, not the total distance between them.
• Choice B (8) is incorrect: 8 is 2h (double the vertex x-coordinate), unrelated to the distance between roots.
• Choice C (10) is CORRECT: The roots are at x = 9 and x = -1, giving a total distance of 9 - (-1) = 10.
• Choice D (25) is incorrect: 25 is the vertical distance of the vertex below the x-axis (the constant term k = -25).`,
    diagram: {
      title: 'Parabola y = (x - 4)² - 25 with Intercepts at (-1, 0) & (9, 0) (Δx = 10)',
      xAxisLabel: 'x',
      yAxisLabel: 'y',
      xRange: [-3, 11],
      yRange: [-30, 15],
      xStep: 1,
      yStep: 5,
      curves: [
        {
          type: 'function',
          fnType: 'parabola',
          label: 'y = (x - 4)² - 25',
          color: '#3b82f6',
          points: [[-2, 11], [-1, 0], [0, -9], [2, -21], [4, -25], [6, -21], [8, -9], [9, 0], [10, 11]],
          highlightPoints: [
            { x: -1, y: 0, label: 'q(-1, 0)', color: '#10b981' },
            { x: 9, y: 0, label: 'p(9, 0)', color: '#10b981' },
            { x: 4, y: -25, label: 'Vertex (4, -25)', color: '#ef4444' }
          ]
        },
        {
          type: 'line',
          style: 'dashed',
          label: 'Distance |p - q| = 10',
          color: '#f59e0b',
          points: [[-1, 0], [9, 0]]
        }
      ]
    }
  },
  {
    id: 'ch4-q51',
    number: 51,
    exerciseNumber: 2,
    exerciseTitle: 'Practice Exam - Part 2: Quadratics (Q31-Q60)',
    question: 'The quadratic equation 2x² - kx + 18 = 0 has exactly one real solution. If k is a positive constant, what is the value of k?',
    options: ['6', '12', '18', '36'],
    correctIndex: 1,
    correctAnswerText: '12',
    explanation: `Step-by-Step Discriminant Tangency:
1. For exactly one real solution, D = b² - 4ac = 0:
   (-k)² - 4(2)(18) = 0
2. Simplify:
   k² - 144 = 0  ==>  k² = 144
3. Take square roots:
   k = ±12
4. Since k is specified as a positive constant, k = 12.`,
    diagram: {
      title: 'Parabola 2x² - 12x + 18 = 2(x - 3)² Touching x-axis at (3, 0)',
      xAxisLabel: 'x',
      yAxisLabel: 'y',
      xRange: [0, 6],
      yRange: [-2, 20],
      xStep: 1,
      yStep: 2,
      curves: [
        {
          type: 'function',
          fnType: 'parabola',
          label: 'y = 2(x - 3)²',
          color: '#3b82f6',
          points: [[0, 18], [1, 8], [2, 2], [3, 0], [4, 2], [5, 8], [6, 18]],
          highlightPoints: [
            { x: 3, y: 0, label: 'Single Root (3, 0)', color: '#ef4444' },
            { x: 0, y: 18, label: '(0, 18)', color: '#10b981' }
          ]
        }
      ]
    }
  },
  {
    id: 'ch4-q52',
    number: 52,
    exerciseNumber: 2,
    exerciseTitle: 'Practice Exam - Part 2: Quadratics (Q31-Q60)',
    question: 'What is the vertex form of the quadratic function f(x) = x² + 6x + 13?',
    options: ['f(x) = (x + 3)² + 4', 'f(x) = (x + 3)² + 13', 'f(x) = (x + 6)² + 4', 'f(x) = (x - 3)² + 4'],
    correctIndex: 0,
    correctAnswerText: 'f(x) = (x + 3)² + 4',
    explanation: `Step-by-Step Completing the Square:
1. Group the variable terms:
   f(x) = (x² + 6x) + 13
2. Add and subtract (b/2)² = (6/2)² = 3² = 9 inside:
   f(x) = (x² + 6x + 9) - 9 + 13
3. Factor the perfect square trinomial:
   f(x) = (x + 3)² + 4.
4. The vertex is (-3, 4).`,
    diagram: {
      title: 'Vertex Form f(x) = (x + 3)² + 4 with Vertex at (-3, 4)',
      xAxisLabel: 'x',
      yAxisLabel: 'y',
      xRange: [-7, 1],
      yRange: [0, 20],
      xStep: 1,
      yStep: 2,
      curves: [
        {
          type: 'function',
          fnType: 'parabola',
          label: 'f(x) = (x + 3)² + 4',
          color: '#3b82f6',
          points: [[-6, 13], [-5, 8], [-4, 5], [-3, 4], [-2, 5], [-1, 8], [0, 13]],
          highlightPoints: [
            { x: -3, y: 4, label: 'Vertex (-3, 4)', color: '#ef4444' },
            { x: 0, y: 13, label: 'y-int (0, 13)', color: '#10b981' }
          ]
        }
      ]
    }
  },
  {
    id: 'ch4-q53',
    number: 53,
    exerciseNumber: 2,
    exerciseTitle: 'Practice Exam - Part 2: Quadratics (Q31-Q60)',
    question: 'A parabola has x-intercepts at (-5, 0) and (3, 0) and passes through point (1, -24). Which equation defines the parabola?',
    options: ['y = 2(x + 5)(x - 3)', 'y = -2(x + 5)(x - 3)', 'y = 3(x + 5)(x - 3)', 'y = 2(x - 5)(x + 3)'],
    correctIndex: 0,
    correctAnswerText: 'y = 2(x + 5)(x - 3)',
    explanation: `Step-by-Step Factored Form Construction:
1. Write the general factored form using roots p = -5 and q = 3:
   y = a(x - (-5))(x - 3) = a(x + 5)(x - 3)
2. Substitute point (1, -24) to find leading coefficient a:
   -24 = a(1 + 5)(1 - 3)
   -24 = a(6)(-2)
   -24 = -12a  ==>  a = 2
3. The resulting equation is y = 2(x + 5)(x - 3).`,
    diagram: {
      title: 'Parabola y = 2(x + 5)(x - 3) Passing Through (1, -24)',
      xAxisLabel: 'x',
      yAxisLabel: 'y',
      xRange: [-7, 5],
      yRange: [-35, 10],
      xStep: 1,
      yStep: 5,
      curves: [
        {
          type: 'function',
          fnType: 'parabola',
          label: 'y = 2(x + 5)(x - 3)',
          color: '#3b82f6',
          points: [[-5, 0], [-1, -32], [1, -24], [3, 0]],
          highlightPoints: [
            { x: -5, y: 0, label: '(-5, 0)', color: '#10b981' },
            { x: 3, y: 0, label: '(3, 0)', color: '#10b981' },
            { x: 1, y: -24, label: '(1, -24)', color: '#ef4444' },
            { x: -1, y: -32, label: 'Vertex (-1, -32)', color: '#64748b' }
          ]
        }
      ]
    }
  },
  {
    id: 'ch4-q54',
    number: 54,
    exerciseNumber: 2,
    exerciseTitle: 'Practice Exam - Part 2: Quadratics (Q31-Q60)',
    question: 'The graph of y = (x - h)² + k is a parabola whose vertex is located in Quadrant III. Which of the following statements about h and k must be true?',
    options: ['h > 0 and k > 0', 'h < 0 and k > 0', 'h < 0 and k < 0', 'h > 0 and k < 0'],
    correctIndex: 2,
    correctAnswerText: 'h < 0 and k < 0',
    explanation: `Step-by-Step Quadrant Signs:
1. In vertex form y = (x - h)² + k, the vertex is at (h, k).
2. Quadrant III is the bottom-left region of the coordinate plane, where:
   • x-coordinates are negative (h < 0)
   • y-coordinates are negative (k < 0)
3. Therefore, h < 0 and k < 0 must be true.`,
    diagram: {
      title: 'Parabola in Quadrant III: Vertex (h, k) with h < 0 and k < 0',
      xAxisLabel: 'x',
      yAxisLabel: 'y',
      xRange: [-6, 2],
      yRange: [-8, 2],
      xStep: 1,
      yStep: 1,
      curves: [
        {
          type: 'function',
          fnType: 'parabola',
          label: 'y = (x + 3)² - 4',
          color: '#3b82f6',
          points: [[-5, 0], [-4, -3], [-3, -4], [-2, -3], [-1, 0]],
          highlightPoints: [
            { x: -3, y: -4, label: 'Vertex (-3, -4) in Q3', color: '#ef4444' }
          ]
        }
      ]
    }
  },
  {
    id: 'ch4-q55',
    number: 55,
    exerciseNumber: 2,
    exerciseTitle: 'Practice Exam - Part 2: Quadratics (Q31-Q60)',
    question: 'Total revenue R(x), in dollars, generated from selling products at price x dollars is modeled by R(x) = x(120 - 2x). What selling price x maximizes total revenue?',
    options: ['$20', '$30', '$40', '$60'],
    correctIndex: 1,
    correctAnswerText: '$30',
    explanation: `Step-by-Step Revenue Maximization:
1. Expand the revenue function:
   R(x) = -2x² + 120x
2. Identify standard form coefficients:
   a = -2,  b = 120
3. The maximum occurs at the vertex x-coordinate:
   x_v = -b / (2a) = -120 / (2 · (-2)) = -120 / (-4) = $30.

Roots Midpoint Method:
The zeros of R(x) = x(120 - 2x) are x = 0 and x = 60.
The maximum lies at their exact midpoint: (0 + 60) / 2 = $30.`,
    diagram: {
      title: 'Revenue Parabola R(x) = x(120 - 2x) Peaking at Price x = $30',
      xAxisLabel: 'Price x ($)',
      yAxisLabel: 'Revenue R(x) ($)',
      xRange: [0, 70],
      yRange: [0, 2000],
      xStep: 10,
      yStep: 300,
      curves: [
        {
          type: 'function',
          fnType: 'parabola',
          label: 'R(x) = -2x² + 120x',
          color: '#3b82f6',
          points: [[0, 0], [15, 1350], [30, 1800], [45, 1350], [60, 0]],
          highlightPoints: [
            { x: 30, y: 1800, label: 'Max Revenue ($30, $1800)', color: '#ef4444' },
            { x: 0, y: 0, label: '($0, $0)', color: '#10b981' },
            { x: 60, y: 0, label: '($60, $0)', color: '#10b981' }
          ]
        }
      ]
    }
  },
  {
    id: 'ch4-q56',
    number: 56,
    exerciseNumber: 2,
    exerciseTitle: 'Practice Exam - Part 2: Quadratics (Q31-Q60)',
    question: 'In the xy-plane, line y = 5 intersects parabola y = x² - 4 at points A and B. What is the distance between points A and B?',
    options: ['3', '6', '8', '9'],
    correctIndex: 1,
    correctAnswerText: '6',
    explanation: `Step-by-Step Intersection Distance:
1. Set the equations equal to find intersection x-coordinates:
   x² - 4 = 5
2. Add 4 to both sides:
   x² = 9
3. Take square roots:
   x = ±3
4. The intersection points are A(-3, 5) and B(3, 5).
5. Since they lie on the horizontal line y = 5, the distance between them is:
   Distance = 3 - (-3) = 6 units.`,
    diagram: {
      title: 'Intersection of Parabola y = x² - 4 & Line y = 5 with Distance = 6',
      xAxisLabel: 'x',
      yAxisLabel: 'y',
      xRange: [-5, 5],
      yRange: [-6, 8],
      xStep: 1,
      yStep: 2,
      curves: [
        {
          type: 'function',
          fnType: 'parabola',
          label: 'y = x² - 4',
          color: '#3b82f6',
          points: [[-3, 5], [-2, 0], [0, -4], [2, 0], [3, 5]]
        },
        {
          type: 'line',
          label: 'y = 5',
          color: '#10b981',
          points: [[-5, 5], [5, 5]],
          highlightPoints: [
            { x: -3, y: 5, label: 'A(-3, 5)', color: '#ef4444' },
            { x: 3, y: 5, label: 'B(3, 5)', color: '#ef4444' }
          ]
        }
      ]
    }
  },
  {
    id: 'ch4-q57',
    number: 57,
    exerciseNumber: 2,
    exerciseTitle: 'Practice Exam - Part 2: Quadratics (Q31-Q60)',
    question: 'Which of the following equivalent forms of f(x) = 2x² - 12x + 16 displays the minimum value of f(x) as a constant or coefficient?',
    options: [
      'f(x) = 2(x - 3)² - 2',
      'f(x) = 2(x - 2)(x - 4)',
      'f(x) = x² - 6x + 8',
      'f(x) = 2(x² - 6x + 8)'
    ],
    correctIndex: 0,
    correctAnswerText: 'f(x) = 2(x - 3)² - 2',
    explanation: `Step-by-Step Strategic Form Identification:
1. Vertex form y = a(x - h)² + k explicitly displays the extreme value (minimum or maximum) of the parabola as the constant k.
2. Complete the square on f(x) = 2x² - 12x + 16:
   f(x) = 2(x² - 6x + 9) - 18 + 16 = 2(x - 3)² - 2
3. The minimum value is -2, which appears directly as the constant term in Option A.
4. Factored form (Option B) displays the x-intercepts, not the minimum value.`,
    diagram: {
      title: 'Vertex Form f(x) = 2(x - 3)² - 2 Explicitly Displaying Min = -2',
      xAxisLabel: 'x',
      yAxisLabel: 'y',
      xRange: [0, 6],
      yRange: [-4, 18],
      xStep: 1,
      yStep: 2,
      curves: [
        {
          type: 'function',
          fnType: 'parabola',
          label: 'f(x) = 2(x - 3)² - 2',
          color: '#3b82f6',
          points: [[0, 16], [1, 6], [2, 0], [3, -2], [4, 0], [5, 6], [6, 16]],
          highlightPoints: [
            { x: 3, y: -2, label: 'Vertex Min (3, -2)', color: '#ef4444' },
            { x: 2, y: 0, label: '(2, 0)', color: '#10b981' },
            { x: 4, y: 0, label: '(4, 0)', color: '#10b981' }
          ]
        }
      ]
    }
  },
  {
    id: 'ch4-q58',
    number: 58,
    exerciseNumber: 2,
    exerciseTitle: 'Practice Exam - Part 2: Quadratics (Q31-Q60)',
    question: 'Function f is defined by f(x) = -(x + 2)² + 9. What are all values of x for which f(x) = 0?',
    options: ['x = -5 and x = 1', 'x = -1 and x = 5', 'x = -3 and x = 3', 'x = -2 and x = 9'],
    correctIndex: 0,
    correctAnswerText: 'x = -5 and x = 1',
    explanation: `Step-by-Step Square Root Zeros:
1. Set f(x) = 0:
   -(x + 2)² + 9 = 0
2. Add (x + 2)² to both sides:
   (x + 2)² = 9
3. Take square roots:
   x + 2 = ±3
4. Solve for x:
   • x = -2 + 3 = 1
   • x = -2 - 3 = -5
5. The values of x are x = -5 and x = 1.`,
    diagram: {
      title: 'Downward Parabola f(x) = -(x + 2)² + 9 with Zeros at x = -5, 1',
      xAxisLabel: 'x',
      yAxisLabel: 'y',
      xRange: [-7, 3],
      yRange: [-4, 11],
      xStep: 1,
      yStep: 2,
      curves: [
        {
          type: 'function',
          fnType: 'parabola',
          label: 'f(x) = -(x + 2)² + 9',
          color: '#3b82f6',
          points: [[-5, 0], [-3, 8], [-2, 9], [-1, 8], [1, 0]],
          highlightPoints: [
            { x: -5, y: 0, label: 'Root (-5, 0)', color: '#10b981' },
            { x: 1, y: 0, label: 'Root (1, 0)', color: '#10b981' },
            { x: -2, y: 9, label: 'Vertex (-2, 9)', color: '#ef4444' }
          ]
        }
      ]
    }
  },
  {
    id: 'ch4-q59',
    number: 59,
    exerciseNumber: 2,
    exerciseTitle: 'Practice Exam - Part 2: Quadratics (Q31-Q60)',
    question: 'Line y = c intersects parabola y = -2x² + 8x - 3 at exactly one point in the xy-plane. What is the value of constant c?',
    options: ["3","5","7","11"],
    correctIndex: 1,
    correctAnswerText: "5",
    explanation: `Step-by-Step Horizontal Tangency to Vertex:
1. A horizontal line y = c intersects a downward-opening parabola at exactly one point if and only if the line is tangent to the parabola at its peak vertex!
2. Find the vertex x-coordinate:
   x_v = -b / (2a) = -8 / (2 · (-2)) = -8 / (-4) = 2
3. Find the vertex y-coordinate:
   y_v = -2(2)² + 8(2) - 3 = -2(4) + 16 - 3 = -8 + 16 - 3 = 5
4. The peak y-value is 5, so the horizontal line must be y = 5 (c = 5).`,
    diagram: {
      title: 'Horizontal Line y = 5 Tangent to Parabola Peak (2, 5)',
      xAxisLabel: 'x',
      yAxisLabel: 'y',
      xRange: [-1, 5],
      yRange: [-5, 8],
      xStep: 1,
      yStep: 2,
      curves: [
        {
          type: 'function',
          fnType: 'parabola',
          label: 'y = -2x² + 8x - 3',
          color: '#3b82f6',
          points: [[0, -3], [1, 3], [2, 5], [3, 3], [4, -3]]
        },
        {
          type: 'line',
          style: 'dashed',
          label: 'Tangent Line y = 5',
          color: '#10b981',
          points: [[-1, 5], [5, 5]],
          highlightPoints: [
            { x: 2, y: 5, label: 'Tangent Apex (2, 5)', color: '#ef4444' }
          ]
        }
      ]
    }
  },
  {
    id: 'ch4-q60',
    number: 60,
    exerciseNumber: 2,
    exerciseTitle: 'Practice Exam - Part 2: Quadratics (Q31-Q60)',
    question: 'A company models its monthly profit P(m), in dollars, from selling m units of a product as P(m) = -m² + 100m + 120,000. What is the minimum positive number of units m the company must sell to break even (such that profit P(m) = 0)?',
    options: ['300', '400', '500', '600'],
    correctIndex: 1,
    correctAnswerText: '400',
    explanation: `Step-by-Step Break-Even Quadratic Modeling:
1. Break-even occurs when the net profit equals 0, so set P(m) = 0:
   -m² + 100m + 120000 = 0
2. Multiply the entire equation by -1 to make the leading coefficient positive:
   m² - 100m - 120000 = 0
3. Factor the quadratic equation:
   Look for two numbers that multiply to -120,000 and add up to -100.
   These numbers are -400 and +300:
   (-400)(300) = -120,000
   -400 + 300 = -100
4. Write the factored form:
   (m - 400)(m + 300) = 0
5. Set each factor to zero:
   • m - 400 = 0  ==>  m = 400
   • m + 300 = 0  ==>  m = -300
6. Since unit sales m must be a positive quantity in real-world business context, m = 400 units.

Distractor Explanations:
• Choice A (300) is incorrect: 300 comes from the magnitude of the negative root m = -300, which is non-physical for units sold.
• Choice B (400) is CORRECT: Factoring yields (m - 400)(m + 300) = 0, giving the positive break-even quantity m = 400.
• Choice C (500) is incorrect: Miscalculating the factors of 120,000 (e.g. 600 - 100).
• Choice D (600) is incorrect: Using 600 · 200 = 120,000 but resulting in an incorrect sum of -400 instead of -100.`,
    diagram: {
      title: 'Profit Curve P(m) = -m² + 100m + 120,000 with Break-Even at m = 400',
      xAxisLabel: 'Units Sold (m)',
      yAxisLabel: 'Profit P(m) ($)',
      xRange: [0, 500],
      yRange: [0, 140000],
      xStep: 50,
      yStep: 20000,
      curves: [
        {
          type: 'function',
          fnType: 'parabola',
          label: 'P(m) = -m² + 100m + 120,000',
          color: '#3b82f6',
          points: [
            [0, 120000],
            [50, 122500],
            [100, 120000],
            [200, 100000],
            [300, 60000],
            [400, 0]
          ],
          highlightPoints: [
            { x: 50, y: 122500, label: 'Max Profit ($122,500 at 50 units)', color: '#ef4444' },
            { x: 400, y: 0, label: 'Break-Even (400 units, $0)', color: '#10b981' }
          ]
        }
      ]
    }
  }
];
