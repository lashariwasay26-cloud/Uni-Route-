import { FullSatMathChapter, MathTheorySection, MathWorkedExample } from './satMathConcepts';
import { CHAPTER_7_QUESTIONS } from './satMathChapter7Questions';
import { CHAPTER_7_QUESTIONS_PART1 } from './satMathChapter7QuestionsPart1';
import { CHAPTER_7_QUESTIONS_PART2 } from './satMathChapter7QuestionsPart2';
import { CHAPTER_7_QUESTIONS_PART3 } from './satMathChapter7QuestionsPart3';
import { CHAPTER_7_QUESTIONS_PART4 } from './satMathChapter7QuestionsPart4';

const WORKED_EXAMPLES_SECTION_1: MathWorkedExample[] = [
  {
    title: 'Worked Example 1: Parallel Lines with Consecutive Interior Angles',
    question: 'In the figure below, lines L1 and L2 are parallel. If the measure of angle 1 is (4x + 10)° and the measure of angle 2 is (2x + 20)°, and they are consecutive interior angles (same-side interior), what is the value of x?',
    options: ['15', '25', '30', '50'],
    correctAnswer: '25',
    correctIndex: 1,
    explanation: `Step-by-Step Geometric Explanation:

**Method 1: Direct Consecutive Interior Angles**
1. **Identify the relationship:** Consecutive interior angles (also known as same-side interior angles) are located between the parallel lines and on the same side of the transversal line.
2. **Set up the equation:** On parallel lines, consecutive interior angles are **supplementary** (they add up to 180°):
   $$(4x + 10) + (2x + 20) = 180$$
3. **Solve for x:**
   - Combine like terms: $$6x + 30 = 180$$
   - Subtract 30: $$6x = 150$$
   - Divide by 6: $$x = 25$$

---

**Method 2: Using Alternate Interior Angles (Linear Pair)**
1. **Identify the alternate interior angle:** The alternate interior angle to $\\angle 2$ is located on the opposite (alternate) side of the transversal line, inside the parallel lines. In our figure, this is the green angle labeled **Alt $\\angle 2$** at the intersection on line $L2$.
2. **Apply angle equality:** Since alternate interior angles are equal, the green angle also measures exactly $$(2x + 20)^\\circ$$.
3. **Form a linear pair:** Notice that $\\angle 1$ and the green **Alt $\\angle 2$** sit side-by-side on the straight line $L2$, forming a straight-angle **linear pair** (which must sum to 180°):
   $$(4x + 10) + (2x + 20) = 180$$
   $$6x + 30 = 180 \\implies 6x = 150 \\implies x = 25$$.

**Verification:**
- $\\angle 1 = 4(25) + 10 = 110^\\circ$ (an obtuse angle)
- $\\angle 2 = 2(25) + 20 = 70^\\circ$ (an acute angle)
- Sum = $$110^\\circ + 70^\\circ = 180^\\circ$$. This matches perfectly!`,
    diagram: {
      title: 'Consecutive & Alternate Interior Angles (L1 || L2)',
      hideAxes: true,
      hideGrid: true,
      hideTicks: true,
      xRange: [0, 10],
      yRange: [0, 8],
      width: 550,
      height: 420,
      textAnnotations: [
        { x: 1.5, y: 5.3, text: 'L1', color: '#475569' },
        { x: 1.5, y: 2.3, text: 'L2', color: '#475569' },
        { x: 2.4, y: 3.2, text: '∠1: (4x+10)°', color: '#ef4444' },
        { x: 5.0, y: 4.2, text: '∠2: (2x+20)°', color: '#3b82f6' },
        { x: 5.8, y: 2.8, text: 'Alt ∠2: (2x+20)°', color: '#16a34a' }
      ],
      curves: [
        { type: 'line', color: '#0f172a', points: [[1, 5], [9, 5]] }, // Note: points will be normalized automatically
        { type: 'line', color: '#0f172a', points: [[1, 2], [9, 2]] },
        { type: 'line', color: '#ea580c', points: [[3, 0.8], [7, 5.6]] }
      ],
      angleArcs: [
        { center: [4, 2], radius: 0.9, startAngle: 50, endAngle: 180, label: '1', color: '#ef4444' },
        { center: [6.5, 5], radius: 0.9, startAngle: 180, endAngle: 230, label: '2', color: '#3b82f6' },
        { center: [4, 2], radius: 0.9, startAngle: 0, endAngle: 50, label: 'Alt 2', color: '#16a34a' }
      ]
    }
  },
  {
    title: 'Worked Example 2: Vertical and Supplementary Angles',
    question: 'Two intersecting lines form vertical angles. If one of the angles is (3x + 15)° and the adjacent angle on a straight line is (5x + 5)°, what is the value of x?',
    options: ['15', '20', '25', '30'],
    correctAnswer: '20',
    correctIndex: 1,
    explanation: `Step-by-Step Geometric Explanation:
1. Identify the relationship: Adjacent angles on intersecting lines form a linear pair and are supplementary, meaning their sum is 180°.
2. Set up the equation:
   $$(3x + 15) + (5x + 5) = 180$$
3. Combine like terms:
   $$8x + 20 = 180$$
4. Subtract 20 from both sides:
   $$8x = 160$$
5. Divide by 8:
   $$x = 20$$.`,
    diagram: {
      title: 'Linear Pair Layout',
      hideAxes: true,
      hideGrid: true,
      hideTicks: true,
      xRange: [0, 10],
      yRange: [0, 8],
      textAnnotations: [
        { x: 6.8, y: 4.6, text: '(3x + 15)°', color: '#3b82f6' },
        { x: 3.1, y: 4.6, text: '(5x + 5)°', color: '#ea580c' }
      ],
      curves: [
        { type: 'line', color: '#475569', points: [[1, 4], [9, 4]] },
        { type: 'line', color: '#ea580c', points: [[2, 1], [8, 7]] }
      ],
      angleArcs: [
        { center: [5, 4], radius: 1.0, startAngle: 0, endAngle: 45, label: 'A', color: '#3b82f6' },
        { center: [5, 4], radius: 1.0, startAngle: 45, endAngle: 180, label: 'B', color: '#ea580c' }
      ]
    }
  },
  {
    title: 'Worked Example 3: Sum of Interior Angles in a Hexagon',
    question: 'A hexagon has five interior angles measuring 125°, 115°, 130°, 110°, and 120°. What is the measure of the sixth interior angle?',
    options: ['110°', '120°', '130°', '140°'],
    correctAnswer: '120°',
    correctIndex: 1,
    explanation: `Step-by-Step Geometric Explanation:
1. Find the sum of the interior angles of a hexagon ($n = 6$):
   $$\\text{Sum} = (6 - 2) \\times 180° = 4 \\times 180° = 720°$$
2. Sum the five given angles:
   $$125° + 115° + 130° + 110° + 120° = 600°$$
3. Subtract this sum from 720° to find the missing angle:
   $$\\text{Sixth Angle} = 720° - 600° = 120°$$.`,
    diagram: {
      title: 'Hexagon Angles Layout',
      hideAxes: true,
      hideGrid: true,
      hideTicks: true,
      xRange: [0, 10],
      yRange: [0, 8],
      textAnnotations: [
        { x: 5, y: 4, text: 'Interior Sum = ?', color: '#3b82f6' },
        { x: 7.2, y: 4.0, text: 'x = ?', color: '#ef4444', fontWeight: 'bold' },
        { x: 6.2, y: 5.9, text: '125°', color: '#475569' },
        { x: 3.8, y: 5.9, text: '115°', color: '#475569' },
        { x: 2.8, y: 4.0, text: '130°', color: '#475569' },
        { x: 3.8, y: 2.1, text: '110°', color: '#475569' },
        { x: 6.2, y: 2.1, text: '120°', color: '#475569' }
      ],
      curves: [
        { type: 'line', color: '#3b82f6', points: [[7.8, 4], [6.4, 6.42], [3.6, 6.42], [2.2, 4], [3.6, 1.58], [6.4, 1.58], [7.8, 4]] }
      ]
    }
  },
  {
    title: 'Worked Example 4: Exterior Angles of a Triangle',
    question: 'An exterior angle of a triangle measures 115°. If one of the remote interior angles is 45°, what is the measure of the other remote interior angle?',
    options: ['60°', '70°', '80°', '90°'],
    correctAnswer: '70°',
    correctIndex: 1,
    explanation: `Step-by-Step Geometric Explanation:
1. Recall the Exterior Angle Theorem: The exterior angle of a triangle is equal to the sum of its two remote interior angles.
2. Let $x$ be the missing remote interior angle:
   $$x + 45° = 115°$$
3. Subtract 45° from both sides:
   $$x = 70°$$.`,
    diagram: {
      title: 'Exterior Angle Diagram',
      hideAxes: true,
      hideGrid: true,
      hideTicks: true,
      xRange: [0, 10],
      yRange: [0, 8],
      textAnnotations: [
        { x: 4.73, y: 5.2, text: 'x = ?', color: '#3b82f6', fontWeight: 'bold' }
      ],
      curves: [
        { type: 'line', color: '#3b82f6', points: [[2, 2], [4.73, 4.73], [6, 2], [2, 2]] },
        { type: 'line', color: '#64748b', style: 'dashed', points: [[6, 2], [8, 2]] }
      ],
      angleArcs: [
        { center: [2, 2], radius: 0.9, startAngle: 0, endAngle: 45, label: '45°', color: '#475569' },
        { center: [6, 2], radius: 0.9, startAngle: 0, endAngle: 115, label: '115°', color: '#ea580c' }
      ]
    }
  },
  {
    title: 'Worked Example 5: Parallel Lines with Alternate Exterior Angles',
    question: 'Lines L1 and L2 are parallel. If two alternate exterior angles are (2x + 30)° and 110°, what is the value of x?',
    options: ['30', '40', '50', '60'],
    correctAnswer: '40',
    correctIndex: 1,
    explanation: `Step-by-Step Geometric Explanation:
1. Recall that alternate exterior angles are equal when lines are parallel.
2. Set up the equation:
   $$2x + 30 = 110$$
3. Subtract 30 from both sides:
   $$2x = 80$$
4. Divide by 2:
   $$x = 40$$.`,
    diagram: {
      title: 'Alternate Exterior Angles',
      hideAxes: true,
      hideGrid: true,
      hideTicks: true,
      xRange: [0, 10],
      yRange: [0, 8],
      textAnnotations: [
        { x: 1.5, y: 5.3, text: 'L1', color: '#475569' },
        { x: 1.5, y: 2.3, text: 'L2', color: '#475569' }
      ],
      curves: [
        { type: 'line', color: '#0f172a', points: [[1, 5], [9, 5]] },
        { type: 'line', color: '#0f172a', points: [[1, 2], [9, 2]] },
        { type: 'line', color: '#ea580c', points: [[3, 0.8], [7, 5.6]] }
      ],
      angleArcs: [
        { center: [6.5, 5], radius: 0.8, startAngle: 50, endAngle: 180, label: '110°', color: '#475569' },
        { center: [4, 2], radius: 0.8, startAngle: 230, endAngle: 360, label: '(2x+30)°', color: '#3b82f6' }
      ]
    }
  },
  {
    title: 'Worked Example 6: Regular Octagon Interior Angle',
    question: 'What is the measure of each interior angle of a regular octagon (8-sided polygon)?',
    options: ['120°', '135°', '140°', '150°'],
    correctAnswer: '135°',
    correctIndex: 1,
    explanation: `Step-by-Step Geometric Explanation:
1. Recall the formula for each interior angle of a regular polygon:
   $$\\text{Angle} = \\frac{(n - 2) \\times 180°}{n}$$
2. Substitute $n = 8$:
   $$\\text{Angle} = \\frac{(8 - 2) \\times 180°}{8} = \\frac{6 \\times 180°}{8} = \\frac{1080°}{8} = 135°$$.`,
    diagram: {
      title: 'Regular Octagon Layout',
      hideAxes: true,
      hideGrid: true,
      hideTicks: true,
      xRange: [0, 10],
      yRange: [0, 8],
      textAnnotations: [
        { x: 5, y: 4, text: 'Each Angle = ?', color: '#3b82f6' },
        { x: 5, y: 6.3, text: 'x = ?', color: '#ef4444', fontWeight: 'bold' }
      ],
      curves: [
        { type: 'line', color: '#3b82f6', points: [[7.8, 4], [6.98, 5.98], [5, 6.8], [3.02, 5.98], [2.2, 4], [3.02, 2.02], [5, 1.2], [6.98, 2.02], [7.8, 4]] }
      ]
    }
  }
];

