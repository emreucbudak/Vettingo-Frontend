# Vettingo Frontend

Vettingo; adayların iş ilanlarını keşfedebildiği, başvurularını takip edebildiği ve değerlendirme süreçlerine katılabildiği, şirketlerin ise ilan ve aday süreçlerini yönetebildiği modern bir işe alım platformunun frontend uygulamasıdır.

Bu proje; aday, işveren ve insan kaynakları ekipleri için farklı kullanıcı deneyimlerini tek bir uygulama altında toplar.

## İçindekiler

- [Özellikler](#özellikler)
- [Kullanıcı Rolleri](#kullanıcı-rolleri)
- [Kullanılan Teknolojiler](#kullanılan-teknolojiler)
- [Proje Yapısı](#proje-yapısı)
- [Kurulum ve Çalıştırma](#kurulum-ve-çalıştırma)
- [Komutlar](#komutlar)
- [Önemli Sayfalar](#önemli-sayfalar)

## Özellikler

- Kullanıcı girişi ve kayıt ekranları
- Rol bazlı aday ve işveren sayfaları
- İş ilanlarını görüntüleme ve filtreleme
- Aday başvurularını takip etme
- Aday değerlendirme ve öz analiz ekranları
- Öz geçmiş yükleme akışı
- Değerlendirme oturumları
- İşveren ilan ve başvuru yönetimi
- Yetenek havuzu ve aday detay ekranları
- İK talep, aday, mülakat ve rapor ekranları
- Açık ve koyu tema desteği
- Farklı ekran boyutlarına uyumlu arayüz

## Kullanıcı Rolleri

### Aday

Aday kullanıcılar iş ilanlarını inceleyebilir, başvuru geçmişlerini takip edebilir, yaklaşan mülakatlarını görebilir ve değerlendirme sonuçlarını inceleyebilir.

### İşveren

İşveren kullanıcılar ilanlarını, başvuruları ve yetenek havuzundaki adayları yönetebilir. İşveren panelinde yardım merkezi ve hesap ayarları da bulunur.

### İnsan Kaynakları

İK ekranları; iş taleplerinin, adayların, mülakatların ve raporların merkezi bir panel üzerinden takip edilmesini sağlar.

## Kullanılan Teknolojiler

| Teknoloji | Kullanım amacı |
| --- | --- |
| [Next.js 16](https://nextjs.org/) | Uygulama çatısı ve sayfa yönlendirme |
| [React 19](https://react.dev/) | Kullanıcı arayüzü geliştirme |
| [TypeScript](https://www.typescriptlang.org/) | Tip güvenli JavaScript geliştirme |
| [Tailwind CSS 4](https://tailwindcss.com/) | Arayüz stilleri |
| [JOSE](https://github.com/panva/jose) | JWT işlemleri |
| [ESLint](https://eslint.org/) | Kod kalitesi ve statik analiz |

## Proje Yapısı

Proje, Next.js App Router ile katmanlı bir frontend mimarisini birlikte kullanır.

```text
vettingo/
├── app/                    # Next.js rotaları ve sayfa giriş noktaları
├── public/                 # Statik dosyalar
├── src/layers/
│   ├── entities/           # İş alanına ait veri modelleri
│   ├── features/           # Kullanıcı aksiyonları ve özellikler
│   ├── pages/              # Sayfa seviyesindeki arayüz bileşenleri
│   ├── shared/             # Ortak yapılandırma, yardımcılar ve UI bileşenleri
│   └── widgets/            # Birden fazla bileşenden oluşan arayüz blokları
├── proxy.ts                # Korumalı rotalar için rol ve oturum kontrolü
├── next.config.ts          # Next.js yapılandırması
├── package.json            # Bağımlılıklar ve proje komutları
└── tsconfig.json           # TypeScript yapılandırması
```

`@/` yolu, `src/layers/` klasörünü işaret eder. Örneğin:

```ts
import { CandidateShell } from "@/widgets/candidate/shell";
```

## Kurulum ve Çalıştırma

### Gereksinimler

Projeyi çalıştırmadan önce bilgisayarınızda aşağıdaki araçların kurulu olması gerekir:

- [Node.js](https://nodejs.org/)
- Node.js ile birlikte gelen `npm`
- [Git](https://git-scm.com/) — projeyi klonlamak için

### 1. Projeyi klonlayın

```bash
git clone https://github.com/emreucbudak/Vettingo-Frontend.git
cd Vettingo-Frontend/vettingo
```

Proje zaten bilgisayarınızdaysa doğrudan proje klasörüne geçebilirsiniz.

### 2. Bağımlılıkları yükleyin

```bash
npm install
```

### 3. Geliştirme sunucusunu başlatın

```bash
npm run dev
```

Uygulama başladıktan sonra tarayıcınızdan aşağıdaki adresi açın:

```text
http://localhost:3000
```

Geliştirme sunucusunu durdurmak için terminalde `Ctrl + C` tuşlarına basabilirsiniz.

## Komutlar

| Komut | Açıklama |
| --- | --- |
| `npm run dev` | Geliştirme sunucusunu başlatır |
| `npm run build` | Uygulamanın production derlemesini oluşturur |
| `npm run start` | Oluşturulan production derlemesini çalıştırır |
| `npm run lint` | ESLint kontrollerini çalıştırır |

Production modunda yerel olarak çalıştırmak için:

```bash
npm run build
npm run start
```

## Önemli Sayfalar

| Rota | Açıklama |
| --- | --- |
| `/` | Tanıtım ve ana sayfa |
| `/login` | Kullanıcı girişi |
| `/register` | Yeni kullanıcı kaydı |
| `/jobs` | İş ilanlarını keşfetme |
| `/candidate` | Aday paneli |
| `/candidate/applications` | Adayın başvuruları |
| `/candidate/settings` | Aday hesap ayarları |
| `/employer` | İşveren paneli |
| `/employer/jobs` | İşveren ilan yönetimi |
| `/employer/applications` | Başvuru yönetimi |
| `/employer/talents` | Yetenek havuzu |
| `/hr` | İnsan kaynakları paneli |
| `/hr/requisitions` | İş talepleri |
| `/hr/candidates` | Aday yönetimi |
| `/hr/interviews` | Mülakat takibi |
| `/assessment` | Değerlendirme başlangıç ekranı |
| `/resume-upload` | Öz geçmiş yükleme |

---

Bu README, projenin mevcut frontend yapısını ve temel çalışma adımlarını açıklamaktadır.
