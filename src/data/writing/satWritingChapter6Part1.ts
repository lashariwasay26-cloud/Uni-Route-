import { WritingTheoryBlock } from './satWritingTypes';

export const THEORY_BLOCK_1: WritingTheoryBlock = {
  blockNumber: 1,
  title: 'Transition Logic: Core Principles, Transition Families & Strategy',
  description: 'What Transitions Do → Four Core Families → Removal Test → Contrast Strengths → Cause/Effect Direction → Three-Question Method',
  concepts: [
    {
      id: 'ch6-b1-c1',
      title: '1. What a Transition Actually Does',
      fullText: `A transition is not an ornamental rhetorical flourish designed merely to sound eloquent.
Its fundamental syntactic and rhetorical function is to **formalize the exact logical relation between the antecedent proposition and the subsequent proposition**.

When approaching Digital SAT transition items, the primary diagnostic imperative is:
> **What precise semantic relationship governs the connection between Sentence A and Sentence B?**

Only after isolating this underlying architecture should you evaluate candidate discourse markers.

Consider this diagnostic pair:
> *The Federal Reserve enacted quantitative tightening to quell accelerating inflation. ___, commercial lending yields surged to two-decade highs.*

The second independent clause delineates the **direct macroeconomic consequence** of the monetary policy intervention in the first.
A transition expressing logical outcome or causal result is structurally mandatory:
> *The Federal Reserve enacted quantitative tightening to quell accelerating inflation. **Consequently,** commercial lending yields surged to two-decade highs.*

The core testing objective is not the rote cataloging of lexical items like *consequently*, but the swift identification of underlying causal vectors:
> **antecedent catalyst → consequent structural outcome.**`
    },
    {
      id: 'ch6-b1-c2',
      title: '2. The Four Core Transition Families',
      fullText: `Virtually all transition questions encountered on the SAT divide into four foundational logical families:

### A. Continuation / Addition
The subsequent proposition extends, amplifies, or corroborates the antecedent claim along the same conceptual trajectory.
- **Underlying Relations:** Supplementary empirical evidence, conceptual amplification, cumulative argumentation.
- **Representative Markers:** *furthermore, moreover, additionally, also, in addition, besides*.
- *Exemplar:* "Spectroscopic analysis confirmed the presence of volatile hydrocarbons in the planetary nebula. **Furthermore**, isotopic ratios corroborated the stellar nursery's late-stage evolutionary origin."

### B. Contrast / Counter-Expectation
The subsequent proposition qualifies, limits, undermines, or presents an outright antithesis to the antecedent assertion.
- **Underlying Relations:** Direct categorical divergence, concessive qualification, unexpected empirical deviation, structural replacement.
- **Representative Markers:** *however, nevertheless, in contrast, conversely, nonetheless, instead, whereas*.
- *Exemplar:* "Initial computational climate simulations predicted uniform polar jet-stream deceleration. **However**, empirical satellite telemetry revealed localized accelerations driven by stratospheric vortex shifts."

### C. Causation / Consequence
The subsequent proposition emerges as the direct deductive inference, chronological effect, or institutional consequence of the antecedent premise.
- **Underlying Relations:** Cause-and-effect, deductive synthesis, practical or legal ramification.
- **Representative Markers:** *therefore, consequently, thus, as a result, accordingly, hence*.
- *Exemplar:* "The archival parchment had been exposed to severe hydrothermal cycling over two centuries. **Consequently**, the organic iron-gall ink had degraded beyond unassisted optical decipherment."

### D. Exemplification / Specification
The subsequent proposition operationalizes a broad conceptual claim by supplying a discrete empirical specimen, data point, or instantiated mechanism.
- **Representative Markers:** *for example, for instance, specifically, to illustrate, in particular*.
- *Exemplar:* "Early Mesoamerican polities engineered sophisticated macro-hydraulic earthworks to stabilize agricultural yields. **For instance**, Maya civil engineers at Tikal constructed an interconnected network of limestone-lined reservoirs capable of buffering seasonal drought cycles."`
    },
    {
      id: 'ch6-b1-c3',
      title: '3. Do Not Choose By The Word Alone & The Removal Test',
      fullText: `A lethal tactical error is selecting a transition because it "sounds sophisticated" or because a student habitually defaults to *however*. 

Every item requires strict adherence to the formal operational protocol:
> **Premise A + Premise B → Isolated Logical Relation → Semantic Class Matching → Precise Discourse Marker**

### The Removal Test
When multiple options appear plausible on surface reading, execute the **Removal Test**:
1. Mentally excise the transitional word or phrase entirely.
2. Read the raw antecedent clause and the raw subsequent clause back-to-back.
3. Formulate the unprompted cognitive link: *Does Clause B explain Clause A? Does it contradict Clause A? Does it provide an example of Clause A?*

*Diagnostic Application:*
> *Bioarchaeologists uncovered significant skeletal trauma indicative of intense occupational labor. ___, isotope analysis demonstrated that the population enjoyed an exceptionally diverse, nutrient-dense diet.*

Without a transitional buffer: *severe labor-induced skeletal wear* stands alongside *abundant nutritional privilege*. The second condition constitutes an **unexpected socio-economic divergence** from what pure labor trauma might otherwise suggest. Thus, the authentic relation is **contrast/concession**, immediately eliminating additive (*furthermore*) or causative (*therefore*) distractors.`
    },
    {
      id: 'ch6-b1-c4',
      title: '4. Nuances in Relationships (Addition vs. Similarity, Contrast Strengths, Cause/Effect Direction)',
      fullText: `High-difficulty SAT items frequently pit two markers from the same broad semantic domain against one another, requiring micro-level discrimination:

### Addition vs. Similarity
- **Additive (*additionally, furthermore*):** Introduces a distinct, non-overlapping facet of an investigation or argument.
  - *Context:* "The macroeconomic audit assessed corporate balance-sheet liquidity. **Additionally**, it evaluated institutional compliance with revised cross-border tariff protocols."
- **Analogous Similarity (*similarly, likewise*):** Requires a parallel structural dynamic in a separate subject or domain.
  - *Context:* "Pre-Columbian Andean communities utilized knotted *khipu* chords for quantitative statistical record-keeping. **Similarly**, West African merchant guilds employed standardized cowrie-shell reckoning boards to track transnational barter ratios."

### Gradations of Contrastive Force
- **Direct Categorical Antithesis:** *in contrast, conversely, on the contrary* (direct binary difference).
- **Concessive Persistence:** *nevertheless, nonetheless, even so* (asserts that Premise B holds true *despite* the legitimate impediment posed by Premise A).
- **Substitutive Replacement:** *instead, rather* (asserts that Candidate X was rejected or non-existent, and Candidate Y occurred in its place).
- **Delimiting Qualification:** *granted, to be sure, however* (narrows the theoretical scope of a previously generalized assertion).

### Cause-and-Effect Vector Reversals
Examine the directionality of the causal arrow:
1. *Catalyst → Outcome:* "The deep-sea hydrothermal vents emitted massive sulfide plumes. **As a result**, chemosynthetic microbial mats proliferated across the benthic rift." (*vent plumes → microbial proliferation*)
2. *Outcome ← Underlying Mechanism:* "Chemosynthetic microbial mats proliferated across the benthic rift. **This occurred because** hydrothermal vents discharged concentrated mineral sulfides." (*vent plumes explain proliferation*)

Confusing *because* (causal antecedent) with *consequently* (causal outcome) creates a fatal logical inversion.`
    },
    {
      id: 'ch6-b1-c5',
      title: '5. General → Specific vs. Specific → General & Transitions Must Fit Both Sides',
      fullText: `### Trajectory A: General Claim → Instantiated Evidence
- *Broad Categorical Thesis:* Evolutionary adaptation frequently leverages pre-existing anatomical structures for novel physiological functions (exaptation).
- *Instantiated Case:* **Specifically**, the feathers of theropod dinosaurs, which initially evolved for metabolic thermoregulation, were subsequently co-opted for aerodynamic display and powered flight.
- *Diagnostic Signal:* Abstract universal claim preceding a concrete, named taxonomic specimen.

### Trajectory B: Empirical Specimen → Inductive Generalization
- *Empirical Finding:* Recent cryo-electron microscopy revealed that the misfolded tau protein adopts distinct conformational topologies in Alzheimer's and Pick's neuropathology.
- *Broad Synthesized Conclusion:* **More broadly**, these structural divergences demonstrate that neurodegenerative fibril deposition operates along disease-specific kinetic pathways.
- *Diagnostic Signal:* Specific molecular observation yielding a systemic paradigm shift.

### Two-Sided Clausal Equilibrium
A transition cannot be selected by evaluating Sentence B in isolation. It must balance the semantic tension between Sentence A and Sentence B:
> *Synthetic diamond anvils require immense capital investment and delicate cryogenic calibration. ___, they remain indispensable for investigating planetary core mineral physics.*

Sentence B exhibits a positive, affirming stance ("indispensable tool") against the steep logistical hurdles of Sentence A ("immense capital... delicate calibration"). The transition must reconcile this structural friction:
> **Nevertheless**, they remain indispensable for investigating planetary core mineral physics.`
    },
    {
      id: 'ch6-b1-c6',
      title: '6. Block 1 Master Technique & Takeaway',
      fullText: `### The Three-Question Diagnostic Heuristic
When encountering any transition item:
1. **Sentence A Core Proposition:** What empirical fact, claim, or condition is established?
2. **Sentence B Core Proposition:** What new perspective, outcome, or refinement is introduced?
3. **Relational Interlock:** How does B modify, extend, contradict, illustrate, or deduce from A?
*Categorize instantly:* **AMPLIFICATION → CATEGORICAL OPPOSITION → CONCESSION → DEDUCTION → INSTANTIATION → ANALOGY**

### The Master 6-Step Solving Sequence
1. **STEP 1 (Blank Out):** Read Sentence A and Sentence B while mentally blinding the transition and the four options.
2. **STEP 2 (Deconstruct):** Strip decorative modifying clauses to expose the core subject-verb claims.
3. **STEP 3 (Classify Relation):** Determine the abstract relationship (e.g., Impediment followed by Persistence → Concession).
4. **STEP 4 (Pre-Formulate):** Mentally anticipate an ideal marker (*nevertheless, nonetheless, even so*).
5. **STEP 5 (Match Options):** Scan the four options for the semantic equivalent of your pre-formulation.
6. **STEP 6 (Distractor Elimination):** Systematically invalidate options belonging to incorrect rhetorical families (e.g., rejecting *moreover* because it implies additive consensus where tension exists).

### Block 1 Theoretical Mandate
Transition questions are **formal logic problems governed by semantic directionality**. 
The golden chain remains inviolable:
> **Propositional Meaning → Clausal Interlock → Relational Family → Exact Marker**`
    }
  ]
};