const WORKED_EXAMPLES_SECTION_2: MathWorkedExample[] = [
  {
    title: 'Worked Example 7: Calculating Trigonometric Side Ratios',
    question: 'In a right-angled triangle ABC, where the right angle is at B, the length of leg AB is 8 and leg BC is 15. What is the value of cos(A)?',
    options: ['8/17', '15/17', '8/15', '15/8'],
    correctAnswer: '8/17',
    correctIndex: 0,
    explanation: `Step-by-Step Trigonometric Walkthrough:
1. Determine the hypotenuse AC using the Pythagorean Theorem:
   $$\\text{AC}^2 = \\text{AB}^2 + \\text{BC}^2$$
   $$\\text{AC}^2 = 8^2 + 15^2 = 64 + 225 = 289$$
   $$\\text{AC} = \\sqrt{289} = 17$$
2. Recall the definition of Cosine:
   $$\\cos(A) = \\frac{\\text{Adjacent side to A}}{\\text{Hypotenuse}}$$
3. Identify the side adjacent to angle A:
   - Adjacent side = AB = 8
   - Hypotenuse = AC = 17
4. Therefore:
   $$\\cos(A) = \\frac{8}{17}$$.`,
    diagram: {
      title: 'Right Triangle ABC (8-15-17 Triple)',
      hideAxes: true,
      hideGrid: true,
      hideTicks: true,
      xRange: [0, 10],
      yRange: [0, 8],
      textAnnotations: [
        { x: 2.0, y: 6.3, text: 'A', color: '#475569' },
        { x: 2.0, y: 1.6, text: 'B', color: '#475569' },
        { x: 8.0, y: 1.6, text: 'C', color: '#475569' },
        { x: 1.4, y: 4.0, text: '8', color: '#475569' },
        { x: 5.0, y: 2.2, text: '15', color: '#475569' },
        { x: 5.4, y: 4.3, text: '17', color: '#ef4444' }
      ],
      curves: [
        { type: 'line', color: '#0f172a', points: [[2, 6], [2, 1.8], [7.8, 1.8], [2, 6]] },
        { type: 'line', color: '#0f172a', points: [[2, 2.2], [2.4, 2.2], [2.4, 1.8]] }
      ]
    }
  },
  {
    title: 'Worked Example 8: Similar Triangles Scale Factor',
    question: 'In the figure below, triangle ADE is similar to triangle ABC, where DE || BC. If AD = 4, DB = 8, and DE = 5, what is the length of BC?',
    options: ['10', '12', '15', '20'],
    correctAnswer: '15',
    correctIndex: 2,
    explanation: `Step-by-Step Geometric Explanation:
1. Identify corresponding sides:
   $$\\frac{\\text{AD}}{\\text{AB}} = \\frac{\\text{DE}}{\\text{BC}}$$
2. Since $AB = AD + DB = 4 + 8 = 12$, plug in the values:
   $$\\frac{4}{12} = \\frac{5}{\\text{BC}}$$
3. Simplify the ratio:
   $$\\frac{1}{3} = \\frac{5}{\\text{BC}} \\implies \\text{BC} = 15$$.`,
    diagram: {
      title: 'Similar Triangles ADE & ABC',
      hideAxes: true,
      hideGrid: true,
      hideTicks: true,
      xRange: [0, 10],
      yRange: [0, 8],
      textAnnotations: [
        { x: 5, y: 6.8, text: 'A', color: '#475569' },
        { x: 3.1, y: 4.1, text: 'D', color: '#475569' },
        { x: 6.9, y: 4.1, text: 'E', color: '#475569' },
        { x: 1.1, y: 1.6, text: 'B', color: '#475569' },
        { x: 8.9, y: 1.6, text: 'C', color: '#475569' }
      ],
      curves: [
        { type: 'line', color: '#0f172a', points: [[5, 6.5], [1.5, 1.8], [8.5, 1.8], [5, 6.5]] },
        { type: 'line', color: '#ea580c', points: [[3.27, 4.16], [6.73, 4.16]] }
      ]
    }
  },
  {
    title: 'Worked Example 9: Special Right Triangles (30-60-90)',
    question: 'A 30°-60°-90° right triangle has a hypotenuse of length 12. What is the length of the side opposite the 60° angle?',
    options: ['6', '6√2', '6√3', '12√3'],
    correctAnswer: '6√3',
    correctIndex: 2,
    explanation: `Step-by-Step Geometric Explanation:
1. In a $30°-60°-90°$ triangle, the side ratios are $x : x\\sqrt{3} : 2x$.
2. The hypotenuse is $2x = 12$, which means the shortest leg (opposite the 30° angle) is $x = 6$.
3. The longer leg (opposite the 60° angle) is $x\\sqrt{3} = 6\\sqrt{3}$.`,
    diagram: {
      title: 'Special 30°-60°-90° Right Triangle: Hypotenuse = 12',
      hideAxes: true,
      hideGrid: true,
      hideTicks: true,
      xRange: [0, 8],
      yRange: [0, 6],
      textAnnotations: [
        { x: 1.3, y: 3.0, text: '6', color: '#475569', fontWeight: 'bold' },
        { x: 4.1, y: 2.2, text: '6√3', color: '#3b82f6', fontWeight: 'bold' },
        { x: 4.3, y: 3.3, text: '12 (Hypotenuse)', color: '#ef4444', fontWeight: 'bold' },
        { x: 2.3, y: 3.7, text: '30°', color: '#475569' },
        { x: 5.3, y: 2.1, text: '60°', color: '#475569' }
      ],
      curves: [
        // Main triangle
        { type: 'line', color: '#0f172a', points: [[2, 4.2], [2, 1.8], [6.2, 1.8], [2, 4.2]] },
        // Right-angle box
        { type: 'line', color: '#0f172a', points: [[2, 2.1], [2.3, 2.1], [2.3, 1.8]] }
      ],
      angleArcs: [
        { center: [2, 4.2], radius: 0.6, startAngle: 270, endAngle: 300, label: '', color: '#94a3b8' },
        { center: [6.2, 1.8], radius: 0.7, startAngle: 120, endAngle: 180, label: '', color: '#94a3b8' }
      ]
    }
  },
  {
    title: 'Worked Example 10: Special Right Triangles (45-45-90)',
    question: 'A 45°-45°-90° right triangle has a leg of length 6. What is the length of its hypotenuse?',
    options: ['6', '6√2', '6√3', '12'],
    correctAnswer: '6√2',
    correctIndex: 1,
    explanation: `Step-by-Step Geometric Explanation:
1. In a $45°-45°-90°$ triangle, the hypotenuse is exactly $\\sqrt{2}$ times the length of each leg:
   $$\\text{Hypotenuse} = s\\sqrt{2}$$
2. Since the leg length $s = 6$:
   $$\\text{Hypotenuse} = 6\\sqrt{2}$$.`,
    diagram: {
      title: 'Special 45°-45°-90° Isosceles Right Triangle: Leg = 6',
      hideAxes: true,
      hideGrid: true,
      hideTicks: true,
      xRange: [0, 8],
      yRange: [0, 6],
      textAnnotations: [
        { x: 1.3, y: 3.0, text: '6', color: '#475569', fontWeight: 'bold' },
        { x: 3.9, y: 2.2, text: '6', color: '#475569', fontWeight: 'bold' },
        { x: 4.1, y: 3.3, text: '6√2 (Hypotenuse)', color: '#3b82f6', fontWeight: 'bold' },
        { x: 2.3, y: 3.7, text: '45°', color: '#64748b' },
        { x: 4.9, y: 2.1, text: '45°', color: '#64748b' }
      ],
      curves: [
        // Triangle
        { type: 'line', color: '#0f172a', points: [[2, 4.2], [2, 1.8], [5.8, 1.8], [2, 4.2]] },
        // Right-angle box
        { type: 'line', color: '#0f172a', points: [[2, 2.1], [2.3, 2.1], [2.3, 1.8]] }
      ],
      angleArcs: [
        { center: [2, 4.2], radius: 0.6, startAngle: 270, endAngle: 315, label: '', color: '#cbd5e1' },
        { center: [5.8, 1.8], radius: 0.6, startAngle: 135, endAngle: 180, label: '', color: '#cbd5e1' }
      ]
    }
  },
  {
    title: 'Worked Example 11: Cofunction Compliment Theorem',
    question: 'If sin(3x)° = cos(2x + 10)° for acute angles, what is the value of x?',
    options: ['12', '16', '18', '20'],
    correctAnswer: '16',
    correctIndex: 1,
    explanation: `Step-by-Step Geometric Explanation:
1. Since $\\sin(A) = \\cos(B)$, the angles must be complementary ($A + B = 90°$):
   $$3x + (2x + 10) = 90$$
2. Combine like terms:
   $$5x + 10 = 90$$
3. Subtract 10 from both sides:
   $$5x = 80$$
4. Divide by 5:
   $$x = 16$$.`,
    diagram: {
      title: 'Cofunction Relations: sin(A) = cos(B) = a/c',
      hideAxes: true,
      hideGrid: true,
      hideTicks: true,
      xRange: [0, 8],
      yRange: [0, 6],
      textAnnotations: [
        { x: 2.3, y: 3.7, text: 'Angle A = 3x°', color: '#ef4444', fontWeight: 'bold' },
        { x: 4.9, y: 2.1, text: 'Angle B = (2x+10)°', color: '#3b82f6', fontWeight: 'bold' },
        { x: 1.3, y: 3.0, text: 'Side a', color: '#475569' },
        { x: 3.9, y: 2.2, text: 'Side b', color: '#475569' },
        { x: 4.1, y: 3.3, text: 'Hypotenuse c', color: '#16a34a' },
        { x: 4.0, y: 5.0, text: 'A + B = 90° (Complementary)', color: '#0f172a', fontWeight: 'bold' }
      ],
      curves: [
        // Right triangle
        { type: 'line', color: '#0f172a', points: [[2, 4.2], [2, 1.8], [5.8, 1.8], [2, 4.2]] },
        // Right angle indicator
        { type: 'line', color: '#0f172a', points: [[2, 2.1], [2.3, 2.1], [2.3, 1.8]] }
      ],
      angleArcs: [
        { center: [2, 4.2], radius: 0.6, startAngle: 270, endAngle: 315, label: '', color: '#ef4444' },
        { center: [5.8, 1.8], radius: 0.6, startAngle: 135, endAngle: 180, label: '', color: '#3b82f6' }
      ]
    }
  },
  {
    title: 'Worked Example 12: Pythagorean Theorem application',
    question: 'A right triangle has hypotenuse 10 and one leg 6. What is the length of the other leg?',
    options: ['5', '7', '8', '9'],
    correctAnswer: '8',
    correctIndex: 2,
    explanation: `Step-by-Step Geometric Explanation:
1. Apply the Pythagorean Theorem ($a^2 + b^2 = c^2$):
   $$6^2 + b^2 = 10^2$$
   $$36 + b^2 = 100$$
2. Subtract 36 from both sides:
   $$b^2 = 64$$
3. Take the square root:
   $$b = 8$$.
This forms the classic (6-8-10) triple, which is a scaled version of (3-4-5)!`,
    diagram: {
      title: 'Pythagorean Triple Right Triangle (6-8-10)',
      hideAxes: true,
      hideGrid: true,
      hideTicks: true,
      xRange: [0, 10],
      yRange: [0, 8],
      textAnnotations: [
        { x: 1.3, y: 3.9, text: 'a = 6', color: '#475569', fontWeight: 'bold' },
        { x: 4.8, y: 2.2, text: 'b = ?', color: '#3b82f6', fontWeight: 'bold' },
        { x: 5.4, y: 4.3, text: 'c = 10', color: '#ea580c', fontWeight: 'bold' }
      ],
      curves: [
        { type: 'line', color: '#3b82f6', points: [[2, 6], [2, 1.8], [7.8, 1.8], [2, 6]] },
        // Right angle indicator
        { type: 'line', color: '#3b82f6', points: [[2, 2.2], [2.4, 2.2], [2.4, 1.8]] }
      ]
    }
  },
  {
    title: 'Worked Example 13: Similar Triangles Area Ratio',
    question: 'Two triangles ABC and DEF are similar. If the ratio of their corresponding side lengths is 2:5, what is the ratio of their areas?',
    options: ['2:5', '4:10', '4:25', '8:125'],
    correctAnswer: '4:25',
    correctIndex: 2,
    explanation: `Step-by-Step Geometric Explanation:
1. Recall the Area of Similar Figures Theorem: If the linear scale factor of two similar figures is $a:b$, then the ratio of their areas is $a^2:b^2$.
2. Substitute the given side ratio $2:5$:
   $$\\text{Area Ratio} = 2^2 : 5^2 = 4 : 25$$.`,
    diagram: {
      title: 'Similar Triangles Scale Factor (2:5) & Area Ratio (4:25)',
      hideAxes: true,
      hideGrid: true,
      hideTicks: true,
      xRange: [0, 10],
      yRange: [0, 6],
      textAnnotations: [
        { x: 2.0, y: 4.7, text: 'ABC', color: '#0f172a', fontWeight: 'bold' },
        { x: 2.0, y: 0.8, text: 'Side = 2', color: '#3b82f6', fontWeight: 'bold' },
        { x: 2.0, y: 2.2, text: 'Area = A₁', color: '#3b82f6' },

        { x: 7.0, y: 5.7, text: 'DEF', color: '#0f172a', fontWeight: 'bold' },
        { x: 7.0, y: 0.8, text: 'Side = 5', color: '#ea580c', fontWeight: 'bold' },
        { x: 7.0, y: 2.8, text: 'Area = A₂', color: '#ea580c' },

        { x: 4.5, y: 4.0, text: 'Sides: 2 → 5', color: '#475569' },
        { x: 4.5, y: 3.4, text: 'Area Ratio = ?', color: '#ef4444', fontWeight: 'bold' }
      ],
      curves: [
        // Small Triangle ABC
        { type: 'line', color: '#3b82f6', points: [[1, 1.5], [3, 1.5], [2, 3.5], [1, 1.5]] },
        // Large Triangle DEF
        { type: 'line', color: '#ea580c', points: [[4.5, 1.5], [9.5, 1.5], [7.0, 5.0], [4.5, 1.5]] }
      ]
    }
  }
];

