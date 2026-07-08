import { ROUTES } from "@/shared/config/routes";

export const landingPage = {
  productName: "Vettingo",
  navItems: [
    { label: "İşverenler", href: ROUTES.employer },
    { label: "Adaylar", href: ROUTES.candidate },
    { label: "Hakkımızda", href: ROUTES.home },
  ],
  hero: {
    title: "Sıradaki işini bulma vakti geldi",
    description:
      "Yetkinliklerine ve hedeflerine gerçekten uyan fırsatları yapay zeka destekli içgörülerle keşfet. Kariyer yolunu netleştir, güçlü yönlerini öne çıkar ve sana uygun şirketlerle daha hızlı buluş.",
    primaryCta: "Başla",
    people: [
      {
        profession: "Yazılım Geliştirici",
        imageUrl:
          "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=960&q=95",
      },
      {
        profession: "Doktor",
        imageUrl:
          "https://images.unsplash.com/photo-1645066928295-2506defde470?auto=format&fit=crop&w=960&q=95",
      },
      {
        profession: "Mimar",
        imageUrl:
          "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=960&q=95",
      },
    ],
  },
  trustedCompanies: [
    { name: "Google", logoUrl: "https://cdn.simpleicons.org/google" },
    { name: "Apple", logoUrl: "https://cdn.simpleicons.org/apple" },
    { name: "Netflix", logoUrl: "https://cdn.simpleicons.org/netflix" },
    { name: "Spotify", logoUrl: "https://cdn.simpleicons.org/spotify" },
    { name: "Airbnb", logoUrl: "https://cdn.simpleicons.org/airbnb" },
    { name: "Shopify", logoUrl: "https://cdn.simpleicons.org/shopify" },
    { name: "GitHub", logoUrl: "https://cdn.simpleicons.org/github" },
    { name: "PayPal", logoUrl: "https://cdn.simpleicons.org/paypal" },
    { name: "Stripe", logoUrl: "https://cdn.simpleicons.org/stripe" },
    { name: "Uber", logoUrl: "https://cdn.simpleicons.org/uber" },
    { name: "Tesla", logoUrl: "https://cdn.simpleicons.org/tesla" },
    { name: "NVIDIA", logoUrl: "https://cdn.simpleicons.org/nvidia" },
    { name: "Intel", logoUrl: "https://cdn.simpleicons.org/intel" },
    { name: "Meta", logoUrl: "https://cdn.simpleicons.org/meta" },
  ],
  features: [
    {
      title: "Yönetici Paneli",
      description:
        "İşe alım hattınıza gerçek zamanlı görünürlük sağlayan yoğun ve net bir komuta merkezi. Temel metrikleri, darboğazları ve ekip performansını tek ekranda izleyin.",
    },
    {
      title: "Akıllı CV Analizi",
      description:
        "Yetenek, deneyim ve ölçülebilir başarıları yapılandırılmış şekilde çıkarır. Format kaynaklı önyargıyı azaltarak aday verisini sadeleştirir.",
    },
    {
      title: "Yetenek Karşılaştırma",
      description:
        "Adayları sektör standartlarına ve şirketinizin en iyi profillerine göre değerlendirin. Nesnel ve yetkinlik bazlı işe alım kararları alın.",
    },
  ],
  valueCards: [
    {
      value: 40,
      suffix: "%",
      title: "İşe Alım Süresinde Azalma",
      description:
        "Otomatik ön eleme ve aday karşılaştırma akışlarıyla ekiplerin karar süresini kısaltır.",
    },
    {
      value: 92,
      suffix: "%",
      title: "Aday Uyum Skoru",
      description:
        "Rol gereksinimleriyle aday yetkinliklerini daha tutarlı ve ölçülebilir şekilde eşleştirir.",
    },
    {
      value: 3,
      suffix: "x",
      title: "Daha Kısa Liste",
      description:
        "Yüksek potansiyelli adayları öne çıkararak değerlendirme yoğunluğunu azaltır.",
    },
    {
      value: 24,
      suffix: "/7",
      title: "Sürekli Analiz",
      description:
        "Başvuruları anlık olarak işler, ekiplerin güncel aday görünümünü korumasına yardımcı olur.",
    },
  ],
  footerLinks: [
    { label: "Gizlilik Politikası", href: ROUTES.home },
    { label: "Kullanım Koşulları", href: ROUTES.home },
    { label: "Destek", href: ROUTES.home },
    { label: "Kurumsal Çözümler", href: ROUTES.employer },
  ],
} as const;





