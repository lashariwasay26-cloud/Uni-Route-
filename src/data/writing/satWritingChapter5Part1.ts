import { WritingTheoryBlock } from './satWritingTypes';

export const THEORY_BLOCK_1: WritingTheoryBlock = {
  blockNumber: 1,
  title: 'Concision: Removing Unnecessary Words Without Losing Meaning',
  description: 'Rigorous Economy of Language → Pruning Redundancy → Nominalization Conversion → Preserving Semantic Scope → Cut-and-Test Protocol',
  concepts: [
    {
      id: 'ch5-b1-c1',
      title: '1. CORE CONCEPT: RHETORICAL AND SYNTACTIC CONCISION',
      fullText: `**Concision** is the art of maximizing semantic density—delivering complete, nuanced, and precise information using the fewest syntactic tokens necessary without eroding clarity, formal register, or vital qualifying conditions.

In the digital SAT and high-register prose (*The New York Times*, *Nature*, *The Economist*), concision is **never** a crude exercise in brevity. True concision is architectural: it removes structural deadwood while preserving every substantive nuance.

### The Governing Axiom
> **Efficiency = (Essential Information + Necessary Nuance) ÷ Syntactic Simplicity**

Compare the following iterations from an environmental economics treatise:

* **Bloated & Flaccid:**
  > *Due to the fact that international regulatory bodies failed to reach a consensus, the treaty was rendered completely null and void in its entirety.* (23 words)
* **Economical & Muscular:**
  > *Because international regulatory bodies failed to reach a consensus, the treaty was voided.* (12 words)

The second sentence excises the wordy subordinate connector (*due to the fact that* → *because*), eliminates pleonastic modifiers (*completely null and void in its entirety* → *voided*), and sharpens verbal force while retaining the precise legal and political reality.`
    },
    {
      id: 'ch5-b1-c2',
      title: '2. THE "SHORTER IS NOT ALWAYS BETTER" TRAP',
      fullText: `A pervasive trap on the digital SAT is assuming that the shortest answer choice is automatically correct. Test makers exploit this heuristic by offering truncated choices that strip away essential restrictive modifiers, vital tonal qualifiers, or necessary logical transitions.

### Preserving Meaning vs. Reckless Truncation
Consider an epidemiological study assessing vaccine efficacy:

* **Original Rich Sentence:**
  > *Epidemiologists observed that while the booster markedly attenuated acute symptoms in immunocompromised patients, it did not entirely arrest asymptomatic viral transmission.*
* **Reckless Truncation (Over-Edited Failure):**
  > *Epidemiologists observed that the booster stopped viral transmission.* (Distorts findings into an absolute falsehood by eliminating critical modal qualifiers.)
* **Concise Yet Nuanced (Optimal):**
  > *Epidemiologists observed that the booster mitigated acute symptoms in immunocompromised patients without fully halting asymptomatic transmission.*

### The Three Inviolable Constraints of Concision
1. **Semantic Fidelity:** Does the compressed phrasing preserve the exact scope, frequency, and conditionality of the original claim?
2. **Grammatical Completeness:** Does the excision create an orphan fragment, a dangling participial modifier, or an ungrammatical ellipsis?
3. **Register & Nuance:** Does the revision retain the elevated, analytical tone expected in academic and journalistic prose?`
    },
    {
      id: 'ch5-b1-c3',
      title: '3. TAXONOMY OF REDUNDANCY & PLEONASTIC PATTERNS',
      fullText: `Redundancy occurs when a semantic concept is repeated through synonyms, self-defining modifiers, or tautological collocations.

| Redundant Phrasing | Flaw / Semantic Duplication | Concise Academic Revision |
| :--- | :--- | :--- |
| *collaborate together in joint partnership* | *Collaborate* already entails working together jointly. | *collaborate* |
| *prior historical precedent* | A *precedent* is by definition historical and prior. | *precedent* |
| *revert back to previous habits* | The prefix *re-* in *revert* already denotes backward motion. | *revert to previous habits* |
| *essential fundamental requirement* | A *requirement* in this context is intrinsically essential. | *essential requirement* or *fundamental* |
| *eradicate completely from existence* | *Eradicate* (from Latin *radix*, root) denotes complete uprooting. | *eradicate* |
| *consensus of opinion* | A *consensus* is an agreement of opinion. | *consensus* |
| *bifurcated into two separate branches* | *Bifurcate* literally means splitting into two branches. | *bifurcated* |

### Analytical Detection Rule
Whenever you encounter an adjective-noun or adverb-verb pairing, test whether the modifier's definition is already implicit within the root term:
$$\\text{If } \\text{Definition}(\\text{Modifier}) \\subseteq \\text{Definition}(\\text{Root}), \\implies \\text{Excise Modifier}.$$`
    },
    {
      id: 'ch5-b1-c4',
      title: '4. PRUNING PERIPHRASIS & WORDY CONNECTORS',
      fullText: `**Periphrasis** (circumlocution) uses roundabout phrases where a single crisp preposition or conjunction conveys the exact semantic relation.

### High-Frequency Substitutions

* **Causal Relationships:**
  * *due to the fact that* / *owing to the circumstance that* / *on the grounds that* $\\rightarrow$ **because**, **since**, **as**
  * *for the reason that* $\\rightarrow$ **because**
* **Temporal Relationships:**
  * *during the period of time when* $\\rightarrow$ **while**, **when**
  * *prior to the time that* $\\rightarrow$ **before**
  * *subsequent to the event of* $\\rightarrow$ **after**
* **Conditional Relationships:**
  * *under circumstances in which* / *in the event that* $\\rightarrow$ **if**, **should**
  * *with the provision that* $\\rightarrow$ **provided that**, **if**
* **Purpose & Telos:**
  * *with a view toward achieving* / *for the express purpose of* $\\rightarrow$ **to**, **in order to**

> **Expert Caveat on "In Order To":** Standard test dogma often brands "in order to" as an automatic error. In reality, "in order to" is grammatically sound and rhetorically vital when distinguishing an intentional purpose from a result clause, or when clarifying a complex infinitive string. Excise "in order" only when the isolated infinitive ("to") creates zero ambiguity.`
    },
    {
      id: 'ch5-b1-c5',
      title: '5. UNPACKING NOMINALIZATION & THE CUT-AND-TEST PROTOCOL',
      fullText: `**Nominalization** is the transformation of vivid verbs and adjectives into static abstract nouns. It bloats sentences by forcing the introduction of weak auxiliary verbs (*conduct*, *make*, *perform*, *effectuate*) and superfluous prepositions (*of*, *in*, *with respect to*).

### Transforming Nominalizations
* *Sluggish:* The macroeconomic committee **conducted an investigation into the causes of** inflation.
* *Muscular:* The macroeconomic committee **investigated** inflation.
* *Sluggish:* The archivist **effectuated the digitization of** the parchment collection.
* *Muscular:* The archivist **digitized** the parchment collection.
* *Sluggish:* The treaty **served as a source of protection for** migratory bird corridors.
* *Muscular:* The treaty **protected** migratory bird corridors.

### The 5-Step Cut-and-Test Protocol
1. **Locate the Primary Semantic Core:** Identify the actual agent and the real action.
2. **Identify Auxiliary Deadwood:** Circle dummy verbs (*perform an assessment*, *make an assumption*), filler prepositions (*in terms of*, *with regard to*), and redundant modifiers.
3. **Execute the Surgical Strike:** Strike out the candidate phrase and fuse the underlying verb into the subject.
4. **Audit Structural Integrity:** Verify that the remaining clause possesses a valid subject, a finite conjugated verb, and unambiguous modifier attachments.
5. **Verify Semantic Scope:** Ensure no crucial caveat, quantitative threshold, or logical relation was accidentally deleted.`
    }
  ]
};

