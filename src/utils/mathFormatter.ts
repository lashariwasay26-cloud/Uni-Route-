/**
 * Custom Utility to parse and format LaTeX-style expressions and markdown into clean,
 * human-readable, plain-English text with native Unicode mathematical symbols.
 *
 * This strips away raw dollar signs ($ and $$), markdown asterisks (**bold** -> bold),
 * unescapes percentages (\%), formats fractions (\frac{a}{b} -> a/b), and converts common operators
 * (like \times -> ×, \implies -> ⇒, \Delta -> Δ, \propto -> ∝, etc.).
 */

export function formatMathText(text: string | undefined | null): string {
  if (!text) return '';

  let formatted = text;

  // 1. Remove markdown bold/italic asterisks & underscores for clean plain text rendering
  formatted = formatted.replace(/\*\*([^*]+)\*\*/g, '$1');
  formatted = formatted.replace(/\*([^*]+)\*/g, '$1');
  formatted = formatted.replace(/__([^_]+)__/g, '$1');
  formatted = formatted.replace(/\b_([^_]+)_\b/g, '$1');
  formatted = formatted.replace(/\*\*/g, '');

  // 2. Handle LaTeX environment wrappers (cases, aligned, matrices, etc.)
  formatted = formatted.replace(/\\begin\s*\{[^}]+\}/g, '');
  formatted = formatted.replace(/\\end\s*\{[^}]+\}/g, '');
  formatted = formatted.replace(/\\left\s*[\{\(\[\.\|]/g, '');
  formatted = formatted.replace(/\\right\s*[\}\)\]\.\|]/g, '');

  // 3. Remove markdown header markers that look like raw code
  formatted = formatted.replace(/^###\s+/gm, '');
  formatted = formatted.replace(/^##\s+/gm, '');
  formatted = formatted.replace(/^#\s+/gm, '');

  // 4. Handle unescaping of LaTeX special characters
  formatted = formatted.replace(/\\%/g, '%');
  formatted = formatted.replace(/\\_/g, '_');
  formatted = formatted.replace(/\\&/g, '&');
  formatted = formatted.replace(/\\#/g, '#');
  formatted = formatted.replace(/\\\$/g, '$');
  formatted = formatted.replace(/\\\{/g, '{');
  formatted = formatted.replace(/\\\}/g, '}');

  // 5. Handle font styles (\mathbf, \mathit, \mathrm, \boldsymbol, \text, etc.)
  formatted = formatted.replace(/\\mathbf\s*\{([^}]+)\}/g, '$1');
  formatted = formatted.replace(/\\mathit\s*\{([^}]+)\}/g, '$1');
  formatted = formatted.replace(/\\mathrm\s*\{([^}]+)\}/g, '$1');
  formatted = formatted.replace(/\\boldsymbol\s*\{([^}]+)\}/g, '$1');
  formatted = formatted.replace(/\\mathbb\s*\{([^}]+)\}/g, '$1');
  formatted = formatted.replace(/\\mathcal\s*\{([^}]+)\}/g, '$1');
  formatted = formatted.replace(/\\textbf\s*\{([^}]+)\}/g, '$1');
  formatted = formatted.replace(/\\textit\s*\{([^}]+)\}/g, '$1');
  formatted = formatted.replace(/\\text\s*\{([^}]+)\}/g, '$1');

  // 6. Handle special math decorations (\bar, \hat, \vec, \tilde)
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

  // 7. Format square roots before fractions: \sqrt{expression} -> √(expression)
  formatted = formatted.replace(/\\sqrt\s*\{([^}]+)\}/g, '√($1)');
  formatted = formatted.replace(/\\sqrt\s+(\w+)/g, '√$1');

  // 8. Format algebraic fractions: \frac{numerator}{denominator} -> numerator/denominator
  for (let i = 0; i < 4; i++) {
    formatted = formatted.replace(/\\frac\s*\{([^{}]+)\}\s*\{([^{}]+)\}/g, '($1)/($2)');
  }
  // Simplify redundant parentheses around single variables or numbers, e.g., (1)/(2) -> 1/2 or (1)/(√(n)) -> 1/√(n)
  formatted = formatted.replace(/\(([^()]+)\)\/\(([^()]+)\)/g, (match, p1, p2) => {
    const cleanP1 = p1.trim();
    const cleanP2 = p2.trim();
    return `${cleanP1} / ${cleanP2}`;
  });

  // 9. Format common mathematical operators and relations
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
  formatted = formatted.replace(/\\times/g, '×');
  formatted = formatted.replace(/\\cdot/g, '·');
  formatted = formatted.replace(/\\implies/g, '⇒');
  formatted = formatted.replace(/\\iff/g, '⇔');
  formatted = formatted.replace(/\\leq/g, '≤');
  formatted = formatted.replace(/\\geq/g, '≥');
  formatted = formatted.replace(/\\le\b/g, '≤');
  formatted = formatted.replace(/\\ge\b/g, '≥');
  formatted = formatted.replace(/\\neq/g, '≠');
  formatted = formatted.replace(/\\approx/g, '≈');
  formatted = formatted.replace(/\\pm/g, '±');
  formatted = formatted.replace(/\\circ/g, '°');
  formatted = formatted.replace(/\\Delta/g, 'Δ');
  formatted = formatted.replace(/\\pi/g, 'π');
  formatted = formatted.replace(/\\theta/g, 'θ');
  formatted = formatted.replace(/\\sigma/g, 'σ');
  formatted = formatted.replace(/\\mu/g, 'μ');
  formatted = formatted.replace(/\\alpha/g, 'α');
  formatted = formatted.replace(/\\beta/g, 'β');
  formatted = formatted.replace(/\\lambda/g, 'λ');

  // 10. Subscripts with text like n_{\text{new}} or n_{new} or x_{known}
  formatted = formatted.replace(/([a-zA-Z])_\{?\\text\{([^}]+)\}\}?/g, '$1($2)');
  formatted = formatted.replace(/([a-zA-Z])_\{([^}]+)\}/g, '$1($2)');

  // 11. Map common algebraic power and indexing notations to standard Unicode
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

  // 12. Remove spacing directives
  formatted = formatted.replace(/\\quad/g, '  ');
  formatted = formatted.replace(/\\qquad/g, '    ');
  formatted = formatted.replace(/\\,/g, ' ');
  formatted = formatted.replace(/\\;/g, ' ');
  formatted = formatted.replace(/\\!/g, '');

  // 13. Clean up double escapes like \\
  formatted = formatted.replace(/\\\\/g, '\n');

  // 14. Remove all stray inline ($) and block ($$) LaTeX math-mode signs
  formatted = formatted.replace(/\$\$/g, '');
  formatted = formatted.replace(/\$/g, '');

  // 15. Final cleanup of any trailing raw braces or unneeded slashes
  formatted = formatted.replace(/\\([a-zA-Z]+)/g, '$1');

  return formatted.trim();
}
