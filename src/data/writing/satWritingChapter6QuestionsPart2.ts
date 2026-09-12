import { WritingExerciseBlock } from './satWritingTypes';

// ==========================================
// BLOCK 6: RHETORICAL SYNTHESIS - CHRONOLOGY, MILESTONES & DISCOVERIES (Q51 - Q60)
// ==========================================
export const EXERCISE_BLOCK_6: WritingExerciseBlock = {
  blockNumber: 6,
  title: 'Block 6 Exercises: Rhetorical Synthesis — Chronology, Discoveries & Milestones',
  description: '10 Questions (Questions 51–60) testing precise goal-matching for historical timelines, institutional milestones, archaeological discoveries, and biographical data.',
  questions: [
    {
      questionNumber: 51,
      id: 'ch6-q51',
      difficulty: 'Medium',
      skillTag: 'Rhetorical Synthesis - Chronological Milestone',
      prompt: `A curator writing an exhibition introduction for the Ashmolean Museum in Oxford has compiled the following notes:
• The Ashmolean Museum in Oxford was founded in 1683.
• It is widely recognized as the world's first university museum.
• Its inaugural collection was donated by antiquarian Elias Ashmole.
• A new wing dedicated to Silk Road numismatics was inaugurated in October 2024.

The curator wants to specify when the new numismatic wing opened to the public for an academic chronology. Which revision most effectively introduces this opening date?`,
      options: [
        'The Ashmolean Museum, founded in 1683 from Elias Ashmole\'s collection, is recognized as the world\'s first university museum.',
        'In October 2024, the Ashmolean Museum inaugurated a new wing dedicated to Silk Road numismatics.',
        'The Ashmolean Museum houses extensive numismatic collections originating from the seventeenth century.',
        'A new exhibition wing at Oxford\'s university museum focuses on ancient Silk Road monetary exchanges.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The prompt strictly requires stating when the new numismatic wing opened.',
        whyCorrect: 'Option B directly provides the exact date (October 2024) and subject (Silk Road numismatic wing).',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'The Ashmolean Museum, founded in 1683...', whyWrong: 'States museum founding year instead of when the new wing opened.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'The Ashmolean Museum houses extensive...', whyWrong: 'Fails to state when the new wing opened.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'A new exhibition wing at Oxford\'s...', whyWrong: 'Omits the opening date.' }
        ]
      }
    },
    {
      questionNumber: 52,
      id: 'ch6-q52',
      difficulty: 'Medium',
      skillTag: 'Rhetorical Synthesis - Ecological Policy Benefit',
      prompt: `An analyst preparing an environmental report on sustainable transit systems has compiled the following notes:
• Shenzhen converted its entire public transit fleet to 16,000 electric buses in 2018.
• Battery-electric buses eliminate localized diesel particulate and nitrogen oxide emissions.
• The transit system operates across 1,000 urban routes.
• Municipal transportation authorities track daily route telemetry.

The analyst wants to present Shenzhen's transit policy to an audience of urban planning experts by highlighting its primary ecological benefit. Which revision most effectively emphasizes this ecological benefit?`,
      options: [
        'Shenzhen transitioned its 1,000 urban transit routes to 16,000 electric buses in 2018.',
        'Municipal authorities in Shenzhen track telemetry data across thousands of electric bus routes.',
        'By transitioning to electric buses, Shenzhen eliminated localized diesel particulate and nitrogen oxide emissions.',
        'Shenzhen operates 16,000 battery-electric buses across an extensive urban transit grid.'
      ],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'The prompt demands highlighting the environmental advantage of the municipal bus transition.',
        whyCorrect: 'Option C explicitly foregrounds the elimination of toxic diesel particulate and nitrogen oxide emissions.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Shenzhen transitioned its 1,000...', whyWrong: 'Focuses on fleet size and implementation date rather than environmental benefits.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Municipal authorities in Shenzhen...', whyWrong: 'Mentions telemetry data tracking, which is irrelevant to environmental advantages.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Shenzhen operates 16,000 battery-electric...', whyWrong: 'Describes fleet scale without mentioning emissions reductions.' }
        ]
      }
    },
    {
      questionNumber: 53,
      id: 'ch6-q53',
      difficulty: 'Hard',
      skillTag: 'Rhetorical Synthesis - Archaeological Dating Contrast',
      prompt: `An archaeologist preparing a comparative study of prehistoric monumental architecture compiled the following field notes:
• Göbekli Tepe is a megalithic sanctuary located in southeastern Anatolia, Turkey.
• Radiocarbon assays date its circular stone enclosures to approximately 9500 BCE.
• Stonehenge in Wiltshire, England, was constructed in phases starting around 3000 BCE.
• Both archaeological sites feature monumental T-shaped or post-and-lintel megaliths.

The archaeologist wants to introduce the comparative timeline of Göbekli Tepe and Stonehenge for an academic symposium. Which choice best accomplishes this goal?`,
      options: [
        'Constructed around 9500 BCE, Göbekli Tepe in Turkey predates England\'s Stonehenge by more than six millennia.',
        'Göbekli Tepe and Stonehenge both feature monumental stone architecture dating to prehistoric eras.',
        'Stonehenge was built in Wiltshire around 3000 BCE using post-and-lintel megalithic blocks.',
        'Dating to 9500 BCE, Göbekli Tepe is a megalithic sanctuary located in southeastern Anatolia.'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The prompt specifically instructs the author to emphasize the age difference between the two sites.',
        whyCorrect: 'Option A explicitly calculates and highlights the temporal contrast ("predates... by more than six millennia").',
        distractorAnalysis: [
          { optionIndex: 1, optionLabel: 'B', optionText: 'Göbekli Tepe and Stonehenge both feature...', whyWrong: 'Emphasizes similarities in stone architecture rather than the age gap.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Stonehenge was built in Wiltshire...', whyWrong: 'Mentions only Stonehenge, ignoring Göbekli Tepe entirely.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Dating to 9500 BCE, Göbekli Tepe...', whyWrong: 'Omits Stonehenge and fails to make the age comparison.' }
        ]
      }
    },
    {
      questionNumber: 54,
      id: 'ch6-q54',
      difficulty: 'Hard',
      skillTag: 'Rhetorical Synthesis - Scientific Instrument Function',
      prompt: `An astrophysicist drafting an informational brochure on deep-space spectroscopy organized the following instrument specifications:
• The James Webb Space Telescope (JWST) was launched in December 2021.
• It operates at the Sun-Earth Lagrange point 2 (L2), approximately 1.5 million kilometers from Earth.
• Its Near-Infrared Spectrograph (NIRSpec) instrument disperses infrared light from distant astronomical objects.
• NIRSpec can obtain simultaneous spectra of up to 100 celestial objects in a single field of view.

The astrophysicist wants to summarize the primary operational mechanism of NIRSpec for a general science audience. Which choice best accomplishes this goal?`,
      options: [
        'Operating at the L2 point, the James Webb Space Telescope was launched in December 2021.',
        'The JWST\'s NIRSpec instrument disperses infrared light and can capture simultaneous spectra from up to 100 celestial objects.',
        'The James Webb Space Telescope orbits 1.5 million kilometers from Earth to observe distant galaxies.',
        'NIRSpec is one of multiple instruments aboard the James Webb Space Telescope launched in 2021.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The prompt specifically targets the functional operation of the NIRSpec instrument.',
        whyCorrect: 'Option B accurately details NIRSpec\'s operational mechanism (dispersing infrared light) and its multiplexing capacity (100 simultaneous spectra).',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Operating at the L2 point, the James Webb...', whyWrong: 'Focuses on telescope launch date and orbital location without mentioning NIRSpec\'s function.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'The James Webb Space Telescope orbits...', whyWrong: 'Describes the telescope\'s orbit rather than NIRSpec\'s operation.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'NIRSpec is one of multiple instruments...', whyWrong: 'States NIRSpec\'s existence aboard JWST without explaining what it actually does.' }
        ]
      }
    },
    {
      questionNumber: 55,
      id: 'ch6-q55',
      difficulty: 'Medium',
      skillTag: 'Rhetorical Synthesis - Biographical Distinction',
      prompt: `A marine geologist writing a biographical profile for an earth sciences journal gathered the following historical records:
• Marie Tharp was an American oceanographic cartographer and geologist.
• In 1952, while analyzing echo-sounding sonar profiles of the North Atlantic, she discovered the Mid-Atlantic Ridge rift valley.
• Her discovery provided crucial empirical evidence supporting Alfred Wegener\'s theory of continental drift.
• At the time, her colleague Bruce Heezen initially dismissed her finding as "women\'s talk."

The geologist wants to present Marie Tharp\'s research to an audience unfamiliar with oceanographic geology. Which choice best accomplishes this goal?`,
      options: [
        'In 1952, Marie Tharp discovered the Mid-Atlantic Ridge rift valley, providing crucial empirical support for continental drift theory.',
        'Marie Tharp was an oceanographic cartographer who worked alongside Bruce Heezen in the 1950s.',
        'Echo-sounding sonar profiles of the North Atlantic were analyzed by American oceanographers in the 1950s.',
        'Continental drift was a controversial geological theory originally formulated by Alfred Wegener.'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The prompt requires highlighting Tharp\'s primary scientific contribution.',
        whyCorrect: 'Option A directly names her discovery (Mid-Atlantic Ridge rift valley) and its major scientific impact (supporting continental drift).',
        distractorAnalysis: [
          { optionIndex: 1, optionLabel: 'B', optionText: 'Marie Tharp was an oceanographic cartographer...', whyWrong: 'Describes her profession and colleague without stating her groundbreaking discovery.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Echo-sounding sonar profiles of the North Atlantic...', whyWrong: 'Mentions data collection methods while omitting Tharp and her discovery.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Continental drift was a controversial geological...', whyWrong: 'Focuses on Wegener\'s theory rather than Tharp\'s specific contribution.' }
        ]
      }
    },
    {
      questionNumber: 56,
      id: 'ch6-q56',
      difficulty: 'Hard',
      skillTag: 'Rhetorical Synthesis - Ecological Comparison',
      prompt: `A conservation ecologist preparing a global marine biodiversity assessment recorded the following geographical data:
• The Great Barrier Reef in Australia spans over 2,300 kilometers along the Queensland coastline.
• The Mesoamerican Barrier Reef in the Caribbean extends roughly 1,000 kilometers from Mexico to Honduras.
• Both marine ecosystems host thousands of coral, fish, and invertebrate species.
• The Great Barrier Reef is the largest coral reef system on Earth.

The ecologist wants to introduce the comparative geographic scale of the two reef systems for a marine conservation report. Which choice best accomplishes this goal?`,
      options: [
        'Spanning over 2,300 kilometers, Australia\'s Great Barrier Reef is more than twice as long as the 1,000-kilometer Mesoamerican Reef.',
        'Both the Great Barrier Reef and the Mesoamerican Barrier Reef host thousands of marine species.',
        'The Great Barrier Reef is the largest coral reef system on Earth, located off the coast of Queensland.',
        'The Mesoamerican Barrier Reef extends 1,000 kilometers through Caribbean waters from Mexico to Honduras.'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The prompt demands a direct comparison of geographic lengths between both reefs.',
        whyCorrect: 'Option A explicitly contrasts the 2,300 km length of the Great Barrier Reef with the 1,000 km length of the Mesoamerican Reef.',
        distractorAnalysis: [
          { optionIndex: 1, optionLabel: 'B', optionText: 'Both the Great Barrier Reef and the Mesoamerican...', whyWrong: 'Compares biodiversity, not geographic length.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'The Great Barrier Reef is the largest coral...', whyWrong: 'Omits the Mesoamerican Reef entirely.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'The Mesoamerican Barrier Reef extends 1,000...', whyWrong: 'Describes only the Mesoamerican Reef without making a comparison.' }
        ]
      }
    },
    {
      questionNumber: 57,
      id: 'ch6-q57',
      difficulty: 'Elite',
      skillTag: 'Rhetorical Synthesis - Paleontological Discovery',
      prompt: `A paleontologist writing an exhibition guide for a natural history museum compiled the following anatomical and fossil records:
• In 2014, paleontologists in Patagonia, Argentina, unearthed fossils of *Patagotitan mayorum*.
• *Patagotitan* was a titanosaurian sauropod dinosaur dating to the Cretaceous period (roughly 100 million years ago).
• It reached estimated lengths of 37 meters and weighed approximately 70 metric tons.
• It is regarded as one of the largest terrestrial animals ever discovered.

The paleontologist wants to highlight the extraordinary physical dimensions of *Patagotitan mayorum* for an exhibit catalogue. Which choice best accomplishes this goal?`,
      options: [
        'Unearthed in Patagonia in 2014, *Patagotitan mayorum* was a Cretaceous sauropod that reached an astonishing 37 meters in length and weighed 70 metric tons.',
        'Fossils of *Patagotitan mayorum*, a titanosaurian sauropod dating to 100 million years ago, were discovered in Patagonia, Argentina.',
        '*Patagotitan mayorum* was discovered by Argentine paleontologists during a 2014 field excavation.',
        'Titanosaurian sauropods were massive herbivorous dinosaurs that inhabited Cretaceous South America.'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The prompt strictly requires emphasizing the colossal physical dimensions of the dinosaur.',
        whyCorrect: 'Option A explicitly provides the quantitative metrics (37 meters in length, 70 metric tons) highlighting its colossal size.',
        distractorAnalysis: [
          { optionIndex: 1, optionLabel: 'B', optionText: 'Fossils of Patagotitan mayorum, a titanosaurian...', whyWrong: 'States taxonomy and age without mentioning specific physical dimensions.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Patagotitan mayorum was discovered by Argentine...', whyWrong: 'Focuses on the excavation team and year rather than physical size.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Titanosaurian sauropods were massive herbivorous...', whyWrong: 'Makes a broad generalization without specifying Patagotitan\'s dimensions.' }
        ]
      }
    },
    {
      questionNumber: 58,
      id: 'ch6-q58',
      difficulty: 'Medium',
      skillTag: 'Rhetorical Synthesis - Musical Adaptation',
      prompt: `A musicologist preparing program notes for a symphony orchestra concert compiled the following historical details:
• Johannes Brahms completed his *Academic Festival Overture* in 1880.
• The piece was composed as a musical thank-you to the University of Breslau for conferring upon him an honorary doctorate.
• Rather than composing a solemn academic work, Brahms incorporated four boisterous nineteenth-century student drinking songs.
• The climactic finale features a triumphant orchestral rendition of "Gaudeamus igitur."

The musicologist wants to explain the unconventional, humorous nature of Brahms's overture for concertgoers. Which choice best accomplishes this goal?`,
      options: [
        'Johannes Brahms was awarded an honorary doctorate by the University of Breslau in 1880.',
        'Instead of writing a solemn academic piece, Brahms playfully based his *Academic Festival Overture* on four boisterous student drinking songs.',
        'Brahms completed his *Academic Festival Overture* in 1880, concluding with the student anthem "Gaudeamus igitur."',
        'The University of Breslau conferred an honorary doctorate on Johannes Brahms, prompting him to write an overture.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The prompt requires highlighting the humorous and unconventional nature of the composition.',
        whyCorrect: 'Option B contrasts the expected solemn academic tone with Brahms\'s playful inclusion of boisterous drinking songs.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Johannes Brahms was awarded an honorary...', whyWrong: 'States biographical background without mentioning the music or its humor.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Brahms completed his Academic Festival Overture...', whyWrong: 'Mentions the completion year and finale without highlighting its unconventional humor.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'The University of Breslau conferred an honorary...', whyWrong: 'Explains the occasion rather than the playful nature of the piece.' }
        ]
      }
    },
    {
      questionNumber: 59,
      id: 'ch6-q59',
      difficulty: 'Hard',
      skillTag: 'Rhetorical Synthesis - Agricultural Innovation',
      prompt: `An agronomist writing an educational overview of twentieth-century agricultural breakthroughs recorded the following plant genetics data:
• Norman Borlaug was an American agronomist known as the "Father of the Green Revolution."
• In the 1950s, he bred semi-dwarf, disease-resistant, high-yield wheat cultivars in Mexico.
• Traditional tall wheat plants collapsed (lodged) under the heavy weight of extra grain heads.
• Borlaug's sturdy, short-stalked wheat doubled Mexican wheat yields and averted widespread famine across South Asia.

The agronomist wants to summarize the structural mechanism behind Borlaug's semi-dwarf wheat for an audience unfamiliar with crop genetics. Which choice best accomplishes this goal?`,
      options: [
        'Unlike traditional tall wheat that collapsed under heavy grain heads, Borlaug\'s sturdy semi-dwarf wheat resisted lodging, dramatically increasing harvest yields.',
        'Norman Borlaug, the "Father of the Green Revolution," conducted agricultural breeding research in Mexico during the 1950s.',
        'Semi-dwarf wheat varieties developed in Mexico in the 1950s helped prevent famines across South Asia.',
        'Traditional wheat plants cultivated in the early twentieth century were susceptible to lodging in agricultural fields.'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The prompt demands explaining why semi-dwarf wheat was superior to tall varieties.',
        whyCorrect: 'Option A explains the mechanical advantage: unlike tall varieties that collapsed under grain weight, semi-dwarf wheat stood firm and boosted yields.',
        distractorAnalysis: [
          { optionIndex: 1, optionLabel: 'B', optionText: 'Norman Borlaug, the "Father of the Green...', whyWrong: 'States Borlaug\'s title and research location without explaining wheat mechanics.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Semi-dwarf wheat varieties developed in Mexico...', whyWrong: 'Mentions famine prevention without explaining the structural advantage over tall wheat.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Traditional wheat plants cultivated in the...', whyWrong: 'Mentions the flaw of tall wheat without referencing Borlaug\'s superior solution.' }
        ]
      }
    },
    {
      questionNumber: 60,
      id: 'ch6-q60',
      difficulty: 'Elite',
      skillTag: 'Rhetorical Synthesis - Deep-Sea Discovery',
      prompt: `A deep-sea oceanographer drafting a lecture on abyssal ecosystems organized the following expedition notes:
• In 1977, oceanographers aboard the research submersible *Alvin* discovered hydrothermal vents near the Galápagos Rift.
• The vents spew mineral-rich water heated to over 350 degrees Celsius by subterranean magma.
• Surrounding the vents, scientists discovered dense ecosystems of giant tube worms, clams, and crabs.
• These ecosystems thrive in complete darkness, powered by chemosynthetic bacteria that oxidize toxic hydrogen sulfide.

The oceanographer wants to present the discovery of deep-sea hydrothermal vents to an audience interested in extreme biological adaptations. Which choice best accomplishes this goal?`,
      options: [
        'In 1977, oceanographers aboard the submersible *Alvin* discovered mineral-rich hydrothermal vents near the Galápagos Rift.',
        'Ecosystems surrounding hydrothermal vents thrive in complete darkness, powered by chemosynthetic bacteria that convert toxic hydrogen sulfide into energy.',
        'Hydrothermal vents near the Galápagos Rift spew water heated to over 350 degrees Celsius by subterranean magma.',
        'Giant tube worms, clams, and crabs were discovered inhabiting deep-sea environments in the eastern Pacific Ocean.'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The prompt specifically requires emphasizing how life survives without sunlight.',
        whyCorrect: 'Option B highlights the chemosynthetic mechanism: bacteria converting hydrogen sulfide into energy in total darkness.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'In 1977, oceanographers aboard the submersible...', whyWrong: 'Focuses on the discovery date and expedition team.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Hydrothermal vents near the Galápagos Rift spew...', whyWrong: 'Describes vent temperature without explaining biological survival mechanisms.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Giant tube worms, clams, and crabs were discovered...', whyWrong: 'Lists animal species without explaining their chemosynthetic energy source.' }
        ]
      }
    }
  ]
};

