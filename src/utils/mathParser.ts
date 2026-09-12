import { create, all } from 'mathjs';

const math = create(all);

/**
 * Robust mathematical expression parser and evaluator for the Uni Route SAT Calculator.
 * Designed to handle standard SAT math parsing conventions:
 * - Order of operations (PEMDAS)
 * - Implicit multiplication (e.g., 2x -> 2 * x, 2(x+1) -> 2 * (x+1))
 * - Constants (pi, e)
 * - Standard functions (sin, cos, tan, asin, acos, atan, log, ln, sqrt, abs)
 * - Degree and Radian modes
 * - Domain restrictions (e.g., {x > 2})
 * - Custom variables and sliders (e.g., a = 3)
 */

export interface DomainRestriction {
  variable: string;
  min?: number;
  minInclusive?: boolean;
  max?: number;
  maxInclusive?: boolean;
}

export interface ParsedExpression {
  type: 'function' | 'equation' | 'inequality' | 'slider' | 'invalid';
  raw: string;
  mathStr: string; // Sanitized JS-interpretable string
  variableName?: string; // For sliders e.g., 'a'
  sliderValue?: number; // Current value of slider
  sliderRange?: [number, number]; // [min, max]
  equationType?: 'linear' | 'circle';
  circleParams?: { h: number; k: number; rSq: number }; // For circle equations
  linearParams?: { a: number; b: number; c: number }; // ax + by = c -> y = (c - ax)/b
  inequalityOperator?: '>' | '<' | '>=' | '<=';
  color: string;
  visible: boolean;
  restrictions?: DomainRestriction[];
  error?: string;
}

// Tokenizes and evaluates simple mathematical expressions safely
export class MathParser {
  // Cleans and pre-processes raw user input to be math-friendly
  static sanitize(input: string, variables: Record<string, number> = {}): { clean: string; restrictions?: DomainRestriction[] } {
    let str = input.trim();
    if (!str) return { clean: '' };

    // 1. Extract domain restrictions like {0 < x < 5} or {x >= 3}
    let restrictions: DomainRestriction[] = [];
    const restrictionRegex = /\{([^}]+)\}/g;
    let match;
    while ((match = restrictionRegex.exec(str)) !== null) {
      const inner = match[1].trim();
      const parsed = this.parseRestriction(inner);
      if (parsed) {
        restrictions.push(parsed);
      }
    }
    // Strip restrictions from primary string
    str = str.replace(restrictionRegex, '').trim();

    // Remove absolute value pipes |x| -> abs(x)
    // Note: This matches nested pipes as well, or sequential ones. Simple regex replacement:
    let pipeCount = 0;
    let pipeProcessed = '';
    for (let i = 0; i < str.length; i++) {
      if (str[i] === '|') {
        if (pipeCount % 2 === 0) {
          pipeProcessed += 'abs(';
        } else {
          pipeProcessed += ')';
        }
        pipeCount++;
      } else {
        pipeProcessed += str[i];
      }
    }
    str = pipeProcessed;

    // Substitute mathematical symbols
    str = str.replace(/π/g, 'pi');
    str = str.replace(/√/g, 'sqrt');
    str = str.replace(/×/g, '*');
    str = str.replace(/÷/g, '/');
    str = str.replace(/−/g, '-');

    // Replace functions with standard names
    str = str.replace(/\bsin\s*⁻¹/g, 'asin');
    str = str.replace(/\bcos\s*⁻¹/g, 'acos');
    str = str.replace(/\btan\s*⁻¹/g, 'atan');

