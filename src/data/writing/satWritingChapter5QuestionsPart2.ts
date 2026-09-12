import { WritingExerciseBlock } from './satWritingTypes';

export const EXERCISE_BLOCK_6: WritingExerciseBlock = {
  blockNumber: 6,
  title: 'Block 6 Exercises: Pronoun Reference, Case & Agreement Clarity',
  description: '10 Questions (Questions 51–60) testing pronoun-antecedent agreement, ambiguous reference resolution, subjective vs. objective case, and relative pronoun selection.',
  questions: [
    {
      questionNumber: 51,
      id: 'ch5-q51',
      difficulty: 'Intermediate',
      skillTag: 'Pronoun Agreement - Collective Noun Agreement',
      prompt: 'The archaeological research team published ___ findings on Neolithic settlement density in the Jordan Valley after four seasons of stratigraphic excavation.',
      options: ['its', 'their', 'they\'re', 'its\''],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'In standard American English, collective nouns denoting a unified singular entity ("The archaeological research team") take singular pronouns ("its"), not plural ("their").',
        whyCorrect: 'Option A supplies the singular possessive pronoun "its" agreeing with the singular collective noun "team".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'its', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'their', whyWrong: 'Plural pronoun used for a singular collective noun.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'they\'re', whyWrong: 'Contraction of "they are", not a possessive pronoun.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'its\'', whyWrong: 'Nonexistent English punctuation form.' }
        ]
      }
    },
    {
      questionNumber: 52,
      id: 'ch5-q52',
      difficulty: 'Intermediate',
      skillTag: 'Pronoun Case - Compound Subject vs Object',
      prompt: 'The university administration awarded the archival preservation fellowship to both Dr. Aris Thorne and ___.',
      options: ['me', 'I', 'myself', 'he'],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The compound pronoun functions as the object of the preposition "to" ("awarded... to [Dr. Thorne] and [Object Pronoun]"). The objective first-person pronoun is "me".',
        whyCorrect: 'Option A provides the objective case pronoun "me".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'me', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'I', whyWrong: 'Subjective case pronoun used in an objective prepositional slot.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'myself', whyWrong: 'Reflexive pronoun used without a preceding first-person subject.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'he', whyWrong: 'Subjective case pronoun.' }
        ]
      }
    },
    {
      questionNumber: 53,
      id: 'ch5-q53',
      difficulty: 'Hard',
      skillTag: 'Pronoun Reference - Antecedent Ambiguity Resolution',
      prompt: 'When the museum director met with the chief curator, she expressed concern that the climate-control system in the gallery was malfunctioning. Which revision eliminates the pronoun ambiguity regarding who expressed concern?',
      options: [
        'Meeting with the chief curator, concern was expressed by the museum director regarding the gallery climate-control system.',
        'During their meeting, the museum director expressed concern to the chief curator that the climate-control system in the gallery was malfunctioning.',
        'When the museum director met with the chief curator, she herself expressed concern that the gallery climate-control system was malfunctioning.',
        'When meeting the chief curator, the gallery climate-control system caused her to express concern.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'In the original, "she" can grammatically refer to either the museum director or the chief curator. Option B explicitly designates "the museum director" as the speaker and "the chief curator" as the recipient, removing all ambiguity.',
        whyCorrect: 'Option B names the subject and listener directly without ambiguous pronouns.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Meeting with the chief curator, concern was expressed by the museum director...', whyWrong: 'Dangling modifier and passive voice.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'During their meeting, the museum director expressed concern to the chief curator that the climate-control system in the gallery was malfunctioning.', whyWrong: 'Correct answer.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'When the museum director met with the chief curator, she herself expressed concern...', whyWrong: 'Intensive pronoun "herself" still fails to clarify which woman spoke.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'When meeting the chief curator, the gallery climate-control system caused her to express concern.', whyWrong: 'Dangling modifier attached to climate-control system.' }
        ]
      }
    },
    {
      questionNumber: 54,
      id: 'ch5-q54',
      difficulty: 'Hard',
      skillTag: 'Pronoun Agreement - Indefinite Pronoun Singular Agreement',
      prompt: 'Each of the forty candidate vaccines evaluated during the preclinical trial demonstrated ___ capacity to elicit neutralising antibodies in murine models.',
      options: ["its distinctive","it's distinctive","their distinctive","they're distinctive"],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The indefinite pronoun "Each" is grammatically singular and serves as the simple subject. The prepositional phrase "of the forty candidate vaccines" does not alter the singular agreement requirement.',
        whyCorrect: 'Option A provides the singular possessive pronoun "its" agreeing with "Each".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'its', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'their', whyWrong: 'Plural pronoun falsely agreeing with the object of the preposition "vaccines".' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'it\'s', whyWrong: 'Contraction of "it is".' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'they\'re', whyWrong: 'Contraction of "they are".' }
        ]
      }
    },
    {
      questionNumber: 55,
      id: 'ch5-q55',
      difficulty: 'Hard',
      skillTag: 'Pronoun Case - Relative Pronoun Who vs Whom',
      prompt: 'The lead bioethicist, ___ the parliamentary committee appointed to oversee gene-editing protocols, issued a comprehensive advisory on germline modifications.',
      options: ["whose findings","who findings","whom findings","which findings"],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'In the relative clause "whom the parliamentary committee appointed [Object] to oversee...", the pronoun serves as the direct object of the transitive verb "appointed". The objective case relative pronoun "whom" is required for persons.',
        whyCorrect: 'Option A correctly uses the objective case relative pronoun "whom".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'whom', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'who', whyWrong: 'Subjective case pronoun used where a grammatical direct object is required.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'which', whyWrong: 'Relative pronoun used for inanimate objects, not persons.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'whose', whyWrong: 'Possessive relative pronoun.' }
        ]
      }
    },
    {
      questionNumber: 56,
      id: 'ch5-q56',
      difficulty: 'Elite',
      skillTag: 'Pronoun Reference - Vague Pronoun "This" Resolution',
      prompt: 'Original: "The seismic survey revealed extensive subsurface fault fracturing near the aqueduct. This alarmed municipal civil engineers." Which revision best repairs the vague demonstrative reference?',
      options: [
        'The seismic survey revealed extensive subsurface fault fracturing near the aqueduct, which this alarmed municipal civil engineers.',
        'The seismic survey revealed extensive subsurface fault fracturing near the aqueduct, a structural vulnerability that alarmed municipal civil engineers.',
        'The seismic survey revealed extensive subsurface fault fracturing near the aqueduct, and this thing alarmed municipal civil engineers.',
        'Extensive subsurface fault fracturing near the aqueduct was revealed by the seismic survey, being alarming to municipal civil engineers.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'An unsupported demonstrative pronoun ("This") pointing back to an entire preceding clause creates vague reference. Converting the second sentence into a clarifying appositive noun phrase ("a structural vulnerability that...") specifies the exact conceptual referent.',
        whyCorrect: 'Option B replaces the vague pronoun with a concrete summary appositive.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'The seismic survey revealed extensive subsurface fault fracturing near the aqueduct, which this alarmed municipal civil engineers.', whyWrong: 'Ungrammatical combination of "which this".' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'The seismic survey revealed extensive subsurface fault fracturing near the aqueduct, a structural vulnerability that alarmed municipal civil engineers.', whyWrong: 'Correct answer.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'The seismic survey revealed extensive subsurface fault fracturing near the aqueduct, and this thing alarmed municipal civil engineers.', whyWrong: 'Vague and colloquial phrasing ("this thing").' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Extensive subsurface fault fracturing near the aqueduct was revealed by the seismic survey, being alarming to municipal civil engineers.', whyWrong: 'Weak passive voice and clumsy participle "being alarming".' }
        ]
      }
    },
    {
      questionNumber: 57,
      id: 'ch5-q57',
      difficulty: 'Elite',
      skillTag: 'Pronoun Case - Comparative Than Clauses',
      prompt: 'The senior astrophysicist has published substantially more peer-reviewed papers on cosmic microwave background radiation than ___.',
      options: ["I personally","me personally","mine personally","myself personally"],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'In formal comparisons following "than", the pronoun represents the subject of an implied elliptical clause: "than I [have published]". The subjective case pronoun "I" is grammatically required.',
        whyCorrect: 'Option A provides the subjective case pronoun "I" matching the elliptical clause subject.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'I', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'me', whyWrong: 'Objective case pronoun informal error in elliptical comparison.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'myself', whyWrong: 'Reflexive pronoun used improperly as a comparative subject.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'mine', whyWrong: 'Possessive pronoun comparing an author to papers.' }
        ]
      }
    },
    {
      questionNumber: 58,
      id: 'ch5-q58',
      difficulty: 'Elite',
      skillTag: 'Pronoun Reference - Possessive Antecedents',
      prompt: 'Original: "In Maria Telkes’s solar distillation patents, she pioneered passive thermal storage." What is the technical pronoun reference flaw in this sentence?',
      options: [
        'The pronoun "she" cannot grammatically take the possessive noun phrase "Maria Telkes’s" as its true antecedent because a possessive noun functions as an adjective.',
        'The pronoun "she" should be replaced with "they" to indicate gender neutrality.',
        'The past tense verb "pioneered" fails to agree with the singular pronoun.',
        'The sentence is a run-on sentence lacking a coordinating conjunction.'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'A personal pronoun in the subject slot ("she") should refer to a nominative noun antecedent, not a possessive modifier ("Maria Telkes’s"), which grammatically functions as an adjective modifying "patents". The clean revision is: "In her solar distillation patents, Maria Telkes pioneered passive thermal storage."',
        whyCorrect: 'Option A correctly identifies the possessive antecedent rule defect.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'The pronoun "she" cannot grammatically take the possessive noun phrase "Maria Telkes’s" as its true antecedent because a possessive noun functions as an adjective.', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'The pronoun "she" should be replaced with "they" to indicate gender neutrality.', whyWrong: 'Maria Telkes is a historically documented female scientist.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'The past tense verb "pioneered" fails to agree with the singular pronoun.', whyWrong: 'Past tense verbs have invariant agreement.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'The sentence is a run-on sentence lacking a coordinating conjunction.', whyWrong: 'The sentence is a simple sentence with an introductory prepositional phrase.' }
        ]
      }
    },
    {
      questionNumber: 59,
      id: 'ch5-q59',
      difficulty: 'Hard',
      skillTag: 'Pronoun Agreement - Compound Antecedents with Nor',
      prompt: 'Neither the principal investigator nor her postdoctoral associates were willing to compromise ___ methodological standards during the clinical replication crisis.',
      options: ['their', 'her', 'its', 'his or her'],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'When two antecedents are joined by "neither... nor", the pronoun agrees in number with the closer antecedent. The closer antecedent is plural ("postdoctoral associates"), requiring the plural possessive pronoun "their".',
        whyCorrect: 'Option A supplies "their" in agreement with the closer plural antecedent.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'their', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'her', whyWrong: 'Fails to agree with the closer plural antecedent.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'its', whyWrong: 'Singular neuter pronoun inappropriate for plural human researchers.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'his or her', whyWrong: 'Singular pronoun phrase.' }
        ]
      }
    },
    {
      questionNumber: 60,
      id: 'ch5-q60',
      difficulty: 'Elite',
      skillTag: 'Pronoun Case - Gerund Subject Possessive Case',
      prompt: 'The institutional ethics committee objected to ___ conducting gain-of-function virology experiments without biosafety level 4 containment protocols.',
      options: ["he actively","him actively","himself actively","his active"],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'A gerund ("conducting") is a verbal noun. A noun or pronoun modifying a gerund to indicate the agent of the action must take the possessive case ("his conducting", "their publishing").',
        whyCorrect: 'Option A provides the possessive pronoun "his" properly modifying the gerund "conducting".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'his', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'him', whyWrong: 'Objective pronoun used before a gerund creates an informal error.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'he', whyWrong: 'Subjective case pronoun cannot modify a gerund.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'himself', whyWrong: 'Reflexive pronoun cannot modify a gerund.' }
        ]
      }
    }
  ]
};

