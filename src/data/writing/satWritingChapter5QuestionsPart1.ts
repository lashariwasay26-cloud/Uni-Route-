import { WritingExerciseBlock } from './satWritingTypes';

export const EXERCISE_BLOCK_1: WritingExerciseBlock = {
  blockNumber: 1,
  title: 'Block 1 Exercises: Concision & Syntactic Economy',
  description: '10 Questions (Questions 1–10) testing concision, elimination of pleonastic redundancy, nominalization conversion, and semantic preservation in dense scholarly prose.',
  questions: [
    {
      questionNumber: 1,
      id: 'ch5-q1',
      difficulty: 'Intermediate',
      skillTag: 'Concision - Pleonastic Redundancy',
      prompt: 'After cataloging the late-Pleistocene fossils, the paleontologists returned back to the field station to calibrate their radiocarbon instruments. Which choice produces the most concise and precise sentence?',
      options: [
        'paleontologists returned back to the field station',
        'paleontologists returned to the field station',
        'paleontologists went back and returned to the field station',
        'paleontologists made a return journey back to the field station'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The verb "returned" intrinsically incorporates the directional meaning of going back. Adding "back" creates a pleonastic redundancy.',
        whyCorrect: 'Option B preserves the precise spatial transition and formal academic register without redundant adverbs.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'paleontologists returned back to the field station', whyWrong: 'Contains the pleonastic modifier "back" after "returned".' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'paleontologists returned to the field station', whyWrong: 'Correct answer.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'went back and returned to the field station', whyWrong: 'Tautological and excessively wordy.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'made a return journey back to the field station', whyWrong: 'Introduces a clumsy nominalization and duplicates the directional modifier.' }
        ]
      }
    },
    {
      questionNumber: 2,
      id: 'ch5-q2',
      difficulty: 'Intermediate',
      skillTag: 'Concision - Nominalization to Finite Verb',
      prompt: 'The central bank\'s monetary policy committee made a decision to increase reserve requirements in order to mitigate inflationary volatility. Which revision best eliminates wordiness without sacrificing substantive meaning?',
      options: [
        'committee made a decision to increase reserve requirements in order to',
        'committee decided to increase reserve requirements to',
        'committee made a definitive decision regarding the increase of reserve requirements so as to',
        'committee was in the process of deciding to increase reserve requirements for the purpose of'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Converting the nominalization "made a decision to increase" into the active finite verb "decided to increase" and pruning "in order to" into "to" maximizes syntactic efficiency.',
        whyCorrect: 'Option B cleanly replaces the bloated multi-word verbal phrase with the crisp transitive verb "decided" and concise purpose marker "to".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'committee made a decision to increase reserve requirements in order to', whyWrong: 'Retains sluggish nominalization and wordy purpose phrase.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'committee decided to increase reserve requirements to', whyWrong: 'Correct answer.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'committee made a definitive decision regarding the increase of reserve requirements so as to', whyWrong: 'Aggravates wordiness by stacking abstract nouns ("decision", "increase") and empty prepositions.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'committee was in the process of deciding to increase reserve requirements for the purpose of', whyWrong: 'Shifts aspect to continuous past unnecessarily and uses wordy periphrasis.' }
        ]
      }
    },
    {
      questionNumber: 3,
      id: 'ch5-q3',
      difficulty: 'Intermediate',
      skillTag: 'Concision - Pruning Tautological Modifiers',
      prompt: 'Urban planners emphasized that future advance planning is an essential fundamental requirement for metropolitan transit networks facing rapid demographic expansion. Which edit most effectively streamlines the sentence?',
      options: [
        'future advance planning is an essential fundamental requirement',
        'advance planning done in the future is a basic fundamental requirement',
        'long-term planning is essential',
        'planning ahead in advance is an essential requirement'
      ],
      correctAnswer: 2,
      explanation: {
        coreReasoning: '"Advance planning" and "future planning" are double redundancies since all planning is inherently prospective. Similarly, "essential fundamental requirement" triples the same concept.',
        whyCorrect: 'Option C encapsulates the prospective scope with the rigorous adjective "long-term" and pairs it directly with the predicate adjective "essential".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'future advance planning is an essential fundamental requirement', whyWrong: 'Combines two distinct tautologies ("future advance planning" and "essential fundamental requirement").' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'advance planning done in the future is a basic fundamental requirement', whyWrong: 'Extremely bloated and redundant.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'long-term planning is essential', whyWrong: 'Correct answer.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'planning ahead in advance is an essential requirement', whyWrong: '"Ahead in advance" is pleonastic.' }
        ]
      }
    },
    {
      questionNumber: 4,
      id: 'ch5-q4',
      difficulty: 'Hard',
      skillTag: 'Concision - Temporal Redundancy',
      prompt: 'At the present time, macroeconomic analysts do not currently possess sufficient longitudinal data to ascertain whether supply-chain shocks have permanently shifted structural consumer demand. Which choice is most concise?',
      options: [
        'At the present time, macroeconomic analysts do not currently possess',
        'Macroeconomic analysts do not currently possess',
        'Currently at this point in time, macroeconomic analysts do not possess',
        'Macroeconomic analysts presently do not at this current moment possess'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: '"At the present time" and "currently" express identical temporal coordinates. Retaining both creates clumsy double-signaling.',
        whyCorrect: 'Option B preserves the precise temporal adverb "currently" alongside the subject and verb, discarding the introductory deadwood.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'At the present time, macroeconomic analysts do not currently possess', whyWrong: 'Duplicates temporal frame.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Macroeconomic analysts do not currently possess', whyWrong: 'Correct answer.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Currently at this point in time, macroeconomic analysts do not possess', whyWrong: 'Stacks "Currently" onto "at this point in time".' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Macroeconomic analysts presently do not at this current moment possess', whyWrong: 'Piles "presently" onto "at this current moment".' }
        ]
      }
    },
    {
      questionNumber: 5,
      id: 'ch5-q5',
      difficulty: 'Hard',
      skillTag: 'Concision - Existential Expletive Openings',
      prompt: 'There are several evolutionary biologists who contend that epigenetic markers can be inherited across multiple generations without alterations to the underlying nucleotide sequence. Which revision creates the most direct, muscular assertion?',
      options: [
        'There are several evolutionary biologists who contend that',
        'Several evolutionary biologists contend that',
        'There exist multiple evolutionary biologists who hold the contention that',
        'It is contended by several evolutionary biologists that'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Expletive constructions ("There are... who") bury the true semantic agent behind dummy pronouns. Placing "Several evolutionary biologists" directly as the subject governing "contend" creates forceful, active academic prose.',
        whyCorrect: 'Option B establishes immediate subject-verb linkage without dummy pronouns or relative clause bloat.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'There are several evolutionary biologists who contend that', whyWrong: 'Relies on weak existential expletive "There are... who".' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Several evolutionary biologists contend that', whyWrong: 'Correct answer.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'There exist multiple evolutionary biologists who hold the contention that', whyWrong: 'Combines an existential verb with the nominalization "hold the contention".' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'It is contended by several evolutionary biologists that', whyWrong: 'Uses an awkward passive expletive cleft construction ("It is... that").' }
        ]
      }
    },
    {
      questionNumber: 6,
      id: 'ch5-q6',
      difficulty: 'Hard',
      skillTag: 'Concision - Circumlocutory Prepositional Strings',
      prompt: 'The consortium established an open-access repository for the purpose of facilitating the dissemination of genomic datasets among underfunded research institutions. Which choice best condenses the underlined phrase without altering its purpose?',
      options: [
        'for the purpose of facilitating the dissemination of genomic datasets',
        'to facilitate the dissemination of genomic datasets',
        'with a view toward the goal of disseminating genomic datasets',
        'in order to effectuate the dissemination of datasets of a genomic nature'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The circumlocution "for the purpose of facilitating" can be replaced by the crisp telic infinitive "to facilitate", retaining the full technical scope.',
        whyCorrect: 'Option B cuts five words down to two while maintaining precise academic diction.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'for the purpose of facilitating the dissemination of genomic datasets', whyWrong: 'Bloated multi-prepositional phrase.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'to facilitate the dissemination of genomic datasets', whyWrong: 'Correct answer.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'with a view toward the goal of disseminating genomic datasets', whyWrong: 'Verbose idiomatic circumlocution.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'in order to effectuate the dissemination of datasets of a genomic nature', whyWrong: 'Pretentious and sluggish diction ("effectuate", "of a genomic nature").' }
        ]
      }
    },
    {
      questionNumber: 7,
      id: 'ch5-q7',
      difficulty: 'Elite',
      skillTag: 'Concision - Adverbial & Verbal Tautology',
      prompt: 'The treaty sought to completely eradicate malaria entirely from endemic subtropical river basins. Which revision preserves rhetorical force while eliminating redundancy?',
      options: [
        'completely eradicate malaria entirely',
        'eradicate malaria',
        'totally eradicate malaria in its entirety',
        'completely eliminate and eradicate malaria'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The Latin root of "eradicate" (*radix*, root) denotes total, root-and-branch destruction. Both "completely" and "entirely" are tautological intensifiers that dilute rather than strengthen the verb.',
        whyCorrect: 'Option B employs the robust transitive verb "eradicate" alone, which inherently encompasses complete elimination.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'completely eradicate malaria entirely', whyWrong: 'Frames the verb between two redundant absolute adverbs.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'eradicate malaria', whyWrong: 'Correct answer.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'totally eradicate malaria in its entirety', whyWrong: 'Adds two redundant qualifiers ("totally", "in its entirety").' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'completely eliminate and eradicate malaria', whyWrong: 'Coordinates two synonymous verbs in a tautological doublet.' }
        ]
      }
    },
    {
      questionNumber: 8,
      id: 'ch5-q8',
      difficulty: 'Elite',
      skillTag: 'Concision - Verb Doublets & Semantic Preservation',
      prompt: 'The appellate court’s ruling serves to illustrate and exemplify how constitutional guarantees of due process apply in digital surveillance disputes. Which edit provides the most disciplined phrasing?',
      options: [
        'serves to illustrate and exemplify',
        'illustrates',
        'acts as an illustration and example of',
        'serves in the capacity of exemplifying'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: '"Illustrate" and "exemplify" are near-synonymous verbs in this context; coordinating them produces an empty legalistic doublet. Furthermore, "serves to" is unnecessary periphrasis.',
        whyCorrect: 'Option B replaces five words with the single, muscular transitive verb "illustrates".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'serves to illustrate and exemplify', whyWrong: 'Contains a redundant verb pair and filler infinitive "serves to".' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'illustrates', whyWrong: 'Correct answer.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'acts as an illustration and example of', whyWrong: 'Wordy nominalized structure.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'serves in the capacity of exemplifying', whyWrong: 'Pretentious corporate periphrasis.' }
        ]
      }
    },
    {
      questionNumber: 9,
      id: 'ch5-q9',
      difficulty: 'Elite',
      skillTag: 'Concision - Meaning Preservation vs Truncation',
      prompt: 'Original: "Although the experimental solar cell demonstrated unprecedented photovoltaic efficiency under laboratory conditions, it degraded rapidly when exposed to ambient atmospheric humidity." A student attempts to make this sentence more concise. Which revision is flawed because it distorts or loses critical meaning?',
      options: [
        'Despite achieving record laboratory efficiency, the experimental solar cell degraded rapidly in ambient humidity.',
        'Although highly efficient in the lab, the experimental solar cell degraded rapidly under ambient moisture.',
        'The experimental solar cell achieved unprecedented efficiency before degrading.',
        'The experimental solar cell degraded rapidly in ambient humidity, despite its unprecedented laboratory efficiency.'
      ],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'Option C excises the specific environmental trigger ("when exposed to ambient atmospheric humidity") and the conditional setting ("under laboratory conditions"), creating a vague, misleading narrative of linear failure.',
        whyCorrect: 'Option C is the flawed revision because it removes vital scientific context under the false pretext of brevity.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Despite achieving record laboratory efficiency, the experimental solar cell degraded rapidly in ambient humidity.', whyWrong: 'Valid, concise, and semantically intact.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Although highly efficient in the lab, the experimental solar cell degraded rapidly under ambient moisture.', whyWrong: 'Valid, tightly compressed, and semantically accurate.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'The experimental solar cell achieved unprecedented efficiency before degrading.', whyWrong: 'Correct answer (flawed revision that drops key parameters).' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'The experimental solar cell degraded rapidly in ambient humidity, despite its unprecedented laboratory efficiency.', whyWrong: 'Valid inversion that retains all necessary qualifiers.' }
        ]
      }
    },
    {
      questionNumber: 10,
      id: 'ch5-q10',
      difficulty: 'Elite',
      skillTag: 'Concision - Causal Clause Compression',
      prompt: 'The archival preservation project was suspended owing to the circumstance that municipal funding allocations were abruptly rescinded by the city council. Which choice yields the cleanest syntax?',
      options: [
        'owing to the circumstance that municipal funding allocations were abruptly rescinded by the city council.',
        'because the city council abruptly rescinded municipal funding allocations.',
        'due to the fact of the city council’s abrupt rescission of municipal funding allocations.',
        'on the grounds that there was an abrupt rescinding of municipal funding allocations by the city council.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Replacing the clunky causal connector "owing to the circumstance that" with "because" and converting the passive "allocations were rescinded by the city council" into the active "the city council abruptly rescinded" maximizes clarity and economy.',
        whyCorrect: 'Option B shifts the causal clause into active voice with a crisp conjunction.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'owing to the circumstance that municipal funding allocations were abruptly rescinded by the city council.', whyWrong: 'Contains bloated periphrastic connector and passive voice.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'because the city council abruptly rescinded municipal funding allocations.', whyWrong: 'Correct answer.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'due to the fact of the city council’s abrupt rescission of municipal funding allocations.', whyWrong: 'Clumsy noun-heavy phrasing with "due to the fact of".' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'on the grounds that there was an abrupt rescinding of municipal funding allocations by the city council.', whyWrong: 'Uses wordy connector paired with weak existential expletive "there was".' }
        ]
      }
    }
  ]
};

