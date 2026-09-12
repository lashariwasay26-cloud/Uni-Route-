import { MathExerciseQuestion } from './satMathConcepts';

export const CHAPTER_7_QUESTIONS_PART3: MathExerciseQuestion[] = [
  {
    id: "ch7-ex-q61",
    number: 61,
    exerciseNumber: 3,
    exerciseTitle: "Exercise 3: Trig, Circles & Mixed Challenge",
    question: "A right triangle has a hypotenuse of 16 and an acute angle of 60°. What is the length of the side adjacent to the 60° angle?",
    options: ["4", "8", "8√3", "16"],
    correctIndex: 1,
    correctAnswerText: "8",
    explanation: `Step-by-Step Mathematical Explanation:
1. Recall the definition of cosine in a right triangle:
   $$\\cos(60^\\circ) = \\frac{\\text{Adjacent}}{\\text{Hypotenuse}}$$
2. Substitute $\\cos(60^\\circ) = \\frac{1}{2}$ and $\\text{Hypotenuse} = 16$:
   $$\\frac{1}{2} = \\frac{\\text{Adjacent}}{16} \\implies \\text{Adjacent} = 16 \\times \\frac{1}{2} = 8$$
3. Alternatively, in a 30°-60°-90° triangle (Technique 5), the short leg adjacent to 60° is half the hypotenuse ($16/2 = 8$).

Distractor Analysis:
- Option A (4): $16 / 4 = 4$.
- Option B (8): CORRECT. $16 \\times \\cos(60^\\circ) = 8$.
- Option C (8√3): Opposite leg opposite the 60° angle.
- Option D (16): Hypotenuse length.`,
    diagram: {
      title: "Right Triangle Side adjacent to 60°",
      hideAxes: true,
      hideGrid: true,
      hideTicks: true,
      xRange: [0, 8],
      yRange: [0, 6],
      textAnnotations: [
        { x: 1.3, y: 3.0, text: "Opposite", color: "#475569" },
        { x: 4.1, y: 2.3, text: "Adj = x", color: "#3b82f6", fontWeight: "bold" },
        { x: 4.3, y: 3.3, text: "Hyp = 16", color: "#ea580c", fontWeight: "bold" }
      ],
      angleArcs: [
        { center: [6.2, 1.8], radius: 0.9, startAngle: 150, endAngle: 180, color: "#16a34a", label: "60°" }
      ],
      curves: [
        { type: "line", color: "#3b82f6", points: [[2, 4.2], [2, 1.8], [6.2, 1.8], [2, 4.2]] },
        { type: "line", color: "#475569", points: [[2, 2.1], [2.3, 2.1], [2.3, 1.8]] }
      ]
    }
  },
  {
    id: "ch7-ex-q62",
    number: 62,
    exerciseNumber: 3,
    exerciseTitle: "Exercise 3: Trig, Circles & Mixed Challenge",
    question: "A ladder is 18 feet long and makes a 70° angle with the flat ground. Which expression represents the height reached by the ladder up the wall?",
    options: ["18 sin 70°", "18 cos 70°", "18 tan 70°", "18 / sin 70°"],
    correctIndex: 0,
    correctAnswerText: "18 sin 70°",
    explanation: `Step-by-Step Mathematical Explanation:
1. Apply the Fast Decision Rule for Right-Triangle Trig (Technique 19):
   - We are given: Angle $\\theta = 70^\\circ$ and Hypotenuse = 18 ft.
   - We need: Height up the wall = Opposite side.
   - Opposite + Hypotenuse $\\implies$ SIN!
2. Set up the equation:
   $$\\sin(70^\\circ) = \\frac{\\text{Height}}{18} \\implies \\text{Height} = 18 \\sin(70^\\circ)$$

Distractor Analysis:
- Option A (18 sin 70°): CORRECT.
- Option B (18 cos 70°): Calculates ground distance (Adjacent).
- Option C (18 tan 70°): Requires adjacent side instead of hypotenuse.
- Option D (18 / sin 70°): Inverted division.`,
    diagram: {
      title: "Ladder Leaning Against Wall",
      hideAxes: true,
      hideGrid: true,
      hideTicks: true,
      xRange: [0, 8],
      yRange: [0, 8],
      textAnnotations: [
        { x: 3.8, y: 4.3, text: "18 ft", color: "#ea580c", fontWeight: "bold" },
        { x: 1.1, y: 3.8, text: "Height h = x", color: "#3b82f6", fontWeight: "bold" }
      ],
      angleArcs: [
        { center: [6.2, 1.8], radius: 1.2, startAngle: 129, endAngle: 180, color: "#3b82f6", label: "70°" }
      ],
      curves: [
        { type: "line", color: "#475569", points: [[2, 7], [2, 1.8], [7, 1.8]] },
        { type: "line", color: "#ea580c", points: [[2, 6.5], [6.2, 1.8]] }
      ]
    }
  },
  {
    id: "ch7-ex-q63",
    number: 63,
    exerciseNumber: 3,
    exerciseTitle: "Exercise 3: Trig, Circles & Mixed Challenge",
    question: "A building stands on flat ground 40 meters from an observer. The angle of elevation from the observer to the top of the building is 35°. Which expression represents the height of the building?",
    options: ["40 sin 35°", "40 cos 35°", "40 tan 35°", "40 / tan 35°"],
    correctIndex: 2,
    correctAnswerText: "40 tan 35°",
    explanation: `Step-by-Step Mathematical Explanation:
1. Apply the Fast Decision Rule for Right-Triangle Trig (Technique 19):
   - We are given: Angle $\\theta = 35^\\circ$ and Adjacent side = 40 m.
   - We need: Height of building = Opposite side.
   - Opposite + Adjacent $\\implies$ TAN!
2. Set up the equation:
   $$\\tan(35^\\circ) = \\frac{\\text{Height}}{40} \\implies \\text{Height} = 40 \\tan(35^\\circ)$$

Distractor Analysis:
- Option A (40 sin 35°): Incorrectly treats 40 as hypotenuse.
- Option B (40 cos 35°): Uses cosine ratio.
- Option C (40 tan 35°): CORRECT.
- Option D (40 / tan 35°): Inverted division.`,
    diagram: {
      title: "Building Height Expression",
      hideAxes: true,
      hideGrid: true,
      hideTicks: true,
      xRange: [0, 10],
      yRange: [0, 8],
      textAnnotations: [
        { x: 5, y: 2.3, text: "40 m (Adjacent)", color: "#475569" },
        { x: 8.5, y: 4.5, text: "Height h = x", color: "#3b82f6", fontWeight: "bold" }
      ],
      angleArcs: [
        { center: [1.8, 1.8], radius: 1.2, startAngle: 0, endAngle: 35, color: "#3b82f6", label: "35°" }
      ],
      curves: [
        { type: "line", color: "#475569", points: [[1.8, 1.8], [8.2, 1.8], [8.2, 6.28], [1.8, 1.8]] }
      ]
    }
  },
  {
    id: "ch7-ex-q64",
    number: 64,
    exerciseNumber: 3,
    exerciseTitle: "Exercise 3: Trig, Circles & Mixed Challenge",
    question: "Convert 210° to radians.",
    options: ["5π/6", "7π/6", "4π/3", "3π/2"],
    correctIndex: 1,
    correctAnswerText: "7π/6",
    explanation: `Step-by-Step Mathematical Explanation:
1. Apply the degree to radian conversion formula:
   $$\\text{Radians} = \\text{Degrees} \\times \\frac{\\pi}{180^\\circ}$$
2. Substitute $210^\\circ$:
   $$\\text{Radians} = 210 \\times \\frac{\\pi}{180} = \\frac{210}{180} \\pi = \\frac{7}{6}\\pi = \\frac{7\\pi}{6}$$

Distractor Analysis:
- Option A (5π/6): $150^\\circ$.
- Option B (7π/6): CORRECT. $210^\\circ$.
- Option C (4π/3): $240^\\circ$.
- Option D (3π/2): $270^\\circ$.`,
    diagram: {
      title: "Radian Conversion (210°)",
      hideAxes: true,
      hideGrid: true,
      hideTicks: true,
      xRange: [-4, 4],
      yRange: [-4, 4],
      textAnnotations: [
        { x: -2.2, y: -2.8, text: "210° = ? radians", color: "#3b82f6", fontWeight: "bold" }
      ],
      curves: [
        { type: "circle", circle: { cx: 0, cy: 0, r: 2.8 }, color: "#cbd5e1", style: "dashed" },
        { type: "line", color: "#94a3b8", points: [[-3.2, 0], [3.2, 0]] },
        { type: "line", color: "#94a3b8", points: [[0, -3.2], [0, 3.2]] },
        { type: "line", color: "#3b82f6", points: [[0, 0], [-2.42, -1.4]], strokeWidth: 3 }
      ],
      angleArcs: [
        { center: [0, 0], radius: 1.2, startAngle: 0, endAngle: 210, label: "210°", color: "#3b82f6" }
      ]
    }
  },
  {
    id: "ch7-ex-q65",
    number: 65,
    exerciseNumber: 3,
    exerciseTitle: "Exercise 3: Trig, Circles & Mixed Challenge",
    question: "Convert 3π/2 radians to degrees.",
    options: ["180°", "240°", "270°", "300°"],
    correctIndex: 2,
    correctAnswerText: "270°",
    explanation: `Step-by-Step Mathematical Explanation:
1. Apply the radian to degree conversion formula:
   $$\\text{Degrees} = \\text{Radians} \\times \\frac{180^\\circ}{\\pi}$$
2. Substitute $\\frac{3\\pi}{2}$:
   $$\\text{Degrees} = \\frac{3\\pi}{2} \\times \\frac{180}{\\pi} = \\frac{3 \\times 180}{2} = 3 \\times 90^\\circ = 270^\\circ$$

Distractor Analysis:
- Option A (180°): $\\pi$ radians.
- Option B (240°): $4\\pi/3$.
- Option C (270°): CORRECT. $3\\pi/2 = 270^\\circ$.
- Option D (300°): $5\\pi/3$.`,
    diagram: {
      title: "Degree Conversion (3π/2 rad)",
      hideAxes: true,
      hideGrid: true,
      hideTicks: true,
      xRange: [-4, 4],
      yRange: [-4, 4],
      textAnnotations: [
        { x: 0, y: -3.6, text: "3π/2 radians = ?°", color: "#3b82f6", fontWeight: "bold" }
      ],
      curves: [
        { type: "circle", circle: { cx: 0, cy: 0, r: 2.8 }, color: "#cbd5e1", style: "dashed" },
        { type: "line", color: "#94a3b8", points: [[-3.2, 0], [3.2, 0]] },
        { type: "line", color: "#94a3b8", points: [[0, -3.2], [0, 3.2]] },
        { type: "line", color: "#3b82f6", points: [[0, 0], [0, -2.8]], strokeWidth: 3 }
      ],
      angleArcs: [
        { center: [0, 0], radius: 1.2, startAngle: 0, endAngle: 270, label: "3π/2", color: "#3b82f6" }
      ]
    }
  },
  {
    id: "ch7-ex-q66",
    number: 66,
    exerciseNumber: 3,
    exerciseTitle: "Exercise 3: Trig, Circles & Mixed Challenge",
    question: "On the unit circle, what is the (x, y) coordinate corresponding to an angle of 90°?",
    options: ["(1, 0)", "(0, 1)", "(-1, 0)", "(0, -1)"],
    correctIndex: 1,
    correctAnswerText: "(0, 1)",
    explanation: `Step-by-Step Mathematical Explanation:
1. Unit Circle Definition (Section 16): Any point on the unit circle is given by:
   $$(x, y) = (\\cos \\theta, \\sin \\theta)$$
2. For $\\theta = 90^\\circ$:
   - $x = \\cos(90^\\circ) = 0$
   - $y = \\sin(90^\\circ) = 1$
3. Therefore, the coordinate is $(0, 1)$.

Distractor Analysis:
- Option A ((1, 0)): $0^\circ$ coordinate.
- Option B ((0, 1)): CORRECT. $90^\circ$ top point.
- Option C ((-1, 0)): $180^\circ$ coordinate.
- Option D ((0, -1)): $270^\circ$ bottom point.`,
    diagram: {
      title: "Unit Circle at 90° Angle",
      hideAxes: true,
      hideGrid: true,
      hideTicks: true,
      xRange: [-4, 4],
      yRange: [-4, 4],
      textAnnotations: [
        { x: 0, y: 3.2, text: "(x, y) = x", color: "#3b82f6", fontWeight: "bold" },
        { x: 3.2, y: 0.3, text: "(1, 0)", color: "#475569" },
        { x: -3.2, y: 0.3, text: "(-1, 0)", color: "#475569" },
        { x: 0, y: -3.2, text: "(0, -1)", color: "#475569" }
      ],
      curves: [
        { type: "circle", circle: { cx: 0, cy: 0, r: 2.8 }, color: "#cbd5e1" },
        { type: "line", color: "#475569", points: [[-3.2, 0], [3.2, 0]] },
        { type: "line", color: "#3b82f6", points: [[0, 0], [0, 2.8]] },
        { type: "points", points: [[0, 2.8]], color: "#3b82f6" }
      ]
    }
  },
  {
    id: "ch7-ex-q67",
    number: 67,
    exerciseNumber: 3,
    exerciseTitle: "Exercise 3: Trig, Circles & Mixed Challenge",
    question: "What is the exact value of sin 30°?",
    options: ["0", "1/2", "√2/2", "√3/2"],
    correctIndex: 1,
    correctAnswerText: "1/2",
    explanation: `Step-by-Step Mathematical Explanation:
1. From special right triangles (30°-60°-90°) or the Unit Circle First Quadrant Table:
   $$\\sin(30^\\circ) = \\frac{\\text{Opposite}}{\\text{Hypotenuse}} = \\frac{1}{2}$$

Distractor Analysis:
- Option A (0): $\\sin(0^\\circ)$.
- Option B (1/2): CORRECT. $\\sin(30^\\circ) = 0.5$.
- Option C (√2/2): $\\sin(45^\\circ)$.
- Option D (√3/2): $\\sin(60^\\circ)$.`,
    diagram: {
      title: "30°-60°-90° Right Triangle Ratios",
      hideAxes: true,
      hideGrid: true,
      hideTicks: true,
      xRange: [0, 8],
      yRange: [0, 6],
      textAnnotations: [
        { x: 1.3, y: 3.0, text: "Opp = x", color: "#3b82f6", fontWeight: "bold" },
        { x: 4.1, y: 2.3, text: "√3", color: "#475569" },
        { x: 4.3, y: 3.3, text: "2", color: "#ea580c" }
      ],
      angleArcs: [
        { center: [6.2, 1.8], radius: 0.9, startAngle: 150, endAngle: 180, color: "#3b82f6", label: "30°" }
      ],
      curves: [
        { type: "line", color: "#3b82f6", points: [[2, 4.2], [2, 1.8], [6.2, 1.8], [2, 4.2]] }
      ]
    }
  },
  {
    id: "ch7-ex-q68",
    number: 68,
    exerciseNumber: 3,
    exerciseTitle: "Exercise 3: Trig, Circles & Mixed Challenge",
    question: "What is the exact value of cos 60°?",
    options: ["1/4","1/2","√3/2","1"],
    correctIndex: 1,
    correctAnswerText: "1/2",
    explanation: `Step-by-Step Mathematical Explanation:
1. Apply the Cofunction Identity:
   $$\\cos(60^\\circ) = \\sin(90^\\circ - 60^\\circ) = \\sin(30^\\circ) = \\frac{1}{2}$$

Distractor Analysis:
- Option A (0): $\\cos(90^\\circ)$.
- Option B (1/2): CORRECT. $\\cos(60^\\circ) = 0.5$.
- Option C (√2/2): $\\cos(45^\\circ)$.
- Option D (√3/2): $\\cos(30^\\circ)$.`,
    diagram: {
      title: "60° Angle Right Triangle",
      hideAxes: true,
      hideGrid: true,
      hideTicks: true,
      xRange: [0, 8],
      yRange: [0, 6],
      textAnnotations: [
        { x: 4.1, y: 2.3, text: "Adj = x", color: "#3b82f6", fontWeight: "bold" },
        { x: 4.3, y: 3.3, text: "Hyp = 2", color: "#ea580c" }
      ],
      angleArcs: [
        { center: [6.2, 1.8], radius: 0.9, startAngle: 120, endAngle: 180, color: "#3b82f6", label: "60°" }
      ],
      curves: [
        { type: "line", color: "#3b82f6", points: [[2, 4.2], [2, 1.8], [6.2, 1.8], [2, 4.2]] }
      ]
    }
  },
  {
    id: "ch7-ex-q69",
    number: 69,
    exerciseNumber: 3,
    exerciseTitle: "Exercise 3: Trig, Circles & Mixed Challenge",
    question: "A circle has radius 10. A central angle measures 72°. What fraction of the entire circle is represented by the sector?",
    options: ["1/10", "1/5", "1/4", "1/2"],
    correctIndex: 1,
    correctAnswerText: "1/5",
    explanation: `Step-by-Step Mathematical Explanation:
1. The full circle measures $360^\\circ$.
2. Calculate the fraction represented by a $72^\\circ$ central angle:
   $$\\text{Fraction} = \\frac{\\theta}{360^\\circ} = \\frac{72^\\circ}{360^\\circ} = \\frac{1}{5}$$

Distractor Analysis:
- Option A (1/10): $36^\circ / 360^\circ$.
- Option B (1/5): CORRECT. $72/360 = 1/5$.
- Option C (1/4): $90^\circ / 360^\circ$.
- Option D (1/2): $180^\circ / 360^\circ$.`,
    diagram: {
      title: "Circle Sector Central Angle 72°",
      hideAxes: true,
      hideGrid: true,
      hideTicks: true,
      xRange: [-4, 4],
      yRange: [-4, 4],
      textAnnotations: [
        { x: 1.4, y: 0.4, text: "r = 10", color: "#475569" },
        { x: 0, y: -3.3, text: "Sector Fraction = ?", color: "#3b82f6", fontWeight: "bold" }
      ],
      angleArcs: [
        { center: [0, 0], radius: 1.0, startAngle: 0, endAngle: 72, color: "#ea580c", label: "72°" }
      ],
      curves: [
        { type: "circle", circle: { cx: 0, cy: 0, r: 2.8 }, color: "#cbd5e1", style: "dashed" },
        { type: "line", fill: true, color: "#3b82f6", points: [[0, 0], [2.8, 0], [2.66, 0.86], [2.27, 1.65], [1.65, 2.27], [0.86, 2.66], [0, 0]] },
        { type: "line", color: "#3b82f6", points: [[0, 0], [2.8, 0]], strokeWidth: 2 },
        { type: "line", color: "#3b82f6", points: [[0, 0], [0.86, 2.66]], strokeWidth: 2 }
      ]
    }
  },
  {
    id: "ch7-ex-q70",
    number: 70,
    exerciseNumber: 3,
    exerciseTitle: "Exercise 3: Trig, Circles & Mixed Challenge",
    question: "A circle has radius 12 and a central angle of 60°. What is the area of the sector?",
    options: ["12π", "18π", "24π", "36π"],
    correctIndex: 2,
    correctAnswerText: "24π",
    explanation: `Step-by-Step Mathematical Explanation:
1. Apply the sector area formula in degrees (Technique 13):
   $$\\text{Sector Area} = \\left(\\frac{\\theta}{360^\\circ}\\right) \\pi r^2$$
2. Substitute $\\theta = 60^\\circ$ and $r = 12$:
   $$\\text{Sector Area} = \\left(\\frac{60}{360}\\right) \\pi (12)^2 = \\frac{1}{6} \\pi (144) = 24\\pi$$

Distractor Analysis:
- Option A (12π): $144 / 12$.
- Option B (18π): $144 / 8$.
- Option C (24π): CORRECT. $144 / 6 = 24\\pi$.
- Option D (36π): $144 / 4$.`,
    diagram: {
      title: "Sector Area Layout (Central Angle 60°)",
      hideAxes: true,
      hideGrid: true,
      hideTicks: true,
      xRange: [-4, 4],
      yRange: [-4, 4],
      textAnnotations: [
        { x: 1.4, y: 0.4, text: "r = 12", color: "#475569" },
        { x: 0.9, y: 1.2, text: "Sector Area = x", color: "#3b82f6", fontWeight: "bold" }
      ],
      angleArcs: [
        { center: [0, 0], radius: 1.0, startAngle: 0, endAngle: 60, color: "#ea580c", label: "60°" }
      ],
      curves: [
        { type: "circle", circle: { cx: 0, cy: 0, r: 2.8 }, color: "#cbd5e1", style: "dashed" },
        { type: "line", fill: true, color: "#3b82f6", points: [[0, 0], [2.8, 0], [2.71, 0.73], [2.42, 1.4], [1.98, 1.98], [1.4, 2.42], [0, 0]] },
        { type: "line", color: "#3b82f6", points: [[0, 0], [2.8, 0]], strokeWidth: 2 },
        { type: "line", color: "#3b82f6", points: [[0, 0], [1.4, 2.42]], strokeWidth: 2 }
      ]
    }
  },
  {
    id: "ch7-ex-q71",
    number: 71,
    exerciseNumber: 3,
    exerciseTitle: "Exercise 3: Trig, Circles & Mixed Challenge",
    question: "A circle has radius 9 and a central angle of 2π/3 radians. What is the arc length?",
    options: ["3π", "6π", "9π", "18π"],
    correctIndex: 1,
    correctAnswerText: "6π",
    explanation: `Step-by-Step Mathematical Explanation:
1. Apply the radian arc length formula (Technique 12):
   $$s = r \\theta$$
2. Substitute $r = 9$ and $\\theta = \\frac{2\\pi}{3}$:
   $$s = 9 \\times \\frac{2\\pi}{3} = 3 \\times 2\\pi = 6\\pi$$

Distractor Analysis:
- Option A (3π): $9 \\times \\pi/3$.
- Option B (6π): CORRECT. $s = 6\\pi$.
- Option C (9π): $9 \\times \\pi$.
- Option D (18π): $9 \\times 2\\pi$.`,
    diagram: {
      title: "Radian Arc Length Layout",
      hideAxes: true,
      hideGrid: true,
      hideTicks: true,
      xRange: [-4, 4],
      yRange: [-4, 4],
      textAnnotations: [
        { x: -0.8, y: 1.5, text: "Arc Length = x", color: "#ea580c", fontWeight: "bold" }
      ],
      curves: [
        { type: "circle", circle: { cx: 0, cy: 0, r: 2.8 }, color: "#cbd5e1" },
        { type: "line", color: "#3b82f6", points: [[0, 0], [2.8, 0]] },
        { type: "line", color: "#3b82f6", points: [[0, 0], [-1.4, 2.42]] },
        { type: "arc", arc: { cx: 0, cy: 0, r: 2.8, startAngle: 0, endAngle: 120 }, color: "#ea580c" }
      ]
    }
  },
  {
    id: "ch7-ex-q72",
    number: 72,
    exerciseNumber: 3,
    exerciseTitle: "Exercise 3: Trig, Circles & Mixed Challenge",
    question: "An inscribed angle in a circle measures 42°. What is the measure of its intercepted arc?",
    options: ["21°", "42°", "84°", "168°"],
    correctIndex: 2,
    correctAnswerText: "84°",
    explanation: `Step-by-Step Mathematical Explanation:
1. Apply the Inscribed Angle Theorem (Technique 10):
   $$\\text{Inscribed Angle} = \\frac{1}{2} \\times \\text{Intercepted Arc}$$
2. Multiply both sides by 2 to solve for the arc:
   $$\\text{Intercepted Arc} = 2 \\times \\text{Inscribed Angle} = 2 \\times 42^\\circ = 84^\\circ$$

Distractor Analysis:
- Option A (21°): Divided by 2 instead of multiplying ($42/2$).
- Option B (42°): Equals inscribed angle (confuses with central angle).
- Option C (84°): CORRECT. $2 \\times 42 = 84^\\circ$.
- Option D (168°): Quadrupled angle.`,
    diagram: {
      title: "Inscribed Angle and Intercepted Arc",
      hideAxes: true,
      hideGrid: true,
      hideTicks: true,
      xRange: [-4, 4],
      yRange: [-4, 4],
      textAnnotations: [
        { x: -2.2, y: 0, text: "42°", color: "#3b82f6", fontWeight: "bold" },
        { x: 2.5, y: 0.8, text: "Arc = x", color: "#ea580c", fontWeight: "bold" }
      ],
      curves: [
        { type: "circle", circle: { cx: 0, cy: 0, r: 2.8 }, color: "#cbd5e1" },
        { type: "line", color: "#3b82f6", points: [[-2.8, 0], [1.88, 2.07]] },
        { type: "line", color: "#3b82f6", points: [[-2.8, 0], [1.88, -2.07]] },
        { type: "arc", arc: { cx: 0, cy: 0, r: 2.8, startAngle: -47.7, endAngle: 47.7 }, color: "#ea580c" }
      ]
    }
  },
  {
    id: "ch7-ex-q73",
    number: 73,
    exerciseNumber: 3,
    exerciseTitle: "Exercise 3: Trig, Circles & Mixed Challenge",
    question: "A central angle in a circle measures 110°. What is the measure of its intercepted arc?",
    options: ["55°", "110°", "220°", "360°"],
    correctIndex: 1,
    correctAnswerText: "110°",
    explanation: `Step-by-Step Mathematical Explanation:
1. Apply the Central Angle Theorem (Technique 11):
   $$\\text{Central Angle} = \\text{Intercepted Arc}$$
2. Since the central angle measures 110°, its intercepted arc measures EXACTLY 110°.

Distractor Analysis:
- Option A (55°): Halved angle (confuses with inscribed angle).
- Option B (110°): CORRECT.
- Option C (220°): Doubled angle.
- Option D (360°): Full circle degree measure.`,
    diagram: {
      title: "Central Angle and Intercepted Arc",
      hideAxes: true,
      hideGrid: true,
      hideTicks: true,
      xRange: [-4, 4],
      yRange: [-4, 4],
      textAnnotations: [
        { x: 0.5, y: 0.5, text: "110°", color: "#3b82f6", fontWeight: "bold" },
        { x: -0.5, y: 2.5, text: "Arc = x", color: "#ea580c", fontWeight: "bold" }
      ],
      curves: [
        { type: "circle", circle: { cx: 0, cy: 0, r: 2.8 }, color: "#cbd5e1" },
        { type: "line", color: "#3b82f6", points: [[0, 0], [2.8, 0]] },
        { type: "line", color: "#3b82f6", points: [[0, 0], [-0.95, 2.63]] },
        { type: "arc", arc: { cx: 0, cy: 0, r: 2.8, startAngle: 0, endAngle: 110 }, color: "#ea580c" }
      ]
    }
  },
  {
    id: "ch7-ex-q74",
    number: 74,
    exerciseNumber: 3,
    exerciseTitle: "Exercise 3: Trig, Circles & Mixed Challenge",
    question: "A tangent line touches a circle at point P. The radius drawn from the center to P has length 7. What is the angle between the radius and the tangent line?",
    options: ["45°", "60°", "90°", "180°"],
    correctIndex: 2,
    correctAnswerText: "90°",
    explanation: `Step-by-Step Mathematical Explanation:
1. Apply the Tangent-Radius Theorem (Technique 9):
   - Any radius drawn to the point of tangency is ALWAYS PERPENDICULAR to the tangent line.
2. Therefore, the angle between the radius and the tangent line is exactly 90°.

Distractor Analysis:
- Option A (45°): Incorrect angle.
- Option B (60°): Incorrect angle.
- Option C (90°): CORRECT. Radius $\\perp$ Tangent line.
- Option D (180°): Straight line angle.`,
    diagram: {
      title: "Tangent Line and Radius at Tangency Point",
      hideAxes: true,
      hideGrid: true,
      hideTicks: true,
      xRange: [-4, 6],
      yRange: [-4, 4],
      textAnnotations: [
        { x: 0, y: 0, text: "Center O", color: "#475569" },
        { x: 2.8, y: 0.4, text: "P (Tangency)", color: "#ea580c", fontWeight: "bold" },
        { x: 1.4, y: 0.4, text: "r = 7", color: "#3b82f6" },
        { x: 3.2, y: -1.2, text: "Angle θ = x", color: "#16a34a", fontWeight: "bold" }
      ],
      curves: [
        { type: "circle", circle: { cx: 0, cy: 0, r: 2.8 }, color: "#cbd5e1" },
        { type: "line", color: "#3b82f6", points: [[0, 0], [2.8, 0]] },
        { type: "line", color: "#ea580c", points: [[2.8, -3.2], [2.8, 3.2]] },
        { type: "line", color: "#16a34a", points: [[2.8, 0.4], [2.4, 0.4], [2.4, 0]] }
      ]
    }
  },
  {
    id: "ch7-ex-q75",
    number: 75,
    exerciseNumber: 3,
    exerciseTitle: "Exercise 3: Trig, Circles & Mixed Challenge",
    question: "What is the distance between the points (-2, 3) and (4, 11) in the xy-plane?",
    options: ["8 cm","9 cm","10 cm","12 cm"],
    correctIndex: 2,
    correctAnswerText: "10 cm",
    explanation: `Step-by-Step Mathematical Explanation:
1. Apply the distance formula (Technique 14):
   $$d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$$
2. Substitute $(-2, 3)$ and $(4, 11)$:
   $$d = \\sqrt{(4 - (-2))^2 + (11 - 3)^2} = \\sqrt{6^2 + 8^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10$$
3. Notice that horizontal change $\\Delta x = 6$ and vertical change $\\Delta y = 8$ form a (6-8-10) right triangle!

Distractor Analysis:
- Option A (8): Vertical distance $\\Delta y = 8$.
- Option B (9): Arithmetic error.
- Option C (10): CORRECT. $d = 10$.
- Option D (12): Sum of changes $6 + 8 - 2$.`,
    diagram: {
      title: "Distance Between Points (-2, 3) and (4, 11)",
      hideAxes: false,
      hideGrid: false,
      hideTicks: false,
      xRange: [-4, 6],
      yRange: [1, 13],
      textAnnotations: [
        { x: -2, y: 2.2, text: "(-2, 3)", color: "#475569" },
        { x: 4, y: 11.8, text: "(4, 11)", color: "#475569" },
        { x: 1, y: 8, text: "Distance d = x", color: "#3b82f6", fontWeight: "bold" }
      ],
      curves: [
        { type: "line", color: "#3b82f6", points: [[-2, 3], [4, 11]] },
        { type: "line", style: "dashed", color: "#ea580c", points: [[-2, 3], [4, 3], [4, 11]] }
      ]
    }
  },
  {
    id: "ch7-ex-q76",
    number: 76,
    exerciseNumber: 3,
    exerciseTitle: "Exercise 3: Trig, Circles & Mixed Challenge",
    question: "What is the midpoint of the line segment connecting (-6, 4) and (10, 12)?",
    options: ["(2, 8)", "(4, 8)", "(2, 10)", "(4, 10)"],
    correctIndex: 0,
    correctAnswerText: "(2, 8)",
    explanation: `Step-by-Step Mathematical Explanation:
1. Apply the midpoint formula:
   $$M = \\left(\\frac{x_1 + x_2}{2}, \\frac{y_1 + y_2}{2}\\right)$$
2. Substitute $(-6, 4)$ and $(10, 12)$:
   $$M = \\left(\\frac{-6 + 10}{2}, \\frac{4 + 12}{2}\\right) = \\left(\\frac{4}{2}, \\frac{16}{2}\\right) = (2, 8)$$

Distractor Analysis:
- Option A ((2, 8)): CORRECT.
- Option B ((4, 8)): Incorrect x-coordinate calculation.
- Option C ((2, 10)): Incorrect y-coordinate division.
- Option D ((4, 10)): Arithmetic error.`,
    diagram: {
      title: "Midpoint of Segment (-6, 4) and (10, 12)",
      hideAxes: false,
      hideGrid: false,
      hideTicks: false,
      xRange: [-8, 12],
      yRange: [2, 14],
      textAnnotations: [
        { x: 2, y: 9.5, text: "Midpoint = x", color: "#3b82f6", fontWeight: "bold" }
      ],
      curves: [
        { type: "line", color: "#475569", points: [[-6, 4], [10, 12]] },
        { type: "points", points: [[2, 8]], color: "#3b82f6" }
      ]
    }
  },
  {
    id: "ch7-ex-q77",
    number: 77,
    exerciseNumber: 3,
    exerciseTitle: "Exercise 3: Trig, Circles & Mixed Challenge",
    question: "What is the slope of the line passing through the points (2, −1) and (8, 11)?",
    options: ["1/2","2","3","4"],
    correctIndex: 1,
    correctAnswerText: "2",
    explanation: `Step-by-Step Mathematical Explanation:
1. Apply the slope formula:
   $$m = \\frac{y_2 - y_1}{x_2 - x_1}$$
2. Substitute $(2, -1)$ and $(8, 11)$:
   $$m = \\frac{11 - (-1)}{8 - 2} = \\frac{11 + 1}{6} = \\frac{12}{6} = 2$$

Distractor Analysis:
- Option A (1): $6/6$.
- Option B (2): CORRECT. $m = 2$.
- Option C (3): $18/6$.
- Option D (4): $24/6$.`,
    diagram: {
      title: "Slope of Line Through Points",
      hideAxes: false,
      hideGrid: false,
      hideTicks: false,
      xRange: [0, 10],
      yRange: [-3, 13],
      textAnnotations: [
        { x: 5, y: 7, text: "Slope m = x", color: "#3b82f6", fontWeight: "bold" }
      ],
      curves: [
        { type: "line", color: "#3b82f6", points: [[2, -1], [8, 11]] }
      ]
    }
  },
  {
    id: "ch7-ex-q78",
    number: 78,
    exerciseNumber: 3,
    exerciseTitle: "Exercise 3: Trig, Circles & Mixed Challenge",
    question: "Which of the following lines is PERPENDICULAR to a line with slope 3/4?",
    options: [
      "y = (3/4)x + 2",
      "y = -(3/4)x + 2",
      "y = -(4/3)x + 2",
      "y = (4/3)x + 2"
    ],
    correctIndex: 2,
    correctAnswerText: "y = -(4/3)x + 2",
    explanation: `Step-by-Step Mathematical Explanation:
1. Perpendicular nonvertical lines have slopes that are OPPOSITE RECIPROCALS ($m_1 \\cdot m_2 = -1$).
2. Given $m_1 = \\frac{3}{4}$:
   $$m_2 = -\\frac{1}{3/4} = -\\frac{4}{3}$$
3. Therefore, the perpendicular line must have a slope of $-\\frac{4}{3}$, as in $y = -\\frac{4}{3}x + 2$.

Distractor Analysis:
- Option A: Same slope (parallel line).
- Option B: Opposite sign only without reciprocal.
- Option C: CORRECT. Negative reciprocal slope $-\\frac{4}{3}$.
- Option D: Reciprocal without negative sign.`,
    diagram: {
      title: "Perpendicular Lines Slopes",
      hideAxes: false,
      hideGrid: false,
      hideTicks: false,
      xRange: [-5, 5],
      yRange: [-5, 5],
      textAnnotations: [
        { x: 3, y: 3.5, text: "m = 3/4", color: "#3b82f6" },
        { x: -3, y: 4.5, text: "Perpendicular Slope m = x", color: "#ea580c", fontWeight: "bold" }
      ],
      curves: [
        { type: "line", color: "#3b82f6", points: [[-4, -1], [4, 5]] },
        { type: "line", color: "#ea580c", points: [[-3, 6], [3, -2]] }
      ]
    }
  },
  {
    id: "ch7-ex-q79",
    number: 79,
    exerciseNumber: 3,
    exerciseTitle: "Exercise 3: Trig, Circles & Mixed Challenge",
    question: "What is the center of the circle defined by the equation (x + 6)² + (y − 3)² = 64?",
    options: ["(-6, 3)", "(6, -3)", "(-6, -3)", "(6, 3)"],
    correctIndex: 0,
    correctAnswerText: "(-6, 3)",
    explanation: `Step-by-Step Mathematical Explanation:
1. In standard form $(x - h)^2 + (y - k)^2 = r^2$:
   - $x + 6 = x - (-6) \\implies h = -6$
   - $y - 3 \\implies k = 3$
2. Applying Technique 7 (signs appear opposite):
   $$\\text{Center} = (-6, 3)$$

Distractor Analysis:
- Option A ((-6, 3)): CORRECT.
- Option B ((6, -3)): Reversed signs.
- Option C ((-6, -3)): Negative y-coordinate.
- Option D ((6, 3)): Positive x-coordinate.`,
    diagram: {
      title: "Circle Center Layout",
      hideAxes: false,
      hideGrid: false,
      hideTicks: false,
      xRange: [-16, 4],
      yRange: [-7, 13],
      textAnnotations: [
        { x: -6, y: 3, text: "Center = x", color: "#3b82f6", fontWeight: "bold" }
      ],
      curves: [
        { type: "circle", circle: { cx: -6, cy: 3, r: 8 }, color: "#3b82f6" }
      ]
    }
  },
  {
    id: "ch7-ex-q80",
    number: 80,
    exerciseNumber: 3,
    exerciseTitle: "Exercise 3: Trig, Circles & Mixed Challenge",
    question: "What is the radius of the circle defined by (x − 4)² + (y + 5)² = 121?",
    options: ["9", "10", "11", "121"],
    correctIndex: 2,
    correctAnswerText: "11",
    explanation: `Step-by-Step Mathematical Explanation:
1. In the equation $(x - 4)^2 + (y + 5)^2 = 121$, $r^2 = 121$.
2. Take the square root:
   $$r = \\sqrt{121} = 11$$

Distractor Analysis:
- Option A (9): $\\sqrt{81}$.
- Option B (10): $\\sqrt{100}$.
- Option C (11): CORRECT. $\\sqrt{121} = 11$.
- Option D (121): $r^2$ value without square root.`,
    diagram: {
      title: "Circle Radius Layout",
      hideAxes: true,
      hideGrid: true,
      hideTicks: true,
      xRange: [-8, 16],
      yRange: [-17, 7],
      textAnnotations: [
        { x: 4, y: -5, text: "(4, -5)", color: "#475569" },
        { x: 9.5, y: -5, text: "Radius r = x", color: "#ea580c", fontWeight: "bold" }
      ],
      curves: [
        { type: "circle", circle: { cx: 4, cy: -5, r: 11 }, color: "#3b82f6" },
        { type: "line", style: "dashed", color: "#ea580c", points: [[4, -5], [15, -5]] }
      ]
    }
  },
  {
    id: "ch7-ex-q81",
    number: 81,
    exerciseNumber: 3,
    exerciseTitle: "Exercise 3: Trig, Circles & Mixed Challenge",
    question: "Which equation represents a circle with center (2, −3) and radius 5?",
    options: [
      "(x + 2)² + (y − 3)² = 25",
      "(x − 2)² + (y + 3)² = 25",
      "(x − 2)² + (y − 3)² = 5",
      "(x + 2)² + (y + 3)² = 5"
    ],
    correctIndex: 1,
    correctAnswerText: "(x − 2)² + (y + 3)² = 25",
    explanation: `Step-by-Step Mathematical Explanation:
1. Substitute center $(h, k) = (2, -3)$ and $r = 5$ into standard form:
   $$(x - 2)^2 + (y - (-3))^2 = 5^2$$
   $$(x - 2)^2 + (y + 3)^2 = 25$$

Distractor Analysis:
- Option A: Reversed coordinate signs.
- Option B: CORRECT.
- Option C: Forgot to square radius ($r = 5$).
- Option D: Both sign and radius squaring errors.`,
    diagram: {
      title: "Circle Equation Formulation",
      hideAxes: false,
      hideGrid: false,
      hideTicks: false,
      xRange: [-4, 8],
      yRange: [-9, 3],
      textAnnotations: [
        { x: 2, y: -3, text: "(2, -3)", color: "#3b82f6", fontWeight: "bold" },
        { x: 4.5, y: -3, text: "r = 5", color: "#ea580c" }
      ],
      curves: [
        { type: "circle", circle: { cx: 2, cy: -3, r: 5 }, color: "#3b82f6" }
      ]
    }
  },
  {
    id: "ch7-ex-q82",
    number: 82,
    exerciseNumber: 3,
    exerciseTitle: "Exercise 3: Trig, Circles & Mixed Challenge",
    question: "A square has a diagonal length of 14√2. What is its area?",
    options: ["98", "196", "280", "392"],
    correctIndex: 1,
    correctAnswerText: "196",
    explanation: `Step-by-Step Mathematical Explanation:
1. A square's diagonal forms a 45°-45°-90° special right triangle with its sides:
   $$\\text{Diagonal} = s\\sqrt{2} = 14\\sqrt{2} \\implies s = 14$$
2. Calculate the area of the square:
   $$\\text{Area} = s^2 = 14^2 = 196$$

Distractor Analysis:
- Option A (98): Half of 196 ($196/2$).
- Option B (196): CORRECT. $s = 14 \\implies s^2 = 196$.
- Option C (280): Arithmetic error.
- Option D (392): Doubled area ($196 \\times 2$).`,
    diagram: {
      title: "Square with Diagonal 14√2",
      hideAxes: true,
      hideGrid: true,
      hideTicks: true,
      xRange: [0, 8],
      yRange: [0, 8],
      textAnnotations: [
        { x: 4, y: 1.5, text: "Side s = x", color: "#475569" },
        { x: 4, y: 4.5, text: "d = 14√2", color: "#ea580c", fontWeight: "bold" },
        { x: 2.5, y: 2.5, text: "Area = x", color: "#3b82f6", fontWeight: "bold" }
      ],
      curves: [
        { type: "line", color: "#3b82f6", points: [[1, 1], [7, 1], [7, 7], [1, 7], [1, 1]] },
        { type: "line", color: "#ea580c", points: [[1, 1], [7, 7]] }
      ]
    }
  },
  {
    id: "ch7-ex-q83",
    number: 83,
    exerciseNumber: 3,
    exerciseTitle: "Exercise 3: Trig, Circles & Mixed Challenge",
    question: "A circle is inscribed inside a square of side length 18. What is the area of the region inside the square but outside the circle?",
    options: ["324 − 81π", "324 − 36π", "324 − 18π", "324 − 9π"],
    correctIndex: 0,
    correctAnswerText: "324 − 81π",
    explanation: `Step-by-Step Mathematical Explanation:
1. Apply the Composite Figure Rule (Technique 17):
   $$\\text{Remaining Area} = \\text{Area of Square} - \\text{Area of Circle}$$
2. Calculate square area:
   $$A_{\\text{square}} = 18^2 = 324$$
3. An inscribed circle in a square of side 18 has radius $r = \\frac{18}{2} = 9$:
   $$A_{\\text{circle}} = \\pi r^2 = \\pi (9)^2 = 81\\pi$$
4. Subtract circle area from square area:
   $$\\text{Remaining Area} = 324 - 81\\pi$$

Distractor Analysis:
- Option A (324 − 81π): CORRECT.
- Option B (324 − 36π): Used $2r\\pi = 36\\pi$.
- Option C (324 − 18π): Used $r = 18/2$ linearly.
- Option D (324 − 9π): Used $r\\pi = 9\\pi$.`,
    diagram: {
      title: "Circle Inscribed in Square of Side 18",
      hideAxes: true,
      hideGrid: true,
      hideTicks: true,
      xRange: [0, 8],
      yRange: [0, 8],
      textAnnotations: [
        { x: 4, y: 1.5, text: "s = 18", color: "#475569" },
        { x: 5.2, y: 4, text: "Radius r", color: "#ea580c", fontWeight: "bold" },
        { x: 1.5, y: 6.8, text: "Shaded Area = x", color: "#3b82f6", fontWeight: "bold" }
      ],
      curves: [
        { type: "line", color: "#3b82f6", points: [[1, 1], [7, 1], [7, 7], [1, 7], [1, 1]] },
        { type: "circle", circle: { cx: 4, cy: 4, r: 3 }, color: "#ea580c" }
      ]
    }
  },
  {
    id: "ch7-ex-q84",
    number: 84,
    exerciseNumber: 3,
    exerciseTitle: "Exercise 3: Trig, Circles & Mixed Challenge",
    question: "A rectangular prism has dimensions 6, 8, and 10. A second prism is similar to the first, with every dimension multiplied by 1.5. By what factor does its volume increase?",
    options: ["1.5", "2.25", "3", "3.375"],
    correctIndex: 3,
    correctAnswerText: "3.375",
    explanation: `Step-by-Step Mathematical Explanation:
1. Apply the Scale Factor Rule for volume (Technique 8):
   - Linear scale factor = $k = 1.5$
   - Volume scale factor = $k^3 = (1.5)^3 = 3.375$
2. The volume increases by a factor of 3.375.

Distractor Analysis:
- Option A (1.5): Linear scale factor.
- Option B (2.25): Area scale factor $k^2 = (1.5)^2 = 2.25$.
- Option C (3): $1.5 \\times 2 = 3$.
- Option D (3.375): CORRECT. $1.5^3 = 3.375$.`,
    diagram: {
      title: "Rectangular Prism Scaling",
      hideAxes: true,
      hideGrid: true,
      hideTicks: true,
      xRange: [0, 10],
      yRange: [0, 6],
      textAnnotations: [
        { x: 4.5, y: 3.5, text: "Volume Scale Factor = x", color: "#3b82f6", fontWeight: "bold" }
      ],
      curves: [
        { type: "line", color: "#3b82f6", points: [[1, 1.5], [3, 1.5], [3, 3.5], [1, 3.5], [1, 1.5]] },
        { type: "line", color: "#ea580c", points: [[4.5, 1.5], [9.5, 1.5], [9.5, 5.0], [4.5, 5.0], [4.5, 1.5]] }
      ]
    }
  },
  {
    id: "ch7-ex-q85",
    number: 85,
    exerciseNumber: 3,
    exerciseTitle: "Exercise 3: Trig, Circles & Mixed Challenge",
    question: "A right triangle has one angle of 45° and a hypotenuse of 10√2. What is the area of the triangle?",
    options: ["25", "50", "75", "100"],
    correctIndex: 1,
    correctAnswerText: "50",
    explanation: `Step-by-Step Mathematical Explanation:
1. In a 45°-45°-90° triangle (Technique 4), the hypotenuse is $s\\sqrt{2} = 10\\sqrt{2} \\implies s = 10$.
2. Both legs equal $s = 10$.
3. Calculate the area of the right triangle:
   $$A = \\frac{1}{2} b h = \\frac{1}{2} (10) (10) = 50$$

Distractor Analysis:
- Option A (25): Quarter of 100.
- Option B (50): CORRECT. $\\frac{1}{2}(100) = 50$.
- Option C (75): $100 \\times 3/4$.
- Option D (100): Forgot $\\frac{1}{2}$ multiplier ($10 \\times 10 = 100$).`,
    diagram: {
      title: "45°-45°-90° Right Triangle with Hypotenuse 10√2",
      hideAxes: true,
      hideGrid: true,
      hideTicks: true,
      xRange: [0, 8],
      yRange: [0, 6],
      textAnnotations: [
        { x: 1.3, y: 3.0, text: "Leg = x", color: "#475569" },
        { x: 3.9, y: 2.3, text: "Leg = x", color: "#475569" },
        { x: 4.1, y: 3.3, text: "10√2", color: "#ea580c" },
        { x: 3.0, y: 2.8, text: "Area = x", color: "#3b82f6", fontWeight: "bold" }
      ],
      curves: [
        { type: "line", color: "#3b82f6", points: [[2, 4.2], [2, 1.8], [5.8, 1.8], [2, 4.2]] },
        { type: "line", color: "#475569", points: [[2, 2.1], [2.3, 2.1], [2.3, 1.8]] }
      ]
    }
  },
  {
    id: "ch7-ex-q86",
    number: 86,
    exerciseNumber: 3,
    exerciseTitle: "Exercise 3: Trig, Circles & Mixed Challenge",
    question: "A circle has center (3, −2) and passes through the point (7, −2). What is the radius of the circle?",
    options: ["2", "4", "5", "7"],
    correctIndex: 1,
    correctAnswerText: "4",
    explanation: `Step-by-Step Mathematical Explanation:
1. The radius is the distance from the center $(3, -2)$ to the boundary point $(7, -2)$.
2. Since both points have the same y-coordinate ($y = -2$), the distance is purely horizontal:
   $$r = 7 - 3 = 4$$

Distractor Analysis:
- Option A (2): Half of 4.
- Option B (4): CORRECT. $r = 7 - 3 = 4$.
- Option C (5): Arithmetic error.
- Option D (7): x-coordinate of boundary point.`,
    diagram: {
      title: "Circle Passing Through Given Point",
      hideAxes: false,
      hideGrid: false,
      hideTicks: false,
      xRange: [-3, 9],
      yRange: [-8, 4],
      textAnnotations: [
        { x: 3, y: -2, text: "(3, -2)", color: "#475569" },
        { x: 7, y: -2, text: "(7, -2)", color: "#475569" },
        { x: 5, y: -1.2, text: "Radius r = x", color: "#3b82f6", fontWeight: "bold" }
      ],
      curves: [
        { type: "circle", circle: { cx: 3, cy: -2, r: 4 }, color: "#3b82f6" },
        { type: "line", color: "#ea580c", points: [[3, -2], [7, -2]] }
      ]
    }
  },
  {
    id: "ch7-ex-q87",
    number: 87,
    exerciseNumber: 3,
    exerciseTitle: "Exercise 3: Trig, Circles & Mixed Challenge",
    question: "A sector has radius 9 and central angle 120°. What is its area?",
    options: ["18π", "27π", "36π", "54π"],
    correctIndex: 1,
    correctAnswerText: "27π",
    explanation: `Step-by-Step Mathematical Explanation:
1. Apply the sector area formula (Technique 13):
   $$\\text{Sector Area} = \\left(\\frac{\\theta}{360^\\circ}\\right) \\pi r^2$$
2. Substitute $\\theta = 120^\\circ$ and $r = 9$:
   $$\\text{Sector Area} = \\left(\\frac{120}{360}\\right) \\pi (9)^2 = \\frac{1}{3} \\pi (81) = 27\\pi$$

Distractor Analysis:
- Option A (18π): $81 / 4.5$.
- Option B (27π): CORRECT. $81\\pi / 3 = 27\\pi$.
- Option C (36π): $81 / 2.25$.
- Option D (54π): $81 \\times 2/3$.`,
    diagram: {
      title: "Sector Area Layout (Central Angle 120°)",
      hideAxes: true,
      hideGrid: true,
      hideTicks: true,
      xRange: [-4, 4],
      yRange: [-4, 4],
      textAnnotations: [
        { x: 1.4, y: 0.4, text: "r = 9", color: "#475569" },
        { x: 0, y: 1.5, text: "Sector Area = x", color: "#3b82f6", fontWeight: "bold" }
      ],
      angleArcs: [
        { center: [0, 0], radius: 1.0, startAngle: 0, endAngle: 120, color: "#ea580c", label: "120°" }
      ],
      curves: [
        { type: "circle", circle: { cx: 0, cy: 0, r: 2.8 }, color: "#cbd5e1", style: "dashed" },
        { type: "line", fill: true, color: "#3b82f6", points: [[0, 0], [2.8, 0], [2.42, 1.4], [1.4, 2.42], [0, 2.8], [-1.4, 2.42], [0, 0]] },
        { type: "line", color: "#3b82f6", points: [[0, 0], [2.8, 0]], strokeWidth: 2 },
        { type: "line", color: "#3b82f6", points: [[0, 0], [-1.4, 2.42]], strokeWidth: 2 }
      ]
    }
  },
  {
    id: "ch7-ex-q88",
    number: 88,
    exerciseNumber: 3,
    exerciseTitle: "Exercise 3: Trig, Circles & Mixed Challenge",
    question: "Two similar triangles have a side-length ratio of 2 : 3. The area of the larger triangle is 108. What is the area of the smaller triangle?",
    options: ["36", "48", "54", "72"],
    correctIndex: 1,
    correctAnswerText: "48",
    explanation: `Step-by-Step Mathematical Explanation:
1. The area scale factor is $k^2 = \\left(\\frac{2}{3}\\right)^2 = \\frac{4}{9}$.
2. Set up the area ratio proportion:
   $$\\frac{A_{\\text{small}}}{108} = \\frac{4}{9}$$
3. Solve for $A_{\\text{small}}$:
   $$A_{\\text{small}} = 108 \\times \\frac{4}{9} = 12 \\times 4 = 48$$

Distractor Analysis:
- Option A (36): $108 / 3$.
- Option B (48): CORRECT. $A = 48$.
- Option C (54): Half of 108.
- Option D (72): Linear multiplier $108 \\times 2/3 = 72$.`,
    diagram: {
      title: "Similar Triangles Area Ratio",
      hideAxes: true,
      hideGrid: true,
      hideTicks: true,
      xRange: [0, 10],
      yRange: [0, 6],
      textAnnotations: [
        { x: 2, y: 3.5, text: "Area = x", color: "#3b82f6", fontWeight: "bold" },
        { x: 7, y: 4.5, text: "Area = 108", color: "#ea580c", fontWeight: "bold" }
      ],
      curves: [
        { type: "line", color: "#3b82f6", points: [[1, 1.5], [3, 1.5], [2, 3.5], [1, 1.5]] },
        { type: "line", color: "#ea580c", points: [[4.5, 1.5], [9.5, 1.5], [7.0, 5.0], [4.5, 1.5]] }
      ]
    }
  },
  {
    id: "ch7-ex-q89",
    number: 89,
    exerciseNumber: 3,
    exerciseTitle: "Exercise 3: Trig, Circles & Mixed Challenge",
    question: "A 30°−60°−90° special right triangle has a hypotenuse of 20. What is its area?",
    options: ["25√3", "50√3", "100√3", "200√3"],
    correctIndex: 1,
    correctAnswerText: "50√3",
    explanation: `Step-by-Step Mathematical Explanation:
1. In a $30^\\circ-60^\\circ-90^\\circ$ triangle (Technique 5):
   - Hypotenuse = $2x = 20 \\implies x = 10$ (short leg)
   - Long leg = $x\\sqrt{3} = 10\\sqrt{3}$
2. Calculate the area of the right triangle:
   $$A = \\frac{1}{2} \\text{base} \\times \\text{height} = \\frac{1}{2} (10) (10\\sqrt{3}) = 50\\sqrt{3}$$

Distractor Analysis:
- Option A (25√3): $1/4$ of $100\\sqrt{3}$.
- Option B (50√3): CORRECT. $A = 50\\sqrt{3}$.
- Option C (100√3): Forgot $\\frac{1}{2}$ multiplier.
- Option D (200√3): Multiplied hypotenuse by long leg.`,
    diagram: {
      title: "30°-60°-90° Special Right Triangle",
      hideAxes: true,
      hideGrid: true,
      hideTicks: true,
      xRange: [0, 8],
      yRange: [0, 6],
      textAnnotations: [
        { x: 1.3, y: 3.0, text: "Short Leg", color: "#475569" },
        { x: 4.1, y: 2.3, text: "Long Leg", color: "#475569" },
        { x: 4.3, y: 3.3, text: "20", color: "#ea580c" },
        { x: 3.0, y: 2.5, text: "Area = x", color: "#3b82f6", fontWeight: "bold" }
      ],
      curves: [
        { type: "line", color: "#3b82f6", points: [[2, 4.2], [2, 1.8], [6.2, 1.8], [2, 4.2]] }
      ]
    }
  },
  {
    id: "ch7-ex-q90",
    number: 90,
    exerciseNumber: 3,
    exerciseTitle: "Exercise 3: Trig, Circles & Mixed Challenge",
    question: "A cylindrical tank has radius 4 meters and height 10 meters. Water fills exactly 75% of the tank. How much water is in the tank?",
    options: ["80π", "100π", "120π", "160π"],
    correctIndex: 2,
    correctAnswerText: "120π",
    explanation: `Step-by-Step Mathematical Explanation:
1. Calculate full volume of the cylindrical tank:
   $$V_{\\text{full}} = \\pi r^2 h = \\pi (4)^2 (10) = \\pi (16) (10) = 160\\pi\\text{ m}^3$$
2. Water fills $75\\%$ ($0.75 = \\frac{3}{4}$) of the full volume:
   $$V_{\\text{water}} = 0.75 \\times 160\\pi = \\frac{3}{4} \\times 160\\pi = 120\\pi\\text{ m}^3$$

Distractor Analysis:
- Option A (80π): Half volume ($50\\%$ of $160\\pi$).
- Option B (100π): Arithmetic error.
- Option C (120π): CORRECT. $75\\%$ of $160\\pi = 120\\pi$.
- Option D (160π): Full capacity of the tank ($100\\%$).`,
    diagram: {
      title: "Cylindrical Tank Water Volume",
      hideAxes: true,
      hideGrid: true,
      hideTicks: true,
      xRange: [-4, 4],
      yRange: [0, 8],
      textAnnotations: [
        { x: 0, y: 7.2, text: "r = 4 m", color: "#ea580c" },
        { x: 2.8, y: 4, text: "h = 10 m", color: "#475569" },
        { x: 0, y: 3.5, text: "Water Volume = x", color: "#3b82f6", fontWeight: "bold" }
      ],
      curves: [
        { type: "ellipse", ellipse: { cx: 0, cy: 7, rx: 2.2, ry: 0.7 }, color: "#cbd5e1" },
        { type: "ellipse", ellipse: { cx: 0, cy: 5.5, rx: 2.2, ry: 0.7 }, color: "#3b82f6" },
        { type: "ellipse", ellipse: { cx: 0, cy: 1, rx: 2.2, ry: 0.7 }, color: "#3b82f6" },
        { type: "line", color: "#475569", points: [[-2.2, 1], [-2.2, 7]] },
        { type: "line", color: "#475569", points: [[2.2, 1], [2.2, 7]] }
      ]
    }
  }
];