export const EXERCISE_BLOCK_7: WritingExerciseBlock = {
  blockNumber: 7,
  title: 'Block 7 Exercises: Illogical Comparisons & Ontological Symmetry',
  description: '10 Questions (Questions 61–70) testing singular vs. plural comparative demonstratives (that/those of), authorial vs. work comparisons, and parallel metric alignment.',
  questions: [
    {
      questionNumber: 61,
      id: 'ch5-q61',
      difficulty: 'Intermediate',
      skillTag: 'Logical Comparisons - Singular Demonstrative Substitute',
      prompt: 'The energy density of solid-state lithium-metal batteries is significantly higher than ___ of conventional lithium-ion cells.',
      options: ['that', 'conventional lithium-ion cells', 'those', 'it'],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The sentence compares an abstract singular physical metric ("energy density"). The demonstrative pronoun "that" is required to represent "the energy density" and prevent comparing density directly to physical battery cells.',
        whyCorrect: 'Option A provides "that", completing the comparative phrase "that of conventional lithium-ion cells".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'that', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'conventional lithium-ion cells', whyWrong: 'Creates an illogical comparison between energy density and physical battery cells.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'those', whyWrong: 'Plural demonstrative pronoun used for singular noun "energy density".' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'it', whyWrong: 'Personal pronoun "it" cannot take a post-modifying prepositional phrase in formal comparison.' }
        ]
      }
    },
    {
      questionNumber: 62,
      id: 'ch5-q62',
      difficulty: 'Intermediate',
      skillTag: 'Logical Comparisons - Plural Demonstrative Substitute',
      prompt: 'The aerodynamic drag coefficients of supersonic aircraft are far more sensitive to boundary-layer turbulence than ___ of subsonic commercial airliners.',
      options: ['those', 'that', 'it', 'the ones of'],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The noun being compared is plural count ("aerodynamic drag coefficients"). The plural demonstrative pronoun "those" is required.',
        whyCorrect: 'Option A supplies "those", maintaining grammatical and ontological symmetry with "coefficients".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'those', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'that', whyWrong: 'Singular demonstrative used for plural antecedent "coefficients".' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'it', whyWrong: 'Singular personal pronoun.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'the ones of', whyWrong: 'Informal and unidiomatic phrasing.' }
        ]
      }
    },
    {
      questionNumber: 63,
      id: 'ch5-q63',
      difficulty: 'Hard',
      skillTag: 'Logical Comparisons - Authorial Style vs Author Entity',
      prompt: 'Virginia Woolf’s stream-of-consciousness narrative technique in To the Lighthouse is more structurally fragmented than ___.',
      options: [
        'that of E. M. Forster in A Room with a View',
        'E. M. Forster',
        'E. M. Forster wrote A Room with a View',
        'the novels written by E. M. Forster'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The comparison is between narrative techniques. Option A balances "Virginia Woolf’s stream-of-consciousness narrative technique" with "that [technique] of E. M. Forster".',
        whyCorrect: 'Option A balances technique with technique via the singular comparative pronoun "that of".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'that of E. M. Forster in A Room with a View', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'E. M. Forster', whyWrong: 'Illogical comparison comparing a narrative technique to a human author.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'E. M. Forster wrote A Room with a View', whyWrong: 'Mismatches a noun phrase with a full declarative clause.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'the novels written by E. M. Forster', whyWrong: 'Compares a singular stylistic technique to plural complete novels.' }
        ]
      }
    },
    {
      questionNumber: 64,
      id: 'ch5-q64',
      difficulty: 'Hard',
      skillTag: 'Logical Comparisons - Institutional Metrics',
      prompt: 'The research expenditure of the Max Planck Institute exceeds ___ of any single university department in continental Europe.',
      options: [
        'that',
        'any single university department',
        'those',
        'the one'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The term on the left is "the research expenditure" (singular non-count noun). Symmetrical comparison requires "that" to stand for expenditure.',
        whyCorrect: 'Option A correctly provides "that" (comparing expenditure with that of any single university department).',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'that', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'any single university department', whyWrong: 'Compares financial expenditure directly to an academic department.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'those', whyWrong: 'Plural demonstrative for singular expenditure.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'the one', whyWrong: 'Awkward and non-standard comparative substitute.' }
        ]
      }
    },
    {
      questionNumber: 65,
      id: 'ch5-q65',
      difficulty: 'Hard',
      skillTag: 'Logical Comparisons - Parallel Prepositional Complements',
      prompt: 'The philanthropic endowment allocates substantially more capital toward climate-resilience infrastructure than ___ fossil-fuel mitigation technologies.',
      options: ['toward', 'mitigating', 'for', 'it invests in'],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The initial allocation is framed by the preposition "toward" ("allocates capital toward [X]"). To preserve exact parallel direction across the comparative pivot "than", the governing preposition "toward" must be repeated.',
        whyCorrect: 'Option A balances "toward climate-resilience infrastructure" with "toward fossil-fuel mitigation technologies".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'toward', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'mitigating', whyWrong: 'Switches to a gerund, breaking prepositional parallelism.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'for', whyWrong: 'Switches prepositions from "toward" to "for".' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'it invests in', whyWrong: 'Introduces an asymmetric clause.' }
        ]
      }
    },
    {
      questionNumber: 66,
      id: 'ch5-q66',
      difficulty: 'Elite',
      skillTag: 'Logical Comparisons - Limiting Adverb Placement & Scope',
      prompt: 'Which sentence explicitly restricts the peer-review clearance to the senior editorial board (meaning no subordinate reviewers or external referees participated)?',
      options: [
        'Only the senior editorial board cleared the investigative report for publication.',
        'The senior editorial board only cleared the investigative report for publication.',
        'The senior editorial board cleared only the investigative report for publication.',
        'The senior editorial board cleared the investigative report for publication only.'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Placing the limiting adverb "Only" directly before the subject noun phrase "the senior editorial board" restricts agency exclusively to that board.',
        whyCorrect: 'Option A places "Only" in initial position modifying the subject.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Only the senior editorial board cleared the investigative report for publication.', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'The senior editorial board only cleared the investigative report for publication.', whyWrong: 'Restricts the verbal action (they cleared it, but did not write or edit it).' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'The senior editorial board cleared only the investigative report for publication.', whyWrong: 'Restricts the direct object (cleared no other reports).' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'The senior editorial board cleared the investigative report for publication only.', whyWrong: 'Restricts the intended purpose of the clearance.' }
        ]
      }
    },
    {
      questionNumber: 67,
      id: 'ch5-q67',
      difficulty: 'Elite',
      skillTag: 'Logical Comparisons - Flawless Category Synthesis',
      prompt: 'Which sentence maintains an uncompromised, logically valid comparison?',
      options: [
        'The computational throughput of quantum processors is vastly superior to that of classical silicon chips.',
        'The computational throughput of quantum processors is vastly superior to classical silicon chips.',
        'Quantum processors have a computational throughput superior to classical silicon chips.',
        'The computational throughput of quantum processors dwarfs classical silicon chips.'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Option A compares "computational throughput" with "that [computational throughput] of classical silicon chips", preserving exact categorical parity.',
        whyCorrect: 'Option A uses "that of" to balance the two abstract metrics.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'The computational throughput of quantum processors is vastly superior to that of classical silicon chips.', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'The computational throughput of quantum processors is vastly superior to classical silicon chips.', whyWrong: 'Compares throughput (metric) to chips (hardware).' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Quantum processors have a computational throughput superior to classical silicon chips.', whyWrong: 'Compares throughput to silicon chips.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'The computational throughput of quantum processors dwarfs classical silicon chips.', whyWrong: 'Compares throughput to physical chips.' }
        ]
      }
    },
    {
      questionNumber: 68,
      id: 'ch5-q68',
      difficulty: 'Elite',
      skillTag: 'Logical Comparisons - Spatial Modifier Disambiguation',
      prompt: 'Original: "The conservators analyzed the pigment degradation on the Renaissance fresco in the restoration pavilion." Which revision eliminates ambiguity regarding whether the fresco was located in the pavilion or the analysis was conducted there?',
      options: [
        'In the restoration pavilion, the conservators analyzed the pigment degradation on the Renaissance fresco.',
        'The conservators analyzed the pigment degradation on the Renaissance fresco that was in the restoration pavilion.',
        'The conservators, in the restoration pavilion, analyzed the pigment degradation on the Renaissance fresco.',
        'The conservators analyzed, in the restoration pavilion, the pigment degradation on the Renaissance fresco.'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Placing the prepositional phrase "In the restoration pavilion" at the head of the sentence unambiguously modifies the main verbal action ("analyzed"), clarifying the location of the scientific analysis.',
        whyCorrect: 'Option A sets the spatial frame for the research action without attaching to the fresco itself.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'In the restoration pavilion, the conservators analyzed the pigment degradation on the Renaissance fresco.', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'The conservators analyzed the pigment degradation on the Renaissance fresco that was in the restoration pavilion.', whyWrong: 'Restricts the location of the fresco itself, which is fresco on a church wall.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'The conservators, in the restoration pavilion, analyzed the pigment degradation on the Renaissance fresco.', whyWrong: 'Creates an awkward, choppy parenthetical split between subject and verb.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'The conservators analyzed, in the restoration pavilion, the pigment degradation on the Renaissance fresco.', whyWrong: 'Ungrammatically severs transitive verb from its direct object.' }
        ]
      }
    },
    {
      questionNumber: 69,
      id: 'ch5-q69',
      difficulty: 'Hard',
      skillTag: 'Logical Comparisons - Geographic and Climatic Comparison',
      prompt: 'The annual precipitation patterns of the Pacific Northwest are significantly more volatile than ___ of the Great Plains.',
      options: ['those', 'that', 'the Great Plains', 'when compared to the Great Plains'],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The head noun is plural ("annual precipitation patterns"). The comparison requires the plural demonstrative pronoun "those" to stand for "the precipitation patterns of the Great Plains".',
        whyCorrect: 'Option A supplies the plural demonstrative "those" to compare patterns with patterns.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'those', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'that', whyWrong: 'Singular demonstrative for plural antecedent "patterns".' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'the Great Plains', whyWrong: 'Illogically compares meteorological precipitation patterns directly to a geographical region.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'when compared to the Great Plains', whyWrong: 'Wordy modifier that still compares patterns to land.' }
        ]
      }
    },
    {
      questionNumber: 70,
      id: 'ch5-q70',
      difficulty: 'Elite',
      skillTag: 'Logical Comparisons - Correlative As... As Symmetry',
      prompt: 'The acoustic fidelity of the newly restored historic concert hall is at least as pristine as ___ in Western Europe.',
      options: [
        'that of any other auditorium',
        'any other auditorium',
        'the auditoriums',
        'when hearing any other auditorium'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The sentence compares "The acoustic fidelity" (singular non-count noun). Strict logical symmetry across the equative comparative structure "as pristine as" requires "that of [auditorium]".',
        whyCorrect: 'Option A balances acoustic fidelity with "that of any other auditorium".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'that of any other auditorium', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'any other auditorium', whyWrong: 'Illogically compares acoustic fidelity directly to a physical building.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'the auditoriums', whyWrong: 'Plural noun comparing acoustic property to physical structures.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'when hearing any other auditorium', whyWrong: 'Dangling adverbial clause breaking comparative symmetry.' }
        ]
      }
    }
  ]
};

