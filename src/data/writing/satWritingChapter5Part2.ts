import { WritingTheoryBlock } from './satWritingTypes';

export const THEORY_BLOCK_6: WritingTheoryBlock = {
  blockNumber: 6,
  title: 'Diction: Lexical Precision, Register & Evidentiary Calibration',
  description: 'Semantic Field Mapping → Denotation vs. Connotation → Register Calibration → Epistemic Modality & Evidentiary Scope',
  concepts: [
    {
      id: 'ch5-b6-c1',
      title: '1. CORE CONCEPT: LEXICAL PRECISION AND CONTEXTUAL FIT',
      fullText: `**Diction** is the deliberate selection of vocabulary calibrated to semantic accuracy, syntactic environment, and stylistic register. While two lexical items may share an overlapping core definition in a general lexicon, they frequently diverge along four critical axes:
1. **Denotative Boundaries**: Exact physical or conceptual parameters (e.g., *refute* [to disprove with definitive counter-evidence] vs. *rebut* [to argue against without proving falsehood]).
2. **Connotative Valence**: Implicit evaluative coloring or bias (e.g., *frugal* vs. *parsimonious*; *inquisitive* vs. *prying*).
3. **Register Uniformity**: Stylistic altitude appropriate for academic, legal, or journalistic prose (avoiding both colloquial vulgarisms and bloated bureaucratic jargon).
4. **Epistemic Modality**: The exact degree of certainty or evidential warrant claimed by the proposition (e.g., *suggests* vs. *proves*).

> **Elite Principle**: On the SAT, diction errors rarely involve blatantly misspelled or nonsensical words. Instead, they exploit *near-synonyms* where one choice slightly distorts the evidentiary threshold, violates idiomatic collocations, or introduces an incongruous conversational tone.`
    },
    {
      id: 'ch5-b6-c2',
      title: '2. DENOTATION VS. CONNOTATION & REGISTER CALIBRATION',
      fullText: `Academic and professional prose demands neutral, objective diction that conveys analytical rigor without subjective embellishment or informal slang.

### Connotative Calibration Matrix
| Colloquial / Biased | Overinflated Jargon | Rigorous Scholarly Diction |
| :--- | :--- | :--- |
| *Researchers cooked up a plan* | *Researchers conceptualized a methodological paradigm* | *Researchers formulated an experimental protocol* |
| *The politician threw shade at rivals* | *The official delivered vitriolic denunciations* | *The official criticized competing policies* |
| *The study proved without doubt* | *The empirical data verified indisputable truths* | *The findings substantiate the hypothesis* |

### Register Traps
- **Colloquial Intrusion**: Words like *gargantuan*, *nuts-and-bolts*, *gutted*, or *slapped with fines* destabilize serious analytical prose.
- **Pretentious Circumlocution**: Substituting *utilize* for *use*, *effectuate* for *cause*, or *methodology* for *method* does not elevate rigor; it merely introduces syntactic sludge.`
    },
    {
      id: 'ch5-b6-c3',
      title: '3. EPISTEMIC MODALITY & EVIDENTIARY STRENGTH',
      fullText: `A cardinal principle of empirical scholarship is that **the strength of an assertion must not exceed the strength of its supporting evidence**. Overclaiming is a catastrophic diction error in scientific and historical passages.

### The Evidentiary Hierarchy
1. **Tentative / Exploratory** (*preliminary correlations, observational data, small sample sizes*):
   - Verbs: *suggests, indicates, intimates, points toward, aligns with*
   - Modals: *may, might, could, potentially*
2. **Substantiated / Robust** (*replicated experiments, multi-site longitudinal cohorts, meta-analyses*):
   - Verbs: *demonstrates, substantiates, validates, corroborates, establishes*
   - Modals: *consistently, reliably, clearly*
3. **Definitive / Axiomatic** (*closed mathematical proofs, deductive tautologies*):
   - Verbs: *proves, guarantees, refutes conclusively, necessitates*
   - Modals: *invariably, inherently, definitively*

> **Critical Rule**: In empirical science, almost no single study "proves" a universal theory. A study observing elevated serotonin levels in mice *suggests a neurological mechanism*; it does not *conclusively prove the cure for clinical depression*.`
    },
    {
      id: 'ch5-b6-c4',
      title: '4. QUANTIFIERS, SCOPE & TRUTH-CONDITIONS',
      fullText: `Quantifiers govern the logical domain over which a claim holds true. Swapping quantifiers alters the truth-conditions of a sentence:
- **Universal / Absolute**: *all, every, none, always, impossible, universally* (Disproven by a single counterexample).
- **Proportional / Majoritarian**: *most, the majority, predominantly* (>50% of the relevant set).
- **Existential / Indefinite**: *some, several, various, a subset, occasionally* (≥ 1 instances; non-committal regarding overall proportion).
- **Minoritarian / Restrictive**: *few, rarely, a negligible minority* (<50%, often $<10\%$).

### Scope Distortion Example
> **Original Finding**: "Approximately 22% of surveyed pediatricians recommended early peanut exposure."  
> **Flawed Synthesis**: "The survey revealed that *most pediatricians advocate* early peanut introduction." *(Error: 22% is an existential minority, not a majority).*  
> **Accurate Synthesis**: "The survey revealed that *a notable minority of pediatricians support* early dietary introduction."`
    },
    {
      id: 'ch5-b6-c5',
      title: '5. BLOCK 6 TECHNIQUE: THE 4-STEP LEXICAL DISCRIMINATION AUDIT',
      fullText: `When choosing among competing vocabulary options:
1. **Contextual Synthesizer**: Identify the exact disciplinary register (macroeconomics, astrophysics, legal history, literary criticism).
2. **Evidentiary Weighing**: Determine the epistemological certainty of the paragraph. Are the findings tentative or definitive?
3. **Collocational Check**: Verify prepositional idioms (e.g., *inherent in*, *compliant with*, *conducive to*, *averse to*).
4. **Distractor Elimination**: Reject words that introduce anachronistic slang, pretentious pseudo-academic periphrasis, or hyperbolic certainty.`
    }
  ]
};

