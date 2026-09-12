import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  TrendingUp,
  TrendingDown,
  ArrowUp,
  ArrowDown,
  Layers,
  Sparkles,
  Sliders,
  Maximize2,
  CheckCircle2,
  RotateCcw,
  Zap,
  Info,
  Compass
} from 'lucide-react';
import { MathDiagramSpec } from '../../data/satMathConcepts';
import { SatMathGraph } from './SatMathGraph';

interface ExponentialMockCase {
  id: string;
  category: 'growth-decay' | 'shifts' | 'scale' | 'comparisons';
  title: string;
  algebraicForm: string;
  asymptote: string;
  yIntercept: string;
  directionIcon: React.ReactNode;
  badgeColor: string;
  summary: string;
  parentEquation: string;
  transformedEquation: string;
  keyProperties: {
    baseCondition: string;
    asymptoteLine: string;
    yInterceptPoint: string;
    behavior: string;
  };
  diagram: MathDiagramSpec;
}

const EXPONENTIAL_MOCK_CASES: ExponentialMockCase[] = [
  {
    id: 'exp-growth-base',
    category: 'growth-decay',
    title: '1. Standard Exponential Growth (b > 1)',
    algebraicForm: 'f(x) = a(b)^x  where b > 1, a > 0',
    asymptote: 'Horizontal Asymptote: y = 0',
    yIntercept: 'Y-Intercept: (0, a) = (0, 2)',
    directionIcon: <TrendingUp className="w-4 h-4 text-emerald-600" />,
    badgeColor: 'bg-emerald-50 text-emerald-800 border-emerald-200',
    summary: 'Base b > 1 causes the output to increase at an accelerating percentage rate as x increases. The graph stays strictly above the horizontal asymptote y = 0.',
    parentEquation: 'f(x) = 2(2)^x',
    transformedEquation: 'f(0) = 2, f(1) = 4, f(2) = 8, f(3) = 16',
    keyProperties: {
      baseCondition: 'b = 2 > 1 (Doubling each period)',
      asymptoteLine: 'y = 0 (x-axis)',
      yInterceptPoint: '(0, 2)',
      behavior: 'Strictly increasing, convex upward curve'
    },
    diagram: {
      title: 'Exponential Growth: f(x) = 2(2)^x',
      caption: 'Base b = 2 > 1 creates continuous upward growth with asymptote y = 0.',
      xAxisLabel: 'x',
      yAxisLabel: 'y',
      xRange: [-3, 4],
      yRange: [0, 20],
      xStep: 1,
      yStep: 4,
      curves: [
        {
          type: 'line',
          label: 'Asymptote y = 0',
          color: '#ef4444',
          points: [[-3, 0], [4, 0]],
          strokeWidth: 1.5,
          style: 'dashed'
        },
        {
          type: 'function',
          fnType: 'exponential',
          label: 'f(x) = 2(2)^x',
          expression: '2*(2**x)',
          color: '#10b981',
          points: [[-2, 0.5], [-1, 1], [0, 2], [1, 4], [2, 8], [3, 16]],
          strokeWidth: 2.5
        },
        {
          type: 'points',
          label: 'y-intercept (0, 2)',
          color: '#047857',
          points: [[0, 2]]
        }
      ]
    }
  },
  {
    id: 'exp-decay-base',
    category: 'growth-decay',
    title: '2. Standard Exponential Decay (0 < b < 1)',
    algebraicForm: 'f(x) = a(b)^x  where 0 < b < 1, a > 0',
    asymptote: 'Horizontal Asymptote: y = 0',
    yIntercept: 'Y-Intercept: (0, a) = (0, 8)',
    directionIcon: <TrendingDown className="w-4 h-4 text-rose-600" />,
    badgeColor: 'bg-rose-50 text-rose-800 border-rose-200',
    summary: 'Base 0 < b < 1 causes the output to shrink toward 0 as x increases. Each step multiplies the value by a fraction less than 1, leveling off toward the asymptote.',
    parentEquation: 'f(x) = 8(0.5)^x',
    transformedEquation: 'f(0) = 8, f(1) = 4, f(2) = 2, f(3) = 1',
    keyProperties: {
      baseCondition: 'b = 0.5 (Halving each period)',
      asymptoteLine: 'y = 0 (x-axis)',
      yInterceptPoint: '(0, 8)',
      behavior: 'Strictly decreasing, leveling off toward y = 0'
    },
    diagram: {
      title: 'Exponential Decay: f(x) = 8(0.5)^x',
      caption: 'Base b = 0.5 < 1 produces halving decay approaching asymptote y = 0.',
      xAxisLabel: 'x',
      yAxisLabel: 'y',
      xRange: [-1, 6],
      yRange: [0, 10],
      xStep: 1,
      yStep: 2,
      curves: [
        {
          type: 'line',
          label: 'Asymptote y = 0',
          color: '#ef4444',
          points: [[-1, 0], [6, 0]],
          strokeWidth: 1.5,
          style: 'dashed'
        },
        {
          type: 'function',
          fnType: 'exponential',
          label: 'f(x) = 8(0.5)^x',
          expression: '8*(0.5**x)',
          color: '#f43f5e',
          points: [[0, 8], [1, 4], [2, 2], [3, 1], [4, 0.5], [5, 0.25]],
          strokeWidth: 2.5
        },
        {
          type: 'points',
          label: 'y-intercept (0, 8)',
          color: '#be123c',
          points: [[0, 8]]
        }
      ]
    }
  },
  {
    id: 'exp-shift-up',
    category: 'shifts',
    title: '3. Vertical Shift Up (+k) & Asymptote',
    algebraicForm: 'g(x) = a(b)^x + k  (where k > 0)',
    asymptote: 'Horizontal Asymptote: y = k (y = 4)',
    yIntercept: 'Y-Intercept: (0, a + k) = (0, 3 + 4) = (0, 7)',
    directionIcon: <ArrowUp className="w-4 h-4 text-blue-600" />,
    badgeColor: 'bg-blue-50 text-blue-800 border-blue-200',
    summary: 'Adding +k translates the entire curve upward by k units. The horizontal asymptote moves directly from y = 0 to y = k, and the y-intercept becomes (0, a + k).',
    parentEquation: 'f(x) = 3(2)^x  (Asymptote y = 0)',
    transformedEquation: 'g(x) = 3(2)^x + 4  (Asymptote y = 4)',
    keyProperties: {
      baseCondition: 'b = 2 (Growth unchanged)',
      asymptoteLine: 'y = 4 (Shifted +4 units up)',
      yInterceptPoint: '(0, 7) because 3(1) + 4 = 7',
      behavior: 'All y-values increased by 4 units'
    },
    diagram: {
      title: 'Vertical Shift Up: g(x) = 3(2)^x + 4',
      caption: 'Parent f(x) = 3(2)^x (dashed) shifted 4 units UP to g(x) = 3(2)^x + 4 (purple).',
      xAxisLabel: 'x',
      yAxisLabel: 'y',
      xRange: [-3, 4],
      yRange: [0, 32],
      xStep: 1,
      yStep: 4,
      curves: [
        {
          type: 'line',
          label: 'Asymptote y = 4',
          color: '#ef4444',
          points: [[-3, 4], [4, 4]],
          strokeWidth: 1.8,
          style: 'dashed'
        },
        {
          type: 'function',
          fnType: 'exponential',
          label: 'f(x) = 3(2)^x (Parent)',
          expression: '3*(2**x)',
          color: '#94a3b8',
          points: [[-2, 0.75], [-1, 1.5], [0, 3], [1, 6], [2, 12], [3, 24]],
          strokeWidth: 1.8,
          style: 'dashed'
        },
        {
          type: 'function',
          fnType: 'exponential',
          label: 'g(x) = 3(2)^x + 4',
          expression: '3*(2**x) + 4',
          color: '#8b5cf6',
          points: [[-2, 4.75], [-1, 5.5], [0, 7], [1, 10], [2, 16], [3, 28]],
          strokeWidth: 2.5
        },
        {
          type: 'points',
          label: 'y-intercept (0, 7)',
          color: '#6d28d9',
          points: [[0, 7]]
        }
      ]
    }
  },
  {
    id: 'exp-shift-down',
    category: 'shifts',
    title: '4. Vertical Shift Down (-k) & Asymptote',
    algebraicForm: 'g(x) = a(b)^x - k  (where k > 0)',
    asymptote: 'Horizontal Asymptote: y = -k (y = -3)',
    yIntercept: 'Y-Intercept: (0, a - k) = (0, 5 - 3) = (0, 2)',
    directionIcon: <ArrowDown className="w-4 h-4 text-amber-600" />,
    badgeColor: 'bg-amber-50 text-amber-800 border-amber-200',
    summary: 'Subtracting k translates the entire curve downward. The asymptote drops to the negative line y = -k, and the curve crosses the y-axis at (0, a - k).',
    parentEquation: 'f(x) = 5(2)^x  (Asymptote y = 0)',
    transformedEquation: 'g(x) = 5(2)^x - 3  (Asymptote y = -3)',
    keyProperties: {
      baseCondition: 'b = 2 (Growth unchanged)',
      asymptoteLine: 'y = -3 (Shifted -3 units down)',
      yInterceptPoint: '(0, 2) because 5(1) - 3 = 2',
      behavior: 'Approaches horizontal line y = -3 as x ⟶ -∞'
    },
    diagram: {
      title: 'Vertical Shift Down: g(x) = 5(2)^x - 3',
      caption: 'Parent f(x) = 5(2)^x shifted 3 units DOWN to g(x) = 5(2)^x - 3 (blue).',
      xAxisLabel: 'x',
      yAxisLabel: 'y',
      xRange: [-3, 3],
      yRange: [-5, 25],
      xStep: 1,
      yStep: 5,
      curves: [
        {
          type: 'line',
          label: 'Asymptote y = -3',
          color: '#ef4444',
          points: [[-3, -3], [3, -3]],
          strokeWidth: 1.8,
          style: 'dashed'
        },
        {
          type: 'function',
          fnType: 'exponential',
          label: 'g(x) = 5(2)^x - 3',
          expression: '5*(2**x) - 3',
          color: '#0284c7',
          points: [[-2, -1.75], [-1, -0.5], [0, 2], [1, 7], [2, 17]],
          strokeWidth: 2.5
        },
        {
          type: 'points',
          label: 'y-intercept (0, 2)',
          color: '#0369a1',
          points: [[0, 2]]
        }
      ]
    }
  },
  {
    id: 'exp-scale-stretch',
    category: 'scale',
    title: '5. Changing Scale Factor a (Vertical Stretch)',
    algebraicForm: 'f(x) = 2(2)^x  vs  g(x) = 6(2)^x',
    asymptote: 'Horizontal Asymptote: y = 0 for both',
    yIntercept: 'f(0) = 2  vs  g(0) = 6',
    directionIcon: <Sparkles className="w-4 h-4 text-indigo-600" />,
    badgeColor: 'bg-indigo-50 text-indigo-800 border-indigo-200',
    summary: 'Increasing a from 2 to 6 scales all heights by ×3, raising the y-intercept from 2 to 6. The base growth multiplier remains b = 2 (same doubling rate).',
    parentEquation: 'f(x) = 2(2)^x  (y-int = 2)',
    transformedEquation: 'g(x) = 6(2)^x  (y-int = 6, vertically stretched)',
    keyProperties: {
      baseCondition: 'Same base b = 2 for both functions',
      asymptoteLine: 'y = 0 for both functions',
      yInterceptPoint: 'f(0) = (0, 2), g(0) = (0, 6)',
      behavior: 'g is 3× taller at every corresponding x value'
    },
    diagram: {
      title: 'Vertical Scaling: f(x) = 2(2)^x vs g(x) = 6(2)^x',
      caption: 'Both share the same doubling factor (b = 2), but g(x) has a 3× higher starting value.',
      xAxisLabel: 'x',
      yAxisLabel: 'y',
      xRange: [0, 4],
      yRange: [0, 50],
      xStep: 1,
      yStep: 10,
      curves: [
        {
          type: 'function',
          fnType: 'exponential',
          label: 'f(x) = 2(2)^x (a = 2)',
          expression: '2*(2**x)',
          color: '#3b82f6',
          points: [[0, 2], [1, 4], [2, 8], [3, 16], [4, 32]],
          strokeWidth: 2.2
        },
        {
          type: 'function',
          fnType: 'exponential',
          label: 'g(x) = 6(2)^x (a = 6)',
          expression: '6*(2**x)',
          color: '#8b5cf6',
          points: [[0, 6], [1, 12], [2, 24], [3, 48]],
          strokeWidth: 2.5
        },
        {
          type: 'points',
          label: 'y-intercepts',
          color: '#ec4899',
          points: [[0, 2], [0, 6]]
        }
      ]
    }
  },
  {
    id: 'exp-negative-a',
    category: 'scale',
    title: '6. Negative Scale Factor (a < 0 Reflection)',
    algebraicForm: 'f(x) = -3(2)^x  where a = -3, b = 2',
    asymptote: 'Horizontal Asymptote: y = 0',
    yIntercept: 'Y-Intercept: (0, -3)',
    directionIcon: <RotateCcw className="w-4 h-4 text-violet-600" />,
    badgeColor: 'bg-violet-50 text-violet-800 border-violet-200',
    summary: 'When a is negative, the entire graph reflects across the horizontal asymptote into negative y territory. As x increases, values become more negative (-3, -6, -12).',
    parentEquation: 'f(x) = 3(2)^x  (Positive curve above x-axis)',
    transformedEquation: 'g(x) = -3(2)^x  (Reflected curve below x-axis)',
    keyProperties: {
      baseCondition: 'b = 2 > 1 (Exponential growth in magnitude)',
      asymptoteLine: 'y = 0 (Approaches from below as x ⟶ -∞)',
      yInterceptPoint: '(0, -3)',
      behavior: 'Decreasing downward into negative numbers'
    },
    diagram: {
      title: 'Reflection: f(x) = 3(2)^x vs g(x) = -3(2)^x',
      caption: 'Negative a = -3 reflects the exponential curve across the x-axis.',
      xAxisLabel: 'x',
      yAxisLabel: 'y',
      xRange: [-2, 3],
      yRange: [-26, 26],
      xStep: 1,
      yStep: 6,
      curves: [
        {
          type: 'line',
          label: 'Asymptote y = 0',
          color: '#94a3b8',
          points: [[-2, 0], [3, 0]],
          strokeWidth: 1.5,
          style: 'dashed'
        },
        {
          type: 'function',
          fnType: 'exponential',
          label: 'f(x) = 3(2)^x (Positive)',
          expression: '3*(2**x)',
          color: '#38bdf8',
          points: [[-1, 1.5], [0, 3], [1, 6], [2, 12], [3, 24]],
          strokeWidth: 1.8,
          style: 'dashed'
        },
        {
          type: 'function',
          fnType: 'exponential',
          label: 'g(x) = -3(2)^x (Negative a)',
          expression: '-3*(2**x)',
          color: '#a855f7',
          points: [[-1, -1.5], [0, -3], [1, -6], [2, -12], [3, -24]],
          strokeWidth: 2.5
        },
        {
          type: 'points',
          label: 'y-intercept (0, -3)',
          color: '#7e22ce',
          points: [[0, -3]]
        }
      ]
    }
  },
  {
    id: 'exp-compare-growth-speeds',
    category: 'comparisons',
    title: '7. Comparing Growth Speeds (Larger Base b)',
    algebraicForm: 'f(x) = 5(2)^x  vs  g(x) = 5(4)^x',
    asymptote: 'Horizontal Asymptote: y = 0 for both',
    yIntercept: '(0, 5) for both',
    directionIcon: <Zap className="w-4 h-4 text-amber-600" />,
    badgeColor: 'bg-amber-50 text-amber-800 border-amber-200',
    summary: 'For exponential growth (b > 1), a larger base multiplier produces much faster, steeper growth. Base 4 quadruples every step while Base 2 only doubles.',
    parentEquation: 'f(x) = 5(2)^x  (Base 2: Doubles)',
    transformedEquation: 'g(x) = 5(4)^x  (Base 4: Quadruples — much steeper)',
    keyProperties: {
      baseCondition: 'b = 4 vs b = 2 (4 > 2)',
      asymptoteLine: 'y = 0 for both',
      yInterceptPoint: 'Both start at (0, 5)',
      behavior: 'At x = 3: f(3) = 40, while g(3) = 320 (8× higher!)'
    },
    diagram: {
      title: 'Growth Rate Comparison: Base 2 vs Base 4',
      caption: 'Higher base b = 4 accelerates far faster than b = 2 despite identical initial values.',
      xAxisLabel: 'x',
      yAxisLabel: 'y',
      xRange: [0, 4],
      yRange: [0, 350],
      xStep: 1,
      yStep: 50,
      curves: [
        {
          type: 'function',
          fnType: 'exponential',
          label: 'f(x) = 5(2)^x (Base 2)',
          expression: '5*(2**x)',
          color: '#3b82f6',
          points: [[0, 5], [1, 10], [2, 20], [3, 40], [4, 80]],
          strokeWidth: 2.2
        },
        {
          type: 'function',
          fnType: 'exponential',
          label: 'g(x) = 5(4)^x (Base 4 - Faster)',
          expression: '5*(4**x)',
          color: '#e11d48',
          points: [[0, 5], [1, 20], [2, 80], [3, 320]],
          strokeWidth: 2.5
        }
      ]
    }
  },
  {
    id: 'exp-compare-decay-speeds',
    category: 'comparisons',
    title: '8. Comparing Decay Speeds (Smaller Positive Base)',
    algebraicForm: 'f(x) = 10(0.8)^x  vs  g(x) = 10(0.3)^x',
    asymptote: 'Horizontal Asymptote: y = 0 for both',
    yIntercept: '(0, 10) for both',
    directionIcon: <TrendingDown className="w-4 h-4 text-teal-600" />,
    badgeColor: 'bg-teal-50 text-teal-800 border-teal-200',
    summary: 'For exponential decay (0 < b < 1), a SMALLER positive base means FASTER decay. Multiplying by 0.3 leaves only 30%, dropping to zero much faster than 0.8 (retaining 80%).',
    parentEquation: 'f(x) = 10(0.8)^x  (Slow Decay: Loses 20% each step)',
    transformedEquation: 'g(x) = 10(0.3)^x  (Fast Decay: Loses 70% each step)',
    keyProperties: {
      baseCondition: 'b = 0.3 < 0.8 (Smaller fraction = Faster decay)',
      asymptoteLine: 'y = 0 for both',
      yInterceptPoint: 'Both start at (0, 10)',
      behavior: 'g drops almost immediately to near zero'
    },
    diagram: {
      title: 'Decay Rate Comparison: b = 0.8 vs b = 0.3',
      caption: 'Smaller base b = 0.3 causes rapid decay; b = 0.8 decays gradually.',
      xAxisLabel: 'x',
      yAxisLabel: 'y',
      xRange: [0, 6],
      yRange: [0, 12],
      xStep: 1,
      yStep: 2,
      curves: [
        {
          type: 'function',
          fnType: 'exponential',
          label: 'f(x) = 10(0.8)^x (Slow Decay)',
          expression: '10*(0.8**x)',
          color: '#0d9488',
          points: [[0, 10], [1, 8], [2, 6.4], [3, 5.12], [4, 4.1], [5, 3.28]],
          strokeWidth: 2.2
        },
        {
          type: 'function',
          fnType: 'exponential',
          label: 'g(x) = 10(0.3)^x (Fast Decay)',
          expression: '10*(0.3**x)',
          color: '#f97316',
          points: [[0, 10], [1, 3], [2, 0.9], [3, 0.27], [4, 0.08]],
          strokeWidth: 2.5
        }
      ]
    }
  }
];