const WORKED_EXAMPLES_SECTION_3: MathWorkedExample[] = [
  {
    title: 'Worked Example 14: Converting Circle Equation to Find Center & Area',
    question: 'A circle is defined by the equation x² + y² - 4x + 10y = 7. Which of the following is the area of this circle?',
    options: ['7π', '14π', '16π', '36π'],
    correctAnswer: '36π',
    correctIndex: 3,
    explanation: `Step-by-Step Algebraic Walkthrough:
1. Complete the squares to rewrite the equation in standard form $(x - h)^2 + (y - k)^2 = r^2$:
   $$(x^2 - 4x) + (y^2 + 10y) = 7$$
2. Take half of the coefficients and square them:
   - For x: $(-4 / 2)^2 = 4$
   - For y: $(10 / 2)^2 = 25$
3. Add these values to both sides of the equation:
   $$(x^2 - 4x + 4) + (y^2 + 10y + 25) = 7 + 4 + 25$$
   $$(x - 2)^2 + (y + 5)^2 = 36$$
4. Identify the radius square $r^2$:
   $$r^2 = 36$$
5. Calculate the area of the circle using the formula $\\text{Area} = \\pi r^2$:
   $$\\text{Area} = \\pi (36) = 36\\pi$$.`,
    diagram: {
      title: 'Completed Square Circle: (x - 2)² + (y + 5)² = 36',
      xAxisLabel: 'x',
      yAxisLabel: 'y',
      xRange: [-6, 10],
      yRange: [-12, 2],
      xStep: 2,
      yStep: 2,
      textAnnotations: [
        { x: 3.5, y: -4.5, text: 'Center C(h, k) = ?', color: '#ef4444', fontWeight: 'bold' },
        { x: 5.5, y: -1.0, text: 'Radius r = ?', color: '#16a34a', fontWeight: 'bold' },
        { x: 3.0, y: -9.5, text: 'Area = ?', color: '#3b82f6', fontWeight: 'bold' }
      ],
      curves: [
        // Seamlessly smooth circle (Center 2, -5 with radius 6, 37 points for a perfect curve)
        {
          type: 'line',
          color: '#3b82f6',
          points: [
            [8, -5], [7.91, -3.96], [7.64, -2.95], [7.20, -2.00], [6.60, -1.14], [5.86, -0.40], [5.00, 0.20],
            [4.05, 0.64], [3.04, 0.91], [2, 1], [0.96, 0.91], [-0.05, 0.64], [-1.00, 0.20], [-1.86, -0.40],
            [-2.60, -1.14], [-3.20, -2.00], [-3.64, -2.95], [-3.91, -3.96], [-4, -5], [-3.91, -6.04],
            [-3.64, -7.05], [-3.20, -8.00], [-2.60, -8.86], [-1.86, -9.60], [-1.00, -10.20], [-0.05, -10.64],
            [0.96, -10.91], [2, -11], [3.04, -10.91], [4.05, -10.64], [5.00, -10.20], [5.86, -9.60],
            [6.60, -8.86], [7.20, -8.00], [7.64, -7.05], [7.91, -6.04], [8, -5]
          ]
        },
        // Center mark
        { type: 'line', color: '#ef4444', points: [[2, -5], [2, -5]] },
        // Radius line from center to circle edge
        { type: 'line', color: '#16a34a', points: [[2, -5], [8, -5]] }
      ]
    }
  },
  {
    title: 'Worked Example 15: Find the Center of a Circle from Diameter Ends',
    question: 'The endpoints of the diameter of a circle are (2, 3) and (8, 11). What are the coordinates of the center of this circle?',
    options: ['(5, 7)', '(3, 4)', '(10, 14)', '(6, 8)'],
    correctAnswer: '(5, 7)',
    correctIndex: 0,
    explanation: `Step-by-Step Geometric Explanation:
1. The center of a circle is the midpoint of its diameter.
2. Use the Midpoint Formula:
   $$M = \\left( \\frac{x_1 + x_2}{2}, \\frac{y_1 + y_2}{2} \\right)$$
3. Substitute the diameter endpoints:
   $$M = \\left( \\frac{2 + 8}{2}, \\frac{3 + 11}{2} \\right) = \\left( \\frac{10}{2}, \\frac{14}{2} \\right) = (5, 7)$$.`,
    diagram: {
      title: 'Diameter Endpoints & Midpoint Center',
      hideAxes: false,
      hideGrid: false,
      hideTicks: false,
      xRange: [0, 10],
      yRange: [0, 14],
      xStep: 2,
      yStep: 2,
      textAnnotations: [
        { x: 1.0, y: 2.5, text: 'A(2, 3)', color: '#475569', fontWeight: 'bold' },
        { x: 8.4, y: 11.5, text: 'B(8, 11)', color: '#475569', fontWeight: 'bold' },
        { x: 5.6, y: 6.5, text: 'Center M(h, k) = ?', color: '#ef4444', fontWeight: 'bold' }
      ],
      curves: [
        // Diameter
        { type: 'line', color: '#ea580c', points: [[2, 3], [8, 11]] },
        // High-resolution smooth circle (Center 5, 7 with radius 5, 37 points for a perfect curve)
        {
          type: 'line',
          color: '#3b82f6',
          points: [
            [10, 7], [9.93, 7.87], [9.70, 8.71], [9.33, 9.50], [8.83, 10.21], [8.21, 10.83], [7.50, 11.33],
            [6.71, 11.70], [5.87, 11.92], [5, 12], [4.13, 11.92], [3.29, 11.70], [2.50, 11.33], [1.79, 10.83],
            [1.17, 10.21], [0.67, 9.50], [0.30, 8.71], [0.08, 7.87], [0, 7], [0.08, 6.13], [0.30, 5.29],
            [0.67, 4.50], [1.17, 3.79], [1.79, 3.17], [2.50, 2.67], [3.29, 2.30], [4.13, 2.08], [5, 2],
            [5.87, 2.08], [6.71, 2.30], [7.50, 2.67], [8.21, 3.17], [8.83, 3.79], [9.33, 4.50], [9.70, 5.29],
            [9.93, 6.13], [10, 7]
          ]
        },
        // Midpoint mark
        { type: 'line', color: '#ef4444', points: [[5, 7], [5, 7]] }
      ]
    }
  },
  {
    title: 'Worked Example 16: Arc Length with Degree Central Angle',
    question: 'A circle has a radius of 9 and a central angle of 120°. What is the length of the intercepted arc?',
    options: ['3π', '6π', '9π', '12π'],
    correctAnswer: '6π',
    correctIndex: 1,
    explanation: `Step-by-Step Geometric Explanation:
1. Recall the arc length formula in degrees:
   $$s = 2\\pi r \\times \\frac{\\theta}{360°}$$
2. Substitute the given values ($r = 9$, $\\theta = 120°$):
   $$s = 2\\pi (9) \\times \\frac{120}{360}$$
3. Simplify:
   $$s = 18\\pi \\times \\frac{1}{3} = 6\\pi$$.`,
    diagram: {
      title: 'Arc Length with Degree Angle (r = 9, θ = 120°)',
      hideAxes: true,
      hideGrid: true,
      hideTicks: true,
      xRange: [-10, 10],
      yRange: [-10, 10],
      textAnnotations: [
        { x: 3.5, y: 0.8, text: 'Radius = 9', color: '#475569', fontWeight: 'bold' },
        { x: -3.8, y: 3.0, text: 'Radius = 9', color: '#475569', fontWeight: 'bold' },
        { x: 1.2, y: 1.5, text: 'θ = 120°', color: '#3b82f6', fontWeight: 'bold' },
        { x: 1.8, y: 6.8, text: 'Intercepted Arc s = ?', color: '#ef4444', fontWeight: 'bold' }
      ],
      curves: [
        // Radius lines
        { type: 'line', color: '#475569', points: [[0, 0], [9, 0]] },
        { type: 'line', color: '#475569', points: [[0, 0], [-4.5, 7.79]] },
        // Intercepted arc (bold red, highly detailed 10-degree increments for extreme smoothness)
        {
          type: 'line',
          color: '#ef4444',
          points: [
            [9.00, 0.00], [8.86, 1.56], [8.46, 3.08], [7.79, 4.50], [6.89, 5.79], [5.79, 6.89], [4.50, 7.79],
            [3.08, 8.46], [1.56, 8.86], [0.00, 9.00], [-1.56, 8.86], [-3.08, 8.46], [-4.50, 7.79]
          ]
        },
        // Rest of the circle (dashed grey, 10-degree increments for seamless alignment)
        {
          type: 'line',
          color: '#cbd5e1',
          style: 'dashed',
          points: [
            [-4.50, 7.79], [-5.79, 6.89], [-6.89, 5.79], [-7.79, 4.50], [-8.46, 3.08], [-8.86, 1.56], [-9.00, 0.00],
            [-8.86, -1.56], [-8.46, -3.08], [-7.79, -4.50], [-6.89, -5.79], [-5.79, -6.89], [-4.50, -7.79],
            [-3.08, -8.46], [-1.56, -8.86], [0.00, -9.00], [1.56, -8.86], [2.00, -8.46], [4.50, -7.79],
            [5.79, -6.89], [6.89, -5.79], [7.79, -4.50], [8.46, -3.08], [8.86, -1.56], [9.00, 0.00]
          ]
        }
      ],
      angleArcs: [
        { center: [0, 0], radius: 1.8, startAngle: 0, endAngle: 120, label: '', color: '#3b82f6' }
      ]
    }
  },
  {
    title: 'Worked Example 17: Sector Area with Radian Central Angle',
    question: 'A circle has a radius of 6 and a central angle of π/3 radians. What is the area of the sector?',
    options: ['2π', '4π', '6π', '12π'],
    correctAnswer: '6π',
    correctIndex: 2,
    explanation: `Step-by-Step Geometric Explanation:
1. Recall the sector area formula in radians:
   $$\\text{Area} = \\frac{1}{2} r^2 \\theta$$
2. Substitute the given values ($r = 6$, $\\theta = \\frac{\\pi}{3}$):
   $$\\text{Area} = \\frac{1}{2} \\times (6)^2 \\times \\frac{\\pi}{3}$$
   $$\\text{Area} = \\frac{1}{2} \\times 36 \\times \\frac{\\pi}{3} = 18 \\times \\frac{\\pi}{3} = 6\\pi$$.`,
    diagram: {
      title: 'Sector Area Layout (r = 6, θ = π/3)',
      hideAxes: true,
      hideGrid: true,
      hideTicks: true,
      xRange: [-10, 10],
      yRange: [-10, 10],
      textAnnotations: [
        { x: 3.5, y: 0.8, text: 'Radius = 6', color: '#475569', fontWeight: 'bold' },
        { x: 3.2, y: 1.5, text: 'θ = π/3 (60°)', color: '#3b82f6', fontWeight: 'bold' },
        { x: 4.8, y: 4.5, text: 'Sector Area = ?', color: '#ef4444', fontWeight: 'bold' }
      ],
      curves: [
        // Sector bounding radii
        { type: 'line', color: '#475569', points: [[0, 0], [6, 0]] },
        { type: 'line', color: '#475569', points: [[0, 0], [3, 5.20]] },
        // Shading lines for sector
        { type: 'line', color: '#fee2e2', points: [[0, 0], [5.64, 2.05]] },
        { type: 'line', color: '#fee2e2', points: [[0, 0], [4.60, 3.86]] },
        // Sector Arc outline (highly smooth 10-degree steps)
        {
          type: 'line',
          color: '#ef4444',
          points: [
            [6.00, 0.00], [5.91, 1.04], [5.64, 2.05], [5.20, 3.00], [4.60, 3.86], [3.86, 4.60], [3.00, 5.20]
          ]
        },
        // Rest of circle (seamless 10-degree steps)
        {
          type: 'line',
          color: '#cbd5e1',
          style: 'dashed',
          points: [
            [3.00, 5.20], [2.05, 5.64], [1.04, 5.91], [0.00, 6.00], [-1.04, 5.91], [-2.05, 5.64], [-3.00, 5.20],
            [-3.86, 4.60], [-4.60, 3.86], [-5.20, 3.00], [-5.64, 2.05], [-5.91, 1.04], [-6.00, 0.00],
            [-5.91, -1.04], [-5.64, -2.05], [-5.20, -3.00], [-4.60, -3.86], [-3.86, -4.60], [-3.00, -5.20],
            [-2.05, -5.64], [-1.04, -5.91], [0.00, -6.00], [1.04, -5.91], [2.05, -5.64], [3.00, -5.20],
            [3.86, -4.60], [4.60, -3.86], [5.20, -3.00], [5.64, -2.05], [5.91, -1.04], [6.00, 0.00]
          ]
        }
      ],
      angleArcs: [
        { center: [0, 0], radius: 1.8, startAngle: 0, endAngle: 60, label: '', color: '#3b82f6' }
      ]
    }
  },
  {
    title: 'Worked Example 18: Inscribed Angle Theorem',
    question: 'In a circle with center O, an inscribed angle is marked as ABC. If the central angle AOC measures 130°, what is the measure of the inscribed angle ABC?',
    options: ['65°', '75°', '90°', '130°'],
    correctAnswer: '65°',
    correctIndex: 0,
    explanation: `Step-by-Step Geometric Explanation:
1. The Inscribed Angle Theorem states that the measure of an inscribed angle is half of the central angle that intercept the same arc segment.
2. Substitute the central angle 130°:
   $$\\text{Inscribed Angle} = \\frac{130°}{2} = 65°$$.`,
    diagram: {
      title: 'Inscribed vs. Central Angle (AOC = 130°, ABC = 65°)',
      hideAxes: true,
      hideGrid: true,
      hideTicks: true,
      xRange: [-10, 10],
      yRange: [-10, 10],
      textAnnotations: [
        { x: 8.5, y: 0, text: 'A', color: '#0f172a', fontWeight: 'bold' },
        { x: -4.5, y: -7.5, text: 'B', color: '#0f172a', fontWeight: 'bold' },
        { x: -5.8, y: 6.6, text: 'C', color: '#0f172a', fontWeight: 'bold' },
        { x: 0.8, y: -0.8, text: 'O', color: '#0f172a', fontWeight: 'bold' },
        { x: 1.2, y: 1.8, text: '130°', color: '#ef4444', fontWeight: 'bold' },
        { x: -2.0, y: -4.5, text: 'θ = ?', color: '#3b82f6', fontWeight: 'bold' }
      ],
      curves: [
        // Full circle - high-resolution smooth curves using 36 segments (10-deg spacing)
        {
          type: 'line',
          color: '#cbd5e1',
          points: [
            [8, 0], [7.88, 1.39], [7.52, 2.74], [6.93, 4.00], [6.13, 5.14], [5.14, 6.13], [4.00, 6.93],
            [2.74, 7.52], [1.39, 7.88], [0, 8], [-1.39, 7.88], [-2.74, 7.52], [-4.00, 6.93],
            [-5.14, 6.13], [-6.13, 5.14], [-6.93, 4.00], [-7.52, 2.74], [-7.88, 1.39], [-8, 0],
            [-7.88, -1.39], [-7.52, -2.74], [-6.93, -4.00], [-6.13, -5.14], [-5.14, -6.13], [-4.00, -6.93],
            [-2.74, -7.52], [-1.39, -7.88], [0, -8], [1.39, -7.88], [2.74, -7.52], [4.00, -6.93],
            [5.14, -6.13], [6.13, -5.14], [6.93, -4.00], [7.52, -2.74], [7.88, -1.39], [8, 0]
          ]
        },
        // Central Angle AOC lines
        { type: 'line', color: '#ef4444', points: [[0, 0], [8, 0]] },
        { type: 'line', color: '#ef4444', points: [[0, 0], [-5.14, 6.13]] },
        // Inscribed Angle ABC lines
        { type: 'line', color: '#3b82f6', points: [[-4, -6.93], [8, 0]] },
        { type: 'line', color: '#3b82f6', points: [[-4, -6.93], [-5.14, 6.13]] }
      ],
      angleArcs: [
        { center: [0, 0], radius: 1.5, startAngle: 0, endAngle: 130, label: '', color: '#ef4444' },
        { center: [-4, -6.93], radius: 1.5, startAngle: 30, endAngle: 95, label: '', color: '#3b82f6' }
      ]
    }
  },
  {
    title: 'Worked Example 19: Circle Equation Shift',
    question: 'A circle defined by (x - 3)² + (y + 4)² = 25 is shifted 2 units to the left and 3 units up. What is the new equation of the circle?',
    options: [
      '(x - 1)² + (y + 1)² = 25',
      '(x - 5)² + (y + 7)² = 25',
      '(x - 1)² + (y + 7)² = 25',
      '(x - 5)² + (y + 1)² = 25'
    ],
    correctAnswer: '(x - 1)² + (y + 1)² = 25',
    correctIndex: 0,
    explanation: `Step-by-Step Geometric Explanation:
1. Recall the circle shifting rule:
   - Shifting a center $(h, k)$ left by $L$ units yields $h_{new} = h - L$.
   - Shifting a center $(h, k)$ up by $U$ units yields $k_{new} = k + U$.
2. Find the original center from the given equation $(x - 3)^2 + (y + 4)^2 = 25$:
   - Center $C = (3, -4)$, Radius $r = 5$.
3. Apply the shifts:
   - $h_{new} = 3 - 2 = 1$
   - $k_{new} = -4 + 3 = -1$
4. Form the new center $C\' = (1, -1)$.
5. Substitute the new center back into the standard form $(x - h_{new})^2 + (y - k_{new})^2 = r^2$:
   $$(x - 1)^2 + (y + 1)^2 = 25$$.`,
    diagram: {
      title: 'Circle Shift Translation (3, -4) → (1, -1)',
      hideAxes: false,
      hideGrid: false,
      hideTicks: false,
      xRange: [-6, 10],
      yRange: [-10, 6],
      xStep: 2,
      yStep: 2,
      textAnnotations: [
        { x: 3.5, y: -4.5, text: 'Original C(3, -4)', color: '#ef4444', fontWeight: 'bold' },
        { x: 1.5, y: -0.5, text: 'Shifted C\'(h, k) = ?', color: '#3b82f6', fontWeight: 'bold' },
        { x: 2.2, y: -2.3, text: 'Shift vector', color: '#16a34a', fontWeight: 'bold' }
      ],
      curves: [
        // Original Circle (r = 5, Center (3, -4)) - 37 points for a beautiful smooth circle
        {
          type: 'line',
          color: '#ef4444',
          style: 'dashed',
          points: [
            [8, -4], [7.92, -3.13], [7.70, -2.29], [7.33, -1.50], [6.83, -0.79], [6.21, -0.17], [5.50, 0.33],
            [4.71, 0.70], [3.87, 0.92], [3, 1], [2.13, 0.92], [1.29, 0.70], [0.50, 0.33], [-0.21, -0.17],
            [-0.83, -0.79], [-1.33, -1.50], [-1.70, -2.29], [-1.92, -3.13], [-2, -4], [-1.92, -4.87],
            [-1.70, -5.71], [-1.33, -6.50], [-0.83, -7.21], [-0.21, -7.83], [0.50, -8.33], [1.29, -8.70],
            [2.13, -8.92], [3, -9], [3.87, -8.92], [4.71, -8.70], [5.50, -8.33], [6.21, -7.83],
            [6.83, -7.21], [7.33, -6.50], [7.70, -5.71], [7.92, -4.87], [8, -4]
          ]
        },
        // Shifted Circle (r = 5, Center (1, -1)) - 37 points for a beautiful smooth circle
        {
          type: 'line',
          color: '#3b82f6',
          points: [
            [6, -1], [5.92, -0.13], [5.70, 0.71], [5.33, 1.50], [4.83, 2.21], [4.21, 2.83], [3.50, 3.33],
            [2.71, 3.70], [1.87, 3.92], [1, 4], [0.13, 3.92], [-0.71, 3.70], [-1.50, 3.33], [-2.21, 2.83],
            [-2.83, 2.21], [-3.33, 1.50], [-3.70, 0.71], [-3.92, -0.13], [-4, -1], [-3.92, -1.87],
            [-3.70, -2.71], [-3.33, -3.50], [-2.83, -4.21], [-2.21, -4.83], [-1.50, -5.33], [-0.71, -5.70],
            [0.13, -5.92], [1, -6], [1.87, -5.92], [2.71, -5.70], [3.50, -5.33], [4.21, -4.83],
            [4.83, -4.21], [5.33, -3.50], [5.70, -2.71], [5.92, -1.87], [6, -1]
          ]
        },
        // Translation Vector arrow line
        { type: 'line', color: '#16a34a', points: [[3, -4], [1, -1]] }
      ]
    }
  }
];

