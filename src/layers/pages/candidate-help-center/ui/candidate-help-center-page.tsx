"use client";

import { useState, type FormEvent } from "react";
import { CandidateShell } from "@/widgets/candidate/shell";
import { MaterialIcon } from "@/shared/ui/material-icon";

const frequentlyAskedQuestions = [
  {
    question: "Profilimi ve özgeçmişimi nasıl güncelleyebilirim?",
    answer:
      "Aday panelindeki Profili Güncelle adımından kişisel bilgilerini, deneyimlerini ve yetkinliklerini düzenleyebilirsin. Güncel bilgiler iş önerilerinin ve eşleşme sonuçlarının doğruluğunu artırır.",
  },
  {
    question: "Başvurularımın hangi aşamada olduğunu nereden görebilirim?",
    answer:
      "Sol menüdeki Başvurular sayfasında her başvurunun güncel durumunu ve sürecin hangi adımında olduğunu görebilirsin. Görüşme planlandığında ayrıntılar Yaklaşan Mülakatlar alanında da gösterilir.",
  },
  {
    question: "Yapay zeka eşleşme skoru neyi gösterir?",
    answer:
      "Eşleşme skoru; deneyim, yetkinlik, rol gereksinimleri ve çalışma tercihlerini birlikte değerlendirir. Bu skor bir işe alım kararı değil, sana uygun fırsatları önceliklendiren yardımcı bir göstergedir.",
  },
  {
    question: "Önerilen işlere nasıl başvurabilirim?",
    answer:
      "İşler sayfasından ilan ayrıntılarını inceleyebilir ve başvuru adımını başlatabilirsin. Başvurun tamamlandığında ilan Aday Paneli içindeki Başvurular bölümünde görünür.",
  },
  {
    question: "Mülakat veya değerlendirme bağlantım çalışmıyor, ne yapmalıyım?",
    answer:
      "Önce bağlantının tarih ve saatini kontrol et. Sorun devam ederse bu sayfadaki destek formunda Değerlendirme ve mülakat konusunu seçerek ekran görüntüsü ve hata ayrıntılarıyla bize ulaşabilirsin.",
  },
  {
    question: "Hesabım ve kişisel verilerimle ilgili nasıl destek alabilirim?",
    answer:
      "Destek formunda Hesap ve erişim konusunu seçip talebini iletebilirsin. Kimlik veya hesap güvenliği içeren talepler ek doğrulama gerektirebilir.",
  },
] as const;

function SupportForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    event.currentTarget.reset();
    setIsSubmitted(true);
  }

  return (
    <section className="rounded border border-[#c5c6cd] bg-[#f8f9ff] p-5 md:p-6">
      <div className="mb-6">
        <h2 className="text-xl font-semibold leading-7 text-[#0b1c30]">
          Destek talebi oluştur
        </h2>
        <p className="mt-1 text-sm leading-5 text-[#45474c]">
          Sorununu ayrıntılarıyla paylaş; destek ekibimiz en kısa sürede seninle iletişime geçsin.
        </p>
      </div>

      <form className="space-y-5" onSubmit={handleSubmit}>
        <div>
          <label
            className="mb-2 block text-xs font-semibold uppercase tracking-[0.05em] text-[#45474c]"
            htmlFor="candidate-support-topic"
          >
            Konu
          </label>
          <select
            className="w-full rounded border border-[#c5c6cd] bg-white px-4 py-3 text-sm text-[#0b1c30] outline-none transition-colors focus:border-[#091426]"
            defaultValue=""
            id="candidate-support-topic"
            name="topic"
            required
          >
            <option disabled value="">
              Bir konu seç
            </option>
            <option value="applications">Başvurularım</option>
            <option value="profile">Profil ve özgeçmiş</option>
            <option value="recommendations">İş önerileri ve eşleşmeler</option>
            <option value="assessment">Değerlendirme ve mülakat</option>
            <option value="account">Hesap ve erişim</option>
            <option value="other">Diğer</option>
          </select>
        </div>

        <div>
          <label
            className="mb-2 block text-xs font-semibold uppercase tracking-[0.05em] text-[#45474c]"
            htmlFor="candidate-support-email"
          >
            E-posta
          </label>
          <input
            autoComplete="email"
            className="w-full rounded border border-[#c5c6cd] bg-white px-4 py-3 text-sm text-[#0b1c30] outline-none transition-colors placeholder:text-[#75777d] focus:border-[#091426]"
            id="candidate-support-email"
            name="email"
            placeholder="ornek@email.com"
            required
            type="email"
          />
        </div>

        <div>
          <label
            className="mb-2 block text-xs font-semibold uppercase tracking-[0.05em] text-[#45474c]"
            htmlFor="candidate-support-message"
          >
            Nasıl yardımcı olabiliriz?
          </label>
          <textarea
            className="min-h-36 w-full resize-y rounded border border-[#c5c6cd] bg-white px-4 py-3 text-sm leading-5 text-[#0b1c30] outline-none transition-colors placeholder:text-[#75777d] focus:border-[#091426]"
            id="candidate-support-message"
            minLength={20}
            name="message"
            placeholder="Yaşadığın durumu ve varsa izlediğin adımları anlat."
            required
          />
          <p className="mt-2 text-[11px] font-medium leading-4 text-[#75777d]">
            En az 20 karakter gir.
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <button
            className="inline-flex items-center justify-center gap-2 rounded bg-[#091426] px-6 py-3 text-xs font-semibold uppercase tracking-[0.05em] text-white transition-opacity hover:opacity-90"
            type="submit"
          >
            Talebi gönder
            <MaterialIcon className="text-[18px]">arrow_forward</MaterialIcon>
          </button>
          <p
            aria-live="polite"
            className={
              isSubmitted
                ? "flex items-center gap-2 text-sm font-medium text-[#006c49]"
                : "sr-only"
            }
          >
            <MaterialIcon className="text-[18px]">check_circle</MaterialIcon>
            Talebin alındı. Destek ekibimiz seninle iletişime geçecek.
          </p>
        </div>
      </form>
    </section>
  );
}