export const THEORY_BLOCK_7: WritingTheoryBlock = {
  blockNumber: 7,
  title: 'Logical Comparisons & Syntactic Scope Management',
  description: 'Comparative Parallelism → Pronoun Substitutes (That/Those Of) → Modifier Scope → Limiting Adverb Precision',
  concepts: [
    {
      id: 'ch5-b7-c1',
      title: '1. CORE CONCEPT: THE COMPARATIVE PARALLELISM PRINCIPLE',
      fullText: `Every grammatical comparison balances two terms across a comparative pivot (*than, as... as, compared to, like, unlike*). A comparison is logically valid **only when the terms on both sides of the pivot belong to the exact same ontological and grammatical category**.

### Category Mismatches (Faulty Comparisons)
- **Attribute ↔ Entity**:
  - *Illogical*: "The thermal conductivity of copper is significantly higher than **aluminum**." *(Compares an abstract physical property to a bulk metal).*
  - *Logical*: "The thermal conductivity of copper is significantly higher than **that of aluminum**."
- **Institutional Metric ↔ Institution**:
  - *Illogical*: "The endowment of Harvard University dwarfs **Williams College**." *(Compares financial capital to an entire liberal arts institution).*
  - *Logical*: "The endowment of Harvard University dwarfs **that of Williams College**." *(OR: "Harvard University's endowment dwarfs **Williams College's**.")*`
    },
    {
      id: 'ch5-b7-c2',
      title: '2. COMPARATIVE SUBSTITUTES: "THAT OF" AND "THOSE OF"',
      fullText: `To avoid awkward noun repetition while maintaining absolute syntactic symmetry, standard English employs demonstrative pronoun substitutes:

### Singular vs. Plural Demonstrative Matching
1. **Singular Non-Count / Count Noun** $\rightarrow$ **that of / that in**:
   - "The architectural ornamentation of the cathedral of Seville is more intricate than **that of** the cathedral of Cologne."
2. **Plural Count Noun** $\rightarrow$ **those of / those in**:
   - "The vocalizations of beluga whales in the Saint Lawrence estuary are markedly more complex than **those of** isolated captive pods."

> **Possessive Shortcut**: Alternatively, possessive noun phrases create valid balance:  
> *"Elena Ferrante’s narrative pacing is more deliberately hypnotic than **Karl Ove Knausgård’s**."* *(The possessive 's implicitly represents "narrative pacing").*`
    },
    {
      id: 'ch5-b7-c3',
      title: '3. COMPARATIVE VERBAL ACTIONS & COMPLEMENTS',
      fullText: `When comparing dynamic actions rather than static entities, the predicates must maintain parallel grammatical aspect:

- **Gerund Phrase ↔ Gerund Phrase**:
  - *Correct*: "Urban economists argue that **subsidizing high-density housing developments** is more fiscally sustainable than **underwriting suburban highway expansions**."
  - *Faulty*: "...is more fiscally sustainable than **to underwrite suburban highway expansions**."
- **Clause ↔ Auxiliary Clause**:
  - *Correct*: "Deep-sea anglerfish expend far less metabolic energy navigating benthic trenches than **pelagic predators do in surface waters**."`
    },
    {
      id: 'ch5-b7-c4',
      title: '4. SYNTACTIC SCOPE AND LIMITING ADVERBIALS',
      fullText: `A modifier's **scope** encompasses the exact syntactic constituent it modifies. Placing limiting adverbs (*only, merely, exclusively, almost, primarily, nearly*) in different positions radically shifts the logical proposition:

### The "Only" Scope Spectrum
- *"**Only** the senior archivists deciphered the Carolingian manuscript."* $\rightarrow$ **Subject Restriction**: No other individuals deciphered it.
- *"The senior archivists **only** deciphered the Carolingian manuscript."* $\rightarrow$ **Verb Restriction**: They deciphered it, but did not translate, catalog, or publish it.
- *"The senior archivists deciphered **only** the Carolingian manuscript."* $\rightarrow$ **Direct Object Restriction**: They deciphered no other historical texts.

### The "Almost" Scope Trap
- *"The experimental rocket **almost achieved** escape velocity."* $\rightarrow$ The rocket launched and came close to escape velocity, but fell short.
- *"**Almost the entire** experimental rocket achieved escape velocity."* $\rightarrow$ A fraction broke off, but the bulk of the fuselage entered orbit.`
    },
    {
      id: 'ch5-b7-c5',
      title: '5. BLOCK 7 TECHNIQUE: THE BILATERAL COMPARISON ISOLATION TEST',
      fullText: `Whenever you encounter a comparison:
1. **Bracket the comparative trigger**: [*more than, less than, superior to, unlike, similar to*].
2. **Isolate Term A** (the left-hand noun/phrase being modified).
3. **Isolate Term B** (the right-hand noun/phrase after the trigger).
4. **Enforce the Category Match**:
   - If Term A is singular $\rightarrow$ Term B must be *that of [Noun]* or *[Noun]'s*.
   - If Term A is plural $\rightarrow$ Term B must be *those of [Noun]* or *[Noun]s'*.
   - If Term A is an action (-ing) $\rightarrow$ Term B must be an action (-ing).`
    }
  ]
};

