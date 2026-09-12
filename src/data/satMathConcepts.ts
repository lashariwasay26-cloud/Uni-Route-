export interface MathTableData {
  title: string;
  headers: string[];
  rows: string[][];
}

export interface MathDiagramPoint {
  x: number;
  y: number;
  label?: string;
  color?: string;
}

export interface MathTextAnnotation {
  x: number;
  y: number;
  text: string;
  color?: string;
  fontSize?: number;
  fontWeight?: string;
  background?: string;
  border?: string;
  padding?: number;
}

export interface MathAngleArc {
  center: [number, number];
  radius?: number;
  startAngle: number; // in degrees (0 = +x, counterclockwise)
  endAngle: number;
  color?: string;
  label?: string;
  labelOffset?: number;
}

export interface MathDiagramCurve {
  type: 'function' | 'line' | 'points' | 'region' | 'arrow' | 'vertical_line' | 'circle' | 'ellipse' | 'arc';
  circle?: { cx: number; cy: number; r: number };
  ellipse?: { cx: number; cy: number; rx: number; ry: number };
  arc?: { cx: number; cy: number; r: number; startAngle: number; endAngle: number };
  smooth?: boolean;
  fnType?: 'parabola' | 'line' | 'exponential' | 'cubic' | 'custom' | 'circle' | 'ellipse';
  expression?: string;
  xIntercept?: number;
  color?: string;
  style?: 'solid' | 'dashed' | 'dotted';
  label?: string;
  labelPosition?: { x: number; y: number };
  points?: [number, number][];
  shade?: 'above' | 'below' | 'left' | 'right' | 'between' | 'region';
  shadeRegion?: 'above' | 'below' | 'left' | 'right' | 'between';
  shadeColor?: string;
  strokeWidth?: number;
  fill?: string | boolean;
  highlightPoints?: MathDiagramPoint[];
  arrow?: { from: [number, number]; to: [number, number]; label?: string };
}

export interface MathDiagramSpec {
  id?: string;
  title?: string;
  caption?: string;
  xAxisLabel?: string;
  yAxisLabel?: string;
  xTicksLabels?: { [x: number]: string };
  yTicksLabels?: { [y: number]: string };
  xRange?: [number, number]; // default [-5, 5]
  yRange?: [number, number]; // default [-5, 5]
  xStep?: number;
  yStep?: number;
  hideAxes?: boolean;
  hideGrid?: boolean;
  hideTicks?: boolean;
  textAnnotations?: MathTextAnnotation[];
  angleArcs?: MathAngleArc[];
  curves?: MathDiagramCurve[];
  width?: number;
  height?: number;
  // If multi-diagram (e.g. before & after, or 4 option graphs)
  subDiagrams?: {
    label?: string;
    caption?: string;
    xAxisLabel?: string;
    yAxisLabel?: string;
    xTicksLabels?: { [x: number]: string };
    yTicksLabels?: { [y: number]: string };
    curves: MathDiagramCurve[];
    xRange?: [number, number];
    yRange?: [number, number];
    xStep?: number;
    yStep?: number;
    hideAxes?: boolean;
    hideGrid?: boolean;
    hideTicks?: boolean;
    textAnnotations?: MathTextAnnotation[];
    angleArcs?: MathAngleArc[];
    width?: number;
    height?: number;
  }[];
}

export interface MathWorkedExample {
  title: string;
  question: string;
  options?: string[];
  correctAnswer: string;
  correctIndex?: number;
  explanation: string;
  diagram?: MathDiagramSpec;
  diagrams?: MathDiagramSpec[];
  table?: MathTableData;
  tables?: MathTableData[];
  optionTables?: MathTableData[];
}

export interface MathTheorySection {
  sectionTitle: string;
  fullText: string;
  bulletPoints?: string[];
  tables?: MathTableData[];
  examples?: MathWorkedExample[];
  diagrams?: MathDiagramSpec[];
}

export interface MathExerciseQuestion {
  id: string;
  number: number;
  exerciseNumber: number;
  exerciseTitle: string;
  question: string;
  expression?: string;
  diagram?: MathDiagramSpec;
  diagrams?: MathDiagramSpec[];
  table?: MathTableData;
  tables?: MathTableData[];
  optionTables?: MathTableData[];
  options: string[];
  correctIndex: number;
  correctAnswerText: string;
  explanation: string;
  distractorExplanations?: { [optionIndex: number]: string };
}

export interface MathExerciseGroup {
  exerciseNumber: number;
  title: string;
  description: string;
  questions: MathExerciseQuestion[];
}

export interface FullSatMathChapter {
  id: string;
  chapterNumber: number;
  chapterTitle: string;
  pageNumber: number;
  quote?: string;
  introduction: string;
  sections: MathTheorySection[];
  exerciseGroups: MathExerciseGroup[];
}