const WORKED_EXAMPLES_SECTION_4: MathWorkedExample[] = [
  {
    title: 'Worked Example 20: Finding Solid Density via Mass and Volume',
    question: 'A solid brass cone has a base radius of 3 cm and a height of 10 cm. If the total mass of the cone is 252 grams, what is the density of the brass, in grams per cubic centimeter? (Use 3.14 for π and round to the nearest tenth)',
    options: ['2.7 g/cm³', '5.4 g/cm³', '8.0 g/cm³', '26.7 g/cm³'],
    correctAnswer: '2.7 g/cm³',
    correctIndex: 0,
    explanation: `Step-by-Step Physical Measurement Calculation:
1. Recall the volume formula for a cone:
   $$V = \\frac{1}{3} \\pi r^2 h$$
2. Substitute the given base radius ($r = 3$ cm) and height ($h = 10$ cm):
   $$V = \\frac{1}{3} \\cdot 3.14 \\cdot (3)^2 \\cdot 10$$
   $$V = \\frac{1}{3} \\cdot 3.14 \\cdot 9 \\cdot 10 = 3 \\cdot 31.4 = 94.2 \\text{ cm}^3$$
3. Use the density formula:
   $$\\text{Density} = \\frac{\\text{Mass}}{\\text{Volume}}$$
4. Substitute the mass (252 g) and volume ($94.2 \\text{ cm}^3$):
   $$\\text{Density} = \\frac{252}{94.2} \\approx 2.675 \\text{ g/cm}^3$$
5. Rounding to the nearest tenth yields $2.7 \\text{ g/cm}^3$.`,
    diagram: {
      title: 'Solid Brass Cone: r = 3, h = 10',
      hideAxes: true,
      hideGrid: true,
      hideTicks: true,
      xRange: [0, 10],
      yRange: [0, 8],
      textAnnotations: [
        { x: 5.0, y: 4.5, text: 'h = 10 cm', color: '#64748b', fontWeight: 'bold' },
        { x: 6.2, y: 1.5, text: 'r = 3 cm', color: '#3b82f6', fontWeight: 'bold' },
        { x: 5.0, y: 0.8, text: 'Mass = 252g', color: '#ea580c', fontWeight: 'bold' }
      ],
      curves: [
        // Cone profile lines
        { type: 'line', color: '#3b82f6', points: [[5, 6.8], [3, 2]] },
        { type: 'line', color: '#3b82f6', points: [[5, 6.8], [7, 2]] },
        // High-resolution smooth base ellipse
        {
          type: 'line',
          color: '#3b82f6',
          points: [
            [7, 2], [6.93, 2.13], [6.73, 2.25], [6.41, 2.35], [6, 2.43], [5.52, 2.48], [5, 2.5],
            [4.48, 2.48], [4, 2.43], [3.59, 2.35], [3.27, 2.25], [3.07, 2.13], [3, 2],
            [3.07, 1.87], [3.27, 1.75], [3.41, 1.65], [4, 1.48], [4.48, 1.42], [5, 1.4],
            [5.52, 1.42], [6, 1.48], [6.59, 1.58], [6.73, 1.7], [6.93, 1.84], [7, 2]
          ]
        },
        // Altitudes and radius indicators
        { type: 'line', color: '#64748b', style: 'dashed', points: [[5, 6.8], [5, 2]] },
        { type: 'line', color: '#3b82f6', style: 'dashed', points: [[5, 2], [7, 2]] },
        { type: 'line', color: '#64748b', points: [[5, 2.3], [5.3, 2.3], [5.3, 2]] }
      ]
    }
  },
  {
    title: 'Worked Example 21: Volume of a Cylinder with Diameter',
    question: 'A right circular cylinder has a diameter of 8 inches and a height of 10 inches. What is the volume of the cylinder in terms of π?',
    options: ['40π', '80π', '160π', '640π'],
    correctAnswer: '160π',
    correctIndex: 2,
    explanation: `Step-by-Step Physical Measurement Calculation:
1. Find the radius ($r$) from the given diameter ($d = 8$):
   $$r = \\frac{8}{2} = 4\\text{ inches}$$
2. Recall the volume of a cylinder formula:
   $$V = \\pi r^2 h$$
3. Substitute the given values ($r = 4$, $h = 10$):
   $$V = \\pi (4)^2 (10) = 160\\pi\\text{ cubic inches}$$.`,
    diagram: {
      title: 'Right Circular Cylinder: r = 4, h = 10',
      hideAxes: true,
      hideGrid: true,
      hideTicks: true,
      xRange: [0, 10],
      yRange: [0, 8],
      textAnnotations: [
        { x: 5, y: 4, text: 'h = 10', color: '#64748b' },
        { x: 6, y: 1.5, text: 'r = 4', color: '#3b82f6' },
        { x: 5, y: 0.6, text: 'Diameter = 8', color: '#0f172a' }
      ],
      curves: [
        { type: 'line', color: '#3b82f6', points: [[3, 2], [3, 6]] },
        { type: 'line', color: '#3b82f6', points: [[7, 2], [7, 6]] },
        {
          type: 'line',
          color: '#3b82f6',
          points: [
            [7, 6], [6.93, 6.16], [6.73, 6.3], [6.41, 6.42], [6, 6.52], [5.52, 6.58], [5, 6.6],
            [4.48, 6.58], [4, 6.52], [3.59, 6.42], [3.27, 6.3], [3.07, 6.16], [3, 6],
            [3.07, 5.84], [3.27, 5.7], [3.41, 5.58], [4, 5.48], [4.48, 5.42], [5, 5.4],
            [5.52, 5.42], [6, 5.48], [6.59, 5.58], [6.73, 5.7], [6.93, 5.84], [7, 6]
          ]
        },
        {
          type: 'line',
          color: '#3b82f6',
          points: [
            [7, 2], [6.93, 2.16], [6.73, 2.3], [6.41, 2.42], [6, 2.52], [5.52, 2.58], [5, 2.6],
            [4.48, 2.58], [4, 2.52], [3.59, 2.42], [3.27, 2.3], [3.07, 2.16], [3, 2],
            [3.07, 1.84], [3.27, 1.7], [3.41, 1.58], [4, 1.48], [4.48, 1.42], [5, 1.4],
            [5.52, 1.42], [6, 1.48], [6.59, 1.58], [6.73, 1.7], [6.93, 1.84], [7, 2]
          ]
        },
        { type: 'line', color: '#64748b', style: 'dashed', points: [[5, 2], [5, 6]] },
        { type: 'line', color: '#3b82f6', style: 'dashed', points: [[5, 2], [7, 2]] }
      ]
    }
  },
  {
    title: 'Worked Example 22: Volume of a Sphere',
    question: 'What is the volume of a sphere with a radius of 6, in terms of π?',
    options: ['36π', '72π', '144π', '288π'],
    correctAnswer: '288π',
    correctIndex: 3,
    explanation: `Step-by-Step Physical Measurement Calculation:
1. Recall the volume of a sphere formula:
   $$V = \\frac{4}{3} \\pi r^3$$
2. Substitute the given radius ($r = 6$):
   $$V = \\frac{4}{3} \\pi (6)^3 = \\frac{4}{3} \\pi (216)$$
3. Calculate:
   $$V = 4 \\pi (72) = 288\\pi$$.`,
    diagram: {
      title: '3D Sphere: r = 6',
      hideAxes: true,
      hideGrid: true,
      hideTicks: true,
      xRange: [0, 10],
      yRange: [0, 8],
      textAnnotations: [
        { x: 6.25, y: 4.4, text: 'r = 6', color: '#ea580c' }
      ],
      curves: [
        {
          type: 'line',
          color: '#3b82f6',
          points: [
            [7.5, 4], [7.42, 4.65], [7.17, 5.25], [6.77, 5.77], [6.25, 6.17], [5.65, 6.42], [5.0, 6.5],
            [4.35, 6.42], [3.75, 6.17], [3.23, 5.77], [2.83, 5.25], [2.58, 4.65], [2.5, 4],
            [2.58, 3.35], [2.83, 2.75], [3.23, 2.23], [3.75, 1.83], [4.35, 1.58], [5.0, 1.5],
            [5.65, 1.58], [6.25, 1.83], [6.77, 2.23], [7.17, 2.75], [7.42, 3.35], [7.5, 4]
          ]
        },
        {
          type: 'line',
          color: '#cbd5e1',
          style: 'dashed',
          points: [
            [7.5, 4], [7.17, 4.42], [6.25, 4.52], [5, 4.6], [3.75, 4.52], [2.83, 4.42], [2.5, 4]
          ]
        },
        {
          type: 'line',
          color: '#cbd5e1',
          points: [
            [2.5, 4], [2.83, 3.58], [3.75, 3.48], [5, 3.4], [6.25, 3.48], [7.17, 3.58], [7.5, 4]
          ]
        },
        { type: 'line', color: '#ea580c', points: [[5, 4], [7.5, 4]] }
      ]
    }
  },
  {
    title: 'Worked Example 23: Volume of a Cone',
    question: 'A right circular cone has a radius of 5 and a height of 12. What is the volume of the cone in terms of π?',
    options: ['100π', '200π', '300π', '400π'],
    correctAnswer: '100π',
    correctIndex: 0,
    explanation: `Step-by-Step Physical Measurement Calculation:
1. Recall the volume of a cone formula:
   $$V = \\frac{1}{3} \\pi r^2 h$$
2. Substitute the given values ($r = 5$, $h = 12$):
   $$V = \\frac{1}{3} \\pi (5)^2 (12)$$
   $$V = 4 \\pi (25) = 100\\pi$$.`,
    diagram: {
      title: 'Right Circular Cone: r = 5, h = 12',
      hideAxes: true,
      hideGrid: true,
      hideTicks: true,
      xRange: [0, 10],
      yRange: [0, 8],
      textAnnotations: [
        { x: 5, y: 4.25, text: 'h = 12', color: '#64748b' },
        { x: 6, y: 1.5, text: 'r = 5', color: '#3b82f6' }
      ],
      curves: [
        { type: 'line', color: '#3b82f6', points: [[5, 6.5], [3, 2]] },
        { type: 'line', color: '#3b82f6', points: [[5, 6.5], [7, 2]] },
        {
          type: 'line',
          color: '#3b82f6',
          points: [
            [7, 2], [6.93, 2.13], [6.73, 2.25], [6.41, 2.35], [6, 2.43], [5.52, 2.48], [5, 2.5],
            [4.48, 2.48], [4, 2.43], [3.59, 2.35], [3.27, 2.25], [3.07, 2.13], [3, 2],
            [3.07, 1.87], [3.27, 1.75], [3.41, 1.65], [4, 1.57], [4.48, 1.52], [5, 1.5],
            [5.52, 1.52], [6, 1.57], [6.59, 1.65], [6.73, 1.75], [6.93, 1.87], [7, 2]
          ]
        },
        { type: 'line', color: '#64748b', style: 'dashed', points: [[5, 6.5], [5, 2]] },
        { type: 'line', color: '#3b82f6', style: 'dashed', points: [[5, 2], [7, 2]] },
        { type: 'line', color: '#64748b', points: [[5, 2.3], [5.3, 2.3], [5.3, 2]] }
      ]
    }
  },
  {
    title: 'Worked Example 24: Rectangular Prism Surface Area',
    question: 'A rectangular prism measures 3 inches by 4 inches by 5 inches. What is the total surface area of the prism in square inches?',
    options: ['47', '60', '94', '120'],
    correctAnswer: '94',
    correctIndex: 2,
    explanation: `Step-by-Step Physical Measurement Calculation:
1. Recall the surface area of a rectangular prism formula:
   $$\\text{SA} = 2(lw + lh + wh)$$
2. Substitute the given dimensions ($l = 3$, $w = 4$, $h = 5$):
   $$\\text{SA} = 2(3 \\cdot 4 + 3 \\cdot 5 + 4 \\cdot 5)$$
   $$\\text{SA} = 2(12 + 15 + 20)$$
   $$\\text{SA} = 2(47) = 94\\text{ square inches}$$.`,
    diagram: {
      title: '3D Rectangular Prism: 3 x 4 x 5',
      hideAxes: true,
      hideGrid: true,
      hideTicks: true,
      xRange: [0, 10],
      yRange: [0, 8],
      textAnnotations: [
        { x: 4, y: 2.4, text: 'length = 3', color: '#0f172a' },
        { x: 1.2, y: 3.5, text: 'height = 5', color: '#0f172a' },
        { x: 7.0, y: 2.2, text: 'width = 4', color: '#0f172a' }
      ],
      curves: [
        { type: 'line', color: '#3b82f6', points: [[2, 2], [6, 2], [6, 5], [2, 5], [2, 2]] },
        { type: 'line', color: '#3b82f6', points: [[3.5, 3], [7.5, 3], [7.5, 6], [3.5, 6], [3.5, 3]] },
        { type: 'line', color: '#3b82f6', points: [[2, 2], [3.5, 3]] },
        { type: 'line', color: '#3b82f6', points: [[6, 2], [7.5, 3]] },
        { type: 'line', color: '#3b82f6', points: [[6, 5], [7.5, 6]] },
        { type: 'line', color: '#3b82f6', points: [[2, 5], [3.5, 6]] }
      ]
    }
  },
  {
    title: 'Worked Example 25: Solid Geometry Melting & Recasting',
    question: 'A solid lead sphere of radius 3 cm is melted down and recast into smaller solid circular cylinders of radius 1 cm and height 2 cm. What is the maximum number of cylinders that can be cast? (Assume no material loss)',
    options: ['9', '18', '27', '36'],
    correctAnswer: '18',
    correctIndex: 1,
    explanation: `Step-by-Step Physical Measurement Calculation:
1. Find the volume of the sphere:
   $$V_{\\text{sphere}} = \\frac{4}{3} \\pi r^3 = \\frac{4}{3} \\pi (3)^3 = 36\\pi \\text{ cm}^3$$
2. Find the volume of one cylinder:
   $$V_{\\text{cylinder}} = \\pi r^2 h = \\pi (1)^2 (2) = 2\\pi \\text{ cm}^3$$
3. Divide the sphere volume by the cylinder volume to find the count:
   $$\\text{Count} = \\frac{36\\pi}{2\\pi} = 18\\text{ cylinders}$$.`,
    diagram: {
      title: 'Melting Sphere (r=3) to Cylinders (r=1, h=2)',
      hideAxes: true,
      hideGrid: true,
      hideTicks: true,
      xRange: [0, 10],
      yRange: [0, 5],
      textAnnotations: [
        { x: 2.5, y: 0.8, text: 'Sphere (r = 3)', color: '#ea580c' },
        { x: 7.5, y: 0.8, text: 'Cylinder (r = 1, h = 2)', color: '#3b82f6' }
      ],
      curves: [
        // Left side Sphere outline
        {
          type: 'line',
          color: '#ea580c',
          points: [
            [3.7, 3], [3.65, 3.4], [3.5, 3.75], [3.25, 4.05], [2.9, 4.2], [2.5, 4.25], [2.1, 4.2],
            [1.75, 4.05], [1.5, 3.75], [1.35, 3.4], [1.3, 3], [1.35, 2.6], [1.5, 2.25], [1.75, 1.95],
            [2.1, 1.8], [2.5, 1.75], [2.9, 1.8], [3.25, 1.95], [3.5, 2.25], [3.65, 2.6], [3.7, 3]
          ]
        },
        // Sphere equator
        {
          type: 'line',
          color: '#cbd5e1',
          points: [
            [3.7, 3], [3.5, 3.2], [3.1, 3.25], [2.5, 3.3], [1.9, 3.25], [1.5, 3.2], [1.3, 3],
            [1.5, 2.8], [1.9, 2.75], [2.5, 2.7], [3.1, 2.75], [3.5, 2.8], [3.7, 3]
          ]
        },
        // Sphere radius
        { type: 'line', color: '#ea580c', points: [[2.5, 3], [3.7, 3]] },

        // Right side Cylinder
        { type: 'line', color: '#3b82f6', points: [[6.9, 2.2], [6.9, 3.8]] },
        { type: 'line', color: '#3b82f6', points: [[8.1, 2.2], [8.1, 3.8]] },
        // Top ellipse
        {
          type: 'line',
          color: '#3b82f6',
          points: [
            [8.1, 3.8], [8.05, 3.9], [7.9, 3.96], [7.5, 4.0], [7.1, 3.96], [6.95, 3.9], [6.9, 3.8],
            [6.95, 3.7], [7.1, 3.64], [7.5, 3.6], [7.9, 3.64], [8.05, 3.7], [8.1, 3.8]
          ]
        },
        // Bottom ellipse
        {
          type: 'line',
          color: '#3b82f6',
          points: [
            [8.1, 2.2], [8.05, 2.3], [7.9, 2.36], [7.5, 2.4], [7.1, 2.36], [6.95, 2.3], [6.9, 2.2],
            [6.95, 2.1], [7.1, 2.04], [7.5, 2.0], [7.9, 2.04], [8.05, 2.1], [8.1, 2.2]
          ]
        }
      ]
    }
  }
];

