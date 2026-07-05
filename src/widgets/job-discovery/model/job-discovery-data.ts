export const jobDiscoveryProfile = {
  productName: "Vettingo",
  avatarUrl:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBV3eobsEfz2OxXjgG_HLFNv8WPil16GzlxQZSQ7F0iuvYFfPleI5GEu0TXucdp4sbYUWXHIqkrEUX2ROctko1wXaCCPGSd9AI3ZGuC6pIa6-LgfBsTjq2ZHdQAKY1RhVkd9ADwFrmRtWGTCJp9wTMmqOvu0XVkVTBQ8dr1z2ixc6F18pVKTpuDe8D9xoPnTQOpPS61d8qa-R67wiFA-pXu6wMW6DSH3qljvuYJjRGYVsX5X10iHwNxxb3th6HuBRguQpKt5RU84qg",
} as const;

export const jobDiscoveryNavItems = [
  { label: "Dashboard", active: false },
  { label: "Applications", active: false },
  { label: "AI Analysis", active: false },
  { label: "Jobs", active: true },
] as const;

export const jobFilters = [
  { label: "Salary Range", active: false, hasMenu: true },
  { label: "Job Type", active: false, hasMenu: true },
  { label: "Remote Only", active: true, hasMenu: false },
  { label: "Experience Level", active: false, hasMenu: true },
] as const;

export const recommendedJobs = [
  {
    companyInitial: "A",
    title: "VP of Engineering",
    company: "Acme Corp",
    location: "San Francisco, CA (Hybrid)",
    match: "98% Match",
    matchStrong: true,
    postedAt: "Posted 2d ago",
    description:
      "Leading the technical strategy and overseeing a global engineering team of 150+. Requires extensive experience in scalable cloud architectures and enterprise B2B SaaS solutions.",
    tags: ["Cloud Architecture", "Team Leadership", "$250k - $300k"],
    logoClassName: "bg-[#dce9ff]",
  },
  {
    companyInitial: "N",
    title: "Director of Data Science",
    company: "Nexus Technologies",
    location: "Remote",
    match: "92% Match",
    matchStrong: true,
    postedAt: "Posted 5h ago",
    description:
      "Spearhead our AI initiative. Looking for a visionary leader with a strong background in machine learning models, predictive analytics, and managing cross-functional data teams.",
    tags: ["Machine Learning", "Python", "$210k - $240k"],
    logoClassName: "bg-[#d3e4fe]",
  },
  {
    companyInitial: "G",
    title: "Senior Principal Software Engineer",
    company: "Global Systems Inc.",
    location: "New York, NY (On-site)",
    match: "85% Match",
    matchStrong: false,
    postedAt: "Posted 1w ago",
    description:
      "Seeking an individual contributor at the highest level to architect critical systems. Deep knowledge of distributed systems, Go, and high-throughput transaction processing required.",
    tags: ["Distributed Systems", "Golang", "$190k - $220k"],
    logoClassName: "bg-[#cbdbf5]",
  },
] as const;

export const marketIntelligence = {
  profile: "VP Engineering",
  demandTrend: "+12%",
  demandWidth: "w-3/4",
  demandNote: "High demand in your primary sector (B2B SaaS).",
  salaryPercentiles: [
    { label: "25th", value: "$210k", active: false },
    { label: "50th (Median)", value: "$245k", active: true },
    { label: "75th", value: "$280k", active: false },
  ],
} as const;

export const jobFooterLinks = ["Privacy Policy", "Terms of Service", "Help Center", "Support"] as const;