import React from 'react';
import { BookOpen, AlertTriangle, Zap, CheckCircle2, Calculator, Lightbulb, ListOrdered, Sparkles, ChevronRight } from 'lucide-react';

/**
 * Clean LaTeX symbols to crisp native Unicode and mathematical characters
 * without losing bold/italic markdown formatting.
 */
export function cleanMathSymbols(text: string | undefined | null): string {
  if (!text) return '';

  let formatted = text;

  // LaTeX environments
  formatted = formatted.replace(/\\begin\s*\{[^}]+\}/g, '');
  formatted = formatted.replace(/\\end\s*\{[^}]+\}/g, '');
  formatted = formatted.replace(/\\left\s*[\{\(\[\.\|]/g, '');
  formatted = formatted.replace(/\\right\s*[\}\)\]\.\|]/g, '');

  // Escaped special characters
  formatted = formatted.replace(/\\%/g, '%');
  formatted = formatted.replace(/\\_/g, '_');
  formatted = formatted.replace(/\\&/g, '&');
  formatted = formatted.replace(/\\#/g, '#');
  formatted = formatted.replace(/\\\$/g, '$');
  formatted = formatted.replace(/\\\{/g, '{');
  formatted = formatted.replace(/\\\}/g, '}');

  // Font styles
  formatted = formatted.replace(/\\mathbf\s*\{([^}]+)\}/g, '$1');
  formatted = formatted.replace(/\\mathit\s*\{([^}]+)\}/g, '$1');
  formatted = formatted.replace(/\\mathrm\s*\{([^}]+)\}/g, '$1');
  formatted = formatted.replace(/\\boldsymbol\s*\{([^}]+)\}/g, '$1');
  formatted = formatted.replace(/\\mathbb\s*\{([^}]+)\}/g, '$1');
  formatted = formatted.replace(/\\mathcal\s*\{([^}]+)\}/g, '$1');
  formatted = formatted.replace(/\\textbf\s*\{([^}]+)\}/g, '**$1**');
  formatted = formatted.replace(/\\textit\s*\{([^}]+)\}/g, '*$1*');
  formatted = formatted.replace(/\\text\s*\{([^}]+)\}/g, '$1');

  // Math decorations
  formatted = formatted.replace(/\\bar\s*\{?x\}?/g, 'x̄');
  formatted = formatted.replace(/\\bar\s*\{?y\}?/g, 'ȳ');
  formatted = formatted.replace(/\\bar\s*\{?X\}?/g, 'X̄');
  formatted = formatted.replace(/\\bar\s*\{?Y\}?/g, 'Ȳ');
  formatted = formatted.replace(/\\bar\s*\{([^}]+)\}/g, '$1̄');
  formatted = formatted.replace(/\\hat\s*\{?y\}?/g, 'ŷ');
  formatted = formatted.replace(/\\hat\s*\{?x\}?/g, 'x̂');
  formatted = formatted.replace(/\\hat\s*\{?Y\}?/g, 'Ŷ');
  formatted = formatted.replace(/\\hat\s*\{([^}]+)\}/g, '$1̂');
  formatted = formatted.replace(/\\vec\s*\{([^}]+)\}/g, '$1');

  // Square roots and fractions
  formatted = formatted.replace(/\\sqrt\s*\{([^}]+)\}/g, '√($1)');
  formatted = formatted.replace(/\\sqrt\s+(\w+)/g, '√$1');

  for (let i = 0; i < 4; i++) {
    formatted = formatted.replace(/\\frac\s*\{([^{}]+)\}\s*\{([^{}]+)\}/g, '($1)/($2)');
  }
  formatted = formatted.replace(/\(([^()]+)\)\/\(([^()]+)\)/g, (match, p1, p2) => {
    const cleanP1 = p1.trim();
    const cleanP2 = p2.trim();
    return `${cleanP1} / ${cleanP2}`;
  });

  // Common math operators
  formatted = formatted.replace(/\\times/g, '×');
  formatted = formatted.replace(/\\cdot/g, '·');
  formatted = formatted.replace(/\\div/g, '÷');
  formatted = formatted.replace(/\\pm/g, '±');
  formatted = formatted.replace(/\\mp/g, '∓');
  formatted = formatted.replace(/\\leq/g, '≤');
  formatted = formatted.replace(/\\geq/g, '≥');
  formatted = formatted.replace(/\\le\b/g, '≤');
  formatted = formatted.replace(/\\ge\b/g, '≥');
  formatted = formatted.replace(/\\neq/g, '≠');
  formatted = formatted.replace(/\\approx/g, '≈');
  formatted = formatted.replace(/\\propto\b/g, '∝');
  formatted = formatted.replace(/\\sum\b/g, '∑');
  formatted = formatted.replace(/\\prod\b/g, '∏');
  formatted = formatted.replace(/\\dots\b/g, '...');
  formatted = formatted.replace(/\\cdots\b/g, '...');
  formatted = formatted.replace(/\\ldots\b/g, '...');
  formatted = formatted.replace(/\\cup/g, '∪');
  formatted = formatted.replace(/\\cap/g, '∩');
  formatted = formatted.replace(/\\mid\b/g, '|');
  formatted = formatted.replace(/\\infty/g, '∞');
  formatted = formatted.replace(/\\emptyset/g, '∅');
  formatted = formatted.replace(/\\in\b/g, '∈');
  formatted = formatted.replace(/\\notin\b/g, '∉');
  formatted = formatted.replace(/\\subset\b/g, '⊂');
  formatted = formatted.replace(/\\subseteq\b/g, '⊆');
  formatted = formatted.replace(/\\implies/g, '⇒');
  formatted = formatted.replace(/\\iff/g, '⇔');
  formatted = formatted.replace(/==>/g, '⇒');
  formatted = formatted.replace(/<==/g, '⇐');
  formatted = formatted.replace(/<=>/g, '⇔');
  formatted = formatted.replace(/->/g, '→');

  // Greek letters & symbols
  formatted = formatted.replace(/\\Delta/g, 'Δ');
  formatted = formatted.replace(/\\pi/g, 'π');
  formatted = formatted.replace(/\\theta/g, 'θ');
  formatted = formatted.replace(/\\sigma/g, 'σ');
  formatted = formatted.replace(/\\mu/g, 'μ');
  formatted = formatted.replace(/\\alpha/g, 'α');
  formatted = formatted.replace(/\\beta/g, 'β');
  formatted = formatted.replace(/\\lambda/g, 'λ');
  formatted = formatted.replace(/\\circ/g, '°');

  // Subscripts
  formatted = formatted.replace(/([a-zA-Z])_\{?\\text\{([^}]+)\}\}?/g, '$1($2)');
  formatted = formatted.replace(/([a-zA-Z])_\{([^}]+)\}/g, '$1($2)');

  // Common exponents to Unicode superscripts where appropriate
  formatted = formatted.replace(/\^2\b/g, '²');
  formatted = formatted.replace(/\^3\b/g, '³');
  formatted = formatted.replace(/\^x\b/g, 'ˣ');
  formatted = formatted.replace(/\^n\b/g, 'ⁿ');
  formatted = formatted.replace(/\^y\b/g, 'ʸ');
  formatted = formatted.replace(/\^\{-1\}/g, '⁻¹');
  formatted = formatted.replace(/_1\b/g, '₁');
  formatted = formatted.replace(/_2\b/g, '₂');
  formatted = formatted.replace(/_n\b/g, 'ₙ');
  formatted = formatted.replace(/_x\b/g, 'ₓ');
  formatted = formatted.replace(/_y\b/g, 'ᵧ');
  formatted = formatted.replace(/_i\b/g, 'ᵢ');

  // Spacing & escapes
  formatted = formatted.replace(/\\quad/g, '  ');
  formatted = formatted.replace(/\\qquad/g, '    ');
  formatted = formatted.replace(/\\,/g, ' ');
  formatted = formatted.replace(/\\;/g, ' ');
  formatted = formatted.replace(/\\!/g, '');
  formatted = formatted.replace(/\\\\/g, '\n');

  // Dollar signs
  formatted = formatted.replace(/\$\$/g, '');
  formatted = formatted.replace(/\$/g, '');

  // Final cleanup of stray backslashes
  formatted = formatted.replace(/\\([a-zA-Z]+)/g, '$1');

  return formatted;
}

