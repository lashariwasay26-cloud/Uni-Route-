import { MathExerciseQuestion } from './satMathConcepts';

export const CHAPTER_1_QUESTIONS_PART_1: MathExerciseQuestion[] = [
  {
    id: 'ch1-q1',
    number: 1,
    exerciseNumber: 1,
    exerciseTitle: 'Rational Exponents & Radical Conversion',
    question: 'If c > 0 and m and n are positive integers, which of the following is equivalent to c^(m/n)?',
    options: [
      '(ⁿ√c)ᵐ',
      '(ᵐ√c)ⁿ',
      'c^(m - n)',
      'cᵐ / cⁿ'
    ],
    correctIndex: 0,
    correctAnswerText: '(ⁿ√c)ᵐ',
    explanation: `Step-by-Step Breakdown:
1. Recall the Fundamental Rational Exponent Rule: For any positive base c, a fractional exponent c^(m/n) is defined such that the denominator n denotes the index of the radical (the n-th root) and the numerator m denotes the integer power.
2. Mathematically: c^(m/n) = ⁿ√(cᵐ) = (ⁿ√c)ᵐ.
3. Therefore, c^(m/n) is equivalent to (ⁿ√c)ᵐ.

Desmos Shortcut:
Assign specific values to the variables using sliders: set c = 8, m = 2, n = 3.
• Original expression: 8^(2/3) = (³√8)² = 2² = 4.
• Option A: (³√8)² = 2² = 4 (Exact Match).
• Option B: (²√8)³ = (2.828)³ ≈ 22.63 ≠ 4.`,
    distractorExplanations: {
      1: 'Reverses the role of numerator and denominator; m is the power, not the root index.',
      2: 'Confuses fractional exponent division with the quotient rule of exponents (cᵐ / cⁿ = c^(m-n)).',
      3: 'Represents the quotient of two exponential terms with integer powers, which simplifies to c^(m-n), not c^(m/n).'
    }
  },
  {
    id: 'ch1-q2',
    number: 2,
    exerciseNumber: 1,
    exerciseTitle: 'Rational Exponents & Radical Conversion',
    question: 'If k > 0 and a and b are positive integers with a ≠ b, which of the following is equivalent to k^(a/b)?',
    options: [
      '(ᵇ√k)ᵃ',
      '(ᵃ√k)ᵇ',
      'k^(a - b)',
      'kᵃ / kᵇ'
    ],
    correctIndex: 0,
    correctAnswerText: '(ᵇ√k)ᵃ',
    explanation: `Step-by-Step Breakdown:
1. Apply the Rational Exponent Theorem: For base k > 0, k^(a/b) = (k^(1/b))ᵃ = (ᵇ√k)ᵃ.
2. The denominator b represents the radical root index, while the numerator a represents the exponent power.
3. Hence, (ᵇ√k)ᵃ is the exact equivalent expression.

Desmos Shortcut:
Type k = 16, a = 3, b = 4 in Desmos.
• k^(a/b) = 16^(3/4) = (⁴√16)³ = 2³ = 8.
• Option A: (⁴√16)³ yields 8 (Exact Match).`,
    distractorExplanations: {
      1: 'Inverts root and exponent indexes; b is the root index and a is the power.',
      2: 'Subtracting exponents corresponds to base division kᵃ / kᵇ, not a fractional exponent.',
      3: 'Represents division of powers kᵃ / kᵇ = k^(a-b).'
    }
  },
  {
    id: 'ch1-q3',
    number: 3,
    exerciseNumber: 1,
    exerciseTitle: 'Negative & Fractional Exponent Simplification',
    question: 'Which of the following is equivalent to the expression (p^(1/4) · q^(-3)) / (p^(-1/2) · q^2), where p > 1 and q > 1?',
    options: [
      '(p² · ³√p) / (q³ · √q)',
      '(⁴√p) / (³√(q²))',
      '(⁴√(p³)) / (q⁵)',
      '(p√p) / (q³ · √q)'
    ],
    correctIndex: 2,
    correctAnswerText: '(⁴√(p³)) / (q⁵)',
    explanation: `Step-by-Step Breakdown:
1. Separate and group matching base variables:
   [p^(1/4) / p^(-1/2)] · [q^(-3) / q^2]
2. Apply the Quotient Rule (subtract exponents):
   • For p: 1/4 - (-1/2) = 1/4 + 2/4 = 3/4 → p^(3/4) = ⁴√(p³)
   • For q: -3 - 2 = -5 → q^(-5) = 1 / (q⁵)
3. Combine into a single simplified rational expression:
   p^(3/4) · q^(-5) = (⁴√(p³)) / (q⁵).

Desmos Shortcut:
Set sliders p = 16 and q = 2:
• Original expression: (16^(0.25) · 2^(-3)) / (16^(-0.5) · 2^2) = (2 · 0.125) / (0.25 · 4) = 0.25 / 1 = 0.25.
• Option C: ⁴√(16³) / 2⁵ = ⁴√(4096) / 32 = 8 / 32 = 0.25 (Exact Match).`,
    distractorExplanations: {
      0: 'Incorrectly added exponents instead of subtracting denominator powers.',
      1: 'Fails to combine the negative powers of p in numerator and denominator.',
      3: 'Mistakes the power 3/4 for 3/2.'
    }
  },
  {
    id: 'ch1-q4',
    number: 4,
    exerciseNumber: 1,
    exerciseTitle: 'Radical of Products to Rational Exponents',
    question: 'If s and t are positive, which of the following expressions is equivalent to ⁹√(s⁵ · t⁵)?',
    options: [
      '(st)⁴⁵',
      '(st)^(5/9)',
      '(st)¹⁴',
      '(st)^(9/5)'
    ],
    correctIndex: 1,
    correctAnswerText: '(st)^(5/9)',
    explanation: `Step-by-Step Breakdown:
1. Factor the common exponent from the radicand:
   s⁵ · t⁵ = (st)⁵.
2. Convert the 9th radical root to a fractional exponent of 1/9:
   ⁹√((st)⁵) = ((st)⁵)^(1/9).
3. Apply Power of a Power Rule ((aᵐ)ⁿ = a^(m·n)):
   ((st)⁵)^(1/9) = (st)^(5/9).

Desmos Shortcut:
Set s = 2, t = 3.
• Original expression: ( (2⁵ · 3⁵) )^(1/9) = (7776)^(1/9) ≈ 2.709.
• Option B: (2 · 3)^(5/9) = 6^(5/9) ≈ 2.709 (Matches perfectly).`,
    distractorExplanations: {
      0: 'Multiplied the radical index by the power (9 × 5 = 45) instead of creating a fraction.',
      2: 'Added the root index and power (9 + 5 = 14).',
      3: 'Inverted the fractional exponent (9/5 instead of 5/9).'
    }
  },
  {
    id: 'ch1-q5',
    number: 5,
    exerciseNumber: 1,
    exerciseTitle: 'Mixed Fractional Exponents with Negative Signs',
    question: 'Which of the following is equivalent to the expression p^(2 1/3) / q^(-3 1/2), where p > 1 and q > 1?',
    options: [
      'p² · q³ · ³√p · √q',
      '(p² · ³√p) / (q³ · ³√q)',
      '(p² · q³ · ³√p) / √q',
      '(p · √p) / (q³ · √q)'
    ],
    correctIndex: 0,
    correctAnswerText: 'p² · q³ · ³√p · √q',
    explanation: `Step-by-Step Breakdown:
1. Deconstruct the mixed numbers into sums:
   • 2 1/3 = 2 + 1/3 → p^(2 1/3) = p² · p^(1/3) = p² · ³√p
   • -3 1/2 = -(3 + 1/2) = -3 - 1/2
2. Move q from the denominator to the numerator by inverting the negative exponent:
   1 / q^(-3 1/2) = q^(3 1/2) = q³ · q^(1/2) = q³ · √q.
3. Multiply the parts together:
   (p² · ³√p) · (q³ · √q) = p² · q³ · ³√p · √q.

Desmos Shortcut:
Set p = 8 and q = 4 in Desmos.
• Original: 8^(7/3) / 4^(-7/2) = (128) / (1/128) = 16,384.
• Option A: 8² · 4³ · ³√8 · √4 = 64 · 64 · 2 · 2 = 16,384 (Exact Match).`,
    distractorExplanations: {
      1: 'Kept q in the denominator despite the negative exponent in the denominator.',
      2: 'Incorrectly left the square root term of q in the denominator.',
      3: 'Changed the integer powers from 2 and 3 to 1 and 3.'
    }
  },
  {
    id: 'ch1-q6',
    number: 6,
    exerciseNumber: 1,
    exerciseTitle: 'Radical Simplification & Fraction Reduction',
    question: 'Which expression is equivalent to ⁴⁰√(x²⁵) for all positive values of x?',
    options: [
      'x^(8/5)',
      'x^(5/8)',
      'x⁵',
      'x⁸'
    ],
    correctIndex: 1,
    correctAnswerText: 'x^(5/8)',
    explanation: `Step-by-Step Breakdown:
1. Convert the radical form to rational exponent notation:
   ⁴⁰√(x²⁵) = x^(25/40).
2. Reduce the fraction 25/40 by dividing numerator and denominator by their greatest common factor (GCF = 5):
   25 ÷ 5 = 5
   40 ÷ 5 = 8
   25/40 = 5/8.
3. Therefore: ⁴⁰√(x²⁵) = x^(5/8).

Desmos Shortcut:
Set x = 4.
• Expression: (4²⁵)^(1/40) = 4^(25/40) ≈ 2.3784.
• Option B: 4^(5/8) ≈ 2.3784.`,
    distractorExplanations: {
      0: 'Inverted the reduced fraction to 8/5 instead of 5/8.',
      2: 'Subtracted numbers or removed root index improperly.',
      3: 'Mistook denominator 8 for an integer power.'
    }
  },
  {
    id: 'ch1-q7',
    number: 7,
    exerciseNumber: 1,
    exerciseTitle: 'Power of a Product with Fractional Powers',
    question: 'Which of the following expressions is equivalent to (4s)^(1/3)?',
    options: [
      '2 / √s',
      '³√(4s)',
      '1 / (12s³)',
      '2√s'
    ],
    correctIndex: 1,
    correctAnswerText: '³√(4s)',
    explanation: `Step-by-Step Breakdown:
1. The exponent 1/3 applies to the entire parenthetical expression (4s).
2. By definition of fractional exponents, a^(1/n) = ⁿ√a.
3. Here, base is (4s) and n = 3, so (4s)^(1/3) = ³√(4s).

Desmos Shortcut:
Set s = 2 in Desmos.
• (4 · 2)^(1/3) = 8^(1/3) = 2.
• Option B: ³√(4 · 2) = ³√8 = 2.`,
    distractorExplanations: {
      0: 'Confuses square root and negative exponent properties.',
      2: 'Multiplies 4 by 3 to get 12 and changes exponent sign incorrectly.',
      3: 'Applies square root instead of cube root to 4 and s.'
    }
  },
  {
    id: 'ch1-q8',
    number: 8,
    exerciseNumber: 1,
    exerciseTitle: 'Fractional Exponent to Radical Conversion',
    question: 'Which of the following is equivalent to b^(3/4) for all non-negative values of b?',
    options: [
      '⁴√(b^(1/3))',
      '⁴√(b³)',
      '³√(b⁴)',
      '⁴√(3b)'
    ],
    correctIndex: 1,
    correctAnswerText: '⁴√(b³)',
    explanation: `Step-by-Step Breakdown:
1. Recall the rule: b^(m/n) = ⁿ√(bᵐ).
2. In the term b^(3/4):
   • Numerator m = 3 (the power of b)
   • Denominator n = 4 (the index of the radical root).
3. Thus, b^(3/4) = ⁴√(b³).

Desmos Shortcut:
Let b = 16.
• 16^(3/4) = (⁴√16)³ = 2³ = 8.
• Option B: ⁴√(16³) = ⁴√(4096) = 8.`,
    distractorExplanations: {
      0: 'Nests another fraction inside the radical.',
      2: 'Reverses the root index and the power (gives ³√(b⁴) = b^(4/3)).',
      3: 'Multiplies b by 3 inside the radical instead of raising b to the 3rd power.'
    }
  },
  {
    id: 'ch1-q9',
    number: 9,
    exerciseNumber: 1,
    exerciseTitle: 'Evaluation of Fractional Powers with Numerical Bases',
    question: 'Which of the following is equivalent to 4^(5/4)?',
    options: [
      '√2',
      '4√2',
      '⁵√4',
      '⁴√4'
    ],
    correctIndex: 1,
    correctAnswerText: '4√2',
    explanation: `Step-by-Step Breakdown:
Method 1 (Prime Base Reduction):
1. Rewrite 4 as 2²:
   4^(5/4) = (2²)^(5/4) = 2^(2 · 5/4) = 2^(5/2).
2. Deconstruct 5/2 as 2 + 1/2:
   2^(2 + 1/2) = 2² · 2^(1/2) = 4√2.

Method 2 (Deconstruct Exponent):
1. 4^(5/4) = 4^(1 + 1/4) = 4¹ · 4^(1/4).
2. 4^(1/4) = (2²)^(1/4) = 2^(2/4) = 2^(1/2) = √2.
3. Therefore: 4 · √2 = 4√2.

Desmos Shortcut:
Type 4^(5/4) in Desmos → Output is 5.656854...
Type 4√2 in Desmos → Output is 5.656854... (Exact Match).`,
    distractorExplanations: {
      0: 'Gives 2^(1/2) ≈ 1.414, missing the factor of 4.',
      2: 'Inverts the numerator and denominator into a fifth root.',
      3: 'Calculates 4^(1/4) instead of 4^(5/4).'
    }
  },
  {
    id: 'ch1-q10',
    number: 10,
    exerciseNumber: 1,
    exerciseTitle: 'Fractional Exponent of Negative Monomials',
    question: 'For all values of a, which of the following is equivalent to the expression (-27a¹⁰)^(3/5)?',
    options: [
      '3a⁶ · ⁵√3',
      '-3a⁶ · ⁵√81',
      '3a⁵ · ⁵√81',
      '-3a⁵ · ⁵√3'
    ],
    correctIndex: 1,
    correctAnswerText: '-3a⁶ · ⁵√81',
    explanation: `Step-by-Step Breakdown:
1. Distribute the exponent 3/5 to the coefficient and the variable:
   (-27)^(3/5) · (a¹⁰)^(3/5).
2. Simplify the variable part:
   (a¹⁰)^(3/5) = a^(10 · 3/5) = a⁶.
3. Simplify the numerical coefficient (-27)^(3/5):
   • -27 = (-3)³
   • ((-3)³)^(3/5) = (-3)^(9/5) = (-3)^(1 + 4/5) = (-3)¹ · (-3)^(4/5) = -3 · ⁵√((-3)⁴) = -3 · ⁵√81.
4. Combine terms:
   -3a⁶ · ⁵√81.

Desmos Shortcut:
Set a = 1 in Desmos:
• Original: (-27)^(3/5) = ((-27)³)^(1/5) = (-19683)^(0.2) ≈ -7.22467.
• Option B: -3 · 1⁶ · 81^(1/5) = -3 · 2.40822 ≈ -7.22467 (Exact Match).`,
    distractorExplanations: {
      0: 'Lost the negative sign resulting from raising an odd negative base to an odd power.',
      2: 'Calculated a^(10 · 1/2) = a⁵ instead of a^(10 · 3/5) = a⁶ and dropped the negative sign.',
      3: 'Incorrect power on the variable a (a⁵ instead of a⁶).'
    }
  },
  {
    id: 'ch1-q11',
    number: 11,
    exerciseNumber: 1,
    exerciseTitle: 'Radical Equivalence with Unknown Exponents',
    question: 'Which of the following is the value of w that makes ³√(27 · w⁶ · x^(3w)) = 3(3)² · x³ true for all values of x?',
    options: [
      '3',
      '9',
      '6',
      '1'
    ],
    correctIndex: 0,
    correctAnswerText: '3',
    explanation: `Step-by-Step Breakdown:
1. Simplify the Left-Hand Side (LHS):
   ³√(27 · w⁶ · x^(3w)) = (27)^(1/3) · (w⁶)^(1/3) · (x^(3w))^(1/3)
   • (27)^(1/3) = 3
   • (w⁶)^(1/3) = w²
   • (x^(3w))^(1/3) = x^(3w/3) = xʷ
   So, LHS = 3 · w² · xʷ.
2. Simplify the Right-Hand Side (RHS):
   3(3)² · x³ = 3 · 9 · x³ = 27 · x³.
3. Equate LHS and RHS:
   3 · w² · xʷ = 27 · x³
4. For this identity to hold for all x:
   • Match the powers of x: w = 3.
   • Verify the coefficients with w = 3: 3 · (3)² = 3 · 9 = 27 (Matches RHS coefficient 27).
5. Therefore, w = 3.

Desmos Shortcut:
Define LHS(w, x) = (27 · w^6 · x^(3w))^(1/3) and RHS(x) = 27 · x^3.
Test w = 3: For any x (e.g. x = 2), LHS(3, 2) = 216 and RHS(2) = 216.`,
    distractorExplanations: {
      1: 'Equated w to 3² = 9 instead of solving for the base exponent.',
      2: 'Confused the power w⁶ inside the radical with the target value of w.',
      3: 'Assumed w = 1 without balancing the coefficient 3w² = 27.'
    }
  },
  {
    id: 'ch1-q12',
    number: 12,
    exerciseNumber: 1,
    exerciseTitle: 'Product Rule Across Multiple Variables',
    question: 'Which expression is equivalent to the given expression, where k > 0, n > 0, and r > 0? (k^(-2) · n · r⁵)(k³ · n⁶ · r²)',
    options: [
      'k³ · n · r¹¹',
      'k^(-12) · n¹⁵ · r²',
      'k · n⁷ · r⁷',
      'k⁶ · n⁶ · r¹⁰'
    ],
    correctIndex: 2,
    correctAnswerText: 'k · n⁷ · r⁷',
    explanation: `Step-by-Step Breakdown:
1. Group corresponding variables together using the associative and commutative properties:
   (k^(-2) · k³) · (n¹ · n⁶) · (r⁵ · r²)
2. Apply the Product Rule (aᵐ · aⁿ = a^(m+n)) to each variable:
   • For k: k^(-2 + 3) = k¹ = k
   • For n: n^(1 + 6) = n⁷
   • For r: r^(5 + 2) = r⁷
3. Combine all simplified factors:
   k · n⁷ · r⁷.

Desmos Shortcut:
Set k = 2, n = 2, r = 2.
• Original expression: (2^(-2) · 2 · 2⁵)(2³ · 2⁶ · 2²) = (16)(4096) = 65,536.
• Option C: 2 · 2⁷ · 2⁷ = 2¹⁵ = 32,768 · 2 = 65,536 (Exact Match).`,
    distractorExplanations: {
      0: 'Failed to add the powers of n and miscalculated r.',
      1: 'Multiplied exponents instead of adding them.',
      3: 'Multiplied base coefficients and powers incorrectly.'
    }
  },
  {
    id: 'ch1-q13',
    number: 13,
    exerciseNumber: 1,
    exerciseTitle: 'Evaluating Fractional Exponents in Functions',
    question: 'The function g(x) = 16ˣ is defined for all real values of x. What is g(1/2) + g(1/4)?',
    options: [
      '16',
      '6',
      '2',
      '8'
    ],
    correctIndex: 1,
    correctAnswerText: '6',
    explanation: `Step-by-Step Breakdown:
1. Calculate g(1/2):
   g(1/2) = 16^(1/2) = √16 = 4.
2. Calculate g(1/4):
   g(1/4) = 16^(1/4) = ⁴√16 = 2 (since 2⁴ = 16).
3. Add the two values:
   g(1/2) + g(1/4) = 4 + 2 = 6.

Desmos Shortcut:
In Desmos, define g(x) = 16^x.
Then simply type g(1/2) + g(1/4) into the next line. Desmos immediately outputs 6.`,
    distractorExplanations: {
      0: 'Multiplied 16 by (1/2 + 1/4) or confused function notation with multiplication.',
      2: 'Only evaluated g(1/4) = 2 and forgot to add g(1/2).',
      3: 'Multiplied the outputs 4 × 2 = 8 instead of adding them.'
    }
  },
  {
    id: 'ch1-q14',
    number: 14,
    exerciseNumber: 1,
    exerciseTitle: 'Multi-Variable Product Rule with Negative Exponents',
    question: 'If a, g, and n are positive numbers, which of the following expressions is equivalent to (a² · g^(-4) · n)(a³ · g^(-2) · n)?',
    options: [
      'a^(-1) · g^(-2) · n²',
      'a⁵ · g^(-12) · n',
      'a⁶ · g⁸ · n',
      'a⁵ · g^(-6) · n²'
    ],
    correctIndex: 3,
    correctAnswerText: 'a⁵ · g^(-6) · n²',
    explanation: `Step-by-Step Breakdown:
1. Rearrange by grouping identical base variables:
   (a² · a³) · (g^(-4) · g^(-2)) · (n¹ · n¹)
2. Add exponents for each base:
   • Base a: a^(2 + 3) = a⁵
   • Base g: g^(-4 + (-2)) = g^(-6)
   • Base n: n^(1 + 1) = n²
3. Multiply the results together:
   a⁵ · g^(-6) · n².

Desmos Shortcut:
Set a = 2, g = 3, n = 4.
• Original expression: (4 · 3^(-4) · 4)(8 · 3^(-2) · 4) = (16 / 81) · (32 / 9) = 512 / 729 ≈ 0.70233.
• Option D: 2⁵ · 3^(-6) · 4² = 32 · (1/729) · 16 = 512 / 729 ≈ 0.70233.`,
    distractorExplanations: {
      0: 'Subtracted exponents of a instead of adding them.',
      1: 'Multiplied the exponents of g (-4 × -2 = 8 or -12) and omitted the second power on n.',
      2: 'Multiplied exponents (2×3=6, -4×-2=8) instead of applying the product rule.'
    }
  },
  {
    id: 'ch1-q15',
    number: 15,
    exerciseNumber: 1,
    exerciseTitle: 'Difference of Squares in Exponential Quotient',
    question: 'If (y^(m²)) / (y^(n²)) = y²⁷, y > 1, and m - n = 3, what is the value of m + n?',
    options: [
      '27',
      '9',
      '30',
      '6'
    ],
    correctIndex: 1,
    correctAnswerText: '9',
    explanation: `Step-by-Step Breakdown:
1. Apply the Quotient Rule of Exponents on the LHS:
   y^(m²) / y^(n²) = y^(m² - n²).
2. Equate exponents since the bases are identical and y > 1:
   m² - n² = 27.
3. Factor the difference of two squares:
   m² - n² = (m - n)(m + n) = 27.
4. Substitute the given value m - n = 3:
   3 · (m + n) = 27.
5. Solve for (m + n):
   m + n = 27 / 3 = 9.

Desmos Shortcut:
Solve the system algebraically or graphically:
Let m - n = 3 → m = n + 3.
(n + 3)² - n² = 27 → n² + 6n + 9 - n² = 27 → 6n = 18 → n = 3.
Then m = 3 + 3 = 6.
Thus m + n = 6 + 3 = 9.`,
    distractorExplanations: {
      0: 'Directly stated 27 without dividing by (m - n) = 3.',
      2: 'Added 27 + 3 = 30.',
      3: 'Only solved for m = 6 and forgot to add n = 3.'
    }
  },
  {
    id: 'ch1-q16',
    number: 16,
    exerciseNumber: 1,
    exerciseTitle: 'Isolating Parameters in Exponential Equations',
    question: 'A bacteria population, P, can be modeled by the equation P = P₀(10k)ᵗ, where P₀ is the bacteria population at the beginning of the experiment, t > 0 is the time in hours, and k is a positive constant. Which of the following gives the constant k in terms of t, P, and P₀?',
    options: [
      'k = (ᵗ√(P₀ / P)) / 10',
      'k = (ᵗ√P) / (10P₀)',
      'k = 10 · ᵗ√(P / P₀)',
      'k = (ᵗ√(P / P₀)) / 10'
    ],
    correctIndex: 3,
    correctAnswerText: 'k = (ᵗ√(P / P₀)) / 10',
    explanation: `Step-by-Step Breakdown:
1. Isolate the exponential base (10k)ᵗ by dividing both sides by P₀:
   P / P₀ = (10k)ᵗ.
2. Eliminate the exponent t by taking the t-th root (or raising both sides to the power 1/t):
   (P / P₀)^(1/t) = 10k
   ᵗ√(P / P₀) = 10k.
3. Divide both sides by 10 to isolate k:
   k = (ᵗ√(P / P₀)) / 10.

Desmos Shortcut:
Assign test values: P₀ = 100, k = 2, t = 3.
• P = 100 · (10 · 2)³ = 100 · 8000 = 800,000.
• Test Option D: (³√(800,000 / 100)) / 10 = (³√8000) / 10 = 20 / 10 = 2 (Matches k = 2).`,
    distractorExplanations: {
      0: 'Inverted the ratio inside the radical to P₀ / P.',
      1: 'Failed to include P₀ inside the radical root.',
      2: 'Multiplied by 10 instead of dividing by 10.'
    }
  },
  {
    id: 'ch1-q17',
    number: 17,
    exerciseNumber: 1,
    exerciseTitle: 'Radioactive Half-Life Model Interpretation',
    question: 'The amount of a radioactive substance remaining after y years is given by h(y) = 300(1/2)^(y/4). How many years will it take for half of the atomic nuclei to decay?',
    options: [
      '300',
      '4',
      '1/2',
      '75'
    ],
    correctIndex: 1,
    correctAnswerText: '4',
    explanation: `Step-by-Step Breakdown:
1. Understand the standard half-life formulation: N(t) = N₀ · (1/2)^(t / t_half), where N₀ is the initial quantity and t_half is the half-life period.
2. In the given function h(y) = 300(1/2)^(y/4):
   • Initial amount N₀ = 300 (at y = 0, h(0) = 300).
   • For half of the nuclei to decay, the remaining amount is 150.
3. Set up the equation:
   150 = 300(1/2)^(y/4) → 1/2 = (1/2)^(y/4).
4. Equating exponents:
   1 = y / 4 → y = 4 years.

Desmos Shortcut:
Graph y₁ = 300(0.5)^(x/4) and y₂ = 150.
Click the intersection point: (4, 150). The x-value is 4.`,
    distractorExplanations: {
      0: '300 is the initial mass of the substance in grams, not the time period.',
      2: '1/2 is the decay factor per half-life interval.',
      3: 'Divided 300 by 4, which has no mathematical basis in exponential decay.'
    }
  },
  {
    id: 'ch1-q18',
    number: 18,
    exerciseNumber: 1,
    exerciseTitle: 'Solving for Decay Constant Exponents',
    question: 'A sample of a certain radioactive element is tested and found to have 16,000 radioactive units. Two hours later, it is tested again and found to have 4,000 radioactive units. The formula R = S(0.25)^(pt), where R is the number of units remaining t hours after the first test, and p and S are constants, models this situation. What is the value of p?',
    options: [
      '1/4000',
      '1/120',
      '1/2',
      '2'
    ],
    correctIndex: 2,
    correctAnswerText: '1/2',
    explanation: `Step-by-Step Breakdown:
1. Identify the initial condition: At t = 0, R = 16,000.
   16,000 = S(0.25)⁰ = S · 1 → S = 16,000.
2. Substitute the second data point: At t = 2 hours, R = 4,000.
   4,000 = 16,000 · (0.25)^(p · 2).
3. Divide both sides by 16,000:
   4,000 / 16,000 = (0.25)^(2p)
   0.25 = (0.25)^(2p).
4. Since the bases are identical (0.25¹ = (0.25)^(2p)), equate exponents:
   1 = 2p → p = 1/2.

Desmos Shortcut:
Type 4000 = 16000(0.25)^(2p) in Desmos or graph y = 16000(0.25)^(2x) and find x where y = 4000 → x = 0.5 = 1/2.`,
    distractorExplanations: {
      0: 'Divided 1 by the remaining units 4000.',
      1: 'Converted 2 hours into 120 minutes incorrectly.',
      3: 'Inverted the fraction (found 2 instead of 1/2).'
    }
  },
  {
    id: 'ch1-q19',
    number: 19,
    exerciseNumber: 1,
    exerciseTitle: 'Radical Isolation & Target Value Calculation',
    question: 'What is the value of 9x if 6√(3x) = 36?',
    options: [
      '108',
      '324',
      '216',
      '360'
    ],
    correctIndex: 0,
    correctAnswerText: '108',
    explanation: `Step-by-Step Breakdown:
1. Isolate the radical term by dividing both sides by 6:
   √(3x) = 36 / 6 = 6.
2. Square both sides to eliminate the radical:
   (√(3x))² = 6² → 3x = 36.
3. Solve for x:
   x = 36 / 3 = 12.
4. Answer the specific question asked (the value of 9x):
   9x = 9 · 12 = 108.
   (Alternatively, notice 9x = 3 · (3x) = 3 · 36 = 108).

Desmos Shortcut:
Type 6√(3x) = 36 in Desmos. A vertical line appears at x = 12.
Then on the next line, type 9(12) → Desmos evaluates to 108.`,
    distractorExplanations: {
      1: 'Squared 3x = 36 to get 9x² or computed (36)² = 1296.',
      2: 'Multiplied 36 by 6 instead of 3.',
      3: 'Computed 10 · 36 instead of 3 · 36.'
    }
  },
  {
    id: 'ch1-q20',
    number: 10,
    exerciseNumber: 1,
    exerciseTitle: 'Quotient Rule with Multi-Variable Powers',
    question: 'If g and z are both positive, which of the following equations is equivalent to (g¹⁰ · z¹²) / (g²⁰ · z³)?',
    options: [
      'z⁴ / g²',
      'z⁹ / g¹⁰',
      'g¹⁰ · z⁹',
      'g² · z⁴'
    ],
    correctIndex: 1,
    correctAnswerText: 'z⁹ / g¹⁰',
    explanation: `Step-by-Step Breakdown:
1. Group variables with common bases:
   (g¹⁰ / g²⁰) · (z¹² / z³)
2. Apply the Quotient Rule (aᵐ / aⁿ = a^(m-n)):
   • For g: g^(10 - 20) = g^(-10) = 1 / g¹⁰
   • For z: z^(12 - 3) = z⁹
3. Combine the terms into a single fraction:
   z⁹ / g¹⁰.

Desmos Shortcut:
Set g = 2 and z = 3 in Desmos.
• Original expression: (2¹⁰ · 3¹²) / (2²⁰ · 3³) = 3⁹ / 2¹⁰ = 19,683 / 1024 ≈ 19.2217.
• Option B: 3⁹ / 2¹⁰ = 19,683 / 1024 ≈ 19.2217 (Exact Match).`,
    distractorExplanations: {
      0: 'Divided the exponents instead of subtracting them (12/3 = 4, 20/10 = 2).',
      2: 'Placed g in the numerator with a positive exponent.',
      3: 'Divided exponents and inverted placement of variables.'
    }
  },
  {
    id: 'ch1-q21',
    number: 21,
    exerciseNumber: 1,
    exerciseTitle: 'Radical Equivalence with Algebraic Terms',
    question: 'Of the following expressions, which is equivalent to 4z for any positive value of z?',
    options: [
      '2√z',
      '√(16z²)',
      '√(2z²)',
      '√(16z)'
    ],
    correctIndex: 1,
    correctAnswerText: '√(16z²)',
    explanation: `Step-by-Step Breakdown:
1. To express 4z inside a square root:
   4z = √((4z)²) for z > 0.
2. Apply the Power of a Product Rule:
   (4z)² = 4² · z² = 16z².
3. Therefore:
   4z = √(16z²).

Desmos Shortcut:
Graph y = 4x and y = √(16x²). The two lines overlap perfectly for all x > 0.`,
    distractorExplanations: {
      0: 'Only took the square root of 4 and z without squaring.',
      2: 'Square root of 2 is irrational (√2 · z ≈ 1.414z ≠ 4z).',
      3: 'Forgot to square the variable z inside the radical (√(16z) = 4√z ≠ 4z).'
    }
  },
  {
    id: 'ch1-q22',
    number: 22,
    exerciseNumber: 1,
    exerciseTitle: 'Radical Decomposition & Constant Matching',
    question: 'If the expression (x - 12) / √8 is rewritten in the form (x√2) / 4 - C, what is the value of C?',
    options: [
      '-3',
      '-√3',
      '3√2',
      '2'
    ],
    correctIndex: 2,
    correctAnswerText: '3√2',
    explanation: `Step-by-Step Breakdown:
1. Simplify the denominator radical √8:
   √8 = √(4 · 2) = 2√2.
2. Split the fraction into two terms:
   (x - 12) / (2√2) = x / (2√2) - 12 / (2√2).
3. Rationalize both terms by multiplying numerator and denominator by √2:
   • First term: (x · √2) / (2√2 · √2) = (x√2) / (2 · 2) = (x√2) / 4
   • Second term: (12 · √2) / (2√2 · √2) = (12√2) / 4 = 3√2
4. Compare with the target format (x√2)/4 - C:
   (x√2) / 4 - 3√2 = (x√2) / 4 - C
5. Thus, C = 3√2.

Desmos Shortcut:
Graph y₁ = (x - 12)/√8 - (x√2)/4.
Desmos shows a horizontal line at y = -4.24264...
Calculate -3√2 in Desmos → -4.24264... Since the expression is - C, C = +3√2.`,
    distractorExplanations: {
      0: 'Divided 12 by 4 and forgot the radical factor √2.',
      1: 'Confused √2 with √3.',
      3: 'Arithmetic error in reducing the radical fraction.'
    }
  },
  {
    id: 'ch1-q23',
    number: 23,
    exerciseNumber: 1,
    exerciseTitle: 'Polynomial Factoring & Negative Exponent Form',
    question: 'Which of the following is equivalent to the expression (x³ + x²) / (x⁴ + x³)?',
    options: [
      '2 / x',
      'x⁵ / x⁷',
      'x^(-1)',
      '5x / 7x'
    ],
    correctIndex: 2,
    correctAnswerText: 'x^(-1)',
    explanation: `Step-by-Step Breakdown:
1. Factor out the greatest common exponential factor from the numerator:
   x³ + x² = x²(x + 1).
2. Factor out the greatest common exponential factor from the denominator:
   x⁴ + x³ = x³(x + 1).
3. Cancel the common binomial factor (x + 1) for x ≠ -1:
   (x²(x + 1)) / (x³(x + 1)) = x² / x³.
4. Apply the Quotient Rule of Exponents:
   x² / x³ = x^(2 - 3) = x^(-1) = 1/x.

Desmos Shortcut:
Graph y₁ = (x³ + x²)/(x⁴ + x³) and y₂ = x^(-1).
The two curves completely coincide for all values in their domain.`,
    distractorExplanations: {
      0: 'Incorrectly added coefficients in numerator.',
      1: 'Multiplied powers instead of factoring out common terms.',
      3: 'Added the exponents together in an invalid linear ratio.'
    }
  },
  {
    id: 'ch1-q24',
    number: 24,
    exerciseNumber: 1,
    exerciseTitle: 'Algebraic Radical Substitution & Constant Isolation',
    question: 'Which expression represents one possible solution to the equation (9k²) / √(9k² + x²) - 83 = - x² / √(9k² + x²), where k is a positive constant?',
    options: [
      '√(83² - 9k²)',
      '83² + 9k²',
      '3k',
      '√(83² + 9k²)'
    ],
    correctIndex: 0,
    correctAnswerText: '√(83² - 9k²)',
    explanation: `Step-by-Step Breakdown:
1. Move the fraction on the RHS to the LHS by adding x² / √(9k² + x²) to both sides:
   (9k²) / √(9k² + x²) + x² / √(9k² + x²) - 83 = 0.
2. Combine the fractions over their common denominator:
   (9k² + x²) / √(9k² + x²) = 83.
3. Simplify using the identity A / √A = √A:
   √(9k² + x²) = 83.
4. Square both sides to eliminate the radical:
   9k² + x² = 83².
5. Isolate x² and solve for x:
   x² = 83² - 9k²
   x = ±√(83² - 9k²).
6. Thus, a valid solution is √(83² - 9k²).

Desmos Shortcut:
Set k = 2. Then 9k² = 36.
Equation becomes: 36/√(36+x²) - 83 = -x²/√(36+x²) → √(36+x²) = 83 → x = √(83² - 36) = √(6889 - 36) = √6853 ≈ 82.7828.
Option A with k = 2 gives √(83² - 36) = √6853 ≈ 82.7828 (Exact Match).`,
    distractorExplanations: {
      1: 'Forgot to take the square root when solving for x.',
      2: 'Substituted x = 3k without satisfying the equation.',
      3: 'Added 9k² instead of subtracting it when isolating x².'
    }
  },
  {
    id: 'ch1-q25',
    number: 25,
    exerciseNumber: 1,
    exerciseTitle: 'Rationalizing Radical Expressions in Rates',
    question: 'The mean distance, d, in micrometers, glucose travels in free solution in t seconds can be determined using the formula d = 10√(5t). Which of the following gives the average speed of the glucose, in micrometers per second, over the first t seconds after it begins to move?',
    options: [
      '10 / √(5t)',
      '(100√(5t)) / t',
      '(10√(5t)) / t',
      '50 / √(5t)'
    ],
    correctIndex: 2,
    correctAnswerText: '(10√(5t)) / t',
    explanation: `Step-by-Step Breakdown:
1. By definition, average speed = (Total Distance) / (Total Time) = d / t.
2. Substitute the given formula for d:
   Average Speed = (10√(5t)) / t.
3. (Note: If rationalized by multiplying numerator and denominator by √(5t), this equals (10 · 5t) / (t√(5t)) = 50 / √(5t), but the direct standard form represented in the SAT exam is (10√(5t)) / t).

Desmos Shortcut:
Let t = 5.
• d = 10√(25) = 50 micrometers.
• Average speed = 50 / 5 = 10 micrometers/second.
• Option C: (10√(25)) / 5 = 50 / 5 = 10 (Exact Match).`,
    distractorExplanations: {
      0: 'Dropped the factor of 5 in the numerator.',
      1: 'Squared 10 to get 100 in the numerator unnecessarily.',
      3: 'Represents the alternative rationalized form with inverted radicals.'
    }
  }
];