export const THEORY_BLOCK_2: WritingTheoryBlock = {
  blockNumber: 2,
  title: 'Precision: Choosing the Exact Word and Preserving the Exact Meaning',
  description: 'Diction Mastery → Nuanced Near-Synonyms → Register Consistency → Modality & Epistemic Stance',
  concepts: [
    {
      id: 'ch5-b2-c1',
      title: '1. CORE CONCEPT: RHETORICAL & LEXICAL PRECISION',
      fullText: `**Precision** is the semantic congruence between a writer’s analytical intention and their chosen vocabulary. While concision governs economy, precision governs accuracy, nuance, and contextual appropriateness.

In advanced prose, words rarely function as interchangeable tokens. Two words may share a broad dictionary definition but diverge sharply in connotation, technical domain, transitivity, and epistemic strength.

### Contextual Precision Illustrated
Consider an astrophysical report detailing observations from the James Webb Space Telescope:

* **Imprecise & Colloquial:**
  > *Astronomers found that the distant nebula had unusual stuff in its atmosphere.*
* **Excessively Vague:**
  > *Astronomers observed that the distant nebula exhibited unique aspects in its chemical profile.*
* **Rigorous & Exact:**
  > *Astronomers detected anomalous spectroscopic signatures of methane and carbon dioxide in the exoplanet's atmosphere.*

The third version specifies the method (*detected spectroscopic signatures*), the precise chemicals (*methane and carbon dioxide*), and the astrophysical entity (*exoplanet*), replacing colloquial vagueness with peer-reviewed clarity.`
    },
    {
      id: 'ch5-b2-c2',
      title: '2. THE HIERARCHY OF EDITORIAL PRIORITIES',
      fullText: `When revising sentences under high-stakes conditions, always evaluate candidate choices through the **Hierarchy of Editorial Priorities**:

$$\\text{Accuracy} \\succ \\text{Semantic Specificity} \\succ \\text{Tone & Register} \\succ \\text{Brevity}$$

1. **Accuracy (Non-Negotiable):** The word must truthfully represent the factual, chronological, and logical relationships in the passage.
2. **Semantic Specificity:** The word must narrow ambiguity (e.g., *fluctuated erratically* rather than *changed*).
3. **Tone & Register:** The word must match standard written English in serious academic, historical, or scientific discourse (avoiding slang, hyperbole, or archaic jargon).
4. **Brevity:** Among options that meet criteria 1–3, the most concise phrasing is preferred.`
    },
    {
      id: 'ch5-b2-c3',
      title: '3. HIGH-FREQUENCY NEAR-SYNONYMS & DICTION CONFUSABLES',
      fullText: `The digital SAT routinely tests subtle differences between near-synonyms that trap uncritical readers.

### Critical Diction Distinctions

* **Affect vs. Effect:**
  * *Affect* (Verb): to influence or alter (*Rising interest rates affect capital investment*).
  * *Effect* (Noun): an outcome or result (*The regulatory changes had an immediate effect*).
  * *Effect* (Verb - Advanced): to bring about or execute (*The diplomat sought to effect a lasting ceasefire*).
* **Imply vs. Infer:**
  * *Imply*: The speaker or text hints or conveys indirectly (*The data imply a latent correlation*).
  * *Infer*: The reader or observer deduces a conclusion from evidence (*Economists inferred that consumer confidence had rebounded*).
* **Adapt vs. Adopt:**
  * *Adapt*: To adjust or modify to fit new circumstances (*Organisms adapt to alpine ecosystems*).
  * *Adopt*: To take up, accept, or implement formally (*The municipality adopted a zero-emissions mandate*).
* **Eminent vs. Imminent:**
  * *Eminent*: Prominent, distinguished, or renowned (*an eminent jurist*).
  * *Imminent*: About to happen; impending (*an imminent ecological tipping point*).
* **Complement vs. Compliment:**
  * *Complement*: To complete or enhance symmetrically (*The violinist's countermelody complemented the cello*).
  * *Compliment*: To praise or flatter (*The reviewer complimented the director's restraint*).`
    },
    {
      id: 'ch5-b2-c4',
      title: '4. CALIBRATING MODALITY & EPISTEMIC STANCE',
      fullText: `Scientific and historical scholarship demands rigorous calibration of **epistemic modality**—the linguistic expression of certainty, probability, and empirical boundaries.

### The Modal Spectrum

| Strength | Modal Verbs & Adverbs | Contextual Application | Illustrative Sentence |
| :--- | :--- | :--- | :--- |
| **Absolute / Categorical** | *demonstrates, establishes, proves, undeniably* | Deductive proofs, axiomatic laws, universal mathematical truths. | *The mathematical proof establishes the validity of the theorem.* |
| **Probable / High Confidence** | *indicates, suggests, strongly points to, likely* | Replicated empirical studies with high statistical significance ($p < 0.01$). | *The isotopic data indicate that the crater resulted from a bolide impact.* |
| **Tentative / Plausible** | *may, could, posited, hypothesized, potentially* | Preliminary hypotheses, limited sample sizes, emerging theories. | *Paleontologists hypothesize that plumage may have initially served for thermoregulation.* |
| **Speculative / Discredited** | *supposedly, arguably, purports to* | Contested claims, dubious methodologies, or unverified reports. | *The document purports to chronicle the lost expedition.*

> **Strategic Rule:** Never select an answer choice that escalates a tentative hypothesis (*suggests a potential mechanism*) into an absolute dogma (*conclusively proves the mechanism*), unless the passage explicitly provides incontrovertible proof.`
    },
    {
      id: 'ch5-b2-c5',
      title: '5. THE EXACT-MEANING VERIFICATION TEST',
      fullText: `Before committing to a vocabulary revision in a complex passage, execute the **Three-Prong Precision Audit**:

1. **Collocational Naturalness:** Does this word idiomatically collocate with its dependent prepositions? (*abide by*, *adhere to*, *correlated with*, *contingent upon*).
2. **Transitivity & Syntax:** Does the verb require a direct object (*raise the tariffs*), or is it intransitive (*interest rates rise*)?
3. **Semantic Inversion Check:** Does substituting this word invert the positive/negative valency or cause/effect sequence of the sentence?`
    }
  ]
};

