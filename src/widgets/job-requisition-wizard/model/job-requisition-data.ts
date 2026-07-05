export const requisitionProfile = {
  productName: "Vettingo",
  avatarUrl:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDuQANAz6hYOvN2WquMVuQErcJFN9udX4F5FzWJKWSOavNzjfRXD_1hEJtmxDJzVxPehhXhTxyMs3TRUEupYi6lA3T-KPyj0bXpwNnD_55RTvKgIvV6M-p8CffPyP-dz0vi5i1BrxWRkP8zfr2Z9Vu4XqI1svN6QBn3lxoe_zSz6PCUC3XCTyA_C_anH55JLH9Kgc956Drno1xwtGkpTiQCT6YcTHURUi6XO1aJGscgppahlRHd7jLGkifhjkYvhTIgXilNcMDLSZ4",
} as const;

export const requisitionSteps = [
  { label: "Role Definition", value: "1", active: true },
  { label: "Requirements", value: "2", active: false },
  { label: "Review & Publish", value: "3", active: false },
] as const;

export const requisitionForm = {
  title: "New Job Requisition",
  description:
    "Define the role and requirements. Our AI will assist in shaping the ideal candidate profile.",
  jobTitle: "Senior Product Manager",
  departmentOptions: ["Product & Engineering", "Marketing", "Sales"],
  locationTypeOptions: ["Hybrid", "Remote", "On-site"],
  responsibilities:
    "Lead the development and execution of the product roadmap for our enterprise analytics suite. Collaborate with engineering, design, and marketing to deliver high-impact features.",
  suggestionHint: "AI generated suggestions available based on this title.",
} as const;

export const assistantInsights = {
  title: "AI Requisition Assistant",
  intro:
    "Based on the title \"Senior Product Manager\" in \"Product & Engineering\", here are market-aligned suggestions.",
  skills: ["Agile Methodology", "Data Analysis", "Stakeholder Mgmt"],
  compensation: "$140,000 - $180,000",
  compensationUnit: "/ yr",
  compensationNote: "Typical range for this title and location type.",
} as const;