import React from 'react';
import { formatMathText } from '../../utils/mathFormatter';
import {
  MathDiagramSpec,
  MathDiagramCurve,
  MathDiagramPoint,
  MathTextAnnotation,
  MathAngleArc
} from '../../data/satMathConcepts';

interface SatMathGraphProps {
  diagram: MathDiagramSpec;
  className?: string;
  isSubmitted?: boolean;
}

interface SinglePlotProps {
  curves: MathDiagramCurve[];
  xRange?: [number, number];
  yRange?: [number, number];
  xStep?: number;
  yStep?: number;
  hideAxes?: boolean;
  hideGrid?: boolean;
  hideTicks?: boolean;
  xAxisLabel?: string;
  yAxisLabel?: string;
  xTicksLabels?: { [x: number]: string };
  yTicksLabels?: { [y: number]: string };
  textAnnotations?: MathTextAnnotation[];
  angleArcs?: MathAngleArc[];
  width?: number;
  height?: number;
  label?: string;
  caption?: string;
  isSubmitted?: boolean;
}

// Helper to evaluate arbitrary math expressions safely with full math support
const evaluateMathExpr = (rawExpr: string, x: number): number | null => {
  try {
    let expr = rawExpr.trim();
    
    // Strip leading function identifiers like f(x) = , g(x) = , y = , P(t) = , P = , A = , V = 
    expr = expr.replace(/^[a-zA-Z]\s*\([a-zA-Z0-9_\s]*\)\s*=\s*/, '');
    expr = expr.replace(/^[a-zA-Z]\s*=\s*/, '');

    // Normalize unicode symbols
    expr = expr.replace(/[·×]/g, '*');
    expr = expr.replace(/[−–—]/g, '-');
    expr = expr.replace(/²/g, '**2');
    expr = expr.replace(/³/g, '**3');
    expr = expr.replace(/⁴/g, '**4');
    expr = expr.replace(/ˣ/g, '**x');
    expr = expr.replace(/ᵗ/g, '**t');

    // Replace independent variable names like 't', 'n' with 'x' (case insensitive when standalone)
    // Only replace standalone variable t or n not part of Math functions (like sqrt, etc.)
    expr = expr.replace(/\b[tTnN]\b/g, 'x');

    // Normalize sqrt notation
    expr = expr.replace(/\\sqrt\{([^}]+)\}/g, 'Math.sqrt($1)');
    expr = expr.replace(/√\(([^)]+)\)/g, 'Math.sqrt($1)');
    expr = expr.replace(/√([0-9a-zA-Z_]+)/g, 'Math.sqrt($1)');
    expr = expr.replace(/sqrt\(/g, 'Math.sqrt(');
    
    // Normalize absolute values |expr|
    expr = expr.replace(/\|([^|]+)\|/g, 'Math.abs($1)');
    expr = expr.replace(/abs\(/g, 'Math.abs(');
    
    // Normalize powers e.g. x^2 -> x**2 or (1.04)^t -> (1.04)**x
    expr = expr.replace(/\^/g, '**');

    // Normalize implicit multiplications e.g. 5000(1.04) -> 5000*(1.04), 3x -> 3*x, 4(x) -> 4*(x), 3(2) -> 3*(2)
    // Careful not to break numbers or operators
    expr = expr.replace(/(\d+(?:\.\d+)?)\s*([a-zA-Z\(])/g, '$1*$2');
    expr = expr.replace(/([a-zA-Z\)])\s*(\()/g, '$1*$2');
    expr = expr.replace(/(\))\s*([a-zA-Z0-9])/g, '$1*$2');

    // Replace constant names if any (e.g. e, pi)
    expr = expr.replace(/\bpi\b/gi, 'Math.PI');
    expr = expr.replace(/\be\b/g, 'Math.E');

    // Create safe evaluation function
    // eslint-disable-next-line @typescript-eslint/no-implied-eval
    const fn = new Function('x', 'Math', `try { with(Math) { return (${expr}); } } catch(e) { return null; }`);
    const res = fn(x, Math);
    if (typeof res === 'number' && !isNaN(res) && isFinite(res)) {
      return res;
    }
    return null;
  } catch {
    return null;
  }
};

// Fit exact exponential y = a * b^x + k or y = a * b^x from points
const solveExponentialFromPoints = (pts: [number, number][]): ((x: number) => number) | null => {
  if (!pts || pts.length < 2) return null;

  // If 3 points are available with equal dx, try analytical a*b^x + k
  if (pts.length >= 3) {
    // Sort points by x
    const sorted = [...pts].sort((a, b) => a[0] - b[0]);
    const p1 = sorted[0];
    const p2 = sorted[1];
    const p3 = sorted[2];

    const dx1 = p2[0] - p1[0];
    const dx2 = p3[0] - p2[0];

    if (Math.abs(dx1 - dx2) < 0.001 && dx1 > 0) {
      const dy1 = p2[1] - p1[1];
      const dy2 = p3[1] - p2[1];

      if (dy1 !== 0 && (dy2 / dy1) > 0) {
        const b = Math.pow(dy2 / dy1, 1 / dx1);
        if (b > 0 && Math.abs(b - 1) > 0.001) {
          const a = dy1 / (Math.pow(b, p2[0]) - Math.pow(b, p1[0]));
          const k = p1[1] - a * Math.pow(b, p1[0]);
          return (x: number) => a * Math.pow(b, x) + k;
        }
      }
    }
  }

  // Two-point or log-linear fit for y = a * b^x
  const p1 = pts[0];
  const p2 = pts[1];
  const [x1, y1] = p1;
  const [x2, y2] = p2;

  if (x1 !== x2 && y1 > 0 && y2 > 0) {
    const b = Math.pow(y2 / y1, 1 / (x2 - x1));
    const a = y1 / Math.pow(b, x1);
    return (x: number) => a * Math.pow(b, x);
  }

  return null;
};

