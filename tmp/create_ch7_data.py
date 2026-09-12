import os

part2_content = '''import { WritingExerciseBlock } from './satWritingTypes';

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
      prompt: 'Although researchers analyzed core sediment samples across three field seasons, **the lake formation timeline was revised.** Which revision correctly anchors the introductory dependent clause to a logical subject?',
      options: [
        'Although researchers analyzed core sediment samples across three field seasons, the lake formation timeline was revised.',
        'Although researchers analyzed core sediment samples across three field seasons, the paleoclimatologist revised the lake formation timeline.',
        'Although researchers analyzed core sediment samples across three field seasons, a revision of the lake formation timeline occurred.',
        'Although researchers analyzed core sediment samples across three field seasons, lake formation timelines were subject to revision.'
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

print("Part 2 Block 4 ready...")
'''

with open('/tmp/build_p2.py', 'w') as f:
    f.write(part2_content)
print("Saved part2 helper script.")
