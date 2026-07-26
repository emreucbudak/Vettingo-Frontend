'use client';

import { useState, type FormEvent } from 'react';
import { ROUTES } from '@/shared/config/routes';
import { DashboardShell } from '@/shared/ui/dashboard-shell';
import { MaterialIcon } from '@/shared/ui/material-icon';

const navigationItems = [
  { label: 'Panel', icon: 'space_dashboard', href: ROUTES.employer },
  { label: 'İlanlarım', icon: 'business_center', href: ROUTES.jobs },
  { label: 'Başvurular', icon: 'assignment_ind', href: ROUTES.candidate },
  { label: 'Yetenekler', icon: 'auto_awesome', href: ROUTES.candidateAnalysis },
] as const;

const utilityItems = [
  {
    label: 'Yardım Merkezi',
    icon: 'support_agent',
    href: ROUTES.employerHelpCenter,
    active: true,
  },
  { label: 'Ayarlar', icon: 'settings', href: '#' },
] as const;

const frequentlyAskedQuestions = [
  {
    question: 'Yeni bir iş ilanını nasıl yayınlarım?',
    answer:
      'Paneldeki “Yeni İş İlanı” düğmesini kullanarak pozisyon bilgilerini, gereksinimleri ve çalışma modelini ekleyebilirsin. Son adımda ilanı önizleyip yayınlayabilirsin.',
  },
  {
    question: 'Başvuruları hangi ölçütlere göre filtreleyebilirim?',
    answer:
      'Başvurular ekranında deneyim, yetenek, lokasyon ve değerlendirme durumu gibi ölçütleri birlikte kullanabilir; sık kullandığın görünümleri kaydedebilirsin.',
  },
  {
    question: 'Yetenekler bölümündeki eşleşme skoru neyi gösterir?',
    answer:
      'Eşleşme skoru; adayın deneyimini, yeteneklerini ve ilan gereksinimlerini birlikte değerlendirir. Skor bir karar yerine inceleme sürecini destekleyen karşılaştırmalı bir göstergedir.',
  },
  {
    question: 'Ekip üyelerine farklı erişim yetkileri verebilir miyim?',
    answer:
      'Ayarlar bölümünden ekip üyelerini davet edebilir ve ilan, başvuru ya da raporlama alanları için uygun erişim seviyesini belirleyebilirsin.',
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
    <section className='rounded border border-[#c5c6cd] bg-[#f8f9ff] p-5 md:p-6'>
      <div className='mb-6'>
        <h2 className='text-xl font-semibold leading-7 text-[#0b1c30]'>
          Destek talebi oluştur
        </h2>
        <p className='mt-1 text-sm leading-5 text-[#45474c]'>
          Sorununu ayrıntılarıyla paylaş; destek ekibimiz en kısa sürede seninle iletişime geçsin.
        </p>
      </div>

      <form className='space-y-5' onSubmit={handleSubmit}>
        <div>
          <label
            className='mb-2 block text-xs font-semibold uppercase tracking-[0.05em] text-[#45474c]'
            htmlFor='support-topic'
          >
            Konu
          </label>
          <select
            className='w-full rounded border border-[#c5c6cd] bg-white px-4 py-3 text-sm text-[#0b1c30] outline-none transition-colors focus:border-[#091426]'
            defaultValue=''
            id='support-topic'
            name='topic'
            required
          >
            <option disabled value=''>
              Bir konu seç
            </option>
            <option value='job-posting'>İlan yönetimi</option>
            <option value='applications'>Başvurular</option>
            <option value='talents'>Yetenekler ve eşleşmeler</option>
            <option value='account'>Hesap ve erişim</option>
            <option value='other'>Diğer</option>
          </select>
        </div>

        <div>
          <label
            className='mb-2 block text-xs font-semibold uppercase tracking-[0.05em] text-[#45474c]'
            htmlFor='support-email'
          >
            İş e-postası
          </label>
          <input
            autoComplete='email'
            className='w-full rounded border border-[#c5c6cd] bg-white px-4 py-3 text-sm text-[#0b1c30] outline-none transition-colors placeholder:text-[#75777d] focus:border-[#091426]'
            id='support-email'
            name='email'
            placeholder='ornek@sirket.com'
            required
            type='email'
          />
        </div>

        <div>
          <label
            className='mb-2 block text-xs font-semibold uppercase tracking-[0.05em] text-[#45474c]'
            htmlFor='support-message'
          >
            Nasıl yardımcı olabiliriz?
          </label>
          <textarea
            className='min-h-36 w-full resize-y rounded border border-[#c5c6cd] bg-white px-4 py-3 text-sm leading-5 text-[#0b1c30] outline-none transition-colors placeholder:text-[#75777d] focus:border-[#091426]'
            id='support-message'
            minLength={20}
            name='message'
            placeholder='Yaşadığın durumu ve varsa izlediğin adımları anlat.'
            required
          />
          <p className='mt-2 text-[11px] font-medium leading-4 text-[#75777d]'>
            En az 20 karakter gir.
          </p>
        </div>

        <div className='flex flex-col gap-3 sm:flex-row sm:items-center'>
          <button
            className='inline-flex items-center justify-center gap-2 rounded bg-[#091426] px-6 py-3 text-xs font-semibold uppercase tracking-[0.05em] text-white transition-opacity hover:opacity-90'
            type='submit'
          >
            Talebi gönder
            <MaterialIcon className='text-[18px]'>arrow_forward</MaterialIcon>
          </button>
          <p
            aria-live='polite'
            className={`flex items-center gap-2 text-sm font-medium text-[#006c49] ${isSubmitted ? '' : 'sr-only'}`}
          >
            <MaterialIcon className='text-[18px]'>check_circle</MaterialIcon>
            Talebin alındı. Destek ekibimiz seninle iletişime geçecek.
          </p>
        </div>
      </form>
    </section>
  );
}

