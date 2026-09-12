import { WritingTheoryBlock } from './satWritingTypes';

export const THEORY_BLOCK_5: WritingTheoryBlock = {
  blockNumber: 5,
  title: 'Pronoun Reference, Case, Relative Pronouns, and Agreement in Complex Sentences',
  description: 'Antecedents, Pronoun Number/Person Agreement, Singular They, Case (Subjective/Objective/Possessive), Who vs. Whom, Whose vs. Who\'s, and Relative Clauses',
  concepts: [
    {
      id: 'tb5-c1',
      title: '161–162. Pronoun Roles & Explicit Antecedent Identification',
      fullText: `A **pronoun** is a grammatical pro-form substituting for an established noun phrase or nominal entity known as its **antecedent**.

### Structural Verification:
> The lead bioarchaeologist presented **her** isotopic analysis of Bronze Age dietary patterns.
* Antecedent: *bioarchaeologist* (singular human agent)
* Pronoun: *her* (singular 3rd-person feminine possessive determiner)

### The 5-Point Pronoun Evaluation Sequence:
1. **Antecedent Existence**: Can a singular or plural nominal antecedent be unambiguously located?
2. **Numerical Concord**: Does the pronoun match the antecedent's grammatical number?
3. **Case Governance**: Is the pronoun in the correct subjective, objective, or possessive form?
4. **Syntactic Economy**: Does the pronoun create redundant double subjects (*The architect, she...*)?
5. **Relative Clause Selection**: Does the relative pronoun (*who, whom, whose, which, that*) align with human vs. non-human categories and restrictive constraints?`
    },
    {
      id: 'tb5-c2',
      title: '163–164. Number Concord and Distributive Antecedents',
      fullText: `A pronoun must maintain strict numerical concordance with its antecedent nominal.

### Singular Institutional Concord:
> The International Monetary Fund released **its** assessment of sovereign debt vulnerabilities.

### Plural Academic Concord:
> Paleontologists dated the fossilized strata before **they** extracted the theropod femur.

### Distributive Singular Reference:
> Each sovereign delegation presented **its** emissions reduction framework.`
    },
    {
      id: 'tb5-c3',
      title: '165–167. Ambiguous Reference and Vague Demonstratives ("This", "That")',
      fullText: `A pronoun must point unambiguously to exactly one noun.

### Ambiguous Dual Antecedent:
> *When the principal archivist consulted the museum curator, **she** expressed skepticism regarding the provenance of the Etruscan urn.*
*(Unclear whether "she" refers to the archivist or the curator.)*

### Clear Disambiguated Revision:
> When the principal archivist consulted the museum curator, **the archivist** expressed skepticism regarding the provenance of the Etruscan urn.

### Vague Demonstrative Error:
> *The astrophysicists detected cosmic microwave background anomalies, recalibrated their radiotelescope array, and reprocessed the telemetry data. **This** was widely celebrated.*
*(Unclear what "this" represents. Revise to: "This technological breakthrough was widely celebrated.")*`
    },
    {
      id: 'tb5-c4',
      title: '168–169. "It" vs. "They" in Technical and Institutional Discourse',
      fullText: `* **It / Its**: Designates singular inanimate objects, abstract theories, corporations, and institutions.
  > *The Supreme Court issued **its** landmark ruling on administrative law.*
* **They / Them / Their**: Designates plural entities or persons.
  > *The appellate judges issued **their** concurring opinions.*`
    },
    {
      id: 'tb5-c5',
      title: '170–173. The Tripartite Case System (Subjective, Objective, Possessive)',
      fullText: `| Case | Pronouns | Primary Syntactic Function | Academic Example |
| :--- | :--- | :--- | :--- |
| **Subjective** | *I, he, she, we, they, who* | Subject of finite verb / Predicate nominative | *She and the astrophysicist co-authored the monograph.* |
| **Objective** | *me, him, her, us, them, whom* | Direct/indirect object / Prepositional object | *The foundation awarded the fellowship to him and her.* |
| **Possessive** | Determiner: *my, your, his, her, its, our, their*<br/>Nominal: *mine, yours, his, hers, ours, theirs* | Modifies noun to show attribution or ownership | *The observatory modernized its spectrographic sensors.* |`
    },
    {
      id: 'tb5-c6',
      title: '174–178. Case Governance After Prepositions ("Between You and Me")',
      fullText: `Prepositions (*between, among, with, for, to, regarding*) strictly govern the **objective case**.

### Exemplary Constructions:
> Between the senior econometrician and **me**, consensus emerged that interest rates would fluctuate.
*(Preposition "between" governs compound objective "econometrician and me.")*

### Hypercorrection Trap:
> *Between the senior econometrician and **I**...* → FATAL ERROR!`
    },
    {
      id: 'tb5-c7',
      title: '179–180. "Who" vs. "Whom" (The Subject vs. Object Diagnostic)',
      fullText: `* **Who**: Subject pronoun (substitutes for *he, she, they*).
  > ***Who** orchestrated the diplomatic summit in Geneva?* *(He orchestrated it → Who)*
* **Whom**: Object pronoun (substitutes for *him, her, them*).
  > ***Whom** did the university appoint as the chair of bioethics?* *(The university appointed him → Whom)*

### Prepositional Relative Clause:
> The diplomat to **whom** the ambassador delivered the treaty credentials ratified the accords.`
    },
    {
      id: 'tb5-c8',
      title: '181–184. Relative Pronoun Syntax and Elliptical Objects',
      fullText: `* **Subject Relative Pronoun (Mandatory)**:
  > *The architectural historian **who** uncovered the lost blueprints lectured in Florence.*
* **Object Relative Pronoun (Optionally Elliptical in English)**:
  > *The historical treatise [that / which] the archivist analyzed dates to the 14th century.*`
    },
    {
      id: 'tb5-c9',
      title: '185–187. Restrictive ("That") vs. Nonrestrictive ("Which") Relative Clauses',
      fullText: `### Essential (Restrictive) Clauses:
Define the specific identity of the antecedent; punctuated **without commas** and introduced by **that** (for inanimate things) or **who** (for people).
> The seismic dampers **that were installed in the skyscraper's core** absorbed the earthquake vibrations.

### Nonessential (Nonrestrictive) Clauses:
Provide supplementary, parenthetical detail; obligatorily **enclosed in commas** and introduced by **which** (for things) or **who** (for people).
> The tuned mass damper, **which was engineered by Taiwanese structural specialists**, mitigated the tower's lateral sway.`
    },
    {
      id: 'tb5-c10',
      title: '188–189. Possessive "Whose" vs. Contraction "Who\'s"',
      fullText: `* **Whose**: Possessive relative pronoun modifying persons, institutions, or inanimate objects.
  > *The pharmaceutical company **whose** mRNA vaccine achieved efficacy received international authorization.*
* **Who\'s**: Contraction for *who is* or *who has*.
  > ***Who\'s** directing the computational genomics laboratory?*`
    },
    {
      id: 'tb5-c11',
      title: '190–194. Complex Pronoun Concord and Shifting Person Traps',
      fullText: `Maintain unwavering grammatical person across dependent and independent clauses:

### Flawed Person Shift:
> *When an economic analyst examines monetary policy, **you** must evaluate inflation expectations.*

### Rectified 3rd-Person Concord:
> When an economic analyst examines monetary policy, **the analyst** must evaluate inflation expectations.`
    },
    {
      id: 'tb5-c12',
      title: '195–198. Redundant Double Subjects and Misused Reflexive Pronouns',
      fullText: `### Double Subject Redundancy:
> *The Nobel laureate in chemistry, **she** delivered the keynote address.* → UNGRAMMATICAL!
> Correct: **The Nobel laureate in chemistry delivered the keynote address.**

### Reflexive Pronoun Misuse (*myself, himself, herself*):
Reflexive pronouns require a coreferent subject within the same clause. They cannot serve as standalone direct objects or prepositional objects.
> *The department chair invited Dr. Alvarez and **myself**.* → UNGRAMMATICAL!
> Correct: **The department chair invited Dr. Alvarez and me.**`
    },
    {
      id: 'tb5-c13',
      title: '205–206. Master Pronoun Diagnostic Protocol',
      fullText: `When auditing pronouns:
1. Isolate the explicit nominal antecedent.
2. Confirm strict number and gender agreement.
3. Validate case based on syntactic position (subjective vs. objective vs. possessive).
4. Guard against ambiguous dual antecedents and rogue reflexives.`
    }
  ]
};

