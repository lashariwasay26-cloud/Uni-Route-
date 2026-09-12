import { WritingExerciseBlock, WritingExerciseQuestion } from './satWritingTypes';

const BLOCK_19_QUESTIONS: WritingExerciseQuestion[] = [
  {
    questionNumber: 1,
    id: 'ch2-ex19-q1',
    difficulty: 'Intermediate',
    skillTag: 'Embedded Modifier in Independent Clause',
    prompt: 'Although the semiconductor foundry faced acute supply chain bottlenecks across East Asia, senior logistics directors ___ having secured secondary silicon ingot contracts in Scandinavia ___ maintained full production capacity throughout the fiscal quarter.',
    options: [
      'directors, having secured secondary silicon ingot contracts in Scandinavia,',
      'directors; having secured secondary silicon ingot contracts in Scandinavia;',
      'directors having secured secondary silicon ingot contracts in Scandinavia,',
      'directors: having secured secondary silicon ingot contracts in Scandinavia—'
    ],
    correctAnswer: 0,
    explanation: {
      coreReasoning: 'The sentence opens with a dependent clause ("Although the semiconductor foundry faced..."), followed by the main subject "senior logistics directors" and main verb "maintained". The participial phrase "having secured secondary silicon ingot contracts in Scandinavia" is an interrupting nonessential modifier between the subject and verb, requiring paired commas.',
      whyCorrect: 'Choice A is correct because it uses symmetrical paired commas to isolate the nonessential participial modifier without breaking the subject-verb skeleton.',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: 'directors, having secured secondary silicon ingot contracts in Scandinavia,', whyWrong: 'Correct. Symmetrical paired commas cleanly isolate the parenthetical participial phrase.' },
        { optionIndex: 1, optionLabel: 'B', optionText: 'directors; having secured secondary silicon ingot contracts in Scandinavia;', whyWrong: 'Semicolons cannot be used in pairs to frame an internal modifying phrase.' },
        { optionIndex: 2, optionLabel: 'C', optionText: 'directors having secured secondary silicon ingot contracts in Scandinavia,', whyWrong: 'Creates an asymmetrical punctuation error by including a closing comma but omitting the opening comma.' },
        { optionIndex: 3, optionLabel: 'D', optionText: 'directors: having secured secondary silicon ingot contracts in Scandinavia—', whyWrong: 'Mismatches an opening colon with a closing em dash to frame an internal modifier.' }
      ]
    }
  },
  {
    questionNumber: 2,
    id: 'ch2-ex19-q2',
    difficulty: 'Intermediate',
    skillTag: 'Compound Predicate with Distracting Prepositional Phrases',
    prompt: 'During the high-speed descent along the alpine velodrome, the Olympic track cyclist adjusted her aerodynamic posture to minimize atmospheric drag ___ and shifted her center of gravity inward to stabilize the carbon-fiber frame around the banked turn.',
    options: [
      'drag, and',
      'drag and',
      'drag; and',
      'drag, and she'
    ],
    correctAnswer: 1,
    explanation: {
      coreReasoning: 'The subject "the Olympic track cyclist" controls two coordinated verbs: "adjusted" and "shifted". This forms a compound predicate within a single independent clause. No comma should precede the coordinating conjunction "and" when joining two verbs sharing the same subject.',
      whyCorrect: 'Choice B is correct because no punctuation should divide the two verbs ("adjusted" and "shifted") in a compound predicate.',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: 'drag, and', whyWrong: 'Incorrectly places a comma before "and" in a compound predicate where no new independent subject is introduced.' },
        { optionIndex: 1, optionLabel: 'B', optionText: 'drag and', whyWrong: 'Correct. Coordinated verbs sharing a single subject must not be separated by a comma.' },
        { optionIndex: 2, optionLabel: 'C', optionText: 'drag; and', whyWrong: 'A semicolon cannot precede a coordinating conjunction connecting two verbs in a predicate.' },
        { optionIndex: 3, optionLabel: 'D', optionText: 'drag, and she', whyWrong: 'While comma + "she" creates a compound sentence, adding the pronoun introduces unnecessary wordiness when a compound predicate is already established.' }
      ]
    }
  },
  {
    questionNumber: 3,
    id: 'ch2-ex19-q3',
    difficulty: 'Advanced',
    skillTag: 'Complex Series with Internal Modifiers',
    prompt: 'The urban transit commission approved three major infrastructure overhauls: expanding the subterranean light-rail tunnel beneath the financial district, which currently experiences severe peak-hour bottlenecks ___ modernizing the signaling system along northern commuter lines, where train frequency remains restricted ___ and installing regenerative braking substations across the southern trolley loop.',
    options: [
      '; bottlenecks, modernizing the signaling system along northern commuter lines, where train frequency remains restricted, and',
      '; bottlenecks; modernizing the signaling system along northern commuter lines, where train frequency remains restricted; and',
      ', bottlenecks, modernizing the signaling system along northern commuter lines, where train frequency remains restricted, and',
      ': bottlenecks; modernizing the signaling system along northern commuter lines, where train frequency remains restricted: and'
    ],
    correctAnswer: 1,
    explanation: {
      coreReasoning: 'When items in a complex series contain internal commas (here, nonessential relative clauses like "which currently experiences..." and "where train frequency..."), semicolons must serve as the primary list separators to prevent structural confusion.',
      whyCorrect: 'Choice B is correct because semicolons properly partition the major list elements when individual items contain internal nonrestrictive relative clauses set off by commas.',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: '; bottlenecks, modernizing the signaling system along northern commuter lines, where train frequency remains restricted, and', whyWrong: 'Inconsistently mixes a semicolon after the first item with a comma after the second item.' },
        { optionIndex: 1, optionLabel: 'B', optionText: '; bottlenecks; modernizing the signaling system along northern commuter lines, where train frequency remains restricted; and', whyWrong: 'Correct. Semicolons consistently separate the three complex items in the list.' },
        { optionIndex: 2, optionLabel: 'C', optionText: ', bottlenecks, modernizing the signaling system along northern commuter lines, where train frequency remains restricted, and', whyWrong: 'Using commas creates ambiguity because the reader cannot distinguish list item boundaries from internal relative clause commas.' },
        { optionIndex: 3, optionLabel: 'D', optionText: ': bottlenecks; modernizing the signaling system along northern commuter lines, where train frequency remains restricted: and', whyWrong: 'Colons cannot be used internally to separate coordinate list items.' }
      ]
    }
  },
  {
    questionNumber: 4,
    id: 'ch2-ex19-q4',
    difficulty: 'Intermediate',
    skillTag: 'Restrictive Appositive with Multiple Modifiers',
    prompt: 'Acclaimed structural engineer ___ who oversaw the seismic retrofitting of Tokyo’s tallest telecommunications tower, emphasized that flexible steel dampeners absorb lateral harmonic oscillations far more effectively than rigid masonry supports.',
    options: [
      'Kenji Sato who oversaw the seismic retrofitting of Tokyo’s tallest telecommunications tower',
      'Kenji Sato, who oversaw the seismic retrofitting of Tokyo’s tallest telecommunications tower,',
      'Kenji Sato, who oversaw the seismic retrofitting of Tokyo’s tallest telecommunications tower',
      'Kenji Sato; who oversaw the seismic retrofitting of Tokyo’s tallest telecommunications tower;'
    ],
    correctAnswer: 1,
    explanation: {
      coreReasoning: 'When a title or descriptor precedes a specific name without an article ("Acclaimed structural engineer Kenji Sato"), the name is a restrictive appositive, but the subsequent relative clause ("who oversaw...") is nonessential supplementary detail and must be enclosed by paired commas before the main verb "emphasized".',
      whyCorrect: 'Choice B is correct because no comma separates the title from the name, while paired commas properly isolate the nonessential relative clause.',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: 'Kenji Sato who oversaw the seismic retrofitting of Tokyo’s tallest telecommunications tower', whyWrong: 'Omits the commas around the nonrestrictive relative clause, making the sentence structurally breathless before the verb "emphasized".' },
        { optionIndex: 1, optionLabel: 'B', optionText: 'Kenji Sato, who oversaw the seismic retrofitting of Tokyo’s tallest telecommunications tower,', whyWrong: 'Correct. Accurately treats the name as restrictive while punctuating the supplementary relative clause.' },
        { optionIndex: 2, optionLabel: 'C', optionText: 'Kenji Sato, who oversaw the seismic retrofitting of Tokyo’s tallest telecommunications tower', whyWrong: 'Fails to close the nonessential relative clause with a comma before the main verb "emphasized".' },
        { optionIndex: 3, optionLabel: 'D', optionText: 'Kenji Sato; who oversaw the seismic retrofitting of Tokyo’s tallest telecommunications tower;', whyWrong: 'Semicolons cannot be used to set off an internal relative clause.' }
      ]
    }
  },
  {
    questionNumber: 5,
    id: 'ch2-ex19-q5',
    difficulty: 'Advanced',
    skillTag: 'Colon Following Transitive Verb vs Independent Clause',
    prompt: 'The forensic accounting firm’s comprehensive audit of the multi-tiered hedge fund revealed ___ systematic discrepancies between reported offshore asset valuations and actual custodial depository balances.',
    options: [
      'revealed:',
      'revealed;',
      'revealed,',
      'revealed'
    ],
    correctAnswer: 3,
    explanation: {
      coreReasoning: '"The forensic accounting firm’s comprehensive audit of the multi-tiered hedge fund revealed" is not an independent clause because the transitive verb "revealed" requires a direct object to complete the predicate. No punctuation should separate a transitive verb from its object.',
      whyCorrect: 'Choice D is correct because no punctuation is permitted between the transitive verb "revealed" and its direct object clause.',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: 'revealed:', whyWrong: 'A colon cannot follow an incomplete independent clause or interrupt a transitive verb from its direct object.' },
        { optionIndex: 1, optionLabel: 'B', optionText: 'revealed;', whyWrong: 'A semicolon cannot follow a transitive verb or precede a direct object noun phrase.' },
        { optionIndex: 2, optionLabel: 'C', optionText: 'revealed,', whyWrong: 'A comma creates an illegal break between the transitive verb and its direct object.' },
        { optionIndex: 3, optionLabel: 'D', optionText: 'revealed', whyWrong: 'Correct. Seamlessly joins the verb to its direct object without ungrammatical punctuation.' }
      ]
    }
  },
  {
    questionNumber: 6,
    id: 'ch2-ex19-q6',
    difficulty: 'Intermediate',
    skillTag: 'Explanatory Colon after Complete Independent Clause',
    prompt: 'The aeronautical engineering consortium reached a unanimous consensus regarding the supersonic jet’s wing flutter instability ___ the titanium alloy skin exhibited microscopic harmonic micro-fractures under high-altitude transonic turbulence.',
    options: [
      'instability, the',
      'instability: the',
      'instability, and the',
      'instability; being that the'
    ],
    correctAnswer: 1,
    explanation: {
      coreReasoning: 'The first clause ("The aeronautical engineering consortium reached a unanimous consensus...") is a complete independent clause. The second clause specifies and explains the precise nature of that consensus. A colon is the optimal punctuation to introduce an explanatory independent clause.',
      whyCorrect: 'Choice B is correct because a colon introduces an explanatory independent clause that directly clarifies the preceding complete thought.',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: 'instability, the', whyWrong: 'Creates an ungrammatical comma splice between two independent clauses.' },
        { optionIndex: 1, optionLabel: 'B', optionText: 'instability: the', whyWrong: 'Correct. A colon properly introduces an explanatory independent clause following a complete independent clause.' },
        { optionIndex: 2, optionLabel: 'C', optionText: 'instability, and the', whyWrong: 'While comma + "and" is grammatically viable for coordinate clauses, it fails to convey the direct explanatory specification signaled by the first clause.' },
        { optionIndex: 3, optionLabel: 'D', optionText: 'instability; being that the', whyWrong: '"being that" is nonstandard, awkward phrasing on the SAT.' }
      ]
    }
  },
  {
    questionNumber: 7,
    id: 'ch2-ex19-q7',
    difficulty: 'Advanced',
    skillTag: 'Parenthetical Conjunctive Adverb vs Transitional Clause Connector',
    prompt: 'The commercial spaceflight venture secured international launch authorization from civil aviation regulators. The engineering team ___ cautioned that cryogenic propellant loading protocols still required secondary cryogenic valve certification before the scheduled liftoff.',
    options: [
      'team, however,',
      'team; however,',
      'team, however',
      'team however,'
    ],
    correctAnswer: 0,
    explanation: {
      coreReasoning: 'In the second sentence, "The engineering team" is the subject and "cautioned" is the main verb. The word "however" is functioning as an internal parenthetical modifier interrupting the subject and verb within a single independent clause, requiring paired commas.',
      whyCorrect: 'Choice A is correct because paired commas enclose the conjunctive adverb when it acts as an internal parenthetical interrupter inside a single clause.',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: 'team, however,', whyWrong: 'Correct. Paired commas properly frame the parenthetical transition within the clause.' },
        { optionIndex: 1, optionLabel: 'B', optionText: 'team; however,', whyWrong: 'A semicolon cannot separate a subject ("The engineering team") from its finite verb ("cautioned").' },
        { optionIndex: 2, optionLabel: 'C', optionText: 'team, however', whyWrong: 'Omits the second comma, creating an unbalanced parenthetical structure.' },
        { optionIndex: 3, optionLabel: 'D', optionText: 'team however,', whyWrong: 'Omits the opening comma before "however".' }
      ]
    }
  },
  {
    questionNumber: 8,
    id: 'ch2-ex19-q8',
    difficulty: 'Advanced',
    skillTag: 'Subordinating Conjunction with Embedded Relative Clause',
    prompt: 'Because deep-sea benthic organisms, which inhabit abyssal hydrothermal vent ecosystems under intense barometric pressure ___ possess unique cellular enzymes known as piezolytes, biomedical biochemists are studying them to synthesize temperature-resistant industrial catalysts.',
    options: [
      'pressure,',
      'pressure;',
      'pressure:',
      'pressure'
    ],
    correctAnswer: 0,
    explanation: {
      coreReasoning: 'The introductory dependent clause begins with "Because deep-sea benthic organisms" and concludes at "piezolytes". The relative clause "which inhabit abyssal hydrothermal vent ecosystems under intense barometric pressure" is nonessential and opened with a comma after "organisms"; it must close with a matching comma after "pressure" before the verb "possess".',
      whyCorrect: 'Choice A is correct because it supplies the necessary closing comma for the nonessential relative clause before the finite verb "possess".',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: 'pressure,', whyWrong: 'Correct. Closes the parenthetical relative clause so that "organisms" connects to "possess".' },
        { optionIndex: 1, optionLabel: 'B', optionText: 'pressure;', whyWrong: 'A semicolon cannot be placed inside an introductory dependent clause before its main predicate.' },
        { optionIndex: 2, optionLabel: 'C', optionText: 'pressure:', whyWrong: 'A colon cannot interrupt the flow between a subject and its finite verb inside a dependent clause.' },
        { optionIndex: 3, optionLabel: 'D', optionText: 'pressure', whyWrong: 'Leaving "pressure" unpunctuated fails to close the nonessential relative clause that opened after "organisms".' }
      ]
    }
  },
  {
    questionNumber: 9,
    id: 'ch2-ex19-q9',
    difficulty: 'Intermediate',
    skillTag: 'Possessive Noun vs Plural Noun in Complex Modifying Chains',
    prompt: 'During the high-frequency trading session, several quantitative ___ automated execution algorithms malfunctioned when market volatility indices spiked simultaneously.',
    options: [
      'brokerage\'s',
      'brokerages',
      'brokerages\'',
      'brokerages\'s'
    ],
    correctAnswer: 2,
    explanation: {
      coreReasoning: 'The sentence refers to multiple brokerages (plural "several quantitative brokerages") that possess the execution algorithms. Plural nouns ending in -s form the possessive by adding an apostrophe after the s ("brokerages\'").',
      whyCorrect: 'Choice C is correct because "brokerages\'" accurately conveys plural possession of the automated algorithms.',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: 'brokerage\'s', whyWrong: 'Singular possessive form, which contradicts the plural determiner "several".' },
        { optionIndex: 1, optionLabel: 'B', optionText: 'brokerages', whyWrong: 'Simple plural noun lacking the required possessive marker to modify "automated execution algorithms".' },
        { optionIndex: 2, optionLabel: 'C', optionText: 'brokerages\'', whyWrong: 'Correct. Plural possessive form properly modifying the following noun phrase.' },
        { optionIndex: 3, optionLabel: 'D', optionText: 'brokerages\'s', whyWrong: 'Ungrammatical spelling for a regular plural possessive noun.' }
      ]
    }
  },
  {
    questionNumber: 10,
    id: 'ch2-ex19-q10',
    difficulty: 'Advanced',
    skillTag: 'Contrasting Element at Sentence Boundary',
    prompt: 'The international climate summit delegates ratified a binding resolution to reduce industrial methane emissions by forty percent ___ not through punitive financial tariffs, but through shared technological transfers.',
    options: [
      'percent—',
      'percent;',
      'percent, and',
      'percent:'
    ],
    correctAnswer: 0,
    explanation: {
      coreReasoning: 'The phrase "not through punitive financial tariffs, but through shared technological transfers" is an emphatic contrasting modifier clarifying the mechanism of the preceding independent clause. An em dash provides an effective break to introduce a stark contrasting element or emphatic clarification.',
      whyCorrect: 'Choice A is correct because an em dash sets off an emphatic contrasting modifier modifying the main verb phrase.',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: 'percent—', whyWrong: 'Correct. An em dash cleanly introduces the emphatic contrasting phrase.' },
        { optionIndex: 1, optionLabel: 'B', optionText: 'percent;', whyWrong: 'A semicolon must be followed by an independent clause, but "not through punitive financial tariffs..." is a prepositional phrase fragment.' },
        { optionIndex: 2, optionLabel: 'C', optionText: 'percent, and', whyWrong: 'Adding "and" before "not through" creates awkward, clashing coordination.' },
        { optionIndex: 3, optionLabel: 'D', optionText: 'percent:', whyWrong: 'While colons can introduce explanations, a colon is less idiomatic than an em dash or comma before a contrasting "not X, but Y" prepositional construction.' }
      ]
    }
  },
  {
    questionNumber: 11,
    id: 'ch2-ex19-q11',
    difficulty: 'Intermediate',
    skillTag: 'Essential vs Nonessential Clause Changing Core Legal Meaning',
    prompt: 'The constitutional law tribunal ruled that municipal ordinances ___ must undergo immediate judicial review if petitioned by registered property owners. (The tribunal intended this review to apply strictly to ordinances that restrict commercial zoning rights, not all municipal ordinances.)',
    options: [
      ', which restrict commercial zoning rights,',
      'that restrict commercial zoning rights',
      '—which restrict commercial zoning rights—',
      '; which restrict commercial zoning rights;'
    ],
    correctAnswer: 1,
    explanation: {
      coreReasoning: 'Because the tribunal\'s ruling applies exclusively to the subset of ordinances restricting commercial zoning rights, the relative clause is restrictive (essential). Restrictive relative clauses use "that" and must not be enclosed by commas or dashes.',
      whyCorrect: 'Choice B is correct because "that restrict commercial zoning rights" without punctuation properly restricts the scope of "municipal ordinances".',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: ', which restrict commercial zoning rights,', whyWrong: 'Using paired commas makes the clause nonessential, erroneously implying that ALL municipal ordinances restrict commercial zoning rights and must undergo review.' },
        { optionIndex: 1, optionLabel: 'B', optionText: 'that restrict commercial zoning rights', whyWrong: 'Correct. Essential restrictive clause without commas maintains the precise legal meaning.' },
        { optionIndex: 2, optionLabel: 'C', optionText: '—which restrict commercial zoning rights—', whyWrong: 'Paired dashes treat the modifier as nonessential supplementary information.' },
        { optionIndex: 3, optionLabel: 'D', optionText: '; which restrict commercial zoning rights;', whyWrong: 'Semicolons cannot enclose an internal relative clause.' }
      ]
    }
  },
  {
    questionNumber: 12,
    id: 'ch2-ex19-q12',
    difficulty: 'Intermediate',
    skillTag: 'Participial Phrase Modifying Main Subject after Clause Boundary',
    prompt: 'The telecommunications satellite completed its final orbital telemetry calibration ___ transmitting encrypted weather radar telemetry to ground stations across three continents.',
    options: [
      'calibration,',
      'calibration;',
      'calibration:',
      'calibration'
    ],
    correctAnswer: 0,
    explanation: {
      coreReasoning: 'The sentence begins with an independent clause ("The telecommunications satellite completed..."). The subsequent present participial phrase ("transmitting encrypted weather radar telemetry...") functions as a trailing adverbial modifier explaining the simultaneous action performed by the subject ("The telecommunications satellite"). A comma is required before a trailing participial phrase.',
      whyCorrect: 'Choice A is correct because a comma properly attaches the trailing participial modifier to the preceding independent clause.',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: 'calibration,', whyWrong: 'Correct. A comma separates the independent clause from the trailing participial phrase.' },
        { optionIndex: 1, optionLabel: 'B', optionText: 'calibration;', whyWrong: 'A semicolon must be followed by a complete independent clause, but "transmitting..." is a participial phrase fragment.' },
        { optionIndex: 2, optionLabel: 'C', optionText: 'calibration:', whyWrong: 'A colon is inappropriate here because the participial phrase does not define or formally explain a noun or list.' },
        { optionIndex: 3, optionLabel: 'D', optionText: 'calibration', whyWrong: 'Omitting punctuation creates a run-on between the main clause and the modifying participial phrase.' }
      ]
    }
  },
  {
    questionNumber: 13,
    id: 'ch2-ex19-q13',
    difficulty: 'Advanced',
    skillTag: 'Correlative Conjunction with Embedded Comma Splice Trap',
    prompt: 'Not only did the renewable energy cooperative install rooftop solar arrays across four hundred low-income residential units ___ it also established a localized community battery bank to supply emergency backup power during grid blackouts.',
    options: [
      'units, but',
      'units; but',
      'units,',
      'units: but'
    ],
    correctAnswer: 0,
    explanation: {
      coreReasoning: 'The sentence utilizes the correlative construction "Not only [inverted clause]... but [independent clause]". Because both clauses are independent, a comma before the coordinating conjunction "but" is the standard punctuation.',
      whyCorrect: 'Choice A is correct because "units, but" properly pairs with "Not only" to link the two clauses.',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: 'units, but', whyWrong: 'Correct. Comma + "but" completes the "Not only... but also" correlative structure.' },
        { optionIndex: 1, optionLabel: 'B', optionText: 'units; but', whyWrong: 'A semicolon should not precede the coordinating conjunction "but" in standard clause coordination.' },
        { optionIndex: 2, optionLabel: 'C', optionText: 'units,', whyWrong: 'Omitting "but" leaves the correlative "Not only" incomplete and creates a comma splice.' },
        { optionIndex: 3, optionLabel: 'D', optionText: 'units: but', whyWrong: 'A colon cannot precede the coordinating conjunction "but".' }
      ]
    }
  },
  {
    questionNumber: 14,
    id: 'ch2-ex19-q14',
    difficulty: 'Intermediate',
    skillTag: 'Singular Indefinite Pronoun Possessive vs Plural',
    prompt: 'Each autonomous delivery vehicle relies on ___ internal lidar sensor array to navigate congested metropolitan pedestrian crossings without remote human intervention.',
    options: [
      'it\'s',
      'its',
      'their',
      'its\''
    ],
    correctAnswer: 1,
    explanation: {
      coreReasoning: 'The antecedent is the singular noun phrase "Each autonomous delivery vehicle". The possessive pronoun referring to a singular inanimate object is "its". Possessive pronouns never use apostrophes.',
      whyCorrect: 'Choice B is correct because "its" is the singular possessive pronoun agreeing with "Each autonomous delivery vehicle".',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: 'it\'s', whyWrong: 'Contraction for "it is" or "it has", which is ungrammatical before a noun phrase.' },
        { optionIndex: 1, optionLabel: 'B', optionText: 'its', whyWrong: 'Correct. Singular possessive pronoun without an apostrophe.' },
        { optionIndex: 2, optionLabel: 'C', optionText: 'their', whyWrong: 'Plural pronoun that disagrees in number with the singular subject "Each autonomous delivery vehicle".' },
        { optionIndex: 3, optionLabel: 'D', optionText: 'its\'', whyWrong: 'Nonexistent, ungrammatical punctuation form.' }
      ]
    }
  },
  {
    questionNumber: 15,
    id: 'ch2-ex19-q15',
    difficulty: 'Advanced',
    skillTag: 'Appositive Phrase with Internal Commas Requiring Dashes',
    prompt: 'The vintage watchmaker restored three intricate horological complications ___ the tourbillon, the perpetual calendar, and the minute repeater ___ before returning the pocket watch to the museum gallery.',
    options: [
      ', the tourbillon, the perpetual calendar, and the minute repeater,',
      '—the tourbillon, the perpetual calendar, and the minute repeater—',
      '; the tourbillon, the perpetual calendar, and the minute repeater;',
      ': the tourbillon, the perpetual calendar, and the minute repeater:'
    ],
    correctAnswer: 1,
    explanation: {
      coreReasoning: 'The appositive phrase ("the tourbillon, the perpetual calendar, and the minute repeater") contains internal commas separating list items. If framed by external commas, the list boundaries become visually and structurally confusing. Em dashes provide clear, unambiguous boundary demarcation for appositives containing internal commas.',
      whyCorrect: 'Choice B is correct because paired em dashes cleanly isolate an internal appositive that already contains list commas.',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: ', the tourbillon, the perpetual calendar, and the minute repeater,', whyWrong: 'Using commas creates comma confusion because the boundary commas blend with the serial commas in the list.' },
        { optionIndex: 1, optionLabel: 'B', optionText: '—the tourbillon, the perpetual calendar, and the minute repeater—', whyWrong: 'Correct. Em dashes eliminate ambiguity when enclosing an appositive with internal commas.' },
        { optionIndex: 2, optionLabel: 'C', optionText: '; the tourbillon, the perpetual calendar, and the minute repeater;', whyWrong: 'Semicolons cannot be used in pairs to frame an internal appositive phrase.' },
        { optionIndex: 3, optionLabel: 'D', optionText: ': the tourbillon, the perpetual calendar, and the minute repeater:', whyWrong: 'Colons cannot be used as paired enclosing punctuation marks.' }
      ]
    }
  },
  {
    questionNumber: 16,
    id: 'ch2-ex19-q16',
    difficulty: 'Advanced',
    skillTag: 'Transitional Phrase at Clause Boundary vs Relative Pronoun',
    prompt: 'The sovereign wealth fund reallocated thirty billion dollars into renewable infrastructure assets; ___ the portfolio\'s carbon exposure dropped by nearly forty-five percent within eighteen months.',
    options: [
      'as a consequence,',
      'which consequently',
      'whereas',
      'as a consequence'
    ],
    correctAnswer: 0,
    explanation: {
      coreReasoning: 'A semicolon precedes the blank, requiring an independent clause to follow. The transition "as a consequence" introduces the result of the investment shift and must be followed by a comma when positioned at the start of the second independent clause.',
      whyCorrect: 'Choice A is correct because "as a consequence," logically expresses cause-and-effect and is properly punctuated with a trailing comma after the semicolon.',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: 'as a consequence,', whyWrong: 'Correct. Semicolon + transitional phrase with comma + independent clause.' },
        { optionIndex: 1, optionLabel: 'B', optionText: 'which consequently', whyWrong: 'Relative pronoun "which" turns the second clause into a dependent relative clause, making it ungrammatical after a semicolon.' },
        { optionIndex: 2, optionLabel: 'C', optionText: 'whereas', whyWrong: 'Subordinating conjunction "whereas" creates a dependent clause after a semicolon.' },
        { optionIndex: 3, optionLabel: 'D', optionText: 'as a consequence', whyWrong: 'Omits the required comma after the introductory transitional phrase.' }
      ]
    }
  },
  {
    questionNumber: 17,
    id: 'ch2-ex19-q17',
    difficulty: 'Intermediate',
    skillTag: 'No Comma Between Cumulative Adjectives vs Coordinate Adjectives',
    prompt: 'The aviation engineering team tested a new ___ composite wing structure inside the transonic wind tunnel to evaluate aerodynamic stability under high turbulence.',
    options: [
      'lightweight, carbon-fiber',
      'lightweight carbon-fiber',
      'lightweight; carbon-fiber',
      'lightweight—carbon-fiber'
    ],
    correctAnswer: 1,
    explanation: {
      coreReasoning: '"Lightweight" and "carbon-fiber" are cumulative adjectives modifying "wing structure", where "carbon-fiber" relates to material and "lightweight" modifies the entire "carbon-fiber wing structure". You cannot place "and" between them ("lightweight and carbon-fiber wing structure" sounds unnatural), so no comma is used.',
      whyCorrect: 'Choice B is correct because cumulative adjectives preceding a noun do not take separating commas.',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: 'lightweight, carbon-fiber', whyWrong: 'Incorrectly treats cumulative adjectives as coordinate adjectives.' },
        { optionIndex: 1, optionLabel: 'B', optionText: 'lightweight carbon-fiber', whyWrong: 'Correct. Cumulative adjectives modifying a noun directly should not be separated by a comma.' },
        { optionIndex: 2, optionLabel: 'C', optionText: 'lightweight; carbon-fiber', whyWrong: 'A semicolon cannot separate premodifying adjectives.' },
        { optionIndex: 3, optionLabel: 'D', optionText: 'lightweight—carbon-fiber', whyWrong: 'An em dash inappropriately interrupts the noun phrase.' }
      ]
    }
  },
  {
    questionNumber: 18,
    id: 'ch2-ex19-q18',
    difficulty: 'Advanced',
    skillTag: 'Interrupted Subject-Verb with Multiple Prepositional Phrases',
    prompt: 'The recent discovery of hydrothermal vent colonies thriving along tectonic subduction zones in the Mariana Trench ___ marine biologists to reconsider prevailing theories about the energetic prerequisites for cellular life.',
    options: ["techniques:","techniques","techniques,","techniques;"],
    correctAnswer: 0,
    explanation: {
      coreReasoning: 'The grammatical subject is the singular noun "discovery", which is followed by two long prepositional modifiers ("of hydrothermal vent colonies" and "thriving along tectonic subduction zones in the Mariana Trench"). No punctuation should separate a subject from its finite verb ("has prompted").',
      whyCorrect: 'Choice A is correct because it maintains unbroken subject-verb continuity without inserting an ungrammatical comma or punctuation mark.',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: 'has prompted', whyWrong: 'Correct. No punctuation belongs between the complete subject and its main verb.' },
        { optionIndex: 1, optionLabel: 'B', optionText: ', has prompted', whyWrong: 'Ungrammatically inserts a single comma between the subject and its predicate.' },
        { optionIndex: 2, optionLabel: 'C', optionText: '; has prompted', whyWrong: 'A semicolon cannot divide a subject from its verb.' },
        { optionIndex: 3, optionLabel: 'D', optionText: '—has prompted', whyWrong: 'An unpaired em dash incorrectly fractures the subject-verb core.' }
      ]
    }
  },
  {
    questionNumber: 19,
    id: 'ch2-ex19-q19',
    difficulty: 'Intermediate',
    skillTag: 'Plural vs Possessive with Parallel Noun Phrases',
    prompt: 'The athletic footwear company evaluated both ___ feedback and professional ___ performance metrics before finalizing the sole geometry of the marathon racing shoe.',
    options: [
      'consumers / athletes\'',
      'consumer\'s / athlete\'s',
      'consumers\' / athletes\'',
      'consumers\' / athletes'
    ],
    correctAnswer: 2,
    explanation: {
      coreReasoning: 'Both elements refer to plural possessor groups: the feedback belonging to multiple consumers ("consumers\' feedback") and the metrics belonging to multiple professional athletes ("athletes\' performance metrics"). Both require regular plural possessive forms ending in an apostrophe after the s.',
      whyCorrect: 'Choice C is correct because both "consumers\'" and "athletes\'" properly denote plural possession.',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: 'consumers / athletes\'', whyWrong: '"consumers" is a plain plural noun without the required possessive marker to modify "feedback".' },
        { optionIndex: 1, optionLabel: 'B', optionText: 'consumer\'s / athlete\'s', whyWrong: 'Uses singular possessive forms, contradicting the broad multi-user testing context.' },
        { optionIndex: 2, optionLabel: 'C', optionText: 'consumers\' / athletes\'', whyWrong: 'Correct. Both nouns correctly take plural possessive apostrophes.' },
        { optionIndex: 3, optionLabel: 'D', optionText: 'consumers\' / athletes', whyWrong: '"athletes" lacks the necessary possessive apostrophe before "performance metrics".' }
      ]
    }
  },
  {
    questionNumber: 20,
    id: 'ch2-ex19-q20',
    difficulty: 'Advanced',
    skillTag: 'Colon Introducing Quotation with Internal Attribution Clause',
    prompt: 'In her keynote address on corporate governance, the chief ethics officer delivered a blunt warning to the assembled board members ___ "Transparency is not a public relations luxury; it is a fiduciary imperative."',
    options: ["materials:","materials","materials,","materials;"],
    correctAnswer: 0,
    explanation: {
      coreReasoning: 'The introductory clause ("In her keynote address on corporate governance, the chief ethics officer delivered a blunt warning to the assembled board members") is a complete independent clause introducing a formal, verbatim quotation. A colon is standard when a full independent clause introduces a quotation.',
      whyCorrect: 'Choice A is correct because a colon introduces a direct quotation following a complete independent clause.',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: ':', whyWrong: 'Correct. A colon formally introduces the quoted statement following a complete independent clause.' },
        { optionIndex: 1, optionLabel: 'B', optionText: ',', whyWrong: 'A comma is used after dialog verbs like "said" or "remarked," but an independent clause introducing a quotation requires a colon.' },
        { optionIndex: 2, optionLabel: 'C', optionText: ';', whyWrong: 'A semicolon cannot be used to introduce a direct quotation.' },
        { optionIndex: 3, optionLabel: 'D', optionText: '—that', whyWrong: 'Combining an em dash with "that" before a direct quotation is ungrammatical and awkward.' }
      ]
    }
  },
  {
    questionNumber: 21,
    id: 'ch2-ex19-q21',
    difficulty: 'Advanced',
    skillTag: 'Clause Boundary with Embedded Participial Modifier and Transition',
    prompt: 'The biomedical research laboratory completed phase-three clinical trials on the synthetic peptide vaccine; ___ analyzing the blood serum of twelve hundred trial participants, lead immunologists observed robust neutralizing antibody titers.',
    options: [
      'subsequently, after',
      'subsequently after',
      'subsequently. After',
      'subsequently; after'
    ],
    correctAnswer: 0,
    explanation: {
      coreReasoning: 'Following the semicolon, the transition "subsequently" begins the second independent clause. It is followed by an introductory participial phrase ("after analyzing the blood serum..."), which requires a separating comma before the main subject "lead immunologists".',
      whyCorrect: 'Choice A is correct because "subsequently, after" properly punctuates the conjunctive adverb while maintaining the introductory participial phrase structure.',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: 'subsequently, after', whyWrong: 'Correct. Punctuate the initial adverb with a comma before the introductory prepositional/participial phrase.' },
        { optionIndex: 1, optionLabel: 'B', optionText: 'subsequently after', whyWrong: 'Omits the necessary comma after the introductory transition adverb "subsequently".' },
        { optionIndex: 2, optionLabel: 'C', optionText: 'subsequently. After', whyWrong: 'Creates an isolated, ungrammatical one-word fragment "subsequently." after a semicolon.' },
        { optionIndex: 3, optionLabel: 'D', optionText: 'subsequently; after', whyWrong: 'Places an ungrammatical second semicolon after a single transition word.' }
      ]
    }
  },
  {
    questionNumber: 22,
    id: 'ch2-ex19-q22',
    difficulty: 'Intermediate',
    skillTag: 'Singular Indefinite Pronoun vs Contraction',
    prompt: 'The cybersecurity specialist argued that ___ impossible to prevent every unauthorized network intrusion without implementing multi-factor biometric authentication across all employee workstations.',
    options: ["its", "it's", "its'", "they're"],
    correctAnswer: 1,
    explanation: {
      coreReasoning: 'The dependent clause introduced by "that" requires a subject and a verb for the predicate adjective "impossible". "it\'s" is the contraction for "it is".',
      whyCorrect: 'Choice B is correct because the contraction "it\'s" provides the dummy subject "it" and finite verb "is".',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: 'its', whyWrong: 'Possessive determiner, leaving the clause without a subject and verb before "impossible".' },
        { optionIndex: 1, optionLabel: 'B', optionText: 'it\'s', whyWrong: 'Correct. Contraction for "it is" satisfying the clause structure.' },
        { optionIndex: 2, optionLabel: 'C', optionText: 'its\'', whyWrong: 'Nonexistent, ungrammatical punctuation form.' },
        { optionIndex: 3, optionLabel: 'D', optionText: 'they\'re', whyWrong: 'Contraction for "they are" which disagrees in number with the singular semantic subject.' }
      ]
    }
  },
  {
    questionNumber: 23,
    id: 'ch2-ex19-q23',
    difficulty: 'Advanced',
    skillTag: 'Restrictive Relative Clause Following Direct Object',
    prompt: 'The civil litigation jury awarded damages solely to property owners ___ who had documented structural foundation cracking before the municipal tunneling project commenced.',
    options: [
      'owners, who had documented structural foundation cracking,',
      'owners who had documented structural foundation cracking',
      'owners; who had documented structural foundation cracking',
      'owners—who had documented structural foundation cracking—'
    ],
    correctAnswer: 1,
    explanation: {
      coreReasoning: 'The word "solely" emphasizes that only the specific subset of property owners with prior documentation received damages. This makes the relative clause essential (restrictive). Essential clauses must not be set off with commas or dashes.',
      whyCorrect: 'Choice B is correct because it leaves the restrictive relative clause integrated into the sentence without punctuation.',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: 'owners, who had documented structural foundation cracking,', whyWrong: 'Commas make the clause nonessential, contradicting "solely" by implying all property owners had documented cracking.' },
        { optionIndex: 1, optionLabel: 'B', optionText: 'owners who had documented structural foundation cracking', whyWrong: 'Correct. Essential relative clause without punctuation preserves the restrictive meaning.' },
        { optionIndex: 2, optionLabel: 'C', optionText: 'owners; who had documented structural foundation cracking', whyWrong: 'A semicolon cannot separate a noun from its modifying relative clause.' },
        { optionIndex: 3, optionLabel: 'D', optionText: 'owners—who had documented structural foundation cracking—', whyWrong: 'Dashes treat the restrictive condition as optional parenthetical information.' }
      ]
    }
  },
  {
    questionNumber: 24,
    id: 'ch2-ex19-q24',
    difficulty: 'Intermediate',
    skillTag: 'Joint vs Separate Possession',
    prompt: 'The Nobel Prize committee commended ___ groundbreaking 1953 discovery of the double helix structure of DNA.',
    options: ["conclusions:","conclusions","conclusions,","conclusions;"],
    correctAnswer: 0,
    explanation: {
      coreReasoning: 'James Watson and Francis Crick jointly authored the single 1953 discovery. For joint possession of a single item or discovery, only the final noun takes the possessive apostrophe + s ("Watson and Crick\'s discovery").',
      whyCorrect: 'Choice A is correct because joint possession requires the possessive ending only on the last noun in the coordinate pair.',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: 'James Watson and Francis Crick\'s', whyWrong: 'Correct. Demonstrates joint possession of a single shared scientific discovery.' },
        { optionIndex: 1, optionLabel: 'B', optionText: 'James Watson\'s and Francis Crick\'s', whyWrong: 'Indicates separate possession, implying two distinct, separate discoveries rather than one co-authored discovery.' },
        { optionIndex: 2, optionLabel: 'C', optionText: 'James Watson and Francis Cricks', whyWrong: 'Lacks the possessive apostrophe entirely.' },
        { optionIndex: 3, optionLabel: 'D', optionText: 'James Watson\'s and Francis Crick', whyWrong: 'Asymmetrical and ungrammatical possessive formulation.' }
      ]
    }
  },
  {
    questionNumber: 25,
    id: 'ch2-ex19-q25',
    difficulty: 'Advanced',
    skillTag: 'Independent Clause with Embedded Infinitive Purpose Modifier',
    prompt: 'To reduce drag during high-velocity atmospheric reentry, aerospace engineers redesigned the spacecraft’s ablative heat ___ utilizing ceramic-matrix tiles that dissipate thermal energy rapidly.',
    options: [
      'shield,',
      'shield;',
      'shield:',
      'shield'
    ],
    correctAnswer: 0,
    explanation: {
      coreReasoning: 'The sentence has an introductory infinitive phrase ("To reduce drag..."), a main independent clause ("aerospace engineers redesigned the spacecraft’s ablative heat shield"), and a trailing participial phrase ("utilizing ceramic-matrix tiles..."). A comma is needed after "shield" to attach the trailing participial modifier to the main clause.',
      whyCorrect: 'Choice A is correct because a comma properly connects the trailing participial modifier to the preceding independent clause.',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: 'shield,', whyWrong: 'Correct. A comma cleanly links the trailing participial phrase to the main clause.' },
        { optionIndex: 1, optionLabel: 'B', optionText: 'shield;', whyWrong: 'A semicolon must separate two independent clauses; "utilizing ceramic-matrix tiles..." is a participial modifier fragment.' },
        { optionIndex: 2, optionLabel: 'C', optionText: 'shield:', whyWrong: 'A colon is inappropriate because the participial phrase does not define or formally list items.' },
        { optionIndex: 3, optionLabel: 'D', optionText: 'shield', whyWrong: 'Fails to separate the independent clause from the trailing participial modifier.' }
      ]
    }
  },
  {
    questionNumber: 26,
    id: 'ch2-ex19-q26',
    difficulty: 'Advanced',
    skillTag: 'Compound Sentence with Medial Prepositional Phrase',
    prompt: 'During peak morning commute hours, the municipal ferry network transported twenty thousand passengers across the bay ___ but due to severe maritime fog in the afternoon, port authorities suspended all departures.',
    options: ["variables:","variables","variables,","variables;"],
    correctAnswer: 0,
    explanation: {
      coreReasoning: 'The sentence joins two complete independent clauses ("the municipal ferry network transported..." and "port authorities suspended all departures") using the coordinating conjunction "but". A comma is required before "but" when connecting two independent clauses.',
      whyCorrect: 'Choice A is correct because a comma precedes the coordinating conjunction (FANBOYS) joining two independent clauses.',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: 'bay,', whyWrong: 'Correct. Comma + "but" properly connects the two independent clauses.' },
        { optionIndex: 1, optionLabel: 'B', optionText: 'bay;', whyWrong: 'Using a semicolon along with the coordinating conjunction "but" is ungrammatically redundant.' },
        { optionIndex: 2, optionLabel: 'C', optionText: 'bay', whyWrong: 'Omitting the comma before "but" creates a run-on sentence between two long independent clauses.' },
        { optionIndex: 3, optionLabel: 'D', optionText: 'bay—', whyWrong: 'An em dash before "but" is stylistically nonstandard when standard comma + coordinating conjunction is required.' }
      ]
    }
  },
  {
    questionNumber: 27,
    id: 'ch2-ex19-q27',
    difficulty: 'Intermediate',
    skillTag: 'Irregular Plural Possessive vs Regular Plural',
    prompt: 'The pediatric hospital organized a multidisciplinary seminar on ___ cognitive development following traumatic brain injuries.',
    options: [
      'childrens\'',
      'children\'s',
      'childrens',
      'children'
    ],
    correctAnswer: 1,
    explanation: {
      coreReasoning: '"Children" is an irregular plural noun that does not end in -s. Irregular plural nouns form the possessive by adding an apostrophe + s ("children\'s"), just like singular nouns.',
      whyCorrect: 'Choice B is correct because "children\'s" is the standard possessive form for the irregular plural noun "children".',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: 'childrens\'', whyWrong: 'Ungrammatical form; "children" is already plural, so adding "s\'" is incorrect.' },
        { optionIndex: 1, optionLabel: 'B', optionText: 'children\'s', whyWrong: 'Correct. Irregular plural possessive form with apostrophe before s.' },
        { optionIndex: 2, optionLabel: 'C', optionText: 'childrens', whyWrong: 'Nonexistent nonstandard plural noun.' },
        { optionIndex: 3, optionLabel: 'D', optionText: 'children', whyWrong: 'Plain noun functioning awkwardly without the required possessive marker to modify "cognitive development".' }
      ]
    }
  },
  {
    questionNumber: 28,
    id: 'ch2-ex19-q28',
    difficulty: 'Advanced',
    skillTag: 'Colon with Independent Clause Specifying Prior Pronoun',
    prompt: 'The lead structural investigator reached one definitive conclusion regarding the skyscraper\'s seismic ___ the diagonal cross-bracing had dissipated sixty percent of the earthquake\'s lateral kinetic energy.',
    options: [
      'performance:',
      'performance;',
      'performance,',
      'performance—and'
    ],
    correctAnswer: 0,
    explanation: {
      coreReasoning: 'The first clause ("The lead structural investigator reached one definitive conclusion regarding the skyscraper\'s seismic performance") is a complete independent thought signaling a single specific discovery. The second clause specifies and explains that exact conclusion. A colon is the standard mark to introduce an explanatory clause.',
      whyCorrect: 'Choice A is correct because a colon introduces an explanatory independent clause that directly specifies "one definitive conclusion".',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: 'performance:', whyWrong: 'Correct. A colon properly specifies the conclusion announced in the preceding independent clause.' },
        { optionIndex: 1, optionLabel: 'B', optionText: 'performance;', whyWrong: 'A semicolon links coordinate clauses neutrally rather than establishing a direct explanatory specification.' },
        { optionIndex: 2, optionLabel: 'C', optionText: 'performance,', whyWrong: 'Creates an ungrammatical comma splice between two independent clauses.' },
        { optionIndex: 3, optionLabel: 'D', optionText: 'performance—and', whyWrong: 'Combining an em dash with "and" creates clumsy, nonstandard clause coordination.' }
      ]
    }
  },
  {
    questionNumber: 29,
    id: 'ch2-ex19-q29',
    difficulty: 'Advanced',
    skillTag: 'Subordinate Clause Following Main Clause with Restrictive Adverbial Modifier',
    prompt: 'The agricultural cooperative expanded cold-storage facility capacity throughout the regional dairy basin ___ because unseasonal heat waves threatened to spoil perishable raw milk before distribution.',
    options: [
      'basin,',
      'basin;',
      'basin',
      'basin:'
    ],
    correctAnswer: 2,
    explanation: {
      coreReasoning: 'When a dependent adverbial clause introduced by "because" follows the main independent clause, it is an integrated element answering why the main action occurred. No comma or other punctuation should precede an integrated ending adverbial clause.',
      whyCorrect: 'Choice C is correct because no punctuation is used before an integrated ending dependent clause introduced by "because".',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: 'basin,', whyWrong: 'Unnecessarily places a comma before an integrated subordinating conjunction.' },
        { optionIndex: 1, optionLabel: 'B', optionText: 'basin;', whyWrong: 'A semicolon cannot connect an independent clause to a dependent adverbial clause.' },
        { optionIndex: 2, optionLabel: 'C', optionText: 'basin', whyWrong: 'Correct. Leaves the integrated adverbial clause connected without unnecessary punctuation.' },
        { optionIndex: 3, optionLabel: 'D', optionText: 'basin:', whyWrong: 'A colon cannot precede a subordinating conjunction introducing a dependent clause.' }
      ]
    }
  },
  {
    questionNumber: 30,
    id: 'ch2-ex19-q30',
    difficulty: 'Advanced',
    skillTag: 'Complex Appositive Involving Multi-Word Modifiers and Contrast',
    prompt: 'The urban forestry director advocated for planting native bur oaks ___ a resilient, deep-rooting deciduous species capable of withstanding urban soil compaction and extreme summer droughts ___ along the municipal transit boulevard.',
    options: [
      ', a resilient, deep-rooting deciduous species capable of withstanding urban soil compaction and extreme summer droughts,',
      '—a resilient, deep-rooting deciduous species capable of withstanding urban soil compaction and extreme summer droughts—',
      '; a resilient, deep-rooting deciduous species capable of withstanding urban soil compaction and extreme summer droughts;',
      ': a resilient, deep-rooting deciduous species capable of withstanding urban soil compaction and extreme summer droughts:'
    ],
    correctAnswer: 1,
    explanation: {
      coreReasoning: 'The modifying appositive phrase ("a resilient, deep-rooting deciduous species capable of withstanding urban soil compaction and extreme summer droughts") contains internal punctuation ("resilient, deep-rooting"). To cleanly isolate this long, internally punctuated modifier between the noun "bur oaks" and the prepositional phrase "along the municipal transit boulevard", paired em dashes provide the clearest structural enclosure.',
      whyCorrect: 'Choice B is correct because paired em dashes cleanly separate the extensive appositive phrase without colliding with internal adjectives or disrupting the sentence skeleton.',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: ', a resilient, deep-rooting deciduous species capable of withstanding urban soil compaction and extreme summer droughts,', whyWrong: 'While paired commas can enclose appositives, in long complex phrases with internal modifiers, em dashes provide superior syntactic clarity.' },
        { optionIndex: 1, optionLabel: 'B', optionText: '—a resilient, deep-rooting deciduous species capable of withstanding urban soil compaction and extreme summer droughts—', whyWrong: 'Correct. Symmetrical em dashes cleanly enclose the extensive interrupting appositive.' },
        { optionIndex: 2, optionLabel: 'C', optionText: '; a resilient, deep-rooting deciduous species capable of withstanding urban soil compaction and extreme summer droughts;', whyWrong: 'Semicolons cannot enclose an internal noun phrase modifier.' },
        { optionIndex: 3, optionLabel: 'D', optionText: ': a resilient, deep-rooting deciduous species capable of withstanding urban soil compaction and extreme summer droughts:', whyWrong: 'Colons cannot be used in pairs to frame an internal appositive.' }
      ]
    }
  }
];

