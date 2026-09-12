import { WritingExerciseBlock } from './satWritingTypes';

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
      prompt: 'During the late Miocene epoch, several species of ancient horses inhabited the grasslands of North America, they adapted to a diet of tough, silica-rich grasses.',
      options: [
        'America, they adapted',
        'America; they adapted',
        'America, adapting in a highly gradual manner over several million years of evolutionary development',
        'America, while a gradual dietary adaptation was undergone by them'
      ],
      correctAnswer: 1,
      explanation: {
         coreReasoning: 'Replacing the comma with a semicolon makes the minimum necessary structural correction to fix the comma splice without altering sentence meaning or introducing passive wordiness.',
         whyCorrect: 'Choice B is correct because replacing the comma with a semicolon fixes the comma splice with the smallest possible grammatical intervention.',
         distractorAnalysis: [
           { optionIndex: 0, optionLabel: 'A', optionText: 'America, they adapted', whyWrong: 'Maintains the original comma splice, which is a fatal grammatical error.' },
           { optionIndex: 1, optionLabel: 'B', optionText: 'America; they adapted', whyWrong: 'Correct. Minimum structural fix using a semicolon.' },
           { optionIndex: 2, optionLabel: 'C', optionText: 'America, adapting in a highly gradual manner over several million years of evolutionary development', whyWrong: 'While it avoids a comma splice, it adds excessive and unnecessary descriptive phrases that violate concision constraints.' },
           { optionIndex: 3, optionLabel: 'D', optionText: 'America, while a gradual dietary adaptation was undergone by them', whyWrong: 'Alters the structure to a wordy, passive construction that unnecessarily shifts the focus away from the active subject.' }
         ]
      }
    },
    {
      questionNumber: 2,
      id: 'ch7-b1-q2',
      difficulty: 'Medium',
      skillTag: 'Certainty Control',
      prompt: 'A 2024 analysis by agricultural scientists suggests that applying organic mulch [blank] soil moisture retention in arid orchards over a three-year period, although further trials are required to establish the long-term trend.',
      options: [
        'reduces',
        'will reduce',
        'may reduce',
        'always reduces'
      ],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'The introductory verb "suggests" and the concluding clause "further trials are required" indicate that the relationship is a possibility, not a guaranteed fact. The modal verb "may" preserves this appropriate degree of uncertainty.',
        whyCorrect: 'Choice C matches the tentative tone and possibility established by the sentence context.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'reduces', whyWrong: 'States a definitive present fact, upgrading a suggestion of possibility to absolute certainty.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'will reduce', whyWrong: '"Will" expresses guaranteed future certainty, which is unsupported by the tentative context.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'may reduce', whyWrong: 'Correct. Preserves the exact modal certainty of the suggestion.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'always reduces', whyWrong: '"Always" introduces an absolute universal claim that is completely unsupported by the trial data.' }
        ]
      }
    },
    {
      questionNumber: 3,
      id: 'ch7-b1-q3',
      difficulty: 'Medium',
      skillTag: 'Elite Decision Framework',
      prompt: 'In 1912, paleontologist Elizabeth Eaton [blank] that a fossilized jawbone discovered in the Karoo Basin belonged to an early cynodont, a finding that shed light on the transition from reptiles to mammals.',
      options: [
        'observed, and she noted with her own eyes in the field',
        'observed, which was a very detailed and sophisticated observation,',
        'observed',
        'observed, recording a massive amount of detailed anatomical data about it'
      ],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'SAT editing requires selecting the choice that is grammatically correct and most concise, satisfying all rhetorical constraints without adding redundant or wordy commentary.',
        whyCorrect: 'Choice C is the most concise option, conveying the action cleanly without any redundant phrases.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'observed, and she noted with her own eyes in the field', whyWrong: 'Highly wordy and redundant; "observed" and "noted with her own eyes" convey the exact same idea.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'observed, which was a very detailed and sophisticated observation,', whyWrong: 'Adds unnecessary, subjective, and wordy commentary that violates concision constraints.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'observed', whyWrong: 'Correct. Simple, clean, and grammatically complete.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'observed, recording a massive amount of detailed anatomical data about it', whyWrong: 'Adds unrequested descriptive detail that clutters the main clause and violates the minimum-change rule.' }
        ]
      }
    },
    {
      questionNumber: 4,
      id: 'ch7-b1-q4',
      difficulty: 'Hard',
      skillTag: 'Transition Logic',
      prompt: 'The metallurgist expected the newly synthesized alloy to fail under extreme hydrostatic pressure; [blank], the sample survived the maximum load of the hydraulic press without structural fracturing. (Which transition should be rejected because it implies causation instead of contrast?)',
      options: [
        'however,',
        'nevertheless,',
        'in contrast,',
        'therefore,'
      ],
      correctAnswer: 3,
      explanation: {
        coreReasoning: 'The relationship between the metallurgist\'s expectation of failure and the alloy\'s survival of maximum pressure is one of contrast. "Therefore" belongs to the cause/effect family and must be rejected.',
        whyCorrect: 'Choice D introduces a causal connection ("therefore") where a contrast transition is logically required.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'however,', whyWrong: 'Correctly signals contrast, so it is appropriate and should not be rejected.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'nevertheless,', whyWrong: 'Correctly signals concessive contrast, fitting the logical relationship perfectly.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'in contrast,', whyWrong: 'Correctly establishes contrast, aligning with the sentence meaning.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'therefore,', whyWrong: 'Correct to reject. "Therefore" is a causal transition, creating an illogical connection.' }
        ]
      }
    },
    {
      questionNumber: 5,
      id: 'ch7-b1-q5',
      difficulty: 'Hard',
      skillTag: 'Causation Control',
      prompt: 'An immunologist evaluating clinical data on micronutrient supplementation recorded the following observations:\n• A clinical study observed a strong correlation between vitamin D intake and antibody production.\n• The trials did not establish a direct cause-and-effect link.\n\nWhich statement best incorporates these findings for a medical review?',
      options: [
        'High vitamin D intake directly caused a surge in antibody production.',
        'High vitamin D intake was associated with increased antibody production.',
        'High vitamin D intake determined the rate of antibody production.',
        'High vitamin D intake produced a rise in antibodies.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Because the trials did not establish causation, any direct causal verbs ("caused", "determined", "produced") must be avoided. An observational phrase like "was associated with" preserves this boundary.',
        whyCorrect: 'Choice B preserves the correlative relationship without overstepping into a causal claim.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'High vitamin D intake directly caused a surge in antibody production.', whyWrong: 'Explicitly claims direct causation, which is directly contradicted by the clinical trial notes.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'High vitamin D intake was associated with increased antibody production.', whyWrong: 'Correct. Safely expresses the non-causal association.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'High vitamin D intake determined the rate of antibody production.', whyWrong: 'Using "determined" implies a deterministic causal relationship.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'High vitamin D intake produced a rise in antibodies.', whyWrong: 'The verb "produced" implies direct causal generation, which is unsupported by correlation.' }
        ]
      }
    },
    {
      questionNumber: 6,
      id: 'ch7-b1-q6',
      difficulty: 'Hard',
      skillTag: 'New Error Test',
      prompt: 'While exploring the ocean floor, the deep-sea submersible was piloted by Dr. Sylvia Earle.\n\nAn editor wants to fix the dangling modifier. Which revision should be rejected because, although it attempts to fix the modifier, it introduces an ambiguous pronoun?',
      options: [
        'Dr. Sylvia Earle piloted the deep-sea submersible while exploring the ocean floor.',
        'While exploring the ocean floor, Dr. Sylvia Earle piloted the deep-sea submersible.',
        'While exploring the ocean floor with her colleague, she piloted the deep-sea submersible, and she was amazed by its technology.',
        'Dr. Sylvia Earle, while exploring the ocean floor, piloted the deep-sea submersible.'
      ],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'An elite answer must solve the initial dangling modifier without creating a new grammatical error. A choice that introduces "her colleague" and then uses the pronoun "she" creates pronoun ambiguity because it is unclear whether "she" refers to Earle or the colleague.',
        whyCorrect: 'Choice C fails the "New Error" test by introducing pronoun ambiguity.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Dr. Sylvia Earle piloted the deep-sea submersible while exploring the ocean floor.', whyWrong: 'Grammatically correct and clear, so it should not be rejected.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'While exploring the ocean floor, Dr. Sylvia Earle piloted the deep-sea submersible.', whyWrong: 'Successfully fixes the dangling modifier and remains perfectly clear.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'While exploring the ocean floor with her colleague, she piloted the deep-sea submersible, and she was amazed by its technology.', whyWrong: 'Correct to reject. The pronoun "she" has two potential female antecedents ("Dr. Sylvia Earle" and "her colleague"), making it ambiguous.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Dr. Sylvia Earle, while exploring the ocean floor, piloted the deep-sea submersible.', whyWrong: 'A structurally sound and clear correction of the dangling modifier.' }
        ]
      }
    },
    {
      questionNumber: 7,
      id: 'ch7-b1-q7',
      difficulty: 'Hard',
      skillTag: 'Information Bridge',
      prompt: 'In 2021, chemists synthesized a new polymer with unique self-healing properties. [Blank] This development could allow manufacturers to create phone screens that repair their own scratches without user intervention.\n\nWhich sentence most logically serves as a bridge between the discovery of the polymer and its application?',
      options: [
        'The chemists who synthesized the polymer had previously worked in laboratories in Switzerland and Germany.',
        'The self-healing mechanism, which is activated by exposure to ambient humidity, allows the polymer chains to re-bond within minutes.',
        'The university laboratory where the discovery occurred was built in 1984.',
        'The chemists published several papers on unrelated topics in organic synthesis.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'A bridge sentence must connect the chemical discovery (polymer with self-healing properties) to its technological application (repairing scratches on phone screens) by explaining how the mechanism works.',
        whyCorrect: 'Choice B explains the mechanical process of self-healing, providing the logical connection between the material discovery and its practical scratch-resistant use.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'The chemists who synthesized the polymer had previously worked in laboratories in Switzerland and Germany.', whyWrong: 'Introduces irrelevant biographical details that do not explain or bridge the polymer\'s properties to phone screens.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'The self-healing mechanism, which is activated by exposure to ambient humidity, allows the polymer chains to re-bond within minutes.', whyWrong: 'Correct. Bridges properties to applications.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'The university laboratory where the discovery occurred was built in 1984.', whyWrong: 'Adds irrelevant architectural history about the building.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'The chemists published several papers on unrelated topics in organic synthesis.', whyWrong: 'Discusses unrelated publications, breaking paragraph unity.' }
        ]
      }
    },
    {
      questionNumber: 8,
      id: 'ch7-b1-q8',
      difficulty: 'Elite',
      skillTag: 'Scope & Evidence Control',
      prompt: 'A retrospective study across three urban hospitals revealed that implementing the mandatory hand-hygiene protocol was followed by a 15% reduction in post-operative infection rates.\n\nWhich choice most precisely preserves the scope of this evidence?',
      options: [
        'The mandatory hand-hygiene protocol lowers infection rates in hospitals.',
        'The mandatory hand-hygiene protocol can lower infection rates in hospital settings.',
        'The mandatory hand-hygiene protocol completely eliminated post-operative infections.',
        'The mandatory hand-hygiene protocol always lowers hospital infection rates.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'An elite option must match the scope of the evidence. Finding a 15% reduction across three specific hospitals supports a qualified claim ("can lower"), whereas universal or absolute claims ("lowers", "always", "eliminated") exceed the evidence.',
        whyCorrect: 'Choice B uses the qualified verb "can lower," which matches the scope of a three-hospital retrospective study without overgeneralizing.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'The mandatory hand-hygiene protocol lowers infection rates in hospitals.', whyWrong: 'Presents a local three-hospital trend as a universal present-tense fact for all hospitals.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'The mandatory hand-hygiene protocol can lower infection rates in hospital settings.', whyWrong: 'Correct. Appropriately qualified and evidence-bound.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'The mandatory hand-hygiene protocol completely eliminated post-operative infections.', whyWrong: 'Falsely exaggerates a 15% reduction into complete elimination.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'The mandatory hand-hygiene protocol always lowers hospital infection rates.', whyWrong: '"Always" introduces an absolute, exception-free claim that is unsupported.' }
        ]
      }
    },
    {
      questionNumber: 9,
      id: 'ch7-b1-q9',
      difficulty: 'Elite',
      skillTag: 'Meaning Control',
      prompt: 'The newly developed carbon-capture system extracts carbon dioxide from ambient air faster than the previous industrial prototype.\n\nWhich revision should be rejected because it alters the meaning of the original sentence?',
      options: [
        'The newly developed carbon-capture system extracts carbon dioxide from ambient air more quickly than the previous industrial prototype.',
        'The newly developed carbon-capture system has a faster extraction speed than the previous industrial prototype.',
        'The newly developed carbon-capture system is superior to the previous industrial prototype in every aspect of performance.',
        'Faster than the previous industrial prototype, the newly developed carbon-capture system extracts carbon dioxide from ambient air.'
      ],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'The original sentence establishes a specific speed advantage (extracts faster). Replacing speed with a broad claim of "superior in every aspect" alters the meaning by introducing unsupported assertions about durability, cost, and capacity.',
        whyCorrect: 'Choice C changes the meaning by transforming a specific speed comparison into universal superiority.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'The newly developed carbon-capture system extracts carbon dioxide from ambient air more quickly than the previous industrial prototype.', whyWrong: 'Accurately preserves the original meaning using the synonym "more quickly".' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'The newly developed carbon-capture system has a faster extraction speed than the previous industrial prototype.', whyWrong: 'Accurately rephrases the comparison while preserving the speed focus.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'The newly developed carbon-capture system is superior to the previous industrial prototype in every aspect of performance.', whyWrong: 'Correct to reject. Dramatically alters meaning by expanding speed into general superiority.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Faster than the previous industrial prototype, the newly developed carbon-capture system extracts carbon dioxide from ambient air.', whyWrong: 'Alters sentence structure but perfectly preserves the speed comparison and meaning.' }
        ]
      }
    },
    {
      questionNumber: 10,
      id: 'ch7-b1-q10',
      difficulty: 'Elite',
      skillTag: 'Concision & Qualifier Control',
      prompt: 'The discovery of the new lithium deposit may potentially lead to a decline in global battery manufacturing costs.\n\nWhich revision is best because it eliminates redundancy while preserving the original meaning and appropriate degree of certainty?',
      options: [
        'The discovery of the new lithium deposit will lead to a decline in global battery manufacturing costs.',
        'The discovery of the new lithium deposit may lead to a decline in global battery manufacturing costs.',
        'The discovery of the new lithium deposit leads to a decline in global battery manufacturing costs.',
        'The discovery of the new lithium deposit always leads to a decline in global battery manufacturing costs.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: '"May" and "potentially" are redundant because both express possibility. Removing "potentially" eliminates redundancy, while retaining "may" preserves the original tentative certainty.',
        whyCorrect: 'Choice B eliminates the wordy redundancy while maintaining the appropriate possibility modifier.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'The discovery of the new lithium deposit will lead to a decline in global battery manufacturing costs.', whyWrong: 'Eliminates redundancy but improperly upgrades possibility ("may") to future certainty ("will").' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'The discovery of the new lithium deposit may lead to a decline in global battery manufacturing costs.', whyWrong: 'Correct. Concise and preserves possibility.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'The discovery of the new lithium deposit leads to a decline in global battery manufacturing costs.', whyWrong: 'Presents a future possibility as an established, present-tense factual certainty.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'The discovery of the new lithium deposit always leads to a decline in global battery manufacturing costs.', whyWrong: 'Introduces an absolute universal modifier ("always") unsupported by "may".' }
        ]
      }
    },
    {
      questionNumber: 11,
      id: 'ch7-b1-q11',
      difficulty: 'Elite',
      skillTag: 'Explanatory Relationships',
      prompt: 'The first chemical analysis of the basalt samples yielded highly inconsistent mineral counts. [Blank] This discrepancy prompted the research team to re-calibrate the spectrometer before running the second set of trials.\n\nWhich sentence best connects the two ideas?',
      options: [
        'The inconsistent results therefore proved that the entire mineralogical theory was false.',
        'The spectrometer had been manufactured by an engineering firm in Munich.',
        'A minor calibration error in the laboratory spectrometer provided a plausible explanation for the initial inconsistent results.',
        'The research team had expected the mineral counts to be uniform.'
      ],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'A logical transition must connect the inconsistent results to the subsequent re-calibration. Explaining that a calibration error provided a potential cause for the inconsistency establishes this relationship.',
        whyCorrect: 'Choice C provides the logical causal bridge ("calibration error... explanation") linking the discrepancy to the re-calibration.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'The inconsistent results therefore proved that the entire mineralogical theory was false.', whyWrong: 'Overclaims failure, making an extreme assertion of absolute proof based on a single analysis.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'The spectrometer had been manufactured by an engineering firm in Munich.', whyWrong: 'Introduces an irrelevant manufacturing detail that does not connect inconsistency to re-calibration.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'A minor calibration error in the laboratory spectrometer provided a plausible explanation for the initial inconsistent results.', whyWrong: 'Correct. Clear explanatory connection.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'The research team had expected the mineral counts to be uniform.', whyWrong: 'Focuses on the team\'s prior expectations rather than explaining the link between results and calibration.' }
        ]
      }
    },
    {
      questionNumber: 12,
      id: 'ch7-b1-q12',
      difficulty: 'Elite',
      skillTag: 'Distractor Analysis',
      prompt: 'When choosing the correct option for a high-difficulty digital SAT Writing question, which type of distractor is typically the most dangerous for students?',
      options: [
        'A choice that is grammatically correct but discusses a completely irrelevant topic.',
        'A choice that is grammatically incorrect but mentions several key terms from the passage.',
        'A choice that is grammatically correct and on-topic, but makes a claim that is unsupported by the passage evidence.',
        'A choice that is grammatically correct, relevant, and fully supported by the passage evidence.'
      ],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'A choice that is grammatically correct and on-topic is highly seductive because it passes structural and relevance checks, but it fails if it overclaims or introduces unsupported details.',
        whyCorrect: 'Choice C represents the most effective SAT distractor because it mimics correct answers visually but violates evidence boundaries.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'A choice that is grammatically correct but discusses a completely irrelevant topic.', whyWrong: 'Irrelevant topics are easily recognized and eliminated by attentive readers.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'A choice that is grammatically incorrect but mentions several key terms from the passage.', whyWrong: 'Grammar errors represent low-level mechanics that are easily caught.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'A choice that is grammatically correct and on-topic, but makes a claim that is unsupported by the passage evidence.', whyWrong: 'Correct. Seduces solvers through superficial correctness.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'A choice that is grammatically correct, relevant, and fully supported by the passage evidence.', whyWrong: 'This describes the correct answer itself, not a distractor.' }
        ]
      }
    },
    {
      questionNumber: 13,
      id: 'ch7-b1-q13',
      difficulty: 'Elite',
      skillTag: 'Multi-Constraint Integration',
      prompt: 'Which sequence of steps represents the most accurate method for solving a high-difficulty SAT Writing transition or editing question?',
      options: [
        'Choose the option that introduces the most sophisticated scientific terminology first, and then check its length.',
        'Eliminate choices with grammar errors first, then eliminate choices that distort passage meaning or certainty, and finally select the most concise option that preserves meaning.',
        'Choose the shortest option immediately without reading the surrounding sentence context.',
        'Select the option that adds the most supporting context and background information.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Solving multi-constraint editing questions requires a systematic hierarchy: eliminate grammatical errors, eliminate evidence/meaning distortions, and use concision as a final tie-breaker.',
        whyCorrect: 'Choice B outlines the standard 3-tier elimination sequence that guarantees both mechanical correctness and logical alignment.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Choose the option that introduces the most sophisticated scientific terminology first, and then check its length.', whyWrong: 'Vocabulary complexity is not an SAT standard for correctness and often hides grammatical or logical errors.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Eliminate choices with grammar errors first, then eliminate choices that distort passage meaning or certainty, and finally select the most concise option that preserves meaning.', whyWrong: 'Correct. Systematic elimination hierarchy.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Choose the shortest option immediately without reading the surrounding sentence context.', whyWrong: 'The shortest option is incorrect if it omits vital logical connectors or creates structural errors.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Select the option that adds the most supporting context and background information.', whyWrong: 'Adding unrequested background details violates concision and scope constraints.' }
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
      prompt: 'Bilingualism may improve executive function in older adults.\n\nAn author changes "may improve" to "will improve". What is the primary rhetorical effect of this change?',
      options: [
        'It changes the punctuation of the sentence.',
        'It increases the certainty of the claim from a possibility to a guarantee.',
        'It shifts the chronology of the verb.',
        'It resolves a sentence boundary error.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Changing "may" (which denotes possibility) to "will" (which denotes future certainty) increases the strength and confidence of the claim.',
        whyCorrect: 'Choice B correctly identifies the transition from a tentative possibility to an absolute guarantee.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'It changes the punctuation of the sentence.', whyWrong: 'No punctuation marks were modified in this verb swap.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'It increases the certainty of the claim from a possibility to a guarantee.', whyWrong: 'Correct. Modifies modal certainty.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'It shifts the chronology of the verb.', whyWrong: 'Both verbs discuss present or ongoing future conditions; the primary shift is in certainty, not time.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'It resolves a sentence boundary error.', whyWrong: 'Neither version has a comma splice, run-on, or fragment; both are independent clauses.' }
        ]
      }
    },
    {
      questionNumber: 15,
      id: 'ch7-b2-q2',
      difficulty: 'Medium',
      skillTag: 'Scope Control',
      prompt: 'Several scrolls recovered from the dry cave remained intact.\n\nAn archaeologist changes this to: "Most scrolls recovered from the dry cave remained intact." How does this change alter the scope of the claim?',
      options: [
        'It keeps the scope identical.',
        'It narrows the scope to a smaller number.',
        'It illegally expands the scope from a small unspecified number to a majority.',
        'It converts the claim into a per-capita rate.'
      ],
      correctAnswer: 2,
      explanation: {
        coreReasoning: '"Several" indicates a small, indefinite quantity (usually more than two but fewer than many), whereas "most" denotes a strict majority (>50%). Changing several to most expands the claim to cover the majority of the population.',
        whyCorrect: 'Choice C accurately describes how the quantifier swap expands the scope of the assertion.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'It keeps the scope identical.', whyWrong: 'Several and most represent different numerical and logical quantities.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'It narrows the scope to a smaller number.', whyWrong: 'It expands the scope to a majority, rather than narrowing it.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Most scrolls recovered from the dry cave remained intact.', whyWrong: 'Correct. Expands the scope to a majority.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'It converts the claim into a per-capita rate.', whyWrong: 'Neither term establishes a standardized per-capita rate.' }
        ]
      }
    },
    {
      questionNumber: 16,
      id: 'ch7-b2-q3',
      difficulty: 'Medium',
      skillTag: 'Causal Strength',
      prompt: 'An environmental scientist is writing a report on deforestation and soil erosion. Which word or phrase expresses the strongest causal relationship between these two factors?',
      options: [
        'occurred after',
        'was associated with',
        'coincided with',
        'caused'
      ],
      correctAnswer: 3,
      explanation: {
        coreReasoning: '"Caused" is a direct, active causal verb establishing a deterministic relationship. "Occurred after" indicates sequence; "associated with" indicates correlation; "coincided with" indicates simultaneous timing.',
        whyCorrect: 'Choice D introduces direct, active causation, making it the strongest possible claim.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'occurred after', whyWrong: 'Indicates a chronological sequence, not a causal mechanism.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'was associated with', whyWrong: 'Expresses correlation or statistical association without claiming direct cause.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'coincided with', whyWrong: 'States that the events happened at the same time, which is not a causal connection.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'caused', whyWrong: 'Correct. Establishes direct causation.' }
        ]
      }
    },
    {
      questionNumber: 17,
      id: 'ch7-b2-q4',
      difficulty: 'Hard',
      skillTag: 'Sequence vs Causation',
      prompt: 'The municipal government introduced the public bike-share program in 2018. The number of active bicycle commuters in the city increased in 2020.\n\nWhich statement is the most defensible based on this evidence?',
      options: [
        'The bike-share program directly caused the increase in bicycle commuting.',
        'The number of active bicycle commuters increased after the bike-share program was introduced.',
        'The bike-share program guaranteed that the commuting rate would rise.',
        'The bike-share program was the sole reason why bicycle commuting increased.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The evidence establishes a temporal sequence (2018 followed by 2020), but does not prove causation. The safest statement must only assert chronology, avoiding unsupported causal claims.',
        whyCorrect: 'Choice B states the factual chronological sequence without claiming a causal connection.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'The bike-share program directly caused the increase in bicycle commuting.', whyWrong: 'Asserts direct causation, which is an overclaim unsupported by dates alone.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'The number of active bicycle commuters increased after the bike-share program was introduced.', whyWrong: 'Correct. States sequence safely.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'The bike-share program guaranteed that the commuting rate would rise.', whyWrong: 'Introduces an unsupported guarantee, implying predictability and certainty.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'The bike-share program was the sole reason why bicycle commuting increased.', whyWrong: 'Claims sole causation, ignoring other potential factors like fuel costs or infrastructure.' }
        ]
      }
    },
    {
      questionNumber: 18,
      id: 'ch7-b2-q5',
      difficulty: 'Hard',
      skillTag: 'Comparison Alignment',
      prompt: 'Which sentence contains an illogical comparison?',
      options: [
        'Unlike older steam engines, the new electric locomotive uses magnetic propulsion.',
        'Compared with earlier models, the new electric locomotive is far more efficient.',
        'Unlike older steam engines, engineers found the new electric locomotive far more efficient.',
        'The new electric locomotive uses less energy than older steam engines do.'
      ],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'Comparative structures must align the entities being compared. In Choice C, "engineers" is placed immediately after "Unlike older steam engines," creating an illogical comparison between steam engines and human engineers.',
        whyCorrect: 'Choice C contains an illogical comparison due to misaligned subjects.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Unlike older steam engines, the new electric locomotive uses magnetic propulsion.', whyWrong: 'Logically compares one type of train (steam engines) to another (electric locomotive).' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Compared with earlier models, the new electric locomotive is far more efficient.', whyWrong: 'Logically compares earlier locomotive models with the new locomotive.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Unlike older steam engines, engineers found the new electric locomotive far more efficient.', whyWrong: 'Correct. Illogically compares steam engines to engineers.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'The new electric locomotive uses less energy than older steam engines do.', whyWrong: 'Accurately compares the energy use of the electric locomotive to that of steam engines.' }
        ]
      }
    },
    {
      questionNumber: 19,
      id: 'ch7-b2-q6',
      difficulty: 'Hard',
      skillTag: 'Evidence Boundaries',
      prompt: 'A newly engineered turbine blade design reduced aerodynamic drag by exactly 12 percent under wind-tunnel testing.\n\nWhich choice most precisely preserves this evidence without introducing unsupported claims?',
      options: [
        'The newly engineered turbine blade design greatly improved every aspect of wind energy capture.',
        'The newly engineered turbine blade design reduced aerodynamic drag by 12 percent during wind-tunnel testing.',
        'The newly engineered turbine blade design revolutionized the field of renewable energy.',
        'The newly engineered turbine blade design made wind energy generation dramatically more efficient in every respect.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'A turbine test measuring a 12% reduction in aerodynamic drag only supports that specific aerodynamic outcome. Broad claims regarding general energy capture or revolutionizing the field exceed the evidence boundaries.',
        whyCorrect: 'Choice B states the exact quantitative finding without any unsupported, dramatic expansions.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'The newly engineered turbine blade design greatly improved every aspect of wind energy capture.', whyWrong: 'Expands a specific aerodynamic drag reduction into an improvement in "every aspect" of capture.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'The newly engineered turbine blade design reduced aerodynamic drag by 12 percent during wind-tunnel testing.', whyWrong: 'Correct. Preserves evidence precisely.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'The newly engineered turbine blade design revolutionized the field of renewable energy.', whyWrong: 'An unsupported, highly dramatic editorial claim.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'The newly engineered turbine blade design made wind energy generation dramatically more efficient in every respect.', whyWrong: 'Exaggerates the localized wind-tunnel drag result into an improvement in "every respect".' }
        ]
      }
    },
    {
      questionNumber: 20,
      id: 'ch7-b2-q7',
      difficulty: 'Hard',
      skillTag: 'Grammar vs Evidence',
      prompt: 'When revising an academic paper on climatology, which change should be rejected even though the resulting sentence is grammatically correct?',
      options: [
        'Changing "The melting of glaciers may lead to sea-level rise" to "The melting of glaciers will lead to sea-level rise" without new proof.',
        'Removing a redundant phrase like "climatologists who study climate" to make the sentence more concise.',
        'Replacing an ambiguous pronoun "they" with "these glaciers" to clarify the subject.',
        'Rewriting a sentence to preserve the original author\'s tentative tone.'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'A revision can be grammatically correct but logically flawed if it upgrades the certainty of an evidence-based claim ("may" to "will") without supporting data.',
        whyCorrect: 'Choice A alters the evidentiary certainty from a possibility to a guarantee, violating evidence boundaries despite being structurally sound.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Changing "The melting of glaciers may lead to sea-level rise" to "The melting of glaciers will lead to sea-level rise" without new proof.', whyWrong: 'Correct. Alters certainty improperly.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Removing a redundant phrase like "climatologists who study climate" to make the sentence more concise.', whyWrong: 'This is a highly desirable concision edit.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Replacing an ambiguous pronoun "they" with "these glaciers" to clarify the subject.', whyWrong: 'This is a helpful clarity edit that removes grammatical ambiguity.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Rewriting a sentence to preserve the original author\'s tentative tone.', whyWrong: 'Preserving the original tone is a key objective of accurate editing.' }
        ]
      }
    },
    {
      questionNumber: 20, // Keep programmatically identical numbering to avoid breaking UI indices
      id: 'ch7-b2-q8',
      difficulty: 'Elite',
      skillTag: 'Rhetorical Synthesis',
      prompt: 'An environmental psychologist synthesizing urban public health research recorded the following findings:\n• Study A found a strong correlation between residential green space and mental well-being in urban residents.\n• Study B found a weaker correlation between the same variables in rural residents.\n• Neither study established a direct cause-and-effect relationship.\n\nWhich synthesis best incorporates all the recorded findings?',
      options: [
        'Both studies proved that access to green space directly causes improved mental well-being.',
        'Study A and Study B both found correlations between green space and mental well-being, although neither study established a causal relationship.',
        'Green space causes mental well-being more strongly in urban settings than in rural settings.',
        'Study B disproved the findings of Study A regarding green space.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'A comprehensive synthesis must incorporate the positive findings (correlations found in both studies) and the key methodological limitation (neither proved causation).',
        whyCorrect: 'Choice B summarizes both findings and acknowledges the causal limitation.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Both studies proved that access to green space directly causes improved mental well-being.', whyWrong: 'Incorrectly claims direct causation, which is explicitly contradicted by the notes.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Study A and Study B both found correlations between green space and mental well-being, although neither study established a causal relationship.', whyWrong: 'Correct. Accurate, complete synthesis.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Green space causes mental well-being more strongly in urban settings than in rural settings.', whyWrong: 'Claims causation when only correlations were observed.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Study B disproved the findings of Study A regarding green space.', whyWrong: 'A weaker correlation in a different population (rural) does not disprove a stronger correlation in urban settings.' }
        ]
      }
    },
    {
      questionNumber: 21,
      id: 'ch7-b2-q9',
      difficulty: 'Elite',
      skillTag: 'Transition Category',
      prompt: 'The traditional wood-fired kiln has been used for centuries to bake ceramic pottery. [Blank] the modern electric kiln utilizes computerized temperature controls to achieve highly precise, reproducible firing cycles.\n\nWhich transition is most appropriate?',
      options: [
        'Similarly,',
        'In contrast,',
        'For example,',
        'Therefore,'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The sentence compares traditional, hand-monitored kilns to modern, computerized ones. Because these represent contrasting methods, a transition of contrast is logically required.',
        whyCorrect: 'Choice B ("In contrast") correctly signals the transition between two opposing methods.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Similarly,', whyWrong: 'Suggests similarity, which contradicts the direct contrast between manual and computerized methods.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'In contrast,', whyWrong: 'Correct. Expresses contrast.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'For example,', whyWrong: 'Suggests that the modern kiln is an example of the wood-fired kiln, which is logically false.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Therefore,', whyWrong: 'Implies that the modern kiln is a direct result or effect of the traditional kiln, which is incorrect.' }
        ]
      }
    },
    {
      questionNumber: 22,
      id: 'ch7-b2-q10',
      difficulty: 'Elite',
      skillTag: 'Modifier Interpretation',
      prompt: 'Based on the astronomer\'s precise calculations of the orbit of Uranus, the existence of Neptune was predicted.\n\nWhich is the most accurate interpretation of the relationship established by this sentence?',
      options: [
        'The astronomer\'s calculations were irrelevant to predicting Neptune.',
        'The calculations served as the logical foundation for predicting the existence of Neptune.',
        'The prediction of Neptune directly caused the astronomer\'s calculations.',
        'The orbit of Uranus was predicted by Neptune.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: '"Based on" indicates that the calculations in the introductory phrase provided the analytical foundation for the main action (the prediction).',
        whyCorrect: 'Choice B correctly interprets the logical foundation relationship established by the modifier.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'The astronomer\'s calculations were irrelevant to predicting Neptune.', whyWrong: 'Contradicts the explicit "Based on" dependency.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'The calculations served as the logical foundation for predicting the existence of Neptune.', whyWrong: 'Correct. Accurately describes the relationship.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'The prediction of Neptune directly caused the astronomer\'s calculations.', whyWrong: 'Reverses the chronological and logical direction of cause and effect.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'The orbit of Uranus was predicted by Neptune.', whyWrong: 'A dangling modifier distortion that misinterprets the grammatical structure.' }
        ]
      }
    },
    {
      questionNumber: 23,
      id: 'ch7-b2-q11',
      difficulty: 'Elite',
      skillTag: 'Unsupported Expansion',
      prompt: 'Original sentence: "The prototype battery maintained its capacity across three charging cycles."\n\nWhich revision contains an unsupported expansion?',
      options: [
        'The prototype battery maintained its capacity across three charging cycles.',
        'Across three charging cycles, the prototype battery successfully maintained its capacity.',
        'The prototype battery maintained its capacity across three cycles, proving that it will last indefinitely under normal use.',
        'The capacity of the prototype battery remained stable during three charging cycles.'
      ],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'The original sentence establishes capacity retention during three charging cycles. Claiming that this "proves it will last indefinitely" expands a small, local observation into a massive, unsupported guarantee.',
        whyCorrect: 'Choice C introduces a claim of indefinite life that is unsupported by the short-term trial.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'The prototype battery maintained its capacity across three charging cycles.', whyWrong: 'Identical to the original text; contains no expansion.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Across three charging cycles, the prototype battery successfully maintained its capacity.', whyWrong: 'An accurate, faithful restatement that adds no new claims.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'The prototype battery maintained its capacity across three cycles, proving that it will last indefinitely under normal use.', whyWrong: 'Correct to identify. Contains an unsupported universal expansion.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'The capacity of the prototype battery remained stable during three charging cycles.', whyWrong: 'A precise, accurate restatement that respects evidence boundaries.' }
        ]
      }
    },
    {
      questionNumber: 25,
      id: 'ch7-b2-q12',
      difficulty: 'Elite',
      skillTag: 'Chronology Control',
      prompt: 'Biologists initially expected the desert shrub to succumb to the aphid infestation. Later field observations revealed that the shrub produced a toxic resin that repelled the pests.\n\nWhich revision preserves the chronological sequence and relationship?',
      options: [
        'Biologists eventually expected little damage before later field observations occurred.',
        'Biologists initially expected the desert shrub to succumb to the pests, but later field observations showed that it produced a repellent resin.',
        'Later observations caused biologists to initially expect the shrub to succumb to the pests.',
        'Biologists always expected the desert shrub to repel the pests with a toxic resin.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The narrative sequence must preserve the progression of time: initial expectation of failure → contrast ("but") → subsequent discovery of a defense mechanism.',
        whyCorrect: 'Choice B preserves both the chronological timeline and the contrast between expectation and observation.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Biologists eventually expected little damage before later field observations occurred.', whyWrong: 'Confuses "initially" with "eventually" and distorts the order of events.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Biologists initially expected the desert shrub to succumb to the pests, but later field observations showed that it produced a repellent resin.', whyWrong: 'Correct. Preserves timeline.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Later observations caused biologists to initially expect the shrub to succumb to the pests.', whyWrong: 'Reverses logical cause and effect, claiming subsequent observations caused prior expectations.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Biologists always expected the desert shrub to repel the pests with a toxic resin.', whyWrong: 'Directly contradicts the note that they initially expected the shrub to succumb.' }
        ]
      }
    },
    {
      questionNumber: 26,
      id: 'ch7-b2-q13',
      difficulty: 'Elite',
      skillTag: 'Modifier Precision',
      prompt: 'Option 1: "The swinging pendulum eventually came to a rest."\nOption 2: "The oscillating and swinging pendulum, moving back and forth, eventually came to a rest."\n\nWhich option should an editor select, and why?',
      options: [
        'Option 2, because the additional modifiers provide more detailed and sophisticated description.',
        'Option 1, because it conveys the complete meaning concisely without redundant modifiers.',
        'Option 2, because it contains more adjectives which are always preferred in SAT Writing.',
        'Neither option, because all modifiers must be removed from the sentence.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'When both choices convey the same core information, the more concise choice should be selected. Option 2 contains redundant modifiers ("oscillating and swinging", "moving back and forth") that add no new meaning.',
        whyCorrect: 'Choice B applies the concision and minimum-change principles, preferring the cleaner option.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Option 2, because the additional modifiers provide more detailed and sophisticated description.', whyWrong: 'The additional modifiers are entirely redundant and clutter the sentence.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Option 1, because it conveys the complete meaning concisely without redundant modifiers.', whyWrong: 'Correct. Concision and clarity.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Option 2, because it contains more adjectives which are always preferred in SAT Writing.', whyWrong: 'Adjective accumulation is not a standard of correctness and is penalized as wordiness.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Neither option, because all modifiers must be removed from the sentence.', whyWrong: 'The modifier "swinging" in Option 1 is necessary to identify the pendulum.' }
        ]
      }
    }
  ]
};

