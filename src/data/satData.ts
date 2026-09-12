import { SatQuestion, SatFlashcard } from '../types';

export const SAT_QUESTIONS: SatQuestion[] = [
  // --- READING QUESTIONS ---
  {
    id: 'r-1',
    section: 'Reading',
    topic: 'Craft & Structure (Vocabulary in Context)',
    difficulty: 'Medium',
    question: 'Select the word that best completes the passage with the most logical and precise meaning:\n"Despite initial skepticism from peers, Dr. Alvi’s hypothesis on high-temperature superconductors was eventually _______ by subsequent independent laboratory experiments across Europe."',
    options: ['vindicated', 'renounced', 'curtailed', 'deprecated'],
    correctIndex: 0,
    explanation: '"Vindicated" means cleared of suspicion, proven correct or justified. Since subsequent experiments proved his hypothesis correct despite initial skepticism, "vindicated" is the most logical choice.'
  },
  {
    id: 'r-2',
    section: 'Reading',
    topic: 'Information & Ideas (Inference & Evidence)',
    difficulty: 'Hard',
    question: 'Read the text below:\nAstronomers observing exoplanet Kepler-186f noted that its orbital distance from its host star places it squarely within the liquid-water habitable zone. However, atmospheric spectroscopic data remains inconclusive regarding the presence of dense greenhouse gases.\nWhich statement is best supported by the text?',
    options: ['Kepler-186f is guaranteed to support terrestrial life.', 'Kepler-186f receives the exact same solar radiation as Earth.', 'Kepler-186f\'s potential habitability cannot be fully confirmed without clearer atmospheric data.', 'Kepler-186f lacks any atmosphere entirely.'],
    correctIndex: 2,
    explanation: 'The text states it is in the habitable zone, BUT atmospheric data is inconclusive. Thus, its habitability cannot be fully confirmed without clearer atmospheric data.'
  },
  {
    id: 'r-3',
    section: 'Reading',
    topic: 'Rhetorical Synthesis & Main Idea',
    difficulty: 'Medium',
    question: 'A student is taking notes on urban heat islands (UHIs). Vegetation reduces ground temperature through evapotranspiration; reflective cool roofs absorb significantly less solar radiation than dark asphalt. Which choice best synthesizes this information to describe urban mitigation strategies?',
    options: ['Urban heat islands are caused solely by dark asphalt roads.', 'Both planting urban greenery and installing reflective cool roofs effectively counteract urban heat island effects.', 'Evapotranspiration is more important than reflective roofing materials.', 'Reflective roofs are ineffective without surrounding trees.'],
    correctIndex: 1,
    explanation: 'Choice 1 logically combines both mentioned strategies (urban greenery and reflective cool roofs) as effective counter-measures against UHIs.'
  },

  // --- WRITING QUESTIONS ---
  {
    id: 'w-1',
    section: 'Writing',
    topic: 'Standard English Conventions (Pronouns)',
    difficulty: 'Easy',
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?\n"The committee members debated for hours over the proposal; however, _______ decision was ultimately postponed until next Monday."',
    options: ['there', 'their', 'they\'re', 'its'],
    correctIndex: 1,
    explanation: '"Their" is the plural possessive pronoun referring back to "The committee members".'
  },
  {
    id: 'w-2',
    section: 'Writing',
    topic: 'Standard English Conventions (Punctuation & Clauses)',
    difficulty: 'Medium',
    question: 'Which choice completes the text with the correct punctuation?\n"The research team gathered atmospheric samples across four altitude zones_______ the resulting dataset provided unprecedented clarity on tropospheric ozone depletion."',
    options: ['; and', ';', ', and', ': and'],
    correctIndex: 1,
    explanation: 'A semicolon alone (or comma + coordinating conjunction) connects two independent clauses. Choice B properly joins the two complete thoughts without comma splice or redundant conjunctions.'
  },
  {
    id: 'w-3',
    section: 'Writing',
    topic: 'Expression of Ideas (Transitions)',
    difficulty: 'Medium',
    question: 'Which choice completes the text with the most logical transition?\n"Solar panel efficiency drops at high temperatures. _______, engineers in Arizona installed water-cooling microchannels beneath photovoltaic arrays to maintain peak energy output during summer months."',
    options: ['Consequently', 'Conversely', 'In contrast', 'Similarly'],
    correctIndex: 0,
    explanation: 'The second sentence describes an engineering solution created as a direct result of the efficiency drop described in the first sentence. "Consequently" correctly expresses this cause-and-effect relationship.'
  },

  // --- MATH QUESTIONS ---
  {
    id: 'm-1',
    section: 'Math',
    topic: 'Algebra & Linear Equations',
    difficulty: 'Easy',
    question: 'If 3x + 7 = 22, what is the value of 6x - 4?',
    options: ['26', '30', '32', '38'],
    correctIndex: 0,
    explanation: 'Solve 3x + 7 = 22 => 3x = 15 => x = 5. Then calculate 6x - 4 = 6(5) - 4 = 30 - 4 = 26.'
  },
  {
    id: 'm-2',
    section: 'Math',
    topic: 'Advanced Math & Quadratics',
    difficulty: 'Medium',
    question: 'The quadratic equation x² - 8x + k = 0 has exactly one real solution. What is the value of k?',
    options: ['8', '12', '16', '64'],
    correctIndex: 2,
    explanation: 'A quadratic has one real solution when its discriminant b² - 4ac = 0. Here, (-8)² - 4(1)(k) = 0 => 64 - 4k = 0 => k = 16.'
  },
  {
    id: 'm-3',
    section: 'Math',
    topic: 'Problem Solving & Exponential Growth',
    difficulty: 'Hard',
    question: 'A scientist records that a bacterial culture grows exponentially according to P(t) = 250(1.15)^t, where t is in hours. By what percentage does the population grow every 3 hours?',
    options: ['45%', '52.1%', '58.5%', '72.8%'],
    correctIndex: 1,
    explanation: 'Growth factor after 3 hours is (1.15)³ ≈ 1.520875, which represents a 52.1% increase.'
  },
  {
    id: 'm-4',
    section: 'Math',
    topic: 'Geometry & Circle Equations',
    difficulty: 'Medium',
    question: 'A circle in the xy-plane has the equation (x - 4)² + (y + 3)² = 49. What are the coordinates of its center and its radius?',
    options: ['Center (4, -3), Radius = 7', 'Center (-4, 3), Radius = 7', 'Center (4, -3), Radius = 49', 'Center (-4, 3), Radius = 49'],
    correctIndex: 0,
    explanation: 'Standard form (x - h)² + (y - k)² = r² gives center (h, k) = (4, -3) and radius r = √49 = 7.'
  },

  // --- DRILLS QUESTIONS ---
  {
    id: 'd-1',
    section: 'Drills',
    topic: 'Mixed Speed Drill (Math System)',
    difficulty: 'Medium',
    question: 'System of equations speed drill: 2x + 3y = 12 and x - y = 1. What is the value of x + y?',
    options: ['3', '5', '7', '8'],
    correctIndex: 1,
    explanation: 'From x - y = 1, x = y + 1. Substitute into 2(y+1) + 3y = 12 => 5y + 2 = 12 => 5y = 10 => y = 2, x = 3. Thus x + y = 3 + 2 = 5.'
  },
  {
    id: 'd-2',
    section: 'Drills',
    topic: 'Mixed Speed Drill (Grammar & Editing)',
    difficulty: 'Easy',
    question: 'Editing speed drill: "Neither the principal nor the teachers _______ present at yesterday’s emergency meeting."',
    options: ['was', 'were', 'is', 'are'],
    correctIndex: 1,
    explanation: 'With "neither... nor...", the verb agrees with the subject closest to it ("teachers", plural), requiring "were" for past tense.'
  }
];

