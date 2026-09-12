import { WritingExerciseBlock } from './satWritingTypes';

// ==========================================
// BLOCK 1: TRANSITIONS - CONTINUATION & ADDITION (Q1 - Q10)
// ==========================================
export const EXERCISE_BLOCK_1: WritingExerciseBlock = {
  blockNumber: 1,
  title: 'Block 1 Exercises: Transitions — Continuation, Addition & Elaboration',
  description: '10 Questions (Questions 1–10) testing transitions of addition, reinforcement, specification, and exemplification across academic domains.',
  questions: [
    {
      questionNumber: 1,
      id: 'ch6-q1',
      difficulty: 'Medium',
      skillTag: 'Transition Logic - Evidentiary Addition',
      prompt: 'Paleoclimatologists analyzing Greenland ice cores identified severe sulfate aerosol spikes corresponding to the 1257 Samalas volcanic eruption. ___, high-resolution dendrochronological records from Siberian larch forests documented abrupt, multi-year ring-growth suppression beginning in the exact same growing season.',
      options: [
        'However',
        'Additionally',
        'Therefore',
        'Instead'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The second sentence supplies an independent, corroborating proxy record (tree-ring growth suppression) alongside the initial ice-core sulfate data to reinforce the global impact of the volcanic eruption.',
        whyCorrect: 'Option B ("Additionally") correctly introduces supplementary empirical evidence from a distinct scientific domain that aligns with the antecedent finding.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'However', whyWrong: 'Signals adversative contrast or conflict, whereas the dendrochronological data directly corroborates the ice-core findings.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Therefore', whyWrong: 'Presents the tree-ring suppression as a deductive inference drawn by scientists rather than an independent physical dataset.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Instead', whyWrong: 'Implies the ice core analysis was discarded or replaced by tree-ring analysis.' }
        ]
      }
    },
    {
      questionNumber: 2,
      id: 'ch6-q2',
      difficulty: 'Medium',
      skillTag: 'Transition Logic - Evidentiary Amplification',
      prompt: 'Next-generation solid-state lithium-metal batteries eliminate volatile liquid organic electrolytes, substantially reducing thermal runaway combustion risks. ___, their volumetric energy density exceeds 1,000 watt-hours per liter, potentially extending electric vehicle driving ranges beyond 800 kilometers on a single charge.',
      options: [
        'However',
        'Moreover',
        'Therefore',
        'Instead'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The passage builds an additive case for solid-state batteries: first establishing a profound safety advantage (no combustion risk), then adding a major performance advantage (higher energy density and longer range).',
        whyCorrect: 'Option B ("Moreover") correctly signals the addition of a second, even more compelling technological benefit along the same trajectory.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'However', whyWrong: 'Signals conflict where two mutually supportive engineering advantages are detailed.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Therefore', whyWrong: 'High volumetric energy density is an inherent material property, not a logical deduction caused by combustion elimination.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Instead', whyWrong: 'Requires an explicit negation in the antecedent sentence.' }
        ]
      }
    },
    {
      questionNumber: 3,
      id: 'ch6-q3',
      difficulty: 'Hard',
      skillTag: 'Transition Logic - Biological Exemplification',
      prompt: 'Benthic marine invertebrates inhabiting abyssal hydrothermal vents have evolved specialized biochemical mechanisms to neutralize toxic concentrations of dissolved heavy metals. ___, the polychaete annelid *Alvinella pompejana* produces zinc-binding metallothionein proteins that sequester divalent cations within intracellular vesicles.',
      options: [
        'For example',
        'Nevertheless',
        'Accordingly',
        'Meanwhile'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The second sentence provides a specific, concrete taxonomic specimen (*Alvinella pompejana*) and molecular mechanism that directly instantiates the broad biological claim of the first sentence.',
        whyCorrect: 'Option A ("For example") correctly introduces a discrete empirical specimen illustrating the universal adaptation mentioned in the antecedent claim.',
        distractorAnalysis: [
          { optionIndex: 1, optionLabel: 'B', optionText: 'Nevertheless', whyWrong: 'Signals concession, but there is no tension or obstacle between the general principle and this supporting species.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Accordingly', whyWrong: 'Presents the polychaete\'s evolution as a mandated human action or direct logical command rather than an exemplifying specimen.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Meanwhile', whyWrong: 'Incorrectly implies chronological parallelism across separate simultaneous events.' }
        ]
      }
    },
    {
      questionNumber: 4,
      id: 'ch6-q4',
      difficulty: 'Hard',
      skillTag: 'Transition Logic - Micro-Specification',
      prompt: 'The structural integrity of ultra-high-performance concrete composites is heavily governed by the nano-scale packing density of calcium silicate hydrate phases. ___, increasing the substitution of silica fume reduces capillary pore volume below 10 nanometers, dramatically mitigating microcrack propagation under cyclic compressive shear.',
      options: [
        'Specifically',
        'Conversely',
        'Instead',
        'Previously'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The second sentence narrows the discussion from a general materials-science premise (packing density governing integrity) to the precise chemical additive and nano-scale threshold (silica fume reducing pore volume below 10 nm).',
        whyCorrect: 'Option A ("Specifically") captures the deliberate movement from an overarching material principle to its exact microscopic chemical mechanism.',
        distractorAnalysis: [
          { optionIndex: 1, optionLabel: 'B', optionText: 'Conversely', whyWrong: 'Signals opposite or inverse behavior, whereas the second sentence explains how to optimize the property introduced in the first.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Instead', whyWrong: 'Requires a rejected alternative in the first sentence, which is absent.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Previously', whyWrong: 'Signals a prior historical timeframe, which is irrelevant to this mechanical explanation.' }
        ]
      }
    },
    {
      questionNumber: 5,
      id: 'ch6-q5',
      difficulty: 'Hard',
      skillTag: 'Transition Logic - Cross-Domain Analogy',
      prompt: 'In avian flocking behavior, individual starlings adjust their velocity relative to their seven nearest neighbors to maintain cohesive group navigation without central leadership. ___, schools of pelagic forage fish coordinate evasive antipredator maneuvers through lateral-line sensory perception of proximate neighbors.',
      options: [
        'Similarly',
        'Consequently',
        'However',
        'Therefore'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The second sentence introduces an analogous biological phenomenon in a completely separate taxonomic group (fish schooling vs. bird flocking) operating under the identical decentralized local-interaction principle.',
        whyCorrect: 'Option A ("Similarly") accurately establishes the parallel mechanism across distinct natural domains.',
        distractorAnalysis: [
          { optionIndex: 1, optionLabel: 'B', optionText: 'Consequently', whyWrong: 'Starling flocking behavior does not cause fish schooling behavior.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'However', whyWrong: 'Signals contrast or conflict, but the two examples illustrate identical decentralized dynamics.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Therefore', whyWrong: 'Presents fish behavior as a logical deduction from bird behavior.' }
        ]
      }
    },
    {
      questionNumber: 6,
      id: 'ch6-q6',
      difficulty: 'Hard',
      skillTag: 'Transition Logic - Macroeconomic Corroboration',
      prompt: 'Econometric studies of urban congestion pricing in central London revealed a sustained 15 percent reduction in peak-hour vehicle traffic volumes. ___, municipal air quality monitoring stations recorded a 12 percent decline in fine particulate emissions (PM2.5) across the inner charging zone over the subsequent decade.',
      options: [
        'Furthermore',
        'In contrast',
        'Instead',
        'Otherwise'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The passage documents two distinct positive outcomes of congestion pricing: first, traffic volume reduction; second, air quality improvement.',
        whyCorrect: 'Option A ("Furthermore") properly introduces an additional, independent empirical benefit reinforcing the efficacy of the policy.',
        distractorAnalysis: [
          { optionIndex: 1, optionLabel: 'B', optionText: 'In contrast', whyWrong: 'Signals opposition, whereas traffic reduction and emissions decline are mutually reinforcing benefits.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Instead', whyWrong: 'Requires a rejected alternative in the first sentence.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Otherwise', whyWrong: 'Signals a conditional alternative or negative consequence.' }
        ]
      }
    },
    {
      questionNumber: 7,
      id: 'ch6-q7',
      difficulty: 'Hard',
      skillTag: 'Transition Logic - Archaeological Exemplification',
      prompt: 'Middle Paleolithic hominin populations possessed sophisticated cognitive planning depth and symbolic cultural behaviors far earlier than previously recognized. ___, archaeological excavations at Pinnacle Point, South Africa, unearthed heat-treated silcrete stone tools and engraved ochre pigments dating continuously to 160,000 years ago.',
      options: [
        'For example',
        'Nevertheless',
        'Therefore',
        'Meanwhile'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The archaeological findings at Pinnacle Point provide concrete material proof and an explicit excavation site illustrating early hominin symbolic culture.',
        whyCorrect: 'Option A ("For example") properly introduces the concrete archaeological case study validating the overarching anthropological thesis.',
        distractorAnalysis: [
          { optionIndex: 1, optionLabel: 'B', optionText: 'Nevertheless', whyWrong: 'Signals concession where pristine evidentiary exemplification exists.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Therefore', whyWrong: 'Pinnacle Point artifacts are an empirical instance of early cognition, not a deductive conclusion.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Meanwhile', whyWrong: 'Fails to convey the exemplifying relationship connecting universal thesis to specific excavation.' }
        ]
      }
    },
    {
      questionNumber: 8,
      id: 'ch6-q8',
      difficulty: 'Hard',
      skillTag: 'Transition Logic - Pharmacological Specification',
      prompt: 'Targeted small-molecule tyrosine kinase inhibitors achieve high remission rates in chronic myeloid leukemia by selectively blocking the ATP-binding pocket of oncogenic fusion proteins. ___, the synthetic inhibitor imatinib binds directly to the active site of the BCR-ABL1 kinase, preventing the downstream phosphorylation cascade that drives malignant granulocyte proliferation.',
      options: [
        'Specifically',
        'Conversely',
        'However',
        'Previously'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The second sentence narrows down from the broad pharmaceutical class (tyrosine kinase inhibitors) to a specific, named therapeutic molecule (imatinib) and its precise molecular binding target (BCR-ABL1 kinase).',
        whyCorrect: 'Option A ("Specifically") captures the movement from general pharmacology to exact molecular mechanism.',
        distractorAnalysis: [
          { optionIndex: 1, optionLabel: 'B', optionText: 'Conversely', whyWrong: 'Signals opposite behavior, whereas imatinib is the definitive prototype of the class.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'However', whyWrong: 'Signals conflict where perfect pharmacological exemplification operates.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Previously', whyWrong: 'Imatinib action is an ongoing biological reality, not an obsolete historical state.' }
        ]
      }
    },
    {
      questionNumber: 9,
      id: 'ch6-q9',
      difficulty: 'Elite',
      skillTag: 'Transition Logic - Multi-Metric Metallurgical Addition',
      prompt: 'High-entropy alloys composed of five or more principal elements in near-equiatomic proportions exhibit remarkable resistance to cryogenic brittle fracture. ___, recent transmission electron microscopy demonstrated that these complex solid solutions retain extraordinary yield strength and oxidation resistance at temperatures exceeding 1,000 degrees Celsius.',
      options: [
        'Additionally',
        'Instead',
        'However',
        'Thus'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The passage builds an additive metallurgical profile: first demonstrating resilience at extreme low temperatures (cryogenic), then stacking exceptional performance at extreme high temperatures (>1,000°C).',
        whyCorrect: 'Option A ("Additionally") correctly introduces the complementary high-temperature property reinforcing the material\'s extraordinary capabilities.',
        distractorAnalysis: [
          { optionIndex: 1, optionLabel: 'B', optionText: 'Instead', whyWrong: 'Requires a rejected alternative in the antecedent clause.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'However', whyWrong: 'Both traits represent material strengths, meaning no adversative friction exists.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Thus', whyWrong: 'High-temperature yield strength is an independent physical attribute, not a logical deduction derived from cryogenic fracture toughness.' }
        ]
      }
    },
    {
      questionNumber: 10,
      id: 'ch6-q10',
      difficulty: 'Hard',
      skillTag: 'Transition Logic - Conceptual Restatement',
      prompt: 'In classical macroeconomic models, monetary neutrality posits that changes in the aggregate money supply affect nominal variables such as prices and wages without exerting any permanent impact on real economic output. ___, an expansionary monetary injection will eventually elevate the aggregate price level proportionately while leaving real gross domestic product unchanged.',
      options: [
        'In other words',
        'Nonetheless',
        'Consequently',
        'On the contrary'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The second sentence restates the abstract theoretical definition of monetary neutrality in concrete, operational terms (expansionary injection raising prices proportionately while real GDP remains invariant).',
        whyCorrect: 'Option A ("In other words") accurately signals that the second sentence is a clarifying restatement of the theoretical principle introduced in the first.',
        distractorAnalysis: [
          { optionIndex: 1, optionLabel: 'B', optionText: 'Nonetheless', whyWrong: 'Signals concession, but the second sentence directly matches the theory.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Consequently', whyWrong: 'The second sentence is not an empirical result caused by the theory; it is the theoretical definition rephrased.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'On the contrary', whyWrong: 'Signals direct contradiction or refutation.' }
        ]
      }
    }
  ]
};

// ==========================================
// BLOCK 2: TRANSITIONS - CONTRAST, CONCESSION & INVERSION (Q11 - Q20)
// ==========================================
export const EXERCISE_BLOCK_2: WritingExerciseBlock = {
  blockNumber: 2,
  title: 'Block 2 Exercises: Transitions — Contrast, Concession & Inversion',
  description: '10 Questions (Questions 11–20) testing transitions of direct contrast, concessive pivot, expectation inversion, and alternative replacement.',
  questions: [
    {
      questionNumber: 11,
      id: 'ch6-q11',
      difficulty: 'Hard',
      skillTag: 'Transition Logic - Empirical Divergence',
      prompt: 'Initial low-resolution computational hydrodynamic simulations suggested that turbulent stellar winds would completely strip exoplanetary atmospheres within close-in habitable zones. ___, recent observational data collected by the James Webb Space Telescope revealed dense, carbon-dioxide-rich atmospheres surrounding several rocky worlds in the TRAPPIST-1 system.',
      options: [
        'Furthermore',
        'Specifically',
        'However',
        'Similarly'
      ],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'The second sentence presents direct spectroscopic evidence that challenges and subverts the theoretical prediction established in the first sentence.',
        whyCorrect: 'Option C ("However") accurately marks the adversative pivot from the initial computational forecast to the conflicting empirical observation.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Furthermore', whyWrong: 'Signals additive consensus, which contradicts the direct friction between theoretical prediction and observational reality.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'Specifically', whyWrong: 'Narrows down a premise rather than signaling that the new data disproves the earlier model.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Similarly', whyWrong: 'Suggests the JWST observations mirrored the hydrodynamic model, when in fact they contradicted it.' }
        ]
      }
    },
    {
      questionNumber: 12,
      id: 'ch6-q12',
      difficulty: 'Hard',
      skillTag: 'Transition Logic - Symmetric Geological Contrast',
      prompt: 'Hydrothermal metamorphic regimes in continental collision zones are characterized by moderate temperatures and intense directed lithostatic pressures. ___, contact metamorphism surrounding shallow igneous plutons is driven primarily by extreme thermal gradients under relatively modest confining pressures.',
      options: [
        'In contrast',
        'Moreover',
        'Consequently',
        'In other words'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The passage compares two distinct geological regimes (regional collision zones vs. shallow contact aureoles) that operate under diametrically opposed thermodynamic drivers (high pressure/moderate heat vs. low pressure/high heat).',
        whyCorrect: 'Option A ("In contrast") correctly articulates the symmetric juxtaposition of these two contrasting metamorphic processes.',
        distractorAnalysis: [
          { optionIndex: 1, optionLabel: 'B', optionText: 'Moreover', whyWrong: 'Signals additive reinforcement of a single thesis rather than a juxtaposition of two distinct geological phenomena.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Consequently', whyWrong: 'Illogically presents contact metamorphism as a result caused by continental collision metamorphism.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'In other words', whyWrong: 'Signals restatement or simplification of the same idea, but these are two separate physical environments.' }
        ]
      }
    },
    {
      questionNumber: 13,
      id: 'ch6-q13',
      difficulty: 'Elite',
      skillTag: 'Transition Logic - Concessive Resilience',
      prompt: 'Early semiconductor lithography using extreme ultraviolet (EUV) mirrors suffered from catastrophic optical mirror degradation caused by tin debris contamination. ___, advanced hydrogen plasma purging systems enabled foundries to sustain uninterrupted commercial fabrication runs exceeding 99 percent operational uptime.',
      options: [
        'Nevertheless',
        'For instance',
        'Subsequently',
        'Therefore'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The second sentence demonstrates that high commercial uptime was achieved in spite of the severe, seemingly fatal engineering impediment described in the first sentence.',
        whyCorrect: 'Option A ("Nevertheless") correctly signals concessive resilience—the triumph of industrial manufacturing despite severe optical degradation.',
        distractorAnalysis: [
          { optionIndex: 1, optionLabel: 'B', optionText: 'For instance', whyWrong: 'Achieving 99% uptime is not an example of mirror degradation; it is an overcoming of it.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Subsequently', whyWrong: 'While chronological progression occurred, the primary rhetorical thrust is concession against a major technical barrier.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Therefore', whyWrong: 'Optical degradation did not cause commercial success; hydrogen purging resolved it.' }
        ]
      }
    },
    {
      questionNumber: 14,
      id: 'ch6-q14',
      difficulty: 'Elite',
      skillTag: 'Transition Logic - Expectation Inversion',
      prompt: 'Municipal traffic planners anticipated that widening the primary arterial highway from four lanes to eight would permanently eliminate peak-hour congestion. ___, the expanded capacity induced latent automotive demand, resulting in average commuter transit times that exceeded pre-construction baselines within three years.',
      options: [
        'Instead',
        'Furthermore',
        'Accordingly',
        'Likewise'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The expected outcome (elimination of traffic jams) was utterly inverted by the actual reality (transit times increased).',
        whyCorrect: 'Option A ("Instead") captures the total substitution of an expected result by its exact opposite real-world outcome.',
        distractorAnalysis: [
          { optionIndex: 1, optionLabel: 'B', optionText: 'Furthermore', whyWrong: 'Signals additive support, whereas the outcome completely frustrated the planner\'s expectations.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Accordingly', whyWrong: 'Suggests the increased traffic was the intended design goal of the highway expansion.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Likewise', whyWrong: 'Suggests an analogous parallel rather than a direct contradiction of initial intent.' }
        ]
      }
    },
    {
      questionNumber: 15,
      id: 'ch6-q15',
      difficulty: 'Hard',
      skillTag: 'Transition Logic - Meteorological Juxtaposition',
      prompt: 'The windward western slopes of the Southern Alps in New Zealand receive over 6,000 millimeters of annual orographic rainfall as moist Tasman Sea air masses ascend the mountain barrier. ___, the leeward Canterbury Plains to the east experience a severe rain-shadow effect, recording less than 600 millimeters of precipitation annually.',
      options: [
        'In contrast',
        'Consequently',
        'For example',
        'Furthermore'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The sentence juxtaposes two geographically adjacent zones exhibiting a tenfold divergence in annual precipitation due to the mountain barrier.',
        whyCorrect: 'Option A ("In contrast") correctly formalizes the symmetric geographical and meteorological divergence.',
        distractorAnalysis: [
          { optionIndex: 1, optionLabel: 'B', optionText: 'Consequently', whyWrong: 'Illogically claims that windward rain physically causes leeward drought rather than contrasting the two zones.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'For example', whyWrong: 'The Canterbury Plains are an opposing rain-shadow zone, not an instance of 6,000 mm rainfall.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Furthermore', whyWrong: 'Fails to capture the stark numerical and environmental opposition.' }
        ]
      }
    },
    {
      questionNumber: 16,
      id: 'ch6-q16',
      difficulty: 'Hard',
      skillTag: 'Transition Logic - Methodological Limitation',
      prompt: 'Dendrochronological calibration of atmospheric radiocarbon ratios has substantially refined historical timelines for the Eastern Mediterranean Bronze Age. ___, marine reservoir effects continue to introduce chronological uncertainty when dating coastal settlements heavily reliant on pelagic fisheries.',
      options: [
        'However',
        'Therefore',
        'Likewise',
        'Specifically'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The second sentence restricts and qualifies the general accuracy of radiocarbon dating by noting a persistent calibration distortion in marine-dependent contexts.',
        whyCorrect: 'Option A ("However") marks the critical methodological limitation circumscribing the overarching technological advance.',
        distractorAnalysis: [
          { optionIndex: 1, optionLabel: 'B', optionText: 'Therefore', whyWrong: 'Presents calibration distortion as a direct deductive consequence of enhanced timeline refinement.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Likewise', whyWrong: 'Suggests marine reservoir uncertainty mirrors precision refinement, creating logical contradiction.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Specifically', whyWrong: 'Marine reservoir distortion is a methodological complication, not a specific instance of refined accuracy.' }
        ]
      }
    },
    {
      questionNumber: 17,
      id: 'ch6-q17',
      difficulty: 'Hard',
      skillTag: 'Transition Logic - Economic Concession',
      prompt: 'Next-generation solid-state lithium-metal batteries require expensive cleanroom dry-room atmospheric controls during roll-to-roll manufacturing. ___, major electric vehicle consortia are investing billions in pilot production lines due to the cells\' unprecedented gravimetric energy density.',
      options: [
        'Nevertheless',
        'For this reason',
        'In other words',
        'Similarly'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Automakers are deploying massive capital investment *in spite of* the steep manufacturing cost hurdle.',
        whyCorrect: 'Option A ("Nevertheless") accurately establishes the concessive relationship bridging the production barrier and aggressive commercial adoption.',
        distractorAnalysis: [
          { optionIndex: 1, optionLabel: 'B', optionText: 'For this reason', whyWrong: 'High manufacturing costs are a deterrence, not the motivating rationale for the investments.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'In other words', whyWrong: 'The second sentence introduces new facts regarding corporate investment, not a paraphrase of factory conditions.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Similarly', whyWrong: 'Compares a manufacturing obstacle to an investment response, which are not analogous parallel entities.' }
        ]
      }
    },
    {
      questionNumber: 18,
      id: 'ch6-q18',
      difficulty: 'Elite',
      skillTag: 'Transition Logic - Quantum Physical Juxtaposition',
      prompt: 'In classical thermodynamics, phase transitions such as the boiling of water are driven by thermal fluctuations that overcome intermolecular binding energies at non-zero temperatures. ___, in quantum many-body systems, quantum phase transitions occur strictly at absolute zero, driven entirely by quantum fluctuations dictated by Heisenberg\'s uncertainty principle.',
      options: [
        'In contrast',
        'Consequently',
        'Furthermore',
        'For instance'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The passage directly contrasts thermal phase transitions (driven by temperature fluctuations >0 K) with quantum phase transitions (driven purely by quantum fluctuations at 0 K).',
        whyCorrect: 'Option A ("In contrast") correctly formalizes the symmetric theoretical juxtaposition of the two physical regimes.',
        distractorAnalysis: [
          { optionIndex: 1, optionLabel: 'B', optionText: 'Consequently', whyWrong: 'Classical boiling does not physically cause quantum phase transitions.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Furthermore', whyWrong: 'Treats quantum phase transitions as a mere extension of classical thermodynamics, missing the fundamental physics dichotomy.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'For instance', whyWrong: 'Quantum phase transitions are a distinct physical regime, not an instance of water boiling.' }
        ]
      }
    },
    {
      questionNumber: 19,
      id: 'ch6-q19',
      difficulty: 'Elite',
      skillTag: 'Transition Logic - Astrobiological Concession',
      prompt: 'Mars possesses a thin, dry atmosphere comprising 95 percent carbon dioxide with surface atmospheric pressures less than one percent of Earth\'s. ___, orbital radar sounders and surface rovers have detected substantial subterranean water ice sheets and hydrated clay minerals that point to an ancient wet and potentially habitable planetary environment.',
      options: [
        'Nonetheless',
        'Consequently',
        'Specifically',
        'In other words'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The discovery of ancient water and habitability proxies provides a profound concessive contrast to the harsh, inhospitable modern Martian environment described in the first sentence.',
        whyCorrect: 'Option A ("Nonetheless") accurately captures the concessive tension between the barren modern reality and the evidence of ancient wet conditions.',
        distractorAnalysis: [
          { optionIndex: 1, optionLabel: 'B', optionText: 'Consequently', whyWrong: 'A thin atmosphere did not cause subterranean water ice to form.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Specifically', whyWrong: 'Water ice is a counter-indicator to a dry atmosphere, not an exemplifying sub-detail.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'In other words', whyWrong: 'Ancient wet conditions are not a rephrasing of modern thin atmosphere.' }
        ]
      }
    },
    {
      questionNumber: 20,
      id: 'ch6-q20',
      difficulty: 'Hard',
      skillTag: 'Transition Logic - Corrective Refutation',
      prompt: 'Eighteenth-century naturalists believed that European swallows spent the winter hibernating in the muddy beds of frozen lakes and rivers. ___, pioneering 1822 anatomical dissections of a white stork shot in Germany with an African hunter\'s wooden spear lodged in its neck proved that migratory avians travel thousands of miles south to overwinter in sub-Saharan Africa.',
      options: [
        'Instead',
        'Similarly',
        'Consequently',
        'Furthermore'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The second sentence explicitly refutes the folklore hypothesis (lake-bed hibernation) and establishes the true, verified biological reality (transcontinental migration).',
        whyCorrect: 'Option A ("Instead") correctly signals the decisive replacement of a false historical myth with the empirically verified mechanism.',
        distractorAnalysis: [
          { optionIndex: 1, optionLabel: 'B', optionText: 'Similarly', whyWrong: 'Draws a false parallel between folklore hibernation and real intercontinental migration.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Consequently', whyWrong: 'Folklore belief did not cause the stork to migrate or be found.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Furthermore', whyWrong: 'Treats the proof of migration as an addition to hibernation, failing to recognize that it disproved it.' }
        ]
      }
    }
  ]
};

// ==========================================
// BLOCK 3: TRANSITIONS - CAUSATION, DEDUCTION & CHRONOLOGY (Q21 - Q30)
// ==========================================
export const EXERCISE_BLOCK_3: WritingExerciseBlock = {
  blockNumber: 3,
  title: 'Block 3 Exercises: Transitions — Cause, Consequence, Deduction & Chronology',
  description: '10 Questions (Questions 21–30) testing transitions of physical causation, deductive inference, sequential methodology, and temporal progression.',
  questions: [
    {
      questionNumber: 21,
      id: 'ch6-q21',
      difficulty: 'Medium',
      skillTag: 'Transition Logic - Monetary Causal Consequence',
      prompt: 'The central bank enacted an unannounced 150-basis-point increase in the benchmark interbank lending rate to combat accelerating currency depreciation. ___, institutional bond yields surged across all sovereign debt maturities within minutes of the policy release.',
      options: [
        'Nevertheless',
        'Consequently',
        'In contrast',
        'For example'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The sudden surge in sovereign bond yields is the direct macroeconomic outcome generated by the central bank’s aggressive interest rate hike.',
        whyCorrect: 'Option B ("Consequently") properly establishes the cause-and-effect relationship bridging the monetary policy intervention and the immediate financial market reaction.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Nevertheless', whyWrong: 'Signals concessive persistence in spite of an obstacle, which fails because the market reaction followed directly from the catalyst.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'In contrast', whyWrong: 'Illogically contrasts the monetary policy with the yield movements instead of identifying the causal link.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'For example', whyWrong: 'Bond yield surges are a systemic market reaction, not an example of the central bank\'s policy decision itself.' }
        ]
      }
    },
    {
      questionNumber: 22,
      id: 'ch6-q22',
      difficulty: 'Hard',
      skillTag: 'Transition Logic - Procedural Chronology',
      prompt: 'Archaeometallurgists analyzing the Bronze Age hoard first mapped surface isotopic compositions using portable X-ray fluorescence spectrometry. ___, they extracted micro-drilled core samples from uncorroded interior matrices for high-resolution thermal ionization mass spectrometry.',
      options: [
        'Subsequently',
        'Conversely',
        'Similarly',
        'Thus'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The sentence sequence articulates a disciplined chronological and methodological laboratory workflow ("first mapped... [next phase]").',
        whyCorrect: 'Option A ("Subsequently") accurately denotes the second sequential step in the investigative protocol.',
        distractorAnalysis: [
          { optionIndex: 1, optionLabel: 'B', optionText: 'Conversely', whyWrong: 'Signals conceptual opposition, but micro-drilling is a complementary sequential procedure.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Similarly', whyWrong: 'Implies an analogous comparison across different subjects rather than a chronological step within the same study.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Thus', whyWrong: 'Presents micro-drilling as a deductive conclusion rather than a secondary physical assay.' }
        ]
      }
    },
    {
      questionNumber: 23,
      id: 'ch6-q23',
      difficulty: 'Hard',
      skillTag: 'Transition Logic - Macroeconomic Causal Consequence',
      prompt: 'Unprecedented geopolitical instability disrupted maritime freight transit through key maritime choke points, forcing container carriers to reroute voyages around the Cape of Good Hope. ___, average transit times for intercontinental shipments lengthened by two weeks, driving up spot container shipping rates and import consumer prices across European ports.',
      options: [
        'Similarly',
        'For example',
        'As a result',
        'Nevertheless'
      ],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'The lengthening of transit times and the spike in shipping rates was the direct physical and economic consequence of rerouting around the Cape of Good Hope.',
        whyCorrect: 'Option C ("As a result") correctly formalizes the cause-and-effect relationship.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Similarly', whyWrong: 'Draws a false analogy between geopolitical conflict and shipping durations.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'For example', whyWrong: 'Increased transit times are an operational consequence, not an illustrative sub-type of maritime bottlenecks.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Nevertheless', whyWrong: 'Signals concession where mechanical economic causality operates.' }
        ]
      }
    },
    {
      questionNumber: 24,
      id: 'ch6-q24',
      difficulty: 'Elite',
      skillTag: 'Transition Logic - Deductive Astronomical Synthesis',
      prompt: 'Atmospheric transmission spectra of exoplanet K2-18b obtained via the James Webb Space Telescope revealed substantial spectral absorption features for methane and carbon dioxide while indicating an absolute absence of ammonia. ___, astrophysicists deduced that the world likely possesses a hydrogen-rich atmosphere overlying a global liquid water ocean.',
      options: [
        'Accordingly',
        'However',
        'Conversely',
        'Previously'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The second sentence details the logical inference derived directly from the observational atmospheric spectra established in the first sentence.',
        whyCorrect: 'Option A ("Accordingly") properly signals the deductive synthesis derived from the empirical chemical evidence.',
        distractorAnalysis: [
          { optionIndex: 1, optionLabel: 'B', optionText: 'However', whyWrong: 'Signals friction, but the deduction is completely consistent with the observational data.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Conversely', whyWrong: 'Signals opposition where deductive derivation exists.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Previously', whyWrong: 'Signals a prior historical timeframe, whereas the deduction is the direct current synthesis.' }
        ]
      }
    },
    {
      questionNumber: 25,
      id: 'ch6-q25',
      difficulty: 'Hard',
      skillTag: 'Transition Logic - Economic Consequence',
      prompt: 'Rapid advances in natural language processing and computer vision dramatically lowered the cost of automating routine analytical tasks across accounting and legal discovery sectors. ___, corporate legal departments accelerated their adoption of automated contract-review software, reducing billable paralegal hours by over 35 percent.',
      options: [
        'Consequently',
        'In contrast',
        'Nonetheless',
        'For example'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Corporate adoption of contract software and the reduction of paralegal hours was the direct economic outcome resulting from the cheaper automation technology.',
        whyCorrect: 'Option A ("Consequently") establishes the direct cause-and-effect relationship.',
        distractorAnalysis: [
          { optionIndex: 1, optionLabel: 'B', optionText: 'In contrast', whyWrong: 'Illogically contrasts the technological advance with its own market adoption.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Nonetheless', whyWrong: 'Signals concession where natural economic adoption occurs.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'For example', whyWrong: 'Software adoption is a commercial outcome, not an illustrative instance of computer vision algorithms.' }
        ]
      }
    },
    {
      questionNumber: 26,
      id: 'ch6-q26',
      difficulty: 'Hard',
      skillTag: 'Transition Logic - Geophysical Causation',
      prompt: 'Subducting oceanic lithosphere descending into the asthenosphere releases bound hydrous fluids into the overlying mantle wedge. ___, the introduction of volatile water lowers the solidus melting point of peridotite rocks, generating partial melting that fuels explosive arc volcanism above the subduction zone.',
      options: [
        'As a result',
        'In contrast',
        'Nevertheless',
        'Similarly'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The lowering of the mantle solidus and generation of magma is the direct physical consequence of the fluid release described in the first sentence.',
        whyCorrect: 'Option A ("As a result") correctly captures the geological cause-and-effect sequence.',
        distractorAnalysis: [
          { optionIndex: 1, optionLabel: 'B', optionText: 'In contrast', whyWrong: 'Signals opposition between two harmonious physical processes.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Nevertheless', whyWrong: 'Signals concession where thermodynamic causality operates.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Similarly', whyWrong: 'Draws a false parallel across different processes rather than tracing a single causal chain.' }
        ]
      }
    },
    {
      questionNumber: 27,
      id: 'ch6-q27',
      difficulty: 'Hard',
      skillTag: 'Transition Logic - Chronological Industrial Phase',
      prompt: 'During the initial prototyping phase of the supersonic jet, aerospace engineers conducted thousands of computational fluid dynamics simulations to optimize wing sweep geometry. ___, they constructed scaled carbon-composite models for extensive validation trials inside transonic wind tunnels.',
      options: [
        'Subsequently',
        'Conversely',
        'However',
        'In other words'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The text describes an engineering sequence: first virtual simulations, then physical wind-tunnel testing.',
        whyCorrect: 'Option A ("Subsequently") correctly denotes the subsequent procedural phase in aerospace prototyping.',
        distractorAnalysis: [
          { optionIndex: 1, optionLabel: 'B', optionText: 'Conversely', whyWrong: 'Wind-tunnel testing complements simulations rather than opposing them.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'However', whyWrong: 'Signals friction where sequential engineering methodology operates.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'In other words', whyWrong: 'Physical testing is not a linguistic paraphrase of computer simulations.' }
        ]
      }
    },
    {
      questionNumber: 28,
      id: 'ch6-q28',
      difficulty: 'Elite',
      skillTag: 'Transition Logic - Evolutionary Deduction',
      prompt: 'Comparative genomic sequencing of Darwin\'s finches revealed that variations in the *ALX1* transcription factor gene correlate almost perfectly with quantitative differences in beak depth and sharpness across distinct Galápagos populations. ___, evolutionary biologists concluded that subtle regulatory mutations in *ALX1* served as a primary developmental driver of adaptive radiation within the clade.',
      options: [
        'Thus',
        'Nonetheless',
        'Instead',
        'Meanwhile'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The second sentence presents the evolutionary conclusion deduced directly from the genomic sequencing correlation.',
        whyCorrect: 'Option A ("Thus") correctly introduces the deductive scientific synthesis derived from the empirical genetic data.',
        distractorAnalysis: [
          { optionIndex: 1, optionLabel: 'B', optionText: 'Nonetheless', whyWrong: 'Signals concession, whereas the conclusion is directly substantiated by the findings.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Instead', whyWrong: 'Requires a rejected alternative in the antecedent sentence.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Meanwhile', whyWrong: 'Fails to convey the deductive link connecting observation to conclusion.' }
        ]
      }
    },
    {
      questionNumber: 29,
      id: 'ch6-q29',
      difficulty: 'Hard',
      skillTag: 'Transition Logic - Ecological Causal Chain',
      prompt: 'Severe apex predator extirpation in Yellowstone National Park allowed elk populations to browse unrestrained along riparian river corridors throughout the mid-twentieth century. ___, overgrazed willow and aspen stands declined precipitously, destabilizing riverbanks and causing regional beaver colonies to collapse.',
      options: [
        'Consequently',
        'Nevertheless',
        'In contrast',
        'Specifically'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The destruction of riparian vegetation and beaver collapse was the direct ecological outcome caused by unrestrained elk browsing.',
        whyCorrect: 'Option A ("Consequently") correctly formalizes the ecological trophic cascade.',
        distractorAnalysis: [
          { optionIndex: 1, optionLabel: 'B', optionText: 'Nevertheless', whyWrong: 'Signals concession where straightforward ecological causality is present.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'In contrast', whyWrong: 'Contrasts predator absence with plant decline rather than linking them causally.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Specifically', whyWrong: 'Trophic collapse is a broad ecological consequence, not just an exemplifying sub-detail.' }
        ]
      }
    },
    {
      questionNumber: 30,
      id: 'ch6-q30',
      difficulty: 'Elite',
      skillTag: 'Transition Logic - Methodological Sequence',
      prompt: 'In the synthesis of metal-organic frameworks, chemists first dissolved organic dicarboxylic acid linkers and transition metal nitrates in polar dimethylformamide solvents. ___, they sealed the homogeneous mixture inside Teflon-lined hydrothermal autoclaves and heated it at 150 degrees Celsius for 48 hours to induce controlled crystal nucleation.',
      options: [
        'Thereafter',
        'Conversely',
        'However',
        'For instance'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'The text describes a chemical protocol: step 1 (dissolving precursors), followed by step 2 (sealing and heating in autoclaves).',
        whyCorrect: 'Option A ("Thereafter") accurately marks the sequential procedural progression in the synthesis protocol.',
        distractorAnalysis: [
          { optionIndex: 1, optionLabel: 'B', optionText: 'Conversely', whyWrong: 'Signals conceptual opposition between complementary laboratory steps.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'However', whyWrong: 'Signals conflict where a methodical multi-step recipe is detailed.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'For instance', whyWrong: 'Sealing the mixture is the next operational action, not an illustrative sub-category of dissolving.' }
        ]
      }
    }
  ]
};

// ==========================================
// BLOCK 4: SENTENCE PLACEMENT & COHESION (Q31 - Q40)
// ==========================================
export const EXERCISE_BLOCK_4: WritingExerciseBlock = {
  blockNumber: 4,
  title: 'Block 4 Exercises: Sentence Placement, Structural Cohesion & Discourse Flow',
  description: '10 Questions (Questions 31–40) testing sentence insertion, anaphoric reference bridging, chronological sequencing, and rhetorical placement logic.',
  questions: [
    {
      questionNumber: 31,
      id: 'ch6-q31',
      difficulty: 'Elite',
      skillTag: 'Sentence Placement - Paleoclimate Progression',
      prompt: `[1] During the Paleocene-Eocene Thermal Maximum (PETM) 56 million years ago, a massive pulse of greenhouse gases entered the global atmosphere. [2] The sudden injection of over 4,000 gigatons of carbon drove global mean temperatures upward by 5 to 8 degrees Celsius. [3] This rapid hyperthermal warming triggered widespread ocean acidification and dissolved deep-sea carbonate sediments worldwide. [4] Consequently, benthic foraminiferal communities experienced their most catastrophic extinction event of the Cenozoic era.

Where should Sentence 3 be placed?`,
      options: [
        'Where it is now.',
        'Before sentence 1.',
        'Before sentence 2.',
        'After sentence 4.'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Sentence 3 ("This rapid hyperthermal warming") directly takes the temperature increase from Sentence 2 ("5 to 8 degrees Celsius") and details the marine chemical effect (acidification), leading directly to benthic extinction in Sentence 4.',
        whyCorrect: 'Position 3 preserves the causal chain: carbon release (1) → temperature spike (2) → ocean acidification (3) → benthic extinction (4).',
        distractorAnalysis: [
          { optionIndex: 1, optionLabel: 'B', optionText: 'Before sentence 1', whyWrong: 'Refers to "This rapid hyperthermal warming" before the PETM is introduced.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Before sentence 2', whyWrong: 'Precedes the mention of temperature increases.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'After sentence 4', whyWrong: 'Places the chemical cause of extinction after the extinction itself.' }
        ]
      }
    },
    {
      questionNumber: 32,
      id: 'ch6-q32',
      difficulty: 'Hard',
      skillTag: 'Sentence Placement - Architectural Chronology',
      prompt: `[1] In 1919, Walter Gropius founded the Bauhaus school in Weimar with the radical vision of bridging fine art and industrial craft. [2] The school relocated to Dessau in 1925, where Gropius designed an iconic glass-curtain-wall building that embodied modernist functionalism. [3] Facing escalating political hostility from regional authorities, the institution relocated once more to Berlin in 1932. [4] It operated in an abandoned telephone factory for just ten months before being forced to dissolve under pressure from the Nazi regime in 1933.

The author wants to add the following sentence:
"This architectural masterpiece featured asymmetric pinwheel wings and tubular-steel furniture designed by Marcel Breuer."

Where is the most logical place to insert this sentence?`,
      options: [
        'After sentence 1',
        'After sentence 2',
        'After sentence 3',
        'After sentence 4'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The added sentence references "This architectural masterpiece", which directly modifies and elaborates upon the "iconic glass-curtain-wall building" introduced in Sentence 2.',
        whyCorrect: 'Placing it after Sentence 2 creates seamless anaphoric cohesion with the Dessau building before Sentence 3 shifts the narrative to the 1932 Berlin relocation.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'After sentence 1', whyWrong: 'Sentence 1 discusses the school\'s founding philosophy in Weimar, not a specific building.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'After sentence 3', whyWrong: 'Sentence 3 discusses the move to Berlin; calling a Berlin telephone factory an "architectural masterpiece" distorts the history.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'After sentence 4', whyWrong: 'Places the architectural description after the permanent closure of the school.' }
        ]
      }
    },
    {
      questionNumber: 33,
      id: 'ch6-q33',
      difficulty: 'Elite',
      skillTag: 'Sentence Placement - Glaciological Causal Chain',
      prompt: `[1] As atmospheric temperatures rise over polar regions, surface meltwater lakes form on the surface of the Greenland Ice Sheet during summer months. [2] When these supraglacial lakes reach critical volumes, hydrostatic pressure fractures the underlying ice, creating vertical conduits called moulins. [3] Millions of cubic meters of surface meltwater drain rapidly down these moulins within hours. [4] Reaching the bedrock interface, the water acts as a high-pressure subglacial lubricant, dramatically accelerating the basal sliding velocity of the ice sheet toward the ocean.

Where should Sentence 4 be placed?`,
      options: [
        'Where it is now.',
        'Before sentence 1.',
        'Before sentence 2.',
        'Before sentence 3.'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Sentence 4 describes the subglacial lubrication that occurs once the draining water reaches the bedrock, which is the direct climax of the drainage described in Sentence 3.',
        whyCorrect: 'Sentence 4 is logically situated at the end of the hydrological cascade: lake formation (1) → moulin fracturing (2) → rapid drainage (3) → basal sliding acceleration (4).',
        distractorAnalysis: [
          { optionIndex: 1, optionLabel: 'B', optionText: 'Before sentence 1', whyWrong: 'Describes water reaching the bedrock before any surface meltwater has formed.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Before sentence 2', whyWrong: 'Discusses basal sliding before moulins are fractured.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Before sentence 3', whyWrong: 'Describes water reaching the bedrock before the water has actually drained down the conduits.' }
        ]
      }
    },
    {
      questionNumber: 34,
      id: 'ch6-q34',
      difficulty: 'Hard',
      skillTag: 'Sentence Placement - Genetic Engineering Sequence',
      prompt: `[1] In CRISPR-Cas9 genome editing, researchers design a synthetic single-guide RNA (sgRNA) matching a specific 20-nucleotide target sequence in the host DNA. [2] The Cas9 endonuclease protein complexes with this sgRNA and scans the chromatin until it recognizes an adjacent protospacer adjacent motif (PAM). [3] Upon PAM recognition, the Cas9 enzyme unwinds the double helix and cleaves both strands of the targeted DNA sequence. [4] Cellular repair pathways then resolve the double-strand break, either introducing gene-disrupting insertions or incorporating a donor template.

The author wants to add the following sentence:
"Once hybridized to the complementary strand, the guide RNA directs the molecular scissors to make precise double-strand incisions."

Where is the most logical place to insert this sentence?`,
      options: [
        'Before sentence 1',
        'After sentence 1',
        'After sentence 2',
        'After sentence 4'
      ],
      correctAnswer: 2,
      explanation: {
        coreReasoning: 'The added sentence explains the action that occurs immediately after PAM recognition and before cleavage completion in Sentence 3/4.',
        whyCorrect: 'Placing it after Sentence 2 bridges the scanning phase in Sentence 2 with the cleavage and repair described in Sentences 3 and 4.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'Before sentence 1', whyWrong: 'Refers to "the guide RNA" before sgRNA has been introduced.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'After sentence 1', whyWrong: 'Precedes the Cas9 complexing and scanning described in Sentence 2.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'After sentence 4', whyWrong: 'Places the incision explanation after cellular repair has already taken place.' }
        ]
      }
    },
    {
      questionNumber: 35,
      id: 'ch6-q35',
      difficulty: 'Hard',
      skillTag: 'Sentence Placement - Anaphoric Pronoun Bridging',
      prompt: `[1] In the late nineteenth century, electrical engineers debated whether direct current (DC) or alternating current (AC) should power industrial grids. [2] Thomas Edison advocated DC systems, which were safe and reliable over short urban distances but suffered catastrophic voltage drop-offs across long distribution lines. [3] Nikola Tesla and George Westinghouse demonstrated that AC transformers could step voltage up to thousands of volts for efficient long-distance transmission and step it down safely for household use. [4] This technical breakthrough established alternating current as the universal standard for worldwide power grids.

Where should Sentence 4 be placed?`,
      options: [
        'Where it is now.',
        'Before sentence 1.',
        'After sentence 1.',
        'After sentence 2.'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Sentence 4 begins with "This technical breakthrough", which refers directly to the AC transformer step-up/step-down system introduced in Sentence 3.',
        whyCorrect: 'Position 4 provides the logical conclusion to the "War of the Currents" narrative, resolving the debate presented in Sentences 1–3.',
        distractorAnalysis: [
          { optionIndex: 1, optionLabel: 'B', optionText: 'Before sentence 1', whyWrong: 'Introduces the victory of AC before the historical debate is even mentioned.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'After sentence 1', whyWrong: 'Declares a breakthrough before describing either DC or AC technologies.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'After sentence 2', whyWrong: 'Labels Edison\'s limited DC system a breakthrough for worldwide grids, which contradicts history.' }
        ]
      }
    },
    {
      questionNumber: 36,
      id: 'ch6-q36',
      difficulty: 'Elite',
      skillTag: 'Sentence Placement - Astrophysics Narrative Flow',
      prompt: `[1] When a massive star exhausts its core nuclear fuel, outward radiation pressure drops below the inward pull of gravity. [2] The degenerate stellar core collapses within milliseconds, triggering an immense shockwave that expels the star's outer envelope into interstellar space. [3] This violent core-collapse supernova leaves behind an ultra-dense stellar remnant. [4] Depending on the progenitor's initial mass, this remnant stabilizes either as a neutron star supported by neutron degeneracy pressure or collapses indefinitely into a stellar-mass black hole.

The author wants to add the following sentence:
"During this catastrophic explosion, elements heavier than iron, including gold and platinum, are synthesized via rapid neutron-capture nucleosynthesis (the r-process)."

Where is the most logical place to insert this sentence?`,
      options: [
        'After sentence 1',
        'After sentence 2',
        'After sentence 3',
        'After sentence 4'
      ],
      correctAnswer: 1,
      explanation: {
        coreReasoning: 'The added sentence references "this catastrophic explosion", which refers directly to the core collapse and shockwave explosion described in Sentence 2.',
        whyCorrect: 'Placing it after Sentence 2 connects the explosion mechanics directly to its nucleosynthetic output before Sentence 3 shifts focus to the remnant core.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'After sentence 1', whyWrong: 'Sentence 1 only mentions fuel exhaustion and pressure drop; the explosion has not happened yet.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'After sentence 3', whyWrong: 'Interrupts the discussion of the remnant core introduced in Sentence 3 and expanded in Sentence 4.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'After sentence 4', whyWrong: 'Places the nucleosynthesis explosion details after the final fate of the remnant is settled.' }
        ]
      }
    },
    {
      questionNumber: 37,
      id: 'ch6-q37',
      difficulty: 'Hard',
      skillTag: 'Sentence Placement - Economic Policy Sequencing',
      prompt: `[1] In response to spiraling hyperinflation, the central bank enacted a comprehensive currency stabilization plan. [2] It pegged the national currency to a strict gold-exchange standard and capped statutory reserve lending to commercial banks. [3] Consumer price inflation decelerated from 300 percent annually to single digits within six months. [4] With monetary predictability restored, foreign direct investment surged into domestic manufacturing and infrastructure sectors.

Where should Sentence 3 be placed?`,
      options: [
        'Where it is now.',
        'Before sentence 1.',
        'Before sentence 2.',
        'After sentence 4.'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Sentence 3 records the immediate decelerating effect on inflation caused by the monetary controls in Sentence 2, which then allows the long-term foreign investment in Sentence 4.',
        whyCorrect: 'Position 3 maintains the direct causal trajectory: problem (1) → policy action (2) → inflation reduction (3) → economic recovery (4).',
        distractorAnalysis: [
          { optionIndex: 1, optionLabel: 'B', optionText: 'Before sentence 1', whyWrong: 'States inflation decelerated before the crisis and plan are introduced.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Before sentence 2', whyWrong: 'Shows the inflation drop occurring before the stabilization policies are implemented.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'After sentence 4', whyWrong: 'Places basic price stabilization after long-term capital investments have already taken place.' }
        ]
      }
    },
    {
      questionNumber: 38,
      id: 'ch6-q38',
      difficulty: 'Elite',
      skillTag: 'Sentence Placement - Marine Biology Narrative',
      prompt: `[1] Coral polyps maintain an obligate endosymbiotic relationship with photosynthetic microalgae known as zooxanthellae. [2] In exchange for shelter and inorganic metabolic byproducts, these dinoflagellates provide the coral host with up to 90 percent of its energy requirements via glucose and amino acid synthesis. [3] Elevated sea surface temperatures disrupt this metabolic exchange, causing algal cells to produce toxic reactive oxygen species. [4] To prevent cellular damage, the coral host expels the zooxanthellae, resulting in the stark whitening phenomenon known as coral bleaching.

The author wants to add the following sentence:
"Deprived of their primary energy source, bleached corals face rapid starvation and mortality unless ocean temperatures normalize within weeks."

Where is the most logical place to insert this sentence?`,
      options: [
        'After sentence 1',
        'After sentence 2',
        'After sentence 3',
        'After sentence 4'
      ],
      correctAnswer: 3,
      explanation: {
        coreReasoning: 'The added sentence explains what happens to "bleached corals" after they have expelled their algae, which is introduced in Sentence 4.',
        whyCorrect: 'Placing it after Sentence 4 logically details the fatal physiological consequence following the bleaching event.',
        distractorAnalysis: [
          { optionIndex: 0, optionLabel: 'A', optionText: 'After sentence 1', whyWrong: 'Mentions "bleached corals" before the healthy symbiotic exchange or bleaching triggers are explained.' },
          { optionIndex: 1, optionLabel: 'B', optionText: 'After sentence 2', whyWrong: 'Interrupts the description of healthy symbiosis with mortality consequences.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'After sentence 3', whyWrong: 'Precedes the actual expulsion of zooxanthellae described in Sentence 4.' }
        ]
      }
    },
    {
      questionNumber: 39,
      id: 'ch6-q39',
      difficulty: 'Hard',
      skillTag: 'Sentence Placement - Historical Technological Innovation',
      prompt: `[1] In 1856, Henry Bessemer patented a revolutionary industrial process for the mass production of inexpensive steel from molten pig iron. [2] His converter injected a blast of atmospheric air through molten iron, using the oxidation of silicon and carbon impurities to sustain high temperatures without extra fuel. [3] This dramatic reduction in production costs allowed steel to replace brittle cast iron in rail networks, bridges, and skyscrapers worldwide. [4] Consequently, global steel output expanded from a few thousand tons to tens of millions of tons by the close of the nineteenth century.

Where should Sentence 2 be placed?`,
      options: [
        'Where it is now.',
        'Before sentence 1.',
        'After sentence 3.',
        'After sentence 4.'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Sentence 2 explains how the "Bessemer converter" patented in Sentence 1 actually functions, which directly justifies the "dramatic reduction in production costs" in Sentence 3.',
        whyCorrect: 'Position 2 provides the vital technical mechanism between the patent announcement (1) and its economic consequences (3 & 4).',
        distractorAnalysis: [
          { optionIndex: 1, optionLabel: 'B', optionText: 'Before sentence 1', whyWrong: 'Refers to "His converter" before Bessemer has been introduced.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'After sentence 3', whyWrong: 'Places the basic chemical mechanism after global infrastructure adoption.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'After sentence 4', whyWrong: 'Places the operational description at the very end after nineteenth-century tonnage statistics.' }
        ]
      }
    },
    {
      questionNumber: 40,
      id: 'ch6-q40',
      difficulty: 'Elite',
      skillTag: 'Sentence Placement - Volcanology Progression',
      prompt: `[1] Supervolcanic calderas do not form standard conical stratovolcanoes; instead, they produce massive subterranean magma reservoirs that deform the overlying crust over hundreds of millennia. [2] As magma accumulates, the ground surface bulges upward into a vast structural dome crisscrossed by ring fractures. [3] When reservoir pressure exceeds crustal tensile strength, catastrophic explosive eruptions vent thousands of cubic kilometers of pyroclastic ash along these fractures. [4] Empty of magma, the unsupported roof of the chamber collapses into the void, creating a gigantic topographical depression known as a caldera.

Where should Sentence 4 be placed?`,
      options: [
        'Where it is now.',
        'Before sentence 1.',
        'Before sentence 2.',
        'Before sentence 3.'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Sentence 4 describes the chamber roof collapsing once it is "Empty of magma", which occurs directly as a consequence of the massive eruption described in Sentence 3.',
        whyCorrect: 'Position 4 correctly concludes the supervolcanic cycle: subterranean accumulation (1) → doming (2) → explosive venting (3) → caldera collapse (4).',
        distractorAnalysis: [
          { optionIndex: 1, optionLabel: 'B', optionText: 'Before sentence 1', whyWrong: 'Describes the final caldera depression before any volcanology or magma chamber is introduced.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Before sentence 2', whyWrong: 'Places roof collapse before magma accumulation and surface doming.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Before sentence 3', whyWrong: 'Describes the chamber being empty before the eruption has actually vented the magma.' }
        ]
      }
    }
  ]
};

// ==========================================
// BLOCK 5: RHETORICAL PURPOSE & FUNCTION (Q41 - Q50)
// ==========================================
export const EXERCISE_BLOCK_5: WritingExerciseBlock = {
  blockNumber: 5,
  title: 'Block 5 Exercises: Rhetorical Purpose, Clausal Function & Discourse Role',
  description: '10 Questions (Questions 41–50) testing identification of rhetorical purpose, structural function, conceptual qualification, and argumentation roles.',
  questions: [
    {
      questionNumber: 41,
      id: 'ch6-q41',
      difficulty: 'Elite',
      skillTag: 'Rhetorical Purpose - Conceptual Demarcation',
      prompt: `[1] In classical mechanics, mass is treated as an invariant intrinsic property that dictates an object's resistance to acceleration. [2] In special relativity, however, Albert Einstein demonstrated that mass and energy are dynamically interchangeable via the equivalence principle E = mc^2. [3] As an object's velocity approaches the speed of light, its relativistic momentum increases asymptotically, requiring infinite energy to achieve further acceleration. [4] Thus, the speed of light operates not merely as a technological barrier, but as a fundamental geometric boundary of spacetime itself.

The primary rhetorical purpose of Sentence 4 is to:`,
      options: [
        'Elevate the speed of light from an engineering limitation to an absolute universal law of spacetime geometry.',
        'Argue that future propulsion technologies will eventually exceed the speed of light.',
        'Prove that Einstein\'s special relativity is incompatible with classical mechanics.',
        'Explain the mathematical derivation of the mass-energy equivalence equation.'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Sentence 4 synthesizes the relativistic momentum argument to frame the speed of light as a fundamental geometric limit rather than a mere engineering challenge.',
        whyCorrect: 'Option A accurately identifies the sentence\'s philosophical and physical synthesis.',
        distractorAnalysis: [
          { optionIndex: 1, optionLabel: 'B', optionText: 'Argue that future propulsion technologies...', whyWrong: 'Contradicts the text, which proves the speed of light is an absolute barrier.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Prove that Einstein\'s special relativity is...', whyWrong: 'Focuses on the universal speed limit rather than declaring classical mechanics invalid.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Explain the mathematical derivation...', whyWrong: 'The sentence states a conceptual conclusion, not a mathematical proof.' }
        ]
      }
    },
    {
      questionNumber: 42,
      id: 'ch6-q42',
      difficulty: 'Hard',
      skillTag: 'Rhetorical Purpose - Methodological Qualification',
      prompt: `[1] Functional magnetic resonance imaging (fMRI) has transformed cognitive neuroscience by mapping localized blood-oxygen-level-dependent (BOLD) signals in the brain during behavioral tasks. [2] Researchers use these vascular signals to infer which neural circuits participate in language, memory, and spatial reasoning. [3] However, because hemodynamic responses lag neural firing by several seconds, BOLD signals reflect blood-flow changes rather than direct millisecond-level electrical activity. [4] Consequently, neuroscientists must pair fMRI with electroencephalography (EEG) to achieve both high spatial and high temporal precision.

The primary rhetorical purpose of Sentence 3 is to:`,
      options: [
        'Acknowledge a critical methodological limitation of fMRI regarding its temporal resolution.',
        'Argue that fMRI data is fundamentally invalid and should be abandoned in favor of EEG.',
        'Explain the biochemical mechanism of oxygen delivery to active astrocytes.',
        'Demonstrate that brain blood flow is completely unrelated to neural computation.'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Sentence 3 introduces a concession regarding fMRI\'s hemodynamic delay, showing that it measures blood flow rather than instant electrical firing.',
        whyCorrect: 'Option A correctly identifies that Sentence 3 qualifies fMRI by highlighting its temporal limitation.',
        distractorAnalysis: [
          { optionIndex: 1, optionLabel: 'B', optionText: 'Argue that fMRI data is fundamentally invalid...', whyWrong: 'The author advocates combining tools, not abandoning fMRI.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Explain the biochemical mechanism of oxygen delivery...', whyWrong: 'The focus is on imaging limitations, not cellular biochemistry.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Demonstrate that brain blood flow is completely unrelated...', whyWrong: 'Contradicts Sentence 1 and 2, which affirm BOLD signals correlate with cognition.' }
        ]
      }
    },
    {
      questionNumber: 43,
      id: 'ch6-q43',
      difficulty: 'Hard',
      skillTag: 'Rhetorical Purpose - Evidentiary Corroboration',
      prompt: `[1] Anthropologists have long debated whether Neanderthals possessed symbolic material culture prior to contact with anatomically modern humans. [2] Recent excavations at Cueva de los Aviones in southeastern Spain yielded perforated marine shells stained with red and yellow mineral pigments dating to 115,000 years ago. [3] Because this date predates the arrival of Homo sapiens in Western Europe by more than 65,000 years, the artifacts confirm Neanderthal decorative ingenuity. [4] These findings demonstrate that symbolic cognition was not an exclusive evolutionary innovation of Homo sapiens.

The primary rhetorical purpose of Sentence 2 is to:`,
      options: [
        'Introduce concrete archaeological artifacts that substantiate Neanderthal symbolic behavior.',
        'Disprove the claim that marine mollusks were consumed as a food source in Paleolithic Spain.',
        'Argue that modern humans reached Europe much earlier than previously recognized.',
        'Describe the geochemical extraction techniques used to date mineral pigments.'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Sentence 2 provides the empirical evidence (pigmented, perforated shells) that directly resolves the anthropological debate introduced in Sentence 1.',
        whyCorrect: 'Option A accurately describes the evidentiary function of the sentence in providing physical proof of ornamentation.',
        distractorAnalysis: [
          { optionIndex: 1, optionLabel: 'B', optionText: 'Disprove the claim that marine mollusks were consumed...', whyWrong: 'Mollusks as food are not the topic of the passage.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Argue that modern humans reached Europe much earlier...', whyWrong: 'Sentence 3 states the shells predate modern humans by 65,000 years, proving Neanderthal authorship.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Describe the geochemical extraction techniques...', whyWrong: 'The sentence names artifacts and dates, not laboratory extraction methods.' }
        ]
      }
    },
    {
      questionNumber: 44,
      id: 'ch6-q44',
      difficulty: 'Elite',
      skillTag: 'Rhetorical Purpose - Theoretical Synthesis',
      prompt: `[1] Early evolutionary biologists conceptualized speciation primarily as an allopatric process, requiring geographic isolation to prevent gene flow between diverging populations. [2] However, ecological studies of cichlid fishes in crater lakes revealed that distinct species evolved within single, unbroken water bodies by adapting to different feeding depths. [3] Genomic sequencing confirmed that these sympatric species diverged despite continuous physical proximity and opportunities for interbreeding. [4] Thus, natural selection driven by ecological niche specialization can override gene flow to generate biodiversity without physical barriers.

The primary rhetorical purpose of Sentence 4 is to:`,
      options: [
        'Synthesize empirical case data into an overarching evolutionary principle regarding sympatric speciation.',
        'Prove that geographic barriers are never involved in speciation events.',
        'Argue that cichlid fishes are the only organisms capable of evolving in sympatry.',
        'Explain the genetic sequencing methodology used to track cichlid divergence.'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Sentence 4 draws together the cichlid empirical case study (Sentences 2 & 3) to formulate a universal conclusion about ecological niche specialization.',
        whyCorrect: 'Option A correctly identifies that the sentence synthesizes specific data into a broader biological law.',
        distractorAnalysis: [
          { optionIndex: 1, optionLabel: 'B', optionText: 'Prove that geographic barriers are never involved...', whyWrong: 'Allopatric speciation remains valid; sympatric speciation is an additional mechanism.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Argue that cichlid fishes are the only organisms...', whyWrong: 'The author uses cichlids as an illustrative model to prove a general mechanism.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Explain the genetic sequencing methodology...', whyWrong: 'The sentence states an evolutionary principle, not laboratory methodology.' }
        ]
      }
    },
    {
      questionNumber: 45,
      id: 'ch6-q45',
      difficulty: 'Hard',
      skillTag: 'Rhetorical Purpose - Historical Contextualization',
      prompt: `[1] In the mid-nineteenth century, medical practitioners attributed cholera epidemics to "miasma"—noxious airborne vapors emanating from decomposing organic matter. [2] In 1854, physician John Snow mapped cholera deaths in London's Soho district and traced the outbreak to a public water pump on Broad Street. [3] By persuading local parish officials to remove the pump handle, Snow abruptly halted the transmission of the disease. [4] Snow's empirical cartography laid the methodological foundations of modern epidemiology and dealt a fatal blow to the miasma theory.

The primary rhetorical purpose of Sentence 1 is to:`,
      options: [
        'Establish the prevailing scientific orthodoxy that John Snow\'s empirical research ultimately disproved.',
        'Argue that airborne pollution was the true cause of London\'s nineteenth-century cholera outbreaks.',
        'Demonstrate that nineteenth-century physicians were completely unconcerned with public sanitation.',
        'Explain the biological transmission mechanism of the Vibrio cholerae bacterium.'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Sentence 1 introduces the baseline historical belief (miasma theory) to provide context for the revolutionary impact of John Snow\'s waterborne discovery.',
        whyCorrect: 'Option A correctly frames Sentence 1 as the established historical paradigm that Snow overturned.',
        distractorAnalysis: [
          { optionIndex: 1, optionLabel: 'B', optionText: 'Argue that airborne pollution was the true cause...', whyWrong: 'The passage proves cholera was waterborne, not airborne.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Demonstrate that nineteenth-century physicians were completely unconcerned...', whyWrong: 'Physicians were actively trying to understand cholera, though their initial theory was incorrect.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Explain the biological transmission mechanism...', whyWrong: 'Sentence 1 describes the incorrect historical theory, not the modern bacterial biology.' }
        ]
      }
    },
    {
      questionNumber: 46,
      id: 'ch6-q46',
      difficulty: 'Elite',
      skillTag: 'Rhetorical Purpose - Counter-Argument Neutralization',
      prompt: `[1] Skeptics of renewable energy integration often argue that the intermittency of solar and wind generation makes a 100 percent renewable electric grid technologically unfeasible. [2] However, grid simulation models demonstrate that geographic diversification of renewable assets significantly smooths regional power fluctuations. [3] Furthermore, deploying utility-scale lithium-iron-phosphate battery storage and pumped-storage hydropower provides essential multi-hour load balancing during lulls in generation. [4] Therefore, intermittency represents an engineering challenge to be managed through grid modernization rather than an insurmountable barrier to decarbonization.

The primary rhetorical purpose of Sentence 3 is to:`,
      options: [
        'Provide a concrete technological solution that neutralizes the intermittency critique raised in Sentence 1.',
        'Argue that battery storage is too expensive for widespread commercial deployment.',
        'Claim that solar and wind farms should be replaced entirely by hydroelectric dams.',
        'Explain the chemical manufacturing process of lithium-iron-phosphate battery cells.'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Sentence 3 supplies specific storage technologies (battery storage and pumped hydro) that solve the intermittency challenge raised by critics in Sentence 1.',
        whyCorrect: 'Option A accurately identifies the sentence as an evidentiary counter-argument that solves the problem of renewable intermittency.',
        distractorAnalysis: [
          { optionIndex: 1, optionLabel: 'B', optionText: 'Argue that battery storage is too expensive...', whyWrong: 'The text frames storage as a viable solution, not an unfeasible cost burden.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Claim that solar and wind farms should be replaced...', whyWrong: 'Hydro and batteries complement solar and wind; they do not replace them.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Explain the chemical manufacturing process...', whyWrong: 'The text mentions utility-scale deployment, not cell chemistry manufacturing.' }
        ]
      }
    },
    {
      questionNumber: 47,
      id: 'ch6-q47',
      difficulty: 'Hard',
      skillTag: 'Rhetorical Purpose - Economic Mechanism Explanation',
      prompt: `[1] In financial markets, high-frequency trading (HFT) firms execute algorithmic transactions in fractions of a millisecond. [2] By continuously submitting and canceling limit orders on both sides of the order book, these algorithms generate substantial market liquidity and narrow bid-ask spreads. [3] This reduction in trading friction saves institutional and retail investors billions of dollars annually in transaction costs. [4] However, during periods of extreme volatility, algorithmic market-makers may abruptly withdraw liquidity, exacerbating sudden flash crashes.

The primary rhetorical purpose of Sentence 2 is to:`,
      options: [
        'Delineate the operational mechanism through which high-frequency trading enhances market efficiency.',
        'Explain why high-frequency trading should be banned by federal regulatory commissions.',
        'Demonstrate that human floor traders execute trades more efficiently than algorithms.',
        'Prove that bid-ask spreads have no meaningful impact on retail investor returns.'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Sentence 2 explains *how* HFT operates (submitting/canceling limit orders) to achieve the liquidity benefits discussed in Sentences 2 & 3.',
        whyCorrect: 'Option A correctly identifies that Sentence 2 explains the practical mechanism producing market efficiency.',
        distractorAnalysis: [
          { optionIndex: 1, optionLabel: 'B', optionText: 'Explain why high-frequency trading should be banned...', whyWrong: 'Sentence 2 highlights benefits; criticisms appear only in Sentence 4.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Demonstrate that human floor traders execute trades more efficiently...', whyWrong: 'Human floor traders are not mentioned in the passage.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Prove that bid-ask spreads have no meaningful impact...', whyWrong: 'Directly contradicted by Sentence 3, which states narrowing spreads saves billions.' }
        ]
      }
    },
    {
      questionNumber: 48,
      id: 'ch6-q48',
      difficulty: 'Elite',
      skillTag: 'Rhetorical Purpose - Ecological Paradox Resolution',
      prompt: `[1] For decades, forest managers in the American West practiced aggressive wildfire suppression to protect timber assets and rural communities. [2] Paradoxically, decades of zero-fire policy allowed dense underbrush and dead woody debris to accumulate unchecked across forest floors. [3] When ignitions inevitably occurred during extreme heat waves, these unnaturally high fuel loads transformed manageable ground fires into catastrophic, canopy-destroying megafires. [4] Ecologists now advocate controlled prescribed burns to restore natural fire regimes and prevent catastrophic conflagrations.

The primary rhetorical purpose of Sentence 2 is to:`,
      options: [
        'Highlight the unintended ecological consequence of long-term fire suppression policies.',
        'Argue that all wildfires should be allowed to burn without human intervention.',
        'Demonstrate that timber harvesting completely eliminates wildfire hazards.',
        'Prove that forest ecosystems never experienced fires prior to human settlement.'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Sentence 2 identifies the paradox: suppressing small fires resulted in an unnatural buildup of fuel loads that made subsequent fires far worse.',
        whyCorrect: 'Option A accurately describes Sentence 2 as highlighting the unintended negative consequence of total suppression.',
        distractorAnalysis: [
          { optionIndex: 1, optionLabel: 'B', optionText: 'Argue that all wildfires should be allowed to burn...', whyWrong: 'The author advocates controlled prescribed burns, not unmanaged conflagrations near towns.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Demonstrate that timber harvesting completely eliminates...', whyWrong: 'Timber harvesting is not presented as a fire solution in the text.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Prove that forest ecosystems never experienced fires...', whyWrong: 'Sentence 4 states fire is a natural regime in these ecosystems.' }
        ]
      }
    },
    {
      questionNumber: 49,
      id: 'ch6-q49',
      difficulty: 'Hard',
      skillTag: 'Rhetorical Purpose - Paleontological Revision',
      prompt: `[1] For over a century following the 1861 discovery of *Archaeopteryx*, paleontologists viewed bird evolution as an abrupt, isolated anatomical transition from reptilian ancestors. [2] Beginning in the late 1990s, the discovery of thousands of exquisitely preserved non-avian theropod fossils in Liaoning, China, revolutionized this paradigm. [3] These fossils revealed that hallmarks of avian biology—including pennaceous feathers, hollow bones, and brooding behaviors—evolved incrementally in terrestrial dinosaurs tens of millions of years before flight emerged. [4] Thus, modern birds represent living, specialized theropod dinosaurs rather than an entirely distinct vertebrate class.

The primary rhetorical purpose of Sentence 3 is to:`,
      options: [
        'Provide concrete paleontological evidence demonstrating that avian traits evolved incrementally in non-avian dinosaurs.',
        'Prove that Archaeopteryx was a fraudulent fossil manufactured in the nineteenth century.',
        'Argue that flight evolved before feathers in primitive terrestrial reptiles.',
        'Describe the geological sediment composition of the Liaoning fossil beds.'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Sentence 3 provides the specific anatomical facts (feathers, hollow bones) discovered in Liaoning that prove bird features developed gradually in dinosaurs long before flight.',
        whyCorrect: 'Option A correctly identifies that Sentence 3 presents evidence of the gradual evolution of bird characteristics.',
        distractorAnalysis: [
          { optionIndex: 1, optionLabel: 'B', optionText: 'Prove that Archaeopteryx was a fraudulent fossil...', whyWrong: 'The text treats Archaeopteryx as a legitimate historical discovery, not a fraud.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Argue that flight evolved before feathers...', whyWrong: 'Contradicted by the text, which notes feathers evolved "tens of millions of years before flight emerged."' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Describe the geological sediment composition...', whyWrong: 'The sentence focuses on fossil anatomy, not sediment geology.' }
        ]
      }
    },
    {
      questionNumber: 50,
      id: 'ch6-q50',
      difficulty: 'Elite',
      skillTag: 'Rhetorical Purpose - Climax & Policy Recommendation',
      prompt: `[1] Urban heat islands elevate temperatures in dense metropolitan centers by up to 5 degrees Celsius relative to surrounding rural areas. [2] Impermeable asphalt and dark roofing materials absorb solar radiation and re-emit it as thermal infrared energy throughout the night. [3] This persistent nocturnal heat increases heat-related hospitalizations and strains municipal electric grids due to air-conditioning demand. [4] Urban planners must therefore prioritize expansive tree canopies, reflective cool roofs, and permeable pavements to mitigate urban thermal stress.

The primary rhetorical purpose of Sentence 4 is to:`,
      options: [
        'Translate diagnostic thermal data into concrete urban engineering and architectural policy interventions.',
        'Argue that metropolitan residents should relocate to rural areas to escape heat stress.',
        'Prove that air conditioning is the primary contributor to urban warming.',
        'Explain the thermodynamic physics of infrared radiation re-emission.'
      ],
      correctAnswer: 0,
      explanation: {
        coreReasoning: 'Sentence 4 acts as the concluding call to action, outlining specific architectural solutions (tree canopy, cool roofs, permeable pavement) to fix the heat-island problem diagnosed in Sentences 1–3.',
        whyCorrect: 'Option A correctly recognizes that Sentence 4 translates the scientific problem into actionable engineering solutions.',
        distractorAnalysis: [
          { optionIndex: 1, optionLabel: 'B', optionText: 'Argue that metropolitan residents should relocate...', whyWrong: 'The author proposes redesigning cities, not evacuating them.' },
          { optionIndex: 2, optionLabel: 'C', optionText: 'Prove that air conditioning is the primary contributor...', whyWrong: 'Sentence 2 identifies dark surfaces and asphalt as the heat absorbing causes.' },
          { optionIndex: 3, optionLabel: 'D', optionText: 'Explain the thermodynamic physics of infrared radiation...', whyWrong: 'Thermodynamics was explained in Sentence 2; Sentence 4 focuses on urban planning.' }
        ]
      }
    }
  ]
};