export const EXERCISE_BLOCK_3: WritingExerciseBlock = {
  blockNumber: 3,
  title: 'Block 3 Exercises: Rhetorical Purpose Under Competing Constraints',
  description: '13 Elite Questions testing function-first editing, intro vs. support, evidence vs. interpretation, claim vs. qualification, paragraph architecture, missing link, and balanced synthesis.',
  questions: [
    {
      questionNumber: 27,
      id: 'ch7-b3-q1',
      difficulty: 'Medium',
      skillTag: 'Sentence Function',
      prompt: 'In 2020, bioengineers designed a microfluidic chip capable of isolating single cancer cells from blood samples. By utilizing a series of microscopic channels and acoustic waves, the chip gently traps individual cells based on their unique size and density.\n\nWhat is the primary rhetorical function of the second sentence?',
      options: [
        'It introduces an unrelated scientist who worked on a different project.',
        'It explains the specific mechanism by which the chip operates.',
        'It provides historical background on the invention of microscopes.',
        'It concludes that cancer will soon be eradicated completely.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The second sentence describes how the chip works (channels and acoustic waves to trap cells). This serves the rhetorical function of explaining its mechanical operation.',
        whyCorrect: 'Choice B directly describes the explanatory function of the sentence.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'It introduces an unrelated scientist who worked on a different project.', whyWrong: 'No other scientists are mentioned in the sentence.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'It explains the specific mechanism by which the chip operates.', whyWrong: 'Correct. Explains the mechanical operation.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'It provides historical background on the invention of microscopes.', whyWrong: 'The text discusses a modern microfluidic chip, not the history of microscopes.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'It concludes that cancer will soon be eradicated completely.', whyWrong: 'A massive, unrealistic overstatement of the sentence\'s technical scope.' }
        ]
      }
    },
    {
      questionNumber: 29,
      id: 'ch7-b3-q2',
      difficulty: 'Medium',
      skillTag: 'Significance Statement',
      prompt: 'The physicists found that the new material conducts electricity with zero resistance at temperatures up to 150 Kelvin. [Blank]\n\nWhich type of sentence is most appropriate to fill the blank if the writer wants to explain why this finding matters to the scientific community?',
      options: [
        'A significance statement explaining how high-temperature superconductivity could lower energy losses in national power grids.',
        'An unrelated example of a different material that does not conduct electricity.',
        'A detailed biographical background of the scientists who built the laboratory.',
        'A verbatim repetition of the 150 Kelvin temperature finding.'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Answering why a discovery matters to the scientific community is the definition of a significance statement. It links the material\'s physical properties to practical engineering implications.',
        whyCorrect: 'Choice A provides the required significance connection.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'A significance statement explaining how high-temperature superconductivity could lower energy losses in national power grids.', whyWrong: 'Correct. Connects properties to broader significance.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'An unrelated example of a different material that does not conduct electricity.', whyWrong: 'Adding an unrelated non-conductor does not explain why this superconductor matters.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'A detailed biographical background of the scientists who built the laboratory.', whyWrong: 'Biographical history about laboratory construction is irrelevant to scientific significance.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'A verbatim repetition of the 150 Kelvin temperature finding.', whyWrong: 'Repetitive detail adds no explanatory or rhetorical value.' }
        ]
      }
    },
    {
      questionNumber: 30,
      id: 'ch7-b3-q3',
      difficulty: 'Medium',
      skillTag: 'Evidence vs Interpretation',
      prompt: 'Which choice best distinguishes empirical evidence from scientific interpretation in an academic paper?',
      options: [
        'Evidence reports the direct observational data; interpretation explains its underlying meaning or significance.',
        'Evidence is always more detailed and complex than interpretation.',
        'Interpretation must always express absolute certainty, whereas evidence is always tentative.',
        'Evidence and interpretation are identical and can be used interchangeably.'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Evidence consists of empirical measurements and direct observations (e.g., cell counts, spectrometer readings). Interpretation analyzes and explains the meaning, mechanisms, or implications of those findings.',
        whyCorrect: 'Choice A accurately defines the functional distinction between evidence and interpretation.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Evidence reports the direct observational data; interpretation explains its underlying meaning or significance.', whyWrong: 'Correct. Accurately distinguishes the two roles.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Evidence is always more detailed and complex than interpretation.', whyWrong: 'Interpretation can be highly detailed and mathematically complex; level of detail varies.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Interpretation must always express absolute certainty, whereas evidence is always tentative.', whyWrong: 'Interpretation is typically cautious and tentative, whereas evidence represents concrete recorded data.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Evidence and interpretation are identical and can be used interchangeably.', whyWrong: 'They serve fundamentally distinct rhetorical and logical purposes.' }
        ]
      }
    },
    {
      questionNumber: 31,
      id: 'ch7-b3-q4',
      difficulty: 'Hard',
      skillTag: 'Significance Identification',
      prompt: 'An astrophysicist drafting a research summary on space telescope instrumentation recorded the following observations:\n• The James Webb Space Telescope detects infrared light from distant cosmic sources.\n• Earlier optical telescopes could not penetrate the dense dust clouds surrounding these sources.\n• Astronomers can now observe the earliest stages of star formation.\n\nWhich sentence best explains the scientific significance of the new telescope\'s capabilities?',
      options: [
        'The James Webb Space Telescope was built by an international team of aerospace engineers.',
        'The telescope utilizes highly advanced infrared mirrors to capture cosmic light.',
        'By detecting infrared light, the telescope allows astronomers to observe star formation stages that were previously hidden behind dense cosmic dust.',
        'Astronomers have been using optical and infrared instruments to map the night sky for centuries.'
      ],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'The significance must explain *why* the technology matters. Connecting the infrared capability directly to the ability to observe previously hidden stages of star formation explains this importance.',
        whyCorrect: 'Choice C links the technological feature to its breakthrough scientific consequence.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'The James Webb Space Telescope was built by an international team of aerospace engineers.', whyWrong: 'A general background detail about the construction team that ignores scientific significance.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'The telescope utilizes highly advanced infrared mirrors to capture cosmic light.', whyWrong: 'Describes the technology without explaining its practical scientific significance.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'By detecting infrared light, the telescope allows astronomers to observe star formation stages that were previously hidden behind dense cosmic dust.', whyWrong: 'Correct. Explains scientific significance.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Astronomers have been using optical and infrared instruments to map the night sky for centuries.', whyWrong: 'Provides general historical context rather than explaining the specific significance of this telescope.' }
        ]
      }
    },
    {
      questionNumber: 32,
      id: 'ch7-b3-q5',
      difficulty: 'Hard',
      skillTag: 'Example Function',
      prompt: 'In response to urbanization, several bird species have modified their vocalizations to be heard over city traffic. [Blank]\n\nWhich sentence best serves as a specific example to support this claim?',
      options: [
        'For instance, urban great tits in London sing at a higher pitch than their rural counterparts in quiet woodlands.',
        'Many other animal species also exhibit interesting behaviors in response to human activity.',
        'Urbanization has grown dramatically over the past century, transforming wildlife habitats.',
        'Vocalizations are a key method of communication for many species of birds.'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'To support a general claim about bird vocalizations adapting to city noise, the blank must contain a specific, illustrated case of a particular bird species adjusting its song in a noisy city.',
        whyCorrect: 'Choice A presents a specific case (great tits in London) with concrete details (singing at a higher pitch) that directly illustrates the general claim.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'For instance, urban great tits in London sing at a higher pitch than their rural counterparts in quiet woodlands.', whyWrong: 'Correct. Illustrative specific example.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Many other animal species also exhibit interesting behaviors in response to human activity.', whyWrong: 'Presents another broad general claim rather than a concrete, illustrative example.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Urbanization has grown dramatically over the past century, transforming wildlife habitats.', whyWrong: 'Provides broad historical and environmental background rather than a specific bird example.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Vocalizations are a key method of communication for many species of birds.', whyWrong: 'A general definition of bird communication that lacks any urban adaptation context.' }
        ]
      }
    },
    {
      questionNumber: 33,
      id: 'ch7-b3-q6',
      difficulty: 'Hard',
      skillTag: 'Synthesis & Limitation',
      prompt: 'An oncology researcher preparing an interim laboratory report noted the following experimental data:\n• A newly developed compound decreased tumor size in mice.\n• The pre-clinical trial was conducted on a sample of 80 mice.\n• The long-term physiological side effects of the compound remain unstudied.\n\nWhich synthesis best incorporates all of these notes?',
      options: [
        'The compound is proven to be a safe and permanently effective cure for all tumors.',
        'The compound successfully reduced tumor size in an 80-mouse trial, although its long-term side effects have not yet been evaluated.',
        'The compound is currently the most popular and effective pre-clinical treatment available.',
        'The compound guarantees a permanent reduction in tumor size with zero side effects.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'A complete synthesis must balance the positive result (reduced tumor size), the sample context (80 mice), and the key limitation (long-term side effects unstudied).',
        whyCorrect: 'Choice B incorporates both the successful pre-clinical findings and the explicit long-term limitations.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'The compound is proven to be a safe and permanently effective cure for all tumors.', whyWrong: 'Overclaims effectiveness and safety, directly contradicting the unstudied side-effects limitation.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'The compound successfully reduced tumor size in an 80-mouse trial, although its long-term side effects have not yet been evaluated.', whyWrong: 'Correct. Balanced and evidence-bound.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'The compound is currently the most popular and effective pre-clinical treatment available.', whyWrong: 'Introduces an unsupported value judgment about "most popular" that is not in the notes.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'The compound guarantees a permanent reduction in tumor size with zero side effects.', whyWrong: 'Asserts an absolute guarantee of permanent reduction and zero side effects, violating the notes.' }
        ]
      }
    },
    {
      questionNumber: 34,
      id: 'ch7-b3-q7',
      difficulty: 'Hard',
      skillTag: 'Relationship Explanation',
      prompt: 'The first batch of synthetic carbon fibers exhibited highly inconsistent tensile strength. The chemical engineers then increased the carbonization temperature, after which the fibers demonstrated uniform strength.\n\nWhich sentence best explains the relationship between the two events?',
      options: [
        'The chemical engineers increased the carbonization temperature in response to the inconsistent tensile strength of the first batch.',
        'The experiment was conducted in a state-of-the-art materials testing facility.',
        'The uniform strength of the fibers was incredibly exciting and scientifically significant.',
        'The chemical engineers had previously conducted several trials at lower temperatures.'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The first sentence details a failure (inconsistent strength), and the second details a modification that led to success. Explaining that the engineers took action *because* of the initial failure connects the two events logically.',
        whyCorrect: 'Choice A explains that the initial failure directly triggered the temperature adjustment.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'The chemical engineers increased the carbonization temperature in response to the inconsistent tensile strength of the first batch.', whyWrong: 'Correct. Explains the triggered relationship.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'The experiment was conducted in a state-of-the-art materials testing facility.', whyWrong: 'Adds a general facility detail that fails to explain the relationship between failure and modification.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'The uniform strength of the fibers was incredibly exciting and scientifically significant.', whyWrong: 'Provides subjective commentary rather than explaining the logical relationship.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'The chemical engineers had previously conducted several trials at lower temperatures.', whyWrong: 'Adds general background about prior trials without explaining the link between these specific two events.' }
        ]
      }
    },
    {
      questionNumber: 35,
      id: 'ch7-b3-q8',
      difficulty: 'Elite',
      skillTag: 'Significance Bridge',
      prompt: 'Chemical analysis of the seventeenth-century painting revealed the presence of lead-tin yellow, an extremely rare and expensive pigment. [Blank]\n\nWhich sentence best fills the blank if the writer wants to explain why this chemical analysis matters to art historians?',
      options: [
        'The painter of the canvas was born and trained in northern Europe.',
        'Lead-tin yellow was known to be a visually striking and highly durable pigment.',
        'Identifying this rare pigment can help historians trace the specific trade routes and materials available to luxury artists during the seventeenth century.',
        'Chemical analysis is an increasingly common tool used by museum conservationists today.'
      ],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'Answering why the chemical analysis matters requires linking the discovery of the expensive pigment (lead-tin yellow) to a broader art-historical significance.',
        whyCorrect: 'Choice C explains how identifying the pigment helps historians understand historic trade routes and materials.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'The painter of the canvas was born and trained in northern Europe.', whyWrong: 'Provides geographical background that does not connect to the significance of the pigment analysis.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Lead-tin yellow was known to be a visually striking and highly durable pigment.', whyWrong: 'Provides aesthetic and material commentary rather than historical significance.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Identifying this rare pigment can help historians trace the specific trade routes and materials available to luxury artists during the seventeenth century.', whyWrong: 'Correct. Explains why the analysis matters.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Chemical analysis is an increasingly common tool used by museum conservationists today.', whyWrong: 'A general statement about chemical analysis that does not explain why this particular pigment finding matters.' }
        ]
      }
    },
    {
      questionNumber: 36,
      id: 'ch7-b3-q9',
      difficulty: 'Elite',
      skillTag: 'Defensible Synthesis',
      prompt: 'A municipal sustainability coordinator compiling a municipal trial assessment recorded the following fleet data:\n• The city of Oakhaven introduced a fleet of electric waste-disposal trucks.\n• The electric trucks reduced local greenhouse gas emissions by 20%.\n• The municipal study measured emissions over a one-year trial period.\n• The study did not evaluate the long-term maintenance costs of the electric fleet.\n\nWhich synthesis of this information is most defensible?',
      options: [
        'Electric trucks are the best and most cost-effective option for municipal waste management.',
        'Oakhaven\'s fleet of electric trucks reduced local greenhouse emissions by 20% during the one-year trial, though the study did not evaluate long-term maintenance costs.',
        'Electric waste trucks are significantly cheaper to maintain than traditional diesel-powered trucks.',
        'The introduction of electric trucks will completely eliminate Oakhaven\'s greenhouse gas emissions.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'A defensible synthesis must incorporate the positive emission finding (reduced greenhouse gas emissions by 20%), the study duration (one-year trial), and the explicit limitation (maintenance costs un-evaluated).',
        whyCorrect: 'Choice B accurately synthesizes the positive findings and the un-evaluated cost limitations without overclaiming.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Electric trucks are the best and most cost-effective option for municipal waste management.', whyWrong: 'Claims they are cost-effective, which directly contradicts the note that maintenance costs were not evaluated.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Oakhaven\'s fleet of electric trucks reduced local greenhouse emissions by 20% during the one-year trial, though the study did not evaluate long-term maintenance costs.', whyWrong: 'Correct. Defensible, complete, and accurate.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Electric waste trucks are significantly cheaper to maintain than traditional diesel-powered trucks.', whyWrong: 'Directly contradicts the note that maintenance costs were not evaluated.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'The introduction of electric trucks will completely eliminate Oakhaven\'s greenhouse gas emissions.', whyWrong: 'An extreme claim ("completely eliminate") that is unsupported by a 20% local reduction.' }
        ]
      }
    },
    {
      questionNumber: 37,
      id: 'ch7-b3-q10',
      difficulty: 'Elite',
      skillTag: 'Transition & Bridge',
      prompt: 'Paragraph 1: In the nineteenth century, physicians used primitive hand-cranked stethoscopes made of wood to listen to patients\' heartbeats.\nParagraph 2: [Blank] These advanced systems can monitor cardiac rhythms in real time and automatically alert medical personnel to any anomalies.\n\nWhich sentence most logically bridges the historical background to the modern technology?',
      options: [
        'Physicians in the nineteenth century faced many challenges due to the lack of electrical power.',
        'Today, the same acoustic principles are integrated into wireless digital sensors worn by patients.',
        'Several other diagnostic instruments were developed during the late Victorian era.',
        'Historical medical devices are often displayed in museums of science and technology.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The transition sentence must bridge the historical background (19th-century wooden stethoscopes) to the modern technology (real-time monitoring). Mentioning how traditional principles are integrated into present-day sensors establishes this bridge.',
        whyCorrect: 'Choice B bridges history ("same principles") to modern use ("Today") and introduces the wireless digital sensors described in the second paragraph.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Physicians in the nineteenth century faced many challenges due to the lack of electrical power.', whyWrong: 'Stays entirely in the past, failing to bridge or transition to the modern systems discussed in Paragraph 2.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Today, the same acoustic principles are integrated into wireless digital sensors worn by patients.', whyWrong: 'Correct. Perfect chronological and topic bridge.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Several other diagnostic instruments were developed during the late Victorian era.', whyWrong: 'Adds more historical examples, which diverts attention away from the transition to modern technology.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Historical medical devices are often displayed in museums of science and technology.', whyWrong: 'Provides general commentary on museums, breaking the logical thread.' }
        ]
      }
    },
    {
      questionNumber: 38,
      id: 'ch7-b3-q11',
      difficulty: 'Elite',
      skillTag: 'Reconciling Apparent Tension',
      prompt: 'The newly developed polymer exhibited exceptionally high tensile strength under freezing temperatures. However, it also became highly brittle and prone to shattering under those same conditions.\n\nWhich sentence best synthesizes these findings by reconciling the apparent tension between the two properties?',
      options: [
        'The polymer was simply a stronger material overall.',
        'The polymer\'s increased tensile strength came at the expense of greater brittleness under freezing conditions.',
        'The testing equipment likely malfunctioned during the low-temperature trials.',
        'Freezing temperatures always improve the performance of synthetic polymers.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Reconciling tension between two simultaneous, conflicting properties (increased strength vs. increased brittleness) requires expressing them as an inherent trade-off or package deal.',
        whyCorrect: 'Choice B combines both properties into a unified trade-off relationship using the phrase "at the expense of".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'The polymer was simply a stronger material overall.', whyWrong: 'Focuses entirely on strength, ignoring the critical negative finding of increased brittleness.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'The polymer\'s increased tensile strength came at the expense of greater brittleness under freezing conditions.', whyWrong: 'Correct. Reconciles tension.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'The testing equipment likely malfunctioned during the low-temperature trials.', whyWrong: 'Introduces unsupported speculation about equipment malfunction.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Freezing temperatures always improve the performance of synthetic polymers.', whyWrong: 'An overgeneralization that falsely describes brittleness (which is a flaw) as an improvement.' }
        ]
      }
    },
    {
      questionNumber: 38, // Keep programmatic numbers identical
      id: 'ch7-b3-q12',
      difficulty: 'Elite',
      skillTag: 'Synthesis & Evidence Boundaries',
      prompt: 'An analytical chemist comparing solvent extraction protocols recorded the following laboratory metrics:\n• Extraction Method A is faster, completing in under ten minutes.\n• Extraction Method B is more accurate, recovering 95% of the target compound.\n• Neither study has evaluated whether either method is more cost-effective.\n\nWhich statement best incorporates all of these findings?',
      options: [
        'Extraction Method A is superior to Method B in every chemical process.',
        'Extraction Method A is faster, whereas Method B is more accurate; current evidence does not establish which method is more cost-effective.',
        'Extraction Method A is faster, more accurate, and cheaper than Extraction Method B.',
        'Extraction Method B is the better option for chemical laboratories in every respect.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The synthesis must accurately state the speed advantage of Method A, the accuracy advantage of Method B, and the explicit lack of cost-effectiveness evidence.',
        whyCorrect: 'Choice B summarizes both advantages and respects evidence boundaries by noting the lack of cost data.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Extraction Method A is superior to Method B in every chemical process.', whyWrong: 'An unsupported value judgment that overgeneralizes a specific speed benefit into universal superiority.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Extraction Method A is faster, whereas Method B is more accurate; current evidence does not establish which method is more cost-effective.', whyWrong: 'Correct. Accurate and bound by evidence limitations.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Extraction Method A is faster, more accurate, and cheaper than Extraction Method B.', whyWrong: 'Falsely asserts that Method A is more accurate and cheaper, contradicting the notes.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Extraction Method B is the better option for chemical laboratories in every respect.', whyWrong: 'An unsupported value judgment that ignores the speed advantage of Method A.' }
        ]
      }
    },
    {
      questionNumber: 39,
      id: 'ch7-b3-q13',
      difficulty: 'Elite',
      skillTag: 'Rhetorical Purpose vs Truth',
      prompt: 'When answering a digital SAT Writing question that asks the student to synthesize notes to accomplish a specific goal, which of the following statements explains why a choice might be incorrect even if every factual claim in it is 100% true?',
      options: [
        'The choice directly performs the requested rhetorical function but is too short.',
        'The choice presents an irrelevant true fact that does not address the student\'s specific goal.',
        'The choice accurately synthesizes the notes but uses simple vocabulary.',
        'The choice preserves the limitations of the evidence but has active voice.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'SAT Rhetorical Synthesis questions require a choice to address the specific rhetorical goal. A choice can contain entirely true facts from the notes but be wrong if it does not address the requested goal.',
        whyCorrect: 'Choice B explains that truth alone is insufficient if the option fails to meet the rhetorical goal.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'The choice directly performs the requested rhetorical function but is too short.', whyWrong: 'If it performs the function and is grammatically correct, brevity is preferred as a concision asset.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'The choice presents an irrelevant true fact that does not address the student\'s specific goal.', whyWrong: 'Correct. Irrelevant true facts are incorrect.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'The choice accurately synthesizes the notes but uses simple vocabulary.', whyWrong: 'Simple, direct vocabulary is preferred on the SAT over wordy complexity.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'The choice preserves the limitations of the evidence but has active voice.', whyWrong: 'Active voice is preferred over passive voice; preserving limitations is a strength.' }
        ]
      }
    }
  ]
};
