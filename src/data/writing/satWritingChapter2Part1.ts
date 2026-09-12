import { WritingTheoryBlock } from './satWritingTypes';

export const THEORY_BLOCK_1: WritingTheoryBlock = {
  blockNumber: 1,
  title: 'The Punctuation Decision System',
  description: 'The Core Decision System, The Independent-Clause Test, and Elimination Habits',
  concepts: [
    {
      id: 'tb1-c1',
      title: '1. The First Rule: Do Not Choose Punctuation by Appearance',
      fullText: `Many punctuation questions appear to ask:
> "Which punctuation mark belongs here?"

That is usually not the real question.

The real question is:
> **What grammatical relationship exists on the two sides of the blank?**

A comma, semicolon, colon, dash, or no punctuation is not interchangeable decoration. Each one creates a particular relationship.

Before looking at the answer choices, determine what the sentence is structurally doing.

Your first questions should be:
1. What is on the left of the blank?
2. What is on the right?
3. Is each side a complete sentence?
4. Is one side dependent on the other?
5. Is the second part explaining, contrasting with, or adding to the first?
6. Is the punctuation separating clauses or merely separating information inside one clause?

This approach is much more reliable than memorizing isolated rules.`
    },
    {
      id: 'tb1-c2',
      title: '2. The Independent-Clause Test',
      fullText: `An **independent clause** is a group of words that can stand as a complete sentence.

For example:
> Paleoclimatologists extracted ice cores from the Greenland ice sheet.

It contains:
* a subject: **paleoclimatologists**
* a verb: **extracted**
* a complete thought.

Therefore, it is independent.

Now consider:
> Because paleoclimatologists extracted ice cores from the Greenland ice sheet

This has a subject and verb, but it begins with the subordinating conjunction **because** and does not express a complete independent thought.

It is dependent.

### The fastest SAT test
Mentally put a period at the boundary.

If both sides can stand as complete sentences, you have two independent clauses.

Example:
> The initial spectroscopic calibration drifted ___ the astrophysicists recalibrated the cryogenic sensors.

Left:
> The initial spectroscopic calibration drifted.
Complete.

Right:
> The astrophysicists recalibrated the cryogenic sensors.
Complete.

Therefore, the blank lies between two independent clauses. That immediately eliminates many answer choices.`
    },
    {
      id: 'tb1-c3',
      title: '3. Why Two Independent Clauses Cannot Normally Be Joined by a Comma',
      fullText: `Consider:
> The initial spectroscopic calibration drifted, the astrophysicists recalibrated the cryogenic sensors.

Both sides are independent clauses.
A comma by itself is too weak to join them.
This is called a **comma splice**.

The SAT frequently tests this because the sentence often looks natural when read quickly.

The correct solutions could include:
> The initial spectroscopic calibration drifted; the astrophysicists recalibrated the cryogenic sensors.
or:
> The initial spectroscopic calibration drifted, so the astrophysicists recalibrated the cryogenic sensors.

The difference is important. The semicolon directly joins two independent clauses. The second construction uses a comma plus a coordinating conjunction.`
    },
    {
      id: 'tb1-c4',
      title: '4. The Four Major Solutions to Two Independent Clauses',
      fullText: `Suppose we have:
> The excavation revealed structural damage ___ the conservators stabilized the foundation.

There are several legitimate ways to connect these ideas:

### Option 1: Period
> The excavation revealed structural damage. The conservators stabilized the foundation.
Two separate sentences.

### Option 2: Semicolon
> The excavation revealed structural damage; the conservators stabilized the foundation.
Two independent clauses connected by a semicolon.

### Option 3: Comma + coordinating conjunction
> The excavation revealed structural damage, so the conservators stabilized the foundation.
The conjunction **so** expresses the relationship.

### Option 4: Colon, when the second clause explains or specifies the first
> The excavation revealed one alarming vulnerability: the subterranean limestone masonry was crumbling.
A colon is not simply another semicolon. It creates a specific explanatory relationship.`
    },
    {
      id: 'tb1-c5',
      title: '5. The SAT\'s Most Important Elimination Habit',
      fullText: `When answer choices contain several punctuation marks, classify the sentence **before** comparing the marks.

Suppose the choices are:
**A)** comma
**B)** semicolon
**C)** colon
**D)** no punctuation

Do not think:
> "Which mark looks best?"

Instead ask:
> "What does the grammar require?"

If both sides are independent clauses and there is no conjunction, a comma is immediately suspicious.
If the second clause explains a complete statement before it, a colon may be appropriate.
If the blank occurs inside a single noun phrase, neither a semicolon nor a colon may work.

This is why punctuation questions are often solved faster through **elimination** than through positive selection.`
    },
    {
      id: 'tb1-c6',
      title: '6. Semicolons: The Structural Shortcut',
      fullText: `The simplest semicolon rule is:
> **A semicolon can separate two independent clauses.**

Example:
> Epigraphers transcribed the bronze legal inscriptions; linguists decoded the archaic Oscan dialect.

Left:
> Epigraphers transcribed the bronze legal inscriptions. (Independent)

Right:
> Linguists decoded the archaic Oscan dialect. (Independent)

Therefore, the semicolon works.

### The crucial warning
A semicolon does **not** simply mean "long pause." You cannot use one because the sentence feels like it needs a stronger pause.

For example:
> Epigraphers transcribed the bronze legal inscriptions; from several subterranean burial vaults.

The material after the semicolon is not an independent clause. Therefore, the semicolon cannot work.`
    },
    {
      id: 'tb1-c7',
      title: '7. Semicolon + Transition',
      fullText: `One of the most frequently tested structures is:
> **Independent clause; transition, independent clause.**

Examples of transition words include:
* however
* therefore
* consequently
* nevertheless
* moreover
* furthermore

Consider:
> The experimental geothermal turbine operated efficiently; however, mineral scaling rapidly degraded its heat exchangers.

The structure is:
> independent clause
> **; however,**
> independent clause

This is a major SAT pattern.

### The trap
Students often see **however** and choose a comma:
> The experimental geothermal turbine operated efficiently, however, mineral scaling rapidly degraded its heat exchangers.

That creates a comma splice. The word **however** does not magically turn the comma into a valid clause boundary.`
    },
    {
      id: 'tb1-c8',
      title: '8. Why "However" Is Different from "But"',
      fullText: `Compare:
> The experimental geothermal turbine operated efficiently, but mineral scaling rapidly degraded its heat exchangers.
and:
> The experimental geothermal turbine operated efficiently; however, mineral scaling rapidly degraded its heat exchangers.

**But** is a coordinating conjunction.
Therefore:
> independent clause, but independent clause

**However** is a conjunctive adverb.
Therefore:
> independent clause; however, independent clause

This distinction is worth memorizing because the SAT can test it indirectly through answer-choice design.`
    },
    {
      id: 'tb1-c9',
      title: '9. The FANBOYS Connection',
      fullText: `The coordinating conjunctions commonly taught through **FANBOYS** are:
* for
* and
* nor
* but
* or
* yet
* so

When one of these joins two independent clauses, the normal structure is:
> **Independent clause, conjunction independent clause.**

Example:
> The preliminary archaeological survey suggested a domestic settlement, yet subsequent aerial lidar revealed a sprawling ceremonial complex.

Both clauses are complete. The comma is therefore paired with **yet**.`
    },
    {
      id: 'tb1-c10',
      title: '10. The "And" Trap',
      fullText: `Do not assume that every **and** requires a comma.

Compare:
> Ethnomusicologists recorded the Appalachian ballads and transcribed the modal fiddle tunings.

There is one subject (**Ethnomusicologists**) and two verbs (**recorded**, **transcribed**).
This is a compound predicate. No comma is needed.

Now compare:
> Ethnomusicologists recorded the Appalachian ballads, and archivists digitized the delicate acetate discs.

Now there are two subjects (**Ethnomusicologists**, **archivists**). Each has its own independent clause.
Therefore, the comma is appropriate before **and**.

### Fast test
Ask:
> Does the material after "and" have its own subject and complete verb?

If yes, investigate a two-clause structure. If no, you may simply have coordinated elements within one clause.`
    },
    {
      id: 'tb1-c11',
      title: '11. No Punctuation Is an Actual Answer',
      fullText: `One of the most important habits in SAT Writing is accepting that **no punctuation** can be the correct answer.

Consider:
> The marine biologists who tagged the migratory leatherback sea turtles tracked their pelagic navigation corridors.

The phrase *who tagged the migratory leatherback sea turtles* is integrated into the sentence. It identifies which biologists are being discussed. Adding commas would change the grammatical relationship.

Similarly:
> The recovery of delicate silk fragments from ancient Dunhuang caves transformed textile history.

The phrase *from ancient Dunhuang caves* is part of the subject noun phrase. It does not automatically require commas.

### Important principle
> **A long phrase does not automatically need punctuation.**
Length is not a punctuation rule.`
    },
    {
      id: 'tb1-c12',
      title: '12. Punctuation Around Essential Information',
      fullText: `Consider:
> The architectural conservators who completed the seismic retrofitting received municipal preservation awards.

The phrase *who completed the seismic retrofitting* identifies which conservators. It is essential. Therefore, no commas.

Now consider:
> The architectural conservators, who had completed the seismic retrofitting, received municipal preservation awards.

Here the relative clause is presented as supplementary information about an already identified group. The commas mark it as nonessential.

The key question is not:
> "Is this phrase long?"

It is:
> **"Does the phrase identify the noun, or merely add information about it?"**`
    },
    {
      id: 'tb1-c13',
      title: '13. Parenthetical Information',
      fullText: `A pair of commas can surround information inserted into an otherwise complete sentence.

Example:
> The revised monetary policy, drafted by central bank governors in Basel, stabilized cross-border liquidity.

Remove the inserted phrase:
> The revised monetary policy stabilized cross-border liquidity.

The sentence remains grammatically complete. Therefore, the inserted material is parenthetical.

### Elimination strategy
When you see commas on both sides of a phrase, temporarily remove that phrase.
If the remaining sentence is grammatical and complete, the commas may be functioning as a pair.
If removing the phrase destroys the intended identification of the noun, reconsider whether the information is essential.`
    },
    {
      id: 'tb1-c14',
      title: '14. Do Not Count Commas',
      fullText: `A common but weak strategy is:
> "There is already a comma in the sentence, so I probably need another comma."

Punctuation is determined by **structure**, not by visual symmetry alone.

For example:
> After analyzing the satellite telemetry, oceanographers concluded that the thermohaline circulation had slowed.

The first comma separates an introductory phrase from the main clause. That does not mean another comma belongs later.

Likewise:
> Oceanographers, after analyzing the satellite telemetry, concluded that the thermohaline circulation had slowed.

Here the phrase is inserted into the middle of the sentence between the subject and verb and therefore uses a pair of commas.`
    },
    {
      id: 'tb1-c15',
      title: '15. The Punctuation Decision Tree',
      fullText: `Use this sequence on difficult questions:

### Step 1 — Locate the blank
Is it between two clauses, inside a noun phrase, around an inserted phrase, after an introductory element, or before a list/explanation?

### Step 2 — Test both sides
Can the material on each side stand as a sentence?

### Step 3 — Look for a conjunction
If two independent clauses are joined by **and, but, or, nor, for, yet, so**, consider: **comma + conjunction**.

### Step 4 — Look for a conjunctive adverb
If you see *however, therefore, consequently, nevertheless*, consider: **semicolon + transition + comma**.

### Step 5 — Ask whether the second part explains the first
If the material after the blank specifies, explains, or elaborates on a complete preceding thought, consider a **colon**.

### Step 6 — Remove optional information
If an inserted phrase can be removed without destroying the sentence's grammatical core, determine whether it is nonessential.

### Step 7 — Test "no punctuation"
Never eliminate it merely because the sentence contains a long phrase.`
    },
    {
      id: 'tb1-c16',
      title: '16. A Critical Hierarchy for Elimination',
      fullText: `When multiple answers seem plausible, eliminate in this order:

### First: Structural impossibility
Reject any punctuation that creates an invalid clause boundary.

### Second: Grammatical incompatibility
Reject punctuation that incorrectly separates elements that belong together.

### Third: Relationship mismatch
If both options are grammatically possible, determine whether the relationship is explanation, contrast, result, addition, specification, or interruption.

### Fourth: Minimal punctuation
When no punctuation is required, do not add punctuation merely because it creates a noticeble pause.`
    },
    {
      id: 'tb1-c17',
      title: '17. The Core Mental Model & Checkpoint',
      fullText: `Think of punctuation as a system of **boundaries and relationships**.

A punctuation mark answers a structural question:
* **Comma** → usually a local separator or part of a larger construction.
* **Semicolon** → separates two closely related independent clauses.
* **Colon** → introduces an explanation, specification, example, or elaboration after a complete thought.
* **Dash** → can create a strong interruption or introduce emphatic elaboration.
* **No punctuation** → sometimes the strongest answer because the grammatical relationship does not require a boundary.

Memorize what each mark is allowed to **connect**.

---
# BLOCK 1 CHECKPOINT
Before moving to the next block, verify that you can answer:
1. Can both sides of the blank stand independently?
2. If so, is there a coordinating conjunction?
3. If there is a transition such as "however," what punctuation structure follows?
4. Does the second clause explain the first?
5. Is the phrase essential or merely additional?
6. Is the punctuation actually separating two grammatical units?
7. Could no punctuation be correct?`
    }
  ]
};

