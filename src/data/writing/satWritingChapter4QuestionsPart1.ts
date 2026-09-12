import { WritingExerciseBlock } from './satWritingTypes';

export const EXERCISE_BLOCK_1: WritingExerciseBlock = {
  blockNumber: 1,
  title: 'Block 1 Micro-Practice: Modifiers, Placement, and Syntactic Alignment',
  description: 'Targeted Practice on Introductory Participial Modifiers, Dangling Structures, Restrictive vs. Nonrestrictive Clauses, and Limiter Adverbs (Questions 1–5)',
  questions: [
    {
      questionNumber: 1,
      id: 'ch4-q1',
      difficulty: 'Medium',
      skillTag: 'Dangling Modifiers',
      prompt: 'Having analyzed the isotopic ratios of oxygen and hydrogen in deep Antarctic ice cores, ___ reconstructed global surface temperature fluctuations spanning eight glacial cycles.',
      options: [
        'the climatic fluctuations were',
        'paleoclimatologists at the polar institute',
        'there was an immediate effort that',
        'the computational modeling of past eras'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'An introductory perfect participial phrase ("Having analyzed the isotopic ratios...") must modify the exact grammatical subject immediately following the comma. The subject must be an agent capable of analyzing ice cores.',
        whyCorrect: 'Option B ("paleoclimatologists at the polar institute") correctly places the scientific researchers directly after the comma as the logical actors.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'the climatic fluctuations were', whyWrong: 'Climatic fluctuations cannot analyze isotopic ratios in ice cores (dangling modifier).' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'paleoclimatologists at the polar institute', whyWrong: 'Correct. Paleoclimatologists analyze isotopic ratios.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'there was an immediate effort that', whyWrong: 'Expletive "there was" creates a dangling participle with no grammatical actor.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'the computational modeling of past eras', whyWrong: 'Computational modeling cannot perform the action of analyzing ice cores.' }
        ],
        eliminationShortcut: 'Ask: "Who analyzed the isotopic ratios?" -> The noun immediately after the comma MUST be paleoclimatologists.'
      }
    },
    {
      questionNumber: 2,
      id: 'ch4-q2',
      difficulty: 'Hard',
      skillTag: 'Modifier Attachment',
      prompt: 'Astrophysicists analyzed the high-energy gamma-ray emissions detected by the orbital space observatory.\n\nWhat constituent does the participial phrase "detected by the orbital space observatory" modify?',
      options: ['Astrophysicists', 'analyzed', 'gamma-ray emissions', 'orbital space observatory'],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'The past participial phrase "detected by the orbital space observatory" attaches directly to the nominal head it describes.',
        whyCorrect: 'Option C ("gamma-ray emissions") is correct because the gamma-ray emissions were detected by the orbital observatory.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Astrophysicists', whyWrong: 'The astrophysicists were not detected by the space telescope.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'analyzed', whyWrong: 'Analyzed is a finite verb; participial phrases modify nominal entities.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'gamma-ray emissions', whyWrong: 'Correct. The emissions were detected by the observatory.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'orbital space observatory', whyWrong: 'The observatory is inside the agentive prepositional phrase of the participle.' }
        ]
      }
    },
    {
      questionNumber: 3,
      id: 'ch4-q3',
      difficulty: 'Hard',
      skillTag: 'Essential vs. Nonessential Clauses',
      prompt: 'Commercial airlines that operate long-haul transoceanic routes must equip their avionics suites with satellite communication link redundancy.\n\nWhy are no commas placed around the relative clause "that operate long-haul transoceanic routes"?',
      options: [
        'The relative clause functions as an autonomous independent clause.',
        'The relative clause is essential (restrictive) because it defines the specific subset of commercial airlines subject to the mandate.',
        'Relative clauses introduced by "that" are grammatically forbidden from containing finite verbs.',
        'The main clause lacks a finite predicate verb.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'An essential (restrictive) clause restricts or defines the scope of the antecedent noun. Only airlines operating transoceanic routes require the equipment.',
        whyCorrect: 'Option B accurately identifies the restrictive function of the relative clause: it specifies which airlines must install redundant satellite communications.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'functions as an autonomous independent clause', whyWrong: 'Relative clauses are syntactically dependent.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'essential (restrictive) defining the specific subset', whyWrong: 'Correct essential clause reasoning.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'forbidden from containing finite verbs', whyWrong: 'Relative clauses obligatorily contain finite verbs ("operate").' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'main clause lacks a finite predicate verb', whyWrong: 'The main predicate is "must equip".' }
        ]
      }
    },
    {
      questionNumber: 4,
      id: 'ch4-q4',
      difficulty: 'Hard',
      skillTag: 'Relative Pronouns (Who vs. Whom)',
      prompt: 'The international arbitration tribunal appointed a veteran maritime jurist ___ had drafted earlier protocols governing exclusive economic zone navigation.',
      options: ["whoever","whomever","whom","which"],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'The relative pronoun functions as the grammatical subject of the dependent clause "___ had drafted earlier protocols".',
        whyCorrect: 'Option C ("who") is the subjective relative pronoun required to serve as the subject of the finite verb "had drafted".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'whom', whyWrong: 'Whom is an objective pronoun; the dependent clause requires a subject for "had drafted".' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'whose', whyWrong: 'Whose expresses possession, which is not required before the finite verb.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'who', whyWrong: 'Correct subjective pronoun.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'which', whyWrong: 'Which cannot refer to a human jurist in standard academic English.' }
        ]
      }
    },
    {
      questionNumber: 5,
      id: 'ch4-q5',
      difficulty: 'Elite',
      skillTag: 'Adverb Placement & Precision',
      prompt: 'The European Central Bank authorized the acquisition of almost every sovereign green bond issued during the fiscal quarter.\n\nWhich propositional meaning is most directly communicated?',
      options: [
        'The central bank came close to authorizing green bonds but ultimately cancelled the purchase program.',
        'Nearly all sovereign green bonds issued during the fiscal quarter were authorized for acquisition by the central bank.',
        'The central bank authorized bonds that had almost completed their environmental certification.',
        'The central bank almost finished the administrative review of sovereign debt portfolios.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The limiting modifier "almost" directly precedes the quantifier phrase "every sovereign green bond", indicating that nearly the entire quantity of issued green bonds was purchased.',
        whyCorrect: 'Option B accurately conveys that a near-total proportion of the issued bonds was approved for acquisition.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'came close to authorizing but cancelled', whyWrong: 'That would correspond to "almost authorized the acquisition".' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'nearly all sovereign green bonds were authorized', whyWrong: 'Correct. Modifies the quantity "every sovereign green bond".' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'bonds that had almost completed certification', whyWrong: 'Misplaces "almost" onto the bond certification status.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'almost finished administrative review', whyWrong: 'Distorts the semantic target of the modifier.' }
        ]
      }
    }
  ]
};

