import { WritingTheoryBlock } from './satWritingTypes';

export const THEORY_BLOCK_1: WritingTheoryBlock = {
  blockNumber: 1,
  title: 'Foundations of Sentence Grammar and Subject–Verb Agreement',
  description: 'Subject Identification, Head Nouns, Prepositional Phrase Traps, Collective Nouns, and Inverted Sentence Structures',
  concepts: [
    {
      id: 'tb1-c1',
      title: '1. The Subject of a Sentence',
      fullText: `The **subject** is the primary noun phrase or nominal clause that executes the predicate verb's action or undergoes the state of being it describes.

### Singular Grammatical Concord:
> The paleoclimatologist **analyzes** isotopic ratios trapped in Antarctic ice cores.
* **Subject**: *paleoclimatologist* (singular nominal agent)
* **Verb**: *analyzes* (third-person singular present form ending in *-s*)

### Plural Grammatical Concord:
> The paleoclimatologists **analyze** isotopic ratios trapped in Antarctic ice cores.
* **Subject**: *paleoclimatologists* (plural noun)
* **Verb**: *analyze* (base plural form without *-s*)

### The Core Invariant:
> **Singular Subject → Singular Verb Form**
> **Plural Subject → Plural Verb Form**`
    },
    {
      id: 'tb1-c2',
      title: '2. Subjects Can Be Long and Syntactically Embedded',
      fullText: `Standardized assessment items rarely test simple, transparent sentences. Instead, test writers systematically insulate the subject from its finite verb with dense prepositional modifiers, participial phrases, and appositives.

### Diagnostic Analysis:
> The archival repository of illuminated medieval manuscripts discovered in the monastic vaults **is** preserved under nitrogen gas.

* Apparent Subject adjacent to the verb: *vaults* (plural noun object of preposition)
* True Grammatical Subject: **repository** (singular head noun)
* Modifying Adjuncts: *of illuminated medieval manuscripts* + *discovered in the monastic vaults*
* Finite Predicate Verb: **is preserved** (singular auxiliary concord with "repository")

### The 4-Step Subject Isolation Algorithm:
1. Identify the finite verb phrase demanding inflection.
2. Bracket and eliminate all intervening prepositional phrases (*of...*, *in...*, *with...*, *across...*).
3. Strip away nonrestrictive participial and relative clauses.
4. Match the inflection of the isolated **head noun** directly to the verb.`
    },
    {
      id: 'tb1-c3',
      title: '3. The Head Noun Principle',
      fullText: `The **head noun** is the ultimate structural anchor of a complex noun phrase; all neighboring adjectives, prepositional modifiers, and dependent clauses merely qualify it without altering its grammatical number.

### Exemplary Contrast:
> The compendium of Renaissance astronomical treatises and lunar charts **is** housed in the Laurentian Library.

* Complete Nominal Phrase: *The compendium of Renaissance astronomical treatises and lunar charts*
* Head Noun: **compendium** (singular)
* Oblique Nouns within prepositional modifier: *treatises* (plural), *charts* (plural)

### Correct:
> The compendium of Renaissance astronomical treatises **is** indispensable to historians.

### Incorrect:
> *The compendium of Renaissance astronomical treatises **are** indispensable to historians.*

*Explanation*: "Treatises" is the grammatical object of the preposition "of," rendering it incapable of governing the verb.`
    },
    {
      id: 'tb1-c4',
      title: '4. Prepositional Phrases Intervening Between Subject and Verb',
      fullText: `Prepositional phrases are the primary instrument used on the SAT to create false proximity agreement errors.

Common prepositions generating agreement interference:
> **of, in, on, with, by, for, among, between, from, under, throughout, alongside**

Any noun embedded within an adpositional phrase functions as the preposition's object, permanently disqualifying it from serving as the syntactic subject.

### Example 1 (Singular Head + Plural Modifier):
> The stratigraphy of sedimentary layers in the Grand Canyon **demonstrates** continuous sedimentation.
* Subject: **stratigraphy** (singular)
* Modifiers: *of sedimentary layers* + *in the Grand Canyon*
* Verb: **demonstrates** (singular)

### Example 2 (Plural Head + Singular Modifier):
> The spectroscopic signatures of the distant exoplanet **reveal** atmospheric water vapor.
* Subject: **signatures** (plural)
* Modifier: *of the distant exoplanet*
* Verb: **reveal** (plural)

### Example 3 (Stacked Prepositional Sequence):
> The resilience of coral ecosystems under thermal stress **depends** upon symbiont diversity.
* Subject: **resilience** (singular)
* Intervening Stack: *of coral ecosystems* + *under thermal stress*
* Verb: **depends** (singular)`
    },
    {
      id: 'tb1-c5',
      title: '5. The "The Number of" vs. "A Number of" Distinction',
      fullText: `While both expressions incorporate the noun *number* followed by a plural prepositional object, their syntactic mechanisms differ fundamentally.

| Expression | Syntactic Role | Head Noun | Grammatical Concord | Example |
| :--- | :--- | :--- | :--- | :--- |
| **The number of...** | Specific mathematical count or metric | **number** (Singular) | **SINGULAR VERB** | *The number of endangered cetaceans **is** declining.* |
| **A number of...** | Idiomatic quantifier synonymous with *many* | Plural Object after *of* | **PLURAL VERB** | *A number of marine biologists **are** investigating.* |

### Analytical Verification:
* *The number of peer-reviewed submissions* **has** *doubled this quarter.* (Focuses on the statistical metric itself)
* *A number of prominent astrophysicists* **have** *endorsed the cosmic inflation model.* (Focuses on the collective individuals)`
    },
    {
      id: 'tb1-c6',
      title: '6. Collective Nouns and Institutional Concord',
      fullText: `A **collective noun** designates an aggregate entity composed of individual members (*consortium, legislature, panel, committee, symphony, faculty, jury, delegation*).

In formal standard American English, when the collective body acts with institutional unanimity as a single agent, the noun requires a **singular verb**.

### Exemplary Usage:
> The international conservation panel **has issued** a revised protocol on wetland preservation.
*(The panel acts with unified institutional authority.)*

> The parliamentary budget delegation **is convening** an extraordinary session in Brussels.
*(The delegation functions as an undivided entity.)*

### Distinguishing Unit vs. Constituent Action:
* Unified Entity: *The arbitration tribunal* **renders** *its final verdict.*
* Dispersed Constituents: *The members of the tribunal* **diverge** *in their judicial opinions.*`
    },
    {
      id: 'tb1-c7',
      title: '7. Compound Subjects Joined by "And"',
      fullText: `When two or more distinct nominals are conjoined by the coordinating conjunction **and**, they synthesize a compound plural subject mandating a **plural verb**, regardless of whether the individual conjuncts are singular.

### Exemplary Syntax:
> The lead biochemist and her research associate **publish** their crystallography data in *Cell*.
*(Agent A + Agent B = Plural syntactic subject)*

> Geothermal energy and solar photovoltaics **constitute** the backbone of the municipal microgrid.
*(Resource A + Resource B = Plural subject)*

### Critical Exception (Singular Composite Concept):
When two nouns joined by *and* denote a singular compound entity or trade concept:
> *Trial and error* **is** *essential to empirical discovery.*`
    },
    {
      id: 'tb1-c8',
      title: '8. Inverted Sentence Structures (Locational Inversion & Predicate Fronting)',
      fullText: `In standard English syntax, the subject precedes the finite verb (S–V). In **inverted structures**, the finite verb precedes the grammatical subject (V–S), frequently triggered by introductory prepositional phrases of location or direction.

### Diagnostic Example:
> Beneath the volcanic basalt layers **lie** the fossilized remains of an ancient temperate forest.

* Introductory Locational Adjunct: *Beneath the volcanic basalt layers*
* Predicate Verb: **lie** (plural present)
* Postposed Grammatical Subject: **remains** (plural head noun)

### The Normalization Test:
To verify subject-verb concord in inverted clauses, invert the clause back into canonical S–V order:
> Canonical Order: *The fossilized remains of an ancient temperate forest* **lie** *beneath the volcanic basalt layers.*`
    }
  ]
};