export const THEORY_BLOCK_2: WritingTheoryBlock = {
  blockNumber: 2,
  title: 'Commas: The Complete Structural System',
  description: 'Mastering Comma Boundaries, Nonessential Information, Lists, Appositives, and Prohibitions',
  concepts: [
    {
      id: 'tb2-c1',
      title: '18. The Comma Is Not a Universal Pause Mark',
      fullText: `The most dangerous comma misconception is:
> "Put a comma wherever you would pause while reading."

That method fails because spoken pauses and written grammar are not identical.
A reader may naturally pause in a sentence even though no comma belongs there. Conversely, a comma may be grammatically required even when a reader would barely pause.

For SAT questions, therefore:
> **Do not hear the sentence first. Analyze its structure first.**`
    },
    {
      id: 'tb2-c2',
      title: '19. Comma After an Introductory Clause',
      fullText: `A dependent clause placed before an independent clause is commonly followed by a comma.

Example:
> Although the municipal water authority completed the aqueduct repairs, urban engineers continued monitoring pipeline pressure.

The introductory clause is *Although the municipal water authority completed the aqueduct repairs*.
The main clause is *urban engineers continued monitoring pipeline pressure*.

### Compare the reverse order
> Urban engineers continued monitoring pipeline pressure although the municipal water authority had completed the aqueduct repairs.

Here the dependent clause follows the main clause, and a comma is generally unnecessary.

### Useful pattern
> Dependent clause, independent clause.
versus:
> Independent clause dependent clause.`
    },
    {
      id: 'tb2-c3',
      title: '20. Introductory Phrases',
      fullText: `The same principle applies to introductory phrases.

Example:
> After deciphering the fragmentary cuneiform tablets, the Assyriologist revised the chronological dynasty charts.

Another example:
> In the final movement of the symphonic suite, the composer reintroduced the melancholy oboe motif.

### But do not turn this into a blind rule
Not every phrase at the beginning of a sentence requires a comma simply because it is at the beginning.
The question is whether the phrase functions as an introductory modifier or is tightly integrated into the sentence.`
    },
    {
      id: 'tb2-c4',
      title: '21. The Dangling Modifier Connection',
      fullText: `Consider:
> After analyzing the satellite telemetry, several unexpected thermal anomalies were discovered.

Who analyzed the satellite telemetry? Grammatically, the sentence makes *several unexpected thermal anomalies* the subject performing the action. That is illogical.

A stronger version is:
> After analyzing the satellite telemetry, oceanographers discovered several unexpected thermal anomalies.

### SAT strategy
Whenever a sentence begins with *After..., Before..., Having..., While..., When..., By...*, immediately identify the noun that follows the comma.
Ask: **Can that noun logically perform the introductory action?**`
    },
    {
      id: 'tb2-c5',
      title: '22. Commas Around Nonessential Information',
      fullText: `When a phrase or clause is inserted as additional information, it is commonly set off with commas.

Example:
> The James Webb Space Telescope, which was launched on Christmas Day in 2021, orbits the Sun at the second Lagrange point.

Remove the inserted clause:
> The James Webb Space Telescope orbits the Sun at the second Lagrange point.
The core remains intact.

### The two-comma principle
If nonessential information occurs in the middle of a sentence, it normally needs:
> comma + information + comma

A single comma often creates an incomplete boundary:
*Incorrect:* The James Webb Space Telescope, which was launched on Christmas Day in 2021 orbits the Sun at the second Lagrange point.`
    },
    {
      id: 'tb2-c6',
      title: '23. Essential Information Should Not Be Trapped in Commas',
      fullText: `Compare:
> The urban redevelopment initiative that increased public transit access revitalized the waterfront district.

Here *that increased public transit access* identifies which specific initiative. It is essential. Therefore, no commas.

This gives us one of the most important contrasts in punctuation:
> **Essential → integrated (no commas)**
> **Nonessential → set off (paired commas)**`
    },
    {
      id: 'tb2-c7',
      title: '24. Commas in Lists',
      fullText: `Commas separate coordinate elements in a series.

Example:
> The architectural restoration required limewash mortar, hand-hewn timber beams, and artisanal terracotta tiles.

The final comma before **and** is often called the Oxford comma or serial comma.

### More complicated list
> The economic report evaluated inflationary pressure in urban centers, agricultural yields across the Midwest, and supply-chain friction at coastal ports.

Each item is relatively complex. The commas make the boundaries between list elements visible.`
    },
    {
      id: 'tb2-c8',
      title: '25. Do Not Insert Commas Between Subject and Verb',
      fullText: `This is one of the most reliable eliminations on the SAT.

*Incorrect:* The evolutionary biologist who mapped the avian lineage, published the monograph.
*Correct:* The evolutionary biologist who mapped the avian lineage published the monograph.

### The long-subject trap
SAT sentences often make the subject extremely long:
> The team of structural engineers from three municipal consortiums who inspected the suspension cables...

Do not assume a comma belongs before the verb merely because the subject has become long.`
    },
    {
      id: 'tb2-c9',
      title: '26. Do Not Insert a Comma Between Verb and Its Object',
      fullText: `Consider:
> The archival curator preserved the illuminated medieval manuscripts from Flanders.

Do not write:
*The archival curator preserved, the illuminated medieval manuscripts from Flanders.*

The direct object *the illuminated medieval manuscripts* belongs directly to the transitive verb *preserved*. A comma cannot arbitrarily separate them.`
    },
    {
      id: 'tb2-c10',
      title: '27. Do Not Separate a Preposition from Its Object',
      fullText: `Consider:
> Marine geologists extracted core samples from the Mariana Trench.

Do not write: *Marine geologists extracted core samples from, the Mariana Trench.*
Nor: *extracted, core samples...*

> **Do not separate words that form a tight grammatical unit.**`
    },
    {
      id: 'tb2-c11',
      title: '28. Commas with Appositives & The Appositive Trap',
      fullText: `An **appositive** is a noun or noun phrase that renames or further identifies another noun.

Example:
> Rosalind Franklin, a pioneering biophysicist, produced crucial X-ray diffraction images of DNA.

Because it is presented as supplementary description, it is surrounded by commas.

### The Appositive Trap
Do not assume every noun immediately following another noun is an appositive needing commas.

Consider:
> The biophysicist Rosalind Franklin produced crucial X-ray diffraction images.

Here the proper noun identifies the person directly.
Ask: **Is the information necessary to identify the noun in context?**`
    },
    {
      id: 'tb2-c12',
      title: '29. Commas with Coordinate Adjectives',
      fullText: `Sometimes two adjectives independently modify the same noun.

Example:
> The excavation uncovered an intricate, remarkably well-preserved Roman mosaic.

### The adjective test
Try inserting **and** between the adjectives. If the sentence remains natural (*an intricate and remarkably well-preserved mosaic*), the adjectives are coordinate and take a comma.

But:
> ancient bronze coins
does not naturally become *ancient and bronze coins*. Therefore, no comma.`
    },
    {
      id: 'tb2-c13',
      title: '30. Commas with Direct Address, Dates, Places, and Checkpoint',
      fullText: `A comma can separate a person's name when directly addressing that person (*Delegates, review the treaty draft carefully*).

Punctuation also separates components of dates and geographic information (*Kyoto, Japan*).

### The Comma Pair Test & Most Powerful Comma Elimination Rule
When choosing between **comma** and **no punctuation**, do not ask *"Would I pause here?"*
Ask: **"What grammatical structure requires this comma?"** If you cannot identify one, **no punctuation** becomes a serious candidate.

---
# BLOCK 2 CHECKPOINT
You should now be able to recognize:
* Comma after introductory dependent clauses and phrases
* Comma pairs around nonessential information & appositives
* Commas separating list elements and coordinate adjectives
* Comma + coordinating conjunction between independent clauses
* Why commas CANNOT arbitrarily separate subject-verb, verb-object, or preposition-object`
    }
  ]
};