export const EXERCISE_BLOCK_8: WritingExerciseBlock = {
  blockNumber: 8,
  title: 'Block 8 Exercises: Tone, Register Uniformity & Scientific Modality',
  description: '10 Questions (Questions 71–80) testing formal scholarly register, elimination of colloquialisms, calibration of empirical scope, and epistemic modality.',
  questions: [
    {
      questionNumber: 71,
      id: 'ch5-q71',
      difficulty: 'Intermediate',
      skillTag: 'Diction - Epistemic Modality Calibration',
      prompt: 'Observational data collected from deep-sea hydrophones ___ that acoustic disruption from commercial container shipping alters the migratory trajectories of baleen whales.',
      options: ['suggests', 'conclusively proves', 'guarantees', 'irrefutably verifies'],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Observational, non-experimental field data cannot establish absolute deductive certainty. The verb "suggests" perfectly calibrates the claim to the exploratory evidentiary warrant.',
        whyCorrect: 'Option A uses the measured epistemic verb "suggests", adhering to scientific convention regarding observational studies.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'suggests', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'conclusively proves', whyWrong: 'Grossly overstates the certainty of observational field data.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'guarantees', whyWrong: 'Inappropriate absolute claim for marine bioacoustics.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'irrefutably verifies', whyWrong: 'Hyperbolic claim unjustified by non-interventional data.' }
        ]
      }
    },
    {
      questionNumber: 72,
      id: 'ch5-q72',
      difficulty: 'Intermediate',
      skillTag: 'Diction - Effective vs Efficient Discrimination',
      prompt: 'The direct air carbon-capture pilot plant successfully eliminated 95% of ambient industrial emissions, but it consumed 40% of the municipal grid’s total electrical output. In the technical audit, the facility was described as:',
      options: [
        'effective but inefficient',
        'efficient but ineffective',
        'economical but imprecise',
        'inconsequential but optimal'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: '"Effective" denotes successfully achieving an intended outcome (95% emissions elimination), while "inefficient" denotes excessive consumption of finite resources (40% of total electrical output).',
        whyCorrect: 'Option A precisely pairs "effective" (high performance) with "inefficient" (high resource consumption).',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'effective but inefficient', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'efficient but ineffective', whyWrong: 'Inverts the core definitions of efficiency and effectiveness.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'economical but imprecise', whyWrong: 'Consuming 40% of grid electricity is the opposite of economical.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'inconsequential but optimal', whyWrong: 'The facility achieved a massive 95% reduction, making it consequential.' }
        ]
      }
    },
    {
      questionNumber: 73,
      id: 'ch5-q73',
      difficulty: 'Hard',
      skillTag: 'Diction - Proportional Quantifiers',
      prompt: 'A longitudinal demographic study determined that 64% of dual-income households in the metropolitan area experienced severe housing-cost burdens. Which synthesis is most defensible?',
      options: [
        'Most dual-income households in the metropolitan area experienced severe housing-cost burdens.',
        'A negligible minority of metropolitan dual-income households experienced severe housing-cost burdens.',
        'Every dual-income household in the metropolitan area experienced severe housing-cost burdens.',
        'Few dual-income households in the metropolitan area experienced severe housing-cost burdens.'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'A statistical finding of 64% exceeds the mathematical majority threshold (>50%), making the majoritarian quantifier "Most" fully warranted.',
        whyCorrect: 'Option A accurately employs "Most" to describe a 64% majority.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Most dual-income households in the metropolitan area experienced severe housing-cost burdens.', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'A negligible minority of metropolitan dual-income households experienced severe housing-cost burdens.', whyWrong: 'Directly contradicts the 64% majority.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Every dual-income household in the metropolitan area experienced severe housing-cost burdens.', whyWrong: 'Overextends a 64% finding into an absolute universal claim (100%).' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Few dual-income households in the metropolitan area experienced severe housing-cost burdens.', whyWrong: 'Falsely categorizes a clear majority as "Few".' }
        ]
      }
    },
    {
      questionNumber: 74,
      id: 'ch5-q74',
      difficulty: 'Hard',
      skillTag: 'Diction - Epistemic Association vs Causation',
      prompt: 'An epidemiological survey uncovered a strong statistical correlation between ultra-processed dietary intake and late-onset metabolic syndrome, though researchers could not rule out sedentary lifestyle habits. Which statement maintains academic rigor?',
      options: [
        'The survey indicates a significant association between ultra-processed food consumption and metabolic syndrome.',
        'The survey definitively proves that ultra-processed foods cause metabolic syndrome.',
        'The survey demonstrates that ultra-processed diets invariably trigger metabolic syndrome in all adults.',
        'The survey establishes beyond doubt that sedentary habits have no bearing on metabolic syndrome.'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'When confounding lifestyle variables cannot be experimentally ruled out, epidemiological data warrants claims of statistical "association", never unmediated direct causation.',
        whyCorrect: 'Option A rigorously confines the assertion to a "significant association".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'The survey indicates a significant association between ultra-processed food consumption and metabolic syndrome.', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'The survey definitively proves that ultra-processed foods cause metabolic syndrome.', whyWrong: 'Falsely claims proven causation from correlational data.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'The survey demonstrates that ultra-processed diets invariably trigger metabolic syndrome in all adults.', whyWrong: 'Unsubstantiated absolute universal claims ("invariably", "all").' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'The survey establishes beyond doubt that sedentary habits have no bearing on metabolic syndrome.', whyWrong: 'Confounding variables were explicitly present.' }
        ]
      }
    },
    {
      questionNumber: 75,
      id: 'ch5-q75',
      difficulty: 'Hard',
      skillTag: 'Diction - Domain-Specific Precision',
      prompt: 'The pharmaceutical chemist sought a synthetic catalyst that would ___ the rate of the enantioselective reaction without being consumed during the process.',
      options: ['accelerate', 'agitate', 'provoke', 'exasperate'],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'In chemical kinetics, catalysts increase or "accelerate" reaction rates. "Agitate", "provoke", and "exasperate" are colloquial or psychological terms unsuited to physical chemistry.',
        whyCorrect: 'Option A uses the precise kinetic verb "accelerate".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'accelerate', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'agitate', whyWrong: 'Refers to physical stirring or emotional disturbance.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'provoke', whyWrong: 'Connotes inciting an emotional or behavioral reaction.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'exasperate', whyWrong: 'Means to irritate or frustrate intensely.' }
        ]
      }
    },
    {
      questionNumber: 76,
      id: 'ch5-q76',
      difficulty: 'Elite',
      skillTag: 'Diction - Metrological Accuracy vs Precision',
      prompt: 'A newly developed mass spectrometer produced readings of 142.001 g/mol, 142.002 g/mol, and 142.001 g/mol across three consecutive trials. However, the certified standard reference mass of the peptide was known to be 156.450 g/mol. In the calibration report, the instrument was correctly characterized as:',
      options: [
        'highly precise but inaccurate',
        'highly accurate but imprecise',
        'both accurate and precise',
        'neither precise nor reproducible'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'In metrology, precision denotes the closeness of agreement among repeated measurements (tight variance within 0.001 g/mol), while accuracy denotes proximity to the true reference value (off by ~14.4 g/mol).',
        whyCorrect: 'Option A accurately applies the scientific distinction: high repeatability (precise) paired with large systematic error (inaccurate).',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'highly precise but inaccurate', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'highly accurate but imprecise', whyWrong: 'Inverts the formal definitions of accuracy and precision.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'both accurate and precise', whyWrong: 'The readings deviate severely from the true value.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'neither precise nor reproducible', whyWrong: 'The readings were exceptionally reproducible across trials.' }
        ]
      }
    },
    {
      questionNumber: 77,
      id: 'ch5-q77',
      difficulty: 'Elite',
      skillTag: 'Diction - Hierarchy of Evidentiary Verbs',
      prompt: 'Rank the following empirical claims from weakest evidentiary strength to strongest: (1) The archaeological stratum demonstrates ceramic trade. (2) The archaeological stratum intimates ceramic trade. (3) The archaeological stratum proves ceramic trade.',
      options: ['(2) < (1) < (3)', '(1) < (2) < (3)', '(3) < (1) < (2)', '(2) < (3) < (1)'],
      correctAnswer: 0,
      explanation: {
        coreReasoning: '"Intimates" is a tentative suggestion (weakest), "demonstrates" is robust empirical evidence (intermediate), and "proves" is absolute deductive certainty (strongest).',
        whyCorrect: 'Option A correctly orders the verbs along the epistemic gradient: Intimates → Demonstrates → Proves.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: '(2) < (1) < (3)', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: '(1) < (2) < (3)', whyWrong: 'Falsely places "demonstrates" as weaker than "intimates".' },
          { optionIndex: 2, optionLabel: 'C', optionText: '(3) < (1) < (2)', whyWrong: 'Inverts the entire hierarchy.' },
          { optionIndex: 3, optionLabel: 'D', optionText: '(2) < (3) < (1)', whyWrong: 'Falsely ranks "demonstrates" above "proves".' }
        ]
      }
    },
    {
      questionNumber: 78,
      id: 'ch5-q78',
      difficulty: 'Elite',
      skillTag: 'Diction - Low-Frequency Quantifier Calibration',
      prompt: 'In a clinical trial evaluating an experimental monoclonal antibody, 14 out of 100 participants experienced transient cutaneous rash. Which summary of the side-effect profile is factually inaccurate?',
      options: [
        'Most participants exhibited cutaneous symptoms.',
        'A minority of participants exhibited cutaneous symptoms.',
        'Some participants exhibited cutaneous symptoms.',
        'Cutaneous symptoms were documented in a small subset of the cohort.'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'A rate of 14% represents a clear minority (<50%). Stating that "Most" participants experienced the rash is objectively false and scientifically misleading.',
        whyCorrect: 'Option A is the inaccurate summary because "Most" requires a strict numerical majority (>50%).',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Most participants exhibited cutaneous symptoms.', whyWrong: 'Correct answer (inaccurate summary).' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'A minority of participants exhibited cutaneous symptoms.', whyWrong: 'Factually accurate (14% is a minority).' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Some participants exhibited cutaneous symptoms.', whyWrong: 'Factually accurate (14% represents some patients).' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Cutaneous symptoms were documented in a small subset of the cohort.', whyWrong: 'Factually accurate description of 14%.' }
        ]
      }
    },
    {
      questionNumber: 79,
      id: 'ch5-q79',
      difficulty: 'Elite',
      skillTag: 'Diction - Register Balance vs Bureaucratic Inflation',
      prompt: 'Which revision maintains a scholarly register while eliminating pretentious pseudo-intellectual jargon?',
      options: [
        'The geophysicists deployed high-precision seismometers to monitor tectonic displacement.',
        'The geophysicists endeavored to effectuate an operational methodology with a view toward ascertaining tectonic shifts.',
        'The geophysicists checked out tectonic shifts with some cool new instruments.',
        'The geophysicists utilized advanced technological instrumentation for the purpose of displacement ascertainment.'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Option A strikes the perfect balance of scholarly precision: concrete technical nouns ("high-precision seismometers", "tectonic displacement") governed by clean, active transitive verbs ("deployed", "to monitor").',
        whyCorrect: 'Option A avoids both street slang and bloated nominalized periphrasis.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'The geophysicists deployed high-precision seismometers to monitor tectonic displacement.', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'The geophysicists endeavored to effectuate an operational methodology with a view toward ascertaining tectonic shifts.', whyWrong: 'Aggravated bureaucratic jargon and nominalization.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'The geophysicists checked out tectonic shifts with some cool new instruments.', whyWrong: 'Inappropriately colloquial and juvenile.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'The geophysicists utilized advanced technological instrumentation for the purpose of displacement ascertainment.', whyWrong: 'Pompous circumlocution.' }
        ]
      }
    },
    {
      questionNumber: 80,
      id: 'ch5-q80',
      difficulty: 'Elite',
      skillTag: 'Diction - Econometric Nuance & Causal Restraint',
      prompt: 'Econometric analysis showed that urban micro-grant programs coincided with a 12% rise in small business formation, though commercial zoning reforms were enacted during the same quarter. Which assertion is most defensible for peer review?',
      options: [
        'The micro-grant program was positively associated with an increase in enterprise formation.',
        'The micro-grant program directly caused the 12% increase in enterprise formation.',
        'The micro-grant program will invariably expand enterprise formation across all economies.',
        'The micro-grant program proves that commercial zoning reforms are ineffective.'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Because concurrent zoning reforms were enacted simultaneously, an unconfounded causal link cannot be claimed. Asserting a positive statistical "association" represents the only methodologically defensible stance.',
        whyCorrect: 'Option A limits the claim strictly to empirical association.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'The micro-grant program was positively associated with an increase in enterprise formation.', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'The micro-grant program directly caused the 12% increase in enterprise formation.', whyWrong: 'Ignores simultaneous zoning confounding variable.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'The micro-grant program will invariably expand enterprise formation across all economies.', whyWrong: 'Unsubstantiated absolute universal extrapolation.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'The micro-grant program proves that commercial zoning reforms are ineffective.', whyWrong: 'Illogical and ungrounded deduction.' }
        ]
      }
    }
  ]
};

