import { FullSatMathChapter, MathExerciseQuestion, MathWorkedExample, MathTableData, MathDiagramSpec } from './satMathConcepts';
import { CHAPTER_3_SYSTEMS_AND_QUADRATICS_QUESTIONS } from './satMathChapter3SystemsQuestions';

// Precise linear coordinate, table, and xy-plane graph generator
function generateLinearMetadata(
  id: string,
  m: number,
  b: number,
  xVar: string,
  yVar: string,
  xTitle: string,
  yTitle: string,
  xUnit: string = '',
  yUnit: string = '',
  xRange: [number, number] = [0, 10],
  yRange: [number, number] = [0, 100]
) {
  const x1 = xRange[0];
  const x2 = Math.round(((xRange[0] + xRange[1]) / 2) * 10) / 10;
  const x3 = xRange[1];
  
  const y1 = Math.round((m * x1 + b) * 100) / 100;
  const y2 = Math.round((m * x2 + b) * 100) / 100;
  const y3 = Math.round((m * x3 + b) * 100) / 100;

  const table: MathTableData = {
    title: `Linear Relationship: ${yTitle} (${yVar}) vs ${xTitle} (${xVar})`,
    headers: [`${xTitle} (${xVar}) ${xUnit ? `[${xUnit}]` : ''}`, `${yTitle} (${yVar}) ${yUnit ? `[${yUnit}]` : ''}`],
    rows: [
      [String(x1), String(y1)],
      [String(x2), String(y2)],
      [String(x3), String(y3)]
    ]
  };

  const xStep = Math.max(1, Math.round((xRange[1] - xRange[0]) / 5));
  const yStep = Math.max(1, Math.round((yRange[1] - yRange[0]) / 5));

  const formatSlope = (val: number): string => {
    if (val === 1) return '';
    if (val === -1) return '-';
    const rounded = Math.round(val * 100) / 100;
    return String(rounded);
  };

  const formatIntercept = (val: number): string => {
    const rounded = Math.round(val * 100) / 100;
    return rounded >= 0 ? `+ ${rounded}` : `- ${Math.abs(rounded)}`;
  };

  const mLabel = Math.round(m * 100) / 100;
  const bLabel = Math.round(b * 100) / 100;

  const diagram: MathDiagramSpec = {
    id: `graph-${id}`,
    title: `${yVar} as a Linear Function of ${xVar}`,
    caption: `Line Equation: ${yVar} = ${formatSlope(m)}${xVar} ${formatIntercept(b)}. Y-intercept at (0, ${bLabel}) representing the initial starting state. Slope m = ${mLabel} representing the constant rate of change.`,
    xAxisLabel: `${xTitle} (${xVar})`,
    yAxisLabel: `${yTitle} (${yVar})`,
    xRange,
    yRange,
    xStep,
    yStep,
    curves: [
      {
        type: 'line',
        color: '#4f46e5',
        points: [[x1, y1], [x3, y3]],
        highlightPoints: [
          { x: x1, y: y1, label: `(${x1}, ${y1})`, color: '#e11d48' },
          { x: x2, y: y2, label: `(${x2}, ${y2})`, color: '#10b981' },
          { x: x3, y: y3, label: `(${x3}, ${y3})`, color: '#e11d48' }
        ]
      }
    ]
  };

  return { table, diagram };
}

