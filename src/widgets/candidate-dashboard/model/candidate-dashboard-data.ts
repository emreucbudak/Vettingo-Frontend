export const candidateProfile = {
  name: "Sarah",
  companyLabel: "Executive Recruitment",
  edition: "Kurumsal Paket",
  avatarUrl:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDDsphwRVoRUDrgzfSRfnnofvMHH00bJ_aq2wVLZVXbiJzU4AtDVCM0joSEnUKG2Mlg22FSrdxb0in2BkohAORmRasc1L4uPUN_8DTeosIxV7JQ1x0LYAOmLJBz9-CWVTVDQlACqd7mA7EymUmfxOsSoAV7trP4e2u-8V6Y3hr8e_ljkxBMeaxxRXeYGU5yJMYsqLCXWEQCQ6vVhx-i-WAGrIUa15jyK5_Tcjg6lSWzlW2zheH6f137tFoYzNPQt-CR68HClETAnh4",
  logoUrl:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAMlXZNSo1Km6NMCegTn8gPvBDQTvvULHeWx_YZ46bMqnCPZpDatkKUStQK7dPP8eMTmiddL29U3ildafGbyKbdeoJzHSrGNzCT2ShvR7B4GelfmZrP0Xk85Xr1jk4KmH7xAPMirG_uMj8qwcn7OLMCYEXC1S1OKiRtEWHguTsrjpYWrOjZPrzVwSdqVrLdU6kr4mYsPGmCcVD1zo_vIRqeqMBl74f-Jxb_gKjNdgdgMqd2XlJyQnedxng8tNJDAV3pt2uoyNuNB7o",
} as const;

export const navigationItems = [
  { label: "Panel", icon: "dashboard", active: true },
  { label: "Başvurular", icon: "description" },
  { label: "Yapay Zeka Analizi", icon: "psychology" },
  { label: "İşler", icon: "work" },
] as const;

export const utilityItems = [
  { label: "Yardım Merkezi", icon: "help" },
  { label: "Ayarlar", icon: "settings" },
] as const;

export const activeApplications = [
  {
    role: "Kıdemli Ürün Yöneticisi",
    company: "Global Tech Corp",
    location: "San Francisco, CA",
    status: "Mülakat Aşamasında",
    progressClassName: "w-2/3",
    currentStep: "4 adımın 3.'sü: Teknik Mülakat",
  },
  {
    role: "Mühendislik Başkan Yardımcısı",
    company: "Innovate Solutions",
    location: "Uzaktan",
    status: "Değerlendiriliyor",
    progressClassName: "w-1/3",
    currentStep: "4 adımın 1.'i: İlk Görüşme",
  },
] as const;

export const recommendedJobs = [
  {
    role: "UX Direktörü",
    company: "Creative Dynamics",
    location: "New York, NY",
    icon: "domain",
    match: "98% Eşleşme",
    postedAt: "2 gün önce yayınlandı",
  },
  {
    role: "Tasarım Direktörü",
    company: "Fintech Partners",
    location: "Londra, Birleşik Krallık",
    icon: "account_balance",
    match: "94% Eşleşme",
    postedAt: "5 saat önce yayınlandı",
  },
] as const;

export const upcomingInterviews = [
  {
    month: "Eki",
    day: "12",
    title: "Sistem Tasarımı Görüşmesi",
    company: "Global Tech Corp",
    time: "10:00 - 11:30 PST",
  },
  {
    month: "Eki",
    day: "15",
    title: "Kültür Uyumu Görüşmesi",
    company: "Innovate Solutions",
    time: "14:00 - 14:30 EST",
  },
] as const;

export const footerLinks = ["Gizlilik Politikası", "Kullanım Şartları", "Yardım Merkezi", "Destek"] as const;