const WORKED_EXAMPLES_SECTION_5: MathWorkedExample[] = [
  {
    "title": "Worked Example 26: Surface Area of a Rectangular Prism",
    "question": "A rectangular prism has length 9, width 4, and height 6. What is its total surface area?",
    "options": [
      "114",
      "216",
      "228",
      "432"
    ],
    "correctAnswer": "228",
    "correctIndex": 2,
    "explanation": "Step 1:\nUse the surface area formula for a 3D rectangular prism:\n$$\\text{SA} = 2(lw + lh + wh)$$\n\nStep 2:\nSubstitute length $l = 9$, width $w = 4$, and height $h = 6$:\n$$\\text{SA} = 2[(9)(4) + (9)(6) + (4)(6)]$$\n$$\\text{SA} = 2(36 + 54 + 24)$$\n$$\\text{SA} = 2(114) = 228$$\n\nAnswer: 228 square units\n\nSAT SHORTCUT:\nFor a rectangular prism: $\\text{SA} = 2(lw + lh + wh)$. Do NOT confuse surface area with volume. Volume → multiply all three dimensions ($l \\cdot w \\cdot h = 216$). Surface area → calculate the area of all six faces.",
    "diagram": {
      "title": "Rectangular Prism: l = 9, w = 4, h = 6",
      "hideAxes": true,
      "hideGrid": true,
      "hideTicks": true,
      "xRange": [
        0,
        10
      ],
      "yRange": [
        0,
        8
      ],
      "textAnnotations": [
        {
          "x": 4.5,
          "y": 1.2,
          "text": "length = 9",
          "color": "#3b82f6",
          "fontWeight": "bold"
        },
        {
          "x": 7.8,
          "y": 2.2,
          "text": "width = 4",
          "color": "#16a34a",
          "fontWeight": "bold"
        },
        {
          "x": 1.5,
          "y": 4,
          "text": "height = 6",
          "color": "#ea580c",
          "fontWeight": "bold"
        },
        {
          "x": 5,
          "y": 7,
          "text": "SA = 2(36 + 54 + 24) = 228",
          "color": "#0f172a",
          "fontWeight": "bold"
        }
      ],
      "curves": [
        {
          "type": "line",
          "color": "#3b82f6",
          "points": [
            [
              2,
              2
            ],
            [
              7,
              2
            ],
            [
              7,
              6
            ],
            [
              2,
              6
            ],
            [
              2,
              2
            ]
          ],
          "strokeWidth": 2
        },
        {
          "type": "line",
          "color": "#16a34a",
          "points": [
            [
              7,
              2
            ],
            [
              8.5,
              3.2
            ],
            [
              8.5,
              7.2
            ],
            [
              7,
              6
            ]
          ],
          "strokeWidth": 2
        },
        {
          "type": "line",
          "color": "#ea580c",
          "points": [
            [
              2,
              6
            ],
            [
              3.5,
              7.2
            ],
            [
              8.5,
              7.2
            ]
          ],
          "strokeWidth": 2
        },
        {
          "type": "line",
          "color": "#94a3b8",
          "points": [
            [
              2,
              2
            ],
            [
              3.5,
              3.2
            ],
            [
              8.5,
              3.2
            ]
          ],
          "strokeWidth": 1,
          "style": "dashed"
        },
        {
          "type": "line",
          "color": "#94a3b8",
          "points": [
            [
              3.5,
              3.2
            ],
            [
              3.5,
              7.2
            ]
          ],
          "strokeWidth": 1,
          "style": "dashed"
        }
      ]
    }
  },
  {
    "title": "Worked Example 27: Triangle Congruence via SSS",
    "question": "Triangle ABC has side lengths 7, 11, and 15. Triangle DEF also has side lengths 7, 11, and 15. What must be true about the two triangles?",
    "options": [
      "They are similar but not congruent",
      "They are congruent",
      "They are right triangles",
      "Their area cannot be determined"
    ],
    "correctAnswer": "They are congruent",
    "correctIndex": 1,
    "explanation": "Step 1:\nAll three corresponding side lengths are equal ($7 = 7, 11 = 11, 15 = 15$). Therefore, the two triangles satisfy the SSS (Side-Side-Side) condition.\n\nStep 2:\nSSS proves triangle congruence.\n\nAnswer: The triangles are congruent.\n\nSAT CONCEPT:\nCongruent figures have identical shape, size, corresponding sides, and corresponding angles.\nIMPORTANT: AAA (Angle-Angle-Angle) does NOT prove congruence; AAA proves similarity!",
    "diagram": {
      "title": "Triangle Congruence (SSS): ΔABC ≅ ΔDEF",
      "hideAxes": true,
      "hideGrid": true,
      "hideTicks": true,
      "xRange": [
        0,
        12
      ],
      "yRange": [
        0,
        7
      ],
      "textAnnotations": [
        {
          "x": 2.5,
          "y": 1,
          "text": "ΔABC (7, 11, 15)",
          "color": "#3b82f6",
          "fontWeight": "bold"
        },
        {
          "x": 8.5,
          "y": 1,
          "text": "ΔDEF (7, 11, 15)",
          "color": "#16a34a",
          "fontWeight": "bold"
        },
        {
          "x": 5.5,
          "y": 6.2,
          "text": "SSS Postulate ⟹ ΔABC ≅ ΔDEF",
          "color": "#0f172a",
          "fontWeight": "bold"
        }
      ],
      "curves": [
        {
          "type": "line",
          "color": "#3b82f6",
          "points": [
            [
              1,
              1.8
            ],
            [
              4.5,
              1.8
            ],
            [
              2.2,
              5.2
            ],
            [
              1,
              1.8
            ]
          ],
          "strokeWidth": 2
        },
        {
          "type": "line",
          "color": "#16a34a",
          "points": [
            [
              7,
              1.8
            ],
            [
              10.5,
              1.8
            ],
            [
              8.2,
              5.2
            ],
            [
              7,
              1.8
            ]
          ],
          "strokeWidth": 2
        }
      ]
    }
  },
  {
    "title": "Worked Example 28: Similar Triangles and Area Scale Factor",
    "question": "Two similar triangles have corresponding side lengths in the ratio 3:4. The smaller triangle has an area of 45. What is the area of the larger triangle?",
    "options": [
      "60",
      "75",
      "80",
      "100"
    ],
    "correctAnswer": "80",
    "correctIndex": 2,
    "explanation": "Step 1:\nSide scale factor from smaller to larger triangle is:\n$$k = \\frac{4}{3}$$\n\nStep 2:\nArea scales by the SQUARE of the side scale factor ($k^2$):\n$$\\text{Area Factor} = \\left(\\frac{4}{3}\\right)^2 = \\frac{16}{9}$$\n\nStep 3:\nMultiply the smaller triangle's area by the area factor:\n$$\\text{Area}_{\\text{larger}} = 45 \\times \\frac{16}{9} = 5 \\times 16 = 80$$\n\nAnswer: 80 square units\n\nSAT SHORTCUT:\nIf the side ratio is $a:b$, then the area ratio is $a^2:b^2$ and the volume ratio is $a^3:b^3$.",
    "diagram": {
      "title": "Similar Triangles Area Ratio: (3/4)² = 9/16",
      "hideAxes": true,
      "hideGrid": true,
      "hideTicks": true,
      "xRange": [
        0,
        11
      ],
      "yRange": [
        0,
        7
      ],
      "textAnnotations": [
        {
          "x": 2,
          "y": 0.8,
          "text": "Side = 3 | Area = 45",
          "color": "#ea580c",
          "fontWeight": "bold"
        },
        {
          "x": 7.5,
          "y": 0.8,
          "text": "Side = 4 | Area = 80",
          "color": "#3b82f6",
          "fontWeight": "bold"
        },
        {
          "x": 5,
          "y": 6.2,
          "text": "Area Ratio = (4/3)² = 16/9 ⟹ 45 × (16/9) = 80",
          "color": "#0f172a",
          "fontWeight": "bold"
        }
      ],
      "curves": [
        {
          "type": "line",
          "color": "#ea580c",
          "points": [
            [
              0.8,
              1.6
            ],
            [
              3.2,
              1.6
            ],
            [
              2,
              4.4
            ],
            [
              0.8,
              1.6
            ]
          ],
          "strokeWidth": 2
        },
        {
          "type": "line",
          "color": "#3b82f6",
          "points": [
            [
              5.5,
              1.6
            ],
            [
              9.5,
              1.6
            ],
            [
              7.5,
              5.3
            ],
            [
              5.5,
              1.6
            ]
          ],
          "strokeWidth": 2
        }
      ]
    }
  },
  {
    "title": "Worked Example 29: Unit Circle Trigonometric Value for cos 60°",
    "question": "What is the value of cos 60°?",
    "options": [
      "1/2",
      "√2/2",
      "√3/2",
      "1"
    ],
    "correctAnswer": "1/2",
    "correctIndex": 0,
    "explanation": "Step 1:\nRecall the special-angle trigonometric values in Quadrant I of the unit circle:\nAt $\\theta = 60^\\circ$:\n- $\\sin 60^\\circ = \\frac{\\sqrt{3}}{2}$\n- $\\cos 60^\\circ = \\frac{1}{2}$\n- $\\tan 60^\\circ = \\sqrt{3}$\n\nAnswer: 1/2\n\nUNIT-CIRCLE MEMORY PATTERN (First Quadrant):\n- $0^\\circ$: $\\sin = 0, \\cos = 1$\n- $30^\\circ$: $\\sin = 1/2, \\cos = \\sqrt{3}/2$\n- $45^\\circ$: $\\sin = \\sqrt{2}/2, \\cos = \\sqrt{2}/2$\n- $60^\\circ$: $\\sin = \\sqrt{3}/2, \\cos = 1/2$\n- $90^\\circ$: $\\sin = 1, \\cos = 0$",
    "diagram": {
      "title": "Unit Circle at 60°: cos 60° = 1/2, sin 60° = √3/2",
      "hideAxes": false,
      "hideGrid": true,
      "hideTicks": true,
      "xRange": [
        -1.5,
        1.5
      ],
      "yRange": [
        -1.5,
        1.5
      ],
      "textAnnotations": [
        {
          "x": 0.58,
          "y": 0.95,
          "text": "P(1/2, √3/2)",
          "color": "#3b82f6",
          "fontWeight": "bold"
        },
        {
          "x": 0.25,
          "y": -0.22,
          "text": "cos 60° = 1/2",
          "color": "#16a34a",
          "fontWeight": "bold"
        },
        {
          "x": 0.72,
          "y": 0.43,
          "text": "sin 60° = √3/2",
          "color": "#ea580c",
          "fontWeight": "bold"
        }
      ],
      "angleArcs": [
        {
          "center": [
            0,
            0
          ],
          "radius": 0.4,
          "startAngle": 0,
          "endAngle": 60,
          "color": "#ea580c",
          "label": "60°"
        }
      ],
      "curves": [
        {
          "type": "circle",
          "circle": {
            "cx": 0,
            "cy": 0,
            "r": 1
          },
          "color": "#94a3b8",
          "strokeWidth": 1.5
        },
        {
          "type": "line",
          "color": "#16a34a",
          "points": [
            [
              0,
              0
            ],
            [
              0.5,
              0
            ]
          ],
          "strokeWidth": 2.5
        },
        {
          "type": "line",
          "color": "#ea580c",
          "points": [
            [
              0.5,
              0
            ],
            [
              0.5,
              0.866
            ]
          ],
          "strokeWidth": 2,
          "style": "dashed"
        },
        {
          "type": "line",
          "color": "#3b82f6",
          "points": [
            [
              0,
              0
            ],
            [
              0.5,
              0.866
            ]
          ],
          "strokeWidth": 2.5
        }
      ]
    }
  },
  {
    "title": "Worked Example 30: Unit Circle Coordinates in Quadrant II",
    "question": "A point lies on the unit circle at an angle of 150°. What is its x-coordinate?",
    "options": [
      "1/2",
      "-1/2",
      "√3/2",
      "-√3/2"
    ],
    "correctAnswer": "-√3/2",
    "correctIndex": 3,
    "explanation": "Step 1:\nThe $x$-coordinate on the unit circle is given by $x = \\cos \\theta$.\n\nStep 2:\nThe angle $150^\\circ$ lies in Quadrant II.\nIts reference angle is:\n$$180^\\circ - 150^\\circ = 30^\\circ$$\n\nStep 3:\n$$\\cos 30^\\circ = \\frac{\\sqrt{3}}{2}$$\nSince cosine is negative in Quadrant II (where $x < 0$), we have:\n$$\\cos 150^\\circ = -\\frac{\\sqrt{3}}{2}$$\n\nAnswer: -√3/2\n\nSAT TRICK (Quadrant Signs):\n- Quadrant I: $\\sin +, \\cos +$\n- Quadrant II: $\\sin +, \\cos -$\n- Quadrant III: $\\sin -, \\cos -$\n- Quadrant IV: $\\sin -, \\cos +$",
    "diagram": {
      "title": "Unit Circle at 150° (Quadrant II): x = cos 150° = -√3/2",
      "hideAxes": false,
      "hideGrid": true,
      "hideTicks": true,
      "xRange": [
        -1.5,
        1.5
      ],
      "yRange": [
        -1.5,
        1.5
      ],
      "textAnnotations": [
        {
          "x": -0.92,
          "y": 0.62,
          "text": "P(-√3/2, 1/2)",
          "color": "#3b82f6",
          "fontWeight": "bold"
        },
        {
          "x": -0.43,
          "y": -0.22,
          "text": "x = cos 150° = -√3/2",
          "color": "#dc2626",
          "fontWeight": "bold"
        },
        {
          "x": -1.18,
          "y": 0.25,
          "text": "y = sin 150° = 1/2",
          "color": "#16a34a",
          "fontWeight": "bold"
        }
      ],
      "angleArcs": [
        {
          "center": [
            0,
            0
          ],
          "radius": 0.4,
          "startAngle": 0,
          "endAngle": 150,
          "color": "#ea580c",
          "label": "150°"
        }
      ],
      "curves": [
        {
          "type": "circle",
          "circle": {
            "cx": 0,
            "cy": 0,
            "r": 1
          },
          "color": "#94a3b8",
          "strokeWidth": 1.5
        },
        {
          "type": "line",
          "color": "#dc2626",
          "points": [
            [
              0,
              0
            ],
            [
              -0.866,
              0
            ]
          ],
          "strokeWidth": 2.5
        },
        {
          "type": "line",
          "color": "#16a34a",
          "points": [
            [
              -0.866,
              0
            ],
            [
              -0.866,
              0.5
            ]
          ],
          "strokeWidth": 2,
          "style": "dashed"
        },
        {
          "type": "line",
          "color": "#3b82f6",
          "points": [
            [
              0,
              0
            ],
            [
              -0.866,
              0.5
            ]
          ],
          "strokeWidth": 2.5
        }
      ]
    }
  },
  {
    "title": "Worked Example 31: Arc Length with Radian Central Angle",
    "question": "A circle has radius 8. A central angle measures π/4 radians. Find the arc length.",
    "options": [
      "π",
      "2π",
      "4π",
      "8π"
    ],
    "correctAnswer": "2π",
    "correctIndex": 1,
    "explanation": "Step 1:\nUse the radian arc length formula:\n$$s = r\\theta$$\n\nStep 2:\nSubstitute radius $r = 8$ and central angle $\\theta = \\frac{\\pi}{4}$:\n$$s = 8 \\cdot \\left(\\frac{\\pi}{4}\\right) = 2\\pi$$\n\nAnswer: 2π units\n\nIMPORTANT: The formula $s = r\\theta$ requires $\\theta$ to be measured strictly in RADIANS!",
    "diagram": {
      "title": "Arc Length: s = rθ = 8 × (π/4) = 2π",
      "hideAxes": true,
      "hideGrid": true,
      "hideTicks": true,
      "xRange": [
        -1.5,
        1.5
      ],
      "yRange": [
        -1.5,
        1.5
      ],
      "textAnnotations": [
        {
          "x": 0.5,
          "y": -0.15,
          "text": "r = 8",
          "color": "#3b82f6",
          "fontWeight": "bold"
        },
        {
          "x": 0.25,
          "y": 0.15,
          "text": "θ = π/4",
          "color": "#ea580c",
          "fontWeight": "bold"
        },
        {
          "x": 0.9,
          "y": 0.5,
          "text": "Arc s = 2π",
          "color": "#16a34a",
          "fontWeight": "bold"
        }
      ],
      "angleArcs": [
        {
          "center": [0, 0], "radius": 0.4,
          "startAngle": 0,
          "endAngle": 45,
          "color": "#ea580c",
          "label": "π/4"
        }
      ],
      "curves": [
        {
          "type": "circle", "circle": { "cx": 0, "cy": 0, "r": 1 },
          "color": "#cbd5e1",
          "strokeWidth": 1
        },
        {
          "type": "line",
          "color": "#3b82f6",
          "points": [
            [
              0,
              0
            ],
            [
              1,
              0
            ]
          ],
          "strokeWidth": 2
        },
        {
          "type": "line",
          "color": "#3b82f6",
          "points": [
            [
              0,
              0
            ],
            [
              0.707,
              0.707
            ]
          ],
          "strokeWidth": 2
        }
      ]
    }
  },
  {
    "title": "Worked Example 32: Sector Area with Radian Central Angle",
    "question": "A circle has radius 6 and a central angle of π/3 radians. Find the area of the sector.",
    "options": [
      "2π",
      "3π",
      "6π",
      "12π"
    ],
    "correctAnswer": "6π",
    "correctIndex": 2,
    "explanation": "Step 1:\nUse the radian sector area formula:\n$$A = \\frac{1}{2} r^2 \\theta$$\n\nStep 2:\nSubstitute radius $r = 6$ and central angle $\\theta = \\frac{\\pi}{3}$:\n$$A = \\frac{1}{2} (6^2) \\left(\\frac{\\pi}{3}\\right) = \\frac{1}{2} (36) \\left(\\frac{\\pi}{3}\\right) = 18 \\left(\\frac{\\pi}{3}\\right) = 6\\pi$$\n\nAnswer: 6π square units\n\nSAT TRICK:\n- Arc length = $r\\theta$\n- Sector area = $\\frac{1}{2} r^2 \\theta$",
    "diagram": {
      "title": "Sector Area: A = ½ r² θ = ½ (36)(π/3) = 6π",
      "hideAxes": true,
      "hideGrid": true,
      "hideTicks": true,
      "xRange": [
        -1.5,
        1.5
      ],
      "yRange": [
        -1.5,
        1.5
      ],
      "textAnnotations": [
        {
          "x": 0.5,
          "y": -0.15,
          "text": "r = 6",
          "color": "#3b82f6",
          "fontWeight": "bold"
        },
        {
          "x": 0.25,
          "y": 0.2,
          "text": "θ = π/3",
          "color": "#ea580c",
          "fontWeight": "bold"
        },
        {
          "x": 0.45,
          "y": 0.5,
          "text": "Sector Area = 6π",
          "color": "#16a34a",
          "fontWeight": "bold"
        }
      ],
      "angleArcs": [
        {
          "center": [0, 0], "radius": 0.4,
          "startAngle": 0,
          "endAngle": 60,
          "color": "#ea580c",
          "label": "π/3"
        }
      ],
      "curves": [
        {
          "type": "circle", "circle": { "cx": 0, "cy": 0, "r": 1 },
          "color": "#cbd5e1",
          "strokeWidth": 1
        },
        {
          "type": "line",
          "color": "#3b82f6",
          "points": [
            [
              0,
              0
            ],
            [
              1,
              0
            ]
          ],
          "strokeWidth": 2
        },
        {
          "type": "line",
          "color": "#3b82f6",
          "points": [
            [
              0,
              0
            ],
            [
              0.5,
              0.866
            ]
          ],
          "strokeWidth": 2
        }
      ]
    }
  },
  {
    "title": "Worked Example 33: Inscribed Angle Theorem",
    "question": "An inscribed angle intercepts an arc measuring 136°. What is the measure of the inscribed angle?",
    "options": [
      "34°",
      "68°",
      "136°",
      "272°"
    ],
    "correctAnswer": "68°",
    "correctIndex": 1,
    "explanation": "Step 1:\nAn inscribed angle equals HALF of its intercepted arc measure.\n\nStep 2:\n$$\\text{Inscribed Angle} = \\frac{136^\\circ}{2} = 68^\\circ$$\n\nAnswer: 68°\n\nCOMPARE:\n- Central angle = intercepted arc measure ($136^\\circ$)\n- Inscribed angle = $\\frac{1}{2}$ intercepted arc measure ($68^\\circ$)",
    "diagram": {
      "title": "Inscribed Angle Theorem: Inscribed Angle = ½ Intercepted Arc",
      "hideAxes": true,
      "hideGrid": true,
      "hideTicks": true,
      "xRange": [
        -1.5,
        1.5
      ],
      "yRange": [
        -1.5,
        1.5
      ],
      "textAnnotations": [
        {
          "x": -0.85,
          "y": 0,
          "text": "68°",
          "color": "#3b82f6",
          "fontWeight": "bold"
        },
        {
          "x": 0.8,
          "y": 0.3,
          "text": "Arc = 136°",
          "color": "#ea580c",
          "fontWeight": "bold"
        }
      ],
      "angleArcs": [
        {
          "center": [-1, 0], "radius": 0.35,
          "startAngle": -35,
          "endAngle": 35,
          "color": "#3b82f6",
          "label": "68°"
        }
      ],
      "curves": [
        {
          "type": "circle", "circle": { "cx": 0, "cy": 0, "r": 1 },
          "color": "#94a3b8",
          "strokeWidth": 1.5
        },
        {
          "type": "line",
          "color": "#3b82f6",
          "points": [
            [
              -1,
              0
            ],
            [
              0.5,
              0.866
            ]
          ],
          "strokeWidth": 2
        },
        {
          "type": "line",
          "color": "#3b82f6",
          "points": [
            [
              -1,
              0
            ],
            [
              0.5,
              -0.866
            ]
          ],
          "strokeWidth": 2
        }
      ]
    }
  },
  {
    "title": "Worked Example 34: Tangent and Radius Perpendicularity",
    "question": "A tangent line touches a circle at point P. The radius OP is drawn. What is the angle between OP and the tangent line?",
    "options": [
      "45°",
      "60°",
      "90°",
      "180°"
    ],
    "correctAnswer": "90°",
    "correctIndex": 2,
    "explanation": "Step 1:\nBy fundamental circle geometry theorems, a radius drawn to the exact point of tangency is always perpendicular to the tangent line.\n\nStep 2:\nPerpendicular lines meet at an angle of $90^\\circ$.\n\nAnswer: 90°\n\nSAT SHORTCUT:\nWhenever you see a tangent line touching a circle, immediately draw the radius to the point of tangency and mark a $90^\\circ$ right angle!",
    "diagram": {
      "title": "Tangent & Radius Perpendicularity: OP ⊥ Tangent at P (90°)",
      "hideAxes": true,
      "hideGrid": true,
      "hideTicks": true,
      "xRange": [
        -1.5,
        1.5
      ],
      "yRange": [
        -1.5,
        1.5
      ],
      "textAnnotations": [
        {
          "x": 0.1,
          "y": 0.4,
          "text": "Radius OP",
          "color": "#3b82f6",
          "fontWeight": "bold"
        },
        {
          "x": 0.6,
          "y": 1.2,
          "text": "Tangent Line",
          "color": "#ea580c",
          "fontWeight": "bold"
        },
        {
          "x": 0.15,
          "y": 0.85,
          "text": "90°",
          "color": "#16a34a",
          "fontWeight": "bold"
        }
      ],
      "curves": [
        {
          "type": "circle", "circle": { "cx": 0, "cy": 0, "r": 1 },
          "color": "#94a3b8",
          "strokeWidth": 1.5
        },
        {
          "type": "line",
          "color": "#3b82f6",
          "points": [
            [
              0,
              0
            ],
            [
              0,
              1
            ]
          ],
          "strokeWidth": 2
        },
        {
          "type": "line",
          "color": "#ea580c",
          "points": [
            [
              -1.2,
              1
            ],
            [
              1.2,
              1
            ]
          ],
          "strokeWidth": 2
        }
      ]
    }
  },
  {
    "title": "Worked Example 35: Distance Formula and Pythagorean Triples",
    "question": "Find the distance between A(2, 3) and B(8, 11).",
    "options": [
      "8",
      "10",
      "12",
      "14"
    ],
    "correctAnswer": "10",
    "correctIndex": 1,
    "explanation": "Step 1:\nUse the standard distance formula:\n$$d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$$\n\nStep 2:\nSubstitute $A(2, 3)$ and $B(8, 11)$:\n$$d = \\sqrt{(8 - 2)^2 + (11 - 3)^2}$$\n$$d = \\sqrt{6^2 + 8^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10$$\n\nAnswer: 10 units\n\nSAT TRICK:\nThe horizontal change is $\\Delta x = 6$ and vertical change is $\\Delta y = 8$. This forms a classic $6-8-10$ right triangle ($3-4-5$ triple scaled by 2), letting you find $d = 10$ instantly!",
    "diagram": {
      "title": "Distance between A(2, 3) and B(8, 11): d = √(6² + 8²) = 10",
      "hideAxes": false,
      "hideGrid": true,
      "hideTicks": true,
      "xRange": [
        0,
        10
      ],
      "yRange": [
        0,
        13
      ],
      "textAnnotations": [
        {
          "x": 1.8,
          "y": 2.2,
          "text": "A(2, 3)",
          "color": "#ea580c",
          "fontWeight": "bold"
        },
        {
          "x": 8.2,
          "y": 11.5,
          "text": "B(8, 11)",
          "color": "#ea580c",
          "fontWeight": "bold"
        },
        {
          "x": 5,
          "y": 2.2,
          "text": "Δx = 6",
          "color": "#3b82f6",
          "fontWeight": "bold"
        },
        {
          "x": 8.4,
          "y": 7,
          "text": "Δy = 8",
          "color": "#16a34a",
          "fontWeight": "bold"
        },
        {
          "x": 4.2,
          "y": 7.5,
          "text": "d = 10",
          "color": "#dc2626",
          "fontWeight": "bold"
        }
      ],
      "curves": [
        {
          "type": "line",
          "color": "#dc2626",
          "points": [
            [
              2,
              3
            ],
            [
              8,
              11
            ]
          ],
          "strokeWidth": 2.5
        },
        {
          "type": "line",
          "color": "#3b82f6",
          "points": [
            [
              2,
              3
            ],
            [
              8,
              3
            ]
          ],
          "strokeWidth": 1.5,
          "style": "dashed"
        },
        {
          "type": "line",
          "color": "#16a34a",
          "points": [
            [
              8,
              3
            ],
            [
              8,
              11
            ]
          ],
          "strokeWidth": 1.5,
          "style": "dashed"
        }
      ]
    }
  },
  {
    "title": "Worked Example 36: Midpoint Formula",
    "question": "Find the midpoint of A(-4, 7) and B(10, 13).",
    "options": [
      "(3, 10)",
      "(6, 20)",
      "(7, 10)",
      "(3, 6)"
    ],
    "correctAnswer": "(3, 10)",
    "correctIndex": 0,
    "explanation": "Step 1:\nUse the midpoint formula:\n$$M = \\left(\\frac{x_1 + x_2}{2}, \\frac{y_1 + y_2}{2}\\right)$$\n\nStep 2:\nCalculate $x$-coordinate:\n$$x_M = \\frac{-4 + 10}{2} = \\frac{6}{2} = 3$$\n\nStep 3:\nCalculate $y$-coordinate:\n$$y_M = \\frac{7 + 13}{2} = \\frac{20}{2} = 10$$\n\nAnswer: (3, 10)\n\nSAT TRICK:\nThe midpoint is simply the average of the $x$-coordinates and average of the $y$-coordinates!",
    "diagram": {
      "title": "Midpoint of A(-4, 7) and B(10, 13): M = (3, 10)",
      "hideAxes": false,
      "hideGrid": true,
      "hideTicks": true,
      "xRange": [
        -6,
        12
      ],
      "yRange": [
        5,
        15
      ],
      "textAnnotations": [
        {
          "x": -4.5,
          "y": 6.2,
          "text": "A(-4, 7)",
          "color": "#ea580c",
          "fontWeight": "bold"
        },
        {
          "x": 10.2,
          "y": 13.5,
          "text": "B(10, 13)",
          "color": "#ea580c",
          "fontWeight": "bold"
        },
        {
          "x": 3,
          "y": 11.2,
          "text": "M(3, 10)",
          "color": "#16a34a",
          "fontWeight": "bold"
        }
      ],
      "curves": [
        {
          "type": "line",
          "color": "#3b82f6",
          "points": [
            [
              -4,
              7
            ],
            [
              10,
              13
            ]
          ],
          "strokeWidth": 2
        }
      ]
    }
  },
  {
    "title": "Worked Example 37: Standard Equation of a Circle",
    "question": "A circle has center (-3, 5) and radius 7. What is its equation?",
    "options": [
      "(x - 3)² + (y + 5)² = 49",
      "(x + 3)² + (y - 5)² = 49",
      "(x + 3)² + (y - 5)² = 7",
      "(x - 3)² + (y - 5)² = 49"
    ],
    "correctAnswer": "(x + 3)² + (y - 5)² = 49",
    "correctIndex": 1,
    "explanation": "Step 1:\nUse the standard form equation of a circle:\n$$(x - h)^2 + (y - k)^2 = r^2$$\n\nStep 2:\nIdentify center $(h, k) = (-3, 5)$ and radius $r = 7$:\n$$h = -3, \\quad k = 5, \\quad r^2 = 7^2 = 49$$\n\nStep 3:\nSubstitute values:\n$$(x - (-3))^2 + (y - 5)^2 = 49$$\n$$(x + 3)^2 + (y - 5)^2 = 49$$\n\nAnswer: (x + 3)² + (y - 5)² = 49\n\nIMPORTANT: The signs inside the parentheses are OPPOSITE to the coordinates of the center!",
    "diagram": {
      "title": "Circle Equation: Center (-3, 5), Radius r = 7",
      "hideAxes": false,
      "hideGrid": true,
      "hideTicks": true,
      "xRange": [
        -12,
        6
      ],
      "yRange": [
        -3,
        13
      ],
      "textAnnotations": [
        {
          "x": -3,
          "y": 5,
          "text": "Center (-3, 5)",
          "color": "#ea580c",
          "fontWeight": "bold"
        },
        {
          "x": 0.5,
          "y": 5.5,
          "text": "r = 7",
          "color": "#3b82f6",
          "fontWeight": "bold"
        },
        {
          "x": -3,
          "y": 11.5,
          "text": "(x + 3)² + (y - 5)² = 49",
          "color": "#0f172a",
          "fontWeight": "bold"
        }
      ],
      "curves": [
        {
          "type": "circle", "circle": { "cx": -3, "cy": 5, "r": 7 },
          "color": "#3b82f6",
          "strokeWidth": 2
        },
        {
          "type": "line",
          "color": "#ea580c",
          "points": [
            [
              -3,
              5
            ],
            [
              4,
              5
            ]
          ],
          "strokeWidth": 2
        }
      ]
    }
  },
  {
    "title": "Worked Example 38: Finding Center and Radius from Circle Equation",
    "question": "A circle is represented by (x - 4)² + (y + 6)² = 81. What are its center and radius?",
    "options": [
      "Center = (-4, 6), Radius = 81",
      "Center = (4, -6), Radius = 9",
      "Center = (-4, 6), Radius = 9",
      "Center = (4, -6), Radius = 81"
    ],
    "correctAnswer": "Center = (4, -6), Radius = 9",
    "correctIndex": 1,
    "explanation": "Step 1:\nCompare with standard circle equation:\n$$(x - h)^2 + (y - k)^2 = r^2$$\n\nStep 2:\nFrom $(x - 4)^2 \\implies h = 4$.\nFrom $(y + 6)^2 = (y - (-6))^2 \\implies k = -6$.\n\nStep 3:\nFrom $r^2 = 81 \\implies r = \\sqrt{81} = 9$.\n\nAnswer: Center = (4, -6), Radius = 9",
    "diagram": {
      "title": "(x - 4)² + (y + 6)² = 81 ⟹ Center (4, -6), Radius = 9",
      "hideAxes": false,
      "hideGrid": true,
      "hideTicks": true,
      "xRange": [
        -7,
        15
      ],
      "yRange": [
        -17,
        5
      ],
      "textAnnotations": [
        {
          "x": 4,
          "y": -6,
          "text": "Center (4, -6)",
          "color": "#ea580c",
          "fontWeight": "bold"
        },
        {
          "x": 8.5,
          "y": -5.2,
          "text": "r = 9",
          "color": "#16a34a",
          "fontWeight": "bold"
        }
      ],
      "curves": [
        {
          "type": "circle", "circle": { "cx": 4, "cy": -6, "r": 9 },
          "color": "#16a34a",
          "strokeWidth": 2
        },
        {
          "type": "line",
          "color": "#ea580c",
          "points": [
            [
              4,
              -6
            ],
            [
              13,
              -6
            ]
          ],
          "strokeWidth": 2
        }
      ]
    }
  },
  {
    "title": "Worked Example 39: Circle Equation from Center and a Point",
    "question": "A circle has center (2, -1) and passes through the point (8, -1). Find its equation.",
    "options": [
      "(x - 2)² + (y + 1)² = 36",
      "(x + 2)² + (y - 1)² = 36",
      "(x - 2)² + (y + 1)² = 6",
      "(x - 8)² + (y + 1)² = 36"
    ],
    "correctAnswer": "(x - 2)² + (y + 1)² = 36",
    "correctIndex": 0,
    "explanation": "Step 1:\nFind the radius $r$.\nSince center $(2, -1)$ and point $(8, -1)$ share the same $y$-coordinate, the radius is the horizontal distance:\n$$r = |8 - 2| = 6$$\n\nStep 2:\nUse standard form $(x - h)^2 + (y - k)^2 = r^2$ with $(h, k) = (2, -1)$ and $r = 6$:\n$$(x - 2)^2 + (y - (-1))^2 = 6^2$$\n$$(x - 2)^2 + (y + 1)^2 = 36$$\n\nAnswer: (x - 2)² + (y + 1)² = 36",
    "diagram": {
      "title": "Circle with Center (2, -1) passing through (8, -1): r = 6",
      "hideAxes": false,
      "hideGrid": true,
      "hideTicks": true,
      "xRange": [
        -6,
        10
      ],
      "yRange": [
        -9,
        7
      ],
      "textAnnotations": [
        {
          "x": 2,
          "y": -1,
          "text": "Center (2, -1)",
          "color": "#ea580c",
          "fontWeight": "bold"
        },
        {
          "x": 8.2,
          "y": -0.5,
          "text": "Point (8, -1)",
          "color": "#3b82f6",
          "fontWeight": "bold"
        },
        {
          "x": 5,
          "y": -1.8,
          "text": "r = 6",
          "color": "#16a34a",
          "fontWeight": "bold"
        }
      ],
      "curves": [
        {
          "type": "circle", "circle": { "cx": 2, "cy": -1, "r": 6 },
          "color": "#3b82f6",
          "strokeWidth": 2
        },
        {
          "type": "line",
          "color": "#16a34a",
          "points": [
            [
              2,
              -1
            ],
            [
              8,
              -1
            ]
          ],
          "strokeWidth": 2
        }
      ]
    }
  },
  {
    "title": "Worked Example 40: Data Sufficiency and Missing Information",
    "question": "A triangle has a base of 12. Is this information alone sufficient to determine the area of the triangle?",
    "options": [
      "Yes, area is 36",
      "Yes, area is 72",
      "No, height is required to determine area",
      "Yes, if it is an equilateral triangle"
    ],
    "correctAnswer": "No, height is required to determine area",
    "correctIndex": 2,
    "explanation": "Step 1:\nUse the area formula for a triangle:\n$$\\text{Area} = \\frac{1}{2} b h$$\n\nStep 2:\nWe are given base $b = 12$, but we do NOT know the perpendicular height $h$.\n\nStep 3:\nTriangles with base $12$ can have infinitely many different heights (e.g., $h = 2 \\implies \\text{Area} = 12$, $h = 5 \\implies \\text{Area} = 30$), leading to different areas.\n\nAnswer: NO. The information is insufficient.\n\nSAT THINKING:\nDon't calculate automatically. First ask: \"What exact parameters does the formula require?\" If a required parameter is missing and cannot be derived, the value cannot be determined!",
    "diagram": {
      "title": "Data Sufficiency: Base b = 12, Height h = Unknown",
      "hideAxes": true,
      "hideGrid": true,
      "hideTicks": true,
      "xRange": [
        0,
        14
      ],
      "yRange": [
        0,
        8
      ],
      "textAnnotations": [
        {
          "x": 6,
          "y": 0.5,
          "text": "Base b = 12",
          "color": "#3b82f6",
          "fontWeight": "bold"
        },
        {
          "x": 3.5,
          "y": 2.8,
          "text": "h1 = ?",
          "color": "#ea580c"
        },
        {
          "x": 8.5,
          "y": 3.8,
          "text": "h2 = ?",
          "color": "#16a34a"
        },
        {
          "x": 6,
          "y": 7.2,
          "text": "Height Unknown ⟹ Area Cannot Be Determined",
          "color": "#dc2626",
          "fontWeight": "bold"
        }
      ],
      "curves": [
        {
          "type": "line",
          "color": "#3b82f6",
          "points": [
            [
              1,
              1
            ],
            [
              13,
              1
            ]
          ],
          "strokeWidth": 2.5
        },
        {
          "type": "line",
          "color": "#ea580c",
          "points": [
            [
              1,
              1
            ],
            [
              4,
              4.5
            ],
            [
              13,
              1
            ]
          ],
          "strokeWidth": 1.5
        },
        {
          "type": "line",
          "color": "#16a34a",
          "points": [
            [
              1,
              1
            ],
            [
              8,
              6.5
            ],
            [
              13,
              1
            ]
          ],
          "strokeWidth": 1.5
        }
      ]
    }
  }
];

