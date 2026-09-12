import React from 'react';

interface ChatMarkdownRendererProps {
  content: string;
  isUser?: boolean;
}

/**
 * Parses inline formatting:
 * - Bold + Italic: ***text***
 * - Bold: **text**
 * - Italic: *text* or _text_
 * - Inline Code: `code`
 * - Markdown Links: [label](url)
 * - Cleans any remaining stray asterisks or symbols
 */
function renderInlineText(text: string, isUser: boolean = false): React.ReactNode {
  if (!text) return null;

  // Split by links [label](url), bold-italic (***...***), bold (**...**), code (`...`), italic (*...* or _..._)
  const tokens = text.split(/(\[.*?\]\(.*?\)|\*\*\*.*?\*\*\*|\*\*.*?\*\*|`.*?`|\*[^*\n]+?\*|_[^_\n]+?_)/g);

  return (
    <>
      {tokens.map((token, idx) => {
        if (!token) return null;

        // Link: [label](url)
        const linkMatch = token.match(/^\[(.*?)\]\((.*?)\)$/);
        if (linkMatch) {
          return (
            <a
              key={idx}
              href={linkMatch[2]}
              target="_blank"
              rel="noreferrer"
              className={`underline font-semibold transition-colors ${
                isUser ? 'text-white' : 'text-indigo-600 hover:text-indigo-800'
              }`}
            >
              {linkMatch[1]}
            </a>
          );
        }

        // Bold + Italic: ***text***
        if (token.startsWith('***') && token.endsWith('***') && token.length >= 6) {
          return (
            <strong
              key={idx}
              className={`font-bold italic ${isUser ? 'text-white' : 'text-slate-950'}`}
            >
              {token.slice(3, -3)}
            </strong>
          );
        }

        // Bold: **text**
        if (token.startsWith('**') && token.endsWith('**') && token.length >= 4) {
          return (
            <strong
              key={idx}
              className={`font-bold ${isUser ? 'text-white' : 'text-slate-950'}`}
            >
              {token.slice(2, -2)}
            </strong>
          );
        }

        // Inline Code: `code`
        if (token.startsWith('`') && token.endsWith('`') && token.length >= 2) {
          return (
            <code
              key={idx}
              className={`px-1.5 py-0.5 rounded text-[11px] font-mono ${
                isUser
                  ? 'bg-white/20 text-white'
                  : 'bg-slate-200/80 text-indigo-900 border border-slate-300/60'
              }`}
            >
              {token.slice(1, -1)}
            </code>
          );
        }

        // Italic: *text* or _text_
        if (
          ((token.startsWith('*') && token.endsWith('*')) ||
            (token.startsWith('_') && token.endsWith('_'))) &&
          token.length >= 2
        ) {
          return (
            <em
              key={idx}
              className={`italic ${isUser ? 'text-slate-200' : 'text-slate-900'}`}
            >
              {token.slice(1, -1)}
            </em>
          );
        }

        // Plain text token: clean any isolated lone asterisks that might remain from incomplete markdown
        const cleanedText = token.replace(/\*+/g, '');

        return <React.Fragment key={idx}>{cleanedText}</React.Fragment>;
      })}
    </>
  );
}

export const ChatMarkdownRenderer: React.FC<ChatMarkdownRendererProps> = ({
  content,
  isUser = false,
}) => {
  if (!content) return null;

  // If message is from user, render cleanly
  if (isUser) {
    return <span className="whitespace-pre-wrap">{content}</span>;
  }

  // Parse lines for AI responses
  const lines = content.split('\n');
  const renderedElements: React.ReactNode[] = [];

  let listBuffer: { type: 'bullet' | 'ordered'; number?: string; text: string }[] = [];

  const flushList = (keyPrefix: string) => {
    if (listBuffer.length === 0) return;

    const currentList = [...listBuffer];
    listBuffer = [];

    renderedElements.push(
      <ul key={`list-${keyPrefix}`} className="my-2 space-y-1.5 pl-0.5">
        {currentList.map((item, idx) => (
          <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800 leading-relaxed">
            {item.type === 'ordered' ? (
              <span className="font-bold text-indigo-600 text-xs shrink-0 min-w-[1.25rem] mt-0.5">
                {item.number}
              </span>
            ) : (
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 mt-2 shrink-0" />
            )}
            <div className="flex-1 min-w-0">
              {renderInlineText(item.text, false)}
            </div>
          </li>
        ))}
      </ul>
    );
  };

  for (let i = 0; i < lines.length; i++) {
    const rawLine = lines[i];
    const trimmed = rawLine.trim();

    // Blank line
    if (!trimmed) {
      flushList(`blank-${i}`);
      if (i > 0 && lines[i - 1].trim()) {
        renderedElements.push(<div key={`space-${i}`} className="h-1.5" />);
      }
      continue;
    }

    // Headers: ###, ##, #
    const headerMatch = trimmed.match(/^(#{1,4})\s+(.+)$/);
    if (headerMatch) {
      flushList(`head-${i}`);
      const level = headerMatch[1].length;
      const titleText = headerMatch[2];

      if (level <= 2) {
        renderedElements.push(
          <h3
            key={`h-${i}`}
            className="font-extrabold text-slate-950 text-sm sm:text-base mt-3 mb-1.5 pb-1 border-b border-slate-200/80 tracking-tight"
          >
            {renderInlineText(titleText, false)}
          </h3>
        );
      } else {
        renderedElements.push(
          <h4
            key={`h-${i}`}
            className="font-bold text-slate-900 text-xs sm:text-sm mt-2.5 mb-1 tracking-tight"
          >
            {renderInlineText(titleText, false)}
          </h4>
        );
      }
      continue;
    }

    // Ordered list item: e.g. "1. ", "2) "
    const orderedMatch = trimmed.match(/^(\d+[\.\)])\s+(.+)$/);
    if (orderedMatch) {
      listBuffer.push({
        type: 'ordered',
        number: orderedMatch[1],
        text: orderedMatch[2],
      });
      continue;
    }

    // Bullet list item: e.g. "* ", "- ", "• ", "+ ", or repeated "* * "
    const bulletMatch = trimmed.match(/^([*\-•+]+|\s*[*\-•+]+)\s+(.+)$/);
    if (bulletMatch) {
      // Clean any accidental double-bullet e.g. "* *"
      const cleanBulletText = bulletMatch[2].replace(/^[*\-•+]\s+/, '');
      listBuffer.push({
        type: 'bullet',
        text: cleanBulletText,
      });
      continue;
    }

    // Blockquote: e.g. "> "
    if (trimmed.startsWith('>')) {
      flushList(`quote-${i}`);
      const quoteText = trimmed.replace(/^>\s*/, '');
      renderedElements.push(
        <div
          key={`quote-${i}`}
          className="border-l-2 border-indigo-500 pl-3 py-1 my-1.5 bg-indigo-50/40 rounded-r-lg text-xs sm:text-sm text-slate-700 italic"
        >
          {renderInlineText(quoteText, false)}
        </div>
      );
      continue;
    }

    // Regular paragraph line
    flushList(`para-${i}`);
    renderedElements.push(
      <p
        key={`p-${i}`}
        className="text-xs sm:text-sm leading-relaxed text-slate-800 my-1"
      >
        {renderInlineText(trimmed, false)}
      </p>
    );
  }

  // Flush any final list items
  flushList('final');

  return <div className="space-y-0.5">{renderedElements}</div>;
};
