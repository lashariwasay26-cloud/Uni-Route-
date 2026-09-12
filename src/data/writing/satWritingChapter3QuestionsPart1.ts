import { WritingExerciseBlock } from './satWritingTypes';

// ==========================================
// BLOCK 1: SUBJECT-VERB AGREEMENT & INTERVENING STRUCTURES (Q1 - Q10)
// ==========================================
export const EXERCISE_BLOCK_1: WritingExerciseBlock = {
  blockNumber: 1,
  title: 'Block 1 Exercises: Subject-Verb Agreement & Intervening Modifiers',
  description: '10 Questions (Questions 1–10) testing core subject-verb agreement across prepositional phrases, participial modifiers, additive phrases, and compound structures.',
  questions: [
    {
      questionNumber: 1,
      id: 'ch3-q1',
      difficulty: 'Foundation',
      skillTag: 'Subject-Verb Agreement - Head Noun',
      prompt: 'The comprehensive catalogue of astronomical anomalies documented by the Vera C. Rubin Observatory ___ readily accessible to international astrophysicists.',
      options: ["are essential","is essential","were essential","have been essential"],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The subject of the sentence is the singular head noun "catalogue." The extensive intervening prepositional phrase "of astronomical anomalies documented by the Vera C. Rubin Observatory" modifies the head noun but does not alter its singular grammatical number.',
        whyCorrect: '"is" is singular and correctly agrees with the singular head noun "catalogue."',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'are', whyWrong: 'Incorrectly agrees with the plural noun "anomalies" located within the modifying prepositional phrase.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'is', whyWrong: 'Correct answer.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'have been', whyWrong: 'Uses a plural auxiliary ("have") and introduces an unnecessary tense shift away from the present description.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'were', whyWrong: 'Plural past tense verb that fails to match the singular subject "catalogue."' }
        ]
      }
    },
    {
      questionNumber: 2,
      id: 'ch3-q2',
      difficulty: 'Intermediate',
      skillTag: 'Subject-Verb Agreement - Additive Phrases',
      prompt: 'The lead bioarchaeologist, along with the head conservator from the British Museum, ___ painstakingly restoring the fragile seventh-century Anglo-Saxon funerary artifacts.',
      options: ['are', 'is', 'has', 'were'],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The grammatical subject is the singular noun "bioarchaeologist." An additive phrase introduced by "along with" is a parenthetical modifier set off by commas and does not create a compound plural subject.',
        whyCorrect: '"is" is singular and properly agrees with the singular head noun "bioarchaeologist."',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'are', whyWrong: 'Plural verb that mistakenly treats the additive phrase "along with..." as part of a compound subject.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'is', whyWrong: 'Correct answer.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'has', whyWrong: 'Singular auxiliary that is incomplete and ungrammatical when paired with the present participle "restoring."' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'were', whyWrong: 'Plural past tense verb that fails to agree with singular "bioarchaeologist."' }
        ]
      }
    },
    {
      questionNumber: 3,
      id: 'ch3-q3',
      difficulty: 'Intermediate',
      skillTag: 'Subject-Verb Agreement - Correlative Proximity',
      prompt: 'Neither the senior curator nor the museum archivists ___ convinced that the newly surfaced Renaissance miniature was authentic.',
      options: ['was', 'is', 'were', 'has'],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'In correlative constructions joined by "neither... nor," the verb must agree with the closer subject ("archivists," which is plural) according to the Rule of Proximity.',
        whyCorrect: '"were" is a plural past-tense verb that correctly agrees with the closer subject "archivists."',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'was', whyWrong: 'Singular verb that incorrectly matches the distant singular subject "curator" instead of the adjacent plural subject "archivists."' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'is', whyWrong: 'Singular present-tense verb that ignores the proximity rule and shifts tense inconsistently.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'were', whyWrong: 'Correct answer.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'has', whyWrong: 'Singular auxiliary verb.' }
        ]
      }
    },
    {
      questionNumber: 4,
      id: 'ch3-q4',
      difficulty: 'Hard',
      skillTag: 'Subject-Verb Agreement - Inverted Syntax',
      prompt: 'High atop the wind-scoured Andean plateau ___ the remnants of an Incan astronomical sanctuary engineered to track the winter solstice.',
      options: ["has remained","is remaining","remain intact","remains intact"],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'This sentence features inverted syntax: the predicate prepositional phrase "High atop the wind-scoured Andean plateau" opens the sentence, while the true grammatical subject is the plural noun phrase "the remnants."',
        whyCorrect: '"stand" is a plural verb that correctly agrees with the plural subject "remnants."',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'stands', whyWrong: 'Singular verb that mistakenly agrees with the singular noun "plateau" in the opening prepositional phrase.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'stand', whyWrong: 'Correct answer.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'is standing', whyWrong: 'Singular progressive verb that fails to match plural "remnants."' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'has stood', whyWrong: 'Singular perfect verb phrase.' }
        ]
      }
    },
    {
      questionNumber: 5,
      id: 'ch3-q5',
      difficulty: 'Intermediate',
      skillTag: 'Subject-Verb Agreement - Indefinite Pronouns',
      prompt: 'Each of the deep-sea core samples extracted from the Mariana Trench ___ distinct isotopic signatures indicating historic tectonic subduction events.',
      options: ['exhibit', 'exhibits', 'have exhibited', 'are exhibiting'],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The indefinite pronoun "Each" is grammatically singular and serves as the subject. The intervening prepositional phrase "of the deep-sea core samples..." does not make the subject plural.',
        whyCorrect: '"exhibits" is a third-person singular present verb correctly agreeing with "Each."',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'exhibit', whyWrong: 'Plural verb that erroneously agrees with the plural noun "samples."' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'exhibits', whyWrong: 'Correct answer.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'have exhibited', whyWrong: 'Plural auxiliary verb.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'are exhibiting', whyWrong: 'Plural progressive verb phrase.' }
        ]
      }
    },
    {
      questionNumber: 6,
      id: 'ch3-q6',
      difficulty: 'Hard',
      skillTag: 'Subject-Verb Agreement - Quantity Phrases',
      prompt: 'Roughly seventy percent of the municipal budget allocated for civil infrastructure ___ dedicated to seismic retrofitting of older bridges.',
      options: ["are available","have been available","were available","is available"],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'For fractional and percentage quantity phrases ("seventy percent of..."), agreement is determined by the object of the preposition. Here, "budget" is singular, requiring a singular verb.',
        whyCorrect: '"is" is singular and agrees with the singular noncount/collective noun "budget."',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'were', whyWrong: 'Plural past verb; percentage agreement follows the singular object "budget."' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'are', whyWrong: 'Plural present verb.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'is', whyWrong: 'Correct answer.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'have been', whyWrong: 'Plural auxiliary phrase.' }
        ]
      }
    },
    {
      questionNumber: 7,
      id: 'ch3-q7',
      difficulty: 'Hard',
      skillTag: 'Subject-Verb Agreement - One of the Nouns Who',
      prompt: 'Dr. Evelyn Vance is one of the pioneering molecular biochemists who ___ developed targeted lipid nanoparticles for mRNA vaccine delivery.',
      options: ["has demonstrated","have demonstrated","is demonstrating","was demonstrated"],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'In the construction "one of the [plural noun] who...", the relative pronoun "who" refers back to the plural antecedent "biochemists," requiring a plural verb in the relative clause.',
        whyCorrect: '"have" is plural and agrees with the plural antecedent "biochemists."',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'has', whyWrong: 'Singular verb that mistakenly matches "one" instead of the relative clause antecedent "biochemists."' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'have', whyWrong: 'Correct answer.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'is', whyWrong: 'Singular verb that also creates an ungrammatical verb sequence with the past participle "developed."' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'was', whyWrong: 'Singular past verb.' }
        ]
      }
    },
    {
      questionNumber: 8,
      id: 'ch3-q8',
      difficulty: 'Intermediate',
      skillTag: 'Subject-Verb Agreement - Collective Nouns',
      prompt: 'The panel of international jurists presiding over the maritime boundary dispute ___ announced its final binding arbitration verdict.',
      options: ["are active","has been active","have been active","were active"],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'In American English, collective nouns referring to a unified body ("panel") take singular verbs when the group acts as a single entity, as reinforced by the singular possessive pronoun "its."',
        whyCorrect: '"has" is singular, agreeing with the collective subject "panel" and matching "its."',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'have', whyWrong: 'Plural verb that clashes with the singular collective subject "panel" and singular pronoun "its."' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'has', whyWrong: 'Correct answer.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'are', whyWrong: 'Plural verb form.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'were', whyWrong: 'Plural past tense verb.' }
        ]
      }
    },
    {
      questionNumber: 9,
      id: 'ch3-q9',
      difficulty: 'Hard',
      skillTag: 'Subject-Verb Agreement - Noncount Nouns',
      prompt: 'The empirical data gathered during the three-year longitudinal study of coral bleaching ___ that rising ocean temperatures directly impair calcification rates.',
      options: ['indicates', 'indicate', 'is indicating', 'has indicated'],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'In formal scientific and standardized testing grammar, "data" is the plural form of the Latin singular "datum" and takes a plural verb ("indicate").',
        whyCorrect: '"indicate" is the plural present verb agreeing with the plural subject "data."',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'indicates', whyWrong: 'Singular verb form.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'indicate', whyWrong: 'Correct answer.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'is indicating', whyWrong: 'Singular progressive verb phrase.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'has indicated', whyWrong: 'Singular present perfect verb phrase.' }
        ]
      }
    },
    {
      questionNumber: 10,
      id: 'ch3-q10',
      difficulty: 'Foundation',
      skillTag: 'Subject-Verb Agreement - Intervening Relative Clause',
      prompt: 'A dense network of fiber-optic cables that span the North Atlantic seabed ___ high-speed algorithmic trading between London and New York financial exchanges.',
      options: ['facilitate', 'facilitating', 'facilitates', 'have facilitated'],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'The head noun of the main subject is the singular noun "network." The intervening relative clause "that span the North Atlantic seabed" does not alter the singular grammatical requirement of the main predicate verb.',
        whyCorrect: '"facilitates" is singular and agrees with the singular head noun "network."',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'facilitate', whyWrong: 'Plural verb that wrongly agrees with the plural noun "cables."' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'facilitating', whyWrong: 'Participle creating a sentence fragment lacking a finite predicate.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'facilitates', whyWrong: 'Correct answer.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'have facilitated', whyWrong: 'Plural auxiliary verb.' }
        ]
      }
    }
  ]
};

