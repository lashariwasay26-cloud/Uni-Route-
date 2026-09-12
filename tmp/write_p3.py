import os

print("Creating Part 3 generator script...")

p3_code = '''import { WritingExerciseBlock } from './satWritingTypes';

export const EXERCISE_BLOCK_7: WritingExerciseBlock = {
  blockNumber: 7,
  title: 'Block 7 Exercises: High-Difficulty Rhetorical Synthesis',
  description: '13 Elite Questions on audience-tailored synthesis, comparative timelines, mechanism summaries, historical bridges, and system trade-off evaluations.',
  questions: [
    {
      questionNumber: 79,
      id: 'ch7-b7-q1',
      difficulty: 'Elite',
      skillTag: 'Audience-Tailored Synthesis',
      prompt: 'Notes:\n• In 2016, Shenzhen, China, transitioned its municipal bus fleet to 100% electric vehicles (EVs).\n• The fleet includes over 16,000 electric buses.\n• The transition reduced annual municipal carbon dioxide emissions by 1.35 million tons.\n• Urban planners evaluate Shenzhen as a global model for public transit electrification.\n\nThe student wants to present Shenzhen\'s achievement to an audience of urban planning experts. Which choice best accomplishes this goal?',
      options: [
        'By fully electrifying its fleet of 16,000 municipal buses in 2016, Shenzhen eliminated 1.35 million tons of CO2 annually, establishing a global benchmark for transit decarbonization.',
        'Shenzhen is a large city in China that operates more than 16,000 buses across its municipal transit network.',
        'Electric buses use lithium-ion batteries that require regular charging at municipal power stations.',
        'In 2016, public transit systems in several international cities experimented with alternative fuel technologies.'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'To present the achievement to urban planning experts, the synthesis must highlight scale (16,000 buses), timeline (2016), quantified emissions impact (1.35 million tons CO2), and global benchmark status.',
        whyCorrect: 'Choice A synthesizes fleet scale, emissions reduction, and global benchmark status for expert planners.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'By fully electrifying its fleet of 16,000 municipal buses in 2016, Shenzhen eliminated 1.35 million tons of CO2 annually, establishing a global benchmark for transit decarbonization.', whyWrong: 'Correct. Synthesizes scale, impact, and expert benchmark.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Shenzhen is a large city in China...', whyWrong: 'Generic background.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Electric buses use lithium-ion batteries...', whyWrong: 'General battery mechanics.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'In 2016, public transit systems...', whyWrong: 'Vague context.' }
        ]
      }
    },
    {
      questionNumber: 80,
      id: 'ch7-b7-q2',
      difficulty: 'Elite',
      skillTag: 'Comparative Timeline Synthesis',
      prompt: 'Notes:\n• The Mesoamerican Barrier Reef System extends over 1,000 kilometers across Mexico, Belize, Guatemala, and Honduras.\n• Marine biologists began systematic ecological monitoring of the reef in 1998.\n• Australia\'s Great Barrier Reef monitoring program was established earlier, in 1978.\n• Both programs track coral cover and bleaching event recovery rates.\n\nThe student wants to compare the monitoring timelines of the two reef systems for a marine conservation review. Which choice best accomplishes this goal?',
      options: [
        'Australia\'s Great Barrier Reef monitoring program was established in 1978, two decades before systematic monitoring began for the Mesoamerican Reef in 1998.',
        'The Mesoamerican Reef extends over 1,000 kilometers across four countries in Central America.',
        'Coral cover and bleaching recovery rates are monitored by marine biologists using underwater transects.',
        'Great Barrier Reef monitoring began in Australia in 1978 and continues to provide valuable marine data.'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Comparing the monitoring timelines requires explicitly contrasting the Great Barrier Reef start date (1978) with the Mesoamerican Reef start date (1998) to note the two-decade gap.',
        whyCorrect: 'Choice A presents the comparative timeline directly.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Australia\'s Great Barrier Reef monitoring program was established in 1978, two decades before systematic monitoring began for the Mesoamerican Reef in 1998.', whyWrong: 'Correct. Directly compares timelines.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'The Mesoamerican Reef extends over 1,000 kilometers...', whyWrong: 'Geographic description.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Coral cover and bleaching recovery rates...', whyWrong: 'General methodology.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Great Barrier Reef monitoring began in Australia...', whyWrong: 'Single reef detail.' }
        ]
      }
    },
    {
      questionNumber: 81,
      id: 'ch7-b7-q3',
      difficulty: 'Elite',
      skillTag: 'Mechanism Explanation for General Audience',
      prompt: 'Notes:\n• JWST\'s NIRSpec instrument uses a Microshutter Array containing 250,000 individually controlled shutters.\n• Each shutter measures 100 by 200 micrometers (about the width of a human hair).\n• By opening specific shutters while keeping others closed, NIRSpec blocks light from bright stars while capturing spectra from faint background galaxies.\n\nThe student wants to explain how NIRSpec filters starlight to a general audience. Which choice best accomplishes this goal?',
      options: [
        'JWST was launched in December 2021 to replace the Hubble Space Telescope.',
        'NIRSpec utilizes a grid of 250,000 microscopic shutters that open selectively to block blinding starlight while letting faint galaxy light pass through.',
        'Microshutters measure 100 by 200 micrometers and were engineered at NASA\'s Goddard Space Flight Center.',
        'Background galaxies emit faint light across infrared wavelengths on the electromagnetic spectrum.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Explaining starlight filtering to a general audience requires describing the selective opening of microscopic shutters to block bright starlight while capturing faint galaxy light.',
        whyCorrect: 'Choice B explains the filtering mechanism clearly for a general audience.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'JWST was launched in December 2021...', whyWrong: 'Launch history.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'NIRSpec utilizes a grid of 250,000 microscopic shutters that open selectively to block blinding starlight while letting faint galaxy light pass through.', whyWrong: 'Correct. Clear mechanism explanation.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Microshutters measure 100 by 200 micrometers...', whyWrong: 'Dimensions only.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Background galaxies emit faint light...', whyWrong: 'General wavelength detail.' }
        ]
      }
    },
    {
      questionNumber: 82,
      id: 'ch7-b7-q4',
      difficulty: 'Elite',
      skillTag: 'Historical & Modern Bridging',
      prompt: 'Notes:\n• In 1957, oceanographic cartographer Marie Tharp published the first physiographic map of the North Atlantic ocean floor.\n• Her map revealed the Mid-Atlantic Ridge, a continuous underwater mountain range.\n• The discovery provided key empirical evidence supporting the theory of plate tectonics.\n• Modern bathymetric sonar mapping builds directly on Tharp\'s foundational seafloor cartography.\n\nThe student wants to connect Marie Tharp\'s historical map to modern oceanography. Which choice best accomplishes this goal?',
      options: [
        'By revealing the Mid-Atlantic Ridge in 1957, Marie Tharp\'s landmark seafloor map provided vital evidence for plate tectonics and established the foundation for modern bathymetric sonar mapping.',
        'Marie Tharp worked at Columbia University\'s Lamont-Doherty Geological Observatory during the mid-twentieth century.',
        'The Mid-Atlantic Ridge is a rift valley located along a divergent plate boundary in the Atlantic Ocean.',
        'Sonar mapping technology uses sound waves to measure underwater bathymetric depth.'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Connecting historical discovery to modern oceanography requires linking Tharp\'s 1957 Mid-Atlantic Ridge map to its role in supporting plate tectonics and founding modern bathymetric sonar mapping.',
        whyCorrect: 'Choice A bridges the 1957 discovery directly to modern bathymetric mapping.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'By revealing the Mid-Atlantic Ridge in 1957, Marie Tharp\'s landmark seafloor map provided vital evidence for plate tectonics and established the foundation for modern bathymetric sonar mapping.', whyWrong: 'Correct. Bridges historical map to modern sonar mapping.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Marie Tharp worked at Columbia University...', whyWrong: 'Biographical setting.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'The Mid-Atlantic Ridge is a rift valley...', whyWrong: 'Geological definition.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Sonar mapping technology uses sound waves...', whyWrong: 'Technical sonar definition.' }
        ]
      }
    },
    {
      questionNumber: 83,
      id: 'ch7-b7-q5',
      difficulty: 'Elite',
      skillTag: 'Technical Methodological Summary',
      prompt: 'Notes:\n• Stratospheric ozone depletes when exposed to chlorine free radicals.\n• Chlorofluorocarbons (CFCs) release chlorine atoms upon UV photodissociation.\n• A single chlorine radical can destroy over 100,000 stratospheric ozone molecules before purging.\n• The 1987 Montreal Protocol phased out global CFC production.\n\nThe student wants to summarize the chemical reaction mechanism driving ozone depletion for an environmental science textbook. Which choice best accomplishes this goal?',
      options: [
        'Upon UV photodissociation, CFCs release chlorine radicals that act as catalysts, each capable of destroying more than 100,000 stratospheric ozone molecules.',
        'The 1987 Montreal Protocol was a landmark international treaty that phased out chlorofluorocarbon production globally.',
        'Stratospheric ozone absorbs harmful ultraviolet radiation entering Earth\'s upper atmosphere.',
        'Chlorine is a chemical element located in Group 17 on the periodic table.'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Summarizing the chemical reaction mechanism requires detailing UV photodissociation, chlorine radical release, catalytic destruction, and the 100,000 molecule catalytic scale.',
        whyCorrect: 'Choice A accurately details the chemical catalytic mechanism.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Upon UV photodissociation, CFCs release chlorine radicals that act as catalysts, each capable of destroying more than 100,000 stratospheric ozone molecules.', whyWrong: 'Correct. Concise chemical mechanism summary.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'The 1987 Montreal Protocol was a landmark treaty...', whyWrong: 'Policy focus omitting chemical mechanism.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Stratospheric ozone absorbs harmful UV radiation...', whyWrong: 'General ozone benefit.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Chlorine is a chemical element...', whyWrong: 'Basic chemistry definition.' }
        ]
      }
    },
    {
      questionNumber: 84,
      id: 'ch7-b7-q6',
      difficulty: 'Elite',
      skillTag: 'System Advantage Highlight',
      prompt: 'Notes:\n• Concentrated Solar Power (CSP) uses mirrors to focus sunlight and heat thermal fluid.\n• CSP systems store thermal energy in molten salt tanks for up to 15 hours.\n• Photovoltaic (PV) systems generate electricity directly from light but lack built-in thermal storage.\n• CSP provides dispatchable electricity during cloudy periods and night hours.\n\nThe student wants to highlight CSP\'s primary advantage over PV systems for a clean energy policy briefing. Which choice best accomplishes this goal?',
      options: [
        'Unlike photovoltaic panels, Concentrated Solar Power systems store heat in molten salt, allowing them to dispatch electricity continuously at night and during cloudy weather.',
        'Photovoltaic systems utilize semiconductor wafers to convert solar photons directly into electrical current.',
        'Concentrated Solar Power facilities require large land areas in arid desert regions to deploy mirror arrays.',
        'Molten salt is a mixture of sodium nitrate and potassium nitrate used in thermal energy storage.'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Highlighting CSP\'s primary advantage over PV requires contrasting CSP\'s molten salt heat storage and continuous night/cloudy dispatch capability with PV\'s lack of thermal storage.',
        whyCorrect: 'Choice A directly highlights CSP\'s dispatchable thermal storage advantage.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Unlike photovoltaic panels, Concentrated Solar Power systems store heat in molten salt, allowing them to dispatch electricity continuously at night and during cloudy weather.', whyWrong: 'Correct. Directly highlights comparative thermal advantage.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Photovoltaic systems utilize semiconductor wafers...', whyWrong: 'PV operation definition.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Concentrated Solar Power facilities require large land areas...', whyWrong: 'Land area limitation.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Molten salt is a mixture of sodium nitrate...', whyWrong: 'Chemical composition.' }
        ]
      }
    },
    {
      questionNumber: 85,
      id: 'ch7-b7-q7',
      difficulty: 'Elite',
      skillTag: 'Paleoclimatic Methodology Presentation',
      prompt: 'Notes:\n• Deep polar ice cores trap ancient atmospheric gas bubbles as snow compresses into ice.\n• Analysis of trapped air in Antarctic ice cores provides continuous paleoclimate records spanning 800,000 years.\n• Measurement of carbon dioxide in these bubbles confirms current CO2 levels are unprecedented in 800,000 years.\n\nThe student wants to present the methodology of ice core paleoclimatology for a general science lecture. Which choice best accomplishes this goal?',
      options: [
        'By analyzing ancient atmospheric gas bubbles trapped in Antarctic ice cores, paleoclimatologists reconstruct an 800,000-year continuous record of Earth\'s climate and CO2 levels.',
        'Antarctica is Earth\'s southernmost continent, covered by a massive ice sheet averaging 1.9 kilometers in thickness.',
        'Carbon dioxide is a greenhouse gas that absorbs infrared radiation emitted from Earth\'s surface.',
        'In 1998, European drilling teams extracted the EPICA Dome C ice core in East Antarctica.'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Presenting the methodology requires explaining how paleoclimatologists extract trapped air bubbles in Antarctic ice to reconstruct an 800,000-year climate and CO2 record.',
        whyCorrect: 'Choice A presents the methodology and research outcome clearly.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'By analyzing ancient atmospheric gas bubbles trapped in Antarctic ice cores, paleoclimatologists reconstruct an 800,000-year continuous record of Earth\'s climate and CO2 levels.', whyWrong: 'Correct. Clear methodology presentation.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Antarctica is Earth\'s southernmost continent...', whyWrong: 'Geographic geography.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Carbon dioxide is a greenhouse gas...', whyWrong: 'General greenhouse gas definition.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'In 1998, European drilling teams...', whyWrong: 'Specific expedition detail.' }
        ]
      }
    },
    {
      questionNumber: 86,
      id: 'ch7-b7-q8',
      difficulty: 'Elite',
      skillTag: 'Desalination Mechanism Summary',
      prompt: 'Notes:\n• Reverse osmosis (RO) desalination forces seawater through semipermeable polyamide membranes under high pressure.\n• The membrane pores allow water molecules to pass while blocking dissolved salt ions.\n• Modern polyamide RO membranes reject over 99.7% of dissolved sodium chloride.\n\nThe student wants to summarize how RO membranes separate salt from seawater for an engineering journal. Which choice best accomplishes this goal?',
      options: [
        'Under high pressure, semipermeable polyamide membranes allow water molecules to pass through microscopic pores while rejecting over 99.7% of dissolved salt ions.',
        'Reverse osmosis desalination facilities supply potable drinking water to coastal cities in arid regions.',
        'Sodium chloride dissolves in ocean water to form sodium and chloride electrolytes.',
        'Polyamide polymers were developed in the mid-twentieth century for commercial textile manufacturing.'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Summarizing membrane separation mechanism requires explaining high pressure, semipermeable polyamide membrane pores, passing water molecules, and 99.7% salt ion rejection.',
        whyCorrect: 'Choice A summarizes the physical filtration mechanism with quantitative precision.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Under high pressure, semipermeable polyamide membranes allow water molecules to pass through microscopic pores while rejecting over 99.7% of dissolved salt ions.', whyWrong: 'Correct. Precise physical mechanism summary.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Reverse osmosis desalination facilities supply potable water...', whyWrong: 'Civic supply outcome.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Sodium chloride dissolves in ocean water...', whyWrong: 'Basic chemistry.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Polyamide polymers were developed...', whyWrong: 'Industrial history.' }
        ]
      }
    },
    {
      questionNumber: 87,
      id: 'ch7-b7-q9',
      difficulty: 'Elite',
      skillTag: 'Sequential Laboratory Method Summary',
      prompt: 'Notes:\n• Polymerase Chain Reaction (PCR) amplifies specific DNA sequences.\n• Cycle step 1: Denaturation at 95°C breaks hydrogen bonds to separate double-stranded DNA.\n• Cycle step 2: Annealing at 55°C allows synthetic primers to bind to single strands.\n• Cycle step 3: Extension at 72°C enables *Taq* polymerase to synthesize new DNA strands.\n\nThe student wants to summarize the three-step thermal cycle of PCR for a genetics textbook. Which choice best accomplishes this goal?',
      options: [
        'The PCR thermal cycle amplifies DNA through three sequential steps: denaturation to separate strands, annealing to bind primers, and extension for *Taq* polymerase synthesis.',
        'PCR was invented in 1983 by American biochemist Kary Mullis, who received the Nobel Prize in Chemistry in 1993.',
        '*Taq* polymerase is a heat-stable enzyme originally isolated from the thermophilic bacterium *Thermus aquaticus*.',
        'DNA amplification allows forensic scientists to analyze minute biological evidence gathered from crime scenes.'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Summarizing the thermal cycle requires detailing the three sequential steps: denaturation (strand separation), annealing (primer binding), and extension (*Taq* synthesis).',
        whyCorrect: 'Choice A accurately outlines the three sequential thermal steps.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'The PCR thermal cycle amplifies DNA through three sequential steps: denaturation to separate strands, annealing to bind primers, and extension for *Taq* polymerase synthesis.', whyWrong: 'Correct. Clear sequential method summary.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'PCR was invented in 1983 by American biochemist Kary Mullis...', whyWrong: 'Invention biography.' },
          { optionIndex: 2, optionLabel: 'C', optionText: '*Taq* polymerase is a heat-stable enzyme...', whyWrong: 'Single enzyme origin.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'DNA amplification allows forensic scientists...', whyWrong: 'Forensic application.' }
        ]
      }
    },
    {
      questionNumber: 88,
      id: 'ch7-b7-q10',
      difficulty: 'Elite',
      skillTag: 'Mutualistic Partnership Presentation',
      prompt: 'Notes:\n• Mycorrhizal fungi form symbiotic associations with over 80% of terrestrial land plant roots.\n• Fungi absorb soil phosphorus and nitrogen, transferring minerals to the plant host.\n• In exchange, the host plant provides carbon carbohydrates synthesized via photosynthesis.\n\nThe student wants to present the reciprocal exchange mechanism of mycorrhizal mutualism for a botanical review. Which choice best accomplishes this goal?',
      options: [
        'In mycorrhizal mutualism, fungi supply root host plants with soil phosphorus and nitrogen in exchange for photosynthetic carbon carbohydrates.',
        'Mycorrhizal fungi inhabit soil surrounding plant roots in forest ecosystems across the world.',
        'Phosphorus and nitrogen are essential macronutrients required for plant cellular growth.',
        'Photosynthesis converts solar radiation, water, and carbon dioxide into glucose and oxygen.'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Presenting reciprocal exchange requires naming the two exchanged resources: fungal mineral transfer (phosphorus/nitrogen) and plant carbon transfer (carbohydrates).',
        whyCorrect: 'Choice A clearly outlines the two-way resource exchange.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'In mycorrhizal mutualism, fungi supply root host plants with soil phosphorus and nitrogen in exchange for photosynthetic carbon carbohydrates.', whyWrong: 'Correct. Reciprocal exchange focus.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Mycorrhizal fungi inhabit soil surrounding plant roots...', whyWrong: 'General habitat.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Phosphorus and nitrogen are essential macronutrients...', whyWrong: 'Nutrient definition.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Photosynthesis converts solar radiation...', whyWrong: 'General photosynthesis definition.' }
        ]
      }
    },
    {
      questionNumber: 89,
      id: 'ch7-b7-q11',
      difficulty: 'Elite',
      skillTag: 'Astronomical Instrument Utility',
      prompt: 'Notes:\n• Gravitational lensing occurs when a massive foreground galaxy cluster bends light from a background object.\n• The cluster acts as a natural cosmic lens, magnifying light from early universe galaxies.\n• Astronomers use lensed magnification to observe faint galaxies formed 13 billion years ago.\n\nThe student wants to explain how gravitational lensing serves as a research tool for an astronomy article. Which choice best accomplishes this goal?',
      options: [
        'By magnifying light from background objects, massive galaxy clusters act as natural gravitational lenses that allow astronomers to observe faint early galaxies formed 13 billion years ago.',
        'Albert Einstein predicted gravitational lensing in 1936 as a consequence of his theory of general relativity.',
        'Galaxy clusters contain thousands of individual galaxies bound together by dark matter gravity.',
        'Light travels through space at a constant speed of approximately 300,000 kilometers per second.'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Explaining gravitational lensing as a research tool requires describing how galaxy cluster light magnification enables astronomers to observe faint galaxies 13 billion years old.',
        whyCorrect: 'Choice A explains the natural cosmic magnification tool function.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'By magnifying light from background objects, massive galaxy clusters act as natural gravitational lenses that allow astronomers to observe faint early galaxies formed 13 billion years ago.', whyWrong: 'Correct. Utility as research tool.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Albert Einstein predicted gravitational lensing in 1936...', whyWrong: 'Relativity prediction history.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Galaxy clusters contain thousands of individual galaxies...', whyWrong: 'Cluster composition.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Light travels through space at a constant speed...', whyWrong: 'Physics constant.' }
        ]
      }
    },
    {
      questionNumber: 90,
      id: 'ch7-b7-q12',
      difficulty: 'Elite',
      skillTag: 'Geology Chemical Process Explanation',
      prompt: 'Notes:\n• Speleothems (stalactites and stalagmites) form in limestone caves as degassing groundwater precipitates calcium carbonate (calcite).\n• Rainwater absorbs soil CO2, forming weak carbonic acid that dissolves limestone bedrock underground.\n• When groundwater enters aerated cave chambers, CO2 degasses into the air, forcing calcite precipitation.\n\nThe student wants to summarize the chemical reaction driving cave speleothem formation for a geology textbook. Which choice best accomplishes this goal?',
      options: [
        'As carbon-dioxide-rich groundwater enters aerated cave chambers, CO2 degasses into the air, causing dissolved calcium carbonate to precipitate and build speleothems.',
        'Limestone is a sedimentary rock composed primarily of calcite deposited in ancient marine basins.',
        'Stalactites hang down from cave ceilings, whereas stalagmites grow upward from cave floors.',
        'Speleothem growth rates vary depending on local cave humidity and seasonal rainfall.'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Summarizing the chemical reaction requires explaining CO2-rich groundwater entering aerated caves, CO2 degassing, calcite precipitation, and speleothem growth.',
        whyCorrect: 'Choice A presents the complete chemical degassing precipitation mechanism.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'As carbon-dioxide-rich groundwater enters aerated cave chambers, CO2 degasses into the air, causing dissolved calcium carbonate to precipitate and build speleothems.', whyWrong: 'Correct. Precise chemical reaction summary.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Limestone is a sedimentary rock...', whyWrong: 'Rock type definition.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Stalactites hang down from cave ceilings...', whyWrong: 'Visual distinction.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Speleothem growth rates vary...', whyWrong: 'Growth rate variation.' }
        ]
      }
    },
    {
      questionNumber: 91,
      id: 'ch7-b7-q13',
      difficulty: 'Elite',
      skillTag: 'Transatlantic Navigation History',
      prompt: 'Notes:\n• Gerardus Mercator published his revolutionary world map projection in 1569.\n• The Mercator projection represents lines of constant compass bearing (rhumb lines) as straight segments.\n• Sailors could plot straight-line navigation courses without constantly recalculating compass adjustments.\n• The projection distorts geographical landmass area near the poles.\n\nThe student wants to explain the navigational utility of Mercator\'s map for a maritime history lecture. Which choice best accomplishes this goal?',
      options: [
        'By representing lines of constant compass bearing as straight segments, Mercator\'s 1569 projection allowed navigators to plot straight-line ocean courses without recalculating compass headings.',
        'The Mercator projection exaggerates the relative landmass area of Greenland and Antarctica compared to equatorial regions.',
        'Gerardus Mercator was a Flemish cartographer born in 1512 in the county of Flanders.',
        'Compass navigation relies on Earth\'s geomagnetic field, which aligns magnetic needles toward magnetic north.'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Explaining navigational utility requires describing how straight rhumb-line compass bearings allowed sailors to plot ocean courses without constant heading recalculations.',
        whyCorrect: 'Choice A explains the practical navigational benefit directly.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'By representing lines of constant compass bearing as straight segments, Mercator\'s 1569 projection allowed navigators to plot straight-line ocean courses without recalculating compass headings.', whyWrong: 'Correct. Explains navigational utility.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'The Mercator projection exaggerates the relative landmass area...', whyWrong: 'Area distortion limitation.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Gerardus Mercator was a Flemish cartographer...', whyWrong: 'Cartographer biography.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Compass navigation relies on Earth\'s geomagnetic field...', whyWrong: 'Geomagnetic mechanics.' }
        ]
      }
    }
  ]
};

export const EXERCISE_BLOCK_8: WritingExerciseBlock = {
  blockNumber: 8,
  title: 'Block 8 Exercises: Advanced Syntax & Punctuation Traps',
  description: '13 Elite Questions on clause boundaries, semicolon vs colon constraints, parenthetical em dashes, restrictive vs nonrestrictive appositives, and complex list punctuation.',
  questions: [
    {
      questionNumber: 92,
      id: 'ch7-b8-q1',
      difficulty: 'Medium',
      skillTag: 'Clause Boundary with Dependent Opener',
      prompt: 'Although the team calibrated the infrared sensor prior to the satellite launch, **the detector experienced thermal interference in orbit.** Which choice correctly punctuates the boundary between the introductory dependent clause and the main clause?',
      options: [
        'launch, the detector experienced',
        'launch; the detector experienced',
        'launch the detector experienced',
        'launch—the detector experienced'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'An introductory dependent clause starting with a subordinating conjunction ("Although...") must be separated from the main clause by a comma.',
        whyCorrect: 'Choice A places a comma after "launch."',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'launch, the detector experienced', whyWrong: 'Correct. Comma after dependent clause.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'launch; the detector experienced', whyWrong: 'Semicolon cannot follow a dependent clause.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'launch the detector experienced', whyWrong: 'Omits required comma.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'launch—the detector experienced', whyWrong: 'Em dash is improper after simple dependent clause.' }
        ]
      }
    },
    {
      questionNumber: 93,
      id: 'ch7-b8-q2',
      difficulty: 'Medium',
      skillTag: 'Semicolon vs Colon Constraints',
      prompt: 'The expedition gathered core samples from three distinct geothermal locations: **the Taupo Volcanic Zone, the Krafla Caldera, and the Yellowstone Plateau.** Which punctuation mark should precede the introductory list of specific locations?',
      options: [
        'locations:',
        'locations;',
        'locations,',
        'locations—'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'A colon is used after an independent clause to introduce a specific list, explanation, or elaboration.',
        whyCorrect: 'Choice A correctly uses a colon after the independent clause.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'locations:', whyWrong: 'Correct. Colon introducing list.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'locations;', whyWrong: 'Semicolon cannot introduce a list.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'locations,', whyWrong: 'Comma creates improper list boundary.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'locations—', whyWrong: 'Colon is preferred for formal list introduction.' }
        ]
      }
    },
    {
      questionNumber: 94,
      id: 'ch7-b8-q3',
      difficulty: 'Hard',
      skillTag: 'Parenthetical Em Dash Symmetry',
      prompt: 'The deep-sea hydrothermal vent field—**which was discovered in the eastern Pacific Ocean in 1977—transformed** marine biological understanding of chemosynthetic food webs. Which choice maintains proper parenthetical em dash symmetry?',
      options: [
        '1977—transformed',
        '1977, transformed',
        '1977 transformed',
        '1977; transformed'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'When a nonrestrictive parenthetical clause is opened with an em dash ("—which was discovered..."), it must close with an em dash ("1977—transformed").',
        whyCorrect: 'Choice A maintains matching em dash symmetry.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: '1977—transformed', whyWrong: 'Correct. Symmetrical em dash pair.' },
          { optionIndex: 1, optionLabel: 'B', optionText: '1977, transformed', whyWrong: 'Unbalanced em dash and comma.' },
          { optionIndex: 2, optionLabel: 'C', optionText: '1977 transformed', whyWrong: 'Omits closing punctuation.' },
          { optionIndex: 3, optionLabel: 'D', optionText: '1977; transformed', whyWrong: 'Misuses semicolon.' }
        ]
      }
    },
    {
      questionNumber: 95,
      id: 'ch7-b8-q4',
      difficulty: 'Hard',
      skillTag: 'Restrictive vs Nonrestrictive Appositive Punctuation',
      prompt: 'The pioneering astronomer **Vera Rubin** provided essential observational evidence for galaxy rotation curves that confirmed the existence of dark matter. Which punctuation choice correctly reflects that her name is a restrictive appositive essential to identifying the astronomer?',
      options: [
        'astronomer Vera Rubin provided',
        'astronomer, Vera Rubin, provided',
        'astronomer Vera Rubin, provided',
        'astronomer, Vera Rubin provided'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'When a title ("astronomer") is followed by a specific name ("Vera Rubin") necessary to identify which astronomer is meant, the appositive is restrictive and requires NO commas.',
        whyCorrect: 'Choice A uses no commas around restrictive name "Vera Rubin."',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'astronomer Vera Rubin provided', whyWrong: 'Correct. Restrictive appositive without commas.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'astronomer, Vera Rubin, provided', whyWrong: 'Incorrectly treats restrictive name as nonrestrictive.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'astronomer Vera Rubin, provided', whyWrong: 'Single comma after subject.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'astronomer, Vera Rubin provided', whyWrong: 'Single comma before subject.' }
        ]
      }
    },
    {
      questionNumber: 96,
      id: 'ch7-b8-q5',
      difficulty: 'Hard',
      skillTag: 'Complex List Punctuation with Internal Commas',
      prompt: 'The conference delegation included representative researchers from three institutions: **Dr. Aris Thorne, a biochemist from Oxford; Dr. Maya Lin, a geneticist from Stanford; and Dr. Isaac Vance, an oceanographer from Woods Hole.** Which choice correctly separates complex list items containing internal commas?',
      options: [
        'Dr. Aris Thorne, a biochemist from Oxford; Dr. Maya Lin, a geneticist from Stanford; and Dr. Isaac Vance, an oceanographer from Woods Hole.',
        'Dr. Aris Thorne, a biochemist from Oxford, Dr. Maya Lin, a geneticist from Stanford, and Dr. Isaac Vance, an oceanographer from Woods Hole.',
        'Dr. Aris Thorne: a biochemist from Oxford, Dr. Maya Lin: a geneticist from Stanford, and Dr. Isaac Vance: an oceanographer from Woods Hole.',
        'Dr. Aris Thorne a biochemist from Oxford; Dr. Maya Lin a geneticist from Stanford; and Dr. Isaac Vance an oceanographer from Woods Hole.'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'When items in a series contain internal commas (e.g., "Dr. Aris Thorne, a biochemist from Oxford"), semicolons must be used as major list separators to prevent confusion.',
        whyCorrect: 'Choice A uses semicolons to separate complex list items containing internal commas.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: '...from Oxford; Dr. Maya Lin... from Stanford; and...', whyWrong: 'Correct. Semicolons separate complex items.' },
          { optionIndex: 1, optionLabel: 'B', optionText: '...from Oxford, Dr. Maya Lin...', whyWrong: 'Commas create confusion across internal descriptors.' },
          { optionIndex: 2, optionLabel: 'C', optionText: '...Thorne: a biochemist...', whyWrong: 'Misuses colons inside list.' },
          { optionIndex: 3, optionLabel: 'D', optionText: '...Thorne a biochemist...', whyWrong: 'Omits internal descriptive commas.' }
        ]
      }
    },
    {
      questionNumber: 97,
      id: 'ch7-b8-q6',
      difficulty: 'Hard',
      skillTag: 'Introductory Prepositional Stack vs Agreement',
      prompt: 'Near the active volcanic hydrothermal vents located along the Mid-Atlantic Ridge **stands/stand specialized tube worm colonies** that rely on chemosynthetic bacteria. Which choice maintains proper subject-verb agreement?',
      options: [
        'stands specialized tube worm colonies',
        'stand specialized tube worm colonies',
        'is specialized tube worm colonies',
        'has stood specialized tube worm colonies'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The sentence opens with a stacked prepositional phrase ("Near X along Y"). The subject follows the verb ("specialized tube worm colonies"). Plural "colonies" requires plural verb "stand."',
        whyCorrect: 'Choice B pairs plural verb "stand" with plural subject "colonies."',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'stands specialized tube worm colonies', whyWrong: 'Singular verb "stands" with plural subject "colonies."' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'stand specialized tube worm colonies', whyWrong: 'Correct. Plural "stand" matches plural "colonies."' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'is specialized tube worm colonies', whyWrong: 'Singular "is" with plural subject.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'has stood specialized tube worm colonies', whyWrong: 'Singular "has stood" with plural subject.' }
        ]
      }
    },
    {
      questionNumber: 98,
      id: 'ch7-b8-q7',
      difficulty: 'Elite',
      skillTag: 'Inverted Sentence Boundary Traps',
      prompt: 'Hidden within the encrypted historical archives **was/were the missing trade ledgers** from the seventeenth-century Dutch East India Company. Which verb maintains proper number with the inverted subject?',
      options: [
        'was the missing trade ledgers',
        'were the missing trade ledgers',
        'has been the missing trade ledgers',
        'is the missing trade ledgers'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Inverted order: verb precedes subject ("were the missing trade ledgers"). Plural noun "ledgers" requires plural past verb "were."',
        whyCorrect: 'Choice B correctly uses plural "were."',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'was the missing trade ledgers', whyWrong: 'Singular "was" with plural "ledgers."' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'were the missing trade ledgers', whyWrong: 'Correct. Plural "were" matches plural "ledgers."' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'has been the missing trade ledgers', whyWrong: 'Singular "has been" with plural "ledgers."' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'is the missing trade ledgers', whyWrong: 'Singular "is" with plural "ledgers."' }
        ]
      }
    },
    {
      questionNumber: 99,
      id: 'ch7-b8-q8',
      difficulty: 'Elite',
      skillTag: 'Relative Clause Subject-Verb Agreement',
      prompt: 'Dr. Evelyn Reed is **one of those paleoclimatologists who have/has consistently argued** that ice core isotope data reflect regional rather than global atmospheric shifts. Which choice maintains correct subject-verb agreement in the relative clause?',
      options: [
        'one of those paleoclimatologists who have consistently argued',
        'one of those paleoclimatologists who has consistently argued',
        'one of those paleoclimatologists whom has consistently argued',
        'one of those paleoclimatologists which have consistently argued'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'In the construction "one of those [plural noun] who [verb]", the relative pronoun "who" refers back to plural "paleoclimatologists," requiring plural verb "have argued."',
        whyCorrect: 'Choice A uses plural verb "have" matching plural antecedent "paleoclimatologists."',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: '...who have consistently argued', whyWrong: 'Correct. Plural verb matches "paleoclimatologists."' },
          { optionIndex: 1, optionLabel: 'B', optionText: '...who has consistently argued', whyWrong: 'Singular "has" erroneously matches "one" instead of "paleoclimatologists."' },
          { optionIndex: 2, optionLabel: 'C', optionText: '...whom has...', whyWrong: 'Objective pronoun "whom" used as subject.' },
          { optionIndex: 3, optionLabel: 'D', optionText: '...which have...', whyWrong: '"Which" used for human scientists.' }
        ]
      }
    },
    {
      questionNumber: 100,
      id: 'ch7-b8-q9',
      difficulty: 'Elite',
      skillTag: 'Elliptical Comparison Syntax',
      prompt: 'During the laboratory trials, the principal investigator analyzed more spectrographic data than **her research assistant [did].** Which choice maintains correct pronoun case in the elliptical comparison?',
      options: [
        'than her research assistant.',
        'than her research assistant did.',
        'than she.',
        'than her.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Elliptical comparison: "analyzed more data than [her research assistant analyzed/did]." Adding the auxiliary verb "did" eliminates pronoun case ambiguity.',
        whyCorrect: 'Choice B resolves elliptical comparison cleanly.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'than her research assistant.', whyWrong: 'Acceptable but choice B clarifies subject verb link.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'than her research assistant did.', whyWrong: 'Correct. Explicit elliptical verb.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'than she.', whyWrong: 'Ambiguous comparison.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'than her.', whyWrong: 'Objective pronoun case mismatch.' }
        ]
      }
    },
    {
      questionNumber: 101,
      id: 'ch7-b8-q10',
      difficulty: 'Elite',
      skillTag: 'Pronoun-Antecedent Ambiguity in Compound Clauses',
      prompt: 'When Dr. Smith conferred with Dr. Jones about the anomalous seismic readings, **he suggested re-calibrating the geophone array.** Which revision eliminates the ambiguous pronoun reference *he*?',
      options: [
        'he suggested re-calibrating the geophone array.',
        'Dr. Smith suggested re-calibrating the geophone array.',
        'it was suggested that the geophone array be re-calibrated.',
        'they suggested re-calibrating the geophone array.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Because two male scientists are named ("Dr. Smith", "Dr. Jones"), the pronoun "he" is ambiguous. Replacing "he" with the specific name "Dr. Smith" eliminates ambiguity.',
        whyCorrect: 'Choice B eliminates pronoun ambiguity by specifying "Dr. Smith."',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'he suggested...', whyWrong: 'Ambiguous pronoun "he."' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Dr. Smith suggested re-calibrating the geophone array.', whyWrong: 'Correct. Specifies antecedent.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'it was suggested...', whyWrong: 'Passive voice with vague "it."' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'they suggested...', whyWrong: 'Plural pronoun if only one suggested.' }
        ]
      }
    },
    {
      questionNumber: 102,
      id: 'ch7-b8-q11',
      difficulty: 'Elite',
      skillTag: 'Objective Pronoun Case in Relative Clauses',
      prompt: 'The senior astrophysicist **whom/who the university board appointed to lead the observatory** delivered a keynote lecture on gravitational wave detection. Which choice uses the correct relative pronoun case?',
      options: [
        'whom the university board appointed to lead the observatory',
        'who the university board appointed to lead the observatory',
        'which the university board appointed to lead the observatory',
        'whose the university board appointed to lead the observatory'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The relative pronoun functions as the direct object of the verb "appointed" ("the board appointed whom"). Objective case "whom" is required.',
        whyCorrect: 'Choice A uses objective relative pronoun "whom."',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'whom the university board appointed to lead the observatory', whyWrong: 'Correct. Objective case "whom" for direct object.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'who the university board appointed...', whyWrong: 'Uses subjective "who" as object.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'which the university board appointed...', whyWrong: 'Uses "which" for human astrophysicist.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'whose the university board appointed...', whyWrong: 'Possessive "whose" misapplied.' }
        ]
      }
    },
    {
      questionNumber: 103,
      id: 'ch7-b8-q12',
      difficulty: 'Elite',
      skillTag: 'Subjunctive Mood after Demand Clauses',
      prompt: 'Biosafety guidelines stipulate that the cleanroom facility **maintain/maintains positive air pressure** at all times to prevent contaminant influx. Which choice utilizes correct subjunctive mood syntax?',
      options: [
        'maintain positive air pressure at all times',
        'maintains positive air pressure at all times',
        'is maintaining positive air pressure at all times',
        'has maintained positive air pressure at all times'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Verbs of demand or stipulation ("stipulate that...") mandate the subjunctive mood, using the base form "maintain" regardless of singular subject "facility."',
        whyCorrect: 'Choice A uses subjunctive base form "maintain."',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'maintain positive air pressure at all times', whyWrong: 'Correct. Subjunctive base verb.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'maintains positive air pressure...', whyWrong: 'Indicative "maintains" instead of subjunctive.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'is maintaining...', whyWrong: 'Progressive indicative.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'has maintained...', whyWrong: 'Perfect indicative.' }
        ]
      }
    },
    {
      questionNumber: 104,
      id: 'ch7-b8-q13',
      difficulty: 'Elite',
      skillTag: 'Compound Predicate Boundary',
      prompt: 'The research assistant logged the daily temperature readings **and submitted the compiled spreadsheet to the lab director.** Which punctuation choice correctly avoids placing an unnecessary comma before the single conjunction in a compound predicate?',
      options: [
        'readings and submitted the compiled spreadsheet',
        'readings, and submitted the compiled spreadsheet',
        'readings; and submitted the compiled spreadsheet',
        'readings—and submitted the compiled spreadsheet'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'A single subject ("The research assistant") followed by a compound predicate ("logged... and submitted...") does NOT take a comma before "and."',
        whyCorrect: 'Choice A omits the comma before "and" in a simple compound predicate.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'readings and submitted the compiled spreadsheet', whyWrong: 'Correct. No comma before compound predicate.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'readings, and submitted the compiled spreadsheet', whyWrong: 'Erroneous comma splice in compound predicate.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'readings; and submitted...', whyWrong: 'Semicolon before "and" without independent clause.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'readings—and submitted...', whyWrong: 'Unnecessary em dash.' }
        ]
      }
    }
  ]
};

export const EXERCISE_BLOCK_9: WritingExerciseBlock = {
  blockNumber: 9,
  title: 'Block 9 Exercises: Scope, Certainty & Evidence Boundaries',
  description: '13 Elite Questions on environmental scope preservation, modal certainty ladders, correlation vs causation filters, single-species extrapolation guards, and sample size boundaries.',
  questions: [
    {
      questionNumber: 105,
      id: 'ch7-b9-q1',
      difficulty: 'Medium',
      skillTag: 'Scope Preservation in Environmental Data',
      prompt: 'A three-month ecological survey recorded elevated macroinvertebrate diversity in a **400-meter stretch of Mill Creek.** Which summary statement preserves the geographical scope of this evidence?',
      options: [
        'Macroinvertebrate diversity is high across all freshwater river systems in North America.',
        'A 400-meter stretch of Mill Creek exhibited elevated macroinvertebrate diversity during a three-month survey.',
        'Mill Creek contains the highest biodiversity of any stream in the world.',
        'Macroinvertebrates have permanently recovered in all regional urban watersheds.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Scope preservation requires restricting claims to the surveyed 400-meter stretch of Mill Creek over the three-month duration.',
        whyCorrect: 'Choice B maintains exact geographical and temporal boundaries.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: '...across all freshwater river systems in North America.', whyWrong: 'Extrapolates 400m stream to continent.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'A 400-meter stretch of Mill Creek exhibited elevated macroinvertebrate diversity during a three-month survey.', whyWrong: 'Correct. Preserves exact geographic scope.' },
          { optionIndex: 2, optionLabel: 'C', optionText: '...highest biodiversity of any stream in the world.', whyWrong: 'Unsupported global claim.' },
          { optionIndex: 3, optionLabel: 'D', optionText: '...permanently recovered in all regional urban watersheds.', whyWrong: 'Unsupported regional claims.' }
        ]
      }
    },
    {
      questionNumber: 106,
      id: 'ch7-b9-q2',
      difficulty: 'Medium',
      skillTag: 'Certainty Ladder Calibration',
      prompt: 'A trial notes that **a newly synthesized polymer may increase solar cell light absorption by 12 percent.** Which summary choice alters the certainty level on the modal ladder?',
      options: [
        'The polymer may increase solar cell light absorption.',
        'The polymer could potentially increase solar cell light absorption.',
        'The polymer will definitely increase solar cell light absorption.',
        'The polymer might increase solar cell light absorption.'
      ],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'The original uses tentative modal "may." "Will definitely" upgrades tentative possibility to 100% future certainty, breaking the modal ladder.',
        whyCorrect: 'Choice C alters the certainty level.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'The polymer may increase...', whyWrong: 'Preserves tentative modal.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'The polymer could potentially increase...', whyWrong: 'Preserves tentative modal.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'The polymer will definitely increase solar cell light absorption.', whyWrong: 'Correct to identify. Alters certainty level.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'The polymer might increase...', whyWrong: 'Preserves tentative modal.' }
        ]
      }
    },
    {
      questionNumber: 107,
      id: 'ch7-b9-q3',
      difficulty: 'Hard',
      skillTag: 'Correlation vs Causation Evidence Filter',
      prompt: 'A study observed a positive statistical correlation between urban park acreage and self-reported resident happiness scores, but researchers did not control for resident income or age. Which statement accurately reports the finding?',
      options: [
        'Urban park acreage directly causes resident happiness.',
        'Urban park acreage was correlated with self-reported resident happiness scores in the study population.',
        'Urban parks guarantee higher income and happiness for all city residents.',
        'Urban park acreage has no relationship with resident happiness.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Because confounding income and age were not controlled, the finding must be stated as a correlation rather than a direct causal claim.',
        whyCorrect: 'Choice B accurately reports correlation without asserting causation.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Urban park acreage directly causes resident happiness.', whyWrong: 'Asserts causation.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Urban park acreage was correlated with self-reported resident happiness scores in the study population.', whyWrong: 'Correct. Reports correlation accurately.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Urban parks guarantee higher income...', whyWrong: 'Unsupported guarantee.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Urban park acreage has no relationship...', whyWrong: 'Contradicts positive correlation.' }
        ]
      }
    },
    {
      questionNumber: 108,
      id: 'ch7-b9-q4',
      difficulty: 'Hard',
      skillTag: 'Single-Species Study Extrapolation Guard',
      prompt: 'Laboratory experiments showed that **the model plant *Arabidopsis thaliana* exhibited increased drought tolerance under elevated atmospheric carbon dioxide.** Which choice avoids unauthorized extrapolation?',
      options: [
        'All global plant species will become completely immune to drought as CO2 levels rise.',
        'Under elevated CO2, *Arabidopsis thaliana* exhibited increased drought tolerance in laboratory conditions.',
        'Elevated CO2 eliminates agricultural crop failure worldwide.',
        '*Arabidopsis thaliana* is the only plant capable of surviving drought.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Findings from *Arabidopsis thaliana* in a lab cannot be extrapolated to all global plant species or worldwide agriculture. The summary must stay bounded to *Arabidopsis thaliana* in lab conditions.',
        whyCorrect: 'Choice B respects single-species and laboratory boundaries.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'All global plant species will become completely immune...', whyWrong: 'Universal extrapolation.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Under elevated CO2, *Arabidopsis thaliana* exhibited increased drought tolerance in laboratory conditions.', whyWrong: 'Correct. Bounded to single species and lab.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Elevated CO2 eliminates agricultural crop failure worldwide.', whyWrong: 'Worldwide crop extrapolation.' },
          { optionIndex: 3, optionLabel: 'D', optionText: '*Arabidopsis thaliana* is the only plant...', whyWrong: 'Unsupported exclusive claim.' }
        ]
      }
    },
    {
      questionNumber: 109,
      id: 'ch7-b9-q5',
      difficulty: 'Hard',
      skillTag: 'Uncontrolled Confounding Variable Isolation',
      prompt: 'In a field trial, shaded forest plots exhibited higher soil moisture and faster fungal decomposition than unshaded plots. However, shaded plots also received 20% more rainfall due to canopy interception patterns. Which conclusion accurately reflects this limitation?',
      options: [
        'Shade directly causes faster fungal decomposition in all forests.',
        'Fungal decomposition was faster in shaded plots, though higher rainfall in those plots prevents isolating shade as the sole driver.',
        'Rainfall has no effect on fungal decomposition rates.',
        'Shade eliminates the need for rainfall in forest ecosystems.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Because shaded plots also received more rainfall, rainfall is a confounding variable that prevents isolating shade as the sole causal driver of decomposition.',
        whyCorrect: 'Choice B states the observed decomposition alongside the rainfall confounder limitation.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Shade directly causes faster fungal decomposition...', whyWrong: 'Asserts sole causation ignoring rainfall.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Fungal decomposition was faster in shaded plots, though higher rainfall in those plots prevents isolating shade as the sole driver.', whyWrong: 'Correct. Acknowledges confounding variable limitation.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Rainfall has no effect...', whyWrong: 'Dismisses confounder.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Shade eliminates the need for rainfall...', whyWrong: 'Absurd claim.' }
        ]
      }
    },
    {
      questionNumber: 110,
      id: 'ch7-b9-q6',
      difficulty: 'Hard',
      skillTag: 'Quantitative Precision Maintenance',
      prompt: 'A materials testing report states that **a new ceramic coating reduced thermal expansion by 22 percent during high-temperature testing.** Which choice maintains exact quantitative precision?',
      options: [
        'The ceramic coating completely eliminated thermal expansion.',
        'The ceramic coating reduced thermal expansion by 22 percent during high-temperature testing.',
        'The ceramic coating made thermal expansion slightly better.',
        'The ceramic coating reduced thermal expansion by more than 50 percent.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Quantitative precision requires stating the exact "22 percent" reduction rather than vague qualifiers ("slightly better") or exaggerated numbers ("eliminated", "more than 50%").',
        whyCorrect: 'Choice B preserves exact quantitative precision.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: '...completely eliminated thermal expansion.', whyWrong: 'Exaggerates 22% reduction into total elimination.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'The ceramic coating reduced thermal expansion by 22 percent during high-temperature testing.', whyWrong: 'Correct. Preserves exact quantitative figure.' },
          { optionIndex: 2, optionLabel: 'C', optionText: '...made thermal expansion slightly better.', whyWrong: 'Vague qualifier.' },
          { optionIndex: 3, optionLabel: 'D', optionText: '...reduced thermal expansion by more than 50 percent.', whyWrong: 'Distorts 22% to >50%.' }
        ]
      }
    },
    {
      questionNumber: 111,
      id: 'ch7-b9-q7',
      difficulty: 'Hard',
      skillTag: 'Chronology & Sequence Integrity',
      prompt: 'In a medical trial, researchers measured baseline cholesterol before administering the compound and observed a 14% drop after six weeks. Which choice respects chronological sequence integrity?',
      options: [
        'Cholesterol dropped by 14% before the compound was administered.',
        'Six weeks after compound administration, participants exhibited a 14% drop from baseline cholesterol levels.',
        'Administering the compound guaranteed permanent zero cholesterol.',
        'Participants had low cholesterol before entering the trial.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Chronology: Baseline measured first → compound administered → 14% drop observed six weeks later.',
        whyCorrect: 'Choice B accurately preserves chronological sequence.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: '...dropped before the compound was administered.', whyWrong: 'Inverts timeline.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Six weeks after compound administration, participants exhibited a 14% drop from baseline cholesterol levels.', whyWrong: 'Correct. Preserves timeline.' },
          { optionIndex: 2, optionLabel: 'C', optionText: '...guaranteed permanent zero cholesterol.', whyWrong: 'Unsupported guarantee.' },
          { optionIndex: 3, optionLabel: 'D', optionText: '...low cholesterol before entering...', whyWrong: 'Distorts baseline.' }
        ]
      }
    },
    {
      questionNumber: 112,
      id: 'ch7-b9-q8',
      difficulty: 'Elite',
      skillTag: 'Multi-Study Contradiction Synthesis',
      prompt: 'Notes:\n• Study A (2018): 200 participants, found statistically significant cognitive improvement from acoustic resonance therapy.\n• Study B (2020): 500 participants, found no statistically significant cognitive improvement.\n• Study C (2022): 300 participants, found improvement only in adults over age 65.\n\nWhich choice best synthesizes these three conflicting outcomes?',
      options: [
        'Acoustic resonance therapy conclusively proves cognitive improvement across all age groups.',
        'Acoustic resonance therapy has been disproved and should be abandoned.',
        'Evidence regarding acoustic resonance therapy is mixed: while an early study found general improvement, a larger study found no effect, and a subsequent trial observed benefits only in older adults.',
        'Study B is the only valid study because it had 500 participants.'
      ],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'A complete synthesis of conflicting studies must report: 1) early positive finding (Study A), 2) larger null finding (Study B), and 3) age-specific conditional finding (Study C).',
        whyCorrect: 'Choice C synthesizes all three studies accurately.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: '...conclusively proves... across all age groups.', whyWrong: 'Ignores Study B and C limitations.' },
          { optionIndex: 1, optionLabel: 'B', optionText: '...has been disproved and should be abandoned.', whyWrong: 'Dismisses positive findings.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Evidence regarding acoustic resonance therapy is mixed: while an early study found general improvement, a larger study found no effect, and a subsequent trial observed benefits only in older adults.', whyWrong: 'Correct. Comprehensive 3-study synthesis.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Study B is the only valid study...', whyWrong: 'Arbitrarily dismisses two studies.' }
        ]
      }
    },
    {
      questionNumber: 113,
      id: 'ch7-b9-q9',
      difficulty: 'Elite',
      skillTag: 'Sample Size Boundary Control',
      prompt: 'A pilot study involving **twelve elite marathon runners** observed a 3% increase in VO2 max after four weeks of hypoxic tent training. Which choice maintains sample size boundary discipline?',
      options: [
        'Hypoxic tent training increases VO2 max for all human athletes.',
        'In a pilot study of twelve marathon runners, hypoxic tent training was associated with a 3% increase in VO2 max, though larger trials are needed to evaluate broader applicability.',
        'Hypoxic tent training guarantees Olympic victory for any runner.',
        'Twelve runners proved that hypoxic tents cure athletic fatigue.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'A pilot study of twelve elite runners cannot support claims for "all human athletes." Cautious wording ("pilot study of twelve", "larger trials needed") respects sample size limits.',
        whyCorrect: 'Choice B respects pilot study and sample size boundaries.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: '...for all human athletes.', whyWrong: 'Universal extrapolation from 12 runners.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'In a pilot study of twelve marathon runners, hypoxic tent training was associated with a 3% increase in VO2 max, though larger trials are needed to evaluate broader applicability.', whyWrong: 'Correct. Preserves sample boundary.' },
          { optionIndex: 2, optionLabel: 'C', optionText: '...guarantees Olympic victory...', whyWrong: 'Absurd claim.' },
          { optionIndex: 3, optionLabel: 'D', optionText: '...proved that hypoxic tents cure athletic fatigue.', whyWrong: 'Overclaims fatigue cure.' }
        ]
      }
    },
    {
      questionNumber: 114,
      id: 'ch7-b9-q10',
      difficulty: 'Elite',
      skillTag: 'Historical Evidence Scope',
      prompt: 'An archivist analyzed **three surviving tax ledgers from fourteenth-century Florence** showing grain imports during 1347. Which statement respects the evidentiary limit of these documents?',
      options: [
        'Fourteenth-century Florence suffered total economic collapse in 1347.',
        'Surviving tax ledgers from 1347 document specific grain import volumes into Florence during that year.',
        'Grain was the only commodity consumed in medieval Europe.',
        'Tax ledgers prove that all Florentine citizens were wealthy.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Three tax ledgers from 1347 document specific grain import volumes in Florence for that year. Claims of "total economic collapse" or "only commodity consumed" exceed archival evidence.',
        whyCorrect: 'Choice B respects archival limits.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: '...suffered total economic collapse...', whyWrong: 'Extrapolates grain tax ledgers to total collapse.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Surviving tax ledgers from 1347 document specific grain import volumes into Florence during that year.', whyWrong: 'Correct. Preserves archival evidence limit.' },
          { optionIndex: 2, optionLabel: 'C', optionText: '...only commodity consumed in medieval Europe.', whyWrong: 'Absurd universal claim.' },
          { optionIndex: 3, optionLabel: 'D', optionText: '...all Florentine citizens were wealthy.', whyWrong: 'Unsupported wealth claim.' }
        ]
      }
    },
    {
      questionNumber: 115,
      id: 'ch7-b9-q11',
      difficulty: 'Elite',
      skillTag: 'Modal Verb Precision',
      prompt: 'Which choice correctly distinguishes between **obligation** ("must"), **possibility** ("could"), and **certainty** ("will") in a lab safety manual?',
      options: [
        'Personnel could wear safety goggles, which must reduce eye injury risks that will occur.',
        'Personnel must wear safety goggles; doing so reduces eye injury risks that could otherwise occur.',
        'Personnel will wear safety goggles if they must feel like it.',
        'Personnel must wear safety goggles because eye injury could never happen.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Lab safety rules demand obligation ("must wear"), and unexpected risks are possibilities ("could otherwise occur").',
        whyCorrect: 'Choice B correctly uses "must" for obligation and "could" for potential risks.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Personnel could wear safety goggles...', whyWrong: 'Reduces mandatory rule to optional "could."' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Personnel must wear safety goggles; doing so reduces eye injury risks that could otherwise occur.', whyWrong: 'Correct. Precise modal distinction.' },
          { optionIndex: 2, optionLabel: 'C', optionText: '...if they must feel like it.', whyWrong: 'Distorts safety mandate.' },
          { optionIndex: 3, optionLabel: 'D', optionText: '...because eye injury could never happen.', whyWrong: 'Contradicts safety rationale.' }
        ]
      }
    },
    {
      questionNumber: 116,
      id: 'ch7-b9-q12',
      difficulty: 'Elite',
      skillTag: 'Geographical Scope Control',
      prompt: 'A study recorded **a population decline in Española giant tortoises (*Chelonoidis hoodensis*) on Española Island.** Which summary respects geographical and taxonomic boundaries?',
      options: [
        'All giant tortoise species across the entire Galápagos archipelago are extinct.',
        'A population decline was recorded specifically among Española giant tortoises on Española Island.',
        'Tortoises have disappeared from every island in the Pacific Ocean.',
        'Española Island is the only place where reptiles can survive.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The study observed decline in one specific species (*Chelonoidis hoodensis*) on one specific island (Española). Extrapolating to "all Galápagos tortoises" or "every island in the Pacific" is unauthorized.',
        whyCorrect: 'Choice B respects exact species and island boundaries.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'All giant tortoise species... are extinct.', whyWrong: 'Extrapolates one island decline to archipelago extinction.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'A population decline was recorded specifically among Española giant tortoises on Española Island.', whyWrong: 'Correct. Preserves exact geographic and species scope.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Tortoises have disappeared from every island...', whyWrong: 'Pacific-wide extrapolation.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Española Island is the only place...', whyWrong: 'Absurd exclusive claim.' }
        ]
      }
    },
    {
      questionNumber: 117,
      id: 'ch7-b9-q13',
      difficulty: 'Elite',
      skillTag: 'Methodological Limitation Retention',
      prompt: 'A newly designed enzyme degraded microplastics under **controlled 37°C laboratory conditions with constant agitation.** Which choice respects methodological boundaries when describing potential real-world applications?',
      options: [
        'The enzyme will instantly clean all microplastics from global oceans.',
        'While the enzyme degraded microplastics in 37°C laboratory settings, its performance in variable natural ocean temperatures requires further testing.',
        'The enzyme is guaranteed to work in frozen Arctic waters.',
        'Laboratory tests proved that ocean microplastic pollution has been solved.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Lab results under controlled 37°C conditions with constant agitation cannot guarantee performance in variable ocean temperatures. Cautious retention of this limitation is required.',
        whyCorrect: 'Choice B retains the controlled lab condition limitation.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: '...instantly clean all microplastics from global oceans.', whyWrong: 'Global real-world extrapolation.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'While the enzyme degraded microplastics in 37°C laboratory settings, its performance in variable natural ocean temperatures requires further testing.', whyWrong: 'Correct. Retains methodological limitation.' },
          { optionIndex: 2, optionLabel: 'C', optionText: '...guaranteed to work in frozen Arctic waters.', whyWrong: 'Contradicts 37°C lab condition.' },
          { optionIndex: 3, optionLabel: 'D', optionText: '...proved that ocean microplastic pollution has been solved.', whyWrong: 'Overclaims problem solution.' }
        ]
      }
    }
  ]
};

export const EXERCISE_BLOCK_10: WritingExerciseBlock = {
  blockNumber: 10,
  title: 'Block 10 Exercises: Capstone Synthesis & Full Integration Diagnostic',
  description: '13 Elite Capstone Questions testing multi-constraint decision making, rhetorical goals, material science, indigenous language initiatives, art history, medical engineering, blue carbon habitats, geoengineering, and multi-variable economic trends.',
  questions: [
    {
      questionNumber: 118,
      id: 'ch7-b10-q1',
      difficulty: 'Elite',
      skillTag: 'Multi-Constraint Decision',
      prompt: 'Which choice corrects the clause boundary error, fixes the modifier placement, and preserves the tentative modal tone in the sentence:\n> **"Analyzing the spectrographic data carefully, the distant exoplanet was found by astronomers to potentially possess atmospheric water vapor."**',
      options: [
        'Analyzing the spectrographic data carefully, the distant exoplanet was found by astronomers to potentially possess atmospheric water vapor.',
        'After analyzing the spectrographic data carefully, astronomers found that the distant exoplanet may possess atmospheric water vapor.',
        'Astronomers analyzed spectrographic data carefully, the distant exoplanet definitively possesses atmospheric water vapor.',
        'Analyzing spectrographic data carefully, atmospheric water vapor was found on the distant exoplanet.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Fixes dangling modifier ("astronomers" must follow analysis), fixes clause boundary with subordinating conjunction "After", and preserves tentative modal tone ("may possess").',
        whyCorrect: 'Choice B satisfies all three constraints simultaneously.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: '...the distant exoplanet was found by astronomers...', whyWrong: 'Dangling modifier; exoplanet cannot analyze data.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'After analyzing the spectrographic data carefully, astronomers found that the distant exoplanet may possess atmospheric water vapor.', whyWrong: 'Correct. Satisfies modifier, clause, and modal constraints.' },
          { optionIndex: 2, optionLabel: 'C', optionText: '...the distant exoplanet definitively possesses...', whyWrong: 'Comma splice and overclaims certainty ("definitely").' },
          { optionIndex: 3, optionLabel: 'D', optionText: '...atmospheric water vapor was found...', whyWrong: 'Dangling modifier; water vapor cannot analyze data.' }
        ]
      }
    },
    {
      questionNumber: 119,
      id: 'ch7-b10-q2',
      difficulty: 'Elite',
      skillTag: 'Rhetorical Goal + Grammar Alignment',
      prompt: 'A student wants to introduce Thomas Paine\'s 1776 pamphlet *Common Sense* while emphasizing its massive popular impact in Revolutionary America. Which choice aligns the rhetorical goal with flawless grammar?',
      options: [
        'Published anonymously in January 1776, Thomas Paine\'s *Common Sense* sold over 150,000 copies in its first year, galvanizing public support for American independence.',
        'Published anonymously in January 1776, American colonists bought Thomas Paine\'s *Common Sense* in huge numbers.',
        'Thomas Paine wrote *Common Sense* in 1776, it was a very popular book among colonists.',
        'Selling over 150,000 copies in 1776, American independence was supported by Thomas Paine\'s pamphlet *Common Sense*.'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Anchors introductory modifier ("Published anonymously...") to "Thomas Paine\'s *Common Sense*", includes quantified sales figure (150,000 copies), and avoids comma splices or dangling modifiers.',
        whyCorrect: 'Choice A satisfies rhetorical impact goal and grammatical precision.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Published anonymously in January 1776, Thomas Paine\'s *Common Sense* sold over 150,000 copies in its first year, galvanizing public support for American independence.', whyWrong: 'Correct. Perfectly aligns impact goal and syntax.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Published anonymously in January 1776, American colonists...', whyWrong: 'Dangling modifier; colonists were not published anonymously.' },
          { optionIndex: 2, optionLabel: 'C', optionText: '...wrote Common Sense in 1776, it was...', whyWrong: 'Comma splice.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Selling over 150,000 copies..., American independence was...', whyWrong: 'Dangling modifier; independence did not sell copies.' }
        ]
      }
    },
    {
      questionNumber: 120,
      id: 'ch7-b10-q3',
      difficulty: 'Elite',
      skillTag: 'Comprehensive Material Science Synthesis',
      prompt: 'Notes:\n• Silica aerogel is a synthetic ultralight material composed of 99.8% air.\n• It exhibits an exceptionally low thermal conductivity of 0.013 W/(m·K).\n• NASA utilized silica aerogel insulation on the Mars *Perseverance* rover to protect electronics from Martian night temperatures (-100°C).\n• The material is fragile and requires protective structural encasement.\n\nThe student wants to summarize silica aerogel\'s space application while acknowledging its physical vulnerability for a materials engineering review. Which choice best accomplishes this goal?',
      options: [
        'Due to its exceptionally low thermal conductivity, silica aerogel was deployed on NASA\'s *Perseverance* rover to insulate electronics against -100°C Martian nights, though its structural fragility necessitates protective encasement.',
        'Silica aerogel is an ultralight material made of 99.8% air developed by NASA scientists for space exploration.',
        'Martian night temperatures drop to -100°C, causing electronic components on the *Perseverance* rover to freeze without insulation.',
        'Silica aerogel is fragile and breaks easily if handled without protective engineering equipment.'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Synthesizes thermal conductivity property, Mars *Perseverance* rover application (-100°C insulation), and the structural fragility/encasement caveat.',
        whyCorrect: 'Choice A integrates property, space application, and vulnerability caveat.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Due to its exceptionally low thermal conductivity, silica aerogel was deployed on NASA\'s *Perseverance* rover to insulate electronics against -100°C Martian nights, though its structural fragility necessitates protective encasement.', whyWrong: 'Correct. Complete, balanced synthesis.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Silica aerogel is an ultralight material...', whyWrong: 'General definition omitting Mars application.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Martian night temperatures drop to -100°C...', whyWrong: 'Temperature background only.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Silica aerogel is fragile...', whyWrong: 'Fragility note only.' }
        ]
      }
    },
    {
      questionNumber: 121,
      id: 'ch7-b10-q4',
      difficulty: 'Elite',
      skillTag: 'Community Initiative Synthesis',
      prompt: 'Notes:\n• The Ainu language is an indigenous language isolated to northern Japan (Hokkaido).\n• In 2009, UNESCO classified Ainu as critically endangered, with fewer than 10 native speakers.\n• Community-led language immersion schools and digital archives established since 2012 have trained over 300 fluent L2 speakers.\n\nThe student wants to highlight the success of community revitalization efforts for a sociolinguistics journal. Which choice best accomplishes this goal?',
      options: [
        'Although UNESCO classified Ainu as critically endangered in 2009, community-led immersion schools and digital archives established since 2012 have successfully trained over 300 fluent speakers.',
        'Ainu is an indigenous language spoken on the northern island of Hokkaido in Japan.',
        'UNESCO classifies critically endangered languages using a multi-tier linguistic assessment framework.',
        'In 2009, fewer than 10 native speakers of the Ainu language remained in Hokkaido.'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Highlights community revitalization success by contrasting the 2009 endangered classification (<10 native speakers) with post-2012 immersion school results (>300 fluent speakers).',
        whyCorrect: 'Choice A synthesizes endangered baseline with quantified revitalization success.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Although UNESCO classified Ainu as critically endangered in 2009, community-led immersion schools and digital archives established since 2012 have successfully trained over 300 fluent speakers.', whyWrong: 'Correct. Directly highlights revitalization success.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Ainu is an indigenous language...', whyWrong: 'Basic geography.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'UNESCO classifies critically endangered languages...', whyWrong: 'UNESCO methodology.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'In 2009, fewer than 10 native speakers...', whyWrong: 'Baseline deficit only.' }
        ]
      }
    },
    {
      questionNumber: 122,
      id: 'ch7-b10-q5',
      difficulty: 'Elite',
      skillTag: 'Historical Art Movement Impact',
      prompt: 'Notes:\n• The 1913 Armory Show in New York City introduced European avant-garde art (Cubism, Fauvism) to the American public.\n• Marcel Duchamp\'s *Nude Descending a Staircase, No. 2* provoked widespread controversy and media debate.\n• The exhibition exposed American artists to modernist abstraction, shifting American art away from realistic Ashcan School realism.\n\nThe student wants to present the transformative impact of the 1913 Armory Show on American art for an art history catalog. Which choice best accomplishes this goal?',
      options: [
        'By introducing European avant-garde works like Duchamp\'s controversial *Nude Descending a Staircase*, the 1913 Armory Show catalyzed a major shift in American art from realism toward modernist abstraction.',
        'The 1913 Armory Show was held at the 69th Regiment Armory in New York City in February 1913.',
        'Ashcan School painters focused on depicting gritty, realistic scenes of urban working-class life in New York.',
        'Marcel Duchamp was a French-American artist associated with Cubism and Dadaism.'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Presents transformative impact by linking European avant-garde exposure (Duchamp) to the fundamental shift in American art from realism to modernist abstraction.',
        whyCorrect: 'Choice A highlights the exhibition\'s transformative impact on American art.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'By introducing European avant-garde works like Duchamp\'s controversial *Nude Descending a Staircase*, the 1913 Armory Show catalyzed a major shift in American art from realism toward modernist abstraction.', whyWrong: 'Correct. Highlights transformative artistic impact.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'The 1913 Armory Show was held at the 69th Regiment Armory...', whyWrong: 'Venue logistics.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Ashcan School painters focused on depicting...', whyWrong: 'Ashcan School definition.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Marcel Duchamp was a French-American artist...', whyWrong: 'Artist biography.' }
        ]
      }
    },
    {
      questionNumber: 123,
      id: 'ch7-b10-q6',
      difficulty: 'Elite',
      skillTag: 'Medical Engineering Improvement',
      prompt: 'Notes:\n• Leadless pacemakers are miniaturized cardiac devices implanted directly into the right ventricle via catheter.\n• Traditional pacemakers require transvenous leads and a subcutaneous pocket, which carry a 4-6% risk of lead infection or dislodgement.\n• Clinical trials show leadless pacemakers reduce total perioperative complications by 38% compared to traditional leaded systems.\n\nThe student wants to highlight the safety advantage of leadless pacemakers for a biomedical engineering conference. Which choice best accomplishes this goal?',
      options: [
        'By eliminating transvenous leads and subcutaneous pockets, leadless pacemakers reduce total perioperative complications by 38% compared to traditional cardiac pacemakers.',
        'Cardiac pacemakers deliver electrical impulses to regulate abnormal heart rhythms in patients with bradycardia.',
        'The right ventricle receives deoxygenated blood from the right atrium and pumps it to the lungs via the pulmonary artery.',
        'Catheter-based surgical procedures require specialized cardiovascular training.'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Highlights safety advantage by explaining how eliminating transvenous leads reduces perioperative complications by 38% compared to traditional leaded pacemakers.',
        whyCorrect: 'Choice A presents the comparative mechanism and 38% safety improvement directly.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'By eliminating transvenous leads and subcutaneous pockets, leadless pacemakers reduce total perioperative complications by 38% compared to traditional cardiac pacemakers.', whyWrong: 'Correct. Quantified safety improvement focus.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Cardiac pacemakers deliver electrical impulses...', whyWrong: 'General device definition.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'The right ventricle receives deoxygenated blood...', whyWrong: 'Anatomical textbook detail.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Catheter-based surgical procedures require...', whyWrong: 'Surgical training requirement.' }
        ]
      }
    },
    {
      questionNumber: 124,
      id: 'ch7-b10-q7',
      difficulty: 'Elite',
      skillTag: 'Marine Blue Carbon Habitat Synthesis',
      prompt: 'Notes:\n• Mangrove forests sequester carbon at rates up to 10 times higher per hectare than terrestrial tropical rainforests.\n• Mangrove sediment soils store carbon in anoxic conditions for thousands of years ("blue carbon").\n• Global mangrove coverage declined by 3.5% between 1996 and 2020 due to coastal aquaculture development.\n\nThe student wants to emphasize mangroves\' climate mitigation value alongside their conservation vulnerability for an environmental policy briefing. Which choice best accomplishes this goal?',
      options: [
        'Although mangroves sequester carbon up to 10 times faster per hectare than tropical rainforests and store it for millennia, coastal development drove a 3.5% decline in global mangrove coverage between 1996 and 2020.',
        'Mangrove trees possess specialized stilt roots that stabilize coastal shorelines against wave erosion.',
        'Blue carbon refers to organic carbon captured and stored by marine and coastal ecosystems.',
        'Aquaculture farms produce shrimp and fish in coastal ponds across Southeast Asia.'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Emphasizes climate value (10x carbon sequestration, millennial soil storage) alongside vulnerability (3.5% global loss from coastal development).',
        whyCorrect: 'Choice A balances climate mitigation value with empirical conservation vulnerability.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Although mangroves sequester carbon up to 10 times faster per hectare than tropical rainforests and store it for millennia, coastal development drove a 3.5% decline in global mangrove coverage between 1996 and 2020.', whyWrong: 'Correct. Balances climate value and conservation risk.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Mangrove trees possess specialized stilt roots...', whyWrong: 'Erosion feature only.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Blue carbon refers to organic carbon...', whyWrong: 'Term definition.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Aquaculture farms produce shrimp...', whyWrong: 'Aquaculture description.' }
        ]
      }
    },
    {
      questionNumber: 125,
      id: 'ch7-b10-q8',
      difficulty: 'Elite',
      skillTag: 'Comparative Monument Chronology',
      prompt: 'Notes:\n• The Terracotta Army in Xi\'an, China, was created around 210 BCE for Qin Shi Huang\'s mausoleum.\n• The Parthenon Sculptures in Athens, Greece, were sculpted between 447 BCE and 432 BCE under Phidias.\n• Both monument collections represent masterpiece achievements of ancient royal patronage.\n\nThe student wants to compare the construction timelines of the two monument collections for a world history syllabus. Which choice best accomplishes this goal?',
      options: [
        'Sculpted in Athens between 447 and 432 BCE, the Parthenon Sculptures predated China\'s Terracotta Army (created around 210 BCE) by more than two centuries.',
        'The Terracotta Army contains over 8,000 life-sized ceramic soldiers buried near Xi\'an, China.',
        'The Parthenon is an ancient Greek temple dedicated to the goddess Athena on the Acropolis.',
        'Phidias was a classical Greek sculptor who supervised the construction of the Parthenon.'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Compares construction timelines by noting Parthenon Sculptures (447–432 BCE) predated the Terracotta Army (210 BCE) by over two centuries.',
        whyCorrect: 'Choice A provides the precise comparative timeline.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Sculpted in Athens between 447 and 432 BCE, the Parthenon Sculptures predated China\'s Terracotta Army (created around 210 BCE) by more than two centuries.', whyWrong: 'Correct. Comparative timeline focus.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'The Terracotta Army contains over 8,000 life-sized ceramic soldiers...', whyWrong: 'Single monument detail.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'The Parthenon is an ancient Greek temple...', whyWrong: 'Single temple detail.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Phidias was a classical Greek sculptor...', whyWrong: 'Sculptor biography.' }
        ]
      }
    },
    {
      questionNumber: 126,
      id: 'ch7-b10-q9',
      difficulty: 'Elite',
      skillTag: 'Geoengineering Benefit-Risk Synthesis',
      prompt: 'Notes:\n• Stratospheric Aerosol Injection (SAI) reflects incoming solar radiation by spraying sulfur dioxide into the stratosphere.\n• Computer climate models indicate SAI could lower global average surface temperatures within 12 months.\n• Potential risks include disrupted monsoon precipitation patterns and delayed stratospheric ozone layer recovery.\n\nThe student wants to present SAI\'s potential cooling benefit alongside its environmental risks for a climate policy review. Which choice best accomplishes this goal?',
      options: [
        'While Stratospheric Aerosol Injection could rapidly lower global surface temperatures, it poses significant ecological risks, including disrupted monsoon precipitation and delayed ozone recovery.',
        'Sulfur dioxide is a colorless gas with a pungent odor produced by volcanic eruptions and fossil fuel combustion.',
        'The stratospheric ozone layer absorbs harmful solar ultraviolet radiation between 15 and 30 kilometers above Earth.',
        'Computer climate models rely on high-performance supercomputers to simulate global atmospheric circulation.'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Presents SAI\'s benefit (rapid global surface cooling) alongside its risks (disrupted monsoons and delayed ozone recovery).',
        whyCorrect: 'Choice A synthesizes cooling potential and ecological risks.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'While Stratospheric Aerosol Injection could rapidly lower global surface temperatures, it poses significant ecological risks, including disrupted monsoon precipitation and delayed ozone recovery.', whyWrong: 'Correct. Balances benefit and risk.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Sulfur dioxide is a colorless gas...', whyWrong: 'Gas property definition.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'The stratospheric ozone layer absorbs...', whyWrong: 'Ozone definition.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Computer climate models rely on supercomputers...', whyWrong: 'Supercomputer mechanics.' }
        ]
      }
    },
    {
      questionNumber: 127,
      id: 'ch7-b10-q10',
      difficulty: 'Elite',
      skillTag: 'Uncontrolled Confounding Factor Synthesis',
      prompt: 'Notes:\n• Coastal wetland restoration projects in Louisiana recorded a 25% decrease in shoreline erosion rate.\n• Restored sites also received supplemental stone breakwater installation.\n• Researchers could not isolate how much erosion reduction was caused by wetland vegetation versus stone breakwaters.\n\nThe student wants to summarize the study finding while highlighting the limitation caused by the confounding variable. Which choice best accomplishes this goal?',
      options: [
        'Although restored wetlands experienced a 25% decrease in shoreline erosion, the concurrent installation of stone breakwaters prevents researchers from isolating the specific contribution of vegetation.',
        'Coastal wetland restoration completely eliminates shoreline erosion along the Gulf of Mexico.',
        'Stone breakwaters are heavy rock barriers engineered to dissipate ocean wave energy.',
        'Louisiana has lost thousands of square miles of coastal wetlands since 1930.'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Reports the finding (25% erosion decrease) while explicitly acknowledging the limitation (stone breakwater installation prevents isolating vegetation contribution).',
        whyCorrect: 'Choice A presents the finding alongside the confounding factor caveat.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Although restored wetlands experienced a 25% decrease in shoreline erosion, the concurrent installation of stone breakwaters prevents researchers from isolating the specific contribution of vegetation.', whyWrong: 'Correct. Preserves finding and confounding limitation.' },
          { optionIndex: 1, optionLabel: 'B', optionText: '...completely eliminates shoreline erosion...', whyWrong: 'Extremist overclaim.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Stone breakwaters are heavy rock barriers...', whyWrong: 'Breakwater definition.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Louisiana has lost thousands of square miles...', whyWrong: 'General land loss history.' }
        ]
      }
    },
    {
      questionNumber: 128,
      id: 'ch7-b10-q11',
      difficulty: 'Elite',
      skillTag: 'Complex Parallel System Comparison',
      prompt: 'Notes:\n• Synthetic languages (e.g., Latin, Turkish) express grammatical relationships through inflectional affixes added to word roots.\n• Analytic languages (e.g., Mandarin Chinese, English) express grammatical relationships through strict word order and auxiliary particles.\n• Both structural systems effectively communicate complex syntactic meaning.\n\nThe student wants to contrast the structural mechanisms of synthetic and analytic languages for a typology textbook. Which choice best accomplishes this goal?',
      options: [
        'Whereas synthetic languages rely on inflectional affixes to express grammatical relationships, analytic languages rely on strict word order and auxiliary particles.',
        'Latin and Turkish are examples of synthetic languages studied by historical linguists.',
        'Mandarin Chinese uses tones to distinguish meaning between phonetically identical syllables.',
        'All human languages possess complex grammatical systems capable of expressing abstract concepts.'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Contrasts synthetic languages (inflectional affixes) with analytic languages (strict word order and auxiliary particles).',
        whyCorrect: 'Choice A directly contrasts the structural mechanisms of the two language types.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Whereas synthetic languages rely on inflectional affixes to express grammatical relationships, analytic languages rely on strict word order and auxiliary particles.', whyWrong: 'Correct. Directly contrasts structural mechanisms.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Latin and Turkish are examples...', whyWrong: 'Language list only.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Mandarin Chinese uses tones...', whyWrong: 'Tonal language feature only.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'All human languages possess complex grammatical systems...', whyWrong: 'General universal claim.' }
        ]
      }
    },
    {
      questionNumber: 129,
      id: 'ch7-b10-q12',
      difficulty: 'Elite',
      skillTag: 'Multi-Variable Economic Trend Synthesis',
      prompt: 'Notes:\n• European offshore wind generation capacity grew from 3 GW in 2010 to 28 GW in 2022.\n• Over the same period, the Levelized Cost of Energy (LCOE) for offshore wind fell by 60%.\n• Technological advancements included larger turbine rotor diameters (from 100m to 220m) and deeper water foundation engineering.\n\nThe student wants to summarize the growth and cost trends of European offshore wind for an energy economics review. Which choice best accomplishes this goal?',
      options: [
        'Driven by turbine scaling and foundation engineering advancements, European offshore wind capacity expanded nearly tenfold between 2010 and 2022 as generation costs dropped by 60%.',
        'Offshore wind turbines generate clean electricity using wind currents over coastal marine waters.',
        'In 2022, European offshore wind facilities reached 28 GW of installed generation capacity.',
        'Turbine rotor diameters increased from 100 meters to 220 meters between 2010 and 2022.'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Summarizes capacity growth (3 GW to 28 GW, nearly 10x), cost trend (60% drop in LCOE), and underlying engineering drivers (turbine scaling and foundations).',
        whyCorrect: 'Choice A synthesizes growth scale, cost reduction, and engineering drivers.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Driven by turbine scaling and foundation engineering advancements, European offshore wind capacity expanded nearly tenfold between 2010 and 2022 as generation costs dropped by 60%.', whyWrong: 'Correct. Complete economic trend summary.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Offshore wind turbines generate clean electricity...', whyWrong: 'General definition.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'In 2022, European offshore wind facilities reached...', whyWrong: 'Single endpoint figure.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Turbine rotor diameters increased...', whyWrong: 'Single engineering stat.' }
        ]
      }
    },
    {
      questionNumber: 130,
      id: 'ch7-b10-q13',
      difficulty: 'Elite',
      skillTag: 'Master Integration Synthesis',
      prompt: 'Consider the passage:\n> In 2021, climate scientists deployed an autonomous deep-ocean gliders array to measure heat absorption in the Southern Ocean. While early data indicated higher heat uptake in upper water layers, the gliders\' pressure sensors required recalibration after three weeks of deployment. Consequently, researchers caution that long-term heat transport models require further observational validation.\n\nWhich statement best synthesizes the core findings and methodological caveat?',
      options: [
        'Autonomous gliders proved that the Southern Ocean absorbs all global heat.',
        'Initial Southern Ocean glider data showed elevated upper-layer heat uptake, but sensor recalibration requirements underscore the need for further observational validation before revising long-term models.',
        'Pressure sensors are electronic instruments used to measure hydrostatic depth.',
        'The Southern Ocean surrounds Antarctica and connects the Atlantic, Pacific, and Indian oceans.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'Master synthesis: includes initial finding (elevated upper-layer heat uptake), identifies methodological limitation (sensor recalibration requirements), and preserves research recommendation (need for further observational validation).',
        whyCorrect: 'Choice B integrates initial findings, sensor caveat, and validation recommendation.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: '...absorbs all global heat.', whyWrong: 'Absurd universal claim.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Initial Southern Ocean glider data showed elevated upper-layer heat uptake, but sensor recalibration requirements underscore the need for further observational validation before revising long-term models.', whyWrong: 'Correct. Complete master synthesis.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Pressure sensors are electronic instruments...', whyWrong: 'Instrument definition.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'The Southern Ocean surrounds Antarctica...', whyWrong: 'Geographic background.' }
        ]
      }
    }
  ]
};
'''

with open('/src/data/writing/satWritingChapter7QuestionsPart3.ts', 'w') as f:
    f.write(p3_code)

print("Part 3 Written Successfully!")