export const THEORY_BLOCK_3: WritingTheoryBlock = {
  blockNumber: 3,
  title: 'Semicolons, Colons, and Clause Boundaries',
  description: 'The Complete Rules for Semicolons, Colons, Transitions, and Boundary Elimination',
  concepts: [
    {
      id: 'tb3-c1',
      title: '36. Semicolons: The Complete Structural Rule',
      fullText: `A semicolon has one central SAT function:
> **It can separate two independent clauses that are closely related.**

Consider:
> The initial spectroscopic analysis revealed sulfur dioxide plumes; atmospheric physicists promptly revised their volcanic eruption models.

Test both sides independently:
Left: *The initial spectroscopic analysis revealed sulfur dioxide plumes.* (Complete)
Right: *Atmospheric physicists promptly revised their volcanic eruption models.* (Complete)

Therefore, the semicolon is structurally valid.`
    },
    {
      id: 'tb3-c2',
      title: '37. What a Semicolon Cannot Do',
      fullText: `A semicolon CANNOT normally separate:
* a dependent clause from an independent clause
* a subject from its verb
* a verb from its object
* a preposition from its object
* two ordinary elements in a list
* an incomplete phrase from a complete clause

Consider:
> Atmospheric physicists revised their volcanic models; because the spectroscopic analysis had revealed sulfur dioxide plumes.

The material after the semicolon begins with **because** and is dependent. Therefore, the semicolon creates an invalid boundary.`
    },
    {
      id: 'tb3-c3',
      title: '38. The "Period Test" for Semicolons',
      fullText: `When you see a semicolon answer choice, replace it mentally with a period.
If both resulting sentences are grammatically complete, the semicolon may be valid.

Example:
> The Rijksmuseum restored the Rembrandt portrait; conservators removed yellowed varnish applied in the nineteenth century.

Replace:
> The Rijksmuseum restored the Rembrandt portrait. Conservators removed yellowed varnish applied in the nineteenth century.
Both work. Therefore, the semicolon passes the structural test.`
    },
    {
      id: 'tb3-c4',
      title: '39. But the Period Test Is Not Enough',
      fullText: `A semicolon being grammatically possible does not automatically mean it is the best answer.

Suppose:
> The acoustic survey revealed one critical architectural defect ___ the vaulted ceiling produced harsh flutter echoes.

A semicolon could technically connect them, but a **colon** expresses the intended relationship more precisely:
> The acoustic survey revealed one critical architectural defect: the vaulted ceiling produced harsh flutter echoes.

The second clause explains or specifies the "one critical architectural defect."

> **First determine grammatical compatibility. Then determine rhetorical relationship.**`
    },
    {
      id: 'tb3-c5',
      title: '40. Semicolon + Conjunctive Adverb',
      fullText: `A common SAT construction is:
> **Independent clause; conjunctive adverb, independent clause.**

Conjunctive adverbs include: *however, therefore, consequently, nevertheless, moreover, furthermore, instead, meanwhile, similarly*.

Example:
> The architectural blueprint promised passive geothermal heating; however, the building envelope suffered substantial thermal leakage during winter trials.

The semicolon handles the boundary between the clauses. The comma after **however** handles the internal punctuation of the transition.`
    },
    {
      id: 'tb3-c6',
      title: '41. The Transition Does Not Join the Clauses by Itself',
      fullText: `Consider:
> The architectural blueprint promised passive geothermal heating, however, the building envelope suffered substantial thermal leakage during winter trials.

The word **however** expresses a contrast, but it does not function like **but**.
Therefore, the comma before **however** cannot independently join the two independent clauses.

If an answer choice contains **comma + however + comma** between two independent clauses, **eliminate it**.`
    },
    {
      id: 'tb3-c7',
      title: '42. Colons: A Different Job & The Complete-Thought Rule',
      fullText: `A colon should not be treated as a stronger semicolon. Its central function is:
> **A colon introduces material that explains, specifies, illustrates, or elaborates on what precedes it.**

Example:
> The forensic accountant discovered a glaring irregularity: off-balance-sheet liabilities were concealed in offshore subsidiaries.

### The Complete-Thought Rule for Colons
> **The material before a colon must be able to stand as a complete grammatical thought.**

*Incorrect:* The forensic accountant discovered: that liabilities were concealed in offshore subsidiaries. (*The forensic accountant discovered* is incomplete).
*Correct:* The forensic accountant discovered a glaring irregularity: off-balance-sheet liabilities were concealed in offshore subsidiaries.`
    },
    {
      id: 'tb3-c8',
      title: '43. The Colon "What?" & Lists/Explanations',
      fullText: `A useful mental question for colons is:
> **"What exactly is the material after the colon doing?"**

If it answers *What problem? What result? What example? What explanation? What specifically?*, then a colon is appropriate.

### Colons Can Introduce Lists OR Explanations
> The restoration project required three specialized artisans: a stained-glass glazier, a timber-framing carpenter, and a master stonemason.

*Trap:* Do not use a colon merely because a list follows if the preceding material is incomplete (*The restoration project required: a stained-glass glazier...* is WRONG).`
    },
    {
      id: 'tb3-c9',
      title: '44. Dashes: The Strong Boundary & Single vs. Pair',
      fullText: `A dash can create a strong interruption or introduce elaborating information.

Example:
> Deep-sea submersibles discovered an astonishing benthic ecosystem—hydrothermal vent fields thriving in complete darkness.

A single dash introduces material after a complete thought.
A pair of dashes surrounds inserted parenthetical information:
> The symphony orchestra's acoustics—which had been meticulously calibrated using laser interferometry—produced immaculate tonal balance.`
    },
    {
      id: 'tb3-c10',
      title: '45. The Three-Level Punctuation Filter & Checkpoint',
      fullText: `For difficult punctuation questions, use three filters:
1. **Filter 1 — Grammar:** Can the punctuation legally create the boundary?
2. **Filter 2 — Structure:** Does the punctuation correctly connect the grammatical units?
3. **Filter 3 — Meaning:** Does the punctuation express the relationship intended by the sentence?

---
# BLOCK 3 CHECKPOINT
You should now be able to distinguish:
* Semicolon between independent clauses
* Semicolon + conjunctive adverb vs. comma + coordinating conjunction
* Colon after a complete thought introducing explanations or lists
* Dash as a strong boundary or paired dashes around parenthetical material`
    }
  ]
};

