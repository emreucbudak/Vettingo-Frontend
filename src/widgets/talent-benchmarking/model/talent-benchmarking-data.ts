export type CandidateMetric =
  | {
      kind: "skill";
      percent: number;
      label: string;
    }
  | {
      kind: "status";
      icon: "check_circle" | "close";
      label: string;
      positive: boolean;
    }
  | {
      kind: "text";
      label: string;
      tone: "default" | "error";
      note: string;
    }
  | {
      kind: "workModel";
      label: string;
      dotClassName: string;
    };

export type BenchmarkRow = {
  section: string;
  metric: string;
  showSection: boolean;
  values: [CandidateMetric, CandidateMetric, CandidateMetric];
};

export const benchmarkingProfile = {
  productName: "TalentPulse",
  organizationName: "Executive Recruitment",
  planName: "Kurumsal Paket",
  title: "Aday Karşılaştırma",
  subtitle: "Kıdemli Yazılım Mühendisi (Talep #4921) için en iyi 3 aday karşılaştırılıyor",
  avatarUrl:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCA_tP7Ag6xT7N6cN29bz6XBLU2XpKHUdwqmviLdrjBXNEQcvmHJrA4tnO6YrZOCo3dhoMdn3P-NZPh-TpL1sNJEvCmTlF2vCLEbMrmxF2Wm6n-cEujCDRu6aVqleLyclzWDl-rqecAe7M0Ik_yNYI3-39jsO85GpGpO4YdPvb_bxqFgyABGaY7OZwvAtB5jM0PPzZWfE4lXYRixJFk_R9zFXeWrpplx9FHW9P4JFuYj0YCJQeQTbQgIrSRqd1meQrFL7Vc2ALr9h4",
  organizationLogoUrl:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuB29-PmQ3Xu_ywRm4gtC0btd6YQErPyzY6YneEZVFu9mJ5xG304aY_7rCqs3oFYgLEVrtXre213brZU5wiC6QCd_yLHhPBdn2BppiYYztCjC7ijOyLcvF6HqPfveJ_IZfyWBoYoXM8rdlnyPGgIV8AB-h66K9BLCSYratDzyYiQ3_ob9FVWDoes-zJ9o8nTMAM0LRw3SOzhgf4QNqhod5znjWDD7FmiVMxwNaET252G21siRTlUf5WfvZJ27oRVG-2iWJn_-Fyt46I",
};

export const navItems = [
  { label: "Ana Sayfa", href: "/" },
  { label: "Adaylar", href: "/candidate" },
  { label: "Karşılaştır", href: "/talent-benchmarking" },
  { label: "Raporlar", href: "/" },
];

export const sidebarItems = [
  { label: "Panel", icon: "dashboard", active: false, href: "/" },
  { label: "Başvurular", icon: "description", active: false, href: "/candidate" },
  { label: "Yapay Zeka Analizi", icon: "psychology", active: true, href: "/candidate-analysis" },
  { label: "İşler", icon: "work", active: false, href: "/jobs" },
];

export const supportItems = [
  { label: "Yardım Merkezi", icon: "help", href: "/" },
  { label: "Ayarlar", icon: "settings", href: "/" },
];

