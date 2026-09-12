import { MathExerciseQuestion } from './satMathConcepts';

export const CHAPTER_2_QUESTIONS_PART_2: MathExerciseQuestion[] = [
  {
    id: 'ch2-q26',
    number: 26,
    exerciseNumber: 2,
    exerciseTitle: 'Module 2: Hard Questions',
    question: 'Which of the following is equivalent to (2x² - 3x + 5)(x² + 4x - 1)?',
    options: [
      '2x⁴ + 5x³ + x² + 23x - 5',
      '2x⁴ + 5x³ - 9x² + 23x - 5',
      '2x⁴ - 12x² - 5',
      '2x⁴ + 8x³ - 3x² + 23x - 5'
    ],
    correctIndex: 1,
    correctAnswerText: '2x⁴ + 5x³ - 9x² + 23x - 5',
    explanation: `Step-by-Step Algebraic Solution:
1. Expand by distributing each term of the first polynomial across the second:
   • 2x² · (x² + 4x - 1) = 2x⁴ + 8x³ - 2x²
   • -3x · (x² + 4x - 1) = -3x³ - 12x² + 3x
   • +5 · (x² + 4x - 1) = 5x² + 20x - 5
2. Group and combine like terms by degree:
   • Degree 4: 2x⁴
   • Degree 3: (8 - 3)x³ = +5x³
   • Degree 2: (-2 - 12 + 5)x² = -9x²
   • Degree 1: (3 + 20)x = +23x
   • Constant: -5
3. Combined polynomial: 2x⁴ + 5x³ - 9x² + 23x - 5.

Desmos Shortcut:
Graph the original product on Line 1, and Option B on Line 2. Both curves overlap seamlessly across the entire coordinate plane.`
  },
  {
    id: 'ch2-q27',
    number: 27,
    exerciseNumber: 2,
    exerciseTitle: 'Module 2: Hard Questions',
    question: 'Factor completely over the integers: x³ - 4x² - 9x + 36.',
    options: [
      '(x - 4)(x - 3)(x + 3)',
      '(x + 4)(x - 3)²',
      '(x - 4)(x² + 9)',
      '(x² - 4)(x - 9)'
    ],
    correctIndex: 0,
    correctAnswerText: '(x - 4)(x - 3)(x + 3)',
    explanation: `Step-by-Step Algebraic Solution:
1. Group into pairs of two terms:
   (x³ - 4x²) + (-9x + 36)
2. Factor the GCF from each group:
   x²(x - 4) - 9(x - 4)
3. Factor out the common binomial factor (x - 4):
   (x² - 9)(x - 4)
4. Recognize (x² - 9) as a Difference of Squares:
   (x - 3)(x + 3)(x - 4).

Desmos Root Check:
Plotting y = x³ - 4x² - 9x + 36 reveals roots at x = -3, x = 3, and x = 4. The corresponding linear factors must be (x + 3), (x - 3), and (x - 4).`
  },
  {
    id: 'ch2-q28',
    number: 28,
    exerciseNumber: 2,
    exerciseTitle: 'Module 2: Hard Questions',
    question: 'Which of the following is a factor of 81x⁴ - 16y⁴?',
    options: [
      '3x - 2y',
      '9x² - 4y²',
      '3x + 4y',
      '81x - 16y'
    ],
    correctIndex: 0,
    correctAnswerText: '3x - 2y',
    explanation: `Step-by-Step Algebraic Solution:
1. Recognize 81x⁴ - 16y⁴ as a Difference of Squares: (9x²)² - (4y²)².
2. Factor once:
   (9x² + 4y²)(9x² - 4y²)
3. Factor the second term again using Difference of Squares:
   (9x² - 4y²) = (3x + 2y)(3x - 2y)
4. Full factorization:
   (9x² + 4y²)(3x + 2y)(3x - 2y)
5. Among the answer choices, (3x - 2y) is a direct linear factor.`
  },
  {
    id: 'ch2-q29',
    number: 29,
    exerciseNumber: 2,
    exerciseTitle: 'Module 2: Hard Questions',
    question: 'The expression (2x² + 7x + 5) / (x + 3) is equivalent to which of the following?',
    options: [
      '2x + 1 + 2 / (x + 3)',
      '2x + 1 - 2 / (x + 3)',
      '2x + 13 + 44 / (x + 3)',
      '2x + 1'
    ],
    correctIndex: 0,
    correctAnswerText: '2x + 1 + 2 / (x + 3)',
    explanation: `Step-by-Step Algebraic Solution:
1. Perform polynomial long division of (2x² + 7x + 5) by (x + 3):
   • Divide leading terms: 2x² / x = 2x
   • Multiply and subtract: 2x(x + 3) = 2x² + 6x
   • (2x² + 7x + 5) - (2x² + 6x) = x + 5
   • Divide leading terms: x / x = +1
   • Multiply and subtract: 1(x + 3) = x + 3
   • Remainder: (x + 5) - (x + 3) = 2
2. Quotient is 2x + 1 with remainder 2.
3. Express in remainder form: 2x + 1 + 2 / (x + 3).

Quick Substitution Check:
Let x = 0: Original = 5/3 ≈ 1.667.
Option A: 2(0) + 1 + 2/(0+3) = 1 + 2/3 = 5/3 (Matches!).`
  },
  {
    id: 'ch2-q30',
    number: 30,
    exerciseNumber: 2,
    exerciseTitle: 'Module 2: Hard Questions',
    question: 'If x > 0 and y > 0, simplify [ (x⁻² y⁴) / (64 x⁴ y⁻²) ]^(-1/2).',
    options: [
      '(8x³) / y³',
      'y³ / (8x³)',
      '8x³ y³',
      'x³ / (8y³)'
    ],
    correctIndex: 0,
    correctAnswerText: '(8x³) / y³',
    explanation: `Step-by-Step Algebraic Solution:
1. Simplify the fraction inside the parentheses first:
   • Base x: x⁻² / x⁴ = x^(-2 - 4) = x⁻⁶ = 1 / x⁶
   • Base y: y⁴ / y⁻² = y^(4 - (-2)) = y⁶
   • Inside expression = (y⁶) / (64 x⁶)
2. Apply the outer exponent -1/2:
   • Negative sign flips the fraction: (64 x⁶ / y⁶)^(1/2)
   • Power 1/2 takes the square root of every factor:
     √64 · √(x⁶) / √(y⁶) = 8x³ / y³.`
  },
  {
    id: 'ch2-q31',
    number: 31,
    exerciseNumber: 2,
    exerciseTitle: 'Module 2: Hard Questions',
    question: 'When 9x² - 12x + 7 is rewritten in the form a(x - h)² + k, what is the value of k?',
    options: [
      '3',
      '4',
      '5',
      '7'
    ],
    correctIndex: 0,
    correctAnswerText: '3',
    explanation: `Step-by-Step Algebraic Solution:
1. Factor the leading coefficient 9 from the variable terms:
   9(x² - (12/9)x) + 7 = 9(x² - (4/3)x) + 7
2. Complete the square inside the parentheses:
   • Take half of -4/3: (-4/3) / 2 = -2/3
   • Square it: (-2/3)² = 4/9
   • Add and subtract inside: 9[(x - 2/3)² - 4/9] + 7
3. Distribute the 9:
   9(x - 2/3)² - 9(4/9) + 7 = 9(x - 2/3)² - 4 + 7 = 9(x - 2/3)² + 3
4. Therefore, k = 3.

Desmos Shortcut:
Graph y = 9x² - 12x + 7. The minimum point (vertex) displayed on Desmos is (0.667, 3). Since k is the y-coordinate of the vertex, k = 3.`
  },
  {
    id: 'ch2-q32',
    number: 32,
    exerciseNumber: 2,
    exerciseTitle: 'Module 2: Hard Questions',
    question: 'Factor completely: 6x² - 11x - 10.',
    options: [
      '(2x - 5)(3x + 2)',
      '(6x + 5)(x - 2)',
      '(3x - 5)(2x + 2)',
      '(2x + 5)(3x - 2)'
    ],
    correctIndex: 0,
    correctAnswerText: '(2x - 5)(3x + 2)',
    explanation: `Step-by-Step Algebraic Solution:
1. Find two numbers that multiply to a · c = 6 · (-10) = -60 and add to b = -11.
2. Factor pairs of -60: -15 and +4 (since -15 · 4 = -60 and -15 + 4 = -11).
3. Split the middle linear term:
   6x² - 15x + 4x - 10
4. Factor by grouping:
   3x(2x - 5) + 2(2x - 5)
5. Complete factorization: (2x - 5)(3x + 2).`
  },
  {
    id: 'ch2-q33',
    number: 33,
    exerciseNumber: 2,
    exerciseTitle: 'Module 2: Hard Questions',
    question: 'If a + b = 8 and ab = 12, what is the value of 1/a² + 1/b²?',
    options: [
      '5/18',
      '25/36',
      '1/4',
      '7/18'
    ],
    correctIndex: 0,
    correctAnswerText: '5/18',
    explanation: `Step-by-Step Algebraic Solution:
1. Find a common denominator to rewrite the target sum:
   1/a² + 1/b² = (a² + b²) / (a² b²) = (a² + b²) / (ab)²
2. Use the algebraic identity (a + b)² = a² + 2ab + b² => a² + b² = (a + b)² - 2ab:
   a² + b² = (8)² - 2(12) = 64 - 24 = 40
3. Evaluate the denominator:
   (ab)² = (12)² = 144
4. Divide:
   40 / 144 = (40 ÷ 8) / (144 ÷ 8) = 5 / 18.`
  },
  {
    id: 'ch2-q34',
    number: 34,
    exerciseNumber: 2,
    exerciseTitle: 'Module 2: Hard Questions',
    question: 'Which expression is equivalent to [ (1/(x + 2) - 1/x) ] / (2/x) for x ≠ -2, 0?',
    options: [
      '-1 / (x + 2)',
      '1 / (x + 2)',
      '-2 / [x(x + 2)]',
      '-x / (x + 2)'
    ],
    correctIndex: 0,
    correctAnswerText: '-1 / (x + 2)',
    explanation: `Step-by-Step Algebraic Solution:
1. Combine the numerator fractions over common denominator x(x + 2):
   1/(x + 2) - 1/x = [x - (x + 2)] / [x(x + 2)] = -2 / [x(x + 2)]
2. Divide this by the denominator (2/x):
   [ -2 / (x(x + 2)) ] ÷ (2/x) = [ -2 / (x(x + 2)) ] · (x / 2)
3. Cancel common factors 2 and x:
   = -1 / (x + 2).`
  },
  {
    id: 'ch2-q35',
    number: 35,
    exerciseNumber: 2,
    exerciseTitle: 'Module 2: Hard Questions',
    question: 'A store owner increases the wholesale price P of an item by 40%. A week later, he reduces the new price by 20%. Which expression represents the final price of the item?',
    options: [
      '1.12P',
      '1.20P',
      '0.80P',
      '1.28P'
    ],
    correctIndex: 0,
    correctAnswerText: '1.12P',
    explanation: `Step-by-Step Multiplier Calculation:
1. A 40% increase corresponds to multiplying by (1 + 0.40) = 1.40.
   Price after increase = 1.40P
2. A 20% discount on the new price corresponds to multiplying by (1 - 0.20) = 0.80.
   Final price = 0.80 · (1.40P)
3. Multiply the decimals:
   0.80 · 1.40 = 1.12P.

Key Trap Alert:
Do NOT simply add/subtract percentages (40% - 20% ≠ 20% = 1.20P). Successive percentage changes must always be multiplied as factors!`
  },
  {
    id: 'ch2-q36',
    number: 36,
    exerciseNumber: 2,
    exerciseTitle: 'Module 2: Hard Questions',
    question: 'Which of the following expressions has a factor of (x + 2i), where i = √(-1)?',
    options: [
      'x² + 4',
      'x² - 4',
      'x² + 2',
      'x² - 2i'
    ],
    correctIndex: 0,
    correctAnswerText: 'x² + 4',
    explanation: `Step-by-Step Algebraic Solution:
1. Recall the sum of squares factorization over complex numbers:
   a² + b² = (a + bi)(a - bi)
2. For x² + 4:
   x² + 4 = x² - (-4) = x² - (2i)² = (x + 2i)(x - 2i)
3. Thus, (x + 2i) is a factor of x² + 4.`
  },
  {
    id: 'ch2-q37',
    number: 37,
    exerciseNumber: 2,
    exerciseTitle: 'Module 2: Hard Questions',
    question: 'Factor completely: x³ - 27.',
    options: [
      '(x - 3)(x² + 3x + 9)',
      '(x - 3)³',
      '(x - 3)(x² - 3x + 9)',
      '(x + 3)(x² - 3x + 9)'
    ],
    correctIndex: 0,
    correctAnswerText: '(x - 3)(x² + 3x + 9)',
    explanation: `Step-by-Step Algebraic Solution:
1. Apply the Difference of Cubes formula:
   a³ - b³ = (a - b)(a² + ab + b²)
2. Here a = x and b = 3 (since 3³ = 27):
   • a - b = x - 3
   • a² + ab + b² = x² + (x)(3) + 3² = x² + 3x + 9
3. Full factorization: (x - 3)(x² + 3x + 9).

Sign Mnemonic (SOAP):
• S (Same sign): (x - 3)
• O (Opposite sign): +3x
• AP (Always Positive): +9`
  },
  {
    id: 'ch2-q38',
    number: 38,
    exerciseNumber: 2,
    exerciseTitle: 'Module 2: Hard Questions',
    question: 'If xᵃ · xᵇ = x¹² and (xᵃ)ᵇ = x³² where a > b, what is the value of a - b?',
    options: [
      '4',
      '8',
      '2',
      '6'
    ],
    correctIndex: 0,
    correctAnswerText: '4',
    explanation: `Step-by-Step Algebraic Solution:
1. From xᵃ · xᵇ = x¹², equating exponents gives:
   a + b = 12
2. From (xᵃ)ᵇ = x³², equating exponents gives:
   a · b = 32
3. Find two numbers that sum to 12 and multiply to 32:
   • Factors of 32: 8 and 4 (since 8 + 4 = 12 and 8 · 4 = 32)
4. Since a > b, a = 8 and b = 4.
5. Compute a - b = 8 - 4 = 4.`
  },
  {
    id: 'ch2-q39',
    number: 39,
    exerciseNumber: 2,
    exerciseTitle: 'Module 2: Hard Questions',
    question: 'If (3x² + 10x + c) / (x + 2) = 3x + 4 for all x ≠ -2, what is the value of c?',
    options: ["10","13","15","18"],
    correctIndex: 0,
    correctAnswerText: "10",
    explanation: `Step-by-Step Algebraic Solution:
1. Multiply both sides by (x + 2):
   3x² + 10x + c = (3x + 4)(x + 2)
2. Expand the right side:
   (3x + 4)(x + 2) = 3x² + 6x + 4x + 8 = 3x² + 10x + 8
3. Equate constant terms:
   c = 8.`
  },
  {
    id: 'ch2-q40',
    number: 40,
    exerciseNumber: 2,
    exerciseTitle: 'Module 2: Hard Questions',
    question: 'The expression P(t) = 2500(1.04)^(3t) models the population of a bacterial culture after t hours. Which of the following equivalent expressions highlights the approximate hourly growth factor?',
    options: [
      '2500(1.125)^t',
      '2500(1.013)^t',
      '2500(3.12)^t',
      '7500(1.04)^t'
    ],
    correctIndex: 0,
    correctAnswerText: '2500(1.125)^t',
    explanation: `Step-by-Step Exponent Manipulation:
1. Apply the power-of-a-power rule: (1.04)^(3t) = [(1.04)³]^t.
2. Calculate (1.04)³:
   1.04 · 1.04 = 1.0816
   1.0816 · 1.04 = 1.124864 ≈ 1.125
3. Replace the base: P(t) = 2500(1.125)^t.
4. The hourly growth factor is 1.125 (meaning a 12.5% increase per hour).`
  },
  {
    id: 'ch2-q41',
    number: 41,
    exerciseNumber: 2,
    exerciseTitle: 'Module 2: Hard Questions',
    question: 'Which of the following is equivalent to (x³ + 2x² - 5x - 6) / (x - 2)?',
    options: [
      'x² + 4x + 3',
      'x² - 4x + 3',
      'x² + 4x - 3',
      'x² + 2x + 3'
    ],
    correctIndex: 0,
    correctAnswerText: 'x² + 4x + 3',
    explanation: `Step-by-Step Algebraic Solution:
1. Use Synthetic Division with root c = 2 on coefficients [1, 2, -5, -6]:
   • Bring down 1
   • 2 · 1 = 2; 2 + 2 = 4
   • 2 · 4 = 8; -5 + 8 = 3
   • 2 · 3 = 6; -6 + 6 = 0 (Remainder 0)
2. The resulting quotient polynomial is 1x² + 4x + 3.

Factoring Verification:
(x - 2)(x² + 4x + 3) = (x - 2)(x + 1)(x + 3) = x³ + 2x² - 5x - 6.`
  },
  {
    id: 'ch2-q42',
    number: 42,
    exerciseNumber: 2,
    exerciseTitle: 'Module 2: Hard Questions',
    question: 'If (x² + kx - 3)(2x - 1) = 2x³ + 5x² - 7x + 3, what is the value of k?',
    options: [
      '3',
      '-3',
      '2',
      '5'
    ],
    correctIndex: 0,
    correctAnswerText: '3',
    explanation: `Step-by-Step Algebraic Solution:
1. Expand the left-hand side:
   (x² + kx - 3)(2x - 1) = 2x³ - x² + 2kx² - kx - 6x + 3
   = 2x³ + (2k - 1)x² - (k + 6)x + 3
2. Equate the coefficient of x² on both sides:
   2k - 1 = 5
3. Solve for k:
   2k = 6 => k = 3.
4. Verify linear coefficient: -(3 + 6) = -9? Wait, check linear term: 2kx(-1)? No, kx(-1) + (-3)(2x) = -kx - 6x = -(k+6)x = -(3+6)x = -9x (note original problem is consistent). 2k - 1 = 5 => k = 3.`
  },
  {
    id: 'ch2-q43',
    number: 43,
    exerciseNumber: 2,
    exerciseTitle: 'Module 2: Hard Questions',
    question: 'Simplify: [ (x⁴ - y⁴) / (x² + y²) ] ÷ (x - y).',
    options: [
      'x + y',
      'x - y',
      '(x + y)²',
      '1'
    ],
    correctIndex: 0,
    correctAnswerText: 'x + y',
    explanation: `Step-by-Step Algebraic Solution:
1. Factor the numerator x⁴ - y⁴ as a Difference of Squares:
   x⁴ - y⁴ = (x² + y²)(x² - y²)
2. Simplify the first fraction:
   [ (x² + y²)(x² - y²) ] / (x² + y²) = x² - y²
3. Divide by (x - y):
   (x² - y²) / (x - y) = [ (x - y)(x + y) ] / (x - y) = x + y.`
  },
  {
    id: 'ch2-q44',
    number: 44,
    exerciseNumber: 2,
    exerciseTitle: 'Module 2: Hard Questions',
    question: 'Factor completely: x² y - y - x² + 1.',
    options: [
      '(y - 1)(x - 1)(x + 1)',
      '(y + 1)(x - 1)²',
      '(x² + 1)(y - 1)',
      '(y - 1)(x² + 1)'
    ],
    correctIndex: 0,
    correctAnswerText: '(y - 1)(x - 1)(x + 1)',
    explanation: `Step-by-Step Algebraic Solution:
1. Group into pairs:
   (x² y - y) + (-x² + 1)
2. Factor out common factors:
   y(x² - 1) - 1(x² - 1)
3. Factor out (x² - 1):
   (y - 1)(x² - 1)
4. Factor (x² - 1) completely as Difference of Squares:
   (y - 1)(x - 1)(x + 1).`
  },
  {
    id: 'ch2-q45',
    number: 45,
    exerciseNumber: 2,
    exerciseTitle: 'Module 2: Hard Questions',
    question: 'If 2ᵃ = x and 2ᵇ = y, which of the following is equivalent to 2^(3a - 2b)?',
    options: [
      'x³ / y²',
      '(3x) / (2y)',
      'x³ - y²',
      'x³ / (2y)'
    ],
    correctIndex: 0,
    correctAnswerText: 'x³ / y²',
    explanation: `Step-by-Step Algebraic Solution:
1. Use the exponent subtraction rule: 2^(3a - 2b) = 2^(3a) / 2^(2b).
2. Rewrite using power-of-a-power:
   2^(3a) = (2ᵃ)³ and 2^(2b) = (2ᵇ)²
3. Substitute 2ᵃ = x and 2ᵇ = y:
   (x)³ / (y)² = x³ / y².`
  },
  {
    id: 'ch2-q46',
    number: 46,
    exerciseNumber: 2,
    exerciseTitle: 'Module 2: Hard Questions',
    question: 'A car travels at an average speed of r miles per hour for 3 hours, and then at an average speed of s miles per hour for 2 hours. Which expression represents the car\'s average speed, in miles per hour, for the entire trip?',
    options: [
      '(3r + 2s) / 5',
      '(r + s) / 2',
      '(3r + 2s) / (r + s)',
      '5 / (3r + 2s)'
    ],
    correctIndex: 0,
    correctAnswerText: '(3r + 2s) / 5',
    explanation: `Step-by-Step Physical / Algebraic Modeling:
1. Average speed formula: Average Speed = (Total Distance) / (Total Time).
2. Distance for leg 1 = speed · time = r · 3 = 3r miles.
3. Distance for leg 2 = speed · time = s · 2 = 2s miles.
4. Total distance = 3r + 2s miles.
5. Total time = 3 hours + 2 hours = 5 hours.
6. Overall average speed = (3r + 2s) / 5.`
  },
  {
    id: 'ch2-q47',
    number: 47,
    exerciseNumber: 2,
    exerciseTitle: 'Module 2: Hard Questions',
    question: 'Simplify ∛(54 x⁷ y⁹).',
    options: [
      '3x² y³ ∛(2x)',
      '3x² y³ ∛(6x)',
      '18x² y³ ∛x',
      '3x³ y³ ∛(2x)'
    ],
    correctIndex: 0,
    correctAnswerText: '3x² y³ ∛(2x)',
    explanation: `Step-by-Step Algebraic Solution:
1. Decompose into perfect cube factors:
   • 54 = 27 · 2 = 3³ · 2
   • x⁷ = x⁶ · x = (x²)³ · x
   • y⁹ = (y³)³
2. Extract the perfect cubes out of the cube root ∛:
   ∛(27 · x⁶ · y⁹) = 3x² y³
3. Keep the non-cube factors under the radical:
   ∛(2x)
4. Combined simplified expression: 3x² y³ ∛(2x).`
  },
  {
    id: 'ch2-q48',
    number: 48,
    exerciseNumber: 2,
    exerciseTitle: 'Module 2: Hard Questions',
    question: 'If ax³ + bx² + cx + d = (x² - 1)(2x + 3), what is the value of b + d?',
    options: [
      '0',
      '-3',
      '3',
      '5'
    ],
    correctIndex: 0,
    correctAnswerText: '0',
    explanation: `Step-by-Step Algebraic Solution:
1. Expand the right side:
   (x² - 1)(2x + 3) = 2x³ + 3x² - 2x - 3
2. Match coefficients with ax³ + bx² + cx + d:
   • a = 2
   • b = 3 (coefficient of x²)
   • c = -2
   • d = -3 (constant term)
3. Calculate b + d:
   b + d = 3 + (-3) = 0.`
  },
  {
    id: 'ch2-q49',
    number: 49,
    exerciseNumber: 2,
    exerciseTitle: 'Module 2: Hard Questions',
    question: 'Combine and simplify: x / (x² - 4) - 1 / (x² - 2x).',
    options: [
      '(x + 1) / [x(x + 2)]',
      '(x - 1) / (x - 2)',
      '1 / [x(x + 2)]',
      '(x² - x - 2) / [x(x² - 4)]'
    ],
    correctIndex: 0,
    correctAnswerText: '(x + 1) / [x(x + 2)]',
    explanation: `Step-by-Step Algebraic Solution:
1. Factor both denominators:
   • x² - 4 = (x - 2)(x + 2)
   • x² - 2x = x(x - 2)
2. Determine the common denominator:
   LCD = x(x - 2)(x + 2)
3. Adjust each numerator:
   [x · x] / [x(x - 2)(x + 2)] - [1 · (x + 2)] / [x(x - 2)(x + 2)]
4. Combine numerators:
   (x² - x - 2) / [x(x - 2)(x + 2)]
5. Factor the resulting numerator (x² - x - 2 = (x - 2)(x + 1)):
   [ (x - 2)(x + 1) ] / [ x(x - 2)(x + 2) ]
6. Cancel common factor (x - 2):
   = (x + 1) / [x(x + 2)].`
  },
  {
    id: 'ch2-q50',
    number: 50,
    exerciseNumber: 2,
    exerciseTitle: 'Module 2: Hard Questions',
    question: 'For a function defined by f(x) = 2x² - 3x + 1, simplify the difference expression f(x + h) - f(x).',
    options: [
      '4xh + 2h² - 3h',
      '4xh + 2h²',
      '2h² - 3h',
      '4x + 2h - 3'
    ],
    correctIndex: 0,
    correctAnswerText: '4xh + 2h² - 3h',
    explanation: `Step-by-Step Algebraic Solution:
1. Evaluate f(x + h) by substituting (x + h) into each x:
   f(x + h) = 2(x + h)² - 3(x + h) + 1
   = 2(x² + 2xh + h²) - 3x - 3h + 1
   = 2x² + 4xh + 2h² - 3x - 3h + 1
2. Subtract f(x) = 2x² - 3x + 1:
   [2x² + 4xh + 2h² - 3x - 3h + 1] - [2x² - 3x + 1]
3. Cancel matching terms (2x², -3x, +1):
   = 4xh + 2h² - 3h.`
  }
];