export const EXERCISE_BLOCK_2: WritingExerciseBlock = {
  blockNumber: 2,
  title: 'Block 2 Micro-Practice: Logical Comparisons & Category Equivalence',
  description: 'Targeted Practice on Like-With-Like Comparisons, Demonstrative Reference ("That of / Those of"), Possessives, and Prepositional Comparison Idioms (Questions 6–11)',
  questions: [
    {
      questionNumber: 6,
      id: 'ch4-q6',
      difficulty: 'Medium',
      skillTag: 'Demonstrative Reference ("That of")',
      prompt: 'The volumetric energy density of solid-state lithium-metal batteries is significantly higher than ___ of conventional lithium-ion cells.',
      options: ['conventional cells', 'that', 'those', 'it'],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The comparison contrasts "volumetric energy density" (singular/mass metric) of solid-state batteries with the energy density of conventional cells. Demonstrative pronoun "that" represents "volumetric energy density".',
        whyCorrect: 'Option B ("that") creates an exact metric-to-metric comparison ("density" compared with "that [density] of conventional cells").',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'conventional cells', whyWrong: 'Compares an abstract physical metric (energy density) directly to physical battery cells (faulty comparison).' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'that', whyWrong: 'Correct. Represents singular "volumetric energy density".' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'those', whyWrong: 'Those is plural; energy density is singular.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'it', whyWrong: 'Personal pronoun "it of" is ungrammatical in comparative demonstrative constructions.' }
        ]
      }
    },
    {
      questionNumber: 7,
      id: 'ch4-q7',
      difficulty: 'Hard',
      skillTag: 'Demonstrative Reference ("Those of")',
      prompt: 'The aerodynamic wing profiles of supersonic transport aircraft are considerably more swept than ___ of standard commercial airliners.',
      options: ['standard commercial airliners', 'that', 'those', 'them'],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'The comparison is between "aerodynamic wing profiles" (plural) and the wing profiles of commercial airliners.',
        whyCorrect: 'Option C ("those") is the plural demonstrative pronoun required to replace "aerodynamic wing profiles".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'standard commercial airliners', whyWrong: 'Compares wing profiles directly to entire aircraft.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'that', whyWrong: 'That is singular; wing profiles is plural.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'those', whyWrong: 'Correct plural demonstrative pronoun.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'them', whyWrong: 'Personal pronoun "them of" is ungrammatical in formal comparisons.' }
        ]
      }
    },
    {
      questionNumber: 8,
      id: 'ch4-q8',
      difficulty: 'Hard',
      skillTag: 'Quantifier Precision (Fewer vs. Less)',
      prompt: 'Because deep-sea submersibles operate under extreme hydrostatic pressure, engineers incorporated ___ welded joints to minimize structural fatigue points.',
      options: ['less', 'fewer', 'lower amount of', 'a lesser quantity of'],
      correctAnswer: 1,
      explanation: {
        coreReasoning: '"Welded joints" is a countable plural noun, requiring the quantifier "fewer" rather than "less".',
        whyCorrect: 'Option B ("fewer") correctly modifies countable plural nouns.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'less', whyWrong: 'Less modifies uncountable mass nouns (e.g., less pressure).' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'fewer', whyWrong: 'Correct quantifier for countable plural nouns.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'lower amount of', whyWrong: 'Amount modifies uncountable mass quantities.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'a lesser quantity of', whyWrong: 'Wordy and unidiomatic for countable discrete items.' }
        ]
      }
    },
    {
      questionNumber: 9,
      id: 'ch4-q9',
      difficulty: 'Hard',
      skillTag: 'Possessive Parallelism in Comparisons',
      prompt: "Sociologist Max Weber's theoretical analysis of bureaucratic rationalization is far more historically contextualized than ___.",
      options: [
        'Karl Marx',
        "Karl Marx's",
        'those of Karl Marx',
        'when Karl Marx wrote'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The sentence compares Max Weber\'s theoretical analysis with Karl Marx\'s theoretical analysis. The possessive "Karl Marx\'s" functions elliptically for "Karl Marx\'s theoretical analysis".',
        whyCorrect: 'Option B ("Karl Marx\'s") creates a balanced possessive comparison (analysis to analysis).',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Karl Marx', whyWrong: 'Compares a theoretical analysis directly to a human philosopher.' },
          { optionIndex: 1, optionLabel: 'B', optionText: "Karl Marx's", whyWrong: 'Correct. Elliptical possessive representing analysis.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'those of Karl Marx', whyWrong: 'Those is plural; analysis is singular.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'when Karl Marx wrote', whyWrong: 'Adverbial time clause cannot be compared to a nominal analysis.' }
        ]
      }
    },
    {
      questionNumber: 10,
      id: 'ch4-q10',
      difficulty: 'Elite',
      skillTag: 'Prepositional Comparison Idioms ("Unlike")',
      prompt: 'Unlike classical Newtonian mechanics, ___.',
      options: [
        'probabilistic wavefunctions govern quantum electrodynamics',
        'quantum electrodynamics describes physical interactions through probabilistic wavefunctions',
        'the mathematical framework of quantum electrodynamics is probabilistic',
        'in quantum electrodynamics, physical systems exhibit probabilistic wavefunctions'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The introductory phrase "Unlike classical Newtonian mechanics" establishes a comparison with a scientific discipline/framework. The grammatical subject following the comma must be an equivalent discipline ("quantum electrodynamics").',
        whyCorrect: 'Option B places "quantum electrodynamics" immediately after the comma, creating a logical discipline-to-discipline comparison.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'probabilistic wavefunctions govern quantum electrodynamics', whyWrong: 'Compares Newtonian mechanics to wavefunctions (faulty category comparison).' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'quantum electrodynamics describes physical interactions', whyWrong: 'Correct. Compares mechanics to quantum electrodynamics.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'the mathematical framework of quantum electrodynamics is probabilistic', whyWrong: 'Compares mechanics to "the mathematical framework", which is structurally clumsy.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'in quantum electrodynamics, physical systems', whyWrong: 'Prepositional opener delays the subject and compares mechanics to physical systems.' }
        ]
      }
    },
    {
      questionNumber: 11,
      id: 'ch4-q11',
      difficulty: 'Elite',
      skillTag: 'Equative Comparisons ("As... As")',
      prompt: 'The new high-temperature superconducting magnet is as thermally resilient ___ the previous cryogenic coil array.',
      options: ['than', 'as', 'compared to', 'like'],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Equative comparisons require the symmetrical idiom "as + adjective + as".',
        whyCorrect: 'Option B ("as") completes the mandatory "as thermally resilient as" correlative frame.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'than', whyWrong: 'Than is used with comparative adjectives (more resilient than), not equative "as... as".' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'as', whyWrong: 'Correct equative particle.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'compared to', whyWrong: 'Ungrammatical hybrid with "as thermally resilient".' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'like', whyWrong: 'Colloquial and ungrammatical in equative frames.' }
        ]
      }
    }
  ]
};