export const THEORY_BLOCK_2: WritingTheoryBlock = {
  blockNumber: 2,
  title: 'Advanced Transition Relationships and Precision',
  description: 'Nuanced Differences → Local vs. Global Logic → The Paragraph-Map Technique → Precision Principle → Relationship Matrix',
  concepts: [
    {
      id: 'ch6-b2-c1',
      title: '1. Fine-Grained Semantic Distinctions in High-Register Prose',
      fullText: `Beyond basic family groupings, elite SAT transition questions test subtle distinctions between closely aligned discourse markers:

- **Neutral Addition vs. Logical Consequence:**
  - *Additive Amplification:* "The central bank increased commercial reserve requirements. **Additionally**, the monetary committee introduced stricter macroprudential liquidity covenants." (Independent, complementary policy actions).
  - *Deductive Consequence:* "The central bank increased commercial reserve requirements. **Consequently**, interbank lending rates escalated within hours." (Direct mechanical causality).

- **Categorical Divergence vs. Concessive Resilience:**
  - *Direct Contrast:* "Sub-Saharan savannas experience protracted seasonal aridity. **In contrast**, equatorial rainforest canopies sustain perennial hyper-saturation." (Two distinct geographical zones juxtaposed).
  - *Concession:* "Sub-Saharan savannas experience protracted seasonal aridity. **Nevertheless**, deep-rooted Acacia species sustain vibrant foliage throughout the dry season." (An organism thrives *in spite of* the harsh environment).

> **The Resilience Test for Concession:** Ask yourself: *Does the second proposition survive, persist, or achieve its outcome despite the explicit obstacle articulated in the first?* If yes, select a concessive marker (*nevertheless, nonetheless, even so*).`
    },
    {
      id: 'ch6-b2-c2',
      title: '2. High-Yield Paired Marker Disambiguation',
      fullText: `### However vs. Therefore
- **However:** Signals a divergence, qualification, or refutation of Expectation A.
  - *Example:* "The clinical cohort exhibited low initial antibody titers. **However**, secondary cellular immunity remained robust."
- **Therefore:** Signals an inevitable logical deduction or empirical consequence stemming from Premise A.
  - *Example:* "The clinical cohort exhibited low initial antibody titers. **Therefore**, immunologists recommended an immediate booster regimen."

### Furthermore vs. Similarly
- **Furthermore:** Stacks an additional, distinct line of evidentiary support within the same subject.
  - *Example:* "The architectural retrofitting reduced thermal dissipation by 35 percent. **Furthermore**, the photovoltaic glazing generated surplus electricity."
- **Similarly:** Compares two distinct entities exhibiting an identical structural or functional behavior.
  - *Example:* "The architectural retrofitting reduced thermal dissipation in the headquarters. **Similarly**, the municipal library achieved substantial energy savings after adopting vacuum-insulated envelope panels."

### In Contrast vs. Instead
- **In Contrast:** Parallel juxtaposition of two coexisting, differing conditions.
  - *Example:* "High-frequency algorithmic trading relies on microsecond order execution. **In contrast**, value investing emphasizes multi-year balance sheet fundamentals."
- **Instead:** Mutually exclusive replacement or substitution (*A is negated or abandoned; B occurs in its place*).
  - *Example:* "The portfolio managers did not allocate capital to speculative derivatives. **Instead**, they secured long-term sovereign inflation-protected securities."`
    },
    {
      id: 'ch6-b2-c3',
      title: '3. Chronological Trajectories vs. Logical Deductions',
      fullText: `### Temporal Sequence Markers
Temporal transitions denote the chronological unfolding of historical or scientific processes:
*initially, subsequently, meanwhile, eventually, previously, concurrently, ultimately*.

- **Meanwhile (Simultaneity):** Marks a divergent action occurring across the exact same timeframe.
  - *Example:* "Astrophysicists monitored gravitational wave signals at the Hanford detector. **Meanwhile**, optical astronomers in Chile searched for electromagnetic counterparts in the constellation Hydra."
- **Subsequently (Chronological Progression):** Marks an event occurring after the completion of an antecedent event.
  - *Example:* "The synthetic compound was crystallized at ambient pressure. **Subsequently**, researchers exposed the crystalline lattice to 50 gigapascals of hydrostatic pressure."

### "Finally" vs. "Therefore"
- *Chronological Terminal Stage:* "The archaeological team surveyed the tell, excavated the stratified domestic units, and cataloged ceramic assemblages. **Finally**, they deposited the artifacts in the national repository." (*Finally* denotes the terminal operational step, not a deductive mathematical conclusion).
- *Deductive Consequence:* "The archaeological team surveyed the tell, excavated the stratified domestic units, and identified imported Cypriot ceramics throughout the burnt destruction layer. **Therefore**, they concluded the settlement maintained maritime trade until its destruction."`
    },
    {
      id: 'ch6-b2-c4',
      title: '4. Local Clausal Logic vs. Global Discourse Architecture',
      fullText: `A frequent trap in advanced SAT items is selecting a transition that connects locally to the immediate previous sentence, but fatally violates the **global rhetorical trajectory** of the entire paragraph.

### Global Discourse Mapping
Consider a typical four-sentence research passage:
1. *Sentence 1:* Introduces the classical hypothesis that avian navigation relies exclusively on celestial solar cues.
2. *Sentence 2:* Details classical behavioral studies supporting solar orientation during diurnal migration.
3. *Sentence 3:* **[Target Transition]** Recent neurobiological assays revealed cryptochrome photoreceptors in migratory songbird retinas that facilitate geomagnetic field sensing.
4. *Sentence 4:* This quantum biological mechanism demonstrates that night-migrating species navigate independently of celestial markers.

- *Local Trap:* A student reading only Sentence 2 ("supporting studies") and Sentence 3 ("assays revealed receptors") might be tempted to choose an additive transition like *furthermore*.
- *Global Reality:* The entire paragraph moves from an **orthodox historical paradigm** (Sentences 1–2) to a **disruptive modern revision** (Sentences 3–4). The transition before Sentence 3 must establish an overarching **pivot of contrast** (*however, nonetheless*), not a blind additive continuation.`
    },
    {
      id: 'ch6-b2-c5',
      title: '5. The Precision Principle & Rhetorical Function Parsing',
      fullText: `### The Precision Principle
When two transitions from compatible logical families appear among the choices (e.g., broad addition vs. specific exemplification), **always prefer the marker that defines the relationship with maximum specificity**.

*Diagnostic Example:*
> *Urban heat islands exacerbate extreme summer mortality across dense metropolitan centers. ___, nocturnal ambient temperatures in asphalt-dense districts frequently remain up to 8°C higher than in adjacent rural woodlands.*

- *Analysis:* The second sentence is not merely "another related fact" (*additionally*). It provides a concrete, quantified measurement demonstrating how the urban heat island phenomenon operates.
- *Decision:* **Specifically** (or *For instance*) is vastly superior to the blunt, generic addition of *moreover*.

### Rhetorical Function Categorization
Always identify the structural verb governing the second sentence:
- Does it *corroborate* (add evidence)?
- Does it *demarcate* (restrict scope)?
- Does it *instantiate* (provide a case study)?
- Does it *reconcile* (synthesize a dispute)?
- Does it *extrapolate* (deduce a future implication)?`
    },
    {
      id: 'ch6-b2-c6',
      title: '6. Block 2 Comprehensive Relationship Matrix',
      fullText: `### Operational Decision Matrix
| Semantic Family | Fine-Grained Function | Exemplary Discourse Markers | Diagnostic Verification Test |
|---|---|---|---|
| **Additive** | Progressive Amplification | *furthermore, moreover, in addition* | Does Sentence B add a new supporting argument without repeating A? |
| **Comparative** | Structural Analogy | *similarly, likewise, by the same token* | Does Sentence B demonstrate the same phenomenon in an independent entity? |
| **Adversative** | Direct Categorical Juxtaposition | *in contrast, conversely, on the contrary* | Are two separate entities contrasted along the same metric? |
| **Concessive** | Resilience Despite Impediment | *nevertheless, nonetheless, even so, still* | Does Sentence B succeed or remain true in spite of the obstacle in A? |
| **Substitutive** | Exclusive Replacement | *instead, rather* | Was the entity in Sentence A discarded or rejected in favor of B? |
| **Causal** | Mechanistic or Deductive Effect | *consequently, therefore, thus, accordingly* | Did the state of affairs in A directly generate the outcome in B? |
| **Exemplifying** | Instantiation of Universal Claim | *for example, for instance, to illustrate* | Does Sentence B name a specific historical or biological instance of A? |
| **Specificative** | Micro-Detail Precision | *specifically, in particular* | Does Sentence B narrow a broad term from A down to exact parameters? |
| **Temporal** | Sequential Phasing | *subsequently, previously, meanwhile, ultimately* | Does Sentence B mark a distinct point on a chronological timeline? |

### Block 2 Summary Takeaway
Elite SAT performance requires transcending blunt dictionary definitions. You must decipher the **exact rhetorical architecture and discourse trajectory** uniting the two propositions.`
    }
  ]
};

