import { WritingExerciseBlock } from './satWritingTypes';

export const EXERCISE_BLOCK_3: WritingExerciseBlock = {
  blockNumber: 3,
  title: 'Exercise Set 3 — Advanced Boundaries & Clause Mechanics (Qs 31–42)',
  description: 'Contrasting independent clauses, compound predicates, introductory prepositional phrases, appositives, nonessential relative clauses, and conjunctive adverbs.',
  questions: [
    {
      questionNumber: 31,
      id: 'ex3-q31',
      difficulty: 'Intermediate',
      skillTag: 'Independent Clause Contrast',
      prompt: 'Textile conservators anticipated that the organic indigo dye would resist photo-bleaching under museum display lighting ___ prolonged exposure to ambient ultraviolet wavelengths caused measurable color degradation.',
      options: [', however', '; however,', ', but', ': however,'],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'Both clauses are independent: "Textile conservators anticipated..." and "prolonged exposure to ambient ultraviolet wavelengths caused...". The logical relationship between the expectation and the outcome is direct contrast. A comma followed by the coordinating conjunction "but" correctly links the two independent clauses.',
        whyCorrect: 'Comma + "but" correctly joins two contrasting independent clauses.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: ', however', whyWrong: 'Using ", however" between two independent clauses produces a comma splice.' },
          { optionIndex: 1, optionLabel: 'B', optionText: '; however,', whyWrong: 'The blank is immediately followed by "prolonged exposure", so placing "however," inside the blank makes the sentence ungrammatical.' },
          { optionIndex: 2, optionLabel: 'C', optionText: ', but', whyWrong: 'Correct answer.' },
          { optionIndex: 3, optionLabel: 'D', optionText: ': however,', whyWrong: 'Colon plus "however," is ungrammatical.' }
        ]
      }
    },
    {
      questionNumber: 32,
      id: 'ex3-q32',
      difficulty: 'Intermediate',
      skillTag: 'Coordinating Conjunction Selection',
      prompt: 'Trade economists predicted that multilateral maritime tariff reductions would stabilize regional wheat prices ___ subsequent commodity shipping manifests documented record price volatility.',
      options: [', yet', '; but', ', however', 'because'],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Both clauses are independent, and their relationship is contrast between an economic forecast and empirical market volatility. Comma + "yet" (one of the FANBOYS coordinating conjunctions) connects the two clauses accurately.',
        whyCorrect: 'Comma + "yet" coordinates two independent clauses expressing contrast.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: ', yet', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: '; but', whyWrong: 'A semicolon followed immediately by a coordinating conjunction is redundant and nonstandard.' },
          { optionIndex: 2, optionLabel: 'C', optionText: ', however', whyWrong: 'Produces a comma splice.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'because', whyWrong: 'Establishes a false causal relationship.' }
        ]
      }
    },
    {
      questionNumber: 33,
      id: 'ex3-q33',
      difficulty: 'Foundation',
      skillTag: 'Compound Predicate',
      prompt: 'The structural restoration guild cataloged ornamental masonry along the historic theater facade ___ documented structural settlement fractures in the master engineering log.',
      options: [', and', '; and', ';', 'and'],
      correctAnswer: 3,
      explanation: {
        coreReasoning: 'The sentence has one grammatical subject ("The structural restoration guild") and two parallel verbs ("cataloged" and "documented"). This forms a compound predicate within a single independent clause. No comma or semicolon is placed before "and".',
        whyCorrect: 'No comma precedes "and" in a two-part compound predicate sharing a single subject.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: ', and', whyWrong: 'An unnecessary comma before "and" improperly separates a subject from its second verb.' },
          { optionIndex: 1, optionLabel: 'B', optionText: '; and', whyWrong: 'A semicolon cannot separate verbs within a single clause.' },
          { optionIndex: 2, optionLabel: 'C', optionText: ';', whyWrong: 'A semicolon requires a full independent clause (including a subject) on its right side.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'and', whyWrong: 'Correct answer.' }
        ]
      }
    },
    {
      questionNumber: 34,
      id: 'ex3-q34',
      difficulty: 'Foundation',
      skillTag: 'Compound Clause Connection',
      prompt: 'The municipal transit commission conducted commuter satisfaction surveys across five suburban rail lines ___ transit operations engineers analyzed real-time signal telemetry along the express corridor.',
      options: ['and', ', and', ';', ','],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The portion following the blank contains its own subject ("transit operations engineers") and predicate ("analyzed real-time signal telemetry..."). Joining two complete independent clauses with "and" requires a preceding comma.',
        whyCorrect: 'A comma followed by "and" correctly coordinates two complete independent clauses.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'and', whyWrong: 'Omits the required comma before a coordinating conjunction joining two independent clauses.' },
          { optionIndex: 1, optionLabel: 'B', optionText: ', and', whyWrong: 'Correct answer.' },
          { optionIndex: 2, optionLabel: 'C', optionText: ';', whyWrong: 'While a semicolon is grammatically functional, ", and" explicitly communicates the additive collaborative coordination.' },
          { optionIndex: 3, optionLabel: 'D', optionText: ',', whyWrong: 'A comma alone between independent clauses creates a comma splice.' }
        ]
      }
    },
    {
      questionNumber: 35,
      id: 'ex3-q35',
      difficulty: 'Foundation',
      skillTag: 'Introductory Modifier Boundary',
      prompt: 'After cross-referencing seventeenth-century navigation logs with modern bathymetric charts ___ the maritime cartographer identified a previously uncharted coral shoal near the shipping channel.',
      options: ["orchestra,","orchestra;","orchestra:","orchestra and"],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The sentence opens with an introductory prepositional/participial modifier phrase ("After cross-referencing seventeenth-century navigation logs with modern bathymetric charts"). A comma must separate the introductory phrase from the main clause ("the maritime cartographer identified...").',
        whyCorrect: 'A comma correctly separates an introductory modifying phrase from the main independent clause.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: ',', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: ';', whyWrong: 'A semicolon cannot follow a dependent phrase.' },
          { optionIndex: 2, optionLabel: 'C', optionText: ':', whyWrong: 'A colon is inappropriate after an introductory adverbial modifier.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'and', whyWrong: 'Adding "and" creates a sentence fragment without a proper main clause.' }
        ]
      }
    },
    {
      questionNumber: 36,
      id: 'ex3-q36',
      difficulty: 'Foundation',
      skillTag: 'Introductory Prepositional Phrase',
      prompt: 'During the opening gala of the international chamber music festival ___ several celebrated guest soloists performed unrecorded Renaissance madrigals.',
      options: ["festival,","festival;","festival:","festival"],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The sentence begins with an extended prepositional phrase ("During the opening gala of the international chamber music festival"). In standard formal writing, a comma is placed after an introductory prepositional phrase of five or more words to set it off clearly from the main clause.',
        whyCorrect: 'A comma sets off the long introductory prepositional phrase from the main clause.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: ',', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: ';', whyWrong: 'A semicolon requires independent clauses on both sides.' },
          { optionIndex: 2, optionLabel: 'C', optionText: ':', whyWrong: 'A colon cannot follow an introductory prepositional phrase.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'no punctuation', whyWrong: 'Omits the necessary boundary comma after a lengthy introductory phrase.' }
        ]
      }
    },
    {
      questionNumber: 37,
      id: 'ex3-q37',
      difficulty: 'Intermediate',
      skillTag: 'Nonessential Appositive',
      prompt: 'The lead plant geneticist ___ published a landmark genomic sequence of wild alpine barley in the botanical journal.',
      options: [', Dr. Evelyn Sterling,', 'Dr. Evelyn Sterling,', '; Dr. Evelyn Sterling;', 'Dr. Evelyn Sterling'],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Because the noun phrase "The lead plant geneticist" uniquely specifies the individual\'s singular position in the laboratory, her name "Dr. Evelyn Sterling" functions as a nonessential appositive. Nonessential appositives interrupting a sentence must be set off with a matching pair of commas.',
        whyCorrect: 'A matching pair of commas correctly encloses the nonessential appositive name.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: ', Dr. Evelyn Sterling,', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Dr. Evelyn Sterling,', whyWrong: 'Omits the opening comma before the nonessential appositive.' },
          { optionIndex: 2, optionLabel: 'C', optionText: '; Dr. Evelyn Sterling;', whyWrong: 'Semicolons cannot enclose mid-sentence appositives.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Dr. Evelyn Sterling', whyWrong: 'Fails to set off the nonessential appositive with required commas.' }
        ]
      }
    },
    {
      questionNumber: 38,
      id: 'ex3-q38',
      difficulty: 'Intermediate',
      skillTag: 'Essential Appositive',
      prompt: 'The modernist author ___ developed revolutionary stream-of-consciousness narrative structures in early twentieth-century fiction.',
      options: ['Virginia Woolf', ', Virginia Woolf,', ', Virginia Woolf', '—Virginia Woolf—'],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The phrase "The modernist author" is a broad descriptive category that applies to many writers (such as James Joyce, Franz Kafka, or Marcel Proust). The name "Virginia Woolf" is essential information that specifies which author is meant. Essential appositives take no commas.',
        whyCorrect: 'Essential appositives that restrict and identify the preceding noun take no commas.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Virginia Woolf', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: ', Virginia Woolf,', whyWrong: 'Adding commas would falsely imply that Virginia Woolf is the only modernist author.' },
          { optionIndex: 2, optionLabel: 'C', optionText: ', Virginia Woolf', whyWrong: 'A single comma improperly separates the subject from its verb.' },
          { optionIndex: 3, optionLabel: 'D', optionText: '—Virginia Woolf—', whyWrong: 'Dashes improperly set off essential identifying information.' }
        ]
      }
    },
    {
      questionNumber: 39,
      id: 'ex3-q39',
      difficulty: 'Intermediate',
      skillTag: 'Nonessential Relative Clause',
      prompt: 'The historic stone amphitheater ___ hosts world-renowned acoustic concerts throughout the summer festival season.',
      options: ["tapestries—","tapestries,","tapestries;","tapestries"],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The core independent clause is "The historic stone amphitheater hosts world-renowned acoustic concerts throughout the summer festival season." The modifying clause "which was constructed during the reign of Emperor Hadrian" provides nonessential historical detail. Nonessential relative clauses beginning with "which" must be bounded by a pair of commas.',
        whyCorrect: 'A pair of commas encloses the nonessential "which" relative clause.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: ', which was constructed during the reign of Emperor Hadrian,', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'which was constructed during the reign of Emperor Hadrian', whyWrong: 'Omits the required commas around a nonessential relative clause.' },
          { optionIndex: 2, optionLabel: 'C', optionText: '; which was constructed during the reign of Emperor Hadrian;', whyWrong: 'Semicolons cannot enclose modifying clauses within a single sentence.' },
          { optionIndex: 3, optionLabel: 'D', optionText: ': which was constructed during the reign of Emperor Hadrian,', whyWrong: 'A colon cannot serve as the opening delimiter for an interrupting clause.' }
        ]
      }
    },
    {
      questionNumber: 40,
      id: 'ex3-q40',
      difficulty: 'Intermediate',
      skillTag: 'Essential Relative Clause Logic',
      prompt: 'The municipal water pipeline that was installed along the eastern riverbed last autumn has withstood record winter hydrostatic pressures. Why are no commas placed around "that was installed along the eastern riverbed last autumn"?',
      options: [
        '"That" clauses cannot contain helping verbs.',
        'The relative clause specifies which pipeline is meant, making the clause essential information.',
        'Relative clauses never take punctuation regardless of context.',
        'A comma cannot be placed before the verb phrase "has withstood".'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The relative clause beginning with "that" specifies and restricts which exact water pipeline is under discussion (the one along the eastern riverbed, as opposed to pipelines in other sectors). Because the clause is essential (restrictive) to the identity of the subject, standard English grammar dictates that no commas be used.',
        whyCorrect: 'Essential relative clauses that specify the identity of the noun do not take commas.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Choice A', whyWrong: 'Factually incorrect; "that" clauses routinely include helping verbs.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Choice B', whyWrong: 'Correct answer.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Choice C', whyWrong: 'Factually false; nonessential relative clauses take commas.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Choice D', whyWrong: 'Misses the fundamental concept of restrictive vs. non-restrictive modification.' }
        ]
      }
    },
    {
      questionNumber: 41,
      id: 'ex3-q41',
      difficulty: 'Intermediate',
      skillTag: 'Semicolon + Conjunctive Adverb',
      prompt: 'The pilot test of the seawater desalination plant surpassed regional water purity requirements ___ therefore, the regional utility authority approved the construction of three full-scale treatment modules.',
      options: ["requirements,","requirements;","requirements:","requirements and"],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The word "therefore" is a conjunctive adverb connecting two independent clauses ("The pilot test... surpassed requirements" and "the regional utility authority approved..."). When a conjunctive adverb connects two independent clauses, it must be preceded by a semicolon and followed by a comma.',
        whyCorrect: 'A semicolon correctly precedes the conjunctive adverb "therefore" between two independent clauses.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: ',', whyWrong: 'Placing a comma before "therefore," creates a comma splice.' },
          { optionIndex: 1, optionLabel: 'B', optionText: ';', whyWrong: 'Correct answer.' },
          { optionIndex: 2, optionLabel: 'C', optionText: ':', whyWrong: 'A colon is inappropriate before a conjunctive adverb of consequence.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'and', whyWrong: '"And therefore" without a preceding comma or semicolon produces an awkward coordination error.' }
        ]
      }
    },
    {
      questionNumber: 42,
      id: 'ex3-q42',
      difficulty: 'Advanced',
      skillTag: 'Complex Sentence Boundary Semicolon',
      prompt: 'Coastal meteorologists originally dismissed the sudden drop in atmospheric pressure as localized instrument calibration drift ___ after offshore storm buoys registered gale-force gusts, however, forecasters issued immediate hurricane advisories.',
      options: ["drift,","drift;","drift:","drift and"],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Sentence 1 is a complete independent clause. Sentence 2 is also independent, opening with a dependent clause ("after offshore storm buoys registered gale-force gusts") and containing an embedded parenthetical transition ("however"). A semicolon is the necessary major punctuation mark to separate the two independent sentences.',
        whyCorrect: 'A semicolon separates the two major independent sentences, preventing ambiguity with the internal commas in the second clause.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: ',', whyWrong: 'Creates a severe comma splice.' },
          { optionIndex: 1, optionLabel: 'B', optionText: ';', whyWrong: 'Correct answer.' },
          { optionIndex: 2, optionLabel: 'C', optionText: ':', whyWrong: 'A colon is incorrect because the second clause presents a narrative contrast, not an explanation of the drift.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'and', whyWrong: 'Fails to provide the required structural boundary before the complex second sentence.' }
        ]
      }
    }
  ]
};