export const THEORY_BLOCK_8: WritingTheoryBlock = {
  blockNumber: 8,
  title: 'Eradicating Redundancy While Preserving Semantic Nuance',
  description: 'Pleonastic Redundancies → Tautological Collocations → Syntactic De-bloating → Semantic Retention Auditing',
  concepts: [
    {
      id: 'ch5-b8-c1',
      title: '1. CORE CONCEPT: PLEONASM AND TAUTOLOGY IN SCHOLARLY PROSE',
      fullText: `**Syntactic Economy** mandates that every word in a sentence must perform distinct grammatical or semantic work. When two words duplicate the exact same informational component, the construction suffers from **pleonastic redundancy**.

### The Redundancy Taxonomy
1. **Inherent Verbal Redundancy**: Modifying a verb with an adverb that merely restates the verb's built-in definition (*revert back, descend down, advance forward, repeat again, combine together*).
2. **Tautological Modifiers**: Pairing a noun with an adjective whose meaning is entirely subsumed by the noun (*future forecast, past historical precedent, fundamental essentials, unexpected surprise, consensus of opinion*).
3. **Double Temporal Signaling**: Framing a sentence with redundant temporal markers (*currently at the present moment, previously in the past*).`
    },
    {
      id: 'ch5-b8-c2',
      title: '2. CATALOG OF HIGH-FREQUENCY REDUNDANT COLLOCATIONS',
      fullText: `| Redundant Scholastic Collocation | Streamlined Academic Revision |
| :--- | :--- |
| *collaborated together in unison* | *collaborated* |
| *completely eradicated in its entirety* | *eradicated* |
| *surrounded on all sides by* | *surrounded by* |
| *a mutual consensus among everyone* | *a consensus* |
| *an unexpected anomaly that was unanticipated* | *an anomaly* |
| *protruded outward from the facade* | *protruded from the facade* |
| *recapitulated and summarized the findings* | *recapitulated the findings* |`
    },
    {
      id: 'ch5-b8-c3',
      title: '3. DE-NOMINALIZATION: RESTORING FINITE VERBAL ENERGY',
      fullText: `**Nominalization** converts vibrant active verbs into static abstract nouns, necessitating weak helper verbs (*make, conduct, perform, undertake*) and prepositional clutter.

### Transforming Nominalizations
- *Clumsy*: "The parliamentary committee **conducted an investigation into** the financial malfeasance."  
  *Vigorous*: "The parliamentary committee **investigated** the financial malfeasance."
- *Clumsy*: "The bioengineers **effectuated a modification of** the bacterial plasmid."  
  *Vigorous*: "The bioengineers **modified** the bacterial plasmid."
- *Clumsy*: "The econometricians **arrived at a conclusion regarding** the interest rate elasticity."  
  *Vigorous*: "The econometricians **concluded** that interest rate elasticity..."`
    },
    {
      id: 'ch5-b8-c4',
      title: '4. THE "SHORTEST ANSWER IS NOT ALWAYS CORRECT" FALLACY',
      fullText: `While the SAT favors concision, **concision is subordinate to meaning preservation**. If an author purposefully includes a restrictive modifier or epistemological qualifier, deleting it destroys the intellectual fidelity of the passage.

### Truncation Trap Example
> **Original Scholarly Sentence**: "The clinical trial was suspended because the experimental immunotherapeutic compound triggered severe autoimmune nephropathy in a high-risk demographic cohort."  
> **Flawed Hyper-Concision**: "The trial was suspended because the compound was toxic." *(Error: Excises the specific medical condition and demographic restriction, reducing nuanced pharmacology to a crude caricature).*  
> **Valid Syntactic Economy**: "The clinical trial was suspended after the experimental compound induced severe autoimmune nephropathy in a high-risk cohort."`
    },
    {
      id: 'ch5-b8-c5',
      title: '5. BLOCK 8 TECHNIQUE: THE TWO-TIER CONCISION AUDIT',
      fullText: `When auditing a sentence for wordiness:
1. **Tier 1 (Redundancy Scan)**: Identify any modifier that merely repeats what is already entailed by the head noun or verb (e.g., *each and every, joined together*). Delete without hesitation.
2. **Tier 2 (Syntactic Compaction)**: Replace wordy prepositional idioms (*with the exception of* $\rightarrow$ *except*; *for the reason that* $\rightarrow$ *because*; *in the event that* $\rightarrow$ *if*).
3. **Semantic Verification**: Ensure no technical nuance, empirical constraint, or rhetorical qualification was excised during compaction.`
    }
  ]
};

