export type HrProductDocumentation = {
  eyebrow: string;
  title: string;
  description: string;
  icon: string;
  showHero?: boolean;
  showClosingSections?: boolean;
  showHelpCenterCta?: boolean;
  ctaDescription?: string;
  introduction: readonly string[];
  capabilities: readonly {
    title: string;
    description: string;
  }[];
  workflow: readonly {
    title: string;
    description: string;
  }[];
  detailedSections: readonly {
    title: string;
    paragraphs: readonly string[];
    points: readonly string[];
  }[];
  bestPractices: readonly string[];
  outcomes: readonly {
    value: string;
    label: string;
  }[];
};

export const scoutDocumentation = {
  eyebrow: "HR Ürün Dokümantasyonu",
  title: "Scout ile doğru adayı daha erken keşfedin",
  description:
    "Scout; geniş aday havuzlarını rolün gerçek ihtiyaçlarına göre taramanızı, anlamlı filtrelerle daraltmanızı ve güçlü profilleri ekipçe değerlendirilecek kısa listelere dönüştürmenizi sağlar.",
  icon: "binoculars",
  showHero: false,
  showClosingSections: false,
  showHelpCenterCta: false,
  ctaDescription:
    "Doğru yetenekleri daha hızlı keşfettiğiniz, adayları adil değerlendirdiğiniz ve işe alım kararlarını güvenle verdiğiniz bir süreç oluşturun.",
  introduction: [
    "İyi bir işe alım süreci, ilan yayınlandıktan sonra gelen başvuruları beklemekle sınırlı değildir. Kritik ve rekabetin yüksek olduğu rollerde doğru yeteneğe proaktif biçimde ulaşmak gerekir. Scout, aday keşfi sürecini dağınık aramalardan çıkarıp ölçütleri açık, tekrarlanabilir ve ekip tarafından izlenebilir bir çalışma akışına dönüştürür.",
    "Pozisyonun kıdem seviyesi, yetkinlikleri, sektör deneyimi, çalışma modeli ve lokasyon beklentileri tek arama bağlamında bir araya gelir. Böylece ekip yalnızca anahtar kelime eşleşmesine değil, adayın rol için oluşturduğu bütünsel değere odaklanır. Filtrelerin ve değerlendirme sinyallerinin görünür olması, neden belirli profillerin öne çıktığını açıklamayı da kolaylaştırır.",
    "Scout alanı ilk keşiften kısa listeye kadar olan adımları aynı zeminde tutar. İşe alım uzmanları araştırmayı yürütürken ilgili yönetici ölçütleri gözden geçirebilir, ekip üyeleri adaylara not bırakabilir ve aynı kişinin farklı listelerde tekrar değerlendirilmesi önlenebilir.",
  ],
  capabilities: [
    {
      title: "Hedefli aday keşfi",
      description:
        "Rol, kıdem, lokasyon, çalışma modeli ve yetkinlik ölçütlerini bir arada kullanarak geniş havuzu yönetilebilir bir aday grubuna indirir.",
    },
    {
      title: "Açıklanabilir eşleşme",
      description:
        "Adayın hangi deneyim ve beceriler nedeniyle öne çıktığını görünür kılar; yalnızca tek bir puana dayalı karar verilmesini engeller.",
    },
    {
      title: "Paylaşılan kısa listeler",
      description:
        "İşe alım ekibi ve ilgili yöneticiler aynı aday grubu üzerinde not, öncelik ve değerlendirme bağlamını paylaşır.",
    },
    {
      title: "Tekrarlanabilir aramalar",
      description:
        "Sık kullanılan arama ölçütlerini aynı rol ailesinde yeniden kullanarak yeni ihtiyaçlarda keşif süresini kısaltır.",
    },
  ],
  workflow: [
    {
      title: "İhtiyacı tanımlayın",
      description:
        "Pozisyonun vazgeçilmez ölçütlerini, geliştirilebilir yetkinliklerini ve ekip bağlamını netleştirin.",
    },
    {
      title: "Arama kapsamını oluşturun",
      description:
        "Yetkinlik, deneyim, lokasyon ve çalışma modeli filtrelerini dengeli biçimde birleştirin.",
    },
    {
      title: "Profilleri karşılaştırın",
      description:
        "Eşleşme nedenlerini, deneyim bütünlüğünü ve role aktarılabilir becerileri yan yana inceleyin.",
    },
    {
      title: "Kısa listeyi paylaşın",
      description:
        "Güçlü adayları ilgili listeye ekleyin ve değerlendirme gerekçenizi ekip notlarıyla kaydedin.",
    },
    {
      title: "Aday yönetimine aktarın",
      description:
        "İletişime geçilecek adayları sahiplik ve sonraki adım bilgisiyle birlikte aktif sürece taşıyın.",
    },
  ],
  detailedSections: [
    {
      title: "Aramayı rolün gerçek ihtiyacıyla başlatın",
      paragraphs: [
        "Scout’tan en yüksek verimi almak için aramaya uzun bir beceri listesiyle değil, rolün başarısını belirleyen birkaç temel ölçütle başlayın. Bir yetkinliğin zorunlu mu, tercih sebebi mi, yoksa iş başında geliştirilebilir mi olduğunu ayırmak arama alanını gereksiz yere daraltmanızı önler. Özellikle benzer unvanların farklı şirketlerde farklı sorumluluklar taşıdığı durumlarda, unvan yerine yapılan işin kapsamını tarif etmek daha isabetli sonuç verir.",
        "İlgili yöneticiyle yapılan pozisyon açılış görüşmesindeki kararları arama ölçütlerine yansıtın. Ekip büyüklüğü, ürünün olgunluk seviyesi, paydaş yapısı ve çalışma modeli gibi bağlamsal ayrıntılar aynı teknik beceriye sahip iki aday arasında önemli fark yaratabilir. Bu bilgiler arama notlarında tutulduğunda sonraki değerlendirmelerin ortak bir referans noktası olur.",
      ],
      points: [
        "En fazla üç ila beş vazgeçilmez ölçüt belirleyin.",
        "Unvanı tek başına eleme kriteri olarak kullanmayın.",
        "Aktarılabilir beceriler için yakın rol ve sektörleri aramaya dahil edin.",
      ],
    },
    {
      title: "Kısa listeleri karar kaydına dönüştürün",
      paragraphs: [
        "Kısa liste yalnızca daha sonra bakılacak adayların tutulduğu bir klasör değildir. Her aday için neden listeye eklendiğini, hangi konunun doğrulanması gerektiğini ve bir sonraki adımın ne olduğunu belirten kısa bir not bırakın. Bu yaklaşım, liste farklı bir ekip üyesine devredildiğinde bağlamın kaybolmasını önler.",
        "Aynı rol için çok sayıda aday biriktiğinde öncelik seviyelerini kullanın ve benzer profilleri ortak ölçütlerle karşılaştırın. Bir adayın güçlü yönü başka bir adayın eksikliği üzerinden değil, pozisyonun başarı tanımı üzerinden ifade edilmelidir. Böylece karar dili daha tutarlı, savunulabilir ve aday deneyimine daha saygılı hale gelir.",
      ],
      points: [
        "Her kısa liste kaydına tek cümlelik seçim gerekçesi ekleyin.",
        "Doğrulanması gereken konuları görüşme sorusuna dönüştürün.",
        "Sahipsiz aday bırakmamak için sorumlu kişiyi ve hedef tarihi belirtin.",
      ],
    },
    {
      title: "Kapsayıcı ve güncel bir keşif pratiği kurun",
      paragraphs: [
        "Filtreler operasyonu hızlandırırken farkında olunmayan önyargıları da yeniden üretebilir. Okul, mevcut unvan veya belirli bir sektör gibi dolaylı göstergeleri gereğinden fazla ağırlıklandırmak yerine iş çıktısıyla doğrudan ilişkili yetkinliklere odaklanın. Arama sonuçları beklenenden dar kaldığında filtreleri tek tek gevşeterek hangi ölçütün aday çeşitliliğini etkilediğini gözlemleyin.",
        "Kaydedilmiş aramaları düzenli aralıklarla gözden geçirmek de önemlidir. Rolün kapsamı, ücret bandı veya çalışma modeli değiştiğinde eski arama ölçütleri güncelliğini yitirebilir. Aktif olmayan aramaları arşivlemek ve başarılı işe alımlarda kullanılan ölçütleri belgelemek, Scout’un zaman içinde kurumsal bir yetenek keşfi hafızasına dönüşmesini sağlar.",
      ],
      points: [
        "Arama sonuçlarının çeşitliliğini düzenli olarak gözden geçirin.",
        "Dolaylı göstergeler yerine işle ilişkili ölçütleri kullanın.",
        "Kaydedilmiş aramaları rol değişikliklerinde yeniden doğrulayın.",
      ],
    },
  ],
  bestPractices: [
    "Aramaya geniş başlayıp her filtre eklendiğinde sonuç kalitesinin nasıl değiştiğini kontrol edin.",
    "Aynı adayla birden fazla ekip üyesinin iletişime geçmesini önlemek için sahiplik alanını güncel tutun.",
    "Kısa listeleri pozisyon veya yetenek topluluğu amacıyla adlandırın; kişisel ve belirsiz liste adlarından kaçının.",
    "Eşleşme puanını kararın kendisi değil, profili incelemeyi kolaylaştıran bir sinyal olarak kullanın.",
    "Başarılı ve başarısız aramaların ölçütlerini işe alım kapanışında ekipçe değerlendirin.",
  ],
  outcomes: [
    { value: "Daha hızlı", label: "aday keşfi" },
    { value: "Daha net", label: "aday listesi" },
    { value: "Daha geniş", label: "yetenek listesi" },
  ],
} as const satisfies HrProductDocumentation;