export const EXERCISE_BLOCK_4: WritingExerciseBlock = {
  blockNumber: 4,
  title: 'Exercise Set 4 — Complex Punctuation & Lists (Qs 43–54)',
  description: 'Paired commas around interrupters, participial phrases, semicolons between independent clauses, internal list semicolons, colons for lists, and multi-clause boundaries.',
  questions: [
    {
      questionNumber: 43,
      id: 'ex4-q43',
      difficulty: 'Intermediate',
      skillTag: 'Paired Commas for Interrupters',
      prompt: 'The archival conservation team ___ discovered accelerated fungal degradation on several nineteenth-century watercolor sketches.',
      options: [
        ', despite having maintained strict climate controls in the vault,',
        'despite having maintained strict climate controls in the vault',
        '; despite having maintained strict climate controls in the vault;',
        ': despite having maintained strict climate controls in the vault,'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The core sentence is "The archival conservation team discovered accelerated fungal degradation...". The prepositional phrase "despite having maintained strict climate controls in the vault" is a parenthetical interrupter separating the subject from its verb. It must be enclosed in a matching pair of commas.',
        whyCorrect: 'A matching pair of commas correctly encloses the parenthetical interrupting phrase.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: ', despite having maintained strict climate controls in the vault,', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'despite having maintained strict climate controls in the vault', whyWrong: 'Omits the necessary commas setting off the parenthetical prepositional phrase from the subject and verb.' },
          { optionIndex: 2, optionLabel: 'C', optionText: '; despite having maintained strict climate controls in the vault;', whyWrong: 'Semicolons cannot enclose an interrupting phrase within a single clause.' },
          { optionIndex: 3, optionLabel: 'D', optionText: ': despite having maintained strict climate controls in the vault,', whyWrong: 'A colon cannot serve as the opening delimiter for an interrupting parenthetical phrase.' }
        ]
      }
    },
    {
      questionNumber: 44,
      id: 'ex4-q44',
      difficulty: 'Intermediate',
      skillTag: 'Trailing Participial Phrase',
      prompt: 'The musicologist examined the fragmented sixteenth-century choral manuscript ___ comparing its modal cadence structures with authenticated masses by Giovanni Pierluigi da Palestrina.',
      options: [',', ';', ':', '.'],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The sentence consists of a complete independent clause ("The musicologist examined the fragmented sixteenth-century choral manuscript") followed by a trailing participial modifier phrase ("comparing its modal cadence structures..."). A comma is standard before a trailing participial phrase modifying the subject.',
        whyCorrect: 'A comma sets off the trailing participial modifier from the main clause.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: ',', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: ';', whyWrong: 'A semicolon cannot introduce a participial phrase; it requires a complete clause.' },
          { optionIndex: 2, optionLabel: 'C', optionText: ':', whyWrong: 'A colon is inappropriate before a participial modifier.' },
          { optionIndex: 3, optionLabel: 'D', optionText: '.', whyWrong: 'Placing a period creates an ungrammatical participial fragment.' }
        ]
      }
    },
    {
      questionNumber: 45,
      id: 'ex4-q45',
      difficulty: 'Intermediate',
      skillTag: 'Independent Clause Semicolon',
      prompt: 'Acoustic consultants positioned curved timber reflectors above the orchestra stage ___ they recorded sound reverberation decay rates across all three seating tiers.',
      options: ["stage,","stage;","stage:","stage"],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Two complete independent clauses appear with no coordinating conjunction: "Acoustic consultants positioned curved timber reflectors..." and "they recorded sound reverberation decay rates...". A semicolon is the correct mark to join them.',
        whyCorrect: 'A semicolon connects two complete independent clauses without a conjunction.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: ',', whyWrong: 'Creates a comma splice.' },
          { optionIndex: 1, optionLabel: 'B', optionText: ';', whyWrong: 'Correct answer.' },
          { optionIndex: 2, optionLabel: 'C', optionText: ':', whyWrong: 'The second clause does not explain or define the reflectors; it recounts a sequential technical measurement.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'no punctuation', whyWrong: 'Creates a fused run-on sentence.' }
        ]
      }
    },
    {
      questionNumber: 46,
      id: 'ex4-q46',
      difficulty: 'Intermediate',
      skillTag: 'Conjunctive Adverb Semicolon',
      prompt: 'The artisanal bookbinder created exceptionally flexible leather bindings ___ however, the traditional vegetable tanning method required scarce organic plant tannins.',
      options: ["bindings,","bindings;","bindings:","bindings and"],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The transition "however" functions as a conjunctive adverb linking two independent clauses. The standard pattern is: Independent Clause; however, Independent Clause.',
        whyCorrect: 'A semicolon must precede "however," when it introduces a second independent clause.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: ',', whyWrong: 'Placing only a comma before "however," results in a comma splice.' },
          { optionIndex: 1, optionLabel: 'B', optionText: ';', whyWrong: 'Correct answer.' },
          { optionIndex: 2, optionLabel: 'C', optionText: ':', whyWrong: 'A colon is not used to introduce contrastive conjunctive adverbs.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'and', whyWrong: 'Writing "and however," is grammatically awkward and nonstandard.' }
        ]
      }
    },
    {
      questionNumber: 47,
      id: 'ex4-q47',
      difficulty: 'Intermediate',
      skillTag: 'Comma Splice Revision',
      prompt: 'The synthetic chemical resin exhibited high tensile flexibility at room temperature, however, it degraded rapidly under intense cryogenic conditions. Which revision correctly fixes the sentence?',
      options: [
        'The synthetic chemical resin exhibited high tensile flexibility at room temperature, however, it degraded rapidly under intense cryogenic conditions.',
        'The synthetic chemical resin exhibited high tensile flexibility at room temperature; however, it degraded rapidly under intense cryogenic conditions.',
        'The synthetic chemical resin exhibited high tensile flexibility at room temperature: however, it degraded rapidly under intense cryogenic conditions.',
        'The synthetic chemical resin exhibited high tensile flexibility at room temperature; however it degraded rapidly under intense cryogenic conditions.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The original sentence improperly links two independent clauses with only a comma before the conjunctive adverb "however". The correct punctuation requires a semicolon before "however" and a comma after it (; however,).',
        whyCorrect: 'Correctly replaces the comma splice with a semicolon before "however" and retains the comma after it.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Choice A', whyWrong: 'Maintains the ungrammatical comma splice.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Choice B', whyWrong: 'Correct answer.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Choice C', whyWrong: 'A colon is ungrammatical before "however".' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Choice D', whyWrong: 'Omits the necessary comma following the conjunctive adverb "however".' }
        ]
      }
    },
    {
      questionNumber: 48,
      id: 'ex4-q48',
      difficulty: 'Intermediate',
      skillTag: 'Conjunctive Adverb Connection',
      prompt: 'City transportation planners anticipated that dynamic congestion pricing would reduce peak-hour tunnel traffic ___ nevertheless, commuter toll data revealed virtually unchanged vehicle throughput.',
      options: ["traffic,","traffic;","traffic:","traffic and"],
      correctAnswer: 1,
      explanation: {
        coreReasoning: '"Nevertheless" is a conjunctive adverb connecting two independent clauses. When positioned between two independent clauses, it must be preceded by a semicolon.',
        whyCorrect: 'A semicolon correctly precedes the conjunctive adverb "nevertheless".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: ',', whyWrong: 'Using a comma before "nevertheless" produces a comma splice.' },
          { optionIndex: 1, optionLabel: 'B', optionText: ';', whyWrong: 'Correct answer.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'and', whyWrong: 'Improper coordination with "nevertheless".' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'because', whyWrong: 'Reverses the logical relationship.' }
        ]
      }
    },
    {
      questionNumber: 49,
      id: 'ex4-q49',
      difficulty: 'Intermediate',
      skillTag: 'Internal List Semicolons',
      prompt: 'The international urban planning delegation included distinguished architects from Kyoto, Japan; Milan, Italy; and Barcelona, Spain. Why are semicolons used in this sentence?',
      options: [
        'They separate three complete independent clauses.',
        'They separate list items that contain internal commas to avoid reader confusion.',
        'They introduce specific illustrative examples after a colon.',
        'They set off nonessential dependent clauses.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'When individual items in a list contain internal commas (e.g., "City, Country"), standard grammar uses semicolons as the major delimiters between the items to prevent ambiguity and visual clutter.',
        whyCorrect: 'Semicolons separate major list elements that already contain internal commas.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Choice A', whyWrong: 'The list items are proper noun phrases (City, Country), not independent clauses.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Choice B', whyWrong: 'Correct answer.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Choice C', whyWrong: 'There is no colon in the sentence, and semicolons are not introducing examples here.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Choice D', whyWrong: 'The phrases are prepositional/noun list items, not dependent clauses.' }
        ]
      }
    },
    {
      questionNumber: 50,
      id: 'ex5-q50',
      difficulty: 'Foundation',
      skillTag: 'Colon Before List',
      prompt: 'The macroeconomic research team analyzed three vital indicators of market liquidity ___ commercial paper yields, overnight repurchase rates, and sovereign bond spreads.',
      options: ["expansion:","expansion;","expansion,","expansion"],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The statement before the blank ("The macroeconomic research team analyzed three vital indicators of market liquidity") is a grammatically complete independent clause. A colon correctly introduces the direct three-item list that enumerates those indicators.',
        whyCorrect: 'A colon introduces a list after a complete independent clause.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: ':', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: ';', whyWrong: 'A semicolon cannot precede a list of noun phrases.' },
          { optionIndex: 2, optionLabel: 'C', optionText: ',', whyWrong: 'A colon is standard and preferable after a full setup clause specifying "three vital indicators".' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'no punctuation', whyWrong: 'Omits necessary boundary punctuation before the list.' }
        ]
      }
    },
    {
      questionNumber: 51,
      id: 'ex5-q51',
      difficulty: 'Foundation',
      skillTag: 'No Colon After Incomplete Verb',
      prompt: 'The culinary academy’s intensive pastry curriculum includes ___ artisan sourdough fermentation, classical laminated puff pastry, and high-hydration brioche.',
      options: ["includes","includes:","includes,","includes;"],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The clause ends with the active transitive verb "includes". The three culinary techniques function directly as the direct objects of "includes". No punctuation mark (neither colon, comma, nor semicolon) may separate a transitive verb from its objects.',
        whyCorrect: 'No punctuation is allowed between a transitive verb and its direct object series.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'no punctuation', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: ':', whyWrong: 'A colon cannot directly follow a transitive verb or incomplete clause.' },
          { optionIndex: 2, optionLabel: 'C', optionText: ',', whyWrong: 'An ungrammatical comma separating a verb from its direct object.' },
          { optionIndex: 3, optionLabel: 'D', optionText: ';', whyWrong: 'A semicolon requires a complete independent clause on both sides.' }
        ]
      }
    },
    {
      questionNumber: 52,
      id: 'ex5-q52',
      difficulty: 'Intermediate',
      skillTag: 'Colon for Discovery',
      prompt: 'Naval historians confirmed a surprising revelation in the naval logs ___ the seventeenth-century flagship had altered its Atlantic crossing to evade privateer blockades in the Azores.',
      options: ["curators,","curators;","curators:","curators and"],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The first clause ("Naval historians confirmed a surprising revelation in the naval logs") is a complete independent clause ending in the categorical noun "revelation". The second clause specifies exactly what that revelation was. A colon is the standard mark to introduce this explanatory clause.',
        whyCorrect: 'A colon introduces the explanation of the "revelation" introduced in the complete first clause.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: ':', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: ';', whyWrong: 'While grammatically possible, a semicolon lacks the explicit cataphoric introductory force needed after "a surprising revelation".' },
          { optionIndex: 2, optionLabel: 'C', optionText: ',', whyWrong: 'Produces a comma splice.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'and', whyWrong: 'Lacks required boundary punctuation and weakens the explanatory relationship.' }
        ]
      }
    },
    {
      questionNumber: 53,
      id: 'ex5-q53',
      difficulty: 'Foundation',
      skillTag: 'Introductory Prepositional Modifier',
      prompt: 'After transcribing decades of nineteenth-century municipal census records from industrial textile towns ___ demographic historians identified a significant rural-to-urban migration trend among young female weavers.',
      options: ["specimens,","specimens;","specimens:","specimens and"],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The sentence opens with an extended introductory prepositional modifier phrase ("After transcribing decades of nineteenth-century municipal census records from industrial textile towns"). An introductory modifying phrase must be followed by a comma before the main independent clause.',
        whyCorrect: 'A comma separates the introductory prepositional modifier from the main clause.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: ',', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: ';', whyWrong: 'A semicolon cannot follow a dependent modifier phrase.' },
          { optionIndex: 2, optionLabel: 'C', optionText: ':', whyWrong: 'A colon cannot follow an introductory prepositional phrase.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'and', whyWrong: 'Adding "and" creates a sentence fragment without an independent main clause.' }
        ]
      }
    },
    {
      questionNumber: 54,
      id: 'ex5-q54',
      difficulty: 'Elite',
      skillTag: 'Multi-Clause Boundary Synthesis',
      prompt: 'Although the initial geochemical survey appeared promising, the mining consortium delayed excavation because core drilling samples showed high sulfur impurities ___ a mineral defect that substantially increased refining costs.',
      options: [',', ';', 'and', 'because'],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The noun phrase "a mineral defect that substantially increased refining costs" is an appositive renaming "high sulfur impurities". A comma correctly sets off this trailing noun appositive from the preceding independent clause.',
        whyCorrect: 'A comma correctly sets off the trailing noun phrase appositive.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: ',', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: ';', whyWrong: 'A semicolon cannot introduce a noun phrase appositive fragment.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'and', whyWrong: '"And a mineral defect" leaves the phrase grammatically awkward and unintegrated.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'because', whyWrong: '"Because" cannot introduce a noun phrase lacking a subject and conjugated verb.' }
        ]
      }
    }
  ]
};

