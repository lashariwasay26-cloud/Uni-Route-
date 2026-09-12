import { MathExerciseQuestion } from './satMathConcepts';

export const CHAPTER_5_QUESTIONS_MODULE_2: MathExerciseQuestion[] = [
  {
    id: 'ch5-q21',
    number: 21,
    exerciseNumber: 2,
    exerciseTitle: 'Module 2: Hard Questions',
    question: 'What number is $35\\%$ of $240$?',
    options: ['78', '80', '84', '90'],
    correctIndex: 2,
    correctAnswerText: '84',
    explanation: `Step-by-Step Solution:
1. **Convert Percentage to Decimal**:
   $$35\\% = 0.35$$

2. **Multiply by the Base**:
   $$\\text{Value} = 0.35 \\times 240$$
   $$\\text{Value} = 84$$

**Tutor Shortcut (Mental Math):**
- $10\\% \\text{ of } 240 = 24$
- $30\\% \\text{ of } 240 = 24 \\times 3 = 72$
- $5\\% \\text{ of } 240 = 12$ (half of $10\\%$)
- Combined: $35\\% = 30\\% + 5\\% = 72 + 12 = 84$.`
  },
  {
    id: 'ch5-q22',
    number: 22,
    exerciseNumber: 2,
    exerciseTitle: 'Module 2: Hard Questions',
    question: 'The number $54$ is what percent of $120$?',
    options: ['40%', '42%', '45%', '48%'],
    correctIndex: 2,
    correctAnswerText: '45%',
    explanation: `Step-by-Step Solution:
1. **Set Up the Percentage Equation**:
   $$\\frac{\\text{Is}}{\\text{Of}} = \\frac{P}{100}$$
   $$\\frac{54}{120} = \\frac{P}{100}$$

2. **Simplify the Fraction**:
   Divide numerator and denominator of $\\frac{54}{120}$ by $6$:
   $$\\frac{9}{20} = \\frac{P}{100}$$

3. **Solve for $P$**:
   $$P = \\frac{9}{20} \\times 100 = 9 \\times 5 = 45\\%$$`
  },
  {
    id: 'ch5-q23',
    number: 23,
    exerciseNumber: 2,
    exerciseTitle: 'Module 2: Hard Questions',
    question: 'If $120\\%$ of $x$ is equal to $72$, what is the value of $50\\%$ of $x$?',
    options: ['25', '30', '35', '40'],
    correctIndex: 1,
    correctAnswerText: '30',
    explanation: `Step-by-Step Solution:
1. **Write the Equation for $x$**:
   $$1.20 \\cdot x = 72$$

2. **Solve for $x$**:
   $$x = \\frac{72}{1.20} = \\frac{720}{12} = 60$$

3. **Calculate $50\\%$ of $x$**:
   $$50\\% \\text{ of } 60 = 0.50 \\times 60 = 30$$

**Tutor Secret:** Set up a quick ratio scaling factor:
If $120\\% \\to 72$, then $10\\% \\to 6$ (by dividing by $12$).
Therefore, $50\\% \\to 6 \\times 5 = 30$. You don't even need to solve for $x$!`
  },
  {
    id: 'ch5-q24',
    number: 24,
    exerciseNumber: 2,
    exerciseTitle: 'Module 2: Hard Questions',
    question: 'A store owner purchases a jacket for $\$80$ and marks up the price by $40\\%$. During a clearance sale, the price is discounted by $25\\%$. What is the final sale price of the jacket?',
    options: ['$80.00', '$82.00', '$84.00', '$86.00'],
    correctIndex: 2,
    correctAnswerText: '$84.00',
    explanation: `Step-by-Step Solution:
1. **Find the Marked-Up Price**:
   Using the single-step multiplier for a $40\\%$ increase:
   $$\\text{Multiplier} = 1 + 0.40 = 1.40$$
   $$\\text{Marked-Up Price} = \\$80 \\times 1.40 = \\$112$$

2. **Apply the Clearance Discount**:
   Using the multiplier for a $25\\%$ decrease:
   $$\\text{Multiplier} = 1 - 0.25 = 0.75$$
   $$\\text{Final Sale Price} = \\$112 \\times 0.75 = \\$84$$

**SAT Tip:** Do NOT subtract percentages. Chaining multipliers is always faster and less prone to errors:
$$\\text{Final Price} = 80 \\times 1.40 \\times 0.75 = 80 \\times 1.05 = \\$84.00$$`
  },
  {
    id: 'ch5-q25',
    number: 25,
    exerciseNumber: 2,
    exerciseTitle: 'Module 2: Hard Questions',
    question: 'The population of a town increased from $25,000$ to $28,500$ over a period of two years. What was the percent increase in population?',
    options: ['12%', '13%', '14%', '15%'],
    correctIndex: 2,
    correctAnswerText: '14%',
    explanation: `Step-by-Step Solution:
1. **Find the Absolute Change**:
   $$\\text{Change} = 28,500 - 25,000 = 3,500$$

2. **Divide by the Original (Initial) Value**:
   $$\\text{Percent Increase} = \\frac{\\text{Change}}{\\text{Original}} \\times 100$$
   $$\\text{Percent Increase} = \\frac{3,500}{25,000} \\times 100$$

3. **Simplify and Compute**:
   $$\\frac{35}{250} \\times 100 = \\frac{35}{2.5} = 14\\%$$`
  },
  {
    id: 'ch5-q26',
    number: 26,
    exerciseNumber: 2,
    exerciseTitle: 'Module 2: Hard Questions',
    question: 'An item of original price $P$ undergoes a price increase of $20\\%$ followed by a price decrease of $20\\%$. Express the final price in terms of $P$.',
    options: ['P', '1.04P', '0.96P', '0.98P'],
    correctIndex: 2,
    correctAnswerText: '0.96P',
    explanation: `Step-by-Step Solution:
1. **Represent the First Change (+20%)**:
   $$\\text{Multiplier}_1 = 1 + 0.20 = 1.20$$

2. **Represent the Second Change (-20%)**:
   $$\\text{Multiplier}_2 = 1 - 0.20 = 0.80$$

3. **Chain the Multipliers Together**:
   $$\\text{Final Price} = P \\times 1.20 \\times 0.80$$
   $$\\text{Final Price} = 0.96P$$

**SAT Secret:** Consecutive percentages NEVER "cancel" out. A $20\\%$ increase followed by a $20\\%$ decrease results in a net **$4\\%$ decrease** (i.e., final price is $96\\%$ of original).`
  },
  {
    id: 'ch5-q27',
    number: 27,
    exerciseNumber: 2,
    exerciseTitle: 'Module 2: Hard Questions',
    question: 'A tax rate on a purchase is $8\\%$. If the total cost including tax is $\$243.00$, what was the pre-tax price of the item?',
    options: ['$220.00', '$225.00', '$228.00', '$230.00'],
    correctIndex: 1,
    correctAnswerText: '$225.00',
    explanation: `Step-by-Step Solution:
1. **Set Up the Reverse Percentage Formula**:
   $$\\text{Total Cost} = \\text{Pre-tax Price} \\times (1 + \\text{tax rate})$$
   $$243 = P \\times (1 + 0.08)$$
   $$1.08P = 243$$

2. **Solve for $P$**:
   $$P = \\frac{243}{1.08}$$

3. **Divide to Find the Original Price**:
   $$P = 225$$

**SAT Pitfall:** Never calculate $8\\%$ of $\$243$ and subtract it ($243 - 19.44 = 223.56$)! The tax is calculated on the **pre-tax price**, not the final total cost.`
  },
  {
    id: 'ch5-q28',
    number: 28,
    exerciseNumber: 2,
    exerciseTitle: 'Module 2: Hard Questions',
    question: 'A student scored $80\\%$ on a test with $40$ questions and $90\\%$ on a test with $60$ questions. What was the student’s overall percentage score across both tests combined?',
    options: ['84%', '85%', '86%', '87%'],
    correctIndex: 2,
    correctAnswerText: '86%',
    explanation: `Step-by-Step Solution:
1. **Calculate Correct Answers on Test 1**:
   $$80\\% \\text{ of } 40 = 0.80 \\times 40 = 32\\text{ questions}$$

2. **Calculate Correct Answers on Test 2**:
   $$90\\% \\text{ of } 60 = 0.90 \\times 60 = 54\\text{ questions}$$

3. **Find the Total Correct Answers**:
   $$\\text{Total Correct} = 32 + 54 = 86\\text{ questions}$$

4. **Find the Total Number of Questions**:
   $$\\text{Total Questions} = 40 + 60 = 100\\text{ questions}$$

5. **Calculate the Overall Combined Percentage**:
   $$\\text{Combined Score} = \\frac{86\\text{ correct}}{100\\text{ total}} \\times 100 = 86\\%$$`
  },
  {
    id: 'ch5-q29',
    number: 29,
    exerciseNumber: 2,
    exerciseTitle: 'Module 2: Hard Questions',
    question: 'A quantity $Q$ is increased by $150\\%$. By what factor was $Q$ multiplied?',
    options: ['1.5', '2.0', '2.5', '3.0'],
    correctIndex: 2,
    correctAnswerText: '2.5',
    explanation: `Step-by-Step Solution:
1. **Apply the Percent Growth Multiplier Formula**:
   $$\\text{Multiplier} = 1 + \\frac{p}{100}$$

2. **Substitute $p = 150$**:
   $$\\text{Multiplier} = 1 + \\frac{150}{100}$$
   $$\\text{Multiplier} = 1 + 1.5 = 2.5$$

3. **Write the Equation**:
   $$\\text{New Value} = 2.5Q$$

**SAT Alert:** An increase **by** $150\\%$ is different from an increase **to** $150\\%$. An increase **by** $150\\%$ means adding $1.5$ times the original value, making the new value $2.5$ times the original.`
  },
  {
    id: 'ch5-q30',
    number: 30,
    exerciseNumber: 2,
    exerciseTitle: 'Module 2: Hard Questions',
    question: 'If $A$ is $25\\%$ greater than $B$, by what percent is $B$ less than $A$?',
    options: ['15%', '20%', '25%', '30%'],
    correctIndex: 1,
    correctAnswerText: '20%',
    explanation: `Step-by-Step Solution:
1. **Choose an Easy Number for the Base ($B$)**:
   Let $B = 100$.

2. **Find $A$ based on the $25\\%$ increase**:
   $$A = B \\times 1.25 = 100 \\times 1.25 = 125$$

3. **Calculate the Difference Relative to $A$**:
   We want to find by what percent $B$ is less than $A$. This means the base of comparison is $A$ ($125$):
   $$\\text{Percent Less} = \\frac{\\text{Difference}}{\\text{Comparing Base (A)}} \\times 100$$
   $$\\text{Percent Less} = \\frac{125 - 100}{125} \\times 100 = \\frac{25}{125} \\times 100$$

4. **Simplify and Compute**:
   $$\\frac{1}{5} \\times 100 = 20\\%$$`
  },
  {
    id: 'ch5-q31',
    number: 31,
    exerciseNumber: 2,
    exerciseTitle: 'Module 2: Hard Questions',
    question: 'The value of an investment decreased by $10\\%$ in Year 1 and increased by $30\\%$ in Year 2. What was the overall net percentage change over the two-year period?',
    options: ['17% decrease', '17% increase', '20% increase', '13% increase'],
    correctIndex: 1,
    correctAnswerText: '17% increase',
    explanation: `Step-by-Step Solution:
1. **Identify the Multipliers**:
   - Year 1 (10% decrease) $\\implies$ Multiplier = $1 - 0.10 = 0.90$
   - Year 2 (30% increase) $\\implies$ Multiplier = $1 + 0.30 = 1.30$

2. **Chain the Multipliers**:
   $$\\text{Combined Multiplier} = 0.90 \\times 1.30 = 1.17$$

3. **Interpret the Combined Multiplier**:
   A combined multiplier of $1.17$ represents a **$17\\%$ increase** (since $1.17 = 1 + 0.17$).

**Tutor Warning:** Never simply add consecutively: $-10\\% + 30\\% = +20\\%$ is a common trap on the SAT. Consecutive changes must always be multiplied!`
  },
  {
    id: 'ch5-q32',
    number: 32,
    exerciseNumber: 2,
    exerciseTitle: 'Module 2: Hard Questions',
    question: 'In a survey of $500$ people, $64\\%$ preferred Brand X. After a marketing campaign, the number of people preferring Brand X increased by $25\\%$. How many total people now prefer Brand X?',
    options: ['360', '380', '400', '420'],
    correctIndex: 2,
    correctAnswerText: '400',
    explanation: `Step-by-Step Solution:
1. **Determine the Initial Number of Brand X Supporters**:
   $$64\\% \\text{ of } 500 = 0.64 \\times 500 = 320\\text{ people}$$

2. **Apply the $25\\%$ Increase on the Supporters**:
   Using the growth multiplier:
   $$\\text{New Count} = 320 \\times (1 + 0.25) = 320 \\times 1.25 = 400\\text{ people}$$

**SAT Trick:** Instead of finding $25\\%$ of $320$ ($80$) and adding it to $320$, notice that multiplying by $1.25$ is the same as adding $\\frac{1}{4}$ of the value:
$$320 + \\frac{320}{4} = 320 + 80 = 400$$`
  },
  {
    id: 'ch5-q33',
    number: 33,
    exerciseNumber: 2,
    exerciseTitle: 'Module 2: Hard Questions',
    question: 'A container holds a solution of $12\\%$ salt by weight. If the total weight of the solution is $500\\text{ grams}$, how many grams of water must evaporate to make it a $20\\%$ salt solution?',
    options: ['150 grams', '180 grams', '200 grams', '250 grams'],
    correctIndex: 2,
    correctAnswerText: '200 grams',
    explanation: `Step-by-Step Solution:
1. **Find the Constant Weight of Salt**:
   Since only water evaporates, the mass of salt remains constant:
   $$\\text{Salt Mass} = 12\\% \\text{ of } 500\\text{ g} = 0.12 \\times 500 = 60\\text{ grams}$$

2. **Set Up the Target Concentration Equation**:
   Let the total weight of the new solution be $W_{\\text{new}}$.
   We want the constant $60\\text{ g}$ of salt to equal $20\\%$ of $W_{\\text{new}}$:
   $$60 = 0.20 \\times W_{\\text{new}}$$

3. **Solve for $W_{\\text{new}}$**:
   $$W_{\\text{new}} = \\frac{60}{0.20} = 300\\text{ grams}$$

4. **Calculate Evaporated Water**:
   $$\\text{Water Evaporated} = \\text{Initial Weight} - \\text{New Weight}$$
   $$\\text{Water Evaporated} = 500\\text{ g} - 300\\text{ g} = 200\\text{ grams}$$`
  },
  {
    id: 'ch5-q34',
    number: 34,
    exerciseNumber: 2,
    exerciseTitle: 'Module 2: Hard Questions',
    question: 'A business owner’s profit was $\$45,000$ in 2024. In 2025, profit dropped by $12\\%$. In 2026, profit increased by $15\\%$ relative to 2025. What was the profit in 2026?',
    options: ['$44,820', '$45,210', '$45,540', '$46,120'],
    correctIndex: 2,
    correctAnswerText: '$45,540',
    explanation: `Step-by-Step Solution:
1. **Calculate the Profit in 2025 (-12%)**:
   $$\\text{2025 Profit} = 45000 \\times (1 - 0.12) = 45000 \\times 0.88 = \\$39,600$$

2. **Calculate the Profit in 2026 (+15%)**:
   $$\\text{2026 Profit} = 39600 \\times (1 + 0.15) = 39600 \\times 1.15 = \\$45,540$$

**Chained Multipliers Method**:
$$\\text{2026 Profit} = 45000 \\times 0.88 \\times 1.15 = 45000 \\times 1.012 = \\$45,540$$`
  },
  {
    id: 'ch5-q35',
    number: 35,
    exerciseNumber: 2,
    exerciseTitle: 'Module 2: Hard Questions',
    question: 'The area of a square is increased by $44\\%$. By what percentage did the length of its side increase?',
    options: ['18%', '20%', '22%', '24%'],
    correctIndex: 1,
    correctAnswerText: '20%',
    explanation: `Step-by-Step Solution:
1. **Identify the Area Relationship**:
   $$\\text{Area} = s^2$$

2. **Apply the Percent Change in Area**:
   A $44\\%$ increase in area means the new area is multiplied by $1.44$:
   $$A_{\\text{new}} = 1.44 \\cdot A_{\\text{old}}$$

3. **Relate Side Lengths to Area**:
   Since area scales by the square of the side length multiplier, we take the square root of the area multiplier to find the side length multiplier:
   $$\\text{Side Multiplier} = \\sqrt{1.44} = 1.20$$

4. **Interpret the Side Multiplier**:
   A side length multiplier of $1.20$ represents exactly a **$20\\%$ increase** (since $1.20 = 1 + 0.20$).`
  },
  {
    id: 'ch5-q36',
    number: 36,
    exerciseNumber: 2,
    exerciseTitle: 'Module 2: Hard Questions',
    question: 'In a company, $40\\%$ of employees are engineers. If $30\\%$ of the engineers hold a master’s degree, what percentage of all employees in the company are engineers with a master’s degree?',
    options: ['10%', '12%', '15%', '18%'],
    correctIndex: 1,
    correctAnswerText: '12%',
    explanation: `Step-by-Step Solution:
1. **Let Total Employees = 100** (highly recommended placeholder strategy).

2. **Find the Number of Engineers**:
   $$40\\% \\text{ of } 100 = 40\\text{ engineers}$$

3. **Find the Number of Engineers with a Master’s Degree**:
   $$30\\% \\text{ of } 40 = 0.30 \\times 40 = 12\\text{ engineers with master's}$$

4. **Convert to Percentage of Total Employees**:
   $$\\frac{12}{100} = 12\\%$$

**Direct Multiplication Method**:
$$0.40 \\times 0.30 = 0.12 = 12\\%$$`
  },
  {
    id: 'ch5-q37',
    number: 37,
    exerciseNumber: 2,
    exerciseTitle: 'Module 2: Hard Questions',
    question: 'A retailer reduces the price of a television by $x\\%$. To restore the television to its original price, by what percentage (in terms of $x$) must the discounted price be increased?',
    options: ['(x / (100 - x))%', '(100x / (100 - x))%', '(x / 100)%', '(100 / x)%'],
    correctIndex: 1,
    correctAnswerText: '(100x / (100 - x))%',
    explanation: `Step-by-Step Solution:
1. **Let the Original Price = 100**.

2. **Find the Discounted Price**:
   $$\\text{Discounted Price} = 100 - x$$

3. **Determine the Required Increase to Go Back to 100**:
   We need to add exactly $x$ to the discounted price ($100 - x$):
   $$\\text{Required Increase} = x$$

4. **Calculate Percentage Increase Relative to Discounted Price**:
   We must calculate the percent increase based on the **discounted price** as the new base:
   $$\\text{Percent Increase} = \\frac{\\text{Required Increase}}{\\text{Discounted Price Base}} \\times 100$$
   $$\\text{Percent Increase} = \\frac{x}{100 - x} \\times 100 = \\left(\\frac{100x}{100 - x}\\right)\\%$$

**Plug In Numbers Check:** Let $x = 20\\%$.
- Discounted price = $80$.
- To go from $80$ back to $100$, we need an increase of $20$.
- Percentage increase = $\\frac{20}{80} \\times 100 = 25\\%$.
- Plug $x = 20$ into formula B: $\\frac{100(20)}{100 - 20} = \\frac{2000}{80} = 25\\%$. Confirmed!`
  },
  {
    id: 'ch5-q38',
    number: 38,
    exerciseNumber: 2,
    exerciseTitle: 'Module 2: Hard Questions',
    question: 'A test score increases from $60$ points to $75$ points. What is the percentage increase?',
    options: ['15%', '20%', '25%', '30%'],
    correctIndex: 2,
    correctAnswerText: '25%',
    explanation: `Step-by-Step Solution:
1. **Find the Increase**:
   $$\\text{Increase} = 75 - 60 = 15\\text{ points}$$

2. **Divide by the Original Base ($60$)**:
   $$\\text{Percent Increase} = \\frac{\\text{Increase}}{\\text{Original Base}} \\times 100$$
   $$\\text{Percent Increase} = \\frac{15}{60} \\times 100$$

3. **Simplify and Compute**:
   $$\\frac{1}{4} \\times 100 = 25\\%$$`
  },
  {
    id: 'ch5-q39',
    number: 39,
    exerciseNumber: 2,
    exerciseTitle: 'Module 2: Hard Questions',
    question: 'An account earns compound interest at $5\\%$ per year. If $\$2,000$ is deposited, what is the account value after $2$ years?',
    options: ['$2,100', '$2,150', '$2,205', '$2,210'],
    correctIndex: 2,
    correctAnswerText: '$2,205',
    explanation: `Step-by-Step Solution:
1. **Apply the Compound Interest Formula**:
   $$A = P(1 + r)^t$$
   Where $P = 2000$, $r = 0.05$, and $t = 2$.

2. **Substitute and Compute**:
   $$A = 2000(1.05)^2$$
   $$A = 2000(1.1025)$$

3. **Calculate Final Total**:
   $$A = 2205$$

**SAT Tip:** Compound interest chains the multiplier over time. Multiply by $1.05$ twice:
- Year 1: $2000 \\times 1.05 = 2100$
- Year 2: $2100 \\times 1.05 = 2205$`
  },
  {
    id: 'ch5-q40',
    number: 40,
    exerciseNumber: 2,
    exerciseTitle: 'Module 2: Hard Questions',
    question: '$30\\%$ of a number $N$ is $12$ greater than $20\\%$ of $N$. What is the value of $N$?',
    options: ['100', '110', '120', '130'],
    correctIndex: 2,
    correctAnswerText: '120',
    explanation: `Step-by-Step Solution:
1. **Translate to an Algebraic Equation**:
   $$0.30N = 0.20N + 12$$

2. **Subtract $0.20N$ from Both Sides**:
   $$0.10N = 12$$

3. **Divide by $0.10$ (or multiply by 10)**:
   $$N = \\frac{12}{0.10} = 120$$`
  }
];
