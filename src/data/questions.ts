import { QuizQuestion } from "../types";

/**
 * USMDO-style multiple-choice questions. Each item has five options (A–E) with
 * exactly one correct answer, plus a short explanation for study.
 */
export const QUESTIONS: QuizQuestion[] = [
  // ───────────────────────── Cardiovascular ─────────────────────────
  {
    id: "cv-1",
    topic: "Cardiovascular",
    question: "Which structure is the natural pacemaker of the heart?",
    options: [
      "Sinoatrial (SA) node",
      "Atrioventricular (AV) node",
      "Bundle of His",
      "Purkinje fibers",
      "Left bundle branch",
    ],
    answer: "Sinoatrial (SA) node",
    explanation:
      "The SA node in the right atrium sets the heart rate (~60–100 bpm).",
  },
  {
    id: "cv-2",
    topic: "Cardiovascular",
    question: "Which heart chamber pumps oxygenated blood to the entire body?",
    options: [
      "Left ventricle",
      "Right ventricle",
      "Left atrium",
      "Right atrium",
      "Coronary sinus",
    ],
    answer: "Left ventricle",
    explanation:
      "The left ventricle is the most muscular chamber; it ejects blood into the aorta.",
  },
  {
    id: "cv-3",
    topic: "Cardiovascular",
    question: "The first heart sound (S1, 'lub') is produced by closure of the…",
    options: [
      "Mitral and tricuspid valves",
      "Aortic and pulmonic valves",
      "Aortic valve only",
      "Pulmonic valve only",
      "Coronary arteries",
    ],
    answer: "Mitral and tricuspid valves",
    explanation:
      "S1 = AV (atrioventricular) valve closure; S2 = semilunar valve closure.",
  },
  {
    id: "cv-4",
    topic: "Cardiovascular",
    question: "Cardiac output is best defined as…",
    options: [
      "Heart rate × stroke volume",
      "Stroke volume ÷ heart rate",
      "Systolic − diastolic pressure",
      "Blood volume × viscosity",
      "Preload × afterload",
    ],
    answer: "Heart rate × stroke volume",
    explanation:
      "CO (L/min) equals the volume ejected per beat times beats per minute.",
  },
  {
    id: "cv-5",
    topic: "Cardiovascular",
    question:
      "Which vessel carries deoxygenated blood, unlike other arteries?",
    options: [
      "Pulmonary artery",
      "Aorta",
      "Carotid artery",
      "Renal artery",
      "Femoral artery",
    ],
    answer: "Pulmonary artery",
    explanation:
      "The pulmonary artery carries deoxygenated blood from the right ventricle to the lungs.",
  },

  // ───────────────────────── Respiratory ─────────────────────────
  {
    id: "rp-1",
    topic: "Respiratory",
    question: "Gas exchange in the lungs occurs primarily in the…",
    options: ["Alveoli", "Bronchi", "Trachea", "Pleura", "Larynx"],
    answer: "Alveoli",
    explanation:
      "Oxygen and CO₂ diffuse across the thin alveolar–capillary membrane.",
  },
  {
    id: "rp-2",
    topic: "Respiratory",
    question: "Which muscle is the primary driver of inspiration?",
    options: [
      "Diaphragm",
      "Internal intercostals",
      "Rectus abdominis",
      "Pectoralis major",
      "Latissimus dorsi",
    ],
    answer: "Diaphragm",
    explanation:
      "The diaphragm contracts and flattens, expanding the thoracic cavity.",
  },
  {
    id: "rp-3",
    topic: "Respiratory",
    question: "Most carbon dioxide is transported in the blood as…",
    options: [
      "Bicarbonate ions (HCO₃⁻)",
      "Dissolved CO₂ gas",
      "Carbaminohemoglobin only",
      "Carbon monoxide",
      "Carbonic acid crystals",
    ],
    answer: "Bicarbonate ions (HCO₃⁻)",
    explanation:
      "About 70% of CO₂ travels as bicarbonate, formed via carbonic anhydrase in RBCs.",
  },
  {
    id: "rp-4",
    topic: "Respiratory",
    question:
      "The main stimulus that increases the rate of breathing is a rise in…",
    options: [
      "Blood CO₂ (and fall in pH)",
      "Blood O₂",
      "Blood glucose",
      "Body temperature only",
      "Blood calcium",
    ],
    answer: "Blood CO₂ (and fall in pH)",
    explanation:
      "Central chemoreceptors respond chiefly to CO₂-driven pH changes.",
  },

  // ───────────────────────── Neurology ─────────────────────────
  {
    id: "nr-1",
    topic: "Neurology",
    question:
      "Which pump maintains the neuron's resting membrane potential?",
    options: [
      "Na⁺/K⁺ ATPase",
      "Ca²⁺ channel",
      "Cl⁻ symporter",
      "Proton pump",
      "GLUT-4 transporter",
    ],
    answer: "Na⁺/K⁺ ATPase",
    explanation:
      "It pumps 3 Na⁺ out and 2 K⁺ in, keeping the inside near −70 mV.",
  },
  {
    id: "nr-2",
    topic: "Neurology",
    question:
      "The neurotransmitter released at the neuromuscular junction is…",
    options: [
      "Acetylcholine",
      "Dopamine",
      "Serotonin",
      "GABA",
      "Norepinephrine",
    ],
    answer: "Acetylcholine",
    explanation:
      "ACh binds nicotinic receptors on muscle to trigger contraction.",
  },
  {
    id: "nr-3",
    topic: "Neurology",
    question:
      "The rising phase (depolarization) of an action potential is caused by influx of…",
    options: [
      "Sodium (Na⁺)",
      "Potassium (K⁺)",
      "Chloride (Cl⁻)",
      "Calcium (Ca²⁺)",
      "Magnesium (Mg²⁺)",
    ],
    answer: "Sodium (Na⁺)",
    explanation:
      "Na⁺ rushes in; K⁺ efflux then repolarizes the membrane.",
  },
  {
    id: "nr-4",
    topic: "Neurology",
    question:
      "Which part of the brain coordinates balance and fine motor control?",
    options: [
      "Cerebellum",
      "Medulla oblongata",
      "Occipital lobe",
      "Hypothalamus",
      "Corpus callosum",
    ],
    answer: "Cerebellum",
    explanation:
      "The cerebellum fine-tunes movement, coordination, and balance.",
  },
  {
    id: "nr-5",
    topic: "Neurology",
    question:
      "Loss of dopamine-producing neurons in the substantia nigra causes…",
    options: [
      "Parkinson's disease",
      "Alzheimer's disease",
      "Multiple sclerosis",
      "Huntington's disease",
      "Myasthenia gravis",
    ],
    answer: "Parkinson's disease",
    explanation:
      "Dopamine loss produces tremor, rigidity, and bradykinesia.",
  },

  // ───────────────────────── Endocrine ─────────────────────────
  {
    id: "en-1",
    topic: "Endocrine",
    question: "Which hormone lowers blood glucose?",
    options: ["Insulin", "Glucagon", "Cortisol", "Epinephrine", "Growth hormone"],
    answer: "Insulin",
    explanation:
      "Insulin (pancreatic β cells) drives glucose uptake into cells.",
  },
  {
    id: "en-2",
    topic: "Endocrine",
    question: "Which gland is often called the 'master gland'?",
    options: [
      "Pituitary gland",
      "Thyroid gland",
      "Adrenal gland",
      "Pancreas",
      "Pineal gland",
    ],
    answer: "Pituitary gland",
    explanation:
      "The pituitary controls many other glands, itself directed by the hypothalamus.",
  },
  {
    id: "en-3",
    topic: "Endocrine",
    question:
      "Which element is essential for the synthesis of thyroid hormones?",
    options: ["Iodine", "Iron", "Calcium", "Zinc", "Selenium"],
    answer: "Iodine",
    explanation:
      "T3 and T4 incorporate iodine; deficiency can cause goiter.",
  },
  {
    id: "en-4",
    topic: "Endocrine",
    question:
      "The main hormone released by the adrenal cortex in chronic stress is…",
    options: ["Cortisol", "Insulin", "Melatonin", "Oxytocin", "Aldosterone"],
    answer: "Cortisol",
    explanation:
      "Cortisol raises blood glucose and dampens the immune response.",
  },

  // ───────────────────────── Renal & Urinary ─────────────────────────
  {
    id: "rn-1",
    topic: "Renal & Urinary",
    question: "What is the functional unit of the kidney?",
    options: ["Nephron", "Alveolus", "Sarcomere", "Hepatocyte", "Islet"],
    answer: "Nephron",
    explanation:
      "Each kidney has ~1 million nephrons that filter blood and form urine.",
  },
  {
    id: "rn-2",
    topic: "Renal & Urinary",
    question:
      "Blood filtration in the nephron takes place at the…",
    options: [
      "Glomerulus",
      "Loop of Henle",
      "Collecting duct",
      "Ureter",
      "Renal pelvis",
    ],
    answer: "Glomerulus",
    explanation:
      "The glomerulus is a capillary tuft where plasma is filtered into Bowman's capsule.",
  },
  {
    id: "rn-3",
    topic: "Renal & Urinary",
    question:
      "Antidiuretic hormone (ADH) primarily increases reabsorption of…",
    options: [
      "Water",
      "Sodium",
      "Potassium",
      "Glucose",
      "Protein",
    ],
    answer: "Water",
    explanation:
      "ADH makes the collecting duct more permeable to water, concentrating urine.",
  },
  {
    id: "rn-4",
    topic: "Renal & Urinary",
    question:
      "Aldosterone increases reabsorption of sodium and excretion of…",
    options: ["Potassium", "Calcium", "Glucose", "Bicarbonate", "Chloride"],
    answer: "Potassium",
    explanation:
      "Aldosterone (adrenal cortex) promotes Na⁺/water retention and K⁺ loss.",
  },

  // ───────────────────────── Gastrointestinal ─────────────────────────
  {
    id: "gi-1",
    topic: "Gastrointestinal",
    question: "Which organ produces bile?",
    options: ["Liver", "Gallbladder", "Pancreas", "Stomach", "Spleen"],
    answer: "Liver",
    explanation:
      "The liver makes bile; the gallbladder stores and concentrates it.",
  },
  {
    id: "gi-2",
    topic: "Gastrointestinal",
    question: "Most nutrient absorption occurs in the…",
    options: [
      "Small intestine",
      "Stomach",
      "Large intestine",
      "Esophagus",
      "Rectum",
    ],
    answer: "Small intestine",
    explanation:
      "Villi and microvilli of the small intestine maximize absorptive surface area.",
  },
  {
    id: "gi-3",
    topic: "Gastrointestinal",
    question:
      "Intrinsic factor, needed to absorb vitamin B₁₂, is produced in the…",
    options: ["Stomach", "Liver", "Colon", "Pancreas", "Duodenum"],
    answer: "Stomach",
    explanation:
      "Gastric parietal cells secrete intrinsic factor; B₁₂ is absorbed in the ileum.",
  },
  {
    id: "gi-4",
    topic: "Gastrointestinal",
    question: "Which enzyme in saliva begins the digestion of starch?",
    options: ["Amylase", "Pepsin", "Lipase", "Trypsin", "Lactase"],
    answer: "Amylase",
    explanation:
      "Salivary amylase (ptyalin) starts breaking down carbohydrates in the mouth.",
  },

  // ───────────────────────── Hematology ─────────────────────────
  {
    id: "hm-1",
    topic: "Hematology",
    question: "Which protein in red blood cells carries oxygen?",
    options: ["Hemoglobin", "Albumin", "Fibrinogen", "Myoglobin", "Globulin"],
    answer: "Hemoglobin",
    explanation:
      "Hemoglobin binds O₂ in the lungs and releases it in tissues.",
  },
  {
    id: "hm-2",
    topic: "Hematology",
    question: "Which blood cells are primarily responsible for clotting?",
    options: [
      "Platelets",
      "Erythrocytes",
      "Lymphocytes",
      "Eosinophils",
      "Basophils",
    ],
    answer: "Platelets",
    explanation:
      "Platelets (thrombocytes) form the initial plug and support the clotting cascade.",
  },
  {
    id: "hm-3",
    topic: "Hematology",
    question: "Which ABO blood type is the universal red-cell donor?",
    options: ["O negative", "AB positive", "A positive", "B negative", "AB negative"],
    answer: "O negative",
    explanation:
      "Type O negative lacks A, B, and Rh antigens, so it can be given to most recipients.",
  },
  {
    id: "hm-4",
    topic: "Hematology",
    question: "A deficiency of which mineral most commonly causes anemia?",
    options: ["Iron", "Calcium", "Potassium", "Magnesium", "Sodium"],
    answer: "Iron",
    explanation:
      "Iron is required to make hemoglobin; deficiency causes microcytic anemia.",
  },

  // ───────────────────────── Immunology ─────────────────────────
  {
    id: "im-1",
    topic: "Immunology",
    question: "Which cells produce antibodies?",
    options: [
      "B lymphocytes (plasma cells)",
      "Cytotoxic T cells",
      "Neutrophils",
      "Red blood cells",
      "Platelets",
    ],
    answer: "B lymphocytes (plasma cells)",
    explanation:
      "Activated B cells differentiate into plasma cells that secrete antibodies.",
  },
  {
    id: "im-2",
    topic: "Immunology",
    question: "Which cell is the main target of HIV?",
    options: [
      "CD4⁺ helper T cells",
      "CD8⁺ cytotoxic T cells",
      "Red blood cells",
      "Osteoclasts",
      "Platelets",
    ],
    answer: "CD4⁺ helper T cells",
    explanation:
      "HIV depletes CD4⁺ helper T cells, crippling adaptive immunity.",
  },
  {
    id: "im-3",
    topic: "Immunology",
    question:
      "Which type of immunity is fast, nonspecific, and lacks memory?",
    options: [
      "Innate immunity",
      "Adaptive immunity",
      "Humoral immunity",
      "Cell-mediated immunity",
      "Passive artificial immunity",
    ],
    answer: "Innate immunity",
    explanation:
      "Innate defenses (skin, phagocytes, inflammation, complement) act immediately.",
  },
  {
    id: "im-4",
    topic: "Immunology",
    question: "Vaccines primarily protect by generating…",
    options: [
      "Memory lymphocytes",
      "More red blood cells",
      "Additional platelets",
      "New neurons",
      "Digestive enzymes",
    ],
    answer: "Memory lymphocytes",
    explanation:
      "Memory B and T cells enable a rapid, strong secondary immune response.",
  },

  // ───────────────────────── Pharmacology ─────────────────────────
  {
    id: "ph-1",
    topic: "Pharmacology",
    question:
      "Which organ is the primary site of drug metabolism?",
    options: ["Liver", "Kidney", "Lung", "Spleen", "Stomach"],
    answer: "Liver",
    explanation:
      "Hepatic cytochrome P450 enzymes metabolize most drugs.",
  },
  {
    id: "ph-2",
    topic: "Pharmacology",
    question: "A drug that binds and activates a receptor is called a(n)…",
    options: ["Agonist", "Antagonist", "Inhibitor", "Placebo", "Metabolite"],
    answer: "Agonist",
    explanation:
      "An agonist activates the receptor; an antagonist blocks it.",
  },
  {
    id: "ph-3",
    topic: "Pharmacology",
    question:
      "The 'ADME' of pharmacokinetics stands for absorption, distribution, metabolism, and…",
    options: ["Excretion", "Elimination half-life", "Efficacy", "Endocytosis", "Emulsification"],
    answer: "Excretion",
    explanation:
      "ADME describes how the body handles a drug; kidneys are the main excretion route.",
  },
  {
    id: "ph-4",
    topic: "Pharmacology",
    question:
      "Which class of drugs (e.g., ibuprofen) reduces pain and inflammation by inhibiting cyclooxygenase (COX)?",
    options: [
      "NSAIDs",
      "Beta-blockers",
      "ACE inhibitors",
      "Statins",
      "Proton-pump inhibitors",
    ],
    answer: "NSAIDs",
    explanation:
      "NSAIDs block COX enzymes, reducing prostaglandin-mediated inflammation and pain.",
  },
  {
    id: "ph-5",
    topic: "Pharmacology",
    question: "The half-life of a drug is the time required for its…",
    options: [
      "Plasma concentration to fall by half",
      "Full elimination from the body",
      "Onset of action",
      "Peak effect to occur",
      "Absorption to complete",
    ],
    answer: "Plasma concentration to fall by half",
    explanation:
      "After ~4–5 half-lives, a drug is considered largely eliminated.",
  },
];
