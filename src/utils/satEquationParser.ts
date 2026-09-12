/**
 * Mathematical Equation Parser for SAT Math Functions
 * Supports:
 * - Linear: y = mx + b, Ax + By = C, y = m*x + b, fraction slopes (e.g., 3/4x - 2)
 * - Quadratic: Standard (ax^2 + bx + c), Vertex (a(x-h)^2 + k), Factored (a(x-p)(x-q))
 * - Exponential: y = a * b^x, y = a(1 ± r)^x, y = a * b^(x/k)
 */

export interface ParsedLinear {
  type: 'linear';
  raw: string;
  isValid: boolean;
  m: number;
  b: number;
  formatted: string;
  errorMessage?: string;
}

export interface ParsedQuadratic {
  type: 'quadratic';
  raw: string;
  isValid: boolean;
  a: number;
  b: number;
  c: number;
  h: number;
  k: number;
  roots: number[];
  formatted: string;
  form: 'standard' | 'vertex' | 'factored';
  errorMessage?: string;
}

export interface ParsedExponential {
  type: 'exponential';
  raw: string;
  isValid: boolean;
  a: number;
  b: number;
  rate: number; // e.g. 0.05 for 5%
  isGrowth: boolean;
  k: number; // time divisor e.g. 2^(x/3) -> k = 3
  formatted: string;
  errorMessage?: string;
}

// Evaluate numeric fractions or decimals like "-3/2", "0.75", "4"
export function parseNumberOrFraction(str: string): number | null {
  if (!str) return null;
  const clean = str.trim().replace(/\s+/g, '');
  if (/^-?\d+(\.\d+)?$/.test(clean)) {
    return parseFloat(clean);
  }
  const fracMatch = clean.match(/^(-?\d+(\.\d+)?)\/(\d+(\.\d+)?)$/);
  if (fracMatch) {
    const num = parseFloat(fracMatch[1]);
    const den = parseFloat(fracMatch[3]);
    if (den !== 0) return num / den;
  }
  return null;
}

/**
 * Parses Linear Equations:
 * 1. y = mx + b / y = mx / y = b
 * 2. Ax + By = C / Ax - By = C
 * 3. Standard expression: mx + b
 */
