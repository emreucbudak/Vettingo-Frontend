export const wizardSteps = [
  { label: "Upload", state: "completed", icon: "check" },
  { label: "AI Parsing", state: "active", value: "2" },
  { label: "Gap Analysis", state: "inactive", value: "3" },
] as const;

export const parsedResume = {
  summary:
    "Senior Software Engineer with 8+ years of experience specializing in full-stack web development, cloud architecture, and scalable microservices.",
  skills: [
    { label: "JavaScript (ES6+)", highlighted: false },
    { label: "React / Next.js", highlighted: false },
    { label: "Node.js", highlighted: false },
    { label: "Python", highlighted: false },
    { label: "AWS", highlighted: false },
    { label: "System Design", highlighted: true },
  ],
} as const;

export const parsedExperiences = [
  {
    title: "Senior Frontend Developer",
    company: "TechCorp Solutions",
    location: "San Francisco, CA",
    period: "2021 - Present",
    current: true,
    bullets: [
      "Led the migration of a legacy monolithic application to a micro-frontend architecture, improving load times by 40%.",
      "Mentored a team of 5 junior developers and established code quality standards.",
    ],
  },
  {
    title: "Software Engineer II",
    company: "InnovateApp Inc.",
    location: "Austin, TX",
    period: "2018 - 2021",
    current: false,
    bullets: [
      "Developed and maintained RESTful APIs using Node.js and Express.",
      "Integrated third-party payment gateways ensuring secure transactions.",
    ],
  },
] as const;

export const parsedEducation = {
  degree: "B.S. Computer Science",
  school: "University of Technology",
  period: "Graduated 2018",
} as const;