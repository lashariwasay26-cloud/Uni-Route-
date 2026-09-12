import { WritingTheoryBlock } from './satWritingTypes';

export const THEORY_BLOCK_1: WritingTheoryBlock = {
  blockNumber: 1,
  title: "Master Principle & Sentence Foundations",
  description: 'Master decision tree principle, definition of complete sentences, independent clause criteria, dependent clause indicators, and sentence fragment diagnostics.',
  concepts: [
    {
      id: 'master-principle',
      title: "Master Principle & Chapter Purpose",
      sectionNumber: 'Intro',
      fullText: `PURPOSE OF THIS CHAPTER:
A large class of SAT Writing questions tests whether ideas have been connected correctly.
The challenge is not simply knowing what a comma, period, or semicolon is.
The real skill is determining:
1. What kind of grammatical unit appears before the punctuation?
2. What kind of grammatical unit appears after it?
3. Are the two ideas independent or dependent?
4. What relationship exists between them?
5. Which punctuation or connector can legally join them?
6. Which answer choices can be eliminated immediately?

The most important habit in this chapter is:
DO NOT CHOOSE PUNCTUATION BY HOW THE SENTENCE "SOUNDS."
Instead, diagnose the grammatical structure.

MASTER PRINCIPLE:
Before choosing an answer, identify the structures on BOTH sides of the tested location.
Ask:
"What is immediately before the blank?"
"What is immediately after the blank?"
Then determine whether each side is capable of standing as a complete sentence. This single habit prevents many of the most common sentence-boundary errors.`,
      rules: [
        'Do not choose punctuation by how the sentence sounds. Diagnose the grammatical structure.',
        'Identify the structures on BOTH sides of the tested location before choosing an answer.',
        'Ask: What is immediately before the blank? What is immediately after the blank?',
        'Determine whether each side is capable of standing as a complete sentence.'
      ],
      examples: [
        { label: 'MASTER PRINCIPLE DIAGNOSTIC', sentence: 'What is before the blank? (Clause 1) | What is after the blank? (Clause 2)', isCorrect: true, explanation: 'Always identify the grammatical unit on BOTH sides before selecting a connector or punctuation mark.' },
        { label: 'DIAGNOSTIC TEST EXAMPLE', sentence: 'The astrophysicist calibrated the high-resolution spectrograph ___ the international consortium detected an anomalous exoplanetary transit.', isCorrect: true, explanation: 'Left side = Independent clause ("The astrophysicist calibrated the high-resolution spectrograph"). Right side = Independent clause ("the international consortium detected..."). Therefore, a comma alone is illegal; a period, semicolon, or comma + FANBOYS is required.' }
      ]
    },
    {
      id: 'concept-1',
      title: "What is a Complete Sentence?",
      sectionNumber: 1,
      fullText: `A complete sentence expresses a complete grammatical thought.
For the SAT, the most useful practical test is whether the portion being considered contains:
• a subject
• a properly functioning verb
• a complete thought

A sentence can be short:
"The archivist sighed."
Or long:
"After several decades of meticulous preservation, the fragile parchment from the fourteenth-century guild hall finally arrived at the national repository."

Length does not determine whether something is a sentence.
A very long group of words can still be incomplete.
A very short group of words can be complete.

THE CORE TEST:
When you see a possible sentence boundary, temporarily ignore extra descriptive material. Find the core subject and verb.
Example:
"The economic historians, after surveying several centuries of maritime customs manifests, published their demographic treatise."
Core: "The economic historians published."
That is a complete thought. Therefore, the original sentence contains an independent clause.

IMPORTANT DISTINCTION:
A phrase is not necessarily a clause.
A clause contains a subject and a verb.
A phrase does not contain a complete subject-verb structure.
Example:
"After the architectural symposium" -> This is a phrase. It does not contain a subject performing a verb.
Example:
"After the urban planners concluded the public zoning hearing" -> This contains a subject and a verb (subject = urban planners, verb = concluded). But it still does NOT necessarily form an independent sentence, because "after" makes the clause dependent.

RECOGNITION TECHNIQUE:
When you encounter a boundary question:
STEP 1: Find the main verb.
STEP 2: Find the subject performing that verb.
STEP 3: Temporarily remove introductory and descriptive material.
STEP 4: Ask whether the remaining structure expresses a complete thought.

EXAMPLE 1:
"The paleoclimatologist extracted glacial core samples." -> Complete sentence? YES. (Subject: paleoclimatologist; Verb: extracted; Object: glacial core samples. The thought is complete.)

EXAMPLE 2:
"Because the paleoclimatologist extracted glacial core samples" -> Complete sentence? NO. (Contains subject and verb, but "because" subordinates the clause. The reader expects a main clause explaining the consequence: "Because the paleoclimatologist extracted glacial core samples, the research team revised its atmospheric timeline.")

EXAMPLE 3:
"The paleoclimatologist extracting glacial core samples" -> Complete sentence? NO. (There is no finite main verb forming a complete independent thought. This is a participial fragment.)

SAT TRAP:
Do not assume: "Subject + verb = complete sentence."
Words such as because, although, while, when, if, unless, since, before, after, which, who, that can make a clause dependent. Always inspect the entire grammatical structure.

ELIMINATION TECHNIQUE:
If one answer creates a complete sentence and another creates a fragment, you can often eliminate the fragment immediately. However, do NOT stop there if multiple answers produce complete sentences. You must then determine how the complete ideas are supposed to connect.`,
      examples: [
        { label: 'Short Sentence', sentence: 'The archivist sighed.', isCorrect: true, explanation: 'Complete thought with subject (archivist) and finite verb (sighed).' },
        { label: 'Long Sentence', sentence: 'After several decades of meticulous preservation, the fragile parchment from the fourteenth-century guild hall finally arrived at the national repository.', isCorrect: true, explanation: 'Length and multiple prepositional modifiers do not compromise grammatical completeness.' },
        { label: 'Fragment Example (Dependent)', sentence: 'Because the paleoclimatologist extracted glacial core samples', isCorrect: false, explanation: 'Subordinating conjunction "because" leaves the causal thought incomplete without a main clause.' },
        { label: 'Fragment Example (Participle)', sentence: 'The paleoclimatologist extracting glacial core samples', isCorrect: false, explanation: 'Participial form "extracting" lacks an auxiliary verb (e.g., "was extracting") and cannot function as a finite predicate.' }
      ]
    },
    {
      id: 'concept-2',
      title: "Independent Clauses",
      sectionNumber: 2,
      fullText: `An independent clause is a group of words that contains a subject and a finite verb and can stand alone as a complete sentence.
Example 1:
"The epigraphers deciphered the cuneiform tablet."
Contains: Subject -> epigraphers; Verb -> deciphered; Complete thought -> yes. Therefore, it is independent.

Example 2:
"The archaic dialect puzzled the linguistic philologists."
Subject -> dialect; Verb -> puzzled; Complete thought -> yes. Independent clause.

WHY THIS MATTERS:
Suppose the SAT gives:
"The epigraphers deciphered the cuneiform tablet ___ the archaic dialect puzzled the linguistic philologists."
There are independent clauses on both sides. That immediately tells you that certain punctuation choices are possible and others are not:
- A comma by itself CANNOT properly join the two independent clauses.
- A period CAN separate them.
- A semicolon CAN separate them.
- A comma followed by an appropriate coordinating conjunction CAN join them.

This is the foundation of sentence-boundary questions.

EXAMPLE 1 (Semicolon):
"The epigraphers deciphered the cuneiform tablet; the archaic dialect puzzled the linguistic philologists."
Before semicolon: independent. After semicolon: independent. Semicolon correctly separates them.

EXAMPLE 2 (Period):
"The epigraphers deciphered the cuneiform tablet. The archaic dialect puzzled the linguistic philologists."
Independent + independent. A period correctly separates them into two distinct sentences.

EXAMPLE 3 (Comma + Coordinating Conjunction):
"The epigraphers deciphered the cuneiform tablet, but the archaic dialect puzzled the linguistic philologists."
First clause independent; second clause independent. "But" connects them with a contrast relationship; comma works with the conjunction.

WRONG EXAMPLE (Comma Splice):
"The epigraphers deciphered the cuneiform tablet, the archaic dialect puzzled the linguistic philologists."
This creates: Independent clause + comma + independent clause. That structure is a comma splice. A comma alone cannot perform the job required here.

FAST RECOGNITION:
When you see: [complete sentence] ___ [complete sentence]
Immediately consider:
• period
• semicolon
• comma + coordinating conjunction (FANBOYS)
Then inspect the answer choices. If an answer contains only a comma between the two independent clauses, eliminate it.

IMPORTANT WARNING:
Do not memorize: "Independent clause + independent clause = semicolon."
That is incomplete. A semicolon is one possible solution, but a period or an appropriate coordinating conjunction may also work depending on the logical relationship.`,
      rules: [
        'A comma alone cannot join two independent clauses (comma splice).',
        'Independent clauses can be joined by: Period, Semicolon, or Comma + Coordinating Conjunction (FANBOYS).'
      ],
      examples: [
        { label: 'EXAMPLE 1: SEMICOLON BOUNDARY', sentence: 'The epigraphers deciphered the cuneiform tablet; the archaic dialect puzzled the linguistic philologists.', isCorrect: true, explanation: 'Both sides are independent clauses. A semicolon correctly joins them without a coordinating conjunction.' },
        { label: 'EXAMPLE 2: PERIOD BOUNDARY', sentence: 'The epigraphers deciphered the cuneiform tablet. The archaic dialect puzzled the linguistic philologists.', isCorrect: true, explanation: 'A period cleanly separates two independent clauses into distinct complete sentences.' },
        { label: 'EXAMPLE 3: COMMA + FANBOYS', sentence: 'The epigraphers deciphered the cuneiform tablet, but the archaic dialect puzzled the linguistic philologists.', isCorrect: true, explanation: 'Independent clause + comma + coordinating conjunction ("but") + independent clause is grammatically complete.' },
        { label: 'TRAP EXAMPLE: COMMA SPLICE', sentence: 'The epigraphers deciphered the cuneiform tablet, the archaic dialect puzzled the linguistic philologists.', isCorrect: false, explanation: 'Two independent clauses joined only by a comma creates an illegal comma splice.' }
      ]
    },
    {
      id: 'concept-3',
      title: "Dependent Clauses",
      sectionNumber: 3,
      fullText: `A dependent clause contains a subject and verb but cannot function as an independent sentence because it begins with a subordinating element.
Common signals include subordinating words such as:
because, although, while, when, if, unless, before, after, since, whereas.

Example:
"Although the maritime archaeologists mapped the submerged reef"
Subject: maritime archaeologists; Verb: mapped.
The subordinating conjunction "although" establishes an incomplete concessive relationship. The reader expects a main clause. Therefore, it is dependent.

COMPARE:
INDEPENDENT: "The maritime archaeologists mapped the submerged reef."
DEPENDENT: "Although the maritime archaeologists mapped the submerged reef"
The key difference is the subordinating word "although."

EXAMPLE (Dependent + Independent):
"Although the maritime archaeologists mapped the submerged reef, the sunken frigate remained elusive."
First part: "Although the maritime archaeologists mapped the submerged reef" -> Dependent clause.
Second part: "the sunken frigate remained elusive" -> Independent clause.
This is a correctly formed sentence.

DEPENDENT + INDEPENDENT PATTERNS:
A dependent clause can be attached to an independent clause in multiple structural configurations:
Option A: "Although the maritime archaeologists mapped the submerged reef, the sunken frigate remained elusive." (Dependent, Independent)
Option B: "The sunken frigate remained elusive although the maritime archaeologists mapped the submerged reef." (Independent Dependent)

The punctuation requirements depend on clause order.`,
      rules: [
        'Dependent clauses cannot stand alone as sentences.',
        'Subordinating conjunctions (although, because, while) convert complete clauses into dependent ones.',
        'Introductory dependent clauses require a comma before the main clause.'
      ],
      examples: [
        { label: 'Introductory Dependent', sentence: 'Although the maritime archaeologists mapped the submerged reef, the sunken frigate remained elusive.', isCorrect: true, explanation: 'Dependent clause precedes independent clause; comma is required after "reef".' },
        { label: 'Trailing Dependent', sentence: 'The sunken frigate remained elusive although the maritime archaeologists mapped the submerged reef.', isCorrect: true, explanation: 'Independent clause precedes dependent clause; comma is typically omitted before "although".' }
      ]
    },
    {
      id: 'concept-4',
      title: "Sentence Fragments",
      sectionNumber: 4,
      fullText: `A sentence fragment is an incomplete grammatical structure presented as though it were a complete sentence.
Common causes include:
1. Missing main verb
2. Missing subject
3. Dependent clause standing alone
4. A phrase incorrectly punctuated as a sentence

FRAGMENT TYPE 1 — DEPENDENT CLAUSE:
"Because the algorithmic simulation encountered unforeseen latency."
This is incomplete because "because" establishes a subordinating relationship.
Correct: "Because the algorithmic simulation encountered unforeseen latency, the software architects re-indexed the distributed database."

FRAGMENT TYPE 2 — PHRASE:
"After several fiscal quarters of macroeconomic stagnation."
This prepositional phrase lacks a subject and finite verb.
Correct: "After several fiscal quarters of macroeconomic stagnation, consumer spending rebounded unexpectedly."

FRAGMENT TYPE 3 — MISSING MAIN VERB:
"The urban commission overseeing the revitalization of the transit network."
This contains an extensive noun phrase and a participial modifier, but no finite verb stating what the commission did.
Correct: "The urban commission overseeing the revitalization of the transit network approved the light rail expansion."

ELIMINATION TECHNIQUE:
If an answer choice produces:
• dependent clause + period
• phrase + period
• incomplete clause + period
eliminate it immediately.

TRAP:
Sophisticated vocabulary can mask missing main verbs.
Example: "The consortium of neuroscientists investigating synaptic plasticity across diverse mammalian neocortices."
Remove descriptive modifiers: "The consortium..." -> There is no finite verb. It remains a fragment.`,
      rules: [
        'A dependent clause standing alone with a period is a fragment.',
        'A phrase standing alone with a period is a fragment.',
        'Length does not make a fragment complete. Remove extra descriptive material to verify the core verb.'
      ],
      examples: [
        { label: 'FRAGMENT TYPE 1: DEPENDENT CLAUSE', sentence: 'Because the algorithmic simulation encountered unforeseen latency.', isCorrect: false, explanation: 'Leaves a dependent clause standing alone with a period, creating a fragment.' },
        { label: 'FRAGMENT TYPE 2: PHRASE', sentence: 'After several fiscal quarters of macroeconomic stagnation.', isCorrect: false, explanation: 'Prepositional phrase standing alone without a subject or finite main verb.' },
        { label: 'FRAGMENT TYPE 3: MISSING MAIN VERB', sentence: 'The urban commission overseeing the revitalization of the transit network.', isCorrect: false, explanation: 'Contains a noun phrase but no main verb stating what the commission accomplished.' },
        { label: 'CORRECTED SENTENCE', sentence: 'Because the algorithmic simulation encountered unforeseen latency, the software architects re-indexed the distributed database.', isCorrect: true, explanation: 'Combines the dependent clause cleanly with an independent main clause.' }
      ]
    }
  ]
};

