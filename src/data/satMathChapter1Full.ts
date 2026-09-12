import { FullSatMathChapter } from './satMathConcepts';
import { CHAPTER_1_QUESTIONS_PART_1 } from './satMathChapter1QuestionsPart1';
import { CHAPTER_1_QUESTIONS_PART_2 } from './satMathChapter1QuestionsPart2';

export const FULL_CHAPTER_1_EXPONENTS_AND_RADICALS: FullSatMathChapter = {
  id: 'exponents-and-radicals',
  chapterNumber: 1,
  chapterTitle: 'Exponents & Radicals',
  pageNumber: 11,
  quote: 'Mastering exponents and radicals is the cornerstone of algebraic speed and precision on the Digital SAT.',
  introduction: 'Welcome to Chapter 1: Exponents & Radicals. This master-level reference chapter contains complete theoretical foundations, algebraic tables, high-yield shortcut frameworks, high-frequency test trap analyses, worked-out exam examples, and 50 authentic SAT questions with step-by-step mathematical proofs and Desmos calculator techniques.',
  sections: [
    {
      sectionTitle: 'Core Laws of Exponents & Radicals',
      fullText: 'The Digital SAT rigorously tests fundamental exponent and radical rules across both Module 1 and Module 2. Mastery begins with fluent bi-directional transformation between exponential and radical notations.',
      bulletPoints: [
        'Rational Exponents: a^(m/n) = ⁿ√(aᵐ) = (ⁿ√a)ᵐ. The denominator is ALWAYS the root index, and the numerator is the power.',
        'Negative Exponents: a^(-n) = 1 / (aⁿ). A negative exponent toggles the position of the base across the fraction bar.',
        'Zero Exponent: Any non-zero base raised to the power of zero equals 1 (a⁰ = 1 for a ≠ 0).',
        'Power of a Power vs. Product: Multiply exponents when raising a power to a power ((aᵐ)ⁿ = a^(m·n)); add exponents when multiplying common bases (aᵐ · aⁿ = a^(m+n)).'
      ],
      tables: [
        {
          title: 'Core Laws of Exponents & Radicals Reference Table',
          headers: ['Law / Rule', 'Algebraic Formula', 'Functional Application & Notes'],
          rows: [
            ['Product Rule', 'aᵐ · aⁿ = a^(m+n)', 'Add exponents when multiplying identical bases.'],
            ['Quotient Rule', 'aᵐ / aⁿ = a^(m-n)', 'Subtract denominator exponent from numerator exponent.'],
            ['Power of a Power', '(aᵐ)ⁿ = a^(m·n)', 'Multiply inner and outer exponents together.'],
            ['Power of a Product', '(ab)ⁿ = aⁿ · bⁿ', 'Distribute the exponent to all multiplicative factors inside.'],
            ['Power of a Quotient', '(a / b)ⁿ = aⁿ / bⁿ', 'Distribute exponent to both numerator and denominator.'],
            ['Rational Exponents', 'a^(m/n) = ⁿ√(aᵐ) = (ⁿ√a)ᵐ', 'Numerator is the power; denominator is the radical root index.'],
            ['Negative Exponents', 'a^(-n) = 1 / aⁿ', 'Flip term across the fraction bar to toggle the sign of the exponent.'],
            ['Zero Exponent', 'a⁰ = 1  (a ≠ 0)', 'Any non-zero quantity raised to power 0 strictly equals 1.']
          ]
        }
      ],
      examples: [
        {
          title: 'Worked Example 1: Rational Exponent Conversion',
          question: 'Which of the following is equivalent to ⁴√(x³ · y⁹) for positive x and y?',
          options: ['x^(3/4) · y² · ⁴√y', 'x^(4/3) · y^(9/4)', 'x³ · y⁹', 'x^(3/4) · y^(4/9)'],
          correctAnswer: 'x^(3/4) · y² · ⁴√y',
          correctIndex: 0,
          explanation: `Step-by-Step Solution:
1. Convert to rational exponents: ⁴√(x³ · y⁹) = (x³ · y⁹)^(1/4) = x^(3/4) · y^(9/4).
2. Decompose y^(9/4): 9/4 = 2 + 1/4 → y^(2 + 1/4) = y² · y^(1/4) = y² · ⁴√y.
3. Combine terms: x^(3/4) · y² · ⁴√y.

Desmos Shortcut:
Set x = 16, y = 16 in Desmos.
Original expression = (16³ · 16⁹)^(0.25) = (16¹²)^(0.25) = 16³ = 4096.
Option A = 16^(0.75) · 16² · ⁴√16 = 8 · 256 · 2 = 4096 (Exact Match).`
        }
      ]
    },
    {
      sectionTitle: 'High-Yield SAT Shortcuts & Solution Patterns',
      fullText: 'Top SAT scorers do not solve exponent questions by brute force. Instead, they recognize specific algebraic patterns and execute targeted shortcuts.',
      bulletPoints: [
        '1. Prime Base Reduction Framework: When expressions contain mismatched composite bases with variables in exponents (such as 4, 8, 9, 16, 27, 32), convert all bases into prime factors (2, 3, 5, 7).',
        '2. Factoring Repeated Exponential Addition: SAT questions frequently test addition of exponential terms to trap students into adding bases. Always factor out the common exponential term instead: aˣ + aˣ + ... + aˣ = n · aˣ.',
        '3. Exponential Deconstruction: When given aˣ = k and asked to evaluate a^(x+c) or a^(cx), expand the expression using exponent rules: a^(x+c) = aˣ · aᶜ and a^(cx) = (aˣ)ᶜ.',
        '4. Conjugate Rationalization for Radical Denominators: To clear radical expressions from denominators of fractions with two terms, multiply numerator and denominator by the conjugate (√a - √b).'
      ],
      tables: [
        {
          title: 'Prime Base Conversion Matrix for the SAT',
          headers: ['Composite Base', 'Prime Base Form', 'Example SAT Conversion', 'Simplified Result'],
          rows: [
            ['4', '2²', '4^(3x)', '2^(6x)'],
            ['8', '2³', '8^(2x) · 4^(-x)', '2^(6x) · 2^(-2x) = 2^(4x)'],
            ['9', '3²', '9ᵃ · 3ᵇ', '3^(2a + b)'],
            ['16', '2⁴ or 4²', '16^(x/4)', '2ˣ'],
            ['27', '3³', '27^(x/3)', '3ˣ'],
            ['32', '2⁵', '32^(2x) / 8ˣ', '2^(10x) / 2^(3x) = 2^(7x)']
          ]
        },
        {
          title: 'Conjugate Rationalization Formulas',
          headers: ['Denominator Form', 'Conjugate Multiplier', 'Algebraic Rationalization Formula', 'Final Result'],
          rows: [
            ['√a + √b', '√a - √b', '[k / (√a + √b)] · [(√a - √b) / (√a - √b)]', 'k(√a - √b) / (a - b)'],
            ['√a - √b', '√a + √b', '[k / (√a - √b)] · [(√a + √b) / (√a + √b)]', 'k(√a + √b) / (a - b)'],
            ['a + √b', 'a - √b', '[k / (a + √b)] · [(a - √b) / (a - √b)]', 'k(a - √b) / (a² - b)'],
            ['a - √b', 'a + √b', '[k / (a - √b)] · [(a + √b) / (a + √b)]', 'k(a + √b) / (a² - b)']
          ]
        }
      ],
      examples: [
        {
          title: 'Worked Example 2: Prime Base Reduction',
          question: 'Simplify the expression 8^(2x) · 4^(-x).',
          options: ['2^(4x)', '2^(8x)', '32ˣ', '2^(3x)'],
          correctAnswer: '2^(4x)',
          correctIndex: 0,
          explanation: `Step-by-Step Solution:
1. Convert composite bases 8 and 4 into prime base 2:
   • 8 = 2³ → 8^(2x) = (2³)^(2x) = 2^(6x)
   • 4 = 2² → 4^(-x) = (2²)^(-x) = 2^(-2x)
2. Multiply using the Product Rule (add exponents):
   2^(6x) · 2^(-2x) = 2^(6x - 2x) = 2^(4x).

Desmos Shortcut:
Graph y₁ = 8^(2x) · 4^(-x) and y₂ = 2^(4x). Both lines overlap identically.`
        },
        {
          title: 'Worked Example 3: Factoring Repeated Exponential Addition',
          question: 'Simplify the sum 3ʸ + 3ʸ + 3ʸ.',
          options: ['3^(y+1)', '9ʸ', '3^(3y)', '9^(3y)'],
          correctAnswer: '3^(y+1)',
          correctIndex: 0,
          explanation: `Step-by-Step Solution:
1. Recognize that three identical terms are being added:
   3ʸ + 3ʸ + 3ʸ = 3ʸ · (1 + 1 + 1).
2. Simplify the parenthesis:
   3ʸ · (3) = 3ʸ · 3¹.
3. Apply the Product Rule of Exponents (add exponents):
   3ʸ · 3¹ = 3^(y + 1).

Common SAT Trap:
Do NOT add bases to get 9ʸ or multiply exponents to get 3^(3y). Base addition is undefined.`
        },
        {
          title: 'Worked Example 4: Exponential Deconstruction',
          question: 'If 2ˣ = 5, what is the value of 2^(x + 3)?',
          options: ['40', '15', '125', '8'],
          correctAnswer: '40',
          correctIndex: 0,
          explanation: `Step-by-Step Solution:
1. Deconstruct the target expression using the Product Rule in reverse:
   2^(x + 3) = 2ˣ · 2³.
2. Substitute the given known value 2ˣ = 5:
   2^(x + 3) = 5 · 2³.
3. Compute the arithmetic:
   5 · 8 = 40.`
        }
      ]
    },
    {
      sectionTitle: 'High-Frequency Test Traps & Pitfalls',
      fullText: 'The College Board intentionally constructs distractor answer choices around three major misconceptions. Knowing these in advance protects your score.',
      bulletPoints: [
        '1. The Principal Root Rule: On the SAT, the radical symbol √x defined as a function denotes ONLY the principal (non-negative) root. For instance, √16 = +4, NOT ±4. However, if solving an algebraic equation x² = 16, then x = ±4.',
        '2. Non-Distributivity Over Addition: Exponents and radicals NEVER distribute across addition or subtraction: (a + b)ⁿ ≠ aⁿ + bⁿ and √(a + b) ≠ √a + √b. (For example, √(9 + 16) = √25 = 5, whereas √9 + √16 = 3 + 4 = 7).',
        '3. Extraneous Solutions in Radical Equations: Whenever you square both sides of an equation to eliminate a radical (e.g. √(x + 5) = x - 1), you MUST test all resultant solutions in the original un-squared equation. Any candidate value that produces a negative output for a radical is invalid.'
      ],
      tables: [
        {
          title: 'High-Frequency SAT Trap Comparison Table',
          headers: ['Concept / Operation', 'Common Student Error (TRAP)', 'Mathematically Correct Execution', 'Why the Error Fails'],
          rows: [
            ['Evaluating √25', 'Writing ±5', '√25 = +5 (Principal root only)', 'Radical symbol √ is a function defined to return non-negative output.'],
            ['Solving x² = 25', 'Writing only 5', 'x = +5 or x = -5', 'Quadratic equation has two roots whose square is 25.'],
            ['Simplifying √(x² + 36)', 'Writing x + 6', 'Cannot be distributed; remains √(x² + 36)', 'Radicals do not distribute over addition (√(3² + 4²) = 5 ≠ 7).'],
            ['Solving √(x + 5) = x - 1', 'Accepting all quadratic roots', 'Test roots in original; discard extraneous roots', 'Squaring introduces extraneous roots from negative counterparts.']
          ]
        }
      ],
      examples: [
        {
          title: 'Worked Example 5: Extraneous Root Detection',
          question: 'What is the solution set of the equation √(2x + 6) = x - 1?',
          options: ['{5}', '{-1, 5}', '{-1}', 'No solution'],
          correctAnswer: '{5}',
          correctIndex: 0,
          explanation: `Step-by-Step Solution:
1. Square both sides:
   2x + 6 = (x - 1)²
   2x + 6 = x² - 2x + 1.
2. Rearrange to standard quadratic form:
   x² - 4x - 5 = 0.
3. Factor:
   (x - 5)(x + 1) = 0 → Candidate roots: x = 5, x = -1.
4. MANDATORY Extraneous Check:
   • Test x = 5: √(2(5) + 6) = √16 = 4. Right side: 5 - 1 = 4. (Valid!)
   • Test x = -1: √(2(-1) + 6) = √4 = 2. Right side: -1 - 1 = -2. (2 ≠ -2 → EXTRANEOUS ROOT!).
5. Therefore, the only valid solution is {5}.

Desmos Shortcut:
Graph y₁ = √(2x + 6) and y₂ = x - 1.
They intersect at exactly one point: (5, 4). The root x = 5 is immediately confirmed.`
        }
      ]
    },
    {
      sectionTitle: 'Desmos Power Tactics for the Digital SAT',
      fullText: 'The built-in Desmos graphing calculator is your ultimate speed weapon for exponents and radicals. Use these three core strategies to guarantee 100% accuracy.',
      bulletPoints: [
        'Method 1: Visual Intersection Testing: For any radical or exponential equation, enter LHS as y₁ and RHS as y₂. The x-coordinate of the intersection point is your exact solution. Desmos automatically filters out extraneous roots!',
        'Method 2: Variable Slider Equivalence: For abstract algebraic equivalencies (e.g. simplifying expressions with p, q, x, y), assign non-trivial decimal values via sliders (e.g. p = 2.3, q = 3.7) and match the exact numerical output of the question expression against the 4 answer choices.',
        'Method 3: Table Exponential Regression: When given a data table with exponential growth or decay, create a Desmos table (x₁, y₁) and type the regression formula y₁ ~ a · b^(x₁). Desmos will instantly solve for the base b and initial coefficient a.'
      ],
      tables: [
        {
          title: 'Desmos Syntax & Shortcut Reference',
          headers: ['Operation / Goal', 'Desmos Command / Syntax', 'Example', 'Expected Output'],
          rows: [
            ['n-th Root', 'nthroot(x, n)', 'nthroot(64, 3)', '4'],
            ['Equivalence Check', 'Original - (Option)', '((x^3+x^2)/(x^4+x^3)) - x^(-1)', 'Horizontal line y = 0'],
            ['Solve Equation', 'y = LHS, y = RHS', 'y = sqrt(x - 3), y = x - 9', 'Intersection at (12, 3)'],
            ['Exponential Regression', 'y1 ~ a · b^x1', 'Table with (0,5), (1,20)', 'a = 5, b = 4']
          ]
        }
      ]
    }
  ],
  exerciseGroups: [
    {
      exerciseNumber: 1,
      title: 'Exercise Set 1: Core Exponents & Radicals Mastery (Questions 1–25)',
      description: 'Foundational and intermediate practice questions covering rational exponents, radical reduction, prime base factoring, and function evaluation with full step-by-step proofs and Desmos shortcuts.',
      questions: CHAPTER_1_QUESTIONS_PART_1
    },
    {
      exerciseNumber: 2,
      title: 'Exercise Set 2: Advanced SAT Modeling & Radical Equations (Questions 26–50)',
      description: 'Advanced Module 2 questions covering real-world exponential growth/decay, scientific formula inversion, extraneous root traps, and multi-variable radical manipulation.',
      questions: CHAPTER_1_QUESTIONS_PART_2
    }
  ]
};