export const THEORY_BLOCK_2: WritingTheoryBlock = {
  blockNumber: 2,
  title: 'Verb Forms, Tense, Agreement Traps, and Pronoun Agreement',
  description: 'Present/Past Tense Forms, Auxiliary Verbs, Modal Verbs, Perfect/Progressive Tenses, Subjunctive Mood, Conditional Structures, and Pronoun Case',
  concepts: [
    {
      id: 'tb2-c1',
      title: '29. Subject–Verb Agreement Is Only the First Layer',
      fullText: `Rigorous grammatical analysis requires evaluating the complete syntactic architecture:
* Subject–verb numerical concord
* Auxiliary verb selection and participle morphology
* Chronological tense sequencing and aspect
* Subjunctive mood inflections in mandative and hypothetical frames
* Pronoun–antecedent agreement, case governance, and reference unambiguousness

### Diagnostic Contrast:
> *The bioarchaeologist analyze the excavated osteological specimens.* → WRONG!
> Correct: **The bioarchaeologist analyzes the excavated osteological specimens.**`
    },
    {
      id: 'tb2-c2',
      title: '30. Present-Tense Third-Person Singular Concord',
      fullText: `In the simple present tense:
* Third-person singular subjects (*the algorithm, the economic index, she, it*) require verbs with the **-s** or **-es** suffix.
* Plural subjects (*the algorithms, the indices, they*) require the bare base verb.

### Singular vs. Plural Contrast:
> The superconducting quantum interference device **detects** minute magnetic fluctuations. *(Singular agent → -s verb)*
> Superconducting quantum interference devices **detect** minute magnetic fluctuations. *(Plural agents → bare verb)*

### The Asymmetrical S-Rule:
* **Nouns** affix *-s* to mark **plurality** (*treatises*).
* **Verbs** affix *-s* to mark **third-person singular present** (*synthesizes*).`
    },
    {
      id: 'tb2-c3',
      title: '31. High-Frequency Irregular Present-Tense Pairs',
      fullText: `Key finite auxiliary and lexical verb pairings:

| Singular Form (3rd Person) | Plural Form | Academic Example |
| :--- | :--- | :--- |
| **is** | **are** | *The hypothesis **is** verifiable. / Hypotheses **are** verifiable.* |
| **was** | **were** | *The specimen **was** intact. / Specimens **were** intact.* |
| **has** | **have** | *The treaty **has** expired. / Treaties **have** expired.* |
| **does** | **do** | *The variable **does** not correlate. / Variables **do** not correlate.* |
| **demonstrates** | **demonstrate** | *The dataset **demonstrates** efficacy. / Datasets **demonstrate**.* |
| **corroborates** | **corroborate** | *The finding **corroborates** the model. / Findings **corroborate**.* |`
    },
    {
      id: 'tb2-c4',
      title: '32. "Has" vs. "Have" Auxiliary Precision',
      fullText: `The distinction between **has** (singular) and **have** (plural) is tested across complex embedded subjects.

### Singular Context:
> The neuroimaging consortium **has** validated the functional connectivity protocol.

### Plural Context:
> Cognitive neuroscientists studying neural plasticity **have** validated the protocol.

### Indefinite Distributive Context:
> Each of the epidemiological survey cohorts **has** completed longitudinal monitoring.
*(The distributive pronoun "Each" governs the singular auxiliary "has" despite plural "cohorts".)*`
    },
    {
      id: 'tb2-c5',
      title: '33. Auxiliary "Does" vs. "Do" and Main Verb Invariance',
      fullText: `When periphrastic **do-support** is employed for negation or emphatic assertion:
* The auxiliary (**does / do / did**) absorbs the tense and person inflection.
* The lexical main verb MUST remain strictly in its invariant **bare base form**.

### Correct:
> The socioeconomic metric **does not account** for informal barter economies.
> The socioeconomic metrics **do not account** for informal barter economies.

### Ungrammatical Trap:
> *The socioeconomic metric does not **accounts** for informal barter economies.*`
    },
    {
      id: 'tb2-c6',
      title: '34. Modal Auxiliary Verbs and Invariable Base Verbs',
      fullText: `Modal auxiliaries (*can, could, may, might, must, shall, should, will, would*) do not inflect for grammatical person or number. They obligatorily govern the **uninflected base form** of the succeeding verb.

### Correct Form:
> The seismologist **can extrapolate** fault friction parameters from seismic waveforms.
> The seismologists **can extrapolate** fault friction parameters from seismic waveforms.

### Prohibited Errors:
> *The seismologist can **extrapolates**...*
> *The team should **reviews**...*`
    },
    {
      id: 'tb2-c7',
      title: '35. Perfect Aspect Formations (Present Perfect vs. Past Perfect)',
      fullText: `### Present Perfect (*has/have + past participle*):
Depicts an event initiated in the past that persists into or bears direct consequence upon the present.
> Climatologists **have recorded** uninterrupted increases in tropospheric temperature anomalies.

### Past Perfect (*had + past participle*):
Establishes that an event reached completion **prior to another explicitly past milestone**.
> Before the particle accelerator initiated collisions, structural engineers **had recalibrated** the superconducting quadrupole magnets.
*(Note: "had" remains identical for both singular and plural subjects.)*`
    },
    {
      id: 'tb2-c8',
      title: '36. Progressive Aspect Formations',
      fullText: `Progressive verb tenses depict dynamic, unfolding actions via **be + present participle (-ing)**.

### Present Progressive Concord:
> The computational linguistics team **is fine-tuning** the natural language processing model. *(Singular)*
> Computational linguists **are fine-tuning** the natural language processing model. *(Plural)*

### Past Progressive Concord:
> The lead curator **was restoring** the 17th-century oil portrait when the gallery reopened. *(Singular)*
> Conservators **were restoring** the portraits when the gallery reopened. *(Plural)*`
    },
    {
      id: 'tb2-c9',
      title: '37. Multi-Auxiliary Chains and Concord Allocation',
      fullText: `In complex compound verb phrases containing multiple auxiliaries, **only the leftmost auxiliary verb inflects for subject agreement**. All downstream participles and auxiliaries remain fixed in form.

### Structural Breakdown:
> The planetary rover **has been traversing** the Jezero crater floor for sixteen months.
* Initial Auxiliary: **has** (singular 3rd-person inflected for "rover")
* Secondary Auxiliary: *been* (invariable past participle of *be*)
* Main Verb: *traversing* (invariable present participle)`
    },
    {
      id: 'tb2-c10',
      title: '38. Simple Past Tense Invariance in Regular and Irregular Verbs',
      fullText: `Except for the copula *be* (*was/were*), English simple past verbs do not inflect for number.

> The volcanologist **documented** the pyroclastic flow. *(Singular subject)*
> The volcanologists **documented** the pyroclastic flow. *(Plural subject)*

Consequently, SAT questions targeting subject agreement in past-tense narratives exclusively evaluate **auxiliaries** (*was/were, has/have*) rather than main lexical past verbs.`
    },
    {
      id: 'tb2-c11',
      title: '39. Past Copular Agreement ("Was" vs. "Were")',
      fullText: `The past tense of *be* is the singular English verb maintaining morphological number distinction in the indicative past:

* **Was** (1st/3rd person singular): *The excavation site was inaccessible.*
* **Were** (Plural / 2nd person): *The excavation sites were inaccessible.*`
    },
    {
      id: 'tb2-c12',
      title: '40. The Irrealis Subjunctive ("Were")',
      fullText: `In contrary-to-fact, hypothetical, or counterfactual conditional clauses, formal written English mandates the irrealis form **were** regardless of subject number.

### Counterfactual Conditional:
> If the gravitational constant **were** marginally higher, stellar nucleosynthesis would proceed along a drastically accelerated trajectory.

### Hypothetical Mood:
> The macroeconomist analyzed the monetary policy as though sovereign default **were** imminent.`
    },
    {
      id: 'tb2-c13',
      title: '41. Conditional Sentence Architecture',
      fullText: `Standard academic conditionals link logical conditions to necessary consequences across standardized temporal structures:

### Real / Predictive Conditional:
> If tectonic strain **exceeds** frictional resistance, an earthquake **will occur**.
*(Present indicative in protasis → modal "will" in apodosis)*

### Counterfactual Present / Future Conditional:
> If geothermal reservoir temperatures **were** higher, thermodynamic energy conversion **would achieve** commercial viability.
*(Subjunctive "were" in protasis → conditional "would" in apodosis)*`
    },
    {
      id: 'tb2-c14',
      title: '42. Chronological Tense Consistency and Unjustified Shifts',
      fullText: `A discourse must maintain a coherent temporal baseline. Unjustified shifts between past and present within a single sentence or contiguous clauses constitute severe stylistic and syntactic defects.

### Flawed Shift:
> *The biochemist **isolated** the enzyme and **publishes** her catalytic assays.*

### Rectified Uniform Past:
> The biochemist **isolated** the enzyme and **published** her catalytic assays.`
    },
    {
      id: 'tb2-c15',
      title: '43. Chronological Sequencing and Time Subordination',
      fullText: `Verb forms must mirror the true chronological order of historical, experimental, or narrative events.

### Sequential Past Narrative:
> After the astrophysicists **calibrated** the spectrograph, they **measured** the red-shift of the distant quasar.

### Future Sequencing with Present Subordinate Clauses:
> Once the deep-sea submersible **reaches** the abyssal plain, autonomous sensors **will transmit** acoustic telemetry.`
    },
    {
      id: 'tb2-c16',
      title: '44. Temporal Prepositions and Aspect Precision ("Before" and "After")',
      fullText: `When temporal conjunctions (*before, after, prior to*) make chronological precedence completely explicit, simple past for both clauses is syntactically sufficient and preferred.

### Unambiguous Temporal Clause:
> Before urban planners **demolished** the industrial viaduct, civic historians **catalogued** its structural cast-iron joints.

*(Note: While past perfect "had catalogued" is grammatically permissible, standard simple past "catalogued" is completely standard when "before" makes the order unambiguous.)*`
    },
    {
      id: 'tb2-c17',
      title: '45. Present Perfect vs. Specific Historical Past',
      fullText: `* **Present Perfect**: Appropriate for indefinite past achievements linked to modern scientific paradigms (*Scholars have debated the provenance of the Voynich manuscript for decades*).
* **Simple Past**: Mandatory when an explicit, closed temporal anchor is stated (*The radiocarbon laboratory dated the parchment in 2011*).`
    },
    {
      id: 'tb2-c18',
      title: '46. Pronoun–Antecedent Agreement Fundamentals',
      fullText: `A pronoun must match its antecedent in grammatical number, gender, and syntactic person.

* **Singular Entity**: *The Smithsonian Institution curated the anthropological collection before **it** published the open-access catalogue.*
* **Plural Nominal**: *Archivists digitize fragile papyri so that researchers can examine **them** remotely.*`
    },
    {
      id: 'tb2-c19',
      title: '47. Eliminating Ambiguous Pronoun References',
      fullText: `A pronoun must unambiguously point to exactly one logical noun.

### Ambiguous Syntax:
> *When the lead geneticist met with the bioethics regulator, **she** voiced concerns about somatic gene editing.*

### Syntactically Disambiguated Revision:
> When the lead geneticist met with the bioethics regulator, **the regulator** voiced concerns about somatic gene editing.`
    },
    {
      id: 'tb2-c20',
      title: '48. Institutional Nouns Require Singular Neuter Pronouns ("Its" vs. "Their")',
      fullText: `Corporate entities, universities, governing bodies, and sovereign states are singular inanimate entities requiring the singular possessive **its**, never plural **their**.

### Correct:
> The European Central Bank adjusted **its** benchmark refinancing rate to suppress inflationary pressure.

### Incorrect:
> *The European Central Bank adjusted **their** benchmark refinancing rate...*`
    },
    {
      id: 'tb2-c21',
      title: '49. Pronouns Modifying Distributive Antecedents ("Each" and "Every")',
      fullText: `In traditional formal testing registers, antecedents modified by *each* or *every* are grammatically singular:

> Every field ethnographer must archive **his or her** audio recordings according to tribal privacy protocols.`
    },
    {
      id: 'tb2-c22',
      title: '50. Pronoun Concord with Collective Nouns',
      fullText: `When a collective entity acts in unified unison, use the singular possessive **its**:
> The parliamentary commission finalized **its** legislative recommendations on autonomous artificial intelligence.

When individual members are emphasized, pluralize the nominal subject explicitly:
> The members of the parliamentary commission submitted **their** separate dissenting memoranda.`
    },
    {
      id: 'tb2-c23',
      title: '51. Possessive "Its" vs. Contraction "It\'s"',
      fullText: `* **Its** = Singular possessive determiner (no apostrophe).
  > *The Hubble Space Telescope exceeded **its** projected operational lifespan.*
* **It\'s** = Contraction for *it is* or *it has*.
  > ***It\'s** evident that exoplanetary atmospheric characterization is accelerating.*`
    },
    {
      id: 'tb2-c24',
      title: '52. Homophone Precision: "Their", "There", and "They\'re"',
      fullText: `* **Their**: 3rd-person plural possessive (*their longitudinal trial*).
* **There**: Locational adverb / existential dummy subject (*there are three distinct hypotheses*).
* **They\'re**: Contraction of *they are* (*They\'re validating the statistical model*).`
    },
    {
      id: 'tb2-c25',
      title: '53. Syntactic Roles of "Who" (Subject) vs. "Whom" (Object)',
      fullText: `* **Who**: Subject pronoun performing finite action.
  > ***Who** orchestrated the genome sequencing initiative?* *(He orchestrated it → Who)*
* **Whom**: Object pronoun receiving action or governed by a preposition.
  > *The bioethicist to **whom** the university awarded the fellowship lectured on genomic privacy.*`
    },
    {
      id: 'tb2-c26',
      title: '54. Possessive Pronouns Never Feature Apostrophes',
      fullText: `True possessive pronouns (**mine, yours, his, hers, its, ours, theirs**) are inherently possessive and never accept apostrophes.

> The proprietary patent rights are **theirs**, not **ours**.`
    },
    {
      id: 'tb2-c27',
      title: '55. Pronoun Case Governance (Subjective vs. Objective)',
      fullText: `* **Subjective Case** (*I, he, she, we, they, who*): Occupies subject or predicate nominative slots.
* **Objective Case** (*me, him, her, us, them, whom*): Occupies direct object, indirect object, or prepositional object slots.

> **She and I** presented the macroeconomic forecast. *(Compound subject)*
> The dean awarded research grants to **her and me**. *(Compound prepositional object)*`
    },
    {
      id: 'tb2-c28',
      title: '56. The Compound Drop-Out Diagnostic for Pronoun Case',
      fullText: `When testing pronouns in compound structures (*the principal investigator and I/me*), mentally drop out the adjacent noun:

### Test Case:
> *The committee invited Dr. Thorne and [I / me] to address the symposium.*
* Drop "Dr. Thorne and": *The committee invited **me**.*
* Conclusion: Objective case **me** is mandatory.`
    },
    {
      id: 'tb2-c29',
      title: '57. Pronoun Concord Inside Relative Clauses',
      fullText: `A relative pronoun (*who, which, that*) inherits the grammatical number and person of its antecedent, governing the subsequent verb inside the relative clause.

> Climatologists **who study** polar ice cores observe cyclic isotopic oscillations.
*(Antecedent "Climatologists" is plural → relative verb "study" is plural.)*`
    },
    {
      id: 'tb2-c30',
      title: '58. Possessive "Whose" vs. Contraction "Who\'s"',
      fullText: `* **Whose**: Possessive relative/interrogative determiner for persons or things.
  > *The architect **whose** parametric design won the international competition...*
* **Who\'s**: Contraction of *who is* or *who has*.
  > ***Who\'s** leading the clinical trial?*`
    },
    {
      id: 'tb2-c31',
      title: '59. High-Frequency Agreement Patterns Synthesis',
      fullText: `Diagnostic benchmarks:
* *The number of clinical candidates* **is** *restricted.*
* *A number of clinical candidates* **are** *enrolled.*
* *Each of the crystallographic samples* **is** *pure.*
* *Neither of the econometric hypotheses* **is** *conclusive.*
* *There are three distinct methodologies* **explicated** *in the paper.*`
    },
    {
      id: 'tb2-c32',
      title: '60. The Three-Layer Grammar Verification Sequence',
      fullText: `When executing sentence evaluation:
1. **Layer 1 (Subject Isolation)**: Isolate the true nominal head noun stripped of adpositional and relative modifiers.
2. **Layer 2 (Predicate Concord & Aspect)**: Match verb number, auxiliary formation, and chronological aspect.
3. **Layer 3 (Pronoun Audit)**: Verify antecedent clarity, grammatical number concord, and correct morphological case.`
    },
    {
      id: 'tb2-c33',
      title: '61. Critical Standardized Traps from Section 2',
      fullText: `* **Trap 1**: Intervening plural modifier distorting singular auxiliary (*The suite of mass spectrometers have failed...* → *has failed*).
* **Trap 2**: Misuse of "would have" inside an if-clause (*If the team would have calibrated...* → *had calibrated*).
* **Trap 3**: Objective pronoun in subject position (*Him and the director coauthored...* → *He and the director*).
* **Trap 4**: Apostrophe in possessive "its" (*The satellite lost it's orientation...* → *its*).`
    },
    {
      id: 'tb2-c34',
      title: '62. Section 2 Checkpoint',
      fullText: `Before advancing, verify fluency in isolating complex subjects, identifying non-indicative subjunctive forms, maintaining precise chronological sequence, and resolving compound pronoun case ambiguities.`
    }
  ]
};

