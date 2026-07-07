import { ROUTES } from "@/shared/config/routes";

export const marketingDashboard = {
  productName: "Vettingo",
  navItems: [
    { label: "İşverenler", href: ROUTES.employer },
    { label: "Adaylar", href: ROUTES.candidate },
    { label: "Hakkımızda", href: ROUTES.home },
  ],
  hero: {
    title: "Modern Şirketler İçin Hassas Yetenek Zekası",
    description:
      "İşe alım stratejinizi yapay zeka destekli içgörülerle dönüştürün. Üst düzey yetenekleri belirlemek, değerlendirmek ve karşılaştırmak için kurumsal ölçekte netlik sunuyoruz.",
    primaryCta: "Demo Talep Et",
    secondaryCta: "İşe Alıma Başla",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA7Vo7uQOcHy9Pqg6Rp2IIa3HryznxT58-qfEDPQd6gvj7MP2BWERYfLbkB-1AN4dC0FcBRH8Q0JGJxszK9BVdX5oYBHd4w49hMeruW_ED5vc98AH-DZXyGVNA2DwAG9L3yB2OUtRSk0mYWMGp7orVBWsT9Ix5_Y2R6dak94cGGQbzbNUr-uSqvWf2JOApZQzZvk37_5oLnBRiRADMmxC8eLRNoHnseie8GXx4JlwMNKY8Y9YWOkreRPEn-KHjBYT41flYAE0hkBWI",
    metricLabel: "Eşleşme Doğruluğu",
    metricValue: "98.4%",
  },
  trustedCompanies: [
    { name: "Google", logoUrl: "https://cdn.simpleicons.org/google" },
    { name: "Microsoft", logoUrl: "https://cdn.simpleicons.org/microsoft" },
    { name: "Amazon", logoUrl: "https://cdn.simpleicons.org/amazon" },
    { name: "Netflix", logoUrl: "https://cdn.simpleicons.org/netflix" },
    { name: "Spotify", logoUrl: "https://cdn.simpleicons.org/spotify" },
    { name: "Airbnb", logoUrl: "https://cdn.simpleicons.org/airbnb" },
    { name: "Salesforce", logoUrl: "https://cdn.simpleicons.org/salesforce" },
    { name: "Adobe", logoUrl: "https://cdn.simpleicons.org/adobe" },
  ],
  features: [
    {
      kind: "wide-dashboard",
      icon: "dashboard",
      title: "Yönetici Paneli",
      description:
        "İşe alım hattınıza gerçek zamanlı görünürlük sağlayan yoğun ve net bir komuta merkezi. Temel metrikleri, darboğazları ve ekip performansını tek ekranda izleyin.",
    },
    {
      kind: "standard",
      icon: "document_scanner",
      title: "Akıllı CV Analizi",
      description:
        "Yetenek, deneyim ve ölçülebilir başarıları yapılandırılmış şekilde çıkarır. Format kaynaklı önyargıyı azaltarak aday verisini sadeleştirir.",
      badge: "Ayrıştırma Tamamlandı",
    },
    {
      kind: "standard",
      icon: "analytics",
      title: "Yetenek Karşılaştırma",
      description:
        "Adayları sektör standartlarına ve şirketinizin en iyi profillerine göre değerlendirin. Nesnel ve yetkinlik bazlı işe alım kararları alın.",
    },
  ],
  valueCards: [
    {
      title: "40%",
      description: "İşe Alım Süresinde Azalma",
      featured: true,
    },
    {
      title: "Veri Odaklı",
      description: "Karar Alma Çerçevesi",
      featured: false,
    },
  ],
  footerLinks: [
    { label: "Gizlilik Politikası", href: ROUTES.home },
    { label: "Kullanım Şartları", href: ROUTES.home },
    { label: "Destek", href: ROUTES.home },
    { label: "Kurumsal Çözümler", href: ROUTES.employer },
  ],
  copyright: "(c) 2026 Vettingo AI. Profesyonel yetenek yönetimi.",
} as const;