// ========================================================================
// PART 2: 15 BRAND-NEW WORKED EXAMPLES (PRECISELY MAPPED FROM PDF)
// ========================================================================
const rawWorkedExamples = [
  {
    title: "Example 1: Baseline interpretation of pay rate",
    question: "A contractor uses the equation $P(d) = 150 + 12.5d$ to model total pay $P$ in dollars after working $d$ days. What does the value $150$ represent in this context?",
    options: ["Daily rate in dollars", "Guaranteed baseline starting pay", "Total number of working days", "The rate of pay increase"],
    correctAnswer: "Guaranteed baseline starting pay",
    correctIndex: 1,
    explanation: `Step-by-Step Mathematical Explanation:
1. In the slope-intercept form $y = mx + b$, the constant $b$ represents the y-intercept.
2. Here, $P(0) = 150 + 12.5(0) = 150$ dollars. This represents the fixed starting value of pay before any working days are completed.
3. Therefore, $150$ is the guaranteed baseline starting pay.

Teacher's SAT Pro-Tip:
Apply the **'Zero-State' Intercept Rule**! Whenever you see a constant alone with no variables attached, set the independent variable (in this case, days $d$) to $0$. The remaining constant value is always your starting state, fixed cost, or initial baseline!`,
    m: 12.5, b: 150, xVar: 'd', yVar: 'P', xTitle: 'Days Worked', yTitle: 'Total Pay', xUnit: 'days', yUnit: '$', xRange: [0, 8] as [number, number], yRange: [150, 250] as [number, number]
  },
  {
    title: "Example 2: Exhaustion point in ticket combinations",
    question: "A ticket agency models its revenues using the linear equation $8x + 14y = 560$, where $x$ represents adult tickets sold for $\$8$ each and $y$ represents child tickets sold for $\$14$ each. What is the maximum number of adult tickets that can be bought if no child tickets are bought?",
    options: ["40 tickets", "50 tickets", "70 tickets", "80 tickets"],
    correctAnswer: "70 tickets",
    correctIndex: 2,
    explanation: `Step-by-Step Mathematical Explanation:
1. The question asks for the maximum adult tickets ($x$) when no child tickets ($y$) are bought.
2. Set $y = 0$ in the standard form equation $8x + 14y = 560$:
   $$8x + 14(0) = 560$$
   $$8x = 560$$
3. Divide both sides by 8 to solve for $x$:
   $$x = \\frac{560}{8} = 70$$
4. Therefore, the maximum number of adult tickets is 70.

Teacher's SAT Pro-Tip:
This is a classic application of the **X-intercept / Exhaustion Point Rule**. When one commodity hits zero, the other is maximized. Setting $y=0$ leaves you with a simple one-step linear equation!`,
    m: -8/14, b: 40, xVar: 'x', yVar: 'y', xTitle: 'Adult Tickets', yTitle: 'Child Tickets', xUnit: 'tickets', yUnit: 'tickets', xRange: [0, 70] as [number, number], yRange: [0, 40] as [number, number]
  },
  {
    title: "Example 3: Flight fuel exhaustion point",
    question: "The fuel remaining in a small plane's tank is modeled by the function $W(t) = 85 - 2.5t$, where $W$ is the fuel in gallons and $t$ is flight time in hours. How many flight hours can be sustained until the fuel reaches zero?",
    options: ["30 hours", "34 hours", "38 hours", "42 hours"],
    correctAnswer: "34 hours",
    correctIndex: 1,
    explanation: `Step-by-Step Mathematical Explanation:
1. To find when the fuel is completely depleted, set the dependent variable $W(t) = 0$:
   $$0 = 85 - 2.5t$$
2. Add $2.5t$ to both sides to isolate the variable term:
   $$2.5t = 85$$
3. Divide both sides by $2.5$ to isolate $t$:
   $$t = \\frac{85}{2.5} = 34\\text{ hours}$$

Teacher's SAT Pro-Tip:
Use the **Zero-State Intercept / Exhaustion Point** logic. The x-intercept is the absolute limit of the system. Setting $W(t) = 0$ calculates the exact exhaustion point of the independent variable $t$!`,
    m: -2.5, b: 85, xVar: 't', yVar: 'W', xTitle: 'Flight Time', yTitle: 'Fuel Remaining', xUnit: 'hours', yUnit: 'gallons', xRange: [0, 34] as [number, number], yRange: [0, 85] as [number, number]
  },
  {
    title: "Example 4: Slope as constant speed",
    question: "A vehicle traveling along a highway passes coordinates $(2, 100)$ and $(6, 220)$ on a tracking map, where $x$ represents travel hours and $y$ represents distance in miles. What is the vehicle speed in mph?",
    options: ["25 mph", "30 mph", "35 mph", "40 mph"],
    correctAnswer: "30 mph",
    correctIndex: 1,
    explanation: `Step-by-Step Mathematical Explanation:
1. Speed is defined as the rate of change of distance with respect to time, which corresponds mathematically to the slope $m$ of the linear path.
2. Use the slope formula $m = \\frac{y_2 - y_1}{x_2 - x_1}$ for points $(2, 100)$ and $(6, 220)$:
   $$m = \\frac{220 - 100}{6 - 2}$$
   $$m = \\frac{120}{4} = 30\\text{ mph}$$

Teacher's SAT Pro-Tip:
Always interpret **slope as the constant rate of change**. On the SAT, units in the form of 'A per B' (miles per hour, cost per item, meters per second) represent the slope of your linear function!`,
    m: 30, b: 40, xVar: 'x', yVar: 'y', xTitle: 'Travel Time', yTitle: 'Distance', xUnit: 'hours', yUnit: 'miles', xRange: [0, 8] as [number, number], yRange: [40, 280] as [number, number]
  },
  {
    title: "Example 5: Increment cost multiplier analysis",
    question: "The monthly subscription fee for a cellular data plan is modeled by the equation $C(m) = 0.15m + 45$, where $m$ is the number of extra megabytes used over the limit. What is the increase in cost for using 120 extra megabytes?",
    options: ["$12.00", "$15.00", "$18.00", "$21.00"],
    correctAnswer: "$18.00",
    correctIndex: 2,
    explanation: `Step-by-Step Mathematical Explanation:
1. In the equation $C(m) = 0.15m + 45$, the slope $m = 0.15$ dollars represents the cost per single extra megabyte.
2. To find the cost change $\\Delta C$ for a given change in input $\\Delta m = 120$, apply the **Instant Delta Ratio Shortcut**:
   $$\\Delta C = m \\cdot \\Delta m$$
   $$\\Delta C = 0.15 \\cdot 120 = 18\\text{ dollars}$$

Teacher's SAT Pro-Tip:
Don't waste time evaluating the full equations $C(120)$ and $C(0)$ and subtracting them! When asked for a change in output due to a change in input, simply multiply the input jump directly by the slope coefficient ($0.15 \\times 120 = 18$)!`,
    m: 0.15, b: 45, xVar: 'm', yVar: 'C', xTitle: 'Extra Data', yTitle: 'Plan Cost', xUnit: 'MBs', yUnit: '$', xRange: [0, 200] as [number, number], yRange: [45, 75] as [number, number]
  },
  {
    title: "Example 6: Fractional height slope decomposition",
    question: "The height $H$ of a plant, in inches, after receiving $g$ grams of fertilizer is given by the equation $H(g) = \\frac{3g + 10}{4}$. What is the plant height growth per 1 gram of fertilizer?",
    options: ["0.25 inches", "0.50 inches", "0.75 inches", "1.00 inch"],
    correctAnswer: "0.75 inches",
    correctIndex: 2,
    explanation: `Step-by-Step Mathematical Explanation:
1. Deconstruct the fraction by dividing each numerator term by the common denominator 4:
   $$H(g) = \\frac{3g}{4} + \\frac{10}{4}$$
   $$H(g) = 0.75g + 2.5$$
2. The equation is now in standard slope-intercept form $y = mx + b$, where $m = 0.75$ represents the growth rate per gram of fertilizer.
3. Therefore, the plant grows by $0.75$ inches per 1g of fertilizer.

Teacher's SAT Pro-Tip:
**Split the Fraction!** Whenever the SAT presents a linear model as a combined fraction $\\frac{Ax + B}{C}$, split it into individual terms $\\frac{A}{C}x + \\frac{B}{C}$ to clearly isolate the slope and intercept coefficients!`,
    m: 0.75, b: 2.5, xVar: 'g', yVar: 'H', xTitle: 'Fertilizer Received', yTitle: 'Plant Height', xUnit: 'grams', yUnit: 'inches', xRange: [0, 8] as [number, number], yRange: [2.5, 8.5] as [number, number]
  },
  {
    title: "Example 7: Reciprocal rate inversion requirements",
    question: "Using the plant growth model $H(g) = \\frac{3g + 10}{4}$, how many grams of fertilizer are required to gain exactly 1 inch of height?",
    options: ["0.75 grams", "1.00 gram", "1.33 grams", "1.50 grams"],
    correctAnswer: "1.33 grams",
    correctIndex: 2,
    explanation: `Step-by-Step Mathematical Explanation:
1. From Example 6, the growth rate is $m = 0.75$ inches per gram of fertilizer.
2. The question asks for the input fertilizer weight per 1 unit of growth (output). This is the reciprocal of the slope:
   $$\\text{Fertilizer per inch} = \\frac{1}{\\text{slope}} = \\frac{1}{0.75} = \\frac{4}{3} \\approx 1.33\\text{ grams}$$

Teacher's SAT Pro-Tip:
Master the **Reciprocal Rate Inversion Strategy**. If $y$ grows by $m$ units per $x$, then 1 unit of $y$ requires exactly $\\frac{1}{m}$ units of $x$. Inverting the rate $\\frac{3}{4}\\text{ in/g}$ gives $\\frac{4}{3}\\text{ g/in}$ instantly!`,
    m: 0.75, b: 2.5, xVar: 'g', yVar: 'H', xTitle: 'Fertilizer Received', yTitle: 'Plant Height', xUnit: 'grams', yUnit: 'inches', xRange: [0, 8] as [number, number], yRange: [2.5, 8.5] as [number, number]
  },
  {
    title: "Example 8: Meaning of partial linear standard terms",
    question: "An agency models worker productivity using the standard linear equation $15x + 25y = 450$, where $x$ represents hours spent coding, $y$ represents hours spent testing, and $450$ is the total credit count earned. What is the real-world meaning of the expression $15x$ in this model?",
    options: ["The hourly coding rate", "The total coding hours worked", "The total credits earned from coding", "The ratio of coding to testing hours"],
    correctAnswer: "The total credits earned from coding",
    correctIndex: 2,
    explanation: `Step-by-Step Mathematical Explanation:
1. In the term $15x$, $15$ is the rate of credits earned per hour of coding, and $x$ is the number of coding hours.
2. Multiplying a unit rate by the total units cancels the hours unit, leaving credits:
   $$\\left(15\\frac{\\text{credits}}{\\text{hour}}\\right) \\times (x\\text{ hours}) = 15x\\text{ credits}$$
3. Therefore, $15x$ represents the total credits earned from coding.

Teacher's SAT Pro-Tip:
**Rate × Variable = Subtotal Value!** In standard form expressions $Ax + By = C$, the individual products $Ax$ and $By$ represent the total contribution of each respective category toward the overall total $C$!`,
    m: -15/25, b: 18, xVar: 'x', yVar: 'y', xTitle: 'Coding Hours', yTitle: 'Testing Hours', xUnit: 'hours', yUnit: 'hours', xRange: [0, 30] as [number, number], yRange: [0, 18] as [number, number]
  },
  {
    title: "Example 9: Quick delta output subtraction shortcut",
    question: "A metal cooling chamber's internal temperature is given by $T = 90 - 4m$, where $T$ is temperature in $^\\circ\\text{F}$ and $m$ is minutes of cooling. What is the total temperature drop over 8 minutes?",
    options: ["24°F", "28°F", "32°F", "36°F"],
    correctAnswer: "32°F",
    correctIndex: 2,
    explanation: `Step-by-Step Mathematical Explanation:
1. The cooling coefficient (slope) is $-4$ degrees per minute.
2. Since slope is constant, the drop over 8 minutes is calculated by:
   $$\\Delta T = \\text{rate} \\times \\Delta m$$
   $$\\Delta T = 4 \\times 8 = 32\\text{ degrees}$$

Teacher's SAT Pro-Tip:
Remember, **slope represents rate**. The constant $90$ has zero impact on changes or drops in temperature. Simply multiply the rate $4$ by the duration $8$ to get $32$ instantly!`,
    m: -4, b: 90, xVar: 'm', yVar: 'T', xTitle: 'Cooling Time', yTitle: 'Chamber Temp', xUnit: 'minutes', yUnit: '°F', xRange: [0, 20] as [number, number], yRange: [10, 90] as [number, number]
  },
  {
    title: "Example 10: Coefficient unit analysis in standard systems",
    question: "The equation $40a + 15b = 600$ models a transport fuel budget, where $a$ and $b$ represent sedan fuel and truck fuel in gallons, respectively, and $600$ is the total mileage target. What is the best interpretation of the coefficient $15$ in this context?",
    options: ["Truck fuel efficiency in mpg", "Total truck fuel in gallons", "Sedan fuel efficiency in mpg", "Total sedan fuel in gallons"],
    correctAnswer: "Truck fuel efficiency in mpg",
    correctIndex: 0,
    explanation: `Step-by-Step Mathematical Explanation:
1. The product $15b$ must yield a unit of miles (since the sum equals $600$ total miles).
2. Since $b$ is truck fuel in gallons, the coefficient $15$ must be in units of miles per gallon (mpg).
3. Therefore, $15$ represents the fuel efficiency of the truck, and $b$ represents the gallons used by the truck.

Teacher's SAT Pro-Tip:
**Perform dimensional analysis!** Ensure units align correctly. If the total on the right is in 'miles' and $b$ is in 'gallons', the multiplier must be 'miles per gallon' so that the gallons unit cancels: $\\text{miles} = (\\text{mpg}) \\times (\\text{gallons})$!`,
    m: -40/15, b: 40, xVar: 'a', yVar: 'b', xTitle: 'Sedan Fuel', yTitle: 'Truck Fuel', xUnit: 'gallons', yUnit: 'gallons', xRange: [0, 15] as [number, number], yRange: [0, 40] as [number, number]
  },
  {
    title: "Example 11: Negative initial coordinate meaning",
    question: "A start-up company tracks item sales $x$ and corresponding profits $y$ using points $(0, -400)$ and $(4, 0)$. What does the coordinate $-400$ represent?",
    options: ["Initial baseline setup cost", "Sales revenue per unit", "Maximum possible profit", "The variable cost per unit"],
    correctAnswer: "Initial baseline setup cost",
    correctIndex: 0,
    explanation: `Step-by-Step Mathematical Explanation:
1. The coordinate $(0, -400)$ represents the y-intercept.
2. At $x = 0$ (before any items are sold), profit is $-\$400$. This negative starting profit is the fixed setup cost or starting overhead overhead.
3. Therefore, $-400$ represents the initial production cost/fixed overhead.

Teacher's SAT Pro-Tip:
A negative y-intercept in business models almost always represents **fixed startup costs, initial investments, or overhead deficits** before sales are made!`,
    m: 100, b: -400, xVar: 'x', yVar: 'y', xTitle: 'Items Sold', yTitle: 'Profit', xUnit: 'units', yUnit: '$', xRange: [0, 4] as [number, number], yRange: [-400, 0] as [number, number]
  },
  {
    title: "Example 12: Scaled time increments using slope",
    question: "A manufacturing model calculates total sales $S$ over operating hours $h$ using the equation $S = 100 + 15h$. What is the increase in sales every 20 minutes?",
    options: ["3 sales", "5 sales", "7 sales", "10 sales"],
    correctAnswer: "5 sales",
    correctIndex: 1,
    explanation: `Step-by-Step Mathematical Explanation:
1. The hourly sales rate (slope) is $15$ sales per hour.
2. First, convert the time increment of $20$ minutes into hours:
   $$20\\text{ minutes} = \\frac{20}{60}\\text{ hours} = \\frac{1}{3}\\text{ hour}$$
3. Apply the **Instant Delta Ratio Shortcut** to find the output increase:
   $$\\Delta S = m \\cdot \\Delta h$$
   $$\\Delta S = 15 \\cdot \\left(\\frac{1}{3}\\right) = 5\\text{ sales}$$

Teacher's SAT Pro-Tip:
Always verify **unit compatibility**! If the rate is given 'per hour', but the question asks about 'minutes', convert the minutes to a fraction of an hour before performing multiplication!`,
    m: 15, b: 100, xVar: 'h', yVar: 'S', xTitle: 'Operating Hours', yTitle: 'Total Sales', xUnit: 'hours', yUnit: 'sales', xRange: [0, 8] as [number, number], yRange: [0, 250] as [number, number]
  },
  {
    title: "Example 13: Time per consultation from coordinate points",
    question: "A business consultant plots coordinate points $(0, 40)$ and $(5, 290)$, where $x$ represents the number of client consultations completed and $y$ represents total work time in minutes. What is the average time spent per consultation?",
    options: ["40 minutes", "50 minutes", "60 minutes", "70 minutes"],
    correctAnswer: "50 minutes",
    correctIndex: 1,
    explanation: `Step-by-Step Mathematical Explanation:
1. To find the work time per consultation, calculate the slope of the linear path:
   $$m = \\frac{y_2 - y_1}{x_2 - x_1} = \\frac{290 - 40}{5 - 0}$$
   $$m = \\frac{250}{5} = 50\\text{ minutes per consultation}$$

Teacher's SAT Pro-Tip:
The term 'A per B' denotes the slope. When two coordinates are provided, the slope calculates the exact average unit rate of change!`,
    m: 50, b: 40, xVar: 'x', yVar: 'y', xTitle: 'Consultations', yTitle: 'Total Time', xUnit: 'sessions', yUnit: 'minutes', xRange: [0, 5] as [number, number], yRange: [40, 290] as [number, number]
  },
  {
    title: "Example 14: Interpretation of composite algebraic constant",
    question: "An athlete tracks workout times using the equation $4t + 8(6 - t) = 36$, where $t$ is hours spent walking and $6-t$ is hours spent cycling. What does the constant $6$ represent?",
    options: ["Total walking hours", "Total cycling hours", "Total combined workout duration", "Average speed in mph"],
    correctAnswer: "Total combined workout duration",
    correctIndex: 2,
    explanation: `Step-by-Step Mathematical Explanation:
1. In the term $(6 - t)$, $t$ is walking hours.
2. For cycling hours to be expressed as $(6 - t)$, the sum of walking hours and cycling hours must be exactly equal to 6:
   $$\\text{Walking} + \\text{Cycling} = t + (6 - t) = 6$$
3. Therefore, 6 represents the total combined workout duration.

Teacher's SAT Pro-Tip:
Whenever a variable $t$ and its counterpart $(C - t)$ are both present in a modeled sum, the constant $C$ represents the overall **maximum pool or total combined amount** available to be split between the two groups!`,
    m: -1, b: 6, xVar: 't', yVar: 'y', xTitle: 'Walking Hours', yTitle: 'Cycling Hours', xUnit: 'hours', yUnit: 'hours', xRange: [0, 6] as [number, number], yRange: [0, 6] as [number, number]
  },
  {
    title: "Example 15: Surcharges on piece-wise variables",
    question: "The fee structure for a cell network is given by $F(x) = 0.12(x - 100) + 25$, where $x$ represents monthly gigabytes used for $x > 100$. What is the additional fee for using 50 extra GBs over the limit?",
    options: ["$6.00", "$12.00", "$25.00", "$31.00"],
    correctAnswer: "$6.00",
    correctIndex: 0,
    explanation: `Step-by-Step Mathematical Explanation:
1. The expression $(x - 100)$ represents the extra GBs over the 100 GB limit.
2. The coefficient $0.12$ is the rate of surcharge per single extra GB.
3. Therefore, for an excess of 50 GBs:
   $$\\text{Surcharge} = 0.12 \\times 50 = 6.00\\text{ dollars}$$

Teacher's SAT Pro-Tip:
In piece-wise or bracketed linear structures like $a(x - C) + b$, the constant $C$ is the threshold limit, the coefficient $a$ is the active slope for any usage exceeding $C$, and $b$ is the fixed cost for hitting the threshold!`,
    m: 0.12, b: 13, xVar: 'x', yVar: 'F', xTitle: 'Monthly Data', yTitle: 'Total Fee', xUnit: 'GBs', yUnit: '$', xRange: [100, 200] as [number, number], yRange: [20, 40] as [number, number]
  },
  {
    title: "Example 16: Initial Baseline fee interpretation",
    question: "The function P models the total cost in dollars for renting a utility trailer for d days: P(d) = 320 + 18.50d. What is the best interpretation of 320 in this context?",
    options: ["The daily rental fee", "The fixed initial base rental charge", "The maximum days a trailer can be rented", "The price per mile traveled"],
    correctAnswer: "The fixed initial base rental charge",
    correctIndex: 1,
    explanation: `Step-by-Step Explanation:
1. In the slope-intercept form y = mx + b, the constant b is the y-intercept (value of P when d = 0 days).
2. For this model, P(0) = 320 + 18.50(0) = 320.
3. Therefore, 320 represents the fixed initial base rental charge before any daily usage is added.

Teacher's SAT Pro-Tip:
This is the Zero-Baseline Intercept Strategy! Setting the variable d to 0 isolates the constant baseline fee, making it easy to identify.`,
    m: 18.50, b: 320, xVar: 'd', yVar: 'P', xTitle: 'Rental Days', yTitle: 'Total Cost', xUnit: 'days', yUnit: 'dollars', xRange: [0, 10] as [number, number], yRange: [320, 505] as [number, number]
  },
  {
    title: "Example 17: Reservoir drainage rate",
    question: "The function G models the remaining volume of water in gallons in a reservoir m minutes after a release valve is opened: G(m) = 450 - 12m. What does 12 represent in this context?",
    options: ["The initial volume of water in the reservoir", "The time in minutes needed to empty the reservoir", "The rate of water drainage in gallons per minute", "The remaining volume of water after one hour"],
    correctAnswer: "The rate of water drainage in gallons per minute",
    correctIndex: 2,
    explanation: `Step-by-Step Explanation:
1. The linear model is in the form G(m) = -12m + 450, where the slope coefficient of m is -12.
2. The negative sign represents a decrease. The value 12 represents the rate of change of water volume per minute.
3. Thus, 12 is the rate at which water leaves the reservoir in gallons per minute.

Teacher's SAT Pro-Tip:
Slope-as-Rate Strategy! The rate of drainage is the slope. Ignore the negative sign when asked what the volume decreases by or what rate it drains at.`,
    m: -12, b: 450, xVar: 'm', yVar: 'G', xTitle: 'Minutes Elapsed', yTitle: 'Water Volume', xUnit: 'minutes', yUnit: 'gallons', xRange: [0, 30] as [number, number], yRange: [0, 450] as [number, number]
  },
  {
    title: "Example 18: Lab stool price analysis",
    question: "A school district spent 900 dollars purchasing a desk chairs and b lab stools, represented by: 6a + 15b = 900. What is the best interpretation of 15 in this context?",
    options: ["The total number of lab stools purchased", "The price in dollars for a single lab stool", "The price in dollars for a single desk chair", "The total amount spent on desk chairs"],
    correctAnswer: "The price in dollars for a single lab stool",
    correctIndex: 1,
    explanation: `Step-by-Step Explanation:
1. In standard form 6a + 15b = 900, the constant 900 represents total dollars.
2. Since the term 15b must represent dollars, and b is the quantity of lab stools, 15 must be the price per stool (dollars/stool).
3. Therefore, 15 represents the price in dollars for a single lab stool.

Teacher's SAT Pro-Tip:
Units Dimension Inversion Trick! To find the unit of the coefficient, divide the unit of the constant (dollars) by the unit of the associated variable (stools). This gives dollars/stool, confirming the unit price.`,
    m: -6/15, b: 60, xVar: 'a', yVar: 'b', xTitle: 'Desk Chairs', yTitle: 'Lab Stools', xUnit: 'chairs', yUnit: 'stools', xRange: [0, 150] as [number, number], yRange: [0, 60] as [number, number]
  },
  {
    title: "Example 19: Crystal growth rate fractional analysis",
    question: "The function R models the height in centimeters of a growing crystal lattice t hours after a reaction begins: R(t) = (3t + 20) / 8. By how many centimeters does the height increase for every 1 hour that passes?",
    options: ["3 centimeters", "2.5 centimeters", "0.375 centimeters", "8 centimeters"],
    correctAnswer: "0.375 centimeters",
    correctIndex: 2,
    explanation: `Step-by-Step Explanation:
1. Separate the fraction into slope-intercept form: R(t) = (3/8)t + (20/8).
2. The slope coefficient of t is 3/8, which is equal to 0.375.
3. Since slope is the rate of change per unit of time, the height increases by 0.375 centimeters per hour.

Teacher's SAT Pro-Tip:
Always separate the fraction when you have (Ax + B)/C. Rewrite it as (A/C)x + B/C so you can instantly identify the true slope A/C and y-intercept B/C!`,
    m: 3/8, b: 2.5, xVar: 't', yVar: 'R', xTitle: 'Hours elapsed', yTitle: 'Height', xUnit: 'hours', yUnit: 'cm', xRange: [0, 16] as [number, number], yRange: [2.5, 8.5] as [number, number]
  },
  {
    title: "Example 20: Volumetric gas reduction rate",
    question: "The function V models the gas remaining in a storage container in liters m minutes after an engine is turned on: V(m) = 120 - 4.5m. By how many liters does the volume of gas decrease every 10 minutes?",
    options: ["4.5 liters", "45 liters", "120 liters", "12 liters"],
    correctAnswer: "45 liters",
    correctIndex: 1,
    explanation: `Step-by-Step Explanation:
1. The slope is -4.5 liters per minute.
2. To find the decrease over 10 minutes, multiply the rate by the change in minutes: Delta V = 4.5 × 10 = 45 liters.
3. Therefore, the volume decreases by 45 liters every 10 minutes.

Teacher's SAT Pro-Tip:
Instant Delta Ratio Shortcut! Multiply the change in input (10 minutes) directly by the slope rate (4.5 L/min) to get the output change (45 liters). No need to calculate full points!`,
    m: -4.5, b: 120, xVar: 'm', yVar: 'V', xTitle: 'Minutes Elapsed', yTitle: 'Gas Volume', xUnit: 'minutes', yUnit: 'liters', xRange: [0, 20] as [number, number], yRange: [30, 120] as [number, number]
  }
];

