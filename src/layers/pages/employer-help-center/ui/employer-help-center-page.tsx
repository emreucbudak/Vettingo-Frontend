import Link from 'next/link';
import { ROUTES } from '@/shared/config/routes';
import { MaterialIcon } from '@/shared/ui/material-icon';
import { EmployerShell } from '@/widgets/employer/shell';

const helpTopics = [
  {
    icon: 'work',
    title: 'İlan Yönetimi',
    description: 'İş ilanları ve ilan durumları.',
    href: ROUTES.employerJobManagementDocumentation,
  },
  {
    icon: 'assignment_ind',
    title: 'Başvurular',
    description: 'Başvurular ve değerlendirme süreçleri.',
    href: ROUTES.employerApplicationsDocumentation,
  },
  {
    icon: 'binoculars',
    title: 'Scout',
    description: 'Aday keşfi ve gelişmiş filtreleme.',
    href: ROUTES.employerScoutDocumentation,
  },
  {
    icon: 'groups',
    title: 'Hesap ve Ekip Yönetimi',
    description: 'Ekip erişimleri ve hesap ayarları.',
    href: ROUTES.employerAccountTeamDocumentation,
  },
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
  {
    question: 'Vettingo Rating nasıl hesaplanır?',
    answer:
      '100 üzerinden hesaplanan Vettingo Rating; doğrulanmış yetkinlikler, deneyim derinliği, problem çözme, iletişim ve takım çalışması gibi alt özelliklerin birlikte değerlendirilmesiyle oluşur.',
  },
  {
    question: 'Bir ilanı yayından kaldırmadan duraklatabilir miyim?',
    answer:
      'İlanlarım sayfasındaki seçenekler menüsünden ilanı duraklatabilirsin. Duraklatılan ilan yeni başvuru almaz; mevcut başvurular ve değerlendirme geçmişi korunur.',
  },
  {
    question: 'Önerilen bir yeteneği başvuru sürecine nasıl eklerim?',
    answer:
      'Yetenek detayında “İletişime Geç” adımını kullanarak adayı yetenek havuzuna ekleyebilir, ardından uygun rol için başvuru veya görüşme süreci başlatabilirsin.',
  },
  {
    question: 'Aday raporunu ekip arkadaşlarımla paylaşabilir miyim?',
    answer:
      'Aday detayındaki PDF dışa aktarma seçeneğiyle analiz özetini, role uygunluk puanını ve rating kırılımını tek raporda paylaşabilirsin.',
  },
] as const;

function HelpTopics() {
  return (
    <section className='mb-10'>
      <h1 className='mb-5 text-xl font-semibold leading-7 text-[#0b1c30]'>
        Hangi konuda yardıma ihtiyacın var?
      </h1>
      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4'>
        {helpTopics.map((topic) => (
          <Link
            className='group flex h-full flex-col rounded border border-[#c5c6cd] bg-[#f8f9ff] p-5 transition-all hover:-translate-y-0.5 hover:border-[#091426] hover:shadow-[0_10px_24px_rgba(9,20,38,0.06)]'
            href={topic.href}
            key={topic.title}
          >
            <span className='flex h-10 w-10 items-center justify-center rounded bg-[#dce9ff] text-[#091426]'>
              <MaterialIcon className='text-[21px]'>{topic.icon}</MaterialIcon>
            </span>
            <h2 className='mt-4 text-sm font-semibold text-[#0b1c30]'>
              {topic.title}
            </h2>
            <p className='mt-2 whitespace-nowrap text-xs leading-5 text-[#45474c]'>
              {topic.description}
            </p>
            <span className='mt-auto inline-flex items-center gap-1 pt-4 text-[10px] font-semibold uppercase tracking-[0.05em] text-[#006c49]'>
              Dokümantasyonu Oku
              <MaterialIcon className='text-[16px]'>arrow_forward</MaterialIcon>
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}

function FrequentlyAskedQuestions() {
  return (
    <section className='mt-8'>
      <div className='mb-5'>
        <h2 className='text-2xl font-semibold leading-8 tracking-[-0.01em] text-[#0b1c30]'>
          Sıkça Sorulan Sorular
        </h2>
      </div>

      <div className='space-y-3'>
        {frequentlyAskedQuestions.map((item) => (
          <details
            className='group rounded border border-[#c5c6cd] bg-[#f8f9ff] open:border-[#091426]'
            key={item.question}
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
    <EmployerShell>
      <main className='employer-dashboard-theme mx-auto w-full max-w-[1200px] flex-1 bg-[#f8f9ff] p-4 md:p-8'>
        <HelpTopics />
        <FrequentlyAskedQuestions />
      </main>
    </EmployerShell>
  );
}