export const THEORY_BLOCK_4: WritingTheoryBlock = {
  blockNumber: 4,
  title: 'Advanced Punctuation Boundaries and Mixed Constructions',
  description: 'Boundary Inventory Method, Nested Punctuation, Scope, and Deconstruction',
  concepts: [
    {
      id: 'tb4-c1',
      title: '64. When Several Punctuation Rules Appear at Once',
      fullText: `The hardest SAT punctuation questions often contain more than one possible issue.

Example:
> Although the initial archaeological trench yielded only fragmented pottery shards ___ the excavation team uncovered a major discovery ___ a ceremonial limestone sarcophagus lay undisturbed beneath the bedrock.

There are two boundaries:
* Boundary 1: *Although the initial archaeological trench yielded only fragmented pottery shards* → dependent clause to main clause (requires comma).
* Boundary 2: *uncovered a major discovery* → complete thought to explanation (requires colon).

### Elite method
Solve each boundary independently rather than simultaneously.`
    },
    {
      id: 'tb4-c2',
      title: '65. The Boundary Inventory Method',
      fullText: `For advanced questions, mentally label every major boundary.

Example:
> After analyzing the satellite telemetry, oceanographers identified one major anomaly: surface salinity had plummeted across the subpolar gyre.

Inventory:
* **Boundary A:** *After analyzing the satellite telemetry | oceanographers...* (Introductory phrase → comma)
* **Boundary B:** *one major anomaly | surface salinity...* (Complete thought → explanation → colon)

This method prevents you from confusing two completely different punctuation rules.`
    },
    {
      id: 'tb4-c3',
      title: '67. Nested Punctuation & Punctuation Scope',
      fullText: `Sometimes punctuation appears inside a sentence that already contains another punctuation structure.

Example:
> Urban planners identified three chronic challenges—inadequate storm drainage, aging electrical grids, and fractured transit corridors—that constrained downtown expansion.

The sentence contains:
* a dash opening an inserted/explanatory structure
* commas separating items in a list
* a second dash closing the inserted structure

The commas belong to the list. The dashes belong to the larger interruption.
Do not treat all punctuation marks as competing alternatives—they perform different jobs simultaneously.`
    },
    {
      id: 'tb4-c4',
      title: '69. The "Remove the Middle" Technique',
      fullText: `When you see paired punctuation around an inserted phrase, temporarily remove the middle.

Example:
> The revised monetary policy—which had been debated extensively in parliamentary hearings—stabilized sovereign bond yields.

Remove: *which had been debated extensively in parliamentary hearings*
Remaining sentence: *The revised monetary policy stabilized sovereign bond yields.*

It works! Therefore, the dashes are functioning as a pair around an interruption.`
    },
    {
      id: 'tb4-c5',
      title: '70. Single-Comma and Single-Dash Traps',
      fullText: `*Incorrect:* The revised monetary policy, which had been debated extensively in parliamentary hearings stabilized sovereign bond yields.
(Missing closing comma!)

*Incorrect:* The revised monetary policy—which had been debated extensively in parliamentary hearings stabilized sovereign bond yields.
(Missing closing dash!)

Opening and closing marks must create a coherent grammatical enclosure.`
    },
    {
      id: 'tb4-c6',
      title: '73. Punctuation Around "Which" vs. "That"',
      fullText: `Do not memorize *which = comma* mechanically. Instead ask: **Is the clause essential or nonessential?**

Example:
> The ecological survey, which was published in *Nature Climate Change*, documented migratory shifts in boreal bird species. (Nonessential → commas)
> The ecological survey that documented migratory shifts in boreal bird species influenced international conservation policy. (Essential → no commas)`
    },
    {
      id: 'tb4-c7',
      title: '85. The Complete-Clause Scan & Checkpoint',
      fullText: `For a difficult punctuation question, underline mentally:
> **Subject → main verb**
Then repeat on the other side of the blank.

Decompose long sentences into:
1. Introductory dependent clause
2. Main clause
3. Inserted information
4. Explanation

---
# SECTION 4 CHECKPOINT
Before proceeding, you should be able to:
* Identify independent clauses inside long sentences
* Distinguish compound predicates and subjects from separate clauses
* Recognize paired punctuation (commas, dashes, parentheses)
* Solve multiple punctuation boundaries independently`
    }
  ]
};