export const EXERCISE_BLOCK_2: WritingExerciseBlock = {
  blockNumber: 2,
  title: 'Block 2 Exercises: Rhetorical Precision & Lexical Nuance',
  description: '10 Questions (Questions 11–20) testing context-driven diction, domain-specific terminology, near-synonym discrimination, and epistemic modality.',
  questions: [
    {
      questionNumber: 11,
      id: 'ch5-q11',
      difficulty: 'Intermediate',
      skillTag: 'Precision - Adapt vs Adopt',
      prompt: 'To survive in the hyper-arid Atacama Desert, endemic succulent species have ___ specialized photosynthetic pathways that restrict transpiration during peak daylight hours.',
      options: ['adopted', 'adapted', 'inferred', 'implied'],
      correctAnswer: 1,
      explanation: {
        coreReasoning: '"Adapt" means to evolve, alter, or adjust structurally to environmental pressures, whereas "adopt" means to formally choose, accept, or implement a policy or practice.',
        whyCorrect: 'Option B accurately describes biological evolutionary adjustment.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'adopted', whyWrong: 'Implies conscious choice or administrative uptake, inappropriate for biological evolutionary mechanisms.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'adapted', whyWrong: 'Correct answer.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'inferred', whyWrong: 'Means deduced logically from evidence.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'implied', whyWrong: 'Means suggested indirectly.' }
        ]
      }
    },
    {
      questionNumber: 12,
      id: 'ch5-q12',
      difficulty: 'Intermediate',
      skillTag: 'Precision - Affect vs Effect',
      prompt: 'The prolonged drought in the agricultural heartland did not merely ___ crop yields; it also accelerated the systemic depletion of regional groundwater aquifers.',
      options: ['effect', 'affect', 'execute', 'perpetuate'],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The blank requires a transitive verb meaning "to influence, alter, or produce an impact on". That is "affect". "Effect" as a verb means to bring about or accomplish (e.g., effect a transition).',
        whyCorrect: 'Option B correctly uses the transitive verb "affect" to describe the impact on crop yields.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'effect', whyWrong: 'As a verb, means to bring into existence; as a noun, denotes the result.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'affect', whyWrong: 'Correct answer.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'execute', whyWrong: 'Means to carry out a planned order or legal sentence.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'perpetuate', whyWrong: 'Means to prolong indefinitely, which does not fit the initial negative impact.' }
        ]
      }
    },
    {
      questionNumber: 13,
      id: 'ch5-q13',
      difficulty: 'Hard',
      skillTag: 'Precision - Imply vs Infer',
      prompt: 'Although the climatological report does not explicitly predict an imminent collapse of the West Antarctic Ice Sheet, its empirical glaciological data strongly ___ that basal melting is accelerating.',
      options: ['infer', 'imply', 'concur', 'extrapolate'],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The non-human subject ("empirical glaciological data") conveys or signals information indirectly to the reader. Data implies; human researchers infer.',
        whyCorrect: 'Option B correctly matches the transitivity and epistemic role of textual/empirical evidence.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'infer', whyWrong: 'Inanimate data cannot form conscious inferences or deduce conclusions.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'imply', whyWrong: 'Correct answer.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'concur', whyWrong: 'Means to agree in opinion, requiring human or collegial agency.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'extrapolate', whyWrong: 'Extrapolating is an active mathematical operation performed by analysts, not the data itself.' }
        ]
      }
    },
    {
      questionNumber: 14,
      id: 'ch5-q14',
      difficulty: 'Hard',
      skillTag: 'Precision - Modality Calibration',
      prompt: 'The preliminary clinical trial observed modest antibody titers in a cohort of thirty participants. In writing the abstract, the lead pharmacologist should assert that the compound ___ therapeutic promise against the variant.',
      options: ['conclusively proves', 'indisputably establishes', 'suggests potential', 'guarantees complete'],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'A small preliminary study (n=30) provides tentative, emerging empirical support. Claims of absolute certainty ("conclusively proves", "indisputably establishes", "guarantees") commit a severe error of epistemic overstatement.',
        whyCorrect: 'Option C precisely calibrates the claim\'s strength to the preliminary, small-sample nature of the evidence.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'conclusively proves', whyWrong: 'Grossly overstates certainty for a preliminary trial.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'indisputably establishes', whyWrong: 'Unscientific hyperbole for an early-stage study.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'suggests potential', whyWrong: 'Correct answer.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'guarantees complete', whyWrong: 'Absolute guarantee is unwarranted in clinical trials.' }
        ]
      }
    },
    {
      questionNumber: 15,
      id: 'ch5-q15',
      difficulty: 'Hard',
      skillTag: 'Precision - Correlation vs Causation Verbs',
      prompt: 'Sociologists analyzing census trends noted that rising municipal investment in public libraries ___ a measurable decline in adolescent truancy rates, though other confounding socioeconomic variables were present.',
      options: ['directly caused', 'correlated with', 'mandated', 'engendered'],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The presence of "confounding socioeconomic variables" precludes asserting direct, unmediated causation ("directly caused", "engendered"). The verb must express statistical co-occurrence without overclaiming causality.',
        whyCorrect: 'Option B accurately expresses statistical association without asserting an unproven causal link.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'directly caused', whyWrong: 'Overstates causal certainty in the presence of confounding variables.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'correlated with', whyWrong: 'Correct answer.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'mandated', whyWrong: 'Means legally required or decreed.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'engendered', whyWrong: 'Means caused or gave rise to, falsely claiming direct causality.' }
        ]
      }
    },
    {
      questionNumber: 16,
      id: 'ch5-q16',
      difficulty: 'Hard',
      skillTag: 'Precision - Register & Academic Diction',
      prompt: 'During the high-stakes trade summit, the ambassador delivered an address that was ___ in its condemnation of protectionist tariff escalations.',
      options: ['super blunt', 'uncompromising', 'totally in-your-face', 'mega aggressive'],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The sentence requires an elevated, formal adjective suitable for diplomatic history and international affairs discourse. Slang and informal colloquialisms destroy register consistency.',
        whyCorrect: 'Option B maintains formal, dignified academic prose.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'super blunt', whyWrong: 'Colloquial modifier and informal register.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'uncompromising', whyWrong: 'Correct answer.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'totally in-your-face', whyWrong: 'Aggressive street slang inappropriate for scholarly writing.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'mega aggressive', whyWrong: 'Informal slang prefix ("mega").' }
        ]
      }
    },
    {
      questionNumber: 17,
      id: 'ch5-q17',
      difficulty: 'Elite',
      skillTag: 'Precision - Pronoun Antecedent Ambiguity',
      prompt: 'The regulatory agency revised the toxicological safety threshold because it was deemed obsolete. What is the fundamental precision defect in this sentence?',
      options: [
        'The past participle "deemed" lacks formal academic pedigree.',
        'The pronoun "it" has an ambiguous antecedent that could grammatically attach to either "agency" or "threshold".',
        'The causal conjunction "because" should be replaced with "on account of the fact that".',
        'The passive construction "was deemed" creates an ungrammatical sentence fragment.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Both "agency" and "threshold" are singular neuter nouns preceding the pronoun "it". While common sense suggests the threshold was obsolete, strict syntax leaves the antecedent ambiguous.',
        whyCorrect: 'Option B correctly identifies the ambiguous third-person singular pronoun reference.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'The past participle "deemed" lacks formal academic pedigree.', whyWrong: '"Deemed" is standard, elevated academic English.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'The pronoun "it" has an ambiguous antecedent that could grammatically attach to either "agency" or "threshold".', whyWrong: 'Correct answer.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'The causal conjunction "because" should be replaced with "on account of the fact that".', whyWrong: 'Promotes wordiness over concise conjunctions.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'The passive construction "was deemed" creates an ungrammatical sentence fragment.', whyWrong: 'The clause is a completely grammatical subordinate clause.' }
        ]
      }
    },
    {
      questionNumber: 18,
      id: 'ch5-q18',
      difficulty: 'Elite',
      skillTag: 'Precision - Subtle Connotative Distinctions',
      prompt: 'The museum curator discovered that the 18th-century maritime chronometer was not a forged replica but an authentic, ___ instrument crafted in the workshop of John Harrison.',
      options: ['notorious', 'ingenious', 'impecunious', 'archaic'],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The context contrasts a counterfeit forgery with a masterfully engineered historical original. "Ingenious" conveys brilliant inventive design appropriate for Harrison\'s famed horological breakthroughs.',
        whyCorrect: 'Option B highlights the inventive brilliance and authentic mechanical quality of the artifact.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'notorious', whyWrong: 'Means famous for a negative or disreputable reason.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'ingenious', whyWrong: 'Correct answer.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'impecunious', whyWrong: 'Means having little or no money; penniless.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'archaic', whyWrong: 'Means antiquated or obsolete, failing to capture the craftsmanship praised in the clause.' }
        ]
      }
    },
    {
      questionNumber: 19,
      id: 'ch5-q19',
      difficulty: 'Elite',
      skillTag: 'Precision - Dimension of Comparison',
      prompt: 'In evaluating deep-sea submersibles, naval engineers emphasized that the titanium alloy hull was superior to the carbon-fiber composite. If the engineers specifically prioritized structural endurance under hydrostatic pressure, which revision is most precise?',
      options: [
        'titanium alloy hull was better in every single way',
        'titanium alloy hull possessed far greater yield strength under extreme hydrostatic pressure',
        'titanium alloy hull was more advantageous in general performance',
        'titanium alloy hull was preferred by everyone on the team'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Replacing the vague evaluative term "superior" with the specific engineering metric ("greater yield strength under extreme hydrostatic pressure") satisfies the highest standard of technical precision.',
        whyCorrect: 'Option B specifies both the precise physical parameter (yield strength) and the operating condition (hydrostatic pressure).',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'titanium alloy hull was better in every single way', whyWrong: 'Hyperbolic and unscientific.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'titanium alloy hull possessed far greater yield strength under extreme hydrostatic pressure', whyWrong: 'Correct answer.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'titanium alloy hull was more advantageous in general performance', whyWrong: 'Remains broad, generic, and unquantified.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'titanium alloy hull was preferred by everyone on the team', whyWrong: 'Focuses on subjective popularity rather than objective structural metrics.' }
        ]
      }
    },
    {
      questionNumber: 20,
      id: 'ch5-q20',
      difficulty: 'Elite',
      skillTag: 'Precision - Preserving Restrictive Qualifiers',
      prompt: 'Original Sentence: "The econometric model accurately predicts market volatility primarily during periods of heightened geopolitical tension." Which modification alters the truth-conditions of the statement by dangerously overextending its scope?',
      options: [
        'The econometric model accurately predicts market volatility mainly during periods of heightened geopolitical tension.',
        'The econometric model accurately predicts market volatility during periods of heightened geopolitical tension.',
        'The econometric model accurately predicts market volatility under all macroeconomic conditions.',
        'The econometric model’s predictive accuracy regarding volatility is concentrated during geopolitical crises.'
      ],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'The original claim explicitly restricts high predictive accuracy to times of geopolitical tension. Option C broadens this into an absolute universal claim ("under all macroeconomic conditions"), completely inverting the scope.',
        whyCorrect: 'Option C falsely universalizes a narrowly qualified model.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'The econometric model accurately predicts market volatility mainly during periods of heightened geopolitical tension.', whyWrong: 'Preserves the qualified domain using the synonym "mainly".' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'The econometric model accurately predicts market volatility during periods of heightened geopolitical tension.', whyWrong: 'Minor shift in emphasis, but does not claim universal accuracy.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'The econometric model accurately predicts market volatility under all macroeconomic conditions.', whyWrong: 'Correct answer (falsely universalizes a qualified finding).' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'The econometric model’s predictive accuracy regarding volatility is concentrated during geopolitical crises.', whyWrong: 'Accurately captures the restricted domain of the model.' }
        ]
      }
    }
  ]
};

