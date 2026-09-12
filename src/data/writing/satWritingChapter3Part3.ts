import { WritingTheoryBlock } from './satWritingTypes';

export const THEORY_BLOCK_9: WritingTheoryBlock = {
  blockNumber: 9,
  title: 'Pronouns, Reference, Case, and Agreement',
  description: 'Complete Pronoun Diagnostic Framework, Antecedents, Case, Person Shifts, Indefinite Pronoun Agreement, Relative Pronouns, and Ambiguous References',
  concepts: [
    {
      id: 'tb9-c1',
      title: '396–398. Pronoun Functions and Antecedent Concord',
      fullText: `A **pronoun** operates as a referential placeholder for an explicit nominal **antecedent**.

* **Singular Entity**: *The Smithsonian Institution expanded **its** open-access digitization initiative.*
* **Plural Nominal**: *Astrobiologists calibrated the rover's spectrometers so that **they** could analyze regolith composition.*`
    },
    {
      id: 'tb9-c2',
      title: '399–403. Distributive and Indefinite Antecedents ("Each", "Every", "One")',
      fullText: `Antecedents introduced by *each*, *every*, or *one* are grammatically **singular**:

> **Each of the clinical trial participants** recorded **his or her** symptoms in a digital log.
> **Every sovereign signatory** must submit **its** carbon audit to the international panel.
> **One** should always substantiate **one\'s** empirical claims with verifiable datasets.`
    },
    {
      id: 'tb9-c3',
      title: '404–405. Maintaining Person Consistency and Eliminating Shifting Perspectives',
      fullText: `A coherent academic analysis maintains stable grammatical person (1st, 2nd, or 3rd):

### Defective Person Shift:
> *When an economic researcher models inflationary trends, **you** must account for velocity of money.*

### Rectified 3rd-Person Concord:
> When an economic researcher models inflationary trends, **the researcher** must account for velocity of money.`
    },
    {
      id: 'tb9-c4',
      title: '406–412. Case Governance in Compound Structures and Prepositional Complements',
      fullText: `* **Subjective Forms**: *I, he, she, we, they, who*
* **Objective Forms**: *me, him, her, us, them, whom*

### Compound Test Protocol:
Mentally isolate the pronoun by dropping the companion nominal:
> The dean awarded research fellowships to Dr. Alvarez and **me**. *(Test: awarded fellowships to **me**)*
> Dr. Alvarez and **I** submitted the grant proposal. *(Test: **I** submitted the proposal)*`
    },
    {
      id: 'tb9-c5',
      title: '413–417. Possessive Determiners vs. Contraction Homophones',
      fullText: `* **Its** (Possessive) vs. **It\'s** (*It is / It has*)
* **Their** (Possessive) vs. **They\'re** (*They are*) vs. **There** (Locative / Existential)
* **Your** (Possessive) vs. **You\'re** (*You are*)

Possessive pronouns never take apostrophes.`
    },
    {
      id: 'tb9-c6',
      title: '418–422. Functional Roles of "Who", "Whom", "Whose", and "Who\'s"',
      fullText: `* **Who (Subject)**: *The astrophysicist **who** discovered the pulsar received the medal.*
* **Whom (Object)**: *The diplomat **whom** the ambassador appointed negotiated the treaty.*
* **Whose (Possessive)**: *The telescope **whose** cryogenic mirror degraded was decommissioned.*
* **Who\'s (Contraction)**: ***Who\'s** presenting the keynote at the quantum computing conference?*`
    },
    {
      id: 'tb9-c7',
      title: '428–434. Resolving Ambiguous and Distant Antecedents',
      fullText: `Eliminate ambiguity by replacing vague pronouns with specific nominals:

### Ambiguous Syntax:
> *The lead archaeologist discussed the radiocarbon data with the conservator, but **she** remained unconvinced.*

### Unambiguous Revision:
> The lead archaeologist discussed the radiocarbon data with the conservator, but **the conservator** remained unconvinced.`
    },
    {
      id: 'tb9-c8',
      title: '457–461. The Master Pronoun Diagnostic Checkpoint',
      fullText: `For every pronoun:
1. Locate its single, unambiguous nominal antecedent.
2. Verify numerical and gender concordance.
3. Validate case based on syntactic slot (subject, direct object, prepositional complement).
4. Guard against illegitimate reflexive substitutions.`
    }
  ]
};

