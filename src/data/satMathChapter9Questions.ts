import { MathExerciseQuestion } from './satMathConcepts';

export const CHAPTER_9_PRACTICE_QUESTIONS: MathExerciseQuestion[] = [
  // ============================================================
  // EXERCISE 1: FOUNDATIONS, ADDITION, TABLES & INDEPENDENCE (Questions 1–15)
  // ============================================================
  {
    id: 'ch9-q1',
    number: 1,
    exerciseNumber: 1,
    exerciseTitle: 'Exercise 1: Basic Probability & Sample Spaces',
    question: 'A fair six-sided die is rolled.\n\nWhat is the probability of rolling an odd number?',
    options: [
      '1/6',
      '1/3',
      '1/2',
      '2/3'
    ],
    correctIndex: 2,
    correctAnswerText: '1/2',
    explanation: `Step-by-Step Probability Calculation:
1. Identify the full sample space $S$ for a fair six-sided die:
   $$S = \\{1, 2, 3, 4, 5, 6\\} \\implies \\text{Total outcomes } n(S) = 6$$

2. Identify the favorable outcomes for the event $E = \\text{"roll an odd number"}$:
   $$E = \\{1, 3, 5\\} \\implies \\text{Favorable outcomes } n(E) = 3$$

3. Apply the basic probability formula:
   $$P(E) = \\frac{\\text{number of favorable outcomes}}{\\text{total number of possible outcomes}} = \\frac{3}{6} = \\frac{1}{2}$$

Teacher's SAT Pro-Tip:
Always list the total sample space before counting favorable outcomes. A fair die has 3 even and 3 odd numbers, making $P(\\text{odd}) = P(\\text{even}) = \\frac{3}{6} = \\frac{1}{2}$.`,
    distractorExplanations: {
      0: '1/6 is the probability of rolling a single specific number (like rolling exactly a 3), not any odd number.',
      1: '1/3 corresponds to only 2 favorable outcomes out of 6 (e.g., rolling a number greater than 4), but there are 3 odd numbers.',
      3: '2/3 corresponds to 4 favorable outcomes out of 6 (e.g., rolling a number greater than 2), not odd numbers.'
    }
  },
  {
    id: 'ch9-q2',
    number: 2,
    exerciseNumber: 1,
    exerciseTitle: 'Exercise 1: Basic Probability & Sample Spaces',
    question: 'A bag contains 7 red balls and 5 blue balls.\n\nOne ball is selected randomly. What is the probability of selecting blue?',
    options: [
      '5/7',
      '5/12',
      '7/12',
      '1/2'
    ],
    correctIndex: 1,
    correctAnswerText: '5/12',
    explanation: `Step-by-Step Probability Calculation:
1. Determine the total number of balls in the bag:
   $$\\text{Total} = 7 \\text{ red} + 5 \\text{ blue} = 12 \\text{ balls}$$

2. Identify the number of favorable outcomes for selecting a blue ball:
   $$\\text{Favorable} = 5 \\text{ blue balls}$$

3. Compute the probability:
   $$P(\\text{blue}) = \\frac{\\text{Number of blue balls}}{\\text{Total number of balls}} = \\frac{5}{12}$$

Teacher's SAT Pro-Tip:
"Always identify TOTAL before FAVORABLE." A classic trap is using the number of red balls (7) as the denominator ($5/7$). The denominator must always be the entire universe (12).`,
    distractorExplanations: {
      0: '5/7 mistakenly puts blue over red (ratio of blue to red) instead of blue over the TOTAL (12).',
      2: '7/12 is the probability of selecting a RED ball, not a blue ball.',
      3: '1/2 assumes an equal number of red and blue balls (e.g., 6 and 6), which is not the case.'
    }
  },
  {
    id: 'ch9-q3',
    number: 3,
    exerciseNumber: 1,
    exerciseTitle: 'Exercise 1: Basic Probability & Sample Spaces',
    question: 'The probability that an event occurs is 0.37.\n\nWhat is the probability that it does NOT occur?',
    options: [
      '0.27',
      '0.37',
      '0.63',
      '0.73'
    ],
    correctIndex: 2,
    correctAnswerText: '0.63',
    explanation: `Step-by-Step Complement Rule:
1. Recall the Master Complement Formula:
   $$P(\\text{not } A) = 1 - P(A)$$

2. Substitute the given probability $P(A) = 0.37$:
   $$P(\\text{not } A) = 1 - 0.37 = 0.63$$

Teacher's SAT Pro-Tip:
The sum of an event and its complement is ALWAYS 1:
$$P(A) + P(\\text{not } A) = 1 \\implies 0.37 + 0.63 = 1.00$$`,
    distractorExplanations: {
      0: '0.27 is an arithmetic subtraction error ($1 - 0.73$ or misaligning decimals).',
      1: '0.37 is the probability that the event DOES occur.',
      3: '0.73 is an arithmetic subtraction error from forgetting to carry/borrow across decimals ($1.10 - 0.37$).'
    }
  },
  {
    id: 'ch9-q4',
    number: 4,
    exerciseNumber: 1,
    exerciseTitle: 'Exercise 1: Basic Probability & Sample Spaces',
    question: 'A spinner is used 500 times and lands on green 215 times.\n\nWhat is the experimental probability of green?',
    options: [
      '0.215',
      '0.43',
      '0.50',
      '2.33'
    ],
    correctIndex: 1,
    correctAnswerText: '0.43',
    explanation: `Step-by-Step Experimental Probability Calculation:
1. Recall the definition of Experimental Probability:
   $$P_{\\text{exp}}(\\text{event}) = \\frac{\\text{Observed frequency}}{\\text{Total number of trials}}$$

2. Substitute the given experimental data:
   $$P_{\\text{exp}}(\\text{green}) = \\frac{215}{500}$$

3. Simplify or convert to a decimal:
   $$\\frac{215}{500} = \\frac{215 \\times 2}{500 \\times 2} = \\frac{430}{1000} = 0.43$$

Teacher's SAT Pro-Tip:
Experimental probability is determined strictly by observed empirical data. Notice that multiplying both numerator and denominator by 2 quickly converts the fraction into tenths/hundredths without requiring a long division!`,
    distractorExplanations: {
      0: '0.215 mistakenly divides 215 by 1,000 instead of the actual trial count 500.',
      2: '0.50 is an arbitrary 50% assumption ignoring the recorded data.',
      3: '2.33 is the inverse division $500 / 215$; probabilities can never exceed 1.0.'
    }
  },
  {
    id: 'ch9-q5',
    number: 5,
    exerciseNumber: 1,
    exerciseTitle: 'Exercise 1: Addition Rule & Venn Reasoning',
    question: 'In a group of 50 students:\n• 22 play soccer.\n• 17 play basketball.\n• 7 play both.\n\nWhat is the probability that a randomly selected student plays soccer or basketball?',
    options: [
      '32/50',
      '39/50',
      '46/50',
      '15/50'
    ],
    correctIndex: 0,
    correctAnswerText: '32/50',
    explanation: `Step-by-Step Inclusion-Exclusion Principle:
1. Identify the components:
   $$\\text{Total students } = 50$$
   $$\\text{Soccer } n(S) = 22$$
   $$\\text{Basketball } n(B) = 17$$
   $$\\text{Both } n(S \\cap B) = 7$$

2. Apply the General Addition Rule to find $n(S \\cup B)$:
   $$n(S \\text{ or } B) = n(S) + n(B) - n(S \\cap B)$$
   $$n(S \\text{ or } B) = 22 + 17 - 7 = 39 - 7 = 32$$

3. Compute the probability:
   $$P(S \\text{ or } B) = \\frac{32}{50}$$

Teacher's SAT Pro-Tip:
SAT Trick: If "OR" events overlap: ADD, then SUBTRACT the overlap. If you simply add $22 + 17 = 39$, the 7 students who play both are counted twice!`,
    distractorExplanations: {
      1: '39/50 is the result of adding 22 + 17 without subtracting the 7 overlapping students.',
      2: '46/50 adds 22 + 17 + 7, erroneously adding the overlap instead of subtracting it.',
      3: '15/50 only counts the students who play soccer exclusively ($22 - 7 = 15$).'
    }
  },
  {
    id: 'ch9-q6',
    number: 6,
    exerciseNumber: 1,
    exerciseTitle: 'Exercise 1: Addition Rule & Venn Reasoning',
    question: 'If:\n• P(A) = 0.45\n• P(B) = 0.30\n• P(A and B) = 0.10\n\nWhat is P(A or B)?',
    options: [
      '0.55',
      '0.65',
      '0.75',
      '0.85'
    ],
    correctIndex: 1,
    correctAnswerText: '0.65',
    explanation: `Step-by-Step General Addition Rule:
1. Recall the Master Union Formula:
   $$P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$$

2. Substitute the given values:
   $$P(A \\text{ or } B) = 0.45 + 0.30 - 0.10$$
   $$P(A \\text{ or } B) = 0.75 - 0.10 = 0.65$$

Teacher's SAT Pro-Tip:
Always verify each step: $P(A) + P(B) = 0.75$, and subtracting the double-counted intersection $0.10$ yields $0.65$.`,
    distractorExplanations: {
      0: '0.55 comes from incorrectly calculating $0.45 + 0.10$ or $0.65 - 0.10$.',
      2: '0.75 is the simple sum $0.45 + 0.30$ forgetting to subtract $P(A \\cap B) = 0.10$.',
      3: '0.85 adds the intersection $0.45 + 0.30 + 0.10$ instead of subtracting it.'
    }
  },
  {
    id: 'ch9-q7',
    number: 7,
    exerciseNumber: 1,
    exerciseTitle: 'Exercise 1: Addition Rule & Venn Reasoning',
    question: 'Two events cannot occur at the same time (they are mutually exclusive).\n\nIf P(A) = 0.28 and P(B) = 0.41, what is P(A or B)?',
    options: [
      '0.13',
      '0.28',
      '0.41',
      '0.69'
    ],
    correctIndex: 3,
    correctAnswerText: '0.69',
    explanation: `Step-by-Step Mutually Exclusive Addition Rule:
1. Since events $A$ and $B$ cannot occur at the same time, they are mutually exclusive (disjoint):
   $$P(A \\text{ and } B) = 0$$

2. Apply the Disjoint Addition Rule:
   $$P(A \\text{ or } B) = P(A) + P(B)$$
   $$P(A \\text{ or } B) = 0.28 + 0.41 = 0.69$$

Teacher's SAT Pro-Tip:
When events are mutually exclusive / disjoint, the intersection is 0, so no subtraction is required: simple addition applies.`,
    distractorExplanations: {
      0: '0.13 is the difference $0.41 - 0.28$, which is irrelevant to union probability.',
      1: '0.28 is simply $P(A)$ alone.',
      2: '0.41 is simply $P(B)$ alone.'
    }
  },
  {
    id: 'ch9-q8',
    number: 8,
    exerciseNumber: 1,
    exerciseTitle: 'Exercise 1: Addition Rule & Venn Reasoning',
    question: 'In a Venn diagram with two events A and B:\n• A only = 14\n• B only = 19\n• A and B = 8\n• Neither = 9\n\nHow many objects are in the entire sample?',
    options: [
      '41',
      '42',
      '50',
      '51'
    ],
    correctIndex: 2,
    correctAnswerText: '50',
    explanation: `Step-by-Step Venn Diagram Partitioning:
1. Recall the Four Important Regions of a two-event Venn Diagram:
   $$\\text{Total Population} = (\\text{A only}) + (\\text{B only}) + (\\text{A and B}) + (\\text{Neither})$$

2. Substitute the non-overlapping values given for each distinct region:
   $$\\text{Total} = 14 + 19 + 8 + 9$$

3. Perform the addition:
   $$14 + 19 = 33$$
   $$33 + 8 = 41$$
   $$41 + 9 = 50$$

Teacher's SAT Pro-Tip:
Because the problem specified "A only" and "B only", the four regions are completely disjoint (non-overlapping). You sum all four partitions directly without subtracting!`,
    distractorExplanations: {
      0: '41 is the sum of only the three regions inside the circles ($14 + 19 + 8$), omitting "Neither" (9).',
      1: '42 is a simple arithmetic miscalculation.',
      3: '51 is an arithmetic calculation error from misadding 9.'
    }
  },
  {
    id: 'ch9-q9',
    number: 9,
    exerciseNumber: 1,
    exerciseTitle: 'Exercise 1: Two-Way Contingency Tables',
    question: 'Use the table below to answer the question:\n\nWhat is the probability that a randomly selected student is in Grade 11?',
    table: {
      title: 'Student Participation in Music by Grade Level',
      headers: ['Grade Level', 'Music', 'No Music', 'Total'],
      rows: [
        ['Grade 10', '16', '14', '30'],
        ['Grade 11', '21', '9', '30'],
        ['Total', '37', '23', '60']
      ]
    },
    options: [
      '9/60',
      '21/60',
      '30/60',
      '37/60'
    ],
    correctIndex: 2,
    correctAnswerText: '30/60',
    explanation: `Step-by-Step Marginal Probability from a Table:
1. Identify the denominator: No condition is specified ("a randomly selected student"), so the denominator is the Grand Total:
   $$\\text{Grand Total} = 60$$

2. Identify the numerator: Look at the row total for "Grade 11":
   $$\\text{Total Grade 11 students} = 30$$

3. Compute the marginal probability:
   $$P(\\text{Grade 11}) = \\frac{30}{60} = \\frac{1}{2}$$

Teacher's SAT Pro-Tip:
"Use the GRAND TOTAL as denominator when no condition is given."`,
    distractorExplanations: {
      0: '9/60 is the probability of selecting a Grade 11 student who does NOT participate in music.',
      1: '21/60 is the probability of selecting a Grade 11 student who participates in music.',
      3: '37/60 is the marginal probability of selecting ANY student who participates in music (regardless of grade).'
    }
  },
  {
    id: 'ch9-q10',
    number: 10,
    exerciseNumber: 1,
    exerciseTitle: 'Exercise 1: Two-Way Contingency Tables',
    question: 'Using the same table, what is P(Music | Grade 10)?',
    table: {
      title: 'Student Participation in Music by Grade Level',
      headers: ['Grade Level', 'Music', 'No Music', 'Total'],
      rows: [
        ['Grade 10', '16', '14', '30'],
        ['Grade 11', '21', '9', '30'],
        ['Total', '37', '23', '60']
      ]
    },
    options: [
      '16/60',
      '16/30',
      '30/60',
      '37/60'
    ],
    correctIndex: 1,
    correctAnswerText: '16/30',
    explanation: `Step-by-Step Conditional Probability from Table:
1. Interpret the conditional notation $P(\\text{Music} \\mid \\text{Grade 10})$:
   The phrase after the vertical bar ("Grade 10") restricts our universe to Grade 10 students only.

2. Identify the restricted denominator:
   $$\\text{Total Grade 10 students} = 30$$

3. Identify the favorable numerator within Grade 10:
   $$\\text{Grade 10 students in Music} = 16$$

4. Compute the conditional probability:
   $$P(\\text{Music} \\mid \\text{Grade 10}) = \\frac{16}{30}$$

Teacher's SAT Pro-Tip:
CRITICAL SAT RULE: For conditional probability, DENOMINATOR = GIVEN GROUP.
Never use the grand total (60) when a specific row or column is given!`,
    distractorExplanations: {
      0: '16/60 mistakenly divides by the grand total (60) instead of restricting to Grade 10 (30).',
      2: '30/60 is the probability of being in Grade 10 overall ($P(\\text{Grade 10})$).',
      3: '37/60 is the overall probability of being in Music ($P(\\text{Music})$).'
    }
  },
  {
    id: 'ch9-q11',
    number: 11,
    exerciseNumber: 1,
    exerciseTitle: 'Exercise 1: Two-Way Contingency Tables',
    question: 'Using the same table, what is P(Grade 11 | Music)?',
    table: {
      title: 'Student Participation in Music by Grade Level',
      headers: ['Grade Level', 'Music', 'No Music', 'Total'],
      rows: [
        ['Grade 10', '16', '14', '30'],
        ['Grade 11', '21', '9', '30'],
        ['Total', '37', '23', '60']
      ]
    },
    options: [
      '21/30',
      '21/37',
      '30/60',
      '37/60'
    ],
    correctIndex: 1,
    correctAnswerText: '21/37',
    explanation: `Step-by-Step Conditional Probability Calculation:
1. Interpret the conditional statement $P(\\text{Grade 11} \\mid \\text{Music})$:
   The given condition is "Music", which restricts our universe to the "Music" column!

2. Find the column total for "Music" (Denominator):
   $$\\text{Total Music students} = 37$$

3. Find the number of Grade 11 students within that Music column (Numerator):
   $$\\text{Grade 11 students in Music} = 21$$

4. Calculate the conditional probability:
   $$P(\\text{Grade 11} \\mid \\text{Music}) = \\frac{21}{37}$$

Teacher's SAT Pro-Tip:
Notice the order: $P(A \\mid B) \\neq P(B \\mid A)$.
• $P(\\text{Music} \\mid \\text{Grade 11}) = 21/30$
• $P(\\text{Grade 11} \\mid \\text{Music}) = 21/37$
Always place the condition after the bar into the denominator!`,
    distractorExplanations: {
      0: '21/30 is $P(\\text{Music} \\mid \\text{Grade 11})$, which conditions on Grade 11 instead of Music.',
      2: '30/60 is $P(\\text{Grade 11})$, the overall probability of being in Grade 11.',
      3: '37/60 is $P(\\text{Music})$, the overall probability of being in Music.'
    }
  },
  {
    id: 'ch9-q12',
    number: 12,
    exerciseNumber: 1,
    exerciseTitle: 'Exercise 1: Independent & Dependent Events',
    question: 'A fair coin is flipped twice.\n\nWhat is the probability of getting tails on both flips?',
    options: [
      '1/2',
      '1/3',
      '1/4',
      '1/8'
    ],
    correctIndex: 2,
    correctAnswerText: '1/4',
    explanation: `Step-by-Step Independent Events Calculation:
1. Coin flips are independent events because the result of the first flip does not change the probability of the second flip.

2. Identify the individual probabilities:
   $$P(T_1) = \\frac{1}{2}$$
   $$P(T_2) = \\frac{1}{2}$$

3. Apply the Multiplication Rule for Independent Events:
   $$P(T_1 \\text{ and } T_2) = P(T_1) \\times P(T_2) = \\frac{1}{2} \\times \\frac{1}{2} = \\frac{1}{4}$$

Teacher's SAT Pro-Tip:
The full sample space is $\\{HH, HT, TH, TT\\}$. Only 1 out of 4 equally likely outcomes is $TT$, confirming $P = 1/4$.`,
    distractorExplanations: {
      0: '1/2 is the probability of tails on a single flip, not both flips.',
      1: '1/3 is a common misconception assuming the 3 unordered outcomes {2 heads, 1 head 1 tail, 2 tails} are equally likely.',
      3: '1/8 is the probability of getting tails on THREE flips ($(1/2)^3$).'
    }
  },
  {
    id: 'ch9-q13',
    number: 13,
    exerciseNumber: 1,
    exerciseTitle: 'Exercise 1: Independent & Dependent Events',
    question: 'A die is rolled twice.\n\nWhat is the probability of rolling a 6 both times?',
    options: [
      '1/6',
      '1/12',
      '1/36',
      '1/42'
    ],
    correctIndex: 2,
    correctAnswerText: '1/36',
    explanation: `Step-by-Step Multiplication Rule:
1. The two die rolls are independent events.
2. Probability of rolling a 6 on the first roll:
   $$P(6_1) = \\frac{1}{6}$$
3. Probability of rolling a 6 on the second roll:
   $$P(6_2) = \\frac{1}{6}$$
4. Multiply the probabilities:
   $$P(6_1 \\text{ and } 6_2) = \\frac{1}{6} \\times \\frac{1}{6} = \\frac{1}{36}$$

Teacher's SAT Pro-Tip:
There are $6 \\times 6 = 36$ total outcomes when rolling two dice. Only one outcome is $(6, 6)$, giving $1/36$.`,
    distractorExplanations: {
      0: '1/6 is the probability of rolling a 6 on just one roll.',
      1: '1/12 comes from adding $1/6 + 1/6 = 2/6 = 1/3$ and misdividing, or multiplying $6 \\times 2$ in denominator.',
      3: '1/42 is an arithmetic miscalculation ($6 \\times 7$).'
    }
  },
  {
    id: 'ch9-q14',
    number: 14,
    exerciseNumber: 1,
    exerciseTitle: 'Exercise 1: Independent & Dependent Events',
    question: 'A bag contains 5 red balls and 4 blue balls.\n\nTwo balls are drawn WITHOUT replacement. What is the probability that both are blue?',
    options: [
      '1/9',
      '4/9',
      '1/6',
      '3/8'
    ],
    correctIndex: 2,
    correctAnswerText: '1/6',
    explanation: `Step-by-Step Dependent Probability Calculation:
1. Determine the total balls at the start:
   $$\\text{Total} = 5 + 4 = 9 \\text{ balls}$$

2. Probability that the first ball is blue:
   $$P(B_1) = \\frac{4}{9}$$

3. Since the selection is WITHOUT replacement, the bag now contains 8 total balls and 3 blue balls:
   $$P(B_2 \\mid B_1) = \\frac{3}{8}$$

4. Apply the General Multiplication Rule for Dependent Events:
   $$P(B_1 \\text{ and } B_2) = P(B_1) \\times P(B_2 \\mid B_1) = \\frac{4}{9} \\times \\frac{3}{8} = \\frac{12}{72} = \\frac{1}{6}$$

Teacher's SAT Pro-Tip:
"WITHOUT REPLACEMENT usually changes probabilities $\\to$ DEPENDENT."
Always reduce the numerator and denominator by 1 for the second pick!`,
    distractorExplanations: {
      0: '1/9 is an incorrect simplification or arbitrary fraction.',
      1: '4/9 is the probability of selecting blue on just the first draw.',
      3: '3/8 is the conditional probability of the second ball being blue given that the first was blue, omitting the first draw.'
    }
  },
  {
    id: 'ch9-q15',
    number: 15,
    exerciseNumber: 1,
    exerciseTitle: 'Exercise 1: Independent & Dependent Events',
    question: 'Which situation is most clearly dependent?',
    options: [
      'Flipping a coin twice',
      'Rolling a die twice',
      'Drawing two cards without replacement',
      'Choosing a random number twice with replacement'
    ],
    correctIndex: 2,
    correctAnswerText: 'Drawing two cards without replacement',
    explanation: `Step-by-Step Conceptual Analysis:
1. Recall the definition of Dependent Events:
   Events are dependent when the outcome of the first event alters the probability of the second event.

2. Analyze each choice:
   • Coin flips: The coin has no memory ($P(H) = 1/2$ always) $\\to$ Independent.
   • Die rolls: Separate rolls do not influence each other $\\to$ Independent.
   • Random number with replacement: The pool resets completely $\\to$ Independent.
   • Drawing cards WITHOUT replacement: Removing a card reduces both the favorable cards and the total deck count (from 52 to 51), directly altering the second probability $\\to$ DEPENDENT.

Teacher's SAT Pro-Tip:
Memory Trigger:
• WITH REPLACEMENT $\\to$ Independent
• WITHOUT REPLACEMENT $\\to$ Dependent`,
    distractorExplanations: {
      0: 'Coin flips are independent; past flips do not affect future flips.',
      1: 'Die rolls are independent.',
      3: 'Selecting with replacement restores the original state, preserving independence.'
    }
  },

  // ============================================================
  // EXERCISE 2: CONDITIONAL, TREE DIAGRAMS & COMBINATORICS (Questions 16–30)
  // ============================================================
  {
    id: 'ch9-q16',
    number: 16,
    exerciseNumber: 2,
    exerciseTitle: 'Exercise 2: Advanced Independence & Conditional Probability',
    question: 'Suppose P(A) = 0.6 and P(B) = 0.4.\n\nIf A and B are independent, what is P(A and B)?',
    options: [
      '0.10',
      '0.24',
      '0.40',
      '1.00'
    ],
    correctIndex: 1,
    correctAnswerText: '0.24',
    explanation: `Step-by-Step Multiplication Rule for Independent Events:
1. For independent events, the probability of both occurring is the product of their individual probabilities:
   $$P(A \\text{ and } B) = P(A) \\times P(B)$$

2. Substitute the given values:
   $$P(A \\text{ and } B) = 0.6 \\times 0.4 = 0.24$$

Teacher's SAT Pro-Tip:
Word Clue: "AND" in probability translates to multiplication ($0.6 \\times 0.4 = 0.24$).`,
    distractorExplanations: {
      0: '0.10 is an arbitrary number.',
      2: '0.40 is simply $P(B)$ alone.',
      3: '1.00 is the sum $0.6 + 0.4$, which confuses "AND" (multiplication) with mutually exclusive "OR" (addition).'
    }
  },
  {
    id: 'ch9-q17',
    number: 17,
    exerciseNumber: 2,
    exerciseTitle: 'Exercise 2: Advanced Independence & Conditional Probability',
    question: 'Suppose:\n• P(A) = 0.5\n• P(B) = 0.8\n• P(A and B) = 0.4\n\nAre A and B independent?',
    options: [
      'Yes',
      'No',
      'Impossible to determine',
      'Only if A occurs first'
    ],
    correctIndex: 0,
    correctAnswerText: 'Yes',
    explanation: `Step-by-Step Independence Test:
1. Recall the standard algebraic test for independence:
   $$P(A) \\times P(B) = P(A \\text{ and } B)$$

2. Evaluate the product of the marginal probabilities:
   $$P(A) \\times P(B) = 0.5 \\times 0.8 = 0.40$$

3. Compare this product with the given joint probability:
   $$P(A \\text{ and } B) = 0.40$$
   $$\\text{Since } 0.40 = 0.40, \\text{ the condition holds strictly.}$$

4. Therefore, events $A$ and $B$ are INDEPENDENT.

Teacher's SAT Pro-Tip:
Table 3 Independence Rule: If $P(A)P(B) = P(A \\text{ and } B)$, the events are mathematically independent. Never guess independence based on intuition; always test the equation!`,
    distractorExplanations: {
      1: 'No is incorrect because $0.5 \\times 0.8 = 0.4$ exactly matches $P(A \\text{ and } B)$.',
      2: 'The given numerical data provides sufficient information to test the independence formula.',
      3: 'Independence is a symmetric mathematical property ($P(A \\cap B) = P(B \\cap A)$); chronological order is irrelevant.'
    }
  },
  {
    id: 'ch9-q18',
    number: 18,
    exerciseNumber: 2,
    exerciseTitle: 'Exercise 2: Advanced Independence & Conditional Probability',
    question: 'If P(A and B) = 0.18 and P(B) = 0.60, what is P(A | B)?',
    options: [
      '0.18',
      '0.30',
      '0.42',
      '0.78'
    ],
    correctIndex: 1,
    correctAnswerText: '0.30',
    explanation: `Step-by-Step Conditional Probability Formula:
1. Recall the formal definition of conditional probability:
   $$P(A \\mid B) = \\frac{P(A \\text{ and } B)}{P(B)}$$

2. Substitute the given values into the formula:
   $$P(A \\mid B) = \\frac{0.18}{0.60}$$

3. Simplify the fraction:
   $$\\frac{0.18}{0.60} = \\frac{18}{60} = \\frac{3}{10} = 0.30$$

Teacher's SAT Pro-Tip:
The Denominator Trick: In $P(A \\mid B)$, "Only B is being considered," so $P(B) = 0.60$ is placed directly in the denominator.`,
    distractorExplanations: {
      0: '0.18 is the joint probability $P(A \\text{ and } B)$, not the conditional probability.',
      2: '0.42 is the difference $0.60 - 0.18$.',
      3: '0.78 is the sum $0.60 + 0.18$.'
    }
  },
  {
    id: 'ch9-q19',
    number: 19,
    exerciseNumber: 2,
    exerciseTitle: 'Exercise 2: Advanced Independence & Conditional Probability',
    question: 'A class has 24 students.\n• 15 are members of the science club.\n• Of those 15 students, 9 also play tennis.\n\nWhat is the probability that a randomly selected science club member plays tennis?',
    options: [
      '9/24',
      '9/15',
      '15/24',
      '15/9'
    ],
    correctIndex: 1,
    correctAnswerText: '9/15',
    explanation: `Step-by-Step Restricted Subgroup Analysis:
1. Identify the given subgroup:
   The question asks for the probability that a "randomly selected science club member" plays tennis.
   This is a conditional probability: $P(\\text{Tennis} \\mid \\text{Science Club})$.

2. Determine the restricted denominator:
   $$\\text{Total Science Club members} = 15$$

3. Determine the favorable numerator within the Science Club:
   $$\\text{Science Club members who play tennis} = 9$$

4. Compute the probability:
   $$P(\\text{Tennis} \\mid \\text{Science Club}) = \\frac{9}{15} = \\frac{3}{5}$$

Teacher's SAT Pro-Tip:
Look for phrasing like "selected from [Group X]" or "among [Group X]". The specified subgroup (15 science club members) becomes the entire denominator, NOT the total class size of 24.`,
    distractorExplanations: {
      0: '9/24 mistakenly uses the entire class of 24 as the denominator instead of the science club subgroup.',
      2: '15/24 is the probability that a student is in the science club ($P(\\text{Science Club})$).',
      3: '15/9 is inverted and yields a value greater than 1, which is impossible for probability.'
    }
  },
  {
    id: 'ch9-q20',
    number: 20,
    exerciseNumber: 2,
    exerciseTitle: 'Exercise 2: Advanced Independence & Conditional Probability',
    question: 'The probability that a student owns a bicycle is 0.55.\nThe probability that a student owns a bicycle and plays tennis is 0.22.\n\nWhat is the probability that the student plays tennis given that the student owns a bicycle?',
    options: [
      '0.22',
      '0.33',
      '0.40',
      '0.77'
    ],
    correctIndex: 2,
    correctAnswerText: '0.40',
    explanation: `Step-by-Step Conditional Probability Calculation:
1. Identify the given probabilities:
   $$P(\\text{Bicycle}) = 0.55$$
   $$P(\\text{Bicycle and Tennis}) = 0.22$$

2. Apply the Conditional Probability Formula:
   $$P(\\text{Tennis} \\mid \\text{Bicycle}) = \\frac{P(\\text{Tennis and Bicycle})}{P(\\text{Bicycle})}$$

3. Substitute and compute:
   $$P(\\text{Tennis} \\mid \\text{Bicycle}) = \\frac{0.22}{0.55} = \\frac{22}{55} = \\frac{2}{5} = 0.40$$

Teacher's SAT Pro-Tip:
Word Clue: "GIVEN THAT the student owns a bicycle" signals conditional probability. The condition (bicycle = 0.55) goes in the denominator!`,
    distractorExplanations: {
      0: '0.22 is $P(\\text{Bicycle and Tennis})$.',
      1: '0.33 is the difference $0.55 - 0.22$.',
      3: '0.77 is the sum $0.55 + 0.22$.'
    }
  },
  {
    id: 'ch9-q21',
    number: 21,
    exerciseNumber: 2,
    exerciseTitle: 'Exercise 2: Tree Diagrams & Multi-Stage Selections',
    question: 'A box contains 4 red and 6 blue balls.\n\nTwo balls are selected WITHOUT replacement. What is the probability of selecting red followed by blue?',
    options: [
      '1/5',
      '4/15',
      '2/5',
      '3/10'
    ],
    correctIndex: 1,
    correctAnswerText: '4/15',
    explanation: `Step-by-Step Tree Diagram Branch Calculation:
1. Determine the total balls at the start:
   $$\\text{Total} = 4 \\text{ red} + 6 \\text{ blue} = 10 \\text{ balls}$$

2. First selection (Red):
   $$P(R_1) = \\frac{4}{10} = \\frac{2}{5}$$

3. Second selection (Blue without replacement):
   Since one red was removed, 9 balls remain, of which 6 are blue:
   $$P(B_2 \\mid R_1) = \\frac{6}{9} = \\frac{2}{3}$$

4. Multiply along the branch:
   $$P(R_1 \\text{ then } B_2) = \\frac{4}{10} \\times \\frac{6}{9} = \\frac{24}{90} = \\frac{4}{15}$$

Teacher's SAT Pro-Tip:
Tree Diagram Memory: "ALONG = MULTIPLY; ACROSS = ADD."
Multiplying along the Red $\\to$ Blue path gives $\\frac{4}{10} \\times \\frac{6}{9} = \\frac{4}{15}$.`,
    distractorExplanations: {
      0: '1/5 is $2/10$, an arithmetic error.',
      2: '2/5 is the probability of red on the first pick alone ($4/10$).',
      3: '3/10 is $(4/10) \\times (6/10) = 24/100$, which erroneously assumes WITH replacement.'
    }
  },
  {
    id: 'ch9-q22',
    number: 22,
    exerciseNumber: 2,
    exerciseTitle: 'Exercise 2: Tree Diagrams & Multi-Stage Selections',
    question: 'A fair coin is flipped three times.\n\nWhat is the probability of getting exactly three heads?',
    options: [
      '1/2',
      '1/4',
      '1/6',
      '1/8'
    ],
    correctIndex: 3,
    correctAnswerText: '1/8',
    explanation: `Step-by-Step Compound Independent Events:
1. Each coin flip has $P(H) = \\frac{1}{2}$, and all three flips are independent.

2. Apply the multiplication rule for 3 independent trials:
   $$P(HHH) = P(H_1) \\times P(H_2) \\times P(H_3) = \\left(\\frac{1}{2}\\right)^3 = \\frac{1}{8}$$

3. Verify with the full sample space of 8 equally likely outcomes:
   $$S = \\{HHH, HHT, HTH, HTT, THH, THT, TTH, TTT\\}$$
   Only 1 out of 8 outcomes is $HHH$, confirming $P = 1/8$.

Teacher's SAT Pro-Tip:
Total outcomes for $n$ coin flips is $2^n$. For 3 flips, $2^3 = 8$ total outcomes.`,
    distractorExplanations: {
      0: '1/2 is the probability of heads on a single flip.',
      1: '1/4 is the probability of 2 consecutive heads ($(1/2)^2$).',
      2: '1/6 erroneously multiplies $2 \\times 3 = 6$ in the denominator instead of raising 2 to the 3rd power ($2^3 = 8$).'
    }
  },
  {
    id: 'ch9-q23',
    number: 23,
    exerciseNumber: 2,
    exerciseTitle: 'Exercise 2: Tree Diagrams & Multi-Stage Selections',
    question: 'A fair coin is flipped four times.\n\nWhat is the probability of getting at least one head?',
    options: [
      '1/16',
      '1/4',
      '3/4',
      '15/16'
    ],
    correctIndex: 3,
    correctAnswerText: '15/16',
    explanation: `Step-by-Step Complement Method ("At Least One"):
1. Recall the SAT Master Shortcut for "At Least One":
   $$P(\\text{at least one head}) = 1 - P(\\text{no heads}) = 1 - P(\\text{all tails})$$

2. Compute the probability of getting all tails on 4 flips:
   $$P(\\text{all tails}) = \\left(\\frac{1}{2}\\right)^4 = \\frac{1}{16}$$

3. Subtract from 1:
   $$P(\\text{at least one head}) = 1 - \\frac{1}{16} = \\frac{15}{16}$$

Teacher's SAT Pro-Tip:
SAT SHORTCUT: AT LEAST ONE $\\to$ think $1 - \\text{NONE}$.
Calculating 1 head + 2 heads + 3 heads + 4 heads directly requires 4 separate combination calculations, whereas $1 - P(\\text{all tails})$ takes 5 seconds!`,
    distractorExplanations: {
      0: '1/16 is the probability of getting NO heads (all 4 tails), the exact opposite of what was asked.',
      1: '1/4 is $(1/2)^2$ or an arbitrary estimate.',
      2: '3/4 is $1 - 1/4$, corresponding to 2 flips instead of 4.'
    }
  },
  {
    id: 'ch9-q24',
    number: 24,
    exerciseNumber: 2,
    exerciseTitle: 'Exercise 2: Tree Diagrams & Multi-Stage Selections',
    question: 'A student randomly guesses on two multiple-choice questions.\n• The first question has 4 choices.\n• The second question has 5 choices.\n\nWhat is the probability of getting both correct?',
    options: [
      '1/9',
      '1/20',
      '1/10',
      '2/9'
    ],
    correctIndex: 1,
    correctAnswerText: '1/20',
    explanation: `Step-by-Step Independent Trial Guessing:
1. Probability of guessing Question 1 correctly (1 correct choice out of 4):
   $$P(Q_1) = \\frac{1}{4}$$

2. Probability of guessing Question 2 correctly (1 correct choice out of 5):
   $$P(Q_2) = \\frac{1}{5}$$

3. Since the guesses are independent, multiply the probabilities:
   $$P(Q_1 \\text{ and } Q_2) = \\frac{1}{4} \\times \\frac{1}{5} = \\frac{1}{20}$$

Teacher's SAT Pro-Tip:
Total possible answer pairs is $4 \\times 5 = 20$. Exactly 1 pair has both correct answers, yielding $1/20$.`,
    distractorExplanations: {
      0: '1/9 incorrectly adds the denominators $4 + 5 = 9$ instead of multiplying $4 \\times 5 = 20$.',
      2: '1/10 comes from an arithmetic error.',
      3: '2/9 adds the numerators and denominators ($1/4 + 1/5 \\to 2/9$).'
    }
  },
  {
    id: 'ch9-q25',
    number: 25,
    exerciseNumber: 2,
    exerciseTitle: 'Exercise 2: Combinatorics, Permutations & Combinations',
    question: 'A restaurant offers:\n• 4 main dishes\n• 3 side dishes\n• 2 drinks\n\nHow many different meals are possible if one of each is selected?',
    options: [
      '9',
      '12',
      '24',
      '36'
    ],
    correctIndex: 2,
    correctAnswerText: '24',
    explanation: `Step-by-Step Fundamental Counting Principle:
1. Recall the Fundamental Counting Principle:
   If there are $m$ ways to make a first choice, $n$ ways for a second choice, and $p$ ways for a third choice, the total number of combined options is:
   $$\\text{Total Combinations} = m \\times n \\times p$$

2. Substitute the given numbers of options:
   $$\\text{Meals} = 4 \\times 3 \\times 2$$

3. Multiply:
   $$4 \\times 3 = 12$$
   $$12 \\times 2 = 24$$

Teacher's SAT Pro-Tip:
Table 4 Counting Rule: Multiple independent choices $\\to$ MULTIPLY choices. Never add the categories ($4 + 3 + 2 = 9$)!`,
    distractorExplanations: {
      0: '9 incorrectly adds the choices ($4 + 3 + 2 = 9$) instead of multiplying them.',
      1: '12 only multiplies main and sides ($4 \\times 3$), omitting the 2 drink choices.',
      3: '36 is an arithmetic miscalculation ($4 \\times 3 \\times 3$).'
    }
  },
  {
    id: 'ch9-q26',
    number: 26,
    exerciseNumber: 2,
    exerciseTitle: 'Exercise 2: Combinatorics, Permutations & Combinations',
    question: 'Six students are available. Two different leadership positions are assigned (e.g., President and Vice President).\n\nHow many possible assignments are there?',
    options: [
      '12',
      '15',
      '30',
      '36'
    ],
    correctIndex: 2,
    correctAnswerText: '30',
    explanation: `Step-by-Step Permutation (Order Matters):
1. Determine if order matters:
   Because the two positions are distinct (e.g., President vs Vice President), assigning Student A as President and Student B as Vice President is different from assigning B as President and A as Vice President.
   $$\\text{Order MATTERS } \\implies \\text{Permutation } (_nP_r)$$

2. Use the Fundamental Counting Principle:
   $$\\text{Choices for Position 1} = 6$$
   $$\\text{Choices for Position 2} = 5$$
   $$\\text{Total Assignments} = 6 \\times 5 = 30$$

3. Or apply the permutation formula:
   $$_6P_2 = \\frac{6!}{(6-2)!} = \\frac{6!}{4!} = 6 \\times 5 = 30$$

Teacher's SAT Pro-Tip:
SAT SHORTCUT:
• ORDER matters $\\to$ Permutation ($6 \\times 5 = 30$)
• ORDER doesn't matter $\\to$ Combination ($30 / 2 = 15$)`,
    distractorExplanations: {
      0: '12 is $6 \\times 2$.',
      1: '15 is the combination $_6C_2 = 15$, which erroneously assumes order does NOT matter.',
      3: '36 is $6^2 = 6 \\times 6$, which would allow the same student to hold both positions simultaneously.'
    }
  },
  {
    id: 'ch9-q27',
    number: 27,
    exerciseNumber: 2,
    exerciseTitle: 'Exercise 2: Combinatorics, Permutations & Combinations',
    question: 'Six students are available. Three are selected to form an unranked committee.\n\nHow many different committees are possible?',
    options: [
      '18',
      '20',
      '60',
      '120'
    ],
    correctIndex: 1,
    correctAnswerText: '20',
    explanation: `Step-by-Step Combination (Order Does Not Matter):
1. Determine if order matters:
   A committee of students $\\{A, B, C\\}$ is the exact same committee as $\\{C, B, A\\}$.
   $$\\text{Order DOES NOT matter } \\implies \\text{Combination } (_nC_r)$$

2. Apply the Combination Formula $_nC_r = \\frac{n!}{r!(n-r)!}$:
   $$_6C_3 = \\frac{6!}{3!(6-3)!} = \\frac{6 \\times 5 \\times 4}{3 \\times 2 \\times 1}$$

3. Simplify:
   $$_6C_3 = \\frac{120}{6} = 20$$

Teacher's SAT Pro-Tip:
Trap 10 Alert: Committees, groups, and teams have no ranks, so order does NOT matter. Always divide by $r!$ ($3! = 6$) to eliminate duplicate permutations!`,
    distractorExplanations: {
      0: '18 is $6 \\times 3$.',
      2: '60 is $(6 \\times 5 \\times 4) / 2$.',
      3: '120 is the permutation $_6P_3 = 6 \\times 5 \\times 4 = 120$, which fails to divide by $3! = 6$.'
    }
  },
  {
    id: 'ch9-q28',
    number: 28,
    exerciseNumber: 2,
    exerciseTitle: 'Exercise 2: Combinatorics, Permutations & Combinations',
    question: 'A box contains 5 red and 7 blue balls (total 12 balls).\n\nThree balls are selected without replacement. Which expression represents the probability that all three selected balls are red?',
    options: [
      '(5/12)(4/11)(3/10)',
      '(5/12)(5/12)(5/12)',
      '(3/12)(4/11)(5/10)',
      '5/12 + 4/11 + 3/10'
    ],
    correctIndex: 0,
    correctAnswerText: '(5/12)(4/11)(3/10)',
    explanation: `Step-by-Step Multi-Stage Selection Without Replacement:
1. Initial state: 5 red balls out of 12 total balls.
   $$P(R_1) = \\frac{5}{12}$$

2. Second selection (after 1 red is removed): 4 red balls remaining out of 11 total balls.
   $$P(R_2 \\mid R_1) = \\frac{4}{11}$$

3. Third selection (after 2 red are removed): 3 red balls remaining out of 10 total balls.
   $$P(R_3 \\mid R_1 \\cap R_2) = \\frac{3}{10}$$

4. Multiply the conditional probabilities:
   $$P(R_1 \\text{ and } R_2 \\text{ and } R_3) = \\left(\\frac{5}{12}\\right)\\left(\\frac{4}{11}\\right)\\left(\\frac{3}{10}\\right)$$

Teacher's SAT Pro-Tip:
Without replacement causes BOTH the favorable count (numerator) and total count (denominator) to decrease by 1 at each sequential step.`,
    distractorExplanations: {
      1: '(5/12)(5/12)(5/12) is the probability WITH replacement.',
      2: '(3/12)(4/11)(5/10) inverts the numerators.',
      3: '5/12 + 4/11 + 3/10 erroneously adds probabilities instead of multiplying them.'
    }
  },
  {
    id: 'ch9-q29',
    number: 29,
    exerciseNumber: 2,
    exerciseTitle: 'Exercise 2: Mixed SAT Challenge',
    question: 'A machine has a 0.25 probability of producing a defective item.\nAssume each item produced is independent.\n\nWhat is the probability that at least one of 3 randomly selected items is defective?',
    options: [
      '0.015625',
      '0.25',
      '0.421875',
      '0.578125'
    ],
    correctIndex: 3,
    correctAnswerText: '0.578125',
    explanation: `Step-by-Step SAT Challenge Solution:
1. Identify the probability of a single failure (non-defective item):
   $$P(\\text{defective}) = 0.25$$
   $$P(\\text{non-defective}) = 1 - 0.25 = 0.75$$

2. Apply the "At Least One" Master Rule:
   $$P(\\text{at least one defective}) = 1 - P(\\text{no defective items in 3 trials})$$

3. Calculate $P(\\text{all 3 non-defective})$ for 3 independent items:
   $$P(\\text{no defective}) = (0.75)^3 = 0.421875$$

4. Subtract from 1:
   $$P(\\text{at least one defective}) = 1 - 0.421875 = 0.578125$$

Teacher's SAT Pro-Tip:
Trap 6 Alert:
Option C ($0.421875$) is the probability that NONE of the items are defective. Always remember to complete the final subtraction: $1 - 0.421875 = 0.578125$!`,
    distractorExplanations: {
      0: '0.015625 is the probability that ALL THREE items are defective ($(0.25)^3$).',
      1: '0.25 is the probability for a single item.',
      2: '0.421875 is the probability that NONE of the 3 items are defective ($(0.75)^3$), forgetting the step $1 - P(\\text{none})$.'
    }
  },
  {
    id: 'ch9-q30',
    number: 30,
    exerciseNumber: 2,
    exerciseTitle: 'Exercise 2: Mixed SAT Challenge',
    question: 'A survey of 100 students gives the data in the table below:\n\nAre the events "uses public transport" and "plays sport" independent?',
    table: {
      title: 'Survey of Transportation and Sports Participation',
      headers: ['Transportation', 'Plays Sport', 'No Sport', 'Total'],
      rows: [
        ['Uses Public Transport', '28', '22', '50'],
        ['Does Not Use', '12', '38', '50'],
        ['Total', '40', '60', '100']
      ]
    },
    options: [
      'Yes, because both totals are 50.',
      'Yes, because 28/50 = 40/100.',
      'No, because 28/50 ≠ 40/100.',
      'No, because the total number of students is 100.'
    ],
    correctIndex: 2,
    correctAnswerText: 'No, because 28/50 ≠ 40/100.',
    explanation: `Step-by-Step Statistical Independence Test:
1. Recall the formal mathematical condition for independence:
   $$P(\\text{Plays Sport} \\mid \\text{Uses Public Transport}) = P(\\text{Plays Sport})$$

2. Calculate the overall marginal probability of playing sport:
   $$P(\\text{Plays Sport}) = \\frac{\\text{Total Plays Sport}}{\\text{Grand Total}} = \\frac{40}{100} = 0.40$$

3. Calculate the conditional probability of playing sport given public transport usage:
   $$P(\\text{Plays Sport} \\mid \\text{Uses Public Transport}) = \\frac{28}{50} = 0.56$$

4. Compare the two probabilities:
   $$\\frac{28}{50} = 0.56 \\neq 0.40 = \\frac{40}{100}$$

5. Since $0.56 \\neq 0.40$, the likelihood of playing sports changes depending on whether the student uses public transport. Therefore, the events are NOT independent.

Teacher's SAT Pro-Tip:
Table 3 Independence Rule: $P(A \\mid B) = P(A)$ is the ultimate test. A student who uses public transport is significantly more likely to play sports (56%) than a student chosen at random from the whole population (40%).`,
    distractorExplanations: {
      0: 'Equal row totals (50 and 50) have no bearing on statistical independence.',
      1: '28/50 (0.56) is NOT equal to 40/100 (0.40).',
      3: 'The total sample size of 100 is just a baseline count and does not dictate independence.'
    }
  },

  // ============================================================
  // EXERCISE 3: ADVANCED SAT PROBABILITY — ELITE MODULE 2 (Questions 31–45)
  // ============================================================
  {
    id: 'ch9-q31',
    number: 31,
    exerciseNumber: 3,
    exerciseTitle: 'Exercise 3: Advanced SAT Probability — Elite Module 2 (Questions 31–45)',
    question: 'A survey of 600 students records mathematics club participation and exam results in the table below.\n\nOne student is selected at random from those who passed the exam. What is the probability that the student participates in the mathematics club?',
    table: {
      title: 'Math Club Participation and Exam Results',
      headers: ['Participation', 'Passed', 'Did Not Pass', 'Total'],
      rows: [
        ['Math Club', '126', '24', '150'],
        ['No Math Club', '306', '144', '450'],
        ['Total', '432', '168', '600']
      ]
    },
    options: ['7/25', '7/24', '3/10', '21/50'],
    correctIndex: 1,
    correctAnswerText: '7/24',
    explanation: `Step-by-Step Two-Way Table Conditional Probability Solution:
1. Identify the given condition and restricted sample space:
   The problem specifies: "selected at random from those who passed the exam".
   $$\\text{Condition Denominator} = \\text{Total Passed} = 432$$

2. Identify the favorable outcomes matching the condition:
   Students who both passed the exam AND participate in the mathematics club:
   $$\\text{Favorable Numerator} = 126$$

3. Compute the conditional probability:
   $$P(\\text{Math Club} \\mid \\text{Passed}) = \\frac{126}{432}$$

4. Simplify the fraction by dividing numerator and denominator by 18:
   $$\\frac{126 \\div 18}{432 \\div 18} = \\frac{7}{24}$$

Teacher's SAT Pro-Tip:
Always isolate the conditional denominator first. The condition "from those who passed" restricts our denominator to 432 (not the grand total of 600 or the Math Club total of 150).`,
    distractorExplanations: {
      0: '7/25 is $126 / 450$, mistakenly dividing by the "No Math Club" row total.',
      2: '3/10 is $150 / 500$ or an unrelated estimate.',
      3: '21/50 is $126 / 300$, an incorrect ratio reduction.'
    }
  },
  {
    id: 'ch9-q32',
    number: 32,
    exerciseNumber: 3,
    exerciseTitle: 'Exercise 3: Advanced SAT Probability — Elite Module 2 (Questions 31–45)',
    question: 'A machine produces components independently. The probability that a randomly selected component is defective is 0.04.\n\nFive components are selected independently. What is the probability that at least one of the five components is defective?',
    options: [
      '0.04⁵',
      '1 − 0.04⁵',
      '0.96⁵',
      '1 − 0.96⁵'
    ],
    correctIndex: 3,
    correctAnswerText: '1 − 0.96⁵',
    explanation: `Step-by-Step "At Least One" Complement Solution:
1. Identify the probability of a single component being non-defective:
   $$P(\\text{defective}) = 0.04$$
   $$P(\\text{non-defective}) = 1 - 0.04 = 0.96$$

2. Apply the "At Least One" Complement Rule:
   $$P(\\text{at least one defective in 5}) = 1 - P(\\text{none are defective in 5})$$

3. For 5 independent components, the probability that all 5 are non-defective is:
   $$P(\\text{none defective}) = (0.96)^5$$

4. Substitute into the complement formula:
   $$P(\\text{at least one defective}) = 1 - 0.96^5$$

Teacher's SAT Pro-Tip:
Whenever you see "at least one", always calculate $1 - P(\\text{none})$. For $n$ independent trials with success rate $p$, $P(\\text{at least one}) = 1 - (1 - p)^n$.`,
    distractorExplanations: {
      0: '0.04⁵ is the probability that ALL FIVE components are defective, not at least one.',
      1: '1 − 0.04⁵ incorrectly subtracts the probability of all defective from 1.',
      2: '0.96⁵ is the probability that NONE of the five components are defective.'
    }
  },
  {
    id: 'ch9-q33',
    number: 33,
    exerciseNumber: 3,
    exerciseTitle: 'Exercise 3: Advanced SAT Probability — Elite Module 2 (Questions 31–45)',
    question: 'A school records the number of students enrolled in three courses across grades 10, 11, and 12, as shown in the table below.\n\nOne student is selected at random from the students enrolled in Grade 11. What is the probability that the student is enrolled in Physics?',
    table: {
      title: 'Science Course Enrollment by Grade Level',
      headers: ['Course', 'Grade 10', 'Grade 11', 'Grade 12', 'Total'],
      rows: [
        ['Physics', '24', '30', '36', '90'],
        ['Chemistry', '36', '42', '18', '96'],
        ['Biology', '40', '28', '26', '94'],
        ['Total', '100', '100', '80', '280']
      ]
    },
    options: ['15/64', '3/10', '5/16', '30/168'],
    correctIndex: 1,
    correctAnswerText: '3/10',
    explanation: `Step-by-Step Table Conditional Probability Solution:
1. Identify the given condition:
   "selected at random from the students enrolled in Grade 11".
   Sum the Grade 11 column:
   $$\\text{Total Grade 11} = 30 (\\text{Physics}) + 42 (\\text{Chemistry}) + 28 (\\text{Biology}) = 100$$

2. Identify the favorable count in Grade 11:
   $$\\text{Grade 11 Physics Students} = 30$$

3. Compute the conditional probability:
   $$P(\\text{Physics} \\mid \\text{Grade 11}) = \\frac{30}{100} = \\frac{3}{10}$$

Teacher's SAT Pro-Tip:
Read the conditioning clause carefully: "from the students enrolled in Grade 11" confines the universe strictly to the Grade 11 column sum (100).`,
    distractorExplanations: {
      0: '15/64 is $30 / 128$, using an incorrect subtotal.',
      2: '5/16 is $30 / 96$, using the Chemistry row total.',
      3: '30/168 uses an unsimplified ratio with an incorrect base.'
    }
  },
  {
    id: 'ch9-q34',
    number: 34,
    exerciseNumber: 3,
    exerciseTitle: 'Exercise 3: Advanced SAT Probability — Elite Module 2 (Questions 31–45)',
    question: 'A box contains 5 red, 4 blue, and 3 green balls.\n\nTwo balls are selected successively WITHOUT replacement. What is the probability that the two balls are different colors?',
    options: ['47/66', '49/66', '19/33', '7/11'],
    correctIndex: 0,
    correctAnswerText: '47/66',
    explanation: `Step-by-Step Multi-Stage Selection Without Replacement Solution:
1. Determine the total number of balls:
   $$\\text{Total} = 5 + 4 + 3 = 12 \\text{ balls}$$

2. Find the total number of ways to choose 2 balls out of 12 without replacement:
   $$\\text{Total Pairs} = \\binom{12}{2} = \\frac{12 \\times 11}{2} = 66$$

3. Use the complement rule: $P(\\text{different colors}) = 1 - P(\\text{same color})$.
   Calculate the number of ways to select 2 balls of the SAME color:
   - 2 Red: $\\binom{5}{2} = \\frac{5 \\times 4}{2} = 10$
   - 2 Blue: $\\binom{4}{2} = \\frac{4 \\times 3}{2} = 6$
   - 2 Green: $\\binom{3}{2} = \\frac{3 \\times 2}{2} = 3$
   $$\\text{Total Same Color Pairs} = 10 + 6 + 3 = 19$$

4. Calculate $P(\\text{same color})$ and subtract from 1:
   $$P(\\text{same color}) = \\frac{19}{66}$$
   $$P(\\text{different colors}) = 1 - \\frac{19}{66} = \\frac{47}{66}$$

Teacher's SAT Pro-Tip:
Calculating the complement $1 - P(\\text{same color})$ is much faster and less error-prone than summing $P(RB) + P(RG) + P(BR) + P(BG) + P(GR) + P(GB)$.`,
    distractorExplanations: {
      1: '49/66 is an arithmetic subtraction error ($66 - 17 = 49$).',
      2: '19/33 fails to compute the complement and misreduces the fraction.',
      3: '7/11 is $42/66$, which omits some pairs of different colors.'
    }
  },
  {
    id: 'ch9-q35',
    number: 35,
    exerciseNumber: 3,
    exerciseTitle: 'Exercise 3: Advanced SAT Probability — Elite Module 2 (Questions 31–45)',
    question: 'A company surveyed 500 employees about remote work and AI tool usage, as shown in the table below.\n\nAn employee who uses the AI tool is selected at random. What is the probability that the employee works remotely?',
    table: {
      title: 'Remote Work Status and AI Tool Usage',
      headers: ['Work Arrangement', 'Uses AI Tool', 'Does Not Use', 'Total'],
      rows: [
        ['Remote', '156', '44', '200'],
        ['Not Remote', '120', '180', '300'],
        ['Total', '276', '224', '500']
      ]
    },
    options: ['13/23', '39/69', '13/25', '156/500'],
    correctIndex: 0,
    correctAnswerText: '13/23',
    explanation: `Step-by-Step Two-Way Table Conditioning Solution:
1. Identify the given condition:
   "An employee who uses the AI tool is selected at random."
   $$\\text{Denominator} = \\text{Total Uses AI Tool} = 276$$

2. Identify the favorable count:
   Employees who work remotely AND use the AI tool:
   $$\\text{Favorable Numerator} = 156$$

3. Calculate the conditional probability:
   $$P(\\text{Remote} \\mid \\text{Uses AI}) = \\frac{156}{276}$$

4. Simplify by dividing numerator and denominator by 12:
   $$\\frac{156 \\div 12}{276 \\div 12} = \\frac{13}{23}$$

Teacher's SAT Pro-Tip:
Notice that Option B ($39/69$) is an unsimplified fraction (divided only by 4), but the SAT requires the fully reduced fraction $13/23$.`,
    distractorExplanations: {
      1: '39/69 is not fully simplified; dividing both numerator and denominator by 3 gives 13/23.',
      2: '13/25 is $156 / 300$, using the "Not Remote" row total as denominator.',
      3: '156/500 mistakenly divides by the grand total of 500 employees rather than the conditioned group (276).'
    }
  },
  {
    id: 'ch9-q36',
    number: 36,
    exerciseNumber: 3,
    exerciseTitle: 'Exercise 3: Advanced SAT Probability — Elite Module 2 (Questions 31–45)',
    question: 'A jar contains 8 white, 5 black, and 7 red marbles.\n\nTwo marbles are selected without replacement. The first marble selected is red.\n\nWhat is the probability that the second marble is black?',
    options: ['1/4', '5/19', '5/20', '7/19'],
    correctIndex: 1,
    correctAnswerText: '5/19',
    explanation: `Step-by-Step Sequential Selection Without Replacement Solution:
1. Calculate the initial marble counts:
   $$\\text{Total} = 8 \\text{ white} + 5 \\text{ black} + 7 \\text{ red} = 20 \\text{ marbles}$$

2. Account for the first draw (1 red marble is removed):
   - White remaining = 8
   - Black remaining = 5
   - Red remaining = $7 - 1 = 6$
   - Total remaining = $20 - 1 = 19 \\text{ marbles}$

3. Calculate the probability that the second marble is black:
   $$P(\\text{Second is Black} \\mid \\text{First was Red}) = \\frac{\\text{Black Remaining}}{\\text{Total Remaining}} = \\frac{5}{19}$$

Teacher's SAT Pro-Tip:
"Without replacement" means the denominator drops from 20 to 19. Since the first marble was red, the number of black marbles is still 5.`,
    distractorExplanations: {
      0: '1/4 is $5/20$, which fails to account for the removal of the first marble.',
      2: '5/20 assumes the marble was replaced before the second draw.',
      3: '7/19 is the probability that the second marble is also red (if 7 red were left).'
    }
  },
  {
    id: 'ch9-q37',
    number: 37,
    exerciseNumber: 3,
    exerciseTitle: 'Exercise 3: Advanced SAT Probability — Elite Module 2 (Questions 31–45)',
    question: 'A student independently answers 4 multiple-choice questions by randomly selecting one of four answer choices for each question.\n\nWhat is the probability that the student gets at least one question correct?',
    options: ['1/256', '81/256', '175/256', '3/4'],
    correctIndex: 2,
    correctAnswerText: '175/256',
    explanation: `Step-by-Step Multiple Choice Independent Trials Solution:
1. For each individual question:
   $$P(\\text{correct}) = \\frac{1}{4}$$
   $$P(\\text{incorrect}) = 1 - \\frac{1}{4} = \\frac{3}{4}$$

2. Apply the Master "At Least One" Formula:
   $$P(\\text{at least 1 correct in 4 questions}) = 1 - P(\\text{all 4 incorrect})$$

3. Compute $P(\\text{all 4 incorrect})$ across 4 independent questions:
   $$P(\\text{all 4 incorrect}) = \\left(\\frac{3}{4}\\right)^4 = \\frac{81}{256}$$

4. Complete the complement subtraction:
   $$P(\\text{at least 1 correct}) = 1 - \\frac{81}{256} = \\frac{256 - 81}{256} = \\frac{175}{256}$$

Teacher's SAT Pro-Tip:
Option B ($81/256$) is the classic trap answer representing the probability of 0 correct. Never forget the final subtraction from 1!`,
    distractorExplanations: {
      0: '1/256 is $(1/4)^4$, the probability that ALL 4 questions are correct.',
      1: '81/256 is $(3/4)^4$, the probability that NONE of the 4 questions are correct.',
      3: '3/4 is the probability of getting a single question incorrect.'
    }
  },
  {
    id: 'ch9-q38',
    number: 38,
    exerciseNumber: 3,
    exerciseTitle: 'Exercise 3: Advanced SAT Probability — Elite Module 2 (Questions 31–45)',
    question: 'A survey classifies 400 applicants according to submission timing and application completeness, as shown in the table below.\n\nAn applicant is selected at random from those whose applications were incomplete. What is the probability that the applicant submitted the application before the deadline?',
    table: {
      title: 'Applicant Submission Timing and Completeness',
      headers: ['Submission Timing', 'Complete', 'Incomplete', 'Total'],
      rows: [
        ['Before Deadline', '252', '48', '300'],
        ['After Deadline', '60', '40', '100'],
        ['Total', '312', '88', '400']
      ]
    },
    options: ['3/22', '6/11', '12/25', '3/8'],
    correctIndex: 1,
    correctAnswerText: '6/11',
    explanation: `Step-by-Step Incomplete Applicant Conditional Probability Solution:
1. Identify the given condition:
   "selected at random from those whose applications were incomplete".
   $$\\text{Denominator} = \\text{Total Incomplete} = 88$$

2. Identify the favorable count:
   Applicants who submitted before the deadline and were incomplete:
   $$\\text{Favorable Numerator} = 48$$

3. Compute the conditional probability:
   $$P(\\text{Before Deadline} \\mid \\text{Incomplete}) = \\frac{48}{88}$$

4. Simplify by dividing numerator and denominator by 8:
   $$\\frac{48 \\div 8}{88 \\div 8} = \\frac{6}{11}$$

Teacher's SAT Pro-Tip:
Locate the "Incomplete" column total ($88$) first. The favorable group is the intersection of "Before Deadline" and "Incomplete" ($48$). Then reduce: $48/88 = 6/11$.`,
    distractorExplanations: {
      0: '3/22 is $12/88$, which uses an incorrect numerator.',
      2: '12/25 is $48/100$, using the "After Deadline" row total as the denominator.',
      3: '3/8 is $48/128$, an arbitrary incorrect reduction.'
    }
  },
  {
    id: 'ch9-q39',
    number: 39,
    exerciseNumber: 3,
    exerciseTitle: 'Exercise 3: Advanced SAT Probability — Elite Module 2 (Questions 31–45)',
    question: 'A box contains 6 cards labeled A, 4 cards labeled B, and 5 cards labeled C.\n\nTwo cards are selected without replacement. What is the probability that the second card is labeled B, given that the first card was not labeled B?',
    options: ['4/15', '4/11', '2/7', '1/3'],
    correctIndex: 2,
    correctAnswerText: '2/7',
    explanation: `Step-by-Step Multi-Step Conditional Probability Solution:
1. Determine the total initial cards:
   $$\\text{Total} = 6 (A) + 4 (B) + 5 (C) = 15 \\text{ cards}$$

2. Interpret the given condition:
   "given that the first card was not labeled B".
   This means the first card drawn was an A or a C. Exactly 1 non-B card was removed.

3. Calculate the remaining cards in the box:
   - Cards labeled B remaining = 4 (all 4 are still in the box)
   - Total cards remaining = $15 - 1 = 14$

4. Compute the conditional probability for the second card:
   $$P(\\text{Second is B} \\mid \\text{First was not B}) = \\frac{\\text{B Cards Remaining}}{\\text{Total Cards Remaining}} = \\frac{4}{14} = \\frac{2}{7}$$

Teacher's SAT Pro-Tip:
Watch out for Trap Option B ($4/11$): $11$ is the number of non-B cards initially, but the denominator for any draw must be the TOTAL number of cards remaining in the container ($14$).`,
    distractorExplanations: {
      0: '4/15 is the initial probability of drawing a B card on the first draw (with 15 total cards).',
      1: '4/11 is a classic trap dividing B cards (4) by non-B cards (11) instead of the total cards remaining (14).',
      3: '1/3 is $5/15$ or an incorrect approximation.'
    }
  },
  {
    id: 'ch9-q40',
    number: 40,
    exerciseNumber: 3,
    exerciseTitle: 'Exercise 3: Advanced SAT Probability — Elite Module 2 (Questions 31–45)',
    question: 'The table below gives the joint probability distribution for two events, A and B.\n\nWhich statement is true?',
    table: {
      title: 'Joint Probabilities for Events A and B',
      headers: ['Event', 'B', 'Not B', 'Total'],
      rows: [
        ['A', '0.18', '0.12', '0.30'],
        ['Not A', '0.42', '0.28', '0.70'],
        ['Total', '0.60', '0.40', '1.00']
      ]
    },
    options: [
      'A and B are independent because P(A) = P(B).',
      'A and B are independent because P(A and B) = P(A)P(B).',
      'A and B are not independent because P(A and B) ≠ P(A) + P(B).',
      'A and B are not independent because P(A|B) = P(B|A).'
    ],
    correctIndex: 1,
    correctAnswerText: 'A and B are independent because P(A and B) = P(A)P(B).',
    explanation: `Step-by-Step Mathematical Independence Test:
1. Find the marginal probabilities from the table:
   $$P(A) = 0.18 + 0.12 = 0.30$$
   $$P(B) = 0.18 + 0.42 = 0.60$$

2. Find the joint probability $P(A \\text{ and } B)$ from the table:
   $$P(A \\cap B) = 0.18$$

3. Multiply $P(A)$ and $P(B)$:
   $$P(A) \\times P(B) = 0.30 \\times 0.60 = 0.18$$

4. Compare $P(A \\cap B)$ with $P(A)P(B)$:
   $$P(A \\cap B) = 0.18 = P(A)P(B)$$
   Since the product of the marginal probabilities equals the joint probability, events $A$ and $B$ are strictly independent.

Teacher's SAT Pro-Tip:
The formal definition of independent events is $P(A \\cap B) = P(A)P(B)$, or equivalently $P(A \\mid B) = P(A)$. Here $P(A \\mid B) = \\frac{0.18}{0.60} = 0.30 = P(A)$.`,
    distractorExplanations: {
      0: 'P(A) = 0.30 and P(B) = 0.60, which are not equal; furthermore, equality of marginal probabilities does not imply independence.',
      2: 'Independence is tested by multiplication ($P(A \\cap B) = P(A)P(B)$), not addition.',
      3: 'P(A|B) = 0.18/0.60 = 0.30, while P(B|A) = 0.18/0.30 = 0.60; they are not equal, but whether they equal each other is irrelevant to independence.'
    }
  },
  {
    id: 'ch9-q41',
    number: 41,
    exerciseNumber: 3,
    exerciseTitle: 'Exercise 3: Advanced SAT Probability — Elite Module 2 (Questions 31–45)',
    question: 'A school surveys 720 students regarding ownership of a specific item, as summarized in the table below.\n\nA student who owns the item is selected at random. What is the probability that the student is a junior?',
    table: {
      title: 'Item Ownership Survey by Grade Level',
      headers: ['Grade Level', 'Owns Item', 'Does Not Own', 'Total'],
      rows: [
        ['Freshman', '96', '144', '240'],
        ['Sophomore', '132', '108', '240'],
        ['Junior', '156', '84', '240'],
        ['Total', '384', '336', '720']
      ]
    },
    options: ['13/60', '13/32', '13/24', '156/720'],
    correctIndex: 1,
    correctAnswerText: '13/32',
    explanation: `Step-by-Step Two-Way Table Conditional Probability Solution:
1. Identify the given condition:
   "A student who owns the item is selected at random."
   $$\\text{Denominator} = \\text{Total who Own} = 384$$

2. Identify the favorable count:
   Junior students who own the item:
   $$\\text{Favorable Numerator} = 156$$

3. Compute the conditional probability:
   $$P(\\text{Junior} \\mid \\text{Owns}) = \\frac{156}{384}$$

4. Simplify by dividing numerator and denominator by 12:
   $$\\frac{156 \\div 12}{384 \\div 12} = \\frac{13}{32}$$

Teacher's SAT Pro-Tip:
Identify the condition first ("Owns the item" $\\implies$ column total 384). Then take the Junior row value ($156$) over 384. Reduce $156/384 = 13/32$.`,
    distractorExplanations: {
      0: '13/60 is $156 / 720$, dividing by the grand total instead of the conditioned column total.',
      2: '13/24 is $156 / 240$, dividing by the Junior row total instead of the "Owns Item" column total.',
      3: '156/720 is the joint probability P(Junior and Owns) across all 720 students, not the conditional probability.'
    }
  },
  {
    id: 'ch9-q42',
    number: 42,
    exerciseNumber: 3,
    exerciseTitle: 'Exercise 3: Advanced SAT Probability — Elite Module 2 (Questions 31–45)',
    question: 'A container contains 7 blue chips and 5 yellow chips.\n\nThree chips are selected without replacement. What is the probability that exactly two of the three selected chips are blue?',
    options: ['35/132', '21/44', '7/22', '49/132'],
    correctIndex: 1,
    correctAnswerText: '21/44',
    explanation: `Step-by-Step Hypergeometric / Combinatorial Probability Solution:
1. Find the total number of ways to choose 3 chips from 12 total chips:
   $$\\text{Total Outcomes} = \\binom{12}{3} = \\frac{12 \\times 11 \\times 10}{3 \\times 2 \\times 1} = 220$$

2. Find the number of favorable outcomes (exactly 2 blue and 1 yellow):
   - Ways to choose 2 blue from 7: $\\binom{7}{2} = \\frac{7 \\times 6}{2} = 21$
   - Ways to choose 1 yellow from 5: $\\binom{5}{1} = 5$
   $$\\text{Favorable Outcomes} = \\binom{7}{2} \\times \\binom{5}{1} = 21 \\times 5 = 105$$

3. Compute the probability:
   $$P(\\text{exactly 2 blue}) = \\frac{105}{220}$$

4. Simplify by dividing numerator and denominator by 5:
   $$\\frac{105 \\div 5}{220 \\div 5} = \\frac{21}{44}$$

Alternative Order-Based Method:
$$P(BBY) = \\frac{7}{12} \\times \\frac{6}{11} \\times \\frac{5}{10} = \\frac{210}{1320} = \\frac{7}{44}$$
There are 3 distinct orderings ($BBY, BYB, YBB$), so:
$$P(\\text{exactly 2 blue}) = 3 \\times \\frac{7}{44} = \\frac{21}{44}$$`,
    distractorExplanations: {
      0: '35/132 is the probability of a single sequence without multiplying by the 3 possible permutations ($BBY, BYB, YBB$).',
      2: '7/22 is $14/44$, missing one of the orderings.',
      3: '49/132 assumes replacement or miscalculates combinations.'
    }
  },
  {
    id: 'ch9-q43',
    number: 43,
    exerciseNumber: 3,
    exerciseTitle: 'Exercise 3: Advanced SAT Probability — Elite Module 2 (Questions 31–45)',
    question: 'A survey records student exam outcomes across three groups in the table below.\n\nA student is selected from the students who passed. What is the probability that the student came from either Group X or Group Z?',
    table: {
      title: 'Student Exam Outcomes by Group',
      headers: ['Outcome', 'Group X', 'Group Y', 'Group Z', 'Total'],
      rows: [
        ['Passed', '84', '96', '120', '300'],
        ['Did Not Pass', '36', '24', '40', '100'],
        ['Total', '120', '120', '160', '400']
      ]
    },
    options: ['17/25', '17/30', '204/400', '51/100'],
    correctIndex: 0,
    correctAnswerText: '17/25',
    explanation: `Step-by-Step Table Disjoint Union Conditional Solution:
1. Identify the given condition:
   "selected from the students who passed".
   $$\\text{Denominator} = \\text{Total Passed} = 84 + 96 + 120 = 300$$

2. Identify the favorable outcomes matching the condition:
   Passed students from Group X or Group Z:
   $$\\text{Favorable Numerator} = 84 (\\text{Group X}) + 120 (\\text{Group Z}) = 204$$

3. Calculate the conditional probability:
   $$P(\\text{Group X or Z} \\mid \\text{Passed}) = \\frac{204}{300}$$

4. Simplify the fraction by dividing numerator and denominator by 12:
   $$\\frac{204 \\div 12}{300 \\div 12} = \\frac{17}{25}$$

Teacher's SAT Pro-Tip:
Notice $\\frac{204}{300} = \\frac{68}{100} = 0.68 = \\frac{17}{25}$. Always verify the condition limits you to the "Passed" row total of 300.`,
    distractorExplanations: {
      1: '17/30 is $170/300$, an arithmetic error.',
      2: '204/400 incorrectly divides by the grand total of 400 students instead of the 300 passed students.',
      3: '51/100 is $204/400$, which forgets to condition on the students who passed.'
    }
  },
  {
    id: 'ch9-q44',
    number: 44,
    exerciseNumber: 3,
    exerciseTitle: 'Exercise 3: Advanced SAT Probability — Elite Module 2 (Questions 31–45)',
    question: 'A particular event has probability p of occurring on any trial. Two independent trials are performed.\n\nThe probability that the event occurs in at least one of the two trials is 0.91.\n\nWhat is the value of p?',
    options: ['0.30', '0.45', '0.70', '0.91'],
    correctIndex: 2,
    correctAnswerText: '0.70',
    explanation: `Step-by-Step Elite Algebraic Complement Solution:
1. Set up the Master "At Least One" formula for two independent trials:
   $$P(\\text{at least one}) = 1 - P(\\text{none}) = 0.91$$

2. Solve for $P(\\text{none})$:
   $$P(\\text{none}) = 1 - 0.91 = 0.09$$

3. For two independent trials where the probability of non-occurrence is $(1 - p)$:
   $$P(\\text{none}) = (1 - p)^2 = 0.09$$

4. Take the positive square root of both sides:
   $$1 - p = \\sqrt{0.09} = 0.30$$

5. Solve for $p$:
   $$p = 1 - 0.30 = 0.70$$

Check:
If $p = 0.70$, then $1 - p = 0.30$.
$P(\\text{none}) = 0.30^2 = 0.09$.
$P(\\text{at least one}) = 1 - 0.09 = 0.91$. Matches perfectly!`,
    distractorExplanations: {
      0: '0.30 is the value of $(1 - p)$, the probability that the event does NOT occur on a single trial.',
      1: '0.45 is $0.91 / 2$, which incorrectly divides the probability by 2 as if probabilities were additive.',
      3: '0.91 is the probability of at least one occurrence, not the single-trial probability p.'
    }
  },
  {
    id: 'ch9-q45',
    number: 45,
    exerciseNumber: 3,
    exerciseTitle: 'Exercise 3: Advanced SAT Probability — Elite Module 2 (Questions 31–45)',
    question: 'A university surveys 1,000 students about research and internship participation, as shown in the table below.\n\nOf the students who participate in research, 60% are selected for a special program. Of the students who do not participate in research, 20% are selected for the same program.\n\nA student is selected at random from the special-program participants. What is the probability that the student participates in research?',
    table: {
      title: 'Survey of Research and Internship Participation',
      headers: ['Internship Status', 'Research', 'No Research', 'Total'],
      rows: [
        ['Internship', '180', '120', '300'],
        ['No Internship', '280', '420', '700'],
        ['Total', '460', '540', '1,000']
      ]
    },
    options: ['23/50', '69/96', '69/87', '3/4'],
    correctIndex: 1,
    correctAnswerText: '69/96',
    explanation: `Step-by-Step Multi-Stage Conditional Probability (Bayes' Theorem) Solution:
1. Extract the marginal group totals from the table:
   - Total participating in research = $180 + 280 = 460$
   - Total NOT participating in research = $120 + 420 = 540$

2. Calculate the number of students selected for the special program from each group:
   - From Research: $60\\% \\times 460 = 0.60 \\times 460 = 276 \\text{ students}$
   - From No Research: $20\\% \\times 540 = 0.20 \\times 540 = 108 \\text{ students}$

3. Find the total number of students in the special program:
   $$\\text{Total Special Program} = 276 + 108 = 384 \\text{ students}$$

4. Compute the conditional probability that a randomly chosen special-program participant is from research:
   $$P(\\text{Research} \\mid \\text{Special Program}) = \\frac{\\text{Research and Special}}{\\text{Total Special}} = \\frac{276}{384}$$

5. Simplify the fraction by dividing numerator and denominator by 4:
   $$\\frac{276 \\div 4}{384 \\div 4} = \\frac{69}{96}$$
   (Further simplified by 3: $\\frac{23}{32}$)

Teacher's SAT Pro-Tip:
This is an Elite Module 2 multi-stage problem:
1. Compute each branch size ($276$ and $108$).
2. Add to get the new conditioned sample space ($384$).
3. Divide the target branch by the new total: $276 / 384 = 69/96$.`,
    distractorExplanations: {
      0: '23/50 is $460 / 1000$, the overall percentage of students participating in research.',
      2: '69/87 is $276 / 348$, using an incorrect total for the special program.',
      3: '3/4 is an oversimplified estimate.'
    }
  }
];
