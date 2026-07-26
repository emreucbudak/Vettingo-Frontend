export type CandidateRatingAttribute = {
  label: string;
  value: number;
};

export type CandidateExperienceItem = {
  title: string;
  company: string;
  period: string;
  description: string;
  tags: readonly string[];
  current: boolean;
};

export type CandidateEducationItem = {
  icon: string;
  title: string;
  school: string;
  period: string;
};

export type CandidateAnalysisProfile = {
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
  ratingAttributes: readonly CandidateRatingAttribute[];
  summary: string;
  strengths: readonly string[];
  risks: readonly string[];
  experienceTimeline: readonly CandidateExperienceItem[];
  educationItems: readonly CandidateEducationItem[];
  certifications: readonly string[];
  recommendationReason?: string;
  availability?: string;
  workingPreference?: string;
  source?: string;
};

export const defaultCandidateAnalysisProfile: CandidateAnalysisProfile = {
  id: "elara-vance",
  name: "Elara Vance",
  title: "Kıdemli Ürün Yöneticisi Adayı",
  targetRole: "Kıdemli Ürün Yöneticisi",
  photoUrl:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAvWtuIVxakYxSZsuRra1JkCJRPaCqaD41XoUEhHjaa1JJsW5AeuRHO3i1CR_EFWZY7sl0b_BkZ5vrwqo6mFMWW30pauw_nQaRN8d5NX0V9Y0R9kVo3ZL6LkOo_1MdRAad--kGpG-FmQZiiiNw7DqLwQPIF0fIBz-STEgJkgEyQM1EcucQAFS5yvpvsxG1qeOWKy1A0XKsi2d0-hwr8bmZVfbQuLIUDXThh-f8y8rvX75bqeKy5jJyPc5Qg4lCoxQpYAb_J6Rd_mjI",
  location: "San Francisco, CA (Taşınmaya açık)",
  email: "elara.vance@example.com",
  experience: "8+ yıl deneyim",
  status: "Teknik Görüşme",
  expectedSalary: "$160k - $180k",
  roleSuitability: 92,
  rating: 93,
  ratingAttributes: [
    { label: "Takım Çalışması", value: 89 },
    { label: "Alan Hakimiyeti", value: 96 },
    { label: "Liderlik", value: 93 },
    { label: "İletişim", value: 91 },
    { label: "Problem Çözme", value: 94 },
    { label: "Uyum Yeteneği", value: 88 },
  ],
  summary:
    "Elara, kurumsal SaaS platformlarını ölçeklendirme konusunda güçlü geçmişe sahip yetkin bir ürün lideri profili çiziyor. TechCorp deneyimi mevcut yol haritası ihtiyaçlarımızla yakından örtüşüyor. Yapay zeka analizi; paydaş yönetimi, veri odaklı ürün stratejisi ve ekip liderliğinde çok güçlü olduğunu gösteriyor.",
  strengths: ["Kurumsal B2B SaaS ölçekleme", "Çevik dönüşüm liderliği"],
  risks: ["0'dan 1'e ürün lansmanı deneyimi sınırlı", "Donanım entegrasyonu deneyimi"],
  experienceTimeline: [
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
  ],
  educationItems: [
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
  ],
  certifications: ["CSPO (Scrum Alliance)", "Pragmatic Marketing"],
};