    // Return cleaned string along with restriction rules
    return { clean: str, restrictions };
  }

  // Parse a domain restriction string (e.g. "0 < x < 5" or "x >= 3")
  private static parseRestriction(str: string): DomainRestriction | null {
    str = str.replace(/\s+/g, '');
    // Case 1: Double inequality like "0 < x < 5" or "-2 <= x <= 3"
    const doubleMatch = /^(-?[\d.]+)(<=?)([a-zA-Z])(<=?)(-?[\d.]+)$/.exec(str);
    if (doubleMatch) {
      const minVal = parseFloat(doubleMatch[1]);
      const minInc = doubleMatch[2] === '<=';
      const varName = doubleMatch[3];
      const maxInc = doubleMatch[4] === '<=';
      const maxVal = parseFloat(doubleMatch[5]);
      return {
        variable: varName,
        min: minVal,
        minInclusive: minInc,
        max: maxVal,
        maxInclusive: maxInc,
      };
    }

    // Case 2: Single inequality like "x >= 3" or "y < 10"
    const singleMatch = /^([a-zA-Z])(>=?|<=?)(-?[\d.]+)$/.exec(str);
    if (singleMatch) {
      const varName = singleMatch[1];
      const op = singleMatch[2];
      const val = parseFloat(singleMatch[3]);

      if (op === '>') {
        return { variable: varName, min: val, minInclusive: false };
      } else if (op === '>=') {
        return { variable: varName, min: val, minInclusive: true };
      } else if (op === '<') {
        return { variable: varName, max: val, maxInclusive: false };
      } else if (op === '<=') {
        return { variable: varName, max: val, maxInclusive: true };
      }
    }

    return null;
  }

  // Parses an input expression into a standard evaluator model
  static parse(raw: string, color: string): ParsedExpression {
    const { clean: sanitized, restrictions } = this.sanitize(raw);

    if (!sanitized) {
      return { type: 'invalid', raw, mathStr: '', color, visible: true, error: 'Empty expression' };
    }

    // Check if it's a slider / variable definition: e.g., "a = 5" or "k = -2"
    const sliderMatch = /^([a-zA-Z])\s*=\s*(-?[\d.]+)$/.exec(sanitized);
    if (sliderMatch) {
      const varName = sliderMatch[1];
      const val = parseFloat(sliderMatch[2]);
      if (varName !== 'x' && varName !== 'y') {
        return {
          type: 'slider',
          raw,
          mathStr: sanitized,
          variableName: varName,
          sliderValue: val,
          sliderRange: [-10, 10],
          color,
          visible: true,
        };
      }
    }

    // Check if it's an inequality: has >, <, >=, <=
    let isInequality = false;
    let ineqOp: '>' | '<' | '>=' | '<=' | undefined;
    const ineqMatch = />=|<=|>|</.exec(sanitized);
    if (ineqMatch) {
      isInequality = true;
      ineqOp = ineqMatch[0] as any;
    }

    // Split on = or inequality operators to check if we can parse as equation
    const splitOp = isInequality ? ineqOp! : '=';
    const sides = sanitized.split(splitOp);

    if (sides.length === 2) {
      const left = sides[0].trim();
      const right = sides[1].trim();

      // Check standard function notation: f(x) = ... or y = ...
      const funcMatch = /^[a-zA-Z]\(x\)$/.exec(left);
      if (left === 'y' || funcMatch) {
        return {
          type: isInequality ? 'inequality' : 'function',
          raw,
          mathStr: right,
          inequalityOperator: ineqOp,
          color,
          visible: true,
          restrictions,
        };
      }

      // Check implicit equations like x + y = 5 or 2x - 3y = 12
      // Try to parse linear equation: Ax + By = C
      const linearMatch = this.tryParseLinear(left, right, splitOp === '=' ? 0 : 1);
      if (linearMatch) {
        return {
          type: isInequality ? 'inequality' : 'equation',
          raw,
          mathStr: linearMatch.formula, // Solved for y
          equationType: 'linear',
          linearParams: linearMatch.params,
          inequalityOperator: ineqOp,
          color,
          visible: true,
          restrictions,
        };
      }

      // Try to parse circle equation: (x-h)^2 + (y-k)^2 = R^2
      const circleMatch = this.tryParseCircle(left, right);
      if (circleMatch && !isInequality) {
        return {
          type: 'equation',
          raw,
          mathStr: '',
          equationType: 'circle',
          circleParams: circleMatch,
          color,
          visible: true,
          restrictions,
        };
      }
    }

    // If no explicit "=", treat as functional y = f(x)
    return {
      type: isInequality ? 'inequality' : 'function',
      raw,
      mathStr: sanitized,
      inequalityOperator: ineqOp,
      color,
      visible: true,
      restrictions,
    };
  }

  // Attempt to parse linear equation Ax + By = C and solve for y
  private static tryParseLinear(left: string, right: string, mode: number): { formula: string; params: { a: number; b: number; c: number } } | null {
    // We clean spaces
    const expr = (left + '-' + '(' + right + ')').replace(/\s+/g, '');
    
    // Parse coefficients of x, y, and constant using algebraic simplifier
    // For SAT math, we can support Ax + By = C where left contains terms of x and y, and right contains a constant.
    // Let's implement a clean parsing of standard linear structures: Ax + By = C or Ax + By + C = 0
    // We will parse standard forms using a neat regex approach
    const linearRegex = /^([-+]?[\d.]*)x([-+]?[\d.]*)y$/;
    const cleanLeft = left.replace(/\s+/g, '');
    const cleanRight = right.replace(/\s+/g, '');

    const match = linearRegex.exec(cleanLeft);
    if (match) {
      const aStr = match[1];
      const bStr = match[2];
      const a = aStr === '' || aStr === '+' ? 1 : aStr === '-' ? -1 : parseFloat(aStr);
      const b = bStr === '' || bStr === '+' ? 1 : bStr === '-' ? -1 : parseFloat(bStr);
      const c = parseFloat(cleanRight);

      if (!isNaN(a) && !isNaN(b) && !isNaN(c) && b !== 0) {
        return {
          formula: `(${c} - (${a} * x)) / ${b}`,
          params: { a, b, c },
        };
      }
    }

    // Simple backup for x + y = C
    if (cleanLeft === 'x+y' || cleanLeft === 'y+x') {
      const c = parseFloat(cleanRight);
      if (!isNaN(c)) {
        return { formula: `${c} - x`, params: { a: 1, b: 1, c } };
      }
    }
    if (cleanLeft === 'x-y') {
      const c = parseFloat(cleanRight);
      if (!isNaN(c)) {
        return { formula: `x - ${c}`, params: { a: 1, b: -1, c } };
      }
    }
    if (cleanLeft === 'y-x') {
      const c = parseFloat(cleanRight);
      if (!isNaN(c)) {
        return { formula: `x + ${c}`, params: { a: -1, b: 1, c } };
      }
    }

    return null;
  }

  // Attempt to parse circle equation: (x-h)^2 + (y-k)^2 = R^2
  private static tryParseCircle(left: string, right: string): { h: number; k: number; rSq: number } | null {
    const cleanLeft = left.replace(/\s+/g, '');
    const cleanRight = right.replace(/\s+/g, '');

    // Circle regex variations
    // 1. x^2 + y^2 = R^2
    if (cleanLeft === 'x^2+y^2' || cleanLeft === 'y^2+x^2') {
      const rSq = parseFloat(cleanRight);
      if (!isNaN(rSq) && rSq > 0) {
        return { h: 0, k: 0, rSq };
      }
    }

    // 2. (x-h)^2 + (y-k)^2
    // Match (x-h)^2+(y-k)^2 or (y-k)^2+(x-h)^2
    const circleRegex = /^\(x([-+][\d.]+)\)\^2\+\(y([-+][\d.]+)\)\^2$/;
    const match = circleRegex.exec(cleanLeft);
    if (match) {
      const h = -parseFloat(match[1]); // e.g. (x-3)^2 -> h = 3
      const k = -parseFloat(match[2]); // e.g. (y+2)^2 -> k = -2
      const rSq = parseFloat(cleanRight);
      if (!isNaN(h) && !isNaN(k) && !isNaN(rSq) && rSq > 0) {
        return { h, k, rSq };
      }
    }

    // 3. (x-h)^2 + y^2
    const circleRegexX = /^\(x([-+][\d.]+)\)\^2\+y\^2$/;
    const matchX = circleRegexX.exec(cleanLeft);
    if (matchX) {
      const h = -parseFloat(matchX[1]);
      const rSq = parseFloat(cleanRight);
      if (!isNaN(h) && !isNaN(rSq) && rSq > 0) {
        return { h, k: 0, rSq };
      }
    }

    // 4. x^2 + (y-k)^2
    const circleRegexY = /^x\^2\+\(y([-+][\d.]+)\)\^2$/;
    const matchY = circleRegexY.exec(cleanLeft);
    if (matchY) {
      const k = -parseFloat(matchY[1]);
      const rSq = parseFloat(cleanRight);
      if (!isNaN(k) && !isNaN(rSq) && rSq > 0) {
        return { h: 0, k, rSq };
      }
    }

    return null;
  }

  // Prepares formula string for standard JavaScript evaluation
  private static prepFormula(formula: string): string {
    // Return trimmed mathStr, mathjs handles implicit multiplication and constants natively
    return formula.trim();
  }

  // Evaluates expression for a specific value of 'x' and other slider variables
  static evaluate(
    expr: ParsedExpression,
    x: number,
    variables: Record<string, number> = {},
    angleMode: 'DEG' | 'RAD' = 'DEG'
  ): number {
    if (expr.type === 'invalid') return NaN;

    // Check domain restrictions
    if (expr.restrictions && expr.restrictions.length > 0) {
      for (const rest of expr.restrictions) {
        const val = rest.variable === 'x' ? x : rest.variable === 'y' ? NaN : variables[rest.variable];
        if (isNaN(val)) continue;

        if (rest.min !== undefined) {
          if (rest.minInclusive ? val < rest.min : val <= rest.min) return NaN;
        }
        if (rest.max !== undefined) {
          if (rest.maxInclusive ? val > rest.max : val >= rest.max) return NaN;
        }
      }
    }

    if (expr.type === 'equation' && expr.equationType === 'circle' && expr.circleParams) {
      // Circle requires finding two y-values for any given x
      // (x-h)^2 + (y-k)^2 = R^2 -> y = k +- sqrt(R^2 - (x-h)^2)
      // Since evaluate returns a single number, circle plotting should be handled specially in the graph renderer.
      return NaN;
    }

    const prep = this.prepFormula(expr.mathStr);
    return this.evaluateString(prep, x, variables, angleMode);
  }

  // Evaluates a prepped mathematical expression string safely using mathjs
  static evaluateString(
    str: string,
    xValue: number,
    variables: Record<string, number> = {},
    angleMode: 'DEG' | 'RAD' = 'DEG'
  ): number {
    try {
      const scope: Record<string, any> = {
        x: xValue,
        ...variables,
        pi: Math.PI,
        e: Math.E,
      };

      // Set functions based on degree/radian mode
      if (angleMode === 'DEG') {
        scope.sin = (val: number) => Math.sin((val * Math.PI) / 180);
        scope.cos = (val: number) => Math.cos((val * Math.PI) / 180);
        scope.tan = (val: number) => Math.tan((val * Math.PI) / 180);
        scope.asin = (val: number) => (Math.asin(val) * 180) / Math.PI;
        scope.acos = (val: number) => (Math.acos(val) * 180) / Math.PI;
        scope.atan = (val: number) => (Math.atan(val) * 180) / Math.PI;
      } else {
        scope.sin = (val: number) => Math.sin(val);
        scope.cos = (val: number) => Math.cos(val);
        scope.tan = (val: number) => Math.tan(val);
        scope.asin = (val: number) => Math.asin(val);
        scope.acos = (val: number) => Math.acos(val);
        scope.atan = (val: number) => Math.atan(val);
      }

      scope.ln = (val: number) => Math.log(val);
      scope.log = (val: number) => Math.log10(val);
      scope.sqrt = (val: number) => Math.sqrt(val);
      scope.abs = (val: number) => Math.abs(val);

      // Evaluate the expression with mathjs
      const result = math.evaluate(str, scope);

      if (typeof result === 'number') {
        return isNaN(result) ? NaN : result;
      }
      if (result && typeof result === 'object' && 'toNumber' in result) {
        return (result as any).toNumber();
      }
      return parseFloat(String(result));
    } catch (e) {
      return NaN;
    }
  }
}