export const THEORY_BLOCK_10: WritingTheoryBlock = {
  blockNumber: 10,
  title: 'Subject–Verb Agreement & Special Agreement Structures',
  description: 'Advanced Diagnostics for Subject-Verb Agreement, Intervening Phrases, Additive/Disjunctive Rules, Quantity Expressions, and Special Noun Forms (Concepts 462–510)',
  concepts: [
    {
      id: 'tb10-c1',
      title: '462–470. Advanced Subject Identification and Modifier Stripping',
      fullText: `Standardized tests obscure subject–verb concord by embedding multiple prepositional phrases, participial modifiers, and relative clauses between the head noun and its verb.

### The Stripping Method:
Bracket all non-governing modifiers to reveal the true head noun:
> **The archive** ~~of 15th-century Venetian commercial ledgers preserved in the doge's library~~ **contains** vital trade telemetry.
*(Subject: "archive" [singular] → Verb: "contains" [singular])*`
    },
    {
      id: 'tb10-c2',
      title: '471–480. Additive Phrases vs. Compound Subjects & Proximity Conjunctions',
      fullText: `* **Additive Prepositional Modifiers** (*along with, as well as, together with, in addition to*): Do NOT pluralize a singular subject.
  > **The lead neuroscientist**, *as well as her laboratory technicians*, **is** publishing the functional MRI data.
* **Compound Subjects** (*joined by and*): Mandate a **plural verb**.
  > **The neuroscientist and her technicians are** publishing the data.
* **Disjunctive Correlatives** (*neither... nor, either... or*): Governed by the **nearer subject**.
  > Neither the chief archivist nor the **curators have** authenticated the fresco.`
    },
    {
      id: 'tb10-c3',
      title: '481–490. Quantity Expressions, Indefinite Pronouns, and "One of the... who"',
      fullText: `* **Partitive Quantifiers** (*fraction of, percentage of, some of, most of*): The verb agrees with the **object of "of"**.
  > Two-thirds of the **sedimentary core was** analyzed. *(noncount → singular)*
  > Two-thirds of the **fossilized specimens were** catalogued. *(plural count → plural)*
* **Distributive Indefinites** (*each, every, neither, either*): Always **singular**.
  > **Each** of the particle detectors **has** undergone recalibration.
* **"One of the [plural] who [plural]" vs. "The only one who [singular]"**:
  > Dr. Thorne is **one of the climatologists who analyze** Antarctic ice sheets. *(who → climatologists)*
  > Dr. Thorne is **the only one of the climatologists who has descended** into the subglacial fissure. *(who → the only one)*`
    },
    {
      id: 'tb10-c4',
      title: '491–500. Collective Entities, Scientific Disciplines, and Inversion',
      fullText: `* **Collective Bodies** (*consortium, senate, jury, commission*): Singular when acting with institutional unity.
  > The international maritime **commission has** adopted stricter ballast water protocols.
* **Nouns Plural in Form but Singular in Meaning**:
  > **Quantum mechanics is** essential to semiconductor fabrication.
* **Inverted Syntax**: The subject follows the verb.
  > Across the volcanic plateau **stretch** extensive fields of basaltic lava.`
    },
    {
      id: 'tb10-c5',
      title: '501–510. Noncount Nouns, Gerund Subjects, and Master Concord Audit',
      fullText: `* **Noncount Mass Nouns** (*apparatus, equipment, infrastructure, empirical evidence, advice*): Strictly **singular**.
  > The optical **equipment** installed at the summit **operates** continuously.
* **Nominal Gerund Phrases**: Strictly **singular**.
  > **Reconstructing ancient climatic variations requires** high-resolution dendrochronology.`
    }
  ]
};

