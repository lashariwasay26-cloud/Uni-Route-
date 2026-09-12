import { WritingTheoryBlock } from './satWritingTypes';

export const THEORY_BLOCK_1: WritingTheoryBlock = {
  blockNumber: 1,
  title: 'Modifier Logic, Syntactic Proximity, and Structural Attachment',
  description: 'Adjacency Principles, Introductory Participial Phrases, Dangling Modifiers, Misplaced Adverbial Limiters, Restrictive vs. Nonrestrictive Clauses, and Logical Actor Alignment (Concepts 1–41)',
  concepts: [
    {
      id: 'tb1-c1',
      title: '1–4. The Anatomy of Modification & The Proximity Principle',
      fullText: `A **modifier** is a syntactically dependent word, phrase, or clause that qualifies, restricts, or elaborates the semantic scope of another grammatical constituent.

Modifiers operate across diverse grammatical categories:
* **Nominal Modifiers** (adjectives, prepositional phrases, appositives, relative clauses) qualifying nouns and pronouns.
* **Adverbial Modifiers** (adverbs, prepositional phrases, subordinate clauses) qualifying verbs, adjectives, adverbs, or whole clauses.

### The Adjacency Principle:
> **A modifying constituent must be positioned immediately adjacent to its intended grammatical target to prevent syntactic ambiguity or absurd semantic attribution.**

### Example in High-Register Prose:
> *The geochemists analyzed the isotopic anomalies **detected in the deep Greenland ice cores**.*
* The participial phrase *detected in the deep Greenland ice cores* strictly qualifies the direct object *isotopic anomalies*, not the *geochemists* or the verb *analyzed*.

### The De-Layering Technique for Complex Modifiers:
When evaluating complex periodic sentences:
1. Strip all introductory prepositional phrases, parenthetical appositives, and relative clauses.
2. Isolate the bare subject–verb–object skeleton.
3. Reinsert each modifying constituent sequentially to verify unambiguous attachment.`
    },
    {
      id: 'tb1-c2',
      title: '5–10. Dangling Modifiers & The "Logical Actor" Alignment Protocol',
      fullText: `A **dangling modifier** occurs when an introductory verbal phrase (*participial, gerundive, or infinitival*) lacks a grammatically explicit and logically compatible subject in the immediately following independent clause.

### Standardized Exam Trap Anatomy:
* **Ungrammatical (Dangling Participle)**:
  > *Having synthesized the novel superconducting cuprate at liquid-nitrogen temperatures, **the crystalline lattice structure was scrutinized** with transmission electron microscopy.*
  *(Fatal Error: The passive subject "crystalline lattice structure" did not synthesize cuprates; human solid-state physicists did.)*

* **Grammatically Rectified (Active Logical Agent)**:
  > *Having synthesized the novel superconducting cuprate at liquid-nitrogen temperatures, **solid-state physicists scrutinized** its crystalline lattice structure with transmission electron microscopy.*

### The 3-Step "Logical Actor" Verification Protocol:
1. **Identify the Introductory Verbal Action**: Isolate the implicit agent executing the introductory verbal phrase (*Having synthesized...* → requires a synthesizer).
2. **Inspect the Grammatical Head Noun After the Comma**: The noun situated immediately after the comma **MUST** be the entity capable of executing that action.
3. **Reject Passive or Inanimate Subject Substitutions**: Distractors frequently place the object of inquiry, the experimental methodology, or nominalized abstractions (*the analysis, the discovery, the decision*) in the subject position.`
    },
    {
      id: 'tb1-c3',
      title: '11–17. Participial Phrases, Relative Clause Attachment, and the Nearest-Noun Trap',
      fullText: `### Participial Phrase Morphology:
* **Present Participle (-ing)**: Signifies concurrent action (*Deploying deep-ocean autonomous submersibles, marine biologists mapped hydrothermal chimney systems*).
* **Past Participle (-ed / irregular)**: Signifies passive condition (*Preserved beneath volcanic tephra for millennia, the Herculaneum papyri underwent non-destructive X-ray phase-contrast tomography*).
* **Perfect Participle (Having + Past Participle)**: Signifies anterior completed action (*Having deciphered the Linear B syllabary, linguists reconstructed the economic inventories of Mycenaean palaces*).

### The Nearest-Noun Trap in Relative Clauses:
A relative clause introduced by *who*, *which*, or *that* attaches to the nominal head of the preceding noun phrase, not necessarily the nearest noun inside an embedded prepositional complement:
> *The European Space Agency launched an observational payload for **climatologists who investigate stratosphere–troposphere thermal exchange**.*
* The relative clause *who investigate...* logically modifies *climatologists*, not *payload*.`
    },
    {
      id: 'tb1-c4',
      title: '18–20. Misplaced Limiting Adverbs ("Only", "Almost", "Nearly", "Merely")',
      fullText: `Limiting adverbs modify the **precise syntactic constituent immediately following them**. Shifting their position fundamentally alters the propositional meaning.

### Semantic Comparisons:
* **Preceding the Subject**:
  > ***Only the monetary policy committee** can authorize open-market sovereign bond purchases.*
  *(No other regulatory body possesses this legal authority.)*
* **Preceding the Verb**:
  > *The monetary policy committee **only authorized** open-market sovereign bond purchases.*
  *(The committee authorized bond purchases but took no other regulatory intervention.)*
* **Preceding the Quantitative Object**:
  > *The central bank authorized the purchase of **only short-term treasury bills**.*
  *(The scope of authorized assets is strictly limited to short-term maturities.)*`
    },
    {
      id: 'tb1-c5',
      title: '21–27. Restrictive vs. Nonrestrictive Clauses and Relative Pronoun Syntax',
      fullText: `### Essential (Restrictive) Relative Clauses:
Define or delimit the essential identity of the antecedent nominal; punctuated **without commas** and introduced by **that** (for inanimate entities) or **who** (for persons).
> *Seismic dampers **that were fabricated from shape-memory alloys** withstood peak ground acceleration during the simulation.*

### Nonessential (Nonrestrictive) Relative Clauses:
Provide supplementary, parenthetical information that can be excised without altering the antecedent's core identity; obligatorily **enclosed within commas** and introduced by **which** (for inanimate things) or **who** (for persons).
> *The James Webb Space Telescope's primary mirror, **which comprises eighteen beryllium hexagonal segments coated in gold**, operates at cryogenic temperatures.*

### Pronoun Case Selection:
* **Who (Subjective)**: *The paleogeneticist **who** extracted Neanderthal mitochondrial DNA received international acclaim.*
* **Whom (Objective)**: *The diplomat **whom** the United Nations Security Council dispatched mediated the maritime boundary dispute.*
* **Whose (Possessive)**: *The pharmaceutical conglomerate **whose** computational oncology platform accelerated drug discovery secured regulatory clearance.*`
    },
    {
      id: 'tb1-c6',
      title: '28–41. Diagnostic Algorithm for Advanced Modifier Problems',
      fullText: `When auditing modifier structures on standardized exams:
1. **Locate Modifier Boundaries**: Identify all participial phrases, prepositional stacks, and relative clauses.
2. **Determine Semantic Intent**: Ask what specific entity the author intends to characterize.
3. **Verify Strict Syntactic Proximity**: Confirm that the target noun sits immediately adjacent to the modifier.
4. **Audit Introductory Verbal Clauses**: Confirm that the subject following the introductory comma is the true semantic actor.
5. **Check Comma Enclosures**: Verify that nonessential relative clauses are symmetrically bounded by commas or em dashes.`
    }
  ]
};

