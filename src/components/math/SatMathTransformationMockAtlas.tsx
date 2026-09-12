import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Sparkles,
  ArrowRight,
  Sliders,
  Maximize2,
  Compass,
  CheckCircle2,
  Layers,
  ArrowUp,
  ArrowDown,
  ArrowLeft as ArrowLeftIcon,
  ArrowRight as ArrowRightIcon,
  RotateCcw,
  Zap
} from 'lucide-react';
import { MathDiagramSpec } from '../../data/satMathConcepts';
import { SatMathGraph } from './SatMathGraph';

interface TransformationCase {
  id: string;
  category: 'shifts' | 'reflections' | 'stretches' | 'combined';
  title: string;
  algebraicForm: string;
  coordinateRule: string;
  directionIcon: React.ReactNode;
  badgeColor: string;
  summary: string;
  parentEquation: string;
  transformedEquation: string;
  keyPoints: {
    parent: string;
    transformed: string;
  };
  diagram: MathDiagramSpec;
}

const TRANSFORMATION_MOCK_CASES: TransformationCase[] = [
  {
    id: 'vert-shift-up',
    category: 'shifts',
    title: '1. Vertical Shift Up (+k)',
    algebraicForm: 'g(x) = f(x) + k  (where k > 0)',
    coordinateRule: '(x, y) ⟶ (x, y + k)',
    directionIcon: <ArrowUp className="w-4 h-4 text-emerald-600" />,
    badgeColor: 'bg-emerald-50 text-emerald-800 border-emerald-200',
    summary: 'Adds k units to every output y. The curve translates vertically upward without altering its width, orientation, or axis of symmetry.',
    parentEquation: 'f(x) = x²',
    transformedEquation: 'g(x) = x² + 3 (Shift Up 3)',
    keyPoints: {
      parent: 'Vertex at (0, 0)',
      transformed: 'Vertex shifts to (0, 3)'
    },
    diagram: {
      title: 'Mock Graph: Vertical Shift Up (+3 Units)',
      caption: 'Parent f(x) = x² (slate dashed) shifted 3 units UP to g(x) = x² + 3 (blue).',
      xAxisLabel: 'x',
      yAxisLabel: 'y',
      xRange: [-4, 4],
      yRange: [-2, 10],
      xStep: 1,
      yStep: 2,
      curves: [
        {
          type: 'function',
          fnType: 'parabola',
          style: 'dashed',
          label: 'Parent f(x) = x²',
          color: '#94a3b8',
          points: [[-3, 9], [-2, 4], [-1, 1], [0, 0], [1, 1], [2, 4], [3, 9]],
          highlightPoints: [
            { x: 0, y: 0, label: '(0, 0)', color: '#64748b' }
          ]
        },
        {
          type: 'function',
          fnType: 'parabola',
          label: 'Transformed g(x) = x² + 3',
          color: '#2563eb',
          points: [[-2.5, 9.25], [-2, 7], [-1, 4], [0, 3], [1, 4], [2, 7], [2.5, 9.25]],
          highlightPoints: [
            { x: 0, y: 3, label: 'Vertex (0, 3)', color: '#2563eb' }
          ]
        }
      ],
      textAnnotations: [
        { x: 0.2, y: 1.5, text: '▲ Shift +3', color: '#16a34a', fontSize: 11, fontWeight: 'bold' }
      ]
    }
  },
  {
    id: 'vert-shift-down',
    category: 'shifts',
    title: '2. Vertical Shift Down (-k)',
    algebraicForm: 'g(x) = f(x) - k  (where k > 0)',
    coordinateRule: '(x, y) ⟶ (x, y - k)',
    directionIcon: <ArrowDown className="w-4 h-4 text-rose-600" />,
    badgeColor: 'bg-rose-50 text-rose-800 border-rose-200',
    summary: 'Subtracts k units from every output y. The curve translates vertically downward.',
    parentEquation: 'f(x) = x²',
    transformedEquation: 'g(x) = x² - 4 (Shift Down 4)',
    keyPoints: {
      parent: 'Vertex at (0, 0)',
      transformed: 'Vertex shifts to (0, -4)'
    },
    diagram: {
      title: 'Mock Graph: Vertical Shift Down (-4 Units)',
      caption: 'Parent f(x) = x² (slate dashed) shifted 4 units DOWN to g(x) = x² - 4 (rose).',
      xAxisLabel: 'x',
      yAxisLabel: 'y',
      xRange: [-4, 4],
      yRange: [-6, 6],
      xStep: 1,
      yStep: 2,
      curves: [
        {
          type: 'function',
          fnType: 'parabola',
          style: 'dashed',
          label: 'Parent f(x) = x²',
          color: '#94a3b8',
          points: [[-2, 4], [-1, 1], [0, 0], [1, 1], [2, 4]],
          highlightPoints: [
            { x: 0, y: 0, label: '(0, 0)', color: '#64748b' }
          ]
        },
        {
          type: 'function',
          fnType: 'parabola',
          label: 'Transformed g(x) = x² - 4',
          color: '#e11d48',
          points: [[-3, 5], [-2, 0], [-1, -3], [0, -4], [1, -3], [2, 0], [3, 5]],
          highlightPoints: [
            { x: 0, y: -4, label: 'Vertex (0, -4)', color: '#e11d48' },
            { x: -2, y: 0, label: '(-2, 0)', color: '#10b981' },
            { x: 2, y: 0, label: '(2, 0)', color: '#10b981' }
          ]
        }
      ],
      textAnnotations: [
        { x: 0.2, y: -2, text: '▼ Shift -4', color: '#e11d48', fontSize: 11, fontWeight: 'bold' }
      ]
    }
  },
  {
    id: 'horiz-shift-right',
    category: 'shifts',
    title: '3. Horizontal Shift Right (x - h)',
    algebraicForm: 'g(x) = f(x - h)  (where h > 0)',
    coordinateRule: '(x, y) ⟶ (x + h, y)',
    directionIcon: <ArrowRightIcon className="w-4 h-4 text-blue-600" />,
    badgeColor: 'bg-blue-50 text-blue-800 border-blue-200',
    summary: 'Inside the parentheses is "Opposite World"! Subtraction (x - h) delays the input, translating the graph RIGHT by h units.',
    parentEquation: 'f(x) = x²',
    transformedEquation: 'g(x) = (x - 3)² (Shift Right 3)',
    keyPoints: {
      parent: 'Vertex at (0, 0), Axis x = 0',
      transformed: 'Vertex at (3, 0), Axis x = 3'
    },
    diagram: {
      title: 'Mock Graph: Horizontal Shift Right (+3 Units)',
      caption: 'Parent f(x) = x² (slate) shifted 3 units RIGHT to g(x) = (x - 3)² (blue).',
      xAxisLabel: 'x',
      yAxisLabel: 'y',
      xRange: [-2, 7],
      yRange: [-1, 9],
      xStep: 1,
      yStep: 2,
      curves: [
        {
          type: 'function',
          fnType: 'parabola',
          style: 'dashed',
          label: 'Parent f(x) = x²',
          color: '#94a3b8',
          points: [[-2, 4], [-1, 1], [0, 0], [1, 1], [2, 4]],
          highlightPoints: [
            { x: 0, y: 0, label: '(0, 0)', color: '#64748b' }
          ]
        },
        {
          type: 'function',
          fnType: 'parabola',
          label: 'g(x) = (x - 3)²',
          color: '#2563eb',
          points: [[1, 4], [2, 1], [3, 0], [4, 1], [5, 4], [6, 9]],
          highlightPoints: [
            { x: 3, y: 0, label: 'Vertex (3, 0)', color: '#2563eb' }
          ]
        },
        {
          type: 'line',
          style: 'dashed',
          label: 'Axis x = 3',
          color: '#93c5fd',
          points: [[3, -1], [3, 9]]
        }
      ],
      textAnnotations: [
        { x: 1.5, y: 0.8, text: '▶ Right +3', color: '#2563eb', fontSize: 11, fontWeight: 'bold' }
      ]
    }
  },
  {
    id: 'horiz-shift-left',
    category: 'shifts',
    title: '4. Horizontal Shift Left (x + h)',
    algebraicForm: 'g(x) = f(x + h)  (where h > 0)',
    coordinateRule: '(x, y) ⟶ (x - h, y)',
    directionIcon: <ArrowLeftIcon className="w-4 h-4 text-violet-600" />,
    badgeColor: 'bg-violet-50 text-violet-800 border-violet-200',
    summary: 'Addition inside the function (x + h) advances the input, translating the graph LEFT by h units.',
    parentEquation: 'f(x) = x²',
    transformedEquation: 'g(x) = (x + 4)² (Shift Left 4)',
    keyPoints: {
      parent: 'Vertex at (0, 0), Axis x = 0',
      transformed: 'Vertex at (-4, 0), Axis x = -4'
    },
    diagram: {
      title: 'Mock Graph: Horizontal Shift Left (-4 Units)',
      caption: 'Parent f(x) = x² (slate) shifted 4 units LEFT to g(x) = (x + 4)² (violet).',
      xAxisLabel: 'x',
      yAxisLabel: 'y',
      xRange: [-7, 3],
      yRange: [-1, 9],
      xStep: 1,
      yStep: 2,
      curves: [
        {
          type: 'function',
          fnType: 'parabola',
          style: 'dashed',
          label: 'Parent f(x) = x²',
          color: '#94a3b8',
          points: [[-2, 4], [-1, 1], [0, 0], [1, 1], [2, 4]],
          highlightPoints: [
            { x: 0, y: 0, label: '(0, 0)', color: '#64748b' }
          ]
        },
        {
          type: 'function',
          fnType: 'parabola',
          label: 'g(x) = (x + 4)²',
          color: '#7c3aed',
          points: [[-6, 4], [-5, 1], [-4, 0], [-3, 1], [-2, 4], [-1, 9]],
          highlightPoints: [
            { x: -4, y: 0, label: 'Vertex (-4, 0)', color: '#7c3aed' }
          ]
        },
        {
          type: 'line',
          style: 'dashed',
          label: 'Axis x = -4',
          color: '#c4b5fd',
          points: [[-4, -1], [-4, 9]]
        }
      ],
      textAnnotations: [
        { x: -2, y: 0.8, text: '◀ Left -4', color: '#7c3aed', fontSize: 11, fontWeight: 'bold' }
      ]
    }
  },
  {
    id: 'reflect-x-axis',
    category: 'reflections',
    title: '5. Reflection across x-axis (-f(x))',
    algebraicForm: 'g(x) = -f(x)',
    coordinateRule: '(x, y) ⟶ (x, -y)',
    directionIcon: <RotateCcw className="w-4 h-4 text-amber-600" />,
    badgeColor: 'bg-amber-50 text-amber-800 border-amber-200',
    summary: 'Negates all output y-coordinates, flipping the curve vertically over the horizontal x-axis (y = 0).',
    parentEquation: 'f(x) = x² (Opens Upward)',
    transformedEquation: 'g(x) = -x² (Opens Downward)',
    keyPoints: {
      parent: 'Global minimum at (0, 0)',
      transformed: 'Global maximum at (0, 0)'
    },
    diagram: {
      title: 'Mock Graph: Reflection Across x-Axis (-f(x))',
      caption: 'Parent f(x) = x² (slate) reflected vertically over x-axis to g(x) = -x² (amber).',
      xAxisLabel: 'x',
      yAxisLabel: 'y',
      xRange: [-4, 4],
      yRange: [-6, 6],
      xStep: 1,
      yStep: 2,
      curves: [
        {
          type: 'function',
          fnType: 'parabola',
          style: 'dashed',
          label: 'Parent f(x) = x² (Up)',
          color: '#94a3b8',
          points: [[-2, 4], [-1, 1], [0, 0], [1, 1], [2, 4]],
          highlightPoints: [
            { x: 1, y: 1, label: '(1, 1)', color: '#64748b' }
          ]
        },
        {
          type: 'function',
          fnType: 'parabola',
          label: 'g(x) = -x² (Down)',
          color: '#d97706',
          points: [[-2, -4], [-1, -1], [0, 0], [1, -1], [2, -4]],
          highlightPoints: [
            { x: 1, y: -1, label: '(1, -1)', color: '#d97706' },
            { x: 0, y: 0, label: 'Vertex (0, 0)', color: '#ef4444' }
          ]
        }
      ],
      textAnnotations: [
        { x: 1.2, y: 0, text: 'Flip y ⟶ -y', color: '#d97706', fontSize: 11, fontWeight: 'bold' }
      ]
    }
  },
  {
    id: 'reflect-y-axis',
    category: 'reflections',
    title: '6. Reflection across y-axis (f(-x))',
    algebraicForm: 'g(x) = f(-x)',
    coordinateRule: '(x, y) ⟶ (-x, y)',
    directionIcon: <RotateCcw className="w-4 h-4 text-cyan-600" />,
    badgeColor: 'bg-cyan-50 text-cyan-800 border-cyan-200',
    summary: 'Negates all input x-coordinates, reflecting the graph horizontally over the vertical y-axis (x = 0). Turns exponential growth into decay.',
    parentEquation: 'f(x) = 2ˣ (Growth)',
    transformedEquation: 'g(x) = 2⁻ˣ = (1/2)ˣ (Decay)',
    keyPoints: {
      parent: 'Increases left to right: (1, 2), (2, 4)',
      transformed: 'Decreases left to right: (-1, 2), (-2, 4)'
    },
    diagram: {
      title: 'Mock Graph: Reflection Across y-Axis (f(-x))',
      caption: 'Parent exponential growth f(x) = 2ˣ (slate) reflected across y-axis into decay g(x) = 2⁻ˣ (teal).',
      xAxisLabel: 'x',
      yAxisLabel: 'y',
      xRange: [-4, 4],
      yRange: [-1, 9],
      xStep: 1,
      yStep: 2,
      curves: [
        {
          type: 'function',
          fnType: 'exponential',
          style: 'dashed',
          label: 'Parent f(x) = 2ˣ',
          color: '#94a3b8',
          points: [[-3, 0.125], [-2, 0.25], [-1, 0.5], [0, 1], [1, 2], [2, 4], [3, 8]],
          highlightPoints: [
            { x: 2, y: 4, label: 'f(2) = 4', color: '#64748b' }
          ]
        },
        {
          type: 'function',
          fnType: 'exponential',
          label: 'g(x) = 2⁻ˣ',
          color: '#0891b2',
          points: [[-3, 8], [-2, 4], [-1, 2], [0, 1], [1, 0.5], [2, 0.25], [3, 0.125]],
          highlightPoints: [
            { x: -2, y: 4, label: 'g(-2) = 4', color: '#0891b2' },
            { x: 0, y: 1, label: 'Shared (0, 1)', color: '#ef4444' }
          ]
        }
      ],
      textAnnotations: [
        { x: 0.1, y: 5, text: 'Mirror across y-axis', color: '#0891b2', fontSize: 11, fontWeight: 'bold' }
      ]
    }
  },
  {
    id: 'vert-stretch',
    category: 'stretches',
    title: '7. Vertical Stretch (a · f(x), a > 1)',
    algebraicForm: 'g(x) = a · f(x)  (where a > 1)',
    coordinateRule: '(x, y) ⟶ (x, a · y)',
    directionIcon: <Maximize2 className="w-4 h-4 text-indigo-600" />,
    badgeColor: 'bg-indigo-50 text-indigo-800 border-indigo-200',
    summary: 'Multiplies every y-value by a (a > 1), pulling the graph vertically away from the x-axis. The parabola appears steeper and narrower.',
    parentEquation: 'f(x) = x²',
    transformedEquation: 'g(x) = 3x² (Stretch factor 3)',
    keyPoints: {
      parent: 'Passes through (1, 1), (2, 4)',
      transformed: 'Passes through (1, 3), (2, 12)'
    },
    diagram: {
      title: 'Mock Graph: Vertical Stretch by Factor 3',
      caption: 'Parent f(x) = x² (slate) vertically stretched by 3 to g(x) = 3x² (indigo, narrower).',
      xAxisLabel: 'x',
      yAxisLabel: 'y',
      xRange: [-3, 3],
      yRange: [-1, 13],
      xStep: 1,
      yStep: 2,
      curves: [
        {
          type: 'function',
          fnType: 'parabola',
          style: 'dashed',
          label: 'Parent f(x) = x²',
          color: '#94a3b8',
          points: [[-3, 9], [-2, 4], [-1, 1], [0, 0], [1, 1], [2, 4], [3, 9]],
          highlightPoints: [
            { x: 1, y: 1, label: '(1, 1)', color: '#64748b' },
            { x: 2, y: 4, label: '(2, 4)', color: '#64748b' }
          ]
        },
        {
          type: 'function',
          fnType: 'parabola',
          label: 'g(x) = 3x² (Narrower)',
          color: '#4f46e5',
          points: [[-2, 12], [-1.5, 6.75], [-1, 3], [0, 0], [1, 3], [1.5, 6.75], [2, 12]],
          highlightPoints: [
            { x: 1, y: 3, label: '(1, 3)', color: '#4f46e5' },
            { x: 2, y: 12, label: '(2, 12)', color: '#4f46e5' }
          ]
        }
      ],
      textAnnotations: [
        { x: 1.2, y: 2, text: '3× taller', color: '#4f46e5', fontSize: 11, fontWeight: 'bold' }
      ]
    }
  },
  {
    id: 'vert-compress',
    category: 'stretches',
    title: '8. Vertical Compression (a · f(x), 0 < a < 1)',
    algebraicForm: 'g(x) = a · f(x)  (where 0 < a < 1)',
    coordinateRule: '(x, y) ⟶ (x, a · y)',
    directionIcon: <Sliders className="w-4 h-4 text-teal-600" />,
    badgeColor: 'bg-teal-50 text-teal-800 border-teal-200',
    summary: 'Multiplies every y-value by a fraction (0 < a < 1), squashing the graph vertically toward the x-axis. The parabola appears flatter and wider.',
    parentEquation: 'f(x) = x²',
    transformedEquation: 'g(x) = (1/4)x² (Compression factor 1/4)',
    keyPoints: {
      parent: 'Passes through (2, 4), (4, 16)',
      transformed: 'Passes through (2, 1), (4, 4)'
    },
    diagram: {
      title: 'Mock Graph: Vertical Compression by Factor 1/4',
      caption: 'Parent f(x) = x² (slate) vertically compressed by 1/4 to g(x) = 0.25x² (teal, wider).',
      xAxisLabel: 'x',
      yAxisLabel: 'y',
      xRange: [-5, 5],
      yRange: [-1, 9],
      xStep: 1,
      yStep: 2,
      curves: [
        {
          type: 'function',
          fnType: 'parabola',
          style: 'dashed',
          label: 'Parent f(x) = x²',
          color: '#94a3b8',
          points: [[-3, 9], [-2, 4], [-1, 1], [0, 0], [1, 1], [2, 4], [3, 9]],
          highlightPoints: [
            { x: 2, y: 4, label: '(2, 4)', color: '#64748b' }
          ]
        },
        {
          type: 'function',
          fnType: 'parabola',
          label: 'g(x) = 0.25x² (Wider)',
          color: '#0d9488',
          points: [[-5, 6.25], [-4, 4], [-2, 1], [0, 0], [2, 1], [4, 4], [5, 6.25]],
          highlightPoints: [
            { x: 2, y: 1, label: '(2, 1)', color: '#0d9488' },
            { x: 4, y: 4, label: '(4, 4)', color: '#0d9488' }
          ]
        }
      ],
      textAnnotations: [
        { x: 2.2, y: 2.5, text: 'Squashed to 1/4 y', color: '#0d9488', fontSize: 11, fontWeight: 'bold' }
      ]
    }
  },
  {
    id: 'horiz-compress',
    category: 'stretches',
    title: '9. Horizontal Compression (f(b · x), b > 1)',
    algebraicForm: 'g(x) = f(b · x)  (where b > 1)',
    coordinateRule: '(x, y) ⟶ (x / b, y)',
    directionIcon: <Sliders className="w-4 h-4 text-purple-600" />,
    badgeColor: 'bg-purple-50 text-purple-800 border-purple-200',
    summary: 'Inside multiplying by b > 1 speeds up inputs, compressing the curve horizontally toward the y-axis by a factor of 1/b.',
    parentEquation: 'f(x) = x²',
    transformedEquation: 'g(x) = f(2x) = (2x)² = 4x² (Compression 1/2)',
    keyPoints: {
      parent: 'Output 4 occurs at x = 2',
      transformed: 'Output 4 occurs at x = 2/2 = 1'
    },
    diagram: {
      title: 'Mock Graph: Horizontal Compression by Factor 1/2',
      caption: 'Parent f(x) = x² (slate) horizontally compressed by factor 1/2 to g(x) = (2x)² (purple).',
      xAxisLabel: 'x',
      yAxisLabel: 'y',
      xRange: [-4, 4],
      yRange: [-1, 10],
      xStep: 1,
      yStep: 2,
      curves: [
        {
          type: 'function',
          fnType: 'parabola',
          style: 'dashed',
          label: 'Parent f(x) = x²',
          color: '#94a3b8',
          points: [[-3, 9], [-2, 4], [-1, 1], [0, 0], [1, 1], [2, 4], [3, 9]],
          highlightPoints: [
            { x: 2, y: 4, label: 'f: (2, 4)', color: '#64748b' }
          ]
        },
        {
          type: 'function',
          fnType: 'parabola',
          label: 'g(x) = (2x)² = 4x²',
          color: '#9333ea',
          points: [[-1.5, 9], [-1, 4], [-0.5, 1], [0, 0], [0.5, 1], [1, 4], [1.5, 9]],
          highlightPoints: [
            { x: 1, y: 4, label: 'g: (1, 4)', color: '#9333ea' }
          ]
        }
      ],
      textAnnotations: [
        { x: 1.5, y: 4, text: 'x ⟶ x/2', color: '#9333ea', fontSize: 11, fontWeight: 'bold' }
      ]
    }
  },
  {
    id: 'horiz-stretch',
    category: 'stretches',
    title: '10. Horizontal Stretch (f(b · x), 0 < b < 1)',
    algebraicForm: 'g(x) = f(b · x)  (where 0 < b < 1)',
    coordinateRule: '(x, y) ⟶ (x / b, y) = ((1/b) · x, y)',
    directionIcon: <Maximize2 className="w-4 h-4 text-emerald-700" />,
    badgeColor: 'bg-emerald-50 text-emerald-800 border-emerald-200',
    summary: 'Inside multiplying by 0 < b < 1 slows inputs down, stretching the curve horizontally away from the y-axis by factor 1/b.',
    parentEquation: 'f(x) = x²',
    transformedEquation: 'g(x) = f(0.5x) = (0.5x)² = 0.25x² (Stretch factor 2)',
    keyPoints: {
      parent: 'Output 4 occurs at x = 2',
      transformed: 'Output 4 occurs at x = 2 / 0.5 = 4'
    },
    diagram: {
      title: 'Mock Graph: Horizontal Stretch by Factor 2',
      caption: 'Parent f(x) = x² (slate) horizontally stretched by factor 2 to g(x) = (0.5x)² (emerald).',
      xAxisLabel: 'x',
      yAxisLabel: 'y',
      xRange: [-6, 6],
      yRange: [-1, 10],
      xStep: 2,
      yStep: 2,
      curves: [
        {
          type: 'function',
          fnType: 'parabola',
          style: 'dashed',
          label: 'Parent f(x) = x²',
          color: '#94a3b8',
          points: [[-3, 9], [-2, 4], [-1, 1], [0, 0], [1, 1], [2, 4], [3, 9]],
          highlightPoints: [
            { x: 2, y: 4, label: 'f: (2, 4)', color: '#64748b' }
          ]
        },
        {
          type: 'function',
          fnType: 'parabola',
          label: 'g(x) = (0.5x)²',
          color: '#059669',
          points: [[-6, 9], [-4, 4], [-2, 1], [0, 0], [2, 1], [4, 4], [6, 9]],
          highlightPoints: [
            { x: 4, y: 4, label: 'g: (4, 4)', color: '#059669' }
          ]
        }
      ],
      textAnnotations: [
        { x: 3, y: 4.5, text: 'x ⟶ 2x', color: '#059669', fontSize: 11, fontWeight: 'bold' }
      ]
    }
  },
  {
    id: 'combined-master',
    category: 'combined',
    title: '★ Master Composite Transformation',
    algebraicForm: 'g(x) = -2(x - 3)² + 5  (Multi-Step Composition)',
    coordinateRule: '(x, y) ⟶ (x + 3, -2y + 5)',
    directionIcon: <Zap className="w-4 h-4 text-amber-500" />,
    badgeColor: 'bg-gradient-to-r from-amber-500/10 to-indigo-500/10 text-slate-900 border-amber-300',
    summary: '4-Step Sequential Pipeline: ① Shift Right 3 ⟶ ② Vertical Stretch by 2 ⟶ ③ Reflect over x-axis ⟶ ④ Shift Up 5.',
    parentEquation: 'f(x) = x² (Vertex (0, 0), opens up)',
    transformedEquation: 'g(x) = -2(x - 3)² + 5 (Vertex (3, 5), opens down)',
    keyPoints: {
      parent: 'Vertex (0, 0), axis x = 0',
      transformed: 'Vertex (3, 5), axis x = 3, max value = 5'
    },
    diagram: {
      title: 'Mock Graph: Master Transformation g(x) = -2(x - 3)² + 5',
      caption: 'Combines horizontal translation (+3), vertical stretch (2x), reflection (-1), and vertical translation (+5).',
      xAxisLabel: 'x',
      yAxisLabel: 'y',
      xRange: [-1, 7],
      yRange: [-6, 8],
      xStep: 1,
      yStep: 2,
      curves: [
        {
          type: 'function',
          fnType: 'parabola',
          style: 'dashed',
          label: 'Parent f(x) = x²',
          color: '#94a3b8',
          points: [[-2, 4], [-1, 1], [0, 0], [1, 1], [2, 4]],
          highlightPoints: [
            { x: 0, y: 0, label: 'Parent (0, 0)', color: '#64748b' }
          ]
        },
        {
          type: 'function',
          fnType: 'parabola',
          label: 'g(x) = -2(x - 3)² + 5',
          color: '#dc2626',
          points: [[1, -3], [2, 3], [3, 5], [4, 3], [5, -3]],
          highlightPoints: [
            { x: 3, y: 5, label: 'Vertex (3, 5)', color: '#dc2626' }
          ]
        },
        {
          type: 'line',
          style: 'dashed',
          label: 'Axis x = 3',
          color: '#f87171',
          points: [[3, -6], [3, 8]]
        }
      ],
      textAnnotations: [
        { x: 3.2, y: 5.5, text: 'Apex (3, 5)', color: '#dc2626', fontSize: 11, fontWeight: 'bold' }
      ]
    }
  }
];

