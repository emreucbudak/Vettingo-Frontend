import type { HrProductDocumentation } from "@/entities/hr-product-documentation";

export const employerJobManagementDocumentation = {
  eyebrow: "İşveren Ürün Dokümantasyonu",
  title: "İlan Yönetimi ile doğru pozisyonu güvenle yayınlayın",
  description:
    "İlan Yönetimi; rol ihtiyacını açık bir iş ilanına dönüştürmenizi, ekip onaylarını tek yerde toplamanızı ve yayındaki ilanların durumunu düzenli biçimde izlemenizi sağlar.",
  icon: "business_center",
  showHero: false,
  showClosingSections: false,
  showHelpCenterCta: false,
  introduction: [
    "Başarılı bir işe alım süreci, rolün neden açıldığının ve yeni ekip üyesinden hangi sonuçların beklendiğinin netleştirilmesiyle başlar. İlan Yönetimi, pozisyon adı, sorumluluklar, yetkinlikler, çalışma modeli ve lokasyon gibi bilgileri ortak bir kayıt üzerinde toplar.",
    "Taslak, aktif, duraklatılmış ve kapanmış ilan durumları birbirinden ayrıldığı için ekip hangi pozisyonun başvuru aldığını ve hangisinin güncellenmesi gerektiğini kolayca görür. İlan üzerinde yapılan değişikliklerin aynı yerde tutulması, farklı kanallarda eski metinlerin kullanılmasını önler.",
  ],
  capabilities: [
    {
      title: "Merkezi ilan kaydı",
      description:
        "Rol bilgilerini, sorumlulukları ve yayın durumunu tek bir ilan kaydında bir araya getirir.",
    },
    {
      title: "Tutarlı rol tanımı",
      description:
        "Zorunlu ve tercih edilen yetkinlikleri ayırarak aday beklentisini daha anlaşılır hale getirir.",
    },
    {
      title: "Kontrollü yayın akışı",
      description:
        "İlanı taslak olarak hazırlamanızı, gözden geçirmenizi ve hazır olduğunda yayına almanızı sağlar.",
    },
    {
      title: "Görünür performans",
      description:
        "Başvuru sayısını ve ilan durumunu birlikte göstererek gerekli güncellemeleri belirlemeyi kolaylaştırır.",
    },
  ],
  workflow: [
    {
      title: "Rol ihtiyacını netleştirin",
      description:
        "Pozisyonun amacını, başarı ölçütlerini, kıdemini ve çalışma modelini ilgili yöneticiyle belirleyin.",
    },
    {
      title: "İlan taslağını oluşturun",
      description:
        "Sorumlulukları, zorunlu yetkinlikleri ve adayın bilmesi gereken çalışma koşullarını ekleyin.",
    },
    {
      title: "Ekipçe gözden geçirin",
      description:
        "Dil, kapsam ve değerlendirme ölçütleri üzerinde ortak mutabakat sağlayın.",
    },
    {
      title: "İlanı yayınlayın",
      description:
        "Önizlemeyi kontrol edin, ilanı aktif hale getirin ve başvuru akışını izlemeye başlayın.",
    },
    {
      title: "Durumu güncel tutun",
      description:
        "İhtiyaç değiştiğinde ilanı düzenleyin, duraklatın veya süreci tamamlayarak kapatın.",
    },
  ],
  detailedSections: [
    {
      title: "İlanı rolün başarı tanımıyla yazın",
      paragraphs: [
        "İlan metnini yalnızca görev listesi olarak hazırlamak yerine, kişinin ilk aylarda hangi sonuçları üretmesinin beklendiğini açıklayın. Bu yaklaşım hem adayın rolü doğru değerlendirmesini sağlar hem de ekip içinde ortak bir değerlendirme zemini oluşturur.",
        "Zorunlu yetkinliklerle öğrenilebilir becerileri birbirinden ayırın. Gereğinden uzun şart listeleri uygun adayların başvurmamasına yol açabilir. Unvan, deneyim yılı ve eğitim gibi ölçütleri rolün gerçek gereksinimiyle ilişkilendirerek kullanın.",
      ],
      points: [
        "Rolün üç ila beş temel başarı ölçütünü belirleyin.",
        "Sorumlulukları açık, ölçülebilir ve kapsayıcı bir dille yazın.",
        "Lokasyon ve çalışma modelini yayınlamadan önce doğrulayın.",
      ],
    },
    {
      title: "Yayın durumunu ve ilan performansını yönetin",
      paragraphs: [
        "Aktif ilanları düzenli aralıklarla kontrol edin. Başvuru sayısı yüksek fakat uygun aday oranı düşükse ilan dilini, yetkinlik önceliklerini veya rol kapsamını yeniden gözden geçirin. Değişikliklerin değerlendirme ölçütleriyle tutarlı olmasına dikkat edin.",
        "Pozisyon geçici olarak beklemeye alındığında ilanı silmek yerine duraklatın. Böylece mevcut başvurular ve değerlendirme geçmişi korunur. Rol kapandığında sonucu kaydedin ve benzer ilanlarda kullanılabilecek öğrenimleri ekip notlarına ekleyin.",
      ],
      points: [
        "Aktif ilanları haftalık olarak gözden geçirin.",
        "Kapsam değişikliklerini değerlendirme ekibiyle paylaşın.",
        "Kapanan ilanların başvuru ve karar geçmişini koruyun.",
      ],
    },
  ],
  bestPractices: [
    "Aynı sorumluluğu farklı ifadelerle tekrar etmekten kaçının.",
    "Adaya sunulan değer önerisini ve çalışma biçimini açıkça belirtin.",
    "İlan metninde ayrımcı veya gereksiz dışlayıcı ölçütler kullanmayın.",
    "Yayın öncesinde yazım, bağlantı ve lokasyon bilgilerini kontrol edin.",
    "Rol değiştiğinde ilanla birlikte değerlendirme ölçütlerini de güncelleyin.",
  ],
  outcomes: [
    { value: "Daha net", label: "rol beklentisi" },
    { value: "Daha tutarlı", label: "ilan yönetimi" },
    { value: "Daha güçlü", label: "aday deneyimi" },
  ],
} as const satisfies HrProductDocumentation;