export function parseLinearEquation(input: string): ParsedLinear {
  const raw = input.trim();
  if (!raw) {
    return { type: 'linear', raw, isValid: false, m: 1, b: 0, formatted: 'y = x', errorMessage: 'Please enter an equation' };
  }

  // Normalize spaces and remove 'f(x)=' or 'y='
  let expr = raw.replace(/f\s*\(\s*x\s*\)\s*=/i, 'y=').replace(/\s+/g, '');

  // Check if standard form: Ax + By = C
  // e.g. 2x + 3y = 12, -x + 2y = 4, 3x - y = 5
  const standardFormMatch = expr.match(/^([+-]?\d*(\.\d+)?|\d+\/\d+)?x([+-]\d*(\.\d+)?|\d+\/\d+)?y=([+-]?\d*(\.\d+)?|\d+\/\d+)$/i);
  if (standardFormMatch && !expr.startsWith('y=')) {
    const aStr = standardFormMatch[1];
    const bStr = standardFormMatch[3];
    const cStr = standardFormMatch[5];

    let A = 1;
    if (aStr === '-' || aStr === '-1') A = -1;
    else if (aStr === '+' || aStr === '' || aStr === undefined) A = 1;
    else {
      const parsedA = parseNumberOrFraction(aStr);
      if (parsedA !== null) A = parsedA;
    }

    let B = 1;
    if (bStr === '-' || bStr === '-1') B = -1;
    else if (bStr === '+' || bStr === '' || bStr === undefined) B = 1;
    else {
      const parsedB = parseNumberOrFraction(bStr);
      if (parsedB !== null) B = parsedB;
    }

    let C = 0;
    const parsedC = parseNumberOrFraction(cStr);
    if (parsedC !== null) C = parsedC;

    if (B !== 0) {
      const m = -A / B;
      const b = C / B;
      const mRounded = Number(m.toFixed(3));
      const bRounded = Number(b.toFixed(3));
      const sign = bRounded >= 0 ? '+' : '-';
      return {
        type: 'linear',
        raw,
        isValid: true,
        m: mRounded,
        b: bRounded,
        formatted: `y = ${mRounded === 1 ? '' : mRounded === -1 ? '-' : mRounded}x ${sign} ${Math.abs(bRounded)}`
      };
    }
  }

  // Handle explicit y = ...
  if (expr.startsWith('y=')) {
    expr = expr.substring(2);
  }

  // Now expr is of form: mx + b, mx - b, mx, b, -x + 3, etc.
  // Special case: just a constant (horizontal line)
  const constVal = parseNumberOrFraction(expr);
  if (constVal !== null) {
    return {
      type: 'linear',
      raw,
      isValid: true,
      m: 0,
      b: constVal,
      formatted: `y = ${constVal}`
    };
  }

  // Match [slope]x [+/- intercept]
  // e.g. "2x+3", "-0.5x-4", "-x+2", "3/2x-1", "x", "-x"
  const slopeInterceptMatch = expr.match(/^([+-]?\d*(\.\d+)?|\d+\/\d+)?x([+-](\d+(\.\d+)?|\d+\/\d+))?$/i);
  if (slopeInterceptMatch) {
    const mStr = slopeInterceptMatch[1];
    const bStr = slopeInterceptMatch[3];

    let m = 1;
    if (mStr === '-' || mStr === '-1') m = -1;
    else if (mStr === '+' || mStr === '' || mStr === undefined) m = 1;
    else {
      const parsedM = parseNumberOrFraction(mStr);
      if (parsedM !== null) m = parsedM;
      else return { type: 'linear', raw, isValid: false, m: 1, b: 0, formatted: raw, errorMessage: 'Invalid slope coefficient' };
    }

    let b = 0;
    if (bStr) {
      const parsedB = parseNumberOrFraction(bStr);
      if (parsedB !== null) b = parsedB;
      else return { type: 'linear', raw, isValid: false, m: 1, b: 0, formatted: raw, errorMessage: 'Invalid y-intercept' };
    }

    const mRounded = Number(m.toFixed(3));
    const bRounded = Number(b.toFixed(3));
    const sign = bRounded >= 0 ? '+' : '-';
    const bPart = bRounded !== 0 ? ` ${sign} ${Math.abs(bRounded)}` : '';
    const mPart = mRounded === 1 ? 'x' : mRounded === -1 ? '-x' : mRounded === 0 ? '' : `${mRounded}x`;

    return {
      type: 'linear',
      raw,
      isValid: true,
      m: mRounded,
      b: bRounded,
      formatted: `y = ${mPart || '0'}${mPart ? bPart : bRounded}`
    };
  }

  return {
    type: 'linear',
    raw,
    isValid: false,
    m: 1,
    b: 0,
    formatted: raw,
    errorMessage: 'Could not parse linear equation. Try form: y = 2x + 3 or 2x + 3y = 6'
  };
}

/**
 * Parses Quadratic Equations in:
 * 1. Standard form: ax^2 + bx + c / ax² + bx + c
 * 2. Vertex form: a(x - h)^2 + k
 * 3. Factored form: a(x - p)(x - q)
 */
