import { WritingTheoryBlock } from './satWritingTypes';

export const THEORY_BLOCK_8: WritingTheoryBlock = {
  blockNumber: 8,
  title: 'Advanced Parallelism Under Pressure: Agreement, Tense, and Core Reduction',
  description: 'The Core-Reduction Technique, Subject-Verb Agreement Interactions, Tense Chronology vs. Tense Parallelism, Modals, Shared Auxiliaries, Split Infinitives, and Multi-Tiered Coordination (Concepts 1–40)',
  concepts: [
    {
      id: 'tb8-c1',
      title: '1–3. The Core-Reduction Technique for Complex Academic Sentences',
      fullText: `Under intense examination conditions, structural parallelism errors are often masked by intervening prepositional phrases, appositives, and dependent clauses.

### The Core-Reduction Method:
Strip all descriptive non-essential material to isolate the bare coordinate skeleton:
> *The intergovernmental climatological panel, after evaluating ice core data gathered across three decades in the Antarctic interior, **synthesized** the empirical findings, **modeled** future sea-level trajectories, and **recommended** aggressive carbon emission reductions.*
* **Reduced Skeleton**: *panel synthesized ... modeled ... and recommended*
*(All three are parallel simple past-tense finite verbs governed by the singular subject "panel".)*`
    },
    {
      id: 'tb8-c2',
      title: '4–7. Subject–Verb Agreement Interactions in Compound Predicates',
      fullText: `When a single subject governs multiple coordinate verbs, each verb must maintain concord with that subject:

> *The state meteorological institute **collects** atmospheric telemetry, **calibrates** high-resolution radar imagery, and **issues** severe weather advisories.*
* Subject: *institute* (singular)
* Coordinated Verbs: *collects*, *calibrates*, *issues* (All 3rd-person singular present verbs matching *institute*).

### The "Same Subject" Diagnostic:
For every verb following a coordinating conjunction, identify whether it shares the primary subject or introduces an independent clause with a new subject.`
    },
    {
      id: 'tb8-c3',
      title: '8–12. Tense Chronology vs. Mechanical Tense Parallelism',
      fullText: `Parallelism does **NOT** require identical verb tenses when actions occur across different chronological epochs:

### Legitimate Multi-Tense Coordination:
> *The volcanological team **discovered** that the subterranean caldera **had expanded** significantly before the seismic monitoring network **was deployed**.*
* *had expanded* (Past Perfect for anterior event)
* *discovered* and *was deployed* (Simple Past for subsequent baseline events)
* Forcing all verbs into the simple past would destroy the chronological accuracy of the narrative.`
    },
    {
      id: 'tb8-c4',
      title: '13–23. Modals, Shared Auxiliaries, and Negation in Coordinate Structures',
      fullText: `### Modal Auxiliaries (*can, could, must, should, will, would*):
Modal auxiliaries govern uninflected base-form verbs across coordinate series:
> *A robust cybersecurity architecture **must detect** unauthorized intrusions, **isolate** compromised network nodes, and **neutralize** malicious payloads.*
*(Modal "must" governs base verbs: detect, isolate, and neutralize.)*

### Negation across Coordinate Verbs:
> *The regulatory audit **did not uncover** systemic accounting irregularities, **identify** insider trading, or **reveal** conflicts of interest among board members.*
*(Auxiliary "did not" governs base verbs: uncover, identify, or reveal.)*`
    },
    {
      id: 'tb8-c5',
      title: '24–32. Correlative Symmetry and Appositive Parallelism',
      fullText: `### Appositive Parallelism:
Elements within parenthetical appositives must maintain matching nominal morphology:
> *The lead investigator—**a pioneer in CRISPR gene-editing techniques** and **a vocal advocate for bioethical oversight**—testified before the congressional committee.*
*(Noun Phrase ↔ Noun Phrase within dashes).*`
    },
    {
      id: 'tb8-c6',
      title: '33–40. Synthesis: The Core-Reduction Protocol',
      fullText: `### Master Reduction Algorithm:
1. Strip all nonessential modifiers.
2. Locate the coordinating conjunction (*and, but, or*).
3. Identify the head verbal/nominal elements.
4. Verify morphological symmetry across all branches.
5. Restore modifiers and confirm propositional coherence.`
    }
  ]
};