export const EXERCISE_BLOCK_3: WritingExerciseBlock = {
  blockNumber: 3,
  title: 'Block 3 Micro-Practice: Syntactic Parallelism & Coordinate Series',
  description: 'Targeted Practice on Parallel Finite Verbs, Infinitive Chains, Gerund Complements, and Correlative Conjunction Symmetries (Questions 12–17)',
  questions: [
    {
      questionNumber: 12,
      id: 'ch4-q12',
      difficulty: 'Medium',
      skillTag: 'Parallel Finite Verbs',
      prompt: 'The volcanological team monitored subterranean harmonic tremors, measured sulfur dioxide emissions, and ___ surrounding river valleys as magma ascended.',
      options: ['evacuation of', 'evacuated', 'evacuating', 'to evacuate'],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The coordinate series consists of past-tense finite verbs governed by "team": *monitored ..., measured ..., and evacuated ...*',
        whyCorrect: 'Option B ("evacuated") maintains strict past-tense verb parallelism.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'evacuation of', whyWrong: 'Noun phrase breaks verb series.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'evacuated', whyWrong: 'Correct past-tense verb.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'evacuating', whyWrong: 'Present participle breaks finite verb series.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'to evacuate', whyWrong: 'Infinitive breaks past-tense verb series.' }
        ]
      }
    },
    {
      questionNumber: 13,
      id: 'ch4-q13',
      difficulty: 'Hard',
      skillTag: 'Parallel Infinitive Series',
      prompt: 'The bioengineering curriculum prepares graduate researchers to formulate empirical hypotheses, calibrate optical spectroscopy tools, and ___ peer-reviewed manuscripts.',
      options: ['publishing', 'publish', 'the publication of', 'published'],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The infinitive particle "to" governs three parallel base-form verbs: *to [formulate] ..., [calibrate] ..., and [publish] ...*',
        whyCorrect: 'Option B ("publish") provides the uninflected base verb parallel with "formulate" and "calibrate".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'publishing', whyWrong: 'Gerund nonparallel with base verbs.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'publish', whyWrong: 'Correct base verb.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'the publication of', whyWrong: 'Noun phrase nonparallel.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'published', whyWrong: 'Past tense verb nonparallel.' }
        ]
      }
    },
    {
      questionNumber: 14,
      id: 'ch4-q14',
      difficulty: 'Hard',
      skillTag: 'Correlative Symmetry (Not Only... But Also)',
      prompt: 'The deep-sea hydrothermal expedition not only mapped twenty previously uncharted volcanic vents ___ baseline oceanographic data regarding abyssal methane concentrations.',
      options: [
        'and also recorded',
        'but also recorded',
        'as well as recording',
        'but recording'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The correlative conjunction "not only" must pair with "but also" and connect matching grammatical structures (*not only mapped ... but also recorded*).',
        whyCorrect: 'Option B ("but also recorded") completes the correlative pair with a parallel past-tense verb.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'and also recorded', whyWrong: 'Fails to use required correlative "but also".' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'but also recorded', whyWrong: 'Correct correlative pair and parallel verb.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'as well as recording', whyWrong: 'Correlative mismatch and nonparallel gerund.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'but recording', whyWrong: 'Missing "also" and uses nonparallel participle.' }
        ]
      }
    },
    {
      questionNumber: 15,
      id: 'ch4-q15',
      difficulty: 'Hard',
      skillTag: 'Parallel Gerund Complements',
      prompt: 'The renewable energy transition requires expanding high-voltage transmission corridors, deploying utility-scale battery storage, and ___ grid interconnection protocols.',
      options: ['modernizing', 'to modernize', 'modernization of', 'modernize'],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The verb "requires" governs a series of coordinate gerund direct objects: *expanding ..., deploying ..., and modernizing ...*',
        whyCorrect: 'Option A ("modernizing") maintains the parallel gerund series.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'modernizing', whyWrong: 'Correct parallel gerund.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'to modernize', whyWrong: 'Infinitive breaks gerund series.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'modernization of', whyWrong: 'Noun phrase breaks gerund series.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'modernize', whyWrong: 'Base verb breaks gerund series.' }
        ]
      }
    },
    {
      questionNumber: 16,
      id: 'ch4-q16',
      difficulty: 'Elite',
      skillTag: 'Correlative Symmetry (Either... Or)',
      prompt: 'During peak grid strain, the grid operator must either dispatch rapid-response hydro peaking units ___ mandatory industrial load-shedding protocols.',
      options: ['and activate', 'or activate', 'nor activate', 'as well as activate'],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The correlative marker "either" strictly pairs with "or" and connects parallel base verb phrases (*either dispatch ... or activate*).',
        whyCorrect: 'Option B ("or activate") completes the correlative pair with a parallel base verb governed by modal "must".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'and activate', whyWrong: 'Cannot pair "either" with "and".' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'or activate', whyWrong: 'Correct correlative partner.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'nor activate', whyWrong: 'Nor pairs with neither, not either.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'as well as activate', whyWrong: 'False correlative pairing.' }
        ]
      }
    },
    {
      questionNumber: 17,
      id: 'ch4-q17',
      difficulty: 'Elite',
      skillTag: 'Parallel Prepositional Complements',
      prompt: 'The paleogeneticist extracted ancient hominin DNA from fossilized dental enamel, ___ sediment samples excavated from the cave floor.',
      options: ['and from Pleistocene', 'and Pleistocene', 'also Pleistocene', 'and taking from Pleistocene'],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The preposition "from" governs both coordinate prepositional sources: *from fossilized dental enamel and from Pleistocene sediment samples*.',
        whyCorrect: 'Option A ("and from Pleistocene") preserves explicit prepositional parallelism across both sources.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'and from Pleistocene', whyWrong: 'Correct parallel prepositional phrase.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'and Pleistocene', whyWrong: 'Missing preposition creates ambiguous direct object interpretation.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'also Pleistocene', whyWrong: 'Conjunctive adverb cannot coordinate prepositional objects without coordinator.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'and taking from Pleistocene', whyWrong: 'Participle "taking" disrupts the clean prepositional coordination.' }
        ]
      }
    }
  ]
};