export const EXERCISE_BLOCK_5: WritingExerciseBlock = {
  blockNumber: 5,
  title: 'Exercise Set 5 — Transitions & Logical Connections (Qs 55–65)',
  description: 'Addition, result, contrast, example, purpose, and concession transition words in paragraph context.',
  questions: [
    {
      questionNumber: 55,
      id: 'ex5-q55',
      difficulty: 'Foundation',
      skillTag: 'Addition Transition',
      prompt: 'The space telescope was engineered to capture infrared emissions from the earliest cosmic structures. ___, its spectroscopic suite can characterize the atmospheric chemistry of transiting exoplanets.',
      options: ['However', 'In addition', 'As a result', 'For example'],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Sentence 1 describes capability A (capturing cosmic infrared emissions). Sentence 2 introduces capability B (characterizing exoplanet atmospheres). The relationship between the two capabilities is addition.',
        whyCorrect: '"In addition" correctly connects two additive, complementary technical capabilities.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'However', whyWrong: 'There is no contrast between the two telescope functions.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'In addition', whyWrong: 'Correct answer.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'As a result', whyWrong: 'Capturing cosmic structures does not cause the telescope to have exoplanet spectroscopy.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'For example', whyWrong: 'Exoplanet spectroscopy is a separate capability, not an example of early cosmic structure imaging.' }
        ]
      }
    },
    {
      questionNumber: 56,
      id: 'ex5-q56',
      difficulty: 'Foundation',
      skillTag: 'Result Transition',
      prompt: 'The municipal water filtration facility experienced severe membrane fouling during peak summer river turbidity. ___, civil engineers expedited the installation of automated microfiltration pre-treatment modules.',
      options: ['Consequently', 'However', 'In contrast', 'For instance'],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Sentence 1 describes a problem (membrane fouling during peak turbidity). Sentence 2 describes the direct engineering action taken because of that problem (installing pre-treatment modules). The relationship is cause and effect.',
        whyCorrect: '"Consequently" expresses the direct causal consequence of the fouling issue.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Consequently', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'However', whyWrong: 'The engineers\' response is logical and expected, not a contrasting contradiction.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'In contrast', whyWrong: 'No comparison between two contrasting entities.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'For instance', whyWrong: 'Installing modules is an action, not an example of membrane fouling.' }
        ]
      }
    },
    {
      questionNumber: 57,
      id: 'ex5-q57',
      difficulty: 'Foundation',
      skillTag: 'Contrast Transition',
      prompt: 'Under standard ambient temperatures, the synthetic polymer remained pliable and highly impact-resistant. ___, when immersed in cryogenic liquid nitrogen, its molecular matrix became brittle and fractured under minimal mechanical load.',
      options: ['Furthermore', 'However', 'Therefore', 'Specifically'],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Sentence 1 presents the material\'s behavior at ambient temperatures (pliable and impact-resistant). Sentence 2 presents its behavior under cryogenic conditions (brittle and easily fractured). The relationship is direct contrast.',
        whyCorrect: '"However" signals the contrast between ambient and cryogenic material properties.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Furthermore', whyWrong: '"Furthermore" indicates addition, but the two sentences present opposing physical behaviors.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'However', whyWrong: 'Correct answer.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Therefore', whyWrong: 'Ambient flexibility does not cause cryogenic brittleness.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Specifically', whyWrong: 'The second sentence does not specify the first; it contrasts temperature states.' }
        ]
      }
    },
    {
      questionNumber: 58,
      id: 'ex5-q58',
      difficulty: 'Foundation',
      skillTag: 'Example Transition',
      prompt: 'Several shorebird species undertake non-stop transoceanic migrations spanning thousands of nautical miles. ___, the bar-tailed godwit flies continuously across the open Pacific from Alaska to New Zealand without resting or feeding.',
      options: ['For example', 'Nevertheless', 'Consequently', 'In addition'],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Sentence 1 makes a general claim about multiple shorebird species. Sentence 2 provides a specific, detailed illustration of that claim by naming the bar-tailed godwit and its specific flight path.',
        whyCorrect: '"For example" introduces a specific illustrative instance of a general claim.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'For example', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Nevertheless', whyWrong: 'There is no concession or contradiction between the two statements.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Consequently', whyWrong: 'The general existence of migratory species did not cause the godwit to fly.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'In addition', whyWrong: 'The godwit is an example of the group, not a separate additive topic.' }
        ]
      }
    },
    {
      questionNumber: 59,
      id: 'ex5-q59',
      difficulty: 'Foundation',
      skillTag: 'Advantage vs. Disadvantage Contrast',
      prompt: 'The lightweight timber grid-shell pavilion delivered exceptional acoustic warmth for orchestral performances. ___, its untreated cedar battens required labor-intensive annual waterproofing against coastal fog and humidity.',
      options: ['In addition', 'However', 'Therefore', 'Likewise'],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Sentence 1 highlights a positive design benefit (acoustic warmth). Sentence 2 highlights an operational drawback (labor-intensive maintenance). The transition between an advantage and a disadvantage is contrast.',
        whyCorrect: '"However" signals the contrast between the aesthetic benefit and the maintenance challenge.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'In addition', whyWrong: 'Ignores the rhetorical shift from a positive attribute to a maintenance burden.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'However', whyWrong: 'Correct answer.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Therefore', whyWrong: 'Acoustic quality does not cause moisture maintenance needs.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Likewise', whyWrong: 'Maintenance burdens are not similar to acoustic warmth.' }
        ]
      }
    },
    {
      questionNumber: 60,
      id: 'ex5-q60',
      difficulty: 'Intermediate',
      skillTag: 'Purpose Transition',
      prompt: 'Urban forestry planners sought to attenuate the urban heat island effect across densely built residential wards. ___, they instituted a municipal program establishing continuous shade canopy corridors along major transit streets.',
      options: ['To do so', 'In contrast', 'For instance', 'However'],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Sentence 1 articulates a specific civic policy objective (attenuating the heat island effect). Sentence 2 describes the practical measure implemented to achieve that goal. The transition "To do so" links an objective to its means of execution.',
        whyCorrect: '"To do so" connects a stated goal to the concrete policy enacted to fulfill it.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'To do so', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'In contrast', whyWrong: 'There is no contrast between establishing a goal and acting to achieve it.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'For instance', whyWrong: 'The program is a strategy implemented toward the goal, not an example of the heat island effect itself.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'However', whyWrong: 'No conflict or concession exists between the goal and the action.' }
        ]
      }
    },
    {
      questionNumber: 61,
      id: 'ex5-q61',
      difficulty: 'Intermediate',
      skillTag: 'Entity Comparison Contrast',
      prompt: 'The inaugural workplace survey gathered compensation data exclusively from tenured university professors at private institutions. ___, the subsequent nationwide study analyzed labor conditions among hundreds of non-tenure-track lecturers and community college instructors.',
      options: ['In contrast', 'For example', 'Therefore', 'In addition'],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The text sets up a direct comparison between two distinct survey cohorts: tenured private university faculty versus non-tenure-track and community college educators. "In contrast" highlights this demographic and institutional divergence.',
        whyCorrect: '"In contrast" clearly establishes the difference between the two research cohorts.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'In contrast', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'For example', whyWrong: 'Non-tenured community college faculty are not an example of tenured private university professors.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Therefore', whyWrong: 'Survey 1 did not cause the demographic composition of Survey 2.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'In addition', whyWrong: 'While additive, "In addition" fails to capture the deliberate demographic contrast between the cohorts.' }
        ]
      }
    },
    {
      questionNumber: 62,
      id: 'ex5-q62',
      difficulty: 'Intermediate',
      skillTag: 'Infrastructure Result',
      prompt: 'The coast guard authority deployed a network of high-frequency coastal radar stations and automated transponder receivers. ___, maritime surveillance teams detected illegal commercial fishing vessels within minutes of entering territorial marine sanctuaries.',
      options: ['As a result', 'However', 'Similarly', 'Instead'],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Sentence 1 describes the deployment of surveillance infrastructure. Sentence 2 describes the immediate operational outcome (rapid detection of illegal vessels). The logical link is cause and effect.',
        whyCorrect: '"As a result" expresses the direct functional consequence of deploying the radar network.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'As a result', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'However', whyWrong: 'The outcome is a success, not a contradiction.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Similarly', whyWrong: 'Detection is not a parallel system, but a consequence of the deployment.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Instead', whyWrong: 'There is no substitution or replacement.' }
        ]
      }
    },
    {
      questionNumber: 63,
      id: 'ex5-q63',
      difficulty: 'Intermediate',
      skillTag: 'Botanical Example',
      prompt: 'Many desert succulents have evolved specialized anatomical structures to store massive reserves of moisture during prolonged droughts. ___, the mature saguaro cactus can expand its pleated accordion-like stem to absorb thousands of gallons of rainwater after a single desert flash storm.',
      options: ['For instance', 'Therefore', 'On the other hand', 'Subsequently'],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Sentence 1 makes a general statement about desert succulents adapting to store moisture. Sentence 2 presents a specific species (the saguaro cactus) and its exact storage mechanism (pleated stem).',
        whyCorrect: '"For instance" introduces a specific illustrative example of the broader biological adaptation.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'For instance', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Therefore', whyWrong: 'General succulents adapting did not cause the saguaro to evolve.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'On the other hand', whyWrong: 'There is no contrast between the general category and the specific member.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Subsequently', whyWrong: 'The relationship is taxonomy and example, not chronological sequence.' }
        ]
      }
    },
    {
      questionNumber: 64,
      id: 'ex5-q64',
      difficulty: 'Intermediate',
      skillTag: 'Confirmation / Indeed Transition',
      prompt: 'Materials scientists predicted that the titanium-carbide thermal coating would resist high-temperature oxidation far better than industrial chrome plating. ___, continuous pyrometric imaging confirmed negligible surface degradation even after hundreds of hours of furnace operation.',
      options: ['Indeed', 'However', 'Instead', 'Consequently'],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Sentence 1 introduces a scientific prediction. Sentence 2 presents empirical test results that validate and confirm that prediction. The transition "Indeed" is used to affirm, emphasize, and confirm the truth of a preceding statement.',
        whyCorrect: '"Indeed" emphasizes and confirms the preceding prediction with empirical verification.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Indeed', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'However', whyWrong: 'The imaging results confirmed the prediction rather than contradicting it.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Instead', whyWrong: 'There is no alternative or replacement.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Consequently', whyWrong: 'The imaging results are observational proof of the material\'s inherent property, not an effect caused by making the prediction.' }
        ]
      }
    },
    {
      questionNumber: 65,
      id: 'ex5-q65',
      difficulty: 'Intermediate',
      skillTag: 'Concession / Nevertheless',
      prompt: 'The medieval vellum manuscript was severely damaged by centuries of water seepage and fungal staining. ___, paleographers deciphered the underlying seventh-century Greek philosophical text using multispectral digital imaging.',
      options: ['Nevertheless', 'Furthermore', 'Thus', 'Similarly'],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Sentence 1 describes an acute physical obstacle (severe water damage and fungal staining). Sentence 2 recounts a triumphant outcome achieved despite that obstacle (successful decipherment using digital imaging). The relationship is concession/contrast.',
        whyCorrect: '"Nevertheless" signals an unexpected achievement despite severe preceding obstacles.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Nevertheless', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Furthermore', whyWrong: 'Fails to express the contrast between physical damage and successful decipherment.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Thus', whyWrong: 'Water damage did not cause the scholars to decipher the text.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Similarly', whyWrong: 'There is no parallel comparison between the two sentences.' }
        ]
      }
    }
  ]
};

