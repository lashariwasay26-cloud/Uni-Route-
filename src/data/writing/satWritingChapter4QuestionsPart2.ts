import { WritingExerciseBlock } from './satWritingTypes';

export const EXERCISE_BLOCK_7: WritingExerciseBlock = {
  blockNumber: 7,
  title: 'Block 7 Exercises: Complex Sentences, Series, and Demonstrative Reference',
  description: 'Targeted Practice on Colon-Introduced Series, Demonstrative Reference ("That of / Those of"), Relative Clause Verbs, and Prepositional Gerunds (Questions 35–42)',
  questions: [
    {
      questionNumber: 35,
      id: 'ch4-q35',
      difficulty: 'Medium',
      skillTag: 'Colon-Introduced Series (Gerunds)',
      prompt: 'The deep-ocean research institute pursues three primary operational mandates: mapping abyssal hydrothermal vents, ___ benthic biodiversity, and monitoring oceanic carbon sequestration.',
      options: ['cataloguing', 'to catalogue', 'catalogue of', 'catalogued'],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The colon introduces a coordinate series of gerund phrases: *mapping abyssal vents, cataloguing benthic biodiversity, and monitoring carbon sequestration*.',
        whyCorrect: 'Option A ("cataloguing") completes the parallel gerund series.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'cataloguing', whyWrong: 'Correct parallel gerund.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'to catalogue', whyWrong: 'Infinitive phrase nonparallel with gerunds.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'catalogue of', whyWrong: 'Noun phrase nonparallel with gerund series.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'catalogued', whyWrong: 'Past participle nonparallel with gerund series.' }
        ]
      }
    },
    {
      questionNumber: 36,
      id: 'ch4-q36',
      difficulty: 'Hard',
      skillTag: 'Demonstrative Singular Reference ("That of")',
      prompt: "The computational processing capacity of a quantum annealer is fundamentally distinct from ___ of a classical binary supercomputer.",
      options: ['those', 'that', 'their', 'them'],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The head noun being compared is "computational processing capacity" (singular/mass). The singular demonstrative pronoun "that" is required.',
        whyCorrect: 'Option B ("that") is the singular demonstrative pronoun correctly replacing "computational processing capacity".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'those', whyWrong: 'Those is plural; computational capacity is singular.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'that', whyWrong: 'Correct singular demonstrative pronoun.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'their', whyWrong: 'Possessive pronoun "their of" is ungrammatical.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'them', whyWrong: 'Personal pronoun "them of" is ungrammatical.' }
        ]
      }
    },
    {
      questionNumber: 37,
      id: 'ch4-q37',
      difficulty: 'Hard',
      skillTag: 'Demonstrative Plural Reference ("Those of")',
      prompt: "The archaeological preservation protocols established by the French Antiquities Authority are far more stringent than ___ of neighboring Mediterranean jurisdictions.",
      options: ["that of the museum","their museums","those of the museum","them museums"],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The compared entity is "archaeological preservation protocols" (plural). Plural demonstrative pronoun "those" is required.',
        whyCorrect: 'Option B ("those") represents "archaeological preservation protocols".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'that', whyWrong: 'That is singular; protocols is plural.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'those', whyWrong: 'Correct plural demonstrative pronoun.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'them', whyWrong: 'Personal pronoun "them of" is ungrammatical.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'their', whyWrong: 'Possessive determiner without a noun is ungrammatical.' }
        ]
      }
    },
    {
      questionNumber: 38,
      id: 'ch4-q38',
      difficulty: 'Hard',
      skillTag: 'Parallel Relative Verbs',
      prompt: 'Economists who model macroeconomic inflationary dynamics and ___ central bank interest rate interventions must incorporate supply-chain bottlenecks into their forecasting algorithms.',
      options: ['evaluating', 'evaluate', 'evaluation of', 'evaluated'],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The relative pronoun "who" governs two parallel present-tense base/plural verbs: *who [model] ... and [evaluate] ...*',
        whyCorrect: 'Option B ("evaluate") matches "model" in tense and base form.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'evaluating', whyWrong: 'Gerund nonparallel with finite verb "model".' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'evaluate', whyWrong: 'Correct parallel present verb.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'evaluation of', whyWrong: 'Noun phrase nonparallel with verb "model".' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'evaluated', whyWrong: 'Past-tense verb nonparallel with present "model".' }
        ]
      }
    },
    {
      questionNumber: 39,
      id: 'ch4-q39',
      difficulty: 'Elite',
      skillTag: 'Prepositional Gerund Series ("By")',
      prompt: 'The materials science consortium enhanced solar cell conversion efficiency by synthesizing perovskite nanocrystals, optimizing thin-film deposition, and ___ interface carrier recombination.',
      options: ['suppressing', 'suppress', 'suppression of', 'suppressed'],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The preposition "by" governs a three-part gerund series: *by [synthesizing] ..., [optimizing] ..., and [suppressing] ...*',
        whyCorrect: 'Option A ("suppressing") completes the parallel gerund series.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'suppressing', whyWrong: 'Correct parallel gerund governed by "by".' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'suppress', whyWrong: 'Base verb cannot follow preposition "by".' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'suppression of', whyWrong: 'Noun phrase nonparallel with preceding gerunds.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'suppressed', whyWrong: 'Past participle cannot follow preposition "by".' }
        ]
      }
    },
    {
      questionNumber: 40,
      id: 'ch4-q40',
      difficulty: 'Elite',
      skillTag: 'Logical Category Comparison (Metric vs. Country)',
      prompt: 'The total installed offshore wind capacity of the United Kingdom is significantly greater than ___.',
      options: [
        'Germany',
        'that of Germany',
        'those of Germany',
        'when Germany installs wind farms'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The comparison is between "total installed offshore wind capacity" (singular metric) and Germany\'s offshore wind capacity. Demonstrative "that of Germany" represents "the offshore wind capacity of Germany".',
        whyCorrect: 'Option B ("that of Germany") creates a valid metric-to-metric comparison.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Germany', whyWrong: 'Compares a capacity metric directly to an entire sovereign nation.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'that of Germany', whyWrong: 'Correct singular demonstrative comparison.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'those of Germany', whyWrong: 'Capacity is singular; "those" is plural.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'when Germany installs wind farms', whyWrong: 'Time clause cannot be compared to a metric.' }
        ]
      }
    },
    {
      questionNumber: 41,
      id: 'ch4-q41',
      difficulty: 'Elite',
      skillTag: 'Parallel Participial Modifiers',
      prompt: 'Formed during the late Cretaceous epoch and ___ by millions of years of hydraulic erosion, the sandstone canyon reveals complex sedimentary stratification.',
      options: ['sculpting', 'sculpted', 'to sculpt', 'the sculpting of it'],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The introductory modifier consists of two coordinate past-participial phrases modifying "the sandstone canyon": *Formed during the late Cretaceous epoch and sculpted by millions of years of hydraulic erosion...*',
        whyCorrect: 'Option B ("sculpted") is the past participle parallel with "Formed".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'sculpting', whyWrong: 'Present participle active; the canyon is sculpted passively.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'sculpted', whyWrong: 'Correct parallel past participle.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'to sculpt', whyWrong: 'Infinitive nonparallel with past participle "Formed".' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'the sculpting of it', whyWrong: 'Noun phrase nonparallel with participial modifier.' }
        ]
      }
    },
    {
      questionNumber: 42,
      id: 'ch4-q42',
      difficulty: 'Elite',
      skillTag: 'Parallel Clausal Complements with "Whether"',
      prompt: 'The bioethics review board evaluated whether the gene-editing clinical trial met international safety standards and ___ sufficient longitudinal monitoring for adverse off-target effects.',
      options: [
        'whether the trial provided',
        'the trial providing',
        'if it was providing',
        'the provision of'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The governing verb "evaluated" introduces two parallel dependent clauses: *whether the gene-editing clinical trial met ... and whether the trial provided ...*',
        whyCorrect: 'Option A ("whether the trial provided") maintains exact clausal symmetry.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'whether the trial provided', whyWrong: 'Correct parallel whether-clause.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'the trial providing', whyWrong: 'Participial phrase nonparallel with whether-clause.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'if it was providing', whyWrong: 'Shifts from "whether" to colloquial "if" and shifts aspect.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'the provision of', whyWrong: 'Noun phrase nonparallel with whether-clause.' }
        ]
      }
    }
  ]
};