// New Systems of Equations & Quadratics Worked Examples (Examples 21 - 27) with diagrams
const rawSystemsAndQuadraticsWorkedExamples: MathWorkedExample[] = [
  {
    title: "Worked Example 21: Linear Systems by Substitution",
    question: "Solve the system of equations:\n$$\\begin{cases} y = 2x + 1 \\\\ 3x + y = 16 \\end{cases}$$",
    options: ["(2, 5)", "(3, 7)", "(4, 9)", "(5, 11)"],
    correctAnswer: "(3, 7)",
    correctIndex: 1,
    explanation: `Step-by-Step Algebraic Walkthrough:
1. Substitute $y = 2x + 1$ directly into the second equation:
   $$3x + (2x + 1) = 16$$
2. Combine like terms:
   $$5x + 1 = 16 \\implies 5x = 15 \\implies x = 3$$
3. Substitute $x = 3$ back into the first equation to find $y$:
   $$y = 2(3) + 1 = 6 + 1 = 7$$
4. Check the solution in both equations:
   - Eq 1: $7 = 2(3) + 1 = 7$ (True)
   - Eq 2: $3(3) + 7 = 9 + 7 = 16$ (True)
5. Therefore, the solution is $(x, y) = (3, 7)$.

Teacher's SAT Pro-Tip:
Substitution is fastest whenever an equation is already isolated for $y$ or $x$ ($y = \\dots$ or $x = \\dots$). Plug the expression directly into the other equation in parentheses to avoid sign mistakes!`,
    diagram: {
      title: 'Worked Example 21: Intersection of y = 2x + 1 & 3x + y = 16 at (3, 7)',
      xAxisLabel: 'x',
      yAxisLabel: 'y',
      xRange: [-1, 7],
      yRange: [-2, 20],
      xStep: 1,
      yStep: 2,
      curves: [
        {
          type: 'line',
          label: 'y = 2x + 1',
          color: '#3b82f6',
          points: [[0, 1], [3, 7], [5, 11]],
          strokeWidth: 2.5
        },
        {
          type: 'line',
          label: '3x + y = 16 (y = -3x + 16)',
          color: '#10b981',
          points: [[0, 16], [3, 7], [5, 1]],
          strokeWidth: 2.5,
          highlightPoints: [
            { x: 3, y: 7, label: 'Solution (3, 7)', color: '#ef4444' }
          ]
        }
      ]
    }
  },
  {
    title: "Worked Example 22: Linear Systems by Elimination",
    question: "Solve the system of equations:\n$$\\begin{cases} 4x + 3y = 23 \\\\ 4x - 3y = 9 \\end{cases}$$",
    options: ["(4, 7/3)", "(3, 11/3)", "(4, 2)", "(5, 1)"],
    correctAnswer: "(4, 7/3)",
    correctIndex: 0,
    explanation: `Step-by-Step Algebraic Walkthrough:
1. Observe that the $y$-terms have equal magnitude and opposite signs ($+3y$ and $-3y$). Add the two equations together:
   $$(4x + 3y) + (4x - 3y) = 23 + 9$$
   $$8x = 32 \\implies x = 4$$
2. Substitute $x = 4$ into the first equation $4x + 3y = 23$:
   $$4(4) + 3y = 23 \\implies 16 + 3y = 23$$
   $$3y = 7 \\implies y = \\frac{7}{3}$$
3. Check in the second equation:
   $$4(4) - 3\\left(\\frac{7}{3}\\right) = 16 - 7 = 9 \\quad \\checkmark$$
4. Therefore, the exact solution is $(x, y) = \\left(4, \\frac{7}{3}\\right) \\approx (4, 2.33)$.

Teacher's SAT Pro-Tip:
Look for coefficient symmetry! Adding eliminated $y$ immediately in one step. If the signs had been identical ($+3y$ and $+3y$), subtracting the two equations would have eliminated $y$ just as fast.`,
    diagram: {
      title: 'Worked Example 22: Elimination Solution (4, 7/3) for 4x + 3y = 23 & 4x - 3y = 9',
      xAxisLabel: 'x',
      yAxisLabel: 'y',
      xRange: [0, 8],
      yRange: [-3, 10],
      xStep: 1,
      yStep: 2,
      curves: [
        {
          type: 'line',
          label: '4x + 3y = 23 (y = -4/3x + 23/3)',
          color: '#3b82f6',
          points: [[1, 6.33], [4, 2.33], [7, -1.67]],
          strokeWidth: 2.5
        },
        {
          type: 'line',
          label: '4x - 3y = 9 (y = 4/3x - 3)',
          color: '#10b981',
          points: [[1, -1.67], [4, 2.33], [7, 6.33]],
          strokeWidth: 2.5,
          highlightPoints: [
            { x: 4, y: 2.33, label: 'Solution (4, 7/3)', color: '#ef4444' }
          ]
        }
      ]
    }
  },
  {
    title: "Worked Example 23: Inconsistent Linear System (No Solution / Parallel Lines)",
    question: "Determine the number of solutions to the following system of linear equations:\n$$\\begin{cases} y = 5x + 2 \\\\ 10x - 2y = 3 \\end{cases}$$",
    options: ["0 (No solution)", "1 solution", "2 solutions", "Infinitely many solutions"],
    correctAnswer: "0 (No solution)",
    correctIndex: 0,
    explanation: `Step-by-Step Algebraic Walkthrough:
1. Rewrite the second equation in slope-intercept form $y = mx + b$:
   $$10x - 2y = 3 \\implies -2y = -10x + 3$$
   $$y = \\frac{-10x}{-2} + \\frac{3}{-2} \\implies y = 5x - \\frac{3}{2}$$
2. Compare the slopes and intercepts of both lines:
   - Line 1: $m_1 = 5$, $b_1 = 2$
   - Line 2: $m_2 = 5$, $b_2 = -1.5$
3. Because both lines have the exact same slope ($m = 5$) but different y-intercepts ($2 \\neq -1.5$), they are parallel distinct lines.
4. Parallel distinct lines never intersect in the coordinate plane.
5. Therefore, the system has 0 solutions (no solution).

Teacher's SAT Pro-Tip:
Same slope + Different y-intercept = No Solution! Parallel lines maintain constant distance and never meet.`,
    diagram: {
      title: 'Worked Example 23: Parallel Lines y = 5x + 2 & y = 5x - 1.5 (0 Solutions)',
      xAxisLabel: 'x',
      yAxisLabel: 'y',
      xRange: [-3, 3],
      yRange: [-14, 16],
      xStep: 1,
      yStep: 4,
      curves: [
        {
          type: 'line',
          label: 'y = 5x + 2 (b = 2)',
          color: '#3b82f6',
          points: [[-2, -8], [0, 2], [2, 12]],
          strokeWidth: 2.5
        },
        {
          type: 'line',
          label: 'y = 5x - 1.5 (b = -1.5)',
          color: '#dc2626',
          points: [[-2, -11.5], [0, -1.5], [2, 8.5]],
          strokeWidth: 2.5,
          style: 'dashed'
        }
      ]
    }
  },
  {
    title: "Worked Example 24: Quadratic Equations by Factoring",
    question: "Solve the quadratic equation by factoring:\n$$x^2 - 9x + 20 = 0$$",
    options: ["x = 2, 10", "x = -4, -5", "x = 4, 5", "x = -2, -10"],
    correctAnswer: "x = 4, 5",
    correctIndex: 2,
    explanation: `Step-by-Step Algebraic Walkthrough:
1. Find two numbers whose product is $+20$ and whose sum is $-9$:
   $$(-4) \\times (-5) = +20$$
   $$(-4) + (-5) = -9$$
2. Express the quadratic in factored form:
   $$(x - 4)(x - 5) = 0$$
3. Apply the Zero-Product Property ($AB = 0 \\implies A = 0 \\text{ or } B = 0$):
   $$x - 4 = 0 \\implies x = 4$$
   $$x - 5 = 0 \\implies x = 5$$
4. Therefore, the solutions (roots) are $x = 4$ and $x = 5$.

Teacher's SAT Pro-Tip:
Sum-and-Product Technique: In $x^2 + bx + c = 0$, look for numbers $p$ and $q$ where $pq = c$ and $p + q = b$. The factors are $(x + p)(x + q) = 0$, giving roots $x = -p, -q$!`,
    diagram: {
      title: 'Worked Example 24: Parabola y = x² - 9x + 20 with Roots x = 4 and x = 5',
      xAxisLabel: 'x',
      yAxisLabel: 'y',
      xRange: [2, 7],
      yRange: [-2, 8],
      xStep: 1,
      yStep: 2,
      curves: [
        {
          type: 'function',
          fnType: 'parabola',
          label: 'y = x² - 9x + 20',
          color: '#3b82f6',
          points: [
            [2, 6], [3, 2], [4, 0], [4.5, -0.25], [5, 0], [6, 2], [7, 6]
          ],
          highlightPoints: [
            { x: 4, y: 0, label: 'Root x = 4', color: '#10b981' },
            { x: 5, y: 0, label: 'Root x = 5', color: '#10b981' },
            { x: 4.5, y: -0.25, label: 'Vertex (4.5, -0.25)', color: '#ef4444' }
          ]
        }
      ]
    }
  },
  {
    title: "Worked Example 25: Solving Quadratics with the Quadratic Formula",
    question: "Solve the quadratic equation:\n$$2x^2 + 3x - 7 = 0$$",
    options: ["x = (-3 ± √65) / 4", "x = (3 ± √65) / 4", "x = (-3 ± √47) / 4", "x = (-3 ± √65) / 2"],
    correctAnswer: "x = (-3 ± √65) / 4",
    correctIndex: 0,
    explanation: `Step-by-Step Algebraic Walkthrough:
1. Identify the coefficients: $a = 2$, $b = 3$, $c = -7$.
2. State the quadratic formula:
   $$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$$
3. Compute the discriminant inside the radical:
   $$b^2 - 4ac = 3^2 - 4(2)(-7) = 9 - (-56) = 9 + 56 = 65$$
4. Substitute into the full formula:
   $$x = \\frac{-3 \\pm \\sqrt{65}}{2(2)} = \\frac{-3 \\pm \\sqrt{65}}{4}$$
5. The two exact solutions are $x = \\frac{-3 + \\sqrt{65}}{4} \\approx 1.27$ and $x = \\frac{-3 - \\sqrt{65}}{4} \\approx -2.77$.

Teacher's SAT Pro-Tip:
When a quadratic cannot be factored cleanly with integers, go directly to the quadratic formula. Be extra careful with signs in $-4ac$: negative times negative is positive!`,
    diagram: {
      title: 'Worked Example 25: Parabola y = 2x² + 3x - 7 with Roots at (-3 ± √65)/4',
      xAxisLabel: 'x',
      yAxisLabel: 'y',
      xRange: [-5, 3],
      yRange: [-10, 15],
      xStep: 1,
      yStep: 4,
      curves: [
        {
          type: 'function',
          fnType: 'parabola',
          label: 'y = 2x² + 3x - 7',
          color: '#3b82f6',
          points: [
            [-4, 13], [-2.77, 0], [-2, -5], [-0.75, -8.125], [0, -7], [1.27, 0], [2, 7]
          ],
          highlightPoints: [
            { x: -2.77, y: 0, label: 'x ≈ -2.77', color: '#10b981' },
            { x: 1.27, y: 0, label: 'x ≈ 1.27', color: '#10b981' },
            { x: -0.75, y: -8.125, label: 'Vertex (-0.75, -8.13)', color: '#ef4444' }
          ]
        }
      ]
    }
  },
  {
    title: "Worked Example 26: Number of Real Solutions via the Discriminant",
    question: "How many real solutions does the following quadratic equation have?\n$$3x^2 + 4x + 8 = 0$$",
    options: ["0 real solutions", "1 real solution", "2 real solutions", "Infinitely many solutions"],
    correctAnswer: "0 real solutions",
    correctIndex: 0,
    explanation: `Step-by-Step Discriminant Analysis:
1. Identify coefficients: $a = 3$, $b = 4$, $c = 8$.
2. Calculate the discriminant $\\Delta = b^2 - 4ac$:
   $$\\Delta = 4^2 - 4(3)(8) = 16 - 96 = -80$$
3. Evaluate the sign of the discriminant:
   - $\\Delta = -80 < 0$ (negative).
4. Since the discriminant is negative, taking the square root yields non-real complex numbers.
5. Therefore, the equation has 0 real solutions.

Teacher's SAT Pro-Tip:
Don't solve if the question only asks "How many real solutions?"! Calculate $\\Delta = b^2 - 4ac$ in 10 seconds:
- $\\Delta > 0 \\implies 2$ real solutions.
- $\\Delta = 0 \\implies 1$ real solution.
- $\\Delta < 0 \\implies 0$ real solutions.`,
    diagram: {
      title: 'Worked Example 26: Parabola y = 3x² + 4x + 8 Floating Above x-axis (0 Real Roots)',
      xAxisLabel: 'x',
      yAxisLabel: 'y',
      xRange: [-4, 2],
      yRange: [0, 26],
      xStep: 1,
      yStep: 4,
      curves: [
        {
          type: 'function',
          fnType: 'parabola',
          label: 'y = 3x² + 4x + 8',
          color: '#3b82f6',
          points: [
            [-3, 23], [-2, 12], [-1, 7], [-0.67, 6.67], [0, 8], [1, 15]
          ],
          highlightPoints: [
            { x: -0.67, y: 6.67, label: 'Vertex (-0.67, 6.67) > 0', color: '#ef4444' }
          ]
        }
      ]
    }
  },
  {
    title: "Worked Example 27: Linear-Quadratic System of Equations (Line + Parabola)",
    question: "Find the intersection points of the line and parabola system:\n$$\\begin{cases} y = x + 2 \\\\ y = x^2 - 4 \\end{cases}$$",
    options: ["(2, 4) and (-1, 1)", "(3, 5) and (-2, 0)", "(4, 6) and (-3, -1)", "(1, 3) and (-2, 0)"],
    correctAnswer: "(3, 5) and (-2, 0)",
    correctIndex: 1,
    explanation: `Step-by-Step Algebraic Walkthrough:
1. Set the expressions for $y$ equal to each other:
   $$x + 2 = x^2 - 4$$
2. Rearrange all terms to one side to form a standard quadratic equation:
   $$x^2 - x - 6 = 0$$
3. Factor the quadratic:
   $$(x - 3)(x + 2) = 0$$
4. Solve for the x-coordinates:
   $$x = 3 \\quad \\text{or} \\quad x = -2$$
5. Find corresponding y-coordinates using $y = x + 2$:
   - When $x = 3$: $y = 3 + 2 = 5 \\implies (3, 5)$
   - When $x = -2$: $y = -2 + 2 = 0 \\implies (-2, 0)$
6. The points of intersection are $(3, 5)$ and $(-2, 0)$.

Teacher's SAT Pro-Tip:
Linear + Quadratic Systems: Substitute the linear equation into the quadratic, factor or use the quadratic formula to get the $x$-values, and then plug each $x$ back into the LINEAR equation to find the matching $y$-values!`,
    diagram: {
      title: 'Worked Example 27: Line y = x + 2 Intersecting Parabola y = x² - 4 at (-2, 0) & (3, 5)',
      xAxisLabel: 'x',
      yAxisLabel: 'y',
      xRange: [-4, 5],
      yRange: [-6, 12],
      xStep: 1,
      yStep: 2,
      curves: [
        {
          type: 'function',
          fnType: 'parabola',
          label: 'y = x² - 4',
          color: '#3b82f6',
          points: [
            [-3, 5], [-2, 0], [-1, -3], [0, -4], [1, -3], [2, 0], [3, 5], [4, 12]
          ]
        },
        {
          type: 'line',
          label: 'y = x + 2',
          color: '#10b981',
          points: [[-3, -1], [-2, 0], [0, 2], [3, 5], [4, 6]],
          strokeWidth: 2.5,
          highlightPoints: [
            { x: -2, y: 0, label: 'Pt 1: (-2, 0)', color: '#ef4444' },
            { x: 3, y: 5, label: 'Pt 2: (3, 5)', color: '#ef4444' }
          ]
        }
      ]
    }
  }
];

// Map worked examples to rich structured format with dynamic coordinate charts & tables
export const CHAPTER_3_WORKED_EXAMPLES: MathWorkedExample[] = [
  ...rawWorkedExamples.map((ex, idx) => {
    const { table, diagram } = generateLinearMetadata(
      `ex-${idx + 1}`,
      ex.m, ex.b,
      ex.xVar, ex.yVar,
      ex.xTitle, ex.yTitle,
      ex.xUnit, ex.yUnit,
      ex.xRange, ex.yRange
    );
    return {
      title: ex.title,
      question: ex.question,
      options: ex.options,
      correctAnswer: ex.correctAnswer,
      correctIndex: ex.correctIndex,
      explanation: ex.explanation,
      table,
      diagram
    };
  }),
  ...rawSystemsAndQuadraticsWorkedExamples
];

