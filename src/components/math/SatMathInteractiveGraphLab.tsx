import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Layers,
  TrendingUp,
  GitCommit,
  Sparkles,
  Sliders,
  BookOpen,
  CheckCircle2,
  AlertTriangle,
  RotateCcw,
  Zap,
  HelpCircle,
  Maximize2,
  Table,
  Info,
  Edit3,
  Search,
  ArrowRight,
  Calculator,
  Compass,
  Check
} from 'lucide-react';
import {
  parseLinearEquation,
  parseQuadraticEquation,
  parseExponentialEquation,
  ParsedLinear,
  ParsedQuadratic,
  ParsedExponential
} from '../../utils/satEquationParser';

type LabTopic = 'systems' | 'quadratics' | 'growth';
type InputMode = 'equation' | 'sliders';

interface SatMathInteractiveGraphLabProps {
  initialTopic?: LabTopic;
}

export const SatMathInteractiveGraphLab: React.FC<SatMathInteractiveGraphLabProps> = ({
  initialTopic = 'growth'
}) => {
  const [activeTopic, setActiveTopic] = useState<LabTopic>(initialTopic);

  React.useEffect(() => {
    if (initialTopic) {
      setActiveTopic(initialTopic);
    }
  }, [initialTopic]);

  const [inputMode, setInputMode] = useState<InputMode>('equation');
  const [graphZoom, setGraphZoom] = useState<'standard' | 'zoomed-in' | 'zoomed-out' | 'first-quadrant'>('standard');
  const [hoverCoord, setHoverCoord] = useState<{ x: number; y: number } | null>(null);

  // ==========================================
  // TOPIC 1: SYSTEMS OF EQUATIONS STATE
  // ==========================================
  const [systemType, setSystemType] = useState<'linear-linear' | 'linear-quadratic'>('linear-linear');
  // Text inputs
  const [eq1Text, setEq1Text] = useState<string>('y = 2x - 1');
  const [eq2Text, setEq2Text] = useState<string>('y = -x + 5');
  const [quadEqText, setQuadEqText] = useState<string>('y = x^2 - 4x + 3');

  // Slider numeric states (kept in sync or controlled directly)
  const [m1, setM1] = useState<number>(2);
  const [b1, setB1] = useState<number>(-1);
  const [m2, setM2] = useState<number>(-1);
  const [b2, setB2] = useState<number>(5);

  // Linear-quadratic slider states
  const [aq, setAq] = useState<number>(1);
  const [bq, setBq] = useState<number>(-4);
  const [cq, setCq] = useState<number>(3);
  const [mq, setMq] = useState<number>(1);
  const [kq, setKq] = useState<number>(-1);

  // ==========================================
  // TOPIC 2: QUADRATICS STATE
  // ==========================================
  const [quadInputText, setQuadInputText] = useState<string>('y = x^2 - 4x + 3');
  const [quadForm, setQuadForm] = useState<'standard' | 'vertex' | 'factored'>('standard');
  const [qA, setQA] = useState<number>(1);
  const [qB, setQB] = useState<number>(-4);
  const [qC, setQC] = useState<number>(3);
  const [qH, setQH] = useState<number>(2);
  const [qK, setQK] = useState<number>(-1);
  const [qR1, setQR1] = useState<number>(1);
  const [qR2, setQR2] = useState<number>(3);

  // ==========================================
  // TOPIC 3: EXPONENTIAL VS LINEAR GROWTH STATE
  // ==========================================
  const [linGrowthText, setLinGrowthText] = useState<string>('y = 2x + 4');
  const [expGrowthText, setExpGrowthText] = useState<string>('y = 2(1.5)^x');
  const [linSlope, setLinSlope] = useState<number>(2);
  const [linIntercept, setLinIntercept] = useState<number>(4);
  const [expInitial, setExpInitial] = useState<number>(2);
  const [expMultiplier, setExpMultiplier] = useState<number>(1.5);
  const [growthMode, setGrowthMode] = useState<'growth' | 'decay'>('growth');

  // =========================================================================
  // EQUATION PARSING HOOKS
  // =========================================================================
  const parsedLinear1: ParsedLinear = useMemo(() => {
    if (inputMode === 'sliders') {
      const sign = b1 >= 0 ? '+' : '-';
      return {
        type: 'linear',
        raw: `y = ${m1}x ${sign} ${Math.abs(b1)}`,
        isValid: true,
        m: m1,
        b: b1,
        formatted: `y = ${m1 === 1 ? '' : m1 === -1 ? '-' : m1}x ${sign} ${Math.abs(b1)}`
      };
    }
    return parseLinearEquation(eq1Text);
  }, [inputMode, eq1Text, m1, b1]);

  const parsedLinear2: ParsedLinear = useMemo(() => {
    if (inputMode === 'sliders') {
      const sign = b2 >= 0 ? '+' : '-';
      return {
        type: 'linear',
        raw: `y = ${m2}x ${sign} ${Math.abs(b2)}`,
        isValid: true,
        m: m2,
        b: b2,
        formatted: `y = ${m2 === 1 ? '' : m2 === -1 ? '-' : m2}x ${sign} ${Math.abs(b2)}`
      };
    }
    return parseLinearEquation(eq2Text);
  }, [inputMode, eq2Text, m2, b2]);

  const parsedQuadForSystem: ParsedQuadratic = useMemo(() => {
    if (inputMode === 'sliders') {
      const h = -bq / (2 * (aq || 1));
      const k = aq * h * h + bq * h + cq;
      const disc = bq * bq - 4 * aq * cq;
      let roots: number[] = [];
      if (disc > 0) {
        roots = [(-bq - Math.sqrt(disc)) / (2 * aq), (-bq + Math.sqrt(disc)) / (2 * aq)];
      } else if (disc === 0) {
        roots = [-bq / (2 * aq)];
      }
      return {
        type: 'quadratic',
        raw: `y = ${aq}x^2 + ${bq}x + ${cq}`,
        isValid: true,
        a: aq,
        b: bq,
        c: cq,
        h,
        k,
        roots,
        formatted: `y = ${aq}x² ${bq >= 0 ? '+' : '-'} ${Math.abs(bq)}x ${cq >= 0 ? '+' : '-'} ${Math.abs(cq)}`,
        form: 'standard'
      };
    }
    return parseQuadraticEquation(quadEqText);
  }, [inputMode, quadEqText, aq, bq, cq]);

  const parsedSingleQuad: ParsedQuadratic = useMemo(() => {
    if (inputMode === 'sliders') {
      let a = qA;
      let b = qB;
      let c = qC;
      let h = 0;
      let k = 0;
      let roots: number[] = [];

      if (quadForm === 'standard') {
        a = qA;
        b = qB;
        c = qC;
        h = -b / (2 * (a || 1));
        k = a * h * h + b * h + c;
      } else if (quadForm === 'vertex') {
        a = qA;
        h = qH;
        k = qK;
        b = -2 * a * h;
        c = a * h * h + k;
      } else if (quadForm === 'factored') {
        a = qA;
        const p = qR1;
        const q = qR2;
        b = -a * (p + q);
        c = a * p * q;
        h = (p + q) / 2;
        k = a * (h - p) * (h - q);
        roots = [p, q];
      }

      const disc = b * b - 4 * a * c;
      if (quadForm !== 'factored') {
        if (disc > 0.0001) {
          roots = [(-b - Math.sqrt(disc)) / (2 * a), (-b + Math.sqrt(disc)) / (2 * a)];
        } else if (Math.abs(disc) <= 0.0001) {
          roots = [-b / (2 * a)];
        }
      }

      return {
        type: 'quadratic',
        raw: '',
        isValid: true,
        a,
        b,
        c,
        h: Number(h.toFixed(2)),
        k: Number(k.toFixed(2)),
        roots: roots.map(r => Number(r.toFixed(2))),
        formatted: `y = ${a}x² ${b >= 0 ? '+' : '-'} ${Math.abs(b)}x ${c >= 0 ? '+' : '-'} ${Math.abs(c)}`,
        form: quadForm
      };
    }
    return parseQuadraticEquation(quadInputText);
  }, [inputMode, quadInputText, quadForm, qA, qB, qC, qH, qK, qR1, qR2]);

  const parsedLinearGrowth: ParsedLinear = useMemo(() => {
    if (inputMode === 'sliders') {
      return {
        type: 'linear',
        raw: `y = ${linSlope}x + ${linIntercept}`,
        isValid: true,
        m: linSlope,
        b: linIntercept,
        formatted: `y = ${linSlope}x + ${linIntercept}`
      };
    }
    return parseLinearEquation(linGrowthText);
  }, [inputMode, linGrowthText, linSlope, linIntercept]);

  const parsedExponentialGrowth: ParsedExponential = useMemo(() => {
    if (inputMode === 'sliders') {
      const b = expMultiplier;
      return {
        type: 'exponential',
        raw: `y = ${expInitial}(${b})^x`,
        isValid: true,
        a: expInitial,
        b,
        rate: Math.abs(b - 1),
        isGrowth: b > 1,
        k: 1,
        formatted: `y = ${expInitial} · (${b})ˣ`
      };
    }
    return parseExponentialEquation(expGrowthText);
  }, [inputMode, expGrowthText, expInitial, expMultiplier]);

  // ==========================================
  // VIEW BOUNDS FOR GRAPH CANVAS
  // ==========================================
  const svgWidth = 480;
  const svgHeight = 400;
  const margin = 40;
  const plotW = svgWidth - 2 * margin;
  const plotH = svgHeight - 2 * margin;

  const { xMin, xMax, yMin, yMax } = useMemo(() => {
    if (graphZoom === 'zoomed-in') return { xMin: -4, xMax: 4, yMin: -4, yMax: 6 };
    if (graphZoom === 'zoomed-out') return { xMin: -10, xMax: 10, yMin: -10, yMax: 15 };
    if (graphZoom === 'first-quadrant') return { xMin: -0.5, xMax: 8, yMin: -0.5, yMax: 16 };
    return { xMin: -6, xMax: 6, yMin: -6, yMax: 10 };
  }, [graphZoom]);

  const toSvgX = (x: number) => margin + ((x - xMin) / (xMax - xMin)) * plotW;
  const toSvgY = (y: number) => margin + plotH - ((y - yMin) / (yMax - yMin)) * plotH;
  const fromSvgX = (svgX: number) => xMin + ((svgX - margin) / plotW) * (xMax - xMin);
  const fromSvgY = (svgY: number) => yMin + ((margin + plotH - svgY) / plotH) * (yMax - yMin);

  // =========================================================================
  // SYSTEMS CALCULATIONS & INTERSECTIONS
  // =========================================================================
  const systemCalculations = useMemo(() => {
    if (systemType === 'linear-linear') {
      const m_1 = parsedLinear1.isValid ? parsedLinear1.m : 2;
      const b_1 = parsedLinear1.isValid ? parsedLinear1.b : -1;
      const m_2 = parsedLinear2.isValid ? parsedLinear2.m : -1;
      const b_2 = parsedLinear2.isValid ? parsedLinear2.b : 5;

      const slopeDiff = m_1 - m_2;
      const isParallel = Math.abs(slopeDiff) < 0.0001;
      const isSameIntercept = Math.abs(b_1 - b_2) < 0.0001;

      if (isParallel) {
        if (isSameIntercept) {
          return {
            status: 'infinitely-many',
            title: 'Infinitely Many Solutions (Coincident Lines)',
            intersections: [] as [number, number][],
            explanation: `The two lines have identical slopes (m₁ = m₂ = ${m_1}) and identical y-intercepts (b₁ = b₂ = ${b_1}). Every point along the line satisfies both equations.`,
            m1: m_1,
            b1: b_1,
            m2: m_2,
            b2: b_2
          };
        } else {
          return {
            status: 'no-solution',
            title: 'No Solution (Parallel Lines)',
            intersections: [] as [number, number][],
            explanation: `The two lines have equal slopes (m₁ = m₂ = ${m_1}) but different y-intercepts (b₁ = ${b_1}, b₂ = ${b_2}). Since they are strictly parallel, they never intersect.`,
            m1: m_1,
            b1: b_1,
            m2: m_2,
            b2: b_2
          };
        }
      } else {
        const xInt = (b_2 - b_1) / (m_1 - m_2);
        const yInt = m_1 * xInt + b_1;
        return {
          status: 'one-solution',
          title: 'Exactly One Unique Solution (Intersecting Lines)',
          intersections: [[Number(xInt.toFixed(2)), Number(yInt.toFixed(2))]] as [number, number][],
          explanation: `The lines have distinct slopes (m₁ = ${m_1}, m₂ = ${m_2}). They intersect at the unique point (${xInt.toFixed(2)}, ${yInt.toFixed(2)}).`,
          m1: m_1,
          b1: b_1,
          m2: m_2,
          b2: b_2
        };
      }
    } else {
      // Linear-Quadratic
      const a = parsedQuadForSystem.isValid ? parsedQuadForSystem.a : 1;
      const b = parsedQuadForSystem.isValid ? parsedQuadForSystem.b : -4;
      const c = parsedQuadForSystem.isValid ? parsedQuadForSystem.c : 3;
      const m = parsedLinear1.isValid ? parsedLinear1.m : 1;
      const k = parsedLinear1.isValid ? parsedLinear1.b : -1;

      const A = a;
      const B = b - m;
      const C = c - k;
      const disc = B * B - 4 * A * C;

      if (Math.abs(A) < 0.0001) {
        return {
          status: 'degenerate',
          title: 'Degenerate System (a = 0)',
          intersections: [] as [number, number][],
          explanation: 'Quadratic coefficient a is 0, reducing to a linear system.',
          a, b, c, m, k, disc: 0
        };
      }

      if (disc > 0.0001) {
        const x1 = (-B + Math.sqrt(disc)) / (2 * A);
        const y1 = m * x1 + k;
        const x2 = (-B - Math.sqrt(disc)) / (2 * A);
        const y2 = m * x2 + k;
        return {
          status: 'two-solutions',
          title: '2 Real Solutions (Secant Line)',
          discriminant: Number(disc.toFixed(2)),
          intersections: [
            [Number(x1.toFixed(2)), Number(y1.toFixed(2))],
            [Number(x2.toFixed(2)), Number(y2.toFixed(2))]
          ] as [number, number][],
          explanation: `The substitution discriminant D = (${B.toFixed(2)})² - 4(${A})(${C.toFixed(2)}) = ${disc.toFixed(2)} > 0. The line cuts through the parabola at two distinct points.`,
          a, b, c, m, k, disc: Number(disc.toFixed(2))
        };
      } else if (Math.abs(disc) <= 0.0001) {
        const x1 = -B / (2 * A);
        const y1 = m * x1 + k;
        return {
          status: 'one-solution',
          title: '1 Real Solution (Tangent Line)',
          discriminant: 0,
          intersections: [[Number(x1.toFixed(2)), Number(y1.toFixed(2))]] as [number, number][],
          explanation: `The substitution discriminant D = 0. The line is strictly tangent to the parabola, touching it at exactly one coordinate point.`,
          a, b, c, m, k, disc: 0
        };
      } else {
        return {
          status: 'no-solution',
          title: '0 Real Solutions (Disjoint Line & Parabola)',
          discriminant: Number(disc.toFixed(2)),
          intersections: [] as [number, number][],
          explanation: `The substitution discriminant D = ${disc.toFixed(2)} < 0. The line passes entirely outside the parabola with no real intersections.`,
          a, b, c, m, k, disc: Number(disc.toFixed(2))
        };
      }
    }
  }, [systemType, parsedLinear1, parsedLinear2, parsedQuadForSystem]);

  // =========================================================================
  // QUADRATICS CALCULATIONS
  // =========================================================================
  const quadCalculations = useMemo(() => {
    const a = parsedSingleQuad.isValid ? parsedSingleQuad.a : 1;
    const b = parsedSingleQuad.isValid ? parsedSingleQuad.b : -4;
    const c = parsedSingleQuad.isValid ? parsedSingleQuad.c : 3;

    const h = -b / (2 * (a || 1));
    const k = a * h * h + b * h + c;
    const disc = b * b - 4 * a * c;

    let roots: number[] = [];
    if (disc > 0.0001) {
      roots = [(-b - Math.sqrt(disc)) / (2 * a), (-b + Math.sqrt(disc)) / (2 * a)];
    } else if (Math.abs(disc) <= 0.0001) {
      roots = [-b / (2 * a)];
    }

    return {
      a: Number(a.toFixed(2)),
      b: Number(b.toFixed(2)),
      c: Number(c.toFixed(2)),
      h: Number(h.toFixed(2)),
      k: Number(k.toFixed(2)),
      disc: Number(disc.toFixed(2)),
      roots: roots.map(r => Number(r.toFixed(2))),
      yIntercept: [0, Number(c.toFixed(2))] as [number, number],
      vertex: [Number(h.toFixed(2)), Number(k.toFixed(2))] as [number, number],
      opens: a > 0 ? 'Upwards (Minimum Vertex)' : 'Downwards (Maximum Vertex)'
    };
  }, [parsedSingleQuad]);

  // =========================================================================
  // GROWTH CALCULATIONS & CROSSOVER POINT
  // =========================================================================
  const growthCalculations = useMemo(() => {
    const linM = parsedLinearGrowth.isValid ? parsedLinearGrowth.m : 2;
    const linB = parsedLinearGrowth.isValid ? parsedLinearGrowth.b : 4;
    const expA = parsedExponentialGrowth.isValid ? parsedExponentialGrowth.a : 2;
    const expB = parsedExponentialGrowth.isValid ? parsedExponentialGrowth.b : 1.5;

    // Generate comparative table for x in [0, 1, 2, 3, 4, 5, 6]
    const sampleTable = [0, 1, 2, 3, 4, 5, 6].map(x => {
      const yLin = linM * x + linB;
      const yExp = expA * Math.pow(expB, x);
      return {
        x,
        yLin: Number(yLin.toFixed(2)),
        yExp: Number(yExp.toFixed(2)),
        diff: Number((yExp - yLin).toFixed(2))
      };
    });

    // Approximate crossover where yExp > yLin for positive x
    let crossoverX: number | null = null;
    let crossoverY: number | null = null;

    if (expB > 1) {
      for (let x = 0.1; x <= 25; x += 0.05) {
        const yLin = linM * x + linB;
        const yExp = expA * Math.pow(expB, x);
        if (yExp >= yLin && x >= 0.5) {
          crossoverX = Number(x.toFixed(2));
          crossoverY = Number(yExp.toFixed(2));
          break;
        }
      }
    }

    return {
      linM,
      linB,
      expA,
      expB,
      sampleTable,
      crossoverX,
      crossoverY,
      growthType: expB > 1 ? 'Exponential Growth (b > 1)' : 'Exponential Decay (0 < b < 1)'
    };
  }, [parsedLinearGrowth, parsedExponentialGrowth]);

  // ==========================================
  // SVG CURVE PATH GENERATORS
  // ==========================================
  const generateLinePath = (m: number, b: number) => {
    const yAtMin = m * xMin + b;
    const yAtMax = m * xMax + b;
    return `M ${toSvgX(xMin)} ${toSvgY(yAtMin)} L ${toSvgX(xMax)} ${toSvgY(yAtMax)}`;
  };

  const generateParabolaPath = (a: number, b: number, c: number) => {
    const points: string[] = [];
    const step = (xMax - xMin) / 100;
    for (let x = xMin; x <= xMax; x += step) {
      const y = a * x * x + b * x + c;
      const sx = toSvgX(x);
      const sy = toSvgY(y);
      points.push(`${points.length === 0 ? 'M' : 'L'} ${sx.toFixed(1)} ${sy.toFixed(1)}`);
    }
    return points.join(' ');
  };

  const generateExpPath = (a: number, b: number) => {
    const points: string[] = [];
    const step = (xMax - xMin) / 120;
    for (let x = xMin; x <= xMax; x += step) {
      const y = a * Math.pow(b, x);
      // Clamp huge values to prevent SVG clipping weirdness
      const clampedY = Math.max(yMin - 5, Math.min(yMax + 15, y));
      const sx = toSvgX(x);
      const sy = toSvgY(clampedY);
      points.push(`${points.length === 0 ? 'M' : 'L'} ${sx.toFixed(1)} ${sy.toFixed(1)}`);
    }
    return points.join(' ');
  };

  // Canvas Mouse Move Crosshair Handler
  const handleGraphMouseMove = (e: React.MouseEvent<SVGSVGElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clientX = e.clientX - rect.left;
    const clientY = e.clientY - rect.top;
    // Scale to viewBox coordinates
    const scaleX = svgWidth / rect.width;
    const scaleY = svgHeight / rect.height;
    const svgX = clientX * scaleX;
    const svgY = clientY * scaleY;

    if (svgX >= margin && svgX <= svgWidth - margin && svgY >= margin && svgY <= svgHeight - margin) {
      const mathX = fromSvgX(svgX);
      const mathY = fromSvgY(svgY);
      setHoverCoord({ x: Number(mathX.toFixed(2)), y: Number(mathY.toFixed(2)) });
    } else {
      setHoverCoord(null);
    }
  };

  // ==========================================
  // PRESET QUESTION LOADERS (SAT REAL EXAM)
  // ==========================================
  const loadPreset = (presetKey: string) => {
    if (presetKey === 'sys-tangent') {
      setActiveTopic('systems');
      setSystemType('linear-quadratic');
      setEq1Text('y = 2x - 1');
      setQuadEqText('y = x^2');
      setMq(2);
      setKq(-1);
      setAq(1);
      setBq(0);
      setCq(0);
    } else if (presetKey === 'sys-parallel') {
      setActiveTopic('systems');
      setSystemType('linear-linear');
      setEq1Text('y = 2x + 1');
      setEq2Text('y = 2x - 3');
      setM1(2);
      setB1(1);
      setM2(2);
      setB2(-3);
    } else if (presetKey === 'sys-coincident') {
      setActiveTopic('systems');
      setSystemType('linear-linear');
      setEq1Text('2x - y = 3');
      setEq2Text('4x - 2y = 6');
      setM1(2);
      setB1(-3);
      setM2(2);
      setB2(-3);
    } else if (presetKey === 'quad-vertex') {
      setActiveTopic('quadratics');
      setQuadInputText('y = 2(x - 3)^2 - 2');
      setQuadForm('vertex');
      setQA(2);
      setQH(3);
      setQK(-2);
    } else if (presetKey === 'quad-roots') {
      setActiveTopic('quadratics');
      setQuadInputText('y = (x + 2)(x - 4)');
      setQuadForm('factored');
      setQA(1);
      setQR1(-2);
      setQR2(4);
    } else if (presetKey === 'growth-doubling') {
      setActiveTopic('growth');
      setLinGrowthText('y = 3x + 2');
      setExpGrowthText('y = 1(2)^x');
      setLinSlope(3);
      setLinIntercept(2);
      setExpInitial(1);
      setExpMultiplier(2);
    } else if (presetKey === 'growth-decay') {
      setActiveTopic('growth');
      setLinGrowthText('y = -x + 6');
      setExpGrowthText('y = 8(0.5)^x');
      setLinSlope(-1);
      setLinIntercept(6);
      setExpInitial(8);
      setExpMultiplier(0.5);
    }
  };

  return (
    <div id="sat-interactive-graph-lab" className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
      {/* Header Banner */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-5 border-b border-slate-100">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-xs font-black uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5 text-slate-700" />
            Interactive SAT Desmos Graphing Studio
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-slate-950 tracking-tight">
            Function Visualizer & Equation Grapher
          </h2>
          <p className="text-xs text-slate-500 max-w-2xl">
            Type custom equations or adjust sliders to immediately visualize Systems of Equations, Quadratic Parabolas, and Exponential vs. Linear growth trajectories with full SAT theoretical breakdowns.
          </p>
        </div>

        {/* Mode Switch: Text Typing vs Sliders */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-2xl border border-slate-200 text-xs font-bold">
          <button
            onClick={() => setInputMode('equation')}
            className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl transition-all cursor-pointer ${
              inputMode === 'equation' ? 'bg-black text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Edit3 className="w-3.5 h-3.5" />
            <span>Type Equations</span>
          </button>
          <button
            onClick={() => setInputMode('sliders')}
            className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl transition-all cursor-pointer ${
              inputMode === 'sliders' ? 'bg-black text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Sliders className="w-3.5 h-3.5" />
            <span>Slider Controls</span>
          </button>
        </div>
      </div>

      {/* Main Topic Navigation Tabs */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
        <button
          onClick={() => setActiveTopic('systems')}
          className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer flex items-center justify-between ${
            activeTopic === 'systems'
              ? 'bg-black border-black text-white shadow-md'
              : 'bg-slate-50 border-slate-200/80 hover:bg-slate-100 text-slate-800'
          }`}
        >
          <div className="flex items-center gap-2.5">
            <Layers className="w-4 h-4 shrink-0" />
            <div>
              <div className="text-xs font-black">1. Systems of Equations</div>
              <div className={`text-[10px] ${activeTopic === 'systems' ? 'text-slate-300' : 'text-slate-500'}`}>
                Linear-Linear & Linear-Quadratic
              </div>
            </div>
          </div>
          <span className={`text-[10px] font-black px-2 py-0.5 rounded-full ${
            activeTopic === 'systems' ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-700'
          }`}>
            Ch 3
          </span>
        </button>

        <button
          onClick={() => setActiveTopic('quadratics')}
          className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer flex items-center justify-between ${
            activeTopic === 'quadratics'
              ? 'bg-black border-black text-white shadow-md'
              : 'bg-slate-50 border-slate-200/80 hover:bg-slate-100 text-slate-800'
          }`}
        >
          <div className="flex items-center gap-2.5">
            <GitCommit className="w-4 h-4 shrink-0" />
            <div>
              <div className="text-xs font-black">2. Quadratic Functions</div>
              <div className={`text-[10px] ${activeTopic === 'quadratics' ? 'text-slate-300' : 'text-slate-500'}`}>
                Standard, Vertex & Factored Forms
              </div>
            </div>
          </div>
          <span className={`text-[10px] font-black px-2 py-0.5 rounded-full ${
            activeTopic === 'quadratics' ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-700'
          }`}>
            Ch 4
          </span>
        </button>

        <button
          onClick={() => setActiveTopic('growth')}
          className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer flex items-center justify-between ${
            activeTopic === 'growth'
              ? 'bg-black border-black text-white shadow-md'
              : 'bg-slate-50 border-slate-200/80 hover:bg-slate-100 text-slate-800'
          }`}
        >
          <div className="flex items-center gap-2.5">
            <TrendingUp className="w-4 h-4 shrink-0" />
            <div>
              <div className="text-xs font-black">3. Linear vs Exponential</div>
              <div className={`text-[10px] ${activeTopic === 'growth' ? 'text-slate-300' : 'text-slate-500'}`}>
                Additive vs Multiplicative Crossover
              </div>
            </div>
          </div>
          <span className={`text-[10px] font-black px-2 py-0.5 rounded-full ${
            activeTopic === 'growth' ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-700'
          }`}>
            Ch 8
          </span>
        </button>
      </div>

      {/* QUICK PRESET CHIPS BAR */}
      <div className="flex flex-wrap items-center gap-2 pt-1 pb-1">
        <span className="text-[11px] font-bold text-slate-500 flex items-center gap-1">
          <Sparkles className="w-3.5 h-3.5 text-amber-500" />
          High-Yield SAT Presets:
        </span>
        <button
          onClick={() => loadPreset('sys-parallel')}
          className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-indigo-50 hover:text-indigo-600 text-slate-700 text-[11px] font-bold transition-all cursor-pointer"
        >
          Parallel Lines (No Solution)
        </button>
        <button
          onClick={() => loadPreset('sys-tangent')}
          className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-indigo-50 hover:text-indigo-600 text-slate-700 text-[11px] font-bold transition-all cursor-pointer"
        >
          Tangent Line (D = 0)
        </button>
        <button
          onClick={() => loadPreset('sys-coincident')}
          className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-indigo-50 hover:text-indigo-600 text-slate-700 text-[11px] font-bold transition-all cursor-pointer"
        >
          Coincident (Infinite Sol)
        </button>
        <button
          onClick={() => loadPreset('quad-vertex')}
          className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-indigo-50 hover:text-indigo-600 text-slate-700 text-[11px] font-bold transition-all cursor-pointer"
        >
          Vertex Form (h, k)
        </button>
        <button
          onClick={() => loadPreset('growth-doubling')}
          className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-indigo-50 hover:text-indigo-600 text-slate-700 text-[11px] font-bold transition-all cursor-pointer"
        >
          Exponential Doubling Crossover
        </button>
        <button
          onClick={() => loadPreset('growth-decay')}
          className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-indigo-50 hover:text-indigo-600 text-slate-700 text-[11px] font-bold transition-all cursor-pointer"
        >
          Radioactive Decay (b &lt; 1)
        </button>
      </div>

      {/* MAIN TWO-COLUMN WORKSPACE: LEFT CONTROLS, RIGHT INTERACTIVE GRAPH */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* ============================================================ */}
        {/* LEFT COLUMN: EQUATION INPUTS & PARAMETER CONTROLS (5 COLS) */}
        {/* ============================================================ */}
        <div className="lg:col-span-5 space-y-4">
          {/* ================= TOPIC 1: SYSTEMS CONTROLS ================= */}
          {activeTopic === 'systems' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black text-slate-900">System Configuration:</span>
                <div className="flex items-center gap-1 bg-slate-100 p-0.5 rounded-xl text-[11px] font-bold">
                  <button
                    onClick={() => setSystemType('linear-linear')}
                    className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
                      systemType === 'linear-linear' ? 'bg-white text-indigo-700 shadow-xs' : 'text-slate-600'
                    }`}
                  >
                    Linear + Linear
                  </button>
                  <button
                    onClick={() => setSystemType('linear-quadratic')}
                    className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
                      systemType === 'linear-quadratic' ? 'bg-white text-indigo-700 shadow-xs' : 'text-slate-600'
                    }`}
                  >
                    Linear + Quadratic
                  </button>
                </div>
              </div>

              {inputMode === 'equation' ? (
                /* DIRECT EQUATION INPUT MODE */
                <div className="space-y-3">
                  {/* Equation 1 */}
                  <div className="p-3.5 rounded-2xl bg-blue-50/50 border border-blue-200 space-y-2">
                    <div className="flex items-center justify-between">
                      <label className="text-xs font-black text-blue-900 flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-blue-600"></span>
                        Equation 1 (Line 1):
                      </label>
                      <span className="text-[10px] text-blue-700 font-mono font-bold">
                        {parsedLinear1.isValid ? parsedLinear1.formatted : 'Invalid syntax'}
                      </span>
                    </div>
                    <input
                      type="text"
                      value={eq1Text}
                      onChange={(e) => setEq1Text(e.target.value)}
                      placeholder="e.g. y = 2x - 1 or 2x + 3y = 6"
                      className="w-full px-3.5 py-2 rounded-xl bg-white border border-blue-300 text-xs font-mono font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {!parsedLinear1.isValid && (
                      <p className="text-[10px] text-rose-600 font-bold">{parsedLinear1.errorMessage}</p>
                    )}
                  </div>

                  {/* Equation 2 */}
                  {systemType === 'linear-linear' ? (
                    <div className="p-3.5 rounded-2xl bg-amber-50/50 border border-amber-200 space-y-2">
                      <div className="flex items-center justify-between">
                        <label className="text-xs font-black text-amber-900 flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-amber-600"></span>
                          Equation 2 (Line 2):
                        </label>
                        <span className="text-[10px] text-amber-700 font-mono font-bold">
                          {parsedLinear2.isValid ? parsedLinear2.formatted : 'Invalid syntax'}
                        </span>
                      </div>
                      <input
                        type="text"
                        value={eq2Text}
                        onChange={(e) => setEq2Text(e.target.value)}
                        placeholder="e.g. y = -x + 5 or 3x - y = 4"
                        className="w-full px-3.5 py-2 rounded-xl bg-white border border-amber-300 text-xs font-mono font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                      />
                      {!parsedLinear2.isValid && (
                        <p className="text-[10px] text-rose-600 font-bold">{parsedLinear2.errorMessage}</p>
                      )}
                    </div>
                  ) : (
                    <div className="p-3.5 rounded-2xl bg-purple-50/50 border border-purple-200 space-y-2">
                      <div className="flex items-center justify-between">
                        <label className="text-xs font-black text-purple-900 flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-purple-600"></span>
                          Equation 2 (Parabola):
                        </label>
                        <span className="text-[10px] text-purple-700 font-mono font-bold">
                          {parsedQuadForSystem.isValid ? parsedQuadForSystem.formatted : 'Invalid syntax'}
                        </span>
                      </div>
                      <input
                        type="text"
                        value={quadEqText}
                        onChange={(e) => setQuadEqText(e.target.value)}
                        placeholder="e.g. y = x^2 - 4x + 3 or y = 2(x-1)^2 - 4"
                        className="w-full px-3.5 py-2 rounded-xl bg-white border border-purple-300 text-xs font-mono font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                      {!parsedQuadForSystem.isValid && (
                        <p className="text-[10px] text-rose-600 font-bold">{parsedQuadForSystem.errorMessage}</p>
                      )}
                    </div>
                  )}
                </div>
              ) : (
                /* SLIDER CONTROLS MODE */
                <div className="space-y-3">
                  {systemType === 'linear-linear' ? (
                    <>
                      {/* Line 1 Sliders */}
                      <div className="p-3.5 rounded-2xl bg-blue-50/60 border border-blue-200 space-y-2.5">
                        <div className="flex justify-between items-center text-xs font-black text-blue-950">
                          <span>Line 1: y = m₁x + b₁</span>
                          <span className="font-mono text-blue-700 font-bold">y = {m1}x {b1 >= 0 ? '+' : '-'} {Math.abs(b1)}</span>
                        </div>
                        <div className="space-y-1.5">
                          <div className="flex justify-between text-[11px] text-slate-600 font-bold">
                            <span>Slope m₁: {m1}</span>
                          </div>
                          <input
                            type="range"
                            min="-5"
                            max="5"
                            step="0.5"
                            value={m1}
                            onChange={(e) => setM1(Number(e.target.value))}
                            className="w-full accent-blue-600 cursor-pointer"
                          />
                        </div>
                        <div className="space-y-1.5">
                          <div className="flex justify-between text-[11px] text-slate-600 font-bold">
                            <span>y-Intercept b₁: {b1}</span>
                          </div>
                          <input
                            type="range"
                            min="-8"
                            max="8"
                            step="0.5"
                            value={b1}
                            onChange={(e) => setB1(Number(e.target.value))}
                            className="w-full accent-blue-600 cursor-pointer"
                          />
                        </div>
                      </div>

                      {/* Line 2 Sliders */}
                      <div className="p-3.5 rounded-2xl bg-amber-50/60 border border-amber-200 space-y-2.5">
                        <div className="flex justify-between items-center text-xs font-black text-amber-950">
                          <span>Line 2: y = m₂x + b₂</span>
                          <span className="font-mono text-amber-700 font-bold">y = {m2}x {b2 >= 0 ? '+' : '-'} {Math.abs(b2)}</span>
                        </div>
                        <div className="space-y-1.5">
                          <div className="flex justify-between text-[11px] text-slate-600 font-bold">
                            <span>Slope m₂: {m2}</span>
                          </div>
                          <input
                            type="range"
                            min="-5"
                            max="5"
                            step="0.5"
                            value={m2}
                            onChange={(e) => setM2(Number(e.target.value))}
                            className="w-full accent-amber-600 cursor-pointer"
                          />
                        </div>
                        <div className="space-y-1.5">
                          <div className="flex justify-between text-[11px] text-slate-600 font-bold">
                            <span>y-Intercept b₂: {b2}</span>
                          </div>
                          <input
                            type="range"
                            min="-8"
                            max="8"
                            step="0.5"
                            value={b2}
                            onChange={(e) => setB2(Number(e.target.value))}
                            className="w-full accent-amber-600 cursor-pointer"
                          />
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Quadratic Sliders */}
                      <div className="p-3.5 rounded-2xl bg-purple-50/60 border border-purple-200 space-y-2.5">
                        <div className="flex justify-between items-center text-xs font-black text-purple-950">
                          <span>Parabola: y = ax² + bx + c</span>
                          <span className="font-mono text-purple-700 font-bold">y = {aq}x² {bq >= 0 ? '+' : '-'} {Math.abs(bq)}x {cq >= 0 ? '+' : '-'} {Math.abs(cq)}</span>
                        </div>
                        <div className="grid grid-cols-3 gap-2">
                          <div>
                            <label className="text-[10px] text-slate-600 font-bold">a: {aq}</label>
                            <input
                              type="range"
                              min="-3"
                              max="3"
                              step="0.5"
                              value={aq}
                              onChange={(e) => setAq(Number(e.target.value))}
                              className="w-full accent-purple-600"
                            />
                          </div>
                          <div>
                            <label className="text-[10px] text-slate-600 font-bold">b: {bq}</label>
                            <input
                              type="range"
                              min="-6"
                              max="6"
                              step="1"
                              value={bq}
                              onChange={(e) => setBq(Number(e.target.value))}
                              className="w-full accent-purple-600"
                            />
                          </div>
                          <div>
                            <label className="text-[10px] text-slate-600 font-bold">c: {cq}</label>
                            <input
                              type="range"
                              min="-8"
                              max="8"
                              step="1"
                              value={cq}
                              onChange={(e) => setCq(Number(e.target.value))}
                              className="w-full accent-purple-600"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Line Sliders */}
                      <div className="p-3.5 rounded-2xl bg-blue-50/60 border border-blue-200 space-y-2.5">
                        <div className="flex justify-between items-center text-xs font-black text-blue-950">
                          <span>Line: y = mx + k</span>
                          <span className="font-mono text-blue-700 font-bold">y = {m1}x {b1 >= 0 ? '+' : '-'} {Math.abs(b1)}</span>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          <div>
                            <label className="text-[10px] text-slate-600 font-bold">m: {m1}</label>
                            <input
                              type="range"
                              min="-5"
                              max="5"
                              step="0.5"
                              value={m1}
                              onChange={(e) => setM1(Number(e.target.value))}
                              className="w-full accent-blue-600"
                            />
                          </div>
                          <div>
                            <label className="text-[10px] text-slate-600 font-bold">k: {b1}</label>
                            <input
                              type="range"
                              min="-8"
                              max="8"
                              step="0.5"
                              value={b1}
                              onChange={(e) => setB1(Number(e.target.value))}
                              className="w-full accent-blue-600"
                            />
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              )}
            </div>
          )}

          {/* ================= TOPIC 2: QUADRATICS CONTROLS ================= */}
          {activeTopic === 'quadratics' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black text-slate-900">Parabola Form:</span>
                <div className="flex items-center gap-1 bg-slate-100 p-0.5 rounded-xl text-[11px] font-bold">
                  <button
                    onClick={() => setQuadForm('standard')}
                    className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
                      quadForm === 'standard' ? 'bg-white text-indigo-700 shadow-xs' : 'text-slate-600'
                    }`}
                  >
                    Standard
                  </button>
                  <button
                    onClick={() => setQuadForm('vertex')}
                    className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
                      quadForm === 'vertex' ? 'bg-white text-indigo-700 shadow-xs' : 'text-slate-600'
                    }`}
                  >
                    Vertex
                  </button>
                  <button
                    onClick={() => setQuadForm('factored')}
                    className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
                      quadForm === 'factored' ? 'bg-white text-indigo-700 shadow-xs' : 'text-slate-600'
                    }`}
                  >
                    Factored
                  </button>
                </div>
              </div>

              {inputMode === 'equation' ? (
                <div className="p-3.5 rounded-2xl bg-indigo-50/50 border border-indigo-200 space-y-2">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-black text-indigo-950 flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-indigo-600"></span>
                      Quadratic Equation:
                    </label>
                    <span className="text-[10px] text-indigo-700 font-mono font-bold">
                      {parsedSingleQuad.isValid ? parsedSingleQuad.formatted : 'Invalid syntax'}
                    </span>
                  </div>
                  <input
                    type="text"
                    value={quadInputText}
                    onChange={(e) => setQuadInputText(e.target.value)}
                    placeholder="e.g. y = x^2 - 4x + 3 or y = 2(x-3)^2 - 4"
                    className="w-full px-3.5 py-2 rounded-xl bg-white border border-indigo-300 text-xs font-mono font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                  {!parsedSingleQuad.isValid && (
                    <p className="text-[10px] text-rose-600 font-bold">{parsedSingleQuad.errorMessage}</p>
                  )}
                </div>
              ) : (
                <div className="p-3.5 rounded-2xl bg-indigo-50/60 border border-indigo-200 space-y-3">
                  {quadForm === 'standard' && (
                    <>
                      <div className="text-xs font-black text-indigo-950">Standard: y = ax² + bx + c</div>
                      <div className="space-y-1.5">
                        <div className="flex justify-between text-[11px] font-bold text-slate-700">
                          <span>Opening / Width a: {qA}</span>
                        </div>
                        <input
                          type="range"
                          min="-3"
                          max="3"
                          step="0.5"
                          value={qA}
                          onChange={(e) => setQA(Number(e.target.value))}
                          className="w-full accent-indigo-600"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <div className="flex justify-between text-[11px] font-bold text-slate-700">
                          <span>Linear Shift b: {qB}</span>
                        </div>
                        <input
                          type="range"
                          min="-8"
                          max="8"
                          step="1"
                          value={qB}
                          onChange={(e) => setQB(Number(e.target.value))}
                          className="w-full accent-indigo-600"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <div className="flex justify-between text-[11px] font-bold text-slate-700">
                          <span>y-Intercept c: {qC}</span>
                        </div>
                        <input
                          type="range"
                          min="-8"
                          max="8"
                          step="1"
                          value={qC}
                          onChange={(e) => setQC(Number(e.target.value))}
                          className="w-full accent-indigo-600"
                        />
                      </div>
                    </>
                  )}

                  {quadForm === 'vertex' && (
                    <>
                      <div className="text-xs font-black text-indigo-950">Vertex Form: y = a(x - h)² + k</div>
                      <div className="space-y-1.5">
                        <div className="flex justify-between text-[11px] font-bold text-slate-700">
                          <span>Vertex X (h): {qH}</span>
                        </div>
                        <input
                          type="range"
                          min="-5"
                          max="5"
                          step="0.5"
                          value={qH}
                          onChange={(e) => setQH(Number(e.target.value))}
                          className="w-full accent-indigo-600"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <div className="flex justify-between text-[11px] font-bold text-slate-700">
                          <span>Vertex Y (k): {qK}</span>
                        </div>
                        <input
                          type="range"
                          min="-8"
                          max="8"
                          step="0.5"
                          value={qK}
                          onChange={(e) => setQK(Number(e.target.value))}
                          className="w-full accent-indigo-600"
                        />
                      </div>
                    </>
                  )}

                  {quadForm === 'factored' && (
                    <>
                      <div className="text-xs font-black text-indigo-950">Factored Form: y = a(x - p)(x - q)</div>
                      <div className="space-y-1.5">
                        <div className="flex justify-between text-[11px] font-bold text-slate-700">
                          <span>Root 1 (p): {qR1}</span>
                        </div>
                        <input
                          type="range"
                          min="-5"
                          max="5"
                          step="0.5"
                          value={qR1}
                          onChange={(e) => setQR1(Number(e.target.value))}
                          className="w-full accent-indigo-600"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <div className="flex justify-between text-[11px] font-bold text-slate-700">
                          <span>Root 2 (q): {qR2}</span>
                        </div>
                        <input
                          type="range"
                          min="-5"
                          max="5"
                          step="0.5"
                          value={qR2}
                          onChange={(e) => setQR2(Number(e.target.value))}
                          className="w-full accent-indigo-600"
                        />
                      </div>
                    </>
                  )}
                </div>
              )}
            </div>
          )}

          {/* ================= TOPIC 3: GROWTH CONTROLS ================= */}
          {activeTopic === 'growth' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black text-slate-900">Growth Comparison:</span>
                <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                  {growthCalculations.growthType}
                </span>
              </div>

              {inputMode === 'equation' ? (
                <div className="space-y-3">
                  {/* Linear Function */}
                  <div className="p-3.5 rounded-2xl bg-blue-50/50 border border-blue-200 space-y-2">
                    <div className="flex items-center justify-between">
                      <label className="text-xs font-black text-blue-900 flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-blue-600"></span>
                        Linear Function (y = mx + b):
                      </label>
                      <span className="text-[10px] text-blue-700 font-mono font-bold">
                        {parsedLinearGrowth.isValid ? parsedLinearGrowth.formatted : 'Invalid'}
                      </span>
                    </div>
                    <input
                      type="text"
                      value={linGrowthText}
                      onChange={(e) => setLinGrowthText(e.target.value)}
                      placeholder="e.g. y = 2x + 4"
                      className="w-full px-3.5 py-2 rounded-xl bg-white border border-blue-300 text-xs font-mono font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  {/* Exponential Function */}
                  <div className="p-3.5 rounded-2xl bg-emerald-50/50 border border-emerald-200 space-y-2">
                    <div className="flex items-center justify-between">
                      <label className="text-xs font-black text-emerald-900 flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-600"></span>
                        Exponential Function (y = a · bˣ):
                      </label>
                      <span className="text-[10px] text-emerald-700 font-mono font-bold">
                        {parsedExponentialGrowth.isValid ? parsedExponentialGrowth.formatted : 'Invalid'}
                      </span>
                    </div>
                    <input
                      type="text"
                      value={expGrowthText}
                      onChange={(e) => setExpGrowthText(e.target.value)}
                      placeholder="e.g. y = 2(1.5)^x or y = 100(1+0.05)^x"
                      className="w-full px-3.5 py-2 rounded-xl bg-white border border-emerald-300 text-xs font-mono font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                </div>
              ) : (
                <div className="space-y-3">
                  {/* Linear Sliders */}
                  <div className="p-3.5 rounded-2xl bg-blue-50/60 border border-blue-200 space-y-2.5">
                    <div className="flex justify-between items-center text-xs font-black text-blue-950">
                      <span>Linear: y = mx + b</span>
                      <span className="font-mono text-blue-700 font-bold">y = {linSlope}x + {linIntercept}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="text-[10px] text-slate-600 font-bold">Slope m: {linSlope}</label>
                        <input
                          type="range"
                          min="0.5"
                          max="6"
                          step="0.5"
                          value={linSlope}
                          onChange={(e) => setLinSlope(Number(e.target.value))}
                          className="w-full accent-blue-600"
                        />
                      </div>
                      <div>
                        <label className="text-[10px] text-slate-600 font-bold">Intercept b: {linIntercept}</label>
                        <input
                          type="range"
                          min="0"
                          max="10"
                          step="1"
                          value={linIntercept}
                          onChange={(e) => setLinIntercept(Number(e.target.value))}
                          className="w-full accent-blue-600"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Exponential Sliders */}
                  <div className="p-3.5 rounded-2xl bg-emerald-50/60 border border-emerald-200 space-y-2.5">
                    <div className="flex justify-between items-center text-xs font-black text-emerald-950">
                      <span>Exponential: y = a · bˣ</span>
                      <span className="font-mono text-emerald-700 font-bold">y = {expInitial}({expMultiplier})ˣ</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="text-[10px] text-slate-600 font-bold">Initial a: {expInitial}</label>
                        <input
                          type="range"
                          min="0.5"
                          max="10"
                          step="0.5"
                          value={expInitial}
                          onChange={(e) => setExpInitial(Number(e.target.value))}
                          className="w-full accent-emerald-600"
                        />
                      </div>
                      <div>
                        <label className="text-[10px] text-slate-600 font-bold">Multiplier b: {expMultiplier}</label>
                        <input
                          type="range"
                          min="0.2"
                          max="3"
                          step="0.1"
                          value={expMultiplier}
                          onChange={(e) => setExpMultiplier(Number(e.target.value))}
                          className="w-full accent-emerald-600"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* DYNAMIC KEY STATS CARD */}
          <div className="p-4 rounded-2xl bg-slate-900 text-white space-y-2.5 shadow-sm">
            <div className="flex items-center justify-between text-xs font-black pb-2 border-b border-slate-800">
              <span className="flex items-center gap-1.5">
                <Calculator className="w-3.5 h-3.5 text-indigo-400" />
                Live SAT Computed Metrics
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 font-mono">
                Real-Time
              </span>
            </div>

            {activeTopic === 'systems' && (
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Solution Count:</span>
                  <span className={`font-black px-2 py-0.5 rounded-md ${
                    systemCalculations.status === 'one-solution' ? 'bg-emerald-500/20 text-emerald-300' :
                    systemCalculations.status === 'two-solutions' ? 'bg-indigo-500/20 text-indigo-300' :
                    systemCalculations.status === 'infinitely-many' ? 'bg-amber-500/20 text-amber-300' :
                    'bg-rose-500/20 text-rose-300'
                  }`}>
                    {systemCalculations.status === 'one-solution' ? '1 Unique Solution' :
                     systemCalculations.status === 'two-solutions' ? '2 Real Solutions' :
                     systemCalculations.status === 'infinitely-many' ? 'Infinitely Many Solutions' :
                     '0 Real Solutions'}
                  </span>
                </div>

                {systemCalculations.intersections.length > 0 && (
                  <div className="flex justify-between items-center pt-1 border-t border-slate-800">
                    <span className="text-slate-400">Coordinates (x, y):</span>
                    <span className="font-mono font-black text-amber-300">
                      {systemCalculations.intersections.map(p => `(${p[0]}, ${p[1]})`).join(' & ')}
                    </span>
                  </div>
                )}

                {systemType === 'linear-quadratic' && 'discriminant' in systemCalculations && (
                  <div className="flex justify-between items-center pt-1 border-t border-slate-800 text-[11px]">
                    <span className="text-slate-400">System Discriminant D:</span>
                    <span className="font-mono font-bold text-indigo-300">
                      D = {systemCalculations.discriminant}
                    </span>
                  </div>
                )}
              </div>
            )}

            {activeTopic === 'quadratics' && (
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="bg-slate-800/60 p-2 rounded-xl">
                  <span className="text-[10px] text-slate-400 block">Vertex (h, k):</span>
                  <strong className="text-indigo-300 font-mono">({quadCalculations.h}, {quadCalculations.k})</strong>
                </div>
                <div className="bg-slate-800/60 p-2 rounded-xl">
                  <span className="text-[10px] text-slate-400 block">Discriminant (D):</span>
                  <strong className={`font-mono ${quadCalculations.disc > 0 ? 'text-emerald-400' : quadCalculations.disc === 0 ? 'text-amber-400' : 'text-rose-400'}`}>
                    {quadCalculations.disc} ({quadCalculations.disc > 0 ? '2 Roots' : quadCalculations.disc === 0 ? '1 Root' : '0 Roots'})
                  </strong>
                </div>
                <div className="bg-slate-800/60 p-2 rounded-xl">
                  <span className="text-[10px] text-slate-400 block">y-Intercept:</span>
                  <strong className="text-amber-300 font-mono">(0, {quadCalculations.c})</strong>
                </div>
                <div className="bg-slate-800/60 p-2 rounded-xl">
                  <span className="text-[10px] text-slate-400 block">Real Roots:</span>
                  <strong className="text-white font-mono">
                    {quadCalculations.roots.length > 0 ? quadCalculations.roots.join(', ') : 'None (Complex)'}
                  </strong>
                </div>
              </div>
            )}

            {activeTopic === 'growth' && (
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Crossover Point:</span>
                  <span className="font-mono font-black text-emerald-300">
                    {growthCalculations.crossoverX !== null
                      ? `x ≈ ${growthCalculations.crossoverX}, y ≈ ${growthCalculations.crossoverY}`
                      : 'No Positive Crossover'}
                  </span>
                </div>
                <div className="flex justify-between items-center pt-1 border-t border-slate-800 text-[11px]">
                  <span className="text-slate-400">Horizontal Asymptote:</span>
                  <span className="font-mono font-bold text-amber-300">y = 0 (x-axis)</span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ============================================================ */}
        {/* RIGHT COLUMN: INTERACTIVE COORDINATE PLANE CANVAS (7 COLS)   */}
        {/* ============================================================ */}
        <div className="lg:col-span-7 space-y-3">
          {/* Zoom and Coordinate Controls Bar */}
          <div className="flex flex-wrap items-center justify-between gap-2 p-2 bg-slate-50 rounded-2xl border border-slate-200 text-xs">
            <div className="flex items-center gap-1">
              <span className="text-[11px] font-bold text-slate-500 px-1">Window:</span>
              <button
                onClick={() => setGraphZoom('standard')}
                className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition-all cursor-pointer ${
                  graphZoom === 'standard' ? 'bg-black text-white shadow-xs' : 'text-slate-600 hover:bg-slate-200'
                }`}
              >
                [-6, 6]
              </button>
              <button
                onClick={() => setGraphZoom('zoomed-out')}
                className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition-all cursor-pointer ${
                  graphZoom === 'zoomed-out' ? 'bg-black text-white shadow-xs' : 'text-slate-600 hover:bg-slate-200'
                }`}
              >
                [-10, 10]
              </button>
              <button
                onClick={() => setGraphZoom('first-quadrant')}
                className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition-all cursor-pointer ${
                  graphZoom === 'first-quadrant' ? 'bg-black text-white shadow-xs' : 'text-slate-600 hover:bg-slate-200'
                }`}
              >
                Quad I (Growth)
              </button>
            </div>

            {/* Hover Coordinate Tag */}
            <div className="text-[11px] font-mono font-bold text-slate-700 bg-white px-2.5 py-1 rounded-lg border border-slate-200 shadow-2xs">
              Cursor: {hoverCoord ? `(${hoverCoord.x}, ${hoverCoord.y})` : 'Hover Canvas'}
            </div>
          </div>

          {/* SVG GRAPH CANVAS CONTAINER */}
          <div className="relative bg-slate-950 rounded-2xl border border-slate-900 overflow-hidden shadow-inner flex items-center justify-center">
            <svg
              viewBox={`0 0 ${svgWidth} ${svgHeight}`}
              className="w-full h-auto cursor-crosshair select-none"
              onMouseMove={handleGraphMouseMove}
              onMouseLeave={() => setHoverCoord(null)}
            >
              {/* Background Grid Pattern */}
              <defs>
                <pattern id="grid-sub" width="10" height="10" patternUnits="userSpaceOnUse">
                  <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#1e293b" strokeWidth="0.5" />
                </pattern>
                <pattern id="grid-main" width="50" height="50" patternUnits="userSpaceOnUse">
                  <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#334155" strokeWidth="0.8" />
                </pattern>
              </defs>

              <rect x="0" y="0" width={svgWidth} height={svgHeight} fill="#090d16" />
              <rect x={margin} y={margin} width={plotW} height={plotH} fill="url(#grid-sub)" opacity="0.6" />

              {/* Grid Tick Lines and Numbers */}
              {Array.from({ length: Math.floor(xMax - xMin) + 1 }, (_, i) => {
                const xVal = Math.ceil(xMin) + i;
                if (xVal > xMax) return null;
                const sx = toSvgX(xVal);
                return (
                  <g key={`x-tick-${xVal}`}>
                    <line x1={sx} y1={margin} x2={sx} y2={margin + plotH} stroke="#1e293b" strokeWidth="0.8" strokeDasharray="2,2" />
                    {xVal !== 0 && xVal % 2 === 0 && (
                      <text x={sx} y={toSvgY(0) + 12} fill="#64748b" fontSize="8" textAnchor="middle" fontFamily="monospace">
                        {xVal}
                      </text>
                    )}
                  </g>
                );
              })}

              {Array.from({ length: Math.floor(yMax - yMin) + 1 }, (_, i) => {
                const yVal = Math.ceil(yMin) + i;
                if (yVal > yMax) return null;
                const sy = toSvgY(yVal);
                return (
                  <g key={`y-tick-${yVal}`}>
                    <line x1={margin} y1={sy} x2={margin + plotW} y2={sy} stroke="#1e293b" strokeWidth="0.8" strokeDasharray="2,2" />
                    {yVal !== 0 && yVal % 2 === 0 && (
                      <text x={toSvgX(0) - 8} y={sy + 3} fill="#64748b" fontSize="8" textAnchor="end" fontFamily="monospace">
                        {yVal}
                      </text>
                    )}
                  </g>
                );
              })}

              {/* Main X and Y Axes */}
              <line
                x1={margin}
                y1={toSvgY(0)}
                x2={margin + plotW}
                y2={toSvgY(0)}
                stroke="#94a3b8"
                strokeWidth="1.5"
              />
              <line
                x1={toSvgX(0)}
                y1={margin}
                x2={toSvgX(0)}
                y2={margin + plotH}
                stroke="#94a3b8"
                strokeWidth="1.5"
              />

              {/* Axis Labels */}
              <text x={margin + plotW - 8} y={toSvgY(0) - 6} fill="#cbd5e1" fontSize="10" fontWeight="bold" fontFamily="monospace">
                x
              </text>
              <text x={toSvgX(0) + 6} y={margin + 12} fill="#cbd5e1" fontSize="10" fontWeight="bold" fontFamily="monospace">
                y
              </text>

              {/* ============================================================ */}
              {/* TOPIC 1: SYSTEMS RENDERED CURVES & INTERSECTIONS             */}
              {/* ============================================================ */}
              {activeTopic === 'systems' && (
                <>
                  {systemType === 'linear-linear' ? (
                    <>
                      {/* Line 1 */}
                      {parsedLinear1.isValid && (
                        <path
                          d={generateLinePath(parsedLinear1.m, parsedLinear1.b)}
                          stroke="#38bdf8"
                          strokeWidth="2.5"
                          fill="none"
                        />
                      )}
                      {/* Line 2 */}
                      {parsedLinear2.isValid && (
                        <path
                          d={generateLinePath(parsedLinear2.m, parsedLinear2.b)}
                          stroke="#fbbf24"
                          strokeWidth="2.5"
                          strokeDasharray={systemCalculations.status === 'infinitely-many' ? '5,5' : 'none'}
                          fill="none"
                        />
                      )}
                    </>
                  ) : (
                    <>
                      {/* Parabola */}
                      {parsedQuadForSystem.isValid && (
                        <path
                          d={generateParabolaPath(parsedQuadForSystem.a, parsedQuadForSystem.b, parsedQuadForSystem.c)}
                          stroke="#c084fc"
                          strokeWidth="2.5"
                          fill="none"
                        />
                      )}
                      {/* Line */}
                      {parsedLinear1.isValid && (
                        <path
                          d={generateLinePath(parsedLinear1.m, parsedLinear1.b)}
                          stroke="#38bdf8"
                          strokeWidth="2.5"
                          fill="none"
                        />
                      )}
                    </>
                  )}

                  {/* Intersection Points & Glowing Circles */}
                  {systemCalculations.intersections.map(([ix, iy], idx) => {
                    const sx = toSvgX(ix);
                    const sy = toSvgY(iy);
                    if (sx < margin || sx > margin + plotW || sy < margin || sy > margin + plotH) return null;

                    return (
                      <g key={`int-${idx}`}>
                        <circle cx={sx} cy={sy} r="9" fill="#10b981" opacity="0.3" />
                        <circle cx={sx} cy={sy} r="5" fill="#10b981" stroke="#ffffff" strokeWidth="2" />
                        <rect x={sx + 8} y={sy - 18} width="65" height="18" rx="4" fill="#0f172a" stroke="#10b981" strokeWidth="1" />
                        <text x={sx + 40} y={sy - 6} fill="#ffffff" fontSize="9" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
                          ({ix}, {iy})
                        </text>
                      </g>
                    );
                  })}
                </>
              )}

              {/* ============================================================ */}
              {/* TOPIC 2: QUADRATICS RENDERED PARABOLA, VERTEX & ROOTS       */}
              {/* ============================================================ */}
              {activeTopic === 'quadratics' && parsedSingleQuad.isValid && (
                <>
                  {/* Axis of Symmetry (Dashed Line) */}
                  <line
                    x1={toSvgX(quadCalculations.h)}
                    y1={margin}
                    x2={toSvgX(quadCalculations.h)}
                    y2={margin + plotH}
                    stroke="#a855f7"
                    strokeWidth="1.5"
                    strokeDasharray="4,4"
                    opacity="0.7"
                  />

                  {/* Parabola Curve */}
                  <path
                    d={generateParabolaPath(quadCalculations.a, quadCalculations.b, quadCalculations.c)}
                    stroke="#6366f1"
                    strokeWidth="3"
                    fill="none"
                  />

                  {/* Vertex Point */}
                  {toSvgX(quadCalculations.h) >= margin &&
                    toSvgX(quadCalculations.h) <= margin + plotW &&
                    toSvgY(quadCalculations.k) >= margin &&
                    toSvgY(quadCalculations.k) <= margin + plotH && (
                      <g>
                        <circle cx={toSvgX(quadCalculations.h)} cy={toSvgY(quadCalculations.k)} r="8" fill="#a855f7" opacity="0.3" />
                        <circle cx={toSvgX(quadCalculations.h)} cy={toSvgY(quadCalculations.k)} r="4.5" fill="#a855f7" stroke="#ffffff" strokeWidth="2" />
                        <rect x={toSvgX(quadCalculations.h) + 8} y={toSvgY(quadCalculations.k) - 18} width="78" height="18" rx="4" fill="#0f172a" stroke="#a855f7" strokeWidth="1" />
                        <text x={toSvgX(quadCalculations.h) + 47} y={toSvgY(quadCalculations.k) - 6} fill="#ffffff" fontSize="8" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
                          V:({quadCalculations.h}, {quadCalculations.k})
                        </text>
                      </g>
                    )}

                  {/* Real Roots / X-Intercepts */}
                  {quadCalculations.roots.map((rx, idx) => {
                    const sx = toSvgX(rx);
                    const sy = toSvgY(0);
                    if (sx < margin || sx > margin + plotW) return null;
                    return (
                      <g key={`root-${idx}`}>
                        <circle cx={sx} cy={sy} r="4" fill="#10b981" stroke="#ffffff" strokeWidth="1.5" />
                        <text x={sx} y={sy + 14} fill="#34d399" fontSize="8" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
                          ({rx}, 0)
                        </text>
                      </g>
                    );
                  })}

                  {/* Y-Intercept */}
                  {toSvgY(quadCalculations.c) >= margin && toSvgY(quadCalculations.c) <= margin + plotH && (
                    <g>
                      <circle cx={toSvgX(0)} cy={toSvgY(quadCalculations.c)} r="4" fill="#fbbf24" stroke="#ffffff" strokeWidth="1.5" />
                      <text x={toSvgX(0) + 8} y={toSvgY(quadCalculations.c) + 3} fill="#fbbf24" fontSize="8" fontWeight="bold" fontFamily="monospace">
                        (0, {quadCalculations.c})
                      </text>
                    </g>
                  )}
                </>
              )}

              {/* ============================================================ */}
              {/* TOPIC 3: GROWTH RENDERED LINEAR VS EXPONENTIAL               */}
              {/* ============================================================ */}
              {activeTopic === 'growth' && (
                <>
                  {/* Linear Line */}
                  {parsedLinearGrowth.isValid && (
                    <path
                      d={generateLinePath(growthCalculations.linM, growthCalculations.linB)}
                      stroke="#38bdf8"
                      strokeWidth="2.5"
                      fill="none"
                    />
                  )}

                  {/* Exponential Curve */}
                  {parsedExponentialGrowth.isValid && (
                    <path
                      d={generateExpPath(growthCalculations.expA, growthCalculations.expB)}
                      stroke="#34d399"
                      strokeWidth="3"
                      fill="none"
                    />
                  )}

                  {/* Crossover Point Indicator */}
                  {growthCalculations.crossoverX !== null && growthCalculations.crossoverY !== null && (
                    <g>
                      <circle
                        cx={toSvgX(growthCalculations.crossoverX)}
                        cy={toSvgY(growthCalculations.crossoverY)}
                        r="9"
                        fill="#f59e0b"
                        opacity="0.3"
                      />
                      <circle
                        cx={toSvgX(growthCalculations.crossoverX)}
                        cy={toSvgY(growthCalculations.crossoverY)}
                        r="5"
                        fill="#f59e0b"
                        stroke="#ffffff"
                        strokeWidth="2"
                      />
                      <rect
                        x={toSvgX(growthCalculations.crossoverX) + 8}
                        y={toSvgY(growthCalculations.crossoverY) - 20}
                        width="95"
                        height="18"
                        rx="4"
                        fill="#0f172a"
                        stroke="#f59e0b"
                        strokeWidth="1"
                      />
                      <text
                        x={toSvgX(growthCalculations.crossoverX) + 55}
                        y={toSvgY(growthCalculations.crossoverY) - 8}
                        fill="#ffffff"
                        fontSize="8"
                        fontWeight="bold"
                        textAnchor="middle"
                        fontFamily="monospace"
                      >
                        Overtakes: ({growthCalculations.crossoverX}, {growthCalculations.crossoverY})
                      </text>
                    </g>
                  )}
                </>
              )}

              {/* Hover Crosshair Guide Lines */}
              {hoverCoord && (
                <g opacity="0.8">
                  <line
                    x1={toSvgX(hoverCoord.x)}
                    y1={margin}
                    x2={toSvgX(hoverCoord.x)}
                    y2={margin + plotH}
                    stroke="#e2e8f0"
                    strokeWidth="0.8"
                    strokeDasharray="3,3"
                  />
                  <line
                    x1={margin}
                    y1={toSvgY(hoverCoord.y)}
                    x2={margin + plotW}
                    y2={toSvgY(hoverCoord.y)}
                    stroke="#e2e8f0"
                    strokeWidth="0.8"
                    strokeDasharray="3,3"
                  />
                </g>
              )}
            </svg>
          </div>

          {/* Graph Legend */}
          <div className="flex flex-wrap items-center justify-between gap-3 text-[11px] font-bold text-slate-600 px-1">
            <div className="flex items-center gap-4">
              {activeTopic === 'systems' && (
                <>
                  <span className="flex items-center gap-1.5 text-sky-600">
                    <span className="w-3 h-1 bg-sky-500 rounded-full"></span>
                    Line 1 ({parsedLinear1.formatted})
                  </span>
                  <span className="flex items-center gap-1.5 text-amber-600">
                    <span className="w-3 h-1 bg-amber-500 rounded-full"></span>
                    {systemType === 'linear-linear' ? 'Line 2' : 'Parabola'}
                  </span>
                  <span className="flex items-center gap-1.5 text-emerald-600">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    Intersection (x, y)
                  </span>
                </>
              )}

              {activeTopic === 'quadratics' && (
                <>
                  <span className="flex items-center gap-1.5 text-indigo-600">
                    <span className="w-3 h-1 bg-indigo-500 rounded-full"></span>
                    Parabola
                  </span>
                  <span className="flex items-center gap-1.5 text-purple-600">
                    <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                    Vertex (h, k)
                  </span>
                  <span className="flex items-center gap-1.5 text-emerald-600">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    Roots (x-intercepts)
                  </span>
                </>
              )}

              {activeTopic === 'growth' && (
                <>
                  <span className="flex items-center gap-1.5 text-sky-600">
                    <span className="w-3 h-1 bg-sky-500 rounded-full"></span>
                    Linear (Additive)
                  </span>
                  <span className="flex items-center gap-1.5 text-emerald-600">
                    <span className="w-3 h-1 bg-emerald-500 rounded-full"></span>
                    Exponential (Multiplier)
                  </span>
                  <span className="flex items-center gap-1.5 text-amber-600">
                    <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                    Crossover Point
                  </span>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* FULL DUAL-PANE RATIONALE (THEORETICAL FORM vs GRAPHICAL FORM)*/}
      {/* ============================================================ */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-slate-100">
        {/* PANE 1: THEORETICAL & ALGEBRAIC FORM */}
        <div className="p-5 rounded-2xl bg-indigo-50/60 border border-indigo-200/80 space-y-3">
          <div className="flex items-center gap-2 text-indigo-950 font-black text-xs">
            <BookOpen className="w-4 h-4 text-indigo-600" />
            <span>1. Theoretical & Algebraic Foundation (Uni Route Advanced Form)</span>
          </div>

          <div className="text-xs text-slate-700 space-y-2 leading-relaxed">
            {activeTopic === 'systems' && (
              <>
                <p>
                  <strong>Algebraic Classification Rule:</strong> For a system of two linear equations $y = m_1x + b_1$ and $y = m_2x + b_2$:
                </p>
                <ul className="list-disc list-inside space-y-1 text-slate-600">
                  <li><strong>1 Unique Solution:</strong> Slopes are unequal ($m_1 \neq m_2$). Solving yields a unique point $(x, y)$.</li>
                  <li><strong>0 Solutions (No Solution):</strong> Slopes are equal ($m_1 = m_2$) but intercepts differ ($b_1 \neq b_2$).</li>
                  <li><strong>Infinitely Many Solutions:</strong> Slopes and intercepts are both identical ($m_1 = m_2$ and $b_1 = b_2$).</li>
                </ul>
                <div className="p-2.5 rounded-xl bg-white border border-indigo-200 text-[11px] font-mono text-indigo-900">
                  <strong>Current System:</strong> {systemCalculations.explanation}
                </div>
              </>
            )}

            {activeTopic === 'quadratics' && (
              <>
                <p>
                  <strong>Tri-Form Algebraic Equivalence:</strong> Every quadratic function can be expressed in three SAT representations:
                </p>
                <div className="space-y-1 text-[11px] font-mono bg-white p-2.5 rounded-xl border border-indigo-200">
                  <div>• <strong>Standard Form:</strong> $y = ax^2 + bx + c$ $\implies$ $y$-intercept is $(0, c)$.</div>
                  <div>• <strong>Vertex Form:</strong> $y = a(x - h)^2 + k$ $\implies$ Vertex is $(h, k)$ with axis $x = h$.</div>
                  <div>• <strong>Factored Form:</strong> $y = a(x - p)(x - q)$ $\implies$ $x$-intercepts at $x = p, q$.</div>
                </div>
                <p className="text-[11px] text-slate-600">
                  Discriminant $D = b^2 - 4ac = {quadCalculations.disc}$. Since $D {quadCalculations.disc > 0 ? '> 0' : quadCalculations.disc === 0 ? '= 0' : '< 0'}$, there are {quadCalculations.disc > 0 ? '2 distinct real solutions' : quadCalculations.disc === 0 ? 'exactly 1 double root' : '0 real solutions (complex roots)'}.
                </p>
              </>
            )}

            {activeTopic === 'growth' && (
              <>
                <p>
                  <strong>Fundamental Operational Difference:</strong>
                </p>
                <ul className="list-disc list-inside space-y-1 text-slate-600 text-xs">
                  <li><strong>Linear:</strong> Constant absolute change per unit time ($y = mx + b$). Slope $m = \Delta y / \Delta x$ is fixed regardless of value.</li>
                  <li><strong>Exponential:</strong> Constant percentage/multiplier change per unit time ($y = a \cdot b^x = a(1 \pm r)^x$). Change accumulates proportionally to current value.</li>
                  <li><strong>The Generalized Model:</strong> y = a · b^(t/k) handles intervals where change b requires k units of time (e.g. doubling every 3 hours $\implies$ y = a · 2^(t/3)).</li>
                </ul>
              </>
            )}
          </div>
        </div>

        {/* PANE 2: GRAPHICAL & VISUAL GEOMETRY FORM */}
        <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/90 space-y-3">
          <div className="flex items-center gap-2 text-slate-950 font-black text-xs">
            <Compass className="w-4 h-4 text-indigo-600" />
            <span>2. Graphical & Coordinate Geometry Principles (Desmos Strategy)</span>
          </div>

          <div className="text-xs text-slate-700 space-y-2 leading-relaxed">
            {activeTopic === 'systems' && (
              <>
                <p>
                  <strong>SAT Visual Graphing Rules:</strong>
                </p>
                <ul className="list-disc list-inside space-y-1 text-slate-600">
                  <li><strong>Geometric Meaning:</strong> Solutions to a system are the exact physical coordinate intersections of the two curves.</li>
                  <li><strong>Secant vs. Tangent:</strong> A line intersecting a parabola at 2 points is a <em>secant line</em>; touching at 1 point is a <em>tangent line</em> ($D = 0$).</li>
                  <li><strong>Digital SAT Shortcut:</strong> Type both equations into Desmos. Tap the gray dots at the intersection points to instantly view coordinates.</li>
                </ul>
              </>
            )}

            {activeTopic === 'quadratics' && (
              <>
                <p>
                  <strong>Symmetry & Extremum Visuals:</strong>
                </p>
                <ul className="list-disc list-inside space-y-1 text-slate-600">
                  <li><strong>Axis of Symmetry:</strong> The vertical line $x = -b / (2a)$ bisects the parabola. The vertex always lies directly on this axis.</li>
                  <li><strong>Midpoint Root Theorem:</strong> The vertex $x$-coordinate is the exact arithmetic mean of the two $x$-intercepts: $h = (p + q) / 2$.</li>
                  <li><strong>Extrema:</strong> For {'a > 0'}, the parabola opens up and $k$ is the absolute minimum value; for {'a < 0'}, $k$ is the absolute maximum value.</li>
                </ul>
              </>
            )}

            {activeTopic === 'growth' && (
              <>
                <p>
                  <strong>The Exponential Domination Theorem:</strong>
                </p>
                <ul className="list-disc list-inside space-y-1 text-slate-600">
                  <li><strong>Eventual Crossover:</strong> Any exponential growth function ({'b > 1'}) will <em>always</em> eventually surpass any linear function ({'m > 0'}), no matter how large the linear slope or initial intercept.</li>
                  <li><strong>Horizontal Asymptote:</strong> The exponential curve approaches $y = 0$ as $x \to -\infty$ (for growth) or as $x \to +\infty$ (for decay), never touching the $x$-axis.</li>
                </ul>
              </>
            )}
          </div>
        </div>
      </div>

      {/* COMPARATIVE VALUES TABLE (FOR GROWTH TOPIC) */}
      {activeTopic === 'growth' && (
        <div className="p-4 rounded-2xl bg-white border border-slate-200/90 space-y-2.5">
          <div className="flex items-center justify-between text-xs font-black text-slate-900">
            <span className="flex items-center gap-1.5">
              <Table className="w-4 h-4 text-indigo-600" />
              Step-by-Step Growth Values Table ($x = 0$ to $6$)
            </span>
            <span className="text-[10px] text-slate-500 font-bold">
              Comparing Linear ($y = {growthCalculations.linM}x + {growthCalculations.linB}$) vs Exponential ($y = {growthCalculations.expA} \cdot {growthCalculations.expB}^x$)
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-slate-700 font-black">
                  <th className="py-2 px-3">x (Step / Time)</th>
                  <th className="py-2 px-3 text-sky-700">Linear y₁ (Additive +{growthCalculations.linM})</th>
                  <th className="py-2 px-3 text-emerald-700">Exponential y₂ (Multiplier ×{growthCalculations.expB})</th>
                  <th className="py-2 px-3 text-slate-900">Difference (y₂ - y₁)</th>
                  <th className="py-2 px-3 text-slate-600">Dominant Function</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-mono">
                {growthCalculations.sampleTable.map((row) => (
                  <tr key={row.x} className="hover:bg-slate-50/80">
                    <td className="py-2 px-3 font-bold text-slate-900">x = {row.x}</td>
                    <td className="py-2 px-3 text-sky-600 font-bold">{row.yLin}</td>
                    <td className="py-2 px-3 text-emerald-600 font-bold">{row.yExp}</td>
                    <td className={`py-2 px-3 font-bold ${row.diff >= 0 ? 'text-emerald-700' : 'text-slate-500'}`}>
                      {row.diff >= 0 ? `+${row.diff}` : row.diff}
                    </td>
                    <td className="py-2 px-3 font-sans text-[11px] font-bold">
                      {row.yExp > row.yLin ? (
                        <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                          ⚡ Exponential Overtakes
                        </span>
                      ) : (
                        <span className="text-sky-700 bg-sky-50 px-2 py-0.5 rounded-md border border-sky-200">
                          Linear Higher
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};
