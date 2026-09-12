import { WritingExerciseBlock } from './satWritingTypes';

// ==========================================
// BLOCK 5: MODIFIERS, DANGLING PARTICIPLES & APPOSITIVES (Q41 - Q50)
// ==========================================
export const EXERCISE_BLOCK_5: WritingExerciseBlock = {
  blockNumber: 5,
  title: 'Block 5 Exercises: Modifier Placement, Participial Logic & Appositives',
  description: '10 Questions (Questions 41–50) testing dangling participles, misplaced modifiers, limiting adverbs, and restrictive vs. nonrestrictive clausal modifiers.',
  questions: [
    {
      questionNumber: 41,
      id: 'ch3-q41',
      difficulty: 'Intermediate',
      skillTag: 'Modifier Placement - Dangling Participle',
      prompt: 'Deciphering the weathered cuneiform inscriptions on the clay tablet, ___ revealed insights into Bronze Age Mesopotamian trade networks.',
      options: [
        'an ancient mercantile tax system was discovered by epigraphers that',
        'the epigraphers discovered an ancient mercantile tax system that',
        'it was determined by historians that an ancient tax system',
        'there were ancient records discovered that'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The introductory participial phrase "Deciphering the weathered cuneiform inscriptions on the clay tablet" must be immediately followed by the logical agent performing the deciphering ("the epigraphers").',
        whyCorrect: 'Option B correctly places "the epigraphers" immediately following the introductory modifier.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'an ancient mercantile tax system was discovered by epigraphers that', whyWrong: 'Dangling modifier: suggests the "tax system" was deciphering the cuneiform tablet.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'the epigraphers discovered an ancient mercantile tax system that', whyWrong: 'Correct answer.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'it was determined by historians that an ancient tax system', whyWrong: 'Dangling modifier with dummy pronoun "it."' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'there were ancient records discovered that', whyWrong: 'Dangling modifier with existential "there" construction.' }
        ]
      }
    },
    {
      questionNumber: 42,
      id: 'ch3-q42',
      difficulty: 'Hard',
      skillTag: 'Modifier Placement - Misplaced Prepositional Phrase',
      prompt: 'Which choice most clearly and logically communicates that the paleontologist used a high-powered electron microscope to analyze the dinosaur fossil?',
      options: [
        'The paleontologist analyzed the fossil of the Cretaceous theropod using a high-powered electron microscope.',
        'Using a high-powered electron microscope, the Cretaceous theropod fossil was analyzed by the paleontologist.',
        'The paleontologist analyzed using a high-powered electron microscope the Cretaceous theropod fossil.',
        'The Cretaceous theropod fossil of the paleontologist was analyzed using a high-powered electron microscope.'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'In Option A, the active subject "The paleontologist" performs the verb "analyzed," and the instrumental phrase "using a high-powered electron microscope" clearly and idiomatically modifies the action.',
        whyCorrect: 'Option A provides clear, direct active syntax without misplaced or dangling modifiers.',
        distractorAnalysis: [
          { optionIndex: 1, optionLabel: 'B', optionText: 'Using a high-powered electron microscope, the Cretaceous theropod fossil was analyzed...', whyWrong: 'Dangling modifier: suggests the fossil itself used the microscope.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'The paleontologist analyzed using a high-powered electron microscope the Cretaceous...', whyWrong: 'Awkward clausal splitting that separates the transitive verb from its direct object.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'The Cretaceous theropod fossil of the paleontologist was analyzed...', whyWrong: 'Illogical possessive structure suggesting the paleontologist owned the Cretaceous fossil.' }
        ]
      }
    },
    {
      questionNumber: 43,
      id: 'ch3-q43',
      difficulty: 'Intermediate',
      skillTag: 'Modifier Placement - Restrictive vs Nonrestrictive',
      prompt: 'Renowned marine biologist Sylvia Earle ___ has logged thousands of hours exploring deep-sea benthic habitats.',
      options: [
        ', who pioneered atmospheric diving suits,',
        'who pioneered atmospheric diving suits,',
        ', who pioneered atmospheric diving suits',
        'pioneered atmospheric diving suits'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The nonrestrictive relative clause "who pioneered atmospheric diving suits" adds supplementary biographical detail about a named individual ("Sylvia Earle") and must be enclosed in symmetrical commas.',
        whyCorrect: 'Option A provides the closing and opening commas required to set off a nonrestrictive clause.',
        distractorAnalysis: [
          { optionIndex: 1, optionLabel: 'B', optionText: 'who pioneered atmospheric diving suits,', whyWrong: 'Missing the necessary opening comma.' },
          { optionIndex: 0, optionLabel: 'A', optionText: ', who pioneered atmospheric diving suits,', whyWrong: 'Correct answer.' },
          { optionIndex: 2, optionLabel: 'C', optionText: ', who pioneered atmospheric diving suits', whyWrong: 'Missing the closing comma before the main predicate "has logged."' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'pioneered atmospheric diving suits', whyWrong: 'Creates a double finite verb error without a conjunction or relative pronoun.' }
        ]
      }
    },
    {
      questionNumber: 44,
      id: 'ch3-q44',
      difficulty: 'Hard',
      skillTag: 'Modifier Placement - Dangling Infinitive Phrase',
      prompt: 'To accurately calculate the gravitational wave frequencies emitted by colliding black holes, ___ .',
      options: [
        'supercomputing clusters running numerical relativity simulations are required by astrophysicists',
        'astrophysicists must utilize supercomputing clusters to run numerical relativity simulations',
        'numerical relativity simulations must be run on supercomputing clusters',
        'the calculations must be executed on supercomputing clusters by astrophysicists'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The introductory infinitive phrase of purpose "To accurately calculate the gravitational wave frequencies..." requires an agent capable of performing calculations ("astrophysicists") as the immediate subject.',
        whyCorrect: 'Option B correctly supplies "astrophysicists" as the subject following the infinitive modifier.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'supercomputing clusters running numerical relativity simulations are required...', whyWrong: 'Dangling modifier: suggests the clusters themselves are calculating the frequencies.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'astrophysicists must utilize supercomputing clusters...', whyWrong: 'Correct answer.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'numerical relativity simulations must be run...', whyWrong: 'Dangling modifier: suggests the simulations are calculating the frequencies.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'the calculations must be executed...', whyWrong: 'Dangling modifier: suggests the calculations calculate themselves.' }
        ]
      }
    },
    {
      questionNumber: 45,
      id: 'ch3-q45',
      difficulty: 'Foundation',
      skillTag: 'Modifier Placement - Limiting Adverb Placement',
      prompt: 'Which sentence most clearly conveys that the museum allows photography *strictly on Sunday mornings* and on no other day or time?',
      options: [
        'The museum only allows photography in its Renaissance galleries on Sunday mornings.',
        'The museum allows photography in its Renaissance galleries only on Sunday mornings.',
        'Only the museum allows photography in its Renaissance galleries on Sunday mornings.',
        'The museum allows only photography in its Renaissance galleries on Sunday mornings.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Limiting adverbs like "only" must immediately precede the exact phrase they modify. Placing "only" before "on Sunday mornings" precisely restricts the permission to that specific time frame.',
        whyCorrect: 'Option B places "only" directly before the temporal prepositional phrase "on Sunday mornings."',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'The museum only allows photography...', whyWrong: 'Suggests the museum merely allows photography rather than doing something else with it.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'The museum allows photography in its Renaissance galleries only on Sunday mornings.', whyWrong: 'Correct answer.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Only the museum allows photography...', whyWrong: 'Suggests no other museum allows photography.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'The museum allows only photography...', whyWrong: 'Suggests the museum allows nothing other than photography in the galleries.' }
        ]
      }
    },
    {
      questionNumber: 46,
      id: 'ch3-q46',
      difficulty: 'Intermediate',
      skillTag: 'Modifier Placement - Dangling Adjectival Phrase',
      prompt: 'Exhausted after forty-eight hours of continuous orbital monitoring, ___ .',
      options: [
        'a scheduled rest rotation was finally granted to the flight controllers',
        'the flight director relieved the mission controllers and ordered them to rest',
        'the telemetry screens were dimmed by the weary flight controllers',
        'it was necessary for the flight controllers to be relieved by the backup crew'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The introductory adjective phrase "Exhausted after forty-eight hours of continuous orbital monitoring" must logically modify human beings who experienced exhaustion ("the flight director" / "the mission controllers").',
        whyCorrect: 'Option B correctly places the logical human subject ("the flight director") as the actor following the modifier.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'a scheduled rest rotation was finally granted...', whyWrong: 'Dangling modifier: suggests the "rest rotation" was exhausted.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'the flight director relieved the mission controllers...', whyWrong: 'Correct answer.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'the telemetry screens were dimmed...', whyWrong: 'Dangling modifier: suggests the "screens" were exhausted.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'it was necessary for the flight controllers...', whyWrong: 'Dangling modifier with dummy pronoun "it."' }
        ]
      }
    },
    {
      questionNumber: 47,
      id: 'ch3-q47',
      difficulty: 'Hard',
      skillTag: 'Modifier Placement - Appositive Placement',
      prompt: 'A groundbreaking agricultural economist, ___ helped double cereal yields across South Asia during the Green Revolution.',
      options: [
        'the development of semi-dwarf wheat by Norman Borlaug',
        'Norman Borlaug developed semi-dwarf wheat that',
        'Norman Borlaug\'s semi-dwarf wheat cultivars',
        'Norman Borlaug'
      ],
      correctAnswer: 3,
      explanation: {
        coreReasoning: 'The introductory appositive phrase "A groundbreaking agricultural economist" defines a human individual. The subject that immediately follows must be the individual himself ("Norman Borlaug").',
        whyCorrect: 'Option D supplies the person "Norman Borlaug" as the grammatical subject.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'the development of semi-dwarf wheat by Norman Borlaug', whyWrong: 'Illogically aligns an "agricultural economist" with "the development."' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Norman Borlaug developed semi-dwarf wheat that', whyWrong: 'Creates an ungrammatical run-on sentence structure with the trailing verb "helped."' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Norman Borlaug\'s semi-dwarf wheat cultivars', whyWrong: 'Illogically aligns the person "economist" with inanimate "wheat cultivars."' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Norman Borlaug', whyWrong: 'Correct answer.' }
        ]
      }
    },
    {
      questionNumber: 48,
      id: 'ch3-q48',
      difficulty: 'Hard',
      skillTag: 'Modifier Placement - Squinting Modifier',
      prompt: 'Which revision best eliminates the ambiguous ("squinting") modifier in the sentence: *Students who exercise regularly experience fewer health problems.*? ',
      options: [
        'Students who exercise on a regular basis experience fewer health problems.',
        'Students who regularly exercise experience fewer health problems.',
        'Regularly exercising, fewer health problems are experienced by students.',
        'Experiencing fewer health problems, regular exercise is done by students.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'In the original sentence, "regularly" sits between "exercise" and "experience," creating ambiguity as to whether students *exercise regularly* or *regularly experience* fewer problems. Placing "regularly" immediately before "exercise" eliminates all ambiguity.',
        whyCorrect: 'Option B positions "regularly" directly inside the relative clause modifying "exercise."',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Students who exercise on a regular basis experience fewer health problems.', whyWrong: 'While grammatical, it replaces one adverb with a more wordy phrase rather than cleanly repositioning the adverb.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Students who regularly exercise experience fewer health problems.', whyWrong: 'Correct answer.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Regularly exercising, fewer health problems are experienced by students.', whyWrong: 'Introduces a dangling modifier.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Experiencing fewer health problems, regular exercise is done by students.', whyWrong: 'Introduces a dangling modifier.' }
        ]
      }
    },
    {
      questionNumber: 49,
      id: 'ch3-q49',
      difficulty: 'Intermediate',
      skillTag: 'Modifier Placement - Absolute Phrases',
      prompt: 'The lunar seismometer registered three distinct micro-tremors, ___ indicated subsurface magma displacement.',
      options: [
        'each of which',
        'each of them',
        'all of these',
        'they'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'To join a dependent descriptive clause to the independent clause without creating a comma splice, a relative pronoun ("which") is required ("each of which indicated...").',
        whyCorrect: '"each of which" correctly creates a dependent relative clause attached by a comma.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'each of which', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'each of them', whyWrong: 'Creates a comma splice by introducing a second independent clause with pronoun "them."' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'all of these', whyWrong: 'Creates a comma splice.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'they', whyWrong: 'Creates a classic comma splice.' }
        ]
      }
    },
    {
      questionNumber: 50,
      id: 'ch3-q50',
      difficulty: 'Hard',
      skillTag: 'Modifier Placement - Trailing Participial Modifiers',
      prompt: 'The tectonic plates converged along the oceanic trench, ___ massive pressure that triggered deep-focus earthquakes.',
      options: [
        'generated',
        'generating',
        'and generates',
        'having been generated'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'A trailing present participial phrase ("generating...") set off by a comma modifies the preceding entire action ("The tectonic plates converged..."), expressing its direct result or consequence.',
        whyCorrect: '"generating" is a present participle functioning as a result-oriented clausal modifier.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'generated', whyWrong: 'Past tense verb creating a comma splice without a conjunction.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'generating', whyWrong: 'Correct answer.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'and generates', whyWrong: 'Shifts tense from past ("converged") to present ("generates").' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'having been generated', whyWrong: 'Illogical passive perfect participle.' }
        ]
      }
    }
  ]
};