export const employerApplicationsDocumentation = {
  eyebrow: "İşveren Ürün Dokümantasyonu",
  title: "Başvuruları ortak ölçütlerle değerlendirin",
  description:
    "Başvurular alanı; gelen adayları rol uygunluğu, süreç aşaması ve Vettingo Rating sinyalleriyle incelemenizi, karar bağlamını ekibinizle paylaşmanızı sağlar.",
  icon: "assignment_ind",
  showHero: false,
  showClosingSections: false,
  showHelpCenterCta: false,
  introduction: [
    "Başvuru sayısı arttıkça adayları yalnızca özgeçmiş sırasına göre incelemek tutarsız kararlara ve geciken dönüşlere yol açabilir. Başvurular alanı, her adayın temel bilgilerini, hedef rolünü, değerlendirme durumunu ve ekip notlarını ortak bir görünümde toplar.",
    "Filtreler ve süreç aşamaları inceleme sırasını düzenlerken Vettingo Rating gibi sinyaller karşılaştırmayı destekler. Bu göstergeler kararın yerine geçmez; adayın deneyimi, doğrulanmış yetkinlikleri ve role özgü kanıtlarla birlikte değerlendirilir.",
  ],
  capabilities: [
    {
      title: "Birleşik başvuru görünümü",
      description:
        "Aday profilini, hedef ilanı, güncel aşamayı ve son aktiviteleri aynı kayıtta gösterir.",
    },
    {
      title: "Anlamlı filtreleme",
      description:
        "Başvuruları durum, deneyim, lokasyon ve değerlendirme sinyallerine göre daraltır.",
    },
    {
      title: "Ortak değerlendirme",
      description:
        "Ekip notlarını ve karar gerekçelerini görünür tutarak tutarlı incelemeyi destekler.",
    },
    {
      title: "İzlenebilir süreç",
      description:
        "Aşama değişikliklerini ve sonraki adımları koruyarak bekleyen işleri görünür kılar.",
    },
  ],
  workflow: [
    {
      title: "Yeni başvuruları sınıflandırın",
      description:
        "Başvurunun doğru ilana bağlı olduğunu ve temel bilgilerin eksiksiz geldiğini kontrol edin.",
    },
    {
      title: "İlk incelemeyi yapın",
      description:
        "Rolün zorunlu ölçütlerini adayın deneyimi ve yetkinlik kanıtlarıyla karşılaştırın.",
    },
    {
      title: "Değerlendirme notunu ekleyin",
      description:
        "Gözleminizi, role etkisini ve önerdiğiniz sonraki adımı açık biçimde kaydedin.",
    },
    {
      title: "Aşamayı güncelleyin",
      description:
        "Adayı uygun sürece taşıyın ve bir sonraki eylemin sorumlusunu belirleyin.",
    },
    {
      title: "Adaya zamanında dönüş yapın",
      description:
        "Olumlu veya olumsuz kararı gecikmeden, açık ve saygılı bir iletişimle paylaşın.",
    },
  ],
  detailedSections: [
    {
      title: "İlk elemede ortak ölçütler kullanın",
      paragraphs: [
        "İncelemeye başlamadan önce ilanın zorunlu ölçütlerini ve tercih nedenlerini ekipçe ayırın. Her başvuruyu aynı temel sorularla değerlendirmek, yoğun dönemlerde bile karar standardının korunmasına yardımcı olur.",
        "Vettingo Rating ve eşleşme göstergelerini profili önceliklendiren sinyaller olarak ele alın. Tek bir puan nedeniyle otomatik karar vermeyin; puanın hangi deneyim ve yetkinliklerden oluştuğunu adayın rol bağlamıyla birlikte inceleyin.",
      ],
      points: [
        "Her aday için aynı zorunlu ölçüt listesini kullanın.",
        "Puanların yanında somut deneyim kanıtlarını inceleyin.",
        "Kararsız kaldığınız konuyu sonraki aşamada doğrulanacak soru olarak yazın.",
      ],
    },
    {
      title: "Karar bağlamını ve aday iletişimini koruyun",
      paragraphs: [
        "Değerlendirme notlarında kişisel yorum yerine işle ilişkili gözlem kullanın. Güçlü yönü, riski ve önerilen sonraki adımı ayrı biçimde yazmak, başka bir ekip üyesinin süreci bağlam kaybetmeden devralmasını sağlar.",
        "Adayların uzun süre yanıtsız kalmasını önlemek için her aşamaya hedef süre ve sorumlu atayın. Süreç ilerlemiyorsa nedeni kayda ekleyin ve adaya güncel durumu bildirin. Tutarlı iletişim, sonuç olumsuz olsa bile güveni korur.",
      ],
      points: [
        "Notlarda gözlem ile yorumu birbirinden ayırın.",
        "Her açık başvuru için sorumlu ve sonraki adım belirleyin.",
        "Olumsuz kararları bekletmeden ve saygılı biçimde iletin.",
      ],
    },
  ],
  bestPractices: [
    "Başvuruları yalnızca geliş sırasına göre değil, rol önceliğine göre planlayın.",
    "Aynı aday için yinelenen ve çelişen ekip notlarından kaçının.",
    "Hassas veya işle ilgisi olmayan kişisel bilgileri kaydetmeyin.",
    "Aşama değişikliklerini gerçek süreç ilerlemesiyle eş zamanlı yapın.",
    "Bekleyen başvuruları düzenli olarak kontrol edip sahipsiz kayıt bırakmayın.",
  ],
  outcomes: [
    { value: "Daha adil", label: "aday incelemesi" },
    { value: "Daha hızlı", label: "süreç ilerlemesi" },
    { value: "Daha görünür", label: "karar geçmişi" },
  ],
} as const satisfies HrProductDocumentation;