export const THEORY_BLOCK_3: WritingTheoryBlock = {
  blockNumber: 3,
  title: 'Modifier Placement: Making Every Description Attach to the Correct Idea',
  description: 'Syntactic Attachment Principles → Dangling Modifiers → Misplaced Adverbial Scope → Ambiguous Participial Appositives',
  concepts: [
    {
      id: 'ch5-b3-c1',
      title: '1. THE FUNDAMENTAL LAW OF MODIFIER PROXIMITY',
      fullText: `In standard written English, modifiers must be positioned so that their syntactic anchor—the exact noun, pronoun, or clause they describe—is immediately unmistakable.

### The Spatial Proximity Principle
> **A descriptive modifier must sit as close as grammatically possible to the specific noun phrase it logically qualifies.**

When modifiers drift away from their intended targets, they generate two catastrophic structural defects:
1. **Misplaced Modifiers:** The modifier attaches to an unintended, absurd grammatical neighbor.
2. **Dangling Modifiers:** The noun the modifier logically describes is completely absent from the main clause.`
    },
    {
      id: 'ch5-b3-c2',
      title: '2. DISSECTING DANGLING MODIFIERS',
      fullText: `An introductory participial phrase (*Entering the archives...*), prepositional gerund phrase (*Upon excavating the tomb...*), or elliptical clause (*While studying the manuscript...*) functions as a dependent modifier whose implied subject **MUST** be the explicit grammatical subject of the following independent clause.

### Dissecting the Structural Failure

* **Dangling Modifier (Fatal Error):**
  > *After sequencing the Neanderthal genome, the evolutionary timeline was radically revised by geneticists.*
  * *Syntactic Subject of Main Clause:* **the evolutionary timeline**
  * *Illogical Literal Reading:* The timeline itself sequenced the genome.
* **Repaired via Active Subject Attachment:**
  > *After sequencing the Neanderthal genome, geneticists radically revised the evolutionary timeline.*
  * *Syntactic Subject:* **geneticists** (the biological agents who actually performed the sequencing).
* **Repaired via Subordinate Clause Expansion:**
  > *After geneticists sequenced the Neanderthal genome, the evolutionary timeline was radically revised.*
  * By furnishing the introductory clause with its own conjugated subject and verb (*geneticists sequenced*), the modifier is no longer dangling.`
    },
    {
      id: 'ch5-b3-c3',
      title: '3. PAST-PARTICIPIAL & ADJECTIVAL APPOSITIVES',
      fullText: `Introductory modifiers beginning with past participles (*-ed*, *-en*, *-t*) or pure adjective clusters describe the state or condition of the succeeding subject.

### Examples in Elevated Prose

* **Flawed (Illogical Subject):**
  > *Acclaimed for its pioneering acoustic architecture, the symphony was performed by the orchestra in the new concert hall.*
  * *Did the symphony possess acoustic architecture?* No; the *concert hall* did.
* **Flawless Realignment:**
  > *Acclaimed for its pioneering acoustic architecture, the new concert hall hosted the orchestra’s performance of the symphony.*

* **Flawed:**
  > *Disillusioned by parliamentary gridlock, the cabinet minister's resignation stunned political observers.*
  * *Was the resignation disillusioned?* No; the *minister* was.
* **Flawless Realignment:**
  > *Disillusioned by parliamentary gridlock, the cabinet minister stunned political observers by resigning.*`
    },
    {
      id: 'ch5-b3-c4',
      title: '4. LIMITING ADVERBS & SCOPE AMBIGUITY',
      fullText: `Limiting adverbs (*only, merely, scarcely, just, nearly, almost*) modify the word or phrase that directly succeeds them. Shifting the position of *only* completely transforms the truth-conditions of a proposition.

### The Dynamic Scope of "Only"

* *Only the archivist authenticated the Renaissance charter.*
  $\\rightarrow$ **Exclusivity of Agent:** No other scholar authenticated it.
* *The archivist only authenticated the Renaissance charter.*
  $\\rightarrow$ **Exclusivity of Action:** The archivist performed no other analysis (did not transcribe, translate, or restore it).
* *The archivist authenticated only the Renaissance charter.*
  $\\rightarrow$ **Exclusivity of Object:** Among dozens of historic manuscripts, the charter was the sole item verified.

### Squinting Modifiers
A **squinting modifier** sits between two sentence elements such that it could logically modify either the preceding or following word:
* *Ambiguous:* Scholars who study ancient texts *regularly* uncover anomalous dialects.
  *(Do they study regularly, or do they regularly uncover?)*
* *Disambiguated A:* Scholars who *regularly study* ancient texts uncover anomalous dialects.
* *Disambiguated B:* Scholars who study ancient texts uncover anomalous dialects *on a regular basis*.`
    },
    {
      id: 'ch5-b3-c5',
      title: '5. THE SYNTACTIC VECTOR (ATTACHMENT ARROW) PROTOCOL',
      fullText: `When diagnosing complex modifier questions on the digital SAT:

1. **Isolate the Introductory Modifying Phrase:** Bracket everything from the opening word to the comma separating it from the main clause.
2. **Extract the Implied Actor/Subject:** Ask yourself: *Who or what is performing this action or embodying this state?*
3. **Inspect the Immediate Anchor:** Circle the noun phrase sitting directly after the comma.
4. **Evaluate Congruence:** Does the noun directly after the comma equal the implied actor identified in Step 2?
   * If **YES** $\\rightarrow$ The modifier is validly attached.
   * If **NO** $\\rightarrow$ The construction is a dangling modifier. Immediately eliminate every answer choice that fails to position the logical actor in the primary subject slot.`
    }
  ]
};