export const EXERCISE_BLOCK_19: WritingExerciseBlock = {
  blockNumber: 19,
  title: 'Exercise Set 19 — Advanced Punctuation Systems: Clause Interactions, Embedded Modifiers, and Structural Boundaries',
  description: 'Rigorous SAT-style practice testing complex sentence boundaries, embedded nonessential modifiers, complex semicolon series, colon explanations vs transitive verbs, and advanced possessive mechanics.',
  questions: BLOCK_19_QUESTIONS
};

const BLOCK_20_QUESTIONS: WritingExerciseQuestion[] = [
  {
    questionNumber: 1,
    id: 'ch2-ex20-q1',
    difficulty: 'Advanced',
    skillTag: 'Medial Conjunctive Adverb in Multi-Clause Sentence',
    prompt: 'The commercial real estate developers secured zoning approval for the mixed-use high-rise; the municipal housing board, ___ insisted that twenty percent of the residential units be designated for affordable workforce housing.',
    options: [
      'nevertheless,',
      'nevertheless',
      '; nevertheless,',
      ', nevertheless'
    ],
    correctAnswer: 0,
    explanation: {
      coreReasoning: 'The semicolon already separates the two independent clauses. In the second clause, "the municipal housing board" is the subject and "insisted" is the verb. The conjunctive adverb "nevertheless" is functioning as an internal parenthetical modifier between subject and verb, requiring paired commas. Since the first comma is already in the prompt, "nevertheless," provides the word and closing comma.',
      whyCorrect: 'Choice A is correct because "nevertheless," properly completes the paired comma enclosure of the medial parenthetical adverb.',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: 'nevertheless,', whyWrong: 'Correct. Provides the closing comma to frame the parenthetical transition inside the second clause.' },
        { optionIndex: 1, optionLabel: 'B', optionText: 'nevertheless', whyWrong: 'Omits the necessary closing comma before the verb "insisted".' },
        { optionIndex: 2, optionLabel: 'C', optionText: '; nevertheless,', whyWrong: 'Inserts an ungrammatical second semicolon inside the independent clause.' },
        { optionIndex: 3, optionLabel: 'D', optionText: ', nevertheless', whyWrong: 'Duplicates the opening comma and omits the closing comma before "insisted".' }
      ]
    }
  },
  {
    questionNumber: 2,
    id: 'ch2-ex20-q2',
    difficulty: 'Advanced',
    skillTag: 'Relative Clause Modifying Remote Noun vs Nearest Noun',
    prompt: 'The maritime archaeology expedition recovered several intact amphorae from the hold of the Phoenician merchant ___ which were manufactured in the fifth century BCE and bore stamped royal taxation seals.',
    options: [
      'vessel,',
      'vessel',
      'vessel;',
      'vessel:'
    ],
    correctAnswer: 0,
    explanation: {
      coreReasoning: 'The relative clause "which were manufactured in the fifth century BCE..." modifies the remote plural noun "amphorae" (not the singular "vessel"). Because it provides nonessential descriptive information about the amphorae, it must be separated from the prepositional phrase ("from the hold of the Phoenician merchant vessel") by a comma.',
      whyCorrect: 'Choice A is correct because a comma signals that the nonessential relative clause modifies "amphorae" rather than modifying "vessel" restrictively.',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: 'vessel,', whyWrong: 'Correct. A comma properly sets off the nonessential relative clause modifying "amphorae".' },
        { optionIndex: 1, optionLabel: 'B', optionText: 'vessel', whyWrong: 'Without a comma, the relative clause appears restrictively attached to "vessel", which conflicts with the plural verb "were manufactured".' },
        { optionIndex: 2, optionLabel: 'C', optionText: 'vessel;', whyWrong: 'A semicolon cannot separate a relative clause from the noun it modifies.' },
        { optionIndex: 3, optionLabel: 'D', optionText: 'vessel:', whyWrong: 'A colon cannot introduce a relative clause modifying an antecedent in the preceding clause.' }
      ]
    }
  },
  {
    questionNumber: 3,
    id: 'ch2-ex20-q3',
    difficulty: 'Intermediate',
    skillTag: 'Direct Address / Parenthetical Identification',
    prompt: 'During the congressional antitrust hearings, the lead committee counsel looked directly at the tech executive and stated, "Mr. ___ you testified under oath that your search algorithms do not prioritize proprietary retail products."',
    options: [
      'Holloway,',
      'Holloway',
      'Holloway;',
      'Holloway—and'
    ],
    correctAnswer: 0,
    explanation: {
      coreReasoning: 'When a person is directly addressed in speech or writing ("Mr. Holloway"), the name is a vocative element (direct address) and must be set off with commas from the rest of the sentence.',
      whyCorrect: 'Choice A is correct because a noun of direct address ("Mr. Holloway") requires a comma before the following clause.',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: 'Holloway,', whyWrong: 'Correct. A comma properly isolates the direct address from the main clause.' },
        { optionIndex: 1, optionLabel: 'B', optionText: 'Holloway', whyWrong: 'Fails to punctuate the noun of direct address.' },
        { optionIndex: 2, optionLabel: 'C', optionText: 'Holloway;', whyWrong: 'A semicolon cannot separate a title/name in direct address from the clause that addresses them.' },
        { optionIndex: 3, optionLabel: 'D', optionText: 'Holloway—and', whyWrong: 'Adding "and" creates ungrammatical, nonsensical syntax in direct address.' }
      ]
    }
  },
  {
    questionNumber: 4,
    id: 'ch2-ex20-q4',
    difficulty: 'Elite',
    skillTag: 'Syntactic Skeleton: Compound Subject with Nonessential Modifiers',
    prompt: 'The lead bioinformatician on the genomic sequencing project, together with her team of computational ___ created an open-source machine learning algorithm that identifies pathogenic viral mutations within minutes.',
    options: [
      'biologists,',
      'biologists',
      'biologists;',
      'biologists:'
    ],
    correctAnswer: 0,
    explanation: {
      coreReasoning: 'The grammatical subject is "The lead bioinformatician". The phrase "together with her team of computational biologists" is a parenthetical quasi-coordinator introduced with a comma after "project". It must close with a matching comma after "biologists" before the main finite verb "created".',
      whyCorrect: 'Choice A is correct because it provides the closing comma for the parenthetical modifier beginning with "together with".',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: 'biologists,', whyWrong: 'Correct. Completes the paired comma enclosure of the interrupting prepositional phrase.' },
        { optionIndex: 1, optionLabel: 'B', optionText: 'biologists', whyWrong: 'Leaves the parenthetical phrase open on the right, creating asymmetrical punctuation before the main verb "created".' },
        { optionIndex: 2, optionLabel: 'C', optionText: 'biologists;', whyWrong: 'A semicolon cannot divide a subject modifier from its main verb.' },
        { optionIndex: 3, optionLabel: 'D', optionText: 'biologists:', whyWrong: 'A colon cannot separate a subject from its finite verb.' }
      ]
    }
  },
  {
    questionNumber: 5,
    id: 'ch2-ex20-q5',
    difficulty: 'Advanced',
    skillTag: 'Colon Introducing Parallel Independent Clause Contrast',
    prompt: 'Macroeconomic forecasters noted a striking divergence between consumer sentiment and consumer ___ while household confidence surveys reflected deepening pessimism regarding inflation, monthly retail debit expenditures reached record highs.',
    options: [
      'behavior:',
      'behavior,',
      'behavior;',
      'behavior'
    ],
    correctAnswer: 0,
    explanation: {
      coreReasoning: 'The initial clause ("Macroeconomic forecasters noted a striking divergence between consumer sentiment and consumer behavior") is a complete independent clause. The following sentence specifies and illustrates the exact divergence. A colon is the standard punctuation mark to introduce a detailed explanation or illustration of an idea announced in the first clause.',
      whyCorrect: 'Choice A is correct because a colon introduces the specific illustration that explains the "striking divergence".',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: 'behavior:', whyWrong: 'Correct. A colon properly introduces the explanatory illustration following the complete independent clause.' },
        { optionIndex: 1, optionLabel: 'B', optionText: 'behavior,', whyWrong: 'Creates an ungrammatical comma splice between two independent thoughts.' },
        { optionIndex: 2, optionLabel: 'C', optionText: 'behavior;', whyWrong: 'While a semicolon can join independent clauses, a colon is far more precise for introducing a direct illustration of an announced divergence.' },
        { optionIndex: 3, optionLabel: 'D', optionText: 'behavior', whyWrong: 'Creates a fused run-on sentence without punctuation between clauses.' }
      ]
    }
  },
  {
    questionNumber: 6,
    id: 'ch2-ex20-q6',
    difficulty: 'Elite',
    skillTag: 'Multi-Clause Structure with Embedded Relative and Conditional Clauses',
    prompt: 'If regional agricultural cooperatives invest in automated drip-irrigation infrastructure, which reduces water evaporation by sixty percent, crop yields will ___ and farm operating margins will expand significantly over the next decade.',
    options: [
      'stabilize,',
      'stabilize',
      'stabilize;',
      'stabilize:'
    ],
    correctAnswer: 1,
    explanation: {
      coreReasoning: 'The introductory conditional clause ("If regional agricultural cooperatives invest...") concludes at "sixty percent," marked by a comma. What follows is the main compound sentence: "crop yields will stabilize and farm operating margins will expand...". In this compound predicate structure or short coordinated clause pair sharing the modal auxiliary "will", no comma should separate "will stabilize" from "and farm operating margins...".',
      whyCorrect: 'Choice B is correct because no comma should interrupt the verb "stabilize" from the coordinating conjunction "and".',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: 'stabilize,', whyWrong: 'Inserts an unnecessary comma before "and" inside a closely linked coordinate predicate structure.' },
        { optionIndex: 1, optionLabel: 'B', optionText: 'stabilize', whyWrong: 'Correct. Maintains clean syntactic flow without unwarranted punctuation.' },
        { optionIndex: 2, optionLabel: 'C', optionText: 'stabilize;', whyWrong: 'A semicolon cannot precede the coordinating conjunction "and" here.' },
        { optionIndex: 3, optionLabel: 'D', optionText: 'stabilize:', whyWrong: 'A colon cannot interrupt coordinate clauses joined by "and".' }
      ]
    }
  },
  {
    questionNumber: 7,
    id: 'ch2-ex20-q7',
    difficulty: 'Advanced',
    skillTag: 'Complex Appositive Involving Multiple Titles and Institutions',
    prompt: 'Renowned structural glaciologist Dr. Elena Vance and her research ___ have spent five consecutive field seasons collecting deep ice core samples from the West Antarctic Ice Sheet.',
    options: [
      'associate, Marcus Thorne,',
      'associate Marcus Thorne',
      'associate Marcus Thorne,',
      'associate, Marcus Thorne'
    ],
    correctAnswer: 1,
    explanation: {
      coreReasoning: 'In the phrase "her research associate Marcus Thorne", "research associate" is a descriptor/title immediately preceding the specific name "Marcus Thorne". Because Dr. Vance likely has multiple research associates and the title is restrictive, no commas should surround "Marcus Thorne". Furthermore, "Dr. Elena Vance and her research associate Marcus Thorne" is the compound subject, which must not be separated from the verb "have spent" by a comma.',
      whyCorrect: 'Choice B is correct because it uses zero commas, correctly treating "Marcus Thorne" as a restrictive appositive and preserving subject-verb continuity.',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: 'associate, Marcus Thorne,', whyWrong: 'Incorrectly puts commas around a restrictive name and places an illegal single comma before the main verb "have spent".' },
        { optionIndex: 1, optionLabel: 'B', optionText: 'associate Marcus Thorne', whyWrong: 'Correct. Restrictive appositive with no commas, smoothly connecting the compound subject to the verb.' },
        { optionIndex: 2, optionLabel: 'C', optionText: 'associate Marcus Thorne,', whyWrong: 'Places an ungrammatical single comma between the compound subject and the finite verb "have spent".' },
        { optionIndex: 3, optionLabel: 'D', optionText: 'associate, Marcus Thorne', whyWrong: 'Inserts an ungrammatical single comma between the title "research associate" and the name "Marcus Thorne".' }
      ]
    }
  },
  {
    questionNumber: 8,
    id: 'ch2-ex20-q8',
    difficulty: 'Advanced',
    skillTag: 'Emphatic Dash for Summary Amplification',
    prompt: 'High-frequency telemetry data, multi-spectral satellite imagery, and localized soil moisture ___ all three datasets converged on the same conclusion regarding the rapid desertification of the inland plateau.',
    options: [
      'readings—',
      'readings,',
      'readings;',
      'readings:'
    ],
    correctAnswer: 0,
    explanation: {
      coreReasoning: 'The sentence begins with a list of three noun phrases acting as an introductory catalog, followed by the summarizing subject pronoun "all three datasets". An em dash is the standard punctuation mark used to separate an introductory list from a summarizing main clause beginning with words like "all," "these," or "each."',
      whyCorrect: 'Choice A is correct because an em dash cleanly bridges the introductory series to the summarizing subject "all three datasets".',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: 'readings—', whyWrong: 'Correct. An em dash properly marks the shift from the introductory catalog to the summarizing main clause.' },
        { optionIndex: 1, optionLabel: 'B', optionText: 'readings,', whyWrong: 'A comma creates a confusing run-on between the list elements and the summarizing clause.' },
        { optionIndex: 2, optionLabel: 'C', optionText: 'readings;', whyWrong: 'A semicolon requires an independent clause before it, but the opening list is a series of noun phrases without a finite verb.' },
        { optionIndex: 3, optionLabel: 'D', optionText: 'readings:', whyWrong: 'A colon must follow an independent clause, not precede one after an introductory list.' }
      ]
    }
  },
  {
    questionNumber: 9,
    id: 'ch2-ex20-q9',
    difficulty: 'Elite',
    skillTag: 'Deceptive Introductory Prepositional Phrase vs Gerund Subject',
    prompt: 'Developing resilient cultivars capable of thriving in saline ___ agricultural scientists at the arid land research institute to sequence the genomes of several halophyte wild grasses.',
    options: [
      'soils, prompted',
      'soils prompted',
      'soils; prompted',
      'soils, has prompted'
    ],
    correctAnswer: 1,
    explanation: {
      coreReasoning: '"Developing resilient cultivars capable of thriving in saline soils" is a gerund phrase serving as the complete grammatical subject of the sentence. The finite verb is "prompted". No comma should separate a gerund subject from its main verb.',
      whyCorrect: 'Choice B is correct because no comma should interrupt the gerund subject from its predicate verb "prompted".',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: 'soils, prompted', whyWrong: 'Ungrammatically inserts a single comma between the gerund subject and its main verb.' },
        { optionIndex: 1, optionLabel: 'B', optionText: 'soils prompted', whyWrong: 'Correct. Keeps the gerund subject and its predicate verb intact without punctuation.' },
        { optionIndex: 2, optionLabel: 'C', optionText: 'soils; prompted', whyWrong: 'A semicolon cannot split a gerund subject from its verb.' },
        { optionIndex: 3, optionLabel: 'D', optionText: 'soils, has prompted', whyWrong: 'Adds an ungrammatical comma between subject and verb.' }
      ]
    }
  },
  {
    questionNumber: 10,
    id: 'ch2-ex20-q10',
    difficulty: 'Advanced',
    skillTag: 'Contrasting Parenthetical Phrase Enclosed by Commas',
    prompt: 'The central bank governors decided to raise the benchmark lending rate by twenty-five basis points ___ not to curb consumer spending, but to signal a resolute commitment to inflation containment ___ during their quarterly monetary policy summit.',
    options: [
      ', not to curb consumer spending, but to signal a resolute commitment to inflation containment,',
      '—not to curb consumer spending, but to signal a resolute commitment to inflation containment—',
      '; not to curb consumer spending, but to signal a resolute commitment to inflation containment;',
      'Both A and B are grammatically appropriate.'
    ],
    correctAnswer: 3,
    explanation: {
      coreReasoning: 'The phrase "not to curb consumer spending, but to signal a resolute commitment to inflation containment" is an interrupting nonessential contrasting modifier situated between the verb object and the adverbial prepositional phrase. Both symmetrical paired commas and symmetrical paired em dashes are grammatically valid methods to isolate this parenthetical contrast.',
      whyCorrect: 'Choice D is correct because both paired commas (Choice A) and paired em dashes (Choice B) are syntactically sound.',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: ', not to curb consumer spending, but to signal a resolute commitment to inflation containment,', whyWrong: 'Grammatically valid, but Choice B is equally valid, making D the comprehensive answer.' },
        { optionIndex: 1, optionLabel: 'B', optionText: '—not to curb consumer spending, but to signal a resolute commitment to inflation containment—', whyWrong: 'Grammatically valid, but Choice A is equally valid, making D the comprehensive answer.' },
        { optionIndex: 2, optionLabel: 'C', optionText: '; not to curb consumer spending, but to signal a resolute commitment to inflation containment;', whyWrong: 'Semicolons cannot be used in pairs to frame an internal parenthetical modifier.' },
        { optionIndex: 3, optionLabel: 'D', optionText: 'Both A and B are grammatically appropriate.', whyWrong: 'Correct. Both enclosure systems operate legitimately in standard English syntax.' }
      ]
    }
  },
  {
    questionNumber: 11,
    id: 'ch2-ex20-q11',
    difficulty: 'Elite',
    skillTag: 'Semicolon Splicing Across Restrictive Modifier Boundaries',
    prompt: 'Urban sociological surveys indicate that millennials in metropolitan areas prefer transit-accessible ___ those residing in low-density suburban peripheries prioritize private vehicular ownership and dedicated residential parking.',
    options: [
      'neighborhoods; while',
      'neighborhoods, whereas',
      'neighborhoods; whereas',
      'neighborhoods: while'
    ],
    correctAnswer: 1,
    explanation: {
      coreReasoning: '"whereas" is a subordinating conjunction introducing a dependent contrasting clause. Subordinating conjunctions are preceded by a comma when joining contrasting thoughts, whereas a semicolon before "whereas" is ungrammatical because a semicolon cannot precede a dependent adverbial clause.',
      whyCorrect: 'Choice B is correct because a comma + "whereas" properly links the dependent contrasting clause to the main independent clause.',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: 'neighborhoods; while', whyWrong: 'A semicolon cannot be followed by a subordinating conjunction like "while" when introducing a dependent clause.' },
        { optionIndex: 1, optionLabel: 'B', optionText: 'neighborhoods, whereas', whyWrong: 'Correct. Comma + subordinating conjunction "whereas" cleanly establishes contrast.' },
        { optionIndex: 2, optionLabel: 'C', optionText: 'neighborhoods; whereas', whyWrong: 'A semicolon cannot precede the subordinating conjunction "whereas".' },
        { optionIndex: 3, optionLabel: 'D', optionText: 'neighborhoods: while', whyWrong: 'A colon cannot precede a subordinating conjunction introducing a contrast.' }
      ]
    }
  },
  {
    questionNumber: 12,
    id: 'ch2-ex20-q12',
    difficulty: 'Advanced',
    skillTag: 'Coordinate Adjectives vs Cumulative Adjectives with Measurement',
    prompt: 'The deep-sea drilling vessel deployed a durable ___ steel drill bit designed to penetrate basaltic crust beneath four kilometers of oceanic water.',
    options: [
      'hollow-core, diamond-tipped',
      'hollow-core diamond-tipped',
      'hollow-core; diamond-tipped',
      'hollow-core—diamond-tipped'
    ],
    correctAnswer: 0,
    explanation: {
      coreReasoning: '"Hollow-core" and "diamond-tipped" are coordinate adjectives modifying "steel drill bit". You can insert "and" between them ("hollow-core and diamond-tipped steel drill bit") and reverse their order ("diamond-tipped, hollow-core steel drill bit") without changing the meaning. Coordinate adjectives require a separating comma.',
      whyCorrect: 'Choice A is correct because coordinate adjectives modifying a common noun must be separated by a comma.',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: 'hollow-core, diamond-tipped', whyWrong: 'Correct. A comma separates coordinate adjectives.' },
        { optionIndex: 1, optionLabel: 'B', optionText: 'hollow-core diamond-tipped', whyWrong: 'Fails to separate coordinate adjectives with a comma.' },
        { optionIndex: 2, optionLabel: 'C', optionText: 'hollow-core; diamond-tipped', whyWrong: 'A semicolon cannot separate coordinate adjectives before a noun.' },
        { optionIndex: 3, optionLabel: 'D', optionText: 'hollow-core—diamond-tipped', whyWrong: 'An em dash inappropriately breaks the modifier sequence.' }
      ]
    }
  },
  {
    questionNumber: 13,
    id: 'ch2-ex20-q13',
    difficulty: 'Elite',
    skillTag: 'Embedded Dependent Clause in Compound Sentence',
    prompt: 'The telecommunications network experienced localized packet loss during the solar storm, but when backup fiber-optic cables were ___ data transmission throughput normalized within milliseconds.',
    options: [
      'rerouted,',
      'rerouted;',
      'rerouted',
      'rerouted—'
    ],
    correctAnswer: 0,
    explanation: {
      coreReasoning: 'Following the coordinating conjunction "but", an introductory dependent adverbial clause is inserted: "when backup fiber-optic cables were rerouted". This introductory dependent clause requires a comma after "rerouted" before the second independent clause ("data transmission throughput normalized...").',
      whyCorrect: 'Choice A is correct because a comma separates the embedded introductory dependent clause from the independent clause that completes the compound sentence.',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: 'rerouted,', whyWrong: 'Correct. A comma properly marks the end of the introductory "when" clause.' },
        { optionIndex: 1, optionLabel: 'B', optionText: 'rerouted;', whyWrong: 'A semicolon cannot separate an introductory dependent clause from its independent clause.' },
        { optionIndex: 2, optionLabel: 'C', optionText: 'rerouted', whyWrong: 'Omitting the comma creates an unpunctuated boundary between the dependent "when" clause and the main clause.' },
        { optionIndex: 3, optionLabel: 'D', optionText: 'rerouted—', whyWrong: 'An em dash is nonstandard for marking the boundary of a standard introductory adverbial clause.' }
      ]
    }
  },
  {
    questionNumber: 14,
    id: 'ch2-ex20-q14',
    difficulty: 'Advanced',
    skillTag: 'Pronoun Case and Punctuation in Absolute Construction',
    prompt: 'The sovereign debt restructuring committee concluded its marathon weekend negotiations ___ each delegation having agreed to a fifteen percent haircut on principal bond repayments.',
    options: [
      ', with',
      '; with',
      ',',
      ';'
    ],
    correctAnswer: 2,
    explanation: {
      coreReasoning: '"each delegation having agreed to a fifteen percent haircut on principal bond repayments" is an absolute phrase (noun + participle phrase modifier) modifying the entire preceding independent clause. An absolute phrase is attached to an independent clause with a comma.',
      whyCorrect: 'Choice C is correct because a comma properly attaches the absolute phrase to the main clause.',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: ', with', whyWrong: 'While "with" can introduce prepositional phrases, adding "with" before "each delegation having agreed" is wordy compared to a clean absolute phrase.' },
        { optionIndex: 1, optionLabel: 'B', optionText: '; with', whyWrong: 'A semicolon cannot be followed by a dependent phrase beginning with "with".' },
        { optionIndex: 2, optionLabel: 'C', optionText: ',', whyWrong: 'Correct. A comma cleanly connects the absolute phrase to the independent clause.' },
        { optionIndex: 3, optionLabel: 'D', optionText: ';', whyWrong: 'A semicolon must separate two independent clauses, but an absolute phrase is non-finite and cannot stand alone.' }
      ]
    }
  },
  {
    questionNumber: 15,
    id: 'ch2-ex20-q15',
    difficulty: 'Elite',
    skillTag: 'Punctuation with Parenthetical As Well As Construction',
    prompt: 'The chief medical officer, as well as the senior epidemiology ___ that strict quarantine protocols be enforced immediately across all international transit hubs.',
    options: [
      'investigators, recommended',
      'investigators recommended',
      'investigators, recommending',
      'investigators; recommended'
    ],
    correctAnswer: 0,
    explanation: {
      coreReasoning: 'The phrase "as well as the senior epidemiology investigators" is a quasi-parenthetical phrase introduced by a comma after "officer". It must close with a matching comma after "investigators" before the main verb "recommended". Furthermore, "recommended" is the required finite verb for the singular subject "chief medical officer".',
      whyCorrect: 'Choice A is correct because it supplies the closing comma for the parenthetical phrase and provides the finite verb "recommended".',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: 'investigators, recommended', whyWrong: 'Correct. Symmetrical comma closes the parenthetical phrase and maintains finite verb structure.' },
        { optionIndex: 1, optionLabel: 'B', optionText: 'investigators recommended', whyWrong: 'Omits the closing comma, leaving the parenthetical phrase open on the right.' },
        { optionIndex: 2, optionLabel: 'C', optionText: 'investigators, recommending', whyWrong: 'Replaces the finite verb with a participle ("recommending"), creating a sentence fragment.' },
        { optionIndex: 3, optionLabel: 'D', optionText: 'investigators; recommended', whyWrong: 'A semicolon cannot separate a subject from its predicate verb.' }
      ]
    }
  },
  {
    questionNumber: 16,
    id: 'ch2-ex20-q16',
    difficulty: 'Advanced',
    skillTag: 'Semicolon Linking Independent Clauses with Internal Semicolon Traps',
    prompt: 'High-altitude mountaineering expeditions generate substantial economic revenue for remote Himalayan villages ___ the unregulated accumulation of solid waste and discarded oxygen canisters threatens fragile alpine watersheds.',
    options: [
      '; nevertheless,',
      ', nevertheless,',
      '; nevertheless',
      ': nevertheless,'
    ],
    correctAnswer: 0,
    explanation: {
      coreReasoning: 'Two complete independent clauses are connected by the conjunctive adverb "nevertheless". The required formula is: Independent Clause ; conjunctive adverb, Independent Clause.',
      whyCorrect: 'Choice A is correct because a semicolon before "nevertheless" and a comma after it properly connects the two independent clauses.',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: '; nevertheless,', whyWrong: 'Correct. Semicolon + conjunctive adverb + comma properly coordinates the independent clauses.' },
        { optionIndex: 1, optionLabel: 'B', optionText: ', nevertheless,', whyWrong: 'Creates an ungrammatical comma splice by placing only a comma before the conjunctive adverb.' },
        { optionIndex: 2, optionLabel: 'C', optionText: '; nevertheless', whyWrong: 'Omits the required trailing comma after the conjunctive adverb.' },
        { optionIndex: 3, optionLabel: 'D', optionText: ': nevertheless,', whyWrong: 'A colon cannot precede a coordinating conjunctive adverb like "nevertheless".' }
      ]
    }
  },
  {
    questionNumber: 17,
    id: 'ch2-ex20-q17',
    difficulty: 'Intermediate',
    skillTag: 'Contraction vs Possessive with Plural Noun Modifiers',
    prompt: 'The robotics venture disclosed that ___ developing an autonomous electric tractor capable of tilling, seeding, and weeding agricultural fields without human intervention.',
    options: [
      'its',
      'it\'s',
      'they\'re',
      'there'
    ],
    correctAnswer: 1,
    explanation: {
      coreReasoning: '"The robotics venture" is a singular corporate entity. The dependent clause after "that" requires a subject pronoun and auxiliary verb for the progressive participle "developing". "it\'s" is the contraction for "it is".',
      whyCorrect: 'Choice B is correct because "it\'s" provides the singular subject "it" and verb "is" agreeing with "venture".',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: 'its', whyWrong: 'Possessive pronoun that cannot serve as the subject + verb before "developing".' },
        { optionIndex: 1, optionLabel: 'B', optionText: 'it\'s', whyWrong: 'Correct. Contraction for "it is" agreeing with the singular collective noun "venture".' },
        { optionIndex: 2, optionLabel: 'C', optionText: 'they\'re', whyWrong: 'Plural pronoun contraction that disagrees with the singular subject "The robotics venture".' },
        { optionIndex: 3, optionLabel: 'D', optionText: 'there', whyWrong: 'Adverb of place or dummy pronoun that creates ungrammatical syntax here.' }
      ]
    }
  },
  {
    questionNumber: 18,
    id: 'ch2-ex20-q18',
    difficulty: 'Elite',
    skillTag: 'Embedded Appositive within Prepositional Modifier',
    prompt: 'During the restoration of the 1928 theater organ, master technician Paul ___ spent three months hand-crafting eighty replacement wooden pipes from aged spruce timber.',
    options: [
      'Kaufman, an expert in pneumatic valve systems,',
      'Kaufman an expert in pneumatic valve systems',
      'Kaufman, an expert in pneumatic valve systems',
      'Kaufman; an expert in pneumatic valve systems;'
    ],
    correctAnswer: 0,
    explanation: {
      coreReasoning: '"master technician Paul Kaufman" is the complete grammatical subject. The phrase "an expert in pneumatic valve systems" is a nonessential appositive providing supplementary background. It must be enclosed on both sides by matching commas before the main finite verb "spent".',
      whyCorrect: 'Choice A is correct because symmetrical paired commas properly frame the nonessential appositive.',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: 'Kaufman, an expert in pneumatic valve systems,', whyWrong: 'Correct. Symmetrical paired commas cleanly isolate the appositive phrase before the main verb.' },
        { optionIndex: 1, optionLabel: 'B', optionText: 'Kaufman an expert in pneumatic valve systems', whyWrong: 'Leaves the nonessential appositive completely unpunctuated.' },
        { optionIndex: 2, optionLabel: 'C', optionText: 'Kaufman, an expert in pneumatic valve systems', whyWrong: 'Omits the second comma, leaving the appositive open before the main verb "spent".' },
        { optionIndex: 3, optionLabel: 'D', optionText: 'Kaufman; an expert in pneumatic valve systems;', whyWrong: 'Semicolons cannot be used to enclose an internal appositive phrase.' }
      ]
    }
  },
  {
    questionNumber: 19,
    id: 'ch2-ex20-q19',
    difficulty: 'Advanced',
    skillTag: 'Colon Preceding Formal List with Prepositional Interruptions',
    prompt: 'The commercial aviation safety review board recommended four immediate mechanical ___ inspecting engine turbine blades for thermal stress cracks, replacing pneumatic de-icing boots, recalibrating angle-of-attack sensors, and updating flight management software.',
    options: [
      'modifications:',
      'modifications,',
      'modifications;',
      'modifications'
    ],
    correctAnswer: 0,
    explanation: {
      coreReasoning: '"The commercial aviation safety review board recommended four immediate mechanical modifications" is a complete independent clause introducing an itemized series of four gerund phrases. A colon is the standard punctuation mark to introduce a formal list after an independent clause.',
      whyCorrect: 'Choice A is correct because a colon introduces the itemized series following a complete thought.',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: 'modifications:', whyWrong: 'Correct. A colon introduces a formal list after a complete independent clause.' },
        { optionIndex: 1, optionLabel: 'B', optionText: 'modifications,', whyWrong: 'A comma provides too weak a boundary before a major four-item list.' },
        { optionIndex: 2, optionLabel: 'C', optionText: 'modifications;', whyWrong: 'A semicolon cannot introduce a series of gerund phrase list items.' },
        { optionIndex: 3, optionLabel: 'D', optionText: 'modifications', whyWrong: 'Omits all boundary punctuation, creating an unpunctuated fused structure.' }
      ]
    }
  },
  {
    questionNumber: 20,
    id: 'ch2-ex20-q20',
    difficulty: 'Elite',
    skillTag: 'Multi-Modifier Skeleton: Participle vs Finite Verb Boundary',
    prompt: 'Having analyzed over two million credit card transactions across forty retail sectors, the data science ___ that anomalous spending spikes reliably predict fraudulent account takeovers up to twelve hours before cardholders report missing cards.',
    options: [
      'team demonstrated',
      'team, demonstrating',
      'team demonstrating',
      'team; demonstrated'
    ],
    correctAnswer: 0,
    explanation: {
      coreReasoning: 'The sentence opens with an introductory participial modifier ("Having analyzed over two million credit card transactions..."). Following the comma after "sectors", the sentence requires a main subject ("the data science team") and a finite verb ("demonstrated") to complete the independent clause.',
      whyCorrect: 'Choice A is correct because "team demonstrated" provides the required subject and finite verb without ungrammatical punctuation.',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: 'team demonstrated', whyWrong: 'Correct. Supplies the finite main verb "demonstrated" for the main clause subject.' },
        { optionIndex: 1, optionLabel: 'B', optionText: 'team, demonstrating', whyWrong: 'Replaces the finite verb with a participle ("demonstrating") and adds an ungrammatical comma, resulting in a sentence fragment.' },
        { optionIndex: 2, optionLabel: 'C', optionText: 'team demonstrating', whyWrong: 'Leaves the sentence without a finite verb, creating a fragment.' },
        { optionIndex: 3, optionLabel: 'D', optionText: 'team; demonstrated', whyWrong: 'A semicolon cannot divide a subject from its predicate verb.' }
      ]
    }
  },
  {
    questionNumber: 21,
    id: 'ch2-ex20-q21',
    difficulty: 'Advanced',
    skillTag: 'Essential Appositive with Multiple Noun Attributes',
    prompt: 'The 1927 science fiction film ___ pioneered groundbreaking visual effects techniques that influenced cinema for decades.',
    options: [
      'Metropolis',
      ', Metropolis,',
      '—Metropolis—',
      '; Metropolis;'
    ],
    correctAnswer: 0,
    explanation: {
      coreReasoning: 'Because many science fiction films were produced in or around 1927, the specific title "Metropolis" is essential (restrictive) to identify which film is being discussed. Essential titles must not be enclosed in commas, dashes, or semicolons.',
      whyCorrect: 'Choice A is correct because an essential appositive title takes no punctuation.',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: 'Metropolis', whyWrong: 'Correct. Restrictive title without commas accurately identifies the specific film.' },
        { optionIndex: 1, optionLabel: 'B', optionText: ', Metropolis,', whyWrong: 'Commas treat the title as nonessential, which is incorrect when the preceding noun phrase is a general category ("The 1927 science fiction film").' },
        { optionIndex: 2, optionLabel: 'C', optionText: '—Metropolis—', whyWrong: 'Dashes incorrectly frame the title as parenthetical.' },
        { optionIndex: 3, optionLabel: 'D', optionText: '; Metropolis;', whyWrong: 'Semicolons cannot enclose an internal noun title.' }
      ]
    }
  },
  {
    questionNumber: 22,
    id: 'ch2-ex20-q22',
    difficulty: 'Elite',
    skillTag: 'Correlative Conjunction with Embedded Nonessential Relative Clause',
    prompt: 'The urban transit authority decided either to modernize the existing elevated rail ___ which would require three years of weekend service disruptions, or to construct a subterranean express tunnel beneath the river.',
    options: [
      'corridor,',
      'corridor',
      'corridor;',
      'corridor:'
    ],
    correctAnswer: 0,
    explanation: {
      coreReasoning: 'The sentence uses the correlative pair "either [first option]... or [second option]". The first option ("to modernize the existing elevated rail corridor") is followed by a nonessential relative clause ("which would require three years of weekend service disruptions"). This nonessential clause must be opened with a comma after "corridor" (and is closed with the comma before "or").',
      whyCorrect: 'Choice A is correct because a comma is required to open the nonessential relative clause modifying "corridor".',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: 'corridor,', whyWrong: 'Correct. A comma properly opens the nonessential relative clause before "which".' },
        { optionIndex: 1, optionLabel: 'B', optionText: 'corridor', whyWrong: 'Omits the opening comma before a nonrestrictive "which" clause, creating asymmetrical punctuation with the closing comma.' },
        { optionIndex: 2, optionLabel: 'C', optionText: 'corridor;', whyWrong: 'A semicolon cannot separate a noun from its modifying relative clause.' },
        { optionIndex: 3, optionLabel: 'D', optionText: 'corridor:', whyWrong: 'A colon cannot precede a relative clause.' }
      ]
    }
  },
  {
    questionNumber: 23,
    id: 'ch2-ex20-q23',
    difficulty: 'Advanced',
    skillTag: 'Contrasting Coordinate Clause with Embedded Semicolon Trap',
    prompt: 'The microfinance institution expanded collateral-free agricultural lending across sub-Saharan Africa ___ it strictly capped annual percentage rates to protect smallholder farmers from predatory debt cycles.',
    options: [
      ', yet',
      '; yet,',
      'yet',
      ': yet'
    ],
    correctAnswer: 0,
    explanation: {
      coreReasoning: 'Two complete independent clauses ("The microfinance institution expanded..." and "it strictly capped...") are coordinated by the conjunction "yet". A comma + coordinating conjunction (FANBOYS) is the standard method to join two independent clauses.',
      whyCorrect: 'Choice A is correct because comma + "yet" properly coordinates two complete independent clauses.',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: ', yet', whyWrong: 'Correct. Comma + FANBOYS coordinating conjunction cleanly connects the independent clauses.' },
        { optionIndex: 1, optionLabel: 'B', optionText: '; yet,', whyWrong: 'Using a semicolon with a trailing comma on the coordinating conjunction "yet" is ungrammatical.' },
        { optionIndex: 2, optionLabel: 'C', optionText: 'yet', whyWrong: 'Omits the required comma before the coordinating conjunction joining two independent clauses.' },
        { optionIndex: 3, optionLabel: 'D', optionText: ': yet', whyWrong: 'A colon cannot precede a coordinating conjunction.' }
      ]
    }
  },
  {
    questionNumber: 24,
    id: 'ch2-ex20-q24',
    difficulty: 'Elite',
    skillTag: 'Dangling vs Attached Participle with Passive Inversion',
    prompt: 'Constructed from lightweight carbon-fiber composite materials, ___ during high-speed wind tunnel testing by aeronautical engineers.',
    options: [
      'the prototype wing spar exhibited exceptional aerodynamic stability',
      'exceptional aerodynamic stability was exhibited by the prototype wing spar',
      'aeronautical engineers observed exceptional aerodynamic stability in the prototype wing spar',
      'the testing revealed exceptional aerodynamic stability in the prototype wing spar'
    ],
    correctAnswer: 0,
    explanation: {
      coreReasoning: 'The introductory modifier "Constructed from lightweight carbon-fiber composite materials" describes the physical object that was manufactured. Therefore, the noun immediately following the comma must be "the prototype wing spar" (the entity constructed from carbon-fiber).',
      whyCorrect: 'Choice A is correct because "the prototype wing spar" correctly and logically aligns with the introductory participial modifier.',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: 'the prototype wing spar exhibited exceptional aerodynamic stability', whyWrong: 'Correct. Places the modified noun ("the prototype wing spar") directly after the introductory modifier.' },
        { optionIndex: 1, optionLabel: 'B', optionText: 'exceptional aerodynamic stability was exhibited by the prototype wing spar', whyWrong: 'Dangles the modifier: "aerodynamic stability" was not constructed from carbon-fiber materials.' },
        { optionIndex: 2, optionLabel: 'C', optionText: 'aeronautical engineers observed exceptional aerodynamic stability in the prototype wing spar', whyWrong: 'Dangles the modifier: the "aeronautical engineers" were not constructed from carbon-fiber materials.' },
        { optionIndex: 3, optionLabel: 'D', optionText: 'the testing revealed exceptional aerodynamic stability in the prototype wing spar', whyWrong: 'Dangles the modifier: "the testing" was not constructed from carbon-fiber materials.' }
      ]
    }
  },
  {
    questionNumber: 25,
    id: 'ch2-ex20-q25',
    difficulty: 'Advanced',
    skillTag: 'Complex Semicolon Series with Geopolitical Entities',
    prompt: 'The multilateral trade delegation included chief commercial envoys from Tokyo, Japan ___ Seoul, South Korea ___ and Singapore, each tasked with negotiating regional tariff reductions on semiconductor components.',
    options: [
      ';',
      ',',
      ':',
      '—'
    ],
    correctAnswer: 0,
    explanation: {
      coreReasoning: 'The list elements are city-country pairs ("Tokyo, Japan", "Seoul, South Korea", and "Singapore") that contain internal commas. When list items contain internal commas, semicolons must separate the major items in the series to prevent ambiguity.',
      whyCorrect: 'Choice A is correct because semicolons are required to separate complex list items that already contain internal commas.',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: ';', whyWrong: 'Correct. Semicolons cleanly partition city-country items with internal commas.' },
        { optionIndex: 1, optionLabel: 'B', optionText: ',', whyWrong: 'Using a comma creates confusion between city-country commas and item-separator commas.' },
        { optionIndex: 2, optionLabel: 'C', optionText: ':', whyWrong: 'A colon cannot separate coordinate items within a list.' },
        { optionIndex: 3, optionLabel: 'D', optionText: '—', whyWrong: 'An em dash cannot serve as a repeated series separator in a standard list.' }
      ]
    }
  },
  {
    questionNumber: 26,
    id: 'ch2-ex20-q26',
    difficulty: 'Elite',
    skillTag: 'Subject-Verb Interruption with Restrictive Prepositional Multipliers',
    prompt: 'The comprehensive longitudinal assessment of cognitive decline markers among elderly participants residing in assisted-living facilities across northern ___ a statistically significant correlation between daily aerobic exercise and sustained working memory capacity.',
    options: [
      'Illinois demonstrated',
      'Illinois, demonstrated',
      'Illinois; demonstrated',
      'Illinois—demonstrated'
    ],
    correctAnswer: 0,
    explanation: {
      coreReasoning: 'The complete subject is "The comprehensive longitudinal assessment of cognitive decline markers among elderly participants residing in assisted-living facilities across northern Illinois". The finite verb is "demonstrated". Despite the long chain of prepositional phrases and participial modifiers, no comma or other punctuation should separate the subject from its verb.',
      whyCorrect: 'Choice A is correct because it maintains unbroken subject-verb continuity without ungrammatical punctuation.',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: 'Illinois demonstrated', whyWrong: 'Correct. Connects the long subject directly to its finite verb "demonstrated".' },
        { optionIndex: 1, optionLabel: 'B', optionText: 'Illinois, demonstrated', whyWrong: 'Ungrammatically inserts a single comma between the subject and its predicate verb.' },
        { optionIndex: 2, optionLabel: 'C', optionText: 'Illinois; demonstrated', whyWrong: 'A semicolon cannot separate a subject from its verb.' },
        { optionIndex: 3, optionLabel: 'D', optionText: 'Illinois—demonstrated', whyWrong: 'An unpaired dash incorrectly disrupts the subject-verb core.' }
      ]
    }
  },
  {
    questionNumber: 27,
    id: 'ch2-ex20-q27',
    difficulty: 'Advanced',
    skillTag: 'Transitional Adverb Expressing Concession at Boundary',
    prompt: 'The prototype supersonic airliner successfully completed its low-altitude subsonic flight trials; ___ aeronautical regulators refused to grant commercial passenger certification until high-altitude sonic boom dampening met strict municipal noise limits.',
    options: [
      'nevertheless,',
      'furthermore,',
      'in other words,',
      'for instance,'
    ],
    correctAnswer: 0,
    explanation: {
      coreReasoning: 'The first clause describes a successful flight trial, while the second clause describes a regulatory refusal. This represents a contrast or concession. "nevertheless," is the conjunctive adverb that communicates concession/contrast.',
      whyCorrect: 'Choice A is correct because "nevertheless," logically expresses the concessive relationship between the successful trial and the regulatory refusal.',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: 'nevertheless,', whyWrong: 'Correct. Accurately conveys contrast/concession.' },
        { optionIndex: 1, optionLabel: 'B', optionText: 'furthermore,', whyWrong: 'Expresses addition, not contrast.' },
        { optionIndex: 2, optionLabel: 'C', optionText: 'in other words,', whyWrong: 'Expresses restatement or clarification, not contrast.' },
        { optionIndex: 3, optionLabel: 'D', optionText: 'for instance,', whyWrong: 'Expresses exemplification, not contrast.' }
      ]
    }
  },
  {
    questionNumber: 28,
    id: 'ch2-ex20-q28',
    difficulty: 'Elite',
    skillTag: 'Colon Introducing Complete Thought vs Subordinate Clause',
    prompt: 'The renewable energy consortium faced a major logistical ___ because regional high-voltage transmission lines lacked surplus capacity, electricity generated by offshore wind turbines could not be delivered to inland metropolitan centers.',
    options: [
      'challenge:',
      'challenge,',
      'challenge;',
      'challenge'
    ],
    correctAnswer: 0,
    explanation: {
      coreReasoning: 'The first clause ("The renewable energy consortium faced a major logistical challenge") is an independent clause announcing a problem. What follows is a complete independent sentence containing an introductory "because" clause: "because regional high-voltage transmission lines lacked surplus capacity, electricity generated by offshore wind turbines could not be delivered...". A colon is the appropriate mark to introduce an explanatory clause or multi-clause sentence that specifies the announced challenge.',
      whyCorrect: 'Choice A is correct because a colon introduces the complete explanatory sentence that details the specific logistical challenge.',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: 'challenge:', whyWrong: 'Correct. A colon introduces the explanatory sentence specifying the logistical challenge.' },
        { optionIndex: 1, optionLabel: 'B', optionText: 'challenge,', whyWrong: 'Creates an ungrammatical comma splice.' },
        { optionIndex: 2, optionLabel: 'C', optionText: 'challenge;', whyWrong: 'While semicolons can connect independent clauses, a colon is far superior for introducing an explicit specification of "a major logistical challenge".' },
        { optionIndex: 3, optionLabel: 'D', optionText: 'challenge', whyWrong: 'Creates a fused run-on sentence.' }
      ]
    }
  },
  {
    questionNumber: 29,
    id: 'ch2-ex20-q29',
    difficulty: 'Advanced',
    skillTag: 'Paired Em Dashes Framing Clause with Internal Commas',
    prompt: 'The industrial chemical manufacturer implemented a comprehensive closed-loop recycling ___ which captures, purifies, and reuses ninety-five percent of volatile organic solvents ___ to comply with stringent new atmospheric emission standards.',
    options: [
      'system—which captures, purifies, and reuses ninety-five percent of volatile organic solvents—',
      'system, which captures, purifies, and reuses ninety-five percent of volatile organic solvents,',
      'system; which captures, purifies, and reuses ninety-five percent of volatile organic solvents;',
      'Both A and B are grammatically appropriate.'
    ],
    correctAnswer: 3,
    explanation: {
      coreReasoning: 'The nonessential relative clause ("which captures, purifies, and reuses ninety-five percent of volatile organic solvents") interrupts the main clause between the direct object ("system") and the infinitive purpose phrase ("to comply..."). Both paired em dashes and paired commas are grammatically valid methods to frame an internal nonessential relative clause.',
      whyCorrect: 'Choice D is correct because both paired em dashes (Choice A) and paired commas (Choice B) are syntactically sound.',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: 'system—which captures, purifies, and reuses ninety-five percent of volatile organic solvents—', whyWrong: 'While paired em dashes are valid, Option D is the comprehensive choice since paired commas are also valid.' },
        { optionIndex: 1, optionLabel: 'B', optionText: 'system, which captures, purifies, and reuses ninety-five percent of volatile organic solvents,', whyWrong: 'While paired commas are valid, Option D is the comprehensive choice since paired em dashes are also valid.' },
        { optionIndex: 2, optionLabel: 'C', optionText: 'system; which captures, purifies, and reuses ninety-five percent of volatile organic solvents;', whyWrong: 'Semicolons cannot be used in pairs to frame an internal relative clause.' },
        { optionIndex: 3, optionLabel: 'D', optionText: 'Both A and B are grammatically appropriate.', whyWrong: 'Correct. Both paired commas and paired em dashes legitimately isolate nonessential relative clauses.' }
      ]
    }
  },
  {
    questionNumber: 30,
    id: 'ch2-ex20-q30',
    difficulty: 'Elite',
    skillTag: 'Complex Sentence Structure: Coordinate Conjunction vs Subordination Trap',
    prompt: 'While the initial clinical trial demonstrated the synthetic antibody’s efficacy in neutralizing target viral ___ secondary pharmacokinetic analyses revealed rapid renal clearance rates that necessitated twice-daily intravenous administration.',
    options: [
      'proteins,',
      'proteins;',
      'proteins:',
      'proteins, but'
    ],
    correctAnswer: 0,
    explanation: {
      coreReasoning: 'The sentence opens with a dependent adverbial clause introduced by the subordinating conjunction "While" ("While the initial clinical trial demonstrated..."). A comma is required after "proteins" to separate the introductory dependent clause from the main independent clause ("secondary pharmacokinetic analyses revealed..."). Adding "but" would create a sentence with two dependent or coordinated clauses lacking a main independent subject-verb core.',
      whyCorrect: 'Choice A is correct because a comma properly separates the introductory "While" clause from the main independent clause.',
      distractorAnalysis: [
        { optionIndex: 0, optionLabel: 'A', optionText: 'proteins,', whyWrong: 'Correct. A comma marks the boundary between the introductory dependent clause and the independent clause.' },
        { optionIndex: 1, optionLabel: 'B', optionText: 'proteins;', whyWrong: 'A semicolon cannot separate an introductory dependent clause from an independent clause.' },
        { optionIndex: 2, optionLabel: 'C', optionText: 'proteins:', whyWrong: 'A colon requires a complete independent clause before it.' },
        { optionIndex: 3, optionLabel: 'D', optionText: 'proteins, but', whyWrong: 'Adding "but" creates a double-conjunction error ("While... but"), leaving the sentence without a standalone main clause.' }
      ]
    }
  }
];

export const EXERCISE_BLOCK_20: WritingExerciseBlock = {
  blockNumber: 20,
  title: 'Exercise Set 20 — Advanced SAT-Style Integrated Punctuation, Clause Boundaries, and Syntactic Traps',
  description: 'Challenging practice targeting medial transitions, remote relative clause modification, gerund subjects vs introductory phrases, complex appositives with internal commas, absolute constructions, and syntactic skeleton analysis.',
  questions: BLOCK_20_QUESTIONS
};