export const SatMathTransformationMockAtlas: React.FC = () => {
  const [selectedCaseId, setSelectedCaseId] = useState<string>('vert-shift-up');
  const [filterCategory, setFilterCategory] = useState<'all' | 'shifts' | 'reflections' | 'stretches' | 'combined'>('all');

  const filteredCases = TRANSFORMATION_MOCK_CASES.filter(
    c => filterCategory === 'all' || c.category === filterCategory
  );

  const currentCase = TRANSFORMATION_MOCK_CASES.find(c => c.id === selectedCaseId) || TRANSFORMATION_MOCK_CASES[0];

  return (
    <div className="space-y-6 pt-4">
      {/* Header Banner */}
      <div className="bg-white border border-slate-200 text-slate-900 rounded-3xl p-6 sm:p-7 shadow-xs space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-800 border border-slate-200 text-xs font-black uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-slate-700" />
              <span>Section 4.2 Visual Atlas</span>
            </span>
            <span className="text-xs font-bold text-slate-500">10 Core Cases + Master Composite</span>
          </div>

          <div className="flex items-center gap-1.5 bg-slate-100 p-1 rounded-xl border border-slate-200 text-xs font-bold">
            <button
              onClick={() => setFilterCategory('all')}
              className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
                filterCategory === 'all' ? 'bg-black text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All (11)
            </button>
            <button
              onClick={() => setFilterCategory('shifts')}
              className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
                filterCategory === 'shifts' ? 'bg-black text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Shifts (4)
            </button>
            <button
              onClick={() => setFilterCategory('reflections')}
              className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
                filterCategory === 'reflections' ? 'bg-black text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Reflections (2)
            </button>
            <button
              onClick={() => setFilterCategory('stretches')}
              className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
                filterCategory === 'stretches' ? 'bg-black text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Stretches/Compressions (4)
            </button>
          </div>
        </div>

        <h3 className="text-xl sm:text-2xl font-black text-slate-950 tracking-tight flex items-center gap-2">
          <Compass className="w-6 h-6 text-slate-900 shrink-0" />
          <span>Interactive Mock Graphs for Every Function Transformation Case</span>
        </h3>

        <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed max-w-4xl">
          Select any transformation case below to inspect its exact mathematical coordinate mapping, algebraic formula, verbal rule, and side-by-side coordinate plane graph comparing the base parent function <span className="font-mono text-slate-800">f(x)</span> with the transformed curve <span className="font-mono text-slate-950 font-bold">g(x)</span>.
        </p>
      </div>

      {/* Case Selector Pills */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
        {filteredCases.map(c => {
          const isSelected = c.id === selectedCaseId;
          return (
            <button
              key={c.id}
              onClick={() => setSelectedCaseId(c.id)}
              className={`p-3 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between gap-2 ${
                isSelected
                  ? 'bg-slate-900 text-white border-slate-900 shadow-md ring-2 ring-indigo-500/50'
                  : 'bg-white hover:bg-slate-50 text-slate-800 border-slate-200 shadow-2xs'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-black">{c.directionIcon}</span>
                <span
                  className={`text-[9px] font-black uppercase px-2 py-0.5 rounded-full border ${
                    isSelected ? 'bg-white/20 text-white border-white/30' : c.badgeColor
                  }`}
                >
                  {c.category}
                </span>
              </div>
              <div className="text-xs font-black line-clamp-1">{c.title}</div>
              <div className="text-[10px] font-mono text-slate-400 truncate">{c.algebraicForm}</div>
            </button>
          );
        })}
      </div>

      {/* Active Selected Transformation Spotlight Showcase */}
      <div className="bg-white border border-slate-200 rounded-3xl p-5 sm:p-7 shadow-xs space-y-6">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 border-b border-slate-100 pb-5">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <span className={`text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full border ${currentCase.badgeColor}`}>
                {currentCase.category.toUpperCase()}
              </span>
              <span className="text-xs font-mono font-black text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded-md border border-indigo-200">
                {currentCase.algebraicForm}
              </span>
            </div>
            <h4 className="text-xl sm:text-2xl font-black text-slate-950 tracking-tight flex items-center gap-2">
              {currentCase.directionIcon}
              <span>{currentCase.title}</span>
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 font-medium max-w-3xl leading-relaxed">
              {currentCase.summary}
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-3 sm:p-4 text-xs space-y-1.5 shrink-0 min-w-[240px]">
            <div className="text-[10px] font-black uppercase tracking-wider text-slate-500">
              Coordinate Rule
            </div>
            <div className="font-mono font-extrabold text-sm text-indigo-800 bg-white px-3 py-1.5 rounded-xl border border-slate-200 text-center shadow-2xs">
              {currentCase.coordinateRule}
            </div>
          </div>
        </div>

        {/* Two-Column Showcase: Graph on Left/Right, Pedagogical Details on Other */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {/* Detailed Analytical Breakdown */}
          <div className="lg:col-span-6 space-y-4">
            <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-4 sm:p-5 space-y-3">
              <div className="text-xs font-black uppercase tracking-wider text-slate-900 flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-indigo-600" />
                <span>Equations & Point Mapping</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="bg-white p-3 rounded-xl border border-slate-200 space-y-1">
                  <span className="text-[10px] font-extrabold uppercase text-slate-400">Parent Function</span>
                  <div className="font-mono font-bold text-xs text-slate-700">{currentCase.parentEquation}</div>
                  <div className="text-[11px] text-slate-500">{currentCase.keyPoints.parent}</div>
                </div>

                <div className="bg-indigo-50/60 p-3 rounded-xl border border-indigo-200 space-y-1">
                  <span className="text-[10px] font-extrabold uppercase text-indigo-600">Transformed Function</span>
                  <div className="font-mono font-bold text-xs text-indigo-900">{currentCase.transformedEquation}</div>
                  <div className="text-[11px] text-indigo-700 font-medium">{currentCase.keyPoints.transformed}</div>
                </div>
              </div>
            </div>

            <div className="bg-amber-50/70 border border-amber-200 rounded-2xl p-4 space-y-2">
              <div className="text-[11px] font-black uppercase tracking-wider text-amber-950 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                <span>SAT Exam Insight & "Opposite World" Rule</span>
              </div>
              <p className="text-xs text-amber-900 font-medium leading-relaxed">
                {currentCase.id.includes('horiz') ? (
                  <>
                    Remember: Operations <strong>inside parentheses f(b(x - h))</strong> always apply in reverse! A minus sign (x - 3) translates <strong>RIGHT</strong>, and multiplying by 2 (2x) compresses inputs to <strong>1/2 their width</strong>.
                  </>
                ) : currentCase.id.includes('reflect') ? (
                  <>
                    Distinguish carefully: <strong>-f(x)</strong> negates y (flips over x-axis), while <strong>f(-x)</strong> negates x (flips over y-axis).
                  </>
                ) : (
                  <>
                    Operations <strong>outside f(x)</strong> act directly on y-values without inverted signs. +k moves up, -k moves down, and a &gt; 1 stretches vertically.
                  </>
                )}
              </p>
            </div>
          </div>

          {/* Coordinate Plane Graph */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="w-full max-w-[420px]">
              <SatMathGraph diagram={currentCase.diagram} className="w-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
