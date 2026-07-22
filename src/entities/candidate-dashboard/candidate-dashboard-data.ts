export const candidateProfile = {
  companyLabel: "Vettingo Aday",
  edition: "Kariyer Merkezi",
} as const;

export const navigationItems = [
  { label: "Panel", icon: "space_dashboard", active: true },
  { label: "Başvurular", icon: "assignment_ind" },
  { label: "Yapay Zeka Analizi", icon: "auto_awesome" },
  { label: "İşler", icon: "business_center" },
] as const;

export const utilityItems = [
  { label: "Yardım Merkezi", icon: "support_agent" },
  { label: "Ayarlar", icon: "tune" },
] as const;

export const recommendedJobs = [
  {
    role: "UX Direktörü",
    company: "Creative Dynamics",
    location: "New York, NY",
    icon: "domain",
    match: "98% Eşleşme",
    postedAt: "2 gün önce yayınlandı",
  },
  {
    role: "Tasarım Direktörü",
    company: "Fintech Partners",
    location: "Londra, Birleşik Krallık",
    icon: "account_balance",
    match: "94% Eşleşme",
    postedAt: "5 saat önce yayınlandı",
  },
] as const;

export const footerLinks = ["Gizlilik Politikası", "Kullanım Şartları", "Yardım Merkezi", "Destek"] as const;
