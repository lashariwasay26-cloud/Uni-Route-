/**
 * Utility to shuffle option positions for Multiple Choice Questions (MCQs)
 * across SAT Math, Reading, Writing, and Practice Drills.
 * 
 * Ensures:
 * 1. Balanced distribution of correct answer positions (A, B, C, D) across exercises.
 * 2. Elimination of repetitive patterns (e.g. consecutive identical correct option letters).
 * 3. Deterministic permutation based on question ID and exercise index so user progress is preserved.
 */

function hashString(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

const OPTION_LETTERS = ['A', 'B', 'C', 'D', 'E', 'F'];

export function shuffleQuestionOptions<T extends Record<string, any>>(
  question: T,
  questionIndexInExercise: number = 0
): T {
  if (!question) return question;

  // 1. Determine options array and original correct index
  let optionsArray: any[] | null = null;
  let isChoicesProp = false;
  if (Array.isArray(question.options)) {
    optionsArray = question.options;
  } else if (Array.isArray(question.choices)) {
    optionsArray = question.choices;
    isChoicesProp = true;
  }

  if (!optionsArray || optionsArray.length <= 1) {
    return question;
  }

  const numOptions = optionsArray.length;

  // Determine original correct index
  let originalCorrectIndex = 0;
  if (typeof question.correctIndex === 'number') {
    originalCorrectIndex = question.correctIndex;
  } else if (typeof question.correctAnswerIndex === 'number') {
    originalCorrectIndex = question.correctAnswerIndex;
  } else if (typeof question.correctAnswer === 'number') {
    originalCorrectIndex = question.correctAnswer;
  } else if (typeof question.correctAnswer === 'string') {
    const letterIdx = OPTION_LETTERS.indexOf(question.correctAnswer.trim().toUpperCase());
    if (letterIdx !== -1) {
      originalCorrectIndex = letterIdx;
    }
  }

  const qId = question.id || `q_${questionIndexInExercise}`;

  // Target rotation to cycle correct answer position across questions
  const targetRotation = [0, 2, 1, 3, 2, 0, 3, 1];
  const targetCorrectIndex = (targetRotation[questionIndexInExercise % targetRotation.length] + (hashString(qId) % numOptions)) % numOptions;

  // Build index permutation array
  const permutation: number[] = Array.from({ length: numOptions }, (_, i) => i);

  // Swap so originalCorrectIndex lands at targetCorrectIndex
  const currentPosOfCorrect = permutation.indexOf(originalCorrectIndex);
  const itemAtTarget = permutation[targetCorrectIndex];
  permutation[targetCorrectIndex] = originalCorrectIndex;
  permutation[currentPosOfCorrect] = itemAtTarget;

  // Deterministic shuffle remaining positions
  const seed = hashString(qId);
  for (let i = 0; i < numOptions; i++) {
    if (i === targetCorrectIndex) continue;
    const swapTarget = (seed + i * 3) % numOptions;
    if (swapTarget !== targetCorrectIndex) {
      const temp = permutation[i];
      permutation[i] = permutation[swapTarget];
      permutation[swapTarget] = temp;
    }
  }

  // Create new options
  const newOptions = permutation.map((origIdx, newIdx) => {
    const item = optionsArray![origIdx];
    if (typeof item === 'object' && item !== null && 'label' in item) {
      // For ReadingQuestionOption { label: 'A', text: '...' }
      return {
        ...item,
        label: OPTION_LETTERS[newIdx] || String.fromCharCode(65 + newIdx)
      };
    }
    return item;
  });

  const newCorrectIndex = permutation.indexOf(originalCorrectIndex);
  const newCorrectLetter = OPTION_LETTERS[newCorrectIndex] || String.fromCharCode(65 + newCorrectIndex);

  // Map optionTables & optionDiagrams if present
  let newOptionTables = question.optionTables;
  if (Array.isArray(question.optionTables) && question.optionTables.length === numOptions) {
    newOptionTables = permutation.map((origIdx) => question.optionTables![origIdx]);
  }

  let newOptionDiagrams = question.optionDiagrams;
  if (Array.isArray(question.optionDiagrams) && question.optionDiagrams.length === numOptions) {
    newOptionDiagrams = permutation.map((origIdx) => question.optionDiagrams![origIdx]);
  }

  // Return new question object matching original structure
  const updated: any = {
    ...question,
    ...(isChoicesProp ? { choices: newOptions } : { options: newOptions }),
    ...(newOptionTables ? { optionTables: newOptionTables } : {}),
    ...(newOptionDiagrams ? { optionDiagrams: newOptionDiagrams } : {})
  };

  if ('correctIndex' in question) {
    updated.correctIndex = newCorrectIndex;
  }
  if ('correctAnswerIndex' in question) {
    updated.correctAnswerIndex = newCorrectIndex;
  }
  if ('correctAnswer' in question) {
    if (typeof question.correctAnswer === 'number') {
      updated.correctAnswer = newCorrectIndex;
    } else if (typeof question.correctAnswer === 'string') {
      updated.correctAnswer = newCorrectLetter;
    }
  }

  return updated as T;
}

export function shuffleExerciseGroupQuestions<T>(questions: T[]): T[] {
  if (!Array.isArray(questions)) return [];
  return questions.map((q, idx) => shuffleQuestionOptions(q as any, idx));
}
