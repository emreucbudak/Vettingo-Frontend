import type { CandidateAnalysisProfile } from "@/entities/candidate-analysis/candidate-analysis-profile";

export type EmployerJob = {
  id: string;
  title: string;
  requisition: string;
  department: string;
  location: string;
  workingModel: string;
  employmentType: string;
  publishedAt: string;
  closesAt: string;
  applicants: number;
  shortlisted: number;
  status: "Aktif" | "Taslak" | "Duraklatıldı";
};

type CandidateSeed = {
  id: string;
  name: string;
  title: string;
  targetRole: string;
  photoUrl: string;
  location: string;
  email: string;
  experience: string;
  status: string;
  expectedSalary: string;
  roleSuitability: number;
  rating: number;
  ratingAttributes: CandidateAnalysisProfile["ratingAttributes"];
  summary: string;
  strengths: readonly string[];
  risks: readonly string[];
  currentRole: string;
  currentCompany: string;
  currentPeriod: string;
  currentImpact: string;
  previousRole: string;
  previousCompany: string;
  previousPeriod: string;
  previousImpact: string;
  tags: readonly string[];
  degree: string;
  school: string;
  educationPeriod: string;
  certifications: readonly string[];
  recommendationReason?: string;
  availability?: string;
  workingPreference?: string;
  source?: string;
};

export type EmployerApplication = CandidateAnalysisProfile & {
  appliedAt: string;
  lastActivity: string;
};

export type EmployerTalent = CandidateAnalysisProfile & {
  recommendedBecause: string;
  availableIn: string;
  primarySkills: readonly string[];
};

function makeCandidate(seed: CandidateSeed): CandidateAnalysisProfile {
  return {
    id: seed.id,
    name: seed.name,
    title: seed.title,
    targetRole: seed.targetRole,
    photoUrl: seed.photoUrl,
    location: seed.location,
    email: seed.email,
    experience: seed.experience,
    status: seed.status,
    expectedSalary: seed.expectedSalary,
    roleSuitability: seed.roleSuitability,
    rating: seed.rating,
    ratingAttributes: seed.ratingAttributes,
    summary: seed.summary,
    strengths: seed.strengths,
    risks: seed.risks,
    experienceTimeline: [
      {
        title: seed.currentRole,
        company: seed.currentCompany,
        period: seed.currentPeriod,
        description: seed.currentImpact,
        tags: seed.tags,
        current: true,
      },
      {
        title: seed.previousRole,
        company: seed.previousCompany,
        period: seed.previousPeriod,
        description: seed.previousImpact,
        tags: seed.tags.slice(0, 2),
        current: false,
      },
    ],
    educationItems: [
      {
        icon: "school",
        title: seed.degree,
        school: seed.school,
        period: seed.educationPeriod,
      },
    ],
    certifications: seed.certifications,
    recommendationReason: seed.recommendationReason,
    availability: seed.availability,
    workingPreference: seed.workingPreference,
    source: seed.source,
  };
}

export const employerJobs: readonly EmployerJob[] = [
  {
    id: "req-2401",
    title: "Kıdemli Full Stack Mühendisi",
    requisition: "REQ-2401",
    department: "Mühendislik",
    location: "İstanbul",
    workingModel: "Hibrit",
    employmentType: "Tam Zamanlı",
    publishedAt: "18 Tem 2026",
    closesAt: "18 Ağu 2026",
    applicants: 142,
    shortlisted: 18,
    status: "Aktif",
  },
  {
    id: "req-2405",
    title: "Ürün Pazarlama Direktörü",
    requisition: "REQ-2405",
    department: "Pazarlama",
    location: "İstanbul",
    workingModel: "Ofisten",
    employmentType: "Tam Zamanlı",
    publishedAt: "14 Tem 2026",
    closesAt: "10 Ağu 2026",
    applicants: 87,
    shortlisted: 11,
    status: "Aktif",
  },
  {
    id: "req-2412",
    title: "Kurumsal Satış Yöneticisi",
    requisition: "REQ-2412",
    department: "Satış",
    location: "Ankara",
    workingModel: "Hibrit",
    employmentType: "Tam Zamanlı",
    publishedAt: "9 Tem 2026",
    closesAt: "6 Ağu 2026",
    applicants: 64,
    shortlisted: 8,
    status: "Duraklatıldı",
  },
  {
    id: "req-2417",
    title: "Senior UX Researcher",
    requisition: "REQ-2417",
    department: "Ürün & Tasarım",
    location: "Uzaktan",
    workingModel: "Uzaktan",
    employmentType: "Tam Zamanlı",
    publishedAt: "—",
    closesAt: "—",
    applicants: 0,
    shortlisted: 0,
    status: "Taslak",
  },
  {
    id: "req-2420",
    title: "İnsan ve Kültür İş Ortağı",
    requisition: "REQ-2420",
    department: "İnsan ve Kültür",
    location: "İzmir",
    workingModel: "Hibrit",
    employmentType: "Tam Zamanlı",
    publishedAt: "21 Tem 2026",
    closesAt: "22 Ağu 2026",
    applicants: 39,
    shortlisted: 6,
    status: "Aktif",
  },
];

