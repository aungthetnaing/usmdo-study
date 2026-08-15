import { StudyNote } from "../types";

/**
 * High-yield study notes for the US Medicine Olympiad (USMDO), organized by
 * body system / discipline. Concise, exam-oriented bullet points.
 */
export const NOTES: StudyNote[] = [
  {
    id: "n-cv-1",
    topic: "Cardiovascular",
    title: "Cardiac cycle & conduction",
    points: [
      "Conduction path: SA node → AV node → bundle of His → left/right bundle branches → Purkinje fibers.",
      "The SA node is the natural pacemaker (~60–100 bpm); the AV node delays the impulse so atria empty before ventricles contract.",
      "Systole = ventricular contraction; diastole = ventricular relaxation/filling.",
      "S1 ('lub') = closure of mitral & tricuspid (AV) valves; S2 ('dub') = closure of aortic & pulmonic (semilunar) valves.",
      "Cardiac output = heart rate × stroke volume.",
    ],
  },
  {
    id: "n-cv-2",
    topic: "Cardiovascular",
    title: "Blood pressure & vessels",
    points: [
      "Arteries carry blood away from the heart; veins return blood to it. Capillaries are sites of exchange.",
      "Normal adult BP is <120/80 mmHg; hypertension is ≥130/80 (ACC/AHA).",
      "Systolic = pressure during ventricular contraction; diastolic = pressure during relaxation.",
      "The left ventricle is the most muscular chamber (pumps to the whole body via the aorta).",
      "The pulmonary artery is unusual: it carries deoxygenated blood; the pulmonary veins carry oxygenated blood.",
    ],
  },
  {
    id: "n-resp-1",
    topic: "Respiratory",
    title: "Gas exchange basics",
    points: [
      "Gas exchange occurs in the alveoli by simple diffusion across the alveolar–capillary membrane.",
      "O₂ diffuses into blood; CO₂ diffuses out to be exhaled.",
      "The diaphragm is the primary muscle of inspiration; it contracts and flattens to draw air in.",
      "Most CO₂ is transported in blood as bicarbonate (HCO₃⁻).",
      "Central chemoreceptors respond mainly to rising CO₂ (via pH of CSF) to drive breathing.",
    ],
  },
  {
    id: "n-neuro-1",
    topic: "Neurology",
    title: "Neuron & neurotransmission",
    points: [
      "Resting membrane potential ≈ −70 mV; maintained by the Na⁺/K⁺ ATPase pump.",
      "Action potential: Na⁺ influx (depolarization) → K⁺ efflux (repolarization).",
      "Signals cross synapses via neurotransmitters; Ca²⁺ influx triggers vesicle release.",
      "Acetylcholine acts at the neuromuscular junction; dopamine, serotonin, GABA, and glutamate are key CNS transmitters.",
      "Myelin (oligodendrocytes in CNS, Schwann cells in PNS) speeds conduction via saltatory conduction.",
    ],
  },
  {
    id: "n-endo-1",
    topic: "Endocrine",
    title: "Glands & hormones",
    points: [
      "The hypothalamus controls the pituitary ('master gland').",
      "Insulin (β cells) lowers blood glucose; glucagon (α cells) raises it.",
      "Thyroid hormones (T3/T4) set metabolic rate; require iodine.",
      "Cortisol (adrenal cortex) is the stress hormone; raises glucose and suppresses immunity.",
      "Negative feedback is the dominant control mechanism (e.g., TSH ↔ thyroid hormone).",
    ],
  },
  {
    id: "n-renal-1",
    topic: "Renal & Urinary",
    title: "Nephron function",
    points: [
      "The nephron is the functional unit of the kidney.",
      "Filtration occurs at the glomerulus; reabsorption and secretion occur along the tubules.",
      "The kidney regulates fluid, electrolytes, acid–base balance, and blood pressure.",
      "ADH (vasopressin) increases water reabsorption in the collecting duct.",
      "Aldosterone increases Na⁺ (and water) reabsorption and K⁺ excretion.",
    ],
  },
  {
    id: "n-gi-1",
    topic: "Gastrointestinal",
    title: "Digestion & absorption",
    points: [
      "Digestion begins in the mouth (salivary amylase → starch).",
      "The stomach secretes acid (HCl) and pepsin; intrinsic factor (for B₁₂ absorption) is made here.",
      "Most nutrient absorption occurs in the small intestine (esp. jejunum).",
      "The liver produces bile (stored in the gallbladder) to emulsify fats.",
      "The pancreas secretes digestive enzymes and bicarbonate into the duodenum.",
    ],
  },
  {
    id: "n-heme-1",
    topic: "Hematology",
    title: "Blood components",
    points: [
      "Red blood cells (erythrocytes) carry O₂ via hemoglobin; they lack a nucleus.",
      "White blood cells (leukocytes) defend against infection.",
      "Platelets (thrombocytes) are cell fragments essential for clotting.",
      "Plasma is the liquid component (~55% of blood).",
      "Blood type is determined by A/B antigens; type O is the universal donor, AB the universal recipient.",
    ],
  },
  {
    id: "n-immuno-1",
    topic: "Immunology",
    title: "Innate vs adaptive immunity",
    points: [
      "Innate immunity is fast and nonspecific (skin, phagocytes, inflammation, complement).",
      "Adaptive immunity is specific and has memory (lymphocytes).",
      "B cells make antibodies (humoral immunity); plasma cells are antibody factories.",
      "T cells: helper (CD4⁺) coordinate; cytotoxic (CD8⁺) kill infected cells.",
      "Vaccines work by generating memory cells for a faster secondary response.",
    ],
  },
  {
    id: "n-pharm-1",
    topic: "Pharmacology",
    title: "Core principles",
    points: [
      "Pharmacokinetics = what the body does to a drug (ADME: absorption, distribution, metabolism, excretion).",
      "Pharmacodynamics = what the drug does to the body (receptors, effects).",
      "The liver is the main site of drug metabolism (cytochrome P450); kidneys are the main site of excretion.",
      "An agonist activates a receptor; an antagonist blocks it.",
      "Half-life is the time for plasma concentration to fall by half.",
    ],
  },
];
