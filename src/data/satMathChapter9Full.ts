import { FullSatMathChapter, MathWorkedExample, MathTheorySection } from './satMathConcepts';
import { CHAPTER_9_PRACTICE_QUESTIONS } from './satMathChapter9Questions';

export const CHAPTER_9_WORKED_EXAMPLES: MathWorkedExample[] = [
  {
    title: 'Example 1 — Simple Probability',
    question: 'A fair die is rolled.\n\nWhat is the probability of rolling a number greater than 4?',
    options: ['1/6', '1/3', '1/2', '2/3'],
    correctAnswer: '1/3',
    correctIndex: 1,
    explanation: `Step-by-Step Algebraic Solution:
1. List the entire sample space $S$ for a fair 6-sided die:
   $$S = \\{1, 2, 3, 4, 5, 6\\} \\implies n(S) = 6$$

2. Identify the favorable outcomes for numbers strictly greater than 4:
   $$\\text{Favorable} = \\{5, 6\\} \\implies n(E) = 2$$

3. Calculate the probability:
   $$P = \\frac{n(E)}{n(S)} = \\frac{2}{6} = \\frac{1}{3}$$

Answer: 1/3`
  },
  {
    title: 'Example 2 — Complement',
    question: 'The probability that a student submits an assignment on time is 0.82.\n\nWhat is the probability that the student does NOT submit it on time?',
    options: ['0.08', '0.18', '0.82', '1.18'],
    correctAnswer: '0.18',
    correctIndex: 1,
    explanation: `Step-by-Step Complement Calculation:
1. Use the Master Complement Formula:
   $$P(\\text{not } A) = 1 - P(A)$$

2. Substitute $P(A) = 0.82$:
   $$P(\\text{not } A) = 1 - 0.82 = 0.18$$

Answer: 0.18`
  },
  {
    title: 'Example 3 — OR with No Overlap',
    question: 'A fair die is rolled.\n\nWhat is the probability of rolling a 1 or a 6?',
    options: ['1/6', '1/3', '1/2', '2/3'],
    correctAnswer: '1/3',
    correctIndex: 1,
    explanation: `Step-by-Step Disjoint Addition Rule:
1. Rolling a 1 and rolling a 6 cannot happen simultaneously on a single roll (they are mutually exclusive).

2. Apply the Disjoint Addition Rule:
   $$P(1 \\text{ or } 6) = P(1) + P(6)$$
   $$P(1 \\text{ or } 6) = \\frac{1}{6} + \\frac{1}{6} = \\frac{2}{6} = \\frac{1}{3}$$

Answer: 1/3`
  },
  {
    title: 'Example 4 — OR with Overlap',
    question: 'A class contains 40 students.\n• 18 study French.\n• 15 study Spanish.\n• 6 study both.\n\nWhat is the probability that a randomly selected student studies French or Spanish?',
    options: ['21/40', '27/40', '33/40', '39/40'],
    correctAnswer: '27/40',
    correctIndex: 1,
    explanation: `Step-by-Step General Addition Rule:
1. Use the Inclusion-Exclusion formula:
   $$\\text{Favorable} = \\text{French} + \\text{Spanish} - \\text{Both}$$
   $$\\text{Favorable} = 18 + 15 - 6 = 27$$

2. Calculate the probability:
   $$P(\\text{French or Spanish}) = \\frac{27}{40}$$

Answer: 27/40`
  },
  {
    title: 'Example 5 — Two-Way Table (Marginal Probability)',
    question: 'Using the table below, what is the probability that a randomly selected student is in Grade 10?',
    table: {
      title: 'Student Club Participation by Grade',
      headers: ['Grade', 'Club A', 'No Club', 'Total'],
      rows: [
        ['Grade 9', '12', '18', '30'],
        ['Grade 10', '20', '10', '30'],
        ['Total', '32', '28', '60']
      ]
    },
    options: ['1/3', '1/2', '2/3', '3/4'],
    correctAnswer: '1/2',
    correctIndex: 1,
    explanation: `Step-by-Step Marginal Probability from Table:
1. Total Grade 10 students:
   $$\\text{Grade 10 Total} = 30$$

2. Grand total of all students:
   $$\\text{Grand Total} = 60$$

3. Compute the probability:
   $$P(\\text{Grade 10}) = \\frac{30}{60} = \\frac{1}{2}$$

Answer: 1/2`
  },
  {
    title: 'Example 6 — Conditional Probability from a Table',
    question: 'Using the same table, what is P(Club A | Grade 10)?',
    table: {
      title: 'Student Club Participation by Grade',
      headers: ['Grade', 'Club A', 'No Club', 'Total'],
      rows: [
        ['Grade 9', '12', '18', '30'],
        ['Grade 10', '20', '10', '30'],
        ['Total', '32', '28', '60']
      ]
    },
    options: ['1/3', '1/2', '2/3', '5/6'],
    correctAnswer: '2/3',
    correctIndex: 2,
    explanation: `Step-by-Step Conditional Probability Calculation:
1. Restrict attention strictly to Grade 10:
   $$\\text{Grade 10 Total (Denominator)} = 30$$

2. Count Grade 10 students in Club A (Numerator):
   $$\\text{Grade 10 in Club A} = 20$$

3. Calculate the conditional probability:
   $$P(\\text{Club A} \\mid \\text{Grade 10}) = \\frac{20}{30} = \\frac{2}{3}$$

Answer: 2/3`
  },
  {
    title: 'Example 7 — Independent Events',
    question: 'A fair coin is flipped twice.\n\nWhat is the probability of getting heads both times?',
    options: ['1/2', '1/4', '1/6', '1/8'],
    correctAnswer: '1/4',
    correctIndex: 1,
    explanation: `Step-by-Step Independent Events Rule:
1. Individual flip probabilities:
   $$P(H_1) = \\frac{1}{2}, \\quad P(H_2) = \\frac{1}{2}$$

2. The flips are independent. Therefore:
   $$P(H \\text{ and } H) = \\frac{1}{2} \\times \\frac{1}{2} = \\frac{1}{4}$$

Answer: 1/4`
  },
  {
    title: 'Example 8 — Dependent Events',
    question: 'A bag contains 4 red balls and 6 blue balls. Two balls are selected WITHOUT replacement.\n\nWhat is the probability that both are red?',
    options: ['2/15', '4/25', '1/6', '4/10'],
    correctAnswer: '2/15',
    correctIndex: 0,
    explanation: `Step-by-Step Dependent Probability Calculation:
1. First draw is red:
   $$P(R_1) = \\frac{4}{10}$$

2. After one red is removed, 3 red and 9 total balls remain:
   $$P(R_2 \\mid R_1) = \\frac{3}{9}$$

3. Multiply:
   $$P = \\frac{4}{10} \\times \\frac{3}{9} = \\frac{12}{90} = \\frac{2}{15}$$

Answer: 2/15`
  },
  {
    title: 'Example 9 — Tree Diagram Thinking',
    question: 'A box contains 3 green and 2 yellow balls. Two balls are selected without replacement.\n\nFind the probability of selecting green then yellow.',
    options: ['1/5', '3/10', '2/5', '6/25'],
    correctAnswer: '3/10',
    correctIndex: 1,
    explanation: `Step-by-Step Tree Diagram Branch Method:
1. First selection:
   $$P(G) = \\frac{3}{5}$$

2. After green is selected, 2 yellow remain out of 4 total balls:
   $$P(Y \\mid G) = \\frac{2}{4}$$

3. Multiply along the branch:
   $$P = \\frac{3}{5} \\times \\frac{2}{4} = \\frac{6}{20} = \\frac{3}{10}$$

Answer: 3/10`
  },
  {
    title: 'Example 10 — At Least One',
    question: 'A fair coin is flipped 3 times.\n\nWhat is the probability of getting at least one head?',
    options: ['1/8', '3/8', '1/2', '7/8'],
    correctAnswer: '7/8',
    correctIndex: 3,
    explanation: `Step-by-Step Complement Method:
1. Use the complement rule:
   $$\\text{Opposite of 'at least one head'} = \\text{zero heads (all tails)}$$

2. Probability of all tails in 3 flips:
   $$P(\\text{all tails}) = \\left(\\frac{1}{2}\\right)^3 = \\frac{1}{8}$$

3. Therefore:
   $$P(\\text{at least one head}) = 1 - \\frac{1}{8} = \\frac{7}{8}$$

Answer: 7/8`
  },
  {
    title: 'Example 11 — Sample Space (Counting Outcomes)',
    question: 'A coin is flipped and a six-sided die is rolled.\n\nHow many possible ordered outcomes are there?',
    options: ['8', '12', '18', '36'],
    correctAnswer: '12',
    correctIndex: 1,
    explanation: `Step-by-Step Fundamental Counting Principle:
1. Coin possibilities: 2
2. Die possibilities: 6
3. Total possible outcomes:
   $$\\text{Total} = 2 \\times 6 = 12$$

Answer: 12`
  },
  {
    title: 'Example 12 — Permutation Probability (Order Matters)',
    question: 'Five students are available. Two different positions are assigned: Captain and Vice Captain.\n\nHow many possible assignments exist?',
    options: ['10', '20', '25', '120'],
    correctAnswer: '20',
    correctIndex: 1,
    explanation: `Step-by-Step Permutation Calculation:
1. Because the positions are different, order matters:
   $$\\text{5 choices for captain}$$
   $$\\text{4 remaining choices for vice captain}$$

2. Total assignments:
   $$\\text{Total} = 5 \\times 4 = 20$$

Answer: 20`
  },
  {
    title: 'Example 13 — Combination Probability (Order Does Not Matter)',
    question: 'Five students are available. Two are selected to form an unranked committee.\n\nHow many different selections are possible?',
    options: ['10', '15', '20', '25'],
    correctAnswer: '10',
    correctIndex: 0,
    explanation: `Step-by-Step Combination Calculation:
1. Order does not matter:
   $$\\text{Number of selections} = _5C_2$$

2. Calculate using the combination formula:
   $$_5C_2 = \\frac{5!}{2!(5-2)!} = \\frac{5!}{2!3!} = \\frac{5 \\times 4}{2 \\times 1} = 10$$

Answer: 10`
  },
  {
    title: 'Example 14 — At Least One Success',
    question: 'A machine successfully completes a task with probability 0.8 each time. Assume the attempts are independent.\n\nWhat is the probability of at least one success in 3 attempts?',
    options: ['0.008', '0.512', '0.800', '0.992'],
    correctAnswer: '0.992',
    correctIndex: 3,
    explanation: `Step-by-Step Complement Method for Repeated Trials:
1. Use the complement formula:
   $$P(\\text{at least 1 success}) = 1 - P(\\text{no successes})$$

2. Calculate failure probability on one trial:
   $$P(\\text{failure}) = 1 - 0.8 = 0.2$$

3. Calculate probability of 3 consecutive failures:
   $$P(3 \\text{ failures}) = (0.2)^3 = 0.008$$

4. Subtract from 1:
   $$P(\\text{at least 1 success}) = 1 - 0.008 = 0.992$$

Answer: 0.992`
  },
  {
    title: 'Example 15 — Testing Independence',
    question: 'Suppose P(A) = 0.4, P(B) = 0.5, and P(A and B) = 0.2.\n\nAre events A and B independent?',
    options: ['Yes', 'No', 'Cannot be determined', 'Only if disjoint'],
    correctAnswer: 'Yes',
    correctIndex: 0,
    explanation: `Step-by-Step Independence Test:
1. For independence, verify if:
   $$P(A) \\times P(B) = P(A \\text{ and } B)$$

2. Compute product:
   $$0.4 \\times 0.5 = 0.2$$

3. Since $0.2 = P(A \\text{ and } B)$, the events are independent.

Answer: Yes`
  }
];

