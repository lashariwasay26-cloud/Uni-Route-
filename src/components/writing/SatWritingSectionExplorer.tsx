import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { saveSatPracticeProgress } from '../../lib/userStorage';
import { BookOpen, CheckCircle2, XCircle, ChevronRight, HelpCircle, Sparkles, Layers, ShieldCheck, Target, ArrowRight, ArrowLeft, RefreshCw, Award, Lightbulb, AlertTriangle, Zap, FileText, Check } from 'lucide-react';
import { SAT_WRITING_CHAPTER_1_FULL } from '../../data/writing/satWritingChapter1Full';
import { SAT_WRITING_CHAPTER_2_FULL } from '../../data/writing/satWritingChapter2Full';
import { SAT_WRITING_CHAPTER_3_FULL } from '../../data/writing/satWritingChapter3Full';
import { SAT_WRITING_CHAPTER_4_FULL } from '../../data/writing/satWritingChapter4Full';
import { SAT_WRITING_CHAPTER_5_FULL } from '../../data/writing/satWritingChapter5Full';
import { SAT_WRITING_CHAPTER_6_FULL } from '../../data/writing/satWritingChapter6Full';
import { SAT_WRITING_CHAPTER_7_FULL } from '../../data/writing/satWritingChapter7Full';
import { WritingExerciseQuestion } from '../../data/writing/satWritingTypes';

interface TheoryParsedBlock {
  type: 'normal' | 'example' | 'trap' | 'elimination' | 'principle' | 'checkpoint';
  title: string;
  content: string;
}

function cleanTitle(title: string): string {
  if (!title) return '';
  return title
    .replace(/^(?:Theory|Exercise)?\s*Block\s*\d+\s*[\—\-\–\:]*\s*/i, '')
    .replace(/^Exercise\s*\d+\s*[\—\-\–\:]*\s*/i, '')
    .replace(/\s*\((?:Sections?|Concepts?)\s*[^\)]+\)/gi, '')
    .replace(/^(?:Sections?|Concepts?|Section|Concept)\s*[0-9\–\-\s,\&A-Za-z]+[\—\-\–\:]\s*/i, '')
    .replace(/^(?:SECTION|CONCEPT|BLOCK|THEORY BLOCK|EXERCISE BLOCK|SECTIONS|CONCEPTS)\s*[0-9\–\-\s,\&A-Za-z]+[\—\-\–\:]\s*/i, '')
    .replace(/^(?:SECTION|CONCEPT|BLOCK|THEORY BLOCK|EXERCISE BLOCK|SECTIONS|CONCEPTS)\s*[0-9\–\-\s,\&]+(?:\:|\b)\s*/i, '')
    // Strip arbitrary catalog / legacy master-rule numbers like "379. ", "385. ", "400. ", "409. ", "411. ", "416. ", "423. ", "1. ", etc.
    .replace(/^\d+\.\s+/, '')
    .replace(/^\d+\s*[\:\—\–\-]\s+/, '')
    .replace(/\bBlock\b\s*/gi, 'Section ')
    .replace(/Section\s+\d+\s+Mastery/gi, 'Mastery')
    .replace(/Section\s+\d+\s+Checkpoint/gi, 'Checkpoint')
    .replace(/Section\s+Checkpoint/gi, 'Checkpoint')
    .replace(/Section\s+Mastery/gi, 'Mastery')
    .replace(/\s+/g, ' ')
    .trim();
}

function cleanConceptTitle(title: string, index: number): string {
  if (!title) return `${index}. Concept Overview`;
  const cleaned = cleanTitle(title);
  const withoutLeadingNum = cleaned.replace(/^\d+[\.\:\—\–\-]\s*/, '').trim();
  return `${index}. ${withoutLeadingNum || cleaned}`;
}

function cleanFullText(text: string): string {
  if (!text) return '';
  return text
    .replace(/^(?:SECTION|CONCEPT|BLOCK|THEORY BLOCK|EXERCISE BLOCK|SECTIONS|CONCEPTS)\s*[0-9\–\-\s,\&A-Za-z]*[\—\-\–]\s*/gim, '')
    .replace(/^(?:SECTION|CONCEPT|BLOCK|THEORY BLOCK|EXERCISE BLOCK|SECTIONS|CONCEPTS)\s*[0-9\–\-\s,\&]+(?:\:|\b)/gim, '')
    .replace(/#+\s*BLOCK\s*\d*\s*CHECKPOINT/gi, '# SECTION CHECKPOINT')
    .replace(/#+\s*\d+\.\s+/gi, '### ')
    .replace(/\bBlock\b/g, 'Section')
    .trim();
}

function parseTheoryText(text: string): TheoryParsedBlock[] {
  const lines = text.split('\n');
  const blocks: TheoryParsedBlock[] = [];
  let currentBlock: TheoryParsedBlock = { type: 'normal', title: '', content: '' };
  let currentLines: string[] = [];

  const flushBlock = () => {
    const content = currentLines.join('\n').trim();
    if (content) {
      blocks.push({
        type: currentBlock.type,
        title: currentBlock.title,
        content: content,
      });
    }
    currentLines = [];
  };

  const isHeader = (line: string) => {
    const raw = line.trim();
    if (!raw) return null;

    const isMarkdownHeading = /^#+\s+/.test(raw);
    const isBoldHeading = /^\*\*[^*]+\*\*:?$/.test(raw);
    const isExampleCallout = /^(?:For\s+)?[Ee]xample\s*[\:\–\—\>0-9]/i.test(raw) || /^Consider[\:\–\—\>]/i.test(raw);
    const isCheckpointHeading = /^#*\s*BLOCK\s*\d*\s*CHECKPOINT/i.test(raw);
    const isIncorrectOrCorrect = /^\*?(?:Incorrect|Correct)\*?\s*[\:\–\—]/i.test(raw);
    const isOptionHeading = /^###?\s*Option\s*\d+/i.test(raw);

    const cleanLine = raw
      .replace(/^#+\s*/, '')
      .replace(/^>\s*/, '')
      .replace(/^[\*\-\s]+/, '')
      .replace(/\*+/g, '')
      .trim();

    if (!cleanLine) return null;

    const isColonTerminated = cleanLine.endsWith(':');

    const isKnownHeaderLabel =
      isMarkdownHeading ||
      isBoldHeading ||
      isExampleCallout ||
      isCheckpointHeading ||
      isIncorrectOrCorrect ||
      isOptionHeading ||
      /^(SAT TRAP|TRAP|IMPORTANT WARNING|COMMON ERROR|WARNING|DANGLING|MISPLACED|FAULTY|ILLOGICAL|AMBIGUOUS|PITFALL|MISCONCEPTION|DANGEROUS)/i.test(cleanLine) ||
      /^(EXAMPLE|EXAMPLES|WORKED EXAMPLE|ELITE EXAMPLE|ADVANCED WORKED EXAMPLE|WRONG EXAMPLE|WRONG|COMPARE|CLEAR VS|CORRECT VS|BEFORE VS|WORKED WALKTHROUGH|SENTENCE EXAMPLE|SAMPLE|CASE STUDY|PASSAGE ANALYSIS)/i.test(cleanLine) ||
      /^(TRICK|TRICKS|ELIMINATION TECHNIQUE|SAT ELIMINATION|ELIMINATION METHOD|ELITE LESSON|FAST RECOGNITION|THE FAST TEST|SHORTCUT|SAT SHORTCUT|THE TECHNIQUE|ELIMINATION|THE LAYERING METHOD|LOGICAL ACTOR|\"WHO DID IT\?\"|REMOVAL TEST|SUBJECT-OBJECT TEST|FAST METHOD|ADVANCED METHOD|RECOGNITION TECHNIQUE|SPEED HEURISTIC|TEST|INVENTORY|CHECKPOINT)/i.test(cleanLine) ||
      /^(MASTER PRINCIPLE|THE CORE TEST|CORE MODIFIER|CORE-SENTENCE|IMPORTANT DISTINCTION|IMPORTANT|WHY THIS MATTERS|DECISION RULE|PAIRING PRINCIPLE|RULE|MASTER RULE|CORE PRINCIPLE|NON-NEGOTIABLE|GOLDEN LAW|KEY RULE|SYSTEM)/i.test(cleanLine) ||
      (isColonTerminated && /^[A-Z0-9\s—–\-\(\)\"\']{3,65}\:$/i.test(cleanLine));

    if (!isKnownHeaderLabel) {
      return null;
    }

    // 0. Checkpoint
    if (/CHECKPOINT|YOU SHOULD NOW BE ABLE TO/i.test(cleanLine) || isCheckpointHeading) {
      return { type: 'checkpoint' as const, title: cleanLine };
    }

    // 1. Red Box (Trap / Warning / Pitfall)
    if (/TRAP|WARNING|ERROR|PITFALL|MISCONCEPTION|DANGEROUS|DANGLING|FAULTY|ILLOGICAL|AMBIGUOUS|MISTAKE|WRONG/i.test(cleanLine)) {
      return { type: 'trap' as const, title: cleanLine };
    }

    // 2. Example Box (Blue Outlining / Solved Demonstration)
    if (
      /EXAMPLE|COMPARE|WORKED|WALKTHROUGH|SAMPLE|CASE STUDY|INCORRECT|CORRECT|OPTION\s*\d+/i.test(cleanLine) ||
      isExampleCallout ||
      isIncorrectOrCorrect ||
      isOptionHeading
    ) {
      return { type: 'example' as const, title: cleanLine };
    }

    // 3. Sky Blue Box (Trick / Method / Shortcut / Test)
    if (/TECHNIQUE|TRICK|SHORTCUT|FAST|METHOD|TEST|HEURISTIC|ELIMINATION|RECOGNITION|INVENTORY|RULE OF THUMB/i.test(cleanLine)) {
      return { type: 'elimination' as const, title: cleanLine };
    }

    // 4. Green Box (Master Principle / Core Law / Rule)
    return { type: 'principle' as const, title: cleanLine };
  };

  lines.forEach(line => {
    const header = isHeader(line);
    if (header) {
      flushBlock();
      currentBlock = { type: header.type, title: header.title, content: '' };
    } else {
      currentLines.push(line);
    }
  });

  flushBlock();
  return blocks;
}

function cleanInlineMarkdown(str: string): React.ReactNode {
  if (!str) return null;
  let cleaned = str
    .replace(/^#+\s*/, '')
    .replace(/^>\s*/, '')
    .replace(/\$\s*\\xrightarrow\{\\text\{([^}]+)\}\}\s*\$/g, ' ── [$1] ──> ')
    .replace(/\\xrightarrow\{\\text\{([^}]+)\}\}/g, ' ── [$1] ──> ')
    .replace(/\\xrightarrow\{([^}]+)\}/g, ' ── [$1] ──> ')
    .replace(/\$\s*\\rightarrow\s*\$/g, ' → ')
    .replace(/\\rightarrow/g, ' → ')
    .replace(/\$\s*\\leftarrow\s*\$/g, ' ← ')
    .replace(/\\leftarrow/g, ' ← ')
    .replace(/\$\s*\\Rightarrow\s*\$/g, ' ⇒ ')
    .replace(/\\Rightarrow/g, ' ⇒ ')
    .replace(/\\ge\b/g, '≥')
    .replace(/\\le\b/g, '≤')
    .replace(/\\text\{([^}]+)\}/g, '$1')
    .replace(/\\\s+/g, ' ')
    .replace(/\$([^$]+)\$/g, '$1');

  const parts = cleaned.split(/(\*\*.*?\*\*|\*.*?\*)/g);
  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith('**') && part.endsWith('**') && part.length >= 4) {
          return <strong key={i} className="font-extrabold text-slate-950">{part.slice(2, -2)}</strong>;
        }
        if (part.startsWith('*') && part.endsWith('*') && part.length >= 2 && !part.startsWith('**')) {
          return <em key={i} className="italic text-slate-900">{part.slice(1, -1)}</em>;
        }
        return part;
      })}
    </>
  );
}

