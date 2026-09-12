import json
import os

# PART 1 GENERATOR
part1_content = '''import { WritingExerciseBlock } from './satWritingTypes';

export const EXERCISE_BLOCK_1: WritingExerciseBlock = {
  blockNumber: 1,
  title: 'Block 1 Exercises: Multi-Rule Decision Making',
  description: '13 Elite Questions on multi-constraint decision making, single-rule traps, minimum change, new error tests, local/global balance, and certainty/scope/causation control.',
  questions: [
    {
      questionNumber: 1,
      id: 'ch7-b1-q1',
      difficulty: 'Medium',
      skillTag: 'Minimum Change Principle',
      prompt: 'While reviewing a draft, an editor identifies a comma splice between two independent clauses. Which answer choice should be preferred if it corrects the structural error without altering sentence meaning?',
      options: [
        'Rewrite the entire paragraph from a different perspective.',
        'Replace the comma with a semicolon between the two independent clauses.',
        'Insert several descriptive adjectives before the main subject.',
        'Change the subject of the second clause to create a dependent fragment.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Replacing the comma with a semicolon makes the minimum necessary structural correction without altering sentence meaning or introducing new complexity.',
        whyCorrect: 'Choice B is correct because replacing the comma with a semicolon fixes the comma splice with the smallest possible intervention.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Rewrite the entire paragraph from a different perspective.', whyWrong: 'Rewriting the entire paragraph violates the minimum-change principle and risks introducing new errors.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Replace the comma with a semicolon between the two independent clauses.', whyWrong: 'Correct. Minimum structural fix.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Insert several descriptive adjectives before the main subject.', whyWrong: 'Adding descriptive words adds clutter without addressing the independent clause boundary error.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Change the subject of the second clause to create a dependent fragment.', whyWrong: 'Changing the subject alters the meaning unnecessarily.' }
        ]
      }
    },
    {
      questionNumber: 2,
      id: 'ch7-b1-q2',
      difficulty: 'Medium',
      skillTag: 'Certainty Control',
      prompt: 'Although preliminary laboratory trials suggest that a newly synthesized catalyst **may reduce production costs**, a researcher wants to summarize the finding accurately. Which choice preserves the original evidentiary certainty?',
      options: [
        'The newly synthesized catalyst reduces production costs.',
        'The newly synthesized catalyst will reduce production costs.',
        'The newly synthesized catalyst may reduce production costs.',
        'The newly synthesized catalyst always reduces production costs.'
      ],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'The modal verb "may" establishes possibility, not certainty. "The catalyst may reduce production costs" preserves the degree of evidentiary certainty.',
        whyCorrect: 'Choice C matches the cautious tone and possibility established by the passage.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'The newly synthesized catalyst reduces production costs.', whyWrong: 'States a definitive fact, upgrading possibility to certainty.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'The newly synthesized catalyst will reduce production costs.', whyWrong: '"Will" expresses guaranteed future certainty.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'The newly synthesized catalyst may reduce production costs.', whyWrong: 'Correct. Preserves the exact modal certainty.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'The newly synthesized catalyst always reduces production costs.', whyWrong: '"Always" introduces an absolute universal claim unsupported by "may".' }
        ]
      }
    },
    {
      questionNumber: 3,
      id: 'ch7-b1-q3',
      difficulty: 'Medium',
      skillTag: 'Elite Decision Framework',
      prompt: 'When evaluated under strict Digital SAT scoring criteria, which statement best defines the principle of elite editing?',
      options: [
        'Always select the shortest answer choice regardless of context.',
        'Select the choice featuring the most complex academic vocabulary.',
        'Select the single choice that simultaneously satisfies all grammatical, logical, and evidence constraints.',
        'Select the choice that adds the greatest volume of detailed contextual information.'
      ],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'Elite editing is the process of finding the single answer that simultaneously satisfies all grammatical, logical, rhetorical, evidence, and concision constraints.',
        whyCorrect: 'Choice C reflects the multi-constraint survival model of elite writing.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Always select the shortest answer choice regardless of context.', whyWrong: 'Concision is a constraint, but the shortest answer can drop essential qualifications.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Select the choice featuring the most complex academic vocabulary.', whyWrong: 'Vocabulary complexity often hides unsupported claims.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Select the single choice that simultaneously satisfies all grammatical, logical, and evidence constraints.', whyWrong: 'Correct. Satisfies all constraints.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Select the choice that adds the greatest volume of detailed contextual information.', whyWrong: 'More information often buries main points or adds unsupported details.' }
        ]
      }
    },
    {
      questionNumber: 4,
      id: 'ch7-b1-q4',
      difficulty: 'Hard',
      skillTag: 'Transition Logic',
      prompt: 'Because two experimental datasets exhibit an unexpected divergence in atmospheric methane levels, a writer needs a transition to establish contrast between them. Which choice should be eliminated because it erroneously implies causation?',
      options: [
        'However',
        'Nevertheless',
        'In contrast',
        'Therefore'
      ],
      correctAnswer: 3,
      explanation: {
        coreReasoning: '"Therefore" belongs to the cause/effect family, whereas the sentence requires a contrast transition.',
        whyCorrect: 'Choice D introduces causation when contrast is required.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'However', whyWrong: 'Indicates contrast, fitting the sentence.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Nevertheless', whyWrong: 'Indicates concessive contrast, fitting the sentence.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'In contrast', whyWrong: 'Indicates direct contrast, fitting the sentence.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Therefore', whyWrong: 'Correct to eliminate. "Therefore" indicates result/causation.' }
        ]
      }
    },
    {
      questionNumber: 5,
      id: 'ch7-b1-q5',
      difficulty: 'Hard',
      skillTag: 'Causation Control',
      prompt: 'Although field researchers recorded a statistically significant correlation between ocean surface temperature and coral bleaching, their study design did not isolate confounding variables. Which statement accurately reports the finding?',
      options: [
        'Elevated ocean temperature directly caused coral bleaching.',
        'Elevated ocean temperature was associated with coral bleaching.',
        'Elevated ocean temperature determined the rate of coral bleaching.',
        'Elevated ocean temperature produced coral bleaching.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Because the notes explicitly state that causation was not established, the answer must use non-causal observational wording like "was associated with".',
        whyCorrect: 'Choice B preserves the observational relationship without claiming causation.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Elevated ocean temperature directly caused coral bleaching.', whyWrong: 'Explicitly claims causation forbidden by the study limits.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Elevated ocean temperature was associated with coral bleaching.', whyWrong: 'Correct. Preserves association.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Elevated ocean temperature determined the rate of coral bleaching.', whyWrong: '"Determined" implies deterministic causation.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Elevated ocean temperature produced coral bleaching.', whyWrong: '"Produced" implies direct causal generation.' }
        ]
      }
    },
    {
      questionNumber: 6,
      id: 'ch7-b1-q6',
      difficulty: 'Hard',
      skillTag: 'New Error Test',
      prompt: 'When an answer choice corrects a dangling modifier in an introductory phrase but introduces an ambiguous pronoun (*it*) into the main clause, how should an editor evaluate that choice?',
      options: [
        'Select it immediately because the initial modifier error has been resolved.',
        'Ignore the ambiguous pronoun if the main verb tense is consistent.',
        'Reject it because an acceptable choice must fix the original error without creating a new grammatical fault.',
        'Select it if it is longer than the original sentence.'
      ],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'An elite answer must solve the initial error without creating a new one. A choice that fixes a modifier but introduces pronoun ambiguity fails the "New Error" test.',
        whyCorrect: 'Choice C recognizes that the entire resulting sentence must remain structurally and logically sound.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Select it immediately because the initial modifier error has been resolved.', whyWrong: 'Violates the New Error rule by ignoring the introduced pronoun ambiguity.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Ignore the ambiguous pronoun if the main verb tense is consistent.', whyWrong: 'Pronoun ambiguity makes a sentence incorrect.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Reject it because an acceptable choice must fix the original error without creating a new grammatical fault.', whyWrong: 'Correct. Answers creating new errors must be rejected.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Select it if it is longer than the original sentence.', whyWrong: 'Length is irrelevant to correctness.' }
        ]
      }
    },
    {
      questionNumber: 7,
      id: 'ch7-b1-q7',
      difficulty: 'Hard',
      skillTag: 'Information Bridge',
      prompt: 'In a monograph on quantum computing, a paragraph details a breakthrough in qubit coherence time and then transitions into industrial applications. Which sentence serves as the most effective bridge between these ideas?',
      options: [
        'The lead physicists received their doctoral degrees from European universities.',
        'By extending qubit coherence times, the breakthrough allows quantum processors to perform complex industrial simulations without error.',
        'The experimental facility was constructed in 1998.',
        'Quantum mechanics remains a challenging subject for undergraduate students.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'A bridge sentence connects the preceding idea (coherence breakthrough) to the following idea (industrial processor simulation).',
        whyCorrect: 'Choice B mentions extended coherence times and directly connects them to industrial simulation efficiency.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'The lead physicists received their doctoral degrees from European universities.', whyWrong: 'Irrelevant biographical detail.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'By extending qubit coherence times, the breakthrough allows quantum processors to perform complex industrial simulations without error.', whyWrong: 'Correct. Bridges breakthrough to application.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'The experimental facility was constructed in 1998.', whyWrong: 'Irrelevant historical context.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Quantum mechanics remains a challenging subject for undergraduate students.', whyWrong: 'General commentary omitting the specific technological link.' }
        ]
      }
    },
    {
      questionNumber: 8,
      id: 'ch7-b1-q8',
      difficulty: 'Elite',
      skillTag: 'Scope & Evidence Control',
      prompt: 'While reviewing a clinical study, a researcher notes that **three regional medical centers reported a 15% reduction in surgical site infections** after implementing a pre-operative sterilization protocol. Which summary choice respects the exact boundaries of this evidence?',
      options: [
        'The sterilization protocol lowers surgical site infection rates across all hospitals.',
        'The sterilization protocol can reduce surgical site infection rates in clinical settings.',
        'The sterilization protocol completely eliminated surgical site infections.',
        'The sterilization protocol always lowers infection rates regardless of surgical procedure.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Observing lower rates in three hospitals supports a cautious claim ("can reduce"). Universal claims ("across all hospitals", "always", "eliminated") exceed the evidence.',
        whyCorrect: 'Choice B is appropriately cautious and preserves the possible implication without overgeneralizing.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'The sterilization protocol lowers surgical site infection rates across all hospitals.', whyWrong: 'Overgeneralizes three hospitals to all hospitals.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'The sterilization protocol can reduce surgical site infection rates in clinical settings.', whyWrong: 'Correct. Cautious and supported.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'The sterilization protocol completely eliminated surgical site infections.', whyWrong: 'Extremist claim ("eliminated" vs "15% reduction").' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'The sterilization protocol always lowers infection rates regardless of surgical procedure.', whyWrong: '"Always" introduces unsupported universal certainty.' }
        ]
      }
    },
    {
      questionNumber: 9,
      id: 'ch7-b1-q9',
      difficulty: 'Elite',
      skillTag: 'Meaning Control',
      prompt: 'An author writes: **"The new spectrophotometer analyzes liquid samples faster than the legacy model."** Which revision alters the fundamental meaning rather than merely refining concision?',
      options: [
        'The new spectrophotometer analyzes liquid samples more rapidly than the legacy model.',
        'The new spectrophotometer exhibits a higher sample processing speed than the legacy model.',
        'The new spectrophotometer is superior to the legacy model in every operational dimension.',
        'Liquid samples are analyzed more quickly by the new spectrophotometer than by the legacy model.'
      ],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'The original establishes a specific speed advantage. Claiming it is "superior in every operational dimension" adds claims about cost, durability, and accuracy that are not in the original.',
        whyCorrect: 'Choice C changes the meaning by expanding speed into universal operational superiority.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'The new spectrophotometer analyzes liquid samples more rapidly than the legacy model.', whyWrong: 'Preserves exact meaning.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'The new spectrophotometer exhibits a higher sample processing speed than the legacy model.', whyWrong: 'Preserves speed comparison.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'The new spectrophotometer is superior to the legacy model in every operational dimension.', whyWrong: 'Correct to identify. Alters meaning significantly.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Liquid samples are analyzed more quickly by the new spectrophotometer than by the legacy model.', whyWrong: 'Preserves speed comparison in passive voice.' }
        ]
      }
    },
    {
      questionNumber: 10,
      id: 'ch7-b1-q10',
      difficulty: 'Elite',
      skillTag: 'Concision & Qualifier Control',
      prompt: 'In editing the draft sentence **"The astronomical discovery may potentially lead to new theoretical models,"** an editor seeks to eliminate tautological redundancy without altering the modal qualification. Which revision is best?',
      options: [
        'The astronomical discovery will lead to new theoretical models.',
        'The astronomical discovery may lead to new theoretical models.',
        'The astronomical discovery leads to new theoretical models.',
        'The astronomical discovery inevitably leads to new theoretical models.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: '"May potentially" is redundant because both words express possibility. Removing "potentially" while keeping "may" eliminates redundancy while preserving possibility.',
        whyCorrect: 'Choice B removes redundancy without converting "may" into certainty.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'The astronomical discovery will lead to new theoretical models.', whyWrong: 'Replaces possibility with certainty.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'The astronomical discovery may lead to new theoretical models.', whyWrong: 'Correct. Removes redundancy, preserves uncertainty.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'The astronomical discovery leads to new theoretical models.', whyWrong: 'Presents hypothetical application as present fact.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'The astronomical discovery inevitably leads to new theoretical models.', whyWrong: 'Adds absolute certainty.' }
        ]
      }
    },
    {
      questionNumber: 11,
      id: 'ch7-b1-q11',
      difficulty: 'Elite',
      skillTag: 'Explanatory Relationships',
      prompt: 'When an initial high-pressure physics experiment produced anomalous pressure readings, researchers subsequently discovered that a ruby pressure sensor—which had been positioned near the anvil edge—was misaligned. Which choice best connects these facts explanatory?',
      options: [
        'The anomalous readings proved that high-pressure physics models are incorrect.',
        'The ruby pressure sensor had been purchased from a commercial supplier in 2019.',
        'The sensor misalignment provided a probable mechanical explanation for the initial anomalous pressure readings.',
        'The researchers had originally expected the pressure readings to match theoretical predictions.'
      ],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'The sensor misalignment offers a probable explanation for why the initial experiment produced anomalous readings, connecting the two statements logically.',
        whyCorrect: 'Choice C establishes an appropriate explanatory link with cautious wording ("probable mechanical explanation").',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'The anomalous readings proved that high-pressure physics models are incorrect.', whyWrong: 'Overclaims failure when sensor misalignment was the issue.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'The ruby pressure sensor had been purchased from a commercial supplier in 2019.', whyWrong: 'Irrelevant detail.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'The sensor misalignment provided a probable mechanical explanation for the initial anomalous pressure readings.', whyWrong: 'Correct. Logically connects the two facts.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'The researchers had originally expected the pressure readings to match theoretical predictions.', whyWrong: 'Focuses on expectation rather than connecting readings to misalignment.' }
        ]
      }
    },
    {
      questionNumber: 12,
      id: 'ch7-b1-q12',
      difficulty: 'Elite',
      skillTag: 'Distractor Analysis',
      prompt: 'When analyzing incorrect options on 750+ level SAT Writing questions, which distractor profile represents the most deceptive trap for high-scoring students?',
      options: [
        'A choice that contains obvious subject-verb agreement errors.',
        'A choice that is completely off-topic from the passage theme.',
        'A choice that is grammatically flawless and topic-relevant but introduces an unsupported claim.',
        'A choice that contains proper punctuation and accurate evidence.'
      ],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'A choice that is grammatically correct and relevant tricks students into selecting it, but if it introduces an unsupported claim, it is wrong.',
        whyCorrect: 'Choice C represents the most seductive elite distractor.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'A choice that contains obvious subject-verb agreement errors.', whyWrong: 'Grammar errors are easily eliminated.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'A choice that is completely off-topic from the passage theme.', whyWrong: 'Irrelevance is relatively easy to spot.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'A choice that is grammatically flawless and topic-relevant but introduces an unsupported claim.', whyWrong: 'Correct. Seduces solvers because it passes grammar and topic filters.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'A choice that contains proper punctuation and accurate evidence.', whyWrong: 'This is the definition of the correct answer.' }
        ]
      }
    },
    {
      questionNumber: 13,
      id: 'ch7-b1-q13',
      difficulty: 'Elite',
      skillTag: 'Inverted Predicate & Constraint Balance',
      prompt: 'Because deep beneath the Andean plateau **lie/lies extensive geothermal reservoirs**, an editor must select the verb that maintains grammatical number with an inverted subject. Which choice is grammatically correct?',
      options: [
        'Because deep beneath the Andean plateau lies extensive geothermal reservoirs, clean energy developers have initiated drilling.',
        'Because deep beneath the Andean plateau lie extensive geothermal reservoirs, clean energy developers have initiated drilling.',
        'Because deep beneath the Andean plateau is extensive geothermal reservoirs, clean energy developers have initiated drilling.',
        'Because deep beneath the Andean plateau has been extensive geothermal reservoirs, clean energy developers have initiated drilling.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'In inverted syntax ("deep beneath X lie Y"), the subject follows the verb. Here, "extensive geothermal reservoirs" is plural, requiring the plural verb "lie".',
        whyCorrect: 'Choice B correctly pairs plural "reservoirs" with plural verb "lie" in inverted order.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Because deep beneath the Andean plateau lies extensive geothermal reservoirs,...', whyWrong: 'Uses singular "lies" with plural subject "reservoirs".' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Because deep beneath the Andean plateau lie extensive geothermal reservoirs,...', whyWrong: 'Correct. Plural "lie" matches plural "reservoirs".' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Because deep beneath the Andean plateau is extensive geothermal reservoirs,...', whyWrong: 'Uses singular "is" with plural subject.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Because deep beneath the Andean plateau has been extensive geothermal reservoirs,...', whyWrong: 'Uses singular "has been" with plural subject.' }
        ]
      }
    }
  ]
};

export const EXERCISE_BLOCK_2: WritingExerciseBlock = {
  blockNumber: 2,
  title: 'Block 2 Exercises: Advanced Distractor Analysis',
  description: '13 Elite Questions on four-choice differentiation, hidden quantifiers, hidden time markers, hidden causal verbs, hidden comparisons, and 3-layer reading.',
  questions: [
    {
      questionNumber: 14,
      id: 'ch7-b2-q1',
      difficulty: 'Medium',
      skillTag: 'Certainty Control',
      prompt: 'When an editor modifies a passage by changing the phrase **"the algorithm may improve soil yield predictions"** to **"the algorithm will improve soil yield predictions,"** what specific semantic dimension has been altered?',
      options: [
        'Punctuation structure',
        'Evidentiary certainty level',
        'Verb tense chronology',
        'Clause boundary alignment'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Changing "may" (possibility) to "will" (definite certainty) alters the degree of evidentiary certainty.',
        whyCorrect: 'Choice B correctly identifies the change in certainty.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Punctuation structure', whyWrong: 'No punctuation was changed.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Evidentiary certainty level', whyWrong: 'Correct. "May" vs "will" alters certainty.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Verb tense chronology', whyWrong: 'Certainty is the primary change.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Clause boundary alignment', whyWrong: 'Sentence boundaries are unaffected.' }
        ]
      }
    },
    {
      questionNumber: 15,
      id: 'ch7-b2-q2',
      difficulty: 'Medium',
      skillTag: 'Scope Control',
      prompt: 'If a passage states that **"several trial participants exhibited elevated antibody titers,"** which choice introduces an unauthorized expansion of scope?',
      options: [
        'Some trial participants exhibited elevated antibody titers.',
        'A small group of trial participants exhibited elevated antibody titers.',
        'Most trial participants exhibited elevated antibody titers.',
        'A number of trial participants exhibited elevated antibody titers.'
      ],
      correctAnswer: 2,
      explanation: {
        coreReasoning: '"Several" indicates a small, unspecified number (>2), whereas "most" asserts a majority (>50%). Changing "several" to "most" illegally expands the scope.',
        whyCorrect: 'Choice C changes the scope of the claim.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Some trial participants exhibited elevated antibody titers.', whyWrong: '"Some" is comparable in scope to "several".' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'A small group of trial participants exhibited elevated antibody titers.', whyWrong: 'Preserves small group scope.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Most trial participants exhibited elevated antibody titers.', whyWrong: 'Correct. Expands scope to a majority.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'A number of trial participants exhibited elevated antibody titers.', whyWrong: 'Preserves indefinite scope.' }
        ]
      }
    },
    {
      questionNumber: 16,
      id: 'ch7-b2-q3',
      difficulty: 'Medium',
      skillTag: 'Causal Strength',
      prompt: 'Which verb choice establishes the strongest degree of deterministic causation between two physical phenomena?',
      options: [
        'coincided with',
        'was correlated with',
        'followed after',
        'caused'
      ],
      correctAnswer: 3,
      explanation: {
        coreReasoning: '"Caused" is a direct causal verb. "Followed after" expresses sequence, and "correlated with" or "coincided with" express correlation.',
        whyCorrect: 'Choice D expresses direct deterministic causation.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'coincided with', whyWrong: 'Simultaneous timing only.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'was correlated with', whyWrong: 'Correlation only.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'followed after', whyWrong: 'Sequence only.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'caused', whyWrong: 'Correct. Direct causal claim.' }
        ]
      }
    },
    {
      questionNumber: 17,
      id: 'ch7-b2-q4',
      difficulty: 'Hard',
      skillTag: 'Sequence vs Causation',
      prompt: 'In an urban studies report, the authors note: **"The municipal subway network expanded in 2012; property values in adjacent neighborhoods rose in 2014."** Which sentence makes the safest statement supported by this evidence?',
      options: [
        'The subway expansion directly caused property values to rise.',
        'Property values rose after the municipal subway network expanded.',
        'The subway expansion guaranteed the increase in property values.',
        'The subway expansion was the sole factor driving property value growth.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The evidence establishes two dates (2012 and 2014), proving temporal sequence. It does not establish causation.',
        whyCorrect: 'Choice B states the temporal sequence without making an unsupported causal claim.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'The subway expansion directly caused property values to rise.', whyWrong: 'Claims causation unsupported by date sequence alone.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Property values rose after the municipal subway network expanded.', whyWrong: 'Correct. Factually states sequence.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'The subway expansion guaranteed the increase in property values.', whyWrong: 'Adds unsupported guarantee.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'The subway expansion was the sole factor driving property value growth.', whyWrong: 'Claims sole causation.' }
        ]
      }
    },
    {
      questionNumber: 18,
      id: 'ch7-b2-q5',
      difficulty: 'Hard',
      skillTag: 'Comparison Alignment',
      prompt: 'In a comparative analysis of optical telescopes, which sentence contains an illogical entity comparison error caused by misaligned introductory phrasing?',
      options: [
        'Unlike ground-based observatories, space telescopes operate above atmospheric distortion.',
        'Compared with ground-based observatories, space telescopes capture higher resolution images.',
        'Unlike ground-based observatories, astronomers found space telescopes far less susceptible to atmospheric interference.',
        'Space telescopes operate above atmospheric distortion, whereas ground-based observatories must correct for light turbulence.'
      ],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'In Choice C, "astronomers" is placed immediately after "Unlike ground-based observatories", creating an illogical comparison between ground observatories and human astronomers.',
        whyCorrect: 'Choice C misaligns compared entities.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Unlike ground-based observatories, space telescopes...', whyWrong: 'Compares ground observatories with space telescopes.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Compared with ground-based observatories, space telescopes...', whyWrong: 'Compares ground observatories with space telescopes.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Unlike ground-based observatories, astronomers found...', whyWrong: 'Correct. Compares observatories with astronomers.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Space telescopes operate..., whereas ground-based observatories...', whyWrong: 'Compares space telescopes with ground observatories.' }
        ]
      }
    },
    {
      questionNumber: 19,
      id: 'ch7-b2-q6',
      difficulty: 'Hard',
      skillTag: 'Evidence Boundaries',
      prompt: 'A passage states that **a newly designed lithium-sulfur battery retained 88 percent of its initial charge capacity after 500 cycles.** Which sentence respects the boundary of this finding?',
      options: [
        'The newly designed battery completely solved the problem of battery degradation.',
        'The newly designed battery retained 88 percent of its capacity after 500 test cycles.',
        'The newly designed battery is guaranteed to last indefinitely in electric vehicles.',
        'The newly designed battery outperforms every other energy storage technology on the market.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The evidence establishes only an 88% retention rate over 500 cycles. Claims of "completely solved" or "outperforms every other" are unsupported.',
        whyCorrect: 'Choice B states the exact supported finding.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'The newly designed battery completely solved the problem of battery degradation.', whyWrong: 'Claims problem is completely solved.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'The newly designed battery retained 88 percent of its capacity after 500 test cycles.', whyWrong: 'Correct. Preserves evidence.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'The newly designed battery is guaranteed to last indefinitely in electric vehicles.', whyWrong: 'Unsupported guarantee.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'The newly designed battery outperforms every other energy storage technology on the market.', whyWrong: 'Unsupported universal claim.' }
        ]
      }
    },
    {
      questionNumber: 20,
      id: 'ch7-b2-q7',
      difficulty: 'Hard',
      skillTag: 'Grammar vs Evidence',
      prompt: 'Which answer choice must be eliminated even if it contains zero grammatical or mechanical errors?',
      options: [
        'A choice that changes "the preliminary data may indicate" to "the preliminary data proves."',
        'A choice that removes a redundant phrase while preserving sentence meaning.',
        'A choice that replaces an ambiguous demonstrative pronoun with a specific noun.',
        'A choice that maintains identical subject-verb agreement and original modal tone.'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Changing "may indicate" to "proves" is grammatically correct, but it alters evidentiary strength from tentative possibility to definitive proof, making it wrong.',
        whyCorrect: 'Choice A alters the evidence ceiling despite being grammatically valid.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'A choice that changes "the preliminary data may indicate" to "the preliminary data proves."', whyWrong: 'Correct. Grammatical, but alters evidence.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'A choice that removes a redundant phrase while preserving sentence meaning.', whyWrong: 'This is desirable.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'A choice that replaces an ambiguous demonstrative pronoun with a specific noun.', whyWrong: 'This is desirable.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'A choice that maintains identical subject-verb agreement and original modal tone.', whyWrong: 'This is desirable.' }
        ]
      }
    },
    {
      questionNumber: 21,
      id: 'ch7-b2-q8',
      difficulty: 'Elite',
      skillTag: 'Multi-Study Synthesis',
      prompt: 'Notes:\n• Trial 1 reported a moderate positive correlation between exercise and cognitive focus.\n• Trial 2 reported a weak positive correlation.\n• Neither trial controlled for baseline participant diet or sleep quality.\n\nWhich synthesis choice is best?',
      options: [
        'Both trials conclusively proved that exercise causes cognitive focus.',
        'Trial 1 and Trial 2 observed positive correlations between exercise and cognitive focus, though neither isolated dietary or sleep confounders.',
        'Trial 1 proved exercise causes focus, whereas Trial 2 disproved it.',
        'Exercise guarantees improved cognitive performance regardless of diet or sleep.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'A valid synthesis must incorporate both findings (correlations found) and the key methodological limitation (uncontrolled diet and sleep confounders).',
        whyCorrect: 'Choice B preserves both findings and the limitation without overclaiming.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Both trials conclusively proved that exercise causes cognitive focus.', whyWrong: 'Contradicts the note that neither proved causation.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Trial 1 and Trial 2 observed positive correlations between exercise and cognitive focus, though neither isolated dietary or sleep confounders.', whyWrong: 'Correct. Complete, accurate synthesis.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Trial 1 proved exercise causes focus, whereas Trial 2 disproved it.', whyWrong: 'Incorrectly asserts causation and disproof.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Exercise guarantees improved cognitive performance regardless of diet or sleep.', whyWrong: 'Unsupported guarantee.' }
        ]
      }
    },
    {
      questionNumber: 22,
      id: 'ch7-b2-q9',
      difficulty: 'Elite',
      skillTag: 'Transition Category',
      prompt: 'A historian contrasts traditional hand-forged blacksmithing techniques with nineteenth-century industrial drop-forging methods. Which transition is most appropriate to introduce the structural divergence between the two manufacturing models?',
      options: [
        'For example',
        'In contrast',
        'Consequently',
        'Furthermore'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'When two manufacturing models differ fundamentally, the logical relationship between them is contrast.',
        whyCorrect: 'Choice B ("In contrast") correctly signals structural difference.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'For example', whyWrong: 'Indicates illustration.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'In contrast', whyWrong: 'Correct. Expresses contrast.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Consequently', whyWrong: 'Indicates result.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Furthermore', whyWrong: 'Indicates addition.' }
        ]
      }
    },
    {
      questionNumber: 23,
      id: 'ch7-b2-q10',
      difficulty: 'Elite',
      skillTag: 'Modifier Precision',
      prompt: 'In the sentence **"Having thoroughly analyzed the core sediment samples, the paleoclimatologist revised the lake formation timeline,"** which analysis correctly identifies the relationship established by the introductory participial phrase?',
      options: [
        'The introductory phrase describes an action performed by the core sediment samples.',
        'The introductory phrase describes an action performed by the paleoclimatologist prior to revising the timeline.',
        'The introductory phrase establishes that the lake formation timeline caused the analysis.',
        'The introductory phrase functions as a dangling modifier without a logical noun subject.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The subject performing "Having thoroughly analyzed" must immediately follow the comma. Here, "the paleoclimatologist" performed the analysis prior to revising the timeline.',
        whyCorrect: 'Choice B accurately identifies the subject and sequence.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'The introductory phrase describes an action performed by the core sediment samples.', whyWrong: 'Samples cannot analyze themselves.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'The introductory phrase describes an action performed by the paleoclimatologist prior to revising the timeline.', whyWrong: 'Correct. Accurately identifies subject and sequence.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'The introductory phrase establishes that the lake formation timeline caused the analysis.', whyWrong: 'Reverses cause and effect.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'The introductory phrase functions as a dangling modifier without a logical noun subject.', whyWrong: 'False; "paleoclimatologist" is the clear, logical subject.' }
        ]
      }
    },
    {
      questionNumber: 24,
      id: 'ch7-b2-q11',
      difficulty: 'Elite',
      skillTag: 'Unsupported Expansion',
      prompt: 'Original sentence: **"The newly developed enzyme broke down PET plastics in four laboratory trials."** Which revision contains an unauthorized expansion of scope?',
      options: [
        'In four laboratory trials, the newly developed enzyme successfully broke down PET plastics.',
        'The newly developed enzyme demonstrated an ability to degrade PET plastics across four laboratory trials.',
        'The newly developed enzyme completely eliminates global PET plastic pollution in all real-world environments.',
        'Laboratory testing across four trials confirmed that the newly developed enzyme broke down PET plastics.'
      ],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'The original notes breakdown in 4 lab trials. Claiming it "completely eliminates global PET plastic pollution in all real-world environments" expands lab results into universal real-world claims.',
        whyCorrect: 'Choice C introduces universal real-world claims unsupported by 4 lab trials.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'In four laboratory trials, the newly developed enzyme...', whyWrong: 'Accurate restatement.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'The newly developed enzyme demonstrated an ability...', whyWrong: 'Accurate restatement.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'The newly developed enzyme completely eliminates global PET plastic pollution in all real-world environments.', whyWrong: 'Correct to identify. Contains unsupported expansion.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Laboratory testing across four trials confirmed...', whyWrong: 'Accurate restatement.' }
        ]
      }
    },
    {
      questionNumber: 25,
      id: 'ch7-b2-q12',
      difficulty: 'Elite',
      skillTag: 'Chronology Control',
      prompt: 'In a biographical piece, the text notes: **"Early critics dismissed the composer\'s unconventional polyrhythms, but subsequent generations acclaimed them as foundational innovations."** Which choice accurately preserves this chronological trajectory?',
      options: [
        'Subsequent generations dismissed the polyrhythms before early critics acclaimed them.',
        'Although early critics initially dismissed the composer\'s unconventional polyrhythms, subsequent generations eventually acclaimed them as foundational innovations.',
        'Because early critics acclaimed the polyrhythms, subsequent generations dismissed them.',
        'The composer\'s polyrhythms were universally acclaimed by critics across all historical eras.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Chronology requires: initial dismissal by early critics → transition ("but") → subsequent acclaim by later generations.',
        whyCorrect: 'Choice B preserves the exact timeline and contrast.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Subsequent generations dismissed the polyrhythms before early critics acclaimed them.', whyWrong: 'Inverts the temporal order.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Although early critics initially dismissed the composer\'s unconventional polyrhythms, subsequent generations eventually acclaimed them as foundational innovations.', whyWrong: 'Correct. Preserves exact timeline and contrast.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Because early critics acclaimed the polyrhythms, subsequent generations dismissed them.', whyWrong: 'Distorts reaction history.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'The composer\'s polyrhythms were universally acclaimed by critics across all historical eras.', whyWrong: 'Erases the initial dismissal.' }
        ]
      }
    },
    {
      questionNumber: 26,
      id: 'ch7-b2-q13',
      difficulty: 'Elite',
      skillTag: 'Multi-Dimensional Process Comparison',
      prompt: 'Notes:\n• Process A: requires 30 minutes, operates at $50 per unit, achieves 99% purity.\n• Process B: requires 10 minutes, operates at $20 per unit, achieves 92% purity.\n\nWhich synthesis choice provides the most balanced multi-dimensional comparison for an industrial engineering evaluation?',
      options: [
        'Process B is superior to Process A in every respect.',
        'Process A is superior because high purity is the only metric that matters.',
        'While Process B offers significant time and cost advantages, Process A achieves a higher degree of chemical purity.',
        'Process A and Process B are identical in speed and operational cost.'
      ],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'A complete comparison must integrate time, cost, and purity across both processes without making an arbitrary single-metric value judgment.',
        whyCorrect: 'Choice C accurately contrasts Process B\'s time/cost advantage with Process A\'s purity advantage.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Process B is superior to Process A in every respect.', whyWrong: 'False; Process A has higher purity.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Process A is superior because high purity is the only metric that matters.', whyWrong: 'Subjective value judgment ignoring time/cost.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'While Process B offers significant time and cost advantages, Process A achieves a higher degree of chemical purity.', whyWrong: 'Correct. Balanced multi-variable comparison.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Process A and Process B are identical in speed and operational cost.', whyWrong: 'Directly contradicts the numerical notes.' }
        ]
      }
    },
    {
      questionNumber: 27,
      id: 'ch7-b2-q14',
      difficulty: 'Elite',
      skillTag: 'Scope Distortion',
      prompt: 'If a choice fixes a punctuation error between clauses but alters the qualifier from **"some botanists hypothesize"** to **"all botanists agree,"** how should an editor proceed?',
      options: [
        'Accept the choice because correcting clause punctuation is the primary objective.',
        'Reject the choice because altering the quantifier from "some" to "all" creates an unsupported universal consensus claim.',
        'Accept the choice if "all botanists agree" makes the sentence sound more authoritative.',
        'Accept the choice if it reduces total word count.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Even if punctuation is fixed, changing "some hypothesize" to "all agree" illegally expands the scope, introducing an unsupported consensus claim.',
        whyCorrect: 'Choice B recognizes that scope changes make an answer wrong regardless of punctuation.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Accept the choice because correcting clause punctuation is the primary objective.', whyWrong: 'Punctuation fixes do not override scope errors.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Reject the choice because altering the quantifier from "some" to "all" creates an unsupported universal consensus claim.', whyWrong: 'Correct. Reject due to scope alteration.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Accept the choice if "all botanists agree" makes the sentence sound more authoritative.', whyWrong: 'Authoritative sounding claims are wrong if unsupported.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Accept the choice if it reduces total word count.', whyWrong: 'Length does not override scope accuracy.' }
        ]
      }
    }
  ]
};

export const EXERCISE_BLOCK_3: WritingExerciseBlock = {
  blockNumber: 3,
  title: 'Block 3 Exercises: Rhetorical Purpose Under Competing Constraints',
  description: '12 Elite Questions testing function-first editing, intro vs. support, evidence vs. interpretation, claim vs. qualification, paragraph architecture, missing link, and balanced synthesis.',
  questions: [
    {
      questionNumber: 28,
      id: 'ch7-b3-q1',
      difficulty: 'Medium',
      skillTag: 'Sentence Function',
      prompt: 'In a essay on radio astronomy, the author introduces the Very Large Array (VLA) telescope and subsequently explains how its 28 dish antennas combine signals via interferometry. What is the primary rhetorical function of this explanation?',
      options: [
        'To outline the biographical background of the telescope\'s lead engineer.',
        'To explain the technical mechanism by which the telescope achieves high-resolution imaging.',
        'To list the financial construction expenses incurred by the observatory.',
        'To argue that optical telescopes should be completely decommissioned.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Explaining how dish antennas combine signals via interferometry serves the function of detailing the technical mechanism of high-resolution imaging.',
        whyCorrect: 'Choice B directly matches the function of explaining the interferometric operation.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'To outline the biographical background...', whyWrong: 'Off-topic.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'To explain the technical mechanism by which the telescope achieves high-resolution imaging.', whyWrong: 'Correct. Matches the described function.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'To list the financial construction expenses...', whyWrong: 'Off-topic.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'To argue that optical telescopes should be completely decommissioned.', whyWrong: 'Gross overstatement of function.' }
        ]
      }
    },
    {
      questionNumber: 29,
      id: 'ch7-b3-q2',
      difficulty: 'Medium',
      skillTag: 'Significance Statement',
      prompt: 'A student is drafting a paragraph about the 1953 discovery of DNA structure by Rosalind Franklin, James Watson, and Francis Crick. Which choice best highlights the scientific significance of Franklin\'s Photo 51?',
      options: [
        'Photo 51 was captured in a laboratory at King\'s College London in May 1952.',
        'By revealing the distinctive X-shaped diffraction pattern of B-DNA, Photo 51 provided the crucial helical dimensions needed to construct the double-helix model.',
        'X-ray crystallography was a technique utilized by several European physics departments.',
        'Watson and Crick published their structural findings in *Nature* in April 1953.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Highlighting scientific significance requires explaining how Photo 51 provided crucial helical dimensions for the double-helix model.',
        whyCorrect: 'Choice B explicitly highlights the crucial structural contribution of Photo 51.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Photo 51 was captured in a laboratory...', whyWrong: 'Gives location/date, not significance.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'By revealing the distinctive X-shaped diffraction pattern of B-DNA, Photo 51 provided the crucial helical dimensions needed to construct the double-helix model.', whyWrong: 'Correct. Explains scientific significance.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'X-ray crystallography was a technique...', whyWrong: 'General context.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Watson and Crick published their structural findings...', whyWrong: 'Publication detail.' }
        ]
      }
    },
    {
      questionNumber: 30,
      id: 'ch7-b3-q3',
      difficulty: 'Hard',
      skillTag: 'Introduction vs Support',
      prompt: 'A paragraph opens with the sentence: **"Urban green roofs provide measurable environmental benefits in densely populated cities."** Which sentence provides the most effective direct supporting evidence for this introductory claim?',
      options: [
        'Many city dwellers enjoy visiting municipal public parks on weekend afternoons.',
        'Data show that green roofs reduce building cooling energy consumption by up to 30 percent and absorb stormwater runoff.',
        'Architects in the twentieth century experimented with varied roof designs.',
        'Cities often encounter zoning challenges when approving new construction projects.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Direct supporting evidence for green roof environmental benefits must provide specific data measuring energy reduction and stormwater absorption.',
        whyCorrect: 'Choice B provides direct quantifiable evidence of environmental benefits.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Many city dwellers enjoy visiting municipal public parks...', whyWrong: 'General park preference.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Data show that green roofs reduce building cooling energy consumption by up to 30 percent and absorb stormwater runoff.', whyWrong: 'Correct. Direct supporting evidence.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Architects in the twentieth century experimented...', whyWrong: 'Historical architectural trivia.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Cities often encounter zoning challenges...', whyWrong: 'Zoning administrative trivia.' }
        ]
      }
    },
    {
      questionNumber: 31,
      id: 'ch7-b3-q4',
      difficulty: 'Hard',
      skillTag: 'Evidence vs Interpretation',
      prompt: 'In a paper on marine ecology, a student notes: **"Whale fall ecosystems host specialized chemosynthetic organisms that feed on lipid-rich skeleton deposits."** Which choice clearly distinguishes between empirical observation and researcher interpretation?',
      options: [
        'Researchers observed specialized organisms feeding on whale skeletons, leading them to hypothesize that whale falls act as stepping stones for deep-sea species dispersal.',
        'Whale falls definitively prove that all deep-sea life originated from surface mammals.',
        'Specialized organisms live on whale skeletons in the deep ocean.',
        'Deep-sea organisms prefer whale skeletons over hydrothermal vents.'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Distinguishing observation from interpretation requires framing the observed feeding behavior alongside the researcher hypothesis regarding species dispersal.',
        whyCorrect: 'Choice A explicitly separates observation (feeding on skeletons) from interpretation (hypothesizing stepping-stone dispersal).',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Researchers observed specialized organisms feeding on whale skeletons, leading them to hypothesize that whale falls act as stepping stones for deep-sea species dispersal.', whyWrong: 'Correct. Separates observation from hypothesis.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Whale falls definitively prove that all deep-sea life originated from surface mammals.', whyWrong: 'Absurd overreach.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Specialized organisms live on whale skeletons in the deep ocean.', whyWrong: 'Simple observation omitting interpretation.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Deep-sea organisms prefer whale skeletons over hydrothermal vents.', whyWrong: 'Unsupported preference claim.' }
        ]
      }
    },
    {
      questionNumber: 32,
      id: 'ch7-b3-q5',
      difficulty: 'Hard',
      skillTag: 'Claim vs Qualification',
      prompt: 'An author asserts that **a new AI diagnostic tool identifies diabetic retinopathy with high sensitivity.** Which choice best integrates a necessary methodological qualification into the claim?',
      options: [
        'The AI tool identifies diabetic retinopathy with 95 percent sensitivity, though its accuracy declines when analyzing low-resolution retinal scans.',
        'The AI tool is flawless and will replace human ophthalmologists worldwide.',
        'Diabetic retinopathy affects millions of patients globally.',
        'Retinal imaging technology was invented in the twentieth century.'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Integrating a qualification requires stating the high sensitivity claim (95%) alongside the performance boundary (declines on low-resolution scans).',
        whyCorrect: 'Choice A combines the strength claim with the specific operational limitation.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'The AI tool identifies diabetic retinopathy with 95 percent sensitivity, though its accuracy declines when analyzing low-resolution retinal scans.', whyWrong: 'Correct. Integrates claim and qualification.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'The AI tool is flawless and will replace human ophthalmologists worldwide.', whyWrong: 'Extremist claim omitting qualification.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Diabetic retinopathy affects millions of patients globally.', whyWrong: 'General epidemiology background.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Retinal imaging technology was invented in the twentieth century.', whyWrong: 'Historical trivia.' }
        ]
      }
    },
    {
      questionNumber: 33,
      id: 'ch7-b3-q6',
      difficulty: 'Elite',
      skillTag: 'Paragraph Architecture',
      prompt: 'A paragraph discusses the discovery of hydrothermal vents in 1977 and then shifts into explaining how chemosynthetic bacteria synthesize carbohydrates without sunlight. Where should the transition sentence **"Unlike surface ecosystems reliant on solar radiation, these vent communities draw energy directly from dissolved hydrogen sulfide"** be placed?',
      options: [
        'At the very beginning of the paragraph to introduce hydrothermal exploration.',
        'Between the sentence describing vent discovery and the sentence detailing chemosynthetic metabolism.',
        'At the end of the paragraph as a summary of oceanic geology.',
        'Omitted entirely because it duplicates the definition of sunlight.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The sentence contrasts solar reliance with vent chemical energy, acting as a logical bridge between the discovery of vents and the technical explanation of chemosynthesis.',
        whyCorrect: 'Choice B places the transition at the exact point of shift from discovery to metabolic mechanism.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'At the very beginning of the paragraph...', whyWrong: 'Premature before vent discovery is stated.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Between the sentence describing vent discovery and the sentence detailing chemosynthetic metabolism.', whyWrong: 'Correct. Serves as logical transition.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'At the end of the paragraph as a summary of oceanic geology.', whyWrong: 'Misplaces a core metabolic transition.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Omitted entirely...', whyWrong: 'The bridge is necessary for coherence.' }
        ]
      }
    },
    {
      questionNumber: 34,
      id: 'ch7-b3-q7',
      difficulty: 'Elite',
      skillTag: 'Missing Link Identification',
      prompt: 'Passage excerpt:\n> Early linguists struggled to decipher Egyptian hieroglyphs because they assumed the symbols were purely logographic. ___ This breakthrough allowed Jean-François Champollion to unlock the Rosetta Stone.\n\nWhich choice fills the missing logical link?',
      options: [
        'The Rosetta Stone was carved in 196 BCE.',
        'However, Thomas Young discovered that hieroglyphs also represented phonetic sounds, combining phonetic and logographic elements.',
        'Egypt is home to numerous ancient monuments.',
        'Champollion studied several ancient Semitic languages.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The missing link must bridge the early assumption (purely logographic) to Champollion\'s decipherment breakthrough by introducing the key discovery (phonetic sounds).',
        whyCorrect: 'Choice B provides the exact missing discovery link.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'The Rosetta Stone was carved in 196 BCE.', whyWrong: 'Historical carving date.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'However, Thomas Young discovered that hieroglyphs also represented phonetic sounds, combining phonetic and logographic elements.', whyWrong: 'Correct. Provides the missing breakthrough link.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Egypt is home to numerous ancient monuments.', whyWrong: 'General geographic context.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Champollion studied several ancient Semitic languages.', whyWrong: 'Biographical detail omitting the phonetic insight.' }
        ]
      }
    },
    {
      questionNumber: 35,
      id: 'ch7-b3-q8',
      difficulty: 'Elite',
      skillTag: 'Controlled Claim Synthesis',
      prompt: 'Notes:\n• Researchers observed higher seedling growth rates in shaded understory plots.\n• The trial evaluated one tree species (*Pinus strobus*).\n• Soil moisture was higher in shaded plots, though researchers did not manipulate moisture directly.\n\nThe student wants to present the study finding for an forestry journal without overclaiming. Which choice best accomplishes this goal?',
      options: [
        'Shade directly causes faster growth in all coniferous forest species.',
        'In *Pinus strobus*, higher seedling growth was observed in shaded plots, where soil moisture was also elevated, though direct causal mechanisms require further investigation.',
        'Soil moisture was the sole factor driving tree growth across the forest.',
        'Shaded understory plots eliminate seedling mortality.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Must preserve observation (growth in shade for *Pinus strobus*), note elevated soil moisture, and include cautious qualification regarding unmanipulated causal mechanisms.',
        whyCorrect: 'Choice B reflects observation, species boundary, and causal caveat.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Shade directly causes faster growth in all coniferous forest species.', whyWrong: 'Overgeneralizes to all coniferous species.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'In *Pinus strobus*, higher seedling growth was observed in shaded plots, where soil moisture was also elevated, though direct causal mechanisms require further investigation.', whyWrong: 'Correct. Controlled, boundary-respecting claim.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Soil moisture was the sole factor driving tree growth across the forest.', whyWrong: 'Asserts unmeasured sole causation.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Shaded understory plots eliminate seedling mortality.', whyWrong: 'Unsupported claim.' }
        ]
      }
    },
    {
      questionNumber: 36,
      id: 'ch7-b3-q9',
      difficulty: 'Elite',
      skillTag: 'Audience-Tailored Framing',
      prompt: 'Notes:\n• JWST\'s NIRSpec instrument operates in the 0.6–5.0 micron infrared range.\n• NIRSpec utilizes a microshutter array containing 250,000 microshutters.\n• It can record simultaneous spectra for up to 100 astronomical targets in a single field of view.\n\nThe student wants to summarize NIRSpec\'s operational mechanism for a general science audience. Which choice best accomplishes this goal?',
      options: [
        'Launched in December 2021, JWST travels around the L2 Lagrange point 1.5 million kilometers from Earth.',
        'Using a microshutter array, JWST\'s NIRSpec instrument captures infrared spectra from up to 100 celestial objects simultaneously.',
        'Infrared light ranges from 0.6 to 5.0 microns on the electromagnetic spectrum.',
        'Microshutters were engineered by NASA engineers to replace traditional slit masks.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Summarizing NIRSpec\'s operational mechanism requires highlighting the microshutter array and its ability to capture simultaneous spectra from 100 objects.',
        whyCorrect: 'Choice B clearly explains the key mechanism and simultaneous operational capability.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Launched in December 2021, JWST travels...', whyWrong: 'Orbit detail.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Using a microshutter array, JWST\'s NIRSpec instrument captures infrared spectra from up to 100 celestial objects simultaneously.', whyWrong: 'Correct. Clear mechanism summary.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Infrared light ranges from 0.6 to 5.0 microns...', whyWrong: 'Wavelength definition.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Microshutters were engineered by NASA engineers...', whyWrong: 'Engineering history.' }
        ]
      }
    },
    {
      questionNumber: 37,
      id: 'ch7-b3-q10',
      difficulty: 'Elite',
      skillTag: 'Comparative Methodological Timeline',
      prompt: 'Notes:\n• Göbekli Tepe in southeastern Turkey was constructed around 9500 BCE.\n• Stonehenge in Wiltshire, England, was constructed in phases starting around 3000 BCE.\n• Both prehistoric sites feature monumental megalithic stone circles.\n\nThe student wants to introduce the comparative timeline of the two sites for an archaeology syllabus. Which choice best accomplishes this goal?',
      options: [
        'Constructed around 9500 BCE, Göbekli Tepe predates England\'s Stonehenge by more than six millennia, though both feature monumental stone architecture.',
        'Göbekli Tepe and Stonehenge are both famous prehistoric stone sites located in Asia and Europe.',
        'Stonehenge was built around 3000 BCE in Wiltshire, England, using massive sarsen megaliths.',
        'Archaeologists study Göbekli Tepe and Stonehenge to understand ancient religious practices.'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Introducing comparative timeline requires stating Göbekli Tepe\'s date (9500 BCE), noting it predates Stonehenge (3000 BCE) by over 6,000 years, and acknowledging their shared megalithic nature.',
        whyCorrect: 'Choice A presents the precise comparative timeline and shared megalithic context.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Constructed around 9500 BCE, Göbekli Tepe predates England\'s Stonehenge by more than six millennia, though both feature monumental stone architecture.', whyWrong: 'Correct. Comparative timeline focus.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Göbekli Tepe and Stonehenge are both famous prehistoric stone sites...', whyWrong: 'Vague geographic comparison.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Stonehenge was built around 3000 BCE in Wiltshire...', whyWrong: 'Single-site detail.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Archaeologists study Göbekli Tepe and Stonehenge...', whyWrong: 'General purpose commentary.' }
        ]
      }
    },
    {
      questionNumber: 38,
      id: 'ch7-b3-q11',
      difficulty: 'Elite',
      skillTag: 'Dual-Variable Contrast',
      prompt: 'Notes:\n• Method X: processes 500 samples per hour, 91% sensitivity.\n• Method Y: processes 150 samples per hour, 99% sensitivity.\n\nThe student wants to summarize the operational trade-off between the two diagnostic methods for a public health policy briefing. Which choice best accomplishes this goal?',
      options: [
        'Method X is superior because speed is the primary requirement in diagnostics.',
        'Method Y is superior because accuracy is paramount.',
        'While Method X offers significantly higher throughput speed, Method Y provides superior diagnostic sensitivity.',
        'Method X and Method Y are virtually identical in processing capabilities.'
      ],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'Summarizing an operational trade-off requires contrasting Method X\'s throughput advantage with Method Y\'s sensitivity advantage.',
        whyCorrect: 'Choice C accurately presents the trade-off between speed and sensitivity.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Method X is superior...', whyWrong: 'Subjective opinion.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Method Y is superior...', whyWrong: 'Subjective opinion.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'While Method X offers significantly higher throughput speed, Method Y provides superior diagnostic sensitivity.', whyWrong: 'Correct. Accurate trade-off summary.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Method X and Method Y are virtually identical...', whyWrong: 'False.' }
        ]
      }
    },
    {
      questionNumber: 39,
      id: 'ch7-b3-q12',
      difficulty: 'Elite',
      skillTag: 'Confounding Variable Acknowledgment',
      prompt: 'Notes:\n• An observational study found that citizens who consumed green tea daily had lower rates of cardiovascular disease.\n• Green tea consumers in the study also reported higher average physical activity and lower smoking rates.\n• Researchers did not control for physical activity or smoking.\n\nThe student wants to present the study outcome while acknowledging the key methodological limitation. Which choice best accomplishes this goal?',
      options: [
        'Green tea consumption directly prevents cardiovascular disease.',
        'Daily green tea consumption was associated with lower cardiovascular disease rates, though unmeasured lifestyle factors such as exercise and smoking habits may have influenced the outcome.',
        'Physical activity and smoking have no bearing on cardiovascular health.',
        'The study proves that green tea is the sole driver of heart longevity.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Must state the observed association (green tea and lower heart disease) while acknowledging that unmeasured exercise and smoking confounders may have influenced the result.',
        whyCorrect: 'Choice B preserves the association and explicitly states the lifestyle confounder limitation.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Green tea consumption directly prevents cardiovascular disease.', whyWrong: 'Asserts causation.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Daily green tea consumption was associated with lower cardiovascular disease rates, though unmeasured lifestyle factors such as exercise and smoking habits may have influenced the outcome.', whyWrong: 'Correct. Preserves association and caveat.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Physical activity and smoking have no bearing on cardiovascular health.', whyWrong: 'Absurd statement.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'The study proves that green tea is the sole driver...', whyWrong: 'Asserts sole causation.' }
        ]
      }
    }
  ]
};
'''

print("Writing Part 1 file...")
with open('/src/data/writing/satWritingChapter7QuestionsPart1.ts', 'w') as f:
    f.write(part1_content)
print("Part 1 Complete.")