// ========================================================================
// PART 3: 40 NEW PRACTICE QUESTIONS & EXPLANATIONS (DIVIDED INTO MODULES)
// ========================================================================
const rawPracticeQuestions = [
  // ---------------- MODULE 1: EASY / MEDIUM (Q1 - Q20) ----------------
  {
    qNumber: 1,
    modNumber: 1,
    question: "A water tank drains according to the model $S(t) = 500 - 15t$, where $S(t)$ represents remaining water in liters after $t$ minutes of draining. What does the value $15$ represent?",
    options: ["The starting water capacity", "The drainage rate in L/min", "The total time to drain the tank", "The remaining volume of water"],
    correctIndex: 1, correctAnswerText: "The drainage rate in L/min",
    explanation: `Step-by-Step Explanation:
1. The equation $S(t) = 500 - 15t$ is in slope-intercept form $y = mx + b$, where $b = 500$ and $m = -15$.
2. The slope $m = -15$ indicates that the water level decreases by 15 liters for every single minute of draining.
3. Therefore, 15 is the constant drainage rate in liters per minute.

Teacher's SAT Pro-Tip:
Slopes are rates! Watch the negative sign—the negative slope simply denotes that the remaining volume is decreasing, confirming a constant drainage rate.`,
    m: -15, b: 500, xVar: 't', yVar: 'S', xTitle: 'Drain Time', yTitle: 'Water Volume', xUnit: 'min', yUnit: 'liters', xRange: [0, 30] as [number, number], yRange: [50, 500] as [number, number]
  },
  {
    qNumber: 2,
    modNumber: 1,
    question: "A company models its packaging limits using the equation $5x + 12y = 240$. What is the maximum value of $x$ when $y = 0$?",
    options: ["12", "24", "40", "48"],
    correctIndex: 3, correctAnswerText: "48",
    explanation: `Step-by-Step Explanation:
1. Substitute $y = 0$ into the standard form equation:
   $$5x + 12(0) = 240$$
   $$5x = 240$$
2. Solve for $x$ by dividing both sides by 5:
   $$x = \\frac{240}{5} = 48$$
3. Therefore, the maximum value of $x$ is 48.

Teacher's SAT Pro-Tip:
This calculates the x-intercept of the line. Set $y = 0$ and isolate $x$ to find the exhaustion boundary!`,
    m: -5/12, b: 20, xVar: 'x', yVar: 'y', xTitle: 'x-units', yTitle: 'y-units', xUnit: 'units', yUnit: 'units', xRange: [0, 48] as [number, number], yRange: [0, 20] as [number, number]
  },
  {
    qNumber: 3,
    modNumber: 1,
    question: "A linear function is modeled as $f(x) = 18 + 4.5x$. What is the change in the value of $f(x)$ when $x$ increases by exactly $6$?",
    options: ["18", "24", "27", "30"],
    correctIndex: 2, correctAnswerText: "27",
    explanation: `Step-by-Step Explanation:
1. The slope of the function is $m = 4.5$.
2. To calculate output change for an input jump of $\\Delta x = 6$, multiply the jump by the slope:
   $$\\Delta f(x) = m \\cdot \\Delta x = 4.5 \\times 6 = 27$$
3. Therefore, $f(x)$ increases by 27.

Teacher's SAT Pro-Tip:
Apply the **Instant Delta Ratio Shortcut**! Output change $\\Delta y$ is always equal to the slope multiplied by the input shift $\\Delta x$.`,
    m: 4.5, b: 18, xVar: 'x', yVar: 'y', xTitle: 'Input x', yTitle: 'Output f(x)', xUnit: 'units', yUnit: 'units', xRange: [0, 8] as [number, number], yRange: [18, 54] as [number, number]
  },
  {
    qNumber: 4,
    modNumber: 1,
    question: "An object is tracked moving from a base station using the equation $d = 0.15t + 2$, where $d$ is distance in miles and $t$ is time in minutes. What is the starting distance of the object at $t = 0$?",
    options: ["0.15 miles", "1.50 miles", "2.00 miles", "2.15 miles"],
    correctIndex: 2, correctAnswerText: "2.00 miles",
    explanation: `Step-by-Step Explanation:
1. Substitute $t = 0$ into the equation:
   $$d = 0.15(0) + 2 = 2\\text{ miles}$$
2. The constant term 2 represents the y-intercept, which is the starting distance of the object.

Teacher's SAT Pro-Tip:
Y-intercept represents the initial baseline. When $t = 0$, the variable term disappears, leaving only the starting baseline constant!`,
    m: 0.15, b: 2, xVar: 't', yVar: 'd', xTitle: 'Time Elapsed', yTitle: 'Distance', xUnit: 'min', yUnit: 'miles', xRange: [0, 20] as [number, number], yRange: [2, 5] as [number, number]
  },
  {
    qNumber: 5,
    modNumber: 1,
    question: "A line is represented by the standard equation $20x + 35y = 700$. What is the slope of this line when written in the $y = mx + b$ slope-intercept form?",
    options: ["-4/7", "-7/4", "4/7", "20/35"],
    correctIndex: 0, correctAnswerText: "-4/7",
    explanation: `Step-by-Step Explanation:
1. Isolate $y$ from the standard form equation:
   $$35y = -20x + 700$$
2. Divide both sides by 35:
   $$y = -\\frac{20}{35}x + \\frac{700}{35}$$
3. Simplify the coefficients:
   $$y = -\\frac{4}{7}x + 20$$
4. Therefore, the slope is $-\\frac{4}{7}$.

Teacher's SAT Pro-Tip:
For any standard line $Ax + By = C$, the slope is always given by the **Coefficient-to-Unit Ratio Strategy** formula: $m = -\\frac{A}{B}$. Here, $m = -\\frac{20}{35} = -\\frac{4}{7}$!`,
    m: -4/7, b: 20, xVar: 'x', yVar: 'y', xTitle: 'x-axis', yTitle: 'y-axis', xUnit: 'units', yUnit: 'units', xRange: [0, 35] as [number, number], yRange: [0, 20] as [number, number]
  },
  {
    qNumber: 6,
    modNumber: 1,
    question: "A line passes through the coordinates $(0, 50)$ and $(10, 0)$ in the coordinate plane. What is the slope of this line?",
    options: ["-5", "-1/5", "5", "10"],
    correctIndex: 0, correctAnswerText: "-5",
    explanation: `Step-by-Step Explanation:
1. Apply the slope formula $m = \\frac{y_2 - y_1}{x_2 - x_1}$ for points $(0, 50)$ and $(10, 0)$:
   $$m = \\frac{0 - 50}{10 - 0} = \\frac{-50}{10} = -5$$
2. Therefore, the slope of the line is $-5$.

Teacher's SAT Pro-Tip:
With intercepts $(0, y_1)$ and $(x_2, 0)$, the slope is always $-\\frac{\\text{y-intercept}}{\\text{x-intercept}} = -\\frac{50}{10} = -5$!`,
    m: -5, b: 50, xVar: 'x', yVar: 'y', xTitle: 'x-axis', yTitle: 'y-axis', xUnit: 'units', yUnit: 'units', xRange: [0, 10] as [number, number], yRange: [0, 50] as [number, number]
  },
  {
    qNumber: 7,
    modNumber: 1,
    question: "An order cost function is given by $C(x) = 2.50x + 15$, where $C$ is total cost in dollars and $x$ is the number of custom decals ordered. How many additional decals can be bought with an extra budget increase of $\$25$?",
    options: ["8", "10", "12", "15"],
    correctIndex: 1, correctAnswerText: "10",
    explanation: `Step-by-Step Explanation:
1. The unit cost per decal (slope) is $\$2.50$.
2. To find the increase in count $\\Delta x$ for an excess budget $\\Delta C = 25$:
   $$\\Delta C = m \\cdot \\Delta x$$
   $$25 = 2.50 \\cdot \\Delta x \\implies \\Delta x = \\frac{25}{2.50} = 10$$
3. Therefore, 10 additional decals can be purchased.

Teacher's SAT Pro-Tip:
Divide the budget increase directly by the unit price (slope coefficient) to instantly obtain the item count change!`,
    m: 2.5, b: 15, xVar: 'x', yVar: 'C', xTitle: 'Decals Ordered', yTitle: 'Order Cost', xUnit: 'units', yUnit: '$', xRange: [0, 20] as [number, number], yRange: [15, 65] as [number, number]
  },
  {
    qNumber: 8,
    modNumber: 1,
    question: "The power remaining in a backup accumulator battery is modeled by $E(h) = 1200 - 80h$, where $E$ is energy in watt-hours and $h$ is active run time in hours. What does the value $h = 15$ represent in this system?",
    options: ["The battery's maximum power", "The power consumed per hour", "The time when power is exhausted and hits zero", "The total charging time"],
    correctIndex: 2, correctAnswerText: "Time when energy reaches zero",
    explanation: `Step-by-Step Explanation:
1. Substitute $h = 15$ into the energy equation:
   $$E(15) = 1200 - 80(15) = 1200 - 1200 = 0$$
2. Since the energy remaining is 0 at this time, $15$ represents the time when the energy reaches zero.

Teacher's SAT Pro-Tip:
This calculates the x-intercept of the model. The value of the independent variable that makes the output 0 is always the 'exhaustion point'!`,
    m: -80, b: 1200, xVar: 'h', yVar: 'E', xTitle: 'Run Time', yTitle: 'Power Energy', xUnit: 'hours', yUnit: 'Wh', xRange: [0, 15] as [number, number], yRange: [0, 1200] as [number, number]
  },
  {
    qNumber: 9,
    modNumber: 1,
    question: "A line has a constant slope of $m = 3$ and passes through the point $(2, 7)$ in the xy-plane. What is the y-intercept of this line?",
    options: ["1", "2", "3", "4"],
    correctIndex: 0, correctAnswerText: "1",
    explanation: `Step-by-Step Explanation:
1. Use the slope-intercept equation $y = mx + b$ with $m = 3$:
   $$y = 3x + b$$
2. Substitute point $(2, 7)$ to find $b$:
   $$7 = 3(2) + b$$
   $$7 = 6 + b \\implies b = 1$$
3. Therefore, the y-intercept of the line is 1.

Teacher's SAT Pro-Tip:
Plug coordinates into $y = mx + b$ to find $b$ in a single step!`,
    m: 3, b: 1, xVar: 'x', yVar: 'y', xTitle: 'x-axis', yTitle: 'y-axis', xUnit: 'units', yUnit: 'units', xRange: [0, 5] as [number, number], yRange: [0, 16] as [number, number]
  },
  {
    qNumber: 10,
    modNumber: 1,
    question: "A linear model for shipping weight is given by $4a + 9b = 360$, where $b$ is the fuel weight in kilograms and $a$ represents structural mass. What is the real-world meaning of the term $9b$?",
    options: ["The unit weight of fuel", "The total fuel mass of all items of type b", "The total weight of the structure", "The combined total shipping weight"],
    correctIndex: 1, correctAnswerText: "Total mass of all items of type b",
    explanation: `Step-by-Step Explanation:
1. In the term $9b$, $b$ represents fuel amount, and 9 is the weight multiplier.
2. The product of weight rate and volume yields the total subtotal weight.
3. Therefore, $9b$ represents the total mass of fuel contributed by item group $b$.

Teacher's SAT Pro-Tip:
The standard term $Ax$ always represents the combined subtotal contribution of $x$ to the overall total $C$!`,
    m: -4/9, b: 40, xVar: 'a', yVar: 'b', xTitle: 'Structural Mass', yTitle: 'Fuel weight', xUnit: 'kg', yUnit: 'kg', xRange: [0, 90] as [number, number], yRange: [0, 40] as [number, number]
  },
  {
    qNumber: 11,
    modNumber: 1,
    question: "A tournament score is calculated using the equation $P(r) = 80 - 5r$, where $P$ is points remaining and $r$ is elapsed rounds. What is the interpretation of the statement $P(6) = 50$?",
    options: ["There are 50 points remaining after 6 rounds", "The score decreases by 6 points per round", "The player starts with 50 points", "The player earns 50 points in 6 rounds"],
    correctIndex: 0, correctAnswerText: "50 points remaining after 6 rounds",
    explanation: `Step-by-Step Explanation:
1. In the function notation $P(r) = S$, the input value inside parentheses is $r = 6$ (rounds).
2. The output value is $P = 50$ (remaining points).
3. Therefore, the statement means there are exactly 50 points remaining after completing 6 rounds.

Teacher's SAT Pro-Tip:
Match inputs and outputs systematically! $P(\\text{input}) = \\text{output}$. Here, $\\text{input} = 6\\text{ rounds}$ and $\\text{output} = 50\\text{ points remaining}$!`,
    m: -5, b: 80, xVar: 'r', yVar: 'P', xTitle: 'Rounds Played', yTitle: 'Points Left', xUnit: 'rounds', yUnit: 'points', xRange: [0, 10] as [number, number], yRange: [30, 80] as [number, number]
  },
  {
    qNumber: 12,
    modNumber: 1,
    question: "A company's cumulative cash ledger is modeled as a line passing through $(0, -250)$ and $(10, 0)$, where $y$ is net profit in dollars and $x$ is items manufactured. What does $-250$ represent?",
    options: ["The sales price per unit", "The variable manufacturing cost", "The base overhead loss before any sales are made", "The break-even items goal"],
    correctIndex: 2, correctAnswerText: "Base overhead loss before sales",
    explanation: `Step-by-Step Explanation:
1. The point $(0, -250)$ is the y-intercept where $x = 0$ (sales count is zero).
2. A negative profit value of $-\$250$ at zero sales represents the initial startup deficit or base fixed overhead.
3. Therefore, $-250$ represents the base overhead loss before sales.

Teacher's SAT Pro-Tip:
A negative constant term in business functions represents the initial seed investment or debt overhead required before production starts!`,
    m: 25, b: -250, xVar: 'x', yVar: 'y', xTitle: 'Units Built', yTitle: 'Cumulative Cash', xUnit: 'units', yUnit: '$', xRange: [0, 10] as [number, number], yRange: [-250, 0] as [number, number]
  },
  {
    qNumber: 13,
    modNumber: 1,
    question: "The graph representing distance versus travel time has a constant slope of $65$. What is the real-world meaning of this slope?",
    options: ["The total distance traveled", "An average travel speed of 65 mph", "The fuel usage rate", "The total duration of the trip"],
    correctIndex: 1, correctAnswerText: "Speed of 65 mph",
    explanation: `Step-by-Step Explanation:
1. Since the slope is the vertical change divided by the horizontal change:
   $$\\text{Slope} = \\frac{\\Delta\\text{ distance}}{\\Delta\\text{ time}}$$
2. This ratio represents the speed in miles per hour.
3. A slope of 65 means a travel rate of 65 miles per single hour (65 mph).

Teacher's SAT Pro-Tip:
Units verify slopes! Distance/Time = Miles/Hour, which denotes speed.`,
    m: 65, b: 0, xVar: 't', yVar: 'd', xTitle: 'Trip Time', yTitle: 'Trip Distance', xUnit: 'hours', yUnit: 'miles', xRange: [0, 5] as [number, number], yRange: [0, 325] as [number, number]
  },
  {
    qNumber: 14,
    modNumber: 1,
    question: "A dynamic reaction's temperature is given by $T = 40 + 6h$, where $T$ is temperature in $^\\circ\\text{F}$ and $h$ is heating hours. What is the temperature increase in 20 minutes?",
    options: ["2°F", "3°F", "4°F", "6°F"],
    correctIndex: 0, correctAnswerText: "2°F",
    explanation: `Step-by-Step Explanation:
1. The rate of heating is $6^\\circ\\text{F}$ per hour.
2. First, convert $20$ minutes into fraction hours:
   $$20\\text{ minutes} = \\frac{20}{60}\\text{ hour} = \\frac{1}{3}\\text{ hour}$$
3. Find the temperature shift:
   $$\\Delta T = 6 \\times \\frac{1}{3} = 2^\\circ\\text{F}$$

Teacher's SAT Pro-Tip:
Ensure unit parity! Convert minutes to hours ($\\frac{1}{3}\\text{ hr}$) and multiply directly by the slope coefficient ($6 \\times \\frac{1}{3} = 2$)!`,
    m: 6, b: 40, xVar: 'h', yVar: 'T', xTitle: 'Heating Hours', yTitle: 'Reaction Temp', xUnit: 'hours', yUnit: '°F', xRange: [0, 3] as [number, number], yRange: [40, 58] as [number, number]
  },
  {
    qNumber: 15,
    modNumber: 1,
    question: "A material stress model yields $w = 12 - 3k$, where $w$ is width in millimeters and $k$ represents force units. What is the meaning of the constant $3$?",
    options: ["The starting thickness width", "The maximum force sustained", "The decrease of 3 units of width per unit of force k", "The total force threshold"],
    correctIndex: 2, correctAnswerText: "Decrease of 3 units w per unit k",
    explanation: `Step-by-Step Explanation:
1. The equation $w = -3k + 12$ has a slope $m = -3$.
2. This slope indicates that for every 1 unit increase in force $k$, the width $w$ decreases by exactly 3 units.
3. Therefore, $3$ is the constant rate of width decrease per unit force.

Teacher's SAT Pro-Tip:
Negative slopes denote rate decreases! The constant $3$ represents the magnitude of this constant reduction.`,
    m: -3, b: 12, xVar: 'k', yVar: 'w', xTitle: 'Force Applied', yTitle: 'Material Width', xUnit: 'units', yUnit: 'mm', xRange: [0, 4] as [number, number], yRange: [0, 12] as [number, number]
  },
  {
    qNumber: 16,
    modNumber: 1,
    question: "A student plots height growth points $(0, 30)$ and $(4, 190)$, where $y$ is output weight and $x$ is feeding hours. What does the slope of the line represent?",
    options: ["An initial starting weight of 30 units", "An average growth rate of 40 units per hour", "A total weight gain of 160 units", "The total feeding cycle duration"],
    correctIndex: 1, correctAnswerText: "40 units per hour rate",
    explanation: `Step-by-Step Explanation:
1. Calculate the slope $m = \\frac{y_2 - y_1}{x_2 - x_1}$:
   $$m = \\frac{190 - 30}{4 - 0} = \\frac{160}{4} = 40$$
2. Since slope is the rate of output per unit input, it denotes an average increase rate of 40 units per hour.

Teacher's SAT Pro-Tip:
The slope measures the exact hourly speed or unit rate of growth!`,
    m: 40, b: 30, xVar: 'x', yVar: 'y', xTitle: 'Feeding Hours', yTitle: 'Output Weight', xUnit: 'hours', yUnit: 'units', xRange: [0, 4] as [number, number], yRange: [30, 190] as [number, number]
  },
  {
    qNumber: 17,
    modNumber: 1,
    question: "An automated sensor calibration model is modeled by $K(x) = \\frac{3x + 15}{6}$. What is the calibration change rate per unit of input $x$?",
    options: ["0.33", "0.50", "1.50", "3.00"],
    correctIndex: 1, correctAnswerText: "0.5",
    explanation: `Step-by-Step Explanation:
1. Deconstruct the fraction:
   $$K(x) = \\frac{3x}{6} + \\frac{15}{6} = 0.5x + 2.5$$
2. The coefficient of $x$ is $0.5$, which represents the slope (rate of change).
3. Therefore, the calibration rate per $x$ is $0.5$.

Teacher's SAT Pro-Tip:
Divide each numerator term by the denominator to clearly reveal the linear slope!`,
    m: 0.5, b: 2.5, xVar: 'x', yVar: 'K', xTitle: 'Input Sensor', yTitle: 'Calibration', xUnit: 'units', yUnit: 'units', xRange: [0, 10] as [number, number], yRange: [2.5, 7.5] as [number, number]
  },
  {
    qNumber: 18,
    modNumber: 1,
    question: "The equation $6t + 10(5 - t) = 42$ models a hybrid walking/running course, where $t$ is walking hours and $5-t$ represents running hours. What does the constant $5$ represent?",
    options: ["Total walking speed", "Total running speed", "Total time limit of the course", "Total distance completed"],
    correctIndex: 2, correctAnswerText: "Total time limit in hours",
    explanation: `Step-by-Step Explanation:
1. Walking hours are $t$, and running hours are $(5 - t)$.
2. The sum of walking and running hours is:
   $$t + (5 - t) = 5\\text{ hours}$$
3. Therefore, 5 represents the total time duration of the course.

Teacher's SAT Pro-Tip:
The constant $C$ in the term $(C - t)$ is the total available resource pool being split between two linear variables!`,
    m: -1, b: 5, xVar: 't', yVar: 'y', xTitle: 'Walking Time', yTitle: 'Running Time', xUnit: 'hours', yUnit: 'hours', xRange: [0, 5] as [number, number], yRange: [0, 5] as [number, number]
  },
  {
    qNumber: 19,
    modNumber: 1,
    question: "A workspace expansion area is given by $A = 4(12 + x)$. What is the exact increase in area $A$ if $x$ increases by $3$?",
    options: ["4", "12", "36", "48"],
    correctIndex: 1, correctAnswerText: "12",
    explanation: `Step-by-Step Explanation:
1. Expand the area function:
   $$A = 48 + 4x$$
2. The slope is $m = 4$.
3. To find output change for an input shift of $\\Delta x = 3$:
   $$\\Delta A = 4 \\times 3 = 12\\text{ units}$$

Teacher's SAT Pro-Tip:
Evaluate the multiplier directly! Expand the parenthesis to identify the slope coefficient, and multiply it by the input shift!`,
    m: 4, b: 48, xVar: 'x', yVar: 'A', xTitle: 'Shift x', yTitle: 'Workspace Area', xUnit: 'meters', yUnit: 'sq meters', xRange: [0, 10] as [number, number], yRange: [48, 88] as [number, number]
  },
  {
    qNumber: 20,
    modNumber: 1,
    question: "A surveyor plots a coordinate path that passes through $(0, -100)$ and $(8, 300)$. What is the slope of this line?",
    options: ["40", "50", "60", "80"],
    correctIndex: 1, correctAnswerText: "50",
    explanation: `Step-by-Step Explanation:
1. Apply the slope formula $m = \\frac{y_2 - y_1}{x_2 - x_1}$:
   $$m = \\frac{300 - (-100)}{8 - 0} = \\frac{400}{8} = 50$$
2. Therefore, the slope is 50.

Teacher's SAT Pro-Tip:
Watch the signs! $y_2 - y_1 = 300 - (-100) = 400$!`,
    m: 50, b: -100, xVar: 'x', yVar: 'y', xTitle: 'x-axis', yTitle: 'y-axis', xUnit: 'units', yUnit: 'units', xRange: [0, 8] as [number, number], yRange: [-100, 300] as [number, number]
  },

  // ---------------- MODULE 2: HARD (Q21 - Q40) ----------------
  {
    qNumber: 21,
    modNumber: 2,
    question: "A flexible wire length is modeled as $L(g) = 10 + 2.5g$, where $L$ is length in centimeters and $g$ is load weight in grams. What is the real-world interpretation of the statement $L(4) = 20$?",
    options: ["The starting length is 20 cm", "The wire grows by 20 cm per gram", "The total wire length is 20 cm when load is 4 grams", "A 20g load extends length to 4 cm"],
    correctIndex: 2, correctAnswerText: "Total length is 20 when g = 4",
    explanation: `Step-by-Step Explanation:
1. The input parameter is $g = 4$ grams of load weight.
2. The output length is $L = 20$ centimeters.
3. Therefore, the statement means the total length is 20 cm when holding a load of 4 grams.

Teacher's SAT Pro-Tip:
Always match independent variable inputs ($g = 4\\text{ grams}$) with dependent variable outputs ($L = 20\\text{ cm}$)!`,
    m: 2.5, b: 10, xVar: 'g', yVar: 'L', xTitle: 'Load Weight', yTitle: 'Wire Length', xUnit: 'grams', yUnit: 'cm', xRange: [0, 8] as [number, number], yRange: [10, 30] as [number, number]
  },
  {
    qNumber: 22,
    modNumber: 2,
    question: "A factory production line yields $500 - 6.5x = 110$ remaining unpainted parts. What is the real-world meaning of the value $6.5$ in this equation?",
    options: ["The initial part volume", "The remaining unpainted parts", "The constant rate of part reduction per unit input", "The total parts painted"],
    correctIndex: 2, correctAnswerText: "Rate of reduction per unit x",
    explanation: `Step-by-Step Explanation:
1. In the equation, $500$ is the starting volume of parts.
2. The variable $x$ represents some input, and the multiplier $-6.5$ is the slope indicating a rate of decrease.
3. Therefore, $6.5$ represents the constant rate of part reduction per unit of input $x$.

Teacher's SAT Pro-Tip:
The variable coefficient in a linear subtraction term $A - Bx$ is the constant consumption rate of the system!`,
    m: -6.5, b: 500, xVar: 'x', yVar: 'y', xTitle: 'Input x', yTitle: 'Unpainted Parts', xUnit: 'units', yUnit: 'parts', xRange: [0, 60] as [number, number], yRange: [110, 500] as [number, number]
  },
  {
    qNumber: 23,
    modNumber: 2,
    question: "A combined wholesale order is modeled by the equation $8p + 14q = 420$. What is the real-world meaning of the expression $14q$?",
    options: ["The unit cost of item q", "The total items ordered", "The total dollar cost of item q", "The ratio of item p to item q"],
    correctIndex: 2, correctAnswerText: "Total dollar cost of item q",
    explanation: `Step-by-Step Explanation:
1. The coefficient 14 is the unit cost per item $q$.
2. Multiplying by the ordered quantity $q$ yields the total subtotal cost.
3. Therefore, $14q$ is the total dollar cost spent on item $q$.

Teacher's SAT Pro-Tip:
The term $By$ in standard equations $Ax + By = C$ represents the subtotal value contributed by category $y$!`,
    m: -8/14, b: 30, xVar: 'p', yVar: 'q', xTitle: 'Item p Count', yTitle: 'Item q Count', xUnit: 'items', yUnit: 'items', xRange: [0, 52.5] as [number, number], yRange: [0, 30] as [number, number]
  },
  {
    qNumber: 24,
    modNumber: 2,
    question: "An agricultural compound combines resources using $4x + 6y = 120$. What is the real-world meaning of point $(15, 10)$ in this relationship?",
    options: ["15 units of x and 10 units of y cost $120 total", "10 units of x and 15 units of y are used", "The starting mixture has 15 units", "The total quantity is 25 units"],
    correctIndex: 0, correctAnswerText: "15 units of x and 10 units of y cost $120 total",
    explanation: `Step-by-Step Explanation:
1. Substitute $x = 15$ and $y = 10$ into the equation:
   $$4(15) + 6(10) = 60 + 60 = 120$$
2. This indicates that a combination of 15 units of $x$ and 10 units of $y$ satisfies the budget target of $120$.

Teacher's SAT Pro-Tip:
Any coordinate $(x_1, y_1)$ on a standard budget line represents a valid, balanced combination that hits the target limit!`,
    m: -2/3, b: 20, xVar: 'x', yVar: 'y', xTitle: 'x-units', yTitle: 'y-units', xUnit: 'units', yUnit: 'units', xRange: [0, 30] as [number, number], yRange: [0, 20] as [number, number]
  },
  {
    qNumber: 25,
    modNumber: 2,
    question: "A bulk pricing tier is modeled by $p = 300 - 4x$. What is the interpretation of the point $(5, 280)$?",
    options: ["Buying 5 items costs a total of $280", "The starting price is $5", "The unit price is $280 when buying 5 items", "Each item is discounted by $280"],
    correctIndex: 2, correctAnswerText: "Unit price is $280 when buying 5 items",
    explanation: `Step-by-Step Explanation:
1. The variable $p$ represents the unit price in dollars, and $x$ represents the quantity of items purchased.
2. For coordinate point $(5, 280)$, the input is $x = 5$ items and the output is $p = \$280$.
3. Therefore, the unit price is $\$280$ when buying 5 items.

Teacher's SAT Pro-Tip:
Read variables carefully! Here, $p$ is the unit price, not the total cost, meaning $(5, 280)$ relates unit price to item volume!`,
    m: -4, b: 300, xVar: 'x', yVar: 'p', xTitle: 'Items Bought', yTitle: 'Unit Price', xUnit: 'items', yUnit: '$', xRange: [0, 20] as [number, number], yRange: [200, 300] as [number, number]
  },
  {
    qNumber: 26,
    modNumber: 2,
    question: "A consulting firm models revenue as $R(x) = 150 + 45x$. What is the real-world meaning of the constant $150$?",
    options: ["The variable hourly consulting fee", "The initial base revenue at x = 0", "The maximum possible consulting hours", "The net profit margins"],
    correctIndex: 1, correctAnswerText: "Initial base revenue at x = 0",
    explanation: `Step-by-Step Explanation:
1. The y-intercept occurs when $x = 0$:
   $$R(0) = 150 + 45(0) = 150$$
2. This represents the starting base revenue before any consultation hours ($x$) are logged.

Teacher's SAT Pro-Tip:
Apply the **Zero-State Intercept Rule**! The standalone constant is always the starting base value.`,
    m: 45, b: 150, xVar: 'x', yVar: 'R', xTitle: 'Consulting Hours', yTitle: 'Revenue', xUnit: 'hours', yUnit: '$', xRange: [0, 8] as [number, number], yRange: [150, 510] as [number, number]
  },
  {
    qNumber: 27,
    modNumber: 2,
    question: "A structural mass index is given by $14m + 80 = 220$. What is the real-world meaning of the expression $14m$?",
    options: ["The individual unit weight of category m", "The total count of category m", "The combined mass count contributed by variable m", "The structural weight limit"],
    correctIndex: 2, correctAnswerText: "Combined count contributed by variable m",
    explanation: `Step-by-Step Explanation:
1. In the equation, $80$ is a fixed base constant.
2. The term $14m$ represents the variable contribution of group $m$ to the total target of 220.
3. Therefore, $14m$ represents the combined mass weight contributed by variable $m$.

Teacher's SAT Pro-Tip:
The term $Ax$ always measures the combined aggregate contribution of that variable category!`,
    m: 14, b: 80, xVar: 'm', yVar: 'y', xTitle: 'Variable m', yTitle: 'Total Mass', xUnit: 'units', yUnit: 'units', xRange: [0, 10] as [number, number], yRange: [80, 220] as [number, number]
  },
  {
    qNumber: 28,
    modNumber: 2,
    question: "A line passes through $(0, 18)$ with a constant slope of $-1.5$. What is the x-intercept of this line?",
    options: ["10", "12", "15", "18"],
    correctIndex: 1, correctAnswerText: "12",
    explanation: `Step-by-Step Explanation:
1. Write the line equation using $m = -1.5$ and y-intercept $b = 18$:
   $$y = -1.5x + 18$$
2. Set $y = 0$ to find the x-intercept:
   $$0 = -1.5x + 18 \\implies 1.5x = 18$$
3. Divide by 1.5:
   $$x = \\frac{18}{1.5} = 12$$
4. Therefore, the x-intercept is 12.

Teacher's SAT Pro-Tip:
Divide the constant by the absolute slope value to find the x-intercept exhaustion point: $\\frac{18}{1.5} = 12$!`,
    m: -1.5, b: 18, xVar: 'x', yVar: 'y', xTitle: 'x-axis', yTitle: 'y-axis', xUnit: 'units', yUnit: 'units', xRange: [0, 15] as [number, number], yRange: [0, 18] as [number, number]
  },
  {
    qNumber: 29,
    modNumber: 2,
    question: "The standard linear equation $3x + 5y = 12$ models a resource mixture. What is the real-world meaning of the coefficient $5$ of variable $y$?",
    options: ["The total amount of y", "The scaling rate or weighting factor for y", "The overall target sum", "The average ratio of x to y"],
    correctIndex: 1, correctAnswerText: "Time or rate weighting factor for y",
    explanation: `Step-by-Step Explanation:
1. In the equation $3x + 5y = 12$, the coefficient 5 is the rate multiplier for variable $y$.
2. This represents the specific weight, cost rate, or time multiplier associated with each unit of $y$.
3. Therefore, 5 represents the rate weighting factor for $y$.

Teacher's SAT Pro-Tip:
Variable coefficients represent the active individual unit rate weights!`,
    m: -3/5, b: 2.4, xVar: 'x', yVar: 'y', xTitle: 'x-units', yTitle: 'y-units', xUnit: 'units', yUnit: 'units', xRange: [0, 4] as [number, number], yRange: [0, 2.4] as [number, number]
  },
  {
    qNumber: 30,
    modNumber: 2,
    question: "A scaled standard mixture is given by $\\frac{x}{10} + \\frac{y}{20} = 50$. What is the real-world meaning of the denominator constant $10$?",
    options: ["The maximum capacity of x", "The base rate scaling factor for x", "The total combined target", "The starting level of y"],
    correctIndex: 1, correctAnswerText: "Base scaling factor for x",
    explanation: `Step-by-Step Explanation:
1. In the term $\\frac{x}{10}$, $10$ is the denominator scaling factor, equivalent to multiplying $x$ by a rate coefficient of $\\frac{1}{10}$ or $0.10$.
2. This constant scales the independent variable $x$.
3. Therefore, 10 represents the base scaling factor for $x$.

Teacher's SAT Pro-Tip:
Denominators scale inputs! $\\frac{x}{C}$ is mathematically identical to an active unit rate of $\\frac{1}{C} \\cdot x$.`,
    m: -2, b: 1000, xVar: 'x', yVar: 'y', xTitle: 'x-units', yTitle: 'y-units', xUnit: 'units', yUnit: 'units', xRange: [0, 500] as [number, number], yRange: [0, 1000] as [number, number]
  },
  {
    qNumber: 31,
    modNumber: 2,
    question: "An isotope decay model is given by $M(t) = 80 - 2.5t$, where $M$ is mass in grams and $t$ is elapsed hours. What is the interpretation of the constant $2.5$?",
    options: ["The initial mass of the isotope", "The hourly decay rate of the isotope mass", "The total duration of the decay cycle", "The remaining isotope percentage"],
    correctIndex: 1, correctAnswerText: "Hourly decay rate",
    explanation: `Step-by-Step Explanation:
1. The slope of the linear equation is $m = -2.5$.
2. This indicates that for each elapsed hour, the mass of the isotope decreases by exactly 2.5 grams.
3. Therefore, $2.5$ is the constant hourly decay rate.

Teacher's SAT Pro-Tip:
Watch the variables! The negative sign indicates a decrease, meaning the coefficient magnitude is the hourly decay rate!`,
    m: -2.5, b: 80, xVar: 't', yVar: 'M', xTitle: 'Decay Time', yTitle: 'Isotope Mass', xUnit: 'hours', yUnit: 'grams', xRange: [0, 32] as [number, number], yRange: [0, 80] as [number, number]
  },
  {
    qNumber: 32,
    modNumber: 2,
    question: "A biology growth model yields $G(t) = 2(\\frac{t}{20} + 3)$. What is the growth rate per unit of elapsed time $t$?",
    options: ["0.1", "2.0", "3.0", "6.0"],
    correctIndex: 0, correctAnswerText: "0.1",
    explanation: `Step-by-Step Explanation:
1. Distribute the constant 2 across the parenthesis:
   $$G(t) = \\frac{2t}{20} + 6 = 0.1t + 6$$
2. The coefficient of $t$ is $0.1$, which represents the slope (rate of change).
3. Therefore, the growth rate per unit $t$ is 0.1.

Teacher's SAT Pro-Tip:
Distribute multipliers before assessing the slope or intercept properties of bracketed linear equations!`,
    m: 0.1, b: 6, xVar: 't', yVar: 'G', xTitle: 'Growth Time', yTitle: 'Growth Score', xUnit: 'units', yUnit: 'units', xRange: [0, 100] as [number, number], yRange: [6, 16] as [number, number]
  },
  {
    qNumber: 33,
    modNumber: 2,
    question: "A pressurized fuel cylinder's remaining volume is given by $V = 500 - 25t$, where $V$ is liters and $t$ represents outflow hours. What does the value $500$ represent?",
    options: ["The depletion rate", "The maximum depletion duration", "The initial starting volume of fuel", "The remaining cylinder weight"],
    correctIndex: 2, correctAnswerText: "Initial starting volume",
    explanation: `Step-by-Step Explanation:
1. At $t = 0$ (before outflow begins), substitute 0 into the equation:
   $$V = 500 - 25(0) = 500\\text{ liters}$$
2. This is the y-intercept, representing the initial starting volume.

Teacher's SAT Pro-Tip:
Use the **Zero-State Intercept Rule**. The standalone constant value represents the initial, raw baseline quantity!`,
    m: -25, b: 500, xVar: 't', yVar: 'V', xTitle: 'Outflow Hours', yTitle: 'Remaining Fuel', xUnit: 'hours', yUnit: 'liters', xRange: [0, 20] as [number, number], yRange: [0, 500] as [number, number]
  },
  {
    qNumber: 34,
    modNumber: 2,
    question: "A digital subscription cost ledger model calculates net earnings using $E = 1.15x - 2.00$, where $E$ is net profits and $x$ is users. What does the constant $2.00$ represent?",
    options: ["The per-user processing cost", "The initial flat deduction or transaction fee", "The break-even user count", "The maximum possible earnings"],
    correctIndex: 1, correctAnswerText: "Flat deduction fee",
    explanation: `Step-by-Step Explanation:
1. The y-intercept is at $x = 0$, giving $E = -\$2.00$.
2. This baseline deficit represent a flat startup surcharge or flat transaction overhead fee deducted from earnings.
3. Therefore, $2.00$ is the flat deduction fee.

Teacher's SAT Pro-Tip:
Negative constants in revenue functions represent **flat startup charges, transaction processing deficits, or starting overhead**!`,
    m: 1.15, b: -2, xVar: 'x', yVar: 'E', xTitle: 'Total Users', yTitle: 'Net Earnings', xUnit: 'users', yUnit: '$', xRange: [0, 10] as [number, number], yRange: [-2, 9.5] as [number, number]
  },
  {
    qNumber: 35,
    modNumber: 2,
    question: "A standard line equation is modeled as $5y - 20 = 3x$. What does the constant $20$ represent in this system?",
    options: ["The y-intercept", "The slope", "A constant difference baseline in standard coordinates", "The x-intercept"],
    correctIndex: 2, correctAnswerText: "Constant difference baseline",
    explanation: `Step-by-Step Explanation:
1. Rearrange the equation into standard linear form:
   $$5y - 3x = 20$$
2. In this standard representation, 20 represents the constant difference boundary that balances the weighted variables.
3. Therefore, 20 is the constant difference baseline.

Teacher's SAT Pro-Tip:
Isolate $y$ to verify standard intercept constants: $y = 0.6x + 4$. The y-intercept is 4, meaning the original constant 20 is a scaled standard difference parameter!`,
    m: 0.6, b: 4, xVar: 'x', yVar: 'y', xTitle: 'x-axis', yTitle: 'y-axis', xUnit: 'units', yUnit: 'units', xRange: [0, 10] as [number, number], yRange: [4, 10] as [number, number]
  },
  {
    qNumber: 36,
    modNumber: 2,
    question: "The cost function for a printing run is modeled by $C = 0.05(x - 200) + 40$, where $x$ represents printed pages for $x > 200$. What is the increase in cost for printing 80 extra pages over the limit?",
    options: ["$2.00", "$4.00", "$8.00", "$44.00"],
    correctIndex: 1, correctAnswerText: "$4.00",
    explanation: `Step-by-Step Explanation:
1. The term $(x - 200)$ represents the extra pages over the 200-page threshold.
2. The coefficient $0.05$ is the rate of cost per extra page.
3. Find the cost increase for 80 excess pages:
   $$\\Delta C = 0.05 \\times 80 = 4.00\\text{ dollars}$$

Teacher's SAT Pro-Tip:
Use the **Instant Delta Ratio Shortcut**! Ignore the threshold constants and multiply the excess page count directly by the slope coefficient!`,
    m: 0.05, b: 30, xVar: 'x', yVar: 'C', xTitle: 'Printed Pages', yTitle: 'Total Cost', xUnit: 'pages', yUnit: '$', xRange: [200, 300] as [number, number], yRange: [30, 50] as [number, number]
  },
  {
    qNumber: 37,
    modNumber: 2,
    question: "A delivery vehicle charge model is given by $C = 2 + 4x$, where $C$ is cost and $x$ is travel miles. What is the increase in travel distance $x$ for a cost increase of $\$12$?",
    options: ["2 miles", "3 miles", "4 miles", "6 miles"],
    correctIndex: 1, correctAnswerText: "3 units",
    explanation: `Step-by-Step Explanation:
1. The rate per mile (slope) is $\$4$ per mile.
2. To find the increase in distance $\\Delta x$ for an excess cost $\\Delta C = 12$:
   $$\\Delta C = m \\cdot \\Delta x \\implies 12 = 4 \\cdot \\Delta x$$
   $$\\Delta x = \\frac{12}{4} = 3\\text{ miles}$$

Teacher's SAT Pro-Tip:
Divide the cost increase directly by the slope coefficient to find the corresponding independent variable change!`,
    m: 4, b: 2, xVar: 'x', yVar: 'C', xTitle: 'Distance', yTitle: 'Total Cost', xUnit: 'miles', yUnit: '$', xRange: [0, 5] as [number, number], yRange: [2, 22] as [number, number]
  },
  {
    qNumber: 38,
    modNumber: 2,
    question: "A line passes through coordinates $(0, 500)$ and $(250, 0)$. What is the linear equation of this line?",
    options: ["y = -2x + 500", "y = -0.5x + 500", "y = -2x + 250", "y = -0.5x + 250"],
    correctIndex: 0, correctAnswerText: "y = -2x + 500",
    explanation: `Step-by-Step Explanation:
1. Calculate the slope $m$ using the coordinate points:
   $$m = \\frac{0 - 500}{250 - 0} = \\frac{-500}{250} = -2$$
2. The y-intercept is given directly by the coordinate $(0, 500)$, which means $b = 500$.
3. Write the equation in slope-intercept form $y = mx + b$:
   $$y = -2x + 500$$

Teacher's SAT Pro-Tip:
With intercepts $(0, B)$ and $(A, 0)$, the slope is always $-\\frac{B}{A} = -\\frac{500}{250} = -2$, and the y-intercept is $B = 500$!`,
    m: -2, b: 500, xVar: 'x', yVar: 'y', xTitle: 'x-axis', yTitle: 'y-axis', xUnit: 'units', yUnit: 'units', xRange: [0, 250] as [number, number], yRange: [0, 500] as [number, number]
  },
  {
    qNumber: 39,
    modNumber: 2,
    question: "An inventory budget limits product ordering using the equation $3x + 4y = 120$. What is the maximum value of $y$ when $x = 0$?",
    options: ["20", "30", "40", "60"],
    correctIndex: 1, correctAnswerText: "30",
    explanation: `Step-by-Step Explanation:
1. Substitute $x = 0$ into the standard form equation:
   $$3(0) + 4y = 120 \\implies 4y = 120$$
2. Solve for $y$ by dividing by 4:
   $$y = \\frac{120}{4} = 30$$
3. Therefore, the maximum value of $y$ is 30.

Teacher's SAT Pro-Tip:
Setting $x=0$ calculates the y-intercept. This denotes the maximum possible volume for variable $y$ when commodity $x$ is completely unused!`,
    m: -0.75, b: 30, xVar: 'x', yVar: 'y', xTitle: 'Product x', yTitle: 'Product y', xUnit: 'units', yUnit: 'units', xRange: [0, 40] as [number, number], yRange: [0, 30] as [number, number]
  },
  {
    qNumber: 40,
    modNumber: 2,
    question: "A line passes through coordinates $(0, -300)$ and $(6, 0)$ in the coordinate plane. What is the slope of this line?",
    options: ["30", "40", "50", "60"],
    correctIndex: 2, correctAnswerText: "50",
    explanation: `Step-by-Step Explanation:
1. Apply the slope formula $m = \\frac{y_2 - y_1}{x_2 - x_1}$:
   $$m = \\frac{0 - (-300)}{6 - 0} = \\frac{300}{6} = 50$$
2. Therefore, the slope of the line is 50.

Teacher's SAT Pro-Tip:
Watch the signs carefully! Subtracting a negative number yields a positive numerator addition: $0 - (-300) = 300$!`,
    m: 50, b: -300, xVar: 'x', yVar: 'y', xTitle: 'x-axis', yTitle: 'y-axis', xUnit: 'units', yUnit: 'units', xRange: [0, 6] as [number, number], yRange: [-300, 0] as [number, number]
  },
  {
    qNumber: 41,
    modNumber: 1,
    question: "The volume of water in a swimming pool, in gallons, t hours after draining begins is given by W(t) = 12000 - 250t. What is the best interpretation of the slope of y = W(t)?",
    options: ["The initial volume of water in the pool", "The total time in hours needed to empty the pool", "The decrease in water volume, in gallons, each hour", "The percentage of water drained per hour"],
    correctIndex: 2,
    correctAnswerText: "The decrease in water volume, in gallons, each hour",
    explanation: "Step-by-Step Explanation:\n1. The slope is the coefficient of t, which is -250.\n2. The negative sign represents a decrease. The value 250 indicates that the pool loses 250 gallons per hour.\n3. Therefore, the slope is the decrease in water volume, in gallons, each hour.\n\nTeacher's SAT Pro-Tip: Slopes are rates! Rate represents change in y (gallons) per change in x (hours).",
    m: -250, b: 12000, xVar: 't', yVar: 'W', xTitle: 'Drain Time', yTitle: 'Water Volume', xUnit: 'hours', yUnit: 'gallons', xRange: [0, 48] as [number, number], yRange: [0, 12000] as [number, number]
  },
  {
    qNumber: 42,
    modNumber: 1,
    question: "A bakery uses 3.2 pounds of flour for each loaf of artisan bread (x) and 1.1 pounds of flour for each batch of rolls (y). The total flour used was 160 pounds, modeled by 3.2x + 1.1y = 160. According to the model, how many pounds of flour are used for each loaf of artisan bread?",
    options: ["1.1", "3.2", "160", "50"],
    correctIndex: 1,
    correctAnswerText: "3.2",
    explanation: "Step-by-Step Explanation:\n1. In the model, 3.2x represents flour used for x artisan loaves.\n2. The coefficient 3.2 is the unit weight per loaf.\n3. Thus, 3.2 pounds of flour are used for each loaf.\n\nTeacher's SAT Pro-Tip: Unit of Coefficient = Total Unit / Unit of x. Here, pounds of flour / loaf of bread.",
    m: -3.2/1.1, b: 160/1.1, xVar: 'x', yVar: 'y', xTitle: 'Artisan Loaves', yTitle: 'Roll Batches', xUnit: 'loaves', yUnit: 'batches', xRange: [0, 50] as [number, number], yRange: [0, 145] as [number, number]
  },
  {
    qNumber: 43,
    modNumber: 1,
    question: "A shipping container contains S small boxes and L large boxes. The total weight of all boxes in the container is 2400 pounds, given by 15S + 40L = 2400. How many more pounds does a large box weigh than a small box?",
    options: ["15", "25", "40", "55"],
    correctIndex: 1,
    correctAnswerText: "25",
    explanation: "Step-by-Step Explanation:\n1. Small box weight is 15 pounds (coefficient of S).\n2. Large box weight is 40 pounds (coefficient of L).\n3. Find the difference: 40 - 15 = 25 pounds.\n\nTeacher's SAT Pro-Tip: Standard form coefficients Ax + By = C represent the category unit weights!",
    m: -15/40, b: 60, xVar: 'S', yVar: 'L', xTitle: 'Small Boxes', yTitle: 'Large Boxes', xUnit: 'boxes', yUnit: 'boxes', xRange: [0, 160] as [number, number], yRange: [0, 60] as [number, number]
  },
  {
    qNumber: 44,
    modNumber: 1,
    question: "A catering service hires 10 full-time chefs and x temporary kitchen assistants. The total number of uniform aprons ordered was 72, where each worker receives 3 aprons. The situation is modeled by 3(x + 10) = 72. What does the expression x + 10 represent?",
    options: ["The total number of kitchen staff members", "The number of temporary assistants", "The number of aprons per worker", "The total cost of the aprons"],
    correctIndex: 0,
    correctAnswerText: "The total number of kitchen staff members",
    explanation: "Step-by-Step Explanation:\n1. The expression x + 10 is the sum of full-time chefs (10) and temporary kitchen assistants (x).\n2. Summing these counts gives the total number of kitchen staff.\n\nTeacher's SAT Pro-Tip: Grouped terms represent combined pools multiplied by individual worker rates!",
    m: -1, b: 14, xVar: 'x', yVar: 'y', xTitle: 'Temporary Staff', yTitle: 'Full-time Staff', xUnit: 'workers', yUnit: 'workers', xRange: [0, 14] as [number, number], yRange: [0, 14] as [number, number]
  },
  {
    qNumber: 45,
    modNumber: 1,
    question: "The total weight in pounds of a delivery crate containing x identical steel bearings is modeled by f(x) = 15 + 2.5x. According to the model, what is the weight in pounds of a single steel bearing?",
    options: ["2.5", "15", "17.5", "37.5"],
    correctIndex: 0,
    correctAnswerText: "2.5",
    explanation: "Step-by-Step Explanation:\n1. The slope of f(x) is 2.5.\n2. Slope is the rate of change of weight per steel bearing.\n3. Therefore, a single bearing weighs 2.5 pounds.\n\nTeacher's SAT Pro-Tip: Slopes are rates! Here, 2.5 lbs per bearing.",
    m: 2.5, b: 15, xVar: 'x', yVar: 'f', xTitle: 'Steel Bearings', yTitle: 'Total Weight', xUnit: 'bearings', yUnit: 'pounds', xRange: [0, 100] as [number, number], yRange: [15, 265] as [number, number]
  },
  {
    qNumber: 46,
    modNumber: 1,
    question: "A researcher tracks the population y of a tagged species of fish in a lake x years after 2015 using the model y = 450 + 85x. What is the best interpretation of (x, y) = (6, 960) in this context?",
    options: ["The fish population grew by 960 in the year 2021.", "There were 960 tagged fish in the lake in 2021.", "The population increased by 960 fish between 2015 and 2021.", "There were 960 tagged fish in the lake in 2015."],
    correctIndex: 1,
    correctAnswerText: "There were 960 tagged fish in the lake in 2021.",
    explanation: "Step-by-Step Explanation:\n1. x = 6 corresponds to 2015 + 6 = 2021.\n2. y = 960 corresponds to the population of tagged fish in that year.\n3. Thus, there were 960 tagged fish in the lake in 2021.\n\nTeacher's SAT Pro-Tip: Coordinate Verification! Translate coordinates literally: x = time offset, y = population.",
    m: 85, b: 450, xVar: 'x', yVar: 'y', xTitle: 'Years after 2015', yTitle: 'Fish Population', xUnit: 'years', yUnit: 'fish', xRange: [0, 10] as [number, number], yRange: [450, 1300] as [number, number]
  },
  {
    qNumber: 47,
    modNumber: 1,
    question: "An artist can make 80 pottery vases if no ceramic bowls are produced in a month. If a studio employs 16 artists who all work at this same constant maximum rate, what is the maximum number of pottery vases one artist can make in a month?",
    options: ["5", "16", "80", "1280"],
    correctIndex: 0,
    correctAnswerText: "5",
    explanation: "Step-by-Step Explanation:\n1. 16 artists can make a combined maximum of 80 vases.\n2. Maximum vases one artist can make: 80 / 16 = 5.\n3. Therefore, maximum vases per artist in a month is 5.\n\nTeacher's SAT Pro-Tip: Unit Rate Isolation! Divide total capability by active producers.",
    m: -1, b: 5, xVar: 'v', yVar: 'b', xTitle: 'Individual Vases', yTitle: 'Individual Bowls', xUnit: 'vases', yUnit: 'bowls', xRange: [0, 5] as [number, number], yRange: [0, 5] as [number, number]
  },
  {
    qNumber: 48,
    modNumber: 1,
    question: "A hardware store sells x small toolkits and y large toolkits from a shipment of 120 pounds of tools. The equation 1.5x + 4.5y = 120 represents this situation. What is the best interpretation of 4.5y?",
    options: ["The weight in pounds of each large toolkit", "The total weight in pounds of all small toolkits sold", "The total weight in pounds of all large toolkits sold", "The total number of large toolkits sold"],
    correctIndex: 2,
    correctAnswerText: "The total weight in pounds of all large toolkits sold",
    explanation: "Step-by-Step Explanation:\n1. 4.5y multiplies the weight per toolkit (4.5) by quantity (y).\n2. This yields the total weight contributed by large toolkits.\n3. Therefore, 4.5y represents the total weight in pounds of all large toolkits sold.\n\nTeacher's SAT Pro-Tip: In standard form Ax + By = C, the term By represents category subtotal weight!",
    m: -1.5/4.5, b: 120/4.5, xVar: 'x', yVar: 'y', xTitle: 'Small Toolkits', yTitle: 'Large Toolkits', xUnit: 'toolkits', yUnit: 'toolkits', xRange: [0, 80] as [number, number], yRange: [0, 26] as [number, number]
  },
  {
    qNumber: 49,
    modNumber: 1,
    question: "A commuter spent 140 dollars total on transportation, buying x bus passes at 15 dollars each and y train passes at 25 dollars each. The equation 15x + 25y = 140 models this situation. What is the best interpretation of y?",
    options: ["The cost in dollars of a single train pass", "The total number of train passes purchased", "The total amount of money spent on train passes", "The number of bus passes purchased"],
    correctIndex: 1,
    correctAnswerText: "The total number of train passes purchased",
    explanation: "Step-by-Step Explanation:\n1. In 15x + 25y = 140, y represents the quantity of train passes purchased.\n2. The coefficient of y (25) is the price of each train pass.\n3. Therefore, y represents the total number of train passes purchased.\n\nTeacher's SAT Pro-Tip: Variables represent item counts, while coefficients represent individual rates!",
    m: -15/25, b: 5.6, xVar: 'x', yVar: 'y', xTitle: 'Bus Passes', yTitle: 'Train Passes', xUnit: 'passes', yUnit: 'passes', xRange: [0, 9] as [number, number], yRange: [0, 5.6] as [number, number]
  },
  {
    qNumber: 50,
    modNumber: 1,
    question: "A store's monthly operating profit in dollars after selling x units of a product is modeled by P(x) = 12x - 1800. What is the best interpretation of 1800 in this context?",
    options: ["The profit earned per unit sold", "The fixed monthly operating cost of the store", "The selling price of a single unit", "The number of units that must be sold to break even"],
    correctIndex: 1,
    correctAnswerText: "The fixed monthly operating cost of the store",
    explanation: "Step-by-Step Explanation:\n1. When x = 0, P(0) = -1800.\n2. This negative starting profit represents fixed overhead expenses or costs.\n3. Therefore, 1800 represents the fixed monthly operating cost.\n\nTeacher's SAT Pro-Tip: Zero-Baseline Intercept Strategy! b represents the baseline charge or debt.",
    m: 12, b: -1800, xVar: 'x', yVar: 'P', xTitle: 'Units Sold', yTitle: 'Monthly Profit', xUnit: 'units', yUnit: 'dollars', xRange: [0, 300] as [number, number], yRange: [-1800, 1800] as [number, number]
  },
  {
    qNumber: 51,
    modNumber: 1,
    question: "The temperature T of an industrial oven in degrees Celsius m minutes after shutting down is given by T(m) = 220 - 3.5m. By how many degrees Celsius does the oven temperature drop every 10 minutes?",
    options: ["3.5", "22", "35", "220"],
    correctIndex: 2,
    correctAnswerText: "35",
    explanation: "Step-by-Step Explanation:\n1. The slope is -3.5, representing a drop of 3.5 degrees Celsius per minute.\n2. Over 10 minutes: Delta T = 3.5 × 10 = 35 degrees Celsius.\n\nTeacher's SAT Pro-Tip: Instant Delta Ratio Shortcut! Multiply the change in input by the slope directly.",
    m: -3.5, b: 220, xVar: 'm', yVar: 'T', xTitle: 'Minutes Elapsed', yTitle: 'Oven Temp', xUnit: 'min', yUnit: 'C', xRange: [0, 60] as [number, number], yRange: [10, 220] as [number, number]
  },
  {
    qNumber: 52,
    modNumber: 1,
    question: "A taxi company charges a fare according to C(x) = 3.50 + 2.25x, where C is the total fare in dollars and x is the distance traveled in miles. If a passenger's fare increases by 9.00 dollars, how many additional miles did the taxi travel?",
    options: ["2", "3", "4", "5"],
    correctIndex: 2,
    correctAnswerText: "4",
    explanation: "Step-by-Step Explanation:\n1. The rate per mile (slope m) is 2.25 dollars per mile.\n2. Fare increase Delta C = 9.00.\n3. Reciprocal Delta Scaling Shortcut: Delta x = Delta C / m = 9.00 / 2.25 = 4 miles.\n\nTeacher's SAT Pro-Tip: When given output change, divide by slope to get input change directly!",
    m: 2.25, b: 3.50, xVar: 'x', yVar: 'C', xTitle: 'Distance', yTitle: 'Total Fare', xUnit: 'miles', yUnit: 'dollars', xRange: [0, 10] as [number, number], yRange: [3.50, 26] as [number, number]
  },
  {
    qNumber: 53,
    modNumber: 1,
    question: "A solar battery's remaining energy capacity in kilowatt-hours after t days of usage is given by E(t) = 48 - 1.6t. Which statement best describes the meaning of E(30) = 0?",
    options: ["The battery loses 30 kilowatt-hours of energy per day.", "The battery is completely depleted after 30 days of usage.", "The battery capacity drops by 1.6 kilowatt-hours every 30 days.", "It takes 1.6 days to consume 30 kilowatt-hours of energy."],
    correctIndex: 1,
    correctAnswerText: "The battery is completely depleted after 30 days of usage.",
    explanation: "Step-by-Step Explanation:\n1. E(30) = 0 means that when t = 30, remaining capacity E is 0 kilowatt-hours.\n2. Therefore, the battery is completely depleted after 30 days of usage.\n\nTeacher's SAT Pro-Tip: X-intercept Point Analysis! The coordinate (30, 0) represents the depletion point.",
    m: -1.6, b: 48, xVar: 't', yVar: 'E', xTitle: 'Days of Use', yTitle: 'Energy Remaining', xUnit: 'days', yUnit: 'kWh', xRange: [0, 30] as [number, number], yRange: [0, 48] as [number, number]
  },
  {
    qNumber: 54,
    modNumber: 1,
    question: "The total cost y, in dollars, for a custom printing job of x t-shirts is modeled by a line passing through (0, 50) and (20, 290). What is the best interpretation of the slope of this line?",
    options: ["The setup fee in dollars for the printing job", "The total cost of printing 20 t-shirts", "The production cost in dollars per t-shirt", "The number of t-shirts printed per dollar"],
    correctIndex: 2,
    correctAnswerText: "The production cost in dollars per t-shirt",
    explanation: "Step-by-Step Explanation:\n1. Calculate slope: m = (290 - 50) / (20 - 0) = 12 dollars per t-shirt.\n2. Slope is the rate at which cost increases per t-shirt, which is the unit production cost.\n\nTeacher's SAT Pro-Tip: Slope is unit rate! Change in dollars divided by change in shirts yields dollars per shirt.",
    m: 12, b: 50, xVar: 'x', yVar: 'y', xTitle: 'T-Shirts Printed', yTitle: 'Total Cost', xUnit: 'shirts', yUnit: 'dollars', xRange: [0, 30] as [number, number], yRange: [50, 410] as [number, number]
  },
  {
    qNumber: 55,
    modNumber: 1,
    question: "The total duration M in minutes needed to process x insurance claims is modeled by M(x) = (5x + 40) / 2. According to the model, how many additional minutes are required for each additional insurance claim processed?",
    options: ["2.5", "5", "20", "40"],
    correctIndex: 0,
    correctAnswerText: "2.5",
    explanation: "Step-by-Step Explanation:\n1. Split the fraction: M(x) = 2.5x + 20.\n2. The slope is the coefficient of x, which is 2.5.\n3. Therefore, 2.5 additional minutes are required per claim.\n\nTeacher's SAT Pro-Tip: Fraction Splitting Shortcut! Rewrite (Ax + B)/C as (A/C)x + B/C.",
    m: 2.5, b: 20, xVar: 'x', yVar: 'M', xTitle: 'Claims Processed', yTitle: 'Total Minutes', xUnit: 'claims', yUnit: 'minutes', xRange: [0, 20] as [number, number], yRange: [20, 70] as [number, number]
  }
];