export const applicationCandidates: readonly EmployerApplication[] = [
  {
    ...makeCandidate({
      id: "ayse-demir",
      name: "Ayşe Demir",
      title: "Kıdemli Full Stack Mühendisi Adayı",
      targetRole: "Kıdemli Full Stack Mühendisi",
      photoUrl: "https://randomuser.me/api/portraits/women/44.jpg",
      location: "İstanbul · Hibrit",
      email: "ayse.demir@example.com",
      experience: "7+ yıl deneyim",
      status: "Teknik Görüşme",
      expectedSalary: "₺165.000 - ₺185.000",
      roleSuitability: 94,
      rating: 92,
      ratingAttributes: [
        { label: "Takım Çalışması", value: 89 },
        { label: "Alan Hakimiyeti", value: 96 },
        { label: "Kod Kalitesi", value: 94 },
        { label: "Problem Çözme", value: 93 },
        { label: "İletişim", value: 88 },
        { label: "Liderlik", value: 90 },
      ],
      summary:
        "Ayşe, yüksek trafikli B2B ürünlerde uçtan uca sorumluluk almış güçlü bir mühendis. React ve dağıtık .NET servisleri üzerindeki tecrübesi rolün teknik beklentileriyle doğrudan örtüşüyor.",
      strengths: ["Ölçeklenebilir web mimarileri", "Teknik mentorluk ve kod kalitesi"],
      risks: ["Mobil ürün deneyimi sınırlı", "Fintech regülasyonlarına yeni"],
      currentRole: "Senior Software Engineer",
      currentCompany: "CloudPeak",
      currentPeriod: "2022 - Günümüz",
      currentImpact: "Ödeme akışının yeni mimarisine liderlik ederek p95 yanıt süresini %38 düşürdü.",
      previousRole: "Full Stack Developer",
      previousCompany: "NovaWorks",
      previousPeriod: "2019 - 2022",
      previousImpact: "React ve .NET tabanlı kurumsal ürünlerde beş kişilik geliştirme ekibinde görev aldı.",
      tags: ["React", ".NET", "Azure"],
      degree: "B.S. Bilgisayar Mühendisliği",
      school: "İstanbul Teknik Üniversitesi",
      educationPeriod: "2014 - 2018",
      certifications: ["Azure Developer Associate", "PSM I"],
    }),
    appliedAt: "22 Tem 2026",
    lastActivity: "Bugün, 10.42",
  },
  {
    ...makeCandidate({
      id: "mert-kaya",
      name: "Mert Kaya",
      title: "Ürün Pazarlama Direktörü Adayı",
      targetRole: "Ürün Pazarlama Direktörü",
      photoUrl: "https://randomuser.me/api/portraits/men/32.jpg",
      location: "İstanbul · Ofisten",
      email: "mert.kaya@example.com",
      experience: "10+ yıl deneyim",
      status: "İK Görüşmesi",
      expectedSalary: "₺190.000 - ₺220.000",
      roleSuitability: 91,
      rating: 90,
      ratingAttributes: [
        { label: "Pazar Bilgisi", value: 94 },
        { label: "Strateji", value: 93 },
        { label: "İletişim", value: 92 },
        { label: "Liderlik", value: 90 },
        { label: "Analitik", value: 87 },
        { label: "Takım Çalışması", value: 88 },
      ],
      summary:
        "Mert, B2B SaaS ürünlerinde kategori yaratma ve pazara çıkış ekiplerini ölçeklendirme tecrübesine sahip. Son iki lansmanında satış hunisi dönüşümünü belirgin biçimde artırdı.",
      strengths: ["B2B SaaS go-to-market stratejisi", "Çok kanallı lansman yönetimi"],
      risks: ["Küresel ekip yönetimi sınırlı", "Ücret beklentisi bandın üst sınırında"],
      currentRole: "Head of Product Marketing",
      currentCompany: "MetricLoop",
      currentPeriod: "2021 - Günümüz",
      currentImpact: "Yeni ürün kategorisinin lansmanıyla nitelikli fırsat hacmini bir yılda %52 büyüttü.",
      previousRole: "Product Marketing Manager",
      previousCompany: "SalesNova",
      previousPeriod: "2017 - 2021",
      previousImpact: "Üç bölgesel pazarda konumlandırma ve saha satış içeriklerini yönetti.",
      tags: ["GTM", "B2B SaaS", "Konumlandırma"],
      degree: "MBA, Pazarlama",
      school: "Boğaziçi Üniversitesi",
      educationPeriod: "2013 - 2015",
      certifications: ["Product Marketing Alliance"],
    }),
    appliedAt: "21 Tem 2026",
    lastActivity: "Dün, 16.15",
  },
  {
    ...makeCandidate({
      id: "selin-aras",
      name: "Selin Aras",
      title: "Senior UX Researcher Adayı",
      targetRole: "Senior UX Researcher",
      photoUrl: "https://randomuser.me/api/portraits/women/68.jpg",
      location: "İzmir · Uzaktan",
      email: "selin.aras@example.com",
      experience: "6+ yıl deneyim",
      status: "Portfolyo İncelemesi",
      expectedSalary: "₺125.000 - ₺145.000",
      roleSuitability: 89,
      rating: 88,
      ratingAttributes: [
        { label: "Araştırma", value: 95 },
        { label: "İçgörü Üretme", value: 92 },
        { label: "Sunum", value: 88 },
        { label: "Alan Hakimiyeti", value: 86 },
        { label: "İş Birliği", value: 90 },
        { label: "Liderlik", value: 82 },
      ],
      summary:
        "Selin, keşif araştırmalarını ölçülebilir ürün kararlarına dönüştürme konusunda güçlü. Finans ve abonelik ürünlerinde yürüttüğü karma yöntemli çalışmalar rol için anlamlı bir temel sunuyor.",
      strengths: ["Karma yöntemli kullanıcı araştırması", "Ürün ekipleriyle güçlü iş birliği"],
      risks: ["Ekip yöneticiliği deneyimi sınırlı", "Kurumsal müşteri araştırması geliştirmeye açık"],
      currentRole: "UX Researcher",
      currentCompany: "DesignRail",
      currentPeriod: "2022 - Günümüz",
      currentImpact: "Araştırma operasyonlarını standardize ederek içgörüden karara geçiş süresini %30 kısalttı.",
      previousRole: "Product Researcher",
      previousCompany: "PayNest",
      previousPeriod: "2020 - 2022",
      previousImpact: "Mobil ödeme deneyiminde üç ana kullanılabilirlik probleminin çözümüne liderlik etti.",
      tags: ["User Research", "Jobs-to-be-Done", "Figma"],
      degree: "M.A. Etkileşim Tasarımı",
      school: "Özyeğin Üniversitesi",
      educationPeriod: "2018 - 2020",
      certifications: ["NN/g UX Research"],
    }),
    appliedAt: "20 Tem 2026",
    lastActivity: "2 gün önce",
  },
  {
    ...makeCandidate({
      id: "bora-yildiz",
      name: "Bora Yıldız",
      title: "Kurumsal Satış Yöneticisi Adayı",
      targetRole: "Kurumsal Satış Yöneticisi",
      photoUrl: "https://randomuser.me/api/portraits/men/46.jpg",
      location: "Ankara · Hibrit",
      email: "bora.yildiz@example.com",
      experience: "8+ yıl deneyim",
      status: "Yeni Başvuru",
      expectedSalary: "₺145.000 + prim",
      roleSuitability: 86,
      rating: 87,
      ratingAttributes: [
        { label: "Müzakere", value: 93 },
        { label: "Alan Hakimiyeti", value: 84 },
        { label: "İletişim", value: 92 },
        { label: "Pipeline", value: 89 },
        { label: "Analitik", value: 82 },
        { label: "Takım Çalışması", value: 85 },
      ],
      summary:
        "Bora, uzun satış döngülerinde yeni müşteri kazanımı ve kilit hesap büyütme konusunda istikrarlı sonuçlara sahip. Kamu ve telekom ağı rolün bölgesel hedefleriyle örtüşüyor.",
      strengths: ["Kurumsal müzakere", "Uzun satış döngüsü yönetimi"],
      risks: ["SaaS ürün deneyimi orta seviyede", "İngilizce sunum seviyesi doğrulanmalı"],
      currentRole: "Enterprise Account Executive",
      currentCompany: "CoreTel",
      currentPeriod: "2021 - Günümüz",
      currentImpact: "Stratejik hesaplarda yıllık sözleşme değerini iki yılda %41 artırdı.",
      previousRole: "Key Account Manager",
      previousCompany: "DataBridge",
      previousPeriod: "2018 - 2021",
      previousImpact: "Kamu ve telekom portföyünde 24 kurumsal hesabı yönetti.",
      tags: ["Enterprise Sales", "CRM", "Müzakere"],
      degree: "B.A. İşletme",
      school: "Orta Doğu Teknik Üniversitesi",
      educationPeriod: "2012 - 2016",
      certifications: ["MEDDICC Fundamentals"],
    }),
    appliedAt: "19 Tem 2026",
    lastActivity: "3 gün önce",
  },
];

