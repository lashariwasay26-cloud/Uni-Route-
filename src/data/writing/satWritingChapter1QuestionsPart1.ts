import { WritingExerciseBlock } from './satWritingTypes';

export const EXERCISE_BLOCK_1: WritingExerciseBlock = {
  blockNumber: 1,
  title: 'Exercise Set 1 — Core Sentence Boundaries (Qs 1–15)',
  description: 'Independent clauses, compound verbs vs. compound clauses, semicolons, conjunctive adverbs, dependent clauses, mixed boundary challenge, and mini elite drill.',
  questions: [
    {
      questionNumber: 1,
      id: 'ex1-q1',
      difficulty: 'Foundation',
      skillTag: 'Independent Clause Connection',
      prompt: 'Early commodity analysts forecast that the sudden surge in domestic copper extraction would suppress spot market prices ___ elevated overseas infrastructure demand absorbed the excess supply within weeks.',
      options: [', however', ', but', '; whereas', 'because'],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Both the preceding clause ("Early commodity analysts forecast...") and the succeeding clause ("elevated overseas infrastructure demand absorbed...") are complete independent clauses. The logical relationship between the predicted price drop and the actual market absorption is contrast. A comma followed by the coordinating conjunction "but" correctly links two independent clauses.',
        beforeAndAfterAnalysis: {
          before: 'Early commodity analysts forecast that the sudden surge in domestic copper extraction would suppress spot market prices. (Independent Clause)',
          after: 'elevated overseas infrastructure demand absorbed the excess supply within weeks. (Independent Clause)'
        },
        whyCorrect: 'A comma followed by "but" (one of the FANBOYS coordinating conjunctions) is standard punctuation for connecting two independent clauses showing contrast.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: ', however', whyWrong: '"However" is a conjunctive adverb, not a coordinating conjunction; joining two independent clauses with only a comma and "however" creates an ungrammatical comma splice.' },
          { optionIndex: 1, optionLabel: 'B', optionText: ', but', whyWrong: 'Correct answer.' },
          { optionIndex: 2, optionLabel: 'C', optionText: '; whereas', whyWrong: '"Whereas" creates a subordinating dependent clause; placing a semicolon before a dependent clause is grammatically incorrect.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'because', whyWrong: '"Because" establishes an incorrect cause-and-effect relationship rather than the necessary contrast.' }
        ],
        eliminationShortcut: 'Independent Clause + comma + FANBOYS (but) + Independent Clause correctly signals contrast.'
      }
    },
    {
      questionNumber: 2,
      id: 'ex1-q2',
      difficulty: 'Foundation',
      skillTag: 'Independent Clause Connection',
      prompt: 'High-speed motion capture revealed subtle knee misalignments during rapid sprint deceleration ___ athletic trainers restructured the squad\'s plyometric conditioning regimen.',
      options: ['; so,', ', so', ', because', 'no punctuation'],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Clause 1 ("High-speed motion capture revealed subtle knee misalignments...") states a cause, and Clause 2 ("athletic trainers restructured the squad\'s plyometric conditioning regimen") states the resulting action. Because both are independent clauses, comma + "so" correctly establishes the coordinate result relationship.',
        whyCorrect: 'Comma + "so" links two independent clauses and conveys cause and effect.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: '; so,', whyWrong: 'A semicolon followed by "so," is redundant and nonstandard for coordinating conjunctions.' },
          { optionIndex: 1, optionLabel: 'B', optionText: ', so', whyWrong: 'Correct answer.' },
          { optionIndex: 2, optionLabel: 'C', optionText: ', because', whyWrong: '"Because" reverses the causal sequence, falsely stating that the discovery happened because of the trainers\' later restructuring.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'no punctuation', whyWrong: 'Omitting punctuation between two independent clauses creates a fused run-on sentence.' }
        ]
      }
    },
    {
      questionNumber: 3,
      id: 'ex1-q3',
      difficulty: 'Intermediate',
      skillTag: 'Compound Predicate vs. Clause',
      prompt: 'The investigative financial reporter reviewed five years of municipal procurement ledgers ___ uncovered systemic irregularities in the city\'s commercial zoning contracts.',
      options: [', and she', '; she', 'and', ', but'],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'The sentence features a single subject ("The investigative financial reporter") performing two coordinated actions: "reviewed" and "uncovered". Because the second verb does not have its own separate subject noun or pronoun, this is a compound predicate within one independent clause.',
        whyCorrect: 'In a simple compound predicate (Subject + Verb 1 and Verb 2), no comma or redundant pronoun is used before "and".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: ', and she', whyWrong: 'Unnecessarily injects a second subject pronoun ("she") and an unwanted comma into what is naturally a concise single-subject clause.' },
          { optionIndex: 1, optionLabel: 'B', optionText: '; she', whyWrong: 'A semicolon is overly heavy when a simple coordinating conjunction smoothly connects the two verbs.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'and', whyWrong: 'Correct answer.' },
          { optionIndex: 3, optionLabel: 'D', optionText: ', but', whyWrong: '"But" incorrectly asserts contrast where the narrative describes harmonious sequential discovery, and the comma before a compound predicate is an error.' }
        ],
        eliminationShortcut: 'Same subject + two verbs joined by and -> no comma before "and".'
      }
    },
    {
      questionNumber: 4,
      id: 'ex1-q4',
      difficulty: 'Intermediate',
      skillTag: 'Compound Clause Connection',
      prompt: 'The lead network engineer configured redundant failover protocols across three regional data centers ___ her team monitored packet routing latency throughout the system upgrade.',
      options: ['and', ';', ', and', ', while'],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'Before the blank is an independent clause ("The lead network engineer configured..."). After the blank is a distinct independent clause with its own subject and verb ("her team monitored..."). Connecting two independent clauses with "and" requires a preceding comma.',
        whyCorrect: 'A comma followed by "and" correctly joins two independent clauses expressing complementary actions.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'and', whyWrong: 'Using "and" without a comma between two independent clauses creates a run-on coordination error.' },
          { optionIndex: 1, optionLabel: 'B', optionText: ';', whyWrong: 'While a semicolon can separate independent clauses, the collaborative addition between the engineer and her team is more naturally expressed with ", and".' },
          { optionIndex: 2, optionLabel: 'C', optionText: ', and', whyWrong: 'Correct answer.' },
          { optionIndex: 3, optionLabel: 'D', optionText: ', while', whyWrong: '"While" introduces ambiguity regarding time versus concession and subordinates the second clause unnecessarily.' }
        ]
      }
    },
    {
      questionNumber: 5,
      id: 'ex1-q5',
      difficulty: 'Intermediate',
      skillTag: 'Semicolons',
      prompt: 'The municipal housing department prioritized mixed-income apartment developments in central transit corridors ___ suburban zoning commissions favored low-density single-family subdivisions.',
      options: [';', ', whereas', ', however', ': and'],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Both sides of the boundary are grammatically independent clauses with parallel syntactic structures. A semicolon is the standard punctuation mark to link two closely related, balanced independent clauses without a coordinating conjunction.',
        whyCorrect: 'A semicolon cleanly separates two independent clauses without needing coordinating conjunctions.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: ';', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: ', whereas', whyWrong: '"Whereas" turns the second clause into a subordinate fragment when paired with the overarching parallel discourse.' },
          { optionIndex: 2, optionLabel: 'C', optionText: ', however', whyWrong: 'Using only a comma before "however" between two independent clauses produces a comma splice.' },
          { optionIndex: 3, optionLabel: 'D', optionText: ': and', whyWrong: 'A colon plus "and" is an ungrammatical combination.' }
        ]
      }
    },
    {
      questionNumber: 6,
      id: 'ex1-q6',
      difficulty: 'Intermediate',
      skillTag: 'Conjunctive Adverbs',
      prompt: 'Offshore wind turbines generate substantial electrical output during sustained coastal gales ___ however, continuous exposure to saline moisture accelerates mechanical wear on the turbine blades.',
      options: [',', '—', ';', 'and'],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'The word "however" is functioning as a conjunctive adverb introducing the second independent clause. When a conjunctive adverb connects two independent clauses, it must be preceded by a semicolon (or period) and followed by a comma.',
        whyCorrect: 'A semicolon before "however," correctly establishes the boundary between the two independent clauses.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: ',', whyWrong: 'Placing a comma before "however," creates a comma splice between two independent clauses.' },
          { optionIndex: 1, optionLabel: 'B', optionText: '—', whyWrong: 'An em dash does not replace the semicolon required before a formal transitional adverb introducing an independent clause.' },
          { optionIndex: 2, optionLabel: 'C', optionText: ';', whyWrong: 'Correct answer.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'and', whyWrong: 'Writing "and however," is redundant and structurally improper in formal writing.' }
        ]
      }
    },
    {
      questionNumber: 7,
      id: 'ex1-q7',
      difficulty: 'Foundation',
      skillTag: 'Introductory Dependent Clause',
      prompt: 'Although the regional air carrier added twenty weekly flights between secondary industrial hubs ___ severe winter blizzards disrupted flight operations across the entire route network.',
      options: [';', 'and', 'no punctuation', ','],
      correctAnswer: 3,
      explanation: {
        coreReasoning: 'The sentence opens with a subordinating conjunction ("Although"), making "Although the regional air carrier added twenty weekly flights between secondary industrial hubs" an introductory dependent clause. An introductory dependent clause must be followed by a comma before the main independent clause.',
        whyCorrect: 'A comma separates an introductory dependent clause from the main clause.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: ';', whyWrong: 'A semicolon requires an independent clause on both sides; it cannot separate a dependent clause from an independent clause.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'and', whyWrong: 'Adding "and" leaves the entire sentence without an independent main clause, resulting in a fragment.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'no punctuation', whyWrong: 'Failing to place a comma after an introductory dependent clause causes a boundary error.' },
          { optionIndex: 3, optionLabel: 'D', optionText: ',', whyWrong: 'Correct answer.' }
        ]
      }
    },
    {
      questionNumber: 8,
      id: 'ex1-q8',
      difficulty: 'Foundation',
      skillTag: 'Trailing Dependent Clause',
      prompt: 'Conservation biologists documented a noticeable recovery in native brook trout populations throughout the river valley ___ because reduced agricultural runoff improved dissolved oxygen levels in the headwaters.',
      options: ['no punctuation', ',', ';', ':'],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The independent main clause ("Conservation biologists documented...") is followed by a restrictive dependent clause introduced by the subordinating conjunction "because". In standard English grammar, when a dependent causal clause follows the main clause, no punctuation is used.',
        whyCorrect: 'No comma or other punctuation mark is used before an essential trailing "because" clause.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'no punctuation', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: ',', whyWrong: 'A comma before an essential causal clause is unnecessary and incorrect.' },
          { optionIndex: 2, optionLabel: 'C', optionText: ';', whyWrong: 'A semicolon cannot precede a dependent clause.' },
          { optionIndex: 3, optionLabel: 'D', optionText: ':', whyWrong: 'A colon cannot directly precede a subordinating conjunction introducing a cause.' }
        ]
      }
    },
    {
      questionNumber: 9,
      id: 'ex1-q9',
      difficulty: 'Advanced',
      skillTag: 'Mixed Boundary Challenge',
      prompt: 'The state environmental commission initially denied the timber company\'s harvesting permit ___ after independent hydrologists verified that riparian buffer zones would remain undisturbed, the commission approved the revised application.',
      options: [', but', ';', 'since', 'no punctuation'],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Before the blank is a complete independent clause ("The state environmental commission initially denied..."). After the blank is a second independent clause that begins with its own introductory dependent clause ("after independent hydrologists verified..., the commission approved..."). A semicolon is the precise punctuation mark required to separate the two major independent units.',
        whyCorrect: 'A semicolon separates two independent clauses where the second clause contains an internal introductory modifier.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: ', but', whyWrong: 'While "but" expresses contrast, placing ", but" directly before an "after" clause creates an awkward double-connector construction without a strong major boundary.' },
          { optionIndex: 1, optionLabel: 'B', optionText: ';', whyWrong: 'Correct answer.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'since', whyWrong: '"Since" corrupts the chronological relationship and leaves the first statement floating without a proper clause boundary.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'no punctuation', whyWrong: 'Creates a fused run-on sentence between two independent thoughts.' }
        ]
      }
    },
    {
      questionNumber: 10,
      id: 'ex1-q10',
      difficulty: 'Elite',
      skillTag: 'Elite Multi-Layer Boundary',
      prompt: 'The novel ceramic-matrix composite exhibited superior heat tolerance during initial turbine combustion tests ___ in high-moisture operating environments, however, the material suffered rapid surface oxidation.',
      options: ["hypothesis,","hypothesis;","hypothesis:","hypothesis and"],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'Clause 1 ("The novel ceramic-matrix composite exhibited...") is independent. Clause 2 ("in high-moisture operating environments, however, the material suffered...") is also an independent clause featuring an introductory prepositional phrase and an embedded parenthetical conjunctive adverb ("however"). The major boundary between the two independent sentences requires a semicolon.',
        whyCorrect: 'A semicolon separates the two complete independent clauses, preventing the internal commas of the second clause from creating a splice.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: ',', whyWrong: 'Using a comma here creates a severe comma splice, especially confusing given the multiple commas in the second clause.' },
          { optionIndex: 1, optionLabel: 'B', optionText: ':', whyWrong: 'A colon is inappropriate because the second clause does not explain or enumerate the first; it presents a contrasting operational condition.' },
          { optionIndex: 2, optionLabel: 'C', optionText: ';', whyWrong: 'Correct answer.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'and', whyWrong: 'Lacks a comma and fails to handle the structural contrast introduced by the embedded "however".' }
        ]
      }
    },
    {
      questionNumber: 11,
      id: 'ex1-q11',
      difficulty: 'Intermediate',
      skillTag: 'Mini Elite Drill 1',
      prompt: 'Early literary reviews dismissed the modernist novella as fragmented and emotionally distant ___ contemporary critics regard its elliptical narrative structure as a masterpiece of psychological realism.',
      options: ['; yet,', ', yet', ', however,', 'because'],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Both statements are complete independent clauses. The rhetorical relationship is sharp contrast between past reception and modern assessment. The coordinating conjunction "yet" preceded by a comma (, yet) functions as a FANBOYS conjunction to join independent clauses.',
        whyCorrect: 'Comma + "yet" coordinates two independent clauses expressing contrast.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: '; yet,', whyWrong: '"Yet" is a coordinating conjunction; it should not be punctuated like a conjunctive adverb with both a preceding semicolon and a following comma.' },
          { optionIndex: 1, optionLabel: 'B', optionText: ', yet', whyWrong: 'Correct answer.' },
          { optionIndex: 2, optionLabel: 'C', optionText: ', however,', whyWrong: 'Creates a comma splice between two independent clauses.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'because', whyWrong: 'Distorts the meaning by suggesting that past dismissal caused contemporary praise.' }
        ]
      }
    },
    {
      questionNumber: 12,
      id: 'ex1-q12',
      difficulty: 'Intermediate',
      skillTag: 'Mini Elite Drill 2',
      prompt: 'Automatic enrollment features in corporate retirement plans significantly increased baseline employee savings rates ___ human resource directors nationwide rapidly adopted the default contribution model.',
      options: [', so', '; so,', ', because', ': so'],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The first clause describes an empirical success (higher savings rates), and the second clause describes the resulting widespread adoption by HR directors. Comma + "so" is the standard coordinating conjunction structure for cause-to-effect clause connections.',
        whyCorrect: 'Comma + "so" connects two independent clauses showing consequence.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: ', so', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: '; so,', whyWrong: 'Punctuation error; "so" as a coordinating conjunction does not take a semicolon before and a comma after.' },
          { optionIndex: 2, optionLabel: 'C', optionText: ', because', whyWrong: 'Reverses the logical order of cause and effect.' },
          { optionIndex: 3, optionLabel: 'D', optionText: ': so', whyWrong: 'A colon is not paired with coordinating conjunctions.' }
        ]
      }
    },
    {
      questionNumber: 13,
      id: 'ex1-q13',
      difficulty: 'Foundation',
      skillTag: 'Mini Elite Drill 3',
      prompt: 'When art conservators examined the pigments on the fourteenth-century fresco ___ they identified microscopic traces of lapis lazuli indicating the patron\'s immense wealth.',
      options: ["conservators;","conservators and","conservators,","conservators"],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'The sentence begins with the temporal subordinator "When", establishing an introductory dependent clause ("When art conservators examined the pigments on the fourteenth-century fresco"). A comma is required at the end of the dependent clause before the main independent clause.',
        whyCorrect: 'A comma separates the introductory dependent clause from the main clause.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: ';', whyWrong: 'A semicolon cannot follow a dependent clause.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'and', whyWrong: 'Adding "and" creates a sentence fragment with no main independent clause.' },
          { optionIndex: 2, optionLabel: 'C', optionText: ',', whyWrong: 'Correct answer.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'no punctuation', whyWrong: 'Omits the necessary boundary comma between introductory dependent and main clauses.' }
        ]
      }
    },
    {
      questionNumber: 14,
      id: 'ex1-q14',
      difficulty: 'Foundation',
      skillTag: 'Mini Elite Drill 4',
      prompt: 'The open-plan art studio features perimeter glass facades designed to optimize diffuse northern daylight ___ cantilevered timber rafters span the double-height gallery without central support columns.',
      options: [',', 'no punctuation', ';', 'whereas'],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'Two complete independent clauses appear on either side of the blank with no coordinating conjunction. A semicolon is the only punctuation option that can legally separate them without creating a comma splice or run-on.',
        whyCorrect: 'A semicolon connects two complete independent clauses without a conjunction.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: ',', whyWrong: 'A comma alone between two independent clauses creates a comma splice.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'no punctuation', whyWrong: 'Omitting punctuation creates a fused run-on sentence.' },
          { optionIndex: 2, optionLabel: 'C', optionText: ';', whyWrong: 'Correct answer.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'whereas', whyWrong: 'Using "whereas" without preceding punctuation fails to provide the required structural boundary.' }
        ]
      }
    },
    {
      questionNumber: 15,
      id: 'ex1-q15',
      difficulty: 'Intermediate',
      skillTag: 'Mini Elite Drill 5',
      prompt: 'Bioacousticians recorded the vocalizations of the migratory orca pod along the continental shelf, and ___ mapped subtle acoustic dialect shifts across different family lineages.',
      options: ['they', 'recording', 'the pod', 'subsequently'],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Because a comma precedes the coordinating conjunction "and" (, and), the sentence structure demands a complete independent clause after "and". Inserting the subject pronoun "they" creates the necessary second subject to match the verb "mapped".',
        whyCorrect: 'Supplies the required subject pronoun "they" to complete the second independent clause after ", and".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'they', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'recording', whyWrong: 'Creates an ungrammatical participial fragment after ", and".' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'the pod', whyWrong: 'Produces an illogical meaning (the pod did not map its own dialect shifts; the bioacousticians did).' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'subsequently', whyWrong: 'An adverb cannot serve as the subject noun/pronoun required for the clause.' }
        ]
      }
    }
  ]
};