export const THEORY_BLOCK_4: WritingTheoryBlock = {
  blockNumber: 4,
  title: 'Combining Ideas Efficiently: Coordination, Subordination, and Sentence Boundaries',
  description: 'Independent Clause Linkage → FANBOYS & Semicolon Logic → Subordination Hierarchies → Boundary Defect Remediation',
  concepts: [
    {
      id: 'ch5-b4-c1',
      title: '1. CLAUSE ARCHITECTURE & SENTENCE BOUNDARIES',
      fullText: `Every sophisticated sentence is an intentional assembly of **independent clauses** (structures containing an explicit subject and finite verb that can stand alone as complete thoughts) and **dependent clauses** (clauses introduced by subordinators that function as nouns, adjectives, or adverbs).

### The Four Permissible Methods for Joining Independent Clauses

When combining two independent clauses ($IC_1$ and $IC_2$), standard English recognizes exactly four structural frameworks:

1. **Period / Full Stop:** $IC_1$. $IC_2$.
   > *The Federal Reserve increased benchmark interest rates. Commercial lenders tightened mortgage underwriting standards.*
2. **Semicolon:** $IC_1$; $IC_2$.
   > *The Federal Reserve increased benchmark interest rates; commercial lenders tightened mortgage underwriting standards.*
3. **Comma + Coordinating Conjunction (FANBOYS):** $IC_1$, [for / and / nor / but / or / yet / so] $IC_2$.
   > *The Federal Reserve increased benchmark interest rates, so commercial lenders tightened mortgage underwriting standards.*
4. **Colon or Em Dash (Equative / Elaborative):** $IC_1$: $IC_2$ or $IC_1$—$IC_2$.
   > *The Federal Reserve took decisive action: it increased benchmark interest rates to curb inflation.*`
    },
    {
      id: 'ch5-b4-c2',
      title: '2. COMMA SPLICES, RUN-ONS & CONJUNCTIVE ADVERB TRAPS',
      fullText: `### The Comma Splice ($IC_1$, $IC_2$)
A **comma splice** occurs when two independent clauses are joined with a lone comma without a coordinating conjunction.
* *Fatal Error:* The excavation unearthed Bronze Age ceramics, the artifacts were transported to the museum.
* *Correction:* The excavation unearthed Bronze Age ceramics; the artifacts were transported to the museum.

### The Conjunctive Adverb Ambush
Words like *however, therefore, furthermore, nevertheless, consequently, moreover,* and *meanwhile* are **conjunctive adverbs**, not coordinating conjunctions. They **CANNOT** join two independent clauses with a simple comma.

* *Fatal Error (Splice):* The sample size was statistically limited, **however** the clinical trial yielded promising outcomes.
* *Standard Semicolon Fix:* The sample size was statistically limited**; however,** the clinical trial yielded promising outcomes.
* *Subordination Fix:* **Although** the sample size was statistically limited, the clinical trial yielded promising outcomes.`
    },
    {
      id: 'ch5-b4-c3',
      title: '3. RHETORICAL SUBORDINATION & INFORMATION HIERARCHY',
      fullText: `Coordination assigns equal syntactic and rhetorical weight to two propositions. Subordination establishes a clear cognitive hierarchy, designating one idea as the primary claim (independent clause) and the other as context, cause, condition, or concession (dependent clause).

### Subordinating Strategies in Scholarly Prose

* **Concession / Contrast (*although, whereas, while, despite the fact that*):**
  > *Whereas 19th-century historians viewed the Industrial Revolution primarily through the lens of mechanical invention, contemporary scholars emphasize the geopolitical flows of raw commodities.*
  *(Primary focus is on contemporary scholarship; 19th-century views serve as the contrasting backdrop).*
* **Causation (*because, since, inasmuch as*):**
  > *Because the lithium-ion matrix degrades rapidly under thermal stress, aerospace engineers developed liquid-cooling heat sinks.*
* **Condition (*provided that, unless, assuming that*):**
  > *Unless sovereign nations enforce maritime emission caps, atmospheric sulfur concentrations will continue to escalate.*`
    },
    {
      id: 'ch5-b4-c4',
      title: '4. COMPOUND PREDICATES VS. COMPOUND CLAUSES',
      fullText: `A frequent source of punctuation error is inserting an unauthorized comma into a **compound predicate** (a single subject governing two coordinated verbs).

### Structural Comparison

* **Compound Sentence (Two Subjects + Two Verbs $\\implies$ Requires Comma + FANBOYS):**
  > $\\text{[The marine biologist tagged the apex predator]}_{IC_1}$, **and** $\\text{[she recorded its migratory coordinates]}_{IC_2}$.
* **Compound Predicate (One Subject + Two Verbs $\\implies$ No Comma Before Conjunction):**
  > $\\text{[The marine biologist]}_{S} \\text{ } \\text{[tagged the apex predator]}_{V_1} \\text{ } \\textbf{and} \\text{ } \\text{[recorded its migratory coordinates]}_{V_2}$.
  *(Inserting a comma before "and" splits the predicate and introduces an ungrammatical boundary).*

> **Rule of Thumb:** If the words following the coordinating conjunction do not contain their own independent subject, do not insert a comma before the conjunction.`
    },
    {
      id: 'ch5-b4-c5',
      title: '5. THE CLAUSE BOUNDARY DECISION MATRIX',
      fullText: `When resolving complex sentence combining items on the SAT:

\`\`\`
[Start Analysis]
       │
       ▼
Isolate Clause 1 & Clause 2
       │
       ├── Clause 2 has independent Subject + Finite Verb?
       │      │
       │      ├── YES: Joining two Independent Clauses
       │      │     ├── Need Contrast? ──► Semicolon + however / Comma + but
       │      │     ├── Need Causation? ─► Subordinate with "Because" / Comma + so
       │      │     └── Need Equivalence? ► Semicolon / Period / Colon
       │      │
       │      └── NO: Compound Predicate or Modifying Phrase
       │            ├── If Compound Predicate: [Verb 1] and [Verb 2] (NO COMMA)
       │            └── If Participial Phrase: [Main Clause], [Verb-ing phrase]
\`\`\`

*Final Review Check:* Ensure the chosen combination avoids both structural fragmentations and semantic distortions.`
    }
  ]
};