export const candidateManagementDocumentation = {
  eyebrow: "HR Ürün Dokümantasyonu",
  title: "Aday Yönetimi ile sürecin tamamını tek yerde yönetin",
  description:
    "Aday Yönetimi; başvurudan teklife kadar her adımı, sorumluyu, değerlendirme kaydını ve iletişim geçmişini görünür kılar. Ekipler kimin nerede beklediğini bilir ve hiçbir aday bağlam eksikliği yüzünden süreçten düşmez.",
  icon: "groups",
  showHero: false,
  showClosingSections: false,
  introduction: [
    "İşe alım büyüdükçe aday bilgileri e-posta, tablo, mesajlaşma uygulaması ve kişisel notlar arasında dağılmaya başlar. Bu da geciken dönüşlere, yinelenen görüşmelere ve tutarsız değerlendirmelere yol açar. Aday Yönetimi, her aday için tek ve güncel bir kayıt oluşturarak operasyonun ortak çalışma alanı haline gelir.",
    "Aday kartında hedef pozisyon, süreç aşaması, sorumlu kişi, son aktivite, temel yetkinlikler ve değerlendirme özeti birlikte görülür. Ekip bir sonraki adımı anlamak için farklı kaynakları kontrol etmek zorunda kalmaz. Aşama değişiklikleri ve notlar zaman çizelgesi üzerinde kaldığı için kararın nasıl oluştuğu daha sonra da izlenebilir.",
    "Bu görünürlük yalnızca HR ekibine hız kazandırmaz; ilgili yöneticilerin doğru anda sürece katılmasını, adaylara zamanında bilgi verilmesini ve işe alım kapasitesinin gerçek verilere göre planlanmasını sağlar.",
  ],
  capabilities: [
    {
      title: "Birleşik aday profili",
      description:
        "Başvuru bilgisi, özgeçmiş, yetkinlikler, notlar ve görüşme sonuçlarını tek aday kaydında bir araya getirir.",
    },
    {
      title: "Görünür süreç aşamaları",
      description:
        "Her adayın mevcut konumunu, önceki adımlarını ve sıradaki eylemini tüm ekip için anlaşılır hale getirir.",
    },
    {
      title: "Net sahiplik",
      description:
        "Her kayıt için sorumlu kişiyi ve hedef tarihi belirleyerek bekleyen işlerin sahipsiz kalmasını önler.",
    },
    {
      title: "İzlenebilir karar geçmişi",
      description:
        "Aşama değişikliklerini ve değerlendirme gerekçelerini koruyarak denetlenebilir bir işe alım kaydı oluşturur.",
    },
  ],
  workflow: [
    {
      title: "Adayı havuza alın",
      description:
        "Başvuru, Scout veya yönlendirme kaynağından gelen profili doğru pozisyonla ilişkilendirin.",
    },
    {
      title: "İlk incelemeyi tamamlayın",
      description:
        "Temel ölçütleri doğrulayın, değerlendirme notunu ekleyin ve uygun sonraki aşamayı seçin.",
    },
    {
      title: "Sorumluyu atayın",
      description:
        "Bir sonraki eylemi gerçekleştirecek ekip üyesini ve hedef tamamlanma tarihini belirleyin.",
    },
    {
      title: "Değerlendirmeleri birleştirin",
      description:
        "Mülakat, teknik çalışma ve yönetici görüşmesi sonuçlarını aday profilinde toplayın.",
    },
    {
      title: "Süreci sonuçlandırın",
      description:
        "Teklif, işe alım veya olumsuz sonuç kararını gerekçesi ve aday iletişimiyle birlikte kaydedin.",
    },
  ],
  detailedSections: [
    {
      title: "Aşamaları gerçek iş akışınıza göre tanımlayın",
      paragraphs: [
        "Aday aşamaları, raporda güzel görünen etiketler değil, ekip için açık operasyon kuralları olmalıdır. Her aşamaya giriş için hangi koşulların tamamlanması gerektiğini ve çıkışta hangi kararın verileceğini tanımlayın. Örneğin “Teknik Değerlendirme” aşamasına geçen aday için değerlendirici, teslim tarihi ve kullanılacak puanlama ölçütü önceden belli olmalıdır.",
        "Çok fazla aşama yönetimi zorlaştırır; çok az aşama ise darboğazları görünmez kılar. Benzer kararları tek aşamada birleştirin, fakat farklı sorumluların veya bekleme sürelerinin olduğu adımları ayrı tutun. Süreç değiştiğinde mevcut adayları nasıl etkileyeceğini gözden geçirerek aşama yapısını güncelleyin.",
      ],
      points: [
        "Her aşama için giriş koşulu, sorumlu ve hedef süre belirleyin.",
        "Aynı amacı taşıyan tekrar eden aşamaları sadeleştirin.",
        "Bekleme ve geri bildirim adımlarını görünür tutun.",
      ],
    },
    {
      title: "Aday kaydını ortak bağlam olarak kullanın",
      paragraphs: [
        "Notlar, yalnızca notu yazan kişinin anlayacağı kısa ifadelerden oluşmamalıdır. Gözlem ile yorumu ayırın; role ilişkin kanıtı, endişeyi ve önerilen sonraki adımı açıkça yazın. Hassas veya işle ilgisi olmayan kişisel bilgileri aday kaydına eklemeyin. Bu yaklaşım hem ekip içi devri kolaylaştırır hem de daha adil kararlar alınmasını destekler.",
        "Bir aday birden fazla pozisyon için değerlendiriliyorsa her rolün bağlamını ayrı tutun. Adayın genel profili ortak kalabilir, ancak uygunluk değerlendirmesi pozisyona özel olmalıdır. Böylece önceki bir sürecin sonucu yeni bir fırsatı yanlış biçimde etkilemez.",
      ],
      points: [
        "Notlarda somut gözlem, rol etkisi ve sonraki adımı belirtin.",
        "Pozisyona özel değerlendirmeyi genel aday profilinden ayırın.",
        "İletişim tercihlerini ve son temas tarihini güncel tutun.",
      ],
    },
    {
      title: "Bekleyen işleri ve aday iletişimini yönetin",
      paragraphs: [
        "Aday deneyimindeki en büyük sorunlardan biri belirsizliktir. Süreç içinde karar henüz verilmemiş olsa bile adayın ne zaman bilgilendirileceği belirlenmelidir. Son aktivite ve hedef tarih alanlarını kullanarak uzun süredir güncellenmeyen kayıtları düzenli biçimde gözden geçirin.",
        "Haftalık operasyon toplantılarında yalnızca toplam aday sayısını değil, aşama bazında bekleme süresini ve sorumlusu olmayan kayıtları inceleyin. Bu görünüm ekip kapasitesi, değerlendirme yükü ve ilgili yönetici desteği hakkında erken sinyal verir. Sorunlar büyümeden sahiplik veya takvim değişikliği yapılabilir.",
      ],
      points: [
        "Her aktif aday için sıradaki eylem ve tarih bulundurun.",
        "Belirlenen süreyi aşan kayıtları haftalık olarak ele alın.",
        "Olumsuz sonuçlarda bile zamanında ve açık iletişim kurun.",
      ],
    },
  ],
  bestPractices: [
    "Aday aşamasını yalnızca gerçek operasyon adımı tamamlandığında güncelleyin.",
    "Toplu değişikliklerden önce filtre kapsamını ve etkilenecek aday sayısını kontrol edin.",
    "Değerlendirme notlarını role bağlı kanıtlarla yazın; belirsiz kişilik yorumlarından kaçının.",
    "Mükerrer aday kayıtlarını birleştirirken iletişim ve başvuru geçmişini koruyun.",
    "Kapalı pozisyonlardaki güçlü adayları açık rıza ve saklama politikalarına uygun yetenek topluluklarına aktarın.",
  ],
  outcomes: [
    { value: "Tek kayıt", label: "tüm aday bağlamı" },
    { value: "Net sahiplik", label: "her sonraki adım" },
    { value: "Kesintisiz", label: "aday iletişimi" },
  ],
} as const satisfies HrProductDocumentation;