export const EXERCISE_BLOCK_8: WritingExerciseBlock = {
  blockNumber: 8,
  title: 'Block 8 Exercises: Core Reduction, Modals, and Nested Symmetries',
  description: 'Targeted Practice on Core Reduction Under Pressure, Modal Verb Chains, Negated Predicates, Appositives, and Multi-Tiered Coordination (Questions 43–50)',
  questions: [
    {
      questionNumber: 43,
      id: 'ch4-q43',
      difficulty: 'Medium',
      skillTag: 'Core Reduction in Compound Sentences',
      prompt: 'The archaeological team, having surveyed the Minoan palace complex with ground-penetrating radar for several weeks, excavated the central courtyard, documented the fresco fragments, and ___ all diagnostic pottery shards.',
      options: ["classification of","classified","classifying","to classify"],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Stripping nonessential modifiers leaves the core subject "team" governing three coordinate past-tense verbs: *team [excavated] ..., [documented] ..., and [catalogued] ...*',
        whyCorrect: 'Option A ("catalogued") completes the parallel past-tense predicate series.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'catalogued', whyWrong: 'Correct parallel past verb.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'cataloguing', whyWrong: 'Participle nonparallel with finite past verbs.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'catalogue of', whyWrong: 'Noun phrase nonparallel with finite verbs.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'to catalogue', whyWrong: 'Infinitive nonparallel with past verbs.' }
        ]
      }
    },
    {
      questionNumber: 44,
      id: 'ch4-q44',
      difficulty: 'Hard',
      skillTag: 'Parallel Modal Verb Chains',
      prompt: 'To mitigate systemic financial contagion during a liquidity crisis, the central bank must provide emergency discount window credit, purchase high-grade commercial paper, and ___ benchmark reserve requirements for commercial lenders.',
      options: ['stabilize', 'stabilizing', 'to stabilize', 'the stabilization of'],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The modal auxiliary "must" governs three coordinate base verbs: *must [provide] ..., [purchase] ..., and [stabilize] ...*',
        whyCorrect: 'Option A ("stabilize") is the base verb completing the modal chain.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'stabilize', whyWrong: 'Correct base verb governed by modal "must".' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'stabilizing', whyWrong: 'Gerund cannot follow modal auxiliary.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'to stabilize', whyWrong: 'Infinitive particle "to" cannot follow modal "must".' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'the stabilization of', whyWrong: 'Noun phrase cannot serve as predicate governed by modal.' }
        ]
      }
    },
    {
      questionNumber: 45,
      id: 'ch4-q45',
      difficulty: 'Hard',
      skillTag: 'Negated Predicate Parallelism ("Did Not")',
      prompt: 'The forensic accounting audit did not identify material revenue inflation, uncover undisclosed executive compensation, or ___ fraudulent off-balance-sheet partnerships.',
      options: ['reveal', 'revealing', 'revealed', 'to reveal'],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The negative auxiliary phrase "did not" governs three parallel uninflected base verbs: *did not [identify] ..., [uncover] ..., or [reveal] ...*',
        whyCorrect: 'Option A ("reveal") is the uninflected base verb completing the negated series.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'reveal', whyWrong: 'Correct base verb governed by "did not".' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'revealing', whyWrong: 'Gerund nonparallel.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'revealed', whyWrong: 'Inflected past verb cannot follow auxiliary "did not".' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'to reveal', whyWrong: 'Infinitive nonparallel.' }
        ]
      }
    },
    {
      questionNumber: 46,
      id: 'ch4-q46',
      difficulty: 'Hard',
      skillTag: 'Appositive Parallelism',
      prompt: 'The chief scientific advisor—___—advocated for strict oversight of synthetic biology research.',
      options: [
        'a veteran molecular biologist and having served as a university dean',
        'a veteran molecular biologist and former university dean',
        'who was a molecular biologist and formerly deaning at a university',
        'being a molecular biologist and also a former university dean'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The parenthetical appositive set off by em dashes requires parallel noun phrases: *a veteran molecular biologist and former university dean*.',
        whyCorrect: 'Option B ("a veteran molecular biologist and former university dean") coordinates two symmetrical noun phrases.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'a veteran molecular biologist and having served', whyWrong: 'Noun phrase paired with participial phrase (nonparallel).' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'a veteran molecular biologist and former university dean', whyWrong: 'Correct parallel noun phrases.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'who was a molecular biologist and formerly deaning', whyWrong: 'Clumsy relative clause and awkward gerund "deaning".' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'being a molecular biologist and also', whyWrong: 'Weak participle "being" introduces unnecessary wordiness.' }
        ]
      }
    },
    {
      questionNumber: 47,
      id: 'ch4-q47',
      difficulty: 'Elite',
      skillTag: 'Subject-Verb Concord in Compound Predicates',
      prompt: 'The state seismological observatory collects seismic waveforms from three hundred stations, calibrates sensor sensitivities continuously, and ___ real-time earthquake rupture models to emergency management agencies.',
      options: ['transmits', 'transmit', 'transmitting', 'the transmission of'],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The singular subject "observatory" governs three coordinate 3rd-person singular present verbs: *observatory [collects] ..., [calibrates] ..., and [transmits] ...*',
        whyCorrect: 'Option A ("transmits") is the 3rd-person singular present verb maintaining subject concord.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'transmits', whyWrong: 'Correct singular present verb agreeing with "observatory".' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'transmit', whyWrong: 'Plural verb violates agreement with singular "observatory".' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'transmitting', whyWrong: 'Present participle nonparallel with finite verbs.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'the transmission of', whyWrong: 'Noun phrase nonparallel with verbs.' }
        ]
      }
    },
    {
      questionNumber: 48,
      id: 'ch4-q48',
      difficulty: 'Elite',
      skillTag: 'Nested Multi-Tier Parallelism',
      prompt: 'The renewable energy framework incentivizes municipal utilities to retire coal-fired plants and ___ battery storage, and it encourages grid operators to optimize cross-border power transmission.',
      options: ['deploy', 'deploying', 'the deployment of', 'to be deploying'],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Inside the first clause, the infinitive particle "to" governs two parallel base verbs: *to [retire] ... and [deploy] ...*',
        whyCorrect: 'Option A ("deploy") is the base verb parallel with "retire".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'deploy', whyWrong: 'Correct base verb governed by infinitive "to".' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'deploying', whyWrong: 'Gerund nonparallel with base verb "retire".' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'the deployment of', whyWrong: 'Noun phrase nonparallel with base verb "retire".' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'to be deploying', whyWrong: 'Progressive infinitive is unnecessarily wordy and nonparallel.' }
        ]
      }
    },
    {
      questionNumber: 49,
      id: 'ch4-q49',
      difficulty: 'Elite',
      skillTag: 'Tense Chronology across Coordinated Clauses',
      prompt: 'Paleoanthropologists confirmed that early hominins had manufactured stone bifaces long before fire ___ for cooking.',
      options: ['was domesticated', 'had been domesticated', 'is domesticated', 'domesticating'],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The past perfect "had manufactured" marks the earlier anterior action. The subsequent historical baseline event takes simple past passive: "before fire was domesticated".',
        whyCorrect: 'Option A ("was domesticated") expresses the subsequent past baseline event correctly.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'was domesticated', whyWrong: 'Correct simple past passive.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'had been domesticated', whyWrong: 'Double past perfect obscures the clear chronological sequence established by "long before".' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'is domesticated', whyWrong: 'Present tense inconsistent with prehistoric archaeological narrative.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'domesticating', whyWrong: 'Participle creates a dangling structure; fire does not domesticate itself.' }
        ]
      }
    },
    {
      questionNumber: 50,
      id: 'ch4-q50',
      difficulty: 'Elite',
      skillTag: 'Parallel Passive Participles with "Was"',
      prompt: 'The recovered Roman bronze statue was desalted in chemical solutions, scanned with computed tomography, and ___ by conservators in Florence.',
      options: ['restored', 'restoring', 'to restore', 'restoration of it'],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The singular auxiliary "was" governs three parallel past participles: *was [desalted] ..., [scanned] ..., and [restored] ...*',
        whyCorrect: 'Option A ("restored") completes the passive past participial series.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'restored', whyWrong: 'Correct parallel past participle.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'restoring', whyWrong: 'Present participle active; the statue is restored passively.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'to restore', whyWrong: 'Infinitive breaks passive series.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'restoration of it', whyWrong: 'Noun phrase breaks passive series.' }
        ]
      }
    }
  ]
};