export const talentCandidates: readonly EmployerTalent[] = [
  {
    ...makeCandidate({
      id: "deniz-aksoy",
      name: "Deniz Aksoy",
      title: "Staff Software Engineer",
      targetRole: "Kıdemli Full Stack Mühendisi",
      photoUrl: "https://randomuser.me/api/portraits/men/75.jpg",
      location: "İstanbul · Hibrit",
      email: "deniz.aksoy@example.com",
      experience: "9+ yıl deneyim",
      status: "Önerilen Yetenek",
      expectedSalary: "₺185.000 - ₺210.000",
      roleSuitability: 97,
      rating: 95,
      ratingAttributes: [
        { label: "Alan Hakimiyeti", value: 98 },
        { label: "Sistem Tasarımı", value: 97 },
        { label: "Takım Çalışması", value: 92 },
        { label: "Liderlik", value: 95 },
        { label: "Problem Çözme", value: 96 },
        { label: "İletişim", value: 90 },
      ],
      summary:
        "Deniz, ilan gereksinimlerinin tamamına yakınını güncel üretim deneyimiyle karşılıyor. Benzer ölçekte SaaS sistemleri kurmuş olması ve teknik liderlik geçmişi işe başlama riskini düşürüyor.",
      strengths: ["Dağıtık sistem tasarımı", "Mühendislik ekibi mentorlugu"],
      risks: ["Maaş beklentisi üst banda yakın", "Üç hafta ihbar süresi"],
      currentRole: "Staff Software Engineer",
      currentCompany: "ScaleGrid",
      currentPeriod: "2021 - Günümüz",
      currentImpact: "Yüksek trafikli olay işleme platformunu yeniden tasarlayarak altyapı maliyetini %28 azalttı.",
      previousRole: "Senior Backend Engineer",
      previousCompany: "FinCore",
      previousPeriod: "2017 - 2021",
      previousImpact: "Kritik ödeme servislerinin mikroservis dönüşümünde teknik liderlik yaptı.",
      tags: ["TypeScript", ".NET", "Kubernetes"],
      degree: "M.S. Bilgisayar Mühendisliği",
      school: "Sabancı Üniversitesi",
      educationPeriod: "2014 - 2016",
      certifications: ["CKA", "Azure Solutions Architect"],
      recommendationReason: "Roldeki mimari liderlik ve ölçeklenebilir servis beklentileriyle doğrudan örtüşüyor.",
      availability: "3 hafta içinde",
      workingPreference: "Hibrit · İstanbul",
      source: "Vettingo Yetenek Havuzu",
    }),
    recommendedBecause: "Benzer ölçekte SaaS mimarisi ve güçlü teknik liderlik",
    availableIn: "3 hafta",
    primarySkills: ["TypeScript", ".NET", "Kubernetes"],
  },
  {
    ...makeCandidate({
      id: "ceren-gunes",
      name: "Ceren Güneş",
      title: "Lead Product Marketing Manager",
      targetRole: "Ürün Pazarlama Direktörü",
      photoUrl: "https://randomuser.me/api/portraits/women/65.jpg",
      location: "İstanbul · Ofisten",
      email: "ceren.gunes@example.com",
      experience: "9+ yıl deneyim",
      status: "Önerilen Yetenek",
      expectedSalary: "₺180.000 - ₺205.000",
      roleSuitability: 95,
      rating: 94,
      ratingAttributes: [
        { label: "Pazar Bilgisi", value: 97 },
        { label: "Konumlandırma", value: 96 },
        { label: "Liderlik", value: 92 },
        { label: "Analitik", value: 91 },
        { label: "İletişim", value: 95 },
        { label: "Takım Çalışması", value: 93 },
      ],
      summary:
        "Ceren, dikey SaaS ürünlerinde çoklu pazar lansmanları yönetmiş ve kategori mesajını doğrudan gelir sonuçlarına bağlamış bir lider. Ekip kurma deneyimi direktör seviyesine geçiş için güçlü bir sinyal.",
      strengths: ["Kategori ve konumlandırma stratejisi", "Çapraz fonksiyonlu ekip liderliği"],
      risks: ["Direktör unvanında ilk rolü olacak", "İhbar süresi netleştirilmeli"],
      currentRole: "Lead Product Marketing Manager",
      currentCompany: "WorkSphere",
      currentPeriod: "2020 - Günümüz",
      currentImpact: "Avrupa lansmanında ürün mesajını yenileyerek satış kabul oranını %34 artırdı.",
      previousRole: "Product Marketing Manager",
      previousCompany: "Flowbase",
      previousPeriod: "2017 - 2020",
      previousImpact: "Üç ürün lansmanında konumlandırma ve satış etkinleştirme programlarını yönetti.",
      tags: ["GTM", "Positioning", "B2B SaaS"],
      degree: "M.S. Pazarlama",
      school: "Koç Üniversitesi",
      educationPeriod: "2014 - 2016",
      certifications: ["PMM Core", "Reforge Growth"],
      recommendationReason: "Direktör rolündeki kategori stratejisi ve ekip liderliği kriterlerinde en güçlü havuz eşleşmesi.",
      availability: "4 hafta içinde",
      workingPreference: "Ofisten · İstanbul",
      source: "Referans Ağı",
    }),
    recommendedBecause: "Kategori stratejisi, lansman ve ekip kurma deneyimi",
    availableIn: "4 hafta",
    primarySkills: ["GTM", "Positioning", "B2B SaaS"],
  },
  {
    ...makeCandidate({
      id: "kerem-sahin",
      name: "Kerem Şahin",
      title: "Enterprise Sales Lead",
      targetRole: "Kurumsal Satış Yöneticisi",
      photoUrl: "https://randomuser.me/api/portraits/men/52.jpg",
      location: "Ankara · Hibrit",
      email: "kerem.sahin@example.com",
      experience: "11+ yıl deneyim",
      status: "Önerilen Yetenek",
      expectedSalary: "₺170.000 + prim",
      roleSuitability: 93,
      rating: 92,
      ratingAttributes: [
        { label: "Müzakere", value: 97 },
        { label: "Pipeline", value: 94 },
        { label: "Alan Hakimiyeti", value: 91 },
        { label: "İletişim", value: 95 },
        { label: "Liderlik", value: 90 },
        { label: "Analitik", value: 86 },
      ],
      summary:
        "Kerem, kamu ve büyük ölçekli özel sektör hesaplarında kanıtlanmış satış performansına sahip. Bölgesel müşteri ağı ve tahmin doğruluğu, rolün ilk altı aylık hedeflerine hızlı katkı potansiyeli gösteriyor.",
      strengths: ["Kurumsal hesap ağı", "Tahmin ve pipeline disiplini"],
      risks: ["Uzaktan çalışma beklentisi netleştirilmeli", "Teknik ürün derinliği orta seviyede"],
      currentRole: "Enterprise Sales Lead",
      currentCompany: "SecureNet",
      currentPeriod: "2019 - Günümüz",
      currentImpact: "Sekiz kişilik ekiple yıllık satış kotasını üç yıl üst üste %110'un üzerinde kapattı.",
      previousRole: "Senior Account Executive",
      previousCompany: "CloudGate",
      previousPeriod: "2015 - 2019",
      previousImpact: "Kamu ve finans dikeylerinde 18 yeni stratejik hesap kazandı.",
      tags: ["Enterprise", "MEDDICC", "Forecasting"],
      degree: "B.A. Ekonomi",
      school: "Bilkent Üniversitesi",
      educationPeriod: "2009 - 2013",
      certifications: ["MEDDPICC Masterclass"],
      recommendationReason: "Ankara bölgesindeki hesap ağı ve kurumsal satış metodolojisi ilan hedefleriyle örtüşüyor.",
      availability: "2 hafta içinde",
      workingPreference: "Hibrit · Ankara",
      source: "Vettingo Yetenek Havuzu",
    }),
    recommendedBecause: "Güçlü kurumsal hesap ağı ve tahmin disiplini",
    availableIn: "2 hafta",
    primarySkills: ["Enterprise", "MEDDICC", "Forecasting"],
  },
  {
    ...makeCandidate({
      id: "ipek-ersoy",
      name: "İpek Ersoy",
      title: "Principal UX Researcher",
      targetRole: "Senior UX Researcher",
      photoUrl: "https://randomuser.me/api/portraits/women/50.jpg",
      location: "İzmir · Uzaktan",
      email: "ipek.ersoy@example.com",
      experience: "8+ yıl deneyim",
      status: "Önerilen Yetenek",
      expectedSalary: "₺145.000 - ₺165.000",
      roleSuitability: 92,
      rating: 93,
      ratingAttributes: [
        { label: "Araştırma", value: 98 },
        { label: "İçgörü Üretme", value: 96 },
        { label: "Liderlik", value: 91 },
        { label: "İletişim", value: 94 },
        { label: "İş Birliği", value: 93 },
        { label: "Alan Hakimiyeti", value: 90 },
      ],
      summary:
        "İpek, araştırma operasyonları kurma ve karmaşık B2B davranışlarını ürün stratejisine dönüştürme konusunda çok güçlü. Dağıtık ekip tecrübesi uzaktan çalışma modeli için ek avantaj sağlıyor.",
      strengths: ["B2B araştırma stratejisi", "ResearchOps liderliği"],
      risks: ["Ücret beklentisi rol bandının üstünde", "Yönetici rolüne ilgi düzeyi doğrulanmalı"],
      currentRole: "Principal UX Researcher",
      currentCompany: "RemoteCraft",
      currentPeriod: "2021 - Günümüz",
      currentImpact: "Küresel ResearchOps sistemini kurarak tekrarlanan araştırma maliyetini %35 azalttı.",
      previousRole: "Senior UX Researcher",
      previousCompany: "Bankly",
      previousPeriod: "2018 - 2021",
      previousImpact: "Kurumsal bankacılık ürünlerinde müşteri keşif programına liderlik etti.",
      tags: ["ResearchOps", "B2B", "Mixed Methods"],
      degree: "Ph.D. Bilişsel Psikoloji",
      school: "Ege Üniversitesi",
      educationPeriod: "2012 - 2017",
      certifications: ["NN/g Research", "Design Sprint Facilitator"],
      recommendationReason: "B2B araştırma liderliği ve dağıtık ekip tecrübesi rolün kritik ihtiyaçlarını karşılıyor.",
      availability: "1 ay içinde",
      workingPreference: "Uzaktan",
      source: "Topluluk Eşleşmesi",
    }),
    recommendedBecause: "ResearchOps liderliği ve güçlü B2B araştırma portfolyosu",
    availableIn: "1 ay",
    primarySkills: ["ResearchOps", "B2B", "Mixed Methods"],
  },
];

export function getApplicationCandidate(id: string) {
  return applicationCandidates.find((candidate) => candidate.id === id);
}

export function getTalentCandidate(id: string) {
  return talentCandidates.find((candidate) => candidate.id === id);
}
