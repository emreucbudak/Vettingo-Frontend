export const wizardSteps = [
  { label: "Yükle", state: "completed", icon: "check" },
  { label: "YZ Ayrıştırma", state: "active", value: "2" },
  { label: "Eksik Analizi", state: "inactive", value: "3" },
] as const;

export const parsedResume = {
  summary:
    "Tam yığın web geliştirme, bulut mimarisi ve ölçeklenebilir mikroservisler konusunda uzmanlaşmış 8+ yıl deneyimli kıdemli yazılım mühendisi.",
  skills: [
    { label: "JavaScript (ES6+)", highlighted: false },
    { label: "React / Next.js", highlighted: false },
    { label: "Node.js", highlighted: false },
    { label: "Python", highlighted: false },
    { label: "AWS", highlighted: false },
    { label: "Sistem Tasarımı", highlighted: true },
  ],
} as const;

export const parsedExperiences = [
  {
    title: "Kıdemli Frontend Geliştirici",
    company: "TechCorp Solutions",
    location: "San Francisco, CA",
    period: "2021 - Günümüz",
    current: true,
    bullets: [
      "Eski monolitik uygulamanın mikro-frontend mimarisine geçişine liderlik ederek yükleme sürelerini %40 iyileştirdi.",
      "5 junior geliştiriciden oluşan ekibe mentorluk yaptı ve kod kalite standartlarını oluşturdu.",
    ],
  },
  {
    title: "Yazılım Mühendisi II",
    company: "InnovateApp Inc.",
    location: "Austin, TX",
    period: "2018 - 2021",
    current: false,
    bullets: [
      "Node.js ve Express kullanarak REST API'leri geliştirdi ve bakımını yaptı.",
      "Güvenli ödeme akışları için üçüncü taraf ödeme sağlayıcılarını entegre etti.",
    ],
  },
] as const;

export const parsedEducation = {
  degree: "B.S. Bilgisayar Bilimleri",
  school: "Teknoloji Üniversitesi",
  period: "2018 mezunu",
} as const;