// Split the 40 practice questions into Module 1 and Module 2 master arrays
export const CHAPTER_3_QUESTIONS_MODULE_1: MathExerciseQuestion[] = rawPracticeQuestions
  .filter(q => q.modNumber === 1)
  .map((q, idx) => {
    const { table, diagram } = generateLinearMetadata(
      `mod1-q${idx + 1}`,
      q.m, q.b,
      q.xVar, q.yVar,
      q.xTitle, q.yTitle,
      q.xUnit, q.yUnit,
      q.xRange, q.yRange
    );
    return {
      id: `ch3-q${q.qNumber}`,
      number: idx + 1,
      exerciseNumber: 1,
      exerciseTitle: "Module 1: Easy / Medium Questions",
      question: q.question,
      options: q.options,
      correctIndex: q.correctIndex,
      correctAnswerText: q.correctAnswerText,
      explanation: q.explanation,
      table,
      diagram
    };
  });

export const CHAPTER_3_QUESTIONS_MODULE_2: MathExerciseQuestion[] = rawPracticeQuestions
  .filter(q => q.modNumber === 2)
  .map((q, idx) => {
    const { table, diagram } = generateLinearMetadata(
      `mod2-q${idx + 1}`,
      q.m, q.b,
      q.xVar, q.yVar,
      q.xTitle, q.yTitle,
      q.xUnit, q.yUnit,
      q.xRange, q.yRange
    );
    return {
      id: `ch3-q${q.qNumber}`,
      number: idx + 1,
      exerciseNumber: 2,
      exerciseTitle: "Module 2: Hard Questions",
      question: q.question,
      options: q.options,
      correctIndex: q.correctIndex,
      correctAnswerText: q.correctAnswerText,
      explanation: q.explanation,
      table,
      diagram
    };
  });