export const THEORY_BLOCK_3: WritingTheoryBlock = {
  blockNumber: 3,
  title: 'Concession, Qualification, and Nuanced Contrast',
  description: 'Types of Contrast → Concession vs. Direct Contrast → Scope Test → Instead vs. Nevertheless → 5-Way Decision Tree',
  concepts: [
    {
      id: 'ch6-b3-c1',
      title: '1. Why Advanced Contrast Items Demand High Precision',
      fullText: `On foundational grammar sections, contrast is treated as a monolithic concept usually solved by inserting *however*. On high-level Digital SAT modules, contrast divides into sophisticated rhetorical subtypes:

1. **Direct Categorical Dichotomy:** Contrasting two distinct entities across an identical variable.
2. **Concessive Resilience:** Upholding a claim in the face of an acknowledged counterweight.
3. **Epistemological Qualification:** Narrows the generalizability or certitude of an ambitious hypothesis.
4. **Substitutive Invalidation:** Announcing that a discredited model was replaced by a functioning alternative.
5. **Surprising Empirical Deviation:** Highlighting experimental results that subvert theoretical predictions.`
    },
    {
      id: 'ch6-b3-c2',
      title: '2. Direct Contrast vs. Concession & The "Despite This" Heuristic',
      fullText: `### Direct Contrast (Symmetric Comparison)
Juxtaposes two distinct entities, systems, or historical eras that exhibit opposite traits.
- *Exemplar:* "High-elevation alpine coniferous forests operate under nutrient-poor, acidic soil conditions. **In contrast**, alluvial floodplains feature mineral-rich sedimentary deposits that foster rapid deciduous canopy growth."
- *Architecture:* Subject X possesses Attribute A; Subject Y possesses Attribute B.

### Concession (Asymmetric Resilience)
Acknowledges an authentic limitation, liability, or opposing argument, yet demonstrates that the primary assertion remains completely valid.
- *Exemplar:* "Solid-state electrolyte batteries require complex ceramic sintering techniques that significantly increase fabrication overhead. **Nevertheless**, major aerospace manufacturers have prioritized their integration due to their extraordinary energy density and thermal stability."
- *Architecture:* Although Liability X is undeniably true, Primary Trait Y persists regardless.

### The "Despite This" Diagnostic Heuristic
To confirm a concessive transition, insert the test phrase **"despite this obstacle"** between the two clauses:
> *The paleolithic cave paintings were situated in deep, pitch-black subterranean chambers accessible only through perilous vertical fissures. [Despite this obstacle], the artists executed intricate, polychromatic murals with astonishing anatomical precision.*

Because the diagnostic phrase flows seamlessly, the structural requirement is **concession** (*nevertheless, nonetheless, even so*).`
    },
    {
      id: 'ch6-b3-c3',
      title: '3. Expectation Inversion vs. Empirical Confirmation',
      fullText: `### Expectation Inversion
Occurs when an experimental protocol, policy intervention, or financial forecast generates an outcome diametrically opposed to the theoretical premise:
- *Exemplar:* "Economists predicted that deregulation of the regional energy market would stimulate competitive pricing and lower consumer utility bills. **Instead**, consolidated utility conglomerates instituted steep rate hikes that escalated household energy burdens."

### Empirical Confirmation (*In fact / Indeed*)
When Sentence B appears on surface reading to offer a surprising twist, but actually **reinforces and escalates** the assertion of Sentence A:
- *Exemplar:* "The archaeological survey did not merely corroborate the existence of a bronze foundry at the peripheral outpost. **In fact**, the recovered crucibles and slag deposits revealed that the site was the primary metallurgical nexus for the entire empire."
- *Trap:* Mistaking rhetorical intensification (*in fact, indeed*) for an adversative contrast (*however*).`
    },
    {
      id: 'ch6-b3-c4',
      title: '4. Scope Delimitation & The "Scope Test"',
      fullText: `### The Scope Test
When a passage presents a sweeping macro-level thesis followed by an empirical exception or boundary condition, ask:
> *Does Sentence B completely invalidate Sentence A, or does it merely delineate its boundary conditions?*

- **Invalidation / Overthrow:** Requires a strong adversative (*however, on the contrary, yet*).
- **Scope Delimitation / Boundary Definition:** Requires a qualifying adversative (*to be sure, granted, in certain respects, nonetheless*).

*Case Study in Scope Delimitation:*
> *The introduction of mechanized harvesters across the late nineteenth-century Midwest substantially elevated aggregate wheat export volumes. ___, the capital costs of acquiring steam-powered machinery precipitated crippling debt cycles among smallholders unable to achieve economies of scale.*

The second sentence does not refute the historical reality of elevated grain exports; it highlights a socio-economic consequence that circumscribes the narrative of unmitigated agricultural prosperity.`
    },
    {
      id: 'ch6-b3-c5',
      title: '5. "Instead" vs. "Nevertheless" & Substitutive Logic',
      fullText: `Understanding the mechanical difference between *instead* (substitution) and *nevertheless* (concession) eliminates the most pervasive high-difficulty distractor pair:

### Instead (Mutually Exclusive Replacement)
Requires that the antecedent sentence contain a negative or prohibitive formulation (*did not, failed to, rejected, rather than, avoided*):
- *Sentence A:* "The computational linguists did not construct the translation algorithm using hardcoded syntactic parsing rules."
- *Sentence B:* "**Instead**, they trained a multi-billion parameter neural network on dense bilingual text corpora."
- *Logic:* Method A was discarded $\rightarrow$ Method B was implemented in its place.

### Nevertheless (Simultaneous Coexistence with Obstacle)
Both clauses are true simultaneously; Sentence B succeeds despite the operational reality of Sentence A:
- *Sentence A:* "The computational linguists encountered severe GPU hardware bottlenecks during the final training epoch."
- *Sentence B:* "**Nevertheless**, the completed model achieved state-of-the-art BLEU scores across fourteen low-resource languages."
- *Logic:* Bottleneck A was real + Achievement B was realized despite Bottleneck A.`
    },
    {
      id: 'ch6-b3-c6',
      title: '6. Block 3 Five-Way Decision Tree & Takeaway',
      fullText: `### The 5-Way Adversative Decision Flowchart
When Sentence B exhibits semantic friction with Sentence A:

\`\`\`
                         [Analyze Clausal Friction]
                                     │
         ┌───────────────────────────┼───────────────────────────┐
         ▼                           ▼                           ▼
[Symmetric Juxtaposition]   [Resilience vs. Obstacle]   [Replacement / Swap]
 (Entity X vs. Entity Y)     (A is true, but B thrives)   (A negated; B enacted)
         │                           │                           │
         ▼                           ▼                           ▼
   *in contrast*              *nevertheless*                  *instead*
   *conversely*                *nonetheless*                  *rather*
   *on the other hand*         *even so*
                                     │
         ┌───────────────────────────┴───────────────────────────┐
         ▼                                                       ▼
[Delimiting Qualification]                             [Subverted Expectation]
 (Restricts broad universal)                            (Outcome defies theory)
         │                                                       │
         ▼                                                       ▼
     *however*                                              *instead*
     *granted*                                              *unexpectedly*
\`\`\`

### Block 3 Theoretical Mandate
Adversative precision requires diagnosing whether the writer is **juxtaposing two entities**, **affirming a result in spite of an obstacle**, **substituting an alternative**, or **delimiting the scope** of an empirical claim.`
    }
  ]
};

