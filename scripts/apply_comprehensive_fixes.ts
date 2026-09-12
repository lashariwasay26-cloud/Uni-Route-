import * as fs from 'fs';
import * as path from 'path';

// Let's create specific replacement rules for every duplicate question across all groups
interface UpdateRule {
  filePath: string;
  id: string;
  newOptions: string[];
  newAnswer?: any;
  newAnswerText?: string;
  comment?: string;
}

const updates: UpdateRule[] = [
  // ==========================================
  // 1. WRITING CHAPTER 1 & 2 PUNCTUATION GROUPS
  // ==========================================

  // Group: [";", "and", ",", "no punctuation"]
  {
    filePath: 'src/data/writing/satWritingChapter1QuestionsPart1.ts',
    id: 'ex1-q13',
    newOptions: ['conservators;', 'conservators and', 'conservators,', 'conservators'],
    newAnswer: 2,
    comment: 'Attach word "conservators" to options'
  },

  // Group: [";", "and", ":", ","] / [",", ";", ":", "and"]
  {
    filePath: 'src/data/writing/satWritingChapter1QuestionsPart1.ts',
    id: 'ex2-q18',
    newOptions: ['proposals;', 'proposals and', 'proposals:', 'proposals,'],
    newAnswer: 3,
  },
  {
    filePath: 'src/data/writing/satWritingChapter1QuestionsPart1.ts',
    id: 'ex2-q29',
    newOptions: ['council,', 'council;', 'council:', 'council and'],
    newAnswer: 0,
  },
  {
    filePath: 'src/data/writing/satWritingChapter1QuestionsPart1.ts',
    id: 'ex2-q30',
    newOptions: ['evidence,', 'evidence;', 'evidence:', 'evidence and'],
    newAnswer: 0,
  },
  {
    filePath: 'src/data/writing/satWritingChapter1QuestionsPart1.ts',
    id: 'ex3-q35',
    newOptions: ['orchestra,', 'orchestra;', 'orchestra:', 'orchestra and'],
    newAnswer: 0,
  },
  {
    filePath: 'src/data/writing/satWritingChapter1QuestionsPart1.ts',
    id: 'ex3-q41',
    newOptions: ['manuscripts,', 'manuscripts;', 'manuscripts:', 'manuscripts and'],
    newAnswer: 0,
  },
  {
    filePath: 'src/data/writing/satWritingChapter1QuestionsPart1.ts',
    id: 'ex3-q42',
    newOptions: ['instruments,', 'instruments;', 'instruments:', 'instruments and'],
    newAnswer: 0,
  },
  {
    filePath: 'src/data/writing/satWritingChapter1QuestionsPart2.ts',
    id: 'ex4-q46',
    newOptions: ['reflectors,', 'reflectors;', 'reflectors:', 'reflectors and'],
    newAnswer: 0,
  },
  {
    filePath: 'src/data/writing/satWritingChapter1QuestionsPart2.ts',
    id: 'ex4-q48',
    newOptions: ['surfaces,', 'surfaces;', 'surfaces:', 'surfaces and'],
    newAnswer: 0,
  },

  // Group: [":", "no punctuation", ",", ";"] / [",", ";", ":", "no punctuation"]
  {
    filePath: 'src/data/writing/satWritingChapter1QuestionsPart1.ts',
    id: 'ex2-q19',
    newOptions: ['evaluated:', 'evaluated', 'evaluated,', 'evaluated;'],
    newAnswer: 1,
  },
  {
    filePath: 'src/data/writing/satWritingChapter1QuestionsPart1.ts',
    id: 'ex2-q27',
    newOptions: ['amendment;', 'amendment:', 'amendment,', 'amendment'],
    newAnswer: 2,
  },
  {
    filePath: 'src/data/writing/satWritingChapter1QuestionsPart1.ts',
    id: 'ex3-q36',
    newOptions: ['festival,', 'festival;', 'festival:', 'festival'],
    newAnswer: 0,
  },
  {
    filePath: 'src/data/writing/satWritingChapter1QuestionsPart2.ts',
    id: 'ex4-q45',
    newOptions: ['hall,', 'hall;', 'hall:', 'hall'],
    newAnswer: 3,
  },
  {
    filePath: 'src/data/writing/satWritingChapter1QuestionsPart2.ts',
    id: 'ex5-q50',
    newOptions: ['expansion:', 'expansion;', 'expansion,', 'expansion'],
    newAnswer: 0,
  },
  {
    filePath: 'src/data/writing/satWritingChapter1QuestionsPart2.ts',
    id: 'ex5-q51',
    newOptions: ['includes', 'includes:', 'includes,', 'includes;'],
    newAnswer: 0,
  },
  {
    filePath: 'src/data/writing/satWritingChapter1QuestionsPart2.ts',
    id: 'ex7-q79',
    newOptions: ['jurisdiction', 'jurisdiction:', 'jurisdiction,', 'jurisdiction;'],
    newAnswer: 0,
  },
  {
    filePath: 'src/data/writing/satWritingChapter1QuestionsPart2.ts',
    id: 'ex7-q90',
    newOptions: ['factors:', 'factors;', 'factors,', 'factors'],
    newAnswer: 0,
  },
  {
    filePath: 'src/data/writing/satWritingChapter1QuestionsPart2.ts',
    id: 'ex8-q98',
    newOptions: ['acoustics:', 'acoustics;', 'acoustics,', 'acoustics'],
    newAnswer: 0,
  },
  {
    filePath: 'src/data/writing/satWritingChapter1QuestionsPart2.ts',
    id: 'ex8-q100',
    newOptions: ['parameters:', 'parameters;', 'parameters,', 'parameters'],
    newAnswer: 0,
  },

  // Group: ["—", ",", ";", "no punctuation"]
  {
    filePath: 'src/data/writing/satWritingChapter1QuestionsPart1.ts',
    id: 'ex2-q22',
    newOptions: ['exhibits—', 'exhibits,', 'exhibits;', 'exhibits'],
    newAnswer: 0,
  },
  {
    filePath: 'src/data/writing/satWritingChapter1QuestionsPart1.ts',
    id: 'ex3-q39',
    newOptions: ['tapestries—', 'tapestries,', 'tapestries;', 'tapestries'],
    newAnswer: 0,
  },
  {
    filePath: 'src/data/writing/satWritingChapter1QuestionsPart2.ts',
    id: 'ex4-q47',
    newOptions: ['canopy—', 'canopy,', 'canopy;', 'canopy'],
    newAnswer: 0,
  },
  {
    filePath: 'src/data/writing/satWritingChapter1QuestionsPart2.ts',
    id: 'ex6-q67',
    newOptions: ['restorations—', 'restorations,', 'restorations;', 'restorations'],
    newAnswer: 0,
  },
  {
    filePath: 'src/data/writing/satWritingChapter1QuestionsPart2.ts',
    id: 'ex7-q88',
    newOptions: ['findings—', 'findings,', 'findings;', 'findings'],
    newAnswer: 0,
  },

  // Chapter 2 Exercise Block 19:
  {
    filePath: 'src/data/writing/satWritingChapter2QuestionsPart2.ts',
    id: 'ch2-ex19-q18',
    newOptions: ['techniques:', 'techniques', 'techniques,', 'techniques;'],
    newAnswer: 0,
  },
  {
    filePath: 'src/data/writing/satWritingChapter2QuestionsPart2.ts',
    id: 'ch2-ex19-q20',
    newOptions: ['materials:', 'materials', 'materials,', 'materials;'],
    newAnswer: 0,
  },
  {
    filePath: 'src/data/writing/satWritingChapter2QuestionsPart2.ts',
    id: 'ch2-ex19-q22',
    newOptions: ['observations:', 'observations', 'observations,', 'observations;'],
    newAnswer: 0,
  },
  {
    filePath: 'src/data/writing/satWritingChapter2QuestionsPart2.ts',
    id: 'ch2-ex19-q24',
    newOptions: ['conclusions:', 'conclusions', 'conclusions,', 'conclusions;'],
    newAnswer: 0,
  },
  {
    filePath: 'src/data/writing/satWritingChapter2QuestionsPart2.ts',
    id: 'ch2-ex19-q26',
    newOptions: ['variables:', 'variables', 'variables,', 'variables;'],
    newAnswer: 0,
  },

  // ==========================================
  // 2. WRITING CHAPTER 3 & 4 PRONOUN / MODIFIER GROUPS
  // ==========================================
  {
    filePath: 'src/data/writing/satWritingChapter3QuestionsPart1.ts',
    id: 'ch3-q18',
    newOptions: ['he', 'him', 'himself', 'his'],
    newAnswer: 0,
  },
  {
    filePath: 'src/data/writing/satWritingChapter3QuestionsPart1.ts',
    id: 'ch3-q20',
    newOptions: ['they', 'them', 'themselves', 'theirs'],
    newAnswer: 0,
  },
  {
    filePath: 'src/data/writing/satWritingChapter3QuestionsPart1.ts',
    id: 'ch3-q22',
    newOptions: ['we', 'us', 'ourselves', 'our'],
    newAnswer: 0,
  },
  {
    filePath: 'src/data/writing/satWritingChapter3QuestionsPart1.ts',
    id: 'ch3-q24',
    newOptions: ['who', 'whom', 'whose', 'whoever'],
    newAnswer: 0,
  },
  {
    filePath: 'src/data/writing/satWritingChapter3QuestionsPart1.ts',
    id: 'ch3-q26',
    newOptions: ['who', 'whom', 'which', 'that'],
    newAnswer: 1,
  },
  {
    filePath: 'src/data/writing/satWritingChapter3QuestionsPart1.ts',
    id: 'ch3-q28',
    newOptions: ['its', "it's", 'their', "they're"],
    newAnswer: 0,
  },
  {
    filePath: 'src/data/writing/satWritingChapter3QuestionsPart1.ts',
    id: 'ch3-q30',
    newOptions: ['their', 'its', 'theirs', 'it'],
    newAnswer: 0,
  },

  // Chapter 6 placement options:
  {
    filePath: 'src/data/writing/satWritingChapter6QuestionsPart1.ts',
    id: 'ch6-q36',
    newOptions: ['[1] (before Sentence 1)', '[2] (after Sentence 1)', '[3] (after Sentence 2)', '[4] (after Sentence 3)'],
    newAnswer: 1,
  },
  {
    filePath: 'src/data/writing/satWritingChapter6QuestionsPart1.ts',
    id: 'ch6-q37',
    newOptions: ['Position [1]', 'Position [2]', 'Position [3]', 'Position [4]'],
    newAnswer: 2,
  },
  {
    filePath: 'src/data/writing/satWritingChapter6QuestionsPart1.ts',
    id: 'ch6-q38',
    newOptions: ['After sentence 1', 'After sentence 2', 'After sentence 3', 'After sentence 4'],
    newAnswer: 2,
  },
  {
    filePath: 'src/data/writing/satWritingChapter6QuestionsPart1.ts',
    id: 'ch6-q40',
    newOptions: ['Location [1]', 'Location [2]', 'Location [3]', 'Location [4]'],
    newAnswer: 3,
  },

  // ==========================================
  // 3. MATH SECTION DUPLICATE OPTION GROUPS
  // ==========================================

  // Group: Systems of equations solutions ["0", "1", "2", "Infinitely many"]
  {
    filePath: 'src/data/satMathChapter3SystemsQuestions.ts',
    id: 'ch3-sq7',
    newOptions: ['No real solutions', 'Exactly 1 real solution', 'Two distinct real solutions', 'Infinitely many solutions'],
    newAnswer: 3,
    newAnswerText: 'Infinitely many solutions',
  },
  {
    filePath: 'src/data/satMathChapter3SystemsQuestions.ts',
    id: 'ch3-sq8',
    newOptions: ['Zero intersection points', 'Exactly one intersection point', 'Two distinct intersection points', 'Infinitely many intersection points'],
    newAnswer: 1,
    newAnswerText: 'Exactly one intersection point',
  },
  {
    filePath: 'src/data/satMathChapter3SystemsQuestions.ts',
    id: 'ch3-sq20',
    newOptions: ['0 real roots', 'Exactly 1 distinct real root', '2 distinct real roots', 'Infinite number of roots'],
    newAnswer: 1,
    newAnswerText: 'Exactly 1 distinct real root',
  },
  {
    filePath: 'src/data/satMathChapter3SystemsQuestions.ts',
    id: 'ch3-sq24',
    newOptions: ['No x-intercepts', 'Exactly 1 x-intercept', 'Two distinct x-intercepts', 'Infinite x-intercepts'],
    newAnswer: 1,
    newAnswerText: 'Exactly 1 x-intercept',
  },
  {
    filePath: 'src/data/satMathChapter3SystemsQuestions.ts',
    id: 'ch3-sq28',
    newOptions: ['0 real points', '1 real point', '2 real points', '3 real points'],
    newAnswer: 2,
    newAnswerText: '2 real points',
  },
  {
    filePath: 'src/data/satMathChapter3SystemsQuestions.ts',
    id: 'ch3-sq30',
    newOptions: ['No real intersection points', '1 tangent intersection point', '2 distinct intersection points', '3 intersection points'],
    newAnswer: 2,
    newAnswerText: '2 distinct intersection points',
  },

  // Quadratic Discriminant in Ch 4:
  {
    filePath: 'src/data/satMathChapter4QuestionsPart2.ts',
    id: 'ch4-q39',
    newOptions: ['Zero real solutions', 'Exactly one real solution', 'Two distinct real solutions', 'Infinitely many solutions'],
    newAnswer: 2,
    newAnswerText: 'Two distinct real solutions',
  },

  // Math Chapter 4 Small Numbers:
  {
    filePath: 'src/data/satMathChapter4QuestionsPart1.ts',
    id: 'ch4-q3',
    newOptions: ['1 unit', '2 units', '3 units', '4 units'],
    newAnswer: 2,
    newAnswerText: '3 units',
  },
  {
    filePath: 'src/data/satMathChapter4QuestionsPart1.ts',
    id: 'ch4-q4',
    newOptions: ['-12', '-5', '5', '12'],
    newAnswer: 2,
    newAnswerText: '5',
  },
  {
    filePath: 'src/data/satMathChapter4QuestionsPart1.ts',
    id: 'ch4-q9',
    newOptions: ['k = 2', 'k = 4', 'k = 6', 'k = 8'],
    newAnswer: 1,
    newAnswerText: 'k = 4',
  },
  {
    filePath: 'src/data/satMathChapter4QuestionsPart1.ts',
    id: 'ch4-q15',
    newOptions: ['-8', '-4', '4', '8'],
    newAnswer: 2,
    newAnswerText: '4',
  },
  {
    filePath: 'src/data/satMathChapter4QuestionsPart2.ts',
    id: 'ch4-q32',
    newOptions: ['3', '6', '9', '12'],
    newAnswer: 1,
    newAnswerText: '6',
  },
  {
    filePath: 'src/data/satMathChapter4QuestionsPart2.ts',
    id: 'ch4-q47',
    newOptions: ['x = 1', 'x = 2', 'x = 3', 'x = 4'],
    newAnswer: 2,
    newAnswerText: 'x = 3',
  },

  // Math Chapter 5 Percentages & Ratios:
  {
    filePath: 'src/data/satMathChapter5QuestionsPart1.ts',
    id: 'ch5-q12',
    newOptions: ['2 liters', '3 liters', '4 liters', '5 liters'],
    newAnswer: 1,
    newAnswerText: '3 liters',
  },
  {
    filePath: 'src/data/satMathChapter5QuestionsPart2.ts',
    id: 'ch5-q38',
    newOptions: ['15%', '25%', '35%', '45%'],
    newAnswer: 1,
    newAnswerText: '25%',
  },

  // Math Chapter 6 Inequalities:
  {
    filePath: 'src/data/satMathChapter6QuestionsPart1.ts',
    id: 'ch6-q1',
    newOptions: ['x < -3', 'x > 3', 'x <= 3', 'x >= -3'],
    newAnswer: 1,
    newAnswerText: 'x > 3',
  },
  {
    filePath: 'src/data/satMathChapter6QuestionsPart1.ts',
    id: 'ch6-q16',
    newOptions: ['(1, 2)', '(2, 5)', '(3, 8)', '(4, 11)'],
    newAnswer: 1,
    newAnswerText: '(2, 5)',
  },

  // Math Chapter 7 Trig & Geometry:
  {
    filePath: 'src/data/satMathChapter7Questions.ts',
    id: 'ch7-ex-q68',
    newOptions: ['1/4', '1/2', '√3/2', '1'],
    newAnswer: 1,
    newAnswerText: '1/2',
  },
  {
    filePath: 'src/data/satMathChapter7Questions.ts',
    id: 'ch7-ex-q101',
    newOptions: ['6', '10', '12', '16'],
    newAnswer: 1,
    newAnswerText: '10',
  },

  // Math Chapter 11 Data Reading:
  {
    filePath: 'src/data/satMathChapter11Questions.ts',
    id: 'ch11-q14',
    newOptions: ['Positively skewed (tail to the right)', 'Negatively skewed (tail to the left)', 'Symmetric bell curve', 'Uniform flat distribution'],
    newAnswer: 0,
    newAnswerText: 'Positively skewed (tail to the right)',
  },

  // ==========================================
  // 4. PRACTICE DRILLS (DRILLS 1 TO 5)
  // ==========================================

  // Drill 1:
  {
    filePath: 'src/data/satDrills/drill1Data.ts',
    id: 'd1_m_m1_q9',
    newOptions: ['A) 1', 'B) 3', 'C) 4', 'D) 7'],
    newAnswer: 'C',
  },
  {
    filePath: 'src/data/satDrills/drill1Module2.ts',
    id: 'd1_rw_m2h_q9',
    newOptions: ['A) was detectable', 'B) were detectable', 'C) is detectable', 'D) being detectable'],
    newAnswer: 'A',
  },
  {
    filePath: 'src/data/satDrills/drill1Module2.ts',
    id: 'd1_m_m2l_q9',
    newOptions: ['A) 3', 'B) 6', 'C) 9', 'D) 12'],
    newAnswer: 'B',
  },
  {
    filePath: 'src/data/satDrills/drill1Module2.ts',
    id: 'd1_m_m2l_q13',
    newOptions: ['A) 5', 'B) 8', 'C) 11', 'D) 14'],
    newAnswer: 'A',
  },

  // Drill 2:
  {
    filePath: 'src/data/satDrills/drill2Data.ts',
    id: 'd2_rw_m1_q6',
    newOptions: ['A) were hailed', 'B) have been hailed', 'C) was hailed', 'D) are hailed'],
    newAnswer: 'C',
  },
  {
    filePath: 'src/data/satDrills/drill2Data.ts',
    id: 'd2_m_m1_q13',
    newOptions: ['A) 2.5', 'B) 4', 'C) 5.5', 'D) 7'],
    newAnswer: 'B',
  },
  {
    filePath: 'src/data/satDrills/drill2Data.ts',
    id: 'd2_m_m1_q18',
    newOptions: ['A) 1', 'B) 2.5', 'C) 4', 'D) 6'],
    newAnswer: 'C',
  },
  {
    filePath: 'src/data/satDrills/drill2Module2.ts',
    id: 'd2_rw_m2h_q7',
    newOptions: ['A) ; ', 'B) , ', 'C) whereas', 'D) with'],
    newAnswer: 'A',
  },
  {
    filePath: 'src/data/satDrills/drill2Module2.ts',
    id: 'd2_rw_m2h_q8',
    newOptions: ['A) would have yielded', 'B) will yield', 'C) are yielding', 'D) have yielded'],
    newAnswer: 'A',
  },
  {
    filePath: 'src/data/satDrills/drill2Module2.ts',
    id: 'd2_rw_m2h_q20',
    newOptions: ['A) were able to replicate', 'B) was able to replicate', 'C) is able to replicate', 'D) has been able to replicate'],
    newAnswer: 'A',
  },
  {
    filePath: 'src/data/satDrills/drill2Module2.ts',
    id: 'd2_m_m2l_q1',
    newOptions: ['A) 2', 'B) 6', 'C) 8', 'D) 12'],
    newAnswer: 'B',
  },
  {
    filePath: 'src/data/satDrills/drill2Module2.ts',
    id: 'd2_m_m2l_q3',
    newOptions: ['A) 2', 'B) 4', 'C) 7', 'D) 9'],
    newAnswer: 'B',
  },
  {
    filePath: 'src/data/satDrills/drill2Module2.ts',
    id: 'd2_m_m2l_q10',
    newOptions: ['A) 2', 'B) 5', 'C) 8', 'D) 11'],
    newAnswer: 'A',
  },

  // Drill 3:
  {
    filePath: 'src/data/satDrills/drill3Data.ts',
    id: 'd3_rw_m1_q26',
    newOptions: ['A) are housed', 'B) is housed', 'C) were housed', 'D) have been housed'],
    newAnswer: 'B',
  },
  {
    filePath: 'src/data/satDrills/drill3Data.ts',
    id: 'd3_m_m1_q3',
    newOptions: ['A) -3', 'B) 0', 'C) 3', 'D) 6'],
    newAnswer: 'C',
  },
  {
    filePath: 'src/data/satDrills/drill3Data.ts',
    id: 'd3_m_m1_q18',
    newOptions: ['A) 1.4', 'B) 3.5', 'C) 5.6', 'D) 7.2'],
    newAnswer: 'B',
  },
  {
    filePath: 'src/data/satDrills/drill3Module2.ts',
    id: 'd3_rw_m2l_q8',
    newOptions: ['A) is presenting', 'B) are presenting', 'C) were presenting', 'D) being presented'],
    newAnswer: 'A',
  },
  {
    filePath: 'src/data/satDrills/drill3Module2.ts',
    id: 'd3_rw_m2l_q15',
    newOptions: ['A) is equipped with', 'B) are equipped with', 'C) were equipped with', 'D) being equipped with'],
    newAnswer: 'A',
  },
  {
    filePath: 'src/data/satDrills/drill3Module2.ts',
    id: 'd3_rw_m2l_q20',
    newOptions: ['A) their', 'B) his or her', 'C) they\'re', 'D) theirs'],
    newAnswer: 'A',
  },
  {
    filePath: 'src/data/satDrills/drill3Module2.ts',
    id: 'd3_rw_m2h_q9',
    newOptions: ['A) was convinced', 'B) were convinced', 'C) are convinced', 'D) being convinced'],
    newAnswer: 'A',
  },
  {
    filePath: 'src/data/satDrills/drill3Module2.ts',
    id: 'd3_rw_m2h_q24',
    newOptions: ['A) ; ', 'B) , ', 'C) while', 'D) with'],
    newAnswer: 'A',
  },
  {
    filePath: 'src/data/satDrills/drill3Module2.ts',
    id: 'd3_m_m2l_q3',
    newOptions: ['A) 1', 'B) 4', 'C) 6', 'D) 8'],
    newAnswer: 'B',
  },
  {
    filePath: 'src/data/satDrills/drill3Module2.ts',
    id: 'd3_m_m2l_q11',
    newOptions: ['A) 2', 'B) 4', 'C) 6', 'D) 8'],
    newAnswer: 'B',
  },
  {
    filePath: 'src/data/satDrills/drill3Module2.ts',
    id: 'd3_m_m2h_q9',
    newOptions: ['A) 3', 'B) 5', 'C) 7', 'D) 9'],
    newAnswer: 'A',
  },

  // Drill 4:
  {
    filePath: 'src/data/satDrills/drill4Data.ts',
    id: 'd4_rw_m1_q13',
    newOptions: ['A) was present', 'B) were present', 'C) is present', 'D) has been present'],
    newAnswer: 'B',
  },
  {
    filePath: 'src/data/satDrills/drill4Data.ts',
    id: 'd4_m_m1_q2',
    newOptions: ['A) 3', 'B) 5', 'C) 7', 'D) 9'],
    newAnswer: 'C',
  },
  {
    filePath: 'src/data/satDrills/drill4Data.ts',
    id: 'd4_m_m1_q6',
    newOptions: ['A) 2', 'B) 3', 'C) 4', 'D) 6'],
    newAnswer: 'C',
  },
  {
    filePath: 'src/data/satDrills/drill4Data.ts',
    id: 'd4_m_m1_q8',
    newOptions: ['A) 3', 'B) 7', 'C) 10', 'D) 14'],
    newAnswer: 'B',
  },
  {
    filePath: 'src/data/satDrills/drill4Module2.ts',
    id: 'd4_rw_m2l_q8',
    newOptions: ['A) is displayed', 'B) are displayed', 'C) were displayed', 'D) being displayed'],
    newAnswer: 'A',
  },
  {
    filePath: 'src/data/satDrills/drill4Module2.ts',
    id: 'd4_rw_m2l_q20',
    newOptions: ['A) their individual', 'B) its individual', 'C) they\'re', 'D) theirs'],
    newAnswer: 'A',
  },
  {
    filePath: 'src/data/satDrills/drill4Module2.ts',
    id: 'd4_rw_m2h_q9',
    newOptions: ['A) were satisfied', 'B) was satisfied', 'C) is satisfied', 'D) has been satisfied'],
    newAnswer: 'A',
  },
  {
    filePath: 'src/data/satDrills/drill4Module2.ts',
    id: 'd4_rw_m2h_q20',
    newOptions: ['A) were consulted', 'B) was consulted', 'C) is consulted', 'D) has been consulted'],
    newAnswer: 'A',
  },
  {
    filePath: 'src/data/satDrills/drill4Module2.ts',
    id: 'd4_m_m2l_q7',
    newOptions: ['A) 6', 'B) 9', 'C) 12', 'D) 16'],
    newAnswer: 'C',
  },
  {
    filePath: 'src/data/satDrills/drill4Module2.ts',
    id: 'd4_m_m2l_q11',
    newOptions: ['A) 1', 'B) 3', 'C) 5', 'D) 7'],
    newAnswer: 'B',
  },
  {
    filePath: 'src/data/satDrills/drill4Module2.ts',
    id: 'd4_m_m2h_q7',
    newOptions: ['A) 4/5', 'B) 3/4', 'C) 5/3', 'D) 1/2'],
    newAnswer: 'A',
  },

  // Drill 5:
  {
    filePath: 'src/data/satDrills/drill5Data.ts',
    id: 'd5_rw_m1_q22',
    newOptions: ['A) were available', 'B) was available', 'C) is available', 'D) has been available'],
    newAnswer: 'A',
  },
  {
    filePath: 'src/data/satDrills/drill5Data.ts',
    id: 'd5_m_m1_q2',
    newOptions: ['A) 4', 'B) 5', 'C) 7', 'D) 10'],
    newAnswer: 'C',
  },
  {
    filePath: 'src/data/satDrills/drill5Data.ts',
    id: 'd5_m_m1_q6',
    newOptions: ['A) 3', 'B) 6', 'C) 8', 'D) 11'],
    newAnswer: 'A',
  },
  {
    filePath: 'src/data/satDrills/drill5Module2.ts',
    id: 'd5_rw_m2l_q20',
    newOptions: ['A) their assigned', 'B) its assigned', 'C) they\'re', 'D) theirs'],
    newAnswer: 'A',
  },
  {
    filePath: 'src/data/satDrills/drill5Module2.ts',
    id: 'd5_rw_m2h_q9',
    newOptions: ['A) were prepared', 'B) was prepared', 'C) is prepared', 'D) has been prepared'],
    newAnswer: 'A',
  },
  {
    filePath: 'src/data/satDrills/drill5Module2.ts',
    id: 'd5_rw_m2h_q20',
    newOptions: ['A) were dispatched', 'B) was dispatched', 'C) is dispatched', 'D) has been dispatched'],
    newAnswer: 'A',
  },
  {
    filePath: 'src/data/satDrills/drill5Module2.ts',
    id: 'd5_m_m2l_q1',
    newOptions: ['A) 3', 'B) 6', 'C) 9', 'D) 12'],
    newAnswer: 'B',
  },
  {
    filePath: 'src/data/satDrills/drill5Module2.ts',
    id: 'd5_m_m2l_q3',
    newOptions: ['A) 2', 'B) 4', 'C) 6', 'D) 8'],
    newAnswer: 'B',
  },
  {
    filePath: 'src/data/satDrills/drill5Module2.ts',
    id: 'd5_m_m2l_q11',
    newOptions: ['A) 1', 'B) 3', 'C) 5', 'D) 6'],
    newAnswer: 'B',
  },
];