export const benchmarkCandidates = [
  {
    name: "Sarah Chen",
    role: "TechCorp'ta Lider Geliştirici",
    match: "92% Eşleşme",
    avatarUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAykrctd34fMwaajDyWdBSOimTf3RFPOqDBIqu9xA5orCwyNg1fBa3DcR3JUIsQpUH0nT3KUsab1JLe2mOh-3pB6RYzrdNCJpFca5Nfcvndtcefrua_GKG0IJOSnNkl6nMvdMXAfpi_ITuQpPQ6FATdP9diMwcBzR3uORbRZzX0wQ0AQCiVwCTNdz6yEdt1G63voxE5aKDGhyVf1a_p8mzsCeM9pTu6Jk9I7J2Fe-5GAwMB_QQ9KE_jfbKeZJvOKXhy7LM5h05ZDZo",
  },
  {
    name: "Marcus Johnson",
    role: "FinSys'te Kıdemli Mühendis",
    match: "88% Eşleşme",
    avatarUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA0bDDuInevxTn_-SwUjFwKG0gcLxvXFgo6_NUR_4PQ6vhUX5XKSWRg_C25u4wyvd4jR3bf5dZpb07uhk2HbU_lO7HF4PxINXca4p0ulMxjuEvm-OUZQf7LPrTUkdgu0v7wmTYR8HOlLJyXWP2bGLnU6OPcPHLO8KeX85nz607JizlqgzPWx3TnbIirqNA8wCf7HZr4WeL52dn6PEBU5rKIYqNeIQfHoWm22JaeYNLCYk8AyGCRHeV9IHbVYfXZJCb0fDBeSQ2HYQI",
  },
  {
    name: "Elena Rostova",
    role: "Bağımsız Mimari Danışman",
    match: "85% Eşleşme",
    avatarUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA4MUXzO_JAJlKfSYNYVcMhy5OQoaEjnDNccbqkNvW6pzsrw1O82ifOWqEAcxWROIOL4f8vVFUTb_oyVG8OdLaBFZWvsER4jUlpUv_QQNTSv0ZpZcksaHoSDr5O6Swa6XQDCy5770m6Rf8MJzUWu4mzu_6LgF8v4QQgxWkJFVeEA6NzsxEnWf5BTj5dDcIheT-yNaHCTWpM0B3Z0qZKT5RdOZzjjotYuSJDAjSRq9EdpYOmgh_iikAIOwooMLEOlSEPwDfAiBXzql0",
  },
];

export const benchmarkRows: BenchmarkRow[] = [
  {
    section: "Teknik Yetkinlik Seviyesi",
    metric: "React / Next.js",
    showSection: true,
    values: [
      { kind: "skill", percent: 95, label: "Uzman" },
      { kind: "skill", percent: 80, label: "İleri" },
      { kind: "skill", percent: 85, label: "İleri" },
    ],
  },
  {
    section: "Teknik Yetkinlik Seviyesi",
    metric: "Sistem Mimarisi",
    showSection: false,
    values: [
      { kind: "skill", percent: 80, label: "İleri" },
      { kind: "skill", percent: 90, label: "Uzman" },
      { kind: "skill", percent: 95, label: "Uzman" },
    ],
  },
  {
    section: "Deneyim Uyumu",
    metric: "Alan: FinTech",
    showSection: true,
    values: [
      { kind: "status", icon: "close", label: "Sınırlı deneyim", positive: false },
      { kind: "status", icon: "check_circle", label: "5+ yıl", positive: true },
      { kind: "status", icon: "check_circle", label: "2 yıl", positive: true },
    ],
  },
  {
    section: "Deneyim Uyumu",
    metric: "Ekip Liderliği",
    showSection: false,
    values: [
      { kind: "status", icon: "check_circle", label: "8 kişilik ekip yönetti", positive: true },
      { kind: "status", icon: "close", label: "Bireysel katkı", positive: false },
      { kind: "status", icon: "check_circle", label: "Matris yönetim", positive: true },
    ],
  },
  {
    section: "Lojistik ve Beklentiler",
    metric: "Maaş Beklentisi",
    showSection: true,
    values: [
      { kind: "text", label: "$160k - $180k", tone: "default", note: "Bütçe içinde" },
      { kind: "text", label: "$190k - $210k", tone: "error", note: "Bütçe üstü" },
      { kind: "text", label: "$150k - $170k", tone: "default", note: "Bütçe içinde" },
    ],
  },
  {
    section: "Lojistik ve Beklentiler",
    metric: "Çalışma Modeli",
    showSection: false,
    values: [
      { kind: "workModel", label: "Hibrit (3 gün)", dotClassName: "bg-[#006c49]" },
      { kind: "workModel", label: "Sadece uzaktan", dotClassName: "bg-[#bcc7de]" },
      { kind: "workModel", label: "Hibrit (Esnek)", dotClassName: "bg-[#006c49]" },
    ],
  },
];