export const THEORY_BLOCK_2: WritingTheoryBlock = {
  blockNumber: 2,
  title: "Run-Ons, Comma Splices & Conjunctions",
  description: 'Run-on sentence identification, comma splice detection and fixes, FANBOYS coordinating conjunctions, and the Master Sentence-Boundary Decision Tree.',
  concepts: [
    {
      id: 'concept-5',
      title: "Run-On Sentences",
      sectionNumber: 5,
      fullText: `A run-on occurs when two independent clauses are fused together without appropriate punctuation or coordinating conjunctions.

Example:
"The acoustic sensor detected seismic tremors the geophysicists re-evaluated the fault line."
First independent clause: "The acoustic sensor detected seismic tremors."
Second independent clause: "The geophysicists re-evaluated the fault line."
Zero punctuation or connector separates them. This is a fused run-on sentence.

IMPORTANT:
A run-on does NOT mean "sentence is too long."
A sentence can be exceptionally long and structurally flawless.
A short sentence can be a severe run-on.
The issue is grammatical mechanics, not word count.

WRONG:
"The orchestral rehearsal concluded the composer adjusted the woodwind score." (Independent + independent with no boundary.)

CORRECT OPTIONS:
1. "The orchestral rehearsal concluded. The composer adjusted the woodwind score."
2. "The orchestral rehearsal concluded; the composer adjusted the woodwind score."
3. "The orchestral rehearsal concluded, and the composer adjusted the woodwind score."
4. "After the orchestral rehearsal concluded, the composer adjusted the woodwind score." (Subordinates the first clause.)`,
      rules: [
        'Run-on does NOT mean long sentence.',
        'Run-on occurs when two independent clauses have no punctuation or conjunction between them.',
        'Fix run-ons with a period, semicolon, comma + FANBOYS, or by subordinating one clause.'
      ],
      examples: [
        { label: 'EXAMPLE 1: RUN-ON ERROR', sentence: 'The acoustic sensor detected seismic tremors the geophysicists re-evaluated the fault line.', isCorrect: false, explanation: 'Two independent clauses pushed together with zero punctuation or conjunction form a run-on sentence.' },
        { label: 'EXAMPLE 2: CORRECT PERIOD FIX', sentence: 'The orchestral rehearsal concluded. The composer adjusted the woodwind score.', isCorrect: true, explanation: 'Separates two independent clauses cleanly with a period.' },
        { label: 'EXAMPLE 3: CORRECT SUBORDINATION FIX', sentence: 'After the orchestral rehearsal concluded, the composer adjusted the woodwind score.', isCorrect: true, explanation: 'Converts the first clause into a dependent clause with "after", requiring a comma before the main clause.' }
      ]
    },
    {
      id: 'concept-6',
      title: "Comma Splices",
      sectionNumber: 6,
      fullText: `A comma splice occurs when two independent clauses are joined using ONLY a comma without a coordinating conjunction.

Example:
"The structural engineers completed the stress analysis, the zoning board approved the architectural permit."
Both sides are independent clauses. The comma alone is structurally insufficient.

THE FAST TEST:
Temporarily replace the comma with a period. If both resulting parts can stand independently as complete sentences, the original comma is an illegal comma splice.
Example test:
Part 1: "The structural engineers completed the stress analysis." (Complete)
Part 2: "The zoning board approved the architectural permit." (Complete)
Both are complete. Therefore, the comma alone creates a comma splice.

WAYS TO FIX IT:
METHOD 1: Use a period. -> "The structural engineers completed the stress analysis. The zoning board approved the architectural permit."
METHOD 2: Use a semicolon. -> "The structural engineers completed the stress analysis; the zoning board approved the architectural permit."
METHOD 3: Use a comma + coordinating conjunction. -> "The structural engineers completed the stress analysis, and the zoning board approved the architectural permit."
METHOD 4: Subordinate one clause. -> "Once the structural engineers completed the stress analysis, the zoning board approved the architectural permit."

SAT ELIMINATION:
If the question presents: [independent clause] ___ [independent clause]
and an answer choice offers only: ","
ELIMINATE IT IMMEDIATELY.`,
      rules: [
        'Independent clause + comma + independent clause = COMMA SPLICE (Incorrect).',
        'Replace comma with period to test for comma splices.',
        'Eliminate choices offering only a comma between two independent clauses.'
      ],
      examples: [
        { label: 'EXAMPLE 1: COMMA SPLICE ERROR', sentence: 'The structural engineers completed the stress analysis, the zoning board approved the architectural permit.', isCorrect: false, explanation: 'A comma alone cannot link two independent clauses.' },
        { label: 'EXAMPLE 2: FANBOYS FIX', sentence: 'The structural engineers completed the stress analysis, and the zoning board approved the architectural permit.', isCorrect: true, explanation: 'Adding "and" alongside the comma correctly connects the two independent clauses.' },
        { label: 'EXAMPLE 3: SEMICOLON FIX', sentence: 'The structural engineers completed the stress analysis; the zoning board approved the architectural permit.', isCorrect: true, explanation: 'A semicolon correctly links two closely related independent clauses.' }
      ]
    },
    {
      id: 'concept-7',
      title: "Coordinating Conjunctions",
      sectionNumber: 7,
      fullText: `The coordinating conjunctions can be remembered by the acronym:
FANBOYS
For, And, Nor, But, Or, Yet, So

When connecting two independent clauses, a coordinating conjunction MUST be preceded by a comma.
Example:
"The agronomy institute projected a bumper harvest, but persistent droughts diminished the seasonal yield."
Independent clause: "The agronomy institute projected a bumper harvest."
Independent clause: "Persistent droughts diminished the seasonal yield."
The conjunction "but" establishes logical contrast.

THE KEY IDEA:
Match the logical relationship of the conjunction to the context:
• AND -> addition
• BUT / YET -> contrast or unexpected concession
• OR -> alternative
• SO -> cause-and-effect outcome
• FOR -> underlying rationale or explanation
• NOR -> negative addition (requires inverted subject-verb order)

TRAP:
A conjunction may be grammatically permissible while being logically nonsensical.
Example:
"The agronomy institute projected a bumper harvest, so persistent droughts diminished the seasonal yield."
Using "so" implies the optimistic projection caused the drought. This violates logical cohesion. Grammar alone is insufficient; contextual logic must govern the choice.`,
      rules: [
        'FANBOYS = For, And, Nor, But, Or, Yet, So.',
        'Comma + FANBOYS joins two independent clauses.',
        'Match the logical meaning of the conjunction (And = addition, But/Yet = contrast, So = result, For = reason).'
      ],
      examples: [
        { label: 'EXAMPLE 1: CONTRAST CONJUNCTION', sentence: 'The agronomy institute projected a bumper harvest, but persistent droughts diminished the seasonal yield.', isCorrect: true, explanation: 'Two independent clauses connected with comma + "but" to logically signal a contrast between expectation and outcome.' },
        { label: 'EXAMPLE 2: RESULT CONJUNCTION', sentence: 'The turbine bearings exceeded thermal thresholds, so the plant operators halted the generator.', isCorrect: true, explanation: '"So" correctly establishes a cause-and-effect relationship between the overheating component and the shutdown.' },
        { label: 'TRAP EXAMPLE: ILLOGICAL CONJUNCTION', sentence: 'The agronomy institute projected a bumper harvest, so persistent droughts diminished the seasonal yield.', isCorrect: false, explanation: 'Using "so" implies that the projection caused the drought, creating a logical contradiction.' }
      ]
    },
    {
      id: 'concept-8',
      title: "The Master Sentence-Boundary Decision Tree",
      sectionNumber: 8,
      fullText: `When you encounter a sentence-boundary question, apply this disciplined 7-step diagnostic process:

STEP 1 — SUSPEND AUDITORY BIAS:
Do not rely on where you would breathe or pause when reading aloud.

STEP 2 — DIAGNOSE THE PRECEDING UNIT:
Determine the exact grammatical structure before the blank (independent clause, dependent clause, participial phrase, prepositional phrase).

STEP 3 — DIAGNOSE THE SUCCEEDING UNIT:
Determine the exact grammatical structure following the blank.

STEP 4 — CLASSIFY THE STRUCTURAL PAIRING:
• Independent + Independent
• Dependent + Independent
• Independent + Dependent
• Modifier Phrase + Independent Clause

STEP 5 — ELIMINATE STRUCTURAL VIOLATIONS:
• Independent + comma + Independent -> Comma splice (eliminate).
• Independent + zero punctuation + Independent -> Run-on (eliminate).
• Dependent clause + period -> Fragment (eliminate).

STEP 6 — EVALUATE RHETORICAL RELATIONSHIP:
If multiple grammatically valid connectors remain (e.g., semicolon vs. comma + but), determine whether the passage demands addition, contrast, causality, or explanation.

STEP 7 — FULL SENTENCE VERIFICATION:
Read the entire reconstructed sentence from initial capital letter to terminal punctuation to ensure structural and semantic integrity.

============================================================
WORKED EXAMPLE 1 — FOUNDATIONAL PRECISION:
"The James Webb Space Telescope was engineered to capture infrared emissions from primordial galaxies ___ its deep-field spectrographs can also discern atmospheric chemical compositions on nearby exoplanets."
A) ,
B) ;
C) , and
D) because

STEP 1 (Left): "The James Webb Space Telescope was engineered..." -> Independent clause.
STEP 2 (Right): "Its deep-field spectrographs can also discern..." -> Independent clause.
Classification: INDEPENDENT + INDEPENDENT
Elimination:
A) comma alone -> Comma splice.
D) because -> Illogical causation (the exoplanet capability is not the cause of the primordial galaxy engineering).
Between B (semicolon) and C (, and), the passage coordinates two complementary analytical capabilities; ", and" provides explicit additive coherence.
ANSWER: C) , and

============================================================
WORKED EXAMPLE 2 — ADVANCED LOGICAL CONTRAST:
"The metabolic biochemists anticipated that enzyme inhibition would decelerate cellular proliferation ___ subsequent radiometric assays revealed an accelerated mitochondrial synthesis rate."
A) ,
B) ;
C) , but
D) because

Left: Independent clause.
Right: Independent clause.
Classification: INDEPENDENT + INDEPENDENT
A is a comma splice. D introduces false causality.
The word "accelerated" sharply contradicts the anticipated deceleration. The sentence demands a contrast coordinator.
ANSWER: C) , but`,
      rules: [
        'Step 1: Identify structure before blank.',
        'Step 2: Identify structure after blank.',
        'Step 3: Classify combination (I+I, D+I, I+D, P+I).',
        'Step 4: Eliminate impossible structures.',
        'Step 5: Check logical relationship.',
        'Step 6: Verify full sentence.'
      ],
      examples: [
        { label: 'WORKED EXAMPLE 1: TELESCOPE SPECTROGRAPHS', sentence: 'The James Webb Space Telescope was engineered to capture infrared emissions from primordial galaxies, and its deep-field spectrographs can also discern atmospheric chemical compositions on nearby exoplanets.', isCorrect: true, explanation: 'Independent + Independent. Comma + "and" accurately connects two complementary observational capabilities.' },
        { label: 'WORKED EXAMPLE 2: EXPECTATION VS ASSAY', sentence: 'The metabolic biochemists anticipated that enzyme inhibition would decelerate cellular proliferation, but subsequent radiometric assays revealed an accelerated mitochondrial synthesis rate.', isCorrect: true, explanation: 'Independent + Independent. Comma + "but" expresses the sharp contrast between theoretical expectation and empirical outcome.' }
      ]
    }
  ]
};