export const EXERCISE_BLOCK_4: WritingExerciseBlock = {
  blockNumber: 4,
  title: 'Block 4 Micro-Practice: Disjunctive Concord, Additive Modifiers & Auxiliaries',
  description: 'Targeted Practice on Rule of Proximity with Disjunctive Correlatives, Additive Phrases vs. True Compound Subjects, and Auxiliary Verb Substitution (Questions 18–23)',
  questions: [
    {
      questionNumber: 18,
      id: 'ch4-q18',
      difficulty: 'Medium',
      skillTag: 'Disjunctive Correlatives (Rule of Proximity)',
      prompt: 'Neither the principal conservator nor the laboratory technicians ___ able to arrest the pigment degradation on the 14th-century fresco.',
      options: ['was', 'were', 'is being', 'has been'],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'When "neither...nor" connects two subjects of differing number, the finite verb agrees with the nearer subject ("technicians", plural).',
        whyCorrect: 'Option B ("were") is the plural past-tense verb matching the nearer plural subject "technicians".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'was', whyWrong: 'Singular verb violates proximity rule with plural "technicians".' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'were', whyWrong: 'Correct plural verb agreeing with "technicians".' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'is being', whyWrong: 'Singular progressive verb violates proximity concord.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'has been', whyWrong: 'Singular present perfect verb violates proximity concord.' }
        ]
      }
    },
    {
      questionNumber: 19,
      id: 'ch4-q19',
      difficulty: 'Hard',
      skillTag: 'Additive Prepositional Phrases vs. Compound Subjects',
      prompt: 'The chief seismic analyst, along with two visiting volcanologists from Japan, ___ the caldera data every twelve hours.',
      options: ['review', 'reviews', 'are reviewing', 'have reviewed'],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Additive phrases introduced by "along with" are parenthetical prepositional modifiers that do not alter the grammatical number of the singular head subject ("analyst").',
        whyCorrect: 'Option B ("reviews") is the singular 3rd-person present verb agreeing with the singular subject "analyst".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'review', whyWrong: 'Plural verb falsely treats "along with" as a coordinating conjunction.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'reviews', whyWrong: 'Correct singular verb agreeing with "chief seismic analyst".' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'are reviewing', whyWrong: 'Plural progressive verb error.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'have reviewed', whyWrong: 'Plural present perfect verb error.' }
        ]
      }
    },
    {
      questionNumber: 20,
      id: 'ch4-q20',
      difficulty: 'Hard',
      skillTag: 'Auxiliary Verb Substitution in Comparisons',
      prompt: 'Modern high-throughput gene sequencers process base pairs far more rapidly than earlier Sanger sequencing machines ___.',
      options: ['did', 'are', 'were', 'have'],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The comparative clause substitutes an auxiliary verb for the repeated past action "processed base pairs". The past auxiliary "did" correctly replaces the predicate.',
        whyCorrect: 'Option A ("did") is the past auxiliary verb representing "processed base pairs".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'did', whyWrong: 'Correct substitute auxiliary for action verb "process/processed".' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'are', whyWrong: 'Auxiliary "are" is copular/present, mismatched with action verb.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'were', whyWrong: 'Copular "were" cannot substitute for dynamic action verb "process".' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'have', whyWrong: 'Present perfect auxiliary does not match simple past/present action.' }
        ]
      }
    },
    {
      questionNumber: 21,
      id: 'ch4-q21',
      difficulty: 'Hard',
      skillTag: 'Parallelism with "Rather Than"',
      prompt: 'The monetary policy committee chose to raise bank capital reserves rather than ___ benchmark borrowing rates during high inflation.',
      options: ['lowering', 'to lower', 'lower', 'the lowering of'],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'After "chose to [raise] ... rather than", the coordinated verb should match the bare infinitive "raise" (or full infinitive "to lower"). Bare verb "lower" provides clean syntactic coordination.',
        whyCorrect: 'Option C ("lower") provides the matching bare infinitive governed by "to [raise ... rather than lower]".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'lowering', whyWrong: 'Gerund nonparallel with infinitive "to raise".' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'to lower', whyWrong: 'Acceptable in some contexts, but bare verb is standard when parallel with single governing "to".' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'lower', whyWrong: 'Correct parallel bare verb.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'the lowering of', whyWrong: 'Noun phrase nonparallel.' }
        ]
      }
    },
    {
      questionNumber: 22,
      id: 'ch4-q22',
      difficulty: 'Elite',
      skillTag: 'Paired Range Parallelism ("From... To")',
      prompt: 'The economic repercussions of maritime canal blockages range from immediate freight rate spikes ___ critical components in global automotive supply chains.',
      options: [
        'to severe delivery delays for',
        'and severe delivery delays of',
        'to severely delay',
        'until severe delivery delays for'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The idiomatic range construction is "range from [Noun Phrase X] to [Noun Phrase Y]".',
        whyCorrect: 'Option A ("to severe delivery delays for") completes the range idiom with a parallel noun phrase.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'to severe delivery delays for', whyWrong: 'Correct idiomatic pair "from X to Y" with parallel noun phrase.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'and severe delivery delays of', whyWrong: 'Cannot pair "from" with "and" in a range construction.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'to severely delay', whyWrong: 'Infinitive phrase nonparallel with noun phrase "freight rate spikes".' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'until severe delivery delays for', whyWrong: 'Cannot substitute "until" for "to" in a range idiom.' }
        ]
      }
    },
    {
      questionNumber: 23,
      id: 'ch4-q23',
      difficulty: 'Elite',
      skillTag: 'Nearer Singular Subject Concord with Disjunctives',
      prompt: 'Either the lead software architects or the cybersecurity director ___ required to authorize emergency server isolation.',
      options: ["are maintained","is maintained","were maintained","have been maintained"],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Under the Rule of Proximity, when "either...or" connects a plural subject ("architects") and a singular subject ("director"), the verb agrees with the nearer singular subject ("director").',
        whyCorrect: 'Option B ("is") is the singular present verb agreeing with the nearer singular subject "director".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'are', whyWrong: 'Plural verb ignores proximity to singular "director".' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'is', whyWrong: 'Correct singular verb agreeing with "director".' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'were', whyWrong: 'Plural past verb ignores proximity concord.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'have been', whyWrong: 'Plural present perfect verb ignores proximity concord.' }
        ]
      }
    }
  ]
};

