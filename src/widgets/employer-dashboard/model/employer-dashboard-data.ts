export const employerProfile = {
  companyLabel: "Executive Recruitment",
  edition: "Enterprise Edition",
  logoUrl:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuB1iDrQXA2UZbBOIT831gSiCEp2WJXN5mhrrN-46xlQRz5PD25uAFGQKhlVk3uSNJ6UMBmfe2KvrGL2r9VFhRRGpnYfGxJFG5_yEc4VyXW0x6T9UjTRlrfHLF6iitGTGPxfe4IepgHIuu7onthq0vvv0cCLvpsTQkZKcTnLdmEmfv7GRZ-55NTE61g5rsfjHk7udSqLQdkqqrd6pd2JomPfh3EthMfDrAaQ7HUDq7tnIktrdy9OiQ6Go0_NKoV6ag01l0ufgUqca_I",
  avatarUrl:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDj-3AAMRFi6vLh0q0DSkAPCp7ZmBWwWTiSfwKeOJiLNHgtUn5ssBR4n94FfOuWEOmgzP2VuvwrStMGpuS2fy3pvaKh6i5qKFbAu5VpIzUeE6KZStNXatnm_tDLQa5vVIQVU5gkIQMq81DKouDOJyOvowq3xYhmAQhuRT05h_HoKmJI8uwCinnUHxCuysomLr8MdFyCPs5oaipEfK9f05OCTrhyxyB1unhgIWk12DLRyb_vzKrr-gjCKZuQhA0KCjM1L7DHp2ZH2b0",
} as const;

export const employerNavigationItems = [
  { label: "Dashboard", icon: "dashboard", active: true },
  { label: "Applications", icon: "description" },
  { label: "AI Analysis", icon: "psychology" },
  { label: "Jobs", icon: "work" },
] as const;

export const employerUtilityItems = [
  { label: "Help Center", icon: "help" },
  { label: "Settings", icon: "settings" },
] as const;

export const employerStats = [
  {
    label: "Total Open Roles",
    value: "24",
    helper: "+3 this week",
    icon: "work",
  },
  {
    label: "Total Applications",
    value: "1,284",
    helper: "+12% vs last month",
    icon: "description",
  },
] as const;

export const activeRequisitions = [
  {
    title: "Senior Full Stack Engineer",
    requisition: "Req-2401",
    location: "Remote",
    department: "Engineering",
    applicants: "142",
    status: "Interviewing",
    active: true,
  },
  {
    title: "Director of Product Marketing",
    requisition: "Req-2405",
    location: "New York",
    department: "Marketing",
    applicants: "87",
    status: "Screening",
    active: true,
  },
  {
    title: "Enterprise Account Executive",
    requisition: "Req-2412",
    location: "London",
    department: "Sales",
    applicants: "215",
    status: "On Hold",
    active: false,
  },
] as const;

export const topAiMatches = [
  {
    name: "Sarah Jenkins",
    role: "Senior Full Stack Engineer",
    match: "98% Match",
    avatarUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA_WXFMgBdeJpT8pnrG6etHW3LDDjBti_RORQsDNJNVAcX_OgZCTi9eWQJqeliZvYcUe8a1GE3nIUBq_VduyGM-vlCg9n-TSZBBId0IIOl6KneiDDRgfHV9exzOg6flpR8Bv-Mibbl5D-er4qn32X83BgJb22t46N9V4fHidabhS5fzmHmjAzp1BJjuTWvGUY_ROQfhzlIg9q83CU3K0wMQjZ0pJ0tfyrBrTVMjBnyCoQYlAAmouZOPHMz1RG_f9DCDXxpB-o1UFvw",
  },
  {
    name: "Marcus Reid",
    role: "Director of Product Marketing",
    match: "94% Match",
    initials: "MR",
  },
] as const;

export const funnelStages = [
  { label: "Sourced", value: "3,450", width: "w-full", className: "bg-[#d3e4fe] text-[#45474c]" },
  { label: "Applied", value: "1,284", width: "w-[85%]", className: "bg-[#d8e3fb] text-[#091426]" },
  { label: "Screened", value: "412", width: "w-[60%]", className: "bg-[#e5eeff] text-[#45474c]" },
  { label: "Interviewed", value: "156", width: "w-[40%]", className: "bg-[#cbdbf5] text-[#45474c]" },
  { label: "Offered", value: "32", width: "w-[20%]", className: "bg-[#006c49] text-white" },
] as const;

export const monthlyBars = [
  { label: "Jan", height: "h-full" },
  { label: "Feb", height: "h-[80%]" },
  { label: "Mar", height: "h-[65%]" },
  { label: "Apr", height: "h-[40%]" },
  { label: "May", height: "h-[90%]", active: true },
  { label: "Jun", height: "h-[75%]" },
] as const;

export const employerFooterLinks = ["Privacy Policy", "Terms of Service", "Help Center", "Support"] as const;