export const THEORY_BLOCK_3: WritingTheoryBlock = {
  blockNumber: 3,
  title: "Subordinating Conjunctions & Clause Placement",
  description: 'Subordinating conjunction mechanics, introductory dependent clauses (Dependent, Independent), and trailing dependent clauses (Independent Dependent).',
  concepts: [
    {
      id: 'concept-9',
      title: "Subordinating Conjunctions",
      sectionNumber: 9,
      fullText: `A subordinating conjunction changes the grammatical status of an independent clause, subordinating it to a primary assertion.
Common examples include:
although, because, while, when, if, unless, before, after, since, whereas, even though, even if.

Consider:
"The international treaty expired." -> This is an independent clause.
Now add "because":
"Because the international treaty expired" -> The clause contains a subject and verb, but the thought is subordinated. It requires an independent clause to complete its meaning: "Because the international treaty expired, member nations renegotiated bilateral maritime tariffs."

WHY THIS MATTERS:
A frequent SAT distractor treats every subject + verb combination as an independent clause. Always check for subordinators that render the clause syntactically dependent.

EXAMPLE:
"Although the cryogenic storage facility was expensive to maintain, several pharmaceutical bio-banks preserved their cell lines there."
"Although the cryogenic storage facility was expensive to maintain" -> dependent clause.
"several pharmaceutical bio-banks preserved their cell lines there" -> independent clause.
A comma marks the boundary separating the introductory dependent clause from the main clause.

TRAILING DEPENDENT CLAUSES:
"Several pharmaceutical bio-banks preserved their cell lines there although the cryogenic storage facility was expensive to maintain."
When the dependent clause follows the main clause, a comma is generally not used.`,
      rules: [
        'Adding a subordinating conjunction makes an independent clause dependent.',
        'Do not treat subject + verb as independent if a subordinating conjunction is present.'
      ],
      examples: [
        { label: 'EXAMPLE 1: INTRODUCTORY SUBORDINATING CONJUNCTION', sentence: 'Although the cryogenic storage facility was expensive to maintain, several pharmaceutical bio-banks preserved their cell lines there.', isCorrect: true, explanation: '"Although" turns the first clause dependent; comma correctly sets it off from the main clause.' },
        { label: 'TRAP EXAMPLE: STANDALONE SUBORDINATION FRAGMENT', sentence: 'Because the international treaty expired during the geopolitical realignment.', isCorrect: false, explanation: 'Leaves a dependent clause standing alone with a period, forming an illegal fragment.' }
      ]
    },
    {
      id: 'concept-10-11',
      title: "Introductory & Trailing Dependent Clauses",
      sectionNumber: '10–11',
      fullText: `INTRODUCTORY DEPENDENT CLAUSES:
When a dependent clause precedes an independent clause, a comma is mandatory at the boundary.
Pattern: DEPENDENT CLAUSE, INDEPENDENT CLAUSE

Example:
"Because the initial spectrometer calibrations were compromised by ambient electrical interference, the experimental physicists recalibrated the entire sensor array."
The opening dependent clause sets the causal context; the comma marks the handoff to the main clause.

TRAILING DEPENDENT CLAUSES:
When the independent clause comes first, no comma is required before standard subordinating conjunctions (because, when, after, before, since, if).
Pattern: INDEPENDENT CLAUSE DEPENDENT CLAUSE

Example:
"The experimental physicists recalibrated the entire sensor array because the initial spectrometer calibrations were compromised by ambient electrical interference."

COMPARE:
"Because ambient electrical interference compromised calibrations, physicists adjusted the sensors." (Dependent, Independent)
versus:
"Physicists adjusted the sensors because ambient electrical interference compromised calibrations." (Independent Dependent)`,
      rules: [
        'Dependent clause FIRST -> Comma required (Dependent, Independent).',
        'Independent clause FIRST -> No comma usually needed (Independent Dependent).'
      ],
      examples: [
        { label: 'EXAMPLE 1: INTRODUCTORY DEPENDENT', sentence: 'Because the initial spectrometer calibrations were compromised by ambient electrical interference, the experimental physicists recalibrated the entire sensor array.', isCorrect: true, explanation: 'Dependent clause precedes independent clause; comma is required after "interference".' },
        { label: 'EXAMPLE 2: TRAILING DEPENDENT', sentence: 'The experimental physicists recalibrated the entire sensor array because the initial spectrometer calibrations were compromised by ambient electrical interference.', isCorrect: true, explanation: 'Independent clause precedes dependent clause; no comma is necessary before "because".' }
      ]
    }
  ]
};

