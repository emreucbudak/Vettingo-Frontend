import type { HrProductDocumentation } from "@/entities/hr-product-documentation";

const candidateDocumentationDefaults = {
  eyebrow: "Aday Ürün Dokümantasyonu",
  showHero: false,
  showClosingSections: false,
  showHelpCenterCta: false,
} as const;

export const candidateApplicationsDocumentation = {
  ...candidateDocumentationDefaults,
  title: "Başvurularınızı tek bir akışta takip edin",
  description:
    "Başvurular alanı; gönderdiğiniz başvuruları, güncel süreç aşamalarını, görüşme bilgilerini ve işveren güncellemelerini düzenli biçimde takip etmenizi sağlar.",
  icon: "assignment_ind",
  introduction: [
    "Birden fazla pozisyona başvurduğunuzda hangi şirketten ne zaman dönüş beklediğinizi hatırlamak zorlaşabilir. Başvurular alanı, aktif ve geçmiş başvurularınızı tek görünümde toplayarak her pozisyonun güncel durumunu açık biçimde gösterir.",
    "Süreç aşamaları, planlanan görüşmeler ve son güncellemeler aynı kayıt üzerinde tutulur. Böylece bir sonraki adımı kaçırmadan hazırlanabilir, sonuçlanan başvurularınızı da daha sonra değerlendirmek üzere geçmişte saklayabilirsiniz.",
  ],
  capabilities: [
    {
      title: "Birleşik başvuru görünümü",
      description:
        "Aktif ve sonuçlanmış başvurularınızı pozisyon, şirket ve tarih bilgileriyle tek listede gösterir.",
    },
    {
      title: "Aşama takibi",
      description:
        "Başvurunun inceleme, değerlendirme, mülakat veya sonuç aşamasında olduğunu görünür kılar.",
    },
    {
      title: "Görüşme ayrıntıları",
      description:
        "Planlanan görüşmelerin tarih, saat ve katılım bilgilerini ilgili başvurmayla birlikte tutar.",
    },
    {
      title: "Geçmiş kaydı",
      description:
        "Tamamlanan süreçleri kaybetmeden saklayarak iş arama deneyiminizi geriye dönük incelemenizi sağlar.",
    },
  ],
  workflow: [
    {
      title: "Başvurunuzu tamamlayın",
      description:
        "İlan ayrıntılarını ve gönderilecek profil bilgilerini kontrol ederek başvuruyu onaylayın.",
    },
    {
      title: "Güncel aşamayı izleyin",
      description:
        "Başvurular alanında pozisyonun mevcut durumunu ve son güncelleme tarihini kontrol edin.",
    },
    {
      title: "Sonraki adıma hazırlanın",
      description:
        "Değerlendirme veya görüşme planlandığında ilgili gereksinimleri ve katılım bağlantısını inceleyin.",
    },
    {
      title: "Sonucu kaydedin",
      description:
        "Tamamlanan süreci geçmişte tutun ve sonraki başvurularınız için öğrendiklerinizi not edin.",
    },
  ],
  detailedSections: [
    {
      title: "Başvuru durumlarını doğru yorumlayın",
      paragraphs: [
        "Her aşama işverenin sürecindeki farklı bir adımı temsil eder. İnceleniyor durumu profilinizin değerlendirildiğini, değerlendirme veya mülakat durumu ise sizden yeni bir aksiyon beklendiğini gösterebilir. Durum değişikliklerini düzenli kontrol etmek, zaman sınırlı adımları kaçırmanızı önler.",
        "Bir başvuru uzun süre aynı aşamada kaldığında bunun mutlaka olumsuz bir sonuç anlamına gelmediğini unutmayın. İşe alım takvimleri ekiplerin uygunluğuna göre değişebilir. Platformdaki güncellemeleri takip edin ve yalnızca belirtilen iletişim kanallarını kullanın.",
      ],
      points: [
        "Başvuru tarihini ve son güncelleme bilgisini birlikte değerlendirin.",
        "Aksiyon gerektiren bildirimleri mümkün olan en kısa sürede tamamlayın.",
        "Görüşme bağlantılarını etkinlik saatinden önce kontrol edin.",
      ],
    },
    {
      title: "Başvurularınızı bilinçli biçimde yönetin",
      paragraphs: [
        "Çok sayıda ilana aynı özgeçmişle başvurmak yerine rolün gereksinimlerini inceleyin ve profilinizde ilgili deneyimlerin görünür olduğundan emin olun. Pozisyona uygun, güncel bir profil hem değerlendirmenin doğruluğunu hem de sizin sürece hazırlığınızı artırır.",
        "Sonuçlanan başvuruları yalnızca olumlu veya olumsuz olarak değerlendirmeyin. Hangi rollerin deneyiminizle daha iyi örtüştüğünü, hangi aşamalarda zorlandığınızı ve hangi yetkinlikleri geliştirmeniz gerektiğini düzenli olarak gözden geçirin.",
      ],
      points: [
        "Başvurmadan önce pozisyonun temel gereksinimlerini okuyun.",
        "Aynı anda yürüttüğünüz süreçlerin tarihlerini takviminize ekleyin.",
        "Tamamlanan süreçlerden çıkardığınız öğrenimleri not edin.",
      ],
    },
  ],
  bestPractices: [
    "Başvuru öncesinde profil ve iletişim bilgilerinizi güncelleyin.",
    "İşveren bildirimlerini ve yaklaşan tarihleri düzenli kontrol edin.",
    "Değerlendirme ve görüşme adımlarını son güne bırakmayın.",
    "Aynı pozisyona birden fazla başvuru göndermekten kaçının.",
    "Şüpheli bağlantıları açmadan önce kaynağını doğrulayın.",
  ],
  outcomes: [
    { value: "Daha görünür", label: "başvuru süreci" },
    { value: "Daha hazırlıklı", label: "sonraki adımlar" },
    { value: "Daha düzenli", label: "iş arama takibi" },
  ],
} as const satisfies HrProductDocumentation;

