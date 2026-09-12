import { WritingTheoryBlock } from './satWritingTypes';

export const THEORY_BLOCK_1: WritingTheoryBlock = {
  blockNumber: 1,
  title: 'Block 1: Multi-Rule Decision Making',
  description: 'What makes a question Elite, avoiding single-rule traps, constraint stacking, minimum change principle, before/after method, local/global balance, and certainty/scope control.',
  concepts: [
    {
      id: 'ch7-b1-c1',
      title: '1. What Makes a Writing Question "Elite"?',
      fullText: `An elite Writing question is not necessarily difficult because the grammar rule is obscure.
It is difficult because **multiple answer choices appear defensible**.

At this level, you must determine:
1. What the sentence is trying to accomplish.
2. Which grammatical construction is required.
3. Whether the wording preserves the intended meaning.
4. Whether the sentence fits the surrounding context.
5. Whether the answer introduces a new error.

The central elite skill is therefore:
> **Do not ask only, "Is this answer correct?" Ask, "Is this answer the best complete solution to every constraint in the passage?"**`
    },
    {
      id: 'ch7-b1-c2',
      title: '2. The Single-Rule Trap',
      fullText: `An intermediate student often notices one rule and immediately selects an answer.
An elite question may deliberately make one answer satisfy that rule while failing another.

### Example
> The researchers analyzed the samples, ___ the results were inconsistent.

A student may think: *"I need punctuation."*
But punctuation alone is insufficient. The relationship is contrast.

The complete decision is:
> **sentence relationship + punctuation + conjunction**

A semicolon alone cannot express the contrast without the proper logical conjunction or transition. The answer must satisfy all three requirements simultaneously.`
    },
    {
      id: 'ch7-b1-c3',
      title: '3. The Elite Constraint Stack',
      fullText: `For difficult questions, evaluate answers in this strict order:

### Constraint 1 — Grammar
Is the construction grammatically valid?

### Constraint 2 — Logic
Does the relationship between ideas make sense?

### Constraint 3 — Meaning
Does the answer preserve the intended meaning?

### Constraint 4 — Context
Does it fit the surrounding sentences?

### Constraint 5 — Style
Is it appropriately concise and precise?

> **Rule:** A choice that fails an earlier constraint is eliminated before you worry about later ones.`
    },
    {
      id: 'ch7-b1-c4',
      title: '4. The "All Conditions" Rule & Minimum-Change Principle',
      fullText: `### The "All Conditions" Rule
Suppose four answer choices exist:
* **A:** Grammatically correct, logically incorrect.
* **B:** Grammatically incorrect, logically correct.
* **C:** Grammatically correct, logically correct, slightly wordy.
* **D:** Grammatically correct, logically correct, precise, concise.
The answer is **D**. Elite questions work by making A, B, and C attractive for different incomplete reasons.

---

### The Minimum-Change Principle
When a sentence is already mostly functional, do not change more than necessary.

Ask:
> **What is the smallest correction that completely fixes the problem?**

This prevents over-editing.
*Example:* "The researchers tested the device, and discovered a flaw."
The problem is the unnecessary comma before "and" because the second part does not contain an independent clause. Remove the comma; do not rewrite the entire sentence.`
    },
    {
      id: 'ch7-b1-c5',
      title: '5. Diagnostic Methods: Before/After, Local/Global & Hidden Variables',
      fullText: `### The "New Error" Test
After finding a choice that fixes the original problem, inspect the entire resulting sentence and ask:
> **What did this answer break?**
Check for comma splices, agreement errors, pronoun ambiguity, illogical comparisons, or redundancy.

---

### The "Before and After" Method
Never evaluate only the inserted phrase. Read:
> **the entire sentence before the change** → **the change** → **the entire sentence after the change.**

---

### The "Local + Global" Method
Every difficult question operates on two levels:
* **Local level:** What happens immediately around the blank?
* **Global level:** What is the paragraph doing?

---

### Certainty, Scope & Causation Control
Elite answers frequently differ by only one degree of certainty or scope:
* **Certainty:** *may / can / likely / generally / will / always* (These are NOT interchangeable).
* **Scope:** *some → all*, *several → every*, *one study → researchers generally*.
* **Causation:** Distinguish *occurred after* (sequence) from *caused* (causation), and *associated with* from *produced*.`
    },
    {
      id: 'ch7-b1-c6',
      title: '6. Master Technique: Constraint Lock & Answer Survival',
      fullText: `### Elite Technique: Constraint Lock
Before looking at answer choices, mentally lock the constraints:
> **"I need X, but I cannot change Y."**
*Example:* "I need a contrast transition, but I cannot imply that the second result completely contradicts the first."

---

### Elite Technique: Answer Survival
Make each candidate answer survive five sequential tests:
> **Grammar → Logic → Meaning → Context → Precision**

### Block 1 Master Rule
> **An elite answer is not the answer that solves one problem. It is the answer that solves the problem without creating another one.**`
    }
  ]
};

