import { WritingTheoryBlock } from './satWritingTypes';

export const THEORY_BLOCK_12: WritingTheoryBlock = {
  blockNumber: 12,
  title: "The Same-Direction Test & Nuanced Transitions",
  description: 'Determining argument direction (same vs. change), distinguishing similar-sounding transitions, "Instead" (replacement) vs. "In Contrast" (comparison), and "Similarly" vs. "In Addition".',
  concepts: [
    {
      id: 'sections-72-75',
      title: "Same Direction Test & Nuanced Transition Comparisons",
      sectionNumber: '72–75',
      fullText: `THE "SAME DIRECTION" TEST FOR TRANSITIONS:
• SAME DIRECTION -> Addition, Example, Result, Sequence
• CHANGE DIRECTION -> Contrast, Qualification, Concession

"INSTEAD" VS. "IN CONTRAST":
• IN CONTRAST: Idea B differs from Idea A (Comparison of two items).
• INSTEAD: Idea B replaces or substitutes for Idea A (Action replacement).

"SIMILARLY" VS. "IN ADDITION":
• SIMILARLY: "B resembles A in some relevant way".
• IN ADDITION: "B is another point alongside A".`,
      rules: [
        'INSTEAD = Replacement of an action/plan.',
        'IN CONTRAST = Comparison between two entities/ideas.',
        'SIMILARLY = Resembles previous pattern; IN ADDITION = Adds an extra fact.'
      ],
      examples: [
        { label: 'EXAMPLE 1: INSTEAD (ACTION REPLACEMENT)', sentence: 'The team decided against expanding the physical facility; instead, they invested in online infrastructure.', isCorrect: true, explanation: '"Instead" signals that online investment substituted for expanding the physical facility.' },
        { label: 'EXAMPLE 2: IN CONTRAST (COMPARISON OF TWO ITEMS)', sentence: 'Solar panels generate energy during daylight hours; in contrast, wind turbines can operate continuously.', isCorrect: true, explanation: '"In contrast" compares the operating patterns of two distinct power sources.' }
      ]
    }
  ]
};

export const THEORY_BLOCK_13: WritingTheoryBlock = {
  blockNumber: 13,
  title: "Multi-Sentence Context & Transition Decision Matrix",
  description: 'Implicit transitions without keywords, evaluating multi-sentence paragraph context, worked transition sets, and the 8-question Final Transition Master Check.',
  concepts: [
    {
      id: 'sections-76-78',
      title: "Implicit Transitions & Multi-Sentence Context",
      sectionNumber: '76–78',
      fullText: `TRANSITION QUESTIONS WITH NO OBVIOUS KEYWORD:
Infer relationship from narrative direction (Expectation -> Unexpected Evidence).

TRANSITION QUESTIONS WITH MULTIPLE SENTENCES:
Do not restrict reasoning to the two nearest sentences.

FINAL TRANSITION MASTER CHECK (8 Questions to ask in order):
1. What is main idea before blank?
2. What is main idea after blank?
3. Does second idea add, contrast, give example, explain, result, replace, resemble, or order in time?
4. Is an expectation being challenged?
5. Is transition describing causation or merely sequence?
6. Is second idea a specific instance?
7. Would transition make sense if exact words were changed?
8. Does selected transition describe actual relationship rather than sounding formal?`,
      rules: [
        'Read surrounding paragraph context if two nearest sentences do not suffice.',
        'Run Final Transition Master Check before confirming answer.'
      ],
      examples: [
        { label: 'EXAMPLE 1: MULTI-SENTENCE CONTEXT CHECK', sentence: 'Several early urban zoning proposals failed to reduce congestion. However, after expanding dedicated bus lanes, transit planners observed a significant ridership increase.', isCorrect: true, explanation: '"However" bridges the earlier failure context with the subsequent breakthrough after refinement.' }
      ]
    }
  ]
};

export const THEORY_BLOCK_14: WritingTheoryBlock = {
  blockNumber: 14,
  title: "Finding the Grammatical Core & Skeleton Reduction",
  description: 'Stripping complex sentences down to grammatical skeletons, the Core + Modifiers + Dependent Information structure, and isolating main subjects and verbs.',
  concepts: [
    {
      id: 'sections-79-80',
      title: "Skeleton Reduction & Core Structure",
      sectionNumber: '79–80',
      fullText: `SENTENCE STRUCTURE: FINDING THE REAL CORE:
Strategy: Reduce sentence to its grammatical skeleton first.
Example: "Although the marine biologists who had spent years surveying the coral atoll were initially uncertain about the reef telemetry, they eventually concluded that the sudden bleaching was caused by rising ocean temperatures."
Strip it down: "Although the marine biologists were uncertain, they concluded..." Core: "They concluded."

THE "CORE + MODIFIERS" METHOD:
CORE + MODIFIERS + DEPENDENT INFORMATION
Example: "The ancient inscriptions discovered in a highland valley by an expedition of epigraphers have provided historians with new chronologies."
Core: "The inscriptions have provided historians with new chronologies."`,
      rules: [
        'Strip intervening modifiers to reveal the core subject and finite verb.'
      ],
      examples: [
        { label: 'EXAMPLE 1: SKELETON REDUCTION', sentence: 'The ancient inscriptions discovered in a highland valley by an expedition of epigraphers have provided historians with new chronologies.', isCorrect: true, explanation: 'Stripping modifiers leaves the core subject and verb: "The inscriptions have provided new chronologies."' }
      ]
    }
  ]
};

