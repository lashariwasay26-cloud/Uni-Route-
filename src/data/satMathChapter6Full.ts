import { FullSatMathChapter } from './satMathConcepts';
import { CHAPTER_6_QUESTIONS_MODULE_1 } from './satMathChapter6QuestionsPart1';
import { CHAPTER_6_QUESTIONS_MODULE_2 } from './satMathChapter6QuestionsPart2';
import { CHAPTER_6_QUESTIONS_MODULE_3 } from './satMathChapter6QuestionsPart3';

export const FULL_CHAPTER_6_INEQUALITIES: FullSatMathChapter = {
  id: "inequalities",
  chapterNumber: 6,
  chapterTitle: "Inequalities",
  pageNumber: 265,
  quote: "On the SAT, an inequality is not just a calculation—it is a geometric boundary. Learn to see the dividing lines, and the shading will take care of itself.",
  introduction: "Welcome to Chapter 6: Inequalities. This chapter provides a complete, master-level exploration of linear, compound, absolute value, quadratic, and rational inequalities. The Digital SAT heavily tests your ability to interpret systems of inequalities, formulate constraint expressions, identify solution regions on coordinate planes, and recognize common sign-change traps. By mastering the visual split strategies and boundary shorthand rules in this chapter, you will turn complex algebraic statements into visual solutions.",
  sections: [
    {
      sectionTitle: "6.1 Core Rules & The \"Sign-Flip Trap\"",
      fullText: "The algebra of inequalities is almost identical to the algebra of equations, with one critical, high-yield exception. When you multiply or divide both sides of an inequality by a negative number, the direction of the inequality sign MUST be reversed.",
      bulletPoints: [
        "The Sign-Flip Trap: If $a > b$ and we multiply or divide both sides by some constant $c < 0$, then $a \\cdot c < b \\cdot c$. Failing to flip the inequality direction is the single most common mistake on SAT algebraic questions.",
        "Additive Invariance: Adding or subtracting any real number from both sides of an inequality never changes the inequality sign's direction ($a > b \\implies a + c > b + c$ for any real $c$).",
        "Positive Multipliers: Multiplying or dividing by a positive constant maintains the inequality direction ($a > b$ and $c > 0 \\implies a \\cdot c > b \\cdot c$)."
      ],
      tables: [
        {
          title: "Inequality Sign Operations Reference Table",
          headers: ["Operation", "Algebraic Rule", "Direction Status", "Example"],
          rows: [
            ["Addition", "If $x > y$, then $x + c > y + c$", "No Change", "If $x > 5 \\implies x + 2 > 7$"],
            ["Subtraction", "If $x > y$, then $x - c > y - c$", "No Change", "If $x > 5 \\implies x - 2 > 3$"],
            ["Positive Multiplication", "If $x > y$ and $c > 0$, then $cx > cy$", "No Change", "If $x > 5 \\implies 2x > 10$"],
            ["Negative Multiplication", "If $x > y$ and $c < 0$, then $cx < cy$", "REVERSES SIGN", "If $x > 5 \\implies -2x < -10$"],
            ["Positive Division", "If $x > y$ and $c > 0$, then $x/c > y/c$", "No Change", "If $x > 10 \\implies x/2 > 5$"],
            ["Negative Division", "If $x > y$ and $c < 0$, then $x/c < y/c$", "REVERSES SIGN", "If $x > 10 \\implies x/-2 < -5$"]
          ]
        }
      ],
      examples: [
        {
          title: "Worked Example 1: Solving a Negative Linear Inequality",
          question: "Solve the linear inequality for $x$: $-4x + 7 \\le 27$. Which of the following represents the correct solution set?",
          options: ["$x \\ge -5$", "$x \\le -5$", "$x \\ge 5$", "$x \\le 5$"],
          correctAnswer: "$x \\ge -5$",
          correctIndex: 0,
          explanation: `Step-by-Step Mathematical Explanation:
1. Start with the given linear inequality:
   $$-4x + 7 \\le 27$$
2. Subtract $7$ from both sides to group constant terms:
   $$-4x \\le 20$$
3. Divide both sides by the negative coefficient $-4$. Because we are dividing by a negative number, we MUST flip the direction of the inequality sign:
   $$x \\ge \\frac{20}{-4}$$
   $$x \\ge -5$$
4. Written in interval notation: $[-5, \\infty)$.

Tutor Pro-Tip:
Always verify your boundary! When you substitute the critical value $x = -5$ into the original expression:
$$-4(-5) + 7 = 20 + 7 = 27$$
Since the inequality includes equality ($\\le$), our boundary must be solid, and any valid coordinate must lie to the right of $-5$.`,
          diagram: {
            id: "example-1-graph",
            title: "Coordinate Plane Graph: -4x + 7 <= 27",
            caption: "The boundary is a solid line at x = -5, with shading covering the entire half-plane to the right.",
            xAxisLabel: "x",
            yAxisLabel: "y",
            xRange: [-10, 5],
            yRange: [-5, 5],
            xStep: 2,
            yStep: 2,
            curves: [
              {
                type: "vertical_line",
                xIntercept: -5,
                color: "#3b82f6",
                style: "solid",
                shade: "right",
                shadeColor: "rgba(59, 130, 246, 0.15)",
                label: "x = -5"
              }
            ]
          }
        },
        {
          title: "Worked Example 2: Bounded Compound Inequalities",
          question: "Solve the compound inequality: -3 < 2x + 1 \le 9.",
          options: ["$(-2, 4]$", "$[-2, 4)$", "$(-2, 4)$", "$[-2, 4]$"],
          correctAnswer: "$(-2, 4]$",
          correctIndex: 0,
          explanation: `Step-by-Step Mathematical Explanation:
1. Isolate the middle term by subtracting $1$ from all parts of the compound inequality:
   $$-3 - 1 < 2x \\le 9 - 1$$
   $$-4 < 2x \\le 8$$
2. Divide all parts by the positive coefficient $2$:
   $$\\frac{-4}{2} < x \\le \\frac{8}{2}$$
   $$-2 < x \\le 4$$
3. Translate to interval notation:
   - The strict inequality ($<$) on the left represents an open boundary, mapped using a parenthesis: $(-2$.
   - The non-strict inequality ($\\le$) on the right represents a closed boundary, mapped using a square bracket: $4]$.
   - This forms the half-open interval: $(-2, 4]$.

Tutor Pro-Tip:
Think of compound inequalities as a three-room apartment! Whatever operations you perform in the center room must be carried out simultaneously in both the left and right rooms to maintain balance.`,
          diagram: {
            id: "example-2-graph",
            title: "Corridor Graph: -2 < x <= 4",
            caption: "Shaded corridor representing the solution set. A dashed line is at x = -2 (open), and a solid line is at x = 4 (closed).",
            xAxisLabel: "x",
            yAxisLabel: "y",
            xRange: [-5, 6],
            yRange: [-5, 5],
            xStep: 1,
            yStep: 2,
            curves: [
              {
                type: "line",
                points: [
                  [-2, -5],
                  [-2, 5],
                  [4, 5],
                  [4, -5],
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
                xIntercept: 4,
                color: "#3b82f6",
                style: "solid",
                label: "x = 4"
              }
            ]
          }
        }
      ]
    },
    {
      sectionTitle: "6.2 Absolute Value Split Strategy",
      fullText: "Absolute value inequalities describe distance intervals on a number line. To solve them, we isolate the absolute value term and split it into compound linear inequalities according to these two high-yield mathematical templates.",
      bulletPoints: [
        "Bounded Interval / \"AND\" Case: $|u| < k \\implies -k < u < k$. This describes a single, connected interval centered around the origin (e.g., a corridor or bounded valley).",
        "Split Rays / \"OR\" Case: $|u| > k \\implies u < -k \\text{ OR } u > k$. This describes two disjoint rays shooting outwards in opposite directions."
      ],
      tables: [
        {
          title: "Absolute Value Split Matrices",
          headers: ["Inequality Form", "Meaning", "Compound Conversion Form", "Interval Style"],
          rows: [
            ["$|u| \\le k$", "Distance is less than or equal to $k$", "$-k \\le u \\le k$", "Single Closed Corridor: $[a, b]$"],
            ["$|u| < k$", "Distance is strictly less than $k$", "$-k < u < k$", "Single Open Corridor: $(a, b)$"],
            ["$|u| \\ge k$", "Distance is greater than or equal to $k$", "$u \\le -k \\text{ or } u \\ge k$", "Disjoint Closed Rays: $(-\\infty, a] \\cup [b, \\infty)$"],
            ["$|u| > k$", "Distance is strictly greater than $k$", "$u < -k \\text{ or } u > k$", "Disjoint Open Rays: $(-\\infty, a) \\cup (b, \\infty)$"]
          ]
        }
      ],
      examples: [
        {
          title: "Worked Example 3: Absolute Value \"Less Than\" (AND Case)",
          question: "Solve the absolute value inequality: $|2x - 5| < 9$.",
          options: ["$(-2, 7)$", "$[-2, 7]$", "$(-\\infty, -2) \\cup (7, \\infty)$", "$(-2, 14)$"],
          correctAnswer: "$(-2, 7)$",
          correctIndex: 0,
          explanation: `Step-by-Step Mathematical Explanation:
1. Apply the \"AND\" split strategy: since $|u| < k$, rewrite as:
   $$-9 < 2x - 5 < 9$$
2. Add $5$ to all three parts to isolate the variable term:
   $$-9 + 5 < 2x < 9 + 5$$
   $$-4 < 2x < 14$$
3. Divide all parts by positive $2$:
   $$\\frac{-4}{2} < x < \\frac{14}{2}$$
   $$-2 < x < 7$$
4. Express the solution in interval notation:
   $$(-2, 7)$$

Tutor Pro-Tip:
Think of absolute value as a **distance anchor** on the number line! The midpoint is found by setting the inside expression to zero: $2x - 5 = 0 \\implies x = 2.5$. The interval extends exactly $4.5$ units in either direction from $2.5$:
- Left limit: $2.5 - 4.5 = -2$
- Right limit: $2.5 + 4.5 = 7$`,
          diagram: {
            id: "example-3-graph",
            title: "Absolute Value: |2x - 5| < 9",
            caption: "Bounded open interval between x = -2 and x = 7.",
            xAxisLabel: "x",
            yAxisLabel: "y",
            xRange: [-4, 9],
            yRange: [-5, 5],
            xStep: 1,
            yStep: 2,
            curves: [
              {
                type: "line",
                points: [
                  [-2, -5],
                  [-2, 5],
                  [7, 5],
                  [7, -5],
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
                xIntercept: 7,
                color: "#3b82f6",
                style: "dashed",
                label: "x = 7"
              }
            ]
          }
        },
        {
          title: "Worked Example 4: Absolute Value \"Greater Than\" (OR Case)",
          question: "Solve the absolute value inequality: $|3x + 4| \\ge 11$.",
          options: [
            "$(-\\infty, -5] \\cup [\\frac{7}{3}, \\infty)$",
            "$[-5, \\frac{7}{3}]$",
            "$(-\\infty, -5) \\cup (\\frac{7}{3}, \\infty)$",
            "$[\\frac{7}{3}, \\infty)$"
          ],
          correctAnswer: "$(-\\infty, -5] \\cup [\\frac{7}{3}, \\infty)$",
          correctIndex: 0,
          explanation: `Step-by-Step Mathematical Explanation:
1. Apply the \"OR\" split strategy: since $|u| \\ge k$, write as two separate inequalities:
   $$3x + 4 \\ge 11 \\quad \\text{OR} \\quad 3x + 4 \\le -11$$
2. Solve the right-hand inequality:
   $$3x \\ge 7 \\implies x \\ge \\frac{7}{3}$$
3. Solve the left-hand inequality:
   $$3x \\le -15 \\implies x \\le -5$$
4. Combine the two separate solutions using the union symbol ($\\cup$):
   $$(-\\infty, -5] \\cup [\\frac{7}{3}, \\infty)$$

Tutor Pro-Tip:
"Less gets together, Great splits apart!"
- $|x| < k \\implies$ AND case (connects together in a single interval).
- $|x| > k \\implies$ OR case (splits apart into two separate rays).
Remembering this mnemonic saves critical seconds!`,
          diagram: {
            id: "example-4-graph",
            title: "Absolute Value: |3x + 4| >= 11",
            caption: "Disjoint split rays shooting outwards from solid boundaries at x = -5 and x = 2.33.",
            xAxisLabel: "x",
            yAxisLabel: "y",
            xRange: [-8, 4],
            yRange: [-5, 5],
            xStep: 1,
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
              },
              {
                type: "vertical_line",
                xIntercept: 2.33,
                color: "#3b82f6",
                style: "solid",
                shade: "right",
                shadeColor: "rgba(59, 130, 246, 0.15)",
                label: "x = 7/3"
              }
            ],
            textAnnotations: [
              { x: -5, y: 1.5, text: "x = -5 (Included)", color: "#1e3a8a", background: "#f8fafc", border: "#3b82f6" },
              { x: 2.33, y: 1.5, text: "x = 7/3 ≈ 2.33 (Included)", color: "#1e3a8a", background: "#f8fafc", border: "#3b82f6" }
            ]
          }
        }
      ]
    },
    {
      sectionTitle: "6.3 Polynomial & Rational Inequalities",
      fullText: "To solve non-linear inequalities (such as quadratics, cubics, or fractions), we cannot use simple isolation. Instead, we must use the Boundary Points & Test Region Method.",
      bulletPoints: [
        "Find the Critical Boundary Points: Rewrite the inequality to set one side to $0$. Solve the equation as if it were an equality to find the roots (critical points).",
        "Form Intervals: Plot the critical points on a number line to slice the domain into separate test intervals.",
        "Test Sample Regions: Pick a convenient test number from inside each interval. Evaluate its sign in the factored expression to find which intervals satisfy the original inequality."
      ],
      tables: [
        {
          title: "Sign Testing Matrix Example (for (x-4)(x+3) > 0)",
          headers: ["Interval", "Test Point (x)", "Factor (x - 4)", "Factor (x + 3)", "Product Sign", "Holds (> 0)?"],
          rows: [
            ["$x < -3$", "$-4$", "Negative ($-8$)", "Negative ($-1$)", "Positive ($+8$)", "Yes (True)"],
            ["$-3 < x < 4$", "$0$", "Negative ($-4$)", "Positive ($+3$)", "Negative ($-12$)", "No (False)"],
            ["$x > 4$", "5", "Positive ($+1$)", "Positive ($+8$)", "Positive ($+8$)", "Yes (True)"]
          ]
        }
      ],
      examples: [
        {
          title: "Worked Example 5: Solving a Quadratic Inequality",
          question: "Solve the quadratic inequality: $x^2 - x - 12 > 0$.",
          options: [
            "$(-\\infty, -3) \\cup (4, \\infty)$",
            "$(-3, 4)$",
            "$[-3, 4]$",
            "$(-\\infty, -3] \\cup [4, \\infty)$"
          ],
          correctAnswer: "$(-\\infty, -3) \\cup (4, \\infty)$",
          correctIndex: 0,
          explanation: `Step-by-Step Mathematical Explanation:
1. Factor the quadratic trinomial completely:
   $$(x - 4)(x + 3) > 0$$
2. Identify the critical boundary points by setting factors to zero:
   $$x - 4 = 0 \\implies x = 4$$
   $$x + 3 = 0 \\implies x = -3$$
3. These boundary points slice the number line into three regions: $x < -3$, $-3 < x < 4$, and $x > 4$.
4. Test points from each region to evaluate the product $(x-4)(x+3)$:
   - For $x = -4$ (Interval 1): $(-8)(-1) = 8 > 0$ (True)
   - For $x = 0$ (Interval 2): $(-4)(3) = -12 > 0$ (False)
   - For $x = 5$ (Interval 3): $(1)(8) = 8 > 0$ (True)
5. Combine the true intervals in open notation:
   $$(-\\infty, -3) \\cup (4, \\infty)$$

Tutor Pro-Tip:
With standard upward-opening parabolas ($x^2$), the product is strictly positive ($> 0$) on the **outer wings** (outside the roots), and negative ($< 0$) in the **center valley** (between the roots). Learn this shape rule to write solutions instantly!`,
          diagram: {
            id: "example-5-graph",
            title: "Quadratic Parabola Boundary: x² - x - 12 > 0",
            caption: "The solution region corresponds to the positive wings of the parabola y = x² - x - 12 where the curve is above the x-axis.",
            xAxisLabel: "x",
            yAxisLabel: "y",
            xRange: [-6, 7],
            yRange: [-15, 10],
            xStep: 1,
            yStep: 5,
            curves: [
              {
                type: "function",
                expression: "x*x - x - 12",
                color: "#3b82f6",
                style: "solid",
                label: "y = x² - x - 12"
              },
              {
                type: "vertical_line",
                xIntercept: -3,
                color: "#3b82f6",
                style: "dashed",
                shade: "left",
                shadeColor: "rgba(59, 130, 246, 0.15)",
                label: "x = -3"
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
          title: "Worked Example 6: Rational-Fraction Inequalities",
          question: "Solve the rational inequality: $\\frac{x + 2}{x - 5} \\le 0$.",
          options: ["$[-2, 5)$", "$[-2, 5]$", "$(-2, 5)$", "$(-\\infty, -2] \\cup (5, \\infty)$"],
          correctAnswer: "$[-2, 5)$",
          correctIndex: 0,
          explanation: `Step-by-Step Mathematical Explanation:
1. Find critical points for both numerator and denominator:
   - Numerator: $x + 2 = 0 \\implies x = -2$
   - Denominator: $x - 5 = 0 \\implies x = 5$
2. These points divide the number line into intervals.
3. Determine boundary behavior:
   - Numerator critical values ($x = -2$) are **included** ($[-2$) because the inequality is non-strict ($\\le$).
   - Denominator critical values ($x = 5$) MUST be **excluded** ($5)$) because division by zero is mathematically undefined.
4. Test points in each interval to find where the quotient is negative:
   - For $x < -2$ (e.g., $-3$): $\\frac{-3+2}{-3-5} = \\frac{-1}{-8} = 0.125 > 0$ (False)
   - For $-2 < x < 5$ (e.g., $0$): $\\frac{0+2}{0-5} = \\frac{2}{-5} = -0.4 \\le 0$ (True)
   - For $x > 5$ (e.g., $6$): $\\frac{6+2}{6-5} = \\frac{8}{1} = 8 > 0$ (False)
5. The correct solution interval is:
   $$[-2, 5)$$

Tutor Pro-Tip:
The **Denominator Exclusion Rule**: Never put a square bracket next to a value that makes any denominator zero! Even if the inequality is $\\le$ or $\\ge$, denominator roots must always remain open.`,
          diagram: {
            id: "example-6-graph",
            title: "Rational Boundary: (x + 2) / (x - 5) <= 0",
            caption: "The shaded region lies between the included boundary x = -2 (solid) and the excluded asymptote x = 5 (dashed).",
            xAxisLabel: "x",
            yAxisLabel: "y",
            xRange: [-5, 8],
            yRange: [-10, 10],
            xStep: 1,
            yStep: 2,
            curves: [
              {
                type: "function",
                expression: "(x + 2)/(x - 5)",
                color: "#3b82f6",
                style: "solid",
                label: "y = (x+2)/(x-5)"
              },
              {
                type: "line",
                points: [
                  [-2, -10],
                  [-2, 10],
                  [5, 10],
                  [5, -10],
                  [-2, -10]
                ],
                color: "transparent",
                shade: "region",
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
                xIntercept: 5,
                color: "#3b82f6",
                style: "dashed",
                label: "x = 5"
              }
            ]
          }
        }
      ]
    },
    {
      sectionTitle: "6.4 System Shading & xy-Plane Graphics",
      fullText: "Two-dimensional linear inequalities define half-planes on the Cartesian coordinate system. When graphed, the solution set is represented by a shaded region bounded by a boundary line.",
      bulletPoints: [
        "Solid vs. Dashed Boundaries: Use a solid boundary line for $\\le$ or $\\ge$ to show that points on the boundary are included. Use a dashed line for $<$ or $>$ to show boundary points are excluded.",
        "Test Point (0,0) Shortcut: To determine which side of the boundary line to shade, substitute $(0,0)$ into the inequality. If it produces a true statement, shade the side containing $(0,0)$. If false, shade the opposite side.",
        "Overlapping Wedges: The solution to a system of multiple inequalities is the region where all individual shaded regions intersect."
      ],
      tables: [
        {
          title: "System Graphic Rules",
          headers: ["Inequality Sign", "Boundary Line Style", "Shading Direction (y-isolated)"],
          rows: [
            ["$y > mx + b$", "Dashed line", "Shade Above the line"],
            ["$y \\ge mx + b$", "Solid line", "Shade Above the line"],
            ["$y < mx + b$", "Dashed line", "Shade Below the line"],
            ["$y \\le mx + b$", "Solid line", "Shade Below the line"]
          ]
        }
      ],
      examples: [
        {
          title: "Worked Example 7: Real-World Constraint Modeling",
          question: "A merchant wants to generate total revenue of at least $1,500$ dollars from selling $x$ shirts at $20$ dollars each and $y$ hats at $15$ dollars each. Write the inequality constraint.",
          options: [
            "$20x + 15y \\ge 1500$",
            "$20x + 15y \\le 1500$",
            "$15x + 20y \\ge 1500$",
            "$20x + 15y > 1500$"
          ],
          correctAnswer: "$20x + 15y \\ge 1500$",
          correctIndex: 0,
          explanation: `Step-by-Step Mathematical Explanation:
1. Express revenue from shirts: $\$20 \\times x = 20x$.
2. Express revenue from hats: $\$15 \\times y = 15y$.
3. Total revenue is the sum: $20x + 15y$.
4. The phrase \"at least $\$1,500$\" means the total must be greater than or equal to $1,500$:
   $$20x + 15y \\ge 1500$$
5. Find the coordinate intercepts of the boundary line to sketch the graph:
   - For $y = 0 \\implies 20x = 1500 \\implies x = 75$, giving point $(75, 0)$.
   - For $x = 0 \\implies 15y = 1500 \\implies y = 100$, giving point $(0, 100)$.
6. Connect $(0,100)$ and $(75,0)$ with a solid line and shade above in Quadrant I.

Tutor Pro-Tip:
Key translation codes for word problems:
- \"At least\", \"Minimum of\", \"No fewer than\" $\\implies \\ge$
- \"At most\", \"Maximum of\", \"Up to\" $\\implies \\le$`,
          diagram: {
            id: "example-7-graph",
            title: "Revenue Constraint: 20x + 15y >= 1500",
            caption: "Solid boundary line connecting intercepts (75,0) and (0,100) with shading above in the first quadrant.",
            xAxisLabel: "Shirts (x)",
            yAxisLabel: "Hats (y)",
            xRange: [0, 120],
            yRange: [0, 150],
            xStep: 20,
            yStep: 20,
            curves: [
              {
                type: "line",
                points: [[0, 100], [120, -60]],
                color: "#3b82f6",
                style: "solid",
                shade: "above",
                shadeColor: "rgba(59, 130, 246, 0.15)",
                label: "20x + 15y = 1500"
              }
            ],
            textAnnotations: [
              { x: 5, y: 105, text: "(0,100)", color: "#1e3a8a" },
              { x: 75, y: 5, text: "(75,0)", color: "#1e3a8a" }
            ]
          }
        },
        {
          title: "Worked Example 8: Point Verification Shortcut",
          question: "Determine if point $(2, 3)$ is a solution to the inequality: $3x - 2y < 4$.",
          options: [
            "Yes, because the substitution yields $0 < 4$, which is a true statement.",
            "No, because the substitution yields $0 < 4$, which is false.",
            "No, because the point lies exactly on the boundary line.",
            "Yes, because any positive coordinates are automatic solutions."
          ],
          correctAnswer: "Yes, because the substitution yields $0 < 4$, which is a true statement.",
          correctIndex: 0,
          explanation: `Step-by-Step Mathematical Explanation:
1. Substitute $x = 2$ and $y = 3$ directly into the linear inequality:
   $$3(2) - 2(3) < 4$$
2. Simplify the arithmetic expressions:
   $$6 - 6 < 4$$
   $$0 < 4$$
3. Since $0$ is strictly less than $4$, this is a mathematically true statement.
4. Therefore, the coordinate point $(2, 3)$ lies inside the shaded solution region of the half-plane.

Tutor Pro-Tip:
Whenever the SAT asks if a coordinate point is a solution, skip all graphing steps! Simply plug the coordinates directly into the given inequality expressions. If the resulting inequality is true, the point is a solution. If false, it is not!`,
          diagram: {
            id: "example-8-graph",
            title: "Point Verification: 3x - 2y < 4",
            caption: "Dashed line representing the boundary 3x - 2y = 4 with point (2,3) plotted in the shaded half-plane.",
            xAxisLabel: "x",
            yAxisLabel: "y",
            xRange: [-4, 6],
            yRange: [-4, 6],
            xStep: 2,
            yStep: 2,
            curves: [
              {
                type: "function",
                expression: "1.5*x - 2",
                color: "#3b82f6",
                style: "dashed",
                shade: "above",
                shadeColor: "rgba(59, 130, 246, 0.15)",
                label: "y = 1.5x - 2",
                highlightPoints: [
                  { x: 2, y: 3, label: "(2,3)", color: "#3b82f6" }
                ]
              }
            ]
          }
        },
        {
          title: "Worked Example 9: Inequality Transformations",
          question: "Solve the linear inequality for $x$: $2(x - 3) + 5 > 4x - 1$.",
          options: ["$x < 0$", "$x > 0$", "$x < -1$", "$x > 1$"],
          correctAnswer: "$x < 0$",
          correctIndex: 0,
          explanation: `Step-by-Step Mathematical Explanation:
1. Distribute the multiplication across brackets:
   $$2x - 6 + 5 > 4x - 1$$
2. Combine constant terms on the left:
   $$2x - 1 > 4x - 1$$
3. Subtract $2x$ from both sides to group variables:
   $$-1 > 2x - 1$$
4. Add $1$ to both sides:
   $$0 > 2x \\implies 0 > x \\implies x < 0$$
5. In interval notation: $(-\\infty, 0)$.

Tutor Pro-Tip:
Keep variable signs positive! Subtracting $2x$ from both sides (instead of subtracting $4x$) gave us a positive variable coefficient ($+2x$), preventing dividing by a negative number and avoiding a potential sign-flip mistake!`,
          diagram: {
            id: "example-9-graph",
            title: "Linear Shading: x < 0",
            caption: "Dashed vertical boundary line on the y-axis (x = 0) with shading covering the entire left half-plane.",
            xAxisLabel: "x",
            yAxisLabel: "y",
            xRange: [-5, 5],
            yRange: [-5, 5],
            xStep: 1,
            yStep: 2,
            curves: [
              {
                type: "vertical_line",
                xIntercept: 0,
                color: "#3b82f6",
                style: "dashed",
                shade: "left",
                shadeColor: "rgba(59, 130, 246, 0.15)",
                label: "x = 0"
              }
            ],
            textAnnotations: [
              { x: -2.3, y: 3.5, text: "x = 0 is dashed (strict <)", color: "#1e3a8a" }
            ]
          }
        },
        {
          title: "Worked Example 10: Graphing System Overlaps",
          question: "Which coordinate point is located inside the overlapping solution set of the system of inequalities: $y > 2x - 4$ and $y \\le -x + 3$?",
          options: ["$(0, 0)$", "$(3, 3)$", "$(4, -1)$", "$(0, -5)$"],
          correctAnswer: "$(0, 0)$",
          correctIndex: 0,
          explanation: `Step-by-Step Mathematical Explanation:
To find the correct point, verify each option against BOTH inequality constraints:
1. Test Option A $(0,0)$:
   - First inequality: $0 > 2(0) - 4 \\implies 0 > -4$ (True)
   - Second inequality: $0 \\le -(0) + 3 \\implies 0 \\le 3$ (True)
   Since $(0,0)$ satisfies both inequalities, it is in the solution set.
2. Test Option B $(3,3)$:
   - Second inequality: $3 \\le -3 + 3 \\implies 3 \\le 0$ (False)
3. Test Option C $(4,-1)$:
   - First inequality: $-1 > 2(4) - 4 \\implies -1 > 4$ (False)
4. Test Option D $(0,-5)$:
   - First inequality: $-5 > 2(0) - 4 \\implies -5 > -4$ (False)

Tutor Pro-Tip:
Drawing lines on a scratch sheet is slow. When multiple-choice options are given for inequality system regions, the fastest, most infallible strategy is the **Point Substitution Check**!`,
          diagram: {
            id: "example-10-graph",
            title: "System: y > 2x - 4 and y <= -x + 3",
            caption: "The overlapping solution region bounded by solid and dashed lines.",
            xAxisLabel: "x",
            yAxisLabel: "y",
            xRange: [-4, 6],
            yRange: [-6, 6],
            xStep: 2,
            yStep: 2,
            curves: [
              {
                type: "function",
                expression: "2*x - 4",
                color: "#ef4444",
                style: "dashed",
                shade: "above",
                shadeColor: "rgba(239, 68, 68, 0.12)",
                label: "y = 2x - 4"
              },
              {
                type: "function",
                expression: "-x + 3",
                color: "#3b82f6",
                style: "solid",
                shade: "below",
                shadeColor: "rgba(59, 130, 246, 0.12)",
                label: "y = -x + 3"
              }
            ],
            textAnnotations: [
              { x: 0, y: 0.5, text: "Overlap Region", color: "#10b981", fontSize: 10, fontWeight: "bold" }
            ]
          }
        }
      ]
    },
    {
      sectionTitle: "6.5 Systems of Linear Inequalities",
      fullText: "A system of linear inequalities consists of two or more inequalities that restrict the variables together. The solution set is the intersection of the individual solution regions.",
      bulletPoints: [
        "Finding Intersection Vertices: Solve the boundary lines as a system of linear equations to find the vertices of the solution region.",
        "Constructing Bounded Polygons: Multiple constraints can form closed polygons (triangles, quadrilaterals) on the plane.",
        "Bounded vs. Unbounded Regions: Bounded regions are closed shapes with finite areas, while unbounded regions stretch infinitely in at least one direction."
      ],
      examples: [
        {
          title: "Worked Example 11: Graphing an Unbounded System",
          question: "Which of the following ordered pairs $(x,y)$ satisfies the system of inequalities: $y > x + 1$ and $y \\le -0.5x + 4$?",
          options: ["$(0, 2)$", "$(3, 5)$", "$(0, 0)$", "$(4, -1)$"],
          correctAnswer: "$(0, 2)$",
          correctIndex: 0,
          explanation: `Step-by-Step Mathematical Explanation:
1. Test $(0,2)$ in both inequalities:
   - $2 > 0 + 1 \\implies 2 > 1$ (True)
   - $2 \\le -0.5(0) + 4 \\implies 2 \\le 4$ (True)
   Since $(0,2)$ satisfies both, it is in the overlapping solution set.
2. Test other points to verify why they fail:
   - For $(3,5)$: $5 \\le -0.5(3) + 4 \\implies 5 \\le 2.5$ (False).
   - For $(0,0)$: $0 > 1$ (False).
   - For $(4,-1)$: $-1 > 5$ (False).`,
          diagram: {
            id: "example-11-graph",
            title: "Unbounded System: y > x + 1 & y <= -0.5x + 4",
            caption: "The shaded wedge shows the overlapping solutions of y > x + 1 (dashed boundary) and y <= -0.5x + 4 (solid boundary).",
            xAxisLabel: "x",
            yAxisLabel: "y",
            xRange: [-6, 6],
            yRange: [-2, 8],
            xStep: 2,
            yStep: 2,
            curves: [
              {
                type: "line",
                points: [
                  [-6, -5],
                  [2, 3],
                  [-6, 7],
                  [-6, -5]
                ],
                color: "transparent",
                shade: "region",
                shadeColor: "rgba(59, 130, 246, 0.15)"
              },
              {
                type: "function",
                expression: "x + 1",
                color: "#3b82f6",
                style: "dashed",
                label: "y = x + 1"
              },
              {
                type: "function",
                expression: "-0.5*x + 4",
                color: "#3b82f6",
                style: "solid",
                label: "y = -0.5x + 4"
              }
            ],
            textAnnotations: [
              { x: -3, y: 3, text: "Overlap Zone", color: "#1e3a8a", fontSize: 10, fontWeight: "bold" }
            ]
          }
        },
        {
          title: "Worked Example 12: Bounded Triangular Systems",
          question: "Find the area of the closed region bounded by the system: $y \\ge 0$, $y \\le x$, and $y \\le -x + 6$.",
          options: ["$9$", "$18$", "$12$", "$6$"],
          correctAnswer: "$9$",
          correctIndex: 0,
          explanation: `Step-by-Step Mathematical Explanation:
1. Graph the three boundary lines:
   - $y = 0$ is the horizontal x-axis.
   - $y = x$ is a diagonal line passing through the origin.
   - $y = -x + 6$ is a downward-sloping diagonal line with y-intercept 6.
2. Find the three vertices of the triangle by intersecting the boundaries:
   - Intersection of $y = 0$ and $y = x \\implies (0,0)$.
   - Intersection of $y = 0$ and $y = -x + 6 \\implies (6,0)$.
   - Intersection of $y = x$ and $y = -x + 6 \\implies 2x = 6 \\implies (3,3)$.
3. This bounded region forms a triangle with:
   - Base on the x-axis: from $x=0$ to $x=6$, so $\\text{base} = 6$.
   - Height of the peak at $(3,3)$: so $\\text{height} = 3$.
4. Calculate the area using the triangle area formula:
   $$\\text{Area} = \\frac{1}{2} \\times \\text{base} \\times \\text{height} = \\frac{1}{2} \\times 6 \\times 3 = 9$$`,
          diagram: {
            id: "example-12-graph",
            title: "Bounded System Area",
            caption: "The bounded solution region forms a triangle with vertices at (0,0), (6,0), and (3,3).",
            xAxisLabel: "x",
            yAxisLabel: "y",
            xRange: [-2, 8],
            yRange: [-2, 6],
            xStep: 2,
            yStep: 2,
            curves: [
              {
                type: "line",
                points: [[0, 0], [3, 3], [6, 0], [0, 0]],
                color: "#3b82f6",
                style: "solid",
                shade: "region",
                shadeColor: "rgba(59, 130, 246, 0.15)"
              },
              {
                type: "function",
                expression: "x",
                color: "#3b82f6",
                style: "solid",
                label: "y = x"
              },
              {
                type: "function",
                expression: "-x + 6",
                color: "#3b82f6",
                style: "solid",
                label: "y = -x + 6"
              }
            ],
            textAnnotations: [
              { x: 3, y: 1.2, text: "Bounded Region", color: "#1e3a8a", fontSize: 10, fontWeight: "bold" }
            ]
          }
        }
      ]
    }
  ],
  exerciseGroups: [
    {
      exerciseNumber: 1,
      title: "Module 1: Easy / Medium Questions",
      description: "Test your fundamental inequality knowledge. Focus on isolating variables, distributing negative multipliers, absolute value AND/OR intervals, and first-quadrant word problems.",
      questions: CHAPTER_6_QUESTIONS_MODULE_1
    },
    {
      exerciseNumber: 2,
      title: "Module 2: Hard Questions",
      description: "Tackle advanced absolute value quadratics, rational inequalities with denominator bounds, multi-constraint coordinate graphs, and first-quadrant geometric shapes.",
      questions: CHAPTER_6_QUESTIONS_MODULE_2
    },
    {
      exerciseNumber: 3,
      title: "Module 3: Systems of Inequalities",
      description: "Practice graphing, boundary line identification, and solution region verification for systems of linear inequalities.",
      questions: CHAPTER_6_QUESTIONS_MODULE_3
    }
  ]
};