const SECTIONS: MathTheorySection[] = [
  {
    sectionTitle: '7.1 Angles, Lines, and Polygons',
    fullText: 'The Digital SAT tests angle relationships extensively, specifically when lines intersect or when polygons form. Understanding these fundamental rules guarantees instant points.',
    bulletPoints: [
      'Parallel Lines cut by a Transversal: Corresponding angles, alternate interior angles, and alternate exterior angles are equal. Consecutive interior angles are supplementary (sum to 180°).',
      'Vertical Angles: Formed by intersecting lines, they are always equal.',
      'Sum of Interior Angles of Polygons: For any convex polygon with n sides, the sum of its interior angles is $(n - 2) \\cdot 180°$. For a triangle ($n=3$), sum is 180°; for a quadrilateral ($n=4$), sum is 360°.',
      'Regular Polygons: A polygon where all sides and all interior angles are equal. Individual interior angle is $\\frac{(n - 2) \\cdot 180°}{n}$.'
    ],
    tables: [
      {
        title: 'Common Polygon Angle Sums Reference',
        headers: ['Polygon Name', 'Number of Sides (n)', 'Sum of Interior Angles', 'Individual Regular Angle'],
        rows: [
          ['Triangle', '3', '180°', '60°'],
          ['Quadrilateral', '4', '360°', '90°'],
          ['Pentagon', '5', '540°', '108°'],
          ['Hexagon', '6', '720°', '120°'],
          ['Octagon', '8', '1080°', '135°']
        ]
      }
    ],
    examples: WORKED_EXAMPLES_SECTION_1
  },
  {
    sectionTitle: '7.2 Triangles, Similarity, and Special Trigonometry',
    fullText: 'Triangles are the single most heavily tested geometric shape on the SAT. You must master triangle classification, isosceles and equilateral properties, shortcut identification tricks, the Pythagorean theorem, special right triangles, and standard SOH-CAH-TOA trigonometry.',
    bulletPoints: [
      'Isosceles Triangles & Vertex Altitude Trick: An isosceles triangle has at least two equal sides and two equal base angles ($a = b \\iff \\angle A = \\angle B$). TRICK: Drawing the altitude from the apex vertex to the base bisects both the vertex angle and the base, splitting the isosceles triangle into two congruent right triangles!',
      'Equilateral Triangles: All three sides are equal ($s$), and all three angles measure exactly $60°$. TRICK: Height $h = \\frac{s\\sqrt{3}}{2}$ and Area $A = \\frac{s^2\\sqrt{3}}{4}$.',
      'Triangle Classification Trick (Converse Pythagorean): For sides $a \\le b < c$: If $a^2 + b^2 = c^2 \\implies$ Right Triangle. If $a^2 + b^2 > c^2 \\implies$ Acute Triangle. If $a^2 + b^2 < c^2 \\implies$ Obtuse Triangle.',
      'Triangle Inequality Theorem Trick: The third side $c$ of any triangle must satisfy $|a - b| < c < a + b$. The largest angle is always opposite the longest side.',
      'Common Pythagorean Triples: Memorize (3-4-5), (5-12-13), (8-15-17), (7-24-25), and (20-21-29) along with their scalar multiples (e.g., 6-8-10, 9-12-15).',
      'Similar Triangles: Triangles with equal corresponding angles and proportional corresponding side lengths. AA similarity is the most common test criterion.',
      '30°-60°-90° Special Triangle: Ratios of sides are $1 : \\sqrt{3} : 2$.',
      '45°-45°-90° Special Triangle: Ratios of sides are $1 : 1 : \\sqrt{2}$.',
      'SOH-CAH-TOA: Sine (Opp/Hyp), Cosine (Adj/Hyp), Tangent (Opp/Adj).',
      'Cofunction Identities: $\\sin(x) = \\cos(90° - x)$ and $\\cos(x) = \\sin(90° - x)$ for all complementary angles.'
    ],
    tables: [
      {
        title: 'Triangle Types, Properties, and Shortcut Checking Tricks',
        headers: ['Triangle Type', 'Side & Angle Criteria', 'Key Formulas', 'SAT Checking Trick / Shortcut'],
        rows: [
          ['Equilateral', '3 equal sides, 3 equal 60° angles', 'Height = (s√3)/2, Area = (s²√3)/4', 'Split in half to get two 30°-60°-90° right triangles'],
          ['Isosceles', '2 equal sides, 2 equal base angles', 'Base angles equal: ∠A = ∠B', 'Drop altitude from vertex to base; bisects base & forms 2 right triangles'],
          ['Scalene', 'All 3 sides & angles different', 'Area = (1/2)b·h', 'Apply Triangle Inequality: |a - b| < c < a + b'],
          ['Right Triangle', 'One 90° angle, hypotenuse c', 'a² + b² = c²', 'Recognize triples (3-4-5, 5-12-13, 8-15-17, 20-21-29) instantly'],
          ['Obtuse Triangle', 'One angle > 90°', 'a² + b² < c²', 'Check if sum of squares of shorter sides is LESS than c²'],
          ['Acute Triangle', 'All 3 angles < 90°', 'a² + b² > c²', 'Check if sum of squares of shorter sides is GREATER than c²']
        ]
      }
    ],
    examples: WORKED_EXAMPLES_SECTION_2
  },
  {
    sectionTitle: '7.3 Coordinate Circles and Arc Geometry',
    fullText: 'Circle geometry covers both coordinate representation in the standard xy-plane and geometric calculations involving angles and arc segments.',
    bulletPoints: [
      'Standard Form of a Circle: $(x - h)^2 + (y - k)^2 = r^2$, centered at $(h, k)$ with radius $r$.',
      'Arc Length Formulas: $s = r\\theta$ (when $\\theta$ is in radians) or $s = 2\\pi r \\cdot \\frac{\\theta}{360}$ (when $\\theta$ is in degrees).',
      'Sector Area Formulas: $\\text{Area} = \\frac{1}{2} r^2 \\theta$ (in radians) or $\\text{Area} = \\pi r^2 \\cdot \\frac{\\theta}{360}$ (in degrees).',
      'Inscribed Angle Theorem: An inscribed angle is half of its corresponding central angle intercepting the same arc segment.'
    ],
    examples: WORKED_EXAMPLES_SECTION_3
  },
  {
    sectionTitle: '7.4 Solid Geometry and Measurement Properties',
    fullText: 'Solid geometry questions on the SAT focus on volume, surface area, and density conversions. While many volume formulas are provided on the exam cover page, knowing how to apply them rapidly is key.',
    bulletPoints: [
      'Volume of a Cylinder: $V = \\pi r^2 h$.',
      'Volume of a Rectangular Prism: $V = l \\cdot w \\cdot h$.',
      'Volume of a Sphere: $V = \\frac{4}{3} \\pi r^3$.',
      'Volume of a Cone: $V = \\frac{1}{3} \\pi r^2 h$.',
      'Density and Mass: $\\text{Density} = \\frac{\\text{Mass}}{\\text{Volume}}$. This formula is frequently used in word problems involving material properties.'
    ],
    examples: WORKED_EXAMPLES_SECTION_4
  }
,
{
  sectionTitle: "7.5 Later-Added SAT Concepts & Additional Worked Examples",
  fullText: "Mega Chapter 1 — SAT Geometry & Trigonometry: 15 Additional Worked Examples and Later-Added SAT Concepts. Master surface area, triangle congruence, similarity area scale factor, unit circle quadrants/coordinates, radian arc length and sector area, inscribed angles, tangent-radius perpendicularity, distance/midpoint formulas, circle equations, and data sufficiency analysis.",
  bulletPoints: [
    "Quick Review of 15 Concepts: 11 Surface area, 12 Triangle congruence, 13 Similarity + area scale, 14 Unit-circle values, 15 Unit-circle quadrants/signs, 16 Arc length in radians, 17 Sector area in radians, 18 Inscribed angles, 19 Tangent + radius, 20 Distance formula, 21 Midpoint, 22 Circle equation from center/radius, 23 Center/radius from equation, 24 Circle equation from center + point, 25 Sufficiency / missing information.",
    "High-Value SAT Shortcuts: 1) Length scale k, 2) Area scale k², 3) Volume scale k³. 4) SSS/SAS/ASA/AAS → Congruence, 5) AAA → Similarity (NOT congruence). 6) Unit circle: x = cos θ, y = sin θ. 7) Quadrant II: sin positive, cos negative. 8) Arc length: s = rθ (ONLY when θ is in radians). 9) Sector area: A = (1/2)r²θ (ONLY when θ is in radians). 10) Inscribed angle: HALF the intercepted arc. 11) Central angle: SAME as intercepted arc. 12) Tangent + radius: 90°. 13) Distance formula: Think Pythagorean theorem. 14) Midpoint: Average x's and average y's. 15) Circle equation: (x-h)² + (y-k)² = r². 16) Signs in circle equation: Opposite the center coordinates. 17) For \Can it be determined?\: Identify exactly what the formula requires before calculating."
  ],
  tables: [
    {
      title: "Quick Review — The 15 Later-Added SAT Concepts",
      headers: [
        "Concept #",
        "Topic Name",
        "Key Formula / Rule",
        "SAT Application & Memory Trick"
      ],
      rows: [
        [
          "11",
          "Surface Area of Rectangular Prism",
          "SA = 2(lw + lh + wh)",
          "Calculate all 6 faces; do NOT confuse with Volume = l·w·h"
        ],
        [
          "12",
          "Triangle Congruence",
          "SSS, SAS, ASA, AAS",
          "Congruent figures have identical size & shape; AAA proves similarity, NOT congruence"
        ],
        [
          "13",
          "Similar Triangles + Area",
          "Area Ratio = (Side Ratio)²",
          "If side ratio is a:b, area ratio is a²:b²"
        ],
        [
          "14",
          "Unit Circle Values",
          "cos 60° = 1/2, sin 60° = √3/2",
          "Quadrant I angle values: 0°, 30°, 45°, 60°, 90°"
        ],
        [
          "15",
          "Unit Circle Coordinates",
          "x = cos θ, y = sin θ",
          "Quadrant II: cos is negative, sin is positive"
        ],
        [
          "16",
          "Arc Length in Radians",
          "s = rθ",
          "θ MUST be measured in radians"
        ],
        [
          "17",
          "Sector Area in Radians",
          "A = (1/2)r²θ",
          "θ MUST be measured in radians"
        ],
        [
          "18",
          "Inscribed Angle Theorem",
          "Inscribed Angle = (1/2) Arc",
          "Central angle equals arc; inscribed angle is HALF the arc"
        ],
        [
          "19",
          "Tangent and Radius",
          "Angle = 90°",
          "Radius to point of tangency is perpendicular to tangent line"
        ],
        [
          "20",
          "Distance Formula",
          "d = √[(x₂-x₁)² + (y₂-y₁)²]",
          "Equivalent to Pythagorean theorem on coordinate grid"
        ],
        [
          "21",
          "Midpoint Formula",
          "M = ((x₁+x₂)/2, (y₁+y₂)/2)",
          "Average the x-values and average the y-values"
        ],
        [
          "22",
          "Equation of a Circle",
          "(x-h)² + (y-k)² = r²",
          "Signs inside parentheses are opposite center coordinates (h, k)"
        ],
        [
          "23",
          "Finding Center and Radius",
          "Compare to (x-h)² + (y-k)² = r²",
          "Radius r = √r²"
        ],
        [
          "24",
          "Circle Equation from Center & Point",
          "r = distance from center to point",
          "Substitute h, k, and r² into standard form"
        ],
        [
          "25",
          "Sufficiency / Missing Information",
          "Check formula requirements",
          "If required parameter (e.g. height) is missing, area cannot be determined"
        ]
      ]
    }
  ],
  examples: WORKED_EXAMPLES_SECTION_5
}
];

