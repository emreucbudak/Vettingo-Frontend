export const assessmentOverview = {
  durationInSeconds: 45 * 60,
  currentQuestion: 4,
  totalQuestions: 20,
  completedQuestions: 3,
} as const;

export const assessmentQuestion = {
  title: "API yanıt süresini optimize edin.",
  description:
    "Aşağıdaki Node.js kodunu inceleyin. Kod şu anda kullanıcı verilerini ve kullanıcıya ait gönderileri sıralı olarak getiriyor. Darboğazı belirleyin ve bu istekleri eş zamanlı çalıştıracak en uygun yeniden düzenleme yaklaşımını seçin.",
  code: `async function getUserDetails(userId) {
  const user = await fetchUser(userId);
  const posts = await fetchPosts(userId);
  return { user, posts };
}`,
} as const;

export const assessmentAnswerOptions = [
  {
    id: "a",
    label: "fetchUser ve fetchPosts işlemlerini eş zamanlı çalıştırmak için Promise.all() kullanın.",
    detail: "const [user, posts] = await Promise.all([fetchUser(id), fetchPosts(id)]);",
    detailType: "code",
  },
  {
    id: "b",
    label: "Sıralı istekleri gerçekleştirmeden önce bir önbellekleme katmanı uygulayın.",
    detail: "const user = cache.get(id) || await fetchUser(id);",
    detailType: "code",
  },
  {
    id: "c",
    label: "Backend API'sini, gönderileri kullanıcı nesnesi içinde döndürecek şekilde değiştirin.",
    detail: "Backend şemasında değişiklik gerektirir.",
    detailType: "text",
  },
] as const;

export type AssessmentAnswerId = (typeof assessmentAnswerOptions)[number]["id"];

export const initialAssessmentAnswer: AssessmentAnswerId = "b";

export const assessmentQuestionNavigation = [
  { number: 1, status: "answered" },
  { number: 2, status: "answered" },
  { number: 3, status: "flagged" },
  { number: 4, status: "current" },
  { number: 5, status: "unanswered" },
  { number: 6, status: "unanswered" },
  { number: 7, status: "unanswered" },
  { number: 8, status: "unanswered" },
  { number: 9, status: "unanswered" },
  { number: 10, status: "unanswered" },
] as const;

export const assessmentLegend = [
  { label: "Yanıtlandı", status: "answered" },
  { label: "Mevcut Soru", status: "current" },
  { label: "İşaretlendi", status: "flagged" },
  { label: "Yanıtlanmadı", status: "unanswered" },
] as const;