export function parseQuadraticEquation(input: string): ParsedQuadratic {
  const raw = input.trim();
  if (!raw) {
    return {
      type: 'quadratic',
      raw,
      isValid: false,
      a: 1,
      b: 0,
      c: 0,
      h: 0,
      k: 0,
      roots: [0],
      formatted: 'y = x²',
      form: 'standard',
      errorMessage: 'Please enter a quadratic equation'
    };
  }

  // Normalize: replace ² with ^2, remove 'y=' or 'f(x)='
  let expr = raw.replace(/f\s*\(\s*x\s*\)\s*=/i, '').replace(/y\s*=\s*/i, '').replace(/²/g, '^2').replace(/\s+/g, '');

  // 1. Check Vertex Form: a(x-h)^2 + k or a(x+h)^2 + k
  // e.g. "2(x-3)^2+1", "-(x+2)^2-4", "(x-1)^2", "-2(x+3)^2"
  const vertexMatch = expr.match(/^([+-]?\d*(\.\d+)?|\d+\/\d+)?\((?:x([+-]\d+(\.\d+)?))\)\^2([+-]\d+(\.\d+)?)?$/i);
  if (vertexMatch) {
    const aStr = vertexMatch[1];
    const hInner = vertexMatch[3]; // e.g. "-3" in (x-3) -> h = 3
    const kStr = vertexMatch[5]; // e.g. "+1" -> k = 1

    let a = 1;
    if (aStr === '-' || aStr === '-1') a = -1;
    else if (aStr === '+' || aStr === '' || aStr === undefined) a = 1;
    else {
      const parsedA = parseNumberOrFraction(aStr);
      if (parsedA !== null) a = parsedA;
    }

    const h = -parseFloat(hInner); // (x - 3) means h = 3
    const k = kStr ? parseFloat(kStr) : 0;

    // Convert vertex to standard: y = a(x - h)^2 + k = a(x^2 - 2hx + h^2) + k = ax^2 - 2ahx + (ah^2 + k)
    const b = -2 * a * h;
    const c = a * h * h + k;

    const disc = b * b - 4 * a * c;
    let roots: number[] = [];
    if (disc > 0.0001) {
      roots = [(-b - Math.sqrt(disc)) / (2 * a), (-b + Math.sqrt(disc)) / (2 * a)];
    } else if (Math.abs(disc) <= 0.0001) {
      roots = [-b / (2 * a)];
    }

    return {
      type: 'quadratic',
      raw,
      isValid: true,
      a: Number(a.toFixed(3)),
      b: Number(b.toFixed(3)),
      c: Number(c.toFixed(3)),
      h: Number(h.toFixed(3)),
      k: Number(k.toFixed(3)),
      roots: roots.map(r => Number(r.toFixed(2))),
      formatted: `y = ${a === 1 ? '' : a === -1 ? '-' : a}(x ${h >= 0 ? `- ${h}` : `+ ${Math.abs(h)}`})² ${k >= 0 ? `+ ${k}` : `- ${Math.abs(k)}`}`,
      form: 'vertex'
    };
  }

  // 2. Check Factored Form: a(x - p)(x - q)
  // e.g. "(x-2)(x+3)", "2(x-1)(x-4)", "-(x+3)(x-3)"
  const factoredMatch = expr.match(/^([+-]?\d*(\.\d+)?|\d+\/\d+)?\((?:x([+-]\d+(\.\d+)?))\)\((?:x([+-]\d+(\.\d+)?))\)$/i);
  if (factoredMatch) {
    const aStr = factoredMatch[1];
    const pInner = factoredMatch[3];
    const qInner = factoredMatch[5];

    let a = 1;
    if (aStr === '-' || aStr === '-1') a = -1;
    else if (aStr === '+' || aStr === '' || aStr === undefined) a = 1;
    else {
      const parsedA = parseNumberOrFraction(aStr);
      if (parsedA !== null) a = parsedA;
    }

    const p = -parseFloat(pInner); // (x - 2) means root = 2
    const q = -parseFloat(qInner); // (x + 3) means root = -3

    const b = -a * (p + q);
    const c = a * p * q;
    const h = (p + q) / 2;
    const k = a * (h - p) * (h - q);

    return {
      type: 'quadratic',
      raw,
      isValid: true,
      a: Number(a.toFixed(3)),
      b: Number(b.toFixed(3)),
      c: Number(c.toFixed(3)),
      h: Number(h.toFixed(3)),
      k: Number(k.toFixed(3)),
      roots: [Number(p.toFixed(2)), Number(q.toFixed(2))],
      formatted: `y = ${a === 1 ? '' : a === -1 ? '-' : a}(x ${p >= 0 ? `- ${p}` : `+ ${Math.abs(p)}`})(x ${q >= 0 ? `- ${q}` : `+ ${Math.abs(q)}`})`,
      form: 'factored'
    };
  }

  // 3. Standard Form: ax^2 + bx + c / ax^2 + bx / ax^2 + c / ax^2
  // Regex matching ax^2 (required) and optional bx and c
  const stdMatch = expr.match(/^([+-]?\d*(\.\d+)?|\d+\/\d+)?x\^2(([+-]\d*(\.\d+)?|\d+\/\d+)?x)?([+-]\d+(\.\d+)?)?$/i);
  if (stdMatch) {
    const aStr = stdMatch[1];
    const bPart = stdMatch[3]; // e.g. "+4x" or "-x"
    const cStr = stdMatch[6]; // e.g. "+3" or "-5"

    let a = 1;
    if (aStr === '-' || aStr === '-1') a = -1;
    else if (aStr === '+' || aStr === '' || aStr === undefined) a = 1;
    else {
      const parsedA = parseNumberOrFraction(aStr);
      if (parsedA !== null) a = parsedA;
    }

    let b = 0;
    if (bPart) {
      const bCoeff = bPart.replace(/x$/i, '');
      if (bCoeff === '+' || bCoeff === '' || bCoeff === undefined) b = 1;
      else if (bCoeff === '-' || bCoeff === '-1') b = -1;
      else {
        const parsedB = parseNumberOrFraction(bCoeff);
        if (parsedB !== null) b = parsedB;
      }
    }

    let c = 0;
    if (cStr) {
      const parsedC = parseNumberOrFraction(cStr);
      if (parsedC !== null) c = parsedC;
    }

    if (a === 0) {
      return {
        type: 'quadratic',
        raw,
        isValid: false,
        a: 0,
        b,
        c,
        h: 0,
        k: 0,
        roots: [],
        formatted: raw,
        form: 'standard',
        errorMessage: 'Coefficient "a" cannot be 0 in a quadratic function'
      };
    }

    const h = -b / (2 * a);
    const k = a * h * h + b * h + c;
    const disc = b * b - 4 * a * c;
    let roots: number[] = [];
    if (disc > 0.0001) {
      roots = [(-b - Math.sqrt(disc)) / (2 * a), (-b + Math.sqrt(disc)) / (2 * a)];
    } else if (Math.abs(disc) <= 0.0001) {
      roots = [-b / (2 * a)];
    }

    const aStrFormatted = a === 1 ? 'x²' : a === -1 ? '-x²' : `${a}x²`;
    const bStrFormatted = b !== 0 ? (b > 0 ? ` + ${b === 1 ? '' : b}x` : ` - ${Math.abs(b) === 1 ? '' : Math.abs(b)}x`) : '';
    const cStrFormatted = c !== 0 ? (c > 0 ? ` + ${c}` : ` - ${Math.abs(c)}`) : '';

    return {
      type: 'quadratic',
      raw,
      isValid: true,
      a: Number(a.toFixed(3)),
      b: Number(b.toFixed(3)),
      c: Number(c.toFixed(3)),
      h: Number(h.toFixed(3)),
      k: Number(k.toFixed(3)),
      roots: roots.map(r => Number(r.toFixed(2))),
      formatted: `y = ${aStrFormatted}${bStrFormatted}${cStrFormatted}`,
      form: 'standard'
    };
  }

  return {
    type: 'quadratic',
    raw,
    isValid: false,
    a: 1,
    b: 0,
    c: 0,
    h: 0,
    k: 0,
    roots: [],
    formatted: raw,
    form: 'standard',
    errorMessage: 'Could not parse quadratic. Try standard (y = x^2 - 4x + 3) or vertex (y = 2(x-1)^2 - 4)'
  };
}

