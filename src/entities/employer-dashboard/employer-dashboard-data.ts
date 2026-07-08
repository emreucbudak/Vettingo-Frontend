export const employerProfile = {
  companyLabel: "Executive Recruitment",
  edition: "Kurumsal Paket",
  logoUrl:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuB1iDrQXA2UZbBOIT831gSiCEp2WJXN5mhrrN-46xlQRz5PD25uAFGQKhlVk3uSNJ6UMBmfe2KvrGL2r9VFhRRGpnYfGxJFG5_yEc4VyXW0x6T9UjTRlrfHLF6iitGTGPxfe4IepgHIuu7onthq0vvv0cCLvpsTQkZKcTnLdmEmfv7GRZ-55NTE61g5rsfjHk7udSqLQdkqqrd6pd2JomPfh3EthMfDrAaQ7HUDq7tnIktrdy9OiQ6Go0_NKoV6ag01l0ufgUqca_I",
  avatarUrl:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDj-3AAMRFi6vLh0q0DSkAPCp7ZmBWwWTiSfwKeOJiLNHgtUn5ssBR4n94FfOuWEOmgzP2VuvwrStMGpuS2fy3pvaKh6i5qKFbAu5VpIzUeE6KZStNXatnm_tDLQa5vVIQVU5gkIQMq81DKouDOJyOvowq3xYhmAQhuRT05h_HoKmJI8uwCinnUHxCuysomLr8MdFyCPs5oaipEfK9f05OCTrhyxyB1unhgIWk12DLRyb_vzKrr-gjCKZuQhA0KCjM1L7DHp2ZH2b0",
} as const;

export const employerNavigationItems = [
  { label: "Panel", icon: "dashboard", active: true },
  { label: "Başvurular", icon: "description" },
  { label: "Yapay Zeka Analizi", icon: "psychology" },
  { label: "İşler", icon: "work" },
] as const;

export const employerUtilityItems = [
  { label: "Yardım Merkezi", icon: "help" },
  { label: "Ayarlar", icon: "settings" },
] as const;

export const employerStats = [
  {
    label: "Toplam Açık Rol",
    value: "24",
    helper: "+3 bu hafta",
    icon: "work",
  },
  {
    label: "Toplam Başvuru",
    value: "1,284",
    helper: "Geçen aya göre +12%",
    icon: "description",
  },
] as const;

export const activeRequisitions = [
  {
    title: "Kıdemli Full Stack Mühendisi",
    requisition: "Req-2401",
    location: "Uzaktan",
    department: "Mühendislik",
    applicants: "142",
    status: "Mülakat Aşamasında",
    active: true,
  },
  {
    title: "Ürün Pazarlama Direktörü",
    requisition: "Req-2405",
    location: "New York",
    department: "Pazarlama",
    applicants: "87",
    status: "Ön Eleme",
    active: true,
  },
  {
    title: "Kurumsal Satış Yöneticisi",
    requisition: "Req-2412",
    location: "Londra",
    department: "Satış",
    applicants: "215",
    status: "Beklemede",
    active: false,
  },
] as const;

export const topAiMatches = [
  {
    name: "Sarah Jenkins",
    role: "Kıdemli Full Stack Mühendisi",
    match: "98% Eşleşme",
    avatarUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA_WXFMgBdeJpT8pnrG6etHW3LDDjBti_RORQsDNJNVAcX_OgZCTi9eWQJqeliZvYcUe8a1GE3nIUBq_VduyGM-vlCg9n-TSZBBId0IIOl6KneiDDRgfHV9exzOg6flpR8Bv-Mibbl5D-er4qn32X83BgJb22t46N9V4fHidabhS5fzmHmjAzp1BJjuTWvGUY_ROQfhzlIg9q83CU3K0wMQjZ0pJ0tfyrBrTVMjBnyCoQYlAAmouZOPHMz1RG_f9DCDXxpB-o1UFvw",
  },
  {
    name: "Marcus Reid",
    role: "Ürün Pazarlama Direktörü",
    match: "94% Eşleşme",
    initials: "MR",
  },
] as const;

export const funnelStages = [
  { label: "Kaynaklandı", value: "3,450", width: "w-full", className: "bg-[#d3e4fe] text-[#45474c]" },
  { label: "Başvurdu", value: "1,284", width: "w-[85%]", className: "bg-[#d8e3fb] text-[#091426]" },
  { label: "Elendi", value: "412", width: "w-[60%]", className: "bg-[#e5eeff] text-[#45474c]" },
  { label: "Görüştü", value: "156", width: "w-[40%]", className: "bg-[#cbdbf5] text-[#45474c]" },
  { label: "Teklif Aldı", value: "32", width: "w-[20%]", className: "bg-[#006c49] text-white" },
] as const;

export const monthlyBars = [
  { label: "Oca", height: "h-full" },
  { label: "Şub", height: "h-[80%]" },
  { label: "Mar", height: "h-[65%]" },
  { label: "Nis", height: "h-[40%]" },
  { label: "May", height: "h-[90%]", active: true },
  { label: "Haz", height: "h-[75%]" },
] as const;

export const employerFooterLinks = ["Gizlilik Politikası", "Kullanım Şartları", "Yardım Merkezi", "Destek"] as const;