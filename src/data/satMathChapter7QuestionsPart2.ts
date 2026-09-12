import { MathExerciseQuestion } from './satMathConcepts';

export const CHAPTER_7_QUESTIONS_PART2: MathExerciseQuestion[] = [
  {
    id: "ch7-ex-q31",
    number: 31,
    exerciseNumber: 2,
    exerciseTitle: "Exercise 2: Area, Volume, Lines & Triangles",
    question: "A rectangle has a length of 21 and a width of 13. A square with side length 4 is removed from one corner. What is the area of the remaining figure?",
    options: ["253", "257", "261", "269"],
    correctIndex: 1,
    correctAnswerText: "257",
    explanation: `Step-by-Step Mathematical Explanation:
1. Apply the Composite Figure Rule (Technique 17: ADD pieces, SUBTRACT holes):
   $$\\text{Remaining Area} = \\text{Area of Rectangle} - \\text{Area of Corner Square}$$
2. Calculate the area of the full rectangle:
   $$A_{\\text{rectangle}} = l \\times w = 21 \\times 13 = 273$$
3. Calculate the area of the removed corner square:
   $$A_{\\text{square}} = s^2 = 4^2 = 16$$
4. Subtract the corner square area from the full rectangle area:
   $$\\text{Remaining Area} = 273 - 16 = 257$$

Distractor Analysis:
- Option A (253): Subtracts $20$ instead of $16$.
- Option B (257): CORRECT. $273 - 16 = 257$.
- Option C (261): Subtracts $12$ instead of $16$.
- Option D (269): Subtracts $4$ instead of $4^2 = 16$.`,
    diagram: {
      title: "Rectangle with Corner Square Removed",
      hideAxes: true,
      hideGrid: true,
      hideTicks: true,
      xRange: [0, 12],
      yRange: [0, 8],
      textAnnotations: [
        { x: 5, y: 2.1, text: "21", color: "#475569" },
        { x: 0.8, y: 4.5, text: "13", color: "#475569" },
        { x: 8.8, y: 6.8, text: "4x4 Removed", color: "#ef4444", fontWeight: "bold" },
        { x: 4.5, y: 4.5, text: "Remaining Area = x", color: "#3b82f6", fontWeight: "bold" }
      ],
      curves: [
        {
          type: "line",
          color: "#3b82f6",
          points: [[1.5, 1.5], [8.5, 1.5], [8.5, 5.5], [7.0, 5.5], [7.0, 7.0], [1.5, 7.0], [1.5, 1.5]]
        },
        {
          type: "line",
          style: "dashed",
          color: "#ef4444",
          points: [[8.5, 5.5], [8.5, 7.0], [7.0, 7.0]]
        }
      ]
    }
  },
  {
    id: "ch7-ex-q32",
    number: 32,
    exerciseNumber: 2,
    exerciseTitle: "Exercise 2: Area, Volume, Lines & Triangles",
    question: "A triangle has an area of 96 square units and a base of 16 units. What is its perpendicular height?",
    options: ["6","8","10","14"],
    correctIndex: 3,
    correctAnswerText: "14",
    explanation: `Step-by-Step Mathematical Explanation:
1. Recall the area formula for a triangle:
   $$A = \\frac{1}{2} b h$$
2. Substitute $A = 96$ and $b = 16$:
   $$96 = \\frac{1}{2} (16) h$$
   $$96 = 8 h$$
3. Divide both sides by 8:
   $$h = \\frac{96}{8} = 12$$

Distractor Analysis:
- Option A (6): Forgot the $\\frac{1}{2}$ multiplier in $96/16 = 6$.
- Option B (8): Half of the base ($16/2 = 8$).
- Option C (10): Arithmetic error.
- Option D (12): CORRECT. $h = 12$.`,
    diagram: {
      title: "Triangle Area Layout (A = 96, b = 16)",
      hideAxes: true,
      hideGrid: true,
      hideTicks: true,
      xRange: [0, 10],
      yRange: [0, 8],
      textAnnotations: [
        { x: 5, y: 2.3, text: "Base = 16", color: "#475569" },
        { x: 5.3, y: 4.2, text: "h = x", color: "#3b82f6", fontWeight: "bold" },
        { x: 3.5, y: 3.0, text: "Area = 96", color: "#16a34a" }
      ],
      curves: [
        {
          type: "line",
          color: "#475569",
          points: [[1, 1.8], [9, 1.8], [5, 6.8], [1, 1.8]]
        },
        {
          type: "line",
          style: "dashed",
          color: "#3b82f6",
          points: [[5, 1.8], [5, 6.8]]
        },
        {
          type: "line",
          color: "#3b82f6",
          points: [[5, 2.1], [5.3, 2.1], [5.3, 1.8]]
        }
      ]
    }
  },
  {
    id: "ch7-ex-q33",
    number: 33,
    exerciseNumber: 2,
    exerciseTitle: "Exercise 2: Area, Volume, Lines & Triangles",
    question: "A trapezoid has parallel bases of 11 units and 19 units and a perpendicular height of 8 units. What is its area?",
    options: ["100", "112", "120", "128"],
    correctIndex: 2,
    correctAnswerText: "120",
    explanation: `Step-by-Step Mathematical Explanation:
1. Recall the trapezoid area formula:
   $$A = \\frac{1}{2} (b_1 + b_2) h$$
2. Substitute $b_1 = 11, b_2 = 19, h = 8$:
   $$A = \\frac{1}{2} (11 + 19) \\times 8 = \\frac{1}{2} (30) \\times 8 = 15 \\times 8 = 120$$

Distractor Analysis:
- Option A (100): Calculated $(11 + 19) \\times 8 / 2.4$.
- Option B (112): Arithmetic slip.
- Option C (120): CORRECT. $\\frac{1}{2}(30)(8) = 120$.
- Option D (128): Multiplied $16 \\times 8$.`,
    diagram: {
      title: "Trapezoid Area Layout",
      hideAxes: true,
      hideGrid: true,
      hideTicks: true,
      xRange: [0, 10],
      yRange: [0, 8],
      textAnnotations: [
        { x: 5, y: 6.8, text: "b1 = 11", color: "#475569" },
        { x: 5, y: 2.3, text: "b2 = 19", color: "#475569" },
        { x: 3.2, y: 4.0, text: "h = 8", color: "#ea580c", fontWeight: "bold" },
        { x: 5.5, y: 4.0, text: "Area = x", color: "#3b82f6", fontWeight: "bold" }
      ],
      curves: [
        {
          type: "line",
          color: "#3b82f6",
          points: [[1, 1.8], [9, 1.8], [7.5, 6.2], [2.5, 6.2], [1, 1.8]]
        },
        {
          type: "line",
          style: "dashed",
          color: "#ea580c",
          points: [[2.5, 1.8], [2.5, 6.2]]
        }
      ]
    }
  },
  {
    id: "ch7-ex-q34",
    number: 34,
    exerciseNumber: 2,
    exerciseTitle: "Exercise 2: Area, Volume, Lines & Triangles",
    question: "A rectangular playground has a total perimeter of 86 meters. If its length is 25 meters, what is its area?",
    options: ["400", "425", "450", "500"],
    correctIndex: 2,
    correctAnswerText: "450",
    explanation: `Step-by-Step Mathematical Explanation:
1. Use the perimeter formula for a rectangle:
   $$P = 2l + 2w$$
2. Substitute $P = 86$ and $l = 25$:
   $$86 = 2(25) + 2w \\implies 86 = 50 + 2w$$
   $$2w = 36 \\implies w = 18\\text{ meters}$$
3. Calculate the area of the playground:
   $$A = l \\times w = 25 \\times 18 = 450\\text{ m}^2$$

Distractor Analysis:
- Option A (400): $25 \\times 16$.
- Option B (425): $25 \\times 17$.
- Option C (450): CORRECT. $25 \\times 18 = 450$.
- Option D (500): $25 \\times 20$.`,
    diagram: {
      title: "Playground Perimeter & Area",
      hideAxes: true,
      hideGrid: true,
      hideTicks: true,
      xRange: [0, 10],
      yRange: [0, 6],
      textAnnotations: [
        { x: 5, y: 2.3, text: "Length = 25 m", color: "#475569" },
        { x: 0.8, y: 3.5, text: "Width w = x", color: "#ea580c", fontWeight: "bold" },
        { x: 5, y: 3.5, text: "Area = x", color: "#3b82f6", fontWeight: "bold" }
      ],
      curves: [
        {
          type: "line",
          color: "#3b82f6",
          points: [[1.5, 1.8], [8.5, 1.8], [8.5, 5.2], [1.5, 5.2], [1.5, 1.8]]
        }
      ]
    }
  },
  {
    id: "ch7-ex-q35",
    number: 35,
    exerciseNumber: 2,
    exerciseTitle: "Exercise 2: Area, Volume, Lines & Triangles",
    question: "A circular track has a diameter of 28 meters. What is the circumference of the track?",
    options: ["14π", "28π", "56π", "784π"],
    correctIndex: 1,
    correctAnswerText: "28π",
    explanation: `Step-by-Step Mathematical Explanation:
1. Recall the circumference formula in terms of diameter $d$:
   $$C = \\pi d$$
2. Substitute $d = 28\\text{ m}$:
   $$C = 28\\pi\\text{ meters}$$

Distractor Analysis:
- Option A (14π): Uses radius ($r = 14$) without multiplying by 2.
- Option B (28π): CORRECT. $C = \\pi d = 28\\pi$.
- Option C (56π): Multiplies diameter by 2 ($2d\\pi$).
- Option D (784π): Squares the diameter ($d^2\\pi$).`,
    diagram: {
      title: "Track Circumference",
      hideAxes: true,
      hideGrid: true,
      hideTicks: true,
      xRange: [-4, 4],
      yRange: [-4, 4],
      textAnnotations: [
        { x: 0, y: 0.8, text: "d = 28 m", color: "#ea580c", fontWeight: "bold" },
        { x: 0, y: -3.2, text: "Circumference C = x", color: "#3b82f6", fontWeight: "bold" }
      ],
      curves: [
        {
          type: "circle",
          circle: { cx: 0, cy: 0, r: 2.8 },
          color: "#3b82f6"
        },
        {
          type: "line",
          style: "dashed",
          color: "#ea580c",
          points: [[-2.8, 0], [2.8, 0]]
        }
      ]
    }
  },
  {
    id: "ch7-ex-q36",
    number: 36,
    exerciseNumber: 2,
    exerciseTitle: "Exercise 2: Area, Volume, Lines & Triangles",
    question: "A square has an area of 324 square centimeters. What is its perimeter?",
    options: ["18", "36", "54", "72"],
    correctIndex: 3,
    correctAnswerText: "72",
    explanation: `Step-by-Step Mathematical Explanation:
1. Find the side length $s$ of the square:
   $$A = s^2 = 324 \\implies s = \\sqrt{324} = 18\\text{ cm}$$
2. Calculate the perimeter $P$:
   $$P = 4s = 4 \\times 18 = 72\\text{ cm}$$

Distractor Analysis:
- Option A (18): Side length $s = 18$.
- Option B (36): Doubled side length $2s = 36$.
- Option C (54): $3s = 54$.
- Option D (72): CORRECT. $4s = 72$.`,
    diagram: {
      title: "Square with Area 324 cm²",
      hideAxes: true,
      hideGrid: true,
      hideTicks: true,
      xRange: [0, 6],
      yRange: [0, 6],
      textAnnotations: [
        { x: 3, y: 1.5, text: "Side s = x", color: "#475569" },
        { x: 3, y: 3, text: "Area = 324 cm²", color: "#3b82f6", fontWeight: "bold" },
        { x: 3, y: 5.3, text: "Perimeter P = x", color: "#16a34a", fontWeight: "bold" }
      ],
      curves: [
        {
          type: "line",
          color: "#3b82f6",
          points: [[1, 1], [5, 1], [5, 5], [1, 5], [1, 1]]
        }
      ]
    }
  },
  {
    id: "ch7-ex-q37",
    number: 37,
    exerciseNumber: 2,
    exerciseTitle: "Exercise 2: Area, Volume, Lines & Triangles",
    question: "A rectangular prism has dimensions 5, 7, and 10. What is its total surface area?",
    options: ["250", "290", "310", "350"],
    correctIndex: 2,
    correctAnswerText: "310",
    explanation: `Step-by-Step Mathematical Explanation:
1. Apply the surface area formula for a rectangular prism (Technique 3):
   $$SA = 2(lw + lh + wh)$$
2. Substitute $l = 5, w = 7, h = 10$:
   $$SA = 2(5\\times 7 + 5\\times 10 + 7\\times 10)$$
   $$SA = 2(35 + 50 + 70) = 2(155) = 310$$

Distractor Analysis:
- Option A (250): Arithmetic slip.
- Option B (290): Sum of faces without doubling.
- Option C (310): CORRECT. $SA = 310$.
- Option D (350): Calculates volume $V = 5 \\times 7 \\times 10 = 350$.`,
    diagram: {
      title: "Rectangular Prism Dimensions",
      hideAxes: true,
      hideGrid: true,
      hideTicks: true,
      xRange: [0, 10],
      yRange: [0, 8],
      textAnnotations: [
        { x: 4, y: 2.5, text: "l = 5", color: "#475569" },
        { x: 7, y: 2.2, text: "w = 7", color: "#475569" },
        { x: 2.2, y: 4.5, text: "h = 10", color: "#475569" },
        { x: 5, y: 4.5, text: "Surface Area = x", color: "#3b82f6", fontWeight: "bold" }
      ],
      curves: [
        {
          type: "line",
          color: "#3b82f6",
          points: [[2, 2], [6, 2], [6, 7], [2, 7], [2, 2]]
        },
        {
          type: "line",
          color: "#3b82f6",
          points: [[6, 2], [8, 3.5], [8, 8.5], [6, 7]]
        },
        {
          type: "line",
          color: "#3b82f6",
          points: [[2, 7], [4, 8.5], [8, 8.5]]
        }
      ]
    }
  },
  {
    id: "ch7-ex-q38",
    number: 38,
    exerciseNumber: 2,
    exerciseTitle: "Exercise 2: Area, Volume, Lines & Triangles",
    question: "A cube has a total surface area of 294 square units. What is the length of one edge?",
    options: ["6 cm","7 cm","8 cm","9 cm"],
    correctIndex: 1,
    correctAnswerText: "7 cm",
    explanation: `Step-by-Step Mathematical Explanation:
1. Recall the surface area formula for a cube with side $s$:
   $$SA = 6 s^2$$
2. Set $6 s^2 = 294$:
   $$s^2 = \\frac{294}{6} = 49$$
3. Take the square root:
   $$s = \\sqrt{49} = 7$$

Distractor Analysis:
- Option A (6): $294 / 49 = 6$.
- Option B (7): CORRECT. $s = 7$.
- Option C (8): Arithmetic error.
- Option D (9): $s^2 = 81$.`,
    diagram: {
      title: "Cube with Surface Area 294",
      hideAxes: true,
      hideGrid: true,
      hideTicks: true,
      xRange: [0, 8],
      yRange: [0, 8],
      textAnnotations: [
        { x: 4, y: 2.5, text: "s = x", color: "#3b82f6", fontWeight: "bold" },
        { x: 4, y: 4, text: "Surface Area = 294", color: "#ea580c" }
      ],
      curves: [
        {
          type: "line",
          color: "#3b82f6",
          points: [[2, 2], [6, 2], [6, 6], [2, 6], [2, 2]]
        },
        {
          type: "line",
          color: "#3b82f6",
          points: [[6, 2], [7.5, 3.5], [7.5, 7.5], [6, 6]]
        },
        {
          type: "line",
          color: "#3b82f6",
          points: [[2, 6], [3.5, 7.5], [7.5, 7.5]]
        }
      ]
    }
  },
  {
    id: "ch7-ex-q39",
    number: 39,
    exerciseNumber: 2,
    exerciseTitle: "Exercise 2: Area, Volume, Lines & Triangles",
    question: "A right circular cylinder has radius 5 and height 8. What is its volume?",
    options: ["40π", "100π", "200π", "400π"],
    correctIndex: 2,
    correctAnswerText: "200π",
    explanation: `Step-by-Step Mathematical Explanation:
1. Recall the volume formula for a cylinder:
   $$V = \\pi r^2 h$$
2. Substitute $r = 5$ and $h = 8$:
   $$V = \\pi (5)^2 (8) = \\pi (25) (8) = 200\\pi$$

Distractor Analysis:
- Option A (40π): $r \\times h \\times \\pi = 5 \\times 8 \\pi = 40\\pi$.
- Option B (100π): $r^2 \\times 4\\pi = 100\\pi$.
- Option C (200π): CORRECT. $V = 200\\pi$.
- Option D (400π): Multiplies by 2.`,
    diagram: {
      title: "Cylinder Radius 5 and Height 8",
      hideAxes: true,
      hideGrid: true,
      hideTicks: true,
      xRange: [-4, 4],
      yRange: [0, 8],
      textAnnotations: [
        { x: 0, y: 7.2, text: "r = 5", color: "#ea580c", fontWeight: "bold" },
        { x: 2.8, y: 4, text: "h = 8", color: "#475569" },
        { x: 0, y: 3.5, text: "Volume V = x", color: "#3b82f6", fontWeight: "bold" }
      ],
      curves: [
        {
          type: "ellipse",
          ellipse: { cx: 0, cy: 7, rx: 2.2, ry: 0.7 },
          color: "#3b82f6"
        },
        {
          type: "ellipse",
          ellipse: { cx: 0, cy: 1, rx: 2.2, ry: 0.7 },
          color: "#3b82f6"
        },
        {
          type: "line",
          color: "#3b82f6",
          points: [[-2.2, 1], [-2.2, 7]]
        },
        {
          type: "line",
          color: "#3b82f6",
          points: [[2.2, 1], [2.2, 7]]
        }
      ]
    }
  },
  {
    id: "ch7-ex-q40",
    number: 40,
    exerciseNumber: 2,
    exerciseTitle: "Exercise 2: Area, Volume, Lines & Triangles",
    question: "A cone has base radius 6 and height 15. What is its volume?",
    options: ["90π", "120π", "150π", "180π"],
    correctIndex: 3,
    correctAnswerText: "180π",
    explanation: `Step-by-Step Mathematical Explanation:
1. Recall the volume formula for a cone (Technique 4):
   $$V = \\frac{1}{3} \\pi r^2 h$$
2. Substitute $r = 6$ and $h = 15$:
   $$V = \\frac{1}{3} \\pi (6)^2 (15) = \\frac{1}{3} \\pi (36) (15) = 12 \\times 15 \\pi = 180\\pi$$

Distractor Analysis:
- Option A (90π): Forgot factor of 2.
- Option B (120π): $1/3 \\times 24 \\times 15$.
- Option C (150π): Arithmetic error.
- Option D (180π): CORRECT. $V = 180\\pi$.`,
    diagram: {
      title: "Cone Base Radius 6 and Height 15",
      hideAxes: true,
      hideGrid: true,
      hideTicks: true,
      xRange: [-4, 4],
      yRange: [0, 8],
      textAnnotations: [
        { x: 0, y: 1.5, text: "r = 6", color: "#ea580c" },
        { x: 2.5, y: 4, text: "h = 15", color: "#475569" },
        { x: 0, y: 3.5, text: "Volume V = x", color: "#3b82f6", fontWeight: "bold" }
      ],
      curves: [
        {
          type: "ellipse",
          ellipse: { cx: 0, cy: 1, rx: 2.2, ry: 0.7 },
          color: "#3b82f6"
        },
        {
          type: "line",
          color: "#3b82f6",
          points: [[-2.2, 1], [0, 7], [2.2, 1]]
        }
      ]
    }
  },
  {
    id: "ch7-ex-q41",
    number: 41,
    exerciseNumber: 2,
    exerciseTitle: "Exercise 2: Area, Volume, Lines & Triangles",
    question: "A sphere has a radius of 3. What is its volume?",
    options: ["9π", "18π", "27π", "36π"],
    correctIndex: 3,
    correctAnswerText: "36π",
    explanation: `Step-by-Step Mathematical Explanation:
1. Recall the sphere volume formula (Technique 4):
   $$V = \\frac{4}{3} \\pi r^3$$
2. Substitute $r = 3$:
   $$V = \\frac{4}{3} \\pi (3)^3 = \\frac{4}{3} \\pi (27) = 4 \\times 9 \\pi = 36\\pi$$

Distractor Analysis:
- Option A (9π): Used area formula $\\pi r^2 = 9\\pi$.
- Option B (18π): Divided by 2.
- Option C (27π): Used $r^3 \\pi$.
- Option D (36π): CORRECT. $V = 36\\pi$.`,
    diagram: {
      title: "Sphere with Radius 3",
      hideAxes: true,
      hideGrid: true,
      hideTicks: true,
      xRange: [-4, 4],
      yRange: [-4, 4],
      textAnnotations: [
        { x: 1.2, y: 0.3, text: "r = 3", color: "#ea580c", fontWeight: "bold" },
        { x: 0, y: -2.2, text: "Volume V = x", color: "#3b82f6", fontWeight: "bold" }
      ],
      curves: [
        {
          type: "circle",
          circle: { cx: 0, cy: 0, r: 2.8 },
          color: "#3b82f6"
        },
        {
          type: "ellipse",
          ellipse: { cx: 0, cy: 0, rx: 2.8, ry: 0.8 },
          style: "dashed",
          color: "#cbd5e1"
        },
        {
          type: "line",
          style: "dashed",
          color: "#ea580c",
          points: [[0, 0], [2.8, 0]]
        }
      ]
    }
  },
  {
    id: "ch7-ex-q42",
    number: 42,
    exerciseNumber: 2,
    exerciseTitle: "Exercise 2: Area, Volume, Lines & Triangles",
    question: "A rectangular prism has dimensions 3, 4, and 8. If each dimension is multiplied by 5, by what factor does its volume increase?",
    options: ["5", "15", "25", "125"],
    correctIndex: 3,
    correctAnswerText: "125",
    explanation: `Step-by-Step Mathematical Explanation:
1. Apply the Scale Factor Rule for volume (Technique 8):
   - Linear scale factor = $k = 5$
   - Volume scale factor = $k^3 = 5^3 = 125$
2. Regardless of the original dimensions, multiplying all lengths by 5 increases the volume by $5^3 = 125$ times!

Distractor Analysis:
- Option A (5): Linear length factor.
- Option B (15): Multiplied linear factor by 3 ($5 \\times 3$).
- Option C (25): Area scale factor $k^2 = 5^2 = 25$.
- Option D (125): CORRECT. $k^3 = 125$.`,
    diagram: {
      title: "Rectangular Prism Dimension Scaling",
      hideAxes: true,
      hideGrid: true,
      hideTicks: true,
      xRange: [0, 10],
      yRange: [0, 6],
      textAnnotations: [
        { x: 2, y: 0.8, text: "Prism A", color: "#475569" },
        { x: 7, y: 0.8, text: "Prism B (5x dimensions)", color: "#ea580c", fontWeight: "bold" },
        { x: 4.5, y: 3.5, text: "Volume Multiplied by = x", color: "#3b82f6", fontWeight: "bold" }
      ],
      curves: [
        {
          type: "line",
          color: "#3b82f6",
          points: [[1, 1.5], [2.5, 1.5], [2.5, 3], [1, 3], [1, 1.5]]
        },
        {
          type: "line",
          color: "#ea580c",
          points: [[4.5, 1.5], [9.5, 1.5], [9.5, 5.0], [4.5, 5.0], [4.5, 1.5]]
        }
      ]
    }
  },
  {
    id: "ch7-ex-q43",
    number: 43,
    exerciseNumber: 2,
    exerciseTitle: "Exercise 2: Area, Volume, Lines & Triangles",
    question: "Two similar figures have corresponding side lengths in the ratio 4 : 7. What is the ratio of their areas?",
    options: ["4 : 7", "8 : 14", "16 : 49", "64 : 343"],
    correctIndex: 2,
    correctAnswerText: "16 : 49",
    explanation: `Step-by-Step Mathematical Explanation:
1. Apply the Area Scale Factor Rule (Technique 8):
   $$\\text{Area Ratio} = k^2 = \\left(\\frac{4}{7}\\right)^2 = \\frac{16}{49}$$
2. The ratio of their areas is $16 : 49$.

Distractor Analysis:
- Option A (4 : 7): Linear ratio.
- Option B (8 : 14): Doubled ratio.
- Option C (16 : 49): CORRECT. $4^2 : 7^2 = 16 : 49$.
- Option D (64 : 343): Cube ratio $4^3 : 7^3 = 64 : 343$ (for volume).`,
    diagram: {
      title: "Similar Figures Area Scaling",
      hideAxes: true,
      hideGrid: true,
      hideTicks: true,
      xRange: [0, 10],
      yRange: [0, 6],
      textAnnotations: [
        { x: 2, y: 2.5, text: "Area 1", color: "#3b82f6", fontWeight: "bold" },
        { x: 7, y: 3.0, text: "Area 2", color: "#ea580c", fontWeight: "bold" }
      ],
      curves: [
        {
          type: "line",
          color: "#3b82f6",
          points: [[1, 1.5], [3, 1.5], [3, 3.5], [1, 3.5], [1, 1.5]]
        },
        {
          type: "line",
          color: "#ea580c",
          points: [[4.5, 1.5], [9.5, 1.5], [9.5, 5.0], [4.5, 5.0], [4.5, 1.5]]
        }
      ]
    }
  },
  {
    id: "ch7-ex-q44",
    number: 44,
    exerciseNumber: 2,
    exerciseTitle: "Exercise 2: Area, Volume, Lines & Triangles",
    question: "Two angles are supplementary. If their measures are in the ratio 3 : 7, what is the measure of the smaller angle?",
    options: ["45°", "54°", "63°", "72°"],
    correctIndex: 1,
    correctAnswerText: "54°",
    explanation: `Step-by-Step Mathematical Explanation:
1. Supplementary angles sum to $180^\\circ$.
2. Express the two angles as $3x$ and $7x$:
   $$3x + 7x = 180$$
   $$10x = 180 \\implies x = 18^\\circ$$
3. Calculate the smaller angle ($3x$):
   $$\\text{Smaller Angle} = 3(18^\\circ) = 54^\\circ$$
4. Check larger angle: $7(18^\\circ) = 126^\\circ$. Sum = $54^\circ + 126^\circ = 180^\circ$.

Distractor Analysis:
- Option A (45°): $180 / 4$.
- Option B (54°): CORRECT. $3 \\times 18^\circ = 54^\circ$.
- Option C (63°): Calculated $3.5 \\times 18$.
- Option D (72°): $4 \\times 18^\circ$.`,
    diagram: {
      title: "Supplementary Angles",
      hideAxes: true,
      hideGrid: true,
      hideTicks: true,
      xRange: [0, 10],
      yRange: [0, 6],
      textAnnotations: [
        { x: 3.5, y: 3.2, text: "Smaller Angle", color: "#3b82f6", fontWeight: "bold" },
        { x: 6.5, y: 3.2, text: "Larger Angle", color: "#475569" }
      ],
      angleArcs: [
        { center: [5, 2], radius: 1.2, startAngle: 0, endAngle: 54, color: "#3b82f6", label: "3x" },
        { center: [5, 2], radius: 1.2, startAngle: 54, endAngle: 180, color: "#475569", label: "7x" }
      ],
      curves: [
        {
          type: "line",
          color: "#475569",
          points: [[1, 2], [9, 2]]
        },
        {
          type: "line",
          color: "#3b82f6",
          points: [[5, 2], [8, 5.5]]
        }
      ]
    }
  },
  {
    id: "ch7-ex-q45",
    number: 45,
    exerciseNumber: 2,
    exerciseTitle: "Exercise 2: Area, Volume, Lines & Triangles",
    question: "Two parallel lines are cut by a transversal. Two same-side (consecutive) interior angles measure (3x + 10)° and (5x − 6)°. What is the value of x?",
    options: ["20", "21", "22", "23"],
    correctIndex: 2,
    correctAnswerText: "22",
    explanation: `Step-by-Step Mathematical Explanation:
1. Apply the Fast Visual Rule for parallel lines (Technique 6): Same-side interior angles ADD TO $180^\\circ$:
   $$(3x + 10) + (5x - 6) = 180$$
2. Combine like terms:
   $$8x + 4 = 180$$
3. Subtract 4:
   $$8x = 176$$
4. Divide by 8:
   $$x = \\frac{176}{8} = 22$$

Distractor Analysis:
- Option A (20): Arithmetic slip.
- Option B (21): $172/8$.
- Option C (22): CORRECT. $x = 22$.
- Option D (23): $184/8$.`,
    diagram: {
      title: "Parallel Lines with Same-Side Interior Angles",
      hideAxes: true,
      hideGrid: true,
      hideTicks: true,
      xRange: [0, 10],
      yRange: [0, 8],
      textAnnotations: [
        { x: 1.5, y: 5.3, text: "L1", color: "#475569" },
        { x: 1.5, y: 2.3, text: "L2", color: "#475569" }
      ],
      angleArcs: [
        { center: [6.5, 5], radius: 0.9, startAngle: 180, endAngle: 230, color: "#3b82f6", label: "(3x+10)°" },
        { center: [4, 2], radius: 0.9, startAngle: 0, endAngle: 50, color: "#ea580c", label: "(5x-6)°" }
      ],
      curves: [
        { type: "line", color: "#475569", points: [[1, 5], [9, 5]] },
        { type: "line", color: "#475569", points: [[1, 2], [9, 2]] },
        { type: "line", color: "#ea580c", points: [[3, 0.8], [7, 5.6]] }
      ]
    }
  },
  {
    id: "ch7-ex-q46",
    number: 46,
    exerciseNumber: 2,
    exerciseTitle: "Exercise 2: Area, Volume, Lines & Triangles",
    question: "Two vertical angles measure (4x + 8)° and (6x − 24)°. What is the value of x?",
    options: ["12", "14", "16", "18"],
    correctIndex: 2,
    correctAnswerText: "16",
    explanation: `Step-by-Step Mathematical Explanation:
1. Vertical angles are opposite each other when two lines intersect, and they are ALWAYS EQUAL:
   $$4x + 8 = 6x - 24$$
2. Subtract $4x$ from both sides:
   $$8 = 2x - 24$$
3. Add 24 to both sides:
   $$2x = 32 \\implies x = 16$$

Distractor Analysis:
- Option A (12): $24 / 2$.
- Option B (14): $28 / 2$.
- Option C (16): CORRECT. $x = 16$.
- Option D (18): $36 / 2$.`,
    diagram: {
      title: "Vertical Angles",
      hideAxes: true,
      hideGrid: true,
      hideTicks: true,
      xRange: [0, 10],
      yRange: [0, 8],
      textAnnotations: [
        { x: 6.8, y: 4.6, text: "(4x + 8)°", color: "#3b82f6" },
        { x: 3.1, y: 4.6, text: "(6x - 24)°", color: "#3b82f6" }
      ],
      curves: [
        { type: "line", color: "#475569", points: [[1, 4], [9, 4]] },
        { type: "line", color: "#ea580c", points: [[2, 1], [8, 7]] }
      ],
      angleArcs: [
        { center: [5, 4], radius: 1.0, startAngle: 0, endAngle: 45, color: "#3b82f6", label: "A" },
        { center: [5, 4], radius: 1.0, startAngle: 180, endAngle: 225, color: "#3b82f6", label: "B" }
      ]
    }
  },
  {
    id: "ch7-ex-q47",
    number: 47,
    exerciseNumber: 2,
    exerciseTitle: "Exercise 2: Area, Volume, Lines & Triangles",
    question: "A triangle has interior angles measuring (2x + 5)°, (3x − 10)°, and (4x + 5)°. What is the value of x?",
    options: ["18", "20", "22", "24"],
    correctIndex: 1,
    correctAnswerText: "20",
    explanation: `Step-by-Step Mathematical Explanation:
1. The sum of the interior angles of any triangle is ALWAYS $180^\\circ$:
   $$(2x + 5) + (3x - 10) + (4x + 5) = 180$$
2. Combine like terms:
   $$9x + 0 = 180$$
   $$9x = 180 \\implies x = 20$$

Distractor Analysis:
- Option A (18): $180/10$.
- Option B (20): CORRECT. $x = 20$.
- Option C (22): $198/9$.
- Option D (24): $216/9$.`,
    diagram: {
      title: "Triangle Interior Angles",
      hideAxes: true,
      hideGrid: true,
      hideTicks: true,
      xRange: [0, 10],
      yRange: [0, 8],
      textAnnotations: [
        { x: 5, y: 4, text: "x", color: "#3b82f6", fontWeight: "bold" }
      ],
      angleArcs: [
        { center: [2, 2], radius: 0.9, startAngle: 0, endAngle: 50, color: "#3b82f6", label: "(2x+5)°" },
        { center: [8, 2], radius: 0.9, startAngle: 130, endAngle: 180, color: "#ea580c", label: "(3x-10)°" },
        { center: [5, 6.5], radius: 0.8, startAngle: 230, endAngle: 310, color: "#16a34a", label: "(4x+5)°" }
      ],
      curves: [
        { type: "line", color: "#475569", points: [[2, 2], [8, 2], [5, 6.5], [2, 2]] }
      ]
    }
  },
  {
    id: "ch7-ex-q48",
    number: 48,
    exerciseNumber: 2,
    exerciseTitle: "Exercise 2: Area, Volume, Lines & Triangles",
    question: "A regular polygon has an interior-angle sum of 1,440°. How many sides does the polygon have?",
    options: ["7","9","10","12"],
    correctIndex: 2,
    correctAnswerText: "10",
    explanation: `Step-by-Step Mathematical Explanation:
1. Use the polygon interior angle sum formula:
   $$\\text{Sum} = (n - 2) \\times 180^\\circ$$
2. Set equal to 1,440°:
   $$(n - 2) \\times 180 = 1440$$
3. Divide by 180:
   $$n - 2 = \\frac{1440}{180} = 8$$
4. Add 2 to both sides:
   $$n = 10\\text{ sides (a decagon)}$$

Distractor Analysis:
- Option A (8): Forgot to add 2 ($n - 2 = 8$).
- Option B (9): Arithmetic error.
- Option C (10): CORRECT. $n = 10$.
- Option D (12): $1440/120 = 12$.`,
    diagram: {
      title: "Regular Polygon Interior Angle Sum 1,440°",
      hideAxes: true,
      hideGrid: true,
      hideTicks: true,
      xRange: [0, 10],
      yRange: [0, 8],
      textAnnotations: [
        { x: 5, y: 4, text: "Sum = 1,440°", color: "#3b82f6", fontWeight: "bold" },
        { x: 5, y: 2, text: "Number of sides n = x", color: "#ea580c", fontWeight: "bold" }
      ],
      curves: [
        {
          type: "line",
          color: "#3b82f6",
          points: [[7.5, 4], [7.02, 5.47], [5.77, 6.38], [4.23, 6.38], [2.98, 5.47], [2.5, 4], [2.98, 2.53], [4.23, 1.62], [5.77, 1.62], [7.02, 2.53], [7.5, 4]]
        }
      ]
    }
  },
  {
    id: "ch7-ex-q49",
    number: 49,
    exerciseNumber: 2,
    exerciseTitle: "Exercise 2: Area, Volume, Lines & Triangles",
    question: "Each interior angle of a regular polygon measures 150°. How many sides does the polygon have?",
    options: ["8 cm","10 cm","12 cm","15 cm"],
    correctIndex: 2,
    correctAnswerText: "12 cm",
    explanation: `Step-by-Step Mathematical Explanation:
1. **Shortcut Method (Exterior Angles)**:
   - Each interior angle = $150^\\circ \\implies$ Each exterior angle = $180^\\circ - 150^\\circ = 30^\\circ$.
   - The sum of exterior angles of ANY convex polygon is ALWAYS $360^\\circ$:
     $$n = \\frac{360^\\circ}{30^\\circ} = 12\\text{ sides}$$
2. **Formula Method**:
   $$\\frac{(n - 2) \\times 180}{n} = 150 \\implies 180n - 360 = 150n \\implies 30n = 360 \\implies n = 12$$

Distractor Analysis:
- Option A (8): $360 / 45 = 8$.
- Option B (10): $360 / 36 = 10$.
- Option C (12): CORRECT. $n = 12$.
- Option D (15): $360 / 24 = 15$.`,
    diagram: {
      title: "Regular Polygon Interior Angle 150°",
      hideAxes: true,
      hideGrid: true,
      hideTicks: true,
      xRange: [0, 10],
      yRange: [0, 8],
      textAnnotations: [
        { x: 5, y: 4, text: "Interior Angle = 150°", color: "#3b82f6", fontWeight: "bold" },
        { x: 5, y: 2.5, text: "Number of sides n = x", color: "#16a34a", fontWeight: "bold" }
      ],
      curves: [
        {
          type: "line",
          color: "#3b82f6",
          points: [[7.5, 4], [7.17, 5.25], [6.25, 6.17], [5, 6.5], [3.75, 6.17], [2.83, 5.25], [2.5, 4], [2.83, 2.75], [3.75, 1.83], [5, 1.5], [6.25, 1.83], [7.17, 2.75], [7.5, 4]]
        }
      ]
    }
  },
  {
    id: "ch7-ex-q50",
    number: 50,
    exerciseNumber: 2,
    exerciseTitle: "Exercise 2: Area, Volume, Lines & Triangles",
    question: "Triangle A has side lengths 7, 10, and 12. Triangle B also has side lengths 7, 10, and 12. Which statement MUST be true?",
    options: [
      "They are similar but not necessarily congruent.",
      "They are congruent.",
      "They have equal areas but may have different shapes.",
      "No relationship can be determined."
    ],
    correctIndex: 1,
    correctAnswerText: "They are congruent.",
    explanation: `Step-by-Step Mathematical Explanation:
1. According to the SSS (Side-Side-Side) Congruence Postulate, if three sides of one triangle are equal to three sides of another triangle, the two triangles are CONGRUENT.
2. Congruent figures have identical shapes, sizes, corresponding side lengths, and corresponding angles.

Distractor Analysis:
- Option A: SSS proves full congruence, not just similarity.
- Option B: CORRECT.
- Option C: Congruent triangles must have the exact same shape.
- Option D: SSS provides complete information.`,
    diagram: {
      title: "SSS Congruence Postulate",
      hideAxes: true,
      hideGrid: true,
      hideTicks: true,
      xRange: [0, 10],
      yRange: [0, 6],
      textAnnotations: [
        { x: 2.5, y: 4.8, text: "Triangle A (7, 10, 12)", color: "#3b82f6", fontWeight: "bold" },
        { x: 7.5, y: 4.8, text: "Triangle B (7, 10, 12)", color: "#ea580c", fontWeight: "bold" }
      ],
      curves: [
        { type: "line", color: "#3b82f6", points: [[1, 1.5], [4, 1.5], [2.5, 4.0], [1, 1.5]] },
        { type: "line", color: "#ea580c", points: [[6, 1.5], [9, 1.5], [7.5, 4.0], [6, 1.5]] }
      ]
    }
  },
  {
    id: "ch7-ex-q51",
    number: 51,
    exerciseNumber: 2,
    exerciseTitle: "Exercise 2: Area, Volume, Lines & Triangles",
    question: "Two similar triangles have corresponding side lengths of 6 and 15. If another side of the smaller triangle is 8, what is the length of the corresponding side of the larger triangle?",
    options: ["12", "16", "20", "24"],
    correctIndex: 2,
    correctAnswerText: "20",
    explanation: `Step-by-Step Mathematical Explanation:
1. Set up a proportion using corresponding sides of similar triangles:
   $$\\frac{\\text{Side}_{\\text{small}}}{\\text{Side}_{\\text{large}}} = \\frac{6}{15}$$
2. Simplify $\\frac{6}{15} = \\frac{2}{5}$.
3. Set equal to the given side:
   $$\\frac{8}{x} = \\frac{2}{5} \\implies 2x = 40 \\implies x = 20$$

Distractor Analysis:
- Option A (12): $8 \\times 1.5 = 12$.
- Option B (16): $8 \\times 2 = 16$.
- Option C (20): CORRECT. $x = 20$.
- Option D (24): $8 \\times 3 = 24$.`,
    diagram: {
      title: "Similar Triangles Proportional Sides",
      hideAxes: true,
      hideGrid: true,
      hideTicks: true,
      xRange: [0, 10],
      yRange: [0, 6],
      textAnnotations: [
        { x: 2, y: 0.8, text: "Sides: 6, 8", color: "#3b82f6", fontWeight: "bold" },
        { x: 7, y: 0.8, text: "Sides: 15, x", color: "#ea580c", fontWeight: "bold" }
      ],
      curves: [
        { type: "line", color: "#3b82f6", points: [[1, 1.5], [3, 1.5], [2, 3.5], [1, 1.5]] },
        { type: "line", color: "#ea580c", points: [[4.5, 1.5], [9.5, 1.5], [7.0, 5.0], [4.5, 1.5]] }
      ]
    }
  },
  {
    id: "ch7-ex-q52",
    number: 52,
    exerciseNumber: 2,
    exerciseTitle: "Exercise 2: Area, Volume, Lines & Triangles",
    question: "Two similar rectangles have corresponding side lengths in the ratio 3 : 5. If the smaller rectangle has an area of 72 square units, what is the area of the larger rectangle?",
    options: ["120", "150", "180", "200"],
    correctIndex: 3,
    correctAnswerText: "200",
    explanation: `Step-by-Step Mathematical Explanation:
1. The area scale factor for similar figures is $k^2 = \\left(\\frac{3}{5}\\right)^2 = \\frac{9}{25}$.
2. Set up the area proportion:
   $$\\frac{\\text{Area}_{\\text{small}}}{\\text{Area}_{\\text{large}}} = \\frac{9}{25} \\implies \\frac{72}{A_{\\text{large}}} = \\frac{9}{25}$$
3. Solve for $A_{\\text{large}}$:
   $$9 \\cdot A_{\\text{large}} = 72 \\times 25$$
   $$A_{\\text{large}} = 8 \\times 25 = 200$$

Distractor Analysis:
- Option A (120): Used linear multiplier $72 \\times 5/3 = 120$.
- Option B (150): Arithmetic error.
- Option C (180): $72 \\times 2.5$.
- Option D (200): CORRECT. $A = 200$.`,
    diagram: {
      title: "Similar Rectangles Area Ratio",
      hideAxes: true,
      hideGrid: true,
      hideTicks: true,
      xRange: [0, 10],
      yRange: [0, 6],
      textAnnotations: [
        { x: 2, y: 3.5, text: "Area = 72", color: "#3b82f6", fontWeight: "bold" },
        { x: 7, y: 4.5, text: "Area = x", color: "#ea580c", fontWeight: "bold" }
      ],
      curves: [
        { type: "line", color: "#3b82f6", points: [[1, 1.5], [3, 1.5], [3, 3.0], [1, 3.0], [1, 1.5]] },
        { type: "line", color: "#ea580c", points: [[4.5, 1.5], [9.5, 1.5], [9.5, 4.0], [4.5, 4.0], [4.5, 1.5]] }
      ]
    }
  },
  {
    id: "ch7-ex-q53",
    number: 53,
    exerciseNumber: 2,
    exerciseTitle: "Exercise 2: Area, Volume, Lines & Triangles",
    question: "Two triangles have two corresponding angles equal and one pair of corresponding side lengths proportional. Which conclusion is BEST supported?",
    options: [
      "The triangles are similar.",
      "The triangles must be congruent.",
      "The triangles must be equilateral.",
      "No relationship can be determined."
    ],
    correctIndex: 0,
    correctAnswerText: "The triangles are similar.",
    explanation: `Step-by-Step Mathematical Explanation:
1. By the AA (Angle-Angle) Similarity Postulate, if two angles of one triangle are equal to two angles of another triangle, the two triangles are SIMILAR.
2. Similarity guarantees that all corresponding side lengths are proportional.

Distractor Analysis:
- Option A: CORRECT. AA proves similarity.
- Option B: Congruence requires at least one exact matching side length, not just proportionality.
- Option C: Angles are not required to be 60°.
- Option D: AA provides sufficient proof.`,
    diagram: {
      title: "AA Similarity Postulate",
      hideAxes: true,
      hideGrid: true,
      hideTicks: true,
      xRange: [0, 10],
      yRange: [0, 6],
      textAnnotations: [
        { x: 2, y: 4.5, text: "AA Similarity", color: "#3b82f6", fontWeight: "bold" }
      ],
      curves: [
        { type: "line", color: "#3b82f6", points: [[1, 1.5], [3, 1.5], [2, 3.5], [1, 1.5]] },
        { type: "line", color: "#ea580c", points: [[4.5, 1.5], [9.5, 1.5], [7.0, 5.0], [4.5, 1.5]] }
      ]
    }
  },
  {
    id: "ch7-ex-q54",
    number: 54,
    exerciseNumber: 2,
    exerciseTitle: "Exercise 2: Area, Volume, Lines & Triangles",
    question: "A triangle has side lengths of 9, 12, and 15. Which statement is true?",
    options: [
      "It is an equilateral triangle.",
      "It is an isosceles triangle.",
      "It is a right triangle.",
      "It is impossible to classify."
    ],
    correctIndex: 2,
    correctAnswerText: "It is a right triangle.",
    explanation: `Step-by-Step Mathematical Explanation:
1. Check the Pythagorean Theorem ($a^2 + b^2 = c^2$):
   $$9^2 + 12^2 = 81 + 144 = 225$$
   $$15^2 = 225$$
2. Since $9^2 + 12^2 = 15^2$, the triangle satisfies the Converse of the Pythagorean Theorem and is a RIGHT TRIANGLE.
3. Note that (9, 12, 15) is a $3 \\times$ multiple of the fundamental (3, 4, 5) Pythagorean Triple!

Distractor Analysis:
- Option A: Equilateral requires all 3 sides equal.
- Option B: Isosceles requires 2 sides equal.
- Option C: CORRECT. Fits $a^2 + b^2 = c^2$.
- Option D: Fully classifiable using side lengths.`,
    diagram: {
      title: "Triangle with Sides 9, 12, and 15",
      hideAxes: true,
      hideGrid: true,
      hideTicks: true,
      xRange: [0, 10],
      yRange: [0, 8],
      textAnnotations: [
        { x: 1.4, y: 3.9, text: "9", color: "#475569" },
        { x: 5.0, y: 2.3, text: "12", color: "#475569" },
        { x: 5.4, y: 4.3, text: "Side 15", color: "#3b82f6", fontWeight: "bold" }
      ],
      curves: [
        { type: "line", color: "#3b82f6", points: [[2, 6], [2, 1.8], [7.8, 1.8], [2, 6]] },
        { type: "line", color: "#475569", points: [[2, 2.2], [2.4, 2.2], [2.4, 1.8]] }
      ]
    }
  },
  {
    id: "ch7-ex-q55",
    number: 55,
    exerciseNumber: 2,
    exerciseTitle: "Exercise 2: Area, Volume, Lines & Triangles",
    question: "A right triangle has legs measuring 20 and 21. What is the length of its hypotenuse?",
    options: ["28", "29", "30", "31"],
    correctIndex: 1,
    correctAnswerText: "29",
    explanation: `Step-by-Step Mathematical Explanation:
1. Use the Pythagorean Theorem ($a^2 + b^2 = c^2$):
   $$20^2 + 21^2 = c^2$$
   $$400 + 441 = c^2$$
   $$841 = c^2$$
2. Take the square root:
   $$c = \\sqrt{841} = 29$$
3. (20-21-29) is a standard integer Pythagorean triple!

Distractor Analysis:
- Option A (28): Arithmetic error.
- Option B (29): CORRECT. $\\sqrt{841} = 29$.
- Option C (30): $20 + 21 - 11$.
- Option D (31): Simple sum $20 + 21 = 41 - 10$.`,
    diagram: {
      title: "Right Triangle Legs 20 and 21",
      hideAxes: true,
      hideGrid: true,
      hideTicks: true,
      xRange: [0, 10],
      yRange: [0, 8],
      textAnnotations: [
        { x: 1.4, y: 3.9, text: "20", color: "#475569" },
        { x: 5.0, y: 2.3, text: "21", color: "#475569" },
        { x: 5.4, y: 4.3, text: "Hypotenuse c = x", color: "#3b82f6", fontWeight: "bold" }
      ],
      curves: [
        { type: "line", color: "#3b82f6", points: [[2, 6], [2, 1.8], [7.8, 1.8], [2, 6]] },
        { type: "line", color: "#475569", points: [[2, 2.2], [2.4, 2.2], [2.4, 1.8]] }
      ]
    }
  },
  {
    id: "ch7-ex-q56",
    number: 56,
    exerciseNumber: 2,
    exerciseTitle: "Exercise 2: Area, Volume, Lines & Triangles",
    question: "A right triangle has a hypotenuse of 25 and one leg of 15. What is the length of the other leg?",
    options: ["10", "15", "20", "22"],
    correctIndex: 2,
    correctAnswerText: "20",
    explanation: `Step-by-Step Mathematical Explanation:
1. Apply the Pythagorean Theorem:
   $$a^2 + 15^2 = 25^2$$
   $$a^2 + 225 = 625$$
   $$a^2 = 400 \\implies a = \\sqrt{400} = 20$$
2. Note that (15, 20, 25) is a $5 \\times$ multiple of the fundamental (3, 4, 5) triple!

Distractor Analysis:
- Option A (10): $25 - 15 = 10$.
- Option B (15): Leg length match.
- Option C (20): CORRECT. $a = 20$.
- Option D (22): Arithmetic error.`,
    diagram: {
      title: "Right Triangle Hypotenuse 25 and Leg 15",
      hideAxes: true,
      hideGrid: true,
      hideTicks: true,
      xRange: [0, 10],
      yRange: [0, 8],
      textAnnotations: [
        { x: 1.4, y: 3.9, text: "15", color: "#475569" },
        { x: 5.0, y: 2.3, text: "Leg a = x", color: "#3b82f6", fontWeight: "bold" },
        { x: 5.4, y: 4.3, text: "25", color: "#ea580c", fontWeight: "bold" }
      ],
      curves: [
        { type: "line", color: "#3b82f6", points: [[2, 6], [2, 1.8], [7.8, 1.8], [2, 6]] },
        { type: "line", color: "#475569", points: [[2, 2.2], [2.4, 2.2], [2.4, 1.8]] }
      ]
    }
  },
  {
    id: "ch7-ex-q57",
    number: 57,
    exerciseNumber: 2,
    exerciseTitle: "Exercise 2: Area, Volume, Lines & Triangles",
    question: "A 45°−45°−90° special right triangle has a hypotenuse of 18. What is the length of each leg?",
    options: ["9", "9√2", "18√2", "18"],
    correctIndex: 1,
    correctAnswerText: "9√2",
    explanation: `Step-by-Step Mathematical Explanation:
1. In a $45^\\circ-45^\\circ-90^\\circ$ triangle (Technique 4), side ratios are $x : x : x\\sqrt{2}$.
2. Set $x\\sqrt{2} = 18$:
   $$x = \\frac{18}{\\sqrt{2}} = \\frac{18\\sqrt{2}}{2} = 9\\sqrt{2}$$

Distractor Analysis:
- Option A (9): Half of 18 ($18/2$).
- Option B (9√2): CORRECT. $x = 9\\sqrt{2}$.
- Option C (18√2): Multiplied by $\\sqrt{2}$ instead of dividing.
- Option D (18): Hypotenuse length.`,
    diagram: {
      title: "45°-45°-90° Triangle with Hypotenuse 18",
      hideAxes: true,
      hideGrid: true,
      hideTicks: true,
      xRange: [0, 8],
      yRange: [0, 6],
      textAnnotations: [
        { x: 1.3, y: 3.0, text: "Leg x", color: "#3b82f6", fontWeight: "bold" },
        { x: 3.9, y: 2.3, text: "Leg x", color: "#3b82f6", fontWeight: "bold" },
        { x: 4.1, y: 3.3, text: "18", color: "#ea580c", fontWeight: "bold" }
      ],
      curves: [
        { type: "line", color: "#3b82f6", points: [[2, 4.2], [2, 1.8], [5.8, 1.8], [2, 4.2]] },
        { type: "line", color: "#475569", points: [[2, 2.1], [2.3, 2.1], [2.3, 1.8]] }
      ]
    }
  },
  {
    id: "ch7-ex-q58",
    number: 58,
    exerciseNumber: 2,
    exerciseTitle: "Exercise 2: Area, Volume, Lines & Triangles",
    question: "A 30°−60°−90° special right triangle has a long leg of 10√3. What is the length of its short leg?",
    options: ["5", "10", "20", "30"],
    correctIndex: 1,
    correctAnswerText: "10",
    explanation: `Step-by-Step Mathematical Explanation:
1. In a $30^\\circ-60^\\circ-90^\\circ$ triangle (Technique 5), side ratios are $x : x\\sqrt{3} : 2x$.
2. The long leg (opposite $60^\\circ$) is $x\\sqrt{3} = 10\\sqrt{3}$.
3. Divide by $\\sqrt{3}$ to find the short leg $x$:
   $$x = \\frac{10\\sqrt{3}}{\\sqrt{3}} = 10$$

Distractor Analysis:
- Option A (5): Half of 10.
- Option B (10): CORRECT. Short leg $x = 10$.
- Option C (20): Hypotenuse length $2x = 20$.
- Option D (30): $10 \\times 3 = 30$.`,
    diagram: {
      title: "30°-60°-90° Triangle with Long Leg 10√3",
      hideAxes: true,
      hideGrid: true,
      hideTicks: true,
      xRange: [0, 8],
      yRange: [0, 6],
      textAnnotations: [
        { x: 1.3, y: 3.0, text: "Short Leg x", color: "#3b82f6", fontWeight: "bold" },
        { x: 4.1, y: 2.3, text: "Adjacent", color: "#475569", fontWeight: "bold" },
        { x: 4.3, y: 3.3, text: "Hypotenuse", color: "#ea580c" }
      ],
      curves: [
        { type: "line", color: "#3b82f6", points: [[2, 4.2], [2, 1.8], [6.2, 1.8], [2, 4.2]] },
        { type: "line", color: "#475569", points: [[2, 2.1], [2.3, 2.1], [2.3, 1.8]] }
      ]
    }
  },
  {
    id: "ch7-ex-q59",
    number: 59,
    exerciseNumber: 2,
    exerciseTitle: "Exercise 2: Area, Volume, Lines & Triangles",
    question: "In a right triangle, relative to angle θ, the side opposite is 15 and the side adjacent is 8. Which expression represents tan θ?",
    options: ["8/15", "15/8", "8/17", "15/17"],
    correctIndex: 1,
    correctAnswerText: "15/8",
    explanation: `Step-by-Step Mathematical Explanation:
1. Apply SOH-CAH-TOA definitions (Technique 19):
   $$\\tan \\theta = \\frac{\\text{Opposite}}{\\text{Adjacent}}$$
2. Substitute $\\text{Opposite} = 15$ and $\\text{Adjacent} = 8$:
   $$\\tan \\theta = \\frac{15}{8}$$

Distractor Analysis:
- Option A (8/15): Inverted ratio $\\cot \\theta = \\text{adj/opp}$.
- Option B (15/8): CORRECT. $\\tan \\theta = 15/8$.
- Option C (8/17): $\\cos \\theta = \\text{adj/hyp}$.
- Option D (15/17): $\\sin \\theta = \\text{opp/hyp}$.`,
    diagram: {
      title: "Right Triangle Ratios for Angle θ",
      hideAxes: true,
      hideGrid: true,
      hideTicks: true,
      xRange: [0, 10],
      yRange: [0, 8],
      textAnnotations: [
        { x: 1.4, y: 3.9, text: "Opp = 15", color: "#3b82f6", fontWeight: "bold" },
        { x: 5.0, y: 2.3, text: "Adj = 8", color: "#475569" },
        { x: 5.4, y: 4.3, text: "Hypotenuse", color: "#ea580c" },
        { x: 6.8, y: 2.2, text: "θ", color: "#16a34a", fontWeight: "bold" }
      ],
      angleArcs: [
        { center: [7.8, 1.8], radius: 0.9, startAngle: 140, endAngle: 180, color: "#16a34a", label: "θ" }
      ],
      curves: [
        { type: "line", color: "#3b82f6", points: [[2, 6], [2, 1.8], [7.8, 1.8], [2, 6]] },
        { type: "line", color: "#475569", points: [[2, 2.2], [2.4, 2.2], [2.4, 1.8]] }
      ]
    }
  },
  {
    id: "ch7-ex-q60",
    number: 60,
    exerciseNumber: 2,
    exerciseTitle: "Exercise 2: Area, Volume, Lines & Triangles",
    question: "A right triangle has a hypotenuse of 20 and an acute angle of 30°. What is the length of the side opposite the 30° angle?",
    options: ["5", "10", "10√3", "20"],
    correctIndex: 1,
    correctAnswerText: "10",
    explanation: `Step-by-Step Mathematical Explanation:
1. Apply the sine definition:
   $$\\sin(30^\\circ) = \\frac{\\text{Opposite}}{\\text{Hypotenuse}}$$
2. Substitute $\\sin(30^\\circ) = \\frac{1}{2}$ and $\\text{Hypotenuse} = 20$:
   $$\\frac{1}{2} = \\frac{\\text{Opposite}}{20} \\implies \\text{Opposite} = 20 \\times \\frac{1}{2} = 10$$
3. Alternatively, in a 30°-60°-90° triangle (Technique 5), the short leg opposite 30° is half the hypotenuse ($20/2 = 10$).

Distractor Analysis:
- Option A (5): Quarter of 20.
- Option B (10): CORRECT. $20 \\times \\sin(30^\\circ) = 10$.
- Option C (10√3): Long leg opposite 60°.
- Option D (20): Hypotenuse length.`,
    diagram: {
      title: "Right Triangle with Acute Angle 30°",
      hideAxes: true,
      hideGrid: true,
      hideTicks: true,
      xRange: [0, 8],
      yRange: [0, 6],
      textAnnotations: [
        { x: 1.3, y: 3.0, text: "Opp = x", color: "#3b82f6", fontWeight: "bold" },
        { x: 4.1, y: 2.3, text: "Adjacent", color: "#475569" },
        { x: 4.3, y: 3.3, text: "Hyp = 20", color: "#ea580c", fontWeight: "bold" }
      ],
      angleArcs: [
        { center: [6.2, 1.8], radius: 0.9, startAngle: 150, endAngle: 180, color: "#16a34a", label: "30°" }
      ],
      curves: [
        { type: "line", color: "#3b82f6", points: [[2, 4.2], [2, 1.8], [6.2, 1.8], [2, 4.2]] },
        { type: "line", color: "#475569", points: [[2, 2.1], [2.3, 2.1], [2.3, 1.8]] }
      ]
    }
  }
];