export const THEORY_BLOCK_4: WritingTheoryBlock = {
  blockNumber: 4,
  title: 'Cause, Effect, Evidence, and Logical Direction',
  description: 'Logical Directions → Therefore vs. Consequently vs. Thus → Causation vs. Correlation → Claim vs. Evidence vs. Conclusion',
  concepts: [
    {
      id: 'ch6-b4-c1',
      title: '1. Directional Vectors in Causal and Deductive Reasoning',
      fullText: `Causal transitions on the SAT are fundamentally about **vector tracking**:
- **Forward Vector (Cause $\\rightarrow$ Effect):** Premise A acts as the physical, legal, or institutional engine that generates Outcome B.
- **Backward Vector (Effect $\\leftarrow$ Explanation):** Event A is presented as an empirical fact, and Clause B unpacks the subterranean physical or historical mechanism behind it.
- **Evidentiary Vector (Claim $\\rightarrow$ Empirical Proof):** Thesis A asserts a broad principle, and Clause B supplies observational data corroborating that claim.
- **Inferential Vector (Data $\\rightarrow$ Theoretical Deduction):** Data points in Premise A compel the epistemological conclusion articulated in Clause B.`
    },
    {
      id: 'ch6-b4-c2',
      title: '2. Fine-Grained Causation Markers: Therefore, Consequently, Thus, Accordingly',
      fullText: `### Therefore vs. Consequently
- **Therefore (Deductive / Mathematical Inference):** Introduces a conclusion derived logically from established premises.
  - *Exemplar:* "The radiometric decay curves exhibited zero contamination and matched isotopic ratios from the Chicxulub impact layer. **Therefore**, the paleontological team dated the iridium anomaly precisely to the Cretaceous-Paleogene boundary."
- **Consequently (Physical / Institutional Result):** Emphasizes the tangible, downstream operational effect of an event.
  - *Exemplar:* "Drought severely diminished reservoir hydrostatic pressure across the hydroelectric basin. **Consequently**, the regional grid operator curtailed industrial electricity allocations."

### Thus (Deductive Synthesis / Manner)
Signals how an overarching synthesis emerges directly from preceding quantitative data or methodological execution.
- *Exemplar:* "The algorithm evaluated morphological traits across forty thousand fossil specimens in under three seconds. **Thus**, the researchers demonstrated the viability of automated taxonomic classification."

### Accordingly (Proportional / Prescribed Response)
Means "in a manner strictly congruent with or mandated by the established facts":
- *Exemplar:* "The structural stress tests revealed microscopic stress fractures within the primary fuselage support spar. **Accordingly**, aviation safety regulators ordered the immediate grounding and radiographic inspection of all airframes in that production block."`
    },
    {
      id: 'ch6-b4-c3',
      title: '3. The Correlation vs. Causation Diagnostic Pitfall',
      fullText: `A pervasive trap in transition items involves inserting a causal discourse marker (*therefore, consequently*) when the text merely reports two concurrent, correlated phenomena without establishing a direct causal engine.

*Examine the distinction:*
1. **Unjustified Causal Leap (Incorrect):**
   > *During the late Bronze Age collapse, Eastern Mediterranean urban centers experienced widespread palace burnings. ___, long-distance maritime exchange of tin and copper plummeted.*
   - *Analysis:* While both events co-occurred during systemic socio-political collapse, the passage does not assert that the destruction of palaces was the singular direct cause of maritime shipping disruptions; both were symptoms of systemic systemic collapse. Inserting *consequently* over-claims causality where an additive or temporal marker (*additionally, concurrently*) is warranted.
2. **Legitimately Established Causality (Correct):**
   > *The volcanic eruption of Mount Tambora in 1815 injected over one hundred million tons of sulfate aerosols into the stratosphere. **Consequently**, global solar radiation was deflected, precipitating the infamous 'Year Without a Summer' across North America and Europe.*`
    },
    {
      id: 'ch6-b4-c4',
      title: '4. Structural Directionality: "Because" vs. "For This Reason"',
      fullText: `Discourse markers organize information along distinct clausal hierarchies:

### Subordinating Causal Conjunctions (*because, since, as*)
Place the causal catalyst in the subordinate clause, making it structurally dependent on the main result clause:
- *Form:* "[Subordinate Causal Clause], [Main Outcome Clause]"
- *Exemplar:* "**Because** the interstellar medium absorbs extreme ultraviolet radiation, astronomers must rely on spaceborne far-ultraviolet spectrographs to map galactic ionization fronts."

### Conjunctive Adverbs (*for this reason, consequently, therefore*)
Place the causal catalyst in the antecedent independent sentence, and initiate the consequent outcome sentence:
- *Form:* "[Sentence 1: Catalyst]. **For this reason,** [Sentence 2: Consequent Action]."
- *Exemplar:* "The interstellar medium absorbs extreme ultraviolet radiation. **For this reason**, astronomers deploy spaceborne far-ultraviolet spectrographs to map galactic ionization fronts."`
    },
    {
      id: 'ch6-b4-c5',
      title: '5. Claim $\\rightarrow$ Evidence vs. Evidence $\\rightarrow$ Deduction',
      fullText: `Distinguishing whether Sentence B serves as **empirical validation** or **theoretical deduction** is essential for high-difficulty items:

### Trajectory 1: Abstract Claim $\\rightarrow$ Concrete Evidence (*For example, Specifically*)
- *Sentence A (Broad Claim):* "Ancient metallurgical traditions in West Africa developed sophisticated smelting technologies completely independent of Eurasian transmission."
- *Sentence B (Corroborating Evidence):* "**For example**, archaeological excavations at Lejja, Nigeria, unearthed iron-smelting bloomery furnaces dating continuously to 2000 BCE."
- *Trap:* Choosing *therefore* or *consequently*. (The furnaces at Lejja did not *cause* the technological independence; they serve as archaeological *proof* of it).

### Trajectory 2: Concrete Evidence $\\rightarrow$ Abstract Deduction (*Therefore, Thus*)
- *Sentence A (Empirical Data):* "Archaeological excavations at Lejja, Nigeria, unearthed iron-smelting bloomery furnaces dating securely to 2000 BCE, pre-dating trans-Saharan metallurgical trade contacts by centuries."
- *Sentence B (Synthesized Conclusion):* "**Therefore**, researchers concluded that sub-Saharan iron metallurgy developed autonomously."`
    },
    {
      id: 'ch6-b4-c6',
      title: '6. Block 4 Master Solving Protocol & Takeaway',
      fullText: `### The Causal Vector Diagnostic Sequence
1. **Identify the Catalyst (C):** What initial event, physical force, or empirical observation occurs?
2. **Identify the Consequence/Inference (I):** What downstream effect or scientific conclusion is established?
3. **Verify Sentence Orientation:**
   - If Sentence 1 = C and Sentence 2 = I $\\rightarrow$ Select **Result Marker** (*consequently, as a result, therefore*).
   - If Sentence 1 = Universal Claim and Sentence 2 = Empirical Data $\\rightarrow$ Select **Exemplifying Marker** (*for instance, specifically*).
   - If Sentence 1 = Mandate and Sentence 2 = Required Action $\\rightarrow$ Select **Congruent Action Marker** (*accordingly*).

### Block 4 Theoretical Mandate
Causal transition mastery is the art of **directional vector mapping**. Master the boundary separating an event's *cause*, its *consequence*, its *empirical proof*, and its *deductive inference*.`
    }
  ]
};