export const EXERCISE_BLOCK_2: WritingExerciseBlock = {
  blockNumber: 2,
  title: 'Exercise Set 2 — Advanced Punctuation & Clause Boundaries (Qs 16–30)',
  description: 'Colons vs. semicolons, colons before lists, single and paired dashes, fragments, relative clauses, and dangling modifiers.',
  questions: [
    {
      questionNumber: 16,
      id: 'ex2-q16',
      difficulty: 'Intermediate',
      skillTag: 'Colon for Explanation',
      prompt: 'The central bank\'s quarterly monetary review presented an unambiguous conclusion ___ persistent wage growth in the service sector was keeping core inflation above target benchmarks.',
      options: [';', ':', ', and', ', however,'],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The first clause ("The central bank\'s quarterly monetary review presented an unambiguous conclusion") is a complete independent clause introducing a specific finding. The second clause specifies and explains what that conclusion is. A colon is the standard punctuation mark used after an independent clause to introduce an explanation or elaboration.',
        whyCorrect: 'A colon correctly introduces the explanation of the conclusion stated in the preceding complete clause.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: ';', whyWrong: 'A semicolon separates independent clauses of equal standing but does not signal an explicit introductory explanation.' },
          { optionIndex: 1, optionLabel: 'B', optionText: ':', whyWrong: 'Correct answer.' },
          { optionIndex: 2, optionLabel: 'C', optionText: ', and', whyWrong: 'A coordinating conjunction treats the explanation as merely an additional fact rather than the content of the conclusion itself.' },
          { optionIndex: 3, optionLabel: 'D', optionText: ', however,', whyWrong: 'The relationship is explanatory specification, not contrast.' }
        ]
      }
    },
    {
      questionNumber: 17,
      id: 'ex2-q17',
      difficulty: 'Intermediate',
      skillTag: 'Colon for Specification',
      prompt: 'Structural engineers identified two primary vulnerabilities in the suspension bridge ___ heavy freight traffic had fatigued the steel expansion joints, and saline air had corroded the primary cable moorings.',
      options: [':', ';', ', however', 'because'],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The lead clause ("Structural engineers identified two primary vulnerabilities in the suspension bridge") is a complete independent clause. The following compound clause explicitly details the two vulnerabilities. A colon is required after a complete setup clause to introduce a specification.',
        whyCorrect: 'A colon introduces the detailed specification of the two vulnerabilities announced in the main clause.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: ':', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: ';', whyWrong: 'A semicolon fails to provide the introductory cataphoric link between "two vulnerabilities" and their explicit listing.' },
          { optionIndex: 2, optionLabel: 'C', optionText: ', however', whyWrong: 'Asserts an illogical contrast relationship.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'because', whyWrong: 'Reverses the descriptive logic.' }
        ]
      }
    },
    {
      questionNumber: 18,
      id: 'ex2-q18',
      difficulty: 'Foundation',
      skillTag: 'Colon Before List',
      prompt: 'The head agricultural buyer sourced heirloom produce exclusively from organic family growers in the valley ___ rainbow chard, purple asparagus, and winter kabocha squash.',
      options: ["valley;","valley and","valley:","valley,"],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'The clause preceding the blank is a grammatically complete independent clause ("The head agricultural buyer sourced heirloom produce exclusively from organic family growers in the valley"). A colon is the standard punctuation mark to introduce a direct list of items after a complete independent clause.',
        whyCorrect: 'A colon introduces a series of items after a complete independent clause.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: ';', whyWrong: 'A semicolon can only separate independent clauses, not an independent clause from a list of noun phrases.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'and', whyWrong: 'Leaves the list structurally unanchored to the preceding clause.' },
          { optionIndex: 2, optionLabel: 'C', optionText: ':', whyWrong: 'Correct answer.' },
          { optionIndex: 3, optionLabel: 'D', optionText: ',', whyWrong: 'A comma alone after a full independent clause is punctuationally weaker and less formal than a colon before an enumerated list.' }
        ]
      }
    },
    {
      questionNumber: 19,
      id: 'ex2-q19',
      difficulty: 'Intermediate',
      skillTag: 'Colon Setup Requirement',
      prompt: 'The university academic council thoroughly evaluated ___ five proposals for interdisciplinary degree programs before approving the strategic curriculum overhaul.',
      options: ["evaluated:","evaluated","evaluated,","evaluated;"],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The verb "evaluated" is a transitive verb that requires its direct object ("five proposals for interdisciplinary degree programs"). No punctuation (neither a colon, comma, nor semicolon) may ever separate a verb directly from its object.',
        whyCorrect: 'No punctuation is allowed between a transitive verb and its direct object noun phrase.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: ':', whyWrong: 'A colon cannot follow an incomplete clause or interrupt a verb-object phrase.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'no punctuation', whyWrong: 'Correct answer.' },
          { optionIndex: 2, optionLabel: 'C', optionText: ',', whyWrong: 'A comma cannot separate a verb from its direct object.' },
          { optionIndex: 3, optionLabel: 'D', optionText: ';', whyWrong: 'A semicolon requires a complete independent clause on both sides.' }
        ]
      }
    },
    {
      questionNumber: 20,
      id: 'ex2-q20',
      difficulty: 'Intermediate',
      skillTag: 'Colon vs. Semicolon',
      prompt: 'Commercial real estate developers cited one overarching incentive for relocating to the riverfront enterprise district ___ municipal property tax abatements substantially reduced initial capital expenditures.',
      options: [';', ', but', ':', 'since'],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'The lead clause sets up "one overarching incentive" as an independent clause. The second clause specifies exactly what that incentive was. A colon is specifically designed to introduce the elaboration or definition of a concept introduced in the first clause.',
        whyCorrect: 'A colon introduces the specific incentive identified in the preceding complete setup clause.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: ';', whyWrong: 'A semicolon separates two independent clauses but lacks the explicit explanatory function signaled by "one overarching incentive".' },
          { optionIndex: 1, optionLabel: 'B', optionText: ', but', whyWrong: 'Contrast is the wrong rhetorical relationship.' },
          { optionIndex: 2, optionLabel: 'C', optionText: ':', whyWrong: 'Correct answer.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'since', whyWrong: 'Using "since" subordinates the second clause and disrupts the introductory setup.' }
        ]
      }
    },
    {
      questionNumber: 21,
      id: 'ex2-q21',
      difficulty: 'Intermediate',
      skillTag: 'Single Dash Elaboration',
      prompt: 'The documentary director made an unconventional aesthetic decision for the film\'s climax ___ capturing the entire ten-minute exchange in natural dusk lighting without supplemental illumination.',
      options: ['—', ';', ',', 'no punctuation'],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'A single em dash is used after an independent clause to set off an emphatic elaboration, dramatic clarification, or explanatory participial phrase.',
        whyCorrect: 'An em dash provides the appropriate emphatic break to introduce the descriptive elaboration.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: '—', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: ';', whyWrong: 'A semicolon cannot introduce a participial phrase ("capturing..."); it requires a complete independent clause.' },
          { optionIndex: 2, optionLabel: 'C', optionText: ',', whyWrong: 'While a comma is sometimes possible for participial phrases, the dash is the definitive punctuation mark for emphatic specification following a formal setup ("an unconventional aesthetic decision").' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'no punctuation', whyWrong: 'Omits the necessary structural pause between the noun phrase and the modifying participle.' }
        ]
      }
    },
    {
      questionNumber: 22,
      id: 'ex2-q22',
      difficulty: 'Advanced',
      skillTag: 'Independent Clause Semicolon Boundary',
      prompt: 'Radio astronomers detected periodic millisecond pulses from an uncataloged galactic source ___ the high-energy emissions recurred every sixteen days, and their dispersion curves indicated passage through dense magnetized plasma.',
      options: ["source—","source,","source;","source"],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'The first sentence is an independent clause ("Radio astronomers detected..."). The second sentence is a compound independent clause ("the high-energy emissions recurred..., and their dispersion curves indicated..."). Because the second clause already contains an internal comma and coordinating conjunction, a semicolon is the ideal major boundary mark to cleanly separate the two main sentences.',
        whyCorrect: 'A semicolon provides a strong, clear boundary between two major independent sentences, preventing confusion with internal clause commas.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: '—', whyWrong: 'An em dash is structurally weaker than a semicolon when separating two lengthy, multi-clause coordinate sentences.' },
          { optionIndex: 1, optionLabel: 'B', optionText: ',', whyWrong: 'Using a comma creates an egregious comma splice.' },
          { optionIndex: 2, optionLabel: 'C', optionText: ';', whyWrong: 'Correct answer.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'no punctuation', whyWrong: 'Creates a fused run-on sentence.' }
        ]
      }
    },
    {
      questionNumber: 23,
      id: 'ex2-q23',
      difficulty: 'Foundation',
      skillTag: 'Fixing Sentence Fragments',
      prompt: 'The freight logistics provider diverted container shipments away from the coastal terminal. Because emergency dredging operations restricted maritime traffic in the navigation channel. Which choice best fixes the sentence?',
      options: [
        'The freight logistics provider diverted container shipments away from the coastal terminal because emergency dredging operations restricted maritime traffic in the navigation channel.',
        'The freight logistics provider diverted container shipments away from the coastal terminal. Because emergency dredging operations restricted maritime traffic in the navigation channel.',
        'The freight logistics provider diverted container shipments away from the coastal terminal, because emergency dredging operations restricted maritime traffic in the navigation channel.',
        'The freight logistics provider diverted container shipments away from the coastal terminal; because emergency dredging operations restricted maritime traffic in the navigation channel.'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The original second sentence ("Because emergency dredging operations...") is a dependent clause fragment beginning with the subordinating conjunction "Because". It must be integrated seamlessly with the preceding independent clause without unnecessary punctuation.',
        whyCorrect: 'Correctly attaches the dependent causal clause directly to the independent clause without an unnecessary comma or period.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Choice A', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Choice B', whyWrong: 'Leaves the dependent clause fragment standing as an isolated sentence.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Choice C', whyWrong: 'Introduces an unnecessary comma before an essential causal "because" clause.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Choice D', whyWrong: 'A semicolon cannot precede a subordinating dependent clause.' }
        ]
      }
    },
    {
      questionNumber: 24,
      id: 'ex2-q24',
      difficulty: 'Intermediate',
      skillTag: 'Fixing Noun-Phrase Fragments',
      prompt: 'The aerospace engineering team faced a daunting design obstacle. An unexpected aerodynamic flutter that destabilized the carbon-fiber winglets during supersonic wind-tunnel trials. Which revision produces a single, grammatically correct sentence?',
      options: [
        'The aerospace engineering team faced a daunting design obstacle: an unexpected aerodynamic flutter that destabilized the carbon-fiber winglets during supersonic wind-tunnel trials.',
        'The aerospace engineering team faced a daunting design obstacle. An unexpected aerodynamic flutter that destabilized the carbon-fiber winglets during supersonic wind-tunnel trials.',
        'The aerospace engineering team faced a daunting design obstacle; an unexpected aerodynamic flutter that destabilized the carbon-fiber winglets during supersonic wind-tunnel trials.',
        'The aerospace engineering team faced a daunting design obstacle, an unexpected aerodynamic flutter that destabilized the carbon-fiber winglets during supersonic wind-tunnel trials.'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The second unit ("An unexpected aerodynamic flutter that destabilized...") is a noun phrase followed by a relative clause, which lacks a main predicate verb and is therefore a fragment. Because the first sentence is an independent clause ending in "design obstacle", a colon perfectly introduces the noun phrase that specifies that obstacle.',
        whyCorrect: 'A colon attaches the explanatory noun phrase appositive to the complete setup clause.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Choice A', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Choice B', whyWrong: 'Maintains the ungrammatical noun-phrase fragment as a standalone sentence.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Choice C', whyWrong: 'A semicolon cannot connect an independent clause to a non-clause fragment.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Choice D', whyWrong: 'A comma is weaker than a colon when setting off an extended, complex appositive definition.' }
        ]
      }
    },
    {
      questionNumber: 25,
      id: 'ex2-q25',
      difficulty: 'Intermediate',
      skillTag: 'Nonessential Relative Clauses',
      prompt: 'The synthetic antibody compound ___ showed extraordinary neutralizing potency against multiple viral variants.',
      options: [
        ', which had been developed in a municipal biotechnology incubator,',
        'which had been developed in a municipal biotechnology incubator',
        '; which had been developed in a municipal biotechnology incubator;',
        ': which had been developed in a municipal biotechnology incubator,'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The core sentence is "The synthetic antibody compound showed extraordinary neutralizing potency against multiple viral variants." The clause "which had been developed in a municipal biotechnology incubator" provides nonessential descriptive information and begins with "which". Nonessential relative clauses must be enclosed in a matching pair of commas.',
        whyCorrect: 'A matching pair of commas correctly encloses the nonessential relative clause.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: ', which had been developed in a municipal biotechnology incubator,', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'which had been developed in a municipal biotechnology incubator', whyWrong: 'Omits the required commas around a nonessential relative clause.' },
          { optionIndex: 2, optionLabel: 'C', optionText: '; which had been developed in a municipal biotechnology incubator;', whyWrong: 'Semicolons cannot be used to enclose mid-sentence nonessential modifying clauses.' },
          { optionIndex: 3, optionLabel: 'D', optionText: ': which had been developed in a municipal biotechnology incubator,', whyWrong: 'A colon cannot serve as the opening punctuation for an interrupting clause.' }
        ]
      }
    },
    {
      questionNumber: 26,
      id: 'ex2-q26',
      difficulty: 'Intermediate',
      skillTag: 'Essential Relative Clause Logic',
      prompt: 'The cybersecurity response unit audited only the server clusters that processed customer credit transactions. Why are there no commas surrounding "that processed customer credit transactions"?',
      options: [
        '"That" clauses cannot contain action verbs.',
        'The clause provides essential information identifying the specific server clusters audited.',
        'Relative clauses never take punctuation in standard English.',
        'The noun "clusters" is plural and prevents comma usage.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The relative clause "that processed customer credit transactions" restricts and identifies exactly which server clusters were audited (only those processing transactions, not all server clusters). Essential (restrictive) clauses take no commas.',
        whyCorrect: 'Essential modifying clauses that define and limit the scope of the noun are not set off by commas.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Choice A', whyWrong: 'Factually inaccurate; relative clauses frequently contain action verbs.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Choice B', whyWrong: 'Correct answer.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Choice C', whyWrong: 'False; nonessential relative clauses require commas.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Choice D', whyWrong: 'Plurality of the antecedent noun has no bearing on comma rules for restrictive clauses.' }
        ]
      }
    },
    {
      questionNumber: 27,
      id: 'ex2-q27',
      difficulty: 'Intermediate',
      skillTag: 'Introductory Modifier Boundary',
      prompt: 'Having analyzed over twenty thousand public comments regarding the proposed wildlife corridor ___ the state conservation agency published its finalized habitat protection plan.',
      options: ["amendment;","amendment:","amendment,","amendment"],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'The sentence opens with a participial modifying phrase ("Having analyzed over twenty thousand public comments regarding the proposed wildlife corridor"). An introductory modifier must be separated from the main subject ("the state conservation agency") by a comma.',
        whyCorrect: 'A comma separates the introductory participial modifier from the main clause.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: ';', whyWrong: 'A semicolon cannot follow a participial phrase because the phrase is not an independent clause.' },
          { optionIndex: 1, optionLabel: 'B', optionText: ':', whyWrong: 'A colon is ungrammatical after an introductory modifier phrase.' },
          { optionIndex: 2, optionLabel: 'C', optionText: ',', whyWrong: 'Correct answer.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'no punctuation', whyWrong: 'Omits the required comma boundary between the introductory phrase and the independent clause.' }
        ]
      }
    },
    {
      questionNumber: 28,
      id: 'ex2-q28',
      difficulty: 'Hard',
      skillTag: 'Dangling Modifier Diagnostic',
      prompt: 'While conducting ecological surveys along the barrier islands of the gulf coast, ___',
      options: [
        'several severely eroded dune habitats were cataloged by conservation biologists.',
        'conservation biologists cataloged several severely eroded dune habitats.',
        'the cataloging of severely eroded dune habitats was completed by conservation biologists.',
        'severe erosion of coastal dunes was observed across multiple transects.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The introductory modifier is "While conducting ecological surveys along the barrier islands of the gulf coast". The subject performing the action of "conducting ecological surveys" must immediately follow the comma. Conservation biologists conducted the surveys, so "conservation biologists" must be the grammatical subject of the main clause.',
        whyCorrect: 'Places the logical actor ("conservation biologists") immediately after the introductory participial modifier.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Choice A', whyWrong: 'Dangling modifier; illogically implies that "dune habitats" were conducting ecological surveys.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Choice B', whyWrong: 'Correct answer.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Choice C', whyWrong: 'Dangling modifier; illogically implies that "the cataloging" was conducting surveys.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Choice D', whyWrong: 'Dangling modifier; illogically implies that "severe erosion" was conducting surveys.' }
        ]
      }
    },
    {
      questionNumber: 29,
      id: 'ex2-q29',
      difficulty: 'Advanced',
      skillTag: 'Complex Clause Boundary',
      prompt: 'Music industry commentators originally predicted that physical vinyl records would vanish from retail stores ___ after independent record shops cultivated vibrant collector communities, however, vinyl LP sales expanded for twelve consecutive years.',
      options: ["stores,","stores;","stores:","stores and"],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The first sentence ("Music industry commentators originally predicted...") is an independent clause. The second sentence is also independent, containing an introductory dependent clause ("after independent record shops cultivated vibrant collector communities") and a parenthetical conjunctive adverb ("however"). A semicolon is the necessary major boundary mark between the two independent sentences.',
        whyCorrect: 'A semicolon cleanly separates two independent clauses where the second clause contains complex internal modifiers.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: ',', whyWrong: 'Creates a comma splice between two independent clauses.' },
          { optionIndex: 1, optionLabel: 'B', optionText: ';', whyWrong: 'Correct answer.' },
          { optionIndex: 2, optionLabel: 'C', optionText: ':', whyWrong: 'A colon does not express this historical contrast.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'and', whyWrong: 'Lacks a comma and fails to handle the transitional "however" appropriately.' }
        ]
      }
    },
    {
      questionNumber: 30,
      id: 'ex2-q30',
      difficulty: 'Elite',
      skillTag: 'Dependent + Independent Boundary',
      prompt: 'Although the municipal district\'s deep geothermal heating grid lowered greenhouse gas emissions by forty percent ___ high initial drilling expenditures discouraged private real estate developers, an economic obstacle that municipal tax credits were designed to overcome.',
      options: ["percent,","percent;","percent:","percent and"],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The sentence opens with the subordinating conjunction "Although", creating an introductory dependent clause ("Although the municipal district\'s deep geothermal heating grid lowered greenhouse gas emissions by forty percent"). This introductory clause must be separated from the main independent clause ("high initial drilling expenditures discouraged private real estate developers...") by a comma.',
        whyCorrect: 'A comma separates the introductory dependent clause from the main independent clause.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: ',', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: ';', whyWrong: 'A semicolon cannot separate a dependent clause from an independent clause.' },
          { optionIndex: 2, optionLabel: 'C', optionText: ':', whyWrong: 'A colon cannot follow an introductory dependent clause.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'and', whyWrong: 'Adding "and" destroys the sentence structure by leaving no independent main clause.' }
        ]
      }
    }
  ],
  scoreGuide: [
    { range: '13–15 correct', status: 'Excellent command of advanced sentence boundaries and punctuation diagnostics.' },
    { range: '10–12 correct', status: 'Strong foundation; review colon/semicolon and modifier distinctions.' },
    { range: '7–9 correct', status: 'Good understanding of basic rules; practice complex multi-clause sentences.' },
    { range: '0–6 correct', status: 'Return to theory sections before re-attempting.' }
  ]
};
