import { WritingExerciseBlock } from './satWritingTypes';

export const EXERCISE_BLOCK_4: WritingExerciseBlock = {
  blockNumber: 4,
  title: 'Block 4 Exercises: Complex Modifier Control & Parallel Symmetry',
  description: '13 Elite Questions on introductory modifiers, dangling modifiers, squinting adverbs, correlative parallelism, elliptical comparisons, and structural symmetry.',
  questions: [
    {
      questionNumber: 40,
      id: 'ch7-b4-q1',
      difficulty: 'Medium',
      skillTag: 'Introductory Modifier Anchoring',
      prompt: 'Although paleoclimatologists analyzed core sediment samples across three field seasons, **the lake formation timeline was revised.** Which revision correctly anchors the introductory dependent clause to a logical subject?',
      options: [
        'Although paleoclimatologists analyzed core sediment samples across three field seasons, the lake formation timeline was revised.',
        'Although paleoclimatologists analyzed core sediment samples across three field seasons, the paleoclimatologist revised the lake formation timeline.',
        'Although paleoclimatologists analyzed core sediment samples across three field seasons, a revision of the lake formation timeline occurred.',
        'Although paleoclimatologists analyzed core sediment samples across three field seasons, lake formation timelines were subject to revision.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'When an introductory clause describes an active analysis, the subject in the main clause must be the agent who conducted the analysis ("the paleoclimatologist").',
        whyCorrect: 'Choice B correctly places "the paleoclimatologist" immediately following the comma as the main clause subject.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: '...the lake formation timeline was revised.', whyWrong: 'Passive construction omitting agent.' },
          { optionIndex: 1, optionLabel: 'B', optionText: '...the paleoclimatologist revised the lake formation timeline.', whyWrong: 'Correct. Anchors active subject.' },
          { optionIndex: 2, optionLabel: 'C', optionText: '...a revision of the lake formation timeline occurred.', whyWrong: 'Abstract noun "revision" cannot analyze sediment.' },
          { optionIndex: 3, optionLabel: 'D', optionText: '...lake formation timelines were subject to revision.', whyWrong: 'Passive general claim.' }
        ]
      }
    },
    {
      questionNumber: 41,
      id: 'ch7-b4-q2',
      difficulty: 'Medium',
      skillTag: 'Correlative Parallelism',
      prompt: 'In evaluating the structural performance of the new carbon composite, the engineers noted that it **not only reduced total structural weight but also increased torsional rigidity.** Which choice maintains proper correlative parallel symmetry?',
      options: [
        'not only reduced total structural weight but also increased torsional rigidity.',
        'not only reduced total structural weight but also torsional rigidity was increased.',
        'reduced not only total structural weight but also increasing torsional rigidity.',
        'not only was reducing total structural weight but also increased torsional rigidity.'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Correlative conjunctions ("not only... but also...") must be followed by parallel grammatical structures. Here, "not only [verb phrase 1] but also [verb phrase 2]" pairs "reduced..." with "increased...".',
        whyCorrect: 'Choice A pairs past-tense verb phrases "reduced..." and "increased...".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'not only reduced total structural weight but also increased torsional rigidity.', whyWrong: 'Correct. Parallel verb structures.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'not only reduced... but also torsional rigidity was increased.', whyWrong: 'Mismatches active verb with passive clause.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'reduced not only... but also increasing...', whyWrong: 'Mismatches noun phrase with gerund.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'not only was reducing... but also increased...', whyWrong: 'Mismatches progressive with simple past.' }
        ]
      }
    },
    {
      questionNumber: 42,
      id: 'ch7-b4-q3',
      difficulty: 'Hard',
      skillTag: 'Limiting Adverb Placement',
      prompt: 'In revising a sentence about spectroscopic analysis, a writer places the limiting adverb *only* to specify that the NIRSpec instrument processes infrared wavelengths (and no other light frequencies). Which sentence positions *only* correctly?',
      options: [
        'The NIRSpec instrument only disperses infrared wavelengths, capturing faint celestial spectra.',
        'The NIRSpec instrument disperses only infrared wavelengths, capturing faint celestial spectra.',
        'Only the NIRSpec instrument disperses infrared wavelengths, capturing faint celestial spectra.',
        'The NIRSpec instrument disperses infrared wavelengths only when capturing faint celestial spectra.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'A limiting adverb should immediately precede the word or phrase it modifies. Placing "only" before "infrared wavelengths" restricts the wavelength type specifically.',
        whyCorrect: 'Choice B correctly places "only" directly before "infrared wavelengths".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: '...only disperses infrared wavelengths...', whyWrong: 'Placing before verb implies it does nothing else but disperse.' },
          { optionIndex: 1, optionLabel: 'B', optionText: '...disperses only infrared wavelengths...', whyWrong: 'Correct. Restricts modify target to infrared wavelengths.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Only the NIRSpec instrument disperses...', whyWrong: 'Restricts instrument, claiming no other instrument disperses infrared.' },
          { optionIndex: 3, optionLabel: 'D', optionText: '...only when capturing faint celestial spectra.', whyWrong: 'Restricts timing condition.' }
        ]
      }
    },
    {
      questionNumber: 43,
      id: 'ch7-b4-q4',
      difficulty: 'Hard',
      skillTag: 'Prepositional Gerund Parallelism',
      prompt: 'Paleoclimatologists reconstruct ancient atmospheric greenhouse gas concentrations **by extracting ice cores, measuring trapped gas bubbles, and to analyze stable isotope ratios.** Which revision establishes consistent parallel structure across the series of gerunds?',
      options: [
        'by extracting ice cores, measuring trapped gas bubbles, and to analyze stable isotope ratios.',
        'by extracting ice cores, measuring trapped gas bubbles, and analyzing stable isotope ratios.',
        'by extracting ice cores, when measuring trapped gas bubbles, and analyzing stable isotope ratios.',
        'by extracting ice cores, to measure trapped gas bubbles, and analyzing stable isotope ratios.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Items in a prepositional series following "by" must maintain parallel grammatical form: "extracting..., measuring..., and analyzing...".',
        whyCorrect: 'Choice B uses gerund forms ("extracting", "measuring", "analyzing") consistently.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: '...by extracting..., measuring..., and to analyze...', whyWrong: 'Breaks parallel structure with infinitive "to analyze".' },
          { optionIndex: 1, optionLabel: 'B', optionText: '...by extracting..., measuring..., and analyzing...', whyWrong: 'Correct. Parallel gerund series.' },
          { optionIndex: 2, optionLabel: 'C', optionText: '...by extracting..., when measuring..., and analyzing...', whyWrong: 'Inserts conjunction "when" into series.' },
          { optionIndex: 3, optionLabel: 'D', optionText: '...by extracting..., to measure..., and analyzing...', whyWrong: 'Inserts infinitive "to measure".' }
        ]
      }
    },
    {
      questionNumber: 44,
      id: 'ch7-b4-q5',
      difficulty: 'Hard',
      skillTag: 'Demonstrative Comparison Balance',
      prompt: 'The optical resolution achieved by the James Webb Space Telescope in the infrared spectrum is far greater than **ground-based observatories.** Which revision corrects the illogically asymmetric comparison?',
      options: [
        'ground-based observatories.',
        'that achieved by ground-based observatories.',
        'ground-based observatories operate.',
        'when using ground-based observatories.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Compares "the optical resolution" (singular concept) with "ground-based observatories" (physical objects). Must use "that achieved by..." to compare resolution with resolution.',
        whyCorrect: 'Choice B inserts singular demonstrative "that" to compare optical resolution with optical resolution.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: '...ground-based observatories.', whyWrong: 'Illogically compares resolution with physical observatories.' },
          { optionIndex: 1, optionLabel: 'B', optionText: '...that achieved by ground-based observatories.', whyWrong: 'Correct. Matches resolution to resolution.' },
          { optionIndex: 2, optionLabel: 'C', optionText: '...ground-based observatories operate.', whyWrong: 'Mismatches resolution with verb clause.' },
          { optionIndex: 3, optionLabel: 'D', optionText: '...when using ground-based observatories.', whyWrong: 'Mismatches resolution with prepositional phrase.' }
        ]
      }
    },
    {
      questionNumber: 45,
      id: 'ch7-b4-q6',
      difficulty: 'Hard',
      skillTag: 'Subjunctive Mood Syntax',
      prompt: 'Institutional oversight protocols require that every principal investigator **submits/submit** raw experimental data to the central repository within 30 days. Which choice utilizes correct subjunctive mood syntax?',
      options: [
        'submits raw experimental data to the central repository within 30 days.',
        'submit raw experimental data to the central repository within 30 days.',
        'is submitting raw experimental data to the central repository within 30 days.',
        'has submitted raw experimental data to the central repository within 30 days.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Verbs expressing demand or requirement ("require that...") mandate the subjunctive mood, which uses the base form of the verb ("submit") regardless of subject number.',
        whyCorrect: 'Choice B uses base form "submit" required by the mandate clause.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'submits raw experimental data...', whyWrong: 'Uses indicative "submits" instead of subjunctive base form.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'submit raw experimental data...', whyWrong: 'Correct. Subjunctive base form.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'is submitting raw experimental data...', whyWrong: 'Uses progressive indicative.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'has submitted raw experimental data...', whyWrong: 'Uses perfect indicative.' }
        ]
      }
    },
    {
      questionNumber: 46,
      id: 'ch7-b4-q7',
      difficulty: 'Hard',
      skillTag: 'Inverted Subject-Verb Agreement',
      prompt: 'Among the stratified shale layers exposed by river canyon erosion **lies/lie three distinct fossil beds** dating to the Permian period. Which choice maintains proper subject-verb agreement?',
      options: [
        'lies three distinct fossil beds',
        'lie three distinct fossil beds',
        'is three distinct fossil beds',
        'has been three distinct fossil beds'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'In inverted sentence structures ("Among X lie Y"), the subject follows the verb. Here, the subject "three distinct fossil beds" is plural, requiring plural "lie".',
        whyCorrect: 'Choice B pairs plural verb "lie" with plural subject "beds".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'lies three distinct fossil beds', whyWrong: 'Uses singular verb "lies" with plural subject "beds".' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'lie three distinct fossil beds', whyWrong: 'Correct. Plural "lie" matches plural "beds".' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'is three distinct fossil beds', whyWrong: 'Uses singular verb "is" with plural subject.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'has been three distinct fossil beds', whyWrong: 'Uses singular verb "has been" with plural subject.' }
        ]
      }
    },
    {
      questionNumber: 47,
      id: 'ch7-b4-q8',
      difficulty: 'Elite',
      skillTag: 'Appositive Phrase Bounding',
      prompt: 'The Ashmolean Museum—**which was founded in Oxford in 1683 and houses Elias Ashmole\'s antiquities collection—inaugurated** a new exhibition space in 2024. Which punctuation choice properly bounds the nonrestrictive appositive relative clause?',
      options: [
        'which was founded in Oxford in 1683 and houses Elias Ashmole\'s antiquities collection—inaugurated',
        'which was founded in Oxford in 1683 and houses Elias Ashmole\'s antiquities collection, inaugurated',
        'which was founded in Oxford in 1683, and houses Elias Ashmole\'s antiquities collection inaugurated',
        'founded in Oxford in 1683 and housing Elias Ashmole\'s antiquities collection inaugurated'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Interrupting parenthetical phrases must be enclosed by matching punctuation marks (two em dashes or two commas). Because the clause opens with an em dash after "Ashmolean Museum—", it must close with an em dash before "inaugurated".',
        whyCorrect: 'Choice A maintains symmetrical em dash bounding.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: '...collection—inaugurated', whyWrong: 'Correct. Symmetrical em dash pair.' },
          { optionIndex: 1, optionLabel: 'B', optionText: '...collection, inaugurated', whyWrong: 'Mismatches opening em dash with closing comma.' },
          { optionIndex: 2, optionLabel: 'C', optionText: '...in 1683, and houses... collection inaugurated', whyWrong: 'Unbalanced comma and missing closing punctuation.' },
          { optionIndex: 3, optionLabel: 'D', optionText: '...collection inaugurated', whyWrong: 'Omits closing parenthetical punctuation entirely.' }
        ]
      }
    },
    {
      questionNumber: 48,
      id: 'ch7-b4-q9',
      difficulty: 'Elite',
      skillTag: 'Mid-Sentence Nonrestrictive Interruptions',
      prompt: 'In a monograph on structural biochemistry, a writer places a nonrestrictive relative clause inside the verb phrase. Which punctuation choice maintains clean syntactic flow?\n> **"The enzyme, which catalyzes lipid oxidation during cellular respiration, accelerates metabolic turnover."**',
      options: [
        'The enzyme, which catalyzes lipid oxidation during cellular respiration accelerates metabolic turnover.',
        'The enzyme, which catalyzes lipid oxidation during cellular respiration, accelerates metabolic turnover.',
        'The enzyme which catalyzes lipid oxidation during cellular respiration, accelerates metabolic turnover.',
        'The enzyme; which catalyzes lipid oxidation during cellular respiration; accelerates metabolic turnover.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'A nonrestrictive relative clause interrupting the subject and verb must be enclosed in paired commas.',
        whyCorrect: 'Choice B uses paired commas before "which" and after "respiration".',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: '...respiration accelerates...', whyWrong: 'Omits closing comma after nonrestrictive clause.' },
          { optionIndex: 1, optionLabel: 'B', optionText: '...respiration, accelerates...', whyWrong: 'Correct. Symmetrical comma pair.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'The enzyme which...', whyWrong: 'Omits opening comma before nonrestrictive clause.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'The enzyme; which...', whyWrong: 'Misuses semicolons to bound relative clause.' }
        ]
      }
    },
    {
      questionNumber: 49,
      id: 'ch7-b4-q10',
      difficulty: 'Elite',
      skillTag: 'Absolute Phrase Construction',
      prompt: 'In a research report on volcanic geology, the writer constructs an absolute phrase to modify the main clause: **"The seismometer data having been calibrated, the team projected eruption probability."** Which analysis correctly identifies the function of "The seismometer data having been calibrated"?',
      options: [
        'It functions as a dangling modifier modifying the verb "projected."',
        'It functions as a grammatically independent absolute phrase providing background context for the main clause.',
        'It creates a run-on sentence by joining two independent clauses without a conjunction.',
        'It contains a subject-verb agreement error with "data."'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'An absolute phrase consists of a noun ("seismometer data") plus a participle ("having been calibrated") and modifies the entire main clause without needing direct alignment to the main subject.',
        whyCorrect: 'Choice B accurately identifies the construction as a valid absolute phrase.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: '...dangling modifier...', whyWrong: 'Absolute phrases contain their own noun and cannot dangle.' },
          { optionIndex: 1, optionLabel: 'B', optionText: '...grammatically independent absolute phrase...', whyWrong: 'Correct. Accurately identifies absolute phrase.' },
          { optionIndex: 2, optionLabel: 'C', optionText: '...run-on sentence...', whyWrong: 'Participle phrase is not an independent clause.' },
          { optionIndex: 3, optionLabel: 'D', optionText: '...subject-verb agreement error...', whyWrong: 'Participles do not have tense-agreement inflection errors here.' }
        ]
      }
    },
    {
      questionNumber: 50,
      id: 'ch7-b4-q11',
      difficulty: 'Elite',
      skillTag: 'Comparative Category Match',
      prompt: 'In evaluating ancient metallurgy, an archaeologist writes: **"The tensile strength of forged bronze swords from the Aegean Bronze Age was vastly superior to that of contemporary cast copper weapons."** Which choice maintains proper comparative alignment?',
      options: [
        'to that of contemporary cast copper weapons.',
        'to contemporary cast copper weapons.',
        'compared with when using contemporary cast copper weapons.',
        'than contemporary cast copper weapons.'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Compares "The tensile strength" (singular concept) with "that of contemporary cast copper weapons". "That of" stands for "the tensile strength of".',
        whyCorrect: 'Choice A uses singular "that of" to maintain parallel comparison between tensile strength and tensile strength.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'to that of contemporary cast copper weapons.', whyWrong: 'Correct. Parallel comparison of tensile strength.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'to contemporary cast copper weapons.', whyWrong: 'Illogically compares tensile strength directly to physical weapons.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'compared with when using...', whyWrong: 'Wordy, indirect comparison.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'than contemporary cast copper weapons.', whyWrong: 'Illogically compares tensile strength to physical weapons.' }
        ]
      }
    },
    {
      questionNumber: 51,
      id: 'ch7-b4-q12',
      difficulty: 'Elite',
      skillTag: 'Passive Voice Dangling Modifier Repair',
      prompt: 'By applying intense thermal pressure to synthetic diamond anvil cells, **high-pressure mineral phases were synthesized by geophysicists.** Which revision repairs the dangling modifier by placing the active agent immediately after the comma?',
      options: [
        'high-pressure mineral phases were synthesized by geophysicists.',
        'geophysicists synthesized high-pressure mineral phases.',
        'a synthesis of high-pressure mineral phases was achieved.',
        'the formation of high-pressure mineral phases occurred.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The agent performing "By applying intense thermal pressure" must follow the comma. Placing "geophysicists" immediately after the comma fixes the dangling modifier.',
        whyCorrect: 'Choice B places active subject "geophysicists" directly after the modifier phrase.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: '...high-pressure mineral phases were synthesized...', whyWrong: 'Dangling modifier; mineral phases cannot apply pressure.' },
          { optionIndex: 1, optionLabel: 'B', optionText: '...geophysicists synthesized high-pressure mineral phases.', whyWrong: 'Correct. Active subject follows introductory phrase.' },
          { optionIndex: 2, optionLabel: 'C', optionText: '...a synthesis... was achieved.', whyWrong: 'Abstract noun "synthesis" cannot apply pressure.' },
          { optionIndex: 3, optionLabel: 'D', optionText: '...the formation... occurred.', whyWrong: 'Abstract noun "formation" cannot apply pressure.' }
        ]
      }
    },
    {
      questionNumber: 52,
      id: 'ch7-b4-q13',
      difficulty: 'Elite',
      skillTag: 'Asymmetrical List Correction',
      prompt: 'A grant proposal outlines three objectives: **"to digitize rare manuscripts, cataloging medieval codices, and to publish an open-access archival registry."** Which revision corrects the asymmetrical list to ensure complete parallel structure?',
      options: [
        'to digitize rare manuscripts, cataloging medieval codices, and to publish an open-access archival registry.',
        'to digitize rare manuscripts, to catalog medieval codices, and to publish an open-access archival registry.',
        'digitizing rare manuscripts, to catalog medieval codices, and publishing an open-access archival registry.',
        'to digitize rare manuscripts, cataloging medieval codices, and publication of an open-access archival registry.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'A parallel list of objectives following a colon or introduction must maintain consistent grammatical form across all items: "to digitize..., to catalog..., and to publish...".',
        whyCorrect: 'Choice B maintains consistent infinitive forms across all three list items.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: '...digitize..., cataloging..., and to publish...', whyWrong: 'Mixes gerund "cataloging" into infinitive list.' },
          { optionIndex: 1, optionLabel: 'B', optionText: '...to digitize..., to catalog..., and to publish...', whyWrong: 'Correct. Parallel infinitives across all 3 items.' },
          { optionIndex: 2, optionLabel: 'C', optionText: '...digitizing..., to catalog..., and publishing...', whyWrong: 'Mixes gerunds and infinitive.' },
          { optionIndex: 3, optionLabel: 'D', optionText: '...digitize..., cataloging..., and publication...', whyWrong: 'Mixes gerund, infinitive, and noun phrase.' }
        ]
      }
    }
  ]
};