export const THEORY_BLOCK_4: WritingTheoryBlock = {
  blockNumber: 4,
  title: "Semicolons, Periods & Conjunction Choice",
  description: 'Semicolon rules and the Period Test, period mechanics, comma + FANBOYS vs. semicolons, and selecting conjunctions based on explicit context.',
  concepts: [
    {
      id: 'concept-12-15',
      title: "Semicolons, Periods, FANBOYS & Decision Rules",
      sectionNumber: '12–15',
      fullText: `SEMICOLONS:
A semicolon connects two grammatically independent clauses without a coordinating conjunction.
Pattern: INDEPENDENT CLAUSE ; INDEPENDENT CLAUSE
Example: "The bespoke architectural facade required specialized anodized titanium; the fabrication foundry developed a custom alloy to meet the structural tolerances."
Both clauses are syntactically complete on their own.

THE PERIOD TEST:
If you are uncertain whether a semicolon is valid, replace it with a period. If two grammatically correct sentences emerge, the semicolon is structurally permitted.

PERIODS:
Pattern: INDEPENDENT CLAUSE. INDEPENDENT CLAUSE.

COMMA + COORDINATING CONJUNCTION:
Pattern: INDEPENDENT CLAUSE, FANBOYS INDEPENDENT CLAUSE

SEMICOLON VS. COMMA + CONJUNCTION:
1. "The high-altitude expedition encountered gale-force katabatic winds; the mountaineers postponed their summit bid."
2. "The high-altitude expedition encountered gale-force katabatic winds, so the mountaineers postponed their summit bid."
Both are structurally sound, but the second explicitly highlights causal consequence.`,
      rules: [
        'Semicolon test: Replace semicolon with a period. Both sides must be complete independent clauses.',
        'Never use a semicolon if one side is dependent.',
        'Comma + FANBOYS explicitly specifies the conjunction relationship.'
      ],
      examples: [
        { label: 'EXAMPLE 1: SEMICOLON PERIOD TEST', sentence: 'The bespoke architectural facade required specialized anodized titanium; the fabrication foundry developed a custom alloy to meet the structural tolerances.', isCorrect: true, explanation: 'Replacing semicolon with period yields two complete independent clauses, validating the semicolon.' },
        { label: 'EXAMPLE 2: COMMA + CONJUNCTION RELATIONSHIP', sentence: 'The high-altitude expedition encountered gale-force katabatic winds, so the mountaineers postponed their summit bid.', isCorrect: true, explanation: 'Adds explicit cause-and-effect meaning to the clause connection.' }
      ]
    }
  ]
};