function FrequentlyAskedQuestions() {
  return (
    <section className='mt-8'>
      <div className='mb-5'>
        <p className='text-xs font-semibold uppercase tracking-[0.05em] text-[#006c49]'>
          Sık Sorulan Sorular
        </p>
        <h2 className='mt-2 text-2xl font-semibold leading-8 tracking-[-0.01em] text-[#0b1c30]'>
          Hızlı yanıtlar
        </h2>
      </div>

      <div className='space-y-3'>
        {frequentlyAskedQuestions.map((item, index) => (
          <details
            className='group rounded border border-[#c5c6cd] bg-[#f8f9ff] open:border-[#091426]'
            key={item.question}
            open={index === 0}
          >
            <summary className='flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-sm font-semibold text-[#0b1c30] marker:content-none md:px-6'>
              {item.question}
              <MaterialIcon className='shrink-0 text-[20px] text-[#45474c] transition-transform group-open:rotate-180'>
                expand_more
              </MaterialIcon>
            </summary>
            <p className='border-t border-[#c5c6cd] px-5 py-4 text-sm leading-6 text-[#45474c] md:px-6'>
              {item.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}

export function EmployerHelpCenterPage() {
  return (
    <DashboardShell
      navigationItems={navigationItems}
      sidebarSubtitle=''
      sidebarTitle='Vettingo'
      utilityItems={utilityItems}
    >
      <main className='employer-dashboard-theme mx-auto w-full max-w-[1440px] flex-1 bg-[#f8f9ff] p-4 md:p-8'>
        <header className='mb-8 border-b border-[#c5c6cd] pb-6'>
          <p className='text-xs font-semibold uppercase tracking-[0.05em] text-[#006c49]'>
            Vettingo Destek
          </p>
          <h1 className='mt-2 text-3xl font-semibold leading-10 tracking-[-0.02em] text-[#0b1c30]'>
            Yardım Merkezi
          </h1>
          <p className='mt-2 max-w-2xl text-sm leading-6 text-[#45474c]'>
            İşe alım akışınla ilgili soruların için destek talebi oluştur veya sık sorulan sorulara göz at.
          </p>
        </header>

        <div className='grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,2fr)_minmax(260px,1fr)]'>
          <SupportForm />

          <aside className='rounded border border-[#c5c6cd] bg-[#eff4ff] p-5 md:p-6'>
            <div className='flex h-10 w-10 items-center justify-center rounded bg-[#6cf8bb] text-[#00714d]'>
              <MaterialIcon className='text-[24px]'>support_check</MaterialIcon>
            </div>
            <h2 className='mt-5 text-lg font-semibold leading-6 text-[#0b1c30]'>
              Yanıt süresi
            </h2>
            <p className='mt-2 text-sm leading-6 text-[#45474c]'>
              Destek taleplerini iş günlerinde ortalama 4 saat içinde yanıtlıyoruz.
            </p>
            <div className='mt-6 border-t border-[#c5c6cd] pt-5'>
              <p className='text-xs font-semibold uppercase tracking-[0.05em] text-[#45474c]'>
                Çalışma saatleri
              </p>
              <p className='mt-2 text-sm font-medium text-[#0b1c30]'>
                Pazartesi–Cuma, 09.00–18.00
              </p>
            </div>
          </aside>
        </div>

        <FrequentlyAskedQuestions />
      </main>
    </DashboardShell>
  );
}