export const interviewsDocumentation = {
  eyebrow: "HR Ürün Dokümantasyonu",
  title: "Mülakatları planlı, tutarlı ve karar odaklı yürütün",
  description:
    "Mülakatlar bölümü; takvim planlamasını, görüşmeci hazırlığını, yapılandırılmış değerlendirmeyi ve geri bildirim takibini tek akışta birleştirir.",
  icon: "calendar_month",
  showHero: false,
  showClosingSections: false,
  introduction: [
    "Mülakat, adayla geçirilen bir görüşmeden çok daha fazlasıdır: rol beklentilerinin kanıta dayalı biçimde değerlendirildiği ve adayın da ekibi tanıdığı çift yönlü bir karar anıdır. Plansız yürütülen görüşmeler aynı soruların tekrarlanmasına, kritik yetkinliklerin hiç ele alınmamasına ve kişisel izlenimlerin ölçütlerin önüne geçmesine neden olur.",
    "Mülakatlar alanı her oturum için amacı, katılımcıları, değerlendirilecek yetkinlikleri, takvim bilgisini ve geri bildirim durumunu görünür tutar. Görüşmeciler aday profilini ve kendi sorumluluklarını önceden görür; görüşme sonrasında puan ve notlarını ortak bir formatta iletir.",
    "Sonuçta ekip toplantıları hatırlamaya dayalı tartışmalar yerine, farklı görüşmecilerin topladığı kanıtların birlikte değerlendirildiği daha kısa ve daha güvenilir karar oturumlarına dönüşür.",
  ],
  capabilities: [
    {
      title: "Merkezi görüşme takvimi",
      description:
        "Aday, görüşmeci, saat, süre ve toplantı konumunu tek görünümde birleştirerek planlama çakışmalarını azaltır.",
    },
    {
      title: "Panel hazırlığı",
      description:
        "Her görüşmecinin değerlendireceği alanı ve soracağı soru setini görüşmeden önce açık hale getirir.",
    },
    {
      title: "Yapılandırılmış geri bildirim",
      description:
        "Notları ortak yetkinlikler ve puanlama ölçütleri etrafında toplayarak adayların tutarlı karşılaştırılmasını sağlar.",
    },
    {
      title: "Geciken not takibi",
      description:
        "Tamamlanan görüşmelerde beklenen geri bildirimleri görünür kılar ve karar süresinin uzamasını önler.",
    },
  ],
  workflow: [
    {
      title: "Görüşmenin amacını seçin",
      description:
        "İK, teknik, vaka, portfolyo veya yönetici görüşmesinin ölçmek istediği çıktıyı tanımlayın.",
    },
    {
      title: "Paneli ve zamanı planlayın",
      description:
        "Gerekli görüşmecileri ekleyin, süreyi belirleyin ve aday için açık toplantı bilgisini oluşturun.",
    },
    {
      title: "Hazırlık bağlamını paylaşın",
      description:
        "Rol ölçütlerini, aday özetini ve görüşmeci sorumluluklarını oturumdan önce erişilebilir kılın.",
    },
    {
      title: "Bağımsız geri bildirim toplayın",
      description:
        "Her görüşmecinin diğer yorumlardan etkilenmeden kanıt, puan ve önerisini kaydetmesini sağlayın.",
    },
    {
      title: "Ortak kararı sonuçlandırın",
      description:
        "Toplanan kanıtları rol ölçütlerine göre ele alın, kararı ve sonraki adımı aday profiline işleyin.",
    },
  ],
  detailedSections: [
    {
      title: "Her görüşmeye açık bir değerlendirme amacı verin",
      paragraphs: [
        "Bir mülakatın başarılı olması için hangi soruya cevap vereceği önceden bilinmelidir. İlk görüşme motivasyon ve temel uygunluğu, teknik oturum belirli problem çözme becerilerini, yönetici görüşmesi ise rol kapsamı ve ekip çalışma biçimini değerlendirebilir. Aynı yetkinliği farklı oturumlarda tekrar tekrar ölçmek yerine panel üyeleri arasında kapsam paylaşımı yapın.",
        "Soru setini oluştururken her sorunun hangi yetkinlikle ilişkili olduğunu ve güçlü bir yanıtta hangi davranışsal kanıtların beklendiğini belirtin. Tüm adaylara aynı temel soruların yöneltilmesi karşılaştırılabilirliği artırır; takip soruları ise adayın kendi deneyiminin derinliğini anlamak için kullanılabilir.",
      ],
      points: [
        "Her oturum için iki veya üç temel değerlendirme alanı seçin.",
        "Soruları rolün gerçek iş senaryolarıyla ilişkilendirin.",
        "Panel üyelerinin kapsamını görüşmeden önce paylaşın.",
      ],
    },
    {
      title: "Geri bildirimi hızlı ve bağımsız toplayın",
      paragraphs: [
        "Görüşme notları mümkünse oturumun hemen ardından girilmelidir. Zaman geçtikçe somut örnekler unutulur ve genel izlenim daha baskın hale gelir. Görüşmecilerin değerlendirmelerini karar toplantısından veya diğer üyelerin puanlarını görmeden önce tamamlaması, grup etkisini azaltır.",
        "İyi bir geri bildirim; adayın verdiği örneği, bunun ölçülen yetkinlik açısından ne gösterdiğini ve puanın gerekçesini içerir. “İyi iletişim kurdu” gibi genel ifadeler yerine hangi soruda nasıl yapılandırılmış bir anlatım kullandığını belirtmek kararın niteliğini artırır.",
      ],
      points: [
        "Notları aynı gün içinde tamamlayın.",
        "Puanın yanında kısa ve somut bir kanıt yazın.",
        "Karar önerisiyle değerlendirme kanıtını ayrı alanlarda tutun.",
      ],
    },
    {
      title: "Aday deneyimini takvim kadar önemseyin",
      paragraphs: [
        "Adaya gönderilen davet; tarih, saat, saat dilimi, süre, görüşme biçimi, katılımcılar ve hazırlanması gereken konuları açıkça içermelidir. Son dakika değişikliklerinde yalnızca takvimi güncellemek yeterli değildir; değişikliğin nedeni ve yeni beklenti adayla doğrudan paylaşılmalıdır.",
        "Uzun panellerde mola ihtiyacını, erişilebilirlik taleplerini ve teknik bağlantı kontrollerini planlamaya dahil edin. Görüşmenin başında akışı anlatmak, sonunda adayın soruları için yeterli süre bırakmak ve bir sonraki iletişim tarihini paylaşmak daha güvenli bir deneyim oluşturur.",
      ],
      points: [
        "Saat dilimini ve toplantı bağlantısını davette açıkça gösterin.",
        "Hazırlık gerektiren çalışma veya portfolyo beklentisini önceden iletin.",
        "Görüşme sonunda sonraki adımı ve hedef dönüş tarihini paylaşın.",
      ],
    },
  ],
  bestPractices: [
    "Görüşmeci sayısını her kişinin belirli bir değerlendirme sorumluluğu taşıdığı ölçüde sınırlayın.",
    "Aynı rol için temel soru ve puanlama ölçeğini adaylar arasında tutarlı uygulayın.",
    "Geri bildirim tamamlanmadan karar toplantısını başlatmamaya yönelik ekip kuralı oluşturun.",
    "Geciken notları günlük görünümden takip edin ve yedek değerlendirici planını önceden belirleyin.",
    "Adayın paylaştığı özel bilgileri yalnızca işle ilgili ve gerekli olduğu ölçüde kaydedin.",
  ],
  outcomes: [
    { value: "Hazır panel", label: "daha odaklı görüşme" },
    { value: "Ortak ölçüt", label: "tutarlı değerlendirme" },
    { value: "Hızlı not", label: "kısa karar süresi" },
  ],
} as const satisfies HrProductDocumentation;