export const THEORY_BLOCK_5: WritingTheoryBlock = {
  blockNumber: 5,
  title: 'Addition, Continuation, Examples, and Evidence',
  description: 'Addition vs. Similarity → Examples vs. Specifically → Evidence Types → Four-Way Distinction',
  concepts: [
    {
      id: 'ch6-b5-c1',
      title: '1. Additive Amplification: Furthermore vs. Moreover vs. Additionally',
      fullText: `Additive transitions indicate that the discourse is progressing along an identical ideological or evidentiary trajectory without introducing thematic divergence.

### Nuanced Additive Registers
- **Additionally:** Neutral insertion of a supplementary data point or procedural step.
  - *Exemplar:* "The archaeological team documented stratified ceramic shards across Trench 4. **Additionally**, they collected charcoal samples from the domestic hearth for accelerator mass spectrometry."
- **Furthermore:** Progressive rhetorical extension that strengthens the cogency of an overarching thesis.
  - *Exemplar:* "Decentralized solar microgrids drastically reduce municipal transmission losses. **Furthermore**, their modular architecture protects essential hospital infrastructure from cascading regional blackout events."
- **Moreover:** Introduces an even more decisive, weightier, or profound supporting reality that caps an argumentative sequence.
  - *Exemplar:* "The synthetic biomaterial matched the tensile elasticity of natural cartilage. **Moreover**, long-term in vitro trials revealed that it actively stimulated chondrocyte regeneration without eliciting an inflammatory immune response."`
    },
    {
      id: 'ch6-b5-c2',
      title: '2. Structural Similarity: Similarly vs. Likewise',
      fullText: `Additive transitions (*furthermore*) stack evidence within a single subject, whereas **comparative similarity transitions** (*similarly, likewise*) establish an explicit analogy between **two distinct, independent entities**.

### The Two-Entity Rule for Similarity Transitions
To justify *similarly* or *likewise*, the passage must satisfy two conditions:
1. **Entity A** and **Entity B** must be categorically separate subjects.
2. Both entities must exhibit an **analogous operational dynamic or structural outcome**.

*Exemplar:*
> *In maritime gastropods, heavy metal toxicity induces severe shell calcification deficits by disrupting cellular calcium ion transport. **Similarly**, terrestrial amphibians exposed to pesticide runoff exhibit critical bone demineralization through homologous endocrine pathway disruption.*

- *Subject 1:* Marine gastropods facing heavy metal toxicity.
- *Subject 2:* Terrestrial amphibians facing pesticide runoff.
- *Shared Dynamic:* Disrupted mineralized tissue formation via cellular pathway interference.`
    },
    {
      id: 'ch6-b5-c3',
      title: '3. Exemplification vs. Specification: For Example vs. Specifically',
      fullText: `### For Example / For Instance (Representative Case Study)
Introduces one representative instance chosen from a broader, multi-member categorical class:
- *Broad Class:* "Deep-sea abyssal organisms have evolved extreme metabolic adaptations to survive hydrostatic pressures exceeding one thousand atmospheres."
- *Representative Exemplar:* "**For example**, the hadal snailfish (*Pseudoliparis swirei*) synthesizes high concentrations of trimethylamine N-oxide to stabilize intracellular protein structures against osmotic compression."

### Specifically / In Particular (Micro-Detail Narrowing)
Narrows attention down to the exact quantitative parameters, isolated variable, or individual specimen under discussion:
- *Antecedent Statement:* "The paleo-climatological drill core revealed abrupt atmospheric isotopic shifts corresponding precisely to the Younger Dryas cooling epoch."
- *Micro-Specification:* "**Specifically**, deuterium isotope ratios in the Greenland ice layers demonstrated a 10°C drop in mean annual surface temperature within a single fifty-year interval."`
    },
    {
      id: 'ch6-b5-c4',
      title: '4. Evidence Typologies and Their Rhetorical Markers',
      fullText: `Understanding how distinct empirical data structures function in scholarly discourse ensures rapid transition selection:

### Quantitative Statistical Evidence
- *Discourse Marker:* *specifically, to illustrate, in numerical terms*
- *Application:* Anchors an abstract demographic or economic trend with verified census or econometric datasets.

### Methodological Protocol Evidence
- *Discourse Marker:* *in particular, specifically*
- *Application:* Explains the exact laboratory apparatus, chemical reagents, or algorithmic controls employed.

### Historiographical / Archaeological Case Studies
- *Discourse Marker:* *for instance, for example, consider*
- *Application:* Illustrates a broad geopolitical or cultural thesis by examining an individual polity, archive, or excavation horizon.`
    },
    {
      id: 'ch6-b5-c5',
      title: '5. Cumulative Evidentiary Chaining and the "No-Invented-Logic" Rule',
      fullText: `Scholarly paragraphs in journals like *Nature* and *The Economist* construct cumulative evidentiary chains:
> **Core Thesis $\\rightarrow$ Primary Evidence $\\rightarrow$ Supplementary Corroboration $\\rightarrow$ Synthesized Conclusion**

### The "No-Invented-Logic" Rule
Never manufacture a causal, contrastive, or temporal relationship that the passage does not explicitly assert:
- *Passage:* "Global lithium extraction expanded by 400 percent over the past decade. Advanced solid-state electrolyte research received record venture capital investment."
- *Analysis:* While both statements involve battery technology, the passage merely presents two parallel developments. Do NOT insert *consequently* unless the text explicitly states that lithium extraction *caused* the venture capital allocations. Use **neutral addition** (*additionally, furthermore*).`
    },
    {
      id: 'ch6-b5-c6',
      title: '6. Block 5 Four-Way Distinction & Master Rule',
      fullText: `### The Master Four-Way Diagnostic Filter
When Sentence B supports Sentence A, classify the precise mechanism:
1. **Does Sentence B add a new supporting argument within the same topic?** $\\rightarrow$ **ADDITION** (*furthermore, moreover, in addition*)
2. **Does Sentence B show an independent subject behaving identically?** $\\rightarrow$ **SIMILARITY** (*similarly, likewise*)
3. **Does Sentence B present a single representative specimen of a broad class?** $\\rightarrow$ **EXEMPLIFICATION** (*for example, for instance*)
4. **Does Sentence B zoom in on the exact technical parameters of Sentence A?** $\\rightarrow$ **SPECIFICATION** (*specifically, in particular*)

### Block 5 Master Formula
> **UNIVERSAL CLAIM $\\rightarrow$ INSTANTIATED SPECIMEN = *For example***  
> **GENERAL PHENOMENON $\\rightarrow$ EXACT PARAMETER = *Specifically***  
> **ARGUMENT $\\rightarrow$ STRONGER REINFORCING POINT = *Moreover***  
> **SYSTEM A DYNAMIC $\\rightarrow$ SYSTEM B HOMOLOGOUS DYNAMIC = *Similarly***`
    }
  ]
};