export const THEORY_BLOCK_2: WritingTheoryBlock = {
  blockNumber: 2,
  title: 'Comparative Logic, Category Equivalence, and Quantitative Precision',
  description: 'The Like-With-Like Rule, Demonstrative Reference ("That of / Those of"), Illogical Category Shifts, Countable vs. Mass Quantifiers (Fewer vs. Less), and Prepositional Idioms (Concepts 42–92)',
  concepts: [
    {
      id: 'tb2-c1',
      title: '42–44. The Principle of Logical Category Equivalence ("Like-With-Like")',
      fullText: `A **comparison** establishes a semantic relationship of degree, equivalence, or contrast between two grammatical constituents using markers such as *more...than, less...than, as...as, unlike, different from, similar to, compared with*.

### The Axiom of Comparative Equivalence:
> **Compared constituents must belong to identical ontological, categorical, and grammatical classes. A metric cannot be compared to an institution; an author cannot be compared to a literary text; an activity cannot be compared to a physical object.**

### Standardized Comparison Trap:
* **Illogical (Entity-to-Metric Mismatch)**:
  > *The energy density of solid-state lithium-metal batteries is significantly higher than **conventional lithium-ion cells**.*
  *(Fatal Error: Compares an abstract physical metric ["energy density"] directly to an entire manufactured object ["conventional cells"].)*

* **Grammatically Rectified (Metric-to-Metric Equivalence)**:
  > *The energy density of solid-state lithium-metal batteries is significantly higher than **that of conventional lithium-ion cells**.*`
    },
    {
      id: 'tb2-c2',
      title: '45–48. Demonstrative Substitutes: Singular "That of" vs. Plural "Those of"',
      fullText: `To prevent faulty comparisons while avoiding cumbersome noun repetition, English employs demonstrative pronouns:
* **That of**: Replaces a **singular countable noun** or an **uncountable mass noun**.
  > *The thermal conductivity of synthetic diamond exceeds **that of** copper.* (*that* = thermal conductivity)
* **Those of**: Replaces a **plural countable noun**.
  > *The spectroscopic signatures of carbonaceous chondrite meteorites closely resemble **those of** primordial interstellar dust.* (*those* = spectroscopic signatures)

### Numerical Discord Trap:
* *The aerodynamic profiles of supersonic commercial airliners differ from **that of** subsonic transport aircraft.* → ERROR! (*aerodynamic profiles* is plural; mandates *those of*).`
    },
    {
      id: 'tb2-c3',
      title: '49–53. Possessive Symmetries and Implied Verbal Clauses',
      fullText: `### Possessive Symmetries:
When comparing personal attributes or institutional properties, preserve parallel possessive inflections:
> *Economist Thomas Piketty's analytical framework regarding capital accumulation is far more empirical than **Karl Marx's**.*
*(Elliptical for "Karl Marx's analytical framework".)*

### Parallel Activities (Gerund vs. Gerund):
> *Sequencing ancient hominin genomes with next-generation high-throughput platforms is considerably more reliable than **relying solely on morphological skeletal analysis**.*

### Implied Auxiliary Verb Clauses:
> *The European Central Bank intervened in sovereign bond markets more aggressively than **the Federal Reserve did** during the sovereign debt crisis.*`
    },
    {
      id: 'tb2-c4',
      title: '54–62. Comparatives, Superlatives, and Quantitative Bounds ("Fewer" vs. "Less")',
      fullText: `### Comparative vs. Superlative Degrees:
* **Comparative Degree (-er / more)**: Used strictly when contrasting exactly **two** entities or groups (*Method A is more thermodynamically efficient than Method B*).
* **Superlative Degree (-est / most)**: Used when contrasting an entity against **three or more** items (*Method A is the most thermodynamically efficient of the five protocols*).

### Countable vs. Mass Quantifiers:
| Grammatical Category | Countable (Plural Count Nouns) | Mass / Noncount (Uncountable Quantities) |
| :--- | :--- | :--- |
| **Comparative Quantity** | *Fewer* exoplanets, *fewer* algorithmic iterations | *Less* geothermal friction, *less* monetary liquidity |
| **Absolute Quantification** | *The number of* clinical trial cohorts | *The amount of* synthesized catalyst |
| **Proportion / Frequency** | *Many, few, several* | *Much, little* |`
    },
    {
      id: 'tb2-c5',
      title: '63–77. Prepositional Comparison Idioms ("Unlike", "Different From", "As...As")',
      fullText: `### Prepositional Comparison Standards:
* **Unlike**: Must contrast the head noun immediately following the introductory comma:
  > *Unlike classical macroeconomic models, **dynamic stochastic general equilibrium simulations incorporate** sticky price rigidities.*
* **Different From**: Formal academic style mandates *different from*, rejecting colloquial *different than* before nominal complements.
  > *The stratigraphy of the lunar highlands is fundamentally **different from** that of the volcanic mare basins.*
* **Equative "As... As"**:
  > *The quantum cryptosystem is **as impenetrable as** theoretical mathematical proofs suggest.*
  *(Never pair "as" with "than" in an equative frame).*`
    },
    {
      id: 'tb2-c6',
      title: '78–92. The Master Comparative Audit Protocol',
      fullText: `When verifying comparative constructions:
1. Isolate the comparative trigger (*than, as, unlike, similar to, different from*).
2. Explicitly label Constituent A and Constituent B.
3. Verify that both constituents belong to identical categorical domains.
4. If an attribute is compared, verify numerical agreement of *that of* (singular/mass) vs. *those of* (plural).
5. Audit quantifiers against noun countability (*fewer* for count nouns, *less* for mass nouns).`
    }
  ]
};

