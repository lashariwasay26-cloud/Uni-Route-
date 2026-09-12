import * as fs from 'fs';
import * as path from 'path';

interface Rule {
  filePath: string;
  id: string;
  newOptions: string[];
  newAnswer?: any;
  newAnswerText?: string;
}

const final37Rules: Rule[] = [
  // 1. Punctuation Group 1
  {
    filePath: 'src/data/writing/satWritingChapter1QuestionsPart1.ts',
    id: 'ex1-q10',
    newOptions: ['hypothesis,', 'hypothesis;', 'hypothesis:', 'hypothesis and'],
    newAnswer: 2,
  },
  {
    filePath: 'src/data/writing/satWritingChapter1QuestionsPart2.ts',
    id: 'ex5-q52',
    newOptions: ['curators,', 'curators;', 'curators:', 'curators and'],
    newAnswer: 0,
  },
  {
    filePath: 'src/data/writing/satWritingChapter1QuestionsPart2.ts',
    id: 'ex5-q53',
    newOptions: ['specimens,', 'specimens;', 'specimens:', 'specimens and'],
    newAnswer: 0,
  },
  {
    filePath: 'src/data/writing/satWritingChapter1QuestionsPart2.ts',
    id: 'ex7-q76',
    newOptions: ['compounds,', 'compounds:', 'compounds;', 'compounds and'],
    newAnswer: 1,
  },
  {
    filePath: 'src/data/writing/satWritingChapter1QuestionsPart2.ts',
    id: 'ex7-q78',
    newOptions: ['elements,', 'elements;', 'elements:', 'elements and'],
    newAnswer: 0,
  },
  {
    filePath: 'src/data/writing/satWritingChapter1QuestionsPart2.ts',
    id: 'ex7-q80',
    newOptions: ['materials,', 'materials;', 'materials:', 'materials and'],
    newAnswer: 0,
  },
  {
    filePath: 'src/data/writing/satWritingChapter1QuestionsPart2.ts',
    id: 'ex8-q93',
    newOptions: ['frequencies,', 'frequencies;', 'frequencies:', 'frequencies and'],
    newAnswer: 0,
  },

  // 2. Verb Group 2
  {
    filePath: 'src/data/writing/satWritingChapter1QuestionsPart2.ts',
    id: 'ex6-q66',
    newOptions: ['are being studied', 'have been studied', 'is studied', 'were studied'],
    newAnswer: 0,
  },
  {
    filePath: 'src/data/writing/satWritingChapter3QuestionsPart1.ts',
    id: 'ch3-q1',
    newOptions: ['are essential', 'is essential', 'were essential', 'have been essential'],
    newAnswer: 1,
  },
  {
    filePath: 'src/data/writing/satWritingChapter3QuestionsPart1.ts',
    id: 'ch3-q6',
    newOptions: ['are available', 'have been available', 'were available', 'is available'],
    newAnswer: 2,
  },
  {
    filePath: 'src/data/writing/satWritingChapter3QuestionsPart1.ts',
    id: 'ch3-q12',
    newOptions: ['are documented', 'have been documented', 'were documented', 'is documented'],
    newAnswer: 2,
  },
  {
    filePath: 'src/data/writing/satWritingChapter3QuestionsPart2.ts',
    id: 'ch3-q67',
    newOptions: ['are recorded', 'is recorded', 'were recorded', 'have been recorded'],
    newAnswer: 1,
  },
  {
    filePath: 'src/data/writing/satWritingChapter4QuestionsPart1.ts',
    id: 'ch4-q23',
    newOptions: ['are maintained', 'is maintained', 'were maintained', 'have been maintained'],
    newAnswer: 1,
  },

  // 3. Verb Group 3
  {
    filePath: 'src/data/writing/satWritingChapter1QuestionsPart2.ts',
    id: 'ex6-q69',
    newOptions: ['has been confirmed', 'is confirmed', 'was confirmed', 'were confirmed'],
    newAnswer: 1,
  },
  {
    filePath: 'src/data/writing/satWritingChapter3QuestionsPart2.ts',
    id: 'ch3-q61',
    newOptions: ['has been established', 'is established', 'was established', 'were established'],
    newAnswer: 1,
  },
  {
    filePath: 'src/data/writing/satWritingChapter3QuestionsPart2.ts',
    id: 'ch3-q62',
    newOptions: ['has been recognized', 'is recognized', 'was recognized', 'were recognized'],
    newAnswer: 1,
  },

  // 4. Verb Group 4
  {
    filePath: 'src/data/writing/satWritingChapter1QuestionsPart2.ts',
    id: 'ex7-q84',
    newOptions: ['has shown', 'have shown', 'is showing', 'was showing'],
    newAnswer: 1,
  },
  {
    filePath: 'src/data/writing/satWritingChapter3QuestionsPart1.ts',
    id: 'ch3-q7',
    newOptions: ['has demonstrated', 'have demonstrated', 'is demonstrating', 'was demonstrated'],
    newAnswer: 1,
  },
  {
    filePath: 'src/data/writing/satWritingChapter3QuestionsPart1.ts',
    id: 'ch3-q16',
    newOptions: ['has provided', 'have provided', 'is providing', 'was provided'],
    newAnswer: 1,
  },

  // 5. Verb Group 5
  {
    filePath: 'src/data/writing/satWritingChapter1QuestionsPart2.ts',
    id: 'ex7-q86',
    newOptions: ['has stood', 'is standing', 'stand firmly', 'stands firmly'],
    newAnswer: 0,
  },
  {
    filePath: 'src/data/writing/satWritingChapter3QuestionsPart1.ts',
    id: 'ch3-q4',
    newOptions: ['has remained', 'is remaining', 'remain intact', 'remains intact'],
    newAnswer: 1,
  },

  // 6. Verb Group 6
  {
    filePath: 'src/data/writing/satWritingChapter1QuestionsPart2.ts',
    id: 'ex8-q95',
    newOptions: ['are present', 'has been present', 'have been present', 'were present'],
    newAnswer: 0,
  },
  {
    filePath: 'src/data/writing/satWritingChapter3QuestionsPart1.ts',
    id: 'ch3-q8',
    newOptions: ['are active', 'has been active', 'have been active', 'were active'],
    newAnswer: 1,
  },
  {
    filePath: 'src/data/writing/satWritingChapter3QuestionsPart1.ts',
    id: 'ch3-q13',
    newOptions: ['are relevant', 'has been relevant', 'have been relevant', 'were relevant'],
    newAnswer: 1,
  },
  {
    filePath: 'src/data/writing/satWritingChapter3QuestionsPart1.ts',
    id: 'ch3-q14',
    newOptions: ['are valid', 'has been valid', 'were valid', 'have been valid'],
    newAnswer: 2,
  },
  {
    filePath: 'src/data/writing/satWritingChapter3QuestionsPart1.ts',
    id: 'ch3-q15',
    newOptions: ['are sufficient', 'has been sufficient', 'have been sufficient', 'were sufficient'],
    newAnswer: 1,
  },
  {
    filePath: 'src/data/writing/satWritingChapter3QuestionsPart1.ts',
    id: 'ch3-q17',
    newOptions: ['are consistent', 'has been consistent', 'have been consistent', 'were consistent'],
    newAnswer: 1,
  },

  // 7. Transitions Group 7
  {
    filePath: 'src/data/writing/satWritingChapter2QuestionsPart2.ts',
    id: 'ch2-ex21-q13',
    newOptions: [', furthermore', '; furthermore,', 'furthermore', 'furthermore,'],
    newAnswer: 0,
  },

  // 8. Homophones Group 8
  {
    filePath: 'src/data/writing/satWritingChapter2QuestionsPart2.ts',
    id: 'ch2-ex21-q19',
    newOptions: ['their', 'its', 'there', "they're"],
    newAnswer: 0,
  },

  // 9. Punctuation Group 9
  {
    filePath: 'src/data/writing/satWritingChapter2QuestionsPart2.ts',
    id: 'ch2-ex20-q25',
    newOptions: ['discovery,', 'discovery:', 'discovery;', 'discovery—'],
    newAnswer: 0,
  },
  {
    filePath: 'src/data/writing/satWritingChapter2QuestionsPart2.ts',
    id: 'ch2-ex21-q18',
    newOptions: ['structure,', 'structure:', 'structure;', 'structure—'],
    newAnswer: 0,
  },

  // 10. Punctuation Group 10
  {
    filePath: 'src/data/writing/satWritingChapter2QuestionsPart2.ts',
    id: 'ch2-ex21-q22',
    newOptions: ['samples,', 'samples:', 'samples;', 'samples—and'],
    newAnswer: 0,
  },
  {
    filePath: 'src/data/writing/satWritingChapter2QuestionsPart2.ts',
    id: 'ch2-ex21-q24',
    newOptions: ['layers,', 'layers:', 'layers;', 'layers—and'],
    newAnswer: 0,
  },
  {
    filePath: 'src/data/writing/satWritingChapter2QuestionsPart2.ts',
    id: 'ch2-ex21-q32',
    newOptions: ['readings,', 'readings:', 'readings;', 'readings—and'],
    newAnswer: 0,
  },

  // 11. Pronoun Group 11
  {
    filePath: 'src/data/writing/satWritingChapter5QuestionsPart2.ts',
    id: 'ch5-q60',
    newOptions: ['he actively', 'him actively', 'himself actively', 'his active'],
    newAnswer: 0,
  },

  // 12. Pronoun Group 12
  {
    filePath: 'src/data/writing/satWritingChapter3QuestionsPart1.ts',
    id: 'ch3-q33',
    newOptions: ['its own', "it's own", 'their own', "they're own"],
    newAnswer: 1,
  },
  {
    filePath: 'src/data/writing/satWritingChapter5QuestionsPart2.ts',
    id: 'ch5-q54',
    newOptions: ['its distinctive', "it's distinctive", 'their distinctive', "they're distinctive"],
    newAnswer: 0,
  },

  // 13. Relative Pronoun Group 13
  {
    filePath: 'src/data/writing/satWritingChapter3QuestionsPart1.ts',
    id: 'ch3-q38',
    newOptions: ['who', 'whom', 'whose', 'that'],
    newAnswer: 1,
  },
  {
    filePath: 'src/data/writing/satWritingChapter4QuestionsPart1.ts',
    id: 'ch4-q4',
    newOptions: ['who', 'which', 'whom', 'whose'],
    newAnswer: 2,
  },
  {
    filePath: 'src/data/writing/satWritingChapter5QuestionsPart2.ts',
    id: 'ch5-q55',
    newOptions: ['whose', 'who', 'whom', 'which'],
    newAnswer: 0,
  },

  // 14. First-Person Pronoun Group 14
  {
    filePath: 'src/data/writing/satWritingChapter3QuestionsPart1.ts',
    id: 'ch3-q36',
    newOptions: ['myself', 'me', 'I', 'my own'],
    newAnswer: 1,
  },
  {
    filePath: 'src/data/writing/satWritingChapter3QuestionsPart1.ts',
    id: 'ch3-q40',
    newOptions: ['my colleague and I', 'my colleague and me', 'myself and my colleague', 'me and my colleague'],
    newAnswer: 1,
  },
  {
    filePath: 'src/data/writing/satWritingChapter5QuestionsPart2.ts',
    id: 'ch5-q57',
    newOptions: ['I personally', 'me personally', 'mine personally', 'myself personally'],
    newAnswer: 0,
  },

  // 15. Pronoun Group 15
  {
    filePath: 'src/data/writing/satWritingChapter3QuestionsPart2.ts',
    id: 'ch3-q69',
    newOptions: ['she herself', 'her herself', 'herself', 'her own'],
    newAnswer: 1,
  },

  // 16. Demonstrative Group 16
  {
    filePath: 'src/data/writing/satWritingChapter4QuestionsPart2.ts',
    id: 'ch4-q67',
    newOptions: ['that of', 'those of', 'it of', 'them of'],
    newAnswer: 1,
  },

  // 17. Parallelism Group 17
  {
    filePath: 'src/data/writing/satWritingChapter4QuestionsPart2.ts',
    id: 'ch4-q43',
    newOptions: ['classification of', 'classified', 'classifying', 'to classify'],
    newAnswer: 0,
  },

  // 18. Demonstrative Group 18
  {
    filePath: 'src/data/writing/satWritingChapter4QuestionsPart1.ts',
    id: 'ch4-q37',
    newOptions: ['that of the specimen', 'their specimens', 'those of the specimen', 'them specimens'],
    newAnswer: 1,
  },

  // 19. Transitions Group 19
  {
    filePath: 'src/data/writing/satWritingChapter6QuestionsPart3.ts',
    id: 'ch6-q91',
    newOptions: ['Accordingly,', 'For example,', 'Moreover,', 'Conversely,'],
    newAnswer: 0,
  },

  // 20. Sentence Position Group 20, 21, 22
  {
    filePath: 'src/data/writing/satWritingChapter6QuestionsPart3.ts',
    id: 'ch6-q93',
    newOptions: ['at the beginning of sentence 1.', 'immediately before sentence 2.', 'after sentence 4.', 'leave in current position.'],
    newAnswer: 0,
  },
  {
    filePath: 'src/data/writing/satWritingChapter6QuestionsPart1.ts',
    id: 'ch6-q38',
    newOptions: ['following sentence 1', 'following sentence 2', 'following sentence 3', 'following sentence 4'],
    newAnswer: 2,
  },
  {
    filePath: 'src/data/writing/satWritingChapter6QuestionsPart3.ts',
    id: 'ch6-q99',
    newOptions: ['prior to sentence 1.', 'prior to sentence 2.', 'prior to sentence 3.', 'leave in original place.'],
    newAnswer: 0,
  },

  // 21. Math Groups
  {
    filePath: 'src/data/satMathChapter1Questions.ts',
    id: 'ch1-q46',
    newOptions: ['6', '7', '8', '11'],
    newAnswer: 2,
    newAnswerText: '8',
  },
  {
    filePath: 'src/data/satMathChapter7QuestionsPart1.ts',
    id: 'ch7-ex-q38',
    newOptions: ['6 cm', '7 cm', '8 cm', '9 cm'],
    newAnswer: 1,
    newAnswerText: '7 cm',
  },
  {
    filePath: 'src/data/satMathChapter2Questions.ts',
    id: 'ch2-q38',
    newOptions: ['2', '5', '6', '8'],
    newAnswer: 0,
    newAnswerText: '2',
  },
  {
    filePath: 'src/data/satMathChapter7QuestionsPart1.ts',
    id: 'ch7-ex-q15',
    newOptions: ['2 units', '4 units', '6 units', '8 units'],
    newAnswer: 3,
    newAnswerText: '8 units',
  },
  {
    filePath: 'src/data/satMathChapter2Questions.ts',
    id: 'ch2-q39',
    newOptions: ['10', '12', '14', '16'],
    newAnswer: 0,
    newAnswerText: '10',
  },
  {
    filePath: 'src/data/satMathChapter7QuestionsPart4.ts',
    id: 'ch7-ex-q113',
    newOptions: ['4 cm', '6 cm', '8 cm', '10 cm'],
    newAnswer: 1,
    newAnswerText: '6 cm',
  },
  {
    filePath: 'src/data/satMathChapter3Questions.ts',
    id: 'ch3-q7',
    newOptions: ['8', '12', '15', '20'],
    newAnswer: 1,
    newAnswerText: '12',
  },
  {
    filePath: 'src/data/satMathChapter7QuestionsPart2.ts',
    id: 'ch7-ex-q49',
    newOptions: ['8 cm', '10 cm', '12 cm', '15 cm'],
    newAnswer: 2,
    newAnswerText: '12 cm',
  },
  {
    filePath: 'src/data/satMathChapter3Questions.ts',
    id: 'ch3-q9',
    newOptions: ['1', '3', '5', '7'],
    newAnswer: 0,
    newAnswerText: '1',
  },
  {
    filePath: 'src/data/satMathChapter7QuestionsPart3.ts',
    id: 'ch7-ex-q77',
    newOptions: ['1/2', '2', '3', '4'],
    newAnswer: 1,
    newAnswerText: '2',
  },
  {
    filePath: 'src/data/satMathChapter4QuestionsPart1.ts',
    id: 'ch4-q2',
    newOptions: ['-6', '-8', '6', '8'],
    newAnswer: 1,
    newAnswerText: '-8',
  },
  {
    filePath: 'src/data/satMathChapter4QuestionsPart1.ts',
    id: 'ch4-q27',
    newOptions: ['3', '5', '8', '12'],
    newAnswer: 2,
    newAnswerText: '8',
  },
  {
    filePath: 'src/data/satMathChapter4QuestionsPart2.ts',
    id: 'ch4-q59',
    newOptions: ['3', '5', '7', '11'],
    newAnswer: 1,
    newAnswerText: '5',
  },
  {
    filePath: 'src/data/satMathChapter4QuestionsPart2.ts',
    id: 'ch4-q41',
    newOptions: ['3', '6', '9', '15'],
    newAnswer: 1,
    newAnswerText: '6',
  },
  {
    filePath: 'src/data/satMathChapter6QuestionsPart2.ts',
    id: 'ch6-q36',
    newOptions: ['Region I (Quadrant I)', 'Region II (Quadrant II)', 'Region III (Quadrant III)', 'Region IV (Quadrant IV)'],
    newAnswer: 0,
    newAnswerText: 'Region I (Quadrant I)',
  },
  {
    filePath: 'src/data/satMathChapter6QuestionsPart2.ts',
    id: 'ch6-q21',
    newOptions: ['$x \\le -4$', '$x \\ge -4$', '$x < -2$', '$x > -2$'],
    newAnswer: 0,
    newAnswerText: '$x \\le -4$',
  },
  {
    filePath: 'src/data/satMathChapter7QuestionsPart2.ts',
    id: 'ch7-ex-q32',
    newOptions: ['6', '8', '10', '14'],
    newAnswer: 3,
    newAnswerText: '14',
  },
  {
    filePath: 'src/data/satMathChapter7QuestionsPart4.ts',
    id: 'ch7-ex-q115',
    newOptions: ['6 cm', '8 cm', '10 cm', '12 cm'],
    newAnswer: 1,
    newAnswerText: '8 cm',
  },
  {
    filePath: 'src/data/satMathChapter7QuestionsPart2.ts',
    id: 'ch7-ex-q48',
    newOptions: ['7', '9', '10', '12'],
    newAnswer: 2,
    newAnswerText: '10',
  },
  {
    filePath: 'src/data/satMathChapter7QuestionsPart3.ts',
    id: 'ch7-ex-q75',
    newOptions: ['8 cm', '9 cm', '10 cm', '12 cm'],
    newAnswer: 2,
    newAnswerText: '10 cm',
  },
  {
    filePath: 'src/data/satMathChapter10QuestionsPart1.ts',
    id: 'ch10-q4',
    newOptions: ['8 values', '9 values', '10 values', '12 values'],
    newAnswer: 1,
    newAnswerText: '9 values',
  },

  // 22. Drill Math
  {
    filePath: 'src/data/satDrills/drill1Module2.ts',
    id: 'd1_m_m2l_q9',
    newOptions: ['A) 4', 'B) 6', 'C) 10', 'D) 15'],
    newAnswer: 'B',
  },
  {
    filePath: 'src/data/satDrills/drill3Module2.ts',
    id: 'd3_m_m2l_q11',
    newOptions: ['A) 1', 'B) 4', 'C) 7', 'D) 10'],
    newAnswer: 'B',
  },
  {
    filePath: 'src/data/satDrills/drill3Module2.ts',
    id: 'd3_m_m2h_q9',
    newOptions: ['A) 3', 'B) 6', 'C) 8', 'D) 12'],
    newAnswer: 'A',
  },
];