export const CHAPTER_9_THEORY_SECTIONS: MathTheorySection[] = [
  {
    sectionTitle: '9.1 Basic Probability Foundations, Sample Spaces & The Complement Rule',
    fullText: `Probability measures how likely an event is to occur on a numerical scale between 0 and 1 (or 0% to 100%). For any experiment with equally likely outcomes, probability is defined as:

P(event) = (Number of favorable outcomes) / (Total number of possible outcomes)

1. Probability Scale & Interpretation
- P = 0: Impossible event (0% probability).
- 0 < P < 0.5: Unlikely to occur.
- P = 0.5: Equally likely to occur or not occur (50% chance).
- 0.5 < P < 1: Likely to occur.
- P = 1: Certain event (100% probability).

2. Sample Spaces & Favorable Outcomes
The sample space S is the complete set of all possible distinct outcomes of an experiment.

For example, when rolling a fair six-sided die:
S = {1, 2, 3, 4, 5, 6}
If the target event E is rolling an even number:
E = {2, 4, 6}, giving P(E) = 3/6 = 1/2.

3. The Master Complement Rule
The complement of event A (denoted "not A" or A') represents the event that A does NOT occur.

Since an event either occurs or does not occur, the sum of their probabilities is always 1:
P(A) + P(not A) = 1
P(not A) = 1 - P(A)

For instance, if the probability of rain is P(rain) = 0.35, then:
P(no rain) = 1 - 0.35 = 0.65

Teacher's SAT Pro-Tip:
Whenever you see the phrase "does not occur", "neither", or "all except", calculate the target event first and subtract from 1!`,
    bulletPoints: [
      "Probability scale is strictly bounded: 0 <= P(event) <= 1 (or 0% to 100%).",
      "Sample Space S contains all possible outcomes; total probability over S equals 1.",
      "The Master Complement Rule: P(not A) = 1 - P(A).",
      "Always verify that your favorable count is less than or equal to the total count."
    ],
    tables: [
      {
        title: 'Probability Scale & Likelihood Classification',
        headers: ['Probability Value P', 'Percentage Equivalent', 'Likelihood Classification', 'Example'],
        rows: [
          ['P = 0', '0%', 'Impossible', 'Rolling a 7 on a standard 6-sided die'],
          ['0 < P < 0.5', '0% to 50%', 'Unlikely', 'Rolling a 1 on a standard 6-sided die (P = 1/6)'],
          ['P = 0.5', '50%', 'Equally likely', 'Flipping heads on a fair coin (P = 1/2)'],
          ['0.5 < P < 1', '50% to 100%', 'Likely', 'Rolling a number > 1 on a 6-sided die (P = 5/6)'],
          ['P = 1', '100%', 'Certain', 'Rolling a number <= 6 on a 6-sided die']
        ]
      }
    ],
    examples: CHAPTER_9_WORKED_EXAMPLES.slice(0, 2)
  },
  {
    sectionTitle: '9.2 Simple & Experimental Probability (Law of Large Numbers)',
    fullText: `When computing probabilities from collections, always establish the total denominator count before counting favorable items.

4. Counting Favorable Outcomes
Suppose a bag contains:
- 5 Red marbles
- 3 Blue marbles
- 2 Green marbles

Step 1: Calculate the total:
Total marbles = 5 + 3 + 2 = 10

Step 2: Calculate the probability of selecting a red marble:
P(Red) = 5/10 = 1/2 = 0.5

5. Theoretical vs. Experimental Probability
- Theoretical Probability: Calculated based on mathematical symmetry, assuming all outcomes are equally likely.
- Experimental Probability: Calculated from observed empirical data collected during actual trials:
P_experimental = (Observed occurrences) / (Total trials conducted)

For example, if a spinner is spun 200 times and lands on blue 54 times:
P_experimental(Blue) = 54/200 = 0.27

According to the Law of Large Numbers, as the number of experimental trials increases, the experimental probability converges toward the true theoretical probability.

Teacher's SAT Pro-Tip:
On the Digital SAT, always identify the TOTAL set before counting favorable elements. Setting the correct denominator is step #1.`,
    bulletPoints: [
      "Golden Rule: Identify Total before counting Favorable items.",
      "Experimental probability is based on real empirical counts: (Observed count) / (Total trials).",
      "Law of Large Numbers: Larger sample sizes yield empirical estimates closer to the theoretical value."
    ],
    tables: [
      {
        title: 'Theoretical vs. Experimental Comparison',
        headers: ['Concept', 'Basis', 'Formula', 'Sensitivity to Sample Size'],
        rows: [
          ['Theoretical Probability', 'Mathematical modeling & symmetry', 'Favorable / Total possible', 'Fixed constant value'],
          ['Experimental Probability', 'Observed trial data', 'Observed count / Total trials', 'Fluctuates, converges with large N']
        ]
      }
    ]
  },
  {
    sectionTitle: '9.3 The Addition Rule & Venn Diagram Partitions',
    fullText: `The word OR indicates that we are combining possibilities (finding the union of two events).

6. Mutually Exclusive (Disjoint) Events
Two events A and B are mutually exclusive if they cannot occur at the same time (no overlap).
P(A or B) = P(A) + P(B)

Example: On a single die roll, event A = roll a 2 and event B = roll a 5. Since a single roll cannot be both 2 and 5 simultaneously:
P(A or B) = 1/6 + 1/6 = 2/6 = 1/3

7. Overlapping Events (General Addition Rule)
If two events A and B can occur at the same time, simply adding P(A) + P(B) counts their overlap twice. To correct for double counting, subtract the intersection:

P(A or B) = P(A) + P(B) - P(A and B)

Example: In a deck of 52 cards, selecting a King (K) or a Heart (H):
- P(K) = 4/52
- P(H) = 13/52
- P(K and H) = 1/52 (the King of Hearts)

P(K or H) = 4/52 + 13/52 - 1/52 = 16/52 = 4/13

8. Venn Diagram Four-Region Partition
For any two events A and B, the sample space divides into 4 distinct regions:
1. A only: P(A) - P(A and B)
2. B only: P(B) - P(A and B)
3. Both (A and B): P(A and B)
4. Neither: 1 - P(A or B)

Total = (A only) + (B only) + (Both) + (Neither)

Teacher's SAT Pro-Tip:
When solving SAT word problems with overlap, always fill in the center intersection (BOTH) first, then subtract from each circle to find the "ONLY" amounts!`,
    bulletPoints: [
      "Disjoint events cannot happen together: P(A or B) = P(A) + P(B).",
      "Overlapping events require subtraction of the overlap: P(A or B) = P(A) + P(B) - P(A and B).",
      "Venn Diagram Partition: Total = (A only) + (B only) + (Both) + (Neither).",
      "SAT Clue: 'Either A or B or both' means calculate P(A or B)."
    ],
    tables: [
      {
        title: 'Venn Diagram Four-Region Framework',
        headers: ['Region Name', 'Set Description', 'Description', 'How to Calculate'],
        rows: [
          ['A only', 'A excluding B', 'Belongs strictly to A, not B', 'Count(A) - Count(Both)'],
          ['B only', 'B excluding A', 'Belongs strictly to B, not A', 'Count(B) - Count(Both)'],
          ['Both (Overlap)', 'A and B', 'Belongs to both A and B', 'Count(A) + Count(B) + Neither - Total'],
          ['Neither', 'Neither A nor B', 'Outside both circles', 'Total - [Count(A only) + Count(B only) + Both]']
        ]
      }
    ],
    examples: CHAPTER_9_WORKED_EXAMPLES.slice(2, 4)
  },
  {
    sectionTitle: '9.4 Two-Way Contingency Tables & The "Denominator Trick"',
    fullText: `Two-way tables (contingency tables) categorize a population across two different categorical variables simultaneously.

9. Anatomy of a Two-Way Table
Consider a survey of 80 high school students:
- Grade 10: 24 play sports, 16 do not play sports, total = 40.
- Grade 11: 18 play sports, 22 do not play sports, total = 40.
- Totals: 42 play sports, 38 do not play sports, grand total = 80.

- Row Totals: Subtotals for each row (for example, Total in Grade 10 = 40).
- Column Totals: Subtotals for each column (for example, Total playing sports = 42).
- Grand Total: Bottom-right value representing the entire surveyed population (80).

10. Marginal Probability (No Condition)
When selecting a participant at random from the entire group, the denominator is always the Grand Total:
P(Grade 10) = 40/80 = 1/2
P(Plays Sports) = 42/80 = 21/40

11. Conditional Probability & The "Denominator Trick"
Conditional probability restricts the universe to a specific subgroup:
P(A given B) = Probability of A given condition B

The Denominator Trick: The condition stated after "given", "among", "of the", or "if" defines the new denominator!

Example: What is the probability that a randomly chosen student plays sports, given that the student is in Grade 11?
1. Condition: "Given Grade 11" means restrict denominator strictly to Grade 11 total = 40.
2. Favorable: Grade 11 students who play sports = 18.
P(Plays Sports given Grade 11) = 18/40 = 9/20 = 0.45

Teacher's SAT Pro-Tip:
Never use the Grand Total for a conditional probability question! Locate the "given" condition row or column subtotal and use that value as your denominator.`,
    bulletPoints: [
      "Marginal Probability: Denominator is the Grand Total (bottom-right cell).",
      "Conditional Probability P(A | B): Denominator is the row or column total of condition B.",
      "Target Keywords for Conditioning: 'given that', 'among those who', 'of the students who', 'if selected from'.",
      "The single most common SAT error is using the Grand Total when a condition is present."
    ],
    tables: [
      {
        title: 'Two-Way Table Question Interpretation Matrix',
        headers: ['SAT Question Phrasing', 'Condition', 'Denominator Used', 'Example Calculation'],
        rows: [
          ['"What fraction of all students play sports?"', 'None (All students)', 'Grand Total (80)', '42 / 80 = 21/40'],
          ['"Given a student is in Grade 10, probability they play sports?"', 'Grade 10', 'Grade 10 Total (40)', '24 / 40 = 3/5'],
          ['"Among sports players, probability of being in Grade 11?"', 'Plays Sports', 'Sports Column Total (42)', '18 / 42 = 3/7'],
          ['"Probability a randomly chosen student is Grade 10 AND plays sports?"', 'None (All students)', 'Grand Total (80)', '24 / 80 = 3/10']
        ]
      }
    ],
    examples: CHAPTER_9_WORKED_EXAMPLES.slice(4, 6)
  },
  {
    sectionTitle: '9.5 Independent vs. Dependent Events & The Multiplication Rule',
    fullText: `The word AND indicates sequential or simultaneous occurrence (finding the intersection of events).

12. Independent Events
Two events are independent if the occurrence of event A has no effect whatsoever on the probability of event B.
P(A and B) = P(A) × P(B)

Classic Examples of Independent Events:
- Flipping a coin multiple times (each flip is P(Heads) = 0.5).
- Rolling multiple dice.
- Drawing cards or items WITH replacement (returning the item resets the sample space).

13. Dependent Events (Without Replacement)
Two events are dependent if the occurrence of event A alters the sample space or probability for event B.
P(A and B) = P(A) × P(B given A)

Classic Example (Drawing WITHOUT replacement):
A box contains 5 Red and 5 Blue balls (Total = 10). Two balls are drawn consecutively without replacement:
1. P(1st is Red) = 5/10 = 1/2.
2. Remaining in box: 4 Red, 5 Blue (Total = 9).
3. P(2nd is Red given 1st was Red) = 4/9.
P(Both Red) = (5/10) × (4/9) = 20/90 = 2/9

14. Testing for Statistical Independence
To mathematically prove whether two events A and B are independent, check either of these two equivalent conditions:
P(A given B) = P(A)   or   P(A and B) = P(A) × P(B)

If the equality holds, the events are independent; if not, they are dependent.

Teacher's SAT Pro-Tip:
"With replacement" means counts reset -> Independent.
"Without replacement" means both numerator and denominator change for subsequent picks -> Dependent.`,
    bulletPoints: [
      "Independent events: P(A and B) = P(A) × P(B).",
      "Dependent events: P(A and B) = P(A) × P(B given A).",
      "Selections WITH replacement are independent; selections WITHOUT replacement are dependent.",
      "Independence Test: Events are independent if and only if P(A given B) = P(A)."
    ],
    tables: [
      {
        title: 'Independence vs. Dependence Decision Matrix',
        headers: ['Feature', 'Independent Events', 'Dependent Events'],
        rows: [
          ['Definition', 'Event A does not alter probability of B', 'Event A changes the probability of B'],
          ['Multiplication Formula', 'P(A and B) = P(A) × P(B)', 'P(A and B) = P(A) × P(B given A)'],
          ['Sampling Type', 'WITH replacement', 'WITHOUT replacement'],
          ['Independence Test', 'P(A given B) = P(A) is TRUE', 'P(A given B) = P(A) is FALSE']
        ]
      }
    ],
    examples: CHAPTER_9_WORKED_EXAMPLES.slice(6, 8)
  },
  {
    sectionTitle: '9.6 Tree Diagrams & The "At Least One" Master Shortcut',
    fullText: `Tree diagrams and the complement shortcut are two of the most effective tools for solving compound multi-stage probability problems.

15. The Golden Rules of Tree Diagrams
When representing multi-step sequential experiments with a tree diagram:
1. Multiply ALONG a single branch path (AND rule for sequential outcomes).
2. Add ACROSS distinct acceptable branch paths (OR rule for combined valid outcomes).

Memory Hook:
- ALONG = MULTIPLY
- ACROSS = ADD

16. The "At Least One" Master Shortcut
Problems asking for the probability of "at least one" success across multiple trials can be solved directly by taking the complement of "none":

P(at least one) = 1 - P(none)

For n independent trials where each trial has failure probability q = 1 - p:
P(at least one success in n trials) = 1 - qⁿ

Example: If the probability of hitting a target on any shot is p = 0.3, what is the probability of hitting the target at least once in 3 independent shots?
1. Probability of missing on a single shot: q = 1 - 0.3 = 0.7.
2. Probability of missing on all 3 shots: P(none) = (0.7)³ = 0.343.
3. Apply the shortcut:
P(at least one hit) = 1 - 0.343 = 0.657

Teacher's SAT Pro-Tip:
Never sum P(1) + P(2) + P(3) manually! Calculating 1 - P(none) takes 5 seconds and eliminates arithmetic mistakes.`,
    bulletPoints: [
      "Tree Diagram Rule: Multiply along each branch; sum across distinct successful endpoints.",
      "The 'At Least One' Master Shortcut: P(at least 1) = 1 - P(none).",
      "For n independent trials with failure probability q: P(at least 1) = 1 - qⁿ.",
      "Keywords 'at least one' or 'not all' signal an immediate complement calculation."
    ],
    tables: [
      {
        title: '"At Least One" Complement Shortcut Examples',
        headers: ['Scenario Description', 'Failure Rate q', 'Number of Trials n', 'P(none) = qⁿ', 'P(at least 1) = 1 - qⁿ'],
        rows: [
          ['At least one Head in 3 coin flips', '1/2', '3', '(1/2)³ = 1/8', '1 - 1/8 = 7/8 (87.5%)'],
          ['At least one 6 in 4 die rolls', '5/6', '4', '(5/6)⁴ = 625/1296', '1 - 625/1296 = 671/1296 (51.8%)'],
          ['At least one rain day in 5 days (p = 0.2)', '0.8', '5', '(0.8)⁵ = 0.3277', '1 - 0.3277 = 0.6723 (67.2%)']
        ]
      }
    ],
    examples: CHAPTER_9_WORKED_EXAMPLES.slice(8, 10)
  },
  {
    sectionTitle: '9.7 Counting Principles, Permutations & Combinations',
    fullText: `When computing probabilities involving large sets, use systematic counting techniques to determine total and favorable outcome counts.

17. The Fundamental Counting Principle
If an experiment involves a sequence of k independent choices where choice 1 has n1 options, choice 2 has n2 options, and so on:
Total outcomes = n₁ × n₂ × ... × nₖ

Example: A lunch special includes 4 sandwiches, 3 sides, and 2 drinks.
Total lunch combinations = 4 × 3 × 2 = 24

18. Permutations (Order Matters)
A permutation is an arrangement of items where order, position, or rank matters (AB is different from BA).
The number of permutations of n distinct objects taken r at a time is:

nPr = n! / (n - r)!

Typical Situations: Electing President/Vice President, assigning 1st/2nd/3rd place podium spots, seating order.

19. Combinations (Order Does NOT Matter)
A combination is a selection of items where group membership matters, but order does not (AB is the same as BA).
The number of combinations of n distinct objects taken r at a time is:

nCr = n! / [r! × (n - r)!]

Typical Situations: Choosing a committee of 3 students, selecting a hand of cards, picking toppings for a pizza.

20. Probability with Combinations
P(event) = (Number of favorable combinations) / (Total possible combinations) = kCr / nCr

Teacher's SAT Pro-Tip:
Ask yourself: "Does swapping two chosen members create a new outcome?"
- YES -> Permutation (nPr).
- NO -> Combination (nCr).`,
    bulletPoints: [
      "Fundamental Counting Principle: Multiply possibilities across choices (m × n × p).",
      "Permutations: Order matters (nPr = n! / (n - r)!).",
      "Combinations: Order does NOT matter (nCr = n! / [r! × (n - r)!]).",
      "Probability with Combinations = (Favorable combinations) / (Total possible combinations)."
    ],
    tables: [
      {
        title: 'Counting Methods Comparison Matrix',
        headers: ['Method', 'Does Order Matter?', 'Formula', 'Classic SAT Example'],
        rows: [
          ['Counting Principle', 'Independent stages', 'n₁ × n₂ × n₃', 'Outfits (shirts × pants × shoes)'],
          ['Permutation', 'YES (Order matters)', 'nPr = n! / (n - r)!', 'Electing President and Vice President'],
          ['Combination', 'NO (Order does not matter)', 'nCr = n! / [r! × (n - r)!]', 'Choosing a committee of 3 delegates']
        ]
      }
    ],
    examples: CHAPTER_9_WORKED_EXAMPLES.slice(10, 13)
  },
  {
    sectionTitle: '9.8 Master Translation Clues, Common SAT Traps & Strategy Checklist',
    fullText: `Review this master reference before test day to translate problem keywords directly into mathematical operations and steer clear of classic SAT traps.

21. SAT Problem Wording & Mathematical Translation
• "and" -> Multiply / Intersection: P(A and B) = P(A) × P(B)
• "or" -> Add with overlap correction: P(A or B) = P(A) + P(B) - P(A and B)
• "given" / "among" -> Conditional probability (Restrict denominator to the specified condition)
• "at least one" -> Complement rule: 1 - P(none)
• "without replacement" -> Dependent sequential draws (Reduce numerator and denominator for next pick)
• "with replacement" -> Independent sequential draws (Counts reset to initial values)
• "at most" -> Maximum allowed boundary (0, 1, 2, ... up to stated maximum)
• "at least" -> Minimum allowed boundary (Stated minimum up to maximum)

22. Ten Common SAT Traps & How to Avoid Them
1. Confusing "AND" with "OR": Remember that "AND" means intersection (multiplication), while "OR" means union (addition).
2. Forgetting Overlap Subtraction: When two events can occur simultaneously, always subtract P(A and B) from P(A) + P(B).
3. Using the Grand Total for Conditional Probability: "Given category X" means the denominator MUST be the total of category X, never the grand total.
4. Assuming Independence Without Verification: Verify mathematically using P(A given B) = P(A) or P(A and B) = P(A) × P(B).
5. Treating Draws Without Replacement as Independent: When items are removed, update both the favorable count and the total count.
6. Calculating "At Least One" the Hard Way: Use 1 - P(none) instead of summing multiple cases.
7. Confusing "At Least 3" with "Exactly 3": "At least 3" means 3 or more (3, 4, 5, ...).
8. Confusing "At Most 3" with "At Least 3": "At most 3" means 3 or fewer (0, 1, 2, 3).
9. Ignoring Order in Multi-Coin Flips: Remember that Heads-Tails and Tails-Heads are two distinct outcomes in the sample space.
10. Using Combinations for Assigned Roles: When titles (President vs. VP) or positions matter, use permutations.

23. Probability Master Checklist
• Basic probability definition: P(event) = favorable / total
• Complement rule: P(not A) = 1 - P(A)
• General addition rule: P(A or B) = P(A) + P(B) - P(A and B)
• Venn diagram 4-region decomposition
• Two-way table marginal probability (Grand total denominator)
• Two-way table conditional probability (Condition row/column denominator)
• Independent vs. dependent sequential multiplication
• Tree diagram branch multiplication and path addition
• "At least one" complement shortcut: 1 - P(none)
• Fundamental Counting Principle (m × n × p)
• Permutations (nPr) vs. Combinations (nCr)`,
    bulletPoints: [
      "Memorize the 8 SAT translation triggers to convert word prompts into equations immediately.",
      "Review the 10 SAT traps to avoid common arithmetic and reading errors on test day.",
      "Use the Probability Master Checklist to confirm mastery of all tested topics."
    ],
    tables: [
      {
        title: 'Master SAT Word-to-Math Translation Guide',
        headers: ['English Keyword', 'Probability Concept', 'Mathematical Action'],
        rows: [
          ['"and"', 'Intersection', 'Multiply probabilities: P(A) × P(B|A)'],
          ['"or"', 'Union', 'Add probabilities and subtract overlap: P(A) + P(B) - P(A ∩ B)'],
          ['"given that" / "among"', 'Conditional probability', 'Denominator becomes the subtotal of the given condition'],
          ['"at least one"', 'Complement shortcut', 'Calculate 1 - P(none)'],
          ['"without replacement"', 'Dependent sequential events', 'Decrease favorable and total counts on next pick'],
          ['"with replacement"', 'Independent sequential events', 'Maintain original counts for every pick'],
          ['"at most k"', 'Upper bound', 'Sum counts for 0, 1, ..., k'],
          ['"at least k"', 'Lower bound', 'Sum counts from k upwards (or 1 - P(below k))']
        ]
      }
    ],
    examples: CHAPTER_9_WORKED_EXAMPLES.slice(13, 15)
  }
];