export const EXERCISE_BLOCK_5: WritingExerciseBlock = {
  blockNumber: 5,
  title: 'Block 5 Micro-Practice: Advanced Layering & Comparative Precision',
  description: 'Targeted Practice on Multi-Rule Layering, Dangling "Unlike", Nested Relative Clauses, and Demonstrative Pronouns (Questions 24–28)',
  questions: [
    {
      questionNumber: 24,
      id: 'ch4-q24',
      difficulty: 'Medium',
      skillTag: 'Multi-Rule Layering (Modifier + Agreement)',
      prompt: 'The astrophysicists who discovered the high-redshift quasar not only documented its relativistic plasma jets but also ___ its luminosity against historical stellar baselines.',
      options: ['comparing', 'compared', 'compare of', 'to compare'],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The correlative conjunction "not only... but also" coordinates two past-tense finite verbs governed by "astrophysicists": *not only documented ... but also compared*.',
        whyCorrect: 'Option B ("compared") matches "documented" in tense, mood, and finiteness.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'comparing', whyWrong: 'Participle nonparallel with finite past verb "documented".' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'compared', whyWrong: 'Correct parallel finite past verb.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'compare of', whyWrong: 'Ungrammatical construction.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'to compare', whyWrong: 'Infinitive nonparallel with past verb "documented".' }
        ]
      }
    },
    {
      questionNumber: 25,
      id: 'ch4-q25',
      difficulty: 'Hard',
      skillTag: 'Dangling "Unlike" Trap',
      prompt: 'Unlike conventional silicon photovoltaic cells, ___.',
      options: [
        'perovskite semiconductor layers absorb wider portions of the solar spectrum',
        'the absorption of solar spectrum wavelengths is broader in perovskite cells',
        'broader solar spectrum absorption characterizes perovskite cells',
        'in perovskite cells, wider wavelength absorption occurs'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The introductory modifier "Unlike conventional silicon photovoltaic cells" establishes a comparison with physical photovoltaic cells. The grammatical subject following the comma must be an equivalent physical entity ("perovskite semiconductor layers" or "perovskite cells").',
        whyCorrect: 'Option A places "perovskite semiconductor layers" directly after the comma, creating a logical cell-to-layer/cell-to-cell comparison.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'perovskite semiconductor layers absorb wider portions', whyWrong: 'Correct. Compares silicon cells to perovskite layers/cells.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'the absorption of solar spectrum wavelengths', whyWrong: 'Compares physical cells directly to the abstract phenomenon "the absorption".' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'broader solar spectrum absorption', whyWrong: 'Compares physical cells to an abstract metric.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'in perovskite cells, wider wavelength absorption', whyWrong: 'Prepositional opening delays subject and compares cells to absorption.' }
        ]
      }
    },
    {
      questionNumber: 26,
      id: 'ch4-q26',
      difficulty: 'Hard',
      skillTag: 'Demonstrative Reference ("Those Who")',
      prompt: 'In clinical epidemiology trials, patients who adhered strictly to the dietary protocol exhibited lower vascular inflammation markers than ___ in the control group.',
      options: ['those who did', 'those', 'that', 'them who participated'],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The comparison contrasts "patients who adhered..." with the patients in the control group. Demonstrative pronoun "those" represents "patients".',
        whyCorrect: 'Option B ("those") cleanly represents "patients" before the prepositional modifier "in the control group".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'those who did', whyWrong: 'Unclear what "did" refers to in relation to control group.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'those', whyWrong: 'Correct plural demonstrative replacing "patients".' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'that', whyWrong: 'That is singular; patients is plural.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'them who participated', whyWrong: 'Personal pronoun "them who" is nonstandard in formal English; use "those who".' }
        ]
      }
    },
    {
      questionNumber: 27,
      id: 'ch4-q27',
      difficulty: 'Elite',
      skillTag: 'Possessive Comparison with Ellipsis',
      prompt: "The International Monetary Fund's macroeconomic growth projections for emerging markets are far more pessimistic than ___.",
      options: [
        'the World Bank',
        "the World Bank's",
        'that of the World Bank',
        'when the World Bank projected'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The comparison is between the International Monetary Fund\'s growth projections and the World Bank\'s growth projections. Possessive "the World Bank\'s" stands elliptically for "the World Bank\'s growth projections".',
        whyCorrect: 'Option B ("the World Bank\'s") provides the exact parallel possessive noun phrase.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'the World Bank', whyWrong: 'Compares growth projections directly to an international institution.' },
          { optionIndex: 1, optionLabel: 'B', optionText: "the World Bank's", whyWrong: 'Correct elliptical possessive comparison.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'that of the World Bank', whyWrong: 'Projections is plural; requires "those of".' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'when the World Bank projected', whyWrong: 'Time clause cannot be compared to nominal projections.' }
        ]
      }
    },
    {
      questionNumber: 28,
      id: 'ch4-q28',
      difficulty: 'Elite',
      skillTag: 'Parallel Prepositional Symmetries ("Between... And")',
      prompt: 'Hydrodynamic engineers identified substantial turbulence discrepancies between water flowing through tapered nozzles and ___ cylindrical pipes.',
      options: [
        'water flowing through',
        'when water flows through',
        'through',
        'that flowing in'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The "between...and" correlative construction links two parallel participial noun phrases: *between water flowing through tapered nozzles and water flowing through cylindrical pipes*.',
        whyCorrect: 'Option A ("water flowing through") provides exact morphological and syntactic symmetry.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'water flowing through', whyWrong: 'Correct parallel nominal constituent.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'when water flows through', whyWrong: 'Adverbial clause nonparallel with noun phrase.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'through', whyWrong: 'Omits head noun "water", creating structural ambiguity.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'that flowing in', whyWrong: 'Unnecessarily introduces clumsy pronoun and shifts preposition from "through" to "in".' }
        ]
      }
    }
  ]
};

