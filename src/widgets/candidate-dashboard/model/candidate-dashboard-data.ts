export const candidateProfile = {
  name: "Sarah",
  companyLabel: "Executive Recruitment",
  edition: "Enterprise Edition",
  avatarUrl:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDDsphwRVoRUDrgzfSRfnnofvMHH00bJ_aq2wVLZVXbiJzU4AtDVCM0joSEnUKG2Mlg22FSrdxb0in2BkohAORmRasc1L4uPUN_8DTeosIxV7JQ1x0LYAOmLJBz9-CWVTVDQlACqd7mA7EymUmfxOsSoAV7trP4e2u-8V6Y3hr8e_ljkxBMeaxxRXeYGU5yJMYsqLCXWEQCQ6vVhx-i-WAGrIUa15jyK5_Tcjg6lSWzlW2zheH6f137tFoYzNPQt-CR68HClETAnh4",
  logoUrl:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAMlXZNSo1Km6NMCegTn8gPvBDQTvvULHeWx_YZ46bMqnCPZpDatkKUStQK7dPP8eMTmiddL29U3ildafGbyKbdeoJzHSrGNzCT2ShvR7B4GelfmZrP0Xk85Xr1jk4KmH7xAPMirG_uMj8qwcn7OLMCYEXC1S1OKiRtEWHguTsrjpYWrOjZPrzVwSdqVrLdU6kr4mYsPGmCcVD1zo_vIRqeqMBl74f-Jxb_gKjNdgdgMqd2XlJyQnedxng8tNJDAV3pt2uoyNuNB7o",
} as const;

export const navigationItems = [
  { label: "Dashboard", icon: "dashboard", active: true },
  { label: "Applications", icon: "description" },
  { label: "AI Analysis", icon: "psychology" },
  { label: "Jobs", icon: "work" },
] as const;

export const utilityItems = [
  { label: "Help Center", icon: "help" },
  { label: "Settings", icon: "settings" },
] as const;

export const activeApplications = [
  {
    role: "Senior Product Manager",
    company: "Global Tech Corp",
    location: "San Francisco, CA",
    status: "Interviewing",
    progressClassName: "w-2/3",
    currentStep: "Step 3 of 4: Technical Interview",
  },
  {
    role: "VP of Engineering",
    company: "Innovate Solutions",
    location: "Remote",
    status: "Under Review",
    progressClassName: "w-1/3",
    currentStep: "Step 1 of 4: Initial Screen",
  },
] as const;

export const recommendedJobs = [
  {
    role: "Director of UX",
    company: "Creative Dynamics",
    location: "New York, NY",
    icon: "domain",
    match: "98% Match",
    postedAt: "Posted 2d ago",
  },
  {
    role: "Chief Design Officer",
    company: "Fintech Partners",
    location: "London, UK",
    icon: "account_balance",
    match: "94% Match",
    postedAt: "Posted 5h ago",
  },
] as const;

export const upcomingInterviews = [
  {
    month: "Oct",
    day: "12",
    title: "System Design Round",
    company: "Global Tech Corp",
    time: "10:00 AM - 11:30 AM PST",
  },
  {
    month: "Oct",
    day: "15",
    title: "Cultural Fit Chat",
    company: "Innovate Solutions",
    time: "2:00 PM - 2:30 PM EST",
  },
] as const;

export const footerLinks = ["Privacy Policy", "Terms of Service", "Help Center", "Support"] as const;