export const EXERCISE_BLOCK_9: WritingExerciseBlock = {
  blockNumber: 9,
  title: 'Block 9 Exercises: Elite Comparative Logic & Negative Inversion',
  description: 'Targeted Practice on Negative Inversion ("Not Only Did..."), Prepositional "To" vs. Infinitive "To", Comparative Correlatives, and False Correlatives (Questions 51–58)',
  questions: [
    {
      questionNumber: 51,
      id: 'ch4-q51',
      difficulty: 'Medium',
      skillTag: 'Negative Inversion ("Not Only Did...")',
      prompt: 'Not only ___ the presence of subglacial liquid water beneath the Martian polar cap, but it also mapped underground geological fissures.',
      options: [
        'the radar sounder detected',
        'did the radar sounder detect',
        'the radar sounder had detected',
        'was the radar sounder detecting'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'When a sentence begins with the restrictive negative correlative "Not only", the main clause requires mandatory subject-auxiliary inversion: "did [subject] [base verb]".',
        whyCorrect: 'Option B ("did the radar sounder detect") correctly applies negative auxiliary inversion before the subject "radar sounder".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'the radar sounder detected', whyWrong: 'Fails to invert subject and auxiliary after introductory "Not only".' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'did the radar sounder detect', whyWrong: 'Correct subject-auxiliary inversion.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'the radar sounder had detected', whyWrong: 'Lacks subject-auxiliary inversion.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'was the radar sounder detecting', whyWrong: 'Unnecessarily shifts to progressive aspect.' }
        ]
      }
    },
    {
      questionNumber: 52,
      id: 'ch4-q52',
      difficulty: 'Hard',
      skillTag: 'Prepositional "To" (+ Gerund) vs Infinitive "To"',
      prompt: 'The pharmaceutical research consortium objected to altering the clinical trial endpoints and ___ the post-market surveillance duration.',
      options: ['shorten', 'shortening', 'to shorten', 'the shortening of'],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The verbal idiom "object to" uses "to" as a preposition, requiring gerund (-ing) complements: *objected to [altering ...] and [shortening ...]*.',
        whyCorrect: 'Option B ("shortening") provides the parallel gerund governed by preposition "to".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'shorten', whyWrong: 'Base verb cannot follow preposition "to" in "object to".' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'shortening', whyWrong: 'Correct parallel gerund.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'to shorten', whyWrong: 'Treats "to" as an infinitive particle rather than prepositional complement.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'the shortening of', whyWrong: 'Noun phrase nonparallel with preceding gerund phrase.' }
        ]
      }
    },
    {
      questionNumber: 53,
      id: 'ch4-q53',
      difficulty: 'Hard',
      skillTag: 'Comparative Correlatives ("The More... The More")',
      prompt: 'The more rigorously clinical epidemiologists control for socio-demographic confounders, ___ their statistical conclusions become.',
      options: [
        'the more reliable',
        'the most reliable',
        'more reliable',
        'reliability increases in'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Comparative correlatives require the balanced formula: "The + comparative ..., the + comparative ..."',
        whyCorrect: 'Option A ("the more reliable") completes the "The more [adverb] ..., the more [adjective] ..." comparative correlative.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'the more reliable', whyWrong: 'Correct balanced comparative correlative.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'the most reliable', whyWrong: 'Superlative "most" cannot be used in a two-part comparative correlative.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'more reliable', whyWrong: 'Omits required definite article "the".' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'reliability increases in', whyWrong: 'Disrupts the parallel comparative correlative structure.' }
        ]
      }
    },
    {
      questionNumber: 54,
      id: 'ch4-q54',
      difficulty: 'Hard',
      skillTag: 'False Correlative Traps ("Both... And")',
      prompt: 'The macroeconomic stabilization policy was both fiscally prudent ___ for maintaining domestic liquidity.',
      options: [
        'as well as necessary',
        'and necessary',
        'along with necessary',
        'but also necessary'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The correlative conjunction "both" strictly pairs with "and" (*both fiscally prudent and necessary*).',
        whyCorrect: 'Option B ("and necessary") provides the correct correlative partner "and" with a parallel adjective.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'as well as necessary', whyWrong: 'Cannot pair "both" with "as well as".' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'and necessary', whyWrong: 'Correct correlative pair "both... and".' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'along with necessary', whyWrong: 'Cannot pair "both" with "along with".' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'but also necessary', whyWrong: '"But also" pairs with "not only", not "both".' }
        ]
      }
    },
    {
      questionNumber: 55,
      id: 'ch4-q55',
      difficulty: 'Elite',
      skillTag: 'Prepositional "To" with "Committed To"',
      prompt: 'The international conservation organization is committed to protecting coastal mangrove ecosystems, restoring degraded salt marshes, and ___ transboundary biodiversity corridors.',
      options: ['establishing', 'establish', 'to establish', 'the establishment of'],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The idiom "committed to" uses "to" as a governing preposition, requiring a series of gerunds: *committed to [protecting] ..., [restoring] ..., and [establishing] ...*',
        whyCorrect: 'Option A ("establishing") completes the parallel gerund series.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'establishing', whyWrong: 'Correct parallel gerund governed by "committed to".' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'establish', whyWrong: 'Base verb cannot follow preposition "to" in this idiom.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'to establish', whyWrong: 'Infinitive nonparallel with preceding gerunds.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'the establishment of', whyWrong: 'Noun phrase nonparallel with gerund series.' }
        ]
      }
    },
    {
      questionNumber: 56,
      id: 'ch4-q56',
      difficulty: 'Elite',
      skillTag: 'Negative Inversion with "Rarely"',
      prompt: 'Rarely ___ such unequivocal consensus among atmospheric scientists regarding anthropogenic forcing mechanisms.',
      options: [
        'has an empirical finding generated',
        'an empirical finding has generated',
        'an empirical finding generated',
        'having an empirical finding generate'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'When the restrictive adverb "Rarely" introduces a sentence, the auxiliary verb must precede the subject: "has [subject] [past participle]".',
        whyCorrect: 'Option A ("has an empirical finding generated") correctly inverts auxiliary "has" before the subject "empirical finding".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'has an empirical finding generated', whyWrong: 'Correct negative inversion syntax.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'an empirical finding has generated', whyWrong: 'Fails to invert subject and auxiliary after introductory "Rarely".' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'an empirical finding generated', whyWrong: 'Lacks auxiliary inversion and distorts tense.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'having an empirical finding generate', whyWrong: 'Creates a sentence fragment with no finite verb.' }
        ]
      }
    },
    {
      questionNumber: 57,
      id: 'ch4-q57',
      difficulty: 'Elite',
      skillTag: 'Comparative Auxiliary Substitution ("Does")',
      prompt: 'The James Webb Space Telescope observes celestial targets in longer infrared wavelengths than the Hubble Space Telescope ___.',
      options: ['does', 'is', 'did', 'has'],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The comparison links the current observational capacity of both active space telescopes. Present auxiliary "does" replaces "observes celestial targets".',
        whyCorrect: 'Option A ("does") is the 3rd-person singular present auxiliary matching "observes".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'does', whyWrong: 'Correct present auxiliary substitute for action verb "observes".' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'is', whyWrong: 'Copular "is" cannot substitute for dynamic action verb "observes".' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'did', whyWrong: 'Past tense "did" is inconsistent with present-tense telescope operations.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'has', whyWrong: 'Present perfect auxiliary mismatched with simple present "observes".' }
        ]
      }
    },
    {
      questionNumber: 58,
      id: 'ch4-q58',
      difficulty: 'Elite',
      skillTag: 'Symmetrical Correlative Placement',
      prompt: 'The clean energy bill provides incentives not only for residential rooftop solar installations ___ commercial wind farm developments.',
      options: [
        'but also for utility-scale',
        'but also utility-scale',
        'and also for utility-scale',
        'as well as for utility-scale'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Following "not only for [Noun Phrase X]", correlative balance requires "but also for [Noun Phrase Y]". The preposition "for" must be repeated after "but also" to preserve exact prepositional symmetry.',
        whyCorrect: 'Option A ("but also for utility-scale") maintains symmetrical prepositional framing ("for X ... but also for Y").',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'but also for utility-scale', whyWrong: 'Correct symmetrical prepositional correlative.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'but also utility-scale', whyWrong: 'Omits preposition "for", creating asymmetrical phrasing.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'and also for utility-scale', whyWrong: 'False correlative pairing ("and also" instead of "but also").' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'as well as for utility-scale', whyWrong: 'False correlative pairing.' }
        ]
      }
    }
  ]
};