// ==========================================
// BLOCK 7: RHETORICAL SYNTHESIS - METHODOLOGY, MECHANISM & CAUSATION (Q61 - Q70)
// ==========================================
export const EXERCISE_BLOCK_7: WritingExerciseBlock = {
  blockNumber: 7,
  title: 'Block 7 Exercises: Rhetorical Synthesis — Methodology, Mechanism & Causation',
  description: '10 Questions (Questions 61–70) testing precision synthesis for experimental procedures, chemical mechanisms, technological workflows, and causal models.',
  questions: [
    {
      questionNumber: 61,
      id: 'ch6-q61',
      difficulty: 'Hard',
      skillTag: 'Rhetorical Synthesis - Atmospheric Chemistry Mechanism',
      prompt: `An atmospheric chemist preparing an environmental policy briefing gathered the following photochemical data:
• Chlorofluorocarbons (CFCs) were widely used as industrial refrigerants and aerosol propellants.
• In the stratosphere, intense ultraviolet (UV-C) radiation photolyzes CFC molecules, releasing free chlorine radicals.
• A single chlorine radical catalytically destroys up to 100,000 ozone molecules through a chain reaction.
• This catalytic ozone depletion led to the formation of the Antarctic ozone hole.

The chemist wants to summarize the chemical mechanism by which CFCs destroy stratospheric ozone for an environmental science audience. Which choice best accomplishes this goal?`,
      options: [
        'When broken down by ultraviolet radiation in the stratosphere, CFCs release chlorine radicals that catalytically destroy tens of thousands of ozone molecules.',
        'CFCs were widely used as refrigerants before being linked to the Antarctic ozone hole.',
        'Intense ultraviolet radiation in the upper atmosphere photolyzes industrial chemical compounds.',
        'The Antarctic ozone hole was caused by extensive global usage of aerosol propellants in the twentieth century.'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The prompt demands explaining the exact chemical mechanism by which CFCs destroy ozone.',
        whyCorrect: 'Option A details the complete chemical chain: UV breakdown → release of chlorine radicals → catalytic destruction of ozone.',
        distractorAnalysis: [
          { optionIndex: 1, optionLabel: 'B', optionText: 'CFCs were widely used as refrigerants before...', whyWrong: 'States industrial use and history without explaining the chemical mechanism.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Intense ultraviolet radiation in the upper...', whyWrong: 'Mentions UV photolysis generally without mentioning CFCs, chlorine radicals, or ozone.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'The Antarctic ozone hole was caused by...', whyWrong: 'Mentions broad historical causation without detailing the molecular chemistry.' }
        ]
      }
    },
    {
      questionNumber: 62,
      id: 'ch6-q62',
      difficulty: 'Hard',
      skillTag: 'Rhetorical Synthesis - Renewable Energy Engineering',
      prompt: `An energy systems engineer preparing a feasibility assessment on renewable grid integration recorded the following technical specifications:
• Concentrated solar power (CSP) plants use fields of mirrors (heliostats) to focus sunlight onto a central receiver tower.
• The receiver heats liquid molten salt (a mixture of sodium nitrate and potassium nitrate) to over 560 degrees Celsius.
• The thermal energy stored in the molten salt can generate steam to drive electricity turbines hours after sunset.
• Photovoltaic (PV) solar panels, by contrast, only generate electricity when direct sunlight strikes the panels.

The engineer wants to highlight a key advantage of CSP systems for a policy brief on renewable energy storage. Which choice best accomplishes this goal?`,
      options: [
        'Unlike photovoltaic panels that only produce electricity during daylight, CSP plants store thermal energy in molten salt to generate power even after sunset.',
        'Concentrated solar power plants use extensive fields of heliostat mirrors to track solar trajectories.',
        'Molten salt used in CSP towers consists of sodium nitrate and potassium nitrate heated to 560 degrees Celsius.',
        'Photovoltaic solar panels convert direct sunlight into electrical current across utility installations.'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The prompt requires emphasizing CSP\'s energy storage advantage compared to photovoltaic panels.',
        whyCorrect: 'Option A contrasts photovoltaic daytime-only output with CSP\'s molten salt storage capability that allows post-sunset power generation.',
        distractorAnalysis: [
          { optionIndex: 1, optionLabel: 'B', optionText: 'Concentrated solar power plants use extensive...', whyWrong: 'Describes mirror fields without mentioning energy storage or PV comparison.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Molten salt used in CSP towers consists of...', whyWrong: 'Lists chemical constituents without highlighting the storage advantage over PV.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Photovoltaic solar panels convert direct...', whyWrong: 'Describes PV panels without making any comparison to CSP.' }
        ]
      }
    },
    {
      questionNumber: 63,
      id: 'ch6-q63',
      difficulty: 'Elite',
      skillTag: 'Rhetorical Synthesis - Paleoclimatology Proxy',
      prompt: `A paleoclimatologist preparing a public science article on glacial ice archives compiled the following methodology notes:
• Paleoclimatologists extract ice cores from Antarctica and Greenland spanning hundreds of thousands of years.
• Stable isotope ratios of oxygen-18 to oxygen-16 in ice layers reflect historical atmospheric temperatures.
• Tiny ancient air bubbles trapped within the compacted ice preserve direct samples of paleo-atmospheres.
• Measuring gas concentrations in these bubbles allows scientists to reconstruct prehistoric atmospheric carbon dioxide levels.

The paleoclimatologist wants to present the methodology used to reconstruct past carbon dioxide concentrations to an audience unfamiliar with ice core analysis. Which choice best accomplishes this goal?`,
      options: [
        'Scientists determine past carbon dioxide levels by measuring gas concentrations directly from ancient air bubbles trapped within glacial ice layers.',
        'Paleoclimatologists analyze oxygen isotope ratios in Antarctic ice cores to reconstruct past temperatures.',
        'Ice cores extracted from Greenland and Antarctica preserve continuous climate records spanning hundreds of thousands of years.',
        'Oxygen-18 and oxygen-16 ratios in compacted ice provide valuable proxy data for atmospheric scientists.'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The prompt strictly requires explaining how past CO2 concentrations are determined.',
        whyCorrect: 'Option A specifies the exact method: measuring gases within trapped ancient air bubbles.',
        distractorAnalysis: [
          { optionIndex: 1, optionLabel: 'B', optionText: 'Scientists analyze oxygen isotope ratios...', whyWrong: 'Oxygen isotopes measure temperature, not carbon dioxide levels.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Ice cores extracted from Greenland and Antarctica...', whyWrong: 'States ice core age and location without explaining CO2 measurement.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Oxygen-18 and oxygen-16 ratios in compacted ice...', whyWrong: 'Focuses on oxygen isotopes rather than CO2 gases.' }
        ]
      }
    },
    {
      questionNumber: 64,
      id: 'ch6-q64',
      difficulty: 'Hard',
      skillTag: 'Rhetorical Synthesis - Marine Engineering Workflow',
      prompt: `A civil engineer designing an urban water purification plant outlined the following operational parameters:
• Seawater reverse osmosis (SWRO) desalination removes dissolved salts to produce potable fresh water.
• Raw seawater undergoes multi-stage filtration to eliminate suspended sand, silt, and organic particulates.
• High-pressure pumps then force the pretreated water against semipermeable polyamide membranes at pressures up to 80 bar.
• The membrane pores allow water molecules to pass through while rejecting 99.7 percent of dissolved sodium and chloride ions.

The engineer wants to explain the filtration mechanism of semipermeable membranes for an audience of engineering students. Which choice best accomplishes this goal?`,
      options: [
        'In reverse osmosis desalination, semipermeable polyamide membranes permit fresh water molecules to pass while blocking 99.7 percent of dissolved salts.',
        'Multi-stage filtration eliminates sand, silt, and organic debris before seawater reaches high-pressure pumps.',
        'Seawater reverse osmosis plants operate high-pressure pumps exceeding 80 bar to produce potable municipal water.',
        'Desalination facilities produce fresh water from seawater across arid coastal regions worldwide.'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The prompt asks for the specific functional role of the semipermeable membrane.',
        whyCorrect: 'Option A precisely details how the membrane functions (passing water molecules while rejecting 99.7% of dissolved ions).',
        distractorAnalysis: [
          { optionIndex: 1, optionLabel: 'B', optionText: 'Multi-stage filtration eliminates sand, silt...', whyWrong: 'Describes pre-treatment filtration, not the membrane.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Seawater reverse osmosis plants operate...', whyWrong: 'Focuses on the pump pressures rather than membrane filtration physics.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Desalination facilities produce fresh water...', whyWrong: 'Broad summary that omits the membrane completely.' }
        ]
      }
    },
    {
      questionNumber: 65,
      id: 'ch6-q65',
      difficulty: 'Elite',
      skillTag: 'Rhetorical Synthesis - Molecular Biology Process',
      prompt: `A molecular biologist preparing a laboratory protocol review organized the following biochemical steps:
• Polymerase Chain Reaction (PCR) amplifies specific DNA fragments exponentially *in vitro*.
• During denaturation (95°C), high temperatures break hydrogen bonds to separate double-stranded DNA into single strands.
• In the annealing phase (55°C), short synthetic oligonucleotide primers bind to complementary target sequences.
• In extension (72°C), *Taq* DNA polymerase synthesizes new complementary strands by adding free nucleotides.

The biologist wants to summarize the multi-step methodology of PCR for a general biology textbook. Which choice best accomplishes this goal?`,
      options: [
        'A standard PCR cycle consists of three thermal steps: denaturation to separate DNA strands, primer annealing, and extension by *Taq* polymerase.',
        'PCR is a laboratory technique that exponentially amplifies specific DNA fragments *in vitro* using *Taq* polymerase.',
        'During the annealing phase of PCR, oligonucleotide primers bind to single-stranded DNA at 55 degrees Celsius.',
        '*Taq* DNA polymerase synthesizes complementary DNA strands by adding free nucleotides at high temperatures.'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The prompt requires summarizing all three sequential thermal steps of the PCR cycle.',
        whyCorrect: 'Option A names and defines all three steps in exact sequence: denaturation → annealing → extension.',
        distractorAnalysis: [
          { optionIndex: 1, optionLabel: 'B', optionText: 'PCR is a laboratory technique that exponentially...', whyWrong: 'Defines PCR generally without naming the three thermal cycle steps.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'During the annealing phase of PCR...', whyWrong: 'Focuses on only one step (annealing) instead of summarizing all three.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Taq DNA polymerase synthesizes complementary...', whyWrong: 'Focuses solely on the extension enzyme, ignoring denaturation and annealing.' }
        ]
      }
    },
    {
      questionNumber: 66,
      id: 'ch6-q66',
      difficulty: 'Hard',
      skillTag: 'Rhetorical Synthesis - Ecological Mutualism',
      prompt: `A plant ecologist writing a review on subterranean forest networks compiled the following symbiosis observations:
• Mycorrhizal fungi form mutualistic symbiotic associations with the roots of over 80 percent of vascular land plants.
• The fungal hyphae vastly expand the root surface area, absorbing soil phosphorus and water for the plant host.
• In return, the plant provides the fungi with up to 30 percent of its photosynthetically fixed carbon (sugars).
• This subterranean fungal network connects multiple trees in a forest, enabling resource sharing.

The ecologist wants to highlight the mutualistic trade between mycorrhizal fungi and plant hosts for a botanical review. Which choice best accomplishes this goal?`,
      options: [
        'In their mutualistic partnership, mycorrhizal fungi provide plants with soil phosphorus and water in exchange for photosynthetically fixed sugars.',
        'Mycorrhizal fungi associate with the roots of over 80 percent of vascular land plant species.',
        'Subterranean networks of fungal hyphae connect forest trees to facilitate nutrient distribution.',
        'Fungal hyphae expand root surface areas to dramatically improve soil water absorption.'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The prompt requires highlighting the reciprocal (two-way) nutrient exchange.',
        whyCorrect: 'Option A explicitly presents both sides of the mutualism: fungi providing phosphorus/water in return for plant sugars.',
        distractorAnalysis: [
          { optionIndex: 1, optionLabel: 'B', optionText: 'Mycorrhizal fungi associate with the roots...', whyWrong: 'States the prevalence of the relationship without describing nutrient exchange.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Subterranean networks of fungal hyphae...', whyWrong: 'Mentions network connections without detailing the two-way trade.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Fungal hyphae expand root surface areas...', whyWrong: 'Describes only what the fungus provides, ignoring what the plant gives in return.' }
        ]
      }
    },
    {
      questionNumber: 67,
      id: 'ch6-q67',
      difficulty: 'Elite',
      skillTag: 'Rhetorical Synthesis - Astrophysics Mechanics',
      prompt: `An observational astronomer preparing a public planetarium exhibit compiled the following relativistic optics notes:
• Gravitational lensing occurs when a massive celestial body (like a galaxy cluster) bends the path of light from a background source.
• Albert Einstein predicted this effect in his 1915 theory of general relativity as a consequence of spacetime curvature.
• The massive foreground object acts as a natural cosmic telescope, magnifying distant galaxies that would otherwise be invisible.
• Lensing can produce multiple, distorted, or ring-shaped images (Einstein rings) of the background object.

The astronomer wants to present the practical utility of gravitational lensing to an audience unfamiliar with observational astronomy. Which choice best accomplishes this goal?`,
      options: [
        'By acting as natural cosmic telescopes that magnify otherwise invisible distant galaxies, gravitational lenses allow astronomers to observe the deep universe.',
        'Gravitational lensing was predicted by Albert Einstein in 1915 as a consequence of spacetime curvature.',
        'Massive galaxy clusters curve surrounding spacetime, creating ring-shaped images called Einstein rings.',
        'Light traveling from distant background objects is bent when passing massive foreground celestial bodies.'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The prompt requires explaining why gravitational lensing is useful to astronomers.',
        whyCorrect: 'Option A focuses on the practical observational benefit: acting as a natural telescope to magnify otherwise invisible distant galaxies.',
        distractorAnalysis: [
          { optionIndex: 1, optionLabel: 'B', optionText: 'Gravitational lensing was predicted by Albert Einstein...', whyWrong: 'States historical theoretical origins rather than observational utility.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Massive galaxy clusters curve surrounding spacetime...', whyWrong: 'Describes optical distortion patterns without explaining how astronomers benefit.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Light traveling from distant background objects...', whyWrong: 'Defines the physics mechanism without explaining its observational value.' }
        ]
      }
    },
    {
      questionNumber: 68,
      id: 'ch6-q68',
      difficulty: 'Hard',
      skillTag: 'Rhetorical Synthesis - Geology Mechanism',
      prompt: `A geochemist studying karst hydrology documented the following chemical reactions from an underground cave survey:
• Speleothems (stalactites and stalagmites) form in limestone caves through mineral precipitation.
• Rainwater absorbs atmospheric carbon dioxide to form weak carbonic acid, which dissolves underground calcium carbonate bedrock.
• When the calcium-rich water drips into an aerated cave chamber, carbon dioxide degasses into the air.
• Loss of carbon dioxide reduces the water's acidity, causing dissolved calcite to precipitate into mineral formations.

The geochemist wants to explain the chemical mechanism behind calcite precipitation for an audience of cave geology enthusiasts. Which choice best accomplishes this goal?`,
      options: [
        'Calcite precipitates when dripping cave water degasses carbon dioxide into the chamber air, reducing acidity and forcing dissolved minerals out of solution.',
        'Speleothems such as stalactites and stalagmites are mineral formations commonly found in limestone caves.',
        'Rainwater absorbs atmospheric carbon dioxide to create carbonic acid, which dissolves limestone bedrock underground.',
        'Limestone cave systems are carved out over millennia by acidic groundwater running through bedrock fractures.'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The prompt specifically asks why calcite precipitates inside cave chambers.',
        whyCorrect: 'Option A gives the precise chemical cause: degassing of CO2 into cave air reduces acidity, triggering mineral precipitation.',
        distractorAnalysis: [
          { optionIndex: 1, optionLabel: 'B', optionText: 'Speleothems such as stalactites and stalagmites...', whyWrong: 'Defines speleothems without explaining the precipitation mechanism.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Rainwater absorbs atmospheric carbon dioxide...', whyWrong: 'Explains bedrock dissolution, which is the opposite of precipitation.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Limestone cave systems are carved out over...', whyWrong: 'Describes cave formation generally rather than mineral precipitation.' }
        ]
      }
    },
    {
      questionNumber: 69,
      id: 'ch6-q69',
      difficulty: 'Medium',
      skillTag: 'Rhetorical Synthesis - Historical Cartography',
      prompt: `A historical geographer preparing a seminar on Renaissance nautical cartography gathered the following archival notes:
• In 1569, Flemish geographer Gerardus Mercator developed the Mercator map projection.
• The projection represents lines of constant compass bearing (rhumb lines) as straight segments.
• This geometric property made the map indispensable for transoceanic maritime navigation.
• However, the projection severely distorts landmass sizes near the poles, making Greenland appear as large as Africa.

The geographer wants to present the historical utility of the Mercator projection for a seminar on transatlantic navigation. Which choice best accomplishes this goal?`,
      options: [
        'The Mercator projection became essential for sailors because it depicts constant compass bearings as straight lines, greatly simplifying nautical navigation.',
        'Developed in 1569 by Gerardus Mercator, the Mercator projection is one of the most famous world maps in history.',
        'Although useful for sailing, the Mercator projection severely distorts the geographical scale of polar landmasses like Greenland.',
        'In the Mercator projection, Greenland appears roughly equal in size to the entire continent of Africa.'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The prompt requires explaining why navigators favored the Mercator map.',
        whyCorrect: 'Option A explicitly links the straight-line compass bearing property to nautical navigational simplicity.',
        distractorAnalysis: [
          { optionIndex: 1, optionLabel: 'B', optionText: 'Developed in 1569 by Gerardus Mercator...', whyWrong: 'States author and date without explaining navigational popularity.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Although useful for sailing, the Mercator projection...', whyWrong: 'Focuses on polar landmass distortion rather than the navigational utility.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'In the Mercator projection, Greenland appears...', whyWrong: 'Highlights distortion flaw instead of navigational value.' }
        ]
      }
    },
    {
      questionNumber: 70,
      id: 'ch6-q70',
      difficulty: 'Elite',
      skillTag: 'Rhetorical Synthesis - Neurobiology Transmission',
      prompt: `A neurophysiologist drafting a lecture module on electro-chemical signaling compiled the following synaptic mechanism notes:
• Chemical synapses transmit electrical signals between neurons using neurotransmitter molecules.
• An action potential reaching the presynaptic axon terminal triggers an influx of voltage-gated calcium ions.
• Calcium influx causes synaptic vesicles to fuse with the membrane, releasing neurotransmitters into the synaptic cleft.
• Neurotransmitters diffuse across the cleft and bind to receptor proteins on the postsynaptic dendrite, altering its electrical potential.

The neurophysiologist wants to summarize the biochemical role of calcium ions for an introductory neuroscience lecture. Which choice best accomplishes this goal?`,
      options: [
        'During synaptic transmission, the influx of calcium ions into the axon terminal triggers synaptic vesicles to fuse with the membrane and release neurotransmitters.',
        'Chemical synapses use neurotransmitters to communicate electrical signals between neighboring neurons.',
        'Neurotransmitters diffuse across the synaptic cleft and bind to postsynaptic receptor proteins to alter membrane potential.',
        'Action potentials propagate along neuronal axons until reaching specialized presynaptic nerve terminals.'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The prompt specifically targets the exact biological function of calcium ions in synaptic transmission.',
        whyCorrect: 'Option A details calcium\'s specific role: entering the terminal to trigger vesicle fusion and neurotransmitter release.',
        distractorAnalysis: [
          { optionIndex: 1, optionLabel: 'B', optionText: 'Chemical synapses use neurotransmitters to...', whyWrong: 'General definition of synapses that omits calcium ions entirely.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Neurotransmitters diffuse across the synaptic cleft...', whyWrong: 'Describes receptor binding after neurotransmitter release, omitting calcium.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Action potentials propagate along neuronal axons...', whyWrong: 'Describes action potential propagation without mentioning calcium ions.' }
        ]
      }
    }
  ]
};

// ==========================================
// BLOCK 8: RHETORICAL SYNTHESIS - SIMILARITY, CONTRAST & CATEGORIZATION (Q71 - Q80)
// ==========================================
export const EXERCISE_BLOCK_8: WritingExerciseBlock = {
  blockNumber: 8,
  title: 'Block 8 Exercises: Rhetorical Synthesis — Similarity, Contrast & Categorization',
  description: '10 Questions (Questions 71–80) testing prompt-goal alignment for taxonomical categorization, cross-system comparisons, and structural differences.',
  questions: [
    {
      questionNumber: 71,
      id: 'ch6-q71',
      difficulty: 'Hard',
      skillTag: 'Rhetorical Synthesis - Structural Dichotomy',
      prompt: `A cellular biologist preparing a comparative cytology chart organized the following genomic structure notes:
• Prokaryotic cells (such as bacteria and archaea) lack a membrane-bound nucleus and membrane-bound organelles.
• Their circular DNA resides in an unbound cytoplasmic region called the nucleoid.
• Eukaryotic cells (such as animals, plants, and fungi) contain linear DNA housed inside a membrane-bound nucleus.
• Eukaryotes also possess specialized membrane-bound organelles like mitochondria and endoplasmic reticulum.

The biologist wants to present the structural differences in DNA organization between prokaryotes and eukaryotes to introductory biology students. Which choice best accomplishes this goal?`,
      options: [
        'Unlike eukaryotes, which house linear DNA inside a membrane-bound nucleus, prokaryotes organize circular DNA within an unbound cytoplasmic nucleoid.',
        'Prokaryotic organisms include bacteria and archaea, whereas eukaryotic organisms include plants, animals, and fungi.',
        'Eukaryotic cells contain specialized membrane-bound organelles such as mitochondria and the endoplasmic reticulum.',
        'Both prokaryotes and eukaryotes rely on DNA to store genetic instructions for cellular life.'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The prompt requires contrasting genetic material organization between prokaryotes and eukaryotes.',
        whyCorrect: 'Option A directly contrasts both the structure (linear vs. circular) and compartmentalization (membrane-bound nucleus vs. unbound nucleoid) of DNA.',
        distractorAnalysis: [
          { optionIndex: 1, optionLabel: 'B', optionText: 'Prokaryotic organisms include bacteria...', whyWrong: 'Lists taxonomic examples without discussing genetic material organization.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Eukaryotic cells contain specialized...', whyWrong: 'Mentions organelles without contrasting DNA organization.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Both prokaryotes and eukaryotes rely on DNA...', whyWrong: 'States a similarity rather than the required contrast.' }
        ]
      }
    },
    {
      questionNumber: 72,
      id: 'ch6-q72',
      difficulty: 'Medium',
      skillTag: 'Rhetorical Synthesis - Shared Architectural Influence',
      prompt: `An architectural historian preparing a lecture on Neoclassical civic architecture compiled the following structural notes:
• The Pantheon in Rome was completed around 125 CE during the reign of Emperor Hadrian.
• It features a massive unreinforced concrete dome fronted by a classical portico of Corinthian granite columns.
• Thomas Jefferson designed the Rotunda at the University of Virginia in 1819.
• Jefferson explicitly modeled the Rotunda as a half-scale architectural homage to the Pantheon.

The historian wants to introduce the architectural homage between the Rotunda and the Pantheon to a design history class. Which choice best accomplishes this goal?`,
      options: [
        'Designed in 1819, Thomas Jefferson\'s Rotunda at the University of Virginia was explicitly modeled as a half-scale homage to Rome\'s ancient Pantheon.',
        'The Pantheon in Rome was constructed around 125 CE with a massive unreinforced concrete dome and Corinthian columns.',
        'Thomas Jefferson was an American statesman and architect who designed the campus of the University of Virginia.',
        'Both the Roman Empire and nineteenth-century America constructed classical civic monuments.'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The prompt requires emphasizing the direct architectural connection between the Pantheon and the Rotunda.',
        whyCorrect: 'Option A explicitly links the two structures, identifying the Rotunda as Jefferson\'s half-scale homage to the Pantheon.',
        distractorAnalysis: [
          { optionIndex: 1, optionLabel: 'B', optionText: 'The Pantheon in Rome was constructed...', whyWrong: 'Describes only the Pantheon, omitting Jefferson and the Rotunda.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Thomas Jefferson was an American statesman...', whyWrong: 'Provides biographical details about Jefferson without mentioning the Pantheon.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Both the Roman Empire and nineteenth-century...', whyWrong: 'Broad historical generalism that omits both specific buildings.' }
        ]
      }
    },
    {
      questionNumber: 73,
      id: 'ch6-q73',
      difficulty: 'Hard',
      skillTag: 'Rhetorical Synthesis - Astronomical Contrast',
      prompt: `A planetary scientist outlining an introductory astrophysics curriculum recorded the following planetary formation data:
• Terrestrial planets (Mercury, Venus, Earth, Mars) are composed primarily of dense silicate rock and metallic iron cores.
• They have high mean densities (over 3.9 g/cm³) and solid, impact-cratered surfaces.
• Jovian gas giants (Jupiter, Saturn) consist predominantly of hydrogen and helium surrounding small rocky/metallic cores.
• They have low mean densities (below 1.4 g/cm³) and lack any well-defined solid planetary surface.

The scientist wants to contrast planetary density and surfaces for an introductory astronomy lesson. Which choice best accomplishes this goal?`,
      options: [
        'Unlike dense, rocky terrestrial planets with solid surfaces, Jovian gas giants have low densities and consist primarily of hydrogen and helium without a solid surface.',
        'The solar system contains four inner terrestrial planets and four outer Jovian gas giant worlds.',
        'Terrestrial planets like Earth and Mars possess metallic iron cores encased in silicate rock mantles.',
        'Jupiter and Saturn are massive planets composed mostly of lightweight hydrogen and helium gases.'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The prompt specifies contrasting both compositional density and surface nature.',
        whyCorrect: 'Option A directly contrasts both aspects: dense/rocky/solid (terrestrial) versus low-density/gaseous/no solid surface (Jovian).',
        distractorAnalysis: [
          { optionIndex: 1, optionLabel: 'B', optionText: 'The solar system contains four inner...', whyWrong: 'States orbital taxonomy without contrasting density or surface features.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Terrestrial planets like Earth and Mars...', whyWrong: 'Describes terrestrial planets only, omitting Jovian gas giants.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Jupiter and Saturn are massive planets...', whyWrong: 'Describes gas giants only, omitting terrestrial planets.' }
        ]
      }
    },
    {
      questionNumber: 74,
      id: 'ch6-q74',
      difficulty: 'Elite',
      skillTag: 'Rhetorical Synthesis - Ecological Adaptation Comparison',
      prompt: `An evolutionary botanist preparing a seminar on morphological convergence compiled the following desert flora notes:
• Cactaceae (cacti) are native to the Americas and have fleshy stems, spines, and CAM photosynthesis to conserve water.
• Euphorbiaceae (succulent spurges) are native to arid regions of Africa and possess remarkably similar fleshy stems and spines.
• Despite their near-identical physical appearance, cacti and succulent spurges belong to completely unrelated plant families.
• This structural resemblance arose through convergent evolution in response to comparable arid desert climates.

The botanist wants to explain how convergent evolution shaped desert plant traits for an evolutionary biology seminar. Which choice best accomplishes this goal?`,
      options: [
        'Through convergent evolution, unrelated cacti and African spurges developed remarkably similar fleshy stems and spines in response to similar arid climates.',
        'Cacti are native to the Americas, whereas succulent spurges evolved across arid desert landscapes in Africa.',
        'Both cacti and succulent spurges utilize succulent tissues and sharp spines to protect against desert herbivores.',
        'Plant species in arid environments often develop specialized biochemical adaptations like CAM photosynthesis.'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The prompt requires explaining how convergent evolution caused the resemblance between these two plant families.',
        whyCorrect: 'Option A explicitly links the evolutionary mechanism (convergent evolution) to the shared traits (fleshy stems, spines) and shared selection pressures (arid climates).',
        distractorAnalysis: [
          { optionIndex: 1, optionLabel: 'B', optionText: 'Cacti are native to the Americas...', whyWrong: 'Contrasts geographic origins without explaining convergent evolution.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Both cacti and succulent spurges utilize...', whyWrong: 'Lists traits without mentioning convergent evolution or separate lineage.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Plant species in arid environments often...', whyWrong: 'Broad statement on desert plants omitting the specific species comparison.' }
        ]
      }
    },
    {
      questionNumber: 75,
      id: 'ch6-q75',
      difficulty: 'Medium',
      skillTag: 'Rhetorical Synthesis - Musical Style Categorization',
      prompt: `A music historian writing a comparative analysis of mid-century jazz movements compiled the following stylistic notes:
• Bebop emerged in the 1940s, characterized by fast tempos, complex harmonic chord substitutions, and virtuosic improvisation (e.g., Charlie Parker).
• Cool jazz developed in the late 1940s as a reaction to bebop, emphasizing relaxed tempos, lighter tones, and structured arrangements (e.g., Miles Davis).
• Both styles represented major evolutionary milestones in modern American jazz.
• Jazz musicians frequently transitioned between bebop and cool jazz ensembles.

The historian wants to present the stylistic differences between bebop and cool jazz to an audience unfamiliar with modern American jazz. Which choice best accomplishes this goal?`,
      options: [
        'While bebop featured blistering tempos and intricate harmonic improvisation, cool jazz favored relaxed tempos, lighter tones, and structured arrangements.',
        'Bebop and cool jazz emerged during the 1940s as foundational movements in modern American jazz history.',
        'Pioneering saxophonist Charlie Parker was a leading innovator of the fast-paced 1940s bebop movement.',
        'Miles Davis recorded influential cool jazz albums characterized by understated tones and arranged melodies.'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The prompt demands contrasting the musical characteristics of both jazz styles.',
        whyCorrect: 'Option A directly sets bebop\'s fast tempos and intricate improvisation against cool jazz\'s relaxed tempos, lighter tones, and structured arrangements.',
        distractorAnalysis: [
          { optionIndex: 1, optionLabel: 'B', optionText: 'Bebop and cool jazz emerged during the...', whyWrong: 'States era and historical importance without contrasting musical traits.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Pioneering saxophonist Charlie Parker...', whyWrong: 'Focuses on Parker and bebop, omitting cool jazz.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Miles Davis recorded influential cool jazz...', whyWrong: 'Focuses on Davis and cool jazz, omitting bebop.' }
        ]
      }
    },
    {
      questionNumber: 76,
      id: 'ch6-q76',
      difficulty: 'Hard',
      skillTag: 'Rhetorical Synthesis - Structural Classification',
      prompt: `A petrologist developing a mineralogy laboratory guide recorded the following igneous crystallization observations:
• Igneous rocks crystallize from cooling molten magma or lava.
• Intrusive (plutonic) igneous rocks, such as granite, cool slowly deep underground, forming large, visible mineral crystals.
• Extrusive (volcanic) igneous rocks, such as basalt and obsidian, cool rapidly at Earth's surface, resulting in fine-grained or glassy textures.
• Both rock types originate from molten silicate precursors.

The petrologist wants to summarize how cooling speed determines crystal texture for an introductory geology course. Which choice best accomplishes this goal?`,
      options: [
        'Slow underground cooling produces large visible crystals in intrusive rocks like granite, whereas rapid surface cooling creates fine-grained textures in extrusive rocks like basalt.',
        'Igneous rocks such as granite and basalt originate from molten silicate magmas cooling in geological environments.',
        'Intrusive igneous rocks form deep within Earth\'s crust, while extrusive rocks erupt onto the surface.',
        'Granite contains visible mineral crystals, making it a common material for commercial building facades.'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The prompt requires linking cooling rates (slow vs. rapid) directly to crystal size in both rock classes.',
        whyCorrect: 'Option A explicitly links cooling speed (slow vs. rapid) with texture outcome (large visible crystals vs. fine-grained) across intrusive and extrusive examples.',
        distractorAnalysis: [
          { optionIndex: 1, optionLabel: 'B', optionText: 'Igneous rocks such as granite and basalt...', whyWrong: 'Mentions origin without explaining cooling rates or crystal size.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Intrusive igneous rocks form deep within...', whyWrong: 'Focuses on location rather than the relationship between cooling rate and crystal size.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Granite contains visible mineral crystals...', whyWrong: 'Mentions only granite and its commercial use, omitting cooling physics and extrusive rocks.' }
        ]
      }
    },
    {
      questionNumber: 77,
      id: 'ch6-q77',
      difficulty: 'Elite',
      skillTag: 'Rhetorical Synthesis - Linguistic Typology',
      prompt: `A lecturer preparing a linguistics presentation on grammatical mechanics has compiled the following notes:
• Synthetic languages (such as Latin and Russian) use inflectional affixes attached to root words to indicate grammatical relationships like case, tense, and number.
• Analytic (isolating) languages (such as Mandarin Chinese and Vietnamese) rely primarily on strict word order and independent particles rather than word inflections.
• English exhibits mixed typology, having transitioned historically from a highly synthetic Old English to a predominantly analytic Modern English.
• Linguistic typologists classify languages based on their morpheme-to-word ratios.

The lecturer wants to contrast grammatical mechanics in synthetic and analytic languages. Which revision most effectively contrasts these mechanics?`,
      options: [
        'Synthetic languages express grammatical roles through inflectional affixes on words, whereas analytic languages rely on word order and separate particles.',
        'Latin and Russian are synthetic languages, while Mandarin Chinese and Vietnamese represent analytic language systems.',
        'Over historical centuries, the English language evolved from a synthetic structure into a mostly analytic grammatical system.',
        'Linguistic typologists categorize human languages according to their morpheme-to-word ratios and word order patterns.'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The prompt demands contrasting the method of expressing grammatical relationships between synthetic and analytic languages.',
        whyCorrect: 'Option A contrasts the mechanisms: inflectional affixes (synthetic) versus word order and particles (analytic).',
        distractorAnalysis: [
          { optionIndex: 1, optionLabel: 'B', optionText: 'Latin and Russian are synthetic languages...', whyWrong: 'Lists language examples without explaining how grammar is expressed.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Over historical centuries, the English language...', whyWrong: 'Focuses on the history of English rather than contrasting the two linguistic types.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Linguistic typologists categorize human languages...', whyWrong: 'Describes typological classification generally without detailing grammatical mechanics.' }
        ]
      }
    },
    {
      questionNumber: 78,
      id: 'ch6-q78',
      difficulty: 'Medium',
      skillTag: 'Rhetorical Synthesis - Shared Artistic Objective',
      prompt: `An art historian preparing a catalog essay on French Impressionism and Post-Impressionism gathered the following biographical notes:
• Claude Monet painted his *Water Lilies* series in Giverny, France, capturing transient optical effects of daylight on water.
• Paul Cézanne painted his *Mont Sainte-Victoire* series in Provence, seeking to reveal underlying geometric structures in natural landscapes.
• Both French artists worked in serial iterations, returning repeatedly to the same visual subject across decades.
• Their serial practices paved the way for early twentieth-century modernist movements like Cubism and Abstraction.

The historian wants to present the shared serial methodology of Monet and Cézanne to an art history seminar. Which choice best accomplishes this goal?`,
      options: [
        'Both Monet and Cézanne embraced serial methodology, repeatedly painting the same subject across decades to explore light and structure.',
        'Claude Monet\'s *Water Lilies* series focused on transient sunlight reflections across garden ponds in Giverny.',
        'Paul Cézanne painted the rugged limestone facade of Mont Sainte-Victoire in southern France.',
        'Modernist movements like Cubism and Abstraction were influenced by nineteenth-century French landscape painting.'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The prompt requires highlighting their shared artistic methodology.',
        whyCorrect: 'Option A explicitly points out their shared approach: working in serial iterations on the same subject over decades.',
        distractorAnalysis: [
          { optionIndex: 1, optionLabel: 'B', optionText: 'Claude Monet\'s Water Lilies series focused...', whyWrong: 'Describes Monet only, omitting Cézanne.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Paul Cézanne painted the rugged limestone...', whyWrong: 'Describes Cézanne only, omitting Monet.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Modernist movements like Cubism and Abstraction...', whyWrong: 'Mentions subsequent artistic movements without highlighting Monet and Cézanne\'s shared methodology.' }
        ]
      }
    },
    {
      questionNumber: 79,
      id: 'ch6-q79',
      difficulty: 'Hard',
      skillTag: 'Rhetorical Synthesis - Thermal Energy Transfer Contrast',
      prompt: `A thermal physicist preparing an instructional guide on thermodynamics compiled the following energy transfer principles:
• Conduction transfers heat through direct physical contact as vibrating atoms collide within a stationary medium.
• Convection transfers heat via the macroscopic bulk movement of heated fluids (liquids or gases) driven by density differences.
• Radiation transfers heat through electromagnetic waves and requires no physical medium, allowing heat to travel through a vacuum.
• All three mechanisms operate simultaneously in complex thermal systems like Earth's atmosphere.

The physicist wants to highlight what distinguishes thermal radiation from matter-dependent heat transfer mechanisms. Which choice best accomplishes this goal?`,
      options: [
        'Unlike conduction and convection, which require physical matter to transfer heat, thermal radiation transfers energy via electromagnetic waves through a vacuum.',
        'Conduction transfers heat through atom collisions, while convection relies on macroscopic fluid currents.',
        'Earth\'s atmospheric thermal dynamics involve the simultaneous action of conduction, convection, and radiation.',
        'Thermal energy moves through physical substances through vibrational collisions and bulk fluid displacement.'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The prompt requires emphasizing the unique difference of radiation compared to conduction and convection.',
        whyCorrect: 'Option A highlights the unique distinction: radiation transfers heat through electromagnetic waves across a vacuum without needing a physical medium.',
        distractorAnalysis: [
          { optionIndex: 1, optionLabel: 'B', optionText: 'Conduction transfers heat through atom collisions...', whyWrong: 'Contrasts conduction and convection but omits radiation.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Earth\'s atmospheric thermal dynamics involve...', whyWrong: 'States that all three operate together without explaining the unique difference.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Thermal energy moves through physical substances...', whyWrong: 'Describes only matter-dependent transfer, omitting radiation.' }
        ]
      }
    },
    {
      questionNumber: 80,
      id: 'ch6-q80',
      difficulty: 'Elite',
      skillTag: 'Rhetorical Synthesis - Economic Market Structures',
      prompt: `An economist preparing an industrial organization lecture outline compiled the following market classification notes:
• In perfect competition, numerous small firms sell identical commodities, act as price-takers, and face zero barriers to entry.
• In a monopoly, a single dominant firm sells a unique product with no close substitutes, sets market prices, and is shielded by high barriers to entry.
• Monopolistic competition and oligopoly represent intermediate market structures with varying degrees of product differentiation and market power.
• Economists use market structure models to analyze pricing efficiency and consumer welfare.

The economist wants to contrast firm pricing power and entry barriers between competitive and monopolistic markets for an economics brief. Which choice best accomplishes this goal?`,
      options: [
        'In perfect competition, firms are price-takers facing zero entry barriers, whereas a monopoly firm sets market prices and is shielded by high barriers to entry.',
        'Economists utilize theoretical market models to evaluate consumer surplus and deadweight loss across industry sectors.',
        'Monopolistic competition and oligopolies represent intermediate market structures between competition and monopoly.',
        'Monopolies control unique goods with no viable substitutes, allowing single producers to dominate sales.'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The prompt specifically demands contrasting pricing power and barriers to entry between perfect competition and monopoly.',
        whyCorrect: 'Option A explicitly contrasts both elements: price-taker / zero barriers (perfect competition) versus price-setter / high barriers (monopoly).',
        distractorAnalysis: [
          { optionIndex: 1, optionLabel: 'B', optionText: 'Economists utilize theoretical market models...', whyWrong: 'Discusses economic modeling generally without contrasting the two structures.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Monopolistic competition and oligopolies...', whyWrong: 'Mentions intermediate market forms without contrasting perfect competition and monopoly.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Monopolies control unique goods with no viable...', whyWrong: 'Describes monopoly only, omitting perfect competition.' }
        ]
      }
    }
  ]
};

// ==========================================
// BLOCK 9: RHETORICAL SYNTHESIS - GENERALIZATION, SPECIFICATION & COMBINING (Q81 - Q90)
// ==========================================
export const EXERCISE_BLOCK_9: WritingExerciseBlock = {
  blockNumber: 9,
  title: 'Block 9 Exercises: Rhetorical Synthesis — Generalization, Specification & Integration',
  description: '10 Questions (Questions 81–90) testing synthesis across broad generalizations, specific statistical extractions, and multi-note clausal integrations.',
  questions: [
    {
      questionNumber: 81,
      id: 'ch6-q81',
      difficulty: 'Hard',
      skillTag: 'Rhetorical Synthesis - Quantitative Specification',
      prompt: `A marine cartographer updating bathymetric survey records compiled the following expedition logs:
• The Mariana Trench in the western Pacific Ocean contains Challenger Deep, the deepest known point in Earth's oceans.
• In 1960, oceanographer Jacques Piccard and Navy Lieutenant Don Walsh completed the first crewed descent aboard the bathyscaphe *Trieste*.
• In 2012, filmmaker and explorer James Cameron piloted the submersible *Deepsea Challenger* to Challenger Deep.
• Cameron recorded a maximum ocean depth of 10,908 meters (35,787 feet).

The cartographer wants to specify the precise quantitative depth of Challenger Deep for an oceanographic registry. Which choice best accomplishes this goal?`,
      options: [
        'During his 2012 solo dive in the *Deepsea Challenger*, James Cameron recorded Challenger Deep\'s depth at 10,908 meters (35,787 feet).',
        'Located in the western Pacific\'s Mariana Trench, Challenger Deep is recognized as the deepest point in Earth\'s oceans.',
        'In 1960, Jacques Piccard and Don Walsh completed the first crewed descent into Challenger Deep aboard the *Trieste*.',
        'Submersibles have descended into the Mariana Trench to document extreme hadal ocean depths.'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The prompt strictly requires providing the specific depth measurement.',
        whyCorrect: 'Option A provides the exact quantitative depth metric: 10,908 meters (35,787 feet).',
        distractorAnalysis: [
          { optionIndex: 1, optionLabel: 'B', optionText: 'Located in the western Pacific\'s Mariana Trench...', whyWrong: 'Names the location without providing the numerical depth measurement.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'In 1960, Jacques Piccard and Don Walsh completed...', whyWrong: 'Describes the 1960 expedition without giving the depth figure.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Submersibles have descended into the Mariana...', whyWrong: 'Vague summary with no specific depth numbers.' }
        ]
      }
    },
    {
      questionNumber: 82,
      id: 'ch6-q82',
      difficulty: 'Medium',
      skillTag: 'Rhetorical Synthesis - Broad Generalization',
      prompt: `A behavioral ecologist preparing a guest lecture on evolutionary signaling assembled the following case studies:
• Honeybees (*Apis mellifera*) perform a figure-eight "waggle dance" to communicate the direction and distance of floral nectar sources.
• Naked mole-rats (*Heterocephalus glaber*) use colony-specific vocal chirps to maintain social hierarchy and identify intruders.
• Bottlenose dolphins (*Tursiops truncatus*) produce individualized "signature whistles" that function as vocal names.
• Across diverse taxonomic clades, animal species have evolved intricate communication systems to coordinate social behaviors.

The ecologist wants to present a broad generalization about animal communication supported by these examples to an audience of biology students. Which choice best accomplishes this goal?`,
      options: [
        'Across diverse species—from honeybees dancing for nectar to dolphins using signature whistles—animals have evolved complex communication systems to coordinate social behavior.',
        'Honeybees perform a figure-eight waggle dance to communicate nectar distance and direction to hive mates.',
        'Bottlenose dolphins communicate using signature whistles that allow individual pod members to identify each other.',
        'Naked mole-rats live in subterranean colonies where vocal chirps help maintain social organization.'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The prompt requires a broad generalization supported by the specific examples in the notes.',
        whyCorrect: 'Option A synthesizes the overarching thesis (complex communication systems evolved across diverse taxa) using the concrete animal examples as supporting proof.',
        distractorAnalysis: [
          { optionIndex: 1, optionLabel: 'B', optionText: 'Honeybees perform a figure-eight waggle dance...', whyWrong: 'Focuses exclusively on honeybees, omitting the broad generalization.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Bottlenose dolphins communicate using signature...', whyWrong: 'Focuses exclusively on dolphins.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Naked mole-rats live in subterranean colonies...', whyWrong: 'Focuses exclusively on naked mole-rats.' }
        ]
      }
    },
    {
      questionNumber: 83,
      id: 'ch6-q83',
      difficulty: 'Hard',
      skillTag: 'Rhetorical Synthesis - Multi-Note Synthesis',
      prompt: `A historian of pharmacology preparing a timeline on antibiotic therapeutics gathered the following biographical notes:
• In 1928, Alexander Fleming discovered penicillin when *Penicillium notatum* mold contaminated a staphylococcus culture plate.
• Penicillin was the world's first mass-produced natural antibiotic.
• In the early 1940s, Howard Florey and Ernst Chain developed chemical purification methods to produce clinical-grade penicillin.
• Mass distribution of penicillin during World War II saved millions of soldiers and civilians from fatal bacterial wound infections.

The historian wants to acknowledge both the initial discovery and the subsequent clinical development of penicillin for a medical history timeline. Which choice best accomplishes this goal?`,
      options: [
        'Although Alexander Fleming discovered penicillin in 1928, it was Howard Florey and Ernst Chain who developed the purification methods needed to produce it as a lifesaving clinical antibiotic.',
        'Alexander Fleming discovered penicillin in 1928 after observing mold contamination on a staphylococcus culture plate.',
        'Mass distribution of penicillin during World War II prevented millions of deaths from fatal bacterial infections.',
        'Howard Florey and Ernst Chain conducted pharmaceutical research during the 1940s to purify antibacterial compounds.'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The prompt requires acknowledging both the original discovery (Fleming) and the subsequent clinical purification (Florey and Chain).',
        whyCorrect: 'Option A integrates Fleming\'s 1928 discovery with Florey and Chain\'s 1940s clinical purification into a cohesive synthesis.',
        distractorAnalysis: [
          { optionIndex: 1, optionLabel: 'B', optionText: 'Alexander Fleming discovered penicillin in 1928...', whyWrong: 'Omits Florey and Chain completely.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Mass distribution of penicillin during World War II...', whyWrong: 'Focuses on wartime impact without naming the scientists or their work.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Howard Florey and Ernst Chain conducted pharmaceutical...', whyWrong: 'Omits Fleming\'s initial discovery.' }
        ]
      }
    },
    {
      questionNumber: 84,
      id: 'ch6-q84',
      difficulty: 'Elite',
      skillTag: 'Rhetorical Synthesis - Quantitative Economic Synthesis',
      prompt: `An energy analyst writing an industry brief on renewable grid economics compiled the following market data:
• Global offshore wind power capacity expanded from 3 gigawatts (GW) in 2010 to over 64 GW by 2023.
• The levelized cost of electricity (LCOE) for offshore wind dropped by over 60 percent during that same period.
• Technological factors driving cost reductions include larger turbine rotor diameters (exceeding 220 meters) and automated installation vessels.
• The United Kingdom and China account for over 65 percent of installed global offshore wind capacity.

The analyst wants to highlight the economic trend linking expanding wind capacity to falling costs for a clean energy report. Which choice best accomplishes this goal?`,
      options: [
        'As global offshore wind capacity surged from 3 GW in 2010 to over 64 GW by 2023, the levelized cost of offshore wind electricity dropped by more than 60 percent.',
        'Technological innovations such as 220-meter turbine rotors and specialized installation vessels reduced offshore wind costs.',
        'The United Kingdom and China together represent more than 65 percent of global installed offshore wind capacity.',
        'Offshore wind power is an increasingly competitive renewable energy source operating in maritime environments.'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The prompt demands highlighting the correlation between expanding capacity (3 GW to 64 GW) and falling costs (dropped by >60%).',
        whyCorrect: 'Option A explicitly links the capacity surge (3 GW to 64 GW) directly to the cost reduction (>60% drop).',
        distractorAnalysis: [
          { optionIndex: 1, optionLabel: 'B', optionText: 'Technological innovations such as 220-meter...', whyWrong: 'Mentions turbine design without highlighting the capacity vs. cost trend.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'The United Kingdom and China together represent...', whyWrong: 'Focuses on national market share rather than the capacity/cost correlation.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Offshore wind power is an increasingly competitive...', whyWrong: 'Vague promotional claim with no quantitative metrics.' }
        ]
      }
    },
    {
      questionNumber: 85,
      id: 'ch6-q85',
      difficulty: 'Hard',
      skillTag: 'Rhetorical Synthesis - Ecological Role',
      prompt: `A marine ecologist drafting a coastal conservation overview recorded the following trophic cascade observations:
• Sea otters (*Enhydra lutris*) prey extensively on herbivorous sea urchins in temperate Pacific kelp forests.
• When sea otter populations decline, sea urchin numbers explode, leading to overgrazing of kelp holdfasts and creating barren seafloors ("urchin barrens").
• Healthy kelp forests provide critical nursery habitat for hundreds of commercial fish species and sequester substantial oceanic carbon.
• Because their presence maintains the entire ecosystem structure, sea otters are classified as a keystone species.

The ecologist wants to summarize why sea otters serve as a keystone species for an audience of marine conservationists. Which choice best accomplishes this goal?`,
      options: [
        'Sea otters are classified as a keystone species because by preying on kelp-eating urchins, they preserve the kelp forest ecosystem that sustains hundreds of marine species.',
        'Sea otters inhabit temperate Pacific coastal waters where they feed on marine invertebrates.',
        'When sea otters are absent, exploding sea urchin populations create barren underwater seafloors.',
        'Kelp forests sequester oceanic carbon and provide essential nursery habitats for commercial fish.'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The prompt requires explaining why sea otters are defined as a keystone species.',
        whyCorrect: 'Option A connects the trophic mechanism (eating urchins) to the structural consequence (preserving the kelp ecosystem for other species), justifying the keystone designation.',
        distractorAnalysis: [
          { optionIndex: 1, optionLabel: 'B', optionText: 'Sea otters inhabit temperate Pacific coastal waters...', whyWrong: 'Describes habitat and diet without explaining the keystone role.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'When sea otters are absent, exploding sea urchin...', whyWrong: 'Describes urchin barrens without defining why otters are a keystone species.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Kelp forests sequester oceanic carbon and provide...', whyWrong: 'Describes kelp benefits without mentioning otters.' }
        ]
      }
    },
    {
      questionNumber: 86,
      id: 'ch6-q86',
      difficulty: 'Medium',
      skillTag: 'Rhetorical Synthesis - Historical Audience Adaptation',
      prompt: `A literary scholar examining Revolutionary-era pamphlets organized the following rhetorical analysis notes:
• In January 1776, Thomas Paine published the political pamphlet *Common Sense*.
• Rather than using complex Latinate rhetoric common among eighteenth-century elites, Paine wrote in plain, direct vernacular English.
• He used simple biblical allegories and everyday metaphors to argue that the American colonies should declare independence from Britain.
• The pamphlet sold over 500,000 copies in its first year, transforming public sentiment across all social classes.

The scholar wants to emphasize how Paine adapted his prose style to reach a broad colonial audience. Which choice best accomplishes this goal?`,
      options: [
        'By using plain vernacular English and relatable metaphors rather than elite rhetoric, Paine made *Common Sense* accessible to ordinary readers, driving immense popularity.',
        'Thomas Paine published *Common Sense* in January 1776 to advocate for American independence from Great Britain.',
        '*Common Sense* sold over 500,000 copies across the American colonies in its first year of publication.',
        'Eighteenth-century political pamphlets typically utilized complex Latinate vocabulary to address educated elites.'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The prompt demands emphasizing how Paine\'s writing style drove the pamphlet\'s popularity.',
        whyCorrect: 'Option A directly connects his plain vernacular style and everyday metaphors to broad accessibility and massive popularity.',
        distractorAnalysis: [
          { optionIndex: 1, optionLabel: 'B', optionText: 'Thomas Paine published Common Sense in January 1776...', whyWrong: 'States publication date and theme without discussing writing style.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Common Sense sold over 500,000 copies across...', whyWrong: 'States sales figures without explaining how writing style caused them.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Eighteenth-century political pamphlets typically...', whyWrong: 'Describes typical elite pamphlets without discussing Paine\'s alternative style.' }
        ]
      }
    },
    {
      questionNumber: 87,
      id: 'ch6-q87',
      difficulty: 'Elite',
      skillTag: 'Rhetorical Synthesis - Materials Science Application',
      prompt: `An aerospace engineer preparing a thermal protection system review compiled the following insulation specifications:
• Aerogels are synthetic porous ultralight materials derived from a gel in which the liquid component has been replaced with gas.
• Silica aerogel consists of over 99.8 percent air by volume, making it one of the lowest-density solid materials known.
• Its microscopic nanoporous structure prevents thermal conduction and convection, giving it extraordinary thermal insulating properties.
• NASA utilized silica aerogel insulation to protect the electronics of the Mars *Curiosity* and *Perseverance* rovers against extreme Martian cold.

The engineer wants to present the materials-science rationale for selecting aerogel on Mars rovers to a space engineering panel. Which choice best accomplishes this goal?`,
      options: [
        'Because silica aerogel\'s nanoporous structure provides extraordinary thermal insulation at an ultra-low weight, NASA chose it to protect Mars rovers from freezing temperatures.',
        'Aerogels are synthetic materials created by replacing the liquid in a gel with gas during supercritical drying.',
        'NASA\'s Mars *Curiosity* and *Perseverance* rovers operate in freezing Martian surface environments.',
        'Silica aerogel contains over 99.8 percent air by volume, making it one of the lightest solid substances on Earth.'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The prompt requires explaining why NASA selected aerogel for Mars rovers.',
        whyCorrect: 'Option A links aerogel\'s specific physical advantages (extraordinary thermal insulation and ultra-low weight) directly to NASA\'s rover protection requirement.',
        distractorAnalysis: [
          { optionIndex: 1, optionLabel: 'B', optionText: 'Aerogels are synthetic materials created by...', whyWrong: 'Explains chemical manufacturing rather than the rover insulation rationale.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'NASA\'s Mars Curiosity and Perseverance rovers...', whyWrong: 'Describes rover environment without mentioning aerogel.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Silica aerogel contains over 99.8 percent air...', whyWrong: 'States density without explaining why NASA chose it for thermal protection.' }
        ]
      }
    },
    {
      questionNumber: 88,
      id: 'ch6-q88',
      difficulty: 'Hard',
      skillTag: 'Rhetorical Synthesis - Linguistic Conservation',
      prompt: `A sociolinguist documenting indigenous language revitalization programs recorded the following field notes:
• The Ainu language is a critically endangered language isolate historically spoken by the indigenous Ainu people of northern Japan.
• In 2008, the Japanese Diet officially recognized the Ainu as an indigenous people with distinct cultural heritage.
• Linguists and community elders have established immersion schools and digitized oral folk epics (*yukar*) to preserve the language.
• Today, fewer than ten native native-fluent speakers remain, though hundreds of second-language learners are revitalizing speech communities.

The sociolinguist wants to summarize current community initiatives aimed at preserving the Ainu language. Which choice best accomplishes this goal?`,
      options: [
        'To preserve the endangered Ainu language, linguists and community elders have established immersion schools and digitized traditional oral epics.',
        'The Ainu language is a language isolate historically spoken by indigenous communities in northern Japan.',
        'In 2008, the Japanese government officially recognized the Ainu people as an indigenous cultural group.',
        'Fewer than ten native-fluent speakers of the Ainu language remain alive today.'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The prompt demands highlighting the specific preservation initiatives.',
        whyCorrect: 'Option A specifies the exact actions being taken: creating immersion schools and digitizing oral folk epics (*yukar*).',
        distractorAnalysis: [
          { optionIndex: 1, optionLabel: 'B', optionText: 'The Ainu language is a language isolate...', whyWrong: 'States linguistic classification without mentioning preservation efforts.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'In 2008, the Japanese government officially...', whyWrong: 'Mentions political recognition rather than language preservation programs.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Fewer than ten native-fluent speakers...', whyWrong: 'States endangerment status rather than revitalization efforts.' }
        ]
      }
    },
    {
      questionNumber: 89,
      id: 'ch6-q89',
      difficulty: 'Medium',
      skillTag: 'Rhetorical Synthesis - Art History Exhibition',
      prompt: `A curator preparing an exhibition catalog on early American modernism recorded the following historical notes:
• In 1913, the International Exhibition of Modern Art (known as the Armory Show) opened in New York City.
• It introduced American audiences for the first time to avant-garde European art movements, including Cubism, Fauvism, and Futurism.
• Marcel Duchamp\'s painting *Nude Descending a Staircase, No. 2* provoked intense public outrage and critical ridicule.
• The exhibition revolutionized the trajectory of American art, prompting domestic painters to abandon traditional academic realism.

The curator wants to highlight the transformative impact of the Armory Show on domestic American painters. Which choice best accomplishes this goal?`,
      options: [
        'By introducing avant-garde European styles like Cubism, the 1913 Armory Show revolutionized American art, leading domestic painters away from academic realism.',
        'In 1913, the Armory Show in New York City exhibited Marcel Duchamp\'s controversial painting *Nude Descending a Staircase, No. 2*.',
        'The Armory Show was an art exhibition held in New York City in the early twentieth century.',
        'Marcel Duchamp\'s artwork was ridiculed by American critics during a 1913 New York exhibition.'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The prompt requires emphasizing the transformative impact of the show on American art.',
        whyCorrect: 'Option A explains how introducing avant-garde European movements transformed domestic painters away from traditional realism.',
        distractorAnalysis: [
          { optionIndex: 1, optionLabel: 'B', optionText: 'In 1913, the Armory Show in New York City...', whyWrong: 'Focuses on Duchamp\'s painting rather than the broader transformation of American art.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'The Armory Show was an art exhibition held...', whyWrong: 'Basic factual statement with no mention of transformative artistic impacts.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Marcel Duchamp\'s artwork was ridiculed...', whyWrong: 'Focuses on critical ridicule of a single painting.' }
        ]
      }
    },
    {
      questionNumber: 90,
      id: 'ch6-q90',
      difficulty: 'Elite',
      skillTag: 'Rhetorical Synthesis - Biomedical Engineering Innovation',
      prompt: `A clinical biomedical researcher drafting a surgical device evaluation compiled the following cardiac pacemaker notes:
• Traditional cardiac pacemakers require surgical chest incisions, transvenous leads inserted through veins, and subcutaneous generator pockets.
• Transvenous leads are vulnerable to insulation degradation, venous thrombosis, and lead fracture over time.
• Leadless pacemakers are miniaturized capsules implanted directly into the right ventricle via a femoral vein catheter.
• Because they eliminate leads and subcutaneous pockets, leadless pacemakers reduce post-implantation complications by over 50 percent.

The researcher wants to summarize how leadless pacemakers overcome the mechanical flaws of traditional transvenous designs. Which choice best accomplishes this goal?`,
      options: [
        'By implanting directly into the heart without transvenous leads or chest pockets, leadless pacemakers eliminate common lead failures and cut surgical complications by over half.',
        'Traditional pacemakers utilize transvenous leads routed through veins into heart chambers from a subcutaneous chest pocket.',
        'Leadless pacemakers are miniaturized self-contained capsules delivered into the right ventricle via a femoral catheter.',
        'Transvenous pacemaker leads can suffer from venous thrombosis and mechanical fracture over decades of use.'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The prompt requires explaining how leadless pacemakers improve upon traditional models.',
        whyCorrect: 'Option A contrasts the direct cardiac implantation of leadless pacemakers with traditional lead designs and highlights the >50% reduction in complications.',
        distractorAnalysis: [
          { optionIndex: 1, optionLabel: 'B', optionText: 'Traditional pacemakers utilize transvenous leads...', whyWrong: 'Describes traditional models without mentioning leadless improvements.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Leadless pacemakers are miniaturized self-contained...', whyWrong: 'Describes insertion without mentioning the elimination of lead defects or complication reduction.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Transvenous pacemaker leads can suffer from...', whyWrong: 'Describes traditional flaws without explaining the leadless solution.' }
        ]
      }
    }
  ]
};

// ==========================================
// BLOCK 10: RHETORICAL SYNTHESIS & TRANSITION MASTER DIAGNOSTIC (Q91 - Q100)
// ==========================================
export const EXERCISE_BLOCK_10: WritingExerciseBlock = {
  blockNumber: 10,
  title: 'Block 10 Exercises: The Master Diagnostic — Capstone Synthesis & Transitions',
  description: '10 Questions (Questions 91–100) combining multi-tier transition diagnosis, complex bullet synthesis, distractors filtering, and prompt goal matching.',
  questions: [
    {
      questionNumber: 91,
      id: 'ch6-q91',
      difficulty: 'Elite',
      skillTag: 'Transition Logic - Astrophysics Boundary Conditions',
      prompt: 'In Newtonian gravity, gravitational force propagates instantaneously across infinite distances as an action-at-a-distance force. ___, in general relativity, gravitational influences propagate at the speed of light in the form of spacetime distortions known as gravitational waves.',
      options: ["Accordingly,","For example,","Moreover,","Conversely,"],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The passage directly contrasts Newtonian mechanics (instantaneous propagation) with relativistic astrophysics (propagation at light speed via gravitational waves).',
        whyCorrect: 'Option A ("In contrast") correctly formalizes the symmetric juxtaposition of the two theoretical frameworks.',
        distractorAnalysis: [
          { optionIndex: 1, optionLabel: 'B', optionText: 'Consequently', whyWrong: 'Relativity is not caused by Newtonian mechanics; it is a contrasting successor paradigm.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Furthermore', whyWrong: 'Treats the two models as additive extensions of each other rather than contrasting physical theories.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'For instance', whyWrong: 'General relativity is not an example of Newtonian gravity.' }
        ]
      }
    },
    {
      questionNumber: 92,
      id: 'ch6-q92',
      difficulty: 'Hard',
      skillTag: 'Transition Logic - Epistemological Qualification',
      prompt: 'High-throughput computational protein folding algorithms can accurately predict static tertiary structures of monomeric proteins within minutes. ___, predicting the dynamic conformational changes of multi-protein complexes under physiological cellular conditions remains an immense computational challenge.',
      options: [
        'However',
        'Therefore',
        'Similarly',
        'Specifically'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The second sentence restricts and qualifies the success of protein algorithms by contrasting monomeric success with dynamic multi-protein complex limitations.',
        whyCorrect: 'Option A ("However") accurately marks the contrast between solved static predictions and unresolved dynamic challenges.',
        distractorAnalysis: [
          { optionIndex: 1, optionLabel: 'B', optionText: 'Therefore', whyWrong: 'Presents dynamic complexity as a deduction caused by monomeric success.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Similarly', whyWrong: 'Suggests dynamic complexes are equally easy to predict, contradicting the sentence.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Specifically', whyWrong: 'Multi-protein limitations are a contrasting challenge, not an exemplifying sub-detail of monomeric success.' }
        ]
      }
    },
    {
      questionNumber: 93,
      id: 'ch6-q93',
      difficulty: 'Elite',
      skillTag: 'Sentence Placement - Neurogenesis Narrative Flow',
      prompt: `[1] For decades, neuroscientists believed that the adult mammalian brain was completely incapable of generating new neurons. [2] In the late 1990s, groundbreaking studies demonstrated that adult neurogenesis occurs continuously in the subgranular zone of the dentate gyrus. [3] These newly born neural progenitor cells migrate and integrate seamlessly into existing hippocampal circuitry. [4] This ongoing cellular integration plays an indispensable role in pattern separation and spatial memory consolidation.

Where should Sentence 3 be placed?`,
      options: ["at the beginning of sentence 1.","immediately before sentence 2.","after sentence 4.","leave in current position."],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Sentence 3 refers to "These newly born neural progenitor cells", which directly connects back to the adult neurogenesis demonstrated in Sentence 2, leading into the cognitive memory functions described in Sentence 4.',
        whyCorrect: 'Position 3 maintains the logical anatomical progression: debunking myth (1) → finding new neurons (2) → cellular integration (3) → functional memory consolidation (4).',
        distractorAnalysis: [
          { optionIndex: 1, optionLabel: 'B', optionText: 'Before sentence 1', whyWrong: 'Refers to newly born cells before the concept of neurogenesis is even introduced.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Before sentence 2', whyWrong: 'Places cellular migration before the discovery of adult neurogenesis.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'After sentence 4', whyWrong: 'Places the physical integration of cells after the functional cognitive benefits have already been explained.' }
        ]
      }
    },
    {
      questionNumber: 94,
      id: 'ch6-q94',
      difficulty: 'Hard',
      skillTag: 'Rhetorical Purpose - Conceptual Demarcation',
      prompt: `[1] In computer science, cryptography systems are traditionally classified into symmetric and asymmetric algorithms. [2] Symmetric encryption uses a single shared secret key for both encryption and decryption, offering rapid processing speeds for bulk data storage. [3] Asymmetric encryption pairs a public key for encryption with a private key for decryption, solving the fundamental security challenge of key distribution across unsecured networks. [4] Modern secure internet communication (such as HTTPS) therefore combines both: using asymmetric cryptography to establish initial identity and exchange keys, followed by symmetric cryptography for high-speed session data transmission.

The primary rhetorical purpose of Sentence 4 is to:`,
      options: [
        'Synthesize the contrasting strengths of symmetric and asymmetric encryption into a hybrid real-world security protocol.',
        'Argue that symmetric encryption is obsolete and should be replaced entirely by asymmetric keys.',
        'Explain the mathematical algorithm used to generate prime-number asymmetric key pairs.',
        'Prove that HTTPS communication is vulnerable to cyber interception across public networks.'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Sentence 4 draws together the two contrasting systems (symmetric and asymmetric) explained in Sentences 2 & 3 to show how modern web protocols combine their respective strengths.',
        whyCorrect: 'Option A accurately identifies Sentence 4 as a synthesis of both cryptographic paradigms into a hybrid protocol.',
        distractorAnalysis: [
          { optionIndex: 1, optionLabel: 'B', optionText: 'Argue that symmetric encryption is obsolete...', whyWrong: 'Contradicts the text, which explains symmetric encryption is essential for high-speed data transmission.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Explain the mathematical algorithm...', whyWrong: 'The passage explains architectural function, not mathematical prime generation.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Prove that HTTPS communication is vulnerable...', whyWrong: 'The text describes HTTPS as a secure hybrid solution, not an insecure system.' }
        ]
      }
    },
    {
      questionNumber: 95,
      id: 'ch6-q95',
      difficulty: 'Elite',
      skillTag: 'Rhetorical Synthesis - Ecological Carbon Dynamics',
      prompt: `A marine biogeochemist preparing a coastal policy assessment recorded the following carbon sink data:
• Coastal blue carbon ecosystems (mangroves, tidal marshes, seagrass meadows) occupy less than 0.5 percent of the global ocean surface.
• These coastal vegetated habitats sequester carbon at rates up to ten times higher per hectare than terrestrial tropical rainforests.
• Waterlogged anaerobic soils in blue carbon habitats inhibit microbial decomposition, locking organic carbon in sediments for millennia.
• Coastal habitat destruction caused by aquaculture and coastal development releases billions of tons of stored carbon back into the atmosphere.

The biogeochemist wants to highlight the disproportionate efficiency of blue carbon habitats for a marine policy briefing. Which choice best accomplishes this goal?`,
      options: [
        'Despite occupying less than 0.5 percent of the ocean surface, coastal blue carbon habitats sequester carbon up to ten times faster per hectare than terrestrial tropical rainforests.',
        'Coastal blue carbon habitats include mangroves, tidal marshes, and seagrass meadows found along shorelines.',
        'Anaerobic, waterlogged soils in coastal wetlands prevent microbial decomposition from breaking down organic matter.',
        'Destruction of coastal wetlands by aquaculture releases billions of tons of greenhouse gases into the atmosphere.'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The prompt requires emphasizing their *disproportionate efficiency* (tiny area vs. massive carbon sequestration rate).',
        whyCorrect: 'Option A directly juxtaposes their tiny geographic footprint (<0.5% of ocean area) against their massive sequestration rate (10x higher than rainforests).',
        distractorAnalysis: [
          { optionIndex: 1, optionLabel: 'B', optionText: 'Coastal blue carbon habitats include mangroves...', whyWrong: 'Lists habitat types without mentioning carbon sequestration efficiency.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Anaerobic, waterlogged soils in coastal...', whyWrong: 'Explains soil biology without highlighting the disproportionate sequestration rate compared to area.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Destruction of coastal wetlands by aquaculture...', whyWrong: 'Focuses on environmental threats rather than natural sequestration efficiency.' }
        ]
      }
    },
    {
      questionNumber: 96,
      id: 'ch6-q96',
      difficulty: 'Hard',
      skillTag: 'Rhetorical Synthesis - Historical Innovation Origin',
      prompt: `An economic historian preparing an archival review on Industrial Revolution mechanization compiled the following agricultural technology notes:
• In 1793, Eli Whitney invented the cotton gin, a mechanical device that separated cotton fibers from sticky seeds.
• Prior to the invention, hand-cleaning one pound of short-staple cotton required an entire day of enslaved labor.
• Whitney's machine used rotating wire teeth and wire screens to process up to 50 pounds of cleaned cotton per day.
• While intended to reduce labor demands, the gin dramatically expanded short-staple cotton cultivation and entrenched chattel slavery across the American South.

The historian wants to present the mechanical workflow of the cotton gin to a history of technology class. Which choice best accomplishes this goal?`,
      options: [
        'Whitney\'s cotton gin operated mechanically by using rotating wire teeth and wire screens to separate cotton fibers from seeds.',
        'Eli Whitney invented the cotton gin in 1793 to process short-staple cotton varieties.',
        'Before Whitney\'s invention, manual hand-cleaning produced only one pound of clean cotton per day.',
        'The cotton gin unintentionally led to the rapid geographic expansion of chattel slavery across the American South.'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The prompt specifically asks for how the machine functioned mechanically.',
        whyCorrect: 'Option A details the exact mechanical apparatus: rotating wire teeth and wire screens separating fibers from seeds.',
        distractorAnalysis: [
          { optionIndex: 1, optionLabel: 'B', optionText: 'Eli Whitney invented the cotton gin in 1793...', whyWrong: 'States inventor and date without explaining mechanical operation.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Before Whitney\'s invention, manual hand-cleaning...', whyWrong: 'Describes pre-invention manual productivity rather than the machine\'s mechanics.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'The cotton gin unintentionally led to the rapid...', whyWrong: 'Discusses socioeconomic consequences rather than mechanical function.' }
        ]
      }
    },
    {
      questionNumber: 97,
      id: 'ch6-q97',
      difficulty: 'Elite',
      skillTag: 'Transition Logic - Quantum Information Divergence',
      prompt: 'In classical computing, a binary bit can exist in only one of two discrete states at any given moment: 0 or 1. ___, a quantum bit (qubit) can exist in a linear superposition of both states simultaneously, allowing quantum processors to evaluate vast computational problem spaces concurrently.',
      options: [
        'By contrast',
        'Consequently',
        'For example',
        'Furthermore'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The passage directly contrasts classical bits (strictly 0 or 1) with quantum qubits (simultaneous superposition of 0 and 1).',
        whyCorrect: 'Option A ("By contrast") accurately establishes the symmetric conceptual opposition between classical and quantum computational states.',
        distractorAnalysis: [
          { optionIndex: 1, optionLabel: 'B', optionText: 'Consequently', whyWrong: 'Classical bits do not cause quantum superposition.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'For example', whyWrong: 'Qubits are a distinct computational paradigm, not an instance of classical bits.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Furthermore', whyWrong: 'Treats superposition as a mere additive feature rather than a fundamentally distinct physical regime.' }
        ]
      }
    },
    {
      questionNumber: 98,
      id: 'ch6-q98',
      difficulty: 'Hard',
      skillTag: 'Rhetorical Synthesis - Archaeological Comparative Dating',
      prompt: `A classical archaeologist assembling a museum exhibit timeline gathered the following antiquities documentation:
• The terracotta army of Emperor Qin Shi Huang was buried around 210 BCE near Xi'an, China.
• It contains over 8,000 life-sized ceramic warriors, chariots, and horses sculpted with individualized facial features.
• The Parthenon sculptures (Elgin Marbles) in Athens were created between 447 BCE and 432 BCE under the direction of Phidias.
• Both collections represent masterworks of ancient monumental figurative sculpture.

The archaeologist wants to present a comparative chronological timeline showing that the Parthenon sculptures predate the terracotta army. Which choice best accomplishes this goal?`,
      options: [
        'Created between 447 and 432 BCE, the Parthenon sculptures in Athens predate the creation of China\'s terracotta army by more than two centuries.',
        'China\'s terracotta army, buried around 210 BCE, contains over 8,000 individualized life-sized ceramic figures.',
        'Both the Parthenon sculptures and the terracotta army are renowned masterworks of ancient figurative art.',
        'Phidias directed the sculpting of the Parthenon marbles in Athens during the fifth century BCE.'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The prompt strictly requires emphasizing that the Parthenon sculptures were created earlier than the terracotta army.',
        whyCorrect: 'Option A calculates and highlights the chronological difference ("predate... by more than two centuries").',
        distractorAnalysis: [
          { optionIndex: 1, optionLabel: 'B', optionText: 'China\'s terracotta army, buried around 210 BCE...', whyWrong: 'Describes only the terracotta army, omitting the Parthenon and the chronological comparison.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Both the Parthenon sculptures and the terracotta...', whyWrong: 'Emphasizes artistic quality rather than relative chronological age.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Phidias directed the sculpting of the Parthenon...', whyWrong: 'Describes only the Parthenon sculptures without comparing them to the terracotta army.' }
        ]
      }
    },
    {
      questionNumber: 99,
      id: 'ch6-q99',
      difficulty: 'Elite',
      skillTag: 'Sentence Placement - Glacial Lake Drainage Cascade',
      prompt: `[1] In high-mountain glacial environments, receding glaciers deposit terminal moraines of loose rock and sediment that dam meltwater into high-altitude lakes. [2] As glacial retreat accelerates, the volume and hydrostatic pressure of these moraine-dammed lakes increase rapidly. [3] An earthquake or ice avalanche can breach the unstable sediment dam, triggering a catastrophic Glacial Lake Outburst Flood (GLOF). [4] These violent torrents surge down mountain valleys at speeds exceeding 50 kilometers per hour, destroying downstream bridges, settlements, and agricultural terraces.

Where should Sentence 4 be placed?`,
      options: ["prior to sentence 1.","prior to sentence 2.","prior to sentence 3.","leave in original place."],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Sentence 4 refers to "These violent torrents", which directly describes the "Glacial Lake Outburst Flood (GLOF)" triggered in Sentence 3.',
        whyCorrect: 'Position 4 provides the natural destructive climax to the geological hazard sequence: lake formation (1) → pressure buildup (2) → dam breach / GLOF (3) → downstream flood devastation (4).',
        distractorAnalysis: [
          { optionIndex: 1, optionLabel: 'B', optionText: 'Before sentence 1', whyWrong: 'Describes violent torrents before any glacial lakes or dams have been introduced.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Before sentence 2', whyWrong: 'Places downstream flooding before pressure buildup or dam breaching.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Before sentence 3', whyWrong: 'Describes flood torrents before the dam breach has occurred.' }
        ]
      }
    },
    {
      questionNumber: 100,
      id: 'ch6-q100',
      difficulty: 'Elite',
      skillTag: 'Rhetorical Synthesis - Climate Geoengineering Mechanics',
      prompt: `An atmospheric scientist preparing a briefing on solar radiation management compiled the following geoengineering notes:
• Stratospheric aerosol injection (SAI) is a proposed solar radiation management geoengineering technique.
• Aircraft or tethered balloons would disperse reflective sulfur dioxide particles into the stratosphere (20 kilometers altitude).
• The sulfur dioxide oxidizes into microscopic sulfate aerosols that reflect a small percentage of incoming solar irradiance back into space.
• Climate models predict SAI could offset anthropogenic global warming within months, but risks disrupting regional monsoon precipitation patterns.

The scientist wants to present both the potential climate benefit and the primary ecological drawback of SAI for a geoengineering debate. Which choice best accomplishes this goal?`,
      options: [
        'While stratospheric aerosol injection could rapidly offset global warming by reflecting solar radiation, climate models warn that it risks disrupting vital regional monsoon patterns.',
        'Stratospheric aerosol injection involves releasing sulfur dioxide into the upper atmosphere to create reflective sulfate particles.',
        'Aircraft or high-altitude balloons would be utilized to transport sulfur dioxide 20 kilometers above Earth\'s surface.',
        'Reflective sulfate aerosols in the stratosphere mimic the global cooling effects observed following major volcanic eruptions.'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The prompt strictly requires presenting *both* the potential cooling benefit and the primary ecological risk of SAI.',
        whyCorrect: 'Option A directly pairs the global cooling benefit (offsetting global warming by reflecting solar radiation) with the severe ecological risk (disrupting regional monsoons).',
        distractorAnalysis: [
          { optionIndex: 1, optionLabel: 'B', optionText: 'Stratospheric aerosol injection involves releasing...', whyWrong: 'Explains the chemical mechanism without contrasting the cooling benefit with the monsoon risk.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Aircraft or high-altitude balloons would be...', whyWrong: 'Describes delivery logistics without discussing benefits or risks.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Reflective sulfate aerosols in the stratosphere...', whyWrong: 'Draws a volcanic comparison without presenting the specific risk of monsoon disruption.' }
        ]
      }
    }
  ]
};
