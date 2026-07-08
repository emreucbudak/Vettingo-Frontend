export const jobDiscoveryProfile = {
  productName: "Vettingo",
  avatarUrl:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBV3eobsEfz2OxXjgG_HLFNv8WPil16GzlxQZSQ7F0iuvYFfPleI5GEu0TXucdp4sbYUWXHIqkrEUX2ROctko1wXaCCPGSd9AI3ZGuC6pIa6-LgfBsTjq2ZHdQAKY1RhVkd9ADwFrmRtWGTCJp9wTMmqOvu0XVkVTBQ8dr1z2ixc6F18pVKTpuDe8D9xoPnTQOpPS61d8qa-R67wiFA-pXu6wMW6DSH3qljvuYJjRGYVsX5X10iHwNxxb3th6HuBRguQpKt5RU84qg",
} as const;

export const jobDiscoveryNavItems = [
  { label: "Panel", active: false },
  { label: "Başvurular", active: false },
  { label: "Yapay Zeka Analizi", active: false },
  { label: "İşler", active: true },
] as const;

export const jobFilters = [
  { label: "Maaş Aralığı", active: false, hasMenu: true },
  { label: "İş Türü", active: false, hasMenu: true },
  { label: "Sadece Uzaktan", active: true, hasMenu: false },
  { label: "Deneyim Seviyesi", active: false, hasMenu: true },
] as const;

export const recommendedJobs = [
  {
    companyInitial: "A",
    title: "Mühendislik Başkan Yardımcısı",
    company: "Acme Corp",
    location: "San Francisco, CA (Hibrit)",
    match: "98% Eşleşme",
    matchStrong: true,
    postedAt: "2 gün önce yayınlandı",
    description:
      "Teknik stratejiye liderlik edecek ve 150+ kişilik global mühendislik ekibini yönetecek. Ölçeklenebilir bulut mimarileri ve kurumsal B2B SaaS deneyimi bekleniyor.",
    tags: ["Bulut Mimarisi", "Ekip Liderliği", "$250k - $300k"],
    logoClassName: "bg-[#dce9ff]",
  },
  {
    companyInitial: "N",
    title: "Veri Bilimi Direktörü",
    company: "Nexus Technologies",
    location: "Uzaktan",
    match: "92% Eşleşme",
    matchStrong: true,
    postedAt: "5 saat önce yayınlandı",
    description:
      "Yapay zeka girişimimize liderlik edecek; makine öğrenimi modelleri, tahmine dayalı analitik ve çok disiplinli veri ekipleri yönetiminde güçlü bir lider aranıyor.",
    tags: ["Makine Öğrenimi", "Python", "$210k - $240k"],
    logoClassName: "bg-[#d3e4fe]",
  },
  {
    companyInitial: "G",
    title: "Kıdemli Principal Yazılım Mühendisi",
    company: "Global Systems Inc.",
    location: "New York, NY (Ofisten)",
    match: "85% Eşleşme",
    matchStrong: false,
    postedAt: "1 hafta önce yayınlandı",
    description:
      "Kritik sistemleri tasarlayacak üst düzey bireysel katkı sağlayıcı aranıyor. Dağıtık sistemler, Go ve yüksek hacimli işlem altyapılarında derin bilgi bekleniyor.",
    tags: ["Dağıtık Sistemler", "Golang", "$190k - $220k"],
    logoClassName: "bg-[#cbdbf5]",
  },
] as const;

export const marketIntelligence = {
  profile: "Mühendislik Başkan Yardımcısı",
  demandTrend: "+12%",
  demandWidth: "w-3/4",
  demandNote: "Birincil sektörünüzde (B2B SaaS) yüksek talep var.",
  salaryPercentiles: [
    { label: "25. yüzdelik", value: "$210k", active: false },
    { label: "50. yüzdelik (Medyan)", value: "$245k", active: true },
    { label: "75. yüzdelik", value: "$280k", active: false },
  ],
} as const;

export const jobFooterLinks = ["Gizlilik Politikası", "Kullanım Şartları", "Yardım Merkezi", "Destek"] as const;