export const SAT_FLASHCARDS: SatFlashcard[] = [
  {
    id: 'v-1',
    word: 'Anomalous',
    phonetic: '/əˈnämələs/',
    partOfSpeech: 'Adjective',
    definition: 'Deviating from what is standard, normal, or expected.',
    exampleSentence: 'The astronomer noticed an anomalous radiation spike originating from the galaxy’s core.',
    synonyms: ['atypical', 'aberrant', 'peculiar', 'irregular']
  },
  {
    id: 'v-2',
    word: 'Fastidious',
    phonetic: '/faˈstidēəs/',
    partOfSpeech: 'Adjective',
    definition: 'Very attentive to and concerned about accuracy and detail.',
    exampleSentence: 'The research assistant was fastidious in recording every temperature change to the nearest fraction of a degree.',
    synonyms: ['meticulous', 'scrupulous', 'painstaking', 'exacting']
  },
  {
    id: 'v-3',
    word: 'Pragmatic',
    phonetic: '/praɡˈmadik/',
    partOfSpeech: 'Adjective',
    definition: 'Dealing with things sensibly and realistically based on practical rather than theoretical considerations.',
    exampleSentence: 'Instead of pursuing idealistic plans, the university board took a pragmatic approach to budget allocation.',
    synonyms: ['practical', 'sensible', 'realistic', 'utilitarian']
  },
  {
    id: 'v-4',
    word: 'Ephemeral',
    phonetic: '/əˈfem(ə)rəl/',
    partOfSpeech: 'Adjective',
    definition: 'Lasting for a very short time; fleeting.',
    exampleSentence: 'Fame on social media can be ephemeral, fading as quickly as it arrived.',
    synonyms: ['transient', 'fleeting', 'momentary', 'evanescent']
  },
  {
    id: 'v-5',
    word: 'Elucidate',
    phonetic: '/əˈlo͞osəˌdāt/',
    partOfSpeech: 'Verb',
    definition: 'Make (something) clear; explain.',
    exampleSentence: 'The professor used clear diagrams to elucidate the complex mechanisms of photosynthesis.',
    synonyms: ['clarify', 'illuminate', 'explicate', 'expound']
  }
];

export const SAT_FORMULAS = [
  { title: 'Slope-Intercept Form', formula: 'y = mx + b', note: 'm = slope, b = y-intercept' },
  { title: 'Quadratic Formula', formula: 'x = (-b ± √(b² - 4ac)) / (2a)', note: 'b² - 4ac is the discriminant' },
  { title: 'Circle Equation', formula: '(x - h)² + (y - k)² = r²', note: 'Center at (h, k), radius r' },
  { title: 'Pythagorean Theorem', formula: 'a² + b² = c²', note: 'For right triangles, c is hypotenuse' },
  { title: 'Exponential Growth/Decay', formula: 'A = P(1 ± r)^t', note: 'P = principal, r = rate, t = time' },
  { title: 'Special Right Triangles', formula: '30°-60°-90° (x, x√3, 2x) & 45°-45°-90° (x, x, x√2)', note: 'Crucial for speed in geometry' }
];