export const EXERCISE_BLOCK_6: WritingExerciseBlock = {
  blockNumber: 6,
  title: 'Block 6 Micro-Practice: Clausal Balance, Infinitives, and Modals',
  description: 'Targeted Practice on Clause-Level Parallelism, Shared Modals, Passive Participles, and Contrastive Structures (Questions 29–34)',
  questions: [
    {
      questionNumber: 29,
      id: 'ch4-q29',
      difficulty: 'Medium',
      skillTag: 'Clause-Level Parallelism (That-Clauses)',
      prompt: 'The glaciological expedition concluded that subglacial meltwater accelerated basal sliding and ___ collapse during warm summer cycles.',
      options: [
        'that ice shelf fissures risked catastrophic',
        'ice shelf fissures risked catastrophic',
        'the risk of ice shelf fissures causing',
        'fissuring in ice shelves risking'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The verb "concluded" introduces two parallel complement clauses headed by "that": *concluded that subglacial meltwater accelerated ... and that ice shelf fissures risked ...*',
        whyCorrect: 'Option A ("that ice shelf fissures risked catastrophic") maintains explicit clausal parallelism with the preceding "that" clause.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'that ice shelf fissures risked catastrophic', whyWrong: 'Correct parallel that-clause.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'ice shelf fissures risked catastrophic', whyWrong: 'Omitting "that" makes the second clause appear subordinated or ambiguous.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'the risk of ice shelf fissures causing', whyWrong: 'Noun phrase nonparallel with dependent clause.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'fissuring in ice shelves risking', whyWrong: 'Participial phrase nonparallel with finite clause.' }
        ]
      }
    },
    {
      questionNumber: 30,
      id: 'ch4-q30',
      difficulty: 'Hard',
      skillTag: 'Clause vs. Phrase Asymmetry Trap',
      prompt: 'The congressional oversight committee investigated whether the defense contractor had inflated procurement costs and ___ technical performance benchmarks.',
      options: [
        'whether the contractor had falsified',
        'the falsification of',
        'falsifying',
        'if there was falsification of'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The governing verb "investigated" introduces two parallel dependent clauses: *whether the defense contractor had inflated ... and whether the contractor had falsified ...*',
        whyCorrect: 'Option A ("whether the contractor had falsified") preserves parallel "whether"-clause architecture.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'whether the contractor had falsified', whyWrong: 'Correct parallel whether-clause.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'the falsification of', whyWrong: 'Noun phrase nonparallel with preceding whether-clause.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'falsifying', whyWrong: 'Gerund nonparallel with preceding whether-clause.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'if there was falsification of', whyWrong: 'Shifts from "whether" to colloquial "if" and uses weak existential "there was".' }
        ]
      }
    },
    {
      questionNumber: 31,
      id: 'ch4-q31',
      difficulty: 'Hard',
      skillTag: 'Shared Modal Auxiliaries',
      prompt: 'Autonomous agricultural drones can scan crop health using multispectral imaging, identify localized nitrogen deficiencies, and ___ fertilizer micro-doses with centimeter precision.',
      options: ['deliver', 'delivering', 'to deliver', 'the delivery of'],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The modal auxiliary "can" governs three coordinate uninflected base verbs: *can [scan] ..., [identify] ..., and [deliver] ...*',
        whyCorrect: 'Option A ("deliver") is the base verb completing the modal series.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'deliver', whyWrong: 'Correct base verb governed by modal "can".' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'delivering', whyWrong: 'Gerund cannot be governed by modal "can".' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'to deliver', whyWrong: 'Infinitive particle "to" cannot follow modal "can".' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'the delivery of', whyWrong: 'Noun phrase cannot serve as predicate governed by modal.' }
        ]
      }
    },
    {
      questionNumber: 32,
      id: 'ch4-q32',
      difficulty: 'Hard',
      skillTag: 'Parallel Passive Participles',
      prompt: 'The recovered Bronze Age maritime artifacts were desalted in chemical baths, stabilized with synthetic resins, and ___ in climate-controlled museum vaults.',
      options: ['catalogued', 'cataloguing', 'to catalogue', 'the cataloguing of them'],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The auxiliary "were" governs three parallel past participles: *were [desalted] ..., [stabilized] ..., and [catalogued] ...*',
        whyCorrect: 'Option A ("catalogued") is the past participle completing the passive series.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'catalogued', whyWrong: 'Correct parallel past participle.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'cataloguing', whyWrong: 'Present participle breaks passive chain.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'to catalogue', whyWrong: 'Infinitive breaks passive participle chain.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'the cataloguing of them', whyWrong: 'Noun phrase breaks passive chain.' }
        ]
      }
    },
    {
      questionNumber: 33,
      id: 'ch4-q33',
      difficulty: 'Elite',
      skillTag: 'Contrastive Parallelism ("Not To... But To")',
      prompt: 'The diplomatic objective of the maritime summit was not to enforce punitive sanctions immediately but ___ a binding framework for dispute resolution.',
      options: [
        'establishing',
        'to establish',
        'establishment of',
        'for establishing'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The contrastive correlative construction "not [Infinitive X] but [Infinitive Y]" requires matching infinitive phrases: *not to enforce ... but to establish*.',
        whyCorrect: 'Option B ("to establish") completes the symmetrical infinitive contrast.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'establishing', whyWrong: 'Gerund nonparallel with "to enforce".' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'to establish', whyWrong: 'Correct parallel infinitive.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'establishment of', whyWrong: 'Noun phrase nonparallel with "to enforce".' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'for establishing', whyWrong: 'Prepositional phrase nonparallel with "to enforce".' }
        ]
      }
    },
    {
      questionNumber: 34,
      id: 'ch4-q34',
      difficulty: 'Elite',
      skillTag: 'Pronoun Case in Parallel Complements',
      prompt: 'The university provost awarded joint computational research grants to both Dr. Vance and ___.',
      options: ['she', 'her', 'herself', 'they'],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The preposition "to" governs the compound objective complement "both Dr. Vance and [her]". Testing the pronoun alone ("awarded grants to her") confirms objective case.',
        whyCorrect: 'Option B ("her") is the correct objective case pronoun.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'she', whyWrong: 'Subjective case pronoun ungrammatical after preposition "to".' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'her', whyWrong: 'Correct objective case pronoun.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'herself', whyWrong: 'Reflexive pronoun lacks a coreferent subject within the clause.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'they', whyWrong: 'Subjective case pronoun ungrammatical after preposition.' }
        ]
      }
    }
  ]
};