export const THEORY_BLOCK_3: WritingTheoryBlock = {
  blockNumber: 3,
  title: 'Syntactic Parallelism: Coordinate Symmetries and Correlative Structures',
  description: 'The Law of Structural Symmetry, Coordinate Lists, Parallel Infinitives vs. Gerunds, Correlative Conjunction Pairs (Either/Or, Neither/Nor, Not Only/But Also), and Deep Structural Balance (Concepts 1–52)',
  concepts: [
    {
      id: 'tb3-c1',
      title: '1–3. The Structural Law of Syntactic Parallelism',
      fullText: `**Syntactic Parallelism** is the grammatical mandate requiring that two or more constituents performing identical syntactic functions within a coordinate series, list, or paired construction share matching morphological and structural configurations.

Parallelism is governed by coordinating conjunctions (*and, but, or, nor, yet, so*) and correlative pairs (*both...and, either...or, neither...nor, not only...but also, whether...or*).

### Structural Diagnostic:
> *The bioarchaeology doctoral program trains candidates **to extract** collagen from fossilized dental enamel, **to calibrate** isotope ratio mass spectrometers, and **to reconstruct** prehistoric migration corridors.*
*(All three coordinate elements are parallel infinitive phrases headed by "to".)*

### Defective Coordinate Series:
> *The doctoral program trains candidates to extract collagen, mass spectrometer calibration, and reconstructing prehistoric migration.* → UNGRAMMATICAL!`
    },
    {
      id: 'tb3-c2',
      title: '4–11. Parallel Morphological Paradigms Across Parts of Speech',
      fullText: `Coordinate elements must match across specific syntactic classes:

* **Parallel Nominal Stems**: *The treaty prioritized diplomatic transparency, environmental stewardship, and fiscal accountability.*
* **Parallel Finite Predicates**: *The volcanic observatory **monitored** seismic tremor frequency, **measured** sulfur dioxide degassing rates, and **evacuated** surrounding valleys.*
* **Parallel Gerund Complements**: *The clean-energy roadmap involves **decommissioning** coal-fired thermal stations, **expanding** HVDC transmission grids, and **deploying** utility-scale battery storage.*
* **Parallel Prepositional Phrases**: *Subterranean carbon sequestration occurs **under extreme lithostatic pressure** and **within porous basaltic formations**.*`
    },
    {
      id: 'tb3-c3',
      title: '12–17. Correlative Conjunction Symmetries & The "Mirror" Technique',
      fullText: `Correlative conjunctions require strict structural balance immediately following each marker:

* **Both** [Constituent X] **and** [Constituent Y]
* **Either** [Constituent X] **or** [Constituent Y]
* **Neither** [Constituent X] **nor** [Constituent Y]
* **Not only** [Constituent X] **but also** [Constituent Y]
* **Whether** [Constituent X] **or** [Constituent Y]

### The Mirror Rule:
Whatever grammatical constituent directly succeeds Marker 1 must structurally mirror the constituent directly succeeding Marker 2.

* **Grammatically Balanced**:
  > *The pharmaceutical compound **not only** *inhibited angiogenesis in tumor models* **but also** *stimulated endogenous cytotoxic T-cell infiltration*.*
  *(Finite Verb Phrase + Finite Verb Phrase)*

* **Structurally Unbalanced**:
  > *The compound **not only** inhibited angiogenesis **but also** the stimulation of cytotoxic T-cells.* → FATAL ERROR!`
    },
    {
      id: 'tb3-c4',
      title: '18–26. Deconstructing Multi-Clause Coordinated Structures',
      fullText: `When coordinate elements contain dense prepositional modifications or embedded relative clauses, isolate the structural backbone.

### The Skeleton Isolation Sequence:
1. Locate the coordinating conjunction (*and, but, or*).
2. Bracket all embedded descriptive prepositional phrases and relative clauses.
3. Identify the head verbal or nominal constituent of each branch.
4. Compare the morphological heads directly:
   * *to isolate [pathogens from blood sera]*
   * *to sequence [their ribonucleic genomes]*
   * *to synthesize [neutralizing monoclonal antibodies]*`
    },
    {
      id: 'tb3-c5',
      title: '27–40. High-Frequency Parallelism Traps & Tense Consistency',
      fullText: `### 1. The Gerund–Infinitive Mismatch Trap:
* *The maritime conservation agreement requires signatories **to restrict** bottom-trawling operations and **implementing** marine protected sanctuaries.*
* Correct: **...to restrict bottom-trawling operations and to implement marine protected sanctuaries.**

### 2. Tense Parallelism in Coordinated Predicates:
Actions sharing the same temporal frame must maintain consistent finite tense:
> *The paleontological team **unearthed** the Cretaceous theropod fossil, **digitized** its osteological morphology with micro-CT scans, and **published** high-resolution three-dimensional reconstructions.*`
    },
    {
      id: 'tb3-c6',
      title: '41–52. Master Parallelism Audit Checklist',
      fullText: `When auditing parallel structures:
1. Identify all coordinating conjunctions and correlative pairs.
2. Isolate each branch of the coordinate structure.
3. Verify identical syntactic form (verb-to-verb, noun-to-noun, clause-to-clause).
4. Verify parallel prepositional government where required.
5. Ensure semantic and logical harmony across all coordinated elements.`
    }
  ]
};

