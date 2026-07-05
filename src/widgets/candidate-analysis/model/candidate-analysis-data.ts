export const analysisProfile = {
  companyLabel: "Executive Recruitment",
  edition: "Enterprise Edition",
  productName: "Vettingo",
  avatarUrl:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBp4-TTmz4s_isjz__hdxgCNQEZ17MBAE0O01NeZO36S-Li82jBgd7VNQWdAnue4dTsHomRmdaQcbLhzVAO_fnTwx513iA5OxmlurjikwJEwR2Izsv75XYMu3VLP37GMzrhVNDOxxc_WMF8Q6vYGvxcwsDE-7lAXsUdQ3FNgYUT1QXyiCrUE7TTExNZL12gW7OATalZ1zTgBzkwAIAdls_M6XiuNhWHIkTMNhe2772yBbdq6-WGy8YLdysMMOf9yu4feyiuheDL3XM",
} as const;

export const analysisNavigationItems = [
  { label: "Dashboard", icon: "dashboard" },
  { label: "Applications", icon: "description" },
  { label: "AI Analysis", icon: "psychology", active: true },
  { label: "Jobs", icon: "work" },
] as const;

export const analysisUtilityItems = [
  { label: "Help Center", icon: "help" },
  { label: "Settings", icon: "settings" },
] as const;

export const candidateDetails = {
  name: "Elara Vance",
  title: "Senior Product Manager Candidate",
  matchLabel: "92% Smart Match",
  photoUrl:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAvWtuIVxakYxSZsuRra1JkCJRPaCqaD41XoUEhHjaa1JJsW5AeuRHO3i1CR_EFWZY7sl0b_BkZ5vrwqo6mFMWW30pauw_nQaRN8d5NX0V9Y0R9kVo3ZL6LkOo_1MdRAad--kGpG-FmQZiiiNw7DqLwQPIF0fIBz-STEgJkgEyQM1EcucQAFS5yvpvsxG1qeOWKy1A0XKsi2d0-hwr8bmZVfbQuLIUDXThh-f8y8rvX75bqeKy5jJyPc5Qg4lCoxQpYAb_J6Rd_mjI",
  location: "San Francisco, CA (Open to Relocation)",
  email: "elara.vance@example.com",
  experience: "8+ Years Exp.",
  status: "Technical Screen",
  expectedSalary: "$160k - $180k",
} as const;

export const executiveSummary = {
  text: "Elara presents as a highly capable product leader with a strong track record in scaling enterprise SaaS platforms. Her experience at TechCorp aligns closely with our current roadmap challenges. The AI analysis indicates exceptional strength in cross-functional stakeholder management and data-driven product strategy. However, her exposure to early-stage zero-to-one product development is somewhat limited, which may require support if she is tasked with leading the upcoming experimental incubator projects.",
  strengths: ["Enterprise B2B SaaS Scaling", "Agile Transformation Leadership"],
  risks: ["Limited 0-to-1 Product Launches", "Hardware integration experience"],
} as const;

export const suitabilityScores = {
  total: 92,
  categories: [
    { label: "Technical Skills", value: 95, width: "w-[95%]" },
    { label: "Domain Exp.", value: 88, width: "w-[88%]" },
  ],
} as const;

export const experienceTimeline = [
  {
    title: "Director of Product",
    company: "TechCorp Inc.",
    period: "2020 - Present",
    description:
      "Led a team of 14 PMs across 3 core product lines. Increased enterprise ARR by 45% through strategic repositioning of the analytics suite.",
    tags: ["Team Leadership", "SaaS"],
    current: true,
  },
  {
    title: "Senior Product Manager",
    company: "InnovateSoft",
    period: "2017 - 2020",
    description:
      "Spearheaded the transition from on-premise solutions to a cloud-native architecture, reducing churn by 12%.",
    tags: ["Cloud Migration", "Agile"],
    current: false,
  },
] as const;

export const educationItems = [
  {
    icon: "account_balance",
    title: "MBA, Technology Management",
    school: "Stanford University Graduate School of Business",
    period: "2015 - 2017",
  },
  {
    icon: "science",
    title: "B.S. Computer Science",
    school: "University of California, Berkeley",
    period: "2010 - 2014",
  },
] as const;

export const certifications = ["CSPO (Scrum Alliance)", "Pragmatic Marketing"] as const;

export const analysisFooterLinks = ["Privacy Policy", "Terms of Service", "Help Center", "Support"] as const;