// Fit exact quadratic y = ax^2 + bx + c from 3 points
const solveQuadraticFromPoints = (pts: [number, number][]): ((x: number) => number) | null => {
  if (pts.length < 3) return null;
  const [p1, p2, p3] = pts;
  const [x1, y1] = p1;
  const [x2, y2] = p2;
  const [x3, y3] = p3;

  const denom = (x1 - x2) * (x1 - x3) * (x2 - x3);
  if (Math.abs(denom) < 1e-8) return null;

  const a = (x3 * (y2 - y1) + x2 * (y1 - y3) + x1 * (y3 - y2)) / denom;
  const b = (x3 * x3 * (y1 - y2) + x2 * x2 * (y3 - y1) + x1 * x1 * (y2 - y3)) / denom;
  const c = (x2 * x3 * (x2 - x3) * y1 + x3 * x1 * (x3 - x1) * y2 + x1 * x2 * (x1 - x2) * y3) / denom;

  return (x: number) => a * x * x + b * x + c;
};

// Fit line y = mx + b from 2 points
const solveLineFromPoints = (pts: [number, number][]): ((x: number) => number) | null => {
  if (pts.length < 2) return null;
  const [p1, p2] = pts;
  const [x1, y1] = p1;
  const [x2, y2] = p2;
  const dx = x2 - x1;
  if (Math.abs(dx) < 1e-8) return null;
  const m = (y2 - y1) / dx;
  const b = y1 - m * x1;
  return (x: number) => m * x + b;
};

const getSmoothSplinePath = (pts: [number, number][]): string => {
  if (!pts || pts.length === 0) return '';
  if (pts.length === 1) return `M ${pts[0][0]} ${pts[0][1]}`;
  if (pts.length === 2) return `M ${pts[0][0]} ${pts[0][1]} L ${pts[1][0]} ${pts[1][1]}`;

  let path = `M ${pts[0][0].toFixed(2)} ${pts[0][1].toFixed(2)}`;
  const tension = 0.25;

  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = i === 0 ? pts[i] : pts[i - 1];
    const p1 = pts[i];
    const p2 = pts[i + 1];
    const p3 = i + 2 < pts.length ? pts[i + 2] : pts[i + 1];

    const cp1x = p1[0] + (p2[0] - p0[0]) * tension;
    const cp1y = p1[1] + (p2[1] - p0[1]) * tension;
    const cp2x = p2[0] - (p3[0] - p1[0]) * tension;
    const cp2y = p2[1] - (p3[1] - p1[1]) * tension;

    path += ` C ${cp1x.toFixed(2)} ${cp1y.toFixed(2)}, ${cp2x.toFixed(2)} ${cp2y.toFixed(2)}, ${p2[0].toFixed(2)} ${p2[1].toFixed(2)}`;
  }
  return path;
};