export const EXERCISE_BLOCK_3: WritingExerciseBlock = {
  blockNumber: 3,
  title: 'Block 3 Exercises: Modifier Placement & Syntactic Proximity',
  description: '10 Questions (Questions 21–30) testing dangling participles, misplaced adjectival appositives, limiting adverbial scope, and relative clause attachment.',
  questions: [
    {
      questionNumber: 21,
      id: 'ch5-q21',
      difficulty: 'Intermediate',
      skillTag: 'Modifier Placement - Dangling Participial Phrase',
      prompt: 'After deciphering the inscriptions on the Rosetta Stone, ___ realized that ancient Egyptian hieroglyphs possessed both phonetic and ideographic properties.',
      options: [
        'the linguistic breakthroughs were confirmed when scholars',
        'the French philologist Jean-François Champollion',
        'the ancient script was thoroughly investigated and Champollion',
        'it became increasingly apparent to researchers that Champollion'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The introductory modifier "After deciphering the inscriptions..." is a participial action that must be performed by a conscious human agent. That agent must occupy the immediate subject position of the main clause.',
        whyCorrect: 'Option B positions the scholar Jean-François Champollion directly after the comma, creating a flawless syntactic attachment.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'the linguistic breakthroughs were confirmed when scholars', whyWrong: 'Dangling modifier: breakthroughs cannot decipher inscriptions.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'the French philologist Jean-François Champollion', whyWrong: 'Correct answer.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'the ancient script was thoroughly investigated and Champollion', whyWrong: 'Dangling modifier: the script did not decipher the inscriptions.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'it became increasingly apparent to researchers that Champollion', whyWrong: 'Dangling modifier attached to dummy pronoun "it".' }
        ]
      }
    },
    {
      questionNumber: 22,
      id: 'ch5-q22',
      difficulty: 'Intermediate',
      skillTag: 'Modifier Placement - Past-Participle Appositive',
      prompt: 'Engineered to withstand seismic shockwaves up to magnitude 8.5, ___ incorporates deep-foundation friction dampers and flexible steel joints.',
      options: [
        'the architectural engineering team designed the skyscraper so that it',
        'the newly constructed skyscraper',
        'earthquakes rarely cause catastrophic collapse in the skyscraper because it',
        'the blueprints for the skyscraper demonstrate that it'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The past-participial modifier "Engineered to withstand..." describes the physical building itself, not the engineering team, the earthquakes, or the blueprints.',
        whyCorrect: 'Option B places "the newly constructed skyscraper" as the subject immediately receiving the descriptive modifier.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'the architectural engineering team designed the skyscraper so that it', whyWrong: 'Dangling modifier: the team was not engineered to withstand shockwaves.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'the newly constructed skyscraper', whyWrong: 'Correct answer.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'earthquakes rarely cause catastrophic collapse in the skyscraper because it', whyWrong: 'Dangling modifier: earthquakes were not engineered to withstand shockwaves.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'the blueprints for the skyscraper demonstrate that it', whyWrong: 'Dangling modifier: blueprints were not physically engineered to withstand shockwaves.' }
        ]
      }
    },
    {
      questionNumber: 23,
      id: 'ch5-q23',
      difficulty: 'Hard',
      skillTag: 'Modifier Placement - Misplaced Relative Clause',
      prompt: 'The curator exhibited a rare manuscript from the imperial library that contained annotations written in the Emperor’s own hand. Which revision eliminates the ambiguity over whether the library or the manuscript contained the annotations?',
      options: [
        'The curator exhibited a rare manuscript from the imperial library that contained annotations written in the Emperor’s own hand.',
        'The curator exhibited a rare manuscript that contained annotations written in the Emperor’s own hand from the imperial library.',
        'From the imperial library, the curator exhibited a rare manuscript that contained annotations written in the Emperor’s own hand.',
        'The curator exhibited from the imperial library a rare manuscript containing annotations written in the Emperor’s own hand with great care.'
      ],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'In the original, the relative clause "that contained annotations..." sits directly adjacent to "imperial library", creating the false impression that the building or institution contained handwritten marginalia. Moving "From the imperial library" to the start allows the relative clause to attach directly to "rare manuscript".',
        whyCorrect: 'Option C places the prepositional origin phrase at the head of the sentence and anchors the restrictive relative clause directly to "rare manuscript".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'The curator exhibited a rare manuscript from the imperial library that contained annotations written in the Emperor’s own hand.', whyWrong: 'Misplaces relative clause adjacent to "library".' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'The curator exhibited a rare manuscript that contained annotations written in the Emperor’s own hand from the imperial library.', whyWrong: 'Suggests the Emperor wrote the annotations while sitting inside the imperial library.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'From the imperial library, the curator exhibited a rare manuscript that contained annotations written in the Emperor’s own hand.', whyWrong: 'Correct answer.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'The curator exhibited from the imperial library a rare manuscript containing annotations written in the Emperor’s own hand with great care.', whyWrong: 'Clumsy verb-object split and ambiguous dangling phrase "with great care".' }
        ]
      }
    },
    {
      questionNumber: 24,
      id: 'ch5-q24',
      difficulty: 'Hard',
      skillTag: 'Modifier Placement - Dangling Prepositional Gerund',
      prompt: 'Upon isolating the fluorescent protein gene, the biotechnology venture secured a series of international utility patents. What is the syntactic anchor of the introductory phrase?',
      options: [
        'the fluorescent protein gene',
        'the biotechnology venture',
        'international utility patents',
        'the isolated gene sequence'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The introductory prepositional phrase "Upon isolating..." logically requires an actor capable of performing genetic isolation. The biotechnology venture (functioning as an institutional corporate actor) occupies the subject slot and serves as the valid syntactic anchor.',
        whyCorrect: 'Option B correctly identifies "the biotechnology venture" as the subject governing the introductory action.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'the fluorescent protein gene', whyWrong: 'The gene is the direct object of the isolation, not the agent isolating it.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'the biotechnology venture', whyWrong: 'Correct answer.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'international utility patents', whyWrong: 'Patents are legal instruments, not the biological researchers.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'the isolated gene sequence', whyWrong: 'The sequence cannot isolate itself.' }
        ]
      }
    },
    {
      questionNumber: 25,
      id: 'ch5-q25',
      difficulty: 'Hard',
      skillTag: 'Modifier Placement - Dangling Modifier in Passive Context',
      prompt: 'While reviewing the macroeconomic forecasting models, significant algorithmic discrepancies were detected by the econometricians. Which revision fixes the dangling modifier with the greatest syntactic elegance?',
      options: [
        'While reviewing the macroeconomic forecasting models, significant algorithmic discrepancies were detected by the econometricians.',
        'While reviewing the macroeconomic forecasting models, the econometricians detected significant algorithmic discrepancies.',
        'The macroeconomic forecasting models, while reviewing them, revealed significant algorithmic discrepancies to the econometricians.',
        'While the review of the macroeconomic forecasting models occurred, significant algorithmic discrepancies were detected by econometricians.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The elliptical clause "While reviewing..." dangles because "discrepancies" is the grammatical subject of the passive main clause. Converting the main clause to active voice with "the econometricians" as subject repairs the error.',
        whyCorrect: 'Option B connects the human analysts directly to the review clause.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'While reviewing the macroeconomic forecasting models, significant algorithmic discrepancies were detected by the econometricians.', whyWrong: 'Retains the dangling modifier (discrepancies cannot review models).' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'While reviewing the macroeconomic forecasting models, the econometricians detected significant algorithmic discrepancies.', whyWrong: 'Correct answer.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'The macroeconomic forecasting models, while reviewing them, revealed significant algorithmic discrepancies to the econometricians.', whyWrong: 'Illogical participial attachment to "models".' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'While the review of the macroeconomic forecasting models occurred, significant algorithmic discrepancies were detected by econometricians.', whyWrong: 'Wordy, passive, and circumlocutory.' }
        ]
      }
    },
    {
      questionNumber: 26,
      id: 'ch5-q26',
      difficulty: 'Elite',
      skillTag: 'Modifier Placement - Limiting Adverb Semantic Scope',
      prompt: 'Consider the sentence: "The lead astrophysicist only analyzed the spectroscopic data from the orbital telescope." Which revision restricts the action to data analysis (meaning the astrophysicist performed no other tasks on that data, such as calibration or publishing)?',
      options: [
        'Only the lead astrophysicist analyzed the spectroscopic data from the orbital telescope.',
        'The lead astrophysicist analyzed only the spectroscopic data from the orbital telescope.',
        'The lead astrophysicist only analyzed the spectroscopic data from the orbital telescope.',
        'The lead astrophysicist analyzed the spectroscopic data from only the orbital telescope.'
      ],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'Placing "only" directly before the finite verb "analyzed" restricts the action itself: the astrophysicist did nothing other than analyze the data.',
        whyCorrect: 'Option C isolates the verbal action as the sole activity undertaken.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Only the lead astrophysicist analyzed the spectroscopic data from the orbital telescope.', whyWrong: 'Restricts the human agent (no other astrophysicist analyzed it).' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'The lead astrophysicist analyzed only the spectroscopic data from the orbital telescope.', whyWrong: 'Restricts the object (analyzed no other data sets).' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'The lead astrophysicist only analyzed the spectroscopic data from the orbital telescope.', whyWrong: 'Correct answer.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'The lead astrophysicist analyzed the spectroscopic data from only the orbital telescope.', whyWrong: 'Restricts the instrument of origin (no other telescopes).' }
        ]
      }
    },
    {
      questionNumber: 27,
      id: 'ch5-q27',
      difficulty: 'Elite',
      skillTag: 'Modifier Placement - Squinting Adverbial Ambiguity',
      prompt: 'Historians who examine diplomatic archives frequently uncover unredacted correspondence. What is the syntactic flaw in this sentence?',
      options: [
        'The adverb "frequently" is squinting because it could modify either "examine" or "uncover".',
        'The subject "Historians" fails to agree in number with the plural verb "uncover".',
        'The relative pronoun "who" should be replaced with the objective case "whom".',
        'The sentence is a comma splice joined without coordinating conjunctions.'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The adverb "frequently" sits sandwiched between the subordinate verb "examine" and the main verb "uncover". A reader cannot discern whether historians examine archives on a frequent basis or whether their discoveries occur frequently.',
        whyCorrect: 'Option A accurately identifies the squinting adverbial ambiguity.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'The adverb "frequently" is squinting because it could modify either "examine" or "uncover".', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'The subject "Historians" fails to agree in number with the plural verb "uncover".', whyWrong: 'Both "Historians" and "uncover" are plural; agreement is flawless.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'The relative pronoun "who" should be replaced with the objective case "whom".', whyWrong: '"Who" is the subject of the relative clause "examine", requiring subjective case.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'The sentence is a comma splice joined without coordinating conjunctions.', whyWrong: 'There are no comma splices; it is a single complex sentence.' }
        ]
      }
    },
    {
      questionNumber: 28,
      id: 'ch5-q28',
      difficulty: 'Elite',
      skillTag: 'Modifier Placement - Complex Appositive Realignment',
      prompt: 'A self-taught polymath who revolutionized botanical taxonomy, Carl Linnaeus’s system of binomial nomenclature standardized biological classification across the Western world. Which choice best rectifies the structural defect?',
      options: [
        'Carl Linnaeus’s system of binomial nomenclature standardized biological classification across the Western world.',
        'the system of binomial nomenclature developed by Carl Linnaeus standardized biological classification across the Western world.',
        'Carl Linnaeus standardized biological classification across the Western world through his system of binomial nomenclature.',
        'biological classification across the Western world was standardized by Carl Linnaeus’s system of binomial nomenclature.'
      ],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'The appositive phrase "A self-taught polymath..." describes the person Carl Linnaeus, not his possessive noun phrase "Carl Linnaeus’s system". The main clause subject must be the nominative noun "Carl Linnaeus".',
        whyCorrect: 'Option C positions "Carl Linnaeus" as the immediate subject, ensuring the appositive modifies the human scientist rather than the abstract system.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Carl Linnaeus’s system of binomial nomenclature standardized biological classification across the Western world.', whyWrong: 'Dangling modifier attached to possessive "system".' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'the system of binomial nomenclature developed by Carl Linnaeus standardized biological classification across the Western world.', whyWrong: 'Dangling modifier: the system is not a self-taught polymath.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Carl Linnaeus standardized biological classification across the Western world through his system of binomial nomenclature.', whyWrong: 'Correct answer.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'biological classification across the Western world was standardized by Carl Linnaeus’s system of binomial nomenclature.', whyWrong: 'Dangling modifier: classification is not a self-taught polymath.' }
        ]
      }
    },
    {
      questionNumber: 29,
      id: 'ch5-q29',
      difficulty: 'Hard',
      skillTag: 'Modifier Placement - Terminal Participial Modifier',
      prompt: 'The deep-sea drilling vessel extracted core sediment samples from the Mariana Trench, ___ providing geochemists with pristine records of ancient oceanic subduction.',
      options: ['thereby', 'and thereby it', 'which thereby', 'whereby'],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'A terminal present participial phrase (", thereby providing...") functions as an adverbial clause of result modifying the entire preceding independent clause.',
        whyCorrect: 'Option A cleanly introduces the participial result clause with the adverb "thereby".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'thereby', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'and thereby it', whyWrong: 'Creates an awkward clause fragment before the participle.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'which thereby', whyWrong: 'Relative pronoun "which" cannot govern an isolated participle without a finite verb.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'whereby', whyWrong: '"Whereby" means "by which" and must be followed by a full finite clause.' }
        ]
      }
    },
    {
      questionNumber: 30,
      id: 'ch5-q30',
      difficulty: 'Elite',
      skillTag: 'Modifier Placement - Misplaced Prepositional Attachment',
      prompt: 'The astrophysicist observed gravitational lensing around the supermassive black hole with a cryogenic optical detector. Which revision unambiguously indicates that the detector was used to make the observation, not that the black hole possessed the detector?',
      options: [
        'The astrophysicist observed gravitational lensing around the supermassive black hole with a cryogenic optical detector.',
        'Using a cryogenic optical detector, the astrophysicist observed gravitational lensing around the supermassive black hole.',
        'The astrophysicist observed with a cryogenic optical detector gravitational lensing around the supermassive black hole.',
        'Gravitational lensing was observed around the supermassive black hole by the astrophysicist with a cryogenic optical detector.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Placing the participial phrase "Using a cryogenic optical detector" at the beginning of the sentence unambiguously attaches the instrumental method directly to the subject agent ("the astrophysicist").',
        whyCorrect: 'Option B eliminates all ambiguity regarding instrumental agency.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'The astrophysicist observed gravitational lensing around the supermassive black hole with a cryogenic optical detector.', whyWrong: 'Misplaced prepositional phrase creates ambiguity by attaching adjacent to "black hole".' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Using a cryogenic optical detector, the astrophysicist observed gravitational lensing around the supermassive black hole.', whyWrong: 'Correct answer.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'The astrophysicist observed with a cryogenic optical detector gravitational lensing around the supermassive black hole.', whyWrong: 'Awkwardly interrupts verb and direct object.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Gravitational lensing was observed around the supermassive black hole by the astrophysicist with a cryogenic optical detector.', whyWrong: 'Passive voice with stacked ambiguous prepositional phrases.' }
        ]
      }
    }
  ]
};