export const THEORY_BLOCK_3: WritingTheoryBlock = {
  blockNumber: 3,
  title: 'Complex Agreement, Compound Structures, and Tricky Subject Constructions',
  description: 'Additive Phrases (Along with, As well as), Appositives, Correlative Agreement, Quantity Phrases, Gerund/Infinitive Subjects, and Clause Subjects',
  concepts: [
    {
      id: 'tb3-c1',
      title: '63. Advanced Agreement Complexity in Scholarly Contexts',
      fullText: `Complex SAT grammar questions obscure subject–verb relations by embedding subjects in:
* Parenthetical additive phrases (*together with, accompanied by*)
* Nonrestrictive appositive phrases
* Disjunctive correlatives (*neither... nor*)
* Fractional and proportional quantity partitives
* Inverted locational clauses and nominal gerund/infinitival subjects`
    },
    {
      id: 'tb3-c2',
      title: '64. Additive Phrases: "Along With"',
      fullText: `An additive phrase beginning with **along with** functions as a quasi-parenthetical prepositional modifier. It has **no syntactic capacity** to create a compound subject.

### Exemplary Concord:
> The lead astrophysicist, along with three post-doctoral researchers, **is developing** a dark-matter halo simulation.

* True Subject: **lead astrophysicist** (singular)
* Additive Modifying Phrase: *along with three post-doctoral researchers* (non-syntactic)
* Verb: **is developing** (singular concord)`
    },
    {
      id: 'tb3-c3',
      title: '65. Additive Phrases: "Together With"',
      fullText: `The phrase **together with** similarly introduces an oblique modifier:

> The Secretary-General of the United Nations, together with envoys from thirty sovereign states, **has signed** the maritime biodiversity treaty.

* Head Noun: **Secretary-General** (singular)
* Oblique Nominal within Phrase: *envoys* (plural)
* Predicate Verb: **has signed** (singular)`
    },
    {
      id: 'tb3-c4',
      title: '66. Additive Phrases: "As Well As"',
      fullText: `Although **as well as** conveys semantic addition in everyday speech, grammatically it introduces an elliptical subordinate adjunct rather than a coordinating conjunction like *and*.

### Correct:
> The architectural conservation director, as well as the municipal preservation commissioners, **was determined** to protect the Bauhaus landmark.

### Incorrect:
> *The architectural conservation director, as well as the municipal preservation commissioners, **were determined**...*`
    },
    {
      id: 'tb3-c5',
      title: '67. Additive Phrases: "In Addition To"',
      fullText: `Syntactically identical to other additive prepositional phrases:

> The chief economic advisor, in addition to several central bank governors, **advocates** countercyclical fiscal expansion.

* Subject: **advisor** (singular)
* Verb: **advocates** (singular)`
    },
    {
      id: 'tb3-c6',
      title: '68. Prepositional Inclusions: "Including"',
      fullText: `Phrases introduced by **including** are nonessential prepositional modifiers:

> The Mesoamerican ceramic assemblage, including thirty-two polychrome vessels, **is** undergoing thermoluminescence authenticity testing.

* Subject: **assemblage** (singular)
* Prepositional Object: *vessels* (plural)
* Finite Verb: **is** (singular)`
    },
    {
      id: 'tb3-c7',
      title: '69. Appositives and Subject Integrity',
      fullText: `An **appositive** is a nominal phrase positioned adjacent to another noun to rename or describe it. It does not compound the subject.

> Dr. Aris Thorne, the chief bioethicist on the genomic safety council, **has expressed** reservations regarding germline editing.`
    },
    {
      id: 'tb3-c8',
      title: '70. Appositives Modifying Plural Subjects',
      fullText: `When the head noun is plural, an appositive—even if singular in its collective phrasing—does not diminish the plural agreement:

> The architectural engineers, the advisory team responsible for the suspension bridge retrofit, **have approved** the tension calculations.`
    },
    {
      id: 'tb3-c9',
      title: '71. Restrictive (Essential) Appositives Without Commas',
      fullText: `When an appositive provides restrictive identification essential to define which entity is meant, commas are omitted:

> The evolutionary biologist **Lynn Margulis revolutionized** modern cell biology with her endosymbiotic theory.`
    },
    {
      id: 'tb3-c10',
      title: '72. Correlative Conjunctions: "Not Only... But Also"',
      fullText: `When subjects are linked by **not only A but also B**, finite verb concord is governed strictly by **Subject B** (the closer nominal):

> Not only the regional transmission operators but also the **chief electrical engineer was** alerted to the grid frequency anomaly.`
    },
    {
      id: 'tb3-c11',
      title: '73. Correlative Conjunctions: "Both... And"',
      fullText: `The correlative pair **both A and B** creates a true compound subject that **invariably requires a plural verb**:

> Both the quantum encryption key and the underlying cryptographic protocol **are** resistant to brute-force decryption.`
    },
    {
      id: 'tb3-c12',
      title: '74–75. Correlative Disjunction: "Either... Or" & "Neither... Nor"',
      fullText: `Under the **Rule of Proximity**, when nominals of differing numbers are conjoined by *either... or* or *neither... nor*, the verb agrees in person and number with the nominal **closest to the verb**.

### Singular Closer Subject:
> Neither the field glaciologists nor the **principal climatologist has anticipated** the rapid disintegration of the ice shelf.

### Plural Closer Subject:
> Neither the principal climatologist nor the **field glaciologists have anticipated** the rapid disintegration of the ice shelf.`
    },
    {
      id: 'tb3-c13',
      title: '76. Split Structures: "Not X But Y"',
      fullText: `In antithetical **not X but Y** constructions, the affirmative nominal (Y) dictates the grammatical agreement:

> It is not the macroeconomic indicators but the **underlying supply-chain resilience that determines** long-term currency stability.`
    },
    {
      id: 'tb3-c14',
      title: '77–82. Quantity Expressions and Partitive Constructions',
      fullText: `In partitive quantity expressions (*some of, all of, most of, none of, a percentage of*), the verb agrees with the **object of the preposition *of***:

### Plural Countable Noun Object → Plural Verb:
* *Most of the fossilized vertebrae* **were** *recovered.*
* *Some of the isotopic anomalies* **reveal** *meteoric origin.*
* *All of the deep-sea autonomous sensors* **are** *operational.*

### Noncount / Mass Noun Object → Singular Verb:
* *Most of the archaeological evidence* **was** *preserved.*
* *Some of the glacial runoff* **is** *infiltrating the aquifer.*
* *All of the cryptographic equipment* **is** *shielded.*`
    },
    {
      id: 'tb3-c15',
      title: '83–85. Proportions, Fractions, and "A Majority Of"',
      fullText: `Fractions and percentages mirror partitive quantity rules:
* *Two-thirds of the planetary crust* **consists** *of silicate minerals.* (Mass noun *crust* → singular)
* *Two-thirds of the astronomical observatories* **are** *situated at high altitudes.* (Count noun *observatories* → plural)
* *A majority of the legislative quorum* **has voted** *to ratify.* (Unit acting as single body → singular)`
    },
    {
      id: 'tb3-c16',
      title: '86. "One of the" + Plural Noun Constructions',
      fullText: `In the simple structure **one of the + [plural noun]**, the true subject is the singular pronoun **one**:

> One of the most sophisticated atmospheric monitoring satellites **was** launched from French Guiana.`
    },
    {
      id: 'tb3-c17',
      title: '87–88. "One of the [Plural Noun] Who..." vs. "The Only One Who..."',
      fullText: `This critical distinction governs relative clause agreement on the SAT:

### Construction 1: "One of the [Plural Noun] who [PLURAL VERB]"
The relative pronoun *who* refers back to the plural noun:
> She is one of the volcanologists who **study** submarine magma chambers.
*(Meaning: Multiple volcanologists study submarine chambers, and she belongs to that group. "who" → volcanologists → plural verb)*

### Construction 2: "The ONLY one of the [Plural Noun] who [SINGULAR VERB]"
The relative pronoun *who* refers back to *the only one*:
> She is the only one of the volcanologists who **has descended** into the active caldera.
*(Meaning: Only a single individual has descended. "who" → the only one → singular verb)*`
    },
    {
      id: 'tb3-c18',
      title: '89–90. Gerund Phrases as Nominal Subjects',
      fullText: `A **gerund phrase** (*verb-ing + object/modifiers*) functioning as the grammatical subject represents a single unified activity and is **strictly singular**.

> Sequencing the mitochondrial genomes of extinct Pleistocene megafauna **requires** high-throughput bioinformatics infrastructure.

*(The plural noun "genomes" is merely the internal direct object of the gerund "sequencing," not the sentence subject.)*`
    },
    {
      id: 'tb3-c19',
      title: '91. Infinitival Phrases as Subjects',
      fullText: `An **infinitive phrase** (*to + base verb*) functioning as a nominal subject is always grammatically singular:

> To decipher the linear script of the Bronze Age tablets **demands** rigorous linguistic analysis.`
    },
    {
      id: 'tb3-c20',
      title: '92–94. Nominal Clauses as Subjects ("Wh-" Clauses)',
      fullText: `An entire dependent noun clause functioning as the syntactic subject takes a **singular verb**:

> [What the spectroscopic telemetry revealed about the exoplanet's atmosphere] **was** unexpected.`
    },
    {
      id: 'tb3-c21',
      title: '95–98. Relative Clauses with Embedded Partitives',
      fullText: `* *...numerous candidate vaccines, each of which* **was** *evaluated in preclinical trials.* (*each* → singular)
* *...multiple deep-space probes, some of which* **have entered** *interstellar space.* (*some* → plural)`
    },
    {
      id: 'tb3-c22',
      title: '99–100. Proper Titles of Publications and Organizations',
      fullText: `Proper titles of academic papers, literary masterworks, and organizations take **singular verbs** regardless of plural nouns inside the title:

> *Principles of Neural Science* **remains** the definitive textbook in neurobiology.
> The United States **maintains** sovereign scientific stations in Antarctica.`
    },
    {
      id: 'tb3-c23',
      title: '101–104. Mass / Noncount Nouns in Scientific Discourse',
      fullText: `Mass nouns represent non-discrete substances or abstract domains and strictly govern **singular verbs**:
> **apparatus, information, evidence, research, infrastructure, legislation, foliage**

* *The experimental apparatus* **is** *calibrated.*
* *Empirical evidence from ice-core drilling* **corroborates** *the astronomical climate model.*`
    },
    {
      id: 'tb3-c24',
      title: '105–107. Plural-Form Singulars and Paired Nouns',
      fullText: `* **Plural-Form Academic Disciplines** (*thermodynamics, macroeconomics, astrophysics, genetics*): **Singular verb**.
  > *Thermodynamics **explains** heat transfer.*
* **Paired Tools / Garments**: Plural on their own (*The calipers are accurate*), but singular when preceded by "a pair of" (*A pair of calipers **is** on the workbench*).`
    },
    {
      id: 'tb3-c25',
      title: '108–109. Compound Nominal Heads vs. Modifying Nouns',
      fullText: `In complex compound noun strings, agreement is determined solely by the final **head noun**:
> The semiconductor manufacturing **consortium is** expanding its fabrication cleanrooms.
> The semiconductor manufacturing **plants are** expanding their cleanrooms.`
    },
    {
      id: 'tb3-c26',
      title: '110–111. The Complete 6-Step Subject Diagnostic Flowchart',
      fullText: `When diagnosing agreement:
1. Strip all prepositional phrases and nonrestrictive relative clauses.
2. Check for coordinating conjunctions (*and* = plural; *or/nor* = proximity rule).
3. Check for additive expressions (*along with, as well as* = do NOT pluralize).
4. For partitive quantities (*fraction/some of*), inspect the noun after *of*.
5. Gerunds, infinitives, and noun clauses are strictly singular.
6. Inverted sentences: look to the noun *after* the verb.`
    },
    {
      id: 'tb3-c27',
      title: '116. Section 3 Checkpoint and Mastery Benchmarks',
      fullText: `Confirm complete conceptual mastery of:
* The non-pluralizing status of additive modifiers (*along with, together with*).
* Proximity concord in *neither... nor* and *not only... but also*.
* Partitive agreement shifts based on count vs. mass noun objects.
* Relative clause concord differences between *one of the... who* and *the only one of the... who*.`
    }
  ]
};

