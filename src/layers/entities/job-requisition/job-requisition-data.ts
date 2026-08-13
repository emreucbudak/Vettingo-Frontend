export const requisitionProfile = {
  productName: "Vettingo",
  avatarUrl:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDuQANAz6hYOvN2WquMVuQErcJFN9udX4F5FzWJKWSOavNzjfRXD_1hEJtmxDJzVxPehhXhTxyMs3TRUEupYi6lA3T-KPyj0bXpwNnD_55RTvKgIvV6M-p8CffPyP-dz0vi5i1BrxWRkP8zfr2Z9Vu4XqI1svN6QBn3lxoe_zSz6PCUC3XCTyA_C_anH55JLH9Kgc956Drno1xwtGkpTiQCT6YcTHURUi6XO1aJGscgppahlRHd7jLGkifhjkYvhTIgXilNcMDLSZ4",
} as const;

export const requisitionSteps = [
  { label: "Rol Tanımı", value: "1", active: true },
  { label: "Gereksinimler", value: "2", active: false },
  { label: "İnceleme ve Yayın", value: "3", active: false },
] as const;

export const requisitionForm = {
  title: "Yeni İş İlanı Talebi",
  description:
    "Rolü ve gereksinimleri tanımlayın. Yapay zeka ideal aday profilini netleştirmenize yardımcı olur.",
  jobTitle: "Kıdemli Ürün Yöneticisi",
  departmentOptions: ["Ürün ve Mühendislik", "Pazarlama", "Satış"],
  locationTypeOptions: ["Hibrit", "Uzaktan", "Ofisten"],
  responsibilities:
    "Kurumsal analitik ürün ailemiz için ürün yol haritasının geliştirilmesine ve uygulanmasına liderlik edin. Yüksek etkili özellikler sunmak için mühendislik, tasarım ve pazarlama ekipleriyle çalışın.",
  suggestionHint: "Bu unvana göre yapay zeka önerileri hazır.",
} as const;

export const assistantInsights = {
  title: "Yapay Zeka İlan Asistanı",
  intro:
    "\"Kıdemli Ürün Yöneticisi\" ve \"Ürün ve Mühendislik\" bilgilerine göre pazarla uyumlu öneriler aşağıda.",
  skills: ["Çevik Metodoloji", "Veri Analizi", "Paydaş Yönetimi"],
  compensation: "$140,000 - $180,000",
  compensationUnit: "/ yıl",
  compensationNote: "Bu unvan ve lokasyon türü için tipik aralık.",
} as const;