export const THEORY_BLOCK_6: WritingTheoryBlock = {
  blockNumber: 6,
  title: 'Modifiers, Adjective/Adverb Placement, and Logical Modification',
  description: 'Adjectives vs Adverbs, Linking Verbs, Modifier Placement, Dangling Modifiers, Misplaced Modifiers, Limiters (Only, Almost), and Reduced Clauses',
  concepts: [
    {
      id: 'tb6-c1',
      title: '207–208. The Principle of Syntactic Proximity for Modifiers',
      fullText: `A **modifier** adds descriptive, qualitative, or restrictive detail to a target syntactic constituent.

The Adjacency Principle:
> **A modifying word, phrase, or clause must be situated as close as possible to the specific constituent it is intended to modify, ensuring the structural relationship is transparent and unambiguous.**`
    },
    {
      id: 'tb6-c2',
      title: '209–211. Dangling Participial Modifiers and Subject Alignment',
      fullText: `A **dangling modifier** occurs when an introductory verbal phrase (*participial or infinitival*) fails to describe the grammatical subject immediately following the comma.

### Ungrammatical (Dangling Modifier):
> *Having synthesized the novel graphene polymer, the tensile strength was measured in the materials laboratory.*
*(Illogical: "Tensile strength" did not synthesize graphene.)*

### Rectified Logical Construction:
> Having synthesized the novel graphene polymer, the **materials scientists measured** its tensile strength in the laboratory.`
    },
    {
      id: 'tb6-c3',
      title: '212–214. Participial Phrases (Present, Past, and Perfect Aspect)',
      fullText: `* **Present Participial Modifier (-ing)**: Depicts concurrent action (*Analyzing the spectroscopic emissions, the astrophysicists detected methane signatures*).
* **Perfect Participial Modifier (Having + Past Participle)**: Depicts anterior action (*Having mapped the ocean floor with multibeam sonar, hydrographers identified deep hydrothermal fissures*).
* **Past Participial Modifier (-ed / irregular)**: Depicts passive condition (*Restored by Venetian conservators, the Renaissance altarpiece was returned to the cathedral*).`
    },
    {
      id: 'tb6-c4',
      title: '215–218. Adjectives, Adverbs, and Copular/Linking Verbs',
      fullText: `* **Adjectives**: Modify nouns or nominal phrases (*rigorous methodology, empirical evidence*).
* **Adverbs**: Modify verbs, adjectives, or other adverbs (*calculated rigorously, highly sensitive detector*).

### Linking / Copular Verbs (*seem, appear, remain, become, feel, look, smell, sound, taste*):
Linking verbs connect the subject to a **predicate adjective**, not an adverb!
> The macroeconomic forecast remains **stable**. *(Predicate adjective modifying "forecast")*
> The sensor readings appeared **accurate**. *(Predicate adjective modifying "readings")*`
    },
    {
      id: 'tb6-c5',
      title: '219–221. High-Frequency Lexical Traps: "Good" vs. "Well", "Bad" vs. "Badly"',
      fullText: `* **Good (Adjective)** vs. **Well (Adverb / State of Health)**:
  > *The turbine operated **well** under extreme aerodynamic load.* *(Adverb modifying verb "operated")*
  > *The structural design was **good**.* *(Predicate adjective)*
* **Bad (Adjective)** vs. **Badly (Adverb)**:
  > *The seismic dampener performed **badly** during the simulation.* *(Adverb modifying "performed")*`
    },
    {
      id: 'tb6-c6',
      title: '224–228. Precise Placement of Limiting Modifiers ("Only", "Almost", "Nearly")',
      fullText: `Limiting adverbs (*only, almost, nearly, merely, just*) modify the **exact constituent immediately following them**. Shifting their position fundamentally transforms the semantic proposition.

### Semantic Comparisons:
1. **Only the chief conservator** examined the Minoan fresco. *(No other individual examined it.)*
2. The chief conservator **only examined** the Minoan fresco. *(She examined it, but took no restorative action.)*
3. The chief conservator examined **only the Minoan fresco**. *(She examined no other artifact in the collection.)*`
    },
    {
      id: 'tb6-c7',
      title: '230–232. Misplaced and Squinting Modifiers',
      fullText: `### Misplaced Modifier:
A modifier separated from its logical target, attaching absurdly to a neighboring noun.
> *The archaeologist catalogued the Bronze Age artifacts in the museum vault that were excavated from Crete.*
> Correct: **In the museum vault, the archaeologist catalogued the Bronze Age artifacts that were excavated from Crete.**

### Squinting Modifier:
A modifier positioned between two constituents such that it ambiguously qualifies either one.
> *Institutions that publish research **frequently** enhance their global prestige.*
*(Does "frequently" modify "publish" or "enhance"? Revise to: "Institutions that frequently publish research enhance their global prestige.")*`
    },
    {
      id: 'tb6-c8',
      title: '247–248. Reduced Participial and Relative Clauses',
      fullText: `Clauses can be reduced into compact participial phrases to enhance rhetorical concision:

* Full Relative Clause: *Scholars who specialize in ancient numismatics authenticated the Roman coin.*
* Reduced Participial Phrase: **Scholars specializing in ancient numismatics authenticated the Roman coin.**
* Full Passive Clause: *The manuscript that was discovered in the desert cave dates to 200 BCE.*
* Reduced Passive Phrase: **The manuscript discovered in the desert cave dates to 200 BCE.**`
    },
    {
      id: 'tb6-c9',
      title: '253–256. Modifier Repair Methodologies',
      fullText: `### Method 1 (Reposition the Main Subject):
> *Upon excavating the burial chamber, gold ceremonial masks were discovered by the archaeological team.*
> **Repair 1**: **Upon excavating the burial chamber, the archaeological team discovered gold ceremonial masks.**

### Method 2 (Expand the Modifier into a Complete Subordinate Clause):
> **Repair 2**: **When the archaeological team excavated the burial chamber, gold ceremonial masks were discovered.**`
    }
  ]
};