export const EXERCISE_BLOCK_5: WritingExerciseBlock = {
  blockNumber: 5,
  title: 'Block 5 Exercises: Precision, Concision & Epistemic Modality',
  description: '13 Elite Questions on pleonastic redundancy, nominalization conversion, epistemic modality calibration, academic register, and scope-preserving sentence compression.',
  questions: [
    {
      questionNumber: 53,
      id: 'ch7-b5-q1',
      difficulty: 'Medium',
      skillTag: 'Pleonastic Redundancy Elimination',
      prompt: 'In a manuscript on urban planning, an author describes an **"annual symposium that takes place every year in October."** Which revision eliminates the pleonastic redundancy while preserving essential information?',
      options: [
        'annual symposium that takes place every year in October.',
        'annual symposium held in October.',
        'symposium taking place annually every year during October.',
        'symposium held once per year on an annual basis in October.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: '"Annual" means "occurring every year." Combining "annual" with "every year" creates pleonastic redundancy. "Annual symposium held in October" eliminates the duplicate phrase.',
        whyCorrect: 'Choice B removes "every year" while preserving "annual" and "October."',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: '...annual symposium that takes place every year...', whyWrong: 'Redundant "annual" and "every year."' },
          { optionIndex: 1, optionLabel: 'B', optionText: '...annual symposium held in October.', whyWrong: 'Correct. Eliminates redundancy.' },
          { optionIndex: 2, optionLabel: 'C', optionText: '...annually every year...', whyWrong: 'Redundant "annually" and "every year."' },
          { optionIndex: 3, optionLabel: 'D', optionText: '...once per year on an annual basis...', whyWrong: 'Quadruple redundancy.' }
        ]
      }
    },
    {
      questionNumber: 54,
      id: 'ch7-b5-q2',
      difficulty: 'Medium',
      skillTag: 'Nominalization to Active Verb Conversion',
      prompt: 'In revising a scientific abstract, an editor seeks to convert wordy nominalizations into concise active verbs:\nDraft: **"The committee conducted an investigation into the causes of the power outage."**\nWhich revision is most concise and active?',
      options: [
        'The committee conducted an investigation into the causes of the power outage.',
        'The committee investigated the causes of the power outage.',
        'An investigation was conducted by the committee regarding the causes of the power outage.',
        'The committee made an inquiry that investigated why the power outage occurred.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Replacing the noun phrase "conducted an investigation into" with the direct active verb "investigated" eliminates wordy nominalization.',
        whyCorrect: 'Choice B replaces nominalization with active verb "investigated."',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: '...conducted an investigation into...', whyWrong: 'Wordy nominalization.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'The committee investigated the causes of the power outage.', whyWrong: 'Correct. Active verb conversion.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'An investigation was conducted by...', whyWrong: 'Passive voice and nominalization.' },
          { optionIndex: 3, optionLabel: 'D', optionText: '...made an inquiry that investigated...', whyWrong: 'Redundant nominalization stack.' }
        ]
      }
    },
    {
      questionNumber: 55,
      id: 'ch7-b5-q3',
      difficulty: 'Hard',
      skillTag: 'Epistemic Modality Calibration',
      prompt: 'A passage states that **preliminary genetic sequencing indicates a probable divergence between two isolated populations of alpine salamanders.** Which answer choice improperly upgrades the epistemic certainty of this finding?',
      options: [
        'Genetic sequencing suggests a potential divergence between the two salamander populations.',
        'Genetic sequencing indicates that the two salamander populations likely diverged.',
        'Genetic sequencing indisputably proves that the two salamander populations diverged.',
        'Genetic sequencing points to a possible divergence between the salamander populations.'
      ],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'Preliminary data establishing "probable divergence" supports cautious modal terms ("suggests", "likely", "possible"). "Indisputably proves" upgrades tentative probability to absolute certainty.',
        whyCorrect: 'Choice C introduces unauthorized epistemic certainty ("indisputably proves").',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: '...suggests a potential divergence...', whyWrong: 'Preserves tentative modality.' },
          { optionIndex: 1, optionLabel: 'B', optionText: '...indicates... likely diverged.', whyWrong: 'Preserves tentative modality.' },
          { optionIndex: 2, optionLabel: 'C', optionText: '...indisputably proves that the two salamander populations diverged.', whyWrong: 'Correct to identify. Overclaims certainty.' },
          { optionIndex: 3, optionLabel: 'D', optionText: '...points to a possible divergence...', whyWrong: 'Preserves tentative modality.' }
        ]
      }
    },
    {
      questionNumber: 56,
      id: 'ch7-b5-q4',
      difficulty: 'Hard',
      skillTag: 'Academic Register & Tone',
      prompt: 'In a formal essay on cell biology, an author describes a stress-response protein: **"When subjected to extreme heat, the heat-shock protein turned out to be super resilient."** Which choice adjusts the tone to an appropriate academic register?',
      options: [
        'turned out to be super resilient.',
        'demonstrated remarkable structural stability.',
        'was super awesome at holding together.',
        'proved to be totally tough under fire.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Academic writing requires formal, precise register. "Demonstrated remarkable structural stability" replaces informal colloquialisms ("super resilient", "super awesome") with appropriate academic tone.',
        whyCorrect: 'Choice B establishes an appropriate formal academic register.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: '...super resilient.', whyWrong: 'Informal colloquial tone.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'demonstrated remarkable structural stability.', whyWrong: 'Correct. Formal academic register.' },
          { optionIndex: 2, optionLabel: 'C', optionText: '...super awesome...', whyWrong: 'Slang.' },
          { optionIndex: 3, optionLabel: 'D', optionText: '...totally tough under fire.', whyWrong: 'Informal cliché.' }
        ]
      }
    },
    {
      questionNumber: 57,
      id: 'ch7-b5-q5',
      difficulty: 'Hard',
      skillTag: 'Concision without Qualification Loss',
      prompt: 'In editing the sentence **"The archaeological discovery may potentially perhaps offer clues regarding ancient trade routes,"** how should an editor streamline the text without losing the necessary modal qualification?',
      options: [
        'The archaeological discovery will offer clues regarding ancient trade routes.',
        'The archaeological discovery may offer clues regarding ancient trade routes.',
        'The archaeological discovery offers clues regarding ancient trade routes.',
        'The archaeological discovery definitely offers clues regarding ancient trade routes.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: '"May potentially perhaps" stacks three modal qualifiers ("may", "potentially", "perhaps") expressing the same idea. Retaining a single modal ("may") eliminates redundancy while preserving possibility.',
        whyCorrect: 'Choice B eliminates modal stacking while retaining "may."',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: '...will offer clues...', whyWrong: 'Converts possibility to future certainty.' },
          { optionIndex: 1, optionLabel: 'B', optionText: '...may offer clues regarding ancient trade routes.', whyWrong: 'Correct. Concise and preserves modal qualification.' },
          { optionIndex: 2, optionLabel: 'C', optionText: '...offers clues...', whyWrong: 'Converts possibility to present fact.' },
          { optionIndex: 3, optionLabel: 'D', optionText: '...definitely offers clues...', whyWrong: 'Adds absolute certainty.' }
        ]
      }
    },
    {
      questionNumber: 58,
      id: 'ch7-b5-q6',
      difficulty: 'Hard',
      skillTag: 'Passive to Active Transformations',
      prompt: 'Which choice transforms the passive construction **"A detailed chemical analysis of the lunar regolith samples was performed by the planetary geologists"** into an active, concise sentence?',
      options: [
        'A detailed chemical analysis of the lunar regolith samples was performed by the planetary geologists.',
        'The planetary geologists performed a detailed chemical analysis of the lunar regolith samples.',
        'Planetary geologists analyzed the lunar regolith samples in chemical detail.',
        'Performing a chemical analysis of lunar regolith samples was done by planetary geologists.'
      ],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'Transforming passive voice into active voice requires making "Planetary geologists" the subject and replacing "performed a detailed chemical analysis of" with the concise active verb "analyzed... in chemical detail."',
        whyCorrect: 'Choice C is the most direct, active, and concise sentence.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: '...was performed by...', whyWrong: 'Original passive construction.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'The planetary geologists performed a detailed chemical analysis of...', whyWrong: 'Active, but retains nominalization "performed an analysis."' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Planetary geologists analyzed the lunar regolith samples in chemical detail.', whyWrong: 'Correct. Direct active verb and concise structure.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Performing a chemical analysis... was done by...', whyWrong: 'Clunky passive gerund construction.' }
        ]
      }
    },
    {
      questionNumber: 59,
      id: 'ch7-b5-q7',
      difficulty: 'Hard',
      skillTag: 'Wordy Prepositional Elimination',
      prompt: 'In revising the draft sentence **"In the event that the temperature falls below freezing, emergency heaters will ignite automatically,"** which choice replaces the wordy prepositional phrase with a concise subordinating conjunction?',
      options: [
        'In the event that the temperature falls below freezing, emergency heaters will ignite automatically.',
        'If the temperature falls below freezing, emergency heaters will ignite automatically.',
        'Under conditions characterized by the temperature falling below freezing, emergency heaters will ignite automatically.',
        'Due to the fact that the temperature falls below freezing, emergency heaters will ignite automatically.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The multi-word prepositional phrase "In the event that" can be replaced by the single subordinating conjunction "If" without any change in meaning.',
        whyCorrect: 'Choice B replaces wordy "In the event that" with concise "If."',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'In the event that...', whyWrong: 'Wordy prepositional phrase.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'If the temperature falls below freezing, emergency heaters will ignite automatically.', whyWrong: 'Correct. Replaces phrase with concise "If."' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Under conditions characterized by...', whyWrong: 'Extremely wordy.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Due to the fact that...', whyWrong: 'Wordy causal phrase that distorts conditionality.' }
        ]
      }
    },
    {
      questionNumber: 60,
      id: 'ch7-b5-q8',
      difficulty: 'Elite',
      skillTag: 'Tautology Removal',
      prompt: 'Which choice eliminates the tautological redundancy in the sentence: **"Historians studying the archives uncovered new innovations that had never been seen before in past history."**',
      options: [
        'Historians studying the archives uncovered new innovations that had never been seen before in past history.',
        'Historians studying the archives uncovered innovations that had never been seen before in past history.',
        'Historians studying the archives uncovered innovations previously unknown in the historical record.',
        'Historians studying the archives uncovered brand new innovations that were first introduced for the first time.'
      ],
      correctAnswer: 2,
      explanation: {
        coreReasoning: '"New innovations", "never before", and "past history" are three stacked tautologies. "Uncovered innovations previously unknown in the historical record" cleanly conveys the idea without word redundancy.',
        whyCorrect: 'Choice C eliminates all three tautological redundancies.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: '...new innovations... before in past history.', whyWrong: 'Contains three tautologies ("new innovations", "never before", "past history").' },
          { optionIndex: 1, optionLabel: 'B', optionText: '...innovations... in past history.', whyWrong: 'Retains "past history" tautology.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Historians studying the archives uncovered innovations previously unknown in the historical record.', whyWrong: 'Correct. Clean precision without tautology.' },
          { optionIndex: 3, optionLabel: 'D', optionText: '...brand new innovations... first introduced for the first time.', whyWrong: 'Multiple stacked tautologies.' }
        ]
      }
    },
    {
      questionNumber: 61,
      id: 'ch7-b5-q9',
      difficulty: 'Elite',
      skillTag: 'Scope-Preserving Sentence Compression',
      prompt: 'A writer seeks to compress the 32-word sentence **"Due to the circumstances that the regional survey revealed that the endangered endemic salamander population is restricted exclusively to high-altitude mountain streams, conservation policies must prioritize those specific aquatic habitats"** into a concise 14-word sentence without dropping any conditions. Which choice is best?',
      options: [
        'Because surveys show endangered salamanders inhabit only high-altitude mountain streams, conservation policies must prioritize these habitats.',
        'Endangered salamanders live in mountain streams, so conservation policies must prioritize aquatic habitats everywhere.',
        'High-altitude mountain streams are important for salamanders, requiring broad regional conservation policies.',
        'Surveys indicate that salamanders are endangered across all mountain and lowland stream habitats.'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Compressing the sentence without losing conditions requires retaining: 1) survey evidence, 2) endangered status, 3) restriction to high-altitude mountain streams, 4) prioritized policy focus on these habitats.',
        whyCorrect: 'Choice A compresses the 32-word draft into 14 words while preserving all 4 essential conditions.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Because surveys show endangered salamanders inhabit only high-altitude mountain streams, conservation policies must prioritize these habitats.', whyWrong: 'Correct. Preserves all conditions in concise form.' },
          { optionIndex: 1, optionLabel: 'B', optionText: '...aquatic habitats everywhere.', whyWrong: 'Expands scope from high-altitude streams to "everywhere."' },
          { optionIndex: 2, optionLabel: 'C', optionText: '...broad regional conservation policies.', whyWrong: 'Drops the specific stream restriction.' },
          { optionIndex: 3, optionLabel: 'D', optionText: '...across all mountain and lowland stream habitats.', whyWrong: 'Contradicts high-altitude restriction.' }
        ]
      }
    },
    {
      questionNumber: 62,
      id: 'ch7-b5-q10',
      difficulty: 'Elite',
      skillTag: 'Modality Ladder Matching',
      prompt: 'In a weather forecast report, meteorologists note that **atmospheric humidity and wind shear levels suggest a 70% probability of severe thunderstorm development.** Which choice matches the degree of modality on the probability ladder?',
      options: [
        'Severe thunderstorms will definitely develop across the region.',
        'Severe thunderstorms are likely to develop across the region.',
        'Severe thunderstorms might conceivably develop across the region.',
        'Severe thunderstorms have already developed across the region.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'A 70% numerical probability corresponds to "likely" on the epistemic modality ladder. "Will" (100%) is too strong, "might conceivably" (<30%) is too weak, and "have already developed" changes tense.',
        whyCorrect: 'Choice B correctly selects "likely" to match 70% probability.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: '...will definitely develop...', whyWrong: 'Overclaims certainty (100% vs 70%).' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Severe thunderstorms are likely to develop across the region.', whyWrong: 'Correct. "Likely" matches 70% probability.' },
          { optionIndex: 2, optionLabel: 'C', optionText: '...might conceivably develop...', whyWrong: 'Understates probability (<30%).' },
          { optionIndex: 3, optionLabel: 'D', optionText: '...have already developed...', whyWrong: 'Changes future forecast to past fact.' }
        ]
      }
    },
    {
      questionNumber: 63,
      id: 'ch7-b5-q11',
      difficulty: 'Elite',
      skillTag: 'Scientific Caution vs Overstatement',
      prompt: 'When summarizing a single observational study of deep-sea hydrothermal microbial mats, which sentence exemplifies appropriate scientific caution without wordiness?',
      options: [
        'The microbial mats prove conclusively that life exists throughout the entire universe.',
        'The discovery indicates a potential correlation between sulfur metabolism and extreme thermophilic adaptation in deep-sea environments.',
        'The microbial mats demonstrate beyond any doubt that all marine life relies on sulfur.',
        'The microbial mats may possibly perhaps be related in some way to ocean chemistry.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Appropriate scientific caution requires stating tentative findings ("indicates a potential correlation") bounded by context ("deep-sea environments") without overstatement or modal stacking.',
        whyCorrect: 'Choice B maintains precise scientific caution.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: '...prove conclusively that life exists throughout the entire universe.', whyWrong: 'Absurd overstatement.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'The discovery indicates a potential correlation between sulfur metabolism and extreme thermophilic adaptation in deep-sea environments.', whyWrong: 'Correct. Precise scientific caution.' },
          { optionIndex: 2, optionLabel: 'C', optionText: '...demonstrate beyond any doubt that all marine life relies on sulfur.', whyWrong: 'Universal overstatement.' },
          { optionIndex: 3, optionLabel: 'D', optionText: '...may possibly perhaps be related in some way...', whyWrong: 'Wordy modal stacking ("may possibly perhaps").' }
        ]
      }
    },
    {
      questionNumber: 64,
      id: 'ch7-b5-q12',
      difficulty: 'Elite',
      skillTag: 'Precision in Technical Terminology',
      prompt: 'In a genetics paper, an author describes a nucleotide base change in a coding exon: **"The substitution altered the codon sequence, resulting in a single amino acid replacement."** Which choice maintains technical precision?',
      options: [
        'The substitution altered the codon sequence, resulting in a single amino acid replacement.',
        'The substitution messed up the genetic code, making the protein weird.',
        'The substitution transformed the DNA into a completely different species.',
        'The substitution changed some chemical stuff in the cell.'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Technical precision requires using accurate molecular biology terminology ("codon sequence", "amino acid replacement") rather than vague or informal phrasing.',
        whyCorrect: 'Choice A uses precise technical domain terminology.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'The substitution altered the codon sequence, resulting in a single amino acid replacement.', whyWrong: 'Correct. Precise technical terminology.' },
          { optionIndex: 1, optionLabel: 'B', optionText: '...messed up... making the protein weird.', whyWrong: 'Informal slang.' },
          { optionIndex: 2, optionLabel: 'C', optionText: '...transformed the DNA into a completely different species.', whyWrong: 'Scientifically absurd.' },
          { optionIndex: 3, optionLabel: 'D', optionText: '...changed some chemical stuff...', whyWrong: 'Vague non-technical wording.' }
        ]
      }
    },
    {
      questionNumber: 65,
      id: 'ch7-b5-q13',
      difficulty: 'Elite',
      skillTag: 'Conciseness under Multiple Modifiers',
      prompt: 'An editor is streamlining a complex sentence: **"The extremely rapid and fast acceleration of the experimental vehicle was remarkably impressive to the watching observers."** Which choice eliminates all redundant modifiers?',
      options: [
        'The extremely rapid and fast acceleration of the experimental vehicle was remarkably impressive to the watching observers.',
        'The rapid acceleration of the experimental vehicle impressed observers.',
        'The fast and rapid acceleration of the vehicle impressed the watching observers.',
        'The vehicle\'s extremely rapid acceleration was impressive to those watching.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: '"Extremely rapid and fast", "remarkably impressive", and "watching observers" contain stacked redundancies ("rapid/fast", "watching/observers"). "The rapid acceleration of the experimental vehicle impressed observers" eliminates all modifier clutter.',
        whyCorrect: 'Choice B eliminates all redundant adjectives and adverbs while retaining core meaning.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: '...extremely rapid and fast... watching observers.', whyWrong: 'Stacked redundancies.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'The rapid acceleration of the experimental vehicle impressed observers.', whyWrong: 'Correct. Completely clean and concise.' },
          { optionIndex: 2, optionLabel: 'C', optionText: '...fast and rapid... watching observers.', whyWrong: 'Retains redundancies.' },
          { optionIndex: 3, optionLabel: 'D', optionText: '...extremely rapid... to those watching.', whyWrong: 'Retains wordiness.' }
        ]
      }
    }
  ]
};