export const candidateProfileDocumentation = {
  ...candidateDocumentationDefaults,
  title: "Profilinizi ve özgeçmişinizi güçlü bir kariyer kaydına dönüştürün",
  description:
    "Profil ve Özgeçmiş alanı; deneyimlerinizi, yetkinliklerinizi, eğitim bilgilerinizi ve kariyer tercihlerinizi işverenlerin doğru bağlamda değerlendirebileceği biçimde sunmanızı sağlar.",
  icon: "badge",
  introduction: [
    "Vettingo profiliniz yalnızca dijital bir özgeçmiş değildir. Deneyimlerinizin kapsamını, doğrulanmış yetkinliklerinizi ve kariyer hedeflerinizi bir araya getirerek size uygun fırsatların belirlenmesinde temel kaynak olarak kullanılır.",
    "Eksiksiz ve güncel bilgiler, eşleşme sonuçlarının doğruluğunu artırırken işverenlerin deneyiminizi daha hızlı anlamasına yardımcı olur. Profilinizi düzenli aralıklarla gözden geçirmek, yeni sorumluluklarınızı ve geliştirdiğiniz becerileri görünür tutar.",
  ],
  capabilities: [
    {
      title: "Yapılandırılmış deneyim",
      description:
        "Rollerinizi, sorumluluklarınızı ve elde ettiğiniz sonuçları anlaşılır bir kariyer zaman çizelgesinde toplar.",
    },
    {
      title: "Yetkinlik görünürlüğü",
      description:
        "Teknik ve davranışsal yetkinliklerinizi ilgili deneyimlerle ilişkilendirerek değerlendirilmelerini kolaylaştırır.",
    },
    {
      title: "Özgeçmiş yönetimi",
      description:
        "Güncel özgeçmişinizi profilinizle birlikte kullanarak başvurularda tutarlı bilgi sunmanızı sağlar.",
    },
    {
      title: "Kariyer tercihleri",
      description:
        "Rol, lokasyon ve çalışma modeli tercihlerinizi belirleyerek önerilerin size uygunluğunu geliştirir.",
    },
  ],
  workflow: [
    {
      title: "Temel bilgileri doğrulayın",
      description:
        "İletişim bilgilerinizin, konumunuzun ve profesyonel unvanınızın güncel olduğundan emin olun.",
    },
    {
      title: "Deneyimleri sonuçlarla anlatın",
      description:
        "Her rolde üstlendiğiniz sorumlulukları ve ortaya çıkardığınız somut etkiyi kısa ifadelerle açıklayın.",
    },
    {
      title: "Yetkinlikleri ilişkilendirin",
      description:
        "Becerilerinizi kullandığınız proje ve görevlerle destekleyerek doğru bağlamı sağlayın.",
    },
    {
      title: "Tercihleri güncelleyin",
      description:
        "Hedeflediğiniz rol, çalışma modeli ve lokasyon bilgilerini mevcut beklentilerinize göre düzenleyin.",
    },
  ],
  detailedSections: [
    {
      title: "Deneyiminizi görev listesi yerine etkiyle anlatın",
      paragraphs: [
        "Deneyim açıklamalarında yalnızca neler yaptığınızı değil, çalışmanızın hangi problemi çözdüğünü ve nasıl bir sonuç ürettiğini belirtin. Ekip büyüklüğü, ürün kapsamı veya ölçülebilir gelişmeler gibi ayrıntılar sorumluluk seviyenizin daha doğru anlaşılmasını sağlar.",
        "Kısa ve somut ifadeler kullanın. Birbirine benzeyen görevleri tekrar etmek yerine her rolün kariyerinizdeki farklı katkısını öne çıkarın. Gizli şirket bilgilerini veya paylaşma yetkiniz olmayan verileri profilinize eklemeyin.",
      ],
      points: [
        "Her deneyim için rolünüzü ve temel katkınızı açıkça yazın.",
        "Mümkün olduğunda sonucu ölçülebilir bir bağlamla destekleyin.",
        "Güncelliğini yitiren veya tekrar eden bilgileri sadeleştirin.",
      ],
    },
    {
      title: "Profil, özgeçmiş ve tercihler arasında tutarlılık kurun",
      paragraphs: [
        "Profilinizdeki tarihler, unvanlar ve eğitim bilgileri yüklediğiniz özgeçmişle uyumlu olmalıdır. Tutarsız bilgiler değerlendirme sırasında gereksiz belirsizlik yaratabilir. Güncelleme yaptığınızda hem profil alanlarını hem de özgeçmiş dosyanızı kontrol edin.",
        "Kariyer tercihleri zaman içinde değişebilir. Farklı bir rol ailesine yöneldiğinizde veya çalışma modeli beklentiniz değiştiğinde tercihlerinizi yenileyin. Böylece öneriler geçmiş seçimleriniz yerine güncel hedeflerinize dayanır.",
      ],
      points: [
        "Tarih ve unvan bilgilerini özgeçmişinizle karşılaştırın.",
        "Yalnızca gerçekten kullanabildiğiniz yetkinlikleri ekleyin.",
        "Rol ve çalışma modeli tercihlerinizi düzenli gözden geçirin.",
      ],
    },
  ],
  bestPractices: [
    "Profilinizi önemli kariyer değişikliklerinden sonra güncelleyin.",
    "Deneyim açıklamalarında açık ve doğrulanabilir ifadeler kullanın.",
    "İletişim bilgilerinizi yayınlamadan önce doğrulayın.",
    "Özgeçmiş dosyanızı anlaşılır bir adla ve güncel formatta yükleyin.",
    "Hassas veya paylaşma yetkiniz olmayan bilgileri eklemeyin.",
  ],
  outcomes: [
    { value: "Daha doğru", label: "profil bağlamı" },
    { value: "Daha güçlü", label: "kariyer anlatısı" },
    { value: "Daha isabetli", label: "fırsat eşleşmesi" },
  ],
} as const satisfies HrProductDocumentation;

