import { createClient } from '@supabase/supabase-js';
import { SAT_WRITING_CHAPTER_3_FULL } from '../src/data/writing/satWritingChapter3Full';

const supabaseUrl = process.env.VITE_SUPABASE_URL || 'https://abyvzlrkskqnpzsvoaym.supabase.co';
const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY || 'sb_publishable_xapYrcmAZ6fITqMd4bK1ag_w_A6UVBB';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function seedChapter3() {
  console.log('🚀 Starting SAT Writing Chapter 3 Database Seeding...');
  console.log(`Supabase URL: ${supabaseUrl}`);

  // 1. Process and format Theory Blocks
  console.log('📦 Processing Theory Blocks...');
  const theoryRows: any[] = [];
  let theorySortOrder = 1;

  for (const block of SAT_WRITING_CHAPTER_3_FULL.theoryBlocks) {
    for (const concept of block.concepts) {
      theoryRows.push({
        id: concept.id,
        block_number: block.blockNumber,
        block_title: block.title,
        block_description: block.description || null,
        concept_title: concept.title,
        section_number: concept.sectionNumber || null,
        full_text: concept.fullText,
        bullet_points: concept.bulletPoints || [],
        rules: concept.rules || [],
        examples: concept.examples || [],
        tables: concept.tables || [],
        checklist: concept.checklist || [],
        traps: concept.traps || [],
        shortcuts: concept.shortcuts || [],
        sort_order: theorySortOrder++
      });
    }
  }

  // 2. Process and format Exercise Blocks
  console.log('📦 Processing Exercise Questions...');
  const exerciseRows: any[] = [];
  let exerciseSortOrder = 1;

  for (const block of SAT_WRITING_CHAPTER_3_FULL.exerciseBlocks) {
    for (const question of block.questions) {
      exerciseRows.push({
        id: question.id,
        block_number: block.blockNumber,
        block_title: block.title,
        block_description: block.description || null,
        question_number: question.questionNumber,
        difficulty: question.difficulty,
        skill_tag: question.skillTag,
        prompt: question.prompt,
        underlined_text: question.underlinedText || null,
        context_sentence: question.contextSentence || null,
        data_figure: question.dataFigure || null,
        options: question.options,
        correct_answer: question.correctAnswer,
        core_reasoning: question.explanation.coreReasoning,
        educational_objective: question.explanation.educationalObjective || null,
        before_and_after_analysis: question.explanation.beforeAndAfterAnalysis || null,
        why_correct: question.explanation.whyCorrect,
        distractor_analysis: question.explanation.distractorAnalysis || [],
        elimination_shortcut: question.explanation.eliminationShortcut || null,
        trap_to_avoid: question.explanation.trapToAvoid || null,
        score_guide: block.scoreGuide || [],
        block_checklists: block.checklists || [],
        sort_order: exerciseSortOrder++
      });
    }
  }

  console.log(`\n⏳ Attempting to seed ${theoryRows.length} theory concepts and ${exerciseRows.length} exercise questions...`);

  try {
    // Theory Seeding
    console.log('📤 Uploading theory blocks...');
    await supabase.from('sat_writing_ch3_theory').delete().neq('id', 'placeholder');

    const theoryChunkSize = 10;
    for (let i = 0; i < theoryRows.length; i += theoryChunkSize) {
      const chunk = theoryRows.slice(i, i + theoryChunkSize);
      const { error } = await supabase.from('sat_writing_ch3_theory').insert(chunk);
      if (error) {
        throw new Error(`Theory insert error at index ${i}: ${JSON.stringify(error)}`);
      }
      console.log(`   Processed theory concepts ${i + 1} to ${Math.min(i + theoryChunkSize, theoryRows.length)}`);
    }
    console.log('✅ Theory blocks seeded successfully!');

    // Exercises Seeding
    console.log('📤 Uploading exercise questions...');
    await supabase.from('sat_writing_ch3_exercises').delete().neq('id', 'placeholder');

    const exerciseChunkSize = 10;
    for (let i = 0; i < exerciseRows.length; i += exerciseChunkSize) {
      const chunk = exerciseRows.slice(i, i + exerciseChunkSize);
      const { error } = await supabase.from('sat_writing_ch3_exercises').insert(chunk);
      if (error) {
        throw new Error(`Exercise insert error at index ${i}: ${JSON.stringify(error)}`);
      }
      console.log(`   Processed exercise questions ${i + 1} to ${Math.min(i + exerciseChunkSize, exerciseRows.length)}`);
    }
    console.log('✅ Exercise questions seeded successfully!');
    console.log('\n🎉 ALL CHAPTER 3 DATA SUCCESSFULLY SEEDED TO SUPABASE! 🎉');

  } catch (err: any) {
    console.error('\n❌ Seeding failed with error:', err.message || err);
    process.exit(1);
  }
}

seedChapter3();