export const EXERCISE_BLOCK_9: WritingExerciseBlock = {
  blockNumber: 9,
  title: 'Block 9 Exercises: Sentence Combining & Rhetorical Synthesis',
  description: '10 Questions (Questions 81–90) testing periodic sentence design, clausal subordination prominence, active voice clarity, and multi-clause synthesis.',
  questions: [
    {
      questionNumber: 81,
      id: 'ch5-q81',
      difficulty: 'Intermediate',
      skillTag: 'Emphasis - Causal Subordination Prominence',
      prompt: 'Which structural arrangement places maximum rhetorical emphasis on the geopolitical instability of global semiconductor supply chains?',
      options: [
        'Because geopolitical instability disrupted overseas semiconductor supply chains, international automotive conglomerates curtailed vehicle production schedules.',
        'International automotive conglomerates curtailed vehicle production schedules because geopolitical instability disrupted overseas semiconductor supply chains.',
        'International automotive conglomerates curtailed vehicle production schedules, and geopolitical instability disrupted overseas semiconductor supply chains.',
        'Vehicle production schedules were curtailed by international automotive conglomerates, for geopolitical instability had disrupted overseas semiconductor supply chains.'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Placing the causal dependent clause ("Because geopolitical instability disrupted...") in the prominent sentence-initial position forces the reader to encounter the geopolitical catalyst as the primary thematic context.',
        whyCorrect: 'Option A leads with the causal catalyst in an introductory dependent clause.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Because geopolitical instability disrupted overseas semiconductor supply chains, international automotive conglomerates curtailed vehicle production schedules.', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'International automotive conglomerates curtailed vehicle production schedules because geopolitical instability disrupted overseas semiconductor supply chains.', whyWrong: 'Puts the primary spotlight on corporate production cuts rather than the geopolitical catalyst.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'International automotive conglomerates curtailed vehicle production schedules, and geopolitical instability disrupted overseas semiconductor supply chains.', whyWrong: 'Coordinating conjunction "and" flattens the cause-and-effect hierarchy into equal statements.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Vehicle production schedules were curtailed by international automotive conglomerates, for geopolitical instability had disrupted overseas semiconductor supply chains.', whyWrong: 'Passive voice opening that buries the causal trigger in a terminal coordinate clause.' }
        ]
      }
    },
    {
      questionNumber: 82,
      id: 'ch5-q82',
      difficulty: 'Intermediate',
      skillTag: 'Emphasis - Active Agency in Paleontology',
      prompt: 'Which revision utilizes active voice to place primary rhetorical focus on the paleontological expedition team?',
      options: [
        'The paleontological expedition team excavated the fossilized theropod cranium from the Cretaceous stratum.',
        'The fossilized theropod cranium was excavated from the Cretaceous stratum by the paleontological expedition team.',
        'Excavation of the fossilized theropod cranium from the Cretaceous stratum was conducted by the paleontological expedition team.',
        'From the Cretaceous stratum, the fossilized theropod cranium underwent excavation by the paleontological expedition team.'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Active voice positions the human actor ("The paleontological expedition team") directly in the grammatical subject slot performing the finite transitive action ("excavated").',
        whyCorrect: 'Option A directly links the human actor to the verb.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'The paleontological expedition team excavated the fossilized theropod cranium from the Cretaceous stratum.', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'The fossilized theropod cranium was excavated from the Cretaceous stratum by the paleontological expedition team.', whyWrong: 'Passive voice focusing on the cranium.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Excavation of the fossilized theropod cranium from the Cretaceous stratum was conducted by the paleontological expedition team.', whyWrong: 'Nominalized passive construction.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'From the Cretaceous stratum, the fossilized theropod cranium underwent excavation by the paleontological expedition team.', whyWrong: 'Sluggish periphrastic passive.' }
        ]
      }
    },
    {
      questionNumber: 83,
      id: 'ch5-q83',
      difficulty: 'Hard',
      skillTag: 'Emphasis - Subordinating Background Descriptive Detail',
      prompt: 'Statements to combine: (1) The European Central Bank deployed emergency bond-purchasing liquidity facilities. (2) These facilities were originally drafted during the sovereign debt crisis. Which revision best subordinates the historical drafting background to highlight the emergency deployment?',
      options: [
        'The European Central Bank deployed emergency bond-purchasing liquidity facilities, which were originally drafted during the sovereign debt crisis.',
        'Emergency bond-purchasing liquidity facilities were originally drafted during the sovereign debt crisis, and the European Central Bank deployed them.',
        'Because emergency bond-purchasing liquidity facilities were drafted during the sovereign debt crisis, the European Central Bank deployed them.',
        'The emergency bond-purchasing liquidity facilities, which the European Central Bank deployed, were originally drafted during the sovereign debt crisis.'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Placing the deployment in the independent clause ("The European Central Bank deployed...") establishes it as the core claim, while relegating the historical origin to a nonrestrictive relative clause ("which were originally drafted...").',
        whyCorrect: 'Option A keeps the main institutional action in the independent clause.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'The European Central Bank deployed emergency bond-purchasing liquidity facilities, which were originally drafted during the sovereign debt crisis.', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Emergency bond-purchasing liquidity facilities were originally drafted during the sovereign debt crisis, and the European Central Bank deployed them.', whyWrong: 'Flat coordination giving equal syntactic weight to background history.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Because emergency bond-purchasing liquidity facilities were drafted during the sovereign debt crisis, the European Central Bank deployed them.', whyWrong: 'Invents a false causal claim (drafting them did not cause their deployment).' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'The emergency bond-purchasing liquidity facilities, which the European Central Bank deployed, were originally drafted during the sovereign debt crisis.', whyWrong: 'Inverts the hierarchy, making the historical origin the main clause.' }
        ]
      }
    },
    {
      questionNumber: 84,
      id: 'ch5-q84',
      difficulty: 'Hard',
      skillTag: 'Emphasis - Contextual Justification for Passive Voice',
      prompt: 'In which scientific context is passive voice stylistically and rhetorically superior to active voice?',
      options: [
        'When the experimental procedure, physical specimen, or universal natural law is the primary subject of inquiry and the specific human operator is irrelevant.',
        'When the laboratory technician wants to hide an error from the principal investigator.',
        'When writing short narrative fiction to accelerate pacing.',
        'When attempting to avoid all transitive action verbs in a research manuscript.'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'In technical research writing, passive voice is standard when describing standardized laboratory protocols (e.g., "The solution was titrated to pH 7.0"), because the physical object/procedure is universal and the individual operator is incidental.',
        whyCorrect: 'Option A correctly articulates the formal epistemological justification for passive voice.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'When the experimental procedure, physical specimen, or universal natural law is the primary subject of inquiry and the specific human operator is irrelevant.', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'When the laboratory technician wants to hide an error from the principal investigator.', whyWrong: 'Ethical avoidance is not a valid stylistic principle.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'When writing short narrative fiction to accelerate pacing.', whyWrong: 'Fiction generally avoids passive voice to maintain dramatic momentum.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'When attempting to avoid all transitive action verbs in a research manuscript.', whyWrong: 'Arbitrary and incorrect grammatical objective.' }
        ]
      }
    },
    {
      questionNumber: 85,
      id: 'ch5-q85',
      difficulty: 'Hard',
      skillTag: 'Emphasis - Periodic Sentence Suspense & Climax',
      prompt: 'Which sentence exemplifies a periodic structure that withholds its core main clause until the end for climactic impact?',
      options: [
        'After braving subzero Antarctic blizzard winds, navigating deep glacial crevasses, and enduring weeks of radio silence, the expedition team finally reached the South Pole.',
        'The expedition team finally reached the South Pole after braving subzero Antarctic blizzard winds, navigating deep glacial crevasses, and enduring weeks of radio silence.',
        'The expedition team reached the South Pole, and they braved subzero Antarctic winds along with glacial crevasses.',
        'Reaching the South Pole was achieved by the expedition team, who braved subzero winds and glacial crevasses.'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'A periodic sentence opens with a series of dependent modifying phrases and suspends the main independent clause ("the expedition team finally reached the South Pole") until the grammatical terminal position.',
        whyCorrect: 'Option A places the full triple participial series first, withholding the main subject-verb resolution until the final clause.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'After braving subzero Antarctic blizzard winds, navigating deep glacial crevasses, and enduring weeks of radio silence, the expedition team finally reached the South Pole.', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'The expedition team finally reached the South Pole after braving subzero Antarctic blizzard winds...', whyWrong: 'Cumulative (loose) sentence that delivers the main clause immediately.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'The expedition team reached the South Pole, and they braved subzero Antarctic winds...', whyWrong: 'Compound sentence with flat coordination.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Reaching the South Pole was achieved by the expedition team...', whyWrong: 'Passive construction with trailing relative clause.' }
        ]
      }
    },
    {
      questionNumber: 86,
      id: 'ch5-q86',
      difficulty: 'Elite',
      skillTag: 'Emphasis - Appositive Synthesis for Conciseness',
      prompt: 'Combine: "Ada Lovelace was a nineteenth-century mathematician. She wrote the first algorithm intended for Charles Babbage’s mechanical computer, the Analytical Engine. She is recognized today as the world’s first computer programmer." Which choice produces the most powerful single-sentence synthesis?',
      options: [
        'Ada Lovelace, a nineteenth-century mathematician who wrote the first algorithm for Charles Babbage’s Analytical Engine, is recognized today as the world’s first computer programmer.',
        'Ada Lovelace was a nineteenth-century mathematician, and she wrote the first algorithm for Babbage’s Analytical Engine, and she is recognized today as the world’s first computer programmer.',
        'Being a nineteenth-century mathematician, Ada Lovelace wrote an algorithm for Babbage’s Analytical Engine, which makes her recognized as the first programmer.',
        'Recognized today as the world’s first computer programmer, Ada Lovelace was a mathematician who wrote an algorithm for Babbage’s mechanical computer.'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Embedding the historical identity and algorithmic work in an appositive with a restrictive relative clause ("a nineteenth-century mathematician who wrote...") makes her enduring historical legacy ("is recognized today...") the climactic main predicate.',
        whyCorrect: 'Option A integrates all biographical facts cleanly into an appositive modifier and unified main clause.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Ada Lovelace, a nineteenth-century mathematician who wrote the first algorithm for Charles Babbage’s Analytical Engine, is recognized today as the world’s first computer programmer.', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Ada Lovelace was a nineteenth-century mathematician, and she wrote... and she is recognized...', whyWrong: 'Repetitive coordination with "and".' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Being a nineteenth-century mathematician, Ada Lovelace wrote... which makes her...', whyWrong: 'Weak participial opener ("Being") and vague relative clause.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Recognized today as the world’s first computer programmer, Ada Lovelace was a mathematician...', whyWrong: 'Reduces her identity to a weak linking verb predicate ("was a mathematician").' }
        ]
      }
    },
    {
      questionNumber: 87,
      id: 'ch5-q87',
      difficulty: 'Elite',
      skillTag: 'Emphasis - Correlative Inversion Syntactic Drama',
      prompt: 'Which revision achieves the greatest rhetorical elevation and syntactic force?',
      options: [
        'Not only did the James Webb Space Telescope detect primordial galaxies forming just 300 million years after the Big Bang, but it also revealed unexpected chemical enrichment in the early interstellar medium.',
        'The James Webb Space Telescope detected primordial galaxies forming 300 million years after the Big Bang, and it also revealed chemical enrichment in the early interstellar medium.',
        'Besides detecting primordial galaxies forming 300 million years after the Big Bang, unexpected chemical enrichment was revealed by the James Webb Space Telescope.',
        'Detecting primordial galaxies 300 million years after the Big Bang, the James Webb Space Telescope also found chemical enrichment.'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Leading with the negative correlative adverb "Not only did..." triggers dramatic subject-auxiliary inversion, pairing two monumental astrophysical discoveries in balanced correlative prominence.',
        whyCorrect: 'Option A executes elevated correlative inversion with impeccable syntax.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Not only did the James Webb Space Telescope detect primordial galaxies forming just 300 million years after the Big Bang, but it also revealed unexpected chemical enrichment in the early interstellar medium.', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'The James Webb Space Telescope detected primordial galaxies... and it also revealed...', whyWrong: 'Flat coordinate sentence lacking rhetorical drive.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Besides detecting primordial galaxies..., unexpected chemical enrichment was revealed...', whyWrong: 'Dangling modifier attached to "enrichment".' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Detecting primordial galaxies..., the James Webb Space Telescope also found...', whyWrong: 'Informal and lacks correlative balance.' }
        ]
      }
    },
    {
      questionNumber: 88,
      id: 'ch5-q88',
      difficulty: 'Hard',
      skillTag: 'Emphasis - Participial Integration of Evidence',
      prompt: 'Combine: "Glaciologists drilled two-kilometer ice cores in central Greenland. They extracted trapped atmospheric gases. These gases provided a 100,000-year record of paleoclimatic carbon dioxide fluctuations."',
      options: [
        'By drilling two-kilometer ice cores in central Greenland and extracting trapped atmospheric gases, glaciologists obtained a 100,000-year record of paleoclimatic carbon dioxide fluctuations.',
        'Glaciologists drilled two-kilometer ice cores in Greenland, they extracted trapped atmospheric gases, obtaining a 100,000-year paleoclimatic record.',
        'Two-kilometer ice cores were drilled by glaciologists in Greenland to extract gases, which these gave a 100,000-year record of carbon dioxide fluctuations.',
        'Extracting trapped atmospheric gases from two-kilometer ice cores in Greenland, a 100,000-year record of paleoclimatic carbon dioxide fluctuations was obtained.'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Opening with the instrumental prepositional phrase ("By drilling... and extracting...") attaches the procedural actions directly to the subject "glaciologists", making the scientific finding the primary independent clause.',
        whyCorrect: 'Option A combines all three propositions cleanly without comma splices or dangling modifiers.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'By drilling two-kilometer ice cores in central Greenland and extracting trapped atmospheric gases, glaciologists obtained a 100,000-year record of paleoclimatic carbon dioxide fluctuations.', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Glaciologists drilled two-kilometer ice cores in Greenland, they extracted trapped atmospheric gases...', whyWrong: 'Comma splice error.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Two-kilometer ice cores were drilled... which these gave a 100,000-year record...', whyWrong: 'Ungrammatical relative connector ("which these") and passive voice.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Extracting trapped atmospheric gases..., a 100,000-year record... was obtained.', whyWrong: 'Dangling modifier: the record did not extract gases.' }
        ]
      }
    },
    {
      questionNumber: 89,
      id: 'ch5-q89',
      difficulty: 'Elite',
      skillTag: 'Emphasis - Concession Subordination for Academic Debate',
      prompt: 'Combine: "Classical economic models assume rational decision-making. Behavioral economists have demonstrated that cognitive biases systematically skew consumer valuation during market transactions."',
      options: [
        'Although classical economic models assume rational decision-making, behavioral economists have demonstrated that cognitive biases systematically skew consumer valuation during market transactions.',
        'Classical economic models assume rational decision-making, and behavioral economists demonstrated cognitive biases in consumer valuation.',
        'Because classical economic models assume rational decision-making, behavioral economists showed cognitive biases skew valuation.',
        'Behavioral economists showed cognitive biases skew valuation, but classical models assume rational decision-making.'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Subordinating the classical baseline with "Although" frames the behavioral economics discovery as a major empirical correction to foundational theory.',
        whyCorrect: 'Option A captures the nuanced theoretical tension through an introductory concessive subordinate clause.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Although classical economic models assume rational decision-making, behavioral economists have demonstrated that cognitive biases systematically skew consumer valuation during market transactions.', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Classical economic models assume rational decision-making, and behavioral economists demonstrated...', whyWrong: 'Flat coordination fails to indicate academic dispute.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Because classical economic models assume rational decision-making, behavioral economists showed...', whyWrong: 'Illogical causal connection.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Behavioral economists showed cognitive biases skew valuation, but classical models assume rational decision-making.', whyWrong: 'Reverses the argumentative emphasis, giving the final word to the outdated model.' }
        ]
      }
    },
    {
      questionNumber: 90,
      id: 'ch5-q90',
      difficulty: 'Elite',
      skillTag: 'Emphasis - Dense 4-Proposition Architectural Synthesis',
      prompt: 'Select the revision that synthesizes all four propositions with maximum syntactic compression and rhetorical power: (1) Deep-sea hydrothermal vents emit mineral-rich fluids. (2) These vents support chemosynthetic ecosystems. (3) These ecosystems thrive in complete darkness. (4) They provide clues about the origin of terrestrial life.',
      options: [
        'Emitting mineral-rich fluids in complete darkness, deep-sea hydrothermal vents sustain chemosynthetic ecosystems that offer profound clues about the origins of terrestrial life.',
        'Deep-sea hydrothermal vents emit mineral-rich fluids, and they support chemosynthetic ecosystems, and they thrive in darkness, providing clues about terrestrial life origins.',
        'Hydrothermal vents emit fluids in darkness, chemosynthetic ecosystems thrive there, giving clues about terrestrial life origins.',
        'Because deep-sea hydrothermal vents emit mineral fluids, chemosynthetic ecosystems thrive in darkness, which clues about terrestrial life origins are provided.'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Option A condenses the physical mechanics into an introductory participial phrase ("Emitting mineral-rich fluids in complete darkness..."), anchors the main clause to "deep-sea hydrothermal vents sustain...", and links the evolutionary significance via a restrictive relative clause ("that offer profound clues...").',
        whyCorrect: 'Option A integrates all four propositions into an elegant, grammatically unified sentence.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Emitting mineral-rich fluids in complete darkness, deep-sea hydrothermal vents sustain chemosynthetic ecosystems that offer profound clues about the origins of terrestrial life.', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Deep-sea hydrothermal vents emit mineral-rich fluids, and they support... and they thrive...', whyWrong: 'Repetitive coordination with multiple instances of "and they".' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Hydrothermal vents emit fluids in darkness, chemosynthetic ecosystems thrive there...', whyWrong: 'Comma splice error.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Because deep-sea hydrothermal vents emit mineral fluids... which clues about terrestrial life origins are provided.', whyWrong: 'Ungrammatical relative construction.' }
        ]
      }
    }
  ]
};