/**
 * Parses inline markdown (bold, italic, code, elimination tags) into rich React nodes.
 */
export function cleanMathInlineMarkdown(str: string): React.ReactNode {
  if (!str) return null;
  const cleaned = cleanMathSymbols(str).replace(/^#+\s*/, '').replace(/^>\s*/, '');

  // Check for special elimination/keep tags
  const parts = cleaned.split(/(\*\*.*?\*\*|\*.*?\*|`.*?`|\(Keeps\s+[A-D]\)|\(Eliminate\s+[A-D]\)|\(Matches\s+[A-D]!*?\))/g);

  return (
    <>
      {parts.map((part, i) => {
        if (!part) return null;

        // Bold
        if (part.startsWith('**') && part.endsWith('**') && part.length >= 4) {
          return <strong key={i} className="font-extrabold text-slate-950">{part.slice(2, -2)}</strong>;
        }

        // Italic
        if (part.startsWith('*') && part.endsWith('*') && part.length >= 2 && !part.startsWith('**')) {
          return <em key={i} className="italic text-slate-800">{part.slice(1, -1)}</em>;
        }

        // Inline Code / Math Variable
        if (part.startsWith('`') && part.endsWith('`') && part.length >= 2) {
          return (
            <code key={i} className="font-mono px-1.5 py-0.5 rounded bg-slate-100 border border-slate-200 text-indigo-900 font-bold text-xs">
              {part.slice(1, -1)}
            </code>
          );
        }

        // Keeps tag (e.g. (Keeps A))
        if (/^\(Keeps\s+[A-D]\)$/i.test(part)) {
          return (
            <span key={i} className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-900 border border-emerald-300 font-black text-[11px] shadow-2xs my-0.5 mx-1">
              ✓ {part.slice(1, -1)}
            </span>
          );
        }

        // Eliminate tag (e.g. (Eliminate D))
        if (/^\(Eliminate\s+[A-D]\)$/i.test(part)) {
          return (
            <span key={i} className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-rose-100 text-rose-900 border border-rose-300 font-black text-[11px] shadow-2xs my-0.5 mx-1">
              ✗ {part.slice(1, -1)}
            </span>
          );
        }

        // Matches tag (e.g. (Matches C!))
        if (/^\(Matches\s+[A-D]!*?\)$/i.test(part)) {
          return (
            <span key={i} className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-emerald-600 text-white font-black text-[11px] shadow-2xs my-0.5 mx-1">
              ★ {part.slice(1, -1)}
            </span>
          );
        }

        return part;
      })}
    </>
  );
}

export interface MathParsedBlock {
  type: 'normal' | 'trap' | 'elimination' | 'example' | 'formula' | 'step';
  title: string;
  content: string;
}

/**
 * Parses full theory text into structured cards (Master Principle, Traps, Fast Methods, Worked Examples, Formula boxes).
 */
export function parseMathTheoryBlocks(text: string): MathParsedBlock[] {
  if (!text) return [];

  const lines = text.split('\n');
  const blocks: MathParsedBlock[] = [];
  let currentBlock: MathParsedBlock = { type: 'normal', title: '', content: '' };
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

  const isHeader = (line: string): { type: MathParsedBlock['type']; title: string } | null => {
    const raw = line.trim();
    if (!raw) return null;

    const clean = raw
      .replace(/^#+\s*/, '')
      .replace(/^[\*\-]\s*/, '')
      .replace(/^>\s*/, '')
      .replace(/^\*\*\s*/, '')
      .replace(/\s*\*\*$/, '')
      .trim();

    if (!clean) return null;

    // 1. Critical Rules & SAT Traps
    if (/^(CRITICAL RULE|SAT TRAP|IMPORTANT WARNING|COMMON ERROR|WARNING|PITFALL|DANGLING|CAUTION|FATAL MISTAKE)/i.test(clean)) {
      return { type: 'trap', title: clean };
    }

    // 2. Fast Shortcuts, Elimination & Desmos Techniques
    if (/^(SHORTCUT|DESMOS SHORTCUT|DESMOS TECHNIQUE|SAT SHORTCUT|FAST METHOD|ELIMINATION TECHNIQUE|TABLE ELIMINATION|FAST TEST|PRIME BASE REDUCTION FRAMEWORK|EXPONENTIAL DECONSTRUCTION|CONJUGATE RATIONALIZATION)/i.test(clean)) {
      return { type: 'elimination', title: clean };
    }

    // 3. Examples / Compare / Walkthroughs
    if (/^(EXAMPLE|WORKED EXAMPLE|WORKED WALKTHROUGH|SAMPLE PROBLEM|COMPARE|CLEAR VS|BEFORE VS)/i.test(clean)) {
      return { type: 'example', title: clean };
    }

    return null;
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

/**
 * Renders lines of math content with step badges, formula callouts, parameter tags, and subheadings.
 */
export function renderRichMathLines(content: string) {
  if (!content) return null;
  const lines = content.split('\n');

  return (
    <div className="space-y-2">
      {lines.map((line, idx) => {
        const trimmed = line.trim();
        if (!trimmed) {
          return <div key={idx} className="h-1.5" />;
        }

        // Markdown Subheaders starting with ### or ## or #
        if (/^#+\s+/.test(trimmed)) {
          const title = trimmed.replace(/^#+\s+/, '');
          return (
            <div key={idx} className="font-extrabold text-slate-950 text-xs sm:text-sm pt-2.5 pb-1 flex items-center gap-2 border-b border-slate-200">
              <span className="w-2 h-2 rounded-full bg-slate-800 shrink-0" />
              <span>{cleanMathInlineMarkdown(title)}</span>
            </div>
          );
        }

        // Major Headings / Category labels (e.g. "Order of Operations for Multiple Transformations:", "Where:", "Vertical Transformations (Outside f):")
        if (
          (/^•\s+[A-Z0-9\s—–\-\:\(\)\"\']+\:$/i.test(trimmed) && trimmed.length < 80) ||
          (/^[A-Z0-9\s—–\-\:\(\)\"\']{3,65}\:$/i.test(trimmed) && !trimmed.startsWith('-') && !/^\d+[\.\)]/.test(trimmed))
        ) {
          const headingText = trimmed.replace(/^•\s*/, '');
          return (
            <div key={idx} className="font-black text-slate-950 text-xs sm:text-sm pt-2 pb-0.5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 shrink-0" />
              <span className="uppercase tracking-wider text-[11px] sm:text-xs text-indigo-950 font-black">
                {cleanMathInlineMarkdown(headingText)}
              </span>
            </div>
          );
        }

        // Standalone Core Equation / Formula lines (e.g., "g(x) = a · f( b · (x - h) ) + k" or "x² - 5x + 18 = 3x + c")
        const isStandaloneEquation =
          /^(g\(x\)|f\(x\)|h\(x\)|y|x|a\^|D\s*=|\w+\(x\))\s*=\s*.+/i.test(trimmed) &&
          !trimmed.includes(':') &&
          trimmed.length < 80;

        if (isStandaloneEquation) {
          return (
            <div
              key={idx}
              className="my-2 p-3 sm:p-3.5 rounded-xl bg-slate-900 text-slate-100 border border-slate-800 text-xs sm:text-sm font-mono font-black tracking-wide shadow-2xs flex items-center justify-between overflow-x-auto"
            >
              <span>{cleanMathSymbols(trimmed)}</span>
              <span className="text-[9px] font-black px-2 py-0.5 rounded bg-slate-800 text-indigo-300 uppercase tracking-widest ml-2 shrink-0">
                Formula
              </span>
            </div>
          );
        }

        // Numbered Steps (e.g. "Step 1: Horizontal Shifts (h)" or "1. Test x = 0: f(0) = 5.")
        if (/^(Step\s+\d+|[0-9]+[\.\)])\s*[\:\–\-]?\s*/i.test(trimmed)) {
          const matchStep = trimmed.match(/^(Step\s+\d+|[0-9]+[\.\)])\s*[\:\–\-]?\s*/i);
          const stepPrefix = matchStep ? matchStep[1].replace(/[\.\)]/, '') : '';
          const stepBody = trimmed.replace(/^(Step\s+\d+|[0-9]+[\.\)])\s*[\:\–\-]?\s*/i, '');

          // Check if this step is a test condition with conclusion (e.g. "4. The correct model is...")
          const isConclusion = /correct model|therefore|in conclusion|the answer is/i.test(stepBody);

          return (
            <div
              key={idx}
              className={`flex items-start gap-2.5 p-2.5 sm:p-3 rounded-xl border my-1.5 shadow-2xs ${
                isConclusion
                  ? 'bg-emerald-50/90 border-emerald-300 text-emerald-950 font-bold'
                  : 'bg-slate-50 border-slate-200/90 text-slate-900 font-medium'
              }`}
            >
              <span
                className={`w-5 h-5 rounded-full font-black text-[10px] flex items-center justify-center shrink-0 mt-0.5 ${
                  isConclusion
                    ? 'bg-emerald-700 text-white'
                    : 'bg-slate-800 text-white'
                }`}
              >
                {stepPrefix.includes('Step') ? stepPrefix.replace('Step', '').trim() : stepPrefix}
              </span>
              <div className="flex-1 text-xs sm:text-sm leading-relaxed">
                {isConclusion && (
                  <span className="inline-flex items-center gap-1 font-black text-emerald-900 mr-1.5 uppercase text-[10px] tracking-wider">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 inline" />
                    Conclusion:
                  </span>
                )}
                {cleanMathInlineMarkdown(stepBody)}
              </div>
            </div>
          );
        }

        // Sub-option bullet points in steps / proofs (e.g. "• A: 3(0) + 5 = 5 (Keeps A)" or "• B: (0)^2 + 5 = 5 (Keeps B)")
        if (/^[\*•\-]\s*([A-D])\:\s*/i.test(trimmed)) {
          const matchOpt = trimmed.match(/^[\*•\-]\s*([A-D])\:\s*/i);
          const optLetter = matchOpt ? matchOpt[1].toUpperCase() : '';
          const optBody = trimmed.replace(/^[\*•\-]\s*([A-D])\:\s*/i, '');

          return (
            <div key={idx} className="flex items-center justify-between p-2 sm:p-2.5 rounded-lg bg-white border border-slate-200 text-xs sm:text-sm my-1 pl-2.5 ml-4 shadow-2xs">
              <div className="flex items-center gap-2 font-mono font-bold text-slate-900">
                <span className="w-5 h-5 rounded-md bg-slate-100 text-slate-800 font-black text-[11px] flex items-center justify-center border border-slate-300 shrink-0">
                  {optLetter}
                </span>
                <span>{cleanMathInlineMarkdown(optBody)}</span>
              </div>
            </div>
          );
        }

        // Parameter bullet lists (e.g. "- a: Vertical stretch ...", "- k: Vertical shift ...", "- b: ...", "- h: ...")
        if (/^[\*\-•]\s*([a-z0-9_]+)\:\s*/i.test(trimmed) && trimmed.length < 150) {
          const matchParam = trimmed.match(/^[\*\-•]\s*([a-z0-9_]+)\:\s*/i);
          const paramName = matchParam ? matchParam[1] : '';
          const paramBody = trimmed.replace(/^[\*\-•]\s*([a-z0-9_]+)\:\s*/i, '');

          return (
            <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-900 font-medium leading-relaxed pl-3 my-1">
              <span className="font-mono font-black text-indigo-900 bg-indigo-50 border border-indigo-200 px-2 py-0.5 rounded text-[11px] shrink-0 mt-0.5">
                {paramName}
              </span>
              <span className="flex-1 pt-0.5">{cleanMathInlineMarkdown(paramBody)}</span>
            </div>
          );
        }

        // Generic Bullet items (starting with • or - or *)
        if (/^[\*\-•]\s+/.test(trimmed)) {
          const listText = trimmed.replace(/^[\*\-•]\s+/, '');
          return (
            <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-900 font-medium leading-relaxed pl-2 my-1">
              <span className="text-slate-800 font-black text-base shrink-0 leading-none mt-0.5">•</span>
              <span className="flex-1">{cleanMathInlineMarkdown(listText)}</span>
            </div>
          );
        }

        // Standard text paragraph
        return (
          <p key={idx} className="text-xs sm:text-sm font-medium text-slate-900 leading-relaxed my-0.5">
            {cleanMathInlineMarkdown(trimmed)}
          </p>
        );
      })}
    </div>
  );
}

/**
 * Main Concept Text component that formats all Math Theory blocks neatly into cards
 * without removing a single word!
 */
export const FormattedMathConceptText: React.FC<{ text: string }> = ({ text }) => {
  const blocks = parseMathTheoryBlocks(text);

  return (
    <div className="space-y-3">
      {blocks.map((block, idx) => {
        // Red Box: SAT Traps & Critical Rules
        if (block.type === 'trap') {
          return (
            <div
              key={idx}
              className="bg-rose-50/90 border-2 border-rose-300 rounded-xl sm:rounded-2xl p-3 sm:p-5 space-y-2.5 shadow-2xs my-2 sm:my-3"
            >
              <div className="flex items-center justify-between flex-wrap gap-2 border-b border-rose-200/80 pb-2">
                <span className="text-xs font-black text-rose-950 uppercase tracking-wider flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-rose-700 shrink-0" />
                  <span>{block.title || 'CRITICAL RULE & HIGH-FREQUENCY SAT TRAP'}</span>
                </span>
                <span className="text-[10px] font-black px-2.5 py-0.5 rounded-full bg-rose-200 text-rose-950 border border-rose-300 uppercase tracking-wider">
                  Critical Rule
                </span>
              </div>
              <div className="text-xs sm:text-sm text-rose-950 font-medium leading-relaxed">
                {renderRichMathLines(block.content)}
              </div>
            </div>
          );
        }

        // Sky Blue Box: SAT Tricks, Elimination & Desmos Techniques
        if (block.type === 'elimination') {
          return (
            <div
              key={idx}
              className="bg-sky-50/90 border-2 border-sky-400 rounded-xl sm:rounded-2xl p-3 sm:p-5 space-y-2.5 shadow-2xs my-2 sm:my-3"
            >
              <div className="flex items-center justify-between flex-wrap gap-2 border-b border-sky-200/80 pb-2">
                <span className="text-xs font-black text-sky-950 uppercase tracking-wider flex items-center gap-2">
                  <Zap className="w-4 h-4 text-sky-700 shrink-0" />
                  <span>{block.title || 'SAT SHORTCUT & FAST METHOD'}</span>
                </span>
                <span className="text-[10px] font-black px-2.5 py-0.5 rounded-full bg-sky-200 text-sky-950 border border-sky-300 uppercase tracking-wider">
                  Fast Shortcut
                </span>
              </div>
              <div className="text-xs sm:text-sm text-sky-950 font-medium leading-relaxed">
                {renderRichMathLines(block.content)}
              </div>
            </div>
          );
        }

        // Amber Box: Worked Examples in Text
        if (block.type === 'example') {
          return (
            <div
              key={idx}
              className="bg-amber-50/90 border-2 border-amber-300 rounded-xl sm:rounded-2xl p-3 sm:p-5 space-y-3 shadow-2xs my-2 sm:my-3"
            >
              <div className="flex items-center justify-between flex-wrap gap-2 border-b border-amber-200/80 pb-2.5">
                <span className="text-xs font-black text-amber-950 uppercase tracking-wider flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-amber-700 shrink-0" />
                  <span>{block.title || 'WORKED EXAMPLE'}</span>
                </span>
                <span className="text-[10px] font-black px-2.5 py-0.5 rounded-full bg-amber-200 text-amber-950 border border-amber-300 uppercase tracking-wider">
                  Yellow Card Example
                </span>
              </div>
              <div className="text-xs sm:text-sm text-slate-900 leading-relaxed font-sans space-y-2">
                {renderRichMathLines(block.content)}
              </div>
            </div>
          );
        }

        // Normal content block
        return (
          <div key={idx} className="space-y-2">
            {renderRichMathLines(block.content)}
          </div>
        );
      })}
    </div>
  );
};

/**
 * Step-by-Step Solution & Mathematical Proof Formatter for Worked Examples and Practice Questions.
 */
export const FormattedMathExplanation: React.FC<{ text: string }> = ({ text }) => {
  if (!text) return null;

  return (
    <div className="space-y-2 text-xs sm:text-sm leading-relaxed">
      {renderRichMathLines(text)}
    </div>
  );
};