export const candidateJobRecommendationsDocumentation = {
  ...candidateDocumentationDefaults,
  title: "İş önerilerini hedeflerinize göre değerlendirin",
  description:
    "İş Önerileri; profiliniz, yetkinlikleriniz ve kariyer tercihlerinizle örtüşen ilanları önceliklendirerek doğru fırsatlara daha hızlı odaklanmanızı sağlar.",
  icon: "work",
  introduction: [
    "İş önerileri, yalnızca unvan benzerliğine göre hazırlanan bir ilan listesi değildir. Profilinizdeki deneyim, yetkinlik, lokasyon ve çalışma modeli bilgileri rol gereksinimleriyle birlikte değerlendirilerek size anlamlı bir başlangıç noktası sunulur.",
    "Eşleşme göstergeleri kararınızın yerine geçmez. İlanın sorumluluklarını, şirket bağlamını ve sizin kariyer hedeflerinizi birlikte değerlendirmeniz gerekir. Önerileri düzenli incelemek ve tercihlerinizi güncel tutmak sonuçların zaman içinde iyileşmesine yardımcı olur.",
  ],
  capabilities: [
    {
      title: "Kişiselleştirilmiş sıralama",
      description:
        "Profil ve tercihlerinizle daha güçlü örtüşen ilanları görünümde önceliklendirir.",
    },
    {
      title: "Eşleşme bağlamı",
      description:
        "Bir rolün hangi deneyim ve yetkinliklerinizle ilişkili olduğunu anlamanıza yardımcı olur.",
    },
    {
      title: "Tercih uyumu",
      description:
        "Lokasyon, çalışma modeli ve rol beklentilerinizi öneri değerlendirmesine dahil eder.",
    },
    {
      title: "Hızlı başvuru akışı",
      description:
        "Uygun bulduğunuz ilanı inceleyip güncel profilinizle başvuru sürecine geçmenizi kolaylaştırır.",
    },
  ],
  workflow: [
    {
      title: "Tercihlerinizi tanımlayın",
      description:
        "Hedef rol, lokasyon ve çalışma modeli beklentilerinizi profilinizde güncel tutun.",
    },
    {
      title: "Önerileri karşılaştırın",
      description:
        "İlanları yalnızca skora göre değil, sorumluluklar ve gelişim fırsatlarıyla birlikte inceleyin.",
    },
    {
      title: "Eksik bağlamı kontrol edin",
      description:
        "Rol için önemli bir deneyiminiz profilinizde görünmüyorsa başvurudan önce bilgilerinizi güncelleyin.",
    },
    {
      title: "Bilinçli başvuru yapın",
      description:
        "Beklentilerinizle örtüşen ilanlarda şirket ve pozisyon ayrıntılarını doğruladıktan sonra başvurun.",
    },
  ],
  detailedSections: [
    {
      title: "Eşleşme skorunu yardımcı bir sinyal olarak kullanın",
      paragraphs: [
        "Yüksek eşleşme skoru, profilinizdeki bazı sinyallerin rol gereksinimleriyle güçlü biçimde örtüştüğünü gösterir; işe kabul garantisi vermez. Benzer şekilde daha düşük bir skor, aktarılabilir becerilerinizin veya yeni bir alana geçiş potansiyelinizin olmadığı anlamına gelmez.",
        "Skoru ilan metniyle birlikte okuyun. Zorunlu yetkinlikler, günlük sorumluluklar, kıdem seviyesi ve çalışma koşulları kariyer hedeflerinizle uyumluysa rolü daha ayrıntılı değerlendirin. Kararınızı tek bir sayısal göstergeye dayandırmayın.",
      ],
      points: [
        "Skorun yanında eşleşen deneyim ve yetkinlikleri inceleyin.",
        "Rolün zorunlu koşullarını başvuru öncesinde doğrulayın.",
        "Aktarılabilir becerilerinizi profil açıklamalarında görünür kılın.",
      ],
    },
    {
      title: "Önerilerin kalitesini güncel bilgilerle geliştirin",
      paragraphs: [
        "Öneriler profilinizde bulunan verilere dayanır. Yeni bir beceri kazandığınızda, farklı bir lokasyona taşındığınızda veya uzaktan çalışma tercihiniz değiştiğinde bu bilgileri güncelleyin. Eksik bilgiler uygun fırsatların geri planda kalmasına neden olabilir.",
        "Öneri listesini düzenli incelemek de önemlidir. İlgilenmediğiniz rol türlerini fark ettiğinizde tercihlerinizi daraltabilir; benzer ve uygun ilanları gördüğünüzde hedef rol tanımınızı daha net hale getirebilirsiniz.",
      ],
      points: [
        "Profil ve kariyer tercihlerinizi düzenli aralıklarla yenileyin.",
        "Unvan yerine rolün sorumluluklarına ve gelişim alanına odaklanın.",
        "Başvurmadan önce şirket ve ilan bilgilerinin güncelliğini kontrol edin.",
      ],
    },
  ],
  bestPractices: [
    "Önerileri yalnızca eşleşme puanına göre sıralamayın.",
    "Rolün sorumluluklarını kariyer hedeflerinizle karşılaştırın.",
    "Lokasyon ve çalışma modeli koşullarını baştan doğrulayın.",
    "Profilinizde eksik olan ilgili deneyimleri başvuru öncesinde tamamlayın.",
    "Size uygun olmayan ilanlara toplu başvuru yapmaktan kaçının.",
  ],
  outcomes: [
    { value: "Daha ilgili", label: "ilan önerileri" },
    { value: "Daha bilinçli", label: "başvuru kararı" },
    { value: "Daha verimli", label: "iş arama süreci" },
  ],
} as const satisfies HrProductDocumentation;

