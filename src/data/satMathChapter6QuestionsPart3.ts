import { MathExerciseQuestion } from './satMathConcepts';

export const CHAPTER_6_QUESTIONS_MODULE_3: MathExerciseQuestion[] = [
  {
    id: "ch6-q31",
    number: 1,
    exerciseNumber: 3,
    exerciseTitle: "Module 3: Systems of Inequalities",
    question: "Graph the system of inequalities below on the coordinate plane. Shade the region that represents all solutions to both inequalities.\n\n$$y \\ge x - 2$$\n$$y < -2x + 4$$\n\nWhich of the following coordinate points $(x, y)$ satisfies the system of inequalities?",
    options: ["$(0, 0)$", "$(3, 2)$", "$(4, -3)$", "$(-1, -4)$"],
    correctIndex: 0,
    correctAnswerText: "$(0, 0)$",
    explanation: `Step-by-Step Mathematical Explanation:
1. Identify the boundary lines and shading for each inequality:
   - $y \\ge x - 2$: The boundary is a solid line $y = x - 2$ (slope $1$, y-intercept $-2$). Shading is **above** the line.
   - $y < -2x + 4$: The boundary is a dashed line $y = -2x + 4$ (slope $-2$, y-intercept $4$). Shading is **below** the line.
2. Substitute the option coordinates into BOTH inequalities to find the correct solution:
   - For $(0,0)$:
     - First inequality: $0 \\ge 0 - 2 \\implies 0 \\ge -2$ (True)
     - Second inequality: $0 < -2(0) + 4 \\implies 0 < 4$ (True)
     Since $(0,0)$ satisfies both, it is in the overlapping shaded region.

Distractor Analysis:
- Option B $(3,2)$: Satisfies the first inequality ($2 \\ge 1$, True) but violates the second inequality ($2 < -2$, False).
- Option C $(4,-3)$: Violates both inequalities (First: $-3 \\ge 2$ is False; Second: $-3 < -4$ is False).
- Option D $(-1,-4)$: Violates the first inequality ($-4 \\ge -3$, False) though it satisfies the second ($-4 < 6$, True).

Tutor Pro-Tip:
Instead of sketching graphs, save valuable time on the SAT by plugging coordinate choices directly into the inequalities. The correct choice must satisfy both inequalities perfectly!`,
    diagram: {
      id: "ch6-q31-diagram",
      title: "System of Inequalities 1",
      caption: "Overlapping shaded region for y >= x - 2 (solid line) and y < -2x + 4 (dashed line) with (0,0) in the shaded area.",
      xAxisLabel: "x",
      yAxisLabel: "y",
      xRange: [-6, 6],
      yRange: [-6, 6],
      xStep: 2,
      yStep: 2,
      curves: [
        {
          type: "line",
          points: [[2, 0], [-4, -6], [-6, -6], [-6, 6], [-1, 6], [2, 0]],
          color: "transparent",
          shade: "region",
          shadeColor: "rgba(59, 130, 246, 0.15)"
        },
        {
          type: "function",
          expression: "x - 2",
          color: "#3b82f6",
          style: "solid",
          label: "y = x - 2"
        },
        {
          type: "function",
          expression: "-2*x + 4",
          color: "#3b82f6",
          style: "dashed",
          label: "y = -2x + 4"
        }
      ]
    }
  },
  {
    id: "ch6-q32",
    number: 2,
    exerciseNumber: 3,
    exerciseTitle: "Module 3: Systems of Inequalities",
    question: "Graph the system of inequalities below on the coordinate plane. Shade the region that represents all solutions to both inequalities.\n\n$$y \\le 2x + 1$$\n$$y \\ge -x + 4$$\n\nWhich of the following coordinate points $(x, y)$ is a solution to the system?",
    options: ["$(3, 2)$", "$(0, 0)$", "$(1, 5)$", "$(-2, 2)$"],
    correctIndex: 0,
    correctAnswerText: "$(3, 2)$",
    explanation: `Step-by-Step Mathematical Explanation:
1. Analyze the individual inequalities:
   - $y \\le 2x + 1$: The boundary is a solid line $y = 2x + 1$ (slope $2$, y-intercept $1$). Shading is **below** the line.
   - $y \\ge -x + 4$: The boundary is a solid line $y = -x + 4$ (slope $-1$, y-intercept $4$). Shading is **above** the line.
2. Substitute option $(3, 2)$ into both constraints:
   - First inequality: $2 \\le 2(3) + 1 \\implies 2 \\le 7$ (True)
   - Second inequality: $2 \\ge -3 + 4 \\implies 2 \\ge 1$ (True)
   Since $(3, 2)$ satisfies both inequalities, it lies in the overlapping shaded solution region.

Distractor Analysis:
- Option B $(0,0)$: Satisfies the first inequality ($0 \\le 1$, True) but violates the second inequality ($0 \\ge 4$, False).
- Option C $(1,5)$: Violates the first inequality ($5 \\le 3$, False) though it satisfies the second ($5 \\ge 3$, True).
- Option D $(-2,2)$: Violates both inequalities (First: $2 \\le -3$ is False; Second: $2 \\ge 6$ is False).

Tutor Pro-Tip:
When both inequalities use non-strict signs ($\\le$, $\\ge$), the boundary lines are solid. Any coordinate point lying directly on either line segment is included in that individual inequality's solution set.`,
    diagram: {
      id: "ch6-q32-diagram",
      title: "System of Inequalities 2",
      caption: "Overlapping shaded region bounded by two solid lines: y = 2x + 1 and y = -x + 4.",
      xAxisLabel: "x",
      yAxisLabel: "y",
      xRange: [-6, 6],
      yRange: [-6, 6],
      xStep: 2,
      yStep: 2,
      curves: [
        {
          type: "line",
          points: [[1, 3], [2.5, 6], [6, 6], [6, -2], [1, 3]],
          color: "transparent",
          shade: "region",
          shadeColor: "rgba(59, 130, 246, 0.15)"
        },
        {
          type: "function",
          expression: "2*x + 1",
          color: "#3b82f6",
          style: "solid",
          label: "y = 2x + 1"
        },
        {
          type: "function",
          expression: "-x + 4",
          color: "#3b82f6",
          style: "solid",
          label: "y = -x + 4"
        }
      ]
    }
  },
  {
    id: "ch6-q33",
    number: 3,
    exerciseNumber: 3,
    exerciseTitle: "Module 3: Systems of Inequalities",
    question: "Graph the system of inequalities below on the coordinate plane. Shade the region that represents all solutions to both inequalities.\n\n$$y > -\\frac{1}{2}x + 3$$\n$$y \\le \\frac{3}{2}x - 1$$\n\nWhich of the following coordinate points $(x, y)$ is a solution to the system?",
    options: ["$(4, 3)$", "$(0, 0)$", "$(1, 4)$", "$(4, 0)$"],
    correctIndex: 0,
    correctAnswerText: "$(4, 3)$",
    explanation: `Step-by-Step Mathematical Explanation:
1. Evaluate the boundary conditions:
   - $y > -\\frac{1}{2}x + 3$: A dashed horizontal-sloping line $y = -0.5x + 3$ shaded **above**.
   - $y \\le \\frac{3}{2}x - 1$: A solid diagonal line $y = 1.5x - 1$ shaded **below**.
2. Substitute $(4,3)$ into both inequalities:
   - First: $3 > -\\frac{1}{2}(4) + 3 \\implies 3 > 1$ (True)
   - Second: $3 \\le \\frac{3}{2}(4) - 1 \\implies 3 \\le 5$ (True)
   Since $(4,3)$ satisfies both, it is a valid solution.

Distractor Analysis:
- Option B $(0,0)$: Violates both inequalities ($0 > 3$ is False; $0 \\le -1$ is False).
- Option C $(1,4)$: Violates the second inequality ($4 \\le 0.5$, False) though it satisfies the first ($4 > 2.5$, True).
- Option D $(4,0)$: Violates the first inequality ($0 > 1$, False) though it satisfies the second ($0 \\le 5$, True).

Tutor Pro-Tip:
Watch out for strict inequalities ($>$ or $<$). If a point lies exactly on the dashed boundary line, it is NOT a valid solution to the system. Only solid lines include their boundary coordinates!`,
    diagram: {
      id: "ch6-q33-diagram",
      title: "System of Inequalities 3",
      caption: "Overlapping shaded wedge for y > -0.5x + 3 (dashed) and y <= 1.5x - 1 (solid).",
      xAxisLabel: "x",
      yAxisLabel: "y",
      xRange: [-6, 6],
      yRange: [-6, 6],
      xStep: 2,
      yStep: 2,
      curves: [
        {
          type: "line",
          points: [[2, 2], [4.67, 6], [6, 6], [6, 0], [2, 2]],
          color: "transparent",
          shade: "region",
          shadeColor: "rgba(59, 130, 246, 0.15)"
        },
        {
          type: "function",
          expression: "-0.5*x + 3",
          color: "#3b82f6",
          style: "dashed",
          label: "y = -0.5x + 3"
        },
        {
          type: "function",
          expression: "1.5*x - 1",
          color: "#3b82f6",
          style: "solid",
          label: "y = 1.5x - 1"
        }
      ]
    }
  },
  {
    id: "ch6-q34",
    number: 4,
    exerciseNumber: 3,
    exerciseTitle: "Module 3: Systems of Inequalities",
    question: "Graph the system of inequalities below on the coordinate plane. Shade the region that represents all solutions to both inequalities.\n\n$$2x + y \\le 8$$\n$$x - y < 1$$\n\nWhich of the following coordinate points $(x, y)$ satisfies the system of inequalities?",
    options: ["$(1, 2)$", "$(4, 5)$", "$(5, -1)$", "$(0, -2)$"],
    correctIndex: 0,
    correctAnswerText: "$(1, 2)$",
    explanation: `Step-by-Step Mathematical Explanation:
1. Rearrange both inequalities into slope-intercept form ($y = mx + b$) for quick visual interpretation:
   - $2x + y \\le 8 \\implies y \\le -2x + 8$ (solid boundary, shade **below**)
   - $x - y < 1 \\implies y > x - 1$ (dashed boundary, shade **above**)
2. Substitute the point $(1,2)$ into the inequalities:
   - $2(1) + 2 = 4 \\le 8$ (True)
   - $1 - 2 = -1 < 1$ (True)
   Since $(1,2)$ satisfies both constraints, it lies in the double-shaded region.

Distractor Analysis:
- Option B $(4,5)$: Violates the first inequality ($2(4) + 5 = 13 \\le 8$, False).
- Option C $(5,-1)$: Violates both inequalities (First: $10 - 1 = 9 \\le 8$ is False; Second: $5 - (-1) = 6 < 1$ is False).
- Option D $(0,-2)$: Violates the second inequality ($0 - (-2) = 2 < 1$, False).

Tutor Pro-Tip:
When rearranging inequalities with respect to $y$, remember the golden rule: if you multiply or divide both sides by a negative number (e.g. dividing by $-1$ to isolate $y$ in $-y < -x + 1$), you MUST flip the direction of the inequality sign ($y > x - 1$).`,
    diagram: {
      id: "ch6-q34-diagram",
      title: "System of Inequalities 4",
      caption: "Double-shaded wedge bounded by the solid line 2x + y = 8 and the dashed line x - y = 1.",
      xAxisLabel: "x",
      yAxisLabel: "y",
      xRange: [-6, 6],
      yRange: [-6, 6],
      xStep: 2,
      yStep: 2,
      curves: [
        {
          type: "line",
          points: [[3, 2], [-5, -6], [-6, -6], [-6, 6], [1, 6], [3, 2]],
          color: "transparent",
          shade: "region",
          shadeColor: "rgba(59, 130, 246, 0.15)"
        },
        {
          type: "function",
          expression: "-2*x + 8",
          color: "#3b82f6",
          style: "solid",
          label: "2x + y = 8"
        },
        {
          type: "function",
          expression: "x - 1",
          color: "#3b82f6",
          style: "dashed",
          label: "x - y = 1"
        }
      ]
    }
  },
  {
    id: "ch6-q35",
    number: 5,
    exerciseNumber: 3,
    exerciseTitle: "Module 3: Systems of Inequalities",
    question: "Graph the system of inequalities below on the coordinate plane. Shade the region that represents all solutions to both inequalities.\n\n$$3x + 2y \\ge 12$$\n$$x + y \\le 6$$\n\nWhich of the following coordinate points $(x, y)$ is located inside the overlapping solution set?",
    options: ["$(2, 4)$", "$(0, 0)$", "$(5, 3)$", "$(-1, 2)$"],
    correctIndex: 0,
    correctAnswerText: "$(2, 4)$",
    explanation: `Step-by-Step Mathematical Explanation:
1. Rearrange to inspect slope-intercept rules:
   - $3x + 2y \\ge 12 \\implies y \\ge -1.5x + 6$ (solid boundary, shade **above**)
   - $x + y \\le 6 \\implies y \\le -x + 6$ (solid boundary, shade **below**)
2. Substitute $(2,4)$ into the original inequalities:
   - First inequality: $3(2) + 2(4) = 14 \\ge 12$ (True)
   - Second inequality: $2 + 4 = 6 \\le 6$ (True)
   The point $(2,4)$ lies on the boundary line $x+y=6$ and satisfies both constraints, making it a valid solution.

Distractor Analysis:
- Option B $(0,0)$: Violates the first inequality ($0 \\ge 12$, False).
- Option C $(5,3)$: Violates the second inequality ($5 + 3 = 8 \\le 6$, False).
- Option D $(-1,2)$: Violates the first inequality ($-3 + 4 = 1 \\ge 12$, False).

Tutor Pro-Tip:
Points lying directly on the solid boundary line (such as $(2,4)$ on $x+y=6$) are included in the solution set because the inequalities use inclusive boundary symbols ($\\ge$, $\\le$).`,
    diagram: {
      id: "ch6-q35-diagram",
      title: "System of Inequalities 5",
      caption: "The overlapping wedge region is bounded by solid lines 3x + 2y = 12 and x + y = 6, meeting on the y-axis at (0,6).",
      xAxisLabel: "x",
      yAxisLabel: "y",
      xRange: [-2, 8],
      yRange: [-2, 8],
      xStep: 2,
      yStep: 2,
      curves: [
        {
          type: "line",
          points: [[0, 6], [6, 0], [6, -3], [0, 6]],
          color: "transparent",
          shade: "region",
          shadeColor: "rgba(59, 130, 246, 0.15)"
        },
        {
          type: "function",
          expression: "-1.5*x + 6",
          color: "#3b82f6",
          style: "solid",
          label: "3x + 2y = 12"
        },
        {
          type: "function",
          expression: "-x + 6",
          color: "#3b82f6",
          style: "solid",
          label: "x + y = 6"
        }
      ]
    }
  },
  {
    id: "ch6-q36",
    number: 6,
    exerciseNumber: 3,
    exerciseTitle: "Module 3: Systems of Inequalities",
    question: "Graph the system of inequalities below on the coordinate plane. Shade the region that represents all solutions to both inequalities.\n\n$$y < 3x - 5$$\n$$y < -\\frac{1}{2}x + 5$$\n\nWhich of the following coordinate points $(x, y)$ satisfies the system?",
    options: ["$(4, 1)$", "$(0, 0)$", "$(1, 2)$", "$(2, 4)$"],
    correctIndex: 0,
    correctAnswerText: "$(4, 1)$",
    explanation: `Step-by-Step Mathematical Explanation:
1. Examine the individual inequalities:
   - $y < 3x - 5$: Dashed boundary, shaded **below**.
   - $y < -0.5x + 5$: Dashed boundary, shaded **below**.
2. Test point $(4,1)$ in both:
   - First inequality: $1 < 3(4) - 5 \\implies 1 < 7$ (True)
   - Second inequality: $1 < -0.5(4) + 5 \\implies 1 < 3$ (True)
   Since $(4,1)$ satisfies both, it is a valid solution.

Distractor Analysis:
- Option B $(0,0)$: Violates the first inequality ($0 < -5$, False).
- Option C $(1,2)$: Violates the first inequality ($2 < -2$, False).
- Option D $(2,4)$: Violates both inequalities (First: $4 < 1$ is False; Second: $4 < 4$ is False).

Tutor Pro-Tip:
Unbounded regions are common on the SAT. If both signs are strictly less-than ($<$), the entire solution region lies below both dashed lines. Always use positive test points on the far right if in doubt!`,
    diagram: {
      id: "ch6-q36-diagram",
      title: "System of Inequalities 6",
      caption: "Double-shaded lower region bounded by two dashed lines: y = 3x - 5 and y = -0.5x + 5.",
      xAxisLabel: "x",
      yAxisLabel: "y",
      xRange: [-6, 6],
      yRange: [-6, 6],
      xStep: 2,
      yStep: 2,
      curves: [
        {
          type: "line",
          points: [[2.86, 3.57], [6, 2], [6, -6], [-0.33, -6], [2.86, 3.57]],
          color: "transparent",
          shade: "region",
          shadeColor: "rgba(59, 130, 246, 0.15)"
        },
        {
          type: "function",
          expression: "3*x - 5",
          color: "#3b82f6",
          style: "dashed",
          label: "y = 3x - 5"
        },
        {
          type: "function",
          expression: "-0.5*x + 5",
          color: "#3b82f6",
          style: "dashed",
          label: "y = -0.5x + 5"
        }
      ]
    }
  },
  {
    id: "ch6-q37",
    number: 7,
    exerciseNumber: 3,
    exerciseTitle: "Module 3: Systems of Inequalities",
    question: "Graph the system of inequalities below on the coordinate plane. Shade the region that represents all solutions to both inequalities.\n\n$$y \\ge -2x + 6$$\n$$y \\ge x - 3$$\n\nWhich of the following coordinate points $(x, y)$ satisfies the system of inequalities?",
    options: ["$(4, 3)$", "$(0, 0)$", "$(1, -1)$", "$(2, -2)$"],
    correctIndex: 0,
    correctAnswerText: "$(4, 3)$",
    explanation: `Step-by-Step Mathematical Explanation:
1. Examine the boundaries:
   - $y \\ge -2x + 6$: Solid line $y = -2x + 6$ shaded **above**.
   - $y \\ge x - 3$: Solid line $y = x - 3$ shaded **above**.
2. Test point $(4,3)$ in both:
   - First: $3 \\ge -2(4) + 6 \\implies 3 \\ge -2$ (True)
   - Second: $3 \\ge 4 - 3 \\implies 3 \\ge 1$ (True)
   Since $(4,3)$ satisfies both, it lies in the solution region.

Distractor Analysis:
- Option B $(0,0)$: Violates the first inequality ($0 \\ge 6$, False).
- Option C $(1,-1)$: Violates the first inequality ($-1 \\ge 4$, False).
- Option D $(2,-2)$: Violates both inequalities (First: $-2 \\ge 2$ is False; Second: $-2 \\ge -1$ is False).

Tutor Pro-Tip:
With two greater-than-or-equal-to inequalities ($\\ge$), the solution region is an upward-opening wedge. Point values that have both large positive $x$ and $y$ coordinates are primary candidates to test first!`,
    diagram: {
      id: "ch6-q37-diagram",
      title: "System of Inequalities 7",
      caption: "Shaded upper region representing solutions to y >= -2x + 6 and y >= x - 3, meeting at (3,0).",
      xAxisLabel: "x",
      yAxisLabel: "y",
      xRange: [-6, 6],
      yRange: [-6, 6],
      xStep: 2,
      yStep: 2,
      curves: [
        {
          type: "line",
          points: [[3, 0], [6, 3], [6, 6], [0, 6], [3, 0]],
          color: "transparent",
          shade: "region",
          shadeColor: "rgba(59, 130, 246, 0.15)"
        },
        {
          type: "function",
          expression: "-2*x + 6",
          color: "#3b82f6",
          style: "solid",
          label: "y = -2x + 6"
        },
        {
          type: "function",
          expression: "x - 3",
          color: "#3b82f6",
          style: "solid",
          label: "y = x - 3"
        }
      ]
    }
  },
  {
    id: "ch6-q38",
    number: 8,
    exerciseNumber: 3,
    exerciseTitle: "Module 3: Systems of Inequalities",
    question: "Graph the system of inequalities below on the coordinate plane. Shade the region that represents all solutions to both inequalities.\n\n$$4x + y > 8$$\n$$2x - y \\le 4$$\n\nWhich of the following coordinate points $(x, y)$ satisfies the system of inequalities?",
    options: ["$(3, 3)$", "$(0, 0)$", "$(1, 1)$", "$(4, -2)$"],
    correctIndex: 0,
    correctAnswerText: "$(3, 3)$",
    explanation: `Step-by-Step Mathematical Explanation:
1. Rearrange to y-isolated format:
   - $4x + y > 8 \\implies y > -4x + 8$ (dashed boundary, shade **above**)
   - $2x - y \\le 4 \\implies y \\ge 2x - 4$ (solid boundary, shade **above**)
2. Test point $(3,3)$ in both inequalities:
   - First: $4(3) + 3 = 15 > 8$ (True)
   - Second: $2(3) - 3 = 3 \\le 4$ (True)
   Since $(3,3)$ satisfies both, it lies in the shaded overlap wedge.

Distractor Analysis:
- Option B $(0,0)$: Violates the first inequality ($0 > 8$, False).
- Option C $(1,1)$: Violates the first inequality ($5 > 8$, False).
- Option D $(4,-2)$: Violates the second inequality ($2(4) - (-2) = 10 \\le 4$, False).

Tutor Pro-Tip:
Be extremely careful when multiplying or dividing by negative values while isolating $y$ in $-y \\le -2x + 4$. Dividing by $-1$ flips the inequality sign, changing $\\le$ to $\\ge$, meaning you shade above instead of below!`,
    diagram: {
      id: "ch6-q38-diagram",
      title: "System of Inequalities 8",
      caption: "Double-shaded solution wedge above both boundary lines, with intersection vertex at (2,0).",
      xAxisLabel: "x",
      yAxisLabel: "y",
      xRange: [-6, 6],
      yRange: [-6, 6],
      xStep: 2,
      yStep: 2,
      curves: [
        {
          type: "line",
          points: [[2, 0], [5, 6], [0.5, 6], [2, 0]],
          color: "transparent",
          shade: "region",
          shadeColor: "rgba(59, 130, 246, 0.15)"
        },
        {
          type: "function",
          expression: "-4*x + 8",
          color: "#3b82f6",
          style: "dashed",
          label: "4x + y = 8"
        },
        {
          type: "function",
          expression: "2*x - 4",
          color: "#3b82f6",
          style: "solid",
          label: "2x - y = 4"
        }
      ]
    }
  },
  {
    id: "ch6-q39",
    number: 9,
    exerciseNumber: 3,
    exerciseTitle: "Module 3: Systems of Inequalities",
    question: "Graph the system of inequalities below on the coordinate plane. Shade the region that represents all solutions to both inequalities.\n\n$$x + 2y \\le 10$$\n$$3x - y < 6$$\n\nWhich of the following coordinate points $(x, y)$ satisfies the system of inequalities?",
    options: ["$(1, 1)$", "$(4, 10)$", "$(5, 1)$", "$(3, 6)$"],
    correctIndex: 0,
    correctAnswerText: "$(1, 1)$",
    explanation: `Step-by-Step Mathematical Explanation:
1. Examine boundaries and shading:
   - $x + 2y \\le 10 \\implies y \\le -0.5x + 5$ (solid line, shaded **below**).
   - $3x - y < 6 \\implies y > 3x - 6$ (dashed line, shaded **above**).
2. Substitute point $(1,1)$ into both:
   - First: $1 + 2(1) = 3 \\le 10$ (True)
   - Second: $3(1) - 1 = 2 < 6$ (True)
   Since $(1,1)$ satisfies both, it is a solution.

Distractor Analysis:
- Option B $(4,10)$: Violates the first inequality ($4 + 20 = 24 \\le 10$, False).
- Option C $(5,1)$: Violates the second inequality ($15 - 1 = 14 < 6$, False).
- Option D $(3,6)$: Violates the first inequality ($3 + 12 = 15 \\le 10$, False).

Tutor Pro-Tip:
When standard form inequalities are given, you don't necessarily have to convert them to slope-intercept form to plug in coordinates. Testing points directly in the standard form is often faster and less prone to sign errors!`,
    diagram: {
      id: "ch6-q39-diagram",
      title: "System of Inequalities 9",
      caption: "Double-shaded wedge region bounded by x + 2y = 10 (solid) and 3x - y = 6 (dashed) containing the origin.",
      xAxisLabel: "x",
      yAxisLabel: "y",
      xRange: [-6, 6],
      yRange: [-6, 6],
      xStep: 2,
      yStep: 2,
      curves: [
        {
          type: "line",
          points: [[3.14, 3.43], [-2, 6], [-6, 6], [-6, -6], [0, -6], [3.14, 3.43]],
          color: "transparent",
          shade: "region",
          shadeColor: "rgba(59, 130, 246, 0.15)"
        },
        {
          type: "function",
          expression: "-0.5*x + 5",
          color: "#3b82f6",
          style: "solid",
          label: "x + 2y = 10"
        },
        {
          type: "function",
          expression: "3*x - 6",
          color: "#3b82f6",
          style: "dashed",
          label: "3x - y = 6"
        }
      ]
    }
  },
  {
    id: "ch6-q3a",
    number: 10,
    exerciseNumber: 3,
    exerciseTitle: "Module 3: Systems of Inequalities",
    question: "Graph the system of inequalities below on the coordinate plane. Shade the region that represents all solutions to both inequalities.\n\n$$2x - 3y \\ge 6$$\n$$x + y \\ge 2$$\n\nWhich of the following coordinate points $(x, y)$ satisfies the system of inequalities?",
    options: ["$(4, 0)$", "$(0, 0)$", "$(1, 3)$", "$(2, -2)$"],
    correctIndex: 0,
    correctAnswerText: "$(4, 0)$",
    explanation: `Step-by-Step Mathematical Explanation:
1. Examine boundaries and shading:
   - $2x - 3y \\ge 6 \\implies -3y \\ge -2x + 6 \\implies y \\le \\frac{2}{3}x - 2$ (solid boundary, shade **below**)
   - $x + y \\ge 2 \\implies y \\ge -x + 2$ (solid boundary, shade **above**)
2. Test point $(4,0)$ in both inequalities:
   - First: $2(4) - 3(0) = 8 \\ge 6$ (True)
   - Second: $4 + 0 = 4 \\ge 2$ (True)
   Since $(4,0)$ satisfies both, it is a valid solution.

Distractor Analysis:
- Option B $(0,0)$: Violates both inequalities (First: $0 \\ge 6$ is False; Second: $0 \\ge 2$ is False).
- Option C $(1,3)$: Violates the first inequality ($2 - 9 = -7 \\ge 6$, False).
- Option D $(2,-2)$: Violates the second inequality ($2 - 2 = 0 \\ge 2$, False).

Tutor Pro-Tip:
Always double check your subtraction and division operations with negative signs. If you divide by a negative number (like $-3$), you must reverse the inequality direction. This is a very frequent traps on the SAT!`,
    diagram: {
      id: "ch6-q3a-diagram",
      title: "System of Inequalities 10",
      caption: "Triangular wedge bounded by 2x - 3y = 6 and x + y = 2, meeting at (2.4, -0.4).",
      xAxisLabel: "x",
      yAxisLabel: "y",
      xRange: [-6, 6],
      yRange: [-6, 6],
      xStep: 2,
      yStep: 2,
      curves: [
        {
          type: "line",
          points: [[2.4, -0.4], [6, 2], [6, -4], [2.4, -0.4]],
          color: "transparent",
          shade: "region",
          shadeColor: "rgba(59, 130, 246, 0.15)"
        },
        {
          type: "function",
          expression: "(2/3)*x - 2",
          color: "#3b82f6",
          style: "solid",
          label: "2x - 3y = 6"
        },
        {
          type: "function",
          expression: "-x + 2",
          color: "#3b82f6",
          style: "solid",
          label: "x + y = 2"
        }
      ]
    }
  },
  {
    id: "ch6-q3b",
    number: 11,
    exerciseNumber: 3,
    exerciseTitle: "Module 3: Systems of Inequalities",
    question: "Graph the system of inequalities below on the coordinate plane. Shade the region that represents all solutions to both inequalities.\n\n$$y \\le -x + 7$$\n$$y > 2x - 2$$\n\nWhich of the following coordinate points $(x, y)$ satisfies the system of inequalities?",
    options: ["$(1, 1)$", "$(5, 5)$", "$(4, -2)$", "$(0, 10)$"],
    correctIndex: 0,
    correctAnswerText: "$(1, 1)$",
    explanation: `Step-by-Step Mathematical Explanation:
1. Examine boundaries and shading directions:
   - $y \\le -x + 7$: Solid boundary line, shade **below**.
   - $y > 2x - 2$: Dashed boundary line, shade **above**.
2. Test point $(1,1)$ in both inequalities:
   - First: $1 \\le -1 + 7 \\implies 1 \\le 6$ (True)
   - Second: $1 > 2(1) - 2 \\implies 1 > 0$ (True)
   Since $(1,1)$ satisfies both constraints, it lies in the overlapping shaded wedge.

Distractor Analysis:
- Option B $(5,5)$: Violates the first inequality ($5 \\le 2$, False).
- Option C $(4,-2)$: Violates the second inequality ($-2 > 6$, False).
- Option D $(0,10)$: Violates the first inequality ($10 \\le 7$, False).

Tutor Pro-Tip:
With one solid boundary line ($\\le$) and one dashed boundary line ($>$), pay close attention to any coordinate on the lines themselves. Coordinates on $y = -x+7$ can be solutions, but coordinates on $y = 2x-2$ can never be!`,
    diagram: {
      id: "ch6-q3b-diagram",
      title: "System of Inequalities 11",
      caption: "Double-shaded solution region bounded by solid line y = -x + 7 and dashed line y = 2x - 2.",
      xAxisLabel: "x",
      yAxisLabel: "y",
      xRange: [-6, 6],
      yRange: [-6, 6],
      xStep: 2,
      yStep: 2,
      curves: [
        {
          type: "line",
          points: [[3, 4], [1, 6], [-6, 6], [-6, -6], [-2, -6], [3, 4]],
          color: "transparent",
          shade: "region",
          shadeColor: "rgba(59, 130, 246, 0.15)"
        },
        {
          type: "function",
          expression: "-x + 7",
          color: "#3b82f6",
          style: "solid",
          label: "y = -x + 7"
        },
        {
          type: "function",
          expression: "2*x - 2",
          color: "#3b82f6",
          style: "dashed",
          label: "y = 2x - 2"
        }
      ]
    }
  },
  {
    id: "ch6-q3c",
    number: 12,
    exerciseNumber: 3,
    exerciseTitle: "Module 3: Systems of Inequalities",
    question: "Graph the system of inequalities below on the coordinate plane. Shade the region that represents all solutions to both inequalities.\n\n$$2x + y \\ge 4$$\n$$x - 2y \\le 8$$\n\nWhich of the following coordinate points $(x, y)$ satisfies the system of inequalities?",
    options: ["$(4, 2)$", "$(0, 0)$", "$(1, -2)$", "$(5, -5)$"],
    correctIndex: 0,
    correctAnswerText: "$(4, 2)$",
    explanation: `Step-by-Step Mathematical Explanation:
1. Rearrange both inequalities into slope-intercept form to see the boundaries clearly:
   - $2x + y \\ge 4 \\implies y \\ge -2x + 4$ (solid line, shaded **above**)
   - $x - 2y \\le 8 \\implies -2y \\le -x + 8 \\implies y \\ge 0.5x - 4$ (solid line, shaded **above**)
2. Substitute the coordinate point $(4,2)$ into both:
   - First: $2(4) + 2 = 10 \\ge 4$ (True)
   - Second: $4 - 2(2) = 0 \\le 8$ (True)
   Since $(4,2)$ satisfies both, it is located in the double-shaded region.

Distractor Analysis:
- Option B $(0,0)$: Violates the first inequality ($0 \\ge 4$, False).
- Option C $(1,-2)$: Violates the first inequality ($2(1) - 2 = 0 \\ge 4$, False).
- Option D $(5,-5)$: Violates the second inequality ($5 - 2(-5) = 15 \\le 8$, False).

Tutor Pro-Tip:
When both boundaries slope in opposite directions and are shaded above, the region extends infinitely upward on the coordinate plane. If you have any doubt, pick a test point with extremely large y-coordinates!`,
    diagram: {
      id: "ch6-q3c-diagram",
      title: "System of Inequalities 12",
      caption: "The solution region lies above both solid lines: 2x + y = 4 and x - 2y = 8, meeting at (3.2, -2.4).",
      xAxisLabel: "x",
      yAxisLabel: "y",
      xRange: [-6, 6],
      yRange: [-6, 6],
      xStep: 2,
      yStep: 2,
      curves: [
        {
          type: "line",
          points: [[3.2, -2.4], [6, -1], [6, 6], [-1, 6], [3.2, -2.4]],
          color: "transparent",
          shade: "region",
          shadeColor: "rgba(59, 130, 246, 0.15)"
        },
        {
          type: "function",
          expression: "-2*x + 4",
          color: "#3b82f6",
          style: "solid",
          label: "2x + y = 4"
        },
        {
          type: "function",
          expression: "0.5*x - 4",
          color: "#3b82f6",
          style: "solid",
          label: "x - 2y = 8"
        }
      ]
    }
  },
  {
    id: "ch6-q3d",
    number: 13,
    exerciseNumber: 3,
    exerciseTitle: "Module 3: Systems of Inequalities",
    question: "In the $xy$-plane, the system of inequalities\n\n$$y \\ge x^2 - 6x + 13$$\n$$y \\le 2x + c$$\n\nhas exactly one solution $(x_0, y_0)$, where $c$ is a constant. What is the value of $c$?",
    options: ["$-7$", "$-3$", "$3$", "$12$"],
    correctIndex: 1,
    correctAnswerText: "$-3$",
    explanation: `Step-by-Step Ultra-Hard Digital SAT Solution (Tangency Boundary Condition):
1. Understand the geometric meaning of the system:
   - $y \\ge x^2 - 6x + 13$: Represents the region **on or above** an upward-opening parabola with vertex at $(3, 4)$.
   - $y \\le 2x + c$: Represents the region **on or below** a straight line with slope $m = 2$ and $y$-intercept $c$.

2. Analyze the condition "exactly one solution":
   - If the line passes completely below the parabola, the regions do not overlap (0 solutions).
   - If the line cuts through the interior of the parabola, the overlapping region contains infinitely many points.
   - For the system to contain **exactly one coordinate point**, the boundary line $y = 2x + c$ must be strictly **tangent to the bottom of the parabola** at a single point $(x_0, y_0)$.

3. Set up the quadratic intersection equation:
   $$x^2 - 6x + 13 = 2x + c$$
   $$x^2 - 8x + (13 - c) = 0$$

4. For a single point of intersection (tangency), the discriminant ($D = b^2 - 4ac$) must equal zero:
   $$D = (-8)^2 - 4(1)(13 - c) = 0$$
   $$64 - 52 + 4c = 0$$
   $$12 + 4c = 0$$
   $$4c = -12 \\implies c = -3$$

5. Verify the tangency point $(x_0, y_0)$:
   - $x_0 = -\\frac{b}{2a} = -\\frac{-8}{2(1)} = 4$
   - $y_0 = 4^2 - 6(4) + 13 = 16 - 24 + 13 = 5$
   - On the line: $y_0 = 2(4) + (-3) = 5$.
   The unique point satisfying both inequalities is $(4, 5)$.

Tutor's Elite Module 2 Pro-Tip:
Whenever a Digital SAT inequality problem specifies that a non-linear system has "exactly one solution", convert the boundaries to an equality and set the discriminant $b^2 - 4ac = 0$.`,
    distractorExplanations: {
      0: "$-7$ results in $D = 64 - 80 = -16 < 0$, meaning the line lies entirely below the parabola with 0 real intersection points.",
      2: "$3$ yields $D = 64 - 40 = 24 > 0$, where the line slices across the parabola creating infinitely many overlapping solutions.",
      3: "$12$ places the line high above the parabola vertex ($y = 2x + 12$), creating a massive unbounded overlapping solution region."
    },
    diagram: {
      id: "ch6-q3d-diagram",
      title: "Non-Linear System in the xy-Plane",
      caption: "Graph of the parabola y = x² - 6x + 13 and boundary line y = 2x + c.",
      xAxisLabel: "x",
      yAxisLabel: "y",
      xRange: [0, 8],
      yRange: [0, 14],
      xStep: 1,
      yStep: 2,
      curves: [
        {
          type: "function",
          expression: "x*x - 6*x + 13",
          color: "#2563eb",
          style: "solid",
          label: "y = x² - 6x + 13"
        },
        {
          type: "function",
          expression: "2*x - 3",
          color: "#dc2626",
          style: "solid",
          label: "y = 2x + c"
        }
      ]
    }
  },
  {
    id: "ch6-q3e",
    number: 14,
    exerciseNumber: 3,
    exerciseTitle: "Module 3: Systems of Inequalities",
    question: "A bounded polygonal region in the $xy$-plane is defined by the following system of inequalities:\n\n$$y \\ge |x - 4|$$\n$$y \\le -\\frac{1}{2}x + 5$$\n\nWhat is the maximum possible value of the linear expression $3x + 5y$ for any coordinate point $(x, y)$ in this region?",
    options: ["$12$", "$24$", "$28$", "$34$"],
    correctIndex: 2,
    correctAnswerText: "$28$",
    explanation: `Step-by-Step Ultra-Hard Digital SAT Solution (Linear Programming on Bounded Region):
1. Determine the boundary curves and shape of the feasible region:
   - $y \\ge |x - 4|$: V-shaped absolute value boundary with vertex at $(4, 0)$, opening upward.
     - Left arm: $y = -x + 4$ (for $x \\le 4$)
     - Right arm: $y = x - 4$ (for $x \\ge 4$)
   - $y \\le -0.5x + 5$: Line with slope $-0.5$ and $y$-intercept $5$, shaded downward.

2. Find the 3 intersection vertices of the closed triangular region:
   - **Vertex 1 (Absolute Value Peak/Base)**: $(4, 0)$
     Check: $0 \\le -0.5(4) + 5 = 3$ (Satisfied).
   - **Vertex 2 (Right Arm Intersection)**:
     $$x - 4 = -0.5x + 5 \\implies 1.5x = 9 \\implies x = 6$$
     $$y = 6 - 4 = 2 \\implies (6, 2)$$
   - **Vertex 3 (Left Arm Intersection)**:
     $$-(x - 4) = -0.5x + 5 \\implies -x + 4 = -0.5x + 5 \\implies -0.5x = 1 \\implies x = -2$$
     $$y = -(-2) + 4 = 6 \\implies (-2, 6)$$

3. Evaluate the objective function $F(x, y) = 3x + 5y$ at each vertex (by the Fundamental Theorem of Linear Programming, extrema on convex bounded polygons occur at the vertices):
   - At $(4, 0)$: $F(4, 0) = 3(4) + 5(0) = 12$
   - At $(-2, 6)$: $F(-2, 6) = 3(-2) + 5(6) = -6 + 30 = 24$
   - At $(6, 2)$: $F(6, 2) = 3(6) + 5(2) = 18 + 10 = 28$

4. The maximum value of the expression is $28$, attained at $(6, 2)$.

Tutor's Elite Module 2 Pro-Tip:
When asked to maximize or minimize a linear combination $Ax + By$ over a region bounded by linear or piecewise inequalities, find all boundary intersection vertices and plug each into the expression.`,
    distractorExplanations: {
      0: "$12$ is the minimum value of $3x + 5y$ on the region, evaluated at the vertex $(4, 0)$.",
      1: "$24$ is the value of the expression evaluated at the upper-left corner vertex $(-2, 6)$.",
      3: "$34$ is an overestimate obtained by mistakenly evaluating at an unconstrained point such as $(8, 2)$."
    },
    diagram: {
      id: "ch6-q3e-diagram",
      title: "System of Inequalities Region",
      caption: "Shaded region bounded by y = |x - 4| and y = -0.5x + 5.",
      xAxisLabel: "x",
      yAxisLabel: "y",
      xRange: [-4, 8],
      yRange: [-1, 8],
      xStep: 2,
      yStep: 2,
      curves: [
        {
          type: "line",
          points: [[-2, 6], [4, 0], [6, 2], [-2, 6]],
          color: "#2563eb",
          style: "solid",
          shade: "region",
          shadeColor: "rgba(59, 130, 246, 0.2)"
        },
        {
          type: "line",
          points: [[-3, 7], [4, 0], [8, 4]],
          color: "#2563eb",
          style: "solid",
          label: "y = |x - 4|"
        },
        {
          type: "function",
          expression: "-0.5*x + 5",
          color: "#7c3aed",
          style: "solid",
          label: "y = -0.5x + 5"
        }
      ]
    }
  },
  {
    id: "ch6-q3f",
    number: 15,
    exerciseNumber: 3,
    exerciseTitle: "Module 3: Systems of Inequalities",
    question: "In the $xy$-plane, an integer lattice point is defined as a point $(x, y)$ where both $x$ and $y$ are integers.\n\nA region is defined by the following system of strict inequalities:\n\n$$y > x^2 - 4$$\n$$y < 4 - x^2$$\n\nHow many integer lattice points $(x, y)$ strictly satisfy both inequalities in the system?",
    options: ["$11$", "$15$", "$17$", "$21$"],
    correctIndex: 2,
    correctAnswerText: "$17$",
    explanation: `Step-by-Step Ultra-Hard Digital SAT Solution (Integer Lattice Points in Strict Region):
1. Combine the strict inequalities into a continuous compound inequality for $y$:
   $$x^2 - 4 < y < 4 - x^2$$

2. Determine the valid range of integer $x$-values:
   For any solution to exist, the lower bound must be strictly less than the upper bound:
   $$x^2 - 4 < 4 - x^2 \\implies 2x^2 < 8 \\implies x^2 < 4 \\implies -2 < x < 2$$
   The only possible integer values for $x$ are $x \\in \\{-1, 0, 1\\}$.

3. Count the integer $y$-solutions for each allowed integer $x$:
   - **For $x = 0$**:
     $$0^2 - 4 < y < 4 - 0^2 \\implies -4 < y < 4$$
     Strict integer values: $y \\in \\{-3, -2, -1, 0, 1, 2, 3\\}$
     $$\\text{Count} = 7 \\text{ points}$$

   - **For $x = 1$**:
     $$1^2 - 4 < y < 4 - 1^2 \\implies -3 < y < 3$$
     Strict integer values: $y \\in \\{-2, -1, 0, 1, 2\\}$
     $$\\text{Count} = 5 \\text{ points}$$

   - **For $x = -1$**:
     $$(-1)^2 - 4 < y < 4 - (-1)^2 \\implies -3 < y < 3$$
     Strict integer values: $y \\in \\{-2, -1, 0, 1, 2\\}$
     $$\\text{Count} = 5 \\text{ points}$$

4. Sum the total number of integer lattice points:
   $$\\text{Total} = 7 + 5 + 5 = 17 \\text{ points}$$

Tutor's Elite Module 2 Pro-Tip:
Watch out for strict inequalities ($<$ vs $\\le$)! At $x = 2$ and $x = -2$, the inequality becomes $0 < y < 0$, which contains zero integer solutions. Boundary points are strictly excluded.`,
    distractorExplanations: {
      0: "$11$ forgets the symmetric negative column $x = -1$ ($7 + 5 = 12$ minus one).",
      1: "$15$ incorrectly excludes the interior origin points $(0, 0)$ and $(\\pm 1, 0)$.",
      3: "$21$ mistakenly counts points on the boundary lines as well."
    },
    diagram: {
      id: "ch6-q3f-diagram",
      title: "Bounded Parabolic Region",
      caption: "Strict inequality region bounded between dashed curves y = x² - 4 and y = 4 - x².",
      xAxisLabel: "x",
      yAxisLabel: "y",
      xRange: [-4, 4],
      yRange: [-5, 5],
      xStep: 1,
      yStep: 2,
      curves: [
        {
          type: "line",
          points: [
            [-2, 0], [-1.5, 1.75], [-1, 3], [-0.5, 3.75], [0, 4], [0.5, 3.75], [1, 3], [1.5, 1.75], [2, 0],
            [1.5, -1.75], [1, -3], [0.5, -3.75], [0, -4], [-0.5, -3.75], [-1, -3], [-1.5, -1.75], [-2, 0]
          ],
          color: "transparent",
          shade: "region",
          shadeColor: "rgba(59, 130, 246, 0.2)"
        },
        {
          type: "function",
          expression: "x*x - 4",
          color: "#2563eb",
          style: "dashed",
          label: "y > x² - 4"
        },
        {
          type: "function",
          expression: "4 - x*x",
          color: "#ea580c",
          style: "dashed",
          label: "y < 4 - x²"
        }
      ]
    }
  }
];
