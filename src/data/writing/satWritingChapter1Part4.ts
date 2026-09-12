import { WritingTheoryBlock } from './satWritingTypes';

export const THEORY_BLOCK_18: WritingTheoryBlock = {
  blockNumber: 18,
  title: "Dangling & Misplaced Modifiers",
  description: 'Dangling modifier identification, ensuring the actor immediately follows opening commas, placing modifiers adjacent to target nouns, and worked modifier examples.',
  concepts: [
    {
      id: 'sections-90-92',
      title: "Dangling & Misplaced Modifiers",
      sectionNumber: '90–92',
      fullText: `DANGLING MODIFIERS:
A modifier must logically describe the noun immediately following it.
INCORRECT: "After cataloging the 19th-century census ledgers, the archival discrepancies surprised the historians."
CORRECT: "After cataloging the 19th-century census ledgers, the historians were surprised by the archival discrepancies."

MODIFIER PLACEMENT:
Position modifiers close to the word they describe to avoid ambiguity.
Ambiguous: "The ornithologists observed the warblers using spotting scopes."
Clear: "Using spotting scopes, the ornithologists observed the warblers."`,
      rules: [
        'Introductory modifier MUST be followed immediately by the noun performing the action.',
        'Place modifiers directly adjacent to the word they modify.'
      ],
      examples: [
        { label: 'EXAMPLE 1: DANGLING MODIFIER CORRECTION', sentence: 'After cataloging the 19th-century census ledgers, the historians were surprised by the archival discrepancies.', isCorrect: true, explanation: 'The subject "historians" immediately follows the comma, matching the action "cataloging the census ledgers".' },
        { label: 'TRAP EXAMPLE: DANGLING MODIFIER', sentence: 'After cataloging the 19th-century census ledgers, the archival discrepancies surprised the historians.', isCorrect: false, explanation: 'Implies the "archival discrepancies" cataloged the ledgers, creating a dangling modifier error.' }
      ]
    }
  ]
};

export const THEORY_BLOCK_19: WritingTheoryBlock = {
  blockNumber: 19,
  title: "Participial, Infinitive & Appositive Phrases",
  description: 'Participial -ing/-ed modifiers, -ed passive modifier actor checks, infinitive purpose phrases (to + verb), and appositive renaming mechanics.',
  concepts: [
    {
      id: 'sections-93-96',
      title: "Participial, Infinitive & Appositives",
      sectionNumber: '93–96',
      fullText: `PARTICIPIAL PHRASES AND WHAT THEY MODIFY:
Participial phrases begin with -ing, -ed, -en forms.

-ED MODIFIERS AND PASSIVE MEANING:
An -ed modifier describes something affected by an action ("Built in the nineteenth century, the bridge remains...").

INFINITIVE PHRASES AS MODIFIERS:
Infinitive phrases begin with to + base verb ("To improve acoustic insulation, the architects installed perforated panels...").

APPOSITIVES: RENAMING A NOUN:
An appositive renames or identifies a nearby noun ("The expedition's leader, Dr. Malik, presented...").`,
      rules: [
        'Infinitive / Participial opening phrase -> Actor MUST follow comma immediately.',
        'Nonessential appositive renames noun and takes comma pair.'
      ],
      examples: [
        { label: 'EXAMPLE 1: -ED PASSIVE MODIFIER', sentence: 'Built in the nineteenth century, the bridge remains operational today.', isCorrect: true, explanation: '"Built..." correctly modifies "the bridge" immediately following the comma.' },
        { label: 'EXAMPLE 2: INFINITIVE PURPOSE MODIFIER', sentence: 'To improve acoustic insulation, the architects installed perforated wall panels.', isCorrect: true, explanation: '"To improve..." correctly modifies "the architects" who installed the panels.' }
      ]
    }
  ]
};

export const THEORY_BLOCK_20: WritingTheoryBlock = {
  blockNumber: 20,
  title: "Nonessential Interrupters & Introductory Boundaries",
  description: 'Matching opening and closing interrupter punctuation, comma placement after introductory phrases/clauses, and worked interrupter questions.',
  concepts: [
    {
      id: 'sections-97-99',
      title: "Interrupters & Introductory Boundaries",
      sectionNumber: '97–99',
      fullText: `INTERRUPTERS: REMOVE THEM FIRST:
Nonessential information inside commas, dashes, or parentheses: verify matching punctuation pair.

COMMAS WITH INTRODUCTORY ELEMENTS:
A comma marks boundary after introductory phrases/clauses before the main clause.`,
      rules: [
        'Interrupters must have matching opening and closing punctuation marks.',
        'Introductory clauses and long phrases take a comma before main clause.'
      ],
      examples: [
        { label: 'EXAMPLE 1: MATCHED PAIR OF COMMAS', sentence: 'The novel, published posthumously in 1952, received wide critical acclaim.', isCorrect: true, explanation: 'The interrupter phrase is enclosed by a matching pair of commas.' }
      ]
    }
  ]
};