export const FULL_CHAPTER_9_PROBABILITY: FullSatMathChapter = {
  id: 'ch9',
  chapterNumber: 9,
  chapterTitle: 'Probability & Counting Methods',
  pageNumber: 385,
  quote: "Probability measures likelihood on a scale from 0 to 1. Master the distinction between independent and dependent events, two-way table conditioning, and the 'at least one' shortcut to ace every probability question on the Digital SAT.",
  introduction: "Probability on the Digital SAT spans simple ratios, two-way contingency tables, conditional probability, independent versus dependent sequential events, Venn diagrams, tree diagrams, and fundamental counting principles (permutations and combinations). This comprehensive guide contains all 15 worked examples, 45 practice questions across 3 comprehensive exercise sets, 4 reference tables, 16 master shortcuts, and 10 SAT trap warnings transcribed word-for-word from official prep material.",
  sections: CHAPTER_9_THEORY_SECTIONS,
  exerciseGroups: [
    {
      exerciseNumber: 1,
      title: 'Exercise 1: Probability Foundations, Tables & Independent Events (15 Questions)',
      description: 'Foundational practice questions covering simple probability, sample spaces, the complement rule, theoretical vs. experimental data, mutually exclusive vs. overlapping addition rules, Venn diagrams, two-way contingency tables, and independent vs. dependent events.',
      questions: CHAPTER_9_PRACTICE_QUESTIONS.slice(0, 15)
    },
    {
      exerciseNumber: 2,
      title: 'Exercise 2: Conditional Probability, Tree Diagrams, Combinatorics & SAT Challenges (15 Questions)',
      description: 'Advanced practice questions covering algebraic independence testing, formal conditional probability P(A|B), multi-stage selections without replacement, tree diagram logic, the "at least one" complement shortcut, permutations, combinations, and mixed SAT challenge problems.',
      questions: CHAPTER_9_PRACTICE_QUESTIONS.slice(15, 30)
    },
    {
      exerciseNumber: 3,
      title: 'Exercise 3: Advanced SAT Probability — Elite Module 2 (15 Questions)',
      description: 'Elite Module 2 SAT challenge questions focusing on conditional probability, complements, two-way tables, multi-stage counting without replacement, statistical independence verification, and Bayes\' theorem reasoning.',
      questions: CHAPTER_9_PRACTICE_QUESTIONS.slice(30, 45)
    }
  ]
};