export const SinglePlot: React.FC<SinglePlotProps> = ({
  curves = [],
  xRange = [-5, 5],
  yRange = [-5, 5],
  xStep = 1,
  yStep = 1,
  hideAxes = false,
  hideGrid = false,
  hideTicks = false,
  xAxisLabel,
  yAxisLabel,
  xTicksLabels,
  yTicksLabels,
  textAnnotations = [],
  angleArcs = [],
  width = 460,
  height = 400,
  label,
  caption,
  isSubmitted
}) => {
  const margin = 56;
  const plotWidth = width - 2 * margin;
  const plotHeight = height - 2 * margin;

  const [xMinRaw, xMaxRaw] = xRange;
  const [yMinRaw, yMaxRaw] = yRange;

  // Equalize pixel scale (pixels per coordinate unit) for geometry/circles/equal-span diagrams so shapes are never stretched
  const xSpanRaw = Math.abs(xMaxRaw - xMinRaw);
  const ySpanRaw = Math.abs(yMaxRaw - yMinRaw);
  const shouldEqualizeAspect = hideAxes || Math.abs(xSpanRaw - ySpanRaw) < 0.01;

  let xMin = xMinRaw;
  let xMax = xMaxRaw;
  let yMin = yMinRaw;
  let yMax = yMaxRaw;

  if (shouldEqualizeAspect && xSpanRaw > 0 && ySpanRaw > 0 && plotWidth > 0 && plotHeight > 0) {
    const cx = (xMinRaw + xMaxRaw) / 2;
    const cy = (yMinRaw + yMaxRaw) / 2;
    const pxPerUnitX = plotWidth / xSpanRaw;
    const pxPerUnitY = plotHeight / ySpanRaw;
    const pxPerUnit = Math.min(pxPerUnitX, pxPerUnitY);
    const targetXSpan = plotWidth / pxPerUnit;
    const targetYSpan = plotHeight / pxPerUnit;

    xMin = cx - targetXSpan / 2;
    xMax = cx + targetXSpan / 2;
    yMin = cy - targetYSpan / 2;
    yMax = cy + targetYSpan / 2;
  }

  const clipId = React.useId().replace(/:/g, "");

  const toSvgX = (x: number) => margin + ((x - xMin) / (xMax - xMin)) * plotWidth;
  const toSvgY = (y: number) => margin + ((yMax - y) / (yMax - yMin)) * plotHeight;

  // Calculate smart readable steps to prevent crowded / overlapping axis ticks
  const getSmartStep = (min: number, max: number, userStep?: number): number => {
    const span = Math.abs(max - min);
    if (span === 0) return 1;

    // If user provided a step that yields 2 to 12 ticks, respect it
    if (userStep && userStep > 0) {
      const ticksCount = span / userStep;
      if (ticksCount >= 2 && ticksCount <= 12) {
        return userStep;
      }
    }

    // Target ~5 to 8 intervals
    const rawStep = span / 6;
    const power = Math.pow(10, Math.floor(Math.log10(rawStep)));
    const norm = rawStep / power;

    let mult = 1;
    if (norm >= 7.5) mult = 10;
    else if (norm >= 3.5) mult = 5;
    else if (norm >= 1.5) mult = 2;
    else mult = 1;

    const niceStep = mult * power;
    return niceStep > 0 ? Number(niceStep.toFixed(4)) : 1;
  };

  const effectiveXStep = getSmartStep(xMin, xMax, xStep);
  const effectiveYStep = getSmartStep(yMin, yMax, yStep);

  // Generate grid ticks
  const xTicks: number[] = [];
  if (!hideAxes && !hideGrid) {
    const startX = Math.ceil(xMin / effectiveXStep) * effectiveXStep;
    for (let x = startX; x <= xMax + 0.0001; x += effectiveXStep) {
      if (Math.abs(x) > 0.0001) xTicks.push(Number(x.toFixed(2)));
    }
  }

  const yTicks: number[] = [];
  if (!hideAxes && !hideGrid) {
    const startY = Math.ceil(yMin / effectiveYStep) * effectiveYStep;
    for (let y = startY; y <= yMax + 0.0001; y += effectiveYStep) {
      if (Math.abs(y) >= 0) yTicks.push(Number(y.toFixed(2)));
    }
  }

  const originX = Math.max(margin, Math.min(width - margin, toSvgX(0)));
  const originY = Math.max(margin, Math.min(height - margin, toSvgY(0)));

  // Determine Y-axis position: draw on left plot margin for bar charts / positive graphs to prevent overlapping bars
  const yAxisX = (xMin < 0 && xMax > 0 && Math.abs(xMin) > 1.5) ? originX : margin;

  // Helper to evaluate curve path string
  const getCurvePath = (curve: MathDiagramCurve): string => {
    if (curve.type === 'circle' || curve.fnType === 'circle' || curve.circle) {
      const cx = curve.circle?.cx ?? curve.points?.[0]?.[0] ?? 0;
      const cy = curve.circle?.cy ?? curve.points?.[0]?.[1] ?? 0;
      const r = curve.circle?.r ?? (curve as any).radius ?? 1;
      const steps = 120;
      let path = '';
      for (let i = 0; i <= steps; i++) {
        const angle = (i / steps) * 2 * Math.PI;
        const x = cx + r * Math.cos(angle);
        const y = cy + r * Math.sin(angle);
        const sx = toSvgX(x).toFixed(2);
        const sy = toSvgY(y).toFixed(2);
        path += `${i === 0 ? 'M' : 'L'} ${sx} ${sy}`;
      }
      return path + ' Z';
    }

    if (curve.type === 'ellipse' || curve.fnType === 'ellipse' || curve.ellipse) {
      const cx = curve.ellipse?.cx ?? curve.points?.[0]?.[0] ?? 0;
      const cy = curve.ellipse?.cy ?? curve.points?.[0]?.[1] ?? 0;
      const rx = curve.ellipse?.rx ?? (curve as any).radiusX ?? 1;
      const ry = curve.ellipse?.ry ?? (curve as any).radiusY ?? 0.5;
      const steps = 120;
      let path = '';
      for (let i = 0; i <= steps; i++) {
        const angle = (i / steps) * 2 * Math.PI;
        const x = cx + rx * Math.cos(angle);
        const y = cy + ry * Math.sin(angle);
        const sx = toSvgX(x).toFixed(2);
        const sy = toSvgY(y).toFixed(2);
        path += `${i === 0 ? 'M' : 'L'} ${sx} ${sy}`;
      }
      return path + ' Z';
    }

    if (curve.type === 'arc' || curve.arc) {
      const cx = curve.arc?.cx ?? curve.points?.[0]?.[0] ?? 0;
      const cy = curve.arc?.cy ?? curve.points?.[0]?.[1] ?? 0;
      const r = curve.arc?.r ?? (curve as any).radius ?? 1;
      const startDeg = curve.arc?.startAngle ?? 0;
      const endDeg = curve.arc?.endAngle ?? 180;
      const steps = 90;
      let path = '';
      for (let i = 0; i <= steps; i++) {
        const deg = startDeg + (i / steps) * (endDeg - startDeg);
        const rad = (deg * Math.PI) / 180;
        const x = cx + r * Math.cos(rad);
        const y = cy + r * Math.sin(rad);
        const sx = toSvgX(x).toFixed(2);
        const sy = toSvgY(y).toFixed(2);
        path += `${i === 0 ? 'M' : 'L'} ${sx} ${sy}`;
      }
      return path;
    }

    if (curve.type === 'vertical_line' && curve.xIntercept !== undefined) {
      const xVal = curve.xIntercept;
      return `M ${toSvgX(xVal).toFixed(2)} ${toSvgY(yMax).toFixed(2)} L ${toSvgX(xVal).toFixed(2)} ${toSvgY(yMin).toFixed(2)}`;
    }

    // 1. Analytical expression evaluation
    const rawExpr = curve.expression || (curve.fnType === 'exponential' && curve.label ? curve.label : undefined);
    if (rawExpr) {
      const steps = 300;
      const dx = (xMax - xMin) / steps;
      let path = '';
      let isDrawing = false;
      let prevY: number | null = null;
      const ySpan = Math.abs(yMax - yMin);

      for (let i = 0; i <= steps; i++) {
        const x = xMin + i * dx;
        const y = evaluateMathExpr(rawExpr, x);

        if (y !== null && !isNaN(y) && isFinite(y) && y >= yMin - 20 && y <= yMax + 20) {
          // Detect vertical asymptote jump
          const jump = prevY !== null ? Math.abs(y - prevY) : 0;
          const isAsymptoteJump = jump > ySpan * 0.75;

          const sx = toSvgX(x).toFixed(2);
          const sy = toSvgY(y).toFixed(2);

          if (!isDrawing || isAsymptoteJump) {
            path += ` M ${sx} ${sy}`;
            isDrawing = true;
          } else {
            path += ` L ${sx} ${sy}`;
          }
          prevY = y;
        } else {
          isDrawing = false;
          prevY = null;
        }
      }
      if (path.trim().length > 0) return path.trim();
    }

    // 2. Exponential curve with points: solve exact a * b^x + k and sample densely
    if (curve.fnType === 'exponential' && curve.points && curve.points.length >= 2) {
      const expFn = solveExponentialFromPoints(curve.points);
      if (expFn) {
        const steps = 300;
        const dx = (xMax - xMin) / steps;
        let path = '';
        let isDrawing = false;

        for (let i = 0; i <= steps; i++) {
          const x = xMin + i * dx;
          const y = expFn(x);
          if (y >= yMin - 15 && y <= yMax + 15 && !isNaN(y) && isFinite(y)) {
            const sx = toSvgX(x).toFixed(2);
            const sy = toSvgY(y).toFixed(2);
            if (!isDrawing) {
              path += ` M ${sx} ${sy}`;
              isDrawing = true;
            } else {
              path += ` L ${sx} ${sy}`;
            }
          } else {
            isDrawing = false;
          }
        }
        if (path.trim().length > 0) return path.trim();
      }
    }

    // 3. Parabola with 3+ points: fit exact quadratic y = ax^2 + bx + c and sample densely
    if (curve.fnType === 'parabola' && curve.points && curve.points.length >= 3) {
      const qFn = solveQuadraticFromPoints(curve.points);
      if (qFn) {
        const steps = 250;
        const dx = (xMax - xMin) / steps;
        let path = '';
        let isDrawing = false;

        for (let i = 0; i <= steps; i++) {
          const x = xMin + i * dx;
          const y = qFn(x);
          if (y >= yMin - 15 && y <= yMax + 15) {
            const sx = toSvgX(x).toFixed(2);
            const sy = toSvgY(y).toFixed(2);
            if (!isDrawing) {
              path += ` M ${sx} ${sy}`;
              isDrawing = true;
            } else {
              path += ` L ${sx} ${sy}`;
            }
          } else {
            isDrawing = false;
          }
        }
        if (path.trim().length > 0) return path.trim();
      }
    }

    // 4. Straight line with exactly 2 points: extend smoothly across visible domain ONLY if fnType is 'line' (infinite analytical line)
    if (curve.fnType === 'line' && curve.points && curve.points.length === 2) {
      const lineFn = solveLineFromPoints(curve.points);
      if (lineFn) {
        const x1 = xMin;
        const y1 = lineFn(x1);
        const x2 = xMax;
        const y2 = lineFn(x2);
        return `M ${toSvgX(x1).toFixed(2)} ${toSvgY(y1).toFixed(2)} L ${toSvgX(x2).toFixed(2)} ${toSvgY(y2).toFixed(2)}`;
      }
    }

    // 5. Multi-point piecewise line segments (for discrete coordinate tables / polygons)
    if ((curve.type === 'line' || curve.fnType === 'line') && curve.points && curve.points.length > 2) {
      const svgPts: [number, number][] = curve.points.map(p => [toSvgX(p[0]), toSvgY(p[1])]);
      return svgPts
        .map((p, idx) => `${idx === 0 ? 'M' : 'L'} ${p[0].toFixed(2)} ${p[1].toFixed(2)}`)
        .join(' ');
    }

    // 5. Discrete points only (no connecting line)
    if (curve.type === 'points') {
      return '';
    }

    // 6. Points array with smooth spline interpolation for general functions and curves
    if (curve.points && curve.points.length > 0) {
      const svgPts: [number, number][] = curve.points.map(p => [toSvgX(p[0]), toSvgY(p[1])]);
      if (curve.type !== 'line' && curve.fnType !== 'line') {
        return getSmoothSplinePath(svgPts);
      }
      return svgPts
        .map((p, idx) => `${idx === 0 ? 'M' : 'L'} ${p[0].toFixed(2)} ${p[1].toFixed(2)}`)
        .join(' ');
    }

    return '';
  };

  return (
    <div className="flex flex-col items-center justify-center p-4 bg-white rounded-2xl border border-slate-200/90 shadow-sm w-full max-w-full overflow-hidden box-border">
      {label && (
        <div className="w-full text-center pb-2 text-xs font-black text-slate-800 tracking-tight flex items-center justify-center gap-1">
          <span className="px-3 py-1 rounded-md bg-slate-100 border border-slate-200 text-[12px] font-black">
            {label}
          </span>
        </div>
      )}

      <div className="w-full relative flex items-center justify-center overflow-visible">
        <svg
          viewBox={`0 0 ${width} ${height}`}
          className="w-full max-w-full h-auto select-none overflow-visible"
          style={{ maxHeight: '400px' }}
        >
          <defs>
            <clipPath id={`clip-${clipId}`}>
              <rect x={margin} y={margin} width={plotWidth} height={plotHeight} />
            </clipPath>
            <pattern id={`grid-${label || 'main'}`} width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#f1f5f9" strokeWidth="0.8" />
            </pattern>
            <marker
              id="arrowhead"
              markerWidth="6"
              markerHeight="6"
              refX="4"
              refY="3"
              orient="auto"
            >
              <polygon points="0 0, 6 3, 0 6" fill="#0f172a" />
            </marker>
            <marker
              id="arrowhead-blue"
              markerWidth="6"
              markerHeight="6"
              refX="4"
              refY="3"
              orient="auto"
            >
              <polygon points="0 0, 6 3, 0 6" fill="#2563eb" />
            </marker>
            <marker
              id="arrowhead-amber"
              markerWidth="6"
              markerHeight="6"
              refX="4"
              refY="3"
              orient="auto"
            >
              <polygon points="0 0, 6 3, 0 6" fill="#d97706" />
            </marker>
          </defs>

          {/* Background Grid */}
          <rect
            x={margin}
            y={margin}
            width={plotWidth}
            height={plotHeight}
            fill={hideAxes ? '#ffffff' : '#fafafa'}
            stroke="#e2e8f0"
            strokeWidth="1"
          />

          {/* Minor Grid Lines */}
          {!hideAxes && !hideGrid && xTicks.map((x) => (
            <line
              key={`x-grid-${x}`}
              x1={toSvgX(x)}
              y1={margin}
              x2={toSvgX(x)}
              y2={height - margin}
              stroke="#e2e8f0"
              strokeWidth="0.75"
            />
          ))}

          {!hideAxes && !hideGrid && yTicks.map((y) => (
            <line
              key={`y-grid-${y}`}
              x1={margin}
              y1={toSvgY(y)}
              x2={width - margin}
              y2={toSvgY(y)}
              stroke="#e2e8f0"
              strokeWidth="0.75"
            />
          ))}

          {/* Shading for Inequalities */}
          <g clipPath={`url(#clip-${clipId})`}>
          {curves.map((curve, idx) => {
            const shadeMode = curve.shade || curve.shadeRegion;
            if (shadeMode && shadeMode !== 'none') {
              const pathData = getCurvePath(curve);
              if (!pathData) return null;

              const shadeFill = curve.shadeColor || 'rgba(59, 130, 246, 0.18)';

              if (shadeMode === 'above') {
                const pts = pathData.replace(/[ML]/g, '').trim().split(/\s+/);
                const firstPtX = pts[0];
                const lastPtX = pts[pts.length - 2];
                const shadePath = `${pathData} L ${lastPtX} ${margin} L ${firstPtX} ${margin} Z`;
                return <path key={`shade-${idx}`} d={shadePath} fill={shadeFill} />;
              } else if (shadeMode === 'below') {
                const pts = pathData.replace(/[ML]/g, '').trim().split(/\s+/);
                const firstPtX = pts[0];
                const lastPtX = pts[pts.length - 2];
                // For histograms where originY might be bottom instead of full height
                const shadePath = `${pathData} L ${lastPtX} ${originY} L ${firstPtX} ${originY} Z`;
                return <path key={`shade-${idx}`} d={shadePath} fill={shadeFill} />;
              } else if (shadeMode === 'left') {
                const xVal = curve.xIntercept !== undefined ? curve.xIntercept : curve.points?.[0]?.[0] ?? 0;
                const xPos = toSvgX(xVal);
                return (
                  <rect
                    key={`shade-${idx}`}
                    x={margin}
                    y={margin}
                    width={Math.max(0, xPos - margin)}
                    height={plotHeight}
                    fill={shadeFill}
                  />
                );
              } else if (shadeMode === 'right') {
                const xVal = curve.xIntercept !== undefined ? curve.xIntercept : curve.points?.[0]?.[0] ?? 0;
                const xPos = toSvgX(xVal);
                return (
                  <rect
                    key={`shade-${idx}`}
                    x={xPos}
                    y={margin}
                    width={Math.max(0, width - margin - xPos)}
                    height={plotHeight}
                    fill={shadeFill}
                  />
                );
              } else if (shadeMode === 'region' || shadeMode === 'between') {
                return (
                  <path
                    key={`shade-${idx}`}
                    d={`${pathData} Z`}
                    fill={shadeFill}
                    fillRule="evenodd"
                  />
                );
              }
            }
            return null;
          })}

          </g>

          {/* Histogram Numerical Overlays */}
          {curves.map((curve, idx) => {
            if (curve.shade === 'below' || curve.shadeRegion === 'below') {
              if (curve.points && curve.points.length === 2 && curve.points[0][1] === curve.points[1][1] && curve.points[0][1] > 0) {
                const cx = (toSvgX(curve.points[0][0]) + toSvgX(curve.points[1][0])) / 2;
                const cy = toSvgY(curve.points[0][1]) - 6;
                return (
                  <text
                    key={`hist-val-${idx}`}
                    x={cx}
                    y={cy}
                    fontSize="10"
                    fontWeight="800"
                    fill="#334155"
                    textAnchor="middle"
                  >
                    {curve.points[0][1]}
                  </text>
                );
              }
            }
            return null;
          })}

          {/* X-Axis and Y-Axis (only if hideAxes is false) */}
          {!hideAxes && (
            <>
              <line
                x1={margin - 8}
                y1={originY}
                x2={width - margin + 12}
                y2={originY}
                stroke="#0f172a"
                strokeWidth="1.5"
                markerEnd="url(#arrowhead)"
              />
              <line
                x1={yAxisX}
                y1={height - margin + 8}
                x2={yAxisX}
                y2={margin - 12}
                stroke="#0f172a"
                strokeWidth="1.5"
                markerEnd="url(#arrowhead)"
              />

              {/* Axis Labels */}
              {xAxisLabel && xAxisLabel.length > 3 ? (
                <g>
                  <text
                    x={margin + plotWidth / 2}
                    y={height - 6}
                    fontSize="10"
                    fontWeight="800"
                    fill="#ffffff"
                    stroke="#ffffff"
                    strokeWidth="3"
                    strokeLinejoin="round"
                    textAnchor="middle"
                    className="select-none"
                  >
                    {xAxisLabel}
                  </text>
                  <text
                    x={margin + plotWidth / 2}
                    y={height - 6}
                    fontSize="10"
                    fontWeight="800"
                    fill="#0f172a"
                    textAnchor="middle"
                    className="select-none"
                  >
                    {xAxisLabel}
                  </text>
                </g>
              ) : (
                <text
                  x={width - margin + 12}
                  y={originY + 14}
                  fontSize="10"
                  fontWeight="800"
                  fill="#0f172a"
                  textAnchor="start"
                >
                  {xAxisLabel || 'x'}
                </text>
              )}

              {yAxisLabel && yAxisLabel.length > 3 ? (
                <g>
                  <text
                    x={margin}
                    y={16}
                    fontSize="10"
                    fontWeight="800"
                    fill="#ffffff"
                    stroke="#ffffff"
                    strokeWidth="3"
                    strokeLinejoin="round"
                    textAnchor="start"
                    className="select-none"
                  >
                    {yAxisLabel}
                  </text>
                  <text
                    x={margin}
                    y={16}
                    fontSize="10"
                    fontWeight="800"
                    fill="#0f172a"
                    textAnchor="start"
                    className="select-none"
                  >
                    {yAxisLabel}
                  </text>
                </g>
              ) : (
                <text
                  x={yAxisX}
                  y={margin - 12}
                  fontSize="10"
                  fontWeight="800"
                  fill="#0f172a"
                  textAnchor="middle"
                >
                  {yAxisLabel || 'y'}
                </text>
              )}

              {/* Tick numbers on X and Y */}
              {!hideTicks && xTicks.map((x) => {
                const svgX = toSvgX(x);
                const displayLabel = xTicksLabels?.[x] !== undefined ? xTicksLabels[x] : (xTicksLabels?.[Math.round(x)] !== undefined ? xTicksLabels[Math.round(x)] : String(x));
                return (
                  <g key={`xtick-${x}`}>
                    <line
                      x1={svgX}
                      y1={originY - 3}
                      x2={svgX}
                      y2={originY + 3}
                      stroke="#0f172a"
                      strokeWidth="1.25"
                    />
                    {(x !== 0 || xTicksLabels?.[x]) && (
                      <>
                        <text
                          x={svgX}
                          y={originY + 15}
                          fontSize="9"
                          fontWeight="800"
                          fill="#ffffff"
                          stroke="#ffffff"
                          strokeWidth="3"
                          strokeLinejoin="round"
                          textAnchor="middle"
                          className="select-none"
                        >
                          {displayLabel}
                        </text>
                        <text
                          x={svgX}
                          y={originY + 15}
                          fontSize="9"
                          fontWeight="800"
                          fill="#334155"
                          textAnchor="middle"
                          className="select-none"
                        >
                          {displayLabel}
                        </text>
                      </>
                    )}
                  </g>
                );
              })}

              {!hideTicks && yTicks.map((y) => {
                const svgY = toSvgY(y);
                const textX = yAxisX - 7;
                const textAnchor = "end";
                const displayLabel = yTicksLabels?.[y] !== undefined ? yTicksLabels[y] : (yTicksLabels?.[Math.round(y)] !== undefined ? yTicksLabels[Math.round(y)] : String(y));

                return (
                  <g key={`ytick-${y}`}>
                    <line
                      x1={yAxisX - 3}
                      y1={svgY}
                      x2={yAxisX + 3}
                      y2={svgY}
                      stroke="#0f172a"
                      strokeWidth="1.25"
                    />
                    <text
                      x={textX}
                      y={svgY + 3.5}
                      fontSize="9"
                      fontWeight="800"
                      fill="#ffffff"
                      stroke="#ffffff"
                      strokeWidth="3"
                      strokeLinejoin="round"
                      textAnchor={textAnchor}
                      className="select-none"
                    >
                      {displayLabel}
                    </text>
                    <text
                      x={textX}
                      y={svgY + 3.5}
                      fontSize="9"
                      fontWeight="800"
                      fill="#334155"
                      textAnchor={textAnchor}
                      className="select-none"
                    >
                      {displayLabel}
                    </text>
                  </g>
                );
              })}
              
              {/* Origin Label removed for clarity */}
            </>
          )}

        {/* Curves */}
        <g clipPath={`url(#clip-${clipId})`}>
        {curves.map((curve, idx) => {
          // Handle discrete points
          if (curve.type === 'points' && curve.points && curve.points.length > 0) {
            const ptColor = curve.color || '#2563eb';
            return (
              <g key={`pts-${idx}`}>
                {curve.points.map((pt, pIdx) => {
                  const px = toSvgX(pt[0]);
                  const py = toSvgY(pt[1]);
                  return (
                    <circle
                      key={`pt-dot-${pIdx}`}
                      cx={px}
                      cy={py}
                      r="4.5"
                      fill={ptColor}
                      stroke="#ffffff"
                      strokeWidth="1.5"
                      className="drop-shadow-xs"
                    />
                  );
                })}
              </g>
            );
          }

          const pathD = getCurvePath(curve);
          if (!pathD) return null;

          const strokeColor = curve.color || '#0f172a';
          const isDashed = curve.style === 'dashed';
          const isDotted = curve.style === 'dotted';
          const strokeWidth = isDashed ? 1.85 : isDotted ? 2.0 : 2.5;
          const strokeDash = isDashed ? '6,4' : isDotted ? '2,3' : undefined;

          return (
            <g key={`curve-${idx}`}>
              {/* White halo underlay for dashed/dotted curves to mask underlying axes/grid */}
              {(isDashed || isDotted) && (
                <path
                  d={pathD}
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth={strokeWidth + 4.0}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              )}
              {/* Subtle Painterly Glow/Underlay for solid curves */}
              {!isDashed && !isDotted && (
                <path
                  d={pathD}
                  fill="none"
                  stroke={strokeColor}
                  strokeWidth="5.5"
                  strokeOpacity="0.15"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              )}
              {/* Main Crisp Vector Stroke */}
              <path
                d={pathD}
                fill="none"
                stroke={strokeColor}
                strokeWidth={strokeWidth}
                strokeDasharray={strokeDash}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          );
        })}
        </g>

        {/* Curve Labels (rendered outside clipPath so they don't get cut) */}
        {curves.map((curve, idx) => {
          if (!curve.label || !curve.labelPosition) return null;
          const strokeColor = curve.color || '#0f172a';
          return (
            <g key={`curve-label-${idx}`}>
              <text
                x={toSvgX(curve.labelPosition.x)}
                y={toSvgY(curve.labelPosition.y)}
                fontSize="9.5"
                fontWeight="bold"
                stroke="#ffffff"
                strokeWidth="3"
                strokeLinejoin="round"
                className="select-none"
              >
                {curve.label}
              </text>
              <text
                x={toSvgX(curve.labelPosition.x)}
                y={toSvgY(curve.labelPosition.y)}
                fontSize="9.5"
                fontWeight="bold"
                fill={strokeColor}
                className="drop-shadow-xs select-none"
              >
                {curve.label}
              </text>
            </g>
          );
        })}

        {/* Highlighted Points & Labels */}
        {curves.map((curve) =>
          curve.highlightPoints?.map((pt, pIdx) => {
            const px = toSvgX(pt.x);
            const py = toSvgY(pt.y);
            const ptColor = pt.color || '#2563eb';

            const labelStr = pt.label || '';
            const isSpoiler = (
              labelStr.toLowerCase().includes('int') ||
              labelStr.toLowerCase().includes('root') ||
              labelStr.toLowerCase().includes('zero') ||
              labelStr.toLowerCase().includes('vertex') ||
              labelStr.toLowerCase().includes('max') ||
              labelStr.toLowerCase().includes('min') ||
              labelStr.toLowerCase().includes('apex') ||
              labelStr.toLowerCase().includes('impact') ||
              labelStr.toLowerCase().includes('tangent') ||
              labelStr.toLowerCase().includes('hole') ||
              labelStr.toLowerCase().includes('answer') ||
              labelStr.toLowerCase().includes('solution') ||
              labelStr.toLowerCase().includes('asymptote') ||
              labelStr.toLowerCase().includes('f(') ||
              labelStr.toLowerCase().includes('g(') ||
              labelStr.toLowerCase().includes('h(') ||
              labelStr.toLowerCase().includes('p =') ||
              labelStr.toLowerCase().includes('q =') ||
              labelStr.toLowerCase().includes('k =') ||
              labelStr.toLowerCase().includes('c =') ||
              labelStr.toLowerCase().includes('b =') ||
              labelStr.toLowerCase().includes('a =')
            );

            // If this is an unsubmitted question (isSubmitted === false) and the point is an answer spoiler, hide it so student solves it from graph
            if (isSubmitted === false && isSpoiler) {
              return null;
            }

            const badgeWidth = labelStr.length * 6 + 10;
            const badgeHeight = 16;
            const badgeX = (px + badgeWidth + 12 > width - margin) ? (px - badgeWidth - 8) : (px + 8);
            const badgeY = (py - 18 < margin) ? (py + 8) : (py - 18);

            return (
              <g key={`pt-${pIdx}`}>
                <circle cx={px} cy={py} r="5" fill={ptColor} stroke="#ffffff" strokeWidth="2" className="drop-shadow-xs" />
                {pt.label && (
                  <g>
                    <rect
                      x={badgeX}
                      y={badgeY}
                      width={badgeWidth}
                      height={badgeHeight}
                      rx="4"
                      fill="#0f172a"
                      fillOpacity="0.9"
                      stroke="#334155"
                      strokeWidth="0.75"
                    />
                    <text
                      x={badgeX + badgeWidth / 2}
                      y={badgeY + 11.5}
                      fontSize="8.5"
                      fontWeight="bold"
                      fill="#ffffff"
                      textAnchor="middle"
                      className="select-none"
                    >
                      {pt.label}
                    </text>
                  </g>
                )}
              </g>
            );
          })
        )}

        {/* Text Annotations (Angle labels, vertex names, expressions) */}
        {textAnnotations.map((anno, tIdx) => {
          const ax = toSvgX(anno.x);
          const ay = toSvgY(anno.y);
          const fontSize = Math.max(12, anno.fontSize || 12);
          const fontWeight = anno.fontWeight || '800';
          const textColor = anno.color || '#0f172a';
          const bg = anno.background;
          const border = anno.border;
          const pad = anno.padding ?? 4;

          return (
            <g key={`anno-${tIdx}`}>
              {bg ? (
                <rect
                  x={ax - (anno.text.length * 4.2 + pad + 2)}
                  y={ay - 11}
                  width={anno.text.length * 8.4 + pad * 2 + 4}
                  height={22}
                  rx="4"
                  fill={bg}
                  stroke={border || '#cbd5e1'}
                  strokeWidth="1.2"
                />
              ) : (
                /* Crisp white halo outline behind text for maximum contrast and legibility */
                <text
                  x={ax}
                  y={ay + 4}
                  fontSize={fontSize}
                  fontWeight={fontWeight}
                  fill="#ffffff"
                  stroke="#ffffff"
                  strokeWidth="3.5"
                  strokeLinejoin="round"
                  style={{ paintOrder: 'stroke fill' }}
                  textAnchor="middle"
                  className="select-none"
                >
                  {anno.text}
                </text>
              )}
              <text
                x={ax}
                y={ay + 4}
                fontSize={fontSize}
                fontWeight={fontWeight}
                fill={textColor}
                textAnchor="middle"
                className="select-none"
              >
                {anno.text}
              </text>
            </g>
          );
        })}

        {/* Angle Arcs */}
        {angleArcs.map((arc, aIdx) => {
          const cx = toSvgX(arc.center[0]);
          const cy = toSvgY(arc.center[1]);

          // Calculate radius in pixels - cap max radius to 32px so arcs stay neat and compact
          const rawRPx = arc.radius <= 5 ? arc.radius * (plotWidth / Math.max(1, Math.abs(xMax - xMin))) : arc.radius;
          const rPx = Math.min(32, Math.max(12, rawRPx));

          const startRad = (arc.startAngle * Math.PI) / 180;
          const endRad = (arc.endAngle * Math.PI) / 180;

          // In SVG, y is inverted downwards: vector is (cos(θ), -sin(θ))
          const x1 = cx + rPx * Math.cos(-startRad);
          const y1 = cy + rPx * Math.sin(-startRad);
          const x2 = cx + rPx * Math.cos(-endRad);
          const y2 = cy + rPx * Math.sin(-endRad);

          const angleDiff = (arc.endAngle - arc.startAngle + 360) % 360;
          const largeArcFlag = angleDiff > 180 ? 1 : 0;
          const sweepFlag = 0;

          const pathD = `M ${x1} ${y1} A ${rPx} ${rPx} 0 ${largeArcFlag} ${sweepFlag} ${x2} ${y2}`;
          const arcColor = arc.color || '#ea580c';

          // Label position along mid-angle vector
          const midAngle = arc.startAngle + angleDiff / 2;
          const midRad = (midAngle * Math.PI) / 180;
          const labelDist = rPx + 16;
          const lx = cx + labelDist * Math.cos(-midRad);
          const ly = cy + labelDist * Math.sin(-midRad);

          return (
            <g key={`angle-arc-${aIdx}`}>
              {/* Outer arc line */}
              <path
                d={pathD}
                fill="none"
                stroke={arcColor}
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              {/* Angle Label with crisp halo */}
              {arc.label && (
                <g>
                  <text
                    x={lx}
                    y={ly + 4}
                    fontSize="12"
                    fontWeight="800"
                    fill="#ffffff"
                    stroke="#ffffff"
                    strokeWidth="3.5"
                    strokeLinejoin="round"
                    style={{ paintOrder: 'stroke fill' }}
                    textAnchor="middle"
                    className="select-none"
                  >
                    {arc.label}
                  </text>
                  <text
                    x={lx}
                    y={ly + 4}
                    fontSize="12"
                    fontWeight="800"
                    fill={arcColor}
                    textAnchor="middle"
                    className="select-none"
                  >
                    {arc.label}
                  </text>
                </g>
              )}
            </g>
          );
        })}

        {/* Translation Arrows */}
        {curves.map((curve, idx) => {
          if (curve.arrow) {
            const x1 = toSvgX(curve.arrow.from[0]);
            const y1 = toSvgY(curve.arrow.from[1]);
            const x2 = toSvgX(curve.arrow.to[0]);
            const y2 = toSvgY(curve.arrow.to[1]);

            return (
              <g key={`arrow-${idx}`}>
                <line
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke="#2563eb"
                  strokeWidth="2.5"
                  markerEnd="url(#arrowhead-blue)"
                />
                {curve.arrow.label && (
                  <text
                    x={(x1 + x2) / 2 + 6}
                    y={(y1 + y2) / 2}
                    fontSize="9"
                    fontWeight="800"
                    fill="#2563eb"
                  >
                    {curve.arrow.label}
                  </text>
                )}
              </g>
            );
          }
          return null;
        })}
      </svg>
      </div>

      {caption && (
        <div className="mt-2 text-center text-[11px] font-bold text-slate-600 max-w-[280px]">
          {formatMathText(caption)}
        </div>
      )}
    </div>
  );
};

