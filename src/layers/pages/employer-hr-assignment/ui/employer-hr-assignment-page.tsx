"use client";

import { useState } from "react";
import { MaterialIcon } from "@/shared/ui/material-icon";
import { EmployerShell } from "@/widgets/employer/shell";

const inputClass =
  "w-full rounded border border-[#c5c6cd] bg-white px-4 py-3 text-sm text-[#0b1c30] outline-none transition-colors placeholder:text-[#75777d] focus:border-[#091426] focus:ring-1 focus:ring-[#091426]";

const labelClass =
  "mb-2 block text-xs font-semibold uppercase tracking-[0.05em] text-[#45474c]";

export function EmployerHrAssignmentPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <EmployerShell>
      <main className="employer-dashboard-theme mx-auto w-full max-w-[1440px] flex-1 bg-[#f8f9ff] p-4 md:p-8">
        <div className="grid grid-cols-1 gap-6 xl:grid-cols-[minmax(0,2fr)_minmax(300px,1fr)]">
          <form
            className="space-y-6"
            onChange={() => setSubmitted(false)}
            onReset={() => setSubmitted(false)}
            onSubmit={handleSubmit}
          >
            <section className="rounded border border-[#c5c6cd] bg-[#f8f9ff] p-5 md:p-6">
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <div>
                  <label className={labelClass} htmlFor="recruiter-first-name">Ad</label>
                  <input
                    autoComplete="given-name"
                    className={inputClass}
                    id="recruiter-first-name"
                    name="firstName"
                    placeholder="Örn. Deniz"
                    required
                    type="text"
                  />
                </div>
                <div>
                  <label className={labelClass} htmlFor="recruiter-last-name">Soyad</label>
                  <input
                    autoComplete="family-name"
                    className={inputClass}
                    id="recruiter-last-name"
                    name="lastName"
                    placeholder="Örn. Yılmaz"
                    required
                    type="text"
                  />
                </div>
                <div>
                  <label className={labelClass} htmlFor="recruiter-email">Kurumsal E-posta</label>
                  <input
                    autoComplete="email"
                    className={inputClass}
                    id="recruiter-email"
                    name="email"
                    placeholder="deniz@sirketiniz.com"
                    required
                    type="email"
                  />
                </div>
                <div>
                  <label className={labelClass} htmlFor="recruiter-phone">
                    Telefon <span className="normal-case tracking-normal text-[#75777d]">(Opsiyonel)</span>
                  </label>
                  <input
                    autoComplete="tel"
                    className={inputClass}
                    id="recruiter-phone"
                    name="phone"
                    placeholder="+90 5xx xxx xx xx"
                    type="tel"
                  />
                </div>
              </div>
            </section>

            <section className="rounded border border-[#c5c6cd] bg-[#f8f9ff] p-5 md:p-6">
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <div>
                  <label className={labelClass} htmlFor="recruiter-role">Platform Rolü</label>
                  <select
                    className={inputClass}
                    defaultValue="recruiter"
                    id="recruiter-role"
                    name="role"
                  >
                    <option value="recruiter">İşe Alım Uzmanı</option>
                    <option value="senior-recruiter">Kıdemli İşe Alım Uzmanı</option>
                    <option value="talent-manager">Talent Acquisition Manager</option>
                    <option value="hr-business-partner">HR Business Partner</option>
                  </select>
                </div>
                <div>
                  <label className={labelClass} htmlFor="recruiter-scope">Pozisyon Kapsamı</label>
                  <select
                    className={inputClass}
                    defaultValue="assigned"
                    id="recruiter-scope"
                    name="scope"
                  >
                    <option value="assigned">Yalnızca atandığı ilanlar</option>
                    <option value="department">Departman ilanları</option>
                    <option value="all">Tüm açık pozisyonlar</option>
                  </select>
                </div>
              </div>

            </section>

            <section className="rounded border border-[#c5c6cd] bg-[#eff4ff] p-5 md:p-6">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h2 className="text-base font-semibold text-[#0b1c30]">Atamayı tamamlamaya hazır mısın?</h2>
                  <p className="mt-1 text-sm leading-6 text-[#45474c]">
                    Bilgileri son kez kontrol et. Davet, kurumsal e-posta adresine iletilecek.
                  </p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <button
                    className="inline-flex items-center justify-center rounded border border-[#091426] px-5 py-3 text-xs font-semibold uppercase tracking-[0.05em] text-[#091426] transition-colors hover:bg-white"
                    type="reset"
                  >
                    Temizle
                  </button>
                  <button
                    className="inline-flex items-center justify-center gap-2 rounded bg-[#091426] px-5 py-3 text-xs font-semibold uppercase tracking-[0.05em] text-white transition-all hover:-translate-y-0.5 hover:shadow-lg"
                    type="submit"
                  >
                    <MaterialIcon className="text-[18px]">person_add</MaterialIcon>
                    İşe Alımcıyı Ata
                  </button>
                </div>
              </div>

              <div
                aria-live="polite"
                className={`mt-5 items-start gap-3 border-t border-[#c5c6cd] pt-5 text-sm text-[#006c49] ${submitted ? "flex" : "hidden"}`}
                role="status"
              >
                <MaterialIcon className="mt-0.5 text-[19px]">check_circle</MaterialIcon>
                <p>
                  Form önizlemesi tamamlandı. API bağlantısı eklendiğinde işe alımcı kaydı ve davet gönderimi bu adımdan yapılacak.
                </p>
              </div>
            </section>
          </form>

          <aside className="space-y-6">
            <section className="rounded border border-[#c5c6cd] bg-[#eff4ff] p-5 md:p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.05em] text-[#006c49]">Atama Süreci</p>
              <h2 className="mt-2 text-lg font-semibold text-[#0b1c30]">Üç adımda ekip erişimi</h2>
              <ol className="mt-6 space-y-5">
                {[
                  ["Kişiyi tanımla", "İletişim ve görev bilgilerini doldur."],
                  ["Yetkileri sınırla", "İşe alımcının erişeceği alanları seç."],
                  ["Daveti gönder", "Kullanıcı, e-posta davetiyle hesabını etkinleştirsin."],
                ].map(([title, description], index) => (
                  <li className="flex gap-3" key={title}>
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#6cf8bb] text-xs font-semibold text-[#00714d]">
                      {index + 1}
                    </span>
                    <div>
                      <h3 className="text-sm font-semibold text-[#0b1c30]">{title}</h3>
                      <p className="mt-1 text-xs leading-5 text-[#45474c]">{description}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </section>

          </aside>
        </div>
      </main>
    </EmployerShell>
  );
}