// ==========================================
// BLOCK 2: ADVANCED AGREEMENT, GERUNDS & QUANTITY (Q11 - Q20)
// ==========================================
export const EXERCISE_BLOCK_2: WritingExerciseBlock = {
  blockNumber: 2,
  title: 'Block 2 Exercises: Advanced Agreement, Gerunds & Complex Subjects',
  description: '10 Questions (Questions 11–20) testing gerund subjects, dummy pronouns, indefinite plural quantities, compound subjects, and inverted structures.',
  questions: [
    {
      questionNumber: 11,
      id: 'ch3-q11',
      difficulty: 'Intermediate',
      skillTag: 'Subject-Verb Agreement - Gerund Subjects',
      prompt: 'Synthesizing complex multi-omics datasets across disparate clinical trials ___ rigorous computational harmonization and statistical oversight.',
      options: ['demand', 'demands', 'demanding', 'have demanded'],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The subject is the gerund phrase "Synthesizing complex multi-omics datasets across disparate clinical trials." A gerund phrase acting as a grammatical subject is singular.',
        whyCorrect: '"demands" is singular and agrees with the gerund subject "Synthesizing."',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'demand', whyWrong: 'Plural verb that erroneously agrees with the plural objects "datasets" or "trials."' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'demands', whyWrong: 'Correct answer.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'demanding', whyWrong: 'Participle that fails to form a complete predicate.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'have demanded', whyWrong: 'Plural auxiliary verb.' }
        ]
      }
    },
    {
      questionNumber: 12,
      id: 'ch3-q12',
      difficulty: 'Intermediate',
      skillTag: 'Subject-Verb Agreement - Correlative Proximity',
      prompt: 'Either the municipal zoning commissioners or the chief urban architect ___ authorized to approve variances for high-density transit-oriented developments.',
      options: ["are documented","have been documented","were documented","is documented"],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'When subjects are linked by "either... or," the verb agrees with the closer subject ("chief urban architect," which is singular).',
        whyCorrect: '"is" is singular and matches the adjacent subject "architect."',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'are', whyWrong: 'Matches the earlier plural subject "commissioners" instead of the nearer singular subject.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'were', whyWrong: 'Plural past-tense verb.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'is', whyWrong: 'Correct answer.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'have been', whyWrong: 'Plural auxiliary verb.' }
        ]
      }
    },
    {
      questionNumber: 13,
      id: 'ch3-q13',
      difficulty: 'Hard',
      skillTag: 'Subject-Verb Agreement - Only One of the Nouns Who',
      prompt: 'Dr. Sterling is the only one of the renaissance art historians who ___ argued that the iconic portrait was actually painted by a pupil rather than Leonardo himself.',
      options: ["are relevant","has been relevant","have been relevant","were relevant"],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'In the specific construction "the ONLY one of the [plural noun] who...", the restrictive focus is strictly on "the only one" (singular), meaning the verb in the relative clause must be singular.',
        whyCorrect: '"has" is singular and correctly agrees with "the only one."',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'have', whyWrong: 'Plural verb that fails to recognize the restrictive effect of "the only one."' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'has', whyWrong: 'Correct answer.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'are', whyWrong: 'Plural present verb.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'were', whyWrong: 'Plural past verb.' }
        ]
      }
    },
    {
      questionNumber: 14,
      id: 'ch3-q14',
      difficulty: 'Foundation',
      skillTag: 'Subject-Verb Agreement - More Than One',
      prompt: 'More than one investigative journalist ___ uncovered instances of regulatory noncompliance within the international banking consortium.',
      options: ["are valid","has been valid","were valid","have been valid"],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'The formal subject structure "More than one + singular noun" is grammatically singular and requires a singular verb in standard written English.',
        whyCorrect: '"has" is singular and correctly forms the present perfect verb phrase "has uncovered."',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'have', whyWrong: 'Plural verb violating the formal singular agreement rule of "more than one + singular noun."' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'are', whyWrong: 'Plural verb form.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'has', whyWrong: 'Correct answer.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'were', whyWrong: 'Plural past verb.' }
        ]
      }
    },
    {
      questionNumber: 15,
      id: 'ch3-q15',
      difficulty: 'Hard',
      skillTag: 'Subject-Verb Agreement - A Number vs The Number',
      prompt: 'The number of peer-reviewed publications examining CRISPR base-editing therapies ___ grown exponentially over the past five years.',
      options: ["are sufficient","has been sufficient","have been sufficient","were sufficient"],
      correctAnswer: 1,
      explanation: {
        coreReasoning: '"The number" refers to a specific singular quantitative figure and takes a singular verb (unlike "A number of," which acts as a plural quantifier).',
        whyCorrect: '"has" is singular, agreeing with the singular subject "The number."',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'have', whyWrong: 'Plural verb that confuses "the number" with the plural quantifier "a number."' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'has', whyWrong: 'Correct answer.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'are', whyWrong: 'Plural present verb.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'were', whyWrong: 'Plural past verb.' }
        ]
      }
    },
    {
      questionNumber: 16,
      id: 'ch3-q16',
      difficulty: 'Intermediate',
      skillTag: 'Subject-Verb Agreement - Plural Quantifier',
      prompt: 'A number of prominent architectural historians ___ argued that Brunelleschi\'s dome in Florence synthesized Gothic engineering with classical Roman geometry.',
      options: ["has provided","have provided","is providing","was provided"],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The idiom "A number of [plural noun]" functions as a plural quantifier (meaning "several" or "many") and strictly requires a plural verb.',
        whyCorrect: '"have" is plural and agrees with the plural meaning of "A number of prominent architectural historians."',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'has', whyWrong: 'Singular verb that mistakenly treats "a number of" as a singular head noun.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'have', whyWrong: 'Correct answer.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'is', whyWrong: 'Singular present verb.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'was', whyWrong: 'Singular past verb.' }
        ]
      }
    },
    {
      questionNumber: 17,
      id: 'ch3-q17',
      difficulty: 'Hard',
      skillTag: 'Subject-Verb Agreement - Intervening Prepositional Stacks',
      prompt: 'The discovery of hydrothermal vents along the tectonic rift zones of the East Pacific Rise ___ revolutionized modern marine biology.',
      options: ["are consistent","has been consistent","have been consistent","were consistent"],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The true subject is the singular head noun "discovery." The long sequence of intervening prepositional modifiers ("of hydrothermal vents along the tectonic rift zones of the East Pacific Rise") does not make the subject plural.',
        whyCorrect: '"has" is singular and agrees with the singular subject "discovery."',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'have', whyWrong: 'Plural auxiliary verb incorrectly agreeing with plural nouns inside the modifiers ("vents", "zones").' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'has', whyWrong: 'Correct answer.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'are', whyWrong: 'Plural present verb.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'were', whyWrong: 'Plural past verb.' }
        ]
      }
    },
    {
      questionNumber: 18,
      id: 'ch3-q18',
      difficulty: 'Intermediate',
      skillTag: 'Subject-Verb Agreement - Plural Inverted Syntax',
      prompt: 'Buried deep within the volcanic ash layers of Mount Vesuvius ___ hundreds of carbonized papyrus scrolls from the Villa of the Papyri.',
      options: ["was", "were", "is", "has been"],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The sentence structure is inverted: the locational prepositional phrase opens the sentence, and the grammatical subject is the plural noun phrase "hundreds of carbonized papyrus scrolls."',
        whyCorrect: '"were" is a plural past-tense verb that properly agrees with the plural subject "hundreds."',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'was', whyWrong: 'Singular verb that mistakenly matches singular "Mount Vesuvius."' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'were', whyWrong: 'Correct answer.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'is', whyWrong: 'Singular present verb.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'has been', whyWrong: 'Singular perfect verb phrase.' }
        ]
      }
    },
    {
      questionNumber: 19,
      id: 'ch3-q19',
      difficulty: 'Elite',
      skillTag: 'Subject-Verb Agreement - Compound Gerunds',
      prompt: 'Restoring seventeenth-century oil paintings, which are often highly degraded by humidity, and preserving their fragile wooden frames ___ a profound understanding of historical chemistry.',
      options: ['require', 'requires', 'requiring', 'have required'],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Two distinct gerund phrases connected by "and" ("Restoring seventeenth-century oil paintings... and preserving their fragile wooden frames") form a compound subject and therefore take a plural verb.',
        whyCorrect: '"require" is plural and correctly matches the compound gerund subject.',
        distractorAnalysis: [
          { optionIndex: 1, optionLabel: 'B', optionText: 'requires', whyWrong: 'Singular verb that mistakenly treats two coordinated actions as a single entity.' },
          { optionIndex: 0, optionLabel: 'A', optionText: 'require', whyWrong: 'Correct answer.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'requiring', whyWrong: 'Participle creating a sentence fragment.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'have required', whyWrong: 'Unnecessary tense shift away from the general factual present.' }
        ]
      }
    },
    {
      questionNumber: 20,
      id: 'ch3-q20',
      difficulty: 'Hard',
      skillTag: 'Subject-Verb Agreement - Indefinite Pronoun Plural',
      prompt: 'Although several of the experimental alloys ___ significant embrittlement at cryogenic temperatures, the niobium-titanium composite retained its structural integrity.',
      options: ["exhibits", "exhibited", "was exhibiting", "has exhibited"],
      correctAnswer: 1,
      explanation: {
        coreReasoning: '"Several" is an indefinite pronoun that is plural. Furthermore, the main clause verb "retained" is in the simple past tense, requiring a matching simple past plural verb in the dependent clause.',
        whyCorrect: '"exhibited" correctly provides the simple past verb matching the historical narrative context.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'exhibits', whyWrong: 'Third-person singular present verb that is both grammatically singular and in the wrong tense.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'exhibited', whyWrong: 'Correct answer.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'was exhibiting', whyWrong: 'Singular past progressive verb that clashes with plural "several."' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'has exhibited', whyWrong: 'Singular present perfect verb.' }
        ]
      }
    }
  ]
};