export const employerScoutDocumentation = {
  eyebrow: "İşveren Ürün Dokümantasyonu",
  title: "Scout ile doğru adayları proaktif biçimde keşfedin",
  description:
    "Scout; rol, yetkinlik, deneyim, lokasyon ve çalışma modeli ölçütlerini kullanarak uygun profilleri bulmanızı ve güçlü adayları kısa listeye almanızı sağlar.",
  icon: "binoculars",
  showHero: false,
  showClosingSections: false,
  showHelpCenterCta: false,
  introduction: [
    "Bazı roller için yalnızca gelen başvuruları beklemek yeterli olmayabilir. Scout, geniş aday havuzunu açık pozisyonun gerçek gereksinimlerine göre tarayarak işverenlerin doğru profillere daha erken ulaşmasını sağlar.",
    "Arama sonuçları tek bir anahtar kelimeye dayanmaz; adayın rolü, deneyim süresi, yetkinlikleri, lokasyonu, çalışma modeli ve güncel müsaitlik sinyalleri birlikte değerlendirilir. Kısa liste özelliği, keşfedilen adayları sonraki inceleme için düzenli bir grupta tutar.",
  ],
  capabilities: [
    {
      title: "Hedefli aday araması",
      description:
        "Rol, yetkinlik ve aday adını aynı arama alanında kullanarak sonuçları hızla daraltır.",
    },
    {
      title: "Gelişmiş filtreler",
      description:
        "Uzmanlık, deneyim, lokasyon ve çalışma modelini birlikte değerlendirmenizi sağlar.",
    },
    {
      title: "Karşılaştırılabilir profiller",
      description:
        "Adayların rol, yetkinlik, müsaitlik ve rating bilgilerini ortak bir görünümde sunar.",
    },
    {
      title: "Kısa liste yönetimi",
      description:
        "İlgilendiğiniz adayları işaretleyerek sonraki değerlendirme adımlarına hazırlamanızı kolaylaştırır.",
    },
  ],
  workflow: [
    {
      title: "Arama hedefini belirleyin",
      description:
        "Açık rolün vazgeçilmez ölçütlerini ve esnek tutulabilecek beklentilerini ayırın.",
    },
    {
      title: "Temel aramayı başlatın",
      description:
        "Rol, temel yetkinlik veya aday adıyla geniş bir sonuç kümesi oluşturun.",
    },
    {
      title: "Filtreleri kademeli uygulayın",
      description:
        "Deneyim, lokasyon ve çalışma modeli filtrelerini sonuç kalitesini izleyerek ekleyin.",
    },
    {
      title: "Profilleri karşılaştırın",
      description:
        "Deneyim bütünlüğünü, yetkinlikleri, rating sinyallerini ve müsaitliği birlikte inceleyin.",
    },
    {
      title: "Kısa listeyi oluşturun",
      description:
        "Güçlü adayları listeye alın ve iletişim öncesi rol uygunluğunu yeniden doğrulayın.",
    },
  ],
  detailedSections: [
    {
      title: "Aramayı dengeli biçimde daraltın",
      paragraphs: [
        "Aramaya çok sayıda zorunlu filtreyle başlamak uygun adayları görünmez hale getirebilir. Önce rolün temel yetkinliği ve yakın unvanlarla geniş bir arama yapın; ardından deneyim, lokasyon ve çalışma modeli ölçütlerini tek tek ekleyin.",
        "Sonuç sayısı beklenenden düşükse filtreleri sırayla gevşetin ve hangi ölçütün havuzu aşırı daralttığını gözlemleyin. Unvanların şirketler arasında farklı anlamlara gelebileceğini unutmayın; adayın yaptığı işin kapsamını ve aktarılabilir becerilerini de değerlendirin.",
      ],
      points: [
        "Aramaya üç ila beş temel ölçütle başlayın.",
        "Filtreleri tek tek ekleyerek sonuç değişimini izleyin.",
        "Yakın rollerden gelen aktarılabilir becerileri göz ardı etmeyin.",
      ],
    },
    {
      title: "Kısa listeyi anlamlı bir karar adımına dönüştürün",
      paragraphs: [
        "Kısa listeye yalnızca daha sonra bakmak istediğiniz tüm profilleri eklemek yerine, rol için gerçek potansiyel taşıyan adayları alın. Adayın hangi özelliğiyle öne çıktığını ve hangi konunun doğrulanması gerektiğini inceleme sırasında not edin.",
        "Listeyi düzenli aralıklarla gözden geçirerek artık güncel olmayan profilleri çıkarın. Aynı adayla birden fazla ekip üyesinin iletişime geçmesini önlemek için sahiplik ve sonraki adım bilgisini netleştirin.",
      ],
      points: [
        "Her kısa liste seçimini rol ölçütüyle ilişkilendirin.",
        "İletişimden önce müsaitlik ve çalışma tercihini doğrulayın.",
        "Aday sahipliğini ve planlanan sonraki adımı ekipçe görünür tutun.",
      ],
    },
  ],
  bestPractices: [
    "Eşleşme puanını nihai karar değil, inceleme sinyali olarak kullanın.",
    "Arama ölçütlerinde işle ilgisi olmayan dolaylı göstergelere ağırlık vermeyin.",
    "Sonuç çeşitliliğini kontrol ederek gereksiz dar filtreleri gevşetin.",
    "Kısa listeyi açık rol veya arama amacıyla ilişkilendirin.",
    "Güncelliğini yitiren aramaları ve listeleri düzenli olarak temizleyin.",
  ],
  outcomes: [
    { value: "Daha erken", label: "aday keşfi" },
    { value: "Daha odaklı", label: "arama sonuçları" },
    { value: "Daha düzenli", label: "kısa liste" },
  ],
} as const satisfies HrProductDocumentation;