export const FULL_CHAPTER_7_GEOMETRY: FullSatMathChapter = {
  id: 'geometry-and-trigonometry',
  chapterNumber: 7,
  chapterTitle: 'Geometry, Measurements, and Trigonometry',
  pageNumber: 310,
  quote: 'Space, measure, and angle represent the physical geometry of math. Master the properties of symmetry, and calculations collapse into elegance.',
  introduction: 'Welcome to Chapter 7: Geometry, Measurements, and Trigonometry. This comprehensive textbook section covers angle properties, similar and congruent triangles, Pythagorean applications, special right triangles, circle theorems, standard plane circle equations, volume of 3D solids, and the complementary angle trigonometric cofunctions. Use these targeted, interactive practice problems to cement these fundamental principles for a perfect 800.',
  sections: SECTIONS,
  exerciseGroups: [
    {
      exerciseNumber: 1,
      title: 'Exercise 1: Right Triangles, Lines & Trigonometry',
      description: 'Practice questions 1 to 30 covering right triangle properties, angles, special right triangles, and fundamental trigonometry.',
      questions: CHAPTER_7_QUESTIONS_PART1
    },
    {
      exerciseNumber: 2,
      title: 'Exercise 2: Area, Volume, Lines & Triangles',
      description: 'Practice questions 31 to 60 covering 2D plane area, 3D solid volumes, parallel line angles, and triangle congruence/similarity.',
      questions: CHAPTER_7_QUESTIONS_PART2
    },
    {
      exerciseNumber: 3,
      title: 'Exercise 3: Trig, Circles & Mixed Challenge',
      description: 'Practice questions 61 to 90 covering advanced trigonometry, unit circle, circle arc/sector geometry, coordinate geometry, and composite solids.',
      questions: CHAPTER_7_QUESTIONS_PART3
    },
    {
      exerciseNumber: 4,
      title: 'Exercise 4: Advanced Geometry, Coordinate Circles & Hard Trig',
      description: 'Practice questions 91 to 125 covering circle coordinate equations, completing the square, complementary trig cofunctions, 3D displacement, and solid geometry.',
      questions: CHAPTER_7_QUESTIONS_PART4
    }
  ]
};
