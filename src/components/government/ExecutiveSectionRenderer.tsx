import React from 'react';

interface ExecutiveSectionRendererProps {
  content: string;
}

export const ExecutiveSectionRenderer: React.FC<ExecutiveSectionRendererProps> = ({ content }) => {
  const rawLines = content.split('\n');
  const blocks: React.ReactNode[] = [];
  let i = 0;

  // Helper to strip any leftover stickers/emojis
  const stripEmojis = (str: string) => {
    return str
      .replace(/[\u{1F300}-\u{1F6FF}\u{1F900}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{1F1E6}-\u{1F1FF}⭐🔴✅❌⚠️]/gu, '')
      .replace(/\s{2,}/g, ' ')
      .trim();
  };

  while (i < rawLines.length) {
    const rawLine = rawLines[i];
    const trimmed = rawLine.trim();

    // Skip empty lines or lone connector symbols
    if (!trimmed || trimmed === '↓') {
      i++;
      continue;
    }

    // 1. TABLE CHECK (consecutive lines containing '|')
    if (trimmed.includes('|')) {
      const tableLines: string[] = [];
      while (i < rawLines.length && rawLines[i].trim().includes('|')) {
        tableLines.push(rawLines[i].trim());
        i++;
      }

      const rows = tableLines.map(r =>
        r.split('|').map(c => stripEmojis(c.trim())).filter((c, idx, arr) => {
          if (idx === 0 && r.startsWith('|') && c === '') return false;
          if (idx === arr.length - 1 && r.endsWith('|') && c === '') return false;
          return true;
        })
      );

      if (rows.length > 0) {
        const headerRow = rows[0];
        const dataRows = rows.slice(1);

        blocks.push(
          <div key={`table-${i}`} className="my-3 overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-slate-200 text-slate-500 font-semibold">
                  {headerRow.map((header, hIdx) => (
                    <th key={hIdx} className="py-2.5 pr-4 text-xs font-semibold">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {dataRows.map((row, rIdx) => (
                  <tr key={rIdx} className="hover:bg-slate-50/60 transition-colors">
                    {row.map((cell, cIdx) => (
                      <td key={cIdx} className="py-2.5 pr-4 text-slate-700 font-normal">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
        continue;
      }
    }

    // 2. CONSECUTIVE NUMBERED ITEMS CHECK (e.g. 1. Bangladesh, 2. Belize... or 1. Degree cert...)
    const isNumbered = (l: string) => /^\d+\.\s+/.test(l.trim());
    if (isNumbered(trimmed)) {
      const numItems: { num: string; text: string }[] = [];
      while (i < rawLines.length && isNumbered(rawLines[i])) {
        const l = rawLines[i].trim();
        const m = l.match(/^(\d+)\.\s*(.*)$/);
        if (m) {
          numItems.push({ num: m[1], text: stripEmojis(m[2]) });
        }
        i++;
      }

      // Check if items are compact (like a country list or short labels < 35 chars)
      const isCompactList = numItems.length > 5 && numItems.every(it => it.text.length < 35);

      if (isCompactList) {
        // Render compact multi-column grid (NO CARDS!)
        blocks.push(
          <div key={`compact-num-${i}`} className="my-2.5 py-1.5">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-1 text-xs text-slate-700">
              {numItems.map((item, idx) => (
                <div key={idx} className="flex items-baseline gap-1.5 py-0.5">
                  <span className="text-slate-400 font-medium tabular-nums shrink-0 text-[11px]">
                    {item.num}.
                  </span>
                  <span className="text-slate-800 font-medium truncate">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        );
      } else {
        // Render clean standard numbered list (NO CARDS!)
        blocks.push(
          <div key={`num-list-${i}`} className="my-2.5 space-y-2 py-1">
            {numItems.map((item, idx) => {
              const colonIdx = item.text.indexOf(':');
              const hasColon = colonIdx > 0 && colonIdx < 45;
              const title = hasColon ? item.text.substring(0, colonIdx) : '';
              const body = hasColon ? item.text.substring(colonIdx + 1).trim() : item.text;

              return (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                  <span className="font-semibold text-slate-400 shrink-0 mt-0.5 tabular-nums text-xs">
                    {item.num}.
                  </span>
                  <div className="flex-1">
                    {title ? (
                      <>
                        <strong className="text-slate-900 font-semibold mr-1.5">{title}:</strong>
                        <span>{body}</span>
                      </>
                    ) : (
                      <span>{item.text}</span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        );
      }
      continue;
    }

    // 3. STEP / STAGE CHECK (e.g. "Stage 1: ..." or "STEP 1 — ...")
    const isStepOrStage = (l: string) => /^(STEP\s+\d+|Stage\s+\d+)/i.test(l.trim());
    if (isStepOrStage(trimmed)) {
      const stepItems: { label: string; text: string }[] = [];
      while (i < rawLines.length && (isStepOrStage(rawLines[i]) || rawLines[i].trim() === '↓')) {
        const l = rawLines[i].trim();
        if (l !== '↓') {
          const m = l.match(/^(STEP\s+\d+|Stage\s+\d+)\s*[:—–-]?\s*(.*)$/i);
          if (m) {
            stepItems.push({ label: m[1], text: stripEmojis(m[2]) });
          }
        }
        i++;
      }

      blocks.push(
        <div key={`steps-${i}`} className="my-2 space-y-2 py-1">
          {stepItems.map((st, idx) => (
            <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
              <span className="text-[11px] font-semibold text-slate-500 shrink-0 mt-0.5 bg-slate-100 px-1.5 py-0.5 rounded">
                {st.label}
              </span>
              <div className="flex-1 font-medium text-slate-800">
                {st.text}
              </div>
            </div>
          ))}
        </div>
      );
      continue;
    }

    // 4. CONSECUTIVE KEY: VALUE CHECK (2 or more lines like "Key: Value")
    const isKeyValue = (l: string) => {
      const s = l.trim();
      return !s.startsWith('*') && !s.startsWith('-') && !isStepOrStage(s) && !isNumbered(s) && s.includes(':') && s.indexOf(':') < 45;
    };

    if (isKeyValue(trimmed)) {
      const kvItems: { key: string; value: string }[] = [];
      while (i < rawLines.length && isKeyValue(rawLines[i])) {
        const l = rawLines[i].trim();
        const colonIdx = l.indexOf(':');
        const key = stripEmojis(l.substring(0, colonIdx).trim());
        const val = stripEmojis(l.substring(colonIdx + 1).trim());
        kvItems.push({ key, value: val });
        i++;
      }

      if (kvItems.length >= 2) {
        blocks.push(
          <div key={`kv-group-${i}`} className="my-2.5 divide-y divide-slate-100">
            {kvItems.map((kv, idx) => (
              <div
                key={idx}
                className="flex flex-col sm:flex-row sm:items-baseline justify-between py-2 gap-1 text-xs sm:text-sm"
              >
                <span className="text-slate-500 font-medium sm:w-1/2 shrink-0">
                  {kv.key}
                </span>
                <span className="text-slate-900 font-semibold sm:w-1/2 text-left sm:text-right">
                  {kv.value || '—'}
                </span>
              </div>
            ))}
          </div>
        );
        continue;
      } else {
        // Single line fallback
        i -= kvItems.length;
      }
    }

    // 5. NOTE / ADVISORY (Starting with "Note:" or "Important:")
    if (trimmed.startsWith('Note:') || trimmed.startsWith('Important:')) {
      const cleanNote = stripEmojis(trimmed);
      blocks.push(
        <div
          key={`note-${i}`}
          className="my-2.5 pl-3.5 border-l-2 border-slate-300 text-slate-600 text-xs sm:text-sm leading-relaxed"
        >
          <span className="font-semibold text-slate-800 block mb-0.5">
            {cleanNote.startsWith('Note:') ? 'Note' : 'Important'}
          </span>
          <p>
            {cleanNote.replace(/^(Note:\s*|Important:\s*)/i, '')}
          </p>
        </div>
      );
      i++;
      continue;
    }

    // 6. BULLET ITEMS (* or -)
    if (trimmed.startsWith('* ') || trimmed.startsWith('- ')) {
      const bulletText = stripEmojis(trimmed.slice(2));
      const hasColon = bulletText.includes(':');
      const colonPrefix = hasColon ? bulletText.split(':')[0] : '';
      const colonRest = hasColon ? bulletText.slice(colonPrefix.length + 1) : bulletText;

      blocks.push(
        <div key={`bullet-${i}`} className="flex items-start gap-2 py-1 text-xs sm:text-sm text-slate-700 leading-relaxed">
          <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0" />
          <div className="flex-1">
            {hasColon ? (
              <>
                <strong className="text-slate-900 font-semibold mr-1">{colonPrefix}:</strong>
                <span className="text-slate-700">{colonRest}</span>
              </>
            ) : (
              <span className="text-slate-700">{bulletText}</span>
            )}
          </div>
        </div>
      );
      i++;
      continue;
    }

    // 7. REGULAR PARAGRAPH
    const cleanPara = stripEmojis(trimmed);
    if (cleanPara) {
      blocks.push(
        <p key={`p-${i}`} className="my-2 text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
          {cleanPara}
        </p>
      );
    }
    i++;
  }

  return (
    <div className="space-y-0.5 py-1">
      {blocks}
    </div>
  );
};