export const EXERCISE_BLOCK_6: WritingExerciseBlock = {
  blockNumber: 6,
  title: 'Exercise Set 6 — Subject-Verb Agreement & Modifiers (Qs 66–75)',
  description: 'Subject-verb agreement with prepositional phrases, collective nouns, compound subjects, and dangling modifiers.',
  questions: [
    {
      questionNumber: 66,
      id: 'ex6-q66',
      difficulty: 'Intermediate',
      skillTag: 'Prepositional Phrase Distraction',
      prompt: 'The collection of rare illuminated manuscripts from several monastic archives ___ displayed in the cathedral\'s subterranean vault.',
      options: ["are being studied","have been studied","is studied","were studied"],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The simple grammatical subject is the singular noun "collection". The intervening prepositional phrases ("of rare illuminated manuscripts" and "from several monastic archives") contain plural nouns ("manuscripts", "archives") that do not affect the subject\'s number. A singular subject requires a singular verb: "The collection... is displayed".',
        whyCorrect: 'The singular subject "collection" requires the singular present verb "is".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'is', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'are', whyWrong: 'Plural verb incorrectly triggered by the nearby plural object "archives".' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'were', whyWrong: 'Plural past verb.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'have been', whyWrong: 'Plural present perfect verb.' }
        ]
      }
    },
    {
      questionNumber: 67,
      id: 'ex6-q67',
      difficulty: 'Intermediate',
      skillTag: 'Series Subject',
      prompt: 'The series of archival diaries recovered from the private study of the diplomat ___ yielded invaluable insights into the pre-war treaty negotiations.',
      options: ["restorations—","restorations,","restorations;","restorations"],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The head noun of the subject is the singular noun "series". The modifying prepositional phrases ("of archival diaries recovered from the private study of the diplomat") do not alter the grammatical number of the subject. A singular subject requires the singular auxiliary verb "has".',
        whyCorrect: 'The singular head noun "series" matches the singular verb "has".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'has', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'have', whyWrong: 'Plural verb error induced by the plural noun "diaries".' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'were', whyWrong: 'Plural past auxiliary verb.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'are', whyWrong: 'Plural present verb.' }
        ]
      }
    },
    {
      questionNumber: 68,
      id: 'ex6-q68',
      difficulty: 'Intermediate',
      skillTag: 'Parenthetical Along With',
      prompt: 'The lead architectural conservator, along with three structural engineers, ___ inspecting the foundation settlement beneath the fourteenth-century bell tower.',
      options: ['is currently', 'are currently', 'were actively', 'have been actively'],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The subject of the sentence is "The lead architectural conservator" (singular). Phrases set off by commas introduced by "along with", "together with", "as well as", or "in addition to" are parenthetical modifiers and do not compound the grammatical subject. Therefore, the verb must remain singular: "conservator... is currently inspecting".',
        whyCorrect: 'The singular subject "conservator" agrees with the singular verb "is currently".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'is currently', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'are currently', whyWrong: 'Plural verb error caused by falsely treating "along with" as a coordinating conjunction like "and".' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'were actively', whyWrong: 'Plural past verb.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'have been actively', whyWrong: 'Plural present perfect verb.' }
        ]
      }
    },
    {
      questionNumber: 69,
      id: 'ex6-q69',
      difficulty: 'Intermediate',
      skillTag: 'Neither...Nor Closest Subject (Plural)',
      prompt: 'Neither the museum director nor the senior curatorial fellows ___ present to authenticate the provenance of the newly attributed oil sketch.',
      options: ["has been confirmed","is confirmed","was confirmed","were confirmed"],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'When two subjects are joined by "neither... nor" (or "either... or"), the verb must agree in number with the subject noun CLOSEST to the verb. The closest subject is "the senior curatorial fellows" (plural), which requires the plural verb "were".',
        whyCorrect: 'The plural closest subject "fellows" agrees with the plural verb "were".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'was', whyWrong: 'Singular verb fails to agree with the plural closest subject "fellows".' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'were', whyWrong: 'Correct answer.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'is', whyWrong: 'Singular present verb.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'has been', whyWrong: 'Singular present perfect verb.' }
        ]
      }
    },
    {
      questionNumber: 70,
      id: 'ex6-q70',
      difficulty: 'Intermediate',
      skillTag: 'Neither...Nor Closest Subject (Singular)',
      prompt: 'Neither the regional distribution center managers nor the chief logistics coordinator ___ authorized to modify automated inventory manifests during a quarterly financial audit.',
      options: ['were', 'was', 'are', 'have been'],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'In a "neither... nor" construction, the verb must agree in grammatical number with the subject noun closest to it. Here, the closer subject is "the chief logistics coordinator" (singular). Therefore, the verb must be singular: "coordinator was authorized".',
        whyCorrect: 'The singular closest subject "coordinator" agrees with the singular past verb "was".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'were', whyWrong: 'Plural verb error induced by the preceding plural subject "managers".' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'was', whyWrong: 'Correct answer.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'are', whyWrong: 'Plural present verb.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'have been', whyWrong: 'Plural present perfect verb.' }
        ]
      }
    },
    {
      questionNumber: 71,
      id: 'ex6-q71',
      difficulty: 'Intermediate',
      skillTag: 'Dangling Modifier Revision 1',
      prompt: 'Having analyzed the isotopic ratios within the fossilized dental enamel, ___',
      options: [
        'the evolutionary anthropologists reconstructed the seasonal foraging migrations of early hominids.',
        'the seasonal foraging migrations of early hominids were reconstructed by the evolutionary anthropologists.',
        'the fossilized dental enamel revealed the seasonal foraging migrations of early hominids.',
        'the hominid migration patterns were successfully determined by the study.'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The introductory modifier is "Having analyzed the isotopic ratios within the fossilized dental enamel". The entity that performed the analysis must immediately follow the comma. Evolutionary anthropologists analyzed the enamel, so "the evolutionary anthropologists" must be the subject of the main clause.',
        whyCorrect: 'Places the logical actor ("the evolutionary anthropologists") immediately after the introductory participial modifier.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Choice A', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Choice B', whyWrong: 'Dangling modifier; illogically implies that "foraging migrations" analyzed dental enamel.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Choice C', whyWrong: 'Dangling modifier; illogically implies that "dental enamel" analyzed itself.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Choice D', whyWrong: 'Dangling modifier; illogically implies that "migration patterns" analyzed dental enamel.' }
        ]
      }
    },
    {
      questionNumber: 72,
      id: 'ex6-q72',
      difficulty: 'Intermediate',
      skillTag: 'Dangling Modifier Submersible',
      prompt: 'Engineered to withstand the crushing hydrostatic pressures of the abyssal plain, ___',
      options: [
        'the oceanographic expedition deployed the unmanned robotic probe into the Kermadec Trench.',
        'the unmanned robotic probe was deployed by oceanographers into the Kermadec Trench.',
        'the Kermadec Trench became the testing site for the unmanned robotic probe.',
        'the deployment of the unmanned robotic probe took place in the Kermadec Trench.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The introductory modifier is "Engineered to withstand the crushing hydrostatic pressures of the abyssal plain". The noun directly following the comma must be the object that was engineered—namely, "the unmanned robotic probe".',
        whyCorrect: 'Places the entity that was engineered ("the unmanned robotic probe") immediately after the modifying phrase.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Choice A', whyWrong: 'Dangling modifier; illogically implies that "the oceanographic expedition" (the team of people) was engineered for abyssal water pressures.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Choice B', whyWrong: 'Correct answer.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Choice C', whyWrong: 'Dangling modifier; illogically implies that "the Kermadec Trench" was engineered.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Choice D', whyWrong: 'Dangling modifier; illogically implies that "the deployment" was engineered.' }
        ]
      }
    },
    {
      questionNumber: 73,
      id: 'ex6-q73',
      difficulty: 'Intermediate',
      skillTag: 'Infinitive Modifier Goal',
      prompt: 'To evaluate whether the drought-tolerant millet landrace was commercially viable, ___',
      options: [
        'the agricultural field trial was repeated across five experimental farms.',
        'the agronomy collective cultivated the experimental crop across five distinct microclimates.',
        'cultivation of the experimental crop took place across several regions.',
        'the harvest yields were analyzed by the regional extension service.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The introductory infinitive phrase "To evaluate whether the drought-tolerant millet landrace was commercially viable" expresses an intentional goal. The subject immediately following the comma must be the conscious agent capable of evaluating: "the agronomy collective".',
        whyCorrect: 'The intentional actor ("the agronomy collective") immediately follows the introductory goal phrase.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Choice A', whyWrong: 'Dangling modifier; an "agricultural field trial" cannot consciously evaluate crop viability.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Choice B', whyWrong: 'Correct answer.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Choice C', whyWrong: 'Dangling modifier; "cultivation" cannot evaluate viability.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Choice D', whyWrong: 'Dangling modifier; "harvest yields" cannot evaluate viability.' }
        ]
      }
    },
    {
      questionNumber: 74,
      id: 'ex6-q74',
      difficulty: 'Intermediate',
      skillTag: 'Participial Review Modifier',
      prompt: 'While examining seventeenth-century commercial ledgers in the municipal archives, ___',
      options: [
        'a forgotten bilateral trade treaty between Genoa and Lisbon was uncovered.',
        'the economic historian discovered a forgotten bilateral trade treaty between Genoa and Lisbon.',
        'the discovery of a forgotten bilateral trade treaty between Genoa and Lisbon occurred.',
        'two merchant republics\' bilateral trade treaty was uncovered.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The introductory phrase "While examining seventeenth-century commercial ledgers in the municipal archives" describes an ongoing action. The person examining the archives must be the grammatical subject immediately following the comma: "the economic historian".',
        whyCorrect: 'Places the researcher ("the economic historian") immediately after the introductory temporal participle.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Choice A', whyWrong: 'Dangling modifier; a "treaty" cannot examine commercial ledgers.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Choice B', whyWrong: 'Correct answer.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Choice C', whyWrong: 'Dangling modifier; "the discovery" cannot examine ledgers.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Choice D', whyWrong: 'Dangling modifier; "trade treaty" cannot examine ledgers.' }
        ]
      }
    },
    {
      questionNumber: 75,
      id: 'ex6-q75',
      difficulty: 'Intermediate',
      skillTag: 'Passive Built Modifier',
      prompt: 'Constructed more than three centuries ago to divert seasonal torrential runoff, ___',
      options: [
        'the stone aqueduct continues to supply fresh mountain water to the surrounding agricultural terraces.',
        'regional municipal engineers restored the ancient stone aqueduct.',
        'the restoration of the ancient stone aqueduct was finalized by municipal workers.',
        'mountain water continues to flow through the efforts of municipal workers.'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The introductory past participial modifier "Constructed more than three centuries ago to divert seasonal torrential runoff" describes a physical structure. The noun immediately following the comma must be what was constructed: "the stone aqueduct".',
        whyCorrect: 'Places the constructed structure ("the stone aqueduct") directly after the introductory modifier.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Choice A', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Choice B', whyWrong: 'Dangling modifier; illogically implies that "regional municipal engineers" were constructed three centuries ago.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Choice C', whyWrong: 'Dangling modifier; "the restoration" was not constructed three centuries ago.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Choice D', whyWrong: 'Dangling modifier; "mountain water" was not constructed.' }
        ]
      }
    }
  ]
};

