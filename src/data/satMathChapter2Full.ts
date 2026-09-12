import { FullSatMathChapter } from './satMathConcepts';
import { CHAPTER_2_QUESTIONS_PART_1 } from './satMathChapter2QuestionsPart1';
import { CHAPTER_2_QUESTIONS_PART_2 } from './satMathChapter2QuestionsPart2';

export const FULL_CHAPTER_2_LINEAR_EXPRESSIONS: FullSatMathChapter = {
  id: 'linear-expressions',
  chapterNumber: 2,
  chapterTitle: 'Linear & Algebraic Expressions',
  pageNumber: 19,
  quote: 'An algebraic expression is a mathematical phrase combining constants, variables, and algebraic operations. Recognizing structure unlocks rapid factoring and flawless polynomial simplification.',
  introduction: 'Welcome to Chapter 2: Linear & Algebraic Expressions. This master-level reference chapter provides complete theoretical foundations, polynomial operations, structural factoring identities, rational expression mastery, contextual modeling, high-yield concept reference tables, 10 fully worked-out exam examples with 3 solution approaches (Traditional, Mental Shortcut, Desmos Technique), and 50 authentic Digital SAT practice questions with inline step-by-step mathematical explanations.',
  sections: [
    {
      sectionTitle: '1.1 Polynomial Operations & Equivalent Expressions',
      fullText: 'An algebraic expression is a mathematical phrase combining constants, variables, and algebraic operations. Unlike equations, expressions do not contain equal signs (=). On the Digital SAT, polynomial manipulation and equivalence testing form the foundation of algebraic speed.',
      bulletPoints: [
        'Like Terms: Terms with identical variable factors raised to identical exponents. Only like terms can be added or subtracted.',
        'Polynomial Addition & Subtraction: Combine coefficients of like terms. Always distribute negative signs across parentheses during subtraction: -(a - b + c) = -a + b - c.',
        'Polynomial Multiplication: Apply the distributive property. For binomials, expand using (a + b)(c + d) = ac + ad + bc + bd.',
        'Tactical Shortcut (Value Substitution): To test equivalence between a complex expression and multiple choices, pick a small prime number for the variable (e.g., x = 2 or x = 3; avoid 0 and 1 as they can yield false positives) and evaluate both the original expression and the choices. The correct choice will yield the exact same numerical result.'
      ],
      tables: [
        {
          title: 'Polynomial Operations & Equivalence Strategy Guide',
          headers: ['Operation / Technique', 'Mathematical Rule / Formulation', 'Tactical Exam Advice'],
          rows: [
            ['Combining Like Terms', 'c₁xⁿ ± c₂xⁿ = (c₁ ± c₂)xⁿ', 'Only terms with matching variable bases and powers combine.'],
            ['Negative Sign Distribution', '-(a - b + c) = -a + b - c', 'Flip every sign inside parentheses before combining.'],
            ['Binomial Expansion (FOIL)', '(a + b)(c + d) = ac + ad + bc + bd', 'Multiply First, Outer, Inner, Last; combine linear terms.'],
            ['Value Substitution Strategy', 'Substitute x = 2 or x = 3', 'Bypasses lengthy algebra; avoids 0 and 1 false positives.'],
            ['Desmos Graph Equivalence', 'Graph y₁ = original, y₂ = option', 'Curves must overlap perfectly across the entire domain.']
          ]
        }
      ],
      examples: [
        {
          title: 'Example 1: Polynomial Subtraction & Linear Equivalence',
          question: 'Which of the following expressions is equivalent to (3x² - 5x + 7) - (2x² - 8x - 4)?',
          options: [
            'x² - 13x + 3',
            'x² + 3x + 11',
            '5x² - 13x + 11',
            'x² + 3x + 3'
          ],
          correctAnswer: 'x² + 3x + 11',
          correctIndex: 1,
          explanation: `Method 1: Traditional Algebraic Solution
1. Distribute the negative sign across the second polynomial:
   (3x² - 5x + 7) - 2x² + 8x + 4
2. Group and combine like terms:
   (3x² - 2x²) + (-5x + 8x) + (7 + 4)
   = x² + 3x + 11

Method 2: Mental Shortcut
Look at the constant term first: 7 - (-4) = 11. Options A and D are instantly eliminated. Next, check the linear coefficient: -5 - (-8) = +3. This isolates Option B immediately without calculating x².

Method 3: Desmos Calculator Technique
1. On Line 1, enter y₁ = (3x² - 5x + 7) - (2x² - 8x - 4).
2. On Line 2, enter y₂ = x² + 3x + 11 (Option B).
3. Observe that the two graphs overlap completely across all values of x. Alternatively, open the table feature for both lines; for x = 2, both evaluate to 21.

Correct Answer: B`
        },
        {
          title: 'Example 2: Matching Coefficients in Equivalent Polynomials',
          question: 'If (2x + a)(3x - 4) = 6x² + bx - 20 for all values of x, where a and b are constants, what is the value of b?',
          options: ['7', '11', '15', '23'],
          correctAnswer: '7',
          correctIndex: 0,
          explanation: `Method 1: Traditional Algebraic Solution
1. Expand the left-hand side using distribution:
   (2x + a)(3x - 4) = 6x² - 8x + 3ax - 4a
2. Match constant terms to find a:
   -4a = -20  ==>  a = 5
3. Match linear terms to solve for b:
   bx = -8x + 3ax  ==>  b = -8 + 3a
4. Substitute a = 5:
   b = -8 + 3(5) = -8 + 15 = 7

Method 2: Mental Shortcut
The constant term -20 must equal a · (-4), giving a = 5. The middle coefficient b comes from the sum of the inner and outer products: (2)(-4) + (a)(3) = -8 + 15 = 7.

Method 3: Desmos Calculator Technique
1. Type a = 5 on Line 1 using a slider.
2. On Line 2, type f(x) = (2x + a)(3x - 4).
3. On Line 3, test g(x) = 6x² + 7x - 20.
4. Both graphs coincide perfectly, confirming b = 7.

Correct Answer: A`
        }
      ]
    },
    {
      sectionTitle: '1.2 Factoring & Structural Recognition',
      fullText: 'Recognizing expression structures allows rapid expansion and factorization without tedious step-by-step multiplication. Spotting common binomial forms, grouping patterns, and nested variables cuts problem-solving time in half.',
      bulletPoints: [
        'Difference of Squares: a² - b² = (a - b)(a + b). Applies recursively to higher powers such as x⁴ - y⁴.',
        'Perfect Square Trinomials: a² + 2ab + b² = (a + b)² and a² - 2ab + b² = (a - b)²',
        'Factoring by Grouping: For four-term expressions ax + ay + bx + by = a(x + y) + b(x + y) = (a + b)(x + y).',
        'Tactical Shortcut (Structural Substitution): Treat complex sub-expressions as a single variable U. For example, to factor 9(x - 1)² - 16, let U = x - 1, yielding 9U² - 16 = (3U - 4)(3U + 4), then substitute (x - 1) back in.'
      ],
      tables: [
        {
          title: 'Factoring Archetypes & Structural Identities Table',
          headers: ['Identity Name', 'Algebraic Formula', 'Application Condition & Recognition'],
          rows: [
            ['Difference of Squares', 'a² - b² = (a - b)(a + b)', 'Two perfect square terms separated by a minus sign.'],
            ['Sum of Squares (Complex)', 'a² + b² = (a + bi)(a - bi)', 'Factors over complex numbers with imaginary unit i.'],
            ['Perfect Square Trinomial (+)', 'a² + 2ab + b² = (a + b)²', 'Middle term equals twice the product of square roots of ends.'],
            ['Perfect Square Trinomial (-)', 'a² - 2ab + b² = (a - b)²', 'Middle negative term with positive perfect square ends.'],
            ['Factoring by Grouping', 'ax + ay + bx + by = (a + b)(x + y)', 'Four-term polynomials with proportional coefficients.'],
            ['Difference of Cubes', 'a³ - b³ = (a - b)(a² + ab + b²)', 'Two cubed quantities subtracted (SOAP sign rule).'],
            ['Structural U-Substitution', 'f(g(x)) -> f(U) where U = g(x)', 'Replaces bulky nested polynomial chunks with single variable U.']
          ]
        }
      ],
      examples: [
        {
          title: 'Example 3: Repeated Difference of Squares',
          question: 'Which of the following is equivalent to 16x⁴ - 81?',
          options: [
            '(4x² - 9)²',
            '(4x² + 9)(2x + 3)(2x - 3)',
            '(2x + 3)²(2x - 3)²',
            '(4x² + 9)(4x² - 9)'
          ],
          correctAnswer: '(4x² + 9)(2x + 3)(2x - 3)',
          correctIndex: 1,
          explanation: `Method 1: Traditional Algebraic Solution
1. Recognize 16x⁴ - 81 as a difference of squares: (4x²)² - (9)².
2. Factor once:
   16x⁴ - 81 = (4x² + 9)(4x² - 9)
3. Notice that (4x² - 9) is itself a difference of squares: (2x)² - (3)² = (2x + 3)(2x - 3).
4. Substitute back to fully factor:
   (4x² + 9)(2x + 3)(2x - 3)

Method 2: Mental Shortcut
A quadratic/quartic difference of squares must fully break down until no terms can be factored further. While Option D is partially factored, Option B factors 4x² - 9 completely into linear components (2x + 3)(2x - 3), making B the complete equivalent expression.

Method 3: Desmos Calculator Technique
1. Plot y = 16x⁴ - 81.
2. Plot y = (4x² + 9)(2x + 3)(2x - 3).
3. Confirm that the x-intercepts (x = -1.5 and x = 1.5) and shape match identically.

Correct Answer: B`
        },
        {
          title: 'Example 4: Factoring by Grouping',
          question: 'Factor the polynomial expression completely: 2x³ - 6x² + 5x - 15.',
          options: [
            '(x - 3)(2x² + 5)',
            '(x + 3)(2x² - 5)',
            '(2x - 5)(x² + 3)',
            '(2x + 5)(x² - 3)'
          ],
          correctAnswer: '(x - 3)(2x² + 5)',
          correctIndex: 0,
          explanation: `Method 1: Traditional Algebraic Solution
1. Group the four terms into two pairs:
   (2x³ - 6x²) + (5x - 15)
2. Factor out the greatest common factor (GCF) from each pair:
   2x²(x - 3) + 5(x - 3)
3. Factor out the common binomial term (x - 3):
   (x - 3)(2x² + 5)

Method 2: Mental Shortcut
Notice that the ratio of coefficients of the first two terms (2 : -6 = 1 : -3) matches the ratio of the last two terms (5 : -15 = 1 : -3). This guarantees a common binomial factor of (x - 3). Option A is the only choice containing (x - 3).

Method 3: Desmos Calculator Technique
1. Graph y = 2x³ - 6x² + 5x - 15.
2. The graph crosses the x-axis at x = 3, meaning (x - 3) MUST be a factor.
3. Test Option A: y = (x - 3)(2x² + 5) to verify complete overlay.

Correct Answer: A`
        },
        {
          title: 'Example 5: Symmetric Algebraic Identities',
          question: 'If x > 0 and x² + y² = 29 and xy = 10, what is the value of (x + y)²?',
          options: ['39', '49', '69', '100'],
          correctAnswer: '49',
          correctIndex: 1,
          explanation: `Method 1: Traditional Algebraic Solution
1. Expand the target expression:
   (x + y)² = x² + 2xy + y²
2. Rearrange terms to group known components:
   (x + y)² = (x² + y²) + 2(xy)
3. Substitute x² + y² = 29 and xy = 10:
   (x + y)² = 29 + 2(10) = 29 + 20 = 49

Method 2: Mental Shortcut
Look for integer solutions that satisfy xy = 10 and x² + y² = 29. Testing x = 5, y = 2 gives 5 · 2 = 10 and 5² + 2² = 25 + 4 = 29. Thus, (5 + 2)² = 7² = 49.

Method 3: Desmos Calculator Technique
1. Type x² + y² = 29 on Line 1.
2. Type xy = 10 on Line 2.
3. Find the intersection in the first quadrant: (5, 2).
4. Evaluate (5 + 2)² = 49.

Correct Answer: B`
        }
      ]
    },
    {
      sectionTitle: '1.3 Rational Expressions & Exponents',
      fullText: 'Rational expressions combine fraction operations with polynomial factoring. When working with powers and roots, standard exponent laws provide direct pathways to simplification.',
      bulletPoints: [
        'Exponent Laws: xᵃ · xᵇ = x^(a+b), xᵃ / xᵇ = x^(a-b), (xᵃ)ᵇ = x^(a·b), x⁻ᵃ = 1 / xᵃ, x^(a/b) = ᵇ√(xᵃ).',
        'Rational Expression Operations: Factor numerators and denominators completely before simplifying: (A / B) ± (C / D) = (AD ± BC) / (BD).',
        'Polynomial Long Division / Remainder Form: p(x) / d(x) = q(x) + r / d(x).'
      ],
      tables: [
        {
          title: 'Rational Operations & Exponent Mastery Matrix',
          headers: ['Concept / Operation', 'Mathematical Formula / Form', 'Essential Execution Strategy'],
          rows: [
            ['Common Denominator Addition', 'A/B + C/D = (AD + BC) / (BD)', 'Cross-multiply numerators over shared product denominator.'],
            ['Rational Multiplication / Division', '(A/B) ÷ (C/D) = (A/B) · (D/C)', 'Multiply by reciprocal; factor completely before canceling.'],
            ['Rational Exponents', 'x^(a/b) = ᵇ√(xᵃ) = (ᵇ√x)ᵃ', 'Root index is denominator; exponent is numerator.'],
            ['Negative Exponent Shift', 'x⁻ᵃ = 1 / xᵃ', 'Term flips fraction bar; sign of exponent inverts.'],
            ['Remainder Theorem / Division', 'P(x)/(x - c) = Q(x) + R/(x - c)', 'Remainder R equals P(c); match terms or divide.']
          ]
        }
      ],
      examples: [
        {
          title: 'Example 6: Rational Simplification via Factoring',
          question: 'Which of the following is equivalent to (x² - 9) / (2x² + 5x - 3) for x > 3?',
          options: [
            '(x - 3) / (2x - 1)',
            '(x + 3) / (2x - 1)',
            '(x - 3) / (2x + 1)',
            '1 / (2x - 1)'
          ],
          correctAnswer: '(x - 3) / (2x - 1)',
          correctIndex: 0,
          explanation: `Method 1: Traditional Algebraic Solution
1. Factor the numerator (difference of squares):
   x² - 9 = (x - 3)(x + 3)
2. Factor the denominator (2x² + 5x - 3):
   2x² + 6x - x - 3 = 2x(x + 3) - 1(x + 3) = (2x - 1)(x + 3)
3. Cancel the common factor (x + 3):
   [(x - 3)(x + 3)] / [(2x - 1)(x + 3)] = (x - 3) / (2x - 1)

Method 2: Mental Shortcut
Substitute x = 4 into the original expression:
(4² - 9) / [2(4)² + 5(4) - 3] = (16 - 9) / (32 + 20 - 3) = 7 / 49 = 1/7
Test Option A with x = 4:
(4 - 3) / [2(4) - 1] = 1 / 7
Option A matches immediately.

Method 3: Desmos Calculator Technique
1. Plot y₁ = (x² - 9) / (2x² + 5x - 3).
2. Plot y₂ = (x - 3) / (2x - 1).
3. Verify that the curves are identical for all x > 3.

Correct Answer: A`
        },
        {
          title: 'Example 7: Combining Rational Expressions',
          question: 'Which expression is equivalent to 3 / (x - 2) + 5 / (x + 4) for x ≠ 2 and x ≠ -4?',
          options: [
            '8 / (2x + 2)',
            '(8x + 2) / ((x - 2)(x + 4))',
            '(8x - 2) / ((x - 2)(x + 4))',
            '2 / ((x - 2)(x + 4))'
          ],
          correctAnswer: '(8x + 2) / ((x - 2)(x + 4))',
          correctIndex: 1,
          explanation: `Method 1: Traditional Algebraic Solution
1. Find the common denominator: (x - 2)(x + 4).
2. Rewrite each fraction:
   [3(x + 4)] / [(x - 2)(x + 4)] + [5(x - 2)] / [(x - 2)(x + 4)]
3. Combine numerators:
   (3x + 12 + 5x - 10) / [(x - 2)(x + 4)] = (8x + 2) / [(x - 2)(x + 4)]

Method 2: Mental Shortcut
The numerator must equal 3(x + 4) + 5(x - 2). Evaluate the constant part: 3(4) + 5(-2) = 12 - 10 = +2. Only Option B has +2 as the constant in the numerator.

Method 3: Desmos Calculator Technique
1. On Line 1, enter f(x) = 3/(x - 2) + 5/(x + 4).
2. On Line 2, enter g(x) = (8x + 2)/((x - 2)(x + 4)).
3. Compare tables of values (e.g., at x = 0, both equal 2 / (-8) = -0.25).

Correct Answer: B`
        },
        {
          title: 'Example 8: Multi-Variable Exponent Reduction',
          question: 'Which expression is equivalent to [(x^(3/2) y²)⁴] / [x² y⁻³] for all positive values of x and y?',
          options: [
            'x⁴ y¹¹',
            'x⁴ y⁵',
            'x^(11/2) y¹¹',
            'x⁸ y¹¹'
          ],
          correctAnswer: 'x⁴ y¹¹',
          correctIndex: 0,
          explanation: `Method 1: Traditional Algebraic Solution
1. Apply the power of a product rule to the numerator:
   (x^(3/2))⁴ · (y²)⁴ = x^(3/2 · 4) y^(2 · 4) = x⁶ y⁸
2. Divide by the denominator using exponent subtraction rules:
   (x⁶ y⁸) / (x² y⁻³) = x^(6 - 2) · y^(8 - (-3)) = x⁴ y¹¹

Method 2: Mental Shortcut
Focus on the exponent of y: Numerator gives y^(2 · 4) = y⁸. Dividing by y⁻³ adds 3 to the exponent: 8 - (-3) = 11. This eliminates Option B. Next, focus on x: (x^1.5)⁴ = x⁶. x^(6 - 2) = x⁴. Result: x⁴ y¹¹.

Method 3: Desmos Calculator Technique
1. Let x = 2 and y = 3.
2. Calculate the original expression: [(2^1.5 · 3²)⁴] / [2² · 3⁻³] = [(2.8284 · 9)⁴] / [4 · 0.037037] = 2,834,352.
3. Evaluate Option A: 2⁴ · 3¹¹ = 16 · 177,147 = 2,834,352. Matches.

Correct Answer: A`
        }
      ]
    },
    {
      sectionTitle: '1.4 Modeling Expressions in Context',
      fullText: 'Word problems on the Digital SAT frequently ask you to interpret the structural components (coefficients, constants, bases, and exponents) of an algebraic model in real-world scenarios.',
      bulletPoints: [
        'Translating Verbal Terms: Total / Sum / Combined (+), Difference / Decreased by / Exceeds (-), Product / Rate / Per / Times (×), Ratio / Out of / Shared equally (÷).',
        'Interpreting Structure in Linear Models (C = mx + b): Constant term (b) is the initial value, baseline fee, or starting amount (when variable is 0). Coefficient (m) is the rate of change, unit price, or slope.',
        'Interpreting Structure in Exponential & Vertex Models: In A(t) = P(1 + r)ᵗ, P is the initial amount and (1 + r) is the growth factor. In H(t) = a(t - h)² + k, k is the maximum (if a < 0) or minimum (if a > 0) value occurring at t = h.'
      ],
      tables: [
        {
          title: 'Verbal Translation & Contextual Interpretation Table',
          headers: ['Contextual Keyword / Structure', 'Mathematical Operator / Interpretation', 'Exam Application & Real-World Meaning'],
          rows: [
            ['"Per / Each / Every / Rate"', 'Multiplication (m · x)', 'Represents variable unit cost, hourly rate, or slope.'],
            ['"Flat fee / Base charge / Initial amount"', 'Constant Term (b)', 'Value when x = 0 (y-intercept / starting point).'],
            ['"Discount of d%"', 'Multiplier (1 - d/100)', 'Cost is original price multiplied by remaining percentage.'],
            ['"Tax / Surcharge of t%"', 'Multiplier (1 + t/100)', 'Added cost is original price multiplied by (1 + rate).'],
            ['Quadratic Vertex Form: a(t - h)² + k', 'Vertex (h, k)', 'k is maximum (if a < 0) or minimum (if a > 0) height/value at t = h.']
          ]
        }
      ],
      examples: [
        {
          title: 'Example 9: Multi-Tier Pricing & Percentage Discount Model',
          question: 'A furniture maker buys c chairs at $15 each and t tables at $45 each. He receives a 10% discount on the total purchase price of the items, and pays a flat $25 delivery fee for the entire order. Which expression represents the total amount, in dollars, the furniture maker pays?',
          options: [
            '13.5c + 40.5t + 25',
            '15c + 45t + 22.5',
            '0.90(15c + 45t + 25)',
            '1.10(15c + 45t) + 25'
          ],
          correctAnswer: '13.5c + 40.5t + 25',
          correctIndex: 0,
          explanation: `Method 1: Traditional Algebraic Solution
1. Calculate the undiscounted total cost of chairs and tables:
   Raw Cost = 15c + 45t
2. Apply a 10% discount (which means paying 90% or 0.90 of the raw cost):
   Discounted Cost = 0.90(15c + 45t) = 13.5c + 40.5t
3. Add the flat delivery fee of $25 (note: the discount does not apply to delivery):
   Total = 13.5c + 40.5t + 25

Method 2: Mental Shortcut
Each chair normally costs $15. A 10% discount reduces the price per chair by $1.50 to $13.50. Thus, the coefficient for c MUST be 13.5. Option A is the only choice with 13.5c.

Method 3: Desmos Calculator Technique
1. Set c = 2 and t = 1.
2. Total raw item cost = 15(2) + 45(1) = 75.
3. Discounted items = 75 × 0.90 = 67.50.
4. Plus delivery = 67.50 + 25 = 92.50.
5. Test Option A in Desmos: 13.5(2) + 40.5(1) + 25 = 27 + 40.5 + 25 = 92.50.

Correct Answer: A`
        },
        {
          title: 'Example 10: Structural Interpretation of Vertex Form Constants',
          question: 'The height H, in feet, of a small rocket t seconds after launch is modeled by the expression -16(t - 3)² + 150. What does the constant 150 represent in this expression?',
          options: [
            'The initial height of the rocket at launch.',
            'The maximum height reached by the rocket.',
            'The total time the rocket stays in the air.',
            'The acceleration of the rocket.'
          ],
          correctAnswer: 'The maximum height reached by the rocket.',
          correctIndex: 1,
          explanation: `Method 1: Traditional Algebraic Solution
1. The expression is in vertex form for a quadratic model: a(t - h)² + k.
2. Since a = -16 < 0, the parabola opens downward, meaning the vertex (h, k) = (3, 150) represents a maximum point.
3. Therefore, k = 150 is the maximum value of H(t), which corresponds to the maximum height in feet.

Method 2: Mental Shortcut
Notice that (t - 3)² is always >= 0 for any real t. Since it is multiplied by -16, the term -16(t - 3)² is always <= 0. Its maximum possible value is 0 (which occurs when t = 3). Thus, the maximum possible value of the entire expression is 0 + 150 = 150.

Method 3: Desmos Calculator Technique
1. Plot y = -16(x - 3)² + 150.
2. Click on the peak (vertex) of the parabola.
3. The coordinate displayed is (3, 150), confirming the maximum height is 150.

Correct Answer: B`
        }
      ]
    }
  ],
  exerciseGroups: [
    {
      exerciseNumber: 1,
      title: 'Module 1: Easy / Medium Questions',
      description: 'Foundational algebra exercises covering like-term combinations, polynomial distribution, radical conversions, single-step factoring, and linear context translations.',
      questions: CHAPTER_2_QUESTIONS_PART_1
    },
    {
      exerciseNumber: 2,
      title: 'Module 2: Hard Questions',
      description: 'Advanced polynomial expansions, rational algebraic divisions, completed square representations, difference of cubes, multi-tiered percent multipliers, and complex factoring.',
      questions: CHAPTER_2_QUESTIONS_PART_2
    }
  ]
};