// ==========================================
// BLOCK 6: PARALLELISM, COMPARISONS & CLAUSE BOUNDARIES (Q51 - Q60)
// ==========================================
export const EXERCISE_BLOCK_6: WritingExerciseBlock = {
  blockNumber: 6,
  title: 'Block 6 Exercises: Structural Parallelism, Logical Comparisons & Clause Boundaries',
  description: '10 Questions (Questions 51–60) testing correlative conjunction symmetry, demonstrative comparison pronouns (that of / those of), comma splices, and run-on repairs.',
  questions: [
    {
      questionNumber: 51,
      id: 'ch3-q51',
      difficulty: 'Foundation',
      skillTag: 'Parallelism - Lists and Series',
      prompt: 'The restorative ecology initiative aims to reintroduce apex predators, rehabilitate riparian buffers, and ___ native wetland biodiversity.',
      options: ['to be restoring', 'restore', 'restoration of', 'restoring'],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Items in a parallel series governed by the initial infinitive "to" must maintain structural parallelism: "to reintroduce..., rehabilitate..., and restore..." (all base verbs).',
        whyCorrect: '"restore" is a base verb maintaining strict parallelism with "reintroduce" and "rehabilitate."',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'to be restoring', whyWrong: 'Progressive infinitive that breaks the parallel series of simple base verbs.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'restore', whyWrong: 'Correct answer.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'restoration of', whyWrong: 'Noun phrase that breaks the verb series.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'restoring', whyWrong: 'Gerund/participle that breaks the base verb pattern.' }
        ]
      }
    },
    {
      questionNumber: 52,
      id: 'ch3-q52',
      difficulty: 'Intermediate',
      skillTag: 'Logical Comparisons - That of / Those of',
      prompt: 'The optical resolution of the James Webb Space Telescope is markedly sharper than ___ of earlier ground-based observatories.',
      options: ['earlier ground-based observatories', 'that', 'those', 'it'],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The sentence compares the singular noun "resolution" of one telescope to the resolution of earlier observatories. The singular demonstrative pronoun "that" is required to prevent an illogical comparison.',
        whyCorrect: '"that" correctly stands for the singular concept "the optical resolution."',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'earlier ground-based observatories', whyWrong: 'Faulty comparison: illogically compares optical resolution directly to physical observatories.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'that', whyWrong: 'Correct answer.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'those', whyWrong: 'Plural demonstrative pronoun; the compared noun ("resolution") is singular.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'it', whyWrong: 'Personal pronoun "it" cannot take the modifying phrase "of earlier ground-based observatories."' }
        ]
      }
    },
    {
      questionNumber: 53,
      id: 'ch3-q53',
      difficulty: 'Hard',
      skillTag: 'Logical Comparisons - Plural Demonstrative Those',
      prompt: 'The foraging behaviors of urban coyotes in Southern California differ significantly from ___ of their rural counterparts in the Mojave Desert.',
      options: ['that', 'those', 'they', 'the behavior'],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The comparison is between the plural noun phrase "The foraging behaviors" of urban coyotes and those of rural coyotes. Plural demonstrative "those" is required.',
        whyCorrect: '"those" is plural and properly replaces "the foraging behaviors."',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'that', whyWrong: 'Singular demonstrative pronoun that clashes with plural "behaviors."' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'those', whyWrong: 'Correct answer.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'they', whyWrong: 'Subject pronoun cannot take the prepositional modifier "of their rural counterparts."' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'the behavior', whyWrong: 'Singular noun phrase mismatched with plural "foraging behaviors."' }
        ]
      }
    },
    {
      questionNumber: 54,
      id: 'ch3-q54',
      difficulty: 'Intermediate',
      skillTag: 'Parallelism - Correlative Conjunctions (Not Only... But Also)',
      prompt: 'The renewable energy transition requires not only investing in grid-scale battery storage ___ upgrading regional transmission infrastructure.',
      options: [
        'and also',
        'but also',
        'as well as',
        'in addition to'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The correlative conjunction "not only" must pair idiomatically with "but also" to maintain parallel balance ("not only investing... but also upgrading").',
        whyCorrect: '"but also" is the exact standard correlative partner for "not only."',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'and also', whyWrong: 'Nonstandard pairing with "not only."' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'but also', whyWrong: 'Correct answer.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'as well as', whyWrong: 'Ungrammatical pairing with "not only."' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'in addition to', whyWrong: 'Incorrect prepositional phrase breaking correlative structure.' }
        ]
      }
    },
    {
      questionNumber: 55,
      id: 'ch3-q55',
      difficulty: 'Hard',
      skillTag: 'Clause Boundaries - Comma Splice vs Semicolon',
      prompt: 'The monetary policy board raised benchmark interest rates ___ liquidity in private credit markets contracted sharply across all commercial lending sectors.',
      options: [
        ',',
        '; consequently,',
        ', consequently',
        'consequently,'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Two complete independent clauses ("The monetary policy board raised..." and "liquidity... contracted sharply") cannot be joined by a comma alone. Joining them with a semicolon and conjunctive adverb ("; consequently,") is grammatically correct.',
        whyCorrect: 'Option B uses a semicolon and conjunctive adverb with a comma to properly join two independent clauses.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: ',', whyWrong: 'Creates a classic comma splice.' },
          { optionIndex: 1, optionLabel: 'B', optionText: '; consequently,', whyWrong: 'Correct answer.' },
          { optionIndex: 2, optionLabel: 'C', optionText: ', consequently', whyWrong: 'Comma splice; "consequently" is an adverb, not a coordinating conjunction.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'consequently,', whyWrong: 'Creates a run-on sentence.' }
        ]
      }
    },
    {
      questionNumber: 56,
      id: 'ch3-q56',
      difficulty: 'Foundation',
      skillTag: 'Clause Boundaries - Coordinating Conjunction (FANBOYS)',
      prompt: 'The macroeconomic forecast predicted substantial capital outflow, ___ foreign direct investment in domestic renewable infrastructure remained unexpectedly resilient.',
      options: ['however', 'therefore', 'yet', 'because'],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'Connecting two independent clauses with a comma requires a coordinating conjunction (FANBOYS: "for, and, nor, but, or, yet, so"). "Yet" provides the correct coordinating conjunction expressing contrast.',
        whyCorrect: '"yet" is a coordinating conjunction of contrast that properly joins independent clauses with a comma.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'however', whyWrong: 'Conjunctive adverb that creates a comma splice when used with only a comma.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'therefore', whyWrong: 'Conjunctive adverb that causes a comma splice.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'yet', whyWrong: 'Correct answer.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'because', whyWrong: 'Subordinating conjunction that creates an illogical causal relationship.' }
        ]
      }
    },
    {
      questionNumber: 57,
      id: 'ch3-q57',
      difficulty: 'Hard',
      skillTag: 'Parallelism - Correlative Conjunctions (Either... Or)',
      prompt: 'To reduce urban carbon emissions, municipal planners should either implement congestion pricing on downtown bridges ___ public transit bus rapid transit corridors.',
      options: [
        'or expand',
        'or expanding',
        'or to expand',
        'and expanding'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Correlative pairs require grammatical parallelism. Following the modal "should", the element after "either" is a base verb ("implement..."), meaning the element after "or" must also be a bare base verb ("expand...").',
        whyCorrect: '"or expand" provides the correct correlative conjunction and parallel base verb.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'or expand', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'or expanding', whyWrong: 'Gerund breaks parallelism with base verb "implement."' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'or to expand', whyWrong: 'Infinitive with "to" is ungrammatical following modal "should."' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'and expanding', whyWrong: 'Breaks both the correlative pair ("either... or") and verb parallelism.' }
        ]
      }
    },
    {
      questionNumber: 58,
      id: 'ch3-q58',
      difficulty: 'Intermediate',
      skillTag: 'Logical Comparisons - As... As Construction',
      prompt: 'Modern carbon-composite airplane fuselages are as durable ___ fabricated from traditional aerospace-grade aluminum alloys.',
      options: [
        'than those',
        'as those',
        'as that',
        'like those'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Equative comparisons require the idiom "as [adjective] as [noun phrase]." Because "fuselages" is plural, the comparison pronoun must be plural demonstrative "those."',
        whyCorrect: '"as those" completes the equative comparison idiom with the correct plural pronoun.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'than those', whyWrong: 'Incorrectly pairs "than" with equative "as durable."' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'as those', whyWrong: 'Correct answer.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'as that', whyWrong: 'Singular "that" clashes with plural "fuselages."' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'like those', whyWrong: 'Nonstandard idiom for equative comparisons.' }
        ]
      }
    },
    {
      questionNumber: 59,
      id: 'ch3-q59',
      difficulty: 'Hard',
      skillTag: 'Clause Boundaries - Subordination vs Semicolon',
      prompt: 'Although the geothermal extraction facility encountered unexpected seismic resistance ___ operations were suspended to conduct acoustic integrity testing.',
      options: [
        '; drilling',
        ', drilling',
        ', so drilling',
        'and drilling'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The sentence opens with a dependent adverbial clause introduced by "Although." When a dependent clause precedes an independent clause, they must be joined simply by a comma.',
        whyCorrect: 'Option B correctly uses a comma to link the opening dependent clause to the main independent clause.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: '; drilling', whyWrong: 'Semicolon cannot be used after a dependent clause ("Although...").' },
          { optionIndex: 1, optionLabel: 'B', optionText: ', drilling', whyWrong: 'Correct answer.' },
          { optionIndex: 2, optionLabel: 'C', optionText: ', so drilling', whyWrong: 'Redundant coordinator "so" clashes with subordinating "Although."' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'and drilling', whyWrong: 'Redundant coordinator "and" makes the sentence structure ungrammatical.' }
        ]
      }
    },
    {
      questionNumber: 60,
      id: 'ch3-q60',
      difficulty: 'Elite',
      skillTag: 'Parallelism - Complex Prepositional Parallelism',
      prompt: 'The cultural anthropologist attributed the rapid adoption of social technologies not to passive consumer imitation, but ___ for communal identity.',
      options: [
        'active human striving',
        'to active human striving',
        'because humans strive actively',
        'striving actively'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The contrastive construction "not to [X], but to [Y]" requires exact structural parallelism. The preposition "to" must be repeated before the second element.',
        whyCorrect: '"to active human striving" maintains strict prepositional parallelism with "to passive consumer imitation."',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'active human striving', whyWrong: 'Missing the parallel preposition "to."' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'to active human striving', whyWrong: 'Correct answer.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'because humans strive actively', whyWrong: 'Shifts from a prepositional noun phrase to a causal clause, destroying parallelism.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'striving actively', whyWrong: 'Participle phrase missing parallel preposition "to."' }
        ]
      }
    }
  ]
};