export const EXERCISE_BLOCK_4: WritingExerciseBlock = {
  blockNumber: 4,
  title: 'Block 4 Exercises: Logical Connectors & Clause Boundaries',
  description: '10 Questions (Questions 31–40) testing independent clause linkage, compound predicate punctuation, subordinating logic, semicolon transitions, and comma splice eradication.',
  questions: [
    {
      questionNumber: 31,
      id: 'ch5-q31',
      difficulty: 'Intermediate',
      skillTag: 'Sentence Boundaries - Compound Predicate Punctuation',
      prompt: 'The volcanologists monitored hydrothermal gas emissions ___ deployed seismometers along the caldera rim.',
      options: ['and', ', and they', '; and', ', however'],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The subject "volcanologists" governs both verbs ("monitored" and "deployed"). This forms a single compound predicate, which must be joined by a coordinating conjunction without an intervening comma.',
        whyCorrect: 'Option A joins the compound predicate cleanly with "and".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'and', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: ', and they', whyWrong: 'Unnecessary pronoun and comma creating wordy coordination.' },
          { optionIndex: 2, optionLabel: 'C', optionText: '; and', whyWrong: 'Ungrammatical semicolon before a coordinating conjunction.' },
          { optionIndex: 3, optionLabel: 'D', optionText: ', however', whyWrong: 'Conjunctive adverb punctuated with a comma creates a run-on error.' }
        ]
      }
    },
    {
      questionNumber: 32,
      id: 'ch5-q32',
      difficulty: 'Intermediate',
      skillTag: 'Sentence Boundaries - Coordination with FANBOYS',
      prompt: 'The deep-sea submersible lost telemetry communication with the surface vessel, ___ its autonomous fail-safe thrusters successfully navigated the craft back to the decompression zone.',
      options: ['but', 'so', 'for', 'or'],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The two independent clauses express a sharp contrast between losing communication (negative risk) and autonomous recovery (positive resolution). The coordinating conjunction "but" establishes this contrast.',
        whyCorrect: 'Option A uses "but" with a comma to coordinate two contrasting independent clauses.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'but', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'so', whyWrong: 'Indicates result/consequence rather than adversative contrast.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'for', whyWrong: 'Indicates cause/explanation.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'or', whyWrong: 'Indicates mutual exclusivity/alternatives.' }
        ]
      }
    },
    {
      questionNumber: 33,
      id: 'ch5-q33',
      difficulty: 'Hard',
      skillTag: 'Sentence Boundaries - Semicolon with Conjunctive Adverb',
      prompt: 'The pharmaceutical trial demonstrated high efficacy in reducing baseline arterial hypertension; ___, regulatory approval was delayed pending long-term toxicity evaluations.',
      options: ['nevertheless', 'consequently', 'furthermore', 'namely'],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The first clause describes clinical success, while the second describes a regulatory delay. "Nevertheless" signals this concession/contrast following a semicolon.',
        whyCorrect: 'Option A correctly conveys logical contrast between trial success and administrative delay.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'nevertheless', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'consequently', whyWrong: 'Signals causal consequence, which is illogical here.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'furthermore', whyWrong: 'Signals additive reinforcement.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'namely', whyWrong: 'Introduces a specific list or clarification.' }
        ]
      }
    },
    {
      questionNumber: 34,
      id: 'ch5-q34',
      difficulty: 'Hard',
      skillTag: 'Sentence Boundaries - Subordination of Minor Claims',
      prompt: 'Which revision most effectively combines these two sentences to emphasize the discovery of the lost city? "Archaeologists analyzed airborne LiDAR topography data for three years. They eventually uncovered the sprawling Mayan metropolis of Calakmul."',
      options: [
        'Archaeologists analyzed airborne LiDAR topography data for three years, and they eventually uncovered the sprawling Mayan metropolis of Calakmul.',
        'After analyzing airborne LiDAR topography data for three years, archaeologists uncovered the sprawling Mayan metropolis of Calakmul.',
        'Archaeologists uncovered the sprawling Mayan metropolis of Calakmul, and LiDAR data was analyzed for three years.',
        'Because the sprawling Mayan metropolis of Calakmul was uncovered, archaeologists analyzed airborne LiDAR data for three years.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Subordinating the three-year data analysis into an introductory temporal prepositional phrase ("After analyzing...") makes the major archaeological discovery the climactic independent clause.',
        whyCorrect: 'Option B creates an elegant hierarchy of information.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Archaeologists analyzed airborne LiDAR topography data for three years, and they eventually uncovered the sprawling Mayan metropolis of Calakmul.', whyWrong: 'Flat coordination giving equal syntactic weight to routine analysis and major discovery.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'After analyzing airborne LiDAR topography data for three years, archaeologists uncovered the sprawling Mayan metropolis of Calakmul.', whyWrong: 'Correct answer.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Archaeologists uncovered the sprawling Mayan metropolis of Calakmul, and LiDAR data was analyzed for three years.', whyWrong: 'Shifts to passive voice and clumsy coordination.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Because the sprawling Mayan metropolis of Calakmul was uncovered, archaeologists analyzed airborne LiDAR data for three years.', whyWrong: 'Inverts the chronological cause-and-effect relationship.' }
        ]
      }
    },
    {
      questionNumber: 35,
      id: 'ch5-q35',
      difficulty: 'Hard',
      skillTag: 'Sentence Boundaries - Colon Usage for Elaboration',
      prompt: 'The glaciological survey arrived at an alarming conclusion; the inland ice sheet had reached an irreversible tipping point of annual mass loss. What is the punctuation defect?',
      options: [
        'The semicolon should be replaced with a colon because the second clause directly explains and defines the "alarming conclusion".',
        'The semicolon should be replaced with a comma.',
        'The semicolon should be eliminated entirely without any punctuation mark.',
        'The semicolon is correct because both clauses are independent.'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'When an independent clause sets up an expectation and the second clause directly defines, specifies, or elaborates on that expectation (here, naming the "alarming conclusion"), a colon is the rhetorically superior and precise punctuation mark.',
        whyCorrect: 'Option A explains the elaborative function of the colon following an independent lead-in clause.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'The semicolon should be replaced with a colon because the second clause directly explains and defines the "alarming conclusion".', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'The semicolon should be replaced with a comma.', whyWrong: 'Would create an ungrammatical comma splice between two independent clauses.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'The semicolon should be eliminated entirely without any punctuation mark.', whyWrong: 'Would create a fused run-on sentence.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'The semicolon is correct because both clauses are independent.', whyWrong: 'While technically grammatical, it misses the explicit explanatory relationship requiring a colon.' }
        ]
      }
    },
    {
      questionNumber: 36,
      id: 'ch5-q36',
      difficulty: 'Hard',
      skillTag: 'Sentence Boundaries - Comma Splice Diagnosis',
      prompt: 'Which choice contains a fatal comma splice?',
      options: [
        'Although the quantum processor operated at cryogenic temperatures, thermal noise still caused intermittent decoherence.',
        'The quantum processor operated at cryogenic temperatures, thermal noise still caused intermittent decoherence.',
        'The quantum processor operated at cryogenic temperatures; nevertheless, thermal noise still caused intermittent decoherence.',
        'Operating at cryogenic temperatures, the quantum processor still experienced intermittent decoherence caused by thermal noise.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Option B joins two complete independent clauses ("The quantum processor operated..." and "thermal noise still caused...") with only a comma, creating a classic comma splice.',
        whyCorrect: 'Option B contains a fatal comma splice error.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Although the quantum processor operated at cryogenic temperatures, thermal noise still caused intermittent decoherence.', whyWrong: 'Grammatically sound complex sentence with dependent introductory clause.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'The quantum processor operated at cryogenic temperatures, thermal noise still caused intermittent decoherence.', whyWrong: 'Correct answer (contains fatal comma splice).' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'The quantum processor operated at cryogenic temperatures; nevertheless, thermal noise still caused intermittent decoherence.', whyWrong: 'Correctly punctuated compound sentence with semicolon and conjunctive adverb.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Operating at cryogenic temperatures, the quantum processor still experienced intermittent decoherence caused by thermal noise.', whyWrong: 'Correctly punctuated sentence with introductory participial modifier.' }
        ]
      }
    },
    {
      questionNumber: 37,
      id: 'ch5-q37',
      difficulty: 'Elite',
      skillTag: 'Sentence Boundaries - Em Dash Interruption & Synthesis',
      prompt: 'The atmospheric chemist’s primary finding—that tropospheric ozone concentrations had spiked during the heatwave—___ published in the journal Nature Climate Change.',
      options: ['was', 'were', 'being', 'having been'],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The pair of em dashes sets off an appositive clause ("that tropospheric ozone..."). Stripping out the parenthetical phrase reveals the singular subject "finding", which requires the singular finite verb "was published".',
        whyCorrect: 'Option A correctly matches singular "finding" with singular verb "was".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'was', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'were', whyWrong: 'Plural verb falsely agreeing with "concentrations" inside the dashes.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'being', whyWrong: 'Participle creating a sentence fragment missing a conjugated verb.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'having been', whyWrong: 'Compound participle creating an ungrammatical fragment.' }
        ]
      }
    },
    {
      questionNumber: 38,
      id: 'ch5-q38',
      difficulty: 'Elite',
      skillTag: 'Sentence Boundaries - Concession vs Causation Synthesis',
      prompt: 'Combine the propositions with the sharpest rhetorical precision: "Silicon solar panels dominate the current market. Perovskite-based cells offer significantly higher theoretical energy conversion efficiency."',
      options: [
        'Silicon solar panels dominate the current market, and perovskite-based cells offer significantly higher theoretical efficiency.',
        'Although silicon solar panels currently dominate the commercial market, perovskite-based cells offer significantly higher theoretical efficiency.',
        'Silicon solar panels dominate the current market because perovskite-based cells offer higher theoretical efficiency.',
        'Perovskite-based cells offer higher theoretical efficiency; consequently, silicon solar panels dominate the market.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The relationship is one of technological concession/contrast: despite silicon\'s commercial market dominance, perovskite holds greater theoretical potential.',
        whyCorrect: 'Option B uses "Although" to subordinate market dominance and highlight emerging technological superiority.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Silicon solar panels dominate the current market, and perovskite-based cells offer significantly higher theoretical efficiency.', whyWrong: 'Flat coordination fails to capture the competitive tension.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Although silicon solar panels currently dominate the commercial market, perovskite-based cells offer significantly higher theoretical efficiency.', whyWrong: 'Correct answer.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Silicon solar panels dominate the current market because perovskite-based cells offer higher theoretical efficiency.', whyWrong: 'Illogical causal relationship.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Perovskite-based cells offer higher theoretical efficiency; consequently, silicon solar panels dominate the market.', whyWrong: 'Inverts logical consequence (higher efficiency does not cause competitor dominance).' }
        ]
      }
    },
    {
      questionNumber: 39,
      id: 'ch5-q39',
      difficulty: 'Elite',
      skillTag: 'Sentence Boundaries - Semicolon with Transitional Phrase',
      prompt: 'The deep-sea hydrothermal expedition collected hundreds of benthic specimens; ___, the submersibles recorded high-resolution bathymetric acoustic maps of the abyssal plain.',
      options: ['in addition', 'on the other hand', 'nonetheless', 'therefore'],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Both independent clauses detail additive research achievements of the expedition: collecting benthic specimens and recording acoustic maps. "In addition" signals this additive relationship.',
        whyCorrect: 'Option A provides the correct additive transition.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'in addition', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'on the other hand', whyWrong: 'Signals contrast, whereas the clauses are additive.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'nonetheless', whyWrong: 'Signals concession or unexpected contradiction.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'therefore', whyWrong: 'Signals cause and effect, which is not present here.' }
        ]
      }
    },
    {
      questionNumber: 40,
      id: 'ch5-q40',
      difficulty: 'Elite',
      skillTag: 'Sentence Boundaries - Complex Participial Sentence Synthesis',
      prompt: 'Select the sentence that combines all four elements without comma splices, dangling modifiers, or wordiness: (1) Geneticists extracted ancient DNA from a 40,000-year-old hominin fossil. (2) They reconstructed its mitochondrial genome. (3) They discovered interbreeding with Denisovans. (4) This research altered our understanding of human migration.',
      options: [
        'Extracting ancient DNA from a 40,000-year-old fossil, the mitochondrial genome was reconstructed by geneticists, who discovered interbreeding with Denisovans, which altered our understanding of human migration.',
        'After extracting ancient DNA from a 40,000-year-old hominin fossil, geneticists reconstructed its mitochondrial genome and discovered evidence of interbreeding with Denisovans, a breakthrough that altered our understanding of human migration.',
        'Geneticists extracted ancient DNA from a 40,000-year-old fossil, they reconstructed its mitochondrial genome, Denisovan interbreeding was discovered, altering human migration understanding.',
        'Having extracted ancient DNA from a 40,000-year-old fossil to reconstruct its mitochondrial genome, Denisovan interbreeding was discovered by geneticists and it altered human migration.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Option B attaches the introductory modifier "After extracting..." directly to "geneticists", coordinates the compound predicate ("reconstructed... and discovered..."), and resolves the final claim through an appositive noun phrase ("a breakthrough that altered...").',
        whyCorrect: 'Option B is structurally flawless, semantically rich, and free of all boundary/modifier errors.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Extracting ancient DNA from a 40,000-year-old fossil, the mitochondrial genome was reconstructed by geneticists, who discovered interbreeding with Denisovans, which altered our understanding of human migration.', whyWrong: 'Contains a dangling modifier ("genome" did not extract DNA) and passive voice.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'After extracting ancient DNA from a 40,000-year-old hominin fossil, geneticists reconstructed its mitochondrial genome and discovered evidence of interbreeding with Denisovans, a breakthrough that altered our understanding of human migration.', whyWrong: 'Correct answer.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Geneticists extracted ancient DNA from a 40,000-year-old fossil, they reconstructed its mitochondrial genome, Denisovan interbreeding was discovered, altering human migration understanding.', whyWrong: 'Contains multiple fatal comma splices.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Having extracted ancient DNA from a 40,000-year-old fossil to reconstruct its mitochondrial genome, Denisovan interbreeding was discovered by geneticists and it altered human migration.', whyWrong: 'Dangling participial modifier attached to "interbreeding".' }
        ]
      }
    }
  ]
};

