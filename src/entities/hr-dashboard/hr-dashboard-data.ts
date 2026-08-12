import { ROUTES } from "@/shared/config/routes";

export const hrProfile = {
  title: "Vettingo",
  subtitle: "İnsan Kaynakları",
} as const;

export const hrNavigationItems = [
  { key: "dashboard", label: "Panel", icon: "space_dashboard", href: ROUTES.hr },
  {
    key: "requisitions",
    label: "İşe Alım Talepleri",
    icon: "assignment_add",
    href: ROUTES.hrRequisitions,
  },
  {
    key: "candidates",
    label: "Aday Havuzu",
    icon: "groups",
    href: ROUTES.hrCandidates,
  },
  {
    key: "interviews",
    label: "Mülakatlar",
    icon: "calendar_month",
    href: ROUTES.hrInterviews,
  },
  {
    key: "reports",
    label: "Raporlar",
    icon: "monitoring",
    href: ROUTES.hrReports,
  },
] as const;

export const hrUtilityItems = [
  {
    key: "help",
    label: "Yardım Merkezi",
    icon: "support_agent",
    href: ROUTES.hrHelpCenter,
  },
  {
    key: "settings",
    label: "Ayarlar",
    icon: "settings",
    href: ROUTES.hrSettings,
  },
  { key: "logout", label: "Çıkış Yap", icon: "door_open", action: "logout" },
] as const;

export type HrNavigationKey = (typeof hrNavigationItems)[number]["key"];
export type HrUtilityKey = "help" | "settings";

export const hrDashboardStats = [
  {
    label: "Açık Talep",
    value: "18",
    helper: "4 yönetici onayı bekliyor",
    icon: "assignment",
    tone: "blue",
  },
  {
    label: "Süreçteki Aday",
    value: "74",
    helper: "12 aday bu hafta eklendi",
    icon: "group",
    tone: "green",
  },
  {
    label: "Bu Haftaki Mülakat",
    value: "16",
    helper: "5 panel değerlendirmesi açık",
    icon: "event",
    tone: "purple",
  },
  {
    label: "Ort. Kapanış Süresi",
    value: "28 gün",
    helper: "Geçen aya göre 3 gün daha hızlı",
    icon: "schedule",
    tone: "amber",
  },
] as const;

export const hrPriorities = [
  {
    title: "Ürün ekibi için kadro onayı",
    description: "3 yeni pozisyon bütçe sahibi onayı bekliyor.",
    icon: "approval",
    count: "3",
    href: ROUTES.hrRequisitions,
  },
  {
    title: "Mülakat geri bildirimleri",
    description: "Bugün tamamlanması gereken 5 değerlendirme var.",
    icon: "rate_review",
    count: "5",
    href: ROUTES.hrInterviews,
  },
  {
    title: "Teklif aşamasındaki adaylar",
    description: "4 aday için teklif ve yan hak paketi hazırlanıyor.",
    icon: "handshake",
    count: "4",
    href: ROUTES.hrCandidates,
  },
] as const;

export const requisitions = [
  {
    id: "REQ-2608",
    title: "Kıdemli Backend Geliştirici",
    department: "Mühendislik",
    hiringManager: "Mert Arslan",
    location: "İstanbul · Hibrit",
    headcount: 2,
    candidates: 18,
    age: "12 gün",
    status: "Aktif",
    priority: "Yüksek",
  },
  {
    id: "REQ-2611",
    title: "Ürün Tasarımcısı",
    department: "Ürün",
    hiringManager: "Selin Kaya",
    location: "Uzaktan",
    headcount: 1,
    candidates: 9,
    age: "7 gün",
    status: "Aktif",
    priority: "Normal",
  },
  {
    id: "REQ-2614",
    title: "Kurumsal Satış Yöneticisi",
    department: "Satış",
    hiringManager: "Okan Demir",
    location: "Ankara · Hibrit",
    headcount: 2,
    candidates: 24,
    age: "19 gün",
    status: "Mülakat",
    priority: "Yüksek",
  },
  {
    id: "REQ-2617",
    title: "Finansal Planlama Uzmanı",
    department: "Finans",
    hiringManager: "Ece Yalçın",
    location: "İstanbul · Ofis",
    headcount: 1,
    candidates: 6,
    age: "4 gün",
    status: "Onay Bekliyor",
    priority: "Normal",
  },
  {
    id: "REQ-2620",
    title: "İnsan Kaynakları İş Ortağı",
    department: "İnsan Kaynakları",
    hiringManager: "Deniz Öztürk",
    location: "İstanbul · Hibrit",
    headcount: 1,
    candidates: 0,
    age: "2 gün",
    status: "Taslak",
    priority: "Normal",
  },
] as const;

export type HrRequisition = (typeof requisitions)[number];