export const EXERCISE_BLOCK_10: WritingExerciseBlock = {
  blockNumber: 10,
  title: 'Block 10 Comprehensive Mastery: High-Difficulty Synthesis Exam',
  description: '12 Advanced Multi-Rule Synthesis Questions Across Astrophysics, Paleobiology, Macroeconomics, Glaciology, and Quantum Mechanics (Questions 59–70)',
  questions: [
    {
      questionNumber: 59,
      id: 'ch4-q59',
      difficulty: 'Elite',
      skillTag: 'Introductory Participial Modifier + Actor Alignment',
      prompt: 'Having analyzed seismic waveforms and sulfur dioxide degassing patterns over six consecutive months, ___.',
      options: [
        'an imminent volcanic eruption was predicted by the geophysical survey team',
        'the geophysical survey team predicted an imminent volcanic eruption in the southern caldera',
        'there was a prediction by the geophysical survey team regarding an imminent volcanic eruption',
        'the volcanic caldera was predicted to erupt imminently by the geophysical survey team'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The introductory perfect participle "Having analyzed..." requires that the human researchers ("geophysical survey team") occupy the subject position immediately following the comma.',
        whyCorrect: 'Option B places "the geophysical survey team" immediately after the comma as the active grammatical subject.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'an imminent volcanic eruption was predicted', whyWrong: 'An eruption cannot analyze waveforms (dangling modifier).' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'the geophysical survey team predicted', whyWrong: 'Correct. Survey team analyzed the data.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'there was a prediction by', whyWrong: 'Expletive "there was" creates a dangling participle.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'the volcanic caldera was predicted', whyWrong: 'Caldera cannot analyze seismic waveforms (dangling modifier).' }
        ]
      }
    },
    {
      questionNumber: 60,
      id: 'ch4-q60',
      difficulty: 'Elite',
      skillTag: 'Like-With-Like Demonstrative Comparison ("Those of")',
      prompt: 'The fossilized dentition patterns of Australopithecus afarensis differ significantly from ___ of contemporaneous robust australopithecines.',
      options: ['that', 'those', 'them', 'the patterns observed in that'],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The comparison is between "dentition patterns" (plural) and the dentition patterns of robust australopithecines. Plural demonstrative "those" is required.',
        whyCorrect: 'Option B ("those") is the plural demonstrative pronoun representing "dentition patterns".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'that', whyWrong: 'That is singular; dentition patterns is plural.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'those', whyWrong: 'Correct plural demonstrative pronoun.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'them', whyWrong: 'Personal pronoun "them of" is ungrammatical.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'the patterns observed in that', whyWrong: 'Clumsy, wordy, and uses singular "that" inappropriately.' }
        ]
      }
    },
    {
      questionNumber: 61,
      id: 'ch4-q61',
      difficulty: 'Elite',
      skillTag: 'Negative Inversion Syntax ("Not Only Did...")',
      prompt: 'Not only ___ the structural integrity of the composite aircraft fuselage, but they also reduced aerodynamic drag along the wing root.',
      options: [
        'the titanium alloys enhanced',
        'did the titanium alloys enhance',
        'had the titanium alloys enhanced',
        'the titanium alloys were enhancing'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Introductory "Not only" requires mandatory auxiliary inversion: "did [subject] [base verb]".',
        whyCorrect: 'Option B ("did the titanium alloys enhance") correctly applies negative auxiliary inversion.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'the titanium alloys enhanced', whyWrong: 'Fails to invert subject and auxiliary.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'did the titanium alloys enhance', whyWrong: 'Correct negative auxiliary inversion.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'had the titanium alloys enhanced', whyWrong: 'Lacks standard simple-past auxiliary inversion matching "they also reduced".' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'the titanium alloys were enhancing', whyWrong: 'Lacks inversion and shifts aspect.' }
        ]
      }
    },
    {
      questionNumber: 62,
      id: 'ch4-q62',
      difficulty: 'Elite',
      skillTag: 'Additive Phrase Agreement vs. True Compound Subject',
      prompt: 'The principal investigator, together with three postdoctoral biochemists, ___ the crystallized enzyme structure at the European Synchrotron Radiation Facility.',
      options: ['are analyzing', 'is analyzing', 'have analyzed', 'were analyzing'],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Additive phrase "together with..." does not alter the singular number of the head subject "investigator". The verb must be singular.',
        whyCorrect: 'Option B ("is analyzing") is the singular present progressive verb agreeing with "principal investigator".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'are analyzing', whyWrong: 'Plural verb error; additive phrase does not create a compound subject.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'is analyzing', whyWrong: 'Correct singular verb agreeing with "principal investigator".' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'have analyzed', whyWrong: 'Plural present perfect error.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'were analyzing', whyWrong: 'Plural past error.' }
        ]
      }
    },
    {
      questionNumber: 63,
      id: 'ch4-q63',
      difficulty: 'Elite',
      skillTag: 'Disjunctive Correlatives Nearer-Subject Concord',
      prompt: 'Neither the senior econometricians nor the central bank governor ___ convinced that rate cuts would stabilize currency volatility.',
      options: ['were', 'was', 'are being', 'have been'],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Under the Rule of Proximity with "neither...nor", the verb agrees with the nearer subject "governor" (singular).',
        whyCorrect: 'Option B ("was") is the singular past-tense verb agreeing with "governor".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'were', whyWrong: 'Plural verb ignores proximity to singular "governor".' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'was', whyWrong: 'Correct singular verb agreeing with nearer subject "governor".' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'are being', whyWrong: 'Plural progressive verb error.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'have been', whyWrong: 'Plural present perfect verb error.' }
        ]
      }
    },
    {
      questionNumber: 64,
      id: 'ch4-q64',
      difficulty: 'Elite',
      skillTag: 'Dangling "Unlike" Metric Mismatch',
      prompt: 'Unlike traditional Gothic cathedrals, which rely on external flying buttresses to distribute structural loads, ___ .',
      options: [
        'the structural vaulting of modern steel skyscrapers distributes loads internally',
        'modern steel skyscrapers distribute structural loads internally through integrated steel framing',
        'the internal load distribution of modern steel skyscrapers is handled by steel framing',
        'internal load-bearing columns characterize modern steel skyscrapers'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The introductory phrase "Unlike traditional Gothic cathedrals" establishes a comparison with physical cathedrals (buildings). The subject following the comma must be an equivalent physical entity (skyscrapers).',
        whyCorrect: 'Option B places "modern steel skyscrapers" immediately after the comma, creating a logical building-to-building comparison.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'the structural vaulting of modern steel skyscrapers', whyWrong: 'Compares cathedrals to "structural vaulting" (feature/mechanism).' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'modern steel skyscrapers distribute', whyWrong: 'Correct. Compares Gothic cathedrals to modern steel skyscrapers.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'the internal load distribution of modern steel skyscrapers', whyWrong: 'Compares cathedrals directly to an abstract physical metric ("the internal load distribution").' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'internal load-bearing columns characterize', whyWrong: 'Compares cathedrals directly to structural features.' }
        ]
      }
    },
    {
      questionNumber: 65,
      id: 'ch4-q65',
      difficulty: 'Elite',
      skillTag: 'Prepositional "To" vs. Infinitive "To"',
      prompt: 'The semiconductor manufacturing consortium is dedicated to developing extreme ultraviolet lithography scanners and ___ silicon wafer defect densities.',
      options: ['minimizing', 'minimize', 'to minimize', 'the minimization of'],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The idiom "dedicated to" uses "to" as a preposition, requiring gerunds: *dedicated to [developing ...] and [minimizing ...]*.',
        whyCorrect: 'Option A ("minimizing") completes the parallel gerund series.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'minimizing', whyWrong: 'Correct parallel gerund governed by "dedicated to".' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'minimize', whyWrong: 'Base verb cannot follow preposition "to" in this idiom.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'to minimize', whyWrong: 'Infinitive breaks gerund series.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'the minimization of', whyWrong: 'Noun phrase nonparallel with gerund series.' }
        ]
      }
    },
    {
      questionNumber: 66,
      id: 'ch4-q66',
      difficulty: 'Elite',
      skillTag: 'Coordinate Clauses vs. Compound Predicates',
      prompt: 'The deep-space probe successfully executed its orbital insertion burn and ___ scientific telemetry back to mission control in Pasadena.',
      options: ['transmitted', 'transmitting', 'to transmit', 'the transmission of'],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The single subject "probe" governs two coordinate past-tense verbs: *probe [executed ...] and [transmitted ...]*.',
        whyCorrect: 'Option A ("transmitted") matches "executed" in tense and mood.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'transmitted', whyWrong: 'Correct parallel past verb.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'transmitting', whyWrong: 'Participle breaks finite predicate series.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'to transmit', whyWrong: 'Infinitive breaks finite predicate series.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'the transmission of', whyWrong: 'Noun phrase breaks predicate series.' }
        ]
      }
    },
    {
      questionNumber: 67,
      id: 'ch4-q67',
      difficulty: 'Elite',
      skillTag: 'Demonstrative Singular Reference ("That of")',
      prompt: "The tensile strength of carbon-nanotube reinforced polymer composites is considerably greater than ___ of conventional structural aluminum alloys.",
      options: ["that of","those of","it of","them of"],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The compared property is "tensile strength" (singular/mass). The singular demonstrative "that" represents "tensile strength".',
        whyCorrect: 'Option B ("that") is the correct singular demonstrative pronoun.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'those', whyWrong: 'Those is plural; tensile strength is singular.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'that', whyWrong: 'Correct singular demonstrative pronoun.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'them', whyWrong: 'Personal pronoun "them of" is ungrammatical.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'it', whyWrong: 'Personal pronoun "it of" is ungrammatical.' }
        ]
      }
    },
    {
      questionNumber: 68,
      id: 'ch4-q68',
      difficulty: 'Elite',
      skillTag: 'Limiting Adverb Placement Precision',
      prompt: 'The appellate court only overturned the lower bench’s ruling on procedural due process grounds.\n\nWhat is the precise grammatical implication of placing "only" before "overturned"?',
      options: [
        'No other legal ground was considered, and the court did nothing other than overturn the ruling.',
        'No other appellate tribunal possesses the jurisdictional authority to overturn the ruling.',
        'The court overturned the procedural ruling but affirmed all other substantive aspects of the lower court judgment.',
        'The procedural due process ground was the only legal claim filed by the appellant.'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Placing "only" immediately before the verb "overturned" restricts the court\'s action: the court merely overturned the ruling and took no further legal or procedural action.',
        whyCorrect: 'Option A accurately conveys that "only" modifies the verbal action "overturned". (To restrict the legal grounds, "only" should precede "on procedural due process grounds").',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'did nothing other than overturn the ruling', whyWrong: 'Correct literal semantic interpretation of verb-modifying "only".' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'No other appellate tribunal possesses authority', whyWrong: 'That would require "Only the appellate court overturned...".' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'overturned procedural ruling but affirmed others', whyWrong: 'That would require "overturned the ruling only on procedural grounds".' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'procedural ground was the only claim filed', whyWrong: 'Distorts the target of the modifier.' }
        ]
      }
    },
    {
      questionNumber: 69,
      id: 'ch4-q69',
      difficulty: 'Elite',
      skillTag: 'Parallel Correlative Inversion with "Not Only"',
      prompt: 'Not only did the oceanographic expedition map eighteen uncharted seamounts, but it also ___ baseline data on abyssal hydrothermal vent ecosystems.',
      options: ['collected', 'collecting', 'to collect', 'collection of'],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Following the inverted initial clause (*Not only did the expedition map...*), the second clause contains standard past-tense word order: *but it also collected...*.',
        whyCorrect: 'Option A ("collected") is the simple past finite verb matching the completed past expedition.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'collected', whyWrong: 'Correct finite past verb.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'collecting', whyWrong: 'Participle cannot serve as finite predicate after "it also".' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'to collect', whyWrong: 'Infinitive cannot serve as finite predicate.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'collection of', whyWrong: 'Noun phrase cannot serve as predicate.' }
        ]
      }
    },
    {
      questionNumber: 70,
      id: 'ch4-q70',
      difficulty: 'Elite',
      skillTag: 'Master Synthesis: Modifier + Comparison + Parallelism',
      prompt: 'Synthesized from recycled agricultural bio-waste and ___ under high-pressure autoclaves, the biodegradable polymer exhibits a tensile modulus comparable to ___ of petroleum-based polyethylene.',
      options: [
        'cured; that',
        'curing; those',
        'cured; those',
        'to cure; that'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'First gap: The introductory modifier requires two coordinate past participles modifying "the biodegradable polymer" (*Synthesized ... and cured*). Second gap: The comparison is between "tensile modulus" (singular metric) and petroleum-based polyethylene; singular demonstrative "that" is required.',
        whyCorrect: 'Option A ("cured; that") provides the matching past participle "cured" and the singular demonstrative pronoun "that".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'cured; that', whyWrong: 'Correct past participle and singular demonstrative.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'curing; those', whyWrong: 'Active participle "curing" is nonparallel with passive "Synthesized", and "those" is plural.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'cured; those', whyWrong: 'Plural "those" fails to agree with singular "tensile modulus".' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'to cure; that', whyWrong: 'Infinitive "to cure" is nonparallel with past participle "Synthesized".' }
        ]
      }
    }
  ]
};
