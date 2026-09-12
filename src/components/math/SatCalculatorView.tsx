import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Calculator as CalcIcon, 
  Trash2, 
  X,
  Clock,
  HelpCircle,
  ToggleLeft,
  ToggleRight,
  Sparkles
} from 'lucide-react';
import { MathParser } from '../../utils/mathParser';

// Core mathjs is imported and initialized inside MathParser, but we also create a local instance for exact fraction representations.
import { create, all } from 'mathjs';
const math = create(all);

interface CalculatorState {
  formula: string;
  result: string;
  history: string[];
  angleMode: 'DEG' | 'RAD';
  exactMode: boolean; // exact simplified fraction vs standard decimal
  memoryValue: number; // For MC, MR, MS, M+, M-
}

const DEFAULT_STATE: CalculatorState = {
  formula: '',
  result: '',
  history: ['2/3 + 1/4 = 11/12', 'sin(30) = 0.5', 'log(100) = 2', 'sqrt(144) = 12'],
  angleMode: 'DEG',
  exactMode: false,
  memoryValue: 0,
};

export const SatCalculatorView: React.FC<{ onClose?: () => void; inline?: boolean }> = ({ onClose, inline = false }) => {
  const [state, setState] = useState<CalculatorState>(() => {
    try {
      const saved = localStorage.getItem('uni_route_sat_calculator_scientific_state');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.formula !== undefined) {
          return parsed;
        }
      }
    } catch (e) {
      console.error(e);
    }
    return DEFAULT_STATE;
  });

  // Save state on change
  useEffect(() => {
    localStorage.setItem('uni_route_sat_calculator_scientific_state', JSON.stringify(state));
  }, [state]);

  const [showHelp, setShowHelp] = useState(false);

  // Helper formatting function for display results (exact vs decimal)
  const formatResult = (valStr: string, exact: boolean): string => {
    if (!valStr || valStr === 'Error' || valStr === 'Invalid Expression') return valStr;
    const val = parseFloat(valStr);
    if (isNaN(val) || !isFinite(val)) return valStr;

    if (exact) {
      try {
        const frac = math.fraction(val);
        const ratio = math.format(frac, { fraction: 'ratio' });
        // Ensure ratio is valid and doesn't represent extremely large numbers from irrational values
        if (ratio.includes('/') && ratio.length < 15) {
          return ratio;
        }
      } catch (e) {
        // Fallback to decimal if conversion fails
      }
    }

    // Default Decimal mode formatting
    if (Math.abs(val) > 1e9 || (Math.abs(val) > 0 && Math.abs(val) < 1e-6)) {
      return val.toExponential(4);
    }
    // Limit to 8 decimals and remove trailing zeros
    return Number(val.toFixed(8)).toString();
  };

  // Evaluate the expression string safely
  const calculateResult = (formulaStr: string, angleMode: 'DEG' | 'RAD'): string => {
    if (!formulaStr.trim()) return '';
    try {
      // Replace custom readable representations with standard function strings for mathjs evaluation
      let str = formulaStr;
      
      // Map visual operator buttons to parser syntax
      str = str.replace(/×/g, '*');
      str = str.replace(/÷/g, '/');
      str = str.replace(/π/g, 'pi');
      str = str.replace(/√\(/g, 'sqrt(');
      
      const cleanExpr = MathParser.sanitize(str).clean;
      const parsed = MathParser.parse(cleanExpr, '#000');
      const evaluated = MathParser.evaluate(parsed, 0, {}, angleMode);

      if (isNaN(evaluated)) {
        return 'Error';
      }
      return evaluated.toString();
    } catch (e) {
      return 'Error';
    }
  };

  const handleScientificKey = (key: string) => {
    setState((prev) => {
      let formula = prev.formula;
      let result = prev.result;
      let history = [...prev.history];
      let memory = prev.memoryValue;

      // CLEAR ALL
      if (key === 'C') {
        formula = '';
        result = '';
      } 
      // BACKSPACE (SMART DELETION)
      else if (key === '⌫') {
        // If it ends with common function names, delete the entire word
        const words = ['sin(', 'cos(', 'tan(', 'asin(', 'acos(', 'atan(', 'log(', 'ln(', 'sqrt(', 'abs('];
        let foundWord = false;
        for (const w of words) {
          if (formula.endsWith(w)) {
            formula = formula.slice(0, -w.length);
            foundWord = true;
            break;
          }
        }
        if (!foundWord) {
          formula = formula.slice(0, -1);
        }
      } 
      // EVALUATION
      else if (key === '=') {
        if (!formula.trim()) return prev;
        const rawRes = calculateResult(formula, prev.angleMode);
        if (rawRes === 'Error') {
          result = 'Error';
        } else {
          result = rawRes;
          const formattedRes = formatResult(rawRes, prev.exactMode);
          const historyEntry = `${formula} = ${formattedRes}`;
          if (!history.includes(historyEntry)) {
            history = [historyEntry, ...history.slice(0, 24)];
          }
        }
      } 
      // MEMORY FUNCTIONS
      else if (key === 'MC') {
        memory = 0;
      } else if (key === 'MR') {
        formula += memory.toString();
      } else if (key === 'MS') {
        const rawRes = calculateResult(formula || '0', prev.angleMode);
        if (rawRes !== 'Error' && rawRes !== '') {
          memory = parseFloat(rawRes);
          result = rawRes;
        }
      } else if (key === 'M+') {
        const rawRes = calculateResult(formula || '0', prev.angleMode);
        if (rawRes !== 'Error' && rawRes !== '') {
          memory += parseFloat(rawRes);
          result = rawRes;
        }
      } else if (key === 'M-') {
        const rawRes = calculateResult(formula || '0', prev.angleMode);
        if (rawRes !== 'Error' && rawRes !== '') {
          memory -= parseFloat(rawRes);
          result = rawRes;
        }
      }
      // SIGN INVERT
      else if (key === '±') {
        const rawRes = calculateResult(formula || '0', prev.angleMode);
        if (rawRes !== 'Error' && rawRes !== '') {
          const inverted = (-parseFloat(rawRes)).toString();
          formula = inverted;
          result = inverted;
        }
      }
      // SCIENTIFIC EXPONENT SHIFT (EXP button)
      else if (key === 'EXP') {
        formula += '*10^';
      }
      // FRACTION HELPER BUTTON
      else if (key === 'a/b') {
        formula += '/';
      }
      // NORMAL CHARACTER INPUT
      else {
        formula += key;
      }

      return {
        ...prev,
        formula,
        result,
        history,
        memoryValue: memory,
      };
    });
  };

  const toggleAngleMode = () => {
    setState((prev) => {
      const nextAngle = prev.angleMode === 'DEG' ? 'RAD' : 'DEG';
      // Re-evaluate current expression with the new angle mode
      const rawRes = calculateResult(prev.formula, nextAngle);
      return {
        ...prev,
        angleMode: nextAngle,
        result: rawRes,
      };
    });
  };

  const toggleExactMode = () => {
    setState((prev) => ({
      ...prev,
      exactMode: !prev.exactMode,
    }));
  };

  const handleClearHistory = () => {
    setState((prev) => ({ ...prev, history: [] }));
  };

  const selectHistoryItem = (item: string) => {
    const parts = item.split(' = ');
    setState((prev) => ({
      ...prev,
      formula: parts[0],
      result: '',
    }));
  };

  return (
    <div className={`flex flex-col bg-white border border-slate-200 shadow-2xl overflow-hidden ${
      inline ? 'rounded-2xl h-[620px] w-full' : 'fixed inset-4 sm:inset-10 md:inset-16 z-[100] rounded-[24px]'
    }`}>
      {/* HEADER PANEL */}
      <div className="flex items-center justify-between px-5 py-4 bg-slate-50 border-b border-slate-100 flex-shrink-0">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-indigo-50 border border-indigo-100 rounded-xl">
            <CalcIcon className="w-5 h-5 text-indigo-600 animate-pulse" />
          </div>
          <div>
            <h1 className="text-base font-black text-slate-900 leading-none">SAT Scientific Calculator</h1>
            <p className="text-[10px] text-slate-500 font-bold mt-1 uppercase tracking-wider flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-indigo-500" /> High-Precision Math.js Engine
            </p>
          </div>
        </div>

        {/* CONTROLS */}
        <div className="flex items-center gap-2">
          {/* Angle Mode toggler */}
          <button
            onClick={toggleAngleMode}
            className="px-2.5 py-1.5 rounded-lg bg-indigo-50 border border-indigo-100 hover:bg-indigo-100 text-indigo-700 text-[10px] font-black tracking-wider cursor-pointer shadow-3xs transition-colors"
            title="Toggle Degrees vs Radians Angle Mode"
          >
            {state.angleMode}
          </button>

          {/* Exact vs Decimal Toggle */}
          <button
            onClick={toggleExactMode}
            className={`px-2.5 py-1.5 rounded-lg border text-[10px] font-black tracking-wider cursor-pointer shadow-3xs transition-all flex items-center gap-1.5 ${
              state.exactMode 
                ? 'bg-emerald-50 text-emerald-700 border-emerald-200' 
                : 'bg-slate-100 text-slate-600 border-slate-200'
            }`}
            title="Exact Fraction output mode vs standard Decimal output"
          >
            {state.exactMode ? 'EXACT a/b' : 'DECIMAL 0.00'}
          </button>

          {/* Help Button */}
          <button
            onClick={() => setShowHelp(!showHelp)}
            className={`p-1.5 rounded-lg border transition-colors cursor-pointer ${
              showHelp ? 'bg-indigo-50 border-indigo-200 text-indigo-700' : 'bg-slate-100 text-slate-500 border-slate-200 hover:text-slate-800'
            }`}
            title="Calculator Help Instructions"
          >
            <HelpCircle className="w-4 h-4" />
          </button>

          {/* Close Button */}
          {onClose && (
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-slate-200 text-slate-500 hover:text-slate-800 transition-all cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>

      {/* BODY COLUMN GRID */}
      <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
        {/* HELP OVERLAY (IF OPENED) */}
        <AnimatePresence>
          {showHelp && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="bg-indigo-50/90 border-b border-indigo-100 text-indigo-950 p-4 text-xs font-medium overflow-hidden space-y-2 flex-shrink-0"
            >
              <p className="font-black text-indigo-900">🎓 SAT Scientific Calculation Guide:</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1 list-disc pl-4 text-indigo-900/90">
                <li><strong>Trig Functions:</strong> Supports standard functions (e.g. <code>sin(30)</code> or <code>tan(45)</code>).</li>
                <li><strong>Inverse Trig:</strong> Use <code>asin</code>, <code>acos</code>, or <code>atan</code> (e.g. <code>asin(0.5)</code>).</li>
                <li><strong>Degree/Radian Modes:</strong> Switch modes at the top right to alter trig outputs.</li>
                <li><strong>Logs:</strong> Use <code>log(x)</code> for base-10 or <code>ln(x)</code> for natural log.</li>
                <li><strong>Exact Toggle:</strong> Active <strong>EXACT</strong> mode attempts to translate decimal outputs into simplified fractions.</li>
                <li><strong>Memory Store:</strong> Write a formula, then click <code>MS</code> to store the evaluated value.</li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>

        {/* MAIN SCREENS COLUMN */}
        <div className="flex-1 flex flex-col bg-slate-50 p-4 sm:p-6 space-y-4 justify-between overflow-y-auto">
          
          {/* HIGH-END DISPLAY SCREEN */}
          <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-sm text-right font-mono flex flex-col justify-end min-h-[110px] relative overflow-hidden">
            {/* Memory Indicator */}
            {state.memoryValue !== 0 && (
              <span className="absolute top-3 left-4 px-2 py-0.5 rounded-md bg-amber-50 text-amber-700 text-[10px] font-black border border-amber-200">
                M = {Number(state.memoryValue.toFixed(4)).toString()}
              </span>
            )}

            {/* Formula Line */}
            <div className="text-slate-400 text-xs sm:text-sm font-bold tracking-wide truncate h-6">
              {state.formula || '0'}
            </div>

            {/* Result Line */}
            <div className="text-2xl sm:text-3xl font-black text-slate-900 mt-2 truncate flex items-center justify-end gap-2">
              {state.result ? (
                <>
                  <span className="text-slate-400 text-lg font-bold">=</span>
                  <span>{formatResult(state.result, state.exactMode)}</span>
                </>
              ) : (
                <span className="text-slate-300">0</span>
              )}
            </div>
          </div>

          {/* KEYBOARD TOUCH GRID */}
          <div className="grid grid-cols-5 gap-1.5 sm:gap-2">
            {/* ROW 1: MEMORY KEYS */}
            {['MC', 'MR', 'MS', 'M+', 'M-'].map((mKey) => (
              <button
                key={mKey}
                onClick={() => handleScientificKey(mKey)}
                className="py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200/80 font-bold text-xs cursor-pointer shadow-3xs transition-all active:scale-95"
              >
                {mKey}
              </button>
            ))}

            {/* ROW 2: TRIGONOMETRIC KEYS */}
            {['sin', 'cos', 'tan', 'asin', 'acos'].map((fn) => (
              <button
                key={fn}
                onClick={() => handleScientificKey(fn + '(')}
                className="py-2.5 rounded-xl bg-indigo-50/50 hover:bg-indigo-50 text-indigo-700 border border-indigo-100/80 font-mono text-xs font-black cursor-pointer shadow-3xs transition-all active:scale-95"
              >
                {fn}
              </button>
            ))}

            {/* ROW 3: MATH OPERATIONS / FUNCTIONS */}
            {['atan', 'log', 'ln', 'sqrt', 'a/b'].map((fn) => {
              let label = fn;
              if (fn === 'sqrt') label = '√';
              if (fn === 'a/b') label = 'a/b';
              return (
                <button
                  key={fn}
                  onClick={() => handleScientificKey(fn === 'a/b' ? 'a/b' : fn === 'sqrt' ? 'sqrt(' : fn + '(')}
                  className="py-2.5 rounded-xl bg-indigo-50/50 hover:bg-indigo-50 text-indigo-700 border border-indigo-100/80 font-mono text-xs font-black cursor-pointer shadow-3xs transition-all active:scale-95"
                >
                  {label}
                </button>
              );
            })}

            {/* ROW 4: SCIENTIFIC PARAMS & EXP */}
            {['(', ')', '^', 'pi', 'e'].map((fn) => (
              <button
                key={fn}
                onClick={() => handleScientificKey(fn === 'pi' || fn === 'e' ? fn : fn)}
                className="py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200/80 font-mono text-xs font-bold cursor-pointer shadow-3xs transition-all active:scale-95"
              >
                {fn === 'pi' ? 'π' : fn}
              </button>
            ))}

            {/* ROW 5: SPECIAL HELPER ACTIONS & TOP CONTROLS */}
            {['x²', 'EXP', '±', '⌫', 'C'].map((fn) => {
              let label = fn;
              let act = fn;
              if (fn === 'x²') act = '^2';
              return (
                <button
                  key={fn}
                  onClick={() => handleScientificKey(act)}
                  className={`py-3 rounded-xl border font-black text-xs cursor-pointer shadow-3xs transition-all active:scale-95 ${
                    fn === 'C' 
                      ? 'bg-rose-50 hover:bg-rose-100 text-rose-700 border-rose-200' 
                      : fn === '⌫' 
                      ? 'bg-amber-50 hover:bg-amber-100 text-amber-700 border-amber-200'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-200'
                  }`}
                >
                  {label}
                </button>
              );
            })}

            {/* STANDARD NUMPAD ROWS (GRID DECORATOR) */}
            {/* ROW 6: 7, 8, 9, ÷, (EMPTY) */}
            {['7', '8', '9', '÷'].map((char) => {
              const action = char === '÷' ? '/' : char;
              return (
                <button
                  key={char}
                  onClick={() => handleScientificKey(action)}
                  className={`py-3.5 text-sm font-black rounded-xl border cursor-pointer shadow-3xs transition-all active:scale-95 ${
                    char === '÷' ? 'bg-indigo-600 hover:bg-indigo-700 text-white border-indigo-700 font-extrabold' : 'bg-white hover:bg-slate-100 text-slate-900 border-slate-200'
                  }`}
                >
                  {char}
                </button>
              );
            })}
            <div className="bg-slate-100/30 border border-slate-100 rounded-xl" />

            {/* ROW 7: 4, 5, 6, ×, (EMPTY) */}
            {['4', '5', '6', '×'].map((char) => {
              const action = char === '×' ? '*' : char;
              return (
                <button
                  key={char}
                  onClick={() => handleScientificKey(action)}
                  className={`py-3.5 text-sm font-black rounded-xl border cursor-pointer shadow-3xs transition-all active:scale-95 ${
                    char === '×' ? 'bg-indigo-600 hover:bg-indigo-700 text-white border-indigo-700 font-extrabold' : 'bg-white hover:bg-slate-100 text-slate-900 border-slate-200'
                  }`}
                >
                  {char}
                </button>
              );
            })}
            <div className="bg-slate-100/30 border border-slate-100 rounded-xl" />

            {/* ROW 8: 1, 2, 3, −, (EMPTY) */}
            {['1', '2', '3', '−'].map((char) => {
              const action = char === '−' ? '-' : char;
              return (
                <button
                  key={char}
                  onClick={() => handleScientificKey(action)}
                  className={`py-3.5 text-sm font-black rounded-xl border cursor-pointer shadow-3xs transition-all active:scale-95 ${
                    char === '−' ? 'bg-indigo-600 hover:bg-indigo-700 text-white border-indigo-700 font-extrabold' : 'bg-white hover:bg-slate-100 text-slate-900 border-slate-200'
                  }`}
                >
                  {char}
                </button>
              );
            })}
            <div className="bg-slate-100/30 border border-slate-100 rounded-xl" />

            {/* ROW 9: 0, ., +, =, (EMPTY) */}
            {['0', '.', '+', '='].map((char) => {
              return (
                <button
                  key={char}
                  onClick={() => handleScientificKey(char)}
                  className={`py-3.5 text-sm font-black rounded-xl border cursor-pointer shadow-3xs transition-all active:scale-95 ${
                    char === '=' 
                      ? 'bg-emerald-600 hover:bg-emerald-700 text-white border-emerald-700 col-span-2' 
                      : char === '+' 
                      ? 'bg-indigo-600 hover:bg-indigo-700 text-white border-indigo-700' 
                      : 'bg-white hover:bg-slate-100 text-slate-900 border-slate-200'
                  }`}
                >
                  {char === '=' ? 'Evaluate =' : char}
                </button>
              );
            })}
          </div>

        </div>

        {/* RIGHT PANEL: DESKTOP HISTORIC LOG */}
        <div className="w-full md:w-[260px] border-l border-slate-200 bg-white flex flex-col p-4 flex-shrink-0">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3 flex-shrink-0">
            <span className="text-xs font-extrabold text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-slate-400" /> History
            </span>
            {state.history.length > 0 && (
              <button
                onClick={handleClearHistory}
                className="text-[10px] font-bold text-rose-500 hover:text-rose-700 hover:underline cursor-pointer"
              >
                Clear
              </button>
            )}
          </div>

          <div className="flex-grow overflow-y-auto space-y-2.5 max-h-[140px] md:max-h-none">
            {state.history.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-xs text-slate-400 font-bold">No recent history</p>
                <p className="text-[10px] text-slate-300 font-medium mt-1">Evaluations appear here</p>
              </div>
            ) : (
              state.history.map((item, index) => {
                const parts = item.split(' = ');
                return (
                  <div 
                    key={index} 
                    className="p-2 bg-slate-50/50 hover:bg-slate-50 rounded-lg border border-slate-100 font-mono text-[11px] text-right text-slate-700 transition-all cursor-pointer group hover:border-indigo-200" 
                    onClick={() => selectHistoryItem(item)}
                    title="Click to load formula back into display"
                  >
                    <div className="text-[10px] text-slate-400 font-medium truncate group-hover:text-indigo-900">{parts[0]}</div>
                    <div className="text-xs text-indigo-700 font-black truncate mt-0.5">= {parts[1]}</div>
                  </div>
                );
              })
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