export const candidates = [
  {
    id: "cand-101",
    name: "Ayşe Yılmaz",
    initials: "AY",
    role: "Kıdemli Backend Geliştirici",
    location: "İstanbul",
    experience: "7 yıl deneyim",
    stage: "Teknik Mülakat",
    owner: "Deniz Öztürk",
    score: 94,
    activity: "2 saat önce",
    skills: ["C#", ".NET", "Azure"],
  },
  {
    id: "cand-102",
    name: "Burak Şahin",
    initials: "BŞ",
    role: "Ürün Tasarımcısı",
    location: "İzmir",
    experience: "5 yıl deneyim",
    stage: "Portfolyo İnceleme",
    owner: "Selin Kaya",
    score: 91,
    activity: "Dün",
    skills: ["Figma", "Research", "Design System"],
  },
  {
    id: "cand-103",
    name: "Ceren Aksoy",
    initials: "CA",
    role: "Kurumsal Satış Yöneticisi",
    location: "Ankara",
    experience: "8 yıl deneyim",
    stage: "Yönetici Görüşmesi",
    owner: "Okan Demir",
    score: 88,
    activity: "Bugün 09.40",
    skills: ["B2B", "SaaS", "CRM"],
  },
  {
    id: "cand-104",
    name: "Emre Koç",
    initials: "EK",
    role: "Kıdemli Backend Geliştirici",
    location: "Bursa",
    experience: "6 yıl deneyim",
    stage: "İK Görüşmesi",
    owner: "Deniz Öztürk",
    score: 86,
    activity: "3 gün önce",
    skills: ["Node.js", "PostgreSQL", "Docker"],
  },
  {
    id: "cand-105",
    name: "İpek Tunç",
    initials: "İT",
    role: "Finansal Planlama Uzmanı",
    location: "İstanbul",
    experience: "4 yıl deneyim",
    stage: "Yeni Başvuru",
    owner: "Ece Yalçın",
    score: 82,
    activity: "25 dakika önce",
    skills: ["FP&A", "Power BI", "Excel"],
  },
] as const;

export const interviews = [
  {
    time: "09.30",
    duration: "45 dk",
    candidate: "Ayşe Yılmaz",
    initials: "AY",
    role: "Kıdemli Backend Geliştirici",
    type: "Teknik Mülakat",
    interviewers: ["Mert Arslan", "Can Eren"],
    location: "Microsoft Teams",
    status: "Hazır",
  },
  {
    time: "11.00",
    duration: "30 dk",
    candidate: "Burak Şahin",
    initials: "BŞ",
    role: "Ürün Tasarımcısı",
    type: "Portfolyo Görüşmesi",
    interviewers: ["Selin Kaya", "Melis Can"],
    location: "Toplantı Odası 3",
    status: "Hazır",
  },
  {
    time: "13.30",
    duration: "45 dk",
    candidate: "Ceren Aksoy",
    initials: "CA",
    role: "Kurumsal Satış Yöneticisi",
    type: "Yönetici Görüşmesi",
    interviewers: ["Okan Demir"],
    location: "Google Meet",
    status: "Not Bekleniyor",
  },
  {
    time: "15.00",
    duration: "30 dk",
    candidate: "Emre Koç",
    initials: "EK",
    role: "Kıdemli Backend Geliştirici",
    type: "İK Görüşmesi",
    interviewers: ["Deniz Öztürk"],
    location: "Microsoft Teams",
    status: "Hazır",
  },
] as const;

export const funnelStages = [
  { label: "Başvuru", value: 428, conversion: "100%", width: "100%" },
  { label: "İlk İnceleme", value: 186, conversion: "43%", width: "78%" },
  { label: "İK Görüşmesi", value: 92, conversion: "21%", width: "58%" },
  { label: "Teknik / Vaka", value: 41, conversion: "10%", width: "39%" },
  { label: "Teklif", value: 14, conversion: "3,3%", width: "24%" },
] as const;

export const departmentMetrics = [
  {
    department: "Mühendislik",
    openRoles: 7,
    candidates: 36,
    avgDays: "31 gün",
    offerRate: "68%",
    progress: 68,
  },
  {
    department: "Ürün",
    openRoles: 3,
    candidates: 14,
    avgDays: "24 gün",
    offerRate: "75%",
    progress: 75,
  },
  {
    department: "Satış",
    openRoles: 5,
    candidates: 19,
    avgDays: "27 gün",
    offerRate: "61%",
    progress: 61,
  },
  {
    department: "Finans",
    openRoles: 2,
    candidates: 5,
    avgDays: "21 gün",
    offerRate: "80%",
    progress: 80,
  },
] as const;

export const monthlyHiring = [
  { label: "Mar", value: 42 },
  { label: "Nis", value: 58 },
  { label: "May", value: 49 },
  { label: "Haz", value: 71 },
  { label: "Tem", value: 64 },
  { label: "Ağu", value: 82 },
] as const;

export const hrFaqs = [
  {
    question: "Yeni işe alım talebi nasıl oluşturulur?",
    answer:
      "İşe Alım Talepleri sayfasındaki Yeni Talep düğmesi, pozisyon ihtiyacını ve onay akışını başlatan tasarım alanına götürür.",
  },
  {
    question: "Aday havuzunda hangi bilgiler görünür?",
    answer:
      "Adayın hedef rolü, süreç aşaması, sorumlu kişi, temel yetkinlikleri ve değerlendirme skoru aynı satırda karşılaştırılabilir.",
  },
  {
    question: "Mülakat geri bildirimleri nereden takip edilir?",
    answer:
      "Mülakatlar sayfasındaki panel hazırlığı ve bekleyen değerlendirmeler alanı, açık geri bildirimleri tek yerde gösterir.",
  },
  {
    question: "Raporlar hangi dönemi kapsıyor?",
    answer:
      "Raporlar sayfası varsayılan olarak son altı aylık işe alım hunisini ve departman performansını örnek verilerle sunar.",
  },
] as const;