export const EXERCISE_BLOCK_7: WritingExerciseBlock = {
  blockNumber: 7,
  title: 'Exercise Set 7 — Comprehensive SAT Mastery (Qs 76–90)',
  description: 'Mixed practice covering independent boundaries, colons, sub-verb agreement, and modifier placement.',
  questions: [
    {
      questionNumber: 76,
      id: 'ex7-q76',
      difficulty: 'Intermediate',
      skillTag: 'Semicolon Independent Clauses',
      prompt: 'Epigraphers cataloged stone inscriptions across four ancient temple portals ___ each relief exhibited distinctive stylistic signatures from the Hellenistic period.',
      options: ["compounds,","compounds:","compounds;","compounds and"],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Both sides are complete independent clauses: "Epigraphers cataloged stone inscriptions..." and "each relief exhibited distinctive stylistic signatures...". Without a coordinating conjunction, a semicolon is the correct mark to separate them.',
        whyCorrect: 'A semicolon correctly connects two complete independent clauses without a conjunction.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: ',', whyWrong: 'A comma alone between independent clauses creates a comma splice.' },
          { optionIndex: 1, optionLabel: 'B', optionText: ';', whyWrong: 'Correct answer.' },
          { optionIndex: 2, optionLabel: 'C', optionText: ':', whyWrong: 'A colon is less standard here because the second clause presents a parallel observation rather than an explicit definition of the cataloging process.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'and', whyWrong: 'Using "and" without a preceding comma results in a run-on sentence.' }
        ]
      }
    },
    {
      questionNumber: 77,
      id: 'ex7-q77',
      difficulty: 'Intermediate',
      skillTag: 'Comma + But Contrast',
      prompt: 'Aeronautical engineers anticipated that the composite titanium wing spar would deform under supersonic flutter ___ it maintained complete structural rigidity throughout the wind-tunnel simulations.',
      options: [', but', ', however', '; but', 'because'],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Both clauses are independent and express strong contrast between the expected deformation and the actual rigidity. A comma followed by the coordinating conjunction "but" (, but) is the correct structure.',
        whyCorrect: 'Comma + "but" links two contrasting independent clauses.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: ', but', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: ', however', whyWrong: 'Produces a comma splice.' },
          { optionIndex: 2, optionLabel: 'C', optionText: '; but', whyWrong: 'Semicolon plus "but" is redundant and nonstandard.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'because', whyWrong: 'Asserts an illogical cause-and-effect relationship.' }
        ]
      }
    },
    {
      questionNumber: 78,
      id: 'ex7-q78',
      difficulty: 'Foundation',
      skillTag: 'Colon List Setup',
      prompt: 'The museum numismatist acquired three rare classical coins for the permanent gallery ___ an Athenian silver tetradrachm, a Corinthian stater, and an Etruscan bronze coin.',
      options: ["elements,","elements;","elements:","elements and"],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The lead clause ("The museum numismatist acquired three rare classical coins for the permanent gallery") is a complete independent clause. A colon correctly introduces the direct 3-item list that specifies those coins.',
        whyCorrect: 'A colon introduces a list of items after a complete independent clause.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: ':', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: ';', whyWrong: 'A semicolon cannot precede a series of noun phrases.' },
          { optionIndex: 2, optionLabel: 'C', optionText: ',', whyWrong: 'A colon is standard and preferable after a full introductory clause.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'and', whyWrong: 'Leaves the list grammatically disconnected from the preceding clause.' }
        ]
      }
    },
    {
      questionNumber: 79,
      id: 'ex7-q79',
      difficulty: 'Foundation',
      skillTag: 'No Colon After Preposition',
      prompt: 'The environmental law tribunal conducted formal evidentiary hearings in ___ Geneva, Switzerland; Nairobi, Kenya; and The Hague, Netherlands.',
      options: ["jurisdiction","jurisdiction:","jurisdiction,","jurisdiction;"],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The preposition "in" directly governs the series of geographic locations. In standard formal English, no punctuation mark (neither a colon nor a comma) may ever separate a preposition from its grammatical object list.',
        whyCorrect: 'No punctuation is allowed between a preposition and its object series.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'no punctuation', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: ':', whyWrong: 'A colon cannot directly follow a preposition.' },
          { optionIndex: 2, optionLabel: 'C', optionText: ',', whyWrong: 'An ungrammatical comma separating a preposition from its objects.' },
          { optionIndex: 3, optionLabel: 'D', optionText: ';', whyWrong: 'A semicolon requires a complete independent clause on both sides.' }
        ]
      }
    },
    {
      questionNumber: 80,
      id: 'ex7-q80',
      difficulty: 'Foundation',
      skillTag: 'Introductory Although Clause',
      prompt: 'Although the papyrus scroll was heavily carbonized during the ancient volcanic eruption ___ epigraphers deciphered most of the philosophical treatise using phase-contrast tomography.',
      options: ["materials,","materials;","materials:","materials and"],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The sentence opens with an introductory dependent clause introduced by "Although". An introductory dependent clause must be followed by a comma before the main independent clause.',
        whyCorrect: 'A comma separates the introductory dependent clause from the main clause.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: ',', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: ';', whyWrong: 'A semicolon cannot follow a dependent clause.' },
          { optionIndex: 2, optionLabel: 'C', optionText: ':', whyWrong: 'A colon cannot follow an introductory dependent clause.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'and', whyWrong: 'Adding "and" leaves the sentence without an independent main clause.' }
        ]
      }
    },
    {
      questionNumber: 81,
      id: 'ex7-q81',
      difficulty: 'Foundation',
      skillTag: 'Independent Clause Semicolon',
      prompt: 'The chamber orchestra’s inaugural performance of the baroque concerto received mixed reviews from local critics ___ the ensemble’s subsequent international studio recording was awarded the Grand Prix du Disque.',
      options: [';', ',', 'because', 'although'],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Both sides of the boundary are complete independent clauses: "The chamber orchestra’s inaugural performance... received mixed reviews..." and "the ensemble’s subsequent international studio recording was awarded...". A semicolon correctly connects them without an intervening coordinating conjunction.',
        whyCorrect: 'A semicolon cleanly separates two complete independent clauses.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: ';', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: ',', whyWrong: 'Creates a comma splice.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'because', whyWrong: 'Asserts an illogical cause-and-effect relationship.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'although', whyWrong: 'Using "although" without a semicolon creates an unpunctuated run-on clause error.' }
        ]
      }
    },
    {
      questionNumber: 82,
      id: 'ex7-q82',
      difficulty: 'Intermediate',
      skillTag: 'Nonessential Relative Commas',
      prompt: 'The physician and astronaut Dr. Mae Jemison ___ orbited Earth aboard the space shuttle Endeavour.',
      options: [
        ', who joined NASA\'s astronaut corps in 1987,',
        'who joined NASA\'s astronaut corps in 1987',
        '; who joined NASA\'s astronaut corps in 1987;',
        ': who joined NASA\'s astronaut corps in 1987,'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The core sentence is "The physician and astronaut Dr. Mae Jemison orbited Earth aboard the space shuttle Endeavour." The relative clause "who joined NASA\'s astronaut corps in 1987" is nonessential information and must be enclosed in a matching pair of commas.',
        whyCorrect: 'A matching pair of commas encloses the nonessential relative clause.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: ', who joined NASA\'s astronaut corps in 1987,', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'who joined NASA\'s astronaut corps in 1987', whyWrong: 'Omits required commas around a nonessential relative clause.' },
          { optionIndex: 2, optionLabel: 'C', optionText: '; who joined NASA\'s astronaut corps in 1987;', whyWrong: 'Semicolons cannot enclose mid-sentence modifying clauses.' },
          { optionIndex: 3, optionLabel: 'D', optionText: ': who joined NASA\'s astronaut corps in 1987,', whyWrong: 'A colon cannot serve as the opening punctuation for an interrupting clause.' }
        ]
      }
    },
    {
      questionNumber: 83,
      id: 'ex7-q83',
      difficulty: 'Intermediate',
      skillTag: 'Essential Appositive Logic',
      prompt: 'The investigative journalist Ida B. Wells documented civil rights violations across the American South in the late nineteenth century. Why are no commas placed around "Ida B. Wells" in the phrase "The investigative journalist Ida B. Wells"?',
      options: [
        '"Ida B. Wells" is an essential appositive identifying which specific investigative journalist is meant.',
        '"Investigative journalist" functions as an adjective and cannot precede a comma.',
        'Proper nouns never take commas in formal English writing.',
        '"Ida B. Wells" is a dependent clause functioning as the grammatical subject.'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The phrase "investigative journalist" is a general occupation noun that applies to many individuals. The proper name "Ida B. Wells" is essential restrictive information that identifies which specific journalist is under discussion. Essential appositives take no commas.',
        whyCorrect: 'Essential appositives restricting and identifying a general noun take no commas.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Choice A', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Choice B', whyWrong: 'Factually inaccurate; "investigative journalist" is a noun phrase in an appositive structure.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Choice C', whyWrong: 'False; nonessential proper nouns routinely take commas.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Choice D', whyWrong: 'Ida B. Wells is a proper noun phrase, not a clause.' }
        ]
      }
    },
    {
      questionNumber: 84,
      id: 'ex7-q84',
      difficulty: 'Intermediate',
      skillTag: 'Plural Findings Agreement',
      prompt: 'The epidemiological findings published in the medical journal ___ generated widespread acclaim among international public health authorities.',
      options: ["has shown","have shown","is showing","was showing"],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The subject head noun is "findings" (plural). The past participial phrase "published in the medical journal" does not change the subject\'s grammatical number. A plural subject requires the plural present perfect auxiliary verb "have".',
        whyCorrect: 'The plural subject "findings" matches the plural verb "have".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'has', whyWrong: 'Singular verb.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'have', whyWrong: 'Correct answer.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'is', whyWrong: 'Singular verb.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'was', whyWrong: 'Singular past verb.' }
        ]
      }
    },
    {
      questionNumber: 85,
      id: 'ex7-q85',
      difficulty: 'Intermediate',
      skillTag: 'Group Singular Agreement',
      prompt: 'A multidisciplinary team of volcanologists from several geological institutes ___ currently conducting seismic tomography surveys near the caldera.',
      options: ['remains actively', 'remain actively', 'are actively', 'have been actively'],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The head noun of the subject is "team" (singular collective noun). The intervening prepositional phrases ("of volcanologists" and "from several geological institutes") contain plural nouns that do not control the verb. The singular subject "team" requires the singular verb "remains".',
        whyCorrect: 'The singular collective noun "team" requires the singular verb "remains actively".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'remains actively', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'remain actively', whyWrong: 'Plural verb error induced by the plural object "volcanologists".' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'are actively', whyWrong: 'Plural present verb.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'have been actively', whyWrong: 'Plural present perfect verb.' }
        ]
      }
    },
    {
      questionNumber: 86,
      id: 'ex7-q86',
      difficulty: 'Hard',
      skillTag: 'Inverted Subject-Verb Agreement',
      prompt: 'Along the rocky southern perimeter of the wildlife sanctuary ___ three observation towers and an automated weather telemetry station.',
      options: ["has stood","is standing","stand firmly","stands firmly"],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'This is an inverted sentence where the prepositional phrase ("Along the rocky southern perimeter of the wildlife sanctuary") precedes the verb. The true grammatical subject follows the verb: "three observation towers and an automated weather telemetry station" (a plural compound subject joined by "and"). A plural subject requires the plural base verb "stand".',
        whyCorrect: 'The plural compound subject ("three observation towers and an automated...") agrees with the plural verb "stand".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'stand', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'stands', whyWrong: 'Singular verb fails to agree with the compound plural subject.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'is standing', whyWrong: 'Singular progressive verb.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'has stood', whyWrong: 'Singular perfect verb.' }
        ]
      }
    },
    {
      questionNumber: 87,
      id: 'ex7-q87',
      difficulty: 'Intermediate',
      skillTag: 'Neither...Nor Closest Assistive Tense',
      prompt: 'Neither the chief archivist nor her preservation assistants ___ expected such extraordinary public interest in the medieval illuminated manuscript exhibition.',
      options: ['had', 'has', 'is', 'was'],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'With "neither... nor", the verb agrees with the closer subject: "preservation assistants" (plural). In the past perfect construction "had expected", "had" correctly serves as the past auxiliary agreeing with plural assistants.',
        whyCorrect: '"had" correctly forms the past perfect tense agreeing with the closer plural subject "assistants".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'had', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'has', whyWrong: 'Singular present perfect verb failing to agree with plural "assistants".' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'is', whyWrong: 'Singular present verb.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'was', whyWrong: 'Singular past verb.' }
        ]
      }
    },
    {
      questionNumber: 88,
      id: 'ex7-q88',
      difficulty: 'Intermediate',
      skillTag: 'Paleontologist Modifier Attachment',
      prompt: 'After analyzing the trace mineral inclusions within the zircon crystals under a mass spectrometer, ___',
      options: ["findings—","findings,","findings;","findings"],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The introductory participial phrase is "After analyzing the trace mineral inclusions within the zircon crystals under a mass spectrometer". The scientist who conducted the analysis must immediately follow the comma: "the geochronologist".',
        whyCorrect: 'Places the actor ("the geochronologist") immediately after the introductory participial phrase.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Choice A', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Choice B', whyWrong: 'Dangling modifier; "crystallization epoch" cannot analyze mineral inclusions.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Choice C', whyWrong: 'Dangling modifier; "zircon crystals" cannot analyze themselves under a spectrometer.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Choice D', whyWrong: 'Dangling modifier; "determination" cannot analyze inclusions.' }
        ]
      }
    },
    {
      questionNumber: 89,
      id: 'ex7-q89',
      difficulty: 'Intermediate',
      skillTag: 'Weather Station Modifier Attachment',
      prompt: 'Situated on an exposed coastal headland buffeted by gale-force ocean winds, ___',
      options: [
        'the automated meteorological station records extreme barometric oscillations during maritime squalls.',
        'meteorologists record extreme barometric oscillations at the automated station during maritime squalls.',
        'extreme barometric oscillations are recorded during maritime squalls.',
        'recording of extreme barometric oscillations occurs during maritime squalls.'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The introductory participial modifier "Situated on an exposed coastal headland buffeted by gale-force ocean winds" describes a physical facility. The subject following the comma must be the facility itself: "the automated meteorological station".',
        whyCorrect: 'Places the facility ("the automated meteorological station") directly after the introductory modifier.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Choice A', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Choice B', whyWrong: 'Dangling modifier; illogically implies that human meteorologists are permanently situated on the exposed rocky headland.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Choice C', whyWrong: 'Dangling modifier; "oscillations" are not situated on a headland.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Choice D', whyWrong: 'Dangling modifier; "recording" is not situated on a headland.' }
        ]
      }
    },
    {
      questionNumber: 90,
      id: 'ex7-q90',
      difficulty: 'Foundation',
      skillTag: 'Three Parameters Colon List',
      prompt: 'The urban microclimate initiative evaluated three primary environmental metrics ___ ground surface albedo, ambient canopy temperature, and evaporative moisture flux.',
      options: ["factors:","factors;","factors,","factors"],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The lead clause ("The urban microclimate initiative evaluated three primary environmental metrics") is a complete independent clause. A colon is the standard punctuation mark to introduce a direct list of items after a complete setup clause.',
        whyCorrect: 'A colon introduces a 3-item list following a complete independent clause.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: ':', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: ';', whyWrong: 'A semicolon cannot precede a list of noun phrases.' },
          { optionIndex: 2, optionLabel: 'C', optionText: ',', whyWrong: 'A colon is standard and preferable after a complete setup clause.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'no punctuation', whyWrong: 'Omits necessary boundary punctuation before the list.' }
        ]
      }
    }
  ]
};

