import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  BookOpen,
  CheckCircle2,
  XCircle,
  ChevronRight,
  ChevronDown,
  HelpCircle,
  Sparkles,
  Layers,
  ShieldCheck,
  Target,
  ArrowRight,
  ArrowLeft,
  RefreshCw,
  Award,
  Lightbulb,
  AlertTriangle,
  Zap,
  BookmarkCheck,
  Compass,
  ListOrdered,
  FileText,
  Clock,
  Check,
  BarChart3,
  Table as TableIcon,
  TrendingUp,
  PieChart,
  Activity,
} from 'lucide-react';
import {
  SAT_READING_CHAPTER_1,
  SAT_READING_CHAPTER_2,
  SAT_READING_CHAPTER_3,
  SAT_READING_CHAPTER_4,
  SAT_READING_CHAPTER_5,
  SAT_READING_CHAPTER_6,
  SAT_READING_CHAPTERS,
  SAT_READING_ELITE_PASSAGES,
  ReadingModule,
  ReadingQuestion,
  ReadingSectionItem,
  EliteReadingPassage,
} from '../../data/reading/satReadingData';

interface TheoryParsedBlock {
  type: 'normal' | 'example' | 'trap' | 'elimination' | 'principle';
  title: string;
  content: string;
}

function cleanTitle(title: string, hasQuestions?: boolean): string {
  if (!title) return '';
  let cleaned = title
    .replace(/^(?:MODULE|BLOCK|SECTION|UNIT)\s*\d+\s*(?:OF\s*\d+)?\s*[\—\-\–\:]*\s*/i, '')
    .replace(/^Section\s*\d+\s*[\—\-\–\:]*\s*/i, '')
    .replace(/^BLOCK\s*\d+\s+(?:MASTER\s+)?TAKEAWAY\b/i, 'MASTER TAKEAWAY')
    .replace(/^BLOCK\s*\d+\s+(?:DATA\s+SET\s+AND\s+)?PRACTICE\b/i, 'PRACTICE & APPLICATIONS')
    .replace(/^BLOCK\s*\d+\s+/i, '')
    .replace(/\s+/g, ' ')
    .trim();

  if (hasQuestions) {
    cleaned = cleaned
      .replace(/^DENSE MULTI-SOURCE EXAMPLE\s*/i, 'WORKED MULTI-SOURCE CASE STUDY')
      .replace(/^DENSE SCIENTIFIC PASSAGE\s*/i, 'WORKED SCIENTIFIC CASE STUDY')
      .replace(/^DENSE INFORMATIONAL PASSAGE\s*/i, 'WORKED INFORMATIONAL CASE STUDY')
      .replace(/^DENSE PASSAGE\s*[\—\-\–]\s*/i, 'WORKED CASE STUDY — ')
      .replace(/^ADVANCED PRACTICE PASSAGE\s*[\—\-\–]\s*/i, 'WORKED CASE STUDY — ')
      .replace(/^PRACTICE PASSAGE\s*[\—\-\–]\s*/i, 'WORKED CASE STUDY — ')
      .replace(/^PRACTICE QUESTION\s*/i, 'WORKED EXAMPLE DEMONSTRATION')
      .replace(/^PRACTICE\s*[\—\-\–]\s*/i, 'WORKED DEMONSTRATION — ');
  } else {
    cleaned = cleaned
      .replace(/^DENSE MULTI-SOURCE EXAMPLE\s*/i, 'MULTI-SOURCE ANALYSIS')
      .replace(/^DENSE SCIENTIFIC PASSAGE\s*/i, 'SCIENTIFIC TEXTUAL ANALYSIS')
      .replace(/^DENSE INFORMATIONAL PASSAGE\s*/i, 'INFORMATIONAL TEXTUAL ANALYSIS')
      .replace(/^DENSE PASSAGE\s*[\—\-\–]\s*/i, 'TEXTUAL ANALYSIS — ')
      .replace(/^PRACTICE PASSAGE\s*[\—\-\–]\s*/i, 'TEXTUAL ANALYSIS — ');
  }

  return cleaned;
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

    const cleanLine = raw
      .replace(/^#+\s*/, '')
      .replace(/^>\s*/, '')
      .replace(/^[\*\-\s]+/, '') // Strip any leading asterisks, dashes, and spaces
      .replace(/\*+/g, '') // Strip ALL internal/trailing asterisks
      .trim();

    if (!cleanLine) return null;

    const isColonTerminated = cleanLine.endsWith(':');

    const isKnownHeaderLabel =
      isMarkdownHeading ||
      isBoldHeading ||
      /^(SAT TRAP|TRAP|IMPORTANT WARNING|COMMON ERROR|WARNING|THE “LAST SENTENCE” TRAP|THE DETAIL TRAP|THE TOO-BROAD TRAP|THE TRUE-BUT-UNANSWERED TRAP|THE EXTREME TONE TRAP|THE “TRUE IN REAL LIFE” TRAP|PITFALL|COMMON READING MISTAKE)/i.test(
        cleanLine
      ) ||
      /^(EXAMPLE|EXAMPLES|WORKED EXAMPLE|ELITE EXAMPLE|PASSAGE ANALYSIS|COMPARE|CLEAR VS|BEFORE VS|WORKED WALKTHROUGH|SAMPLE PASSAGE)/i.test(
        cleanLine
      ) ||
      /^(TRICK|TRICKS|ELIMINATION TECHNIQUE|SAT ELIMINATION|FAST METHOD|THE UMBRELLA TEST|THE THREE-LEVEL METHOD|THE “BECAUSE” TEST|THE ROLE TEST|THE TONE SPECTRUM|THE INFERENCE TEST|THE REMOVAL TEST|SHORTCUT|FAST TEST)/i.test(
        cleanLine
      ) ||
      /^(MASTER PRINCIPLE|MASTER RULE|CORE TEST|DECISION RULE|KEY RULE|RULE|THE GOLDEN LAW OF SAT READING|THE BOUNDARY RULE|PASSAGE IS YOUR SOLE UNIVERSE|CORE PRINCIPLE|NON-NEGOTIABLE)/i.test(
        cleanLine
      ) ||
      (isColonTerminated && /^[A-Z0-9\s—–\-\(\)\"\']{3,65}\:$/i.test(cleanLine));

    if (!isKnownHeaderLabel) {
      return null;
    }

    // 1. Red Box (Trap)
    if (/TRAP|WARNING|ERROR|PITFALL|MISTAKE|FALSE|WRONG|TOO-BROAD|UNANSWERED|EXTREME/i.test(cleanLine)) {
      return { type: 'trap' as const, title: cleanLine };
    }

    // 2. Yellow Box (Example)
    if (/EXAMPLE|COMPARE|WORKED|WALKTHROUGH|ANALYSIS|PASSAGE ANALYSIS/i.test(cleanLine)) {
      return { type: 'example' as const, title: cleanLine };
    }

    // 3. Sky Blue Box (Trick / Method / Shortcut / Test)
    if (/TECHNIQUE|TRICK|SHORTCUT|FAST|METHOD|TEST|UMBRELLA|THREE-LEVEL|RULE|SPECTRUM|INFERENCE/i.test(cleanLine)) {
      return { type: 'elimination' as const, title: cleanLine };
    }

    // 4. Green Box (Master Principle / Core Law)
    return { type: 'principle' as const, title: cleanLine };
  };

  lines.forEach((line) => {
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
  const cleaned = str
    .replace(/^#+\s*/, '')
    .replace(/^>\s*/, '')
    .replace(/```[a-z]*\n?/gi, '')
    .replace(/```/g, '')
    .replace(/`([^`]+)`/g, '$1');

  const parts = cleaned.split(/(\*\*.*?\*\*|\*.*?\*)/g);
  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith('**') && part.endsWith('**') && part.length >= 4) {
          return (
            <strong key={i} className="font-extrabold text-slate-950">
              {part.slice(2, -2)}
            </strong>
          );
        }
        if (part.startsWith('*') && part.endsWith('*') && part.length >= 2 && !part.startsWith('**')) {
          return (
            <em key={i} className="italic text-slate-900">
              {part.slice(1, -1)}
            </em>
          );
        }
        return part;
      })}
    </>
  );
}

function parseLinesWithTablesAndGraphs(content: string) {
  const lines = content.split('\n');
  const items: Array<
    | { type: 'table'; headers: string[]; rows: string[][] }
    | { type: 'line'; text: string }
  > = [];

  let i = 0;
  while (i < lines.length) {
    const trimmed = lines[i].trim();

    if (trimmed.startsWith('|') && trimmed.endsWith('|') && trimmed.length > 2) {
      const tableLines: string[] = [];
      while (
        i < lines.length &&
        lines[i].trim().startsWith('|') &&
        lines[i].trim().endsWith('|')
      ) {
        tableLines.push(lines[i].trim());
        i++;
      }

      const validRows = tableLines.filter((tl) => !/^\|[\s\:\-\|]+\|$/.test(tl));

      if (validRows.length > 0) {
        const headerRaw = validRows[0];
        const headers = headerRaw
          .split('|')
          .slice(1, -1)
          .map((h) => h.trim());

        const rows = validRows.slice(1).map((rowRaw) =>
          rowRaw
            .split('|')
            .slice(1, -1)
            .map((cell) => cell.trim())
        );

        items.push({ type: 'table', headers, rows });
        continue;
      }
    }

    items.push({ type: 'line', text: lines[i] });
    i++;
  }

  return items;
}

function renderFormattedContent(content: string) {
  if (!content) return null;

  const parsedItems = parseLinesWithTablesAndGraphs(content);

  return (
    <div className="space-y-3 font-serif">
      {parsedItems.map((item, idx) => {
        if (item.type === 'table') {
          return (
            <div key={idx} className="my-4 rounded-2xl border border-slate-300 shadow-2xs overflow-hidden bg-white font-sans">
              <div className="bg-slate-900 text-white text-[11px] font-black uppercase tracking-wider px-4 py-2.5 flex items-center justify-between border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <BarChart3 className="w-4 h-4 text-indigo-400" />
                  <span>Data Table & Empirical Figure</span>
                </div>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/90 px-2.5 py-0.5 rounded border border-emerald-800/80">
                  SAT Empirical Data
                </span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  {item.headers.length > 0 && (
                    <thead>
                      <tr className="bg-slate-100 border-b border-slate-300 text-slate-950 font-black">
                        {item.headers.map((h, hIdx) => (
                          <th key={hIdx} className="px-4 py-3 text-[11px] uppercase tracking-wider border-r border-slate-200 last:border-r-0">
                            {cleanInlineMarkdown(h)}
                          </th>
                        ))}
                      </tr>
                    </thead>
                  )}
                  <tbody>
                    {item.rows.map((row, rIdx) => (
                      <tr key={rIdx} className="border-b border-slate-200/70 last:border-b-0 even:bg-slate-50/70 hover:bg-indigo-50/30 transition-colors">
                        {row.map((cell, cIdx) => (
                          <td key={cIdx} className="px-4 py-2.5 font-medium text-slate-900 border-r border-slate-200/50 last:border-r-0 whitespace-pre-wrap">
                            {cleanInlineMarkdown(cell)}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          );
        }

        const trimmed = item.text.trim();
        if (!trimmed) {
          return <div key={idx} className="h-1.5" />;
        }

        // Subheaders starting with ### or ## or #
        if (/^#+\s+/.test(trimmed)) {
          const title = trimmed.replace(/^#+\s+/, '');
          return (
            <div
              key={idx}
              className="font-extrabold font-sans text-slate-950 text-xs sm:text-sm pt-2.5 pb-1 flex items-center gap-2 border-b border-slate-200"
            >
              <span className="w-2 h-2 rounded-full bg-indigo-600 shrink-0"></span>
              <span>{cleanInlineMarkdown(title)}</span>
            </div>
          );
        }

        // Section labels like "LEVEL 1 — SUBJECT:" or "STEP 1: Identify the main claim."
        if (
          (/^([A-Z0-9\s—–\-\:\(\)]+)\:$/i.test(trimmed) && trimmed.length < 80) ||
          /^STEP\s+\d+/i.test(trimmed) ||
          /^LEVEL\s+\d+/i.test(trimmed)
        ) {
          return (
            <div
              key={idx}
              className="font-extrabold font-sans text-slate-950 text-xs sm:text-sm pt-2 pb-0.5 flex items-center gap-2"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 shrink-0"></span>
              <span>{cleanInlineMarkdown(trimmed)}</span>
            </div>
          );
        }

        // Multi-Source / Multi-Passage Headings (e.g. Source 1 (National Cultural Endowment Report), Passage 1, Text 1)
        if (/^(Source\s+\d+|Passage\s+\d+|Text\s+\d+)/i.test(trimmed)) {
          return (
            <div
              key={idx}
              className="mt-3.5 mb-1.5 pt-2 pb-1 border-b border-indigo-200/80 flex items-center gap-2 font-sans"
            >
              <span className="w-2 h-2 rounded-full bg-indigo-600 shrink-0"></span>
              <span className="font-extrabold text-xs sm:text-sm text-indigo-950 tracking-tight">
                {cleanInlineMarkdown(trimmed)}
              </span>
            </div>
          );
        }

        // Graph or Figure Callout Cards (e.g. Graph 1:, Figure 1:, [BAR CHART], [LINE GRAPH])
        if (/^(Graph\s+\d+|Figure\s+\d+|Table\s+\d+|\[(BAR CHART|LINE GRAPH|SCATTER PLOT|DATA GRAPH)\])/i.test(trimmed)) {
          return (
            <div
              key={idx}
              className="my-3 p-3.5 rounded-xl bg-indigo-50/70 border border-indigo-200/90 text-slate-900 shadow-2xs space-y-1.5 font-sans"
            >
              <div className="flex items-center justify-between border-b border-indigo-200/60 pb-1.5">
                <div className="flex items-center gap-2 text-indigo-900 font-bold text-xs">
                  <BarChart3 className="w-4 h-4 text-indigo-600 shrink-0" />
                  <span>Data Figure / Illustration</span>
                </div>
                <span className="text-[10px] font-mono font-bold text-indigo-700 bg-indigo-100/90 px-2 py-0.5 rounded border border-indigo-200">
                  Empirical Figure
                </span>
              </div>
              <p className="text-xs sm:text-sm font-semibold text-slate-800 leading-relaxed font-sans">
                {cleanInlineMarkdown(trimmed)}
              </p>
            </div>
          );
        }

        // Blockquotes starting with >
        if (/^>\s*/.test(trimmed)) {
          const quoteText = trimmed.replace(/^>\s*/, '');
          return (
            <blockquote
              key={idx}
              className="my-2 border-l-2 border-indigo-400 pl-3.5 py-1 text-xs sm:text-sm text-slate-700 italic font-serif bg-slate-50/70 rounded-r-md"
            >
              {cleanInlineMarkdown(quoteText)}
            </blockquote>
          );
        }

        // Sequential step flow with arrows (e.g. lines starting with "→" or "->")
        if (/^[\-\>→]\s*/.test(trimmed)) {
          const stepText = trimmed.replace(/^[\-\>→\s]+/, '');
          return (
            <div
              key={idx}
              className="flex items-center gap-2 pl-3 py-1 text-xs sm:text-sm font-medium text-slate-800 font-sans"
            >
              <span className="text-indigo-600 font-bold">→</span>
              <span>{cleanInlineMarkdown(stepText)}</span>
            </div>
          );
        }

        // Numbered lists starting with 1. 2. 3. or 1) 2)
        if (/^\d+[\.\)]\s+/.test(trimmed)) {
          const listText = trimmed.replace(/^\d+[\.\)]\s+/, '');
          const matchNum = trimmed.match(/^(\d+)[\.\)]/);
          const num = matchNum ? matchNum[1] : '';
          return (
            <div
              key={idx}
              className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-900 font-medium leading-relaxed pl-1 my-1.5 font-sans"
            >
              <span className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-800 font-extrabold text-[11px] flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                {num}
              </span>
              <span className="flex-1 pt-0.5">{cleanInlineMarkdown(listText)}</span>
            </div>
          );
        }

        // Bullet lists starting with * or - or •
        if (/^[\*\-•]\s+/.test(trimmed)) {
          const listText = trimmed.replace(/^[\*\-•]\s+/, '');
          return (
            <div
              key={idx}
              className="flex items-start gap-2 text-xs sm:text-sm text-slate-900 font-medium leading-relaxed pl-1 my-1.5 font-sans"
            >
              <span className="text-indigo-600 font-black text-base shrink-0 leading-none mt-0.5">•</span>
              <span className="flex-1">{cleanInlineMarkdown(listText)}</span>
            </div>
          );
        }

        // Standard text paragraph
        return (
          <p key={idx} className="text-sm sm:text-base font-normal text-slate-900 leading-relaxed my-1.5">
            {cleanInlineMarkdown(trimmed)}
          </p>
        );
      })}
    </div>
  );
}

function FormattedPassageText({ text }: { text: string }) {
  if (!text) return null;
  return renderFormattedContent(text);
}

function renderExampleContent(content: string) {
  const parts = content.split('\n');
  return (
    <div className="space-y-2">
      {parts.map((p, pIdx) => {
        const trimmed = p.trim();
        if (!trimmed) return null;

        if (/^#+\s+/.test(trimmed)) {
          const title = trimmed.replace(/^#+\s+/, '');
          return (
            <div key={pIdx} className="font-extrabold text-slate-950 text-xs sm:text-sm pt-1.5 pb-0.5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 shrink-0"></span>
              <span>{cleanInlineMarkdown(title)}</span>
            </div>
          );
        }

        if (trimmed.startsWith('>')) {
          return (
            <blockquote key={pIdx} className="border-l-2 border-indigo-400 pl-3 py-0.5 text-xs text-slate-700 italic font-serif bg-slate-50/70 rounded-r-md">
              {cleanInlineMarkdown(trimmed.replace(/^>\s*/, ''))}
            </blockquote>
          );
        }

        if (/^[\-\>→]\s*/.test(trimmed)) {
          return (
            <div key={pIdx} className="flex items-center gap-2 pl-2 text-xs font-medium text-slate-800">
              <span className="text-indigo-600 font-bold">→</span>
              <span>{cleanInlineMarkdown(trimmed.replace(/^[\-\>→\s]+/, ''))}</span>
            </div>
          );
        }

        return (
          <p key={pIdx} className="text-xs text-slate-800 font-normal leading-relaxed">
            {cleanInlineMarkdown(trimmed)}
          </p>
        );
      })}
    </div>
  );
}

const FormattedReadingConceptText: React.FC<{ text: string }> = ({ text }) => {
  const blocks = parseTheoryText(text);

  return (
    <div className="space-y-3">
      {blocks.map((block, idx) => {
        if (block.type === 'example') {
          return (
            <div
              key={idx}
              className="bg-amber-50/90 border-2 border-amber-300 rounded-2xl p-4 sm:p-5 space-y-3 shadow-2xs my-3"
            >
              <div className="flex items-center justify-between flex-wrap gap-2 border-b border-amber-200/80 pb-2.5">
                <span className="text-xs font-black text-amber-950 uppercase tracking-wider flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-amber-700 shrink-0" />
                  <span>{block.title || 'WORKED EXAMPLE & PASSAGE BREAKDOWN'}</span>
                </span>
                <span className="text-[10px] font-black px-2.5 py-0.5 rounded-full bg-amber-200 text-amber-950 border border-amber-300 uppercase tracking-wider">
                  Yellow Card Example
                </span>
              </div>
              <div className="text-xs sm:text-sm text-slate-900 leading-relaxed font-sans space-y-2">
                {renderExampleContent(block.content)}
              </div>
            </div>
          );
        }

        if (block.type === 'trap') {
          return (
            <div
              key={idx}
              className="bg-rose-50/90 border-2 border-rose-300 rounded-2xl p-4 sm:p-5 space-y-2.5 shadow-2xs my-3"
            >
              <div className="flex items-center justify-between flex-wrap gap-2 border-b border-rose-200/80 pb-2">
                <span className="text-xs font-black text-rose-950 uppercase tracking-wider flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-rose-700 shrink-0" />
                  <span>{block.title || 'SAT READING TRAP & PITFALL'}</span>
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

        if (block.type === 'elimination') {
          return (
            <div
              key={idx}
              className="bg-sky-50/90 border-2 border-sky-400 rounded-2xl p-4 sm:p-5 space-y-2.5 shadow-2xs my-3"
            >
              <div className="flex items-center justify-between flex-wrap gap-2 border-b border-sky-200/80 pb-2">
                <span className="text-xs font-black text-sky-950 uppercase tracking-wider flex items-center gap-2">
                  <Zap className="w-4 h-4 text-sky-700 shrink-0" />
                  <span>{block.title || 'READING HEURISTIC & FAST METHOD'}</span>
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

        if (block.type === 'principle') {
          return (
            <div
              key={idx}
              className="bg-emerald-50/90 border-2 border-emerald-300 rounded-2xl p-4 sm:p-5 space-y-2.5 shadow-2xs my-3"
            >
              <div className="flex items-center justify-between flex-wrap gap-2 border-b border-emerald-200/80 pb-2">
                <span className="text-xs font-black text-emerald-950 uppercase tracking-wider flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>{block.title || 'MASTER PRINCIPLE & GOLDEN RULE'}</span>
                </span>
                <span className="text-[10px] font-black px-2.5 py-0.5 rounded-full bg-emerald-200 text-emerald-950 border border-emerald-300 uppercase tracking-wider">
                  Core Rule
                </span>
              </div>
              <div className="text-xs sm:text-sm text-emerald-950 font-medium leading-relaxed">
                {renderFormattedContent(block.content)}
              </div>
            </div>
          );
        }

        return (
          <div key={idx} className="bg-white/95 border border-slate-200/90 rounded-2xl p-4 sm:p-5 shadow-2xs my-3 space-y-2.5">
            {renderFormattedContent(block.content)}
          </div>
        );
      })}
    </div>
  );
};

const WorkedTheoryExampleCard: React.FC<{
  question: ReadingQuestion;
  index: number;
  sectionPassage?: { title?: string; intro?: string; text: string };
}> = ({ question, index, sectionPassage }) => {
  const qPassage = question.passage || sectionPassage;
  const cleanLabel = (question.label || `WORKED EXAMPLE ${index + 1}`).replace(/^QUESTION\s*/i, 'WORKED EXAMPLE ');

  return (
    <div className="bg-white border-2 border-indigo-200/90 rounded-2xl sm:rounded-3xl p-4 sm:p-6 space-y-4 sm:space-y-5 shadow-xs">
      {/* Top Banner */}
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

      {/* Passage Excerpt */}
      {qPassage && (
        <div className="space-y-2">
          <div className="text-xs font-black uppercase tracking-wider text-slate-800 flex items-center gap-1.5">
            <FileText className="w-4 h-4 text-slate-600" />
            <span>Passage Excerpt</span>
          </div>
          <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 font-serif text-xs sm:text-sm text-slate-900 leading-relaxed shadow-2xs">
            {qPassage.title && (
              <div className="font-sans font-bold text-slate-800 text-xs mb-2 border-b border-slate-200 pb-1">
                {qPassage.title}
              </div>
            )}
            <FormattedPassageText text={qPassage.text} />
          </div>
        </div>
      )}

      {/* Dedicated Data Figure / Table if present */}
      {(question.dataFigure || question.tableData) && (() => {
        const fig = question.dataFigure
          ? {
              title: question.dataFigure.title,
              subtitle: question.dataFigure.subtitle,
              headers: question.dataFigure.headers || question.dataFigure.columns,
              rows: question.dataFigure.rows,
              note: question.dataFigure.note || question.dataFigure.notes,
            }
          : {
              title: question.tableData?.title || 'Data Table',
              subtitle: undefined,
              headers: question.tableData?.headers,
              rows: question.tableData?.rows || [],
              note: question.tableData?.notes,
            };

        return (
          <div className="space-y-2">
            <div className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
              <BarChart3 className="w-4 h-4 text-indigo-600" />
              <span>{fig.title}</span>
            </div>
            {fig.subtitle && (
              <p className="text-2xs text-slate-500">{fig.subtitle}</p>
            )}
            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-2xs">
              <table className="min-w-full divide-y divide-slate-200 text-xs">
                {fig.headers && (
                  <thead className="bg-slate-100">
                    <tr>
                      {fig.headers.map((h, hIdx) => (
                        <th key={hIdx} className="px-3 py-2 text-left font-bold text-slate-800 border-r border-slate-200 last:border-r-0">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                )}
                <tbody className="divide-y divide-slate-100 bg-white font-mono">
                  {fig.rows.map((row, rIdx) => (
                    <tr key={rIdx} className={rIdx % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}>
                      {row.map((cell, cIdx) => (
                        <td key={cIdx} className="px-3 py-2 text-slate-700 font-medium border-r border-slate-100 last:border-r-0 text-2xs sm:text-xs">
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {fig.note && (
              <p className="text-2xs text-slate-500 italic">{fig.note}</p>
            )}
          </div>
        );
      })()}

      {/* Question Prompt */}
      <div className="space-y-1 pt-1">
        <span className="text-[11px] font-black uppercase tracking-wider text-slate-600 block">
          Question Stem & Objective:
        </span>
        <p className="text-xs sm:text-sm font-extrabold text-slate-950 leading-relaxed">
          {question.prompt}
        </p>
      </div>

      {/* Solved Options Layout */}
      <div className="space-y-2">
        <span className="text-[11px] font-black uppercase tracking-wider text-slate-600 block">
          Answer Choices (Solved Walkthrough):
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {question.options.map((opt, optIdx) => {
            const isCorrect = optIdx === question.correctAnswerIndex;
            return (
              <div
                key={opt.label}
                className={`p-3.5 rounded-xl border transition-all text-xs flex items-start justify-between gap-2.5 ${
                  isCorrect
                    ? 'bg-emerald-50/90 border-2 border-emerald-500 text-emerald-950 shadow-2xs ring-1 ring-emerald-400/40'
                    : 'bg-slate-50/80 border border-slate-200 text-slate-700'
                }`}
              >
                <div className="flex items-start gap-2.5">
                  <span
                    className={`w-6 h-6 rounded-lg flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 ${
                      isCorrect
                        ? 'bg-emerald-600 text-white font-black shadow-xs'
                        : 'bg-slate-200 text-slate-700 border border-slate-300 font-bold'
                    }`}
                  >
                    {opt.label}
                  </span>
                  <span className={`leading-snug ${isCorrect ? 'font-bold text-emerald-950' : 'font-medium text-slate-700'}`}>
                    {opt.text}
                  </span>
                </div>
                {isCorrect && (
                  <span className="px-2 py-0.5 rounded-md bg-emerald-200 text-emerald-950 text-[10px] font-black uppercase tracking-wider flex items-center gap-1 shrink-0 mt-0.5 border border-emerald-300">
                    <Check className="w-3.5 h-3.5 text-emerald-800" />
                    <span>Correct</span>
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Complete Solution & Explanations Walkthrough (Fully Open) */}
      <div className="p-4 sm:p-5 rounded-2xl bg-indigo-50/70 border border-indigo-200 space-y-3.5 text-xs text-slate-800">
        {/* Core Rationale */}
        <div className="space-y-1.5">
          <div className="font-extrabold text-indigo-950 flex items-center gap-2 border-b border-indigo-200/80 pb-2">
            <Lightbulb className="w-4 h-4 text-indigo-700 shrink-0" />
            <span className="text-xs sm:text-sm">{question.whyCorrectTitle || `SOLUTION WALKTHROUGH — WHY (${question.correctAnswer}) IS CORRECT:`}</span>
          </div>
          <p className="leading-relaxed text-slate-900 font-medium text-xs sm:text-sm pt-1">
            {question.whyCorrect}
          </p>
        </div>

        {/* Direct Passage Evidence */}
        {question.passageSupport && (
          <div className="p-3 rounded-xl bg-white border border-indigo-200/80 text-xs space-y-1 shadow-2xs">
            <span className="font-black text-indigo-950 uppercase text-[10px] tracking-wider flex items-center gap-1.5">
              <BookmarkCheck className="w-3.5 h-3.5 text-indigo-600" />
              <span>Direct Textual Evidence & Passage Support</span>
            </span>
            <p className="font-serif italic text-slate-800 leading-relaxed text-xs sm:text-sm pl-2 border-l-2 border-indigo-400">
              {question.passageSupport}
            </p>
          </div>
        )}

        {/* Elimination Shortcut */}
        {question.eliminationShortcut && (
          <div className="p-3 rounded-xl bg-sky-50 border border-sky-300 text-xs text-sky-950 space-y-1 shadow-2xs">
            <span className="font-black text-sky-900 uppercase text-[10px] tracking-wider flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-sky-600" />
              <span>SAT Speed Heuristic & Elimination Rule</span>
            </span>
            <p className="font-medium leading-relaxed text-sky-950">
              {question.eliminationShortcut}
            </p>
          </div>
        )}

        {/* Educational Objective if present */}
        {question.educationalObjective && (
          <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-300 text-xs text-emerald-950 space-y-1 shadow-2xs">
            <span className="font-black text-emerald-900 uppercase text-[10px] tracking-wider flex items-center gap-1.5">
              <Target className="w-3.5 h-3.5 text-emerald-700" />
              <span>Educational Objective</span>
            </span>
            <p className="font-medium leading-relaxed text-emerald-950">
              {question.educationalObjective}
            </p>
          </div>
        )}

        {/* Trap to Avoid if present */}
        {question.trapToAvoid && (
          <div className="p-3 rounded-xl bg-rose-50 border border-rose-300 text-xs text-rose-950 space-y-1 shadow-2xs">
            <span className="font-black text-rose-900 uppercase text-[10px] tracking-wider flex items-center gap-1.5">
              <AlertTriangle className="w-3.5 h-3.5 text-rose-700" />
              <span>Trap to Avoid</span>
            </span>
            <p className="font-medium leading-relaxed text-rose-950">
              {question.trapToAvoid}
            </p>
          </div>
        )}

        {/* Distractor Explanations */}
        {question.distractorExplanations && question.distractorExplanations.length > 0 && (
          <div className="space-y-2 pt-1 border-t border-indigo-200/60">
            <span className="font-black text-indigo-950 uppercase text-[10px] tracking-wider block">
              ❌ Distractor Elimination & Error Breakdown (Why Wrong Options Fail)
            </span>
            <div className="grid grid-cols-1 gap-2">
              {question.distractorExplanations.map((d, dIdx) => (
                <div
                  key={dIdx}
                  className="p-2.5 sm:p-3 rounded-xl bg-white border border-slate-200 text-xs flex items-start gap-2 shadow-2xs"
                >
                  <span className="font-black text-rose-700 bg-rose-50 px-2 py-0.5 rounded border border-rose-200 shrink-0 text-[11px]">
                    Option {d.optionLabel}
                  </span>
                  <span className="text-slate-700 font-medium leading-relaxed">{d.explanation}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

interface ReadingChapterSummary {
  id: string;
  chapterNumber: number;
  chapterTitle: string;
  sectionsCount: number;
  questionsCount: number;
  introduction: string;
  isAvailable: boolean;
}

function extractQuestionsForChapter(modules: ReadingModule[], chapterNumber: number) {
  const list: Array<ReadingQuestion & { globalQuestionNumber: number; moduleNumber: number; passageText?: string; passageTitle?: string }> = [];
  let count = 0;

  for (const mod of modules) {
    if (mod.practiceQuestions && mod.practiceQuestions.length > 0) {
      for (const q of mod.practiceQuestions) {
        if (count >= 60) break;
        count += 1;
        const passageText = q.passage?.text || undefined;
        const passageTitle = q.passage?.title || undefined;

        list.push({
          ...q,
          globalQuestionNumber: count,
          moduleNumber: mod.moduleNumber,
          passageText,
          passageTitle,
        });
      }
    } else {
      for (const sec of mod.sections) {
        if (sec.questions && sec.questions.length > 0) {
          for (const q of sec.questions) {
            // Exclude worked examples so they appear strictly in Core Theory, ensuring zero repetition in Practice Exercises
            if (q.label && q.label.includes("WORKED EXAMPLE")) {
              continue;
            }
            if (count >= 60) break;
            count += 1;
            const passageText = q.passage?.text || sec.passage?.text || undefined;
            const passageTitle = q.passage?.title || sec.passage?.title || undefined;

            list.push({
              ...q,
              globalQuestionNumber: count,
              moduleNumber: mod.moduleNumber,
              passageText,
              passageTitle,
            });
          }
        }
        if (count >= 60) break;
      }
    }
    if (count >= 60) break;
  }

  // Fallback: If no dedicated practice questions exist, return all questions for the chapter
  if (list.length === 0) {
    count = 0;
    for (const mod of modules) {
      for (const sec of mod.sections) {
        if (sec.questions && sec.questions.length > 0) {
          for (const q of sec.questions) {
            if (count >= 60) break;
            count += 1;
            const passageText = q.passage?.text || sec.passage?.text || undefined;
            const passageTitle = q.passage?.title || sec.passage?.title || undefined;

            list.push({
              ...q,
              globalQuestionNumber: count,
              moduleNumber: mod.moduleNumber,
              passageText,
              passageTitle,
            });
          }
        }
        if (count >= 60) break;
      }
      if (count >= 60) break;
    }
  }

  return list;
}

export const SatReadingSectionExplorer: React.FC = () => {
  const [selectedChapterId, setSelectedChapterId] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'theory' | 'practice'>('theory');

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [selectedChapterId, activeTab]);

  // Active Chapter Object
  const chapter = useMemo(() => {
    if (selectedChapterId === 'ch6') return SAT_READING_CHAPTER_6;
    if (selectedChapterId === 'ch5') return SAT_READING_CHAPTER_5;
    if (selectedChapterId === 'ch4') return SAT_READING_CHAPTER_4;
    if (selectedChapterId === 'ch3') return SAT_READING_CHAPTER_3;
    if (selectedChapterId === 'ch2') return SAT_READING_CHAPTER_2;
    return SAT_READING_CHAPTER_1;
  }, [selectedChapterId]);

  // Active Chapter Questions - Lazily Extracted for Current Chapter Only
  const allChapterQuestions = useMemo(() => {
    let activeChapter = SAT_READING_CHAPTER_1;
    let chNum = 1;
    if (selectedChapterId === 'ch6') { activeChapter = SAT_READING_CHAPTER_6; chNum = 6; }
    else if (selectedChapterId === 'ch5') { activeChapter = SAT_READING_CHAPTER_5; chNum = 5; }
    else if (selectedChapterId === 'ch4') { activeChapter = SAT_READING_CHAPTER_4; chNum = 4; }
    else if (selectedChapterId === 'ch3') { activeChapter = SAT_READING_CHAPTER_3; chNum = 3; }
    else if (selectedChapterId === 'ch2') { activeChapter = SAT_READING_CHAPTER_2; chNum = 2; }
    
    return extractQuestionsForChapter(activeChapter.modules, chNum);
  }, [selectedChapterId]);

  const READING_CHAPTERS_METADATA: ReadingChapterSummary[] = useMemo(
    () => [
      {
        id: 'ch1',
        chapterNumber: 1,
        chapterTitle: 'Foundations of Reading & Core Analysis',
        sectionsCount: SAT_READING_CHAPTER_1.modules.length,
        questionsCount: 60,
        introduction:
          "Master main ideas, central claims, author's purpose, paragraph function, passage structure, explicit evidence, tone calibration, and logical inference across 10 sequential modules.",
        isAvailable: true,
      },
      {
        id: 'ch2',
        chapterNumber: 2,
        chapterTitle: 'Evidence & Inference',
        sectionsCount: SAT_READING_CHAPTER_2.modules.length,
        questionsCount: 60,
        introduction:
          "Master the complete evidence & inference system: claim-evidence pairs, uncertainty boundaries, competing counterevidence, causation vs correlation, and synthesis across 10 in-depth modules.",
        isAvailable: true,
      },
      {
        id: 'ch3',
        chapterNumber: 3,
        chapterTitle: 'Vocabulary in Context',
        sectionsCount: SAT_READING_CHAPTER_3.modules.length,
        questionsCount: 60,
        introduction:
          "Master contextual substitution, category constraints, secondary definitions, tone and connotation, rhetorical function, precision traps, and 5-step elimination across 12 master modules.",
        isAvailable: true,
      },
      {
        id: 'ch4',
        chapterNumber: 4,
        chapterTitle: 'Rhetorical Analysis',
        sectionsCount: SAT_READING_CHAPTER_4.modules.length,
        questionsCount: 60,
        introduction:
          "Master author's purpose, central claims, point of view, tone, paragraph roles, rhetorical strategy, evidence function, concessions, qualifications, idea relationships, and architecture across 14 master modules.",
        isAvailable: true,
      },
      {
        id: 'ch5',
        chapterNumber: 5,
        chapterTitle: 'Relationships & Synthesis',
        sectionsCount: SAT_READING_CHAPTER_5.modules.length,
        questionsCount: 60,
        introduction:
          "Master individual positions, multi-layer connections, agreement/disagreement, qualification, authorial priorities, shared goals/competing methods, time horizons, and elite paired-passage synthesis across 14 master modules.",
        isAvailable: true,
      },
      {
        id: 'ch6',
        chapterNumber: 6,
        chapterTitle: 'Data & Informational Reading',
        sectionsCount: SAT_READING_CHAPTER_6.modules.length,
        questionsCount: 60,
        introduction:
          "Master data as argument, multi-variable tables, complex graphs, text-data synthesis, percentages vs raw counts, scientific evidence, survey sampling, correlation vs causation, multi-source synthesis, and elite data reasoning across 16 master modules.",
        isAvailable: true,
      },
    ],
    []
  );

  // Practice State
  const [userSelectedAnswers, setUserSelectedAnswers] = useState<Record<string, number>>(() => {
    try {
      const saved = localStorage.getItem('sat_reading_answers');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('sat_reading_answers', JSON.stringify(userSelectedAnswers));
    } catch (e) {
      console.error(e);
    }
  }, [userSelectedAnswers]);

  const [selectedExerciseTab, setSelectedExerciseTab] = useState<number>(0); // 0 = All Questions, 1-4 = Specific Exercises
  const [activeQuestionIndex, setActiveQuestionIndex] = useState<number>(0);

  useEffect(() => {
    setActiveQuestionIndex(0);
  }, [selectedExerciseTab, selectedChapterId, activeTab]);

  // Group chapter questions into 4 balanced exercises with a diversity of topics (by interleaving questions from different modules)
  const exercisesList = useMemo(() => {
    const getInterleavedExercises = (questions: any[]) => {
      const e1: any[] = [];
      const e2: any[] = [];
      const e3: any[] = [];
      const e4: any[] = [];

      questions.forEach((q, idx) => {
        const target = idx % 4;
        if (target === 0) e1.push(q);
        else if (target === 1) e2.push(q);
        else if (target === 2) e3.push(q);
        else e4.push(q);
      });

      return [
        { exerciseNumber: 1, title: `Exercise 1: Targeted Practice Part 1 (${e1.length} Qs)`, questions: e1 },
        { exerciseNumber: 2, title: `Exercise 2: Targeted Practice Part 2 (${e2.length} Qs)`, questions: e2 },
        { exerciseNumber: 3, title: `Exercise 3: Mixed Practice (${e3.length} Qs)`, questions: e3 },
        { exerciseNumber: 4, title: `Exercise 4: Comprehensive Chapter Assessment (${e4.length} Qs)`, questions: e4 },
      ];
    };

    return getInterleavedExercises(allChapterQuestions);
  }, [allChapterQuestions]);

  const totalQuestionsCount = allChapterQuestions.length;
  const totalAnsweredCount = Object.keys(userSelectedAnswers).length;
  const totalCorrectCount = allChapterQuestions.filter(
    (q) => userSelectedAnswers[q.id] === q.correctAnswerIndex
  ).length;

  const activeExercises = useMemo(() => {
    if (selectedExerciseTab === 0) {
      return [
        {
          exerciseNumber: 0,
          title: `All ${totalQuestionsCount} Practice Questions`,
          questions: allChapterQuestions,
        },
      ];
    }
    return exercisesList.filter((e) => e.exerciseNumber === selectedExerciseTab);
  }, [exercisesList, selectedExerciseTab, allChapterQuestions, totalQuestionsCount]);

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
    <div id="sat-reading-section-explorer" className="space-y-6 text-slate-900 min-h-[600px] pb-12 relative overflow-x-hidden w-full">
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
                Available Reading Chapters
              </h2>
            </div>

            {/* White Topic Cards Grid - STRICTLY TWO PER ROW ON ALL SCREENS (grid-cols-2) */}
            <div className="grid grid-cols-2 gap-2.5 sm:gap-4">
              {READING_CHAPTERS_METADATA.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setSelectedChapterId(item.id);
                    setActiveTab('theory');
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
              <span>Back to Reading Chapters</span>
            </button>

            <span className="text-xs font-extrabold text-indigo-700 bg-indigo-50 uppercase tracking-wider px-3.5 py-1 rounded-full border border-indigo-200/80 shadow-2xs">
              Chapter {chapter.chapterNumber} of {READING_CHAPTERS_METADATA.length}
            </span>
          </div>

          {/* CHAPTER WELCOME INTRO CARD */}
          <div className="bg-white border border-slate-200/90 rounded-3xl p-5 sm:p-7 shadow-xs space-y-3">
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
              Welcome to Chapter {chapter.chapterNumber}: {chapter.chapterTitle}. {chapter.description}
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
                Put your knowledge into action with {totalQuestionsCount} curated practice questions featuring step-by-step solutions, passage evidence breakdowns, and instant feedback.
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
              {/* Numbered Theory Block Cards for each Module */}
              {chapter.modules.map((mod) => (
                <div
                  key={mod.id}
                  className="bg-white border border-slate-200 rounded-3xl p-5 sm:p-7 shadow-xs space-y-4"
                >
                  <div className="border-b border-slate-100 pb-3 flex items-center justify-between flex-wrap gap-2">
                    <h3 className="text-base sm:text-xl font-black text-slate-950 tracking-tight flex items-center gap-2.5">
                      <span className="p-2 rounded-xl bg-indigo-100 text-indigo-800 shrink-0">
                        <BookOpen className="w-5 h-5" />
                      </span>
                      <span>{cleanTitle(mod.moduleTitle)}</span>
                    </h3>
                    {mod.centralQuestion && (
                      <span className="text-xs text-slate-500 font-medium">{mod.centralQuestion}</span>
                    )}
                  </div>

                  {/* Render Sections in this Module */}
                  <div className="space-y-4 pt-1">
                    {(() => {
                      const processedSections: ReadingSectionItem[] = [];
                      for (let i = 0; i < mod.sections.length; i++) {
                        const sec = mod.sections[i];
                        const title = (sec.sectionTitle || '').trim().toUpperCase();
                        
                        // Filter out unwanted Chapter 6 sections that correspond to previous structure & filler
                        if (selectedChapterId === 'ch6') {
                          const isUnwantedChapter6Section = 
                            title.includes('TAKEAWAY') || 
                            title.includes('SUMMARY AND SYSTEM MASTERY') || 
                            title.includes('DIAGNOSTIC SUMMARY TABLE') ||
                            title === 'CHAPTER TAKEAWAY & CORE PRINCIPLES' ||
                            title === 'CHAPTER 6 SUMMARY AND SYSTEM MASTERY' ||
                            title === 'COMPLETE 70-QUESTION DIAGNOSTIC SUMMARY TABLE' ||
                            title === 'CHAPTER 6 FINAL TAKEAWAY';
                          if (isUnwantedChapter6Section) {
                            continue;
                          }
                        }

                        const isFirstPassAnalysis = title === 'FIRST-PASS ANALYSIS' || title === 'FIRST-PASS SYNTHESIS';
                        const isPracticeSection = title.includes('PRACTICE') || title.includes('APPLICATIONS');
                        
                        if (isFirstPassAnalysis && processedSections.length > 0) {
                          const prev = processedSections[processedSections.length - 1];
                          prev.content = [
                            ...(prev.content || []),
                            `### ${sec.sectionTitle}`,
                            ...(sec.content || [])
                          ];
                          continue;
                        }
                        
                        if (isPracticeSection && processedSections.length > 0 && i > 0) {
                          const prevSec = mod.sections[i - 1];
                          const prevSecTitle = (prevSec.sectionTitle || '').trim().toUpperCase();
                          const wasPrevFirstPass = prevSecTitle === 'FIRST-PASS ANALYSIS' || prevSecTitle === 'FIRST-PASS SYNTHESIS';
                          const isPrevDense = prevSecTitle.includes('DENSE');
                          
                          if (wasPrevFirstPass || isPrevDense) {
                            const prev = processedSections[processedSections.length - 1];
                            prev.content = [
                              ...(prev.content || []),
                              `### PRACTICE & APPLICATIONS`,
                              ...(sec.content || [])
                            ];
                            if (sec.questions && sec.questions.length > 0) {
                              prev.questions = [
                                ...(prev.questions || []),
                                ...sec.questions
                              ];
                            }
                            continue;
                          }
                        }
                        
                        processedSections.push({
                          ...sec,
                          content: sec.content ? [...sec.content] : undefined,
                          questions: sec.questions ? [...sec.questions] : undefined
                        });
                      }
                      
                      return processedSections.map((section, secIdx) => {
                      const hasQuestions = Boolean(section.questions && section.questions.length > 0);
                      const rawContentLines = [
                        ...(section.content || []),
                        ...(section.subsections?.flatMap((sub) => sub.text || []) || []),
                      ];
                      
                      // Filter out redundant placeholder instruction lines (e.g. "Read the passage carefully.")
                      const filteredContentLines = rawContentLines.filter((line) => {
                        const trimmed = line.trim().toLowerCase();
                        const isPlaceholder =
                          trimmed === 'read the passage.' ||
                          trimmed === 'read the passage carefully.' ||
                          trimmed === 'read the passage carefully' ||
                          trimmed === 'read the passage' ||
                          trimmed.startsWith('read the passage and solve') ||
                          trimmed.startsWith('read the passage and answer') ||
                          trimmed.startsWith('read the passage to analyze') ||
                          trimmed.startsWith('read the passage above and answer');
                        return !isPlaceholder;
                      });

                      const fullTextContent = filteredContentLines.join('\n\n');

                      return (
                        <div
                          key={section.id}
                          className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3"
                        >
                          {section.sectionTitle && (
                            <h4 className="text-sm sm:text-base font-black text-slate-950 border-b border-slate-200/60 pb-2">
                              {selectedChapterId === 'ch6' ? `${secIdx + 1}. ` : (section.sectionNumber ? `${section.sectionNumber}. ` : '')}
                              {cleanTitle(section.sectionTitle, hasQuestions)}
                            </h4>
                          )}

                          {/* Render Parsed Theory content */}
                          {fullTextContent && (
                            <FormattedReadingConceptText text={fullTextContent} />
                          )}

                          {/* Bullet points if present */}
                          {section.bulletPoints && section.bulletPoints.length > 0 && (
                            <div className="p-3.5 rounded-xl bg-indigo-50/80 border border-indigo-200/80 space-y-2">
                              <span className="text-xs font-black text-indigo-950 uppercase tracking-wider block">
                                📌 Key Analysis Elements
                              </span>
                              <ul className="space-y-1 text-xs text-indigo-900 font-medium">
                                {section.bulletPoints.map((bp, bpIdx) => (
                                  <li key={bpIdx} className="flex items-start gap-2">
                                    <span className="text-indigo-600 font-bold">•</span>
                                    <span>{cleanInlineMarkdown(bp)}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {/* Passage Card - Only render at section level if there are no embedded questions, avoiding duplication */}
                          {section.passage && !hasQuestions && (
                            <div className="space-y-2 pt-2">
                              <div className="text-xs font-black uppercase tracking-wider text-slate-800 flex items-center gap-1.5">
                                <FileText className="w-4 h-4 text-slate-700" />
                                <span>Textual Analysis Passage</span>
                              </div>
                              <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-300 shadow-2xs font-serif text-xs sm:text-sm text-slate-900 leading-relaxed">
                                {section.passage.title && (
                                  <div className="font-sans font-bold text-slate-800 text-xs mb-2 border-b border-slate-200 pb-1">
                                    {section.passage.title}
                                  </div>
                                )}
                                <FormattedPassageText text={section.passage.text} />
                              </div>
                            </div>
                          )}

                          {/* Breakdown Steps if present */}
                          {section.breakdown && section.breakdown.steps && (
                            <div className="space-y-2 pt-2">
                              <div className="text-xs font-black uppercase tracking-wider text-slate-900 flex items-center gap-1.5">
                                <BookOpen className="w-4 h-4 text-slate-800" />
                                <span>{section.breakdown.title || 'Step-by-Step Passage Breakdown'}</span>
                              </div>
                              <div className="space-y-2">
                                {section.breakdown.steps.map((st, stIdx) => (
                                  <div
                                    key={stIdx}
                                    className="p-3.5 rounded-xl bg-white border border-slate-200/90 text-xs leading-relaxed space-y-1 shadow-2xs"
                                  >
                                    <span className="font-extrabold text-slate-950 block text-xs">
                                      {st.label}
                                    </span>
                                    <p className="text-slate-700 font-medium">{st.content}</p>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Structural Map */}
                          {section.structuralMap && (
                            <div className="p-4 rounded-2xl bg-sky-50/80 border border-sky-300 space-y-2">
                              <span className="text-xs font-black text-sky-950 uppercase tracking-wider block">
                                🗺️ {section.structuralMap.title || 'Structural Map'}
                              </span>
                              <div className="space-y-1 text-xs text-sky-900 font-medium">
                                {section.structuralMap.steps.map((step, sIdx) => (
                                  <div key={sIdx} className="flex items-start gap-2">
                                    <span className="w-4 h-4 rounded-full bg-sky-200 text-sky-900 font-bold flex items-center justify-center text-[10px] shrink-0 mt-0.5">
                                      {sIdx + 1}
                                    </span>
                                    <span>{step}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Formula / Comparison */}
                          {section.formulaOrComparison && (
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                              <div className="p-3.5 rounded-xl bg-white border border-slate-200 space-y-2">
                                <span className="font-bold text-slate-900 text-xs block border-b border-slate-100 pb-1">
                                  {section.formulaOrComparison.leftTitle || 'Component A'}
                                </span>
                                <ul className="space-y-1 text-xs text-slate-700">
                                  {section.formulaOrComparison.leftItems?.map((it, itIdx) => (
                                    <li key={itIdx} className="flex items-start gap-1.5">
                                      <span className="text-slate-400">•</span>
                                      <span>{it}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div className="p-3.5 rounded-xl bg-white border border-slate-200 space-y-2">
                                <span className="font-bold text-slate-900 text-xs block border-b border-slate-100 pb-1">
                                  {section.formulaOrComparison.rightTitle || 'Component B'}
                                </span>
                                <ul className="space-y-1 text-xs text-slate-700">
                                  {section.formulaOrComparison.rightItems?.map((it, itIdx) => (
                                    <li key={itIdx} className="flex items-start gap-1.5">
                                      <span className="text-slate-400">•</span>
                                      <span>{it}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          )}

                          {/* Checklist */}
                          {section.checklist && (
                            <div className="p-3.5 rounded-xl bg-emerald-50/80 border border-emerald-200 space-y-2">
                              <span className="text-xs font-black text-emerald-950 uppercase tracking-wider block">
                                ✅ {section.checklist.title || 'Checklist'}
                              </span>
                              <ul className="space-y-1 text-xs text-emerald-900 font-medium">
                                {section.checklist.items.map((item, cIdx) => (
                                  <li key={cIdx} className="flex items-start gap-2">
                                    <span className="text-emerald-600 font-bold">•</span>
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {/* Master Rule */}
                          {section.masterRule && (
                            <div className="p-4 rounded-2xl bg-emerald-50 border-2 border-emerald-400 space-y-2 shadow-2xs">
                              <span className="text-xs font-black text-emerald-950 uppercase tracking-wider flex items-center gap-1.5">
                                <ShieldCheck className="w-4 h-4 text-emerald-700" />
                                <span>{section.masterRule.title || 'MASTER RULE'}</span>
                              </span>
                              <div className="space-y-1 text-xs sm:text-sm text-emerald-950 font-bold">
                                {section.masterRule.text.map((t, tIdx) => (
                                  <p key={tIdx}>{t}</p>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Table / Data Figure */}
                          {(section.tableData || section.dataFigure) && (() => {
                            const t = section.tableData || {
                              title: section.dataFigure?.title,
                              headers: section.dataFigure?.headers || section.dataFigure?.columns,
                              rows: section.dataFigure?.rows || [],
                              notes: section.dataFigure?.notes || section.dataFigure?.note,
                            };
                            return (
                              <div className="my-4 overflow-hidden rounded-xl border border-slate-300 bg-white shadow-2xs">
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
                                {t.notes && (
                                  <div className="bg-slate-50 px-4 py-2 border-t border-slate-200 text-[11px] text-slate-500 italic">
                                    {t.notes}
                                  </div>
                                )}
                              </div>
                            );
                          })()}

                          {/* Embedded Worked Theory Examples if this section contains questions */}
                          {section.questions && section.questions.length > 0 && (() => {
                            return (
                              <div className="space-y-4 pt-3 border-t border-slate-200">
                                <div className="text-xs font-black uppercase tracking-wider text-indigo-950 flex items-center justify-between flex-wrap gap-2">
                                  <div className="flex items-center gap-1.5">
                                    <BookOpen className="w-4 h-4 text-indigo-600" />
                                    <span>Worked Concept Examples & Solved Demonstrations ({section.questions.length})</span>
                                  </div>
                                  <span className="text-[10px] font-bold text-slate-500 font-sans">
                                    Fully Solved Step-by-Step with Distractor Analysis
                                  </span>
                                </div>
                                <div className="space-y-4">
                                  {section.questions.map((q, qIdx) => (
                                    <WorkedTheoryExampleCard
                                      key={q.id}
                                      question={q}
                                      index={qIdx}
                                      sectionPassage={section.passage}
                                    />
                                  ))}
                                </div>
                              </div>
                            );
                          })()}
                        </div>
                      );
                    });
                  })()}
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
                      Choose an exercise set or scroll down to work through questions sequentially with instant feedback and textual analysis.
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
                const isCorrect = selectedOption === q.correctAnswerIndex;

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
                            Module {q.moduleNumber}
                          </span>
                          <span className="px-2.5 py-1 rounded-full font-bold bg-slate-100 text-slate-700 text-[10px]">
                            Tag: Reading Analysis
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

                      {/* Question Passage if present */}
                      {q.passageText && (
                        <div className="p-4 sm:p-6 rounded-2xl bg-slate-50/90 border border-slate-200/90 font-serif text-sm sm:text-base text-slate-900 leading-relaxed shadow-2xs">
                          <div className="font-sans font-bold text-slate-600 text-xs uppercase tracking-wider mb-3 border-b border-slate-200 pb-1.5 flex items-center justify-between">
                            <span>{q.passageTitle || 'Passage Context'}</span>
                            <span className="text-[10px] font-mono text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-200">
                              Digital SAT Reading
                            </span>
                          </div>
                          <FormattedPassageText text={q.passageText} />
                        </div>
                      )}

                      {/* Question Data Figure / Table if present */}
                      {(q.dataFigure || q.tableData) && (() => {
                        const fig = q.dataFigure
                          ? {
                              title: q.dataFigure.title,
                              subtitle: q.dataFigure.subtitle,
                              headers: q.dataFigure.headers || q.dataFigure.columns,
                              rows: q.dataFigure.rows,
                              note: q.dataFigure.note || q.dataFigure.notes,
                            }
                          : {
                              title: q.tableData?.title || 'Data Table',
                              subtitle: undefined,
                              headers: q.tableData?.headers,
                              rows: q.tableData?.rows || [],
                              note: q.tableData?.notes,
                            };

                        return (
                          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs overflow-x-auto">
                            <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2">
                              {fig.title}
                            </div>
                            {fig.subtitle && (
                              <p className="text-2xs text-slate-500 mb-2">{fig.subtitle}</p>
                            )}
                            <table className="w-full text-left text-xs border-collapse font-sans">
                              {fig.headers && (
                                <thead>
                                  <tr className="border-b border-slate-200 bg-slate-50">
                                    {fig.headers.map((col, cIdx) => (
                                      <th key={cIdx} className="py-2 px-3 font-semibold text-slate-700">
                                        {col}
                                      </th>
                                    ))}
                                  </tr>
                                </thead>
                              )}
                              <tbody>
                                {fig.rows.map((row, rIdx) => (
                                  <tr key={rIdx} className="border-b border-slate-100 hover:bg-slate-50/50">
                                    {row.map((cell, cIdx) => (
                                      <td key={cIdx} className="py-2 px-3 text-slate-600 font-mono text-2xs sm:text-xs">
                                        {cell}
                                      </td>
                                    ))}
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                            {fig.note && (
                              <div className="mt-2 text-[11px] text-slate-500 italic">
                                {fig.note}
                              </div>
                            )}
                          </div>
                        );
                      })()}

                      {/* Question Prompt */}
                      <div className="space-y-3">
                        <p className="text-base sm:text-lg font-extrabold text-slate-950 leading-relaxed font-sans">
                          {q.prompt}
                        </p>
                      </div>

                      {/* Options List */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 font-sans">
                        {q.options.map((option, optIdx) => {
                          const isThisSelected = selectedOption === optIdx;
                          let btnStyle =
                            'bg-white border-slate-200 text-slate-900 hover:bg-indigo-50/80 hover:border-indigo-400 shadow-2xs';

                          if (isSubmitted) {
                            if (optIdx === q.correctAnswerIndex) {
                              btnStyle = 'bg-emerald-500 border-emerald-600 text-white font-bold shadow-xs';
                            } else if (isThisSelected) {
                              btnStyle = 'bg-rose-500 border-rose-600 text-white font-bold shadow-xs';
                            } else {
                              btnStyle = 'bg-slate-50 border-slate-200 text-slate-400 opacity-60';
                            }
                          }

                          return (
                            <button
                              key={option.label}
                              onClick={() => handleSelectAnswer(q.id, optIdx)}
                              className={`text-left p-4 rounded-2xl border transition-all text-xs sm:text-sm flex items-center justify-between cursor-pointer ${btnStyle}`}
                            >
                              <div className="flex items-center gap-3">
                                <span
                                  className={`w-7 h-7 rounded-xl flex items-center justify-center font-bold text-xs shrink-0 ${
                                    isSubmitted
                                      ? optIdx === q.correctAnswerIndex || isThisSelected
                                        ? 'bg-white/20 text-white'
                                        : 'bg-slate-100 text-slate-600'
                                      : 'bg-slate-100 text-slate-800 border border-slate-300'
                                  }`}
                                >
                                  {option.label}
                                </span>
                                <span className="leading-snug">{option.text}</span>
                              </div>
                              {isSubmitted && optIdx === q.correctAnswerIndex && (
                                <CheckCircle2 className="w-5 h-5 text-white shrink-0" />
                              )}
                              {isSubmitted && isThisSelected && optIdx !== q.correctAnswerIndex && (
                                <XCircle className="w-5 h-5 text-white shrink-0" />
                              )}
                            </button>
                          );
                        })}
                      </div>

                      {/* Comprehensive Solution Breakdown */}
                      {isSubmitted && (
                        <div className="p-5 sm:p-6 rounded-2xl bg-indigo-50/80 border border-indigo-200 space-y-4 text-xs sm:text-sm text-slate-800 font-sans">
                          <div className="font-extrabold text-indigo-950 flex items-center gap-2 border-b border-indigo-200 pb-2">
                            <HelpCircle className="w-5 h-5 text-indigo-600" />
                            <span>Complete Explanatory Breakdown</span>
                          </div>

                          {/* Why Correct */}
                          <div className="space-y-1 text-emerald-950 bg-emerald-50 p-3.5 rounded-xl border border-emerald-200">
                            <span className="font-black text-emerald-900 uppercase text-[10px] tracking-wider block">
                              {q.whyCorrectTitle || `Why Option ${q.correctAnswer} is Correct`}
                            </span>
                            <p className="leading-relaxed">{q.whyCorrect}</p>
                          </div>

                          {/* Passage Support */}
                          {q.passageSupport && (
                            <div className="p-3 rounded-xl bg-slate-100 border border-slate-200 text-xs text-slate-800 space-y-1">
                              <span className="font-black text-slate-900 uppercase text-[10px] tracking-wider block">
                                Passage Evidence & Support
                              </span>
                              <p className="font-serif italic leading-relaxed text-slate-900">{q.passageSupport}</p>
                            </div>
                          )}

                          {/* Distractor Analysis */}
                          {q.distractorExplanations && q.distractorExplanations.length > 0 && (
                            <div className="space-y-2 pt-1">
                              <span className="font-black text-slate-900 uppercase text-[10px] tracking-wider block">
                                Distractor Elimination Breakdown
                              </span>
                              <div className="space-y-1.5">
                                {q.distractorExplanations.map((d, dIdx) => (
                                  <div
                                    key={dIdx}
                                    className="flex items-start gap-2 p-2.5 rounded-lg bg-white border border-slate-200 text-xs"
                                  >
                                    <span className="font-black text-slate-900 min-w-[24px]">
                                      [{d.optionLabel}]:
                                    </span>
                                    <span className="text-slate-700">{d.explanation}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Elimination Shortcut */}
                          {q.eliminationShortcut && (
                            <div className="p-3 rounded-xl bg-sky-50 border border-sky-200 text-xs text-sky-950 space-y-1">
                              <span className="font-black text-sky-900 uppercase text-[10px] tracking-wider block flex items-center gap-1">
                                <Zap className="w-3.5 h-3.5 text-sky-600" />
                                <span>Pedagogical Elimination Shortcut</span>
                              </span>
                              <p className="font-medium leading-relaxed">{q.eliminationShortcut}</p>
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
