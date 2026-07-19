export const analysisProfile = {
  companyLabel: "Executive Recruitment",
  edition: "Kurumsal Paket",
  productName: "Vettingo",
  avatarUrl:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBp4-TTmz4s_isjz__hdxgCNQEZ17MBAE0O01NeZO36S-Li82jBgd7VNQWdAnue4dTsHomRmdaQcbLhzVAO_fnTwx513iA5OxmlurjikwJEwR2Izsv75XYMu3VLP37GMzrhVNDOxxc_WMF8Q6vYGvxcwsDE-7lAXsUdQ3FNgYUT1QXyiCrUE7TTExNZL12gW7OATalZ1zTgBzkwAIAdls_M6XiuNhWHIkTMNhe2772yBbdq6-WGy8YLdysMMOf9yu4feyiuheDL3XM",
} as const;

export const analysisNavigationItems = [
  { label: "Panel", icon: "space_dashboard" },
  { label: "Başvurular", icon: "assignment_ind" },
  { label: "Yapay Zeka Analizi", icon: "auto_awesome", active: true },
  { label: "İşler", icon: "business_center" },
] as const;

export const analysisUtilityItems = [
  { label: "Yardım Merkezi", icon: "support_agent" },
  { label: "Ayarlar", icon: "tune" },
] as const;

export const candidateDetails = {
  name: "Elara Vance",
  title: "Kıdemli Ürün Yöneticisi Adayı",
  matchLabel: "92% Akıllı Eşleşme",
  photoUrl:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAvWtuIVxakYxSZsuRra1JkCJRPaCqaD41XoUEhHjaa1JJsW5AeuRHO3i1CR_EFWZY7sl0b_BkZ5vrwqo6mFMWW30pauw_nQaRN8d5NX0V9Y0R9kVo3ZL6LkOo_1MdRAad--kGpG-FmQZiiiNw7DqLwQPIF0fIBz-STEgJkgEyQM1EcucQAFS5yvpvsxG1qeOWKy1A0XKsi2d0-hwr8bmZVfbQuLIUDXThh-f8y8rvX75bqeKy5jJyPc5Qg4lCoxQpYAb_J6Rd_mjI",
  location: "San Francisco, CA (Taşınmaya açık)",
  email: "elara.vance@example.com",
  experience: "8+ yıl deneyim",
  status: "Teknik Görüşme",
  expectedSalary: "$160k - $180k",
} as const;

export const executiveSummary = {
  text: "Elara, kurumsal SaaS platformlarını ölçeklendirme konusunda güçlü geçmişe sahip yetkin bir ürün lideri profili çiziyor. TechCorp deneyimi mevcut yol haritası ihtiyaçlarımızla yakından örtüşüyor. Yapay zeka analizi, paydaş yönetimi ve veri odaklı ürün stratejisinde çok güçlü olduğunu gösteriyor. Erken aşama sıfırdan ürün geliştirme deneyimi ise sınırlı; deneysel ürün ekiplerine liderlik ederse destek gerekebilir.",
  strengths: ["Kurumsal B2B SaaS ölçekleme", "Çevik dönüşüm liderliği"],
  risks: ["0'dan 1'e ürün lansmanı deneyimi sınırlı", "Donanım entegrasyonu deneyimi"],
} as const;

export const suitabilityScores = {
  total: 92,
  categories: [
    { label: "Teknik Yetkinlik", value: 95, width: "w-[95%]" },
    { label: "Alan Deneyimi", value: 88, width: "w-[88%]" },
  ],
} as const;

export const experienceTimeline = [
  {
    title: "Ürün Direktörü",
    company: "TechCorp Inc.",
    period: "2020 - Günümüz",
    description:
      "3 ana ürün hattında 14 ürün yöneticisinden oluşan ekibe liderlik etti. Analitik ürün ailesini yeniden konumlandırarak kurumsal yıllık geliri %45 artırdı.",
    tags: ["Ekip Liderliği", "SaaS"],
    current: true,
  },
  {
    title: "Kıdemli Ürün Yöneticisi",
    company: "InnovateSoft",
    period: "2017 - 2020",
    description:
      "Yerinde kurulum çözümlerinden bulut tabanlı mimariye geçişe liderlik ederek müşteri kaybını %12 azalttı.",
    tags: ["Buluta Geçiş", "Çevik"],
    current: false,
  },
] as const;

export const educationItems = [
  {
    icon: "account_balance",
    title: "MBA, Teknoloji Yönetimi",
    school: "Stanford Üniversitesi İşletme Fakültesi",
    period: "2015 - 2017",
  },
  {
    icon: "science",
    title: "B.S. Bilgisayar Bilimleri",
    school: "Kaliforniya Üniversitesi, Berkeley",
    period: "2010 - 2014",
  },
] as const;

export const certifications = ["CSPO (Scrum Alliance)", "Pragmatic Marketing"] as const;

export const analysisFooterLinks = ["Gizlilik Politikası", "Kullanım Şartları", "Yardım Merkezi", "Destek"] as const;