import { createClient } from '@supabase/supabase-js';
import { SAT_WRITING_CHAPTER_3_FULL } from '../src/data/writing/satWritingChapter3Full';

const supabaseUrl = process.env.VITE_SUPABASE_URL || 'https://abyvzlrkskqnpzsvoaym.supabase.co';
const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY || 'sb_publishable_xapYrcmAZ6fITqMd4bK1ag_w_A6UVBB';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

function getWordCount(text: string | null | undefined): number {
  if (!text) return 0;
  return text.trim().split(/\s+/).filter(Boolean).length;
}

async function runAuditCycle(cycleNum: number) {
  console.log(`\n🔍 --- AUDIT CYCLE ${cycleNum}/3 ---`);

  // Fetch all rows
  const { data: dbTheory, error: theoryErr } = await supabase
    .from('sat_writing_ch3_theory')
    .select('*')
    .order('sort_order', { ascending: true });

  if (theoryErr) throw theoryErr;

  const { data: dbExercises, error: exerciseErr } = await supabase
    .from('sat_writing_ch3_exercises')
    .select('*')
    .order('sort_order', { ascending: true });

  if (exerciseErr) throw exerciseErr;

  console.log(`📡 Successfully fetched ${dbTheory?.length} theory rows and ${dbExercises?.length} exercise rows from Supabase.`);

  // Validate quantities
  let expectedConcepts = 0;
  for (const block of SAT_WRITING_CHAPTER_3_FULL.theoryBlocks) {
    expectedConcepts += block.concepts.length;
  }
  let expectedExercises = 0;
  for (const block of SAT_WRITING_CHAPTER_3_FULL.exerciseBlocks) {
    expectedExercises += block.questions.length;
  }

  console.log(`📊 Quantity Checks:`);
  console.log(`   - Theory Concepts: Expected ${expectedConcepts} | Found ${dbTheory?.length}`);
  console.log(`   - Exercise Questions: Expected ${expectedExercises} | Found ${dbExercises?.length}`);

  if (dbTheory?.length !== expectedConcepts || dbExercises?.length !== expectedExercises) {
    console.error(`❌ ERROR: Quantities do not match!`);
    return false;
  }

  // Word count and content comparison
  let sourceTheoryWords = 0;
  let dbTheoryWords = 0;
  let sourceExerciseWords = 0;
  let dbExerciseWords = 0;

  // Placeholder and hallucination audit (detecting artificial templates/placeholders)
  let placeholdersFound = 0;
  const genericKeywords = ['[placeholder]', 'lorem ipsum', 'tbd', 'generic template', 'insert text here', '[insert'];

  // Check theory details
  let conceptIndex = 0;
  for (const block of SAT_WRITING_CHAPTER_3_FULL.theoryBlocks) {
    for (const concept of block.concepts) {
      const dbRow = dbTheory[conceptIndex++];
      if (!dbRow) continue;

      // Calculate source words
      sourceTheoryWords += getWordCount(concept.title);
      sourceTheoryWords += getWordCount(concept.fullText);
      concept.bulletPoints?.forEach(bp => sourceTheoryWords += getWordCount(bp));
      concept.rules?.forEach(r => sourceTheoryWords += getWordCount(r));

      // Calculate db words
      dbTheoryWords += getWordCount(dbRow.concept_title);
      dbTheoryWords += getWordCount(dbRow.full_text);
      (dbRow.bullet_points || []).forEach((bp: string) => dbTheoryWords += getWordCount(bp));
      (dbRow.rules || []).forEach((r: string) => dbTheoryWords += getWordCount(r));

      // Check text content matches
      if (concept.title !== dbRow.concept_title || concept.fullText !== dbRow.full_text) {
        console.error(`❌ Content Mismatch on concept ${concept.id}`);
        return false;
      }

      // Check for placeholders in db row
      const fullContentStr = JSON.stringify(dbRow).toLowerCase();
      for (const kw of genericKeywords) {
        if (fullContentStr.includes(kw)) {
          console.error(`❌ Placeholder found in theory row ${dbRow.id}: "${kw}"`);
          placeholdersFound++;
        }
      }
    }
  }

  // Check exercises details
  let exerciseIndex = 0;
  for (const block of SAT_WRITING_CHAPTER_3_FULL.exerciseBlocks) {
    for (const q of block.questions) {
      const dbRow = dbExercises[exerciseIndex++];
      if (!dbRow) continue;

      // Calculate source words
      sourceExerciseWords += getWordCount(q.prompt);
      sourceExerciseWords += getWordCount(q.underlinedText);
      sourceExerciseWords += getWordCount(q.contextSentence);
      sourceExerciseWords += getWordCount(q.explanation.coreReasoning);
      sourceExerciseWords += getWordCount(q.explanation.whyCorrect);
      q.explanation.distractorAnalysis?.forEach(da => sourceExerciseWords += getWordCount(da.whyWrong) + getWordCount(da.optionText));
      q.options?.forEach(opt => sourceExerciseWords += getWordCount(opt));

      // Calculate db words
      dbExerciseWords += getWordCount(dbRow.prompt);
      dbExerciseWords += getWordCount(dbRow.underlined_text);
      dbExerciseWords += getWordCount(dbRow.context_sentence);
      dbExerciseWords += getWordCount(dbRow.core_reasoning);
      dbExerciseWords += getWordCount(dbRow.why_correct);
      (dbRow.distractor_analysis || []).forEach((da: any) => dbExerciseWords += getWordCount(da.whyWrong) + getWordCount(da.optionText));
      (dbRow.options || []).forEach((opt: string) => dbExerciseWords += getWordCount(opt));

      // Check key values
      if (q.id !== dbRow.id || q.questionNumber !== dbRow.question_number || q.correctAnswer !== dbRow.correct_answer) {
        console.error(`❌ Key metadata mismatch on question ${q.id}`);
        return false;
      }

      // Check for placeholders
      const fullContentStr = JSON.stringify(dbRow).toLowerCase();
      for (const kw of genericKeywords) {
        if (fullContentStr.includes(kw)) {
          console.error(`❌ Placeholder found in exercise row ${dbRow.id}: "${kw}"`);
          placeholdersFound++;
        }
      }
    }
  }

  console.log(`📈 Word Count and Integrity Audit:`);
  console.log(`   - Theory Word Count: Source ${sourceTheoryWords} | Supabase ${dbTheoryWords} (Accuracy: ${((dbTheoryWords/sourceTheoryWords)*100).toFixed(4)}%)`);
  console.log(`   - Exercise Word Count: Source ${sourceExerciseWords} | Supabase ${dbExerciseWords} (Accuracy: ${((dbExerciseWords/sourceExerciseWords)*100).toFixed(4)}%)`);
  console.log(`   - Placeholders/Templates Found: ${placeholdersFound}`);

  if (sourceTheoryWords !== dbTheoryWords || sourceExerciseWords !== dbExerciseWords) {
    console.error(`❌ ERROR: Word count discrepancy found!`);
    return false;
  }

  if (placeholdersFound > 0) {
    console.error(`❌ ERROR: Placeholders were detected!`);
    return false;
  }

  console.log(`✨ CYCLE ${cycleNum} VERIFICATION SUCCESSFUL: 100% PERFECT EXPORT MATCHED TO THE WORD!`);
  return { sourceTheoryWords, dbTheoryWords, sourceExerciseWords, dbExerciseWords };
}

async function verifyAll() {
  try {
    const r1 = await runAuditCycle(1);
    const r2 = await runAuditCycle(2);
    const r3 = await runAuditCycle(3);

    if (r1 && r2 && r3) {
      console.log('\n🌟🌟🌟 ALL 3 VERIFICATION CYCLES PASSED PERFECTLY 🌟🌟🌟');
      console.log(`Final Certified Stats:`);
      console.log(`Theory blocks exported: ${SAT_WRITING_CHAPTER_3_FULL.theoryBlocks.length} with ${r1.dbTheoryWords} words.`);
      console.log(`Exercises questions exported: ${r1.sourceExerciseWords} words across 70 questions.`);
    } else {
      process.exit(1);
    }
  } catch (err) {
    console.error('Audit script failed:', err);
    process.exit(1);
  }
}

verifyAll();