export const THEORY_BLOCK_9: WritingTheoryBlock = {
  blockNumber: 9,
  title: 'Elite Parallelism: Logical Comparisons, Negative Inversion, and Idiomatic Governance',
  description: 'Grammatical vs. Logical Parallelism, Compressed Comparisons, Negative Inversion ("Not Only Did..."), False Correlatives, and Prepositional "To" vs. Infinitive "To" (Concepts 1–42)',
  concepts: [
    {
      id: 'tb9-c1',
      title: '1–6. Grammatical Symmetries vs. Logical Category Parallelism',
      fullText: `A sentence may exhibit flawless grammatical symmetry while failing the test of **logical category equivalence**.

### Standardized Comparison Trap:
* **Superficially Parallel yet Logically Illogical**:
  > *The international space agency's new rover incorporates more advanced autonomous navigation software than **veteran aerospace engineers**.*
  *(Fatal Error: Compares autonomous software directly to human engineers.)*
* **Logically and Grammatically Rectified**:
  > *The international space agency's new rover incorporates more advanced autonomous navigation software than **that developed by earlier engineering teams**.*`
    },
    {
      id: 'tb9-c2',
      title: '7–13. Compressed Comparisons, Ellipsis, and Auxiliary Substitutions',
      fullText: `### Auxiliary Verb Substitution in Comparisons:
Formal academic writing utilizes substitute auxiliaries (*do, does, did*) to maintain comparative balance:
> *Modern offshore wind turbines generate electrical power at a significantly lower levelized cost than **traditional coal-fired power plants do**.*
*(Auxiliary "do" substitutes for "generate electrical power".)*

### Recoverable Elliptical Comparisons:
> *The James Webb Space Telescope observes the cosmos in longer infrared wavelengths than **the Hubble Space Telescope does**.*`
    },
    {
      id: 'tb9-c3',
      title: '14–20. Negative Inversion ("Not Only Did...") and Comparative Correlatives',
      fullText: `### Negative Inversion Syntax:
When a sentence begins with an introductory negative or restrictive correlative (*Not only, Seldom, Rarely, Under no circumstances*), the initial clause undergoes **mandatory subject-auxiliary inversion**:

> ***Not only did the oceanographic expedition discover** four previously unmapped submarine volcanoes, **but it also documented** chemosynthetic ecosystems thriving along hydrothermal vents.*
*(Auxiliary "did" precedes subject "the oceanographic expedition"; followed by standard "but it also + verb".)*

### Comparative Correlatives ("The More... The More"):
> ***The more rigorously** clinical researchers control for demographic confounders, **the more generalizable** their epidemiological conclusions become.*`
    },
    {
      id: 'tb9-c4',
      title: '21–27. False Correlatives and Idiomatic Coordinate Matching',
      fullText: `Correlative pairs possess fixed idiomatic boundaries:

* **Both...And** (Never *Both...As Well As*)
  > *The monetary stimulus was **both** necessary **and** proportional.*
* **Either...Or** (Never *Either...And*)
* **Neither...Nor** (Never *Neither...Or*)
* **Not Only...But Also** (Never *Not Only...And Also*)`
    },
    {
      id: 'tb9-c5',
      title: '28–38. Prepositional "To" (+ Gerund) vs. Infinitive Particle "To" (+ Base Verb)',
      fullText: `A pervasive high-difficulty trap involves distinguishing between the **infinitive particle "to"** (which takes a base verb) and the **preposition "to"** (which governs a gerund):

### Diagnostic Comparisons:
* **Infinitive Particle "To" (+ Base Verb)**:
  > *The central bank decided **to raise** benchmark interest rates.*
* **Preposition "To" (+ Gerund -ing)**:
  > *The pharmaceutical researchers objected **to altering** clinical trial endpoints and **shortening** observational periods.*
  *(Verb idiom "object to" incorporates a preposition; requires parallel gerunds: altering and shortening).*

Common Prepositional "To" Idioms:
* *object to, committed to, dedicated to, accustomed to, look forward to, in addition to, with a view to*`
    },
    {
      id: 'tb9-c6',
      title: '39–42. Synthesis for Advanced Parallelism & Inversion',
      fullText: `### The Master Coordinate Diagnostic Checklist:
1. Check for negative inversion when *Not only* opens a sentence.
2. Verify that correlative markers form legitimate idiomatic pairs.
3. Identify whether "to" is an infinitive particle or a governing preposition.
4. Ensure compared entities match in both grammatical form and ontological category.`
    }
  ]
};