export const EXERCISE_BLOCK_10: WritingExerciseBlock = {
  blockNumber: 10,
  title: 'Block 10 Exercises: The 5-Layer Master Diagnostic & Comprehensive Editing',
  description: '10 Questions (Questions 91–100) testing holistic multi-rule editing, multi-error prioritization, structural repair hierarchy, and advanced rhetorical execution.',
  questions: [
    {
      questionNumber: 91,
      id: 'ch5-q91',
      difficulty: 'Elite',
      skillTag: 'Master Diagnostic - Layer 1 Structural Integrity',
      prompt: 'Diagnose the sentence: "Although the neuroscientists isolated the dopaminergic receptor pathway using optogenetic stimulation." What is the fundamental grammatical violation?',
      options: [
        'It is a dependent clause fragment lacking an independent main clause.',
        'It is a comma splice joined without coordinating conjunctions.',
        'It contains a dangling participial modifier.',
        'The verb "isolated" fails to agree with the subject "neuroscientists".'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The sentence opens with the subordinating conjunction "Although", creating a dependent clause. Because there is no accompanying independent clause with a main subject and verb, the construction is a sentence fragment.',
        whyCorrect: 'Option A correctly identifies the subordinate clause fragment.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'It is a dependent clause fragment lacking an independent main clause.', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'It is a comma splice joined without coordinating conjunctions.', whyWrong: 'There are no coordinate clauses or commas.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'It contains a dangling participial modifier.', whyWrong: 'The verb is a finite past tense verb, not a dangling participle.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'The verb "isolated" fails to agree with the subject "neuroscientists".', whyWrong: 'Past tense verbs have regular agreement.' }
        ]
      }
    },
    {
      questionNumber: 92,
      id: 'ch5-q92',
      difficulty: 'Elite',
      skillTag: 'Master Diagnostic - Layer 2 Agreement with Intervening Modifiers',
      prompt: 'The catalog of rare illuminated manuscripts, along with several fifteenth-century incunabula from the monastic scriptorium, ___ scheduled for digital preservation by the university library.',
      options: ['is', 'are', 'were', 'being'],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The simple subject is the singular noun "catalog". The parenthetical phrase "along with several fifteenth-century incunabula..." is an intervening prepositional addition that does not affect the grammatical number of the subject. A singular verb ("is") is required.',
        whyCorrect: 'Option A provides the singular verb "is" in agreement with "catalog".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'is', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'are', whyWrong: 'Plural verb falsely agreeing with "incunabula".' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'were', whyWrong: 'Plural past tense verb.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'being', whyWrong: 'Participle creating a sentence fragment.' }
        ]
      }
    },
    {
      questionNumber: 93,
      id: 'ch5-q93',
      difficulty: 'Elite',
      skillTag: 'Master Diagnostic - Layer 3 Modifier Alignment',
      prompt: 'Synthesized in a high-pressure chemical reactor, ___ investigated the structural integrity of the diamond-like carbon coating.',
      options: [
        'the materials scientists',
        'the diamond-like carbon coating was thoroughly tested by materials scientists, who',
        'a series of hydrostatic stress tests was conducted by researchers on',
        'the novel synthetic coating allowed materials scientists to'
      ],
      correctAnswer: 3,
      explanation: {
        coreReasoning: 'The introductory modifier "Synthesized in a high-pressure chemical reactor" describes the physical coating. The immediate subject of the main clause must be the coating itself ("the novel synthetic coating"), which then allows researchers to perform further actions.',
        whyCorrect: 'Option D attaches the introductory descriptive modifier directly to "the novel synthetic coating".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'the materials scientists', whyWrong: 'Dangling modifier: scientists were not synthesized in a chemical reactor.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'the diamond-like carbon coating was thoroughly tested by materials scientists, who', whyWrong: 'Leaves the sentence incomplete as a relative clause fragment.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'a series of hydrostatic stress tests was conducted by researchers on', whyWrong: 'Dangling modifier: stress tests were not synthesized in a reactor.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'the novel synthetic coating allowed materials scientists to', whyWrong: 'Correct answer.' }
        ]
      }
    },
    {
      questionNumber: 94,
      id: 'ch5-q94',
      difficulty: 'Elite',
      skillTag: 'Master Diagnostic - Layer 4 Parallelism & Symmetry',
      prompt: 'The urban transit strategic plan proposes expanding light rail lines, ___ bus rapid transit corridors, and implementing dynamic tolling on congested highways.',
      options: [
        'modernizing',
        'to modernize',
        'the modernization of',
        'having modernized'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The sentence features a parallel series of gerund direct objects: (1) expanding light rail lines, (2) modernizing bus rapid transit corridors, and (3) implementing dynamic tolling.',
        whyCorrect: 'Option A provides the parallel gerund "modernizing".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'modernizing', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'to modernize', whyWrong: 'Infinitive breaks gerund series.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'the modernization of', whyWrong: 'Noun phrase breaks gerund series.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'having modernized', whyWrong: 'Perfect participle breaks simple gerund series.' }
        ]
      }
    },
    {
      questionNumber: 95,
      id: 'ch5-q95',
      difficulty: 'Elite',
      skillTag: 'Master Diagnostic - Layer 5 Concision & Diction',
      prompt: 'The diplomatic delegation made an attempt to reach a consensus regarding the international boundaries in order to prevent future prospective conflicts. Which revision achieves optimal concision and precision?',
      options: [
        'The diplomatic delegation attempted to reach a consensus on international boundaries to prevent future conflicts.',
        'The diplomatic delegation made an attempt to reach a consensus regarding international boundaries in order to prevent future prospective conflicts.',
        'An attempt was made by the diplomatic delegation to reach a consensus about international boundaries so as to prevent future conflicts in advance.',
        'The diplomatic delegation attempted reaching a consensus concerning international boundaries with a view toward preventing future prospective conflicts.'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Option A eliminates nominalizations ("made an attempt" → "attempted"), replaces wordy connectors ("in order to" → "to"), and excises the pleonastic tautology ("future prospective conflicts" → "future conflicts").',
        whyCorrect: 'Option A removes all deadwood while preserving precise diplomatic meaning.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'The diplomatic delegation attempted to reach a consensus on international boundaries to prevent future conflicts.', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'The diplomatic delegation made an attempt to reach a consensus regarding international boundaries in order to prevent future prospective conflicts.', whyWrong: 'Retains nominalization, wordy connector, and tautology "future prospective".' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'An attempt was made by the diplomatic delegation to reach a consensus about international boundaries so as to prevent future conflicts in advance.', whyWrong: 'Passive voice and redundant phrase "in advance".' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'The diplomatic delegation attempted reaching a consensus concerning international boundaries with a view toward preventing future prospective conflicts.', whyWrong: 'Sluggish prepositional phrase and tautology.' }
        ]
      }
    },
    {
      questionNumber: 96,
      id: 'ch5-q96',
      difficulty: 'Elite',
      skillTag: 'Master Diagnostic - Multi-Error Diagnostic Prioritization',
      prompt: 'Original: "Running across the tundra, the caribou herd was spotted by the wildlife biologists, whom immediately recorded their GPS coordinates." When revising this sentence, what is the highest-priority structural correction?',
      options: [
        'Correcting the relative pronoun case error from "whom" to "who" so that the relative clause has a valid grammatical subject.',
        'Changing "their" to "its" to agree with the caribou herd.',
        'Replacing "spotted" with "observed" for higher register.',
        'Inserting a semicolon after "biologists".'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'In the relative clause "...whom immediately recorded their GPS coordinates", "whom" occupies the grammatical subject slot governing the finite verb "recorded". A subject case error ("whom" for "who") is a fundamental Layer 2/3 structural violation that must be resolved first.',
        whyCorrect: 'Option A identifies the fatal pronoun case error in the subordinate subject position.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Correcting the relative pronoun case error from "whom" to "who" so that the relative clause has a valid grammatical subject.', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Changing "their" to "its" to agree with the caribou herd.', whyWrong: '"Their" correctly refers to the wildlife biologists (plural).', },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Replacing "spotted" with "observed" for higher register.', whyWrong: 'Stylistic preference of lower priority than grammatical case.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Inserting a semicolon after "biologists".', whyWrong: 'Would ungrammatically detach the relative clause.' }
        ]
      }
    },
    {
      questionNumber: 97,
      id: 'ch5-q97',
      difficulty: 'Elite',
      skillTag: 'Master Diagnostic - Inverted Syntax Subject-Verb Agreement',
      prompt: 'Buried deep beneath the geothermal basalt layers of the volcanic caldera ___ several high-temperature hydrothermal vents rich in metallic sulfides.',
      options: ['lie', 'lies', 'is lying', 'to lie'],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'In this inverted sentence, the prepositional phrase "Buried deep beneath..." precedes the verb. The true grammatical subject appears after the verb: "several high-temperature hydrothermal vents" (plural). A plural verb ("lie") is required.',
        whyCorrect: 'Option A correctly matches the plural inverted subject "vents" with the plural verb "lie".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'lie', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'lies', whyWrong: 'Singular verb falsely agreeing with singular "caldera".' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'is lying', whyWrong: 'Singular progressive verb.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'to lie', whyWrong: 'Infinitive creating a sentence fragment.' }
        ]
      }
    },
    {
      questionNumber: 98,
      id: 'ch5-q98',
      difficulty: 'Elite',
      skillTag: 'Master Diagnostic - Complex Relative Clause Punctuation & Scope',
      prompt: 'The international treaty on atmospheric chlorofluorocarbons ___ which was ratified by all member states in 1987 ___ led to a measurable recovery in the stratospheric ozone layer.',
      options: [
        ', / ,',
        'no punctuation / ,',
        ', / no punctuation',
        '; / ;'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The clause "which was ratified by all member states in 1987" is a nonessential relative clause beginning with "which". Nonessential parenthetical clauses must be enclosed in a matching pair of commas.',
        whyCorrect: 'Option A provides the symmetrical pair of commas enclosing the nonessential clause.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: ', / ,', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'no punctuation / ,', whyWrong: 'Omits the opening comma, creating asymmetrical punctuation.' },
          { optionIndex: 2, optionLabel: 'C', optionText: ', / no punctuation', whyWrong: 'Omits the closing comma before the main verb "led".' },
          { optionIndex: 3, optionLabel: 'D', optionText: '; / ;', whyWrong: 'Semicolons cannot enclose mid-sentence nonessential modifiers.' }
        ]
      }
    },
    {
      questionNumber: 99,
      id: 'ch5-q99',
      difficulty: 'Elite',
      skillTag: 'Master Diagnostic - Complete 5-Layer Holistic Proofreading',
      prompt: 'In diagnosing a draft containing multiple structural fragments, agreement faults, and dangling modifiers, an editor must select the revision that corrects all three errors while preserving the original meaning. Which revision meets these requirements?',
      options: [
        'After completing an exhaustive metallurgical audit of the historic suspension bridge, civil engineers recommended replacing the corroded steel support cables to ensure structural stability.',
        'After completing an exhaustive metallurgical audit of the historic suspension bridge, the corroded steel support cables were recommended for replacement by civil engineers.',
        'Civil engineers completed an exhaustive metallurgical audit of the bridge, they recommended replacing the corroded steel support cables in order to effectuate stability.',
        'Having completed an exhaustive audit of the bridge, recommendations for replacing cables were made by civil engineers because it was unstable.'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Option A attaches the introductory participial modifier "After completing..." directly to the human agents ("civil engineers"), maintains active voice, uses concise phrasing ("to ensure structural stability"), and has zero boundary or agreement flaws.',
        whyCorrect: 'Option A passes all five diagnostic editing layers with distinction.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'After completing an exhaustive metallurgical audit of the historic suspension bridge, civil engineers recommended replacing the corroded steel support cables to ensure structural stability.', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'After completing an exhaustive metallurgical audit of the historic suspension bridge, the corroded steel support cables were recommended for replacement by civil engineers.', whyWrong: 'Dangling modifier: cables did not complete the metallurgical audit.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Civil engineers completed an exhaustive metallurgical audit of the bridge, they recommended replacing the corroded steel support cables in order to effectuate stability.', whyWrong: 'Fatal comma splice between two independent clauses.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Having completed an exhaustive audit of the bridge, recommendations for replacing cables were made by civil engineers because it was unstable.', whyWrong: 'Dangling modifier attached to "recommendations" and ambiguous pronoun "it".' }
        ]
      }
    },
    {
      questionNumber: 100,
      id: 'ch5-q100',
      difficulty: 'Elite',
      skillTag: 'Master Diagnostic - The Capstone SAT Writing Synthesis',
      prompt: 'Which revision achieves the pinnacle of SAT Writing mastery: absolute grammatical perfection, pristine clausal hierarchy, flawless precision, and maximum syntactic economy?',
      options: [
        'By combining high-resolution cryo-electron microscopy with advanced computational modeling, structural biologists elucidated the atomic architecture of the viral capsid, revealing key binding sites for therapeutic neutralizing antibodies.',
        'Structural biologists combined cryo-electron microscopy and computational modeling, they elucidated the viral capsid’s atomic architecture, which this revealed binding sites for neutralizing antibodies.',
        'Combining cryo-electron microscopy with computational modeling, the atomic architecture of the viral capsid was elucidated by structural biologists, revealing binding sites.',
        'Structural biologists made a determination of the atomic architecture of the viral capsid through microscopy and modeling in order to effectuate the identification of antibody binding sites.'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Option A opens with a disciplined instrumental prepositional phrase ("By combining..."), anchors the main clause with an active transitive verb and subject ("structural biologists elucidated..."), and cleanly concludes with a terminal participial result phrase (", revealing key binding sites..."). It contains zero wordiness, zero modifier errors, and zero punctuation flaws.',
        whyCorrect: 'Option A represents the gold standard of clear, elegant, high-impact scholarly SAT prose.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'By combining high-resolution cryo-electron microscopy with advanced computational modeling, structural biologists elucidated the atomic architecture of the viral capsid, revealing key binding sites for therapeutic neutralizing antibodies.', whyWrong: 'Correct answer.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Structural biologists combined cryo-electron microscopy and computational modeling, they elucidated the viral capsid’s atomic architecture, which this revealed binding sites for neutralizing antibodies.', whyWrong: 'Contains a comma splice and ungrammatical pronoun fusion "which this".' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Combining cryo-electron microscopy with computational modeling, the atomic architecture of the viral capsid was elucidated by structural biologists, revealing binding sites.', whyWrong: 'Dangling modifier: atomic architecture did not combine microscopy and modeling.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Structural biologists made a determination of the atomic architecture of the viral capsid through microscopy and modeling in order to effectuate the identification of antibody binding sites.', whyWrong: 'Bloated with nominalizations ("made a determination", "effectuate the identification") and sluggish circumlocution.' }
        ]
      }
    }
  ]
};