export const employerAccountTeamDocumentation = {
  eyebrow: "İşveren Ürün Dokümantasyonu",
  title: "Hesap ve Ekip Yönetimi ile erişimleri güvenle yönetin",
  description:
    "Hesap ve Ekip Yönetimi; ekip üyelerini davet etmenizi, sorumluluklarına uygun erişim seviyeleri tanımlamanızı ve şirket hesabı ayarlarını güncel tutmanızı sağlar.",
  icon: "groups",
  showHero: false,
  showClosingSections: false,
  showHelpCenterCta: false,
  introduction: [
    "İşe alım sürecine farklı görevlerdeki ekip üyeleri katıldığında herkesin aynı yetkilere sahip olması güvenlik ve operasyon açısından risk oluşturabilir. Hesap ve Ekip Yönetimi, kullanıcıları rolleriyle uyumlu erişim seviyeleriyle çalışma alanına dahil eder.",
    "Davetler, üyelik durumu ve hesap ayarları tek alanda izlendiği için aktif kullanıcılar kolayca kontrol edilir. Ekip veya sorumluluk değişikliklerinde erişimlerin zamanında güncellenmesi, şirket ve aday bilgilerinin yalnızca gerekli kişiler tarafından görülmesini sağlar.",
  ],
  capabilities: [
    {
      title: "Ekip davetleri",
      description:
        "Yeni ekip üyelerini iş e-postalarıyla çalışma alanına kontrollü biçimde davet eder.",
    },
    {
      title: "Rol bazlı erişim",
      description:
        "İlan, başvuru ve ayar yetkilerini kullanıcının sorumluluğuna göre sınırlar.",
    },
    {
      title: "Üyelik görünürlüğü",
      description:
        "Aktif, bekleyen veya kaldırılan ekip üyelerinin durumunu tek listede gösterir.",
    },
    {
      title: "Merkezi hesap ayarları",
      description:
        "Şirket ve hesap bilgilerinin yetkili kullanıcılar tarafından güncel tutulmasını sağlar.",
    },
  ],
  workflow: [
    {
      title: "Erişim ihtiyacını belirleyin",
      description:
        "Kullanıcının hangi görevleri yürüteceğini ve hangi bilgilere ihtiyaç duyduğunu netleştirin.",
    },
    {
      title: "Ekip üyesini davet edin",
      description:
        "Kurumsal e-posta adresini kullanın ve daveti göndermeden önce bilgileri kontrol edin.",
    },
    {
      title: "Uygun rolü atayın",
      description:
        "Yalnızca sorumlulukların gerektirdiği ilan, aday ve hesap izinlerini tanımlayın.",
    },
    {
      title: "Davet durumunu izleyin",
      description:
        "Bekleyen davetleri takip edin ve yanlış adrese gönderilen davetleri iptal edin.",
    },
    {
      title: "Erişimleri düzenli gözden geçirin",
      description:
        "Görevi değişen veya ekipten ayrılan kullanıcıların izinlerini zamanında güncelleyin.",
    },
  ],
  detailedSections: [
    {
      title: "En az yetki ilkesini uygulayın",
      paragraphs: [
        "Her kullanıcıya tüm çalışma alanını açmak yerine, görevini tamamlamak için gereken en düşük erişim seviyesini verin. İlan hazırlayan, aday değerlendiren ve hesap ayarlarını yöneten kişiler farklı izinlere ihtiyaç duyabilir.",
        "Geçici proje veya değerlendirme için eklenen kullanıcıların erişimlerini süre sonunda yeniden kontrol edin. Yönetici yetkilerini sınırlı sayıda güvenilir kullanıcıda tutmak yanlışlıkla yapılan kritik değişikliklerin önüne geçer.",
      ],
      points: [
        "Yönetici yetkisini yalnızca gerekli kullanıcılara verin.",
        "Geçici görevler için erişimleri iş tamamlandığında kaldırın.",
        "İzin değişikliklerini kullanıcının güncel sorumluluğuyla eşleştirin.",
      ],
    },
    {
      title: "Ekip değişikliklerini ve hesap güvenliğini yönetin",
      paragraphs: [
        "Ekipten ayrılan bir kullanıcının erişimini son çalışma gününü beklemeden planlayın ve uygun zamanda kaldırın. Açık değerlendirme görevlerini başka bir ekip üyesine devrederek başvuruların sahipsiz kalmasını önleyin.",
        "Davetleri yalnızca doğrulanmış kurumsal adreslere gönderin. Şüpheli giriş veya beklenmeyen ayar değişikliği fark edildiğinde aktif üyeleri ve erişim seviyelerini kontrol edin; gerekli durumlarda destek ekibiyle iletişime geçin.",
      ],
      points: [
        "Ayrılan kullanıcıların açık görevlerini devredin.",
        "Bekleyen ve kullanılmayan davetleri düzenli temizleyin.",
        "Ekip üyeliği listesini belirli aralıklarla denetleyin.",
      ],
    },
  ],
  bestPractices: [
    "Davetlerde kişisel adres yerine kurumsal e-posta kullanın.",
    "Yönetici ve standart kullanıcı rollerini açık biçimde ayırın.",
    "Ekip değişikliklerinde erişimleri aynı gün güncelleyin.",
    "Paylaşılan hesap kullanmayın; her ekip üyesi kendi hesabıyla çalışsın.",
    "Üyelik ve izin listesini düzenli güvenlik kontrolüne dahil edin.",
  ],
  outcomes: [
    { value: "Daha güvenli", label: "hesap erişimi" },
    { value: "Daha net", label: "ekip yetkileri" },
    { value: "Daha düzenli", label: "üyelik yönetimi" },
  ],
} as const satisfies HrProductDocumentation;