/**
 * Parses Exponential Equations:
 * 1. y = a * b^x or a(b)^x or b^x
 * 2. y = a * (1 + r)^x or a * (1 - r)^x
 * 3. y = a * b^(x/k)
 */
export function parseExponentialEquation(input: string): ParsedExponential {
  const raw = input.trim();
  if (!raw) {
    return {
      type: 'exponential',
      raw,
      isValid: false,
      a: 1,
      b: 2,
      rate: 1,
      isGrowth: true,
      k: 1,
      formatted: 'y = 2^x',
      errorMessage: 'Please enter an exponential equation'
    };
  }

  let expr = raw.replace(/f\s*\(\s*x\s*\)\s*=/i, '').replace(/y\s*=\s*/i, '').replace(/\s+/g, '');

  // Check format: a*(1 + r)^x or a*(1 - r)^x
  // e.g. "100(1+0.05)^x", "50(1-0.2)^x"
  const rateMatch = expr.match(/^([+-]?\d*(\.\d+)?)?\*?\(1([+-]\d+(\.\d+)?)\)\^(?:x|\(x\))$/i);
  if (rateMatch) {
    const aStr = rateMatch[1];
    const rStr = rateMatch[3]; // e.g. "+0.05" or "-0.2"

    let a = 1;
    if (aStr) {
      const parsedA = parseNumberOrFraction(aStr);
      if (parsedA !== null) a = parsedA;
    }

    const r = parseFloat(rStr);
    const b = 1 + r;
    if (b > 0) {
      return {
        type: 'exponential',
        raw,
        isValid: true,
        a: Number(a.toFixed(3)),
        b: Number(b.toFixed(4)),
        rate: Math.abs(r),
        isGrowth: b > 1,
        k: 1,
        formatted: `y = ${a}(1 ${r >= 0 ? '+' : '-'} ${Math.abs(r)})ˣ`
      };
    }
  }

  // Check format: a * b^(x/k) or a * (b)^(x/k)
  // e.g. "2 * 3^(x/4)", "10 * 2^(x/3)", "4 * 0.5^x", "2^x", "3*(1.5)^x"
  const expMatch = expr.match(/^([+-]?\d*(\.\d+)?)?\*?\(?(\d+(\.\d+)?)\)?\^(?:x|\(x\/(\d+(\.\d+)?)\)|\(x\))$/i);
  if (expMatch) {
    const aStr = expMatch[1];
    const bStr = expMatch[3];
    const kStr = expMatch[5]; // e.g. "3" in x/3

    let a = 1;
    if (aStr) {
      const parsedA = parseNumberOrFraction(aStr);
      if (parsedA !== null) a = parsedA;
    }

    const base = parseFloat(bStr);
    const k = kStr ? parseFloat(kStr) : 1;

    if (base > 0 && k > 0) {
      const effectiveB = Math.pow(base, 1 / k);
      const isGrowth = base > 1;
      const rate = Math.abs(effectiveB - 1);

      return {
        type: 'exponential',
        raw,
        isValid: true,
        a: Number(a.toFixed(3)),
        b: Number(effectiveB.toFixed(4)),
        rate: Number(rate.toFixed(4)),
        isGrowth,
        k,
        formatted: `y = ${a === 1 ? '' : `${a} · `}${base}ˣ${k !== 1 ? `/${k}` : ''}`
      };
    }
  }

  return {
    type: 'exponential',
    raw,
    isValid: false,
    a: 1,
    b: 2,
    rate: 1,
    isGrowth: true,
    k: 1,
    formatted: raw,
    errorMessage: 'Could not parse exponential. Try form: y = 2(1.5)^x, y = 100(1+0.05)^x, or y = 2^x'
  };
}