export const THEORY_BLOCK_11: WritingTheoryBlock = {
  blockNumber: 11,
  title: 'Modifiers, Modifier Placement, and Logical Sentence Construction',
  description: 'Adjectives vs. Adverbs, Misplaced Modifiers, Limiter Placement, Dangling Participial Phrases, Restrictive/Nonrestrictive Relative Clauses (Concepts 511–551)',
  concepts: [
    {
      id: 'tb11-c1',
      title: '511–520. Adjectival vs. Adverbial Modification and Predicate Adjectives',
      fullText: `* **Adjectives** qualify nouns (*a meticulous restoration*).
* **Adverbs** qualify verbs, adjectives, or other adverbs (*restored meticulously, remarkably robust*).

### Copular / Linking Verbs:
> The seismological readings appear **accurate**. *(Predicate adjective describing readings)*
> The seismologist recorded the readings **accurately**. *(Adverb modifying verb recorded)*`
    },
    {
      id: 'tb11-c2',
      title: '521–530. Precise Limiter Placement ("Only", "Almost", "Nearly")',
      fullText: `Position limiters immediately adjacent to their target constituent:

> *The aerospace engineers almost tested thirty aerodynamic wing designs.* → WRONG!
> Correct: **The aerospace engineers tested almost thirty aerodynamic wing designs.**`
    },
    {
      id: 'tb11-c3',
      title: '531–540. Dangling Participial Modifiers and Logical Agent Alignment',
      fullText: `An introductory participial phrase must modify the **exact nominal subject following the comma**:

### Dangling Construction:
> *Having extracted the core samples from the glacier, the isotopic ratios were measured by the researchers.* → UNGRAMMATICAL!

### Logical Subject Alignment:
> Having extracted the core samples from the glacier, the **researchers measured** their isotopic ratios.`
    },
    {
      id: 'tb11-c4',
      title: '541–551. Essential (Restrictive) vs. Nonessential (Nonrestrictive) Clauses',
      fullText: `* **Restrictive Modifiers (No Commas, uses "that" or "who")**: Essential for defining identity.
  > Satellites **that operate in low Earth orbit** experience atmospheric drag.
* **Nonrestrictive Modifiers (Enclosed in Commas, uses "which" or "who")**: Adds nonessential supplementary information.
  > The Hubble Space Telescope, **which orbits 540 kilometers above Earth**, captures high-resolution optical imagery.`
    }
  ]
};

export const THEORY_BLOCK_12: WritingTheoryBlock = {
  blockNumber: 12,
  title: 'Parallelism, Comparisons, and Coordination',
  description: 'Parallel Structure in Series & Correlatives, Logical Comparisons ("That of / Those of"), Sentence Boundaries, and Clause Coordination (Concepts 552–594)',
  concepts: [
    {
      id: 'tb12-c1',
      title: '552–562. Structural Parallelism in Lists and Compound Predicates',
      fullText: `Coordinate elements in lists or series must maintain identical grammatical morphology:

> The bioengineering curriculum prepares candidates **to design** prosthetic interfaces, **to synthesize** biocompatible polymers, and **to evaluate** clinical safety protocols.`
    },
    {
      id: 'tb12-c2',
      title: '563–573. Parallel Symmetries with Correlative Conjunctions',
      fullText: `Correlative conjunction pairs demand matching structural constituents immediately after each particle:

> The renewable energy initiative requires **not only** *substantial capital investment from private funds* **but also** *comprehensive regulatory reform from municipal authorities*.`
    },
    {
      id: 'tb12-c3',
      title: '574–583. Logical Comparisons and Category Equivalence ("That of / Those of")',
      fullText: `Comparisons must link logically equivalent entities.

### Illogical Category Comparison:
> *The spatial resolution of the James Webb Space Telescope exceeds **the Hubble Space Telescope**.* → ILLOGICAL!
*(Compares spatial resolution to an entire space telescope.)*

### Corrected Comparison:
> The spatial resolution of the James Webb Space Telescope exceeds **that of** the Hubble Space Telescope.`
    },
    {
      id: 'tb12-c4',
      title: '584–594. Independent Clause Boundaries, Comma Splices, and Fused Sentences',
      fullText: `Joining two independent clauses requires one of 4 standardized boundary patterns:
1. **Period**: *Clause 1. Clause 2.*
2. **Semicolon**: *Clause 1; Clause 2.*
3. **Comma + Coordinating Conjunction (FANBOYS)**: *Clause 1, and Clause 2.*
4. **Semicolon + Conjunctive Adverb + Comma**: *Clause 1; however, Clause 2.*`
    }
  ]
};