export const reportingDocumentation = {
  eyebrow: "HR Ürün Dokümantasyonu",
  title: "Raporlama ile işe alım verisini eyleme dönüştürün",
  description:
    "Raporlama; işe alım hunisini, bekleme sürelerini, kaynak kalitesini ve departman performansını ortak tanımlarla görünür kılar. Ekipler yalnızca ne olduğunu değil, nerede iyileştirme yapılacağını da anlayabilir.",
  icon: "monitoring",
  introduction: [
    "İşe alım verisi ancak doğru soruya cevap verdiğinde değerlidir. Toplam başvuru sayısı tek başına sürecin sağlığını göstermez; adayların hangi aşamada beklediği, hangi kaynağın nitelikli aday ürettiği ve tekliflerin neden kabul edilmediği gibi bağlamsal ölçümler gerekir. Raporlama alanı bu sinyalleri tek ve tutarlı bir görünümde bir araya getirir.",
    "Huni dönüşümleri adayların süreçte nasıl ilerlediğini, aşama süreleri operasyonun nerede yavaşladığını, departman karşılaştırmaları ise kapasite ve beklenti farklarını gösterir. Dönem ve kapsam filtreleri sayesinde ekipler şirket genelindeki eğilimi incelerken belirli bir rol ailesine veya işe alım sahibine kadar ayrıntıya inebilir.",
    "Amaç daha fazla grafik üretmek değil, karar döngüsünü kısaltmaktır. Her rapor görünümü bir operasyon sorusuyla eşleştirildiğinde veri; planlama, süreç tasarımı ve paydaş iletişimi için ortak bir dile dönüşür.",
  ],
  capabilities: [
    {
      title: "İşe alım hunisi",
      description:
        "Başvurudan teklife kadar aday sayısını ve aşamalar arasındaki dönüşümü göstererek kayıp noktalarını görünür kılar.",
    },
    {
      title: "Süre ve darboğaz analizi",
      description:
        "Aşama bazında bekleme sürelerini izleyerek gecikmenin planlama, değerlendirme veya onay kaynaklı olup olmadığını anlamaya yardım eder.",
    },
    {
      title: "Departman karşılaştırması",
      description:
        "Açık rol, aday yükü, işe alım süresi ve teklif başarısını aynı tanımlarla ekipler arasında karşılaştırır.",
    },
    {
      title: "Dönemsel eğilimler",
      description:
        "Aylık ve dönemsel hareketleri göstererek kapasite ihtiyacını ve süreç değişikliklerinin etkisini izlemeyi sağlar.",
    },
  ],
  workflow: [
    {
      title: "Karar sorusunu belirleyin",
      description:
        "Raporu açmadan önce hangi operasyon veya planlama kararını destekleyeceğinizi netleştirin.",
    },
    {
      title: "Kapsamı doğrulayın",
      description:
        "Dönem, departman, pozisyon, kaynak ve durum filtrelerinin karşılaştırma için doğru olduğundan emin olun.",
    },
    {
      title: "Eğilimi ve sapmayı inceleyin",
      description:
        "Tek bir değerden çok, önceki dönemle değişime ve ekipler arasındaki anlamlı farklara odaklanın.",
    },
    {
      title: "Kök nedeni ayrıştırın",
      description:
        "Darboğazı rol, aşama, sorumlu veya kaynak kırılımında inceleyerek müdahale edilebilir nedeni bulun.",
    },
    {
      title: "Aksiyonu takip edin",
      description:
        "Alınan karar için sorumlu, hedef tarih ve izlenecek başarı ölçütünü belirleyip sonraki dönemde sonucu karşılaştırın.",
    },
  ],
  detailedSections: [
    {
      title: "Ölçümleri ortak tanımlarla okuyun",
      paragraphs: [
        "Bir metriğin adı aynı olsa bile ekipler farklı başlangıç ve bitiş noktaları kullanıyorsa karşılaştırma yanıltıcı olur. Örneğin işe alım süresinin talep onayından mı, ilan yayınından mı, yoksa ilk başvurudan mı başladığını net biçimde tanımlayın. Teklif kabul tarihi ile işe başlama tarihini de birbirinden ayırın.",
        "Raporlama toplantılarında önce kapsam ve tanımı teyit etmek, rakamlar üzerine gereksiz tartışmayı azaltır. Aktif, dondurulmuş ve iptal edilmiş pozisyonların hesaba nasıl katıldığını; yeniden açılan rollerin hangi döneme ait sayıldığını ekip standardı haline getirin.",
      ],
      points: [
        "Her temel metrik için başlangıç, bitiş ve hariç tutma kuralı belirleyin.",
        "Karşılaştırılan dönemlerde aynı filtreleri kullanın.",
        "Az sayıda aday içeren gruplarda oranları bağlamıyla yorumlayın.",
      ],
    },
    {
      title: "Huniyi darboğazları bulmak için kullanın",
      paragraphs: [
        "Huni dönüşümü yalnızca aday kalitesini değil, rol tanımının doğruluğunu ve değerlendirme adımlarının etkisini de yansıtır. İlk incelemede çok büyük kayıp varsa ilan hedeflemesi veya zorunlu ölçütler yeniden ele alınabilir. Son aşamada kayıp yükseliyorsa ücret, karar hızı ya da aday beklentisi gibi farklı nedenler incelenmelidir.",
        "Dönüşüm oranını aşama süresiyle birlikte okuyun. Yüksek dönüşüm olumlu görünse de adaylar aynı aşamada uzun süre bekliyorsa deneyim ve teklif kabul riski oluşabilir. Benzer rolleri ve dönemleri karşılaştırmak, tek seferlik sapmalarla kalıcı süreç sorunlarını ayırmayı kolaylaştırır.",
      ],
      points: [
        "Düşük dönüşüm görülen aşamayı rol ve kaynak kırılımında inceleyin.",
        "Dönüşüm oranını medyan bekleme süresiyle birlikte değerlendirin.",
        "Süreç değişikliklerinin öncesi ve sonrasını aynı kapsamla karşılaştırın.",
      ],
    },
    {
      title: "Raporu düzenli aksiyon döngüsüne bağlayın",
      paragraphs: [
        "Raporlar toplantı sonunda kapanan sunumlar haline gelmemelidir. Her önemli bulgu için tek bir sahip, hedef tarih ve beklenen etki belirleyin. Örneğin teknik geri bildirim süresini kısaltma kararı alındıysa izlenecek ölçüt, hangi rol grubunda uygulanacağı ve ne zaman yeniden değerlendirileceği açık olmalıdır.",
        "Üst yönetim özetleriyle operasyon ekiplerinin ihtiyaç duyduğu ayrıntı seviyesi farklıdır. Yönetim görünümünde eğilim, risk ve kapasite kararına odaklanırken operasyon görünümünde pozisyon, aşama ve sorumlu kırılımını koruyun. Böylece aynı veri kaynağı farklı kitleler için anlaşılır ama tutarlı bir hikâye üretir.",
      ],
      points: [
        "Her rapor toplantısını en fazla üç öncelikli aksiyonla kapatın.",
        "Aksiyon sahibini ve başarı ölçütünü rapor notuna ekleyin.",
        "Sonraki toplantıya önceki aksiyonların etkisini kontrol ederek başlayın.",
      ],
    },
  ],
  bestPractices: [
    "Oranları mutlaka aday veya pozisyon adediyle birlikte gösterin.",
    "Ortalama değerin uç sonuçlardan etkilenebileceği durumlarda medyan süreyi de inceleyin.",
    "Departman karşılaştırmalarında rol karmaşıklığı ve işe alım hacmi farkını bağlama ekleyin.",
    "Kişisel performans yorumu yapmadan önce iş yükü, görev dağılımı ve süreç bağımlılıklarını değerlendirin.",
    "Rapor erişimlerini yalnızca karar için gerekli aday ve ekip bilgileriyle sınırlandırın.",
  ],
  outcomes: [
    { value: "Tek tanım", label: "güvenilir metrikler" },
    { value: "Erken sinyal", label: "görünür darboğazlar" },
    { value: "Ölçülen etki", label: "takip edilen aksiyonlar" },
  ],
} as const satisfies HrProductDocumentation;