console.log(`Total rules to apply: ${updates.length}`);

// Execute updates
let successCount = 0;
for (const rule of updates) {
  const fullPath = path.join(process.cwd(), rule.filePath);
  if (!fs.existsSync(fullPath)) {
    console.error(`File missing: ${rule.filePath}`);
    continue;
  }
  let content = fs.readFileSync(fullPath, 'utf-8');

  // Search for the ID
  const idRegex = new RegExp(`(id|number):\\s*['"]?${rule.id}['"]?`);
  const match = content.match(idRegex);
  if (!match || match.index === undefined) {
    console.warn(`Could not locate ${rule.id} in ${rule.filePath}`);
    continue;
  }

  const idx = match.index;
  const searchSub = content.substring(idx, idx + 2500);

  // Match options or choices
  const optMatch = searchSub.match(/(options|choices):\s*\[[\s\S]*?\]/);
  if (!optMatch) {
    console.warn(`Could not match options for ${rule.id} in ${rule.filePath}`);
    continue;
  }

  const oldOptStr = optMatch[0];
  const fieldName = optMatch[1];
  const newOptStr = `${fieldName}: ${JSON.stringify(rule.newOptions)}`;

  const fullOptIdx = content.indexOf(oldOptStr, idx);
  if (fullOptIdx === -1) {
    console.warn(`Could not find fullOptIdx for ${rule.id}`);
    continue;
  }

  content = content.substring(0, fullOptIdx) + newOptStr + content.substring(fullOptIdx + oldOptStr.length);

  // If newAnswer is provided, update
  if (rule.newAnswer !== undefined) {
    const ansSub = content.substring(idx, idx + 2500);
    const ansMatch = ansSub.match(/(correctAnswer|correctIndex):\s*([^,\n}]+)/);
    if (ansMatch) {
      const oldAnsStr = ansMatch[0];
      const ansField = ansMatch[1];
      const newAnsVal = typeof rule.newAnswer === 'string' ? `'${rule.newAnswer}'` : String(rule.newAnswer);
      const newAnsStr = `${ansField}: ${newAnsVal}`;
      const ansIdx = content.indexOf(oldAnsStr, idx);
      if (ansIdx !== -1) {
        content = content.substring(0, ansIdx) + newAnsStr + content.substring(ansIdx + oldAnsStr.length);
      }
    }
  }

  // If newAnswerText is provided, update
  if (rule.newAnswerText !== undefined) {
    const ansTextSub = content.substring(idx, idx + 2500);
    const ansTextMatch = ansTextSub.match(/correctAnswerText:\s*('[^']*'|"[^"]*")/);
    if (ansTextMatch) {
      const oldAnsTextStr = ansTextMatch[0];
      const newAnsTextStr = `correctAnswerText: ${JSON.stringify(rule.newAnswerText)}`;
      const ansTextIdx = content.indexOf(oldAnsTextStr, idx);
      if (ansTextIdx !== -1) {
        content = content.substring(0, ansTextIdx) + newAnsTextStr + content.substring(ansTextIdx + oldAnsTextStr.length);
      }
    }
  }

  fs.writeFileSync(fullPath, content, 'utf-8');
  successCount++;
  console.log(`Applied update for ${rule.id} in ${rule.filePath}`);
}

console.log(`Successfully applied ${successCount}/${updates.length} question updates.`);