export const SatMathGraph: React.FC<SatMathGraphProps> = ({ diagram, className = '', isSubmitted }) => {
  if (!diagram) return null;

  return (
    <div className={`my-4 flex flex-col items-center justify-center ${className}`}>
      {diagram.title && (
        <div className="mb-2 text-center">
          <span className="text-xs font-black uppercase tracking-wider text-slate-800 bg-slate-100 border border-slate-200 px-3 py-1 rounded-full">
            {formatMathText(diagram.title)}
          </span>
        </div>
      )}

      {diagram.subDiagrams && diagram.subDiagrams.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3 w-full max-w-2xl justify-items-center">
          {diagram.subDiagrams.map((sub, idx) => (
            <SinglePlot
              key={idx}
              label={sub.label}
              caption={sub.caption}
              curves={sub.curves}
              xRange={sub.xRange || [-4, 4]}
              yRange={sub.yRange || [-4, 4]}
              xStep={sub.xStep ?? diagram.xStep}
              yStep={sub.yStep ?? diagram.yStep}
              hideAxes={sub.hideAxes ?? diagram.hideAxes}
              hideGrid={sub.hideGrid ?? diagram.hideGrid}
              hideTicks={sub.hideTicks ?? diagram.hideTicks}
              xAxisLabel={sub.xAxisLabel ?? diagram.xAxisLabel}
              yAxisLabel={sub.yAxisLabel ?? diagram.yAxisLabel}
              xTicksLabels={sub.xTicksLabels ?? diagram.xTicksLabels}
              yTicksLabels={sub.yTicksLabels ?? diagram.yTicksLabels}
              textAnnotations={sub.textAnnotations ?? diagram.textAnnotations}
              angleArcs={sub.angleArcs ?? diagram.angleArcs}
              width={sub.width ?? diagram.width}
              height={sub.height ?? diagram.height}
              isSubmitted={isSubmitted}
            />
          ))}
        </div>
      ) : (
        <SinglePlot
          curves={diagram.curves || []}
          xRange={diagram.xRange}
          yRange={diagram.yRange}
          xStep={diagram.xStep}
          yStep={diagram.yStep}
          hideAxes={diagram.hideAxes}
          hideGrid={diagram.hideGrid}
          hideTicks={diagram.hideTicks}
          xAxisLabel={diagram.xAxisLabel}
          yAxisLabel={diagram.yAxisLabel}
          xTicksLabels={diagram.xTicksLabels}
          yTicksLabels={diagram.yTicksLabels}
          textAnnotations={diagram.textAnnotations}
          angleArcs={diagram.angleArcs}
          caption={diagram.caption}
          width={diagram.width}
          height={diagram.height}
          isSubmitted={isSubmitted}
        />
      )}
    </div>
  );
};