export const THEORY_BLOCK_4: WritingTheoryBlock = {
  blockNumber: 4,
  title: 'Sentence-Level Parallelism, Disjunctive Concord, and Structural Balance',
  description: 'Sentence-Level Coordination, Prepositional Ranges, Rule of Proximity with Disjunctive Correlatives, Additive Phrases vs. Compound Subjects, and Comparative Verb Substitution (Concepts 1–42)',
  concepts: [
    {
      id: 'tb4-c1',
      title: '1–5. Sentence-Level Coordination and Prepositional Ranges',
      fullText: `Parallelism extends beyond simple lists into **complex clausal coordination and paired prepositional ranges**.

### Paired Prepositional Frameworks:
* **From [Noun Phrase X] to [Noun Phrase Y]**:
  > *The economic impact of semiconductor export restrictions extends **from domestic chip fabrication yields** **to global automotive supply-chain lead times**.*
* **Between [Noun Phrase X] and [Noun Phrase Y]**:
  > *Linguists analyze structural correspondences **between reconstructed Proto-Indo-European phonology** **and archaic Anatolian inscriptions**.*`
    },
    {
      id: 'tb4-c2',
      title: '6–11. Disjunctive Correlatives and the Rule of Proximity',
      fullText: `When *either...or* or *neither...nor* joins compound subjects of differing grammatical number, finite verb concord is governed by the **nearer subject constituent** (the Rule of Proximity).

### Concord Demonstrations:
* **Nearer Plural Subject**:
  > *Neither the lead climatologist nor her field **technicians were** able to retrieve the weather sensor array before the blizzard struck.*
  *(Subject "technicians" is plural → plural verb "were".)*

* **Nearer Singular Subject**:
  > *Neither the field technicians nor the lead **climatologist was** able to retrieve the sensor array.*
  *(Subject "climatologist" is singular → singular verb "was".)*`
    },
    {
      id: 'tb4-c3',
      title: '12–14. Additive Phrases vs. True Compound Subjects',
      fullText: `Additive prepositional phrases (*as well as, along with, together with, in addition to, accompanied by*) **DO NOT** create compound plural subjects. They function as parenthetical prepositional modifiers.

### Diagnostic Comparison:
* **True Compound Subject (Coordinating Conjunction "And")**:
  > *The International Atomic Energy Agency inspector **and** the facility chief **have signed** the nuclear non-proliferation safeguard protocols.* *(Plural concord)*

* **Additive Prepositional Phrase ("As well as")**:
  > *The International Atomic Energy Agency inspector, **as well as the facility chief**, **has signed** the safeguard protocols.* *(Singular concord governed solely by "inspector")*`
    },
    {
      id: 'tb4-c4',
      title: '15–24. Comparative Verb Substitution with Auxiliary "Do / Does / Did"',
      fullText: `To maintain concise comparative balance and avoid redundant predicate repetition, formal English employs auxiliary verbs (*do, does, did*):

### Examples in Macroeconomic Discourse:
* *Advanced economies weathered the inflationary spike more resiliently than **developing markets did** during the supply shock.*
  *(Auxiliary "did" replaces "weathered the inflationary spike".)*
* *Modern deep-learning convolutional networks process satellite telemetry far more rapidly than **traditional manual photogrammetry does**.*
  *(Auxiliary "does" replaces "processes satellite telemetry".)*`
    },
    {
      id: 'tb4-c5',
      title: '25–30. The Three Dimensions of Structural Balance',
      fullText: `Mastery of advanced writing requires aligning three interrelated structural dimensions:
1. **Morphological Balance**: Exact matching of grammatical forms (participles, infinitives, nouns).
2. **Syntactic Balance**: Symmetrical placement around coordinators and correlatives.
3. **Semantic Balance**: Ensuring that joined concepts represent logically comparable propositions.`
    },
    {
      id: 'tb4-c6',
      title: '31–42. Synthesis and Diagnostic Execution Sequence',
      fullText: `### 5-Step Structural Execution Protocol:
1. **Locate the Main Clause Spine**: Identify head subject and finite predicate.
2. **Map Coordinate Markers**: Identify *and, but, either...or, neither...nor, rather than*.
3. **Verify Nearer-Subject Concord**: For disjunctive pairs, confirm verb matches the adjacent subject.
4. **Isolate Additive Prepositionals**: Strip *along with / as well as* when verifying main verb number.
5. **Confirm Symmetrical Complements**: Ensure parallel syntax following both halves of correlative pairs.`
    }
  ]
};