export const THEORY_BLOCK_9: WritingTheoryBlock = {
  blockNumber: 9,
  title: 'Sentence Boundaries, Clausal Hierarchy & Syntactic Synthesis',
  description: 'Clause Typology → Boundary Pathology (Splices, Fragments, Run-ons) → Semicolons vs. Conjunctive Adverbs → Subordinating Information Hierarchies',
  concepts: [
    {
      id: 'ch5-b9-c1',
      title: '1. CORE CONCEPT: CLAUSAL INDEPENDENCE AND BOUNDARY RULES',
      fullText: `A grammatical sentence must contain at least one **Independent Clause** (a subject and a finite verb expressing a complete semantic proposition).

### The Three Fatal Sentence Boundary Errors
1. **Sentence Fragment**: A dependent clause or detached verbal phrase punctuated as a freestanding sentence.
   - *Error*: "Although the astrophysicists detected gravitational wave oscillations with the interferometer." *(Lacks a main clause).*
2. **Fused Run-On Sentence**: Two independent clauses slammed together with zero intervening punctuation or conjunctions.
   - *Error*: "The telescope detected gravitational wave oscillations researchers confirmed the neutron star merger."
3. **Comma Splice**: Two independent clauses joined exclusively by a comma without a coordinating conjunction.
   - *Error*: "The telescope detected gravitational wave oscillations, researchers confirmed the neutron star merger."`
    },
    {
      id: 'ch5-b9-c2',
      title: '2. THE FOUR STRUCTURAL REMEDIES FOR BOUNDARY DEFECTS',
      fullText: `Two independent clauses [I₁] and [I₂] can be syntactically linked using four standard architectural blueprints:

1. **Period + Capitalization**: [I₁]. [I₂].  
   *"The macroeconomic model predicted severe stagflation. The central bank intervened immediately."*
2. **Semicolon**: [I₁]; [I₂].  
   *"The macroeconomic model predicted severe stagflation; the central bank intervened immediately."*
3. **Comma + Coordinating Conjunction (FANBOYS: For, And, Nor, But, Or, Yet, So)**: [I₁], FANBOYS [I₂].  
   *"The macroeconomic model predicted severe stagflation, so the central bank intervened immediately."*
4. **Subordination**: [Subordinator + D₁], [I₂].  
   *"Because the macroeconomic model predicted severe stagflation, the central bank intervened immediately."*`
    },
    {
      id: 'ch5-b9-c3',
      title: '3. CONJUNCTIVE ADVERBS VS. COORDINATING CONJUNCTIONS',
      fullText: `**Conjunctive adverbs** (*however, therefore, nevertheless, moreover, consequently, furthermore, thus, indeed*) establish logical transitions between clauses, but **they carry zero grammatical bonding power**. They cannot join independent clauses with a comma alone.

### Punctuation Blueprint for Conjunctive Adverbs
- **Correct**: [I₁]; conjunctive adverb, [I₂].  
  *"The experimental antibiotic demonstrated high bactericidal potency; however, its clinical development was halted due to renal toxicity."*
- **Incorrect (Comma Splice)**: [I₁], conjunctive adverb, [I₂].  
  *"The experimental antibiotic demonstrated high bactericidal potency, however, its clinical development was halted..."*`
    },
    {
      id: 'ch5-b9-c4',
      title: '4. SUBORDINATION & RHETORICAL EMPHASIS',
      fullText: `Coordination (*and, but*) treats two propositions as syntactically equal. **Subordination** (*although, because, while, whereas, despite*) demotes background context, minor chronologies, or causal triggers into dependent structures, catapulting the primary analytical takeaway into the independent clause.

### Engineering Rhetorical Hierarchy
- **Flat Coordination**: "Glaciologists drilled ice cores in Greenland for four years, and they uncovered evidence of medieval mega-droughts."
- **Masterful Subordination**: "After drilling ice cores in Greenland for four years, glaciologists uncovered evidence of medieval mega-droughts." *(Subordinates the routine labor; accentuates the historical discovery).*`
    },
    {
      id: 'ch5-b9-c5',
      title: '5. BLOCK 9 TECHNIQUE: THE STRUCTURAL CLAUSE-MAPPING PROTOCOL',
      fullText: `To resolve clausal boundary questions with 100% diagnostic accuracy:
1. **Bracket all dependent clauses and prepositional openers**.
2. **Locate every conjugated finite verb** and pair it with its grammatical subject.
3. **Count the independent clauses**:
   - If 2 Independent Clauses $\rightarrow$ Must see (1) semicolon, (2) colon, (3) comma + FANBOYS, or (4) period.
   - If Comma + Conjunctive Adverb (*, however,*) $\rightarrow$ Eliminate immediately as a Comma Splice.
   - If a dependent subordinator (*although, because*) starts the sentence $\rightarrow$ Ensure the main clause is unencumbered by coordinating conjunctions.`
    }
  ]
};

