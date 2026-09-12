import { WritingTheoryBlock } from './satWritingTypes';

export const THEORY_BLOCK_7: WritingTheoryBlock = {
  blockNumber: 7,
  title: "Advanced Elimination & The 5-Filter System",
  description: 'Stripping descriptive extras, core sentence reduction, resolving choices that both seem grammatical, predicting choices, and the 5-Filter Elimination System.',
  concepts: [
    {
      id: 'concept-19-27',
      title: "Advanced Elimination & 5-Filter System",
      sectionNumber: '19–27',
      fullText: `PUNCTUATION CHOICES THAT LOOK SIMILAR:
Choices: A) ,  B) ;  C) :  D) —
Do NOT compare them based on appearance. Classify structure first.

THE "STRIP THE EXTRAS" TECHNIQUE:
Long SAT sentences often contain information designed to distract you.
Example: "The historians from three archives, after conducting several years of collaborative research in European repositories, discovered a previously undocumented trade treaty."
Strip away extra material: "The historians discovered a trade treaty."

THE "CORE SENTENCE" TEST:
"The collection of rare manuscripts from several European libraries was transferred to the university."
Nearest noun = libraries (plural). Subject = collection (singular). Verb = was (singular).
Core: "The collection was transferred."

CONCEPT 22 & 23 — GRAMMAR VS. MEANING:
Filter 1 = Grammar. Filter 2 = Meaning & Logic. Never stop after Filter 1 if multiple choices survive.

ADVANCED ELIMINATION SYSTEM (5 FILTERS):
FILTER 1 — STRUCTURE: What is on each side?
FILTER 2 — HARD GRAMMATICAL ELIMINATION: Remove comma splices, run-ons, fragments.
FILTER 3 — RELATIONSHIP: Addition, contrast, cause, result, condition, time, explanation?
FILTER 4 — PRECISION: Which choice communicates the relationship most precisely?
FILTER 5 — WHOLE-SENTENCE CHECK: Read entire sentence to confirm complete correctness.`,
      rules: [
        'Filter 1: Structure -> Filter 2: Hard Grammar -> Filter 3: Relationship -> Filter 4: Precision -> Filter 5: Whole Sentence.',
        'Strip descriptive phrases to find true subject and main verb.',
        'Never choose punctuation based on spoken pause.'
      ],
      examples: [
        { label: 'EXAMPLE 1: STRIP THE EXTRAS', sentence: 'The historians from three archives, after conducting several years of collaborative research in European repositories, discovered a previously undocumented trade treaty.', isCorrect: true, explanation: 'Stripping the prepositional and participial modifiers reveals the core sentence: "The historians discovered a trade treaty."' },
        { label: 'EXAMPLE 2: CORE SENTENCE TEST', sentence: 'The collection of rare manuscripts from several European libraries was transferred to the university.', isCorrect: true, explanation: 'Subject = "collection" (singular), verb = "was transferred" (singular). "Libraries" inside the prepositional phrase does not affect verb number.' }
      ]
    }
  ]
};

export const THEORY_BLOCK_8: WritingTheoryBlock = {
  blockNumber: 8,
  title: "Multi-Clause Boundaries & Relative Clause Traps",
  description: 'The 3-Question boundary check, dependent + dependent clause patterns, relative clauses (who/which/that), restrictive vs. nonrestrictive clauses, and isolating hidden relative clauses.',
  concepts: [
    {
      id: 'concept-28-32',
      title: "Multi-Clause Boundaries & Relative Clause Traps",
      sectionNumber: '28–32',
      fullText: `THE THREE-QUESTION BOUNDARY CHECK:
Whenever punctuation is tested, ask three questions in order:
QUESTION 1: "What is immediately before the blank?"
QUESTION 2: "What is immediately after the blank?"
QUESTION 3: "What relationship should the punctuation create?"

DEPENDENT CLAUSE + DEPENDENT CLAUSE:
"Although the excavation was successful, because the site permit was available, the archaeologists decided to expand the trench."
Break it into units: [D], [D], I.

RELATIVE CLAUSES AND SENTENCE BOUNDARIES:
Relative clauses begin with who, which, that, whose, whom.
Example: "The telescope that the astrophysicists recalibrated is now operational."
Core sentence: "The telescope is now operational."

"THAT" DOES NOT AUTOMATICALLY MEAN A COMMA:
"The device that the engineers designed was unusually efficient." (No comma).
Compare: "The device, which the engineers designed last year, was unusually efficient." (Commas required).

RELATIVE CLAUSE AS A HIDDEN DISTRACTION:
"The collection of artifacts that the museum acquired last year ___ contains several rare objects."
Core structure: "The collection contains several rare objects."`,
      rules: [
        'Ask Question 1 (Before), Question 2 (After), Question 3 (Relationship).',
        'Map complex sentences into D (dependent), I (independent), P (phrase).',
        'Isolate relative clauses to prevent embedded subjects/verbs from confusing the main clause.'
      ],
      examples: [
        { label: 'EXAMPLE 1: ESSENTIAL "THAT" CLAUSE', sentence: 'The device that the engineers designed was unusually efficient.', isCorrect: true, explanation: 'Essential relative clause introduced by "that" takes no surrounding commas.' },
        { label: 'EXAMPLE 2: NONESSENTIAL "WHICH" CLAUSE', sentence: 'The device, which the engineers designed last year, was unusually efficient.', isCorrect: true, explanation: 'Nonessential clause introduced by "which" is enclosed by matching commas.' }
      ]
    }
  ]
};