export const EXERCISE_BLOCK_8: WritingExerciseBlock = {
  blockNumber: 8,
  title: 'Exercise Set 8 — Final Master Review & Verification (Qs 91–100)',
  description: 'Final comprehensive evaluation across all sentence structure, punctuation, transition, and agreement concepts.',
  questions: [
    {
      questionNumber: 91,
      id: 'ex8-q91',
      difficulty: 'Intermediate',
      skillTag: 'Solar Flares As a Result',
      prompt: 'Deep-space radar telemetry was severely disrupted by an intense coronal mass ejection. ___, tracking stations across three continents lost communication with the interplanetary probe for seven hours.',
      options: ['As a result', 'However', 'In contrast', 'For instance'],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Sentence 1 describes the cause (severe radar disruption from a coronal mass ejection). Sentence 2 describes the direct consequence (loss of communication with the probe). The logical relationship is cause and effect.',
        whyCorrect: '"As a result" expresses the direct consequence of the solar disruption.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'As a result', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'However', whyWrong: 'No contrast; communication loss is the expected outcome of severe telemetry disruption.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'In contrast', whyWrong: 'No comparison between contrasting entities.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'For instance', whyWrong: 'Losing communication is a direct result, not an example of a coronal mass ejection.' }
        ]
      }
    },
    {
      questionNumber: 92,
      id: 'ex8-q92',
      difficulty: 'Intermediate',
      skillTag: 'Nevertheless Disproof',
      prompt: 'The original linguistic hypothesis regarding early agricultural dispersal appeared plausible based on vocabulary cognates. ___, subsequent high-resolution ancient genomic mapping refuted its fundamental chronological timeline.',
      options: ['Nevertheless', 'Furthermore', 'Consequently', 'Similarly'],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Sentence 1 describes an initial impression (the hypothesis seemed plausible). Sentence 2 presents conclusive counter-evidence that disproved it (genomic mapping refuted the timeline). The relationship is concession/contrast.',
        whyCorrect: '"Nevertheless" signals a contradictory development that refutes an earlier premise.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Nevertheless', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Furthermore', whyWrong: 'Fails to express the contrast between initial plausibility and ultimate disproof.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Consequently', whyWrong: 'Initial plausibility did not cause the later genomic refutation.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Similarly', whyWrong: 'Refutation is not similar to plausibility.' }
        ]
      }
    },
    {
      questionNumber: 93,
      id: 'ex8-q93',
      difficulty: 'Foundation',
      skillTag: 'Cities Colon Setup',
      prompt: 'The architectural historian surveyed Renaissance civic loggias across three historic European cities ___ Florence, Italy; Seville, Spain; and Antwerp, Belgium.',
      options: ["frequencies,","frequencies;","frequencies:","frequencies and"],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The clause "The architectural historian surveyed Renaissance civic loggias across three historic European cities" is a complete independent clause. A colon correctly introduces the series of three cities.',
        whyCorrect: 'A colon introduces a complex list after a complete independent clause.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: ':', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: ';', whyWrong: 'A semicolon cannot introduce a list of noun phrases.' },
          { optionIndex: 2, optionLabel: 'C', optionText: ',', whyWrong: 'A comma creates ambiguity when the subsequent list elements already contain internal commas.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'and', whyWrong: 'Fails to provide the required structural punctuation.' }
        ]
      }
    },
    {
      questionNumber: 94,
      id: 'ex8-q94',
      difficulty: 'Intermediate',
      skillTag: 'Complex List Semicolon Rationale',
      prompt: 'The international biodiversity summit brought together leading conservation biologists from Manaus, Brazil; Nairobi, Kenya; and Hobart, Australia. Why are semicolons used between the locations in this sentence?',
      options: [
        'To separate complete independent clauses that lack conjunctions.',
        'To separate list items that already contain internal commas, preventing confusion.',
        'To indicate dramatic rhetorical pauses in the sentence.',
        'To introduce nonessential parenthetical clauses.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Each item in the list consists of a city and its country separated by an internal comma ("Manaus, Brazil"). To prevent misreading where commas separate both cities from countries and items from each other, standard English uses semicolons as the major separators between items.',
        whyCorrect: 'Semicolons separate major list elements containing internal commas.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Choice A', whyWrong: 'The list items are proper noun phrases, not independent clauses.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Choice B', whyWrong: 'Correct answer.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Choice C', whyWrong: 'Punctuation on the SAT is governed by grammatical syntax, not rhetorical pauses.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Choice D', whyWrong: 'The phrases are list items, not parenthetical clauses.' }
        ]
      }
    },
    {
      questionNumber: 95,
      id: 'ex8-q95',
      difficulty: 'Intermediate',
      skillTag: 'Discovery Has Provided Agreement',
      prompt: 'The stratigraphic excavation of several Paleolithic flint handaxes along the river terrace ___ provided compelling evidence of seasonal hominid foraging camps.',
      options: ["are present","has been present","have been present","were present"],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The simple grammatical subject is "excavation" (singular). The prepositional phrases "of several Paleolithic flint handaxes" and "along the river terrace" contain plural nouns ("handaxes") that do not alter the subject\'s number. A singular subject requires the singular auxiliary verb "has".',
        whyCorrect: 'The singular subject "excavation" matches the singular verb "has".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'has', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'have', whyWrong: 'Plural verb error distracted by the plural noun "handaxes".' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'are', whyWrong: 'Plural present verb.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'were', whyWrong: 'Plural past verb.' }
        ]
      }
    },
    {
      questionNumber: 96,
      id: 'ex8-q96',
      difficulty: 'Intermediate',
      skillTag: 'Plural Subject Agreement',
      prompt: 'The acoustic resonance dampening panels installed across the concert hall ceiling ___ engineered from high-density basalt fiber.',
      options: ['were precision', 'was precision', 'is precision', 'has been precision'],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The head noun of the subject is "panels" (plural). The participial modifier "installed across the concert hall ceiling" does not alter the subject\'s grammatical number. A plural subject requires the plural past verb "were".',
        whyCorrect: 'The plural subject "panels" agrees with the plural verb "were precision".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'were precision', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'was precision', whyWrong: 'Singular past verb.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'is precision', whyWrong: 'Singular present verb.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'has been precision', whyWrong: 'Singular present perfect verb.' }
        ]
      }
    },
    {
      questionNumber: 97,
      id: 'ex8-q97',
      difficulty: 'Intermediate',
      skillTag: 'Curator Catalog Modifier',
      prompt: 'Having spent months cataloging the private epistolary archive of diplomat George Kennan, ___',
      options: [
        'the diplomatic historian drafted a comprehensive biographical monograph.',
        'a comprehensive biographical monograph was drafted by the diplomatic historian.',
        'the biographical monograph was finally completed by the diplomatic historian.',
        'drafting of the biographical monograph took place over several months.'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The introductory modifier is "Having spent months cataloging the private epistolary archive of diplomat George Kennan". The subject immediately following the comma must be the person who spent months cataloging: "the diplomatic historian".',
        whyCorrect: 'Places the researcher ("the diplomatic historian") immediately after the introductory modifier.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Choice A', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Choice B', whyWrong: 'Dangling modifier; a "monograph" cannot catalog letters.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Choice C', whyWrong: 'Dangling modifier; a "monograph" cannot catalog letters.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Choice D', whyWrong: 'Dangling modifier; "drafting" cannot catalog letters.' }
        ]
      }
    },
    {
      questionNumber: 98,
      id: 'ex8-q98',
      difficulty: 'Intermediate',
      skillTag: 'Infinitive Thermal Expansion Goal',
      prompt: 'To minimize parasitic aerodynamic drag across transonic flight regimes, ___',
      options: ["acoustics:","acoustics;","acoustics,","acoustics"],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The introductory infinitive phrase "To minimize parasitic aerodynamic drag across transonic flight regimes" expresses an engineering objective. The entity acting to achieve this objective must immediately follow the comma: "the aerospace engineers".',
        whyCorrect: 'The intentional actors ("the aerospace engineers") immediately follow the introductory goal modifier.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Choice A', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Choice B', whyWrong: 'Dangling modifier; "lightweight carbon composite" cannot consciously seek to minimize drag.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Choice C', whyWrong: 'Dangling modifier; "the wing profile" cannot consciously intend to minimize drag.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Choice D', whyWrong: 'Dangling modifier; "sculpting" cannot intend to minimize drag.' }
        ]
      }
    },
    {
      questionNumber: 99,
      id: 'ex8-q99',
      difficulty: 'Foundation',
      skillTag: 'Report Nonessential Which',
      prompt: 'The investigative report, ___ was published Tuesday by an international maritime consortium, details illicit bunker fuel dumping along major cargo shipping routes.',
      options: ['which', 'that', 'whom', 'whose'],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The clause "___ was published Tuesday by an international maritime consortium" is nonessential, as signaled by the surrounding pair of commas. For nonessential relative clauses modifying an inanimate object ("report"), standard English requires the relative pronoun "which".',
        whyCorrect: '"Which" correctly introduces a nonessential relative clause enclosed in commas.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'which', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'that', whyWrong: '"That" is not used in nonessential relative clauses set off by commas.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'whom', whyWrong: '"Whom" refers exclusively to persons, not inanimate reports.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'whose', whyWrong: '"Whose" indicates possession.' }
        ]
      }
    },
    {
      questionNumber: 100,
      id: 'ex8-q100',
      difficulty: 'Foundation',
      skillTag: 'Collar Essential That',
      prompt: 'The satellite telemetry tracking collar ___ was attached to the female snow leopard in March has transmitted hundreds of high-altitude GPS coordinates.',
      options: ["parameters:","parameters;","parameters,","parameters"],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The relative clause is essential (restrictive) to identify which tracking collar is being discussed and is not enclosed by commas. In standard English on the SAT, "that" is the correct pronoun for essential restrictive clauses referring to an inanimate device.',
        whyCorrect: '"That" introduces an essential restrictive clause without commas.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'that', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'which', whyWrong: '"Which" without commas for restrictive clauses is nonstandard on the SAT.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'whom', whyWrong: '"Whom" is used for persons.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'whose', whyWrong: '"Whose" is possessive.' }
        ]
      }
    }
  ],
  scoreGuide: [
    { range: '9–10 correct', status: 'Mastery Level: Outstanding grasp of SAT Writing sentence boundaries and mechanics.' },
    { range: '7–8 correct', status: 'Advanced Level: Minor refinement needed on edge-case modifiers or lists.' },
    { range: '5–6 correct', status: 'Proficient Level: Strong basics; review complex multi-clause rules.' },
    { range: '0–4 correct', status: 'Foundational Level: Review Theory Blocks 1–22 thoroughly before re-testing.' }
  ]
};
