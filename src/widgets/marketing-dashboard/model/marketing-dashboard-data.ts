import { ROUTES } from "@/shared/config/routes";

export const marketingDashboard = {
  productName: "Vettingo",
  navItems: [
    { label: "Employers", href: ROUTES.employer },
    { label: "Job Seekers", href: ROUTES.candidate },
    { label: "About Us", href: ROUTES.dashboard },
  ],
  hero: {
    title: "Precision Talent Intelligence for Modern Enterprises",
    description:
      "Transform your recruitment strategy with AI-driven insights. We deliver executive-level precision to identify, assess, and benchmark top-tier talent, reducing time-to-hire while maintaining unparalleled quality.",
    primaryCta: "Request a Demo",
    secondaryCta: "Start Hiring",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA7Vo7uQOcHy9Pqg6Rp2IIa3HryznxT58-qfEDPQd6gvj7MP2BWERYfLbkB-1AN4dC0FcBRH8Q0JGJxszK9BVdX5oYBHd4w49hMeruW_ED5vc98AH-DZXyGVNA2DwAG9L3yB2OUtRSk0mYWMGp7orVBWsT9Ix5_Y2R6dak94cGGQbzbNUr-uSqvWf2JOApZQzZvk37_5oLnBRiRADMmxC8eLRNoHnseie8GXx4JlwMNKY8Y9YWOkreRPEn-KHjBYT41flYAE0hkBWI",
    metricLabel: "Matching Accuracy",
    metricValue: "98.4%",
  },
  trustIcons: ["corporate_fare", "domain", "apartment", "business", "storefront"],
  features: [
    {
      kind: "wide-dashboard",
      icon: "dashboard",
      title: "Executive Dashboard",
      description:
        "A high-density command center providing real-time visibility into your recruitment pipeline. Monitor key metrics, bottleneck analysis, and recruiter performance with objective clarity.",
    },
    {
      kind: "standard",
      icon: "document_scanner",
      title: "Smart CV Analysis",
      description:
        "Structured extraction of skills, experience, and quantifiable achievements. Eliminates formatting bias to present pure candidate data.",
      badge: "Parsing Complete",
    },
    {
      kind: "standard",
      icon: "analytics",
      title: "Talent Benchmarking",
      description:
        "Evaluate candidates against industry-standard rubrics and your internal top-performers. Ensure objective, skill-based hiring decisions.",
    },
  ],
  valueCards: [
    {
      title: "40%",
      description: "Reduction in Time-to-Hire",
      featured: true,
    },
    {
      title: "Data-Driven",
      description: "Decision Making Framework",
      featured: false,
    },
  ],
  footerLinks: [
    { label: "Privacy Policy", href: ROUTES.dashboard },
    { label: "Terms of Service", href: ROUTES.dashboard },
    { label: "Contact Support", href: ROUTES.dashboard },
    { label: "Enterprise Solutions", href: ROUTES.employer },
  ],
  copyright: "(c) 2026 Vettingo AI. Professional Talent Management.",
} as const;