export const THEORY_BLOCK_7: WritingTheoryBlock = {
  blockNumber: 7,
  title: 'Sentence Boundaries, Coordination, Subordination, and Clause Structure',
  description: 'Independent vs Dependent Clauses, Subordinating Conjunctions, Comma Splices, Run-ons, FANBOYS, Semicolons, Colons, Dashes, and Parentheses',
  concepts: [
    {
      id: 'tb7-c1',
      title: '261–265. Clause Anatomy: Independent vs. Dependent Structures',
      fullText: `* **Independent Clause (IC)**: Contains a grammatical subject and finite verb, expressing a complete syntactic and semantic thought that can stand alone as a sentence.
  > *The gravitational-wave detector recorded a black-hole merger.*
* **Dependent / Subordinate Clause (DC)**: Contains a subject and finite verb but is headed by a subordinating conjunction, rendering it syntactically dependent upon an independent clause.
  > *Although the gravitational-wave detector recorded a black-hole merger...*

Common Subordinating Conjunctions:
> **although, because, whereas, while, since, unless, whether, after, before, whenever, inasmuch as**`
    },
    {
      id: 'tb7-c2',
      title: '266–270. Subordination Punctuation Hierarchy',
      fullText: `### Pattern 1: Dependent Clause First (DC, IC) → Comma Required!
> **Because seismic activity destabilized the subterranean magma chamber, volcanologists ordered an immediate evacuation.**

### Pattern 2: Independent Clause First (IC DC) → No Comma!
> **Volcanologists ordered an immediate evacuation because seismic activity destabilized the subterranean magma chamber.**

*(Exception: Concessive clauses with "although" or "whereas" occurring in sentence-final position usually retain a comma for contrastive clarity.)*`
    },
    {
      id: 'tb7-c3',
      title: '271–272. Comma Splices and the 4 Standardized Rectifications',
      fullText: `A **comma splice** occurs when two independent clauses are connected by only a comma without a coordinating conjunction.

> *The particle accelerator reached peak collision energy, the superconducting magnets maintained optimal cryogenic temperatures.* → COMMA SPLICE!

### The 4 Valid Rectification Techniques:
1. **Period / Autonomous Sentences**: *The particle accelerator reached peak collision energy. The superconducting magnets maintained optimal cryogenic temperatures.*
2. **Semicolon**: *The particle accelerator reached peak collision energy; the superconducting magnets maintained optimal cryogenic temperatures.*
3. **Comma + Coordinating Conjunction (FANBOYS)**: *The particle accelerator reached peak collision energy, and the superconducting magnets maintained optimal cryogenic temperatures.*
4. **Subordinating Conjunction**: *When the particle accelerator reached peak collision energy, the superconducting magnets maintained optimal cryogenic temperatures.*`
    },
    {
      id: 'tb7-c4',
      title: '273–275. Semicolons and Conjunctive Adverb Transitions',
      fullText: `Conjunctive adverbs (*however, therefore, consequently, moreover, furthermore, nevertheless, thus, hence*) are transitional words, NOT coordinating conjunctions. They cannot resolve a comma splice when punctuated with a simple comma.

### Correct Semicolon + Conjunctive Adverb Boundary:
> Global lithium demand has escalated exponentially**; consequently,** sovereign nations are expanding strategic mineral reserves.

### Fatal Comma Splice Defect:
> *Global lithium demand has escalated exponentially, consequently, sovereign nations are expanding strategic mineral reserves.*`
    },
    {
      id: 'tb7-c5',
      title: '276–282. Coordinating Conjunctions (FANBOYS) and Compound Predicates',
      fullText: `The 7 Coordinating Conjunctions: **FANBOYS** (*For, And, Nor, But, Or, Yet, So*).

### Rule 1: Comma + FANBOYS Joins Two Independent Clauses:
> The deep-sea probe mapped the abyssal trench**, but** acoustic telemetry degraded under high pressure.

### Rule 2: Compound Predicates Require NO Comma Before FANBOYS:
When *and* or *but* joins two predicate verbs sharing a single subject, do not insert a comma.
> The deep-sea probe **mapped** the abyssal trench **and recorded** hydrothermal vent temperatures.
*(Subject "probe" governs both verbs without a second subject.)*`
    },
    {
      id: 'tb7-c6',
      title: '283–288. Conjunctions of Concession, Result, and Negative Inversion ("Nor")',
      fullText: `* **Negative Inversion After "Nor"**: When *nor* joins independent clauses, the second clause undergoes subject-auxiliary inversion.
  > *The maritime expedition did not locate the shipwreck, **nor did the divers recover** any surviving hull timber.*`
    },
    {
      id: 'tb7-c7',
      title: '289–296. Structural Boundary Defects: Fragments and Fused Run-Ons',
      fullText: `* **Sentence Fragment**: A dependent structure lacking a main independent clause or finite verb.
  > *Whereas the climatological model forecasted unprecedented Arctic ice melt.* → FRAGMENT!
* **Fused (Run-On) Sentence**: Two independent clauses joined with zero punctuation or conjunctions.
  > *The radiocarbon dating confirmed the artifact's antiquity the museum acquired the collection.* → RUN-ON!`
    },
    {
      id: 'tb7-c8',
      title: '311–315. Colons, Em Dashes, and Parenthetical Boundary Syntax',
      fullText: `### The Colon Rule:
The constituent **before a colon MUST be a complete independent clause**. The constituent following the colon elaborates, exemplifies, or summarizes the preceding idea.
> **The structural investigation reached an unequivocal conclusion: thermal expansion had compromised the steel joints.**

### Em Dashes (—) and Parentheses:
Set off parenthetical interruptions or abrupt rhetorical shifts with balanced dashes or parentheses:
> The archaeological team unearthed thirty Roman amphorae—**all intact and bearing imperial stamped seals**—from the harbor seabed.`
    }
  ]
};

