import { MathExerciseQuestion } from './satMathConcepts';

export const CHAPTER_1_QUESTIONS_PART_2: MathExerciseQuestion[] = [
  {
    id: 'ch1-q26',
    number: 26,
    exerciseNumber: 2,
    exerciseTitle: 'Geometric Formula Inversion with Radicals',
    question: 'The formula for the volume of a cone with a radius of r and height of h is V = (1/3)π·r²·h. What is the expression for the radius of a cone in terms of the volume of the cone?',
    options: [
      '√(V / (3πh))',
      '√((3V) / (πh))',
      '(3V) / (πh)',
      '√(3V) / (πh)'
    ],
    correctIndex: 1,
    correctAnswerText: '√((3V) / (πh))',
    explanation: `Step-by-Step Breakdown:
1. Start with the given volume formula:
   V = (1/3)π · r² · h.
2. Multiply both sides by 3 to clear the fraction:
   3V = π · r² · h.
3. Divide both sides by πh to isolate r²:
   r² = (3V) / (πh).
4. Take the positive square root of both sides (since geometric radius r > 0):
   r = √((3V) / (πh)).

Desmos Shortcut:
Assign test numbers: V = 100, h = 5.
r² = (3 · 100) / (5π) = 60 / π ≈ 19.0986 → r = √(19.0986) ≈ 4.370.
Option B: √((3 · 100) / (5π)) ≈ 4.370 (Exact Match).`,
    distractorExplanations: {
      0: 'Placed 3 in the denominator instead of the numerator.',
      2: 'Forgot to take the square root of r².',
      3: 'Took the square root of 3V only, leaving πh un-rooted.'
    }
  },
  {
    id: 'ch1-q27',
    number: 27,
    exerciseNumber: 2,
    exerciseTitle: 'Astrophysical Inverse-Square Law Isolation',
    question: 'The luminosity, L, of a star is determined by the formula L = 4π·d²·b, where d represents the distance of the star in meters and b represents the brightness of the star in watts per meter squared. Which of the following equations determines the distance of a star in terms of its luminosity and brightness?',
    options: [
      'd = 4π · √(L / b)',
      'd = √( (Lb) / (4π) )',
      'd = √( L / (4πb) )',
      'd = L · √(4πb)'
    ],
    correctIndex: 2,
    correctAnswerText: 'd = √( L / (4πb) )',
    explanation: `Step-by-Step Breakdown:
1. Start with the luminosity equation:
   L = 4π · d² · b.
2. Isolate d² by dividing both sides by 4πb:
   d² = L / (4πb).
3. Take the square root of both sides (distance d > 0):
   d = √( L / (4πb) ).

Desmos Shortcut:
Set L = 1000, b = 2.
d = √(1000 / (8π)) = √(125 / π) ≈ 6.3078.
Option C evaluates to √(1000 / (8π)) ≈ 6.3078.`,
    distractorExplanations: {
      0: 'Pulled 4π outside the radical without taking its square root or dividing properly.',
      1: 'Multiplied L and b instead of dividing L by b.',
      3: 'Multiplied luminosity L by the square root term.'
    }
  },
  {
    id: 'ch1-q28',
    number: 28,
    exerciseNumber: 2,
    exerciseTitle: 'Astrophysical Inverse-Square Law Isolation for Brightness',
    question: 'The luminosity, L, of a star is determined by the formula L = 4π·d²·b, where d represents the distance of the star in meters and b represents the brightness of the star in watts per meter squared. Which of the following equations determines the brightness of a star in terms of its luminosity and distance?',
    options: [
      'b = L / (4π·d²)',
      'b = (4π·d²) / L',
      'b = √(L / (4π·d))',
      'b = 4π·L·d²'
    ],
    correctIndex: 0,
    correctAnswerText: 'b = L / (4π·d²)',
    explanation: `Step-by-Step Breakdown:
1. Start with the luminosity formula:
   L = 4π · d² · b.
2. Isolate the brightness b by dividing both sides by 4π·d²:
   b = L / (4π·d²).

Desmos Shortcut:
Set L = 1000, d = 5.
b = 1000 / (4π · 25) = 10 / π ≈ 3.183.
Option A evaluates directly to 10 / π ≈ 3.183.`,
    distractorExplanations: {
      1: 'Inverts the fraction by dividing the geometric sphere area by the luminosity.',
      2: 'Incorrectly took a square root when solving for a first-power variable b.',
      3: 'Multiplied all terms together instead of dividing by the coefficient of b.'
    }
  },
  {
    id: 'ch1-q29',
    number: 29,
    exerciseNumber: 2,
    exerciseTitle: 'Exponential Function Modeling from Data Table',
    question: 'The table shows three values of x and their corresponding values for function f: for x = -1, f(x) = 1/10; for x = 0, f(x) = 1; for x = 1, f(x) = 10. Which equation defines function f?',
    table: {
      title: 'Function Values of f(x)',
      headers: ['x', 'f(x)'],
      rows: [
        ['-1', '1/10'],
        ['0', '1'],
        ['1', '10']
      ]
    },
    options: [
      'f(x) = (1/10)ˣ',
      'f(x) = -10ˣ',
      'f(x) = -(1/10)ˣ',
      'f(x) = 10ˣ'
    ],
    correctIndex: 3,
    correctAnswerText: 'f(x) = 10ˣ',
    explanation: `Step-by-Step Breakdown:
1. Examine the y-intercept at x = 0:
   f(0) = 1.
   Any non-zero base raised to power 0 equals 1: b⁰ = 1.
2. Examine the base ratio between successive x-values:
   f(1) / f(0) = 10 / 1 = 10.
   f(0) / f(-1) = 1 / (1/10) = 10.
3. The common multiplier (base) is b = 10.
4. Test the model f(x) = 10ˣ:
   • f(-1) = 10^(-1) = 1/10 (Matches table)
   • f(0) = 10⁰ = 1 (Matches table)
   • f(1) = 10¹ = 10 (Matches table)
5. Therefore, f(x) = 10ˣ.

Desmos Shortcut:
Enter the 3 points in a Desmos table: (-1, 0.1), (0, 1), (1, 10).
Type y₁ ~ a · b^(x₁) → Desmos outputs a = 1, b = 10. Equation is y = 10ˣ.`,
    distractorExplanations: {
      0: 'Represents exponential decay where f(1) would equal 1/10 rather than 10.',
      1: 'Yields negative outputs (f(0) = -1), which contradicts the positive values in the table.',
      2: 'Combines decaying base with negative reflection.'
    }
  },
  {
    id: 'ch1-q30',
    number: 30,
    exerciseNumber: 2,
    exerciseTitle: 'Inverse-Square Law Proportions',
    question: 'The gravitational force equation is F = (G · M_E · m) / d². For two satellites of the same mass in Earth\'s orbit, the force of Earth\'s gravity on Object A is 9 times the force of Earth\'s gravity on Object B. The distance of Object A from Earth\'s center is what fraction of the distance of Object B from Earth\'s center?',
    options: [
      '1/9',
      '1/3',
      '1/81',
      '3'
    ],
    correctIndex: 1,
    correctAnswerText: '1/3',
    explanation: `Step-by-Step Breakdown:
1. Since G, M_E, and m are constants, F is inversely proportional to d²:
   F ∝ 1 / d², meaning d² ∝ 1 / F, so d ∝ 1 / √F.
2. We are given: F_A = 9 · F_B.
3. Express the ratio of distances:
   d_A / d_B = √(F_B / F_A) = √(F_B / (9 F_B)) = √(1/9) = 1/3.
4. Thus, d_A = (1/3) · d_B.

Desmos Shortcut:
Let F_B = 1, so F_A = 9.
d_B = 1/√1 = 1, d_A = 1/√9 = 1/3.
The ratio d_A / d_B = (1/3) / 1 = 1/3.`,
    distractorExplanations: {
      0: 'Forgot that distance is squared in the inverse-square law (1/9 instead of √(1/9) = 1/3).',
      2: 'Squared the ratio 9 instead of taking its square root ((1/9)² = 1/81).',
      3: 'Gives the ratio of d_B to d_A instead of d_A to d_B.'
    }
  },
  {
    id: 'ch1-q31',
    number: 31,
    exerciseNumber: 2,
    exerciseTitle: 'Radical Equation with Constant Substitution',
    question: '√(a + 1) = b. In the equation above, b = 4. What is the value of constant a?',
    options: [
      '16',
      '3',
      '1',
      '15'
    ],
    correctIndex: 3,
    correctAnswerText: '15',
    explanation: `Step-by-Step Breakdown:
1. Substitute b = 4 into the equation:
   √(a + 1) = 4.
2. Square both sides to eliminate the square root:
   (√(a + 1))² = 4²
   a + 1 = 16.
3. Subtract 1 from both sides:
   a = 16 - 1 = 15.
4. Verify by checking: √(15 + 1) = √16 = 4 (Valid).

Desmos Shortcut:
Type √(x + 1) = 4 in Desmos. The vertical solution line appears directly at x = 15.`,
    distractorExplanations: {
      0: '16 is the value of (a + 1), forgetting to subtract 1.',
      1: 'Subtracted 1 from 4 without squaring (4 - 1 = 3).',
      2: 'Arithmetic confusion with √1.'
    }
  },
  {
    id: 'ch1-q32',
    number: 32,
    exerciseNumber: 2,
    exerciseTitle: 'Interpreting Rate Multipliers in Exponents',
    question: 'The amount of carbon-15 in a given sample decays exponentially with time. If the function C(m) = 100(1/2)^(24m) models the amount of carbon-15 remaining in the sample after m minutes, which of the following must be true?',
    options: [
      'The amount of carbon in the sample halves 24 times every minute.',
      'The amount of carbon in the sample halves every minute.',
      'The amount of carbon in the sample decreases by a factor of 24 every 2 minutes.',
      'The amount of carbon in the sample halves every 24 minutes.'
    ],
    correctIndex: 0,
    correctAnswerText: 'The amount of carbon in the sample halves 24 times every minute.',
    explanation: `Step-by-Step Breakdown:
1. Look at the base and exponent of the model:
   • The base is 1/2, representing a halving (50% reduction) event.
   • The exponent is 24m, where m is time in minutes.
2. When m increases by 1 minute:
   • The exponent increases by 24 · 1 = 24.
   • This means the factor of 1/2 is multiplied 24 times in that single minute.
3. Therefore, the quantity halves 24 times every minute (or once every 60/24 = 2.5 seconds).

Desmos Shortcut:
Evaluate C(0) = 100 and C(1) = 100 · (1/2)²⁴ = 100 · (0.5)²⁴.
The exponent 24 indicates 24 repeated half-life cycles in 1 unit of m.`,
    distractorExplanations: {
      1: 'Ignores the coefficient 24 in the exponent.',
      2: 'Interprets 24 as a reduction factor rather than frequency.',
      3: 'Confuses 24m with m/24 (which would mean halving once every 24 minutes).'
    }
  },
  {
    id: 'ch1-q33',
    number: 33,
    exerciseNumber: 2,
    exerciseTitle: 'Algebraic Simplification to Radical Form',
    question: 'If a = (4a²) / 16 and a is a nonzero integer, which of the following is equivalent to a?',
    options: [
      '4a',
      '2√a',
      '√(2a)',
      '4√a'
    ],
    correctIndex: 1,
    correctAnswerText: '2√a',
    explanation: `Step-by-Step Breakdown:
1. Simplify the given equation:
   a = (4a²) / 16 = a² / 4.
2. Multiply both sides by 4:
   4a = a².
3. Since a is a nonzero integer, divide both sides by a:
   a = 4.
4. Now test the options with a = 4:
   • Option A: 4a = 4(4) = 16 ≠ 4
   • Option B: 2√a = 2√4 = 2(2) = 4 (Exact Match: 2√a = a)
   • Option C: √(2a) = √8 = 2√2 ≈ 2.828 ≠ 4
   • Option D: 4√a = 4√4 = 4(2) = 8 ≠ 4
5. Thus, 2√a is equivalent to a.

Desmos Shortcut:
Solve 4x = x² → x = 4.
Type 2√4 in Desmos → Output is 4.`,
    distractorExplanations: {
      0: '4a = 16 when a = 4.',
      2: '√(2 · 4) = √8 ≈ 2.828.',
      3: '4√4 = 8.'
    }
  },
  {
    id: 'ch1-q34',
    number: 34,
    exerciseNumber: 2,
    exerciseTitle: 'Constructing Half-Life Decay Functions',
    question: 'The half-life of radioactive substance carbon-14, defined as the time taken for the radioactivity of a specified isotope to fall to half its original value, is 5,730 years. If a sample originally contained 100 grams of carbon-14, which of the following functions can be used to solve for the amount N of carbon-14 t years from now?',
    options: [
      'N(t) = 100(0.5)^(t / 5730)',
      'N(t) = 100(0.5)ᵗ + 5730',
      'N(t) = 100(0.5)^(5730t)',
      'N(t) = 100(0.5)^(5730 / t)'
    ],
    correctIndex: 0,
    correctAnswerText: 'N(t) = 100(0.5)^(t / 5730)',
    explanation: `Step-by-Step Breakdown:
1. General exponential decay model: N(t) = Initial · (Decay Factor)^(t / Period).
2. Initial quantity = 100 grams.
3. Half-life decay factor = 0.5 (or 1/2).
4. Period required for one half-life = 5,730 years.
5. Therefore, the number of half-lives elapsed in t years is t / 5730.
6. The exact model is: N(t) = 100(0.5)^(t / 5730).

Desmos Shortcut:
Test t = 5,730 years into Option A:
N(5730) = 100(0.5)^(5730/5730) = 100(0.5)¹ = 50 grams (Exactly half the original 100g).`,
    distractorExplanations: {
      1: 'Adds 5730 as a constant term instead of using it as the exponential period.',
      2: 'Multiplies t by 5730, meaning it would decay 5730 times per year.',
      3: 'Inverts the exponent fraction to 5730/t.'
    }
  },
  {
    id: 'ch1-q35',
    number: 35,
    exerciseNumber: 2,
    exerciseTitle: 'Effective Interest Rate Compounding Comparison',
    question: 'The expression ((1 + 0.05/n)ⁿ - 1) gives the effective annual interest rate on a bank account paying 5% annual interest compounded n times per year. Which expression shows the change in effective rate if compounded monthly rather than quarterly?',
    options: [
      '[((1 + 0.05/12)¹² - 1)] / [((1 + 0.05/4)⁴ - 1)]',
      '(1 + 0.05/(12 - 4))^(12 - 4) - 1',
      '(1 + 0.05/(12/4))^(12/4) - 1',
      '[(1 + 0.05/12)¹² - 1] - [(1 + 0.05/4)⁴ - 1]'
    ],
    correctIndex: 3,
    correctAnswerText: '[(1 + 0.05/12)¹² - 1] - [(1 + 0.05/4)⁴ - 1]',
    explanation: `Step-by-Step Breakdown:
1. Define the compounding frequencies:
   • Monthly compounding: n = 12 times per year.
     Effective Rate_monthly = (1 + 0.05/12)¹² - 1.
   • Quarterly compounding: n = 4 times per year.
     Effective Rate_quarterly = (1 + 0.05/4)⁴ - 1.
2. The "change in effective rate" is the mathematical difference:
   Difference = Effective Rate_monthly - Effective Rate_quarterly
   = [(1 + 0.05/12)¹² - 1] - [(1 + 0.05/4)⁴ - 1].

Desmos Shortcut:
Calculate the difference in Desmos:
Rate₁₂ = (1 + 0.05/12)¹² - 1 ≈ 0.0511619
Rate₄ = (1 + 0.05/4)⁴ - 1 ≈ 0.0509453
Difference ≈ 0.0002166.
Option D matches this difference directly.`,
    distractorExplanations: {
      0: 'Divides the rates instead of calculating their difference (change).',
      1: 'Subtracts the compounding periods (12 - 4 = 8) inside a single formula.',
      2: 'Divides the compounding periods (12/4 = 3).'
    }
  },
  {
    id: 'ch1-q36',
    number: 36,
    exerciseNumber: 2,
    exerciseTitle: 'Prime Base Reduction in Exponential Products',
    question: 'If 2a + b = 6, then what is the value of (9ᵃ)(3ᵇ)?',
    options: [
      '3³',
      'It cannot be determined from the information given.',
      '27⁶',
      '3⁶'
    ],
    correctIndex: 3,
    correctAnswerText: '3⁶',
    explanation: `Step-by-Step Breakdown:
1. Apply the Prime Base Reduction Framework: Convert 9 into prime base 3:
   9ᵃ = (3²)ᵃ = 3^(2a).
2. Substitute into the product:
   (9ᵃ)(3ᵇ) = (3^(2a))(3ᵇ).
3. Apply the Product Rule of Exponents (add exponents):
   3^(2a) · 3ᵇ = 3^(2a + b).
4. Substitute the given constraint 2a + b = 6:
   3^(2a + b) = 3⁶ (which equals 729).
5. Therefore, the value is 3⁶.

Desmos Shortcut:
Pick any pair satisfying 2a + b = 6: Let a = 2, b = 2 (2(2) + 2 = 6).
Calculate (9²)(3²) = 81 · 9 = 729.
3⁶ = 729 (Exact Match).`,
    distractorExplanations: {
      0: 'Divided the exponent by 2 (3³ = 27 ≠ 729).',
      1: 'Falsely assumed both a and b need to be solved individually.',
      2: 'Multiplied base 9 and 3 to get 27⁶.'
    }
  },
  {
    id: 'ch1-q37',
    number: 37,
    exerciseNumber: 2,
    exerciseTitle: 'Radical Common Denominator Equations',
    question: 'Which of the following represents a solution to the equation k² / √(x² + k²) = 12 - x² / √(x² + k²), where x is a variable and k is a constant greater than 0?',
    options: [
      '-k',
      '√(k² + 12²)',
      '√(12² - k²)',
      '12² - k²'
    ],
    correctIndex: 2,
    correctAnswerText: '√(12² - k²)',
    explanation: `Step-by-Step Breakdown:
1. Group all radical fractions on the LHS:
   k² / √(x² + k²) + x² / √(x² + k²) = 12.
2. Combine numerators over the common denominator:
   (x² + k²) / √(x² + k²) = 12.
3. Simplify using the algebraic property A / √A = √A:
   √(x² + k²) = 12.
4. Square both sides:
   x² + k² = 12².
5. Solve for x:
   x² = 12² - k²
   x = ±√(12² - k²).
6. Thus, a valid solution is √(12² - k²).

Desmos Shortcut:
Set k = 5.
Equation: 25/√(x²+25) = 12 - x²/√(x²+25) → √(x²+25) = 12 → x² + 25 = 144 → x² = 119 → x = √119 ≈ 10.9087.
Option C with k = 5: √(144 - 25) = √119 ≈ 10.9087 (Exact Match).`,
    distractorExplanations: {
      0: 'Setting x = -k gives 2k² / √(2k²) = k√2 ≠ 12.',
      1: 'Added k² instead of subtracting it when isolating x².',
      3: 'Forgot to take the square root of x².'
    }
  },
  {
    id: 'ch1-q38',
    number: 38,
    exerciseNumber: 2,
    exerciseTitle: 'Even Power Radical Roots',
    question: 'The function q is defined by q(x) = (1/9)x⁴. For what value of x does q(x) = 9?',
    options: [
      '3',
      '81 / 4',
      '1/9',
      '81'
    ],
    correctIndex: 0,
    correctAnswerText: '3',
    explanation: `Step-by-Step Breakdown:
1. Set q(x) equal to 9:
   (1/9)x⁴ = 9.
2. Multiply both sides by 9:
   x⁴ = 81.
3. Take the fourth root of both sides:
   x = ⁴√81 = ⁴√(3⁴) = 3 (or -3).
4. Among the given choices, the positive solution is 3.

Desmos Shortcut:
Graph y = (1/9)x⁴ and y = 9.
Click the intersection point: (3, 9). The x-coordinate is 3.`,
    distractorExplanations: {
      1: 'Divided 81 by 4 instead of taking the 4th root.',
      2: 'Substituted x = 1/9.',
      3: '81 is the value of x⁴, forgetting to take the 4th root.'
    }
  },
  {
    id: 'ch1-q39',
    number: 39,
    exerciseNumber: 2,
    exerciseTitle: 'Comparing Exponential vs Linear Growth Models',
    question: 'An investor is deciding between two options for a short-term investment. Option 1 return is R = 100(3ᵗ) and Option 2 return is R = 350t, where t is months after investment. After 4 months, how much less is the return given by the linear model than the return given by the exponential model?',
    options: [
      '4050',
      '6700',
      '8100',
      '1400'
    ],
    correctIndex: 1,
    correctAnswerText: '6700',
    explanation: `Step-by-Step Breakdown:
1. Calculate the return for the exponential model at t = 4:
   R_exp = 100(3⁴) = 100 · 81 = $8,100.
2. Calculate the return for the linear model at t = 4:
   R_lin = 350 · 4 = $1,400.
3. Calculate how much less the linear model is compared to the exponential model:
   Difference = R_exp - R_lin = 8,100 - 1,400 = $6,700.

Desmos Shortcut:
Type 100(3⁴) - 350(4) in Desmos.
Desmos instantly outputs 6700.`,
    distractorExplanations: {
      0: 'Calculated 100(3⁴) / 2.',
      2: '8,100 is only the exponential return, forgetting to subtract the linear return.',
      3: '1,400 is only the linear return.'
    }
  },
  {
    id: 'ch1-q40',
    number: 40,
    exerciseNumber: 2,
    exerciseTitle: 'System of Radical Formulas Substitution',
    question: 'Ohm\'s Law states IR = V, and electric power is given by I = √(P/R). Which of the following gives P in terms of V and R?',
    options: [
      'P = V² · R³',
      'P = V² / R',
      'P = V / R',
      'P = R / V²'
    ],
    correctIndex: 1,
    correctAnswerText: 'P = V² / R',
    explanation: `Step-by-Step Breakdown:
1. From Ohm's Law (IR = V), solve for current I:
   I = V / R.
2. Substitute I = V / R into the power radical equation:
   V / R = √(P / R).
3. Square both sides to eliminate the square root:
   (V / R)² = (√(P / R))²
   V² / R² = P / R.
4. Multiply both sides by R to isolate P:
   P = (V² · R) / R² = V² / R.

Desmos Shortcut:
Let V = 12, R = 4.
I = 12 / 4 = 3.
From 3 = √(P / 4) → 9 = P / 4 → P = 36.
Option B: 12² / 4 = 144 / 4 = 36 (Exact Match).`,
    distractorExplanations: {
      0: 'Multiplied powers of R incorrectly.',
      2: 'Failed to square V.',
      3: 'Inverted the relationship.'
    }
  },
  {
    id: 'ch1-q41',
    number: 41,
    exerciseNumber: 2,
    exerciseTitle: 'Deconstructing Fractional Exponent Growth Rates',
    question: 'A student\'s score on a standardized test is projected to increase by a% for every 4 practice tests the student takes. The function S(p) = 1200(1.2)^((1/4)p) represents this situation, where p is the number of practice tests taken. What is the value of a?',
    options: [
      '2',
      '0.25',
      '20',
      '1.2'
    ],
    correctIndex: 2,
    correctAnswerText: '20',
    explanation: `Step-by-Step Breakdown:
1. The problem asks for the percentage increase for every 4 practice tests (p = 4).
2. Substitute p = 4 into the exponential function:
   S(4) = 1200 · (1.2)^((1/4) · 4) = 1200 · (1.2)¹ = 1200(1.2).
3. Express the growth multiplier (1.2) as a percentage increase:
   Multiplier = 1 + r = 1.20 → r = 0.20 = 20%.
4. Therefore, the score increases by 20%, so a = 20.

Desmos Shortcut:
Calculate S(0) = 1200 and S(4) = 1200(1.2)¹ = 1440.
Percent increase = (1440 - 1200) / 1200 = 240 / 1200 = 0.20 = 20%.`,
    distractorExplanations: {
      0: 'Divided 20 by 10.',
      1: 'Confused the exponent fraction 1/4 = 0.25 with the percentage increase.',
      3: 'Gave the multiplier 1.2 instead of the percentage rate 20%.'
    }
  },
  {
    id: 'ch1-q42',
    number: 42,
    exerciseNumber: 2,
    exerciseTitle: 'Inverting Radical Financial Models',
    question: 'The return on investment of a certain stock has been modeled with the equation I = (PT) / √(1 + R), where I is percent increase, P is annual profits, T is time in years, and R is relative risk rating. Which expression can be used to determine R?',
    options: [
      'R = ( (PT) / I )² - 1',
      'R = ( (PT)² / I ) - 1',
      'R = (PT / I²) - 1',
      'R = 1 + ( (PT) / I )²'
    ],
    correctIndex: 0,
    correctAnswerText: 'R = ( (PT) / I )² - 1',
    explanation: `Step-by-Step Breakdown:
1. Start with the given formula:
   I = (PT) / √(1 + R).
2. Multiply both sides by √(1 + R) and divide by I:
   √(1 + R) = (PT) / I.
3. Square both sides to eliminate the square root:
   1 + R = ( (PT) / I )².
4. Subtract 1 from both sides to isolate R:
   R = ( (PT) / I )² - 1.

Desmos Shortcut:
Set P = 10, T = 2, R = 3.
I = (10 · 2) / √(1 + 3) = 20 / √4 = 20 / 2 = 10.
Now test Option A: ((10 · 2) / 10)² - 1 = (20 / 10)² - 1 = 2² - 1 = 3 (Matches R = 3).`,
    distractorExplanations: {
      1: 'Only squared PT in the numerator, forgetting to square I in the denominator.',
      2: 'Only squared the denominator I.',
      3: 'Added 1 instead of subtracting 1.'
    }
  },
  {
    id: 'ch1-q43',
    number: 43,
    exerciseNumber: 2,
    exerciseTitle: 'Unit Conversion in Exponential Growth Exponents',
    question: 'For a chemistry experiment, the number of moles of product increases each minute by r% of the number of moles present the preceding minute. The function g(x) = 78500(1.52)^(x/60) models the number of moles present x seconds after the start. What is the value of r?',
    options: [
      '48',
      '152',
      '52',
      '0.52'
    ],
    correctIndex: 2,
    correctAnswerText: '52',
    explanation: `Step-by-Step Breakdown:
1. Note the units: x is time in seconds, but r% is the growth rate per minute.
2. In 1 minute, there are 60 seconds (x = 60).
3. Evaluate the multiplier after 1 minute (x = 60):
   (1.52)^(60/60) = (1.52)¹ = 1.52.
4. Relate the growth multiplier to the percentage increase r%:
   Multiplier = 1 + r / 100 = 1.52
   r / 100 = 0.52 → r = 52.

Desmos Shortcut:
Calculate g(60) / g(0) = 78500(1.52)¹ / 78500 = 1.52.
Percentage increase = (1.52 - 1) · 100 = 52%.`,
    distractorExplanations: {
      0: 'Subtracted 52 from 100 (100 - 52 = 48).',
      1: 'Used the full factor 152 instead of subtracting 100% baseline.',
      3: 'Gave the decimal rate 0.52 instead of the percentage value r = 52.'
    }
  },
  {
    id: 'ch1-q44',
    number: 44,
    exerciseNumber: 2,
    exerciseTitle: 'Radical Equations & Extraneous Solution Identification',
    question: 'If k = 3, what is the solution set of the equation √(x - k) = x - 9?',
    options: [
      '{3}',
      '{7, 12}',
      '{12}',
      '{7}'
    ],
    correctIndex: 2,
    correctAnswerText: '{12}',
    explanation: `Step-by-Step Breakdown:
1. Substitute k = 3 into the equation:
   √(x - 3) = x - 9.
2. Square both sides:
   x - 3 = (x - 9)²
   x - 3 = x² - 18x + 81.
3. Bring all terms to one side:
   x² - 19x + 84 = 0.
4. Factor the quadratic:
   (x - 12)(x - 7) = 0 → Potential solutions: x = 12, x = 7.
5. High-Frequency Trap Verification (MANDATORY Extraneous Check):
   • Test x = 12: LHS = √(12 - 3) = √9 = 3; RHS = 12 - 9 = 3. Since 3 = 3, x = 12 is a VALID solution.
   • Test x = 7: LHS = √(7 - 3) = √4 = 2; RHS = 7 - 9 = -2. Since 2 ≠ -2 (principal square root is non-negative), x = 7 is an EXTRANEOUS root!
6. Thus, the solution set is strictly {12}.

Desmos Shortcut:
Graph y₁ = √(x - 3) and y₂ = x - 9.
They intersect at exactly one single point: (12, 3). Desmos visually ignores the extraneous root x = 7!`,
    distractorExplanations: {
      0: 'Substituted k = 3.',
      1: 'Classic SAT Trap: Included the extraneous root x = 7 without verifying in the un-squared radical.',
      3: 'Selected only the extraneous root.'
    }
  },
  {
    id: 'ch1-q45',
    number: 45,
    exerciseNumber: 2,
    exerciseTitle: 'Linear Radical Equation Solving',
    question: 'If √t + √4 = √36, what is the value of t?',
    options: [
      '4',
      '√4',
      '32',
      '16'
    ],
    correctIndex: 3,
    correctAnswerText: '16',
    explanation: `Step-by-Step Breakdown:
1. Evaluate known numerical radicals:
   • √4 = 2
   • √36 = 6
2. Substitute into the equation:
   √t + 2 = 6.
3. Isolate √t:
   √t = 6 - 2 = 4.
4. Square both sides to solve for t:
   t = 4² = 16.

Desmos Shortcut:
Type √x + √4 = √36 in Desmos.
A vertical line is plotted directly at x = 16.`,
    distractorExplanations: {
      0: '4 is the value of √t, forgetting to square to get t.',
      1: 'Gave √4 = 2.',
      2: 'Attempted to combine radicals as 36 - 4 = 32.'
    }
  },
  {
    id: 'ch1-q46',
    number: 46,
    exerciseNumber: 2,
    exerciseTitle: 'Rational-Radical Equations & Extraneous Roots',
    question: '(q² - q - 42) / (q + 6) = √(q - 5). The equation above can be solved for two algebraic solutions, one of which is extraneous. What is the value of the extraneous solution?',
    options: ["6","7","8","11"],
    correctIndex: 2,
    correctAnswerText: "8",
    explanation: `Step-by-Step Breakdown:
1. Factor the numerator quadratic:
   q² - q - 42 = (q - 7)(q + 6).
2. Simplify the rational expression on the LHS for q ≠ -6:
   ((q - 7)(q + 6)) / (q + 6) = q - 7.
3. Set equal to the RHS radical:
   q - 7 = √(q - 5).
4. Square both sides:
   (q - 7)² = q - 5
   q² - 14q + 49 = q - 5
   q² - 15q + 54 = 0.
5. Factor the resulting quadratic:
   (q - 9)(q - 6) = 0 → Potential solutions: q = 9, q = 6.
6. Test both solutions in the original un-squared radical equation (q - 7 = √(q - 5)):
   • Test q = 9: LHS = 9 - 7 = 2; RHS = √(9 - 5) = √4 = 2. (Valid solution!)
   • Test q = 6: LHS = 6 - 7 = -1; RHS = √(6 - 5) = √1 = 1. Since -1 ≠ 1, q = 6 is the EXTRANEOUS solution.
7. The question asks for the value of the extraneous solution, which is 6.

Desmos Shortcut:
Graph y₁ = (x² - x - 42)/(x + 6) and y₂ = √(x - 5).
They intersect only at x = 9.
Test x = 6 in both functions: y₁(6) = -1 while y₂(6) = 1, confirming 6 is extraneous.`,
    distractorExplanations: {
      0: '9 is the valid solution, but the prompt specifically asked for the extraneous solution.',
      1: 'Incorrect factorization arithmetic.',
      3: '7 makes the LHS zero, not satisfying √(7 - 5) = √2.'
    }
  },
  {
    id: 'ch1-q47',
    number: 47,
    exerciseNumber: 2,
    exerciseTitle: 'Time Unit Normalization in Isotope Decay',
    question: 'The amount, in micrograms, of a certain radioactive isotope h hours after its creation is modeled by M(h) = 302(0.87)^((4/5)h). According to the model, the amount is predicted to decrease by d% every 75 minutes. What is the value of d?',
    options: [
      '13',
      '16.25',
      '87',
      '26'
    ],
    correctIndex: 0,
    correctAnswerText: '13',
    explanation: `Step-by-Step Breakdown:
1. Convert 75 minutes into hours:
   h = 75 / 60 = 5/4 hours = 1.25 hours.
2. Substitute h = 5/4 into the exponent (4/5)h:
   Exponent = (4/5) · (5/4) = 1.
3. Therefore, every 75 minutes, the amount is multiplied by:
   (0.87)¹ = 0.87.
4. Calculate the percentage decrease d%:
   Decrease = 1 - 0.87 = 0.13 = 13%.
5. Thus, d = 13.

Desmos Shortcut:
Evaluate M(0) = 302 and M(1.25) = 302(0.87)^((4/5)·1.25) = 302(0.87)¹ = 262.74.
Percent decrease = (302 - 262.74) / 302 = 39.26 / 302 = 0.13 = 13%.`,
    distractorExplanations: {
      1: 'Calculated (13 / 0.8) or arithmetic fraction slip.',
      2: '87 is the remaining percentage (100 - 13 = 87%), not the decrease percentage d.',
      3: 'Doubled 13.'
    }
  },
  {
    id: 'ch1-q48',
    number: 48,
    exerciseNumber: 2,
    exerciseTitle: 'Exponential Table to Mathematical Equation',
    question: 'The table shows the exponential growth of a type of yeast over time s, in seconds. There are c total yeast colonies. What is the equation that represents this relationship, assuming no yeast was added or removed?',
    table: {
      title: 'Yeast Colony Growth',
      headers: ['Time (seconds) s', 'Number of colonies c'],
      rows: [
        ['0', '5'],
        ['1', '20'],
        ['2', '80'],
        ['3', '320']
      ]
    },
    options: [
      'c = 5(4)ˢ',
      'c = 4(5)ˢ',
      'c = 5 + 15s',
      'c = 20(4)ˢ'
    ],
    correctIndex: 0,
    correctAnswerText: 'c = 5(4)ˢ',
    explanation: `Step-by-Step Breakdown:
1. Identify the initial value (when s = 0):
   c = 5, so the initial coefficient a = 5.
2. Determine the common growth factor (ratio) between consecutive seconds:
   • 20 / 5 = 4
   • 80 / 20 = 4
   • 320 / 80 = 4
   So the base b = 4.
3. Formulate the exponential model c = a · bˢ:
   c = 5(4)ˢ.
4. Verify with s = 3: c = 5(4³) = 5(64) = 320 (Matches table).

Desmos Shortcut:
Enter the table points in Desmos and run exponential regression y₁ ~ a · b^(x₁).
Desmos yields a = 5, b = 4, so y = 5(4)ˣ.`,
    distractorExplanations: {
      1: 'Swapped initial value and growth factor (used a = 4, b = 5).',
      2: 'Used a linear model (growth is exponential with multiplying factor 4, not adding 15).',
      3: 'Used the value at s = 1 (20) as the initial value.'
    }
  },
  {
    id: 'ch1-q49',
    number: 49,
    exerciseNumber: 2,
    exerciseTitle: 'Periodic Exponential Decay Modeling',
    question: 'Banerji currently owns 6,500 baseball cards. He is gradually selling his collection and estimates that the number of cards he owns will decrease by 20 percent every 6 months. Which of the following functions best models Banerji\'s estimate of the number of baseball cards, B, he will own m months from now?',
    options: [
      'B(m) = 6,500(0.8)^(m/6)',
      'B(m) = 6,500(0.2)^(6m)',
      'B(m) = 6,500(0.2)^(m/6)',
      'B(m) = 6,500(0.8)^(6m)'
    ],
    correctIndex: 0,
    correctAnswerText: 'B(m) = 6,500(0.8)^(m/6)',
    explanation: `Step-by-Step Breakdown:
1. Initial quantity = 6,500 cards.
2. Calculate the decay multiplier:
   Decrease of 20% means 100% - 20% = 80% remaining.
   Multiplier = 1 - 0.20 = 0.8.
3. The decay occurs every 6 months, so the number of 6-month cycles in m months is m / 6.
4. Construct the exponential function:
   B(m) = 6,500 · (0.8)^(m/6).

Desmos Shortcut:
Test m = 6 months (one period):
B(6) = 6500(0.8)¹ = 5200 (a 20% drop from 6500). Option A gives 5200.`,
    distractorExplanations: {
      1: 'Used the rate 0.2 instead of remaining factor 0.8, and multiplied m by 6.',
      2: 'Used 0.2 (which represents an 80% loss) instead of 0.8.',
      3: 'Used 6m instead of m/6, which would decrease by 20% six times every single month.'
    }
  },
  {
    id: 'ch1-q50',
    number: 50,
    exerciseNumber: 2,
    exerciseTitle: 'Cylinder Volume Inversion & Radical Simplification',
    question: 'Cylinder A has a volume of 1,625π cubic inches and a height of 5 inches. What is the diameter, in inches, of cylinder A?',
    options: [
      '10√13',
      '130',
      '√65',
      '5√13'
    ],
    correctIndex: 0,
    correctAnswerText: '10√13',
    explanation: `Step-by-Step Breakdown:
1. Cylinder volume formula: V = π · r² · h.
2. Substitute V = 1,625π and h = 5:
   1,625π = π · r² · 5.
3. Divide both sides by 5π:
   r² = 1,625 / 5 = 325.
4. Solve for the radius r by simplifying the radical:
   r = √325 = √(25 · 13) = 5√13.
5. High-Frequency SAT Trap: The question asks for the DIAMETER, not the radius:
   Diameter = 2r = 2 · (5√13) = 10√13.

Desmos Shortcut:
Calculate r = √(1625 / 5) = √325 ≈ 18.027756.
Diameter = 2 · 18.027756 ≈ 36.0555.
Option A: 10√13 ≈ 36.0555 (Exact Match).`,
    distractorExplanations: {
      1: 'Arithmetic error in radical simplification.',
      2: 'Divided 325 by 5 instead of factoring perfect squares.',
      3: 'Classic SAT Trap: 5√13 is the RADIUS; diameter is 2r = 10√13.'
    }
  }
];