export const THEORY_BLOCK_9: WritingTheoryBlock = {
  blockNumber: 9,
  title: 'Phrases as Distractions & The "Remove It" Test',
  description: 'Prepositional phrase distractors, participial phrases, infinitive phrase boundaries, appositive phrases, nonessential information, and the "Remove It" isolation test.',
  concepts: [
    {
      id: 'concept-33-38',
      title: 'Phrases as Distractions & The "Remove It" Test',
      sectionNumber: '33–38',
      fullText: `PREPOSITIONAL PHRASES AS DISTRACTIONS:
Prepositional phrases contain nouns that look like subjects.
Example: "The delegation of economists from several ministries completed the trade report."
Subject = delegation (not economists). Core = "The delegation completed the trade report."

PARTICIPIAL PHRASES:
Participial phrases begin with forms ending in -ing, -ed, -en.
Example: "Working late into the evening, the architects completed the municipal zoning blueprint."

INFINITIVE PHRASES:
Infinitive phrases begin with to + base verb.
Example: "To determine the cause of the failure, the engineers examined the equipment."

APPOSITIVE PHRASES:
An appositive renames or identifies a nearby noun.
Example: "The expedition's leader, Dr. Malik, presented the findings."

THE "REMOVE IT" TEST:
When you see a complicated middle section: REMOVE IT. Then read the remaining sentence.`,
      rules: [
        'A noun inside a prepositional phrase is never the subject of the clause.',
        'Participial (-ing/-ed) and infinitive (to + verb) phrases are NOT independent sentences.',
        'Use the "Remove It" test on nonessential interruptions.'
      ],
      examples: [
        { label: 'EXAMPLE 1: PARTICIPIAL PHRASE BOUNDARY', sentence: 'Working late into the evening, the architects completed the municipal zoning blueprint.', isCorrect: true, explanation: 'Introductory participial modifier "-ing" requires a comma before the main clause subject "architects".' },
        { label: 'EXAMPLE 2: APPOSITIVE RENAMING NOUN', sentence: 'The expedition’s leader, Dr. Malik, presented the findings.', isCorrect: true, explanation: 'Appositive "Dr. Malik" renames "leader" and is set off by commas.' }
      ]
    }
  ]
};

export const THEORY_BLOCK_10: WritingTheoryBlock = {
  blockNumber: 10,
  title: "Transition Fundamentals & The 3-Step Method",
  description: 'Logical categories of transitions, the 3-step transition method, contrast vs. concession, and addition vs. cause-and-effect result.',
  concepts: [
    {
      id: 'sections-65-67',
      title: "3-Step Transition Method, Contrast & Result",
      sectionNumber: '65–67',
      fullText: `TRANSITIONS: GRAMMAR IS NOT ENOUGH:
Transition questions test logical connection between ideas.

THE THREE-STEP TRANSITION METHOD:
STEP 1: Ignore the answer choices.
STEP 2: Explain the relationship between the two ideas in your own words.
STEP 3: Choose the transition that expresses that relationship most precisely.

CONTRAST IS NOT ALWAYS "OPPOSITE":
Signals: however, nevertheless, nonetheless, in contrast, on the other hand.

ADDITION VS. RESULT:
• ADDITION: Idea B provides another related fact (also, in addition, furthermore, moreover).
• RESULT: Idea B happens BECAUSE of Idea A (therefore, thus, consequently, as a result).`,
      rules: [
        'Step 1: Ignore choices -> Step 2: State relationship -> Step 3: Match transition.',
        'Addition = another related fact; Result = B happens because of A.',
        'Do not use "therefore" without actual cause-and-effect.'
      ],
      examples: [
        { label: 'EXAMPLE 1: CONTRAST TRANSITION', sentence: 'The initial trial yielded inconclusive results; however, subsequent tests revealed a clear pattern.', isCorrect: true, explanation: '"However" signals a contrast between initial uncertainty and later clarity.' },
        { label: 'EXAMPLE 2: CAUSE-AND-EFFECT RESULT', sentence: 'The team failed to secure additional funding; consequently, the project was delayed.', isCorrect: true, explanation: '"Consequently" establishes that the delay was a direct outcome of the funding failure.' }
      ]
    }
  ]
};

export const THEORY_BLOCK_11: WritingTheoryBlock = {
  blockNumber: 11,
  title: "Example, Sequence & False Causation Transitions",
  description: 'General-to-specific examples vs. restatement explanations, chronological sequence signals, false causation traps with "therefore", and worked transition examples.',
  concepts: [
    {
      id: 'sections-68-71',
      title: "Example, Sequence & False Causation",
      sectionNumber: '68–71',
      fullText: `EXAMPLE VS. EXPLANATION:
Example Signals: for example, for instance, specifically.
Clarification Signals: in other words, that is.

SEQUENCE AND CHRONOLOGY:
Signals: first, initially, then, next, later, subsequently, finally.

"THEREFORE" AND FALSE CAUSATION:
Master Question: Could I replace the transition with "because of this"? If no, do not choose therefore or consequently.`,
      rules: [
        'Check if B is an actual instance (For example) or a restatement (In other words).',
        'Test "because of this" before approving result transitions like Therefore or Consequently.'
      ],
      examples: [
        { label: 'EXAMPLE 1: SPECIFIC INSTANCE EXAMPLE', sentence: 'The island is home to several rare bird species; for example, the pink pigeon is found nowhere else.', isCorrect: true, explanation: '"For example" introduces a specific instance of the general category mentioned in the preceding clause.' },
        { label: 'EXAMPLE 2: RESTATEMENT CLARIFICATION', sentence: 'The compound proved nonreactive under standard conditions; in other words, it remained stable.', isCorrect: true, explanation: '"In other words" introduces a restatement/clarification rather than a new example.' }
      ]
    }
  ]
};