function FrequentlyAskedQuestions() {
  return (
    <section className="mt-8">
      <div className="mb-5">
        <p className="text-xs font-semibold uppercase tracking-[0.05em] text-[#006c49]">
          Sık Sorulan Sorular
        </p>
        <h2 className="mt-2 text-2xl font-semibold leading-8 tracking-[-0.01em] text-[#0b1c30]">
          Hızlı yanıtlar
        </h2>
      </div>

      <div className="space-y-3">
        {frequentlyAskedQuestions.map((item) => (
          <details
            className="group rounded border border-[#c5c6cd] bg-[#f8f9ff] open:border-[#091426]"
            key={item.question}
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-sm font-semibold text-[#0b1c30] marker:content-none md:px-6">
              {item.question}
              <MaterialIcon className="shrink-0 text-[20px] text-[#45474c] transition-transform group-open:rotate-180">
                expand_more
              </MaterialIcon>
            </summary>
            <p className="border-t border-[#c5c6cd] px-5 py-4 text-sm leading-6 text-[#45474c] md:px-6">
              {item.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}

export function CandidateHelpCenterPage() {
  return (
    <CandidateShell>
      <main className="mx-auto w-full max-w-[1440px] flex-1 bg-[#f8f9ff] p-4 md:p-8">
        <header className="mb-8 border-b border-[#c5c6cd] pb-6">
          <p className="text-xs font-semibold uppercase tracking-[0.05em] text-[#006c49]">
            Vettingo Aday Destek
          </p>
          <h1 className="mt-2 text-3xl font-semibold leading-10 tracking-[-0.02em] text-[#0b1c30]">
            Yardım Merkezi
          </h1>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-[#45474c]">
            Başvuru, profil, iş önerileri ve değerlendirme sürecinle ilgili destek talebi oluştur veya sık sorulan sorulara göz at.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,2fr)_minmax(260px,1fr)]">
          <SupportForm />

          <aside className="rounded border border-[#c5c6cd] bg-[#eff4ff] p-5 md:p-6">
            <div className="flex h-10 w-10 items-center justify-center rounded bg-[#6cf8bb] text-[#00714d]">
              <MaterialIcon className="text-[24px]">support_check</MaterialIcon>
            </div>
            <h2 className="mt-5 text-lg font-semibold leading-6 text-[#0b1c30]">
              Yanıt süresi
            </h2>
            <p className="mt-2 text-sm leading-6 text-[#45474c]">
              Destek taleplerini iş günlerinde ortalama 4 saat içinde yanıtlıyoruz.
            </p>
            <div className="mt-6 border-t border-[#c5c6cd] pt-5">
              <p className="text-xs font-semibold uppercase tracking-[0.05em] text-[#45474c]">
                Çalışma saatleri
              </p>
              <p className="mt-2 text-sm font-medium text-[#0b1c30]">
                Pazartesi-Cuma, 09.00-18.00
              </p>
            </div>
          </aside>
        </div>

        <FrequentlyAskedQuestions />
      </main>
    </CandidateShell>
  );
}