export const EXERCISE_BLOCK_6: WritingExerciseBlock = {
  blockNumber: 6,
  title: 'Block 6 Exercises: Transitions & Discourse Flow',
  description: '13 Elite Questions on additive, adversative, causal, exemplification, and temporal transitions, as well as paragraph architecture and discourse insertion points.',
  questions: [
    {
      questionNumber: 66,
      id: 'ch7-b6-q1',
      difficulty: 'Medium',
      skillTag: 'Additive & Elaborative Transitions',
      prompt: 'The new solar array increased electrical output by 25 percent during peak sunlight hours. ___, the integrated battery storage unit allowed the facility to supply power throughout the night.',
      options: [
        'Furthermore',
        'However',
        'In contrast',
        'On the other hand'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The second sentence adds another positive performance benefit (nighttime power supply) to the first benefit (25% output increase). An additive transition like "Furthermore" is required.',
        whyCorrect: 'Choice A correctly signals additive elaboration.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Furthermore', whyWrong: 'Correct. Additive relationship.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'However', whyWrong: 'Signals contrast, but second sentence adds positive information.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'In contrast', whyWrong: 'Signals contrast.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'On the other hand', whyWrong: 'Signals contrast.' }
        ]
      }
    },
    {
      questionNumber: 67,
      id: 'ch7-b6-q2',
      difficulty: 'Medium',
      skillTag: 'Adversative & Concessive Transitions',
      prompt: 'Theoretical models predicted that the synthetic alloy would fracture under high torsional stress. ___, experimental testing demonstrated that the material absorbed significant kinetic energy without failing.',
      options: [
        'However',
        'Consequently',
        'For example',
        'Similarly'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Theoretical predictions (model predicted fracture) contradict experimental results (material absorbed energy without failing). An adversative transition ("However") is required.',
        whyCorrect: 'Choice A signals contrast between prediction and experimental outcome.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'However', whyWrong: 'Correct. Expresses contrast.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Consequently', whyWrong: 'Signals cause/effect.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'For example', whyWrong: 'Signals illustration.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Similarly', whyWrong: 'Signals similarity.' }
        ]
      }
    },
    {
      questionNumber: 68,
      id: 'ch7-b6-q3',
      difficulty: 'Hard',
      skillTag: 'Causal & Inferential Transitions',
      prompt: 'The paleoclimatological team identified an abrupt spike in atmospheric carbon isotope ratios in the sediment layer. ___, they concluded that a major volcanic episode had occurred during that geological epoch.',
      options: [
        'Consequently',
        'Nevertheless',
        'By contrast',
        'Meanwhile'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The team\'s conclusion (volcanic episode occurred) is a logical inference/result derived from the evidence (carbon isotope spike). A causal transition ("Consequently") is required.',
        whyCorrect: 'Choice A signals logical consequence derived from evidence.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Consequently', whyWrong: 'Correct. Causal inference.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Nevertheless', whyWrong: 'Signals concessive contrast.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'By contrast', whyWrong: 'Signals direct contrast.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Meanwhile', whyWrong: 'Signals simultaneous timing.' }
        ]
      }
    },
    {
      questionNumber: 69,
      id: 'ch7-b6-q4',
      difficulty: 'Hard',
      skillTag: 'Exemplification & Restatement Transitions',
      prompt: 'Many deep-sea organism species possess specialized physiological adaptations to survive under extreme hydrostatic pressure. ___, the amphipod *Hirondellea gigas* utilizes aluminum-based bio-armor to reinforce its exoskeleton at depths exceeding 10,000 meters.',
      options: [
        'Specifically',
        'Regardless',
        'Therefore',
        'In conclusion'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The second sentence provides a specific, detailed example (*Hirondellea gigas* bio-armor) illustrating the general claim about deep-sea adaptations made in the first sentence. "Specifically" or "For instance" is required.',
        whyCorrect: 'Choice A signals specific illustration.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Specifically', whyWrong: 'Correct. Signals specific exemplification.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Regardless', whyWrong: 'Signals dismissal.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Therefore', whyWrong: 'Signals result.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'In conclusion', whyWrong: 'Signals essay closure.' }
        ]
      }
    },
    {
      questionNumber: 70,
      id: 'ch7-b6-q5',
      difficulty: 'Hard',
      skillTag: 'Sequential & Temporal Transitions',
      prompt: 'In 1912, Alfred Wegener proposed the theory of continental drift based on fossil and coastline alignment. ___, decades passed before the discovery of seafloor spreading provided the plate tectonic mechanism needed to confirm his hypothesis.',
      options: [
        'Subsequently',
        'For example',
        'In other words',
        'As a result'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The passage outlines a chronological sequence of events: 1912 proposal followed by decades passing before seafloor spreading was discovered. A temporal transition ("Subsequently") is required.',
        whyCorrect: 'Choice A correctly marks temporal progression.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Subsequently', whyWrong: 'Correct. Temporal progression.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'For example', whyWrong: 'Signals illustration.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'In other words', whyWrong: 'Signals restatement.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'As a result', whyWrong: 'Implies 1912 proposal caused decades to pass.' }
        ]
      }
    },
    {
      questionNumber: 71,
      id: 'ch7-b6-q6',
      difficulty: 'Hard',
      skillTag: 'Punctuation of Conjunctive Adverbs',
      prompt: 'The sensor recorded a dramatic surge in ambient thermal radiation; **however, the secondary calibration monitor showed no change.** Which choice correctly punctuates the conjunctive adverb connecting two independent clauses?',
      options: [
        '; however, the secondary calibration monitor',
        ', however, the secondary calibration monitor',
        '; however the secondary calibration monitor',
        '. However the secondary calibration monitor,'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'When a conjunctive adverb ("however") connects two independent clauses, it must be preceded by a semicolon and followed by a comma: `IC; however, IC`.',
        whyCorrect: 'Choice A correctly uses a semicolon before "however" and a comma after it.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: '; however, the secondary calibration monitor', whyWrong: 'Correct. Proper semicolon/comma punctuation.' },
          { optionIndex: 1, optionLabel: 'B', optionText: ', however, the secondary calibration monitor', whyWrong: 'Creates a comma splice.' },
          { optionIndex: 2, optionLabel: 'C', optionText: '; however the secondary calibration monitor', whyWrong: 'Omits required comma after "however."' },
          { optionIndex: 3, optionLabel: 'D', optionText: '. However the secondary calibration monitor,', whyWrong: 'Omits required comma after "However."' }
        ]
      }
    },
    {
      questionNumber: 72,
      id: 'ch7-b6-q7',
      difficulty: 'Elite',
      skillTag: 'Discourse Flow & Paragraph Insertion Point',
      prompt: 'A writer is determining where to insert the sentence **"This geographic isolation enabled distinct speciation trajectories among island finches"** into a draft paragraph on Galápagos evolutionary biology:\n[1] The Galápagos archipelago emerged from volcanic eruptions millions of years ago. [2] The island clusters were separated by deep ocean channels that prevented frequent animal migration. [3] Charles Darwin documented these physical variations during his 1835 voyage aboard the HMS *Beagle*. [4]\nWhere does the sentence fit best?',
      options: [
        'After sentence 1',
        'After sentence 2',
        'After sentence 3',
        'Before sentence 1'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Sentence 2 describes the physical geographic isolation ("separated by deep ocean channels"). The inserted sentence explains the evolutionary result of "This geographic isolation" (enabled speciation), creating a direct logical link before Darwin\'s observations in sentence 3.',
        whyCorrect: 'Choice B places the sentence immediately after the mention of ocean channels preventing migration.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'After sentence 1', whyWrong: 'Premature before ocean channels preventing migration are described.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'After sentence 2', whyWrong: 'Correct. Directly follows description of geographic isolation.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'After sentence 3', whyWrong: 'Breaks sequence between Darwin\'s observation and documentation.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Before sentence 1', whyWrong: 'Placing before geological emergence lacks context.' }
        ]
      }
    },
    {
      questionNumber: 73,
      id: 'ch7-b6-q8',
      difficulty: 'Elite',
      skillTag: 'Contrastive Inversion',
      prompt: 'In macroeconomic analysis, a writer notes: **"High interest rates tend to suppress consumer borrowing and curb inflationary pressure. On the other hand, prolonged rate hikes risk slowing real economic growth and increasing unemployment."** Which transition best characterizes the relationship established by "On the other hand"?',
      options: [
        'Exemplification of interest rate benefits',
        'Counterbalancing contrast introducing a countervailing risk',
        'Chronological sequence of central bank meetings',
        'Direct mathematical proof of inflation'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: '"On the other hand" introduces a countervailing risk (slowing growth, unemployment) to counterbalance the initial benefit (curbing inflation).',
        whyCorrect: 'Choice B accurately describes counterbalancing contrast.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Exemplification...', whyWrong: 'It is a contrast, not an example.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Counterbalancing contrast introducing a countervailing risk', whyWrong: 'Correct. Accurately describes "On the other hand" function.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Chronological sequence...', whyWrong: 'Not a timeline.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Direct mathematical proof...', whyWrong: 'Not a mathematical proof.' }
        ]
      }
    },
    {
      questionNumber: 74,
      id: 'ch7-b6-q9',
      difficulty: 'Elite',
      skillTag: 'Concessive Acknowledgment',
      prompt: 'The renewable energy transition requires massive upfront capital investments in grid modernization. **Granted, long-term operational costs for wind and solar facilities are significantly lower than those for fossil fuel plants.** Which transition function is served by "Granted"?',
      options: [
        'It concedes a counterpoint before reasserting the primary thesis.',
        'It presents an absolute refutation of the previous sentence.',
        'It provides an unrelated historical anecdote.',
        'It concludes the entire research paper.'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: '"Granted" functions as a concessive transition, acknowledging a valid counterpoint (lower long-term operational costs) while maintaining the broader discussion on upfront investments.',
        whyCorrect: 'Choice A accurately describes concessive acknowledgment.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'It concedes a counterpoint before reasserting the primary thesis.', whyWrong: 'Correct. Concessive function.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'It presents an absolute refutation...', whyWrong: 'Conceding a point is not absolute refutation.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'It provides an unrelated historical anecdote.', whyWrong: 'Irrelevant.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'It concludes the entire research paper.', whyWrong: 'Does not mark essay closure.' }
        ]
      }
    },
    {
      questionNumber: 75,
      id: 'ch7-b6-q10',
      difficulty: 'Elite',
      skillTag: 'Causal Link Verification',
      prompt: 'A passage states: **"The urban canopy in the metropolitan area expanded by 15 percent over five years. As a result, average summertime surface temperatures in residential neighborhoods decreased by 1.8 degrees Celsius."** Which analysis verifies the logical link established by "As a result"?',
      options: [
        'The transition is invalid because tree canopy expansion cannot affect urban temperatures.',
        'The transition validly establishes that temperature reduction was a direct physical consequence of expanded urban tree canopy.',
        'The transition should be replaced with "In contrast" to show disagreement.',
        'The transition should be replaced with "For instance" to introduce a list of tree species.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Expanded tree canopy provides shade and evapotranspiration, which directly causes reduced surface temperatures. "As a result" validly establishes this cause-and-effect relationship.',
        whyCorrect: 'Choice B verifies the causal physical link.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: '...invalid because tree canopy cannot affect temperatures.', whyWrong: 'False; shade directly affects temperature.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'The transition validly establishes that temperature reduction was a direct physical consequence of expanded urban tree canopy.', whyWrong: 'Correct. Verifies valid causal link.' },
          { optionIndex: 2, optionLabel: 'C', optionText: '...replaced with "In contrast"...', whyWrong: 'Inappropriate contrast.' },
          { optionIndex: 3, optionLabel: 'D', optionText: '...replaced with "For instance"...', whyWrong: 'Inappropriate exemplification.' }
        ]
      }
    },
    {
      questionNumber: 76,
      id: 'ch7-b6-q11',
      difficulty: 'Elite',
      skillTag: 'Summarizing Transitions',
      prompt: 'The trial demonstrated high efficacy, minimal side effects, low manufacturing cost, and extended shelf stability. **In short, the experimental vaccine satisfies every primary criterion for global distribution.** Which choice best describes the function of "In short"?',
      options: [
        'It introduces a detailed statistical breakdown of clinical trial data.',
        'It synthesizes multiple preceding evidence points into a concise summary conclusion.',
        'It contradicts the previous trial findings.',
        'It shifts the topic from medical science to agricultural policy.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: '"In short" serves as a summarizing transition, synthesizing the four listed positive trial outcomes into an overarching conclusion regarding global distribution readiness.',
        whyCorrect: 'Choice B accurately identifies the summarizing function.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'It introduces a detailed statistical breakdown...', whyWrong: 'It summarizes rather than introducing new breakdowns.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'It synthesizes multiple preceding evidence points into a concise summary conclusion.', whyWrong: 'Correct. Summarizing function.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'It contradicts the previous trial findings.', whyWrong: 'False; it agrees with findings.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'It shifts the topic...', whyWrong: 'False.' }
        ]
      }
    },
    {
      questionNumber: 77,
      id: 'ch7-b6-q12',
      difficulty: 'Elite',
      skillTag: 'Transitional Phrasing in Complex Sentences',
      prompt: 'In light of recent ice sheet core discoveries, glaciologists have revised sea level rise projections upward. Which choice provides the most cohesive transitional phrase to open the sentence?',
      options: [
        'In light of recent ice sheet core discoveries,',
        'On account of the fact that glaciologists made discoveries in ice sheet cores,',
        'Due to the discovery situation surrounding ice sheet cores,',
        'Being that ice sheet cores were discovered recently,'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: '"In light of recent ice sheet core discoveries," is an elegant, concise prepositional transitional opener that connects evidence to the glaciologists\' revised projections.',
        whyCorrect: 'Choice A is the most concise, formal, and grammatically precise opener.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'In light of recent ice sheet core discoveries,', whyWrong: 'Correct. Elegant formal transitional opener.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'On account of the fact that...', whyWrong: 'Wordy "fact that" construction.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Due to the discovery situation surrounding...', whyWrong: 'Vague jargon ("discovery situation").' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Being that ice sheet cores were...', whyWrong: 'Informal "being that" construction.' }
        ]
      }
    },
    {
      questionNumber: 78,
      id: 'ch7-b6-q13',
      difficulty: 'Elite',
      skillTag: 'Transition Elimination',
      prompt: 'The deep-sea submersible descended into the Mariana Trench. The pressure hull resisted 1,100 atmospheres of hydrostatic force. What transition should be inserted between these two sentences?',
      options: [
        'However',
        'Consequently',
        'No transition is needed because the chronological progression between the two independent sentences is self-evident.',
        'For example'
      ],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'When two consecutive sentences express a clear, direct, self-evident narrative sequence without unexpected contrast or complex logical derivation, inserting an unnecessary transition creates wordy clutter. No transition is required.',
        whyCorrect: 'Choice C correctly recognizes that no transition is needed.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'However', whyWrong: 'Unneeded contrast.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Consequently', whyWrong: 'Over-punctuates simple narrative.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'No transition is needed because the chronological progression between the two independent sentences is self-evident.', whyWrong: 'Correct. Recognizes smooth self-evident flow.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'For example', whyWrong: 'Hull resistance is not an example of descent.' }
        ]
      }
    }
  ]
};