export const THEORY_BLOCK_2: WritingTheoryBlock = {
  blockNumber: 2,
  title: 'Block 2: Advanced Distractor Analysis and Cross-Concept Integration',
  description: 'Why elite questions feel different, four-choice differentiation model, hidden quantifiers, time markers, causal verbs, comparisons, subjects, and three-layer reading.',
  concepts: [
    {
      id: 'ch7-b2-c1',
      title: '1. Why Elite Questions Feel Different & The 4-Choice Model',
      fullText: `At the highest level, four choices may all appear grammatically acceptable.
The real distinction may be precision, logical consistency, rhetorical purpose, evidence strength, sentence function, or cross-concept interaction.

> **Grammar is sometimes only the first filter, not the final decision.**

---

### The Four-Choice Differentiation Model
For every difficult question, classify each choice:
* **Type A — Structural failure:** Violates grammar or punctuation.
* **Type B — Logical failure:** Creates an illogical relationship.
* **Type C — Evidence/meaning failure:** Changes what the passage establishes.
* **Type D — Fully functional:** Survives all relevant tests.

Your job is to identify **Type D**.`
    },
    {
      id: 'ch7-b2-c2',
      title: '2. The "One-Word Distractor" & Hidden Variables',
      fullText: `Elite questions often differ by a single word. Never skim small words.

### The Hidden Quantifier
Watch: *all, every, most, many, some, few, several, one, only*.
These words determine scope.
*Evidence:* "Several participants improved."
*Unsupported:* "Most participants improved."

---

### The Hidden Time Marker
Watch: *initially, later, previously, subsequently, eventually, currently, historically*.
A distractor may preserve every major fact while quietly changing the timeline.

---

### The Hidden Causal Verb
Compare: *followed → accompanied → was associated with → contributed to → caused*.
These express increasingly strong relationships. Choose the weakest relationship that fully represents the evidence when causation is not established.`
    },
    {
      id: 'ch7-b2-c3',
      title: '3. Hidden Comparisons, Subjects, and Purposes',
      fullText: `### The Hidden Comparison
*Consider:* "The new method was more effective." → *More effective than what?*
A comparison becomes logically incomplete if the reference point is missing unless context supplies it implicitly.

---

### The Hidden Subject
*Consider:* "Unlike earlier studies, researchers found that the results were inconsistent."
*Problem:* Grammatically places "researchers" after "Unlike earlier studies."
*Correction:* "Unlike earlier studies, the new study produced inconsistent results."

---

### The Hidden Purpose
A sentence can be true and grammatically perfect but fail the rhetorical goal.
Always identify the job required before evaluating wording.`
    },
    {
      id: 'ch7-b2-c4',
      title: '4. Three-Layer Reading & Cross-Concept Integration',
      fullText: `For elite questions, read at three levels simultaneously:
* **Layer 1 — Sentence:** What grammar and wording are required?
* **Layer 2 — Paragraph:** How does the sentence connect to surrounding ideas?
* **Layer 3 — Passage:** What larger argument or purpose is being developed?

---

### Cross-Concept Integration
An elite question may simultaneously test:
* *punctuation + sentence boundaries + transition*
* *modifier placement + comparison + logical meaning*
* *concision + rhetorical purpose + evidence*

Do not label the question too early. First solve the complete problem.`
    },
    {
      id: 'ch7-b2-c5',
      title: '5. Core Rules: Precision, Style, and Elimination Grid',
      fullText: `### Do Not Repair What Isn't Broken
Elite distractors sometimes tempt you to replace a perfectly functional construction with something more complex. More complicated does not mean better.

---

### Precision Without Expansion
Improve wording without adding new unsupported information.
*Original:* "The device reduced energy use."
*Acceptable:* "The device reduced energy consumption."
*Problematic:* "The highly innovative device dramatically reduced energy consumption."

---

### Style Cannot Override Logic or Grammar
Always prioritize **accuracy over elegance**. An elegant sentence is wrong if it creates a grammatical problem or an unsupported claim.

---

### Block 2 Master Technique
When two answers both look correct: **find the smallest difference between them** and ask: *What does that difference change?*`
    }
  ]
};

