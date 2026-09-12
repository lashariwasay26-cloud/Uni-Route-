import { MathExerciseQuestion } from './satMathConcepts';

export const CHAPTER_7_QUESTIONS_PART4: MathExerciseQuestion[] = [
  {
    id: "ch7-ex-q91",
    number: 91,
    exerciseNumber: 4,
    exerciseTitle: "Exercise 4: Advanced Geometry, Coordinate Circles & Hard Trig",
    question: "A circle in the xy-plane has equation x² + y² - 10x + 6y + 9 = 0. What are the coordinates of the center and the radius of the circle?",
    options: ["Center (5, -3), Radius 5", "Center (-5, 3), Radius 5", "Center (5, -3), Radius 25", "Center (-5, 3), Radius 25"],
    correctIndex: 0,
    correctAnswerText: "Center (5, -3), Radius 5",
    explanation: `Step-by-Step Mathematical Explanation:
1. Complete the square for both x and y terms in x² + y² - 10x + 6y + 9 = 0:
   - Group x terms: (x² - 10x + 25)
   - Group y terms: (y² + 6y + 9)
2. Rewrite the equation:
   $$(x^2 - 10x + 25) + (y^2 + 6y + 9) = -9 + 25 + 9$$
   $$(x - 5)^2 + (y + 3)^2 = 25$$
3. Compare with standard form $(x - h)^2 + (y - k)^2 = r^2$:
   - Center $(h, k) = (5, -3)$
   - Radius $r = \\sqrt{25} = 5$

Distractor Analysis:
- Option A (Center (5, -3), Radius 5): CORRECT.
- Option B (Center (-5, 3), Radius 5): Sign error on center coordinates.
- Option C (Center (5, -3), Radius 25): Confused $r^2$ with $r$.
- Option D (Center (-5, 3), Radius 25): Combined center sign and radius errors.`,
    diagram: {
      title: "Circle Equation x² + y² - 10x + 6y + 9 = 0",
      hideAxes: false,
      hideGrid: false,
      hideTicks: false,
      xRange: [-1, 11],
      yRange: [-9, 3],
      textAnnotations: [
        { x: 5, y: -3, text: "Center (h, k) = x", color: "#ea580c", fontWeight: "bold" },
        { x: 7.5, y: -3, text: "Radius r = x", color: "#3b82f6", fontWeight: "bold" }
      ],
      curves: [
        { type: "circle", circle: { cx: 5, cy: -3, r: 5 }, color: "#3b82f6" },
        { type: "line", color: "#ea580c", points: [[5, -3], [10, -3]] }
      ]
    }
  },
  {
    id: "ch7-ex-q92",
    number: 92,
    exerciseNumber: 4,
    exerciseTitle: "Exercise 4: Advanced Geometry, Coordinate Circles & Hard Trig",
    question: "In a right triangle ABC, angle C is 90°. If sin(A) = 5/13, what is the value of cos(B)?",
    options: ["5/13", "12/13", "13/5", "5/12"],
    correctIndex: 0,
    correctAnswerText: "5/13",
    explanation: `Step-by-Step Mathematical Explanation:
1. Recall the Complementary Angle Trigonometric Identity:
   $$\\sin(A) = \\cos(90^\\circ - A)$$
2. In right triangle ABC with $\\angle C = 90^\\circ$, angles A and B are complementary, so $B = 90^\\circ - A$.
3. Therefore:
   $$\\cos(B) = \\sin(A) = \\frac{5}{13}$$

Distractor Analysis:
- Option A (5/13): CORRECT. By identity $\\cos(B) = \\sin(A)$.
- Option B (12/13): Value of $\\cos(A)$ or $\\sin(B)$.
- Option C (13/5): Reciprocal $\\csc(A)$.
- Option D (5/12): Value of $\\tan(A)$.`,
    diagram: {
      title: "Right Triangle ABC with Complementary Angles A and B",
      hideAxes: true,
      hideGrid: true,
      hideTicks: true,
      xRange: [0, 14],
      yRange: [0, 6],
      textAnnotations: [
        { x: 6, y: 1.5, text: "Adj to A / Opp to B", color: "#475569" },
        { x: 0.5, y: 2.5, text: "Opp to A / Adj to B = 5", color: "#3b82f6" },
        { x: 6.5, y: 3, text: "Hyp = 13", color: "#ea580c", fontWeight: "bold" }
      ],
      angleArcs: [
        { center: [12, 1], radius: 1.2, startAngle: 155, endAngle: 180, color: "#3b82f6", label: "A" },
        { center: [1, 5], radius: 1.2, startAngle: 270, endAngle: 335, color: "#16a34a", label: "B" }
      ],
      curves: [
        { type: "line", color: "#3b82f6", points: [[1, 1], [12, 1], [1, 5], [1, 1]] }
      ]
    }
  },
  {
    id: "ch7-ex-q93",
    number: 93,
    exerciseNumber: 4,
    exerciseTitle: "Exercise 4: Advanced Geometry, Coordinate Circles & Hard Trig",
    question: "A sector of a circle with radius 12 inches has a central angle of 120°. What is the area of the sector in square inches?",
    options: ["16π", "24π", "48π", "144π"],
    correctIndex: 2,
    correctAnswerText: "48π",
    explanation: `Step-by-Step Mathematical Explanation:
1. Formula for the Area of a Circle Sector:
   $$\\text{Area} = \\frac{\\theta}{360^\\circ} \\cdot \\pi r^2$$
2. Substitute $\\theta = 120^\\circ$ and $r = 12$:
   $$\\text{Area} = \\frac{120^\\circ}{360^\\circ} \\cdot \\pi (12)^2 = \\frac{1}{3} \\cdot \\pi (144) = 48\\pi\\text{ sq in}$$

Distractor Analysis:
- Option A (16π): Calculated arc length ($120/360 \\times 2\\pi \\times 12 = 8\\pi$) squared incorrectly or divided by 3 twice.
- Option B (24π): Arithmetic error ($144 / 6$).
- Option C (48π): CORRECT. $\\frac{1}{3} \\times 144\\pi = 48\\pi$.
- Option D (144π): Area of the entire circle without fractioning.`,
    diagram: {
      title: "Sector with Central Angle 120° and Radius 12",
      hideAxes: true,
      hideGrid: true,
      hideTicks: true,
      xRange: [-14, 14],
      yRange: [-14, 14],
      textAnnotations: [
        { x: 0, y: 0, text: "O", color: "#1e293b", fontWeight: "bold" },
        { x: 6, y: 2, text: "r = 12", color: "#ea580c" },
        { x: -3, y: 5, text: "Sector Area = x", color: "#3b82f6", fontWeight: "bold" }
      ],
      angleArcs: [
        { center: [0, 0], radius: 2.5, startAngle: 0, endAngle: 120, color: "#3b82f6", label: "120°" }
      ],
      curves: [
        { type: "circle", circle: { cx: 0, cy: 0, r: 12 }, color: "#cbd5e1" },
        { type: "line", color: "#ea580c", points: [[0, 0], [12, 0]] },
        { type: "line", color: "#ea580c", points: [[0, 0], [-6, 10.39]] }
      ]
    }
  },
  {
    id: "ch7-ex-q94",
    number: 94,
    exerciseNumber: 4,
    exerciseTitle: "Exercise 4: Advanced Geometry, Coordinate Circles & Hard Trig",
    question: "A rectangular pyramid has a base with length 9 cm and width 4 cm. If the height of the pyramid is 10 cm, what is its volume in cubic centimeters?",
    options: ["120", "180", "240", "360"],
    correctIndex: 0,
    correctAnswerText: "120",
    explanation: `Step-by-Step Mathematical Explanation:
1. Formula for Pyramid Volume:
   $$V = \\frac{1}{3} \\cdot B \\cdot h$$
   where $B$ is base area = $\\text{length} \\times \\text{width}$.
2. Compute base area $B$:
   $$B = 9 \\times 4 = 36\\text{ cm}^2$$
3. Compute total volume:
   $$V = \\frac{1}{3} \\times 36 \\times 10 = 12 \\times 10 = 120\\text{ cm}^3$$

Distractor Analysis:
- Option A (120): CORRECT. $\\frac{1}{3} \\times (9 \\times 4) \\times 10 = 120$.
- Option B (180): Divided by 2 instead of 3.
- Option C (240): Used $2/3$ factor.
- Option D (360): Prism volume ($B \\times h$) without $1/3$ factor.`,
    diagram: {
      title: "Rectangular Pyramid",
      hideAxes: true,
      hideGrid: true,
      hideTicks: true,
      xRange: [-6, 6],
      yRange: [0, 10],
      textAnnotations: [
        { x: 0, y: 1.5, text: "9 cm x 4 cm Base", color: "#475569" },
        { x: 0.8, y: 4.5, text: "h = 10 cm", color: "#ea580c", fontWeight: "bold" },
        { x: -2.5, y: 7, text: "Volume V = x", color: "#3b82f6", fontWeight: "bold" }
      ],
      curves: [
        { type: "line", color: "#475569", points: [[-4, 1], [2, 1], [4, 2.5], [-2, 2.5], [-4, 1]] },
        { type: "line", color: "#3b82f6", points: [[-4, 1], [0, 9], [2, 1]] },
        { type: "line", color: "#3b82f6", points: [[4, 2.5], [0, 9]] },
        { type: "line", color: "#ea580c", points: [[0, 1.75], [0, 9]] }
      ]
    }
  },
  {
    id: "ch7-ex-q95",
    number: 95,
    exerciseNumber: 4,
    exerciseTitle: "Exercise 4: Advanced Geometry, Coordinate Circles & Hard Trig",
    question: "If an angle measures 5π/4 radians, what is its degree measure?",
    options: ["135°", "225°", "240°", "315°"],
    correctIndex: 1,
    correctAnswerText: "225°",
    explanation: `Step-by-Step Mathematical Explanation:
1. Convert radians to degrees by multiplying by $\\frac{180^\\circ}{\\pi}$:
   $$\\text{Degrees} = \\frac{5\\pi}{4} \\times \\frac{180^\\circ}{\\pi}$$
2. Simplify the calculation:
   $$\\text{Degrees} = 5 \\times \\frac{180^\\circ}{4} = 5 \\times 45^\\circ = 225^\\circ$$

Distractor Analysis:
- Option A (135°): Corresponds to $3\\pi/4$.
- Option B (225°): CORRECT. $5 \\times 45^\\circ = 225^\\circ$.
- Option C (240°): Corresponds to $4\\pi/3$.
- Option D (315°): Corresponds to $7\\pi/4$.`,
    diagram: {
      title: "Unit Circle Angle 5π/4 Radians",
      hideAxes: false,
      hideGrid: true,
      hideTicks: true,
      xRange: [-2, 2],
      yRange: [-2, 2],
      textAnnotations: [
        { x: -0.9, y: -0.9, text: "5π/4 radians = x°", color: "#3b82f6", fontWeight: "bold" }
      ],
      angleArcs: [
        { center: [0, 0], radius: 0.6, startAngle: 0, endAngle: 225, color: "#3b82f6", label: "x°" }
      ],
      curves: [
        { type: "circle", circle: { cx: 0, cy: 0, r: 1.5 }, color: "#cbd5e1" },
        { type: "line", color: "#3b82f6", points: [[0, 0], [-1.06, -1.06]] }
      ]
    }
  },
  {
    id: "ch7-ex-q96",
    number: 96,
    exerciseNumber: 4,
    exerciseTitle: "Exercise 4: Advanced Geometry, Coordinate Circles & Hard Trig",
    question: "In the coordinate plane, line L passes through points (1, 2) and (5, 10). Line K is perpendicular to Line L and passes through (5, 10). What is the equation of Line K?",
    options: ["y = -1/2 x + 25/2", "y = -2x + 20", "y = 2x", "y = -1/2 x + 10"],
    correctIndex: 0,
    correctAnswerText: "y = -1/2 x + 25/2",
    explanation: `Step-by-Step Mathematical Explanation:
1. Find slope $m_L$ of Line L:
   $$m_L = \\frac{10 - 2}{5 - 1} = \\frac{8}{4} = 2$$
2. Since Line K is perpendicular to Line L, its slope $m_K$ is the negative reciprocal:
   $$m_K = -\\frac{1}{m_L} = -\\frac{1}{2}$$
3. Use point-slope form for Line K passing through $(5, 10)$:
   $$y - 10 = -\\frac{1}{2}(x - 5)$$
   $$y - 10 = -\\frac{1}{2}x + \\frac{5}{2}$$
   $$y = -\\frac{1}{2}x + \\frac{25}{2}$$

Distractor Analysis:
- Option A (y = -1/2 x + 25/2): CORRECT.
- Option B (y = -2x + 20): Used $-2$ instead of $-1/2$ for perpendicular slope.
- Option C (y = 2x): Equation of Line L itself.
- Option D (y = -1/2 x + 10): Incorrect y-intercept addition ($10 - 5/2 = 15/2$ error).`,
    diagram: {
      title: "Perpendicular Lines L and K",
      hideAxes: false,
      hideGrid: false,
      hideTicks: false,
      xRange: [0, 10],
      yRange: [0, 15],
      textAnnotations: [
        { x: 5, y: 10.5, text: "(5, 10)", color: "#ea580c", fontWeight: "bold" },
        { x: 2, y: 5, text: "Line L (m = 2)", color: "#3b82f6" },
        { x: 7, y: 8, text: "Line K (Slope m = ?)", color: "#16a34a" }
      ],
      curves: [
        { type: "line", color: "#3b82f6", points: [[0, 0], [6, 12]] },
        { type: "line", color: "#16a34a", points: [[0, 12.5], [10, 7.5]] }
      ]
    }
  },
  {
    id: "ch7-ex-q97",
    number: 97,
    exerciseNumber: 4,
    exerciseTitle: "Exercise 4: Advanced Geometry, Coordinate Circles & Hard Trig",
    question: "A cone has radius 6 cm and slant height 10 cm. What is the total surface area of the cone including its circular base?",
    options: ["60π", "80π", "96π", "136π"],
    correctIndex: 2,
    correctAnswerText: "96π",
    explanation: `Step-by-Step Mathematical Explanation:
1. Formula for Total Surface Area of a Cone:
   $$A_{\\text{total}} = \\pi r^2 + \\pi r l$$
   where $r = 6$ cm (radius) and $l = 10$ cm (slant height).
2. Base Area:
   $$A_{\\text{base}} = \\pi (6)^2 = 36\\pi$$
3. Lateral Surface Area:
   $$A_{\\text{lateral}} = \\pi (6)(10) = 60\\pi$$
4. Sum total surface area:
   $$A_{\\text{total}} = 36\\pi + 60\\pi = 96\\pi\\text{ cm}^2$$

Distractor Analysis:
- Option A (60π): Only lateral surface area $(\\pi r l)$.
- Option B (80π): Arithmetic error.
- Option C (96π): CORRECT. $36\\pi + 60\\pi = 96\\pi$.
- Option D (136π): Used vertical height $h = 8$ incorrectly in base addition.`,
    diagram: {
      title: "Cone with Radius 6 cm and Slant Height 10 cm",
      hideAxes: true,
      hideGrid: true,
      hideTicks: true,
      xRange: [-8, 8],
      yRange: [0, 10],
      textAnnotations: [
        { x: 0, y: 1.5, text: "r = 6 cm", color: "#ea580c" },
        { x: 3.5, y: 4.5, text: "Slant l = 10 cm", color: "#3b82f6", fontWeight: "bold" },
        { x: -5, y: 7, text: "Total Surface Area = x", color: "#16a34a", fontWeight: "bold" }
      ],
      curves: [
        { type: "ellipse", ellipse: { cx: 0, cy: 1, rx: 6, ry: 1.2 }, color: "#cbd5e1" },
        { type: "line", color: "#3b82f6", points: [[-6, 1], [0, 9]] },
        { type: "line", color: "#3b82f6", points: [[6, 1], [0, 9]] },
        { type: "line", color: "#ea580c", points: [[0, 1], [6, 1]] }
      ]
    }
  },
  {
    id: "ch7-ex-q98",
    number: 98,
    exerciseNumber: 4,
    exerciseTitle: "Exercise 4: Advanced Geometry, Coordinate Circles & Hard Trig",
    question: "In quadrilateral ABCD, angles A, B, and C measure 85°, 110°, and 95° respectively. What is the measure of angle D?",
    options: ["70°", "80°", "90°", "100°"],
    correctIndex: 0,
    correctAnswerText: "70°",
    explanation: `Step-by-Step Mathematical Explanation:
1. The sum of interior angles in any four-sided polygon (quadrilateral) is:
   $$(n - 2) \\times 180^\\circ = (4 - 2) \\times 180^\\circ = 360^\\circ$$
2. Sum given angles:
   $$85^\\circ + 110^\\circ + 95^\\circ = 290^\\circ$$
3. Subtract from $360^\\circ$:
   $$\\angle D = 360^\\circ - 290^\\circ = 70^\\circ$$

Distractor Analysis:
- Option A (70°): CORRECT. $360 - 290 = 70^\circ$.
- Option B (80°): Arithmetic calculation error ($360 - 280$).
- Option C (90°): Assumed quadrilateral is right-angled.
- Option D (100°): Added incorrectly.`,
    diagram: {
      title: "Quadrilateral ABCD Interior Angles",
      hideAxes: true,
      hideGrid: true,
      hideTicks: true,
      xRange: [0, 10],
      yRange: [0, 8],
      textAnnotations: [
        { x: 1, y: 2.1, text: "A = 85°", color: "#475569" },
        { x: 8, y: 2.1, text: "B = 110°", color: "#475569" },
        { x: 7, y: 6, text: "C = 95°", color: "#475569" },
        { x: 2, y: 6, text: "Angle D = x", color: "#3b82f6", fontWeight: "bold" }
      ],
      curves: [
        { type: "line", color: "#3b82f6", points: [[1.5, 1.5], [8.5, 1.5], [6.5, 5.5], [2.5, 5.5], [1.5, 1.5]] }
      ]
    }
  },
  {
    id: "ch7-ex-q99",
    number: 99,
    exerciseNumber: 4,
    exerciseTitle: "Exercise 4: Advanced Geometry, Coordinate Circles & Hard Trig",
    question: "Triangle PQR is similar to Triangle STU. The area of Triangle PQR is 18 square inches, and the area of Triangle STU is 72 square inches. If side PQ has length 5 inches, what is the length of side ST?",
    options: ["10", "15", "20", "25"],
    correctIndex: 0,
    correctAnswerText: "10",
    explanation: `Step-by-Step Mathematical Explanation:
1. For similar figures, the ratio of areas equals the square of the ratio of corresponding side lengths:
   $$\\frac{\\text{Area}_{STU}}{\\text{Area}_{PQR}} = \\left(\\frac{ST}{PQ}\\right)^2$$
2. Substitute given values:
   $$\\frac{72}{18} = 4 = \\left(\\frac{ST}{5}\\right)^2$$
3. Take the square root of both sides:
   $$\\frac{ST}{5} = \\sqrt{4} = 2 \\implies ST = 5 \\times 2 = 10\\text{ inches}$$

Distractor Analysis:
- Option A (10): CORRECT. Scale factor for sides is $\\sqrt{4} = 2$.
- Option B (15): Multiplied side length by 3.
- Option C (20): Used area ratio 4 directly without taking square root ($5 \\times 4 = 20$).
- Option D (25): Squared side length.`,
    diagram: {
      title: "Similar Triangles PQR and STU",
      hideAxes: true,
      hideGrid: true,
      hideTicks: true,
      xRange: [0, 12],
      yRange: [0, 8],
      textAnnotations: [
        { x: 1.5, y: 1.5, text: "PQ = 5", color: "#475569" },
        { x: 1.5, y: 2, text: "Area = 18", color: "#475569" },
        { x: 7.5, y: 1.5, text: "ST = x", color: "#3b82f6", fontWeight: "bold" },
        { x: 7.5, y: 3.5, text: "Area = 72", color: "#3b82f6", fontWeight: "bold" }
      ],
      curves: [
        { type: "line", color: "#475569", points: [[0.5, 1], [3.5, 1], [1.5, 4], [0.5, 1]] },
        { type: "line", color: "#3b82f6", points: [[5.5, 1], [11.5, 1], [7.5, 7], [5.5, 1]] }
      ]
    }
  },
  {
    id: "ch7-ex-q100",
    number: 100,
    exerciseNumber: 4,
    exerciseTitle: "Exercise 4: Advanced Geometry, Coordinate Circles & Hard Trig",
    question: "A circle with center O has a chord AB of length 16 cm. If the distance from center O to the midpoint of chord AB is 6 cm, what is the radius of the circle?",
    options: ["8", "10", "12", "14"],
    correctIndex: 1,
    correctAnswerText: "10",
    explanation: `Step-by-Step Mathematical Explanation:
1. The perpendicular segment from the center of a circle to a chord bisects the chord.
2. Therefore, half of chord AB is:
   $$\\frac{16}{2} = 8\\text{ cm}$$
3. The distance from the center to the chord (6 cm), half the chord length (8 cm), and the radius r form a right triangle:
   $$r^2 = 6^2 + 8^2$$
   $$r^2 = 36 + 64 = 100 \\implies r = 10\\text{ cm}$$

Distractor Analysis:
- Option A (8): Half chord length.
- Option B (10): CORRECT. Recognized (6-8-10) right triangle.
- Option C (12): Added distance and half chord ($6 + 6$).
- Option D (14): Added distance and half chord ($6 + 8 = 14$).`,
    diagram: {
      title: "Circle O with Chord AB",
      hideAxes: true,
      hideGrid: true,
      hideTicks: true,
      xRange: [-12, 12],
      yRange: [-12, 12],
      textAnnotations: [
        { x: 0, y: 1, text: "O", color: "#1e293b", fontWeight: "bold" },
        { x: 0.5, y: -2.5, text: "d = 6", color: "#ea580c" },
        { x: -4, y: -7, text: "Chord AB = 16 cm", color: "#475569" },
        { x: -5, y: -2, text: "Radius r = x", color: "#3b82f6", fontWeight: "bold" }
      ],
      curves: [
        { type: "circle", circle: { cx: 0, cy: 0, r: 10 }, color: "#cbd5e1" },
        { type: "line", color: "#475569", points: [[-8, -6], [8, -6]] },
        { type: "line", color: "#ea580c", points: [[0, 0], [0, -6]] },
        { type: "line", color: "#3b82f6", points: [[0, 0], [-8, -6]] }
      ]
    }
  },
  {
    id: "ch7-ex-q101",
    number: 101,
    exerciseNumber: 4,
    exerciseTitle: "Exercise 4: Advanced Geometry, Coordinate Circles & Hard Trig",
    question: "In the xy-plane, point A has coordinates (2, 3) and point B has coordinates (8, 11). What is the distance between points A and B?",
    options: ["6","10","12","16"],
    correctIndex: 1,
    correctAnswerText: "10",
    explanation: `Step-by-Step Mathematical Explanation:
1. Distance Formula:
   $$d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$$
2. Substitute coordinates $(2, 3)$ and $(8, 11)$:
   $$d = \\sqrt{(8 - 2)^2 + (11 - 3)^2} = \\sqrt{6^2 + 8^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10$$

Distractor Analysis:
- Option A (8): Difference in y-coordinates ($11 - 3$).
- Option B (10): CORRECT. $\\sqrt{6^2 + 8^2} = 10$.
- Option C (12): Arithmetic sum.
- Option D (14): Sum of differences ($6 + 8$).`,
    diagram: {
      title: "Distance Between Points A(2, 3) and B(8, 11)",
      hideAxes: false,
      hideGrid: false,
      hideTicks: false,
      xRange: [0, 10],
      yRange: [0, 13],
      textAnnotations: [
        { x: 2, y: 3.5, text: "A (2,3)", color: "#ea580c" },
        { x: 8, y: 11.5, text: "B (8,11)", color: "#ea580c" },
        { x: 4.5, y: 8, text: "Distance d = x", color: "#3b82f6", fontWeight: "bold" }
      ],
      curves: [
        { type: "line", color: "#3b82f6", points: [[2, 3], [8, 11]] },
        { type: "line", color: "#cbd5e1", points: [[2, 3], [8, 3], [8, 11]] }
      ]
    }
  },
  {
    id: "ch7-ex-q102",
    number: 102,
    exerciseNumber: 4,
    exerciseTitle: "Exercise 4: Advanced Geometry, Coordinate Circles & Hard Trig",
    question: "A regular hexagon has a side length of 6 cm. What is the area of the hexagon in square centimeters?",
    options: ["36√3", "54√3", "72√3", "108"],
    correctIndex: 1,
    correctAnswerText: "54√3",
    explanation: `Step-by-Step Mathematical Explanation:
1. A regular hexagon is made of 6 congruent equilateral triangles with side $s = 6$.
2. Formula for Area of 1 Equilateral Triangle:
   $$A_1 = \\frac{s^2\\sqrt{3}}{4} = \\frac{6^2\\sqrt{3}}{4} = \\frac{36\\sqrt{3}}{4} = 9\\sqrt{3}$$
3. Multiply by 6 for the entire hexagon:
   $$A_{\\text{hexagon}} = 6 \\times 9\\sqrt{3} = 54\\sqrt{3}\\text{ cm}^2$$

Distractor Analysis:
- Option A (36√3): Area of 4 equilateral triangles instead of 6.
- Option B (54√3): CORRECT. $6 \\times 9\\sqrt{3} = 54\\sqrt{3}$.
- Option C (72√3): Area of 8 equilateral triangles.
- Option D (108): Forgot $\\sqrt{3}$ factor ($6 \\times 18$).`,
    diagram: {
      title: "Regular Hexagon with Side Length 6 cm",
      hideAxes: true,
      hideGrid: true,
      hideTicks: true,
      xRange: [-8, 8],
      yRange: [-8, 8],
      textAnnotations: [
        { x: 0, y: 0, text: "6 Equilateral Triangles", color: "#3b82f6", fontWeight: "bold" },
        { x: 3, y: 5.5, text: "s = 6", color: "#ea580c" }
      ],
      curves: [
        { type: "line", color: "#3b82f6", points: [[6, 0], [3, 5.2], [-3, 5.2], [-6, 0], [-3, -5.2], [3, -5.2], [6, 0]] }
      ]
    }
  },
  {
    id: "ch7-ex-q103",
    number: 103,
    exerciseNumber: 4,
    exerciseTitle: "Exercise 4: Advanced Geometry, Coordinate Circles & Hard Trig",
    question: "If cos(θ) = 4/5 and θ is an acute angle, what is the value of tan(θ)?",
    options: ["3/5", "3/4", "4/3", "5/3"],
    correctIndex: 1,
    correctAnswerText: "3/4",
    explanation: `Step-by-Step Mathematical Explanation:
1. Draw or visualize a right triangle with acute angle $\\theta$:
   - $\\cos(\\theta) = \\frac{\\text{Adjacent}}{\\text{Hypotenuse}} = \\frac{4}{5}$
2. Find Opposite side using Pythagorean Theorem:
   $$\\text{Opp}^2 = 5^2 - 4^2 = 25 - 16 = 9 \\implies \\text{Opp} = 3$$
3. Compute $\\tan(\\theta)$:
   $$\\tan(\\theta) = \\frac{\\text{Opposite}}{\\text{Adjacent}} = \\frac{3}{4}$$

Distractor Analysis:
- Option A (3/5): Value of $\\sin(\\theta)$.
- Option B (3/4): CORRECT. $\\text{Opp}/\\text{Adj} = 3/4$.
- Option C (4/3): Reciprocal $\\cot(\\theta)$.
- Option D (5/3): Reciprocal $\\sec(\\theta)$.`,
    diagram: {
      title: "Right Triangle with Acute Angle θ",
      hideAxes: true,
      hideGrid: true,
      hideTicks: true,
      xRange: [0, 6],
      yRange: [0, 5],
      textAnnotations: [
        { x: 2, y: 1, text: "Adj = 4", color: "#475569" },
        { x: 4.3, y: 1.5, text: "Opp = x", color: "#3b82f6", fontWeight: "bold" },
        { x: 2, y: 2.2, text: "Hyp = 5", color: "#ea580c" }
      ],
      angleArcs: [
        { center: [0.5, 0.5], radius: 0.8, startAngle: 0, endAngle: 37, color: "#3b82f6", label: "θ" }
      ],
      curves: [
        { type: "line", color: "#3b82f6", points: [[0.5, 0.5], [4.5, 0.5], [4.5, 3.5], [0.5, 0.5]] }
      ]
    }
  },
  {
    id: "ch7-ex-q104",
    number: 104,
    exerciseNumber: 4,
    exerciseTitle: "Exercise 4: Advanced Geometry, Coordinate Circles & Hard Trig",
    question: "A right circular cylinder and a right circular cone have equal radii and equal heights. What is the ratio of the volume of the cone to the volume of the cylinder?",
    options: ["1 : 3", "1 : 2", "2 : 3", "3 : 1"],
    correctIndex: 0,
    correctAnswerText: "1 : 3",
    explanation: `Step-by-Step Mathematical Explanation:
1. Cylinder Volume Formula: $V_{\\text{cyl}} = \\pi r^2 h$.
2. Cone Volume Formula: $V_{\\text{cone}} = \\frac{1}{3} \\pi r^2 h$.
3. Compute ratio of Cone to Cylinder volume:
   $$\\frac{V_{\\text{cone}}}{V_{\\text{cyl}}} = \\frac{\\frac{1}{3}\\pi r^2 h}{\\pi r^2 h} = \\frac{1}{3}$$
4. Expressed as a ratio: $1 : 3$.

Distractor Analysis:
- Option A (1 : 3): CORRECT.
- Option B (1 : 2): Misremembered $1/2$ coefficient.
- Option C (2 : 3): Incorrect ratio.
- Option D (3 : 1): Inverted ratio of Cylinder to Cone.`,
    diagram: {
      title: "Cone and Cylinder with Same Base Radius and Height",
      hideAxes: true,
      hideGrid: true,
      hideTicks: true,
      xRange: [0, 10],
      yRange: [0, 8],
      textAnnotations: [
        { x: 2, y: 7.2, text: "Cone Volume = V1", color: "#3b82f6", fontWeight: "bold" },
        { x: 7, y: 7.2, text: "Cylinder Volume = V2", color: "#ea580c", fontWeight: "bold" }
      ],
      curves: [
        { type: "ellipse", ellipse: { cx: 2, cy: 1.5, rx: 1.5, ry: 0.5 }, color: "#cbd5e1" },
        { type: "line", color: "#3b82f6", points: [[0.5, 1.5], [2, 6]] },
        { type: "line", color: "#3b82f6", points: [[3.5, 1.5], [2, 6]] },
        { type: "ellipse", ellipse: { cx: 7, cy: 6, rx: 1.5, ry: 0.5 }, color: "#cbd5e1" },
        { type: "ellipse", ellipse: { cx: 7, cy: 1.5, rx: 1.5, ry: 0.5 }, color: "#cbd5e1" },
        { type: "line", color: "#ea580c", points: [[5.5, 1.5], [5.5, 6]] },
        { type: "line", color: "#ea580c", points: [[8.5, 1.5], [8.5, 6]] }
      ]
    }
  },
  {
    id: "ch7-ex-q105",
    number: 105,
    exerciseNumber: 4,
    exerciseTitle: "Exercise 4: Advanced Geometry, Coordinate Circles & Hard Trig",
    question: "In circle O, central angle AOC measures 100°. B is a point on the major arc AC. What is the measure of inscribed angle ABC?",
    options: ["50°", "100°", "130°", "200°"],
    correctIndex: 0,
    correctAnswerText: "50°",
    explanation: `Step-by-Step Mathematical Explanation:
1. Inscribed Angle Theorem: An angle inscribed in a circle is exactly half the measure of its intercepted arc (or half the central angle subtending the same arc).
2. Given central angle $\\angle AOC = 100^\\circ$:
   $$\\angle ABC = \\frac{1}{2} \\cdot \\angle AOC = \\frac{1}{2} \\cdot 100^\\circ = 50^\\circ$$

Distractor Analysis:
- Option A (50°): CORRECT. $100 / 2 = 50^\circ$.
- Option B (100°): Confused inscribed angle with central angle.
- Option C (130°): Supplementary angle calculation error ($180 - 50$).
- Option D (200°): Doubled instead of halving ($100 \\times 2$).`,
    diagram: {
      title: "Circle O with Central Angle AOC and Inscribed Angle ABC",
      hideAxes: true,
      hideGrid: true,
      hideTicks: true,
      xRange: [-8, 8],
      yRange: [-8, 8],
      textAnnotations: [
        { x: 0, y: -0.8, text: "O", color: "#1e293b", fontWeight: "bold" },
        { x: -5.4, y: 4.3, text: "A", color: "#1e293b", fontWeight: "bold" },
        { x: 5.4, y: 4.3, text: "C", color: "#1e293b", fontWeight: "bold" },
        { x: 0, y: -7.0, text: "B", color: "#1e293b", fontWeight: "bold" }
      ],
      angleArcs: [
        { center: [0, 0], radius: 1.5, startAngle: 40, endAngle: 140, color: "#ea580c", label: "100°" },
        { center: [0, -6], radius: 2.2, startAngle: 65, endAngle: 115, color: "#3b82f6", label: "x°" }
      ],
      curves: [
        { type: "circle", circle: { cx: 0, cy: 0, r: 6 }, color: "#cbd5e1" },
        { type: "line", color: "#ea580c", points: [[0, 0], [-4.6, 3.86]], strokeWidth: 2 },
        { type: "line", color: "#ea580c", points: [[0, 0], [4.6, 3.86]], strokeWidth: 2 },
        { type: "line", color: "#3b82f6", points: [[-4.6, 3.86], [0, -6], [4.6, 3.86]], strokeWidth: 2 }
      ]
    }
  },
  {
    id: "ch7-ex-q106",
    number: 106,
    exerciseNumber: 4,
    exerciseTitle: "Exercise 4: Advanced Geometry, Coordinate Circles & Hard Trig",
    question: "A line segment has endpoints P(1, -2) and Q(9, 6). What are the coordinates of the midpoint M of line segment PQ?",
    options: ["(5, 2)", "(4, 4)", "(5, 4)", "(8, 8)"],
    correctIndex: 0,
    correctAnswerText: "(5, 2)",
    explanation: `Step-by-Step Mathematical Explanation:
1. Midpoint Formula:
   $$M = \\left(\\frac{x_1 + x_2}{2}, \\frac{y_1 + y_2}{2}\\right)$$
2. Substitute coordinates $(1, -2)$ and $(9, 6)$:
   $$M_x = \\frac{1 + 9}{2} = \\frac{10}{2} = 5$$
   $$M_y = \\frac{-2 + 6}{2} = \\frac{4}{2} = 2$$
3. Midpoint $M = (5, 2)$.

Distractor Analysis:
- Option A ((5, 2)): CORRECT.
- Option B ((4, 4)): Subtracted instead of adding x-coordinates ($9 - 1 = 8/2 = 4$).
- Option C ((5, 4)): Added y-coordinates incorrectly.
- Option D ((8, 8)): Subtracted coordinates directly.`,
    diagram: {
      title: "Line Segment PQ Midpoint",
      hideAxes: false,
      hideGrid: false,
      hideTicks: false,
      xRange: [0, 10],
      yRange: [-4, 8],
      textAnnotations: [
        { x: 1, y: -2.8, text: "P(1, -2)", color: "#ea580c" },
        { x: 9, y: 6.8, text: "Q(9, 6)", color: "#ea580c" },
        { x: 5, y: 2.8, text: "Midpoint M = x", color: "#3b82f6", fontWeight: "bold" }
      ],
      curves: [
        { type: "line", color: "#3b82f6", points: [[1, -2], [9, 6]] }
      ]
    }
  },
  {
    id: "ch7-ex-q107",
    number: 107,
    exerciseNumber: 4,
    exerciseTitle: "Exercise 4: Advanced Geometry, Coordinate Circles & Hard Trig",
    question: "The area of a circle is 81π square centimeters. What is the circumference of the circle in centimeters?",
    options: ["9π", "18π", "36π", "81π"],
    correctIndex: 1,
    correctAnswerText: "18π",
    explanation: `Step-by-Step Mathematical Explanation:
1. Use circle area formula $A = \\pi r^2 = 81\\pi$:
   $$r^2 = 81 \\implies r = 9\\text{ cm}$$
2. Calculate circumference $C = 2\\pi r$:
   $$C = 2\\pi (9) = 18\\pi\\text{ cm}$$

Distractor Analysis:
- Option A (9π): Used $\\pi r$ without multiplying by 2.
- Option B (18π): CORRECT. $2 \\times 9\\pi = 18\\pi$.
- Option C (36π): Doubled radius incorrectly.
- Option D (81π): Confused circumference with area.`,
    diagram: {
      title: "Circle with Area 81π cm²",
      hideAxes: true,
      hideGrid: true,
      hideTicks: true,
      xRange: [-10, 10],
      yRange: [-10, 10],
      textAnnotations: [
        { x: 0, y: 1, text: "Area = 81π", color: "#3b82f6", fontWeight: "bold" },
        { x: 4, y: -1, text: "Radius r = x", color: "#ea580c" },
        { x: 0, y: -6, text: "Circumference = x", color: "#16a34a", fontWeight: "bold" }
      ],
      curves: [
        { type: "circle", circle: { cx: 0, cy: 0, r: 8 }, color: "#3b82f6" },
        { type: "line", color: "#ea580c", points: [[0, 0], [8, 0]] }
      ]
    }
  },
  {
    id: "ch7-ex-q108",
    number: 108,
    exerciseNumber: 4,
    exerciseTitle: "Exercise 4: Advanced Geometry, Coordinate Circles & Hard Trig",
    question: "A sphere has a volume of 288π cubic units. What is the radius of the sphere?",
    options: ["4", "6", "8", "12"],
    correctIndex: 1,
    correctAnswerText: "6",
    explanation: `Step-by-Step Mathematical Explanation:
1. Formula for Sphere Volume:
   $$V = \\frac{4}{3} \\pi r^3$$
2. Set equal to $288\\pi$:
   $$\\frac{4}{3} \\pi r^3 = 288\\pi$$
3. Divide by $\\pi$ and solve for $r^3$:
   $$\\frac{4}{3} r^3 = 288 \\implies r^3 = 288 \\times \\frac{3}{4} = 72 \\times 3 = 216$$
4. Take the cube root:
   $$r = \\sqrt[3]{216} = 6$$

Distractor Analysis:
- Option A (4): $4^3 = 64$.
- Option B (6): CORRECT. $6^3 = 216$.
- Option C (8): $8^3 = 512$.
- Option D (12): Took square root of 144 instead of cube root.`,
    diagram: {
      title: "Sphere with Volume 288π",
      hideAxes: true,
      hideGrid: true,
      hideTicks: true,
      xRange: [-8, 8],
      yRange: [-8, 8],
      textAnnotations: [
        { x: 0, y: 1, text: "Volume = 288π", color: "#3b82f6", fontWeight: "bold" },
        { x: 3, y: -1, text: "Radius r = x", color: "#ea580c", fontWeight: "bold" }
      ],
      curves: [
        { type: "circle", circle: { cx: 0, cy: 0, r: 6 }, color: "#3b82f6" },
        { type: "ellipse", ellipse: { cx: 0, cy: 0, rx: 6, ry: 1.8 }, color: "#cbd5e1" },
        { type: "line", color: "#ea580c", points: [[0, 0], [6, 0]] }
      ]
    }
  },
  {
    id: "ch7-ex-q109",
    number: 109,
    exerciseNumber: 4,
    exerciseTitle: "Exercise 4: Advanced Geometry, Coordinate Circles & Hard Trig",
    question: "If sin(x°) = 0.6 and cos(x°) = 0.8, what is the value of tan(x°)?",
    options: ["0.48", "0.75", "1.33", "1.4"],
    correctIndex: 1,
    correctAnswerText: "0.75",
    explanation: `Step-by-Step Mathematical Explanation:
1. Apply the Quotient Trigonometric Identity:
   $$\\tan(x^\\circ) = \\frac{\\sin(x^\\circ)}{\\cos(x^\\circ)}$$
2. Substitute given values:
   $$\\tan(x^\\circ) = \\frac{0.6}{0.8} = \\frac{6}{8} = 0.75$$

Distractor Analysis:
- Option A (0.48): Product $\\sin \\times \\cos = 0.6 \\times 0.8$.
- Option B (0.75): CORRECT. $0.6 / 0.8 = 0.75$.
- Option C (1.33): Reciprocal $\\cos / \\sin = 0.8 / 0.6$.
- Option D (1.4): Sum $\\sin + \\cos = 0.6 + 0.8$.`,
    diagram: {
      title: "Right Triangle with sin(x) = 0.6 and cos(x) = 0.8",
      hideAxes: true,
      hideGrid: true,
      hideTicks: true,
      xRange: [0, 6],
      yRange: [0, 5],
      textAnnotations: [
        { x: 2, y: 1, text: "cos = 0.8", color: "#475569" },
        { x: 4.3, y: 1.5, text: "sin = 0.6", color: "#3b82f6" },
        { x: 1.5, y: 2.2, text: "tan(x°) = x", color: "#ea580c", fontWeight: "bold" }
      ],
      curves: [
        { type: "line", color: "#3b82f6", points: [[0.5, 0.5], [4.5, 0.5], [4.5, 3.5], [0.5, 0.5]] }
      ]
    }
  },
  {
    id: "ch7-ex-q110",
    number: 110,
    exerciseNumber: 4,
    exerciseTitle: "Exercise 4: Advanced Geometry, Coordinate Circles & Hard Trig",
    question: "A cube has a total surface area of 150 square inches. What is the volume of the cube in cubic inches?",
    options: ["25", "125", "150", "625"],
    correctIndex: 1,
    correctAnswerText: "125",
    explanation: `Step-by-Step Mathematical Explanation:
1. A cube has 6 identical square faces, so total surface area $A = 6s^2 = 150$.
2. Solve for side length $s$:
   $$s^2 = \\frac{150}{6} = 25 \\implies s = 5\\text{ inches}$$
3. Calculate volume $V = s^3$:
   $$V = 5^3 = 125\\text{ cubic inches}$$

Distractor Analysis:
- Option A (25): Surface area of one face ($s^2$).
- Option B (125): CORRECT. $5^3 = 125$.
- Option C (150): Confused volume with total surface area.
- Option D (625): $25^2$.`,
    diagram: {
      title: "Cube with Total Surface Area 150 sq in",
      hideAxes: true,
      hideGrid: true,
      hideTicks: true,
      xRange: [0, 8],
      yRange: [0, 8],
      textAnnotations: [
        { x: 2.5, y: 1.5, text: "Side s = x", color: "#ea580c" },
        { x: 2.5, y: 4, text: "Volume V = x", color: "#3b82f6", fontWeight: "bold" }
      ],
      curves: [
        { type: "line", color: "#3b82f6", points: [[1, 1], [5, 1], [5, 5], [1, 5], [1, 1]] },
        { type: "line", color: "#3b82f6", points: [[2.5, 2.5], [6.5, 2.5], [6.5, 6.5], [2.5, 6.5], [2.5, 2.5]] },
        { type: "line", color: "#3b82f6", points: [[1, 5], [2.5, 6.5]] },
        { type: "line", color: "#3b82f6", points: [[5, 5], [6.5, 6.5]] },
        { type: "line", color: "#3b82f6", points: [[5, 1], [6.5, 2.5]] }
      ]
    }
  },
  {
    id: "ch7-ex-q111",
    number: 111,
    exerciseNumber: 4,
    exerciseTitle: "Exercise 4: Advanced Geometry, Coordinate Circles & Hard Trig",
    question: "In the xy-plane, circle C has equation (x + 2)² + (y - 4)² = 36. If point (4, k) lies on the circle, what is a possible value of k?",
    options: ["4", "10", "12", "16"],
    correctIndex: 0,
    correctAnswerText: "4",
    explanation: `Step-by-Step Mathematical Explanation:
1. Substitute $x = 4$ and $y = k$ into the circle equation:
   $$(4 + 2)^2 + (k - 4)^2 = 36$$
   $$6^2 + (k - 4)^2 = 36$$
   $$36 + (k - 4)^2 = 36$$
2. Subtract 36 from both sides:
   $$(k - 4)^2 = 0 \\implies k - 4 = 0 \\implies k = 4$$

Distractor Analysis:
- Option A (4): CORRECT. $k = 4$ is the unique solution.
- Option B (10): $k = 10 \implies (10-4)^2 = 36 \implies 36+36 \neq 36$.
- Option C (12): Incorrect calculation.
- Option D (16): Square root error.`,
    diagram: {
      title: "Circle (x + 2)² + (y - 4)² = 36",
      hideAxes: false,
      hideGrid: false,
      hideTicks: false,
      xRange: [-10, 6],
      yRange: [-4, 12],
      textAnnotations: [
        { x: -2, y: 4, text: "Center (-2, 4)", color: "#ea580c" },
        { x: 4, y: 4.8, text: "Point (4, k)", color: "#3b82f6", fontWeight: "bold" }
      ],
      curves: [
        { type: "circle", circle: { cx: -2, cy: 4, r: 6 }, color: "#3b82f6" },
        { type: "line", color: "#ea580c", points: [[-2, 4], [4, 4]] }
      ]
    }
  },
  {
    id: "ch7-ex-q112",
    number: 112,
    exerciseNumber: 4,
    exerciseTitle: "Exercise 4: Advanced Geometry, Coordinate Circles & Hard Trig",
    question: "An arc of a circle has length 4π cm and corresponds to a central angle of 60°. What is the radius of the circle in centimeters?",
    options: ["6", "12", "18", "24"],
    correctIndex: 1,
    correctAnswerText: "12",
    explanation: `Step-by-Step Mathematical Explanation:
1. Formula for Arc Length:
   $$\\text{Arc Length} = \\frac{\\theta}{360^\\circ} \\cdot 2\\pi r$$
2. Substitute $\\theta = 60^\\circ$ and $\\text{Arc Length} = 4\\pi$:
   $$4\\pi = \\frac{60^\\circ}{360^\\circ} \\cdot 2\\pi r = \\frac{1}{6} \\cdot 2\\pi r = \\frac{\\pi r}{3}$$
3. Multiply both sides by 3 and divide by $\\pi$:
   $$12\\pi = \\pi r \\implies r = 12\\text{ cm}$$

Distractor Analysis:
- Option A (6): Forgot factor of 2 in $2\pi r$.
- Option B (12): CORRECT. $r = 12$.
- Option C (18): Arithmetic error.
- Option D (24): Doubled radius.`,
    diagram: {
      title: "Circle Arc with Length 4π and Central Angle 60°",
      hideAxes: true,
      hideGrid: true,
      hideTicks: true,
      xRange: [-14, 14],
      yRange: [-14, 14],
      textAnnotations: [
        { x: 0, y: 0, text: "O", color: "#1e293b" },
        { x: 6, y: 1, text: "Radius r = x", color: "#ea580c" },
        { x: 8, y: 7, text: "Arc = 4π", color: "#3b82f6", fontWeight: "bold" }
      ],
      angleArcs: [
        { center: [0, 0], radius: 2, startAngle: 0, endAngle: 60, color: "#3b82f6", label: "60°" }
      ],
      curves: [
        { type: "circle", circle: { cx: 0, cy: 0, r: 12 }, color: "#cbd5e1" },
        { type: "line", color: "#ea580c", points: [[0, 0], [12, 0]] },
        { type: "line", color: "#ea580c", points: [[0, 0], [6, 10.39]] }
      ]
    }
  },
  {
    id: "ch7-ex-q113",
    number: 113,
    exerciseNumber: 4,
    exerciseTitle: "Exercise 4: Advanced Geometry, Coordinate Circles & Hard Trig",
    question: "A right triangle has legs of lengths x and (x + 2), and a hypotenuse of length (x + 4). What is the value of x?",
    options: ["4", "6", "8", "10"],
    correctIndex: 1,
    correctAnswerText: "6",
    explanation: `Step-by-Step Mathematical Explanation:
1. Apply Pythagorean Theorem:
   $$x^2 + (x + 2)^2 = (x + 4)^2$$
2. Expand both sides:
   $$x^2 + (x^2 + 4x + 4) = x^2 + 8x + 16$$
   $$2x^2 + 4x + 4 = x^2 + 8x + 16$$
3. Rearrange into standard quadratic form:
   $$x^2 - 4x - 12 = 0$$
4. Factor:
   $$(x - 6)(x + 2) = 0$$
   Since side length must be positive, $x = 6$.
5. Check: Legs are 6 and 8, hypotenuse is 10 (6-8-10 triple!).

Distractor Analysis:
- Option A (4): Gives sides 4, 6, 8 ($16 + 36 = 52 \neq 64$).
- Option B (6): CORRECT. Gives 6-8-10 right triangle.
- Option C (8): Gives sides 8, 10, 12.
- Option D (10): Gives sides 10, 12, 14.`,
    diagram: {
      title: "Right Triangle with Sides x, x + 2, and x + 4",
      hideAxes: true,
      hideGrid: true,
      hideTicks: true,
      xRange: [0, 8],
      yRange: [0, 6],
      textAnnotations: [
        { x: 4, y: 2.3, text: "Leg = x + 2", color: "#475569" },
        { x: 1.3, y: 3.0, text: "Leg = x", color: "#3b82f6", fontWeight: "bold" },
        { x: 4.3, y: 3.3, text: "Hypotenuse = x + 4", color: "#ea580c", fontWeight: "bold" }
      ],
      curves: [
        { type: "line", color: "#3b82f6", points: [[2, 4.2], [2, 1.8], [6.2, 1.8], [2, 4.2]] }
      ]
    }
  },
  {
    id: "ch7-ex-q114",
    number: 114,
    exerciseNumber: 4,
    exerciseTitle: "Exercise 4: Advanced Geometry, Coordinate Circles & Hard Trig",
    question: "Two parallel lines are cut by a transversal. One co-interior (consecutive interior) angle measures (3x + 20)° and the other measures (2x + 10)°. What is the value of x?",
    options: ["30", "32", "35", "40"],
    correctIndex: 0,
    correctAnswerText: "30",
    explanation: `Step-by-Step Mathematical Explanation:
1. Consecutive interior angles between parallel lines are supplementary (sum to 180°):
   $$(3x + 20) + (2x + 10) = 180$$
2. Combine like terms:
   $$5x + 30 = 180$$
3. Solve for x:
   $$5x = 150 \\implies x = 30$$

Distractor Analysis:
- Option A (30): CORRECT. $5(30) + 30 = 180$.
- Option B (32): Arithmetic error.
- Option C (35): Set angles equal instead of supplementary ($3x+20 = 2x+10 \implies x = -10$).
- Option D (40): Incorrect division.`,
    diagram: {
      title: "Parallel Lines and Transversal Consecutive Interior Angles",
      hideAxes: true,
      hideGrid: true,
      hideTicks: true,
      xRange: [0, 10],
      yRange: [0, 8],
      textAnnotations: [
        { x: 2.2, y: 3.0, text: "(3x + 20)°", color: "#ea580c", fontWeight: "bold" },
        { x: 5.2, y: 4.2, text: "(2x + 10)°", color: "#3b82f6", fontWeight: "bold" }
      ],
      angleArcs: [
        { center: [3.2, 2], radius: 1.2, startAngle: 40, endAngle: 180, color: "#ea580c", label: "(3x + 20)°" },
        { center: [6.8, 5], radius: 1.2, startAngle: 180, endAngle: 220, color: "#3b82f6", label: "(2x + 10)°" }
      ],
      curves: [
        { type: "line", color: "#475569", points: [[1, 5], [9, 5]] },
        { type: "line", color: "#475569", points: [[1, 2], [9, 2]] },
        { type: "line", color: "#3b82f6", points: [[2, 1], [8, 6]] }
      ]
    }
  },
  {
    id: "ch7-ex-q115",
    number: 115,
    exerciseNumber: 4,
    exerciseTitle: "Exercise 4: Advanced Geometry, Coordinate Circles & Hard Trig",
    question: "A trapezoid has parallel bases of lengths 10 cm and 18 cm. If the area of the trapezoid is 112 square centimeters, what is its vertical height?",
    options: ["6", "8", "10", "12"],
    correctIndex: 1,
    correctAnswerText: "8",
    explanation: `Step-by-Step Mathematical Explanation:
1. Formula for Trapezoid Area:
   $$\\text{Area} = \\frac{b_1 + b_2}{2} \\cdot h$$
2. Substitute $b_1 = 10$, $b_2 = 18$, and $\\text{Area} = 112$:
   $$112 = \\frac{10 + 18}{2} \\cdot h = \\frac{28}{2} \\cdot h = 14h$$
3. Solve for h:
   $$h = \\frac{112}{14} = 8\\text{ cm}$$

Distractor Analysis:
- Option A (6): $14 \\times 6 = 84$.
- Option B (8): CORRECT. $14 \\times 8 = 112$.
- Option C (10): $14 \\times 10 = 140$.
- Option D (12): $14 \\times 12 = 168$.`,
    diagram: {
      title: "Trapezoid with Area 112 cm²",
      hideAxes: true,
      hideGrid: true,
      hideTicks: true,
      xRange: [0, 10],
      yRange: [0, 6],
      textAnnotations: [
        { x: 4.5, y: 4.8, text: "b1 = 10 cm", color: "#ea580c" },
        { x: 4.5, y: 1.5, text: "b2 = 18 cm", color: "#ea580c" },
        { x: 2.2, y: 2.5, text: "Height h = x", color: "#3b82f6", fontWeight: "bold" },
        { x: 5, y: 2.5, text: "Area = 112 cm²", color: "#16a34a", fontWeight: "bold" }
      ],
      curves: [
        { type: "line", color: "#3b82f6", points: [[2, 4.2], [7, 4.2], [9, 1], [0, 1], [2, 4.2]] },
        { type: "line", color: "#ea580c", points: [[2, 4.2], [2, 1]] }
      ]
    }
  },
  {
    id: "ch7-ex-q116",
    number: 116,
    exerciseNumber: 4,
    exerciseTitle: "Exercise 4: Advanced Geometry, Coordinate Circles & Hard Trig",
    question: "If sin(θ) = 1/2 for an acute angle θ, what is the value of cos(2θ)?",
    options: ["1/2", "√3/2", "1", "0"],
    correctIndex: 0,
    correctAnswerText: "1/2",
    explanation: `Step-by-Step Mathematical Explanation:
1. If $\\sin(\\theta) = \\frac{1}{2}$ for acute angle $\\theta$, then $\\theta = 30^\\circ$.
2. Find $2\\theta$:
   $$2\\theta = 2 \\times 30^\\circ = 60^\\circ$$
3. Calculate $\\cos(2\\theta) = \\cos(60^\\circ)$:
   $$\\cos(60^\\circ) = \\frac{1}{2}$$

Distractor Analysis:
- Option A (1/2): CORRECT. $\\cos(60^\circ) = 1/2$.
- Option B (√3/2): Value of $\\cos(30^\circ)$ or $\\sin(60^\circ)$.
- Option C (1): Value of $\\sin(90^\circ)$.
- Option D (0): Value of $\\cos(90^\circ)$.`,
    diagram: {
      title: "Angle θ on Unit Circle",
      hideAxes: false,
      hideGrid: true,
      hideTicks: true,
      xRange: [-1.5, 1.5],
      yRange: [-1.5, 1.5],
      textAnnotations: [
        { x: 0.8, y: 0.3, text: "θ", color: "#ea580c" },
        { x: 0.4, y: 0.8, text: "2θ", color: "#3b82f6", fontWeight: "bold" }
      ],
      curves: [
        { type: "circle", circle: { cx: 0, cy: 0, r: 1 }, color: "#cbd5e1" },
        { type: "line", color: "#ea580c", points: [[0, 0], [0.866, 0.5]] },
        { type: "line", color: "#3b82f6", points: [[0, 0], [0.5, 0.866]] }
      ]
    }
  },
  {
    id: "ch7-ex-q117",
    number: 117,
    exerciseNumber: 4,
    exerciseTitle: "Exercise 4: Advanced Geometry, Coordinate Circles & Hard Trig",
    question: "A solid sphere has radius 3 cm. It is completely submerged in a rectangular tank filled with water. The base of the tank is 10 cm by 6 cm. By how many centimeters will the water level rise?",
    options: ["0.6π", "0.8π", "1.2π", "1.5π"],
    correctIndex: 0,
    correctAnswerText: "0.6π",
    explanation: `Step-by-Step Mathematical Explanation:
1. Calculate volume of the submerged sphere:
   $$V_{\\text{sphere}} = \\frac{4}{3} \\pi r^3 = \\frac{4}{3} \\pi (3)^3 = \\frac{4}{3} \\pi (27) = 36\\pi\\text{ cm}^3$$
2. The displaced water volume equals the volume of a rectangular prism with base area $10 \\times 6 = 60\\text{ cm}^2$ and height $h$:
   $$V_{\\text{displaced}} = \\text{Base Area} \\times h = 60h$$
3. Set equal:
   $$60h = 36\\pi \\implies h = \\frac{36\\pi}{60} = 0.6\\pi\\text{ cm}$$

Distractor Analysis:
- Option A (0.6π): CORRECT. $36\\pi / 60 = 0.6\\pi$.
- Option B (0.8π): Arithmetic division error.
- Option C (1.2π): Multiplied numerator by 2.
- Option D (1.5π): Division error.`,
    diagram: {
      title: "Submerged Sphere in Water Tank",
      hideAxes: true,
      hideGrid: true,
      hideTicks: true,
      xRange: [0, 12],
      yRange: [0, 9],
      textAnnotations: [
        { x: 5.0, y: 0.3, text: "Base = 10 cm", color: "#475569" },
        { x: 10.4, y: 1.2, text: "Depth = 6 cm", color: "#475569" },
        { x: 2.5, y: 2.3, text: "Sphere r = 3 cm", color: "#ea580c", fontWeight: "bold" },
        { x: 10.4, y: 4.0, text: "Rise h = x", color: "#3b82f6", fontWeight: "bold" }
      ],
      curves: [
        { type: "line", color: "#64748b", points: [[1, 1], [9, 1], [9, 6.5], [1, 6.5], [1, 1]], strokeWidth: 2 },
        { type: "line", color: "#94a3b8", points: [[1, 6.5], [3.2, 7.7], [11.2, 7.7], [9, 6.5]] },
        { type: "line", color: "#94a3b8", points: [[9, 1], [11.2, 2.2], [11.2, 7.7]] },
        { type: "line", color: "#cbd5e1", points: [[1, 1], [3.2, 2.2], [11.2, 2.2]], style: "dashed" },
        { type: "line", color: "#cbd5e1", points: [[3.2, 2.2], [3.2, 7.7]], style: "dashed" },
        { type: "line", color: "#38bdf8", points: [[1, 3.3], [9, 3.3], [11.2, 4.5]], style: "dashed" },
        { type: "line", color: "#0284c7", points: [[1, 4.7], [9, 4.7], [11.2, 5.9]], strokeWidth: 2 },
        { type: "line", color: "#3b82f6", points: [[9.3, 3.3], [9.3, 4.7]], strokeWidth: 2 },
        { type: "line", color: "#3b82f6", points: [[9.1, 3.3], [9.5, 3.3]] },
        { type: "line", color: "#3b82f6", points: [[9.1, 4.7], [9.5, 4.7]] },
        { type: "circle", circle: { cx: 5.1, cy: 2.3, r: 1.1 }, color: "#ea580c" },
        { type: "ellipse", ellipse: { cx: 5.1, cy: 2.3, rx: 1.1, ry: 0.35 }, color: "#ea580c", style: "dashed" }
      ]
    }
  },
  {
    id: "ch7-ex-q118",
    number: 118,
    exerciseNumber: 4,
    exerciseTitle: "Exercise 4: Advanced Geometry, Coordinate Circles & Hard Trig",
    question: "A right triangle has hypotenuse 25 and one leg of length 7. What is the sine of the angle opposite the leg of length 7?",
    options: ["7/25", "24/25", "7/24", "25/7"],
    correctIndex: 0,
    correctAnswerText: "7/25",
    explanation: `Step-by-Step Mathematical Explanation:
1. Definition of Sine:
   $$\\sin(\\theta) = \\frac{\\text{Opposite}}{\\text{Hypotenuse}}$$
2. Given opposite leg = 7 and hypotenuse = 25:
   $$\\sin(\\theta) = \\frac{7}{25}$$

Distractor Analysis:
- Option A (7/25): CORRECT.
- Option B (24/25): Cosine of the angle (since adjacent leg is $\\sqrt{25^2 - 7^2} = 24$).
- Option C (7/24): Tangent of the angle.
- Option D (25/7): Cosecant of the angle.`,
    diagram: {
      title: "Right Triangle with Hypotenuse 25 and Leg 7",
      hideAxes: true,
      hideGrid: true,
      hideTicks: true,
      xRange: [0, 8],
      yRange: [0, 6],
      textAnnotations: [
        { x: 4.1, y: 2.3, text: "Adj Leg = x", color: "#475569" },
        { x: 1.3, y: 3.0, text: "Opp = 7", color: "#3b82f6", fontWeight: "bold" },
        { x: 4.3, y: 3.3, text: "Hyp = 25", color: "#ea580c", fontWeight: "bold" }
      ],
      curves: [
        { type: "line", color: "#3b82f6", points: [[2, 4.2], [2, 1.8], [6.2, 1.8], [2, 4.2]] }
      ]
    }
  },
  {
    id: "ch7-ex-q119",
    number: 119,
    exerciseNumber: 4,
    exerciseTitle: "Exercise 4: Advanced Geometry, Coordinate Circles & Hard Trig",
    question: "A circle has equation x² + y² - 4x + 8y = 5. What is the area of the circle in square units?",
    options: ["5π", "20π", "25π", "36π"],
    correctIndex: 2,
    correctAnswerText: "25π",
    explanation: `Step-by-Step Mathematical Explanation:
1. Complete the square for x and y terms:
   $$(x^2 - 4x + 4) + (y^2 + 8y + 16) = 5 + 4 + 16$$
   $$(x - 2)^2 + (y + 4)^2 = 25$$
2. The radius squared is $r^2 = 25$.
3. Area of the circle:
   $$\\text{Area} = \\pi r^2 = 25\\pi\\text{ sq units}$$

Distractor Analysis:
- Option A (5π): Used original constant 5.
- Option B (20π): Subtracted constants.
- Option C (25π): CORRECT. $\\pi r^2 = 25\\pi$.
- Option D (36π): Added 11 incorrectly.`,
    diagram: {
      title: "Circle x² + y² - 4x + 8y = 5",
      hideAxes: false,
      hideGrid: false,
      hideTicks: false,
      xRange: [-4, 8],
      yRange: [-10, 2],
      textAnnotations: [
        { x: 2, y: -4, text: "Center = x", color: "#ea580c" },
        { x: 2, y: -8, text: "Circle Area = x", color: "#3b82f6", fontWeight: "bold" }
      ],
      curves: [
        { type: "circle", circle: { cx: 2, cy: -4, r: 5 }, color: "#3b82f6" }
      ]
    }
  },
  {
    id: "ch7-ex-q120",
    number: 120,
    exerciseNumber: 4,
    exerciseTitle: "Exercise 4: Advanced Geometry, Coordinate Circles & Hard Trig",
    question: "In triangle ABC, angle A = 40° and angle B = 60°. If side AB = 10, which side of triangle ABC is the shortest?",
    options: ["Side BC", "Side AC", "Side AB", "Cannot be determined"],
    correctIndex: 0,
    correctAnswerText: "Side BC",
    explanation: `Step-by-Step Mathematical Explanation:
1. Sum of interior angles in triangle ABC = 180°:
   $$\\angle C = 180^\\circ - (40^\\circ + 60^\\circ) = 180^\\circ - 100^\\circ = 80^\\circ$$
2. Ordering of angles: $\\angle A (40^\\circ) < \\angle B (60^\\circ) < \\angle C (80^\\circ)$.
3. Triangle Side-Angle Inequality Theorem: In any triangle, the shortest side is always opposite the smallest interior angle.
4. The smallest angle is $\\angle A = 40^\\circ$, which is opposite side BC. Therefore, side BC is the shortest side.

Distractor Analysis:
- Option A (Side BC): CORRECT. Opposite smallest angle $\\angle A = 40^\circ$.
- Option B (Side AC): Opposite medium angle $\\angle B = 60^\circ$.
- Option C (Side AB): Opposite largest angle $\\angle C = 80^\circ$ (longest side).
- Option D (Cannot be determined): False, all angle measures are known.`,
    diagram: {
      title: "Triangle ABC Interior Angles",
      hideAxes: true,
      hideGrid: true,
      hideTicks: true,
      xRange: [0, 10],
      yRange: [0, 8],
      textAnnotations: [
        { x: 1.5, y: 1.5, text: "A = 40°", color: "#3b82f6", fontWeight: "bold" },
        { x: 8.5, y: 1.5, text: "B = 60°", color: "#ea580c" },
        { x: 4.5, y: 6.8, text: "Angle C = ?", color: "#16a34a" },
        { x: 5, y: 1.5, text: "AB = 10", color: "#475569" },
        { x: 7, y: 4, text: "Shortest side = ?", color: "#3b82f6", fontWeight: "bold" }
      ],
      angleArcs: [
        { center: [1, 1], radius: 1.2, startAngle: 0, endAngle: 40, color: "#3b82f6", label: "40°" }
      ],
      curves: [
        { type: "line", color: "#3b82f6", points: [[1, 1], [9, 1], [4.5, 6.5], [1, 1]] }
      ]
    }
  },
  {
    id: "ch7-ex-q121",
    number: 121,
    exerciseNumber: 4,
    exerciseTitle: "Exercise 4: Advanced Geometry, Coordinate Circles & Hard Trig",
    question: "A 45°-45°-90° isosceles right triangle has an area of 32 square centimeters. What is the length of its hypotenuse in centimeters?",
    options: ["8", "8√2", "16", "16√2"],
    correctIndex: 1,
    correctAnswerText: "8√2",
    explanation: `Step-by-Step Mathematical Explanation:
1. In a 45°-45°-90° right triangle, both legs are equal to x.
2. Area formula:
   $$\\text{Area} = \\frac{1}{2} x^2 = 32 \\implies x^2 = 64 \\implies x = 8\\text{ cm}$$
3. Hypotenuse ratio for 45°-45°-90° triangle is $x\\sqrt{2}$:
   $$\\text{Hypotenuse} = 8\\sqrt{2}\\text{ cm}$$

Distractor Analysis:
- Option A (8): Leg length x.
- Option B (8√2): CORRECT. $x\\sqrt{2} = 8\\sqrt{2}$.
- Option C (16): $2x$.
- Option D (16√2): Doubled hypotenuse.`,
    diagram: {
      title: "45°-45°-90° Isosceles Right Triangle",
      hideAxes: true,
      hideGrid: true,
      hideTicks: true,
      xRange: [0, 8],
      yRange: [0, 8],
      textAnnotations: [
        { x: 3, y: 1.5, text: "Leg = x", color: "#475569" },
        { x: 0.5, y: 3, text: "Leg = x", color: "#475569" },
        { x: 3.5, y: 3.5, text: "Hypotenuse = x", color: "#3b82f6", fontWeight: "bold" }
      ],
      curves: [
        { type: "line", color: "#3b82f6", points: [[1, 1], [6, 1], [1, 6], [1, 1]] }
      ]
    }
  },
  {
    id: "ch7-ex-q122",
    number: 122,
    exerciseNumber: 4,
    exerciseTitle: "Exercise 4: Advanced Geometry, Coordinate Circles & Hard Trig",
    question: "In the xy-plane, point (x, y) lies on the unit circle x² + y² = 1. If x = -3/5 and the point is in Quadrant II, what is the value of y?",
    options: ["-4/5", "4/5", "3/4", "4/3"],
    correctIndex: 1,
    correctAnswerText: "4/5",
    explanation: `Step-by-Step Mathematical Explanation:
1. Substitute $x = -3/5$ into unit circle equation $x^2 + y^2 = 1$:
   $$\\left(-\\frac{3}{5}\\right)^2 + y^2 = 1 \\implies \\frac{9}{25} + y^2 = 1$$
2. Solve for $y^2$:
   $$y^2 = 1 - \\frac{9}{25} = \\frac{16}{25} \\implies y = \\pm \\frac{4}{5}$$
3. Since the point lies in Quadrant II, the y-coordinate must be POSITIVE:
   $$y = +\\frac{4}{5}$$

Distractor Analysis:
- Option A (-4/5): Quadrant III solution where y is negative.
- Option B (4/5): CORRECT. Positive y in Quadrant II.
- Option C (3/4): Tangent ratio.
- Option D (4/3): Cotangent ratio.`,
    diagram: {
      title: "Unit Circle Quadrant II Point (x, y)",
      hideAxes: false,
      hideGrid: false,
      hideTicks: false,
      xRange: [-1.5, 1.5],
      yRange: [-1.5, 1.5],
      textAnnotations: [
        { x: -0.7, y: 0.9, text: "Point (-3/5, y)", color: "#3b82f6", fontWeight: "bold" }
      ],
      curves: [
        { type: "circle", circle: { cx: 0, cy: 0, r: 1 }, color: "#cbd5e1" },
        { type: "line", color: "#3b82f6", points: [[0, 0], [-0.6, 0.8]] }
      ]
    }
  },
  {
    id: "ch7-ex-q123",
    number: 123,
    exerciseNumber: 4,
    exerciseTitle: "Exercise 4: Advanced Geometry, Coordinate Circles & Hard Trig",
    question: "A sector of a circle with radius 10 cm has an arc length of 5π cm. What is the central angle of the sector in degrees?",
    options: ["45°", "60°", "90°", "120°"],
    correctIndex: 2,
    correctAnswerText: "90°",
    explanation: `Step-by-Step Mathematical Explanation:
1. Formula for Arc Length:
   $$\\text{Arc Length} = \\frac{\\theta}{360^\\circ} \\cdot 2\\pi r$$
2. Substitute $\\text{Arc Length} = 5\\pi$ and $r = 10$:
   $$5\\pi = \\frac{\\theta}{360^\\circ} \\cdot 20\\pi$$
3. Divide both sides by $\\pi$:
   $$5 = \\frac{20\\theta}{360} = \\frac{\\theta}{18}$$
4. Multiply by 18:
   $$\\theta = 5 \\times 18 = 90^\\circ$$

Distractor Analysis:
- Option A (45°): Half the correct angle.
- Option B (60°): $360 / 6$.
- Option C (90°): CORRECT. Quarter circle arc ($20\pi / 4 = 5\pi$).
- Option D (120°): $360 / 3$.`,
    diagram: {
      title: "Sector with Radius 10 and Arc Length 5π",
      hideAxes: true,
      hideGrid: true,
      hideTicks: true,
      xRange: [-12, 12],
      yRange: [-12, 12],
      textAnnotations: [
        { x: 0, y: 0, text: "O", color: "#1e293b" },
        { x: 5, y: -1, text: "r = 10", color: "#ea580c" },
        { x: 6, y: 6, text: "Arc = 5π", color: "#3b82f6", fontWeight: "bold" }
      ],
      angleArcs: [
        { center: [0, 0], radius: 2, startAngle: 0, endAngle: 90, color: "#3b82f6", label: "x°" }
      ],
      curves: [
        { type: "circle", circle: { cx: 0, cy: 0, r: 10 }, color: "#cbd5e1" },
        { type: "line", color: "#ea580c", points: [[0, 0], [10, 0]] },
        { type: "line", color: "#ea580c", points: [[0, 0], [0, 10]] }
      ]
    }
  },
  {
    id: "ch7-ex-q124",
    number: 124,
    exerciseNumber: 4,
    exerciseTitle: "Exercise 4: Advanced Geometry, Coordinate Circles & Hard Trig",
    question: "Two right circular cones A and B have heights in the ratio 1 : 2 and base radii in the ratio 2 : 1. What is the ratio of the volume of cone A to the volume of cone B?",
    options: ["1 : 1", "2 : 1", "1 : 2", "4 : 1"],
    correctIndex: 1,
    correctAnswerText: "2 : 1",
    explanation: `Step-by-Step Mathematical Explanation:
1. Cone Volume Formula: $V = \\frac{1}{3} \\pi r^2 h$.
2. Let cone A have radius $r_A = 2r$ and height $h_A = h$.
3. Let cone B have radius $r_B = r$ and height $h_B = 2h$.
4. Calculate $V_A$:
   $$V_A = \\frac{1}{3} \\pi (2r)^2 (h) = \\frac{1}{3} \\pi (4r^2) h = \\frac{4}{3} \\pi r^2 h$$
5. Calculate $V_B$:
   $$V_B = \\frac{1}{3} \\pi (r)^2 (2h) = \\frac{2}{3} \\pi r^2 h$$
6. Ratio of $V_A$ to $V_B$:
   $$\\frac{V_A}{V_B} = \\frac{\\frac{4}{3}}{\\frac{2}{3}} = \\frac{4}{2} = 2$$
   Expressed as ratio: $2 : 1$.

Distractor Analysis:
- Option A (1 : 1): Assumed equal volumes.
- Option B (2 : 1): CORRECT. $4/2 = 2$.
- Option C (1 : 2): Inverted ratio.
- Option D (4 : 1): Forgot height ratio.`,
    diagram: {
      title: "Cones A and B Comparison",
      hideAxes: true,
      hideGrid: true,
      hideTicks: true,
      xRange: [0, 10],
      yRange: [0, 8],
      textAnnotations: [
        { x: 2.5, y: 7, text: "Cone A (r = 2, h = 1)", color: "#3b82f6", fontWeight: "bold" },
        { x: 7.5, y: 7, text: "Cone B (r = 1, h = 2)", color: "#ea580c", fontWeight: "bold" }
      ],
      curves: [
        { type: "ellipse", ellipse: { cx: 2.5, cy: 1.5, rx: 2, ry: 0.5 }, color: "#cbd5e1" },
        { type: "line", color: "#3b82f6", points: [[0.5, 1.5], [2.5, 4.5]] },
        { type: "line", color: "#3b82f6", points: [[4.5, 1.5], [2.5, 4.5]] },
        { type: "ellipse", ellipse: { cx: 7.5, cy: 1.5, rx: 1, ry: 0.4 }, color: "#cbd5e1" },
        { type: "line", color: "#ea580c", points: [[6.5, 1.5], [7.5, 6.5]] },
        { type: "line", color: "#ea580c", points: [[8.5, 1.5], [7.5, 6.5]] }
      ]
    }
  },
  {
    id: "ch7-ex-q125",
    number: 125,
    exerciseNumber: 4,
    exerciseTitle: "Exercise 4: Advanced Geometry, Coordinate Circles & Hard Trig",
    question: "A regular octagon is inscribed in a circle with radius 6 cm. What is the sum of the interior angles of the octagon in degrees?",
    options: ["720°", "1080°", "1260°", "1440°"],
    correctIndex: 1,
    correctAnswerText: "1080°",
    explanation: `Step-by-Step Mathematical Explanation:
1. Formula for the sum of interior angles of any n-sided polygon:
   $$S = (n - 2) \\times 180^\\circ$$
2. For an octagon ($n = 8$):
   $$S = (8 - 2) \\times 180^\\circ = 6 \\times 180^\\circ = 1080^\\circ$$

Distractor Analysis:
- Option A (720°): Sum for a hexagon ($n = 6$).
- Option B (1080°): CORRECT. $6 \\times 180^\circ = 1080^\circ$.
- Option C (1260°): Sum for a nonagon ($n = 9$).
- Option D (1440°): Sum for a decagon ($n = 10$).`,
    diagram: {
      title: "Inscribed Regular Octagon in Circle",
      hideAxes: true,
      hideGrid: true,
      hideTicks: true,
      xRange: [-8, 8],
      yRange: [-8, 8],
      textAnnotations: [
        { x: 0, y: 0, text: "Sum of Interior Angles = x", color: "#3b82f6", fontWeight: "bold" },
        { x: 4, y: 4, text: "r = 6 cm", color: "#ea580c" }
      ],
      curves: [
        { type: "circle", circle: { cx: 0, cy: 0, r: 6 }, color: "#cbd5e1" },
        { type: "line", color: "#3b82f6", points: [[6, 0], [4.24, 4.24], [0, 6], [-4.24, 4.24], [-6, 0], [-4.24, -4.24], [0, -6], [4.24, -4.24], [6, 0]] }
      ]
    }
  }
];
