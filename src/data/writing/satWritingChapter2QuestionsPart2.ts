import { WritingExerciseBlock, WritingExerciseQuestion } from './satWritingTypes';

const BLOCK_21_QUESTIONS: WritingExerciseQuestion[] = [
  {
    questionNumber: 1,
    id: 'ch2-ex21-q1',
    difficulty: 'Advanced',
    skillTag: 'Medial Transitional Adverb with Embedded Prepositional Modifiers',
    prompt: 'The sovereign debt restructuring committee reached a tentative agreement with institutional bondholders; the finance ministry, ___ cautioned that legislative ratification would require contentious multi-party budget concessions.',
    options: [
      'however,',
      'however',
      '; however,',
      ', however'
    ],
    correctAnswer: 0,
    explanation: {
      coreReasoning: 'The semicolon already separates the two independent clauses. In the second clause, "the finance ministry" is the subject and "cautioned" is the finite verb. The conjunctive adverb "however" is functioning as an internal parenthetical modifier interrupting the subject and verb, requiring paired commas. With the first comma already preceding the blank, "however," provides the word and closing comma.',
      whyCorrect: 'Choice A is correct because "however," supplies the closing comma needed to isolate the parenthetical adverb before the verb "cautioned".',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: 'however,', whyWrong: 'Correct. Provides the trailing comma to complete the parenthetical enclosure.' },
        { optionIndex: 1, optionLabel: 'B', optionText: 'however', whyWrong: 'Omits the necessary closing comma before the main verb "cautioned".' },
        { optionIndex: 2, optionLabel: 'C', optionText: '; however,', whyWrong: 'Inserts an ungrammatical second semicolon within the independent clause.' },
        { optionIndex: 3, optionLabel: 'D', optionText: ', however', whyWrong: 'Duplicates the opening comma and omits the closing comma.' }
      ]
    }
  },
  {
    questionNumber: 2,
    id: 'ch2-ex21-q2',
    difficulty: 'Elite',
    skillTag: 'Complex Appositive Involving Multi-Word Modifiers and Contrast',
    prompt: 'The urban forestry commission recommended planting native bur oaks ___ a resilient, deep-rooting deciduous species capable of withstanding severe summer droughts and compacted metropolitan soils ___ along newly constructed transit boulevards.',
    options: [
      '—a resilient, deep-rooting deciduous species capable of withstanding severe summer droughts and compacted metropolitan soils—',
      ', a resilient, deep-rooting deciduous species capable of withstanding severe summer droughts and compacted metropolitan soils,',
      '; a resilient, deep-rooting deciduous species capable of withstanding severe summer droughts and compacted metropolitan soils;',
      ': a resilient, deep-rooting deciduous species capable of withstanding severe summer droughts and compacted metropolitan soils:'
    ],
    correctAnswer: 0,
    explanation: {
      coreReasoning: 'The appositive phrase ("a resilient, deep-rooting deciduous species capable of withstanding severe summer droughts and compacted metropolitan soils") contains internal punctuation ("resilient, deep-rooting"). To cleanly isolate this long, internally punctuated modifier between the noun "bur oaks" and the prepositional phrase "along newly constructed transit boulevards", paired em dashes provide the clearest structural enclosure.',
      whyCorrect: 'Choice A is correct because paired em dashes cleanly enclose the extensive interrupting appositive phrase without colliding with internal adjectives or disrupting the sentence skeleton.',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: '—a resilient, deep-rooting deciduous species capable of withstanding severe summer droughts and compacted metropolitan soils—', whyWrong: 'Correct. Symmetrical em dashes cleanly enclose the extensive interrupting appositive.' },
        { optionIndex: 1, optionLabel: 'B', optionText: ', a resilient, deep-rooting deciduous species capable of withstanding severe summer droughts and compacted metropolitan soils,', whyWrong: 'While paired commas can enclose appositives, in long complex phrases with internal modifiers, em dashes provide superior syntactic clarity.' },
        { optionIndex: 2, optionLabel: 'C', optionText: '; a resilient, deep-rooting deciduous species capable of withstanding severe summer droughts and compacted metropolitan soils;', whyWrong: 'Semicolons cannot enclose an internal noun phrase modifier.' },
        { optionIndex: 3, optionLabel: 'D', optionText: ': a resilient, deep-rooting deciduous species capable of withstanding severe summer droughts and compacted metropolitan soils:', whyWrong: 'Colons cannot be used in pairs to frame an internal appositive.' }
      ]
    }
  },
  {
    questionNumber: 3,
    id: 'ch2-ex21-q3',
    difficulty: 'Advanced',
    skillTag: 'Complex Series with Internal Modifiers',
    prompt: 'The renewable energy consortium announced three flagship initiatives: deploying floating offshore wind turbines along the North Sea coastline, where consistent gale-force winds optimize turbine ___ expanding high-voltage direct-current transmission lines across the Scandinavian peninsula, which currently lacks sufficient grid interconnectivity ___ and constructing utility-scale compressed-air energy storage facilities in decommissioned salt caverns.',
    options: [
      'efficiency; expanding high-voltage direct-current transmission lines across the Scandinavian peninsula, which currently lacks sufficient grid interconnectivity; and',
      'efficiency, expanding high-voltage direct-current transmission lines across the Scandinavian peninsula, which currently lacks sufficient grid interconnectivity, and',
      'efficiency: expanding high-voltage direct-current transmission lines across the Scandinavian peninsula, which currently lacks sufficient grid interconnectivity: and',
      'efficiency; expanding high-voltage direct-current transmission lines across the Scandinavian peninsula, which currently lacks sufficient grid interconnectivity, and'
    ],
    correctAnswer: 0,
    explanation: {
      coreReasoning: 'When items in a complex series contain internal commas (here, nonessential relative clauses like "where consistent gale-force winds..." and "which currently lacks..."), semicolons must serve as the primary list separators to prevent structural confusion.',
      whyCorrect: 'Choice A is correct because semicolons consistently partition the three complex list items when individual items contain internal relative clauses set off by commas.',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: 'efficiency; expanding high-voltage direct-current transmission lines across the Scandinavian peninsula, which currently lacks sufficient grid interconnectivity; and', whyWrong: 'Correct. Semicolons properly and consistently separate the complex series items.' },
        { optionIndex: 1, optionLabel: 'B', optionText: 'efficiency, expanding high-voltage direct-current transmission lines across the Scandinavian peninsula, which currently lacks sufficient grid interconnectivity, and', whyWrong: 'Using commas creates ambiguity because the reader cannot distinguish list item boundaries from internal relative clause commas.' },
        { optionIndex: 2, optionLabel: 'C', optionText: 'efficiency: expanding high-voltage direct-current transmission lines across the Scandinavian peninsula, which currently lacks sufficient grid interconnectivity: and', whyWrong: 'Colons cannot be used internally to separate coordinate list items.' },
        { optionIndex: 3, optionLabel: 'D', optionText: 'efficiency; expanding high-voltage direct-current transmission lines across the Scandinavian peninsula, which currently lacks sufficient grid interconnectivity, and', whyWrong: 'Inconsistently mixes a semicolon after the first item with a comma after the second item.' }
      ]
    }
  },
  {
    questionNumber: 4,
    id: 'ch2-ex21-q4',
    difficulty: 'Elite',
    skillTag: 'Deceptive Syntactic Skeleton: Compound Subject with Prepositional Modifiers',
    prompt: 'The rapid proliferation of algorithmic high-frequency trading platforms in global equity ___ the volatility of intraday liquidity spreads across decentralized electronic communication networks.',
    options: [
      'markets has amplified',
      'markets, has amplified',
      'markets; has amplified',
      'markets—has amplified'
    ],
    correctAnswer: 0,
    explanation: {
      coreReasoning: 'The grammatical subject is the singular noun "proliferation", which is modified by two prepositional phrases ("of algorithmic high-frequency trading platforms" and "in global equity markets"). The finite verb is "has amplified". No comma or other punctuation should separate a subject from its main verb.',
      whyCorrect: 'Choice A is correct because it maintains unbroken subject-verb continuity without inserting an ungrammatical comma or punctuation mark.',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: 'markets has amplified', whyWrong: 'Correct. No punctuation belongs between the complete subject and its main verb.' },
        { optionIndex: 1, optionLabel: 'B', optionText: 'markets, has amplified', whyWrong: 'Ungrammatically inserts a single comma between the subject and its predicate.' },
        { optionIndex: 2, optionLabel: 'C', optionText: 'markets; has amplified', whyWrong: 'A semicolon cannot divide a subject from its verb.' },
        { optionIndex: 3, optionLabel: 'D', optionText: 'markets—has amplified', whyWrong: 'An unpaired em dash incorrectly fractures the subject-verb core.' }
      ]
    }
  },
  {
    questionNumber: 5,
    id: 'ch2-ex21-q5',
    difficulty: 'Advanced',
    skillTag: 'Explanatory Colon after Complete Independent Clause',
    prompt: 'Musicologists observed an unexpected stylistic shift in Beethoven\'s late string ___ during his final creative period, the composer bypassed conventional sonata-allegro forms and instead experimented with highly fragmented, seven-movement structures.',
    options: [
      'quartets:',
      'quartets,',
      'quartets;',
      'quartets'
    ],
    correctAnswer: 0,
    explanation: {
      coreReasoning: 'The first clause ("Musicologists observed an unexpected stylistic shift in Beethoven\'s late string quartets") is a complete independent clause. The second clause specifies and explains the precise nature of that shift. A colon is the standard punctuation mark to introduce an explanatory clause.',
      whyCorrect: 'Choice A is correct because a colon properly introduces an explanatory independent clause following a complete thought.',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: 'quartets:', whyWrong: 'Correct. A colon properly introduces an explanatory independent clause following a complete thought.' },
        { optionIndex: 1, optionLabel: 'B', optionText: 'quartets,', whyWrong: 'Creates an ungrammatical comma splice between two independent clauses.' },
        { optionIndex: 2, optionLabel: 'C', optionText: 'quartets;', whyWrong: 'While a semicolon can connect independent clauses, a colon is far more accurate for an explicit specifying/explanatory relationship.' },
        { optionIndex: 3, optionLabel: 'D', optionText: 'quartets', whyWrong: 'Creates a fused run-on sentence without punctuation between clauses.' }
      ]
    }
  },
  {
    questionNumber: 6,
    id: 'ch2-ex21-q6',
    difficulty: 'Elite',
    skillTag: 'Restrictive Relative Clause Modifying Direct Object',
    prompt: 'The intellectual property appellate panel granted patent protections exclusively to software ___ that demonstrated novel machine learning architecture for real-time cryptographic threat detection.',
    options: [
      'developers that',
      'developers, that',
      'developers, who',
      'developers; that'
    ],
    correctAnswer: 0,
    explanation: {
      coreReasoning: 'The word "exclusively" establishes that patent protections were restricted only to the specific subset of developers who demonstrated novel architecture. This makes the relative clause essential (restrictive). Restrictive relative clauses do not take surrounding commas or semicolons.',
      whyCorrect: 'Choice A is correct because an essential restrictive relative clause remains integrated without commas.',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: 'developers that', whyWrong: 'Correct. Essential restrictive clause without commas preserves the precise legal restriction.' },
        { optionIndex: 1, optionLabel: 'B', optionText: 'developers, that', whyWrong: 'Commas cannot precede restrictive "that" clauses.' },
        { optionIndex: 2, optionLabel: 'C', optionText: 'developers, who', whyWrong: 'Adding a comma before "who" makes the clause nonessential, contradicting "exclusively" by implying all developers received protection.' },
        { optionIndex: 3, optionLabel: 'D', optionText: 'developers; that', whyWrong: 'A semicolon cannot separate a noun from its relative clause.' }
      ]
    }
  },
  {
    questionNumber: 7,
    id: 'ch2-ex21-q7',
    difficulty: 'Advanced',
    skillTag: 'Contrasting Coordinate Clause with Embedded FANBOYS',
    prompt: 'The telecommunications network completed its nationwide rollout of fifth-generation wireless base ___ but due to severe microchip shortages in the automotive sector, consumer vehicle telemetry modules were delayed by six months.',
    options: [
      'stations,',
      'stations;',
      'stations',
      'stations—'
    ],
    correctAnswer: 0,
    explanation: {
      coreReasoning: 'The sentence coordinates two independent clauses ("The telecommunications network completed..." and "consumer vehicle telemetry modules were delayed...") using the coordinating conjunction "but". A comma is required before "but" when connecting two independent clauses.',
      whyCorrect: 'Choice A is correct because a comma precedes the coordinating conjunction (FANBOYS) joining two independent clauses.',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: 'stations,', whyWrong: 'Correct. Comma + "but" properly connects the two independent clauses.' },
        { optionIndex: 1, optionLabel: 'B', optionText: 'stations;', whyWrong: 'Using a semicolon along with the coordinating conjunction "but" is ungrammatically redundant.' },
        { optionIndex: 2, optionLabel: 'C', optionText: 'stations', whyWrong: 'Omitting the comma before "but" creates a run-on sentence between two long independent clauses.' },
        { optionIndex: 3, optionLabel: 'D', optionText: 'stations—', whyWrong: 'An em dash before "but" is nonstandard when standard comma + coordinating conjunction is required.' }
      ]
    }
  },
  {
    questionNumber: 8,
    id: 'ch2-ex21-q8',
    difficulty: 'Elite',
    skillTag: 'Gerund Subject vs Introductory Participial Modifier',
    prompt: 'Analyzing high-resolution LIDAR scans of pre-Columbian agricultural terracing in the Andean ___ archaeologists to map over four hundred previously unrecorded canal irrigation channels.',
    options: [
      'highlands enabled',
      'highlands, enabled',
      'highlands; enabled',
      'highlands, has enabled'
    ],
    correctAnswer: 0,
    explanation: {
      coreReasoning: '"Analyzing high-resolution LIDAR scans of pre-Columbian agricultural terracing in the Andean highlands" is a gerund phrase serving as the complete grammatical subject of the sentence. The finite verb is "enabled". No comma should separate a gerund subject from its main verb.',
      whyCorrect: 'Choice A is correct because no comma should interrupt the gerund subject from its predicate verb "enabled".',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: 'highlands enabled', whyWrong: 'Correct. Keeps the gerund subject and its predicate verb intact without punctuation.' },
        { optionIndex: 1, optionLabel: 'B', optionText: 'highlands, enabled', whyWrong: 'Ungrammatically inserts a single comma between the gerund subject and its main verb.' },
        { optionIndex: 2, optionLabel: 'C', optionText: 'highlands; enabled', whyWrong: 'A semicolon cannot split a gerund subject from its verb.' },
        { optionIndex: 3, optionLabel: 'D', optionText: 'highlands, has enabled', whyWrong: 'Adds an ungrammatical comma between subject and verb.' }
      ]
    }
  },
  {
    questionNumber: 9,
    id: 'ch2-ex21-q9',
    difficulty: 'Advanced',
    skillTag: 'Singular and Plural Possessives with Compound Nouns',
    prompt: 'The aviation ___ investigation revealed that several commercial ___ cockpit voice recorders had experienced intermittent power failures during severe atmospheric turbulence.',
    options: [
      'agency\'s / airlines\'',
      'agencies / airlines',
      'agency\'s / airline\'s',
      'agencies\' / airlines\''
    ],
    correctAnswer: 0,
    explanation: {
      coreReasoning: 'The investigation belongs to one specific regulatory agency (singular possessive "agency\'s"). The cockpit voice recorders belong to multiple commercial airlines (plural possessive "airlines\'").',
      whyCorrect: 'Choice A is correct because "agency\'s" is the singular possessive and "airlines\'" is the plural possessive.',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: 'agency\'s / airlines\'', whyWrong: 'Correct. Accurately pairs singular possessive "agency\'s" with plural possessive "airlines\'".' },
        { optionIndex: 1, optionLabel: 'B', optionText: 'agencies / airlines', whyWrong: 'Both are simple plural nouns lacking necessary possessive apostrophes.' },
        { optionIndex: 2, optionLabel: 'C', optionText: 'agency\'s / airline\'s', whyWrong: '"airline\'s" is singular, which contradicts the plural quantifier "several".' },
        { optionIndex: 3, optionLabel: 'D', optionText: 'agencies\' / airlines\'', whyWrong: '"agencies\'" is plural possessive, implying multiple investigative agencies rather than a singular agency.' }
      ]
    }
  },
  {
    questionNumber: 10,
    id: 'ch2-ex21-q10',
    difficulty: 'Elite',
    skillTag: 'Subordinating Conjunction with Embedded Parenthetical Modifier',
    prompt: 'Although the pharmaceutical venture’s synthetic monoclonal antibody candidate, which targeted tau protein aggregations in neural tissue, demonstrated promising preclinical ___ late-stage human clinical trials revealed unacceptable renal toxicity.',
    options: [
      'results,',
      'results;',
      'results:',
      'results'
    ],
    correctAnswer: 0,
    explanation: {
      coreReasoning: 'The introductory dependent clause begins with "Although the pharmaceutical venture’s synthetic monoclonal antibody candidate..." and concludes at "preclinical results". A comma after "results" is required to mark the boundary between the introductory dependent clause and the main independent clause ("late-stage human clinical trials revealed...").',
      whyCorrect: 'Choice A is correct because a comma separates the introductory "Although" dependent clause from the main independent clause.',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: 'results,', whyWrong: 'Correct. A comma properly marks the clause boundary between the dependent introductory clause and the main clause.' },
        { optionIndex: 1, optionLabel: 'B', optionText: 'results;', whyWrong: 'A semicolon cannot separate an introductory dependent clause from an independent clause.' },
        { optionIndex: 2, optionLabel: 'C', optionText: 'results:', whyWrong: 'A colon requires a complete independent clause before it.' },
        { optionIndex: 3, optionLabel: 'D', optionText: 'results', whyWrong: 'Omitting the comma creates an unpunctuated clause boundary.' }
      ]
    }
  },
  {
    questionNumber: 11,
    id: 'ch2-ex21-q11',
    difficulty: 'Advanced',
    skillTag: 'Colon after Complete Thought vs Illegal Colon after Preposition',
    prompt: 'The environmental toxicology assessment documented elevated levels of three synthetic perfluorinated ___ perfluorooctanoic acid, perfluorooctane sulfonate, and hexafluoropropylene oxide.',
    options: [
      'compounds:',
      'compounds, such as:',
      'compounds including:',
      'compounds;'
    ],
    correctAnswer: 0,
    explanation: {
      coreReasoning: '"The environmental toxicology assessment documented elevated levels of three synthetic perfluorinated compounds" is a complete independent clause introducing a formal list of three chemical compounds. A colon is standard after a complete thought. A colon must never follow "such as" or "including".',
      whyCorrect: 'Choice A is correct because a colon follows a complete independent clause introducing a list without redundant prepositions.',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: 'compounds:', whyWrong: 'Correct. A colon introduces the list directly following a complete independent clause.' },
        { optionIndex: 1, optionLabel: 'B', optionText: 'compounds, such as:', whyWrong: 'A colon cannot follow "such as".' },
        { optionIndex: 2, optionLabel: 'C', optionText: 'compounds including:', whyWrong: 'A colon cannot follow the preposition "including".' },
        { optionIndex: 3, optionLabel: 'D', optionText: 'compounds;', whyWrong: 'A semicolon cannot introduce a series of non-clausal noun phrases.' }
      ]
    }
  },
  {
    questionNumber: 12,
    id: 'ch2-ex21-q12',
    difficulty: 'Elite',
    skillTag: 'Compound Predicate Interrupted by Restrictive Modifiers',
    prompt: 'The structural materials engineer evaluated the tensile strength of the titanium-aluminide turbine ___ and subsequently synthesized a novel ceramic coating to protect the blade against high-temperature oxidation.',
    options: [
      'spar',
      'spar,',
      'spar;',
      'spar:'
    ],
    correctAnswer: 0,
    explanation: {
      coreReasoning: 'The subject "The structural materials engineer" governs two coordinated verbs: "evaluated" and "synthesized". This forms a compound predicate within a single clause. No comma or other punctuation should separate two verbs that share a single subject.',
      whyCorrect: 'Choice A is correct because no comma should interrupt the two verbs in a compound predicate.',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: 'spar', whyWrong: 'Correct. No punctuation belongs in a compound predicate.' },
        { optionIndex: 1, optionLabel: 'B', optionText: 'spar,', whyWrong: 'Incorrectly places a comma before "and" when no new independent subject is introduced.' },
        { optionIndex: 2, optionLabel: 'C', optionText: 'spar;', whyWrong: 'A semicolon cannot divide verbs within a single predicate.' },
        { optionIndex: 3, optionLabel: 'D', optionText: 'spar:', whyWrong: 'A colon cannot interrupt coordinated verbs.' }
      ]
    }
  },
  {
    questionNumber: 13,
    id: 'ch2-ex21-q13',
    difficulty: 'Advanced',
    skillTag: 'Parenthetical Transition in Independent Clause',
    prompt: 'The quantum computing startup achieved 128-qubit quantum coherence in laboratory simulations. Commercial scalability, ___ remains constrained by high error rates in cryogenic qubit interconnects.',
    options: [
      'nevertheless,',
      'nevertheless',
      '; nevertheless,',
      ', nevertheless'
    ],
    correctAnswer: 0,
    explanation: {
      coreReasoning: 'In the second sentence, "Commercial scalability" is the subject and "remains" is the finite verb. The conjunctive adverb "nevertheless" is functioning as an internal parenthetical modifier interrupting the subject and verb, requiring paired commas. With the opening comma already in the prompt after "scalability,", the option "nevertheless," provides the word and closing comma.',
      whyCorrect: 'Choice A is correct because "nevertheless," completes the paired comma enclosure of the medial parenthetical adverb.',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: 'nevertheless,', whyWrong: 'Correct. Provides the closing comma to isolate the parenthetical transition before the main verb.' },
        { optionIndex: 1, optionLabel: 'B', optionText: 'nevertheless', whyWrong: 'Omits the necessary closing comma before the verb "remains".' },
        { optionIndex: 2, optionLabel: 'C', optionText: '; nevertheless,', whyWrong: 'Inserts an ungrammatical semicolon inside an independent clause.' },
        { optionIndex: 3, optionLabel: 'D', optionText: ', nevertheless', whyWrong: 'Duplicates the opening comma and omits the closing comma.' }
      ]
    }
  },
  {
    questionNumber: 14,
    id: 'ch2-ex21-q14',
    difficulty: 'Elite',
    skillTag: 'Correlative Conjunction with Embedded Nonrestrictive Modifier',
    prompt: 'Not only did the urban forestry initiative plant twelve thousand drought-resistant shade trees across metropolitan residential ___ it also constructed three linear wetlands to naturally filter urban stormwater runoff.',
    options: [
      'corridors, but',
      'corridors; but',
      'corridors,',
      'corridors: but'
    ],
    correctAnswer: 0,
    explanation: {
      coreReasoning: 'The sentence uses the correlative structure "Not only [inverted clause]... but [independent clause]". Because both clauses are independent, a comma before the coordinating conjunction "but" is the standard punctuation.',
      whyCorrect: 'Choice A is correct because "corridors, but" properly pairs with "Not only" to link the two clauses.',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: 'corridors, but', whyWrong: 'Correct. Comma + "but" completes the "Not only... but also" correlative structure.' },
        { optionIndex: 1, optionLabel: 'B', optionText: 'corridors; but', whyWrong: 'A semicolon should not precede the coordinating conjunction "but" in standard clause coordination.' },
        { optionIndex: 2, optionLabel: 'C', optionText: 'corridors,', whyWrong: 'Omitting "but" leaves the correlative "Not only" incomplete and creates a comma splice.' },
        { optionIndex: 3, optionLabel: 'D', optionText: 'corridors: but', whyWrong: 'A colon cannot precede the coordinating conjunction "but".' }
      ]
    }
  },
  {
    questionNumber: 15,
    id: 'ch2-ex21-q15',
    difficulty: 'Advanced',
    skillTag: 'Contrasting Emphatic Em Dash at Sentence Boundary',
    prompt: 'The renewable microgrid maintained continuous emergency power throughout the regional blackout ___ not through diesel backup generators, but through a multi-megawatt lithium-iron-phosphate battery bank.',
    options: [
      '—',
      ';',
      ', and',
      ':'
    ],
    correctAnswer: 0,
    explanation: {
      coreReasoning: 'The phrase "not through diesel backup generators, but through a multi-megawatt lithium-iron-phosphate battery bank" is an emphatic contrasting modifier clarifying the mechanism of the preceding independent clause. An em dash provides an effective break to introduce an emphatic contrasting clarification.',
      whyCorrect: 'Choice A is correct because an em dash sets off an emphatic contrasting modifier modifying the main verb phrase.',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: '—', whyWrong: 'Correct. An em dash cleanly introduces the emphatic contrasting phrase.' },
        { optionIndex: 1, optionLabel: 'B', optionText: ';', whyWrong: 'A semicolon must be followed by an independent clause, but "not through diesel backup generators..." is a prepositional phrase fragment.' },
        { optionIndex: 2, optionLabel: 'C', optionText: ', and', whyWrong: 'Adding "and" before "not through" creates awkward, clashing coordination.' },
        { optionIndex: 3, optionLabel: 'D', optionText: ':', whyWrong: 'A colon is less idiomatic than an em dash or comma before a contrasting "not X, but Y" prepositional construction.' }
      ]
    }
  },
  {
    questionNumber: 16,
    id: 'ch2-ex21-q16',
    difficulty: 'Elite',
    skillTag: 'Dangling Participle vs Attached Subject with Compound Modifiers',
    prompt: 'Having extracted fragile parchment scrolls from the seventeenth-century church archive, ___ that the parish ledger records had been systematically altered during the English Civil War.',
    options: [
      'legal historians determined',
      'determination by legal historians showed',
      'it was determined by legal historians',
      'the ledger records indicated'
    ],
    correctAnswer: 0,
    explanation: {
      coreReasoning: 'The introductory modifier "Having extracted fragile parchment scrolls..." describes the historians who performed the extraction. Therefore, the noun immediately following the comma must be the actors ("legal historians").',
      whyCorrect: 'Choice A is correct because "legal historians determined" properly attaches the human actors to the introductory participial modifier.',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: 'legal historians determined', whyWrong: 'Correct. Correctly places the subject who extracted the scrolls directly after the introductory modifier.' },
        { optionIndex: 1, optionLabel: 'B', optionText: 'determination by legal historians showed', whyWrong: 'Dangles the modifier: "determination" did not extract the scrolls.' },
        { optionIndex: 2, optionLabel: 'C', optionText: 'it was determined by legal historians', whyWrong: 'Dangles the modifier: dummy pronoun "it" did not extract the scrolls.' },
        { optionIndex: 3, optionLabel: 'D', optionText: 'the ledger records indicated', whyWrong: 'Dangles the modifier: "the ledger records" did not extract themselves.' }
      ]
    }
  },
  {
    questionNumber: 17,
    id: 'ch2-ex21-q17',
    difficulty: 'Advanced',
    skillTag: 'Semicolon Coordinating Independent Clauses with Conjunctive Adverbs',
    prompt: 'High-frequency radar satellites continuously track glacial flow velocities across Greenland ___ consequently, glaciologists can calculate ice sheet mass loss with unprecedented spatial precision.',
    options: [
      '; consequently,',
      ', consequently,',
      '; consequently',
      ': consequently,'
    ],
    correctAnswer: 0,
    explanation: {
      coreReasoning: 'Two complete independent clauses are connected by the conjunctive adverb "consequently". The required formula is: Independent Clause ; conjunctive adverb, Independent Clause.',
      whyCorrect: 'Choice A is correct because a semicolon before "consequently" and a comma after it properly connects the two independent clauses.',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: '; consequently,', whyWrong: 'Correct. Semicolon + conjunctive adverb + comma properly coordinates the independent clauses.' },
        { optionIndex: 1, optionLabel: 'B', optionText: ', consequently,', whyWrong: 'Creates an ungrammatical comma splice by placing only a comma before the conjunctive adverb.' },
        { optionIndex: 2, optionLabel: 'C', optionText: '; consequently', whyWrong: 'Omits the required trailing comma after the conjunctive adverb.' },
        { optionIndex: 3, optionLabel: 'D', optionText: ': consequently,', whyWrong: 'A colon cannot precede a coordinating conjunctive adverb like "consequently".' }
      ]
    }
  },
  {
    questionNumber: 18,
    id: 'ch2-ex21-q18',
    difficulty: 'Elite',
    skillTag: 'Paired Punctuation Consistency: Dashes vs Commas in Long Modifiers',
    prompt: 'The international space agency’s infrared telescope ___ designed to observe redshifted light from the earliest galaxies in the universe — completed its cryogenic mirror alignment ahead of schedule.',
    options: [
      '—',
      ',',
      ';',
      ':'
    ],
    correctAnswer: 0,
    explanation: {
      coreReasoning: 'The nonessential modifier ("designed to observe redshifted light from the earliest galaxies in the universe") closes with an em dash ("— completed its cryogenic..."). Punctuation marks framing a parenthetical modifier must match symmetrically. Therefore, an opening em dash must precede "designed".',
      whyCorrect: 'Choice A is correct because it supplies an opening em dash to match the closing em dash.',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: '—', whyWrong: 'Correct. Symmetrical em dash matching the closing em dash.' },
        { optionIndex: 1, optionLabel: 'B', optionText: ',', whyWrong: 'Creates an asymmetrical error by pairing an opening comma with a closing em dash.' },
        { optionIndex: 2, optionLabel: 'C', optionText: ';', whyWrong: 'A semicolon cannot be used as an opening parenthetical marker.' },
        { optionIndex: 3, optionLabel: 'D', optionText: ':', whyWrong: 'A colon cannot pair with an em dash to enclose an internal modifier.' }
      ]
    }
  },
  {
    questionNumber: 19,
    id: 'ch2-ex21-q19',
    difficulty: 'Advanced',
    skillTag: 'Contraction vs Possessive Pronoun in Complex Predicate',
    prompt: 'The materials science laboratory announced that ___ developed a self-healing ceramic composite that repairs microscopic thermal fractures in real time.',
    options: [
      'it\'s',
      'its',
      'they\'re',
      'there'
    ],
    correctAnswer: 0,
    explanation: {
      coreReasoning: '"The materials science laboratory" is a singular corporate/institutional entity. The dependent clause after "that" requires a subject pronoun and auxiliary verb for the past participle "developed". "it\'s" is the contraction for "it has".',
      whyCorrect: 'Choice A is correct because the contraction "it\'s" provides the singular subject "it" and auxiliary verb "has" (it has developed).',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: 'it\'s', whyWrong: 'Correct. Contraction for "it has" satisfying the subject + auxiliary verb requirement.' },
        { optionIndex: 1, optionLabel: 'B', optionText: 'its', whyWrong: 'Possessive pronoun that cannot serve as the subject + auxiliary verb before the participle "developed".' },
        { optionIndex: 2, optionLabel: 'C', optionText: 'they\'re', whyWrong: 'Plural contraction that disagrees with the singular subject "laboratory".' },
        { optionIndex: 3, optionLabel: 'D', optionText: 'there', whyWrong: 'Adverb/pronoun that creates nonsensical syntax before "developed".' }
      ]
    }
  },
  {
    questionNumber: 20,
    id: 'ch2-ex21-q20',
    difficulty: 'Elite',
    skillTag: 'Restrictive Appositive with Multiple Professional Titles',
    prompt: 'Renowned urban design theorist ___ argued that pedestrian-only superblocks significantly enhance retail foot traffic while reducing localized nitrogen dioxide emissions.',
    options: [
      'Sonia Alvarez',
      ', Sonia Alvarez,',
      '—Sonia Alvarez—',
      '; Sonia Alvarez;'
    ],
    correctAnswer: 0,
    explanation: {
      coreReasoning: 'When a professional title or descriptor precedes a person\'s name without an article ("Renowned urban design theorist Sonia Alvarez"), the name is a restrictive appositive necessary to identify the person. No commas or dashes should enclose restrictive names, and no comma should separate the name from the finite verb "argued".',
      whyCorrect: 'Choice A is correct because a restrictive name following a title takes no punctuation.',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: 'Sonia Alvarez', whyWrong: 'Correct. Restrictive appositive without commas smoothly connects the title to the verb.' },
        { optionIndex: 1, optionLabel: 'B', optionText: ', Sonia Alvarez,', whyWrong: 'Commas treat the name as nonessential, which is incorrect when the preceding title is a general descriptive phrase.' },
        { optionIndex: 2, optionLabel: 'C', optionText: '—Sonia Alvarez—', whyWrong: 'Dashes treat the name as parenthetical.' },
        { optionIndex: 3, optionLabel: 'D', optionText: '; Sonia Alvarez;', whyWrong: 'Semicolons cannot frame an internal proper noun.' }
      ]
    }
  },
  {
    questionNumber: 21,
    id: 'ch2-ex21-q21',
    difficulty: 'Advanced',
    skillTag: 'Colon Introducing Explanatory Sentence Specifying Problem',
    prompt: 'The telecommunications satellite network experienced an unprecedented technical anomaly ___ high-energy solar proton flares temporarily blinded the spacecraft\'s star-tracker optical navigation sensors.',
    options: [
      ':',
      ',',
      '; being that',
      '—and'
    ],
    correctAnswer: 0,
    explanation: {
      coreReasoning: 'The first clause ("The telecommunications satellite network experienced an unprecedented technical anomaly") is a complete independent clause announcing a phenomenon. The second clause specifies and explains exactly what that anomaly was. A colon is standard when introducing an explanatory clause that clarifies a preceding independent clause.',
      whyCorrect: 'Choice A is correct because a colon introduces the explanatory independent clause specifying the technical anomaly.',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: ':', whyWrong: 'Correct. A colon properly introduces an explanatory independent clause following a complete thought.' },
        { optionIndex: 1, optionLabel: 'B', optionText: ',', whyWrong: 'Creates an ungrammatical comma splice between two independent clauses.' },
        { optionIndex: 2, optionLabel: 'C', optionText: '; being that', whyWrong: '"being that" is nonstandard, awkward phrasing.' },
        { optionIndex: 3, optionLabel: 'D', optionText: '—and', whyWrong: 'Combining an em dash with "and" creates clumsy, redundant coordination.' }
      ]
    }
  },
  {
    questionNumber: 22,
    id: 'ch2-ex21-q22',
    difficulty: 'Elite',
    skillTag: 'Trailing Participial Modifier with Embedded Clauses',
    prompt: 'The civil engineering consortium completed the suspension bridge retrofit three weeks ahead of schedule ___ utilizing lightweight carbon-composite stay cables that dissipate high-frequency wind vibrations.',
    options: [
      ',',
      ';',
      ':',
      '—and'
    ],
    correctAnswer: 0,
    explanation: {
      coreReasoning: 'The sentence opens with a complete independent clause ("The civil engineering consortium completed..."). The subsequent present participial phrase ("utilizing lightweight carbon-composite stay cables...") functions as a trailing adverbial modifier explaining how the main action was achieved. A comma is required before a trailing participial phrase.',
      whyCorrect: 'Choice A is correct because a comma properly attaches the trailing participial modifier to the preceding independent clause.',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: ',', whyWrong: 'Correct. A comma separates the independent clause from the trailing participial phrase.' },
        { optionIndex: 1, optionLabel: 'B', optionText: ';', whyWrong: 'A semicolon must be followed by a complete independent clause, but "utilizing..." is a participial phrase fragment.' },
        { optionIndex: 2, optionLabel: 'C', optionText: ':', whyWrong: 'A colon is inappropriate here because the participial phrase does not define or formally list items.' },
        { optionIndex: 3, optionLabel: 'D', optionText: '—and', whyWrong: 'Combining an em dash with "and" before a participial phrase creates ungrammatical syntax.' }
      ]
    }
  },
  {
    questionNumber: 23,
    id: 'ch2-ex21-q23',
    difficulty: 'Advanced',
    skillTag: 'Integrated Dependent Clause vs Introductory Subordinate Clause',
    prompt: 'The renewable energy cooperative expanded localized solar battery storage across forty rural municipalities ___ because unseasonal winter storms frequently disrupted regional transmission lines.',
    options: [
      'municipalities',
      'municipalities,',
      'municipalities;',
      'municipalities:'
    ],
    correctAnswer: 0,
    explanation: {
      coreReasoning: 'When a dependent adverbial clause introduced by "because" follows the main independent clause, it is an integrated element answering why the main action occurred. No comma or other punctuation should precede an integrated ending adverbial clause.',
      whyCorrect: 'Choice A is correct because no punctuation is used before an integrated ending dependent clause introduced by "because".',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: 'municipalities', whyWrong: 'Correct. Leaves the integrated adverbial clause connected without unnecessary punctuation.' },
        { optionIndex: 1, optionLabel: 'B', optionText: 'municipalities,', whyWrong: 'Unnecessarily places a comma before an integrated subordinating conjunction.' },
        { optionIndex: 2, optionLabel: 'C', optionText: 'municipalities;', whyWrong: 'A semicolon cannot connect an independent clause to a dependent adverbial clause.' },
        { optionIndex: 3, optionLabel: 'D', optionText: 'municipalities:', whyWrong: 'A colon cannot precede a subordinating conjunction introducing a dependent clause.' }
      ]
    }
  },
  {
    questionNumber: 24,
    id: 'ch2-ex21-q24',
    difficulty: 'Elite',
    skillTag: 'Absolute Phrase Modifying Preceding Independent Clause',
    prompt: 'The international climate summit delegates concluded their plenary negotiations ___ each representative having signed a binding protocol on industrial methane abatement.',
    options: [
      ',',
      ';',
      ':',
      '—and'
    ],
    correctAnswer: 0,
    explanation: {
      coreReasoning: '"each representative having signed a binding protocol on industrial methane abatement" is an absolute phrase (noun + participial phrase) modifying the entire preceding independent clause. An absolute phrase is attached to an independent clause with a comma.',
      whyCorrect: 'Choice A is correct because a comma cleanly connects the absolute phrase to the independent clause.',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: ',', whyWrong: 'Correct. A comma properly connects the absolute phrase modifier to the main clause.' },
        { optionIndex: 1, optionLabel: 'B', optionText: ';', whyWrong: 'A semicolon must separate two independent clauses, but an absolute phrase is non-finite and cannot stand alone.' },
        { optionIndex: 2, optionLabel: 'C', optionText: ':', whyWrong: 'A colon is less appropriate than a comma for attaching an absolute phrase.' },
        { optionIndex: 3, optionLabel: 'D', optionText: '—and', whyWrong: 'Adding "and" creates a grammatically deformed clause lacking a finite verb.' }
      ]
    }
  },
  {
    questionNumber: 25,
    id: 'ch2-ex21-q25',
    difficulty: 'Advanced',
    skillTag: 'Joint vs Separate Possession in Scientific Context',
    prompt: 'The medical research endowment funded ___ separate epidemiological laboratories to investigate regional viral transmission dynamics.',
    options: [
      'Dr. Chen\'s and Dr. Patel\'s',
      'Dr. Chen and Dr. Patel\'s',
      'Dr. Chens and Dr. Patels',
      'Dr. Chen\'s and Dr. Patel'
    ],
    correctAnswer: 0,
    explanation: {
      coreReasoning: 'The word "separate" indicates that Dr. Chen and Dr. Patel operate two distinct laboratories. For separate possession of distinct entities, both nouns must take the possessive apostrophe + s ("Dr. Chen\'s and Dr. Patel\'s separate laboratories").',
      whyCorrect: 'Choice A is correct because separate possession requires both coordinated nouns to show the possessive form.',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: 'Dr. Chen\'s and Dr. Patel\'s', whyWrong: 'Correct. Accurately denotes separate possession of two distinct laboratories.' },
        { optionIndex: 1, optionLabel: 'B', optionText: 'Dr. Chen and Dr. Patel\'s', whyWrong: 'Denotes joint possession of a single shared laboratory, which contradicts "separate laboratories".' },
        { optionIndex: 2, optionLabel: 'C', optionText: 'Dr. Chens and Dr. Patels', whyWrong: 'Lacks possessive apostrophes.' },
        { optionIndex: 3, optionLabel: 'D', optionText: 'Dr. Chen\'s and Dr. Patel', whyWrong: 'Asymmetrical and ungrammatical possessive formulation.' }
      ]
    }
  },
  {
    questionNumber: 26,
    id: 'ch2-ex21-q26',
    difficulty: 'Elite',
    skillTag: 'Complex Appositive Involving Internal Semicolon Traps',
    prompt: 'The vintage automotive conservator restored three historic race cars ___ the 1954 Mercedes-Benz W196, the 1962 Ferrari 250 GTO, and the 1966 Ford GT40 ___ before unveiling the collection at the international concourse.',
    options: [
      '—the 1954 Mercedes-Benz W196, the 1962 Ferrari 250 GTO, and the 1966 Ford GT40—',
      ', the 1954 Mercedes-Benz W196, the 1962 Ferrari 250 GTO, and the 1966 Ford GT40,',
      '; the 1954 Mercedes-Benz W196, the 1962 Ferrari 250 GTO, and the 1966 Ford GT40;',
      ': the 1954 Mercedes-Benz W196, the 1962 Ferrari 250 GTO, and the 1966 Ford GT40:'
    ],
    correctAnswer: 0,
    explanation: {
      coreReasoning: 'The internal appositive ("the 1954 Mercedes-Benz W196, the 1962 Ferrari 250 GTO, and the 1966 Ford GT40") already contains serial commas. Framing it with external commas creates ambiguity between list items and sentence boundaries. Paired em dashes cleanly isolate the appositive list without punctuation confusion.',
      whyCorrect: 'Choice A is correct because paired em dashes cleanly isolate an internal appositive that contains internal list commas.',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: '—the 1954 Mercedes-Benz W196, the 1962 Ferrari 250 GTO, and the 1966 Ford GT40—', whyWrong: 'Correct. Symmetrical em dashes prevent comma collision in complex appositives.' },
        { optionIndex: 1, optionLabel: 'B', optionText: ', the 1954 Mercedes-Benz W196, the 1962 Ferrari 250 GTO, and the 1966 Ford GT40,', whyWrong: 'Using commas causes visual and structural confusion with the serial commas inside the list.' },
        { optionIndex: 2, optionLabel: 'C', optionText: '; the 1954 Mercedes-Benz W196, the 1962 Ferrari 250 GTO, and the 1966 Ford GT40;', whyWrong: 'Semicolons cannot enclose an internal parenthetical modifier.' },
        { optionIndex: 3, optionLabel: 'D', optionText: ': the 1954 Mercedes-Benz W196, the 1962 Ferrari 250 GTO, and the 1966 Ford GT40:', whyWrong: 'Colons cannot be used in pairs to frame an internal modifier.' }
      ]
    }
  },
  {
    questionNumber: 27,
    id: 'ch2-ex21-q27',
    difficulty: 'Advanced',
    skillTag: 'Transitional Adverb Expressing Reinforcement at Clause Boundary',
    prompt: 'The deep-sea submersible recorded extraordinary bioluminescent adaptations among abyssal organisms; ___ onboard spectrometry revealed unique fluorescent protein structures unknown to terrestrial biochemistry.',
    options: [
      'moreover,',
      'nevertheless,',
      'conversely,',
      'instead,'
    ],
    correctAnswer: 0,
    explanation: {
      coreReasoning: 'The first clause describes the recording of extraordinary adaptations, and the second clause adds further, reinforcing discoveries from spectrometry. "moreover," is the conjunctive adverb that signals reinforcement/addition.',
      whyCorrect: 'Choice A is correct because "moreover," properly introduces an independent clause adding reinforced evidence.',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: 'moreover,', whyWrong: 'Correct. Accurately expresses logical addition and reinforcement.' },
        { optionIndex: 1, optionLabel: 'B', optionText: 'nevertheless,', whyWrong: 'Expresses concession or contrast, not addition.' },
        { optionIndex: 2, optionLabel: 'C', optionText: 'conversely,', whyWrong: 'Expresses direct opposition, not addition.' },
        { optionIndex: 3, optionLabel: 'D', optionText: 'instead,', whyWrong: 'Expresses an alternative or replacement, not addition.' }
      ]
    }
  },
  {
    questionNumber: 28,
    id: 'ch2-ex21-q28',
    difficulty: 'Elite',
    skillTag: 'Colon Introducing Complete Thought vs Subordinate Clause',
    prompt: 'The civil aviation administration identified the primary operational ___ regional air traffic control sectors experienced severe radar telemetry blind spots during peak thunderstorm activity.',
    options: [
      'hazard:',
      'hazard,',
      'hazard;',
      'hazard'
    ],
    correctAnswer: 0,
    explanation: {
      coreReasoning: 'The first clause ("The civil aviation administration identified the primary operational hazard") is an independent clause. The second clause specifies and defines that exact hazard. A colon is standard when introducing an explanatory independent clause that specifies a concept announced in the preceding clause.',
      whyCorrect: 'Choice A is correct because a colon properly introduces the explanatory independent clause defining the operational hazard.',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: 'hazard:', whyWrong: 'Correct. A colon introduces the explanatory independent clause specifying the hazard.' },
        { optionIndex: 1, optionLabel: 'B', optionText: 'hazard,', whyWrong: 'Creates an ungrammatical comma splice.' },
        { optionIndex: 2, optionLabel: 'C', optionText: 'hazard;', whyWrong: 'A semicolon is less precise than a colon for a direct explanatory specification.' },
        { optionIndex: 3, optionLabel: 'D', optionText: 'hazard', whyWrong: 'Creates a fused run-on sentence.' }
      ]
    }
  },
  {
    questionNumber: 29,
    id: 'ch2-ex21-q29',
    difficulty: 'Advanced',
    skillTag: 'Cumulative Adjectives vs Coordinate Adjectives',
    prompt: 'The aerospace contractor fabricated a durable ___ titanium wing spar to reinforce the supersonic transport aircraft against aerodynamic flutter.',
    options: [
      'solid-core',
      'solid-core,',
      'solid-core;',
      'solid-core—'
    ],
    correctAnswer: 0,
    explanation: {
      coreReasoning: '"Solid-core" and "titanium" are cumulative adjectives modifying "wing spar". "Titanium" describes the material, while "solid-core" modifies "titanium wing spar". You cannot insert "and" between them ("solid-core and titanium wing spar" is unnatural), so no comma is used.',
      whyCorrect: 'Choice A is correct because cumulative adjectives do not take a separating comma.',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: 'solid-core', whyWrong: 'Correct. Cumulative adjectives preceding a noun do not take separating commas.' },
        { optionIndex: 1, optionLabel: 'B', optionText: 'solid-core,', whyWrong: 'Incorrectly treats cumulative adjectives as coordinate adjectives.' },
        { optionIndex: 2, optionLabel: 'C', optionText: 'solid-core;', whyWrong: 'A semicolon cannot separate premodifying adjectives.' },
        { optionIndex: 3, optionLabel: 'D', optionText: 'solid-core—', whyWrong: 'An em dash inappropriately interrupts the noun phrase.' }
      ]
    }
  },
  {
    questionNumber: 30,
    id: 'ch2-ex21-q30',
    difficulty: 'Elite',
    skillTag: 'Syntactic Skeleton: Compound Predicate with Dependent Sub-Clauses',
    prompt: 'The lead bioethicist reviewed the experimental gene-editing protocol to ensure compliance with international biomedical safety guidelines ___ and subsequently presented her recommendations to the university oversight panel.',
    options: [
      'guidelines',
      'guidelines,',
      'guidelines;',
      'guidelines:'
    ],
    correctAnswer: 0,
    explanation: {
      coreReasoning: 'The subject "The lead bioethicist" governs two coordinated verbs: "reviewed" and "presented". This forms a compound predicate within a single independent clause. No comma should precede "and" when joining two verbs sharing a single subject.',
      whyCorrect: 'Choice A is correct because no comma belongs between two coordinated verbs in a compound predicate.',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: 'guidelines', whyWrong: 'Correct. No punctuation in a compound predicate.' },
        { optionIndex: 1, optionLabel: 'B', optionText: 'guidelines,', whyWrong: 'Incorrectly places a comma before "and" in a compound predicate where no new independent subject is introduced.' },
        { optionIndex: 2, optionLabel: 'C', optionText: 'guidelines;', whyWrong: 'A semicolon cannot divide verbs within a single predicate.' },
        { optionIndex: 3, optionLabel: 'D', optionText: 'guidelines:', whyWrong: 'A colon cannot interrupt coordinated verbs in a predicate.' }
      ]
    }
  },
  {
    questionNumber: 31,
    id: 'ch2-ex21-q31',
    difficulty: 'Elite',
    skillTag: 'Embedded Dependent Clause in Compound Sentence',
    prompt: 'The cybersecurity operations center detected an unauthorized database query at midnight, but because automated firewall isolation protocols were ___ the malicious intrusion was quarantined before sensitive customer records could be exfiltrated.',
    options: [
      'triggered,',
      'triggered;',
      'triggered',
      'triggered—'
    ],
    correctAnswer: 0,
    explanation: {
      coreReasoning: 'Following the coordinating conjunction "but", an introductory dependent adverbial clause is inserted: "because automated firewall isolation protocols were triggered". This dependent clause requires a separating comma after "triggered" before the second independent clause ("the malicious intrusion was quarantined...").',
      whyCorrect: 'Choice A is correct because a comma properly separates the embedded introductory dependent clause from the independent clause that completes the compound sentence.',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: 'triggered,', whyWrong: 'Correct. A comma marks the boundary of the introductory "because" clause before the main clause.' },
        { optionIndex: 1, optionLabel: 'B', optionText: 'triggered;', whyWrong: 'A semicolon cannot separate an introductory dependent clause from an independent clause.' },
        { optionIndex: 2, optionLabel: 'C', optionText: 'triggered', whyWrong: 'Omitting the comma creates an unpunctuated clause boundary.' },
        { optionIndex: 3, optionLabel: 'D', optionText: 'triggered—', whyWrong: 'An em dash is nonstandard for marking the boundary of a standard introductory adverbial clause.' }
      ]
    }
  },
  {
    questionNumber: 32,
    id: 'ch2-ex21-q32',
    difficulty: 'Advanced',
    skillTag: 'Contrasting Coordinate Clause with Embedded Semicolon Trap',
    prompt: 'The renewable microgrid successfully buffered peak evening power demand across four municipal districts ___ yet regional utility executives hesitated to decommission the standby natural gas turbines.',
    options: [
      ',',
      ';',
      ':',
      '—and'
    ],
    correctAnswer: 0,
    explanation: {
      coreReasoning: 'Two complete independent clauses ("The renewable microgrid successfully buffered..." and "regional utility executives hesitated...") are linked by the coordinating conjunction "yet". A comma is required before "yet" when connecting two independent clauses.',
      whyCorrect: 'Choice A is correct because a comma + coordinating conjunction (FANBOYS) properly connects two independent clauses.',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: ',', whyWrong: 'Correct. Comma + "yet" properly connects two independent clauses.' },
        { optionIndex: 1, optionLabel: 'B', optionText: ';', whyWrong: 'Using a semicolon along with the coordinating conjunction "yet" is ungrammatically redundant.' },
        { optionIndex: 2, optionLabel: 'C', optionText: ':', whyWrong: 'A colon cannot precede a coordinating conjunction.' },
        { optionIndex: 3, optionLabel: 'D', optionText: '—and', whyWrong: 'Combining an em dash and "and" before "yet" creates ungrammatical, double conjunction syntax.' }
      ]
    }
  },
  {
    questionNumber: 33,
    id: 'ch2-ex21-q33',
    difficulty: 'Elite',
    skillTag: 'Multi-Clause Sentence with Ambiguous Antecedent Modification',
    prompt: 'The marine biology expedition documented several vibrant coral colonies near the hydrothermal ___ which were thriving at depths of three thousand meters under extreme barometric pressure.',
    options: [
      'vents,',
      'vents',
      'vents;',
      'vents:'
    ],
    correctAnswer: 0,
    explanation: {
      coreReasoning: 'The nonessential relative clause "which were thriving at depths of three thousand meters..." modifies the remote plural noun "coral colonies" (not the singular or nearest noun phrase "hydrothermal vents"). Because it provides supplementary descriptive detail about the colonies, it must be separated from the prepositional phrase ("near the hydrothermal vents") by a comma.',
      whyCorrect: 'Choice A is correct because a comma properly attaches the nonessential relative clause to "coral colonies".',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: 'vents,', whyWrong: 'Correct. A comma sets off the nonessential relative clause modifying the remote noun "coral colonies".' },
        { optionIndex: 1, optionLabel: 'B', optionText: 'vents', whyWrong: 'Without a comma, the clause appears restrictively attached to "vents", causing semantic and structural confusion.' },
        { optionIndex: 2, optionLabel: 'C', optionText: 'vents;', whyWrong: 'A semicolon cannot separate a relative clause from its antecedent noun.' },
        { optionIndex: 3, optionLabel: 'D', optionText: 'vents:', whyWrong: 'A colon cannot introduce a relative clause.' }
      ]
    }
  },
  {
    questionNumber: 34,
    id: 'ch2-ex21-q34',
    difficulty: 'Advanced',
    skillTag: 'Transitional Adverb Expressing Contrast vs Addition',
    prompt: 'The commercial flight simulator accurately replicates complex aerodynamic stalls under extreme icing conditions; ___ human flight instructors must still evaluate how student pilots manage cockpit stress during sudden instrument failures.',
    options: [
      'nonetheless,',
      'furthermore,',
      'in fact,',
      'consequently,'
    ],
    correctAnswer: 0,
    explanation: {
      coreReasoning: 'The first clause highlights the simulator\'s technical accuracy, but the second clause introduces a qualification/limitation: human instructors are still required to assess cockpit stress. "nonetheless," is the conjunctive adverb that communicates contrast/qualification.',
      whyCorrect: 'Choice A is correct because "nonetheless," properly introduces an independent clause that qualifies the preceding statement.',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: 'nonetheless,', whyWrong: 'Correct. Accurately expresses contrast and qualification.' },
        { optionIndex: 1, optionLabel: 'B', optionText: 'furthermore,', whyWrong: 'Expresses addition rather than qualification.' },
        { optionIndex: 2, optionLabel: 'C', optionText: 'in fact,', whyWrong: 'Expresses emphasis or confirmation rather than qualification.' },
        { optionIndex: 3, optionLabel: 'D', optionText: 'consequently,', whyWrong: 'Expresses cause-and-effect rather than contrast.' }
      ]
    }
  },
  {
    questionNumber: 35,
    id: 'ch2-ex21-q35',
    difficulty: 'Elite',
    skillTag: 'Colon Specifying Core Concept after Complete Independent Clause',
    prompt: 'The computational neuroscience team arrived at a definitive ___ synaptic pruning during adolescent sleep accelerates long-term declarative memory consolidation.',
    options: [
      'conclusion:',
      'conclusion,',
      'conclusion;',
      'conclusion'
    ],
    correctAnswer: 0,
    explanation: {
      coreReasoning: 'The first clause ("The computational neuroscience team arrived at a definitive conclusion") is a complete independent clause. The second clause specifies and defines that exact conclusion. A colon is standard when introducing an explanatory independent clause that specifies a concept announced in the preceding clause.',
      whyCorrect: 'Choice A is correct because a colon introduces the explanatory independent clause specifying the conclusion.',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: 'conclusion:', whyWrong: 'Correct. A colon introduces the explanatory independent clause specifying the conclusion.' },
        { optionIndex: 1, optionLabel: 'B', optionText: 'conclusion,', whyWrong: 'Creates an ungrammatical comma splice.' },
        { optionIndex: 2, optionLabel: 'C', optionText: 'conclusion;', whyWrong: 'A semicolon is less precise than a colon for a direct explanatory specification.' },
        { optionIndex: 3, optionLabel: 'D', optionText: 'conclusion', whyWrong: 'Creates a fused run-on sentence.' }
      ]
    }
  },
  {
    questionNumber: 36,
    id: 'ch2-ex21-q36',
    difficulty: 'Advanced',
    skillTag: 'No Comma Between Subject and Verb with Extended Modifiers',
    prompt: 'The interdisciplinary committee’s exhaustive evaluation of municipal flood defense strategies across sixty coastal ___ that barrier wetlands reduce storm surge damage far more cost-effectively than concrete seawalls.',
    options: [
      'communities demonstrated',
      'communities, demonstrated',
      'communities; demonstrated',
      'communities—demonstrated'
    ],
    correctAnswer: 0,
    explanation: {
      coreReasoning: 'The grammatical subject is the singular noun "evaluation", modified by two prepositional phrases ("of municipal flood defense strategies" and "across sixty coastal communities"). The finite verb is "demonstrated". No comma or other punctuation should separate a subject from its predicate verb.',
      whyCorrect: 'Choice A is correct because it maintains unbroken subject-verb continuity without punctuation.',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: 'communities demonstrated', whyWrong: 'Correct. Direct connection between subject and finite verb.' },
        { optionIndex: 1, optionLabel: 'B', optionText: 'communities, demonstrated', whyWrong: 'Ungrammatically inserts a single comma between the subject and its predicate verb.' },
        { optionIndex: 2, optionLabel: 'C', optionText: 'communities; demonstrated', whyWrong: 'A semicolon cannot divide a subject from its verb.' },
        { optionIndex: 3, optionLabel: 'D', optionText: 'communities—demonstrated', whyWrong: 'An unpaired em dash incorrectly fractures the subject-verb core.' }
      ]
    }
  },
  {
    questionNumber: 37,
    id: 'ch2-ex21-q37',
    difficulty: 'Elite',
    skillTag: 'Complex List of Independent Clauses with Internal Commas',
    prompt: 'The urban resilience report recommended three coordinated actions: municipal engineers must reinforce seawall foundations, which have suffered severe wave erosion; city planners must restrict commercial zoning in low-lying floodplains, where storm surges frequently inundate ___ and the regional water authority must upgrade drainage pumping stations across southern districts.',
    options: [
      'properties; and',
      'properties, and',
      'properties: and',
      'properties; as well as'
    ],
    correctAnswer: 0,
    explanation: {
      coreReasoning: 'The series consists of three complex independent clauses following a colon. Because the individual clauses contain internal commas (e.g., "foundations, which have suffered..." and "floodplains, where storm surges..."), semicolons must separate the major items in the list. Therefore, a semicolon before "and" is required to separate the third clause from the second.',
      whyCorrect: 'Choice A is correct because a semicolon before "and" maintains the consistent semicolon separation across complex list items with internal commas.',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: 'properties; and', whyWrong: 'Correct. Semicolon before "and" cleanly separates complex coordinate clauses in a series.' },
        { optionIndex: 1, optionLabel: 'B', optionText: 'properties, and', whyWrong: 'A comma creates ambiguity with the internal relative clause commas.' },
        { optionIndex: 2, optionLabel: 'C', optionText: 'properties: and', whyWrong: 'A colon cannot separate list elements within a series.' },
        { optionIndex: 3, optionLabel: 'D', optionText: 'properties; as well as', whyWrong: '"as well as" cannot coordinate complete independent clauses in a formal series.' }
      ]
    }
  },
  {
    questionNumber: 38,
    id: 'ch2-ex21-q38',
    difficulty: 'Advanced',
    skillTag: 'Contrasting Parenthetical Modifier Enclosed by Em Dashes',
    prompt: 'The central bank governors adjusted the reserve requirement ratio ___ not to constrain commercial lending, but to stabilize interbank liquidity spreads ___ during the international financial volatility.',
    options: [
      '—not to constrain commercial lending, but to stabilize interbank liquidity spreads—',
      ', not to constrain commercial lending, but to stabilize interbank liquidity spreads,',
      '; not to constrain commercial lending, but to stabilize interbank liquidity spreads;',
      'Both A and B are grammatically appropriate.'
    ],
    correctAnswer: 3,
    explanation: {
      coreReasoning: 'The phrase "not to constrain commercial lending, but to stabilize interbank liquidity spreads" is an interrupting nonessential contrasting modifier situated between the verb object and the adverbial prepositional phrase. Both symmetrical paired commas and symmetrical paired em dashes are grammatically valid methods to isolate this parenthetical contrast.',
      whyCorrect: 'Choice D is correct because both paired em dashes (Choice A) and paired commas (Choice B) are syntactically sound.',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: '—not to constrain commercial lending, but to stabilize interbank liquidity spreads—', whyWrong: 'Grammatically valid, but Choice B is equally valid, making D the comprehensive answer.' },
        { optionIndex: 1, optionLabel: 'B', optionText: ', not to constrain commercial lending, but to stabilize interbank liquidity spreads,', whyWrong: 'Grammatically valid, but Choice A is equally valid, making D the comprehensive answer.' },
        { optionIndex: 2, optionLabel: 'C', optionText: '; not to constrain commercial lending, but to stabilize interbank liquidity spreads;', whyWrong: 'Semicolons cannot be used in pairs to frame an internal parenthetical modifier.' },
        { optionIndex: 3, optionLabel: 'D', optionText: 'Both A and B are grammatically appropriate.', whyWrong: 'Correct. Both paired punctuation systems operate legitimately in standard English syntax.' }
      ]
    }
  },
  {
    questionNumber: 39,
    id: 'ch2-ex21-q39',
    difficulty: 'Elite',
    skillTag: 'Semicolon Splicing Across Subordinate vs Coordinate Boundary',
    prompt: 'While solar photovoltaic generation peaks during intense midday ___ regional electricity consumption reaches maximum demand in the late afternoon when residential air conditioning usage surges.',
    options: [
      'sunlight,',
      'sunlight;',
      'sunlight:',
      'sunlight, but'
    ],
    correctAnswer: 0,
    explanation: {
      coreReasoning: 'The sentence opens with a dependent adverbial clause introduced by the subordinating conjunction "While" ("While solar photovoltaic generation peaks..."). A comma is required after "sunlight" to separate the introductory dependent clause from the main independent clause ("regional electricity consumption reaches..."). Adding "but" would create a double-conjunction error lacking a main clause.',
      whyCorrect: 'Choice A is correct because a comma properly separates the introductory "While" clause from the main independent clause.',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: 'sunlight,', whyWrong: 'Correct. A comma marks the boundary between the introductory dependent clause and the independent clause.' },
        { optionIndex: 1, optionLabel: 'B', optionText: 'sunlight;', whyWrong: 'A semicolon cannot separate an introductory dependent clause from an independent clause.' },
        { optionIndex: 2, optionLabel: 'C', optionText: 'sunlight:', whyWrong: 'A colon requires a complete independent clause before it.' },
        { optionIndex: 3, optionLabel: 'D', optionText: 'sunlight, but', whyWrong: 'Adding "but" creates a double-conjunction error ("While... but"), leaving the sentence without a standalone main clause.' }
      ]
    }
  },
  {
    questionNumber: 40,
    id: 'ch2-ex21-q40',
    difficulty: 'Elite',
    skillTag: 'Explanatory Colon Defining Technical Breakthrough',
    prompt: 'The materials science consortium achieved a transformative engineering ___ by incorporating graphene nanoplatelets into the carbon-fiber polymer matrix, researchers doubled the tensile strength of the aircraft fuselage while reducing overall structural weight by twenty percent.',
    options: [
      'milestone:',
      'milestone,',
      'milestone;',
      'milestone'
    ],
    correctAnswer: 0,
    explanation: {
      coreReasoning: 'The first clause ("The materials science consortium achieved a transformative engineering milestone") is a complete independent clause. The following sentence specifies and explains exactly how that milestone was achieved. A colon is standard when introducing an explanatory independent clause or sentence that defines a concept announced in the preceding clause.',
      whyCorrect: 'Choice A is correct because a colon introduces the explanatory independent sentence specifying the engineering milestone.',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: 'milestone:', whyWrong: 'Correct. A colon introduces the explanatory independent sentence specifying the milestone.' },
        { optionIndex: 1, optionLabel: 'B', optionText: 'milestone,', whyWrong: 'Creates an ungrammatical comma splice.' },
        { optionIndex: 2, optionLabel: 'C', optionText: 'milestone;', whyWrong: 'A semicolon is less precise than a colon for a direct explanatory specification.' },
        { optionIndex: 3, optionLabel: 'D', optionText: 'milestone', whyWrong: 'Creates a fused run-on sentence.' }
      ]
    }
  }
];

export const EXERCISE_BLOCK_21: WritingExerciseBlock = {
  blockNumber: 21,
  title: 'Exercise Set 21 — Comprehensive Advanced Punctuation Assessment, Syntactic Skeletons, and Mastery Traps',
  description: 'Elite 40-question comprehensive chapter assessment covering complex sentence boundaries, medial transitions, complex lists with internal commas, remote relative clause modification, gerund subjects vs introductory phrases, correlative structures, and advanced syntactic trap patterns.',
  questions: BLOCK_21_QUESTIONS
};