export const THEORY_BLOCK_10: WritingTheoryBlock = {
  blockNumber: 10,
  title: 'Cumulative Master Framework: Modifiers, Comparisons, and Syntactic Balance',
  description: 'The Complete 9-Step Standardized Editing Diagnostic, Master High-Yield Case Studies, Traps Taxonomy, The 10-Second Elimination Protocol, and Cumulative Checklist (Concepts 1–21)',
  concepts: [
    {
      id: 'tb10-c1',
      title: '1. The Complete 9-Step Syntactic Editing Algorithm',
      fullText: `When auditing complex sentences on standardized exams, execute this rigorous 9-step algorithm:

1. **Locate Coordinate & Comparative Triggers**: Scan for *and, but, or, nor, than, as...as, unlike, not only...but also*.
2. **Deconstruct the Primary Clause**: Isolate the main independent subject and finite verb.
3. **Map Introductory Modifiers**: Confirm that the entity following the introductory comma is the true semantic actor executing the participial action.
4. **Audit Limiting Adverb Placement**: Confirm *only, almost, nearly* sits adjacent to its intended quantitative target.
5. **Verify Restrictive vs. Nonrestrictive Punctuation**: Confirm essential clauses have no commas and nonessential clauses are symmetrically enclosed.
6. **Enforce Category Equivalence**: Confirm comparisons contrast like entities using *that of* (singular/mass) or *those of* (plural).
7. **Verify Correlative Symmetry**: Confirm identical grammatical constituents directly follow each marker in correlative pairs.
8. **Check Governing Preposition Consistency**: Ensure prepositions govern parallel gerunds (*object to X-ing and Y-ing*).
9. **Validate Propositional Coherence**: Read the reconstructed sentence to ensure unambiguous semantic clarity.`
    },
    {
      id: 'tb10-c2',
      title: '2–8. Master Academic Case Studies Across Complex Disciplines',
      fullText: `### Case Study 1: Nested Modifier and Demonstrative Comparison (Astrophysics):
> *Analyzing spectroscopic emission spectra captured by the James Webb Space Telescope, **astrophysicists determined** that the atmospheric composition of exoplanet WASP-96b is remarkably similar to **that of Jupiter**.*
* Modifier: *Analyzing spectroscopic emission spectra...* correctly modifies *astrophysicists*.
* Comparison: *atmospheric composition* is compared to *that of Jupiter* (*that* = atmospheric composition).

### Case Study 2: Negative Inversion & Parallel Verb Phrasing (Macroeconomics):
> ***Not only did the central bank raise** reserve requirements for commercial lenders, **but it also expanded** overnight reverse-repo facilities.*
* Inversion: *did the central bank raise* matches *it also expanded*.

### Case Study 3: Prepositional "To" Complementation (Bioethics):
> *The medical ethics board remains committed **to protecting** clinical patient privacy, **ensuring** informed consent, and **upholding** institutional transparency.*
* All three verbs are gerunds governed by preposition *to*.`
    },
    {
      id: 'tb10-c3',
      title: '9–21. The 10-Second Elimination Protocol and Master Chapter Checklist',
      fullText: `### The 10-Second Elimination Protocol:
* **If introductory "-ing" starts sentence** → Look immediately after comma for logical actor. Eliminate passive/inanimate subjects instantly.
* **If "than" or "as" appears** → Check if entity A and entity B are the same category. Eliminate choices missing *that of / those of*.
* **If "neither...nor" or "either...or" connects subjects** → Match verb to the nearer subject.
* **If "not only" starts sentence** → Require auxiliary inversion (*did / was / has*).

### Master Chapter Checklist:
* [x] I can identify dangling modifiers and align introductory participles with their true actors.
* [x] I can audit limiting adverbs (*only, almost*) for exact placement.
* [x] I can distinguish restrictive (*that*) from nonrestrictive (*which*) relative clauses.
* [x] I can apply the Like-With-Like rule and deploy *that of* / *those of* accurately.
* [x] I can balance correlative conjunction pairs with symmetrical grammatical structures.
* [x] I know that additive phrases (*along with, as well as*) do not alter subject number.
* [x] I can distinguish prepositional *to* (+ gerund) from infinitive *to* (+ base verb).`
    }
  ]
};