export const SatMathExponentialMockAtlas: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedCaseId, setSelectedCaseId] = useState<string>(EXPONENTIAL_MOCK_CASES[0].id);

  const filteredCases = EXPONENTIAL_MOCK_CASES.filter(c =>
    selectedCategory === 'all' ? true : c.category === selectedCategory
  );

  const activeCase = EXPONENTIAL_MOCK_CASES.find(c => c.id === selectedCaseId) || EXPONENTIAL_MOCK_CASES[0];

  return (
    <div className="bg-white border border-slate-200 rounded-3xl p-5 sm:p-7 shadow-xs text-slate-900 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-5">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-indigo-50 border border-indigo-200 text-indigo-700">
              <Compass className="w-5 h-5" />
            </div>
            <h3 className="text-lg sm:text-xl font-black text-slate-950 tracking-tight">
              Exponential Functions: Graph Conditions & Transformations Atlas
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed max-w-3xl">
            Explore how the base multiplier <code className="text-amber-800 font-mono bg-amber-50 px-1 rounded">b</code>, initial scale factor <code className="text-emerald-800 font-mono bg-emerald-50 px-1 rounded">a</code>, and vertical shift <code className="text-sky-800 font-mono bg-sky-50 px-1 rounded">k</code> dictate the curve shape, direction, y-intercept <code className="text-purple-800 font-mono bg-purple-50 px-1 rounded">(0, a + k)</code>, and horizontal asymptote <code className="text-rose-800 font-mono bg-rose-50 px-1 rounded">y = k</code>.
          </p>
        </div>

        <div className="flex items-center gap-2 self-start sm:self-auto">
          <span className="px-3 py-1 rounded-full text-xs font-black bg-indigo-50 text-indigo-700 border border-indigo-200">
            {EXPONENTIAL_MOCK_CASES.length} Core Visual Conditions
          </span>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2">
        {[
          { id: 'all', label: 'All Conditions', count: EXPONENTIAL_MOCK_CASES.length },
          { id: 'growth-decay', label: 'Growth vs. Decay', count: 2 },
          { id: 'shifts', label: 'Vertical Shifts & Asymptotes', count: 2 },
          { id: 'scale', label: 'Scale Factor a & Reflections', count: 2 },
          { id: 'comparisons', label: 'Speed Comparisons', count: 2 }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setSelectedCategory(tab.id)}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
              selectedCategory === tab.id
                ? 'bg-indigo-600 text-white shadow-xs border border-indigo-600'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
            }`}
          >
            <span>{tab.label}</span>
            <span
              className={`text-[10px] px-1.5 py-0.2 rounded-full font-black ${
                selectedCategory === tab.id
                  ? 'bg-indigo-700 text-indigo-100'
                  : 'bg-slate-200 text-slate-700'
              }`}
            >
              {tab.count}
            </span>
          </button>
        ))}
      </div>

      {/* Main Interactive Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: List of Condition Cards */}
        <div className="lg:col-span-5 space-y-2.5 max-h-[580px] overflow-y-auto pr-1 custom-scrollbar">
          {filteredCases.map(item => {
            const isSelected = item.id === activeCase.id;
            return (
              <motion.button
                key={item.id}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                onClick={() => setSelectedCaseId(item.id)}
                className={`w-full text-left p-3.5 rounded-2xl border transition-all flex items-start gap-3 cursor-pointer ${
                  isSelected
                    ? 'bg-indigo-50/90 border-indigo-300 shadow-xs ring-2 ring-indigo-500/20 text-slate-900'
                    : 'bg-slate-50/70 border-slate-200 hover:bg-slate-100 hover:border-slate-300 text-slate-800'
                }`}
              >
                <div className="p-2 rounded-xl bg-white border border-slate-200 shrink-0 mt-0.5 shadow-2xs">
                  {item.directionIcon}
                </div>

                <div className="flex-1 min-w-0 space-y-1">
                  <div className="flex items-center justify-between gap-2">
                    <span className={`text-xs font-black truncate ${isSelected ? 'text-indigo-950' : 'text-slate-900'}`}>
                      {item.title}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200 shrink-0 font-bold">
                      {item.asymptote.split(':')[1]?.trim() || 'y = 0'}
                    </span>
                  </div>
                  <div className="text-[11px] font-mono text-indigo-700 font-extrabold truncate">
                    {item.algebraicForm}
                  </div>
                  <div className="text-[11px] text-slate-500 font-medium line-clamp-1">
                    {item.summary}
                  </div>
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Right Column: Detailed Graphic & Properties Viewer */}
        <div className="lg:col-span-7 bg-slate-50/80 border border-slate-200 rounded-2xl p-5 space-y-5">
          {/* Active Title & Badges */}
          <div className="space-y-2 border-b border-slate-200 pb-4">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <span className="text-xs font-black uppercase tracking-wider text-indigo-700 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                Active Visual Demonstration
              </span>
              <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${activeCase.badgeColor}`}>
                {activeCase.yIntercept}
              </span>
            </div>

            <h4 className="text-base sm:text-lg font-black text-slate-950">
              {activeCase.title}
            </h4>

            <div className="p-2.5 rounded-xl bg-indigo-50/80 border border-indigo-200 flex items-center justify-between flex-wrap gap-2 text-xs">
              <span className="font-mono text-amber-900 font-bold">
                {activeCase.algebraicForm}
              </span>
              <span className="font-mono text-rose-800 font-bold">
                {activeCase.asymptote}
              </span>
            </div>
          </div>

          {/* Graph Display */}
          <div className="bg-white rounded-2xl p-2 border border-slate-200 shadow-2xs flex flex-col items-center justify-center">
            <SatMathGraph diagram={activeCase.diagram} />
          </div>

          {/* Analytical Properties Matrix */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-1">
              <span className="text-[10px] font-black uppercase text-indigo-700 tracking-wider">
                Base Condition & Multiplier
              </span>
              <div className="font-bold text-slate-900">
                {activeCase.keyProperties.baseCondition}
              </div>
            </div>

            <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-1">
              <span className="text-[10px] font-black uppercase text-rose-700 tracking-wider">
                Horizontal Asymptote
              </span>
              <div className="font-bold text-slate-900">
                {activeCase.keyProperties.asymptoteLine}
              </div>
            </div>

            <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-1">
              <span className="text-[10px] font-black uppercase text-emerald-700 tracking-wider">
                Y-Intercept Point (x = 0)
              </span>
              <div className="font-bold text-slate-900">
                {activeCase.keyProperties.yInterceptPoint}
              </div>
            </div>

            <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-1">
              <span className="text-[10px] font-black uppercase text-amber-700 tracking-wider">
                Geometric Behavior
              </span>
              <div className="font-bold text-slate-900">
                {activeCase.keyProperties.behavior}
              </div>
            </div>
          </div>

          {/* SAT Master Tip */}
          <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-950 text-xs flex items-start gap-2.5">
            <Info className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <div className="space-y-0.5">
              <span className="font-black text-amber-900">SAT Master Rule:</span>
              <p className="leading-relaxed text-amber-900/90 font-medium">
                For any transformed exponential equation <code className="font-mono text-amber-950 font-bold bg-amber-100/80 px-1 rounded">f(x) = a(b)^x + k</code>, the horizontal asymptote is <strong className="text-amber-950 font-mono">y = k</strong> and the y-intercept is <strong className="text-amber-950 font-mono">(0, a + k)</strong>. The base <strong className="text-amber-950 font-mono">b</strong> dictates growth vs. decay, NEVER parameter <strong className="text-amber-950 font-mono">a</strong>!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