console.log(`Executing final ${final37Rules.length} rules...`);

let count = 0;
for (const rule of final37Rules) {
  const fullPath = path.join(process.cwd(), rule.filePath);
  if (!fs.existsSync(fullPath)) {
    console.error(`File missing: ${rule.filePath}`);
    continue;
  }
  let content = fs.readFileSync(fullPath, 'utf-8');

  const idRegex = new RegExp(`(id|number):\\s*['"]?${rule.id}['"]?`);
  const match = content.match(idRegex);
  if (!match || match.index === undefined) {
    console.warn(`Could not locate ${rule.id} in ${rule.filePath}`);
    continue;
  }

  const idx = match.index;
  const searchSub = content.substring(idx, idx + 2500);

  const optMatch = searchSub.match(/(options|choices):\s*\[[\s\S]*?\]/);
  if (!optMatch) {
    console.warn(`Could not match options for ${rule.id} in ${rule.filePath}`);
    continue;
  }

  const oldOptStr = optMatch[0];
  const fieldName = optMatch[1];
  const newOptStr = `${fieldName}: ${JSON.stringify(rule.newOptions)}`;

  const fullOptIdx = content.indexOf(oldOptStr, idx);
  content = content.substring(0, fullOptIdx) + newOptStr + content.substring(fullOptIdx + oldOptStr.length);

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
  count++;
}

console.log(`Successfully updated ${count}/${final37Rules.length} questions.`);