// ==========================================
// BLOCK 3: VERB TENSE, SEQUENCE & MOOD (Q21 - Q30)
// ==========================================
export const EXERCISE_BLOCK_3: WritingExerciseBlock = {
  blockNumber: 3,
  title: 'Block 3 Exercises: Verb Tense, Aspect, Sequence of Tenses & Subjunctive Mood',
  description: '10 Questions (Questions 21–30) testing past perfect sequence, future time clauses, present perfect ongoing actions, and mandative subjunctive structures.',
  questions: [
    {
      questionNumber: 21,
      id: 'ch3-q21',
      difficulty: 'Intermediate',
      skillTag: 'Verb Tense - Past Perfect Sequence',
      prompt: 'By the time the European Space Agency launched the Rosetta probe in 2004, mission scientists ___ the trajectories of Comet 67P for over a decade.',
      options: ['analyzed', 'had analyzed', 'have analyzed', 'will analyze'],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The prepositional phrase "By the time [past event: launched]..." establishes a chronological anchor in the past. An action that occurred and was completed prior to that past anchor requires the past perfect tense ("had + past participle").',
        whyCorrect: '"had analyzed" is past perfect and correctly denotes the prior completed action.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'analyzed', whyWrong: 'Simple past fails to show that the analysis occurred before the 2004 launch.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'had analyzed', whyWrong: 'Correct answer.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'have analyzed', whyWrong: 'Present perfect inappropriately connects to the present rather than a past reference point.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'will analyze', whyWrong: 'Future tense is illogical for events occurring before 2004.' }
        ]
      }
    },
    {
      questionNumber: 22,
      id: 'ch3-q22',
      difficulty: 'Intermediate',
      skillTag: 'Verb Tense - Present Perfect Aspect',
      prompt: 'Since the establishment of the Svalbard Global Seed Vault in 2008, agricultural botanists ___ over 1.2 million distinct seed samples from around the globe.',
      options: ["deposited", "have deposited", "had deposited", "will deposit"],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The temporal marker "Since [past time point]..." establishes a timeframe that began in the past and continues up to the present moment, requiring the present perfect tense ("have/has + past participle").',
        whyCorrect: '"have deposited" is present perfect and correctly indicates an ongoing, cumulative action continuing to the present.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'deposited', whyWrong: 'Simple past tense suggests the depositing ended completely in the past.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'have deposited', whyWrong: 'Correct answer.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'had deposited', whyWrong: 'Past perfect implies the action stopped before another past event, which contradicts "since 2008."' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'will deposit', whyWrong: 'Future tense contradicts the historical record since 2008.' }
        ]
      }
    },
    {
      questionNumber: 23,
      id: 'ch3-q23',
      difficulty: 'Hard',
      skillTag: 'Verb Tense - Future Time Clause',
      prompt: 'When the international team of geophysicists ___ the deep borehole drilling next spring, they will deploy fiber-optic strain sensors to monitor seismic fault slip.',
      options: ['will complete', 'completes', 'completed', 'had completed'],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'In temporal adverbial clauses introduced by time conjunctions ("when," "as soon as," "after," "before"), the simple present tense is required to denote future events, even though the main clause uses "will + base verb."',
        whyCorrect: '"completes" is simple present and correctly fulfills the future time clause rule.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'will complete', whyWrong: 'Ungrammatical use of future auxiliary "will" inside a temporal adverbial clause.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'completes', whyWrong: 'Correct answer.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'completed', whyWrong: 'Past tense contradicts "next spring" and the future main clause "will deploy."' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'had completed', whyWrong: 'Past perfect tense is illogical in a future condition.' }
        ]
      }
    },
    {
      questionNumber: 24,
      id: 'ch3-q24',
      difficulty: 'Hard',
      skillTag: 'Verb Mood - Mandative Subjunctive',
      prompt: 'The institutional ethics board recommended that the principal investigator ___ the clinical trial protocol to include independent data safety monitoring.',
      options: ["modifies", "modify", "modified", "will modify"],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Verbs expressing demand, recommendation, or requirement (e.g., "recommend that," "require that," "insist that") trigger the mandative subjunctive mood, which requires the bare base form of the verb regardless of the subject.',
        whyCorrect: '"modify" is the bare base form required by the subjunctive structure following "recommended that."',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'modifies', whyWrong: 'Indicative third-person singular present form that violates the subjunctive mandate.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'modify', whyWrong: 'Correct answer.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'modified', whyWrong: 'Past indicative form.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'will modify', whyWrong: 'Modal future form unsuited for mandative subjunctive clauses.' }
        ]
      }
    },
    {
      questionNumber: 25,
      id: 'ch3-q25',
      difficulty: 'Intermediate',
      skillTag: 'Verb Tense - Habitual Present vs Past Specific',
      prompt: 'In 1912, Alfred Wegener published his hypothesis of continental drift, which ___ that all modern continents were once joined in a single supercontinent called Pangaea.',
      options: ['posits', 'posited', 'will posit', 'has posited'],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The sentence describes a discrete historical publication event that occurred at a specific past date ("In 1912"), requiring the simple past tense.',
        whyCorrect: '"posited" is the simple past tense matching the historical event in 1912.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'posits', whyWrong: 'Present tense creates an unnecessary tense shift against the historical timeframe "In 1912, Alfred Wegener published..."' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'posited', whyWrong: 'Correct answer.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'will posit', whyWrong: 'Future tense is historically impossible.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'has posited', whyWrong: 'Present perfect is incorrect with a definite past time marker ("In 1912").' }
        ]
      }
    },
    {
      questionNumber: 26,
      id: 'ch3-q26',
      difficulty: 'Hard',
      skillTag: 'Verb Tense - Conditional Sequence',
      prompt: 'If the planetary rover had detected liquid brine beneath the Martian ice cap, researchers ___ an immediate follow-up spectroscopic sounding mission.',
      options: ["who","whom","which","that"],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'In a third conditional (counterfactual past condition introduced by "had detected"), the main result clause requires "would have + past participle" to express the hypothetical past consequence.',
        whyCorrect: '"would have launched" provides the correct conditional perfect construction.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'would launch', whyWrong: 'Second conditional form used for present counterfactuals, mismatched with past condition "had detected."' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'would have launched', whyWrong: 'Correct answer.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'will launch', whyWrong: 'First conditional form mismatched with past perfect condition.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'launched', whyWrong: 'Simple past indicative fails to convey the hypothetical nature of the conditional.' }
        ]
      }
    },
    {
      questionNumber: 27,
      id: 'ch3-q27',
      difficulty: 'Intermediate',
      skillTag: 'Verb Tense - Historical Present in Literary Analysis',
      prompt: 'Throughout her 1962 treatise *Silent Spring*, Rachel Carson ___ that unchecked pesticide application irrevocably degrades aquatic ecosystems.',
      options: ['argues', 'argued', 'had argued', 'will argue'],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'When discussing the ongoing arguments, themes, or contents of enduring literary and scientific texts, standard academic English uses the literary/historical present tense ("argues").',
        whyCorrect: '"argues" is present tense, which is standard when analyzing persistent claims in published works.',
        distractorAnalysis: [
          { optionIndex: 1, optionLabel: 'B', optionText: 'argued', whyWrong: 'Simple past treats the text\'s living argument as a finished past action rather than an enduring textual claim.' },
          { optionIndex: 0, optionLabel: 'A', optionText: 'argues', whyWrong: 'Correct answer.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'had argued', whyWrong: 'Past perfect implies the argument ceased prior to another past event.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'will argue', whyWrong: 'Future tense is incorrect for a published 1962 text.' }
        ]
      }
    },
    {
      questionNumber: 28,
      id: 'ch3-q28',
      difficulty: 'Hard',
      skillTag: 'Verb Tense - Interrupted Past Progressive',
      prompt: 'While the archaeological team ___ the subterranean Roman aqueduct, a sudden cave-in revealed a previously unrecorded Mithraic temple chamber.',
      options: ["excavated", "was excavating", "has excavated", "had been excavating"],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'When a background continuous action in the past is interrupted by a discrete past event ("a sudden cave-in revealed..."), the background action is expressed using the past progressive ("was/were + -ing").',
        whyCorrect: '"was excavating" correctly expresses the ongoing background activity in the past.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'excavated', whyWrong: 'Simple past fails to emphasize the continuous, ongoing nature of the background activity.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'was excavating', whyWrong: 'Correct answer.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'has excavated', whyWrong: 'Present perfect tense is incompatible with past narrative context.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'had been excavating', whyWrong: 'Past perfect progressive would indicate the activity was completed before the cave-in, rather than actively in progress during it.' }
        ]
      }
    },
    {
      questionNumber: 29,
      id: 'ch3-q29',
      difficulty: 'Hard',
      skillTag: 'Verb Mood - Subjunctive Were vs Was',
      prompt: 'If the atmospheric pressure on Mars ___ identical to that of Earth, liquid water could exist persistently on the planetary surface.',
      options: ['is', 'was', 'were', 'would be'],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'In hypothetical or counterfactual conditional clauses (expressing conditions contrary to present reality), standard formal English requires the subjunctive "were" for all grammatical persons.',
        whyCorrect: '"were" is the subjunctive form indicating a counterfactual condition contrary to fact.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'is', whyWrong: 'Present indicative treats the counterfactual premise as true reality.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'was', whyWrong: 'Informal past indicative form unacceptable in formal SAT counterfactual conditionals.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'were', whyWrong: 'Correct answer.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'would be', whyWrong: 'Modal "would" is ungrammatical inside the "if" conditional clause.' }
        ]
      }
    },
    {
      questionNumber: 30,
      id: 'ch3-q30',
      difficulty: 'Intermediate',
      skillTag: 'Verb Tense - Consistent Narrative Tense',
      prompt: 'The particle physicist calibrated the superconducting magnets, initialized the beam collision sensors, and ___ the data acquisition protocol.',
      options: ["executes", "executed", "executing", "has executed"],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Verbs in a compound predicate list describing sequential past actions must maintain tense consistency: "calibrated... initialized... and executed" (all simple past).',
        whyCorrect: '"executed" is simple past, maintaining perfect parallel tense consistency.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'executes', whyWrong: 'Shifts to present tense, disrupting the parallel series of past actions.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'executed', whyWrong: 'Correct answer.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'executing', whyWrong: 'Participle breaks the series of finite predicate verbs.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'has executed', whyWrong: 'Shifts to present perfect, breaking predicate parallelism.' }
        ]
      }
    }
  ]
};