// ==========================================
// BLOCK 7: COMPREHENSIVE CAPSTONE & INTEGRATED DIAGNOSTIC (Q61 - Q70)
// ==========================================
export const EXERCISE_BLOCK_7: WritingExerciseBlock = {
  blockNumber: 7,
  title: 'Block 7 Exercises: Comprehensive Master Diagnostic & Integrated Grammar',
  description: '10 Questions (Questions 61–70) testing multi-skill grammar mastery: inverted agreement, compound modifiers, subjunctive conditionals, and comparative symmetry.',
  questions: [
    {
      questionNumber: 61,
      id: 'ch3-q61',
      difficulty: 'Elite',
      skillTag: 'Master Grammar - Subterranean Inverted Agreement',
      prompt: 'Discovered beneath the melting permafrost of the Siberian tundra ___ the remarkably intact mummified remains of a Pleistocene woolly mammoth calf.',
      options: ['was', 'were', 'is', 'has been'],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The sentence has an inverted structure opening with a locational participial phrase. The true grammatical subject is the plural noun phrase "the remarkably intact mummified remains."',
        whyCorrect: '"were" is a plural past-tense verb correctly agreeing with the plural subject "remains."',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'was', whyWrong: 'Singular verb that mistakenly matches singular "tundra."' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'were', whyWrong: 'Correct answer.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'is', whyWrong: 'Singular present verb.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'has been', whyWrong: 'Singular auxiliary verb phrase.' }
        ]
      }
    },
    {
      questionNumber: 62,
      id: 'ch3-q62',
      difficulty: 'Hard',
      skillTag: 'Master Grammar - Correlative Inversion Agreement',
      prompt: 'Neither the senior orbital telemetry engineer nor the flight trajectory specialists ___ confident that the booster rocket could achieve stable lunar orbit without secondary thruster ignition.',
      options: ['was', 'were', 'is', 'has been'],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'In a "neither... nor" correlative construction, the verb agrees with the closer subject ("flight trajectory specialists," which is plural) according to the Rule of Proximity.',
        whyCorrect: '"were" is a plural past-tense verb agreeing with the adjacent plural subject "specialists."',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'was', whyWrong: 'Singular verb that incorrectly agrees with the distant singular subject "engineer."' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'were', whyWrong: 'Correct answer.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'is', whyWrong: 'Singular present verb.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'has been', whyWrong: 'Singular perfect verb phrase.' }
        ]
      }
    },
    {
      questionNumber: 63,
      id: 'ch3-q63',
      difficulty: 'Elite',
      skillTag: 'Master Grammar - Dangling Modifier with Abstract Subject',
      prompt: 'Having analyzed over ten thousand fifteenth-century court documents, ___ .',
      options: [
        'a strong correlation between trade disputes and the emergence of merchant guilds was established by the historian',
        'the legal historian established a strong correlation between trade disputes and the emergence of merchant guilds',
        'it was possible for historians to identify a strong correlation between trade disputes and merchant guilds',
        'the historical court documents revealed a strong correlation to the investigation team'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The introductory modifier "Having analyzed over ten thousand fifteenth-century court documents" must be followed immediately by the human agent who performed the analysis ("the legal historian").',
        whyCorrect: 'Option B places "the legal historian" as the immediate subject after the participial modifier.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'a strong correlation between trade disputes and the emergence of merchant guilds was established...', whyWrong: 'Dangling modifier: suggests the "correlation" analyzed the court documents.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'the legal historian established a strong correlation...', whyWrong: 'Correct answer.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'it was possible for historians to identify...', whyWrong: 'Dangling modifier with dummy pronoun "it."' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'the historical court documents revealed a strong...', whyWrong: 'Dangling modifier: suggests the "court documents" analyzed themselves.' }
        ]
      }
    },
    {
      questionNumber: 64,
      id: 'ch3-q64',
      difficulty: 'Hard',
      skillTag: 'Master Grammar - Demonstrative Pronoun Comparison',
      prompt: 'The structural integrity of graphene aerogels under extreme compressive stress is vastly superior to ___ of conventional carbon foams.',
      options: ['that', 'those', 'it', 'them'],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The sentence compares the singular property "structural integrity" of graphene aerogels to the structural integrity of carbon foams. Singular demonstrative "that" is required.',
        whyCorrect: '"that" is singular and correctly replaces "the structural integrity."',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'that', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'those', whyWrong: 'Plural demonstrative pronoun; the noun being compared ("integrity") is singular.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'it', whyWrong: 'Personal pronoun "it" cannot take the modifying phrase "of conventional carbon foams."' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'them', whyWrong: 'Personal object pronoun.' }
        ]
      }
    },
    {
      questionNumber: 65,
      id: 'ch3-q65',
      difficulty: 'Elite',
      skillTag: 'Master Grammar - Mandative Subjunctive after Stipulate',
      prompt: 'The international maritime treaty stipulates that every signatory nation ___ carbon emissions from commercial cargo vessels by forty percent before 2035.',
      options: ['reduces', 'reduce', 'reduced', 'will reduce'],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The verb "stipulates that" demands the mandative subjunctive mood, which requires the bare base form of the verb ("reduce") regardless of the singular subject ("every signatory nation").',
        whyCorrect: '"reduce" is the bare base subjunctive verb form required after "stipulates that."',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'reduces', whyWrong: 'Indicative third-person singular verb that violates the subjunctive mandate.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'reduce', whyWrong: 'Correct answer.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'reduced', whyWrong: 'Past indicative form.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'will reduce', whyWrong: 'Modal future form.' }
        ]
      }
    },
    {
      questionNumber: 66,
      id: 'ch3-q66',
      difficulty: 'Intermediate',
      skillTag: 'Master Grammar - Nonrestrictive Appositive Punctuation',
      prompt: 'Alexander von Humboldt ___ traveled extensively across South America in the early nineteenth century to document botanical and geographic patterns.',
      options: [
        ', a pioneering Prussian naturalist,',
        'a pioneering Prussian naturalist,',
        ', a pioneering Prussian naturalist',
        'was a pioneering Prussian naturalist,'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The appositive phrase "a pioneering Prussian naturalist" provides nonrestrictive biographical description of Alexander von Humboldt and must be enclosed in two commas.',
        whyCorrect: 'Option A supplies both opening and closing commas setting off the nonrestrictive appositive.',
        distractorAnalysis: [
          { optionIndex: 1, optionLabel: 'B', optionText: 'a pioneering Prussian naturalist,', whyWrong: 'Missing opening comma after the subject.' },
          { optionIndex: 0, optionLabel: 'A', optionText: ', a pioneering Prussian naturalist,', whyWrong: 'Correct answer.' },
          { optionIndex: 2, optionLabel: 'C', optionText: ', a pioneering Prussian naturalist', whyWrong: 'Missing closing comma before the main verb "traveled."' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'was a pioneering Prussian naturalist,', whyWrong: 'Creates two main verbs in a single clause without a conjunction.' }
        ]
      }
    },
    {
      questionNumber: 67,
      id: 'ch3-q67',
      difficulty: 'Hard',
      skillTag: 'Master Grammar - Additive Intervening Subject Agreement',
      prompt: 'The chief economic advisor, accompanied by senior trade representatives from the G7 nations, ___ scheduled to deliver the keynote address on global tariff harmonization.',
      options: ['are', 'is', 'were', 'have been'],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The grammatical subject is the singular noun "advisor." The parenthetical additive phrase "accompanied by senior trade representatives..." does not create a compound subject.',
        whyCorrect: '"is" is singular and agrees with the singular head noun "advisor."',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'are', whyWrong: 'Plural verb that mistakenly treats the additive phrase as part of a compound subject.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'is', whyWrong: 'Correct answer.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'were', whyWrong: 'Plural past-tense verb.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'have been', whyWrong: 'Plural auxiliary phrase.' }
        ]
      }
    },
    {
      questionNumber: 68,
      id: 'ch3-q68',
      difficulty: 'Hard',
      skillTag: 'Master Grammar - Past Perfect Narrative Sequence',
      prompt: 'Long before modern seismological networks were established, ancient Chinese polymath Zhang Heng ___ the world\'s first earthquake-detecting seismoscope in 132 CE.',
      options: ['had invented', 'invented', 'has invented', 'was inventing'],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'When a specific historical date is provided ("in 132 CE") identifying a single completed past event, standard English uses the simple past tense ("invented").',
        whyCorrect: '"invented" is the simple past tense matching the specific historical date "in 132 CE."',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'had invented', whyWrong: 'Past perfect is unnecessary because the simple past with a definite date already expresses the discrete historical occurrence.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'invented', whyWrong: 'Correct answer.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'has invented', whyWrong: 'Present perfect is incorrect with a specific historical year ("in 132 CE").' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'was inventing', whyWrong: 'Past progressive is incorrect for a completed historical milestone.' }
        ]
      }
    },
    {
      questionNumber: 69,
      id: 'ch3-q69',
      difficulty: 'Elite',
      skillTag: 'Master Grammar - Compound Prepositional Object Pronoun',
      prompt: 'The university board granted full research autonomy to the molecular biology faculty and ___ to pursue novel immunotherapies.',
      options: ['she', 'her', 'herself', 'hers'],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The pronoun is the second object of the preposition "to" in a compound structure ("to [the faculty] and [her]"). Objective-case "her" is required.',
        whyCorrect: '"her" is the objective-case pronoun functioning as the object of the preposition "to."',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'she', whyWrong: 'Subjective pronoun incorrectly used as the object of a preposition.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'her', whyWrong: 'Correct answer.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'herself', whyWrong: 'Reflexive pronoun used improperly without a coreferent subject.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'hers', whyWrong: 'Possessive pronoun.' }
        ]
      }
    },
    {
      questionNumber: 70,
      id: 'ch3-q70',
      difficulty: 'Elite',
      skillTag: 'Master Grammar - Correlative Parallel Symmetrical Balancing',
      prompt: 'A successful transition to a circular economy demands not only that manufacturing waste be systematically minimized, but also ___ .',
      options: [
        'that recycled secondary materials be actively incorporated into industrial production',
        'incorporating recycled secondary materials into industrial production',
        'to actively incorporate recycled secondary materials into industrial production',
        'recycled secondary materials must be actively incorporated into industrial production'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The correlative conjunction "not only... but also" requires strict clausal parallelism. Following "not only" is a subordinate subjunctive clause ("that manufacturing waste be systematically minimized"), requiring a matching subordinate subjunctive clause ("that recycled secondary materials be actively incorporated...") after "but also."',
        whyCorrect: 'Option A provides the exact parallel "that... be [participle]" subordinate subjunctive clause.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'that recycled secondary materials be actively incorporated into industrial production', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'incorporating recycled secondary materials into industrial production', whyWrong: 'Gerund phrase breaks parallelism with the preceding "that..." subjunctive clause.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'to actively incorporate recycled secondary materials into industrial production', whyWrong: 'Infinitive phrase breaks clausal parallelism.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'recycled secondary materials must be actively incorporated into industrial production', whyWrong: 'Independent clause with modal "must" breaks the parallel subjunctive "that... be" structure.' }
        ]
      }
    }
  ]
};