export const THEORY_BLOCK_5: WritingTheoryBlock = {
  blockNumber: 5,
  title: 'Parallel Structure: Making Equivalent Ideas Grammatically Equivalent',
  description: 'Symmetrical Syntax → Lists & Series → Correlative Conjunction Pairs → Parallel Comparisons & Ellipses',
  concepts: [
    {
      id: 'ch5-b5-c1',
      title: '1. THE PRINCIPLE OF SYNTACTIC SYMMETRY',
      fullText: `**Parallel structure** (parallelism) requires that two or more elements fulfilling identical grammatical functions within a sentence share identical morphological and syntactic forms.

Parallelism provides rhythm, balance, and cognitive clarity. In dense expository writing (*The Atlantic*, *Science*), broken parallelism introduces mental friction by forcing the reader to parse mismatched grammatical categories.

### Symmetry Across Grammatical Classes

* **Infinitives:** To synthesize data, **to formulate** hypotheses, and **to publish** findings. *(Or: To synthesize data, formulate hypotheses, and publish findings).*
* **Gerunds:** Synthesiz**ing** data, formulat**ing** hypotheses, and publish**ing** findings.
* **Complex Nominal Phrases:** *The rapid depletion of aquifers*, *the contamination of topsoil*, and *the loss of endemic biodiversity*.
* **Finite Clause Strings:** *That the climate is warming*, *that glaciers are receding*, and *that sea levels are rising*.`
    },
    {
      id: 'ch5-b5-c2',
      title: '2. PARALLELISM IN COMPLEX LISTS & SERIES',
      fullText: `In a series of three or more elements connected by coordinating conjunctions (*A, B, and C*), every member of the series must adhere to the governing grammatical template.

### Diagnosing Asymmetric Series

* **Asymmetric Failure:**
  > *The urban renewal initiative aimed at revitalizing historic facades, the expansion of green spaces, and to improve public transit access.*
  * Item 1: Gerund phrase (*revitalizing historic facades*)
  * Item 2: Noun phrase (*the expansion of green spaces*)
  * Item 3: Infinitive phrase (*to improve public transit access*)
* **Symmetrical Restoration (Gerund Pattern):**
  > *The urban renewal initiative aimed at **revitalizing** historic facades, **expanding** green spaces, and **improving** public transit access.*
* **Symmetrical Restoration (Nominal Pattern):**
  > *The urban renewal initiative aimed at the **revitalization** of historic facades, the **expansion** of green spaces, and the **improvement** of public transit access.*`
    },
    {
      id: 'ch5-b5-c3',
      title: '3. CORRELATIVE CONJUNCTION ARCHITECTURE',
      fullText: `**Correlative conjunctions** operate in paired, interlocking frameworks that demand rigid bilateral symmetry:

* **not only** $[X]$ **but also** $[Y]$
* **either** $[X]$ **or** $[Y]$
* **neither** $[X]$ **nor** $[Y]$
* **both** $[X]$ **and** $[Y]$
* **whether** $[X]$ **or** $[Y]$

### The Balance Beam Rule
Whatever grammatical unit immediately succeeds the first element of the pair must immediately succeed the second element of the pair.

* **Misaligned Correlative (Fatal Error):**
  > *The macroeconomic policy **not only stimulated** consumer spending **but also** capital investment.*
  * *After "not only":* Verb + Object phrase (*stimulated consumer spending*)
  * *After "but also":* Noun phrase (*capital investment*)
* **Balanced Realignment (Post-Verb Positioning):**
  > *The macroeconomic policy stimulated **not only consumer spending but also capital investment**.*
  *(Both sides now govern balanced direct objects).*
* **Balanced Realignment (Pre-Verb Positioning):**
  > *The macroeconomic policy **not only stimulated** consumer spending **but also encouraged** capital investment.*
  *(Both sides now govern balanced verb phrases).*`
    },
    {
      id: 'ch5-b5-c4',
      title: '4. PARALLELISM IN COMPARISONS & "RATHER THAN"',
      fullText: `When sentences establish comparisons using *than, as...as, prefer...to,* or *rather than*, the items being compared must be grammatically congruent.

### Structural Symmetry in Comparative Contexts

* **Mismatched Comparative:**
  > *The architectural firm preferred designing energy-efficient skyscrapers to the construction of conventional suburban complexes.*
  * *Element A:* Gerund phrase (*designing energy-efficient skyscrapers*)
  * *Element B:* Noun phrase (*the construction of conventional suburban complexes*)
* **Parallel Comparative:**
  > *The architectural firm preferred **designing energy-efficient skyscrapers** to **constructing conventional suburban complexes**.*

* **Mismatched "Rather Than":**
  > *The monetary committee opted to raise reserve ratios rather than risking runaway currency depreciation.*
* **Parallel "Rather Than":**
  > *The monetary committee opted to **raise** reserve ratios rather than **risk** runaway currency depreciation.*`
    },
    {
      id: 'ch5-b5-c5',
      title: '5. THE SYMMETRY SCANNING PROTOCOL',
      fullText: `When encountering questions testing parallel structure or correlative pairings:

1. **Locate the Conjunction Pivot:** Identify coordinates (*and, but, or*) or correlatives (*not only... but also*, *both... and*).
2. **Isolate Component Boundaries:** Define the exact start and end of Element $X$ and Element $Y$ (and Element $Z$ if a series).
3. **Tag Grammatical Categories:**
   * Is Element $X$ a noun, adjective, infinitive (*to do*), gerund (*doing*), past participle, or prepositional phrase?
4. **Enforce Uniformity:** Ensure Element $Y$ mirrors the exact categorical tag of Element $X$.
5. **Verify Head Word / Preposition Repeatability:** Check whether governing prepositions or articles (*to*, *in*, *the*) are uniformly distributed across all terms or cleanly stated once before the entire series.`
    }
  ]
};