export const THEORY_BLOCK_5: WritingTheoryBlock = {
  blockNumber: 5,
  title: "Colon Rules & List Setups",
  description: 'The mandatory complete-sentence setup rule for colons, avoiding the pause trap, introducing lists, and colon vs. comma before lists.',
  concepts: [
    {
      id: 'concept-16',
      title: "Colon Setup & Completeness Rule",
      sectionNumber: 16,
      fullText: `COLON AND SENTENCE BOUNDARIES:
A colon introduces an explanation, clarification, illustrative example, or formal enumeration.
THE MANDATORY STRUCTURAL RULE: The clause preceding a colon MUST be a complete independent clause.

Example:
"The macroeconomic advisory panel reached a unanimous consensus: monetary stimulus alone could not resolve supply chain bottlenecks."
Before colon: "The macroeconomic advisory panel reached a unanimous consensus" -> Complete independent clause.
After colon: "monetary stimulus alone could not resolve supply chain bottlenecks" -> Explanatory independent clause.

STRUCTURE: COMPLETE STATEMENT : EXPLANATION / LIST / APPOSITIVE

AVOID THE "PAUSE" TRAP:
A colon is never placed simply because a rhetorical pause occurs.

COLON BEFORE A LIST:
A colon can introduce a list ONLY when preceded by a complete independent clause.
Example: "The restoration conservators utilized three primary materials: reversible rabbit-skin glue, mineral spirit solvents, and natural dammar varnish."`,
      rules: [
        'Before colon MUST be a complete independent clause.',
        'Never place a colon directly after a verb or preposition.',
        'Lists do not automatically require colons unless preceded by a complete statement.'
      ],
      examples: [
        { label: 'EXAMPLE 1: COLON EXPLANATION SETUP', sentence: 'The macroeconomic advisory panel reached a unanimous consensus: monetary stimulus alone could not resolve supply chain bottlenecks.', isCorrect: true, explanation: '"The macroeconomic advisory panel reached a unanimous consensus" is a complete independent clause, satisfying the colon setup rule.' },
        { label: 'EXAMPLE 2: COLON BEFORE A LIST', sentence: 'The restoration conservators utilized three primary materials: reversible rabbit-skin glue, mineral spirit solvents, and natural dammar varnish.', isCorrect: true, explanation: 'Setup before colon is a complete independent statement announcing a list of three items.' },
        { label: 'TRAP EXAMPLE: COLON AFTER VERB', sentence: 'The restoration conservators utilized: reversible rabbit-skin glue, mineral spirit solvents, and natural dammar varnish.', isCorrect: false, explanation: 'Placing a colon directly after the transitive verb "utilized" separates the verb from its direct objects, creating an incomplete setup.' }
      ]
    }
  ]
};