export const EXERCISE_BLOCK_5: WritingExerciseBlock = {
  blockNumber: 5,
  title: 'Block 5 Exercises: Parallel Structure & Syntactic Symmetry',
  description: '10 Questions (Questions 41–50) testing parallel form across lists, correlative conjunction balance, comparative symmetry, and elliptical series.',
  questions: [
    {
      questionNumber: 41,
      id: 'ch5-q41',
      difficulty: 'Intermediate',
      skillTag: 'Parallel Structure - Infinitive Series',
      prompt: 'The maritime conservation protocol requires commercial vessels to reduce cruising speeds in calving zones, log acoustic sonar readings, and ___ all cetacean sightings to harbor authorities.',
      options: ['transmit', 'transmitting', 'transmission of', 'to be transmitting'],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The infinitive marker "to" governs a parallel series of base verbs: [to] reduce, log, and transmit.',
        whyCorrect: 'Option A supplies the base verb "transmit", completing the parallel series.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'transmit', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'transmitting', whyWrong: 'Gerund (-ing) breaks parallel base verb series.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'transmission of', whyWrong: 'Noun phrase breaks parallel verb series.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'to be transmitting', whyWrong: 'Progressive infinitive breaks simple base verb series.' }
        ]
      }
    },
    {
      questionNumber: 42,
      id: 'ch5-q42',
      difficulty: 'Intermediate',
      skillTag: 'Parallel Structure - Complex Nominal Series',
      prompt: 'The macroeconomic audit revealed three structural vulnerabilities in the regional banking sector: acute liquidity shortfalls, excessive exposure to commercial real estate, and ___.',
      options: [
        'the proliferation of unhedged interest-rate swaps',
        'internal risk-assessment models were outdated',
        'banks were failing to hedge interest-rate swaps',
        'to rely on unhedged interest-rate derivatives'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The colon introduces a series of parallel noun phrases: (1) acute liquidity shortfalls, (2) excessive exposure to commercial real estate, and (3) [Noun Phrase].',
        whyCorrect: 'Option A provides a complex noun phrase ("the proliferation of unhedged interest-rate swaps") matching the grammatical category of the preceding items.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'the proliferation of unhedged interest-rate swaps', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'internal risk-assessment models were outdated', whyWrong: 'Independent clause breaks parallel noun phrase list.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'banks were failing to hedge interest-rate swaps', whyWrong: 'Clause breaks parallel noun phrase list.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'to rely on unhedged interest-rate derivatives', whyWrong: 'Infinitive phrase breaks noun phrase list.' }
        ]
      }
    },
    {
      questionNumber: 43,
      id: 'ch5-q43',
      difficulty: 'Hard',
      skillTag: 'Parallel Structure - Correlative Conjunction Balance',
      prompt: 'The renewable energy initiative aims not only to modernize obsolete electrical grids ___ decentralized battery storage facilities in rural municipalities.',
      options: [
        'but also to deploy',
        'and also deploying',
        'but deployment of',
        'as well as deploying'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The correlative pair "not only [X] but also [Y]" requires strict structural symmetry. Since "not only" is followed by the infinitive "to modernize", "but also" must be followed by a parallel infinitive: "to deploy".',
        whyCorrect: 'Option A balances "to modernize" with "to deploy" after "but also".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'but also to deploy', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'and also deploying', whyWrong: 'Fails to use standard correlative "but also" and introduces an asymmetrical gerund.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'but deployment of', whyWrong: 'Pairs an infinitive with a noun phrase.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'as well as deploying', whyWrong: 'Breaks the "not only... but also" correlative construction.' }
        ]
      }
    },
    {
      questionNumber: 44,
      id: 'ch5-q44',
      difficulty: 'Hard',
      skillTag: 'Parallel Structure - Gerund Series Symmetry',
      prompt: 'The bioarchaeologist’s field protocol involved excavating burial strata, ___ collagen samples for mass spectrometry, and cataloging ceramic grave goods.',
      options: ['isolating', 'to isolate', 'isolation of', 'having isolated'],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The series consists of parallel gerund phrases: excavating burial strata, isolating collagen samples, and cataloging ceramic grave goods.',
        whyCorrect: 'Option A provides the parallel gerund "isolating".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'isolating', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'to isolate', whyWrong: 'Infinitive breaks gerund series.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'isolation of', whyWrong: 'Noun phrase breaks gerund series.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'having isolated', whyWrong: 'Compound perfect participle breaks simple gerund series.' }
        ]
      }
    },
    {
      questionNumber: 45,
      id: 'ch5-q45',
      difficulty: 'Hard',
      skillTag: 'Parallel Structure - Prepositional Series Distribution',
      prompt: 'Which choice most elegantly distributes the governing preposition without awkward repetition?',
      options: [
        'The municipal charter establishes regulations for commercial zoning, residential zoning, and industrial zoning.',
        'The municipal charter establishes regulations for commercial, residential, and industrial zoning.',
        'The municipal charter establishes regulations for commercial zoning, for residential zoning, and for industrial zoning.',
        'The municipal charter establishes regulations for commercial zoning, residential, and industrial zoning.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Distributing the single preposition "for" and head noun "zoning" across a coordinated series of parallel adjectives (commercial, residential, and industrial) creates concise and parallel syntax.',
        whyCorrect: 'Option B eliminates redundant head nouns and prepositions while maintaining strict parallelism.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'The municipal charter establishes regulations for commercial zoning, residential zoning, and industrial zoning.', whyWrong: 'Redundantly repeats "zoning" three times.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'The municipal charter establishes regulations for commercial, residential, and industrial zoning.', whyWrong: 'Correct answer.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'The municipal charter establishes regulations for commercial zoning, for residential zoning, and for industrial zoning.', whyWrong: 'Excessively repetitive with "for" and "zoning".' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'The municipal charter establishes regulations for commercial zoning, residential, and industrial zoning.', whyWrong: 'Asymmetrical list structure.' }
        ]
      }
    },
    {
      questionNumber: 46,
      id: 'ch5-q46',
      difficulty: 'Elite',
      skillTag: 'Parallel Structure - Parallel Comparative Clauses',
      prompt: 'Just as the printing press democratized access to theological and scientific treatises in early modern Europe, so too ___ access to complex computing resources across the globe.',
      options: [
        'have cloud computing platforms democratized',
        'cloud computing platforms have democratized',
        'the democratization of',
        'has cloud computing democratized'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The formal correlative comparison "Just as [Clause], so too [Inverted Clause]" requires balanced syntactic inversion: "Just as the printing press democratized..., so too have cloud computing platforms democratized...".',
        whyCorrect: 'Option A executes the elevated correlative inversion with correct subject-verb agreement (plural "platforms" with plural auxiliary "have").',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'have cloud computing platforms democratized', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'cloud computing platforms have democratized', whyWrong: 'Omits required inversion following "so too".' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'the democratization of', whyWrong: 'Noun fragment missing finite predicate.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'has cloud computing democratized', whyWrong: 'Singular auxiliary "has" fails to agree with plural "platforms" or misorders arguments.' }
        ]
      }
    },
    {
      questionNumber: 47,
      id: 'ch5-q47',
      difficulty: 'Elite',
      skillTag: 'Parallel Structure - Neither... Nor Symmetrical Voice',
      prompt: 'The forensic investigation established that the cyberattack neither penetrated the bank’s encrypted core ledger ___ the personal financial records of its retail clients.',
      options: [
        'nor compromised',
        'or compromising',
        'nor did it cause compromise to',
        'and nor compromised'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The correlative pair "neither... nor" governs two parallel simple past-tense transitive verbs: [neither] penetrated [Object 1] nor compromised [Object 2].',
        whyCorrect: 'Option A pairs "penetrated" with "nor compromised" in perfect structural symmetry.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'nor compromised', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'or compromising', whyWrong: 'Uses wrong conjunction ("or") and gerund.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'nor did it cause compromise to', whyWrong: 'Asymmetric clause inversion paired with simple verb phrase.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'and nor compromised', whyWrong: 'Ungrammatical double conjunction.' }
        ]
      }
    },
    {
      questionNumber: 48,
      id: 'ch5-q48',
      difficulty: 'Elite',
      skillTag: 'Parallel Structure - Governing Preposition Distribution',
      prompt: 'Which sentence most effectively preserves parallelism and concision across coordinated prepositional arguments?',
      options: [
        'The geopolitical treaty mandates compliance with international maritime law, nuclear nonproliferation treaties, and humanitarian conventions.',
        'The geopolitical treaty mandates compliance with international maritime law, with nuclear nonproliferation treaties, and with humanitarian conventions.',
        'The geopolitical treaty mandates compliance with international maritime law, compliance with nuclear nonproliferation treaties, and compliance with humanitarian conventions.',
        'The geopolitical treaty mandates compliance with international maritime law, nuclear nonproliferation treaties, and complying with humanitarian conventions.'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'When multiple noun phrases share a single governing preposition ("with"), stating the preposition once before the entire series (*compliance with [A], [B], and [C]*) is more concise and equally parallel to repeating the preposition before every item.',
        whyCorrect: 'Option A distributes "compliance with" across three parallel noun phrases without redundant repetition.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'The geopolitical treaty mandates compliance with international maritime law, nuclear nonproliferation treaties, and humanitarian conventions.', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'The geopolitical treaty mandates compliance with international maritime law, with nuclear nonproliferation treaties, and with humanitarian conventions.', whyWrong: 'Grammatically parallel, but unnecessarily repetitive with "with".' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'The geopolitical treaty mandates compliance with international maritime law, compliance with nuclear nonproliferation treaties, and compliance with humanitarian conventions.', whyWrong: 'Excessively repetitive and wordy.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'The geopolitical treaty mandates compliance with international maritime law, nuclear nonproliferation treaties, and complying with humanitarian conventions.', whyWrong: 'Breaks parallelism by switching from nouns to the gerund phrase "complying with".' }
        ]
      }
    },
    {
      questionNumber: 49,
      id: 'ch5-q49',
      difficulty: 'Hard',
      skillTag: 'Parallel Structure - Either... Or Clause Balance',
      prompt: 'The urban transit authority announced that it would either expand light-rail frequency during peak commuting hours ___ dedicated express bus lanes along major arterial corridors.',
      options: [
        'or construct',
        'or constructing',
        'nor construct',
        'or it would be constructing'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The correlative conjunction "either... or" governs two parallel base verbs following the modal auxiliary "would": [would either] expand [Object 1] or construct [Object 2].',
        whyCorrect: 'Option A pairs the base verb "expand" with the parallel base verb "construct".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'or construct', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'or constructing', whyWrong: 'Participle breaks parallel base verb series.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'nor construct', whyWrong: '"Nor" cannot be paired with "either".' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'or it would be constructing', whyWrong: 'Introduces an unneeded full clause breaking verb-phrase symmetry.' }
        ]
      }
    },
    {
      questionNumber: 50,
      id: 'ch5-q50',
      difficulty: 'Elite',
      skillTag: 'Parallel Structure - Comparative Clause Balance',
      prompt: 'In eighteenth-century maritime navigation, calculating longitude accurately at sea required far greater mathematical sophistication than ___ latitude from celestial altitude.',
      options: [
        'determining',
        'to determine',
        'determinations of',
        'when sailors determined'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The subject gerund phrase "calculating longitude accurately at sea" is compared across the pivot "than" with another activity. Symmetrical comparison requires a parallel gerund phrase: "determining latitude from celestial altitude".',
        whyCorrect: 'Option A matches the gerund "calculating" with the parallel gerund "determining".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'determining', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'to determine', whyWrong: 'Infinitive phrase breaks symmetry with the initial gerund subject.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'determinations of', whyWrong: 'Plural noun phrase creates an asymmetrical comparison.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'when sailors determined', whyWrong: 'Adverbial clause breaks symmetry with the gerund phrase.' }
        ]
      }
    }
  ]
};