// ========================================================================
// FULL INTEGRATED CHAPTER DEFINITION
// ========================================================================
export const FULL_CHAPTER_3_EQUATIONS_AND_SYSTEMS: FullSatMathChapter = {
  id: 'equations-and-systems',
  chapterNumber: 3,
  chapterTitle: 'Equations & Linear Systems',
  pageNumber: 35,
  quote: 'A constant rate of change defines the universe of linear relationships. Mastering the visual interpretation of intercepts, slopes, and ratios guarantees maximum speed and absolute accuracy on the Digital SAT.',
  introduction: 'Welcome to Chapter 3: Equations & Linear Systems. This textbook chapter features full conceptual frameworks, high-speed shortcuts, and verbal translation keys. It features 20 worked examples with visual data tables and xy-plane coordinate graphs alongside 55 high-yield Digital SAT practice questions with step-by-step mathematical proofs and coordinate plane representations.',
  sections: [
    {
      sectionTitle: '3.1 The "Zero-State" Intercept Rule & Baseline Interpretation',
      fullText: 'Linear functions represent systems with constant rates of change. To interpret these real-world models, you must understand intercepts as physical starting and exhaustion states.',
      bulletPoints: [
        'The "Zero-State" Intercept Rule: In $y = mx + b$, the y-intercept $(0, b)$ represents the initial baseline, fixed cost, flat surcharge, or starting amount before any input values are added.',
        'The X-Intercept as the Exhaustion Point: The coordinate $(x_{limit}, 0)$ represents the exhaustion limit of the model where the dependent variable is completely depleted and hits zero.',
        'Standard Form Intercepts: For standard equations $Ax + By = C$, set $x=0$ to instantly find maximum $y = C/B$, and set $y=0$ to find maximum $x = C/A$.'
      ],
      tables: [
        {
          title: 'Intercept Interpretation Guide',
          headers: ['Graphical Property', 'Mathematical Formulation', 'Real-World Context / SAT Interpretation'],
          rows: [
            ['Y-intercept', '(0, b)', 'Baseline fee, setup cost, initial water level, or flat starting charge.'],
            ['X-intercept', '(c/a, 0)', 'Exhaustion limit, fuel depletion point, or break-even threshold.'],
            ['Constant term (b)', 'Value when input is 0', 'Guaranteed starting benchmark value before independent units accumulate.']
          ]
        }
      ],
      examples: CHAPTER_3_WORKED_EXAMPLES.slice(0, 3)
    },
    {
      sectionTitle: '3.2 Slope, Coefficient-to-Unit Ratios & Instant Delta Shortcuts',
      fullText: 'The slope is the core multiplier of a linear model. It defines unit speed and lets you calculate changes in outputs instantly without evaluating long equations.',
      bulletPoints: [
        'Slope as a Constant Rate: The coefficient $m$ represents the constant rate of change, representing units of output per 1 unit of input (miles per hour, cost per GB).',
        'The Coefficient-to-Unit Ratio Strategy: In standard form $Ax + By = C$, the slope is given by $-A/B$. This coefficient ratio represents the exact substitution rate—how many units of $y$ must be sacrificed per unit of $x$ gained.',
        'Instant Delta Ratio Shortcut: Since slope is constant, any change in output $\\Delta y$ is directly proportional to the change in input $\\Delta x$ multiplied by the slope: $\\Delta y = m \\cdot \\Delta x$. Bypasses full algebraic substitution!'
      ],
      tables: [
        {
          title: 'Slope Interpretation Matrix',
          headers: ['Algebraic Term', 'Graphical Interpretation', 'Strategic SAT Shortcut'],
          rows: [
            ['Slope coefficient (m)', 'Unit rate of change', 'Multiply by the input jump directly to find the output increase/decrease.'],
            ['Standard Ratio -A/B', 'Substitution Rate', 'Indicates trade-off weights (units of y sacrificed per unit of x gained).'],
            ['Variable Term (mx)', 'Aggregate Contribution', 'Rate times volume yields the subtotal value contribution of that category.']
          ]
        }
      ],
      examples: CHAPTER_3_WORKED_EXAMPLES.slice(3, 7)
    },
    {
      sectionTitle: '3.3 Reciprocal Rate Inversion & Combined Systems',
      fullText: 'SAT questions frequently flip independent and dependent roles. Recognizing when to invert rate terms prevents common mathematical trap selections.',
      bulletPoints: [
        'Reciprocal Rate Inversion: If output $y$ increases by $m$ units per unit of input $x$, then obtaining exactly 1 unit of $y$ requires the reciprocal of the slope, $\\frac{1}{m}$ units of $x$.',
        'Work Rate Combinations: For cooperative work systems, sum individual hourly rates to find the combined speed: $R_{combined} = R_A + R_B$.',
        'Unit Rate Balancing: Standard equations combine multiple categories (e.g., $Ax + By = C$) where coefficients represent individual category weights or unit speeds.'
      ],
      tables: [
        {
          title: 'Work Rates & Reciprocal Conversions',
          headers: ['System Scenario', 'Mathematical Form', 'High-Speed SAT Solution Approach'],
          rows: [
            ['Reciprocal Rate', 'Input/Output = 1/m', 'Invert the slope coefficient to find the input volume needed for a single output gain.'],
            ['Cooperative Work', 'Rate = 1/Ta + 1/Tb', 'Add individual speeds to calculate total work output per hour.'],
            ['Standard Sum', 'Ax + By = C', 'Ensure dimensional unit compatibility across all terms in the equation.']
          ]
        }
      ],
      examples: CHAPTER_3_WORKED_EXAMPLES.slice(7, 11)
    },
    {
      sectionTitle: '3.4 Coordinate Line Analysis & Real-World Modeling',
      fullText: 'Translating real-world problems into linear functions requires isolating baseline intercepts and calculating rate slopes directly from coordinates or tables.',
      bulletPoints: [
        'Slope from Coordinate Pairs: Use two tracking points $(x_1, y_1)$ and $(x_2, y_2)$ on a chart or table to calculate the slope via $m = \\frac{y_2 - y_1}{x_2 - x_1}$.',
        'Modeling from Verbal Prompts: Extract key terms like "flat surcharge" (y-intercept) and "hourly rate" (slope) to formulate custom linear models.',
        'Piece-wise Linear Brackets: In bracketed cost systems $a(x - C) + b$, $C$ is the threshold limit, $a$ is the active slope coefficient for usage exceeding $C$, and $b$ is the fixed cost up to that limit.'
      ],
      tables: [
        {
          title: 'Real-World Modeling Formulations',
          headers: ['Verbal Phrase', 'Algebraic Structure', 'Graphical Meaning'],
          rows: [
            ['"Flat baseline fee plus hourly speed"', 'y = mx + b', 'y-intercept is b; slope coefficient is m.'],
            ['"Threshold limit with excess surcharge"', 'y = a(x - C) + b', 'Slope a is only active for values exceeding threshold C.'],
            ['"Balanced combined resource bounds"', 'Ax + By = C', 'Standard line with x-intercept C/A and y-intercept C/B.']
          ]
        }
      ],
      examples: CHAPTER_3_WORKED_EXAMPLES.slice(11, 15)
    },
    {
      sectionTitle: '3.5 Custom Shortcut Techniques & Conceptual Strategies',
      fullText: 'To achieve a perfect score on linear modeling and systems questions, you must master the fundamental shortcuts that bypass tedious algebraic formulas.',
      bulletPoints: [
        'The "Zero-Baseline" Intercept Strategy: In any linear model y = mx + b or f(x) = mx + b, the constant b represents the baseline output when the input variable x equals 0. In real-world word problems, this usually corresponds to a non-negotiable initial condition, fixed base cost, starting amount, or initial inventory before any operational time or activity begins.',
        'The Slope-as-Rate Concept: The coefficient of the independent variable m represents the rate of change (Delta y / Delta x). In linear modeling questions, m measures the exact amount by which the dependent variable y increases or decreases for each single unit increase in x.',
        'Units Dimension Inversion Trick: When an equation is given in standard form Ax + By = C, each term (Ax, By, and C) must represent the exact same physical unit (e.g., dollars, pounds, total items). To determine the physical meaning of a coefficient: Unit of Coefficient A = (Total Unit of C) / (Unit of Variable x).',
        'Reciprocal Delta Scaling Shortcut: If a linear model gives an output increase of m units per 1 unit of input x, and a problem asks how many input units x are required to produce a specific target change Delta y: Delta x = Delta y / m. Taking the reciprocal of the slope (1 / m) gives the required input change per single unit of output change.'
      ],
      tables: [
        {
          title: 'Custom Shortcut Summary Table',
          headers: ['Shortcut Strategy', 'Mathematical Formula / Relation', 'SAT Application Method'],
          rows: [
            ['Zero-Baseline Intercept', 'b = constant term', 'Set input variable to zero to find the fixed charge or initial setup volume.'],
            ['Slope-as-Rate', 'm = coefficient of x', 'Identify rate of change directly as output units per single input unit.'],
            ['Units Dimension Inversion', 'Unit of A = Unit of C / Unit of x', 'Find the physical unit of any coefficient from standard form Ax + By = C.'],
            ['Reciprocal Delta Scaling', 'Delta x = Delta y / m', 'Divide output change by slope m to find required input adjustment directly.']
          ]
        }
      ],
      examples: CHAPTER_3_WORKED_EXAMPLES.slice(15, 20)
    },
    {
      sectionTitle: '3.6 Systems of Linear Equations (Algebraic Solutions & Graphical Intersections)',
      fullText: 'A system of equations is a set of two or more equations that must hold simultaneously. On the Digital SAT, linear systems appear in algebraic, geometric, and word-problem contexts.',
      bulletPoints: [
        'Solution Definition: The solution to a system is the specific coordinate pair $(x, y)$ that satisfies all equations in the system simultaneously. Graphically, this corresponds to the point(s) where the lines intersect.',
        'Substitution Method: Best when one variable has a coefficient of 1 or is already isolated ($y = mx + b$). Substitute the isolated expression into the other equation in parentheses to isolate a single variable.',
        'Elimination (Addition/Subtraction) Method: Best when equations are in standard form $Ax + By = C$. Multiply one or both equations by constants so that coefficients of one variable are equal or opposite, then add or subtract equations to eliminate that variable.',
        'Number of Solutions in Linear Systems: Exactly 1 solution if slopes are different ($m_1 \\neq m_2$). No solution (0 solutions) if slopes are equal and y-intercepts differ ($m_1 = m_2, b_1 \\neq b_2$, parallel lines). Infinitely many solutions if both equations are identical multiples ($m_1 = m_2, b_1 = b_2$, coincident lines).',
        'Word Problem Systems: Translate total quantity into a count equation ($x + y = \\text{Total}$) and total value into a weighted equation ($A x + B y = \\text{Total Revenue/Value}$).'
      ],
      tables: [
        {
          title: 'Linear Systems Classification & Solution Criteria',
          headers: ['System Type', 'Algebraic Condition', 'Graphical Behavior', 'Number of Solutions'],
          rows: [
            ['Independent / Consistent', 'm1 ≠ m2', 'Two lines intersecting at a single point (x, y)', 'Exactly 1 solution'],
            ['Inconsistent', 'm1 = m2 and b1 ≠ b2', 'Parallel lines with constant vertical separation', '0 solutions (No solution)'],
            ['Dependent / Coincident', 'm1 = m2 and b1 = b2 (A1/A2 = B1/B2 = C1/C2)', 'Same identical line lying on top of itself', 'Infinitely many solutions'],
            ['Word Problem Modeling', 'x + y = Count, Ax + By = Total Value', 'Quantity constraint line intersecting value constraint line', 'Single real-world equilibrium point']
          ]
        }
      ],
      examples: CHAPTER_3_WORKED_EXAMPLES.slice(20, 23)
    },
    {
      sectionTitle: '3.7 Quadratic Equations, Discriminants & Linear-Quadratic Systems',
      fullText: 'Quadratic equations are second-degree polynomial equations of the form $ax^2 + bx + c = 0$. Their graphs are U-shaped parabolas with reflective symmetry about a central vertical axis.',
      bulletPoints: [
        'Factoring & Zero-Product Property: To solve by factoring, rewrite into $(x - p)(x - q) = 0$. By the zero-product property, either $x - p = 0 \\implies x = p$ or $x - q = 0 \\implies x = q$. Watch the signs: $(x + 5)(x - 3) = 0 \\implies x = -5, 3$.',
        'Special Quadratic Forms: Difference of Squares: $a^2 - b^2 = (a - b)(a + b)$ (e.g., $x^2 - 49 = (x - 7)(x + 7) = 0 \\implies x = \\pm 7$). Perfect Square Trinomials: $a^2 \\pm 2ab + b^2 = (a \\pm b)^2$.',
        'Quadratic Formula: $x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$. Always use when integers cannot cleanly factor the trinomial.',
        'The Discriminant ($\\Delta = b^2 - 4ac$): Determines the number of real roots without solving: $\\Delta > 0 \\implies 2$ distinct real solutions (crosses x-axis twice); $\\Delta = 0 \\implies 1$ real double solution (tangent to x-axis at vertex); $\\Delta < 0 \\implies 0$ real solutions (parabola floats entirely above or below x-axis).',
        'Parabola Anatomy & Vertex: For $y = ax^2 + bx + c$, the axis of symmetry is $x = -b/(2a)$. The vertex is $(x_v, y_v) = \\left(-\\frac{b}{2a}, f\\left(-\\frac{b}{2a}\\right)\\right)$. In vertex form $y = a(x - h)^2 + k$, the vertex is $(h, k)$. Minimum value is $k$ if $a > 0$; maximum value is $k$ if $a < 0$.',
        'Linear + Quadratic Systems: Set line equal to parabola ($mx + b = ax^2 + bx + c$), rearrange to $Ax^2 + Bx + C = 0$, and solve for $x$ via factoring or quadratic formula. Then plug $x$ into the linear equation to get $y$. Intersections can be 0, 1 (tangent), or 2 (secant).'
      ],
      tables: [
        {
          title: 'Quadratic Forms & Key Analytical Formulas',
          headers: ['Quadratic Concept', 'Formula / Form', 'SAT Operational Shortcut'],
          rows: [
            ['Standard Form', 'y = ax² + bx + c', 'y-intercept is (0, c); parabola opens up if a > 0, down if a < 0.'],
            ['Vertex Form', 'y = a(x - h)² + k', 'Vertex is (h, k); extremum output value is k.'],
            ['Factored Form', 'y = a(x - r1)(x - r2)', 'x-intercepts are (r1, 0) and (r2, 0); vertex axis is x = (r1 + r2)/2.'],
            ['Discriminant Δ', 'b² - 4ac', 'Δ > 0: 2 real roots; Δ = 0: 1 real root; Δ < 0: 0 real roots.'],
            ['Sum & Product of Roots', 'r1 + r2 = -b/a, r1 · r2 = c/a', "Vieta's shortcuts: find sum or product of solutions without calculating roots."],
            ['Line + Parabola System', 'Equate line & parabola → check Δ', 'Δ > 0 (2 intersections), Δ = 0 (1 tangent point), Δ < 0 (no intersection).']
          ]
        }
      ],
      examples: CHAPTER_3_WORKED_EXAMPLES.slice(23, 27)
    }
  ],
  exerciseGroups: [
    {
      exerciseNumber: 1,
      title: 'Module 1: Easy / Medium Questions',
      description: 'Foundational algebra exercises covering y-intercepts, x-intercept exhaustion limits, single-step slope rates, simple standard coefficient balances, and linear verbal modeling.',
      questions: CHAPTER_3_QUESTIONS_MODULE_1
    },
    {
      exerciseNumber: 2,
      title: 'Module 2: Hard Questions',
      description: 'Advanced coordinate slope calculations, reciprocal rate inversions, excess bracket surcharges, multi-variable fuel allocations, and coordinate graph overlaps.',
      questions: CHAPTER_3_QUESTIONS_MODULE_2
    },
    {
      exerciseNumber: 3,
      title: 'Exercise 3: Systems of Equations & Quadratic Equations (30 Practice Questions)',
      description: 'Mastery practice covering algebraic linear systems (substitution & elimination), parallel vs. coincident systems, standard word problem translations, factoring trinomials, differences of squares, discriminant analysis, vertex coordinates, and linear-quadratic intersection systems.',
      questions: CHAPTER_3_SYSTEMS_AND_QUADRATICS_QUESTIONS
    }
  ]
};