export const THEORY_BLOCK_15: WritingTheoryBlock = {
  blockNumber: 15,
  title: "Prepositional Interventions & Subject-Verb Agreement",
  description: 'How prepositional phrases ("of + noun") obscure the true subject, verifying head noun agreement, and handling long intervening modifiers.',
  concepts: [
    {
      id: 'sections-81-82',
      title: "Prepositional Phrases & Agreement",
      sectionNumber: '81–82',
      fullText: `PREPOSITIONAL PHRASES THAT HIDE THE SUBJECT:
Prepositional phrases (of, in, on, at, by, for, from, with, among, between) separate subject from verb.
Example: "The collection of rare manuscripts from several European libraries contains valuable information."
Subject = collection (singular). Verb = contains (singular).

SUBJECT-VERB AGREEMENT INSIDE COMPLEX SENTENCES:
Ignore intervening nouns when checking agreement.
Example: "The series of excavations conducted by the field archaeologists has produced consistent stratigraphies." (series -> singular -> has produced).`,
      rules: [
        'Strip intervening prepositional phrases ("of + noun") to reveal true subject.',
        'Match verb number (singular/plural) strictly to the grammatical head noun.'
      ],
      examples: [
        { label: 'EXAMPLE 1: HEAD NOUN AGREEMENT', sentence: 'The series of excavations conducted by the field archaeologists has produced consistent stratigraphies.', isCorrect: true, explanation: 'Subject is "series" (singular), so the correct verb form is "has produced" (singular).' }
      ]
    }
  ]
};

export const THEORY_BLOCK_16: WritingTheoryBlock = {
  blockNumber: 16,
  title: 'Compound Subjects, "Along With" & "Or/Nor" Rules',
  description: 'Compound subjects joined by "and", the "along with / as well as" interrupter trap, "or / nor" proximity agreement rules, and worked subject-verb examples.',
  concepts: [
    {
      id: 'sections-83-85',
      title: 'Compound Subjects, "Along With" & "Or/Nor"',
      sectionNumber: '83–85',
      fullText: `COMPOUND SUBJECTS: WHEN "AND" CHANGES THE VERB:
"The architect and the structural engineer were responsible..." -> "And" joins 2 subjects = plural -> "were".
COMPARE: "The architect, along with the structural engineer, was responsible..." -> Main subject = architect (singular) -> "was".

COMPOUND SUBJECTS WITH "OR" AND "NOR":
With "or" and "nor", verb agrees with the subject CLOSEST to it.
Example: "The architect or the structural engineers are responsible." (Closest = structural engineers [plural] -> are).`,
      rules: [
        'AND = plural compound subject.',
        'ALONG WITH / AS WELL AS / TOGETHER WITH = parenthetical (does NOT make subject plural).',
        'OR / NOR / EITHER...OR / NEITHER...NOR = verb agrees with closest subject.'
      ],
      examples: [
        { label: 'EXAMPLE 1: "ALONG WITH" PARENTHETICAL', sentence: 'The lead scientist, along with her assistants, was awarded the grant.', isCorrect: true, explanation: '"Along with" creates a parenthetical phrase; main subject "scientist" remains singular.' },
        { label: 'EXAMPLE 2: "OR/NOR" PROXIMITY RULE', sentence: 'Neither the manager nor the technicians were aware of the defect.', isCorrect: true, explanation: 'Verb "were" agrees with the closest subject "technicians" (plural).' }
      ]
    }
  ]
};

export const THEORY_BLOCK_17: WritingTheoryBlock = {
  blockNumber: 17,
  title: 'Relative Clauses: Essentiality & "That" vs. "Which"',
  description: 'Identifying main clauses in relative sentences, essential vs. nonessential clauses, SAT usage of "that" (no comma) vs. "which" (commas), and who/which/that reference matching.',
  concepts: [
    {
      id: 'sections-86-89',
      title: "Relative Clauses & Pronoun Reference",
      sectionNumber: '86–89',
      fullText: `RELATIVE CLAUSES: IDENTIFYING THE MAIN CLAUSE:
Relative clauses describe a noun using who, whom, whose, which, that.

ESSENTIAL VS. NONESSENTIAL INFORMATION:
• Nonessential: Set off with commas (which).
• Essential: No commas (that).

"THAT" VS. "WHICH":
"that" = essential clause (no commas). "which" = nonessential clause (commas required).

WHO, WHICH, AND THAT:
WHO -> people; WHICH -> things/animals; THAT -> essential clauses.`,
      rules: [
        'Nonessential relative clause = Commas required (which).',
        'Essential relative clause = No commas (that).',
        'Who = People; Which = Things/Animals.'
      ],
      examples: [
        { label: 'EXAMPLE 1: WHO VS WHICH REFERENCE', sentence: 'The astronomer who discovered the comet presented her data at the conference.', isCorrect: true, explanation: 'Uses "who" to refer to a person ("astronomer").' }
      ]
    }
  ]
};