export const THEORY_BLOCK_21: WritingTheoryBlock = {
  blockNumber: 21,
  title: "Who vs. Whom vs. Whose & Pronoun Agreement",
  description: 'The He/Him substitution test for who vs. whom, possession with whose, pronoun-antecedent agreement, and resolving ambiguous pronouns.',
  concepts: [
    {
      id: 'sections-100-103',
      title: "Relative Pronouns, Possessives & Agreement",
      sectionNumber: '100–103',
      fullText: `RELATIVE CLAUSES: WHO, WHOM, AND WHOSE:
• WHO -> subject referring to a person (He/She/They)
• WHOM -> object referring to a person (Him/Her/Them)
• WHOSE -> possessive

PRONOUN-ANTECEDENT AGREEMENT:
Pronoun must match antecedent in number (singular vs plural).

AMBIGUOUS PRONOUNS:
A pronoun must have exactly one clear antecedent.`,
      rules: [
        'He/She/They = WHO; Him/Her/Them = WHOM; Possessive = WHOSE.',
        'Pronoun must agree in number with its true antecedent.',
        'Eliminate ambiguous pronouns that could refer to multiple nouns.'
      ],
      examples: [
        { label: 'EXAMPLE 1: WHO VS WHOM TEST', sentence: 'The scientist whom the committee selected presented the keynote address.', isCorrect: true, explanation: 'Test: The committee selected HIM -> WHOM is correct.' },
        { label: 'EXAMPLE 2: PRONOUN-ANTECEDENT AGREEMENT', sentence: 'Each participant submitted his or her consent form before the trial began.', isCorrect: true, explanation: 'Singular antecedent "Each participant" takes singular pronoun "his or her".' }
      ]
    }
  ]
};

export const THEORY_BLOCK_22: WritingTheoryBlock = {
  blockNumber: 22,
  title: "Advanced Comma Splices, Clause Connections & Synthesis",
  description: 'Comma splice hazards with transition words, 4 main ways to connect independent clauses, the Period Test for semicolons, FANBOYS traps, ultra-fast SAT routines, and full diagnostic method.',
  concepts: [
    {
      id: 'sections-104-106',
      title: "Advanced Comma Splices & Synthesis Diagnostic",
      sectionNumber: '104–106',
      fullText: `SECTION 104 & 105 — COMMA SPLICES WITH TRANSITIONS:
A transition word does NOT make a comma strong enough to join two independent clauses.
Incorrect: "The initial restoration produced uneven mortar adhesion, however, the masons repeated the application." (Comma splice!).
Correct: "The initial restoration produced uneven mortar adhesion; however, the masons repeated the application."

THE FULL DIAGNOSTIC METHOD:
Step 1: Find independent clauses. Step 2: Find dependent clauses. Step 3: Remove nonessential information. Step 4: Find true subject & match verb. Step 5: Check modifier & pronoun clarity. Step 6: Evaluate punctuation & transition logic.`,
      rules: [
        'Transition words (however, furthermore, therefore) between independent clauses REQUIRE a semicolon or period.'
      ],
      examples: [
        { label: 'TRAP EXAMPLE: TRANSITION COMMA SPLICE', sentence: 'The initial restoration produced uneven mortar adhesion, however, the masons repeated the application.', isCorrect: false, explanation: 'Inserting "however" between two independent clauses with only a comma creates a severe comma splice.' },
        { label: 'CORRECT FIX: SEMICOLON + TRANSITION', sentence: 'The initial restoration produced uneven mortar adhesion; however, the masons repeated the application.', isCorrect: true, explanation: 'A semicolon before the transition word "however" provides the required strong clause boundary.' }
      ]
    },
    {
      id: 'sections-107-113',
      title: "Clause Connections, Semicolons & FANBOYS Rules",
      sectionNumber: '107–113',
      fullText: `THE FOUR MAIN WAYS TO CONNECT TWO INDEPENDENT CLAUSES:
1. Period: "Idea. Idea."
2. Semicolon: "Idea; idea."
3. Comma + FANBOYS: "Idea, and idea."
4. Colon: "Idea: explanation."

THE SEMICOLON PERIOD TEST:
Replace semicolon with a period. Both sides must be complete independent clauses.

SECTION 111 & 112 — FANBOYS TRAPS:
Look immediately right of FANBOYS. If new subject + verb begins -> comma + FANBOYS. If same subject continues -> no comma.

ULTRA-FAST SAT ROUTINE:
See Punctuation -> Find Clause 1 -> Find Clause 2 -> Can each stand alone?
If YES: Period / Semicolon / Comma + FANBOYS.
If NO: Do NOT use semicolon automatically.`,
      rules: [
        'Comma + transition between two independent clauses is ALWAYS a comma splice.',
        'Period Test: Both sides of a semicolon MUST be independent clauses.',
        'Comma + FANBOYS requires complete subject + verb on right side.'
      ],
      examples: [
        { label: 'EXAMPLE 1: FANBOYS SUBJECT CHECK', sentence: 'The team conducted tests and recorded data.', isCorrect: true, explanation: 'No comma before "and" because "recorded data" does not contain a new subject.' },
        { label: 'EXAMPLE 2: FANBOYS WITH NEW SUBJECT', sentence: 'The team conducted tests, and the assistant recorded data.', isCorrect: true, explanation: 'Comma before "and" is required because a new subject ("assistant") and verb ("recorded") follow.' }
      ]
    }
  ]
};