export const THEORY_BLOCK_5: WritingTheoryBlock = {
  blockNumber: 5,
  title: 'Apostrophes, Possession, and Pronoun Punctuation',
  description: 'Singular & Plural Possessives, Contractions vs. Possessive Pronouns, and The 3-Question System',
  concepts: [
    {
      id: 'tb5-c1',
      title: '89. Apostrophes Do Not Make Words Plural',
      fullText: `The first rule is simple:
> **An apostrophe does not normally make an ordinary noun plural.**

*Incorrect:* The climatologist's published three monographs on polar vortex dynamics.
*Correct:* The climatologists published three monographs on polar vortex dynamics.

Ask: **Is the sentence talking about one climatologist, multiple climatologists, or something belonging to one or more climatologists?**`
    },
    {
      id: 'tb5-c2',
      title: '90. Singular Possession vs. Plural Possession',
      fullText: `### Singular Possession: noun + 's
> the botanist's field journal
> the university's archival vault

### Plural Possession: plural noun + '
> the botanists' classifications (= classifications made by multiple botanists)

Compare:
* *the architect's blueprints* = associated with ONE architect
* *the architects' blueprints* = associated with MULTIPLE architects`
    },
    {
      id: 'tb5-c3',
      title: '93. Irregular Plural Possessives',
      fullText: `Some plural nouns do not end in **s** (*children, people, men, women*).
Their possessive forms use **'s**:
> children's literature
> people's democratic assemblies
> women's suffrage movements

The apostrophe follows the form of the noun, not a simplistic "plural = apostrophe after s" rule.`
    },
    {
      id: 'tb5-c4',
      title: '98. "Its" Versus "It\'s" & The Expansion Test',
      fullText: `This is one of the most tested distinctions on the SAT.

* **Its** = possessive pronoun (*The European Space Agency launched its second orbital reconnaissance probe.*)
* **It\'s** = contraction of *it is* or *it has* (*It's imperative to stabilize the containment vessel before pressure surges.*)

### The Expansion Test
Replace **it\'s** with **it is** or **it has**. If the sentence remains grammatical and logical, the contraction is possible. If not, use **its** for the possessive form.`
    },
    {
      id: 'tb5-c5',
      title: '100. "Their" vs. "They\'re" vs. "There"',
      fullText: `* **They\'re** = *they are* (*They're presenting their macroeconomic forecast to the finance ministry.*)
* **Their** = belonging to them (*Their forensic audit uncovered fiscal mismanagement.*)
* **There** = indicates a place or introduces an existential expression (*There are profound systemic differences between Keynesian and monetarist models.*)

### Possessive Pronouns DO NOT Use Apostrophes!
* **its, yours, ours, theirs, hers, whose** → NO APOSTROPHE!
* **it\'s, you\'re, who\'s** → contractions!`
    },
    {
      id: 'tb5-c6',
      title: '105. The Three-Question Apostrophe System & Checkpoint',
      fullText: `Whenever an apostrophe appears in an answer choice, ask:

1. **Question 1:** Is this a contraction? (If yes, expand it).
2. **Question 2:** Is the noun possessive? (If yes, determine singular or plural).
3. **Question 3:** If neither, why is the apostrophe present? (If no grammatical reason, eliminate it!).

---
# BLOCK 5 CHECKPOINT
You should now be able to distinguish:
* Singular nouns from singular possessives
* Plural nouns from plural possessives
* Contractions (*it's, you're, who's*) from possessive forms (*its, your, whose*)`
    }
  ]
};

