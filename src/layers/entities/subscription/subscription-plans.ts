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
