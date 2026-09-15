import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpenCheck, CheckCircle2, XCircle, Calculator, Sparkles, HelpCircle, BookOpen, ChevronRight, ArrowLeft, Target, ChevronDown, ChevronUp, X, Grid, Layers, Compass, TrendingUp, Sliders } from 'lucide-react';
import { SAT_QUESTIONS, SAT_FLASHCARDS, SAT_FORMULAS } from '../../data/satData';
import { SatQuestion, SatFlashcard } from '../../types';
import { SatReadingSectionExplorer } from '../reading/SatReadingSectionExplorer';
import { SatWritingSectionExplorer } from '../writing/SatWritingSectionExplorer';
import { SatMathSectionExplorer } from '../math/SatMathSectionExplorer';
import { SatMathStatisticsChapter } from '../math/SatMathStatisticsChapter';
import { SatDrillsHub } from '../satDrills/SatDrillsHub';
import { SatCalculatorView } from '../math/SatCalculatorView';
import { FormattedMathExplanation } from '../math/SatMathConceptRenderer';

interface SatPreparationHubProps {
  initialCategory?: 'reading' | 'writing' | 'math' | 'drills' | 'stats' | 'calculator';
  onBackToHome?: () => void;
  user?: { email: string; id: string } | null;
  onOpenAuth?: (message?: string) => void;
}

export type MainCategory = 'reading' | 'writing' | 'math' | 'drills' | 'stats' | 'calculator';

