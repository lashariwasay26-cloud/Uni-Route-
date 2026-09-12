import { MathExerciseQuestion } from './satMathConcepts';

export const CHAPTER_6_QUESTIONS_MODULE_2: MathExerciseQuestion[] = [
  {
    id: "ch6-q21",
    number: 1,
    exerciseNumber: 2,
    exerciseTitle: "Module 2: Hard Questions",
    question: "Solve the multi-step linear inequality: $-5(x + 2) < -2(x - 1)$.",
    options: ["$x \\le -4$","$x \\ge -4$","$x < -2$","$x > -2$"],
    correctIndex: 0,
    correctAnswerText: "$x \\le -4$",
    explanation: `Step-by-Step Mathematical Explanation:
1. Expand both sides of the inequality using the distributive property:
   $$-5x - 10 < -2x + 2$$
2. Add $5x$ to both sides to make the variable coefficient positive and avoid negative divisions:
   $$-10 < 3x + 2$$
3. Subtract $2$ from both sides:
   $$-12 < 3x$$
4. Divide by positive $3$:
   $$-4 < x \\implies x > -4$$

Tutor Pro-Tip:
Slight adjustments in algebraic choice prevent negative-multiplier mistakes! By adding $5x$ to both sides instead of adding $2x$, we kept the coefficient of $x$ positive ($+3$). This allowed us to divide without having to flip the inequality sign, removing a major source of calculation errors.`,
    diagram: {
      id: "ch6-q21-diagram",
      title: "Solution Region: x > -4",
      caption: "Graph of the solution region x > -4 with a dashed vertical boundary line at x = -4.",
      xAxisLabel: "x",
      yAxisLabel: "y",
      xRange: [-8, 2],
      yRange: [-5, 5],
      xStep: 1,
      yStep: 2,
      curves: [
        {
          type: "vertical_line",
          xIntercept: -4,
          color: "#3b82f6",
          style: "dashed",
          shade: "right",
          shadeColor: "rgba(59, 130, 246, 0.15)",
          label: "x = -4"
        }
      ]
    }
  },
  {
    id: "ch6-q22",
    number: 2,
    exerciseNumber: 2,
    exerciseTitle: "Module 2: Hard Questions",
    question: "Solve the rational-fraction inequality: $\\frac{x}{3} - 4 \\ge \\frac{x}{2} + 1$.",
    options: ["$x \\le -30$", "$x \\ge -30$", "$x \\le 30$", "$x \\ge -18$"],
    correctIndex: 0,
    correctAnswerText: "$x \\le -30$",
    explanation: `Step-by-Step Mathematical Explanation:
1. Eliminate all fractional denominators by multiplying the entire inequality by the Least Common Multiple (LCM) of $3$ and $2$, which is $6$:
   $$6 \\left(\\frac{x}{3} - 4\\right) \\ge 6 \\left(\\frac{x}{2} + 1\\right)$$
   $$2x - 24 \\ge 3x + 6$$
2. Subtract $2x$ from both sides:
   $$-24 \\ge x + 6$$
3. Subtract $6$ from both sides to completely isolate $x$:
   $$-30 \\ge x \\implies x \\le -30$$

Tutor Pro-Tip:
The **Denominator Annihilation Shortcut**! Never work with fractions if you can avoid it. Multiply all terms in your inequality by the LCM of all denominators on your first line of algebra to work strictly with clean, error-free integers!`,
    diagram: {
      id: "ch6-q22-diagram",
      title: "Solution Region: x <= -30",
      caption: "Graph of the solution region x <= -30 with a solid vertical line boundary at x = -30.",
      xAxisLabel: "x",
      yAxisLabel: "y",
      xRange: [-50, -10],
      yRange: [-5, 5],
      xStep: 10,
      yStep: 2,
      curves: [
        {
          type: "vertical_line",
          xIntercept: -30,
          color: "#3b82f6",
          style: "solid",
          shade: "left",
          shadeColor: "rgba(59, 130, 246, 0.15)",
          label: "x = -30"
        }
      ]
    }
  },
  {
    id: "ch6-q23",
    number: 3,
    exerciseNumber: 2,
    exerciseTitle: "Module 2: Hard Questions",
    question: "Solve the double inequality: $-12 \\le 4 - 2x < 8$. Express the solution in interval notation.",
    options: ["$(-2, 8]$", "$[-2, 8)$", "$(-2, 8)$", "$[-12, 8]$"],
    correctIndex: 0,
    correctAnswerText: "$(-2, 8]$",
    explanation: `Step-by-Step Mathematical Explanation:
1. Isolate the center variable term by subtracting $4$ from all three sections:
   $$-12 - 4 \\le -2x < 8 - 4$$
   $$-16 \\le -2x < 4$$
2. Divide all parts by the negative coefficient $-2$. Remember, dividing by a negative number MUST reverse BOTH inequality directions:
   $$\\frac{-16}{-2} \\ge x > \\frac{4}{-2}$$
   $$8 \\ge x > -2$$
3. Rewrite the compound inequality in standard ascending order:
   $$-2 < x \\le 8$$
4. Translate to interval notation. The open strict inequality ($<$) gets a parenthesis, and the closed non-strict inequality ($\\le$) gets a square bracket:
   $$(-2, 8]$$

Tutor Pro-Tip:
Mind your parenthesis styling! On the Digital SAT, open intervals (represented by $<$ or $>$ or open points) map to parentheses, and closed intervals (represented by $\\le$ or $\\ge$ or solid points) map to square brackets. Getting these details right is crucial for perfect scores!`,
    diagram: {
      id: "ch6-q23-diagram",
      title: "Bounded Corridor: -2 < x <= 8",
      caption: "Shaded vertical corridor between the dashed boundary line x = -2 (excluded) and solid line x = 8 (included).",
      xAxisLabel: "x",
      yAxisLabel: "y",
      xRange: [-4, 10],
      yRange: [-5, 5],
      xStep: 2,
      yStep: 2,
      curves: [
        {
          type: "line",
          points: [
            [-2, -5],
            [-2, 5],
            [8, 5],
            [8, -5],
            [-2, -5]
          ],
          color: "transparent",
          shade: "region",
          shadeColor: "rgba(59, 130, 246, 0.15)"
        },
        {
          type: "vertical_line",
          xIntercept: -2,
          color: "#3b82f6",
          style: "dashed",
          label: "x = -2"
        },
        {
          type: "vertical_line",
          xIntercept: 8,
          color: "#3b82f6",
          style: "solid",
          label: "x = 8"
        }
      ]
    }
  },
  {
    id: "ch6-q24",
    number: 4,
    exerciseNumber: 2,
    exerciseTitle: "Module 2: Hard Questions",
    question: "Solve the absolute value equation: $|4x - 8| = 0$.",
    options: ["$x = 2$", "$x = -2$", "$x = 2$ or $x = -2$", "No solution"],
    correctIndex: 0,
    correctAnswerText: "$x = 2$",
    explanation: `Step-by-Step Mathematical Explanation:
1. Absolute value represents a distance. The only number whose distance is $0$ is $0$ itself.
2. Remove the absolute value brackets and set the inner expression directly to $0$:
   $$4x - 8 = 0$$
3. Solve for $x$:
   $$4x = 8 \\implies x = 2$$

Tutor Pro-Tip:
Zero is unique! While non-zero absolute value equations $|u| = k$ always split into two separate solutions ($u = k$ and $u = -k$), an absolute value set to zero has exactly ONE solution because $+0$ and $-0$ are identical.`,
    diagram: {
      id: "ch6-q24-diagram",
      title: "Point Solution: x = 2",
      caption: "A single coordinate solution point on the line x = 2.",
      xAxisLabel: "x",
      yAxisLabel: "y",
      xRange: [-2, 6],
      yRange: [-5, 5],
      xStep: 1,
      yStep: 2,
      curves: [
        {
          type: "vertical_line",
          xIntercept: 2,
          color: "#3b82f6",
          style: "solid",
          label: "x = 2",
          highlightPoints: [{ x: 2, y: 0, label: "x = 2", color: "#3b82f6" }]
        }
      ]
    }
  },
  {
    id: "ch6-q25",
    number: 5,
    exerciseNumber: 2,
    exerciseTitle: "Module 2: Hard Questions",
    question: "Solve the absolute value inequality: $|x + 9| < -3$.",
    options: ["No Solution", "$x < -12$", "$x > -6$", "All real numbers"],
    correctIndex: 0,
    correctAnswerText: "No Solution",
    explanation: `Step-by-Step Mathematical Explanation:
1. Examine the inequality:
   $$|x + 9| < -3$$
2. By definition, the absolute value of any real expression represents its distance from a point on the number line. Distance is ALWAYS non-negative ($|u| \\ge 0$).
3. A non-negative quantity can never be strictly less than a negative number (such as $-3$).
4. Therefore, no value of $x$ can satisfy the inequality, resulting in **No Solution**.

Tutor Pro-Tip:
Save precious seconds with the **Sign Verification Shortcut**! If you see an absolute value isolated on one side and a negative number on the other, stop calculation and check the sign:
- $|u| < \\text{Negative} \\implies$ **No Solution**
- $|u| > \\text{Negative} \\implies$ **All Real Numbers**`,
    diagram: {
      id: "ch6-q25-diagram",
      title: "No Solution Region",
      caption: "The graph is empty because there are no valid solutions to plot.",
      xAxisLabel: "x",
      yAxisLabel: "y",
      xRange: [-15, -5],
      yRange: [-5, 5],
      xStep: 2,
      yStep: 2,
      curves: []
    }
  },
  {
    id: "ch6-q26",
    number: 6,
    exerciseNumber: 2,
    exerciseTitle: "Module 2: Hard Questions",
    question: "Solve the absolute value inequality: $|2x - 7| \\ge -5$.",
    options: ["All Real Numbers", "$x \\ge 1$", "$x \\le 6$", "No Solution"],
    correctIndex: 0,
    correctAnswerText: "All Real Numbers",
    explanation: `Step-by-Step Mathematical Explanation:
1. Evaluate the absolute value definition: The output of an absolute value expression is always greater than or equal to $0$ for any real input of $x$ ($|2x - 7| \\ge 0$).
2. Since any non-negative number is always greater than or equal to any negative number (and $0 \\ge -5$ is always true):
3. The inequality holds true for **All Real Numbers** ($(-\\infty, \\infty)$).

Tutor Pro-Tip:
Don't fall into the algebraic autopilot trap! If you blindly split this into two inequalities ($2x - 7 \\ge -5$ and $2x - 7 \\le 5$), you will waste valuable time and end up with incorrect, restricted intervals. Always inspect the constant term's sign first!`,
    diagram: {
      id: "ch6-q26-diagram",
      title: "All Real Numbers Solution",
      caption: "The entire coordinate plane is highlighted because all real coordinates are valid solutions.",
      xAxisLabel: "x",
      yAxisLabel: "y",
      xRange: [-5, 5],
      yRange: [-5, 5],
      xStep: 2,
      yStep: 2,
      curves: [
        {
          type: "vertical_line",
          xIntercept: -5,
          color: "transparent",
          shade: "right",
          shadeColor: "rgba(59, 130, 246, 0.15)"
        },
        {
          type: "vertical_line",
          xIntercept: 5,
          color: "transparent",
          shade: "left",
          shadeColor: "rgba(59, 130, 246, 0.15)"
        }
      ]
    }
  },
  {
    id: "ch6-q27",
    number: 7,
    exerciseNumber: 2,
    exerciseTitle: "Module 2: Hard Questions",
    question: "Solve the quadratic inequality: $x(x - 6) < 0$.",
    options: ["$(0, 6)$", "$(-\\infty, 0) \\cup (6, \\infty)$", "$[0, 6]$", "No solution"],
    correctIndex: 0,
    correctAnswerText: "$(0, 6)$",
    explanation: `Step-by-Step Mathematical Explanation:
1. Identify the critical boundary points by setting the expression equal to zero:
   $$x(x - 6) = 0 \\implies x = 0 \\quad \\text{and} \\quad x = 6$$
2. These points partition the domain into three intervals: $x < 0$, $0 < x < 6$, and $x > 6$.
3. Test a point inside each interval to find where the product is negative ($< 0$):
   - For $x = -1$: $(-1)(-1 - 6) = 7 > 0$ (Positive, Fails)
   - For $x = 1$: $(1)(1 - 6) = -5 < 0$ (Negative, Holds)
   - For $x = 7$: $(7)(7 - 6) = 7 > 0$ (Positive, Fails)
4. The solution interval is:
   $$(0, 6)$$

Tutor Pro-Tip:
Zero-intercept short-cut! When a quadratic inequality is factored with roots $0$ and $r$ (where $r > 0$) and has form $x(x - r) < 0$, the solution is always the bounded interval $(0, r)$.`,
    diagram: {
      id: "ch6-q27-diagram",
      title: "Parabolic Valley: x(x - 6) < 0",
      caption: "The solution region lies in the valley of the parabola y = x(x-6) between the x-intercepts at 0 and 6.",
      xAxisLabel: "x",
      yAxisLabel: "y",
      xRange: [-2, 8],
      yRange: [-10, 10],
      xStep: 2,
      yStep: 5,
      curves: [
        {
          type: "function",
          expression: "x*x - 6*x",
          color: "#3b82f6",
          style: "solid",
          label: "y = x² - 6x"
        },
        {
          type: "function",
          expression: "(x >= 0 && x <= 6) ? (x*x - 6*x) : null",
          color: "transparent",
          style: "solid",
          shade: "below",
          shadeColor: "rgba(59, 130, 246, 0.15)"
        },
        {
          type: "vertical_line",
          xIntercept: 0,
          color: "#3b82f6",
          style: "dashed",
          label: "x = 0"
        },
        {
          type: "vertical_line",
          xIntercept: 6,
          color: "#3b82f6",
          style: "dashed",
          label: "x = 6"
        }
      ]
    }
  },
  {
    id: "ch6-q28",
    number: 8,
    exerciseNumber: 2,
    exerciseTitle: "Module 2: Hard Questions",
    question: "Solve the cubic polynomial inequality: $(x + 1)(x - 3)(x - 5) \\le 0$.",
    options: ["$(-\\infty, -1] \\cup [3, 5]$", "$[-1, 3] \\cup [5, \\infty)$", "$(-\\infty, -1) \\cup (3, 5)$", "$[-1, 5]$"],
    correctIndex: 0,
    correctAnswerText: "$(-\\infty, -1] \\cup [3, 5]$",
    explanation: `Step-by-Step Mathematical Explanation:
1. Identify the critical boundary points:
   $$x = -1, \\quad x = 3, \\quad \\text{and} \\quad x = 5$$
2. These partition the number line into four intervals:
   - Interval 1: $x \\le -1$
   - Interval 2: $-1 \\le x \\le 3$
   - Interval 3: $3 \\le x \\le 5$
   - Interval 4: $x \\ge 5$
3. Test values in each interval to find where the product is negative or zero ($\\le 0$):
   - In Interval 1 (test $x = -2$): $(-2+1)(-2-3)(-2-5) = (-1)(-5)(-7) = -35 \\le 0$ (Holds)
   - In Interval 2 (test $x = 0$): $(0+1)(0-3)(0-5) = (1)(-3)(-5) = 15 > 0$ (Fails)
   - In Interval 3 (test $x = 4$): $(4+1)(4-3)(4-5) = (5)(1)(-1) = -5 \\le 0$ (Holds)
   - In Interval 4 (test $x = 6$): $(6+1)(6-3)(6-5) = (7)(3)(1) = 21 > 0$ (Fails)
4. Combine the holding regions:
   $$(-\\infty, -1] \\cup [3, 5]$$

Tutor Pro-Tip:
The sign-alternation rule! For standard polynomial products with positive lead coefficients and single roots, signs ALWAYS alternate (+ / - / + / -) from right to left, starting with (+) for the rightmost interval. Knowing this allows you to fill out interval signs in a fraction of a second!`,
    diagram: {
      id: "ch6-q28-diagram",
      title: "Cubic Wave: (x + 1)(x - 3)(x - 5) <= 0",
      caption: "Graph showing the shaded regions below the x-axis for the cubic curve.",
      xAxisLabel: "x",
      yAxisLabel: "y",
      xRange: [-3, 7],
      yRange: [-15, 15],
      xStep: 1,
      yStep: 5,
      curves: [
        {
          type: "function",
          expression: "(x + 1)*(x - 3)*(x - 5)",
          color: "#3b82f6",
          style: "solid",
          label: "y = (x+1)(x-3)(x-5)"
        },
        {
          type: "vertical_line",
          xIntercept: -1,
          color: "#3b82f6",
          style: "solid",
          shade: "left",
          shadeColor: "rgba(59, 130, 246, 0.15)",
          label: "x = -1"
        },
        {
          type: "vertical_line",
          xIntercept: 3,
          color: "#3b82f6",
          style: "solid",
          shade: "right",
          shadeColor: "rgba(59, 130, 246, 0.15)",
          label: "x = 3"
        },
        {
          type: "vertical_line",
          xIntercept: 5,
          color: "#3b82f6",
          style: "solid",
          shade: "left",
          shadeColor: "rgba(59, 130, 246, 0.15)",
          label: "x = 5"
        }
      ]
    }
  },
  {
    id: "ch6-q29",
    number: 9,
    exerciseNumber: 2,
    exerciseTitle: "Module 2: Hard Questions",
    question: "Solve the rational inequality: $\\frac{1}{x} < 2$. Which of the following is the correct solution interval?",
    options: ["$(-\\infty, 0) \\cup (0.5, \\infty)$", "$(0, 0.5)$", "$(-\\infty, 0.5)$", "$(0.5, \\infty)$"],
    correctIndex: 0,
    correctAnswerText: "$(-\\infty, 0) \\cup (0.5, \\infty)$",
    explanation: `Step-by-Step Mathematical Explanation:
1. Rearrange to set one side of the inequality to zero:
   $$\\frac{1}{x} - 2 < 0$$
2. Find a common denominator to create a single rational expression:
   $$\\frac{1 - 2x}{x} < 0$$
3. Identify critical boundary points:
   - Numerator: $1 - 2x = 0 \\implies x = 0.5$
   - Denominator: $x = 0$
4. Test points in the resulting intervals:
   - For $x < 0$ (e.g., $-1$): $\\frac{1 - 2(-1)}{-1} = \\frac{3}{-1} = -3 < 0$ (True)
   - For $0 < x < 0.5$ (e.g., $0.25$): $\\frac{1 - 2(0.25)}{0.25} = \\frac{0.5}{0.25} = 2 > 0$ (False)
   - For $x > 0.5$ (e.g., $1$): $\\frac{1 - 2(1)}{1} = \\frac{-1}{1} = -1 < 0$ (True)
5. Combine holding regions:
   $$(-\\infty, 0) \\cup (0.5, \\infty)$$

Tutor Pro-Tip:
Avoid cross-multiplication with variables! Cross-multiplying by $x$ directly ($1 < 2x \\implies x > 0.5$) is a massive trap because it assumes $x$ is positive. If $x$ is negative, multiplying flips the inequality sign. Always move all terms to one side first to protect your points!`,
    diagram: {
      id: "ch6-q29-diagram",
      title: "Hyperbolic Curve: 1/x < 2",
      caption: "The shaded regions cover the negative branch of the hyperbola and the portion of the positive branch exceeding 2.",
      xAxisLabel: "x",
      yAxisLabel: "y",
      xRange: [-4, 4],
      yRange: [-10, 10],
      xStep: 1,
      yStep: 2,
      curves: [
        {
          type: "function",
          expression: "1/x",
          color: "#3b82f6",
          style: "solid",
          label: "y = 1/x"
        },
        {
          type: "vertical_line",
          xIntercept: 0,
          color: "#3b82f6",
          style: "dashed",
          shade: "left",
          shadeColor: "rgba(59, 130, 246, 0.15)",
          label: "x = 0"
        },
        {
          type: "vertical_line",
          xIntercept: 0.5,
          color: "#3b82f6",
          style: "dashed",
          shade: "right",
          shadeColor: "rgba(59, 130, 246, 0.15)",
          label: "x = 0.5"
        }
      ]
    }
  },
  {
    id: "ch6-q30",
    number: 10,
    exerciseNumber: 2,
    exerciseTitle: "Module 2: Hard Questions",
    question: "A delivery van has a maximum load capacity of $1,200\\text{ kg}$. It carries $x$ small crates of $30\\text{ kg}$ each and $y$ large crates of $50\\text{ kg}$ each. Write an inequality representing this constraint.",
    options: ["$30x + 50y \\le 1200$", "$30x + 50y \\ge 1200$", "$50x + 30y \\le 1200$", "$30x + 50y < 1200$"],
    correctIndex: 0,
    correctAnswerText: "$30x + 50y \\le 1200$",
    explanation: `Step-by-Step Mathematical Explanation:
1. Formulate the weight contribution of small crates: $30\\text{ kg}$ per crate times $x$ crates $= 30x\\text{ kg}$.
2. Formulate the weight contribution of large crates: $50\\text{ kg}$ per crate times $y$ crates $= 50y\\text{ kg}$.
3. Express total weight: $30x + 50y$.
4. Apply the capacity limit: The phrase "maximum capacity of $1,200\\text{ kg}$" means the total weight can be up to $1,200\\text{ kg}$ but cannot exceed it. This translates to the non-strict less-than-or-equal-to sign ($\\le$):
   $$30x + 50y \\le 1200$$

Tutor Pro-Tip:
Key verbal constraint translation codes:
- "At most", "Maximum", "Up to", "Does not exceed" $\\implies \\le$
- "At least", "Minimum", "No less than" $\\implies \\ge$
- "Exceeds", "More than" $\\implies >$
- "Fewer than", "Less than" $\\implies <$`,
    diagram: {
      id: "ch6-q30-diagram",
      title: "Van Capacity Constraint Boundary",
      caption: "Feasible first-quadrant region representing the loading combinations that satisfy the capacity limit.",
      xAxisLabel: "Small Crates (x)",
      yAxisLabel: "Large Crates (y)",
      xRange: [0, 50],
      yRange: [0, 30],
      xStep: 10,
      yStep: 10,
      curves: [
        {
          type: "function",
          expression: "24 - 0.6*x",
          color: "#3b82f6",
          style: "solid",
          shade: "below",
          shadeColor: "rgba(59, 130, 246, 0.15)",
          label: "30x + 50y = 1200"
        }
      ],
      textAnnotations: [
        { x: 10, y: 10, text: "Feasible Region", color: "#1e3a8a", fontSize: 10, fontWeight: "bold" }
      ]
    }
  },
  {
    id: "ch6-q31",
    number: 11,
    exerciseNumber: 2,
    exerciseTitle: "Module 2: Hard Questions",
    question: "Which of the following descriptions matches the graph of the inequality: $y \\ge -3$?",
    options: [
      "A horizontal solid line at $y = -3$, with shading everywhere above the line.",
      "A horizontal dashed line at $y = -3$, with shading everywhere above the line.",
      "A vertical solid line at $x = -3$, with shading everywhere to the right.",
      "A horizontal solid line at $y = -3$, with shading everywhere below the line."
    ],
    correctIndex: 0,
    correctAnswerText: "A horizontal solid line at $y = -3$, with shading everywhere above the line.",
    explanation: `Step-by-Step Mathematical Explanation:
1. Locate the boundary line: $y = -3$ represents a constant horizontal line passing through $-3$ on the vertical y-axis.
2. Determine boundary style: The inequality includes equality ($\\ge$), which means the boundary line is **solid**.
3. Determine shading direction: The inequality represents all y-coordinates greater than or equal to $-3$ ($\\ge -3$), which are located above the line. Hence, the shading is **above** the line.

Tutor Pro-Tip:
Single variable lines:
- $y \\ge c \\implies$ Horizontal line, shade **above**.
- $x \\ge c \\implies$ Vertical line, shade **right**.`,
    diagram: {
      id: "ch6-q31-diagram",
      title: "Horizontal Bound: y >= -3",
      caption: "Horizontal solid boundary line at y = -3 with shading above.",
      xAxisLabel: "x",
      yAxisLabel: "y",
      xRange: [-5, 5],
      yRange: [-5, 5],
      xStep: 2,
      yStep: 2,
      curves: [
        {
          type: "function",
          expression: "-3",
          color: "#3b82f6",
          style: "solid",
          shade: "above",
          shadeColor: "rgba(59, 130, 246, 0.15)",
          label: "y = -3"
        }
      ]
    }
  },
  {
    id: "ch6-q32",
    number: 12,
    exerciseNumber: 2,
    exerciseTitle: "Module 2: Hard Questions",
    question: "Which of the following descriptions matches the graph of the inequality: $x < 4$?",
    options: [
      "A vertical dashed line at $x = 4$, with shading everywhere to the left.",
      "A vertical solid line at $x = 4$, with shading everywhere to the left.",
      "A horizontal dashed line at $y = 4$, with shading everywhere below.",
      "A vertical dashed line at $x = 4$, with shading everywhere to the right."
    ],
    correctIndex: 0,
    correctAnswerText: "A vertical dashed line at $x = 4$, with shading everywhere to the left.",
    explanation: `Step-by-Step Mathematical Explanation:
1. Locate the boundary line: $x = 4$ represents a vertical line passing through $4$ on the horizontal x-axis.
2. Determine boundary style: Since the inequality is strict ($<$), the boundary line is **dashed**.
3. Determine shading: The inequality is $x < 4$, which means we shade all x-values smaller than $4$ (to the left of $4$).

Tutor Pro-Tip:
Always match "less than" on vertical lines directly with "left"! Smaller values on the horizontal axis are always to the left.`,
    diagram: {
      id: "ch6-q32-diagram",
      title: "Vertical Bound: x < 4",
      caption: "Vertical dashed boundary line at x = 4 with shading to the left.",
      xAxisLabel: "x",
      yAxisLabel: "y",
      xRange: [-2, 6],
      yRange: [-5, 5],
      xStep: 2,
      yStep: 2,
      curves: [
        {
          type: "vertical_line",
          xIntercept: 4,
          color: "#3b82f6",
          style: "dashed",
          shade: "left",
          shadeColor: "rgba(59, 130, 246, 0.15)",
          label: "x = 4"
        }
      ]
    }
  },
  {
    id: "ch6-q33",
    number: 13,
    exerciseNumber: 2,
    exerciseTitle: "Module 2: Hard Questions",
    question: "Find the complete set of integer solutions that satisfy the compound inequality: $-3 \\le 2x - 1 < 5$.",
    options: ["$\\{-1, 0, 1, 2\\}$", "$\\{0, 1, 2\\}$", "$\\{-1, 0, 1, 2, 3\\}$", "$\\{-2, -1, 0, 1, 2\\}$"],
    correctIndex: 0,
    correctAnswerText: "$\\{-1, 0, 1, 2\\}$",
    explanation: `Step-by-Step Mathematical Explanation:
1. Isolate $x$ in the compound inequality:
   - Add $1$ to all parts:
     $$-3 + 1 \\le 2x < 5 + 1$$
     $$-2 \\le 2x < 6$$
   - Divide all parts by positive $2$:
     $$-1 \\le x < 3$$
2. List the integers ($Z$) that fall within this bounded interval:
   - The left bound includes $-1$ because of the $\\le$ sign (included).
   - The right bound excludes $3$ because of the $<$ sign (excluded).
   - Therefore, the valid integers are $-1, 0, 1,$ and $2$.
3. Write the solution as a set: $\\{-1, 0, 1, 2\\}$.

Tutor Pro-Tip:
Watch the boundaries! Misinterpreting $\\le$ vs $<$ on boundary integers will cause you to miss points on grid-in questions. Write the values out carefully!`,
    diagram: {
      id: "ch6-q33-diagram",
      title: "Integer Sets: -1 <= x < 3",
      caption: "Corridor with solid points highlighting the valid integers -1, 0, 1, and 2.",
      xAxisLabel: "x",
      yAxisLabel: "y",
      xRange: [-3, 5],
      yRange: [-5, 5],
      xStep: 1,
      yStep: 2,
      curves: [
        {
          type: "line",
          points: [
            [-1, -5],
            [-1, 5],
            [3, 5],
            [3, -5],
            [-1, -5]
          ],
          color: "transparent",
          shade: "region",
          shadeColor: "rgba(59, 130, 246, 0.15)"
        },
        {
          type: "vertical_line",
          xIntercept: -1,
          color: "#3b82f6",
          style: "solid",
          label: "x = -1",
          highlightPoints: [
            { x: -1, y: 0, label: "-1", color: "#3b82f6" },
            { x: 0, y: 0, label: "0", color: "#3b82f6" },
            { x: 1, y: 0, label: "1", color: "#3b82f6" },
            { x: 2, y: 0, label: "2", color: "#3b82f6" }
          ]
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
    id: "ch6-q34",
    number: 14,
    exerciseNumber: 2,
    exerciseTitle: "Module 2: Hard Questions",
    question: "Solve the quadratic inequality: $x^2 - 4x + 4 > 0$.",
    options: ["All real numbers except $x = 2$", "All real numbers", "$x > 2$", "No solution"],
    correctIndex: 0,
    correctAnswerText: "All real numbers except $x = 2$",
    explanation: `Step-by-Step Mathematical Explanation:
1. Recognize the perfect square trinomial on the left side of the inequality:
   $$x^2 - 4x + 4 = (x - 2)^2$$
2. Rewrite the inequality:
   $$(x - 2)^2 > 0$$
3. By properties of real numbers, the square of any real number is always non-negative (greater than or equal to $0$):
   $$(x - 2)^2 \\ge 0$$
4. Since the inequality is strictly greater than zero ($> 0$), we only need to exclude values that make the expression exactly $0$:
   $$x - 2 = 0 \\implies x = 2$$
5. Therefore, the inequality holds true for all real numbers except $x = 2$.

Tutor Pro-Tip:
Perfect square patterns can be solved in a split-second! Whenever you factor a quadratic into a squared term $(x - c)^2$:
- $(x-c)^2 > 0 \\implies$ **All real numbers except x = c**
- $(x-c)^2 \\ge 0 \\implies$ **All real numbers**
- $(x-c)^2 < 0 \\implies$ **No solution**
- $(x-c)^2 \\le 0 \\implies$ **x = c** (single point!)`,
    diagram: {
      id: "ch6-q34-diagram",
      title: "Parabolic Apex: (x - 2)² > 0",
      caption: "The graph of y = (x - 2)² touches the x-axis exactly at the vertex point x = 2, meaning y > 0 everywhere else.",
      xAxisLabel: "x",
      yAxisLabel: "y",
      xRange: [-2, 6],
      yRange: [-1, 10],
      xStep: 1,
      yStep: 2,
      curves: [
        {
          type: "function",
          expression: "(x - 2)*(x - 2)",
          color: "#3b82f6",
          style: "solid",
          label: "y = (x-2)²",
          highlightPoints: [{ x: 2, y: 0, label: "Vertex (2,0) excluded", color: "#1e3a8a" }]
        }
      ]
    }
  },
  {
    id: "ch6-q35",
    number: 15,
    exerciseNumber: 2,
    exerciseTitle: "Module 2: Hard Questions",
    question: "Solve the quadratic inequality: $x^2 - 6x + 9 \\le 0$.",
    options: ["$x = 3$", "$x \\le 3$", "$x \\ge 3$", "No solution"],
    correctIndex: 0,
    correctAnswerText: "$x = 3$",
    explanation: `Step-by-Step Mathematical Explanation:
1. Identify the perfect square trinomial:
   $$x^2 - 6x + 9 = (x - 3)^2$$
2. Rewrite the inequality:
   $$(x - 3)^2 \\le 0$$
3. Real squared terms can never be strictly negative ($< 0$).
4. Therefore, the only way for the expression to be less than or equal to $0$ is for it to be exactly equal to $0$:
   $$(x - 3)^2 = 0 \\implies x - 3 = 0 \\implies x = 3$$
5. Thus, the unique solution is $x = 3$.

Tutor Pro-Tip:
"Single-point" inequality exceptions! Usually, inequalities describe infinite regions or intervals, but perfect squares can squeeze inequalities down into a single isolated point value. Watch for this pattern!`,
    diagram: {
      id: "ch6-q35-diagram",
      title: "Perfect Square Valley: (x - 3)² <= 0",
      caption: "The upward-opening parabola touches the x-axis exactly at its vertex point (3, 0), which is the only valid solution.",
      xAxisLabel: "x",
      yAxisLabel: "y",
      xRange: [-1, 7],
      yRange: [-1, 10],
      xStep: 1,
      yStep: 2,
      curves: [
        {
          type: "function",
          expression: "(x - 3)*(x - 3)",
          color: "#3b82f6",
          style: "solid",
          label: "y = (x-3)²",
          highlightPoints: [{ x: 3, y: 0, label: "x = 3 ONLY", color: "#1e3a8a" }]
        }
      ]
    }
  },
  {
    id: "ch6-q36",
    number: 16,
    exerciseNumber: 2,
    exerciseTitle: "Module 2: Hard Questions",
    question: "A system of linear inequalities is defined by $y > x$ and $y < -x$. Which quadrant contains the entire solution set of this system?",
    options: ["Region I (Quadrant I)","Region II (Quadrant II)","Region III (Quadrant III)","Region IV (Quadrant IV)"],
    correctIndex: 0,
    correctAnswerText: "Region I (Quadrant I)",
    explanation: `Step-by-Step Mathematical Explanation:
1. Analyze the first inequality: $y > x$ represents the half-plane strictly above the main diagonal line $y = x$ (slanted at $45^\\circ$ upward).
2. Analyze the second inequality: $y < -x$ represents the half-plane strictly below the anti-diagonal line $y = -x$ (slanted at $45^\\circ$ downward).
3. Find where these shaded regions overlap:
   - For points in Quadrant I ($x > 0, y > 0$), a point like $(1, 2)$ satisfies $y > x$ but fails $y < -x$ ($2 < -1$ is False).
   - For points in Quadrant II ($x < 0, y > 0$), a point like $(-2, 1)$ satisfies $y > x$ ($1 > -2$, True) and also satisfies $y < -x$ ($1 < 2$, True).
   - For points in Quadrant III ($x < 0, y < 0$), a point like $(-2, -3)$ fails $y > x$ ($-3 > -2$ is False).
   - For points in Quadrant IV ($x > 0, y < 0$), a point like $(2, -3)$ fails $y > x$ ($-3 > 2$ is False).
4. Therefore, the overlapping region lies entirely inside **Quadrant II**.

Tutor Pro-Tip:
The **Coordinate Sign-Analysis Shortcut**! In Quadrant II, $x$ is always negative ($x < 0$) and $y$ is always positive ($y > 0$).
- Negative $x$ means $-x$ is positive.
- Thus, $y$ (positive) is greater than $x$ (negative), satisfying $y > x$.
- Also, $y$ (positive) can be less than $-x$ (larger positive), satisfying $y < -x$.
This quick sign review confirms Quadrant II instantly without drawing anything!`,
    diagram: {
      id: "ch6-q36-diagram",
      title: "System Overlap: y > x and y < -x",
      caption: "The overlapping shaded region is trapped entirely inside Quadrant II.",
      xAxisLabel: "x",
      yAxisLabel: "y",
      xRange: [-6, 6],
      yRange: [-6, 6],
      xStep: 2,
      yStep: 2,
      curves: [
        {
          type: "function",
          expression: "x",
          color: "#3b82f6",
          style: "dashed",
          shade: "above",
          shadeColor: "rgba(59, 130, 246, 0.15)",
          label: "y = x"
        },
        {
          type: "function",
          expression: "-x",
          color: "#3b82f6",
          style: "dashed",
          shade: "below",
          shadeColor: "rgba(59, 130, 246, 0.15)",
          label: "y = -x"
        }
      ],
      textAnnotations: [
        { x: -3, y: 2, text: "Overlap Zone (Q2)", color: "#1e3a8a", fontSize: 10, fontWeight: "bold" }
      ]
    }
  },
  {
    id: "ch6-q37",
    number: 17,
    exerciseNumber: 2,
    exerciseTitle: "Module 2: Hard Questions",
    question: "A student needs an average score of at least $85$ across $4$ tests. Their first three test scores are $80$, $88$, and $82$. What is the minimum score the student must earn on the fourth test to meet their goal?",
    options: ["$90$", "$85$", "$88$", "$92$"],
    correctIndex: 0,
    correctAnswerText: "$90$",
    explanation: `Step-by-Step Mathematical Explanation:
1. Let $x$ represent the score of the fourth test.
2. Formulate the average equation:
   $$\\frac{80 + 88 + 82 + x}{4} \\ge 85$$
3. Simplify the numerator:
   $$\\frac{250 + x}{4} \\ge 85$$
4. Multiply both sides by $4$ to clear the denominator:
   $$250 + x \\ge 340$$
5. Subtract $250$ from both sides to find the minimum score $x$:
   $$x \\ge 90$$

Tutor Pro-Tip:
The **Target Total Sum Shortcut**! Average calculations are simpler using sums:
$$\\text{Target Sum} = \\text{Target Average} \\times \\text{Number of Tests} = 85 \\times 4 = 340$$
$$\\text{Current Sum} = 80 + 88 + 82 = 250$$
$$\\text{Score Needed} = \\text{Target Sum} - \\text{Current Sum} = 340 - 250 = 90\\text{ points}$$
Using sums avoids division algebra completely!`,
    diagram: {
      id: "ch6-q37-diagram",
      title: "Average Score Target",
      caption: "Graph representing the fourth test score requirement of x >= 90.",
      xAxisLabel: "Test Score (x)",
      yAxisLabel: "y",
      xRange: [50, 100],
      yRange: [-5, 5],
      xStep: 10,
      yStep: 2,
      curves: [
        {
          type: "vertical_line",
          xIntercept: 90,
          color: "#3b82f6",
          style: "solid",
          shade: "right",
          shadeColor: "rgba(59, 130, 246, 0.15)",
          label: "x = 90"
        }
      ]
    }
  },
  {
    id: "ch6-q38",
    number: 18,
    exerciseNumber: 2,
    exerciseTitle: "Module 2: Hard Questions",
    question: "Solve the inequality: $\\frac{3x - 1}{2} \\le \\frac{x + 4}{3}$.",
    options: ["$x \\le \\frac{11}{7}$", "$x \\ge \\frac{11}{7}$", "$x \\le \\frac{9}{7}$", "$x \\le 2$"],
    correctIndex: 0,
    correctAnswerText: "$x \\le \\frac{11}{7}$",
    explanation: `Step-by-Step Mathematical Explanation:
1. Multiply both sides by the common denominator $6$ (or cross-multiply because both denominators are positive):
   $$3(3x - 1) \\le 2(x + 4)$$
2. Expand both sides of the inequality:
   $$9x - 3 \\le 2x + 8$$
3. Subtract $2x$ from both sides to group variable terms on the left:
   $$7x - 3 \\le 8$$
4. Add $3$ to both sides:
   $$7x \\le 11$$
5. Divide by positive $7$:
   $$x \\le \\frac{11}{7}$$

Tutor Pro-Tip:
Cross-multiplication is only legal if you are 100% sure both denominators are positive numbers! If there are variables in the denominators, NEVER cross-multiply—subtract terms to make a single expression instead.`,
    diagram: {
      id: "ch6-q38-diagram",
      title: "Fractional Inequality Solution",
      caption: "Solid boundary at x = 11/7 with shading to the left.",
      xAxisLabel: "x",
      yAxisLabel: "y",
      xRange: [-4, 6],
      yRange: [-5, 5],
      xStep: 2,
      yStep: 2,
      curves: [
        {
          type: "vertical_line",
          xIntercept: 1.57,
          color: "#3b82f6",
          style: "solid",
          shade: "left",
          shadeColor: "rgba(59, 130, 246, 0.15)",
          label: "x = 11/7"
        }
      ]
    }
  },
  {
    id: "ch6-q39",
    number: 19,
    exerciseNumber: 2,
    exerciseTitle: "Module 2: Hard Questions",
    question: "Plot the inequality: $|x| + |y| \\le 4$ on a coordinate grid. Which geometric shape represents the shaded solution region?",
    options: [
      "A diamond-shaped region (square rotated 45°).",
      "A perfect circle with radius 4.",
      "A square with sides parallel to the x and y axes.",
      "An unbounded region."
    ],
    correctIndex: 0,
    correctAnswerText: "A diamond-shaped region (square rotated 45°).",
    explanation: `Step-by-Step Mathematical Explanation:
1. Deconstruct the absolute value inequalities by analyzing quadrant cases:
   - **Quadrant I** ($x \\ge 0, y \\ge 0$): $x + y \\le 4 \\implies y \\le -x + 4$ (bounded by line connecting $(4,0)$ and $(0,4)$).
   - **Quadrant II** ($x \\le 0, y \\ge 0$): $-x + y \\le 4 \\implies y \\le x + 4$ (bounded by line connecting $(-4,0)$ and $(0,4)$).
   - **Quadrant III** ($x \\le 0, y \\le 0$): $-x - y \\le 4 \\implies y \\ge -x - 4$ (bounded by line connecting $(-4,0)$ and $(0,-4)$).
   - **Quadrant IV** ($x \\ge 0, y \\le 0$): $x - y \\le 4 \\implies y \\ge x - 4$ (bounded by line connecting $(4,0)$ and $(0,-4)$).
2. Plotted together, these four linear segments form a closed, solid diamond shape (which is a square rotated $45^\\circ$) centered at the origin $(0,0)$ with vertices at $(4,0)$, $(0,4)$, $(-4,0)$, and $(0,-4)$.

Tutor Pro-Tip:
The **Diamond Boundary Formula**! Any inequality of the form $|x| + |y| \\le k$ (where $k > 0$) forms a solid diamond shape centered at $(0,0)$ with vertices at $(k, 0)$, $(0, k)$, $(-k, 0)$, and $(0, -k)$. The area of this diamond is always equal to $2k^2$! For $k = 4$, the area is $2(4^2) = 32$!`,
    diagram: {
      id: "ch6-q39-diagram",
      title: "Diamond Region: |x| + |y| <= 4",
      caption: "Symmetrical diamond-shaped shaded region centered at (0,0) with solid boundary lines.",
      xAxisLabel: "x",
      yAxisLabel: "y",
      xRange: [-6, 6],
      yRange: [-6, 6],
      xStep: 2,
      yStep: 2,
      curves: [
        {
          type: "line",
          points: [[4, 0], [0, 4], [-4, 0], [0, -4], [4, 0]],
          color: "#3b82f6",
          style: "solid",
          shade: "region",
          shadeColor: "rgba(59, 130, 246, 0.15)"
        }
      ],
      textAnnotations: [
        { x: 4.2, y: 0.3, text: "(4,0)", color: "#1e3a8a" },
        { x: 0.2, y: 4.3, text: "(0,4)", color: "#1e3a8a" },
        { x: -5, y: 0.3, text: "(-4,0)", color: "#1e3a8a" },
        { x: 0.2, y: -4.3, text: "(0,-4)", color: "#1e3a8a" }
      ]
    }
  },
  {
    id: "ch6-q40",
    number: 20,
    exerciseNumber: 2,
    exerciseTitle: "Module 2: Hard Questions",
    question: "Solve the absolute value quadratic inequality: $|x^2 - 5| \\le 4$.",
    options: ["$[-3, -1] \\cup [1, 3]$", "$[-3, 3]$", "$[1, 3]$", "$[-3, -1]$"],
    correctIndex: 0,
    correctAnswerText: "$[-3, -1] \\cup [1, 3]$",
    explanation: `Step-by-Step Mathematical Explanation:
1. Apply the Absolute Value Split Strategy for bounded intervals ($|u| \\le k \\implies -k \\le u \\le k$):
   $$-4 \\le x^2 - 5 \\le 4$$
2. Add $5$ to all three parts to isolate the $x^2$ term:
   $$1 \\le x^2 \\le 9$$
3. Decompose this into a system of two separate inequality constraints:
   - Constraint 1: $x^2 \\ge 1 \\implies |x| \\ge 1 \\implies x \\le -1 \\quad \\text{OR} \\quad x \\ge 1$
   - Constraint 2: $x^2 \\le 9 \\implies |x| \\le 3 \\implies -3 \\le x \\le 3$
4. Find the intersection (overlap) of these two constraints:
   - Combining $x \\le -1$ or $x \\ge 1$ with $-3 \\le x \\le 3$ yields two disjoint intervals:
     $$-3 \\le x \\le -1 \\quad \\text{and} \\quad 1 \\le x \\le 3$$
5. Express as a union of intervals using square brackets since the boundaries are non-strict ($\\le$):
   $$[-3, -1] \\cup [1, 3]$$

Tutor Pro-Tip:
Symmetry is your power! Since $x$ is squared, the solution region MUST be perfectly symmetrical about the y-axis. Checking options for symmetric pairs (like $[-3, -1]$ and $[1, 3]$) can narrow down choices instantly!`,
    diagram: {
      id: "ch6-q40-diagram",
      title: "Bounded Absolute Quadratic Region",
      caption: "Double-corridor solution region representing the union [-3, -1] U [1, 3].",
      xAxisLabel: "x",
      yAxisLabel: "y",
      xRange: [-5, 5],
      yRange: [-5, 5],
      xStep: 1,
      yStep: 2,
      curves: [
        {
          type: "vertical_line",
          xIntercept: -3,
          color: "#3b82f6",
          style: "solid",
          shade: "right",
          shadeColor: "rgba(59, 130, 246, 0.15)"
        },
        {
          type: "vertical_line",
          xIntercept: -1,
          color: "#3b82f6",
          style: "solid",
          shade: "left",
          shadeColor: "rgba(59, 130, 246, 0.15)",
          label: "[-3, -1]"
        },
        {
          type: "vertical_line",
          xIntercept: 1,
          color: "#3b82f6",
          style: "solid",
          shade: "right",
          shadeColor: "rgba(59, 130, 246, 0.15)",
          label: "[1, 3]"
        },
        {
          type: "vertical_line",
          xIntercept: 3,
          color: "#3b82f6",
          style: "solid",
          shade: "left",
          shadeColor: "rgba(59, 130, 246, 0.15)"
        }
      ]
    }
  }
];