export const THEORY_BLOCK_3: WritingTheoryBlock = {
  blockNumber: 3,
  title: 'Block 3: Rhetorical Purpose Under Competing Constraints',
  description: 'The Function-First method, introduction vs. support, evidence vs. interpretation, claim vs. qualification, paragraph architecture, missing link principle, and balanced synthesis.',
  concepts: [
    {
      id: 'ch7-b3-c1',
      title: '1. The Elite Writing Mindset & Function-First Method',
      fullText: `At the highest level, a Writing question may give you several answers that are grammatically correct, logically possible, factually related, and stylistically acceptable.
Yet only one performs the **exact rhetorical job** required.

The question becomes:
> **"Which sentence is correct AND performs the precise function the passage needs?"**

---

### The Function-First Method
Before looking at choices, complete this sentence mentally:
> **"The passage needs a sentence that..."** *(e.g., "...explains why the finding matters.")*

Then evaluate every choice against that exact functional requirement.`
    },
    {
      id: 'ch7-b3-c2',
      title: '2. Functional Distinctions: Intro, Support, Evidence, Interpretation',
      fullText: `### Introduction vs. Support
* **Introduction:** Establishes what the reader is about to learn.
* **Support:** Provides information about something already introduced.

---

### Evidence vs. Interpretation
* *Evidence:* "In a three-year trial, participants completed tasks 18% faster."
* *Interpretation:* "The results suggest that the method may improve efficiency."

Do not turn evidence into an interpretation unless the passage supports that inference.

---

### Claim vs. Qualification
A qualification narrows or limits a claim.
*Example:* "The technology can reduce energy use in certain industrial settings."
Removing "certain" changes the scope to all industrial settings, which may no longer match the evidence.`
    },
    {
      id: 'ch7-b3-c3',
      title: '3. Rhetorical Purpose vs. Factual Truth & Diagnostic Tests',
      fullText: `### Truth Alone Is Insufficient
Suppose a paragraph explains why a scientific discovery is important.
* *Choice A:* "The scientist was born in 1978." (True, but wrong function)
* *Choice B:* "The discovery allowed researchers to measure the phenomenon more accurately." (True and correct function)

> **Truth is necessary, but relevance is also necessary.**

---

### The "Delete It" Test
For a sentence that seems unnecessary, temporarily remove it and ask: *Does the paragraph lose an essential logical connection?*

---

### The "Replace It" Test
Mentally insert candidate choices and read: **previous sentence → answer → following sentence**. Ensure a smooth logical progression.`
    },
    {
      id: 'ch7-b3-c4',
      title: '4. Paragraph Architecture & Missing Links',
      fullText: `Strong paragraphs often follow architectural patterns:
* **Claim → Evidence → Explanation**
* **Background → Development → Significance**
* **Problem → Method → Result**
* **Observation → Contrast → Conclusion**

Recognizing the architecture helps you predict what kind of sentence belongs in a blank.

---

### The "Missing Link" Principle
When surrounding sentences are individually clear but their relationship feels disconnected, the missing sentence provides the bridge (e.g., **fact → significance**).`
    },
    {
      id: 'ch7-b3-c5',
      title: '5. Rhetorical Synthesis: No Extra & No Missing Claims',
      fullText: `### The "No Extra Claim" Rule
If notes establish that a method is faster and costs less:
* *Safe:* "The method is faster and less expensive."
* *Unsafe:* "The method is superior in every respect." (Goes beyond evidence).

---

### The "No Missing Claim" Rule
If the passage establishes *faster, cheaper, and more accurate*, an answer mentioning only *faster* is incomplete if the prompt asks to synthesize all findings.

---

### Block 3 Master Technique
When a question asks what belongs in a passage:
> **Do not ask what sounds best in isolation. Ask what the paragraph needs next.**
The strongest answer creates the correct **function → relationship → evidence → progression**.`
    }
  ]
};
