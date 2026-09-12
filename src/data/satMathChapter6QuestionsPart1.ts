import { MathExerciseQuestion } from './satMathConcepts';

export const CHAPTER_6_QUESTIONS_MODULE_1: MathExerciseQuestion[] = [
  {
    id: "ch6-q1",
    number: 1,
    exerciseNumber: 1,
    exerciseTitle: "Module 1: Easy / Medium Questions",
    question: "Solve the linear inequality: $5x - 9 > 21$. Which of the following represents the correct solution interval?",
    options: ["$x < 6$", "$x > 6$", "$x \\le 6$", "$x \\ge 6$"],
    correctIndex: 1,
    correctAnswerText: "$x > 6$",
    explanation: `Step-by-Step Mathematical Explanation:
1. Start with the given linear inequality:
   $$5x - 9 > 21$$
2. Add $9$ to both sides of the inequality to isolate the variable term:
   $$5x > 30$$
3. Divide both sides by the positive coefficient $5$. Since $5$ is positive, the inequality sign direction remains unchanged:
   $$x > 6$$

Tutor Pro-Tip:
Always verify boundary behavior! When plugging in $x = 6$, we get $5(6) - 9 = 21$. Since the inequality is strict ($>$), $x = 6$ is excluded (indicated by a dashed boundary line or open circle).`,
    diagram: {
      id: "ch6-q1-diagram",
      title: "Solution Region: x > 6",
      caption: "Graph of the half-plane representing x > 6 with a dashed boundary line at x = 6.",
      xAxisLabel: "x",
      yAxisLabel: "y",
      xRange: [0, 12],
      yRange: [-5, 5],
      xStep: 2,
      yStep: 2,
      curves: [
        {
          type: "vertical_line",
          xIntercept: 6,
          color: "#3b82f6",
          style: "dashed",
          shade: "right",
          shadeColor: "rgba(59, 130, 246, 0.15)",
          label: "x = 6"
        }
      ],
      textAnnotations: [
        { x: 8.5, y: 1.5, text: "Solution Region (x > 6)", color: "#1e3a8a", fontSize: 10, fontWeight: "bold" }
      ]
    }
  },
  {
    id: "ch6-q2",
    number: 2,
    exerciseNumber: 1,
    exerciseTitle: "Module 1: Easy / Medium Questions",
    question: "Solve the linear inequality: $-3x + 14 \\ge 29$. Which of the following represents the correct solution?",
    options: ["$x \\ge -5$", "$x \\le -5$", "$x > -5$", "$x < -5$"],
    correctIndex: 1,
    correctAnswerText: "$x \\le -5$",
    explanation: `Step-by-Step Mathematical Explanation:
1. Start with the inequality:
   $$-3x + 14 \\ge 29$$
2. Subtract $14$ from both sides to group the constants:
   $$-3x \\ge 15$$
3. Divide both sides by $-3$. 

CRITICAL TRAP:
Because we are dividing both sides by a negative number ($-3$), we MUST reverse the inequality sign:
   $$x \\le -5$$

Tutor Pro-Tip:
Never forget the sign-flip! Whenever you multiply or divide an inequality by any negative coefficient, the direction of the inequality MUST flip. Failure to do so is the #1 most common trap on the SAT.`,
    diagram: {
      id: "ch6-q2-diagram",
      title: "Solution Region: x <= -5",
      caption: "Graph of the half-plane representing x <= -5 with a solid boundary line at x = -5.",
      xAxisLabel: "x",
      yAxisLabel: "y",
      xRange: [-10, 0],
      yRange: [-5, 5],
      xStep: 2,
      yStep: 2,
      curves: [
        {
          type: "vertical_line",
          xIntercept: -5,
          color: "#3b82f6",
          style: "solid",
          shade: "left",
          shadeColor: "rgba(59, 130, 246, 0.15)",
          label: "x = -5"
        }
      ],
      textAnnotations: [
        { x: -8, y: 1.5, text: "Solution Region (x <= -5)", color: "#1e3a8a", fontSize: 10, fontWeight: "bold" }
      ]
    }
  },
  {
    id: "ch6-q3",
    number: 3,
    exerciseNumber: 1,
    exerciseTitle: "Module 1: Easy / Medium Questions",
    question: "Solve the inequality: $4(2x - 1) \\le 3x + 11$.",
    options: ["$x \\le 3$", "$x \\ge 3$", "$x < 3$", "$x > 3$"],
    correctIndex: 0,
    correctAnswerText: "$x \\le 3$",
    explanation: `Step-by-Step Mathematical Explanation:
1. Expand the left-hand side of the inequality using the distributive property:
   $$8x - 4 \\le 3x + 11$$
2. Subtract $3x$ from both sides to group the variable terms:
   $$5x - 4 \\le 11$$
3. Add $4$ to both sides to group constants:
   $$5x \\le 15$$
4. Divide by positive $5$ (the inequality sign remains unchanged):
   $$x \\le 3$$

Tutor Pro-Tip:
Always expand first! Distribute variables and constants completely on both sides before attempting to move terms.`,
    diagram: {
      id: "ch6-q3-diagram",
      title: "Solution Region: x <= 3",
      caption: "Graph of x <= 3 with a solid boundary line.",
      xAxisLabel: "x",
      yAxisLabel: "y",
      xRange: [-2, 8],
      yRange: [-5, 5],
      xStep: 2,
      yStep: 2,
      curves: [
        {
          type: "vertical_line",
          xIntercept: 3,
          color: "#3b82f6",
          style: "solid",
          shade: "left",
          shadeColor: "rgba(59, 130, 246, 0.15)",
          label: "x = 3"
        }
      ]
    }
  },
  {
    id: "ch6-q4",
    number: 4,
    exerciseNumber: 1,
    exerciseTitle: "Module 1: Easy / Medium Questions",
    question: "Solve the compound linear inequality: $-2 < 3x + 7 < 22$.",
    options: ["$-3 < x < 5$", "$-3 \\le x \\le 5$", "$x < 5$", "$x > -3$"],
    correctIndex: 0,
    correctAnswerText: "$-3 < x < 5$",
    explanation: `Step-by-Step Mathematical Explanation:
1. Subtract $7$ from all three parts of the compound inequality:
   $$-2 - 7 < 3x < 22 - 7$$
   $$-9 < 3x < 15$$
2. Divide all parts by the positive coefficient $3$:
   $$\\frac{-9}{3} < x < \\frac{15}{3}$$
   $$-3 < x < 5$$

Tutor Pro-Tip:
Treat compound inequalities like a three-sided balance scale! Whatever operation you perform on the center portion must also be performed on both the extreme left and extreme right.`,
    diagram: {
      id: "ch6-q4-diagram",
      title: "Bounded Region: -3 < x < 5",
      caption: "Graph showing the shaded vertical corridor between the dashed boundaries x = -3 and x = 5.",
      xAxisLabel: "x",
      yAxisLabel: "y",
      xRange: [-6, 8],
      yRange: [-5, 5],
      xStep: 2,
      yStep: 2,
      curves: [
        {
          type: "line",
          points: [
            [-3, -5],
            [-3, 5],
            [5, 5],
            [5, -5],
            [-3, -5]
          ],
          color: "transparent",
          shade: "region",
          shadeColor: "rgba(59, 130, 246, 0.15)"
        },
        {
          type: "vertical_line",
          xIntercept: -3,
          color: "#3b82f6",
          style: "dashed",
          label: "x = -3"
        },
        {
          type: "vertical_line",
          xIntercept: 5,
          color: "#3b82f6",
          style: "dashed",
          label: "x = 5"
        }
      ]
    }
  },
  {
    id: "ch6-q5",
    number: 5,
    exerciseNumber: 1,
    exerciseTitle: "Module 1: Easy / Medium Questions",
    question: "Solve the inequality: $10 - 2x \\ge 4x + 34$.",
    options: ["$x \\ge -4$", "$x \\le -4$", "$x > -4$", "$x < -4$"],
    correctIndex: 1,
    correctAnswerText: "$x \\le -4$",
    explanation: `Step-by-Step Mathematical Explanation:
1. Subtract $4x$ from both sides:
   $$10 - 6x \\ge 34$$
2. Subtract $10$ from both sides:
   $$-6x \\ge 24$$
3. Divide both sides by $-6$ and flip the inequality sign:
   $$x \\le -4$$

Tutor Pro-Tip:
Avoid sign errors by keeping the variable positive! If you add $2x$ to both sides instead:
   $$10 \\ge 6x + 34 \\implies -24 \\ge 6x \\implies -4 \\ge x \\implies x \\le -4$$
Both methods produce the exact same result, but keeping the coefficient positive avoids having to remember to flip the sign!`,
    diagram: {
      id: "ch6-q5-diagram",
      title: "Solution Region: x <= -4",
      caption: "Graph of x <= -4 with a solid boundary line.",
      xAxisLabel: "x",
      yAxisLabel: "y",
      xRange: [-10, 2],
      yRange: [-5, 5],
      xStep: 2,
      yStep: 2,
      curves: [
        {
          type: "vertical_line",
          xIntercept: -4,
          color: "#3b82f6",
          style: "solid",
          shade: "left",
          shadeColor: "rgba(59, 130, 246, 0.15)",
          label: "x = -4"
        }
      ]
    }
  },
  {
    id: "ch6-q6",
    number: 6,
    exerciseNumber: 1,
    exerciseTitle: "Module 1: Easy / Medium Questions",
    question: "Solve the absolute value inequality: $|x - 6| \\le 4$.",
    options: ["$[2, 10]$", "$(-\\infty, 2] \\cup [10, \\infty)$", "$(2, 10)$", "$[-2, 10]$"],
    correctIndex: 0,
    correctAnswerText: "$[2, 10]$",
    explanation: `Step-by-Step Mathematical Explanation:
1. Use the Absolute Value Split Strategy for the "less than" case ($|u| \\le k \\implies -k \\le u \\le k$):
   $$-4 \\le x - 6 \\le 4$$
2. Add $6$ to all parts to isolate $x$:
   $$-4 + 6 \\le x \\le 4 + 6$$
   $$2 \\le x \\le 10$$
3. In interval notation, since the endpoints are included ($\\le$), we use square brackets:
   $$[2, 10]$$

Tutor Pro-Tip:
Think of absolute value as **distance** on a number line! $|x - 6| \\le 4$ means "the distance between $x$ and $6$ is less than or equal to $4$." Four units to the left of $6$ is $2$, and four units to the right is $10$. All numbers between $2$ and $10$ inclusive fit this condition!`,
    diagram: {
      id: "ch6-q6-diagram",
      title: "Distance Interpretation of |x - 6| <= 4",
      caption: "Shaded vertical band between x = 2 and x = 10.",
      xAxisLabel: "x",
      yAxisLabel: "y",
      xRange: [0, 12],
      yRange: [-5, 5],
      xStep: 2,
      yStep: 2,
      curves: [
        {
          type: "line",
          points: [
            [2, -5],
            [2, 5],
            [10, 5],
            [10, -5],
            [2, -5]
          ],
          color: "transparent",
          shade: "region",
          shadeColor: "rgba(59, 130, 246, 0.15)"
        },
        {
          type: "vertical_line",
          xIntercept: 2,
          color: "#3b82f6",
          style: "solid",
          label: "x = 2"
        },
        {
          type: "vertical_line",
          xIntercept: 10,
          color: "#3b82f6",
          style: "solid",
          label: "x = 10"
        }
      ]
    }
  },
  {
    id: "ch6-q7",
    number: 7,
    exerciseNumber: 1,
    exerciseTitle: "Module 1: Easy / Medium Questions",
    question: "Solve the absolute value inequality: $|2x + 3| > 13$.",
    options: ["$(-\\infty, -8) \\cup (5, \\infty)$", "$(-8, 5)$", "$[5, \\infty)$", "$(-\\infty, -5) \\cup (8, \\infty)$"],
    correctIndex: 0,
    correctAnswerText: "$(-\\infty, -8) \\cup (5, \\infty)$",
    explanation: `Step-by-Step Mathematical Explanation:
1. Since this is a "greater than" inequality ($|u| > k$), it splits into two disjoint rays ("OR" case):
   $$2x + 3 > 13 \\quad \\text{OR} \\quad 2x + 3 < -13$$
2. Solve the right-side ray:
   $$2x > 10 \\implies x > 5$$
3. Solve the left-side ray:
   $$2x < -16 \\implies x < -8$$
4. Express the final answer as the union of two open intervals:
   $$(-\\infty, -8) \\cup (5, \\infty)$$

Tutor Pro-Tip:
"Greater" splits outwards! Whenever you see $|u| > k$, remember the solution will always shoot out in opposite directions like two split rays, represented by the union symbol $\\cup$.`,
    diagram: {
      id: "ch6-q7-diagram",
      title: "Split Region: x < -8 OR x > 5",
      caption: "Two separate shaded regions pointing outwards from open boundaries at -8 and 5.",
      xAxisLabel: "x",
      yAxisLabel: "y",
      xRange: [-10, 6],
      yRange: [-5, 5],
      xStep: 1,
      yStep: 2,
      curves: [
        {
          type: "vertical_line",
          xIntercept: -8,
          color: "#3b82f6",
          style: "dashed",
          shade: "left",
          shadeColor: "rgba(59, 130, 246, 0.15)",
          label: "x = -8"
        },
        {
          type: "vertical_line",
          xIntercept: 5,
          color: "#3b82f6",
          style: "dashed",
          shade: "right",
          shadeColor: "rgba(59, 130, 246, 0.15)",
          label: "x = 5"
        }
      ]
    }
  },
  {
    id: "ch6-q8",
    number: 8,
    exerciseNumber: 1,
    exerciseTitle: "Module 1: Easy / Medium Questions",
    question: "Solve the inequality: $|5 - 4x| < 17$.",
    options: ["$(-3, 5.5)$", "$[-3, 5.5]$", "$(-\\infty, -3) \\cup (5.5, \\infty)$", "$(-3, \\infty)$"],
    correctIndex: 0,
    correctAnswerText: "$(-3, 5.5)$",
    explanation: `Step-by-Step Mathematical Explanation:
1. Setup the compound inequality using absolute value properties:
   $$-17 < 5 - 4x < 17$$
2. Subtract $5$ from all parts:
   $$-22 < -4x < 12$$
3. Divide all parts by $-4$ and REVERSE both inequality symbols:
   $$\\frac{-22}{-4} > x > \\frac{12}{-4}$$
   $$5.5 > x > -3$$
4. Rearrange in standard lowest-to-highest order:
   $$-3 < x < 5.5$$
5. In interval notation (strict inequalities, open circles), this is:
   $$(-3, 5.5)$$

Tutor Pro-Tip:
Watch out for the double flip! Dividing a compound inequality by a negative coefficient reverses all signs simultaneously. Double-check your endpoints!`,
    diagram: {
      id: "ch6-q8-diagram",
      title: "Interval Solution: -3 < x < 5.5",
      caption: "The shaded vertical corridor between dashed boundaries x = -3 and x = 5.5.",
      xAxisLabel: "x",
      yAxisLabel: "y",
      xRange: [-6, 8],
      yRange: [-5, 5],
      xStep: 2,
      yStep: 2,
      curves: [
        {
          type: "line",
          points: [
            [-3, -5],
            [-3, 5],
            [5.5, 5],
            [5.5, -5],
            [-3, -5]
          ],
          color: "transparent",
          shade: "region",
          shadeColor: "rgba(59, 130, 246, 0.15)"
        },
        {
          type: "vertical_line",
          xIntercept: -3,
          color: "#3b82f6",
          style: "dashed",
          label: "x = -3"
        },
        {
          type: "vertical_line",
          xIntercept: 5.5,
          color: "#3b82f6",
          style: "dashed",
          label: "x = 5.5"
        }
      ]
    }
  },
  {
    id: "ch6-q9",
    number: 9,
    exerciseNumber: 1,
    exerciseTitle: "Module 1: Easy / Medium Questions",
    question: "Solve the inequality: $|3x - 1| + 4 \\ge 16$.",
    options: ["$(-\\infty, -3.67] \\cup [4.33, \\infty)$", "$[-3.67, 4.33]$", "$(-\\infty, -3.67)$", "$[4.33, \\infty)$"],
    correctIndex: 0,
    correctAnswerText: "$(-\\infty, -3.67] \\cup [4.33, \\infty)$",
    explanation: `Step-by-Step Mathematical Explanation:
1. Isolate the absolute value term first by subtracting $4$ from both sides:
   $$|3x - 1| \\ge 12$$
2. Set up the two separate linear cases ("OR" case):
   $$3x - 1 \\ge 12 \\quad \\text{OR} \\quad 3x - 1 \\le -12$$
3. Solve the first case:
   $$3x \\ge 13 \\implies x \\ge \\frac{13}{3} \\approx 4.33$$
4. Solve the second case:
   $$3x \\le -11 \\implies x \\le -\\frac{11}{3} \\approx -3.67$$
5. Combine both regions:
   $$(-\\infty, -3.67] \\cup [4.33, \\infty)$$

Tutor Pro-Tip:
Always isolate the absolute value bracket BEFORE splitting! Applying properties while constants are still outside the bracket is a major algebra trap.`,
    diagram: {
      id: "ch6-q9-diagram",
      title: "Solution Region: x <= -3.67 OR x >= 4.33",
      caption: "Two separate shaded regions pointing outwards from solid boundaries at -3.67 and 4.33.",
      xAxisLabel: "x",
      yAxisLabel: "y",
      xRange: [-8, 8],
      yRange: [-5, 5],
      xStep: 2,
      yStep: 2,
      curves: [
        {
          type: "vertical_line",
          xIntercept: -3.67,
          color: "#3b82f6",
          style: "solid",
          shade: "left",
          shadeColor: "rgba(59, 130, 246, 0.15)",
          label: "x = -3.67"
        },
        {
          type: "vertical_line",
          xIntercept: 4.33,
          color: "#3b82f6",
          style: "solid",
          shade: "right",
          shadeColor: "rgba(59, 130, 246, 0.15)",
          label: "x = 4.33"
        }
      ]
    }
  },
  {
    id: "ch6-q10",
    number: 10,
    exerciseNumber: 1,
    exerciseTitle: "Module 1: Easy / Medium Questions",
    question: "Solve the quadratic inequality: $x^2 - 5x - 14 \\le 0$.",
    options: ["$[-2, 7]$", "$(-\\infty, -2] \\cup [7, \\infty)$", "$(-2, 7)$", "$[-7, 2]$"],
    correctIndex: 0,
    correctAnswerText: "$[-2, 7]$",
    explanation: `Step-by-Step Mathematical Explanation:
1. Factor the quadratic equation:
   $$(x - 7)(x + 2) \\le 0$$
2. Identify the critical boundary points where the product is exactly zero:
   $$x = 7 \\quad \\text{and} \\quad x = -2$$
3. Test intervals formed by the boundary points ($x < -2$, $-2 < x < 7$, and $x > 7$):
   - For $x = -3$: $(-3 - 7)(-3 + 2) = (-10)(-1) = 10 > 0$ (False)
   - For $x = 0$: $(0 - 7)(0 + 2) = (-7)(2) = -14 \\le 0$ (True)
   - For $x = 8$: $(8 - 7)(8 + 2) = (1)(10) = 10 > 0$ (False)
4. The solution interval is between $-2$ and $7$, inclusive:
   $$[-2, 7]$$

Tutor Pro-Tip:
For quadratic inequalities in standard form $ax^2 + bx + c \\le 0$ with $a > 0$, the solution region is always **between the two roots**! If it is $\\ge 0$, the solution region lies **outside the two roots**. Save valuable test seconds with this root shortcut!`,
    diagram: {
      id: "ch6-q10-diagram",
      title: "Parabolic Boundary: x² - 5x - 14 <= 0",
      caption: "The shaded solution region lies where the parabola y = x² - 5x - 14 lies below the x-axis, between the roots x = -2 and x = 7.",
      xAxisLabel: "x",
      yAxisLabel: "y",
      xRange: [-5, 10],
      yRange: [-25, 10],
      xStep: 2,
      yStep: 5,
      curves: [
        {
          type: "function",
          expression: "x*x - 5*x - 14",
          color: "#3b82f6",
          style: "solid",
          label: "y = x² - 5x - 14"
        },
        {
          type: "function",
          expression: "(x >= -2 && x <= 7) ? (x*x - 5*x - 14) : null",
          color: "transparent",
          style: "solid",
          shade: "below",
          shadeColor: "rgba(59, 130, 246, 0.15)"
        },
        {
          type: "vertical_line",
          xIntercept: -2,
          color: "#3b82f6",
          style: "solid",
          label: "x = -2"
        },
        {
          type: "vertical_line",
          xIntercept: 7,
          color: "#3b82f6",
          style: "solid",
          label: "x = 7"
        }
      ]
    }
  },
  {
    id: "ch6-q11",
    number: 11,
    exerciseNumber: 1,
    exerciseTitle: "Module 1: Easy / Medium Questions",
    question: "Solve the quadratic inequality: $x^2 + 2x - 24 > 0$.",
    options: ["$(-\\infty, -6) \\cup (4, \\infty)$", "$(-6, 4)$", "$[-6, 4]$", "$(-\\infty, -4) \\cup (6, \\infty)$"],
    correctIndex: 0,
    correctAnswerText: "$(-\\infty, -6) \\cup (4, \\infty)$",
    explanation: `Step-by-Step Mathematical Explanation:
1. Factor the quadratic trinomial:
   $$(x + 6)(x - 4) > 0$$
2. The roots (critical boundary points) are $x = -6$ and $x = 4$.
3. Since we want the quadratic expression to be strictly positive ($> 0$), the solution regions must lie in the outer intervals (outside the roots):
   $$x < -6 \\quad \\text{OR} \\quad x > 4$$
4. Written in interval notation:
   $$(-\\infty, -6) \\cup (4, \\infty)$$

Tutor Pro-Tip:
Think of the parabola's shape! A positive quadratic ($x^2$) opens upward. It is positive (above the x-axis) at the outer wings and negative (below the x-axis) in the middle valley between the roots. Since we want $> 0$, we select the outer wings!`,
    diagram: {
      id: "ch6-q11-diagram",
      title: "Parabolic Wings: x² + 2x - 24 > 0",
      caption: "The solution region covers the outer wings of the parabola y = x² + 2x - 24 where y > 0.",
      xAxisLabel: "x",
      yAxisLabel: "y",
      xRange: [-10, 6],
      yRange: [-30, 10],
      xStep: 1,
      yStep: 10,
      curves: [
        {
          type: "function",
          expression: "x*x + 2*x - 24",
          color: "#3b82f6",
          style: "solid",
          label: "y = x² + 2x - 24"
        },
        {
          type: "vertical_line",
          xIntercept: -6,
          color: "#3b82f6",
          style: "dashed",
          shade: "left",
          shadeColor: "rgba(59, 130, 246, 0.15)",
          label: "x = -6"
        },
        {
          type: "vertical_line",
          xIntercept: 4,
          color: "#3b82f6",
          style: "dashed",
          shade: "right",
          shadeColor: "rgba(59, 130, 246, 0.15)",
          label: "x = 4"
        }
      ]
    }
  },
  {
    id: "ch6-q12",
    number: 12,
    exerciseNumber: 1,
    exerciseTitle: "Module 1: Easy / Medium Questions",
    question: "Solve the quadratic inequality: $2x^2 - 7x + 3 < 0$.",
    options: ["$(0.5, 3)$", "$[-0.5, 3]$", "$(-\\infty, 0.5) \\cup (3, \\infty)$", "$(0.5, \\infty)$"],
    correctIndex: 0,
    correctAnswerText: "$(0.5, 3)$",
    explanation: `Step-by-Step Mathematical Explanation:
1. Factor the quadratic expression using the AC method (multiply $2 \\times 3 = 6$, find factors that add to $-7$, which are $-6$ and $-1$):
   $$2x^2 - 6x - x + 3 < 0$$
   $$2x(x - 3) - 1(x - 3) < 0$$
   $$(2x - 1)(x - 3) < 0$$
2. Identify critical points by setting factors to zero:
   $$x = 0.5 \\quad \\text{and} \\quad x = 3$$
3. Since we want $< 0$, the solution interval must lie between the roots:
   $$0.5 < x < 3$$
4. Written in interval notation:
   $$(0.5, 3)$$

Tutor Pro-Tip:
With fractional roots, decimals are your friend! Converting $1/2$ to $0.5$ makes coordinate bounds easier to read on graph questions.`,
    diagram: {
      id: "ch6-q12-diagram",
      title: "Parabolic Valley: 2x² - 7x + 3 < 0",
      caption: "The shaded region lies between x = 0.5 and x = 3, corresponding to the valley of the parabola.",
      xAxisLabel: "x",
      yAxisLabel: "y",
      xRange: [-1, 5],
      yRange: [-5, 10],
      xStep: 1,
      yStep: 2,
      curves: [
        {
          type: "function",
          expression: "2*x*x - 7*x + 3",
          color: "#3b82f6",
          style: "solid",
          label: "y = 2x² - 7x + 3"
        },
        {
          type: "function",
          expression: "(x >= 0.5 && x <= 3) ? (2*x*x - 7*x + 3) : null",
          color: "transparent",
          style: "solid",
          shade: "below",
          shadeColor: "rgba(59, 130, 246, 0.15)"
        },
        {
          type: "vertical_line",
          xIntercept: 0.5,
          color: "#3b82f6",
          style: "dashed",
          label: "x = 0.5"
        },
        {
          type: "vertical_line",
          xIntercept: 3,
          color: "#3b82f6",
          style: "dashed",
          label: "x = 3"
        }
      ]
    }
  },
  {
    id: "ch6-q13",
    number: 13,
    exerciseNumber: 1,
    exerciseTitle: "Module 1: Easy / Medium Questions",
    question: "Solve the rational inequality: $\\frac{x - 3}{x + 4} > 0$.",
    options: ["$(-\\infty, -4) \\cup (3, \\infty)$", "$(-4, 3)$", "$[-4, 3]$", "$(-\\infty, -3) \\cup (4, \\infty)$"],
    correctIndex: 0,
    correctAnswerText: "$(-\\infty, -4) \\cup (3, \\infty)$",
    explanation: `Step-by-Step Mathematical Explanation:
1. Find the critical points by setting the numerator and denominator to zero:
   - Numerator: $x - 3 = 0 \\implies x = 3$
   - Denominator: $x + 4 = 0 \\implies x = -4$
2. These points partition the number line into three intervals: $x < -4$, $-4 < x < 3$, and $x > 3$.
3. Since a quotient behaves exactly like a product in terms of sign combinations ($+/+ = +$ and $-/- = +$):
   - For $x < -4$ (e.g., $-5$): $\\frac{-5 - 3}{-5 + 4} = \\frac{-8}{-1} = 8 > 0$ (Positive, holds)
   - For $-4 < x < 3$ (e.g., $0$): $\\frac{0 - 3}{0 + 4} = -0.75 < 0$ (Negative, fails)
   - For $x > 3$ (e.g., $4$): $\\frac{4 - 3}{4 + 4} = \\frac{1}{8} > 0$ (Positive, holds)
4. Combine the positive intervals:
   $$(-\\infty, -4) \\cup (3, \\infty)$$

Tutor Pro-Tip:
Rational sign shortcut! The sign rules for dividing algebraic factors are identical to multiplying them. Treat $\\frac{x - 3}{x + 4} > 0$ exactly like the quadratic $(x - 3)(x + 4) > 0$ to find the intervals instantly, but always remember to keep denominator boundary points open (excluded)!`,
    diagram: {
      id: "ch6-q13-diagram",
      title: "Rational Sign Zones: (x - 3) / (x + 4) > 0",
      caption: "Shaded outer regions outside the vertical asymptote at x = -4 and the root at x = 3.",
      xAxisLabel: "x",
      yAxisLabel: "y",
      xRange: [-8, 6],
      yRange: [-10, 10],
      xStep: 1,
      yStep: 2,
      curves: [
        {
          type: "function",
          expression: "(x - 3)/(x + 4)",
          color: "#3b82f6",
          style: "solid",
          label: "y = (x - 3)/(x + 4)"
        },
        {
          type: "vertical_line",
          xIntercept: -4,
          color: "#3b82f6",
          style: "dashed",
          shade: "left",
          shadeColor: "rgba(59, 130, 246, 0.15)",
          label: "x = -4"
        },
        {
          type: "vertical_line",
          xIntercept: 3,
          color: "#3b82f6",
          style: "dashed",
          shade: "right",
          shadeColor: "rgba(59, 130, 246, 0.15)",
          label: "x = 3"
        }
      ]
    }
  },
  {
    id: "ch6-q14",
    number: 14,
    exerciseNumber: 1,
    exerciseTitle: "Module 1: Easy / Medium Questions",
    question: "Solve the rational inequality: $\\frac{2x + 6}{x - 1} \\le 0$.",
    options: ["$[-3, 1)$", "$[-3, 1]$", "$(-3, 1)$", "$(-\\infty, -3] \\cup (1, \\infty)$"],
    correctIndex: 0,
    correctAnswerText: "$[-3, 1)$",
    explanation: `Step-by-Step Mathematical Explanation:
1. Find the critical points:
   - Numerator: $2x + 6 = 0 \\implies x = -3$
   - Denominator: $x - 1 = 0 \\implies x = 1$
2. These partition the number line into intervals. Since the inequality is non-strict ($\\le$), we include roots from the numerator, but we MUST exclude roots from the denominator to avoid division by zero (undefined state):
   - At $x = -3$, numerator is $0 \\implies$ Included ($[-3$)
   - At $x = 1$, denominator is $0 \\implies$ Excluded ($1)$)
3. Testing points reveals that the middle interval $-3 \\le x < 1$ is negative:
   - If $x = 0$: $\\frac{2(0) + 6}{0 - 1} = \\frac{6}{-1} = -6 \\le 0$ (True)
4. Therefore, the interval is:
   $$[-3, 1)$$

Tutor Pro-Tip:
The Denominator Exclusion Rule! Never, ever write a square bracket next to a value that makes the denominator zero. Even if the inequality is $\\le$ or $\\ge$, denominator roots must always be surrounded by parentheses.`,
    diagram: {
      id: "ch6-q14-diagram",
      title: "Rational Interval: [-3, 1)",
      caption: "The shaded region lies between the root at x = -3 (included) and the asymptote at x = 1 (excluded).",
      xAxisLabel: "x",
      yAxisLabel: "y",
      xRange: [-6, 4],
      yRange: [-10, 10],
      xStep: 1,
      yStep: 2,
      curves: [
        {
          type: "function",
          expression: "(2*x + 6)/(x - 1)",
          color: "#3b82f6",
          style: "solid",
          label: "y = (2x + 6)/(x - 1)"
        },
        {
          type: "line",
          points: [
            [-3, -10],
            [-3, 10],
            [1, 10],
            [1, -10],
            [-3, -10]
          ],
          color: "transparent",
          shade: "region",
          shadeColor: "rgba(59, 130, 246, 0.15)"
        },
        {
          type: "vertical_line",
          xIntercept: -3,
          color: "#3b82f6",
          style: "solid",
          label: "x = -3"
        },
        {
          type: "vertical_line",
          xIntercept: 1,
          color: "#3b82f6",
          style: "dashed",
          label: "x = 1"
        }
      ]
    }
  },
  {
    id: "ch6-q15",
    number: 15,
    exerciseNumber: 1,
    exerciseTitle: "Module 1: Easy / Medium Questions",
    question: "Solve the basic quadratic inequality: $x^2 \\ge 16$.",
    options: ["$(-\\infty, -4] \\cup [4, \\infty)$", "$[-4, 4]$", "$(-\\infty, -4) \\cup (4, \\infty)$", "$[4, \\infty)$"],
    correctIndex: 0,
    correctAnswerText: "$(-\\infty, -4] \\cup [4, \\infty)$",
    explanation: `Step-by-Step Mathematical Explanation:
1. Rearrange the inequality to standard quadratic form:
   $$x^2 - 16 \\ge 0$$
2. Factor the difference of squares:
   $$(x - 4)(x + 4) \\ge 0$$
3. The roots are $x = 4$ and $x = -4$.
4. Since the inequality is $\\ge 0$ (positive region), the solution lies on or outside the boundary points:
   $$x \\le -4 \\quad \\text{OR} \\quad x \\ge 4$$
5. In interval notation, this is:
   $$(-\\infty, -4] \\cup [4, \\infty)$$

Tutor Pro-Tip:
Avoid the root trap! Taking the square root of both sides directly ($x \\ge \\pm 4$) is illegal and mathematically incomplete because it ignores interval structure. Always factor or use the absolute value equivalence $|x| \\ge 4$!`,
    diagram: {
      id: "ch6-q15-diagram",
      title: "Quadratic Bounds: x² >= 16",
      caption: "Outer shaded wings of the absolute boundary lines x = -4 and x = 4.",
      xAxisLabel: "x",
      yAxisLabel: "y",
      xRange: [-8, 8],
      yRange: [-5, 5],
      xStep: 1,
      yStep: 2,
      curves: [
        {
          type: "vertical_line",
          xIntercept: -4,
          color: "#3b82f6",
          style: "solid",
          shade: "left",
          shadeColor: "rgba(59, 130, 246, 0.15)",
          label: "x = -4"
        },
        {
          type: "vertical_line",
          xIntercept: 4,
          color: "#3b82f6",
          style: "solid",
          shade: "right",
          shadeColor: "rgba(59, 130, 246, 0.15)",
          label: "x = 4"
        }
      ]
    }
  },
  {
    id: "ch6-q16",
    number: 16,
    exerciseNumber: 1,
    exerciseTitle: "Module 1: Easy / Medium Questions",
    question: "Which of the following coordinates is in the solution set of the linear inequality: $2x - 5y > 10$?",
    options: ["$(0, 0)$", "$(6, 0)$", "$(2, 2)$", "$(1, 3)$"],
    correctIndex: 1,
    correctAnswerText: "$(6, 0)$",
    explanation: `Step-by-Step Mathematical Explanation:
To determine which point is in the solution region, substitute each $(x, y)$ coordinate pair into the inequality:
1. Test Option A $(0,0)$:
   $$2(0) - 5(0) = 0 > 10 \\quad \\text{(False)}$$
2. Test Option B $(6,0)$:
   $$2(6) - 5(0) = 12 > 10 \\quad \\text{(True)}$$
3. Test Option C $(2,2)$:
   $$2(2) - 5(2) = 4 - 10 = -6 > 10 \\quad \\text{(False)}.$$
4. Test Option D $(1,3)$:
   $$2(1) - 5(3) = 2 - 15 = -13 > 10 \\quad \\text{(False)}.$$

Tutor Pro-Tip:
Plugging coordinates directly into linear systems is the fastest way to solve standard SAT point-boundary questions! Always do mental calculation of the intercepts first.`,
    diagram: {
      id: "ch6-q16-diagram",
      title: "Linear Inequality Half-Plane: 2x - 5y > 10",
      caption: "The dashed line represents 2x - 5y = 10, with shading below the line. Point (6,0) is cleanly within the solution region.",
      xAxisLabel: "x",
      yAxisLabel: "y",
      xRange: [-4, 10],
      yRange: [-6, 4],
      xStep: 2,
      yStep: 2,
      curves: [
        {
          type: "function",
          expression: "0.4*x - 2",
          color: "#3b82f6",
          style: "dashed",
          shade: "below",
          shadeColor: "rgba(59, 130, 246, 0.15)",
          label: "y = 0.4x - 2"
        }
      ],
      textAnnotations: [
        { x: 6, y: 0, text: "B (6,0) SUCCESS", color: "#10b981", fontSize: 9, fontWeight: "bold" },
        { x: 0, y: 0, text: "A (0,0) FAIL", color: "#ef4444", fontSize: 9 }
      ]
    }
  },
  {
    id: "ch6-q17",
    number: 17,
    exerciseNumber: 1,
    exerciseTitle: "Module 1: Easy / Medium Questions",
    question: "If the inequality $y < \\frac{1}{2}x + 2$ is plotted on a coordinate plane, which of the following best describes the boundary line and the shaded half-plane?",
    options: [
      "A dashed line with shading below the line.",
      "A solid line with shading below the line.",
      "A dashed line with shading above the line.",
      "A solid line with shading above the line."
    ],
    correctIndex: 0,
    correctAnswerText: "A dashed line with shading below the line.",
    explanation: `Step-by-Step Mathematical Explanation:
1. Examine the inequality sign: $y < \\frac{1}{2}x + 2$.
2. The sign is strictly less than ($<$). This means points exactly on the boundary line are NOT included in the solution set. Therefore, the boundary line must be **dashed**.
3. Since the inequality is isolated for $y$ in the form $y < mx + b$, the solution set includes all points with vertical coordinates lower than the boundary. Therefore, the shading must cover the half-plane **below** the line.

Tutor Pro-Tip:
Save time using the vertical inequality sign rule! If $y$ is isolated on the left:
- $y > \\dots$ or $y \\ge \\dots \\implies$ shade **above** the line.
- $y < \\dots$ or $y \\le \\dots \\implies$ shade **below** the line.`,
    diagram: {
      id: "ch6-q17-diagram",
      title: "y < 0.5x + 2 Shaded Region",
      caption: "Dashed line y = 0.5x + 2 with shading below.",
      xAxisLabel: "x",
      yAxisLabel: "y",
      xRange: [-6, 6],
      yRange: [-4, 6],
      xStep: 2,
      yStep: 2,
      curves: [
        {
          type: "function",
          expression: "0.5*x + 2",
          color: "#3b82f6",
          style: "dashed",
          shade: "below",
          shadeColor: "rgba(59, 130, 246, 0.15)",
          label: "y = 0.5x + 2"
        }
      ]
    }
  },
  {
    id: "ch6-q18",
    number: 18,
    exerciseNumber: 1,
    exerciseTitle: "Module 1: Easy / Medium Questions",
    question: "Graph the linear inequality: $3x + 4y \\ge 12$. Which of the following is correct regarding its intercepts and shading direction?",
    options: [
      "Solid line, intercepts $(4,0)$ and $(0,3)$, shaded above the line.",
      "Dashed line, intercepts $(4,0)$ and $(0,3)$, shaded above the line.",
      "Solid line, intercepts $(4,0)$ and $(0,3)$, shaded below the line.",
      "Solid line, intercepts $(0,4)$ and $(3,0)$, shaded above the line."
    ],
    correctIndex: 0,
    correctAnswerText: "Solid line, intercepts $(4,0)$ and $(0,3)$, shaded above the line.",
    explanation: `Step-by-Step Mathematical Explanation:
1. Determine line type: The inequality is non-strict ($\\ge$), so the boundary line is **solid**.
2. Find the x-intercept: Set $y = 0 \\implies 3x = 12 \\implies x = 4$, which gives point $(4, 0)$.
3. Find the y-intercept: Set $x = 0 \\implies 4y = 12 \\implies y = 3$, which gives point $(0, 3)$.
4. Determine shading direction: Test point $(0,0)$:
   $$3(0) + 4(0) = 0 \\ge 12 \\quad \\text{(False)}$$
   Since $(0,0)$ is below the boundary and yields a false statement, the solution region is on the opposite side of the line, which is **above** and to the right.

Tutor Pro-Tip:
Plug in $(0,0)$ to shade standard lines instantly! If $(0,0)$ returns a TRUE statement, shade the side of the line containing $(0,0)$. If $(0,0)$ returns a FALSE statement, shade the side of the line away from $(0,0)$.`,
    diagram: {
      id: "ch6-q18-diagram",
      title: "Solid Boundary: 3x + 4y >= 12",
      caption: "Solid line passing through (4,0) and (0,3) with shading above.",
      xAxisLabel: "x",
      yAxisLabel: "y",
      xRange: [-2, 8],
      yRange: [-2, 6],
      xStep: 2,
      yStep: 2,
      curves: [
        {
          type: "function",
          expression: "-0.75*x + 3",
          color: "#3b82f6",
          style: "solid",
          shade: "above",
          shadeColor: "rgba(59, 130, 246, 0.15)",
          label: "3x + 4y = 12"
        }
      ],
      textAnnotations: [
        { x: 4, y: 0.5, text: "(4,0)", color: "#1e3a8a" },
        { x: 0.5, y: 3, text: "(0,3)", color: "#1e3a8a" }
      ]
    }
  },
  {
    id: "ch6-q19",
    number: 19,
    exerciseNumber: 1,
    exerciseTitle: "Module 1: Easy / Medium Questions",
    question: "Solve the system of linear inequalities: $y \\ge x - 2$ and $y < -2x + 4$. Which description matches the overlapping solution region?",
    options: [
      "A region containing the point $(0,0)$ bounded by a solid line $y = x - 2$ and a dashed line $y = -2x + 4$.",
      "A region containing the point $(0,0)$ bounded by solid lines for both equations.",
      "An unbounded region completely above both lines.",
      "A region with a dashed boundary for $y = x - 2$ and a solid boundary for $y = -2x + 4$."
    ],
    correctIndex: 0,
    correctAnswerText: "A region containing the point $(0,0)$ bounded by a solid line $y = x - 2$ and a dashed line $y = -2x + 4$.",
    explanation: `Step-by-Step Mathematical Explanation:
1. Examine the first inequality: $y \\ge x - 2$. This has a **solid boundary** (since $\\ge$) and is shaded **above** the line.
2. Examine the second inequality: $y < -2x + 4$. This has a **dashed boundary** (since $<$) and is shaded **below** the line.
3. Test point $(0,0)$ in both:
   - For $y \\ge x - 2$: $0 \\ge 0 - 2 \\implies 0 \\ge -2$ (True)
   - For $y < -2x + 4$: $0 < 0 + 4 \\implies 0 < 4$ (True)
4. Since $(0,0)$ satisfies both inequalities, it lies inside the overlapping wedge formed by the solid line $y = x - 2$ and the dashed line $y = -2x + 4$.

Tutor Pro-Tip:
Systems of inequalities are simply overlapping shading filters! The solution set of the system contains only the coordinates where the individual shaded regions intersect. Use the origin $(0,0)$ as your primary test-point compass!`,
    diagram: {
      id: "ch6-q19-diagram",
      title: "System Overlap: y >= x - 2 and y < -2x + 4",
      caption: "The double-shaded intersection region contains the origin (0,0), bounded by a solid blue line and a dashed pink line.",
      xAxisLabel: "x",
      yAxisLabel: "y",
      xRange: [-4, 6],
      yRange: [-4, 6],
      xStep: 2,
      yStep: 2,
      curves: [
        {
          type: "function",
          expression: "x - 2",
          color: "#3b82f6",
          style: "solid",
          shade: "above",
          shadeColor: "rgba(59, 130, 246, 0.15)",
          label: "y = x - 2"
        },
        {
          type: "function",
          expression: "-2*x + 4",
          color: "#3b82f6",
          style: "dashed",
          shade: "below",
          shadeColor: "rgba(59, 130, 246, 0.15)",
          label: "y = -2x + 4"
        }
      ],
      textAnnotations: [
        { x: 0, y: 0.5, text: "(0,0) Overlap Zone", color: "#1e3a8a", fontSize: 10, fontWeight: "bold" }
      ]
    }
  },
  {
    id: "ch6-q20",
    number: 20,
    exerciseNumber: 1,
    exerciseTitle: "Module 1: Easy / Medium Questions",
    question: "Determine the geometric shape and bounds of the region defined by the system: $x \\ge 0$, $y \\ge 0$, and $2x + y \\le 6$.",
    options: [
      "A triangular region in the first quadrant with vertices $(0,0)$, $(3,0)$, and $(0,6)$.",
      "A square region in the first quadrant.",
      "An unbounded vertical corridor.",
      "A triangular region in the second quadrant."
    ],
    correctIndex: 0,
    correctAnswerText: "A triangular region in the first quadrant with vertices $(0,0)$, $(3,0)$, and $(0,6)$.",
    explanation: `Step-by-Step Mathematical Explanation:
1. Interpret the quadrant constraints: $x \\ge 0$ and $y \\ge 0$ restricts the solution set exclusively to the **First Quadrant** (and axes).
2. Analyze the main linear inequality: $2x + y \\le 6 \\implies y \\le -2x + 6$.
3. Find the intercepts of the boundary line $2x + y = 6$:
   - For $y = 0 \\implies 2x = 6 \\implies x = 3$, giving vertex $(3, 0)$.
   - For $x = 0 \\implies y = 6$, giving vertex $(0, 6)$.
4. The constraints trap a region bounded by:
   - The y-axis ($x = 0$) from $y = 0$ to $6$.
   - The x-axis ($y = 0$) from $x = 0$ to $3$.
   - The line $2x + y = 6$ connecting $(0,6)$ and $(3,0)$.
5. This forms a right triangle in the first quadrant with vertices $(0,0)$, $(3,0)$, and $(0,6)$.

Tutor Pro-Tip:
"First Quadrant Traps" are extremely popular on the SAT! Whenever you see $x \\ge 0$ and $y \\ge 0$, focus immediately on the first quadrant. Linear boundaries will cut across to form a bounded right triangle, and you can calculate its area easily using $\\frac{1}{2} \\times \\text{base} \\times \\text{height} = \\frac{1}{2} \\times 3 \\times 6 = 9$!`,
    diagram: {
      id: "ch6-q20-diagram",
      title: "First Quadrant Triangle: 2x + y <= 6",
      caption: "Triangular solution region trapped in the first quadrant with vertices (0,0), (3,0), and (0,6).",
      xAxisLabel: "x",
      yAxisLabel: "y",
      xRange: [-1, 5],
      yRange: [-1, 8],
      xStep: 1,
      yStep: 1,
      curves: [
        {
          type: "function",
          expression: "-2*x + 6",
          color: "#3b82f6",
          style: "solid",
          shade: "below",
          shadeColor: "rgba(59, 130, 246, 0.15)",
          label: "2x + y = 6"
        }
      ],
      textAnnotations: [
        { x: 0, y: 0.3, text: "(0,0)", color: "#1e3a8a", fontWeight: "bold" },
        { x: 3, y: 0.3, text: "(3,0)", color: "#1e3a8a", fontWeight: "bold" },
        { x: 0.3, y: 6, text: "(0,6)", color: "#1e3a8a", fontWeight: "bold" }
      ]
    }
  }
];