export const THEORY_BLOCK_13: WritingTheoryBlock = {
  blockNumber: 13,
  title: 'Chapter Integration, Error Detection, and Final Practice',
  description: 'Comprehensive Integration, Master 10-Step Editing Sequence, High-Frequency SAT Trap Summary, Concision/Redundancy Rules, and Final Strategy (Concepts 595–624)',
  concepts: [
    {
      id: 'tb13-c1',
      title: '595–604. The Complete Master 10-Step Grammatical Diagnostic Algorithm',
      fullText: `When diagnosing complex standardized writing questions:
1. **Isolate the Subject**: Strip all intervening prepositional phrases, appositives, and relative clauses.
2. **Verify Predicate Concord**: Match singular/plural inflection.
3. **Audit Verb Tense & Aspect**: Confirm chronological consistency and past-perfect/present-perfect logic.
4. **Check Mandative & Subjunctive Mood**: Verify uninflected base forms after verbs of demand/requirement.
5. **Inspect Pronoun Antecedents**: Confirm clear, single antecedents and numerical agreement.
6. **Verify Pronoun Case**: Test compound subjective vs. objective slots with the drop-out diagnostic.
7. **Align Modifiers**: Ensure introductory participial phrases modify the immediate grammatical subject.
8. **Enforce Parallelism**: Match morphology across coordinate lists and correlative pairs.
9. **Eliminate Faulty Comparisons**: Verify like-with-like comparisons using *that of* / *those of*.
10. **Validate Clause Boundaries**: Check for comma splices, fragments, and fused run-ons.`
    },
    {
      id: 'tb13-c2',
      title: '605–613. High-Frequency Standardized Trap Taxonomy',
      fullText: `1. **Intervening Preposition Trap**: Plural noun in prepositional phrase distracting from singular head noun.
2. **Additive Phrase Trap**: Mistaking *along with* / *as well as* for coordinating *and*.
3. **Proximity Disjunction Trap**: Forgetting that *neither... nor* agrees with the *closer* subject.
4. **Dangling Participle Trap**: Placing the action's recipient instead of its actor after the introductory comma.
5. **Faulty Comparison Trap**: Omitting *that of* or *those of* when comparing attributes.
6. **Conjunctive Adverb Comma Splice**: Connecting two independent clauses with *comma + however*.`
    },
    {
      id: 'tb13-c3',
      title: '614–619. Concision, Redundancy Elimination, and Lexical Precision',
      fullText: `* **Concision**: Prefer the most compact phrasing that retains full semantic accuracy (*because* instead of *on account of the fact that*).
* **Tautology / Semantic Redundancy**: Eliminate phrases that repeat identical definitions (*unanimous consensus of all members* → *consensus*).
* **Nominalization Reduction**: Prefer active verbal predicates over bloated nominalized constructions (*The team analyzed* rather than *The team performed an analysis of*).`
    },
    {
      id: 'tb13-c4',
      title: '620–624. Chapter 3 Master Strategy Synthesis',
      fullText: `### The Structural Analysis Method:
> **Deconstruct the syntactic skeleton (Subject → Verb → Complement) before evaluating answer choices.**

Never rely on intuitive auditory "ear-tests." Dissect grammatical mechanics with rigorous structural precision.`
    }
  ]
};