export const THEORY_BLOCK_10: WritingTheoryBlock = {
  blockNumber: 10,
  title: 'Punctuation as Structural Architecture & Discourse Mechanics',
  description: 'Comma Mechanics & Essentiality → Semicolon & Colon Constraints → Em Dash Rhetoric → Apostrophic Possession Dynamics',
  concepts: [
    {
      id: 'ch5-b10-c1',
      title: '1. CORE CONCEPT: PUNCTUATION IS SYNTACTIC CODE',
      fullText: `In standard written English, punctuation marks do not represent auditory breathing pauses. Rather, they function as explicit syntactic operators that establish clausal boundaries, delineate parenthetical nonessential information from restrictive modifiers, and signal relationships of amplification, contrast, or apposition.`
    },
    {
      id: 'ch5-b10-c2',
      title: '2. COMMA MASTERY: ESSENTIAL VS. NONESSENTIAL INFORMATION',
      fullText: `The most heavily tested comma rule on the SAT governs the distinction between **restrictive (essential)** and **non-restrictive (nonessential)** elements.

### The Essentiality Distinction
1. **Nonessential / Parenthetical (Set off with paired commas)**: Removing the element does not alter the core identity of the noun.
   - *"Ada Lovelace, who wrote the first algorithm intended for Babbage’s Analytical Engine, is recognized as a pioneer of computer programming."* *(Lovelace is uniquely identified; the relative clause is biographical background).*
2. **Essential / Restrictive (NO COMMAS)**: Removing the element destroys or broadens the specific identity of the noun.
   - *"Mathematicians who work in theoretical cryptography often utilize abstract number theory."* *(Commas around the relative clause would create an absurd claim that all mathematicians work in cryptography).*

### The Three Lethal Comma Errors
- **Subject-Verb Severance**: Placing a single comma between a subject and its finite predicate (*The lead researcher on the astrophysics project, discovered a quasar* $\rightarrow$ Remove comma).
- **Verb-Object Severance**: Placing a comma between a transitive verb and its direct object (*The archival team cataloged, several hundred illuminated manuscripts* $\rightarrow$ Remove comma).
- **Compound Predicate Splice**: Inserting a comma before a coordinating conjunction that joins two verbs sharing one subject (*The rover landed safely, and deployed its drill* $\rightarrow$ Remove comma).`
    },
    {
      id: 'ch5-b10-c3',
      title: '3. SEMICOLONS, COLONS & EM DASHES AS RHETORICAL TOOLS',
      fullText: `### Semicolons ($;$)
- **Independent Clause Linker**: Connects two closely related main clauses without a conjunction.
- **Complex Serial Delimiter**: Separates items in a series when individual items contain internal commas (*Delegates attended from Kyoto, Japan; Zurich, Switzerland; and Nairobi, Kenya*).

### Colons ($:$)
- **The Golden Constraint**: The clause preceding a colon **MUST be a grammatically complete independent clause**.
- **Function**: Signals that the subsequent element (a word, phrase, list, or full clause) directly explains, exemplifies, or defines the preceding proposition.
  - *Correct*: "The archaeological excavation yielded a transformative artifact: a 3,000-year-old bronze chariot wheel."
  - *Incorrect*: "The archaeological excavation yielded: a bronze chariot wheel." *(Lead-in is incomplete).*

### Em Dashes (—)
- **Paired**: Enclose emphatic parenthetical interruptions, appositives, or abrupt tonal shifts.
- **Single**: Functions like an informal colon or dramatic concluding pivot (*The astrophysicists finally pinpointed the signal\'s source—a rapidly spinning magnetar*).`
    },
    {
      id: 'ch5-b10-c4',
      title: '4. APOSTROPHIC POSSESSION & CONTRACTION RIGOR',
      fullText: `Apostrophes govern nominal possession and pronoun contractions. They never form ordinary plurals.

### The Possessive Reference Matrix
| Grammatical Category | Singular Form | Plural Form |
| :--- | :--- | :--- |
| **Standard Nouns** | *the archivist\'s ledger* | *the archivists\' ledgers* |
| **Irregular Plural Nouns** | *the child\'s discovery* | *the children\'s discoveries* |
| **Neuter Pronoun (Possessive)** | *its trajectory* (NO apostrophe) | *their trajectories* |
| **Neuter Pronoun (Contraction)** | *it\'s = it is / it has* | — |
| **Relative Pronoun (Possessive)** | *whose methodology* | — |
| **Relative Pronoun (Contraction)**| *who\'s = who is / who has* | — |`
    },
    {
      id: 'ch5-b10-c5',
      title: '5. BLOCK 10 TECHNIQUE: THE 5-STEP PUNCTUATION AUDIT',
      fullText: `When approaching a punctuation question:
1. **Identify the Main Clausal Frame**: Isolate the core subject and finite verb. Ensure no comma splits them.
2. **Audit Colons and Semicolons**: Check whether the text preceding the mark forms a complete independent clause.
3. **Perform the "Pencil Test" for Commas/Dashes**: If commas or dashes appear in pairs, mentally strike out the enclosed phrase. Does the surrounding sentence remain grammatically intact?
4. **Distinguish Restrictive from Non-Restrictive**: Does the modifier define *which specific one*, or is it merely descriptive bonus detail?
5. **Verify Apostrophe Mechanics**: Check whether the entity possesses something (*economist\'s model*) or is a plural noun (*economists*).`
    }
  ]
};
