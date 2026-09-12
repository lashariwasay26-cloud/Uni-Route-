import { EssayPrompt, SampleEssay } from '../types';

export const COMMON_APP_PROMPTS: EssayPrompt[] = [
  {
    id: 'prompt-1',
    source: 'Common App 2025-2026',
    title: 'Background, Identity, or Interest',
    promptText: 'Some students have a background, identity, interest, or talent that is so meaningful they believe their application would be incomplete without it. If this sounds like you, then please share your story.',
    tips: [
      'Focus on a specific pivotal story rather than a broad biography.',
      'Show, don’t just tell: describe real moments, conversations, or actions.',
      'Connect your background directly to who you are today and your core values.'
    ]
  },
  {
    id: 'prompt-2',
    source: 'Common App 2025-2026',
    title: 'Overcoming Obstacles & Lessons Learned',
    promptText: 'The lessons we take from obstacles we encounter can be fundamental to later success. Recount a time when you faced a challenge, setback, or failure. How did it affect you, and what did you learn from the experience?',
    tips: [
      'Keep the failure/setback concise (approx 20-30% of the essay).',
      'Spend 70% of the essay on your reflection, growth, and problem-solving mindset.',
      'Avoid blaming external forces; demonstrate accountability and emotional maturity.'
    ]
  },
  {
    id: 'prompt-3',
    source: 'Common App 2025-2026',
    title: 'Challenging a Belief or Idea',
    promptText: 'Reflect on a time when you questioned or challenged a belief or idea. What prompted your thinking? What was the outcome?',
    tips: [
      'Show intellectual curiosity and openness to discourse.',
      'Explain your thought process thoughtfully rather than being confrontational.',
      'Highlight how the experience shaped your worldview.'
    ]
  },
  {
    id: 'prompt-4',
    source: 'Common App 2025-2026',
    title: 'Problem Solving & Curiosity',
    promptText: 'Describe a problem you’ve solved or a problem you’d like to solve. It can be an intellectual challenge, a research query, an ethical dilemma - anything that is of personal importance, no matter the scale. Explain its significance to you and what steps you took or could take to identify a solution.',
    tips: [
      'Demonstrate initiative, resourcefulness, and technical/analytical skills.',
      'Connect the problem to your intended major or life mission.',
      'Highlight collaborative effort or independent research methodology.'
    ]
  },
  {
    id: 'prompt-5',
    source: 'Common App 2025-2026',
    title: 'Personal Growth & Accomplishment',
    promptText: 'Discuss an accomplishment, event, or realization that sparked a period of personal growth and a new understanding of yourself or others.',
    tips: [
      'Focus on an authentic turning point moment.',
      'Reflect deeply on before vs. after your realization.',
      'Demonstrate empathy and heightened self-awareness.'
    ]
  }
];

export const SAMPLE_ESSAYS: SampleEssay[] = [
  {
    id: 'sample-1',
    title: 'The Circuit Board and the Chay Tea',
    university: 'Stanford University / MIT Accepted',
    prompt: 'Background, Identity, or Interest',
    wordCount: 638,
    essayText: `Every Sunday afternoon in Lahore, my grandfather and I engaged in a ritual that bridged two entirely different worlds: soldering copper wires over a cracked wooden table while sipping cardamom-infused Doodh Pati tea. To my family, Dadi’s kitchen was a space of culinary precision, where spices were measured down to the pinch. To me, it was my first laboratory.

When my high school robotics team lost our primary microcontroller two weeks before the national championship, panic consumed the room. Imported components took a month to ship through customs, and our budget was completely exhausted. While my teammates debated giving up, I looked at the pile of discarded radios and broken LED monitors sitting in my neighborhood repair shop.

I asked the shop owner, Uncle Rafiq, if I could disassemble his scrapped electronics. Beneath layers of dust lay operational capacitors, micro-switches, and silicon chips. Guided by late-night datasheets and sheer curiosity, I etched a custom PCB using household household acid solutions and repurposed copper-clad board. Three days later, our robot drove across the arena floor—powered not by expensive imported gear, but by local ingenuity and perseverance.

Engineering, I realized, isn’t about access to high-end labs; it is about resourcefulness in the face of constraints. Whether designing an algorithm to optimize rural solar power grids or analyzing satellite imagery for local water management, I carry the lesson of that Sunday afternoon: true innovation begins when you look at scraps and see potential.`,
    keyStrengths: [
      'Vivid sensory hook combining cultural heritage with technical passion.',
      'Clear problem-solving narrative demonstrating resilience under pressure.',
      'Strong connection between personal origin and future academic goal in engineering.'
    ]
  },
  {
    id: 'sample-2',
    title: 'Unpacking the Debate Gavel',
    university: 'Oxford / Cambridge / Harvard Accepted',
    prompt: 'Challenging a Belief or Idea',
    wordCount: 592,
    essayText: `Growing up in a traditional household where deference to authority was expected, debate club was my quiet rebellion. When I stood behind the podium, holding the heavy wooden gavel, I felt empowered. For two years, I equated successful debate with rhetorical dominance—demolishing an opponent’s argument with sharp statistics and unyielding speed.

That changed during the Regional Model UN Conference when I represented a developing nation on global trade tariffs. In the final committee session, a delegate from a small delegation raised her hand, softly explaining how proposed agricultural subsidies directly harmed subsistence farmers in her home region. My initial instinct was to counter with macroeconomic data. But looking at her, I stopped.

For the first time, I listened not to formulate a rebuttal, but to understand. I realized that my pursuit of intellectual victory had blinded me to human nuance. Real diplomacy didn’t require silencing others; it required building bridges through active empathy and shared understanding.

I spent the remaining hours co-authoring an amended resolution that protected vulnerable agricultural sectors while maintaining trade incentives. That evening, I laid down the gavel not as a weapon of debate, but as a tool for collaborative consensus.`,
    keyStrengths: [
      'Authentic vulnerability showing shift from arrogance to empathy.',
      'High intellectual depth appropriate for top humanities/social science programs.',
      'Refined sentence structure and evocative pacing.'
    ]
  }
];
