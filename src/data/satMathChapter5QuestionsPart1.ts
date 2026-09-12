import { MathExerciseQuestion } from './satMathConcepts';

export const CHAPTER_5_QUESTIONS_MODULE_1: MathExerciseQuestion[] = [
  {
    id: 'ch5-q1',
    number: 1,
    exerciseNumber: 1,
    exerciseTitle: 'Module 1: Easy / Medium Questions',
    question: 'A class has $15$ male students and $20$ female students. What is the ratio of male students to the total number of students in simplest form?',
    options: ['3:4', '4:3', '3:7', '4:7'],
    correctIndex: 2,
    correctAnswerText: '3:7',
    explanation: `Step-by-Step Solution:
1. **Identify the Given Quantities**:
   - Male students = $15$
   - Female students = $20$

2. **Calculate the Total Number of Students**:
   $$\\text{Total} = \\text{Male} + \\text{Female} = 15 + 20 = 35$$

3. **Express the Ratio of Male to Total**:
   $$\\text{Ratio} = \\frac{\\text{Male}}{\\text{Total}} = \\frac{15}{35}$$

4. **Simplify the Fraction**:
   Divide the numerator and denominator by their greatest common divisor ($5$):
   $$\\frac{15 \\div 5}{35 \\div 5} = \\frac{3}{7}$$

**SAT Tip:** Always read carefully! The question asks for the ratio of male students to the **total** number of students, not male to female (which would be $3:4$).`
  },
  {
    id: 'ch5-q2',
    number: 2,
    exerciseNumber: 1,
    exerciseTitle: 'Module 1: Easy / Medium Questions',
    question: 'A map uses a scale of $0.5\\text{ inches} = 12\\text{ miles}$. If two cities are $3.75\\text{ inches}$ apart on the map, what is the actual distance between them in miles?',
    options: ['75 miles', '80 miles', '90 miles', '95 miles'],
    correctIndex: 2,
    correctAnswerText: '90 miles',
    explanation: `Step-by-Step Solution:
1. **Set Up a Proportion**:
   $$\\frac{0.5\\text{ inches}}{12\\text{ miles}} = \\frac{3.75\\text{ inches}}{x\\text{ miles}}$$

2. **Cross-Multiply**:
   $$0.5 \\cdot x = 12 \\cdot 3.75$$
   $$0.5x = 45$$

3. **Solve for $x$**:
   $$x = \\frac{45}{0.5} = 90\\text{ miles}$$

**Tutor Shortcut:** Since $3.75$ is exactly $7.5$ times greater than $0.5$ (i.e., $3.75 \\div 0.5 = 7.5$), the actual distance must also be $7.5$ times greater than $12$:
$$12 \\times 7.5 = 90\\text{ miles}$$`
  },
  {
    id: 'ch5-q3',
    number: 3,
    exerciseNumber: 1,
    exerciseTitle: 'Module 1: Easy / Medium Questions',
    question: 'A recipe calls for $3\\text{ cups}$ of flour for every $2\\text{ cups}$ of sugar. How many cups of sugar are needed if $7.5\\text{ cups}$ of flour are used?',
    options: ['4 cups', '4.5 cups', '5 cups', '5.5 cups'],
    correctIndex: 2,
    correctAnswerText: '5 cups',
    explanation: `Step-by-Step Solution:
1. **Set Up the Ratio Fraction**:
   $$\\frac{\\text{Flour}}{\\text{Sugar}} = \\frac{3}{2}$$

2. **Equate to the New Amounts**:
   $$\\frac{3}{2} = \\frac{7.5}{S}$$

3. **Cross-Multiply**:
   $$3 \\cdot S = 2 \\cdot 7.5$$
   $$3S = 15$$

4. **Solve for $S$**:
   $$S = \\frac{15}{3} = 5\\text{ cups}$$

**Tutor Shortcut:** The multiplier from $3$ to $7.5$ is $2.5$ (since $7.5 \\div 3 = 2.5$). Multiply the sugar by the same factor:
$$2 \\times 2.5 = 5\\text{ cups}$$`
  },
  {
    id: 'ch5-q4',
    number: 4,
    exerciseNumber: 1,
    exerciseTitle: 'Module 1: Easy / Medium Questions',
    question: 'A car travels $220\\text{ miles}$ on $8\\text{ gallons}$ of fuel. At this same rate, how many gallons of fuel are required to travel $385\\text{ miles}$?',
    options: ['12 gallons', '13 gallons', '14 gallons', '15 gallons'],
    correctIndex: 2,
    correctAnswerText: '14 gallons',
    explanation: `Step-by-Step Solution:
1. **Calculate the Fuel Efficiency (Unit Rate)**:
   $$\\text{Rate} = \\frac{220\\text{ miles}}{8\\text{ gallons}} = 27.5\\text{ miles per gallon (mpg)}$$

2. **Set Up the Fuel Formula**:
   $$\\text{Gallons Needed} = \\frac{\\text{Target Distance}}{\\text{Unit Rate}}$$
   $$\\text{Gallons Needed} = \\frac{385}{27.5}$$

3. **Compute the Division**:
   $$\\frac{385}{27.5} = 14\\text{ gallons}$$

**Alternative Proportion Setup**:
$$\\frac{220}{8} = \\frac{385}{g} \\implies 220g = 3080 \\implies g = 14$$`
  },
  {
    id: 'ch5-q5',
    number: 5,
    exerciseNumber: 1,
    exerciseTitle: 'Module 1: Easy / Medium Questions',
    question: 'The ratio of red marbles to blue marbles to green marbles in a bag is $3:4:8$. If there are $120$ green marbles, how many total marbles are in the bag?',
    options: ['180 marbles', '200 marbles', '225 marbles', '240 marbles'],
    correctIndex: 2,
    correctAnswerText: '225 marbles',
    explanation: `Step-by-Step Solution:
1. **Apply the $x$-Factor Multiplier Method**:
   Let the actual quantities be:
   - Red marbles = $3x$
   - Blue marbles = $4x$
   - Green marbles = $8x$

2. **Solve for $x$ using Green Marbles**:
   We are given that green marbles = $120$:
   $$8x = 120 \\implies x = 15$$

3. **Calculate the Total Ratio Units**:
   $$\\text{Total Units} = 3 + 4 + 8 = 15\\text{ units}$$

4. **Multiply Total Units by $x$**:
   $$\\text{Total Marbles} = 15 \\cdot x = 15 \\cdot 15 = 225\\text{ marbles}$$

**Tutor Shortcut:** Since green marbles ($8$ units) is $120$, each ratio unit represents $120 \\div 8 = 15$ marbles. The total units is $3 + 4 + 8 = 15$ units. Total marbles = $15 \\times 15 = 225$.`
  },
  {
    id: 'ch5-q6',
    number: 6,
    exerciseNumber: 1,
    exerciseTitle: 'Module 1: Easy / Medium Questions',
    question: 'An assembly line produces $420$ units every $3.5\\text{ hours}$. How many units does it produce in $15\\text{ minutes}$?',
    options: ['25 units', '30 units', '35 units', '40 units'],
    correctIndex: 1,
    correctAnswerText: '30 units',
    explanation: `Step-by-Step Solution:
1. **Standardize the Units (Convert hours to minutes)**:
   $$3.5\\text{ hours} = 3.5 \\times 60 = 210\\text{ minutes}$$

2. **Calculate the Production Rate per Minute**:
   $$\\text{Rate} = \\frac{420\\text{ units}}{210\\text{ minutes}} = 2\\text{ units per minute}$$

3. **Find the Output for $15\\text{ Minutes}$**:
   $$\\text{Output} = \\text{Rate} \\times \\text{Time}$$
   $$\\text{Output} = 2\\text{ units/min} \\times 15\\text{ minutes} = 30\\text{ units}$$

**SAT Trick:** Never work with mixed units. Converting hours directly to minutes makes the division trivial ($420 \\div 210 = 2$).`
  },
  {
    id: 'ch5-q7',
    number: 7,
    exerciseNumber: 1,
    exerciseTitle: 'Module 1: Easy / Medium Questions',
    question: 'A vehicle is driving at a constant speed of $72\\text{ kilometers per hour}$. What is its speed in meters per second?',
    options: ['15 m/s', '20 m/s', '25 m/s', '30 m/s'],
    correctIndex: 1,
    correctAnswerText: '20 m/s',
    explanation: `Step-by-Step Solution:
1. **Set Up Dimensional Analysis Fractions**:
   We need to convert $\\frac{\\text{kilometers}}{\\text{hour}}$ to $\\frac{\\text{meters}}{\\text{second}}$.
   - $1\\text{ kilometer} = 1000\\text{ meters}$
   - $1\\text{ hour} = 3600\\text{ seconds}$

2. **Align Conversion Factors**:
   $$\\frac{72\\text{ km}}{1\\text{ hr}} \\times \\frac{1000\\text{ m}}{1\\text{ km}} \\times \\frac{1\\text{ hr}}{3600\\text{ s}}$$

3. **Cancel Units Diagonally and Compute**:
   $$\\frac{72 \\times 1000}{3600}\\text{ m/s}$$
   $$\\frac{72000}{3600} = 20\\text{ m/s}$$

**SAT Shortcut:** To convert $\\text{km/h}$ to $\\text{m/s}$ directly, divide by $3.6$:
$$72 \\div 3.6 = 20\\text{ m/s}$$`
  },
  {
    id: 'ch5-q8',
    number: 8,
    exerciseNumber: 1,
    exerciseTitle: 'Module 1: Easy / Medium Questions',
    question: 'If $a:b = 2:3$ and $b:c = 5:7$, what is the ratio $a:c$?',
    options: ['2:7', '10:21', '10:15', '15:21'],
    correctIndex: 1,
    correctAnswerText: '10:21',
    explanation: `Step-by-Step Solution:
1. **Identify the Bridge Element**:
   The variable $b$ appears in both ratios, but with different values ($3$ and $5$). To connect them, we must find a common multiple for $b$.
   - Least Common Multiple of $3$ and $5$ is $15$.

2. **Scale the Ratios**:
   - For $a:b = 2:3$, multiply both by $5$ to make $b = 15$:
     $$a:b = 10:15$$
   - For $b:c = 5:7$, multiply both by $3$ to make $b = 15$:
     $$b:c = 15:21$$

3. **Combine Into a Single Ratio**:
   $$a:b:c = 10:15:21$$

4. **Extract the Ratio $a:c$**:
   $$a:c = 10:21$$`
  },
  {
    id: 'ch5-q9',
    number: 9,
    exerciseNumber: 1,
    exerciseTitle: 'Module 1: Easy / Medium Questions',
    question: 'Machine A fills $60$ bottles in $5\\text{ minutes}$. Machine B fills $60$ bottles in $3\\text{ minutes}$. How many total bottles can both machines fill together in $12\\text{ minutes}$?',
    options: ['320 bottles', '360 bottles', '384 bottles', '400 bottles'],
    correctIndex: 2,
    correctAnswerText: '384 bottles',
    explanation: `Step-by-Step Solution:
1. **Find Individual Rates**:
   - Rate$_A = \\frac{60\\text{ bottles}}{5\\text{ minutes}} = 12\\text{ bottles per minute}$
   - Rate$_B = \\frac{60\\text{ bottles}}{3\\text{ minutes}} = 20\\text{ bottles per minute}$

2. **Find the Combined Rate**:
   $$\\text{Combined Rate} = \\text{Rate}_A + \\text{Rate}_B = 12 + 20 = 32\\text{ bottles per minute}$$

3. **Calculate Total Production in $12\\text{ Minutes}$**:
   $$\\text{Total Work} = \\text{Combined Rate} \\times \\text{Time}$$
   $$\\text{Total Work} = 32\\text{ bottles/min} \\times 12\\text{ minutes} = 384\\text{ bottles}$$`
  },
  {
    id: 'ch5-q10',
    number: 10,
    exerciseNumber: 1,
    exerciseTitle: 'Module 1: Easy / Medium Questions',
    question: 'The perimeter of a rectangle is $180\\text{ cm}$. If the ratio of length to width is $7:2$, what is the area of the rectangle in square centimeters?',
    options: ['1,200 cm²', '1,400 cm²', '1,600 cm²', '1,800 cm²'],
    correctIndex: 1,
    correctAnswerText: '1,400 cm²',
    explanation: `Step-by-Step Solution:
1. **Express Length and Width using the $x$-Factor**:
   - Length ($L$) = $7x$
   - Width ($W$) = $2x$

2. **Set Up the Perimeter Equation**:
   $$\\text{Perimeter} = 2(L + W)$$
   $$180 = 2(7x + 2x)$$
   $$180 = 2(9x)$$
   $$180 = 18x \\implies x = 10$$

3. **Calculate Actual Length and Width**:
   - $L = 7(10) = 70\\text{ cm}$
   - $W = 2(10) = 20\\text{ cm}$

4. **Calculate Area**:
   $$\\text{Area} = L \\times W = 70 \\times 20 = 1,400\\text{ cm}^2$$`
  },
  {
    id: 'ch5-q11',
    number: 11,
    exerciseNumber: 1,
    exerciseTitle: 'Module 1: Easy / Medium Questions',
    question: 'A garden plot measuring $12\\text{ feet}$ by $15\\text{ feet}$ requires $300\\text{ pounds}$ of soil overlay. How many pounds of soil are required for a garden measuring $24\\text{ feet}$ by $30\\text{ feet}$ at the same depth?',
    options: ['600 pounds', '900 pounds', '1,200 pounds', '1,500 pounds'],
    correctIndex: 2,
    correctAnswerText: '1,200 pounds',
    explanation: `Step-by-Step Solution:
1. **Find the Area of Garden 1**:
   $$\\text{Area}_1 = 12 \\times 15 = 180\\text{ sq ft}$$

2. **Find the Area of Garden 2**:
   $$\\text{Area}_2 = 24 \\times 30 = 720\\text{ sq ft}$$

3. **Determine the Ratio of the Areas**:
   $$\\text{Area Ratio} = \\frac{\\text{Area}_2}{\\text{Area}_1} = \\frac{720}{180} = 4$$

4. **Multiply the Required Soil by the Area Ratio**:
   $$\\text{Soil Needed} = 300\\text{ pounds} \\times 4 = 1,200\\text{ pounds}$$

**Tutor Secret:** Since the dimensions are doubled ($12 \\to 24$ is $2\\times$, $15 \\to 30$ is $2\\times$), the area increases by a factor of $2^2 = 4$. Therefore, $4$ times more soil is needed:
$$300 \\times 4 = 1,200\\text{ pounds}$$`
  },
  {
    id: 'ch5-q12',
    number: 12,
    exerciseNumber: 1,
    exerciseTitle: 'Module 1: Easy / Medium Questions',
    question: 'If $3x = 5y$, what is the value of the ratio $\\frac{x + y}{x - y}$?',
    options: ['2', '3', '4', '5'],
    correctIndex: 2,
    correctAnswerText: '4',
    explanation: `Step-by-Step Solution:
1. **Express $x$ in terms of $y$**:
   $$3x = 5y \\implies x = \\frac{5}{3}y$$

2. **Substitute into the Target Expression**:
   $$\\frac{x + y}{x - y} = \\frac{\\frac{5}{3}y + y}{\\frac{5}{3}y - y}$$

3. **Simplify the Fraction**:
   Factor out $y$ from both the numerator and the denominator:
   $$\\frac{y\\left(\\frac{5}{3} + 1\\right)}{y\\left(\\frac{5}{3} - 1\\right)} = \\frac{\\frac{8}{3}}{\\frac{2}{3}}$$

4. **Perform Division**:
   $$\\frac{8}{3} \\cdot \\frac{3}{2} = \\frac{8}{2} = 4$$

**Tutor Shortcut:** Pick easy numbers! Let $y = 3$. Since $3x = 5y$, we have $3x = 15 \\implies x = 5$.
Now, plug $x = 5$ and $y = 3$ directly into the expression:
$$\\frac{5 + 3}{5 - 3} = \\frac{8}{2} = 4$$
Plugging in numbers is almost always faster on the SAT!`
  },
  {
    id: 'ch5-q13',
    number: 13,
    exerciseNumber: 1,
    exerciseTitle: 'Module 1: Easy / Medium Questions',
    question: 'A runner completes a $10\\text{-kilometer}$ race in $42\\text{ minutes}$. What is the runner’s average speed in miles per hour? ($1\\text{ mile} \\approx 1.6\\text{ km}$)',
    options: ['8.12 mph', '8.56 mph', '8.93 mph', '9.21 mph'],
    correctIndex: 2,
    correctAnswerText: '8.93 mph',
    explanation: `Step-by-Step Solution:
1. **Convert Kilometers to Miles**:
   $$\\text{Distance in Miles} = \\frac{10\\text{ km}}{1.6\\text{ km/mile}} = 6.25\\text{ miles}$$

2. **Convert Minutes to Hours**:
   $$\\text{Time in Hours} = \\frac{42\\text{ minutes}}{60\\text{ minutes/hour}} = 0.7\\text{ hours}$$

3. **Calculate Average Speed**:
   $$\\text{Speed} = \\frac{\\text{Distance}}{\\text{Time}} = \\frac{6.25\\text{ miles}}{0.7\\text{ hours}} \\approx 8.93\\text{ mph}$$`
  },
  {
    id: 'ch5-q14',
    number: 14,
    exerciseNumber: 1,
    exerciseTitle: 'Module 1: Easy / Medium Questions',
    question: 'In a school of $840$ students, the ratio of juniors to seniors is $4:3$. If $15\\%$ of juniors and $20\\%$ of seniors are in the honor society, how many total juniors and seniors are in the honor society?',
    options: ['124', '128', '132', '136'],
    correctIndex: 2,
    correctAnswerText: '132',
    explanation: `Step-by-Step Solution:
1. **Find the Number of Juniors and Seniors**:
   Let Juniors = $4x$ and Seniors = $3x$.
   $$4x + 3x = 840 \\implies 7x = 840 \\implies x = 120$$
   - Juniors = $4(120) = 480$
   - Seniors = $3(120) = 360$

2. **Calculate Juniors in Honor Society**:
   $$15\\% \\text{ of } 480 = 0.15 \\times 480 = 72$$

3. **Calculate Seniors in Honor Society**:
   $$20\\% \\text{ of } 360 = 0.20 \\times 360 = 72$$

4. **Sum the Totals**:
   $$\\text{Total} = 72 + 72 = 132$$`
  },
  {
    id: 'ch5-q15',
    number: 15,
    exerciseNumber: 1,
    exerciseTitle: 'Module 1: Easy / Medium Questions',
    question: 'Water flows through a pipe at a rate of $2.5\\text{ gallons per second}$. How many cubic feet of water flow through the pipe in $1\\text{ hour}$? ($1\\text{ cubic foot} \\approx 7.48\\text{ gallons}$)',
    options: ['1,152.6 ft³', '1,185.4 ft³', '1,203.2 ft³', '1,224.8 ft³'],
    correctIndex: 2,
    correctAnswerText: '1,203.2 ft³',
    explanation: `Step-by-Step Solution:
1. **Determine the Total Seconds in 1 Hour**:
   $$1\\text{ hour} = 3600\\text{ seconds}$$

2. **Calculate Total Gallons Flowed**:
   $$\\text{Total Gallons} = 2.5\\text{ gallons/sec} \\times 3600\\text{ seconds} = 9,000\\text{ gallons}$$

3. **Convert Gallons to Cubic Feet**:
   $$\\text{Volume in Cubic Feet} = \\frac{9,000\\text{ gallons}}{7.48\\text{ gallons/ft}^3} \\approx 1,203.21\\text{ ft}^3$$`
  },
  {
    id: 'ch5-q16',
    number: 16,
    exerciseNumber: 1,
    exerciseTitle: 'Module 1: Easy / Medium Questions',
    question: 'An alloy contains copper, zinc, and tin in the ratio $7:3:2$. If a block of this alloy contains $21\\text{ kg}$ of copper, what is the total weight of the alloy block?',
    options: ['30 kg', '33 kg', '36 kg', '42 kg'],
    correctIndex: 2,
    correctAnswerText: '36 kg',
    explanation: `Step-by-Step Solution:
1. **Apply the $x$-Factor Multiplier Method**:
   Let the weights of components be:
   - Copper = $7x$
   - Zinc = $3x$
   - Tin = $2x$

2. **Solve for $x$ using Copper Weight**:
   $$7x = 21 \\implies x = 3$$

3. **Calculate the Total Weight**:
   $$\\text{Total Weight} = 7x + 3x + 2x = 12x$$
   $$\\text{Total Weight} = 12(3) = 36\\text{ kg}$$`
  },
  {
    id: 'ch5-q17',
    number: 17,
    exerciseNumber: 1,
    exerciseTitle: 'Module 1: Easy / Medium Questions',
    question: 'A team of $6$ workers takes $8\\text{ hours}$ to complete a task. Assuming all workers perform at the exact same constant rate, how many hours would it take $4$ workers to complete the same task?',
    options: ['10 hours', '11 hours', '12 hours', '14 hours'],
    correctIndex: 2,
    correctAnswerText: '12 hours',
    explanation: `Step-by-Step Solution:
1. **Calculate the Total Workload in Worker-Hours**:
   $$\\text{Total Work} = \\text{Workers} \\times \\text{Time}$$
   $$\\text{Total Work} = 6 \\text{ workers} \\times 8 \\text{ hours} = 48\\text{ worker-hours}$$

2. **Solve for the New Time with $4$ Workers**:
   $$\\text{Time} = \\frac{\\text{Total Work}}{\\text{New Workers}}$$
   $$\\text{Time} = \\frac{48\\text{ worker-hours}}{4\\text{ workers}} = 12\\text{ hours}$$

**Tutor Hint:** Fewer workers means more time. Since the number of workers decreases by $\\frac{4}{6} = \\frac{2}{3}$, the time must increase by the reciprocal factor $\\frac{3}{2}$:
$$8 \\times \\frac{3}{2} = 12\\text{ hours}$$`
  },
  {
    id: 'ch5-q18',
    number: 18,
    exerciseNumber: 1,
    exerciseTitle: 'Module 1: Easy / Medium Questions',
    question: 'Scale drawing A has a scale of $1\\text{ cm} = 5\\text{ m}$. Scale drawing B of the same building has a scale of $1\\text{ cm} = 2\\text{ m}$. If a wall is represented as $6\\text{ cm}$ on Drawing A, how long is the representation of the wall on Drawing B?',
    options: ['12 cm', '14 cm', '15 cm', '18 cm'],
    correctIndex: 2,
    correctAnswerText: '15 cm',
    explanation: `Step-by-Step Solution:
1. **Find the Actual Length of the Wall**:
   Using Drawing A ($1\\text{ cm} = 5\\text{ m}$):
   $$\\text{Actual Length} = 6\\text{ cm} \\times 5\\text{ m/cm} = 30\\text{ meters}$$

2. **Convert to Drawing B representation**:
   Using Drawing B ($1\\text{ cm} = 2\\text{ m}$):
   $$\\text{Drawing B Length} = \\frac{30\\text{ m}}{2\\text{ m/cm}} = 15\\text{ cm}$$`
  },
  {
    id: 'ch5-q19',
    number: 19,
    exerciseNumber: 1,
    exerciseTitle: 'Module 1: Easy / Medium Questions',
    question: 'A solution is made by mixing $40\\text{ mL}$ of pure acid with $160\\text{ mL}$ of water. What is the ratio of acid to total solution volume?',
    options: ['1:4', '1:5', '1:6', '2:5'],
    correctIndex: 1,
    correctAnswerText: '1:5',
    explanation: `Step-by-Step Solution:
1. **Identify the Components**:
   - Acid = $40\\text{ mL}$
   - Water = $160\\text{ mL}$

2. **Calculate the Total Solution Volume**:
   $$\\text{Total Volume} = \\text{Acid} + \\text{Water} = 40 + 160 = 200\\text{ mL}$$

3. **Express the Ratio**:
   $$\\text{Ratio} = \\frac{\\text{Acid}}{\\text{Total}} = \\frac{40}{200}$$

4. **Simplify the Ratio**:
   $$\\frac{40}{200} = \\frac{1}{5} = 1:5$$

**Tutor Warning:** Watch out! A common mistake is using the ratio of Acid to Water ($40:160 = 1:4$). Always pay close attention to whether the question asks for a part-to-part ratio or a part-to-whole ratio.`
  },
  {
    id: 'ch5-q20',
    number: 20,
    exerciseNumber: 1,
    exerciseTitle: 'Module 1: Easy / Medium Questions',
    question: 'The ratio of $x$ to $y$ is $4:9$. If $x$ is increased by $50\\%$ and $y$ is decreased by $33.33\\%$ ($\\frac{1}{3}$), what is the new ratio of $x$ to $y$?',
    options: ['1:1', '2:3', '3:4', '4:9'],
    correctIndex: 0,
    correctAnswerText: '1:1',
    explanation: `Step-by-Step Solution:
1. **Choose Simple Placeholder Values**:
   Let $x = 4$ and $y = 9$.

2. **Apply the Percent Changes**:
   - **Increase $x$ by $50\\%$**:
     $$\\text{New } x = 4 \\times (1 + 0.50) = 4 \\times 1.5 = 6$$
   - **Decrease $y$ by $33.33\\%$ (or $\\frac{1}{3}$)**:
     $$\\text{New } y = 9 \\times \\left(1 - \\frac{1}{3}\\right) = 9 \\times \\frac{2}{3} = 6$$

3. **Express the New Ratio**:
   $$\\text{New Ratio} = \\frac{\\text{New } x}{\\text{New } y} = \\frac{6}{6} = 1:1$$`
  }
];
