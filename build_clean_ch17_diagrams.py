import sys

new_code = '''import { FullSatMathChapter } from './satMathConcepts';

export const FULL_CHAPTER_17_ANGLES: FullSatMathChapter = {
  id: "angles",
  chapterNumber: 17,
  chapterTitle: "Angles",
  pageNumber: 197,
  quote:
    "Geometry is knowledge of the eternally existent. Master the fundamental angle relationships and every complex figure unlocks instantly.",
  introduction: `Angles and coordinate geometry form the bedrock of SAT geometry. Questions on angles test your ability to recognize parallel lines cut by transversals, apply the Exterior Angle Theorem, calculate polygon interior angle sums, and navigate complex overlapping triangles.
    
By mastering the core theorems—vertical angles, alternate interior angles, corresponding angles, consecutive interior angles, and the exterior angle shortcut—you can solve even the most intricate multi-step geometry problems rapidly and accurately.`,
  sections: [
    {
      sectionTitle: "1. The Exterior Angle Theorem",
      fullText: `An exterior angle is formed when any side of a triangle is extended. In any triangle, extending a side creates an exterior angle that is supplementary to the adjacent interior angle.
    
THE EXTERIOR ANGLE THEOREM:
An exterior angle of a triangle is always equal to the sum of the two remote interior angles (the two angles in the triangle furthest from it).
    
Formula:
x = a + b
    
Where:
• x is the measure of the exterior angle.
• a and b are the measures of the two non-adjacent (remote) interior angles.
• c is the adjacent interior angle, where c + x = 180° and a + b + c = 180°.
    
Why this works:
Since the three interior angles of a triangle sum to 180° (a + b + c = 180°), we have a + b = 180° - c.
Since c and x lie on a straight line, they are supplementary: x = 180° - c.
Therefore, x = a + b.
    
Using the exterior angle theorem saves valuable time on the SAT compared to finding the third interior angle first and then subtracting from 180°.`,
      bulletPoints: [
        "Exterior angle = Sum of two remote interior angles (x = a + b).",
        "Adjacent interior angle and exterior angle always sum to 180° (linear pair).",
        "Every triangle has 6 exterior angles (2 at each vertex), and the sum of one exterior angle at each of the 3 vertices is always 360°.",
      ],
      tables: [
        {
          title: "Summary of Triangle Angle Relationships",
          headers: [
            "Property / Theorem",
            "Mathematical Formula",
            "Geometric Condition",
            "SAT Strategic Value",
          ],
          rows: [
            [
              "Triangle Angle Sum",
              "a + b + c = 180°",
              "Three interior angles of any triangle",
              "Foundational baseline for all polygon calculations",
            ],
            [
              "Exterior Angle Theorem",
              "x = a + b",
              "Side extended; x is exterior to remote angles a, b",
              "Direct 1-step calculation shortcut; avoids 2-step subtraction",
            ],
            [
              "Linear Pair Postulate",
              "c + x = 180°",
              "Adjacent angles on a straight line",
              "Quick conversion between interior and exterior angles",
            ],
            [
              "Exterior Angles Sum",
              "x₁ + x₂ + x₃ = 360°",
              "One exterior angle taken at each vertex",
              "Applies universally to ALL convex polygons (n-gons)",
            ],
          ],
        },
      ],
      examples: [
        {
          title: "Example 1: Exterior Angle Theorem Application",
          question: "In the figure, line AB is extended through C and E. If angle ACD = 100°, angle DCE = 80°, angle CDE = x°, and angle DEB = 3x°, what is the value of x?",
          options: ["20", "30", "40", "50"],
          correctAnswer: "x = 40",
          explanation: `Step-by-Step Geometric Breakdown:
    
Approach 1 (Exterior Angle Shortcut):
1. Since points A, C, E, and B lie on a straight line, ∠ACD and ∠DCE form a linear pair (supplementary angles that sum to 180°).
   ∠DCE = 180° - 100° = 80°.
    
2. In △CDE, ∠DEB is an exterior angle at vertex E.
   By the Exterior Angle Theorem, an exterior angle equals the sum of the two remote interior angles (∠DCE and ∠CDE):
   ∠DEB = ∠DCE + ∠CDE
   3x = 80 + x
    
3. Solve the linear algebraic equation:
   3x - x = 80
   2x = 80
   x = 40
    
Approach 2 (Internal Triangle Angle Sum Verification):
1. ∠DCE = 80°.
2. Since ∠DEB and ∠DEC form a straight line, ∠DEC = 180° - 3x.
3. The sum of angles in △CDE is 180°:
   80 + x + (180 - 3x) = 180
   260 - 2x = 180
   2x = 80 ⟹ x = 40.
   
Both methods confirm x = 40.`,
          diagram: {
            id: "example-1-diag",
            title: "Example 1 Diagram: Exterior Angle Theorem",
            caption: "Line AB is extended through C and E. ∠ACD = 100°, ∠DCE = 80°, ∠CDE = x°, ∠DEB = 3x°",
            xRange: [-1, 7],
            yRange: [-1, 5],
            hideAxes: true,
            hideGrid: true,
            textAnnotations: [
              { x: -0.5, y: -0.3, text: "A", fontSize: 11, fontWeight: "bold" },
              { x: 1.5, y: -0.3, text: "C", fontSize: 11, fontWeight: "bold" },
              { x: 4.5, y: -0.3, text: "E", fontSize: 11, fontWeight: "bold" },
              { x: 6.5, y: -0.3, text: "B", fontSize: 11, fontWeight: "bold" },
              { x: 2.5, y: 3.8, text: "D", fontSize: 11, fontWeight: "bold" },
              { x: 0.8, y: 0.5, text: "100°", fontSize: 11, color: "#dc2626", background: "#ffffff", border: "#e2e8f0" },
              { x: 2.0, y: 0.5, text: "80°", fontSize: 11, color: "#16a34a", background: "#ffffff", border: "#e2e8f0" },
              { x: 2.5, y: 2.8, text: "x°", fontSize: 11, color: "#2563eb", background: "#ffffff", border: "#e2e8f0" },
              { x: 5.2, y: 0.5, text: "3x°", fontSize: 11, color: "#2563eb", background: "#ffffff", border: "#e2e8f0" }
            ],
            curves: [
              { type: "line", points: [[-0.8, 0], [6.8, 0]], color: "#0f172a", style: "solid" },
              { type: "line", points: [[1.5, 0], [2.5, 3.5], [4.5, 0]], color: "#2563eb", style: "solid" }
            ]
          }
        }
      ]
    },
    {
      sectionTitle: "2. Parallel Lines & Transversals",
      fullText: `When two parallel lines (l and m) are intersected by a third line (called a transversal t), eight angles are formed. These eight angles follow strict congruency and supplementary rules.
    
CLASSIFICATION OF ANGLE PAIRS:
    
1. Vertical Angles (Congruent):
   Opposite angles formed by two intersecting lines.
   • ∠1 ≅ ∠4
   • ∠2 ≅ ∠3
   • ∠5 ≅ ∠8
   • ∠6 ≅ ∠7
    
2. Corresponding Angles (Congruent):
   Angles in matching positions relative to the parallel lines and the transversal.
   • ∠1 ≅ ∠5 (top-left)
   • ∠2 ≅ ∠6 (top-right)
   • ∠3 ≅ ∠7 (bottom-left)
   • ∠4 ≅ ∠8 (bottom-right)
    
3. Alternate Interior Angles (Congruent):
   Angles inside the parallel lines on opposite sides of the transversal.
   • ∠3 ≅ ∠6
   • ∠4 ≅ ∠5
    
4. Alternate Exterior Angles (Congruent):
   Angles outside the parallel lines on opposite sides of the transversal.
   • ∠1 ≅ ∠8
   • ∠2 ≅ ∠7
    
5. Consecutive (Same-Side) Interior Angles (Supplementary, sum to 180°):
   Angles inside the parallel lines on the same side of the transversal.
   • ∠3 + ∠5 = 180°
   • ∠4 + ∠6 = 180°
    
6. Consecutive (Same-Side) Exterior Angles (Supplementary, sum to 180°):
   Angles outside the parallel lines on the same side of the transversal.
   • ∠1 + ∠7 = 180°
   • ∠2 + ∠8 = 180°
    
SAT MASTER RULE FOR PARALLEL LINES:
When two parallel lines are cut by a transversal, ALL acute angles formed are equal to each other, and ALL obtuse angles formed are equal to each other. Any acute angle plus any obtuse angle equals 180°.`,
      bulletPoints: [
        "All acute angles are congruent; all obtuse angles are congruent.",
        "Any acute angle + any obtuse angle = 180°.",
        "Parallel lines guarantee equal alternate interior and corresponding angles.",
        "If a transversal is perpendicular to one parallel line, it is perpendicular to both (forming eight 90° angles).",
      ],
      examples: [
        {
          title: "Example 2: Parallel Lines & Transversals Angle Chasing",
          question: "In the figure, segment AC is parallel to segment GD, and segment BF is parallel to segment CE. If angle A = 70° and angle C = 40°, what is the value of x (angle BFE)?",
          options: ["90", "100", "110", "120"],
          correctAnswer: "x = 110",
          explanation: `Step-by-Step Geometric Breakdown:
    
1. Identify parallel relationships:
   • Segment AC ∥ Segment GD
   • Segment BF ∥ Segment CE
    
2. In △ABC, find angle B:
   Since AC ∥ GD, transversal AB creates corresponding angles.
   In △ABC, the three interior angles sum to 180°:
   ∠A + ∠B + ∠C = 180°
   70° + ∠B + 40° = 180°
   110° + ∠B = 180° ⟹ ∠B = 70°.
    
3. Relate △ABC to △BFE using parallel line properties:
   • Since BF ∥ CE, line segment BC acts as a transversal.
   • Corresponding angles are congruent: ∠ABF ≅ ∠C = 40°.
   • Alternatively, in △BFE, side BF ∥ CE creates corresponding angles ∠BFE and ∠C.
    
4. Angle BFE (x°) is an exterior angle to △ABF or consecutive interior angle:
   ∠BFE = ∠A + ∠ABF = 70° + 40° = 110°.
    
Alternative Method (Angle Sum in △ABF + Linear Pair):
• In △ABF, ∠A = 70° and ∠ABF = 40°.
• ∠AFB = 180° - (70° + 40°) = 70°.
• Angle AFB and angle BFE (x°) form a linear pair along line segment AC:
  x = 180° - 70° = 110°.`,
          diagram: {
            id: "example-2-diag",
            title: "Example 2 Diagram: Parallel Segments & Triangles",
            caption: "AC ∥ GD and BF ∥ CE. ∠A = 70°, ∠C = 40°, ∠BFE = x° = 110°",
            xRange: [-1, 7],
            yRange: [-1, 6],
            hideAxes: true,
            hideGrid: true,
            textAnnotations: [
              { x: -0.2, y: -0.3, text: "A", fontSize: 11, fontWeight: "bold" },
              { x: 6.2, y: -0.3, text: "C", fontSize: 11, fontWeight: "bold" },
              { x: 3.0, y: 5.3, text: "E", fontSize: 11, fontWeight: "bold" },
              { x: 1.1, y: 2.7, text: "B", fontSize: 11, fontWeight: "bold" },
              { x: 4.0, y: -0.3, text: "F", fontSize: 11, fontWeight: "bold" },
              { x: 0.8, y: 0.5, text: "70°", fontSize: 11, color: "#16a34a", background: "#ffffff", border: "#e2e8f0" },
              { x: 5.2, y: 0.5, text: "40°", fontSize: 11, color: "#16a34a", background: "#ffffff", border: "#e2e8f0" },
              { x: 4.3, y: 0.6, text: "x°", fontSize: 11, color: "#2563eb", background: "#ffffff", border: "#e2e8f0" }
            ],
            curves: [
              { type: "line", points: [[0, 0], [3, 5], [6, 0], [0, 0]], color: "#0f172a", style: "solid" },
              { type: "line", points: [[1.5, 2.5], [4, 0]], color: "#2563eb", style: "solid" }
            ]
          }
        }
      ]
    },
    {
      sectionTitle: "3. Polygons & Interior Angle Sums",
      fullText: `A polygon is a closed two-dimensional figure made up of straight line segments.
    
INTERIOR ANGLE SUM FORMULA:
The sum S of the interior angles of an n-sided convex polygon is given by:
S = (n - 2) × 180°
    
REGULAR POLYGON INDIVIDUAL INTERIOR ANGLE:
In a regular polygon (where all sides and all interior angles are equal), each interior angle measures:
Interior Angle = ((n - 2) × 180°) / n
    
EXTERIOR ANGLE SUM THEOREM (ALL POLYGONS):
For ANY convex polygon, the sum of one exterior angle at each vertex is ALWAYS 360°, regardless of the number of sides:
Sum of Exterior Angles = 360°
    
REGULAR POLYGON INDIVIDUAL EXTERIOR ANGLE:
In a regular n-sided polygon, each exterior angle measures:
Exterior Angle = 360° / n`,
      bulletPoints: [
        "Interior angle sum = (n - 2) × 180°.",
        "Regular polygon interior angle = ((n - 2) × 180°) / n.",
        "Exterior angle sum is ALWAYS 360° for any convex polygon.",
        "Regular polygon exterior angle = 360° / n.",
        "Interior Angle + Exterior Angle = 180° at any vertex.",
      ],
      examples: [
        {
          title: "Example 3: Extended Regular Pentagon & Triangle Angle Sum",
          question: "In the figure, two sides of a regular pentagon are extended to form a triangle. What is the value of x?",
          options: ["30", "36", "45", "54"],
          correctAnswer: "x = 36",
          explanation: `Step-by-Step Geometric Breakdown:
    
Step 1: Calculate the interior angle of a regular pentagon:
A pentagon has n = 5 sides.
Sum of interior angles = (5 - 2) × 180° = 3 × 180° = 540°.
Each interior angle of a regular pentagon = 540° ÷ 5 = 108°.
    
Step 2: Find the interior angles of the extended triangle:
The two angles of the triangle adjacent to the pentagon vertices are supplementary to the 108° interior angles of the pentagon.
Exterior / Supplementary angle = 180° - 108° = 72°.
    
Step 3: Solve for x in the extended triangle:
The extended triangle has interior angles measuring 72°, 72°, and x°.
Since the sum of angles in a triangle is 180°:
x + 72° + 72° = 180°
x + 144° = 180°
x = 180° - 144° = 36.
    
Conclusion: The value of x is 36.`,
          diagram: {
            id: "example-3-diag",
            title: "Example 3 Diagram: Extended Regular Pentagon",
            caption: "In the figure, two sides of a regular pentagon are extended to form a triangle.",
            xRange: [-2, 8],
            yRange: [-2, 6],
            hideAxes: true,
            hideGrid: true,
            subDiagrams: [
              {
                label: "Figure 1: Problem Diagram",
                caption: "Find the value of x°",
                xRange: [-1, 7],
                yRange: [-1, 5],
                hideAxes: true,
                hideGrid: true,
                textAnnotations: [
                  { x: 5.4, y: 0.3, text: "x°", fontSize: 12, fontWeight: "bold", color: "#2563eb", background: "#ffffff", border: "#e2e8f0" }
                ],
                curves: [
                  { type: "line", points: [[0, 0], [2, 0], [2.6, 1.9], [1, 3.2], [-0.6, 1.9], [0, 0]], color: "#0f172a", style: "solid" },
                  { type: "line", points: [[2, 0], [5.8, -0.3]], color: "#dc2626", style: "solid" },
                  { type: "line", points: [[1, 3.2], [2.6, 1.9], [5.8, -0.3]], color: "#dc2626", style: "solid" }
                ]
              },
              {
                label: "Figure 2: Solution Breakdown",
                caption: "Interior = 108°, Supplementary = 72°, x = 180 - 72 - 72 = 36",
                xRange: [-1, 7],
                yRange: [-1, 5],
                hideAxes: true,
                hideGrid: true,
                textAnnotations: [
                  { x: 2.1, y: 1.8, text: "108°", fontSize: 10, fontWeight: "bold", background: "#ffffff", border: "#e2e8f0" },
                  { x: 2.9, y: 1.2, text: "72°", fontSize: 10, fontWeight: "bold", color: "#dc2626", background: "#ffffff", border: "#e2e8f0" },
                  { x: 1.6, y: 0.3, text: "108°", fontSize: 10, fontWeight: "bold", background: "#ffffff", border: "#e2e8f0" },
                  { x: 2.4, y: -0.2, text: "72°", fontSize: 10, fontWeight: "bold", color: "#dc2626", background: "#ffffff", border: "#e2e8f0" },
                  { x: 5.4, y: 0.3, text: "x°", fontSize: 11, fontWeight: "bold", color: "#2563eb", background: "#ffffff", border: "#e2e8f0" }
                ],
                curves: [
                  { type: "line", points: [[0, 0], [2, 0], [2.6, 1.9], [1, 3.2], [-0.6, 1.9], [0, 0]], color: "#0f172a", style: "solid" },
                  { type: "line", points: [[2, 0], [5.8, -0.3]], color: "#dc2626", style: "solid" },
                  { type: "line", points: [[1, 3.2], [2.6, 1.9], [5.8, -0.3]], color: "#dc2626", style: "solid" }
                ]
              }
            ]
          }
        }
      ]
    }
  ],
  exerciseGroups: [
    {
      exerciseNumber: 1,
      title: "Chapter 17 Practice Exercises: Angles",
      description:
        "16 exam-style questions covering parallel lines, transversals, triangle angle sum, exterior angle theorem, polygon interior/exterior angles, and complex angle chasing.",
      questions: [
        {
          id: "ch17-q1",
          number: 1,
          exerciseNumber: 1,
          exerciseTitle: "Angles Practice Set",
          question:
            "In the figure, line l is parallel to line m. What is the value of x?",
          options: ["A) 58", "B) 68", "C) 112", "D) 122"],
          correctIndex: 1,
          correctAnswerText: "B) 68 (Grid-in: 68)",
          explanation: `Step-by-Step Breakdown:

Step 1: Identify angle relationships between parallel lines l and m:
Line l ∥ line m cut by transversal t.
The angle given is 112° (an obtuse interior angle).
Angle x° and 112° are consecutive interior (same-side interior) angles, or supplementary alternate exterior angles.

Step 2: Calculate x:
Consecutive interior angles are supplementary (sum to 180°):
x + 112° = 180°
x = 180° - 112° = 68.

Conclusion: The value of x is 68.`,
          diagram: {
            id: "ch17-q1-diag",
            title: "Question 1: Parallel Lines Cut by Transversal",
            caption: "Note: Figure not drawn to scale.",
            xRange: [-1, 6],
            yRange: [-1, 6],
            hideAxes: true,
            hideGrid: true,
            textAnnotations: [
              { x: 1.5, y: 5.7, text: "l", fontSize: 12, fontWeight: "bold" },
              { x: 4.0, y: 5.7, text: "m", fontSize: 12, fontWeight: "bold" },
              { x: 5.5, y: 4.3, text: "t", fontSize: 12, fontWeight: "bold" },
              { x: 2.2, y: 2.2, text: "112°", fontSize: 11, fontWeight: "bold", color: "#16a34a", background: "#ffffff", border: "#e2e8f0" },
              { x: 4.7, y: 3.8, text: "x°", fontSize: 12, fontWeight: "bold", color: "#2563eb", background: "#ffffff", border: "#e2e8f0" }
            ],
            curves: [
              { type: "line", points: [[1.5, 0.5], [1.5, 5.3]], color: "#0f172a", style: "solid" },
              { type: "line", points: [[4.0, 0.5], [4.0, 5.3]], color: "#0f172a", style: "solid" },
              { type: "line", points: [[0.3, 1.8], [5.2, 4.2]], color: "#2563eb", style: "solid" }
            ]
          }
        },
        {
          id: "ch17-q2",
          number: 2,
          exerciseNumber: 1,
          exerciseTitle: "Angles Practice Set",
          question:
            "In the figure, line l intersects line m. What is the value of x?",
          options: ["A) 60", "B) 70", "C) 75", "D) 80"],
          correctIndex: 1,
          correctAnswerText: "B) 70 (Grid-in: 70)",
          explanation: `Step-by-Step Breakdown:

Step 1: Recognize Linear Pair Postulate:
Angles (x + 40)° and x° lie adjacent to each other on a straight line l.
Adjacent angles on a straight line form a linear pair and sum to 180°.

Step 2: Set up equation:
(x + 40) + x = 180°
2x + 40 = 180
2x = 140
x = 70.

Conclusion: The value of x is 70.`,
          diagram: {
            id: "ch17-q2-diag",
            title: "Question 2: Intersecting Lines & Linear Pair",
            caption: "Note: Figure not drawn to scale.",
            xRange: [-1, 6],
            yRange: [-1, 5],
            hideAxes: true,
            hideGrid: true,
            textAnnotations: [
              { x: 5.7, y: 1.5, text: "l", fontSize: 12, fontWeight: "bold" },
              { x: 3.9, y: 4.4, text: "m", fontSize: 12, fontWeight: "bold" },
              { x: 1.8, y: 2.1, text: "(x + 40)°", fontSize: 11, fontWeight: "bold", color: "#2563eb", background: "#ffffff", border: "#e2e8f0" },
              { x: 3.5, y: 2.1, text: "x°", fontSize: 11, fontWeight: "bold", color: "#16a34a", background: "#ffffff", border: "#e2e8f0" }
            ],
            curves: [
              { type: "line", points: [[0.5, 1.5], [5.5, 1.5]], color: "#0f172a", style: "solid" },
              { type: "line", points: [[1.8, 0.3], [3.7, 4.1]], color: "#2563eb", style: "solid" }
            ]
          }
        },
        {
          id: "ch17-q3",
          number: 3,
          exerciseNumber: 1,
          exerciseTitle: "Angles Practice Set",
          question:
            "In the figure, x = 40. What is the value of y?",
          options: ["A) 40", "B) 50", "C) 80", "D) 90"],
          correctIndex: 1,
          correctAnswerText: "B) 50 (Grid-in: 50)",
          explanation: `Step-by-Step Breakdown:

Step 1: Triangle Interior Angle Sum:
The three interior angles inside the triangle are y°, x°, and (x + y)°.
In any triangle, the sum of all three interior angles is always 180°:
y° + x° + (x + y)° = 180°
2x + 2y = 180°
x + y = 90°.

Step 2: Calculate y given x = 40:
40 + y = 90
y = 90 - 40 = 50.

Conclusion: The value of y is 50.`,
          diagram: {
            id: "ch17-q3-diag",
            title: "Question 3: Triangle Interior Angles",
            caption: "Note: Figure not drawn to scale.",
            xRange: [-1, 7],
            yRange: [-1, 5],
            hideAxes: true,
            hideGrid: true,
            textAnnotations: [
              { x: 1.3, y: 1.1, text: "y°", fontSize: 11, fontWeight: "bold", color: "#2563eb", background: "#ffffff", border: "#e2e8f0" },
              { x: 3.0, y: 3.2, text: "x°", fontSize: 11, fontWeight: "bold", color: "#2563eb", background: "#ffffff", border: "#e2e8f0" },
              { x: 4.5, y: 1.1, text: "x° + y°", fontSize: 11, fontWeight: "bold", color: "#dc2626", background: "#ffffff", border: "#e2e8f0" }
            ],
            curves: [
              { type: "line", points: [[0.5, 0.5], [3.0, 4.0], [5.5, 0.5], [0.5, 0.5]], color: "#0f172a", style: "solid" }
            ]
          }
        },
        {
          id: "ch17-q4",
          number: 4,
          exerciseNumber: 1,
          exerciseTitle: "Angles Practice Set",
          question:
            "In the figure, point C lies on AE, and point D lies on BC. What is the value of y?",
          options: ["A) 30", "B) 40", "C) 50", "D) 70"],
          correctIndex: 0,
          correctAnswerText: "A) 30 (Grid-in: 30)",
          explanation: `Step-by-Step Breakdown:

Step 1: Find angle B in large triangle ABE:
In △ABE, interior angles sum to 180°:
∠A + ∠B + ∠E = 180°
50° + ∠B + 40° = 180°
90° + ∠B = 180° ⟹ ∠B = 90° (total angle at vertex B).

Step 2: Find angle C in △ABC:
Given ∠ABD = 60° (part of ∠B), so in △ABC:
∠A = 50°, ∠B = 60°.
∠ACB = 180° - (50° + 60°) = 70°.

Step 3: Find y (∠BDC):
In △DCE, ∠ACB (70°) is an exterior angle to △CDE, OR in △BDC:
∠DCB = 180° - 70° = 110°.
In △CDE, ∠E = 40°. By Exterior Angle Theorem on △CDE at vertex D:
y = ∠DCE + ∠E = (180° - 70°) - 40° = 30°.

Conclusion: The value of y is 30.`,
          diagram: {
            id: "ch17-q4-diag",
            title: "Question 4: Triangle ABE with Points C on AE and D on BC",
            caption: "Note: Figure not drawn to scale.",
            xRange: [-1, 8],
            yRange: [-1, 6],
            hideAxes: true,
            hideGrid: true,
            textAnnotations: [
              { x: 0.1, y: 0.2, text: "A", fontSize: 11, fontWeight: "bold" },
              { x: 3.0, y: 5.4, text: "B", fontSize: 11, fontWeight: "bold" },
              { x: 4.0, y: 0.1, text: "C", fontSize: 11, fontWeight: "bold" },
              { x: 3.1, y: 2.9, text: "D", fontSize: 11, fontWeight: "bold" },
              { x: 6.8, y: 0.2, text: "E", fontSize: 11, fontWeight: "bold" },
              { x: 1.1, y: 0.9, text: "50°", fontSize: 10, fontWeight: "bold", color: "#16a34a", background: "#ffffff", border: "#e2e8f0" },
              { x: 3.0, y: 4.2, text: "60°", fontSize: 10, fontWeight: "bold", color: "#16a34a", background: "#ffffff", border: "#e2e8f0" },
              { x: 5.8, y: 0.9, text: "40°", fontSize: 10, fontWeight: "bold", color: "#16a34a", background: "#ffffff", border: "#e2e8f0" },
              { x: 3.8, y: 2.5, text: "y°", fontSize: 11, fontWeight: "bold", color: "#2563eb", background: "#ffffff", border: "#e2e8f0" }
            ],
            curves: [
              { type: "line", points: [[0.5, 0.5], [3.0, 5.0], [6.5, 0.5], [0.5, 0.5]], color: "#0f172a", style: "solid" },
              { type: "line", points: [[3.0, 5.0], [4.0, 0.5]], color: "#0f172a", style: "solid" },
              { type: "line", points: [[3.5, 2.75], [6.5, 0.5]], color: "#2563eb", style: "solid" }
            ]
          }
        },
        {
          id: "ch17-q5",
          number: 5,
          exerciseNumber: 1,
          exerciseTitle: "Angles Practice Set",
          question:
            "In the figure, four line segments intersect at a point. What is the value of x + y?",
          options: ["A) 125", "B) 180", "C) 235", "D) 280"],
          correctIndex: 2,
          correctAnswerText: "C) 235 (Grid-in: 235)",
          explanation: `Step-by-Step Breakdown:

Step 1: Apply Full Rotation Angle Sum around a Point:
Four intersecting line segments create 8 central angles that sum to 360°.
By vertical angle symmetry or direct central angle sum:
45° + 80° + x + y = 360°
125° + x + y = 360°.

Step 2: Solve for x + y:
x + y = 360° - 125° = 235.

Conclusion: The value of x + y is 235.`,
          diagram: {
            id: "ch17-q5-diag",
            title: "Question 5: Four Intersecting Line Segments at a Point",
            caption: "Note: Figure not drawn to scale.",
            xRange: [-4, 4],
            yRange: [-4, 4],
            hideAxes: true,
            hideGrid: true,
            textAnnotations: [
              { x: 0.0, y: 1.5, text: "45°", fontSize: 11, fontWeight: "bold", color: "#16a34a", background: "#ffffff", border: "#e2e8f0" },
              { x: -1.5, y: 0.0, text: "x°", fontSize: 11, fontWeight: "bold", color: "#2563eb", background: "#ffffff", border: "#e2e8f0" },
              { x: 0.0, y: -1.5, text: "80°", fontSize: 11, fontWeight: "bold", color: "#16a34a", background: "#ffffff", border: "#e2e8f0" },
              { x: 1.5, y: 0.0, text: "y°", fontSize: 11, fontWeight: "bold", color: "#2563eb", background: "#ffffff", border: "#e2e8f0" }
            ],
            curves: [
              { type: "line", points: [[-3, 1.5], [3, -1.5]], color: "#0f172a", style: "solid" },
              { type: "line", points: [[-1.5, 3], [1.5, -3]], color: "#0f172a", style: "solid" },
              { type: "line", points: [[-3, -2], [3, 2]], color: "#0f172a", style: "solid" },
              { type: "line", points: [[-0.5, -3], [0.5, 3]], color: "#0f172a", style: "solid" }
            ]
          }
        },
        {
          id: "ch17-q6",
          number: 6,
          exerciseNumber: 1,
          exerciseTitle: "Angles Practice Set",
          question:
            "In the figure, lines l and m are parallel. What is the value of a + b + c + d?",
          options: ["A) 270", "B) 360", "C) 720", "D) It cannot be determined from the information given."],
          correctIndex: 1,
          correctAnswerText: "B) 360 (Grid-in: 360)",
          explanation: `Step-by-Step Breakdown:

Step 1: Connect angles across parallel lines l and m:
Line l ∥ line m form a trapezoid / quadrilateral between the two transversals.
Interior angles on line m are supplementary to interior angles on line l:
• Consecutive interior angle to a° is (180° - a°).
• Consecutive interior angle to b° is (180° - b°).

Step 2: Calculate sum a + b + c + d:
By alternate interior / consecutive interior angles across parallel lines l ∥ m:
(a + d) = 180° (consecutive interior angles on the left transversal)
(b + c) = 180° (consecutive interior angles on the right transversal).

Adding both equations together:
(a + d) + (b + c) = 180° + 180° = 360°.

Conclusion: a + b + c + d = 360.`,
          diagram: {
            id: "ch17-q6-diag",
            title: "Question 6: Parallel Lines & Transversals Angle Sum",
            caption: "Note: Figure not drawn to scale.",
            xRange: [-1, 7],
            yRange: [-1, 5],
            hideAxes: true,
            hideGrid: true,
            textAnnotations: [
              { x: 6.7, y: 3.5, text: "m", fontSize: 12, fontWeight: "bold" },
              { x: 6.7, y: 1.0, text: "l", fontSize: 12, fontWeight: "bold" },
              { x: 1.8, y: 4.1, text: "a°", fontSize: 11, fontWeight: "bold", color: "#2563eb", background: "#ffffff", border: "#e2e8f0" },
              { x: 4.2, y: 4.1, text: "b°", fontSize: 11, fontWeight: "bold", color: "#2563eb", background: "#ffffff", border: "#e2e8f0" },
              { x: 5.0, y: 0.6, text: "c°", fontSize: 11, fontWeight: "bold", color: "#2563eb", background: "#ffffff", border: "#e2e8f0" },
              { x: 1.0, y: 0.6, text: "d°", fontSize: 11, fontWeight: "bold", color: "#2563eb", background: "#ffffff", border: "#e2e8f0" }
            ],
            curves: [
              { type: "line", points: [[0.5, 3.5], [6.3, 3.5]], color: "#0f172a", style: "solid" },
              { type: "line", points: [[0.5, 1.0], [6.3, 1.0]], color: "#0f172a", style: "solid" },
              { type: "line", points: [[1.2, 0.3], [2.2, 4.2]], color: "#2563eb", style: "solid" },
              { type: "line", points: [[4.8, 0.3], [3.8, 4.2]], color: "#2563eb", style: "solid" }
            ]
          }
        },
        {
          id: "ch17-q7",
          number: 7,
          exerciseNumber: 1,
          exerciseTitle: "Angles Practice Set",
          question:
            "In the figure, lines j and k are parallel, and lines l and m are parallel. What is the value of x?",
          options: ["A) 25", "B) 35", "C) 45", "D) 55"],
          correctIndex: 1,
          correctAnswerText: "B) 35 (Grid-in: 35)",
          explanation: `Step-by-Step Breakdown:

Step 1: Trace parallel line relationships:
• Horizontal lines j ∥ k.
• Slanted lines l ∥ m.

Step 2: Relate given angles 60° and 85° at line m:
Along line m, the angle between line m and transversal line p is 60°.
At line k, the angle is 85°.
In the interior triangle formed by lines j, k, and transversal p:
The interior angle at line m and j is 60° (vertical / alternate interior).
The interior angle at line k is 180° - 85° = 95°.

Step 3: Solve for x at line l:
Since l ∥ m, corresponding angle at line l equals the third interior angle of the triangle:
Third interior angle = 180° - (60° + 85°) = 35°.
By corresponding / alternate interior angles across parallel lines l ∥ m:
x = 35.

Conclusion: The value of x is 35.`,
          diagram: {
            id: "ch17-q7-diag",
            title: "Question 7: Multiple Parallel Line Sets (j ∥ k, l ∥ m)",
            caption: "Note: Figure not drawn to scale.",
            xRange: [-1, 8],
            yRange: [-1, 6],
            hideAxes: true,
            hideGrid: true,
            textAnnotations: [
              { x: 2.1, y: 5.4, text: "p", fontSize: 12, fontWeight: "bold" },
              { x: 3.1, y: 5.4, text: "l", fontSize: 12, fontWeight: "bold" },
              { x: 5.6, y: 5.4, text: "m", fontSize: 12, fontWeight: "bold" },
              { x: 7.3, y: 4.0, text: "j", fontSize: 12, fontWeight: "bold" },
              { x: 7.3, y: 1.5, text: "k", fontSize: 12, fontWeight: "bold" },
              { x: 2.2, y: 3.5, text: "x°", fontSize: 11, fontWeight: "bold", color: "#2563eb", background: "#ffffff", border: "#e2e8f0" },
              { x: 5.1, y: 4.5, text: "60°", fontSize: 11, fontWeight: "bold", color: "#16a34a", background: "#ffffff", border: "#e2e8f0" },
              { x: 5.1, y: 1.0, text: "85°", fontSize: 11, fontWeight: "bold", color: "#16a34a", background: "#ffffff", border: "#e2e8f0" }
            ],
            curves: [
              { type: "line", points: [[0.5, 4.0], [7.0, 4.0]], color: "#0f172a", style: "solid" },
              { type: "line", points: [[0.5, 1.5], [7.0, 1.5]], color: "#0f172a", style: "solid" },
              { type: "line", points: [[1.5, 0.5], [3.0, 5.0]], color: "#2563eb", style: "solid" },
              { type: "line", points: [[4.0, 0.5], [5.5, 5.0]], color: "#2563eb", style: "solid" },
              { type: "line", points: [[1.0, 5.0], [5.5, 0.5]], color: "#dc2626", style: "solid" }
            ]
          }
        },
        {
          id: "ch17-q8",
          number: 8,
          exerciseNumber: 1,
          exerciseTitle: "Angles Practice Set",
          question:
            "In the figure, line r intersects lines l and m. Which of the following is sufficient to prove that lines l and m are parallel?",
          options: ["A) a = c", "B) a = d", "C) b = c", "D) b = d"],
          correctIndex: 1,
          correctAnswerText: "B) a = d",
          explanation: `Step-by-Step Breakdown:

Step 1: Review parallel line angle conditions:
To prove line l ∥ line m cut by transversal r, we need ONE of the following:
• Corresponding angles are equal (e.g. a = c or b = d).
• Alternate interior angles are equal.
• Alternate exterior angles are equal (e.g. a = d).
• Consecutive interior angles are supplementary (b + c = 180°).

Step 2: Evaluate options:
• Option A (a = c): a and c are consecutive exterior / corresponding angles (a and c are vertical/corresponding).
• Option B (a = d): Angle a (top-left exterior) and angle d (bottom-right exterior) are Alternate Exterior Angles! If alternate exterior angles are equal (a = d), then line l MUST be parallel to line m.

Conclusion: Option B (a = d) is sufficient to prove lines l and m are parallel.`,
          diagram: {
            id: "ch17-q8-diag",
            title: "Question 8: Parallel Lines Verification",
            caption: "Note: Figure not drawn to scale.",
            xRange: [-1, 6],
            yRange: [-1, 6],
            hideAxes: true,
            hideGrid: true,
            textAnnotations: [
              { x: 5.7, y: 4.2, text: "l", fontSize: 12, fontWeight: "bold" },
              { x: 5.7, y: 1.8, text: "m", fontSize: 12, fontWeight: "bold" },
              { x: 2.3, y: 0.3, text: "r", fontSize: 12, fontWeight: "bold" },
              { x: 3.2, y: 4.8, text: "a°", fontSize: 11, fontWeight: "bold", color: "#2563eb", background: "#ffffff", border: "#e2e8f0" },
              { x: 2.5, y: 3.6, text: "b°", fontSize: 11, fontWeight: "bold", color: "#2563eb", background: "#ffffff", border: "#e2e8f0" },
              { x: 2.2, y: 2.3, text: "c°", fontSize: 11, fontWeight: "bold", color: "#2563eb", background: "#ffffff", border: "#e2e8f0" },
              { x: 3.1, y: 1.2, text: "d°", fontSize: 11, fontWeight: "bold", color: "#2563eb", background: "#ffffff", border: "#e2e8f0" }
            ],
            curves: [
              { type: "line", points: [[0.5, 4.2], [5.3, 4.2]], color: "#0f172a", style: "solid" },
              { type: "line", points: [[0.5, 1.8], [5.3, 1.8]], color: "#0f172a", style: "solid" },
              { type: "line", points: [[3.2, 5.0], [2.2, 0.8]], color: "#2563eb", style: "solid" }
            ]
          }
        },
        {
          id: "ch17-q9",
          number: 9,
          exerciseNumber: 1,
          exerciseTitle: "Angles Practice Set",
          question:
            "In the figure shown, lines m and n are parallel, and line r intersects both lines. If a > 74, which of the following must be true?",
          options: ["A) b < 106", "B) b > 106", "C) b < 180 - a", "D) b > 74"],
          correctIndex: 0,
          correctAnswerText: "A) b < 106",
          explanation: `Step-by-Step Breakdown:

Step 1: Express relationship between a and b:
Since lines m ∥ n cut by transversal r, angle a° and angle b° are consecutive interior / same-side interior angles (or supplementary corresponding angles).
Therefore:
a + b = 180° ⟹ b = 180° - a.

Step 2: Apply given inequality a > 74:
Since a > 74, multiply by -1 (flipping inequality):
-a < -74.
Add 180 to both sides:
180 - a < 180 - 74
b < 106.

Conclusion: b < 106 must be true (Option A).`,
          diagram: {
            id: "ch17-q9-diag",
            title: "Question 9: Parallel Lines m ∥ n with Transversal r",
            caption: "Note: Figure not drawn to scale.",
            xRange: [-1, 6],
            yRange: [-1, 5],
            hideAxes: true,
            hideGrid: true,
            textAnnotations: [
              { x: 1.8, y: 4.3, text: "m", fontSize: 12, fontWeight: "bold" },
              { x: 3.8, y: 4.3, text: "n", fontSize: 12, fontWeight: "bold" },
              { x: 5.7, y: 2.0, text: "r", fontSize: 12, fontWeight: "bold" },
              { x: 1.8, y: 1.5, text: "b°", fontSize: 11, fontWeight: "bold", color: "#2563eb", background: "#ffffff", border: "#e2e8f0" },
              { x: 3.9, y: 2.5, text: "a°", fontSize: 11, fontWeight: "bold", color: "#2563eb", background: "#ffffff", border: "#e2e8f0" }
            ],
            curves: [
              { type: "line", points: [[0.5, 2.0], [5.3, 2.0]], color: "#0f172a", style: "solid" },
              { type: "line", points: [[1.2, 0.5], [2.2, 4.0]], color: "#2563eb", style: "solid" },
              { type: "line", points: [[3.2, 0.5], [4.2, 4.0]], color: "#2563eb", style: "solid" }
            ]
          }
        },
        {
          id: "ch17-q10",
          number: 10,
          exerciseNumber: 1,
          exerciseTitle: "Angles Practice Set",
          question:
            "In the figure, lines l and m are parallel. If b = 9k + 15 and c = 16k - 76, what is the value of a?",
          options: ["A) 36", "B) 42", "C) 48", "D) 54"],
          correctIndex: 2,
          correctAnswerText: "C) 48 (Grid-in: 48)",
          explanation: `Step-by-Step Breakdown:

Step 1: Solve for k using Vertical Angles:
Angles b° and c° are opposite vertical angles formed by the intersection of line m and the transversal.
Vertical angles are congruent:
b = c
9k + 15 = 16k - 76
15 + 76 = 16k - 9k
91 = 7k
k = 13.

Step 2: Find the measure of angle b:
b = 9(13) + 15 = 117 + 15 = 132°.

Step 3: Relate angle b to angle a:
Since line l ∥ line m, angle a° and angle b° are consecutive interior / same-side interior angles.
Therefore, a and b are supplementary:
a + b = 180°
a + 132° = 180°
a = 48.

Conclusion: The value of a is 48.`,
          diagram: {
            id: "ch17-q10-diag",
            title: "Question 10: Parallel Lines l ∥ m with Vertical & Consecutive Angles",
            caption: "Note: Figure not drawn to scale.",
            xRange: [-1, 6],
            yRange: [-1, 5],
            hideAxes: true,
            hideGrid: true,
            textAnnotations: [
              { x: 5.7, y: 3.8, text: "l", fontSize: 12, fontWeight: "bold" },
              { x: 5.7, y: 1.5, text: "m", fontSize: 12, fontWeight: "bold" },
              { x: 2.0, y: 3.3, text: "a°", fontSize: 11, fontWeight: "bold", color: "#2563eb", background: "#ffffff", border: "#e2e8f0" },
              { x: 3.2, y: 2.0, text: "b°", fontSize: 11, fontWeight: "bold", color: "#2563eb", background: "#ffffff", border: "#e2e8f0" },
              { x: 2.6, y: 1.0, text: "c°", fontSize: 11, fontWeight: "bold", color: "#2563eb", background: "#ffffff", border: "#e2e8f0" }
            ],
            curves: [
              { type: "line", points: [[0.5, 3.8], [5.3, 3.8]], color: "#0f172a", style: "solid" },
              { type: "line", points: [[0.5, 1.5], [5.3, 1.5]], color: "#0f172a", style: "solid" },
              { type: "line", points: [[1.5, 4.5], [3.5, 0.5]], color: "#2563eb", style: "solid" }
            ]
          }
        },
        {
          id: "ch17-q11",
          number: 11,
          exerciseNumber: 1,
          exerciseTitle: "Angles Practice Set",
          question:
            "In the figure, lines l, m, and n are parallel. What is the value of a + b?",
          options: ["A) 80", "B) 100", "C) 120", "D) 140"],
          correctIndex: 1,
          correctAnswerText: "B) 100 (Grid-in: 100)",
          explanation: `Step-by-Step Breakdown:

Step 1: Use alternate interior angles across parallel lines l ∥ m ∥ n:
• Transversal 1 crosses lines l, m, n:
  Top angle is 40° at line l.
  By alternate interior angles on line n: angle a° = 40°.

• Transversal 2 crosses lines l, m, n:
  Middle angle is 60° at line m.
  By alternate interior angles on line n: angle b° = 60°.

Step 2: Calculate a + b:
a = 40°
b = 60°
a + b = 40 + 60 = 100.

Conclusion: The value of a + b is 100.`,
          diagram: {
            id: "ch17-q11-diag",
            title: "Question 11: Three Parallel Lines l ∥ m ∥ n with Two Transversals",
            caption: "Note: Figure not drawn to scale.",
            xRange: [-1, 7],
            yRange: [-1, 6],
            hideAxes: true,
            hideGrid: true,
            textAnnotations: [
              { x: 6.5, y: 4.8, text: "l", fontSize: 12, fontWeight: "bold" },
              { x: 6.5, y: 2.85, text: "m", fontSize: 12, fontWeight: "bold" },
              { x: 6.5, y: 0.9, text: "n", fontSize: 12, fontWeight: "bold" },
              { x: 2.2, y: 4.4, text: "40°", fontSize: 11, fontWeight: "bold", color: "#16a34a", background: "#ffffff", border: "#e2e8f0" },
              { x: 3.25, y: 2.3, text: "60°", fontSize: 11, fontWeight: "bold", color: "#16a34a", background: "#ffffff", border: "#e2e8f0" },
              { x: 2.2, y: 1.3, text: "a°", fontSize: 11, fontWeight: "bold", color: "#2563eb", background: "#ffffff", border: "#e2e8f0" },
              { x: 4.3, y: 1.3, text: "b°", fontSize: 11, fontWeight: "bold", color: "#2563eb", background: "#ffffff", border: "#e2e8f0" }
            ],
            curves: [
              { type: "line", points: [[0.5, 4.8], [6.0, 4.8]], color: "#0f172a", style: "solid" },
              { type: "line", points: [[0.5, 2.85], [6.0, 2.85]], color: "#0f172a", style: "solid" },
              { type: "line", points: [[0.5, 0.9], [6.0, 0.9]], color: "#0f172a", style: "solid" },
              { type: "line", points: [[1.5, 5.2], [5.0, 0.5]], color: "#2563eb", style: "solid" },
              { type: "line", points: [[5.0, 5.2], [1.5, 0.5]], color: "#dc2626", style: "solid" }
            ]
          }
        },
        {
          id: "ch17-q12",
          number: 12,
          exerciseNumber: 1,
          exerciseTitle: "Angles Practice Set",
          question: `In the figure, lines l and m are parallel. What is the value of x?`,
          options: ["A) 85", "B) 90", "C) 95", "D) 105"],
          correctIndex: 2,
          correctAnswerText: "C) 95 (Grid-in: 95)",
          explanation: `Step-by-Step Breakdown:

Method 1 (Exterior Angle Shortcut):
1. By alternate interior angles across parallel lines l and m, the transversal s creates an alternate interior angle of 35° in the upper triangle adjacent to line l.
2. In this upper triangle, the angle x° is an exterior angle to the two remote interior angles (60° and 35°).
3. By the Exterior Angle Theorem:
   x = 60° + 35° = 95.

Method 2 (Auxiliary Parallel Line):
1. Draw an auxiliary horizontal line parallel to l and m passing through the vertex x°.
2. This line splits angle x into two parts:
   • Upper part = 60° (alternate interior to 60° at line l)
   • Lower part = 35° (alternate interior to 35° at line m)
3. Total angle x = 60° + 35° = 95.

Conclusion: The value of x is 95.`,
          diagram: {
            id: "ch17-q12-diag",
            title: "Question 12: Intersecting Transversals Between Parallel Lines",
            caption: "Note: Figure not drawn to scale.",
            xRange: [-1, 7],
            yRange: [-1, 6],
            hideAxes: true,
            hideGrid: true,
            textAnnotations: [
              { x: 6.5, y: 4.5, text: "l", fontSize: 12, fontWeight: "bold" },
              { x: 6.5, y: 1.0, text: "m", fontSize: 12, fontWeight: "bold" },
              { x: 2.0, y: 4.1, text: "60°", fontSize: 11, fontWeight: "bold", color: "#16a34a", background: "#ffffff", border: "#e2e8f0" },
              { x: 4.3, y: 1.4, text: "35°", fontSize: 11, fontWeight: "bold", color: "#16a34a", background: "#ffffff", border: "#e2e8f0" },
              { x: 3.5, y: 2.2, text: "x°", fontSize: 12, fontWeight: "bold", color: "#2563eb", background: "#ffffff", border: "#e2e8f0" }
            ],
            curves: [
              { type: "line", points: [[0.5, 4.5], [6.0, 4.5]], color: "#0f172a", style: "solid" },
              { type: "line", points: [[0.5, 1.0], [6.0, 1.0]], color: "#0f172a", style: "solid" },
              { type: "line", points: [[1.5, 4.5], [3.5, 2.75], [5.0, 1.0]], color: "#2563eb", style: "solid" },
              { type: "line", points: [[5.0, 4.5], [3.5, 2.75], [2.0, 1.0]], color: "#dc2626", style: "solid" }
            ]
          }
        },
        {
          id: "ch17-q13",
          number: 13,
          exerciseNumber: 1,
          exerciseTitle: "Angles Practice Set",
          question:
            "In the figure, line u intersects parallel lines k and j and parallel lines s and t. If a = 118 and b = 52, what is the value of c?",
          options: ["A) 52", "B) 62", "C) 66", "D) 118"],
          correctIndex: 2,
          correctAnswerText: "C) 66 (Grid-in: 66)",
          explanation: `Step-by-Step Breakdown:

Step 1: Relate a° and b° in the interior triangle formed by lines u, k, and s:
Parallel lines s ∥ t cut by transversal line u.
Angle a = 118° (obtuse angle on line j).
Corresponding / alternate interior angle at line k on line s = 180° - 118° = 62°.

Step 2: In the triangle bounded by lines k, s, and u:
The three interior angles sum to 180°.
Interior angle at line s = 62°.
Given b = 52° (interior angle at line t/k).
Third interior angle at line u = 180° - (62° + 52°) = 180° - 114° = 66°.

Step 3: Relate third interior angle to c°:
Angle c° is alternate interior / corresponding to the third angle:
c = 66.

Conclusion: The value of c is 66.`,
          diagram: {
            id: "ch17-q13-diag",
            title: "Question 13: Multiple Intersecting Parallel Lines",
            caption: "Note: Figure not drawn to scale.",
            xRange: [-1, 8],
            yRange: [-1, 6],
            hideAxes: true,
            hideGrid: true,
            textAnnotations: [
              { x: 2.2, y: 5.1, text: "s", fontSize: 12, fontWeight: "bold" },
              { x: 4.2, y: 5.1, text: "t", fontSize: 12, fontWeight: "bold" },
              { x: 3.2, y: 5.1, text: "u", fontSize: 12, fontWeight: "bold" },
              { x: 6.8, y: 3.8, text: "k", fontSize: 12, fontWeight: "bold" },
              { x: 6.8, y: 1.3, text: "j", fontSize: 12, fontWeight: "bold" },
              { x: 1.1, y: 1.0, text: "a°", fontSize: 11, fontWeight: "bold", color: "#2563eb", background: "#ffffff", border: "#e2e8f0" },
              { x: 3.8, y: 4.1, text: "b°", fontSize: 11, fontWeight: "bold", color: "#2563eb", background: "#ffffff", border: "#e2e8f0" },
              { x: 4.2, y: 3.5, text: "c°", fontSize: 11, fontWeight: "bold", color: "#2563eb", background: "#ffffff", border: "#e2e8f0" }
            ],
            curves: [
              { type: "line", points: [[0.5, 3.8], [6.5, 3.8]], color: "#0f172a", style: "solid" },
              { type: "line", points: [[0.5, 1.3], [6.5, 1.3]], color: "#0f172a", style: "solid" },
              { type: "line", points: [[0.8, 0.5], [2.2, 4.8]], color: "#2563eb", style: "solid" },
              { type: "line", points: [[2.8, 0.5], [4.2, 4.8]], color: "#2563eb", style: "solid" },
              { type: "line", points: [[5.5, 0.5], [3.2, 4.8]], color: "#dc2626", style: "solid" }
            ]
          }
        },
        {
          id: "ch17-q14",
          number: 14,
          exerciseNumber: 1,
          exerciseTitle: "Angles Practice Set",
          question:
            "In the figure, point D lies on AB, and point E lies on BC. What is the value of a + b?",
          options: ["A) 80", "B) 100", "C) 110", "D) 120"],
          correctIndex: 1,
          correctAnswerText: "B) 100 (Grid-in: 100)",
          explanation: `Step-by-Step Breakdown:

Step 1: Find angle B in small triangle BDE:
In △BDE, interior angles sum to 180°:
∠B + ∠BDE + ∠BED = 180°
∠B + 70° + 30° = 180°
∠B + 100° = 180° ⟹ ∠B = 80°.

Step 2: Calculate a + b in large triangle ABC:
In △ABC, interior angles are a°, b°, and ∠B (80°):
a + b + ∠B = 180°
a + b + 80° = 180°
a + b = 100°.

Conclusion: The value of a + b is 100.`,
          diagram: {
            id: "ch17-q14-diag",
            title: "Question 14: Triangle with Internal Segment DE",
            caption: "Note: Figure not drawn to scale.",
            xRange: [-1, 7],
            yRange: [-1, 6],
            hideAxes: true,
            hideGrid: true,
            textAnnotations: [
              { x: 0.2, y: 0.3, text: "A", fontSize: 11, fontWeight: "bold" },
              { x: 3.0, y: 5.3, text: "B", fontSize: 11, fontWeight: "bold" },
              { x: 6.3, y: 0.3, text: "C", fontSize: 11, fontWeight: "bold" },
              { x: 1.2, y: 2.9, text: "D", fontSize: 11, fontWeight: "bold" },
              { x: 4.8, y: 2.9, text: "E", fontSize: 11, fontWeight: "bold" },
              { x: 0.8, y: 0.8, text: "a°", fontSize: 11, fontWeight: "bold", color: "#2563eb", background: "#ffffff", border: "#e2e8f0" },
              { x: 5.7, y: 0.8, text: "b°", fontSize: 11, fontWeight: "bold", color: "#2563eb", background: "#ffffff", border: "#e2e8f0" },
              { x: 2.1, y: 2.8, text: "70°", fontSize: 10, fontWeight: "bold", color: "#16a34a", background: "#ffffff", border: "#e2e8f0" },
              { x: 3.9, y: 2.8, text: "30°", fontSize: 10, fontWeight: "bold", color: "#16a34a", background: "#ffffff", border: "#e2e8f0" }
            ],
            curves: [
              { type: "line", points: [[0.5, 0.5], [3.0, 5.0], [6.0, 0.5], [0.5, 0.5]], color: "#0f172a", style: "solid" },
              { type: "line", points: [[1.5, 2.5], [4.5, 2.5]], color: "#2563eb", style: "solid" }
            ]
          }
        },
        {
          id: "ch17-q15",
          number: 15,
          exerciseNumber: 1,
          exerciseTitle: "Angles Practice Set",
          question:
            "In the figure shown, point B lies on line segment DF, point E lies on line segment AC, line segments AB and DE intersect at point W, and line segments BC and EF intersect at point X. The measure of ∠A is 40°, the measure of ∠C is 60°, the measure of ∠D is 68°, and the measure of ∠FBC is 72°. What is the measure, in degrees, of ∠AED?",
          options: ["A) 40", "B) 52", "C) 60", "D) 68"],
          correctIndex: 1,
          correctAnswerText: "B) 52 (Grid-in: 52)",
          explanation: `Step-by-Step Breakdown:

Step 1: Angle chasing around line DF:
Point B lies on line segment DF.
Angles around B along line DF form a straight angle (180°).
Given ∠FBC = 72°.
∠ABC is an interior angle of △ABC.
In △ABC, ∠A = 40°, ∠C = 60°.
∠ABC = 180° - (40° + 60°) = 80°.
Since B lies on line DF, ∠DBA + ∠ABC + ∠FBC = 180°:
∠DBA + 80° + 72° = 180°
∠DBA + 152° = 180° ⟹ ∠DBA = 28°.

Step 2: Solve for ∠AED in △DBE / △AWD:
In △ABD, ∠D = 68° and ∠DBA = 28°.
Exterior angle at vertex E (∠AED):
In △DWE / △DBE, angle sum yields:
∠AED = 180° - (68° + 60°) = 52°.

Conclusion: The measure of ∠AED is 52.`,
          diagram: {
            id: "ch17-q15-diag",
            title: "Question 15: Overlapping Intersecting Triangles",
            caption: "Note: Figure not drawn to scale.",
            xRange: [-1, 8],
            yRange: [-1, 6],
            hideAxes: true,
            hideGrid: true,
            textAnnotations: [
              { x: 0.5, y: 0.2, text: "A", fontSize: 11, fontWeight: "bold" },
              { x: 4.5, y: 5.3, text: "B", fontSize: 11, fontWeight: "bold" },
              { x: 6.8, y: 0.2, text: "C", fontSize: 11, fontWeight: "bold" },
              { x: 0.8, y: 4.3, text: "D", fontSize: 11, fontWeight: "bold" },
              { x: 3.8, y: 0.2, text: "E", fontSize: 11, fontWeight: "bold" },
              { x: 7.2, y: 4.3, text: "F", fontSize: 11, fontWeight: "bold" },
              { x: 2.1, y: 2.4, text: "W", fontSize: 11, fontWeight: "bold" },
              { x: 5.6, y: 2.4, text: "X", fontSize: 11, fontWeight: "bold" }
            ],
            curves: [
              { type: "line", points: [[0.8, 0.5], [6.5, 0.5]], color: "#0f172a", style: "solid" },
              { type: "line", points: [[1.2, 4.0], [6.8, 4.0]], color: "#0f172a", style: "solid" },
              { type: "line", points: [[0.8, 0.5], [4.5, 5.0]], color: "#2563eb", style: "solid" },
              { type: "line", points: [[4.5, 5.0], [6.8, 0.5]], color: "#2563eb", style: "solid" },
              { type: "line", points: [[1.2, 4.0], [3.8, 0.5]], color: "#dc2626", style: "solid" },
              { type: "line", points: [[3.8, 0.5], [6.8, 4.0]], color: "#dc2626", style: "solid" }
            ]
          }
        },
        {
          id: "ch17-q16",
          number: 16,
          exerciseNumber: 1,
          exerciseTitle: "Angles Practice Set",
          question:
            "In the figure, two triangles share a common side. What is the value of x + y?",
          options: ["A) 10", "B) 20", "C) 30", "D) 50"],
          correctIndex: 2,
          correctAnswerText: "C) 30 (Grid-in: 30)",
          explanation: `Step-by-Step Breakdown:

Step 1: Set up angle sums for the two triangles sharing a common side:
Let the central vertex angle be 100°, and the top vertex angle be 70°.
In the top big triangle, the top angle is 70°.
In the inner triangle, the central angle is 100°.

Step 2: Relate exterior/interior angles:
The difference between the central angle (100°) and top angle (70°) equals the sum of bottom angles x° + y°:
100° - 70° = 30°.
Therefore:
x + y = 30.

Conclusion: The value of x + y is 30.`,
          diagram: {
            id: "ch17-q16-diag",
            title: "Question 16: Shared Base Double Triangles",
            caption: "Note: Figure not drawn to scale.",
            xRange: [-1, 7],
            yRange: [-1, 6],
            hideAxes: true,
            hideGrid: true,
            textAnnotations: [
              { x: 3.0, y: 5.3, text: "70°", fontSize: 11, fontWeight: "bold", color: "#16a34a", background: "#ffffff", border: "#e2e8f0" },
              { x: 3.0, y: 2.3, text: "100°", fontSize: 11, fontWeight: "bold", color: "#16a34a", background: "#ffffff", border: "#e2e8f0" },
              { x: 1.0, y: 0.8, text: "x°", fontSize: 11, fontWeight: "bold", color: "#2563eb", background: "#ffffff", border: "#e2e8f0" },
              { x: 5.0, y: 0.8, text: "y°", fontSize: 11, fontWeight: "bold", color: "#2563eb", background: "#ffffff", border: "#e2e8f0" }
            ],
            curves: [
              { type: "line", points: [[0.5, 0.5], [3.0, 5.0], [5.5, 0.5], [0.5, 0.5]], color: "#0f172a", style: "solid" },
              { type: "line", points: [[0.5, 0.5], [3.0, 1.8], [5.5, 0.5]], color: "#2563eb", style: "solid" }
            ]
          }
        }
      ]
    }
  ]
};
'''

with open('src/data/satMathChapter17Full.ts', 'w', encoding='utf-8') as f:
    f.write(new_code)

print("Rebuilt satMathChapter17Full.ts with white background badges on all annotations!")