// ==========================================
// BLOCK 4: PRONOUN CASE, AGREEMENT & REFERENCE (Q31 - Q40)
// ==========================================
export const EXERCISE_BLOCK_4: WritingExerciseBlock = {
  blockNumber: 4,
  title: 'Block 4 Exercises: Pronoun Case, Antecedent Agreement & Ambiguity',
  description: '10 Questions (Questions 31–40) testing subjective vs objective case, compound pronouns, relative pronoun selection (who/whom/whose/which), possessives, and indefinite pronoun concord.',
  questions: [
    {
      questionNumber: 31,
      id: 'ch3-q31',
      difficulty: 'Intermediate',
      skillTag: 'Pronoun Case - Relative Clauses (Who vs. Whom)',
      prompt: 'The senior curator ___ the antiquities committee selected to supervise the architectural restoration has published widely on Venetian Gothic palazzi.',
      options: ['who', 'whom', 'which', 'whose'],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Within the relative clause ("the antiquities committee selected [whom] to supervise"), the relative pronoun serves as the direct object of the transitive verb "selected." Therefore, objective-case "whom" is required.',
        whyCorrect: '"whom" is the objective-case pronoun functioning as the object of "selected."',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'who', whyWrong: 'Subjective-case pronoun; the subject of the clause is already "the antiquities committee."' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'whom', whyWrong: 'Correct answer.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'which', whyWrong: 'Relative pronoun reserved for non-human entities.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'whose', whyWrong: 'Possessive pronoun.' }
        ]
      }
    },
    {
      questionNumber: 32,
      id: 'ch3-q32',
      difficulty: 'Foundation',
      skillTag: 'Pronoun Case - After Prepositions',
      prompt: 'Between the chief monetary policy analyst and ___, discussions regarding the benchmark interest rate trajectory grew increasingly contentious.',
      options: ['I', 'me', 'myself', 'mine'],
      correctAnswer: 1,
      explanation: {
        coreReasoning: '"Between" is a preposition that governs all pronouns in its prepositional phrase in the objective case ("between [the analyst] and [me]").',
        whyCorrect: '"me" is the objective-case pronoun required as the object of the preposition "between."',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'I', whyWrong: 'Subjective pronoun incorrectly placed as the object of a preposition.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'me', whyWrong: 'Correct answer.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'myself', whyWrong: 'Reflexive pronoun used improperly without a coreferent subject in the clause.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'mine', whyWrong: 'Possessive pronoun.' }
        ]
      }
    },
    {
      questionNumber: 33,
      id: 'ch3-q33',
      difficulty: 'Intermediate',
      skillTag: 'Pronoun Antecedent Agreement - Collective Singular',
      prompt: 'The multinational pharmaceutical corporation restructured ___ clinical trials division to comply with updated European regulatory mandates.',
      options: ["its own","it's own","their own","they're own"],
      correctAnswer: 1,
      explanation: {
        coreReasoning: '"Corporation" is a singular collective noun representing a single entity. The possessive pronoun referring to it must be singular and neuter ("its").',
        whyCorrect: '"its" is the singular possessive pronoun correctly referring to "corporation."',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'their', whyWrong: 'Plural pronoun incorrectly referring to a singular entity ("corporation").' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'its', whyWrong: 'Correct answer.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'they\'re', whyWrong: 'Contraction for "they are."' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'it\'s', whyWrong: 'Contraction for "it is" or "it has."' }
        ]
      }
    },
    {
      questionNumber: 34,
      id: 'ch3-q34',
      difficulty: 'Hard',
      skillTag: 'Pronoun Case - Comparisons with Than/As',
      prompt: 'Although both oceanographers conducted extensive hydrothermal fieldwork, few researchers have logged more submersible dives than ___.',
      options: ['her', 'she', 'herself', 'hers'],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'In formal comparisons using "than," an elliptical clause is formed where the verb is omitted but understood: "than she [has logged]." Therefore, the subjective pronoun "she" is grammatically required.',
        whyCorrect: '"she" is the subjective-case pronoun completing the elliptical clause "than she [has logged]."',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'her', whyWrong: 'Objective pronoun that is informal and grammatically incorrect in elliptical subject comparisons.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'she', whyWrong: 'Correct answer.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'herself', whyWrong: 'Reflexive pronoun used improperly.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'hers', whyWrong: 'Possessive pronoun.' }
        ]
      }
    },
    {
      questionNumber: 35,
      id: 'ch3-q35',
      difficulty: 'Intermediate',
      skillTag: 'Pronoun Selection - Relative Pronouns (Whose for Inanimates)',
      prompt: 'The oceanographic institute ___ benthic survey documented hydrothermal vent ecosystems off the Galápagos Rift received a major National Science Foundation grant.',
      options: ['who\'s', 'who', 'whose', 'whom'],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'A possessive relative pronoun is required to show that the "benthic survey" belonged to or was conducted by the "oceanographic institute." In English, "whose" functions as the possessive relative pronoun for both persons and inanimate entities.',
        whyCorrect: '"whose" is the possessive relative pronoun indicating ownership.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'who\'s', whyWrong: 'Contraction for "who is" or "who has."' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'who', whyWrong: 'Subject pronoun.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'whose', whyWrong: 'Correct answer.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'whom', whyWrong: 'Object pronoun.' }
        ]
      }
    },
    {
      questionNumber: 36,
      id: 'ch3-q36',
      difficulty: 'Foundation',
      skillTag: 'Pronoun Case - Compound Subject',
      prompt: 'Dr. Al-Mansoor and ___ co-authored the seminal monograph on high-entropy ceramic alloys.',
      options: ["myself","me","I","my own"],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The pronoun is part of the compound subject governing the verb "co-authored." Applying the "Remove-It Test" ("I co-authored the monograph") confirms that the subjective-case pronoun "I" is required.',
        whyCorrect: '"I" is the subjective pronoun required for a grammatical subject.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'me', whyWrong: 'Objective pronoun used improperly as a grammatical subject.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'I', whyWrong: 'Correct answer.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'myself', whyWrong: 'Reflexive pronoun used improperly without a coreferent subject.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'mine', whyWrong: 'Possessive pronoun.' }
        ]
      }
    },
    {
      questionNumber: 37,
      id: 'ch3-q37',
      difficulty: 'Hard',
      skillTag: 'Pronoun Reference - Vague Pronoun Reference',
      prompt: 'When the lithium-sulfur battery reached critical operating temperature during testing, ___ caused the thermal runaway alarm to trigger immediately.',
      options: ['which', 'this state', 'it', 'they'],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'A vague pronoun like "it" or "which" without an explicit antecedent can lead to ambiguity. Using an explicit noun phrase ("this state") provides unambiguous clausal clarity and precision.',
        whyCorrect: '"this state" provides an unambiguous, grammatically precise subject identifying the exact condition.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'which', whyWrong: 'Relative pronoun cannot stand as the subject of an independent clause following an adverbial clause.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'this state', whyWrong: 'Correct answer.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'it', whyWrong: 'Ambiguous pronoun reference that could refer vaguely to the battery, the temperature, or testing.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'they', whyWrong: 'Plural pronoun with no plural antecedent.' }
        ]
      }
    },
    {
      questionNumber: 38,
      id: 'ch3-q38',
      difficulty: 'Intermediate',
      skillTag: 'Pronoun Case - Who as Subject of Relative Clause',
      prompt: 'The university announced tenure-track appointments for three astrophysicists ___ the search committee believes will transform the exoplanet research department.',
      options: ["who","whom","whose","that"],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Despite the parenthetical interrupter "the search committee believes," the relative pronoun is the grammatical subject of the verb phrase "will transform" within the relative clause. Therefore, subjective "who" is required.',
        whyCorrect: '"who" is the subjective-case pronoun governing the predicate "will transform."',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'whom', whyWrong: 'Objective pronoun incorrectly chosen due to confusion over the parenthetical "the search committee believes."' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'who', whyWrong: 'Correct answer.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'which', whyWrong: 'Incorrect relative pronoun for human beings.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'whose', whyWrong: 'Possessive relative pronoun.' }
        ]
      }
    },
    {
      questionNumber: 39,
      id: 'ch3-q39',
      difficulty: 'Hard',
      skillTag: 'Pronoun Agreement - Indefinite Pronoun Concord',
      prompt: 'Every student conducting field excavations in the Valley of the Kings must submit ___ preliminary stratigraphy report by Friday.',
      options: ['their', 'his or her', 'they\'re', 'its'],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'In formal traditional grammar items on standardized assessments, "Every student" is grammatically singular and takes the singular possessive "his or her" (or a rewritten plural noun).',
        whyCorrect: '"his or her" is singular and agrees strictly with the singular antecedent "Every student."',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'their', whyWrong: 'Plural possessive pronoun that violates traditional singular concord with "Every student."' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'his or her', whyWrong: 'Correct answer.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'they\'re', whyWrong: 'Contraction for "they are."' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'its', whyWrong: 'Inanimate pronoun inappropriate for human students.' }
        ]
      }
    },
    {
      questionNumber: 40,
      id: 'ch3-q40',
      difficulty: 'Intermediate',
      skillTag: 'Pronoun Case - Reflexive Pronoun Restrictions',
      prompt: 'The conference organizers extended formal invitations to the visiting delegates, the keynote speakers, and ___ .',
      options: ["my colleague and I","my colleague and me","myself and my colleague","me and my colleague"],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The pronoun is the object of the preposition "to" in a compound series ("to [the delegates], [the speakers], and [me]"). Objective-case "me" is required. A reflexive pronoun ("myself") cannot be used without a preceding coreferent subject ("I").',
        whyCorrect: '"me" is the correct objective-case pronoun.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'myself', whyWrong: 'Incorrect use of reflexive pronoun without an antecedent "I" in the clause.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'me', whyWrong: 'Correct answer.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'I', whyWrong: 'Subjective-case pronoun.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'mine', whyWrong: 'Possessive pronoun.' }
        ]
      }
    }
  ]
};