export const THEORY_BLOCK_4: WritingTheoryBlock = {
  blockNumber: 4,
  title: 'Verb Tense, Sequence, Mood, and Parallel Verb Structures',
  description: 'Timeline Relationships, Sequence of Events, Future Time Clauses, Subjunctive Mood, Mandative Subjunctive, and Parallel Verb Structures',
  concepts: [
    {
      id: 'tb4-c1',
      title: '117. The Dual Dimensions of Verb Precision: Number and Temporal Aspect',
      fullText: `While agreement ensures numerical compatibility between agent and predicate, tense and aspect establish the exact chronological and logical relationship between actions within a discourse timeline.

> In 1915, Albert Einstein **published** the general theory of relativity, which **describes** how spacetime curvature dictates gravitational motion.
*(Historical event in simple past "published"; universal physical law in timeless simple present "describes".)*`
    },
    {
      id: 'tb4-c2',
      title: '118–121. Indicative Tense Systems (Present, Past, and Future)',
      fullText: `### Universal Present (Scientific Laws & General Truths):
> Water **exhibits** anomalous thermal expansion below four degrees Celsius.

### Definite Historical Past:
> British archaeologist Howard Carter **unearthed** the tomb of Tutankhamun in 1922.

### Predictive Future:
> The James Webb Space Telescope **will conduct** spectroscopic deep-field surveys throughout the next solar cycle.`
    },
    {
      id: 'tb4-c3',
      title: '122–125. Present Perfect Aspect vs. Definite Past',
      fullText: `* **Present Perfect** (*has/have + past participle*): Denotes unexpired time or enduring empirical significance extending to the present.
  > *Paleontologists **have recovered** over fifty articulated theropod skeletons.*
* **Simple Past**: Required when a closed historical epoch or specific date is stipulated.
  > *Paleontologists **recovered** the holotype specimen in 1974.*`
    },
    {
      id: 'tb4-c4',
      title: '126–128. Past Perfect Aspect ("Had" + Past Participle)',
      fullText: `The **past perfect** tense is utilized exclusively when the discourse must explicitly register that one past event occurred **prior to a second past milestone**.

### Chronological Precedence Example:
> By the time maritime archaeologists located the submerged frigate, anaerobic bacteria **had deteriorated** much of the interior timber framing.
* Action 1 (Earlier Past): Deterioration of timber → **had deteriorated**
* Action 2 (Later Past): Location of frigate → **located**`
    },
    {
      id: 'tb4-c5',
      title: '129–130. Future Perfect Aspect ("Will Have" + Past Participle)',
      fullText: `The **future perfect** marks an action that will reach completion prior to a defined future deadline:

> By 2035, the international fusion collaboration **will have completed** the magnetic confinement reactor core.`
    },
    {
      id: 'tb4-c6',
      title: '131–133. Progressive Aspect and Temporal Overlap',
      fullText: `Past progressive (*was/were + -ing*) establishes an ongoing background condition intercepted by a discrete simple past action:

> While the particle physicists **were calibrating** the synchrotron beamline, a cooling system malfunction **triggered** an automatic shutdown.`
    },
    {
      id: 'tb4-c7',
      title: '134–136. Future Time Subordination (The Prohibition of "Will" in Temporal Clauses)',
      fullText: `In dependent time clauses introduced by *when, once, before, after, as soon as, until*, standard formal English **forbids the modal auxiliary "will"**. The subordinate clause must employ the **simple present** to denote future time.

### Correct:
> Once the autonomous deep-sea submersible **surfaces**, technicians **will retrieve** its acoustic sensor logs.

### Incorrect:
> *Once the autonomous deep-sea submersible **will surface**, technicians will retrieve its acoustic sensor logs.*`
    },
    {
      id: 'tb4-c8',
      title: '137–141. Conditional Tense Harmonies',
      fullText: `Standard academic conditionals:

| Conditional Type | Protasis (If-Clause) | Apodosis (Main Clause) | Example |
| :--- | :--- | :--- | :--- |
| **First (Predictive)** | Present Indicative | *will* + Base Verb | *If ocean acidification **accelerates**, coral calcification **will decline**.* |
| **Second (Hypothetical)** | Subjunctive *were* / Past | *would* + Base Verb | *If the exoplanet **possessed** a magnetic shield, it **would retain** an atmosphere.* |
| **Third (Counterfactual Past)** | Past Perfect (*had* + Participle) | *would have* + Participle | *If engineers **had reinforced** the levees, the surge **would have caused** less damage.* |`
    },
    {
      id: 'tb4-c9',
      title: '142–145. The Mandative Subjunctive Mood',
      fullText: `Following verbs and adjectives of urging, demand, requirement, or recommendation governing a *that*-clause:
> **demand that, insist that, require that, recommend that, propose that, it is essential that**

The subordinate verb MUST take the invariant **bare base form** (without *-s*, *-ed*, or auxiliary *should*):

### Examples:
> The bioethics protocol requires that every clinical trial investigator **disclose** proprietary financial conflicts. *(NOT "discloses")*
> The chief conservator insisted that the Renaissance fresco **remain** in a humidity-controlled chamber. *(NOT "remains" or "remained")*
> The institutional board recommended that the laboratory **be** inspected biannually. *(NOT "is" or "was")*`
    },
    {
      id: 'tb4-c10',
      title: '146–150. Parallel Verb Structures in Coordinate Series',
      fullText: `When multiple verbs are joined in a coordinate series by *and*, *or*, or *but*, their morphological structures must remain strictly parallel:

> The expedition team **surveyed** the volcanic caldera, **collected** hydrothermal mineral samples, and **mapped** the subsurface fissures.`
    },
    {
      id: 'tb4-c11',
      title: '151–154. Compound Predicates vs. Compound Sentences',
      fullText: `A **compound predicate** consists of two or more finite verbs governed by a single, unrepeated grammatical subject. Do not insert a comma before the coordinating conjunction in a simple compound predicate:

### Correct:
> The oceanographic research vessel **navigated** the Antarctic convergence zone and **deployed** three autonomous gliders.
*(Subject "vessel" governs both verbs; no comma before "and".)*`
    },
    {
      id: 'tb4-c12',
      title: '155–158. Introductory Participial Modifiers and Logical Actor Alignment',
      fullText: `An introductory participial phrase (*Having analyzed..., Excavating...*) obligatorily modifies the **grammatical subject situated immediately after the comma**.

### Correct Alignment:
> Having synthesized the macroeconomic data from the central bank, the **economists revised** their inflation projections.

### Dangling Modifier Defect:
> *Having synthesized the macroeconomic data from the central bank, the **inflation projections were revised**.*
*(Illogical: Inflation projections cannot synthesize data.)*`
    },
    {
      id: 'tb4-c13',
      title: '159–160. Section 4 Summary and Master Checkpoint',
      fullText: `Key takeaways:
1. Preserve temporal logic and avoid arbitrary tense shifts.
2. In future time clauses (*when, once, before*), use the present tense.
3. In mandative subjunctive constructions (*require that*), employ the uninflected bare verb.
4. Align introductory participial modifiers strictly with their logical human or agentive subjects.`
    }
  ]
};