export const SatPreparationHub: React.FC<SatPreparationHubProps> = ({
  initialCategory = 'reading',
  onBackToHome,
  user,
  onOpenAuth,
}) => {
  // Guest Diagnostic Quiz State
  const [diagIndex, setDiagIndex] = useState(0);
  const [diagSelected, setDiagSelected] = useState<number | null>(null);
  const [diagSubmitted, setDiagSubmitted] = useState(false);
  const [diagScore, setDiagScore] = useState(0);
  const [diagReadingCorrect, setDiagReadingCorrect] = useState(0);
  const [diagWritingCorrect, setDiagWritingCorrect] = useState(0);
  const [diagMathCorrect, setDiagMathCorrect] = useState(0);
  const [diagCompleted, setDiagCompleted] = useState(false);
  const [explanationTab, setExplanationTab] = useState<'correct' | 'incorrect'>('correct');

  useEffect(() => {
    setExplanationTab('correct');
  }, [diagIndex]);

  const diagnosticQuestions = useMemo<SatQuestion[]>(() => {
    return [
      {
        id: 'diag-1',
        section: 'Reading',
        topic: 'Craft & Structure (Vocabulary in Context)',
        difficulty: 'Elite',
        question: `Select the word that best completes the passage with the most logical and precise meaning:

While many twentieth-century developmental biologists posited that cellular differentiation was an irreversible process, recent breakthroughs in somatic cell nuclear transfer and induced pluripotency have thoroughly _______ this dogma, demonstrating that specialized cells retain the latent genetic capacity to be reprogrammed back to an embryonic state.`,
        options: ['obfuscated', 'reinforced', 'subverted', 'cataloged'],
        correctIndex: 2,
        explanation: `• CORRECT ANSWER (C): "Subverted" means to undermine, overturn, or completely reverse an established dogma, theory, or structure. Because recent research has proven that cell differentiation is indeed reversible (by reprogramming mature cells back to pluripotency), the older biology doctrine has been completely overturned. Therefore, "subverted" is the most precise and contextually accurate choice.

• INCORRECT OPTION ANALYSIS:
- A) "obfuscated" is incorrect because it means to make something intentionally obscure or unclear. While the new scientific results make the old dogma obsolete, they clarify cellular potential rather than muddling it.
- B) "reinforced" is incorrect because it means to strengthen or support. This represents the opposite of the context, as the breakthroughs disprove rather than support the old theory.
- D) "cataloged" is incorrect because it means to compile or systematically list. Scientists do not merely catalog a belief that they have actively disproved and overturned.`
      },
      {
        id: 'diag-2',
        section: 'Reading',
        topic: 'Information & Ideas (Inference & Evidence)',
        difficulty: 'Elite',
        question: `Read the text below:

In a 2022 study of avian foraging behaviors, Dr. Elena Rostova monitored several populations of scrub jays (Aphelocoma coerulescens). Rostova observed that when scrub jays cached food while being watched by a competitor jay of dominant social status, they were significantly more likely to re-cache those items in private locations later. Crucially, this behavior was only exhibited by jays that had themselves previously stolen caches from other birds. Jays without a history of pilfering did not adjust their caching patterns when observed.

Which statement is best supported by Rostova's findings?`,
        options: [
          'Scrub jays cache food primarily to establish dominant social status over competitors.',
          'The propensity of a scrub jay to secure its cached food is influenced by its own past experiences with theft.',
          'Dominant scrub jays are physically incapable of locating food caches that were made in private locations.',
          'Experience with pilfering is a biological trait passed genetically rather than through behavioral modeling.'
        ],
        correctIndex: 1,
        explanation: `• CORRECT ANSWER (B): The study reveals that scrub jays only take precautions (re-caching food privately after being watched) if they have a personal history of stealing ("pilfering") from others. Birds without this history do not change their behavior. This directly supports the inference that a scrub jay's self-protective caching strategy is guided by its own past experiences as a thief, projecting its own behavior onto potential competitors.

• INCORRECT OPTION ANALYSIS:
- A) "cache food primarily to establish dominant social status" is incorrect because caching is described as a food-preservation and foraging behavior, not a status-seeking display.
- C) "physically incapable of locating private caches" is incorrect because the study doesn't discuss the sensory limitations of dominant jays; it focuses on the active caching decisions made by the hiding bird.
- D) "biological trait passed genetically" is incorrect because the passage focuses entirely on experiential factors (whether a bird has previously pilfered) rather than genetic transmission.`
      },
      {
        id: 'diag-3',
        section: 'Reading',
        topic: 'Information & Ideas (Inference)',
        difficulty: 'Elite',
        question: `Read the passage below:

Historian Koji Hayashi argues that the rapid spread of movable-type printing in fifteenth-century Europe was not merely a consequence of Johannes Gutenberg’s technological ingenuity, but was fundamentally dependent on the pre-existing, highly localized paper-making guilds of the Rhine Valley. Hayashi points out that without this regional surplus of rag-based paper, which was significantly cheaper than animal parchment, the physical volume of books required to make printing economically viable would have been impossible to sustain.

Based on the passage, how would Hayashi most likely respond to the assertion that Gutenberg’s printing press was the sole catalyst for the European print revolution?`,
        options: [
          'He would agree, emphasizing that Gutenberg designed his press to utilize local paper specifically.',
          'He would counter that Gutenberg’s press actually delayed the revolution because animal parchment was more durable than rag-based paper.',
          'He would contend that the technological innovation of the press itself was secondary to the cultural prestige of hand-copied parchment manuscripts.',
          'He would disagree, arguing that the success of the technology was contingent upon regional supply chains of cheap, abundant paper.'
        ],
        correctIndex: 3,
        explanation: `• CORRECT ANSWER (D): Hayashi's core thesis is that Gutenberg's technological achievement alone was not the sole catalyst; it depended "fundamentally" on the pre-existing, regional paper-making guilds that provided cheap, abundant rag-based paper. Without this paper supply chain, the massive printing volume would be economically unsustainable. Therefore, Hayashi would disagree with the assertion of a "sole catalyst" by citing the critical reliance on regional resource supply chains.

• INCORRECT OPTION ANALYSIS:
- A) "He would agree..." is incorrect because Hayashi's primary argument is to challenge the idea of Gutenberg's press being the sole catalyst.
- B) "Gutenberg's press actually delayed the revolution" is incorrect because the text suggests the press advanced printing, but was dependent on regional economic factors, not that it delayed it.
- C) "secondary to the cultural prestige of manuscripts" is incorrect because the passage discusses industrial, resource-based, and economic factors (cheap paper vs. parchment cost), not the social prestige of manuscripts.`
      },
      {
        id: 'diag-4',
        section: 'Reading',
        topic: 'Rhetorical Synthesis & Purpose',
        difficulty: 'Elite',
        question: `While studying the atmospheric compositions of gas giants, a researcher takes the following notes:
- Jupiter's upper atmosphere contains high concentrations of ammonia (NH₃) ice crystals.
- Saturn's clouds are similarly characterized by ammonia ice, but feature a deeper layer of ammonium hydrosulfide (NH₄SH).
- Voyager 2 data revealed that Uranus and Neptune, by contrast, possess atmospheres dominated by methane (CH₄) gas.
- The differences in atmospheric volatile compounds are primarily driven by core temperatures and distances from the Sun.

The researcher wants to contrast the atmospheric composition of the outer gas giants (Jupiter and Saturn) with that of the ice giants (Uranus and Neptune). Which choice most effectively uses information from the notes to achieve this goal?`,
        options: [
          "While Jupiter and Saturn's atmospheres are characterized by ammonia ice crystals, Uranus and Neptune's atmospheres are notably dominated by methane gas.",
          "Outer planets have atmospheres rich in volatile chemical compounds like ammonia and methane, which are affected by core temperatures.",
          "Ammonia is present on both Jupiter and Saturn, whereas ammonium hydrosulfide is located only on Saturn.",
          "The atmospheres of gas giants differ from those of ice giants because of their varying distances from the Sun and core temperatures."
        ],
        correctIndex: 0,
        explanation: `• CORRECT ANSWER (A): This choice directly and clearly fulfills the prompt's instruction by contrasting the atmospheric composition of the gas giants (Jupiter/Saturn are characterized by ammonia ice crystals) with that of the ice giants (Uranus/Neptune are dominated by methane gas). It highlights the specific chemical differences recorded in the notes.

• INCORRECT OPTION ANALYSIS:
- B) is incorrect because it describes a general similarity (all outer planets have rich volatile compounds) rather than establishing a clear, specific contrast between the two pairs of planets.
- C) is incorrect because it only contrasts Jupiter with Saturn, omitting Uranus and Neptune entirely.
- D) is incorrect because it states the general causal reasons for the atmospheric differences (core temperatures and distance from the Sun) but fails to state what the actual chemical compositions are, missing the core descriptive details.`
      },
      {
        id: 'diag-5',
        section: 'Writing',
        topic: 'Standard English Conventions (Punctuation & Clauses)',
        difficulty: 'Elite',
        question: `Which choice completes the text so that it conforms to the conventions of Standard English?

In her landmark 1974 monograph, linguist Dr. Sylvia Mercer argues that the syntactic development of pidgin languages is not a random blending of parent tongues; rather, it represents a rapid, highly structured crystallization of universal grammar principles _______ that is inherently governed by innate human cognitive structures.`,
        options: ['a process', 'a process—', 'is a process', 'process:'],
        correctIndex: 1,
        explanation: `• CORRECT ANSWER (B): The em dash (—) is utilized to set off a parenthetical or appositive modifier ("a process") that refers back to and defines the "rapid, highly structured crystallization of universal grammar principles." This appositive is immediately followed by a restrictive relative clause ("that is inherently governed..."), making the em dash the most syntactically sound option to separate the primary clause from its modifier.

• INCORRECT OPTION ANALYSIS:
- A) "a process" is incorrect because without punctuation, the noun phrase is run directly into the sentence, creating a major punctuation and syntax error (a run-on appositive structure).
- C) "is a process" is incorrect because adding the verb "is" creates a structural conflict with the main verb of the clause ("represents"), leading to a fragmented, ungrammatical double-predicate.
- D) "process:" is incorrect because it omits the indefinite article "a" and places an ungrammatical colon that breaks the structural link to the relative clause.`
      },
      {
        id: 'diag-6',
        section: 'Writing',
        topic: 'Standard English Conventions (Subject-Verb Agreement)',
        difficulty: 'Elite',
        question: `Which choice completes the text so that it conforms to the conventions of Standard English?

The expansion of the Roman Empire into the Iberian Peninsula, coupled with the systemic enforcement of administrative law, military garrisoning, and linguistic assimilation, _______ the foundational landscape for what would eventually evolve into the modern Romance languages.`,
        options: ['have established', 'establish', 'establishes', 'were establishing'],
        correctIndex: 2,
        explanation: `• CORRECT ANSWER (C): The subject of this sentence is the singular noun phrase "The expansion." The long parenthetical insertion set off by commas ("coupled with the systemic enforcement of administrative law, military garrisoning, and linguistic assimilation") is a prepositional modifier and does not alter the singular nature of the subject. Thus, we require the singular third-person verb "establishes."

• INCORRECT OPTION ANALYSIS:
- A) "have established" is incorrect because "have" is a plural verb form, which incorrectly agrees with the plural nouns in the parenthetical modifier instead of the true subject "The expansion".
- B) "establish" is incorrect because it is the plural base form, violating subject-verb agreement rules.
- D) "were establishing" is incorrect because "were" is plural, creating a past plural agreement mismatch.`
      },
      {
        id: 'diag-7',
        section: 'Writing',
        topic: 'Expression of Ideas (Transitions)',
        difficulty: 'Elite',
        question: `Which choice completes the text with the most logical transition?

In 1911, physicist Ernest Rutherford conducted his famous gold foil experiment, expecting alpha particles to pass straight through the positive atomic "plum pudding" matrix with minimal deflection. What he observed, however, was that a tiny fraction of the particles bounced almost directly backward. _______, Rutherford was forced to discard the prevailing Thomson model of the atom and propose a highly concentrated, dense positive nucleus.`,
        options: ['Nevertheless', 'Alternatively', 'Consequently', 'Conversely'],
        correctIndex: 2,
        explanation: `• CORRECT ANSWER (C): The first two sentences detail a surprising, paradigm-shattering experimental result. The final sentence describes Rutherford's subsequent action: discarding the Thomson plum-pudding model and proposing the nuclear model. This action was a direct consequence of the shocking results. Therefore, "Consequently" is the most logical cause-and-effect transition.

• INCORRECT OPTION ANALYSIS:
- A) "Nevertheless" is incorrect because it indicates a contrast or concession (in spite of). The action taken was a logical continuation of the experiment, not an action done in spite of it.
- B) "Alternatively" is incorrect because it is used to introduce an alternative choice or option. The passage details a chronological progression of cause and effect, not a choice.
- D) "Conversely" is incorrect because it introduces an opposite or inverse statement, whereas Rutherford's discovery is a direct, supportive outcome of the experiment's results.`
      },
      {
        id: 'diag-8',
        section: 'Math',
        topic: 'Advanced Math & Quadratic/Linear Systems',
        difficulty: 'Elite',
        question: `A system of equations consists of a quadratic equation and a linear equation in the xy-plane:
y = 2x² - 8x + 22
y = kx + 4

If the system has exactly one real solution (x, y), and k > 0, what is the value of k?`,
        options: ['2', '4', '6', '8'],
        correctIndex: 1,
        explanation: `• CORRECT ANSWER (B):
1. Equate the two equations to find their points of intersection:
   2x² - 8x + 22 = kx + 4
2. Move all terms to one side to establish a standard quadratic equation (ax² + bx + c = 0):
   2x² - (8 + k)x + 18 = 0
3. A system has exactly one real solution when the discriminant of the resulting quadratic equation is exactly zero (b² - 4ac = 0):
   D = [-(8 + k)]² - 4(2)(18) = 0
   (8 + k)² - 144 = 0
   (8 + k)² = 144
4. Solve for k by taking the square root of both sides:
   8 + k = 12  or  8 + k = -12
   k = 4       or  k = -20
5. Since the prompt specifies that k > 0, we select the positive result: k = 4.

• INCORRECT OPTION ANALYSIS:
- A) 2: If k = 2, the equation becomes 2x² - 10x + 18 = 0. Its discriminant is 100 - 144 = -44, which is less than zero, meaning the system has zero real solutions.
- C) 6: If k = 6, the equation is 2x² - 14x + 18 = 0. Its discriminant is 196 - 144 = 52, which is greater than zero, meaning the system has two distinct real solutions.
- D) 8: If k = 8, the equation is 2x² - 16x + 18 = 0. Its discriminant is 256 - 144 = 112, which is greater than zero, meaning the system has two distinct real solutions.`
      },
      {
        id: 'diag-9',
        section: 'Math',
        topic: 'Passport to Advanced Math (Exponential Growth)',
        difficulty: 'Elite',
        question: `The population of a rare species of orchid in a protected rainforest reserve is modeled by the function:
N(t) = 150 · (k)^(t / 4)

where t represents the time in years since the start of the study, and N(t) represents the total orchid population. If the population increases by 125% every 4 years, what is the value of k?`,
        options: ['1.25', '1.5', '2.25', '3.375'],
        correctIndex: 2,
        explanation: `• CORRECT ANSWER (C):
1. An increase of 125% means the new population size is 100% (the original population) + 125% (the increase) = 225% of the initial population size. This corresponds to a growth multiplier of 2.25.
2. Let's evaluate the function N(t) at t = 4 years:
   N(4) = 150 · (k)^(4 / 4) = 150 · k¹ = 150k
3. Since we know the population increases by 125% after 4 years, the population at t = 4 must also be equal to the initial population of 150 multiplied by the growth factor 2.25:
   N(4) = 150 · 2.25
4. Set these two expressions for N(4) equal to each other to solve for k:
   150k = 150 · 2.25
   k = 2.25

• INCORRECT OPTION ANALYSIS:
- A) 1.25: This represents a 25% increase, not 125%. It mistakenly treats the percent increase directly as the growth multiplier.
- B) 1.5: This represents a 50% increase, which is a mathematical mismatch.
- D) 3.375: This is 1.5 cubed, which would correspond to an incorrect compounded growth calculation rather than the specified 125% increase over 4 years.`
      },
      {
        id: 'diag-10',
        section: 'Math',
        topic: 'Geometry & Trigonometry (Arc Length & Radians)',
        difficulty: 'Elite',
        question: `In the xy-plane, a circle has its center at the origin (0, 0). An arc on this circle is intercepted by a central angle of (5π / 6) radians. If the length of this intercepted arc is (15π / 2) units, what is the area of the circle?`,
        options: ['36π', '45π', '81π', '100π'],
        correctIndex: 2,
        explanation: `• CORRECT ANSWER (C):
1. The formula for the length of an intercepted arc in radians is:
   s = r · θ
   where s is the arc length, r is the radius of the circle, and θ is the central angle in radians.
2. Substitute the given values (s = 15π / 2 and θ = 5π / 6) into the formula:
   15π / 2 = r · (5π / 6)
3. Divide both sides by π:
   15 / 2 = r · (5 / 6)
4. Isolate the radius r by multiplying both sides by the reciprocal (6 / 5):
   r = (15 / 2) · (6 / 5)
   r = (15 · 6) / (2 · 5) = 90 / 10 = 9 units
5. Now, calculate the area of the circle using the area formula:
   Area = π · r²
   Area = π · (9)² = 81π units²

• INCORRECT OPTION ANALYSIS:
- A) 36π: This would correspond to a radius of 6, which is incorrect.
- B) 45π: This is a common fraction multiplication error and does not yield an integer radius.
- D) 100π: This would correspond to a radius of 10, which represents an arithmetic error when solving for r.`
      }
    ];
  }, []);

  const currentDiagQuestion = diagnosticQuestions[diagIndex];

  const explanationData = useMemo(() => {
    const rawExplanation = currentDiagQuestion?.explanation || '';
    if (!rawExplanation) return { correctLetter: '', correctContent: '', incorrectContent: '' };

    const parts = rawExplanation.split(/•\s*INCORRECT\s+OPTION\s+ANALYSIS\s*\:?/i);
    let correctPart = parts[0] || '';
    let incorrectPart = parts[1] || '';

    // Clean up "• CORRECT ANSWER (X):" from correctPart
    const correctMatch = correctPart.match(/•\s*CORRECT\s+ANSWER\s*\(([A-D])\)\s*\:?\s*/i);
    let correctLetter = '';
    if (correctMatch) {
      correctLetter = correctMatch[1];
      correctPart = correctPart.replace(/•\s*CORRECT\s+ANSWER\s*\(([A-D])\)\s*\:?\s*/i, '');
    }

    return {
      correctLetter,
      correctContent: correctPart.trim(),
      incorrectContent: incorrectPart.trim()
    };
  }, [currentDiagQuestion]);

  const handleDiagOptionSelect = (idx: number) => {
    if (diagSubmitted) return;
    setDiagSelected(idx);
  };

  const handleDiagSubmit = () => {
    if (diagSelected === null || diagSubmitted || !currentDiagQuestion) return;
    setDiagSubmitted(true);
    const isCorrect = diagSelected === currentDiagQuestion.correctIndex;
    if (isCorrect) {
      setDiagScore(prev => prev + 1);
      if (currentDiagQuestion.section === 'Reading') {
        setDiagReadingCorrect(prev => prev + 1);
      } else if (currentDiagQuestion.section === 'Writing') {
        setDiagWritingCorrect(prev => prev + 1);
      } else {
        setDiagMathCorrect(prev => prev + 1);
      }
    }
  };

  const handleDiagNext = () => {
    if (diagIndex < 9) {
      setDiagIndex(prev => prev + 1);
      setDiagSelected(null);
      setDiagSubmitted(false);
    } else {
      setDiagCompleted(true);
    }
  };

  const handleDiagReset = () => {
    setDiagIndex(0);
    setDiagSelected(null);
    setDiagSubmitted(false);
    setDiagScore(0);
    setDiagReadingCorrect(0);
    setDiagWritingCorrect(0);
    setDiagMathCorrect(0);
    setDiagCompleted(false);
  };

  const [activeCategory, setActiveCategory] = useState<MainCategory>(initialCategory);
  const [isOptionPopupOpen, setIsOptionPopupOpen] = useState(false);

  // Sync if initialCategory prop changes
  useEffect(() => {
    setActiveCategory(initialCategory);
  }, [initialCategory]);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [activeCategory]);

  // Practice / Quiz State
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [answeredCount, setAnsweredCount] = useState(0);

  // Sub-tools for Drills
  const [drillsSubView, setDrillsSubView] = useState<'quiz' | 'calculator' | 'flashcards'>('quiz');

  // Flashcards State
  const [currentFlashcardIndex, setCurrentFlashcardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  // SAT Score Predictor State
  const [rwScore, setRwScore] = useState<number>(680);
  const [mathScore, setMathScore] = useState<number>(720);

  // Filter questions based on activeCategory (memoized to eliminate rendering delay)
  const filteredQuestions = useMemo((): SatQuestion[] => {
    if (activeCategory === 'reading') {
      return SAT_QUESTIONS.filter((q) => q.section === 'Reading' || q.section === 'Reading & Writing');
    }
    if (activeCategory === 'writing') {
      return SAT_QUESTIONS.filter((q) => q.section === 'Writing' || q.section === 'Reading & Writing');
    }
    // Drills -> All questions / mixed
    return SAT_QUESTIONS;
  }, [activeCategory]);
  const safeQuestionIndex = currentQuestionIndex % (filteredQuestions.length || 1);
  const currentQuestion: SatQuestion | undefined = filteredQuestions[safeQuestionIndex];
  const currentFlashcard: SatFlashcard = SAT_FLASHCARDS[currentFlashcardIndex % SAT_FLASHCARDS.length];

  const handleSelectCategoryFromModal = (category: MainCategory) => {
    setActiveCategory(category);
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setIsAnswerSubmitted(false);
    setIsOptionPopupOpen(false);
  };

  const handleOptionSelect = (index: number) => {
    if (isAnswerSubmitted) return;
    setSelectedOption(index);
  };

  const handleSubmitAnswer = () => {
    if (selectedOption === null || isAnswerSubmitted || !currentQuestion) return;

    // Freemium Limit Check: Non-logged-in users get a maximum of 5 free practice questions
    if (!user) {
      const freeQuestionsCount = parseInt(localStorage.getItem('uniroute_free_questions_count') || '0', 10);
      if (freeQuestionsCount >= 5) {
        onOpenAuth?.(
          'You have completed your 5 free SAT practice questions! Sign up for a free account to unlock thousands of expert practice drills, real-time detailed explanations, and full mock tests.'
        );
        return;
      }
      localStorage.setItem('uniroute_free_questions_count', (freeQuestionsCount + 1).toString());
    }

    setIsAnswerSubmitted(true);
    setAnsweredCount((prev) => prev + 1);
    if (selectedOption === currentQuestion.correctIndex) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    setSelectedOption(null);
    setIsAnswerSubmitted(false);
    setCurrentQuestionIndex((prev) => (prev + 1) % (filteredQuestions.length || 1));
  };

  const totalScore = rwScore + mathScore;
  const getPercentile = (total: number) => {
    if (total >= 1500) return 'Top 1% (99th Percentile - Ivy League Target)';
    if (total >= 1400) return 'Top 5% (95th Percentile - Top 30 Universities)';
    if (total >= 1300) return 'Top 15% (85th Percentile - Strong Global Target)';
    if (total >= 1200) return 'Top 25% (75th Percentile - Competitive Merit)';
    return 'Good Baseline Score - Focus on Writing or Math Drills';
  };

  // RENDER GUEST DIAGNOSTIC QUIZ
  if (!user) {
    return (
      <div id="sat-prep-hub-guest" className="space-y-6 pb-16 max-w-2xl mx-auto text-left">
        {/* Top Back Bar */}
        <div className="flex items-center justify-between pt-2">
          {onBackToHome && (
            <button
              onClick={onBackToHome}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-white border border-slate-200/90 shadow-xs text-xs font-bold text-slate-700 hover:text-indigo-600 hover:bg-slate-50 transition-all cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 text-indigo-600" />
              <span>Back to SAT Route</span>
            </button>
          )}
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400">
            SAT Diagnostic Evaluator
          </span>
        </div>

        {!diagCompleted ? (
          <div className="bg-white rounded-[32px] border border-slate-200/90 shadow-[0_4px_24px_rgba(0,0,0,0.03)] p-6 sm:p-8 space-y-6">
            {/* Header / Tracker */}
            <div className="flex items-center justify-between">
              <span className="px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-extrabold">
                Question {diagIndex + 1} of 10
              </span>
              <span className="text-xs font-bold text-slate-500">
                Section: {currentDiagQuestion?.section}
              </span>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
              <div
                className="bg-indigo-600 h-full transition-all duration-300"
                style={{ width: `${(diagIndex / 10) * 100}%` }}
              />
            </div>

            {/* Question Text */}
            <div className="space-y-4">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                {currentDiagQuestion?.topic} ({currentDiagQuestion?.difficulty} Difficulty)
              </span>
              <p className="text-slate-900 font-extrabold text-base leading-relaxed whitespace-pre-line">
                {currentDiagQuestion?.question}
              </p>
            </div>

            {/* Options */}
            <div className="grid grid-cols-1 gap-3 pt-2">
              {currentDiagQuestion?.options.map((option, idx) => {
                const isSelected = diagSelected === idx;
                const isCorrect = idx === currentDiagQuestion.correctIndex;
                let optionStyle = "border-slate-200/90 hover:border-slate-300 hover:bg-slate-50 text-slate-800";
                
                if (diagSubmitted) {
                  if (isCorrect) {
                    optionStyle = "bg-emerald-50 border-emerald-500 text-emerald-900 shadow-xs";
                  } else if (isSelected) {
                    optionStyle = "bg-rose-50 border-rose-500 text-rose-900 shadow-xs";
                  } else {
                    optionStyle = "border-slate-100 opacity-60 text-slate-400";
                  }
                } else if (isSelected) {
                  optionStyle = "bg-indigo-50 border-indigo-600 text-indigo-950 ring-2 ring-indigo-600/20";
                }

                return (
                  <button
                    key={idx}
                    disabled={diagSubmitted}
                    onClick={() => handleDiagOptionSelect(idx)}
                    className={`p-4 rounded-xl border text-left text-sm font-bold transition-all cursor-pointer flex items-center justify-between ${optionStyle}`}
                  >
                    <span>{option}</span>
                    {diagSubmitted && isCorrect && <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 ml-2" />}
                    {diagSubmitted && isSelected && !isCorrect && <XCircle className="w-4 h-4 text-rose-600 shrink-0 ml-2" />}
                  </button>
                );
              })}
            </div>

            {/* Submit / Next Button */}
            <div className="pt-4 border-t border-slate-100 flex items-center justify-end gap-3">
              {!diagSubmitted ? (
                <button
                  disabled={diagSelected === null}
                  onClick={handleDiagSubmit}
                  className="px-6 py-3 rounded-xl bg-slate-950 text-white hover:bg-slate-900 text-sm font-bold cursor-pointer transition-colors disabled:opacity-40"
                >
                  Submit Answer
                </button>
              ) : (
                <button
                  onClick={handleDiagNext}
                  className="px-6 py-3 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 text-sm font-bold cursor-pointer transition-colors"
                >
                  {diagIndex === 9 ? 'Finish Quiz' : 'Next Question'}
                </button>
              )}
            </div>

            {/* Interactive Explanation Box */}
            {diagSubmitted && (
              <div id="diag-explanation" className="mt-6 border border-slate-200/80 rounded-2xl bg-white overflow-hidden shadow-xs animate-fade-in">
                {/* Segmented Control / Tabs Header */}
                <div className="flex border-b border-slate-100 bg-slate-50/70 p-1.5 gap-1.5">
                  <button
                    onClick={() => setExplanationTab('correct')}
                    className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-xl text-xs font-extrabold transition-all cursor-pointer ${
                      explanationTab === 'correct'
                        ? 'bg-emerald-600 text-white shadow-xs'
                        : 'bg-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
                    }`}
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0 text-white" />
                    <span>Correct Explanation</span>
                    {explanationData.correctLetter && (
                      <span className={`text-[10px] px-1.5 py-0.5 rounded-md font-bold leading-none ${
                        explanationTab === 'correct' ? 'bg-emerald-700/85 text-white' : 'bg-slate-200 text-slate-700'
                      }`}>
                        Option {explanationData.correctLetter}
                      </span>
                    )}
                  </button>

                  {explanationData.incorrectContent && (
                    <button
                      onClick={() => setExplanationTab('incorrect')}
                      className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-xl text-xs font-extrabold transition-all cursor-pointer ${
                        explanationTab === 'incorrect'
                          ? 'bg-rose-600 text-white shadow-xs'
                          : 'bg-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
                      }`}
                    >
                      <XCircle className="w-3.5 h-3.5 shrink-0 text-white" />
                      <span>Incorrect Choices</span>
                    </button>
                  )}
                </div>

                {/* Content Panel */}
                <div className="p-4 sm:p-5">
                  <AnimatePresence mode="wait">
                    {explanationTab === 'correct' ? (
                      <motion.div
                        key="correct-tab"
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -4 }}
                        transition={{ duration: 0.15 }}
                        className="space-y-4 text-left"
                      >
                        {/* Elite Solution Intro Badge */}
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-50 border border-emerald-100 text-emerald-800 text-[10px] font-extrabold uppercase tracking-wider">
                          <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                          <span>Guaranteed Elite Method & Solution Rationale</span>
                        </div>
                        
                        {/* Interactive formatted block */}
                        <div className="prose prose-slate max-w-none">
                          <FormattedMathExplanation text={explanationData.correctContent} />
                        </div>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="incorrect-tab"
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -4 }}
                        transition={{ duration: 0.15 }}
                        className="space-y-4 text-left"
                      >
                        {/* SAT Trap Warning Badge */}
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-rose-50 border border-rose-100 text-rose-800 text-[10px] font-extrabold uppercase tracking-wider">
                          <XCircle className="w-3.5 h-3.5 text-rose-600" />
                          <span>SAT Traps & Distractors Analysis</span>
                        </div>

                        <div className="prose prose-slate max-w-none">
                          <FormattedMathExplanation text={explanationData.incorrectContent} />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="bg-white rounded-[32px] border border-slate-200/90 shadow-[0_4px_24px_rgba(0,0,0,0.03)] p-6 sm:p-8 space-y-8 text-center">
            {/* Celebration header */}
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-[10px] font-black uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                Diagnostic Complete
              </div>
              <h2 className="text-3xl font-black text-slate-950 tracking-tight">
                Your Predicted SAT Score
              </h2>
              <p className="text-slate-600 text-sm max-w-md mx-auto">
                Based on your diagnostic answers across reading, standard English conventions, and geometry, we have formulated your projected score.
              </p>
            </div>

            {/* Giant Score Circle */}
            <div className="relative w-48 h-48 mx-auto flex flex-col items-center justify-center rounded-full bg-slate-950 text-white shadow-xl">
              <span className="text-[10px] font-black tracking-widest text-indigo-400 uppercase">
                ESTIMATED SCORE
              </span>
              <span className="text-5xl font-black mt-1">
                {400 + (diagScore * 120)}
              </span>
              <span className="text-[10px] text-slate-400 font-bold mt-1">
                Range: 400 - 1600
              </span>
            </div>

            {/* Score Breakdown Row */}
            <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 text-left">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                  READING & WRITING
                </span>
                <span className="text-xl font-black text-slate-950 block mt-1">
                  {Math.min(800, 200 + ((diagReadingCorrect + diagWritingCorrect) * 85))} / 800
                </span>
                <span className="text-[10px] text-slate-500 font-semibold mt-0.5 block">
                  Correct: {diagReadingCorrect + diagWritingCorrect} of 7 questions
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 text-left">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                  MATHEMATICS
                </span>
                <span className="text-xl font-black text-slate-950 block mt-1">
                  {Math.min(800, 200 + (diagMathCorrect * 200))} / 800
                </span>
                <span className="text-[10px] text-slate-500 font-semibold mt-0.5 block">
                  Correct: {diagMathCorrect} of 3 questions
                </span>
              </div>
            </div>

            {/* Premium Gated Call to Action Box */}
            <div className="p-6 rounded-[24px] bg-indigo-50/50 border border-indigo-200/80 space-y-4 max-w-lg mx-auto">
              <span className="text-indigo-800 text-sm font-extrabold leading-relaxed block">
                For complete SAT guidance, practice drills, and up to 3,000 questions in the question bank, sign in.
              </span>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={() => onOpenAuth?.('Create your free Uni Route account to unlock our entire digital question bank of 3,000+ questions, adaptive math/reading matrices, and comprehensive mock tests.')}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 text-sm font-bold transition-all cursor-pointer shadow-sm"
                >
                  Sign In to Unlock 3,000+ Questions
                </button>
                <button
                  onClick={handleDiagReset}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 text-sm font-bold transition-all cursor-pointer"
                >
                  Retake Diagnostic Quiz
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div id="sat-prep-hub" className="space-y-6 pb-16 max-w-4xl mx-auto">
      {/* Top Bar: Back Button & Module Selector Popup Launcher */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
        {onBackToHome ? (
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-white border border-slate-200/90 shadow-xs text-xs font-bold text-slate-700 hover:text-indigo-600 hover:bg-slate-50 transition-all cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 text-indigo-600" />
            <span>Back to SAT Route</span>
          </button>
        ) : <div />}

        <div className="flex items-center gap-2">
          {/* Current Active Category Pill */}
          <span className="px-3.5 py-2 rounded-2xl bg-indigo-50 border border-indigo-200/80 text-indigo-700 text-xs font-extrabold uppercase tracking-wider flex items-center gap-1.5 shadow-2xs">
            {activeCategory === 'reading' && '📖 1. Reading'}
            {activeCategory === 'writing' && '✍️ 2. Writing'}
            {activeCategory === 'math' && '📐 3. Math'}
            {activeCategory === 'drills' && '⚡ 4. Drills'}
            {activeCategory === 'stats' && '📊 5. Advanced Stats'}
            {activeCategory === 'calculator' && '🧮 5. SAT Calculator'}
          </span>

          {/* Popup Modal Launcher Button */}
          <button
            onClick={() => setIsOptionPopupOpen(true)}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-white hover:bg-indigo-50 border border-slate-200/90 hover:border-indigo-300 text-slate-800 hover:text-indigo-700 text-xs font-bold transition-all cursor-pointer shadow-xs"
          >
            <Grid className="w-4 h-4 text-indigo-600" />
            <span>Switch Option</span>
          </button>
        </div>
      </div>

      {/* ANIMATED WRAPPER FOR CATEGORIES */}
      <div className="relative overflow-x-hidden w-full">
        <AnimatePresence>
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.12, ease: 'easeOut' }}
            className="w-full space-y-6"
          >
            {/* READING SECTION EXPLORER */}
            {activeCategory === 'reading' && (
              <SatReadingSectionExplorer user={user} onOpenAuth={onOpenAuth} />
            )}

            {/* WRITING SECTION EXPLORER */}
            {activeCategory === 'writing' && (
              <SatWritingSectionExplorer user={user} onOpenAuth={onOpenAuth} />
            )}

            {/* MATH SECTION EXPLORER */}
            {activeCategory === 'math' && (
              <SatMathSectionExplorer user={user} onOpenAuth={onOpenAuth} />
            )}

            {/* ADVANCED STATISTICS HANDBOOK & LAB */}
            {activeCategory === 'stats' && (
              <SatMathStatisticsChapter />
            )}

            {/* SAT ADAPTIVE DRILLS SYSTEM */}
            {activeCategory === 'drills' && (
              <SatDrillsHub />
            )}

            {/* SAT INTEGRATED CALCULATOR */}
            {activeCategory === 'calculator' && (
              <SatCalculatorView inline={true} />
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* POPUP MODAL WITH THE 4 OPTIONS */}
      <AnimatePresence>
        {isOptionPopupOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOptionPopupOpen(false)}
              className="absolute inset-0"
            />

            {/* Dialog Content */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="bg-white border border-slate-200 rounded-[32px] max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative z-10 space-y-6 overflow-hidden max-h-[90vh] overflow-y-auto"
            >
              {/* Close Icon */}
              <button
                onClick={() => setIsOptionPopupOpen(false)}
                className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-all cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="space-y-2 pr-8 text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-[11px] font-black uppercase tracking-wider">
                  <Target className="w-3.5 h-3.5 text-indigo-600" />
                  Digital SAT Core Modules
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
                  Select Learning Option
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Choose one of the 4 official learning options below to switch your practice session.
                </p>
              </div>

              {/* OPTIONS IN A GRID */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 pt-2">
                {/* OPTION 1: READING */}
                <button
                  onClick={() => handleSelectCategoryFromModal('reading')}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer text-left flex flex-col justify-between min-h-[160px] group relative overflow-hidden ${
                    activeCategory === 'reading'
                      ? 'bg-blue-50/30 border-blue-600 ring-2 ring-blue-600/20 shadow-md'
                      : 'bg-white border-slate-200/90 hover:border-blue-600 hover:bg-blue-50/20 hover:shadow-lg'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2.5">
                      <span className="text-2xl">📖</span>
                      <span className="px-2.5 py-0.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-[10px] font-black uppercase tracking-wider">
                        6 Chapters
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <h3 className="text-base font-extrabold tracking-tight text-slate-950 group-hover:text-blue-900">
                        1. Reading
                      </h3>
                      {activeCategory === 'reading' && (
                        <span className="w-3 h-3 rounded-full bg-blue-600 ring-4 ring-blue-100 flex-shrink-0 animate-pulse" title="Selected" />
                      )}
                    </div>
                    <p className="text-xs mt-1 leading-relaxed text-slate-600">
                      Main idea, claims, structure, inference, evidence & vocabulary in context.
                    </p>
                  </div>
                  <div className="mt-3 flex items-center justify-between text-xs font-bold text-indigo-600 group-hover:text-indigo-700">
                    <span className="flex items-center gap-1.5">
                      {activeCategory === 'reading' && (
                        <span className="w-2 h-2 rounded-full bg-blue-600" />
                      )}
                      {activeCategory === 'reading' ? 'Active Module' : 'Select Reading'}
                    </span>
                    <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </button>

                {/* OPTION 2: WRITING */}
                <button
                  onClick={() => handleSelectCategoryFromModal('writing')}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer text-left flex flex-col justify-between min-h-[160px] group relative overflow-hidden ${
                    activeCategory === 'writing'
                      ? 'bg-blue-50/30 border-blue-600 ring-2 ring-blue-600/20 shadow-md'
                      : 'bg-white border-slate-200/90 hover:border-blue-600 hover:bg-blue-50/20 hover:shadow-lg'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2.5">
                      <span className="text-2xl">✍️</span>
                      <span className="px-2.5 py-0.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-[10px] font-black uppercase tracking-wider">
                        7 Chapters
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <h3 className="text-base font-extrabold tracking-tight text-slate-950 group-hover:text-blue-900">
                        2. Writing
                      </h3>
                      {activeCategory === 'writing' && (
                        <span className="w-3 h-3 rounded-full bg-blue-600 ring-4 ring-blue-100 flex-shrink-0 animate-pulse" title="Selected" />
                      )}
                    </div>
                    <p className="text-xs mt-1 leading-relaxed text-slate-600">
                      Standard English conventions, punctuation, sentence clauses & transitions.
                    </p>
                  </div>
                  <div className="mt-3 flex items-center justify-between text-xs font-bold text-indigo-600 group-hover:text-indigo-700">
                    <span className="flex items-center gap-1.5">
                      {activeCategory === 'writing' && (
                        <span className="w-2 h-2 rounded-full bg-blue-600" />
                      )}
                      {activeCategory === 'writing' ? 'Active Module' : 'Select Writing'}
                    </span>
                    <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </button>

                {/* OPTION 3: MATH */}
                <button
                  onClick={() => handleSelectCategoryFromModal('math')}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer text-left flex flex-col justify-between min-h-[160px] group relative overflow-hidden ${
                    activeCategory === 'math'
                      ? 'bg-blue-50/30 border-blue-600 ring-2 ring-blue-600/20 shadow-md'
                      : 'bg-white border-slate-200/90 hover:border-blue-600 hover:bg-blue-50/20 hover:shadow-lg'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2.5">
                      <span className="text-2xl">📐</span>
                      <span className="px-2.5 py-0.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-[10px] font-black uppercase tracking-wider">
                        11 Chapters
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <h3 className="text-base font-extrabold tracking-tight text-slate-950 group-hover:text-blue-900">
                        3. Math
                      </h3>
                      {activeCategory === 'math' && (
                        <span className="w-3 h-3 rounded-full bg-blue-600 ring-4 ring-blue-100 flex-shrink-0 animate-pulse" title="Selected" />
                      )}
                    </div>
                    <p className="text-xs mt-1 leading-relaxed text-slate-600">
                      Algebra, Advanced Math, Problem Solving & Geometry with step-by-step solutions.
                    </p>
                  </div>
                  <div className="mt-3 flex items-center justify-between text-xs font-bold text-indigo-600 group-hover:text-indigo-700">
                    <span className="flex items-center gap-1.5">
                      {activeCategory === 'math' && (
                        <span className="w-2 h-2 rounded-full bg-blue-600" />
                      )}
                      {activeCategory === 'math' ? 'Active Module' : 'Select Math'}
                    </span>
                    <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </button>

                {/* OPTION 4: DRILLS */}
                <button
                  onClick={() => handleSelectCategoryFromModal('drills')}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer text-left flex flex-col justify-between min-h-[160px] group relative overflow-hidden ${
                    activeCategory === 'drills'
                      ? 'bg-blue-50/30 border-blue-600 ring-2 ring-blue-600/20 shadow-md'
                      : 'bg-white border-slate-200/90 hover:border-blue-600 hover:bg-blue-50/20 hover:shadow-lg'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2.5">
                      <span className="text-2xl">⚡</span>
                      <span className="px-2.5 py-0.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-[10px] font-black uppercase">
                        Full Practice
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <h3 className="text-base font-extrabold tracking-tight text-slate-950 group-hover:text-blue-900">
                        4. Drills
                      </h3>
                      {activeCategory === 'drills' && (
                        <span className="w-3 h-3 rounded-full bg-blue-600 ring-4 ring-blue-100 flex-shrink-0 animate-pulse" title="Selected" />
                      )}
                    </div>
                    <p className="text-xs mt-1 leading-relaxed text-slate-600">
                      Timed mixed speed drills, 400-1600 Score Predictor & Vocab Flashcards.
                    </p>
                  </div>
                  <div className="mt-3 flex items-center justify-between text-xs font-bold text-indigo-600 group-hover:text-indigo-700">
                    <span className="flex items-center gap-1.5">
                      {activeCategory === 'drills' && (
                        <span className="w-2 h-2 rounded-full bg-blue-600" />
                      )}
                      {activeCategory === 'drills' ? 'Active Module' : 'Select Speed Drills'}
                    </span>
                    <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </button>

                {/* OPTION 5: CALCULATOR */}
                <button
                  onClick={() => handleSelectCategoryFromModal('calculator')}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer text-left flex flex-col justify-between min-h-[160px] group relative overflow-hidden ${
                    activeCategory === 'calculator'
                      ? 'bg-blue-50/30 border-blue-600 ring-2 ring-blue-600/20 shadow-md'
                      : 'bg-white border-slate-200/90 hover:border-blue-600 hover:bg-blue-50/20 hover:shadow-lg'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2.5">
                      <span className="text-2xl">🧮</span>
                      <span className="px-2.5 py-0.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-[10px] font-black uppercase">
                        SUITE
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <h3 className="text-base font-extrabold tracking-tight text-slate-950 group-hover:text-blue-900">
                        5. Calculator
                      </h3>
                      {activeCategory === 'calculator' && (
                        <span className="w-3 h-3 rounded-full bg-blue-600 ring-4 ring-blue-100 flex-shrink-0 animate-pulse" title="Selected" />
                      )}
                    </div>
                    <p className="text-xs mt-1 leading-relaxed text-slate-600">
                      High-precision scientific calculator optimized for SAT math problems.
                    </p>
                  </div>
                  <div className="mt-3 flex items-center justify-between text-xs font-bold text-indigo-600 group-hover:text-indigo-700">
                    <span className="flex items-center gap-1.5">
                      {activeCategory === 'calculator' && (
                        <span className="w-2 h-2 rounded-full bg-blue-600" />
                      )}
                      {activeCategory === 'calculator' ? 'Active Module' : 'Select Calculator'}
                    </span>
                    <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