function renderFormattedContent(content: string) {
  if (!content) return null;
  const rawLines = content.split('\n');

  // Group markdown table lines together if present
  const elements: React.ReactNode[] = [];
  let tableBuffer: string[] = [];

  const flushTable = (keyPrefix: number) => {
    if (tableBuffer.length < 2) {
      tableBuffer.forEach((tblLine, tblIdx) => {
        elements.push(
          <p key={`${keyPrefix}-t-${tblIdx}`} className="text-xs sm:text-sm font-medium text-slate-900 leading-relaxed my-0.5">
            {cleanInlineMarkdown(tblLine)}
          </p>
        );
      });
      tableBuffer = [];
      return;
    }

    const headerLine = tableBuffer[0];
    const headers = headerLine.split('|').map(s => s.trim()).filter(Boolean);
    const dataRows = tableBuffer.slice(2).map(r => r.split('|').map(s => s.trim()).filter(Boolean));

    elements.push(
      <div key={`table-${keyPrefix}`} className="my-4 overflow-x-auto rounded-2xl border-2 border-slate-300/80 bg-white shadow-2xs">
        <table className="w-full text-left text-xs sm:text-sm border-collapse">
          <thead>
            <tr className="bg-slate-900 text-white font-extrabold border-b border-slate-900">
              {headers.map((h, hIdx) => (
                <th key={hIdx} className="py-2.5 px-3.5 border-r border-slate-700 last:border-r-0 tracking-wide text-xs sm:text-sm">
                  {cleanInlineMarkdown(h)}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {dataRows.map((row, rIdx) => (
              <tr key={rIdx} className={rIdx % 2 === 0 ? 'bg-white hover:bg-slate-50' : 'bg-slate-50/70 hover:bg-slate-100/70'}>
                {row.map((cell, cIdx) => (
                  <td key={cIdx} className="py-2.5 px-3.5 border-r border-slate-200 last:border-r-0 font-medium text-slate-900">
                    {cleanInlineMarkdown(cell)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
    tableBuffer = [];
  };

  rawLines.forEach((line, idx) => {
    const trimmed = line.trim();

    // Check if table row
    if (trimmed.startsWith('|') && trimmed.endsWith('|') && trimmed.includes('|')) {
      tableBuffer.push(trimmed);
      return;
    } else if (tableBuffer.length > 0) {
      flushTable(idx);
    }

    if (!trimmed) {
      elements.push(<div key={idx} className="h-1.5" />);
      return;
    }

    // Subheaders starting with ### or ## or #
    if (/^#+\s+/.test(trimmed)) {
      const title = trimmed.replace(/^#+\s+/, '');
      elements.push(
        <div key={idx} className="font-extrabold text-slate-950 text-xs sm:text-sm pt-2 pb-1 flex items-center gap-2 border-b border-slate-200">
          <span className="w-2 h-2 rounded-full bg-indigo-600 shrink-0"></span>
          <span>{cleanInlineMarkdown(title)}</span>
        </div>
      );
      return;
    }

    // Section or Step labels
    if ((/^([A-Z0-9\s—–\-\:\(\)]+)\:$/i.test(trimmed) && trimmed.length < 80) || /^STEP\s+\d+/i.test(trimmed)) {
      elements.push(
        <div key={idx} className="font-extrabold text-slate-950 text-xs sm:text-sm pt-1.5 pb-0.5 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 shrink-0"></span>
          <span>{cleanInlineMarkdown(trimmed)}</span>
        </div>
      );
      return;
    }

    // Blockquotes starting with > or quoted sentences
    if (
      /^>\s*/.test(trimmed) ||
      (trimmed.startsWith('"') && trimmed.length > 10) ||
      /^(Core|Correct|Incorrect|Subject|Verb|Object|Phrase|Clause)\:/i.test(trimmed) ||
      trimmed.includes('->')
    ) {
      const quoteText = trimmed.replace(/^>\s*/, '');
      elements.push(
        <div key={idx} className="my-1.5 p-3 sm:p-3.5 rounded-xl bg-white border border-slate-200/90 text-xs sm:text-sm font-bold text-slate-950 leading-relaxed shadow-2xs font-mono">
          {cleanInlineMarkdown(quoteText)}
        </div>
      );
      return;
    }

    // Numbered lists
    if (/^\d+[\.\)]\s+/.test(trimmed)) {
      const listText = trimmed.replace(/^\d+[\.\)]\s+/, '');
      const matchNum = trimmed.match(/^(\d+)[\.\)]/);
      const num = matchNum ? matchNum[1] : '';
      elements.push(
        <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-900 font-medium leading-relaxed pl-1 my-1">
          <span className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-800 font-extrabold text-[11px] flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
            {num}
          </span>
          <span className="flex-1 pt-0.5">{cleanInlineMarkdown(listText)}</span>
        </div>
      );
      return;
    }

    // Bullet lists
    if (/^[\*\-•]\s+/.test(trimmed)) {
      const listText = trimmed.replace(/^[\*\-•]\s+/, '');
      elements.push(
        <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-900 font-medium leading-relaxed pl-1 my-1">
          <span className="text-indigo-600 font-black text-base shrink-0 leading-none mt-0.5">•</span>
          <span className="flex-1">{cleanInlineMarkdown(listText)}</span>
        </div>
      );
      return;
    }

    // Standard text paragraph
    elements.push(
      <p key={idx} className="text-xs sm:text-sm font-medium text-slate-900 leading-relaxed my-0.5">
        {cleanInlineMarkdown(trimmed)}
      </p>
    );
  });

  if (tableBuffer.length > 0) {
    flushTable(rawLines.length);
  }

  return <div className="space-y-2.5">{elements}</div>;
}

function renderExampleContent(content: string) {
  const parts = content.split('\n');
  return (
    <div className="space-y-3">
      {parts.map((p, pIdx) => {
        const trimmed = p.trim();
        if (!trimmed) return null;

        // Subheaders like "### Option 1: Period" or "### Singular Possession"
        if (/^#+\s+/.test(trimmed)) {
          const title = trimmed.replace(/^#+\s+/, '');
          return (
            <div key={pIdx} className="font-extrabold text-slate-950 text-xs sm:text-sm pt-2 pb-1 flex items-center gap-2 border-b border-indigo-100">
              <span className="w-2 h-2 rounded-full bg-indigo-600 shrink-0"></span>
              <span>{cleanInlineMarkdown(title)}</span>
            </div>
          );
        }

        // Incorrect vs Correct comparison lines (e.g. "*Incorrect:* ..." or "Incorrect: ...")
        const isIncorrect = /^\*?Incorrect\*?\s*[\:\–\—]/i.test(trimmed);
        const isCorrect = /^\*?Correct\*?\s*[\:\–\—]/i.test(trimmed);

        if (isIncorrect) {
          const sentence = trimmed.replace(/^\*?Incorrect\*?\s*[\:\–\—]\s*/i, '');
          return (
            <div key={pIdx} className="space-y-1.5 my-2">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-rose-100 text-rose-900 border border-rose-200 flex items-center gap-1">
                  <XCircle className="w-3 h-3 text-rose-600 shrink-0" />
                  <span>✗ Incorrect / SAT Trap Construction</span>
                </span>
              </div>
              <div className="p-3.5 sm:p-4 rounded-xl bg-rose-50/40 border border-rose-200 text-xs sm:text-sm font-bold text-slate-950 leading-relaxed shadow-2xs font-mono">
                {cleanInlineMarkdown(sentence)}
              </div>
            </div>
          );
        }

        if (isCorrect) {
          const sentence = trimmed.replace(/^\*?Correct\*?\s*[\:\–\—]\s*/i, '');
          return (
            <div key={pIdx} className="space-y-1.5 my-2">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-900 border border-emerald-200 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
                  <span>✓ Correct Grammatical Structure</span>
                </span>
              </div>
              <div className="p-3.5 sm:p-4 rounded-xl bg-emerald-50/40 border border-emerald-200 text-xs sm:text-sm font-bold text-slate-950 leading-relaxed shadow-2xs font-mono">
                {cleanInlineMarkdown(sentence)}
              </div>
            </div>
          );
        }

        // Sentence / Core formula / Pattern
        if (
          trimmed.startsWith('"') ||
          trimmed.startsWith('>') ||
          trimmed.includes('->') ||
          trimmed.startsWith('Core:') ||
          trimmed.startsWith('Subject:') ||
          trimmed.startsWith('Verb:') ||
          trimmed.startsWith('Object:') ||
          trimmed.startsWith('Sentence:') ||
          trimmed.startsWith('Original:') ||
          trimmed.startsWith('Left:') ||
          trimmed.startsWith('Right:')
        ) {
          const text = trimmed
            .replace(/^>\s*/, '')
            .replace(/^(?:Sentence|Original|Left|Right)\s*[\:\–\—]\s*/i, '');
          const label = trimmed.startsWith('Left:')
            ? 'Left Clause Analysis'
            : trimmed.startsWith('Right:')
            ? 'Right Clause Analysis'
            : 'Sentence & Context Excerpt';

          return (
            <div key={pIdx} className="space-y-1.5 my-2">
              <div className="text-[11px] font-black uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5 text-slate-500" />
                <span>{label}</span>
              </div>
              <div className="p-3.5 sm:p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm font-bold text-slate-950 leading-relaxed shadow-2xs font-mono">
                {cleanInlineMarkdown(text || trimmed)}
              </div>
            </div>
          );
        }

        // Solution / Analysis paragraph
        if (
          trimmed.toLowerCase().startsWith('why:') ||
          trimmed.toLowerCase().startsWith('solution:') ||
          trimmed.toLowerCase().startsWith('proof:') ||
          trimmed.toLowerCase().startsWith('breakdown:') ||
          trimmed.toLowerCase().startsWith('analysis:') ||
          trimmed.toLowerCase().startsWith('explanation:') ||
          trimmed.toLowerCase().startsWith('takeaway:') ||
          trimmed.toLowerCase().startsWith('contains:') ||
          trimmed.toLowerCase().startsWith('core:') ||
          trimmed.toLowerCase().startsWith('therefore')
        ) {
          return (
            <div key={pIdx} className="p-3.5 sm:p-4 rounded-2xl bg-indigo-50/70 border border-indigo-200 space-y-2 text-xs sm:text-sm leading-relaxed shadow-2xs my-2">
              <div className="font-extrabold text-indigo-950 flex items-center gap-2 border-b border-indigo-200/80 pb-1.5">
                <Lightbulb className="w-4 h-4 text-indigo-700 shrink-0" />
                <span className="text-xs uppercase tracking-wide">SOLUTION WALKTHROUGH — STEP-BY-STEP GRAMMATICAL PROOF</span>
              </div>
              <p className="text-slate-900 font-medium pt-0.5">
                {cleanInlineMarkdown(trimmed)}
              </p>
            </div>
          );
        }

        // Sequential step flow with arrows
        if (/^[\-\>→]\s*/.test(trimmed)) {
          const stepText = trimmed.replace(/^[\-\>→\s]+/, '');
          return (
            <div
              key={pIdx}
              className="flex items-center gap-2 pl-3 py-1 text-xs sm:text-sm font-medium text-slate-800 font-sans"
            >
              <span className="text-indigo-600 font-bold">→</span>
              <span>{cleanInlineMarkdown(stepText)}</span>
            </div>
          );
        }

        // Numbered list items
        if (/^\d+[\.\)]\s+/.test(trimmed)) {
          const listText = trimmed.replace(/^\d+[\.\)]\s+/, '');
          const matchNum = trimmed.match(/^(\d+)[\.\)]/);
          const num = matchNum ? matchNum[1] : '';
          return (
            <div
              key={pIdx}
              className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-900 font-medium leading-relaxed pl-1 my-1.5 font-sans"
            >
              <span className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-800 font-extrabold text-[11px] flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                {num}
              </span>
              <span className="flex-1 pt-0.5">{cleanInlineMarkdown(listText)}</span>
            </div>
          );
        }

        // Bullet lists
        if (/^[\*\-•]\s+/.test(trimmed)) {
          const listText = trimmed.replace(/^[\*\-•]\s+/, '');
          return (
            <div
              key={pIdx}
              className="flex items-start gap-2 text-xs sm:text-sm text-slate-900 font-medium leading-relaxed pl-1 my-1 font-sans"
            >
              <span className="text-indigo-600 font-black text-base shrink-0 leading-none mt-0.5">•</span>
              <span className="flex-1">{cleanInlineMarkdown(listText)}</span>
            </div>
          );
        }

        return (
          <p key={pIdx} className="text-xs sm:text-sm font-medium text-slate-900 leading-relaxed my-0.5">
            {cleanInlineMarkdown(trimmed)}
          </p>
        );
      })}
    </div>
  );
}

type GroupedBlock =
  | { type: 'principle_group'; blocks: TheoryParsedBlock[] }
  | TheoryParsedBlock;

const FormattedConceptText: React.FC<{ text: string }> = ({ text }) => {
  const blocks = parseTheoryText(text);

  // Group adjacent 'principle' blocks into a single principle_group container
  const groupedBlocks = useMemo(() => {
    const result: GroupedBlock[] = [];
    let currentGroup: TheoryParsedBlock[] = [];

    const flushGroup = () => {
      if (currentGroup.length > 0) {
        if (currentGroup.length === 1) {
          result.push(currentGroup[0]);
        } else {
          result.push({
            type: 'principle_group',
            blocks: [...currentGroup],
          });
        }
        currentGroup = [];
      }
    };

    for (const block of blocks) {
      if (block.type === 'principle') {
        currentGroup.push(block);
      } else {
        flushGroup();
        result.push(block);
      }
    }
    flushGroup();

    return result;
  }, [blocks]);

  return (
    <div className="space-y-3">
      {groupedBlocks.map((group, idx) => {
        if ('blocks' in group && group.type === 'principle_group') {
          return (
            <div
              key={idx}
              className="bg-white border-2 border-emerald-500 rounded-2xl p-4 sm:p-5 sm:p-6 space-y-4 shadow-2xs my-3 text-slate-900"
            >
              <div className="flex items-center justify-between flex-wrap gap-2 border-b border-emerald-100 pb-3">
                <span className="text-xs sm:text-sm font-black text-slate-950 uppercase tracking-wider flex items-center gap-2">
                  <ShieldCheck className="w-4.5 h-4.5 text-emerald-600 shrink-0" />
                  <span>MASTER PRINCIPLES & CORE RULES</span>
                </span>
                <span className="text-[10px] font-black px-2.5 py-0.5 rounded-md bg-white text-emerald-700 border-2 border-emerald-500 uppercase tracking-wider shadow-2xs">
                  Core Rules
                </span>
              </div>

              <div className="space-y-4">
                {group.blocks.map((subBlock, subIdx) => (
                  <div
                    key={subIdx}
                    className={subIdx > 0 ? 'pt-3.5 border-t border-emerald-100/90 space-y-2' : 'space-y-2'}
                  >
                    {subBlock.title && (
                      <div className="text-xs font-black text-slate-950 uppercase tracking-wide flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 shrink-0"></span>
                        <span>{cleanInlineMarkdown(cleanTitle(subBlock.title))}</span>
                      </div>
                    )}
                    <div className="text-xs sm:text-sm text-slate-800 font-medium leading-relaxed">
                      {renderFormattedContent(subBlock.content)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        }

        const block = group as TheoryParsedBlock;

        // Worked Example: Reading-identical blue outlined solved demonstration card
        if (block.type === 'example') {
          return (
            <div
              key={idx}
              className="bg-white border-2 border-indigo-200/90 rounded-2xl sm:rounded-3xl p-4 sm:p-6 space-y-4 sm:space-y-5 shadow-xs my-3"
            >
              <div className="flex items-center justify-between flex-wrap gap-2 border-b border-indigo-100 pb-3">
                <div className="flex items-center gap-2">
                  <span className="p-1.5 rounded-lg bg-indigo-100 text-indigo-700 shrink-0">
                    <Sparkles className="w-4 h-4" />
                  </span>
                  <span className="text-xs sm:text-sm font-black text-indigo-950 uppercase tracking-wider">
                    {cleanTitle(block.title) || 'WORKED EXAMPLE & SOLVED DEMONSTRATION'}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-black px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-900 border border-emerald-300 uppercase tracking-wider flex items-center gap-1.5 shadow-2xs">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
                    <span>Solved Demonstration</span>
                  </span>
                </div>
              </div>
              <div className="text-xs sm:text-sm text-slate-900 leading-relaxed font-sans space-y-2">
                {renderExampleContent(block.content)}
              </div>
            </div>
          );
        }

        // Trap to Avoid: High-frequency SAT Trap card matching Reading & Chapter 1
        if (block.type === 'trap') {
          return (
            <div
              key={idx}
              className="bg-rose-50/90 border-2 border-rose-300 rounded-2xl p-4 sm:p-5 space-y-2.5 shadow-2xs my-3 text-rose-950"
            >
              <div className="flex items-center justify-between flex-wrap gap-2 border-b border-rose-200/80 pb-2">
                <span className="text-xs font-black text-rose-950 uppercase tracking-wider flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-rose-700 shrink-0" />
                  <span>{cleanTitle(block.title) || 'SAT TRAP & COMMON PITFALL'}</span>
                </span>
                <span className="text-[10px] font-black px-2.5 py-0.5 rounded-full bg-rose-200 text-rose-950 border border-rose-300 uppercase tracking-wider">
                  High-Frequency Trap
                </span>
              </div>
              <div className="text-xs sm:text-sm text-rose-950 font-medium leading-relaxed">
                {renderFormattedContent(block.content)}
              </div>
            </div>
          );
        }

        // Blue Box: SAT Tricks, Shortcuts, Speed Heuristics & Core Tests
        if (block.type === 'elimination') {
          return (
            <div
              key={idx}
              className="bg-sky-50/90 border-2 border-sky-400 rounded-2xl p-4 sm:p-5 space-y-2.5 shadow-2xs my-3 text-sky-950"
            >
              <div className="flex items-center justify-between flex-wrap gap-2 border-b border-sky-200/80 pb-2">
                <span className="text-xs font-black text-sky-950 uppercase tracking-wider flex items-center gap-2">
                  <Zap className="w-4 h-4 text-sky-700 shrink-0" />
                  <span>{cleanTitle(block.title) || 'SAT SPEED HEURISTIC & TRICK'}</span>
                </span>
                <span className="text-[10px] font-black px-2.5 py-0.5 rounded-full bg-sky-200 text-sky-950 border border-sky-300 uppercase tracking-wider">
                  Blue Box Method
                </span>
              </div>
              <div className="text-xs sm:text-sm text-sky-950 font-medium leading-relaxed">
                {renderFormattedContent(block.content)}
              </div>
            </div>
          );
        }

        // Green Outlined Box: Master Principles & Core Rules
        if (block.type === 'principle') {
          return (
            <div
              key={idx}
              className="bg-white border-2 border-emerald-500 rounded-2xl p-4 sm:p-5 space-y-2.5 shadow-2xs my-3 text-slate-900"
            >
              <div className="flex items-center justify-between flex-wrap gap-2 border-b border-emerald-100 pb-2">
                <span className="text-xs font-black text-slate-950 uppercase tracking-wider flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{cleanTitle(block.title) || 'MASTER PRINCIPLE & CORE RULE'}</span>
                </span>
                <span className="text-[10px] font-black px-2.5 py-0.5 rounded-md bg-white text-emerald-700 border-2 border-emerald-500 uppercase tracking-wider shadow-2xs">
                  Core Rule
                </span>
              </div>
              <div className="text-xs sm:text-sm text-slate-800 font-medium leading-relaxed">
                {renderFormattedContent(block.content)}
              </div>
            </div>
          );
        }

        // Checkpoint Box: Section Validation & Checkpoint
        if (block.type === 'checkpoint') {
          return (
            <div
              key={idx}
              className="bg-white border-2 border-emerald-500 rounded-2xl p-4 sm:p-5 space-y-2.5 shadow-2xs my-3 text-slate-900"
            >
              <div className="flex items-center justify-between flex-wrap gap-2 border-b border-emerald-100 pb-2">
                <span className="text-xs font-black text-slate-950 uppercase tracking-wider flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{cleanTitle(block.title) || 'SECTION CHECKPOINT & MASTERY VALIDATION'}</span>
                </span>
                <span className="text-[10px] font-black px-2.5 py-0.5 rounded-md bg-white text-emerald-700 border-2 border-emerald-500 uppercase tracking-wider shadow-2xs">
                  Mastery Checkpoint
                </span>
              </div>
              <div className="text-xs sm:text-sm text-slate-800 font-medium leading-relaxed">
                {renderFormattedContent(block.content)}
              </div>
            </div>
          );
        }

        // Standard Reading-identical clean white card container
        return (
          <div key={idx} className="bg-white/95 border border-slate-200/90 rounded-2xl p-4 sm:p-5 shadow-2xs my-3 space-y-2.5">
            {block.title && (
              <div className="font-extrabold text-slate-950 text-xs sm:text-sm pt-1 pb-1 flex items-center gap-2 border-b border-slate-100">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 shrink-0"></span>
                <span>{cleanInlineMarkdown(cleanTitle(block.title))}</span>
              </div>
            )}
            {renderFormattedContent(block.content)}
          </div>
        );
      })}
    </div>
  );
};

interface WritingChapterSummary {
  id: string;
  chapterNumber: number;
  chapterTitle: string;
  sectionsCount: number;
  questionsCount: number;
  introduction: string;
  isAvailable: boolean;
}

const WRITING_CHAPTERS_LIST: WritingChapterSummary[] = [
  {
    id: 'ch1',
    chapterNumber: 1,
    chapterTitle: 'Sentence Structure & Boundaries',
    sectionsCount: 22,
    questionsCount: 105,
    introduction: 'Welcome to Chapter 1: Sentence Structure & Boundaries. This master-level chapter covers clauses, connectors, punctuation rules, transitions, and boundary diagnostics...',
    isAvailable: true
  },
  {
    id: 'ch2',
    chapterNumber: 2,
    chapterTitle: 'Punctuation',
    sectionsCount: 18,
    questionsCount: 100,
    introduction: 'Welcome to Chapter 2: Punctuation. Master the complete structural punctuation decision system, including sentence boundary rules, comma usage and restrictions, colons, semicolons, dashes, apostrophes, and punctuation interaction.',
    isAvailable: true
  },
  {
    id: 'ch3',
    chapterNumber: 3,
    chapterTitle: 'Grammar & Agreement',
    sectionsCount: 13,
    questionsCount: 70,
    introduction: 'Welcome to Chapter 3: Grammar & Agreement. Master the complete grammar and agreement system, including subject–verb agreement, verb tenses, sequence, subjunctive mood, pronoun reference & case, modifier placement, parallelism, and logical comparisons.',
    isAvailable: true
  },
  {
    id: 'ch4',
    chapterNumber: 4,
    chapterTitle: 'Modifiers, Comparisons & Parallelism',
    sectionsCount: 10,
    questionsCount: 70,
    introduction: 'Welcome to Chapter 4: Modifiers, Comparisons & Parallelism. Master the complete system for modifiers, comparisons, and structural parallelism across 10 sequential blocks.',
    isAvailable: true
  },
  {
    id: 'ch5',
    chapterNumber: 5,
    chapterTitle: 'Advanced Editing: Precision, Concision, Logic & Structure',
    sectionsCount: 15,
    questionsCount: 152,
    introduction: 'Welcome to Chapter 5: Advanced Editing: Precision, Concision, Logic & Structure. Master the complete system for advanced editing, rhetorical precision, concision, and 5-layer diagnosis across 15 blocks and 152 questions.',
    isAvailable: true
  },
  {
    id: 'ch6',
    chapterNumber: 6,
    chapterTitle: 'Transitions, Sentence Placement & Rhetorical Synthesis',
    sectionsCount: 15,
    questionsCount: 152,
    introduction: 'Welcome to Chapter 6: Transitions, Sentence Placement & Rhetorical Synthesis. Master logical category classification, transition precision, sentence placement bridging, bullet-note synthesis, and goal-matching algorithms across 15 blocks and 152 questions.',
    isAvailable: true
  },
  {
    id: 'ch7',
    chapterNumber: 7,
    chapterTitle: 'Elite Writing: Complete Integration of All SAT Writing Skills',
    sectionsCount: 10,
    questionsCount: 148,
    introduction: 'Welcome to Chapter 7: Elite Writing: Complete Integration of All SAT Writing Skills. Master the full integration of sentence mechanics, modifier control, parallelism, certainty ladders, scope precision, and multi-constraint passage synthesis across 10 blocks and 148 questions.',
    isAvailable: true
  }
];

export const SatWritingSectionExplorer: React.FC = () => {
  const [selectedChapterId, setSelectedChapterId] = useState<string | null>(null);

  const chapterMap: Record<string, typeof SAT_WRITING_CHAPTER_1_FULL> = {
    ch1: SAT_WRITING_CHAPTER_1_FULL,
    ch2: SAT_WRITING_CHAPTER_2_FULL,
    ch3: SAT_WRITING_CHAPTER_3_FULL,
    ch4: SAT_WRITING_CHAPTER_4_FULL,
    ch5: SAT_WRITING_CHAPTER_5_FULL,
    ch6: SAT_WRITING_CHAPTER_6_FULL,
    ch7: SAT_WRITING_CHAPTER_7_FULL,
  };

  const CHAPTER_METADATA = [
    {
      id: 'ch1',
      chapterNumber: 1,
      chapterTitle: 'Sentence Structure & Boundaries',
      sectionsCount: SAT_WRITING_CHAPTER_1_FULL.theoryBlocks.length,
      questionsCount: SAT_WRITING_CHAPTER_1_FULL.exerciseBlocks.flatMap((b) => b.questions).length,
      introduction: 'Welcome to Chapter 1: Sentence Structure & Boundaries. This master-level chapter covers clauses, connectors, punctuation rules, transitions, and boundary diagnostics.',
      isAvailable: true
    },
    {
      id: 'ch2',
      chapterNumber: 2,
      chapterTitle: 'Punctuation',
      sectionsCount: SAT_WRITING_CHAPTER_2_FULL.theoryBlocks.length,
      questionsCount: SAT_WRITING_CHAPTER_2_FULL.exerciseBlocks.flatMap((b) => b.questions).length,
      introduction: 'Welcome to Chapter 2: Punctuation. Master the complete structural punctuation decision system, including sentence boundary rules, comma usage and restrictions, colons, semicolons, dashes, apostrophes, and punctuation interaction.',
      isAvailable: true
    },
    {
      id: 'ch3',
      chapterNumber: 3,
      chapterTitle: 'Grammar & Agreement',
      sectionsCount: SAT_WRITING_CHAPTER_3_FULL.theoryBlocks.length,
      questionsCount: SAT_WRITING_CHAPTER_3_FULL.exerciseBlocks.flatMap((b) => b.questions).length,
      introduction: 'Welcome to Chapter 3: Grammar & Agreement. Master the complete grammar and agreement system, including subject–verb agreement, verb tenses, sequence, subjunctive mood, pronoun reference & case, modifier placement, parallelism, and logical comparisons.',
      isAvailable: true
    },
    {
      id: 'ch4',
      chapterNumber: 4,
      chapterTitle: 'Modifiers, Comparisons & Parallelism',
      sectionsCount: SAT_WRITING_CHAPTER_4_FULL.theoryBlocks.length,
      questionsCount: SAT_WRITING_CHAPTER_4_FULL.exerciseBlocks.flatMap((b) => b.questions).length,
      introduction: 'Welcome to Chapter 4: Modifiers, Comparisons & Parallelism. Master the complete system for modifiers, comparisons, and structural parallelism across 10 sequential blocks.',
      isAvailable: true
    },
    {
      id: 'ch5',
      chapterNumber: 5,
      chapterTitle: 'Advanced Editing: Precision, Concision, Logic & Structure',
      sectionsCount: SAT_WRITING_CHAPTER_5_FULL.theoryBlocks.length,
      questionsCount: SAT_WRITING_CHAPTER_5_FULL.exerciseBlocks.flatMap((b) => b.questions).length,
      introduction: 'Welcome to Chapter 5: Advanced Editing: Precision, Concision, Logic & Structure. Master the complete system for advanced editing, rhetorical precision, concision, and 5-layer diagnosis across 15 blocks and 152 questions.',
      isAvailable: true
    },
    {
      id: 'ch6',
      chapterNumber: 6,
      chapterTitle: 'Transitions, Sentence Placement & Rhetorical Synthesis',
      sectionsCount: SAT_WRITING_CHAPTER_6_FULL.theoryBlocks.length,
      questionsCount: SAT_WRITING_CHAPTER_6_FULL.exerciseBlocks.flatMap((b) => b.questions).length,
      introduction: 'Welcome to Chapter 6: Transitions, Sentence Placement & Rhetorical Synthesis. Master logical category classification, transition precision, sentence placement bridging, bullet-note synthesis, and goal-matching algorithms across 15 blocks and 152 questions.',
      isAvailable: true
    },
    {
      id: 'ch7',
      chapterNumber: 7,
      chapterTitle: 'Elite Writing: Complete Integration of All SAT Writing Skills',
      sectionsCount: SAT_WRITING_CHAPTER_7_FULL.theoryBlocks.length,
      questionsCount: SAT_WRITING_CHAPTER_7_FULL.exerciseBlocks.flatMap((b) => b.questions).length,
      introduction: 'Welcome to Chapter 7: Elite Writing: Complete Integration of All SAT Writing Skills. Master the full integration of sentence mechanics, modifier control, parallelism, certainty ladders, scope precision, and multi-constraint passage synthesis across 10 blocks and 148 questions.',
      isAvailable: true
    }
  ];

  const chapter = selectedChapterId && chapterMap[selectedChapterId] ? chapterMap[selectedChapterId] : SAT_WRITING_CHAPTER_1_FULL;

  // Active View Tab: 'theory' or 'practice'
  const [activeTab, setActiveTab] = useState<'theory' | 'practice'>('theory');

  // Theory State
  const [selectedBlockIndex, setSelectedBlockIndex] = useState<number>(0);
  const [selectedConceptIndex, setSelectedConceptIndex] = useState<number>(0);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [selectedChapterId, activeTab, selectedBlockIndex]);

  // Practice State
  const [userSelectedAnswers, setUserSelectedAnswers] = useState<Record<string, number>>(() => {
    try {
      const saved = localStorage.getItem('sat_writing_answers');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('sat_writing_answers', JSON.stringify(userSelectedAnswers));
      saveSatPracticeProgress('writing', userSelectedAnswers).catch(() => {});
    } catch (e) {
      console.error(e);
    }
  }, [userSelectedAnswers]);

  const [selectedExerciseTab, setSelectedExerciseTab] = useState<number>(0); // 0 = All Questions, 1-4 = Specific Exercise
  const [activeQuestionIndex, setActiveQuestionIndex] = useState<number>(0);

  useEffect(() => {
    setActiveQuestionIndex(0);
  }, [selectedExerciseTab, selectedChapterId, activeTab]);

  const exercisesList = useMemo(() => {
    const qList = chapter.exerciseBlocks.flatMap((b) => b.questions);
    const qWithGlobalNumber = qList.map((q, idx) => ({
      ...q,
      globalQuestionNumber: idx + 1,
    }));

    const totalQs = qWithGlobalNumber.length;
    const q1Count = Math.ceil(totalQs / 4);
    const e1 = qWithGlobalNumber.slice(0, q1Count);
    const e2 = qWithGlobalNumber.slice(q1Count, q1Count * 2);
    const e3 = qWithGlobalNumber.slice(q1Count * 2, q1Count * 3);
    const e4 = qWithGlobalNumber.slice(q1Count * 3);

    return [
      { exerciseNumber: 1, title: `Exercise 1: Targeted Practice Part 1 (${e1.length} Qs)`, questions: e1 },
      { exerciseNumber: 2, title: `Exercise 2: Targeted Practice Part 2 (${e2.length} Qs)`, questions: e2 },
      { exerciseNumber: 3, title: `Exercise 3: Mixed Practice (${e3.length} Qs)`, questions: e3 },
      { exerciseNumber: 4, title: `Exercise 4: Comprehensive Chapter Assessment (${e4.length} Qs)`, questions: e4 },
    ];
  }, [chapter]);

  const allQuestions = useMemo(() => exercisesList.flatMap((e) => e.questions), [exercisesList]);
  const totalQuestionsCount = allQuestions.length;
  const totalAnsweredCount = Object.keys(userSelectedAnswers).length;
  const totalCorrectCount = allQuestions.filter(
    (q) => userSelectedAnswers[q.id] === q.correctAnswer
  ).length;

  const activeExercises = useMemo(() => {
    if (selectedExerciseTab === 0) {
      return [
        {
          exerciseNumber: 0,
          title: `All ${totalQuestionsCount} Practice Questions`,
          questions: allQuestions,
        },
      ];
    }
    return exercisesList.filter((e) => e.exerciseNumber === selectedExerciseTab);
  }, [exercisesList, selectedExerciseTab, allQuestions, totalQuestionsCount]);

  const handleSelectAnswer = (questionId: string, optionIdx: number) => {
    setUserSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: optionIdx,
    }));
  };

  const handleResetPractice = () => {
    setUserSelectedAnswers({});
  };

  return (
    <div id="sat-writing-section-explorer" className="space-y-6 text-slate-900 min-h-[600px] pb-12 relative overflow-x-hidden w-full">
      <AnimatePresence mode="wait">
        {!selectedChapterId ? (
          <motion.div
            key="list"
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -12 }}
            transition={{ duration: 0.1, ease: "easeOut" }}
            className="space-y-6"
          >
            {/* Simple Clean Header */}
            <div className="border-b border-slate-200 pb-2.5">
              <h2 className="text-xl sm:text-2xl font-black text-slate-950 tracking-tight">
                Available Writing Chapters
              </h2>
            </div>

            {/* White Topic Cards Grid - STRICTLY TWO PER ROW ON ALL SCREENS (grid-cols-2) */}
            <div className="grid grid-cols-2 gap-2.5 sm:gap-4">
              {CHAPTER_METADATA.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setSelectedChapterId(item.id);
                    setActiveTab('theory');
                    setSelectedBlockIndex(0);
                    setSelectedConceptIndex(0);
                  }}
                  className="bg-white hover:bg-slate-50 border-2 border-slate-200 hover:border-slate-400 rounded-2xl p-3.5 sm:p-5 text-left transition-all duration-200 cursor-pointer flex flex-col justify-between space-y-3 group relative overflow-hidden shadow-xs hover:shadow-md"
                >
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center justify-between gap-1">
                      <span className="px-2.5 py-0.5 rounded-full bg-white border border-slate-200 text-slate-800 text-[9px] sm:text-[10px] font-black uppercase tracking-wider">
                        CH. {item.chapterNumber}
                      </span>
                    </div>

                    <h3 className="text-xs sm:text-lg font-black text-slate-950 group-hover:text-slate-800 transition-colors tracking-tight line-clamp-2 leading-tight">
                      {item.chapterTitle}
                    </h3>

                    <p className="text-[10px] sm:text-xs text-slate-500 leading-snug font-medium line-clamp-2">
                      {item.introduction}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[10px] sm:text-xs font-black text-slate-800 group-hover:text-zinc-800">
                    <span className="flex items-center gap-1">
                      <BookOpen className="w-3.5 h-3.5 text-slate-800" />
                      <span>Open Page</span>
                    </span>
                    <div className="p-1.5 rounded-lg bg-slate-100 border border-slate-200 text-slate-800 transition-all group-hover:bg-slate-200">
                      <ChevronRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key={`chapter-${selectedChapterId}`}
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -12 }}
            transition={{ duration: 0.1, ease: "easeOut" }}
            className="space-y-6"
          >
          {/* Back Navigation Button & Info */}
          <div className="flex items-center justify-between bg-white border border-slate-200/90 p-3 sm:p-4 rounded-2xl shadow-xs">
            <button
              onClick={() => setSelectedChapterId(null)}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-white border border-slate-200/90 shadow-xs text-xs font-bold text-slate-700 hover:text-indigo-600 hover:bg-slate-50 transition-all cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 text-indigo-600" />
              <span>Back to Writing Chapters</span>
            </button>

            <span className="text-xs font-extrabold text-indigo-700 bg-indigo-50 uppercase tracking-wider px-3.5 py-1 rounded-full border border-indigo-200/80 shadow-2xs">
              Chapter {chapter.chapterNumber} of {WRITING_CHAPTERS_LIST.length}
            </span>
          </div>

          {/* CHAPTER WELCOME INTRO CARD */}
          <div className="bg-white border border-slate-200/90 rounded-3xl p-5 sm:p-7 shadow-xs space-y-3">
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
              Welcome to Chapter {chapter.chapterNumber}: {chapter.chapterTitle}. {chapter.introduction}
            </p>
          </div>

          {/* STICKY TOP QUICK-TOGGLE BAR: THEORY vs PRACTICE */}
          <div className="sticky top-2 z-20 bg-white border border-slate-200 p-2 rounded-2xl shadow-sm flex flex-wrap items-center justify-between gap-2">
            <div className="flex flex-wrap items-center gap-1.5 w-full sm:w-auto">
              <button
                onClick={() => setActiveTab('theory')}
                className={`flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-xl text-xs font-black transition-all cursor-pointer ${
                  activeTab === 'theory'
                    ? 'bg-slate-800 text-white shadow-xs'
                    : 'bg-slate-100 hover:bg-slate-200/80 text-slate-700'
                }`}
              >
                <BookOpen className="w-4 h-4 shrink-0" />
                <span>1. Core Theory & Worked Examples</span>
              </button>

              <button
                onClick={() => setActiveTab('practice')}
                className={`flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-xl text-xs font-black transition-all cursor-pointer ${
                  activeTab === 'practice'
                    ? 'bg-slate-800 text-white shadow-xs'
                    : 'bg-slate-100 hover:bg-slate-200/80 text-slate-700'
                }`}
              >
                <Target className="w-4 h-4 shrink-0" />
                <span>2. Practice Exercises ({totalQuestionsCount} Qs)</span>
              </button>
            </div>
          </div>

          {/* PRACTICE & MASTER THESE CONCEPTS BANNER */}
          <div className="bg-emerald-50/80 border border-emerald-200/90 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="text-xs font-extrabold text-emerald-950 uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-emerald-600" />
                <span>PRACTICE & MASTER THESE CONCEPTS</span>
              </div>
              <p className="text-xs text-emerald-800 font-medium leading-relaxed">
                Put your knowledge into action with {totalQuestionsCount} curated practice questions featuring step-by-step solutions, interactive diagrams, and instant feedback.
              </p>
            </div>
            <button
              onClick={() => {
                setActiveTab('practice');
              }}
              className="px-4 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold shrink-0 transition-all shadow-xs cursor-pointer inline-flex items-center gap-1.5"
            >
              <span>Start Practice Questions</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* CONTENT AREA WITH LIGHTWEIGHT TOGGLE */}
          <div className="relative overflow-x-hidden w-full">
            <div className={activeTab === 'theory' ? 'block' : 'hidden'}>
              <motion.div
                initial={{ opacity: 0, x: 12 }}
                animate={activeTab === 'theory' ? { opacity: 1, x: 0 } : { opacity: 0, x: 12 }}
                transition={{ duration: 0.1, ease: "easeOut" }}
                className="space-y-6"
              >
              {/* Numbered Theory Block Cards */}
              {chapter.theoryBlocks.map((block) => (
                <div
                  key={block.blockNumber}
                  className="bg-white border border-slate-200 rounded-3xl p-5 sm:p-7 shadow-xs space-y-4"
                >
                    <div className="border-b border-slate-100 pb-3 flex items-center justify-between flex-wrap gap-2">
                      <h3 className="text-base sm:text-xl font-black text-slate-950 tracking-tight flex items-center gap-2.5">
                        <span className="p-2 rounded-xl bg-indigo-100 text-indigo-800 shrink-0">
                          <BookOpen className="w-5 h-5" />
                        </span>
                        <span>{cleanTitle(block.title)}</span>
                      </h3>
                      {block.description && (
                        <span className="text-xs text-slate-500 font-medium">{cleanTitle(block.description)}</span>
                      )}
                    </div>

                    {/* Render Concepts in this Block */}
                    <div className="space-y-4 pt-1">
                      {block.concepts.map((concept, cIdx) => (
                        <div key={concept.id} className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
                          <h4 className="text-sm sm:text-base font-black text-slate-950 border-b border-slate-200/60 pb-2">
                            {cleanConceptTitle(concept.title, cIdx + 1)}
                          </h4>

                          <FormattedConceptText text={cleanFullText(concept.fullText)} />

                          {concept.bulletPoints && concept.bulletPoints.length > 0 && (
                            <div className="p-3.5 rounded-xl bg-indigo-50/80 border border-indigo-200/80 space-y-2 my-3">
                              <span className="text-xs font-black text-indigo-950 uppercase tracking-wider block">
                                📌 Key Analysis Elements
                              </span>
                              <ul className="space-y-1 text-xs text-indigo-900 font-medium">
                                {concept.bulletPoints.map((bp, bpIdx) => (
                                  <li key={bpIdx} className="flex items-start gap-2">
                                    <span className="text-indigo-600 font-bold">•</span>
                                    <span>{cleanInlineMarkdown(bp)}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {concept.rules && concept.rules.length > 0 && (
                            <div className="p-3.5 sm:p-4 rounded-2xl bg-white border-2 border-emerald-500 text-slate-900 space-y-2 shadow-2xs my-3">
                              <div className="flex items-center justify-between border-b border-emerald-100 pb-2">
                                <span className="text-xs font-black text-slate-950 uppercase tracking-wider flex items-center gap-2">
                                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                                  <span>Key Rules & Non-Negotiables</span>
                                </span>
                                <span className="text-[10px] font-black px-2.5 py-0.5 rounded-md bg-white text-emerald-700 border-2 border-emerald-500 uppercase tracking-wider shadow-2xs">
                                  Core Rule
                                </span>
                              </div>
                              <ul className="space-y-1.5 text-xs sm:text-sm text-slate-800 font-medium pt-1">
                                {concept.rules.map((rule, rIdx) => (
                                  <li key={rIdx} className="flex items-start gap-2">
                                    <span className="text-emerald-600 font-bold shrink-0 mt-0.5">•</span>
                                    <span>{cleanInlineMarkdown(rule)}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {concept.tables && concept.tables.length > 0 && concept.tables.map((t, tIdx) => (
                            <div key={tIdx} className="my-4 overflow-hidden rounded-xl border border-slate-300 bg-white shadow-2xs">
                              {t.title && (
                                <div className="bg-slate-100 px-4 py-2.5 border-b border-slate-300 text-xs font-black text-slate-900 tracking-wide">
                                  📊 {t.title}
                                </div>
                              )}
                              <div className="overflow-x-auto">
                                <table className="w-full text-left text-xs border-collapse">
                                  {t.headers && (
                                    <thead>
                                      <tr className="bg-slate-50 border-b border-slate-200">
                                        {t.headers.map((h, hIdx) => (
                                          <th key={hIdx} className="px-3.5 py-2.5 font-black text-slate-800 border-r border-slate-200 last:border-r-0">
                                            {h}
                                          </th>
                                        ))}
                                      </tr>
                                    </thead>
                                  )}
                                  <tbody className="divide-y divide-slate-200 font-mono">
                                    {t.rows.map((row, rIdx) => (
                                      <tr key={rIdx} className={rIdx % 2 === 0 ? 'bg-white' : 'bg-slate-50/60'}>
                                        {row.map((cell, cIdx) => (
                                          <td key={cIdx} className="px-3.5 py-2 text-slate-900 border-r border-slate-200 last:border-r-0 font-medium">
                                            {cell}
                                          </td>
                                        ))}
                                      </tr>
                                    ))}
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          ))}

                          {concept.checklist && concept.checklist.length > 0 && (
                            <div className="p-3.5 rounded-2xl bg-white border-2 border-emerald-500 space-y-2 my-3 text-slate-900 shadow-2xs">
                              <span className="text-xs font-black text-slate-950 uppercase tracking-wider block">
                                ✅ Checklist & Validation Steps
                              </span>
                              <ul className="space-y-1 text-xs sm:text-sm text-slate-800 font-medium">
                                {concept.checklist.map((item, cIdx) => (
                                  <li key={cIdx} className="flex items-start gap-2">
                                    <span className="text-emerald-600 font-bold">•</span>
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {concept.traps && concept.traps.length > 0 && (
                            <div className="bg-rose-50/90 border-2 border-rose-300 rounded-2xl p-4 sm:p-5 space-y-2.5 shadow-2xs my-3">
                              <div className="flex items-center justify-between flex-wrap gap-2 border-b border-rose-200/80 pb-2">
                                <span className="text-xs font-black text-rose-950 uppercase tracking-wider flex items-center gap-2">
                                  <AlertTriangle className="w-4 h-4 text-rose-700 shrink-0" />
                                  <span>SAT TRAPS & COMMON PITFALLS</span>
                                </span>
                                <span className="text-[10px] font-black px-2.5 py-0.5 rounded-full bg-rose-200 text-rose-950 border border-rose-300 uppercase tracking-wider">
                                  High-Frequency Trap
                                </span>
                              </div>
                              <ul className="space-y-1.5 text-xs sm:text-sm text-rose-950 font-medium leading-relaxed">
                                {concept.traps.map((tr, trIdx) => (
                                  <li key={trIdx} className="flex items-start gap-2">
                                    <span className="text-rose-600 font-bold">•</span>
                                    <span>{cleanInlineMarkdown(tr)}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {concept.shortcuts && concept.shortcuts.length > 0 && (
                            <div className="bg-sky-50/90 border-2 border-sky-400 rounded-2xl p-4 sm:p-5 space-y-2.5 shadow-2xs my-3">
                              <div className="flex items-center justify-between flex-wrap gap-2 border-b border-sky-200/80 pb-2">
                                <span className="text-xs font-black text-sky-950 uppercase tracking-wider flex items-center gap-2">
                                  <Zap className="w-4 h-4 text-sky-700 shrink-0" />
                                  <span>SPEED HEURISTICS & SHORTCUTS</span>
                                </span>
                                <span className="text-[10px] font-black px-2.5 py-0.5 rounded-full bg-sky-200 text-sky-950 border border-sky-300 uppercase tracking-wider">
                                  Blue Box Method
                                </span>
                              </div>
                              <ul className="space-y-1.5 text-xs sm:text-sm text-sky-950 font-medium leading-relaxed">
                                {concept.shortcuts.map((sc, scIdx) => (
                                  <li key={scIdx} className="flex items-start gap-2">
                                    <span className="text-sky-600 font-bold">•</span>
                                    <span>{cleanInlineMarkdown(sc)}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {concept.examples && concept.examples.length > 0 && (
                            <div className="space-y-4 pt-3 border-t border-slate-200">
                              <div className="text-xs font-black uppercase tracking-wider text-indigo-950 flex items-center justify-between flex-wrap gap-2">
                                <div className="flex items-center gap-1.5">
                                  <BookOpen className="w-4 h-4 text-indigo-600" />
                                  <span>Worked Concept Examples & Solved Demonstrations ({concept.examples.length})</span>
                                </div>
                                <span className="text-[10px] font-bold text-slate-500 font-sans">
                                  Fully Solved Step-by-Step with Structural Proof
                                </span>
                              </div>
                              <div className="space-y-4">
                                {concept.examples.map((ex, exIdx) => {
                                  const cleanLabel = (ex.label || `WORKED EXAMPLE ${exIdx + 1}`).replace(/^QUESTION\s*/i, 'WORKED EXAMPLE ');
                                  return (
                                    <div
                                      key={exIdx}
                                      className="bg-white border-2 border-indigo-200/90 rounded-2xl sm:rounded-3xl p-4 sm:p-6 space-y-4 sm:space-y-5 shadow-xs"
                                    >
                                      {/* Top Banner with Blue Outlining & Solved Demonstration Badge */}
                                      <div className="flex items-center justify-between flex-wrap gap-2 border-b border-indigo-100 pb-3">
                                        <div className="flex items-center gap-2">
                                          <span className="p-1.5 rounded-lg bg-indigo-100 text-indigo-700 shrink-0">
                                            <Sparkles className="w-4 h-4" />
                                          </span>
                                          <span className="text-xs sm:text-sm font-black text-indigo-950 uppercase tracking-wider">
                                            {cleanLabel}
                                          </span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                          <span className="text-[11px] font-black px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-900 border border-emerald-300 uppercase tracking-wider flex items-center gap-1.5 shadow-2xs">
                                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
                                            <span>Solved Demonstration</span>
                                          </span>
                                        </div>
                                      </div>

                                      {/* Sentence / Grammatical Context Excerpt */}
                                      {ex.sentence && (
                                        <div className="space-y-2">
                                          <div className="text-xs font-black uppercase tracking-wider text-slate-800 flex items-center gap-1.5">
                                            <FileText className="w-4 h-4 text-slate-600" />
                                            <span>Sentence & Context Excerpt</span>
                                          </div>
                                          <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 font-mono text-xs sm:text-sm text-slate-900 leading-relaxed shadow-2xs">
                                            {ex.sentence}
                                          </div>
                                        </div>
                                      )}

                                      {/* Grammatical Status Indicator */}
                                      {ex.isCorrect !== undefined && (
                                        <div className="flex items-center gap-2 pt-0.5">
                                          <span className="text-[11px] font-black uppercase tracking-wider text-slate-600">Grammatical Status:</span>
                                          <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full border ${
                                            ex.isCorrect
                                              ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                                              : 'bg-rose-50 text-rose-800 border-rose-200'
                                          }`}>
                                            {ex.isCorrect ? '✓ Correct Grammatical Structure' : '✗ Incorrect / SAT Trap Construction'}
                                          </span>
                                        </div>
                                      )}

                                      {/* Complete Solution Walkthrough */}
                                      {ex.explanation && (
                                        <div className="p-4 sm:p-5 rounded-2xl bg-indigo-50/70 border border-indigo-200 space-y-3.5 text-xs text-slate-800">
                                          <div className="space-y-1.5">
                                            <div className="font-extrabold text-indigo-950 flex items-center gap-2 border-b border-indigo-200/80 pb-2">
                                              <Lightbulb className="w-4 h-4 text-indigo-700 shrink-0" />
                                              <span className="text-xs sm:text-sm">SOLUTION WALKTHROUGH — STEP-BY-STEP GRAMMATICAL PROOF:</span>
                                            </div>
                                            <p className="leading-relaxed text-slate-900 font-medium text-xs sm:text-sm pt-1">
                                              {ex.explanation}
                                            </p>
                                          </div>
                                        </div>
                                      )}
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            <div className={activeTab === 'practice' ? 'block' : 'hidden'}>
              <motion.div
                initial={{ opacity: 0, x: 12 }}
                animate={activeTab === 'practice' ? { opacity: 1, x: 0 } : { opacity: 0, x: 12 }}
                transition={{ duration: 0.1, ease: "easeOut" }}
                className="space-y-8"
              >
              {/* Top Practice Summary Bar */}
              <div className="bg-white border border-slate-200 rounded-3xl p-5 sm:p-6 shadow-xs space-y-4">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
                  <div>
                    <h3 className="text-lg sm:text-xl font-black text-slate-950 flex items-center gap-2">
                      <Target className="w-5 h-5 text-indigo-600" />
                      <span>{totalQuestionsCount} Practice Exercises</span>
                    </h3>
                    <p className="text-xs text-slate-500 font-medium mt-1">
                      Choose an exercise set or scroll down to work through questions sequentially with instant feedback.
                    </p>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    <div className="text-right">
                      <div className="text-xs font-black text-slate-900">
                        {totalAnsweredCount} / {totalQuestionsCount} Answered
                      </div>
                      <div className="text-[11px] font-bold text-indigo-600 font-mono">
                        Score: {totalCorrectCount}/{totalAnsweredCount} ({totalAnsweredCount > 0 ? Math.round((totalCorrectCount / totalAnsweredCount) * 100) : 0}%)
                      </div>
                    </div>
                    <button
                      onClick={handleResetPractice}
                      className="px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5"
                    >
                      <RefreshCw className="w-3.5 h-3.5" />
                      <span>Reset All</span>
                    </button>
                  </div>
                </div>

                {/* Exercise Navigation Tabs (0 = All Questions, 1-4 = Specific Exercises) */}
                <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-thin">
                  <button
                    onClick={() => setSelectedExerciseTab(0)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-black transition-all cursor-pointer shrink-0 flex items-center gap-1.5 ${
                      selectedExerciseTab === 0
                        ? 'bg-slate-900 text-white shadow-xs'
                        : 'bg-slate-50 border border-slate-200 hover:bg-slate-100 text-slate-700'
                    }`}
                  >
                    <span>All Questions</span>
                    <span className={`text-[10px] font-mono ${selectedExerciseTab === 0 ? 'text-slate-300' : 'text-slate-400'}`}>
                      ({totalAnsweredCount}/{totalQuestionsCount})
                    </span>
                  </button>
                  {exercisesList.map((ex) => {
                    const exAnswered = ex.questions.filter((q) => userSelectedAnswers[q.id] !== undefined).length;
                    const isSelected = selectedExerciseTab === ex.exerciseNumber;
                    return (
                      <button
                        key={ex.exerciseNumber}
                        onClick={() => setSelectedExerciseTab(ex.exerciseNumber)}
                        className={`px-3.5 py-2 rounded-xl text-xs font-black transition-all cursor-pointer shrink-0 flex items-center gap-1.5 ${
                          isSelected
                            ? 'bg-slate-900 text-white shadow-xs'
                            : 'bg-slate-50 border border-slate-200 hover:bg-slate-100 text-slate-700'
                        }`}
                      >
                        <span>Exercise {ex.exerciseNumber}</span>
                        <span className={`text-[10px] font-mono ${isSelected ? 'text-slate-300' : 'text-slate-400'}`}>
                          ({exAnswered}/{ex.questions.length})
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Exercises Questions Feed */}
              {(() => {
                const activeQuestionsList = activeExercises.flatMap(ex => ex.questions);
                const q = activeQuestionsList[activeQuestionIndex];
                if (!q) return null;

                const selectedOption = userSelectedAnswers[q.id];
                const isSubmitted = selectedOption !== undefined;
                const isCorrect = selectedOption === q.correctAnswer;

                const groupAnswered = activeQuestionsList.filter((item) => userSelectedAnswers[item.id] !== undefined).length;

                return (
                  <div className="space-y-6 pt-2">
                    {/* QUESTION SELECTION NAVIGATION RIBBON */}
                    <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 flex flex-col md:flex-row items-center justify-between gap-4">
                      <div className="flex items-center gap-3 w-full md:w-auto overflow-x-auto py-1 scrollbar-none">
                        <span className="text-xs font-black uppercase text-slate-500 whitespace-nowrap">Go to:</span>
                        <div className="flex gap-1.5 font-sans">
                          {activeQuestionsList.map((item, idx) => {
                            const isSelected = activeQuestionIndex === idx;
                            const isAnswered = userSelectedAnswers[item.id] !== undefined;
                            return (
                              <button
                                key={item.id}
                                onClick={() => setActiveQuestionIndex(idx)}
                                className={`w-8 h-8 rounded-xl border text-xs font-black transition-all cursor-pointer flex items-center justify-center shrink-0 ${
                                  isSelected
                                    ? 'bg-indigo-600 border-indigo-600 text-white shadow-xs ring-2 ring-indigo-500/25'
                                    : isAnswered
                                    ? 'bg-emerald-50 border-emerald-300 text-emerald-800 font-bold'
                                    : 'bg-white border-slate-200 hover:bg-slate-100 text-slate-700'
                                }`}
                              >
                                {idx + 1}
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* Ribbon Progress Indicator */}
                      <div className="flex items-center gap-3 w-full md:w-auto shrink-0 justify-between md:justify-end">
                        <div className="bg-slate-200 w-24 md:w-32 h-2 rounded-full overflow-hidden">
                          <div
                            className="bg-indigo-600 h-full transition-all duration-300"
                            style={{
                              width: `${(groupAnswered / activeQuestionsList.length) * 100}%`,
                            }}
                          />
                        </div>
                        <span className="text-xs font-bold text-slate-600 whitespace-nowrap">
                          {groupAnswered}/{activeQuestionsList.length} Solved
                        </span>
                      </div>
                    </div>

                    {/* SINGLE ACTIVE QUESTION CARD */}
                    <div
                      className={`bg-white border-2 rounded-3xl p-5 sm:p-8 space-y-6 transition-all shadow-xs ${
                        isSubmitted
                          ? isCorrect
                            ? 'border-emerald-400 bg-emerald-50/10'
                            : 'border-rose-400 bg-rose-50/10'
                          : 'border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      {/* Question Top Header */}
                      <div className="flex flex-wrap items-center justify-between pb-4 border-b border-slate-100 text-xs gap-2">
                        <div className="flex items-center gap-2">
                          <span className="w-7 h-7 rounded-xl bg-slate-900 text-white font-black text-xs flex items-center justify-center shrink-0">
                            {q.globalQuestionNumber}
                          </span>
                          <span className="px-3 py-1 rounded-full font-black bg-slate-900 text-white uppercase text-[10px]">
                            {q.difficulty}
                          </span>
                          <span className="px-2.5 py-1 rounded-full font-bold bg-slate-100 text-slate-700 text-[10px]">
                            Tag: {q.skillTag}
                          </span>
                        </div>

                        <div>
                          {isSubmitted ? (
                            isCorrect ? (
                              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 font-extrabold text-xs border border-emerald-300">
                                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                                Correct Answer
                              </span>
                            ) : (
                              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-100 text-rose-900 font-extrabold text-xs border border-rose-300">
                                <XCircle className="w-4 h-4 text-rose-600" />
                                Incorrect
                              </span>
                            )
                          ) : (
                            <span className="text-xs text-slate-400 font-medium">
                              Select an option below
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Data Figure Table (if present) */}
                      {q.dataFigure && (
                        <div className="p-4 sm:p-5 rounded-2xl bg-white border-2 border-slate-300 shadow-2xs space-y-3">
                          <div className="border-b border-slate-200 pb-2">
                            <div className="font-black text-slate-950 text-xs sm:text-sm uppercase tracking-wider">
                              {q.dataFigure.title}
                            </div>
                            {q.dataFigure.subtitle && (
                              <div className="text-[11px] text-slate-500 font-medium">{q.dataFigure.subtitle}</div>
                            )}
                          </div>
                          <div className="overflow-x-auto rounded-xl border border-slate-200">
                            <table className="w-full text-left text-xs border-collapse">
                              <thead>
                                <tr className="bg-slate-900 text-white font-extrabold">
                                  {q.dataFigure.headers.map((hdr, hIdx) => (
                                    <th key={hIdx} className="py-2 px-3 border-r border-slate-700 last:border-r-0">
                                      {hdr}
                                    </th>
                                  ))}
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-slate-200 font-mono">
                                {q.dataFigure.rows.map((r, rIdx) => (
                                  <tr key={rIdx} className={rIdx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                                    {r.map((cell, cIdx) => (
                                      <td key={cIdx} className="py-2 px-3 border-r border-slate-200 last:border-r-0 text-slate-900 font-medium">
                                        {cell}
                                      </td>
                                    ))}
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                          {q.dataFigure.note && (
                            <div className="text-[10px] text-slate-500 italic pt-1">{q.dataFigure.note}</div>
                          )}
                        </div>
                      )}

                      {/* Question Prompt */}
                      <div className="space-y-3 font-sans text-base sm:text-lg font-extrabold text-slate-950 leading-relaxed">
                        {renderFormattedContent(q.prompt)}
                      </div>

                      {/* Options List */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {q.options.map((optionText, optIdx) => {
                          const isThisSelected = selectedOption === optIdx;
                          let btnStyle = 'bg-white border-slate-200 text-slate-900 hover:bg-indigo-50/80 hover:border-indigo-400 shadow-2xs';

                          if (isSubmitted) {
                            if (optIdx === q.correctAnswer) {
                              btnStyle = 'bg-emerald-500 border-emerald-600 text-white font-bold shadow-xs';
                            } else if (isThisSelected) {
                              btnStyle = 'bg-rose-500 border-rose-600 text-white font-bold shadow-xs';
                            } else {
                              btnStyle = 'bg-slate-50 border-slate-200 text-slate-400 opacity-60';
                            }
                          }

                          return (
                            <button
                              key={optIdx}
                              onClick={() => handleSelectAnswer(q.id, optIdx)}
                              className={`text-left p-4 rounded-2xl border transition-all text-xs sm:text-sm flex items-center justify-between cursor-pointer ${btnStyle}`}
                            >
                              <div className="flex items-center gap-3">
                                <span className={`w-7 h-7 rounded-xl flex items-center justify-center font-bold text-xs shrink-0 ${
                                  isSubmitted
                                    ? optIdx === q.correctAnswer || isThisSelected
                                      ? 'bg-white/20 text-white'
                                      : 'bg-slate-100 text-slate-600'
                                    : 'bg-slate-100 text-slate-800 border border-slate-300'
                                }`}>
                                  {String.fromCharCode(65 + optIdx)}
                                </span>
                                <span className="leading-snug">{cleanInlineMarkdown(optionText)}</span>
                              </div>
                              {isSubmitted && optIdx === q.correctAnswer && (
                                <CheckCircle2 className="w-5 h-5 text-white shrink-0" />
                              )}
                              {isSubmitted && isThisSelected && optIdx !== q.correctAnswer && (
                                <XCircle className="w-5 h-5 text-white shrink-0" />
                              )}
                            </button>
                          );
                        })}
                      </div>

                      {/* Comprehensive Solution Banner */}
                      {isSubmitted && (
                        <div className="p-5 sm:p-6 rounded-2xl bg-indigo-50/80 border border-indigo-200 space-y-4 text-xs sm:text-sm text-slate-800 font-sans">
                          <div className="font-extrabold text-indigo-950 flex items-center justify-between border-b border-indigo-200 pb-2 flex-wrap gap-2">
                            <div className="flex items-center gap-2">
                              <HelpCircle className="w-5 h-5 text-indigo-600" />
                              <span className="text-sm font-black">Comprehensive Solution & Diagnostics</span>
                            </div>
                            <span className="px-2.5 py-0.5 rounded-full bg-indigo-200/80 text-indigo-900 text-[10px] font-black uppercase tracking-wider">
                              UWorld-Tier In-Depth Analysis
                            </span>
                          </div>

                          {/* High-Yield Educational Objective (UWorld Signature) */}
                          {q.explanation.educationalObjective && (
                            <div className="p-3.5 sm:p-4 rounded-xl bg-slate-900 text-white space-y-1.5 shadow-xs border border-slate-800">
                              <div className="flex items-center gap-1.5 text-emerald-400 font-black text-xs uppercase tracking-wider">
                                <Target className="w-4 h-4" />
                                <span>High-Yield Educational Objective</span>
                              </div>
                              <p className="text-xs sm:text-sm font-medium text-slate-200 leading-relaxed">
                                {q.explanation.educationalObjective}
                              </p>
                            </div>
                          )}

                          {/* Core Reasoning */}
                          <div className="space-y-1">
                            <span className="font-black text-indigo-900 uppercase text-[10px] tracking-wider block">Core Reasoning & Rule</span>
                            <p className="leading-relaxed">{q.explanation.coreReasoning}</p>
                          </div>

                          {/* Before & After Analysis */}
                          {q.explanation.beforeAndAfterAnalysis && (
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-3 rounded-xl bg-white border border-indigo-100">
                              <div>
                                <span className="font-bold text-slate-500 text-[10px] block">BEFORE THE BLANK:</span>
                                <p className="font-semibold text-slate-900">{q.explanation.beforeAndAfterAnalysis.before}</p>
                              </div>
                              <div>
                                <span className="font-bold text-slate-500 text-[10px] block">AFTER THE BLANK:</span>
                                <p className="font-semibold text-slate-900">{q.explanation.beforeAndAfterAnalysis.after}</p>
                              </div>
                            </div>
                          )}

                          {/* Why Correct Option is Selected */}
                          <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-950 space-y-1">
                            <span className="font-black text-emerald-900 uppercase text-[10px] tracking-wider block">Why Option {String.fromCharCode(65 + q.correctAnswer)} is Correct</span>
                            <p className="text-xs text-emerald-900 font-medium leading-relaxed">
                              {q.explanation.whyCorrect}
                            </p>
                          </div>

                          {/* Why Distractors are Eliminated */}
                          {q.explanation.distractorAnalysis && q.explanation.distractorAnalysis.length > 0 && (
                            <div className="space-y-2 pt-1">
                              <span className="font-black text-slate-900 uppercase text-[10px] tracking-wider block">
                                Distractor Elimination Breakdown
                              </span>
                              <div className="space-y-1.5">
                                {q.explanation.distractorAnalysis.map((dist, dIdx) => (
                                  <div
                                    key={dIdx}
                                    className="flex items-start gap-2 p-2.5 rounded-xl bg-white border border-slate-200 text-xs"
                                  >
                                    <span className="font-black text-rose-700 min-w-[28px] bg-rose-50 px-1.5 py-0.5 rounded border border-rose-200 text-center">
                                      [{dist.optionLabel}]
                                    </span>
                                    <span className="text-slate-700 leading-relaxed">{dist.whyWrong}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Trap to Avoid */}
                          {q.explanation.trapToAvoid && (
                            <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-950 space-y-1">
                              <div className="flex items-center gap-1.5 font-black text-rose-900 uppercase text-[10px] tracking-wider">
                                <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0" />
                                <span>Common Distractor Trap to Avoid</span>
                              </div>
                              <p className="text-xs text-rose-900 font-medium leading-relaxed">
                                {q.explanation.trapToAvoid}
                              </p>
                            </div>
                          )}

                          {/* Elimination Shortcut */}
                          {q.explanation.eliminationShortcut && (
                            <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 text-amber-950 font-semibold text-xs flex items-center gap-2">
                              <span className="font-black uppercase text-[10px] text-amber-900">⚡ Fast Elimination Shortcut:</span>
                              <span>{q.explanation.eliminationShortcut}</span>
                            </div>
                          )}
                        </div>
                      )}

                      {/* PREVIOUS / NEXT STEP NAVIGATION BUTTONS */}
                      <div className="flex items-center justify-between pt-4 border-t border-slate-100 font-sans">
                        <button
                          disabled={activeQuestionIndex === 0}
                          onClick={() => setActiveQuestionIndex((prev) => Math.max(0, prev - 1))}
                          className={`px-4 py-2.5 rounded-xl border text-xs font-black transition-all inline-flex items-center gap-1.5 ${
                            activeQuestionIndex === 0
                              ? 'bg-slate-50 border-slate-200 text-slate-300 cursor-not-allowed'
                              : 'bg-white border-slate-200 hover:bg-slate-50 text-slate-700 cursor-pointer'
                          }`}
                        >
                          <ArrowLeft className="w-4 h-4" />
                          <span>Previous</span>
                        </button>

                        <div className="text-xs font-black text-slate-400">
                          Question {activeQuestionIndex + 1} of {activeQuestionsList.length}
                        </div>

                        <button
                          disabled={activeQuestionIndex === activeQuestionsList.length - 1}
                          onClick={() => setActiveQuestionIndex((prev) => Math.min(activeQuestionsList.length - 1, prev + 1))}
                          className={`px-4 py-2.5 rounded-xl border text-xs font-black transition-all inline-flex items-center gap-1.5 ${
                            activeQuestionIndex === activeQuestionsList.length - 1
                              ? 'bg-slate-50 border-slate-200 text-slate-300 cursor-not-allowed'
                              : 'bg-white border-slate-200 hover:bg-slate-50 text-slate-700 cursor-pointer'
                          }`}
                        >
                          <span>Next</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })()}
              </motion.div>
            </div>
        </div>
    </motion.div>
  )}
  </AnimatePresence>
</div>
  );
};