export const THEORY_BLOCK_8: WritingTheoryBlock = {
  blockNumber: 8,
  title: 'Parallelism, Comparisons, and Logical Sentence Structure',
  description: 'Grammatical Parallelism, Correlative Conjunctions, Logical Comparisons, Comparing Like with Like, "That of / Those of", and Quantity Comparisons (Less/Fewer)',
  concepts: [
    {
      id: 'tb8-c1',
      title: '324–326. The Law of Syntactic Parallelism',
      fullText: `**Parallelism** dictates that elements performing identical grammatical functions within a list, coordinate series, or comparison must share matching syntactic morphology.

### Exemplary Parallel Series:
> The graduate research program trains students **to formulate** hypotheses, **to calibrate** analytical instruments, and **to defend** dissertations.
*(All three elements are matching infinitives; the particle "to" may be repeated or stated once initially.)*

### Defective Nonparallel Series:
> *The graduate program trains students to formulate hypotheses, instrument calibration, and defending dissertations.*`
    },
    {
      id: 'tb8-c2',
      title: '327–333. Parallelism Across Parts of Speech',
      fullText: `* **Parallel Finite Verbs**: *The epidemiologists **isolated** the pathogen, **sequenced** its genome, and **published** their findings.*
* **Parallel Nouns**: *rigor, integrity, and objectivity*
* **Parallel Adjectives**: *accurate, comprehensive, and reproducible*
* **Parallel Gerunds**: *synthesizing compounds, measuring yields, and documenting reactions*`
    },
    {
      id: 'tb8-c3',
      title: '334–339. Correlative Conjunction Symmetries',
      fullText: `Correlative pairs must be followed by identical grammatical constructions:
* **both** [Phrase A] **and** [Phrase B]
* **either** [Phrase A] **or** [Phrase B]
* **neither** [Phrase A] **nor** [Phrase B]
* **not only** [Phrase A] **but also** [Phrase B]

### Correctly Balanced:
> The renewable transition requires **not only** *substantial public capital investment* **but also** *comprehensive grid modernization*.
*(Noun Phrase + Noun Phrase)*

### Illogically Unbalanced:
> *The transition requires **not only** public investment **but also** to modernize the grid.*`
    },
    {
      id: 'tb8-c4',
      title: '343–346. Logical Comparison and Category Equivalence',
      fullText: `Comparisons must link entities belonging to identical logical, ontological, and semantic categories.

### Faulty Comparison:
> *The carbon footprint of commercial aviation is considerably larger than **maritime shipping**.*
*(Illogical: Compares a metric [carbon footprint] to an entire industry [maritime shipping].)*

### Rectified Comparison:
> The carbon footprint of commercial aviation is considerably larger than **that of** maritime shipping.`
    },
    {
      id: 'tb8-c5',
      title: '347–349. Comparatives (Two Items) vs. Superlatives (Three+ Items)',
      fullText: `* **Comparative Degree (-er / more)**: Used when contrasting exactly **two** entities (*Method A is more efficient than Method B*).
* **Superlative Degree (-est / most)**: Used when evaluating an entity across **three or more** items (*Method A is the most efficient of the five techniques*).`
    },
    {
      id: 'tb8-c6',
      title: '350–353. Quantifiers: "Fewer" vs. "Less", "Number" vs. "Amount"',
      fullText: `* **Fewer / Number of**: Modifies **countable** plural nouns (*fewer exoplanets, the number of clinical participants*).
* **Less / Amount of**: Modifies **mass / noncount** nouns (*less geothermal energy, the amount of synthetic yield*).`
    },
    {
      id: 'tb8-c7',
      title: '366–371. Equative Comparisons ("As... As") and Ellipsis',
      fullText: `* **Equative Construction**: Must pair **as + adjective/adverb + as** (*The quantum processor is **as fast as** the classical supercomputer*). Never substitute "as... than".`
    },
    {
      id: 'tb8-c8',
      title: '377–381. Prepositional Comparison Idioms: "Unlike" and "Different From"',
      fullText: `* **Unlike**: Must contrast parallel nouns directly following the introductory comma:
  > **Unlike the classical mechanics framework, quantum electrodynamics describes** probabilistic wavefunctions.
* **Different From**: Formal English mandates *different from*, rejecting colloquial *different than* before noun phrases.`
    },
    {
      id: 'tb8-c9',
      title: '382–386. Demonstrative Substitutes in Comparisons ("That of" and "Those of")',
      fullText: `To avoid faulty comparison errors when evaluating attributes of different entities:
* Use **that of** for singular/mass attributes (*The thermal efficiency of a heat pump exceeds **that of** a gas furnace*).
* Use **those of** for plural attributes (*The computational algorithms of modern AI models are more complex than **those of** earlier expert systems*).`
    }
  ]
};
