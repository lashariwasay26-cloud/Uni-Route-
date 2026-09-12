import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BookOpen, 
  Code, 
  CheckCircle2, 
  XCircle, 
  Compass, 
  HelpCircle, 
  Sliders, 
  TrendingUp, 
  Layers, 
  Terminal, 
  Cpu, 
  BarChart4, 
  Activity, 
  AlertCircle, 
  Sparkles, 
  ChevronRight, 
  RefreshCw, 
  Info,
  Check,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

export const SatMathStatisticsChapter: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'foundations' | 'breakdowns' | 'diagrams' | 'plots' | 'exercises'>('foundations');
  const [plotTab, setPlotTab] = useState<'dist' | 'bar' | 'heatmap'>('dist');

  // Exercise states
  const [ex1Answer, setEx1Answer] = useState<number | null>(null);
  const [ex1Submitted, setEx1Submitted] = useState<boolean>(false);

  const [ex2Answer, setEx2Answer] = useState<number | null>(null);
  const [ex2Submitted, setEx2Submitted] = useState<boolean>(false);

  const [ex3Answer, setEx3Answer] = useState<number | null>(null);
  const [ex3Submitted, setEx3Submitted] = useState<boolean>(false);

  // Active section for Topical Breakdowns
  const [breakdownSection, setBreakdownSection] = useState<'eda' | 'confidence' | 'parametric' | 'nonparametric' | 'categorical'>('eda');

  // Interactive slider values for simulated plots
  const [skewValue, setSkewValue] = useState<number>(0); // -2 to 2 (skewness indicator)
  const [confidenceLevel, setConfidenceLevel] = useState<number>(95); // 90, 95, 99

  return (
    <div id="statistics-master-chapter" className="space-y-8 pb-16 text-slate-900">
      
      {/* Premium Hero Banner */}
      <div className="bg-gradient-to-br from-slate-900 to-indigo-950 text-white rounded-3xl p-6 sm:p-10 relative overflow-hidden shadow-xl border border-slate-800">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full -mr-20 -mt-20 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/10 rounded-full -ml-20 -mb-20 pointer-events-none" />
        
        <div className="space-y-4 max-w-2xl relative z-10 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 text-[10px] font-black uppercase tracking-wider">
            <Cpu className="w-3.5 h-3.5 text-indigo-400 animate-pulse" />
            STEM Bridge & Data Science Elite
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
            Statistics 1: <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-200 to-white">
              Descriptive & Inferential Foundations in Pandas
            </span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
            Master-level reference handbook and textbook chapter. Deep dive into statistical mathematics, 
            parametric & non-parametric hypothesis testing, categorical analysis, and the Python scientific stack.
          </p>
        </div>
      </div>

      {/* Chapter Section Tabs */}
      <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100 rounded-2xl border border-slate-200/80 text-xs font-black shadow-xs">
        <button
          onClick={() => setActiveTab('foundations')}
          className={`flex-1 min-w-[120px] py-2.5 px-3 rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
            activeTab === 'foundations' ? 'bg-white text-indigo-900 shadow-sm' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
          }`}
        >
          <Compass className="w-4 h-4" />
          <span>1. Foundations</span>
        </button>
        <button
          onClick={() => setActiveTab('breakdowns')}
          className={`flex-1 min-w-[120px] py-2.5 px-3 rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
            activeTab === 'breakdowns' ? 'bg-white text-indigo-900 shadow-sm' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
          }`}
        >
          <Code className="w-4 h-4" />
          <span>2. Topical Codes</span>
        </button>
        <button
          onClick={() => setActiveTab('diagrams')}
          className={`flex-1 min-w-[120px] py-2.5 px-3 rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
            activeTab === 'diagrams' ? 'bg-white text-indigo-900 shadow-sm' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
          }`}
        >
          <Layers className="w-4 h-4" />
          <span>3. ASCII Maps</span>
        </button>
        <button
          onClick={() => setActiveTab('plots')}
          className={`flex-1 min-w-[120px] py-2.5 px-3 rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
            activeTab === 'plots' ? 'bg-white text-indigo-900 shadow-sm' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
          }`}
        >
          <BarChart4 className="w-4 h-4" />
          <span>4. Graph Simulator</span>
        </button>
        <button
          onClick={() => setActiveTab('exercises')}
          className={`flex-1 min-w-[120px] py-2.5 px-3 rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
            activeTab === 'exercises' ? 'bg-white text-indigo-900 shadow-sm' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
          }`}
        >
          <HelpCircle className="w-4 h-4" />
          <span>5. Exercises</span>
        </button>
      </div>

      {/* Main Tab Content Panels */}
      <div className="bg-white border-2 border-slate-200 rounded-[32px] p-6 sm:p-8 shadow-xs text-left">
        
        {/* TAB 1: CORE CONCEPTS & STATISTICAL FOUNDATIONS IN PANDAS */}
        {activeTab === 'foundations' && (
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-950 tracking-tight">
                1. Core Concepts & Statistical Foundations in Pandas
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Explore how basic to advanced statistical theories are modeled, computed, and analyzed in Python using Pandas and NumPy.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              {/* Box 1: Types of Data */}
              <div className="bg-slate-50/50 p-5 rounded-2xl border border-slate-200/80 space-y-3">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-[10px] font-bold uppercase">
                  Data Scales
                </div>
                <h3 className="text-base font-black text-slate-950">Scales of Measurement in Pandas</h3>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  Variables possess different scales of measurement which dictate the valid mathematical operations and statistical tests you can perform:
                </p>
                <ul className="space-y-1.5 text-xs text-slate-600 list-disc list-inside">
                  <li><strong>Nominal:</strong> Qualitative categories with no order (e.g., genders, states). Represented via <code className="bg-slate-100 px-1 py-0.5 rounded text-indigo-600">df['state'].astype('category')</code>.</li>
                  <li><strong>Ordinal:</strong> Ordered categories with unequal intervals (e.g., education level, survey rating). Represented using <code className="bg-slate-100 px-1 py-0.5 rounded text-indigo-600">CategoricalDtype(ordered=True)</code>.</li>
                  <li><strong>Interval:</strong> Numeric scale, equal intervals, no absolute zero (e.g., temperature in °C). Arithmetic differences are meaningful.</li>
                  <li><strong>Ratio:</strong> Numeric scale, equal intervals, absolute zero exists (e.g., salary, height). Ratios are fully valid (e.g., twice as high).</li>
                </ul>
              </div>

              {/* Box 2: Population vs. Sample Metrics */}
              <div className="bg-slate-50/50 p-5 rounded-2xl border border-slate-200/80 space-y-3">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-[10px] font-bold uppercase">
                  Parameter vs Statistic
                </div>
                <h3 className="text-base font-black text-slate-950">Population vs. Sample & Bessel's Correction</h3>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  In computational analytics, there is a core mathematical distinction between full population parameters and random sample estimators:
                </p>                 <p className="text-xs text-slate-600 leading-relaxed">
                  The sample variance formula utilizes <strong>Bessel's Correction</strong> ($n-1$ degrees of freedom) to avoid underestimating variance:
                  <span className="block my-2 text-center font-mono">s² = 1/(n-1) ∑ (x_i - x̄)²</span>
                </p>
                <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 text-slate-200 text-[11px] font-mono leading-relaxed">
                  <div># Population Var (σ²): df['col'].var(ddof=0)</div>
                  <div className="text-slate-400"># Sample Var (s²): df['col'].var(ddof=1) # Default</div>
                </div>
              </div>

              {/* Box 3: Data Shape, Skewness, & Kurtosis */}
              <div className="bg-slate-50/50 p-5 rounded-2xl border border-slate-200/80 space-y-3">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-orange-50 border border-orange-200 text-orange-700 text-[10px] font-bold uppercase">
                  Shape parameters
                </div>
                <h3 className="text-base font-black text-slate-950">Shape Diagnostics: Skewness & Kurtosis</h3>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  The distribution shape dictates the appropriate measure of central tendency:
                </p>
                <ul className="space-y-1.5 text-xs text-slate-600 list-disc list-inside">
                  <li><strong>Symmetric:</strong> Mean ≈ Median ≈ Mode. Skewness ≈ 0.</li>
                  <li><strong>Positive (Right) Skew:</strong> Mean &gt; Median &gt; Mode. Use the median for robust central tendency.</li>
                  <li><strong>Negative (Left) Skew:</strong> Mean &lt; Median &lt; Mode. Use the median.</li>
                  <li><strong>Kurtosis:</strong> Measures tail heaviness (Leptokurtic &gt; 3, Platykurtic &lt; 3).</li>
                </ul>
                <div className="bg-indigo-50 border border-indigo-100 p-3 rounded-xl text-[11px] text-indigo-900 font-medium">
                  🎯 <strong>Pandas methods:</strong> <code className="bg-indigo-100/50 px-1 py-0.5 rounded text-indigo-700">df.skew()</code> and <code className="bg-indigo-100/50 px-1 py-0.5 rounded text-indigo-700">df.kurt()</code> compute Fisher-Pearson standardized moments.
                </div>
              </div>

              {/* Box 4: Outliers & Robust Statistics */}
              <div className="bg-slate-50/50 p-5 rounded-2xl border border-slate-200/80 space-y-3">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-rose-50 border border-rose-200 text-rose-700 text-[10px] font-bold uppercase">
                  Robust Estimators
                </div>
                <h3 className="text-base font-black text-slate-950">Outlier Detection & Robust State</h3>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  Standard metrics are highly sensitive to extreme outliers. Use these robust methods:
                </p>
                <ul className="space-y-1.5 text-xs text-slate-600 list-disc list-inside">
                  <li><strong>IQR Rule:</strong> Outliers exist beyond [Q_1 - 1.5 × IQR, Q_3 + 1.5 × IQR].</li>
                  <li><strong>Z-Score Rule:</strong> Data points with |Z| &gt; 3 where Z = (x - μ) / σ.</li>
                  <li><strong>Trimmed Mean:</strong> Calculates the mean after removing a certain percentage of tails.</li>
                  <li><strong>Median Absolute Deviation (MAD):</strong> The median of absolute differences from the median.</li>
                </ul>
              </div>
            </div>

            {/* Comprehensive Explanation Block */}
            <div className="border-t border-slate-100 pt-6 space-y-3">
              <h4 className="text-xs font-black text-slate-500 uppercase tracking-widest">Statistical Axiom Note</h4>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                In professional clinical trials or financial auditing, checking data scales and shapes is non-negotiable. 
                Applying parametric analyses (like the traditional Student t-test) to heavily skewed nominal categories 
                violates basic assumptions of normal distributions, leading to highly inflated Type I error rates. 
                Modern pipelines automatically flag skew values outside the range $[-1.0, 1.0]$ and redirect the execution flow to non-parametric tests.
              </p>
            </div>
          </motion.div>
        )}

        {/* TAB 2: IN-DEPTH TOPICAL BREAKDOWNS (WITH EXECUTABLE PYTHON CODE) */}
        {activeTab === 'breakdowns' && (
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-950 tracking-tight">
                2. Topical Python & Pandas Code Snippets
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Select a topic category below to inspect production-ready, fully executable Python codes that run out-of-the-box.
              </p>
            </div>

            {/* Breakdown Sub Tabs */}
            <div className="flex flex-wrap gap-1.5 bg-slate-50 p-1 rounded-xl border border-slate-200">
              <button
                onClick={() => setBreakdownSection('eda')}
                className={`flex-1 py-2 px-3 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  breakdownSection === 'eda' ? 'bg-indigo-600 text-white' : 'text-slate-600 hover:text-indigo-600'
                }`}
              >
                A. Summary & EDA
              </button>
              <button
                onClick={() => setBreakdownSection('confidence')}
                className={`flex-1 py-2 px-3 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  breakdownSection === 'confidence' ? 'bg-indigo-600 text-white' : 'text-slate-600 hover:text-indigo-600'
                }`}
              >
                B. Confidence Intervals
              </button>
              <button
                onClick={() => setBreakdownSection('parametric')}
                className={`flex-1 py-2 px-3 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  breakdownSection === 'parametric' ? 'bg-indigo-600 text-white' : 'text-slate-600 hover:text-indigo-600'
                }`}
              >
                C. Parametric t/ANOVA
              </button>
              <button
                onClick={() => setBreakdownSection('nonparametric')}
                className={`flex-1 py-2 px-3 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  breakdownSection === 'nonparametric' ? 'bg-indigo-600 text-white' : 'text-slate-600 hover:text-indigo-600'
                }`}
              >
                D. Non-Parametric
              </button>
              <button
                onClick={() => setBreakdownSection('categorical')}
                className={`flex-1 py-2 px-3 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  breakdownSection === 'categorical' ? 'bg-indigo-600 text-white' : 'text-slate-600 hover:text-indigo-600'
                }`}
              >
                E. Categorical Analysis
              </button>
            </div>

            {/* Codes Content */}
            <div className="space-y-4 pt-2">
              {breakdownSection === 'eda' && (
                <div className="space-y-4">
                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80">
                    <h4 className="text-sm font-black text-slate-950 mb-1.5 flex items-center gap-1.5">
                      <Terminal className="w-4 h-4 text-indigo-600" />
                      Exploratory Data Analysis (EDA) & Group Statistics
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed font-medium mb-3">
                      This script computes descriptive statistical moments, quantiles, and trimmed means. 
                      It groups observations using <code className="bg-slate-100 px-1 py-0.5 rounded text-indigo-600">.groupby().agg()</code> to analyze variances and skewness in structured datasets.
                    </p>
                    <pre className="p-4 bg-slate-950 rounded-xl border border-slate-800 text-slate-200 text-xs font-mono overflow-x-auto leading-relaxed max-h-[350px] overflow-y-auto">
{`import numpy as np
import pandas as pd
from scipy import stats

# 1. Establish synthetic customer database
np.random.seed(42)
n_samples = 1000
data = pd.DataFrame({
    'Group': np.random.choice(['Control', 'Variant A', 'Variant B'], size=n_samples),
    'Spend': np.random.exponential(scale=100.0, size=n_samples) + np.random.normal(loc=15.0, scale=3.0, size=n_samples),
    'Age': np.random.randint(18, 65, size=n_samples)
})

# 2. General Descriptive Statistics
print("--- Global Statistical Summary ---")
print(data.describe())

# 3. Trimmed Mean (removes outliers from tails)
trimmed_spend_mean = stats.trim_mean(data['Spend'], proportiontocut=0.05)
print(f"\\n5% Trimmed Mean of Spend: \${trimmed_spend_mean:.2f}")

# 4. Outliers via IQR Rule
q1 = data['Spend'].quantile(0.25)
q3 = data['Spend'].quantile(0.75)
iqr = q3 - q1
outlier_bounds = (q1 - 1.5 * iqr, q3 + 1.5 * iqr)
outliers = data[(data['Spend'] < outlier_bounds[0]) | (data['Spend'] > outlier_bounds[1])]
print(f"Detected Outliers (Count): {len(outliers)}")

# 5. Grouped Summary Statistics
print("\\n--- Grouped Summary Statistics ---")
grouped_stats = data.groupby('Group')['Spend'].agg(
    Mean='mean',
    Median='median',
    Variance='var',
    StdDev='std',
    Skewness=lambda x: x.skew(),
    Kurtosis=lambda x: x.kurt()
)
print(grouped_stats)`}
                    </pre>
                  </div>
                </div>
              )}

              {breakdownSection === 'confidence' && (
                <div className="space-y-4">
                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80">
                    <h4 className="text-sm font-black text-slate-950 mb-1.5 flex items-center gap-1.5">
                      <Terminal className="w-4 h-4 text-indigo-600" />
                      Confidence Intervals & Vectorized Bootstrap Resampling
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed font-medium mb-3">
                      This script computes the Standard Error of the Mean (SEM) and constructs both parametric 
                      (Student's t, Normal Z) and highly robust non-parametric bootstrap confidence intervals.
                    </p>
                    <pre className="p-4 bg-slate-950 rounded-xl border border-slate-800 text-slate-200 text-xs font-mono overflow-x-auto leading-relaxed max-h-[350px] overflow-y-auto">
{`import numpy as np
import pandas as pd
from scipy import stats

np.random.seed(42)
sample_data = pd.Series(np.random.normal(loc=55.5, scale=12.2, size=150))

# 1. Standard Error of the Mean (SEM)
sem = sample_data.sem()
print(f"Standard Error (SEM): {sem:.4f}")

# 2. Parametric Student's t-Interval (95% CI)
confidence_level = 0.95
df = len(sample_data) - 1
t_ci = stats.t.interval(confidence_level, df, loc=sample_data.mean(), scale=sem)
print(f"95% Student's t Confidence Interval: ({t_ci[0]:.4f}, {t_ci[1]:.4f})")

# 3. Parametric Normal Z-Interval
z_ci = stats.norm.interval(confidence_level, loc=sample_data.mean(), scale=sem)
print(f"95% Normal Z Confidence Interval: ({z_ci[0]:.4f}, {z_ci[1]:.4f})")

# 4. Non-Parametric Bootstrap Resampling (Vectorized Pandas)
bootstrap_means = []
n_iterations = 2000
for _ in range(n_iterations):
    # Sample with replacement
    bootstrap_sample = sample_data.sample(n=len(sample_data), replace=True)
    bootstrap_means.append(bootstrap_sample.mean())

boot_ci = np.percentile(bootstrap_means, [2.5, 97.5])
print(f"95% Vectorized Bootstrap Mean CI: ({boot_ci[0]:.4f}, {boot_ci[1]:.4f})")`}
                    </pre>
                  </div>
                </div>
              )}

              {breakdownSection === 'parametric' && (
                <div className="space-y-4">
                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80">
                    <h4 className="text-sm font-black text-slate-950 mb-1.5 flex items-center gap-1.5">
                      <Terminal className="w-4 h-4 text-indigo-600" />
                      Parametric Testing: One/Two-Sample, Welch's t, ANOVA & Tukey HSD
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed font-medium mb-3">
                      This script tests assumptions of normality and homogeneity, executes a Welch's t-test for unequal variances, 
                      runs a One-Way ANOVA, and computes post-hoc pair-wise Tukey HSD tests.
                    </p>
                    <pre className="p-4 bg-slate-950 rounded-xl border border-slate-800 text-slate-200 text-xs font-mono overflow-x-auto leading-relaxed max-h-[350px] overflow-y-auto">
{`import numpy as np
import pandas as pd
from scipy import stats
from statsmodels.stats.multicomp import pairwise_tukeyhsd

np.random.seed(101)
group_A = np.random.normal(loc=72.0, scale=8.0, size=50)
group_B = np.random.normal(loc=78.0, scale=12.0, size=45) # Unequal variance
group_C = np.random.normal(loc=81.0, scale=9.0, size=50)

# 1. Assumption Check: Normality (Shapiro-Wilk)
shapiro_A_stat, shapiro_A_p = stats.shapiro(group_A)
print(f"Shapiro-Wilk Normality Test (Group A): p-value = {shapiro_A_p:.5f}")

# 2. Assumption Check: Homogeneity of Variance (Levene's Test)
levene_stat, levene_p = stats.levene(group_A, group_B, group_C)
print(f"Levene's Variance Test: p-value = {levene_p:.5f}")

# 3. Two-Sample Welch's t-test (Equal variance = False)
t_stat, t_p = stats.ttest_ind(group_A, group_B, equal_var=False)
print(f"\\nWelch's Two-Sample Independent t-test (A vs B): p-value = {t_p:.5f}")

# 4. One-Way ANOVA (Compare >= 3 groups)
f_stat, anova_p = stats.f_oneway(group_A, group_B, group_C)
print(f"One-Way ANOVA F-Statistic: {f_stat:.4f}, p-value = {anova_p:.5f}")

# 5. Post-Hoc Pair-wise Tukey HSD Test
df_tukey = pd.DataFrame({
    'Score': np.concatenate([group_A, group_B, group_C]),
    'Group': ['A']*50 + ['B']*45 + ['C']*50
})
tukey = pairwise_tukeyhsd(endog=df_tukey['Score'], groups=df_tukey['Group'], alpha=0.05)
print("\\n--- Tukey HSD Post-Hoc Test Summary ---")
print(tukey)`}
                    </pre>
                  </div>
                </div>
              )}

              {breakdownSection === 'nonparametric' && (
                <div className="space-y-4">
                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80">
                    <h4 className="text-sm font-black text-slate-950 mb-1.5 flex items-center gap-1.5">
                      <Terminal className="w-4 h-4 text-indigo-600" />
                      Non-Parametric Testing: Mann-Whitney U, Wilcoxon & Kruskal-Wallis
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed font-medium mb-3">
                      When data distributions violate normality assumptions, non-parametric ranked-sum alternatives 
                      must be used. This code covers these exact calculations.
                    </p>
                    <pre className="p-4 bg-slate-950 rounded-xl border border-slate-800 text-slate-200 text-xs font-mono overflow-x-auto leading-relaxed max-h-[350px] overflow-y-auto">
{`import numpy as np
import pandas as pd
from scipy import stats

np.random.seed(202)
# Strictly non-normal skewed recovery rates
patient_rates_A = stats.skewnorm.rvs(a=8, loc=20, scale=15, size=40)
patient_rates_B = stats.skewnorm.rvs(a=-4, loc=25, scale=12, size=40)

# Paired patient samples (Before & After treatment rates)
rates_before = np.random.exponential(scale=30.0, size=30)
rates_after = rates_before - np.random.normal(loc=8.0, scale=3.0, size=30)

# 1. Mann-Whitney U Test (Non-parametric equivalent of Independent 2-Sample t)
mw_stat, mw_p = stats.mannwhitneyu(patient_rates_A, patient_rates_B, alternative='two-sided')
print(f"Mann-Whitney U Test (Rates A vs B): p-value = {mw_p:.5f}")

# 2. Wilcoxon Signed-Rank Test (Non-parametric equivalent of Paired t-test)
wilc_stat, wilc_p = stats.wilcoxon(rates_before, rates_after)
print(f"Wilcoxon Paired Signed-Rank Test: p-value = {wilc_p:.5f}")

# 3. Kruskal-Wallis H-Test (Non-parametric equivalent of One-Way ANOVA)
group_1 = np.random.uniform(10, 50, 30)
group_2 = np.random.exponential(30, 30)
group_3 = np.random.normal(35, 8, 30)

kw_stat, kw_p = stats.kruskal(group_1, group_2, group_3)
print(f"Kruskal-Wallis Rank H-Test (3 Groups): p-value = {kw_p:.5f}")`}
                    </pre>
                  </div>
                </div>
              )}

              {breakdownSection === 'categorical' && (
                <div className="space-y-4">
                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80">
                    <h4 className="text-sm font-black text-slate-950 mb-1.5 flex items-center gap-1.5">
                      <Terminal className="w-4 h-4 text-indigo-600" />
                      Categorical Data: pd.crosstab, Chi-Square Independence, Fisher's Exact & Cramér's V
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed font-medium mb-3">
                      This script builds statistical contingency matrices using Pandas, runs association significance tests, 
                      and extracts structural Cramér's V effect-sizes.
                    </p>
                    <pre className="p-4 bg-slate-950 rounded-xl border border-slate-800 text-slate-200 text-xs font-mono overflow-x-auto leading-relaxed max-h-[350px] overflow-y-auto">
{`import numpy as np
import pandas as pd
from scipy import stats

np.random.seed(777)
survey_data = pd.DataFrame({
    'Tier': np.random.choice(['Bronze', 'Silver', 'Gold'], p=[0.5, 0.3, 0.2], size=300),
    'Satisfaction': np.random.choice(['Satisfied', 'Neutral', 'Dissatisfied'], size=300)
})

# 1. Formulate Contingency Table via pd.crosstab
contingency_table = pd.crosstab(survey_data['Tier'], survey_data['Satisfaction'])
print("--- Observed Contingency Matrix ---")
print(contingency_table)

# 2. Chi-Square (χ²) Test of Independence
chi2_stat, p_val, dof, expected_frequencies = stats.chi2_contingency(contingency_table)
print(f"\\nChi-Square Statistic: {chi2_stat:.4f}")
print(f"Degrees of Freedom: {dof}")
print(f"p-value of Association: {p_val:.5f}")
print("\\n--- Expected Frequencies Under Null Hypothesis ---")
print(pd.DataFrame(expected_frequencies, index=contingency_table.index, columns=contingency_table.columns))

# 3. Fisher's Exact Test (2x2 contingency matrices for small sample sizes)
small_contingency = np.array([[8, 2], [1, 9]])
odds_ratio, fisher_p = stats.fisher_exact(small_contingency)
print(f"\\nFisher's Exact Test (2x2): p-value = {fisher_p:.5f}")

# 4. Effect Size: Cramér's V (Association Strength)
n = contingency_table.sum().sum()
min_dim = min(contingency_table.shape) - 1
cramers_v = np.sqrt(chi2_stat / (n * min_dim))
print(f"Cramér's V Effect Size: {cramers_v:.4f} (Interpretation: {
    'Strong' if cramers_v > 0.35 else 'Medium' if cramers_v > 0.15 else 'Weak'
})")`}
                    </pre>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}

        {/* TAB 3: ASCII / TEXT DIAGRAMS */}
        {activeTab === 'diagrams' && (
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-950 tracking-tight">
                3. High-Fidelity ASCII Structural Guides
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Visualizing decision hierarchies and geometric attributes of continuous and categorical analytics.
              </p>
            </div>

            <div className="space-y-6">
              {/* Diagram 1 */}
              <div className="p-5 bg-slate-950 border border-slate-800 rounded-2xl text-slate-200 space-y-3">
                <h3 className="text-xs font-black uppercase tracking-widest text-indigo-400">Diagram 1: Hypothesis Testing Decision Engine</h3>
                <pre className="font-mono text-[10px] sm:text-xs overflow-x-auto leading-relaxed text-indigo-100/95">
{`                      [ WHAT IS THE INCOMING DATA SCALE? ]
                                       |
                   +-------------------+-------------------+
                   |                                       |
             [ CATEGORICAL ]                               [ CONTINUOUS ]
                   |                                       |
         [ HOW MANY CATEGORIES? ]                 [ IS THE DISTRIBUTION NORMAL? ]
                   |                                       |
         +---------+---------+                 +-----------+-----------+
         |                   |                 |                       |
      [ 2x2 ]           [ r x c ]           [ YES ]                  [ NO ]
         |                   |                 |                       |
   [ Fisher's ]        [ Chi-Square ]    [ HOW MANY GROUPS? ]   [ HOW MANY GROUPS? ]
     Exact              Association            |                       |
                                         +-----+-----+           +-----+-----+
                                         |           |           |           |
                                      [ 2 ]        [ >=3 ]     [ 2 ]       [ >=3 ]
                                         |           |           |           |
                                   [ Var Equal? ] [ ANOVA ]  [ Mann- ]  [ Kruskal- ]
                                         |                      Whitney   Wallis H
                                     +---+---+                     U
                                     |       |
                                  [ YES ]  [ NO ]
                                     |       |
                                  [Student] [Welch]
                                   t-test    t-test`}
                </pre>
              </div>

              {/* Diagram 2 */}
              <div className="p-5 bg-slate-950 border border-slate-800 rounded-2xl text-slate-200 space-y-3">
                <h3 className="text-xs font-black uppercase tracking-widest text-emerald-400">Diagram 2: Student's t-Distribution & Rejection Boundaries</h3>
                <pre className="font-mono text-[10px] sm:text-xs overflow-x-auto leading-relaxed text-emerald-100/95">
{`                                 Null Hypothesis: H0 (μ = μ0)
                                     Symmetric Center
                                           |
                                         .---.
                                        /  |  \\
                                       /   |   \\
                                      /    |    \\
                                     /     |     \\
       Rejection Region (α/2)       /      |      \\        Rejection Region (α/2)
               |                   /       |       \\                |
         <-------------|          /        |        \\          |------------->
       - - - - - - - - o --------.         |         .-------- o - - - - - - - -
                      -t_crit              0                 +t_crit
                      p-value area                      p-value area
                      [Left-Tail]                       [Right-Tail]`}
                </pre>
              </div>

              {/* Diagram 3 */}
              <div className="p-5 bg-slate-950 border border-slate-800 rounded-2xl text-slate-200 space-y-3">
                <h3 className="text-xs font-black uppercase tracking-widest text-sky-400">Diagram 3: Anatomy of a Continuous Boxplot</h3>
                <pre className="font-mono text-[10px] sm:text-xs overflow-x-auto leading-relaxed text-sky-100/95">
{`     o [Outlier]
     
     |-----------  <--- Upper Whisker: Q3 + 1.5 * IQR  (Max value excluding outliers)
     |
  +--+--+
  |  |  |  <--- Third Quantile (Q3 - 75th percentile)
  |  |  |
  |=====|  <--- Median (Q2 - 50th percentile)
  |  |  |
  |  |  |  <--- First Quantile (Q1 - 25th percentile)
  +--+--+
     |
     |-----------  <--- Lower Whisker: Q1 - 1.5 * IQR  (Min value excluding outliers)
     
     o [Outlier]`}
                </pre>
              </div>
            </div>
          </motion.div>
        )}

        {/* TAB 4: DATA VISUALIZATION & GRAPHING */}
        {activeTab === 'plots' && (
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <h2 className="text-xl sm:text-2xl font-black text-slate-950 tracking-tight">
                  4. Graphical Diagnostics Interactive Lab
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Tune the widgets to simulate standard data diagnostics outputs generated by Matplotlib and Seaborn.
                </p>
              </div>

              {/* Lab Subtabs */}
              <div className="flex gap-1.5 p-1 bg-slate-100 rounded-xl border border-slate-200 text-[11px] font-black">
                <button
                  onClick={() => setPlotTab('dist')}
                  className={`py-1.5 px-3 rounded-lg cursor-pointer ${plotTab === 'dist' ? 'bg-white text-indigo-900 shadow-xs' : 'text-slate-600'}`}
                >
                  1. Dist Diagnostics
                </button>
                <button
                  onClick={() => setPlotTab('bar')}
                  className={`py-1.5 px-3 rounded-lg cursor-pointer ${plotTab === 'bar' ? 'bg-white text-indigo-900 shadow-xs' : 'text-slate-600'}`}
                >
                  2. Confidence Bar
                </button>
                <button
                  onClick={() => setPlotTab('heatmap')}
                  className={`py-1.5 px-3 rounded-lg cursor-pointer ${plotTab === 'heatmap' ? 'bg-white text-indigo-900 shadow-xs' : 'text-slate-600'}`}
                >
                  3. Contingency Heatmap
                </button>
              </div>
            </div>

            {/* Simulated Interactive Controls */}
            <div className="p-4 bg-slate-50 border border-slate-200/80 rounded-2xl grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-bold">
              {plotTab === 'dist' ? (
                <div className="space-y-2">
                  <label className="text-slate-700 flex justify-between">
                    <span>Dataset Skewness (γ)</span>
                    <span className="text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">{skewValue.toFixed(1)}</span>
                  </label>
                  <input
                    type="range"
                    min="-2"
                    max="2"
                    step="0.5"
                    value={skewValue}
                    onChange={(e) => setSkewValue(parseFloat(e.target.value))}
                    className="w-full accent-indigo-600"
                  />
                  <span className="text-[10px] text-slate-500 block font-medium">
                    {skewValue === 0 ? 'Symmetric (Ideal Normality)' : skewValue > 0 ? 'Positively Skewed (Tail right; Mean > Median)' : 'Negatively Skewed (Tail left; Mean < Median)'}
                  </span>
                </div>
              ) : (
                <div className="space-y-2">
                  <label className="text-slate-700 flex justify-between">
                    <span>Confidence Level (1 - α)</span>
                    <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">{confidenceLevel}%</span>
                  </label>
                  <div className="flex gap-2">
                    {[90, 95, 99].map((lvl) => (
                      <button
                        key={lvl}
                        onClick={() => setConfidenceLevel(lvl)}
                        className={`flex-1 py-1.5 rounded-lg border text-[11px] font-black cursor-pointer ${
                          confidenceLevel === lvl ? 'bg-emerald-600 text-white border-emerald-600' : 'bg-white text-slate-600 border-slate-200'
                        }`}
                      >
                        {lvl}% CI
                      </button>
                    ))}
                  </div>
                  <span className="text-[10px] text-slate-500 block font-medium">
                    Increasing the confidence level broadens the error bars (interval width).
                  </span>
                </div>
              )}

              <div className="bg-white p-3 border border-slate-200 rounded-xl flex items-start gap-2.5">
                <Info className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                <div className="space-y-1 font-medium text-[10px] sm:text-xs text-slate-600 leading-relaxed">
                  <strong>Python Plot Translation:</strong> These plots mimic the visual output generated by
                  <code className="bg-slate-100 text-indigo-600 px-1 py-0.5 rounded ml-1">sns.histplot(kde=True)</code>, 
                  <code className="bg-slate-100 text-indigo-600 px-1 py-0.5 rounded ml-1">sns.barplot(ci=...)</code>, and 
                  <code className="bg-slate-100 text-indigo-600 px-1 py-0.5 rounded ml-1">sns.heatmap()</code> inside Jupiter Notebooks.
                </div>
              </div>
            </div>

            {/* Graphics Canvas */}
            <div className="bg-slate-950 rounded-2xl p-4 sm:p-6 flex items-center justify-center min-h-[300px] border border-slate-800">
              {plotTab === 'dist' && (
                <div className="w-full max-w-lg space-y-4 text-center">
                  <span className="text-xs font-black text-indigo-300 tracking-wider block uppercase">Histogram & KDE Overlay Simulator</span>
                  
                  {/* Custom animated SVG curve showing skew */}
                  <div className="h-44 w-full relative flex items-end justify-center border-b border-slate-800">
                    <svg className="w-full h-full overflow-visible" viewBox="0 0 500 150">
                      {/* Grid lines */}
                      <line x1="0" y1="120" x2="500" y2="120" stroke="#1e293b" strokeWidth="1" strokeDasharray="3,3" />
                      <line x1="0" y1="75" x2="500" y2="75" stroke="#1e293b" strokeWidth="1" strokeDasharray="3,3" />
                      <line x1="0" y1="30" x2="500" y2="30" stroke="#1e293b" strokeWidth="1" strokeDasharray="3,3" />

                      {/* PDF Distribution Path */}
                      <path
                        d={
                          skewValue === 0
                            ? "M 50 140 Q 250 10, 450 140"
                            : skewValue > 0
                            ? "M 50 140 Q 150 10, 450 140"
                            : "M 50 140 Q 350 10, 450 140"
                        }
                        fill="url(#indigoGrad)"
                        stroke="#6366f1"
                        strokeWidth="3.5"
                        className="transition-all duration-500"
                      />

                      {/* Mean Indicator */}
                      <line
                        x1={skewValue === 0 ? "250" : skewValue > 0 ? "210" : "290"}
                        y1="10"
                        x2={skewValue === 0 ? "250" : skewValue > 0 ? "210" : "290"}
                        y2="140"
                        stroke="#ef4444"
                        strokeWidth="2"
                        strokeDasharray="4,4"
                        className="transition-all duration-500"
                      />

                      {/* Median Indicator */}
                      <line
                        x1={skewValue === 0 ? "250" : skewValue > 0 ? "180" : "320"}
                        y1="20"
                        x2={skewValue === 0 ? "250" : skewValue > 0 ? "180" : "320"}
                        y2="140"
                        stroke="#22c55e"
                        strokeWidth="2"
                        strokeDasharray="4,4"
                        className="transition-all duration-500"
                      />

                      {/* Gradients */}
                      <defs>
                        <linearGradient id="indigoGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#6366f1" stopOpacity="0.3" />
                          <stop offset="100%" stopColor="#6366f1" stopOpacity="0.0" />
                        </linearGradient>
                      </defs>
                    </svg>

                    {/* Simple Axis ticks */}
                    <div className="absolute bottom-[-24px] left-0 right-0 flex justify-between px-6 text-[10px] font-mono text-slate-500 font-bold">
                      <span>Low Spend ($)</span>
                      <span>Target Average ($)</span>
                      <span>High Spend ($)</span>
                    </div>
                  </div>

                  <div className="flex justify-center items-center gap-6 pt-4 text-[11px] font-bold">
                    <div className="flex items-center gap-1.5 text-rose-400">
                      <div className="w-3 h-0.5 border-t-2 border-dashed border-rose-400" />
                      <span>Mean</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-emerald-400">
                      <div className="w-3 h-0.5 border-t-2 border-dashed border-emerald-400" />
                      <span>Median</span>
                    </div>
                    <span className="text-slate-400 font-mono text-[10px]">Skewness metric: {skewValue.toFixed(2)}</span>
                  </div>
                </div>
              )}

              {plotTab === 'bar' && (
                <div className="w-full max-w-lg space-y-4 text-center">
                  <span className="text-xs font-black text-emerald-400 tracking-wider block uppercase">Group Wise A/B Test Metric (Mean & Confidence Interval)</span>

                  {/* Simulated interactive bar charts */}
                  <div className="h-44 w-full relative flex items-end justify-around border-b border-slate-800 pb-1 px-8">
                    {/* Control Design A Bar */}
                    <div className="flex flex-col items-center w-24 space-y-1">
                      <div className="relative w-full h-24 bg-gradient-to-t from-indigo-950 to-indigo-600 rounded-lg border border-indigo-500/30 flex items-center justify-center">
                        <span className="text-white text-[10px] font-mono font-black">$45.50</span>
                        
                        {/* Interactive Error Bar overlay */}
                        <div
                          className="absolute w-4 h-12 flex flex-col justify-between transition-all duration-300"
                          style={{ height: confidenceLevel === 90 ? '24px' : confidenceLevel === 95 ? '36px' : '48px' }}
                        >
                          <div className="w-full h-0.5 bg-emerald-400" />
                          <div className="w-0.5 h-full bg-emerald-400 mx-auto" />
                          <div className="w-full h-0.5 bg-emerald-400" />
                        </div>
                      </div>
                      <span className="text-[10px] text-slate-400 font-black uppercase">Control (A)</span>
                    </div>

                    {/* Variant Design B Bar */}
                    <div className="flex flex-col items-center w-24 space-y-1">
                      <div className="relative w-full h-32 bg-gradient-to-t from-indigo-950 to-indigo-500 rounded-lg border border-indigo-500/30 flex items-center justify-center">
                        <span className="text-white text-[10px] font-mono font-black">$62.20</span>
                        
                        {/* Interactive Error Bar overlay */}
                        <div
                          className="absolute w-4 h-16 flex flex-col justify-between transition-all duration-300"
                          style={{ height: confidenceLevel === 90 ? '28px' : confidenceLevel === 95 ? '40px' : '56px' }}
                        >
                          <div className="w-full h-0.5 bg-emerald-400" />
                          <div className="w-0.5 h-full bg-emerald-400 mx-auto" />
                          <div className="w-full h-0.5 bg-emerald-400" />
                        </div>
                      </div>
                      <span className="text-[10px] text-slate-400 font-black uppercase">Variant (B)</span>
                    </div>
                  </div>

                  <div className="flex justify-center items-center gap-4 text-[11px] font-bold pt-2">
                    <div className="flex items-center gap-1.5 text-emerald-400">
                      <div className="w-3 h-3 bg-emerald-400 rounded-sm" />
                      <span>{confidenceLevel}% Parametric Error Bars (CI)</span>
                    </div>
                  </div>
                </div>
              )}

              {plotTab === 'heatmap' && (
                <div className="w-full max-w-sm space-y-4 text-center">
                  <span className="text-xs font-black text-indigo-300 tracking-wider block uppercase">Categorical Association Contingency Table Heatmap</span>

                  <div className="grid grid-cols-4 gap-2 text-center text-xs font-mono pt-2">
                    {/* Headers */}
                    <div />
                    <div className="text-slate-400 font-bold text-[9px] uppercase">Dissat</div>
                    <div className="text-slate-400 font-bold text-[9px] uppercase">Neutral</div>
                    <div className="text-slate-400 font-bold text-[9px] uppercase">Sat</div>

                    {/* Row 1: Bronze */}
                    <div className="text-slate-400 font-black text-[9px] text-right pr-2 uppercase self-center">Bronze</div>
                    <div className="bg-rose-950 text-rose-100 p-3.5 rounded border border-rose-800">
                      <div className="font-bold">45</div>
                      <div className="text-[8px] text-rose-400">(Exp: 33)</div>
                    </div>
                    <div className="bg-indigo-950 text-indigo-100 p-3.5 rounded border border-indigo-900">
                      <div className="font-bold">25</div>
                      <div className="text-[8px] text-indigo-400">(Exp: 27)</div>
                    </div>
                    <div className="bg-indigo-950 text-indigo-100 p-3.5 rounded border border-indigo-900">
                      <div className="font-bold">30</div>
                      <div className="text-[8px] text-indigo-400">(Exp: 40)</div>
                    </div>

                    {/* Row 2: Silver */}
                    <div className="text-slate-400 font-black text-[9px] text-right pr-2 uppercase self-center">Silver</div>
                    <div className="bg-indigo-950 text-indigo-100 p-3.5 rounded border border-indigo-900">
                      <div className="font-bold">22</div>
                      <div className="text-[8px] text-indigo-400">(Exp: 24)</div>
                    </div>
                    <div className="bg-indigo-900 text-indigo-100 p-3.5 rounded border border-indigo-800">
                      <div className="font-bold">38</div>
                      <div className="text-[8px] text-indigo-400">(Exp: 32)</div>
                    </div>
                    <div className="bg-indigo-950 text-indigo-100 p-3.5 rounded border border-indigo-900">
                      <div className="font-bold">40</div>
                      <div className="text-[8px] text-indigo-400">(Exp: 44)</div>
                    </div>

                    {/* Row 3: Gold */}
                    <div className="text-slate-400 font-black text-[9px] text-right pr-2 uppercase self-center">Gold</div>
                    <div className="bg-indigo-950 text-indigo-100 p-3.5 rounded border border-indigo-900">
                      <div className="font-bold">12</div>
                      <div className="text-[8px] text-indigo-400">(Exp: 22)</div>
                    </div>
                    <div className="bg-indigo-950 text-indigo-100 p-3.5 rounded border border-indigo-900">
                      <div className="font-bold">15</div>
                      <div className="text-[8px] text-indigo-400">(Exp: 20)</div>
                    </div>
                    <div className="bg-emerald-950 text-emerald-100 p-3.5 rounded border border-emerald-800">
                      <div className="font-bold">73</div>
                      <div className="text-[8px] text-emerald-400">(Exp: 58)</div>
                    </div>
                  </div>

                  <span className="text-[10px] text-slate-500 block leading-relaxed font-bold">
                    Color depth matches cell densities. Dissatisfied bronze and highly satisfied gold users represent key deviations from theoretical independence expectations (p &lt; 0.05).
                  </span>
                </div>
              )}
            </div>
          </motion.div>
        )}

        {/* TAB 5: PRACTICAL EXERCISES & SOLUTIONS */}
        {activeTab === 'exercises' && (
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-10"
          >
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-950 tracking-tight">
                5. High-Fidelity Practice Exercises & Verification Lab
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Challenge your comprehension. Submit options to trigger immediate, robust visual verifications with detailed breakdowns of correct answers and distractors.
              </p>
            </div>

            {/* Exercise 1 */}
            <div className="p-5 border-2 border-slate-200 hover:border-slate-300 bg-slate-50/50 rounded-2xl relative space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 rounded bg-indigo-100 text-indigo-700 text-[10px] font-black uppercase tracking-wider">
                  Exercise 1 (Beginner) — E-Commerce A/B Testing
                </span>
                <span className="text-xs font-bold text-slate-500">Difficulty: 2/5</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-800 font-extrabold leading-snug">
                You possess sample spend data for two website designs (Design A: n = 30, Mean = 105.5, SD = 14.2 and Design B: n = 30, Mean = 118.2, SD = 15.1). 
                Before running a parametric two-sample t-test, you execute Shapiro-Wilk which returns p = 0.45. Levene's returns p = 0.82. 
                What is the correct statistical protocol to test whether the average spend differs significantly, and why?
              </p>

              {/* Options */}
              <div className="grid grid-cols-1 gap-2">
                {[
                  { idx: 0, text: 'Run Mann-Whitney U test because standard deviations are unequal.' },
                  { idx: 1, text: 'Execute a Student t-test assuming equal variances since normality and homogeneity assumptions hold.' },
                  { idx: 2, text: 'Execute a paired t-test since the samples sizes of both groups are exactly identical.' },
                  { idx: 3, text: 'Decline to test because a sample size of 30 is too small for any parametric analysis.' }
                ].map((opt) => (
                  <button
                    key={opt.idx}
                    disabled={ex1Submitted}
                    onClick={() => setEx1Answer(opt.idx)}
                    className={`w-full text-left p-3.5 rounded-xl border-2 text-xs font-bold transition-all cursor-pointer flex justify-between items-center ${
                      ex1Answer === opt.idx
                        ? 'bg-indigo-50 border-indigo-600 text-indigo-950'
                        : 'bg-white border-slate-200/80 hover:border-slate-300 hover:bg-slate-50 text-slate-700'
                    }`}
                  >
                    <span>{String.fromCharCode(65 + opt.idx)}. {opt.text}</span>
                    <div className={`w-4.5 h-4.5 rounded-full border flex items-center justify-center shrink-0 ml-2 ${
                      ex1Answer === opt.idx ? 'border-indigo-600 bg-indigo-600 text-white' : 'border-slate-300'
                    }`}>
                      {ex1Answer === opt.idx && <Check className="w-3 h-3 stroke-[3]" />}
                    </div>
                  </button>
                ))}
              </div>

              {/* Submission Controls */}
              <div className="flex gap-2">
                {!ex1Submitted ? (
                  <button
                    disabled={ex1Answer === null}
                    onClick={() => setEx1Submitted(true)}
                    className="px-5 py-2 rounded-xl bg-indigo-600 text-white text-xs font-bold hover:bg-indigo-700 transition-all disabled:opacity-50 cursor-pointer shadow-sm"
                  >
                    Submit Answer
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      setEx1Answer(null);
                      setEx1Submitted(false);
                    }}
                    className="px-5 py-2 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs font-bold transition-all cursor-pointer"
                  >
                    Reset Challenge
                  </button>
                )}
              </div>

              {/* Feedback Section */}
              <AnimatePresence>
                {ex1Submitted && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="border-t border-slate-200 pt-4 space-y-3 overflow-hidden text-xs"
                  >
                    {ex1Answer === 1 ? (
                      <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-900 flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                        <div>
                          <strong>Correct!</strong> Your selection is mathematically and procedurally flawless.
                        </div>
                      </div>
                    ) : (
                      <div className="p-3 bg-rose-50 border border-rose-200 rounded-xl text-rose-900 flex items-start gap-2">
                        <XCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                        <div>
                          <strong>Incorrect choice.</strong> Check the parameters and review the assumption tests.
                        </div>
                      </div>
                    )}

                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2 leading-relaxed text-slate-700">
                      <p className="font-extrabold text-slate-900 uppercase tracking-wider text-[10px]">Explanatory Rationale & Step-by-Step Breakdown:</p>
                      <p>
                        1. <strong>Normality Assumed:</strong> Shapiro-Wilk's p = 0.45 &gt; 0.05, so we fail to reject the null hypothesis of normality. 
                        The data fits a normal distribution perfectly.
                      </p>
                      <p>
                        2. <strong>Equal Variances (Homogeneity):</strong> Levene's p = 0.82 &gt; 0.05. This proves the standard deviations of both populations 
                        do not differ significantly. Student t-test is fully justified over Welch's t-test.
                      </p>
                      <p>
                        3. <strong>Why others are wrong (Distractor Analysis):</strong>
                      </p>
                      <ul className="list-disc list-inside space-y-1 pl-2">
                        <li><em>Option A:</em> Non-parametric Mann-Whitney U is under-powered here because normality assumptions are satisfied.</li>
                        <li><em>Option C:</em> These are separate random samples of different website designs, so they are <strong>independent</strong>, not paired. Matching sample sizes is a coincidence, not a pairing mechanism.</li>
                        <li><em>Option D:</em> The Central Limit Theorem proves that sample sizes of n ≥ 30 are fully robust for parametric models.</li>
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Exercise 2 */}
            <div className="p-5 border-2 border-slate-200 hover:border-slate-300 bg-slate-50/50 rounded-2xl relative space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 rounded bg-indigo-100 text-indigo-700 text-[10px] font-black uppercase tracking-wider">
                  Exercise 2 (Intermediate) — Recovery Times ANOVA & Post-hoc Tukey
                </span>
                <span className="text-xs font-bold text-slate-500">Difficulty: 3.5/5</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-800 font-extrabold leading-snug">
                A clinical research DataFrame tracks patient recovery times (days) across four drug dosage groups (10mg, 25mg, 50mg, Placebo). 
                An analyst runs a One-Way ANOVA and gets an F-statistic corresponding to a p-value = 0.003. 
                Which of the following describes the most mathematically accurate conclusion and subsequent required pipeline action?
              </p>

              {/* Options */}
              <div className="grid grid-cols-1 gap-2">
                {[
                  { idx: 0, text: 'Reject the null hypothesis. Conclude that all 4 dosage groups have significantly different mean recovery times, and terminate the trial.' },
                  { idx: 1, text: 'Fail to reject the null hypothesis because individual pairwise differences have not yet been evaluated.' },
                  { idx: 2, text: 'Reject the null hypothesis. Conclude that at least one group mean recovery time differs from the others. Execute a post-hoc Tukey HSD test to identify which specific pairs differ.' },
                  { idx: 3, text: 'Switch to a Kruskal-Wallis H non-parametric test because One-Way ANOVA F-tests are only exploratory and cannot establish final significance.' }
                ].map((opt) => (
                  <button
                    key={opt.idx}
                    disabled={ex2Submitted}
                    onClick={() => setEx2Answer(opt.idx)}
                    className={`w-full text-left p-3.5 rounded-xl border-2 text-xs font-bold transition-all cursor-pointer flex justify-between items-center ${
                      ex2Answer === opt.idx
                        ? 'bg-indigo-50 border-indigo-600 text-indigo-950'
                        : 'bg-white border-slate-200/80 hover:border-slate-300 hover:bg-slate-50 text-slate-700'
                    }`}
                  >
                    <span>{String.fromCharCode(65 + opt.idx)}. {opt.text}</span>
                    <div className={`w-4.5 h-4.5 rounded-full border flex items-center justify-center shrink-0 ml-2 ${
                      ex2Answer === opt.idx ? 'border-indigo-600 bg-indigo-600 text-white' : 'border-slate-300'
                    }`}>
                      {ex2Answer === opt.idx && <Check className="w-3 h-3 stroke-[3]" />}
                    </div>
                  </button>
                ))}
              </div>

              {/* Submission Controls */}
              <div className="flex gap-2">
                {!ex2Submitted ? (
                  <button
                    disabled={ex2Answer === null}
                    onClick={() => setEx2Submitted(true)}
                    className="px-5 py-2 rounded-xl bg-indigo-600 text-white text-xs font-bold hover:bg-indigo-700 transition-all disabled:opacity-50 cursor-pointer shadow-sm"
                  >
                    Submit Answer
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      setEx2Answer(null);
                      setEx2Submitted(false);
                    }}
                    className="px-5 py-2 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs font-bold transition-all cursor-pointer"
                  >
                    Reset Challenge
                  </button>
                )}
              </div>

              {/* Feedback Section */}
              <AnimatePresence>
                {ex2Submitted && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="border-t border-slate-200 pt-4 space-y-3 overflow-hidden text-xs"
                  >
                    {ex2Answer === 2 ? (
                      <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-900 flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                        <div>
                          <strong>Correct!</strong> Exceptional command of multi-group parametric inference.
                        </div>
                      </div>
                    ) : (
                      <div className="p-3 bg-rose-50 border border-rose-200 rounded-xl text-rose-900 flex items-start gap-2">
                        <XCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                        <div>
                          <strong>Incorrect.</strong> Remember that ANOVA is an omnibus test.
                        </div>
                      </div>
                    )}

                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2 leading-relaxed text-slate-700">
                      <p className="font-extrabold text-slate-900 uppercase tracking-wider text-[10px]">Explanatory Rationale & Step-by-Step Breakdown:</p>
                      <p>
                        1. <strong>Omnibus Characteristic:</strong> One-Way ANOVA tests the global null hypothesis:
                        <span className="block my-2 text-center font-mono">H₀: μ₁ = μ₂ = μ₃ = μ₄</span>
                        A significant result (p = 0.003 &lt; 0.05) indicates that we reject H₀. It means <strong>at least one</strong> group mean is significantly different. It does NOT prove that <em>all</em> pairs are different.
                      </p>
                      <p>
                        2. <strong>Pair-Wise Resolution:</strong> To locate exactly where the significant differences lie without inflating our family-wise Type I error rates, we must apply a post-hoc multiple comparison adjustment. <strong>Tukey's Honestly Significant Difference (HSD)</strong> is the standard golden metric.
                      </p>
                      <p>
                        3. <strong>Why others are wrong:</strong>
                      </p>
                      <ul className="list-disc list-inside space-y-1 pl-2">
                        <li><em>Option A:</em> It claims *all* pairs differ, which is a common fallacy. Some groups (e.g., 25mg vs 50mg) might be identical.</li>
                        <li><em>Option B:</em> Failing to reject is incorrect because the global $p$-value is far below 0.05.</li>
                        <li><em>Option C:</em> Kruskal-Wallis is a non-parametric fallback and is unnecessary here since parametric assumptions hold.</li>
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Exercise 3 */}
            <div className="p-5 border-2 border-slate-200 hover:border-slate-300 bg-slate-50/50 rounded-2xl relative space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 rounded bg-indigo-100 text-indigo-700 text-[10px] font-black uppercase tracking-wider">
                  Exercise 3 (Advanced) — Automated Testing Engine
                </span>
                <span className="text-xs font-bold text-slate-500">Difficulty: 5/5</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-800 font-extrabold leading-snug">
                Review the following blueprint for an <strong>Automated Statistical Pipeline Engine</strong> written in Python. 
                The class accepts a Pandas DataFrame, checks assumptions dynamically, selects the appropriate statistical test, 
                and compiles the results.
              </p>

              {/* Code Panel */}
              <div className="space-y-1.5">
                <span className="text-[10px] font-mono font-bold text-slate-500 block">Class Architecture (Python / SciPy / Pandas):</span>
                <pre className="p-4 bg-slate-950 rounded-xl border border-slate-800 text-slate-200 text-[11px] font-mono overflow-x-auto leading-relaxed max-h-[300px] overflow-y-auto">
{`import numpy as np
import pandas as pd
from scipy import stats

class AutomatedStatEngine:
    def __init__(self, df, continuous_col, grouping_col):
        self.df = df.dropna(subset=[continuous_col, grouping_col])
        self.y_col = continuous_col
        self.g_col = grouping_col
        
    def execute_pipeline(self):
        groups = self.df[self.g_col].unique()
        group_data = [self.df[self.df[self.g_col] == g][self.y_col].values for g in groups]
        
        # 1. Check normality for all groups
        is_normal = True
        for gd in group_data:
            if len(gd) < 3: # Shapiro requires >= 3 points
                is_normal = False
                break
            _, p_norm = stats.shapiro(gd)
            if p_norm < 0.05: # Rejects normality
                is_normal = False
                
        # 2. Check Homogeneity of Variance
        _, p_levene = stats.levene(*group_data)
        equal_var = p_levene >= 0.05
        
        # 3. Dynamic test selection routing
        num_groups = len(groups)
        selected_test = ""
        stat = np.nan
        p_val = np.nan
        
        if num_groups == 2:
            if is_normal:
                # Parametric Two-Sample
                selected_test = "Student t-test" if equal_var else "Welch t-test"
                stat, p_val = stats.ttest_ind(group_data[0], group_data[1], equal_var=equal_var)
            else:
                # Non-Parametric Rank Alternative
                selected_test = "Mann-Whitney U"
                stat, p_val = stats.mannwhitneyu(group_data[0], group_data[1])
        elif num_groups >= 3:
            if is_normal and equal_var:
                selected_test = "One-Way ANOVA"
                stat, p_val = stats.f_oneway(*group_data)
            else:
                selected_test = "Kruskal-Wallis H"
                stat, p_val = stats.kruskal(*group_data)
                
        return {
            "num_groups": num_groups,
            "normality_satisfied": is_normal,
            "equal_variance_satisfied": equal_var,
            "test_applied": selected_test,
            "statistic": stat,
            "p_value": p_val,
            "conclusion": "Significant Difference" if p_val < 0.05 else "No Significant Difference"
        }`}
                </pre>
              </div>

              <p className="text-xs text-slate-800 font-extrabold leading-snug">
                Assume we feed this engine a DataFrame where the continuous variable is <code className="bg-slate-100 text-indigo-600 px-1 py-0.5 rounded">Spend</code>, 
                and the grouping variable is <code className="bg-slate-100 text-indigo-600 px-1 py-0.5 rounded">Tier</code>. 
                There are 3 unique levels in <code className="bg-slate-100 text-indigo-600 px-1 py-0.5 rounded">Tier</code> (Bronze, Silver, Gold). 
                Normality testing returns $p &lt; 0.05$ for the Bronze tier. Levene's returns $p = 0.12$. 
                What path will the engine select, and what is its theoretical justification?
              </p>

              {/* Options */}
              <div className="grid grid-cols-1 gap-2">
                {[
                  { idx: 0, text: 'One-Way ANOVA, because Levene\'s test satisfied equal variances (p >= 0.05).' },
                  { idx: 1, text: 'Kruskal-Wallis H, because normality was violated (p < 0.05) in at least one group in a multi-group setup.' },
                  { idx: 2, text: 'Welch t-test, because we have three separate group populations with a non-normal distribution.' },
                  { idx: 3, text: 'Mann-Whitney U, because non-parametric tests must be used for any three-group categorical studies.' }
                ].map((opt) => (
                  <button
                    key={opt.idx}
                    disabled={ex3Submitted}
                    onClick={() => setEx3Answer(opt.idx)}
                    className={`w-full text-left p-3.5 rounded-xl border-2 text-xs font-bold transition-all cursor-pointer flex justify-between items-center ${
                      ex3Answer === opt.idx
                        ? 'bg-indigo-50 border-indigo-600 text-indigo-950'
                        : 'bg-white border-slate-200/80 hover:border-slate-300 hover:bg-slate-50 text-slate-700'
                    }`}
                  >
                    <span>{String.fromCharCode(65 + opt.idx)}. {opt.text}</span>
                    <div className={`w-4.5 h-4.5 rounded-full border flex items-center justify-center shrink-0 ml-2 ${
                      ex3Answer === opt.idx ? 'border-indigo-600 bg-indigo-600 text-white' : 'border-slate-300'
                    }`}>
                      {ex3Answer === opt.idx && <Check className="w-3 h-3 stroke-[3]" />}
                    </div>
                  </button>
                ))}
              </div>

              {/* Submission Controls */}
              <div className="flex gap-2">
                {!ex3Submitted ? (
                  <button
                    disabled={ex3Answer === null}
                    onClick={() => setEx3Submitted(true)}
                    className="px-5 py-2 rounded-xl bg-indigo-600 text-white text-xs font-bold hover:bg-indigo-700 transition-all disabled:opacity-50 cursor-pointer shadow-sm"
                  >
                    Submit Answer
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      setEx3Answer(null);
                      setEx3Submitted(false);
                    }}
                    className="px-5 py-2 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs font-bold transition-all cursor-pointer"
                  >
                    Reset Challenge
                  </button>
                )}
              </div>

              {/* Feedback Section */}
              <AnimatePresence>
                {ex3Submitted && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="border-t border-slate-200 pt-4 space-y-3 overflow-hidden text-xs"
                  >
                    {ex3Answer === 1 ? (
                      <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-900 flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                        <div>
                          <strong>Correct!</strong> Master level assumption checks and dynamic routing.
                        </div>
                      </div>
                    ) : (
                      <div className="p-3 bg-rose-50 border border-rose-200 rounded-xl text-rose-900 flex items-start gap-2">
                        <XCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                        <div>
                          <strong>Incorrect choice.</strong> Check the group count and the normality constraint of the code block.
                        </div>
                      </div>
                    )}

                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2 leading-relaxed text-slate-700">
                      <p className="font-extrabold text-slate-900 uppercase tracking-wider text-[10px]">Explanatory Rationale & Step-by-Step Breakdown:</p>
                      <p>
                        1. <strong>Assumption Fail Safe:</strong> In lines 15-21, the class iterates through each group's values and calculates Shapiro-Wilk's test statistic. 
                        If *any* group fails (p_norm &lt; 0.05), <code className="bg-slate-100 text-indigo-600 px-1 py-0.5 rounded">is_normal</code> is set to <code className="bg-slate-100 text-indigo-600 px-1 py-0.5 rounded">False</code>. Since Bronze failed, normality is violated.
                      </p>
                      <p>
                        2. <strong>Group Count Resolution:</strong> The grouping variable <code className="bg-slate-100 text-indigo-600 px-1 py-0.5 rounded">Tier</code> has 3 unique levels (Bronze, Silver, Gold). 
                        This enters the <code className="bg-slate-100 text-indigo-600 px-1 py-0.5 rounded">num_groups &gt;= 3</code> routing branch (line 38).
                      </p>
                      <p>
                        3. <strong>Route Selection:</strong> Since <code className="bg-slate-100 text-indigo-600 px-1 py-0.5 rounded">is_normal</code> is <code className="bg-slate-100 text-indigo-600 px-1 py-0.5 rounded">False</code>, the conditional check <code className="bg-slate-100 text-indigo-600 px-1 py-0.5 rounded">if is_normal and equal_var</code> evaluates to <code className="bg-slate-100 text-indigo-600 px-1 py-0.5 rounded">False</code>. 
                        The engine falls through to the <code className="bg-slate-100 text-indigo-600 px-1 py-0.5 rounded">else</code> branch and executes **Kruskal-Wallis H** test (line 42).
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};