export const THEORY_BLOCK_6: WritingTheoryBlock = {
  blockNumber: 6,
  title: "Single & Paired Dashes Mechanics",
  description: 'Single dash for expansions, paired dashes for middle parenthetical interruptions, single vs. paired dash rules, and colon vs. dash comparison.',
  concepts: [
    {
      id: 'concept-17-18',
      title: "Single vs. Paired Dashes",
      sectionNumber: '17–18, 62–64',
      fullText: `DASHES:
Em-dashes set off emphatic parenthetical commentary or introduce dramatic expansions.

PAIRED DASHES (INTERRUPTIONS):
When parenthetical information interrupts the main clause, dashes must be used in symmetric pairs.
Example: "The archival manuscript's most remarkable feature—its pristine sixteenth-century illuminated margins—astonished the visiting paleographers."

SINGLE DASH (TERMINAL EXPANSION):
A single dash functions similarly to a colon, introducing an elaboration or summary at the end of an independent clause.
Example: "The crystallographers noted an extraordinary anomaly in the lattice structure—the synthetic diamond conducted heat four times faster than copper."

SYMMETRY RULE:
Never open a parenthetical clause with a dash and close it with a comma. Punctuation styles cannot be mixed around an interrupter.`,
      rules: [
        'Single dash at end introduces expansion; paired dashes in middle isolate interruption.',
        'Check completeness of setup before placing colon or single dash.',
        'Paired dashes must match (dash opens, dash closes).'
      ],
      examples: [
        { label: 'EXAMPLE 1: PAIRED DASH INTERRUPTER', sentence: 'The archival manuscript’s most remarkable feature—its pristine sixteenth-century illuminated margins—astonished the visiting paleographers.', isCorrect: true, explanation: 'Matching pair of dashes isolates the nonessential appositive description.' },
        { label: 'EXAMPLE 2: SINGLE DASH EXPANSION', sentence: 'The crystallographers noted an extraordinary anomaly in the lattice structure—the synthetic diamond conducted heat four times faster than copper.', isCorrect: true, explanation: 'Single dash at sentence end introduces a dramatic explanatory statement.' },
        { label: 'TRAP EXAMPLE: UNMATCHED DASH/COMMA', sentence: 'The archival manuscript’s most remarkable feature—its pristine sixteenth-century illuminated margins, astonished the visiting paleographers.', isCorrect: false, explanation: 'Opening with a dash and closing with a comma violates punctuation symmetry.' }
      ]
    }
  ]
};