export const candidateAssessmentInterviewDocumentation = {
  ...candidateDocumentationDefaults,
  title: "Değerlendirme ve mülakatlara güvenle hazırlanın",
  description:
    "Değerlendirme ve Mülakat alanı; planlanan adımları, katılım bilgilerini ve hazırlık beklentilerini tek yerde takip ederek sürece zamanında ve hazırlıklı katılmanızı sağlar.",
  icon: "calendar_month",
  introduction: [
    "İşe alım süreçleri çevrim içi değerlendirmeler, telefon görüşmeleri, teknik oturumlar veya panel mülakatları gibi farklı adımlar içerebilir. Bu alan, her etkinliğin zamanını ve katılım ayrıntılarını ilgili başvuruyla birlikte görünür tutar.",
    "Başarılı bir deneyim için yalnızca tarih ve saate yetişmek yeterli değildir. Oturumun amacını, kullanılacak bağlantıyı ve sizden beklenen hazırlığı önceden kontrol etmek teknik sorunları azaltır ve deneyiminizi daha iyi aktarmanıza yardımcı olur.",
  ],
  capabilities: [
    {
      title: "Birleşik takvim",
      description:
        "Yaklaşan değerlendirme ve görüşmeleri tarih, saat ve ilgili pozisyonla birlikte gösterir.",
    },
    {
      title: "Katılım ayrıntıları",
      description:
        "Çevrim içi bağlantı, görüşme biçimi ve gerekli hazırlık bilgisini etkinlik kaydında toplar.",
    },
    {
      title: "Aşama bağlamı",
      description:
        "Her değerlendirme veya mülakatın başvuru sürecindeki yerini anlamanızı sağlar.",
    },
    {
      title: "Güvenli yönlendirme",
      description:
        "Oturumlara platformdaki doğrulanmış bağlantılar üzerinden katılmanıza yardımcı olur.",
    },
  ],
  workflow: [
    {
      title: "Davet ayrıntılarını okuyun",
      description:
        "Tarih, saat dilimi, görüşme biçimi ve sizden istenen hazırlıkları kontrol edin.",
    },
    {
      title: "Teknik ortamı hazırlayın",
      description:
        "Bağlantınızı, kamera ve mikrofonunuzu oturumdan önce test edin.",
    },
    {
      title: "Rol bağlamını gözden geçirin",
      description:
        "İlanı, şirketi ve paylaşmak istediğiniz deneyim örneklerini yeniden inceleyin.",
    },
    {
      title: "Zamanında katılın",
      description:
        "Doğrulanmış bağlantıyı kullanarak birkaç dakika erken hazır olun ve talimatları izleyin.",
    },
  ],
  detailedSections: [
    {
      title: "Değerlendirmeleri adil ve güvenli biçimde tamamlayın",
      paragraphs: [
        "Değerlendirme başlamadan önce süreyi, soru türlerini ve izin verilen kaynakları okuyun. İnternet bağlantınızın kararlı olduğu, dikkatinizin dağılmayacağı bir ortam seçin. Teknik bir sorun oluşursa ekran görüntüsü veya hata mesajıyla birlikte belirtilen destek kanalına başvurun.",
        "Yanıtlarınızı kendi bilginiz ve deneyiminizle hazırlayın. İzin verilmeyen yardım araçlarını kullanmak değerlendirme sonucunun geçersiz sayılmasına yol açabilir. Erişilebilirlik ihtiyacınız varsa değerlendirme başlamadan önce destek ekibiyle iletişime geçin.",
      ],
      points: [
        "Süre ve araç kullanım kurallarını başlamadan önce okuyun.",
        "Kesintisiz bir ortam ve güvenilir internet bağlantısı hazırlayın.",
        "Teknik sorunları zaman damgası ve hata ayrıntısıyla bildirin.",
      ],
    },
    {
      title: "Mülakatta deneyiminizi somut örneklerle aktarın",
      paragraphs: [
        "Görüşme öncesinde rolün temel sorumluluklarını belirleyin ve bunlarla ilişkili deneyimlerinizi seçin. Durumu, sorumluluğunuzu, uyguladığınız yaklaşımı ve ortaya çıkan sonucu açık bir sırayla anlatmak görüşmecinin katkınızı daha doğru değerlendirmesini sağlar.",
        "Bilmediğiniz bir konuda tahmin yürütmek yerine düşünme yaklaşımınızı açıklayın ve gerektiğinde netleştirici soru sorun. Mülakat aynı zamanda sizin de rolü değerlendirdiğiniz bir süreçtir; ekip, başarı beklentileri ve çalışma biçimi hakkında sorular hazırlayın.",
      ],
      points: [
        "Rolün gereksinimleriyle ilişkili üç deneyim örneği hazırlayın.",
        "Yanıtlarınızda kendi katkınızı ve sonucu birbirinden ayırın.",
        "Ekip ve rol hakkında sormak istediğiniz soruları önceden not edin.",
      ],
    },
  ],
  bestPractices: [
    "Tarih, saat ve saat dilimini daveti aldığınızda doğrulayın.",
    "Görüşme bağlantısını ve teknik ekipmanınızı önceden test edin.",
    "Rol gereksinimleriyle ilgili somut deneyim örnekleri hazırlayın.",
    "Değerlendirme kurallarına ve gizlilik gereksinimlerine uyun.",
    "Katılamayacaksanız mümkün olan en erken zamanda bilgi verin.",
  ],
  outcomes: [
    { value: "Daha hazır", label: "değerlendirme deneyimi" },
    { value: "Daha güvenli", label: "mülakat katılımı" },
    { value: "Daha açık", label: "deneyim aktarımı" },
  ],
} as const satisfies HrProductDocumentation;
