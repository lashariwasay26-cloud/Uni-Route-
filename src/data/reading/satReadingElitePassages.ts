import { EliteReadingPassage } from './readingTypes';

export const SAT_READING_ELITE_PASSAGES: EliteReadingPassage[] = [
  {
    id: 'elite-passage-1',
    passageNumber: 1,
    title: 'The Gestural Scaffolding Hypothesis and the Genesis of Syntax',
    domain: 'Cognitive Science & Evolutionary Anthropology',
    difficulty: 'Elite 800-Level / High-Density',
    wordCount: 385,
    introductoryContext:
      'This passage is adapted from a recent treatise on evolutionary linguistics, examining competing hypotheses regarding how the capacity for recursive syntactic hierarchy evolved in early hominins.',
    structuralOutline: [
      { paragraphNumber: 1, role: 'Outlines the classical saltationist view vs. the continuous gestural scaffolding hypothesis.' },
      { paragraphNumber: 2, role: 'Presents empirical evidence from emergent sign languages and primate neuroanatomy.' },
      { paragraphNumber: 3, role: 'Explains the evolutionary transition from manual-spatial syntax to vocal speech articulation.' },
      { paragraphNumber: 4, role: 'Synthesizes conclusions and refutes the critique that gesture is merely secondary commentary.' },
    ],
    passageText: `[Paragraph 1]
For decades, theoretical linguistics remained dominated by the saltationist paradigm, which posited that human syntactic recursion—the unique capacity to nest linguistic clauses within hierarchical structures indefinitely—emerged nearly instantaneously via an isolated, catastrophic macromutation. Yet this sudden discontinuity model creates an evolutionary conundrum: complex computational adaptations rarely materialize in single, unsupported leaps without ancestral precursor scaffolds. In response, cognitive anthropologists have advanced the gestural scaffolding hypothesis, contending that the combinatorial architecture of language originated not in the vocal tract, but in the flexible kinematic dexterity of hominin manual gestures.

[Paragraph 2]
Compelling support for this model emerges from the observational dynamics of emergent sign systems. When deaf children with no access to conventional sign language are brought together in communal settings, as famously documented in the genesis of Nicaraguan Sign Language during the late twentieth century, the first generation establishes a rudimentary lexicon of holistic mimetic gestures. Crucially, however, subsequent cohorts do not merely augment vocabulary; they spontaneously decompose continuous actions into discrete, recombinant morphological units and order them into rule-governed hierarchical syntax. Neuroimaging corroborates this manual-to-vocal phylogenetic trajectory: the homologue of Broca's area in chimpanzees (Brodmann area 44) activates preferentially during intentional tool handling and communicative manual pointing rather than during involuntary emotional vocalizations.

[Paragraph 3]
The evolutionary transition from manual signs to acoustic speech was therefore neither a sudden re-invention of cognition nor an inexplicable mutation. Rather, the brain's premotor cortex had already spent hundreds of thousands of years developing hierarchical computational circuits to sequence multi-step physical tool production and manual signaling. Once this combinatorial syntax was firmly embedded in the neural architecture, it was gradually transferred to the vocal-auditory channel through fine-motor coordination of the laryngeal and supralaryngeal articulators—a shift that freed hominin hands for hunting, tool usage, and cooperative labor while conserving energy.

[Paragraph 4]
Critics of this hypothesis frequently counter that modern acoustic speech is universal and that manual gestures in contemporary spoken conversation serve merely as incidental expressive embellishments. However, this objection fundamentally conflates evolutionary lineage with contemporary manifestation. The fact that modern humans possess a fine-tuned vocal apparatus today does not invalidate the indispensable role of physical gesture as the original syntactic scaffold that made vocal recursion possible in the first place.`,
    questions: [
      {
        id: 'ep1-q1',
        questionNumber: 1,
        label: 'QUESTION 1 — CENTRAL CLAIM & THESIS',
        skillTag: 'Central Claim & Boundary Verification',
        difficulty: 'Elite Hard',
        prompt: 'Which statement best expresses the central claim of the passage?',
        options: [
          {
            label: 'A',
            text: 'Complex linguistic syntax evolved gradually through manual and gestural combinatorial circuits before being mapped onto the vocal apparatus.',
          },
          {
            label: 'B',
            text: 'Emergent sign languages demonstrate that human communication will naturally default to non-verbal gesture whenever acoustic speech is absent.',
          },
          {
            label: 'C',
            text: 'The saltationist paradigm has been completely disproven because non-human primates possess identical linguistic competencies in Broca’s area.',
          },
          {
            label: 'D',
            text: 'The primary purpose of modern spoken language is to reduce the energy expenditure previously required by elaborate manual signaling.',
          },
        ],
        correctAnswer: 'A',
        correctAnswerIndex: 0,
        whyCorrectTitle: 'WHY A IS THE AIRTIGHT ANSWER:',
        whyCorrect:
          'Option A directly captures the main thesis across all four paragraphs: that the computational architecture for recursive syntax originated in manual/gestural motor systems and was subsequently transferred to acoustic speech (Paragraph 1 & 3), resolving the evolutionary conundrum of sudden macromutation.',
        passageSupport:
          'Paragraph 1: "combinatorial architecture of language originated not in the vocal tract, but in the flexible kinematic dexterity of hominin manual gestures." Paragraph 3: "Once this combinatorial syntax was firmly embedded in the neural architecture, it was gradually transferred to the vocal-auditory channel..."',
        distractorExplanations: [
          {
            optionLabel: 'B',
            explanation:
              'Scope & Focus Error: Nicaraguan Sign Language is cited as an evidentiary example of syntactic decomposition (Paragraph 2), not as the primary overarching thesis of the passage.',
          },
          {
            optionLabel: 'C',
            explanation:
              'Extreme & Inaccurate: The passage notes that primates activate a homologue of Broca\'s area during manual gestures, but never claims primates possess "identical linguistic competencies" to humans.',
          },
          {
            optionLabel: 'D',
            explanation:
              'Secondary Detail Mischaracterization: Freeing hands and saving energy are mentioned as secondary evolutionary advantages of vocalization (Paragraph 3), not the primary purpose of language itself.',
          },
        ],
        eliminationShortcut:
          'Look for the option that integrates both the origin (manual gestural scaffolding) and the outcome (transference to vocal syntax), covering the whole passage without extreme tone.',
      },
      {
        id: 'ep1-q2',
        questionNumber: 2,
        label: 'QUESTION 2 — RHETORICAL FUNCTION',
        skillTag: 'Paragraph Function & Rhetorical Strategy',
        difficulty: 'Elite Hard',
        prompt: 'In the context of the argument, the author’s discussion of Nicaraguan Sign Language in paragraph 2 functions primarily to:',
        options: [
          {
            label: 'A',
            text: 'Illustrate how rapid cultural globalization can erode the traditional linguistic structures of isolated communities.',
          },
          {
            label: 'B',
            text: 'Provide empirical evidence that human cognitive systems naturally generate hierarchical, discrete syntax from holistic manual gestures.',
          },
          {
            label: 'C',
            text: 'Argue that young children learn grammatical conventions more effectively through physical demonstration than auditory instruction.',
          },
          {
            label: 'D',
            text: 'Demonstrate that primitive communicative gestures in ancestral hominins were structurally identical to modern vocabulary.',
          },
        ],
        correctAnswer: 'B',
        correctAnswerIndex: 1,
        whyCorrectTitle: 'WHY B IS THE AIRTIGHT ANSWER:',
        whyCorrect:
          'In Paragraph 2, the author shows that subsequent cohorts of deaf children spontaneously decomposed holistic mimetic gestures into discrete, recombinant morphological units and ordered them into rule-governed hierarchical syntax. This empirical case serves as direct proof that human cognitive systems generate syntax from manual gestures.',
        passageSupport:
          'Paragraph 2: "...subsequent cohorts do not merely augment vocabulary; they spontaneously decompose continuous actions into discrete, recombinant morphological units and order them into rule-governed hierarchical syntax."',
        distractorExplanations: [
          {
            optionLabel: 'A',
            explanation:
              'Irrelevant Concept: The passage discusses the spontaneous creation of a sign language in a communal school, not the erosion of traditional structures by globalization.',
          },
          {
            optionLabel: 'C',
            explanation:
              'Real-World Distractor: While pedagogy is an educational topic in real life, the passage is about evolutionary syntax genesis, not classroom instruction techniques.',
          },
          {
            optionLabel: 'D',
            explanation:
              'Opposite Direction: The passage explicitly states the first generation used "rudimentary... holistic mimetic gestures" and only subsequent generations decomposed them into structured syntax.',
          },
        ],
        eliminationShortcut:
          'Ask: What point does this example prove for the author\'s main argument? It proves that syntax can arise spontaneously out of gesture.',
      },
      {
        id: 'ep1-q3',
        questionNumber: 3,
        label: 'QUESTION 3 — LOGICAL INFERENCE',
        skillTag: 'Inference & Boundary Implication',
        difficulty: 'Elite Hard',
        prompt: 'Based on the passage, the author would most likely agree that the saltationist macromutation hypothesis is conceptually weak because it:',
        options: [
          {
            label: 'A',
            text: 'Relies on an abrupt genetic rupture that lacks plausible intermediate evolutionary precursors.',
          },
          {
            label: 'B',
            text: 'Fails to account for the observation that modern human languages exhibit diverse grammatical rules.',
          },
          {
            label: 'C',
            text: 'Assumes that Neanderthals and modern humans shared identical vocal tract anatomy.',
          },
          {
            label: 'D',
            text: 'Overemphasizes the role of physical tools at the expense of social cohesion in early hominins.',
          },
        ],
        correctAnswer: 'A',
        correctAnswerIndex: 0,
        whyCorrectTitle: 'WHY A IS THE AIRTIGHT ANSWER:',
        whyCorrect:
          'Paragraph 1 explicitly outlines the critique: "complex computational adaptations rarely materialize in single, unsupported leaps without ancestral precursor scaffolds." Therefore, a hypothesis requiring an instantaneous macromutation without precursors is evolutionary implausible compared to continuous gestural scaffolding.',
        passageSupport:
          'Paragraph 1: "...this sudden discontinuity model creates an evolutionary conundrum: complex computational adaptations rarely materialize in single, unsupported leaps without ancestral precursor scaffolds."',
        distractorExplanations: [
          {
            optionLabel: 'B',
            explanation:
              'Out of Scope: The diversity of modern grammars is never discussed or used to evaluate the saltationist theory.',
          },
          {
            optionLabel: 'C',
            explanation:
              'False Detail: Neanderthal vocal anatomy is completely unmentioned in the passage.',
          },
          {
            optionLabel: 'D',
            explanation:
              'Inversion: Tool production is actually cited by the author as evidence FOR gestural neural wiring (Paragraph 3), not something overemphasized by saltationists.',
          },
        ],
        eliminationShortcut:
          'Match the conceptual reason explicitly stated in Paragraph 1: sudden evolutionary leaps without scaffolds are implausible.',
      },
      {
        id: 'ep1-q4',
        questionNumber: 4,
        label: 'QUESTION 4 — TRAP DIAGNOSTICS & RHETORIC',
        skillTag: 'Trap Diagnostics & Counter-Argument Dissection',
        difficulty: 'Elite Hard',
        prompt: 'In paragraph 4, the author refutes critics who dismiss the gestural hypothesis primarily by:',
        options: [
          {
            label: 'A',
            text: 'Providing acoustic spectrograms that reveal hidden manual frequencies within normal spoken conversation.',
          },
          {
            label: 'B',
            text: 'Asserting that modern speech continues to be significantly less expressive than ancient gestural communication.',
          },
          {
            label: 'C',
            text: 'Exposing a logical error that confuses the present utility of a trait with the historical process of its origin.',
          },
          {
            label: 'D',
            text: 'Conceding that acoustic speech and manual gesture must have evolved completely independently of each other.',
          },
        ],
        correctAnswer: 'C',
        correctAnswerIndex: 2,
        whyCorrectTitle: 'WHY C IS THE AIRTIGHT ANSWER:',
        whyCorrect:
          'In Paragraph 4, the author directly exposes the fallacy of the critics: "this objection fundamentally conflates evolutionary lineage with contemporary manifestation. The fact that modern humans possess a fine-tuned vocal apparatus today does not invalidate the indispensable role of physical gesture as the original syntactic scaffold..." This is precisely pointing out the error of confusing current function with historical lineage.',
        passageSupport:
          'Paragraph 4: "...this objection fundamentally conflates evolutionary lineage with contemporary manifestation."',
        distractorExplanations: [
          {
            optionLabel: 'A',
            explanation:
              'Absurd Distortion: Spectrograms of manual frequencies are scientific nonsense not mentioned in the text.',
          },
          {
            optionLabel: 'B',
            explanation:
              'Extreme & Unsupported: The author never claims modern speech is less expressive than ancient gesture.',
          },
          {
            optionLabel: 'D',
            explanation:
              'Opposite of Author\'s Stance: The author explicitly argues they did NOT evolve independently, but sequentially from manual to vocal.',
          },
        ],
        eliminationShortcut:
          'Locate the exact word in paragraph 4: "conflates evolutionary lineage with contemporary manifestation" = confusing present utility with origin.',
      },
    ],
  },
  {
    id: 'elite-passage-2',
    passageNumber: 2,
    title: 'On the Epistemic Frailty of Majoritarian Consensus',
    domain: 'Political Philosophy & Intellectual History',
    difficulty: 'Elite 800-Level / High-Density',
    wordCount: 395,
    introductoryContext:
      'This passage is adapted from an analytical essay on nineteenth-century democratic theory and the subtle mechanisms of intellectual conformity in egalitarian societies.',
    structuralOutline: [
      { paragraphNumber: 1, role: 'Contrasts historical despotic coercion with the subtle tyranny of democratic consensus.' },
      { paragraphNumber: 2, role: 'Analyzes the psychological mechanism of self-censorship under majority social pressure.' },
      { paragraphNumber: 3, role: 'Examines the paradox of mass literacy: widespread information leading to homogenized thought.' },
      { paragraphNumber: 4, role: 'Concludes with a warning about epistemic stagnation and the necessity of dissenting friction.' },
    ],
    passageText: `[Paragraph 1]
When historical observers scrutinized ancient absolute monarchies, the mechanisms of tyranny were conspicuously visible: the dungeon, the executioner's block, and the violent suppression of seditious speech. Under such crude regimes, oppression operated through physical violence upon the body while the dissident's internal intellect remained sovereign and defiant. In modern egalitarian democracies, however, intellectual subjugation assumes an infinitely more insidious character. The democratic majority does not need to brandish chains or enact inquisitorial statutes; instead, it erects an invisible epistemic perimeter around acceptable thought.

[Paragraph 2]
The tyranny of the majority operates not by punishing heresy post-facto, but by preemptively sterilizing the impulse toward unorthodox contemplation. In a society predicated upon the formal equality of all citizens, the individual instinctively feels small, isolated, and powerless when standing in opposition to the collective judgment. Truth is insensibly equated with statistical frequency: if ninety-nine citizens proclaim a proposition, the single dissenter doubts not the collective sanity of the ninety-nine, but the soundness of his own private reason. The dissident is not dragged to the scaffold; rather, he is enveloped in a chilling social indifference, deprived of influence, and gently ostracized until he voluntarily retreats into self-censorship.

[Paragraph 3]
This phenomenon produces a peculiar democratic paradox regarding literacy and mass communication. Optimistic reformers maintained that universal education and widespread newspapers would irrevocably inoculate populations against demagoguery and intellectual stagnation. Yet mass dissemination frequently achieves the exact inverse: by standardizing the informational diet, it homogenizes the categories through which citizens conceptualize reality. Rather than fostering millions of idiosyncratic, independent thinkers, mass media creates vast, synchronized echo chambers wherein identical phrases, anxieties, and orthodoxies are repeated simultaneously across a continent.

[Paragraph 4]
A society that has eliminated all institutional barriers to free expression may nonetheless experience profound intellectual atrophy. When the friction of vigorous, heterodox dissent is extinguished not by state decree but by the quiet terror of social disapproval, intellectual progress grinds to a halt. Genuine philosophical breakthroughs and scientific revolutions have historically required an abrasive resistance to reigning consensus; without deliberate protection for epistemic outliers, democratic societies risk suffocating in comfortable unanimity.`,
    questions: [
      {
        id: 'ep2-q1',
        questionNumber: 1,
        label: 'QUESTION 1 — PRIMARY PURPOSE & OVERARCHING OBJECTIVE',
        skillTag: 'Author\'s Purpose & Argumentative Scope',
        difficulty: 'Elite Hard',
        prompt: 'The primary purpose of the passage is to:',
        options: [
          {
            label: 'A',
            text: 'Advocate for the reinstatement of monarchical governance to protect elite intellectual discourse from the masses.',
          },
          {
            label: 'B',
            text: 'Critique how social consensus and psychological conformity in democratic societies can stifle independent thought without formal coercion.',
          },
          {
            label: 'C',
            text: 'Demonstrate that universal literacy programs have failed primarily because of economic disparities in textbook distribution.',
          },
          {
            label: 'D',
            text: 'Prove that scientific revolutions can only take place in authoritarian societies with centralized academies.',
          },
        ],
        correctAnswer: 'B',
        correctAnswerIndex: 1,
        whyCorrectTitle: 'WHY B IS THE AIRTIGHT ANSWER:',
        whyCorrect:
          'Across all four paragraphs, the author analyzes how majoritarian consensus in egalitarian democracies enforces an "invisible epistemic perimeter" that induces self-censorship and intellectual atrophy without physical violence. Option B accurately states this nuanced central thesis.',
        passageSupport:
          'Paragraph 1: "...intellectual subjugation assumes an infinitely more insidious character." Paragraph 2: "...preemptively sterilizing the impulse toward unorthodox contemplation... voluntarily retreats into self-censorship." Paragraph 4: "...quiet terror of social disapproval..."',
        distractorExplanations: [
          {
            optionLabel: 'A',
            explanation:
              'Extreme Mischaracterization: The author contrasts monarchies historically (Paragraph 1) to highlight modern psychological mechanisms, never advocating a return to monarchies.',
          },
          {
            optionLabel: 'C',
            explanation:
              'Irrelevant Detail: Economic disparities in textbook distribution are never mentioned; the critique of literacy focuses on standardized informational echo chambers (Paragraph 3).',
          },
          {
            optionLabel: 'D',
            explanation:
              'False Distortion: The author states scientific revolutions require resistance to consensus (Paragraph 4), not that they require authoritarian states.',
          },
        ],
        eliminationShortcut:
          'Eliminate extreme prescriptive claims (A, D) and unmentioned external causes (C). Option B cleanly captures the focus on psychological conformity without legal coercion.',
      },
      {
        id: 'ep2-q2',
        questionNumber: 2,
        label: 'QUESTION 2 — WORD IN CONTEXT & RHETORICAL ROLE',
        skillTag: 'Contextual Function & Rhetorical Nuance',
        difficulty: 'Elite Hard',
        prompt: 'In paragraph 2, the author’s remark that the dissenter "doubts not the collective sanity of the ninety-nine, but the soundness of his own private reason" serves to emphasize:',
        options: [
          {
            label: 'A',
            text: 'The statistical probability that majority votes invariably produce scientifically accurate outcomes.',
          },
          {
            label: 'B',
            text: 'The profound psychological weight of egalitarian numbers in eroding individual intellectual conviction.',
          },
          {
            label: 'C',
            text: 'The legal obligations of democratic minorities to obey parliamentary statutes.',
          },
          {
            label: 'D',
            text: 'The inability of solitary citizens to comprehend basic mathematical and statistical ratios.',
          },
        ],
        correctAnswer: 'B',
        correctAnswerIndex: 1,
        whyCorrectTitle: 'WHY B IS THE AIRTIGHT ANSWER:',
        whyCorrect:
          'The sentence illustrates how equality causes the individual to feel isolated and instinctively question their own judgment simply because they are outnumbered, demonstrating the psychological mechanism of conformity rather than genuine epistemic truth.',
        passageSupport:
          'Paragraph 2: "In a society predicated upon the formal equality of all citizens, the individual instinctively feels small, isolated, and powerless when standing in opposition to the collective judgment. Truth is insensibly equated with statistical frequency..."',
        distractorExplanations: [
          {
            optionLabel: 'A',
            explanation:
              'Opposite of Stance: The author is arguing that majoritarian belief does NOT guarantee truth, but merely creates an illusion of truth through statistical frequency.',
          },
          {
            optionLabel: 'C',
            explanation:
              'Category Error: The author is discussing internal epistemic doubt and self-censorship, not formal legal or parliamentary compliance.',
          },
          {
            optionLabel: 'D',
            explanation:
              'Literalist Misunderstanding: The 99 to 1 ratio is a rhetorical contrast of consensus vs. individual, not a test of arithmetic competence.',
          },
        ],
        eliminationShortcut:
          'Connect the quote to the paragraph\'s theme: the psychological pressure that causes individuals to doubt themselves when isolated.',
      },
      {
        id: 'ep2-q3',
        questionNumber: 3,
        label: 'QUESTION 3 — PARADOX & EVIDENCE ANALYSIS',
        skillTag: 'Rhetorical Organization & Argumentative Paradox',
        difficulty: 'Elite Hard',
        prompt: 'According to paragraph 3, the "democratic paradox" regarding mass literacy and media is that while these tools were intended to foster independent thought, they often:',
        options: [
          {
            label: 'A',
            text: 'Accelerate the proliferation of radical subversive ideologies that destabilize civil society.',
          },
          {
            label: 'B',
            text: 'Impose steep financial costs that exclude lower-income readers from political discourse.',
          },
          {
            label: 'C',
            text: 'Standardize concepts and language, reinforcing synchronized conformist orthodoxies on a vast scale.',
          },
          {
            label: 'D',
            text: 'Encourage excessive skepticism, causing citizens to reject all scientific authorities.',
          },
        ],
        correctAnswer: 'C',
        correctAnswerIndex: 2,
        whyCorrectTitle: 'WHY C IS THE AIRTIGHT ANSWER:',
        whyCorrect:
          'Paragraph 3 explicitly identifies the paradox: mass dissemination standardizes the informational diet, homogenizes categories of thought, and creates vast synchronized echo chambers repeating identical phrases and orthodoxies.',
        passageSupport:
          'Paragraph 3: "...by standardizing the informational diet, it homogenizes the categories through which citizens conceptualize reality... creates vast, synchronized echo chambers wherein identical phrases, anxieties, and orthodoxies are repeated simultaneously..."',
        distractorExplanations: [
          {
            optionLabel: 'A',
            explanation:
              'Opposite of Passage: The passage states mass media produces uniformity and conformity, not subversive instability.',
          },
          {
            optionLabel: 'B',
            explanation:
              'Unmentioned Constraint: Financial exclusion is not discussed in paragraph 3.',
          },
          {
            optionLabel: 'D',
            explanation:
              'Contradictory Claim: The author argues citizens become too conformist, not excessively skeptical.',
          },
        ],
        eliminationShortcut:
          'Direct textual match: "homogenizes the categories... synchronized echo chambers" = standardizing concepts into conformist orthodoxies.',
      },
      {
        id: 'ep2-q4',
        questionNumber: 4,
        label: 'QUESTION 4 — INFERENCE & AUTHORIAL STANCE',
        skillTag: 'Logical Inference & Stance Calibration',
        difficulty: 'Elite Hard',
        prompt: 'Based on the final paragraph, the author views "heterodox dissent" as:',
        options: [
          {
            label: 'A',
            text: 'A dangerous symptom of societal breakdown that must be regulated through democratic debate.',
          },
          {
            label: 'B',
            text: 'An indispensable catalyst for substantive intellectual, philosophical, and scientific advancement.',
          },
          {
            label: 'C',
            text: 'An inevitable byproduct of ancient absolute monarchies that has no role in modern democracies.',
          },
          {
            label: 'D',
            text: 'A minor aesthetic preference that has minimal impact on the long-term vitality of a civilization.',
          },
        ],
        correctAnswer: 'B',
        correctAnswerIndex: 1,
        whyCorrectTitle: 'WHY B IS THE AIRTIGHT ANSWER:',
        whyCorrect:
          'In Paragraph 4, the author concludes that "Genuine philosophical breakthroughs and scientific revolutions have historically required an abrasive resistance to reigning consensus; without deliberate protection for epistemic outliers, democratic societies risk suffocating in comfortable unanimity." Thus, heterodox dissent is essential for genuine advancement.',
        passageSupport:
          'Paragraph 4: "Genuine philosophical breakthroughs and scientific revolutions have historically required an abrasive resistance to reigning consensus..."',
        distractorExplanations: [
          {
            optionLabel: 'A',
            explanation:
              'Opposite of Author\'s Stance: The author champions dissent as vital for progress rather than a dangerous symptom to be regulated.',
          },
          {
            optionLabel: 'C',
            explanation:
              'Factual Distortion: The author explicitly stresses that modern democracies urgently need protection for epistemic outliers.',
          },
          {
            optionLabel: 'D',
            explanation:
              'Dismissive Understatement: The author treats dissent as a foundational necessity for breakthroughs, not a "minor aesthetic preference".',
          },
        ],
        eliminationShortcut:
          'Note the author\'s strong positive valuation of "abrasive resistance to reigning consensus" as necessary for breakthroughs.',
      },
    ],
  },
  {
    id: 'elite-passage-3',
    passageNumber: 3,
    title: 'Photochemical False Positives in Exoplanetary Biosignature Detection',
    domain: 'Physical Sciences & Exobiology',
    difficulty: 'Elite 800-Level / High-Density',
    wordCount: 380,
    introductoryContext:
      'This passage is adapted from an astrobiology review analyzing the challenges of interpreting spectroscopic data from terrestrial exoplanets orbiting low-mass stars.',
    structuralOutline: [
      { paragraphNumber: 1, role: 'Establishes molecular oxygen as the historical gold standard biosignature and introduces M-dwarf complications.' },
      { paragraphNumber: 2, role: 'Details the chemical mechanism of abiotic oxygen generation via UV photolysis and hydrogen escape.' },
      { paragraphNumber: 3, role: 'Argues for contextual multi-gas disequilibria (methane + CO2) over isolated gas detection.' },
      { paragraphNumber: 4, role: 'Warns against premature discovery announcements and outlines rigorous diagnostic protocols.' },
    ],
    passageText: `[Paragraph 1]
In the foundational decades of exoplanetary characterization, astrobiologists operated under a deceptively straightforward diagnostic paradigm: the detection of molecular oxygen (O₂) or its photochemical derivative, ozone (O₃), in the transmission spectrum of a rocky exoplanet was heralded as unequivocal proof of biological respiration. On Earth, virtually all atmospheric oxygen is biogenically generated and maintained by oxygenic photosynthesis. However, as next-generation space observatories shift observational priority toward rocky planets orbiting red dwarf stars (M-dwarfs)—the most abundant stellar hosts in the Milky Way—this classical assumption has proven dangerously simplistic.

[Paragraph 2]
M-dwarf stars exhibit high ratios of far-ultraviolet (FUV) to near-ultraviolet (NUV) radiation, accompanied by prolonged periods of intense stellar flare activity during their billions of years of prolonged youth. When a water-rich exoplanet orbits within the habitable zone of an active M-dwarf, this extreme FUV flux rapidly photolyzes water vapor (H₂O) in the upper stratosphere into elemental hydrogen and hydroxyl radicals. Because atomic hydrogen has minimal atomic mass, it readily achieves thermal escape velocity and hemorrhages into space. The remaining heavy oxygen atoms, unable to escape the planet's gravitational well, accumulate in the atmosphere, creating dense abiotic oxygen reservoirs tens to hundreds of bars deep—all completely devoid of biological life.

[Paragraph 3]
Consequently, astrobiologists have recognized that an isolated spectral line cannot serve as a reliable definitive signature of life. Rigorous biosignature verification demands the detection of chemical disequilibrium: a pair of mutually reactive gases coexisting in concentrations that would naturally neutralize each other in the absence of a continuous biological source. The gold standard for such disequilibrium is the simultaneous presence of methane (CH₄) and carbon dioxide (CO₂) in an oxygen-poor or oxygen-temperate atmosphere. Because methane is rapidly oxidized and depleted by photochemical reactions, its persistent atmospheric coexistence alongside carbon dioxide requires a prolific, continuous planetary flux that abiotic geochemical processes struggle to sustain.

[Paragraph 4]
To proclaim the discovery of an extraterrestrial biosphere solely upon an oxygen detection is therefore to fall victim to a photochemical mirage. Future missions must employ broad-band spectrophotometry capable of cross-referencing host-star UV flare history, atmospheric carbon isotope ratios, and simultaneous trace gas equilibria before declaring that we have found life beyond Earth.`,
    questions: [
      {
        id: 'ep3-q1',
        questionNumber: 1,
        label: 'QUESTION 1 — CENTRAL THESIS & SCIENTIFIC ARGUMENT',
        skillTag: 'Central Claim & Scientific Methodology',
        difficulty: 'Elite Hard',
        prompt: 'The central argument of the passage is that:',
        options: [
          {
            label: 'A',
            text: 'M-dwarf stars are completely incapable of hosting habitable rocky exoplanets due to their intense stellar wind.',
          },
          {
            label: 'B',
            text: 'Atmospheric oxygen alone is an insufficient biosignature on M-dwarf planets because abiotic photochemical processes can generate massive non-biological oxygen accumulations.',
          },
          {
            label: 'C',
            text: 'Earth’s biological evolution was an anomaly that cannot be replicated anywhere else in the galaxy.',
          },
          {
            label: 'D',
            text: 'Methane detection is guaranteed to be a false positive unless ozone is also detected in identical quantities.',
          },
        ],
        correctAnswer: 'B',
        correctAnswerIndex: 1,
        whyCorrectTitle: 'WHY B IS THE AIRTIGHT ANSWER:',
        whyCorrect:
          'Paragraph 1 notes the historical reliance on oxygen, Paragraph 2 explains the abiotic photolysis mechanism on M-dwarfs, and Paragraph 3 & 4 argue that isolated oxygen detection is a "photochemical mirage" without multi-gas disequilibrium. Option B captures this core thesis with precision.',
        passageSupport:
          'Paragraph 1: "...this classical assumption has proven dangerously simplistic." Paragraph 2: "...creating dense abiotic oxygen reservoirs... all completely devoid of biological life." Paragraph 3: "...an isolated spectral line cannot serve as a reliable definitive signature of life."',
        distractorExplanations: [
          {
            optionLabel: 'A',
            explanation:
              'Extreme Overreach: The author states M-dwarfs create abiotic oxygen false positives, not that habitable planets around M-dwarfs are strictly impossible.',
          },
          {
            optionLabel: 'C',
            explanation:
              'Philosophical Distortion: The passage discusses biosignature criteria, not a cosmological proof that Earth is unique.',
          },
          {
            optionLabel: 'D',
            explanation:
              'Scientific Contradiction: Paragraph 3 explicitly emphasizes methane paired with carbon dioxide in an oxygen-poor atmosphere as a strong biosignature, not requiring ozone in equal amounts.',
          },
        ],
        eliminationShortcut:
          'Check the main problem identified: abiotic oxygen generation on M-dwarfs creates false positive biosignatures.',
      },
      {
        id: 'ep3-q2',
        questionNumber: 2,
        label: 'QUESTION 2 — MECHANISTIC SEQUENCE & DETAIL EXTRACTION',
        skillTag: 'Cause-and-Effect & Textual Boundaries',
        difficulty: 'Elite Hard',
        prompt: 'According to paragraph 2, what primary physical mechanism allows large reservoirs of abiotic oxygen to accumulate on water-rich M-dwarf exoplanets?',
        options: [
          {
            label: 'A',
            text: 'Volcanic outgassing of pure oxygen directly from the planetary mantle during active tectonic subduction.',
          },
          {
            label: 'B',
            text: 'Extreme FUV radiation photolyzes atmospheric water vapor, allowing lightweight hydrogen to escape into space while heavier oxygen remains bound by gravity.',
          },
          {
            label: 'C',
            text: 'Subterranean chemotrophic bacteria synthesize oxygen in liquid oceans without needing stellar photons.',
          },
          {
            label: 'D',
            text: 'Near-ultraviolet photons convert atmospheric methane into carbon dioxide and water ice.',
          },
        ],
        correctAnswer: 'B',
        correctAnswerIndex: 1,
        whyCorrectTitle: 'WHY B IS THE AIRTIGHT ANSWER:',
        whyCorrect:
          'Paragraph 2 lays out the exact sequence: extreme FUV radiation photolyzes H2O into hydrogen and hydroxyl; low-mass hydrogen achieves escape velocity and leaves the planet, leaving behind the heavier oxygen atoms to accumulate abiotically.',
        passageSupport:
          'Paragraph 2: "...extreme FUV flux rapidly photolyzes water vapor (H₂O)... atomic hydrogen has minimal atomic mass, it readily achieves thermal escape velocity and hemorrhages into space. The remaining heavy oxygen atoms... accumulate in the atmosphere..."',
        distractorExplanations: [
          {
            optionLabel: 'A',
            explanation:
              'Fabricated Science: Volcanic outgassing of pure O2 from mantles is neither stated in the passage nor chemically accurate.',
          },
          {
            optionLabel: 'C',
            explanation:
              'Direct Contradiction: The mechanism explained in paragraph 2 is explicitly ABIOTIC (non-biological), not subterranean bacteria.',
          },
          {
            optionLabel: 'D',
            explanation:
              'Mismatched Terms: NUV methane conversion is not the mechanism described for oxygen accumulation in paragraph 2.',
          },
        ],
        eliminationShortcut:
          'Direct boundary match from Paragraph 2: FUV photolysis + hydrogen escape + oxygen gravitational retention.',
      },
      {
        id: 'ep3-q3',
        questionNumber: 3,
        label: 'QUESTION 3 — FUNCTION & COMPARATIVE LOGIC',
        skillTag: 'Rhetorical Role & Evidentiary Contrast',
        difficulty: 'Elite Hard',
        prompt: 'The author discusses the combination of methane (CH₄) and carbon dioxide (CO₂) in paragraph 3 primarily to:',
        options: [
          {
            label: 'A',
            text: 'Argue that carbon-based molecules are inherently toxic to all potential alien organisms.',
          },
          {
            label: 'B',
            text: 'Illustrate how chemical disequilibrium between mutually reactive gases provides far more robust evidence of life than a single isolated gas.',
          },
          {
            label: 'C',
            text: 'Demonstrate that Earth’s early atmosphere lacked any greenhouse gases prior to the Great Oxidation Event.',
          },
          {
            label: 'D',
            text: 'Prove that M-dwarf stellar radiation prevents all photochemical reactions from occurring in planetary atmospheres.',
          },
        ],
        correctAnswer: 'B',
        correctAnswerIndex: 1,
        whyCorrectTitle: 'WHY B IS THE AIRTIGHT ANSWER:',
        whyCorrect:
          'Paragraph 3 presents methane + carbon dioxide as the exemplar ("gold standard") of chemical disequilibrium: because methane is quickly destroyed unless continuously replenished, their coexistence proves an ongoing active source far more credibly than isolated oxygen.',
        passageSupport:
          'Paragraph 3: "Rigorous biosignature verification demands the detection of chemical disequilibrium: a pair of mutually reactive gases coexisting... The gold standard for such disequilibrium is the simultaneous presence of methane (CH₄) and carbon dioxide (CO₂)..."',
        distractorExplanations: [
          {
            optionLabel: 'A',
            explanation:
              'Opposite of Point: Methane and CO2 are discussed as evidence OF life, not as toxic hazards.',
          },
          {
            optionLabel: 'C',
            explanation:
              'Historical Distractor: The Great Oxidation Event is not mentioned or relevant to the methodological point.',
          },
          {
            optionLabel: 'D',
            explanation:
              'Direct Contradiction: The passage explicitly emphasizes that M-dwarf radiation drives intense photochemical reactions.',
          },
        ],
        eliminationShortcut:
          'Why does the author introduce CH4 + CO2? As the prime example of chemical disequilibrium.',
      },
      {
        id: 'ep3-q4',
        questionNumber: 4,
        label: 'QUESTION 4 — METAPHOR & TONE CALIBRATION',
        skillTag: 'Tone, Stance & Metaphorical Meaning',
        difficulty: 'Elite Hard',
        prompt: 'In paragraph 4, the phrase "photochemical mirage" most directly conveys the idea that an oxygen signal:',
        options: [
          {
            label: 'A',
            text: 'Is an optical illusion caused by faulty camera sensors aboard space telescopes.',
          },
          {
            label: 'B',
            text: 'Creates a deceptive appearance of biological habitability produced entirely by inanimate chemical processes.',
          },
          {
            label: 'C',
            text: 'Will evaporate quickly as soon as the exoplanet moves into the shadow of its host star.',
          },
          {
            label: 'D',
            text: 'Reflects sunlight in a manner identical to water vapor in desert atmospheres.',
          },
        ],
        correctAnswer: 'B',
        correctAnswerIndex: 1,
        whyCorrectTitle: 'WHY B IS THE AIRTIGHT ANSWER:',
        whyCorrect:
          'A "mirage" is a deceptive appearance that looks like something desired (e.g. water in a desert) but is actually an inanimate physical phenomenon. Here, a "photochemical mirage" means the oxygen signal looks like biological life but is produced entirely by abiotic photochemistry.',
        passageSupport:
          'Paragraph 4: "To proclaim the discovery of an extraterrestrial biosphere solely upon an oxygen detection is therefore to fall victim to a photochemical mirage."',
        distractorExplanations: [
          {
            optionLabel: 'A',
            explanation:
              'Literal Trap: The issue is stellar/atmospheric chemistry, not broken telescope hardware.',
          },
          {
            optionLabel: 'C',
            explanation:
              'Literal Mistranslation: The oxygen atmosphere does not literally evaporate in shadows; it is an enduring abiotic gas reservoir.',
          },
          {
            optionLabel: 'D',
            explanation:
              'Superficial Metaphor Confusion: Conflates the physical optics of desert mirages with the metaphorical meaning in the text.',
          },
        ],
        eliminationShortcut:
          'Match the figurative meaning: "mirage" = deceptive illusion of life created by abiotic chemistry.',
      },
    ],
  },
  {
    id: 'elite-passage-4',
    passageNumber: 4,
    title: 'The Dematerialized Archive: Digital Reproduction and the Dissolution of Aura',
    domain: 'Art Theory & Critical Philosophy',
    difficulty: 'Elite 800-Level / High-Density',
    wordCount: 390,
    introductoryContext:
      'This passage is adapted from a philosophical examination of Walter Benjamin’s aesthetic theories and their contemporary relevance in the era of digital archives and generative media.',
    structuralOutline: [
      { paragraphNumber: 1, role: 'Revisits Walter Benjamin\'s concept of "aura" tied to physical singularity and historical embeddedness.' },
      { paragraphNumber: 2, role: 'Distinguishes 20th-century mechanical print from 21st-century digital dematerialization.' },
      { paragraphNumber: 3, role: 'Introduces the concept of the fluid, generative data stream and the loss of the definitive original.' },
      { paragraphNumber: 4, role: 'Synthesizes the aesthetic consequences: from contemplation of an artifact to consumption of algorithmic variations.' },
    ],
    passageText: `[Paragraph 1]
In his landmark 1935 essay, Walter Benjamin famously diagnosed the decay of the artwork's "aura"—that unique, irreproducible presence in time and space that anchors an authentic physical artifact to its historical lineage. For Benjamin, the aura was inextricably bound to the physical object's singularity: the subtle patina on an ancient sculpture, the physical crackle in an original oil pigment, and the specific geographical shrine or gallery in which the artifact was situated. While early twentieth-century mechanical reproduction—such as lithographic printing and cinematic film—severed the artwork from its ritual context by mass-producing physical copies, it nonetheless remained tethered to the physical world of celluloid strips, printing plates, and paper sheets.

[Paragraph 2]
The contemporary digital revolution, however, represents not merely an acceleration of Benjamin's mechanical reproduction, but a fundamental ontological rupture. In the digital matrix, reproduction ceases to be an act of physical duplication; rather, the artwork is dematerialized into an abstract sequence of binary code. A digital high-resolution file does not stand in a hierarchical relationship of "original" and "derivative." Every bit-for-bit duplication is mathematically indistinguishable from its progenitor. When fidelity reaches absolute numerical equivalence, the very concept of an authentic original collapses under its own conceptual redundancy.

[Paragraph 3]
Furthermore, the digitization of cultural memory transforms the museum from a physical repository of enduring artifacts into what cultural theorists term a "liquid archive." In this liquid space, the artwork is no longer static. It becomes continuously editable, endlessly recombinant, and instantly susceptible to algorithmic alteration. Generative artificial intelligence models ingest millions of paintings not to preserve their individual historical testimonies, but to vectorize their aesthetic patterns into statistical latent spaces, producing infinite variations on demand.

[Paragraph 4]
This transition fundamentally shifts the spectator's aesthetic posture. Where the historical viewer engaged in patient, ritualistic contemplation before an irreplaceable physical monument, the modern digital consumer interacts with a volatile flux of hyper-abundant images. The loss of aura is thus complete: the artwork has traded its historical gravity and physical vulnerability for ubiquitous accessibility and algorithmic fluidity.`,
    questions: [
      {
        id: 'ep4-q1',
        questionNumber: 1,
        label: 'QUESTION 1 — CENTRAL THESIS & COMPARATIVE LOGIC',
        skillTag: 'Central Thesis & Conceptual Boundary',
        difficulty: 'Elite Hard',
        prompt: 'Which statement best expresses the author’s primary thesis regarding digital reproduction compared to mechanical reproduction?',
        options: [
          {
            label: 'A',
            text: 'Digital reproduction is merely a faster, more cost-effective continuation of 20th-century mechanical printing presses.',
          },
          {
            label: 'B',
            text: 'While mechanical reproduction still produced physical copies of situated artifacts, digital reproduction dematerializes art into mathematically identical code, dismantling the very category of an original.',
          },
          {
            label: 'C',
            text: 'The decay of artistic aura has made modern audiences significantly more appreciative of classical oil paintings and ancient sculptures.',
          },
          {
            label: 'D',
            text: 'Generative artificial intelligence has successfully restored the historical aura that was lost during the early days of cinematic film.',
          },
        ],
        correctAnswer: 'B',
        correctAnswerIndex: 1,
        whyCorrectTitle: 'WHY B IS THE AIRTIGHT ANSWER:',
        whyCorrect:
          'Paragraph 1 notes that mechanical reproduction remained physical (celluloid, paper), while Paragraph 2 emphasizes that digital reproduction is an "ontological rupture" where art is dematerialized into binary code and duplicates are mathematically identical, collapsing the concept of an original.',
        passageSupport:
          'Paragraph 2: "...not merely an acceleration of Benjamin\'s mechanical reproduction, but a fundamental ontological rupture... dematerialized into an abstract sequence of binary code... the very concept of an authentic original collapses..."',
        distractorExplanations: [
          {
            optionLabel: 'A',
            explanation:
              'Direct Contradiction: Paragraph 2 explicitly states digital reproduction is "not merely an acceleration" or continuation, but a fundamental rupture.',
          },
          {
            optionLabel: 'C',
            explanation:
              'Unsupported Assertion: The passage does not claim modern audiences appreciate classical paintings more; rather, their aesthetic posture has shifted to consuming rapid digital streams.',
          },
          {
            optionLabel: 'D',
            explanation:
              'Complete Inversion: Paragraph 3 & 4 state generative models vectorize art and complete the loss of aura, not restore it.',
          },
        ],
        eliminationShortcut:
          'Look for the option that captures the "ontological rupture" from physical copies to dematerialized mathematical duplication.',
      },
      {
        id: 'ep4-q2',
        questionNumber: 2,
        label: 'QUESTION 2 — METAPHOR & RHETORICAL FUNCTION',
        skillTag: 'Metaphorical Analysis & Rhetorical Purpose',
        difficulty: 'Elite Hard',
        prompt: 'The author introduces the term "liquid archive" in paragraph 3 primarily to emphasize:',
        options: [
          {
            label: 'A',
            text: 'The physical water damage that frequently threatens paper documents stored in municipal basements.',
          },
          {
            label: 'B',
            text: 'The mutable, non-static, and endlessly recombinant nature of digitized cultural collections.',
          },
          {
            label: 'C',
            text: 'The financial liquidity required to purchase contemporary museum acquisitions.',
          },
          {
            label: 'D',
            text: 'The strict legal protections that prevent public users from downloading copyrighted digital files.',
          },
        ],
        correctAnswer: 'B',
        correctAnswerIndex: 1,
        whyCorrectTitle: 'WHY B IS THE AIRTIGHT ANSWER:',
        whyCorrect:
          'Paragraph 3 defines the "liquid archive" immediately: "In this liquid space, the artwork is no longer static. It becomes continuously editable, endlessly recombinant, and instantly susceptible to algorithmic alteration." Thus, "liquid" signifies constant change and mutability.',
        passageSupport:
          'Paragraph 3: "...what cultural theorists term a \'liquid archive.\' In this liquid space, the artwork is no longer static. It becomes continuously editable, endlessly recombinant..."',
        distractorExplanations: [
          {
            optionLabel: 'A',
            explanation:
              'Literal Trap: Liquid does not mean physical water or flood damage in this philosophical context.',
          },
          {
            optionLabel: 'C',
            explanation:
              'Financial Misinterpretation: Financial liquidity (cash flow) is completely irrelevant to the cultural theory point.',
          },
          {
            optionLabel: 'D',
            explanation:
              'Opposite Direction: The liquid archive is characterized by algorithmic fluidity and hyper-accessible recombination, not strict locked barriers.',
          },
        ],
        eliminationShortcut:
          'Read the sentence directly following the term: "In this liquid space, the artwork is no longer static. It becomes continuously editable..."',
      },
      {
        id: 'ep4-q3',
        questionNumber: 3,
        label: 'QUESTION 3 — CONCEPTUAL INFERENCE',
        skillTag: 'Conceptual Inference & Logical Rigor',
        difficulty: 'Elite Hard',
        prompt: 'Based on paragraph 1 and 2, which factor is most indispensable to the existence of Benjamin’s original concept of "aura"?',
        options: [
          {
            label: 'A',
            text: 'The high commercial market valuation assigned to the artwork by contemporary auction houses.',
          },
          {
            label: 'B',
            text: 'The artwork’s unique, situated physical presence and irreversible historical progression through time and space.',
          },
          {
            label: 'C',
            text: 'The complete absence of any mechanical tools or brushes during the artwork\'s initial creation.',
          },
          {
            label: 'D',
            text: 'The widespread distribution of affordable photographic replicas to the general public.',
          },
        ],
        correctAnswer: 'B',
        correctAnswerIndex: 1,
        whyCorrectTitle: 'WHY B IS THE AIRTIGHT ANSWER:',
        whyCorrect:
          'Paragraph 1 explicitly defines Benjamin\'s aura as "that unique, irreproducible presence in time and space that anchors an authentic physical artifact to its historical lineage... bound to the physical object\'s singularity: the subtle patina... physical crackle... specific geographical shrine..."',
        passageSupport:
          'Paragraph 1: "...that unique, irreproducible presence in time and space that anchors an authentic physical artifact to its historical lineage. For Benjamin, the aura was inextricably bound to the physical object\'s singularity..."',
        distractorExplanations: [
          {
            optionLabel: 'A',
            explanation:
              'Out of Scope: Auction house prices are not the philosophical foundation of Benjamin\'s aura.',
          },
          {
            optionLabel: 'C',
            explanation:
              'Distorted Detail: Ancient sculptures and paintings used tools; what mattered was the physical singularity of the finished object.',
          },
          {
            optionLabel: 'D',
            explanation:
              'Opposite Cause: Photographic replicas destroyed the aura, rather than creating it.',
          },
        ],
        eliminationShortcut:
          'Direct textual anchor from Paragraph 1: "unique, irreproducible presence in time and space".',
      },
      {
        id: 'ep4-q4',
        questionNumber: 4,
        label: 'QUESTION 4 — AUTHORIAL STANCE & TONE',
        skillTag: 'Authorial Stance & Evaluative Nuance',
        difficulty: 'Elite Hard',
        prompt: 'In the final paragraph, the author describes the transition from historical contemplation to modern digital consumption with a tone that is best characterized as:',
        options: [
          {
            label: 'A',
            text: 'Unrestrained celebration of technological democratization and consumer speed.',
          },
          {
            label: 'B',
            text: 'Violent condemnation calling for the total abolition of all online image databases.',
          },
          {
            label: 'C',
            text: 'Analytical and sober, characterizing a profound qualitative trade-off in human aesthetic experience.',
          },
          {
            label: 'D',
            text: 'Indifferent and dismissive, suggesting that visual art has never held meaningful cultural importance.',
          },
        ],
        correctAnswer: 'C',
        correctAnswerIndex: 2,
        whyCorrectTitle: 'WHY C IS THE AIRTIGHT ANSWER:',
        whyCorrect:
          'The author objectively dissects the transition without breathless praise (A) or apocalyptic rage (B), summarizing the profound trade-off: "the artwork has traded its historical gravity and physical vulnerability for ubiquitous accessibility and algorithmic fluidity." This is measured, analytical, and sober.',
        passageSupport:
          'Paragraph 4: "This transition fundamentally shifts the spectator\'s aesthetic posture... the artwork has traded its historical gravity and physical vulnerability for ubiquitous accessibility and algorithmic fluidity."',
        distractorExplanations: [
          {
            optionLabel: 'A',
            explanation:
              'Extreme Tone Trap: The author is not cheerleading or celebrating; they explicitly note the complete "loss of aura" and "historical gravity".',
          },
          {
            optionLabel: 'B',
            explanation:
              'Extreme Tone Trap: The author does not call for abolishing digital databases or express violent anger.',
          },
          {
            optionLabel: 'D',
            explanation:
              'Inaccurate Stance: The author treats art as having immense cultural importance throughout the essay.',
          },
        ],
        eliminationShortcut:
          'SAT tone rule: Elite academic analysis is almost always measured, sober, and analytical, avoiding extreme emotional poles.',
      },
    ],
  },
  {
    id: 'elite-passage-5',
    passageNumber: 5,
    title: 'The Mycorrhizal Market: Mutualism, Sanctions, and Underground Resource Asymmetry',
    domain: 'Environmental Ecology & Soil Biogeochemistry',
    difficulty: 'Elite 800-Level / High-Density',
    wordCount: 395,
    introductoryContext:
      'This passage is adapted from an ecological review examining the physiological and evolutionary dynamics of underground mycorrhizal networks in temperate forest soils.',
    structuralOutline: [
      { paragraphNumber: 1, role: 'Critiques the popular anthropomorphic "benevolent forest" narrative.' },
      { paragraphNumber: 2, role: 'Presents isotopic tracking evidence of reciprocal trade and fungal nutrient hoarding.' },
      { paragraphNumber: 3, role: 'Explains biological sanctions and dynamic resource pricing across fungal-root interfaces.' },
      { paragraphNumber: 4, role: 'Re-frames forest ecology as a complex, competitive multi-agent market equilibrium.' },
    ],
    passageText: `[Paragraph 1]
In popular ecological literature, the subterranean networks formed between forest trees and mycorrhizal fungi have frequently been romanticized through an anthropomorphic lens. Popularized as the "Wood Wide Web," these underground hyphal webs are often depicted as socialist communes wherein mother trees benevolently nourish shaded seedlings and fungal symbionts distribute carbon out of selfless communal solidarity. While this egalitarian metaphor captures public imagination, rigorous soil biogeochemistry reveals a far more calculated, transactional evolutionary reality: mycorrhizal associations operate not as benevolent charities, but as fiercely competitive biological markets governed by strategic bargaining and reciprocal sanctions.

[Paragraph 2]
Plants and mycorrhizal fungi engage in bidirectional resource exchange: plants harness sunlight to synthesize carbon-rich carbohydrates via photosynthesis, while fungi utilize extensive microscopic hyphal networks to forage for immobile soil minerals, primarily phosphorus and nitrogen. Utilizing dual-isotope labeling—tracking radioactive carbon (¹³C) moving downward from canopies alongside radioactive phosphorus (³²P) moving upward from hyphae—researchers have demonstrated that fungal partners do not distribute nutrients uniformly. When experimental patches of soil are enriched with surplus phosphorus, fungi do not immediately surrender the bounty to host trees; instead, they hoard the excess in polyphosphate vacuoles until the host increases its photosynthetic carbohydrate payout.

[Paragraph 3]
Furthermore, both partners possess sophisticated physiological sanction mechanisms to punish non-cooperative counterparties. If a host tree's carbon allocation drops—whether due to seasonal shade or experimental defoliation—the fungal network swiftly throttles its phosphorus delivery to that specific root tip, reallocating precious minerals to neighboring root systems offering higher carbon returns. Conversely, when researchers artificially supply fungi with synthetic carbohydrates, host roots detect the reduced fungal mineral yield and downregulate their sucrose transporter proteins, curtailing carbon subsidies.

[Paragraph 4]
This market-based paradigm does not diminish the profound ecological importance of mycorrhizal networks; rather, it replaces sentimental mythology with evolutionary rigor. The resilience of forest ecosystems stems not from selfless harmony, but from the dynamic stability of millions of microscopic trade negotiations, where biological self-interest and reciprocal enforcement maintain nutrient flux across complex landscapes.`,
    questions: [
      {
        id: 'ep5-q1',
        questionNumber: 1,
        label: 'QUESTION 1 — CENTRAL THESIS & CONCEPTUAL SHIFT',
        skillTag: 'Central Thesis & Scientific Reinterpretation',
        difficulty: 'Elite Hard',
        prompt: 'Which statement best synthesizes the primary thesis of the passage?',
        options: [
          {
            label: 'A',
            text: 'Subterranean mycorrhizal networks are parasitic infestations that will eventually destroy temperate forest canopies if left unmanaged.',
          },
          {
            label: 'B',
            text: 'Far from being selfless communes, mycorrhizal networks function as transactional biological markets where trees and fungi trade nutrients based on strategic self-interest and reciprocal sanctions.',
          },
          {
            label: 'C',
            text: 'Host trees distribute photosynthetic sugars equally to all fungal species regardless of whether the fungi supply soil phosphorus.',
          },
          {
            label: 'D',
            text: 'Isotopic labeling experiments have proven that trees receive zero nutritional benefit from underground fungal associations.',
          },
        ],
        correctAnswer: 'B',
        correctAnswerIndex: 1,
        whyCorrectTitle: 'WHY B IS THE AIRTIGHT ANSWER:',
        whyCorrect:
          'Paragraph 1 sets up the central claim: mycorrhizal networks are "fiercely competitive biological markets governed by strategic bargaining and reciprocal sanctions." Paragraphs 2, 3, and 4 substantiate this market mechanism using isotopic evidence and sanction protocols.',
        passageSupport:
          'Paragraph 1: "...mycorrhizal associations operate not as benevolent charities, but as fiercely competitive biological markets governed by strategic bargaining and reciprocal sanctions." Paragraph 4: "...dynamic stability of millions of microscopic trade negotiations..."',
        distractorExplanations: [
          {
            optionLabel: 'A',
            explanation:
              'Extreme Distortion: The author views the system as a functioning mutualistic market, not a destructive parasitic infestation.',
          },
          {
            optionLabel: 'C',
            explanation:
              'Direct Contradiction: Paragraph 2 & 3 explicitly prove trees do NOT distribute sugars equally, but adjust allocation based on fungal return.',
          },
          {
            optionLabel: 'D',
            explanation:
              'Direct Contradiction: Paragraph 2 confirms plants receive vital phosphorus and nitrogen from fungi.',
          },
        ],
        eliminationShortcut:
          'Match the core framing: from "socialist commune" myth to "transactional biological market".',
      },
      {
        id: 'ep5-q2',
        questionNumber: 2,
        label: 'QUESTION 2 — EMPIRICAL EVIDENCE & FUNCTION',
        skillTag: 'Evidence Evaluation & Experimental Role',
        difficulty: 'Elite Hard',
        prompt: 'In paragraph 2, the discussion of dual-isotope labeling (¹³C and ³²P) functions primarily to:',
        options: [
          {
            label: 'A',
            text: 'Demonstrate that fungi hoard surplus phosphorus until host plants provide higher carbon compensation.',
          },
          {
            label: 'B',
            text: 'Prove that radioactive isotopes are the primary cause of genetic mutations in forest soil bacteria.',
          },
          {
            label: 'C',
            text: 'Argue that laboratory greenhouses are incapable of replicating natural woodland ecosystems.',
          },
          {
            label: 'D',
            text: 'Show that tree roots absorb phosphorus directly from rainfall without fungal assistance.',
          },
        ],
        correctAnswer: 'A',
        correctAnswerIndex: 0,
        whyCorrectTitle: 'WHY A IS THE AIRTIGHT ANSWER:',
        whyCorrect:
          'Paragraph 2 directly explains why isotopic tracking is used: to trace the bidirectional flux of carbon and phosphorus, revealing that fungi hoard phosphorus in polyphosphate vacuoles until the host increases carbohydrate payouts.',
        passageSupport:
          'Paragraph 2: "When experimental patches of soil are enriched with surplus phosphorus, fungi do not immediately surrender the bounty to host trees; instead, they hoard the excess in polyphosphate vacuoles until the host increases its photosynthetic carbohydrate payout."',
        distractorExplanations: [
          {
            optionLabel: 'B',
            explanation:
              'Fabricated Detail: Radioactive isotopes were harmless scientific tracers, not sources of bacterial mutations.',
          },
          {
            optionLabel: 'C',
            explanation:
              'Out of Scope: The passage does not critique laboratory greenhouse methodologies.',
          },
          {
            optionLabel: 'D',
            explanation:
              'Direct Contradiction: The passage emphasizes fungal hyphae as the vehicle for phosphorus absorption, not direct rain absorption.',
          },
        ],
        eliminationShortcut:
          'Follow the text directly: what did the isotope experiment show? Fungi hoard phosphorus until plants pay more carbon.',
      },
      {
        id: 'ep5-q3',
        questionNumber: 3,
        label: 'QUESTION 3 — CAUSAL INFERENCE & SCENARIO APPLICATION',
        skillTag: 'Hypothetical Scenario & Boundary Inference',
        difficulty: 'Elite Hard',
        prompt: 'Based on the sanction mechanisms detailed in paragraph 3, what would most likely happen if a dense canopy overgrowth heavily shades a specific lower-branch tree, drastically reducing its photosynthetic output?',
        options: [
          {
            label: 'A',
            text: 'The fungal network will immediately donate surplus carbon to revitalize the shaded tree out of altruism.',
          },
          {
            label: 'B',
            text: 'The fungal network will throttle phosphorus delivery to that tree\'s root tips and redirect mineral resources toward better-illuminated neighboring trees.',
          },
          {
            label: 'C',
            text: 'The shaded tree will immediately mutate its root proteins into photosynthetic leaves underground.',
          },
          {
            label: 'D',
            text: 'The entire forest network will permanently shut down all underground nutrient transport across all species.',
          },
        ],
        correctAnswer: 'B',
        correctAnswerIndex: 1,
        whyCorrectTitle: 'WHY B IS THE AIRTIGHT ANSWER:',
        whyCorrect:
          'Paragraph 3 explicitly spells out this exact causal scenario: "If a host tree\'s carbon allocation drops—whether due to seasonal shade or experimental defoliation—the fungal network swiftly throttles its phosphorus delivery to that specific root tip, reallocating precious minerals to neighboring root systems offering higher carbon returns."',
        passageSupport:
          'Paragraph 3: "If a host tree\'s carbon allocation drops... the fungal network swiftly throttles its phosphorus delivery to that specific root tip, reallocating precious minerals to neighboring root systems offering higher carbon returns."',
        distractorExplanations: [
          {
            optionLabel: 'A',
            explanation:
              'The "Commune" Trap: This is the popular myth that Paragraph 1 explicitly debunks.',
          },
          {
            optionLabel: 'C',
            explanation:
              'Biological Absurdity: Roots cannot mutate into photosynthetic leaves underground.',
          },
          {
            optionLabel: 'D',
            explanation:
              'Extreme Overreach: One tree\'s shade does not cause the entire regional forest network to permanently shut down.',
          },
        ],
        eliminationShortcut:
          'Direct matching from paragraph 3: carbon drop due to shade -> fungal network throttles phosphorus to that root and redirects to higher-paying neighbors.',
      },
      {
        id: 'ep5-q4',
        questionNumber: 4,
        label: 'QUESTION 4 — AUTHORIAL STANCE & RHETORICAL EVALUATION',
        skillTag: 'Rhetorical Nuance & Concluding Perspective',
        difficulty: 'Elite Hard',
        prompt: 'In paragraph 4, the author concludes by asserting that replacing the "sentimental mythology" of the forest with a market-based model:',
        options: [
          {
            label: 'A',
            text: 'Diminishes the perceived ecological value of mycorrhizal networks, proving them to be minor evolutionary dead-ends.',
          },
          {
            label: 'B',
            text: 'Provides a more rigorous, empirically grounded understanding of how forest ecosystem stability and nutrient fluxes are actually maintained.',
          },
          {
            label: 'C',
            text: 'Proves that human commercial logging practices have zero detrimental impact on subterranean biodiversity.',
          },
          {
            label: 'D',
            text: 'Confirms that plant species will soon outcompete and eliminate all fungal organisms across terrestrial biomes.',
          },
        ],
        correctAnswer: 'B',
        correctAnswerIndex: 1,
        whyCorrectTitle: 'WHY B IS THE AIRTIGHT ANSWER:',
        whyCorrect:
          'Paragraph 4 explicitly clarifies: "This market-based paradigm does not diminish the profound ecological importance of mycorrhizal networks; rather, it replaces sentimental mythology with evolutionary rigor. The resilience of forest ecosystems stems... from the dynamic stability of millions of microscopic trade negotiations..."',
        passageSupport:
          'Paragraph 4: "...replaces sentimental mythology with evolutionary rigor. The resilience of forest ecosystems stems not from selfless harmony, but from the dynamic stability of millions of microscopic trade negotiations..."',
        distractorExplanations: [
          {
            optionLabel: 'A',
            explanation:
              'Direct Contradiction: Paragraph 4 begins: "This market-based paradigm does not diminish the profound ecological importance..."',
          },
          {
            optionLabel: 'C',
            explanation:
              'Unrelated External Claim: Commercial logging practices are never mentioned.',
          },
          {
            optionLabel: 'D',
            explanation:
              'Absurd Assertion: The author describes an enduring, co-evolved mutualistic market equilibrium, not the extinction of fungi.',
          },
        ],
        eliminationShortcut:
          'Direct textual anchor from Paragraph 4: replaces mythology with evolutionary rigor and explains true ecosystem resilience.',
      },
    ],
  },
  {
    id: 'elite-passage-6',
    passageNumber: 6,
    title: 'Path Dependence and Institutional Sclerosis in Maritime Jurisprudence',
    domain: 'Law, Economics & Institutional History',
    difficulty: 'Elite 800-Level / High-Density',
    wordCount: 390,
    introductoryContext:
      'This passage is adapted from a legal economics treatise analyzing how historical precedents and coordination equilibria create path dependence in modern international maritime law.',
    structuralOutline: [
      { paragraphNumber: 1, role: 'Introduces economic path dependence and the concept of institutional lock-in.' },
      { paragraphNumber: 2, role: 'Examines the historical origin of medieval maritime salvage and apportionment doctrines.' },
      { paragraphNumber: 3, role: 'Analyzes the coordination friction that prevents adoption of modern automated liability standards.' },
      { paragraphNumber: 4, role: 'Concludes with the collision between ancient legal relics and autonomous AI container navigation.' },
    ],
    passageText: `[Paragraph 1]
In institutional economics, the concept of path dependence describes how transient historical accidents, once codified into regulatory or technological standards, become self-reinforcing over time through high switching costs, coordination externalities, and vested interests. While classic illustrations often focus on physical standards—such as the enduring dominance of the QWERTY keyboard layout or standard railway track gauges—the most profound manifestations of path dependence reside in legal jurisprudence. When an ancient legal doctrine is embedded across multilateral international conventions, it frequently survives centuries after the material conditions that originally justified its inception have vanished.

[Paragraph 2]
Maritime law offers a premier case study in this institutional inertia. Consider the centuries-old doctrine of "general average," an admiralty principle codifying that when a ship's master jettisons cargo during an emergency to save the vessel, all surviving cargo owners must proportionally compensate the sacrificed party. Formulated during the hazardous Mediterranean voyages of antiquity and codified in the medieval Lex Rhodia, this doctrine was exquisitely tailored to wooden sailing caravels battling unexpected tempests with rudimentary communication. In an era when shipowners and merchants were entirely out of contact for months at sea, general average established an essential risk-pooling contract that encouraged captains to make rapid emergency sacrifices without fearing unilateral liability.

[Paragraph 3]
In the twenty-first century, however, ocean shipping has been revolutionized by satellite telemetries, algorithmic container stacking, and global containerized reinsurance syndicates. The complex accounting required to adjust general average claims today takes years of litigation and generates hundreds of millions of dollars in bureaucratic legal fees that dwarf the value of the jettisoned freight itself. Yet attempts to replace this archaic mechanism with streamlined mandatory hull insurance have consistently foundered upon international coordination friction: because maritime shipping spans hundreds of sovereign jurisdictions, no single maritime nation can unilaterally abolish the doctrine without plunging its domestic fleet into cross-border jurisdictional chaos.

[Paragraph 4]
This institutional sclerosis is now hurtling toward a critical impasse with the imminent deployment of fully autonomous, crewless container ships. When an artificial intelligence navigation system calculates in milliseconds that ballast must be shifted or containers ejected to stabilize a robotic hull, applying a medieval doctrine predicated upon a human captain's discretionary moral judgment is not merely anachronistic—it is economically paralyzing. Until international bodies overcome the coordination trap of path dependence, the global shipping economy will remain tethered to the legal ghosts of the fourteenth century.`,
    questions: [
      {
        id: 'ep6-q1',
        questionNumber: 1,
        label: 'QUESTION 1 — CENTRAL ARGUMENT & THESIS',
        skillTag: 'Central Argument & Institutional Analysis',
        difficulty: 'Elite Hard',
        prompt: 'Which statement best expresses the overarching argument of the passage?',
        options: [
          {
            label: 'A',
            text: 'Autonomous robotic ships are inherently unseaworthy and should be banned until human captains can be permanently stationed on all vessels.',
          },
          {
            label: 'B',
            text: 'Archaic legal doctrines like general average persist in modern maritime commerce not because they remain efficient, but because international coordination friction and path dependence prevent systemic reform.',
          },
          {
            label: 'C',
            text: 'The QWERTY keyboard layout is the only successful historical example of an economic standard being voluntarily reformed.',
          },
          {
            label: 'D',
            text: 'Medieval maritime laws were designed to bankrupt merchants and enrich sovereign Mediterranean navies.',
          },
        ],
        correctAnswer: 'B',
        correctAnswerIndex: 1,
        whyCorrectTitle: 'WHY B IS THE AIRTIGHT ANSWER:',
        whyCorrect:
          'Paragraph 1 introduces path dependence in law, Paragraph 2 explains the historical utility of general average, Paragraph 3 demonstrates that today it causes immense inefficiency but persists due to international coordination friction, and Paragraph 4 shows it creates a crisis with autonomous vessels. Option B synthesizes this complete arc.',
        passageSupport:
          'Paragraph 1: "...ancient legal doctrine is embedded across multilateral international conventions, it frequently survives centuries after the material conditions... have vanished." Paragraph 3: "...consistently foundered upon international coordination friction..."',
        distractorExplanations: [
          {
            optionLabel: 'A',
            explanation:
              'Extreme Inversion: The author views autonomous vessels as technological progress and critiques the medieval law for holding them back, not the vessels.',
          },
          {
            optionLabel: 'C',
            explanation:
              'Factual Error: Paragraph 1 cites QWERTY as an enduring un-reformed standard ("enduring dominance"), not a voluntarily reformed one.',
          },
          {
            optionLabel: 'D',
            explanation:
              'Distorted History: Paragraph 2 explains medieval maritime law was an essential, well-tailored risk-pooling contract for its time, not a malicious bankruptcy scheme.',
          },
        ],
        eliminationShortcut:
          'Match the institutional economic concept: path dependence + coordination friction keeps archaic laws locked in despite current inefficiency.',
      },
      {
        id: 'ep6-q2',
        questionNumber: 2,
        label: 'QUESTION 2 — RHETORICAL PIVOT & STRUCTURE',
        skillTag: 'Rhetorical Organization & Section Function',
        difficulty: 'Elite Hard',
        prompt: 'The shift between paragraph 2 and paragraph 3 is best characterized as moving from:',
        options: [
          {
            label: 'A',
            text: 'An explanation of why a legal doctrine was historically rational to an analysis of why that same doctrine has become modernly inefficient and difficult to reform.',
          },
          {
            label: 'B',
            text: 'A theoretical statistical proof to an impassioned personal memoir of maritime life.',
          },
          {
            label: 'C',
            text: 'A condemnation of sailing technologies to a celebration of medieval navigation charts.',
          },
          {
            label: 'D',
            text: 'A review of domestic criminal statutes to an environmental analysis of ocean plastic waste.',
          },
        ],
        correctAnswer: 'A',
        correctAnswerIndex: 0,
        whyCorrectTitle: 'WHY A IS THE AIRTIGHT ANSWER:',
        whyCorrect:
          'Paragraph 2 explains why general average made perfect sense in antiquity and the Middle Ages ("exquisitely tailored... essential risk-pooling contract"), while Paragraph 3 pivots to modern shipping realities, showing that today it causes years of costly litigation and bureaucratic fees yet cannot be easily abolished due to coordination friction.',
        passageSupport:
          'Paragraph 2: "...this doctrine was exquisitely tailored to wooden sailing caravels..." -> Paragraph 3: "In the twenty-first century, however... generates hundreds of millions of dollars in bureaucratic legal fees... yet attempts to replace... foundered upon international coordination friction..."',
        distractorExplanations: [
          {
            optionLabel: 'B',
            explanation:
              'Category Error: The essay is an academic economic/legal analysis throughout, not a personal memoir.',
          },
          {
            optionLabel: 'C',
            explanation:
              'Distorted Stance: The author does not condemn wooden sailing ships or celebrate medieval maps.',
          },
          {
            optionLabel: 'D',
            explanation:
              'Unrelated Topics: Criminal law and plastic waste are never discussed.',
          },
        ],
        eliminationShortcut:
          'Analyze the functional transition: Paragraph 2 = historical rationale; Paragraph 3 = modern inefficiency and reform gridlock.',
      },
      {
        id: 'ep6-q3',
        questionNumber: 3,
        label: 'QUESTION 3 — CAUSE & IMPLICATION',
        skillTag: 'Causal Extraction & Institutional Friction',
        difficulty: 'Elite Hard',
        prompt: 'According to paragraph 3, what is the primary obstacle preventing modern shipping nations from unilaterally abolishing the doctrine of general average?',
        options: [
          {
            label: 'A',
            text: 'The lack of satellite technology required to track container locations across open oceans.',
          },
          {
            label: 'B',
            text: 'A catastrophic shortage of commercial reinsurance syndicates willing to insure modern container hulls.',
          },
          {
            label: 'C',
            text: 'The risk of multi-jurisdictional legal chaos that would result if one nation diverged from the shared international legal framework.',
          },
          {
            label: 'D',
            text: 'A total ban on computer algorithms enacted by international maritime court tribunals.',
          },
        ],
        correctAnswer: 'C',
        correctAnswerIndex: 2,
        whyCorrectTitle: 'WHY C IS THE AIRTIGHT ANSWER:',
        whyCorrect:
          'Paragraph 3 explicitly identifies the obstacle: "because maritime shipping spans hundreds of sovereign jurisdictions, no single maritime nation can unilaterally abolish the doctrine without plunging its domestic fleet into cross-border jurisdictional chaos."',
        passageSupport:
          'Paragraph 3: "...foundered upon international coordination friction: because maritime shipping spans hundreds of sovereign jurisdictions, no single maritime nation can unilaterally abolish the doctrine without plunging its domestic fleet into cross-border jurisdictional chaos."',
        distractorExplanations: [
          {
            optionLabel: 'A',
            explanation:
              'Direct Contradiction: Paragraph 3 affirms that shipping IS already revolutionized by satellite telemetries.',
          },
          {
            optionLabel: 'B',
            explanation:
              'Direct Contradiction: Paragraph 3 notes that global containerized reinsurance syndicates already exist.',
          },
          {
            optionLabel: 'D',
            explanation:
              'Absurd Fiction: International tribunals have not banned computer algorithms.',
          },
        ],
        eliminationShortcut:
          'Direct textual anchor: "no single maritime nation can unilaterally abolish... without plunging its domestic fleet into cross-border jurisdictional chaos."',
      },
      {
        id: 'ep6-q4',
        questionNumber: 4,
        label: 'QUESTION 4 — SYNTHESIS & INFERENCE',
        skillTag: 'Synthesis & Future Implication',
        difficulty: 'Elite Hard',
        prompt: 'The author’s discussion of autonomous, crewless container ships in paragraph 4 serves primarily to:',
        options: [
          {
            label: 'A',
            text: 'Illustrate the impending crisis when lightning-fast algorithmic decision-making collides with an archaic legal doctrine predicated on human moral discretion.',
          },
          {
            label: 'B',
            text: 'Argue that artificial intelligence is incapable of calculating physical ballast or hull stabilization during ocean storms.',
          },
          {
            label: 'C',
            text: 'Demonstrate that fourteenth-century legal scholars accurately anticipated the development of robotic vessels.',
          },
          {
            label: 'D',
            text: 'Demand that all global freight transportation be immediately shifted from ocean cargo to air cargo.',
          },
        ],
        correctAnswer: 'A',
        correctAnswerIndex: 0,
        whyCorrectTitle: 'WHY A IS THE AIRTIGHT ANSWER:',
        whyCorrect:
          'Paragraph 4 highlights the collision between artificial intelligence calculating millisecond ballast adjustments and a medieval doctrine based on a human captain\'s moral judgment, calling it an "anachronistic" and "economically paralyzing" impasse.',
        passageSupport:
          'Paragraph 4: "When an artificial intelligence navigation system calculates in milliseconds that ballast must be shifted or containers ejected... applying a medieval doctrine predicated upon a human captain\'s discretionary moral judgment is not merely anachronistic—it is economically paralyzing."',
        distractorExplanations: [
          {
            optionLabel: 'B',
            explanation:
              'Opposite of Point: The author explicitly notes AI calculates ballast shifts in milliseconds.',
          },
          {
            optionLabel: 'C',
            explanation:
              'Absurd Claim: 14th-century scholars obviously did not anticipate AI robotic ships.',
          },
          {
            optionLabel: 'D',
            explanation:
              'Extreme Distractor: Shifting global freight to air cargo is completely unmentioned and economically unfeasible.',
          },
        ],
        eliminationShortcut:
          'Identify the core contrast in paragraph 4: millisecond AI calculations vs. 14th-century human moral discretion.',
      },
    ],
  },
];
