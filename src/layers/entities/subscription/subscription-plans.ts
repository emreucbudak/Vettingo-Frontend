export type BillingPeriod = "monthly" | "annual";

export type SubscriptionPlanId = "basic" | "pro" | "ultra";

export type SubscriptionPlan = {
  id: SubscriptionPlanId;
  name: string;
  description: string;
  monthlyPrice: number;
  annualPrice: number;
  features: readonly string[];
  isPopular?: boolean;
};

export const subscriptionPlans: readonly SubscriptionPlan[] = [
  {
    id: "basic",
    name: "Basic",
    description: "Temel işe alım araçlarıyla hemen başlayın.",
    monthlyPrice: 0,
    annualPrice: 0,
    features: [
      "Temel ilan ve aday özellikleri",
      "Standart analiz ve raporlama",
      "10 kullanıcıya kadar erişim",
      "Kullanıcı başına 5 GB depolama",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    description: "Büyüyen ekipler ve işletmeler için.",
    monthlyPrice: 29.99,
    annualPrice: 14.99,
    features: [
      "150+ entegrasyon desteği",
      "Gelişmiş raporlama ve içgörüler",
      "50 kullanıcıya kadar erişim",
      "Kullanıcı başına 100 GB depolama",
    ],
    isPopular: true,
  },
  {
    id: "ultra",
    name: "Ultra",
    description: "Geniş ölçekli işe alım operasyonları için.",
    monthlyPrice: 45.99,
    annualPrice: 22.99,
    features: [
      "Özel iş akışları ve otomasyon",
      "Denetim kayıtları ve güvenlik takibi",
      "Sınırsız kullanıcı erişimi",
      "Sınırsız bireysel depolama",
    ],
  },
] as const;

export const candidateSubscriptionPlans: readonly SubscriptionPlan[] = [
  {
    id: "basic",
    name: "Basic",
    description: "İş arama sürecinizi temel Vettingo araçlarıyla yönetin.",
    monthlyPrice: 0,
    annualPrice: 0,
    features: [
      "Profesyonel aday profili",
      "Aylık 5 iş başvurusu",
      "Temel iş önerileri",
      "1 GB belge depolama",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    description: "Daha fazla fırsata ulaşmak isteyen adaylar için.",
    monthlyPrice: 9.99,
    annualPrice: 4.99,
    features: [
      "Sınırsız iş başvurusu",
      "Yapay zekâ destekli profil içgörüleri",
      "Gelişmiş iş eşleştirme",
      "25 GB belge depolama",
    ],
    isPopular: true,
  },
  {
    id: "ultra",
    name: "Ultra",
    description: "Kariyer gelişimini uçtan uca hızlandırmak isteyenler için.",
    monthlyPrice: 19.99,
    annualPrice: 9.99,
    features: [
      "Gelişmiş yetkinlik analizleri",
      "Öncelikli aday görünürlüğü",
      "Mülakat hazırlık araçları",
      "Sınırsız belge depolama",
    ],
  },
] as const;
