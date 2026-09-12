import { MathExerciseQuestion } from './satMathConcepts';

export const CHAPTER_3_SYSTEMS_AND_QUADRATICS_QUESTIONS: MathExerciseQuestion[] = [
  // ==========================================
  // SECTION 1: SYSTEMS OF EQUATIONS (Q1 - Q10)
  // ==========================================
  {
    id: 'ch3-sq1',
    number: 1,
    exerciseNumber: 3,
    exerciseTitle: 'Exercise 3: Systems of Equations & Quadratic Equations Practice',
    question: 'Solve the following system of linear equations:\nx + y = 11\nx - y = 3\n\nWhat is the solution (x, y) to the system?',
    options: ['(4, 7)', '(7, 4)', '(8, 3)', '(7, 3)'],
    correctIndex: 1,
    correctAnswerText: '(7, 4)',
    explanation: `Step-by-Step Algebraic Solution:
1. Add the two equations together to eliminate the variable $y$:
   $$(x + y) + (x - y) = 11 + 3$$
   $$2x = 14 \\implies x = 7$$
2. Substitute $x = 7$ into the first equation $x + y = 11$:
   $$7 + y = 11 \\implies y = 11 - 7 = 4$$
3. Verify in the second equation: $7 - 4 = 3$ (True).
4. Therefore, the unique solution is $(x, y) = (7, 4)$.

Teacher's SAT Pro-Tip:
Look for symmetric coefficients! When one equation has $+y$ and the other has $-y$, simple addition instantly isolates $x$ with zero fraction arithmetic.`,
    distractorExplanations: {
      0: 'Reverses the variables as (4, 7), which gives 4 - 7 = -3 instead of +3.',
      2: 'Incorrectly pairs (8, 3); while 8 + 3 = 11, 8 - 3 = 5 ≠ 3.',
      3: 'Pairs (7, 3); 7 + 3 = 10 ≠ 11.'
    },
    diagram: {
      title: 'System of Linear Equations in the xy-plane',
      xAxisLabel: 'x',
      yAxisLabel: 'y',
      xRange: [0, 14],
      yRange: [-2, 14],
      xStep: 2,
      yStep: 2,
      curves: [
        {
          type: 'line',
          label: 'x + y = 11',
          color: '#3b82f6',
          expression: '-x + 11',
          points: [[0, 11], [7, 4], [11, 0]],
          strokeWidth: 2.5
        },
        {
          type: 'line',
          label: 'x - y = 3',
          color: '#10b981',
          expression: 'x - 3',
          points: [[3, 0], [7, 4], [12, 9]],
          strokeWidth: 2.5
        }
      ]
    }
  },
  {
    id: 'ch3-sq2',
    number: 2,
    exerciseNumber: 3,
    exerciseTitle: 'Exercise 3: Systems of Equations & Quadratic Equations Practice',
    question: 'Solve the following system of linear equations:\n2x + y = 13\nx - y = 2\n\nWhat is the solution (x, y) to the system?',
    options: ['(3, 7)', '(5, 3)', '(4, 5)', '(5, 2)'],
    correctIndex: 1,
    correctAnswerText: '(5, 3)',
    explanation: `Step-by-Step Algebraic Solution:
1. Add the two equations directly to eliminate $y$:
   $$(2x + y) + (x - y) = 13 + 2$$
   $$3x = 15 \\implies x = 5$$
2. Substitute $x = 5$ into the second equation $x - y = 2$:
   $$5 - y = 2 \\implies y = 3$$
3. Verify in the first equation: $2(5) + 3 = 10 + 3 = 13$ (True).
4. The solution is $(x, y) = (5, 3)$.

Teacher's SAT Pro-Tip:
Elimination is immediate here because $+y$ and $-y$ have opposite signs with coefficient magnitude 1.`,
    distractorExplanations: {
      0: 'Tests (3, 7): 2(3)+7=13 is true, but 3-7 = -4 ≠ 2.',
      2: 'Tests (4, 5): 2(4)+5=13 is true, but 4-5 = -1 ≠ 2.',
      3: 'Tests (5, 2): 5-2=3 ≠ 2.'
    },
    diagram: {
      title: 'System of Linear Equations in the xy-plane',
      xAxisLabel: 'x',
      yAxisLabel: 'y',
      xRange: [0, 10],
      yRange: [-2, 16],
      xStep: 1,
      yStep: 2,
      curves: [
        {
          type: 'line',
          label: '2x + y = 13',
          color: '#3b82f6',
          expression: '-2*x + 13',
          points: [[0, 13], [5, 3], [7, -1]],
          strokeWidth: 2.5
        },
        {
          type: 'line',
          label: 'x - y = 2',
          color: '#10b981',
          expression: 'x - 2',
          points: [[2, 0], [5, 3], [8, 6]],
          strokeWidth: 2.5
        }
      ]
    }
  },
  {
    id: 'ch3-sq3',
    number: 3,
    exerciseNumber: 3,
    exerciseTitle: 'Exercise 3: Systems of Equations & Quadratic Equations Practice',
    question: 'Consider the following system of linear equations:\ny = 4x - 1\ny = x + 8\n\nWhat is the solution (x, y) to the system?',
    options: ['(2, 7)', '(3, 11)', '(4, 15)', '(5, 19)'],
    correctIndex: 1,
    correctAnswerText: '(3, 11)',
    explanation: `Step-by-Step Algebraic Solution:
1. Since both equations are already solved for $y$, set them equal via substitution:
   $$4x - 1 = x + 8$$
2. Subtract $x$ from both sides:
   $$3x - 1 = 8$$
3. Add 1 to both sides and divide by 3:
   $$3x = 9 \\implies x = 3$$
4. Compute $y$ using $y = x + 8$:
   $$y = 3 + 8 = 11$$
5. Check in the first equation: $y = 4(3) - 1 = 12 - 1 = 11$ (True).
6. The solution is $(3, 11)$.

Teacher's SAT Pro-Tip:
When both equations are in slope-intercept form $y = m_1x + b_1$ and $y = m_2x + b_2$, setting $m_1x + b_1 = m_2x + b_2$ gives the intersection point in a single step!`,
    distractorExplanations: {
      0: 'Evaluates (2, 7): y = 4(2)-1 = 7, but y = 2+8 = 10 ≠ 7.',
      2: 'Evaluates (4, 15): y = 4(4)-1 = 15, but y = 4+8 = 12 ≠ 15.',
      3: 'Evaluates (5, 19): y = 4(5)-1 = 19, but y = 5+8 = 13 ≠ 19.'
    },
    diagram: {
      title: 'System of Linear Equations in the xy-plane',
      xAxisLabel: 'x',
      yAxisLabel: 'y',
      xRange: [-1, 7],
      yRange: [0, 22],
      xStep: 1,
      yStep: 2,
      curves: [
        {
          type: 'line',
          label: 'y = 4x - 1',
          color: '#3b82f6',
          expression: '4*x - 1',
          points: [[0, -1], [3, 11], [5, 19]],
          strokeWidth: 2.5
        },
        {
          type: 'line',
          label: 'y = x + 8',
          color: '#10b981',
          expression: 'x + 8',
          points: [[0, 8], [3, 11], [6, 14]],
          strokeWidth: 2.5
        }
      ]
    }
  },
  {
    id: 'ch3-sq4',
    number: 4,
    exerciseNumber: 3,
    exerciseTitle: 'Exercise 3: Systems of Equations & Quadratic Equations Practice',
    question: 'Solve the following system of linear equations:\n3x + 2y = 18\n3x - 2y = 6\n\nWhat is the solution (x, y) to the system?',
    options: ['(4, 3)', '(2, 6)', '(6, 0)', '(3, 4)'],
    correctIndex: 0,
    correctAnswerText: '(4, 3)',
    explanation: `Step-by-Step Algebraic Solution:
1. Add the two equations to eliminate the $2y$ terms:
   $$(3x + 2y) + (3x - 2y) = 18 + 6$$
   $$6x = 24 \\implies x = 4$$
2. Substitute $x = 4$ into the first equation $3x + 2y = 18$:
   $$3(4) + 2y = 18 \\implies 12 + 2y = 18$$
   $$2y = 6 \\implies y = 3$$
3. Verify in the second equation: $3(4) - 2(3) = 12 - 6 = 6$ (True).
4. The solution is $(4, 3)$.

Teacher's SAT Pro-Tip:
Notice that $3x + 2y = 18$ and $3x - 2y = 6$ have equal $x$-coefficients and opposite $y$-coefficients. Adding eliminates $y$; subtracting eliminates $x$!`,
    distractorExplanations: {
      1: 'Tests (2, 6): 3(2)+2(6) = 18, but 3(2)-2(6) = -6 ≠ 6.',
      2: 'Tests (6, 0): 3(6)+2(0) = 18, but 3(6)-2(0) = 18 ≠ 6.',
      3: 'Tests (3, 4): 3(3)+2(4) = 17 ≠ 18.'
    },
    diagram: {
      title: 'System of Linear Equations in the xy-plane',
      xAxisLabel: 'x',
      yAxisLabel: 'y',
      xRange: [0, 8],
      yRange: [-4, 12],
      xStep: 1,
      yStep: 2,
      curves: [
        {
          type: 'line',
          label: '3x + 2y = 18',
          color: '#3b82f6',
          expression: '-1.5*x + 9',
          points: [[0, 9], [4, 3], [6, 0]],
          strokeWidth: 2.5
        },
        {
          type: 'line',
          label: '3x - 2y = 6',
          color: '#10b981',
          expression: '1.5*x - 3',
          points: [[2, 0], [4, 3], [6, 6]],
          strokeWidth: 2.5
        }
      ]
    }
  },
  {
    id: 'ch3-sq5',
    number: 5,
    exerciseNumber: 3,
    exerciseTitle: 'Exercise 3: Systems of Equations & Quadratic Equations Practice',
    question: 'Which of the following systems of equations has the solution (2, 5)?',
    options: [
      'x + y = 7 and x - y = 3',
      'x + y = 8 and 2x + y = 9',
      'x + 2y = 12 and x - y = -3',
      '2x + y = 10 and x - y = 1'
    ],
    correctIndex: 2,
    correctAnswerText: 'x + 2y = 12 and x - y = -3',
    explanation: `Step-by-Step Algebraic Verification:
Test $(x, y) = (2, 5)$ in each option:
- Option A: $2 + 5 = 7$ (True), but $2 - 5 = -3 \\neq 3$ (False).
- Option B: $2 + 5 = 7 \\neq 8$ (False).
- Option C:
  $$x + 2y = 2 + 2(5) = 2 + 10 = 12 \\quad \\checkmark$$
  $$x - y = 2 - 5 = -3 \\quad \\checkmark$$
  Both equations are satisfied!
- Option D: $2(2) + 5 = 9 \\neq 10$ (False).

Teacher's SAT Pro-Tip:
Plug-and-check strategy! When asked which system has a known coordinate solution, substitute $(x, y)$ directly into both equations of each option. The correct system must make both true.`,
    distractorExplanations: {
      0: 'Has solution (5, 2), not (2, 5).',
      1: 'Has solution (1, 7), not (2, 5).',
      3: 'Has solution (3.67, 2.67), not (2, 5).'
    },
    diagram: {
      title: 'Target Coordinate Point (2, 5) in the xy-plane',
      xAxisLabel: 'x',
      yAxisLabel: 'y',
      xRange: [-2, 8],
      yRange: [0, 8],
      xStep: 1,
      yStep: 1,
      curves: [
        {
          type: 'points',
          label: 'Point P',
          color: '#ef4444',
          points: [[2, 5]],
          highlightPoints: [
            { x: 2, y: 5, label: '(2, 5)', color: '#ef4444' }
          ]
        }
      ]
    }
  },
  {
    id: 'ch3-sq6',
    number: 6,
    exerciseNumber: 3,
    exerciseTitle: 'Exercise 3: Systems of Equations & Quadratic Equations Practice',
    question: 'How many solutions does the following system of linear equations have?\ny = 3x + 4\ny = 3x - 9',
    options: ['0', '1', '2', 'Infinitely many'],
    correctIndex: 0,
    correctAnswerText: '0',
    explanation: `Step-by-Step Algebraic Solution:
1. Examine the slopes and y-intercepts of both lines:
   - Line 1: $m_1 = 3$, $b_1 = 4$
   - Line 2: $m_2 = 3$, $b_2 = -9$
2. Since $m_1 = m_2 = 3$, the lines have identical slopes and are parallel.
3. Since $b_1 \\neq b_2$ ($4 \\neq -9$), the lines are distinct parallel lines that never intersect.
4. Parallel lines have 0 points of intersection, meaning the system has 0 solutions (no solution).

Teacher's SAT Pro-Tip:
Parallel Line Rule:
- Same slope + Different y-intercept $\\implies$ 0 solutions (Parallel).
- Same slope + Same y-intercept $\\implies$ Infinitely many solutions (Identical).
- Different slopes $\\implies$ Exactly 1 solution.`,
    distractorExplanations: {
      1: 'One solution requires different slopes ($m_1 \\neq m_2$).',
      2: 'Two linear equations in two variables can never intersect at exactly 2 points.',
      3: 'Infinitely many solutions requires identical equations with matching y-intercepts.'
    },
    diagram: {
      title: 'System of Linear Equations in the xy-plane',
      xAxisLabel: 'x',
      yAxisLabel: 'y',
      xRange: [-4, 6],
      yRange: [-12, 16],
      xStep: 1,
      yStep: 4,
      curves: [
        {
          type: 'line',
          label: 'y = 3x + 4',
          color: '#3b82f6',
          expression: '3*x + 4',
          points: [[-4, -8], [0, 4], [4, 16]],
          strokeWidth: 2.5
        },
        {
          type: 'line',
          label: 'y = 3x - 9',
          color: '#dc2626',
          expression: '3*x - 9',
          points: [[-1, -12], [0, -9], [5, 6]],
          strokeWidth: 2.5,
          style: 'dashed'
        }
      ]
    }
  },
  {
    id: 'ch3-sq7',
    number: 7,
    exerciseNumber: 3,
    exerciseTitle: 'Exercise 3: Systems of Equations & Quadratic Equations Practice',
    question: 'How many solutions does the following system of equations have?\ny = -2x + 6\n2y = -4x + 12',
    options: ['0', '1', '2', 'Infinitely many'],
    correctIndex: 3,
    correctAnswerText: 'Infinitely many',
    explanation: `Step-by-Step Algebraic Solution:
1. Take the second equation $2y = -4x + 12$ and divide every term by 2:
   $$\\frac{2y}{2} = \\frac{-4x}{2} + \\frac{12}{2} \\implies y = -2x + 6$$
2. Compare with the first equation: $y = -2x + 6$.
3. Both equations are mathematically identical, describing the exact same line in the coordinate plane.
4. Every point on the line satisfies both equations, resulting in infinitely many solutions.

Teacher's SAT Pro-Tip:
If multiplying or dividing one entire equation by a constant scalar transforms it into the other equation, the system represents coincident lines with infinitely many solutions!`,
    distractorExplanations: {
      0: 'Zero solutions occurs when lines are parallel with different y-intercepts.',
      1: 'One solution occurs when lines have different slopes and cross at a single point.',
      2: 'A system of two linear equations cannot have exactly 2 solutions.'
    },
    diagram: {
      title: 'Graph of Equations in the xy-plane',
      xAxisLabel: 'x',
      yAxisLabel: 'y',
      xRange: [-2, 6],
      yRange: [-4, 12],
      xStep: 1,
      yStep: 2,
      curves: [
        {
          type: 'line',
          label: 'y = -2x + 6',
          color: '#8b5cf6',
          expression: '-2*x + 6',
          points: [[-1, 8], [0, 6], [3, 0], [5, -4]],
          strokeWidth: 3
        }
      ]
    }
  },
  {
    id: 'ch3-sq8',
    number: 8,
    exerciseNumber: 3,
    exerciseTitle: 'Exercise 3: Systems of Equations & Quadratic Equations Practice',
    question: 'How many solutions does the following system of linear equations have?\ny = 5x + 1\ny = -2x + 15',
    options: ['0', '1', '2', 'Infinitely many'],
    correctIndex: 1,
    correctAnswerText: '1',
    explanation: `Step-by-Step Algebraic Solution:
1. Examine the slopes:
   - Line 1 has slope $m_1 = 5$.
   - Line 2 has slope $m_2 = -2$.
2. Since $m_1 \\neq m_2$ ($5 \\neq -2$), the two lines are non-parallel and must intersect at exactly one point in the Cartesian plane.
3. Solving for the intersection:
   $$5x + 1 = -2x + 15 \\implies 7x = 14 \\implies x = 2$$
   $$y = 5(2) + 1 = 11$$
4. The system has exactly 1 solution at $(2, 11)$.

Teacher's SAT Pro-Tip:
Different slopes guarantee exactly ONE intersection! You do not even need to compute $(2, 11)$ to answer how many solutions exist.`,
    distractorExplanations: {
      0: 'Zero solutions requires equal slopes with different y-intercepts.',
      2: 'Two lines cannot cross twice in Euclidean geometry.',
      3: 'Infinitely many solutions requires equal slopes and equal y-intercepts.'
    },
    diagram: {
      title: 'System of Linear Equations in the xy-plane',
      xAxisLabel: 'x',
      yAxisLabel: 'y',
      xRange: [-2, 6],
      yRange: [0, 20],
      xStep: 1,
      yStep: 2,
      curves: [
        {
          type: 'line',
          label: 'y = 5x + 1',
          color: '#3b82f6',
          expression: '5*x + 1',
          points: [[0, 1], [2, 11], [3, 16]],
          strokeWidth: 2.5
        },
        {
          type: 'line',
          label: 'y = -2x + 15',
          color: '#10b981',
          expression: '-2*x + 15',
          points: [[0, 15], [2, 11], [5, 5]],
          strokeWidth: 2.5
        }
      ]
    }
  },
  {
    id: 'ch3-sq9',
    number: 9,
    exerciseNumber: 3,
    exerciseTitle: 'Exercise 3: Systems of Equations & Quadratic Equations Practice',
    question: 'A school sells student tickets for $6 each and adult tickets for $10 each. A total of 30 tickets are sold for a total revenue of $228. If x represents the number of $6 tickets and y represents the number of $10 tickets, which system of equations models this situation?',
    options: [
      'x + y = 30 and 6x + 10y = 228',
      'x + y = 228 and 6x + 10y = 30',
      '6x + y = 30 and 10x + y = 228',
      'x + y = 36 and 6x + 10y = 228'
    ],
    correctIndex: 0,
    correctAnswerText: 'x + y = 30 and 6x + 10y = 228',
    explanation: `Step-by-Step Translation Walkthrough:
1. Define the physical quantities:
   - $x = \\text{number of } \\$6 \\text{ tickets}$
   - $y = \\text{number of } \\$10 \\text{ tickets}$
2. Build the Total Quantity Equation:
   $$\\text{Total tickets} = x + y = 30$$
3. Build the Total Revenue Equation:
   $$\\text{Total money} = 6x + 10y = 228$$
4. Combine into the standard system:
   $$x + y = 30$$
   $$6x + 10y = 228$$

Teacher's SAT Pro-Tip:
The Two-Equation Real-World Rule:
- Equation 1 represents counts/quantities: $x + y = \\text{Total Count}$.
- Equation 2 represents monetary/weighted values: $(\\text{Price}_1)x + (\\text{Price}_2)y = \\text{Total Value}$.`,
    distractorExplanations: {
      1: 'Swaps total count (30) with total revenue (228).',
      2: 'Incorrectly assigns money coefficients to individual count sums.',
      3: 'Uses an arbitrary ticket total of 36 instead of 30.'
    },
    diagram: {
      title: 'Word Problem Linear Models in the xy-plane',
      xAxisLabel: 'x ($6 tickets)',
      yAxisLabel: 'y ($10 tickets)',
      xRange: [0, 35],
      yRange: [0, 35],
      xStep: 5,
      yStep: 5,
      curves: [
        {
          type: 'line',
          label: 'x + y = 30',
          color: '#3b82f6',
          expression: '-x + 30',
          points: [[0, 30], [18, 12], [30, 0]],
          strokeWidth: 2.5
        },
        {
          type: 'line',
          label: '6x + 10y = 228',
          color: '#10b981',
          expression: '-0.6*x + 22.8',
          points: [[0, 22.8], [18, 12], [38, 0]],
          strokeWidth: 2.5
        }
      ]
    }
  },
  {
    id: 'ch3-sq10',
    number: 10,
    exerciseNumber: 3,
    exerciseTitle: 'Exercise 3: Systems of Equations & Quadratic Equations Practice',
    question: 'Consider the following system of linear equations:\ny = 2x + 5\ny = kx + 5\n\nFor what value of constant k does this system of equations have infinitely many solutions?',
    options: ['0', '1', '2', '5'],
    correctIndex: 2,
    correctAnswerText: '2',
    explanation: `Step-by-Step Algebraic Solution:
1. For two linear equations to have infinitely many solutions, they must represent the exact same line.
2. The equations already have matching y-intercepts: $b_1 = 5$ and $b_2 = 5$.
3. To be identical, their slopes must also be equal:
   $$k = 2$$
4. If $k = 2$, both equations become $y = 2x + 5$, which has infinitely many solutions.

Teacher's SAT Pro-Tip:
Match coefficients! For $y = m_1x + b_1$ and $y = m_2x + b_2$ to be identical, require $m_1 = m_2$ and $b_1 = b_2$.`,
    distractorExplanations: {
      0: 'If k = 0, y = 5 intersects y = 2x + 5 at exactly one point (0, 5).',
      1: 'If k = 1, y = x + 5 intersects y = 2x + 5 at (0, 5).',
      3: 'k = 5 matches the y-intercept, not the required slope of 2.'
    },
    diagram: {
      title: 'Graph of y = 2x + 5 in the xy-plane',
      xAxisLabel: 'x',
      yAxisLabel: 'y',
      xRange: [-4, 4],
      yRange: [0, 12],
      xStep: 1,
      yStep: 2,
      curves: [
        {
          type: 'line',
          label: 'y = 2x + 5',
          color: '#8b5cf6',
          expression: '2*x + 5',
          points: [[-3, -1], [0, 5], [3, 11]],
          strokeWidth: 3
        }
      ]
    }
  },

  // ==========================================
  // SECTION 2: QUADRATIC EQUATIONS (Q11 - Q20)
  // ==========================================
  {
    id: 'ch3-sq11',
    number: 11,
    exerciseNumber: 3,
    exerciseTitle: 'Exercise 3: Systems of Equations & Quadratic Equations Practice',
    question: 'Solve the quadratic equation by factoring:\nx² - 8x + 15 = 0\n\nWhat are the solutions for x?',
    options: ['2, 6', '3, 5', '-3, -5', '1, 15'],
    correctIndex: 1,
    correctAnswerText: '3, 5',
    explanation: `Step-by-Step Factoring Walkthrough:
1. Identify the coefficients: $a = 1$, $b = -8$, $c = 15$.
2. Find two numbers whose product is $+15$ and whose sum is $-8$:
   $$(-3) \\times (-5) = 15$$
   $$(-3) + (-5) = -8$$
3. Factor the quadratic:
   $$(x - 3)(x - 5) = 0$$
4. Apply the Zero-Product Property:
   $$x - 3 = 0 \\implies x = 3$$
   $$x - 5 = 0 \\implies x = 5$$
5. The solutions are $x = 3$ and $x = 5$.

Teacher's SAT Pro-Tip:
Sign Watch Rule: When $c > 0$ and $b < 0$, both binomial factor constants must be negative: $(x - p)(x - q) = 0$, giving two POSITIVE roots $x = p, q$!`,
    distractorExplanations: {
      0: 'Numbers 2 and 6 sum to 8, but product is 12 ≠ 15.',
      2: 'Confuses factor constants with roots; (x - 3)(x - 5) = 0 yields +3 and +5, not -3 and -5.',
      3: 'Numbers 1 and 15 multiply to 15, but sum to 16 ≠ -8.'
    },
    diagram: {
      title: 'Graph of y = x² - 8x + 15 in the xy-plane',
      xAxisLabel: 'x',
      yAxisLabel: 'y',
      xRange: [1, 7],
      yRange: [-2, 8],
      xStep: 1,
      yStep: 2,
      curves: [
        {
          type: 'function',
          fnType: 'parabola',
          label: 'y = x² - 8x + 15',
          color: '#3b82f6',
          expression: 'x^2 - 8*x + 15',
          points: [
            [1, 8], [2, 3], [3, 0], [4, -1], [5, 0], [6, 3], [7, 8]
          ]
        }
      ]
    }
  },
  {
    id: 'ch3-sq12',
    number: 12,
    exerciseNumber: 3,
    exerciseTitle: 'Exercise 3: Systems of Equations & Quadratic Equations Practice',
    question: 'What are the solutions to the quadratic equation?\nx² + 5x - 14 = 0',
    options: ['-7, 2', '-2, 7', '1, -14', '2, 7'],
    correctIndex: 0,
    correctAnswerText: '-7, 2',
    explanation: `Step-by-Step Factoring Walkthrough:
1. Find two numbers that multiply to $c = -14$ and add to $b = +5$:
   $$(+7) \\times (-2) = -14$$
   $$(+7) + (-2) = +5$$
2. Rewrite as factored binomials:
   $$(x + 7)(x - 2) = 0$$
3. Solve for $x$ using zero-product property:
   $$x + 7 = 0 \\implies x = -7$$
   $$x - 2 = 0 \\implies x = 2$$
4. Solutions: $x = -7, 2$.

Teacher's SAT Pro-Tip:
Watch the root inversion! The factor $(x + 7)$ produces root $x = -7$, and factor $(x - 2)$ produces root $x = 2$.`,
    distractorExplanations: {
      1: 'Flipped signs: corresponds to factors (x - 7)(x + 2) = x² - 5x - 14.',
      2: 'Factors of -14 that add to -13, not +5.',
      3: 'Positive pair: gives sum 9 and product 14.'
    },
    diagram: {
      title: 'Graph of y = x² + 5x - 14 in the xy-plane',
      xAxisLabel: 'x',
      yAxisLabel: 'y',
      xRange: [-9, 4],
      yRange: [-22, 10],
      xStep: 2,
      yStep: 5,
      curves: [
        {
          type: 'function',
          fnType: 'parabola',
          label: 'y = x² + 5x - 14',
          color: '#3b82f6',
          expression: 'x^2 + 5*x - 14',
          points: [
            [-8, 10], [-7, 0], [-5, -14], [-2.5, -20.25], [0, -14], [2, 0], [3, 10]
          ]
        }
      ]
    }
  },
  {
    id: 'ch3-sq13',
    number: 13,
    exerciseNumber: 3,
    exerciseTitle: 'Exercise 3: Systems of Equations & Quadratic Equations Practice',
    question: 'Solve the equation:\nx² - 49 = 0\n\nWhat are the solutions for x?',
    options: ['7 only', '-7 only', '-7 and 7', '49 and -49'],
    correctIndex: 2,
    correctAnswerText: '-7 and 7',
    explanation: `Step-by-Step Algebraic Solution:
Method 1 (Difference of Squares):
1. Recognize $x^2 - 49 = x^2 - 7^2 = (x - 7)(x + 7) = 0$.
2. Setting each factor to zero yields $x = 7$ or $x = -7$.

Method 2 (Square Root Property):
1. $x^2 = 49$.
2. Take square roots of both sides: $x = \\pm \\sqrt{49} = \\pm 7$.

Teacher's SAT Pro-Tip:
Never forget the negative root! When taking square roots to solve $x^2 = k$, always write $x = \\pm \\sqrt{k}$.`,
    distractorExplanations: {
      0: 'Misses the negative root (-7).',
      1: 'Misses the positive root (+7).',
      3: 'Confuses square root 7 with the constant 49.'
    },
    diagram: {
      title: 'Graph of y = x² - 49 in the xy-plane',
      xAxisLabel: 'x',
      yAxisLabel: 'y',
      xRange: [-10, 10],
      yRange: [-55, 20],
      xStep: 2,
      yStep: 10,
      curves: [
        {
          type: 'function',
          fnType: 'parabola',
          label: 'y = x² - 49',
          color: '#3b82f6',
          expression: 'x^2 - 49',
          points: [
            [-9, 32], [-7, 0], [-5, -24], [0, -49], [5, -24], [7, 0], [9, 32]
          ]
        }
      ]
    }
  },
  {
    id: 'ch3-sq14',
    number: 14,
    exerciseNumber: 3,
    exerciseTitle: 'Exercise 3: Systems of Equations & Quadratic Equations Practice',
    question: 'Which of the following expressions is algebraically equivalent to:\nx² + 12x + 36',
    options: ['(x + 6)²', '(x + 12)²', '(x - 6)²', '(x - 12)²'],
    correctIndex: 0,
    correctAnswerText: '(x + 6)²',
    explanation: `Step-by-Step Expansion Check:
1. Recognize the perfect square trinomial identity:
   $$(x + a)^2 = x^2 + 2ax + a^2$$
2. Here, $a^2 = 36 \\implies a = 6$.
3. Check middle term: $2ax = 2(6)x = 12x$.
4. Thus, $x^2 + 12x + 36 = (x + 6)^2$.

Teacher's SAT Pro-Tip:
Half the middle coefficient squared equals the last term: $(12/2)^2 = 6^2 = 36$. This confirms a perfect square binomial $(x + 6)^2$ instantly!`,
    distractorExplanations: {
      1: '(x + 12)² expands to x² + 24x + 144.',
      2: '(x - 6)² expands to x² - 12x + 36 with negative middle sign.',
      3: '(x - 12)² expands to x² - 24x + 144.'
    },
    diagram: {
      title: 'Graph of y = x² + 12x + 36 in the xy-plane',
      xAxisLabel: 'x',
      yAxisLabel: 'y',
      xRange: [-10, -2],
      yRange: [-1, 18],
      xStep: 1,
      yStep: 3,
      curves: [
        {
          type: 'function',
          fnType: 'parabola',
          label: 'y = (x + 6)²',
          color: '#3b82f6',
          expression: '(x + 6)^2',
          points: [
            [-9, 9], [-8, 4], [-7, 1], [-6, 0], [-5, 1], [-4, 4], [-3, 9]
          ]
        }
      ]
    }
  },
  {
    id: 'ch3-sq15',
    number: 15,
    exerciseNumber: 3,
    exerciseTitle: 'Exercise 3: Systems of Equations & Quadratic Equations Practice',
    question: 'What are the solutions to the factored equation?\n(x - 4)(x + 9) = 0',
    options: ['4 and 9', '-4 and 9', '4 and -9', '-4 and -9'],
    correctIndex: 2,
    correctAnswerText: '4 and -9',
    explanation: `Step-by-Step Algebraic Solution:
1. By the Zero-Product Property, if $A \\cdot B = 0$, then $A = 0$ or $B = 0$.
2. Set each factor equal to zero:
   $$x - 4 = 0 \\implies x = 4$$
   $$x + 9 = 0 \\implies x = -9$$
3. Therefore, the solutions are $x = 4$ and $x = -9$.

Teacher's SAT Pro-Tip:
Opposite Sign Rule: $(x - r)$ gives root $+r$, while $(x + s)$ gives root $-s$.`,
    distractorExplanations: {
      0: 'Fails to invert the sign on (x + 9).',
      1: 'Flipped signs on both factors.',
      3: 'Fails to invert the sign on (x - 4).'
    },
    diagram: {
      title: 'Graph of y = (x - 4)(x + 9) in the xy-plane',
      xAxisLabel: 'x',
      yAxisLabel: 'y',
      xRange: [-11, 6],
      yRange: [-45, 15],
      xStep: 2,
      yStep: 10,
      curves: [
        {
          type: 'function',
          fnType: 'parabola',
          label: 'y = (x - 4)(x + 9)',
          color: '#3b82f6',
          expression: '(x - 4)*(x + 9)',
          points: [
            [-10, 14], [-9, 0], [-5, -36], [-2.5, -42.25], [0, -36], [4, 0], [5, 14]
          ]
        }
      ]
    }
  },
  {
    id: 'ch3-sq16',
    number: 16,
    exerciseNumber: 3,
    exerciseTitle: 'Exercise 3: Systems of Equations & Quadratic Equations Practice',
    question: 'How many real solutions does the following quadratic equation have?\nx² + 6x + 11 = 0',
    options: ['0', '1', '2', '3'],
    correctIndex: 0,
    correctAnswerText: '0',
    explanation: `Step-by-Step Discriminant Analysis:
1. Identify coefficients: $a = 1$, $b = 6$, $c = 11$.
2. Compute the discriminant $\\Delta = b^2 - 4ac$:
   $$\\Delta = 6^2 - 4(1)(11) = 36 - 44 = -8$$
3. Since $\\Delta < 0$, the quadratic equation has no real solutions (0 real solutions).
4. Graphically, the parabola opens upward with minimum vertex at $(-3, 2)$ which lies entirely above the x-axis.

Teacher's SAT Pro-Tip:
Discriminant Decision Rule:
- $\\Delta > 0 \\implies 2$ real solutions.
- $\\Delta = 0 \\implies 1$ real solution.
- $\\Delta < 0 \\implies 0$ real solutions.`,
    distractorExplanations: {
      1: 'Requires discriminant to be exactly equal to 0.',
      2: 'Requires discriminant to be positive (> 0).',
      3: 'Quadratic equations can have at most 2 solutions.'
    },
    diagram: {
      title: 'Graph of y = x² + 6x + 11 in the xy-plane',
      xAxisLabel: 'x',
      yAxisLabel: 'y',
      xRange: [-6, 0],
      yRange: [-2, 14],
      xStep: 1,
      yStep: 2,
      curves: [
        {
          type: 'function',
          fnType: 'parabola',
          label: 'y = x² + 6x + 11',
          color: '#3b82f6',
          expression: 'x^2 + 6*x + 11',
          points: [
            [-6, 11], [-5, 6], [-4, 3], [-3, 2], [-2, 3], [-1, 6], [0, 11]
          ]
        }
      ]
    }
  },
  {
    id: 'ch3-sq17',
    number: 17,
    exerciseNumber: 3,
    exerciseTitle: 'Exercise 3: Systems of Equations & Quadratic Equations Practice',
    question: 'How many distinct real solutions does the following equation have?\n2x² - 8x + 8 = 0',
    options: ['0', '1', '2', '4'],
    correctIndex: 1,
    correctAnswerText: '1',
    explanation: `Step-by-Step Algebraic Solution:
1. Divide the entire equation by 2:
   $$x^2 - 4x + 4 = 0$$
2. Factor as a perfect square:
   $$(x - 2)^2 = 0 \\implies x = 2$$
3. Discriminant Check:
   $$\\Delta = (-8)^2 - 4(2)(8) = 64 - 64 = 0$$
4. Since $\\Delta = 0$, there is exactly 1 distinct real solution (a double root at $x = 2$).

Teacher's SAT Pro-Tip:
When $\\Delta = 0$, the parabola's vertex touches the x-axis tangentially at a single point!`,
    distractorExplanations: {
      0: 'Occurs only when discriminant is strictly negative.',
      2: 'Occurs only when discriminant is strictly positive.',
      3: 'Quadratics cannot have 4 real solutions.'
    },
    diagram: {
      title: 'Graph of y = 2x² - 8x + 8 in the xy-plane',
      xAxisLabel: 'x',
      yAxisLabel: 'y',
      xRange: [-1, 5],
      yRange: [-1, 10],
      xStep: 1,
      yStep: 2,
      curves: [
        {
          type: 'function',
          fnType: 'parabola',
          label: 'y = 2x² - 8x + 8',
          color: '#3b82f6',
          expression: '2*x^2 - 8*x + 8',
          points: [
            [-0.5, 12.5], [0, 8], [1, 2], [2, 0], [3, 2], [4, 8]
          ]
        }
      ]
    }
  },
  {
    id: 'ch3-sq18',
    number: 18,
    exerciseNumber: 3,
    exerciseTitle: 'Exercise 3: Systems of Equations & Quadratic Equations Practice',
    question: 'What is the x-coordinate of the vertex of the parabola?\ny = x² - 10x + 7',
    options: ['-10', '-5', '5', '10'],
    correctIndex: 2,
    correctAnswerText: '5',
    explanation: `Step-by-Step Vertex Formula Calculation:
1. In standard form $y = ax^2 + bx + c$, the x-coordinate of the vertex is given by:
   $$x_v = -\\frac{b}{2a}$$
2. For $y = x^2 - 10x + 7$, $a = 1$ and $b = -10$:
   $$x_v = -\\frac{-10}{2(1)} = \\frac{10}{2} = 5$$
3. Therefore, the x-coordinate of the vertex is 5.

Teacher's SAT Pro-Tip:
Axis of Symmetry Formula: $x = -b / (2a)$! Memorize this formula—it appears on almost every SAT math section.`,
    distractorExplanations: {
      0: 'b coefficient value (-10) without applying -b/(2a).',
      1: 'Fails to negate the negative b term: -10 / 2 = -5.',
      3: 'Fails to divide by 2a: -(-10) = 10.'
    },
    diagram: {
      title: 'Graph of y = x² - 10x + 7 in the xy-plane',
      xAxisLabel: 'x',
      yAxisLabel: 'y',
      xRange: [0, 10],
      yRange: [-20, 10],
      xStep: 1,
      yStep: 5,
      curves: [
        {
          type: 'function',
          fnType: 'parabola',
          label: 'y = x² - 10x + 7',
          color: '#3b82f6',
          expression: 'x^2 - 10*x + 7',
          points: [
            [0, 7], [2, -9], [4, -17], [5, -18], [6, -17], [8, -9], [10, 7]
          ]
        }
      ]
    }
  },
  {
    id: 'ch3-sq19',
    number: 19,
    exerciseNumber: 3,
    exerciseTitle: 'Exercise 3: Systems of Equations & Quadratic Equations Practice',
    question: 'What is the x-coordinate of the vertex of the quadratic function?\ny = 2x² + 12x - 3',
    options: ['-3', '-6', '3', '6'],
    correctIndex: 0,
    correctAnswerText: '-3',
    explanation: `Step-by-Step Vertex Calculation:
1. Identify coefficients: $a = 2$, $b = 12$, $c = -3$.
2. Apply the vertex formula $x_v = -\\frac{b}{2a}$:
   $$x_v = -\\frac{12}{2(2)} = -\\frac{12}{4} = -3$$
3. Therefore, the x-coordinate of the vertex is $-3$.

Teacher's SAT Pro-Tip:
Always multiply the denominator $2a$ first before dividing: $2 \\times 2 = 4$, then $-12 / 4 = -3$.`,
    distractorExplanations: {
      1: 'Fails to multiply denominator by a: -12 / 2 = -6.',
      2: 'Sign error: forgot the negative sign in -b/(2a).',
      3: 'Combined sign error and forgotten coefficient a.'
    },
    diagram: {
      title: 'Graph of y = 2x² + 12x - 3 in the xy-plane',
      xAxisLabel: 'x',
      yAxisLabel: 'y',
      xRange: [-6, 1],
      yRange: [-24, 6],
      xStep: 1,
      yStep: 4,
      curves: [
        {
          type: 'function',
          fnType: 'parabola',
          label: 'y = 2x² + 12x - 3',
          color: '#3b82f6',
          expression: '2*x^2 + 12*x - 3',
          points: [
            [-6, -3], [-5, -13], [-4, -19], [-3, -21], [-2, -19], [-1, -13], [0, -3]
          ]
        }
      ]
    }
  },
  {
    id: 'ch3-sq20',
    number: 20,
    exerciseNumber: 3,
    exerciseTitle: 'Exercise 3: Systems of Equations & Quadratic Equations Practice',
    question: 'A quadratic equation has a discriminant equal to 0. How many distinct real solutions does it have?',
    options: ['0', '1', '2', 'Infinitely many'],
    correctIndex: 1,
    correctAnswerText: '1',
    explanation: `Step-by-Step Conceptual Analysis:
1. In the quadratic formula $x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$, the discriminant is $D = b^2 - 4ac$.
2. When $D = 0$, the formula simplifies to:
   $$x = \\frac{-b \\pm \\sqrt{0}}{2a} = -\\frac{b}{2a}$$
3. Because adding and subtracting zero gives the identical value, there is exactly ONE distinct real solution (a repeated root of multiplicity 2).

Teacher's SAT Pro-Tip:
$D = 0$ means the parabola is tangent to the x-axis with exactly 1 real root!`,
    distractorExplanations: {
      0: 'Zero solutions occurs when D < 0.',
      2: 'Two distinct solutions occurs when D > 0.',
      3: 'Quadratic equations cannot have infinitely many solutions.'
    },
    diagram: {
      title: 'Parabolas in the xy-plane',
      xAxisLabel: 'x',
      yAxisLabel: 'y',
      xRange: [-4, 4],
      yRange: [-4, 6],
      xStep: 1,
      yStep: 2,
      curves: [
        {
          type: 'function',
          fnType: 'parabola',
          label: 'Curve A',
          color: '#10b981',
          expression: 'x^2',
          points: [[-2, 4], [-1, 1], [0, 0], [1, 1], [2, 4]]
        },
        {
          type: 'function',
          fnType: 'parabola',
          label: 'Curve B',
          color: '#3b82f6',
          expression: 'x^2 - 4',
          points: [[-3, 5], [-2, 0], [0, -4], [2, 0], [3, 5]],
          style: 'dashed'
        },
        {
          type: 'function',
          fnType: 'parabola',
          label: 'Curve C',
          color: '#ef4444',
          expression: 'x^2 + 2',
          points: [[-2, 6], [-1, 3], [0, 2], [1, 3], [2, 6]],
          style: 'dotted'
        }
      ]
    }
  },

  // ==========================================
  // SECTION 3: QUADRATIC GRAPHS (Q21 - Q27)
  // ==========================================
  {
    id: 'ch3-sq21',
    number: 21,
    exerciseNumber: 3,
    exerciseTitle: 'Exercise 3: Systems of Equations & Quadratic Equations Practice',
    question: 'The graph of the quadratic equation y = -2x² + 7 opens in which direction?',
    options: ['Up', 'Down', 'Left', 'Right'],
    correctIndex: 1,
    correctAnswerText: 'Down',
    explanation: `Step-by-Step Graphical Analysis:
1. For any parabola in the form $y = ax^2 + bx + c$, the sign of the leading coefficient $a$ determines the vertical opening direction:
   - If $a > 0$, the parabola opens UP (vertex is a minimum).
   - If $a < 0$, the parabola opens DOWN (vertex is a maximum).
2. Here, $a = -2 < 0$.
3. Therefore, the parabola opens DOWN.

Teacher's SAT Pro-Tip:
Negative leading coefficient = sad parabola (opens down with a mountain peak maximum). Positive leading coefficient = happy parabola (opens up with a valley minimum)!`,
    distractorExplanations: {
      0: 'Opening up requires a positive leading coefficient a > 0.',
      2: 'Opening left/right corresponds to equations of the form x = ay² + by + c, not functions of x.',
      3: 'Functions y = f(x) never open horizontally to the right.'
    },
    diagram: {
      title: 'Graph of y = -2x² + 7 in the xy-plane',
      xAxisLabel: 'x',
      yAxisLabel: 'y',
      xRange: [-4, 4],
      yRange: [-10, 10],
      xStep: 1,
      yStep: 2,
      curves: [
        {
          type: 'function',
          fnType: 'parabola',
          label: 'y = -2x² + 7',
          color: '#ef4444',
          expression: '-2*x^2 + 7',
          points: [
            [-3, -11], [-2, -1], [-1, 5], [0, 7], [1, 5], [2, -1], [3, -11]
          ]
        }
      ]
    }
  },
  {
    id: 'ch3-sq22',
    number: 22,
    exerciseNumber: 3,
    exerciseTitle: 'Exercise 3: Systems of Equations & Quadratic Equations Practice',
    question: 'Which of the following quadratic equations has x-intercepts of 3 and -5?',
    options: [
      'x² + 2x - 15 = 0',
      'x² - 2x - 15 = 0',
      'x² + 8x + 15 = 0',
      'x² - 8x + 15 = 0'
    ],
    correctIndex: 0,
    correctAnswerText: 'x² + 2x - 15 = 0',
    explanation: `Step-by-Step Factor Reconstruction:
1. If the roots (x-intercepts) are $r_1 = 3$ and $r_2 = -5$, the quadratic factors as:
   $$(x - r_1)(x - r_2) = 0$$
   $$(x - 3)(x - (-5)) = 0 \\implies (x - 3)(x + 5) = 0$$
2. Expand the factored form:
   $$(x - 3)(x + 5) = x^2 + 5x - 3x - 15 = x^2 + 2x - 15 = 0$$
3. Therefore, $x^2 + 2x - 15 = 0$ is the correct equation.

Teacher's SAT Pro-Tip:
Vieta's Formulas Shortcut:
- Sum of roots = $3 + (-5) = -2 = -b/a \\implies b = 2$.
- Product of roots = $3 \\times (-5) = -15 = c/a \\implies c = -15$.`,
    distractorExplanations: {
      1: 'Has roots at -3 and +5: (x + 3)(x - 5) = x² - 2x - 15.',
      2: 'Has roots at -3 and -5: (x + 3)(x + 5) = x² + 8x + 15.',
      3: 'Has roots at +3 and +5: (x - 3)(x - 5) = x² - 8x + 15.'
    },
    diagram: {
      title: 'Parabola in the xy-plane',
      xAxisLabel: 'x',
      yAxisLabel: 'y',
      xRange: [-7, 5],
      yRange: [-18, 10],
      xStep: 1,
      yStep: 4,
      curves: [
        {
          type: 'function',
          fnType: 'parabola',
          label: 'y = f(x)',
          color: '#3b82f6',
          expression: 'x^2 + 2*x - 15',
          points: [
            [-6, 9], [-5, 0], [-3, -12], [-1, -16], [1, -12], [3, 0], [4, 9]
          ]
        }
      ]
    }
  },
  {
    id: 'ch3-sq23',
    number: 23,
    exerciseNumber: 3,
    exerciseTitle: 'Exercise 3: Systems of Equations & Quadratic Equations Practice',
    question: 'A quadratic equation has two distinct real roots. What must be true about its discriminant Δ?',
    options: ['It is negative', 'It equals zero', 'It is positive', 'It equals 1'],
    correctIndex: 2,
    correctAnswerText: 'It is positive',
    explanation: `Step-by-Step Conceptual Analysis:
1. The quadratic formula is $x = \\frac{-b \\pm \\sqrt{\\Delta}}{2a}$, where $\\Delta = b^2 - 4ac$.
2. For the square root to produce two distinct real numbers (one added, one subtracted), the quantity under the radical $\\Delta$ must be strictly positive:
   $$\\Delta > 0$$
3. If $\\Delta = 0$, there is only 1 distinct root. If $\\Delta < 0$, roots are non-real complex numbers.
4. Thus, the discriminant must be positive.

Teacher's SAT Pro-Tip:
Distinct Real Roots $\\iff \\Delta > 0$. The parabola crosses the x-axis in two separate places!`,
    distractorExplanations: {
      0: 'A negative discriminant produces 0 real roots (complex imaginary conjugates).',
      1: 'A zero discriminant produces exactly 1 repeated real root.',
      3: 'Discriminant being 1 is just one specific positive case, not the general necessary condition.'
    },
    diagram: {
      title: 'Parabola in the xy-plane',
      xAxisLabel: 'x',
      yAxisLabel: 'y',
      xRange: [-4, 4],
      yRange: [-6, 6],
      xStep: 1,
      yStep: 2,
      curves: [
        {
          type: 'function',
          fnType: 'parabola',
          label: 'y = f(x)',
          color: '#3b82f6',
          expression: 'x^2 - 4',
          points: [[-3, 5], [-2, 0], [-1, -3], [0, -4], [1, -3], [2, 0], [3, 5]]
        }
      ]
    }
  },
  {
    id: 'ch3-sq24',
    number: 24,
    exerciseNumber: 3,
    exerciseTitle: 'Exercise 3: Systems of Equations & Quadratic Equations Practice',
    question: 'A parabola touches the x-axis at exactly one point. How many real solutions does its corresponding quadratic equation have?',
    options: ['0', '1', '2', 'Infinitely many'],
    correctIndex: 1,
    correctAnswerText: '1',
    explanation: `Step-by-Step Geometric Connection:
1. The x-intercepts of a function $y = f(x)$ correspond directly to the real solutions of $f(x) = 0$.
2. If the parabola touches the x-axis at exactly one point, that single point of contact is the tangent vertex.
3. Therefore, the equation has exactly 1 real solution (a root of multiplicity 2).

Teacher's SAT Pro-Tip:
Number of x-intercepts on graph = Number of real roots of equation!
- 2 x-intercepts $\\implies$ 2 real solutions.
- 1 x-intercept (tangent) $\\implies$ 1 real solution.
- 0 x-intercepts $\\implies$ 0 real solutions.`,
    distractorExplanations: {
      0: '0 real solutions corresponds to a parabola that never touches the x-axis.',
      2: '2 real solutions corresponds to a parabola crossing through the x-axis twice.',
      3: 'Quadratics never have infinitely many solutions.'
    },
    diagram: {
      title: 'Parabola in the xy-plane',
      xAxisLabel: 'x',
      yAxisLabel: 'y',
      xRange: [-2, 6],
      yRange: [-2, 8],
      xStep: 1,
      yStep: 2,
      curves: [
        {
          type: 'function',
          fnType: 'parabola',
          label: 'y = f(x)',
          color: '#10b981',
          expression: '(x - 2)^2',
          points: [[-1, 9], [0, 4], [1, 1], [2, 0], [3, 1], [4, 4], [5, 9]]
        }
      ]
    }
  },
  {
    id: 'ch3-sq25',
    number: 25,
    exerciseNumber: 3,
    exerciseTitle: 'Exercise 3: Systems of Equations & Quadratic Equations Practice',
    question: 'The quadratic function f(x) = (x - 4)² - 9 has what vertex coordinates (h, k)?',
    options: ['(-4, -9)', '(4, -9)', '(-4, 9)', '(4, 9)'],
    correctIndex: 1,
    correctAnswerText: '(4, -9)',
    explanation: `Step-by-Step Vertex Form Inspection:
1. The standard vertex form of a parabola is:
   $$f(x) = a(x - h)^2 + k$$
   where $(h, k)$ is the vertex.
2. Match terms with $f(x) = (x - 4)^2 - 9$:
   - $a = 1$
   - $(x - h) = (x - 4) \\implies h = 4$
   - $k = -9$
3. Therefore, the vertex is $(h, k) = (4, -9)$.

Teacher's SAT Pro-Tip:
Sign Rule in Vertex Form: In $(x - h)^2 + k$, the x-coordinate $h$ has the OPPOSITE sign of what appears in the parentheses, while the y-coordinate $k$ keeps the EXACT SAME sign as outside!`,
    distractorExplanations: {
      0: 'Fails to flip the sign inside parentheses (uses -4 instead of +4).',
      2: 'Flips both signs into (-4, 9).',
      3: 'Flipped the outside vertical constant (-9 to +9).'
    },
    diagram: {
      title: 'Graph of f(x) = (x - 4)² - 9 in the xy-plane',
      xAxisLabel: 'x',
      yAxisLabel: 'y',
      xRange: [0, 8],
      yRange: [-11, 8],
      xStep: 1,
      yStep: 3,
      curves: [
        {
          type: 'function',
          fnType: 'parabola',
          label: 'f(x) = (x - 4)² - 9',
          color: '#3b82f6',
          expression: '(x - 4)^2 - 9',
          points: [
            [1, 0], [2, -5], [3, -8], [4, -9], [5, -8], [6, -5], [7, 0]
          ]
        }
      ]
    }
  },
  {
    id: 'ch3-sq26',
    number: 26,
    exerciseNumber: 3,
    exerciseTitle: 'Exercise 3: Systems of Equations & Quadratic Equations Practice',
    question: 'What is the minimum value of the quadratic function?\nf(x) = (x - 3)² + 7',
    options: ['-7', '-3', '3', '7'],
    correctIndex: 3,
    correctAnswerText: '7',
    explanation: `Step-by-Step Minimum Value Analysis:
1. For all real numbers $x$, any squared quantity is non-negative:
   $$(x - 3)^2 \\ge 0$$
2. The smallest possible value of $(x - 3)^2$ is $0$, which occurs when $x = 3$.
3. Substitute $x = 3$ into the function:
   $$f(3) = (3 - 3)^2 + 7 = 0 + 7 = 7$$
4. Therefore, the minimum value (output $y$) of the function is $7$.

Teacher's SAT Pro-Tip:
"Minimum value" or "maximum value" of a function ALWAYS refers to the y-value of the vertex (which is $k$ in vertex form), NOT the x-value!`,
    distractorExplanations: {
      0: 'Sign error on vertical shift.',
      1: 'Flipped sign of horizontal vertex position.',
      2: 'Gives the x-value where minimum occurs (x = 3), not the minimum value itself.'
    },
    diagram: {
      title: 'Graph of f(x) = (x - 3)² + 7 in the xy-plane',
      xAxisLabel: 'x',
      yAxisLabel: 'y',
      xRange: [0, 6],
      yRange: [0, 18],
      xStep: 1,
      yStep: 3,
      curves: [
        {
          type: 'function',
          fnType: 'parabola',
          label: 'f(x) = (x - 3)² + 7',
          color: '#3b82f6',
          expression: '(x - 3)^2 + 7',
          points: [
            [0, 16], [1, 11], [2, 8], [3, 7], [4, 8], [5, 11], [6, 16]
          ]
        }
      ]
    }
  },
  {
    id: 'ch3-sq27',
    number: 27,
    exerciseNumber: 3,
    exerciseTitle: 'Exercise 3: Systems of Equations & Quadratic Equations Practice',
    question: 'What is the maximum value of the quadratic function?\nf(x) = -(x + 2)² + 11',
    options: ['-2', '2', '9', '11'],
    correctIndex: 3,
    correctAnswerText: '11',
    explanation: `Step-by-Step Maximum Value Walkthrough:
1. The term $-(x + 2)^2$ is always $\\le 0$ because squaring any real number is non-negative, and the negative sign in front makes it non-positive.
2. The greatest value $-(x + 2)^2$ can achieve is $0$, which happens when $x = -2$.
3. At $x = -2$:
   $$f(-2) = -(0)^2 + 11 = 11$$
4. Therefore, the maximum output value of the function is $11$.

Teacher's SAT Pro-Tip:
In $f(x) = -a(x - h)^2 + k$, the maximum value is always equal to $k$!`,
    distractorExplanations: {
      0: 'Gives the x-coordinate where the maximum occurs (x = -2), not the maximum value.',
      1: 'Flipped sign of x-coordinate.',
      2: 'Evaluates at x = 0 (f(0) = -4 + 11 = 7) or arithmetic error.'
    },
    diagram: {
      title: 'Graph of f(x) = -(x + 2)² + 11 in the xy-plane',
      xAxisLabel: 'x',
      yAxisLabel: 'y',
      xRange: [-5, 1],
      yRange: [0, 14],
      xStep: 1,
      yStep: 2,
      curves: [
        {
          type: 'function',
          fnType: 'parabola',
          label: 'f(x) = -(x + 2)² + 11',
          color: '#ef4444',
          expression: '-(x + 2)^2 + 11',
          points: [
            [-5, 2], [-4, 7], [-3, 10], [-2, 11], [-1, 10], [0, 7], [1, 2]
          ]
        }
      ]
    }
  },

  // ==========================================
  // SECTION 4: MIXED SYSTEMS & QUADRATICS (Q28 - Q30)
  // ==========================================
  {
    id: 'ch3-sq28',
    number: 28,
    exerciseNumber: 3,
    exerciseTitle: 'Exercise 3: Systems of Equations & Quadratic Equations Practice',
    question: 'Consider the following system of equations:\ny = x + 1\ny = x² - 5x + 7\n\nHow many real intersection points (x, y) does this system have?',
    options: ['0', '1', '2', '3'],
    correctIndex: 2,
    correctAnswerText: '2',
    explanation: `Step-by-Step System Intersection Analysis:
1. Set the two equations equal to each other to find points of intersection:
   $$x + 1 = x^2 - 5x + 7$$
2. Rearrange all terms onto one side in standard form $ax^2 + bx + c = 0$:
   $$x^2 - 6x + 6 = 0$$
3. Calculate the discriminant $\\Delta = b^2 - 4ac$:
   $$\\Delta = (-6)^2 - 4(1)(6) = 36 - 24 = 12$$
4. Since the discriminant is strictly positive ($\\Delta = 12 > 0$), the quadratic equation has 2 distinct real solutions ($x = 3 \\pm \\sqrt{3}$).
5. Each $x$-value yields a corresponding $y$-value on the line, meaning the line and parabola intersect at exactly 2 points.

Teacher's SAT Pro-Tip:
Linear-Quadratic Intersection Test: Equate line and parabola, bring to one side, and check $\\Delta = b^2 - 4ac$:
- $\\Delta > 0 \\implies 2$ intersections.
- $\\Delta = 0 \\implies 1$ tangent intersection.
- $\\Delta < 0 \\implies 0$ intersections (no contact).`,
    distractorExplanations: {
      0: 'Occurs if discriminant were negative.',
      1: 'Occurs if line were tangent with discriminant exactly equal to 0.',
      3: 'A line and parabola cannot intersect at more than 2 points.'
    },
    diagram: {
      title: 'Line and Parabola in the xy-plane',
      xAxisLabel: 'x',
      yAxisLabel: 'y',
      xRange: [0, 6],
      yRange: [0, 10],
      xStep: 1,
      yStep: 2,
      curves: [
        {
          type: 'function',
          fnType: 'parabola',
          label: 'y = x² - 5x + 7',
          color: '#3b82f6',
          expression: 'x^2 - 5*x + 7',
          points: [
            [0.5, 4.75], [1, 3], [2, 1], [2.5, 0.75], [3, 1], [4, 3], [5, 7]
          ]
        },
        {
          type: 'line',
          label: 'y = x + 1',
          color: '#10b981',
          expression: 'x + 1',
          points: [[0, 1], [1.27, 2.27], [4.73, 5.73], [6, 7]],
          strokeWidth: 2.5
        }
      ]
    }
  },
  {
    id: 'ch3-sq29',
    number: 29,
    exerciseNumber: 3,
    exerciseTitle: 'Exercise 3: Systems of Equations & Quadratic Equations Practice',
    question: 'A line and a parabola intersect at exactly one point in the coordinate plane. What does this imply about the corresponding system of equations?',
    options: [
      'It has no real solution.',
      'It has exactly one real solution.',
      'It has exactly two real solutions.',
      'It has infinitely many solutions.'
    ],
    correctIndex: 1,
    correctAnswerText: 'It has exactly one real solution.',
    explanation: `Step-by-Step Conceptual Walkthrough:
1. In coordinate geometry, points of intersection between graphs correspond one-to-one with simultaneous real solutions $(x, y)$ of the algebraic system.
2. If the line is tangent to the parabola, touching it at exactly 1 single point, the equated algebraic equation has a discriminant $\\Delta = 0$.
3. Thus, the system has exactly one real solution.

Teacher's SAT Pro-Tip:
Geometric Intersections = Algebraic Solutions!
1 intersection point $\\iff$ 1 real $(x, y)$ solution pair.`,
    distractorExplanations: {
      0: 'No intersection points means 0 real solutions.',
      2: 'Two intersection points means 2 real solutions.',
      3: 'A line and a parabola cannot be coincident (different degrees), so infinitely many solutions is impossible.'
    },
    diagram: {
      title: 'Line and Parabola in the xy-plane',
      xAxisLabel: 'x',
      yAxisLabel: 'y',
      xRange: [-2, 6],
      yRange: [-2, 10],
      xStep: 1,
      yStep: 2,
      curves: [
        {
          type: 'function',
          fnType: 'parabola',
          label: 'y = x² - 2x + 3',
          color: '#3b82f6',
          expression: 'x^2 - 2*x + 3',
          points: [[-1, 6], [0, 3], [1, 2], [2, 3], [3, 6]]
        },
        {
          type: 'line',
          label: 'y = 2x - 1',
          color: '#10b981',
          expression: '2*x - 1',
          points: [[0, -1], [2, 3], [4, 7]],
          strokeWidth: 2.5
        }
      ]
    }
  },
  {
    id: 'ch3-sq30',
    number: 30,
    exerciseNumber: 3,
    exerciseTitle: 'Exercise 3: Systems of Equations & Quadratic Equations Practice',
    question: 'How many real solutions does the following system of equations have?\ny = 2x + 3\ny = x² - 4x + 14',
    options: ['0', '1', '2', '3'],
    correctIndex: 0,
    correctAnswerText: '0',
    explanation: `Step-by-Step Algebraic Solution:
1. Set the linear and quadratic expressions equal:
   $$2x + 3 = x^2 - 4x + 14$$
2. Move all terms to the right side to write in standard form:
   $$x^2 - 6x + 11 = 0$$
3. Calculate the discriminant $\\Delta = b^2 - 4ac$:
   $$\\Delta = (-6)^2 - 4(1)(11) = 36 - 44 = -8$$
4. Since $\\Delta < 0$, the quadratic equation has no real solutions.
5. Therefore, the line $y = 2x + 3$ passes completely underneath the parabola $y = x^2 - 4x + 14$ without touching or crossing it, meaning the system has 0 real solutions.

Teacher's SAT Pro-Tip:
When $\\Delta < 0$, the line and parabola never meet in the real coordinate plane!`,
    distractorExplanations: {
      1: 'Requires discriminant to equal 0 (tangent line).',
      2: 'Requires discriminant to be positive (secant line).',
      3: 'Lines and parabolas cannot intersect at 3 points.'
    },
    diagram: {
      title: 'Line and Parabola in the xy-plane',
      xAxisLabel: 'x',
      yAxisLabel: 'y',
      xRange: [0, 6],
      yRange: [0, 20],
      xStep: 1,
      yStep: 4,
      curves: [
        {
          type: 'function',
          fnType: 'parabola',
          label: 'y = x² - 4x + 14',
          color: '#3b82f6',
          expression: 'x^2 - 4*x + 14',
          points: [[0, 14], [1, 11], [2, 10], [3, 11], [4, 14], [5, 19]]
        },
        {
          type: 'line',
          label: 'y = 2x + 3',
          color: '#dc2626',
          expression: '2*x + 3',
          points: [[0, 3], [2, 7], [5, 13]],
          strokeWidth: 2.5,
          style: 'dashed'
        }
      ]
    }
  }
];
