import { ROUTES } from "@/shared/config/routes";

export const landingPage = {
  productName: "Vettingo",
  navItems: [
    { label: "İşverenler", href: ROUTES.employer },
    { label: "Adaylar", href: ROUTES.candidate },
    { label: "Hakkımızda", href: ROUTES.home },
  ],
  hero: {
    title: "Sıradaki işini bulma vakti geldi",
    description:
      "Yetkinliklerine ve hedeflerine gerçekten uyan fırsatları yapay zeka destekli içgörülerle keşfet. Kariyer yolunu netleştir, güçlü yönlerini öne çıkar ve sana uygun şirketlerle daha hızlı buluş.",
    primaryCta: "Başla",
    people: [
      {
        profession: "Yazılım Geliştirici",
        imageUrl:
          "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=960&q=95",
      },
      {
        profession: "Doktor",
        imageUrl:
          "https://images.unsplash.com/photo-1645066928295-2506defde470?auto=format&fit=crop&w=960&q=95",
      },
      {
        profession: "Mimar",
        imageUrl:
          "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=960&q=95",
      },
    ],
  },
  talentHighlights: [
    {
      title: "Doğru yetenekle gerçek fark yaratın",
      description:
        "Vettingo, rolün ihtiyaçlarını adayların gerçek yetkinlikleriyle buluşturur. Ekipler daha az manuel eleme yapar, güçlü adaylara daha hızlı odaklanır ve her kararı ortak bir değerlendirme zemini üzerinde verir.",
      imageUrl:
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=90",
      imageAlt: "Birlikte çalışan profesyonel ekip",
    },
    {
      title: "En iyi adayları ekibinize daha hızlı katın",
      description:
        "Yapay zeka destekli kısa liste, karşılaştırma ve ekip notları tek akışta birleşir. Böylece aday deneyimi kesintiye uğramadan ilerler, işe alım süreci hızlanır ve yeni ekip arkadaşları güvenle göreve başlar.",
      imageUrl:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=90",
      imageAlt: "Toplantıda fikir paylaşan ekip üyeleri",
    },
  ],  trustedCompanies: [
    { name: "Google", logoUrl: "https://cdn.simpleicons.org/google" },
    { name: "Apple", logoUrl: "https://cdn.simpleicons.org/apple" },
    { name: "Netflix", logoUrl: "https://cdn.simpleicons.org/netflix" },
    { name: "Spotify", logoUrl: "https://cdn.simpleicons.org/spotify" },
    { name: "Airbnb", logoUrl: "https://cdn.simpleicons.org/airbnb" },
    { name: "Shopify", logoUrl: "https://cdn.simpleicons.org/shopify" },
    { name: "GitHub", logoUrl: "https://cdn.simpleicons.org/github" },
    { name: "PayPal", logoUrl: "https://cdn.simpleicons.org/paypal" },
    { name: "Stripe", logoUrl: "https://cdn.simpleicons.org/stripe" },
    { name: "Uber", logoUrl: "https://cdn.simpleicons.org/uber" },
    { name: "Tesla", logoUrl: "https://cdn.simpleicons.org/tesla" },
    { name: "NVIDIA", logoUrl: "https://cdn.simpleicons.org/nvidia" },
    { name: "Intel", logoUrl: "https://cdn.simpleicons.org/intel" },
    { name: "Meta", logoUrl: "https://cdn.simpleicons.org/meta" },
  ],
  features: [
    {
      title: "Yönetici Paneli",
      description:
        "İşe alım hattınıza gerçek zamanlı görünürlük sağlayan yoğun ve net bir komuta merkezi. Temel metrikleri, darboğazları ve ekip performansını tek ekranda izleyin.",
    },
    {
      title: "Akıllı CV Analizi",
      description:
        "Yetenek, deneyim ve ölçülebilir başarıları yapılandırılmış şekilde çıkarır. Format kaynaklı önyargıyı azaltarak aday verisini sadeleştirir.",
    },
    {
      title: "Yetenek Karşılaştırma",
      description:
        "Adayları sektör standartlarına ve şirketinizin en iyi profillerine göre değerlendirin. Nesnel ve yetkinlik bazlı işe alım kararları alın.",
    },
  ],
  valueCards: [
    {
      value: 40,
      suffix: "%",
      title: "İşe Alım Süresinde Azalma",
      description:
        "Otomatik ön eleme ve aday karşılaştırma akışlarıyla ekiplerin karar süresini kısaltır.",
    },
    {
      value: 92,
      suffix: "%",
      title: "Aday Uyum Skoru",
      description:
        "Rol gereksinimleriyle aday yetkinliklerini daha tutarlı ve ölçülebilir şekilde eşleştirir.",
    },
    {
      value: 3,
      suffix: "x",
      title: "Daha Kısa Liste",
      description:
        "Yüksek potansiyelli adayları öne çıkararak değerlendirme yoğunluğunu azaltır.",
    },
    {
      value: 24,
      suffix: "/7",
      title: "Sürekli Analiz",
      description:
        "Başvuruları anlık olarak işler, ekiplerin güncel aday görünümünü korumasına yardımcı olur.",
    },
  ],
  testimonials: [
    { name: "Ahmet E.", role: "İK Müdürü", imageUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=160&q=90", comment: "Teknik roller için gelen yoğun başvuruları eskiden ekipçe günlerce inceliyorduk. Vettingo ile kriterleri baştan tanımlayıp güçlü adayları aynı gün içinde ayırabiliyor, mülakat notlarını tek ekranda karşılaştırabiliyoruz." },
    { name: "Selin K.", role: "İşe Alım Uzmanı", imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=160&q=90", comment: "Farklı yöneticilerin adayları farklı ölçütlerle değerlendirmesi karar sürecini uzatıyordu. Ortak skor kartları sayesinde herkes aynı veriye bakıyor ve kısa liste toplantılarımız çok daha odaklı ilerliyor." },
    { name: "Mert A.", role: "Kurucu Ortak", imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&q=90", comment: "Büyüyen ekibimizde ayrı bir işe alım operasyonu kurmadan düzenli bir süreç oluşturduk. Aday geçmişini, ekip görüşlerini ve rol uyumunu kaybetmeden takip edebilmek bize ciddi zaman kazandırdı." },
    { name: "Elif D.", role: "İK Uzmanı", imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&q=90", comment: "Adaylara dönüş sürelerimiz belirgin şekilde kısaldı. Hangi aşamada bekleme olduğunu anında gördüğümüz için yöneticileri zamanında bilgilendiriyor ve aday deneyimini daha tutarlı yönetiyoruz." },
    { name: "Burak T.", role: "Baş Mühendis", imageUrl: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&w=160&q=90", comment: "CV biçimine takılmadan deneyim ve yetkinlikleri karşılaştırabilmek teknik değerlendirmeyi kolaylaştırdı. Benzer profiller arasında neden bir adayı öne aldığımızı ekip içinde açıkça görebiliyoruz." },
    { name: "Zeynep Y.", role: "Operasyon Direktörü", imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=160&q=90", comment: "Birden fazla pozisyonu aynı anda yönetirken bilgi dağınıklığı yaşıyorduk. Değerlendirme adımları görünür hale gelince haftalık işe alım toplantılarımızı ayrıca rapor hazırlamadan yürütebildik." },
    { name: "Cem B.", role: "Yazılım Takım Lideri", imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&q=90", comment: "Teknik görüşmelerden sonra notlar farklı kanallarda kaldığı için adayları yeniden konuşmak zorunda kalıyorduk. Artık kodlama değerlendirmesiyle görüşme notlarını yan yana görüyor ve kararımızı daha hızlı kesinleştiriyoruz." },
    { name: "Derya S.", role: "İK İş Ortağı", imageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=160&q=90", comment: "Departman yöneticilerinin beklentilerini pozisyon açılırken sisteme aktarmak sonradan yaşanan fikir ayrılıklarını azalttı. Hangi yetkinliğin neden önemli olduğu en başından herkes için görünür kalıyor." },
    { name: "Onur G.", role: "Ürün Müdürü", imageUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=160&q=90", comment: "Ürün ekibine alım yaparken yalnızca özgeçmişe değil, problem çözme yaklaşımına da ağırlık veriyoruz. Düzenli değerlendirme sonuçları sayesinde farklı geçmişlerden gelen adayları daha adil karşılaştırıyoruz." },
    { name: "İrem N.", role: "İşe Alım Müdürü", imageUrl: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=160&q=90", comment: "Aynı ay içinde onlarca açık pozisyonu takip ederken hangi adayın kimden dönüş beklediğini bulmak zordu. Aşama görünümü ve ekip hatırlatmaları sayesinde bekleyen işleri kaçırmadan ilerliyoruz." },
    { name: "Emre P.", role: "Teknoloji Direktörü", imageUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=160&q=90", comment: "Kıdemli pozisyonlarda az sayıda fakat birbirine yakın adayla ilerliyoruz. Yetkinlik karşılaştırması görüşmelerde gözden kaçan ayrıntıları ortaya çıkarıp kararımızı somut verilere dayandırmamızı sağladı." },
    { name: "Aslı R.", role: "İK Analisti", imageUrl: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=160&q=90", comment: "Aylık işe alım raporları için farklı tablolardan veri toplamıyoruz. Süreçteki dönüşüm oranlarını ve bekleme sürelerini doğrudan gördüğümüz için iyileştirme alanlarını daha erken belirliyoruz." },
    { name: "Kerem V.", role: "Satış Direktörü", imageUrl: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&w=160&q=90", comment: "Satış ekibinde iletişim becerisi kadar sektör deneyimini de dengeli ölçmek istiyorduk. Aday kartlarındaki ortak ölçütler, ilk izlenim yerine role gerçekten uygun profillere odaklanmamızı sağladı." },
    { name: "Melis C.", role: "İşveren Markası Uzmanı", imageUrl: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=160&q=90", comment: "Başvuru sonrasında adayların nerede beklediğini görmek iletişim planımızı değiştirdi. Zamanında bilgilendirme yapabildiğimiz için süreç tamamlanmasa bile adaylardan daha olumlu geri bildirim alıyoruz." },
    { name: "Can O.", role: "Finans Müdürü", imageUrl: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?auto=format&fit=crop&w=160&q=90", comment: "Finans rollerinde ayrıntıya dikkat ve deneyim düzeyini birlikte değerlendirmek önemli. Standart soru ve puanlama yapısı, görüşmeciler arasındaki değerlendirme farkını belirgin biçimde azalttı." },
    { name: "Ece L.", role: "Eğitim ve Gelişim Uzmanı", imageUrl: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&w=160&q=90", comment: "Yeni çalışanların güçlü ve gelişime açık yönlerini işe alım aşamasından görebiliyoruz. Böylece işe başladıktan sonraki eğitim planını genel bir program yerine kişinin gerçek ihtiyaçlarına göre hazırlıyoruz." },
    { name: "Tolga H.", role: "Bölge Müdürü", imageUrl: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?auto=format&fit=crop&w=160&q=90", comment: "Farklı şehirlerdeki yöneticiler aynı pozisyon için görüşme yaptığında değerlendirmeler birbirinden kopuyordu. Tek akış üzerinden ilerlemek hem merkezi ekibin denetimini hem yerel yöneticilerin katkısını kolaylaştırdı." },
    { name: "Naz A.", role: "Proje Yöneticisi", imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&q=90", comment: "Proje bazlı büyürken kısa sürede doğru uzmanları bulmamız gerekiyor. Ön eleme sonuçlarının açıklanabilir olması, hız uğruna kaliteden ödün vermeden uygun adaylarla görüşmeye başlamamızı sağladı." },
  ],
  footerLinks: [
    { label: "Gizlilik Politikası", href: ROUTES.home },
    { label: "Kullanım Koşulları", href: ROUTES.home },
    { label: "Destek", href: ROUTES.home },
    { label: "Kurumsal Çözümler", href: ROUTES.employer },
  ],
} as const;

