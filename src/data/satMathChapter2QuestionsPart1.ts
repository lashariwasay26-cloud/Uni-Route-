import { MathExerciseQuestion } from './satMathConcepts';

export const CHAPTER_2_QUESTIONS_PART_1: MathExerciseQuestion[] = [
  {
    id: 'ch2-q1',
    number: 1,
    exerciseNumber: 1,
    exerciseTitle: 'Module 1: Easy / Medium Questions',
    question: 'Simplify the expression: (4x² + 7x - 2) + (3x² - 2x + 8).',
    options: [
      '7x² + 5x + 6',
      '7x² + 9x + 6',
      '12x² + 5x + 6',
      '7x² + 5x - 10'
    ],
    correctIndex: 0,
    correctAnswerText: '7x² + 5x + 6',
    explanation: `Step-by-Step Algebraic Solution:
1. Group corresponding like terms with identical variable powers:
   (4x² + 3x²) + (7x - 2x) + (-2 + 8)
2. Add the coefficients for each degree:
   • Quadratic term: (4 + 3)x² = 7x²
   • Linear term: (7 - 2)x = 5x
   • Constant term: -2 + 8 = 6
3. Combine the resulting polynomial: 7x² + 5x + 6.

Desmos / Mental Verification:
Constant term is (-2) + 8 = 6, which immediately eliminates Option D. The x² coefficient is 4 + 3 = 7, eliminating Option C. The linear coefficient is 7 - 2 = 5, eliminating Option B.`
  },
  {
    id: 'ch2-q2',
    number: 2,
    exerciseNumber: 1,
    exerciseTitle: 'Module 1: Easy / Medium Questions',
    question: 'Expand and simplify: 3x(2x - 5) - 4(x² - 2x).',
    options: [
      '2x² - 7x',
      '2x² - 23x',
      '10x² - 7x',
      '2x² - 15x + 8'
    ],
    correctIndex: 0,
    correctAnswerText: '2x² - 7x',
    explanation: `Step-by-Step Algebraic Solution:
1. Distribute 3x across the first parentheses:
   3x · (2x) - 3x · (5) = 6x² - 15x
2. Distribute -4 across the second parentheses (remembering to distribute the negative sign):
   -4 · (x²) - 4 · (-2x) = -4x² + 8x
3. Combine like terms:
   (6x² - 4x²) + (-15x + 8x) = 2x² - 7x.

Desmos Shortcut:
Test x = 2:
Original: 3(2)(4 - 5) - 4(4 - 4) = 6(-1) - 0 = -6.
Option A: 2(2²) - 7(2) = 8 - 14 = -6 (Exact Match).`
  },
  {
    id: 'ch2-q3',
    number: 3,
    exerciseNumber: 1,
    exerciseTitle: 'Module 1: Easy / Medium Questions',
    question: 'Subtract (5x - 3) from (2x² - 4x + 1).',
    options: [
      '2x² - 9x + 4',
      '2x² + x - 2',
      '-2x² + 9x - 4',
      '2x² - 9x - 2'
    ],
    correctIndex: 0,
    correctAnswerText: '2x² - 9x + 4',
    explanation: `Step-by-Step Algebraic Solution:
1. Set up the subtraction expression in proper order ("Subtract A from B" means B - A):
   (2x² - 4x + 1) - (5x - 3)
2. Distribute the negative sign across (5x - 3):
   2x² - 4x + 1 - 5x + 3
3. Combine like terms:
   2x² + (-4x - 5x) + (1 + 3) = 2x² - 9x + 4.

Key Trap Alert:
Always watch out for the constant term: 1 - (-3) = 1 + 3 = +4. Forgetting to distribute the negative sign to -3 yields -2, which is Option D.`
  },
  {
    id: 'ch2-q4',
    number: 4,
    exerciseNumber: 1,
    exerciseTitle: 'Module 1: Easy / Medium Questions',
    question: 'Simplify: (x⁴ y³) · (x² y⁵).',
    options: [
      'x⁸ y¹⁵',
      'x⁶ y⁸',
      'x⁶ y¹⁵',
      'x² y²'
    ],
    correctIndex: 1,
    correctAnswerText: 'x⁶ y⁸',
    explanation: `Step-by-Step Algebraic Solution:
1. Apply the product rule for exponents: xᵃ · xᵇ = x^(a + b) and yᶜ · yᵈ = y^(c + d).
2. For base x: x⁴ · x² = x^(4 + 2) = x⁶.
3. For base y: y³ · y⁵ = y^(3 + 5) = y⁸.
4. Product = x⁶ y⁸.

Common Error:
Multiplying exponents instead of adding them produces x⁸ y¹⁵ (Option A), which is only valid for power-of-a-power (x⁴)².`
  },
  {
    id: 'ch2-q5',
    number: 5,
    exerciseNumber: 1,
    exerciseTitle: 'Module 1: Easy / Medium Questions',
    question: 'Simplify: (18a⁶ b⁴) / (3a² b⁴).',
    options: [
      '6a⁴',
      '6a³ b',
      '6a⁴ b',
      '15a⁴'
    ],
    correctIndex: 0,
    correctAnswerText: '6a⁴',
    explanation: `Step-by-Step Algebraic Solution:
1. Divide numerical coefficients: 18 / 3 = 6.
2. Apply quotient rule for base a: a⁶ / a² = a^(6 - 2) = a⁴.
3. Apply quotient rule for base b: b⁴ / b⁴ = b^(4 - 4) = b⁰ = 1.
4. Multiply results together: 6 · a⁴ · 1 = 6a⁴.`
  },
  {
    id: 'ch2-q6',
    number: 6,
    exerciseNumber: 1,
    exerciseTitle: 'Module 1: Easy / Medium Questions',
    question: 'Which expression is equivalent to x⁻³ y²?',
    options: [
      'y² / x³',
      '1 / (x³ y²)',
      '-(3y²) / x',
      '(xy)⁻¹'
    ],
    correctIndex: 0,
    correctAnswerText: 'y² / x³',
    explanation: `Step-by-Step Algebraic Solution:
1. Apply negative exponent rule: x⁻ⁿ = 1 / xⁿ.
2. The negative exponent applies strictly to base x, not y.
3. Therefore: x⁻³ · y² = (1 / x³) · y² = y² / x³.`
  },
  {
    id: 'ch2-q7',
    number: 7,
    exerciseNumber: 1,
    exerciseTitle: 'Module 1: Easy / Medium Questions',
    question: 'Rewrite x^(3/5) in radical form.',
    options: [
      '³√(x⁵)',
      '⁵√(x³)',
      '(3/5)√x',
      '√(x¹⁵)'
    ],
    correctIndex: 1,
    correctAnswerText: '⁵√(x³)',
    explanation: `Step-by-Step Algebraic Solution:
1. Definition of rational exponent: x^(m/n) = ⁿ√(xᵐ).
2. The denominator n = 5 corresponds to the root index: ⁵√.
3. The numerator m = 3 corresponds to the power: x³.
4. Thus, x^(3/5) = ⁵√(x³).`
  },
  {
    id: 'ch2-q8',
    number: 8,
    exerciseNumber: 1,
    exerciseTitle: 'Module 1: Easy / Medium Questions',
    question: 'Evaluate the expression 2a² - 3ab + b² for a = -2 and b = 3.',
    options: [
      '5',
      '35',
      '17',
      '23'
    ],
    correctIndex: 1,
    correctAnswerText: '35',
    explanation: `Step-by-Step Algebraic Solution:
1. Substitute a = -2 and b = 3 into each term:
   • 2a² = 2(-2)² = 2(4) = 8
   • -3ab = -3(-2)(3) = +18
   • b² = (3)² = 9
2. Sum the evaluated terms:
   8 + 18 + 9 = 35.

Tactical Note:
Be careful with the double negative: -3(-2)(3) = +18.`
  },
  {
    id: 'ch2-q9',
    number: 9,
    exerciseNumber: 1,
    exerciseTitle: 'Module 1: Easy / Medium Questions',
    question: 'Factor completely: 12x³ - 8x².',
    options: [
      '4x(3x² - 2x)',
      '4x²(3x - 2)',
      '2x²(6x - 4)',
      'x²(12x - 8)'
    ],
    correctIndex: 1,
    correctAnswerText: '4x²(3x - 2)',
    explanation: `Step-by-Step Algebraic Solution:
1. Find the Greatest Common Factor (GCF) of the numerical coefficients 12 and 8: GCF = 4.
2. Find the GCF of the variable terms x³ and x²: GCF = x².
3. Factor out 4x²:
   12x³ / 4x² = 3x
   -8x² / 4x² = -2
4. Complete factorization: 4x²(3x - 2).`
  },
  {
    id: 'ch2-q10',
    number: 10,
    exerciseNumber: 1,
    exerciseTitle: 'Module 1: Easy / Medium Questions',
    question: 'Which of the following is equivalent to x² - 49?',
    options: [
      '(x - 7)²',
      '(x + 7)(x - 7)',
      '(x + 49)(x - 1)',
      'x(x - 49)'
    ],
    correctIndex: 1,
    correctAnswerText: '(x + 7)(x - 7)',
    explanation: `Step-by-Step Algebraic Solution:
1. Identify the algebraic structure as a Difference of Squares: a² - b² = (a + b)(a - b).
2. Here a² = x² => a = x, and b² = 49 => b = 7.
3. Therefore: x² - 49 = (x + 7)(x - 7).`
  },
  {
    id: 'ch2-q11',
    number: 11,
    exerciseNumber: 1,
    exerciseTitle: 'Module 1: Easy / Medium Questions',
    question: 'Factor the quadratic expression: x² - 9x + 20.',
    options: [
      '(x - 4)(x - 5)',
      '(x - 2)(x - 10)',
      '(x + 4)(x + 5)',
      '(x - 1)(x - 20)'
    ],
    correctIndex: 0,
    correctAnswerText: '(x - 4)(x - 5)',
    explanation: `Step-by-Step Algebraic Solution:
1. For x² + Bx + C, find two integers r and s such that:
   • r · s = +20 (constant term)
   • r + s = -9 (linear coefficient)
2. Testing factor pairs of 20 with negative sums:
   • (-1) + (-20) = -21
   • (-2) + (-10) = -12
   • (-4) + (-5) = -9 (Matches!)
3. Factor form: (x - 4)(x - 5).`
  },
  {
    id: 'ch2-q12',
    number: 12,
    exerciseNumber: 1,
    exerciseTitle: 'Module 1: Easy / Medium Questions',
    question: 'Expand (3x - 4)².',
    options: [
      '9x² - 16',
      '9x² - 24x + 16',
      '9x² - 12x + 16',
      '6x² - 24x + 16'
    ],
    correctIndex: 1,
    correctAnswerText: '9x² - 24x + 16',
    explanation: `Step-by-Step Algebraic Solution:
1. Apply the Perfect Square Trinomial formula: (a - b)² = a² - 2ab + b².
2. Set a = 3x and b = 4:
   • a² = (3x)² = 9x²
   • -2ab = -2(3x)(4) = -24x
   • b² = (-4)² = +16
3. Combine: 9x² - 24x + 16.`
  },
  {
    id: 'ch2-q13',
    number: 13,
    exerciseNumber: 1,
    exerciseTitle: 'Module 1: Easy / Medium Questions',
    question: 'Simplify: (x² - 16) / (x - 4) for x ≠ 4.',
    options: [
      'x - 4',
      'x + 4',
      'x + 16',
      '1'
    ],
    correctIndex: 1,
    correctAnswerText: 'x + 4',
    explanation: `Step-by-Step Algebraic Solution:
1. Factor the numerator using Difference of Squares:
   x² - 16 = (x - 4)(x + 4)
2. Substitute into the fraction:
   [(x - 4)(x + 4)] / (x - 4)
3. Cancel the common factor (x - 4):
   = x + 4.`
  },
  {
    id: 'ch2-q14',
    number: 14,
    exerciseNumber: 1,
    exerciseTitle: 'Module 1: Easy / Medium Questions',
    question: 'Combine into a single fraction: 2/x + 5/(3x).',
    options: [
      '7 / (4x)',
      '11 / (3x)',
      '7 / (3x)',
      '10 / (3x²)'
    ],
    correctIndex: 1,
    correctAnswerText: '11 / (3x)',
    explanation: `Step-by-Step Algebraic Solution:
1. Determine the lowest common denominator (LCD) of x and 3x, which is 3x.
2. Convert the first fraction:
   2/x = (2 · 3) / (x · 3) = 6 / (3x)
3. Add the numerators over the common denominator:
   6 / (3x) + 5 / (3x) = (6 + 5) / (3x) = 11 / (3x).`
  },
  {
    id: 'ch2-q15',
    number: 15,
    exerciseNumber: 1,
    exerciseTitle: 'Module 1: Easy / Medium Questions',
    question: 'Translate to an algebraic expression: "Five less than twice the square of a number n."',
    options: [
      '5 - 2n²',
      '2n² - 5',
      '2(n - 5)²',
      '(2n - 5)²'
    ],
    correctIndex: 1,
    correctAnswerText: '2n² - 5',
    explanation: `Step-by-Step Translation:
1. "The square of a number n" -> n²
2. "Twice the square of a number n" -> 2n²
3. "Five less than [quantity]" means subtracting 5 from that quantity -> 2n² - 5.

Key Tip:
Phrases with "less than" always flip the standard order: "k less than X" translates to X - k, not k - X.`
  },
  {
    id: 'ch2-q16',
    number: 16,
    exerciseNumber: 1,
    exerciseTitle: 'Module 1: Easy / Medium Questions',
    question: 'A taxi driver charges a flat fee of $3.50 plus $2.25 per mile m driven. Which expression models the total fare?',
    options: [
      '3.50m + 2.25',
      '2.25m + 3.50',
      '5.75m',
      '2.25(m + 3.50)'
    ],
    correctIndex: 1,
    correctAnswerText: '2.25m + 3.50',
    explanation: `Step-by-Step Algebraic Modeling:
1. The rate per mile ($2.25) multiplies the number of miles m -> 2.25m.
2. The flat fee ($3.50) is a constant initial cost added once -> + 3.50.
3. Total fare = 2.25m + 3.50.`
  },
  {
    id: 'ch2-q17',
    number: 17,
    exerciseNumber: 1,
    exerciseTitle: 'Module 1: Easy / Medium Questions',
    question: 'Expand (2x + 3)(x - 5).',
    options: [
      '2x² - 7x - 15',
      '2x² + 7x - 15',
      '2x² - 13x - 15',
      '2x² - 15'
    ],
    correctIndex: 0,
    correctAnswerText: '2x² - 7x - 15',
    explanation: `Step-by-Step Algebraic Solution:
1. Apply FOIL method:
   • First: 2x · x = 2x²
   • Outer: 2x · (-5) = -10x
   • Inner: 3 · x = +3x
   • Last: 3 · (-5) = -15
2. Combine linear terms:
   -10x + 3x = -7x
3. Full expanded expression: 2x² - 7x - 15.`
  },
  {
    id: 'ch2-q18',
    number: 18,
    exerciseNumber: 1,
    exerciseTitle: 'Module 1: Easy / Medium Questions',
    question: 'Simplify: (4x² / y³) ÷ (2x / y).',
    options: [
      '2x / y²',
      '8x³ / y⁴',
      '2x³ / y²',
      '2 / y²'
    ],
    correctIndex: 0,
    correctAnswerText: '2x / y²',
    explanation: `Step-by-Step Algebraic Solution:
1. Dividing fractions is equivalent to multiplying by the reciprocal:
   (4x² / y³) · (y / 2x)
2. Combine into a single fraction:
   (4x² y) / (2x y³)
3. Simplify coefficients and variables:
   • 4 / 2 = 2
   • x² / x = x^(2 - 1) = x
   • y / y³ = 1 / y^(3 - 1) = 1 / y²
4. Result = 2x / y².`
  },
  {
    id: 'ch2-q19',
    number: 19,
    exerciseNumber: 1,
    exerciseTitle: 'Module 1: Easy / Medium Questions',
    question: 'What is the value of (8x⁰)² - 3²?',
    options: [
      '-1',
      '55',
      '61',
      '0'
    ],
    correctIndex: 1,
    correctAnswerText: '55',
    explanation: `Step-by-Step Algebraic Solution:
1. Zero exponent rule: for any non-zero x, x⁰ = 1.
2. Evaluate the inner term: 8 · x⁰ = 8(1) = 8.
3. Square the term: (8)² = 64.
4. Evaluate 3² = 9.
5. Compute difference: 64 - 9 = 55.`
  },
  {
    id: 'ch2-q20',
    number: 20,
    exerciseNumber: 1,
    exerciseTitle: 'Module 1: Easy / Medium Questions',
    question: 'A gym subscription charges a membership fee of M dollars and a monthly fee of d dollars for m months. The total cost is C = d · m + M. What does d represent?',
    options: [
      'Total cost after m months.',
      'Monthly subscription fee.',
      'Initial joining fee.',
      'Number of months.'
    ],
    correctIndex: 1,
    correctAnswerText: 'Monthly subscription fee.',
    explanation: `Step-by-Step Structural Interpretation:
In the linear model C = d · m + M:
• m is the independent variable representing the number of months.
• d is the coefficient of m, which represents the recurring rate per unit of time (the monthly subscription fee).
• M is the y-intercept (constant), representing the one-time initial joining fee.`
  },
  {
    id: 'ch2-q21',
    number: 21,
    exerciseNumber: 1,
    exerciseTitle: 'Module 1: Easy / Medium Questions',
    question: 'Factor completely: x² + 3x - 28.',
    options: [
      '(x + 7)(x - 4)',
      '(x - 7)(x + 4)',
      '(x + 14)(x - 2)',
      '(x - 28)(x + 1)'
    ],
    correctIndex: 0,
    correctAnswerText: '(x + 7)(x - 4)',
    explanation: `Step-by-Step Algebraic Solution:
1. Find two numbers that multiply to -28 and add to +3.
2. Factors of -28:
   • (+7) · (-4) = -28
   • (+7) + (-4) = +3 (Matches!)
3. Factor form = (x + 7)(x - 4).`
  },
  {
    id: 'ch2-q22',
    number: 22,
    exerciseNumber: 1,
    exerciseTitle: 'Module 1: Easy / Medium Questions',
    question: 'Which expression is equivalent to 4(2a + 3b) - 2(a - 4b)?',
    options: [
      '6a + 20b',
      '6a + 4b',
      '6a - 20b',
      '8a + 20b'
    ],
    correctIndex: 0,
    correctAnswerText: '6a + 20b',
    explanation: `Step-by-Step Algebraic Solution:
1. Distribute 4 across (2a + 3b):
   4(2a) + 4(3b) = 8a + 12b
2. Distribute -2 across (a - 4b):
   -2(a) - 2(-4b) = -2a + 8b
3. Combine like terms:
   (8a - 2a) + (12b + 8b) = 6a + 20b.`
  },
  {
    id: 'ch2-q23',
    number: 23,
    exerciseNumber: 1,
    exerciseTitle: 'Module 1: Easy / Medium Questions',
    question: 'Simplify √(36x⁸) where x > 0.',
    options: [
      '6x⁴',
      '18x⁴',
      '6x²',
      '36x⁴'
    ],
    correctIndex: 0,
    correctAnswerText: '6x⁴',
    explanation: `Step-by-Step Algebraic Solution:
1. Apply the product rule for radicals: √(ab) = √a · √b.
2. Evaluate √36 = 6.
3. Apply radical exponent conversion for √(x⁸): (x⁸)^(1/2) = x^(8/2) = x⁴.
4. Product = 6x⁴.`
  },
  {
    id: 'ch2-q24',
    number: 24,
    exerciseNumber: 1,
    exerciseTitle: 'Module 1: Easy / Medium Questions',
    question: 'Perform the operation: (5x + 1)/(x + 2) - (2x - 5)/(x + 2).',
    options: [
      '(3x - 4) / (x + 2)',
      '(3x + 6) / (x + 2)',
      '3',
      '(7x - 4) / (x + 2)'
    ],
    correctIndex: 2,
    correctAnswerText: '3',
    explanation: `Step-by-Step Algebraic Solution:
1. Since denominators are already common (x + 2), combine numerators:
   [(5x + 1) - (2x - 5)] / (x + 2)
2. Distribute the negative sign in numerator:
   (5x + 1 - 2x + 5) / (x + 2)
3. Combine like terms:
   (3x + 6) / (x + 2)
4. Factor the numerator:
   3(x + 2) / (x + 2) = 3.`
  },
  {
    id: 'ch2-q25',
    number: 25,
    exerciseNumber: 1,
    exerciseTitle: 'Module 1: Easy / Medium Questions',
    question: 'If E = m c², what is E when m = 3 and c = 10³?',
    options: [
      '3 × 10⁶',
      '9 × 10⁶',
      '3 × 10⁵',
      '6 × 10⁶'
    ],
    correctIndex: 0,
    correctAnswerText: '3 × 10⁶',
    explanation: `Step-by-Step Algebraic Solution:
1. Substitute m = 3 and c = 10³ into E = m c²:
   E = 3 · (10³)²
2. Apply power of a power exponent rule: (10³)² = 10^(3 · 2) = 10⁶.
3. Therefore: E = 3 × 10⁶.`
  }
];