export const THEORY_BLOCK_6: WritingTheoryBlock = {
  blockNumber: 6,
  title: 'Quotation Marks, Parentheses, Hyphens, and Punctuation Interaction',
  description: 'Quotation Conventions, Hyphens vs. Dashes, Capitalization Rules, and The Punctuation Stack',
  concepts: [
    {
      id: 'tb6-c1',
      title: '111. Quotation Marks & Direct Quotes vs. Paraphrase',
      fullText: `Quotation marks identify directly quoted language or terms discussed as words.
They should NOT be added simply because a phrase feels important or for decorative emphasis.

Compare:
* *The economist argued that fiscal stimulus had accelerated private capital investment.* (Paraphrase → no quotes)
* *The economist argued, "Fiscal stimulus has accelerated private capital investment."* (Direct quote → quotation marks)`
    },
    {
      id: 'tb6-c2',
      title: '116. Parentheses vs. Commas vs. Dashes',
      fullText: `Parentheses, commas, and dashes can all enclose supplementary information.
* **Commas** → integrate information naturally into the sentence.
* **Parentheses** → make information explicitly supplementary, parenthetical, or statistical (*e.g., carbon emissions dropped by 18 percent [Figure 3]*).
* **Dashes** → create strong, emphatic breaks.

Parentheses must always be balanced: an opening parenthesis requires a closing parenthesis.`
    },
    {
      id: 'tb6-c3',
      title: '119. Hyphens Connect Words',
      fullText: `A **hyphen** connects words that function together as a compound modifier before a noun:
> a well-documented historical manuscript
> high-altitude weather balloons

Do NOT hyphenate adverbs ending in **-ly**:
*Correct:* a rapidly deteriorating ecosystem (NOT *rapidly-deteriorating*).`
    },
    {
      id: 'tb6-c4',
      title: '127. The "Punctuation Stack" & Capitalization Rules',
      fullText: `In complex sentences, imagine punctuation operating in layers:
* **Layer 1 (Word-level):** Apostrophes and hyphens
* **Layer 2 (Phrase-level):** Commas, parentheses, paired dashes
* **Layer 3 (Clause-level):** Commas with conjunctions, semicolons, colons

### Capitalization Principle
Do NOT capitalize a word merely because punctuation appears before it!
A semicolon or colon does NOT automatically create a new sentence—the following word remains lowercase unless it is a proper noun.`
    },
    {
      id: 'tb6-c5',
      title: '134. The "Can a Punctuation Mark Fix This?" Test & Audit',
      fullText: `When evaluating an answer choice, ask:
**If I insert this punctuation, does the grammatical relationship become valid?**

Perform the Punctuation Audit:
1. Is every clause properly bounded?
2. Are all paired punctuation marks closed?
3. Does every semicolon have independent clauses on both sides?
4. Does every colon follow a complete thought?
5. Does every apostrophe represent a valid contraction or possessive?

---
# BLOCK 6 CHECKPOINT
You should now understand:
* Direct quotation versus paraphrase
* Hyphen versus em dash
* Punctuation interaction with capitalization
* The 5-Question Elite Check and Punctuation Audit`
    }
  ]
};
